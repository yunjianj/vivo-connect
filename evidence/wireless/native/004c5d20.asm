; BleScanner::start; image base 0x400000; static annotation only
  4c5d20:	55                   	push   ebp
  4c5d21:	8b ec                	mov    ebp,esp
  4c5d23:	6a ff                	push   0xffffffff
  4c5d25:	68 8d 90 67 00       	push   0x67908d
  4c5d2a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  4c5d30:	50                   	push   eax
  4c5d31:	83 ec 60             	sub    esp,0x60
  4c5d34:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  4c5d39:	33 c5                	xor    eax,ebp
  4c5d3b:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4c5d3e:	53                   	push   ebx
  4c5d3f:	56                   	push   esi
  4c5d40:	57                   	push   edi
  4c5d41:	50                   	push   eax
  4c5d42:	8d 45 f4             	lea    eax,[ebp-0xc]
  4c5d45:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  4c5d4b:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  4c5d4e:	8b d9                	mov    ebx,ecx
  4c5d50:	b9 6a 83 7a 00       	mov    ecx,0x7a836a
  4c5d55:	89 5d a0             	mov    DWORD PTR [ebp-0x60],ebx
  4c5d58:	e8 91 2d f4 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  4c5d5d:	6a 5c                	push   0x5c
  4c5d5f:	68 90 ad 6c 00       	push   0x6cad90 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\BleScanner.cpp"]
  4c5d64:	e8 fd 29 1a 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4c5d69:	83 c4 08             	add    esp,0x8
  4c5d6c:	85 c0                	test   eax,eax
  4c5d6e:	74 12                	je     0x4c5d82
  4c5d70:	6a 5c                	push   0x5c
  4c5d72:	68 90 ad 6c 00       	push   0x6cad90 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\BleScanner.cpp"]
  4c5d77:	e8 ea 29 1a 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4c5d7c:	83 c4 08             	add    esp,0x8
  4c5d7f:	40                   	inc    eax
  4c5d80:	eb 05                	jmp    0x4c5d87
  4c5d82:	b8 90 ad 6c 00       	mov    eax,0x6cad90 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\BleScanner.cpp"]
  4c5d87:	68 74 ad 6c 00       	push   0x6cad74 ; ["BleScanner::start"]
  4c5d8c:	6a 13                	push   0x13
  4c5d8e:	50                   	push   eax
  4c5d8f:	68 ec ad 6c 00       	push   0x6cadec ; ["[ConntctionModule][%s:%d][%s]: Start ble scan ...\n"]
  4c5d94:	8d 45 b8             	lea    eax,[ebp-0x48]
  4c5d97:	c7 45 b8 02 00 00 00 	mov    DWORD PTR [ebp-0x48],0x2
  4c5d9e:	50                   	push   eax
  4c5d9f:	8d 45 d4             	lea    eax,[ebp-0x2c]
  4c5da2:	50                   	push   eax
  4c5da3:	e8 61 12 f4 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4c5da8:	8b 55 e8             	mov    edx,DWORD PTR [ebp-0x18]
  4c5dab:	83 c4 18             	add    esp,0x18
  4c5dae:	83 fa 10             	cmp    edx,0x10
  4c5db1:	72 2e                	jb     0x4c5de1
  4c5db3:	8b 4d d4             	mov    ecx,DWORD PTR [ebp-0x2c]
  4c5db6:	42                   	inc    edx
  4c5db7:	8b c1                	mov    eax,ecx
  4c5db9:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4c5dbf:	72 16                	jb     0x4c5dd7
  4c5dc1:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4c5dc4:	83 c2 23             	add    edx,0x23
  4c5dc7:	2b c1                	sub    eax,ecx
  4c5dc9:	83 c0 fc             	add    eax,0xfffffffc
  4c5dcc:	83 f8 1f             	cmp    eax,0x1f
  4c5dcf:	76 06                	jbe    0x4c5dd7
  4c5dd1:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  4c5dd7:	52                   	push   edx
  4c5dd8:	51                   	push   ecx
  4c5dd9:	e8 bc c2 f3 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4c5dde:	83 c4 08             	add    esp,0x8
  4c5de1:	8d 45 ac             	lea    eax,[ebp-0x54]
  4c5de4:	50                   	push   eax
  4c5de5:	ff 15 78 de 79 00    	call   DWORD PTR ds:0x79de78
  4c5deb:	85 c0                	test   eax,eax
  4c5ded:	0f 85 87 00 00 00    	jne    0x4c5e7a
  4c5df3:	6a 5c                	push   0x5c
  4c5df5:	68 90 ad 6c 00       	push   0x6cad90 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\BleScanner.cpp"]
  4c5dfa:	e8 67 29 1a 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4c5dff:	83 c4 08             	add    esp,0x8
  4c5e02:	85 c0                	test   eax,eax
  4c5e04:	74 12                	je     0x4c5e18
  4c5e06:	6a 5c                	push   0x5c
  4c5e08:	68 90 ad 6c 00       	push   0x6cad90 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\BleScanner.cpp"]
  4c5e0d:	e8 54 29 1a 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4c5e12:	83 c4 08             	add    esp,0x8
  4c5e15:	40                   	inc    eax
  4c5e16:	eb 05                	jmp    0x4c5e1d
  4c5e18:	b8 90 ad 6c 00       	mov    eax,0x6cad90 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\BleScanner.cpp"]
  4c5e1d:	68 dc af 6c 00       	push   0x6cafdc ; ["BleScanner::StartCounter"]
  4c5e22:	68 01 01 00 00       	push   0x101
  4c5e27:	50                   	push   eax
  4c5e28:	68 b0 a6 6c 00       	push   0x6ca6b0 ; ["[ConntctionModule][%s:%d][%s]: QueryPerformanceFrequency failed!\n"]
  4c5e2d:	8d 45 b8             	lea    eax,[ebp-0x48]
  4c5e30:	c7 45 b8 02 00 00 00 	mov    DWORD PTR [ebp-0x48],0x2
  4c5e37:	50                   	push   eax
  4c5e38:	8d 45 d4             	lea    eax,[ebp-0x2c]
  4c5e3b:	50                   	push   eax
  4c5e3c:	e8 c8 11 f4 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4c5e41:	8b 55 e8             	mov    edx,DWORD PTR [ebp-0x18]
  4c5e44:	83 c4 18             	add    esp,0x18
  4c5e47:	83 fa 10             	cmp    edx,0x10
  4c5e4a:	72 2e                	jb     0x4c5e7a
  4c5e4c:	8b 4d d4             	mov    ecx,DWORD PTR [ebp-0x2c]
  4c5e4f:	42                   	inc    edx
  4c5e50:	8b c1                	mov    eax,ecx
  4c5e52:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4c5e58:	72 16                	jb     0x4c5e70
  4c5e5a:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4c5e5d:	83 c2 23             	add    edx,0x23
  4c5e60:	2b c1                	sub    eax,ecx
  4c5e62:	83 c0 fc             	add    eax,0xfffffffc
  4c5e65:	83 f8 1f             	cmp    eax,0x1f
  4c5e68:	76 06                	jbe    0x4c5e70
  4c5e6a:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  4c5e70:	52                   	push   edx
  4c5e71:	51                   	push   ecx
  4c5e72:	e8 23 c2 f3 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4c5e77:	83 c4 08             	add    esp,0x8
  4c5e7a:	8b 55 b0             	mov    edx,DWORD PTR [ebp-0x50]
  4c5e7d:	8b 4d ac             	mov    ecx,DWORD PTR [ebp-0x54]
  4c5e80:	e8 5e 41 f4 ff       	call   0x409fe3 ; ["call resolved=0x6674a0 "]
  4c5e85:	f2 0f 5e 05 10 aa 6c 	divsd  xmm0,QWORD PTR ds:0x6caa10
  4c5e8d:	8d 45 ac             	lea    eax,[ebp-0x54]
  4c5e90:	50                   	push   eax
  4c5e91:	f2 0f 11 43 20       	movsd  QWORD PTR [ebx+0x20],xmm0
  4c5e96:	ff 15 74 de 79 00    	call   DWORD PTR ds:0x79de74
  4c5e9c:	8b 45 ac             	mov    eax,DWORD PTR [ebp-0x54]
  4c5e9f:	8b 4d b0             	mov    ecx,DWORD PTR [ebp-0x50]
  4c5ea2:	90                   	nop
  4c5ea3:	89 45 a4             	mov    DWORD PTR [ebp-0x5c],eax
  4c5ea6:	89 4d a8             	mov    DWORD PTR [ebp-0x58],ecx
  4c5ea9:	f3 0f 7e 45 a4       	movq   xmm0,QWORD PTR [ebp-0x5c]
  4c5eae:	66 0f d6 43 18       	movq   QWORD PTR [ebx+0x18],xmm0
  4c5eb3:	90                   	nop
  4c5eb4:	f0 ff 45 a8          	lock inc DWORD PTR [ebp-0x58]
  4c5eb8:	90                   	nop
  4c5eb9:	8d 45 b7             	lea    eax,[ebp-0x49]
  4c5ebc:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  4c5ec3:	50                   	push   eax
  4c5ec4:	8d 45 b8             	lea    eax,[ebp-0x48]
  4c5ec7:	b9 a0 15 79 00       	mov    ecx,0x7915a0
  4c5ecc:	50                   	push   eax
  4c5ecd:	e8 eb 2f f4 ff       	call   0x408ebd ; ["call resolved=0x4438f0 "]
  4c5ed2:	8d 45 b8             	lea    eax,[ebp-0x48]
  4c5ed5:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  4c5ed9:	50                   	push   eax
  4c5eda:	8d 45 b0             	lea    eax,[ebp-0x50]
  4c5edd:	50                   	push   eax
  4c5ede:	e8 13 de f3 ff       	call   0x403cf6 ; ["call resolved=0x45d5f0 "]
  4c5ee3:	83 c4 08             	add    esp,0x8
  4c5ee6:	83 7d b8 00          	cmp    DWORD PTR [ebp-0x48],0x0
  4c5eea:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  4c5eee:	74 08                	je     0x4c5ef8
  4c5ef0:	8d 4d b8             	lea    ecx,[ebp-0x48]
  4c5ef3:	e8 02 f8 f3 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4c5ef8:	8b 45 b0             	mov    eax,DWORD PTR [ebp-0x50]
  4c5efb:	85 c0                	test   eax,eax
  4c5efd:	0f 84 eb 00 00 00    	je     0x4c5fee
  4c5f03:	8b 08                	mov    ecx,DWORD PTR [eax]
  4c5f05:	8d 55 b7             	lea    edx,[ebp-0x49]
  4c5f08:	52                   	push   edx
  4c5f09:	50                   	push   eax
  4c5f0a:	ff 51 24             	call   DWORD PTR [ecx+0x24]
  4c5f0d:	85 c0                	test   eax,eax
  4c5f0f:	0f 88 b9 02 00 00    	js     0x4c61ce
  4c5f15:	80 7d b7 00          	cmp    BYTE PTR [ebp-0x49],0x0
  4c5f19:	0f 84 cf 00 00 00    	je     0x4c5fee
  4c5f1f:	8d 45 b7             	lea    eax,[ebp-0x49]
  4c5f22:	b9 68 32 79 00       	mov    ecx,0x793268
  4c5f27:	50                   	push   eax
  4c5f28:	8d 45 b8             	lea    eax,[ebp-0x48]
  4c5f2b:	50                   	push   eax
  4c5f2c:	e8 88 f7 f3 ff       	call   0x4056b9 ; ["call resolved=0x4c1980 "]
  4c5f31:	8d 7b 04             	lea    edi,[ebx+0x4]
  4c5f34:	8d 45 b8             	lea    eax,[ebp-0x48]
  4c5f37:	3b f8                	cmp    edi,eax
  4c5f39:	74 13                	je     0x4c5f4e
  4c5f3b:	83 3f 00             	cmp    DWORD PTR [edi],0x0
  4c5f3e:	74 07                	je     0x4c5f47
  4c5f40:	8b cf                	mov    ecx,edi
  4c5f42:	e8 b3 f7 f3 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4c5f47:	8b 45 b8             	mov    eax,DWORD PTR [ebp-0x48]
  4c5f4a:	89 07                	mov    DWORD PTR [edi],eax
  4c5f4c:	eb 0e                	jmp    0x4c5f5c
  4c5f4e:	83 7d b8 00          	cmp    DWORD PTR [ebp-0x48],0x0
  4c5f52:	74 08                	je     0x4c5f5c
  4c5f54:	8d 4d b8             	lea    ecx,[ebp-0x48]
  4c5f57:	e8 9e f7 f3 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4c5f5c:	8b 0f                	mov    ecx,DWORD PTR [edi]
  4c5f5e:	6a 01                	push   0x1
  4c5f60:	51                   	push   ecx
  4c5f61:	8b 01                	mov    eax,DWORD PTR [ecx]
  4c5f63:	ff 50 30             	call   DWORD PTR [eax+0x30]
  4c5f66:	85 c0                	test   eax,eax
  4c5f68:	0f 88 66 02 00 00    	js     0x4c61d4
  4c5f6e:	6a 10                	push   0x10
  4c5f70:	e8 41 d2 f3 ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  4c5f75:	8b f0                	mov    esi,eax
  4c5f77:	83 c4 04             	add    esp,0x4
  4c5f7a:	85 f6                	test   esi,esi
  4c5f7c:	74 19                	je     0x4c5f97
  4c5f7e:	89 5e 04             	mov    DWORD PTR [esi+0x4],ebx
  4c5f81:	c7 46 08 46 6f 40 00 	mov    DWORD PTR [esi+0x8],0x406f46
  4c5f88:	c7 46 0c 01 00 00 00 	mov    DWORD PTR [esi+0xc],0x1
  4c5f8f:	c7 06 18 b0 6c 00    	mov    DWORD PTR [esi],0x6cb018
  4c5f95:	eb 02                	jmp    0x4c5f99
  4c5f97:	33 f6                	xor    esi,esi
  4c5f99:	89 75 b8             	mov    DWORD PTR [ebp-0x48],esi
  4c5f9c:	8b 0f                	mov    ecx,DWORD PTR [edi]
  4c5f9e:	8d 55 a4             	lea    edx,[ebp-0x5c]
  4c5fa1:	0f 57 c0             	xorps  xmm0,xmm0
  4c5fa4:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  4c5fa8:	52                   	push   edx
  4c5fa9:	66 0f 13 45 a4       	movlpd QWORD PTR [ebp-0x5c],xmm0
  4c5fae:	8b 01                	mov    eax,DWORD PTR [ecx]
  4c5fb0:	56                   	push   esi
  4c5fb1:	51                   	push   ecx
  4c5fb2:	ff 50 4c             	call   DWORD PTR [eax+0x4c]
  4c5fb5:	85 c0                	test   eax,eax
  4c5fb7:	0f 88 1d 02 00 00    	js     0x4c61da
  4c5fbd:	8b 45 a4             	mov    eax,DWORD PTR [ebp-0x5c]
  4c5fc0:	8b 4d a8             	mov    ecx,DWORD PTR [ebp-0x58]
  4c5fc3:	89 43 08             	mov    DWORD PTR [ebx+0x8],eax
  4c5fc6:	89 4b 0c             	mov    DWORD PTR [ebx+0xc],ecx
  4c5fc9:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  4c5fcd:	85 f6                	test   esi,esi
  4c5fcf:	74 08                	je     0x4c5fd9
  4c5fd1:	8d 4d b8             	lea    ecx,[ebp-0x48]
  4c5fd4:	e8 21 f7 f3 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4c5fd9:	8b 07                	mov    eax,DWORD PTR [edi]
  4c5fdb:	50                   	push   eax
  4c5fdc:	8b 08                	mov    ecx,DWORD PTR [eax]
  4c5fde:	ff 51 44             	call   DWORD PTR [ecx+0x44]
  4c5fe1:	85 c0                	test   eax,eax
  4c5fe3:	0f 88 f7 01 00 00    	js     0x4c61e0
  4c5fe9:	e9 84 00 00 00       	jmp    0x4c6072
  4c5fee:	6a 5c                	push   0x5c
  4c5ff0:	68 90 ad 6c 00       	push   0x6cad90 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\BleScanner.cpp"]
  4c5ff5:	e8 6c 27 1a 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4c5ffa:	83 c4 08             	add    esp,0x8
  4c5ffd:	85 c0                	test   eax,eax
  4c5fff:	74 12                	je     0x4c6013
  4c6001:	6a 5c                	push   0x5c
  4c6003:	68 90 ad 6c 00       	push   0x6cad90 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\BleScanner.cpp"]
  4c6008:	e8 59 27 1a 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4c600d:	83 c4 08             	add    esp,0x8
  4c6010:	40                   	inc    eax
  4c6011:	eb 05                	jmp    0x4c6018
  4c6013:	b8 90 ad 6c 00       	mov    eax,0x6cad90 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\BleScanner.cpp"]
  4c6018:	68 74 ad 6c 00       	push   0x6cad74 ; ["BleScanner::start"]
  4c601d:	6a 3a                	push   0x3a
  4c601f:	50                   	push   eax
  4c6020:	68 30 ae 6c 00       	push   0x6cae30 ; ["[ConntctionModule][%s:%d][%s]: BLE not supported or adapter unavailable\n"]
  4c6025:	8d 45 b8             	lea    eax,[ebp-0x48]
  4c6028:	c7 45 b8 03 00 00 00 	mov    DWORD PTR [ebp-0x48],0x3
  4c602f:	50                   	push   eax
  4c6030:	8d 45 d4             	lea    eax,[ebp-0x2c]
  4c6033:	50                   	push   eax
  4c6034:	e8 d0 0f f4 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4c6039:	8b 55 e8             	mov    edx,DWORD PTR [ebp-0x18]
  4c603c:	83 c4 18             	add    esp,0x18
  4c603f:	83 fa 10             	cmp    edx,0x10
  4c6042:	72 2e                	jb     0x4c6072
  4c6044:	8b 4d d4             	mov    ecx,DWORD PTR [ebp-0x2c]
  4c6047:	42                   	inc    edx
  4c6048:	8b c1                	mov    eax,ecx
  4c604a:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4c6050:	72 16                	jb     0x4c6068
  4c6052:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4c6055:	83 c2 23             	add    edx,0x23
  4c6058:	2b c1                	sub    eax,ecx
  4c605a:	83 c0 fc             	add    eax,0xfffffffc
  4c605d:	83 f8 1f             	cmp    eax,0x1f
  4c6060:	76 06                	jbe    0x4c6068
  4c6062:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  4c6068:	52                   	push   edx
  4c6069:	51                   	push   ecx
  4c606a:	e8 2b c0 f3 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4c606f:	83 c4 08             	add    esp,0x8
  4c6072:	83 7d b0 00          	cmp    DWORD PTR [ebp-0x50],0x0
  4c6076:	74 08                	je     0x4c6080
  4c6078:	8d 4d b0             	lea    ecx,[ebp-0x50]
  4c607b:	e8 7a f6 f3 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4c6080:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  4c6083:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  4c608a:	59                   	pop    ecx
  4c608b:	5f                   	pop    edi
  4c608c:	5e                   	pop    esi
  4c608d:	5b                   	pop    ebx
  4c608e:	8b 4d ec             	mov    ecx,DWORD PTR [ebp-0x14]
  4c6091:	33 cd                	xor    ecx,ebp
  4c6093:	e8 f7 e3 f3 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  4c6098:	8b e5                	mov    esp,ebp
  4c609a:	5d                   	pop    ebp
  4c609b:	c3                   	ret
  4c609c:	8b 4d a0             	mov    ecx,DWORD PTR [ebp-0x60]
  4c609f:	e8 9f b7 f3 ff       	call   0x401843 ; ["call resolved=0x4c5c80 "]
  4c60a4:	8b 75 9c             	mov    esi,DWORD PTR [ebp-0x64]
  4c60a7:	8d 45 a8             	lea    eax,[ebp-0x58]
  4c60aa:	50                   	push   eax
  4c60ab:	8b ce                	mov    ecx,esi
  4c60ad:	e8 d8 d4 f3 ff       	call   0x40358a ; ["call resolved=0x4bf770 "]
  4c60b2:	8d 4d 94             	lea    ecx,[ebp-0x6c]
  4c60b5:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  4c60b9:	51                   	push   ecx
  4c60ba:	8b c8                	mov    ecx,eax
  4c60bc:	e8 a0 34 f4 ff       	call   0x409561 ; ["call resolved=0x472f70 "]
  4c60c1:	ff 70 04             	push   DWORD PTR [eax+0x4]
  4c60c4:	ff 30                	push   DWORD PTR [eax]
  4c60c6:	8d 45 bc             	lea    eax,[ebp-0x44]
  4c60c9:	50                   	push   eax
  4c60ca:	e8 c4 fd f3 ff       	call   0x405e93 ; ["call resolved=0x4a64f0 "]
  4c60cf:	83 c4 0c             	add    esp,0xc
  4c60d2:	8b c8                	mov    ecx,eax
  4c60d4:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  4c60d8:	e8 7a 1b f4 ff       	call   0x407c57 ; ["call resolved=0x4816c0 "]
  4c60dd:	8b 76 08             	mov    esi,DWORD PTR [esi+0x8]
  4c60e0:	8b f8                	mov    edi,eax
  4c60e2:	6a 5c                	push   0x5c
  4c60e4:	68 90 ad 6c 00       	push   0x6cad90 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\BleScanner.cpp"]
  4c60e9:	e8 78 26 1a 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4c60ee:	83 c4 08             	add    esp,0x8
  4c60f1:	85 c0                	test   eax,eax
  4c60f3:	74 12                	je     0x4c6107
  4c60f5:	6a 5c                	push   0x5c
  4c60f7:	68 90 ad 6c 00       	push   0x6cad90 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\BleScanner.cpp"]
  4c60fc:	e8 65 26 1a 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4c6101:	83 c4 08             	add    esp,0x8
  4c6104:	40                   	inc    eax
  4c6105:	eb 05                	jmp    0x4c610c
  4c6107:	b8 90 ad 6c 00       	mov    eax,0x6cad90 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\BleScanner.cpp"]
  4c610c:	57                   	push   edi
  4c610d:	56                   	push   esi
  4c610e:	68 74 ad 6c 00       	push   0x6cad74 ; ["BleScanner::start"]
  4c6113:	6a 4a                	push   0x4a
  4c6115:	50                   	push   eax
  4c6116:	68 88 ae 6c 00       	push   0x6cae88 ; ["[ConntctionModule][%s:%d][%s]: ble  startBleScan::hresult_error 0x%08x message %s\n"]
  4c611b:	8d 45 a0             	lea    eax,[ebp-0x60]
  4c611e:	c7 45 a0 02 00 00 00 	mov    DWORD PTR [ebp-0x60],0x2
  4c6125:	50                   	push   eax
  4c6126:	8d 45 d4             	lea    eax,[ebp-0x2c]
  4c6129:	50                   	push   eax
  4c612a:	e8 da 0e f4 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4c612f:	8b 4d e8             	mov    ecx,DWORD PTR [ebp-0x18]
  4c6132:	83 c4 20             	add    esp,0x20
  4c6135:	83 f9 10             	cmp    ecx,0x10
  4c6138:	0f 93 c0             	setae  al
  4c613b:	84 c0                	test   al,al
  4c613d:	74 2c                	je     0x4c616b
  4c613f:	8b 45 d4             	mov    eax,DWORD PTR [ebp-0x2c]
  4c6142:	41                   	inc    ecx
  4c6143:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  4c6149:	72 16                	jb     0x4c6161
  4c614b:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  4c614e:	83 c1 23             	add    ecx,0x23
  4c6151:	2b c2                	sub    eax,edx
  4c6153:	83 c0 fc             	add    eax,0xfffffffc
  4c6156:	83 f8 1f             	cmp    eax,0x1f
  4c6159:	0f 87 72 fc ff ff    	ja     0x4c5dd1
  4c615f:	8b c2                	mov    eax,edx
  4c6161:	51                   	push   ecx
  4c6162:	50                   	push   eax
  4c6163:	e8 32 bf f3 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4c6168:	83 c4 08             	add    esp,0x8
  4c616b:	8b 4d d0             	mov    ecx,DWORD PTR [ebp-0x30]
  4c616e:	83 f9 10             	cmp    ecx,0x10
  4c6171:	0f 93 c0             	setae  al
  4c6174:	84 c0                	test   al,al
  4c6176:	74 2c                	je     0x4c61a4
  4c6178:	8b 45 bc             	mov    eax,DWORD PTR [ebp-0x44]
  4c617b:	41                   	inc    ecx
  4c617c:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  4c6182:	72 16                	jb     0x4c619a
  4c6184:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  4c6187:	83 c1 23             	add    ecx,0x23
  4c618a:	2b c2                	sub    eax,edx
  4c618c:	83 c0 fc             	add    eax,0xfffffffc
  4c618f:	83 f8 1f             	cmp    eax,0x1f
  4c6192:	0f 87 39 fc ff ff    	ja     0x4c5dd1
  4c6198:	8b c2                	mov    eax,edx
  4c619a:	51                   	push   ecx
  4c619b:	50                   	push   eax
  4c619c:	e8 f9 be f3 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4c61a1:	83 c4 08             	add    esp,0x8
  4c61a4:	8b 45 a8             	mov    eax,DWORD PTR [ebp-0x58]
  4c61a7:	85 c0                	test   eax,eax
  4c61a9:	c7 45 cc 00 00 00 00 	mov    DWORD PTR [ebp-0x34],0x0
  4c61b0:	0f 95 c1             	setne  cl
  4c61b3:	c7 45 d0 0f 00 00 00 	mov    DWORD PTR [ebp-0x30],0xf
  4c61ba:	c6 45 bc 00          	mov    BYTE PTR [ebp-0x44],0x0
  4c61be:	84 c9                	test   cl,cl
  4c61c0:	74 06                	je     0x4c61c8
  4c61c2:	50                   	push   eax
  4c61c3:	e8 b6 28 1a 00       	call   0x668a7e ; ["call resolved=0x668a7e "]
  4c61c8:	b8 80 60 4c 00       	mov    eax,0x4c6080
  4c61cd:	c3                   	ret
  4c61ce:	50                   	push   eax
  4c61cf:	e8 24 b1 f3 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4c61d4:	50                   	push   eax
  4c61d5:	e8 1e b1 f3 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4c61da:	50                   	push   eax
  4c61db:	e8 18 b1 f3 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4c61e0:	50                   	push   eax
  4c61e1:	e8 12 b1 f3 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
