; ClassicRfcommClient::recvData; image base 0x400000; static annotation only
  4f2e80:	81 ec 28 04 00 00    	sub    esp,0x428
  4f2e86:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  4f2e8b:	33 c4                	xor    eax,esp
  4f2e8d:	89 84 24 24 04 00 00 	mov    DWORD PTR [esp+0x424],eax
  4f2e94:	53                   	push   ebx
  4f2e95:	8b 9c 24 34 04 00 00 	mov    ebx,DWORD PTR [esp+0x434]
  4f2e9c:	55                   	push   ebp
  4f2e9d:	56                   	push   esi
  4f2e9e:	8b f1                	mov    esi,ecx
  4f2ea0:	b9 1d 88 7a 00       	mov    ecx,0x7a881d
  4f2ea5:	57                   	push   edi
  4f2ea6:	e8 43 5c f1 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  4f2eab:	8b 84 24 44 04 00 00 	mov    eax,DWORD PTR [esp+0x444]
  4f2eb2:	8b 2d d4 d8 79 00    	mov    ebp,DWORD PTR ds:0x79d8d4
  4f2eb8:	80 38 00             	cmp    BYTE PTR [eax],0x0
  4f2ebb:	74 4f                	je     0x4f2f0c
  4f2ebd:	8b 3d c4 d8 79 00    	mov    edi,DWORD PTR ds:0x79d8c4
  4f2ec3:	8d 44 24 10          	lea    eax,[esp+0x10]
  4f2ec7:	50                   	push   eax
  4f2ec8:	68 7f 66 04 40       	push   0x4004667f
  4f2ecd:	ff 36                	push   DWORD PTR [esi]
  4f2ecf:	ff d7                	call   edi
  4f2ed1:	8b 4c 24 10          	mov    ecx,DWORD PTR [esp+0x10]
  4f2ed5:	85 c9                	test   ecx,ecx
  4f2ed7:	74 33                	je     0x4f2f0c
  4f2ed9:	0f 1f 80 00 00 00 00 	nop    DWORD PTR [eax+0x0]
  4f2ee0:	b8 00 04 00 00       	mov    eax,0x400
  4f2ee5:	3b c8                	cmp    ecx,eax
  4f2ee7:	6a 00                	push   0x0
  4f2ee9:	0f 42 c1             	cmovb  eax,ecx
  4f2eec:	50                   	push   eax
  4f2eed:	8d 44 24 3c          	lea    eax,[esp+0x3c]
  4f2ef1:	50                   	push   eax
  4f2ef2:	ff 36                	push   DWORD PTR [esi]
  4f2ef4:	ff d5                	call   ebp
  4f2ef6:	8d 44 24 10          	lea    eax,[esp+0x10]
  4f2efa:	50                   	push   eax
  4f2efb:	68 7f 66 04 40       	push   0x4004667f
  4f2f00:	ff 36                	push   DWORD PTR [esi]
  4f2f02:	ff d7                	call   edi
  4f2f04:	8b 4c 24 10          	mov    ecx,DWORD PTR [esp+0x10]
  4f2f08:	85 c9                	test   ecx,ecx
  4f2f0a:	75 d4                	jne    0x4f2ee0
  4f2f0c:	69 84 24 3c 04 00 00 	imul   eax,DWORD PTR [esp+0x43c],0x3e8
  4f2f17:	6a 04                	push   0x4
  4f2f19:	89 44 24 1c          	mov    DWORD PTR [esp+0x1c],eax
  4f2f1d:	8d 44 24 1c          	lea    eax,[esp+0x1c]
  4f2f21:	50                   	push   eax
  4f2f22:	68 06 10 00 00       	push   0x1006
  4f2f27:	68 ff ff 00 00       	push   0xffff
  4f2f2c:	ff 36                	push   DWORD PTR [esi]
  4f2f2e:	ff 15 c8 d8 79 00    	call   DWORD PTR ds:0x79d8c8
  4f2f34:	8b 3d a4 d8 79 00    	mov    edi,DWORD PTR ds:0x79d8a4
  4f2f3a:	83 f8 ff             	cmp    eax,0xffffffff
  4f2f3d:	0f 85 91 00 00 00    	jne    0x4f2fd4
  4f2f43:	ff d7                	call   edi
  4f2f45:	6a 5c                	push   0x5c
  4f2f47:	68 e8 ed 6c 00       	push   0x6cede8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\ClassicRfcommClient.cpp"]
  4f2f4c:	89 44 24 18          	mov    DWORD PTR [esp+0x18],eax
  4f2f50:	e8 11 58 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4f2f55:	83 c4 08             	add    esp,0x8
  4f2f58:	85 c0                	test   eax,eax
  4f2f5a:	74 12                	je     0x4f2f6e
  4f2f5c:	6a 5c                	push   0x5c
  4f2f5e:	68 e8 ed 6c 00       	push   0x6cede8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\ClassicRfcommClient.cpp"]
  4f2f63:	e8 fe 57 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4f2f68:	83 c4 08             	add    esp,0x8
  4f2f6b:	40                   	inc    eax
  4f2f6c:	eb 05                	jmp    0x4f2f73
  4f2f6e:	b8 e8 ed 6c 00       	mov    eax,0x6cede8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\ClassicRfcommClient.cpp"]
  4f2f73:	ff 74 24 10          	push   DWORD PTR [esp+0x10]
  4f2f77:	c7 44 24 18 02 00 00 	mov    DWORD PTR [esp+0x18],0x2
  4f2f7f:	68 54 f1 6c 00       	push   0x6cf154 ; ["ClassicRfcommClient::recvData"]
  4f2f84:	6a 5e                	push   0x5e
  4f2f86:	50                   	push   eax
  4f2f87:	68 78 f1 6c 00       	push   0x6cf178 ; ["[ConntctionModule][%s:%d][%s]: setsockopt for SO_RCVTIMEO failed with error: %u\n"]
  4f2f8c:	8d 44 24 28          	lea    eax,[esp+0x28]
  4f2f90:	50                   	push   eax
  4f2f91:	8d 44 24 34          	lea    eax,[esp+0x34]
  4f2f95:	50                   	push   eax
  4f2f96:	e8 6e 40 f1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4f2f9b:	8b 54 24 4c          	mov    edx,DWORD PTR [esp+0x4c]
  4f2f9f:	83 c4 1c             	add    esp,0x1c
  4f2fa2:	83 fa 10             	cmp    edx,0x10
  4f2fa5:	72 2d                	jb     0x4f2fd4
  4f2fa7:	8b 4c 24 1c          	mov    ecx,DWORD PTR [esp+0x1c]
  4f2fab:	42                   	inc    edx
  4f2fac:	8b c1                	mov    eax,ecx
  4f2fae:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4f2fb4:	72 14                	jb     0x4f2fca
  4f2fb6:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4f2fb9:	83 c2 23             	add    edx,0x23
  4f2fbc:	2b c1                	sub    eax,ecx
  4f2fbe:	83 c0 fc             	add    eax,0xfffffffc
  4f2fc1:	83 f8 1f             	cmp    eax,0x1f
  4f2fc4:	0f 87 50 01 00 00    	ja     0x4f311a
  4f2fca:	52                   	push   edx
  4f2fcb:	51                   	push   ecx
  4f2fcc:	e8 c9 f0 f0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4f2fd1:	83 c4 08             	add    esp,0x8
  4f2fd4:	6a 00                	push   0x0
  4f2fd6:	68 00 04 00 00       	push   0x400
  4f2fdb:	53                   	push   ebx
  4f2fdc:	ff 36                	push   DWORD PTR [esi]
  4f2fde:	c7 86 a8 01 00 00 ff 	mov    DWORD PTR [esi+0x1a8],0xffffffff
  4f2fe8:	ff d5                	call   ebp
  4f2fea:	83 f8 ff             	cmp    eax,0xffffffff
  4f2fed:	0f 84 9b 00 00 00    	je     0x4f308e
  4f2ff3:	85 c0                	test   eax,eax
  4f2ff5:	0f 84 93 00 00 00    	je     0x4f308e
  4f2ffb:	6a 5c                	push   0x5c
  4f2ffd:	68 e8 ed 6c 00       	push   0x6cede8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\ClassicRfcommClient.cpp"]
  4f3002:	c6 04 03 00          	mov    BYTE PTR [ebx+eax*1],0x0
  4f3006:	e8 5b 57 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4f300b:	83 c4 08             	add    esp,0x8
  4f300e:	85 c0                	test   eax,eax
  4f3010:	74 12                	je     0x4f3024
  4f3012:	6a 5c                	push   0x5c
  4f3014:	68 e8 ed 6c 00       	push   0x6cede8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\ClassicRfcommClient.cpp"]
  4f3019:	e8 48 57 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4f301e:	83 c4 08             	add    esp,0x8
  4f3021:	40                   	inc    eax
  4f3022:	eb 05                	jmp    0x4f3029
  4f3024:	b8 e8 ed 6c 00       	mov    eax,0x6cede8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\ClassicRfcommClient.cpp"]
  4f3029:	53                   	push   ebx
  4f302a:	68 54 f1 6c 00       	push   0x6cf154 ; ["ClassicRfcommClient::recvData"]
  4f302f:	6a 73                	push   0x73
  4f3031:	50                   	push   eax
  4f3032:	68 38 f2 6c 00       	push   0x6cf238 ; ["[ConntctionModule][%s:%d][%s]: Received data: %s\n"]
  4f3037:	8d 44 24 28          	lea    eax,[esp+0x28]
  4f303b:	c7 44 24 28 02 00 00 	mov    DWORD PTR [esp+0x28],0x2
  4f3043:	50                   	push   eax
  4f3044:	8d 44 24 34          	lea    eax,[esp+0x34]
  4f3048:	50                   	push   eax
  4f3049:	e8 bb 3f f1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4f304e:	8b 54 24 4c          	mov    edx,DWORD PTR [esp+0x4c]
  4f3052:	83 c4 1c             	add    esp,0x1c
  4f3055:	83 fa 10             	cmp    edx,0x10
  4f3058:	72 2d                	jb     0x4f3087
  4f305a:	8b 4c 24 1c          	mov    ecx,DWORD PTR [esp+0x1c]
  4f305e:	42                   	inc    edx
  4f305f:	8b c1                	mov    eax,ecx
  4f3061:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4f3067:	72 14                	jb     0x4f307d
  4f3069:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4f306c:	83 c2 23             	add    edx,0x23
  4f306f:	2b c1                	sub    eax,ecx
  4f3071:	83 c0 fc             	add    eax,0xfffffffc
  4f3074:	83 f8 1f             	cmp    eax,0x1f
  4f3077:	0f 87 9d 00 00 00    	ja     0x4f311a
  4f307d:	52                   	push   edx
  4f307e:	51                   	push   ecx
  4f307f:	e8 16 f0 f0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4f3084:	83 c4 08             	add    esp,0x8
  4f3087:	b0 01                	mov    al,0x1
  4f3089:	e9 a4 00 00 00       	jmp    0x4f3132
  4f308e:	89 86 a8 01 00 00    	mov    DWORD PTR [esi+0x1a8],eax
  4f3094:	83 f8 ff             	cmp    eax,0xffffffff
  4f3097:	75 08                	jne    0x4f30a1
  4f3099:	ff d7                	call   edi
  4f309b:	89 86 a8 01 00 00    	mov    DWORD PTR [esi+0x1a8],eax
  4f30a1:	6a 5c                	push   0x5c
  4f30a3:	68 e8 ed 6c 00       	push   0x6cede8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\ClassicRfcommClient.cpp"]
  4f30a8:	e8 b9 56 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4f30ad:	83 c4 08             	add    esp,0x8
  4f30b0:	85 c0                	test   eax,eax
  4f30b2:	74 12                	je     0x4f30c6
  4f30b4:	6a 5c                	push   0x5c
  4f30b6:	68 e8 ed 6c 00       	push   0x6cede8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\ClassicRfcommClient.cpp"]
  4f30bb:	e8 a6 56 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4f30c0:	83 c4 08             	add    esp,0x8
  4f30c3:	40                   	inc    eax
  4f30c4:	eb 05                	jmp    0x4f30cb
  4f30c6:	b8 e8 ed 6c 00       	mov    eax,0x6cede8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\ClassicRfcommClient.cpp"]
  4f30cb:	68 54 f1 6c 00       	push   0x6cf154 ; ["ClassicRfcommClient::recvData"]
  4f30d0:	6a 6c                	push   0x6c
  4f30d2:	50                   	push   eax
  4f30d3:	68 e0 f1 6c 00       	push   0x6cf1e0 ; ["[ConntctionModule][%s:%d][%s]: Error: timeout or failed to receive data.\n"]
  4f30d8:	8d 44 24 24          	lea    eax,[esp+0x24]
  4f30dc:	c7 44 24 24 02 00 00 	mov    DWORD PTR [esp+0x24],0x2
  4f30e4:	50                   	push   eax
  4f30e5:	8d 44 24 30          	lea    eax,[esp+0x30]
  4f30e9:	50                   	push   eax
  4f30ea:	e8 1a 3f f1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4f30ef:	8b 54 24 48          	mov    edx,DWORD PTR [esp+0x48]
  4f30f3:	83 c4 18             	add    esp,0x18
  4f30f6:	83 fa 10             	cmp    edx,0x10
  4f30f9:	72 2f                	jb     0x4f312a
  4f30fb:	8b 4c 24 1c          	mov    ecx,DWORD PTR [esp+0x1c]
  4f30ff:	42                   	inc    edx
  4f3100:	8b c1                	mov    eax,ecx
  4f3102:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4f3108:	72 16                	jb     0x4f3120
  4f310a:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4f310d:	83 c2 23             	add    edx,0x23
  4f3110:	2b c1                	sub    eax,ecx
  4f3112:	83 c0 fc             	add    eax,0xfffffffc
  4f3115:	83 f8 1f             	cmp    eax,0x1f
  4f3118:	76 06                	jbe    0x4f3120
  4f311a:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  4f3120:	52                   	push   edx
  4f3121:	51                   	push   ecx
  4f3122:	e8 73 ef f0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4f3127:	83 c4 08             	add    esp,0x8
  4f312a:	ff 15 ac d8 79 00    	call   DWORD PTR ds:0x79d8ac
  4f3130:	32 c0                	xor    al,al
  4f3132:	8b 8c 24 34 04 00 00 	mov    ecx,DWORD PTR [esp+0x434]
  4f3139:	5f                   	pop    edi
  4f313a:	5e                   	pop    esi
  4f313b:	5d                   	pop    ebp
  4f313c:	5b                   	pop    ebx
  4f313d:	33 cc                	xor    ecx,esp
  4f313f:	e8 4b 13 f1 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  4f3144:	81 c4 28 04 00 00    	add    esp,0x428
  4f314a:	c2 0c 00             	ret    0xc
