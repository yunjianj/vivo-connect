; BleScanner::StartCounter; image base 0x400000; static annotation only
  4c4b80:	83 ec 2c             	sub    esp,0x2c
  4c4b83:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  4c4b88:	33 c4                	xor    eax,esp
  4c4b8a:	89 44 24 28          	mov    DWORD PTR [esp+0x28],eax
  4c4b8e:	56                   	push   esi
  4c4b8f:	8b f1                	mov    esi,ecx
  4c4b91:	b9 6a 83 7a 00       	mov    ecx,0x7a836a
  4c4b96:	e8 53 3f f4 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  4c4b9b:	8d 44 24 0c          	lea    eax,[esp+0xc]
  4c4b9f:	50                   	push   eax
  4c4ba0:	ff 15 78 de 79 00    	call   DWORD PTR ds:0x79de78
  4c4ba6:	85 c0                	test   eax,eax
  4c4ba8:	0f 85 8c 00 00 00    	jne    0x4c4c3a
  4c4bae:	6a 5c                	push   0x5c
  4c4bb0:	68 90 ad 6c 00       	push   0x6cad90 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\BleScanner.cpp"]
  4c4bb5:	e8 ac 3b 1a 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4c4bba:	83 c4 08             	add    esp,0x8
  4c4bbd:	85 c0                	test   eax,eax
  4c4bbf:	74 12                	je     0x4c4bd3
  4c4bc1:	6a 5c                	push   0x5c
  4c4bc3:	68 90 ad 6c 00       	push   0x6cad90 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\BleScanner.cpp"]
  4c4bc8:	e8 99 3b 1a 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4c4bcd:	83 c4 08             	add    esp,0x8
  4c4bd0:	40                   	inc    eax
  4c4bd1:	eb 05                	jmp    0x4c4bd8
  4c4bd3:	b8 90 ad 6c 00       	mov    eax,0x6cad90 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\BleScanner.cpp"]
  4c4bd8:	68 dc af 6c 00       	push   0x6cafdc ; ["BleScanner::StartCounter"]
  4c4bdd:	68 01 01 00 00       	push   0x101
  4c4be2:	50                   	push   eax
  4c4be3:	68 b0 a6 6c 00       	push   0x6ca6b0 ; ["[ConntctionModule][%s:%d][%s]: QueryPerformanceFrequency failed!\n"]
  4c4be8:	8d 44 24 14          	lea    eax,[esp+0x14]
  4c4bec:	c7 44 24 14 02 00 00 	mov    DWORD PTR [esp+0x14],0x2
  4c4bf4:	50                   	push   eax
  4c4bf5:	8d 44 24 28          	lea    eax,[esp+0x28]
  4c4bf9:	50                   	push   eax
  4c4bfa:	e8 0a 24 f4 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4c4bff:	8b 54 24 40          	mov    edx,DWORD PTR [esp+0x40]
  4c4c03:	83 c4 18             	add    esp,0x18
  4c4c06:	83 fa 10             	cmp    edx,0x10
  4c4c09:	72 2f                	jb     0x4c4c3a
  4c4c0b:	8b 4c 24 14          	mov    ecx,DWORD PTR [esp+0x14]
  4c4c0f:	42                   	inc    edx
  4c4c10:	8b c1                	mov    eax,ecx
  4c4c12:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4c4c18:	72 16                	jb     0x4c4c30
  4c4c1a:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4c4c1d:	83 c2 23             	add    edx,0x23
  4c4c20:	2b c1                	sub    eax,ecx
  4c4c22:	83 c0 fc             	add    eax,0xfffffffc
  4c4c25:	83 f8 1f             	cmp    eax,0x1f
  4c4c28:	76 06                	jbe    0x4c4c30
  4c4c2a:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  4c4c30:	52                   	push   edx
  4c4c31:	51                   	push   ecx
  4c4c32:	e8 63 d4 f3 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4c4c37:	83 c4 08             	add    esp,0x8
  4c4c3a:	8b 54 24 10          	mov    edx,DWORD PTR [esp+0x10]
  4c4c3e:	8b 4c 24 0c          	mov    ecx,DWORD PTR [esp+0xc]
  4c4c42:	e8 9c 53 f4 ff       	call   0x409fe3 ; ["call resolved=0x6674a0 "]
  4c4c47:	f2 0f 5e 05 10 aa 6c 	divsd  xmm0,QWORD PTR ds:0x6caa10
  4c4c4f:	8d 44 24 0c          	lea    eax,[esp+0xc]
  4c4c53:	50                   	push   eax
  4c4c54:	f2 0f 11 46 20       	movsd  QWORD PTR [esi+0x20],xmm0
  4c4c59:	ff 15 74 de 79 00    	call   DWORD PTR ds:0x79de74
  4c4c5f:	8b 44 24 0c          	mov    eax,DWORD PTR [esp+0xc]
  4c4c63:	8b 4c 24 10          	mov    ecx,DWORD PTR [esp+0x10]
  4c4c67:	90                   	nop
  4c4c68:	89 44 24 04          	mov    DWORD PTR [esp+0x4],eax
  4c4c6c:	89 4c 24 08          	mov    DWORD PTR [esp+0x8],ecx
  4c4c70:	f3 0f 7e 44 24 04    	movq   xmm0,QWORD PTR [esp+0x4]
  4c4c76:	66 0f d6 46 18       	movq   QWORD PTR [esi+0x18],xmm0
  4c4c7b:	90                   	nop
  4c4c7c:	f0 ff 44 24 04       	lock inc DWORD PTR [esp+0x4]
  4c4c81:	90                   	nop
  4c4c82:	8b 4c 24 2c          	mov    ecx,DWORD PTR [esp+0x2c]
  4c4c86:	5e                   	pop    esi
  4c4c87:	33 cc                	xor    ecx,esp
  4c4c89:	e8 01 f8 f3 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  4c4c8e:	83 c4 2c             	add    esp,0x2c
  4c4c91:	c3                   	ret
