; fn_5e8b00; image base 0x400000; static annotation only
  5e8b00:	55                   	push   ebp
  5e8b01:	8b ec                	mov    ebp,esp
  5e8b03:	6a ff                	push   0xffffffff
  5e8b05:	68 6d 76 69 00       	push   0x69766d
  5e8b0a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  5e8b10:	50                   	push   eax
  5e8b11:	83 ec 0c             	sub    esp,0xc
  5e8b14:	53                   	push   ebx
  5e8b15:	56                   	push   esi
  5e8b16:	57                   	push   edi
  5e8b17:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5e8b1c:	33 c5                	xor    eax,ebp
  5e8b1e:	50                   	push   eax
  5e8b1f:	8d 45 f4             	lea    eax,[ebp-0xc]
  5e8b22:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  5e8b28:	8b f9                	mov    edi,ecx
  5e8b2a:	b9 c4 a2 7a 00       	mov    ecx,0x7aa2c4
  5e8b2f:	e8 ba ff e1 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5e8b34:	0f 57 c0             	xorps  xmm0,xmm0
  5e8b37:	66 0f d6 47 08       	movq   QWORD PTR [edi+0x8],xmm0
  5e8b3c:	6a 18                	push   0x18
  5e8b3e:	c6 07 03             	mov    BYTE PTR [edi],0x3
  5e8b41:	e8 70 a6 e1 ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  5e8b46:	8b f0                	mov    esi,eax
  5e8b48:	83 c4 04             	add    esp,0x4
  5e8b4b:	8d 45 f3             	lea    eax,[ebp-0xd]
  5e8b4e:	89 75 ec             	mov    DWORD PTR [ebp-0x14],esi
  5e8b51:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  5e8b54:	8b 55 08             	mov    edx,DWORD PTR [ebp+0x8]
  5e8b57:	8b c2                	mov    eax,edx
  5e8b59:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  5e8b60:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  5e8b66:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  5e8b6d:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  5e8b74:	8d 58 01             	lea    ebx,[eax+0x1]
  5e8b77:	8a 08                	mov    cl,BYTE PTR [eax]
  5e8b79:	40                   	inc    eax
  5e8b7a:	84 c9                	test   cl,cl
  5e8b7c:	75 f9                	jne    0x5e8b77
  5e8b7e:	2b c3                	sub    eax,ebx
  5e8b80:	8b ce                	mov    ecx,esi
  5e8b82:	50                   	push   eax
  5e8b83:	52                   	push   edx
  5e8b84:	e8 8e b8 e1 ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  5e8b89:	89 77 08             	mov    DWORD PTR [edi+0x8],esi
  5e8b8c:	8b c7                	mov    eax,edi
  5e8b8e:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  5e8b91:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  5e8b98:	59                   	pop    ecx
  5e8b99:	5f                   	pop    edi
  5e8b9a:	5e                   	pop    esi
  5e8b9b:	5b                   	pop    ebx
  5e8b9c:	8b e5                	mov    esp,ebp
  5e8b9e:	5d                   	pop    ebp
  5e8b9f:	c2 04 00             	ret    0x4
