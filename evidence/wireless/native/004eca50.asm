; BleGattClient::notifyPhoneCancel; image base 0x400000; static annotation only
  4eca50:	55                   	push   ebp
  4eca51:	8d 6c 24 90          	lea    ebp,[esp-0x70]
  4eca55:	83 ec 70             	sub    esp,0x70
  4eca58:	6a ff                	push   0xffffffff
  4eca5a:	68 c7 d8 67 00       	push   0x67d8c7
  4eca5f:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  4eca65:	50                   	push   eax
  4eca66:	83 ec 44             	sub    esp,0x44
  4eca69:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  4eca6e:	33 c5                	xor    eax,ebp
  4eca70:	89 45 6c             	mov    DWORD PTR [ebp+0x6c],eax
  4eca73:	53                   	push   ebx
  4eca74:	56                   	push   esi
  4eca75:	57                   	push   edi
  4eca76:	50                   	push   eax
  4eca77:	8d 45 f4             	lea    eax,[ebp-0xc]
  4eca7a:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  4eca80:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  4eca83:	8b f1                	mov    esi,ecx
  4eca85:	33 db                	xor    ebx,ebx
  4eca87:	b9 ec 86 7a 00       	mov    ecx,0x7a86ec
  4eca8c:	89 5d 30             	mov    DWORD PTR [ebp+0x30],ebx
  4eca8f:	e8 5a c0 f1 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  4eca94:	6a 5c                	push   0x5c
  4eca96:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4eca9b:	e8 c6 bc 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4ecaa0:	83 c4 08             	add    esp,0x8
  4ecaa3:	85 c0                	test   eax,eax
  4ecaa5:	74 12                	je     0x4ecab9
  4ecaa7:	6a 5c                	push   0x5c
  4ecaa9:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4ecaae:	e8 b3 bc 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4ecab3:	83 c4 08             	add    esp,0x8
  4ecab6:	40                   	inc    eax
  4ecab7:	eb 05                	jmp    0x4ecabe
  4ecab9:	b8 88 de 6c 00       	mov    eax,0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4ecabe:	68 24 e8 6c 00       	push   0x6ce824 ; ["BleGattClient::notifyPhoneCancel"]
  4ecac3:	68 08 01 00 00       	push   0x108
  4ecac8:	50                   	push   eax
  4ecac9:	68 4c e8 6c 00       	push   0x6ce84c ; ["[ConntctionModule][%s:%d][%s]: notifyPhoneCancel ======\n"]
  4ecace:	8d 45 34             	lea    eax,[ebp+0x34]
  4ecad1:	c7 45 34 02 00 00 00 	mov    DWORD PTR [ebp+0x34],0x2
  4ecad8:	50                   	push   eax
  4ecad9:	8d 45 3c             	lea    eax,[ebp+0x3c]
  4ecadc:	50                   	push   eax
  4ecadd:	e8 27 a5 f1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4ecae2:	8b 55 50             	mov    edx,DWORD PTR [ebp+0x50]
  4ecae5:	83 c4 18             	add    esp,0x18
  4ecae8:	83 fa 10             	cmp    edx,0x10
  4ecaeb:	72 2e                	jb     0x4ecb1b
  4ecaed:	8b 4d 3c             	mov    ecx,DWORD PTR [ebp+0x3c]
  4ecaf0:	42                   	inc    edx
  4ecaf1:	8b c1                	mov    eax,ecx
  4ecaf3:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4ecaf9:	72 16                	jb     0x4ecb11
  4ecafb:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4ecafe:	83 c2 23             	add    edx,0x23
  4ecb01:	2b c1                	sub    eax,ecx
  4ecb03:	83 c0 fc             	add    eax,0xfffffffc
  4ecb06:	83 f8 1f             	cmp    eax,0x1f
  4ecb09:	76 06                	jbe    0x4ecb11
  4ecb0b:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  4ecb11:	52                   	push   edx
  4ecb12:	51                   	push   ecx
  4ecb13:	e8 82 55 f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4ecb18:	83 c4 08             	add    esp,0x8
  4ecb1b:	68 24 db 6c 00       	push   0x6cdb24
  4ecb20:	8d 45 24             	lea    eax,[ebp+0x24]
  4ecb23:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  4ecb2a:	8d 4e 10             	lea    ecx,[esi+0x10]
  4ecb2d:	50                   	push   eax
  4ecb2e:	e8 1b ab f1 ff       	call   0x40764e ; ["call resolved=0x4e61b0 "]
  4ecb33:	89 45 38             	mov    DWORD PTR [ebp+0x38],eax
  4ecb36:	8b 08                	mov    ecx,DWORD PTR [eax]
  4ecb38:	85 c9                	test   ecx,ecx
  4ecb3a:	75 04                	jne    0x4ecb40
  4ecb3c:	33 c0                	xor    eax,eax
  4ecb3e:	eb 18                	jmp    0x4ecb58
  4ecb40:	8b 01                	mov    eax,DWORD PTR [ecx]
  4ecb42:	8d 55 20             	lea    edx,[ebp+0x20]
  4ecb45:	52                   	push   edx
  4ecb46:	68 5c 1d 6c 00       	push   0x6c1d5c
  4ecb4b:	51                   	push   ecx
  4ecb4c:	c7 45 20 00 00 00 00 	mov    DWORD PTR [ebp+0x20],0x0
  4ecb53:	ff 10                	call   DWORD PTR [eax]
  4ecb55:	8b 45 20             	mov    eax,DWORD PTR [ebp+0x20]
  4ecb58:	89 45 30             	mov    DWORD PTR [ebp+0x30],eax
  4ecb5b:	8b 08                	mov    ecx,DWORD PTR [eax]
  4ecb5d:	8d 55 34             	lea    edx,[ebp+0x34]
  4ecb60:	52                   	push   edx
  4ecb61:	50                   	push   eax
  4ecb62:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  4ecb66:	ff 51 1c             	call   DWORD PTR [ecx+0x1c]
  4ecb69:	85 c0                	test   eax,eax
  4ecb6b:	0f 88 1d 06 00 00    	js     0x4ed18e
  4ecb71:	8d 4d 30             	lea    ecx,[ebp+0x30]
  4ecb74:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  4ecb78:	e8 7d 8b f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ecb7d:	83 7d 34 00          	cmp    DWORD PTR [ebp+0x34],0x0
  4ecb81:	0f 85 89 00 00 00    	jne    0x4ecc10
  4ecb87:	6a 00                	push   0x0
  4ecb89:	6a 00                	push   0x0
  4ecb8b:	6a 01                	push   0x1
  4ecb8d:	6a 00                	push   0x0
  4ecb8f:	e8 06 7e 17 00       	call   0x66499a ; ["call resolved=0x66499a "]
  4ecb94:	8b f8                	mov    edi,eax
  4ecb96:	85 ff                	test   edi,edi
  4ecb98:	0f 84 f6 05 00 00    	je     0x4ed194
  4ecb9e:	c7 45 2c 00 00 00 00 	mov    DWORD PTR [ebp+0x2c],0x0
  4ecba5:	89 7d 30             	mov    DWORD PTR [ebp+0x30],edi
  4ecba8:	6a 0c                	push   0xc
  4ecbaa:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  4ecbae:	e8 03 66 f1 ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  4ecbb3:	8b f0                	mov    esi,eax
  4ecbb5:	83 c4 04             	add    esp,0x4
  4ecbb8:	89 75 2c             	mov    DWORD PTR [ebp+0x2c],esi
  4ecbbb:	bb 04 00 00 00       	mov    ebx,0x4
  4ecbc0:	85 f6                	test   esi,esi
  4ecbc2:	74 15                	je     0x4ecbd9
  4ecbc4:	89 7e 04             	mov    DWORD PTR [esi+0x4],edi
  4ecbc7:	c7 46 08 01 00 00 00 	mov    DWORD PTR [esi+0x8],0x1
  4ecbce:	c7 06 c4 ea 6c 00    	mov    DWORD PTR [esi],0x6ceac4
  4ecbd4:	89 75 30             	mov    DWORD PTR [ebp+0x30],esi
  4ecbd7:	eb 0b                	jmp    0x4ecbe4
  4ecbd9:	33 f6                	xor    esi,esi
  4ecbdb:	57                   	push   edi
  4ecbdc:	89 75 30             	mov    DWORD PTR [ebp+0x30],esi
  4ecbdf:	e8 86 7d 17 00       	call   0x66496a ; ["call resolved=0x66496a "]
  4ecbe4:	8b 4d 38             	mov    ecx,DWORD PTR [ebp+0x38]
  4ecbe7:	56                   	push   esi
  4ecbe8:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  4ecbec:	8b 09                	mov    ecx,DWORD PTR [ecx]
  4ecbee:	51                   	push   ecx
  4ecbef:	8b 01                	mov    eax,DWORD PTR [ecx]
  4ecbf1:	ff 50 18             	call   DWORD PTR [eax+0x18]
  4ecbf4:	85 c0                	test   eax,eax
  4ecbf6:	0f 88 9d 05 00 00    	js     0x4ed199
  4ecbfc:	6a ff                	push   0xffffffff
  4ecbfe:	57                   	push   edi
  4ecbff:	e8 90 7d 17 00       	call   0x664994 ; ["call resolved=0x664994 "]
  4ecc04:	85 f6                	test   esi,esi
  4ecc06:	74 08                	je     0x4ecc10
  4ecc08:	8d 4d 30             	lea    ecx,[ebp+0x30]
  4ecc0b:	e8 ea 8a f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ecc10:	8b 45 38             	mov    eax,DWORD PTR [ebp+0x38]
  4ecc13:	8d 55 28             	lea    edx,[ebp+0x28]
  4ecc16:	c7 45 28 00 00 00 00 	mov    DWORD PTR [ebp+0x28],0x0
  4ecc1d:	83 cb 08             	or     ebx,0x8
  4ecc20:	52                   	push   edx
  4ecc21:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  4ecc25:	8b 08                	mov    ecx,DWORD PTR [eax]
  4ecc27:	51                   	push   ecx
  4ecc28:	89 5d 30             	mov    DWORD PTR [ebp+0x30],ebx
  4ecc2b:	8b 01                	mov    eax,DWORD PTR [ecx]
  4ecc2d:	ff 50 20             	call   DWORD PTR [eax+0x20]
  4ecc30:	85 c0                	test   eax,eax
  4ecc32:	0f 88 67 05 00 00    	js     0x4ed19f
  4ecc38:	83 7d 24 00          	cmp    DWORD PTR [ebp+0x24],0x0
  4ecc3c:	c7 45 fc 09 00 00 00 	mov    DWORD PTR [ebp-0x4],0x9
  4ecc43:	74 08                	je     0x4ecc4d
  4ecc45:	8d 4d 24             	lea    ecx,[ebp+0x24]
  4ecc48:	e8 ad 8a f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ecc4d:	8b 45 28             	mov    eax,DWORD PTR [ebp+0x28]
  4ecc50:	8d 55 34             	lea    edx,[ebp+0x34]
  4ecc53:	52                   	push   edx
  4ecc54:	50                   	push   eax
  4ecc55:	8b 08                	mov    ecx,DWORD PTR [eax]
  4ecc57:	ff 51 18             	call   DWORD PTR [ecx+0x18]
  4ecc5a:	85 c0                	test   eax,eax
  4ecc5c:	0f 88 43 05 00 00    	js     0x4ed1a5
  4ecc62:	83 7d 34 00          	cmp    DWORD PTR [ebp+0x34],0x0
  4ecc66:	8b 45 28             	mov    eax,DWORD PTR [ebp+0x28]
  4ecc69:	0f 84 a5 00 00 00    	je     0x4ecd14
  4ecc6f:	8b 08                	mov    ecx,DWORD PTR [eax]
  4ecc71:	8d 55 34             	lea    edx,[ebp+0x34]
  4ecc74:	52                   	push   edx
  4ecc75:	50                   	push   eax
  4ecc76:	ff 51 18             	call   DWORD PTR [ecx+0x18]
  4ecc79:	85 c0                	test   eax,eax
  4ecc7b:	0f 88 2a 05 00 00    	js     0x4ed1ab
  4ecc81:	6a 5c                	push   0x5c
  4ecc83:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4ecc88:	e8 d9 ba 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4ecc8d:	83 c4 08             	add    esp,0x8
  4ecc90:	85 c0                	test   eax,eax
  4ecc92:	74 12                	je     0x4ecca6
  4ecc94:	6a 5c                	push   0x5c
  4ecc96:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4ecc9b:	e8 c6 ba 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4ecca0:	83 c4 08             	add    esp,0x8
  4ecca3:	40                   	inc    eax
  4ecca4:	eb 05                	jmp    0x4eccab
  4ecca6:	b8 88 de 6c 00       	mov    eax,0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4eccab:	ff 75 34             	push   DWORD PTR [ebp+0x34]
  4eccae:	c7 45 38 03 00 00 00 	mov    DWORD PTR [ebp+0x38],0x3
  4eccb5:	68 24 e8 6c 00       	push   0x6ce824 ; ["BleGattClient::notifyPhoneCancel"]
  4eccba:	68 11 01 00 00       	push   0x111
  4eccbf:	50                   	push   eax
  4eccc0:	68 90 e8 6c 00       	push   0x6ce890 ; ["[ConntctionModule][%s:%d][%s]: send_extra_extracharacteristicsresult error %d \n"]
  4eccc5:	8d 45 38             	lea    eax,[ebp+0x38]
  4eccc8:	50                   	push   eax
  4eccc9:	8d 45 54             	lea    eax,[ebp+0x54]
  4ecccc:	50                   	push   eax
  4ecccd:	e8 37 a3 f1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4eccd2:	8b 55 68             	mov    edx,DWORD PTR [ebp+0x68]
  4eccd5:	83 c4 1c             	add    esp,0x1c
  4eccd8:	83 fa 10             	cmp    edx,0x10
  4eccdb:	0f 82 74 03 00 00    	jb     0x4ed055
  4ecce1:	8b 4d 54             	mov    ecx,DWORD PTR [ebp+0x54]
  4ecce4:	42                   	inc    edx
  4ecce5:	8b c1                	mov    eax,ecx
  4ecce7:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4ecced:	72 16                	jb     0x4ecd05
  4eccef:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4eccf2:	83 c2 23             	add    edx,0x23
  4eccf5:	2b c1                	sub    eax,ecx
  4eccf7:	83 c0 fc             	add    eax,0xfffffffc
  4eccfa:	83 f8 1f             	cmp    eax,0x1f
  4eccfd:	76 06                	jbe    0x4ecd05
  4eccff:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  4ecd05:	52                   	push   edx
  4ecd06:	51                   	push   ecx
  4ecd07:	e8 8e 53 f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4ecd0c:	83 c4 08             	add    esp,0x8
  4ecd0f:	e9 41 03 00 00       	jmp    0x4ed055
  4ecd14:	c7 45 38 00 00 00 00 	mov    DWORD PTR [ebp+0x38],0x0
  4ecd1b:	8d 55 38             	lea    edx,[ebp+0x38]
  4ecd1e:	8b 08                	mov    ecx,DWORD PTR [eax]
  4ecd20:	52                   	push   edx
  4ecd21:	50                   	push   eax
  4ecd22:	ff 51 20             	call   DWORD PTR [ecx+0x20]
  4ecd25:	85 c0                	test   eax,eax
  4ecd27:	0f 88 84 04 00 00    	js     0x4ed1b1
  4ecd2d:	8b 75 38             	mov    esi,DWORD PTR [ebp+0x38]
  4ecd30:	89 75 24             	mov    DWORD PTR [ebp+0x24],esi
  4ecd33:	6a 00                	push   0x0
  4ecd35:	8d 45 1c             	lea    eax,[ebp+0x1c]
  4ecd38:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  4ecd3c:	50                   	push   eax
  4ecd3d:	8d 4d 24             	lea    ecx,[ebp+0x24]
  4ecd40:	e8 2d 53 f1 ff       	call   0x402072 ; ["call resolved=0x4e6070 "]
  4ecd45:	c6 45 fc 0c          	mov    BYTE PTR [ebp-0x4],0xc
  4ecd49:	85 f6                	test   esi,esi
  4ecd4b:	74 08                	je     0x4ecd55
  4ecd4d:	8d 4d 24             	lea    ecx,[ebp+0x24]
  4ecd50:	e8 a5 89 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ecd55:	0f 57 c0             	xorps  xmm0,xmm0
  4ecd58:	c6 45 08 00          	mov    BYTE PTR [ebp+0x8],0x0
  4ecd5c:	6a 18                	push   0x18
  4ecd5e:	66 0f d6 45 10       	movq   QWORD PTR [ebp+0x10],xmm0
  4ecd63:	66 0f d6 45 c8       	movq   QWORD PTR [ebp-0x38],xmm0
  4ecd68:	c6 45 c0 03          	mov    BYTE PTR [ebp-0x40],0x3
  4ecd6c:	e8 45 64 f1 ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  4ecd71:	83 c4 04             	add    esp,0x4
  4ecd74:	8b f0                	mov    esi,eax
  4ecd76:	6a 06                	push   0x6
  4ecd78:	68 f0 dc 6c 00       	push   0x6cdcf0 ; ["action"]
  4ecd7d:	56                   	push   esi
  4ecd7e:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  4ecd84:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  4ecd8b:	c7 46 10 06 00 00 00 	mov    DWORD PTR [esi+0x10],0x6
  4ecd92:	e8 f9 b9 17 00       	call   0x668790 ; ["call resolved=0x668790 "]
  4ecd97:	c6 46 06 00          	mov    BYTE PTR [esi+0x6],0x0
  4ecd9b:	8d 45 c0             	lea    eax,[ebp-0x40]
  4ecd9e:	0f 57 c0             	xorps  xmm0,xmm0
  4ecda1:	89 45 d0             	mov    DWORD PTR [ebp-0x30],eax
  4ecda4:	8d 45 d8             	lea    eax,[ebp-0x28]
  4ecda7:	66 0f d6 45 e0       	movq   QWORD PTR [ebp-0x20],xmm0
  4ecdac:	83 c4 0c             	add    esp,0xc
  4ecdaf:	89 75 c8             	mov    DWORD PTR [ebp-0x38],esi
  4ecdb2:	c6 45 d4 01          	mov    BYTE PTR [ebp-0x2c],0x1
  4ecdb6:	c6 45 d8 05          	mov    BYTE PTR [ebp-0x28],0x5
  4ecdba:	66 0f 13 45 e0       	movlpd QWORD PTR [ebp-0x20],xmm0
  4ecdbf:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  4ecdc2:	c6 45 ec 01          	mov    BYTE PTR [ebp-0x14],0x1
  4ecdc6:	6a 02                	push   0x2
  4ecdc8:	6a 01                	push   0x1
  4ecdca:	8d 45 f0             	lea    eax,[ebp-0x10]
  4ecdcd:	c6 45 fc 0e          	mov    BYTE PTR [ebp-0x4],0xe
  4ecdd1:	8d 4d c0             	lea    ecx,[ebp-0x40]
  4ecdd4:	50                   	push   eax
  4ecdd5:	51                   	push   ecx
  4ecdd6:	8d 4d 54             	lea    ecx,[ebp+0x54]
  4ecdd9:	e8 cd be f1 ff       	call   0x408cab ; ["call resolved=0x46a010 "]
  4ecdde:	8d 45 54             	lea    eax,[ebp+0x54]
  4ecde1:	c6 45 68 01          	mov    BYTE PTR [ebp+0x68],0x1
  4ecde5:	89 45 64             	mov    DWORD PTR [ebp+0x64],eax
  4ecde8:	83 ec 10             	sub    esp,0x10
  4ecdeb:	c6 45 fc 0f          	mov    BYTE PTR [ebp-0x4],0xf
  4ecdef:	8b cc                	mov    ecx,esp
  4ecdf1:	8b d0                	mov    edx,eax
  4ecdf3:	8d 45 6c             	lea    eax,[ebp+0x6c]
  4ecdf6:	6a 02                	push   0x2
  4ecdf8:	6a 01                	push   0x1
  4ecdfa:	50                   	push   eax
  4ecdfb:	52                   	push   edx
  4ecdfc:	e8 aa be f1 ff       	call   0x408cab ; ["call resolved=0x46a010 "]
  4ece01:	8d 4d 08             	lea    ecx,[ebp+0x8]
  4ece04:	e8 7c 76 f1 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  4ece09:	68 a0 65 40 00       	push   0x4065a0
  4ece0e:	6a 01                	push   0x1
  4ece10:	6a 18                	push   0x18
  4ece12:	8d 45 54             	lea    eax,[ebp+0x54]
  4ece15:	c6 45 fc 0e          	mov    BYTE PTR [ebp-0x4],0xe
  4ece19:	50                   	push   eax
  4ece1a:	e8 73 a5 f1 ff       	call   0x407392 ; ["call resolved=0x6663ee "]
  4ece1f:	68 a0 65 40 00       	push   0x4065a0
  4ece24:	6a 02                	push   0x2
  4ece26:	6a 18                	push   0x18
  4ece28:	8d 45 c0             	lea    eax,[ebp-0x40]
  4ece2b:	c6 45 fc 0c          	mov    BYTE PTR [ebp-0x4],0xc
  4ece2f:	50                   	push   eax
  4ece30:	e8 5d a5 f1 ff       	call   0x407392 ; ["call resolved=0x6663ee "]
  4ece35:	8d 4d 08             	lea    ecx,[ebp+0x8]
  4ece38:	e8 a1 d1 f1 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  4ece3d:	6a 00                	push   0x0
  4ece3f:	6a 00                	push   0x0
  4ece41:	6a 20                	push   0x20
  4ece43:	6a ff                	push   0xffffffff
  4ece45:	8d 45 3c             	lea    eax,[ebp+0x3c]
  4ece48:	c6 45 fc 10          	mov    BYTE PTR [ebp-0x4],0x10
  4ece4c:	50                   	push   eax
  4ece4d:	8d 4d 08             	lea    ecx,[ebp+0x8]
  4ece50:	e8 c9 b9 f1 ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  4ece55:	8d 45 1b             	lea    eax,[ebp+0x1b]
  4ece58:	c6 45 fc 11          	mov    BYTE PTR [ebp-0x4],0x11
  4ece5c:	50                   	push   eax
  4ece5d:	8d 45 20             	lea    eax,[ebp+0x20]
  4ece60:	b9 d0 35 79 00       	mov    ecx,0x7935d0
  4ece65:	50                   	push   eax
  4ece66:	e8 3b be f1 ff       	call   0x408ca6 ; ["call resolved=0x4c6760 "]
  4ece6b:	8d 45 3c             	lea    eax,[ebp+0x3c]
  4ece6e:	c6 45 fc 12          	mov    BYTE PTR [ebp-0x4],0x12
  4ece72:	50                   	push   eax
  4ece73:	8d 45 34             	lea    eax,[ebp+0x34]
  4ece76:	50                   	push   eax
  4ece77:	e8 40 9e f1 ff       	call   0x406cbc ; ["call resolved=0x458470 "]
  4ece7c:	83 c4 08             	add    esp,0x8
  4ece7f:	8b c8                	mov    ecx,eax
  4ece81:	8b 75 20             	mov    esi,DWORD PTR [ebp+0x20]
  4ece84:	8d 55 2c             	lea    edx,[ebp+0x2c]
  4ece87:	52                   	push   edx
  4ece88:	ff 31                	push   DWORD PTR [ecx]
  4ece8a:	c6 45 fc 13          	mov    BYTE PTR [ebp-0x4],0x13
  4ece8e:	8b 06                	mov    eax,DWORD PTR [esi]
  4ece90:	56                   	push   esi
  4ece91:	ff 50 6c             	call   DWORD PTR [eax+0x6c]
  4ece94:	85 c0                	test   eax,eax
  4ece96:	0f 88 1b 03 00 00    	js     0x4ed1b7
  4ece9c:	8b 45 34             	mov    eax,DWORD PTR [ebp+0x34]
  4ece9f:	c6 45 fc 12          	mov    BYTE PTR [ebp-0x4],0x12
  4ecea3:	85 c0                	test   eax,eax
  4ecea5:	74 06                	je     0x4ecead
  4ecea7:	50                   	push   eax
  4ecea8:	e8 d1 bb 17 00       	call   0x668a7e ; ["call resolved=0x668a7e "]
  4ecead:	c7 45 30 00 00 00 00 	mov    DWORD PTR [ebp+0x30],0x0
  4eceb4:	8d 4d 30             	lea    ecx,[ebp+0x30]
  4eceb7:	8b 06                	mov    eax,DWORD PTR [esi]
  4eceb9:	51                   	push   ecx
  4eceba:	56                   	push   esi
  4ecebb:	ff 50 7c             	call   DWORD PTR [eax+0x7c]
  4ecebe:	85 c0                	test   eax,eax
  4ecec0:	0f 88 f7 02 00 00    	js     0x4ed1bd
  4ecec6:	8b 75 30             	mov    esi,DWORD PTR [ebp+0x30]
  4ecec9:	89 75 2c             	mov    DWORD PTR [ebp+0x2c],esi
  4ececc:	8b 45 1c             	mov    eax,DWORD PTR [ebp+0x1c]
  4ececf:	8d 55 24             	lea    edx,[ebp+0x24]
  4eced2:	52                   	push   edx
  4eced3:	c7 45 24 00 00 00 00 	mov    DWORD PTR [ebp+0x24],0x0
  4eceda:	56                   	push   esi
  4ecedb:	8b 08                	mov    ecx,DWORD PTR [eax]
  4ecedd:	50                   	push   eax
  4ecede:	c6 45 fc 14          	mov    BYTE PTR [ebp-0x4],0x14
  4ecee2:	ff 51 40             	call   DWORD PTR [ecx+0x40]
  4ecee5:	85 c0                	test   eax,eax
  4ecee7:	0f 88 d6 02 00 00    	js     0x4ed1c3
  4eceed:	8b 5d 24             	mov    ebx,DWORD PTR [ebp+0x24]
  4ecef0:	89 5d 34             	mov    DWORD PTR [ebp+0x34],ebx
  4ecef3:	8d 4d 34             	lea    ecx,[ebp+0x34]
  4ecef6:	c6 45 fc 15          	mov    BYTE PTR [ebp-0x4],0x15
  4ecefa:	e8 1a 6e f1 ff       	call   0x403d19 ; ["call resolved=0x4e8db0 "]
  4eceff:	85 c0                	test   eax,eax
  4ecf01:	0f 85 83 00 00 00    	jne    0x4ecf8a
  4ecf07:	50                   	push   eax
  4ecf08:	50                   	push   eax
  4ecf09:	6a 01                	push   0x1
  4ecf0b:	50                   	push   eax
  4ecf0c:	e8 89 7a 17 00       	call   0x66499a ; ["call resolved=0x66499a "]
  4ecf11:	8b f8                	mov    edi,eax
  4ecf13:	85 ff                	test   edi,edi
  4ecf15:	0f 84 ae 02 00 00    	je     0x4ed1c9
  4ecf1b:	c7 45 38 00 00 00 00 	mov    DWORD PTR [ebp+0x38],0x0
  4ecf22:	89 7d 04             	mov    DWORD PTR [ebp+0x4],edi
  4ecf25:	6a 0c                	push   0xc
  4ecf27:	c6 45 fc 17          	mov    BYTE PTR [ebp-0x4],0x17
  4ecf2b:	e8 86 62 f1 ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  4ecf30:	8b f0                	mov    esi,eax
  4ecf32:	83 c4 04             	add    esp,0x4
  4ecf35:	89 75 04             	mov    DWORD PTR [ebp+0x4],esi
  4ecf38:	85 f6                	test   esi,esi
  4ecf3a:	74 15                	je     0x4ecf51
  4ecf3c:	89 7e 04             	mov    DWORD PTR [esi+0x4],edi
  4ecf3f:	c7 46 08 01 00 00 00 	mov    DWORD PTR [esi+0x8],0x1
  4ecf46:	c7 06 94 ea 6c 00    	mov    DWORD PTR [esi],0x6cea94 ; ["L}@"]
  4ecf4c:	89 75 38             	mov    DWORD PTR [ebp+0x38],esi
  4ecf4f:	eb 0b                	jmp    0x4ecf5c
  4ecf51:	33 f6                	xor    esi,esi
  4ecf53:	57                   	push   edi
  4ecf54:	89 75 38             	mov    DWORD PTR [ebp+0x38],esi
  4ecf57:	e8 0e 7a 17 00       	call   0x66496a ; ["call resolved=0x66496a "]
  4ecf5c:	8b 03                	mov    eax,DWORD PTR [ebx]
  4ecf5e:	56                   	push   esi
  4ecf5f:	53                   	push   ebx
  4ecf60:	c6 45 fc 19          	mov    BYTE PTR [ebp-0x4],0x19
  4ecf64:	ff 50 18             	call   DWORD PTR [eax+0x18]
  4ecf67:	85 c0                	test   eax,eax
  4ecf69:	0f 88 5f 02 00 00    	js     0x4ed1ce
  4ecf6f:	6a ff                	push   0xffffffff
  4ecf71:	57                   	push   edi
  4ecf72:	e8 1d 7a 17 00       	call   0x664994 ; ["call resolved=0x664994 "]
  4ecf77:	c6 45 fc 15          	mov    BYTE PTR [ebp-0x4],0x15
  4ecf7b:	85 f6                	test   esi,esi
  4ecf7d:	74 08                	je     0x4ecf87
  4ecf7f:	8d 4d 38             	lea    ecx,[ebp+0x38]
  4ecf82:	e8 73 87 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ecf87:	8b 75 30             	mov    esi,DWORD PTR [ebp+0x30]
  4ecf8a:	c7 45 38 00 00 00 00 	mov    DWORD PTR [ebp+0x38],0x0
  4ecf91:	8d 4d 38             	lea    ecx,[ebp+0x38]
  4ecf94:	8b 03                	mov    eax,DWORD PTR [ebx]
  4ecf96:	51                   	push   ecx
  4ecf97:	53                   	push   ebx
  4ecf98:	ff 50 20             	call   DWORD PTR [eax+0x20]
  4ecf9b:	85 c0                	test   eax,eax
  4ecf9d:	0f 88 31 02 00 00    	js     0x4ed1d4
  4ecfa3:	8d 4d 34             	lea    ecx,[ebp+0x34]
  4ecfa6:	e8 4f 87 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ecfab:	c6 45 fc 12          	mov    BYTE PTR [ebp-0x4],0x12
  4ecfaf:	85 f6                	test   esi,esi
  4ecfb1:	74 08                	je     0x4ecfbb
  4ecfb3:	8d 4d 2c             	lea    ecx,[ebp+0x2c]
  4ecfb6:	e8 3f 87 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ecfbb:	8d 4d 20             	lea    ecx,[ebp+0x20]
  4ecfbe:	e8 90 b5 f1 ff       	call   0x408553 ; ["call resolved=0x4e58a0 "]
  4ecfc3:	8b 75 38             	mov    esi,DWORD PTR [ebp+0x38]
  4ecfc6:	85 f6                	test   esi,esi
  4ecfc8:	74 5a                	je     0x4ed024
  4ecfca:	6a 5c                	push   0x5c
  4ecfcc:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4ecfd1:	e8 90 b7 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4ecfd6:	83 c4 08             	add    esp,0x8
  4ecfd9:	85 c0                	test   eax,eax
  4ecfdb:	74 12                	je     0x4ecfef
  4ecfdd:	6a 5c                	push   0x5c
  4ecfdf:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4ecfe4:	e8 7d b7 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4ecfe9:	83 c4 08             	add    esp,0x8
  4ecfec:	40                   	inc    eax
  4ecfed:	eb 05                	jmp    0x4ecff4
  4ecfef:	b8 88 de 6c 00       	mov    eax,0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4ecff4:	56                   	push   esi
  4ecff5:	68 24 e8 6c 00       	push   0x6ce824 ; ["BleGattClient::notifyPhoneCancel"]
  4ecffa:	68 2a 01 00 00       	push   0x12a
  4ecfff:	50                   	push   eax
  4ed000:	68 f0 e8 6c 00       	push   0x6ce8f0 ; ["[ConntctionModule][%s:%d][%s]: write_send_extra_status error %d \n"]
  4ed005:	8d 45 2c             	lea    eax,[ebp+0x2c]
  4ed008:	c7 45 2c 03 00 00 00 	mov    DWORD PTR [ebp+0x2c],0x3
  4ed00f:	50                   	push   eax
  4ed010:	8d 45 54             	lea    eax,[ebp+0x54]
  4ed013:	50                   	push   eax
  4ed014:	e8 f0 9f f1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4ed019:	83 c4 1c             	add    esp,0x1c
  4ed01c:	8d 4d 54             	lea    ecx,[ebp+0x54]
  4ed01f:	e8 df 69 f1 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  4ed024:	8d 4d 20             	lea    ecx,[ebp+0x20]
  4ed027:	e8 ce 86 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ed02c:	8d 4d 3c             	lea    ecx,[ebp+0x3c]
  4ed02f:	e8 cf 69 f1 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  4ed034:	8d 4d 08             	lea    ecx,[ebp+0x8]
  4ed037:	e8 a2 cf f1 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  4ed03c:	ff 75 08             	push   DWORD PTR [ebp+0x8]
  4ed03f:	8d 4d 10             	lea    ecx,[ebp+0x10]
  4ed042:	e8 07 c9 f1 ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  4ed047:	83 7d 1c 00          	cmp    DWORD PTR [ebp+0x1c],0x0
  4ed04b:	74 08                	je     0x4ed055
  4ed04d:	8d 4d 1c             	lea    ecx,[ebp+0x1c]
  4ed050:	e8 a5 86 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ed055:	83 7d 28 00          	cmp    DWORD PTR [ebp+0x28],0x0
  4ed059:	74 08                	je     0x4ed063
  4ed05b:	8d 4d 28             	lea    ecx,[ebp+0x28]
  4ed05e:	e8 97 86 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ed063:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  4ed066:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  4ed06d:	59                   	pop    ecx
  4ed06e:	5f                   	pop    edi
  4ed06f:	5e                   	pop    esi
  4ed070:	5b                   	pop    ebx
  4ed071:	8b 4d 6c             	mov    ecx,DWORD PTR [ebp+0x6c]
  4ed074:	33 cd                	xor    ecx,ebp
  4ed076:	e8 14 74 f1 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  4ed07b:	8d 65 70             	lea    esp,[ebp+0x70]
  4ed07e:	5d                   	pop    ebp
  4ed07f:	c3                   	ret
  4ed080:	8b 75 bc             	mov    esi,DWORD PTR [ebp-0x44]
  4ed083:	8d 45 34             	lea    eax,[ebp+0x34]
  4ed086:	50                   	push   eax
  4ed087:	8b ce                	mov    ecx,esi
  4ed089:	e8 fc 64 f1 ff       	call   0x40358a ; ["call resolved=0x4bf770 "]
  4ed08e:	8d 4d 00             	lea    ecx,[ebp+0x0]
  4ed091:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  4ed095:	51                   	push   ecx
  4ed096:	8b c8                	mov    ecx,eax
  4ed098:	e8 c4 c4 f1 ff       	call   0x409561 ; ["call resolved=0x472f70 "]
  4ed09d:	ff 70 04             	push   DWORD PTR [eax+0x4]
  4ed0a0:	ff 30                	push   DWORD PTR [eax]
  4ed0a2:	8d 45 3c             	lea    eax,[ebp+0x3c]
  4ed0a5:	50                   	push   eax
  4ed0a6:	e8 e8 8d f1 ff       	call   0x405e93 ; ["call resolved=0x4a64f0 "]
  4ed0ab:	83 c4 0c             	add    esp,0xc
  4ed0ae:	8b c8                	mov    ecx,eax
  4ed0b0:	c6 45 fc 1c          	mov    BYTE PTR [ebp-0x4],0x1c
  4ed0b4:	e8 9e ab f1 ff       	call   0x407c57 ; ["call resolved=0x4816c0 "]
  4ed0b9:	8b 76 08             	mov    esi,DWORD PTR [esi+0x8]
  4ed0bc:	8b f8                	mov    edi,eax
  4ed0be:	6a 5c                	push   0x5c
  4ed0c0:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4ed0c5:	e8 9c b6 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4ed0ca:	83 c4 08             	add    esp,0x8
  4ed0cd:	85 c0                	test   eax,eax
  4ed0cf:	74 12                	je     0x4ed0e3
  4ed0d1:	6a 5c                	push   0x5c
  4ed0d3:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4ed0d8:	e8 89 b6 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4ed0dd:	83 c4 08             	add    esp,0x8
  4ed0e0:	40                   	inc    eax
  4ed0e1:	eb 05                	jmp    0x4ed0e8
  4ed0e3:	b8 88 de 6c 00       	mov    eax,0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4ed0e8:	57                   	push   edi
  4ed0e9:	56                   	push   esi
  4ed0ea:	68 24 e8 6c 00       	push   0x6ce824 ; ["BleGattClient::notifyPhoneCancel"]
  4ed0ef:	68 32 01 00 00       	push   0x132
  4ed0f4:	50                   	push   eax
  4ed0f5:	68 68 bf 6c 00       	push   0x6cbf68 ; ["[ConntctionModule][%s:%d][%s]: ble  connect::hresult_error 0x%08x message %s\n"]
  4ed0fa:	8d 45 2c             	lea    eax,[ebp+0x2c]
  4ed0fd:	c7 45 2c 04 00 00 00 	mov    DWORD PTR [ebp+0x2c],0x4
  4ed104:	50                   	push   eax
  4ed105:	8d 45 54             	lea    eax,[ebp+0x54]
  4ed108:	50                   	push   eax
  4ed109:	e8 fb 9e f1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4ed10e:	83 c4 20             	add    esp,0x20
  4ed111:	8d 4d 3c             	lea    ecx,[ebp+0x3c]
  4ed114:	e8 ea 68 f1 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  4ed119:	8d 4d 34             	lea    ecx,[ebp+0x34]
  4ed11c:	e8 6b 7b f1 ff       	call   0x404c8c ; ["call resolved=0x4721f0 "]
  4ed121:	8d 4d 54             	lea    ecx,[ebp+0x54]
  4ed124:	e8 da 68 f1 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  4ed129:	b8 63 d0 4e 00       	mov    eax,0x4ed063
  4ed12e:	c3                   	ret
  4ed12f:	6a 5c                	push   0x5c
  4ed131:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4ed136:	e8 2b b6 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4ed13b:	83 c4 08             	add    esp,0x8
  4ed13e:	85 c0                	test   eax,eax
  4ed140:	74 12                	je     0x4ed154
  4ed142:	6a 5c                	push   0x5c
  4ed144:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4ed149:	e8 18 b6 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4ed14e:	83 c4 08             	add    esp,0x8
  4ed151:	40                   	inc    eax
  4ed152:	eb 05                	jmp    0x4ed159
  4ed154:	b8 88 de 6c 00       	mov    eax,0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4ed159:	68 24 e8 6c 00       	push   0x6ce824 ; ["BleGattClient::notifyPhoneCancel"]
  4ed15e:	68 36 01 00 00       	push   0x136
  4ed163:	50                   	push   eax
  4ed164:	68 c8 bf 6c 00       	push   0x6cbfc8 ; ["[ConntctionModule][%s:%d][%s]: ble connect catch error!\n"]
  4ed169:	8d 45 2c             	lea    eax,[ebp+0x2c]
  4ed16c:	c7 45 2c 04 00 00 00 	mov    DWORD PTR [ebp+0x2c],0x4
  4ed173:	50                   	push   eax
  4ed174:	8d 45 3c             	lea    eax,[ebp+0x3c]
  4ed177:	50                   	push   eax
  4ed178:	e8 8c 9e f1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4ed17d:	83 c4 18             	add    esp,0x18
  4ed180:	8d 4d 3c             	lea    ecx,[ebp+0x3c]
  4ed183:	e8 7b 68 f1 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  4ed188:	b8 63 d0 4e 00       	mov    eax,0x4ed063
  4ed18d:	c3                   	ret
  4ed18e:	50                   	push   eax
  4ed18f:	e8 64 41 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4ed194:	e8 6f 4a f1 ff       	call   0x401c08 ; ["call resolved=0x4a4f60 "]
  4ed199:	50                   	push   eax
  4ed19a:	e8 59 41 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4ed19f:	50                   	push   eax
  4ed1a0:	e8 53 41 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4ed1a5:	50                   	push   eax
  4ed1a6:	e8 4d 41 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4ed1ab:	50                   	push   eax
  4ed1ac:	e8 47 41 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4ed1b1:	50                   	push   eax
  4ed1b2:	e8 41 41 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4ed1b7:	50                   	push   eax
  4ed1b8:	e8 3b 41 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4ed1bd:	50                   	push   eax
  4ed1be:	e8 35 41 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4ed1c3:	50                   	push   eax
  4ed1c4:	e8 2f 41 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4ed1c9:	e8 3a 4a f1 ff       	call   0x401c08 ; ["call resolved=0x4a4f60 "]
  4ed1ce:	50                   	push   eax
  4ed1cf:	e8 24 41 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4ed1d4:	50                   	push   eax
  4ed1d5:	e8 1e 41 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
