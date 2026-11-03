#!/usr/bin/env python3
"""Extract preconnection DEX evidence without running or changing an APK."""
import argparse
import hashlib
import json
from pathlib import Path
import re
import zipfile


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('apk', type=Path)
    parser.add_argument('--output', type=Path, required=True)
    parser.add_argument('--class', dest='classes', action='append', default=[],
                        help='Also include this exact DEX class descriptor')
    parser.add_argument('--class-prefix', action='append', default=[])
    parser.add_argument('--needle', action='append', default=[])
    args = parser.parse_args()
    from loguru import logger
    logger.disable('androguard')
    from androguard.core.dex import DEX

    needles = tuple(args.needle or ('PcPreConnect', 'randomId', 'PAY_LOAD_1', 'p2pReConnect', 'reqId'))
    args.output.mkdir(parents=True, exist_ok=True)
    index = {'apkSha256': hashlib.sha256(args.apk.read_bytes()).hexdigest(),
             'selection': list(needles), 'explicitClasses': args.classes,
             'classPrefixes': args.class_prefix, 'classes': []}
    with zipfile.ZipFile(args.apk) as archive:
        for name in archive.namelist():
            if not re.fullmatch(r'classes\d*\.dex', name):
                continue
            vm = DEX(archive.read(name))
            for cls in vm.get_classes():
                if cls.get_name().startswith('Lcom/vivo/aisdk/'):
                    continue
                methods, hits = [], set()
                for method in cls.get_methods():
                    if not method.get_code():
                        continue
                    lines, offset = [], 0
                    for instruction in method.get_instructions():
                        text = instruction.get_name() + ' ' + instruction.get_output()
                        hits.update(needle for needle in needles if needle in text)
                        lines.append(f'{offset:06x}: {text}')
                        offset += instruction.get_length()
                    methods.append('METHOD ' + method.get_name() + method.get_descriptor()
                                   + '\n' + '\n'.join(lines))
                if not hits and cls.get_name() not in args.classes and not any(
                        cls.get_name().startswith(prefix) for prefix in args.class_prefix):
                    continue
                filename = name + '__' + hashlib.sha256(cls.get_name().encode()).hexdigest()[:12] + '.txt'
                fields = '\n'.join(f'{field.get_name()} {field.get_descriptor()}' for field in cls.get_fields())
                (args.output / filename).write_text(f'DEX {name}\nCLASS {cls.get_name()}\nFIELDS\n{fields}\n\n'
                                                  + '\n\n'.join(methods) + '\n')
                index['classes'].append({'dex': name, 'class': cls.get_name(),
                                         'source': filename, 'hits': sorted(hits)})
            print(f'{name}: {len(index["classes"])} selected classes', flush=True)
    (args.output / 'index.json').write_text(json.dumps(index, indent=2) + '\n')


if __name__ == '__main__':
    main()
