; BleGattClient::BLEConnectionStatusChanged; image base 0x400000; static annotation only
  4e4a30:	55                   	push   ebp
  4e4a31:	8b ec                	mov    ebp,esp
  4e4a33:	6a ff                	push   0xffffffff
  4e4a35:	68 05 c5 67 00       	push   0x67c505
  4e4a3a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  4e4a40:	50                   	push   eax
  4e4a41:	83 ec 20             	sub    esp,0x20
  4e4a44:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  4e4a49:	33 c5                	xor    eax,ebp
  4e4a4b:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  4e4a4e:	56                   	push   esi
  4e4a4f:	50                   	push   eax
  4e4a50:	8d 45 f4             	lea    eax,[ebp-0xc]
  4e4a53:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  4e4a59:	8b f1                	mov    esi,ecx
  4e4a5b:	b9 ec 86 7a 00       	mov    ecx,0x7a86ec
  4e4a60:	c7 45 fc 01 00 00 00 	mov    DWORD PTR [ebp-0x4],0x1
  4e4a67:	e8 82 40 f2 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  4e4a6c:	8b 45 08             	mov    eax,DWORD PTR [ebp+0x8]
  4e4a6f:	8d 55 d4             	lea    edx,[ebp-0x2c]
  4e4a72:	52                   	push   edx
  4e4a73:	50                   	push   eax
  4e4a74:	8b 08                	mov    ecx,DWORD PTR [eax]
  4e4a76:	ff 51 24             	call   DWORD PTR [ecx+0x24]
  4e4a79:	85 c0                	test   eax,eax
  4e4a7b:	0f 88 dc 01 00 00    	js     0x4e4c5d
  4e4a81:	83 7d d4 00          	cmp    DWORD PTR [ebp-0x2c],0x0
  4e4a85:	6a 5c                	push   0x5c
  4e4a87:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4e4a8c:	0f 85 bd 00 00 00    	jne    0x4e4b4f
  4e4a92:	c7 46 30 00 00 00 00 	mov    DWORD PTR [esi+0x30],0x0
  4e4a99:	e8 c8 3c 18 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4e4a9e:	83 c4 08             	add    esp,0x8
  4e4aa1:	85 c0                	test   eax,eax
  4e4aa3:	74 12                	je     0x4e4ab7
  4e4aa5:	6a 5c                	push   0x5c
  4e4aa7:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4e4aac:	e8 b5 3c 18 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4e4ab1:	83 c4 08             	add    esp,0x8
  4e4ab4:	40                   	inc    eax
  4e4ab5:	eb 05                	jmp    0x4e4abc
  4e4ab7:	b8 88 de 6c 00       	mov    eax,0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4e4abc:	68 90 e5 6c 00       	push   0x6ce590 ; ["BleGattClient::BLEConnectionStatusChanged"]
  4e4ac1:	68 d0 00 00 00       	push   0xd0
  4e4ac6:	50                   	push   eax
  4e4ac7:	68 c8 e5 6c 00       	push   0x6ce5c8 ; ["[ConntctionModule][%s:%d][%s]: BLEConnectionStatusChanged Disconnected =================== \n"]
  4e4acc:	8d 45 d4             	lea    eax,[ebp-0x2c]
  4e4acf:	c7 45 d4 02 00 00 00 	mov    DWORD PTR [ebp-0x2c],0x2
  4e4ad6:	50                   	push   eax
  4e4ad7:	8d 45 d8             	lea    eax,[ebp-0x28]
  4e4ada:	50                   	push   eax
  4e4adb:	e8 29 25 f2 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4e4ae0:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  4e4ae3:	83 c4 18             	add    esp,0x18
  4e4ae6:	83 fa 10             	cmp    edx,0x10
  4e4ae9:	72 2c                	jb     0x4e4b17
  4e4aeb:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  4e4aee:	42                   	inc    edx
  4e4aef:	8b c1                	mov    eax,ecx
  4e4af1:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4e4af7:	72 14                	jb     0x4e4b0d
  4e4af9:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4e4afc:	83 c2 23             	add    edx,0x23
  4e4aff:	2b c1                	sub    eax,ecx
  4e4b01:	83 c0 fc             	add    eax,0xfffffffc
  4e4b04:	83 f8 1f             	cmp    eax,0x1f
  4e4b07:	0f 87 4a 01 00 00    	ja     0x4e4c57
  4e4b0d:	52                   	push   edx
  4e4b0e:	51                   	push   ecx
  4e4b0f:	e8 86 d5 f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4e4b14:	83 c4 08             	add    esp,0x8
  4e4b17:	83 7d 08 00          	cmp    DWORD PTR [ebp+0x8],0x0
  4e4b1b:	74 08                	je     0x4e4b25
  4e4b1d:	8d 4d 08             	lea    ecx,[ebp+0x8]
  4e4b20:	e8 d5 0b f2 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4e4b25:	83 7d 0c 00          	cmp    DWORD PTR [ebp+0xc],0x0
  4e4b29:	74 08                	je     0x4e4b33
  4e4b2b:	8d 4d 0c             	lea    ecx,[ebp+0xc]
  4e4b2e:	e8 c7 0b f2 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4e4b33:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  4e4b36:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  4e4b3d:	59                   	pop    ecx
  4e4b3e:	5e                   	pop    esi
  4e4b3f:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  4e4b42:	33 cd                	xor    ecx,ebp
  4e4b44:	e8 46 f9 f1 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  4e4b49:	8b e5                	mov    esp,ebp
  4e4b4b:	5d                   	pop    ebp
  4e4b4c:	c2 08 00             	ret    0x8
  4e4b4f:	e8 12 3c 18 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4e4b54:	83 c4 08             	add    esp,0x8
  4e4b57:	85 c0                	test   eax,eax
  4e4b59:	74 12                	je     0x4e4b6d
  4e4b5b:	6a 5c                	push   0x5c
  4e4b5d:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4e4b62:	e8 ff 3b 18 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4e4b67:	83 c4 08             	add    esp,0x8
  4e4b6a:	40                   	inc    eax
  4e4b6b:	eb 05                	jmp    0x4e4b72
  4e4b6d:	b8 88 de 6c 00       	mov    eax,0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4e4b72:	68 90 e5 6c 00       	push   0x6ce590 ; ["BleGattClient::BLEConnectionStatusChanged"]
  4e4b77:	68 d5 00 00 00       	push   0xd5
  4e4b7c:	50                   	push   eax
  4e4b7d:	68 38 e6 6c 00       	push   0x6ce638 ; ["[ConntctionModule][%s:%d][%s]: BLEConnectionStatusChanged Connected =================== \n"]
  4e4b82:	8d 45 d4             	lea    eax,[ebp-0x2c]
  4e4b85:	c7 45 d4 02 00 00 00 	mov    DWORD PTR [ebp-0x2c],0x2
  4e4b8c:	50                   	push   eax
  4e4b8d:	8d 45 d8             	lea    eax,[ebp-0x28]
  4e4b90:	50                   	push   eax
  4e4b91:	e8 73 24 f2 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4e4b96:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  4e4b99:	83 c4 18             	add    esp,0x18
  4e4b9c:	83 fa 10             	cmp    edx,0x10
  4e4b9f:	72 2c                	jb     0x4e4bcd
  4e4ba1:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  4e4ba4:	42                   	inc    edx
  4e4ba5:	8b c1                	mov    eax,ecx
  4e4ba7:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4e4bad:	72 14                	jb     0x4e4bc3
  4e4baf:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4e4bb2:	83 c2 23             	add    edx,0x23
  4e4bb5:	2b c1                	sub    eax,ecx
  4e4bb7:	83 c0 fc             	add    eax,0xfffffffc
  4e4bba:	83 f8 1f             	cmp    eax,0x1f
  4e4bbd:	0f 87 94 00 00 00    	ja     0x4e4c57
  4e4bc3:	52                   	push   edx
  4e4bc4:	51                   	push   ecx
  4e4bc5:	e8 d0 d4 f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4e4bca:	83 c4 08             	add    esp,0x8
  4e4bcd:	6a 5c                	push   0x5c
  4e4bcf:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4e4bd4:	c7 46 30 01 00 00 00 	mov    DWORD PTR [esi+0x30],0x1
  4e4bdb:	e8 86 3b 18 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4e4be0:	83 c4 08             	add    esp,0x8
  4e4be3:	85 c0                	test   eax,eax
  4e4be5:	74 12                	je     0x4e4bf9
  4e4be7:	6a 5c                	push   0x5c
  4e4be9:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4e4bee:	e8 73 3b 18 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4e4bf3:	83 c4 08             	add    esp,0x8
  4e4bf6:	40                   	inc    eax
  4e4bf7:	eb 05                	jmp    0x4e4bfe
  4e4bf9:	b8 88 de 6c 00       	mov    eax,0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4e4bfe:	68 90 e5 6c 00       	push   0x6ce590 ; ["BleGattClient::BLEConnectionStatusChanged"]
  4e4c03:	68 d7 00 00 00       	push   0xd7
  4e4c08:	50                   	push   eax
  4e4c09:	68 a4 e6 6c 00       	push   0x6ce6a4 ; ["[ConntctionModule][%s:%d][%s]: Statistical test2\n"]
  4e4c0e:	8d 45 d4             	lea    eax,[ebp-0x2c]
  4e4c11:	c7 45 d4 02 00 00 00 	mov    DWORD PTR [ebp-0x2c],0x2
  4e4c18:	50                   	push   eax
  4e4c19:	8d 45 d8             	lea    eax,[ebp-0x28]
  4e4c1c:	50                   	push   eax
  4e4c1d:	e8 e7 23 f2 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4e4c22:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  4e4c25:	83 c4 18             	add    esp,0x18
  4e4c28:	83 fa 10             	cmp    edx,0x10
  4e4c2b:	0f 82 e6 fe ff ff    	jb     0x4e4b17
  4e4c31:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  4e4c34:	42                   	inc    edx
  4e4c35:	8b c1                	mov    eax,ecx
  4e4c37:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4e4c3d:	0f 82 ca fe ff ff    	jb     0x4e4b0d
  4e4c43:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4e4c46:	83 c2 23             	add    edx,0x23
  4e4c49:	2b c1                	sub    eax,ecx
  4e4c4b:	83 c0 fc             	add    eax,0xfffffffc
  4e4c4e:	83 f8 1f             	cmp    eax,0x1f
  4e4c51:	0f 86 b6 fe ff ff    	jbe    0x4e4b0d
  4e4c57:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  4e4c5d:	50                   	push   eax
  4e4c5e:	e8 95 c6 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
