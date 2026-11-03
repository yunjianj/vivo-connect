; fn_42c1d0; image base 0x400000; static annotation only
  42c1d0:	b9 95 a2 7a 00       	mov    ecx,0x7aa295
  42c1d5:	e8 14 c9 fd ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  42c1da:	a1 20 19 6c 00       	mov    eax,ds:0x6c1920 ; ["primary"]
  42c1df:	f3 0f 7e 05 18 19 6c 	movq   xmm0,QWORD PTR ds:0x6c1918 ; ["connect_primary"]
  42c1e7:	a3 24 88 79 00       	mov    ds:0x798824,eax
  42c1ec:	66 a1 24 19 6c 00    	mov    ax,ds:0x6c1924 ; ["ary"]
  42c1f2:	66 a3 28 88 79 00    	mov    ds:0x798828,ax
  42c1f8:	a0 26 19 6c 00       	mov    al,ds:0x6c1926
  42c1fd:	68 80 66 6b 00       	push   0x6b6680
  42c202:	c7 05 30 88 79 00 0f 	mov    DWORD PTR ds:0x798830,0xf
  42c20c:	c7 05 2c 88 79 00 0f 	mov    DWORD PTR ds:0x79882c,0xf
  42c216:	66 0f d6 05 1c 88 79 	movq   QWORD PTR ds:0x79881c,xmm0
  42c21e:	a2 2a 88 79 00       	mov    ds:0x79882a,al
  42c223:	c6 05 2b 88 79 00 00 	mov    BYTE PTR ds:0x79882b,0x0
  42c22a:	e8 db 98 fd ff       	call   0x405b0a ; ["call resolved=0x666a28 "]
  42c22f:	59                   	pop    ecx
  42c230:	c3                   	ret
