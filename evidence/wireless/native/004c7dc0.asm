; DataBuilderV1::getData; image base 0x400000; static annotation only
  4c7dc0:	55                   	push   ebp
  4c7dc1:	8b ec                	mov    ebp,esp
  4c7dc3:	6a ff                	push   0xffffffff
  4c7dc5:	68 0d 93 67 00       	push   0x67930d
  4c7dca:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  4c7dd0:	50                   	push   eax
  4c7dd1:	83 ec 20             	sub    esp,0x20
  4c7dd4:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  4c7dd9:	33 c5                	xor    eax,ebp
  4c7ddb:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  4c7dde:	56                   	push   esi
  4c7ddf:	57                   	push   edi
  4c7de0:	50                   	push   eax
  4c7de1:	8d 45 f4             	lea    eax,[ebp-0xc]
  4c7de4:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  4c7dea:	8b f9                	mov    edi,ecx
  4c7dec:	8b 75 08             	mov    esi,DWORD PTR [ebp+0x8]
  4c7def:	89 75 d4             	mov    DWORD PTR [ebp-0x2c],esi
  4c7df2:	b9 0e 84 7a 00       	mov    ecx,0x7a840e
  4c7df7:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  4c7dfe:	e8 eb 0c f4 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  4c7e03:	8b 45 20             	mov    eax,DWORD PTR [ebp+0x20]
  4c7e06:	8d 55 0c             	lea    edx,[ebp+0xc]
  4c7e09:	8b 4d 0c             	mov    ecx,DWORD PTR [ebp+0xc]
  4c7e0c:	83 f8 10             	cmp    eax,0x10
  4c7e0f:	0f 43 d1             	cmovae edx,ecx
  4c7e12:	83 7d 1c 08          	cmp    DWORD PTR [ebp+0x1c],0x8
  4c7e16:	0f 85 a4 00 00 00    	jne    0x4c7ec0
  4c7e1c:	6a 08                	push   0x8
  4c7e1e:	68 54 4d 6c 00       	push   0x6c4d54 ; ["deviceId"]
  4c7e23:	52                   	push   edx
  4c7e24:	e8 94 ca f3 ff       	call   0x4048bd ; ["call resolved=0x482fc0 "]
  4c7e29:	83 c4 0c             	add    esp,0xc
  4c7e2c:	85 c0                	test   eax,eax
  4c7e2e:	0f 85 86 00 00 00    	jne    0x4c7eba
  4c7e34:	39 47 14             	cmp    DWORD PTR [edi+0x14],eax
  4c7e37:	74 5e                	je     0x4c7e97
  4c7e39:	8d 47 04             	lea    eax,[edi+0x4]
  4c7e3c:	8b ce                	mov    ecx,esi
  4c7e3e:	50                   	push   eax
  4c7e3f:	e8 47 de f3 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  4c7e44:	8b 55 20             	mov    edx,DWORD PTR [ebp+0x20]
  4c7e47:	83 fa 10             	cmp    edx,0x10
  4c7e4a:	72 2c                	jb     0x4c7e78
  4c7e4c:	8b 4d 0c             	mov    ecx,DWORD PTR [ebp+0xc]
  4c7e4f:	42                   	inc    edx
  4c7e50:	8b c1                	mov    eax,ecx
  4c7e52:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4c7e58:	72 14                	jb     0x4c7e6e
  4c7e5a:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4c7e5d:	83 c2 23             	add    edx,0x23
  4c7e60:	2b c1                	sub    eax,ecx
  4c7e62:	83 c0 fc             	add    eax,0xfffffffc
  4c7e65:	83 f8 1f             	cmp    eax,0x1f
  4c7e68:	0f 87 30 01 00 00    	ja     0x4c7f9e
  4c7e6e:	52                   	push   edx
  4c7e6f:	51                   	push   ecx
  4c7e70:	e8 25 a2 f3 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4c7e75:	83 c4 08             	add    esp,0x8
  4c7e78:	8b c6                	mov    eax,esi
  4c7e7a:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  4c7e7d:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  4c7e84:	59                   	pop    ecx
  4c7e85:	5f                   	pop    edi
  4c7e86:	5e                   	pop    esi
  4c7e87:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  4c7e8a:	33 cd                	xor    ecx,ebp
  4c7e8c:	e8 fe c5 f3 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  4c7e91:	8b e5                	mov    esp,ebp
  4c7e93:	5d                   	pop    ebp
  4c7e94:	c2 1c 00             	ret    0x1c
  4c7e97:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  4c7e9d:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  4c7ea4:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  4c7eab:	c6 06 00             	mov    BYTE PTR [esi],0x0
  4c7eae:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  4c7eb5:	c6 06 00             	mov    BYTE PTR [esi],0x0
  4c7eb8:	eb 8a                	jmp    0x4c7e44
  4c7eba:	8b 45 20             	mov    eax,DWORD PTR [ebp+0x20]
  4c7ebd:	8b 4d 0c             	mov    ecx,DWORD PTR [ebp+0xc]
  4c7ec0:	83 f8 10             	cmp    eax,0x10
  4c7ec3:	8d 7d 0c             	lea    edi,[ebp+0xc]
  4c7ec6:	6a 5c                	push   0x5c
  4c7ec8:	68 28 b3 6c 00       	push   0x6cb328 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\DataBuilder.cpp"]
  4c7ecd:	0f 43 f9             	cmovae edi,ecx
  4c7ed0:	e8 91 08 1a 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4c7ed5:	83 c4 08             	add    esp,0x8
  4c7ed8:	85 c0                	test   eax,eax
  4c7eda:	74 12                	je     0x4c7eee
  4c7edc:	6a 5c                	push   0x5c
  4c7ede:	68 28 b3 6c 00       	push   0x6cb328 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\DataBuilder.cpp"]
  4c7ee3:	e8 7e 08 1a 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4c7ee8:	83 c4 08             	add    esp,0x8
  4c7eeb:	40                   	inc    eax
  4c7eec:	eb 05                	jmp    0x4c7ef3
  4c7eee:	b8 28 b3 6c 00       	mov    eax,0x6cb328 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\DataBuilder.cpp"]
  4c7ef3:	57                   	push   edi
  4c7ef4:	68 cc b3 6c 00       	push   0x6cb3cc ; ["DataBuilderV1::getData"]
  4c7ef9:	68 31 01 00 00       	push   0x131
  4c7efe:	50                   	push   eax
  4c7eff:	68 e8 b3 6c 00       	push   0x6cb3e8 ; ["[ConntctionModule][%s:%d][%s]: request %s, return NULL!"]
  4c7f04:	8d 45 d4             	lea    eax,[ebp-0x2c]
  4c7f07:	c7 45 d4 02 00 00 00 	mov    DWORD PTR [ebp-0x2c],0x2
  4c7f0e:	50                   	push   eax
  4c7f0f:	8d 45 d8             	lea    eax,[ebp-0x28]
  4c7f12:	50                   	push   eax
  4c7f13:	e8 f1 f0 f3 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4c7f18:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  4c7f1b:	83 c4 1c             	add    esp,0x1c
  4c7f1e:	83 fa 10             	cmp    edx,0x10
  4c7f21:	72 28                	jb     0x4c7f4b
  4c7f23:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  4c7f26:	42                   	inc    edx
  4c7f27:	8b c1                	mov    eax,ecx
  4c7f29:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4c7f2f:	72 10                	jb     0x4c7f41
  4c7f31:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4c7f34:	83 c2 23             	add    edx,0x23
  4c7f37:	2b c1                	sub    eax,ecx
  4c7f39:	83 c0 fc             	add    eax,0xfffffffc
  4c7f3c:	83 f8 1f             	cmp    eax,0x1f
  4c7f3f:	77 5d                	ja     0x4c7f9e
  4c7f41:	52                   	push   edx
  4c7f42:	51                   	push   ecx
  4c7f43:	e8 52 a1 f3 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4c7f48:	83 c4 08             	add    esp,0x8
  4c7f4b:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  4c7f51:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  4c7f58:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  4c7f5f:	c6 06 00             	mov    BYTE PTR [esi],0x0
  4c7f62:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  4c7f69:	c6 06 00             	mov    BYTE PTR [esi],0x0
  4c7f6c:	8b 55 20             	mov    edx,DWORD PTR [ebp+0x20]
  4c7f6f:	83 fa 10             	cmp    edx,0x10
  4c7f72:	0f 82 00 ff ff ff    	jb     0x4c7e78
  4c7f78:	8b 4d 0c             	mov    ecx,DWORD PTR [ebp+0xc]
  4c7f7b:	42                   	inc    edx
  4c7f7c:	8b c1                	mov    eax,ecx
  4c7f7e:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4c7f84:	0f 82 e4 fe ff ff    	jb     0x4c7e6e
  4c7f8a:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4c7f8d:	83 c2 23             	add    edx,0x23
  4c7f90:	2b c1                	sub    eax,ecx
  4c7f92:	83 c0 fc             	add    eax,0xfffffffc
  4c7f95:	83 f8 1f             	cmp    eax,0x1f
  4c7f98:	0f 86 d0 fe ff ff    	jbe    0x4c7e6e
  4c7f9e:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
