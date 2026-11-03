; BtFarawayDevice::DeviceInfoDataBuild; image base 0x400000; static annotation only
  54f9d0:	55                   	push   ebp
  54f9d1:	8d ac 24 00 ff ff ff 	lea    ebp,[esp-0x100]
  54f9d8:	81 ec 00 01 00 00    	sub    esp,0x100
  54f9de:	6a ff                	push   0xffffffff
  54f9e0:	68 84 70 68 00       	push   0x687084
  54f9e5:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  54f9eb:	50                   	push   eax
  54f9ec:	83 ec 38             	sub    esp,0x38
  54f9ef:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  54f9f4:	33 c5                	xor    eax,ebp
  54f9f6:	89 85 fc 00 00 00    	mov    DWORD PTR [ebp+0xfc],eax
  54f9fc:	53                   	push   ebx
  54f9fd:	56                   	push   esi
  54f9fe:	57                   	push   edi
  54f9ff:	50                   	push   eax
  54fa00:	8d 45 f4             	lea    eax,[ebp-0xc]
  54fa03:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  54fa09:	89 4d e4             	mov    DWORD PTR [ebp-0x1c],ecx
  54fa0c:	8b 85 0c 01 00 00    	mov    eax,DWORD PTR [ebp+0x10c]
  54fa12:	b9 74 8b 7a 00       	mov    ecx,0x7a8b74
  54fa17:	8b 9d 08 01 00 00    	mov    ebx,DWORD PTR [ebp+0x108]
  54fa1d:	89 45 c4             	mov    DWORD PTR [ebp-0x3c],eax
  54fa20:	c7 45 d0 00 00 00 00 	mov    DWORD PTR [ebp-0x30],0x0
  54fa27:	e8 c2 90 eb ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  54fa2c:	6a 00                	push   0x0
  54fa2e:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  54fa31:	e8 8c 4e eb ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  54fa36:	83 ec 10             	sub    esp,0x10
  54fa39:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  54fa40:	8b f4                	mov    esi,esp
  54fa42:	89 65 ec             	mov    DWORD PTR [ebp-0x14],esp
  54fa45:	0f 57 c0             	xorps  xmm0,xmm0
  54fa48:	6a 18                	push   0x18
  54fa4a:	66 0f d6 46 08       	movq   QWORD PTR [esi+0x8],xmm0
  54fa4f:	c6 06 03             	mov    BYTE PTR [esi],0x3
  54fa52:	e8 5f 37 eb ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  54fa57:	83 c4 04             	add    esp,0x4
  54fa5a:	c7 00 00 00 00 00    	mov    DWORD PTR [eax],0x0
  54fa60:	c7 40 14 0f 00 00 00 	mov    DWORD PTR [eax+0x14],0xf
  54fa67:	c7 40 10 01 00 00 00 	mov    DWORD PTR [eax+0x10],0x1
  54fa6e:	8a 0d 7c 12 6c 00    	mov    cl,BYTE PTR ds:0x6c127c
  54fa74:	88 08                	mov    BYTE PTR [eax],cl
  54fa76:	c6 40 01 00          	mov    BYTE PTR [eax+0x1],0x0
  54fa7a:	89 46 08             	mov    DWORD PTR [esi+0x8],eax
  54fa7d:	68 88 ac 6c 00       	push   0x6cac88 ; ["version"]
  54fa82:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  54fa85:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  54fa89:	e8 50 3c eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  54fa8e:	8b c8                	mov    ecx,eax
  54fa90:	c6 45 fc 00          	mov    BYTE PTR [ebp-0x4],0x0
  54fa94:	e8 ec 49 eb ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  54fa99:	ff 15 80 e0 79 00    	call   DWORD PTR ds:0x79e080
  54fa9f:	52                   	push   edx
  54faa0:	50                   	push   eax
  54faa1:	8d 85 f9 00 00 00    	lea    eax,[ebp+0xf9]
  54faa7:	50                   	push   eax
  54faa8:	e8 3f 1f eb ff       	call   0x4019ec ; ["call resolved=0x442330 "]
  54faad:	8d 8d f9 00 00 00    	lea    ecx,[ebp+0xf9]
  54fab3:	c7 45 30 00 00 00 00 	mov    DWORD PTR [ebp+0x30],0x0
  54faba:	83 c4 0c             	add    esp,0xc
  54fabd:	c7 45 40 00 00 00 00 	mov    DWORD PTR [ebp+0x40],0x0
  54fac4:	c7 45 44 0f 00 00 00 	mov    DWORD PTR [ebp+0x44],0xf
  54facb:	c6 45 30 00          	mov    BYTE PTR [ebp+0x30],0x0
  54facf:	3b c1                	cmp    eax,ecx
  54fad1:	74 0c                	je     0x54fadf
  54fad3:	2b c8                	sub    ecx,eax
  54fad5:	51                   	push   ecx
  54fad6:	50                   	push   eax
  54fad7:	8d 4d 30             	lea    ecx,[ebp+0x30]
  54fada:	e8 38 49 eb ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  54fadf:	83 ec 10             	sub    esp,0x10
  54fae2:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  54fae6:	8d 45 30             	lea    eax,[ebp+0x30]
  54fae9:	89 65 ec             	mov    DWORD PTR [ebp-0x14],esp
  54faec:	8b cc                	mov    ecx,esp
  54faee:	50                   	push   eax
  54faef:	e8 54 59 eb ff       	call   0x405448 ; ["call resolved=0x43de60 "]
  54faf4:	68 c4 8a 6d 00       	push   0x6d8ac4 ; ["reqId"]
  54faf9:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  54fafc:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  54fb00:	e8 d9 3b eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  54fb05:	8b c8                	mov    ecx,eax
  54fb07:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  54fb0b:	e8 75 49 eb ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  54fb10:	8b 55 44             	mov    edx,DWORD PTR [ebp+0x44]
  54fb13:	c6 45 fc 00          	mov    BYTE PTR [ebp-0x4],0x0
  54fb17:	83 fa 10             	cmp    edx,0x10
  54fb1a:	72 2c                	jb     0x54fb48
  54fb1c:	8b 4d 30             	mov    ecx,DWORD PTR [ebp+0x30]
  54fb1f:	42                   	inc    edx
  54fb20:	8b c1                	mov    eax,ecx
  54fb22:	81 fa 00 10 00 00    	cmp    edx,0x1000
  54fb28:	72 14                	jb     0x54fb3e
  54fb2a:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  54fb2d:	83 c2 23             	add    edx,0x23
  54fb30:	2b c1                	sub    eax,ecx
  54fb32:	83 c0 fc             	add    eax,0xfffffffc
  54fb35:	83 f8 1f             	cmp    eax,0x1f
  54fb38:	0f 87 5e 05 00 00    	ja     0x55009c
  54fb3e:	52                   	push   edx
  54fb3f:	51                   	push   ecx
  54fb40:	e8 55 25 eb ff       	call   0x40209a ; ["call resolved=0x6665be "]
  54fb45:	83 c4 08             	add    esp,0x8
  54fb48:	83 ec 10             	sub    esp,0x10
  54fb4b:	8b cc                	mov    ecx,esp
  54fb4d:	89 65 ec             	mov    DWORD PTR [ebp-0x14],esp
  54fb50:	68 c8 43 79 00       	push   0x7943c8
  54fb55:	e8 27 6b eb ff       	call   0x406681 ; ["call resolved=0x43d750 "]
  54fb5a:	68 2c 89 6d 00       	push   0x6d892c ; ["cmd"]
  54fb5f:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  54fb62:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  54fb66:	e8 73 3b eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  54fb6b:	8b c8                	mov    ecx,eax
  54fb6d:	c6 45 fc 00          	mov    BYTE PTR [ebp-0x4],0x0
  54fb71:	e8 0f 49 eb ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  54fb76:	6a 00                	push   0x0
  54fb78:	8d 8d e8 00 00 00    	lea    ecx,[ebp+0xe8]
  54fb7e:	e8 3f 4d eb ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  54fb83:	c7 45 30 00 00 00 00 	mov    DWORD PTR [ebp+0x30],0x0
  54fb8a:	c7 45 44 0f 00 00 00 	mov    DWORD PTR [ebp+0x44],0xf
  54fb91:	c7 45 40 00 00 00 00 	mov    DWORD PTR [ebp+0x40],0x0
  54fb98:	c6 45 30 00          	mov    BYTE PTR [ebp+0x30],0x0
  54fb9c:	8d 45 30             	lea    eax,[ebp+0x30]
  54fb9f:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  54fba3:	50                   	push   eax
  54fba4:	e8 27 76 eb ff       	call   0x4071d0 ; ["call resolved=0x4b3650 vivo::Utils::getDeviceId"]
  54fba9:	83 ec 0c             	sub    esp,0xc
  54fbac:	8d 45 30             	lea    eax,[ebp+0x30]
  54fbaf:	8b cc                	mov    ecx,esp
  54fbb1:	89 65 ec             	mov    DWORD PTR [ebp-0x14],esp
  54fbb4:	50                   	push   eax
  54fbb5:	e8 56 4f eb ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  54fbba:	68 54 4d 6c 00       	push   0x6c4d54 ; ["deviceId"]
  54fbbf:	8d 8d e8 00 00 00    	lea    ecx,[ebp+0xe8]
  54fbc5:	c6 45 fc 08          	mov    BYTE PTR [ebp-0x4],0x8
  54fbc9:	e8 10 3b eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  54fbce:	8b c8                	mov    ecx,eax
  54fbd0:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  54fbd4:	e8 ac 48 eb ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  54fbd9:	83 ec 10             	sub    esp,0x10
  54fbdc:	8d 45 30             	lea    eax,[ebp+0x30]
  54fbdf:	8b cc                	mov    ecx,esp
  54fbe1:	89 65 ec             	mov    DWORD PTR [ebp-0x14],esp
  54fbe4:	50                   	push   eax
  54fbe5:	e8 26 4f eb ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  54fbea:	68 a4 4b 6c 00       	push   0x6c4ba4 ; ["deviceName"]
  54fbef:	8d 8d e8 00 00 00    	lea    ecx,[ebp+0xe8]
  54fbf5:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  54fbf9:	e8 e0 3a eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  54fbfe:	8b c8                	mov    ecx,eax
  54fc00:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  54fc04:	e8 7c 48 eb ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  54fc09:	c7 45 18 00 00 00 00 	mov    DWORD PTR [ebp+0x18],0x0
  54fc10:	c7 45 2c 0f 00 00 00 	mov    DWORD PTR [ebp+0x2c],0xf
  54fc17:	c7 45 28 00 00 00 00 	mov    DWORD PTR [ebp+0x28],0x0
  54fc1e:	c6 45 18 00          	mov    BYTE PTR [ebp+0x18],0x0
  54fc22:	68 84 00 00 00       	push   0x84
  54fc27:	8d 45 60             	lea    eax,[ebp+0x60]
  54fc2a:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  54fc2e:	6a 00                	push   0x0
  54fc30:	50                   	push   eax
  54fc31:	e8 60 8b 11 00       	call   0x668796 ; ["call resolved=0x668796 "]
  54fc36:	83 c4 0c             	add    esp,0xc
  54fc39:	c7 45 48 00 00 00 00 	mov    DWORD PTR [ebp+0x48],0x0
  54fc40:	8d 45 cc             	lea    eax,[ebp-0x34]
  54fc43:	c7 45 cc 42 00 00 00 	mov    DWORD PTR [ebp-0x34],0x42
  54fc4a:	33 ff                	xor    edi,edi
  54fc4c:	c6 45 48 00          	mov    BYTE PTR [ebp+0x48],0x0
  54fc50:	be 0f 00 00 00       	mov    esi,0xf
  54fc55:	89 7d 58             	mov    DWORD PTR [ebp+0x58],edi
  54fc58:	50                   	push   eax
  54fc59:	8d 45 60             	lea    eax,[ebp+0x60]
  54fc5c:	89 75 5c             	mov    DWORD PTR [ebp+0x5c],esi
  54fc5f:	50                   	push   eax
  54fc60:	6a 01                	push   0x1
  54fc62:	c7 45 d0 07 00 00 00 	mov    DWORD PTR [ebp-0x30],0x7
  54fc69:	ff 15 70 e0 79 00    	call   DWORD PTR ds:0x79e070
  54fc6f:	85 c0                	test   eax,eax
  54fc71:	74 64                	je     0x54fcd7
  54fc73:	57                   	push   edi
  54fc74:	57                   	push   edi
  54fc75:	57                   	push   edi
  54fc76:	57                   	push   edi
  54fc77:	6a ff                	push   0xffffffff
  54fc79:	8d 45 60             	lea    eax,[ebp+0x60]
  54fc7c:	50                   	push   eax
  54fc7d:	57                   	push   edi
  54fc7e:	8b 3d 38 df 79 00    	mov    edi,DWORD PTR ds:0x79df38
  54fc84:	68 e9 fd 00 00       	push   0xfde9
  54fc89:	ff d7                	call   edi
  54fc8b:	8b f0                	mov    esi,eax
  54fc8d:	56                   	push   esi
  54fc8e:	e8 de 47 eb ff       	call   0x404471 ; ["call resolved=0x6665cf "]
  54fc93:	83 c4 04             	add    esp,0x4
  54fc96:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  54fc99:	6a 00                	push   0x0
  54fc9b:	6a 00                	push   0x0
  54fc9d:	56                   	push   esi
  54fc9e:	8b f0                	mov    esi,eax
  54fca0:	8d 45 60             	lea    eax,[ebp+0x60]
  54fca3:	56                   	push   esi
  54fca4:	6a ff                	push   0xffffffff
  54fca6:	50                   	push   eax
  54fca7:	6a 00                	push   0x0
  54fca9:	68 e9 fd 00 00       	push   0xfde9
  54fcae:	ff d7                	call   edi
  54fcb0:	8b ce                	mov    ecx,esi
  54fcb2:	8d 51 01             	lea    edx,[ecx+0x1]
  54fcb5:	8a 01                	mov    al,BYTE PTR [ecx]
  54fcb7:	41                   	inc    ecx
  54fcb8:	84 c0                	test   al,al
  54fcba:	75 f9                	jne    0x54fcb5
  54fcbc:	2b ca                	sub    ecx,edx
  54fcbe:	51                   	push   ecx
  54fcbf:	56                   	push   esi
  54fcc0:	8d 4d 48             	lea    ecx,[ebp+0x48]
  54fcc3:	e8 4f 47 eb ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  54fcc8:	56                   	push   esi
  54fcc9:	e8 8e 6b eb ff       	call   0x40685c ; ["call resolved=0x6687d2 "]
  54fcce:	8b 75 5c             	mov    esi,DWORD PTR [ebp+0x5c]
  54fcd1:	83 c4 04             	add    esp,0x4
  54fcd4:	8b 7d 58             	mov    edi,DWORD PTR [ebp+0x58]
  54fcd7:	83 fe 10             	cmp    esi,0x10
  54fcda:	8d 45 48             	lea    eax,[ebp+0x48]
  54fcdd:	57                   	push   edi
  54fcde:	0f 43 45 48          	cmovae eax,DWORD PTR [ebp+0x48]
  54fce2:	8d 4d 18             	lea    ecx,[ebp+0x18]
  54fce5:	50                   	push   eax
  54fce6:	e8 2c 47 eb ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  54fceb:	83 ec 10             	sub    esp,0x10
  54fcee:	8d 45 48             	lea    eax,[ebp+0x48]
  54fcf1:	8b cc                	mov    ecx,esp
  54fcf3:	89 65 ec             	mov    DWORD PTR [ebp-0x14],esp
  54fcf6:	50                   	push   eax
  54fcf7:	e8 4c 57 eb ff       	call   0x405448 ; ["call resolved=0x43de60 "]
  54fcfc:	68 a4 4b 6c 00       	push   0x6c4ba4 ; ["deviceName"]
  54fd01:	8d 8d e8 00 00 00    	lea    ecx,[ebp+0xe8]
  54fd07:	c6 45 fc 0c          	mov    BYTE PTR [ebp-0x4],0xc
  54fd0b:	e8 ce 39 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  54fd10:	8b c8                	mov    ecx,eax
  54fd12:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  54fd16:	e8 6a 47 eb ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  54fd1b:	8b 55 5c             	mov    edx,DWORD PTR [ebp+0x5c]
  54fd1e:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  54fd22:	83 fa 10             	cmp    edx,0x10
  54fd25:	72 2c                	jb     0x54fd53
  54fd27:	8b 4d 48             	mov    ecx,DWORD PTR [ebp+0x48]
  54fd2a:	42                   	inc    edx
  54fd2b:	8b c1                	mov    eax,ecx
  54fd2d:	81 fa 00 10 00 00    	cmp    edx,0x1000
  54fd33:	72 14                	jb     0x54fd49
  54fd35:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  54fd38:	83 c2 23             	add    edx,0x23
  54fd3b:	2b c1                	sub    eax,ecx
  54fd3d:	83 c0 fc             	add    eax,0xfffffffc
  54fd40:	83 f8 1f             	cmp    eax,0x1f
  54fd43:	0f 87 53 03 00 00    	ja     0x55009c
  54fd49:	52                   	push   edx
  54fd4a:	51                   	push   ecx
  54fd4b:	e8 4a 23 eb ff       	call   0x40209a ; ["call resolved=0x6665be "]
  54fd50:	83 c4 08             	add    esp,0x8
  54fd53:	83 ec 10             	sub    esp,0x10
  54fd56:	8b f4                	mov    esi,esp
  54fd58:	89 65 ec             	mov    DWORD PTR [ebp-0x14],esp
  54fd5b:	e8 d4 79 eb ff       	call   0x407734 ; ["call resolved=0x492af0 "]
  54fd60:	50                   	push   eax
  54fd61:	8b ce                	mov    ecx,esi
  54fd63:	e8 a8 4d eb ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  54fd68:	68 4c 7c 6d 00       	push   0x6d7c4c ; ["accountName"]
  54fd6d:	8d 8d e8 00 00 00    	lea    ecx,[ebp+0xe8]
  54fd73:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  54fd77:	e8 62 39 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  54fd7c:	8b c8                	mov    ecx,eax
  54fd7e:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  54fd82:	e8 fe 46 eb ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  54fd87:	83 ec 10             	sub    esp,0x10
  54fd8a:	8b f4                	mov    esi,esp
  54fd8c:	89 65 ec             	mov    DWORD PTR [ebp-0x14],esp
  54fd8f:	e8 a0 79 eb ff       	call   0x407734 ; ["call resolved=0x492af0 "]
  54fd94:	83 c0 18             	add    eax,0x18
  54fd97:	8b ce                	mov    ecx,esi
  54fd99:	50                   	push   eax
  54fd9a:	e8 71 4d eb ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  54fd9f:	68 6c 4d 6c 00       	push   0x6c4d6c ; ["openId"]
  54fda4:	8d 8d e8 00 00 00    	lea    ecx,[ebp+0xe8]
  54fdaa:	c6 45 fc 0e          	mov    BYTE PTR [ebp-0x4],0xe
  54fdae:	e8 2b 39 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  54fdb3:	8b c8                	mov    ecx,eax
  54fdb5:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  54fdb9:	e8 c7 46 eb ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  54fdbe:	83 ec 10             	sub    esp,0x10
  54fdc1:	8d 45 f3             	lea    eax,[ebp-0xd]
  54fdc4:	8b fc                	mov    edi,esp
  54fdc6:	89 65 ec             	mov    DWORD PTR [ebp-0x14],esp
  54fdc9:	0f 57 c0             	xorps  xmm0,xmm0
  54fdcc:	6a 01                	push   0x1
  54fdce:	66 0f d6 47 08       	movq   QWORD PTR [edi+0x8],xmm0
  54fdd3:	50                   	push   eax
  54fdd4:	c6 07 03             	mov    BYTE PTR [edi],0x3
  54fdd7:	e8 aa 9a eb ff       	call   0x409886 ; ["call resolved=0x47ffe0 "]
  54fddc:	8b f0                	mov    esi,eax
  54fdde:	83 c4 08             	add    esp,0x8
  54fde1:	8d 45 f3             	lea    eax,[ebp-0xd]
  54fde4:	89 75 cc             	mov    DWORD PTR [ebp-0x34],esi
  54fde7:	89 45 c8             	mov    DWORD PTR [ebp-0x38],eax
  54fdea:	6a 02                	push   0x2
  54fdec:	68 5c 7c 6d 00       	push   0x6d7c5c ; ["pc"]
  54fdf1:	8b ce                	mov    ecx,esi
  54fdf3:	c6 45 fc 0f          	mov    BYTE PTR [ebp-0x4],0xf
  54fdf7:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  54fdfd:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  54fe04:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  54fe0b:	e8 07 46 eb ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  54fe10:	8b cf                	mov    ecx,edi
  54fe12:	89 77 08             	mov    DWORD PTR [edi+0x8],esi
  54fe15:	e8 c4 a1 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  54fe1a:	8b cf                	mov    ecx,edi
  54fe1c:	e8 bd a1 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  54fe21:	68 b0 4d 6c 00       	push   0x6c4db0 ; ["deviceType"]
  54fe26:	8d 8d e8 00 00 00    	lea    ecx,[ebp+0xe8]
  54fe2c:	c6 45 fc 10          	mov    BYTE PTR [ebp-0x4],0x10
  54fe30:	e8 a9 38 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  54fe35:	8b c8                	mov    ecx,eax
  54fe37:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  54fe3b:	e8 45 46 eb ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  54fe40:	8b 4d e4             	mov    ecx,DWORD PTR [ebp-0x1c]
  54fe43:	8b 01                	mov    eax,DWORD PTR [ecx]
  54fe45:	8b 40 64             	mov    eax,DWORD PTR [eax+0x64]
  54fe48:	ff d0                	call   eax
  54fe4a:	8b 4d ec             	mov    ecx,DWORD PTR [ebp-0x14]
  54fe4d:	83 ec 10             	sub    esp,0x10
  54fe50:	8b f4                	mov    esi,esp
  54fe52:	88 45 e8             	mov    BYTE PTR [ebp-0x18],al
  54fe55:	8b 45 e8             	mov    eax,DWORD PTR [ebp-0x18]
  54fe58:	89 65 e4             	mov    DWORD PTR [ebp-0x1c],esp
  54fe5b:	c6 06 04             	mov    BYTE PTR [esi],0x4
  54fe5e:	89 46 08             	mov    DWORD PTR [esi+0x8],eax
  54fe61:	89 4e 0c             	mov    DWORD PTR [esi+0xc],ecx
  54fe64:	8b ce                	mov    ecx,esi
  54fe66:	e8 73 a1 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  54fe6b:	8b ce                	mov    ecx,esi
  54fe6d:	e8 6c a1 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  54fe72:	68 10 8f 6d 00       	push   0x6d8f10 ; ["isConnectNow"]
  54fe77:	8d 8d e8 00 00 00    	lea    ecx,[ebp+0xe8]
  54fe7d:	c6 45 fc 11          	mov    BYTE PTR [ebp-0x4],0x11
  54fe81:	e8 58 38 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  54fe86:	8b c8                	mov    ecx,eax
  54fe88:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  54fe8c:	e8 f4 45 eb ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  54fe91:	83 ec 10             	sub    esp,0x10
  54fe94:	8d 85 e8 00 00 00    	lea    eax,[ebp+0xe8]
  54fe9a:	8b cc                	mov    ecx,esp
  54fe9c:	89 65 e4             	mov    DWORD PTR [ebp-0x1c],esp
  54fe9f:	50                   	push   eax
  54fea0:	e8 66 24 eb ff       	call   0x40230b ; ["call resolved=0x469d20 "]
  54fea5:	68 30 89 6d 00       	push   0x6d8930 ; ["param"]
  54feaa:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  54fead:	c6 45 fc 12          	mov    BYTE PTR [ebp-0x4],0x12
  54feb1:	e8 28 38 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  54feb6:	8b c8                	mov    ecx,eax
  54feb8:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  54febc:	e8 c4 45 eb ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  54fec1:	6a 00                	push   0x0
  54fec3:	6a 00                	push   0x0
  54fec5:	6a 20                	push   0x20
  54fec7:	6a ff                	push   0xffffffff
  54fec9:	8d 45 48             	lea    eax,[ebp+0x48]
  54fecc:	50                   	push   eax
  54fecd:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  54fed0:	e8 49 89 eb ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  54fed5:	8d 4d 48             	lea    ecx,[ebp+0x48]
  54fed8:	e8 26 3b eb ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  54fedd:	6a 00                	push   0x0
  54fedf:	6a 00                	push   0x0
  54fee1:	6a 20                	push   0x20
  54fee3:	6a ff                	push   0xffffffff
  54fee5:	8d 45 00             	lea    eax,[ebp+0x0]
  54fee8:	50                   	push   eax
  54fee9:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  54feec:	e8 2d 89 eb ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  54fef1:	8b f0                	mov    esi,eax
  54fef3:	83 7e 14 10          	cmp    DWORD PTR [esi+0x14],0x10
  54fef7:	c6 45 fc 13          	mov    BYTE PTR [ebp-0x4],0x13
  54fefb:	72 02                	jb     0x54feff
  54fefd:	8b 36                	mov    esi,DWORD PTR [esi]
  54feff:	6a 5c                	push   0x5c
  54ff01:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  54ff06:	e8 5b 88 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  54ff0b:	83 c4 08             	add    esp,0x8
  54ff0e:	85 c0                	test   eax,eax
  54ff10:	74 12                	je     0x54ff24
  54ff12:	6a 5c                	push   0x5c
  54ff14:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  54ff19:	e8 48 88 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  54ff1e:	83 c4 08             	add    esp,0x8
  54ff21:	40                   	inc    eax
  54ff22:	eb 05                	jmp    0x54ff29
  54ff24:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  54ff29:	56                   	push   esi
  54ff2a:	68 20 8f 6d 00       	push   0x6d8f20 ; ["BtFarawayDevice::DeviceInfoDataBuild"]
  54ff2f:	68 4b 02 00 00       	push   0x24b
  54ff34:	50                   	push   eax
  54ff35:	68 50 8f 6d 00       	push   0x6d8f50 ; ["[ConntctionModule][%s:%d][%s]: FARAWAYBT/FARAWAYWLAN send data is: %s\n"]
  54ff3a:	8d 45 e4             	lea    eax,[ebp-0x1c]
  54ff3d:	c7 45 e4 02 00 00 00 	mov    DWORD PTR [ebp-0x1c],0x2
  54ff44:	50                   	push   eax
  54ff45:	8d 45 48             	lea    eax,[ebp+0x48]
  54ff48:	50                   	push   eax
  54ff49:	e8 bb 70 eb ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  54ff4e:	83 c4 1c             	add    esp,0x1c
  54ff51:	8d 4d 48             	lea    ecx,[ebp+0x48]
  54ff54:	e8 aa 3a eb ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  54ff59:	8d 4d 00             	lea    ecx,[ebp+0x0]
  54ff5c:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  54ff60:	e8 9e 3a eb ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  54ff65:	6a 00                	push   0x0
  54ff67:	6a 00                	push   0x0
  54ff69:	6a 20                	push   0x20
  54ff6b:	6a ff                	push   0xffffffff
  54ff6d:	8d 45 00             	lea    eax,[ebp+0x0]
  54ff70:	50                   	push   eax
  54ff71:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  54ff74:	e8 a5 88 eb ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  54ff79:	8b c8                	mov    ecx,eax
  54ff7b:	83 79 14 10          	cmp    DWORD PTR [ecx+0x14],0x10
  54ff7f:	72 02                	jb     0x54ff83
  54ff81:	8b 09                	mov    ecx,DWORD PTR [ecx]
  54ff83:	8d 51 01             	lea    edx,[ecx+0x1]
  54ff86:	8a 01                	mov    al,BYTE PTR [ecx]
  54ff88:	41                   	inc    ecx
  54ff89:	84 c0                	test   al,al
  54ff8b:	75 f9                	jne    0x54ff86
  54ff8d:	8b 7d c4             	mov    edi,DWORD PTR [ebp-0x3c]
  54ff90:	2b ca                	sub    ecx,edx
  54ff92:	89 0f                	mov    DWORD PTR [edi],ecx
  54ff94:	8d 4d 00             	lea    ecx,[ebp+0x0]
  54ff97:	e8 67 3a eb ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  54ff9c:	8b 0f                	mov    ecx,DWORD PTR [edi]
  54ff9e:	f3 0f 7e 05 a8 68 6c 	movq   xmm0,QWORD PTR ds:0x6c68a8 ; ["PAY_LOAD_1"]
  54ffa6:	83 c1 04             	add    ecx,0x4
  54ffa9:	66 0f d6 03          	movq   QWORD PTR [ebx],xmm0
  54ffad:	66 a1 b0 68 6c 00    	mov    ax,ds:0x6c68b0 ; ["_1"]
  54ffb3:	66 89 43 08          	mov    WORD PTR [ebx+0x8],ax
  54ffb7:	8b c1                	mov    eax,ecx
  54ffb9:	c1 f8 18             	sar    eax,0x18
  54ffbc:	88 43 0a             	mov    BYTE PTR [ebx+0xa],al
  54ffbf:	8b c1                	mov    eax,ecx
  54ffc1:	c1 f8 10             	sar    eax,0x10
  54ffc4:	6a 00                	push   0x0
  54ffc6:	88 43 0b             	mov    BYTE PTR [ebx+0xb],al
  54ffc9:	8b c1                	mov    eax,ecx
  54ffcb:	6a 00                	push   0x0
  54ffcd:	c1 f8 08             	sar    eax,0x8
  54ffd0:	6a 20                	push   0x20
  54ffd2:	88 43 0c             	mov    BYTE PTR [ebx+0xc],al
  54ffd5:	8d 45 48             	lea    eax,[ebp+0x48]
  54ffd8:	6a ff                	push   0xffffffff
  54ffda:	88 4b 0d             	mov    BYTE PTR [ebx+0xd],cl
  54ffdd:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  54ffe0:	50                   	push   eax
  54ffe1:	c7 43 0e 23 70 63 63 	mov    DWORD PTR [ebx+0xe],0x63637023
  54ffe8:	e8 31 88 eb ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  54ffed:	8b f0                	mov    esi,eax
  54ffef:	83 7e 14 10          	cmp    DWORD PTR [esi+0x14],0x10
  54fff3:	c6 45 fc 14          	mov    BYTE PTR [ebp-0x4],0x14
  54fff7:	72 02                	jb     0x54fffb
  54fff9:	8b 36                	mov    esi,DWORD PTR [esi]
  54fffb:	8d 4e 01             	lea    ecx,[esi+0x1]
  54fffe:	66 90                	xchg   ax,ax
  550000:	8a 06                	mov    al,BYTE PTR [esi]
  550002:	46                   	inc    esi
  550003:	84 c0                	test   al,al
  550005:	75 f9                	jne    0x550000
  550007:	6a 00                	push   0x0
  550009:	6a 00                	push   0x0
  55000b:	6a 20                	push   0x20
  55000d:	6a ff                	push   0xffffffff
  55000f:	8d 45 00             	lea    eax,[ebp+0x0]
  550012:	2b f1                	sub    esi,ecx
  550014:	50                   	push   eax
  550015:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  550018:	e8 01 88 eb ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  55001d:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  550021:	72 02                	jb     0x550025
  550023:	8b 00                	mov    eax,DWORD PTR [eax]
  550025:	56                   	push   esi
  550026:	50                   	push   eax
  550027:	8d 43 12             	lea    eax,[ebx+0x12]
  55002a:	50                   	push   eax
  55002b:	e8 5a 87 11 00       	call   0x66878a ; ["call resolved=0x66878a "]
  550030:	83 c4 0c             	add    esp,0xc
  550033:	8d 4d 00             	lea    ecx,[ebp+0x0]
  550036:	e8 c8 39 eb ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  55003b:	8d 4d 48             	lea    ecx,[ebp+0x48]
  55003e:	e8 c0 39 eb ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  550043:	83 07 12             	add    DWORD PTR [edi],0x12
  550046:	8b 55 2c             	mov    edx,DWORD PTR [ebp+0x2c]
  550049:	83 fa 10             	cmp    edx,0x10
  55004c:	72 28                	jb     0x550076
  55004e:	8b 4d 18             	mov    ecx,DWORD PTR [ebp+0x18]
  550051:	42                   	inc    edx
  550052:	8b c1                	mov    eax,ecx
  550054:	81 fa 00 10 00 00    	cmp    edx,0x1000
  55005a:	72 10                	jb     0x55006c
  55005c:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  55005f:	83 c2 23             	add    edx,0x23
  550062:	2b c1                	sub    eax,ecx
  550064:	83 c0 fc             	add    eax,0xfffffffc
  550067:	83 f8 1f             	cmp    eax,0x1f
  55006a:	77 30                	ja     0x55009c
  55006c:	52                   	push   edx
  55006d:	51                   	push   ecx
  55006e:	e8 27 20 eb ff       	call   0x40209a ; ["call resolved=0x6665be "]
  550073:	83 c4 08             	add    esp,0x8
  550076:	8b 55 44             	mov    edx,DWORD PTR [ebp+0x44]
  550079:	83 fa 10             	cmp    edx,0x10
  55007c:	72 2e                	jb     0x5500ac
  55007e:	8b 4d 30             	mov    ecx,DWORD PTR [ebp+0x30]
  550081:	42                   	inc    edx
  550082:	8b c1                	mov    eax,ecx
  550084:	81 fa 00 10 00 00    	cmp    edx,0x1000
  55008a:	72 16                	jb     0x5500a2
  55008c:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  55008f:	83 c2 23             	add    edx,0x23
  550092:	2b c1                	sub    eax,ecx
  550094:	83 c0 fc             	add    eax,0xfffffffc
  550097:	83 f8 1f             	cmp    eax,0x1f
  55009a:	76 06                	jbe    0x5500a2
  55009c:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5500a2:	52                   	push   edx
  5500a3:	51                   	push   ecx
  5500a4:	e8 f1 1f eb ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5500a9:	83 c4 08             	add    esp,0x8
  5500ac:	8d 8d e8 00 00 00    	lea    ecx,[ebp+0xe8]
  5500b2:	e8 27 9f eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5500b7:	ff b5 e8 00 00 00    	push   DWORD PTR [ebp+0xe8]
  5500bd:	8d 8d f0 00 00 00    	lea    ecx,[ebp+0xf0]
  5500c3:	e8 86 98 eb ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  5500c8:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  5500cb:	e8 0e 9f eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5500d0:	ff 75 d4             	push   DWORD PTR [ebp-0x2c]
  5500d3:	8d 4d dc             	lea    ecx,[ebp-0x24]
  5500d6:	e8 73 98 eb ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  5500db:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  5500de:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  5500e5:	59                   	pop    ecx
  5500e6:	5f                   	pop    edi
  5500e7:	5e                   	pop    esi
  5500e8:	5b                   	pop    ebx
  5500e9:	8b 8d fc 00 00 00    	mov    ecx,DWORD PTR [ebp+0xfc]
  5500ef:	33 cd                	xor    ecx,ebp
  5500f1:	e8 99 43 eb ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5500f6:	8d a5 00 01 00 00    	lea    esp,[ebp+0x100]
  5500fc:	5d                   	pop    ebp
  5500fd:	c2 08 00             	ret    0x8
