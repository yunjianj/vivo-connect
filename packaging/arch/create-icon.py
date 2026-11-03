#!/usr/bin/env python3
"""Create a project-owned generic application icon as a 256x256 PNG."""
import struct
import sys
import zlib

SIZE = 256
pixels = bytearray()
for y in range(SIZE):
    pixels.append(0)  # PNG filter: None
    for x in range(SIZE):
        # Rounded blue tile.
        dx, dy = max(28 - x, 0, x - 227), max(28 - y, 0, y - 227)
        inside = dx * dx + dy * dy <= 28 * 28
        color = (32, 82, 151, 255) if inside else (0, 0, 0, 0)
        # White phone outline and cyan screen.
        if inside and 86 <= x <= 169 and 43 <= y <= 212:
            color = (246, 250, 255, 255) if x in range(86, 95) or x in range(161, 170) or y in range(43, 52) or y in range(203, 212) else (49, 140, 208, 255)
        if inside and 108 <= x <= 147 and 190 <= y <= 197:
            color = (32, 82, 151, 255)
        pixels.extend(color)

def chunk(kind, data):
    body = kind + data
    return struct.pack('!I', len(data)) + body + struct.pack('!I', zlib.crc32(body) & 0xffffffff)

png = (b'\x89PNG\r\n\x1a\n'
       + chunk(b'IHDR', struct.pack('!2I5B', SIZE, SIZE, 8, 6, 0, 0, 0))
       + chunk(b'IDAT', zlib.compress(bytes(pixels), 9))
       + chunk(b'IEND', b''))
with open(sys.argv[1], 'wb') as output:
    output.write(png)
