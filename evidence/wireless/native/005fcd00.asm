; BluetoothClassicBase::init; image base 0x400000; static annotation only
  5fcd00:	81 ec 5c 02 00 00    	sub    esp,0x25c
  5fcd06:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5fcd0b:	33 c4                	xor    eax,esp
  5fcd0d:	89 84 24 58 02 00 00 	mov    DWORD PTR [esp+0x258],eax
  5fcd14:	8b 84 24 68 02 00 00 	mov    eax,DWORD PTR [esp+0x268]
  5fcd1b:	53                   	push   ebx
  5fcd1c:	8b 9c 24 68 02 00 00 	mov    ebx,DWORD PTR [esp+0x268]
  5fcd23:	56                   	push   esi
  5fcd24:	8b f1                	mov    esi,ecx
  5fcd26:	89 44 24 0c          	mov    DWORD PTR [esp+0xc],eax
  5fcd2a:	57                   	push   edi
  5fcd2b:	8b bc 24 6c 02 00 00 	mov    edi,DWORD PTR [esp+0x26c]
  5fcd32:	b9 d0 a6 7a 00       	mov    ecx,0x7aa6d0
  5fcd37:	e8 b2 bd e0 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5fcd3c:	8d 46 08             	lea    eax,[esi+0x8]
  5fcd3f:	50                   	push   eax
  5fcd40:	68 02 02 00 00       	push   0x202
  5fcd45:	ff 15 b0 d8 79 00    	call   DWORD PTR ds:0x79d8b0
  5fcd4b:	85 c0                	test   eax,eax
  5fcd4d:	0f 85 a1 00 00 00    	jne    0x5fcdf4
  5fcd53:	6a 03                	push   0x3
  5fcd55:	6a 01                	push   0x1
  5fcd57:	6a 20                	push   0x20
  5fcd59:	ff 15 cc d8 79 00    	call   DWORD PTR ds:0x79d8cc
  5fcd5f:	8b d0                	mov    edx,eax
  5fcd61:	89 56 04             	mov    DWORD PTR [esi+0x4],edx
  5fcd64:	83 fa ff             	cmp    edx,0xffffffff
  5fcd67:	0f 85 a3 00 00 00    	jne    0x5fce10
  5fcd6d:	6a 5c                	push   0x5c
  5fcd6f:	68 60 48 6f 00       	push   0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fcd74:	e8 ed b9 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fcd79:	83 c4 08             	add    esp,0x8
  5fcd7c:	85 c0                	test   eax,eax
  5fcd7e:	74 12                	je     0x5fcd92
  5fcd80:	6a 5c                	push   0x5c
  5fcd82:	68 60 48 6f 00       	push   0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fcd87:	e8 da b9 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fcd8c:	83 c4 08             	add    esp,0x8
  5fcd8f:	40                   	inc    eax
  5fcd90:	eb 05                	jmp    0x5fcd97
  5fcd92:	b8 60 48 6f 00       	mov    eax,0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fcd97:	68 3c 48 6f 00       	push   0x6f483c ; ["BluetoothClassicBase::init"]
  5fcd9c:	6a 1a                	push   0x1a
  5fcd9e:	50                   	push   eax
  5fcd9f:	68 48 ee 6c 00       	push   0x6cee48 ; ["[ConntctionModule][%s:%d][%s]: Error: Failed to create socket.\n"]
  5fcda4:	8d 44 24 1c          	lea    eax,[esp+0x1c]
  5fcda8:	c7 44 24 1c 02 00 00 	mov    DWORD PTR [esp+0x1c],0x2
  5fcdb0:	50                   	push   eax
  5fcdb1:	8d 44 24 38          	lea    eax,[esp+0x38]
  5fcdb5:	50                   	push   eax
  5fcdb6:	e8 4e a2 e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5fcdbb:	8b 54 24 50          	mov    edx,DWORD PTR [esp+0x50]
  5fcdbf:	83 c4 18             	add    esp,0x18
  5fcdc2:	83 fa 10             	cmp    edx,0x10
  5fcdc5:	72 2d                	jb     0x5fcdf4
  5fcdc7:	8b 4c 24 24          	mov    ecx,DWORD PTR [esp+0x24]
  5fcdcb:	42                   	inc    edx
  5fcdcc:	8b c1                	mov    eax,ecx
  5fcdce:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5fcdd4:	72 14                	jb     0x5fcdea
  5fcdd6:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5fcdd9:	83 c2 23             	add    edx,0x23
  5fcddc:	2b c1                	sub    eax,ecx
  5fcdde:	83 c0 fc             	add    eax,0xfffffffc
  5fcde1:	83 f8 1f             	cmp    eax,0x1f
  5fcde4:	0f 87 ea 03 00 00    	ja     0x5fd1d4
  5fcdea:	52                   	push   edx
  5fcdeb:	51                   	push   ecx
  5fcdec:	e8 a9 52 e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5fcdf1:	83 c4 08             	add    esp,0x8
  5fcdf4:	32 c0                	xor    al,al
  5fcdf6:	8b 8c 24 64 02 00 00 	mov    ecx,DWORD PTR [esp+0x264]
  5fcdfd:	5f                   	pop    edi
  5fcdfe:	5e                   	pop    esi
  5fcdff:	5b                   	pop    ebx
  5fce00:	33 cc                	xor    ecx,esp
  5fce02:	e8 88 76 e0 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5fce07:	81 c4 5c 02 00 00    	add    esp,0x25c
  5fce0d:	c2 0c 00             	ret    0xc
  5fce10:	0f 10 03             	movups xmm0,XMMWORD PTR [ebx]
  5fce13:	8b 4f 04             	mov    ecx,DWORD PTR [edi+0x4]
  5fce16:	b8 20 00 00 00       	mov    eax,0x20
  5fce1b:	66 89 44 24 3c       	mov    WORD PTR [esp+0x3c],ax
  5fce20:	8b 07                	mov    eax,DWORD PTR [edi]
  5fce22:	89 44 24 3e          	mov    DWORD PTR [esp+0x3e],eax
  5fce26:	8d 44 24 14          	lea    eax,[esp+0x14]
  5fce2a:	50                   	push   eax
  5fce2b:	68 7e 66 04 80       	push   0x8004667e
  5fce30:	52                   	push   edx
  5fce31:	89 4c 24 4e          	mov    DWORD PTR [esp+0x4e],ecx
  5fce35:	0f 11 44 24 52       	movups XMMWORD PTR [esp+0x52],xmm0
  5fce3a:	c7 44 24 62 ff ff ff 	mov    DWORD PTR [esp+0x62],0xffffffff
  5fce42:	c7 44 24 20 01 00 00 	mov    DWORD PTR [esp+0x20],0x1
  5fce4a:	ff 15 c4 d8 79 00    	call   DWORD PTR ds:0x79d8c4
  5fce50:	8b d8                	mov    ebx,eax
  5fce52:	85 db                	test   ebx,ebx
  5fce54:	0f 84 88 00 00 00    	je     0x5fcee2
  5fce5a:	6a 5c                	push   0x5c
  5fce5c:	68 60 48 6f 00       	push   0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fce61:	e8 00 b9 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fce66:	83 c4 08             	add    esp,0x8
  5fce69:	85 c0                	test   eax,eax
  5fce6b:	74 12                	je     0x5fce7f
  5fce6d:	6a 5c                	push   0x5c
  5fce6f:	68 60 48 6f 00       	push   0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fce74:	e8 ed b8 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fce79:	83 c4 08             	add    esp,0x8
  5fce7c:	40                   	inc    eax
  5fce7d:	eb 05                	jmp    0x5fce84
  5fce7f:	b8 60 48 6f 00       	mov    eax,0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fce84:	53                   	push   ebx
  5fce85:	68 3c 48 6f 00       	push   0x6f483c ; ["BluetoothClassicBase::init"]
  5fce8a:	6a 45                	push   0x45
  5fce8c:	50                   	push   eax
  5fce8d:	68 b8 48 6f 00       	push   0x6f48b8 ; ["[ConntctionModule][%s:%d][%s]: ioctlsocket1 failed with error: %ld\n"]
  5fce92:	8d 44 24 20          	lea    eax,[esp+0x20]
  5fce96:	c7 44 24 20 02 00 00 	mov    DWORD PTR [esp+0x20],0x2
  5fce9e:	50                   	push   eax
  5fce9f:	8d 44 24 3c          	lea    eax,[esp+0x3c]
  5fcea3:	50                   	push   eax
  5fcea4:	e8 60 a1 e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5fcea9:	8b 54 24 54          	mov    edx,DWORD PTR [esp+0x54]
  5fcead:	83 c4 1c             	add    esp,0x1c
  5fceb0:	83 fa 10             	cmp    edx,0x10
  5fceb3:	72 2d                	jb     0x5fcee2
  5fceb5:	8b 4c 24 24          	mov    ecx,DWORD PTR [esp+0x24]
  5fceb9:	42                   	inc    edx
  5fceba:	8b c1                	mov    eax,ecx
  5fcebc:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5fcec2:	72 14                	jb     0x5fced8
  5fcec4:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5fcec7:	83 c2 23             	add    edx,0x23
  5fceca:	2b c1                	sub    eax,ecx
  5fcecc:	83 c0 fc             	add    eax,0xfffffffc
  5fcecf:	83 f8 1f             	cmp    eax,0x1f
  5fced2:	0f 87 fc 02 00 00    	ja     0x5fd1d4
  5fced8:	52                   	push   edx
  5fced9:	51                   	push   ecx
  5fceda:	e8 bb 51 e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5fcedf:	83 c4 08             	add    esp,0x8
  5fcee2:	6a 1e                	push   0x1e
  5fcee4:	8d 44 24 40          	lea    eax,[esp+0x40]
  5fcee8:	50                   	push   eax
  5fcee9:	ff 76 04             	push   DWORD PTR [esi+0x4]
  5fceec:	ff 15 ec d8 79 00    	call   DWORD PTR ds:0x79d8ec
  5fcef2:	83 f8 ff             	cmp    eax,0xffffffff
  5fcef5:	0f 85 4d 02 00 00    	jne    0x5fd148
  5fcefb:	c7 44 24 14 00 00 00 	mov    DWORD PTR [esp+0x14],0x0
  5fcf03:	ff 15 a4 d8 79 00    	call   DWORD PTR ds:0x79d8a4
  5fcf09:	89 44 24 18          	mov    DWORD PTR [esp+0x18],eax
  5fcf0d:	8d 44 24 14          	lea    eax,[esp+0x14]
  5fcf11:	50                   	push   eax
  5fcf12:	68 7e 66 04 80       	push   0x8004667e
  5fcf17:	ff 76 04             	push   DWORD PTR [esi+0x4]
  5fcf1a:	ff 15 c4 d8 79 00    	call   DWORD PTR ds:0x79d8c4
  5fcf20:	8b d8                	mov    ebx,eax
  5fcf22:	85 db                	test   ebx,ebx
  5fcf24:	0f 84 88 00 00 00    	je     0x5fcfb2
  5fcf2a:	6a 5c                	push   0x5c
  5fcf2c:	68 60 48 6f 00       	push   0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fcf31:	e8 30 b8 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fcf36:	83 c4 08             	add    esp,0x8
  5fcf39:	85 c0                	test   eax,eax
  5fcf3b:	74 12                	je     0x5fcf4f
  5fcf3d:	6a 5c                	push   0x5c
  5fcf3f:	68 60 48 6f 00       	push   0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fcf44:	e8 1d b8 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fcf49:	83 c4 08             	add    esp,0x8
  5fcf4c:	40                   	inc    eax
  5fcf4d:	eb 05                	jmp    0x5fcf54
  5fcf4f:	b8 60 48 6f 00       	mov    eax,0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fcf54:	53                   	push   ebx
  5fcf55:	68 3c 48 6f 00       	push   0x6f483c ; ["BluetoothClassicBase::init"]
  5fcf5a:	6a 52                	push   0x52
  5fcf5c:	50                   	push   eax
  5fcf5d:	68 10 49 6f 00       	push   0x6f4910 ; ["[ConntctionModule][%s:%d][%s]: ioctlsocket2 failed with error: %ld\n"]
  5fcf62:	8d 44 24 20          	lea    eax,[esp+0x20]
  5fcf66:	c7 44 24 20 02 00 00 	mov    DWORD PTR [esp+0x20],0x2
  5fcf6e:	50                   	push   eax
  5fcf6f:	8d 44 24 3c          	lea    eax,[esp+0x3c]
  5fcf73:	50                   	push   eax
  5fcf74:	e8 90 a0 e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5fcf79:	8b 54 24 54          	mov    edx,DWORD PTR [esp+0x54]
  5fcf7d:	83 c4 1c             	add    esp,0x1c
  5fcf80:	83 fa 10             	cmp    edx,0x10
  5fcf83:	72 2d                	jb     0x5fcfb2
  5fcf85:	8b 4c 24 24          	mov    ecx,DWORD PTR [esp+0x24]
  5fcf89:	42                   	inc    edx
  5fcf8a:	8b c1                	mov    eax,ecx
  5fcf8c:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5fcf92:	72 14                	jb     0x5fcfa8
  5fcf94:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5fcf97:	83 c2 23             	add    edx,0x23
  5fcf9a:	2b c1                	sub    eax,ecx
  5fcf9c:	83 c0 fc             	add    eax,0xfffffffc
  5fcf9f:	83 f8 1f             	cmp    eax,0x1f
  5fcfa2:	0f 87 7b 01 00 00    	ja     0x5fd123
  5fcfa8:	52                   	push   edx
  5fcfa9:	51                   	push   ecx
  5fcfaa:	e8 eb 50 e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5fcfaf:	83 c4 08             	add    esp,0x8
  5fcfb2:	8b 46 04             	mov    eax,DWORD PTR [esi+0x4]
  5fcfb5:	89 44 24 60          	mov    DWORD PTR [esp+0x60],eax
  5fcfb9:	89 84 24 64 01 00 00 	mov    DWORD PTR [esp+0x164],eax
  5fcfc0:	8b 44 24 10          	mov    eax,DWORD PTR [esp+0x10]
  5fcfc4:	c7 44 24 5c 01 00 00 	mov    DWORD PTR [esp+0x5c],0x1
  5fcfcc:	c7 84 24 60 01 00 00 	mov    DWORD PTR [esp+0x160],0x1
  5fcfd7:	c7 44 24 20 00 00 00 	mov    DWORD PTR [esp+0x20],0x0
  5fcfdf:	8b 00                	mov    eax,DWORD PTR [eax]
  5fcfe1:	89 44 24 1c          	mov    DWORD PTR [esp+0x1c],eax
  5fcfe5:	8d 44 24 1c          	lea    eax,[esp+0x1c]
  5fcfe9:	50                   	push   eax
  5fcfea:	8d 84 24 64 01 00 00 	lea    eax,[esp+0x164]
  5fcff1:	50                   	push   eax
  5fcff2:	8d 44 24 64          	lea    eax,[esp+0x64]
  5fcff6:	50                   	push   eax
  5fcff7:	6a 00                	push   0x0
  5fcff9:	6a 00                	push   0x0
  5fcffb:	ff 15 9c d8 79 00    	call   DWORD PTR ds:0x79d89c
  5fd001:	8d 44 24 5c          	lea    eax,[esp+0x5c]
  5fd005:	50                   	push   eax
  5fd006:	ff 76 04             	push   DWORD PTR [esi+0x4]
  5fd009:	e8 78 7b 06 00       	call   0x664b86 ; ["call resolved=0x664b86 "]
  5fd00e:	8b 1f                	mov    ebx,DWORD PTR [edi]
  5fd010:	8b 7f 04             	mov    edi,DWORD PTR [edi+0x4]
  5fd013:	6a 5c                	push   0x5c
  5fd015:	68 60 48 6f 00       	push   0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fd01a:	85 c0                	test   eax,eax
  5fd01c:	0f 84 89 00 00 00    	je     0x5fd0ab
  5fd022:	e8 3f b7 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fd027:	83 c4 08             	add    esp,0x8
  5fd02a:	85 c0                	test   eax,eax
  5fd02c:	74 12                	je     0x5fd040
  5fd02e:	6a 5c                	push   0x5c
  5fd030:	68 60 48 6f 00       	push   0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fd035:	e8 2c b7 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fd03a:	83 c4 08             	add    esp,0x8
  5fd03d:	40                   	inc    eax
  5fd03e:	eb 05                	jmp    0x5fd045
  5fd040:	b8 60 48 6f 00       	mov    eax,0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fd045:	57                   	push   edi
  5fd046:	53                   	push   ebx
  5fd047:	68 3c 48 6f 00       	push   0x6f483c ; ["BluetoothClassicBase::init"]
  5fd04c:	6a 62                	push   0x62
  5fd04e:	50                   	push   eax
  5fd04f:	68 d8 ee 6c 00       	push   0x6ceed8 ; ["[ConntctionModule][%s:%d][%s]: connect %d success! ------------------------\n"]
  5fd054:	8d 44 24 28          	lea    eax,[esp+0x28]
  5fd058:	c7 44 24 28 02 00 00 	mov    DWORD PTR [esp+0x28],0x2
  5fd060:	50                   	push   eax
  5fd061:	8d 44 24 40          	lea    eax,[esp+0x40]
  5fd065:	50                   	push   eax
  5fd066:	e8 9e 9f e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5fd06b:	8b 54 24 58          	mov    edx,DWORD PTR [esp+0x58]
  5fd06f:	83 c4 20             	add    esp,0x20
  5fd072:	83 fa 10             	cmp    edx,0x10
  5fd075:	72 2d                	jb     0x5fd0a4
  5fd077:	8b 4c 24 24          	mov    ecx,DWORD PTR [esp+0x24]
  5fd07b:	42                   	inc    edx
  5fd07c:	8b c1                	mov    eax,ecx
  5fd07e:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5fd084:	72 14                	jb     0x5fd09a
  5fd086:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5fd089:	83 c2 23             	add    edx,0x23
  5fd08c:	2b c1                	sub    eax,ecx
  5fd08e:	83 c0 fc             	add    eax,0xfffffffc
  5fd091:	83 f8 1f             	cmp    eax,0x1f
  5fd094:	0f 87 89 00 00 00    	ja     0x5fd123
  5fd09a:	52                   	push   edx
  5fd09b:	51                   	push   ecx
  5fd09c:	e8 f9 4f e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5fd0a1:	83 c4 08             	add    esp,0x8
  5fd0a4:	b0 01                	mov    al,0x1
  5fd0a6:	e9 4b fd ff ff       	jmp    0x5fcdf6
  5fd0ab:	e8 b6 b6 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fd0b0:	83 c4 08             	add    esp,0x8
  5fd0b3:	85 c0                	test   eax,eax
  5fd0b5:	74 12                	je     0x5fd0c9
  5fd0b7:	6a 5c                	push   0x5c
  5fd0b9:	68 60 48 6f 00       	push   0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fd0be:	e8 a3 b6 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fd0c3:	83 c4 08             	add    esp,0x8
  5fd0c6:	40                   	inc    eax
  5fd0c7:	eb 05                	jmp    0x5fd0ce
  5fd0c9:	b8 60 48 6f 00       	mov    eax,0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fd0ce:	ff 74 24 18          	push   DWORD PTR [esp+0x18]
  5fd0d2:	c7 44 24 14 02 00 00 	mov    DWORD PTR [esp+0x14],0x2
  5fd0da:	57                   	push   edi
  5fd0db:	53                   	push   ebx
  5fd0dc:	68 3c 48 6f 00       	push   0x6f483c ; ["BluetoothClassicBase::init"]
  5fd0e1:	6a 66                	push   0x66
  5fd0e3:	50                   	push   eax
  5fd0e4:	68 64 49 6f 00       	push   0x6f4964 ; ["[ConntctionModule][%s:%d][%s]: connect %4x failed: %ld\n"]
  5fd0e9:	8d 44 24 2c          	lea    eax,[esp+0x2c]
  5fd0ed:	50                   	push   eax
  5fd0ee:	8d 44 24 44          	lea    eax,[esp+0x44]
  5fd0f2:	50                   	push   eax
  5fd0f3:	e8 11 9f e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5fd0f8:	8b 54 24 5c          	mov    edx,DWORD PTR [esp+0x5c]
  5fd0fc:	83 c4 24             	add    esp,0x24
  5fd0ff:	83 fa 10             	cmp    edx,0x10
  5fd102:	72 2f                	jb     0x5fd133
  5fd104:	8b 4c 24 24          	mov    ecx,DWORD PTR [esp+0x24]
  5fd108:	42                   	inc    edx
  5fd109:	8b c1                	mov    eax,ecx
  5fd10b:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5fd111:	72 16                	jb     0x5fd129
  5fd113:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5fd116:	83 c2 23             	add    edx,0x23
  5fd119:	2b c1                	sub    eax,ecx
  5fd11b:	83 c0 fc             	add    eax,0xfffffffc
  5fd11e:	83 f8 1f             	cmp    eax,0x1f
  5fd121:	76 06                	jbe    0x5fd129
  5fd123:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5fd129:	52                   	push   edx
  5fd12a:	51                   	push   ecx
  5fd12b:	e8 6a 4f e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5fd130:	83 c4 08             	add    esp,0x8
  5fd133:	ff 76 04             	push   DWORD PTR [esi+0x4]
  5fd136:	ff 15 f0 d8 79 00    	call   DWORD PTR ds:0x79d8f0
  5fd13c:	c7 46 04 00 00 00 00 	mov    DWORD PTR [esi+0x4],0x0
  5fd143:	e9 ac fc ff ff       	jmp    0x5fcdf4
  5fd148:	8b 1f                	mov    ebx,DWORD PTR [edi]
  5fd14a:	8b 77 04             	mov    esi,DWORD PTR [edi+0x4]
  5fd14d:	6a 5c                	push   0x5c
  5fd14f:	68 60 48 6f 00       	push   0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fd154:	e8 0d b6 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fd159:	83 c4 08             	add    esp,0x8
  5fd15c:	85 c0                	test   eax,eax
  5fd15e:	74 12                	je     0x5fd172
  5fd160:	6a 5c                	push   0x5c
  5fd162:	68 60 48 6f 00       	push   0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fd167:	e8 fa b5 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fd16c:	83 c4 08             	add    esp,0x8
  5fd16f:	40                   	inc    eax
  5fd170:	eb 05                	jmp    0x5fd177
  5fd172:	b8 60 48 6f 00       	mov    eax,0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fd177:	56                   	push   esi
  5fd178:	53                   	push   ebx
  5fd179:	68 3c 48 6f 00       	push   0x6f483c ; ["BluetoothClassicBase::init"]
  5fd17e:	6a 6c                	push   0x6c
  5fd180:	50                   	push   eax
  5fd181:	68 d8 ee 6c 00       	push   0x6ceed8 ; ["[ConntctionModule][%s:%d][%s]: connect %d success! ------------------------\n"]
  5fd186:	8d 44 24 30          	lea    eax,[esp+0x30]
  5fd18a:	c7 44 24 30 02 00 00 	mov    DWORD PTR [esp+0x30],0x2
  5fd192:	50                   	push   eax
  5fd193:	8d 44 24 40          	lea    eax,[esp+0x40]
  5fd197:	50                   	push   eax
  5fd198:	e8 6c 9e e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5fd19d:	8b 54 24 58          	mov    edx,DWORD PTR [esp+0x58]
  5fd1a1:	83 c4 20             	add    esp,0x20
  5fd1a4:	83 fa 10             	cmp    edx,0x10
  5fd1a7:	0f 82 f7 fe ff ff    	jb     0x5fd0a4
  5fd1ad:	8b 4c 24 24          	mov    ecx,DWORD PTR [esp+0x24]
  5fd1b1:	42                   	inc    edx
  5fd1b2:	8b c1                	mov    eax,ecx
  5fd1b4:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5fd1ba:	0f 82 da fe ff ff    	jb     0x5fd09a
  5fd1c0:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5fd1c3:	83 c2 23             	add    edx,0x23
  5fd1c6:	2b c1                	sub    eax,ecx
  5fd1c8:	83 c0 fc             	add    eax,0xfffffffc
  5fd1cb:	83 f8 1f             	cmp    eax,0x1f
  5fd1ce:	0f 86 c6 fe ff ff    	jbe    0x5fd09a
  5fd1d4:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
