; vivo::Worker::recvTcp; image base 0x400000; static annotation only
  611c40:	55                   	push   ebp
  611c41:	8b ec                	mov    ebp,esp
  611c43:	6a ff                	push   0xffffffff
  611c45:	68 92 c1 69 00       	push   0x69c192
  611c4a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  611c50:	50                   	push   eax
  611c51:	81 ec 00 06 00 00    	sub    esp,0x600
  611c57:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  611c5c:	33 c5                	xor    eax,ebp
  611c5e:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  611c61:	53                   	push   ebx
  611c62:	56                   	push   esi
  611c63:	57                   	push   edi
  611c64:	50                   	push   eax
  611c65:	8d 45 f4             	lea    eax,[ebp-0xc]
  611c68:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  611c6e:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  611c71:	89 8d 40 fa ff ff    	mov    DWORD PTR [ebp-0x5c0],ecx
  611c77:	8b 75 20             	mov    esi,DWORD PTR [ebp+0x20]
  611c7a:	89 b5 64 fa ff ff    	mov    DWORD PTR [ebp-0x59c],esi
  611c80:	89 b5 38 fa ff ff    	mov    DWORD PTR [ebp-0x5c8],esi
  611c86:	c7 85 60 fa ff ff 00 	mov    DWORD PTR [ebp-0x5a0],0x0
  611c90:	b9 97 aa 7a 00       	mov    ecx,0x7aaa97
  611c95:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  611c9c:	e8 4d 6e df ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  611ca1:	6a 5c                	push   0x5c
  611ca3:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  611ca8:	e8 b9 6a 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  611cad:	83 c4 08             	add    esp,0x8
  611cb0:	85 c0                	test   eax,eax
  611cb2:	74 12                	je     0x611cc6
  611cb4:	6a 5c                	push   0x5c
  611cb6:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  611cbb:	e8 a6 6a 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  611cc0:	83 c4 08             	add    esp,0x8
  611cc3:	40                   	inc    eax
  611cc4:	eb 05                	jmp    0x611ccb
  611cc6:	b8 cc 66 6c 00       	mov    eax,0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  611ccb:	68 54 67 6f 00       	push   0x6f6754 ; ["vivo::Worker::recvTcp"]
  611cd0:	68 ef 01 00 00       	push   0x1ef
  611cd5:	50                   	push   eax
  611cd6:	68 70 67 6f 00       	push   0x6f6770 ; ["[ConntctionModule][%s:%d][%s]: recvTcp thread is created\n"]
  611cdb:	8d 85 70 fa ff ff    	lea    eax,[ebp-0x590]
  611ce1:	c7 85 70 fa ff ff 02 	mov    DWORD PTR [ebp-0x590],0x2
  611ceb:	50                   	push   eax
  611cec:	8d 85 4c fb ff ff    	lea    eax,[ebp-0x4b4]
  611cf2:	50                   	push   eax
  611cf3:	e8 11 53 df ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  611cf8:	8b 95 60 fb ff ff    	mov    edx,DWORD PTR [ebp-0x4a0]
  611cfe:	83 c4 18             	add    esp,0x18
  611d01:	83 fa 10             	cmp    edx,0x10
  611d04:	72 2f                	jb     0x611d35
  611d06:	8b 8d 4c fb ff ff    	mov    ecx,DWORD PTR [ebp-0x4b4]
  611d0c:	42                   	inc    edx
  611d0d:	8b c1                	mov    eax,ecx
  611d0f:	81 fa 00 10 00 00    	cmp    edx,0x1000
  611d15:	72 14                	jb     0x611d2b
  611d17:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  611d1a:	83 c2 23             	add    edx,0x23
  611d1d:	2b c1                	sub    eax,ecx
  611d1f:	83 c0 fc             	add    eax,0xfffffffc
  611d22:	83 f8 1f             	cmp    eax,0x1f
  611d25:	0f 87 75 16 00 00    	ja     0x6133a0
  611d2b:	52                   	push   edx
  611d2c:	51                   	push   ecx
  611d2d:	e8 68 03 df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  611d32:	83 c4 08             	add    esp,0x8
  611d35:	68 00 02 00 00       	push   0x200
  611d3a:	8d 85 dc fb ff ff    	lea    eax,[ebp-0x424]
  611d40:	6a 00                	push   0x0
  611d42:	50                   	push   eax
  611d43:	e8 4e 6a 05 00       	call   0x668796 ; ["call resolved=0x668796 "]
  611d48:	0f 57 c0             	xorps  xmm0,xmm0
  611d4b:	c7 45 d6 00 00 00 00 	mov    DWORD PTR [ebp-0x2a],0x0
  611d52:	83 c4 0c             	add    esp,0xc
  611d55:	66 0f d6 45 ce       	movq   QWORD PTR [ebp-0x32],xmm0
  611d5a:	66 c7 45 da 00 00    	mov    WORD PTR [ebp-0x26],0x0
  611d60:	b0 01                	mov    al,0x1
  611d62:	84 c0                	test   al,al
  611d64:	0f 84 3c 16 00 00    	je     0x6133a6
  611d6a:	6a 00                	push   0x0
  611d6c:	68 00 02 00 00       	push   0x200
  611d71:	8d 85 dc fb ff ff    	lea    eax,[ebp-0x424]
  611d77:	50                   	push   eax
  611d78:	ff 36                	push   DWORD PTR [esi]
  611d7a:	ff 15 d4 d8 79 00    	call   DWORD PTR ds:0x79d8d4
  611d80:	85 c0                	test   eax,eax
  611d82:	0f 84 1e 16 00 00    	je     0x6133a6
  611d88:	b9 7c 00 00 00       	mov    ecx,0x7c
  611d8d:	c7 85 c4 fb ff ff 00 	mov    DWORD PTR [ebp-0x43c],0x0
  611d97:	8d b5 ea fb ff ff    	lea    esi,[ebp-0x416]
  611d9d:	c7 85 d4 fb ff ff 00 	mov    DWORD PTR [ebp-0x42c],0x0
  611da7:	8d bd dc fd ff ff    	lea    edi,[ebp-0x224]
  611dad:	c7 85 d8 fb ff ff 0f 	mov    DWORD PTR [ebp-0x428],0xf
  611db7:	f3 a5                	rep movs DWORD PTR es:[edi],DWORD PTR ds:[esi]
  611db9:	8d 8d dc fd ff ff    	lea    ecx,[ebp-0x224]
  611dbf:	c6 85 c4 fb ff ff 00 	mov    BYTE PTR [ebp-0x43c],0x0
  611dc6:	8d 51 01             	lea    edx,[ecx+0x1]
  611dc9:	66 a5                	movs   WORD PTR es:[edi],WORD PTR ds:[esi]
  611dcb:	0f 1f 44 00 00       	nop    DWORD PTR [eax+eax*1+0x0]
  611dd0:	8a 01                	mov    al,BYTE PTR [ecx]
  611dd2:	41                   	inc    ecx
  611dd3:	84 c0                	test   al,al
  611dd5:	75 f9                	jne    0x611dd0
  611dd7:	2b ca                	sub    ecx,edx
  611dd9:	8d 85 dc fd ff ff    	lea    eax,[ebp-0x224]
  611ddf:	51                   	push   ecx
  611de0:	50                   	push   eax
  611de1:	8d 8d c4 fb ff ff    	lea    ecx,[ebp-0x43c]
  611de7:	e8 2b 26 df ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  611dec:	83 bd d8 fb ff ff 10 	cmp    DWORD PTR [ebp-0x428],0x10
  611df3:	8d b5 c4 fb ff ff    	lea    esi,[ebp-0x43c]
  611df9:	6a 5c                	push   0x5c
  611dfb:	0f 43 b5 c4 fb ff ff 	cmovae esi,DWORD PTR [ebp-0x43c]
  611e02:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  611e07:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  611e0b:	e8 56 69 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  611e10:	83 c4 08             	add    esp,0x8
  611e13:	85 c0                	test   eax,eax
  611e15:	74 12                	je     0x611e29
  611e17:	6a 5c                	push   0x5c
  611e19:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  611e1e:	e8 43 69 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  611e23:	83 c4 08             	add    esp,0x8
  611e26:	40                   	inc    eax
  611e27:	eb 05                	jmp    0x611e2e
  611e29:	b8 cc 66 6c 00       	mov    eax,0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  611e2e:	56                   	push   esi
  611e2f:	68 54 67 6f 00       	push   0x6f6754 ; ["vivo::Worker::recvTcp"]
  611e34:	68 f9 01 00 00       	push   0x1f9
  611e39:	50                   	push   eax
  611e3a:	68 b8 67 6f 00       	push   0x6f67b8 ; ["[ConntctionModule][%s:%d][%s]: recv buffer: %s\n"]
  611e3f:	8d 85 70 fa ff ff    	lea    eax,[ebp-0x590]
  611e45:	c7 85 70 fa ff ff 02 	mov    DWORD PTR [ebp-0x590],0x2
  611e4f:	50                   	push   eax
  611e50:	8d 85 4c fb ff ff    	lea    eax,[ebp-0x4b4]
  611e56:	50                   	push   eax
  611e57:	e8 ad 51 df ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  611e5c:	8b 95 60 fb ff ff    	mov    edx,DWORD PTR [ebp-0x4a0]
  611e62:	83 c4 1c             	add    esp,0x1c
  611e65:	83 fa 10             	cmp    edx,0x10
  611e68:	72 2f                	jb     0x611e99
  611e6a:	8b 8d 4c fb ff ff    	mov    ecx,DWORD PTR [ebp-0x4b4]
  611e70:	42                   	inc    edx
  611e71:	8b c1                	mov    eax,ecx
  611e73:	81 fa 00 10 00 00    	cmp    edx,0x1000
  611e79:	72 14                	jb     0x611e8f
  611e7b:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  611e7e:	83 c2 23             	add    edx,0x23
  611e81:	2b c1                	sub    eax,ecx
  611e83:	83 c0 fc             	add    eax,0xfffffffc
  611e86:	83 f8 1f             	cmp    eax,0x1f
  611e89:	0f 87 11 15 00 00    	ja     0x6133a0
  611e8f:	52                   	push   edx
  611e90:	51                   	push   ecx
  611e91:	e8 04 02 df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  611e96:	83 c4 08             	add    esp,0x8
  611e99:	68 00 02 00 00       	push   0x200
  611e9e:	8d 85 dc fb ff ff    	lea    eax,[ebp-0x424]
  611ea4:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  611ea8:	6a 00                	push   0x0
  611eaa:	50                   	push   eax
  611eab:	e8 e6 68 05 00       	call   0x668796 ; ["call resolved=0x668796 "]
  611eb0:	8b 85 d4 fb ff ff    	mov    eax,DWORD PTR [ebp-0x42c]
  611eb6:	8d 8d c4 fb ff ff    	lea    ecx,[ebp-0x43c]
  611ebc:	83 c4 0c             	add    esp,0xc
  611ebf:	83 bd d8 fb ff ff 10 	cmp    DWORD PTR [ebp-0x428],0x10
  611ec6:	0f 43 8d c4 fb ff ff 	cmovae ecx,DWORD PTR [ebp-0x43c]
  611ecd:	03 c1                	add    eax,ecx
  611ecf:	83 bd d8 fb ff ff 10 	cmp    DWORD PTR [ebp-0x428],0x10
  611ed6:	8d 8d c4 fb ff ff    	lea    ecx,[ebp-0x43c]
  611edc:	0f 43 8d c4 fb ff ff 	cmovae ecx,DWORD PTR [ebp-0x43c]
  611ee3:	50                   	push   eax
  611ee4:	51                   	push   ecx
  611ee5:	8d 8d 20 fa ff ff    	lea    ecx,[ebp-0x5e0]
  611eeb:	e8 f6 32 df ff       	call   0x4051e6 ; ["call resolved=0x4a7d20 "]
  611ef0:	6a 01                	push   0x1
  611ef2:	83 ec 28             	sub    esp,0x28
  611ef5:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  611ef9:	8b c4                	mov    eax,esp
  611efb:	c7 40 24 00 00 00 00 	mov    DWORD PTR [eax+0x24],0x0
  611f02:	8d 85 20 fa ff ff    	lea    eax,[ebp-0x5e0]
  611f08:	50                   	push   eax
  611f09:	8d 85 44 fa ff ff    	lea    eax,[ebp-0x5bc]
  611f0f:	50                   	push   eax
  611f10:	e8 ba fe de ff       	call   0x401dcf ; ["call resolved=0x4b45e0 "]
  611f15:	83 c4 34             	add    esp,0x34
  611f18:	8b b5 24 fa ff ff    	mov    esi,DWORD PTR [ebp-0x5dc]
  611f1e:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  611f22:	85 f6                	test   esi,esi
  611f24:	74 21                	je     0x611f47
  611f26:	83 c8 ff             	or     eax,0xffffffff
  611f29:	f0 0f c1 46 04       	lock xadd DWORD PTR [esi+0x4],eax
  611f2e:	75 17                	jne    0x611f47
  611f30:	8b 06                	mov    eax,DWORD PTR [esi]
  611f32:	8b ce                	mov    ecx,esi
  611f34:	ff 10                	call   DWORD PTR [eax]
  611f36:	83 c8 ff             	or     eax,0xffffffff
  611f39:	f0 0f c1 46 08       	lock xadd DWORD PTR [esi+0x8],eax
  611f3e:	75 07                	jne    0x611f47
  611f40:	8b 06                	mov    eax,DWORD PTR [esi]
  611f42:	8b ce                	mov    ecx,esi
  611f44:	ff 50 04             	call   DWORD PTR [eax+0x4]
  611f47:	68 04 68 6c 00       	push   0x6c6804 ; ["bytes"]
  611f4c:	8d 8d 44 fa ff ff    	lea    ecx,[ebp-0x5bc]
  611f52:	e8 87 17 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  611f57:	8d 8d 54 fa ff ff    	lea    ecx,[ebp-0x5ac]
  611f5d:	51                   	push   ecx
  611f5e:	8b c8                	mov    ecx,eax
  611f60:	e8 e5 32 df ff       	call   0x40524a ; ["call resolved=0x55c750 "]
  611f65:	8b 85 54 fa ff ff    	mov    eax,DWORD PTR [ebp-0x5ac]
  611f6b:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  611f6f:	83 38 00             	cmp    DWORD PTR [eax],0x0
  611f72:	0f 84 a5 01 00 00    	je     0x61211d
  611f78:	8b bd 64 fa ff ff    	mov    edi,DWORD PTR [ebp-0x59c]
  611f7e:	ff 37                	push   DWORD PTR [edi]
  611f80:	ff 15 f0 d8 79 00    	call   DWORD PTR ds:0x79d8f0
  611f86:	6a 5c                	push   0x5c
  611f88:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  611f8d:	e8 d4 67 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  611f92:	83 c4 08             	add    esp,0x8
  611f95:	85 c0                	test   eax,eax
  611f97:	74 12                	je     0x611fab
  611f99:	6a 5c                	push   0x5c
  611f9b:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  611fa0:	e8 c1 67 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  611fa5:	83 c4 08             	add    esp,0x8
  611fa8:	40                   	inc    eax
  611fa9:	eb 05                	jmp    0x611fb0
  611fab:	b8 cc 66 6c 00       	mov    eax,0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  611fb0:	68 54 67 6f 00       	push   0x6f6754 ; ["vivo::Worker::recvTcp"]
  611fb5:	68 02 02 00 00       	push   0x202
  611fba:	50                   	push   eax
  611fbb:	68 f8 67 6f 00       	push   0x6f67f8 ; ["[ConntctionModule][%s:%d][%s]: recv buffer not contains [0] bytes array\n"]
  611fc0:	8d 85 70 fa ff ff    	lea    eax,[ebp-0x590]
  611fc6:	c7 85 70 fa ff ff 02 	mov    DWORD PTR [ebp-0x590],0x2
  611fd0:	50                   	push   eax
  611fd1:	8d 85 04 fb ff ff    	lea    eax,[ebp-0x4fc]
  611fd7:	50                   	push   eax
  611fd8:	e8 2c 50 df ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  611fdd:	8b 95 18 fb ff ff    	mov    edx,DWORD PTR [ebp-0x4e8]
  611fe3:	83 c4 18             	add    esp,0x18
  611fe6:	83 fa 10             	cmp    edx,0x10
  611fe9:	72 2f                	jb     0x61201a
  611feb:	8b 8d 04 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x4fc]
  611ff1:	42                   	inc    edx
  611ff2:	8b c1                	mov    eax,ecx
  611ff4:	81 fa 00 10 00 00    	cmp    edx,0x1000
  611ffa:	72 14                	jb     0x612010
  611ffc:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  611fff:	83 c2 23             	add    edx,0x23
  612002:	2b c1                	sub    eax,ecx
  612004:	83 c0 fc             	add    eax,0xfffffffc
  612007:	83 f8 1f             	cmp    eax,0x1f
  61200a:	0f 87 f6 0f 00 00    	ja     0x613006
  612010:	52                   	push   edx
  612011:	51                   	push   ecx
  612012:	e8 83 00 df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  612017:	83 c4 08             	add    esp,0x8
  61201a:	8b 95 54 fa ff ff    	mov    edx,DWORD PTR [ebp-0x5ac]
  612020:	85 d2                	test   edx,edx
  612022:	74 51                	je     0x612075
  612024:	8b 8d 5c fa ff ff    	mov    ecx,DWORD PTR [ebp-0x5a4]
  61202a:	8b c2                	mov    eax,edx
  61202c:	2b ca                	sub    ecx,edx
  61202e:	83 e1 fc             	and    ecx,0xfffffffc
  612031:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  612037:	72 14                	jb     0x61204d
  612039:	8b 52 fc             	mov    edx,DWORD PTR [edx-0x4]
  61203c:	83 c1 23             	add    ecx,0x23
  61203f:	2b c2                	sub    eax,edx
  612041:	83 c0 fc             	add    eax,0xfffffffc
  612044:	83 f8 1f             	cmp    eax,0x1f
  612047:	0f 87 b9 0f 00 00    	ja     0x613006
  61204d:	51                   	push   ecx
  61204e:	52                   	push   edx
  61204f:	e8 46 00 df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  612054:	83 c4 08             	add    esp,0x8
  612057:	c7 85 54 fa ff ff 00 	mov    DWORD PTR [ebp-0x5ac],0x0
  612061:	c7 85 58 fa ff ff 00 	mov    DWORD PTR [ebp-0x5a8],0x0
  61206b:	c7 85 5c fa ff ff 00 	mov    DWORD PTR [ebp-0x5a4],0x0
  612075:	8d 8d 44 fa ff ff    	lea    ecx,[ebp-0x5bc]
  61207b:	e8 5e 7f df ff       	call   0x409fde ; ["call resolved=0x480970 "]
  612080:	ff b5 44 fa ff ff    	push   DWORD PTR [ebp-0x5bc]
  612086:	8d 8d 4c fa ff ff    	lea    ecx,[ebp-0x5b4]
  61208c:	e8 bd 78 df ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  612091:	8b 95 d8 fb ff ff    	mov    edx,DWORD PTR [ebp-0x428]
  612097:	83 fa 10             	cmp    edx,0x10
  61209a:	72 2f                	jb     0x6120cb
  61209c:	8b 8d c4 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x43c]
  6120a2:	42                   	inc    edx
  6120a3:	8b c1                	mov    eax,ecx
  6120a5:	81 fa 00 10 00 00    	cmp    edx,0x1000
  6120ab:	72 14                	jb     0x6120c1
  6120ad:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  6120b0:	83 c2 23             	add    edx,0x23
  6120b3:	2b c1                	sub    eax,ecx
  6120b5:	83 c0 fc             	add    eax,0xfffffffc
  6120b8:	83 f8 1f             	cmp    eax,0x1f
  6120bb:	0f 87 45 0f 00 00    	ja     0x613006
  6120c1:	52                   	push   edx
  6120c2:	51                   	push   ecx
  6120c3:	e8 d2 ff de ff       	call   0x40209a ; ["call resolved=0x6665be "]
  6120c8:	83 c4 08             	add    esp,0x8
  6120cb:	8b 55 1c             	mov    edx,DWORD PTR [ebp+0x1c]
  6120ce:	c7 85 d4 fb ff ff 00 	mov    DWORD PTR [ebp-0x42c],0x0
  6120d8:	c7 85 d8 fb ff ff 0f 	mov    DWORD PTR [ebp-0x428],0xf
  6120e2:	c6 85 c4 fb ff ff 00 	mov    BYTE PTR [ebp-0x43c],0x0
  6120e9:	83 fa 10             	cmp    edx,0x10
  6120ec:	0f 82 0f 08 00 00    	jb     0x612901
  6120f2:	8b 4d 08             	mov    ecx,DWORD PTR [ebp+0x8]
  6120f5:	42                   	inc    edx
  6120f6:	8b c1                	mov    eax,ecx
  6120f8:	81 fa 00 10 00 00    	cmp    edx,0x1000
  6120fe:	0f 82 f3 07 00 00    	jb     0x6128f7
  612104:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  612107:	83 c2 23             	add    edx,0x23
  61210a:	2b c1                	sub    eax,ecx
  61210c:	83 c0 fc             	add    eax,0xfffffffc
  61210f:	83 f8 1f             	cmp    eax,0x1f
  612112:	0f 87 ee 0e 00 00    	ja     0x613006
  612118:	e9 da 07 00 00       	jmp    0x6128f7
  61211d:	68 24 68 6c 00       	push   0x6c6824 ; ["service_id"]
  612122:	8d 8d 44 fa ff ff    	lea    ecx,[ebp-0x5bc]
  612128:	e8 b1 15 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  61212d:	8d 8d 64 fb ff ff    	lea    ecx,[ebp-0x49c]
  612133:	51                   	push   ecx
  612134:	8b c8                	mov    ecx,eax
  612136:	e8 af 4a df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  61213b:	83 bd 78 fb ff ff 10 	cmp    DWORD PTR [ebp-0x488],0x10
  612142:	8d 85 64 fb ff ff    	lea    eax,[ebp-0x49c]
  612148:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  61214c:	0f 43 85 64 fb ff ff 	cmovae eax,DWORD PTR [ebp-0x49c]
  612153:	83 bd 74 fb ff ff 18 	cmp    DWORD PTR [ebp-0x48c],0x18
  61215a:	75 18                	jne    0x612174
  61215c:	6a 18                	push   0x18
  61215e:	68 34 68 6c 00       	push   0x6c6834 ; ["com.vivo.pcsuite.SERVICE"]
  612163:	50                   	push   eax
  612164:	e8 54 27 df ff       	call   0x4048bd ; ["call resolved=0x482fc0 "]
  612169:	83 c4 0c             	add    esp,0xc
  61216c:	85 c0                	test   eax,eax
  61216e:	75 04                	jne    0x612174
  612170:	b0 01                	mov    al,0x1
  612172:	eb 02                	jmp    0x612176
  612174:	32 c0                	xor    al,al
  612176:	84 c0                	test   al,al
  612178:	0f 84 79 09 00 00    	je     0x612af7
  61217e:	68 e4 4d 6c 00       	push   0x6c4de4 ; ["extra_info"]
  612183:	8d 8d 44 fa ff ff    	lea    ecx,[ebp-0x5bc]
  612189:	e8 9b 65 df ff       	call   0x408729 ; ["call resolved=0x4a93b0 "]
  61218e:	84 c0                	test   al,al
  612190:	74 62                	je     0x6121f4
  612192:	68 e4 4d 6c 00       	push   0x6c4de4 ; ["extra_info"]
  612197:	8d 8d 44 fa ff ff    	lea    ecx,[ebp-0x5bc]
  61219d:	e8 3c 15 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  6121a2:	8d 8d 4c fb ff ff    	lea    ecx,[ebp-0x4b4]
  6121a8:	51                   	push   ecx
  6121a9:	8b c8                	mov    ecx,eax
  6121ab:	e8 3a 4a df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  6121b0:	83 8d 60 fa ff ff 01 	or     DWORD PTR [ebp-0x5a0],0x1
  6121b7:	b9 8c a4 79 00       	mov    ecx,0x79a48c
  6121bc:	83 3d a0 a4 79 00 10 	cmp    DWORD PTR ds:0x79a4a0,0x10
  6121c3:	0f 43 0d 8c a4 79 00 	cmovae ecx,DWORD PTR ds:0x79a48c
  6121ca:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  6121ce:	8b 50 10             	mov    edx,DWORD PTR [eax+0x10]
  6121d1:	72 02                	jb     0x6121d5
  6121d3:	8b 00                	mov    eax,DWORD PTR [eax]
  6121d5:	ff 35 9c a4 79 00    	push   DWORD PTR ds:0x79a49c
  6121db:	51                   	push   ecx
  6121dc:	6a 00                	push   0x0
  6121de:	52                   	push   edx
  6121df:	50                   	push   eax
  6121e0:	e8 d7 3b df ff       	call   0x405dbc ; ["call resolved=0x441fc0 "]
  6121e5:	83 c4 14             	add    esp,0x14
  6121e8:	c6 85 6b fa ff ff 01 	mov    BYTE PTR [ebp-0x595],0x1
  6121ef:	83 f8 ff             	cmp    eax,0xffffffff
  6121f2:	75 07                	jne    0x6121fb
  6121f4:	c6 85 6b fa ff ff 00 	mov    BYTE PTR [ebp-0x595],0x0
  6121fb:	8b 85 60 fa ff ff    	mov    eax,DWORD PTR [ebp-0x5a0]
  612201:	a8 01                	test   al,0x1
  612203:	74 45                	je     0x61224a
  612205:	8b 95 60 fb ff ff    	mov    edx,DWORD PTR [ebp-0x4a0]
  61220b:	83 e0 fe             	and    eax,0xfffffffe
  61220e:	89 85 60 fa ff ff    	mov    DWORD PTR [ebp-0x5a0],eax
  612214:	83 fa 10             	cmp    edx,0x10
  612217:	72 31                	jb     0x61224a
  612219:	8b 8d 4c fb ff ff    	mov    ecx,DWORD PTR [ebp-0x4b4]
  61221f:	42                   	inc    edx
  612220:	8b c1                	mov    eax,ecx
  612222:	81 fa 00 10 00 00    	cmp    edx,0x1000
  612228:	72 16                	jb     0x612240
  61222a:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  61222d:	83 c2 23             	add    edx,0x23
  612230:	2b c1                	sub    eax,ecx
  612232:	83 c0 fc             	add    eax,0xfffffffc
  612235:	83 f8 1f             	cmp    eax,0x1f
  612238:	76 06                	jbe    0x612240
  61223a:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  612240:	52                   	push   edx
  612241:	51                   	push   ecx
  612242:	e8 53 fe de ff       	call   0x40209a ; ["call resolved=0x6665be "]
  612247:	83 c4 08             	add    esp,0x8
  61224a:	80 bd 6b fa ff ff 00 	cmp    BYTE PTR [ebp-0x595],0x0
  612251:	74 44                	je     0x612297
  612253:	6a 04                	push   0x4
  612255:	e8 5c 0f df ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  61225a:	83 c4 04             	add    esp,0x4
  61225d:	89 85 fc f9 ff ff    	mov    DWORD PTR [ebp-0x604],eax
  612263:	c6 45 fc 08          	mov    BYTE PTR [ebp-0x4],0x8
  612267:	85 c0                	test   eax,eax
  612269:	74 0b                	je     0x612276
  61226b:	8b c8                	mov    ecx,eax
  61226d:	e8 60 fd de ff       	call   0x401fd2 ; ["call resolved=0x4aeb50 "]
  612272:	8b c8                	mov    ecx,eax
  612274:	eb 02                	jmp    0x612278
  612276:	33 c9                	xor    ecx,ecx
  612278:	8b 01                	mov    eax,DWORD PTR [ecx]
  61227a:	8d 55 08             	lea    edx,[ebp+0x8]
  61227d:	8b b5 64 fa ff ff    	mov    esi,DWORD PTR [ebp-0x59c]
  612283:	52                   	push   edx
  612284:	56                   	push   esi
  612285:	8d 95 44 fa ff ff    	lea    edx,[ebp-0x5bc]
  61228b:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  61228f:	52                   	push   edx
  612290:	ff 10                	call   DWORD PTR [eax]
  612292:	e9 3f 0d 00 00       	jmp    0x612fd6
  612297:	68 24 68 6c 00       	push   0x6c6824 ; ["service_id"]
  61229c:	8d 8d 44 fa ff ff    	lea    ecx,[ebp-0x5bc]
  6122a2:	c7 85 6c fa ff ff 01 	mov    DWORD PTR [ebp-0x594],0x1
  6122ac:	e8 2d 14 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  6122b1:	8d 8d 4c fb ff ff    	lea    ecx,[ebp-0x4b4]
  6122b7:	51                   	push   ecx
  6122b8:	8b c8                	mov    ecx,eax
  6122ba:	e8 2b 49 df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  6122bf:	68 54 68 6c 00       	push   0x6c6854 ; ["target_id"]
  6122c4:	8d 8d 44 fa ff ff    	lea    ecx,[ebp-0x5bc]
  6122ca:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  6122ce:	e8 0b 14 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  6122d3:	8d 8d 94 fb ff ff    	lea    ecx,[ebp-0x46c]
  6122d9:	51                   	push   ecx
  6122da:	8b c8                	mov    ecx,eax
  6122dc:	e8 09 49 df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  6122e1:	68 a4 4b 6c 00       	push   0x6c4ba4 ; ["deviceName"]
  6122e6:	8d 8d 44 fa ff ff    	lea    ecx,[ebp-0x5bc]
  6122ec:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  6122f0:	e8 e9 13 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  6122f5:	8d 8d ec fa ff ff    	lea    ecx,[ebp-0x514]
  6122fb:	51                   	push   ecx
  6122fc:	8b c8                	mov    ecx,eax
  6122fe:	e8 e7 48 df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  612303:	68 18 68 6c 00       	push   0x6c6818 ; ["open_Id"]
  612308:	8d 8d 44 fa ff ff    	lea    ecx,[ebp-0x5bc]
  61230e:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  612312:	e8 c7 13 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  612317:	8d 8d d4 fa ff ff    	lea    ecx,[ebp-0x52c]
  61231d:	51                   	push   ecx
  61231e:	8b c8                	mov    ecx,eax
  612320:	e8 c5 48 df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  612325:	68 60 4d 6c 00       	push   0x6c4d60 ; ["account"]
  61232a:	8d 8d 44 fa ff ff    	lea    ecx,[ebp-0x5bc]
  612330:	c6 45 fc 0c          	mov    BYTE PTR [ebp-0x4],0xc
  612334:	e8 a5 13 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  612339:	8d 8d 1c fb ff ff    	lea    ecx,[ebp-0x4e4]
  61233f:	51                   	push   ecx
  612340:	8b c8                	mov    ecx,eax
  612342:	e8 a3 48 df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  612347:	68 e4 4d 6c 00       	push   0x6c4de4 ; ["extra_info"]
  61234c:	8d 8d 44 fa ff ff    	lea    ecx,[ebp-0x5bc]
  612352:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  612356:	33 ff                	xor    edi,edi
  612358:	e8 cc 63 df ff       	call   0x408729 ; ["call resolved=0x4a93b0 "]
  61235d:	84 c0                	test   al,al
  61235f:	0f 84 3b 01 00 00    	je     0x6124a0
  612365:	68 e4 4d 6c 00       	push   0x6c4de4 ; ["extra_info"]
  61236a:	8d 8d 44 fa ff ff    	lea    ecx,[ebp-0x5bc]
  612370:	e8 69 13 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  612375:	8d 8d ac fb ff ff    	lea    ecx,[ebp-0x454]
  61237b:	51                   	push   ecx
  61237c:	8b c8                	mov    ecx,eax
  61237e:	e8 67 48 df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  612383:	83 bd c0 fb ff ff 10 	cmp    DWORD PTR [ebp-0x440],0x10
  61238a:	8d 8d ac fb ff ff    	lea    ecx,[ebp-0x454]
  612390:	8b 85 bc fb ff ff    	mov    eax,DWORD PTR [ebp-0x444]
  612396:	0f 43 8d ac fb ff ff 	cmovae ecx,DWORD PTR [ebp-0x454]
  61239d:	03 c1                	add    eax,ecx
  61239f:	c6 45 fc 0e          	mov    BYTE PTR [ebp-0x4],0xe
  6123a3:	83 bd c0 fb ff ff 10 	cmp    DWORD PTR [ebp-0x440],0x10
  6123aa:	8d 8d ac fb ff ff    	lea    ecx,[ebp-0x454]
  6123b0:	50                   	push   eax
  6123b1:	0f 43 8d ac fb ff ff 	cmovae ecx,DWORD PTR [ebp-0x454]
  6123b8:	51                   	push   ecx
  6123b9:	8d 8d 28 fa ff ff    	lea    ecx,[ebp-0x5d8]
  6123bf:	e8 22 2e df ff       	call   0x4051e6 ; ["call resolved=0x4a7d20 "]
  6123c4:	6a 01                	push   0x1
  6123c6:	83 ec 28             	sub    esp,0x28
  6123c9:	c6 45 fc 0f          	mov    BYTE PTR [ebp-0x4],0xf
  6123cd:	8b c4                	mov    eax,esp
  6123cf:	89 78 24             	mov    DWORD PTR [eax+0x24],edi
  6123d2:	8d 85 28 fa ff ff    	lea    eax,[ebp-0x5d8]
  6123d8:	50                   	push   eax
  6123d9:	8d 85 10 fa ff ff    	lea    eax,[ebp-0x5f0]
  6123df:	50                   	push   eax
  6123e0:	e8 ea f9 de ff       	call   0x401dcf ; ["call resolved=0x4b45e0 "]
  6123e5:	83 c4 34             	add    esp,0x34
  6123e8:	8b b5 2c fa ff ff    	mov    esi,DWORD PTR [ebp-0x5d4]
  6123ee:	c6 45 fc 11          	mov    BYTE PTR [ebp-0x4],0x11
  6123f2:	85 f6                	test   esi,esi
  6123f4:	74 21                	je     0x612417
  6123f6:	83 c8 ff             	or     eax,0xffffffff
  6123f9:	f0 0f c1 46 04       	lock xadd DWORD PTR [esi+0x4],eax
  6123fe:	75 17                	jne    0x612417
  612400:	8b 06                	mov    eax,DWORD PTR [esi]
  612402:	8b ce                	mov    ecx,esi
  612404:	ff 10                	call   DWORD PTR [eax]
  612406:	83 c8 ff             	or     eax,0xffffffff
  612409:	f0 0f c1 46 08       	lock xadd DWORD PTR [esi+0x8],eax
  61240e:	75 07                	jne    0x612417
  612410:	8b 06                	mov    eax,DWORD PTR [esi]
  612412:	8b ce                	mov    ecx,esi
  612414:	ff 50 04             	call   DWORD PTR [eax+0x4]
  612417:	68 b0 4d 6c 00       	push   0x6c4db0 ; ["deviceType"]
  61241c:	8d 8d 10 fa ff ff    	lea    ecx,[ebp-0x5f0]
  612422:	e8 02 63 df ff       	call   0x408729 ; ["call resolved=0x4a93b0 "]
  612427:	84 c0                	test   al,al
  612429:	74 19                	je     0x612444
  61242b:	68 b0 4d 6c 00       	push   0x6c4db0 ; ["deviceType"]
  612430:	8d 8d 10 fa ff ff    	lea    ecx,[ebp-0x5f0]
  612436:	e8 a3 12 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  61243b:	8b c8                	mov    ecx,eax
  61243d:	e8 75 16 df ff       	call   0x403ab7 ; ["call resolved=0x4a9c50 "]
  612442:	8b f8                	mov    edi,eax
  612444:	8d 8d 10 fa ff ff    	lea    ecx,[ebp-0x5f0]
  61244a:	e8 8f 7b df ff       	call   0x409fde ; ["call resolved=0x480970 "]
  61244f:	ff b5 10 fa ff ff    	push   DWORD PTR [ebp-0x5f0]
  612455:	8d 8d 18 fa ff ff    	lea    ecx,[ebp-0x5e8]
  61245b:	e8 ee 74 df ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  612460:	8b 95 c0 fb ff ff    	mov    edx,DWORD PTR [ebp-0x440]
  612466:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  61246a:	83 fa 10             	cmp    edx,0x10
  61246d:	72 31                	jb     0x6124a0
  61246f:	8b 8d ac fb ff ff    	mov    ecx,DWORD PTR [ebp-0x454]
  612475:	42                   	inc    edx
  612476:	8b c1                	mov    eax,ecx
  612478:	81 fa 00 10 00 00    	cmp    edx,0x1000
  61247e:	72 16                	jb     0x612496
  612480:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  612483:	83 c2 23             	add    edx,0x23
  612486:	2b c1                	sub    eax,ecx
  612488:	83 c0 fc             	add    eax,0xfffffffc
  61248b:	83 f8 1f             	cmp    eax,0x1f
  61248e:	76 06                	jbe    0x612496
  612490:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  612496:	52                   	push   edx
  612497:	51                   	push   ecx
  612498:	e8 fd fb de ff       	call   0x40209a ; ["call resolved=0x6665be "]
  61249d:	83 c4 08             	add    esp,0x8
  6124a0:	c7 85 7c fb ff ff 00 	mov    DWORD PTR [ebp-0x484],0x0
  6124aa:	c7 85 90 fb ff ff 0f 	mov    DWORD PTR [ebp-0x470],0xf
  6124b4:	c7 85 8c fb ff ff 00 	mov    DWORD PTR [ebp-0x474],0x0
  6124be:	c6 85 7c fb ff ff 00 	mov    BYTE PTR [ebp-0x484],0x0
  6124c5:	8b 8d a4 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x45c]
  6124cb:	8d 85 94 fb ff ff    	lea    eax,[ebp-0x46c]
  6124d1:	c6 45 fc 12          	mov    BYTE PTR [ebp-0x4],0x12
  6124d5:	83 f9 04             	cmp    ecx,0x4
  6124d8:	0f 82 c1 00 00 00    	jb     0x61259f
  6124de:	83 bd a8 fb ff ff 10 	cmp    DWORD PTR [ebp-0x458],0x10
  6124e5:	8b 8d 94 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x46c]
  6124eb:	0f 43 c1             	cmovae eax,ecx
  6124ee:	c6 45 e8 00          	mov    BYTE PTR [ebp-0x18],0x0
  6124f2:	6a 04                	push   0x4
  6124f4:	8a 00                	mov    al,BYTE PTR [eax]
  6124f6:	88 45 e4             	mov    BYTE PTR [ebp-0x1c],al
  6124f9:	8d 85 94 fb ff ff    	lea    eax,[ebp-0x46c]
  6124ff:	0f 43 c1             	cmovae eax,ecx
  612502:	8a 40 01             	mov    al,BYTE PTR [eax+0x1]
  612505:	88 45 e5             	mov    BYTE PTR [ebp-0x1b],al
  612508:	8d 85 94 fb ff ff    	lea    eax,[ebp-0x46c]
  61250e:	0f 43 c1             	cmovae eax,ecx
  612511:	8a 40 02             	mov    al,BYTE PTR [eax+0x2]
  612514:	88 45 e6             	mov    BYTE PTR [ebp-0x1a],al
  612517:	8d 85 94 fb ff ff    	lea    eax,[ebp-0x46c]
  61251d:	0f 43 c1             	cmovae eax,ecx
  612520:	8a 40 03             	mov    al,BYTE PTR [eax+0x3]
  612523:	88 45 e7             	mov    BYTE PTR [ebp-0x19],al
  612526:	8d 45 e4             	lea    eax,[ebp-0x1c]
  612529:	50                   	push   eax
  61252a:	8d 85 ac fb ff ff    	lea    eax,[ebp-0x454]
  612530:	50                   	push   eax
  612531:	e8 9c f5 de ff       	call   0x401ad2 ; ["call resolved=0x4a66d0 "]
  612536:	83 8d 60 fa ff ff 08 	or     DWORD PTR [ebp-0x5a0],0x8
  61253d:	83 c4 0c             	add    esp,0xc
  612540:	8b 95 90 fb ff ff    	mov    edx,DWORD PTR [ebp-0x470]
  612546:	83 fa 10             	cmp    edx,0x10
  612549:	72 31                	jb     0x61257c
  61254b:	8b 8d 7c fb ff ff    	mov    ecx,DWORD PTR [ebp-0x484]
  612551:	42                   	inc    edx
  612552:	8b c1                	mov    eax,ecx
  612554:	81 fa 00 10 00 00    	cmp    edx,0x1000
  61255a:	72 16                	jb     0x612572
  61255c:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  61255f:	83 c2 23             	add    edx,0x23
  612562:	2b c1                	sub    eax,ecx
  612564:	83 c0 fc             	add    eax,0xfffffffc
  612567:	83 f8 1f             	cmp    eax,0x1f
  61256a:	76 06                	jbe    0x612572
  61256c:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  612572:	52                   	push   edx
  612573:	51                   	push   ecx
  612574:	e8 21 fb de ff       	call   0x40209a ; ["call resolved=0x6665be "]
  612579:	83 c4 08             	add    esp,0x8
  61257c:	0f 10 85 ac fb ff ff 	movups xmm0,XMMWORD PTR [ebp-0x454]
  612583:	0f 11 85 7c fb ff ff 	movups XMMWORD PTR [ebp-0x484],xmm0
  61258a:	f3 0f 7e 85 bc fb ff 	movq   xmm0,QWORD PTR [ebp-0x444]
  612592:	66 0f d6 85 8c fb ff 	movq   QWORD PTR [ebp-0x474],xmm0
  61259a:	e9 af 00 00 00       	jmp    0x61264e
  61259f:	83 bd a8 fb ff ff 10 	cmp    DWORD PTR [ebp-0x458],0x10
  6125a6:	51                   	push   ecx
  6125a7:	0f 43 85 94 fb ff ff 	cmovae eax,DWORD PTR [ebp-0x46c]
  6125ae:	8d 8d 7c fb ff ff    	lea    ecx,[ebp-0x484]
  6125b4:	50                   	push   eax
  6125b5:	e8 5d 1e df ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  6125ba:	6a 5c                	push   0x5c
  6125bc:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  6125c1:	e8 a0 61 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  6125c6:	83 c4 08             	add    esp,0x8
  6125c9:	85 c0                	test   eax,eax
  6125cb:	74 12                	je     0x6125df
  6125cd:	6a 5c                	push   0x5c
  6125cf:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  6125d4:	e8 8d 61 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  6125d9:	83 c4 08             	add    esp,0x8
  6125dc:	40                   	inc    eax
  6125dd:	eb 05                	jmp    0x6125e4
  6125df:	b8 cc 66 6c 00       	mov    eax,0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  6125e4:	68 54 67 6f 00       	push   0x6f6754 ; ["vivo::Worker::recvTcp"]
  6125e9:	68 2a 02 00 00       	push   0x22a
  6125ee:	50                   	push   eax
  6125ef:	68 98 98 6c 00       	push   0x6c9898 ; ["[ConntctionModule][%s:%d][%s]: id length less than 4"]
  6125f4:	8d 85 70 fa ff ff    	lea    eax,[ebp-0x590]
  6125fa:	c7 85 70 fa ff ff 02 	mov    DWORD PTR [ebp-0x590],0x2
  612604:	50                   	push   eax
  612605:	8d 85 ac fb ff ff    	lea    eax,[ebp-0x454]
  61260b:	50                   	push   eax
  61260c:	e8 f8 49 df ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  612611:	8b 95 c0 fb ff ff    	mov    edx,DWORD PTR [ebp-0x440]
  612617:	83 c4 18             	add    esp,0x18
  61261a:	83 fa 10             	cmp    edx,0x10
  61261d:	72 2f                	jb     0x61264e
  61261f:	8b 8d ac fb ff ff    	mov    ecx,DWORD PTR [ebp-0x454]
  612625:	42                   	inc    edx
  612626:	8b c1                	mov    eax,ecx
  612628:	81 fa 00 10 00 00    	cmp    edx,0x1000
  61262e:	72 14                	jb     0x612644
  612630:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  612633:	83 c2 23             	add    edx,0x23
  612636:	2b c1                	sub    eax,ecx
  612638:	83 c0 fc             	add    eax,0xfffffffc
  61263b:	83 f8 1f             	cmp    eax,0x1f
  61263e:	0f 87 4a 04 00 00    	ja     0x612a8e
  612644:	52                   	push   edx
  612645:	51                   	push   ecx
  612646:	e8 4f fa de ff       	call   0x40209a ; ["call resolved=0x6665be "]
  61264b:	83 c4 08             	add    esp,0x8
  61264e:	8b 8d 40 fa ff ff    	mov    ecx,DWORD PTR [ebp-0x5c0]
  612654:	8a 81 75 07 00 00    	mov    al,BYTE PTR [ecx+0x775]
  61265a:	8d b1 75 07 00 00    	lea    esi,[ecx+0x775]
  612660:	90                   	nop
  612661:	81 c1 78 07 00 00    	add    ecx,0x778
  612667:	84 c0                	test   al,al
  612669:	0f 85 23 03 00 00    	jne    0x612992
  61266f:	8b 01                	mov    eax,DWORD PTR [ecx]
  612671:	90                   	nop
  612672:	6a 5c                	push   0x5c
  612674:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  612679:	3b c7                	cmp    eax,edi
  61267b:	0f 85 9e 02 00 00    	jne    0x61291f
  612681:	e8 e0 60 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  612686:	83 c4 08             	add    esp,0x8
  612689:	85 c0                	test   eax,eax
  61268b:	74 12                	je     0x61269f
  61268d:	6a 5c                	push   0x5c
  61268f:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  612694:	e8 cd 60 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  612699:	83 c4 08             	add    esp,0x8
  61269c:	40                   	inc    eax
  61269d:	eb 05                	jmp    0x6126a4
  61269f:	b8 cc 66 6c 00       	mov    eax,0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  6126a4:	68 54 67 6f 00       	push   0x6f6754 ; ["vivo::Worker::recvTcp"]
  6126a9:	68 32 02 00 00       	push   0x232
  6126ae:	50                   	push   eax
  6126af:	68 50 68 6f 00       	push   0x6f6850 ; ["[ConntctionModule][%s:%d][%s]: now connecting another same type device, notify remote busy"]
  6126b4:	8d 85 70 fa ff ff    	lea    eax,[ebp-0x590]
  6126ba:	c7 85 70 fa ff ff 02 	mov    DWORD PTR [ebp-0x590],0x2
  6126c4:	50                   	push   eax
  6126c5:	8d 85 04 fb ff ff    	lea    eax,[ebp-0x4fc]
  6126cb:	50                   	push   eax
  6126cc:	e8 38 49 df ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  6126d1:	8b 95 18 fb ff ff    	mov    edx,DWORD PTR [ebp-0x4e8]
  6126d7:	83 c4 18             	add    esp,0x18
  6126da:	83 fa 10             	cmp    edx,0x10
  6126dd:	72 2f                	jb     0x61270e
  6126df:	8b 8d 04 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x4fc]
  6126e5:	42                   	inc    edx
  6126e6:	8b c1                	mov    eax,ecx
  6126e8:	81 fa 00 10 00 00    	cmp    edx,0x1000
  6126ee:	72 14                	jb     0x612704
  6126f0:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  6126f3:	83 c2 23             	add    edx,0x23
  6126f6:	2b c1                	sub    eax,ecx
  6126f8:	83 c0 fc             	add    eax,0xfffffffc
  6126fb:	83 f8 1f             	cmp    eax,0x1f
  6126fe:	0f 87 8a 03 00 00    	ja     0x612a8e
  612704:	52                   	push   edx
  612705:	51                   	push   ecx
  612706:	e8 8f f9 de ff       	call   0x40209a ; ["call resolved=0x6665be "]
  61270b:	83 c4 08             	add    esp,0x8
  61270e:	8b bd 64 fa ff ff    	mov    edi,DWORD PTR [ebp-0x59c]
  612714:	8d 85 70 fa ff ff    	lea    eax,[ebp-0x590]
  61271a:	57                   	push   edi
  61271b:	50                   	push   eax
  61271c:	6a 0b                	push   0xb
  61271e:	8b 8d 40 fa ff ff    	mov    ecx,DWORD PTR [ebp-0x5c0]
  612724:	c7 85 70 fa ff ff 01 	mov    DWORD PTR [ebp-0x590],0x1
  61272e:	e8 1f 00 df ff       	call   0x402752 ; ["call resolved=0x613a10 vivo::Worker::sendTcp"]
  612733:	ff 37                	push   DWORD PTR [edi]
  612735:	ff 15 f0 d8 79 00    	call   DWORD PTR ds:0x79d8f0
  61273b:	8b 95 90 fb ff ff    	mov    edx,DWORD PTR [ebp-0x470]
  612741:	83 fa 10             	cmp    edx,0x10
  612744:	72 2f                	jb     0x612775
  612746:	8b 8d 7c fb ff ff    	mov    ecx,DWORD PTR [ebp-0x484]
  61274c:	42                   	inc    edx
  61274d:	8b c1                	mov    eax,ecx
  61274f:	81 fa 00 10 00 00    	cmp    edx,0x1000
  612755:	72 14                	jb     0x61276b
  612757:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  61275a:	83 c2 23             	add    edx,0x23
  61275d:	2b c1                	sub    eax,ecx
  61275f:	83 c0 fc             	add    eax,0xfffffffc
  612762:	83 f8 1f             	cmp    eax,0x1f
  612765:	0f 87 23 03 00 00    	ja     0x612a8e
  61276b:	52                   	push   edx
  61276c:	51                   	push   ecx
  61276d:	e8 28 f9 de ff       	call   0x40209a ; ["call resolved=0x6665be "]
  612772:	83 c4 08             	add    esp,0x8
  612775:	8d 8d 1c fb ff ff    	lea    ecx,[ebp-0x4e4]
  61277b:	c7 85 8c fb ff ff 00 	mov    DWORD PTR [ebp-0x474],0x0
  612785:	c7 85 90 fb ff ff 0f 	mov    DWORD PTR [ebp-0x470],0xf
  61278f:	c6 85 7c fb ff ff 00 	mov    BYTE PTR [ebp-0x484],0x0
  612796:	e8 68 12 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  61279b:	8d 8d d4 fa ff ff    	lea    ecx,[ebp-0x52c]
  6127a1:	e8 5d 12 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  6127a6:	8d 8d ec fa ff ff    	lea    ecx,[ebp-0x514]
  6127ac:	e8 52 12 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  6127b1:	8d 8d 94 fb ff ff    	lea    ecx,[ebp-0x46c]
  6127b7:	e8 47 12 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  6127bc:	8d 8d 4c fb ff ff    	lea    ecx,[ebp-0x4b4]
  6127c2:	e8 3c 12 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  6127c7:	8b 95 78 fb ff ff    	mov    edx,DWORD PTR [ebp-0x488]
  6127cd:	83 fa 10             	cmp    edx,0x10
  6127d0:	72 2f                	jb     0x612801
  6127d2:	8b 8d 64 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x49c]
  6127d8:	42                   	inc    edx
  6127d9:	8b c1                	mov    eax,ecx
  6127db:	81 fa 00 10 00 00    	cmp    edx,0x1000
  6127e1:	72 14                	jb     0x6127f7
  6127e3:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  6127e6:	83 c2 23             	add    edx,0x23
  6127e9:	2b c1                	sub    eax,ecx
  6127eb:	83 c0 fc             	add    eax,0xfffffffc
  6127ee:	83 f8 1f             	cmp    eax,0x1f
  6127f1:	0f 87 97 02 00 00    	ja     0x612a8e
  6127f7:	52                   	push   edx
  6127f8:	51                   	push   ecx
  6127f9:	e8 9c f8 de ff       	call   0x40209a ; ["call resolved=0x6665be "]
  6127fe:	83 c4 08             	add    esp,0x8
  612801:	8b 8d 54 fa ff ff    	mov    ecx,DWORD PTR [ebp-0x5ac]
  612807:	c6 85 64 fb ff ff 00 	mov    BYTE PTR [ebp-0x49c],0x0
  61280e:	c7 85 78 fb ff ff 0f 	mov    DWORD PTR [ebp-0x488],0xf
  612818:	c7 85 74 fb ff ff 00 	mov    DWORD PTR [ebp-0x48c],0x0
  612822:	85 c9                	test   ecx,ecx
  612824:	74 36                	je     0x61285c
  612826:	8b 85 5c fa ff ff    	mov    eax,DWORD PTR [ebp-0x5a4]
  61282c:	2b c1                	sub    eax,ecx
  61282e:	c1 f8 02             	sar    eax,0x2
  612831:	50                   	push   eax
  612832:	51                   	push   ecx
  612833:	8d 8d 54 fa ff ff    	lea    ecx,[ebp-0x5ac]
  612839:	e8 be 0e df ff       	call   0x4036fc ; ["call resolved=0x487630 "]
  61283e:	c7 85 54 fa ff ff 00 	mov    DWORD PTR [ebp-0x5ac],0x0
  612848:	c7 85 58 fa ff ff 00 	mov    DWORD PTR [ebp-0x5a8],0x0
  612852:	c7 85 5c fa ff ff 00 	mov    DWORD PTR [ebp-0x5a4],0x0
  61285c:	8d 8d 44 fa ff ff    	lea    ecx,[ebp-0x5bc]
  612862:	e8 77 77 df ff       	call   0x409fde ; ["call resolved=0x480970 "]
  612867:	ff b5 44 fa ff ff    	push   DWORD PTR [ebp-0x5bc]
  61286d:	8d 8d 4c fa ff ff    	lea    ecx,[ebp-0x5b4]
  612873:	e8 d6 70 df ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  612878:	8b 95 d8 fb ff ff    	mov    edx,DWORD PTR [ebp-0x428]
  61287e:	83 fa 10             	cmp    edx,0x10
  612881:	72 2f                	jb     0x6128b2
  612883:	8b 8d c4 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x43c]
  612889:	42                   	inc    edx
  61288a:	8b c1                	mov    eax,ecx
  61288c:	81 fa 00 10 00 00    	cmp    edx,0x1000
  612892:	72 14                	jb     0x6128a8
  612894:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  612897:	83 c2 23             	add    edx,0x23
  61289a:	2b c1                	sub    eax,ecx
  61289c:	83 c0 fc             	add    eax,0xfffffffc
  61289f:	83 f8 1f             	cmp    eax,0x1f
  6128a2:	0f 87 e6 01 00 00    	ja     0x612a8e
  6128a8:	52                   	push   edx
  6128a9:	51                   	push   ecx
  6128aa:	e8 eb f7 de ff       	call   0x40209a ; ["call resolved=0x6665be "]
  6128af:	83 c4 08             	add    esp,0x8
  6128b2:	8b 55 1c             	mov    edx,DWORD PTR [ebp+0x1c]
  6128b5:	c7 85 d4 fb ff ff 00 	mov    DWORD PTR [ebp-0x42c],0x0
  6128bf:	c7 85 d8 fb ff ff 0f 	mov    DWORD PTR [ebp-0x428],0xf
  6128c9:	c6 85 c4 fb ff ff 00 	mov    BYTE PTR [ebp-0x43c],0x0
  6128d0:	83 fa 10             	cmp    edx,0x10
  6128d3:	72 2c                	jb     0x612901
  6128d5:	8b 4d 08             	mov    ecx,DWORD PTR [ebp+0x8]
  6128d8:	42                   	inc    edx
  6128d9:	8b c1                	mov    eax,ecx
  6128db:	81 fa 00 10 00 00    	cmp    edx,0x1000
  6128e1:	72 14                	jb     0x6128f7
  6128e3:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  6128e6:	83 c2 23             	add    edx,0x23
  6128e9:	2b c1                	sub    eax,ecx
  6128eb:	83 c0 fc             	add    eax,0xfffffffc
  6128ee:	83 f8 1f             	cmp    eax,0x1f
  6128f1:	0f 87 97 01 00 00    	ja     0x612a8e
  6128f7:	52                   	push   edx
  6128f8:	51                   	push   ecx
  6128f9:	e8 9c f7 de ff       	call   0x40209a ; ["call resolved=0x6665be "]
  6128fe:	83 c4 08             	add    esp,0x8
  612901:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  612904:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  61290b:	59                   	pop    ecx
  61290c:	5f                   	pop    edi
  61290d:	5e                   	pop    esi
  61290e:	5b                   	pop    ebx
  61290f:	8b 4d ec             	mov    ecx,DWORD PTR [ebp-0x14]
  612912:	33 cd                	xor    ecx,ebp
  612914:	e8 76 1b df ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  612919:	8b e5                	mov    esp,ebp
  61291b:	5d                   	pop    ebp
  61291c:	c2 1c 00             	ret    0x1c
  61291f:	e8 42 5e 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  612924:	83 c4 08             	add    esp,0x8
  612927:	85 c0                	test   eax,eax
  612929:	74 12                	je     0x61293d
  61292b:	6a 5c                	push   0x5c
  61292d:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  612932:	e8 2f 5e 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  612937:	83 c4 08             	add    esp,0x8
  61293a:	40                   	inc    eax
  61293b:	eb 05                	jmp    0x612942
  61293d:	b8 cc 66 6c 00       	mov    eax,0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  612942:	68 54 67 6f 00       	push   0x6f6754 ; ["vivo::Worker::recvTcp"]
  612947:	68 39 02 00 00       	push   0x239
  61294c:	50                   	push   eax
  61294d:	68 c0 68 6f 00       	push   0x6f68c0 ; ["[ConntctionModule][%s:%d][%s]: now connecting another different type device, send different device busy"]
  612952:	8d 85 70 fa ff ff    	lea    eax,[ebp-0x590]
  612958:	c7 85 70 fa ff ff 02 	mov    DWORD PTR [ebp-0x590],0x2
  612962:	50                   	push   eax
  612963:	8d 85 04 fb ff ff    	lea    eax,[ebp-0x4fc]
  612969:	50                   	push   eax
  61296a:	e8 9a 46 df ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  61296f:	83 c4 18             	add    esp,0x18
  612972:	8d 8d 04 fb ff ff    	lea    ecx,[ebp-0x4fc]
  612978:	e8 86 10 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  61297d:	8b bd 64 fa ff ff    	mov    edi,DWORD PTR [ebp-0x59c]
  612983:	8d 85 70 fa ff ff    	lea    eax,[ebp-0x590]
  612989:	57                   	push   edi
  61298a:	50                   	push   eax
  61298b:	6a 0c                	push   0xc
  61298d:	e9 8c fd ff ff       	jmp    0x61271e
  612992:	87 39                	xchg   DWORD PTR [ecx],edi
  612994:	32 c0                	xor    al,al
  612996:	86 06                	xchg   BYTE PTR [esi],al
  612998:	6a 00                	push   0x0
  61299a:	c7 85 ac fb ff ff 00 	mov    DWORD PTR [ebp-0x454],0x0
  6129a4:	8d 8d ac fb ff ff    	lea    ecx,[ebp-0x454]
  6129aa:	68 02 1c 6c 00       	push   0x6c1c02
  6129af:	c7 85 bc fb ff ff 00 	mov    DWORD PTR [ebp-0x444],0x0
  6129b9:	c7 85 c0 fb ff ff 0f 	mov    DWORD PTR [ebp-0x440],0xf
  6129c3:	c6 85 ac fb ff ff 00 	mov    BYTE PTR [ebp-0x454],0x0
  6129ca:	e8 48 1a df ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  6129cf:	8b bd 64 fa ff ff    	mov    edi,DWORD PTR [ebp-0x59c]
  6129d5:	8d 85 ac fb ff ff    	lea    eax,[ebp-0x454]
  6129db:	50                   	push   eax
  6129dc:	8b 8d 40 fa ff ff    	mov    ecx,DWORD PTR [ebp-0x5c0]
  6129e2:	8d 85 1c fb ff ff    	lea    eax,[ebp-0x4e4]
  6129e8:	50                   	push   eax
  6129e9:	57                   	push   edi
  6129ea:	8d 85 d4 fa ff ff    	lea    eax,[ebp-0x52c]
  6129f0:	c6 45 fc 13          	mov    BYTE PTR [ebp-0x4],0x13
  6129f4:	50                   	push   eax
  6129f5:	8d 45 08             	lea    eax,[ebp+0x8]
  6129f8:	50                   	push   eax
  6129f9:	8d 85 7c fb ff ff    	lea    eax,[ebp-0x484]
  6129ff:	50                   	push   eax
  612a00:	8d 85 ec fa ff ff    	lea    eax,[ebp-0x514]
  612a06:	50                   	push   eax
  612a07:	8d 85 6c fa ff ff    	lea    eax,[ebp-0x594]
  612a0d:	50                   	push   eax
  612a0e:	8d 85 3e fa ff ff    	lea    eax,[ebp-0x5c2]
  612a14:	50                   	push   eax
  612a15:	e8 60 3e df ff       	call   0x40687a ; ["call resolved=0x65ea20 "]
  612a1a:	8b 95 c0 fb ff ff    	mov    edx,DWORD PTR [ebp-0x440]
  612a20:	c6 45 fc 12          	mov    BYTE PTR [ebp-0x4],0x12
  612a24:	83 fa 10             	cmp    edx,0x10
  612a27:	72 31                	jb     0x612a5a
  612a29:	8b 8d ac fb ff ff    	mov    ecx,DWORD PTR [ebp-0x454]
  612a2f:	42                   	inc    edx
  612a30:	8b c1                	mov    eax,ecx
  612a32:	81 fa 00 10 00 00    	cmp    edx,0x1000
  612a38:	72 16                	jb     0x612a50
  612a3a:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  612a3d:	83 c2 23             	add    edx,0x23
  612a40:	2b c1                	sub    eax,ecx
  612a42:	83 c0 fc             	add    eax,0xfffffffc
  612a45:	83 f8 1f             	cmp    eax,0x1f
  612a48:	76 06                	jbe    0x612a50
  612a4a:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  612a50:	52                   	push   edx
  612a51:	51                   	push   ecx
  612a52:	e8 43 f6 de ff       	call   0x40209a ; ["call resolved=0x6665be "]
  612a57:	83 c4 08             	add    esp,0x8
  612a5a:	b0 01                	mov    al,0x1
  612a5c:	86 06                	xchg   BYTE PTR [esi],al
  612a5e:	8b 95 90 fb ff ff    	mov    edx,DWORD PTR [ebp-0x470]
  612a64:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  612a68:	83 fa 10             	cmp    edx,0x10
  612a6b:	72 31                	jb     0x612a9e
  612a6d:	8b 8d 7c fb ff ff    	mov    ecx,DWORD PTR [ebp-0x484]
  612a73:	42                   	inc    edx
  612a74:	8b c1                	mov    eax,ecx
  612a76:	81 fa 00 10 00 00    	cmp    edx,0x1000
  612a7c:	72 16                	jb     0x612a94
  612a7e:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  612a81:	83 c2 23             	add    edx,0x23
  612a84:	2b c1                	sub    eax,ecx
  612a86:	83 c0 fc             	add    eax,0xfffffffc
  612a89:	83 f8 1f             	cmp    eax,0x1f
  612a8c:	76 06                	jbe    0x612a94
  612a8e:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  612a94:	52                   	push   edx
  612a95:	51                   	push   ecx
  612a96:	e8 ff f5 de ff       	call   0x40209a ; ["call resolved=0x6665be "]
  612a9b:	83 c4 08             	add    esp,0x8
  612a9e:	8d 8d 1c fb ff ff    	lea    ecx,[ebp-0x4e4]
  612aa4:	c7 85 8c fb ff ff 00 	mov    DWORD PTR [ebp-0x474],0x0
  612aae:	c7 85 90 fb ff ff 0f 	mov    DWORD PTR [ebp-0x470],0xf
  612ab8:	c6 85 7c fb ff ff 00 	mov    BYTE PTR [ebp-0x484],0x0
  612abf:	e8 3f 0f df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  612ac4:	8d 8d d4 fa ff ff    	lea    ecx,[ebp-0x52c]
  612aca:	e8 34 0f df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  612acf:	8d 8d ec fa ff ff    	lea    ecx,[ebp-0x514]
  612ad5:	e8 29 0f df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  612ada:	8d 8d 94 fb ff ff    	lea    ecx,[ebp-0x46c]
  612ae0:	e8 1e 0f df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  612ae5:	8d 8d 4c fb ff ff    	lea    ecx,[ebp-0x4b4]
  612aeb:	e8 13 0f df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  612af0:	8b f7                	mov    esi,edi
  612af2:	e9 df 04 00 00       	jmp    0x612fd6
  612af7:	83 bd 78 fb ff ff 10 	cmp    DWORD PTR [ebp-0x488],0x10
  612afe:	8d 85 64 fb ff ff    	lea    eax,[ebp-0x49c]
  612b04:	0f 43 85 64 fb ff ff 	cmovae eax,DWORD PTR [ebp-0x49c]
  612b0b:	83 bd 74 fb ff ff 19 	cmp    DWORD PTR [ebp-0x48c],0x19
  612b12:	75 18                	jne    0x612b2c
  612b14:	6a 19                	push   0x19
  612b16:	68 fc 61 6f 00       	push   0x6f61fc ; ["com.vivo.share.CONNECT_PC"]
  612b1b:	50                   	push   eax
  612b1c:	e8 9c 1d df ff       	call   0x4048bd ; ["call resolved=0x482fc0 "]
  612b21:	83 c4 0c             	add    esp,0xc
  612b24:	85 c0                	test   eax,eax
  612b26:	75 04                	jne    0x612b2c
  612b28:	b0 01                	mov    al,0x1
  612b2a:	eb 02                	jmp    0x612b2e
  612b2c:	32 c0                	xor    al,al
  612b2e:	84 c0                	test   al,al
  612b30:	0f 84 9a 04 00 00    	je     0x612fd0
  612b36:	68 24 68 6c 00       	push   0x6c6824 ; ["service_id"]
  612b3b:	8d 8d 44 fa ff ff    	lea    ecx,[ebp-0x5bc]
  612b41:	c7 85 70 fa ff ff 02 	mov    DWORD PTR [ebp-0x590],0x2
  612b4b:	e8 8e 0b df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  612b50:	8d 8d 74 fa ff ff    	lea    ecx,[ebp-0x58c]
  612b56:	51                   	push   ecx
  612b57:	8b c8                	mov    ecx,eax
  612b59:	e8 8c 40 df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  612b5e:	68 54 68 6c 00       	push   0x6c6854 ; ["target_id"]
  612b63:	8d 8d 44 fa ff ff    	lea    ecx,[ebp-0x5bc]
  612b69:	c6 45 fc 14          	mov    BYTE PTR [ebp-0x4],0x14
  612b6d:	e8 6c 0b df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  612b72:	8d 8d ac fb ff ff    	lea    ecx,[ebp-0x454]
  612b78:	51                   	push   ecx
  612b79:	8b c8                	mov    ecx,eax
  612b7b:	e8 6a 40 df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  612b80:	68 a4 4b 6c 00       	push   0x6c4ba4 ; ["deviceName"]
  612b85:	8d 8d 44 fa ff ff    	lea    ecx,[ebp-0x5bc]
  612b8b:	c6 45 fc 15          	mov    BYTE PTR [ebp-0x4],0x15
  612b8f:	e8 4a 0b df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  612b94:	8d 8d 8c fa ff ff    	lea    ecx,[ebp-0x574]
  612b9a:	51                   	push   ecx
  612b9b:	8b c8                	mov    ecx,eax
  612b9d:	e8 48 40 df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  612ba2:	68 18 68 6c 00       	push   0x6c6818 ; ["open_Id"]
  612ba7:	8d 8d 44 fa ff ff    	lea    ecx,[ebp-0x5bc]
  612bad:	c6 45 fc 16          	mov    BYTE PTR [ebp-0x4],0x16
  612bb1:	e8 28 0b df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  612bb6:	8d 8d d4 fa ff ff    	lea    ecx,[ebp-0x52c]
  612bbc:	51                   	push   ecx
  612bbd:	8b c8                	mov    ecx,eax
  612bbf:	e8 26 40 df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  612bc4:	68 60 4d 6c 00       	push   0x6c4d60 ; ["account"]
  612bc9:	8d 8d 44 fa ff ff    	lea    ecx,[ebp-0x5bc]
  612bcf:	c6 45 fc 17          	mov    BYTE PTR [ebp-0x4],0x17
  612bd3:	e8 06 0b df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  612bd8:	8d 8d ec fa ff ff    	lea    ecx,[ebp-0x514]
  612bde:	51                   	push   ecx
  612bdf:	8b c8                	mov    ecx,eax
  612be1:	e8 04 40 df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  612be6:	68 60 68 6c 00       	push   0x6c6860 ; ["type"]
  612beb:	8d 8d 44 fa ff ff    	lea    ecx,[ebp-0x5bc]
  612bf1:	c6 45 fc 18          	mov    BYTE PTR [ebp-0x4],0x18
  612bf5:	e8 e4 0a df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  612bfa:	8b c8                	mov    ecx,eax
  612bfc:	e8 b6 0e df ff       	call   0x403ab7 ; ["call resolved=0x4a9c50 "]
  612c01:	6a 00                	push   0x0
  612c03:	c7 85 94 fb ff ff 00 	mov    DWORD PTR [ebp-0x46c],0x0
  612c0d:	8d 8d 94 fb ff ff    	lea    ecx,[ebp-0x46c]
  612c13:	68 02 1c 6c 00       	push   0x6c1c02
  612c18:	c7 85 a4 fb ff ff 00 	mov    DWORD PTR [ebp-0x45c],0x0
  612c22:	c7 85 a8 fb ff ff 0f 	mov    DWORD PTR [ebp-0x458],0xf
  612c2c:	c6 85 94 fb ff ff 00 	mov    BYTE PTR [ebp-0x46c],0x0
  612c33:	e8 df 17 df ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  612c38:	68 e4 4d 6c 00       	push   0x6c4de4 ; ["extra_info"]
  612c3d:	8d 8d 44 fa ff ff    	lea    ecx,[ebp-0x5bc]
  612c43:	c6 45 fc 19          	mov    BYTE PTR [ebp-0x4],0x19
  612c47:	e8 dd 5a df ff       	call   0x408729 ; ["call resolved=0x4a93b0 "]
  612c4c:	84 c0                	test   al,al
  612c4e:	0f 84 0a 01 00 00    	je     0x612d5e
  612c54:	68 e4 4d 6c 00       	push   0x6c4de4 ; ["extra_info"]
  612c59:	8d 8d 44 fa ff ff    	lea    ecx,[ebp-0x5bc]
  612c5f:	e8 7a 0a df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  612c64:	8d 8d 1c fb ff ff    	lea    ecx,[ebp-0x4e4]
  612c6a:	51                   	push   ecx
  612c6b:	8b c8                	mov    ecx,eax
  612c6d:	e8 78 3f df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  612c72:	83 bd 30 fb ff ff 10 	cmp    DWORD PTR [ebp-0x4d0],0x10
  612c79:	8d 8d 1c fb ff ff    	lea    ecx,[ebp-0x4e4]
  612c7f:	8b 85 2c fb ff ff    	mov    eax,DWORD PTR [ebp-0x4d4]
  612c85:	0f 43 8d 1c fb ff ff 	cmovae ecx,DWORD PTR [ebp-0x4e4]
  612c8c:	03 c1                	add    eax,ecx
  612c8e:	c6 45 fc 1a          	mov    BYTE PTR [ebp-0x4],0x1a
  612c92:	83 bd 30 fb ff ff 10 	cmp    DWORD PTR [ebp-0x4d0],0x10
  612c99:	8d 8d 1c fb ff ff    	lea    ecx,[ebp-0x4e4]
  612c9f:	50                   	push   eax
  612ca0:	0f 43 8d 1c fb ff ff 	cmovae ecx,DWORD PTR [ebp-0x4e4]
  612ca7:	51                   	push   ecx
  612ca8:	8d 8d 30 fa ff ff    	lea    ecx,[ebp-0x5d0]
  612cae:	e8 33 25 df ff       	call   0x4051e6 ; ["call resolved=0x4a7d20 "]
  612cb3:	6a 01                	push   0x1
  612cb5:	83 ec 28             	sub    esp,0x28
  612cb8:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  612cbc:	8b c4                	mov    eax,esp
  612cbe:	c7 40 24 00 00 00 00 	mov    DWORD PTR [eax+0x24],0x0
  612cc5:	8d 85 30 fa ff ff    	lea    eax,[ebp-0x5d0]
  612ccb:	50                   	push   eax
  612ccc:	8d 85 00 fa ff ff    	lea    eax,[ebp-0x600]
  612cd2:	50                   	push   eax
  612cd3:	e8 f7 f0 de ff       	call   0x401dcf ; ["call resolved=0x4b45e0 "]
  612cd8:	83 c4 34             	add    esp,0x34
  612cdb:	8d 8d 30 fa ff ff    	lea    ecx,[ebp-0x5d0]
  612ce1:	c6 45 fc 1d          	mov    BYTE PTR [ebp-0x4],0x1d
  612ce5:	e8 5d 5f df ff       	call   0x408c47 ; ["call resolved=0x4aef20 "]
  612cea:	68 68 43 6d 00       	push   0x6d4368 ; ["port"]
  612cef:	8d 8d 00 fa ff ff    	lea    ecx,[ebp-0x600]
  612cf5:	e8 38 6a df ff       	call   0x409732 ; ["call resolved=0x4a91d0 "]
  612cfa:	84 c0                	test   al,al
  612cfc:	74 35                	je     0x612d33
  612cfe:	68 68 43 6d 00       	push   0x6d4368 ; ["port"]
  612d03:	8d 8d 00 fa ff ff    	lea    ecx,[ebp-0x600]
  612d09:	e8 d0 09 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  612d0e:	8d 8d 4c fb ff ff    	lea    ecx,[ebp-0x4b4]
  612d14:	51                   	push   ecx
  612d15:	8b c8                	mov    ecx,eax
  612d17:	e8 ce 3e df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  612d1c:	50                   	push   eax
  612d1d:	8d 8d 94 fb ff ff    	lea    ecx,[ebp-0x46c]
  612d23:	e8 f0 47 df ff       	call   0x407518 ; ["call resolved=0x472b20 "]
  612d28:	8d 8d 4c fb ff ff    	lea    ecx,[ebp-0x4b4]
  612d2e:	e8 d0 0c df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  612d33:	8d 8d 00 fa ff ff    	lea    ecx,[ebp-0x600]
  612d39:	e8 a0 72 df ff       	call   0x409fde ; ["call resolved=0x480970 "]
  612d3e:	ff b5 00 fa ff ff    	push   DWORD PTR [ebp-0x600]
  612d44:	8d 8d 08 fa ff ff    	lea    ecx,[ebp-0x5f8]
  612d4a:	e8 ff 6b df ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  612d4f:	8d 8d 1c fb ff ff    	lea    ecx,[ebp-0x4e4]
  612d55:	c6 45 fc 19          	mov    BYTE PTR [ebp-0x4],0x19
  612d59:	e8 a5 0c df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  612d5e:	6a 00                	push   0x0
  612d60:	c7 85 34 fb ff ff 00 	mov    DWORD PTR [ebp-0x4cc],0x0
  612d6a:	8d 8d 34 fb ff ff    	lea    ecx,[ebp-0x4cc]
  612d70:	68 02 1c 6c 00       	push   0x6c1c02
  612d75:	c7 85 44 fb ff ff 00 	mov    DWORD PTR [ebp-0x4bc],0x0
  612d7f:	c7 85 48 fb ff ff 0f 	mov    DWORD PTR [ebp-0x4b8],0xf
  612d89:	c6 85 34 fb ff ff 00 	mov    BYTE PTR [ebp-0x4cc],0x0
  612d90:	e8 82 16 df ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  612d95:	8b 8d bc fb ff ff    	mov    ecx,DWORD PTR [ebp-0x444]
  612d9b:	8d 85 ac fb ff ff    	lea    eax,[ebp-0x454]
  612da1:	c6 45 fc 1e          	mov    BYTE PTR [ebp-0x4],0x1e
  612da5:	83 f9 04             	cmp    ecx,0x4
  612da8:	72 76                	jb     0x612e20
  612daa:	83 bd c0 fb ff ff 10 	cmp    DWORD PTR [ebp-0x440],0x10
  612db1:	8b 8d ac fb ff ff    	mov    ecx,DWORD PTR [ebp-0x454]
  612db7:	0f 43 c1             	cmovae eax,ecx
  612dba:	c6 45 e0 00          	mov    BYTE PTR [ebp-0x20],0x0
  612dbe:	6a 04                	push   0x4
  612dc0:	8a 00                	mov    al,BYTE PTR [eax]
  612dc2:	88 45 dc             	mov    BYTE PTR [ebp-0x24],al
  612dc5:	8d 85 ac fb ff ff    	lea    eax,[ebp-0x454]
  612dcb:	0f 43 c1             	cmovae eax,ecx
  612dce:	8a 40 01             	mov    al,BYTE PTR [eax+0x1]
  612dd1:	88 45 dd             	mov    BYTE PTR [ebp-0x23],al
  612dd4:	8d 85 ac fb ff ff    	lea    eax,[ebp-0x454]
  612dda:	0f 43 c1             	cmovae eax,ecx
  612ddd:	8a 40 02             	mov    al,BYTE PTR [eax+0x2]
  612de0:	88 45 de             	mov    BYTE PTR [ebp-0x22],al
  612de3:	8d 85 ac fb ff ff    	lea    eax,[ebp-0x454]
  612de9:	0f 43 c1             	cmovae eax,ecx
  612dec:	8a 40 03             	mov    al,BYTE PTR [eax+0x3]
  612def:	88 45 df             	mov    BYTE PTR [ebp-0x21],al
  612df2:	8d 45 dc             	lea    eax,[ebp-0x24]
  612df5:	50                   	push   eax
  612df6:	8d 85 4c fb ff ff    	lea    eax,[ebp-0x4b4]
  612dfc:	50                   	push   eax
  612dfd:	e8 d0 ec de ff       	call   0x401ad2 ; ["call resolved=0x4a66d0 "]
  612e02:	83 8d 60 fa ff ff 10 	or     DWORD PTR [ebp-0x5a0],0x10
  612e09:	8d 85 4c fb ff ff    	lea    eax,[ebp-0x4b4]
  612e0f:	83 c4 0c             	add    esp,0xc
  612e12:	8d 8d 34 fb ff ff    	lea    ecx,[ebp-0x4cc]
  612e18:	50                   	push   eax
  612e19:	e8 fa 46 df ff       	call   0x407518 ; ["call resolved=0x472b20 "]
  612e1e:	eb 75                	jmp    0x612e95
  612e20:	83 bd c0 fb ff ff 10 	cmp    DWORD PTR [ebp-0x440],0x10
  612e27:	51                   	push   ecx
  612e28:	0f 43 85 ac fb ff ff 	cmovae eax,DWORD PTR [ebp-0x454]
  612e2f:	8d 8d 34 fb ff ff    	lea    ecx,[ebp-0x4cc]
  612e35:	50                   	push   eax
  612e36:	e8 dc 15 df ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  612e3b:	6a 5c                	push   0x5c
  612e3d:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  612e42:	e8 1f 59 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  612e47:	83 c4 08             	add    esp,0x8
  612e4a:	85 c0                	test   eax,eax
  612e4c:	74 12                	je     0x612e60
  612e4e:	6a 5c                	push   0x5c
  612e50:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  612e55:	e8 0c 59 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  612e5a:	83 c4 08             	add    esp,0x8
  612e5d:	40                   	inc    eax
  612e5e:	eb 05                	jmp    0x612e65
  612e60:	b8 cc 66 6c 00       	mov    eax,0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  612e65:	68 54 67 6f 00       	push   0x6f6754 ; ["vivo::Worker::recvTcp"]
  612e6a:	68 63 02 00 00       	push   0x263
  612e6f:	50                   	push   eax
  612e70:	68 98 98 6c 00       	push   0x6c9898 ; ["[ConntctionModule][%s:%d][%s]: id length less than 4"]
  612e75:	8d 85 6c fa ff ff    	lea    eax,[ebp-0x594]
  612e7b:	c7 85 6c fa ff ff 02 	mov    DWORD PTR [ebp-0x594],0x2
  612e85:	50                   	push   eax
  612e86:	8d 85 4c fb ff ff    	lea    eax,[ebp-0x4b4]
  612e8c:	50                   	push   eax
  612e8d:	e8 77 41 df ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  612e92:	83 c4 18             	add    esp,0x18
  612e95:	8d 8d 4c fb ff ff    	lea    ecx,[ebp-0x4b4]
  612e9b:	e8 63 0b df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  612ea0:	8b b5 64 fa ff ff    	mov    esi,DWORD PTR [ebp-0x59c]
  612ea6:	8d 85 94 fb ff ff    	lea    eax,[ebp-0x46c]
  612eac:	50                   	push   eax
  612ead:	8b 8d 40 fa ff ff    	mov    ecx,DWORD PTR [ebp-0x5c0]
  612eb3:	8d 85 ec fa ff ff    	lea    eax,[ebp-0x514]
  612eb9:	50                   	push   eax
  612eba:	56                   	push   esi
  612ebb:	8d 85 d4 fa ff ff    	lea    eax,[ebp-0x52c]
  612ec1:	50                   	push   eax
  612ec2:	8d 45 08             	lea    eax,[ebp+0x8]
  612ec5:	50                   	push   eax
  612ec6:	8d 85 34 fb ff ff    	lea    eax,[ebp-0x4cc]
  612ecc:	50                   	push   eax
  612ecd:	8d 85 8c fa ff ff    	lea    eax,[ebp-0x574]
  612ed3:	50                   	push   eax
  612ed4:	8d 85 70 fa ff ff    	lea    eax,[ebp-0x590]
  612eda:	50                   	push   eax
  612edb:	8d 85 3f fa ff ff    	lea    eax,[ebp-0x5c1]
  612ee1:	50                   	push   eax
  612ee2:	e8 93 39 df ff       	call   0x40687a ; ["call resolved=0x65ea20 "]
  612ee7:	8b 95 48 fb ff ff    	mov    edx,DWORD PTR [ebp-0x4b8]
  612eed:	c6 45 fc 19          	mov    BYTE PTR [ebp-0x4],0x19
  612ef1:	83 fa 10             	cmp    edx,0x10
  612ef4:	72 2b                	jb     0x612f21
  612ef6:	8b 8d 34 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x4cc]
  612efc:	42                   	inc    edx
  612efd:	8b c1                	mov    eax,ecx
  612eff:	81 fa 00 10 00 00    	cmp    edx,0x1000
  612f05:	72 10                	jb     0x612f17
  612f07:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  612f0a:	83 c2 23             	add    edx,0x23
  612f0d:	2b c1                	sub    eax,ecx
  612f0f:	83 c0 fc             	add    eax,0xfffffffc
  612f12:	83 f8 1f             	cmp    eax,0x1f
  612f15:	77 55                	ja     0x612f6c
  612f17:	52                   	push   edx
  612f18:	51                   	push   ecx
  612f19:	e8 7c f1 de ff       	call   0x40209a ; ["call resolved=0x6665be "]
  612f1e:	83 c4 08             	add    esp,0x8
  612f21:	8b 95 a8 fb ff ff    	mov    edx,DWORD PTR [ebp-0x458]
  612f27:	c7 85 44 fb ff ff 00 	mov    DWORD PTR [ebp-0x4bc],0x0
  612f31:	c7 85 48 fb ff ff 0f 	mov    DWORD PTR [ebp-0x4b8],0xf
  612f3b:	c6 85 34 fb ff ff 00 	mov    BYTE PTR [ebp-0x4cc],0x0
  612f42:	c6 45 fc 18          	mov    BYTE PTR [ebp-0x4],0x18
  612f46:	83 fa 10             	cmp    edx,0x10
  612f49:	72 31                	jb     0x612f7c
  612f4b:	8b 8d 94 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x46c]
  612f51:	42                   	inc    edx
  612f52:	8b c1                	mov    eax,ecx
  612f54:	81 fa 00 10 00 00    	cmp    edx,0x1000
  612f5a:	72 16                	jb     0x612f72
  612f5c:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  612f5f:	83 c2 23             	add    edx,0x23
  612f62:	2b c1                	sub    eax,ecx
  612f64:	83 c0 fc             	add    eax,0xfffffffc
  612f67:	83 f8 1f             	cmp    eax,0x1f
  612f6a:	76 06                	jbe    0x612f72
  612f6c:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  612f72:	52                   	push   edx
  612f73:	51                   	push   ecx
  612f74:	e8 21 f1 de ff       	call   0x40209a ; ["call resolved=0x6665be "]
  612f79:	83 c4 08             	add    esp,0x8
  612f7c:	8d 8d ec fa ff ff    	lea    ecx,[ebp-0x514]
  612f82:	c7 85 a4 fb ff ff 00 	mov    DWORD PTR [ebp-0x45c],0x0
  612f8c:	c7 85 a8 fb ff ff 0f 	mov    DWORD PTR [ebp-0x458],0xf
  612f96:	c6 85 94 fb ff ff 00 	mov    BYTE PTR [ebp-0x46c],0x0
  612f9d:	e8 61 0a df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  612fa2:	8d 8d d4 fa ff ff    	lea    ecx,[ebp-0x52c]
  612fa8:	e8 56 0a df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  612fad:	8d 8d 8c fa ff ff    	lea    ecx,[ebp-0x574]
  612fb3:	e8 4b 0a df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  612fb8:	8d 8d ac fb ff ff    	lea    ecx,[ebp-0x454]
  612fbe:	e8 40 0a df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  612fc3:	8d 8d 74 fa ff ff    	lea    ecx,[ebp-0x58c]
  612fc9:	e8 35 0a df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  612fce:	eb 06                	jmp    0x612fd6
  612fd0:	8b b5 64 fa ff ff    	mov    esi,DWORD PTR [ebp-0x59c]
  612fd6:	8b 95 78 fb ff ff    	mov    edx,DWORD PTR [ebp-0x488]
  612fdc:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  612fe0:	83 fa 10             	cmp    edx,0x10
  612fe3:	72 31                	jb     0x613016
  612fe5:	8b 8d 64 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x49c]
  612feb:	42                   	inc    edx
  612fec:	8b c1                	mov    eax,ecx
  612fee:	81 fa 00 10 00 00    	cmp    edx,0x1000
  612ff4:	72 16                	jb     0x61300c
  612ff6:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  612ff9:	83 c2 23             	add    edx,0x23
  612ffc:	2b c1                	sub    eax,ecx
  612ffe:	83 c0 fc             	add    eax,0xfffffffc
  613001:	83 f8 1f             	cmp    eax,0x1f
  613004:	76 06                	jbe    0x61300c
  613006:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  61300c:	52                   	push   edx
  61300d:	51                   	push   ecx
  61300e:	e8 87 f0 de ff       	call   0x40209a ; ["call resolved=0x6665be "]
  613013:	83 c4 08             	add    esp,0x8
  613016:	8b 8d 54 fa ff ff    	mov    ecx,DWORD PTR [ebp-0x5ac]
  61301c:	c7 85 74 fb ff ff 00 	mov    DWORD PTR [ebp-0x48c],0x0
  613026:	c7 85 78 fb ff ff 0f 	mov    DWORD PTR [ebp-0x488],0xf
  613030:	c6 85 64 fb ff ff 00 	mov    BYTE PTR [ebp-0x49c],0x0
  613037:	85 c9                	test   ecx,ecx
  613039:	74 36                	je     0x613071
  61303b:	8b 85 5c fa ff ff    	mov    eax,DWORD PTR [ebp-0x5a4]
  613041:	2b c1                	sub    eax,ecx
  613043:	c1 f8 02             	sar    eax,0x2
  613046:	50                   	push   eax
  613047:	51                   	push   ecx
  613048:	8d 8d 54 fa ff ff    	lea    ecx,[ebp-0x5ac]
  61304e:	e8 a9 06 df ff       	call   0x4036fc ; ["call resolved=0x487630 "]
  613053:	c7 85 54 fa ff ff 00 	mov    DWORD PTR [ebp-0x5ac],0x0
  61305d:	c7 85 58 fa ff ff 00 	mov    DWORD PTR [ebp-0x5a8],0x0
  613067:	c7 85 5c fa ff ff 00 	mov    DWORD PTR [ebp-0x5a4],0x0
  613071:	8d 8d 44 fa ff ff    	lea    ecx,[ebp-0x5bc]
  613077:	e8 62 6f df ff       	call   0x409fde ; ["call resolved=0x480970 "]
  61307c:	ff b5 44 fa ff ff    	push   DWORD PTR [ebp-0x5bc]
  613082:	8d 8d 4c fa ff ff    	lea    ecx,[ebp-0x5b4]
  613088:	e8 c1 68 df ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  61308d:	8b 95 d8 fb ff ff    	mov    edx,DWORD PTR [ebp-0x428]
  613093:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  61309a:	83 fa 10             	cmp    edx,0x10
  61309d:	72 2f                	jb     0x6130ce
  61309f:	8b 8d c4 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x43c]
  6130a5:	42                   	inc    edx
  6130a6:	8b c1                	mov    eax,ecx
  6130a8:	81 fa 00 10 00 00    	cmp    edx,0x1000
  6130ae:	72 14                	jb     0x6130c4
  6130b0:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  6130b3:	83 c2 23             	add    edx,0x23
  6130b6:	2b c1                	sub    eax,ecx
  6130b8:	83 c0 fc             	add    eax,0xfffffffc
  6130bb:	83 f8 1f             	cmp    eax,0x1f
  6130be:	0f 87 dc 02 00 00    	ja     0x6133a0
  6130c4:	52                   	push   edx
  6130c5:	51                   	push   ecx
  6130c6:	e8 cf ef de ff       	call   0x40209a ; ["call resolved=0x6665be "]
  6130cb:	83 c4 08             	add    esp,0x8
  6130ce:	32 c0                	xor    al,al
  6130d0:	e9 8d ec ff ff       	jmp    0x611d62
  6130d5:	6a 5c                	push   0x5c
  6130d7:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  6130dc:	e8 85 56 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  6130e1:	83 c4 08             	add    esp,0x8
  6130e4:	85 c0                	test   eax,eax
  6130e6:	74 12                	je     0x6130fa
  6130e8:	6a 5c                	push   0x5c
  6130ea:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  6130ef:	e8 72 56 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  6130f4:	83 c4 08             	add    esp,0x8
  6130f7:	40                   	inc    eax
  6130f8:	eb 05                	jmp    0x6130ff
  6130fa:	b8 cc 66 6c 00       	mov    eax,0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  6130ff:	68 54 67 6f 00       	push   0x6f6754 ; ["vivo::Worker::recvTcp"]
  613104:	68 77 02 00 00       	push   0x277
  613109:	50                   	push   eax
  61310a:	68 70 43 6d 00       	push   0x6d4370 ; ["[ConntctionModule][%s:%d][%s]:json parse_error\n"]
  61310f:	8d 85 6c fa ff ff    	lea    eax,[ebp-0x594]
  613115:	c7 85 6c fa ff ff 02 	mov    DWORD PTR [ebp-0x594],0x2
  61311f:	50                   	push   eax
  613120:	8d 85 a4 fa ff ff    	lea    eax,[ebp-0x55c]
  613126:	50                   	push   eax
  613127:	e8 dd 3e df ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  61312c:	83 c4 18             	add    esp,0x18
  61312f:	8d 8d a4 fa ff ff    	lea    ecx,[ebp-0x55c]
  613135:	e8 c9 08 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  61313a:	8b 85 38 fa ff ff    	mov    eax,DWORD PTR [ebp-0x5c8]
  613140:	ff 30                	push   DWORD PTR [eax]
  613142:	ff 15 f0 d8 79 00    	call   DWORD PTR ds:0x79d8f0
  613148:	6a 5c                	push   0x5c
  61314a:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  61314f:	e8 12 56 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  613154:	83 c4 08             	add    esp,0x8
  613157:	85 c0                	test   eax,eax
  613159:	74 12                	je     0x61316d
  61315b:	6a 5c                	push   0x5c
  61315d:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  613162:	e8 ff 55 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  613167:	83 c4 08             	add    esp,0x8
  61316a:	40                   	inc    eax
  61316b:	eb 05                	jmp    0x613172
  61316d:	b8 cc 66 6c 00       	mov    eax,0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  613172:	68 54 67 6f 00       	push   0x6f6754 ; ["vivo::Worker::recvTcp"]
  613177:	68 7b 02 00 00       	push   0x27b
  61317c:	50                   	push   eax
  61317d:	68 3c 69 6f 00       	push   0x6f693c ; ["[ConntctionModule][%s:%d][%s]: recvTcp thread was killed\n"]
  613182:	8d 85 6c fa ff ff    	lea    eax,[ebp-0x594]
  613188:	c7 85 6c fa ff ff 02 	mov    DWORD PTR [ebp-0x594],0x2
  613192:	50                   	push   eax
  613193:	8d 85 bc fa ff ff    	lea    eax,[ebp-0x544]
  613199:	50                   	push   eax
  61319a:	e8 6a 3e df ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  61319f:	83 c4 18             	add    esp,0x18
  6131a2:	8d 8d bc fa ff ff    	lea    ecx,[ebp-0x544]
  6131a8:	e8 56 08 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  6131ad:	b8 b3 31 61 00       	mov    eax,0x6131b3
  6131b2:	c3                   	ret
  6131b3:	8b 95 d8 fb ff ff    	mov    edx,DWORD PTR [ebp-0x428]
  6131b9:	83 fa 10             	cmp    edx,0x10
  6131bc:	72 2f                	jb     0x6131ed
  6131be:	8b 8d c4 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x43c]
  6131c4:	42                   	inc    edx
  6131c5:	8b c1                	mov    eax,ecx
  6131c7:	81 fa 00 10 00 00    	cmp    edx,0x1000
  6131cd:	72 14                	jb     0x6131e3
  6131cf:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  6131d2:	83 c2 23             	add    edx,0x23
  6131d5:	2b c1                	sub    eax,ecx
  6131d7:	83 c0 fc             	add    eax,0xfffffffc
  6131da:	83 f8 1f             	cmp    eax,0x1f
  6131dd:	0f 87 bd 01 00 00    	ja     0x6133a0
  6131e3:	52                   	push   edx
  6131e4:	51                   	push   ecx
  6131e5:	e8 b0 ee de ff       	call   0x40209a ; ["call resolved=0x6665be "]
  6131ea:	83 c4 08             	add    esp,0x8
  6131ed:	8b 55 1c             	mov    edx,DWORD PTR [ebp+0x1c]
  6131f0:	c7 85 d4 fb ff ff 00 	mov    DWORD PTR [ebp-0x42c],0x0
  6131fa:	c7 85 d8 fb ff ff 0f 	mov    DWORD PTR [ebp-0x428],0xf
  613204:	c6 85 c4 fb ff ff 00 	mov    BYTE PTR [ebp-0x43c],0x0
  61320b:	83 fa 10             	cmp    edx,0x10
  61320e:	0f 82 ed f6 ff ff    	jb     0x612901
  613214:	8b 4d 08             	mov    ecx,DWORD PTR [ebp+0x8]
  613217:	42                   	inc    edx
  613218:	8b c1                	mov    eax,ecx
  61321a:	81 fa 00 10 00 00    	cmp    edx,0x1000
  613220:	0f 82 d1 f6 ff ff    	jb     0x6128f7
  613226:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  613229:	83 c2 23             	add    edx,0x23
  61322c:	2b c1                	sub    eax,ecx
  61322e:	83 c0 fc             	add    eax,0xfffffffc
  613231:	83 f8 1f             	cmp    eax,0x1f
  613234:	0f 87 66 01 00 00    	ja     0x6133a0
  61323a:	e9 b8 f6 ff ff       	jmp    0x6128f7
  61323f:	6a 5c                	push   0x5c
  613241:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  613246:	e8 1b 55 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  61324b:	83 c4 08             	add    esp,0x8
  61324e:	85 c0                	test   eax,eax
  613250:	74 12                	je     0x613264
  613252:	6a 5c                	push   0x5c
  613254:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  613259:	e8 08 55 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  61325e:	83 c4 08             	add    esp,0x8
  613261:	40                   	inc    eax
  613262:	eb 05                	jmp    0x613269
  613264:	b8 cc 66 6c 00       	mov    eax,0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  613269:	68 54 67 6f 00       	push   0x6f6754 ; ["vivo::Worker::recvTcp"]
  61326e:	68 82 02 00 00       	push   0x282
  613273:	50                   	push   eax
  613274:	68 84 69 6f 00       	push   0x6f6984 ; ["[ConntctionModule][%s:%d][%s]:recvTcp json::exception \n"]
  613279:	8d 85 6c fa ff ff    	lea    eax,[ebp-0x594]
  61327f:	c7 85 6c fa ff ff 02 	mov    DWORD PTR [ebp-0x594],0x2
  613289:	50                   	push   eax
  61328a:	8d 85 bc fa ff ff    	lea    eax,[ebp-0x544]
  613290:	50                   	push   eax
  613291:	e8 73 3d df ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  613296:	83 c4 18             	add    esp,0x18
  613299:	8d 8d bc fa ff ff    	lea    ecx,[ebp-0x544]
  61329f:	e8 5f 07 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  6132a4:	8b 85 38 fa ff ff    	mov    eax,DWORD PTR [ebp-0x5c8]
  6132aa:	ff 30                	push   DWORD PTR [eax]
  6132ac:	ff 15 f0 d8 79 00    	call   DWORD PTR ds:0x79d8f0
  6132b2:	6a 5c                	push   0x5c
  6132b4:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  6132b9:	e8 a8 54 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  6132be:	83 c4 08             	add    esp,0x8
  6132c1:	85 c0                	test   eax,eax
  6132c3:	74 12                	je     0x6132d7
  6132c5:	6a 5c                	push   0x5c
  6132c7:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  6132cc:	e8 95 54 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  6132d1:	83 c4 08             	add    esp,0x8
  6132d4:	40                   	inc    eax
  6132d5:	eb 05                	jmp    0x6132dc
  6132d7:	b8 cc 66 6c 00       	mov    eax,0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  6132dc:	68 54 67 6f 00       	push   0x6f6754 ; ["vivo::Worker::recvTcp"]
  6132e1:	68 86 02 00 00       	push   0x286
  6132e6:	50                   	push   eax
  6132e7:	68 3c 69 6f 00       	push   0x6f693c ; ["[ConntctionModule][%s:%d][%s]: recvTcp thread was killed\n"]
  6132ec:	8d 85 6c fa ff ff    	lea    eax,[ebp-0x594]
  6132f2:	c7 85 6c fa ff ff 02 	mov    DWORD PTR [ebp-0x594],0x2
  6132fc:	50                   	push   eax
  6132fd:	8d 85 a4 fa ff ff    	lea    eax,[ebp-0x55c]
  613303:	50                   	push   eax
  613304:	e8 00 3d df ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  613309:	83 c4 18             	add    esp,0x18
  61330c:	8d 8d a4 fa ff ff    	lea    ecx,[ebp-0x55c]
  613312:	e8 ec 06 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  613317:	b8 1d 33 61 00       	mov    eax,0x61331d
  61331c:	c3                   	ret
  61331d:	8b 95 d8 fb ff ff    	mov    edx,DWORD PTR [ebp-0x428]
  613323:	83 fa 10             	cmp    edx,0x10
  613326:	72 2b                	jb     0x613353
  613328:	8b 8d c4 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x43c]
  61332e:	42                   	inc    edx
  61332f:	8b c1                	mov    eax,ecx
  613331:	81 fa 00 10 00 00    	cmp    edx,0x1000
  613337:	72 10                	jb     0x613349
  613339:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  61333c:	83 c2 23             	add    edx,0x23
  61333f:	2b c1                	sub    eax,ecx
  613341:	83 c0 fc             	add    eax,0xfffffffc
  613344:	83 f8 1f             	cmp    eax,0x1f
  613347:	77 57                	ja     0x6133a0
  613349:	52                   	push   edx
  61334a:	51                   	push   ecx
  61334b:	e8 4a ed de ff       	call   0x40209a ; ["call resolved=0x6665be "]
  613350:	83 c4 08             	add    esp,0x8
  613353:	c7 85 d4 fb ff ff 00 	mov    DWORD PTR [ebp-0x42c],0x0
  61335d:	c7 85 d8 fb ff ff 0f 	mov    DWORD PTR [ebp-0x428],0xf
  613367:	c6 85 c4 fb ff ff 00 	mov    BYTE PTR [ebp-0x43c],0x0
  61336e:	8b 55 1c             	mov    edx,DWORD PTR [ebp+0x1c]
  613371:	83 fa 10             	cmp    edx,0x10
  613374:	0f 82 87 f5 ff ff    	jb     0x612901
  61337a:	8b 4d 08             	mov    ecx,DWORD PTR [ebp+0x8]
  61337d:	42                   	inc    edx
  61337e:	8b c1                	mov    eax,ecx
  613380:	81 fa 00 10 00 00    	cmp    edx,0x1000
  613386:	0f 82 6b f5 ff ff    	jb     0x6128f7
  61338c:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  61338f:	83 c2 23             	add    edx,0x23
  613392:	2b c1                	sub    eax,ecx
  613394:	83 c0 fc             	add    eax,0xfffffffc
  613397:	83 f8 1f             	cmp    eax,0x1f
  61339a:	0f 86 57 f5 ff ff    	jbe    0x6128f7
  6133a0:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  6133a6:	ff 36                	push   DWORD PTR [esi]
  6133a8:	ff 15 f0 d8 79 00    	call   DWORD PTR ds:0x79d8f0
  6133ae:	6a 5c                	push   0x5c
  6133b0:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  6133b5:	e8 ac 53 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  6133ba:	83 c4 08             	add    esp,0x8
  6133bd:	85 c0                	test   eax,eax
  6133bf:	74 12                	je     0x6133d3
  6133c1:	6a 5c                	push   0x5c
  6133c3:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  6133c8:	e8 99 53 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  6133cd:	83 c4 08             	add    esp,0x8
  6133d0:	40                   	inc    eax
  6133d1:	eb 05                	jmp    0x6133d8
  6133d3:	b8 cc 66 6c 00       	mov    eax,0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  6133d8:	68 54 67 6f 00       	push   0x6f6754 ; ["vivo::Worker::recvTcp"]
  6133dd:	68 8c 02 00 00       	push   0x28c
  6133e2:	50                   	push   eax
  6133e3:	68 3c 69 6f 00       	push   0x6f693c ; ["[ConntctionModule][%s:%d][%s]: recvTcp thread was killed\n"]
  6133e8:	8d 85 6c fa ff ff    	lea    eax,[ebp-0x594]
  6133ee:	c7 85 6c fa ff ff 02 	mov    DWORD PTR [ebp-0x594],0x2
  6133f8:	50                   	push   eax
  6133f9:	8d 85 bc fa ff ff    	lea    eax,[ebp-0x544]
  6133ff:	50                   	push   eax
  613400:	e8 04 3c df ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  613405:	83 c4 18             	add    esp,0x18
  613408:	8d 8d bc fa ff ff    	lea    ecx,[ebp-0x544]
  61340e:	e8 f0 05 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  613413:	e9 56 ff ff ff       	jmp    0x61336e
