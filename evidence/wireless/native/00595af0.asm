; HttpEventSubscriber::farawayDeviceListUpdateHandle; image base 0x400000; static annotation only
  595af0:	55                   	push   ebp
  595af1:	8b ec                	mov    ebp,esp
  595af3:	6a ff                	push   0xffffffff
  595af5:	68 d0 ef 68 00       	push   0x68efd0
  595afa:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  595b00:	50                   	push   eax
  595b01:	81 ec 38 01 00 00    	sub    esp,0x138
  595b07:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  595b0c:	33 c5                	xor    eax,ebp
  595b0e:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  595b11:	56                   	push   esi
  595b12:	57                   	push   edi
  595b13:	50                   	push   eax
  595b14:	8d 45 f4             	lea    eax,[ebp-0xc]
  595b17:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  595b1d:	8b 7d 08             	mov    edi,DWORD PTR [ebp+0x8]
  595b20:	b9 db 96 7a 00       	mov    ecx,0x7a96db
  595b25:	e8 c4 2f e7 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  595b2a:	64 a1 2c 00 00 00    	mov    eax,fs:0x2c
  595b30:	8b 0d 00 bc 79 00    	mov    ecx,DWORD PTR ds:0x79bc00
  595b36:	8b 34 88             	mov    esi,DWORD PTR [eax+ecx*4]
  595b39:	a1 ec 64 79 00       	mov    eax,ds:0x7964ec
  595b3e:	3b 86 0c 01 00 00    	cmp    eax,DWORD PTR [esi+0x10c]
  595b44:	0f 8f e8 01 00 00    	jg     0x595d32
  595b4a:	57                   	push   edi
  595b4b:	ff 35 e0 64 79 00    	push   DWORD PTR ds:0x7964e0
  595b51:	8d 85 c8 fe ff ff    	lea    eax,[ebp-0x138]
  595b57:	ff 35 dc 64 79 00    	push   DWORD PTR ds:0x7964dc
  595b5d:	50                   	push   eax
  595b5e:	e8 91 ca e6 ff       	call   0x4025f4 ; ["call resolved=0x56c080 "]
  595b63:	8b 85 c8 fe ff ff    	mov    eax,DWORD PTR [ebp-0x138]
  595b69:	83 c4 10             	add    esp,0x10
  595b6c:	3b 05 e0 64 79 00    	cmp    eax,DWORD PTR ds:0x7964e0
  595b72:	0f 84 9d 01 00 00    	je     0x595d15
  595b78:	e8 fb 22 e7 ff       	call   0x407e78 ; ["call resolved=0x59bf60 "]
  595b7d:	84 c0                	test   al,al
  595b7f:	75 3f                	jne    0x595bc0
  595b81:	6a 5c                	push   0x5c
  595b83:	68 c8 e1 6d 00       	push   0x6de1c8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\EventNotify\\HttpEventSubscriber.cpp"]
  595b88:	e8 d9 2b 0d 00       	call   0x668766 ; ["call resolved=0x668766 "]
  595b8d:	83 c4 08             	add    esp,0x8
  595b90:	85 c0                	test   eax,eax
  595b92:	74 12                	je     0x595ba6
  595b94:	6a 5c                	push   0x5c
  595b96:	68 c8 e1 6d 00       	push   0x6de1c8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\EventNotify\\HttpEventSubscriber.cpp"]
  595b9b:	e8 c6 2b 0d 00       	call   0x668766 ; ["call resolved=0x668766 "]
  595ba0:	83 c4 08             	add    esp,0x8
  595ba3:	40                   	inc    eax
  595ba4:	eb 05                	jmp    0x595bab
  595ba6:	b8 c8 e1 6d 00       	mov    eax,0x6de1c8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\EventNotify\\HttpEventSubscriber.cpp"]
  595bab:	68 70 e6 6d 00       	push   0x6de670 ; ["HttpEventSubscriber::farawayDeviceListUpdateHandle"]
  595bb0:	68 c9 00 00 00       	push   0xc9
  595bb5:	50                   	push   eax
  595bb6:	68 b0 e6 6d 00       	push   0x6de6b0 ; ["[ConntctionModule][%s:%d][%s]:deviceId is empty, /device/list request failed!"]
  595bbb:	e9 2a 01 00 00       	jmp    0x595cea
  595bc0:	a1 fc 64 79 00       	mov    eax,ds:0x7964fc
  595bc5:	3b 86 0c 01 00 00    	cmp    eax,DWORD PTR [esi+0x10c]
  595bcb:	0f 8f ab 04 00 00    	jg     0x59607c
  595bd1:	a1 f0 64 79 00       	mov    eax,ds:0x7964f0
  595bd6:	8a 40 38             	mov    al,BYTE PTR [eax+0x38]
  595bd9:	90                   	nop
  595bda:	84 c0                	test   al,al
  595bdc:	0f 85 ce 00 00 00    	jne    0x595cb0
  595be2:	8b 0d f0 64 79 00    	mov    ecx,DWORD PTR ds:0x7964f0
  595be8:	b0 01                	mov    al,0x1
  595bea:	83 c1 38             	add    ecx,0x38
  595bed:	86 01                	xchg   BYTE PTR [ecx],al
  595bef:	57                   	push   edi
  595bf0:	8d 8d e8 fe ff ff    	lea    ecx,[ebp-0x118]
  595bf6:	c7 85 e4 fe ff ff f0 	mov    DWORD PTR [ebp-0x11c],0x7964f0
  595c00:	e8 86 00 e7 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  595c05:	6a 1c                	push   0x1c
  595c07:	c7 45 fc 0c 00 00 00 	mov    DWORD PTR [ebp-0x4],0xc
  595c0e:	e8 a3 d5 e6 ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  595c13:	8b f0                	mov    esi,eax
  595c15:	83 c4 04             	add    esp,0x4
  595c18:	89 b5 c8 fe ff ff    	mov    DWORD PTR [ebp-0x138],esi
  595c1e:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  595c22:	85 f6                	test   esi,esi
  595c24:	74 19                	je     0x595c3f
  595c26:	8b 8d e4 fe ff ff    	mov    ecx,DWORD PTR [ebp-0x11c]
  595c2c:	8d 85 e8 fe ff ff    	lea    eax,[ebp-0x118]
  595c32:	89 0e                	mov    DWORD PTR [esi],ecx
  595c34:	8d 4e 04             	lea    ecx,[esi+0x4]
  595c37:	50                   	push   eax
  595c38:	e8 4e 00 e7 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  595c3d:	eb 02                	jmp    0x595c41
  595c3f:	33 f6                	xor    esi,esi
  595c41:	89 b5 c8 fe ff ff    	mov    DWORD PTR [ebp-0x138],esi
  595c47:	8d 85 c0 fe ff ff    	lea    eax,[ebp-0x140]
  595c4d:	c6 45 fc 0e          	mov    BYTE PTR [ebp-0x4],0xe
  595c51:	50                   	push   eax
  595c52:	6a 00                	push   0x0
  595c54:	56                   	push   esi
  595c55:	68 42 8c 40 00       	push   0x408c42
  595c5a:	6a 00                	push   0x0
  595c5c:	6a 00                	push   0x0
  595c5e:	ff 15 14 e4 79 00    	call   DWORD PTR ds:0x79e414
  595c64:	83 c4 18             	add    esp,0x18
  595c67:	89 85 bc fe ff ff    	mov    DWORD PTR [ebp-0x144],eax
  595c6d:	85 c0                	test   eax,eax
  595c6f:	0f 84 75 04 00 00    	je     0x5960ea
  595c75:	8d 8d e8 fe ff ff    	lea    ecx,[ebp-0x118]
  595c7b:	c6 45 fc 10          	mov    BYTE PTR [ebp-0x4],0x10
  595c7f:	e8 7f dd e6 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  595c84:	8b 85 c0 fe ff ff    	mov    eax,DWORD PTR [ebp-0x140]
  595c8a:	85 c0                	test   eax,eax
  595c8c:	0f 84 4b 04 00 00    	je     0x5960dd
  595c92:	50                   	push   eax
  595c93:	ff b5 bc fe ff ff    	push   DWORD PTR [ebp-0x144]
  595c99:	e8 40 fa 0c 00       	call   0x6656de ; ["call resolved=0x6656de "]
  595c9e:	83 c4 08             	add    esp,0x8
  595ca1:	85 c0                	test   eax,eax
  595ca3:	0f 85 3b 04 00 00    	jne    0x5960e4
  595ca9:	c7 45 fc ff ff ff ff 	mov    DWORD PTR [ebp-0x4],0xffffffff
  595cb0:	6a 5c                	push   0x5c
  595cb2:	68 c8 e1 6d 00       	push   0x6de1c8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\EventNotify\\HttpEventSubscriber.cpp"]
  595cb7:	e8 aa 2a 0d 00       	call   0x668766 ; ["call resolved=0x668766 "]
  595cbc:	83 c4 08             	add    esp,0x8
  595cbf:	85 c0                	test   eax,eax
  595cc1:	74 12                	je     0x595cd5
  595cc3:	6a 5c                	push   0x5c
  595cc5:	68 c8 e1 6d 00       	push   0x6de1c8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\EventNotify\\HttpEventSubscriber.cpp"]
  595cca:	e8 97 2a 0d 00       	call   0x668766 ; ["call resolved=0x668766 "]
  595ccf:	83 c4 08             	add    esp,0x8
  595cd2:	40                   	inc    eax
  595cd3:	eb 05                	jmp    0x595cda
  595cd5:	b8 c8 e1 6d 00       	mov    eax,0x6de1c8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\EventNotify\\HttpEventSubscriber.cpp"]
  595cda:	68 70 e6 6d 00       	push   0x6de670 ; ["HttpEventSubscriber::farawayDeviceListUpdateHandle"]
  595cdf:	68 ed 00 00 00       	push   0xed
  595ce4:	50                   	push   eax
  595ce5:	68 10 e7 6d 00       	push   0x6de710 ; ["[ConntctionModule][%s:%d][%s]:Leave farawayDeviceListUpdateHandle"]
  595cea:	8d 85 c8 fe ff ff    	lea    eax,[ebp-0x138]
  595cf0:	c7 85 c8 fe ff ff 02 	mov    DWORD PTR [ebp-0x138],0x2
  595cfa:	50                   	push   eax
  595cfb:	8d 85 cc fe ff ff    	lea    eax,[ebp-0x134]
  595d01:	50                   	push   eax
  595d02:	e8 02 13 e7 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  595d07:	83 c4 18             	add    esp,0x18
  595d0a:	8d 8d cc fe ff ff    	lea    ecx,[ebp-0x134]
  595d10:	e8 ee dc e6 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  595d15:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  595d18:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  595d1f:	59                   	pop    ecx
  595d20:	5f                   	pop    edi
  595d21:	5e                   	pop    esi
  595d22:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  595d25:	33 cd                	xor    ecx,ebp
  595d27:	e8 63 e7 e6 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  595d2c:	8b e5                	mov    esp,ebp
  595d2e:	5d                   	pop    ebp
  595d2f:	c2 04 00             	ret    0x4
  595d32:	68 ec 64 79 00       	push   0x7964ec
  595d37:	e8 1e 30 e7 ff       	call   0x408d5a ; ["call resolved=0x666bc0 "]
  595d3c:	83 c4 04             	add    esp,0x4
  595d3f:	83 3d ec 64 79 00 ff 	cmp    DWORD PTR ds:0x7964ec,0xffffffff
  595d46:	0f 85 fe fd ff ff    	jne    0x595b4a
  595d4c:	a1 58 a6 6d 00       	mov    eax,ds:0x6da658 ; ["Event"]
  595d51:	f3 0f 7e 05 50 a6 6d 	movq   xmm0,QWORD PTR ds:0x6da650 ; ["WifiOpenEvent"]
  595d59:	89 85 08 ff ff ff    	mov    DWORD PTR [ebp-0xf8],eax
  595d5f:	a0 5c a6 6d 00       	mov    al,ds:0x6da65c
  595d64:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  595d6b:	c7 85 14 ff ff ff 0f 	mov    DWORD PTR [ebp-0xec],0xf
  595d75:	c7 85 10 ff ff ff 0d 	mov    DWORD PTR [ebp-0xf0],0xd
  595d7f:	66 0f d6 85 00 ff ff 	movq   QWORD PTR [ebp-0x100],xmm0
  595d87:	88 85 0c ff ff ff    	mov    BYTE PTR [ebp-0xf4],al
  595d8d:	c6 85 0d ff ff ff 00 	mov    BYTE PTR [ebp-0xf3],0x0
  595d94:	c7 85 18 ff ff ff 00 	mov    DWORD PTR [ebp-0xe8],0x0
  595d9e:	8d 8d 18 ff ff ff    	lea    ecx,[ebp-0xe8]
  595da4:	6a 20                	push   0x20
  595da6:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  595daa:	c7 85 28 ff ff ff 00 	mov    DWORD PTR [ebp-0xd8],0x0
  595db4:	c7 85 2c ff ff ff 0f 	mov    DWORD PTR [ebp-0xd4],0xf
  595dbe:	c6 85 18 ff ff ff 00 	mov    BYTE PTR [ebp-0xe8],0x0
  595dc5:	e8 e1 bb e6 ff       	call   0x4019ab ; ["call resolved=0x480060 "]
  595dca:	0f 10 05 60 a6 6d 00 	movups xmm0,XMMWORD PTR ds:0x6da660 ; ["BluetoothOpenEvent"]
  595dd1:	c7 85 28 ff ff ff 12 	mov    DWORD PTR [ebp-0xd8],0x12
  595ddb:	c7 85 2c ff ff ff 1f 	mov    DWORD PTR [ebp-0xd4],0x1f
  595de5:	0f 11 00             	movups XMMWORD PTR [eax],xmm0
  595de8:	0f b7 0d 70 a6 6d 00 	movzx  ecx,WORD PTR ds:0x6da670 ; ["nt"]
  595def:	66 89 48 10          	mov    WORD PTR [eax+0x10],cx
  595df3:	c6 40 12 00          	mov    BYTE PTR [eax+0x12],0x0
  595df7:	89 85 18 ff ff ff    	mov    DWORD PTR [ebp-0xe8],eax
  595dfd:	f3 0f 7e 05 78 a6 6d 	movq   xmm0,QWORD PTR ds:0x6da678 ; ["LogOnEvent"]
  595e05:	66 a1 80 a6 6d 00    	mov    ax,ds:0x6da680 ; ["nt"]
  595e0b:	c7 85 44 ff ff ff 0f 	mov    DWORD PTR [ebp-0xbc],0xf
  595e15:	c7 85 40 ff ff ff 0a 	mov    DWORD PTR [ebp-0xc0],0xa
  595e1f:	66 0f d6 85 30 ff ff 	movq   QWORD PTR [ebp-0xd0],xmm0
  595e27:	66 89 85 38 ff ff ff 	mov    WORD PTR [ebp-0xc8],ax
  595e2e:	c6 85 3a ff ff ff 00 	mov    BYTE PTR [ebp-0xc6],0x0
  595e35:	f3 0f 7e 05 6c e1 6d 	movq   xmm0,QWORD PTR ds:0x6de16c ; ["PcsuiteEvent"]
  595e3d:	a1 74 e1 6d 00       	mov    eax,ds:0x6de174 ; ["vent"]
  595e42:	c7 85 5c ff ff ff 0f 	mov    DWORD PTR [ebp-0xa4],0xf
  595e4c:	c7 85 58 ff ff ff 0c 	mov    DWORD PTR [ebp-0xa8],0xc
  595e56:	66 0f d6 85 48 ff ff 	movq   QWORD PTR [ebp-0xb8],xmm0
  595e5e:	89 85 50 ff ff ff    	mov    DWORD PTR [ebp-0xb0],eax
  595e64:	c6 85 54 ff ff ff 00 	mov    BYTE PTR [ebp-0xac],0x0
  595e6b:	c7 85 60 ff ff ff 00 	mov    DWORD PTR [ebp-0xa0],0x0
  595e75:	8d 8d 60 ff ff ff    	lea    ecx,[ebp-0xa0]
  595e7b:	6a 20                	push   0x20
  595e7d:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  595e81:	c7 85 70 ff ff ff 00 	mov    DWORD PTR [ebp-0x90],0x0
  595e8b:	c7 85 74 ff ff ff 0f 	mov    DWORD PTR [ebp-0x8c],0xf
  595e95:	c6 85 60 ff ff ff 00 	mov    BYTE PTR [ebp-0xa0],0x0
  595e9c:	e8 0a bb e6 ff       	call   0x4019ab ; ["call resolved=0x480060 "]
  595ea1:	0f 10 05 dc e2 6d 00 	movups xmm0,XMMWORD PTR ds:0x6de2dc ; ["EnterConnectCenter"]
  595ea8:	c7 85 70 ff ff ff 12 	mov    DWORD PTR [ebp-0x90],0x12
  595eb2:	c7 85 74 ff ff ff 1f 	mov    DWORD PTR [ebp-0x8c],0x1f
  595ebc:	0f 11 00             	movups XMMWORD PTR [eax],xmm0
  595ebf:	0f b7 0d ec e2 6d 00 	movzx  ecx,WORD PTR ds:0x6de2ec ; ["er"]
  595ec6:	66 89 48 10          	mov    WORD PTR [eax+0x10],cx
  595eca:	c6 40 12 00          	mov    BYTE PTR [eax+0x12],0x0
  595ece:	89 85 60 ff ff ff    	mov    DWORD PTR [ebp-0xa0],eax
  595ed4:	c7 85 78 ff ff ff 00 	mov    DWORD PTR [ebp-0x88],0x0
  595ede:	8d 8d 78 ff ff ff    	lea    ecx,[ebp-0x88]
  595ee4:	6a 20                	push   0x20
  595ee6:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  595eea:	c7 45 88 00 00 00 00 	mov    DWORD PTR [ebp-0x78],0x0
  595ef1:	c7 45 8c 0f 00 00 00 	mov    DWORD PTR [ebp-0x74],0xf
  595ef8:	c6 85 78 ff ff ff 00 	mov    BYTE PTR [ebp-0x88],0x0
  595eff:	e8 a7 ba e6 ff       	call   0x4019ab ; ["call resolved=0x480060 "]
  595f04:	0f 10 05 f4 e2 6d 00 	movups xmm0,XMMWORD PTR ds:0x6de2f4 ; ["NetworkChangeEvent"]
  595f0b:	c7 45 88 12 00 00 00 	mov    DWORD PTR [ebp-0x78],0x12
  595f12:	c7 45 8c 1f 00 00 00 	mov    DWORD PTR [ebp-0x74],0x1f
  595f19:	0f 11 00             	movups XMMWORD PTR [eax],xmm0
  595f1c:	0f b7 0d 04 e3 6d 00 	movzx  ecx,WORD PTR ds:0x6de304 ; ["nt"]
  595f23:	66 89 48 10          	mov    WORD PTR [eax+0x10],cx
  595f27:	c6 40 12 00          	mov    BYTE PTR [eax+0x12],0x0
  595f2b:	89 85 78 ff ff ff    	mov    DWORD PTR [ebp-0x88],eax
  595f31:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  595f35:	c7 45 90 00 00 00 00 	mov    DWORD PTR [ebp-0x70],0x0
  595f3c:	6a 20                	push   0x20
  595f3e:	8d 4d 90             	lea    ecx,[ebp-0x70]
  595f41:	c7 45 a0 00 00 00 00 	mov    DWORD PTR [ebp-0x60],0x0
  595f48:	c7 45 a4 0f 00 00 00 	mov    DWORD PTR [ebp-0x5c],0xf
  595f4f:	c6 45 90 00          	mov    BYTE PTR [ebp-0x70],0x0
  595f53:	e8 53 ba e6 ff       	call   0x4019ab ; ["call resolved=0x480060 "]
  595f58:	0f 10 05 54 e1 6d 00 	movups xmm0,XMMWORD PTR ds:0x6de154 ; ["AccountChangeEvent"]
  595f5f:	c7 45 a0 12 00 00 00 	mov    DWORD PTR [ebp-0x60],0x12
  595f66:	c7 45 a4 1f 00 00 00 	mov    DWORD PTR [ebp-0x5c],0x1f
  595f6d:	0f 11 00             	movups XMMWORD PTR [eax],xmm0
  595f70:	0f b7 0d 64 e1 6d 00 	movzx  ecx,WORD PTR ds:0x6de164 ; ["nt"]
  595f77:	66 89 48 10          	mov    WORD PTR [eax+0x10],cx
  595f7b:	c6 40 12 00          	mov    BYTE PTR [eax+0x12],0x0
  595f7f:	89 45 90             	mov    DWORD PTR [ebp-0x70],eax
  595f82:	c7 45 a8 00 00 00 00 	mov    DWORD PTR [ebp-0x58],0x0
  595f89:	8d 4d a8             	lea    ecx,[ebp-0x58]
  595f8c:	6a 20                	push   0x20
  595f8e:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  595f92:	c7 45 b8 00 00 00 00 	mov    DWORD PTR [ebp-0x48],0x0
  595f99:	c7 45 bc 0f 00 00 00 	mov    DWORD PTR [ebp-0x44],0xf
  595fa0:	c6 45 a8 00          	mov    BYTE PTR [ebp-0x58],0x0
  595fa4:	e8 02 ba e6 ff       	call   0x4019ab ; ["call resolved=0x480060 "]
  595fa9:	0f 10 05 7c e1 6d 00 	movups xmm0,XMMWORD PTR ds:0x6de17c ; ["DeviceListUpdate"]
  595fb0:	c7 45 b8 10 00 00 00 	mov    DWORD PTR [ebp-0x48],0x10
  595fb7:	c7 45 bc 1f 00 00 00 	mov    DWORD PTR [ebp-0x44],0x1f
  595fbe:	0f 11 00             	movups XMMWORD PTR [eax],xmm0
  595fc1:	c6 40 10 00          	mov    BYTE PTR [eax+0x10],0x0
  595fc5:	89 45 a8             	mov    DWORD PTR [ebp-0x58],eax
  595fc8:	6a 18                	push   0x18
  595fca:	c7 45 c0 00 00 00 00 	mov    DWORD PTR [ebp-0x40],0x0
  595fd1:	8d 4d c0             	lea    ecx,[ebp-0x40]
  595fd4:	68 20 e3 6d 00       	push   0x6de320 ; ["RepeatAccountChangeEvent"]
  595fd9:	c6 45 fc 08          	mov    BYTE PTR [ebp-0x4],0x8
  595fdd:	c7 45 d0 00 00 00 00 	mov    DWORD PTR [ebp-0x30],0x0
  595fe4:	c7 45 d4 0f 00 00 00 	mov    DWORD PTR [ebp-0x2c],0xf
  595feb:	c6 45 c0 00          	mov    BYTE PTR [ebp-0x40],0x0
  595fef:	e8 23 e4 e6 ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  595ff4:	6a 18                	push   0x18
  595ff6:	c7 45 d8 00 00 00 00 	mov    DWORD PTR [ebp-0x28],0x0
  595ffd:	8d 4d d8             	lea    ecx,[ebp-0x28]
  596000:	68 90 e1 6d 00       	push   0x6de190 ; ["devicePreconnectAlnormal"]
  596005:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  596009:	c7 45 e8 00 00 00 00 	mov    DWORD PTR [ebp-0x18],0x0
  596010:	c7 45 ec 0f 00 00 00 	mov    DWORD PTR [ebp-0x14],0xf
  596017:	c6 45 d8 00          	mov    BYTE PTR [ebp-0x28],0x0
  59601b:	e8 f7 e3 e6 ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  596020:	8d 85 c7 fe ff ff    	lea    eax,[ebp-0x139]
  596026:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  59602a:	50                   	push   eax
  59602b:	8d 4d f0             	lea    ecx,[ebp-0x10]
  59602e:	51                   	push   ecx
  59602f:	8d 95 00 ff ff ff    	lea    edx,[ebp-0x100]
  596035:	b9 dc 64 79 00       	mov    ecx,0x7964dc
  59603a:	52                   	push   edx
  59603b:	e8 88 32 e7 ff       	call   0x4092c8 ; ["call resolved=0x46b760 "]
  596040:	68 2d 56 40 00       	push   0x40562d
  596045:	6a 0a                	push   0xa
  596047:	6a 18                	push   0x18
  596049:	8d 85 00 ff ff ff    	lea    eax,[ebp-0x100]
  59604f:	c6 45 fc 00          	mov    BYTE PTR [ebp-0x4],0x0
  596053:	50                   	push   eax
  596054:	e8 39 13 e7 ff       	call   0x407392 ; ["call resolved=0x6663ee "]
  596059:	68 10 fb 6a 00       	push   0x6afb10
  59605e:	e8 a7 fa e6 ff       	call   0x405b0a ; ["call resolved=0x666a28 "]
  596063:	68 ec 64 79 00       	push   0x7964ec
  596068:	c7 45 fc ff ff ff ff 	mov    DWORD PTR [ebp-0x4],0xffffffff
  59606f:	e8 ef 2d e7 ff       	call   0x408e63 ; ["call resolved=0x666b64 "]
  596074:	83 c4 08             	add    esp,0x8
  596077:	e9 ce fa ff ff       	jmp    0x595b4a
  59607c:	68 fc 64 79 00       	push   0x7964fc
  596081:	e8 d4 2c e7 ff       	call   0x408d5a ; ["call resolved=0x666bc0 "]
  596086:	83 c4 04             	add    esp,0x4
  596089:	83 3d fc 64 79 00 ff 	cmp    DWORD PTR ds:0x7964fc,0xffffffff
  596090:	0f 85 3b fb ff ff    	jne    0x595bd1
  596096:	68 e8 03 00 00       	push   0x3e8
  59609b:	83 ec 28             	sub    esp,0x28
  59609e:	c7 45 fc 0b 00 00 00 	mov    DWORD PTR [ebp-0x4],0xb
  5960a5:	8b c4                	mov    eax,esp
  5960a7:	b9 f0 64 79 00       	mov    ecx,0x7964f0
  5960ac:	c7 00 c8 e9 6d 00    	mov    DWORD PTR [eax],0x6de9c8
  5960b2:	89 40 24             	mov    DWORD PTR [eax+0x24],eax
  5960b5:	e8 87 f5 e6 ff       	call   0x405641 ; ["call resolved=0x593f40 "]
  5960ba:	68 60 f9 6a 00       	push   0x6af960
  5960bf:	e8 46 fa e6 ff       	call   0x405b0a ; ["call resolved=0x666a28 "]
  5960c4:	68 fc 64 79 00       	push   0x7964fc
  5960c9:	c7 45 fc ff ff ff ff 	mov    DWORD PTR [ebp-0x4],0xffffffff
  5960d0:	e8 8e 2d e7 ff       	call   0x408e63 ; ["call resolved=0x666b64 "]
  5960d5:	83 c4 08             	add    esp,0x8
  5960d8:	e9 f4 fa ff ff       	jmp    0x595bd1
  5960dd:	6a 01                	push   0x1
  5960df:	e8 54 f6 0c 00       	call   0x665738 ; ["call resolved=0x665738 "]
  5960e4:	50                   	push   eax
  5960e5:	e8 48 f6 0c 00       	call   0x665732 ; ["call resolved=0x665732 "]
  5960ea:	6a 06                	push   0x6
  5960ec:	c7 85 c0 fe ff ff 00 	mov    DWORD PTR [ebp-0x140],0x0
  5960f6:	e8 3d f6 0c 00       	call   0x665738 ; ["call resolved=0x665738 "]
