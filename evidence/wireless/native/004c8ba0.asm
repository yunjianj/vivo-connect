; DataBuilderV2::getData; image base 0x400000; static annotation only
  4c8ba0:	55                   	push   ebp
  4c8ba1:	8b ec                	mov    ebp,esp
  4c8ba3:	6a ff                	push   0xffffffff
  4c8ba5:	68 fd 94 67 00       	push   0x6794fd
  4c8baa:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  4c8bb0:	50                   	push   eax
  4c8bb1:	83 ec 24             	sub    esp,0x24
  4c8bb4:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  4c8bb9:	33 c5                	xor    eax,ebp
  4c8bbb:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  4c8bbe:	53                   	push   ebx
  4c8bbf:	56                   	push   esi
  4c8bc0:	57                   	push   edi
  4c8bc1:	50                   	push   eax
  4c8bc2:	8d 45 f4             	lea    eax,[ebp-0xc]
  4c8bc5:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  4c8bcb:	8b d9                	mov    ebx,ecx
  4c8bcd:	89 5d d4             	mov    DWORD PTR [ebp-0x2c],ebx
  4c8bd0:	8b 75 08             	mov    esi,DWORD PTR [ebp+0x8]
  4c8bd3:	89 75 d0             	mov    DWORD PTR [ebp-0x30],esi
  4c8bd6:	b9 82 84 7a 00       	mov    ecx,0x7a8482
  4c8bdb:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  4c8be2:	e8 07 ff f3 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  4c8be7:	8b 45 20             	mov    eax,DWORD PTR [ebp+0x20]
  4c8bea:	8d 55 0c             	lea    edx,[ebp+0xc]
  4c8bed:	8b 4d 0c             	mov    ecx,DWORD PTR [ebp+0xc]
  4c8bf0:	83 f8 10             	cmp    eax,0x10
  4c8bf3:	0f 43 d1             	cmovae edx,ecx
  4c8bf6:	83 7d 1c 08          	cmp    DWORD PTR [ebp+0x1c],0x8
  4c8bfa:	0f 85 36 01 00 00    	jne    0x4c8d36
  4c8c00:	6a 08                	push   0x8
  4c8c02:	68 54 4d 6c 00       	push   0x6c4d54 ; ["deviceId"]
  4c8c07:	52                   	push   edx
  4c8c08:	e8 b0 bc f3 ff       	call   0x4048bd ; ["call resolved=0x482fc0 "]
  4c8c0d:	83 c4 0c             	add    esp,0xc
  4c8c10:	85 c0                	test   eax,eax
  4c8c12:	0f 85 18 01 00 00    	jne    0x4c8d30
  4c8c18:	83 7b 18 10          	cmp    DWORD PTR [ebx+0x18],0x10
  4c8c1c:	8d 7b 04             	lea    edi,[ebx+0x4]
  4c8c1f:	8b df                	mov    ebx,edi
  4c8c21:	72 02                	jb     0x4c8c25
  4c8c23:	8b 1f                	mov    ebx,DWORD PTR [edi]
  4c8c25:	6a 5c                	push   0x5c
  4c8c27:	68 e0 b4 6c 00       	push   0x6cb4e0 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\DataBuilderV2.cpp"]
  4c8c2c:	e8 35 fb 19 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4c8c31:	83 c4 08             	add    esp,0x8
  4c8c34:	85 c0                	test   eax,eax
  4c8c36:	74 12                	je     0x4c8c4a
  4c8c38:	6a 5c                	push   0x5c
  4c8c3a:	68 e0 b4 6c 00       	push   0x6cb4e0 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\DataBuilderV2.cpp"]
  4c8c3f:	e8 22 fb 19 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4c8c44:	83 c4 08             	add    esp,0x8
  4c8c47:	40                   	inc    eax
  4c8c48:	eb 05                	jmp    0x4c8c4f
  4c8c4a:	b8 e0 b4 6c 00       	mov    eax,0x6cb4e0 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\DataBuilderV2.cpp"]
  4c8c4f:	53                   	push   ebx
  4c8c50:	68 c4 b4 6c 00       	push   0x6cb4c4 ; ["DataBuilderV2::getData"]
  4c8c55:	6a 7c                	push   0x7c
  4c8c57:	50                   	push   eax
  4c8c58:	68 40 b5 6c 00       	push   0x6cb540 ; ["[ConntctionModule][%s:%d][%s]: rfcommDevice id is:%s"]
  4c8c5d:	8d 45 d0             	lea    eax,[ebp-0x30]
  4c8c60:	c7 45 d0 02 00 00 00 	mov    DWORD PTR [ebp-0x30],0x2
  4c8c67:	50                   	push   eax
  4c8c68:	8d 45 d8             	lea    eax,[ebp-0x28]
  4c8c6b:	50                   	push   eax
  4c8c6c:	e8 98 e3 f3 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4c8c71:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  4c8c74:	83 c4 1c             	add    esp,0x1c
  4c8c77:	83 fa 10             	cmp    edx,0x10
  4c8c7a:	72 2c                	jb     0x4c8ca8
  4c8c7c:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  4c8c7f:	42                   	inc    edx
  4c8c80:	8b c1                	mov    eax,ecx
  4c8c82:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4c8c88:	72 14                	jb     0x4c8c9e
  4c8c8a:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4c8c8d:	83 c2 23             	add    edx,0x23
  4c8c90:	2b c1                	sub    eax,ecx
  4c8c92:	83 c0 fc             	add    eax,0xfffffffc
  4c8c95:	83 f8 1f             	cmp    eax,0x1f
  4c8c98:	0f 87 76 01 00 00    	ja     0x4c8e14
  4c8c9e:	52                   	push   edx
  4c8c9f:	51                   	push   ecx
  4c8ca0:	e8 f5 93 f3 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4c8ca5:	83 c4 08             	add    esp,0x8
  4c8ca8:	8b 45 d4             	mov    eax,DWORD PTR [ebp-0x2c]
  4c8cab:	83 78 14 00          	cmp    DWORD PTR [eax+0x14],0x0
  4c8caf:	74 5c                	je     0x4c8d0d
  4c8cb1:	57                   	push   edi
  4c8cb2:	8b ce                	mov    ecx,esi
  4c8cb4:	e8 d2 cf f3 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  4c8cb9:	8b 55 20             	mov    edx,DWORD PTR [ebp+0x20]
  4c8cbc:	83 fa 10             	cmp    edx,0x10
  4c8cbf:	72 2c                	jb     0x4c8ced
  4c8cc1:	8b 4d 0c             	mov    ecx,DWORD PTR [ebp+0xc]
  4c8cc4:	42                   	inc    edx
  4c8cc5:	8b c1                	mov    eax,ecx
  4c8cc7:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4c8ccd:	72 14                	jb     0x4c8ce3
  4c8ccf:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4c8cd2:	83 c2 23             	add    edx,0x23
  4c8cd5:	2b c1                	sub    eax,ecx
  4c8cd7:	83 c0 fc             	add    eax,0xfffffffc
  4c8cda:	83 f8 1f             	cmp    eax,0x1f
  4c8cdd:	0f 87 31 01 00 00    	ja     0x4c8e14
  4c8ce3:	52                   	push   edx
  4c8ce4:	51                   	push   ecx
  4c8ce5:	e8 b0 93 f3 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4c8cea:	83 c4 08             	add    esp,0x8
  4c8ced:	8b c6                	mov    eax,esi
  4c8cef:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  4c8cf2:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  4c8cf9:	59                   	pop    ecx
  4c8cfa:	5f                   	pop    edi
  4c8cfb:	5e                   	pop    esi
  4c8cfc:	5b                   	pop    ebx
  4c8cfd:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  4c8d00:	33 cd                	xor    ecx,ebp
  4c8d02:	e8 88 b7 f3 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  4c8d07:	8b e5                	mov    esp,ebp
  4c8d09:	5d                   	pop    ebp
  4c8d0a:	c2 1c 00             	ret    0x1c
  4c8d0d:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  4c8d13:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  4c8d1a:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  4c8d21:	c6 06 00             	mov    BYTE PTR [esi],0x0
  4c8d24:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  4c8d2b:	c6 06 00             	mov    BYTE PTR [esi],0x0
  4c8d2e:	eb 89                	jmp    0x4c8cb9
  4c8d30:	8b 45 20             	mov    eax,DWORD PTR [ebp+0x20]
  4c8d33:	8b 4d 0c             	mov    ecx,DWORD PTR [ebp+0xc]
  4c8d36:	83 f8 10             	cmp    eax,0x10
  4c8d39:	8d 7d 0c             	lea    edi,[ebp+0xc]
  4c8d3c:	6a 5c                	push   0x5c
  4c8d3e:	68 e0 b4 6c 00       	push   0x6cb4e0 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\DataBuilderV2.cpp"]
  4c8d43:	0f 43 f9             	cmovae edi,ecx
  4c8d46:	e8 1b fa 19 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4c8d4b:	83 c4 08             	add    esp,0x8
  4c8d4e:	85 c0                	test   eax,eax
  4c8d50:	74 12                	je     0x4c8d64
  4c8d52:	6a 5c                	push   0x5c
  4c8d54:	68 e0 b4 6c 00       	push   0x6cb4e0 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\DataBuilderV2.cpp"]
  4c8d59:	e8 08 fa 19 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4c8d5e:	83 c4 08             	add    esp,0x8
  4c8d61:	40                   	inc    eax
  4c8d62:	eb 05                	jmp    0x4c8d69
  4c8d64:	b8 e0 b4 6c 00       	mov    eax,0x6cb4e0 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\DataBuilderV2.cpp"]
  4c8d69:	57                   	push   edi
  4c8d6a:	68 c4 b4 6c 00       	push   0x6cb4c4 ; ["DataBuilderV2::getData"]
  4c8d6f:	68 85 00 00 00       	push   0x85
  4c8d74:	50                   	push   eax
  4c8d75:	68 e8 b3 6c 00       	push   0x6cb3e8 ; ["[ConntctionModule][%s:%d][%s]: request %s, return NULL!"]
  4c8d7a:	8d 45 d4             	lea    eax,[ebp-0x2c]
  4c8d7d:	c7 45 d4 02 00 00 00 	mov    DWORD PTR [ebp-0x2c],0x2
  4c8d84:	50                   	push   eax
  4c8d85:	8d 45 d8             	lea    eax,[ebp-0x28]
  4c8d88:	50                   	push   eax
  4c8d89:	e8 7b e2 f3 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4c8d8e:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  4c8d91:	83 c4 1c             	add    esp,0x1c
  4c8d94:	83 fa 10             	cmp    edx,0x10
  4c8d97:	72 28                	jb     0x4c8dc1
  4c8d99:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  4c8d9c:	42                   	inc    edx
  4c8d9d:	8b c1                	mov    eax,ecx
  4c8d9f:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4c8da5:	72 10                	jb     0x4c8db7
  4c8da7:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4c8daa:	83 c2 23             	add    edx,0x23
  4c8dad:	2b c1                	sub    eax,ecx
  4c8daf:	83 c0 fc             	add    eax,0xfffffffc
  4c8db2:	83 f8 1f             	cmp    eax,0x1f
  4c8db5:	77 5d                	ja     0x4c8e14
  4c8db7:	52                   	push   edx
  4c8db8:	51                   	push   ecx
  4c8db9:	e8 dc 92 f3 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4c8dbe:	83 c4 08             	add    esp,0x8
  4c8dc1:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  4c8dc7:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  4c8dce:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  4c8dd5:	c6 06 00             	mov    BYTE PTR [esi],0x0
  4c8dd8:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  4c8ddf:	c6 06 00             	mov    BYTE PTR [esi],0x0
  4c8de2:	8b 55 20             	mov    edx,DWORD PTR [ebp+0x20]
  4c8de5:	83 fa 10             	cmp    edx,0x10
  4c8de8:	0f 82 ff fe ff ff    	jb     0x4c8ced
  4c8dee:	8b 4d 0c             	mov    ecx,DWORD PTR [ebp+0xc]
  4c8df1:	42                   	inc    edx
  4c8df2:	8b c1                	mov    eax,ecx
  4c8df4:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4c8dfa:	0f 82 e3 fe ff ff    	jb     0x4c8ce3
  4c8e00:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4c8e03:	83 c2 23             	add    edx,0x23
  4c8e06:	2b c1                	sub    eax,ecx
  4c8e08:	83 c0 fc             	add    eax,0xfffffffc
  4c8e0b:	83 f8 1f             	cmp    eax,0x1f
  4c8e0e:	0f 86 cf fe ff ff    	jbe    0x4c8ce3
  4c8e14:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
