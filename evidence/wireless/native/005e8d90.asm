; fn_5e8d90; image base 0x400000; static annotation only
  5e8d90:	55                   	push   ebp
  5e8d91:	8b ec                	mov    ebp,esp
  5e8d93:	6a ff                	push   0xffffffff
  5e8d95:	68 2d 77 69 00       	push   0x69772d
  5e8d9a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  5e8da0:	50                   	push   eax
  5e8da1:	83 ec 0c             	sub    esp,0xc
  5e8da4:	53                   	push   ebx
  5e8da5:	56                   	push   esi
  5e8da6:	57                   	push   edi
  5e8da7:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5e8dac:	33 c5                	xor    eax,ebp
  5e8dae:	50                   	push   eax
  5e8daf:	8d 45 f4             	lea    eax,[ebp-0xc]
  5e8db2:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  5e8db8:	8b f1                	mov    esi,ecx
  5e8dba:	89 75 ec             	mov    DWORD PTR [ebp-0x14],esi
  5e8dbd:	b9 c4 a2 7a 00       	mov    ecx,0x7aa2c4
  5e8dc2:	e8 27 fd e1 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5e8dc7:	0f 57 c0             	xorps  xmm0,xmm0
  5e8dca:	66 0f d6 46 08       	movq   QWORD PTR [esi+0x8],xmm0
  5e8dcf:	6a 18                	push   0x18
  5e8dd1:	c6 06 03             	mov    BYTE PTR [esi],0x3
  5e8dd4:	e8 dd a3 e1 ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  5e8dd9:	8b f8                	mov    edi,eax
  5e8ddb:	83 c4 04             	add    esp,0x4
  5e8dde:	8d 45 f3             	lea    eax,[ebp-0xd]
  5e8de1:	89 7d ec             	mov    DWORD PTR [ebp-0x14],edi
  5e8de4:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  5e8de7:	8b 55 08             	mov    edx,DWORD PTR [ebp+0x8]
  5e8dea:	8b c2                	mov    eax,edx
  5e8dec:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  5e8df3:	c7 07 00 00 00 00    	mov    DWORD PTR [edi],0x0
  5e8df9:	c7 47 10 00 00 00 00 	mov    DWORD PTR [edi+0x10],0x0
  5e8e00:	c7 47 14 0f 00 00 00 	mov    DWORD PTR [edi+0x14],0xf
  5e8e07:	8d 58 01             	lea    ebx,[eax+0x1]
  5e8e0a:	66 0f 1f 44 00 00    	nop    WORD PTR [eax+eax*1+0x0]
  5e8e10:	8a 08                	mov    cl,BYTE PTR [eax]
  5e8e12:	40                   	inc    eax
  5e8e13:	84 c9                	test   cl,cl
  5e8e15:	75 f9                	jne    0x5e8e10
  5e8e17:	2b c3                	sub    eax,ebx
  5e8e19:	8b cf                	mov    ecx,edi
  5e8e1b:	50                   	push   eax
  5e8e1c:	52                   	push   edx
  5e8e1d:	e8 f5 b5 e1 ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  5e8e22:	89 7e 08             	mov    DWORD PTR [esi+0x8],edi
  5e8e25:	8b c6                	mov    eax,esi
  5e8e27:	89 76 10             	mov    DWORD PTR [esi+0x10],esi
  5e8e2a:	c6 46 14 01          	mov    BYTE PTR [esi+0x14],0x1
  5e8e2e:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  5e8e31:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  5e8e38:	59                   	pop    ecx
  5e8e39:	5f                   	pop    edi
  5e8e3a:	5e                   	pop    esi
  5e8e3b:	5b                   	pop    ebx
  5e8e3c:	8b e5                	mov    esp,ebp
  5e8e3e:	5d                   	pop    ebp
  5e8e3f:	c2 04 00             	ret    0x4
