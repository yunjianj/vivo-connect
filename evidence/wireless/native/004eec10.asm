; BleGattClient::safeclose; image base 0x400000; static annotation only
  4eec10:	55                   	push   ebp
  4eec11:	8b ec                	mov    ebp,esp
  4eec13:	6a ff                	push   0xffffffff
  4eec15:	68 c5 da 67 00       	push   0x67dac5
  4eec1a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  4eec20:	50                   	push   eax
  4eec21:	83 ec 58             	sub    esp,0x58
  4eec24:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  4eec29:	33 c5                	xor    eax,ebp
  4eec2b:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4eec2e:	53                   	push   ebx
  4eec2f:	56                   	push   esi
  4eec30:	57                   	push   edi
  4eec31:	50                   	push   eax
  4eec32:	8d 45 f4             	lea    eax,[ebp-0xc]
  4eec35:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  4eec3b:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  4eec3e:	8b f1                	mov    esi,ecx
  4eec40:	b9 ec 86 7a 00       	mov    ecx,0x7a86ec
  4eec45:	e8 a4 9e f1 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  4eec4a:	6a 5c                	push   0x5c
  4eec4c:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4eec51:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  4eec58:	e8 09 9b 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4eec5d:	83 c4 08             	add    esp,0x8
  4eec60:	85 c0                	test   eax,eax
  4eec62:	74 12                	je     0x4eec76
  4eec64:	6a 5c                	push   0x5c
  4eec66:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4eec6b:	e8 f6 9a 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4eec70:	83 c4 08             	add    esp,0x8
  4eec73:	40                   	inc    eax
  4eec74:	eb 05                	jmp    0x4eec7b
  4eec76:	b8 88 de 6c 00       	mov    eax,0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4eec7b:	68 c4 e7 6c 00       	push   0x6ce7c4 ; ["BleGattClient::safeclose"]
  4eec80:	68 f0 00 00 00       	push   0xf0
  4eec85:	50                   	push   eax
  4eec86:	68 e4 e7 6c 00       	push   0x6ce7e4 ; ["[ConntctionModule][%s:%d][%s]: safeclose call ======\n"]
  4eec8b:	8d 45 b8             	lea    eax,[ebp-0x48]
  4eec8e:	c7 45 b8 02 00 00 00 	mov    DWORD PTR [ebp-0x48],0x2
  4eec95:	50                   	push   eax
  4eec96:	8d 45 d4             	lea    eax,[ebp-0x2c]
  4eec99:	50                   	push   eax
  4eec9a:	e8 6a 83 f1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4eec9f:	8b 55 e8             	mov    edx,DWORD PTR [ebp-0x18]
  4eeca2:	83 c4 18             	add    esp,0x18
  4eeca5:	83 fa 10             	cmp    edx,0x10
  4eeca8:	72 2e                	jb     0x4eecd8
  4eecaa:	8b 4d d4             	mov    ecx,DWORD PTR [ebp-0x2c]
  4eecad:	42                   	inc    edx
  4eecae:	8b c1                	mov    eax,ecx
  4eecb0:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4eecb6:	72 16                	jb     0x4eecce
  4eecb8:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4eecbb:	83 c2 23             	add    edx,0x23
  4eecbe:	2b c1                	sub    eax,ecx
  4eecc0:	83 c0 fc             	add    eax,0xfffffffc
  4eecc3:	83 f8 1f             	cmp    eax,0x1f
  4eecc6:	76 06                	jbe    0x4eecce
  4eecc8:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  4eecce:	52                   	push   edx
  4eeccf:	51                   	push   ecx
  4eecd0:	e8 c5 33 f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4eecd5:	83 c4 08             	add    esp,0x8
  4eecd8:	8d 45 b8             	lea    eax,[ebp-0x48]
  4eecdb:	c7 45 b8 00 00 00 00 	mov    DWORD PTR [ebp-0x48],0x0
  4eece2:	50                   	push   eax
  4eece3:	8d 7e 10             	lea    edi,[esi+0x10]
  4eece6:	57                   	push   edi
  4eece7:	e8 a6 7c f1 ff       	call   0x406992 ; ["call resolved=0x472e80 "]
  4eecec:	83 c4 08             	add    esp,0x8
  4eecef:	84 c0                	test   al,al
  4eecf1:	75 5c                	jne    0x4eed4f
  4eecf3:	8b 0f                	mov    ecx,DWORD PTR [edi]
  4eecf5:	85 c9                	test   ecx,ecx
  4eecf7:	75 04                	jne    0x4eecfd
  4eecf9:	33 c0                	xor    eax,eax
  4eecfb:	eb 18                	jmp    0x4eed15
  4eecfd:	8b 01                	mov    eax,DWORD PTR [ecx]
  4eecff:	8d 55 b4             	lea    edx,[ebp-0x4c]
  4eed02:	52                   	push   edx
  4eed03:	68 28 ac 6c 00       	push   0x6cac28
  4eed08:	51                   	push   ecx
  4eed09:	c7 45 b4 00 00 00 00 	mov    DWORD PTR [ebp-0x4c],0x0
  4eed10:	ff 10                	call   DWORD PTR [eax]
  4eed12:	8b 45 b4             	mov    eax,DWORD PTR [ebp-0x4c]
  4eed15:	89 45 b8             	mov    DWORD PTR [ebp-0x48],eax
  4eed18:	8b 08                	mov    ecx,DWORD PTR [eax]
  4eed1a:	50                   	push   eax
  4eed1b:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  4eed1f:	ff 51 18             	call   DWORD PTR [ecx+0x18]
  4eed22:	85 c0                	test   eax,eax
  4eed24:	0f 88 87 02 00 00    	js     0x4eefb1
  4eed2a:	8d 4d b8             	lea    ecx,[ebp-0x48]
  4eed2d:	c6 45 fc 00          	mov    BYTE PTR [ebp-0x4],0x0
  4eed31:	e8 c4 69 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4eed36:	8d 45 b0             	lea    eax,[ebp-0x50]
  4eed39:	3b f8                	cmp    edi,eax
  4eed3b:	74 12                	je     0x4eed4f
  4eed3d:	83 3f 00             	cmp    DWORD PTR [edi],0x0
  4eed40:	74 07                	je     0x4eed49
  4eed42:	8b cf                	mov    ecx,edi
  4eed44:	e8 b1 69 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4eed49:	c7 07 00 00 00 00    	mov    DWORD PTR [edi],0x0
  4eed4f:	8d 45 b8             	lea    eax,[ebp-0x48]
  4eed52:	c7 45 b8 00 00 00 00 	mov    DWORD PTR [ebp-0x48],0x0
  4eed59:	50                   	push   eax
  4eed5a:	56                   	push   esi
  4eed5b:	e8 32 7c f1 ff       	call   0x406992 ; ["call resolved=0x472e80 "]
  4eed60:	83 c4 08             	add    esp,0x8
  4eed63:	84 c0                	test   al,al
  4eed65:	75 71                	jne    0x4eedd8
  4eed67:	8b 0e                	mov    ecx,DWORD PTR [esi]
  4eed69:	85 c9                	test   ecx,ecx
  4eed6b:	75 04                	jne    0x4eed71
  4eed6d:	33 c0                	xor    eax,eax
  4eed6f:	eb 18                	jmp    0x4eed89
  4eed71:	8b 01                	mov    eax,DWORD PTR [ecx]
  4eed73:	8d 55 b8             	lea    edx,[ebp-0x48]
  4eed76:	52                   	push   edx
  4eed77:	68 28 ac 6c 00       	push   0x6cac28
  4eed7c:	51                   	push   ecx
  4eed7d:	c7 45 b8 00 00 00 00 	mov    DWORD PTR [ebp-0x48],0x0
  4eed84:	ff 10                	call   DWORD PTR [eax]
  4eed86:	8b 45 b8             	mov    eax,DWORD PTR [ebp-0x48]
  4eed89:	89 45 b4             	mov    DWORD PTR [ebp-0x4c],eax
  4eed8c:	8b 08                	mov    ecx,DWORD PTR [eax]
  4eed8e:	50                   	push   eax
  4eed8f:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  4eed93:	ff 51 18             	call   DWORD PTR [ecx+0x18]
  4eed96:	85 c0                	test   eax,eax
  4eed98:	0f 88 19 02 00 00    	js     0x4eefb7
  4eed9e:	8d 4d b4             	lea    ecx,[ebp-0x4c]
  4eeda1:	e8 54 69 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4eeda6:	8b 06                	mov    eax,DWORD PTR [esi]
  4eeda8:	ff 76 0c             	push   DWORD PTR [esi+0xc]
  4eedab:	ff 76 08             	push   DWORD PTR [esi+0x8]
  4eedae:	8b 08                	mov    ecx,DWORD PTR [eax]
  4eedb0:	50                   	push   eax
  4eedb1:	ff 51 44             	call   DWORD PTR [ecx+0x44]
  4eedb4:	8d 45 ac             	lea    eax,[ebp-0x54]
  4eedb7:	3b f0                	cmp    esi,eax
  4eedb9:	74 12                	je     0x4eedcd
  4eedbb:	83 3e 00             	cmp    DWORD PTR [esi],0x0
  4eedbe:	74 07                	je     0x4eedc7
  4eedc0:	8b ce                	mov    ecx,esi
  4eedc2:	e8 33 69 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4eedc7:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  4eedcd:	68 f4 01 00 00       	push   0x1f4
  4eedd2:	ff 15 38 e0 79 00    	call   DWORD PTR ds:0x79e038
  4eedd8:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  4eeddb:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  4eede2:	59                   	pop    ecx
  4eede3:	5f                   	pop    edi
  4eede4:	5e                   	pop    esi
  4eede5:	5b                   	pop    ebx
  4eede6:	8b 4d ec             	mov    ecx,DWORD PTR [ebp-0x14]
  4eede9:	33 cd                	xor    ecx,ebp
  4eedeb:	e8 9f 56 f1 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  4eedf0:	8b e5                	mov    esp,ebp
  4eedf2:	5d                   	pop    ebp
  4eedf3:	c3                   	ret
  4eedf4:	8b 75 a8             	mov    esi,DWORD PTR [ebp-0x58]
  4eedf7:	8d 45 b4             	lea    eax,[ebp-0x4c]
  4eedfa:	50                   	push   eax
  4eedfb:	8b ce                	mov    ecx,esi
  4eedfd:	e8 88 47 f1 ff       	call   0x40358a ; ["call resolved=0x4bf770 "]
  4eee02:	8d 4d a0             	lea    ecx,[ebp-0x60]
  4eee05:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  4eee09:	51                   	push   ecx
  4eee0a:	8b c8                	mov    ecx,eax
  4eee0c:	e8 50 a7 f1 ff       	call   0x409561 ; ["call resolved=0x472f70 "]
  4eee11:	ff 70 04             	push   DWORD PTR [eax+0x4]
  4eee14:	ff 30                	push   DWORD PTR [eax]
  4eee16:	8d 45 d4             	lea    eax,[ebp-0x2c]
  4eee19:	50                   	push   eax
  4eee1a:	e8 74 70 f1 ff       	call   0x405e93 ; ["call resolved=0x4a64f0 "]
  4eee1f:	83 c4 0c             	add    esp,0xc
  4eee22:	8b c8                	mov    ecx,eax
  4eee24:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  4eee28:	e8 2a 8e f1 ff       	call   0x407c57 ; ["call resolved=0x4816c0 "]
  4eee2d:	8b 76 08             	mov    esi,DWORD PTR [esi+0x8]
  4eee30:	8b f8                	mov    edi,eax
  4eee32:	6a 5c                	push   0x5c
  4eee34:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4eee39:	e8 28 99 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4eee3e:	83 c4 08             	add    esp,0x8
  4eee41:	85 c0                	test   eax,eax
  4eee43:	74 12                	je     0x4eee57
  4eee45:	6a 5c                	push   0x5c
  4eee47:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4eee4c:	e8 15 99 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4eee51:	83 c4 08             	add    esp,0x8
  4eee54:	40                   	inc    eax
  4eee55:	eb 05                	jmp    0x4eee5c
  4eee57:	b8 88 de 6c 00       	mov    eax,0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4eee5c:	57                   	push   edi
  4eee5d:	56                   	push   esi
  4eee5e:	68 c4 e7 6c 00       	push   0x6ce7c4 ; ["BleGattClient::safeclose"]
  4eee63:	68 fe 00 00 00       	push   0xfe
  4eee68:	50                   	push   eax
  4eee69:	68 68 bf 6c 00       	push   0x6cbf68 ; ["[ConntctionModule][%s:%d][%s]: ble  connect::hresult_error 0x%08x message %s\n"]
  4eee6e:	8d 45 b8             	lea    eax,[ebp-0x48]
  4eee71:	c7 45 b8 04 00 00 00 	mov    DWORD PTR [ebp-0x48],0x4
  4eee78:	50                   	push   eax
  4eee79:	8d 45 bc             	lea    eax,[ebp-0x44]
  4eee7c:	50                   	push   eax
  4eee7d:	e8 87 81 f1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4eee82:	8b 4d e8             	mov    ecx,DWORD PTR [ebp-0x18]
  4eee85:	83 c4 20             	add    esp,0x20
  4eee88:	83 f9 10             	cmp    ecx,0x10
  4eee8b:	0f 93 c0             	setae  al
  4eee8e:	84 c0                	test   al,al
  4eee90:	74 2c                	je     0x4eeebe
  4eee92:	8b 45 d4             	mov    eax,DWORD PTR [ebp-0x2c]
  4eee95:	41                   	inc    ecx
  4eee96:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  4eee9c:	72 16                	jb     0x4eeeb4
  4eee9e:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  4eeea1:	83 c1 23             	add    ecx,0x23
  4eeea4:	2b c2                	sub    eax,edx
  4eeea6:	83 c0 fc             	add    eax,0xfffffffc
  4eeea9:	83 f8 1f             	cmp    eax,0x1f
  4eeeac:	0f 87 16 fe ff ff    	ja     0x4eecc8
  4eeeb2:	8b c2                	mov    eax,edx
  4eeeb4:	51                   	push   ecx
  4eeeb5:	50                   	push   eax
  4eeeb6:	e8 df 31 f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4eeebb:	83 c4 08             	add    esp,0x8
  4eeebe:	8b 45 b4             	mov    eax,DWORD PTR [ebp-0x4c]
  4eeec1:	85 c0                	test   eax,eax
  4eeec3:	c7 45 e4 00 00 00 00 	mov    DWORD PTR [ebp-0x1c],0x0
  4eeeca:	0f 95 c1             	setne  cl
  4eeecd:	c7 45 e8 0f 00 00 00 	mov    DWORD PTR [ebp-0x18],0xf
  4eeed4:	c6 45 d4 00          	mov    BYTE PTR [ebp-0x2c],0x0
  4eeed8:	84 c9                	test   cl,cl
  4eeeda:	74 06                	je     0x4eeee2
  4eeedc:	50                   	push   eax
  4eeedd:	e8 9c 9b 17 00       	call   0x668a7e ; ["call resolved=0x668a7e "]
  4eeee2:	8b 4d d0             	mov    ecx,DWORD PTR [ebp-0x30]
  4eeee5:	83 f9 10             	cmp    ecx,0x10
  4eeee8:	0f 93 c0             	setae  al
  4eeeeb:	84 c0                	test   al,al
  4eeeed:	74 2c                	je     0x4eef1b
  4eeeef:	8b 45 bc             	mov    eax,DWORD PTR [ebp-0x44]
  4eeef2:	41                   	inc    ecx
  4eeef3:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  4eeef9:	72 16                	jb     0x4eef11
  4eeefb:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  4eeefe:	83 c1 23             	add    ecx,0x23
  4eef01:	2b c2                	sub    eax,edx
  4eef03:	83 c0 fc             	add    eax,0xfffffffc
  4eef06:	83 f8 1f             	cmp    eax,0x1f
  4eef09:	0f 87 b9 fd ff ff    	ja     0x4eecc8
  4eef0f:	8b c2                	mov    eax,edx
  4eef11:	51                   	push   ecx
  4eef12:	50                   	push   eax
  4eef13:	e8 82 31 f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4eef18:	83 c4 08             	add    esp,0x8
  4eef1b:	b8 d8 ed 4e 00       	mov    eax,0x4eedd8
  4eef20:	c3                   	ret
  4eef21:	6a 5c                	push   0x5c
  4eef23:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4eef28:	e8 39 98 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4eef2d:	83 c4 08             	add    esp,0x8
  4eef30:	85 c0                	test   eax,eax
  4eef32:	74 12                	je     0x4eef46
  4eef34:	6a 5c                	push   0x5c
  4eef36:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4eef3b:	e8 26 98 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4eef40:	83 c4 08             	add    esp,0x8
  4eef43:	40                   	inc    eax
  4eef44:	eb 05                	jmp    0x4eef4b
  4eef46:	b8 88 de 6c 00       	mov    eax,0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4eef4b:	68 c4 e7 6c 00       	push   0x6ce7c4 ; ["BleGattClient::safeclose"]
  4eef50:	68 02 01 00 00       	push   0x102
  4eef55:	50                   	push   eax
  4eef56:	68 c8 bf 6c 00       	push   0x6cbfc8 ; ["[ConntctionModule][%s:%d][%s]: ble connect catch error!\n"]
  4eef5b:	8d 45 b8             	lea    eax,[ebp-0x48]
  4eef5e:	c7 45 b8 04 00 00 00 	mov    DWORD PTR [ebp-0x48],0x4
  4eef65:	50                   	push   eax
  4eef66:	8d 45 bc             	lea    eax,[ebp-0x44]
  4eef69:	50                   	push   eax
  4eef6a:	e8 9a 80 f1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4eef6f:	8b 4d d0             	mov    ecx,DWORD PTR [ebp-0x30]
  4eef72:	83 c4 18             	add    esp,0x18
  4eef75:	83 f9 10             	cmp    ecx,0x10
  4eef78:	0f 93 c0             	setae  al
  4eef7b:	84 c0                	test   al,al
  4eef7d:	74 2c                	je     0x4eefab
  4eef7f:	8b 45 bc             	mov    eax,DWORD PTR [ebp-0x44]
  4eef82:	41                   	inc    ecx
  4eef83:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  4eef89:	72 16                	jb     0x4eefa1
  4eef8b:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  4eef8e:	83 c1 23             	add    ecx,0x23
  4eef91:	2b c2                	sub    eax,edx
  4eef93:	83 c0 fc             	add    eax,0xfffffffc
  4eef96:	83 f8 1f             	cmp    eax,0x1f
  4eef99:	0f 87 29 fd ff ff    	ja     0x4eecc8
  4eef9f:	8b c2                	mov    eax,edx
  4eefa1:	51                   	push   ecx
  4eefa2:	50                   	push   eax
  4eefa3:	e8 f2 30 f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4eefa8:	83 c4 08             	add    esp,0x8
  4eefab:	b8 d8 ed 4e 00       	mov    eax,0x4eedd8
  4eefb0:	c3                   	ret
  4eefb1:	50                   	push   eax
  4eefb2:	e8 41 23 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4eefb7:	50                   	push   eax
  4eefb8:	e8 3b 23 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
