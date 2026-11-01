; fn_5e8cb0; image base 0x400000; static annotation only
  5e8cb0:	55                   	push   ebp
  5e8cb1:	8b ec                	mov    ebp,esp
  5e8cb3:	6a ff                	push   0xffffffff
  5e8cb5:	68 ed 76 69 00       	push   0x6976ed
  5e8cba:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  5e8cc0:	50                   	push   eax
  5e8cc1:	83 ec 0c             	sub    esp,0xc
  5e8cc4:	53                   	push   ebx
  5e8cc5:	56                   	push   esi
  5e8cc6:	57                   	push   edi
  5e8cc7:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5e8ccc:	33 c5                	xor    eax,ebp
  5e8cce:	50                   	push   eax
  5e8ccf:	8d 45 f4             	lea    eax,[ebp-0xc]
  5e8cd2:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  5e8cd8:	8b f1                	mov    esi,ecx
  5e8cda:	89 75 ec             	mov    DWORD PTR [ebp-0x14],esi
  5e8cdd:	b9 c4 a2 7a 00       	mov    ecx,0x7aa2c4
  5e8ce2:	e8 07 fe e1 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5e8ce7:	0f 57 c0             	xorps  xmm0,xmm0
  5e8cea:	66 0f d6 46 08       	movq   QWORD PTR [esi+0x8],xmm0
  5e8cef:	6a 18                	push   0x18
  5e8cf1:	c6 06 03             	mov    BYTE PTR [esi],0x3
  5e8cf4:	e8 bd a4 e1 ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  5e8cf9:	8b f8                	mov    edi,eax
  5e8cfb:	83 c4 04             	add    esp,0x4
  5e8cfe:	8d 45 f3             	lea    eax,[ebp-0xd]
  5e8d01:	89 7d ec             	mov    DWORD PTR [ebp-0x14],edi
  5e8d04:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  5e8d07:	8b 55 08             	mov    edx,DWORD PTR [ebp+0x8]
  5e8d0a:	8b c2                	mov    eax,edx
  5e8d0c:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  5e8d13:	c7 07 00 00 00 00    	mov    DWORD PTR [edi],0x0
  5e8d19:	c7 47 10 00 00 00 00 	mov    DWORD PTR [edi+0x10],0x0
  5e8d20:	c7 47 14 0f 00 00 00 	mov    DWORD PTR [edi+0x14],0xf
  5e8d27:	8d 58 01             	lea    ebx,[eax+0x1]
  5e8d2a:	66 0f 1f 44 00 00    	nop    WORD PTR [eax+eax*1+0x0]
  5e8d30:	8a 08                	mov    cl,BYTE PTR [eax]
  5e8d32:	40                   	inc    eax
  5e8d33:	84 c9                	test   cl,cl
  5e8d35:	75 f9                	jne    0x5e8d30
  5e8d37:	2b c3                	sub    eax,ebx
  5e8d39:	8b cf                	mov    ecx,edi
  5e8d3b:	50                   	push   eax
  5e8d3c:	52                   	push   edx
  5e8d3d:	e8 d5 b6 e1 ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  5e8d42:	89 7e 08             	mov    DWORD PTR [esi+0x8],edi
  5e8d45:	8b c6                	mov    eax,esi
  5e8d47:	89 76 10             	mov    DWORD PTR [esi+0x10],esi
  5e8d4a:	c6 46 14 01          	mov    BYTE PTR [esi+0x14],0x1
  5e8d4e:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  5e8d51:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  5e8d58:	59                   	pop    ecx
  5e8d59:	5f                   	pop    edi
  5e8d5a:	5e                   	pop    esi
  5e8d5b:	5b                   	pop    ebx
  5e8d5c:	8b e5                	mov    esp,ebp
  5e8d5e:	5d                   	pop    ebp
  5e8d5f:	c2 04 00             	ret    0x4
