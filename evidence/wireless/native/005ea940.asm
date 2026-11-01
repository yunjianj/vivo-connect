; ConnectFlow::btBuildSendData; image base 0x400000; static annotation only
  5ea940:	55                   	push   ebp
  5ea941:	8d ac 24 3c ff ff ff 	lea    ebp,[esp-0xc4]
  5ea948:	81 ec c4 00 00 00    	sub    esp,0xc4
  5ea94e:	6a ff                	push   0xffffffff
  5ea950:	68 4d 7c 69 00       	push   0x697c4d
  5ea955:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  5ea95b:	50                   	push   eax
  5ea95c:	83 ec 3c             	sub    esp,0x3c
  5ea95f:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5ea964:	33 c5                	xor    eax,ebp
  5ea966:	89 85 c0 00 00 00    	mov    DWORD PTR [ebp+0xc0],eax
  5ea96c:	53                   	push   ebx
  5ea96d:	56                   	push   esi
  5ea96e:	57                   	push   edi
  5ea96f:	50                   	push   eax
  5ea970:	8d 45 f4             	lea    eax,[ebp-0xc]
  5ea973:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  5ea979:	89 4d dc             	mov    DWORD PTR [ebp-0x24],ecx
  5ea97c:	8b 85 d4 00 00 00    	mov    eax,DWORD PTR [ebp+0xd4]
  5ea982:	b9 3f a3 7a 00       	mov    ecx,0x7aa33f
  5ea987:	8b 9d cc 00 00 00    	mov    ebx,DWORD PTR [ebp+0xcc]
  5ea98d:	8b bd d0 00 00 00    	mov    edi,DWORD PTR [ebp+0xd0]
  5ea993:	89 45 d8             	mov    DWORD PTR [ebp-0x28],eax
  5ea996:	e8 53 e1 e1 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5ea99b:	c7 45 00 00 00 00 00 	mov    DWORD PTR [ebp+0x0],0x0
  5ea9a2:	c7 45 14 0f 00 00 00 	mov    DWORD PTR [ebp+0x14],0xf
  5ea9a9:	c7 45 10 00 00 00 00 	mov    DWORD PTR [ebp+0x10],0x0
  5ea9b0:	c6 45 00 00          	mov    BYTE PTR [ebp+0x0],0x0
  5ea9b4:	6a 00                	push   0x0
  5ea9b6:	8d 4d c8             	lea    ecx,[ebp-0x38]
  5ea9b9:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  5ea9c0:	e8 fd 9e e1 ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  5ea9c5:	83 ec 10             	sub    esp,0x10
  5ea9c8:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  5ea9cc:	8b f4                	mov    esi,esp
  5ea9ce:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  5ea9d1:	0f 57 c0             	xorps  xmm0,xmm0
  5ea9d4:	6a 18                	push   0x18
  5ea9d6:	66 0f d6 46 08       	movq   QWORD PTR [esi+0x8],xmm0
  5ea9db:	c6 06 03             	mov    BYTE PTR [esi],0x3
  5ea9de:	e8 d3 87 e1 ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  5ea9e3:	83 c4 04             	add    esp,0x4
  5ea9e6:	c7 00 00 00 00 00    	mov    DWORD PTR [eax],0x0
  5ea9ec:	c7 40 14 0f 00 00 00 	mov    DWORD PTR [eax+0x14],0xf
  5ea9f3:	c7 40 10 01 00 00 00 	mov    DWORD PTR [eax+0x10],0x1
  5ea9fa:	8a 0d 7c 12 6c 00    	mov    cl,BYTE PTR ds:0x6c127c
  5eaa00:	88 08                	mov    BYTE PTR [eax],cl
  5eaa02:	c6 40 01 00          	mov    BYTE PTR [eax+0x1],0x0
  5eaa06:	89 46 08             	mov    DWORD PTR [esi+0x8],eax
  5eaa09:	68 88 ac 6c 00       	push   0x6cac88 ; ["version"]
  5eaa0e:	8d 4d c8             	lea    ecx,[ebp-0x38]
  5eaa11:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  5eaa15:	e8 c4 8c e1 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5eaa1a:	8b c8                	mov    ecx,eax
  5eaa1c:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  5eaa20:	e8 60 9a e1 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5eaa25:	ff 15 80 e0 79 00    	call   DWORD PTR ds:0x79e080
  5eaa2b:	52                   	push   edx
  5eaa2c:	50                   	push   eax
  5eaa2d:	8d 85 bd 00 00 00    	lea    eax,[ebp+0xbd]
  5eaa33:	50                   	push   eax
  5eaa34:	e8 b3 6f e1 ff       	call   0x4019ec ; ["call resolved=0x442330 "]
  5eaa39:	8d 8d bd 00 00 00    	lea    ecx,[ebp+0xbd]
  5eaa3f:	c7 85 90 00 00 00 00 	mov    DWORD PTR [ebp+0x90],0x0
  5eaa49:	83 c4 0c             	add    esp,0xc
  5eaa4c:	c7 85 a0 00 00 00 00 	mov    DWORD PTR [ebp+0xa0],0x0
  5eaa56:	c7 85 a4 00 00 00 0f 	mov    DWORD PTR [ebp+0xa4],0xf
  5eaa60:	c6 85 90 00 00 00 00 	mov    BYTE PTR [ebp+0x90],0x0
  5eaa67:	3b c1                	cmp    eax,ecx
  5eaa69:	74 0f                	je     0x5eaa7a
  5eaa6b:	2b c8                	sub    ecx,eax
  5eaa6d:	51                   	push   ecx
  5eaa6e:	50                   	push   eax
  5eaa6f:	8d 8d 90 00 00 00    	lea    ecx,[ebp+0x90]
  5eaa75:	e8 9d 99 e1 ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  5eaa7a:	83 ec 10             	sub    esp,0x10
  5eaa7d:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  5eaa81:	8d 85 90 00 00 00    	lea    eax,[ebp+0x90]
  5eaa87:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  5eaa8a:	8b cc                	mov    ecx,esp
  5eaa8c:	50                   	push   eax
  5eaa8d:	e8 b6 a9 e1 ff       	call   0x405448 ; ["call resolved=0x43de60 "]
  5eaa92:	68 c4 8a 6d 00       	push   0x6d8ac4 ; ["reqId"]
  5eaa97:	8d 4d c8             	lea    ecx,[ebp-0x38]
  5eaa9a:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  5eaa9e:	e8 3b 8c e1 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5eaaa3:	8b c8                	mov    ecx,eax
  5eaaa5:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  5eaaa9:	e8 d7 99 e1 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5eaaae:	8b 95 a4 00 00 00    	mov    edx,DWORD PTR [ebp+0xa4]
  5eaab4:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  5eaab8:	83 fa 10             	cmp    edx,0x10
  5eaabb:	72 2f                	jb     0x5eaaec
  5eaabd:	8b 8d 90 00 00 00    	mov    ecx,DWORD PTR [ebp+0x90]
  5eaac3:	42                   	inc    edx
  5eaac4:	8b c1                	mov    eax,ecx
  5eaac6:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5eaacc:	72 14                	jb     0x5eaae2
  5eaace:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5eaad1:	83 c2 23             	add    edx,0x23
  5eaad4:	2b c1                	sub    eax,ecx
  5eaad6:	83 c0 fc             	add    eax,0xfffffffc
  5eaad9:	83 f8 1f             	cmp    eax,0x1f
  5eaadc:	0f 87 f9 07 00 00    	ja     0x5eb2db
  5eaae2:	52                   	push   edx
  5eaae3:	51                   	push   ecx
  5eaae4:	e8 b1 75 e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5eaae9:	83 c4 08             	add    esp,0x8
  5eaaec:	83 ec 10             	sub    esp,0x10
  5eaaef:	8b cc                	mov    ecx,esp
  5eaaf1:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  5eaaf4:	68 1c 88 79 00       	push   0x79881c
  5eaaf9:	e8 83 bb e1 ff       	call   0x406681 ; ["call resolved=0x43d750 "]
  5eaafe:	68 2c 89 6d 00       	push   0x6d892c ; ["cmd"]
  5eab03:	8d 4d c8             	lea    ecx,[ebp-0x38]
  5eab06:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  5eab0a:	e8 cf 8b e1 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5eab0f:	8b c8                	mov    ecx,eax
  5eab11:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  5eab15:	e8 6b 99 e1 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5eab1a:	6a 00                	push   0x0
  5eab1c:	8d 4d e0             	lea    ecx,[ebp-0x20]
  5eab1f:	e8 9e 9d e1 ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  5eab24:	c7 45 60 00 00 00 00 	mov    DWORD PTR [ebp+0x60],0x0
  5eab2b:	c7 45 74 0f 00 00 00 	mov    DWORD PTR [ebp+0x74],0xf
  5eab32:	c7 45 70 00 00 00 00 	mov    DWORD PTR [ebp+0x70],0x0
  5eab39:	c6 45 60 00          	mov    BYTE PTR [ebp+0x60],0x0
  5eab3d:	8d 45 60             	lea    eax,[ebp+0x60]
  5eab40:	c6 45 fc 08          	mov    BYTE PTR [ebp-0x4],0x8
  5eab44:	50                   	push   eax
  5eab45:	e8 86 c6 e1 ff       	call   0x4071d0 ; ["call resolved=0x4b3650 vivo::Utils::getDeviceId"]
  5eab4a:	83 ec 0c             	sub    esp,0xc
  5eab4d:	8d 45 60             	lea    eax,[ebp+0x60]
  5eab50:	8b cc                	mov    ecx,esp
  5eab52:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  5eab55:	50                   	push   eax
  5eab56:	e8 b5 9f e1 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  5eab5b:	68 54 4d 6c 00       	push   0x6c4d54 ; ["deviceId"]
  5eab60:	8d 4d e0             	lea    ecx,[ebp-0x20]
  5eab63:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  5eab67:	e8 72 8b e1 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5eab6c:	8b c8                	mov    ecx,eax
  5eab6e:	c6 45 fc 08          	mov    BYTE PTR [ebp-0x4],0x8
  5eab72:	e8 0e 99 e1 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5eab77:	8d 45 18             	lea    eax,[ebp+0x18]
  5eab7a:	50                   	push   eax
  5eab7b:	e8 d1 7c e1 ff       	call   0x402851 ; ["call resolved=0x4c6b00 vivo::Utils::ReadComputerNameFromRegistry"]
  5eab80:	83 c4 04             	add    esp,0x4
  5eab83:	83 7d 28 00          	cmp    DWORD PTR [ebp+0x28],0x0
  5eab87:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  5eab8b:	75 4f                	jne    0x5eabdc
  5eab8d:	8d 45 18             	lea    eax,[ebp+0x18]
  5eab90:	50                   	push   eax
  5eab91:	8d 85 90 00 00 00    	lea    eax,[ebp+0x90]
  5eab97:	50                   	push   eax
  5eab98:	e8 e5 b4 e1 ff       	call   0x406082 ; ["call resolved=0x562cc0 "]
  5eab9d:	8b 95 a4 00 00 00    	mov    edx,DWORD PTR [ebp+0xa4]
  5eaba3:	83 c4 08             	add    esp,0x8
  5eaba6:	83 fa 10             	cmp    edx,0x10
  5eaba9:	72 31                	jb     0x5eabdc
  5eabab:	8b 8d 90 00 00 00    	mov    ecx,DWORD PTR [ebp+0x90]
  5eabb1:	42                   	inc    edx
  5eabb2:	8b c1                	mov    eax,ecx
  5eabb4:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5eabba:	72 16                	jb     0x5eabd2
  5eabbc:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5eabbf:	83 c2 23             	add    edx,0x23
  5eabc2:	2b c1                	sub    eax,ecx
  5eabc4:	83 c0 fc             	add    eax,0xfffffffc
  5eabc7:	83 f8 1f             	cmp    eax,0x1f
  5eabca:	76 06                	jbe    0x5eabd2
  5eabcc:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5eabd2:	52                   	push   edx
  5eabd3:	51                   	push   ecx
  5eabd4:	e8 c1 74 e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5eabd9:	83 c4 08             	add    esp,0x8
  5eabdc:	83 ec 10             	sub    esp,0x10
  5eabdf:	8d 45 18             	lea    eax,[ebp+0x18]
  5eabe2:	8b cc                	mov    ecx,esp
  5eabe4:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  5eabe7:	50                   	push   eax
  5eabe8:	e8 23 9f e1 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  5eabed:	68 a4 4b 6c 00       	push   0x6c4ba4 ; ["deviceName"]
  5eabf2:	8d 4d e0             	lea    ecx,[ebp-0x20]
  5eabf5:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  5eabf9:	e8 e0 8a e1 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5eabfe:	8b c8                	mov    ecx,eax
  5eac00:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  5eac04:	e8 7c 98 e1 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5eac09:	83 ec 10             	sub    esp,0x10
  5eac0c:	8b f4                	mov    esi,esp
  5eac0e:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  5eac11:	e8 1e cb e1 ff       	call   0x407734 ; ["call resolved=0x492af0 "]
  5eac16:	50                   	push   eax
  5eac17:	8b ce                	mov    ecx,esi
  5eac19:	e8 f2 9e e1 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  5eac1e:	68 4c 7c 6d 00       	push   0x6d7c4c ; ["accountName"]
  5eac23:	8d 4d e0             	lea    ecx,[ebp-0x20]
  5eac26:	c6 45 fc 0c          	mov    BYTE PTR [ebp-0x4],0xc
  5eac2a:	e8 af 8a e1 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5eac2f:	8b c8                	mov    ecx,eax
  5eac31:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  5eac35:	e8 4b 98 e1 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5eac3a:	83 ec 10             	sub    esp,0x10
  5eac3d:	8b f4                	mov    esi,esp
  5eac3f:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  5eac42:	e8 ed ca e1 ff       	call   0x407734 ; ["call resolved=0x492af0 "]
  5eac47:	83 c0 18             	add    eax,0x18
  5eac4a:	8b ce                	mov    ecx,esi
  5eac4c:	50                   	push   eax
  5eac4d:	e8 be 9e e1 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  5eac52:	68 6c 4d 6c 00       	push   0x6c4d6c ; ["openId"]
  5eac57:	8d 4d e0             	lea    ecx,[ebp-0x20]
  5eac5a:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  5eac5e:	e8 7b 8a e1 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5eac63:	8b c8                	mov    ecx,eax
  5eac65:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  5eac69:	e8 17 98 e1 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5eac6e:	83 ec 10             	sub    esp,0x10
  5eac71:	0f 57 c0             	xorps  xmm0,xmm0
  5eac74:	8b f4                	mov    esi,esp
  5eac76:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  5eac79:	6a 18                	push   0x18
  5eac7b:	66 0f d6 46 08       	movq   QWORD PTR [esi+0x8],xmm0
  5eac80:	c6 06 03             	mov    BYTE PTR [esi],0x3
  5eac83:	e8 2e 85 e1 ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  5eac88:	83 c4 04             	add    esp,0x4
  5eac8b:	c7 00 00 00 00 00    	mov    DWORD PTR [eax],0x0
  5eac91:	c7 40 14 0f 00 00 00 	mov    DWORD PTR [eax+0x14],0xf
  5eac98:	c7 40 10 02 00 00 00 	mov    DWORD PTR [eax+0x10],0x2
  5eac9f:	66 8b 0d 5c 7c 6d 00 	mov    cx,WORD PTR ds:0x6d7c5c ; ["pc"]
  5eaca6:	66 89 08             	mov    WORD PTR [eax],cx
  5eaca9:	8b ce                	mov    ecx,esi
  5eacab:	c6 40 02 00          	mov    BYTE PTR [eax+0x2],0x0
  5eacaf:	89 46 08             	mov    DWORD PTR [esi+0x8],eax
  5eacb2:	e8 27 f3 e1 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5eacb7:	8b ce                	mov    ecx,esi
  5eacb9:	e8 20 f3 e1 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5eacbe:	68 b0 4d 6c 00       	push   0x6c4db0 ; ["deviceType"]
  5eacc3:	8d 4d e0             	lea    ecx,[ebp-0x20]
  5eacc6:	c6 45 fc 0f          	mov    BYTE PTR [ebp-0x4],0xf
  5eacca:	e8 0f 8a e1 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5eaccf:	8b c8                	mov    ecx,eax
  5eacd1:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  5eacd5:	e8 ab 97 e1 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5eacda:	83 ec 10             	sub    esp,0x10
  5eacdd:	8b cc                	mov    ecx,esp
  5eacdf:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  5eace2:	68 7c 12 6c 00       	push   0x6c127c
  5eace7:	e8 92 cb e1 ff       	call   0x40787e ; ["call resolved=0x5e8b00 "]
  5eacec:	c6 45 fc 10          	mov    BYTE PTR [ebp-0x4],0x10
  5eacf0:	68 54 1c 6d 00       	push   0x6d1c54 ; ["connect_type"]
  5eacf5:	8d 4d e0             	lea    ecx,[ebp-0x20]
  5eacf8:	e8 e1 89 e1 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5eacfd:	8b c8                	mov    ecx,eax
  5eacff:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  5ead03:	e8 7d 97 e1 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5ead08:	e8 97 9b e1 ff       	call   0x4048a4 ; ["call resolved=0x4d7070 "]
  5ead0d:	05 b0 00 00 00       	add    eax,0xb0
  5ead12:	8d 8d 90 00 00 00    	lea    ecx,[ebp+0x90]
  5ead18:	50                   	push   eax
  5ead19:	e8 6d af e1 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  5ead1e:	83 ec 10             	sub    esp,0x10
  5ead21:	c6 45 fc 11          	mov    BYTE PTR [ebp-0x4],0x11
  5ead25:	8d 85 90 00 00 00    	lea    eax,[ebp+0x90]
  5ead2b:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  5ead2e:	8b cc                	mov    ecx,esp
  5ead30:	50                   	push   eax
  5ead31:	e8 12 a7 e1 ff       	call   0x405448 ; ["call resolved=0x43de60 "]
  5ead36:	68 d0 4d 6c 00       	push   0x6c4dd0 ; ["ssid"]
  5ead3b:	8d 4d e0             	lea    ecx,[ebp-0x20]
  5ead3e:	c6 45 fc 12          	mov    BYTE PTR [ebp-0x4],0x12
  5ead42:	e8 97 89 e1 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5ead47:	8b c8                	mov    ecx,eax
  5ead49:	c6 45 fc 11          	mov    BYTE PTR [ebp-0x4],0x11
  5ead4d:	e8 33 97 e1 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5ead52:	8d 8d 90 00 00 00    	lea    ecx,[ebp+0x90]
  5ead58:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  5ead5c:	e8 a2 8c e1 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5ead61:	e8 3e 9b e1 ff       	call   0x4048a4 ; ["call resolved=0x4d7070 "]
  5ead66:	05 c8 00 00 00       	add    eax,0xc8
  5ead6b:	8d 8d 90 00 00 00    	lea    ecx,[ebp+0x90]
  5ead71:	50                   	push   eax
  5ead72:	e8 14 af e1 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  5ead77:	83 ec 10             	sub    esp,0x10
  5ead7a:	c6 45 fc 13          	mov    BYTE PTR [ebp-0x4],0x13
  5ead7e:	8d 85 90 00 00 00    	lea    eax,[ebp+0x90]
  5ead84:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  5ead87:	8b cc                	mov    ecx,esp
  5ead89:	50                   	push   eax
  5ead8a:	e8 b9 a6 e1 ff       	call   0x405448 ; ["call resolved=0x43de60 "]
  5ead8f:	68 94 20 6e 00       	push   0x6e2094 ; ["password"]
  5ead94:	8d 4d e0             	lea    ecx,[ebp-0x20]
  5ead97:	c6 45 fc 14          	mov    BYTE PTR [ebp-0x4],0x14
  5ead9b:	e8 3e 89 e1 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5eada0:	8b c8                	mov    ecx,eax
  5eada2:	c6 45 fc 13          	mov    BYTE PTR [ebp-0x4],0x13
  5eada6:	e8 da 96 e1 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5eadab:	8d 8d 90 00 00 00    	lea    ecx,[ebp+0x90]
  5eadb1:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  5eadb5:	e8 49 8c e1 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5eadba:	8d 85 90 00 00 00    	lea    eax,[ebp+0x90]
  5eadc0:	6a 01                	push   0x1
  5eadc2:	50                   	push   eax
  5eadc3:	e8 17 97 e1 ff       	call   0x4044df ; ["call resolved=0x4d7490 vivo::Utils::getWiFiDirect"]
  5eadc8:	83 ec 08             	sub    esp,0x8
  5eadcb:	c6 45 fc 15          	mov    BYTE PTR [ebp-0x4],0x15
  5eadcf:	8b cc                	mov    ecx,esp
  5eadd1:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  5eadd4:	50                   	push   eax
  5eadd5:	e8 6e a6 e1 ff       	call   0x405448 ; ["call resolved=0x43de60 "]
  5eadda:	68 94 37 6f 00       	push   0x6f3794 ; ["deviceAddress"]
  5eaddf:	8d 4d e0             	lea    ecx,[ebp-0x20]
  5eade2:	c6 45 fc 16          	mov    BYTE PTR [ebp-0x4],0x16
  5eade6:	e8 f3 88 e1 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5eadeb:	8b c8                	mov    ecx,eax
  5eaded:	c6 45 fc 15          	mov    BYTE PTR [ebp-0x4],0x15
  5eadf1:	e8 8f 96 e1 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5eadf6:	8d 8d 90 00 00 00    	lea    ecx,[ebp+0x90]
  5eadfc:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  5eae00:	e8 fe 8b e1 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5eae05:	83 ec 10             	sub    esp,0x10
  5eae08:	8b cc                	mov    ecx,esp
  5eae0a:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  5eae0d:	57                   	push   edi
  5eae0e:	e8 6e b8 e1 ff       	call   0x406681 ; ["call resolved=0x43d750 "]
  5eae13:	68 b4 34 6f 00       	push   0x6f34b4 ; ["isAutoConnect"]
  5eae18:	8d 4d e0             	lea    ecx,[ebp-0x20]
  5eae1b:	c6 45 fc 17          	mov    BYTE PTR [ebp-0x4],0x17
  5eae1f:	e8 ba 88 e1 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5eae24:	8b c8                	mov    ecx,eax
  5eae26:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  5eae2a:	e8 56 96 e1 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5eae2f:	e8 06 7d e1 ff       	call   0x402b3a ; ["call resolved=0x5ef010 "]
  5eae34:	83 ec 10             	sub    esp,0x10
  5eae37:	99                   	cdq
  5eae38:	8b f4                	mov    esi,esp
  5eae3a:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  5eae3d:	8b ce                	mov    ecx,esi
  5eae3f:	c6 06 05             	mov    BYTE PTR [esi],0x5
  5eae42:	89 46 08             	mov    DWORD PTR [esi+0x8],eax
  5eae45:	89 56 0c             	mov    DWORD PTR [esi+0xc],edx
  5eae48:	e8 91 f1 e1 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5eae4d:	8b ce                	mov    ecx,esi
  5eae4f:	e8 8a f1 e1 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5eae54:	68 e8 34 6f 00       	push   0x6f34e8 ; ["pcPcsuiteVersion"]
  5eae59:	8d 4d e0             	lea    ecx,[ebp-0x20]
  5eae5c:	c6 45 fc 18          	mov    BYTE PTR [ebp-0x4],0x18
  5eae60:	e8 79 88 e1 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5eae65:	8b c8                	mov    ecx,eax
  5eae67:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  5eae6b:	e8 15 96 e1 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5eae70:	6a 00                	push   0x0
  5eae72:	8d 8d ac 00 00 00    	lea    ecx,[ebp+0xac]
  5eae78:	e8 45 9a e1 ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  5eae7d:	83 7f 14 10          	cmp    DWORD PTR [edi+0x14],0x10
  5eae81:	8b c7                	mov    eax,edi
  5eae83:	c6 45 fc 19          	mov    BYTE PTR [ebp-0x4],0x19
  5eae87:	72 02                	jb     0x5eae8b
  5eae89:	8b 07                	mov    eax,DWORD PTR [edi]
  5eae8b:	83 7f 10 01          	cmp    DWORD PTR [edi+0x10],0x1
  5eae8f:	75 56                	jne    0x5eaee7
  5eae91:	6a 01                	push   0x1
  5eae93:	68 58 26 6f 00       	push   0x6f2658
  5eae98:	50                   	push   eax
  5eae99:	e8 1f 9a e1 ff       	call   0x4048bd ; ["call resolved=0x482fc0 "]
  5eae9e:	83 c4 0c             	add    esp,0xc
  5eaea1:	85 c0                	test   eax,eax
  5eaea3:	75 42                	jne    0x5eaee7
  5eaea5:	83 ec 10             	sub    esp,0x10
  5eaea8:	8b f4                	mov    esi,esp
  5eaeaa:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  5eaead:	8b ce                	mov    ecx,esi
  5eaeaf:	c6 06 05             	mov    BYTE PTR [esi],0x5
  5eaeb2:	c7 46 08 03 00 00 00 	mov    DWORD PTR [esi+0x8],0x3
  5eaeb9:	89 46 0c             	mov    DWORD PTR [esi+0xc],eax
  5eaebc:	e8 1d f1 e1 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5eaec1:	8b ce                	mov    ecx,esi
  5eaec3:	e8 16 f1 e1 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5eaec8:	68 bc 66 6c 00       	push   0x6c66bc ; ["connectType"]
  5eaecd:	8d 8d ac 00 00 00    	lea    ecx,[ebp+0xac]
  5eaed3:	c6 45 fc 1a          	mov    BYTE PTR [ebp-0x4],0x1a
  5eaed7:	e8 02 88 e1 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5eaedc:	8b c8                	mov    ecx,eax
  5eaede:	c6 45 fc 19          	mov    BYTE PTR [ebp-0x4],0x19
  5eaee2:	e8 9e 95 e1 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5eaee7:	8b b5 d8 00 00 00    	mov    esi,DWORD PTR [ebp+0xd8]
  5eaeed:	80 3e 00             	cmp    BYTE PTR [esi],0x0
  5eaef0:	74 31                	je     0x5eaf23
  5eaef2:	83 ec 10             	sub    esp,0x10
  5eaef5:	8b cc                	mov    ecx,esp
  5eaef7:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  5eaefa:	68 58 19 6c 00       	push   0x6c1958 ; ["pcsuiteTransfer"]
  5eaeff:	e8 59 8b e1 ff       	call   0x403a5d ; ["call resolved=0x59e4b0 "]
  5eaf04:	68 fc 34 6f 00       	push   0x6f34fc ; ["businessName"]
  5eaf09:	8d 8d ac 00 00 00    	lea    ecx,[ebp+0xac]
  5eaf0f:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  5eaf13:	e8 c6 87 e1 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5eaf18:	8b c8                	mov    ecx,eax
  5eaf1a:	c6 45 fc 19          	mov    BYTE PTR [ebp-0x4],0x19
  5eaf1e:	e8 62 95 e1 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5eaf23:	6a 00                	push   0x0
  5eaf25:	c7 85 90 00 00 00 00 	mov    DWORD PTR [ebp+0x90],0x0
  5eaf2f:	8d 8d 90 00 00 00    	lea    ecx,[ebp+0x90]
  5eaf35:	68 02 1c 6c 00       	push   0x6c1c02
  5eaf3a:	c7 85 a0 00 00 00 00 	mov    DWORD PTR [ebp+0xa0],0x0
  5eaf44:	c7 85 a4 00 00 00 0f 	mov    DWORD PTR [ebp+0xa4],0xf
  5eaf4e:	c6 85 90 00 00 00 00 	mov    BYTE PTR [ebp+0x90],0x0
  5eaf55:	e8 bd 94 e1 ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  5eaf5a:	6a 00                	push   0x0
  5eaf5c:	c7 45 78 00 00 00 00 	mov    DWORD PTR [ebp+0x78],0x0
  5eaf63:	8d 4d 78             	lea    ecx,[ebp+0x78]
  5eaf66:	68 02 1c 6c 00       	push   0x6c1c02
  5eaf6b:	c6 45 fc 1c          	mov    BYTE PTR [ebp-0x4],0x1c
  5eaf6f:	c7 85 88 00 00 00 00 	mov    DWORD PTR [ebp+0x88],0x0
  5eaf79:	c7 85 8c 00 00 00 0f 	mov    DWORD PTR [ebp+0x8c],0xf
  5eaf83:	c6 45 78 00          	mov    BYTE PTR [ebp+0x78],0x0
  5eaf87:	e8 8b 94 e1 ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  5eaf8c:	8b 4d dc             	mov    ecx,DWORD PTR [ebp-0x24]
  5eaf8f:	8d 45 78             	lea    eax,[ebp+0x78]
  5eaf92:	50                   	push   eax
  5eaf93:	8d 85 90 00 00 00    	lea    eax,[ebp+0x90]
  5eaf99:	c6 45 fc 1d          	mov    BYTE PTR [ebp-0x4],0x1d
  5eaf9d:	50                   	push   eax
  5eaf9e:	ff 75 d8             	push   DWORD PTR [ebp-0x28]
  5eafa1:	e8 f1 a0 e1 ff       	call   0x405097 ; ["call resolved=0x5eb670 ConnectFlow::btDataEncryption"]
  5eafa6:	83 ec 10             	sub    esp,0x10
  5eafa9:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  5eafac:	8b cc                	mov    ecx,esp
  5eafae:	84 c0                	test   al,al
  5eafb0:	74 5d                	je     0x5eb00f
  5eafb2:	8d 85 90 00 00 00    	lea    eax,[ebp+0x90]
  5eafb8:	50                   	push   eax
  5eafb9:	e8 52 9b e1 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  5eafbe:	68 c4 34 6f 00       	push   0x6f34c4 ; ["seed"]
  5eafc3:	8d 8d ac 00 00 00    	lea    ecx,[ebp+0xac]
  5eafc9:	c6 45 fc 1e          	mov    BYTE PTR [ebp-0x4],0x1e
  5eafcd:	e8 0c 87 e1 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5eafd2:	8b c8                	mov    ecx,eax
  5eafd4:	c6 45 fc 1d          	mov    BYTE PTR [ebp-0x4],0x1d
  5eafd8:	e8 a8 94 e1 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5eafdd:	83 ec 10             	sub    esp,0x10
  5eafe0:	8d 45 78             	lea    eax,[ebp+0x78]
  5eafe3:	8b cc                	mov    ecx,esp
  5eafe5:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  5eafe8:	50                   	push   eax
  5eafe9:	e8 22 9b e1 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  5eafee:	68 cc 34 6f 00       	push   0x6f34cc ; ["sign"]
  5eaff3:	8d 8d ac 00 00 00    	lea    ecx,[ebp+0xac]
  5eaff9:	c6 45 fc 1f          	mov    BYTE PTR [ebp-0x4],0x1f
  5eaffd:	e8 dc 86 e1 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5eb002:	8b c8                	mov    ecx,eax
  5eb004:	c6 45 fc 1d          	mov    BYTE PTR [ebp-0x4],0x1d
  5eb008:	e8 78 94 e1 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5eb00d:	eb 3a                	jmp    0x5eb049
  5eb00f:	ff 75 d8             	push   DWORD PTR [ebp-0x28]
  5eb012:	e8 6a b6 e1 ff       	call   0x406681 ; ["call resolved=0x43d750 "]
  5eb017:	68 dc 4d 6c 00       	push   0x6c4ddc ; ["token"]
  5eb01c:	8d 4d e0             	lea    ecx,[ebp-0x20]
  5eb01f:	c6 45 fc 20          	mov    BYTE PTR [ebp-0x4],0x20
  5eb023:	e8 b6 86 e1 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5eb028:	8b c8                	mov    ecx,eax
  5eb02a:	c6 45 fc 1d          	mov    BYTE PTR [ebp-0x4],0x1d
  5eb02e:	e8 52 94 e1 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5eb033:	68 58 26 6f 00       	push   0x6f2658
  5eb038:	57                   	push   edi
  5eb039:	e8 5d a6 e1 ff       	call   0x40569b ; ["call resolved=0x4ccb70 "]
  5eb03e:	83 c4 08             	add    esp,0x8
  5eb041:	84 c0                	test   al,al
  5eb043:	75 04                	jne    0x5eb049
  5eb045:	38 06                	cmp    BYTE PTR [esi],al
  5eb047:	74 51                	je     0x5eb09a
  5eb049:	6a 00                	push   0x0
  5eb04b:	6a 00                	push   0x0
  5eb04d:	6a 20                	push   0x20
  5eb04f:	6a ff                	push   0xffffffff
  5eb051:	8d 45 48             	lea    eax,[ebp+0x48]
  5eb054:	50                   	push   eax
  5eb055:	8d 8d ac 00 00 00    	lea    ecx,[ebp+0xac]
  5eb05b:	e8 be d7 e1 ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  5eb060:	83 ec 10             	sub    esp,0x10
  5eb063:	c6 45 fc 21          	mov    BYTE PTR [ebp-0x4],0x21
  5eb067:	8b cc                	mov    ecx,esp
  5eb069:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  5eb06c:	50                   	push   eax
  5eb06d:	e8 d6 a3 e1 ff       	call   0x405448 ; ["call resolved=0x43de60 "]
  5eb072:	68 e4 4d 6c 00       	push   0x6c4de4 ; ["extra_info"]
  5eb077:	8d 4d e0             	lea    ecx,[ebp-0x20]
  5eb07a:	c6 45 fc 22          	mov    BYTE PTR [ebp-0x4],0x22
  5eb07e:	e8 5b 86 e1 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5eb083:	8b c8                	mov    ecx,eax
  5eb085:	c6 45 fc 21          	mov    BYTE PTR [ebp-0x4],0x21
  5eb089:	e8 f7 93 e1 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5eb08e:	8d 4d 48             	lea    ecx,[ebp+0x48]
  5eb091:	c6 45 fc 1d          	mov    BYTE PTR [ebp-0x4],0x1d
  5eb095:	e8 69 89 e1 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5eb09a:	83 ec 10             	sub    esp,0x10
  5eb09d:	8d 45 e0             	lea    eax,[ebp-0x20]
  5eb0a0:	8b cc                	mov    ecx,esp
  5eb0a2:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  5eb0a5:	50                   	push   eax
  5eb0a6:	e8 60 72 e1 ff       	call   0x40230b ; ["call resolved=0x469d20 "]
  5eb0ab:	68 30 89 6d 00       	push   0x6d8930 ; ["param"]
  5eb0b0:	8d 4d c8             	lea    ecx,[ebp-0x38]
  5eb0b3:	c6 45 fc 23          	mov    BYTE PTR [ebp-0x4],0x23
  5eb0b7:	e8 22 86 e1 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5eb0bc:	8b c8                	mov    ecx,eax
  5eb0be:	c6 45 fc 1d          	mov    BYTE PTR [ebp-0x4],0x1d
  5eb0c2:	e8 be 93 e1 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5eb0c7:	6a 00                	push   0x0
  5eb0c9:	6a 00                	push   0x0
  5eb0cb:	6a 20                	push   0x20
  5eb0cd:	6a ff                	push   0xffffffff
  5eb0cf:	8d 45 30             	lea    eax,[ebp+0x30]
  5eb0d2:	50                   	push   eax
  5eb0d3:	8d 4d c8             	lea    ecx,[ebp-0x38]
  5eb0d6:	e8 43 d7 e1 ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  5eb0db:	8b f0                	mov    esi,eax
  5eb0dd:	83 7e 14 10          	cmp    DWORD PTR [esi+0x14],0x10
  5eb0e1:	c6 45 fc 24          	mov    BYTE PTR [ebp-0x4],0x24
  5eb0e5:	72 02                	jb     0x5eb0e9
  5eb0e7:	8b 36                	mov    esi,DWORD PTR [esi]
  5eb0e9:	6a 5c                	push   0x5c
  5eb0eb:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5eb0f0:	e8 71 d6 07 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5eb0f5:	83 c4 08             	add    esp,0x8
  5eb0f8:	85 c0                	test   eax,eax
  5eb0fa:	74 12                	je     0x5eb10e
  5eb0fc:	6a 5c                	push   0x5c
  5eb0fe:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5eb103:	e8 5e d6 07 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5eb108:	83 c4 08             	add    esp,0x8
  5eb10b:	40                   	inc    eax
  5eb10c:	eb 05                	jmp    0x5eb113
  5eb10e:	b8 80 26 6f 00       	mov    eax,0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5eb113:	56                   	push   esi
  5eb114:	68 a4 37 6f 00       	push   0x6f37a4 ; ["ConnectFlow::btBuildSendData"]
  5eb119:	68 3a 03 00 00       	push   0x33a
  5eb11e:	50                   	push   eax
  5eb11f:	68 c8 37 6f 00       	push   0x6f37c8 ; ["[ConntctionModule][%s:%d][%s]: [INTERACTION][CONNSERVER_TO_MOBILEPHONE] ConnectFlow bt send connect data: %s\n"]
  5eb124:	8d 45 dc             	lea    eax,[ebp-0x24]
  5eb127:	c7 45 dc 02 00 00 00 	mov    DWORD PTR [ebp-0x24],0x2
  5eb12e:	50                   	push   eax
  5eb12f:	8d 45 48             	lea    eax,[ebp+0x48]
  5eb132:	50                   	push   eax
  5eb133:	e8 d1 be e1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5eb138:	83 c4 1c             	add    esp,0x1c
  5eb13b:	8d 4d 48             	lea    ecx,[ebp+0x48]
  5eb13e:	e8 c0 88 e1 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5eb143:	8d 4d 30             	lea    ecx,[ebp+0x30]
  5eb146:	c6 45 fc 1d          	mov    BYTE PTR [ebp-0x4],0x1d
  5eb14a:	e8 b4 88 e1 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5eb14f:	6a 00                	push   0x0
  5eb151:	6a 00                	push   0x0
  5eb153:	6a 20                	push   0x20
  5eb155:	6a ff                	push   0xffffffff
  5eb157:	8d 45 30             	lea    eax,[ebp+0x30]
  5eb15a:	50                   	push   eax
  5eb15b:	8d 4d c8             	lea    ecx,[ebp-0x38]
  5eb15e:	e8 bb d6 e1 ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  5eb163:	8b f0                	mov    esi,eax
  5eb165:	83 7e 14 10          	cmp    DWORD PTR [esi+0x14],0x10
  5eb169:	72 02                	jb     0x5eb16d
  5eb16b:	8b 36                	mov    esi,DWORD PTR [esi]
  5eb16d:	8d 4e 01             	lea    ecx,[esi+0x1]
  5eb170:	8a 06                	mov    al,BYTE PTR [esi]
  5eb172:	46                   	inc    esi
  5eb173:	84 c0                	test   al,al
  5eb175:	75 f9                	jne    0x5eb170
  5eb177:	2b f1                	sub    esi,ecx
  5eb179:	8d 4d 30             	lea    ecx,[ebp+0x30]
  5eb17c:	e8 82 88 e1 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5eb181:	f3 0f 7e 05 a8 68 6c 	movq   xmm0,QWORD PTR ds:0x6c68a8 ; ["PAY_LOAD_1"]
  5eb189:	8d 4e 04             	lea    ecx,[esi+0x4]
  5eb18c:	66 0f d6 03          	movq   QWORD PTR [ebx],xmm0
  5eb190:	66 a1 b0 68 6c 00    	mov    ax,ds:0x6c68b0 ; ["_1"]
  5eb196:	66 89 43 08          	mov    WORD PTR [ebx+0x8],ax
  5eb19a:	8b c1                	mov    eax,ecx
  5eb19c:	c1 f8 18             	sar    eax,0x18
  5eb19f:	88 43 0a             	mov    BYTE PTR [ebx+0xa],al
  5eb1a2:	8b c1                	mov    eax,ecx
  5eb1a4:	c1 f8 10             	sar    eax,0x10
  5eb1a7:	6a 00                	push   0x0
  5eb1a9:	88 43 0b             	mov    BYTE PTR [ebx+0xb],al
  5eb1ac:	8b c1                	mov    eax,ecx
  5eb1ae:	6a 00                	push   0x0
  5eb1b0:	c1 f8 08             	sar    eax,0x8
  5eb1b3:	6a 20                	push   0x20
  5eb1b5:	88 43 0c             	mov    BYTE PTR [ebx+0xc],al
  5eb1b8:	8d 45 48             	lea    eax,[ebp+0x48]
  5eb1bb:	6a ff                	push   0xffffffff
  5eb1bd:	88 4b 0d             	mov    BYTE PTR [ebx+0xd],cl
  5eb1c0:	8d 4d c8             	lea    ecx,[ebp-0x38]
  5eb1c3:	50                   	push   eax
  5eb1c4:	c7 43 0e 23 70 63 63 	mov    DWORD PTR [ebx+0xe],0x63637023
  5eb1cb:	e8 4e d6 e1 ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  5eb1d0:	8b f8                	mov    edi,eax
  5eb1d2:	83 7f 14 10          	cmp    DWORD PTR [edi+0x14],0x10
  5eb1d6:	c6 45 fc 25          	mov    BYTE PTR [ebp-0x4],0x25
  5eb1da:	72 02                	jb     0x5eb1de
  5eb1dc:	8b 3f                	mov    edi,DWORD PTR [edi]
  5eb1de:	8d 4f 01             	lea    ecx,[edi+0x1]
  5eb1e1:	8a 07                	mov    al,BYTE PTR [edi]
  5eb1e3:	47                   	inc    edi
  5eb1e4:	84 c0                	test   al,al
  5eb1e6:	75 f9                	jne    0x5eb1e1
  5eb1e8:	6a 00                	push   0x0
  5eb1ea:	6a 00                	push   0x0
  5eb1ec:	6a 20                	push   0x20
  5eb1ee:	6a ff                	push   0xffffffff
  5eb1f0:	8d 45 30             	lea    eax,[ebp+0x30]
  5eb1f3:	2b f9                	sub    edi,ecx
  5eb1f5:	50                   	push   eax
  5eb1f6:	8d 4d c8             	lea    ecx,[ebp-0x38]
  5eb1f9:	e8 20 d6 e1 ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  5eb1fe:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  5eb202:	72 02                	jb     0x5eb206
  5eb204:	8b 00                	mov    eax,DWORD PTR [eax]
  5eb206:	57                   	push   edi
  5eb207:	50                   	push   eax
  5eb208:	8d 43 12             	lea    eax,[ebx+0x12]
  5eb20b:	50                   	push   eax
  5eb20c:	e8 79 d5 07 00       	call   0x66878a ; ["call resolved=0x66878a "]
  5eb211:	83 c4 0c             	add    esp,0xc
  5eb214:	8d 4d 30             	lea    ecx,[ebp+0x30]
  5eb217:	e8 e7 87 e1 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5eb21c:	8d 4d 48             	lea    ecx,[ebp+0x48]
  5eb21f:	e8 df 87 e1 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5eb224:	8b 95 8c 00 00 00    	mov    edx,DWORD PTR [ebp+0x8c]
  5eb22a:	83 fa 10             	cmp    edx,0x10
  5eb22d:	72 2c                	jb     0x5eb25b
  5eb22f:	8b 4d 78             	mov    ecx,DWORD PTR [ebp+0x78]
  5eb232:	42                   	inc    edx
  5eb233:	8b c1                	mov    eax,ecx
  5eb235:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5eb23b:	72 14                	jb     0x5eb251
  5eb23d:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5eb240:	83 c2 23             	add    edx,0x23
  5eb243:	2b c1                	sub    eax,ecx
  5eb245:	83 c0 fc             	add    eax,0xfffffffc
  5eb248:	83 f8 1f             	cmp    eax,0x1f
  5eb24b:	0f 87 8a 00 00 00    	ja     0x5eb2db
  5eb251:	52                   	push   edx
  5eb252:	51                   	push   ecx
  5eb253:	e8 42 6e e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5eb258:	83 c4 08             	add    esp,0x8
  5eb25b:	8b 95 a4 00 00 00    	mov    edx,DWORD PTR [ebp+0xa4]
  5eb261:	83 fa 10             	cmp    edx,0x10
  5eb264:	72 2b                	jb     0x5eb291
  5eb266:	8b 8d 90 00 00 00    	mov    ecx,DWORD PTR [ebp+0x90]
  5eb26c:	42                   	inc    edx
  5eb26d:	8b c1                	mov    eax,ecx
  5eb26f:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5eb275:	72 10                	jb     0x5eb287
  5eb277:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5eb27a:	83 c2 23             	add    edx,0x23
  5eb27d:	2b c1                	sub    eax,ecx
  5eb27f:	83 c0 fc             	add    eax,0xfffffffc
  5eb282:	83 f8 1f             	cmp    eax,0x1f
  5eb285:	77 54                	ja     0x5eb2db
  5eb287:	52                   	push   edx
  5eb288:	51                   	push   ecx
  5eb289:	e8 0c 6e e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5eb28e:	83 c4 08             	add    esp,0x8
  5eb291:	8d 8d ac 00 00 00    	lea    ecx,[ebp+0xac]
  5eb297:	e8 42 ed e1 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5eb29c:	ff b5 ac 00 00 00    	push   DWORD PTR [ebp+0xac]
  5eb2a2:	8d 8d b4 00 00 00    	lea    ecx,[ebp+0xb4]
  5eb2a8:	e8 a1 e6 e1 ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  5eb2ad:	8d 4d 18             	lea    ecx,[ebp+0x18]
  5eb2b0:	e8 4e 87 e1 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5eb2b5:	8b 55 74             	mov    edx,DWORD PTR [ebp+0x74]
  5eb2b8:	83 fa 10             	cmp    edx,0x10
  5eb2bb:	72 2e                	jb     0x5eb2eb
  5eb2bd:	8b 4d 60             	mov    ecx,DWORD PTR [ebp+0x60]
  5eb2c0:	42                   	inc    edx
  5eb2c1:	8b c1                	mov    eax,ecx
  5eb2c3:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5eb2c9:	72 16                	jb     0x5eb2e1
  5eb2cb:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5eb2ce:	83 c2 23             	add    edx,0x23
  5eb2d1:	2b c1                	sub    eax,ecx
  5eb2d3:	83 c0 fc             	add    eax,0xfffffffc
  5eb2d6:	83 f8 1f             	cmp    eax,0x1f
  5eb2d9:	76 06                	jbe    0x5eb2e1
  5eb2db:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5eb2e1:	52                   	push   edx
  5eb2e2:	51                   	push   ecx
  5eb2e3:	e8 b2 6d e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5eb2e8:	83 c4 08             	add    esp,0x8
  5eb2eb:	8d 4d e0             	lea    ecx,[ebp-0x20]
  5eb2ee:	e8 eb ec e1 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5eb2f3:	ff 75 e0             	push   DWORD PTR [ebp-0x20]
  5eb2f6:	8d 4d e8             	lea    ecx,[ebp-0x18]
  5eb2f9:	e8 50 e6 e1 ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  5eb2fe:	8d 4d c8             	lea    ecx,[ebp-0x38]
  5eb301:	e8 d8 ec e1 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5eb306:	ff 75 c8             	push   DWORD PTR [ebp-0x38]
  5eb309:	8d 4d d0             	lea    ecx,[ebp-0x30]
  5eb30c:	e8 3d e6 e1 ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  5eb311:	8d 46 12             	lea    eax,[esi+0x12]
  5eb314:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  5eb317:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  5eb31e:	59                   	pop    ecx
  5eb31f:	5f                   	pop    edi
  5eb320:	5e                   	pop    esi
  5eb321:	5b                   	pop    ebx
  5eb322:	8b 8d c0 00 00 00    	mov    ecx,DWORD PTR [ebp+0xc0]
  5eb328:	33 cd                	xor    ecx,ebp
  5eb32a:	e8 60 91 e1 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5eb32f:	8d a5 c4 00 00 00    	lea    esp,[ebp+0xc4]
  5eb335:	5d                   	pop    ebp
  5eb336:	c2 10 00             	ret    0x10
