; BtFarawayDevice::mobileAskConnectPC; image base 0x400000; static annotation only
  555850:	55                   	push   ebp
  555851:	8d ac 24 6c ff ff ff 	lea    ebp,[esp-0x94]
  555858:	81 ec 94 00 00 00    	sub    esp,0x94
  55585e:	6a ff                	push   0xffffffff
  555860:	68 3a 79 68 00       	push   0x68793a
  555865:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  55586b:	50                   	push   eax
  55586c:	81 ec a0 01 00 00    	sub    esp,0x1a0
  555872:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  555877:	33 c5                	xor    eax,ebp
  555879:	89 85 90 00 00 00    	mov    DWORD PTR [ebp+0x90],eax
  55587f:	53                   	push   ebx
  555880:	56                   	push   esi
  555881:	57                   	push   edi
  555882:	50                   	push   eax
  555883:	8d 45 f4             	lea    eax,[ebp-0xc]
  555886:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  55588c:	8b d9                	mov    ebx,ecx
  55588e:	8b 85 9c 00 00 00    	mov    eax,DWORD PTR [ebp+0x9c]
  555894:	b9 74 8b 7a 00       	mov    ecx,0x7a8b74
  555899:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  55589c:	e8 4d 32 eb ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5558a1:	6a 5c                	push   0x5c
  5558a3:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5558a8:	e8 b9 2e 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5558ad:	83 c4 08             	add    esp,0x8
  5558b0:	85 c0                	test   eax,eax
  5558b2:	74 12                	je     0x5558c6
  5558b4:	6a 5c                	push   0x5c
  5558b6:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5558bb:	e8 a6 2e 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5558c0:	83 c4 08             	add    esp,0x8
  5558c3:	40                   	inc    eax
  5558c4:	eb 05                	jmp    0x5558cb
  5558c6:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5558cb:	68 90 8d 6d 00       	push   0x6d8d90 ; ["BtFarawayDevice::mobileAskConnectPC"]
  5558d0:	68 08 02 00 00       	push   0x208
  5558d5:	50                   	push   eax
  5558d6:	68 c0 8d 6d 00       	push   0x6d8dc0 ; ["[ConntctionModule][%s:%d][%s]:pc recv bt_mobile_ask_connect_pc request...\n"]
  5558db:	8d 45 e4             	lea    eax,[ebp-0x1c]
  5558de:	c7 45 e4 02 00 00 00 	mov    DWORD PTR [ebp-0x1c],0x2
  5558e5:	50                   	push   eax
  5558e6:	8d 45 78             	lea    eax,[ebp+0x78]
  5558e9:	50                   	push   eax
  5558ea:	e8 1a 17 eb ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5558ef:	8b 95 8c 00 00 00    	mov    edx,DWORD PTR [ebp+0x8c]
  5558f5:	83 c4 18             	add    esp,0x18
  5558f8:	83 fa 10             	cmp    edx,0x10
  5558fb:	72 2e                	jb     0x55592b
  5558fd:	8b 4d 78             	mov    ecx,DWORD PTR [ebp+0x78]
  555900:	42                   	inc    edx
  555901:	8b c1                	mov    eax,ecx
  555903:	81 fa 00 10 00 00    	cmp    edx,0x1000
  555909:	72 16                	jb     0x555921
  55590b:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  55590e:	83 c2 23             	add    edx,0x23
  555911:	2b c1                	sub    eax,ecx
  555913:	83 c0 fc             	add    eax,0xfffffffc
  555916:	83 f8 1f             	cmp    eax,0x1f
  555919:	76 06                	jbe    0x555921
  55591b:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  555921:	52                   	push   edx
  555922:	51                   	push   ecx
  555923:	e8 72 c7 ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  555928:	83 c4 08             	add    esp,0x8
  55592b:	6a 00                	push   0x0
  55592d:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  555930:	e8 8d ef ea ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  555935:	6a 00                	push   0x0
  555937:	8d 8d 80 00 00 00    	lea    ecx,[ebp+0x80]
  55593d:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  555944:	e8 79 ef ea ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  555949:	83 ec 10             	sub    esp,0x10
  55594c:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  555950:	8b fc                	mov    edi,esp
  555952:	89 65 e4             	mov    DWORD PTR [ebp-0x1c],esp
  555955:	0f 57 c0             	xorps  xmm0,xmm0
  555958:	6a 18                	push   0x18
  55595a:	66 0f d6 47 08       	movq   QWORD PTR [edi+0x8],xmm0
  55595f:	c6 07 03             	mov    BYTE PTR [edi],0x3
  555962:	e8 4f d8 ea ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  555967:	8b f0                	mov    esi,eax
  555969:	6a 0a                	push   0xa
  55596b:	68 2c 8e 6d 00       	push   0x6d8e2c ; ["preconnect"]
  555970:	56                   	push   esi
  555971:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  555977:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  55597e:	c7 46 10 0a 00 00 00 	mov    DWORD PTR [esi+0x10],0xa
  555985:	e8 06 2e 11 00       	call   0x668790 ; ["call resolved=0x668790 "]
  55598a:	c6 46 0a 00          	mov    BYTE PTR [esi+0xa],0x0
  55598e:	83 c4 10             	add    esp,0x10
  555991:	89 77 08             	mov    DWORD PTR [edi+0x8],esi
  555994:	68 1c 8e 6d 00       	push   0x6d8e1c ; ["requestSource"]
  555999:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  55599c:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  5559a0:	e8 39 dd ea ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5559a5:	8b c8                	mov    ecx,eax
  5559a7:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  5559ab:	e8 d5 ea ea ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5559b0:	8b 7d ec             	mov    edi,DWORD PTR [ebp-0x14]
  5559b3:	83 ec 10             	sub    esp,0x10
  5559b6:	8b f4                	mov    esi,esp
  5559b8:	89 65 e4             	mov    DWORD PTR [ebp-0x1c],esp
  5559bb:	8b cf                	mov    ecx,edi
  5559bd:	68 c4 8a 6d 00       	push   0x6d8ac4 ; ["reqId"]
  5559c2:	e8 78 d6 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  5559c7:	50                   	push   eax
  5559c8:	8b ce                	mov    ecx,esi
  5559ca:	e8 3c c9 ea ff       	call   0x40230b ; ["call resolved=0x469d20 "]
  5559cf:	68 2c 1c 6d 00       	push   0x6d1c2c ; ["eventId"]
  5559d4:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  5559d7:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  5559db:	e8 fe dc ea ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5559e0:	8b c8                	mov    ecx,eax
  5559e2:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  5559e6:	e8 9a ea ea ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5559eb:	83 ec 10             	sub    esp,0x10
  5559ee:	8d 43 1c             	lea    eax,[ebx+0x1c]
  5559f1:	8b cc                	mov    ecx,esp
  5559f3:	89 65 ec             	mov    DWORD PTR [ebp-0x14],esp
  5559f6:	50                   	push   eax
  5559f7:	e8 14 f1 ea ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  5559fc:	68 54 4d 6c 00       	push   0x6c4d54 ; ["deviceId"]
  555a01:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  555a04:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  555a08:	e8 d1 dc ea ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  555a0d:	8b c8                	mov    ecx,eax
  555a0f:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  555a13:	e8 6d ea ea ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  555a18:	8d 85 80 00 00 00    	lea    eax,[ebp+0x80]
  555a1e:	50                   	push   eax
  555a1f:	8d 45 d4             	lea    eax,[ebp-0x2c]
  555a22:	50                   	push   eax
  555a23:	e8 9f b7 ea ff       	call   0x4011c7 ; ["call resolved=0x54f160 vivo::NetworkInteraction::ConnectDevice"]
  555a28:	0f 57 c0             	xorps  xmm0,xmm0
  555a2b:	c6 45 a4 03          	mov    BYTE PTR [ebp-0x5c],0x3
  555a2f:	6a 18                	push   0x18
  555a31:	66 0f d6 45 ac       	movq   QWORD PTR [ebp-0x54],xmm0
  555a36:	e8 7b d7 ea ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  555a3b:	8b f0                	mov    esi,eax
  555a3d:	6a 07                	push   0x7
  555a3f:	68 bc 9a 6c 00       	push   0x6c9abc ; ["retCode"]
  555a44:	56                   	push   esi
  555a45:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  555a4b:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  555a52:	c7 46 10 07 00 00 00 	mov    DWORD PTR [esi+0x10],0x7
  555a59:	e8 32 2d 11 00       	call   0x668790 ; ["call resolved=0x668790 "]
  555a5e:	83 c4 18             	add    esp,0x18
  555a61:	c6 46 07 00          	mov    BYTE PTR [esi+0x7],0x0
  555a65:	8d 4d a4             	lea    ecx,[ebp-0x5c]
  555a68:	89 75 ac             	mov    DWORD PTR [ebp-0x54],esi
  555a6b:	e8 6e 45 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  555a70:	8d 45 a4             	lea    eax,[ebp-0x5c]
  555a73:	c6 45 b8 01          	mov    BYTE PTR [ebp-0x48],0x1
  555a77:	89 45 b4             	mov    DWORD PTR [ebp-0x4c],eax
  555a7a:	68 7c 7c 6c 00       	push   0x6c7c7c ; ["code"]
  555a7f:	8d 8d 80 00 00 00    	lea    ecx,[ebp+0x80]
  555a85:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  555a89:	e8 50 dc ea ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  555a8e:	8b c8                	mov    ecx,eax
  555a90:	e8 22 e0 ea ff       	call   0x403ab7 ; ["call resolved=0x4a9c50 "]
  555a95:	0f 57 c0             	xorps  xmm0,xmm0
  555a98:	99                   	cdq
  555a99:	66 0f d6 45 c4       	movq   QWORD PTR [ebp-0x3c],xmm0
  555a9e:	8d 4d bc             	lea    ecx,[ebp-0x44]
  555aa1:	c6 45 bc 05          	mov    BYTE PTR [ebp-0x44],0x5
  555aa5:	89 45 c4             	mov    DWORD PTR [ebp-0x3c],eax
  555aa8:	89 55 c8             	mov    DWORD PTR [ebp-0x38],edx
  555aab:	e8 2e 45 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  555ab0:	8d 4d bc             	lea    ecx,[ebp-0x44]
  555ab3:	e8 26 45 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  555ab8:	8d 45 bc             	lea    eax,[ebp-0x44]
  555abb:	c6 45 d0 01          	mov    BYTE PTR [ebp-0x30],0x1
  555abf:	89 45 cc             	mov    DWORD PTR [ebp-0x34],eax
  555ac2:	6a 02                	push   0x2
  555ac4:	6a 01                	push   0x1
  555ac6:	8d 45 d4             	lea    eax,[ebp-0x2c]
  555ac9:	c6 45 fc 08          	mov    BYTE PTR [ebp-0x4],0x8
  555acd:	8d 4d a4             	lea    ecx,[ebp-0x5c]
  555ad0:	50                   	push   eax
  555ad1:	51                   	push   ecx
  555ad2:	8d 8d c4 fe ff ff    	lea    ecx,[ebp-0x13c]
  555ad8:	e8 ce 31 eb ff       	call   0x408cab ; ["call resolved=0x46a010 "]
  555add:	8d 85 c4 fe ff ff    	lea    eax,[ebp-0x13c]
  555ae3:	c6 85 d8 fe ff ff 01 	mov    BYTE PTR [ebp-0x128],0x1
  555aea:	89 85 d4 fe ff ff    	mov    DWORD PTR [ebp-0x12c],eax
  555af0:	8d 45 f3             	lea    eax,[ebp-0xd]
  555af3:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  555af7:	0f 57 c0             	xorps  xmm0,xmm0
  555afa:	c6 85 54 ff ff ff 03 	mov    BYTE PTR [ebp-0xac],0x3
  555b01:	6a 01                	push   0x1
  555b03:	50                   	push   eax
  555b04:	66 0f d6 85 5c ff ff 	movq   QWORD PTR [ebp-0xa4],xmm0
  555b0c:	e8 75 3d eb ff       	call   0x409886 ; ["call resolved=0x47ffe0 "]
  555b11:	8b f0                	mov    esi,eax
  555b13:	83 c4 08             	add    esp,0x8
  555b16:	8d 45 f3             	lea    eax,[ebp-0xd]
  555b19:	89 75 ec             	mov    DWORD PTR [ebp-0x14],esi
  555b1c:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  555b1f:	6a 06                	push   0x6
  555b21:	68 c8 9a 6c 00       	push   0x6c9ac8 ; ["retMsg"]
  555b26:	8b ce                	mov    ecx,esi
  555b28:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  555b2c:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  555b32:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  555b39:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  555b40:	e8 d2 e8 ea ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  555b45:	8d 8d 54 ff ff ff    	lea    ecx,[ebp-0xac]
  555b4b:	89 b5 5c ff ff ff    	mov    DWORD PTR [ebp-0xa4],esi
  555b51:	e8 88 44 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  555b56:	8d 8d 54 ff ff ff    	lea    ecx,[ebp-0xac]
  555b5c:	e8 7d 44 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  555b61:	8d 85 54 ff ff ff    	lea    eax,[ebp-0xac]
  555b67:	c6 85 68 ff ff ff 01 	mov    BYTE PTR [ebp-0x98],0x1
  555b6e:	89 85 64 ff ff ff    	mov    DWORD PTR [ebp-0x9c],eax
  555b74:	68 34 7e 6d 00       	push   0x6d7e34 ; ["reason"]
  555b79:	8d 8d 80 00 00 00    	lea    ecx,[ebp+0x80]
  555b7f:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  555b83:	e8 56 db ea ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  555b88:	8d 4d 00             	lea    ecx,[ebp+0x0]
  555b8b:	51                   	push   ecx
  555b8c:	8b c8                	mov    ecx,eax
  555b8e:	e8 57 10 eb ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  555b93:	50                   	push   eax
  555b94:	8d 8d 6c ff ff ff    	lea    ecx,[ebp-0x94]
  555b9a:	c6 45 fc 0c          	mov    BYTE PTR [ebp-0x4],0xc
  555b9e:	e8 a5 f8 ea ff       	call   0x405448 ; ["call resolved=0x43de60 "]
  555ba3:	8d 85 6c ff ff ff    	lea    eax,[ebp-0x94]
  555ba9:	c6 45 80 01          	mov    BYTE PTR [ebp-0x80],0x1
  555bad:	89 85 7c ff ff ff    	mov    DWORD PTR [ebp-0x84],eax
  555bb3:	6a 02                	push   0x2
  555bb5:	6a 01                	push   0x1
  555bb7:	8d 45 84             	lea    eax,[ebp-0x7c]
  555bba:	c6 45 fc 0e          	mov    BYTE PTR [ebp-0x4],0xe
  555bbe:	8d 8d 54 ff ff ff    	lea    ecx,[ebp-0xac]
  555bc4:	50                   	push   eax
  555bc5:	51                   	push   ecx
  555bc6:	8d 8d dc fe ff ff    	lea    ecx,[ebp-0x124]
  555bcc:	e8 da 30 eb ff       	call   0x408cab ; ["call resolved=0x46a010 "]
  555bd1:	8d 85 dc fe ff ff    	lea    eax,[ebp-0x124]
  555bd7:	c6 85 f0 fe ff ff 01 	mov    BYTE PTR [ebp-0x110],0x1
  555bde:	89 85 ec fe ff ff    	mov    DWORD PTR [ebp-0x114],eax
  555be4:	6a 02                	push   0x2
  555be6:	6a 01                	push   0x1
  555be8:	8d 85 f4 fe ff ff    	lea    eax,[ebp-0x10c]
  555bee:	c6 45 fc 11          	mov    BYTE PTR [ebp-0x4],0x11
  555bf2:	8d 8d c4 fe ff ff    	lea    ecx,[ebp-0x13c]
  555bf8:	50                   	push   eax
  555bf9:	51                   	push   ecx
  555bfa:	8d 4d 84             	lea    ecx,[ebp-0x7c]
  555bfd:	e8 a9 30 eb ff       	call   0x408cab ; ["call resolved=0x46a010 "]
  555c02:	68 a0 65 40 00       	push   0x4065a0
  555c07:	6a 02                	push   0x2
  555c09:	6a 18                	push   0x18
  555c0b:	8d 85 c4 fe ff ff    	lea    eax,[ebp-0x13c]
  555c11:	c6 45 fc 13          	mov    BYTE PTR [ebp-0x4],0x13
  555c15:	50                   	push   eax
  555c16:	e8 77 17 eb ff       	call   0x407392 ; ["call resolved=0x6663ee "]
  555c1b:	68 a0 65 40 00       	push   0x4065a0
  555c20:	6a 02                	push   0x2
  555c22:	6a 18                	push   0x18
  555c24:	8d 85 54 ff ff ff    	lea    eax,[ebp-0xac]
  555c2a:	c6 45 fc 14          	mov    BYTE PTR [ebp-0x4],0x14
  555c2e:	50                   	push   eax
  555c2f:	e8 5e 17 eb ff       	call   0x407392 ; ["call resolved=0x6663ee "]
  555c34:	8d 4d 00             	lea    ecx,[ebp+0x0]
  555c37:	e8 c7 dd ea ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  555c3c:	68 a0 65 40 00       	push   0x4065a0
  555c41:	6a 02                	push   0x2
  555c43:	6a 18                	push   0x18
  555c45:	8d 45 a4             	lea    eax,[ebp-0x5c]
  555c48:	c6 45 fc 16          	mov    BYTE PTR [ebp-0x4],0x16
  555c4c:	50                   	push   eax
  555c4d:	e8 40 17 eb ff       	call   0x407392 ; ["call resolved=0x6663ee "]
  555c52:	8d 45 f3             	lea    eax,[ebp-0xd]
  555c55:	c6 85 f4 fe ff ff 03 	mov    BYTE PTR [ebp-0x10c],0x3
  555c5c:	0f 57 c0             	xorps  xmm0,xmm0
  555c5f:	6a 01                	push   0x1
  555c61:	50                   	push   eax
  555c62:	66 0f d6 85 fc fe ff 	movq   QWORD PTR [ebp-0x104],xmm0
  555c6a:	e8 17 3c eb ff       	call   0x409886 ; ["call resolved=0x47ffe0 "]
  555c6f:	8b f0                	mov    esi,eax
  555c71:	83 c4 08             	add    esp,0x8
  555c74:	8d 45 f3             	lea    eax,[ebp-0xd]
  555c77:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  555c7a:	89 75 ec             	mov    DWORD PTR [ebp-0x14],esi
  555c7d:	6a 05                	push   0x5
  555c7f:	68 c4 8a 6d 00       	push   0x6d8ac4 ; ["reqId"]
  555c84:	8b ce                	mov    ecx,esi
  555c86:	c6 45 fc 17          	mov    BYTE PTR [ebp-0x4],0x17
  555c8a:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  555c90:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  555c97:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  555c9e:	e8 74 e7 ea ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  555ca3:	8d 8d f4 fe ff ff    	lea    ecx,[ebp-0x10c]
  555ca9:	89 b5 fc fe ff ff    	mov    DWORD PTR [ebp-0x104],esi
  555caf:	e8 2a 43 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  555cb4:	8d 8d f4 fe ff ff    	lea    ecx,[ebp-0x10c]
  555cba:	e8 1f 43 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  555cbf:	8d 85 f4 fe ff ff    	lea    eax,[ebp-0x10c]
  555cc5:	c6 85 08 ff ff ff 01 	mov    BYTE PTR [ebp-0xf8],0x1
  555ccc:	89 85 04 ff ff ff    	mov    DWORD PTR [ebp-0xfc],eax
  555cd2:	68 c4 8a 6d 00       	push   0x6d8ac4 ; ["reqId"]
  555cd7:	8b cf                	mov    ecx,edi
  555cd9:	c6 45 fc 18          	mov    BYTE PTR [ebp-0x4],0x18
  555cdd:	e8 5d d3 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  555ce2:	6a 00                	push   0x0
  555ce4:	8d 8d 0c ff ff ff    	lea    ecx,[ebp-0xf4]
  555cea:	8b f0                	mov    esi,eax
  555cec:	e8 d1 eb ea ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  555cf1:	89 b5 1c ff ff ff    	mov    DWORD PTR [ebp-0xe4],esi
  555cf7:	c6 85 20 ff ff ff 00 	mov    BYTE PTR [ebp-0xe0],0x0
  555cfe:	6a 02                	push   0x2
  555d00:	6a 01                	push   0x1
  555d02:	8d 85 24 ff ff ff    	lea    eax,[ebp-0xdc]
  555d08:	c6 45 fc 19          	mov    BYTE PTR [ebp-0x4],0x19
  555d0c:	8d 8d f4 fe ff ff    	lea    ecx,[ebp-0x10c]
  555d12:	50                   	push   eax
  555d13:	51                   	push   ecx
  555d14:	8d 4d 18             	lea    ecx,[ebp+0x18]
  555d17:	e8 8f 2f eb ff       	call   0x408cab ; ["call resolved=0x46a010 "]
  555d1c:	8d 45 18             	lea    eax,[ebp+0x18]
  555d1f:	c6 45 2c 01          	mov    BYTE PTR [ebp+0x2c],0x1
  555d23:	89 45 28             	mov    DWORD PTR [ebp+0x28],eax
  555d26:	68 7c 7c 6c 00       	push   0x6c7c7c ; ["code"]
  555d2b:	8d 8d 64 fe ff ff    	lea    ecx,[ebp-0x19c]
  555d31:	c6 45 fc 1a          	mov    BYTE PTR [ebp-0x4],0x1a
  555d35:	e8 3e 17 eb ff       	call   0x407478 ; ["call resolved=0x54c050 "]
  555d3a:	68 7c 7b 6d 00       	push   0x6d7b7c ; ["0000"]
  555d3f:	8d 8d 7c fe ff ff    	lea    ecx,[ebp-0x184]
  555d45:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  555d49:	e8 2a 17 eb ff       	call   0x407478 ; ["call resolved=0x54c050 "]
  555d4e:	6a 02                	push   0x2
  555d50:	6a 01                	push   0x1
  555d52:	8d 85 94 fe ff ff    	lea    eax,[ebp-0x16c]
  555d58:	c6 45 fc 1c          	mov    BYTE PTR [ebp-0x4],0x1c
  555d5c:	8d 8d 64 fe ff ff    	lea    ecx,[ebp-0x19c]
  555d62:	50                   	push   eax
  555d63:	51                   	push   ecx
  555d64:	8d 4d 30             	lea    ecx,[ebp+0x30]
  555d67:	e8 3f 2f eb ff       	call   0x408cab ; ["call resolved=0x46a010 "]
  555d6c:	8d 45 30             	lea    eax,[ebp+0x30]
  555d6f:	c6 45 44 01          	mov    BYTE PTR [ebp+0x44],0x1
  555d73:	89 45 40             	mov    DWORD PTR [ebp+0x40],eax
  555d76:	8d 45 f3             	lea    eax,[ebp-0xd]
  555d79:	c6 45 fc 1d          	mov    BYTE PTR [ebp-0x4],0x1d
  555d7d:	0f 57 c0             	xorps  xmm0,xmm0
  555d80:	c6 85 24 ff ff ff 03 	mov    BYTE PTR [ebp-0xdc],0x3
  555d87:	6a 01                	push   0x1
  555d89:	50                   	push   eax
  555d8a:	66 0f d6 85 2c ff ff 	movq   QWORD PTR [ebp-0xd4],xmm0
  555d92:	e8 ef 3a eb ff       	call   0x409886 ; ["call resolved=0x47ffe0 "]
  555d97:	8b f0                	mov    esi,eax
  555d99:	83 c4 08             	add    esp,0x8
  555d9c:	8d 45 f3             	lea    eax,[ebp-0xd]
  555d9f:	89 75 ec             	mov    DWORD PTR [ebp-0x14],esi
  555da2:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  555da5:	c6 45 fc 1e          	mov    BYTE PTR [ebp-0x4],0x1e
  555da9:	6a 03                	push   0x3
  555dab:	68 2c 89 6d 00       	push   0x6d892c ; ["cmd"]
  555db0:	8b ce                	mov    ecx,esi
  555db2:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  555db8:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  555dbf:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  555dc6:	e8 4c e6 ea ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  555dcb:	8d 8d 24 ff ff ff    	lea    ecx,[ebp-0xdc]
  555dd1:	89 b5 2c ff ff ff    	mov    DWORD PTR [ebp-0xd4],esi
  555dd7:	e8 02 42 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  555ddc:	8d 8d 24 ff ff ff    	lea    ecx,[ebp-0xdc]
  555de2:	e8 f7 41 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  555de7:	8d 85 24 ff ff ff    	lea    eax,[ebp-0xdc]
  555ded:	c6 85 38 ff ff ff 01 	mov    BYTE PTR [ebp-0xc8],0x1
  555df4:	89 85 34 ff ff ff    	mov    DWORD PTR [ebp-0xcc],eax
  555dfa:	68 2c 89 6d 00       	push   0x6d892c ; ["cmd"]
  555dff:	8b cf                	mov    ecx,edi
  555e01:	c6 45 fc 1f          	mov    BYTE PTR [ebp-0x4],0x1f
  555e05:	e8 35 d2 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  555e0a:	6a 00                	push   0x0
  555e0c:	8d 8d 3c ff ff ff    	lea    ecx,[ebp-0xc4]
  555e12:	8b f0                	mov    esi,eax
  555e14:	e8 a9 ea ea ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  555e19:	89 b5 4c ff ff ff    	mov    DWORD PTR [ebp-0xb4],esi
  555e1f:	c6 85 50 ff ff ff 00 	mov    BYTE PTR [ebp-0xb0],0x0
  555e26:	6a 02                	push   0x2
  555e28:	6a 01                	push   0x1
  555e2a:	8d 85 54 ff ff ff    	lea    eax,[ebp-0xac]
  555e30:	c6 45 fc 20          	mov    BYTE PTR [ebp-0x4],0x20
  555e34:	8d 8d 24 ff ff ff    	lea    ecx,[ebp-0xdc]
  555e3a:	50                   	push   eax
  555e3b:	51                   	push   ecx
  555e3c:	8d 4d 48             	lea    ecx,[ebp+0x48]
  555e3f:	e8 67 2e eb ff       	call   0x408cab ; ["call resolved=0x46a010 "]
  555e44:	8d 45 48             	lea    eax,[ebp+0x48]
  555e47:	c6 45 5c 01          	mov    BYTE PTR [ebp+0x5c],0x1
  555e4b:	89 45 58             	mov    DWORD PTR [ebp+0x58],eax
  555e4e:	68 b4 66 6c 00       	push   0x6c66b4 ; ["data"]
  555e53:	8d 8d 94 fe ff ff    	lea    ecx,[ebp-0x16c]
  555e59:	c6 45 fc 21          	mov    BYTE PTR [ebp-0x4],0x21
  555e5d:	e8 16 16 eb ff       	call   0x407478 ; ["call resolved=0x54c050 "]
  555e62:	8d 45 84             	lea    eax,[ebp-0x7c]
  555e65:	c6 45 fc 22          	mov    BYTE PTR [ebp-0x4],0x22
  555e69:	50                   	push   eax
  555e6a:	8d 8d ac fe ff ff    	lea    ecx,[ebp-0x154]
  555e70:	e8 96 c4 ea ff       	call   0x40230b ; ["call resolved=0x469d20 "]
  555e75:	8d 85 ac fe ff ff    	lea    eax,[ebp-0x154]
  555e7b:	c6 85 c0 fe ff ff 01 	mov    BYTE PTR [ebp-0x140],0x1
  555e82:	89 85 bc fe ff ff    	mov    DWORD PTR [ebp-0x144],eax
  555e88:	6a 02                	push   0x2
  555e8a:	6a 01                	push   0x1
  555e8c:	8d 85 c4 fe ff ff    	lea    eax,[ebp-0x13c]
  555e92:	c6 45 fc 23          	mov    BYTE PTR [ebp-0x4],0x23
  555e96:	8d 8d 94 fe ff ff    	lea    ecx,[ebp-0x16c]
  555e9c:	50                   	push   eax
  555e9d:	51                   	push   ecx
  555e9e:	8d 4d 60             	lea    ecx,[ebp+0x60]
  555ea1:	e8 05 2e eb ff       	call   0x408cab ; ["call resolved=0x46a010 "]
  555ea6:	8d 45 60             	lea    eax,[ebp+0x60]
  555ea9:	c6 45 74 01          	mov    BYTE PTR [ebp+0x74],0x1
  555ead:	89 45 70             	mov    DWORD PTR [ebp+0x70],eax
  555eb0:	6a 02                	push   0x2
  555eb2:	6a 01                	push   0x1
  555eb4:	8d 45 78             	lea    eax,[ebp+0x78]
  555eb7:	c6 45 fc 27          	mov    BYTE PTR [ebp-0x4],0x27
  555ebb:	8d 4d 18             	lea    ecx,[ebp+0x18]
  555ebe:	50                   	push   eax
  555ebf:	51                   	push   ecx
  555ec0:	8d 4d 94             	lea    ecx,[ebp-0x6c]
  555ec3:	e8 e3 2d eb ff       	call   0x408cab ; ["call resolved=0x46a010 "]
  555ec8:	68 a0 65 40 00       	push   0x4065a0
  555ecd:	6a 04                	push   0x4
  555ecf:	6a 18                	push   0x18
  555ed1:	8d 45 18             	lea    eax,[ebp+0x18]
  555ed4:	c6 45 fc 29          	mov    BYTE PTR [ebp-0x4],0x29
  555ed8:	50                   	push   eax
  555ed9:	e8 b4 14 eb ff       	call   0x407392 ; ["call resolved=0x6663ee "]
  555ede:	68 a0 65 40 00       	push   0x4065a0
  555ee3:	6a 02                	push   0x2
  555ee5:	6a 18                	push   0x18
  555ee7:	8d 85 94 fe ff ff    	lea    eax,[ebp-0x16c]
  555eed:	c6 45 fc 2a          	mov    BYTE PTR [ebp-0x4],0x2a
  555ef1:	50                   	push   eax
  555ef2:	e8 9b 14 eb ff       	call   0x407392 ; ["call resolved=0x6663ee "]
  555ef7:	68 a0 65 40 00       	push   0x4065a0
  555efc:	6a 02                	push   0x2
  555efe:	6a 18                	push   0x18
  555f00:	8d 85 24 ff ff ff    	lea    eax,[ebp-0xdc]
  555f06:	c6 45 fc 2b          	mov    BYTE PTR [ebp-0x4],0x2b
  555f0a:	50                   	push   eax
  555f0b:	e8 82 14 eb ff       	call   0x407392 ; ["call resolved=0x6663ee "]
  555f10:	68 a0 65 40 00       	push   0x4065a0
  555f15:	6a 02                	push   0x2
  555f17:	6a 18                	push   0x18
  555f19:	8d 85 64 fe ff ff    	lea    eax,[ebp-0x19c]
  555f1f:	c6 45 fc 2c          	mov    BYTE PTR [ebp-0x4],0x2c
  555f23:	50                   	push   eax
  555f24:	e8 69 14 eb ff       	call   0x407392 ; ["call resolved=0x6663ee "]
  555f29:	68 a0 65 40 00       	push   0x4065a0
  555f2e:	6a 02                	push   0x2
  555f30:	6a 18                	push   0x18
  555f32:	8d 85 f4 fe ff ff    	lea    eax,[ebp-0x10c]
  555f38:	c6 45 fc 2d          	mov    BYTE PTR [ebp-0x4],0x2d
  555f3c:	50                   	push   eax
  555f3d:	e8 50 14 eb ff       	call   0x407392 ; ["call resolved=0x6663ee "]
  555f42:	8b 03                	mov    eax,DWORD PTR [ebx]
  555f44:	8d 4d 94             	lea    ecx,[ebp-0x6c]
  555f47:	6a 00                	push   0x0
  555f49:	6a 00                	push   0x0
  555f4b:	6a 20                	push   0x20
  555f4d:	8b 70 20             	mov    esi,DWORD PTR [eax+0x20]
  555f50:	8d 45 00             	lea    eax,[ebp+0x0]
  555f53:	6a ff                	push   0xffffffff
  555f55:	50                   	push   eax
  555f56:	e8 c3 28 eb ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  555f5b:	50                   	push   eax
  555f5c:	8b cb                	mov    ecx,ebx
  555f5e:	c6 45 fc 2e          	mov    BYTE PTR [ebp-0x4],0x2e
  555f62:	ff d6                	call   esi
  555f64:	8d 4d 00             	lea    ecx,[ebp+0x0]
  555f67:	e8 97 da ea ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  555f6c:	8d 4d 94             	lea    ecx,[ebp-0x6c]
  555f6f:	e8 6a 40 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  555f74:	ff 75 94             	push   DWORD PTR [ebp-0x6c]
  555f77:	8d 4d 9c             	lea    ecx,[ebp-0x64]
  555f7a:	e8 cf 39 eb ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  555f7f:	8d 4d 84             	lea    ecx,[ebp-0x7c]
  555f82:	e8 57 40 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  555f87:	ff 75 84             	push   DWORD PTR [ebp-0x7c]
  555f8a:	8d 4d 8c             	lea    ecx,[ebp-0x74]
  555f8d:	e8 bc 39 eb ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  555f92:	8d 8d 80 00 00 00    	lea    ecx,[ebp+0x80]
  555f98:	e8 41 40 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  555f9d:	ff b5 80 00 00 00    	push   DWORD PTR [ebp+0x80]
  555fa3:	8d 8d 88 00 00 00    	lea    ecx,[ebp+0x88]
  555fa9:	e8 a0 39 eb ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  555fae:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  555fb1:	e8 28 40 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  555fb6:	ff 75 d4             	push   DWORD PTR [ebp-0x2c]
  555fb9:	8d 4d dc             	lea    ecx,[ebp-0x24]
  555fbc:	e8 8d 39 eb ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  555fc1:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  555fc4:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  555fcb:	59                   	pop    ecx
  555fcc:	5f                   	pop    edi
  555fcd:	5e                   	pop    esi
  555fce:	5b                   	pop    ebx
  555fcf:	8b 8d 90 00 00 00    	mov    ecx,DWORD PTR [ebp+0x90]
  555fd5:	33 cd                	xor    ecx,ebp
  555fd7:	e8 b3 e4 ea ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  555fdc:	8d a5 94 00 00 00    	lea    esp,[ebp+0x94]
  555fe2:	5d                   	pop    ebp
  555fe3:	c2 04 00             	ret    0x4
