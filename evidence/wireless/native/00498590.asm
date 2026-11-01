; fn_498590; image base 0x400000; static annotation only
  498590:	b9 11 80 7a 00       	mov    ecx,0x7a8011
  498595:	e8 54 05 f7 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  49859a:	8b 54 24 04          	mov    edx,DWORD PTR [esp+0x4]
  49859e:	8b c2                	mov    eax,edx
  4985a0:	8b 4c 24 08          	mov    ecx,DWORD PTR [esp+0x8]
  4985a4:	c1 f8 18             	sar    eax,0x18
  4985a7:	88 01                	mov    BYTE PTR [ecx],al
  4985a9:	8b c2                	mov    eax,edx
  4985ab:	c1 f8 10             	sar    eax,0x10
  4985ae:	88 41 01             	mov    BYTE PTR [ecx+0x1],al
  4985b1:	8b c2                	mov    eax,edx
  4985b3:	c1 f8 08             	sar    eax,0x8
  4985b6:	88 41 02             	mov    BYTE PTR [ecx+0x2],al
  4985b9:	88 51 03             	mov    BYTE PTR [ecx+0x3],dl
  4985bc:	c3                   	ret
