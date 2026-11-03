; fn_4a3010; image base 0x400000; static annotation only
  4a3010:	56                   	push   esi
  4a3011:	8b f1                	mov    esi,ecx
  4a3013:	b9 33 80 7a 00       	mov    ecx,0x7a8033
  4a3018:	e8 d1 5a f6 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  4a301d:	8b 86 80 00 00 00    	mov    eax,DWORD PTR [esi+0x80]
  4a3023:	90                   	nop
  4a3024:	85 c0                	test   eax,eax
  4a3026:	74 0e                	je     0x4a3036
  4a3028:	8b 86 80 00 00 00    	mov    eax,DWORD PTR [esi+0x80]
  4a302e:	90                   	nop
  4a302f:	50                   	push   eax
  4a3030:	ff 15 d8 df 79 00    	call   DWORD PTR ds:0x79dfd8
  4a3036:	5e                   	pop    esi
  4a3037:	c3                   	ret
