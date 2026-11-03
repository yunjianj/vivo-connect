; BtFarawayDevice::responseDataBuild; image base 0x400000; static annotation only
  558d60:	55                   	push   ebp
  558d61:	8b ec                	mov    ebp,esp
  558d63:	6a ff                	push   0xffffffff
  558d65:	68 58 7f 68 00       	push   0x687f58
  558d6a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  558d70:	50                   	push   eax
  558d71:	83 ec 78             	sub    esp,0x78
  558d74:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  558d79:	33 c5                	xor    eax,ebp
  558d7b:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  558d7e:	53                   	push   ebx
  558d7f:	56                   	push   esi
  558d80:	57                   	push   edi
  558d81:	50                   	push   eax
  558d82:	8d 45 f4             	lea    eax,[ebp-0xc]
  558d85:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  558d8b:	8b 45 14             	mov    eax,DWORD PTR [ebp+0x14]
  558d8e:	b9 74 8b 7a 00       	mov    ecx,0x7a8b74
  558d93:	8b 7d 08             	mov    edi,DWORD PTR [ebp+0x8]
  558d96:	8b 5d 0c             	mov    ebx,DWORD PTR [ebp+0xc]
  558d99:	8b 75 10             	mov    esi,DWORD PTR [ebp+0x10]
  558d9c:	89 45 a0             	mov    DWORD PTR [ebp-0x60],eax
  558d9f:	8b 45 18             	mov    eax,DWORD PTR [ebp+0x18]
  558da2:	89 45 8c             	mov    DWORD PTR [ebp-0x74],eax
  558da5:	e8 44 fd ea ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  558daa:	6a 00                	push   0x0
  558dac:	8d 4d 90             	lea    ecx,[ebp-0x70]
  558daf:	e8 0e bb ea ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  558db4:	83 ec 10             	sub    esp,0x10
  558db7:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  558dbe:	8b cc                	mov    ecx,esp
  558dc0:	89 65 a4             	mov    DWORD PTR [ebp-0x5c],esp
  558dc3:	56                   	push   esi
  558dc4:	e8 b8 d8 ea ff       	call   0x406681 ; ["call resolved=0x43d750 "]
  558dc9:	68 c4 8a 6d 00       	push   0x6d8ac4 ; ["reqId"]
  558dce:	8d 4d 90             	lea    ecx,[ebp-0x70]
  558dd1:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  558dd5:	e8 04 a9 ea ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  558dda:	8b c8                	mov    ecx,eax
  558ddc:	c6 45 fc 00          	mov    BYTE PTR [ebp-0x4],0x0
  558de0:	e8 a0 b6 ea ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  558de5:	83 ec 10             	sub    esp,0x10
  558de8:	8b cc                	mov    ecx,esp
  558dea:	89 65 a4             	mov    DWORD PTR [ebp-0x5c],esp
  558ded:	57                   	push   edi
  558dee:	e8 8e d8 ea ff       	call   0x406681 ; ["call resolved=0x43d750 "]
  558df3:	68 2c 89 6d 00       	push   0x6d892c ; ["cmd"]
  558df8:	8d 4d 90             	lea    ecx,[ebp-0x70]
  558dfb:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  558dff:	e8 da a8 ea ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  558e04:	8b c8                	mov    ecx,eax
  558e06:	c6 45 fc 00          	mov    BYTE PTR [ebp-0x4],0x0
  558e0a:	e8 76 b6 ea ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  558e0f:	83 ec 10             	sub    esp,0x10
  558e12:	8b cc                	mov    ecx,esp
  558e14:	89 65 a4             	mov    DWORD PTR [ebp-0x5c],esp
  558e17:	53                   	push   ebx
  558e18:	e8 64 d8 ea ff       	call   0x406681 ; ["call resolved=0x43d750 "]
  558e1d:	68 7c 7c 6c 00       	push   0x6c7c7c ; ["code"]
  558e22:	8d 4d 90             	lea    ecx,[ebp-0x70]
  558e25:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  558e29:	e8 b0 a8 ea ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  558e2e:	8b c8                	mov    ecx,eax
  558e30:	c6 45 fc 00          	mov    BYTE PTR [ebp-0x4],0x0
  558e34:	e8 4c b6 ea ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  558e39:	6a 00                	push   0x0
  558e3b:	8d 8d 7c ff ff ff    	lea    ecx,[ebp-0x84]
  558e41:	e8 7c ba ea ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  558e46:	c7 45 c0 00 00 00 00 	mov    DWORD PTR [ebp-0x40],0x0
  558e4d:	c7 45 d4 0f 00 00 00 	mov    DWORD PTR [ebp-0x2c],0xf
  558e54:	c7 45 d0 00 00 00 00 	mov    DWORD PTR [ebp-0x30],0x0
  558e5b:	c6 45 c0 00          	mov    BYTE PTR [ebp-0x40],0x0
  558e5f:	8d 45 c0             	lea    eax,[ebp-0x40]
  558e62:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  558e66:	50                   	push   eax
  558e67:	e8 64 e3 ea ff       	call   0x4071d0 ; ["call resolved=0x4b3650 vivo::Utils::getDeviceId"]
  558e6c:	83 ec 0c             	sub    esp,0xc
  558e6f:	8d 45 c0             	lea    eax,[ebp-0x40]
  558e72:	8b cc                	mov    ecx,esp
  558e74:	89 65 a4             	mov    DWORD PTR [ebp-0x5c],esp
  558e77:	50                   	push   eax
  558e78:	e8 93 bc ea ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  558e7d:	68 54 4d 6c 00       	push   0x6c4d54 ; ["deviceId"]
  558e82:	8d 8d 7c ff ff ff    	lea    ecx,[ebp-0x84]
  558e88:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  558e8c:	e8 4d a8 ea ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  558e91:	8b c8                	mov    ecx,eax
  558e93:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  558e97:	e8 e9 b5 ea ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  558e9c:	83 ec 10             	sub    esp,0x10
  558e9f:	8d 85 7c ff ff ff    	lea    eax,[ebp-0x84]
  558ea5:	89 65 a4             	mov    DWORD PTR [ebp-0x5c],esp
  558ea8:	8b cc                	mov    ecx,esp
  558eaa:	50                   	push   eax
  558eab:	e8 5b 94 ea ff       	call   0x40230b ; ["call resolved=0x469d20 "]
  558eb0:	68 b4 66 6c 00       	push   0x6c66b4 ; ["data"]
  558eb5:	8d 4d 90             	lea    ecx,[ebp-0x70]
  558eb8:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  558ebc:	e8 1d a8 ea ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  558ec1:	8b c8                	mov    ecx,eax
  558ec3:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  558ec7:	e8 b9 b5 ea ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  558ecc:	6a 00                	push   0x0
  558ece:	6a 00                	push   0x0
  558ed0:	6a 20                	push   0x20
  558ed2:	6a ff                	push   0xffffffff
  558ed4:	8d 45 d8             	lea    eax,[ebp-0x28]
  558ed7:	50                   	push   eax
  558ed8:	8d 4d 90             	lea    ecx,[ebp-0x70]
  558edb:	e8 3e f9 ea ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  558ee0:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  558ee3:	83 fa 10             	cmp    edx,0x10
  558ee6:	72 2e                	jb     0x558f16
  558ee8:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  558eeb:	42                   	inc    edx
  558eec:	8b c1                	mov    eax,ecx
  558eee:	81 fa 00 10 00 00    	cmp    edx,0x1000
  558ef4:	72 16                	jb     0x558f0c
  558ef6:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  558ef9:	83 c2 23             	add    edx,0x23
  558efc:	2b c1                	sub    eax,ecx
  558efe:	83 c0 fc             	add    eax,0xfffffffc
  558f01:	83 f8 1f             	cmp    eax,0x1f
  558f04:	76 06                	jbe    0x558f0c
  558f06:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  558f0c:	52                   	push   edx
  558f0d:	51                   	push   ecx
  558f0e:	e8 87 91 ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  558f13:	83 c4 08             	add    esp,0x8
  558f16:	6a 00                	push   0x0
  558f18:	6a 00                	push   0x0
  558f1a:	6a 20                	push   0x20
  558f1c:	6a ff                	push   0xffffffff
  558f1e:	8d 45 d8             	lea    eax,[ebp-0x28]
  558f21:	50                   	push   eax
  558f22:	8d 4d 90             	lea    ecx,[ebp-0x70]
  558f25:	e8 f4 f8 ea ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  558f2a:	8b c8                	mov    ecx,eax
  558f2c:	83 79 14 10          	cmp    DWORD PTR [ecx+0x14],0x10
  558f30:	72 02                	jb     0x558f34
  558f32:	8b 09                	mov    ecx,DWORD PTR [ecx]
  558f34:	8d 51 01             	lea    edx,[ecx+0x1]
  558f37:	8a 01                	mov    al,BYTE PTR [ecx]
  558f39:	41                   	inc    ecx
  558f3a:	84 c0                	test   al,al
  558f3c:	75 f9                	jne    0x558f37
  558f3e:	8b 7d 8c             	mov    edi,DWORD PTR [ebp-0x74]
  558f41:	2b ca                	sub    ecx,edx
  558f43:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  558f46:	89 0f                	mov    DWORD PTR [edi],ecx
  558f48:	83 fa 10             	cmp    edx,0x10
  558f4b:	72 30                	jb     0x558f7d
  558f4d:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  558f50:	42                   	inc    edx
  558f51:	8b c1                	mov    eax,ecx
  558f53:	81 fa 00 10 00 00    	cmp    edx,0x1000
  558f59:	72 16                	jb     0x558f71
  558f5b:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  558f5e:	83 c2 23             	add    edx,0x23
  558f61:	2b c1                	sub    eax,ecx
  558f63:	83 c0 fc             	add    eax,0xfffffffc
  558f66:	83 f8 1f             	cmp    eax,0x1f
  558f69:	76 06                	jbe    0x558f71
  558f6b:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  558f71:	52                   	push   edx
  558f72:	51                   	push   ecx
  558f73:	e8 22 91 ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  558f78:	8b 0f                	mov    ecx,DWORD PTR [edi]
  558f7a:	83 c4 08             	add    esp,0x8
  558f7d:	8b 5d a0             	mov    ebx,DWORD PTR [ebp-0x60]
  558f80:	83 c1 04             	add    ecx,0x4
  558f83:	f3 0f 7e 05 a8 68 6c 	movq   xmm0,QWORD PTR ds:0x6c68a8 ; ["PAY_LOAD_1"]
  558f8b:	6a 00                	push   0x0
  558f8d:	6a 00                	push   0x0
  558f8f:	66 0f d6 03          	movq   QWORD PTR [ebx],xmm0
  558f93:	66 a1 b0 68 6c 00    	mov    ax,ds:0x6c68b0 ; ["_1"]
  558f99:	66 89 43 08          	mov    WORD PTR [ebx+0x8],ax
  558f9d:	8b c1                	mov    eax,ecx
  558f9f:	c1 f8 18             	sar    eax,0x18
  558fa2:	88 43 0a             	mov    BYTE PTR [ebx+0xa],al
  558fa5:	8b c1                	mov    eax,ecx
  558fa7:	c1 f8 10             	sar    eax,0x10
  558faa:	88 43 0b             	mov    BYTE PTR [ebx+0xb],al
  558fad:	8b c1                	mov    eax,ecx
  558faf:	c1 f8 08             	sar    eax,0x8
  558fb2:	6a 20                	push   0x20
  558fb4:	88 43 0c             	mov    BYTE PTR [ebx+0xc],al
  558fb7:	8d 45 a8             	lea    eax,[ebp-0x58]
  558fba:	6a ff                	push   0xffffffff
  558fbc:	88 4b 0d             	mov    BYTE PTR [ebx+0xd],cl
  558fbf:	8d 4d 90             	lea    ecx,[ebp-0x70]
  558fc2:	50                   	push   eax
  558fc3:	c7 43 0e 23 70 63 63 	mov    DWORD PTR [ebx+0xe],0x63637023
  558fca:	e8 4f f8 ea ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  558fcf:	8b f0                	mov    esi,eax
  558fd1:	83 7e 14 10          	cmp    DWORD PTR [esi+0x14],0x10
  558fd5:	c6 45 fc 08          	mov    BYTE PTR [ebp-0x4],0x8
  558fd9:	72 02                	jb     0x558fdd
  558fdb:	8b 36                	mov    esi,DWORD PTR [esi]
  558fdd:	8d 4e 01             	lea    ecx,[esi+0x1]
  558fe0:	8a 06                	mov    al,BYTE PTR [esi]
  558fe2:	46                   	inc    esi
  558fe3:	84 c0                	test   al,al
  558fe5:	75 f9                	jne    0x558fe0
  558fe7:	6a 00                	push   0x0
  558fe9:	6a 00                	push   0x0
  558feb:	6a 20                	push   0x20
  558fed:	6a ff                	push   0xffffffff
  558fef:	8d 45 d8             	lea    eax,[ebp-0x28]
  558ff2:	2b f1                	sub    esi,ecx
  558ff4:	50                   	push   eax
  558ff5:	8d 4d 90             	lea    ecx,[ebp-0x70]
  558ff8:	e8 21 f8 ea ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  558ffd:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  559001:	72 02                	jb     0x559005
  559003:	8b 00                	mov    eax,DWORD PTR [eax]
  559005:	56                   	push   esi
  559006:	50                   	push   eax
  559007:	8d 43 12             	lea    eax,[ebx+0x12]
  55900a:	50                   	push   eax
  55900b:	e8 7a f7 10 00       	call   0x66878a ; ["call resolved=0x66878a "]
  559010:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  559013:	83 c4 0c             	add    esp,0xc
  559016:	83 fa 10             	cmp    edx,0x10
  559019:	72 28                	jb     0x559043
  55901b:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  55901e:	42                   	inc    edx
  55901f:	8b c1                	mov    eax,ecx
  559021:	81 fa 00 10 00 00    	cmp    edx,0x1000
  559027:	72 10                	jb     0x559039
  559029:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  55902c:	83 c2 23             	add    edx,0x23
  55902f:	2b c1                	sub    eax,ecx
  559031:	83 c0 fc             	add    eax,0xfffffffc
  559034:	83 f8 1f             	cmp    eax,0x1f
  559037:	77 46                	ja     0x55907f
  559039:	52                   	push   edx
  55903a:	51                   	push   ecx
  55903b:	e8 5a 90 ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  559040:	83 c4 08             	add    esp,0x8
  559043:	8b 55 bc             	mov    edx,DWORD PTR [ebp-0x44]
  559046:	c7 45 e8 00 00 00 00 	mov    DWORD PTR [ebp-0x18],0x0
  55904d:	c7 45 ec 0f 00 00 00 	mov    DWORD PTR [ebp-0x14],0xf
  559054:	c6 45 d8 00          	mov    BYTE PTR [ebp-0x28],0x0
  559058:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  55905c:	83 fa 10             	cmp    edx,0x10
  55905f:	72 2e                	jb     0x55908f
  559061:	8b 4d a8             	mov    ecx,DWORD PTR [ebp-0x58]
  559064:	42                   	inc    edx
  559065:	8b c1                	mov    eax,ecx
  559067:	81 fa 00 10 00 00    	cmp    edx,0x1000
  55906d:	72 16                	jb     0x559085
  55906f:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  559072:	83 c2 23             	add    edx,0x23
  559075:	2b c1                	sub    eax,ecx
  559077:	83 c0 fc             	add    eax,0xfffffffc
  55907a:	83 f8 1f             	cmp    eax,0x1f
  55907d:	76 06                	jbe    0x559085
  55907f:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  559085:	52                   	push   edx
  559086:	51                   	push   ecx
  559087:	e8 0e 90 ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  55908c:	83 c4 08             	add    esp,0x8
  55908f:	83 07 12             	add    DWORD PTR [edi],0x12
  559092:	8d 45 d8             	lea    eax,[ebp-0x28]
  559095:	6a 00                	push   0x0
  559097:	6a 00                	push   0x0
  559099:	6a 20                	push   0x20
  55909b:	6a ff                	push   0xffffffff
  55909d:	50                   	push   eax
  55909e:	8d 4d 90             	lea    ecx,[ebp-0x70]
  5590a1:	e8 78 f7 ea ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  5590a6:	8b f0                	mov    esi,eax
  5590a8:	83 7e 14 10          	cmp    DWORD PTR [esi+0x14],0x10
  5590ac:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  5590b0:	72 02                	jb     0x5590b4
  5590b2:	8b 36                	mov    esi,DWORD PTR [esi]
  5590b4:	6a 5c                	push   0x5c
  5590b6:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5590bb:	e8 a6 f6 10 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5590c0:	83 c4 08             	add    esp,0x8
  5590c3:	85 c0                	test   eax,eax
  5590c5:	74 12                	je     0x5590d9
  5590c7:	6a 5c                	push   0x5c
  5590c9:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5590ce:	e8 93 f6 10 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5590d3:	83 c4 08             	add    esp,0x8
  5590d6:	40                   	inc    eax
  5590d7:	eb 05                	jmp    0x5590de
  5590d9:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5590de:	56                   	push   esi
  5590df:	68 08 8d 6d 00       	push   0x6d8d08 ; ["BtFarawayDevice::responseDataBuild"]
  5590e4:	68 03 02 00 00       	push   0x203
  5590e9:	50                   	push   eax
  5590ea:	68 38 8d 6d 00       	push   0x6d8d38 ; ["[ConntctionModule][%s:%d][%s]: BT preconnect channel send data is: %s\n"]
  5590ef:	8d 45 a0             	lea    eax,[ebp-0x60]
  5590f2:	c7 45 a0 02 00 00 00 	mov    DWORD PTR [ebp-0x60],0x2
  5590f9:	50                   	push   eax
  5590fa:	8d 45 a8             	lea    eax,[ebp-0x58]
  5590fd:	50                   	push   eax
  5590fe:	e8 06 df ea ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  559103:	8b 55 bc             	mov    edx,DWORD PTR [ebp-0x44]
  559106:	83 c4 1c             	add    esp,0x1c
  559109:	83 fa 10             	cmp    edx,0x10
  55910c:	72 28                	jb     0x559136
  55910e:	8b 4d a8             	mov    ecx,DWORD PTR [ebp-0x58]
  559111:	42                   	inc    edx
  559112:	8b c1                	mov    eax,ecx
  559114:	81 fa 00 10 00 00    	cmp    edx,0x1000
  55911a:	72 10                	jb     0x55912c
  55911c:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  55911f:	83 c2 23             	add    edx,0x23
  559122:	2b c1                	sub    eax,ecx
  559124:	83 c0 fc             	add    eax,0xfffffffc
  559127:	83 f8 1f             	cmp    eax,0x1f
  55912a:	77 30                	ja     0x55915c
  55912c:	52                   	push   edx
  55912d:	51                   	push   ecx
  55912e:	e8 67 8f ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  559133:	83 c4 08             	add    esp,0x8
  559136:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  559139:	83 fa 10             	cmp    edx,0x10
  55913c:	72 2e                	jb     0x55916c
  55913e:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  559141:	42                   	inc    edx
  559142:	8b c1                	mov    eax,ecx
  559144:	81 fa 00 10 00 00    	cmp    edx,0x1000
  55914a:	72 16                	jb     0x559162
  55914c:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  55914f:	83 c2 23             	add    edx,0x23
  559152:	2b c1                	sub    eax,ecx
  559154:	83 c0 fc             	add    eax,0xfffffffc
  559157:	83 f8 1f             	cmp    eax,0x1f
  55915a:	76 06                	jbe    0x559162
  55915c:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  559162:	52                   	push   edx
  559163:	51                   	push   ecx
  559164:	e8 31 8f ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  559169:	83 c4 08             	add    esp,0x8
  55916c:	8b 55 d4             	mov    edx,DWORD PTR [ebp-0x2c]
  55916f:	83 fa 10             	cmp    edx,0x10
  559172:	72 2e                	jb     0x5591a2
  559174:	8b 4d c0             	mov    ecx,DWORD PTR [ebp-0x40]
  559177:	42                   	inc    edx
  559178:	8b c1                	mov    eax,ecx
  55917a:	81 fa 00 10 00 00    	cmp    edx,0x1000
  559180:	72 16                	jb     0x559198
  559182:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  559185:	83 c2 23             	add    edx,0x23
  559188:	2b c1                	sub    eax,ecx
  55918a:	83 c0 fc             	add    eax,0xfffffffc
  55918d:	83 f8 1f             	cmp    eax,0x1f
  559190:	76 06                	jbe    0x559198
  559192:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  559198:	52                   	push   edx
  559199:	51                   	push   ecx
  55919a:	e8 fb 8e ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  55919f:	83 c4 08             	add    esp,0x8
  5591a2:	8d 8d 7c ff ff ff    	lea    ecx,[ebp-0x84]
  5591a8:	e8 31 0e eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5591ad:	ff b5 7c ff ff ff    	push   DWORD PTR [ebp-0x84]
  5591b3:	8d 4d 84             	lea    ecx,[ebp-0x7c]
  5591b6:	e8 93 07 eb ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  5591bb:	8d 4d 90             	lea    ecx,[ebp-0x70]
  5591be:	e8 1b 0e eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5591c3:	ff 75 90             	push   DWORD PTR [ebp-0x70]
  5591c6:	8d 4d 98             	lea    ecx,[ebp-0x68]
  5591c9:	e8 80 07 eb ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  5591ce:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  5591d1:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  5591d8:	59                   	pop    ecx
  5591d9:	5f                   	pop    edi
  5591da:	5e                   	pop    esi
  5591db:	5b                   	pop    ebx
  5591dc:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  5591df:	33 cd                	xor    ecx,ebp
  5591e1:	e8 a9 b2 ea ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5591e6:	8b e5                	mov    esp,ebp
  5591e8:	5d                   	pop    ebp
  5591e9:	c2 14 00             	ret    0x14
