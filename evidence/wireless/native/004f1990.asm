; ClassicRfcommClient::connectDevicebyAddress; image base 0x400000; static annotation only
  4f1990:	55                   	push   ebp
  4f1991:	8b ec                	mov    ebp,esp
  4f1993:	6a ff                	push   0xffffffff
  4f1995:	68 10 e1 67 00       	push   0x67e110
  4f199a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  4f19a0:	50                   	push   eax
  4f19a1:	83 ec 68             	sub    esp,0x68
  4f19a4:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  4f19a9:	33 c5                	xor    eax,ebp
  4f19ab:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4f19ae:	53                   	push   ebx
  4f19af:	56                   	push   esi
  4f19b0:	57                   	push   edi
  4f19b1:	50                   	push   eax
  4f19b2:	8d 45 f4             	lea    eax,[ebp-0xc]
  4f19b5:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  4f19bb:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  4f19be:	8b 75 08             	mov    esi,DWORD PTR [ebp+0x8]
  4f19c1:	b9 1d 88 7a 00       	mov    ecx,0x7a881d
  4f19c6:	89 75 90             	mov    DWORD PTR [ebp-0x70],esi
  4f19c9:	e8 20 71 f1 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  4f19ce:	33 d2                	xor    edx,edx
  4f19d0:	66 8b 46 04          	mov    ax,WORD PTR [esi+0x4]
  4f19d4:	66 89 45 9e          	mov    WORD PTR [ebp-0x62],ax
  4f19d8:	8d 48 01             	lea    ecx,[eax+0x1]
  4f19db:	66 83 f9 04          	cmp    cx,0x4
  4f19df:	0f 87 8b 04 00 00    	ja     0x4f1e70
  4f19e5:	66 89 45 9e          	mov    WORD PTR [ebp-0x62],ax
  4f19e9:	66 83 f8 02          	cmp    ax,0x2
  4f19ed:	74 09                	je     0x4f19f8
  4f19ef:	8b 96 9c 00 00 00    	mov    edx,DWORD PTR [esi+0x9c]
  4f19f5:	89 55 a0             	mov    DWORD PTR [ebp-0x60],edx
  4f19f8:	89 96 9c 00 00 00    	mov    DWORD PTR [esi+0x9c],edx
  4f19fe:	0f bf c1             	movsx  eax,cx
  4f1a01:	ff 24 85 90 1e 4f 00 	jmp    DWORD PTR [eax*4+0x4f1e90]
  4f1a08:	8b be a1 00 00 00    	mov    edi,DWORD PTR [esi+0xa1]
  4f1a0e:	8d 47 04             	lea    eax,[edi+0x4]
  4f1a11:	50                   	push   eax
  4f1a12:	68 02 02 00 00       	push   0x202
  4f1a17:	ff 15 b0 d8 79 00    	call   DWORD PTR ds:0x79d8b0
  4f1a1d:	85 c0                	test   eax,eax
  4f1a1f:	74 09                	je     0x4f1a2a
  4f1a21:	c6 46 fc 00          	mov    BYTE PTR [esi-0x4],0x0
  4f1a25:	e9 d8 03 00 00       	jmp    0x4f1e02
  4f1a2a:	6a 03                	push   0x3
  4f1a2c:	6a 01                	push   0x1
  4f1a2e:	6a 20                	push   0x20
  4f1a30:	ff 15 cc d8 79 00    	call   DWORD PTR ds:0x79d8cc
  4f1a36:	89 07                	mov    DWORD PTR [edi],eax
  4f1a38:	83 f8 ff             	cmp    eax,0xffffffff
  4f1a3b:	0f 85 b6 00 00 00    	jne    0x4f1af7
  4f1a41:	6a 5c                	push   0x5c
  4f1a43:	68 e8 ed 6c 00       	push   0x6cede8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\ClassicRfcommClient.cpp"]
  4f1a48:	e8 19 6d 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4f1a4d:	83 c4 08             	add    esp,0x8
  4f1a50:	85 c0                	test   eax,eax
  4f1a52:	74 14                	je     0x4f1a68
  4f1a54:	6a 5c                	push   0x5c
  4f1a56:	68 e8 ed 6c 00       	push   0x6cede8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\ClassicRfcommClient.cpp"]
  4f1a5b:	e8 06 6d 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4f1a60:	83 c4 08             	add    esp,0x8
  4f1a63:	8d 50 01             	lea    edx,[eax+0x1]
  4f1a66:	eb 05                	jmp    0x4f1a6d
  4f1a68:	ba e8 ed 6c 00       	mov    edx,0x6cede8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\ClassicRfcommClient.cpp"]
  4f1a6d:	68 b4 ed 6c 00       	push   0x6cedb4 ; ["ClassicRfcommClient::connectDevicebyAddress"]
  4f1a72:	6a 16                	push   0x16
  4f1a74:	8d 4e 08             	lea    ecx,[esi+0x8]
  4f1a77:	c7 01 02 00 00 00    	mov    DWORD PTR [ecx],0x2
  4f1a7d:	8b 86 9c 00 00 00    	mov    eax,DWORD PTR [esi+0x9c]
  4f1a83:	52                   	push   edx
  4f1a84:	89 45 a0             	mov    DWORD PTR [ebp-0x60],eax
  4f1a87:	68 48 ee 6c 00       	push   0x6cee48 ; ["[ConntctionModule][%s:%d][%s]: Error: Failed to create socket.\n"]
  4f1a8c:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4f1a8f:	8d 46 0c             	lea    eax,[esi+0xc]
  4f1a92:	51                   	push   ecx
  4f1a93:	50                   	push   eax
  4f1a94:	e8 70 55 f1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4f1a99:	8b 46 20             	mov    eax,DWORD PTR [esi+0x20]
  4f1a9c:	83 c4 18             	add    esp,0x18
  4f1a9f:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  4f1aa2:	83 f8 10             	cmp    eax,0x10
  4f1aa5:	72 41                	jb     0x4f1ae8
  4f1aa7:	8b 46 20             	mov    eax,DWORD PTR [esi+0x20]
  4f1aaa:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  4f1aad:	8b 56 0c             	mov    edx,DWORD PTR [esi+0xc]
  4f1ab0:	89 55 d4             	mov    DWORD PTR [ebp-0x2c],edx
  4f1ab3:	8d 48 01             	lea    ecx,[eax+0x1]
  4f1ab6:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  4f1abc:	72 20                	jb     0x4f1ade
  4f1abe:	8b 46 0c             	mov    eax,DWORD PTR [esi+0xc]
  4f1ac1:	83 c1 23             	add    ecx,0x23
  4f1ac4:	89 45 d4             	mov    DWORD PTR [ebp-0x2c],eax
  4f1ac7:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  4f1aca:	8b 46 0c             	mov    eax,DWORD PTR [esi+0xc]
  4f1acd:	89 45 d4             	mov    DWORD PTR [ebp-0x2c],eax
  4f1ad0:	2b c2                	sub    eax,edx
  4f1ad2:	83 c0 fc             	add    eax,0xfffffffc
  4f1ad5:	83 f8 1f             	cmp    eax,0x1f
  4f1ad8:	0f 87 ca 02 00 00    	ja     0x4f1da8
  4f1ade:	51                   	push   ecx
  4f1adf:	52                   	push   edx
  4f1ae0:	e8 b5 05 f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4f1ae5:	83 c4 08             	add    esp,0x8
  4f1ae8:	ff 15 ac d8 79 00    	call   DWORD PTR ds:0x79d8ac
  4f1aee:	c6 46 fc 00          	mov    BYTE PTR [esi-0x4],0x0
  4f1af2:	e9 0b 03 00 00       	jmp    0x4f1e02
  4f1af7:	8d 56 24             	lea    edx,[esi+0x24]
  4f1afa:	0f 57 c0             	xorps  xmm0,xmm0
  4f1afd:	0f 11 02             	movups XMMWORD PTR [edx],xmm0
  4f1b00:	b8 20 00 00 00       	mov    eax,0x20
  4f1b05:	83 cf ff             	or     edi,0xffffffff
  4f1b08:	66 0f d6 42 10       	movq   QWORD PTR [edx+0x10],xmm0
  4f1b0d:	c7 42 18 00 00 00 00 	mov    DWORD PTR [edx+0x18],0x0
  4f1b14:	66 c7 42 1c 00 00    	mov    WORD PTR [edx+0x1c],0x0
  4f1b1a:	66 89 46 24          	mov    WORD PTR [esi+0x24],ax
  4f1b1e:	8b 86 a5 00 00 00    	mov    eax,DWORD PTR [esi+0xa5]
  4f1b24:	8b 08                	mov    ecx,DWORD PTR [eax]
  4f1b26:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  4f1b29:	89 4e 26             	mov    DWORD PTR [esi+0x26],ecx
  4f1b2c:	33 c9                	xor    ecx,ecx
  4f1b2e:	89 46 2a             	mov    DWORD PTR [esi+0x2a],eax
  4f1b31:	8b 86 a9 00 00 00    	mov    eax,DWORD PTR [esi+0xa9]
  4f1b37:	0f 10 00             	movups xmm0,XMMWORD PTR [eax]
  4f1b3a:	0f 11 46 2e          	movups XMMWORD PTR [esi+0x2e],xmm0
  4f1b3e:	c7 46 3e ff ff ff ff 	mov    DWORD PTR [esi+0x3e],0xffffffff
  4f1b45:	85 ff                	test   edi,edi
  4f1b47:	0f 84 b1 02 00 00    	je     0x4f1dfe
  4f1b4d:	8b c1                	mov    eax,ecx
  4f1b4f:	41                   	inc    ecx
  4f1b50:	89 4d 8c             	mov    DWORD PTR [ebp-0x74],ecx
  4f1b53:	83 f8 02             	cmp    eax,0x2
  4f1b56:	0f 8d 98 01 00 00    	jge    0x4f1cf4
  4f1b5c:	8b 86 a1 00 00 00    	mov    eax,DWORD PTR [esi+0xa1]
  4f1b62:	6a 1e                	push   0x1e
  4f1b64:	52                   	push   edx
  4f1b65:	ff 30                	push   DWORD PTR [eax]
  4f1b67:	ff 15 ec d8 79 00    	call   DWORD PTR ds:0x79d8ec
  4f1b6d:	8b f8                	mov    edi,eax
  4f1b6f:	6a 5c                	push   0x5c
  4f1b71:	68 e8 ed 6c 00       	push   0x6cede8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\ClassicRfcommClient.cpp"]
  4f1b76:	85 ff                	test   edi,edi
  4f1b78:	0f 84 a9 00 00 00    	je     0x4f1c27
  4f1b7e:	8b 8e a5 00 00 00    	mov    ecx,DWORD PTR [esi+0xa5]
  4f1b84:	8b 01                	mov    eax,DWORD PTR [ecx]
  4f1b86:	89 45 94             	mov    DWORD PTR [ebp-0x6c],eax
  4f1b89:	8b 41 04             	mov    eax,DWORD PTR [ecx+0x4]
  4f1b8c:	89 45 98             	mov    DWORD PTR [ebp-0x68],eax
  4f1b8f:	e8 d2 6b 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4f1b94:	83 c4 08             	add    esp,0x8
  4f1b97:	85 c0                	test   eax,eax
  4f1b99:	74 14                	je     0x4f1baf
  4f1b9b:	6a 5c                	push   0x5c
  4f1b9d:	68 e8 ed 6c 00       	push   0x6cede8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\ClassicRfcommClient.cpp"]
  4f1ba2:	e8 bf 6b 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4f1ba7:	83 c4 08             	add    esp,0x8
  4f1baa:	8d 50 01             	lea    edx,[eax+0x1]
  4f1bad:	eb 05                	jmp    0x4f1bb4
  4f1baf:	ba e8 ed 6c 00       	mov    edx,0x6cede8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\ClassicRfcommClient.cpp"]
  4f1bb4:	ff 75 98             	push   DWORD PTR [ebp-0x68]
  4f1bb7:	8d 4e 44             	lea    ecx,[esi+0x44]
  4f1bba:	c7 01 02 00 00 00    	mov    DWORD PTR [ecx],0x2
  4f1bc0:	ff 75 94             	push   DWORD PTR [ebp-0x6c]
  4f1bc3:	8b 86 9c 00 00 00    	mov    eax,DWORD PTR [esi+0x9c]
  4f1bc9:	68 b4 ed 6c 00       	push   0x6cedb4 ; ["ClassicRfcommClient::connectDevicebyAddress"]
  4f1bce:	6a 2b                	push   0x2b
  4f1bd0:	52                   	push   edx
  4f1bd1:	89 45 a0             	mov    DWORD PTR [ebp-0x60],eax
  4f1bd4:	68 94 ee 6c 00       	push   0x6cee94 ; ["[ConntctionModule][%s:%d][%s]: connect %4x try again.\n"]
  4f1bd9:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4f1bdc:	8d 46 48             	lea    eax,[esi+0x48]
  4f1bdf:	51                   	push   ecx
  4f1be0:	50                   	push   eax
  4f1be1:	e8 23 54 f1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4f1be6:	8b 46 5c             	mov    eax,DWORD PTR [esi+0x5c]
  4f1be9:	83 c4 20             	add    esp,0x20
  4f1bec:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  4f1bef:	83 f8 10             	cmp    eax,0x10
  4f1bf2:	0f 82 e6 00 00 00    	jb     0x4f1cde
  4f1bf8:	8b 46 5c             	mov    eax,DWORD PTR [esi+0x5c]
  4f1bfb:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  4f1bfe:	8b 56 48             	mov    edx,DWORD PTR [esi+0x48]
  4f1c01:	89 55 d4             	mov    DWORD PTR [ebp-0x2c],edx
  4f1c04:	8d 48 01             	lea    ecx,[eax+0x1]
  4f1c07:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  4f1c0d:	0f 82 c1 00 00 00    	jb     0x4f1cd4
  4f1c13:	8b 46 48             	mov    eax,DWORD PTR [esi+0x48]
  4f1c16:	89 45 d4             	mov    DWORD PTR [ebp-0x2c],eax
  4f1c19:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  4f1c1c:	8b 46 48             	mov    eax,DWORD PTR [esi+0x48]
  4f1c1f:	89 45 d4             	mov    DWORD PTR [ebp-0x2c],eax
  4f1c22:	e9 9c 00 00 00       	jmp    0x4f1cc3
  4f1c27:	8b 86 a5 00 00 00    	mov    eax,DWORD PTR [esi+0xa5]
  4f1c2d:	8b 08                	mov    ecx,DWORD PTR [eax]
  4f1c2f:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  4f1c32:	89 4d 98             	mov    DWORD PTR [ebp-0x68],ecx
  4f1c35:	89 45 94             	mov    DWORD PTR [ebp-0x6c],eax
  4f1c38:	e8 29 6b 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4f1c3d:	83 c4 08             	add    esp,0x8
  4f1c40:	85 c0                	test   eax,eax
  4f1c42:	74 14                	je     0x4f1c58
  4f1c44:	6a 5c                	push   0x5c
  4f1c46:	68 e8 ed 6c 00       	push   0x6cede8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\ClassicRfcommClient.cpp"]
  4f1c4b:	e8 16 6b 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4f1c50:	83 c4 08             	add    esp,0x8
  4f1c53:	8d 50 01             	lea    edx,[eax+0x1]
  4f1c56:	eb 05                	jmp    0x4f1c5d
  4f1c58:	ba e8 ed 6c 00       	mov    edx,0x6cede8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\ClassicRfcommClient.cpp"]
  4f1c5d:	ff 75 94             	push   DWORD PTR [ebp-0x6c]
  4f1c60:	8d 4e 60             	lea    ecx,[esi+0x60]
  4f1c63:	c7 01 02 00 00 00    	mov    DWORD PTR [ecx],0x2
  4f1c69:	ff 75 98             	push   DWORD PTR [ebp-0x68]
  4f1c6c:	8b 86 9c 00 00 00    	mov    eax,DWORD PTR [esi+0x9c]
  4f1c72:	68 b4 ed 6c 00       	push   0x6cedb4 ; ["ClassicRfcommClient::connectDevicebyAddress"]
  4f1c77:	6a 2f                	push   0x2f
  4f1c79:	52                   	push   edx
  4f1c7a:	89 45 a0             	mov    DWORD PTR [ebp-0x60],eax
  4f1c7d:	68 d8 ee 6c 00       	push   0x6ceed8 ; ["[ConntctionModule][%s:%d][%s]: connect %d success! ------------------------\n"]
  4f1c82:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4f1c85:	8d 46 64             	lea    eax,[esi+0x64]
  4f1c88:	51                   	push   ecx
  4f1c89:	50                   	push   eax
  4f1c8a:	e8 7a 53 f1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4f1c8f:	8b 46 78             	mov    eax,DWORD PTR [esi+0x78]
  4f1c92:	83 c4 20             	add    esp,0x20
  4f1c95:	89 45 d0             	mov    DWORD PTR [ebp-0x30],eax
  4f1c98:	83 f8 10             	cmp    eax,0x10
  4f1c9b:	72 41                	jb     0x4f1cde
  4f1c9d:	8b 46 78             	mov    eax,DWORD PTR [esi+0x78]
  4f1ca0:	89 45 d0             	mov    DWORD PTR [ebp-0x30],eax
  4f1ca3:	8b 56 64             	mov    edx,DWORD PTR [esi+0x64]
  4f1ca6:	89 55 bc             	mov    DWORD PTR [ebp-0x44],edx
  4f1ca9:	8d 48 01             	lea    ecx,[eax+0x1]
  4f1cac:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  4f1cb2:	72 20                	jb     0x4f1cd4
  4f1cb4:	8b 46 64             	mov    eax,DWORD PTR [esi+0x64]
  4f1cb7:	89 45 bc             	mov    DWORD PTR [ebp-0x44],eax
  4f1cba:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  4f1cbd:	8b 46 64             	mov    eax,DWORD PTR [esi+0x64]
  4f1cc0:	89 45 bc             	mov    DWORD PTR [ebp-0x44],eax
  4f1cc3:	2b c2                	sub    eax,edx
  4f1cc5:	83 c1 23             	add    ecx,0x23
  4f1cc8:	83 c0 fc             	add    eax,0xfffffffc
  4f1ccb:	83 f8 1f             	cmp    eax,0x1f
  4f1cce:	0f 87 d4 00 00 00    	ja     0x4f1da8
  4f1cd4:	51                   	push   ecx
  4f1cd5:	52                   	push   edx
  4f1cd6:	e8 bf 03 f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4f1cdb:	83 c4 08             	add    esp,0x8
  4f1cde:	68 f4 01 00 00       	push   0x1f4
  4f1ce3:	ff 15 38 e0 79 00    	call   DWORD PTR ds:0x79e038
  4f1ce9:	8b 4d 8c             	mov    ecx,DWORD PTR [ebp-0x74]
  4f1cec:	8d 56 24             	lea    edx,[esi+0x24]
  4f1cef:	e9 51 fe ff ff       	jmp    0x4f1b45
  4f1cf4:	83 ff ff             	cmp    edi,0xffffffff
  4f1cf7:	0f 85 01 01 00 00    	jne    0x4f1dfe
  4f1cfd:	6a 5c                	push   0x5c
  4f1cff:	68 e8 ed 6c 00       	push   0x6cede8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\ClassicRfcommClient.cpp"]
  4f1d04:	e8 5d 6a 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4f1d09:	83 c4 08             	add    esp,0x8
  4f1d0c:	85 c0                	test   eax,eax
  4f1d0e:	74 14                	je     0x4f1d24
  4f1d10:	6a 5c                	push   0x5c
  4f1d12:	68 e8 ed 6c 00       	push   0x6cede8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\ClassicRfcommClient.cpp"]
  4f1d17:	e8 4a 6a 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4f1d1c:	83 c4 08             	add    esp,0x8
  4f1d1f:	8d 50 01             	lea    edx,[eax+0x1]
  4f1d22:	eb 05                	jmp    0x4f1d29
  4f1d24:	ba e8 ed 6c 00       	mov    edx,0x6cede8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\ClassicRfcommClient.cpp"]
  4f1d29:	68 b4 ed 6c 00       	push   0x6cedb4 ; ["ClassicRfcommClient::connectDevicebyAddress"]
  4f1d2e:	6a 36                	push   0x36
  4f1d30:	8d 4e 7c             	lea    ecx,[esi+0x7c]
  4f1d33:	c7 01 02 00 00 00    	mov    DWORD PTR [ecx],0x2
  4f1d39:	8b 86 9c 00 00 00    	mov    eax,DWORD PTR [esi+0x9c]
  4f1d3f:	52                   	push   edx
  4f1d40:	89 45 a0             	mov    DWORD PTR [ebp-0x60],eax
  4f1d43:	68 38 ef 6c 00       	push   0x6cef38 ; ["[ConntctionModule][%s:%d][%s]: Error: Failed to connect to server.\n"]
  4f1d48:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4f1d4b:	8d 86 80 00 00 00    	lea    eax,[esi+0x80]
  4f1d51:	51                   	push   ecx
  4f1d52:	50                   	push   eax
  4f1d53:	e8 b1 52 f1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4f1d58:	8b 86 94 00 00 00    	mov    eax,DWORD PTR [esi+0x94]
  4f1d5e:	83 c4 18             	add    esp,0x18
  4f1d61:	89 45 b8             	mov    DWORD PTR [ebp-0x48],eax
  4f1d64:	83 f8 10             	cmp    eax,0x10
  4f1d67:	72 4f                	jb     0x4f1db8
  4f1d69:	8b 86 94 00 00 00    	mov    eax,DWORD PTR [esi+0x94]
  4f1d6f:	89 45 b8             	mov    DWORD PTR [ebp-0x48],eax
  4f1d72:	8b 96 80 00 00 00    	mov    edx,DWORD PTR [esi+0x80]
  4f1d78:	89 55 a4             	mov    DWORD PTR [ebp-0x5c],edx
  4f1d7b:	8d 48 01             	lea    ecx,[eax+0x1]
  4f1d7e:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  4f1d84:	72 28                	jb     0x4f1dae
  4f1d86:	8b 86 80 00 00 00    	mov    eax,DWORD PTR [esi+0x80]
  4f1d8c:	83 c1 23             	add    ecx,0x23
  4f1d8f:	89 45 a4             	mov    DWORD PTR [ebp-0x5c],eax
  4f1d92:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  4f1d95:	8b 86 80 00 00 00    	mov    eax,DWORD PTR [esi+0x80]
  4f1d9b:	89 45 a4             	mov    DWORD PTR [ebp-0x5c],eax
  4f1d9e:	2b c2                	sub    eax,edx
  4f1da0:	83 c0 fc             	add    eax,0xfffffffc
  4f1da3:	83 f8 1f             	cmp    eax,0x1f
  4f1da6:	76 06                	jbe    0x4f1dae
  4f1da8:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  4f1dae:	51                   	push   ecx
  4f1daf:	52                   	push   edx
  4f1db0:	e8 e5 02 f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4f1db5:	83 c4 08             	add    esp,0x8
  4f1db8:	8b be a1 00 00 00    	mov    edi,DWORD PTR [esi+0xa1]
  4f1dbe:	ff 37                	push   DWORD PTR [edi]
  4f1dc0:	ff 15 f0 d8 79 00    	call   DWORD PTR ds:0x79d8f0
  4f1dc6:	c7 07 00 00 00 00    	mov    DWORD PTR [edi],0x0
  4f1dcc:	ff 15 ac d8 79 00    	call   DWORD PTR ds:0x79d8ac
  4f1dd2:	c6 46 fc 00          	mov    BYTE PTR [esi-0x4],0x0
  4f1dd6:	eb 2a                	jmp    0x4f1e02
  4f1dd8:	8b 4d 90             	mov    ecx,DWORD PTR [ebp-0x70]
  4f1ddb:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4f1dde:	89 81 9c 00 00 00    	mov    DWORD PTR [ecx+0x9c],eax
  4f1de4:	83 c8 ff             	or     eax,0xffffffff
  4f1de7:	66 89 41 04          	mov    WORD PTR [ecx+0x4],ax
  4f1deb:	83 c1 d0             	add    ecx,0xffffffd0
  4f1dee:	e8 0c 2f f1 ff       	call   0x404cff ; ["call resolved=0x4f37d0 "]
  4f1df3:	b8 f9 1d 4f 00       	mov    eax,0x4f1df9
  4f1df8:	c3                   	ret
  4f1df9:	8b 75 90             	mov    esi,DWORD PTR [ebp-0x70]
  4f1dfc:	eb 04                	jmp    0x4f1e02
  4f1dfe:	c6 46 fc 01          	mov    BYTE PTR [esi-0x4],0x1
  4f1e02:	8d 8e 98 00 00 00    	lea    ecx,[esi+0x98]
  4f1e08:	8d 46 d0             	lea    eax,[esi-0x30]
  4f1e0b:	89 01                	mov    DWORD PTR [ecx],eax
  4f1e0d:	33 c0                	xor    eax,eax
  4f1e0f:	56                   	push   esi
  4f1e10:	66 89 46 04          	mov    WORD PTR [esi+0x4],ax
  4f1e14:	e8 3a 44 f1 ff       	call   0x406253 ; ["call resolved=0x4f1620 "]
  4f1e19:	84 c0                	test   al,al
  4f1e1b:	75 54                	jne    0x4f1e71
  4f1e1d:	0f 1f 00             	nop    DWORD PTR [eax]
  4f1e20:	8d 7e d0             	lea    edi,[esi-0x30]
  4f1e23:	83 7f 20 00          	cmp    DWORD PTR [edi+0x20],0x0
  4f1e27:	8d 4f 20             	lea    ecx,[edi+0x20]
  4f1e2a:	74 05                	je     0x4f1e31
  4f1e2c:	e8 c9 38 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4f1e31:	83 7f 1c 00          	cmp    DWORD PTR [edi+0x1c],0x0
  4f1e35:	8d 4f 1c             	lea    ecx,[edi+0x1c]
  4f1e38:	74 05                	je     0x4f1e3f
  4f1e3a:	e8 bb 38 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4f1e3f:	8d 47 10             	lea    eax,[edi+0x10]
  4f1e42:	50                   	push   eax
  4f1e43:	e8 4e 38 17 00       	call   0x665696 ; ["call resolved=0x665696 "]
  4f1e48:	83 c4 04             	add    esp,0x4
  4f1e4b:	8b cf                	mov    ecx,edi
  4f1e4d:	e8 c3 22 f1 ff       	call   0x404115 ; ["call resolved=0x4f36f0 "]
  4f1e52:	f0 ff 0d 84 15 79 00 	lock dec DWORD PTR ds:0x791584
  4f1e59:	66 83 7e 06 00       	cmp    WORD PTR [esi+0x6],0x0
  4f1e5e:	74 11                	je     0x4f1e71
  4f1e60:	68 dd 00 00 00       	push   0xdd
  4f1e65:	57                   	push   edi
  4f1e66:	e8 2f 02 f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4f1e6b:	83 c4 08             	add    esp,0x8
  4f1e6e:	eb 01                	jmp    0x4f1e71
