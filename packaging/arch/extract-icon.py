#!/usr/bin/env python3
"""Extract the 256px PNG from the supplied official Windows icon resource."""
import pathlib, struct, sys
source, target = map(pathlib.Path, sys.argv[1:])
data = source.read_bytes()
reserved, kind, count = struct.unpack_from('<HHH', data)
if reserved != 0 or kind != 1: raise SystemExit('invalid icon resource')
for i in range(count):
    w, h, _, _, _, _, size, offset = struct.unpack_from('<BBBBHHII', data, 6 + i * 16)
    image = data[offset:offset + size]
    if w == 0 and h == 0 and image.startswith(b'\x89PNG\r\n\x1a\n'):
        target.write_bytes(image)
        break
else: raise SystemExit('official icon has no 256px PNG')
