; fn_594c30; image base 0x400000; static annotation only
  594c30:	55                   	push   ebp
  594c31:	8b ec                	mov    ebp,esp
  594c33:	6a ff                	push   0xffffffff
  594c35:	68 e4 ed 68 00       	push   0x68ede4
  594c3a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  594c40:	50                   	push   eax
  594c41:	83 ec 60             	sub    esp,0x60
  594c44:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  594c49:	33 c5                	xor    eax,ebp
  594c4b:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  594c4e:	53                   	push   ebx
  594c4f:	56                   	push   esi
  594c50:	57                   	push   edi
  594c51:	50                   	push   eax
  594c52:	8d 45 f4             	lea    eax,[ebp-0xc]
  594c55:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  594c5b:	8b 7d 08             	mov    edi,DWORD PTR [ebp+0x8]
  594c5e:	b9 db 96 7a 00       	mov    ecx,0x7a96db
  594c63:	e8 86 3e e7 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  594c68:	6a 00                	push   0x0
  594c6a:	8d 4d 9c             	lea    ecx,[ebp-0x64]
  594c6d:	e8 50 fc e6 ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  594c72:	8d 45 b0             	lea    eax,[ebp-0x50]
  594c75:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  594c7c:	50                   	push   eax
  594c7d:	e8 4d 17 e7 ff       	call   0x4063cf ; ["call resolved=0x499e50 "]
  594c82:	c7 45 d8 00 00 00 00 	mov    DWORD PTR [ebp-0x28],0x0
  594c89:	83 c4 04             	add    esp,0x4
  594c8c:	c7 45 ac 00 00 00 00 	mov    DWORD PTR [ebp-0x54],0x0
  594c93:	c7 45 b8 00 00 00 00 	mov    DWORD PTR [ebp-0x48],0x0
  594c9a:	c7 45 bc 00 00 00 00 	mov    DWORD PTR [ebp-0x44],0x0
  594ca1:	c7 45 e8 00 00 00 00 	mov    DWORD PTR [ebp-0x18],0x0
  594ca8:	c7 45 ec 0f 00 00 00 	mov    DWORD PTR [ebp-0x14],0xf
  594caf:	c6 45 d8 00          	mov    BYTE PTR [ebp-0x28],0x0
  594cb3:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  594cb7:	e8 94 13 e7 ff       	call   0x406050 ; ["call resolved=0x59b000 GatewayServer::getInstance"]
  594cbc:	8d 4d d8             	lea    ecx,[ebp-0x28]
  594cbf:	51                   	push   ecx
  594cc0:	8d 4d bc             	lea    ecx,[ebp-0x44]
  594cc3:	51                   	push   ecx
  594cc4:	8d 4d b8             	lea    ecx,[ebp-0x48]
  594cc7:	51                   	push   ecx
  594cc8:	57                   	push   edi
  594cc9:	8d 4d 9c             	lea    ecx,[ebp-0x64]
  594ccc:	51                   	push   ecx
  594ccd:	8b c8                	mov    ecx,eax
  594ccf:	e8 d5 4b e7 ff       	call   0x4098a9 ; ["call resolved=0x5d83e0 "]
  594cd4:	84 c0                	test   al,al
  594cd6:	0f 84 ab 00 00 00    	je     0x594d87
  594cdc:	8d 45 94             	lea    eax,[ebp-0x6c]
  594cdf:	50                   	push   eax
  594ce0:	e8 ea 16 e7 ff       	call   0x4063cf ; ["call resolved=0x499e50 "]
  594ce5:	83 c4 04             	add    esp,0x4
  594ce8:	8b 08                	mov    ecx,DWORD PTR [eax]
  594cea:	2b 4d b0             	sub    ecx,DWORD PTR [ebp-0x50]
  594ced:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  594cf0:	1b 45 b4             	sbb    eax,DWORD PTR [ebp-0x4c]
  594cf3:	6a 00                	push   0x0
  594cf5:	68 40 42 0f 00       	push   0xf4240
  594cfa:	50                   	push   eax
  594cfb:	51                   	push   ecx
  594cfc:	e8 7c 45 e7 ff       	call   0x40927d ; ["call resolved=0x666db0 "]
  594d01:	89 55 b4             	mov    DWORD PTR [ebp-0x4c],edx
  594d04:	89 45 ac             	mov    DWORD PTR [ebp-0x54],eax
  594d07:	e8 b1 46 e7 ff       	call   0x4093bd ; ["call resolved=0x4c5b40 "]
  594d0c:	8d 4d ac             	lea    ecx,[ebp-0x54]
  594d0f:	51                   	push   ecx
  594d10:	8d 4d 9c             	lea    ecx,[ebp-0x64]
  594d13:	51                   	push   ecx
  594d14:	8b c8                	mov    ecx,eax
  594d16:	e8 fa 07 e7 ff       	call   0x405515 ; ["call resolved=0x5898e0 DeviceWaitForPreConnectManager::sendDeviceListBuryPoint"]
  594d1b:	e8 9d 46 e7 ff       	call   0x4093bd ; ["call resolved=0x4c5b40 "]
  594d20:	8d 4d 9c             	lea    ecx,[ebp-0x64]
  594d23:	51                   	push   ecx
  594d24:	8b c8                	mov    ecx,eax
  594d26:	e8 e4 35 e7 ff       	call   0x40830f ; ["call resolved=0x588de0 "]
  594d2b:	e8 8d 46 e7 ff       	call   0x4093bd ; ["call resolved=0x4c5b40 "]
  594d30:	8b c8                	mov    ecx,eax
  594d32:	e8 08 29 e7 ff       	call   0x40763f ; ["call resolved=0x58b750 "]
  594d37:	8b 0d e4 46 79 00    	mov    ecx,DWORD PTR ds:0x7946e4
  594d3d:	85 c9                	test   ecx,ecx
  594d3f:	75 3d                	jne    0x594d7e
  594d41:	6a 48                	push   0x48
  594d43:	e8 6e e4 e6 ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  594d48:	83 c4 04             	add    esp,0x4
  594d4b:	89 45 b4             	mov    DWORD PTR [ebp-0x4c],eax
  594d4e:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  594d52:	85 c0                	test   eax,eax
  594d54:	74 1c                	je     0x594d72
  594d56:	8b c8                	mov    ecx,eax
  594d58:	e8 aa d9 e6 ff       	call   0x402707 ; ["call resolved=0x55b410 "]
  594d5d:	8b c8                	mov    ecx,eax
  594d5f:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  594d63:	89 0d e4 46 79 00    	mov    DWORD PTR ds:0x7946e4,ecx
  594d69:	8b 01                	mov    eax,DWORD PTR [ecx]
  594d6b:	ff 10                	call   DWORD PTR [eax]
  594d6d:	e9 05 01 00 00       	jmp    0x594e77
  594d72:	33 c9                	xor    ecx,ecx
  594d74:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  594d78:	89 0d e4 46 79 00    	mov    DWORD PTR ds:0x7946e4,ecx
  594d7e:	8b 01                	mov    eax,DWORD PTR [ecx]
  594d80:	ff 10                	call   DWORD PTR [eax]
  594d82:	e9 f0 00 00 00       	jmp    0x594e77
  594d87:	83 7d ec 10          	cmp    DWORD PTR [ebp-0x14],0x10
  594d8b:	8d 75 d8             	lea    esi,[ebp-0x28]
  594d8e:	8b 45 b8             	mov    eax,DWORD PTR [ebp-0x48]
  594d91:	0f 43 75 d8          	cmovae esi,DWORD PTR [ebp-0x28]
  594d95:	8b 5d bc             	mov    ebx,DWORD PTR [ebp-0x44]
  594d98:	6a 5c                	push   0x5c
  594d9a:	68 c8 e1 6d 00       	push   0x6de1c8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\EventNotify\\HttpEventSubscriber.cpp"]
  594d9f:	89 45 98             	mov    DWORD PTR [ebp-0x68],eax
  594da2:	e8 bf 39 0d 00       	call   0x668766 ; ["call resolved=0x668766 "]
  594da7:	83 c4 08             	add    esp,0x8
  594daa:	85 c0                	test   eax,eax
  594dac:	74 12                	je     0x594dc0
  594dae:	6a 5c                	push   0x5c
  594db0:	68 c8 e1 6d 00       	push   0x6de1c8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\EventNotify\\HttpEventSubscriber.cpp"]
  594db5:	e8 ac 39 0d 00       	call   0x668766 ; ["call resolved=0x668766 "]
  594dba:	83 c4 08             	add    esp,0x8
  594dbd:	40                   	inc    eax
  594dbe:	eb 05                	jmp    0x594dc5
  594dc0:	b8 c8 e1 6d 00       	mov    eax,0x6de1c8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\EventNotify\\HttpEventSubscriber.cpp"]
  594dc5:	56                   	push   esi
  594dc6:	53                   	push   ebx
  594dc7:	ff 75 98             	push   DWORD PTR [ebp-0x68]
  594dca:	c7 45 b4 02 00 00 00 	mov    DWORD PTR [ebp-0x4c],0x2
  594dd1:	68 78 e5 6d 00       	push   0x6de578 ; ["HttpEventSubscriber::farawayDeviceListUpdateHandle::<lambda_28f4b4bd994164a2be143b0805ef3ded>::operator ()"]
  594dd6:	68 e3 00 00 00       	push   0xe3
  594ddb:	50                   	push   eax
  594ddc:	68 f8 e5 6d 00       	push   0x6de5f8 ; ["[ConntctionModule][%s:%d][%s]: /device/list request failed! httpCode: %d, respondCode: %d, msg: %s"]
  594de1:	8d 45 b4             	lea    eax,[ebp-0x4c]
  594de4:	50                   	push   eax
  594de5:	8d 45 c0             	lea    eax,[ebp-0x40]
  594de8:	50                   	push   eax
  594de9:	e8 1b 22 e7 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  594dee:	8b 55 d4             	mov    edx,DWORD PTR [ebp-0x2c]
  594df1:	83 c4 24             	add    esp,0x24
  594df4:	83 fa 10             	cmp    edx,0x10
  594df7:	72 2c                	jb     0x594e25
  594df9:	8b 4d c0             	mov    ecx,DWORD PTR [ebp-0x40]
  594dfc:	42                   	inc    edx
  594dfd:	8b c1                	mov    eax,ecx
  594dff:	81 fa 00 10 00 00    	cmp    edx,0x1000
  594e05:	72 14                	jb     0x594e1b
  594e07:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  594e0a:	83 c2 23             	add    edx,0x23
  594e0d:	2b c1                	sub    eax,ecx
  594e0f:	83 c0 fc             	add    eax,0xfffffffc
  594e12:	83 f8 1f             	cmp    eax,0x1f
  594e15:	0f 87 82 00 00 00    	ja     0x594e9d
  594e1b:	52                   	push   edx
  594e1c:	51                   	push   ecx
  594e1d:	e8 78 d2 e6 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  594e22:	83 c4 08             	add    esp,0x8
  594e25:	81 7d b8 c8 00 00 00 	cmp    DWORD PTR [ebp-0x48],0xc8
  594e2c:	75 06                	jne    0x594e34
  594e2e:	83 7d bc 00          	cmp    DWORD PTR [ebp-0x44],0x0
  594e32:	74 43                	je     0x594e77
  594e34:	e8 fb 28 e7 ff       	call   0x407734 ; ["call resolved=0x492af0 "]
  594e39:	8b 48 28             	mov    ecx,DWORD PTR [eax+0x28]
  594e3c:	83 c0 18             	add    eax,0x18
  594e3f:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  594e43:	72 02                	jb     0x594e47
  594e45:	8b 00                	mov    eax,DWORD PTR [eax]
  594e47:	85 c9                	test   ecx,ecx
  594e49:	75 13                	jne    0x594e5e
  594e4b:	51                   	push   ecx
  594e4c:	68 02 1c 6c 00       	push   0x6c1c02
  594e51:	50                   	push   eax
  594e52:	e8 66 fa e6 ff       	call   0x4048bd ; ["call resolved=0x482fc0 "]
  594e57:	83 c4 0c             	add    esp,0xc
  594e5a:	85 c0                	test   eax,eax
  594e5c:	74 19                	je     0x594e77
  594e5e:	e8 5a 45 e7 ff       	call   0x4093bd ; ["call resolved=0x4c5b40 "]
  594e63:	57                   	push   edi
  594e64:	8d 4d d8             	lea    ecx,[ebp-0x28]
  594e67:	51                   	push   ecx
  594e68:	8d 4d bc             	lea    ecx,[ebp-0x44]
  594e6b:	51                   	push   ecx
  594e6c:	8d 4d b8             	lea    ecx,[ebp-0x48]
  594e6f:	51                   	push   ecx
  594e70:	8b c8                	mov    ecx,eax
  594e72:	e8 92 0d e7 ff       	call   0x405c09 ; ["call resolved=0x58a940 DeviceWaitForPreConnectManager::sendDeviceListFailBuryPoint"]
  594e77:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  594e7a:	83 fa 10             	cmp    edx,0x10
  594e7d:	72 2e                	jb     0x594ead
  594e7f:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  594e82:	42                   	inc    edx
  594e83:	8b c1                	mov    eax,ecx
  594e85:	81 fa 00 10 00 00    	cmp    edx,0x1000
  594e8b:	72 16                	jb     0x594ea3
  594e8d:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  594e90:	83 c2 23             	add    edx,0x23
  594e93:	2b c1                	sub    eax,ecx
  594e95:	83 c0 fc             	add    eax,0xfffffffc
  594e98:	83 f8 1f             	cmp    eax,0x1f
  594e9b:	76 06                	jbe    0x594ea3
  594e9d:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  594ea3:	52                   	push   edx
  594ea4:	51                   	push   ecx
  594ea5:	e8 f0 d1 e6 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  594eaa:	83 c4 08             	add    esp,0x8
  594ead:	8d 4d 9c             	lea    ecx,[ebp-0x64]
  594eb0:	c7 45 e8 00 00 00 00 	mov    DWORD PTR [ebp-0x18],0x0
  594eb7:	c7 45 ec 0f 00 00 00 	mov    DWORD PTR [ebp-0x14],0xf
  594ebe:	c6 45 d8 00          	mov    BYTE PTR [ebp-0x28],0x0
  594ec2:	e8 17 51 e7 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  594ec7:	ff 75 9c             	push   DWORD PTR [ebp-0x64]
  594eca:	8d 4d a4             	lea    ecx,[ebp-0x5c]
  594ecd:	e8 7c 4a e7 ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  594ed2:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  594ed5:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  594edc:	59                   	pop    ecx
  594edd:	5f                   	pop    edi
  594ede:	5e                   	pop    esi
  594edf:	5b                   	pop    ebx
  594ee0:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  594ee3:	33 cd                	xor    ecx,ebp
  594ee5:	e8 a5 f5 e6 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  594eea:	8b e5                	mov    esp,ebp
  594eec:	5d                   	pop    ebp
  594eed:	c2 04 00             	ret    0x4
