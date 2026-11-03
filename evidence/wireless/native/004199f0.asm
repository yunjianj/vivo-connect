; fn_4199f0; image base 0x400000; static annotation only
  4199f0:	b9 6d 8b 7a 00       	mov    ecx,0x7a8b6d
  4199f5:	e8 f4 f0 fe ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  4199fa:	66 a1 10 19 6c 00    	mov    ax,ds:0x6c1910 ; ["nfo"]
  419a00:	f3 0f 7e 05 08 19 6c 	movq   xmm0,QWORD PTR ds:0x6c1908 ; ["device_info"]
  419a08:	66 a3 d0 43 79 00    	mov    ds:0x7943d0,ax
  419a0e:	a0 12 19 6c 00       	mov    al,ds:0x6c1912
  419a13:	68 40 98 6a 00       	push   0x6a9840
  419a18:	c7 05 dc 43 79 00 0f 	mov    DWORD PTR ds:0x7943dc,0xf
  419a22:	c7 05 d8 43 79 00 0b 	mov    DWORD PTR ds:0x7943d8,0xb
  419a2c:	66 0f d6 05 c8 43 79 	movq   QWORD PTR ds:0x7943c8,xmm0
  419a34:	a2 d2 43 79 00       	mov    ds:0x7943d2,al
  419a39:	c6 05 d3 43 79 00 00 	mov    BYTE PTR ds:0x7943d3,0x0
  419a40:	e8 c5 c0 fe ff       	call   0x405b0a ; ["call resolved=0x666a28 "]
  419a45:	59                   	pop    ecx
  419a46:	c3                   	ret
