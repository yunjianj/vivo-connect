; BtFarawayDevice::consumeMessageLoop; image base 0x400000; static annotation only
  551bf0:	55                   	push   ebp
  551bf1:	8b ec                	mov    ebp,esp
  551bf3:	6a ff                	push   0xffffffff
  551bf5:	68 70 74 68 00       	push   0x687470
  551bfa:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  551c00:	50                   	push   eax
  551c01:	81 ec 48 06 00 00    	sub    esp,0x648
  551c07:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  551c0c:	33 c5                	xor    eax,ebp
  551c0e:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  551c11:	53                   	push   ebx
  551c12:	56                   	push   esi
  551c13:	57                   	push   edi
  551c14:	50                   	push   eax
  551c15:	8d 45 f4             	lea    eax,[ebp-0xc]
  551c18:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  551c1e:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  551c21:	8b f1                	mov    esi,ecx
  551c23:	89 b5 10 fb ff ff    	mov    DWORD PTR [ebp-0x4f0],esi
  551c29:	8b c6                	mov    eax,esi
  551c2b:	33 ff                	xor    edi,edi
  551c2d:	b9 74 8b 7a 00       	mov    ecx,0x7a8b74
  551c32:	89 85 f0 fa ff ff    	mov    DWORD PTR [ebp-0x510],eax
  551c38:	89 85 a0 fa ff ff    	mov    DWORD PTR [ebp-0x560],eax
  551c3e:	89 85 fc fa ff ff    	mov    DWORD PTR [ebp-0x504],eax
  551c44:	89 bd 1c fb ff ff    	mov    DWORD PTR [ebp-0x4e4],edi
  551c4a:	89 bd 14 fb ff ff    	mov    DWORD PTR [ebp-0x4ec],edi
  551c50:	e8 99 6e eb ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  551c55:	68 e8 03 00 00       	push   0x3e8
  551c5a:	ff 15 38 e0 79 00    	call   DWORD PTR ds:0x79e038
  551c60:	a1 30 e4 79 00       	mov    eax,ds:0x79e430
  551c65:	89 85 f8 fa ff ff    	mov    DWORD PTR [ebp-0x508],eax
  551c6b:	0f 1f 44 00 00       	nop    DWORD PTR [eax+eax*1+0x0]
  551c70:	8b 06                	mov    eax,DWORD PTR [esi]
  551c72:	8b ce                	mov    ecx,esi
  551c74:	8b 40 6c             	mov    eax,DWORD PTR [eax+0x6c]
  551c77:	ff d0                	call   eax
  551c79:	84 c0                	test   al,al
  551c7b:	0f 84 8b 1b 00 00    	je     0x55380c
  551c81:	68 e8 03 00 00       	push   0x3e8
  551c86:	ff 15 38 e0 79 00    	call   DWORD PTR ds:0x79e038
  551c8c:	8b b5 fc fa ff ff    	mov    esi,DWORD PTR [ebp-0x504]
  551c92:	8d 86 7c 0e 00 00    	lea    eax,[esi+0xe7c]
  551c98:	50                   	push   eax
  551c99:	e8 64 3a 11 00       	call   0x665702 ; ["call resolved=0x665702 "]
  551c9e:	83 c4 04             	add    esp,0x4
  551ca1:	85 c0                	test   eax,eax
  551ca3:	0f 85 7f 1b 00 00    	jne    0x553828
  551ca9:	8b 85 fc fa ff ff    	mov    eax,DWORD PTR [ebp-0x504]
  551caf:	8b b6 78 0e 00 00    	mov    esi,DWORD PTR [esi+0xe78]
  551cb5:	05 7c 0e 00 00       	add    eax,0xe7c
  551cba:	50                   	push   eax
  551cbb:	e8 48 3a 11 00       	call   0x665708 ; ["call resolved=0x665708 "]
  551cc0:	83 c4 04             	add    esp,0x4
  551cc3:	85 f6                	test   esi,esi
  551cc5:	0f 84 36 1b 00 00    	je     0x553801
  551ccb:	c7 85 bc fb ff ff 00 	mov    DWORD PTR [ebp-0x444],0x0
  551cd5:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  551cdc:	c7 85 cc fb ff ff 00 	mov    DWORD PTR [ebp-0x434],0x0
  551ce6:	c7 85 d0 fb ff ff 0f 	mov    DWORD PTR [ebp-0x430],0xf
  551cf0:	c6 85 bc fb ff ff 00 	mov    BYTE PTR [ebp-0x444],0x0
  551cf7:	8b 85 fc fa ff ff    	mov    eax,DWORD PTR [ebp-0x504]
  551cfd:	05 7c 0e 00 00       	add    eax,0xe7c
  551d02:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  551d06:	50                   	push   eax
  551d07:	e8 f6 39 11 00       	call   0x665702 ; ["call resolved=0x665702 "]
  551d0c:	83 c4 04             	add    esp,0x4
  551d0f:	85 c0                	test   eax,eax
  551d11:	0f 85 17 1b 00 00    	jne    0x55382e
  551d17:	8b 85 f0 fa ff ff    	mov    eax,DWORD PTR [ebp-0x510]
  551d1d:	83 b8 78 0e 00 00 00 	cmp    DWORD PTR [eax+0xe78],0x0
  551d24:	0f 84 de 00 00 00    	je     0x551e08
  551d2a:	8b 88 70 0e 00 00    	mov    ecx,DWORD PTR [eax+0xe70]
  551d30:	49                   	dec    ecx
  551d31:	23 88 74 0e 00 00    	and    ecx,DWORD PTR [eax+0xe74]
  551d37:	8b 80 6c 0e 00 00    	mov    eax,DWORD PTR [eax+0xe6c]
  551d3d:	8b 34 88             	mov    esi,DWORD PTR [eax+ecx*4]
  551d40:	8d 85 bc fb ff ff    	lea    eax,[ebp-0x444]
  551d46:	3b c6                	cmp    eax,esi
  551d48:	0f 84 7f 00 00 00    	je     0x551dcd
  551d4e:	8b 95 d0 fb ff ff    	mov    edx,DWORD PTR [ebp-0x430]
  551d54:	83 fa 10             	cmp    edx,0x10
  551d57:	72 31                	jb     0x551d8a
  551d59:	8b 8d bc fb ff ff    	mov    ecx,DWORD PTR [ebp-0x444]
  551d5f:	42                   	inc    edx
  551d60:	8b c1                	mov    eax,ecx
  551d62:	81 fa 00 10 00 00    	cmp    edx,0x1000
  551d68:	72 16                	jb     0x551d80
  551d6a:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  551d6d:	83 c2 23             	add    edx,0x23
  551d70:	2b c1                	sub    eax,ecx
  551d72:	83 c0 fc             	add    eax,0xfffffffc
  551d75:	83 f8 1f             	cmp    eax,0x1f
  551d78:	76 06                	jbe    0x551d80
  551d7a:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  551d80:	52                   	push   edx
  551d81:	51                   	push   ecx
  551d82:	e8 13 03 eb ff       	call   0x40209a ; ["call resolved=0x6665be "]
  551d87:	83 c4 08             	add    esp,0x8
  551d8a:	c7 85 cc fb ff ff 00 	mov    DWORD PTR [ebp-0x434],0x0
  551d94:	c7 85 d0 fb ff ff 0f 	mov    DWORD PTR [ebp-0x430],0xf
  551d9e:	c6 85 bc fb ff ff 00 	mov    BYTE PTR [ebp-0x444],0x0
  551da5:	0f 10 06             	movups xmm0,XMMWORD PTR [esi]
  551da8:	0f 11 85 bc fb ff ff 	movups XMMWORD PTR [ebp-0x444],xmm0
  551daf:	f3 0f 7e 46 10       	movq   xmm0,QWORD PTR [esi+0x10]
  551db4:	66 0f d6 85 cc fb ff 	movq   QWORD PTR [ebp-0x434],xmm0
  551dbc:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  551dc3:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  551dca:	c6 06 00             	mov    BYTE PTR [esi],0x0
  551dcd:	8b b5 f0 fa ff ff    	mov    esi,DWORD PTR [ebp-0x510]
  551dd3:	8b 8e 70 0e 00 00    	mov    ecx,DWORD PTR [esi+0xe70]
  551dd9:	8b 86 6c 0e 00 00    	mov    eax,DWORD PTR [esi+0xe6c]
  551ddf:	49                   	dec    ecx
  551de0:	23 8e 74 0e 00 00    	and    ecx,DWORD PTR [esi+0xe74]
  551de6:	8b 0c 88             	mov    ecx,DWORD PTR [eax+ecx*4]
  551de9:	e8 15 1c eb ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  551dee:	83 86 78 0e 00 00 ff 	add    DWORD PTR [esi+0xe78],0xffffffff
  551df5:	75 04                	jne    0x551dfb
  551df7:	33 c0                	xor    eax,eax
  551df9:	eb 07                	jmp    0x551e02
  551dfb:	8b 86 74 0e 00 00    	mov    eax,DWORD PTR [esi+0xe74]
  551e01:	40                   	inc    eax
  551e02:	89 86 74 0e 00 00    	mov    DWORD PTR [esi+0xe74],eax
  551e08:	8b 85 fc fa ff ff    	mov    eax,DWORD PTR [ebp-0x504]
  551e0e:	05 7c 0e 00 00       	add    eax,0xe7c
  551e13:	50                   	push   eax
  551e14:	e8 ef 38 11 00       	call   0x665708 ; ["call resolved=0x665708 "]
  551e19:	8b 85 cc fb ff ff    	mov    eax,DWORD PTR [ebp-0x434]
  551e1f:	8d 8d bc fb ff ff    	lea    ecx,[ebp-0x444]
  551e25:	83 c4 04             	add    esp,0x4
  551e28:	83 bd d0 fb ff ff 10 	cmp    DWORD PTR [ebp-0x430],0x10
  551e2f:	0f 43 8d bc fb ff ff 	cmovae ecx,DWORD PTR [ebp-0x444]
  551e36:	03 c1                	add    eax,ecx
  551e38:	83 bd d0 fb ff ff 10 	cmp    DWORD PTR [ebp-0x430],0x10
  551e3f:	8d 8d bc fb ff ff    	lea    ecx,[ebp-0x444]
  551e45:	0f 43 8d bc fb ff ff 	cmovae ecx,DWORD PTR [ebp-0x444]
  551e4c:	50                   	push   eax
  551e4d:	51                   	push   ecx
  551e4e:	8d 8d 48 fa ff ff    	lea    ecx,[ebp-0x5b8]
  551e54:	e8 8d 33 eb ff       	call   0x4051e6 ; ["call resolved=0x4a7d20 "]
  551e59:	6a 01                	push   0x1
  551e5b:	83 ec 28             	sub    esp,0x28
  551e5e:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  551e62:	8b c4                	mov    eax,esp
  551e64:	c7 40 24 00 00 00 00 	mov    DWORD PTR [eax+0x24],0x0
  551e6b:	8d 85 48 fa ff ff    	lea    eax,[ebp-0x5b8]
  551e71:	50                   	push   eax
  551e72:	8d 85 00 fb ff ff    	lea    eax,[ebp-0x500]
  551e78:	50                   	push   eax
  551e79:	e8 51 ff ea ff       	call   0x401dcf ; ["call resolved=0x4b45e0 "]
  551e7e:	83 c4 34             	add    esp,0x34
  551e81:	8b b5 4c fa ff ff    	mov    esi,DWORD PTR [ebp-0x5b4]
  551e87:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  551e8b:	85 f6                	test   esi,esi
  551e8d:	74 21                	je     0x551eb0
  551e8f:	83 c8 ff             	or     eax,0xffffffff
  551e92:	f0 0f c1 46 04       	lock xadd DWORD PTR [esi+0x4],eax
  551e97:	75 17                	jne    0x551eb0
  551e99:	8b 06                	mov    eax,DWORD PTR [esi]
  551e9b:	8b ce                	mov    ecx,esi
  551e9d:	ff 10                	call   DWORD PTR [eax]
  551e9f:	83 c8 ff             	or     eax,0xffffffff
  551ea2:	f0 0f c1 46 08       	lock xadd DWORD PTR [esi+0x8],eax
  551ea7:	75 07                	jne    0x551eb0
  551ea9:	8b 06                	mov    eax,DWORD PTR [esi]
  551eab:	8b ce                	mov    ecx,esi
  551ead:	ff 50 04             	call   DWORD PTR [eax+0x4]
  551eb0:	80 bd 00 fb ff ff 01 	cmp    BYTE PTR [ebp-0x500],0x1
  551eb7:	0f 85 33 04 00 00    	jne    0x5522f0
  551ebd:	8b 85 08 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4f8]
  551ec3:	89 85 18 fb ff ff    	mov    DWORD PTR [ebp-0x4e8],eax
  551ec9:	8b 00                	mov    eax,DWORD PTR [eax]
  551ecb:	89 85 20 fb ff ff    	mov    DWORD PTR [ebp-0x4e0],eax
  551ed1:	8b 70 04             	mov    esi,DWORD PTR [eax+0x4]
  551ed4:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  551ed8:	75 54                	jne    0x551f2e
  551eda:	66 0f 1f 44 00 00    	nop    WORD PTR [eax+eax*1+0x0]
  551ee0:	83 7e 24 10          	cmp    DWORD PTR [esi+0x24],0x10
  551ee4:	8d 4e 10             	lea    ecx,[esi+0x10]
  551ee7:	8b 51 10             	mov    edx,DWORD PTR [ecx+0x10]
  551eea:	89 95 24 fb ff ff    	mov    DWORD PTR [ebp-0x4dc],edx
  551ef0:	72 02                	jb     0x551ef4
  551ef2:	8b 09                	mov    ecx,DWORD PTR [ecx]
  551ef4:	8b c2                	mov    eax,edx
  551ef6:	83 fa 03             	cmp    edx,0x3
  551ef9:	ba 03 00 00 00       	mov    edx,0x3
  551efe:	0f 47 c2             	cmova  eax,edx
  551f01:	50                   	push   eax
  551f02:	68 2c 89 6d 00       	push   0x6d892c ; ["cmd"]
  551f07:	51                   	push   ecx
  551f08:	e8 b0 29 eb ff       	call   0x4048bd ; ["call resolved=0x482fc0 "]
  551f0d:	83 c4 0c             	add    esp,0xc
  551f10:	85 c0                	test   eax,eax
  551f12:	0f 84 0c 01 00 00    	je     0x552024
  551f18:	0f 88 13 01 00 00    	js     0x552031
  551f1e:	8b c6                	mov    eax,esi
  551f20:	8b 36                	mov    esi,DWORD PTR [esi]
  551f22:	89 85 20 fb ff ff    	mov    DWORD PTR [ebp-0x4e0],eax
  551f28:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  551f2c:	74 b2                	je     0x551ee0
  551f2e:	80 78 0d 00          	cmp    BYTE PTR [eax+0xd],0x0
  551f32:	75 38                	jne    0x551f6c
  551f34:	83 78 24 10          	cmp    DWORD PTR [eax+0x24],0x10
  551f38:	8d 48 10             	lea    ecx,[eax+0x10]
  551f3b:	8b 71 10             	mov    esi,DWORD PTR [ecx+0x10]
  551f3e:	72 02                	jb     0x551f42
  551f40:	8b 09                	mov    ecx,DWORD PTR [ecx]
  551f42:	83 fe 03             	cmp    esi,0x3
  551f45:	ba 03 00 00 00       	mov    edx,0x3
  551f4a:	8b c6                	mov    eax,esi
  551f4c:	0f 47 c2             	cmova  eax,edx
  551f4f:	50                   	push   eax
  551f50:	68 2c 89 6d 00       	push   0x6d892c ; ["cmd"]
  551f55:	51                   	push   ecx
  551f56:	e8 62 29 eb ff       	call   0x4048bd ; ["call resolved=0x482fc0 "]
  551f5b:	83 c4 0c             	add    esp,0xc
  551f5e:	85 c0                	test   eax,eax
  551f60:	0f 84 d9 00 00 00    	je     0x55203f
  551f66:	0f 8e de 00 00 00    	jle    0x55204a
  551f6c:	8b 85 18 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4e8]
  551f72:	8b 08                	mov    ecx,DWORD PTR [eax]
  551f74:	8b 85 08 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4f8]
  551f7a:	3b 08                	cmp    ecx,DWORD PTR [eax]
  551f7c:	0f 84 6e 03 00 00    	je     0x5522f0
  551f82:	0f 57 c0             	xorps  xmm0,xmm0
  551f85:	c6 85 bc fa ff ff 03 	mov    BYTE PTR [ebp-0x544],0x3
  551f8c:	6a 18                	push   0x18
  551f8e:	66 0f d6 85 c4 fa ff 	movq   QWORD PTR [ebp-0x53c],xmm0
  551f96:	e8 1b 12 eb ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  551f9b:	8b f0                	mov    esi,eax
  551f9d:	83 c4 04             	add    esp,0x4
  551fa0:	8d 85 f7 fa ff ff    	lea    eax,[ebp-0x509]
  551fa6:	89 b5 ec fa ff ff    	mov    DWORD PTR [ebp-0x514],esi
  551fac:	89 85 e8 fa ff ff    	mov    DWORD PTR [ebp-0x518],eax
  551fb2:	68 80 43 79 00       	push   0x794380
  551fb7:	8b ce                	mov    ecx,esi
  551fb9:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  551fbd:	e8 c9 3c eb ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  551fc2:	85 f6                	test   esi,esi
  551fc4:	0f 85 8b 00 00 00    	jne    0x552055
  551fca:	68 16 3c 00 00       	push   0x3c16
  551fcf:	68 88 1e 6c 00       	push   0x6c1e88
  551fd4:	68 e8 5a 6c 00       	push   0x6c5ae8
  551fd9:	ff 95 f8 fa ff ff    	call   DWORD PTR [ebp-0x508]
  551fdf:	68 16 3d 00 00       	push   0x3d16
  551fe4:	89 b5 ec fa ff ff    	mov    DWORD PTR [ebp-0x514],esi
  551fea:	8b 85 ec fa ff ff    	mov    eax,DWORD PTR [ebp-0x514]
  551ff0:	68 88 1e 6c 00       	push   0x6c1e88
  551ff5:	89 b5 c4 fa ff ff    	mov    DWORD PTR [ebp-0x53c],esi
  551ffb:	8b b5 f8 fa ff ff    	mov    esi,DWORD PTR [ebp-0x508]
  552001:	68 58 51 6c 00       	push   0x6c5158
  552006:	89 85 c8 fa ff ff    	mov    DWORD PTR [ebp-0x538],eax
  55200c:	ff d6                	call   esi
  55200e:	68 16 3d 00 00       	push   0x3d16
  552013:	68 88 1e 6c 00       	push   0x6c1e88
  552018:	68 58 51 6c 00       	push   0x6c5158
  55201d:	ff d6                	call   esi
  55201f:	83 c4 24             	add    esp,0x24
  552022:	eb 53                	jmp    0x552077
  552024:	83 bd 24 fb ff ff 03 	cmp    DWORD PTR [ebp-0x4dc],0x3
  55202b:	0f 83 ed fe ff ff    	jae    0x551f1e
  552031:	8b 76 08             	mov    esi,DWORD PTR [esi+0x8]
  552034:	8b 85 20 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4e0]
  55203a:	e9 e9 fe ff ff       	jmp    0x551f28
  55203f:	83 fe 03             	cmp    esi,0x3
  552042:	72 06                	jb     0x55204a
  552044:	0f 87 22 ff ff ff    	ja     0x551f6c
  55204a:	8b 8d 20 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x4e0]
  552050:	e9 1f ff ff ff       	jmp    0x551f74
  552055:	c7 85 ec fa ff ff 00 	mov    DWORD PTR [ebp-0x514],0x0
  55205f:	8b 85 ec fa ff ff    	mov    eax,DWORD PTR [ebp-0x514]
  552065:	89 b5 c4 fa ff ff    	mov    DWORD PTR [ebp-0x53c],esi
  55206b:	8b b5 f8 fa ff ff    	mov    esi,DWORD PTR [ebp-0x508]
  552071:	89 85 c8 fa ff ff    	mov    DWORD PTR [ebp-0x538],eax
  552077:	8a 85 00 fb ff ff    	mov    al,BYTE PTR [ebp-0x500]
  55207d:	83 cf 01             	or     edi,0x1
  552080:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  552084:	89 bd 1c fb ff ff    	mov    DWORD PTR [ebp-0x4e4],edi
  55208a:	89 bd 14 fb ff ff    	mov    DWORD PTR [ebp-0x4ec],edi
  552090:	84 c0                	test   al,al
  552092:	0f 85 a2 00 00 00    	jne    0x55213a
  552098:	6a 01                	push   0x1
  55209a:	8d 8d 50 fa ff ff    	lea    ecx,[ebp-0x5b0]
  5520a0:	c6 85 00 fb ff ff 01 	mov    BYTE PTR [ebp-0x500],0x1
  5520a7:	e8 fb 38 eb ff       	call   0x4059a7 ; ["call resolved=0x46ccc0 "]
  5520ac:	8b 85 54 fa ff ff    	mov    eax,DWORD PTR [ebp-0x5ac]
  5520b2:	8b 8d 50 fa ff ff    	mov    ecx,DWORD PTR [ebp-0x5b0]
  5520b8:	89 85 0c fb ff ff    	mov    DWORD PTR [ebp-0x4f4],eax
  5520be:	8a 85 00 fb ff ff    	mov    al,BYTE PTR [ebp-0x500]
  5520c4:	89 8d 08 fb ff ff    	mov    DWORD PTR [ebp-0x4f8],ecx
  5520ca:	3c 01                	cmp    al,0x1
  5520cc:	75 1e                	jne    0x5520ec
  5520ce:	85 c9                	test   ecx,ecx
  5520d0:	75 68                	jne    0x55213a
  5520d2:	68 14 3d 00 00       	push   0x3d14
  5520d7:	68 88 1e 6c 00       	push   0x6c1e88
  5520dc:	68 50 50 6c 00       	push   0x6c5050
  5520e1:	ff d6                	call   esi
  5520e3:	8a 85 00 fb ff ff    	mov    al,BYTE PTR [ebp-0x500]
  5520e9:	83 c4 0c             	add    esp,0xc
  5520ec:	3c 02                	cmp    al,0x2
  5520ee:	75 23                	jne    0x552113
  5520f0:	83 bd 08 fb ff ff 00 	cmp    DWORD PTR [ebp-0x4f8],0x0
  5520f7:	75 41                	jne    0x55213a
  5520f9:	68 15 3d 00 00       	push   0x3d15
  5520fe:	68 88 1e 6c 00       	push   0x6c1e88
  552103:	68 d8 50 6c 00       	push   0x6c50d8
  552108:	ff d6                	call   esi
  55210a:	8a 85 00 fb ff ff    	mov    al,BYTE PTR [ebp-0x500]
  552110:	83 c4 0c             	add    esp,0xc
  552113:	3c 03                	cmp    al,0x3
  552115:	75 23                	jne    0x55213a
  552117:	83 bd 08 fb ff ff 00 	cmp    DWORD PTR [ebp-0x4f8],0x0
  55211e:	75 1a                	jne    0x55213a
  552120:	68 16 3d 00 00       	push   0x3d16
  552125:	68 88 1e 6c 00       	push   0x6c1e88
  55212a:	68 58 51 6c 00       	push   0x6c5158
  55212f:	ff d6                	call   esi
  552131:	8a 85 00 fb ff ff    	mov    al,BYTE PTR [ebp-0x500]
  552137:	83 c4 0c             	add    esp,0xc
  55213a:	3c 01                	cmp    al,0x1
  55213c:	0f 85 f7 16 00 00    	jne    0x553839
  552142:	66 a1 2c 89 6d 00    	mov    ax,ds:0x6d892c ; ["cmd"]
  552148:	8b bd 08 fb ff ff    	mov    edi,DWORD PTR [ebp-0x4f8]
  55214e:	c7 85 d4 fb ff ff 00 	mov    DWORD PTR [ebp-0x42c],0x0
  552158:	66 89 85 d4 fb ff ff 	mov    WORD PTR [ebp-0x42c],ax
  55215f:	a0 2e 89 6d 00       	mov    al,ds:0x6d892e
  552164:	c7 85 e8 fb ff ff 0f 	mov    DWORD PTR [ebp-0x418],0xf
  55216e:	c7 85 e4 fb ff ff 03 	mov    DWORD PTR [ebp-0x41c],0x3
  552178:	88 85 d6 fb ff ff    	mov    BYTE PTR [ebp-0x42a],al
  55217e:	c6 85 d7 fb ff ff 00 	mov    BYTE PTR [ebp-0x429],0x0
  552185:	8d 85 d4 fb ff ff    	lea    eax,[ebp-0x42c]
  55218b:	c7 45 fc 07 00 00 00 	mov    DWORD PTR [ebp-0x4],0x7
  552192:	50                   	push   eax
  552193:	8d 85 2c fa ff ff    	lea    eax,[ebp-0x5d4]
  552199:	8b cf                	mov    ecx,edi
  55219b:	50                   	push   eax
  55219c:	e8 5d ff ea ff       	call   0x4020fe ; ["call resolved=0x441600 "]
  5521a1:	8b b5 34 fa ff ff    	mov    esi,DWORD PTR [ebp-0x5cc]
  5521a7:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  5521ab:	75 3b                	jne    0x5521e8
  5521ad:	83 7e 24 10          	cmp    DWORD PTR [esi+0x24],0x10
  5521b1:	8d 4e 10             	lea    ecx,[esi+0x10]
  5521b4:	8b 51 10             	mov    edx,DWORD PTR [ecx+0x10]
  5521b7:	72 02                	jb     0x5521bb
  5521b9:	8b 09                	mov    ecx,DWORD PTR [ecx]
  5521bb:	83 bd e8 fb ff ff 10 	cmp    DWORD PTR [ebp-0x418],0x10
  5521c2:	8d 85 d4 fb ff ff    	lea    eax,[ebp-0x42c]
  5521c8:	52                   	push   edx
  5521c9:	0f 43 85 d4 fb ff ff 	cmovae eax,DWORD PTR [ebp-0x42c]
  5521d0:	51                   	push   ecx
  5521d1:	ff b5 e4 fb ff ff    	push   DWORD PTR [ebp-0x41c]
  5521d7:	50                   	push   eax
  5521d8:	e8 52 0f eb ff       	call   0x40312f ; ["call resolved=0x54d200 "]
  5521dd:	83 c4 10             	add    esp,0x10
  5521e0:	85 c0                	test   eax,eax
  5521e2:	0f 89 8d 00 00 00    	jns    0x552275
  5521e8:	81 7f 04 24 49 92 04 	cmp    DWORD PTR [edi+0x4],0x4924924
  5521ef:	0f 84 3f 16 00 00    	je     0x553834
  5521f5:	8b 07                	mov    eax,DWORD PTR [edi]
  5521f7:	89 85 20 fb ff ff    	mov    DWORD PTR [ebp-0x4e0],eax
  5521fd:	89 bd 58 fa ff ff    	mov    DWORD PTR [ebp-0x5a8],edi
  552203:	6a 01                	push   0x1
  552205:	8b cf                	mov    ecx,edi
  552207:	c6 45 fc 08          	mov    BYTE PTR [ebp-0x4],0x8
  55220b:	c7 85 5c fa ff ff 00 	mov    DWORD PTR [ebp-0x5a4],0x0
  552215:	e8 30 2b eb ff       	call   0x404d4a ; ["call resolved=0x5516d0 "]
  55221a:	89 85 24 fb ff ff    	mov    DWORD PTR [ebp-0x4dc],eax
  552220:	8d 70 10             	lea    esi,[eax+0x10]
  552223:	8d 85 d4 fb ff ff    	lea    eax,[ebp-0x42c]
  552229:	8b ce                	mov    ecx,esi
  55222b:	50                   	push   eax
  55222c:	e8 d4 06 eb ff       	call   0x402905 ; ["call resolved=0x46a300 "]
  552231:	8d 4e 18             	lea    ecx,[esi+0x18]
  552234:	6a 00                	push   0x0
  552236:	e8 87 26 eb ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  55223b:	8b 85 24 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4dc]
  552241:	8b 8d 20 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x4e0]
  552247:	50                   	push   eax
  552248:	ff b5 30 fa ff ff    	push   DWORD PTR [ebp-0x5d0]
  55224e:	89 08                	mov    DWORD PTR [eax],ecx
  552250:	ff b5 2c fa ff ff    	push   DWORD PTR [ebp-0x5d4]
  552256:	89 48 04             	mov    DWORD PTR [eax+0x4],ecx
  552259:	89 48 08             	mov    DWORD PTR [eax+0x8],ecx
  55225c:	8b cf                	mov    ecx,edi
  55225e:	66 c7 40 0c 00 00    	mov    WORD PTR [eax+0xc],0x0
  552264:	c7 85 5c fa ff ff 00 	mov    DWORD PTR [ebp-0x5a4],0x0
  55226e:	e8 2b 0e eb ff       	call   0x40309e ; ["call resolved=0x47f030 "]
  552273:	8b f0                	mov    esi,eax
  552275:	8b 95 e8 fb ff ff    	mov    edx,DWORD PTR [ebp-0x418]
  55227b:	83 c6 28             	add    esi,0x28
  55227e:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  552282:	83 fa 10             	cmp    edx,0x10
  552285:	72 31                	jb     0x5522b8
  552287:	8b 8d d4 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x42c]
  55228d:	42                   	inc    edx
  55228e:	8b c1                	mov    eax,ecx
  552290:	81 fa 00 10 00 00    	cmp    edx,0x1000
  552296:	72 16                	jb     0x5522ae
  552298:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  55229b:	83 c2 23             	add    edx,0x23
  55229e:	2b c1                	sub    eax,ecx
  5522a0:	83 c0 fc             	add    eax,0xfffffffc
  5522a3:	83 f8 1f             	cmp    eax,0x1f
  5522a6:	76 06                	jbe    0x5522ae
  5522a8:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5522ae:	52                   	push   edx
  5522af:	51                   	push   ecx
  5522b0:	e8 e5 fd ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5522b5:	83 c4 08             	add    esp,0x8
  5522b8:	8d 85 bc fa ff ff    	lea    eax,[ebp-0x544]
  5522be:	c7 85 e4 fb ff ff 00 	mov    DWORD PTR [ebp-0x41c],0x0
  5522c8:	50                   	push   eax
  5522c9:	56                   	push   esi
  5522ca:	c7 85 e8 fb ff ff 0f 	mov    DWORD PTR [ebp-0x418],0xf
  5522d4:	c6 85 d4 fb ff ff 00 	mov    BYTE PTR [ebp-0x42c],0x0
  5522db:	e8 19 f9 ea ff       	call   0x401bf9 ; ["call resolved=0x4c2dc0 "]
  5522e0:	83 c4 08             	add    esp,0x8
  5522e3:	84 c0                	test   al,al
  5522e5:	74 09                	je     0x5522f0
  5522e7:	c6 85 2b fb ff ff 01 	mov    BYTE PTR [ebp-0x4d5],0x1
  5522ee:	eb 07                	jmp    0x5522f7
  5522f0:	c6 85 2b fb ff ff 00 	mov    BYTE PTR [ebp-0x4d5],0x0
  5522f7:	8b 85 1c fb ff ff    	mov    eax,DWORD PTR [ebp-0x4e4]
  5522fd:	c7 45 fc 04 00 00 00 	mov    DWORD PTR [ebp-0x4],0x4
  552304:	a8 01                	test   al,0x1
  552306:	74 2b                	je     0x552333
  552308:	83 e0 fe             	and    eax,0xfffffffe
  55230b:	8d 8d bc fa ff ff    	lea    ecx,[ebp-0x544]
  552311:	89 85 1c fb ff ff    	mov    DWORD PTR [ebp-0x4e4],eax
  552317:	89 85 14 fb ff ff    	mov    DWORD PTR [ebp-0x4ec],eax
  55231d:	e8 bc 7c eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  552322:	ff b5 bc fa ff ff    	push   DWORD PTR [ebp-0x544]
  552328:	8d 8d c4 fa ff ff    	lea    ecx,[ebp-0x53c]
  55232e:	e8 1b 76 eb ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  552333:	80 bd 2b fb ff ff 00 	cmp    BYTE PTR [ebp-0x4d5],0x0
  55233a:	0f 84 f6 05 00 00    	je     0x552936
  552340:	80 bd 00 fb ff ff 01 	cmp    BYTE PTR [ebp-0x500],0x1
  552347:	0f 85 49 0a 00 00    	jne    0x552d96
  55234d:	8b 85 08 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4f8]
  552353:	89 85 18 fb ff ff    	mov    DWORD PTR [ebp-0x4e8],eax
  552359:	8b 38                	mov    edi,DWORD PTR [eax]
  55235b:	8b 77 04             	mov    esi,DWORD PTR [edi+0x4]
  55235e:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  552362:	75 2c                	jne    0x552390
  552364:	0f 1f 40 00          	nop    DWORD PTR [eax+0x0]
  552368:	0f 1f 84 00 00 00 00 	nop    DWORD PTR [eax+eax*1+0x0]
  552370:	8d 4e 10             	lea    ecx,[esi+0x10]
  552373:	68 30 89 6d 00       	push   0x6d8930 ; ["param"]
  552378:	e8 36 34 eb ff       	call   0x4057b3 ; ["call resolved=0x5255d0 "]
  55237d:	85 c0                	test   eax,eax
  55237f:	79 05                	jns    0x552386
  552381:	8b 76 08             	mov    esi,DWORD PTR [esi+0x8]
  552384:	eb 04                	jmp    0x55238a
  552386:	8b fe                	mov    edi,esi
  552388:	8b 36                	mov    esi,DWORD PTR [esi]
  55238a:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  55238e:	74 e0                	je     0x552370
  552390:	80 7f 0d 00          	cmp    BYTE PTR [edi+0xd],0x0
  552394:	75 11                	jne    0x5523a7
  552396:	8d 4f 10             	lea    ecx,[edi+0x10]
  552399:	68 30 89 6d 00       	push   0x6d8930 ; ["param"]
  55239e:	e8 10 34 eb ff       	call   0x4057b3 ; ["call resolved=0x5255d0 "]
  5523a3:	85 c0                	test   eax,eax
  5523a5:	7e 08                	jle    0x5523af
  5523a7:	8b 85 18 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4e8]
  5523ad:	8b 38                	mov    edi,DWORD PTR [eax]
  5523af:	8b 85 08 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4f8]
  5523b5:	3b 38                	cmp    edi,DWORD PTR [eax]
  5523b7:	0f 84 79 05 00 00    	je     0x552936
  5523bd:	68 30 89 6d 00       	push   0x6d8930 ; ["param"]
  5523c2:	8d 8d 00 fb ff ff    	lea    ecx,[ebp-0x500]
  5523c8:	e8 11 13 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5523cd:	80 38 03             	cmp    BYTE PTR [eax],0x3
  5523d0:	0f 85 60 05 00 00    	jne    0x552936
  5523d6:	68 30 89 6d 00       	push   0x6d8930 ; ["param"]
  5523db:	8d 8d 00 fb ff ff    	lea    ecx,[ebp-0x500]
  5523e1:	e8 f8 12 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5523e6:	8b bd 1c fb ff ff    	mov    edi,DWORD PTR [ebp-0x4e4]
  5523ec:	33 c9                	xor    ecx,ecx
  5523ee:	c7 85 a4 fb ff ff 00 	mov    DWORD PTR [ebp-0x45c],0x0
  5523f8:	be 0f 00 00 00       	mov    esi,0xf
  5523fd:	83 cf 40             	or     edi,0x40
  552400:	89 8d b4 fb ff ff    	mov    DWORD PTR [ebp-0x44c],ecx
  552406:	89 b5 b8 fb ff ff    	mov    DWORD PTR [ebp-0x448],esi
  55240c:	88 8d a4 fb ff ff    	mov    BYTE PTR [ebp-0x45c],cl
  552412:	80 38 03             	cmp    BYTE PTR [eax],0x3
  552415:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  552419:	89 bd 14 fb ff ff    	mov    DWORD PTR [ebp-0x4ec],edi
  55241f:	0f 85 71 14 00 00    	jne    0x553896
  552425:	8b 40 08             	mov    eax,DWORD PTR [eax+0x8]
  552428:	8d 95 a4 fb ff ff    	lea    edx,[ebp-0x45c]
  55242e:	3b d0                	cmp    edx,eax
  552430:	74 24                	je     0x552456
  552432:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  552436:	8b 48 10             	mov    ecx,DWORD PTR [eax+0x10]
  552439:	72 02                	jb     0x55243d
  55243b:	8b 00                	mov    eax,DWORD PTR [eax]
  55243d:	51                   	push   ecx
  55243e:	50                   	push   eax
  55243f:	8d 8d a4 fb ff ff    	lea    ecx,[ebp-0x45c]
  552445:	e8 cd 1f eb ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  55244a:	8b b5 b8 fb ff ff    	mov    esi,DWORD PTR [ebp-0x448]
  552450:	8b 8d b4 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x44c]
  552456:	83 fe 10             	cmp    esi,0x10
  552459:	8d 85 a4 fb ff ff    	lea    eax,[ebp-0x45c]
  55245f:	0f 43 85 a4 fb ff ff 	cmovae eax,DWORD PTR [ebp-0x45c]
  552466:	03 c1                	add    eax,ecx
  552468:	83 fe 10             	cmp    esi,0x10
  55246b:	8d 8d a4 fb ff ff    	lea    ecx,[ebp-0x45c]
  552471:	0f 43 8d a4 fb ff ff 	cmovae ecx,DWORD PTR [ebp-0x45c]
  552478:	50                   	push   eax
  552479:	51                   	push   ecx
  55247a:	8d 8d 38 fa ff ff    	lea    ecx,[ebp-0x5c8]
  552480:	e8 61 2d eb ff       	call   0x4051e6 ; ["call resolved=0x4a7d20 "]
  552485:	6a 00                	push   0x0
  552487:	83 ec 28             	sub    esp,0x28
  55248a:	c6 45 fc 0e          	mov    BYTE PTR [ebp-0x4],0xe
  55248e:	8b c4                	mov    eax,esp
  552490:	c7 40 24 00 00 00 00 	mov    DWORD PTR [eax+0x24],0x0
  552497:	8d 85 38 fa ff ff    	lea    eax,[ebp-0x5c8]
  55249d:	50                   	push   eax
  55249e:	8d 85 d8 fa ff ff    	lea    eax,[ebp-0x528]
  5524a4:	50                   	push   eax
  5524a5:	e8 25 f9 ea ff       	call   0x401dcf ; ["call resolved=0x4b45e0 "]
  5524aa:	83 c4 34             	add    esp,0x34
  5524ad:	8d 8d 38 fa ff ff    	lea    ecx,[ebp-0x5c8]
  5524b3:	e8 8f 67 eb ff       	call   0x408c47 ; ["call resolved=0x4aef20 "]
  5524b8:	83 e7 bf             	and    edi,0xffffffbf
  5524bb:	89 bd 1c fb ff ff    	mov    DWORD PTR [ebp-0x4e4],edi
  5524c1:	89 bd 14 fb ff ff    	mov    DWORD PTR [ebp-0x4ec],edi
  5524c7:	8b 95 b8 fb ff ff    	mov    edx,DWORD PTR [ebp-0x448]
  5524cd:	c6 45 fc 11          	mov    BYTE PTR [ebp-0x4],0x11
  5524d1:	83 fa 10             	cmp    edx,0x10
  5524d4:	72 31                	jb     0x552507
  5524d6:	8b 8d a4 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x45c]
  5524dc:	42                   	inc    edx
  5524dd:	8b c1                	mov    eax,ecx
  5524df:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5524e5:	72 16                	jb     0x5524fd
  5524e7:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5524ea:	83 c2 23             	add    edx,0x23
  5524ed:	2b c1                	sub    eax,ecx
  5524ef:	83 c0 fc             	add    eax,0xfffffffc
  5524f2:	83 f8 1f             	cmp    eax,0x1f
  5524f5:	76 06                	jbe    0x5524fd
  5524f7:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5524fd:	52                   	push   edx
  5524fe:	51                   	push   ecx
  5524ff:	e8 96 fb ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  552504:	83 c4 08             	add    esp,0x8
  552507:	8b 85 d8 fa ff ff    	mov    eax,DWORD PTR [ebp-0x528]
  55250d:	c7 85 b4 fb ff ff 00 	mov    DWORD PTR [ebp-0x44c],0x0
  552517:	c7 85 b8 fb ff ff 0f 	mov    DWORD PTR [ebp-0x448],0xf
  552521:	c6 85 a4 fb ff ff 00 	mov    BYTE PTR [ebp-0x45c],0x0
  552528:	3c 08                	cmp    al,0x8
  55252a:	0f 84 e6 03 00 00    	je     0x552916
  552530:	3c 01                	cmp    al,0x1
  552532:	0f 85 de 03 00 00    	jne    0x552916
  552538:	8b 85 e0 fa ff ff    	mov    eax,DWORD PTR [ebp-0x520]
  55253e:	89 85 24 fb ff ff    	mov    DWORD PTR [ebp-0x4dc],eax
  552544:	8b 00                	mov    eax,DWORD PTR [eax]
  552546:	89 85 20 fb ff ff    	mov    DWORD PTR [ebp-0x4e0],eax
  55254c:	8b 70 04             	mov    esi,DWORD PTR [eax+0x4]
  55254f:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  552553:	75 37                	jne    0x55258c
  552555:	66 66 66 0f 1f 84 00 	data16 data16 nop WORD PTR [eax+eax*1+0x0]
  552560:	8d 4e 10             	lea    ecx,[esi+0x10]
  552563:	68 38 89 6d 00       	push   0x6d8938 ; ["ext"]
  552568:	e8 46 32 eb ff       	call   0x4057b3 ; ["call resolved=0x5255d0 "]
  55256d:	85 c0                	test   eax,eax
  55256f:	79 0b                	jns    0x55257c
  552571:	8b 76 08             	mov    esi,DWORD PTR [esi+0x8]
  552574:	8b 85 20 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4e0]
  55257a:	eb 0a                	jmp    0x552586
  55257c:	8b c6                	mov    eax,esi
  55257e:	8b 36                	mov    esi,DWORD PTR [esi]
  552580:	89 85 20 fb ff ff    	mov    DWORD PTR [ebp-0x4e0],eax
  552586:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  55258a:	74 d4                	je     0x552560
  55258c:	80 78 0d 00          	cmp    BYTE PTR [eax+0xd],0x0
  552590:	75 1d                	jne    0x5525af
  552592:	83 c0 10             	add    eax,0x10
  552595:	50                   	push   eax
  552596:	68 38 89 6d 00       	push   0x6d8938 ; ["ext"]
  55259b:	e8 3f 1a eb ff       	call   0x403fdf ; ["call resolved=0x4a82e0 "]
  5525a0:	83 c4 08             	add    esp,0x8
  5525a3:	84 c0                	test   al,al
  5525a5:	75 08                	jne    0x5525af
  5525a7:	8b 8d 20 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x4e0]
  5525ad:	eb 08                	jmp    0x5525b7
  5525af:	8b 8d 24 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x4dc]
  5525b5:	8b 09                	mov    ecx,DWORD PTR [ecx]
  5525b7:	8b 85 e0 fa ff ff    	mov    eax,DWORD PTR [ebp-0x520]
  5525bd:	3b 08                	cmp    ecx,DWORD PTR [eax]
  5525bf:	0f 84 51 03 00 00    	je     0x552916
  5525c5:	68 38 89 6d 00       	push   0x6d8938 ; ["ext"]
  5525ca:	8d 8d d8 fa ff ff    	lea    ecx,[ebp-0x528]
  5525d0:	e8 09 11 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5525d5:	89 85 18 fb ff ff    	mov    DWORD PTR [ebp-0x4e8],eax
  5525db:	80 38 01             	cmp    BYTE PTR [eax],0x1
  5525de:	0f 85 32 03 00 00    	jne    0x552916
  5525e4:	8b 40 08             	mov    eax,DWORD PTR [eax+0x8]
  5525e7:	89 85 24 fb ff ff    	mov    DWORD PTR [ebp-0x4dc],eax
  5525ed:	8b 00                	mov    eax,DWORD PTR [eax]
  5525ef:	89 85 20 fb ff ff    	mov    DWORD PTR [ebp-0x4e0],eax
  5525f5:	8b 70 04             	mov    esi,DWORD PTR [eax+0x4]
  5525f8:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  5525fc:	75 2e                	jne    0x55262c
  5525fe:	66 90                	xchg   ax,ax
  552600:	8d 4e 10             	lea    ecx,[esi+0x10]
  552603:	68 bc 66 6c 00       	push   0x6c66bc ; ["connectType"]
  552608:	e8 a6 31 eb ff       	call   0x4057b3 ; ["call resolved=0x5255d0 "]
  55260d:	85 c0                	test   eax,eax
  55260f:	79 0b                	jns    0x55261c
  552611:	8b 76 08             	mov    esi,DWORD PTR [esi+0x8]
  552614:	8b 85 20 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4e0]
  55261a:	eb 0a                	jmp    0x552626
  55261c:	8b c6                	mov    eax,esi
  55261e:	8b 36                	mov    esi,DWORD PTR [esi]
  552620:	89 85 20 fb ff ff    	mov    DWORD PTR [ebp-0x4e0],eax
  552626:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  55262a:	74 d4                	je     0x552600
  55262c:	80 78 0d 00          	cmp    BYTE PTR [eax+0xd],0x0
  552630:	75 1d                	jne    0x55264f
  552632:	83 c0 10             	add    eax,0x10
  552635:	50                   	push   eax
  552636:	68 bc 66 6c 00       	push   0x6c66bc ; ["connectType"]
  55263b:	e8 9f 19 eb ff       	call   0x403fdf ; ["call resolved=0x4a82e0 "]
  552640:	83 c4 08             	add    esp,0x8
  552643:	84 c0                	test   al,al
  552645:	75 08                	jne    0x55264f
  552647:	8b 8d 20 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x4e0]
  55264d:	eb 08                	jmp    0x552657
  55264f:	8b 8d 24 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x4dc]
  552655:	8b 09                	mov    ecx,DWORD PTR [ecx]
  552657:	8b 85 18 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4e8]
  55265d:	8b 40 08             	mov    eax,DWORD PTR [eax+0x8]
  552660:	3b 08                	cmp    ecx,DWORD PTR [eax]
  552662:	0f 84 ae 02 00 00    	je     0x552916
  552668:	68 38 89 6d 00       	push   0x6d8938 ; ["ext"]
  55266d:	8d 8d d8 fa ff ff    	lea    ecx,[ebp-0x528]
  552673:	e8 66 10 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  552678:	68 bc 66 6c 00       	push   0x6c66bc ; ["connectType"]
  55267d:	8b c8                	mov    ecx,eax
  55267f:	e8 5a 10 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  552684:	80 38 03             	cmp    BYTE PTR [eax],0x3
  552687:	0f 85 89 02 00 00    	jne    0x552916
  55268d:	68 38 89 6d 00       	push   0x6d8938 ; ["ext"]
  552692:	8d 8d d8 fa ff ff    	lea    ecx,[ebp-0x528]
  552698:	e8 41 10 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  55269d:	68 bc 66 6c 00       	push   0x6c66bc ; ["connectType"]
  5526a2:	8b c8                	mov    ecx,eax
  5526a4:	e8 35 10 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5526a9:	8d 8d d4 fb ff ff    	lea    ecx,[ebp-0x42c]
  5526af:	51                   	push   ecx
  5526b0:	8b c8                	mov    ecx,eax
  5526b2:	e8 33 45 eb ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  5526b7:	81 cf 80 00 00 00    	or     edi,0x80
  5526bd:	89 bd 1c fb ff ff    	mov    DWORD PTR [ebp-0x4e4],edi
  5526c3:	89 bd 14 fb ff ff    	mov    DWORD PTR [ebp-0x4ec],edi
  5526c9:	83 bd e8 fb ff ff 10 	cmp    DWORD PTR [ebp-0x418],0x10
  5526d0:	8d 85 d4 fb ff ff    	lea    eax,[ebp-0x42c]
  5526d6:	c6 45 fc 12          	mov    BYTE PTR [ebp-0x4],0x12
  5526da:	0f 43 85 d4 fb ff ff 	cmovae eax,DWORD PTR [ebp-0x42c]
  5526e1:	83 bd e4 fb ff ff 07 	cmp    DWORD PTR [ebp-0x41c],0x7
  5526e8:	75 18                	jne    0x552702
  5526ea:	6a 07                	push   0x7
  5526ec:	68 3c 89 6d 00       	push   0x6d893c ; ["Connect"]
  5526f1:	50                   	push   eax
  5526f2:	e8 c6 21 eb ff       	call   0x4048bd ; ["call resolved=0x482fc0 "]
  5526f7:	83 c4 0c             	add    esp,0xc
  5526fa:	85 c0                	test   eax,eax
  5526fc:	75 04                	jne    0x552702
  5526fe:	b0 01                	mov    al,0x1
  552700:	eb 02                	jmp    0x552704
  552702:	32 c0                	xor    al,al
  552704:	84 c0                	test   al,al
  552706:	0f 84 cd 00 00 00    	je     0x5527d9
  55270c:	8b bd 10 fb ff ff    	mov    edi,DWORD PTR [ebp-0x4f0]
  552712:	83 7f 30 10          	cmp    DWORD PTR [edi+0x30],0x10
  552716:	8d 77 1c             	lea    esi,[edi+0x1c]
  552719:	72 02                	jb     0x55271d
  55271b:	8b 36                	mov    esi,DWORD PTR [esi]
  55271d:	6a 5c                	push   0x5c
  55271f:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  552724:	e8 3d 60 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  552729:	83 c4 08             	add    esp,0x8
  55272c:	85 c0                	test   eax,eax
  55272e:	74 12                	je     0x552742
  552730:	6a 5c                	push   0x5c
  552732:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  552737:	e8 2a 60 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  55273c:	83 c4 08             	add    esp,0x8
  55273f:	40                   	inc    eax
  552740:	eb 05                	jmp    0x552747
  552742:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  552747:	56                   	push   esi
  552748:	68 48 89 6d 00       	push   0x6d8948 ; ["BtFarawayDevice::consumeMessageLoop"]
  55274d:	68 2f 01 00 00       	push   0x12f
  552752:	50                   	push   eax
  552753:	68 78 89 6d 00       	push   0x6d8978 ; ["[ConntctionModule][%s:%d][%s]:pc recv mobile_ask_connect_pc request, id is %s ...\n"]
  552758:	8d 85 24 fb ff ff    	lea    eax,[ebp-0x4dc]
  55275e:	c7 85 24 fb ff ff 02 	mov    DWORD PTR [ebp-0x4dc],0x2
  552768:	50                   	push   eax
  552769:	8d 85 8c fb ff ff    	lea    eax,[ebp-0x474]
  55276f:	50                   	push   eax
  552770:	e8 94 48 eb ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  552775:	83 c4 1c             	add    esp,0x1c
  552778:	8d 8d 8c fb ff ff    	lea    ecx,[ebp-0x474]
  55277e:	e8 80 12 eb ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  552783:	8d 85 00 fb ff ff    	lea    eax,[ebp-0x500]
  552789:	89 bd 24 fb ff ff    	mov    DWORD PTR [ebp-0x4dc],edi
  55278f:	50                   	push   eax
  552790:	8d 85 24 fb ff ff    	lea    eax,[ebp-0x4dc]
  552796:	c7 85 20 fb ff ff 04 	mov    DWORD PTR [ebp-0x4e0],0x401604
  5527a0:	50                   	push   eax
  5527a1:	8d 85 20 fb ff ff    	lea    eax,[ebp-0x4e0]
  5527a7:	50                   	push   eax
  5527a8:	8d 8d 60 fa ff ff    	lea    ecx,[ebp-0x5a0]
  5527ae:	e8 01 16 eb ff       	call   0x403db4 ; ["call resolved=0x54c130 "]
  5527b3:	8d 8d 60 fa ff ff    	lea    ecx,[ebp-0x5a0]
  5527b9:	c6 45 fc 13          	mov    BYTE PTR [ebp-0x4],0x13
  5527bd:	e8 19 35 eb ff       	call   0x405cdb ; ["call resolved=0x554630 "]
  5527c2:	83 bd 64 fa ff ff 00 	cmp    DWORD PTR [ebp-0x59c],0x0
  5527c9:	c6 45 fc 12          	mov    BYTE PTR [ebp-0x4],0x12
  5527cd:	0f 84 38 01 00 00    	je     0x55290b
  5527d3:	ff 15 18 e4 79 00    	call   DWORD PTR ds:0x79e418
  5527d9:	68 dc 89 6d 00       	push   0x6d89dc ; ["PreConnect"]
  5527de:	8d 8d d4 fb ff ff    	lea    ecx,[ebp-0x42c]
  5527e4:	e8 4f 73 eb ff       	call   0x409b38 ; ["call resolved=0x5515d0 "]
  5527e9:	84 c0                	test   al,al
  5527eb:	0f 84 a0 00 00 00    	je     0x552891
  5527f1:	8d 8d d4 fb ff ff    	lea    ecx,[ebp-0x42c]
  5527f7:	e8 07 12 eb ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5527fc:	8d 8d d8 fa ff ff    	lea    ecx,[ebp-0x528]
  552802:	e8 d7 77 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  552807:	ff b5 d8 fa ff ff    	push   DWORD PTR [ebp-0x528]
  55280d:	8d 8d e0 fa ff ff    	lea    ecx,[ebp-0x520]
  552813:	e8 36 71 eb ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  552818:	8d 8d 00 fb ff ff    	lea    ecx,[ebp-0x500]
  55281e:	e8 bb 77 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  552823:	ff b5 00 fb ff ff    	push   DWORD PTR [ebp-0x500]
  552829:	8d 8d 08 fb ff ff    	lea    ecx,[ebp-0x4f8]
  55282f:	e8 1a 71 eb ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  552834:	8b 85 d0 fb ff ff    	mov    eax,DWORD PTR [ebp-0x430]
  55283a:	83 f8 10             	cmp    eax,0x10
  55283d:	72 46                	jb     0x552885
  55283f:	8b 8d bc fb ff ff    	mov    ecx,DWORD PTR [ebp-0x444]
  552845:	40                   	inc    eax
  552846:	89 8d 18 fb ff ff    	mov    DWORD PTR [ebp-0x4e8],ecx
  55284c:	89 85 20 fb ff ff    	mov    DWORD PTR [ebp-0x4e0],eax
  552852:	3d 00 10 00 00       	cmp    eax,0x1000
  552857:	72 22                	jb     0x55287b
  552859:	8d 85 20 fb ff ff    	lea    eax,[ebp-0x4e0]
  55285f:	50                   	push   eax
  552860:	8d 85 18 fb ff ff    	lea    eax,[ebp-0x4e8]
  552866:	50                   	push   eax
  552867:	e8 81 36 eb ff       	call   0x405eed ; ["call resolved=0x4b1460 "]
  55286c:	8b 85 20 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4e0]
  552872:	83 c4 08             	add    esp,0x8
  552875:	8b 8d 18 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x4e8]
  55287b:	50                   	push   eax
  55287c:	51                   	push   ecx
  55287d:	e8 18 f8 ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  552882:	83 c4 08             	add    esp,0x8
  552885:	c7 45 fc ff ff ff ff 	mov    DWORD PTR [ebp-0x4],0xffffffff
  55288c:	e9 fb f3 ff ff       	jmp    0x551c8c
  552891:	83 bd e8 fb ff ff 10 	cmp    DWORD PTR [ebp-0x418],0x10
  552898:	8d b5 d4 fb ff ff    	lea    esi,[ebp-0x42c]
  55289e:	6a 5c                	push   0x5c
  5528a0:	0f 43 b5 d4 fb ff ff 	cmovae esi,DWORD PTR [ebp-0x42c]
  5528a7:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5528ac:	e8 b5 5e 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5528b1:	83 c4 08             	add    esp,0x8
  5528b4:	85 c0                	test   eax,eax
  5528b6:	74 12                	je     0x5528ca
  5528b8:	6a 5c                	push   0x5c
  5528ba:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5528bf:	e8 a2 5e 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5528c4:	83 c4 08             	add    esp,0x8
  5528c7:	40                   	inc    eax
  5528c8:	eb 05                	jmp    0x5528cf
  5528ca:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5528cf:	56                   	push   esi
  5528d0:	68 48 89 6d 00       	push   0x6d8948 ; ["BtFarawayDevice::consumeMessageLoop"]
  5528d5:	68 36 01 00 00       	push   0x136
  5528da:	50                   	push   eax
  5528db:	68 f0 89 6d 00       	push   0x6d89f0 ; ["[ConntctionModule][%s:%d][%s]:pc recv mobile_ask_connect_pc request, connectType is %s \n"]
  5528e0:	8d 85 24 fb ff ff    	lea    eax,[ebp-0x4dc]
  5528e6:	c7 85 24 fb ff ff 02 	mov    DWORD PTR [ebp-0x4dc],0x2
  5528f0:	50                   	push   eax
  5528f1:	8d 85 8c fb ff ff    	lea    eax,[ebp-0x474]
  5528f7:	50                   	push   eax
  5528f8:	e8 0c 47 eb ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5528fd:	83 c4 1c             	add    esp,0x1c
  552900:	8d 8d 8c fb ff ff    	lea    ecx,[ebp-0x474]
  552906:	e8 f8 10 eb ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  55290b:	8d 8d d4 fb ff ff    	lea    ecx,[ebp-0x42c]
  552911:	e8 ed 10 eb ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  552916:	8d 8d d8 fa ff ff    	lea    ecx,[ebp-0x528]
  55291c:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  552920:	e8 b9 76 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  552925:	ff b5 d8 fa ff ff    	push   DWORD PTR [ebp-0x528]
  55292b:	8d 8d e0 fa ff ff    	lea    ecx,[ebp-0x520]
  552931:	e8 18 70 eb ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  552936:	80 bd 00 fb ff ff 01 	cmp    BYTE PTR [ebp-0x500],0x1
  55293d:	0f 85 53 04 00 00    	jne    0x552d96
  552943:	8b 85 08 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4f8]
  552949:	89 85 18 fb ff ff    	mov    DWORD PTR [ebp-0x4e8],eax
  55294f:	8b 38                	mov    edi,DWORD PTR [eax]
  552951:	8b 77 04             	mov    esi,DWORD PTR [edi+0x4]
  552954:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  552958:	75 26                	jne    0x552980
  55295a:	66 0f 1f 44 00 00    	nop    WORD PTR [eax+eax*1+0x0]
  552960:	8d 4e 10             	lea    ecx,[esi+0x10]
  552963:	68 04 68 6c 00       	push   0x6c6804 ; ["bytes"]
  552968:	e8 46 2e eb ff       	call   0x4057b3 ; ["call resolved=0x5255d0 "]
  55296d:	85 c0                	test   eax,eax
  55296f:	79 05                	jns    0x552976
  552971:	8b 76 08             	mov    esi,DWORD PTR [esi+0x8]
  552974:	eb 04                	jmp    0x55297a
  552976:	8b fe                	mov    edi,esi
  552978:	8b 36                	mov    esi,DWORD PTR [esi]
  55297a:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  55297e:	74 e0                	je     0x552960
  552980:	80 7f 0d 00          	cmp    BYTE PTR [edi+0xd],0x0
  552984:	75 15                	jne    0x55299b
  552986:	8d 47 10             	lea    eax,[edi+0x10]
  552989:	50                   	push   eax
  55298a:	68 04 68 6c 00       	push   0x6c6804 ; ["bytes"]
  55298f:	e8 4b 16 eb ff       	call   0x403fdf ; ["call resolved=0x4a82e0 "]
  552994:	83 c4 08             	add    esp,0x8
  552997:	84 c0                	test   al,al
  552999:	74 08                	je     0x5529a3
  55299b:	8b 85 18 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4e8]
  5529a1:	8b 38                	mov    edi,DWORD PTR [eax]
  5529a3:	8b 85 08 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4f8]
  5529a9:	3b 38                	cmp    edi,DWORD PTR [eax]
  5529ab:	0f 84 f4 02 00 00    	je     0x552ca5
  5529b1:	68 04 68 6c 00       	push   0x6c6804 ; ["bytes"]
  5529b6:	8d 8d 00 fb ff ff    	lea    ecx,[ebp-0x500]
  5529bc:	e8 1d 0d eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5529c1:	8b f0                	mov    esi,eax
  5529c3:	89 b5 20 fb ff ff    	mov    DWORD PTR [ebp-0x4e0],esi
  5529c9:	8a 06                	mov    al,BYTE PTR [esi]
  5529cb:	84 c0                	test   al,al
  5529cd:	75 52                	jne    0x552a21
  5529cf:	8d 85 f6 fa ff ff    	lea    eax,[ebp-0x50a]
  5529d5:	c6 06 02             	mov    BYTE PTR [esi],0x2
  5529d8:	6a 01                	push   0x1
  5529da:	50                   	push   eax
  5529db:	e8 ba fb ea ff       	call   0x40259a ; ["call resolved=0x551650 "]
  5529e0:	8b f8                	mov    edi,eax
  5529e2:	83 c4 08             	add    esp,0x8
  5529e5:	c7 07 00 00 00 00    	mov    DWORD PTR [edi],0x0
  5529eb:	c7 47 04 00 00 00 00 	mov    DWORD PTR [edi+0x4],0x0
  5529f2:	c7 47 08 00 00 00 00 	mov    DWORD PTR [edi+0x8],0x0
  5529f9:	85 ff                	test   edi,edi
  5529fb:	75 18                	jne    0x552a15
  5529fd:	68 16 3c 00 00       	push   0x3c16
  552a02:	68 88 1e 6c 00       	push   0x6c1e88
  552a07:	68 e8 5a 6c 00       	push   0x6c5ae8
  552a0c:	ff 95 f8 fa ff ff    	call   DWORD PTR [ebp-0x508]
  552a12:	83 c4 0c             	add    esp,0xc
  552a15:	8b ce                	mov    ecx,esi
  552a17:	89 7e 08             	mov    DWORD PTR [esi+0x8],edi
  552a1a:	e8 bf 75 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  552a1f:	8a 06                	mov    al,BYTE PTR [esi]
  552a21:	3c 02                	cmp    al,0x2
  552a23:	0f 85 e1 0e 00 00    	jne    0x55390a
  552a29:	8b 46 08             	mov    eax,DWORD PTR [esi+0x8]
  552a2c:	89 85 24 fb ff ff    	mov    DWORD PTR [ebp-0x4dc],eax
  552a32:	8b 38                	mov    edi,DWORD PTR [eax]
  552a34:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  552a37:	2b c7                	sub    eax,edi
  552a39:	c1 f8 04             	sar    eax,0x4
  552a3c:	85 c0                	test   eax,eax
  552a3e:	75 64                	jne    0x552aa4
  552a40:	50                   	push   eax
  552a41:	8d 8d 1c fa ff ff    	lea    ecx,[ebp-0x5e4]
  552a47:	e8 76 1e eb ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  552a4c:	8b 4e 08             	mov    ecx,DWORD PTR [esi+0x8]
  552a4f:	ba 01 00 00 00       	mov    edx,0x1
  552a54:	50                   	push   eax
  552a55:	8d 85 14 fa ff ff    	lea    eax,[ebp-0x5ec]
  552a5b:	c6 45 fc 14          	mov    BYTE PTR [ebp-0x4],0x14
  552a5f:	8b 79 04             	mov    edi,DWORD PTR [ecx+0x4]
  552a62:	8b f7                	mov    esi,edi
  552a64:	2b 31                	sub    esi,DWORD PTR [ecx]
  552a66:	8b 8d 24 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x4dc]
  552a6c:	c1 fe 04             	sar    esi,0x4
  552a6f:	2b d6                	sub    edx,esi
  552a71:	52                   	push   edx
  552a72:	57                   	push   edi
  552a73:	50                   	push   eax
  552a74:	e8 86 ff ea ff       	call   0x4029ff ; ["call resolved=0x52c9a0 "]
  552a79:	8d 8d 1c fa ff ff    	lea    ecx,[ebp-0x5e4]
  552a7f:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  552a83:	e8 56 75 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  552a88:	ff b5 1c fa ff ff    	push   DWORD PTR [ebp-0x5e4]
  552a8e:	8d 8d 24 fa ff ff    	lea    ecx,[ebp-0x5dc]
  552a94:	e8 b5 6e eb ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  552a99:	8b 8d 20 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x4e0]
  552a9f:	8b 41 08             	mov    eax,DWORD PTR [ecx+0x8]
  552aa2:	8b 38                	mov    edi,DWORD PTR [eax]
  552aa4:	0f 57 c0             	xorps  xmm0,xmm0
  552aa7:	c6 85 a4 fa ff ff 05 	mov    BYTE PTR [ebp-0x55c],0x5
  552aae:	66 0f d6 85 ac fa ff 	movq   QWORD PTR [ebp-0x554],xmm0
  552ab6:	8d 8d a4 fa ff ff    	lea    ecx,[ebp-0x55c]
  552abc:	c7 85 ac fa ff ff 18 	mov    DWORD PTR [ebp-0x554],0x18
  552ac6:	c7 85 b0 fa ff ff 00 	mov    DWORD PTR [ebp-0x550],0x0
  552ad0:	e8 09 75 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  552ad5:	8d 8d a4 fa ff ff    	lea    ecx,[ebp-0x55c]
  552adb:	e8 fe 74 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  552ae0:	8d 85 a4 fa ff ff    	lea    eax,[ebp-0x55c]
  552ae6:	50                   	push   eax
  552ae7:	57                   	push   edi
  552ae8:	e8 0c f1 ea ff       	call   0x401bf9 ; ["call resolved=0x4c2dc0 "]
  552aed:	83 c4 08             	add    esp,0x8
  552af0:	88 85 2b fb ff ff    	mov    BYTE PTR [ebp-0x4d5],al
  552af6:	8d 8d a4 fa ff ff    	lea    ecx,[ebp-0x55c]
  552afc:	e8 dd 74 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  552b01:	6a 05                	push   0x5
  552b03:	8d 8d ac fa ff ff    	lea    ecx,[ebp-0x554]
  552b09:	e8 40 6e eb ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  552b0e:	80 bd 2b fb ff ff 00 	cmp    BYTE PTR [ebp-0x4d5],0x0
  552b15:	0f 84 8a 01 00 00    	je     0x552ca5
  552b1b:	8b b5 10 fb ff ff    	mov    esi,DWORD PTR [ebp-0x4f0]
  552b21:	83 c6 1c             	add    esi,0x1c
  552b24:	83 7e 14 10          	cmp    DWORD PTR [esi+0x14],0x10
  552b28:	72 02                	jb     0x552b2c
  552b2a:	8b 36                	mov    esi,DWORD PTR [esi]
  552b2c:	6a 5c                	push   0x5c
  552b2e:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  552b33:	e8 2e 5c 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  552b38:	83 c4 08             	add    esp,0x8
  552b3b:	85 c0                	test   eax,eax
  552b3d:	74 12                	je     0x552b51
  552b3f:	6a 5c                	push   0x5c
  552b41:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  552b46:	e8 1b 5c 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  552b4b:	83 c4 08             	add    esp,0x8
  552b4e:	40                   	inc    eax
  552b4f:	eb 05                	jmp    0x552b56
  552b51:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  552b56:	56                   	push   esi
  552b57:	68 48 89 6d 00       	push   0x6d8948 ; ["BtFarawayDevice::consumeMessageLoop"]
  552b5c:	68 3e 01 00 00       	push   0x13e
  552b61:	50                   	push   eax
  552b62:	68 78 89 6d 00       	push   0x6d8978 ; ["[ConntctionModule][%s:%d][%s]:pc recv mobile_ask_connect_pc request, id is %s ...\n"]
  552b67:	8d 85 24 fb ff ff    	lea    eax,[ebp-0x4dc]
  552b6d:	c7 85 24 fb ff ff 02 	mov    DWORD PTR [ebp-0x4dc],0x2
  552b77:	50                   	push   eax
  552b78:	8d 85 8c fb ff ff    	lea    eax,[ebp-0x474]
  552b7e:	50                   	push   eax
  552b7f:	e8 85 44 eb ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  552b84:	83 c4 1c             	add    esp,0x1c
  552b87:	8d 8d 8c fb ff ff    	lea    ecx,[ebp-0x474]
  552b8d:	e8 71 0e eb ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  552b92:	6a 20                	push   0x20
  552b94:	e8 1d 06 eb ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  552b99:	8b f0                	mov    esi,eax
  552b9b:	83 c4 04             	add    esp,0x4
  552b9e:	89 b5 18 fa ff ff    	mov    DWORD PTR [ebp-0x5e8],esi
  552ba4:	c6 45 fc 17          	mov    BYTE PTR [ebp-0x4],0x17
  552ba8:	85 f6                	test   esi,esi
  552baa:	74 20                	je     0x552bcc
  552bac:	8d 85 00 fb ff ff    	lea    eax,[ebp-0x500]
  552bb2:	8b ce                	mov    ecx,esi
  552bb4:	50                   	push   eax
  552bb5:	e8 51 f7 ea ff       	call   0x40230b ; ["call resolved=0x469d20 "]
  552bba:	8b 85 fc fa ff ff    	mov    eax,DWORD PTR [ebp-0x504]
  552bc0:	89 46 10             	mov    DWORD PTR [esi+0x10],eax
  552bc3:	c7 46 18 04 16 40 00 	mov    DWORD PTR [esi+0x18],0x401604
  552bca:	eb 02                	jmp    0x552bce
  552bcc:	33 f6                	xor    esi,esi
  552bce:	8b bd 1c fb ff ff    	mov    edi,DWORD PTR [ebp-0x4e4]
  552bd4:	81 cf 00 01 00 00    	or     edi,0x100
  552bda:	89 b5 24 fb ff ff    	mov    DWORD PTR [ebp-0x4dc],esi
  552be0:	89 bd 1c fb ff ff    	mov    DWORD PTR [ebp-0x4e4],edi
  552be6:	89 bd 14 fb ff ff    	mov    DWORD PTR [ebp-0x4ec],edi
  552bec:	8d 85 b8 fa ff ff    	lea    eax,[ebp-0x548]
  552bf2:	c6 45 fc 18          	mov    BYTE PTR [ebp-0x4],0x18
  552bf6:	50                   	push   eax
  552bf7:	6a 00                	push   0x0
  552bf9:	56                   	push   esi
  552bfa:	68 9f 57 40 00       	push   0x40579f
  552bff:	6a 00                	push   0x0
  552c01:	6a 00                	push   0x0
  552c03:	ff 15 14 e4 79 00    	call   DWORD PTR ds:0x79e414
  552c09:	83 c4 18             	add    esp,0x18
  552c0c:	89 85 b4 fa ff ff    	mov    DWORD PTR [ebp-0x54c],eax
  552c12:	85 c0                	test   eax,eax
  552c14:	0f 84 df 0c 00 00    	je     0x5538f9
  552c1a:	8b 8d b8 fa ff ff    	mov    ecx,DWORD PTR [ebp-0x548]
  552c20:	c6 45 fc 19          	mov    BYTE PTR [ebp-0x4],0x19
  552c24:	85 c9                	test   ecx,ecx
  552c26:	0f 84 c0 0c 00 00    	je     0x5538ec
  552c2c:	51                   	push   ecx
  552c2d:	50                   	push   eax
  552c2e:	e8 ab 2a 11 00       	call   0x6656de ; ["call resolved=0x6656de "]
  552c33:	83 c4 08             	add    esp,0x8
  552c36:	85 c0                	test   eax,eax
  552c38:	0f 85 b5 0c 00 00    	jne    0x5538f3
  552c3e:	0f 57 c0             	xorps  xmm0,xmm0
  552c41:	8d 8d 00 fb ff ff    	lea    ecx,[ebp-0x500]
  552c47:	66 0f 13 85 b4 fa ff 	movlpd QWORD PTR [ebp-0x54c],xmm0
  552c4f:	e8 8a 73 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  552c54:	ff b5 00 fb ff ff    	push   DWORD PTR [ebp-0x500]
  552c5a:	8d 8d 08 fb ff ff    	lea    ecx,[ebp-0x4f8]
  552c60:	e8 e9 6c eb ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  552c65:	8b 95 d0 fb ff ff    	mov    edx,DWORD PTR [ebp-0x430]
  552c6b:	c6 45 fc 00          	mov    BYTE PTR [ebp-0x4],0x0
  552c6f:	83 fa 10             	cmp    edx,0x10
  552c72:	0f 82 0d fc ff ff    	jb     0x552885
  552c78:	8b 8d bc fb ff ff    	mov    ecx,DWORD PTR [ebp-0x444]
  552c7e:	42                   	inc    edx
  552c7f:	8b c1                	mov    eax,ecx
  552c81:	81 fa 00 10 00 00    	cmp    edx,0x1000
  552c87:	72 16                	jb     0x552c9f
  552c89:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  552c8c:	83 c2 23             	add    edx,0x23
  552c8f:	2b c1                	sub    eax,ecx
  552c91:	83 c0 fc             	add    eax,0xfffffffc
  552c94:	83 f8 1f             	cmp    eax,0x1f
  552c97:	76 06                	jbe    0x552c9f
  552c99:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  552c9f:	52                   	push   edx
  552ca0:	e9 d7 fb ff ff       	jmp    0x55287c
  552ca5:	80 bd 00 fb ff ff 01 	cmp    BYTE PTR [ebp-0x500],0x1
  552cac:	0f 85 e4 00 00 00    	jne    0x552d96
  552cb2:	8b 85 08 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4f8]
  552cb8:	89 85 18 fb ff ff    	mov    DWORD PTR [ebp-0x4e8],eax
  552cbe:	8b 38                	mov    edi,DWORD PTR [eax]
  552cc0:	8b 77 04             	mov    esi,DWORD PTR [edi+0x4]
  552cc3:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  552cc7:	75 2b                	jne    0x552cf4
  552cc9:	0f 1f 80 00 00 00 00 	nop    DWORD PTR [eax+0x0]
  552cd0:	8d 46 10             	lea    eax,[esi+0x10]
  552cd3:	68 2c 89 6d 00       	push   0x6d892c ; ["cmd"]
  552cd8:	50                   	push   eax
  552cd9:	e8 ed 26 eb ff       	call   0x4053cb ; ["call resolved=0x4a8270 "]
  552cde:	83 c4 08             	add    esp,0x8
  552ce1:	84 c0                	test   al,al
  552ce3:	74 05                	je     0x552cea
  552ce5:	8b 76 08             	mov    esi,DWORD PTR [esi+0x8]
  552ce8:	eb 04                	jmp    0x552cee
  552cea:	8b fe                	mov    edi,esi
  552cec:	8b 36                	mov    esi,DWORD PTR [esi]
  552cee:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  552cf2:	74 dc                	je     0x552cd0
  552cf4:	80 7f 0d 00          	cmp    BYTE PTR [edi+0xd],0x0
  552cf8:	75 15                	jne    0x552d0f
  552cfa:	8d 47 10             	lea    eax,[edi+0x10]
  552cfd:	50                   	push   eax
  552cfe:	68 2c 89 6d 00       	push   0x6d892c ; ["cmd"]
  552d03:	e8 d7 12 eb ff       	call   0x403fdf ; ["call resolved=0x4a82e0 "]
  552d08:	83 c4 08             	add    esp,0x8
  552d0b:	84 c0                	test   al,al
  552d0d:	74 08                	je     0x552d17
  552d0f:	8b 85 18 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4e8]
  552d15:	8b 38                	mov    edi,DWORD PTR [eax]
  552d17:	8b 85 08 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4f8]
  552d1d:	3b 38                	cmp    edi,DWORD PTR [eax]
  552d1f:	74 75                	je     0x552d96
  552d21:	8d 85 8c fa ff ff    	lea    eax,[ebp-0x574]
  552d27:	c6 85 8c fa ff ff 00 	mov    BYTE PTR [ebp-0x574],0x0
  552d2e:	0f 57 c0             	xorps  xmm0,xmm0
  552d31:	68 98 43 79 00       	push   0x794398
  552d36:	50                   	push   eax
  552d37:	66 0f d6 85 94 fa ff 	movq   QWORD PTR [ebp-0x56c],xmm0
  552d3f:	e8 b8 f5 ea ff       	call   0x4022fc ; ["call resolved=0x459700 "]
  552d44:	83 c4 08             	add    esp,0x8
  552d47:	8d 8d 8c fa ff ff    	lea    ecx,[ebp-0x574]
  552d4d:	e8 8c 72 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  552d52:	8b 85 1c fb ff ff    	mov    eax,DWORD PTR [ebp-0x4e4]
  552d58:	8d 8d 00 fb ff ff    	lea    ecx,[ebp-0x500]
  552d5e:	83 c8 02             	or     eax,0x2
  552d61:	c6 45 fc 1a          	mov    BYTE PTR [ebp-0x4],0x1a
  552d65:	68 2c 89 6d 00       	push   0x6d892c ; ["cmd"]
  552d6a:	89 85 1c fb ff ff    	mov    DWORD PTR [ebp-0x4e4],eax
  552d70:	89 85 14 fb ff ff    	mov    DWORD PTR [ebp-0x4ec],eax
  552d76:	e8 63 09 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  552d7b:	8d 8d 8c fa ff ff    	lea    ecx,[ebp-0x574]
  552d81:	51                   	push   ecx
  552d82:	50                   	push   eax
  552d83:	e8 71 ee ea ff       	call   0x401bf9 ; ["call resolved=0x4c2dc0 "]
  552d88:	83 c4 08             	add    esp,0x8
  552d8b:	c6 85 2b fb ff ff 01 	mov    BYTE PTR [ebp-0x4d5],0x1
  552d92:	84 c0                	test   al,al
  552d94:	75 07                	jne    0x552d9d
  552d96:	c6 85 2b fb ff ff 00 	mov    BYTE PTR [ebp-0x4d5],0x0
  552d9d:	8b 85 1c fb ff ff    	mov    eax,DWORD PTR [ebp-0x4e4]
  552da3:	c7 45 fc 04 00 00 00 	mov    DWORD PTR [ebp-0x4],0x4
  552daa:	a8 02                	test   al,0x2
  552dac:	74 2b                	je     0x552dd9
  552dae:	83 e0 fd             	and    eax,0xfffffffd
  552db1:	8d 8d 8c fa ff ff    	lea    ecx,[ebp-0x574]
  552db7:	89 85 1c fb ff ff    	mov    DWORD PTR [ebp-0x4e4],eax
  552dbd:	89 85 14 fb ff ff    	mov    DWORD PTR [ebp-0x4ec],eax
  552dc3:	e8 16 72 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  552dc8:	ff b5 8c fa ff ff    	push   DWORD PTR [ebp-0x574]
  552dce:	8d 8d 94 fa ff ff    	lea    ecx,[ebp-0x56c]
  552dd4:	e8 75 6b eb ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  552dd9:	80 bd 2b fb ff ff 00 	cmp    BYTE PTR [ebp-0x4d5],0x0
  552de0:	0f 84 68 02 00 00    	je     0x55304e
  552de6:	6a 5c                	push   0x5c
  552de8:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  552ded:	e8 74 59 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  552df2:	83 c4 08             	add    esp,0x8
  552df5:	85 c0                	test   eax,eax
  552df7:	74 12                	je     0x552e0b
  552df9:	6a 5c                	push   0x5c
  552dfb:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  552e00:	e8 61 59 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  552e05:	83 c4 08             	add    esp,0x8
  552e08:	40                   	inc    eax
  552e09:	eb 05                	jmp    0x552e10
  552e0b:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  552e10:	68 48 89 6d 00       	push   0x6d8948 ; ["BtFarawayDevice::consumeMessageLoop"]
  552e15:	68 45 01 00 00       	push   0x145
  552e1a:	50                   	push   eax
  552e1b:	68 60 8a 6d 00       	push   0x6d8a60 ; ["[ConntctionModule][%s:%d][%s]:pc recv mobile disconnect request...\n"]
  552e20:	8d 85 24 fb ff ff    	lea    eax,[ebp-0x4dc]
  552e26:	c7 85 24 fb ff ff 02 	mov    DWORD PTR [ebp-0x4dc],0x2
  552e30:	50                   	push   eax
  552e31:	8d 85 8c fb ff ff    	lea    eax,[ebp-0x474]
  552e37:	50                   	push   eax
  552e38:	e8 cc 41 eb ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  552e3d:	83 c4 18             	add    esp,0x18
  552e40:	8d 8d 8c fb ff ff    	lea    ecx,[ebp-0x474]
  552e46:	e8 b8 0b eb ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  552e4b:	8b 8d 10 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x4f0]
  552e51:	6a 01                	push   0x1
  552e53:	8b 01                	mov    eax,DWORD PTR [ecx]
  552e55:	c6 81 68 01 00 00 01 	mov    BYTE PTR [ecx+0x168],0x1
  552e5c:	ff 90 b8 00 00 00    	call   DWORD PTR [eax+0xb8]
  552e62:	80 bd 00 fb ff ff 01 	cmp    BYTE PTR [ebp-0x500],0x1
  552e69:	0f 85 24 01 00 00    	jne    0x552f93
  552e6f:	8b 85 08 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4f8]
  552e75:	89 85 24 fb ff ff    	mov    DWORD PTR [ebp-0x4dc],eax
  552e7b:	8b 38                	mov    edi,DWORD PTR [eax]
  552e7d:	8b 77 04             	mov    esi,DWORD PTR [edi+0x4]
  552e80:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  552e84:	75 24                	jne    0x552eaa
  552e86:	8d 46 10             	lea    eax,[esi+0x10]
  552e89:	68 30 89 6d 00       	push   0x6d8930 ; ["param"]
  552e8e:	50                   	push   eax
  552e8f:	e8 37 25 eb ff       	call   0x4053cb ; ["call resolved=0x4a8270 "]
  552e94:	83 c4 08             	add    esp,0x8
  552e97:	84 c0                	test   al,al
  552e99:	74 05                	je     0x552ea0
  552e9b:	8b 76 08             	mov    esi,DWORD PTR [esi+0x8]
  552e9e:	eb 04                	jmp    0x552ea4
  552ea0:	8b fe                	mov    edi,esi
  552ea2:	8b 36                	mov    esi,DWORD PTR [esi]
  552ea4:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  552ea8:	74 dc                	je     0x552e86
  552eaa:	80 7f 0d 00          	cmp    BYTE PTR [edi+0xd],0x0
  552eae:	75 15                	jne    0x552ec5
  552eb0:	8d 47 10             	lea    eax,[edi+0x10]
  552eb3:	50                   	push   eax
  552eb4:	68 30 89 6d 00       	push   0x6d8930 ; ["param"]
  552eb9:	e8 21 11 eb ff       	call   0x403fdf ; ["call resolved=0x4a82e0 "]
  552ebe:	83 c4 08             	add    esp,0x8
  552ec1:	84 c0                	test   al,al
  552ec3:	74 08                	je     0x552ecd
  552ec5:	8b bd 24 fb ff ff    	mov    edi,DWORD PTR [ebp-0x4dc]
  552ecb:	8b 3f                	mov    edi,DWORD PTR [edi]
  552ecd:	8b 85 08 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4f8]
  552ed3:	3b 38                	cmp    edi,DWORD PTR [eax]
  552ed5:	0f 84 b8 00 00 00    	je     0x552f93
  552edb:	68 30 89 6d 00       	push   0x6d8930 ; ["param"]
  552ee0:	8d 8d 00 fb ff ff    	lea    ecx,[ebp-0x500]
  552ee6:	e8 f3 07 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  552eeb:	89 85 20 fb ff ff    	mov    DWORD PTR [ebp-0x4e0],eax
  552ef1:	80 38 01             	cmp    BYTE PTR [eax],0x1
  552ef4:	0f 85 99 00 00 00    	jne    0x552f93
  552efa:	8b 40 08             	mov    eax,DWORD PTR [eax+0x8]
  552efd:	89 85 24 fb ff ff    	mov    DWORD PTR [ebp-0x4dc],eax
  552f03:	8b 38                	mov    edi,DWORD PTR [eax]
  552f05:	8b 77 04             	mov    esi,DWORD PTR [edi+0x4]
  552f08:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  552f0c:	75 26                	jne    0x552f34
  552f0e:	66 90                	xchg   ax,ax
  552f10:	8d 46 10             	lea    eax,[esi+0x10]
  552f13:	68 b4 8a 6d 00       	push   0x6d8ab4 ; ["connectCount"]
  552f18:	50                   	push   eax
  552f19:	e8 ad 24 eb ff       	call   0x4053cb ; ["call resolved=0x4a8270 "]
  552f1e:	83 c4 08             	add    esp,0x8
  552f21:	84 c0                	test   al,al
  552f23:	74 05                	je     0x552f2a
  552f25:	8b 76 08             	mov    esi,DWORD PTR [esi+0x8]
  552f28:	eb 04                	jmp    0x552f2e
  552f2a:	8b fe                	mov    edi,esi
  552f2c:	8b 36                	mov    esi,DWORD PTR [esi]
  552f2e:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  552f32:	74 dc                	je     0x552f10
  552f34:	80 7f 0d 00          	cmp    BYTE PTR [edi+0xd],0x0
  552f38:	75 15                	jne    0x552f4f
  552f3a:	8d 47 10             	lea    eax,[edi+0x10]
  552f3d:	50                   	push   eax
  552f3e:	68 b4 8a 6d 00       	push   0x6d8ab4 ; ["connectCount"]
  552f43:	e8 97 10 eb ff       	call   0x403fdf ; ["call resolved=0x4a82e0 "]
  552f48:	83 c4 08             	add    esp,0x8
  552f4b:	84 c0                	test   al,al
  552f4d:	74 08                	je     0x552f57
  552f4f:	8b bd 24 fb ff ff    	mov    edi,DWORD PTR [ebp-0x4dc]
  552f55:	8b 3f                	mov    edi,DWORD PTR [edi]
  552f57:	8b 85 20 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4e0]
  552f5d:	8b 40 08             	mov    eax,DWORD PTR [eax+0x8]
  552f60:	3b 38                	cmp    edi,DWORD PTR [eax]
  552f62:	74 2f                	je     0x552f93
  552f64:	68 30 89 6d 00       	push   0x6d8930 ; ["param"]
  552f69:	8d 8d 00 fb ff ff    	lea    ecx,[ebp-0x500]
  552f6f:	e8 6a 07 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  552f74:	68 b4 8a 6d 00       	push   0x6d8ab4 ; ["connectCount"]
  552f79:	8b c8                	mov    ecx,eax
  552f7b:	e8 5e 07 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  552f80:	8b c8                	mov    ecx,eax
  552f82:	e8 30 0b eb ff       	call   0x403ab7 ; ["call resolved=0x4a9c50 "]
  552f87:	8b 8d 10 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x4f0]
  552f8d:	89 81 6c 01 00 00    	mov    DWORD PTR [ecx+0x16c],eax
  552f93:	68 00 04 00 00       	push   0x400
  552f98:	8d 85 ec fb ff ff    	lea    eax,[ebp-0x414]
  552f9e:	c7 85 d4 fa ff ff 00 	mov    DWORD PTR [ebp-0x52c],0x0
  552fa8:	6a 00                	push   0x0
  552faa:	50                   	push   eax
  552fab:	e8 e6 57 11 00       	call   0x668796 ; ["call resolved=0x668796 "]
  552fb0:	8b 85 10 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4f0]
  552fb6:	8d 8d 00 fb ff ff    	lea    ecx,[ebp-0x500]
  552fbc:	83 c4 0c             	add    esp,0xc
  552fbf:	8b 00                	mov    eax,DWORD PTR [eax]
  552fc1:	68 c4 8a 6d 00       	push   0x6d8ac4 ; ["reqId"]
  552fc6:	8b 70 4c             	mov    esi,DWORD PTR [eax+0x4c]
  552fc9:	e8 10 07 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  552fce:	8d 8d d4 fb ff ff    	lea    ecx,[ebp-0x42c]
  552fd4:	51                   	push   ecx
  552fd5:	8b c8                	mov    ecx,eax
  552fd7:	e8 0e 3c eb ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  552fdc:	8b bd 1c fb ff ff    	mov    edi,DWORD PTR [ebp-0x4e4]
  552fe2:	81 cf 00 02 00 00    	or     edi,0x200
  552fe8:	89 bd 1c fb ff ff    	mov    DWORD PTR [ebp-0x4e4],edi
  552fee:	89 bd 14 fb ff ff    	mov    DWORD PTR [ebp-0x4ec],edi
  552ff4:	8b 8d 10 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x4f0]
  552ffa:	8d 85 d4 fa ff ff    	lea    eax,[ebp-0x52c]
  553000:	50                   	push   eax
  553001:	8d 85 ec fb ff ff    	lea    eax,[ebp-0x414]
  553007:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  55300b:	50                   	push   eax
  55300c:	8d 85 d4 fb ff ff    	lea    eax,[ebp-0x42c]
  553012:	50                   	push   eax
  553013:	68 18 46 79 00       	push   0x794618
  553018:	68 98 43 79 00       	push   0x794398
  55301d:	ff d6                	call   esi
  55301f:	8d 8d d4 fb ff ff    	lea    ecx,[ebp-0x42c]
  553025:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  553029:	e8 d5 09 eb ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  55302e:	8b b5 10 fb ff ff    	mov    esi,DWORD PTR [ebp-0x4f0]
  553034:	8d 8d d4 fa ff ff    	lea    ecx,[ebp-0x52c]
  55303a:	51                   	push   ecx
  55303b:	8d 8d ec fb ff ff    	lea    ecx,[ebp-0x414]
  553041:	51                   	push   ecx
  553042:	8b 06                	mov    eax,DWORD PTR [esi]
  553044:	8b ce                	mov    ecx,esi
  553046:	ff 50 1c             	call   DWORD PTR [eax+0x1c]
  553049:	e9 ca f7 ff ff       	jmp    0x552818
  55304e:	80 bd 00 fb ff ff 01 	cmp    BYTE PTR [ebp-0x500],0x1
  553055:	0f 85 dd 00 00 00    	jne    0x553138
  55305b:	8b 85 08 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4f8]
  553061:	89 85 18 fb ff ff    	mov    DWORD PTR [ebp-0x4e8],eax
  553067:	8b 38                	mov    edi,DWORD PTR [eax]
  553069:	8b 77 04             	mov    esi,DWORD PTR [edi+0x4]
  55306c:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  553070:	75 24                	jne    0x553096
  553072:	8d 46 10             	lea    eax,[esi+0x10]
  553075:	68 2c 89 6d 00       	push   0x6d892c ; ["cmd"]
  55307a:	50                   	push   eax
  55307b:	e8 4b 23 eb ff       	call   0x4053cb ; ["call resolved=0x4a8270 "]
  553080:	83 c4 08             	add    esp,0x8
  553083:	84 c0                	test   al,al
  553085:	74 05                	je     0x55308c
  553087:	8b 76 08             	mov    esi,DWORD PTR [esi+0x8]
  55308a:	eb 04                	jmp    0x553090
  55308c:	8b fe                	mov    edi,esi
  55308e:	8b 36                	mov    esi,DWORD PTR [esi]
  553090:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  553094:	74 dc                	je     0x553072
  553096:	80 7f 0d 00          	cmp    BYTE PTR [edi+0xd],0x0
  55309a:	75 15                	jne    0x5530b1
  55309c:	8d 47 10             	lea    eax,[edi+0x10]
  55309f:	50                   	push   eax
  5530a0:	68 2c 89 6d 00       	push   0x6d892c ; ["cmd"]
  5530a5:	e8 35 0f eb ff       	call   0x403fdf ; ["call resolved=0x4a82e0 "]
  5530aa:	83 c4 08             	add    esp,0x8
  5530ad:	84 c0                	test   al,al
  5530af:	74 08                	je     0x5530b9
  5530b1:	8b 85 18 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4e8]
  5530b7:	8b 38                	mov    edi,DWORD PTR [eax]
  5530b9:	8b 85 08 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4f8]
  5530bf:	3b 38                	cmp    edi,DWORD PTR [eax]
  5530c1:	74 75                	je     0x553138
  5530c3:	8d 85 7c fa ff ff    	lea    eax,[ebp-0x584]
  5530c9:	c6 85 7c fa ff ff 00 	mov    BYTE PTR [ebp-0x584],0x0
  5530d0:	0f 57 c0             	xorps  xmm0,xmm0
  5530d3:	68 e0 43 79 00       	push   0x7943e0
  5530d8:	50                   	push   eax
  5530d9:	66 0f d6 85 84 fa ff 	movq   QWORD PTR [ebp-0x57c],xmm0
  5530e1:	e8 16 f2 ea ff       	call   0x4022fc ; ["call resolved=0x459700 "]
  5530e6:	83 c4 08             	add    esp,0x8
  5530e9:	8d 8d 7c fa ff ff    	lea    ecx,[ebp-0x584]
  5530ef:	e8 ea 6e eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5530f4:	8b 85 1c fb ff ff    	mov    eax,DWORD PTR [ebp-0x4e4]
  5530fa:	8d 8d 00 fb ff ff    	lea    ecx,[ebp-0x500]
  553100:	83 c8 04             	or     eax,0x4
  553103:	c6 45 fc 1c          	mov    BYTE PTR [ebp-0x4],0x1c
  553107:	68 2c 89 6d 00       	push   0x6d892c ; ["cmd"]
  55310c:	89 85 1c fb ff ff    	mov    DWORD PTR [ebp-0x4e4],eax
  553112:	89 85 14 fb ff ff    	mov    DWORD PTR [ebp-0x4ec],eax
  553118:	e8 c1 05 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  55311d:	8d 8d 7c fa ff ff    	lea    ecx,[ebp-0x584]
  553123:	51                   	push   ecx
  553124:	50                   	push   eax
  553125:	e8 cf ea ea ff       	call   0x401bf9 ; ["call resolved=0x4c2dc0 "]
  55312a:	83 c4 08             	add    esp,0x8
  55312d:	c6 85 2b fb ff ff 01 	mov    BYTE PTR [ebp-0x4d5],0x1
  553134:	84 c0                	test   al,al
  553136:	75 07                	jne    0x55313f
  553138:	c6 85 2b fb ff ff 00 	mov    BYTE PTR [ebp-0x4d5],0x0
  55313f:	8b 85 1c fb ff ff    	mov    eax,DWORD PTR [ebp-0x4e4]
  553145:	c7 45 fc 04 00 00 00 	mov    DWORD PTR [ebp-0x4],0x4
  55314c:	a8 04                	test   al,0x4
  55314e:	74 2b                	je     0x55317b
  553150:	83 e0 fb             	and    eax,0xfffffffb
  553153:	8d 8d 7c fa ff ff    	lea    ecx,[ebp-0x584]
  553159:	89 85 1c fb ff ff    	mov    DWORD PTR [ebp-0x4e4],eax
  55315f:	89 85 14 fb ff ff    	mov    DWORD PTR [ebp-0x4ec],eax
  553165:	e8 74 6e eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  55316a:	ff b5 7c fa ff ff    	push   DWORD PTR [ebp-0x584]
  553170:	8d 8d 84 fa ff ff    	lea    ecx,[ebp-0x57c]
  553176:	e8 d3 67 eb ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  55317b:	80 bd 2b fb ff ff 00 	cmp    BYTE PTR [ebp-0x4d5],0x0
  553182:	74 1d                	je     0x5531a1
  553184:	8d 85 bc fb ff ff    	lea    eax,[ebp-0x444]
  55318a:	50                   	push   eax
  55318b:	8b 85 10 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4f0]
  553191:	8b 88 0c 0f 00 00    	mov    ecx,DWORD PTR [eax+0xf0c]
  553197:	e8 5e 39 eb ff       	call   0x406afa ; ["call resolved=0x56bce0 MsgPublisher::notifySubscribers"]
  55319c:	e9 90 05 00 00       	jmp    0x553731
  5531a1:	80 bd 00 fb ff ff 01 	cmp    BYTE PTR [ebp-0x500],0x1
  5531a8:	0f 85 dd 00 00 00    	jne    0x55328b
  5531ae:	8b 85 08 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4f8]
  5531b4:	89 85 18 fb ff ff    	mov    DWORD PTR [ebp-0x4e8],eax
  5531ba:	8b 38                	mov    edi,DWORD PTR [eax]
  5531bc:	8b 77 04             	mov    esi,DWORD PTR [edi+0x4]
  5531bf:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  5531c3:	75 24                	jne    0x5531e9
  5531c5:	8d 46 10             	lea    eax,[esi+0x10]
  5531c8:	68 2c 89 6d 00       	push   0x6d892c ; ["cmd"]
  5531cd:	50                   	push   eax
  5531ce:	e8 f8 21 eb ff       	call   0x4053cb ; ["call resolved=0x4a8270 "]
  5531d3:	83 c4 08             	add    esp,0x8
  5531d6:	84 c0                	test   al,al
  5531d8:	74 05                	je     0x5531df
  5531da:	8b 76 08             	mov    esi,DWORD PTR [esi+0x8]
  5531dd:	eb 04                	jmp    0x5531e3
  5531df:	8b fe                	mov    edi,esi
  5531e1:	8b 36                	mov    esi,DWORD PTR [esi]
  5531e3:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  5531e7:	74 dc                	je     0x5531c5
  5531e9:	80 7f 0d 00          	cmp    BYTE PTR [edi+0xd],0x0
  5531ed:	75 15                	jne    0x553204
  5531ef:	8d 47 10             	lea    eax,[edi+0x10]
  5531f2:	50                   	push   eax
  5531f3:	68 2c 89 6d 00       	push   0x6d892c ; ["cmd"]
  5531f8:	e8 e2 0d eb ff       	call   0x403fdf ; ["call resolved=0x4a82e0 "]
  5531fd:	83 c4 08             	add    esp,0x8
  553200:	84 c0                	test   al,al
  553202:	74 08                	je     0x55320c
  553204:	8b 85 18 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4e8]
  55320a:	8b 38                	mov    edi,DWORD PTR [eax]
  55320c:	8b 85 08 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4f8]
  553212:	3b 38                	cmp    edi,DWORD PTR [eax]
  553214:	74 75                	je     0x55328b
  553216:	8d 85 6c fa ff ff    	lea    eax,[ebp-0x594]
  55321c:	c6 85 6c fa ff ff 00 	mov    BYTE PTR [ebp-0x594],0x0
  553223:	0f 57 c0             	xorps  xmm0,xmm0
  553226:	68 b0 43 79 00       	push   0x7943b0
  55322b:	50                   	push   eax
  55322c:	66 0f d6 85 74 fa ff 	movq   QWORD PTR [ebp-0x58c],xmm0
  553234:	e8 c3 f0 ea ff       	call   0x4022fc ; ["call resolved=0x459700 "]
  553239:	83 c4 08             	add    esp,0x8
  55323c:	8d 8d 6c fa ff ff    	lea    ecx,[ebp-0x594]
  553242:	e8 97 6d eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  553247:	8b 85 1c fb ff ff    	mov    eax,DWORD PTR [ebp-0x4e4]
  55324d:	8d 8d 00 fb ff ff    	lea    ecx,[ebp-0x500]
  553253:	83 c8 08             	or     eax,0x8
  553256:	c6 45 fc 1d          	mov    BYTE PTR [ebp-0x4],0x1d
  55325a:	68 2c 89 6d 00       	push   0x6d892c ; ["cmd"]
  55325f:	89 85 1c fb ff ff    	mov    DWORD PTR [ebp-0x4e4],eax
  553265:	89 85 14 fb ff ff    	mov    DWORD PTR [ebp-0x4ec],eax
  55326b:	e8 6e 04 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  553270:	8d 8d 6c fa ff ff    	lea    ecx,[ebp-0x594]
  553276:	51                   	push   ecx
  553277:	50                   	push   eax
  553278:	e8 7c e9 ea ff       	call   0x401bf9 ; ["call resolved=0x4c2dc0 "]
  55327d:	83 c4 08             	add    esp,0x8
  553280:	c6 85 2b fb ff ff 01 	mov    BYTE PTR [ebp-0x4d5],0x1
  553287:	84 c0                	test   al,al
  553289:	75 07                	jne    0x553292
  55328b:	c6 85 2b fb ff ff 00 	mov    BYTE PTR [ebp-0x4d5],0x0
  553292:	8b 85 1c fb ff ff    	mov    eax,DWORD PTR [ebp-0x4e4]
  553298:	c7 45 fc 04 00 00 00 	mov    DWORD PTR [ebp-0x4],0x4
  55329f:	a8 08                	test   al,0x8
  5532a1:	74 2b                	je     0x5532ce
  5532a3:	83 e0 f7             	and    eax,0xfffffff7
  5532a6:	8d 8d 6c fa ff ff    	lea    ecx,[ebp-0x594]
  5532ac:	89 85 1c fb ff ff    	mov    DWORD PTR [ebp-0x4e4],eax
  5532b2:	89 85 14 fb ff ff    	mov    DWORD PTR [ebp-0x4ec],eax
  5532b8:	e8 21 6d eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5532bd:	ff b5 6c fa ff ff    	push   DWORD PTR [ebp-0x594]
  5532c3:	8d 8d 74 fa ff ff    	lea    ecx,[ebp-0x58c]
  5532c9:	e8 80 66 eb ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  5532ce:	80 bd 2b fb ff ff 00 	cmp    BYTE PTR [ebp-0x4d5],0x0
  5532d5:	0f 84 71 02 00 00    	je     0x55354c
  5532db:	80 bd 00 fb ff ff 01 	cmp    BYTE PTR [ebp-0x500],0x1
  5532e2:	0f 85 4d 01 00 00    	jne    0x553435
  5532e8:	8b 85 08 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4f8]
  5532ee:	89 85 18 fb ff ff    	mov    DWORD PTR [ebp-0x4e8],eax
  5532f4:	8b 38                	mov    edi,DWORD PTR [eax]
  5532f6:	8b 77 04             	mov    esi,DWORD PTR [edi+0x4]
  5532f9:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  5532fd:	75 25                	jne    0x553324
  5532ff:	90                   	nop
  553300:	8d 46 10             	lea    eax,[esi+0x10]
  553303:	68 30 89 6d 00       	push   0x6d8930 ; ["param"]
  553308:	50                   	push   eax
  553309:	e8 bd 20 eb ff       	call   0x4053cb ; ["call resolved=0x4a8270 "]
  55330e:	83 c4 08             	add    esp,0x8
  553311:	84 c0                	test   al,al
  553313:	74 05                	je     0x55331a
  553315:	8b 76 08             	mov    esi,DWORD PTR [esi+0x8]
  553318:	eb 04                	jmp    0x55331e
  55331a:	8b fe                	mov    edi,esi
  55331c:	8b 36                	mov    esi,DWORD PTR [esi]
  55331e:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  553322:	74 dc                	je     0x553300
  553324:	80 7f 0d 00          	cmp    BYTE PTR [edi+0xd],0x0
  553328:	75 15                	jne    0x55333f
  55332a:	8d 47 10             	lea    eax,[edi+0x10]
  55332d:	50                   	push   eax
  55332e:	68 30 89 6d 00       	push   0x6d8930 ; ["param"]
  553333:	e8 a7 0c eb ff       	call   0x403fdf ; ["call resolved=0x4a82e0 "]
  553338:	83 c4 08             	add    esp,0x8
  55333b:	84 c0                	test   al,al
  55333d:	74 08                	je     0x553347
  55333f:	8b 85 18 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4e8]
  553345:	8b 38                	mov    edi,DWORD PTR [eax]
  553347:	8b 85 08 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4f8]
  55334d:	3b 38                	cmp    edi,DWORD PTR [eax]
  55334f:	0f 84 e0 00 00 00    	je     0x553435
  553355:	68 30 89 6d 00       	push   0x6d8930 ; ["param"]
  55335a:	8d 8d 00 fb ff ff    	lea    ecx,[ebp-0x500]
  553360:	e8 79 03 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  553365:	89 85 24 fb ff ff    	mov    DWORD PTR [ebp-0x4dc],eax
  55336b:	80 38 01             	cmp    BYTE PTR [eax],0x1
  55336e:	0f 85 c1 00 00 00    	jne    0x553435
  553374:	8b 48 08             	mov    ecx,DWORD PTR [eax+0x8]
  553377:	89 8d 20 fb ff ff    	mov    DWORD PTR [ebp-0x4e0],ecx
  55337d:	8b 39                	mov    edi,DWORD PTR [ecx]
  55337f:	8b 77 04             	mov    esi,DWORD PTR [edi+0x4]
  553382:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  553386:	75 32                	jne    0x5533ba
  553388:	0f 1f 84 00 00 00 00 	nop    DWORD PTR [eax+eax*1+0x0]
  553390:	8d 46 10             	lea    eax,[esi+0x10]
  553393:	68 cc 8a 6d 00       	push   0x6d8acc ; ["forwardData"]
  553398:	50                   	push   eax
  553399:	e8 2d 20 eb ff       	call   0x4053cb ; ["call resolved=0x4a8270 "]
  55339e:	83 c4 08             	add    esp,0x8
  5533a1:	84 c0                	test   al,al
  5533a3:	74 05                	je     0x5533aa
  5533a5:	8b 76 08             	mov    esi,DWORD PTR [esi+0x8]
  5533a8:	eb 04                	jmp    0x5533ae
  5533aa:	8b fe                	mov    edi,esi
  5533ac:	8b 36                	mov    esi,DWORD PTR [esi]
  5533ae:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  5533b2:	74 dc                	je     0x553390
  5533b4:	8b 8d 20 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x4e0]
  5533ba:	80 7f 0d 00          	cmp    BYTE PTR [edi+0xd],0x0
  5533be:	75 12                	jne    0x5533d2
  5533c0:	8d 47 10             	lea    eax,[edi+0x10]
  5533c3:	50                   	push   eax
  5533c4:	68 cc 8a 6d 00       	push   0x6d8acc ; ["forwardData"]
  5533c9:	e8 c8 1d eb ff       	call   0x405196 ; ["call resolved=0x54c520 "]
  5533ce:	84 c0                	test   al,al
  5533d0:	74 08                	je     0x5533da
  5533d2:	8b bd 20 fb ff ff    	mov    edi,DWORD PTR [ebp-0x4e0]
  5533d8:	8b 3f                	mov    edi,DWORD PTR [edi]
  5533da:	8b 85 24 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4dc]
  5533e0:	8d 8d 20 fb ff ff    	lea    ecx,[ebp-0x4e0]
  5533e6:	89 bd 20 fb ff ff    	mov    DWORD PTR [ebp-0x4e0],edi
  5533ec:	8b 40 08             	mov    eax,DWORD PTR [eax+0x8]
  5533ef:	8b 00                	mov    eax,DWORD PTR [eax]
  5533f1:	89 85 24 fb ff ff    	mov    DWORD PTR [ebp-0x4dc],eax
  5533f7:	8d 85 24 fb ff ff    	lea    eax,[ebp-0x4dc]
  5533fd:	50                   	push   eax
  5533fe:	e8 14 e3 ea ff       	call   0x401717 ; ["call resolved=0x54ecd0 "]
  553403:	84 c0                	test   al,al
  553405:	74 2e                	je     0x553435
  553407:	68 30 89 6d 00       	push   0x6d8930 ; ["param"]
  55340c:	8d 8d 00 fb ff ff    	lea    ecx,[ebp-0x500]
  553412:	e8 c7 02 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  553417:	68 cc 8a 6d 00       	push   0x6d8acc ; ["forwardData"]
  55341c:	8b c8                	mov    ecx,eax
  55341e:	e8 bb 02 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  553423:	8b 8d 10 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x4f0]
  553429:	50                   	push   eax
  55342a:	8d 89 00 01 00 00    	lea    ecx,[ecx+0x100]
  553430:	e8 df 26 eb ff       	call   0x405b14 ; ["call resolved=0x4a7fe0 "]
  553435:	68 00 04 00 00       	push   0x400
  55343a:	8d 85 ec fb ff ff    	lea    eax,[ebp-0x414]
  553440:	c7 85 d0 fa ff ff 00 	mov    DWORD PTR [ebp-0x530],0x0
  55344a:	6a 00                	push   0x0
  55344c:	50                   	push   eax
  55344d:	e8 44 53 11 00       	call   0x668796 ; ["call resolved=0x668796 "]
  553452:	8b 85 10 fb ff ff    	mov    eax,DWORD PTR [ebp-0x4f0]
  553458:	8d 8d 00 fb ff ff    	lea    ecx,[ebp-0x500]
  55345e:	83 c4 0c             	add    esp,0xc
  553461:	8b 00                	mov    eax,DWORD PTR [eax]
  553463:	68 c4 8a 6d 00       	push   0x6d8ac4 ; ["reqId"]
  553468:	8b 70 4c             	mov    esi,DWORD PTR [eax+0x4c]
  55346b:	e8 6e 02 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  553470:	8d 8d d4 fb ff ff    	lea    ecx,[ebp-0x42c]
  553476:	51                   	push   ecx
  553477:	8b c8                	mov    ecx,eax
  553479:	e8 7f 51 eb ff       	call   0x4085fd ; ["call resolved=0x54c4f0 "]
  55347e:	8b 8d 10 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x4f0]
  553484:	8d 85 d0 fa ff ff    	lea    eax,[ebp-0x530]
  55348a:	50                   	push   eax
  55348b:	8d 85 ec fb ff ff    	lea    eax,[ebp-0x414]
  553491:	c6 45 fc 1e          	mov    BYTE PTR [ebp-0x4],0x1e
  553495:	50                   	push   eax
  553496:	8d 85 d4 fb ff ff    	lea    eax,[ebp-0x42c]
  55349c:	50                   	push   eax
  55349d:	68 18 46 79 00       	push   0x794618
  5534a2:	68 b0 43 79 00       	push   0x7943b0
  5534a7:	ff d6                	call   esi
  5534a9:	8d 8d d4 fb ff ff    	lea    ecx,[ebp-0x42c]
  5534af:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  5534b3:	e8 4b 05 eb ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5534b8:	8b 8d 10 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x4f0]
  5534be:	8d 95 d0 fa ff ff    	lea    edx,[ebp-0x530]
  5534c4:	52                   	push   edx
  5534c5:	8d 95 ec fb ff ff    	lea    edx,[ebp-0x414]
  5534cb:	52                   	push   edx
  5534cc:	8b 01                	mov    eax,DWORD PTR [ecx]
  5534ce:	8b 40 1c             	mov    eax,DWORD PTR [eax+0x1c]
  5534d1:	ff d0                	call   eax
  5534d3:	84 c0                	test   al,al
  5534d5:	75 65                	jne    0x55353c
  5534d7:	6a 5c                	push   0x5c
  5534d9:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5534de:	e8 83 52 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5534e3:	83 c4 08             	add    esp,0x8
  5534e6:	85 c0                	test   eax,eax
  5534e8:	74 12                	je     0x5534fc
  5534ea:	6a 5c                	push   0x5c
  5534ec:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5534f1:	e8 70 52 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5534f6:	83 c4 08             	add    esp,0x8
  5534f9:	40                   	inc    eax
  5534fa:	eb 05                	jmp    0x553501
  5534fc:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  553501:	68 48 89 6d 00       	push   0x6d8948 ; ["BtFarawayDevice::consumeMessageLoop"]
  553506:	68 5e 01 00 00       	push   0x15e
  55350b:	50                   	push   eax
  55350c:	68 e0 8a 6d 00       	push   0x6d8ae0 ; ["[ConntctionModule][%s:%d][%s]: Send device_info response failed!\n"]
  553511:	8d 85 24 fb ff ff    	lea    eax,[ebp-0x4dc]
  553517:	c7 85 24 fb ff ff 02 	mov    DWORD PTR [ebp-0x4dc],0x2
  553521:	50                   	push   eax
  553522:	8d 85 8c fb ff ff    	lea    eax,[ebp-0x474]
  553528:	50                   	push   eax
  553529:	e8 db 3a eb ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  55352e:	83 c4 18             	add    esp,0x18
  553531:	8d 8d 8c fb ff ff    	lea    ecx,[ebp-0x474]
  553537:	e8 c7 04 eb ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  55353c:	e8 0c fc ea ff       	call   0x40314d ; ["call resolved=0x554b50 "]
  553541:	8b c8                	mov    ecx,eax
  553543:	8b 10                	mov    edx,DWORD PTR [eax]
  553545:	ff 12                	call   DWORD PTR [edx]
  553547:	e9 e5 01 00 00       	jmp    0x553731
  55354c:	68 2c 89 6d 00       	push   0x6d892c ; ["cmd"]
  553551:	8d 8d 00 fb ff ff    	lea    ecx,[ebp-0x500]
  553557:	e8 e6 e3 ea ff       	call   0x401942 ; ["call resolved=0x512a50 "]
  55355c:	84 c0                	test   al,al
  55355e:	74 54                	je     0x5535b4
  553560:	68 10 44 79 00       	push   0x794410
  553565:	8d 8d 04 fa ff ff    	lea    ecx,[ebp-0x5fc]
  55356b:	e8 11 31 eb ff       	call   0x406681 ; ["call resolved=0x43d750 "]
  553570:	8b 85 1c fb ff ff    	mov    eax,DWORD PTR [ebp-0x4e4]
  553576:	8d 8d 00 fb ff ff    	lea    ecx,[ebp-0x500]
  55357c:	83 c8 10             	or     eax,0x10
  55357f:	c6 45 fc 1f          	mov    BYTE PTR [ebp-0x4],0x1f
  553583:	68 2c 89 6d 00       	push   0x6d892c ; ["cmd"]
  553588:	89 85 1c fb ff ff    	mov    DWORD PTR [ebp-0x4e4],eax
  55358e:	89 85 14 fb ff ff    	mov    DWORD PTR [ebp-0x4ec],eax
  553594:	e8 45 01 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  553599:	8d 8d 04 fa ff ff    	lea    ecx,[ebp-0x5fc]
  55359f:	51                   	push   ecx
  5535a0:	50                   	push   eax
  5535a1:	e8 53 e6 ea ff       	call   0x401bf9 ; ["call resolved=0x4c2dc0 "]
  5535a6:	83 c4 08             	add    esp,0x8
  5535a9:	c6 85 2b fb ff ff 01 	mov    BYTE PTR [ebp-0x4d5],0x1
  5535b0:	84 c0                	test   al,al
  5535b2:	75 07                	jne    0x5535bb
  5535b4:	c6 85 2b fb ff ff 00 	mov    BYTE PTR [ebp-0x4d5],0x0
  5535bb:	8b 85 1c fb ff ff    	mov    eax,DWORD PTR [ebp-0x4e4]
  5535c1:	c7 45 fc 04 00 00 00 	mov    DWORD PTR [ebp-0x4],0x4
  5535c8:	a8 10                	test   al,0x10
  5535ca:	74 1a                	je     0x5535e6
  5535cc:	83 e0 ef             	and    eax,0xffffffef
  5535cf:	8d 8d 04 fa ff ff    	lea    ecx,[ebp-0x5fc]
  5535d5:	89 85 1c fb ff ff    	mov    DWORD PTR [ebp-0x4e4],eax
  5535db:	89 85 14 fb ff ff    	mov    DWORD PTR [ebp-0x4ec],eax
  5535e1:	e8 31 5e eb ff       	call   0x409417 ; ["call resolved=0x46f270 "]
  5535e6:	80 bd 2b fb ff ff 00 	cmp    BYTE PTR [ebp-0x4d5],0x0
  5535ed:	0f 84 3e 01 00 00    	je     0x553731
  5535f3:	6a 5c                	push   0x5c
  5535f5:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5535fa:	e8 67 51 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5535ff:	83 c4 08             	add    esp,0x8
  553602:	85 c0                	test   eax,eax
  553604:	74 12                	je     0x553618
  553606:	6a 5c                	push   0x5c
  553608:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  55360d:	e8 54 51 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  553612:	83 c4 08             	add    esp,0x8
  553615:	40                   	inc    eax
  553616:	eb 05                	jmp    0x55361d
  553618:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  55361d:	68 48 89 6d 00       	push   0x6d8948 ; ["BtFarawayDevice::consumeMessageLoop"]
  553622:	68 64 01 00 00       	push   0x164
  553627:	50                   	push   eax
  553628:	68 30 8b 6d 00       	push   0x6d8b30 ; ["[ConntctionModule][%s:%d][%s]:pc recv mobile notify_p2p_conflict request...\n"]
  55362d:	8d 85 24 fb ff ff    	lea    eax,[ebp-0x4dc]
  553633:	c7 85 24 fb ff ff 02 	mov    DWORD PTR [ebp-0x4dc],0x2
  55363d:	50                   	push   eax
  55363e:	8d 85 8c fb ff ff    	lea    eax,[ebp-0x474]
  553644:	50                   	push   eax
  553645:	e8 bf 39 eb ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  55364a:	83 c4 18             	add    esp,0x18
  55364d:	8d 8d 8c fb ff ff    	lea    ecx,[ebp-0x474]
  553653:	e8 ab 03 eb ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  553658:	68 00 04 00 00       	push   0x400
  55365d:	8d 85 ec fb ff ff    	lea    eax,[ebp-0x414]
  553663:	c7 85 cc fa ff ff 00 	mov    DWORD PTR [ebp-0x534],0x0
  55366d:	6a 00                	push   0x0
  55366f:	50                   	push   eax
  553670:	e8 21 51 11 00       	call   0x668796 ; ["call resolved=0x668796 "]
  553675:	8b bd 10 fb ff ff    	mov    edi,DWORD PTR [ebp-0x4f0]
  55367b:	8d 8d 00 fb ff ff    	lea    ecx,[ebp-0x500]
  553681:	83 c4 0c             	add    esp,0xc
  553684:	8b 07                	mov    eax,DWORD PTR [edi]
  553686:	68 c4 8a 6d 00       	push   0x6d8ac4 ; ["reqId"]
  55368b:	8b 70 4c             	mov    esi,DWORD PTR [eax+0x4c]
  55368e:	e8 4b 00 eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  553693:	8d 8d d4 fb ff ff    	lea    ecx,[ebp-0x42c]
  553699:	51                   	push   ecx
  55369a:	8b c8                	mov    ecx,eax
  55369c:	e8 5c 4f eb ff       	call   0x4085fd ; ["call resolved=0x54c4f0 "]
  5536a1:	8d 85 cc fa ff ff    	lea    eax,[ebp-0x534]
  5536a7:	c6 45 fc 20          	mov    BYTE PTR [ebp-0x4],0x20
  5536ab:	50                   	push   eax
  5536ac:	8d 85 ec fb ff ff    	lea    eax,[ebp-0x414]
  5536b2:	8b cf                	mov    ecx,edi
  5536b4:	50                   	push   eax
  5536b5:	8d 85 d4 fb ff ff    	lea    eax,[ebp-0x42c]
  5536bb:	50                   	push   eax
  5536bc:	68 18 46 79 00       	push   0x794618
  5536c1:	68 10 44 79 00       	push   0x794410
  5536c6:	ff d6                	call   esi
  5536c8:	8d 8d d4 fb ff ff    	lea    ecx,[ebp-0x42c]
  5536ce:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  5536d2:	e8 2c 03 eb ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5536d7:	8b f7                	mov    esi,edi
  5536d9:	8d 8d cc fa ff ff    	lea    ecx,[ebp-0x534]
  5536df:	51                   	push   ecx
  5536e0:	8d 8d ec fb ff ff    	lea    ecx,[ebp-0x414]
  5536e6:	51                   	push   ecx
  5536e7:	8b 06                	mov    eax,DWORD PTR [esi]
  5536e9:	8b ce                	mov    ecx,esi
  5536eb:	ff 50 1c             	call   DWORD PTR [eax+0x1c]
  5536ee:	8d 85 24 fb ff ff    	lea    eax,[ebp-0x4dc]
  5536f4:	89 b5 24 fb ff ff    	mov    DWORD PTR [ebp-0x4dc],esi
  5536fa:	50                   	push   eax
  5536fb:	8d 85 20 fb ff ff    	lea    eax,[ebp-0x4e0]
  553701:	c7 85 20 fb ff ff 64 	mov    DWORD PTR [ebp-0x4e0],0x406f64
  55370b:	50                   	push   eax
  55370c:	8d 8d 40 fa ff ff    	lea    ecx,[ebp-0x5c0]
  553712:	e8 cf 38 eb ff       	call   0x406fe6 ; ["call resolved=0x54c220 "]
  553717:	8d 8d 40 fa ff ff    	lea    ecx,[ebp-0x5c0]
  55371d:	c6 45 fc 21          	mov    BYTE PTR [ebp-0x4],0x21
  553721:	e8 b5 25 eb ff       	call   0x405cdb ; ["call resolved=0x554630 "]
  553726:	8d 8d 40 fa ff ff    	lea    ecx,[ebp-0x5c0]
  55372c:	e8 e1 34 eb ff       	call   0x406c12 ; ["call resolved=0x472600 "]
  553731:	8d 8d 00 fb ff ff    	lea    ecx,[ebp-0x500]
  553737:	e8 db 5c eb ff       	call   0x409417 ; ["call resolved=0x46f270 "]
  55373c:	8d 8d bc fb ff ff    	lea    ecx,[ebp-0x444]
  553742:	e8 bc 02 eb ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  553747:	8b bd 1c fb ff ff    	mov    edi,DWORD PTR [ebp-0x4e4]
  55374d:	c7 45 fc ff ff ff ff 	mov    DWORD PTR [ebp-0x4],0xffffffff
  553754:	e9 33 e5 ff ff       	jmp    0x551c8c
  553759:	6a 5c                	push   0x5c
  55375b:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  553760:	e8 01 50 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  553765:	83 c4 08             	add    esp,0x8
  553768:	85 c0                	test   eax,eax
  55376a:	74 12                	je     0x55377e
  55376c:	6a 5c                	push   0x5c
  55376e:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  553773:	e8 ee 4f 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  553778:	83 c4 08             	add    esp,0x8
  55377b:	40                   	inc    eax
  55377c:	eb 05                	jmp    0x553783
  55377e:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  553783:	68 48 89 6d 00       	push   0x6d8948 ; ["BtFarawayDevice::consumeMessageLoop"]
  553788:	68 70 01 00 00       	push   0x170
  55378d:	50                   	push   eax
  55378e:	68 70 43 6d 00       	push   0x6d4370 ; ["[ConntctionModule][%s:%d][%s]:json parse_error\n"]
  553793:	8d 85 24 fb ff ff    	lea    eax,[ebp-0x4dc]
  553799:	c7 85 24 fb ff ff 02 	mov    DWORD PTR [ebp-0x4dc],0x2
  5537a3:	50                   	push   eax
  5537a4:	8d 85 8c fb ff ff    	lea    eax,[ebp-0x474]
  5537aa:	50                   	push   eax
  5537ab:	e8 59 38 eb ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5537b0:	83 c4 18             	add    esp,0x18
  5537b3:	8d 8d 8c fb ff ff    	lea    ecx,[ebp-0x474]
  5537b9:	e8 45 02 eb ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5537be:	b8 c4 37 55 00       	mov    eax,0x5537c4
  5537c3:	c3                   	ret
  5537c4:	a1 30 e4 79 00       	mov    eax,ds:0x79e430
  5537c9:	8b bd 14 fb ff ff    	mov    edi,DWORD PTR [ebp-0x4ec]
  5537cf:	89 85 f8 fa ff ff    	mov    DWORD PTR [ebp-0x508],eax
  5537d5:	8b 85 a0 fa ff ff    	mov    eax,DWORD PTR [ebp-0x560]
  5537db:	8b f0                	mov    esi,eax
  5537dd:	c7 45 fc ff ff ff ff 	mov    DWORD PTR [ebp-0x4],0xffffffff
  5537e4:	89 85 f0 fa ff ff    	mov    DWORD PTR [ebp-0x510],eax
  5537ea:	89 bd 1c fb ff ff    	mov    DWORD PTR [ebp-0x4e4],edi
  5537f0:	89 85 10 fb ff ff    	mov    DWORD PTR [ebp-0x4f0],eax
  5537f6:	89 b5 fc fa ff ff    	mov    DWORD PTR [ebp-0x504],esi
  5537fc:	e9 91 e4 ff ff       	jmp    0x551c92
  553801:	8b b5 10 fb ff ff    	mov    esi,DWORD PTR [ebp-0x4f0]
  553807:	e9 64 e4 ff ff       	jmp    0x551c70
  55380c:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  55380f:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  553816:	59                   	pop    ecx
  553817:	5f                   	pop    edi
  553818:	5e                   	pop    esi
  553819:	5b                   	pop    ebx
  55381a:	8b 4d ec             	mov    ecx,DWORD PTR [ebp-0x14]
  55381d:	33 cd                	xor    ecx,ebp
  55381f:	e8 6b 0c eb ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  553824:	8b e5                	mov    esp,ebp
  553826:	5d                   	pop    ebp
  553827:	c3                   	ret
  553828:	50                   	push   eax
  553829:	e8 04 1f 11 00       	call   0x665732 ; ["call resolved=0x665732 "]
  55382e:	50                   	push   eax
  55382f:	e8 fe 1e 11 00       	call   0x665732 ; ["call resolved=0x665732 "]
  553834:	e8 2a e3 ea ff       	call   0x401b63 ; ["call resolved=0x47f560 "]
  553839:	8d 8d 00 fb ff ff    	lea    ecx,[ebp-0x500]
  55383f:	e8 3e 00 eb ff       	call   0x403882 ; ["call resolved=0x4a6640 "]
  553844:	50                   	push   eax
  553845:	8d 8d 2c fb ff ff    	lea    ecx,[ebp-0x4d4]
  55384b:	e8 d0 ee ea ff       	call   0x402720 ; ["call resolved=0x46a4f0 "]
  553850:	50                   	push   eax
  553851:	8d 85 74 fb ff ff    	lea    eax,[ebp-0x48c]
  553857:	c7 45 fc 09 00 00 00 	mov    DWORD PTR [ebp-0x4],0x9
  55385e:	68 a8 5a 6c 00       	push   0x6c5aa8 ; ["cannot use operator[] with a string argument with "]
  553863:	50                   	push   eax
  553864:	e8 bb 35 eb ff       	call   0x406e24 ; ["call resolved=0x43ede0 "]
  553869:	83 c4 0c             	add    esp,0xc
  55386c:	50                   	push   eax
  55386d:	8d 85 e8 f9 ff ff    	lea    eax,[ebp-0x618]
  553873:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  553877:	68 31 01 00 00       	push   0x131
  55387c:	50                   	push   eax
  55387d:	e8 fc 08 eb ff       	call   0x40417e ; ["call resolved=0x487020 "]
  553882:	83 c4 0c             	add    esp,0xc
  553885:	8d 85 e8 f9 ff ff    	lea    eax,[ebp-0x618]
  55388b:	68 10 e2 72 00       	push   0x72e210
  553890:	50                   	push   eax
  553891:	e8 e2 4e 11 00       	call   0x668778 ; ["call resolved=0x668778 "]
  553896:	8b c8                	mov    ecx,eax
  553898:	e8 e5 ff ea ff       	call   0x403882 ; ["call resolved=0x4a6640 "]
  55389d:	50                   	push   eax
  55389e:	8d 8d 8c fb ff ff    	lea    ecx,[ebp-0x474]
  5538a4:	e8 77 ee ea ff       	call   0x402720 ; ["call resolved=0x46a4f0 "]
  5538a9:	50                   	push   eax
  5538aa:	8d 85 d4 fb ff ff    	lea    eax,[ebp-0x42c]
  5538b0:	c6 45 fc 0c          	mov    BYTE PTR [ebp-0x4],0xc
  5538b4:	68 dc 93 6c 00       	push   0x6c93dc ; ["type must be string, but is "]
  5538b9:	50                   	push   eax
  5538ba:	e8 65 35 eb ff       	call   0x406e24 ; ["call resolved=0x43ede0 "]
  5538bf:	83 c4 0c             	add    esp,0xc
  5538c2:	50                   	push   eax
  5538c3:	8d 85 cc f9 ff ff    	lea    eax,[ebp-0x634]
  5538c9:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  5538cd:	68 2e 01 00 00       	push   0x12e
  5538d2:	50                   	push   eax
  5538d3:	e8 a6 08 eb ff       	call   0x40417e ; ["call resolved=0x487020 "]
  5538d8:	83 c4 0c             	add    esp,0xc
  5538db:	8d 85 cc f9 ff ff    	lea    eax,[ebp-0x634]
  5538e1:	68 10 e2 72 00       	push   0x72e210
  5538e6:	50                   	push   eax
  5538e7:	e8 8c 4e 11 00       	call   0x668778 ; ["call resolved=0x668778 "]
  5538ec:	6a 01                	push   0x1
  5538ee:	e8 45 1e 11 00       	call   0x665738 ; ["call resolved=0x665738 "]
  5538f3:	50                   	push   eax
  5538f4:	e8 39 1e 11 00       	call   0x665732 ; ["call resolved=0x665732 "]
  5538f9:	6a 06                	push   0x6
  5538fb:	c7 85 b8 fa ff ff 00 	mov    DWORD PTR [ebp-0x548],0x0
  553905:	e8 2e 1e 11 00       	call   0x665738 ; ["call resolved=0x665738 "]
  55390a:	8b ce                	mov    ecx,esi
  55390c:	e8 71 ff ea ff       	call   0x403882 ; ["call resolved=0x4a6640 "]
  553911:	50                   	push   eax
  553912:	8d 8d 44 fb ff ff    	lea    ecx,[ebp-0x4bc]
  553918:	e8 03 ee ea ff       	call   0x402720 ; ["call resolved=0x46a4f0 "]
  55391d:	50                   	push   eax
  55391e:	8d 85 5c fb ff ff    	lea    eax,[ebp-0x4a4]
  553924:	c6 45 fc 15          	mov    BYTE PTR [ebp-0x4],0x15
  553928:	68 fc 4d 6c 00       	push   0x6c4dfc ; ["cannot use operator[] with a numeric argument with "]
  55392d:	50                   	push   eax
  55392e:	e8 f1 34 eb ff       	call   0x406e24 ; ["call resolved=0x43ede0 "]
  553933:	83 c4 0c             	add    esp,0xc
  553936:	50                   	push   eax
  553937:	8d 85 b0 f9 ff ff    	lea    eax,[ebp-0x650]
  55393d:	c6 45 fc 16          	mov    BYTE PTR [ebp-0x4],0x16
  553941:	68 31 01 00 00       	push   0x131
  553946:	50                   	push   eax
  553947:	e8 32 08 eb ff       	call   0x40417e ; ["call resolved=0x487020 "]
  55394c:	83 c4 0c             	add    esp,0xc
  55394f:	8d 85 b0 f9 ff ff    	lea    eax,[ebp-0x650]
  553955:	68 10 e2 72 00       	push   0x72e210
  55395a:	50                   	push   eax
  55395b:	e8 18 4e 11 00       	call   0x668778 ; ["call resolved=0x668778 "]
