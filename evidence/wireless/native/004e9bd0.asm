; BleGattClient::connectDevicebyAddress; image base 0x400000; static annotation only
  4e9bd0:	55                   	push   ebp
  4e9bd1:	8d 6c 24 8c          	lea    ebp,[esp-0x74]
  4e9bd5:	83 ec 74             	sub    esp,0x74
  4e9bd8:	6a ff                	push   0xffffffff
  4e9bda:	68 da d1 67 00       	push   0x67d1da
  4e9bdf:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  4e9be5:	50                   	push   eax
  4e9be6:	81 ec 18 01 00 00    	sub    esp,0x118
  4e9bec:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  4e9bf1:	33 c5                	xor    eax,ebp
  4e9bf3:	89 45 70             	mov    DWORD PTR [ebp+0x70],eax
  4e9bf6:	53                   	push   ebx
  4e9bf7:	56                   	push   esi
  4e9bf8:	57                   	push   edi
  4e9bf9:	50                   	push   eax
  4e9bfa:	8d 45 f4             	lea    eax,[ebp-0xc]
  4e9bfd:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  4e9c03:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  4e9c06:	8b 5d 7c             	mov    ebx,DWORD PTR [ebp+0x7c]
  4e9c09:	b9 ec 86 7a 00       	mov    ecx,0x7a86ec
  4e9c0e:	89 5d 00             	mov    DWORD PTR [ebp+0x0],ebx
  4e9c11:	e8 d8 ee f1 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  4e9c16:	33 c0                	xor    eax,eax
  4e9c18:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4e9c1b:	66 8b 4b 04          	mov    cx,WORD PTR [ebx+0x4]
  4e9c1f:	66 89 4d 06          	mov    WORD PTR [ebp+0x6],cx
  4e9c23:	8d 51 01             	lea    edx,[ecx+0x1]
  4e9c26:	66 83 fa 06          	cmp    dx,0x6
  4e9c2a:	0f 87 f0 08 00 00    	ja     0x4ea520
  4e9c30:	66 89 4d 06          	mov    WORD PTR [ebp+0x6],cx
  4e9c34:	66 83 f9 02          	cmp    cx,0x2
  4e9c38:	74 0c                	je     0x4e9c46
  4e9c3a:	8b 83 5c 01 00 00    	mov    eax,DWORD PTR [ebx+0x15c]
  4e9c40:	89 45 0c             	mov    DWORD PTR [ebp+0xc],eax
  4e9c43:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4e9c46:	89 83 5c 01 00 00    	mov    DWORD PTR [ebx+0x15c],eax
  4e9c4c:	0f bf c2             	movsx  eax,dx
  4e9c4f:	ff 24 85 40 a5 4e 00 	jmp    DWORD PTR [eax*4+0x4ea540]
  4e9c56:	c7 83 3c 01 00 00 00 	mov    DWORD PTR [ebx+0x13c],0x0
  4e9c60:	8d 7b 08             	lea    edi,[ebx+0x8]
  4e9c63:	c7 07 00 00 00 00    	mov    DWORD PTR [edi],0x0
  4e9c69:	c7 43 18 00 00 00 00 	mov    DWORD PTR [ebx+0x18],0x0
  4e9c70:	c7 43 1c 0f 00 00 00 	mov    DWORD PTR [ebx+0x1c],0xf
  4e9c77:	c6 43 08 00          	mov    BYTE PTR [ebx+0x8],0x0
  4e9c7b:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  4e9c7f:	8d 8b 88 00 00 00    	lea    ecx,[ebx+0x88]
  4e9c85:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4e9c88:	89 83 5c 01 00 00    	mov    DWORD PTR [ebx+0x15c],eax
  4e9c8e:	c7 43 20 74 44 6c 00 	mov    DWORD PTR [ebx+0x20],0x6c4474
  4e9c95:	c7 43 30 80 44 6c 00 	mov    DWORD PTR [ebx+0x30],0x6c4480
  4e9c9c:	8b 83 5c 01 00 00    	mov    eax,DWORD PTR [ebx+0x15c]
  4e9ca2:	89 45 0c             	mov    DWORD PTR [ebp+0xc],eax
  4e9ca5:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4e9ca8:	ff 15 cc d0 79 00    	call   DWORD PTR ds:0x79d0cc
  4e9cae:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  4e9cb2:	8d 4b 38             	lea    ecx,[ebx+0x38]
  4e9cb5:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4e9cb8:	89 83 5c 01 00 00    	mov    DWORD PTR [ebx+0x15c],eax
  4e9cbe:	6a 00                	push   0x0
  4e9cc0:	c7 83 3c 01 00 00 01 	mov    DWORD PTR [ebx+0x13c],0x1
  4e9cca:	8b 83 5c 01 00 00    	mov    eax,DWORD PTR [ebx+0x15c]
  4e9cd0:	51                   	push   ecx
  4e9cd1:	89 45 0c             	mov    DWORD PTR [ebp+0xc],eax
  4e9cd4:	8d 4b 20             	lea    ecx,[ebx+0x20]
  4e9cd7:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4e9cda:	ff 15 2c d1 79 00    	call   DWORD PTR ds:0x79d12c
  4e9ce0:	c7 83 5c 01 00 00 03 	mov    DWORD PTR [ebx+0x15c],0x3
  4e9cea:	8d 4b 38             	lea    ecx,[ebx+0x38]
  4e9ced:	8b 43 20             	mov    eax,DWORD PTR [ebx+0x20]
  4e9cf0:	89 85 18 ff ff ff    	mov    DWORD PTR [ebp-0xe8],eax
  4e9cf6:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  4e9cf9:	c7 44 18 20 6c 44 6c 	mov    DWORD PTR [eax+ebx*1+0x20],0x6c446c
  4e9d01:	8b 53 20             	mov    edx,DWORD PTR [ebx+0x20]
  4e9d04:	89 95 18 ff ff ff    	mov    DWORD PTR [ebp-0xe8],edx
  4e9d0a:	8b 52 04             	mov    edx,DWORD PTR [edx+0x4]
  4e9d0d:	8d 42 98             	lea    eax,[edx-0x68]
  4e9d10:	89 44 13 1c          	mov    DWORD PTR [ebx+edx*1+0x1c],eax
  4e9d14:	8b 83 5c 01 00 00    	mov    eax,DWORD PTR [ebx+0x15c]
  4e9d1a:	89 45 0c             	mov    DWORD PTR [ebp+0xc],eax
  4e9d1d:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4e9d20:	ff 15 dc d0 79 00    	call   DWORD PTR ds:0x79d0dc
  4e9d26:	c7 43 38 20 44 6c 00 	mov    DWORD PTR [ebx+0x38],0x6c4420
  4e9d2d:	c7 43 70 00 00 00 00 	mov    DWORD PTR [ebx+0x70],0x0
  4e9d34:	c7 43 74 00 00 00 00 	mov    DWORD PTR [ebx+0x74],0x0
  4e9d3b:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  4e9d3f:	8d 4b 30             	lea    ecx,[ebx+0x30]
  4e9d42:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4e9d45:	89 83 5c 01 00 00    	mov    DWORD PTR [ebx+0x15c],eax
  4e9d4b:	89 45 0c             	mov    DWORD PTR [ebp+0xc],eax
  4e9d4e:	68 4a 7f 40 00       	push   0x407f4a
  4e9d53:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4e9d56:	ff 15 54 d1 79 00    	call   DWORD PTR ds:0x79d154
  4e9d5c:	8b 8b 65 01 00 00    	mov    ecx,DWORD PTR [ebx+0x165]
  4e9d62:	8b 31                	mov    esi,DWORD PTR [ecx]
  4e9d64:	8b 51 04             	mov    edx,DWORD PTR [ecx+0x4]
  4e9d67:	8b 8b 5c 01 00 00    	mov    ecx,DWORD PTR [ebx+0x15c]
  4e9d6d:	89 4d 0c             	mov    DWORD PTR [ebp+0xc],ecx
  4e9d70:	52                   	push   edx
  4e9d71:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  4e9d74:	8b c8                	mov    ecx,eax
  4e9d76:	56                   	push   esi
  4e9d77:	ff 15 00 d2 79 00    	call   DWORD PTR ds:0x79d200
  4e9d7d:	8b 83 5c 01 00 00    	mov    eax,DWORD PTR [ebx+0x15c]
  4e9d83:	89 45 0c             	mov    DWORD PTR [ebp+0xc],eax
  4e9d86:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4e9d89:	8d 43 20             	lea    eax,[ebx+0x20]
  4e9d8c:	57                   	push   edi
  4e9d8d:	50                   	push   eax
  4e9d8e:	e8 2e e3 f1 ff       	call   0x4080c1 ; ["call resolved=0x4e1c60 "]
  4e9d93:	8b 43 1c             	mov    eax,DWORD PTR [ebx+0x1c]
  4e9d96:	83 c4 08             	add    esp,0x8
  4e9d99:	89 45 6c             	mov    DWORD PTR [ebp+0x6c],eax
  4e9d9c:	83 f8 10             	cmp    eax,0x10
  4e9d9f:	72 06                	jb     0x4e9da7
  4e9da1:	8b 7b 08             	mov    edi,DWORD PTR [ebx+0x8]
  4e9da4:	89 7d 58             	mov    DWORD PTR [ebp+0x58],edi
  4e9da7:	8b 43 1c             	mov    eax,DWORD PTR [ebx+0x1c]
  4e9daa:	8d 73 08             	lea    esi,[ebx+0x8]
  4e9dad:	89 45 6c             	mov    DWORD PTR [ebp+0x6c],eax
  4e9db0:	8b ce                	mov    ecx,esi
  4e9db2:	83 f8 10             	cmp    eax,0x10
  4e9db5:	72 06                	jb     0x4e9dbd
  4e9db7:	8b 4b 08             	mov    ecx,DWORD PTR [ebx+0x8]
  4e9dba:	89 4d 58             	mov    DWORD PTR [ebp+0x58],ecx
  4e9dbd:	8b 43 18             	mov    eax,DWORD PTR [ebx+0x18]
  4e9dc0:	03 c8                	add    ecx,eax
  4e9dc2:	89 45 68             	mov    DWORD PTR [ebp+0x68],eax
  4e9dc5:	8b 43 1c             	mov    eax,DWORD PTR [ebx+0x1c]
  4e9dc8:	89 4d 08             	mov    DWORD PTR [ebp+0x8],ecx
  4e9dcb:	89 45 6c             	mov    DWORD PTR [ebp+0x6c],eax
  4e9dce:	83 f8 10             	cmp    eax,0x10
  4e9dd1:	72 0d                	jb     0x4e9de0
  4e9dd3:	8b 73 08             	mov    esi,DWORD PTR [ebx+0x8]
  4e9dd6:	89 75 58             	mov    DWORD PTR [ebp+0x58],esi
  4e9dd9:	0f 1f 80 00 00 00 00 	nop    DWORD PTR [eax+0x0]
  4e9de0:	3b f1                	cmp    esi,ecx
  4e9de2:	74 22                	je     0x4e9e06
  4e9de4:	8b 83 5c 01 00 00    	mov    eax,DWORD PTR [ebx+0x15c]
  4e9dea:	89 45 0c             	mov    DWORD PTR [ebp+0xc],eax
  4e9ded:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4e9df0:	0f be 06             	movsx  eax,BYTE PTR [esi]
  4e9df3:	50                   	push   eax
  4e9df4:	ff 15 34 e5 79 00    	call   DWORD PTR ds:0x79e534
  4e9dfa:	8b 4d 08             	mov    ecx,DWORD PTR [ebp+0x8]
  4e9dfd:	83 c4 04             	add    esp,0x4
  4e9e00:	88 07                	mov    BYTE PTR [edi],al
  4e9e02:	46                   	inc    esi
  4e9e03:	47                   	inc    edi
  4e9e04:	eb da                	jmp    0x4e9de0
  4e9e06:	8b 43 1c             	mov    eax,DWORD PTR [ebx+0x1c]
  4e9e09:	89 45 6c             	mov    DWORD PTR [ebp+0x6c],eax
  4e9e0c:	83 f8 10             	cmp    eax,0x10
  4e9e0f:	72 08                	jb     0x4e9e19
  4e9e11:	8b 73 08             	mov    esi,DWORD PTR [ebx+0x8]
  4e9e14:	89 75 58             	mov    DWORD PTR [ebp+0x58],esi
  4e9e17:	eb 03                	jmp    0x4e9e1c
  4e9e19:	8d 73 08             	lea    esi,[ebx+0x8]
  4e9e1c:	8b 83 65 01 00 00    	mov    eax,DWORD PTR [ebx+0x165]
  4e9e22:	6a 5c                	push   0x5c
  4e9e24:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4e9e29:	8b 08                	mov    ecx,DWORD PTR [eax]
  4e9e2b:	8b 78 04             	mov    edi,DWORD PTR [eax+0x4]
  4e9e2e:	89 4d 08             	mov    DWORD PTR [ebp+0x8],ecx
  4e9e31:	e8 30 e9 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4e9e36:	83 c4 08             	add    esp,0x8
  4e9e39:	85 c0                	test   eax,eax
  4e9e3b:	74 14                	je     0x4e9e51
  4e9e3d:	6a 5c                	push   0x5c
  4e9e3f:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4e9e44:	e8 1d e9 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4e9e49:	83 c4 08             	add    esp,0x8
  4e9e4c:	8d 50 01             	lea    edx,[eax+0x1]
  4e9e4f:	eb 05                	jmp    0x4e9e56
  4e9e51:	ba 88 de 6c 00       	mov    edx,0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4e9e56:	56                   	push   esi
  4e9e57:	57                   	push   edi
  4e9e58:	8d 8b d0 00 00 00    	lea    ecx,[ebx+0xd0]
  4e9e5e:	c7 01 02 00 00 00    	mov    DWORD PTR [ecx],0x2
  4e9e64:	8b 83 5c 01 00 00    	mov    eax,DWORD PTR [ebx+0x15c]
  4e9e6a:	89 45 0c             	mov    DWORD PTR [ebp+0xc],eax
  4e9e6d:	ff 75 08             	push   DWORD PTR [ebp+0x8]
  4e9e70:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4e9e73:	8d 83 d4 00 00 00    	lea    eax,[ebx+0xd4]
  4e9e79:	68 54 de 6c 00       	push   0x6cde54 ; ["BleGattClient::connectDevicebyAddress"]
  4e9e7e:	6a 18                	push   0x18
  4e9e80:	52                   	push   edx
  4e9e81:	68 e0 de 6c 00       	push   0x6cdee0 ; ["[ConntctionModule][%s:%d][%s]: FromBluetoothAddressAsync  %I64u ,HEX as:%s\n"]
  4e9e86:	51                   	push   ecx
  4e9e87:	50                   	push   eax
  4e9e88:	e8 7c d1 f1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4e9e8d:	8b 83 e8 00 00 00    	mov    eax,DWORD PTR [ebx+0xe8]
  4e9e93:	83 c4 24             	add    esp,0x24
  4e9e96:	89 45 54             	mov    DWORD PTR [ebp+0x54],eax
  4e9e99:	83 f8 10             	cmp    eax,0x10
  4e9e9c:	72 4d                	jb     0x4e9eeb
  4e9e9e:	8b 83 e8 00 00 00    	mov    eax,DWORD PTR [ebx+0xe8]
  4e9ea4:	89 45 54             	mov    DWORD PTR [ebp+0x54],eax
  4e9ea7:	8b 93 d4 00 00 00    	mov    edx,DWORD PTR [ebx+0xd4]
  4e9ead:	89 55 40             	mov    DWORD PTR [ebp+0x40],edx
  4e9eb0:	8d 48 01             	lea    ecx,[eax+0x1]
  4e9eb3:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  4e9eb9:	72 26                	jb     0x4e9ee1
  4e9ebb:	8b 83 d4 00 00 00    	mov    eax,DWORD PTR [ebx+0xd4]
  4e9ec1:	83 c1 23             	add    ecx,0x23
  4e9ec4:	89 45 40             	mov    DWORD PTR [ebp+0x40],eax
  4e9ec7:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  4e9eca:	8b 83 d4 00 00 00    	mov    eax,DWORD PTR [ebx+0xd4]
  4e9ed0:	89 45 40             	mov    DWORD PTR [ebp+0x40],eax
  4e9ed3:	2b c2                	sub    eax,edx
  4e9ed5:	83 c0 fc             	add    eax,0xfffffffc
  4e9ed8:	83 f8 1f             	cmp    eax,0x1f
  4e9edb:	0f 87 be 05 00 00    	ja     0x4ea49f
  4e9ee1:	51                   	push   ecx
  4e9ee2:	52                   	push   edx
  4e9ee3:	e8 b2 81 f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4e9ee8:	83 c4 08             	add    esp,0x8
  4e9eeb:	6a 5c                	push   0x5c
  4e9eed:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4e9ef2:	e8 6f e8 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4e9ef7:	83 c4 08             	add    esp,0x8
  4e9efa:	85 c0                	test   eax,eax
  4e9efc:	74 14                	je     0x4e9f12
  4e9efe:	6a 5c                	push   0x5c
  4e9f00:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4e9f05:	e8 5c e8 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4e9f0a:	83 c4 08             	add    esp,0x8
  4e9f0d:	8d 50 01             	lea    edx,[eax+0x1]
  4e9f10:	eb 05                	jmp    0x4e9f17
  4e9f12:	ba 88 de 6c 00       	mov    edx,0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4e9f17:	68 54 de 6c 00       	push   0x6cde54 ; ["BleGattClient::connectDevicebyAddress"]
  4e9f1c:	6a 19                	push   0x19
  4e9f1e:	8d 8b ec 00 00 00    	lea    ecx,[ebx+0xec]
  4e9f24:	c7 01 02 00 00 00    	mov    DWORD PTR [ecx],0x2
  4e9f2a:	8b 83 5c 01 00 00    	mov    eax,DWORD PTR [ebx+0x15c]
  4e9f30:	52                   	push   edx
  4e9f31:	89 45 0c             	mov    DWORD PTR [ebp+0xc],eax
  4e9f34:	68 3c df 6c 00       	push   0x6cdf3c ; ["[ConntctionModule][%s:%d][%s]: Statistical test1\n"]
  4e9f39:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4e9f3c:	8d 83 f0 00 00 00    	lea    eax,[ebx+0xf0]
  4e9f42:	51                   	push   ecx
  4e9f43:	50                   	push   eax
  4e9f44:	e8 c0 d0 f1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4e9f49:	8b 83 04 01 00 00    	mov    eax,DWORD PTR [ebx+0x104]
  4e9f4f:	83 c4 18             	add    esp,0x18
  4e9f52:	89 45 3c             	mov    DWORD PTR [ebp+0x3c],eax
  4e9f55:	83 f8 10             	cmp    eax,0x10
  4e9f58:	72 4d                	jb     0x4e9fa7
  4e9f5a:	8b 83 04 01 00 00    	mov    eax,DWORD PTR [ebx+0x104]
  4e9f60:	89 45 3c             	mov    DWORD PTR [ebp+0x3c],eax
  4e9f63:	8b 93 f0 00 00 00    	mov    edx,DWORD PTR [ebx+0xf0]
  4e9f69:	89 55 28             	mov    DWORD PTR [ebp+0x28],edx
  4e9f6c:	8d 48 01             	lea    ecx,[eax+0x1]
  4e9f6f:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  4e9f75:	72 26                	jb     0x4e9f9d
  4e9f77:	8b 83 f0 00 00 00    	mov    eax,DWORD PTR [ebx+0xf0]
  4e9f7d:	83 c1 23             	add    ecx,0x23
  4e9f80:	89 45 28             	mov    DWORD PTR [ebp+0x28],eax
  4e9f83:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  4e9f86:	8b 83 f0 00 00 00    	mov    eax,DWORD PTR [ebx+0xf0]
  4e9f8c:	89 45 28             	mov    DWORD PTR [ebp+0x28],eax
  4e9f8f:	2b c2                	sub    eax,edx
  4e9f91:	83 c0 fc             	add    eax,0xfffffffc
  4e9f94:	83 f8 1f             	cmp    eax,0x1f
  4e9f97:	0f 87 02 05 00 00    	ja     0x4ea49f
  4e9f9d:	51                   	push   ecx
  4e9f9e:	52                   	push   edx
  4e9f9f:	e8 f6 80 f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4e9fa4:	83 c4 08             	add    esp,0x8
  4e9fa7:	c7 83 08 01 00 00 01 	mov    DWORD PTR [ebx+0x108],0x1
  4e9fb1:	8d b3 08 01 00 00    	lea    esi,[ebx+0x108]
  4e9fb7:	8b 83 65 01 00 00    	mov    eax,DWORD PTR [ebx+0x165]
  4e9fbd:	8d 93 40 01 00 00    	lea    edx,[ebx+0x140]
  4e9fc3:	89 93 48 01 00 00    	mov    DWORD PTR [ebx+0x148],edx
  4e9fc9:	89 b3 4c 01 00 00    	mov    DWORD PTR [ebx+0x14c],esi
  4e9fcf:	8b 08                	mov    ecx,DWORD PTR [eax]
  4e9fd1:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  4e9fd4:	89 0a                	mov    DWORD PTR [edx],ecx
  4e9fd6:	8d 8b 48 01 00 00    	lea    ecx,[ebx+0x148]
  4e9fdc:	89 42 04             	mov    DWORD PTR [edx+0x4],eax
  4e9fdf:	8d 93 0c 01 00 00    	lea    edx,[ebx+0x10c]
  4e9fe5:	8b 83 5c 01 00 00    	mov    eax,DWORD PTR [ebx+0x15c]
  4e9feb:	51                   	push   ecx
  4e9fec:	89 45 0c             	mov    DWORD PTR [ebp+0xc],eax
  4e9fef:	b9 00 3b 79 00       	mov    ecx,0x793b00
  4e9ff4:	52                   	push   edx
  4e9ff5:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4e9ff8:	e8 3c 87 f1 ff       	call   0x402739 ; ["call resolved=0x4e20c0 "]
  4e9ffd:	8b 83 3c 01 00 00    	mov    eax,DWORD PTR [ebx+0x13c]
  4ea003:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  4ea006:	83 c8 06             	or     eax,0x6
  4ea009:	89 83 3c 01 00 00    	mov    DWORD PTR [ebx+0x13c],eax
  4ea00f:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  4ea013:	8d 73 e8             	lea    esi,[ebx-0x18]
  4ea016:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4ea019:	56                   	push   esi
  4ea01a:	89 83 5c 01 00 00    	mov    DWORD PTR [ebx+0x15c],eax
  4ea020:	e8 83 ea 17 00       	call   0x668aa8 ; ["call resolved=0x668aa8 "]
  4ea025:	8b 7b f4             	mov    edi,DWORD PTR [ebx-0xc]
  4ea028:	56                   	push   esi
  4ea029:	e8 80 ea 17 00       	call   0x668aae ; ["call resolved=0x668aae "]
  4ea02e:	83 ff 02             	cmp    edi,0x2
  4ea031:	75 22                	jne    0x4ea055
  4ea033:	8d 4d c8             	lea    ecx,[ebp-0x38]
  4ea036:	e8 3f b4 f1 ff       	call   0x40547a ; ["call resolved=0x46c370 "]
  4ea03b:	8b 83 5c 01 00 00    	mov    eax,DWORD PTR [ebx+0x15c]
  4ea041:	89 45 0c             	mov    DWORD PTR [ebp+0xc],eax
  4ea044:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4ea047:	8d 45 c8             	lea    eax,[ebp-0x38]
  4ea04a:	68 6c e1 72 00       	push   0x72e16c
  4ea04f:	50                   	push   eax
  4ea050:	e8 23 e7 17 00       	call   0x668778 ; ["call resolved=0x668778 "]
  4ea055:	83 bb 0c 01 00 00 00 	cmp    DWORD PTR [ebx+0x10c],0x0
  4ea05c:	8d 83 0c 01 00 00    	lea    eax,[ebx+0x10c]
  4ea062:	89 83 10 01 00 00    	mov    DWORD PTR [ebx+0x110],eax
  4ea068:	75 04                	jne    0x4ea06e
  4ea06a:	33 c0                	xor    eax,eax
  4ea06c:	eb 34                	jmp    0x4ea0a2
  4ea06e:	8b 83 0c 01 00 00    	mov    eax,DWORD PTR [ebx+0x10c]
  4ea074:	8d 93 58 01 00 00    	lea    edx,[ebx+0x158]
  4ea07a:	89 45 08             	mov    DWORD PTR [ebp+0x8],eax
  4ea07d:	52                   	push   edx
  4ea07e:	68 5c 1d 6c 00       	push   0x6c1d5c
  4ea083:	8b 00                	mov    eax,DWORD PTR [eax]
  4ea085:	c7 02 00 00 00 00    	mov    DWORD PTR [edx],0x0
  4ea08b:	8b 08                	mov    ecx,DWORD PTR [eax]
  4ea08d:	8b 83 0c 01 00 00    	mov    eax,DWORD PTR [ebx+0x10c]
  4ea093:	50                   	push   eax
  4ea094:	89 45 08             	mov    DWORD PTR [ebp+0x8],eax
  4ea097:	ff d1                	call   ecx
  4ea099:	8b 83 58 01 00 00    	mov    eax,DWORD PTR [ebx+0x158]
  4ea09f:	89 45 e4             	mov    DWORD PTR [ebp-0x1c],eax
  4ea0a2:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  4ea0a6:	8d 8b 54 01 00 00    	lea    ecx,[ebx+0x154]
  4ea0ac:	89 83 50 01 00 00    	mov    DWORD PTR [ebx+0x150],eax
  4ea0b2:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4ea0b5:	89 83 5c 01 00 00    	mov    DWORD PTR [ebx+0x15c],eax
  4ea0bb:	8b 83 50 01 00 00    	mov    eax,DWORD PTR [ebx+0x150]
  4ea0c1:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4ea0c4:	51                   	push   ecx
  4ea0c5:	8b 00                	mov    eax,DWORD PTR [eax]
  4ea0c7:	8b 50 1c             	mov    edx,DWORD PTR [eax+0x1c]
  4ea0ca:	8b 83 50 01 00 00    	mov    eax,DWORD PTR [ebx+0x150]
  4ea0d0:	50                   	push   eax
  4ea0d1:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4ea0d4:	ff d2                	call   edx
  4ea0d6:	85 c0                	test   eax,eax
  4ea0d8:	79 12                	jns    0x4ea0ec
  4ea0da:	8b 8b 5c 01 00 00    	mov    ecx,DWORD PTR [ebx+0x15c]
  4ea0e0:	89 4d 0c             	mov    DWORD PTR [ebp+0xc],ecx
  4ea0e3:	50                   	push   eax
  4ea0e4:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  4ea0e7:	e8 0c 72 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4ea0ec:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  4ea0f0:	8d 8b 50 01 00 00    	lea    ecx,[ebx+0x150]
  4ea0f6:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4ea0f9:	89 83 5c 01 00 00    	mov    DWORD PTR [ebx+0x15c],eax
  4ea0ff:	e8 f6 b5 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ea104:	8b 83 54 01 00 00    	mov    eax,DWORD PTR [ebx+0x154]
  4ea10a:	89 45 e0             	mov    DWORD PTR [ebp-0x20],eax
  4ea10d:	83 f8 01             	cmp    eax,0x1
  4ea110:	0f 84 9d 00 00 00    	je     0x4ea1b3
  4ea116:	b8 04 00 00 00       	mov    eax,0x4
  4ea11b:	8d 8b 10 01 00 00    	lea    ecx,[ebx+0x110]
  4ea121:	66 89 43 04          	mov    WORD PTR [ebx+0x4],ax
  4ea125:	8b 83 5c 01 00 00    	mov    eax,DWORD PTR [ebx+0x15c]
  4ea12b:	89 45 0c             	mov    DWORD PTR [ebp+0xc],eax
  4ea12e:	53                   	push   ebx
  4ea12f:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4ea132:	e8 1b f4 f1 ff       	call   0x409552 ; ["call resolved=0x4e92d0 "]
  4ea137:	e9 e5 03 00 00       	jmp    0x4ea521
  4ea13c:	8b 83 0c 01 00 00    	mov    eax,DWORD PTR [ebx+0x10c]
  4ea142:	8d 8b 0c 01 00 00    	lea    ecx,[ebx+0x10c]
  4ea148:	89 45 08             	mov    DWORD PTR [ebp+0x8],eax
  4ea14b:	85 c0                	test   eax,eax
  4ea14d:	74 05                	je     0x4ea154
  4ea14f:	e8 a6 b5 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ea154:	8d 4b 20             	lea    ecx,[ebx+0x20]
  4ea157:	e8 09 96 f1 ff       	call   0x403765 ; ["call resolved=0x477610 "]
  4ea15c:	8b 43 1c             	mov    eax,DWORD PTR [ebx+0x1c]
  4ea15f:	89 45 6c             	mov    DWORD PTR [ebp+0x6c],eax
  4ea162:	83 f8 10             	cmp    eax,0x10
  4ea165:	0f 82 65 03 00 00    	jb     0x4ea4d0
  4ea16b:	8b 43 1c             	mov    eax,DWORD PTR [ebx+0x1c]
  4ea16e:	89 45 6c             	mov    DWORD PTR [ebp+0x6c],eax
  4ea171:	8b 53 08             	mov    edx,DWORD PTR [ebx+0x8]
  4ea174:	89 55 58             	mov    DWORD PTR [ebp+0x58],edx
  4ea177:	8d 48 01             	lea    ecx,[eax+0x1]
  4ea17a:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  4ea180:	72 22                	jb     0x4ea1a4
  4ea182:	8b 43 08             	mov    eax,DWORD PTR [ebx+0x8]
  4ea185:	83 c1 23             	add    ecx,0x23
  4ea188:	89 45 58             	mov    DWORD PTR [ebp+0x58],eax
  4ea18b:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  4ea18e:	8b 43 08             	mov    eax,DWORD PTR [ebx+0x8]
  4ea191:	89 45 58             	mov    DWORD PTR [ebp+0x58],eax
  4ea194:	2b c2                	sub    eax,edx
  4ea196:	83 c0 fc             	add    eax,0xfffffffc
  4ea199:	83 f8 1f             	cmp    eax,0x1f
  4ea19c:	76 06                	jbe    0x4ea1a4
  4ea19e:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  4ea1a4:	51                   	push   ecx
  4ea1a5:	52                   	push   edx
  4ea1a6:	e8 ef 7e f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4ea1ab:	83 c4 08             	add    esp,0x8
  4ea1ae:	e9 1d 03 00 00       	jmp    0x4ea4d0
  4ea1b3:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  4ea1b7:	8d 93 14 01 00 00    	lea    edx,[ebx+0x114]
  4ea1bd:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4ea1c0:	89 83 5c 01 00 00    	mov    DWORD PTR [ebx+0x15c],eax
  4ea1c6:	8b 83 3c 01 00 00    	mov    eax,DWORD PTR [ebx+0x13c]
  4ea1cc:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  4ea1cf:	83 c8 10             	or     eax,0x10
  4ea1d2:	89 83 3c 01 00 00    	mov    DWORD PTR [ebx+0x13c],eax
  4ea1d8:	8b 83 10 01 00 00    	mov    eax,DWORD PTR [ebx+0x110]
  4ea1de:	c7 02 00 00 00 00    	mov    DWORD PTR [edx],0x0
  4ea1e4:	89 45 dc             	mov    DWORD PTR [ebp-0x24],eax
  4ea1e7:	52                   	push   edx
  4ea1e8:	8b 08                	mov    ecx,DWORD PTR [eax]
  4ea1ea:	51                   	push   ecx
  4ea1eb:	8b 01                	mov    eax,DWORD PTR [ecx]
  4ea1ed:	ff 50 20             	call   DWORD PTR [eax+0x20]
  4ea1f0:	85 c0                	test   eax,eax
  4ea1f2:	79 12                	jns    0x4ea206
  4ea1f4:	8b 8b 5c 01 00 00    	mov    ecx,DWORD PTR [ebx+0x15c]
  4ea1fa:	89 4d 0c             	mov    DWORD PTR [ebp+0xc],ecx
  4ea1fd:	50                   	push   eax
  4ea1fe:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  4ea201:	e8 f2 70 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4ea206:	c7 45 fc 05 00 00 00 	mov    DWORD PTR [ebp-0x4],0x5
  4ea20d:	8d 83 14 01 00 00    	lea    eax,[ebx+0x114]
  4ea213:	c7 83 5c 01 00 00 05 	mov    DWORD PTR [ebx+0x15c],0x5
  4ea21d:	8b b3 61 01 00 00    	mov    esi,DWORD PTR [ebx+0x161]
  4ea223:	3b f0                	cmp    esi,eax
  4ea225:	74 1e                	je     0x4ea245
  4ea227:	83 3e 00             	cmp    DWORD PTR [esi],0x0
  4ea22a:	74 07                	je     0x4ea233
  4ea22c:	8b ce                	mov    ecx,esi
  4ea22e:	e8 c7 b4 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ea233:	8b 83 14 01 00 00    	mov    eax,DWORD PTR [ebx+0x114]
  4ea239:	c7 83 14 01 00 00 00 	mov    DWORD PTR [ebx+0x114],0x0
  4ea243:	89 06                	mov    DWORD PTR [esi],eax
  4ea245:	8b 83 14 01 00 00    	mov    eax,DWORD PTR [ebx+0x114]
  4ea24b:	8d 8b 14 01 00 00    	lea    ecx,[ebx+0x114]
  4ea251:	89 45 d8             	mov    DWORD PTR [ebp-0x28],eax
  4ea254:	85 c0                	test   eax,eax
  4ea256:	74 05                	je     0x4ea25d
  4ea258:	e8 9d b4 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ea25d:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  4ea261:	8d 8b 0c 01 00 00    	lea    ecx,[ebx+0x10c]
  4ea267:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4ea26a:	89 83 5c 01 00 00    	mov    DWORD PTR [ebx+0x15c],eax
  4ea270:	8b 01                	mov    eax,DWORD PTR [ecx]
  4ea272:	89 45 08             	mov    DWORD PTR [ebp+0x8],eax
  4ea275:	85 c0                	test   eax,eax
  4ea277:	74 05                	je     0x4ea27e
  4ea279:	e8 7c b4 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ea27e:	8d 83 18 01 00 00    	lea    eax,[ebx+0x118]
  4ea284:	c7 00 00 00 00 00    	mov    DWORD PTR [eax],0x0
  4ea28a:	50                   	push   eax
  4ea28b:	ff b3 61 01 00 00    	push   DWORD PTR [ebx+0x161]
  4ea291:	e8 fc c6 f1 ff       	call   0x406992 ; ["call resolved=0x472e80 "]
  4ea296:	83 c4 08             	add    esp,0x8
  4ea299:	84 c0                	test   al,al
  4ea29b:	0f 84 7c 01 00 00    	je     0x4ea41d
  4ea2a1:	6a 5c                	push   0x5c
  4ea2a3:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4ea2a8:	e8 b9 e4 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4ea2ad:	83 c4 08             	add    esp,0x8
  4ea2b0:	85 c0                	test   eax,eax
  4ea2b2:	74 14                	je     0x4ea2c8
  4ea2b4:	6a 5c                	push   0x5c
  4ea2b6:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4ea2bb:	e8 a6 e4 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4ea2c0:	83 c4 08             	add    esp,0x8
  4ea2c3:	8d 50 01             	lea    edx,[eax+0x1]
  4ea2c6:	eb 05                	jmp    0x4ea2cd
  4ea2c8:	ba 88 de 6c 00       	mov    edx,0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4ea2cd:	68 54 de 6c 00       	push   0x6cde54 ; ["BleGattClient::connectDevicebyAddress"]
  4ea2d2:	6a 21                	push   0x21
  4ea2d4:	8d 8b 1c 01 00 00    	lea    ecx,[ebx+0x11c]
  4ea2da:	c7 01 02 00 00 00    	mov    DWORD PTR [ecx],0x2
  4ea2e0:	8b 83 5c 01 00 00    	mov    eax,DWORD PTR [ebx+0x15c]
  4ea2e6:	52                   	push   edx
  4ea2e7:	89 45 0c             	mov    DWORD PTR [ebp+0xc],eax
  4ea2ea:	68 78 df 6c 00       	push   0x6cdf78 ; ["[ConntctionModule][%s:%d][%s]: connect failed\n"]
  4ea2ef:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4ea2f2:	8d 83 20 01 00 00    	lea    eax,[ebx+0x120]
  4ea2f8:	51                   	push   ecx
  4ea2f9:	50                   	push   eax
  4ea2fa:	e8 0a cd f1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4ea2ff:	8b 83 34 01 00 00    	mov    eax,DWORD PTR [ebx+0x134]
  4ea305:	83 c4 18             	add    esp,0x18
  4ea308:	89 45 24             	mov    DWORD PTR [ebp+0x24],eax
  4ea30b:	83 f8 10             	cmp    eax,0x10
  4ea30e:	72 4d                	jb     0x4ea35d
  4ea310:	8b 83 34 01 00 00    	mov    eax,DWORD PTR [ebx+0x134]
  4ea316:	89 45 24             	mov    DWORD PTR [ebp+0x24],eax
  4ea319:	8b 93 20 01 00 00    	mov    edx,DWORD PTR [ebx+0x120]
  4ea31f:	89 55 10             	mov    DWORD PTR [ebp+0x10],edx
  4ea322:	8d 48 01             	lea    ecx,[eax+0x1]
  4ea325:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  4ea32b:	72 26                	jb     0x4ea353
  4ea32d:	8b 83 20 01 00 00    	mov    eax,DWORD PTR [ebx+0x120]
  4ea333:	83 c1 23             	add    ecx,0x23
  4ea336:	89 45 10             	mov    DWORD PTR [ebp+0x10],eax
  4ea339:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  4ea33c:	8b 83 20 01 00 00    	mov    eax,DWORD PTR [ebx+0x120]
  4ea342:	89 45 10             	mov    DWORD PTR [ebp+0x10],eax
  4ea345:	2b c2                	sub    eax,edx
  4ea347:	83 c0 fc             	add    eax,0xfffffffc
  4ea34a:	83 f8 1f             	cmp    eax,0x1f
  4ea34d:	0f 87 4c 01 00 00    	ja     0x4ea49f
  4ea353:	51                   	push   ecx
  4ea354:	52                   	push   edx
  4ea355:	e8 40 7d f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4ea35a:	83 c4 08             	add    esp,0x8
  4ea35d:	8b 43 20             	mov    eax,DWORD PTR [ebx+0x20]
  4ea360:	8d 4b 38             	lea    ecx,[ebx+0x38]
  4ea363:	89 85 18 ff ff ff    	mov    DWORD PTR [ebp-0xe8],eax
  4ea369:	c6 43 fc 00          	mov    BYTE PTR [ebx-0x4],0x0
  4ea36d:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  4ea370:	c7 44 18 20 6c 44 6c 	mov    DWORD PTR [eax+ebx*1+0x20],0x6c446c
  4ea378:	8b 53 20             	mov    edx,DWORD PTR [ebx+0x20]
  4ea37b:	89 95 18 ff ff ff    	mov    DWORD PTR [ebp-0xe8],edx
  4ea381:	8b 52 04             	mov    edx,DWORD PTR [edx+0x4]
  4ea384:	8d 42 98             	lea    eax,[edx-0x68]
  4ea387:	89 44 13 1c          	mov    DWORD PTR [ebx+edx*1+0x1c],eax
  4ea38b:	e8 4e 9d f1 ff       	call   0x4040de ; ["call resolved=0x46f4f0 "]
  4ea390:	8d 4b 40             	lea    ecx,[ebx+0x40]
  4ea393:	ff 15 30 d1 79 00    	call   DWORD PTR ds:0x79d130
  4ea399:	8d 8b 88 00 00 00    	lea    ecx,[ebx+0x88]
  4ea39f:	ff 15 d0 d0 79 00    	call   DWORD PTR ds:0x79d0d0
  4ea3a5:	8b 43 1c             	mov    eax,DWORD PTR [ebx+0x1c]
  4ea3a8:	89 45 6c             	mov    DWORD PTR [ebp+0x6c],eax
  4ea3ab:	83 f8 10             	cmp    eax,0x10
  4ea3ae:	0f 82 fb 00 00 00    	jb     0x4ea4af
  4ea3b4:	8b 43 1c             	mov    eax,DWORD PTR [ebx+0x1c]
  4ea3b7:	89 45 6c             	mov    DWORD PTR [ebp+0x6c],eax
  4ea3ba:	8b 53 08             	mov    edx,DWORD PTR [ebx+0x8]
  4ea3bd:	89 55 58             	mov    DWORD PTR [ebp+0x58],edx
  4ea3c0:	8d 48 01             	lea    ecx,[eax+0x1]
  4ea3c3:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  4ea3c9:	0f 82 d6 00 00 00    	jb     0x4ea4a5
  4ea3cf:	8b 43 08             	mov    eax,DWORD PTR [ebx+0x8]
  4ea3d2:	83 c1 23             	add    ecx,0x23
  4ea3d5:	89 45 58             	mov    DWORD PTR [ebp+0x58],eax
  4ea3d8:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  4ea3db:	8b 43 08             	mov    eax,DWORD PTR [ebx+0x8]
  4ea3de:	89 45 58             	mov    DWORD PTR [ebp+0x58],eax
  4ea3e1:	2b c2                	sub    eax,edx
  4ea3e3:	83 c0 fc             	add    eax,0xfffffffc
  4ea3e6:	83 f8 1f             	cmp    eax,0x1f
  4ea3e9:	0f 87 b0 00 00 00    	ja     0x4ea49f
  4ea3ef:	e9 b1 00 00 00       	jmp    0x4ea4a5
  4ea3f4:	8b 4d 00             	mov    ecx,DWORD PTR [ebp+0x0]
  4ea3f7:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4ea3fa:	89 81 5c 01 00 00    	mov    DWORD PTR [ecx+0x15c],eax
  4ea400:	83 c8 ff             	or     eax,0xffffffff
  4ea403:	66 89 41 04          	mov    WORD PTR [ecx+0x4],ax
  4ea407:	83 c1 d0             	add    ecx,0xffffffd0
  4ea40a:	e8 ad a0 f1 ff       	call   0x4044bc ; ["call resolved=0x4efbe0 "]
  4ea40f:	b8 15 a4 4e 00       	mov    eax,0x4ea415
  4ea414:	c3                   	ret
  4ea415:	8b 5d 00             	mov    ebx,DWORD PTR [ebp+0x0]
  4ea418:	e9 92 00 00 00       	jmp    0x4ea4af
  4ea41d:	8b 43 20             	mov    eax,DWORD PTR [ebx+0x20]
  4ea420:	8d 4b 38             	lea    ecx,[ebx+0x38]
  4ea423:	89 85 18 ff ff ff    	mov    DWORD PTR [ebp-0xe8],eax
  4ea429:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  4ea42c:	c7 44 18 20 6c 44 6c 	mov    DWORD PTR [eax+ebx*1+0x20],0x6c446c
  4ea434:	8b 53 20             	mov    edx,DWORD PTR [ebx+0x20]
  4ea437:	89 95 18 ff ff ff    	mov    DWORD PTR [ebp-0xe8],edx
  4ea43d:	8b 52 04             	mov    edx,DWORD PTR [edx+0x4]
  4ea440:	8d 42 98             	lea    eax,[edx-0x68]
  4ea443:	89 44 13 1c          	mov    DWORD PTR [ebx+edx*1+0x1c],eax
  4ea447:	e8 92 9c f1 ff       	call   0x4040de ; ["call resolved=0x46f4f0 "]
  4ea44c:	8d 4b 40             	lea    ecx,[ebx+0x40]
  4ea44f:	ff 15 30 d1 79 00    	call   DWORD PTR ds:0x79d130
  4ea455:	8d 8b 88 00 00 00    	lea    ecx,[ebx+0x88]
  4ea45b:	ff 15 d0 d0 79 00    	call   DWORD PTR ds:0x79d0d0
  4ea461:	8b 43 1c             	mov    eax,DWORD PTR [ebx+0x1c]
  4ea464:	89 45 6c             	mov    DWORD PTR [ebp+0x6c],eax
  4ea467:	83 f8 10             	cmp    eax,0x10
  4ea46a:	72 43                	jb     0x4ea4af
  4ea46c:	8b 43 1c             	mov    eax,DWORD PTR [ebx+0x1c]
  4ea46f:	89 45 6c             	mov    DWORD PTR [ebp+0x6c],eax
  4ea472:	8b 53 08             	mov    edx,DWORD PTR [ebx+0x8]
  4ea475:	89 55 58             	mov    DWORD PTR [ebp+0x58],edx
  4ea478:	8d 48 01             	lea    ecx,[eax+0x1]
  4ea47b:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  4ea481:	72 22                	jb     0x4ea4a5
  4ea483:	8b 43 08             	mov    eax,DWORD PTR [ebx+0x8]
  4ea486:	83 c1 23             	add    ecx,0x23
  4ea489:	89 45 58             	mov    DWORD PTR [ebp+0x58],eax
  4ea48c:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  4ea48f:	8b 43 08             	mov    eax,DWORD PTR [ebx+0x8]
  4ea492:	89 45 58             	mov    DWORD PTR [ebp+0x58],eax
  4ea495:	2b c2                	sub    eax,edx
  4ea497:	83 c0 fc             	add    eax,0xfffffffc
  4ea49a:	83 f8 1f             	cmp    eax,0x1f
  4ea49d:	76 06                	jbe    0x4ea4a5
  4ea49f:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  4ea4a5:	51                   	push   ecx
  4ea4a6:	52                   	push   edx
  4ea4a7:	e8 ee 7b f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4ea4ac:	83 c4 08             	add    esp,0x8
  4ea4af:	8d 43 d0             	lea    eax,[ebx-0x30]
  4ea4b2:	8d 8b 38 01 00 00    	lea    ecx,[ebx+0x138]
  4ea4b8:	89 01                	mov    DWORD PTR [ecx],eax
  4ea4ba:	33 c0                	xor    eax,eax
  4ea4bc:	53                   	push   ebx
  4ea4bd:	66 89 43 04          	mov    WORD PTR [ebx+0x4],ax
  4ea4c1:	e8 57 b7 f1 ff       	call   0x405c1d ; ["call resolved=0x4e99d0 "]
  4ea4c6:	84 c0                	test   al,al
  4ea4c8:	75 57                	jne    0x4ea521
  4ea4ca:	66 0f 1f 44 00 00    	nop    WORD PTR [eax+eax*1+0x0]
  4ea4d0:	8d 73 d0             	lea    esi,[ebx-0x30]
  4ea4d3:	83 7e 20 00          	cmp    DWORD PTR [esi+0x20],0x0
  4ea4d7:	8d 4e 20             	lea    ecx,[esi+0x20]
  4ea4da:	74 05                	je     0x4ea4e1
  4ea4dc:	e8 19 b2 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ea4e1:	83 7e 1c 00          	cmp    DWORD PTR [esi+0x1c],0x0
  4ea4e5:	8d 4e 1c             	lea    ecx,[esi+0x1c]
  4ea4e8:	74 05                	je     0x4ea4ef
  4ea4ea:	e8 0b b2 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ea4ef:	8d 46 10             	lea    eax,[esi+0x10]
  4ea4f2:	50                   	push   eax
  4ea4f3:	e8 9e b1 17 00       	call   0x665696 ; ["call resolved=0x665696 "]
  4ea4f8:	83 c4 04             	add    esp,0x4
  4ea4fb:	8b ce                	mov    ecx,esi
  4ea4fd:	e8 49 b1 f1 ff       	call   0x40564b ; ["call resolved=0x4ef8a0 "]
  4ea502:	f0 ff 0d 84 15 79 00 	lock dec DWORD PTR ds:0x791584
  4ea509:	66 83 7b 06 00       	cmp    WORD PTR [ebx+0x6],0x0
  4ea50e:	74 11                	je     0x4ea521
  4ea510:	68 99 01 00 00       	push   0x199
  4ea515:	56                   	push   esi
  4ea516:	e8 7f 7b f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4ea51b:	83 c4 08             	add    esp,0x8
  4ea51e:	eb 01                	jmp    0x4ea521
