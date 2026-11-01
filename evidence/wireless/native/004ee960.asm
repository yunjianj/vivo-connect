; BleGattClient::recv; image base 0x400000; static annotation only
  4ee960:	83 ec 20             	sub    esp,0x20
  4ee963:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  4ee968:	33 c4                	xor    eax,esp
  4ee96a:	89 44 24 1c          	mov    DWORD PTR [esp+0x1c],eax
  4ee96e:	53                   	push   ebx
  4ee96f:	8b 5c 24 2c          	mov    ebx,DWORD PTR [esp+0x2c]
  4ee973:	55                   	push   ebp
  4ee974:	56                   	push   esi
  4ee975:	8b f1                	mov    esi,ecx
  4ee977:	b9 ec 86 7a 00       	mov    ecx,0x7a86ec
  4ee97c:	57                   	push   edi
  4ee97d:	e8 6c a1 f1 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  4ee982:	8b 6c 24 34          	mov    ebp,DWORD PTR [esp+0x34]
  4ee986:	33 ff                	xor    edi,edi
  4ee988:	47                   	inc    edi
  4ee989:	83 7e 2c 00          	cmp    DWORD PTR [esi+0x2c],0x0
  4ee98d:	75 2e                	jne    0x4ee9bd
  4ee98f:	6a 64                	push   0x64
  4ee991:	ff 15 38 e0 79 00    	call   DWORD PTR ds:0x79e038
  4ee997:	8d 04 ad 00 00 00 00 	lea    eax,[ebp*4+0x0]
  4ee99e:	03 c5                	add    eax,ebp
  4ee9a0:	03 c0                	add    eax,eax
  4ee9a2:	3b f8                	cmp    edi,eax
  4ee9a4:	72 e2                	jb     0x4ee988
  4ee9a6:	5f                   	pop    edi
  4ee9a7:	5e                   	pop    esi
  4ee9a8:	5d                   	pop    ebp
  4ee9a9:	32 c0                	xor    al,al
  4ee9ab:	5b                   	pop    ebx
  4ee9ac:	8b 4c 24 1c          	mov    ecx,DWORD PTR [esp+0x1c]
  4ee9b0:	33 cc                	xor    ecx,esp
  4ee9b2:	e8 d8 5a f1 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  4ee9b7:	83 c4 20             	add    esp,0x20
  4ee9ba:	c2 08 00             	ret    0x8
  4ee9bd:	8b 4e 24             	mov    ecx,DWORD PTR [esi+0x24]
  4ee9c0:	8b 46 20             	mov    eax,DWORD PTR [esi+0x20]
  4ee9c3:	49                   	dec    ecx
  4ee9c4:	23 4e 28             	and    ecx,DWORD PTR [esi+0x28]
  4ee9c7:	8b 04 88             	mov    eax,DWORD PTR [eax+ecx*4]
  4ee9ca:	3b d8                	cmp    ebx,eax
  4ee9cc:	74 14                	je     0x4ee9e2
  4ee9ce:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  4ee9d2:	8b 48 10             	mov    ecx,DWORD PTR [eax+0x10]
  4ee9d5:	72 02                	jb     0x4ee9d9
  4ee9d7:	8b 00                	mov    eax,DWORD PTR [eax]
  4ee9d9:	51                   	push   ecx
  4ee9da:	50                   	push   eax
  4ee9db:	8b cb                	mov    ecx,ebx
  4ee9dd:	e8 35 5a f1 ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  4ee9e2:	8b 4e 24             	mov    ecx,DWORD PTR [esi+0x24]
  4ee9e5:	8b 46 20             	mov    eax,DWORD PTR [esi+0x20]
  4ee9e8:	49                   	dec    ecx
  4ee9e9:	23 4e 28             	and    ecx,DWORD PTR [esi+0x28]
  4ee9ec:	8b 0c 88             	mov    ecx,DWORD PTR [eax+ecx*4]
  4ee9ef:	e8 0f 50 f1 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  4ee9f4:	83 46 2c ff          	add    DWORD PTR [esi+0x2c],0xffffffff
  4ee9f8:	75 09                	jne    0x4eea03
  4ee9fa:	c7 46 28 00 00 00 00 	mov    DWORD PTR [esi+0x28],0x0
  4eea01:	eb 03                	jmp    0x4eea06
  4eea03:	ff 46 28             	inc    DWORD PTR [esi+0x28]
  4eea06:	83 7b 14 10          	cmp    DWORD PTR [ebx+0x14],0x10
  4eea0a:	72 02                	jb     0x4eea0e
  4eea0c:	8b 1b                	mov    ebx,DWORD PTR [ebx]
  4eea0e:	6a 5c                	push   0x5c
  4eea10:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4eea15:	e8 4c 9d 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4eea1a:	83 c4 08             	add    esp,0x8
  4eea1d:	85 c0                	test   eax,eax
  4eea1f:	74 12                	je     0x4eea33
  4eea21:	6a 5c                	push   0x5c
  4eea23:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4eea28:	e8 39 9d 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4eea2d:	83 c4 08             	add    esp,0x8
  4eea30:	40                   	inc    eax
  4eea31:	eb 05                	jmp    0x4eea38
  4eea33:	b8 88 de 6c 00       	mov    eax,0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4eea38:	53                   	push   ebx
  4eea39:	68 18 e5 6c 00       	push   0x6ce518 ; ["BleGattClient::recv"]
  4eea3e:	68 c2 00 00 00       	push   0xc2
  4eea43:	50                   	push   eax
  4eea44:	68 30 e5 6c 00       	push   0x6ce530 ; ["[ConntctionModule][%s:%d][%s]: Recv CharacteristicValueChanged, data is: %s \n"]
  4eea49:	8d 44 24 24          	lea    eax,[esp+0x24]
  4eea4d:	c7 44 24 24 02 00 00 	mov    DWORD PTR [esp+0x24],0x2
  4eea55:	50                   	push   eax
  4eea56:	8d 44 24 2c          	lea    eax,[esp+0x2c]
  4eea5a:	50                   	push   eax
  4eea5b:	e8 a9 85 f1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4eea60:	8b 54 24 44          	mov    edx,DWORD PTR [esp+0x44]
  4eea64:	83 c4 1c             	add    esp,0x1c
  4eea67:	83 fa 10             	cmp    edx,0x10
  4eea6a:	72 2f                	jb     0x4eea9b
  4eea6c:	8b 4c 24 14          	mov    ecx,DWORD PTR [esp+0x14]
  4eea70:	42                   	inc    edx
  4eea71:	8b c1                	mov    eax,ecx
  4eea73:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4eea79:	72 16                	jb     0x4eea91
  4eea7b:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4eea7e:	83 c2 23             	add    edx,0x23
  4eea81:	2b c1                	sub    eax,ecx
  4eea83:	83 c0 fc             	add    eax,0xfffffffc
  4eea86:	83 f8 1f             	cmp    eax,0x1f
  4eea89:	76 06                	jbe    0x4eea91
  4eea8b:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  4eea91:	52                   	push   edx
  4eea92:	51                   	push   ecx
  4eea93:	e8 02 36 f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4eea98:	83 c4 08             	add    esp,0x8
  4eea9b:	8b 4c 24 2c          	mov    ecx,DWORD PTR [esp+0x2c]
  4eea9f:	b0 01                	mov    al,0x1
  4eeaa1:	5f                   	pop    edi
  4eeaa2:	5e                   	pop    esi
  4eeaa3:	5d                   	pop    ebp
  4eeaa4:	5b                   	pop    ebx
  4eeaa5:	33 cc                	xor    ecx,esp
  4eeaa7:	e8 e3 59 f1 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  4eeaac:	83 c4 20             	add    esp,0x20
  4eeaaf:	c2 08 00             	ret    0x8
