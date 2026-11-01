; vivo::Worker::connectSSDP; image base 0x400000; static annotation only
  483870:	55                   	push   ebp
  483871:	8d ac 24 c4 fe ff ff 	lea    ebp,[esp-0x13c]
  483878:	81 ec 3c 01 00 00    	sub    esp,0x13c
  48387e:	6a ff                	push   0xffffffff
  483880:	68 41 2c 67 00       	push   0x672c41
  483885:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  48388b:	50                   	push   eax
  48388c:	81 ec e4 00 00 00    	sub    esp,0xe4
  483892:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  483897:	33 c5                	xor    eax,ebp
  483899:	89 85 38 01 00 00    	mov    DWORD PTR [ebp+0x138],eax
  48389f:	53                   	push   ebx
  4838a0:	56                   	push   esi
  4838a1:	57                   	push   edi
  4838a2:	50                   	push   eax
  4838a3:	8d 45 f4             	lea    eax,[ebp-0xc]
  4838a6:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  4838ac:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  4838af:	8b bd 44 01 00 00    	mov    edi,DWORD PTR [ebp+0x144]
  4838b5:	b9 26 80 7a 00       	mov    ecx,0x7a8026
  4838ba:	89 7d c8             	mov    DWORD PTR [ebp-0x38],edi
  4838bd:	e8 2c 52 f8 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  4838c2:	33 c0                	xor    eax,eax
  4838c4:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4838c7:	66 8b 4f 04          	mov    cx,WORD PTR [edi+0x4]
  4838cb:	66 89 4d d2          	mov    WORD PTR [ebp-0x2e],cx
  4838cf:	8d 51 01             	lea    edx,[ecx+0x1]
  4838d2:	66 83 fa 04          	cmp    dx,0x4
  4838d6:	0f 87 35 27 00 00    	ja     0x486011
  4838dc:	66 89 4d d2          	mov    WORD PTR [ebp-0x2e],cx
  4838e0:	66 83 f9 02          	cmp    cx,0x2
  4838e4:	74 0c                	je     0x4838f2
  4838e6:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  4838ec:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4838ef:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4838f2:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  4838f8:	0f bf c2             	movsx  eax,dx
  4838fb:	ff 24 85 38 60 48 00 	jmp    DWORD PTR [eax*4+0x486038]
  483902:	8b 97 31 05 00 00    	mov    edx,DWORD PTR [edi+0x531]
  483908:	32 c0                	xor    al,al
  48390a:	8d 8a 85 00 00 00    	lea    ecx,[edx+0x85]
  483910:	86 01                	xchg   BYTE PTR [ecx],al
  483912:	8d 8a 86 00 00 00    	lea    ecx,[edx+0x86]
  483918:	32 c0                	xor    al,al
  48391a:	86 01                	xchg   BYTE PTR [ecx],al
  48391c:	6a 00                	push   0x0
  48391e:	8d 4f 08             	lea    ecx,[edi+0x8]
  483921:	c7 82 b0 06 00 00 ff 	mov    DWORD PTR [edx+0x6b0],0xffffffff
  48392b:	e8 92 0f f8 ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  483930:	83 ec 10             	sub    esp,0x10
  483933:	8b c4                	mov    eax,esp
  483935:	89 65 e8             	mov    DWORD PTR [ebp-0x18],esp
  483938:	c6 00 05             	mov    BYTE PTR [eax],0x5
  48393b:	c7 40 08 00 00 00 00 	mov    DWORD PTR [eax+0x8],0x0
  483942:	c7 40 0c 00 00 00 00 	mov    DWORD PTR [eax+0xc],0x0
  483949:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  48394d:	8d 4f 08             	lea    ecx,[edi+0x8]
  483950:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  483953:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  483959:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  48395c:	68 f4 13 6c 00       	push   0x6c13f4 ; ["error"]
  483961:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  483964:	e8 75 fd f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  483969:	8b c8                	mov    ecx,eax
  48396b:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  48396f:	e8 11 0b f8 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  483974:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  48397a:	83 ec 10             	sub    esp,0x10
  48397d:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  483980:	8b cc                	mov    ecx,esp
  483982:	89 65 e8             	mov    DWORD PTR [ebp-0x18],esp
  483985:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  483988:	68 02 1c 6c 00       	push   0x6c1c02
  48398d:	e8 17 e7 f7 ff       	call   0x4020a9 ; ["call resolved=0x43d1a0 "]
  483992:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  483996:	8d 4f 08             	lea    ecx,[edi+0x8]
  483999:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  48399c:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  4839a2:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4839a5:	68 20 69 6c 00       	push   0x6c6920 ; ["error_message"]
  4839aa:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4839ad:	e8 2c fd f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  4839b2:	8b c8                	mov    ecx,eax
  4839b4:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  4839b8:	e8 c8 0a f8 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  4839bd:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  4839c3:	83 ec 10             	sub    esp,0x10
  4839c6:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4839c9:	8b cc                	mov    ecx,esp
  4839cb:	89 65 e8             	mov    DWORD PTR [ebp-0x18],esp
  4839ce:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4839d1:	68 02 1c 6c 00       	push   0x6c1c02
  4839d6:	e8 ce e6 f7 ff       	call   0x4020a9 ; ["call resolved=0x43d1a0 "]
  4839db:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  4839df:	8d 4f 08             	lea    ecx,[edi+0x8]
  4839e2:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4839e5:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  4839eb:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4839ee:	68 a0 6a 6c 00       	push   0x6c6aa0 ; ["connection_steps"]
  4839f3:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4839f6:	e8 e3 fc f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  4839fb:	8b c8                	mov    ecx,eax
  4839fd:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  483a01:	e8 7f 0a f8 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  483a06:	8b 87 31 05 00 00    	mov    eax,DWORD PTR [edi+0x531]
  483a0c:	83 ec 18             	sub    esp,0x18
  483a0f:	8b cc                	mov    ecx,esp
  483a11:	8d b0 80 07 00 00    	lea    esi,[eax+0x780]
  483a17:	8d 98 18 0c 00 00    	lea    ebx,[eax+0xc18]
  483a1d:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  483a23:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  483a26:	68 28 18 79 00       	push   0x791828
  483a2b:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  483a2e:	e8 58 22 f8 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  483a33:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  483a39:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  483a3c:	8b ce                	mov    ecx,esi
  483a3e:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  483a41:	8d 47 18             	lea    eax,[edi+0x18]
  483a44:	53                   	push   ebx
  483a45:	50                   	push   eax
  483a46:	e8 60 43 f8 ff       	call   0x407dab ; ["call resolved=0x617dd0 Step::getConnectResult"]
  483a4b:	8b f0                	mov    esi,eax
  483a4d:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  483a51:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  483a54:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  483a5a:	8b 97 31 05 00 00    	mov    edx,DWORD PTR [edi+0x531]
  483a60:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  483a66:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  483a69:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  483a6c:	8d 82 18 0c 00 00    	lea    eax,[edx+0xc18]
  483a72:	50                   	push   eax
  483a73:	8d 47 30             	lea    eax,[edi+0x30]
  483a76:	8d 8a 80 07 00 00    	lea    ecx,[edx+0x780]
  483a7c:	50                   	push   eax
  483a7d:	e8 b9 58 f8 ff       	call   0x40933b ; ["call resolved=0x617cc0 "]
  483a82:	8b d0                	mov    edx,eax
  483a84:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  483a88:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  483a8b:	8b c1                	mov    eax,ecx
  483a8d:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  483a93:	8d 4f 48             	lea    ecx,[edi+0x48]
  483a96:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  483a99:	56                   	push   esi
  483a9a:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  483a9d:	0f b6 87 f8 04 00 00 	movzx  eax,BYTE PTR [edi+0x4f8]
  483aa4:	52                   	push   edx
  483aa5:	50                   	push   eax
  483aa6:	e8 d0 59 f8 ff       	call   0x40947b ; ["call resolved=0x46a550 "]
  483aab:	c6 45 fc 08          	mov    BYTE PTR [ebp-0x4],0x8
  483aaf:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  483ab2:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  483ab8:	8b 47 44             	mov    eax,DWORD PTR [edi+0x44]
  483abb:	89 85 1c 01 00 00    	mov    DWORD PTR [ebp+0x11c],eax
  483ac1:	83 f8 10             	cmp    eax,0x10
  483ac4:	72 49                	jb     0x483b0f
  483ac6:	8b 47 44             	mov    eax,DWORD PTR [edi+0x44]
  483ac9:	89 85 1c 01 00 00    	mov    DWORD PTR [ebp+0x11c],eax
  483acf:	8b 57 30             	mov    edx,DWORD PTR [edi+0x30]
  483ad2:	89 95 08 01 00 00    	mov    DWORD PTR [ebp+0x108],edx
  483ad8:	8d 48 01             	lea    ecx,[eax+0x1]
  483adb:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  483ae1:	72 22                	jb     0x483b05
  483ae3:	8b 47 30             	mov    eax,DWORD PTR [edi+0x30]
  483ae6:	83 c1 23             	add    ecx,0x23
  483ae9:	89 85 08 01 00 00    	mov    DWORD PTR [ebp+0x108],eax
  483aef:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  483af2:	8b 47 30             	mov    eax,DWORD PTR [edi+0x30]
  483af5:	89 85 08 01 00 00    	mov    DWORD PTR [ebp+0x108],eax
  483afb:	2b c2                	sub    eax,edx
  483afd:	83 c0 fc             	add    eax,0xfffffffc
  483b00:	83 f8 1f             	cmp    eax,0x1f
  483b03:	77 76                	ja     0x483b7b
  483b05:	51                   	push   ecx
  483b06:	52                   	push   edx
  483b07:	e8 8e e5 f7 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  483b0c:	83 c4 08             	add    esp,0x8
  483b0f:	c7 47 40 00 00 00 00 	mov    DWORD PTR [edi+0x40],0x0
  483b16:	c7 47 44 0f 00 00 00 	mov    DWORD PTR [edi+0x44],0xf
  483b1d:	c6 47 30 00          	mov    BYTE PTR [edi+0x30],0x0
  483b21:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  483b25:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  483b28:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  483b2e:	8b 47 2c             	mov    eax,DWORD PTR [edi+0x2c]
  483b31:	89 85 04 01 00 00    	mov    DWORD PTR [ebp+0x104],eax
  483b37:	83 f8 10             	cmp    eax,0x10
  483b3a:	72 4f                	jb     0x483b8b
  483b3c:	8b 47 2c             	mov    eax,DWORD PTR [edi+0x2c]
  483b3f:	89 85 04 01 00 00    	mov    DWORD PTR [ebp+0x104],eax
  483b45:	8b 57 18             	mov    edx,DWORD PTR [edi+0x18]
  483b48:	89 95 f0 00 00 00    	mov    DWORD PTR [ebp+0xf0],edx
  483b4e:	8d 48 01             	lea    ecx,[eax+0x1]
  483b51:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  483b57:	72 28                	jb     0x483b81
  483b59:	8b 47 18             	mov    eax,DWORD PTR [edi+0x18]
  483b5c:	83 c1 23             	add    ecx,0x23
  483b5f:	89 85 f0 00 00 00    	mov    DWORD PTR [ebp+0xf0],eax
  483b65:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  483b68:	8b 47 18             	mov    eax,DWORD PTR [edi+0x18]
  483b6b:	89 85 f0 00 00 00    	mov    DWORD PTR [ebp+0xf0],eax
  483b71:	2b c2                	sub    eax,edx
  483b73:	83 c0 fc             	add    eax,0xfffffffc
  483b76:	83 f8 1f             	cmp    eax,0x1f
  483b79:	76 06                	jbe    0x483b81
  483b7b:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  483b81:	51                   	push   ecx
  483b82:	52                   	push   edx
  483b83:	e8 12 e5 f7 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  483b88:	83 c4 08             	add    esp,0x8
  483b8b:	8b 97 31 05 00 00    	mov    edx,DWORD PTR [edi+0x531]
  483b91:	c7 47 28 00 00 00 00 	mov    DWORD PTR [edi+0x28],0x0
  483b98:	c7 47 2c 0f 00 00 00 	mov    DWORD PTR [edi+0x2c],0xf
  483b9f:	c6 47 18 00          	mov    BYTE PTR [edi+0x18],0x0
  483ba3:	c7 47 60 00 00 00 00 	mov    DWORD PTR [edi+0x60],0x0
  483baa:	8d 8a 80 07 00 00    	lea    ecx,[edx+0x780]
  483bb0:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  483bb6:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  483bb9:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  483bbc:	8d 82 70 0c 00 00    	lea    eax,[edx+0xc70]
  483bc2:	50                   	push   eax
  483bc3:	8d 47 64             	lea    eax,[edi+0x64]
  483bc6:	50                   	push   eax
  483bc7:	e8 6f 57 f8 ff       	call   0x40933b ; ["call resolved=0x617cc0 "]
  483bcc:	8b d0                	mov    edx,eax
  483bce:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  483bd2:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  483bd5:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  483bdb:	83 7a 14 10          	cmp    DWORD PTR [edx+0x14],0x10
  483bdf:	8b 72 10             	mov    esi,DWORD PTR [edx+0x10]
  483be2:	72 02                	jb     0x483be6
  483be4:	8b 12                	mov    edx,DWORD PTR [edx]
  483be6:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  483bec:	8d 4f 48             	lea    ecx,[edi+0x48]
  483bef:	56                   	push   esi
  483bf0:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  483bf3:	52                   	push   edx
  483bf4:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  483bf7:	e8 da fd f7 ff       	call   0x4039d6 ; ["call resolved=0x480650 "]
  483bfc:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  483c00:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  483c03:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  483c09:	8b 47 78             	mov    eax,DWORD PTR [edi+0x78]
  483c0c:	89 85 ec 00 00 00    	mov    DWORD PTR [ebp+0xec],eax
  483c12:	83 f8 10             	cmp    eax,0x10
  483c15:	72 4f                	jb     0x483c66
  483c17:	8b 47 78             	mov    eax,DWORD PTR [edi+0x78]
  483c1a:	89 85 ec 00 00 00    	mov    DWORD PTR [ebp+0xec],eax
  483c20:	8b 57 64             	mov    edx,DWORD PTR [edi+0x64]
  483c23:	89 95 d8 00 00 00    	mov    DWORD PTR [ebp+0xd8],edx
  483c29:	8d 48 01             	lea    ecx,[eax+0x1]
  483c2c:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  483c32:	72 28                	jb     0x483c5c
  483c34:	8b 47 64             	mov    eax,DWORD PTR [edi+0x64]
  483c37:	83 c1 23             	add    ecx,0x23
  483c3a:	89 85 d8 00 00 00    	mov    DWORD PTR [ebp+0xd8],eax
  483c40:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  483c43:	8b 47 64             	mov    eax,DWORD PTR [edi+0x64]
  483c46:	89 85 d8 00 00 00    	mov    DWORD PTR [ebp+0xd8],eax
  483c4c:	2b c2                	sub    eax,edx
  483c4e:	83 c0 fc             	add    eax,0xfffffffc
  483c51:	83 f8 1f             	cmp    eax,0x1f
  483c54:	76 06                	jbe    0x483c5c
  483c56:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  483c5c:	51                   	push   ecx
  483c5d:	52                   	push   edx
  483c5e:	e8 37 e4 f7 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  483c63:	83 c4 08             	add    esp,0x8
  483c66:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  483c6c:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  483c6f:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  483c72:	e8 9a 03 f8 ff       	call   0x404011 ; ["call resolved=0x492cc0 "]
  483c77:	8b 08                	mov    ecx,DWORD PTR [eax]
  483c79:	8b 51 04             	mov    edx,DWORD PTR [ecx+0x4]
  483c7c:	8b 8f 2c 05 00 00    	mov    ecx,DWORD PTR [edi+0x52c]
  483c82:	89 4d ec             	mov    DWORD PTR [ebp-0x14],ecx
  483c85:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  483c88:	8d 4f 60             	lea    ecx,[edi+0x60]
  483c8b:	51                   	push   ecx
  483c8c:	ff b7 39 05 00 00    	push   DWORD PTR [edi+0x539]
  483c92:	8b c8                	mov    ecx,eax
  483c94:	ff d2                	call   edx
  483c96:	84 c0                	test   al,al
  483c98:	0f 85 06 04 00 00    	jne    0x4840a4
  483c9e:	8b b7 39 05 00 00    	mov    esi,DWORD PTR [edi+0x539]
  483ca4:	83 7e 14 10          	cmp    DWORD PTR [esi+0x14],0x10
  483ca8:	72 02                	jb     0x483cac
  483caa:	8b 36                	mov    esi,DWORD PTR [esi]
  483cac:	6a 5c                	push   0x5c
  483cae:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  483cb3:	e8 ae 4a 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  483cb8:	83 c4 08             	add    esp,0x8
  483cbb:	85 c0                	test   eax,eax
  483cbd:	74 14                	je     0x483cd3
  483cbf:	6a 5c                	push   0x5c
  483cc1:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  483cc6:	e8 9b 4a 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  483ccb:	83 c4 08             	add    esp,0x8
  483cce:	8d 50 01             	lea    edx,[eax+0x1]
  483cd1:	eb 05                	jmp    0x483cd8
  483cd3:	ba d4 6a 6c 00       	mov    edx,0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  483cd8:	56                   	push   esi
  483cd9:	68 b4 6a 6c 00       	push   0x6c6ab4 ; ["vivo::Worker::connectSSDP"]
  483cde:	68 95 00 00 00       	push   0x95
  483ce3:	52                   	push   edx
  483ce4:	8d 4f 7c             	lea    ecx,[edi+0x7c]
  483ce7:	c7 01 02 00 00 00    	mov    DWORD PTR [ecx],0x2
  483ced:	8d 9f 80 00 00 00    	lea    ebx,[edi+0x80]
  483cf3:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  483cf9:	68 10 6b 6c 00       	push   0x6c6b10 ; ["[ConntctionModule][% s:% d][% s]:  address_ % s  findSSDPDevice error not find \n"]
  483cfe:	51                   	push   ecx
  483cff:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  483d02:	53                   	push   ebx
  483d03:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  483d06:	e8 fe 32 f8 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  483d0b:	83 c4 1c             	add    esp,0x1c
  483d0e:	83 ec 10             	sub    esp,0x10
  483d11:	8b c4                	mov    eax,esp
  483d13:	89 65 e8             	mov    DWORD PTR [ebp-0x18],esp
  483d16:	c6 00 05             	mov    BYTE PTR [eax],0x5
  483d19:	c7 40 08 ee d8 ff ff 	mov    DWORD PTR [eax+0x8],0xffffd8ee
  483d20:	c7 40 0c ff ff ff ff 	mov    DWORD PTR [eax+0xc],0xffffffff
  483d27:	c6 45 fc 0c          	mov    BYTE PTR [ebp-0x4],0xc
  483d2b:	8d 4f 08             	lea    ecx,[edi+0x8]
  483d2e:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  483d31:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  483d37:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  483d3a:	68 f4 13 6c 00       	push   0x6c13f4 ; ["error"]
  483d3f:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  483d42:	e8 97 f9 f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  483d47:	8b c8                	mov    ecx,eax
  483d49:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  483d4d:	e8 33 07 f8 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  483d52:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  483d58:	83 ec 10             	sub    esp,0x10
  483d5b:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  483d5e:	8b cc                	mov    ecx,esp
  483d60:	89 65 e8             	mov    DWORD PTR [ebp-0x18],esp
  483d63:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  483d66:	53                   	push   ebx
  483d67:	e8 a4 0d f8 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  483d6c:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  483d70:	8d 4f 08             	lea    ecx,[edi+0x8]
  483d73:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  483d76:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  483d7c:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  483d7f:	68 20 69 6c 00       	push   0x6c6920 ; ["error_message"]
  483d84:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  483d87:	e8 52 f9 f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  483d8c:	8b c8                	mov    ecx,eax
  483d8e:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  483d92:	e8 ee 06 f8 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  483d97:	8b 87 31 05 00 00    	mov    eax,DWORD PTR [edi+0x531]
  483d9d:	83 ec 18             	sub    esp,0x18
  483da0:	8b cc                	mov    ecx,esp
  483da2:	8d 98 80 07 00 00    	lea    ebx,[eax+0x780]
  483da8:	05 70 0c 00 00       	add    eax,0xc70
  483dad:	89 45 e4             	mov    DWORD PTR [ebp-0x1c],eax
  483db0:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  483db6:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  483db9:	68 10 18 79 00       	push   0x791810
  483dbe:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  483dc1:	e8 c5 1e f8 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  483dc6:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  483dcc:	8b cb                	mov    ecx,ebx
  483dce:	ff 75 e4             	push   DWORD PTR [ebp-0x1c]
  483dd1:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  483dd4:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  483dd7:	8d 87 98 00 00 00    	lea    eax,[edi+0x98]
  483ddd:	50                   	push   eax
  483dde:	e8 c8 3f f8 ff       	call   0x407dab ; ["call resolved=0x617dd0 Step::getConnectResult"]
  483de3:	8b d0                	mov    edx,eax
  483de5:	c6 45 fc 0e          	mov    BYTE PTR [ebp-0x4],0xe
  483de9:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  483dec:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  483df2:	83 7a 14 10          	cmp    DWORD PTR [edx+0x14],0x10
  483df6:	8b 4a 10             	mov    ecx,DWORD PTR [edx+0x10]
  483df9:	72 02                	jb     0x483dfd
  483dfb:	8b 12                	mov    edx,DWORD PTR [edx]
  483dfd:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  483e03:	8d 5f 48             	lea    ebx,[edi+0x48]
  483e06:	51                   	push   ecx
  483e07:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  483e0a:	8b cb                	mov    ecx,ebx
  483e0c:	52                   	push   edx
  483e0d:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  483e10:	e8 c1 fb f7 ff       	call   0x4039d6 ; ["call resolved=0x480650 "]
  483e15:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  483e19:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  483e1c:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  483e22:	8b 87 ac 00 00 00    	mov    eax,DWORD PTR [edi+0xac]
  483e28:	89 85 d4 00 00 00    	mov    DWORD PTR [ebp+0xd4],eax
  483e2e:	83 f8 10             	cmp    eax,0x10
  483e31:	72 5b                	jb     0x483e8e
  483e33:	8b 87 ac 00 00 00    	mov    eax,DWORD PTR [edi+0xac]
  483e39:	89 85 d4 00 00 00    	mov    DWORD PTR [ebp+0xd4],eax
  483e3f:	8b 97 98 00 00 00    	mov    edx,DWORD PTR [edi+0x98]
  483e45:	89 95 c0 00 00 00    	mov    DWORD PTR [ebp+0xc0],edx
  483e4b:	8d 48 01             	lea    ecx,[eax+0x1]
  483e4e:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  483e54:	72 2e                	jb     0x483e84
  483e56:	8b 87 98 00 00 00    	mov    eax,DWORD PTR [edi+0x98]
  483e5c:	83 c1 23             	add    ecx,0x23
  483e5f:	89 85 c0 00 00 00    	mov    DWORD PTR [ebp+0xc0],eax
  483e65:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  483e68:	8b 87 98 00 00 00    	mov    eax,DWORD PTR [edi+0x98]
  483e6e:	89 85 c0 00 00 00    	mov    DWORD PTR [ebp+0xc0],eax
  483e74:	2b c2                	sub    eax,edx
  483e76:	83 c0 fc             	add    eax,0xfffffffc
  483e79:	83 f8 1f             	cmp    eax,0x1f
  483e7c:	76 06                	jbe    0x483e84
  483e7e:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  483e84:	51                   	push   ecx
  483e85:	52                   	push   edx
  483e86:	e8 0f e2 f7 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  483e8b:	83 c4 08             	add    esp,0x8
  483e8e:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  483e94:	83 ec 10             	sub    esp,0x10
  483e97:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  483e9a:	8b cc                	mov    ecx,esp
  483e9c:	89 65 e8             	mov    DWORD PTR [ebp-0x18],esp
  483e9f:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  483ea2:	53                   	push   ebx
  483ea3:	e8 68 0c f8 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  483ea8:	c6 45 fc 0f          	mov    BYTE PTR [ebp-0x4],0xf
  483eac:	8d 4f 08             	lea    ecx,[edi+0x8]
  483eaf:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  483eb2:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  483eb8:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  483ebb:	68 a0 6a 6c 00       	push   0x6c6aa0 ; ["connection_steps"]
  483ec0:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  483ec3:	e8 16 f8 f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  483ec8:	8b c8                	mov    ecx,eax
  483eca:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  483ece:	e8 b2 05 f8 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  483ed3:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  483ed9:	8d 4f 08             	lea    ecx,[edi+0x8]
  483edc:	6a 00                	push   0x0
  483ede:	6a 00                	push   0x0
  483ee0:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  483ee3:	6a 20                	push   0x20
  483ee5:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  483ee8:	8d 87 b0 00 00 00    	lea    eax,[edi+0xb0]
  483eee:	6a ff                	push   0xffffffff
  483ef0:	50                   	push   eax
  483ef1:	e8 28 49 f8 ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  483ef6:	c6 45 fc 10          	mov    BYTE PTR [ebp-0x4],0x10
  483efa:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  483efd:	50                   	push   eax
  483efe:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  483f04:	8d 87 c8 00 00 00    	lea    eax,[edi+0xc8]
  483f0a:	89 4d ec             	mov    DWORD PTR [ebp-0x14],ecx
  483f0d:	50                   	push   eax
  483f0e:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  483f11:	e8 a6 2d f8 ff       	call   0x406cbc ; ["call resolved=0x458470 "]
  483f16:	8d 77 fc             	lea    esi,[edi-0x4]
  483f19:	83 c4 08             	add    esp,0x8
  483f1c:	3b f0                	cmp    esi,eax
  483f1e:	74 16                	je     0x483f36
  483f20:	8b 18                	mov    ebx,DWORD PTR [eax]
  483f22:	c7 00 00 00 00 00    	mov    DWORD PTR [eax],0x0
  483f28:	8b 06                	mov    eax,DWORD PTR [esi]
  483f2a:	85 c0                	test   eax,eax
  483f2c:	74 06                	je     0x483f34
  483f2e:	50                   	push   eax
  483f2f:	e8 4a 4b 1e 00       	call   0x668a7e ; ["call resolved=0x668a7e "]
  483f34:	89 1e                	mov    DWORD PTR [esi],ebx
  483f36:	83 bf c8 00 00 00 00 	cmp    DWORD PTR [edi+0xc8],0x0
  483f3d:	74 19                	je     0x483f58
  483f3f:	8b 87 c8 00 00 00    	mov    eax,DWORD PTR [edi+0xc8]
  483f45:	50                   	push   eax
  483f46:	89 45 c4             	mov    DWORD PTR [ebp-0x3c],eax
  483f49:	e8 30 4b 1e 00       	call   0x668a7e ; ["call resolved=0x668a7e "]
  483f4e:	c7 87 c8 00 00 00 00 	mov    DWORD PTR [edi+0xc8],0x0
  483f58:	8b 87 c4 00 00 00    	mov    eax,DWORD PTR [edi+0xc4]
  483f5e:	89 85 bc 00 00 00    	mov    DWORD PTR [ebp+0xbc],eax
  483f64:	83 f8 10             	cmp    eax,0x10
  483f67:	72 5b                	jb     0x483fc4
  483f69:	8b 87 c4 00 00 00    	mov    eax,DWORD PTR [edi+0xc4]
  483f6f:	89 85 bc 00 00 00    	mov    DWORD PTR [ebp+0xbc],eax
  483f75:	8b 97 b0 00 00 00    	mov    edx,DWORD PTR [edi+0xb0]
  483f7b:	89 95 a8 00 00 00    	mov    DWORD PTR [ebp+0xa8],edx
  483f81:	8d 48 01             	lea    ecx,[eax+0x1]
  483f84:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  483f8a:	72 2e                	jb     0x483fba
  483f8c:	8b 87 b0 00 00 00    	mov    eax,DWORD PTR [edi+0xb0]
  483f92:	83 c1 23             	add    ecx,0x23
  483f95:	89 85 a8 00 00 00    	mov    DWORD PTR [ebp+0xa8],eax
  483f9b:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  483f9e:	8b 87 b0 00 00 00    	mov    eax,DWORD PTR [edi+0xb0]
  483fa4:	89 85 a8 00 00 00    	mov    DWORD PTR [ebp+0xa8],eax
  483faa:	2b c2                	sub    eax,edx
  483fac:	83 c0 fc             	add    eax,0xfffffffc
  483faf:	83 f8 1f             	cmp    eax,0x1f
  483fb2:	76 06                	jbe    0x483fba
  483fb4:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  483fba:	51                   	push   ecx
  483fbb:	52                   	push   edx
  483fbc:	e8 d9 e0 f7 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  483fc1:	83 c4 08             	add    esp,0x8
  483fc4:	8b 87 94 00 00 00    	mov    eax,DWORD PTR [edi+0x94]
  483fca:	89 85 a4 00 00 00    	mov    DWORD PTR [ebp+0xa4],eax
  483fd0:	83 f8 10             	cmp    eax,0x10
  483fd3:	72 55                	jb     0x48402a
  483fd5:	8b 87 94 00 00 00    	mov    eax,DWORD PTR [edi+0x94]
  483fdb:	89 85 a4 00 00 00    	mov    DWORD PTR [ebp+0xa4],eax
  483fe1:	8b 97 80 00 00 00    	mov    edx,DWORD PTR [edi+0x80]
  483fe7:	89 95 90 00 00 00    	mov    DWORD PTR [ebp+0x90],edx
  483fed:	8d 48 01             	lea    ecx,[eax+0x1]
  483ff0:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  483ff6:	72 28                	jb     0x484020
  483ff8:	8b 87 80 00 00 00    	mov    eax,DWORD PTR [edi+0x80]
  483ffe:	83 c1 23             	add    ecx,0x23
  484001:	89 85 90 00 00 00    	mov    DWORD PTR [ebp+0x90],eax
  484007:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  48400a:	8b 87 80 00 00 00    	mov    eax,DWORD PTR [edi+0x80]
  484010:	89 85 90 00 00 00    	mov    DWORD PTR [ebp+0x90],eax
  484016:	2b c2                	sub    eax,edx
  484018:	83 c0 fc             	add    eax,0xfffffffc
  48401b:	83 f8 1f             	cmp    eax,0x1f
  48401e:	77 7e                	ja     0x48409e
  484020:	51                   	push   ecx
  484021:	52                   	push   edx
  484022:	e8 73 e0 f7 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  484027:	83 c4 08             	add    esp,0x8
  48402a:	8b 47 5c             	mov    eax,DWORD PTR [edi+0x5c]
  48402d:	c7 87 90 00 00 00 00 	mov    DWORD PTR [edi+0x90],0x0
  484037:	c7 87 94 00 00 00 0f 	mov    DWORD PTR [edi+0x94],0xf
  484041:	c6 87 80 00 00 00 00 	mov    BYTE PTR [edi+0x80],0x0
  484048:	89 85 34 01 00 00    	mov    DWORD PTR [ebp+0x134],eax
  48404e:	83 f8 10             	cmp    eax,0x10
  484051:	0f 82 49 04 00 00    	jb     0x4844a0
  484057:	8b 47 5c             	mov    eax,DWORD PTR [edi+0x5c]
  48405a:	89 85 34 01 00 00    	mov    DWORD PTR [ebp+0x134],eax
  484060:	8b 57 48             	mov    edx,DWORD PTR [edi+0x48]
  484063:	89 95 20 01 00 00    	mov    DWORD PTR [ebp+0x120],edx
  484069:	8d 48 01             	lea    ecx,[eax+0x1]
  48406c:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  484072:	0f 82 1e 04 00 00    	jb     0x484496
  484078:	8b 47 48             	mov    eax,DWORD PTR [edi+0x48]
  48407b:	83 c1 23             	add    ecx,0x23
  48407e:	89 85 20 01 00 00    	mov    DWORD PTR [ebp+0x120],eax
  484084:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  484087:	8b 47 48             	mov    eax,DWORD PTR [edi+0x48]
  48408a:	89 85 20 01 00 00    	mov    DWORD PTR [ebp+0x120],eax
  484090:	2b c2                	sub    eax,edx
  484092:	83 c0 fc             	add    eax,0xfffffffc
  484095:	83 f8 1f             	cmp    eax,0x1f
  484098:	0f 86 f8 03 00 00    	jbe    0x484496
  48409e:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  4840a4:	8b 47 60             	mov    eax,DWORD PTR [edi+0x60]
  4840a7:	89 45 cc             	mov    DWORD PTR [ebp-0x34],eax
  4840aa:	05 90 00 00 00       	add    eax,0x90
  4840af:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  4840b3:	8b 48 10             	mov    ecx,DWORD PTR [eax+0x10]
  4840b6:	72 02                	jb     0x4840ba
  4840b8:	8b 00                	mov    eax,DWORD PTR [eax]
  4840ba:	83 f9 05             	cmp    ecx,0x5
  4840bd:	75 17                	jne    0x4840d6
  4840bf:	51                   	push   ecx
  4840c0:	68 f4 4d 6c 00       	push   0x6c4df4 ; ["phone"]
  4840c5:	50                   	push   eax
  4840c6:	e8 f2 07 f8 ff       	call   0x4048bd ; ["call resolved=0x482fc0 "]
  4840cb:	83 c4 0c             	add    esp,0xc
  4840ce:	85 c0                	test   eax,eax
  4840d0:	75 04                	jne    0x4840d6
  4840d2:	33 c9                	xor    ecx,ecx
  4840d4:	eb 05                	jmp    0x4840db
  4840d6:	b9 01 00 00 00       	mov    ecx,0x1
  4840db:	8b 97 31 05 00 00    	mov    edx,DWORD PTR [edi+0x531]
  4840e1:	8d 82 78 07 00 00    	lea    eax,[edx+0x778]
  4840e7:	87 08                	xchg   DWORD PTR [eax],ecx
  4840e9:	8a 82 85 00 00 00    	mov    al,BYTE PTR [edx+0x85]
  4840ef:	90                   	nop
  4840f0:	84 c0                	test   al,al
  4840f2:	0f 84 d9 03 00 00    	je     0x4844d1
  4840f8:	6a 5c                	push   0x5c
  4840fa:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  4840ff:	e8 62 46 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  484104:	83 c4 08             	add    esp,0x8
  484107:	85 c0                	test   eax,eax
  484109:	74 14                	je     0x48411f
  48410b:	6a 5c                	push   0x5c
  48410d:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  484112:	e8 4f 46 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  484117:	83 c4 08             	add    esp,0x8
  48411a:	8d 50 01             	lea    edx,[eax+0x1]
  48411d:	eb 05                	jmp    0x484124
  48411f:	ba d4 6a 6c 00       	mov    edx,0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  484124:	68 b4 6a 6c 00       	push   0x6c6ab4 ; ["vivo::Worker::connectSSDP"]
  484129:	68 a6 00 00 00       	push   0xa6
  48412e:	8d 8f cc 00 00 00    	lea    ecx,[edi+0xcc]
  484134:	c7 01 02 00 00 00    	mov    DWORD PTR [ecx],0x2
  48413a:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  484140:	52                   	push   edx
  484141:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484144:	68 74 6b 6c 00       	push   0x6c6b74 ; ["[ConntctionModule][%s:%d][%s]: cancel before initTcp \n"]
  484149:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  48414c:	8d 87 d0 00 00 00    	lea    eax,[edi+0xd0]
  484152:	51                   	push   ecx
  484153:	50                   	push   eax
  484154:	e8 b0 2e f8 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  484159:	8b 87 e4 00 00 00    	mov    eax,DWORD PTR [edi+0xe4]
  48415f:	83 c4 18             	add    esp,0x18
  484162:	89 85 8c 00 00 00    	mov    DWORD PTR [ebp+0x8c],eax
  484168:	83 f8 10             	cmp    eax,0x10
  48416b:	72 50                	jb     0x4841bd
  48416d:	8b 87 e4 00 00 00    	mov    eax,DWORD PTR [edi+0xe4]
  484173:	89 85 8c 00 00 00    	mov    DWORD PTR [ebp+0x8c],eax
  484179:	8b 97 d0 00 00 00    	mov    edx,DWORD PTR [edi+0xd0]
  48417f:	89 55 78             	mov    DWORD PTR [ebp+0x78],edx
  484182:	8d 48 01             	lea    ecx,[eax+0x1]
  484185:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  48418b:	72 26                	jb     0x4841b3
  48418d:	8b 87 d0 00 00 00    	mov    eax,DWORD PTR [edi+0xd0]
  484193:	83 c1 23             	add    ecx,0x23
  484196:	89 45 78             	mov    DWORD PTR [ebp+0x78],eax
  484199:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  48419c:	8b 87 d0 00 00 00    	mov    eax,DWORD PTR [edi+0xd0]
  4841a2:	89 45 78             	mov    DWORD PTR [ebp+0x78],eax
  4841a5:	2b c2                	sub    eax,edx
  4841a7:	83 c0 fc             	add    eax,0xfffffffc
  4841aa:	83 f8 1f             	cmp    eax,0x1f
  4841ad:	0f 87 ea 0e 00 00    	ja     0x48509d
  4841b3:	51                   	push   ecx
  4841b4:	52                   	push   edx
  4841b5:	e8 e0 de f7 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4841ba:	83 c4 08             	add    esp,0x8
  4841bd:	83 ec 10             	sub    esp,0x10
  4841c0:	8b c4                	mov    eax,esp
  4841c2:	89 65 e8             	mov    DWORD PTR [ebp-0x18],esp
  4841c5:	c6 00 05             	mov    BYTE PTR [eax],0x5
  4841c8:	c7 40 08 eb d8 ff ff 	mov    DWORD PTR [eax+0x8],0xffffd8eb
  4841cf:	c7 40 0c ff ff ff ff 	mov    DWORD PTR [eax+0xc],0xffffffff
  4841d6:	c6 45 fc 11          	mov    BYTE PTR [ebp-0x4],0x11
  4841da:	8d 4f 08             	lea    ecx,[edi+0x8]
  4841dd:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4841e0:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  4841e6:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4841e9:	68 f4 13 6c 00       	push   0x6c13f4 ; ["error"]
  4841ee:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4841f1:	e8 e8 f4 f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  4841f6:	8b c8                	mov    ecx,eax
  4841f8:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  4841fc:	e8 84 02 f8 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  484201:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  484207:	83 ec 10             	sub    esp,0x10
  48420a:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  48420d:	8b cc                	mov    ecx,esp
  48420f:	89 65 e8             	mov    DWORD PTR [ebp-0x18],esp
  484212:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484215:	68 ec 19 6c 00       	push   0x6c19ec ; ["CANCEL"]
  48421a:	e8 eb 3b f8 ff       	call   0x407e0a ; ["call resolved=0x43d3c0 "]
  48421f:	c6 45 fc 12          	mov    BYTE PTR [ebp-0x4],0x12
  484223:	8d 4f 08             	lea    ecx,[edi+0x8]
  484226:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  484229:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  48422f:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484232:	68 20 69 6c 00       	push   0x6c6920 ; ["error_message"]
  484237:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  48423a:	e8 9f f4 f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  48423f:	8b c8                	mov    ecx,eax
  484241:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  484245:	e8 3b 02 f8 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  48424a:	8b 87 31 05 00 00    	mov    eax,DWORD PTR [edi+0x531]
  484250:	83 ec 18             	sub    esp,0x18
  484253:	8b cc                	mov    ecx,esp
  484255:	8d 98 80 07 00 00    	lea    ebx,[eax+0x780]
  48425b:	05 70 0c 00 00       	add    eax,0xc70
  484260:	89 45 e4             	mov    DWORD PTR [ebp-0x1c],eax
  484263:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  484269:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  48426c:	68 c0 1a 79 00       	push   0x791ac0
  484271:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484274:	e8 12 1a f8 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  484279:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  48427f:	8b cb                	mov    ecx,ebx
  484281:	ff 75 e4             	push   DWORD PTR [ebp-0x1c]
  484284:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484287:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  48428a:	8d 87 e8 00 00 00    	lea    eax,[edi+0xe8]
  484290:	50                   	push   eax
  484291:	e8 15 3b f8 ff       	call   0x407dab ; ["call resolved=0x617dd0 Step::getConnectResult"]
  484296:	8b d0                	mov    edx,eax
  484298:	c6 45 fc 13          	mov    BYTE PTR [ebp-0x4],0x13
  48429c:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  48429f:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  4842a5:	83 7a 14 10          	cmp    DWORD PTR [edx+0x14],0x10
  4842a9:	8b 4a 10             	mov    ecx,DWORD PTR [edx+0x10]
  4842ac:	72 02                	jb     0x4842b0
  4842ae:	8b 12                	mov    edx,DWORD PTR [edx]
  4842b0:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  4842b6:	8d 5f 48             	lea    ebx,[edi+0x48]
  4842b9:	51                   	push   ecx
  4842ba:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4842bd:	8b cb                	mov    ecx,ebx
  4842bf:	52                   	push   edx
  4842c0:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4842c3:	e8 0e f7 f7 ff       	call   0x4039d6 ; ["call resolved=0x480650 "]
  4842c8:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  4842cc:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4842cf:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  4842d5:	8b 87 fc 00 00 00    	mov    eax,DWORD PTR [edi+0xfc]
  4842db:	89 45 74             	mov    DWORD PTR [ebp+0x74],eax
  4842de:	83 f8 10             	cmp    eax,0x10
  4842e1:	72 4f                	jb     0x484332
  4842e3:	8b 87 fc 00 00 00    	mov    eax,DWORD PTR [edi+0xfc]
  4842e9:	89 45 74             	mov    DWORD PTR [ebp+0x74],eax
  4842ec:	8b 97 e8 00 00 00    	mov    edx,DWORD PTR [edi+0xe8]
  4842f2:	89 55 60             	mov    DWORD PTR [ebp+0x60],edx
  4842f5:	8d 48 01             	lea    ecx,[eax+0x1]
  4842f8:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  4842fe:	72 28                	jb     0x484328
  484300:	8b 87 e8 00 00 00    	mov    eax,DWORD PTR [edi+0xe8]
  484306:	83 c1 23             	add    ecx,0x23
  484309:	89 45 60             	mov    DWORD PTR [ebp+0x60],eax
  48430c:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  48430f:	8b 87 e8 00 00 00    	mov    eax,DWORD PTR [edi+0xe8]
  484315:	89 45 60             	mov    DWORD PTR [ebp+0x60],eax
  484318:	2b c2                	sub    eax,edx
  48431a:	83 c0 fc             	add    eax,0xfffffffc
  48431d:	83 f8 1f             	cmp    eax,0x1f
  484320:	76 06                	jbe    0x484328
  484322:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  484328:	51                   	push   ecx
  484329:	52                   	push   edx
  48432a:	e8 6b dd f7 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  48432f:	83 c4 08             	add    esp,0x8
  484332:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  484338:	83 ec 10             	sub    esp,0x10
  48433b:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  48433e:	8b cc                	mov    ecx,esp
  484340:	89 65 e8             	mov    DWORD PTR [ebp-0x18],esp
  484343:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484346:	53                   	push   ebx
  484347:	e8 c4 07 f8 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  48434c:	c6 45 fc 14          	mov    BYTE PTR [ebp-0x4],0x14
  484350:	8d 4f 08             	lea    ecx,[edi+0x8]
  484353:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  484356:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  48435c:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  48435f:	68 a0 6a 6c 00       	push   0x6c6aa0 ; ["connection_steps"]
  484364:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484367:	e8 72 f3 f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  48436c:	8b c8                	mov    ecx,eax
  48436e:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  484372:	e8 0e 01 f8 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  484377:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  48437d:	8d 4f 08             	lea    ecx,[edi+0x8]
  484380:	6a 00                	push   0x0
  484382:	6a 00                	push   0x0
  484384:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484387:	6a 20                	push   0x20
  484389:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  48438c:	8d 87 00 01 00 00    	lea    eax,[edi+0x100]
  484392:	6a ff                	push   0xffffffff
  484394:	50                   	push   eax
  484395:	e8 84 44 f8 ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  48439a:	c6 45 fc 15          	mov    BYTE PTR [ebp-0x4],0x15
  48439e:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  4843a1:	50                   	push   eax
  4843a2:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  4843a8:	8d 87 18 01 00 00    	lea    eax,[edi+0x118]
  4843ae:	89 4d ec             	mov    DWORD PTR [ebp-0x14],ecx
  4843b1:	50                   	push   eax
  4843b2:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  4843b5:	e8 02 29 f8 ff       	call   0x406cbc ; ["call resolved=0x458470 "]
  4843ba:	83 c4 08             	add    esp,0x8
  4843bd:	8d 4f d0             	lea    ecx,[edi-0x30]
  4843c0:	50                   	push   eax
  4843c1:	e8 60 1e f8 ff       	call   0x406226 ; ["call resolved=0x4a2b20 "]
  4843c6:	83 bf 18 01 00 00 00 	cmp    DWORD PTR [edi+0x118],0x0
  4843cd:	74 19                	je     0x4843e8
  4843cf:	8b 87 18 01 00 00    	mov    eax,DWORD PTR [edi+0x118]
  4843d5:	50                   	push   eax
  4843d6:	89 45 c0             	mov    DWORD PTR [ebp-0x40],eax
  4843d9:	e8 a0 46 1e 00       	call   0x668a7e ; ["call resolved=0x668a7e "]
  4843de:	c7 87 18 01 00 00 00 	mov    DWORD PTR [edi+0x118],0x0
  4843e8:	8b 87 14 01 00 00    	mov    eax,DWORD PTR [edi+0x114]
  4843ee:	89 45 5c             	mov    DWORD PTR [ebp+0x5c],eax
  4843f1:	83 f8 10             	cmp    eax,0x10
  4843f4:	72 4f                	jb     0x484445
  4843f6:	8b 87 14 01 00 00    	mov    eax,DWORD PTR [edi+0x114]
  4843fc:	89 45 5c             	mov    DWORD PTR [ebp+0x5c],eax
  4843ff:	8b 97 00 01 00 00    	mov    edx,DWORD PTR [edi+0x100]
  484405:	89 55 48             	mov    DWORD PTR [ebp+0x48],edx
  484408:	8d 48 01             	lea    ecx,[eax+0x1]
  48440b:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  484411:	72 28                	jb     0x48443b
  484413:	8b 87 00 01 00 00    	mov    eax,DWORD PTR [edi+0x100]
  484419:	83 c1 23             	add    ecx,0x23
  48441c:	89 45 48             	mov    DWORD PTR [ebp+0x48],eax
  48441f:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  484422:	8b 87 00 01 00 00    	mov    eax,DWORD PTR [edi+0x100]
  484428:	89 45 48             	mov    DWORD PTR [ebp+0x48],eax
  48442b:	2b c2                	sub    eax,edx
  48442d:	83 c0 fc             	add    eax,0xfffffffc
  484430:	83 f8 1f             	cmp    eax,0x1f
  484433:	76 06                	jbe    0x48443b
  484435:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  48443b:	51                   	push   ecx
  48443c:	52                   	push   edx
  48443d:	e8 58 dc f7 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  484442:	83 c4 08             	add    esp,0x8
  484445:	8b 47 5c             	mov    eax,DWORD PTR [edi+0x5c]
  484448:	89 85 34 01 00 00    	mov    DWORD PTR [ebp+0x134],eax
  48444e:	83 f8 10             	cmp    eax,0x10
  484451:	72 4d                	jb     0x4844a0
  484453:	8b 47 5c             	mov    eax,DWORD PTR [edi+0x5c]
  484456:	89 85 34 01 00 00    	mov    DWORD PTR [ebp+0x134],eax
  48445c:	8b 57 48             	mov    edx,DWORD PTR [edi+0x48]
  48445f:	89 95 20 01 00 00    	mov    DWORD PTR [ebp+0x120],edx
  484465:	8d 48 01             	lea    ecx,[eax+0x1]
  484468:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  48446e:	72 26                	jb     0x484496
  484470:	8b 47 48             	mov    eax,DWORD PTR [edi+0x48]
  484473:	83 c1 23             	add    ecx,0x23
  484476:	89 85 20 01 00 00    	mov    DWORD PTR [ebp+0x120],eax
  48447c:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  48447f:	8b 47 48             	mov    eax,DWORD PTR [edi+0x48]
  484482:	89 85 20 01 00 00    	mov    DWORD PTR [ebp+0x120],eax
  484488:	2b c2                	sub    eax,edx
  48448a:	83 c0 fc             	add    eax,0xfffffffc
  48448d:	83 f8 1f             	cmp    eax,0x1f
  484490:	0f 87 07 0c 00 00    	ja     0x48509d
  484496:	51                   	push   ecx
  484497:	52                   	push   edx
  484498:	e8 fd db f7 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  48449d:	83 c4 08             	add    esp,0x8
  4844a0:	c7 47 58 00 00 00 00 	mov    DWORD PTR [edi+0x58],0x0
  4844a7:	8d 4f 08             	lea    ecx,[edi+0x8]
  4844aa:	c7 47 5c 0f 00 00 00 	mov    DWORD PTR [edi+0x5c],0xf
  4844b1:	c6 47 48 00          	mov    BYTE PTR [edi+0x48],0x0
  4844b5:	e8 24 5b f8 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  4844ba:	8a 47 08             	mov    al,BYTE PTR [edi+0x8]
  4844bd:	8d 4f 10             	lea    ecx,[edi+0x10]
  4844c0:	88 45 ac             	mov    BYTE PTR [ebp-0x54],al
  4844c3:	0f b6 c0             	movzx  eax,al
  4844c6:	50                   	push   eax
  4844c7:	e8 82 54 f8 ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  4844cc:	e9 fd 1a 00 00       	jmp    0x485fce
  4844d1:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  4844d7:	8d b2 80 07 00 00    	lea    esi,[edx+0x780]
  4844dd:	83 ec 18             	sub    esp,0x18
  4844e0:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4844e3:	8b cc                	mov    ecx,esp
  4844e5:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4844e8:	8d 9a 70 0c 00 00    	lea    ebx,[edx+0xc70]
  4844ee:	68 28 18 79 00       	push   0x791828
  4844f3:	e8 93 17 f8 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  4844f8:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  4844fe:	8b ce                	mov    ecx,esi
  484500:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484503:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484506:	8d 87 1c 01 00 00    	lea    eax,[edi+0x11c]
  48450c:	53                   	push   ebx
  48450d:	50                   	push   eax
  48450e:	e8 98 38 f8 ff       	call   0x407dab ; ["call resolved=0x617dd0 Step::getConnectResult"]
  484513:	8b d0                	mov    edx,eax
  484515:	c6 45 fc 16          	mov    BYTE PTR [ebp-0x4],0x16
  484519:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  48451c:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  484522:	83 7a 14 10          	cmp    DWORD PTR [edx+0x14],0x10
  484526:	8b 4a 10             	mov    ecx,DWORD PTR [edx+0x10]
  484529:	72 02                	jb     0x48452d
  48452b:	8b 12                	mov    edx,DWORD PTR [edx]
  48452d:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  484533:	51                   	push   ecx
  484534:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484537:	8d 4f 48             	lea    ecx,[edi+0x48]
  48453a:	52                   	push   edx
  48453b:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  48453e:	e8 93 f4 f7 ff       	call   0x4039d6 ; ["call resolved=0x480650 "]
  484543:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  484547:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  48454a:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  484550:	8b 87 30 01 00 00    	mov    eax,DWORD PTR [edi+0x130]
  484556:	89 45 44             	mov    DWORD PTR [ebp+0x44],eax
  484559:	83 f8 10             	cmp    eax,0x10
  48455c:	72 4f                	jb     0x4845ad
  48455e:	8b 87 30 01 00 00    	mov    eax,DWORD PTR [edi+0x130]
  484564:	89 45 44             	mov    DWORD PTR [ebp+0x44],eax
  484567:	8b 97 1c 01 00 00    	mov    edx,DWORD PTR [edi+0x11c]
  48456d:	89 55 30             	mov    DWORD PTR [ebp+0x30],edx
  484570:	8d 48 01             	lea    ecx,[eax+0x1]
  484573:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  484579:	72 28                	jb     0x4845a3
  48457b:	8b 87 1c 01 00 00    	mov    eax,DWORD PTR [edi+0x11c]
  484581:	83 c1 23             	add    ecx,0x23
  484584:	89 45 30             	mov    DWORD PTR [ebp+0x30],eax
  484587:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  48458a:	8b 87 1c 01 00 00    	mov    eax,DWORD PTR [edi+0x11c]
  484590:	89 45 30             	mov    DWORD PTR [ebp+0x30],eax
  484593:	2b c2                	sub    eax,edx
  484595:	83 c0 fc             	add    eax,0xfffffffc
  484598:	83 f8 1f             	cmp    eax,0x1f
  48459b:	76 06                	jbe    0x4845a3
  48459d:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  4845a3:	51                   	push   ecx
  4845a4:	52                   	push   edx
  4845a5:	e8 f0 da f7 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4845aa:	83 c4 08             	add    esp,0x8
  4845ad:	8b 97 31 05 00 00    	mov    edx,DWORD PTR [edi+0x531]
  4845b3:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  4845b9:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4845bc:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4845bf:	8d 82 c8 0c 00 00    	lea    eax,[edx+0xcc8]
  4845c5:	50                   	push   eax
  4845c6:	8d 87 34 01 00 00    	lea    eax,[edi+0x134]
  4845cc:	8d 8a 80 07 00 00    	lea    ecx,[edx+0x780]
  4845d2:	50                   	push   eax
  4845d3:	e8 63 4d f8 ff       	call   0x40933b ; ["call resolved=0x617cc0 "]
  4845d8:	8b d0                	mov    edx,eax
  4845da:	c6 45 fc 17          	mov    BYTE PTR [ebp-0x4],0x17
  4845de:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  4845e1:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  4845e7:	83 7a 14 10          	cmp    DWORD PTR [edx+0x14],0x10
  4845eb:	8b 4a 10             	mov    ecx,DWORD PTR [edx+0x10]
  4845ee:	72 02                	jb     0x4845f2
  4845f0:	8b 12                	mov    edx,DWORD PTR [edx]
  4845f2:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  4845f8:	51                   	push   ecx
  4845f9:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4845fc:	8d 4f 48             	lea    ecx,[edi+0x48]
  4845ff:	52                   	push   edx
  484600:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484603:	e8 ce f3 f7 ff       	call   0x4039d6 ; ["call resolved=0x480650 "]
  484608:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  48460c:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  48460f:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  484615:	8b 87 48 01 00 00    	mov    eax,DWORD PTR [edi+0x148]
  48461b:	89 45 2c             	mov    DWORD PTR [ebp+0x2c],eax
  48461e:	83 f8 10             	cmp    eax,0x10
  484621:	72 4f                	jb     0x484672
  484623:	8b 87 48 01 00 00    	mov    eax,DWORD PTR [edi+0x148]
  484629:	89 45 2c             	mov    DWORD PTR [ebp+0x2c],eax
  48462c:	8b 97 34 01 00 00    	mov    edx,DWORD PTR [edi+0x134]
  484632:	89 55 18             	mov    DWORD PTR [ebp+0x18],edx
  484635:	8d 48 01             	lea    ecx,[eax+0x1]
  484638:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  48463e:	72 28                	jb     0x484668
  484640:	8b 87 34 01 00 00    	mov    eax,DWORD PTR [edi+0x134]
  484646:	83 c1 23             	add    ecx,0x23
  484649:	89 45 18             	mov    DWORD PTR [ebp+0x18],eax
  48464c:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  48464f:	8b 87 34 01 00 00    	mov    eax,DWORD PTR [edi+0x134]
  484655:	89 45 18             	mov    DWORD PTR [ebp+0x18],eax
  484658:	2b c2                	sub    eax,edx
  48465a:	83 c0 fc             	add    eax,0xfffffffc
  48465d:	83 f8 1f             	cmp    eax,0x1f
  484660:	76 06                	jbe    0x484668
  484662:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  484668:	51                   	push   ecx
  484669:	52                   	push   edx
  48466a:	e8 2b da f7 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  48466f:	83 c4 08             	add    esp,0x8
  484672:	8b 9f 31 05 00 00    	mov    ebx,DWORD PTR [edi+0x531]
  484678:	8b 83 80 00 00 00    	mov    eax,DWORD PTR [ebx+0x80]
  48467e:	8d b3 80 00 00 00    	lea    esi,[ebx+0x80]
  484684:	90                   	nop
  484685:	85 c0                	test   eax,eax
  484687:	0f 84 cd 00 00 00    	je     0x48475a
  48468d:	6a 5c                	push   0x5c
  48468f:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  484694:	e8 cd 40 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  484699:	83 c4 08             	add    esp,0x8
  48469c:	85 c0                	test   eax,eax
  48469e:	74 14                	je     0x4846b4
  4846a0:	6a 5c                	push   0x5c
  4846a2:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  4846a7:	e8 ba 40 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4846ac:	83 c4 08             	add    esp,0x8
  4846af:	8d 50 01             	lea    edx,[eax+0x1]
  4846b2:	eb 05                	jmp    0x4846b9
  4846b4:	ba cc 66 6c 00       	mov    edx,0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  4846b9:	68 04 67 6c 00       	push   0x6c6704 ; ["vivo::Worker::createAcceptEvent"]
  4846be:	68 13 01 00 00       	push   0x113
  4846c3:	8d 8f 14 05 00 00    	lea    ecx,[edi+0x514]
  4846c9:	c7 01 02 00 00 00    	mov    DWORD PTR [ecx],0x2
  4846cf:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  4846d5:	52                   	push   edx
  4846d6:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4846d9:	68 30 67 6c 00       	push   0x6c6730 ; ["[ConntctionModule][%s:%d][%s]:createAcceptEvent but accepterSyncEvent_ not null\n"]
  4846de:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4846e1:	8d 87 fc 04 00 00    	lea    eax,[edi+0x4fc]
  4846e7:	51                   	push   ecx
  4846e8:	50                   	push   eax
  4846e9:	e8 1b 29 f8 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4846ee:	8b 87 10 05 00 00    	mov    eax,DWORD PTR [edi+0x510]
  4846f4:	83 c4 18             	add    esp,0x18
  4846f7:	89 45 14             	mov    DWORD PTR [ebp+0x14],eax
  4846fa:	83 f8 10             	cmp    eax,0x10
  4846fd:	72 4d                	jb     0x48474c
  4846ff:	8b 87 10 05 00 00    	mov    eax,DWORD PTR [edi+0x510]
  484705:	89 45 14             	mov    DWORD PTR [ebp+0x14],eax
  484708:	8b 97 fc 04 00 00    	mov    edx,DWORD PTR [edi+0x4fc]
  48470e:	89 55 00             	mov    DWORD PTR [ebp+0x0],edx
  484711:	8d 48 01             	lea    ecx,[eax+0x1]
  484714:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  48471a:	72 26                	jb     0x484742
  48471c:	8b 87 fc 04 00 00    	mov    eax,DWORD PTR [edi+0x4fc]
  484722:	83 c1 23             	add    ecx,0x23
  484725:	89 45 00             	mov    DWORD PTR [ebp+0x0],eax
  484728:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  48472b:	8b 87 fc 04 00 00    	mov    eax,DWORD PTR [edi+0x4fc]
  484731:	89 45 00             	mov    DWORD PTR [ebp+0x0],eax
  484734:	2b c2                	sub    eax,edx
  484736:	83 c0 fc             	add    eax,0xfffffffc
  484739:	83 f8 1f             	cmp    eax,0x1f
  48473c:	0f 87 5b 09 00 00    	ja     0x48509d
  484742:	51                   	push   ecx
  484743:	52                   	push   edx
  484744:	e8 51 d9 f7 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  484749:	83 c4 08             	add    esp,0x8
  48474c:	8b 06                	mov    eax,DWORD PTR [esi]
  48474e:	90                   	nop
  48474f:	50                   	push   eax
  484750:	ff 15 d8 df 79 00    	call   DWORD PTR ds:0x79dfd8
  484756:	33 c0                	xor    eax,eax
  484758:	87 06                	xchg   DWORD PTR [esi],eax
  48475a:	6a 00                	push   0x0
  48475c:	6a 00                	push   0x0
  48475e:	6a 00                	push   0x0
  484760:	6a 00                	push   0x0
  484762:	ff 15 fc df 79 00    	call   DWORD PTR ds:0x79dffc
  484768:	87 06                	xchg   DWORD PTR [esi],eax
  48476a:	8b 47 60             	mov    eax,DWORD PTR [edi+0x60]
  48476d:	89 45 cc             	mov    DWORD PTR [ebp-0x34],eax
  484770:	8b b7 35 05 00 00    	mov    esi,DWORD PTR [edi+0x535]
  484776:	6a 3c                	push   0x3c
  484778:	8b 40 60             	mov    eax,DWORD PTR [eax+0x60]
  48477b:	89 45 e4             	mov    DWORD PTR [ebp-0x1c],eax
  48477e:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  484784:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484787:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  48478a:	e8 27 ea f7 ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  48478f:	83 c4 04             	add    esp,0x4
  484792:	89 87 1c 05 00 00    	mov    DWORD PTR [edi+0x51c],eax
  484798:	c6 45 fc 18          	mov    BYTE PTR [ebp-0x4],0x18
  48479c:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  48479f:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  4847a5:	89 45 dc             	mov    DWORD PTR [ebp-0x24],eax
  4847a8:	85 c0                	test   eax,eax
  4847aa:	0f 84 83 00 00 00    	je     0x484833
  4847b0:	8b 8f 1c 05 00 00    	mov    ecx,DWORD PTR [edi+0x51c]
  4847b6:	8d 87 54 01 00 00    	lea    eax,[edi+0x154]
  4847bc:	ff 75 e4             	push   DWORD PTR [ebp-0x1c]
  4847bf:	89 4d dc             	mov    DWORD PTR [ebp-0x24],ecx
  4847c2:	89 01                	mov    DWORD PTR [ecx],eax
  4847c4:	8b 8f 1c 05 00 00    	mov    ecx,DWORD PTR [edi+0x51c]
  4847ca:	89 4d dc             	mov    DWORD PTR [ebp-0x24],ecx
  4847cd:	83 c1 04             	add    ecx,0x4
  4847d0:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  4847d6:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4847d9:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4847dc:	e8 aa 14 f8 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  4847e1:	c6 45 fc 19          	mov    BYTE PTR [ebp-0x4],0x19
  4847e5:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4847e8:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  4847ee:	8b 8f 1c 05 00 00    	mov    ecx,DWORD PTR [edi+0x51c]
  4847f4:	89 4d dc             	mov    DWORD PTR [ebp-0x24],ecx
  4847f7:	83 c1 1c             	add    ecx,0x1c
  4847fa:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  484800:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484803:	56                   	push   esi
  484804:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484807:	e8 7f 14 f8 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  48480c:	8b 87 1c 05 00 00    	mov    eax,DWORD PTR [edi+0x51c]
  484812:	89 45 dc             	mov    DWORD PTR [ebp-0x24],eax
  484815:	89 58 34             	mov    DWORD PTR [eax+0x34],ebx
  484818:	8b 87 1c 05 00 00    	mov    eax,DWORD PTR [edi+0x51c]
  48481e:	89 45 dc             	mov    DWORD PTR [ebp-0x24],eax
  484821:	8b 8f 1c 05 00 00    	mov    ecx,DWORD PTR [edi+0x51c]
  484827:	89 4d dc             	mov    DWORD PTR [ebp-0x24],ecx
  48482a:	c7 40 38 48 1d 40 00 	mov    DWORD PTR [eax+0x38],0x401d48
  484831:	eb 02                	jmp    0x484835
  484833:	33 c9                	xor    ecx,ecx
  484835:	89 8f 18 05 00 00    	mov    DWORD PTR [edi+0x518],ecx
  48483b:	c6 45 fc 1a          	mov    BYTE PTR [ebp-0x4],0x1a
  48483f:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  484842:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  484848:	8d 87 50 01 00 00    	lea    eax,[edi+0x150]
  48484e:	50                   	push   eax
  48484f:	6a 00                	push   0x0
  484851:	51                   	push   ecx
  484852:	68 a9 52 40 00       	push   0x4052a9
  484857:	6a 00                	push   0x0
  484859:	6a 00                	push   0x0
  48485b:	ff 15 14 e4 79 00    	call   DWORD PTR ds:0x79e414
  484861:	83 c4 18             	add    esp,0x18
  484864:	89 87 4c 01 00 00    	mov    DWORD PTR [edi+0x14c],eax
  48486a:	89 45 d4             	mov    DWORD PTR [ebp-0x2c],eax
  48486d:	85 c0                	test   eax,eax
  48486f:	0f 84 18 17 00 00    	je     0x485f8d
  484875:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  484879:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  48487c:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  484882:	8b 87 50 01 00 00    	mov    eax,DWORD PTR [edi+0x150]
  484888:	89 45 d8             	mov    DWORD PTR [ebp-0x28],eax
  48488b:	85 c0                	test   eax,eax
  48488d:	75 13                	jne    0x4848a2
  48488f:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  484895:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484898:	6a 01                	push   0x1
  48489a:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  48489d:	e8 96 0e 1e 00       	call   0x665738 ; ["call resolved=0x665738 "]
  4848a2:	8b 87 50 01 00 00    	mov    eax,DWORD PTR [edi+0x150]
  4848a8:	8b 8f 4c 01 00 00    	mov    ecx,DWORD PTR [edi+0x14c]
  4848ae:	50                   	push   eax
  4848af:	51                   	push   ecx
  4848b0:	89 4d d4             	mov    DWORD PTR [ebp-0x2c],ecx
  4848b3:	89 45 d8             	mov    DWORD PTR [ebp-0x28],eax
  4848b6:	e8 23 0e 1e 00       	call   0x6656de ; ["call resolved=0x6656de "]
  4848bb:	83 c4 08             	add    esp,0x8
  4848be:	85 c0                	test   eax,eax
  4848c0:	74 12                	je     0x4848d4
  4848c2:	8b 8f 2c 05 00 00    	mov    ecx,DWORD PTR [edi+0x52c]
  4848c8:	89 4d ec             	mov    DWORD PTR [ebp-0x14],ecx
  4848cb:	50                   	push   eax
  4848cc:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  4848cf:	e8 5e 0e 1e 00       	call   0x665732 ; ["call resolved=0x665732 "]
  4848d4:	c7 87 4c 01 00 00 00 	mov    DWORD PTR [edi+0x14c],0x0
  4848de:	6a 64                	push   0x64
  4848e0:	c7 87 50 01 00 00 00 	mov    DWORD PTR [edi+0x150],0x0
  4848ea:	ff 15 38 e0 79 00    	call   DWORD PTR ds:0x79e038
  4848f0:	6a 5c                	push   0x5c
  4848f2:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  4848f7:	e8 6a 3e 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4848fc:	83 c4 08             	add    esp,0x8
  4848ff:	85 c0                	test   eax,eax
  484901:	74 14                	je     0x484917
  484903:	6a 5c                	push   0x5c
  484905:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  48490a:	e8 57 3e 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  48490f:	83 c4 08             	add    esp,0x8
  484912:	8d 48 01             	lea    ecx,[eax+0x1]
  484915:	eb 05                	jmp    0x48491c
  484917:	b9 d4 6a 6c 00       	mov    ecx,0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  48491c:	68 b4 6a 6c 00       	push   0x6c6ab4 ; ["vivo::Worker::connectSSDP"]
  484921:	68 be 00 00 00       	push   0xbe
  484926:	51                   	push   ecx
  484927:	8d 97 58 01 00 00    	lea    edx,[edi+0x158]
  48492d:	c7 02 02 00 00 00    	mov    DWORD PTR [edx],0x2
  484933:	8d b7 5c 01 00 00    	lea    esi,[edi+0x15c]
  484939:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  48493f:	68 b8 6b 6c 00       	push   0x6c6bb8 ; ["[ConntctionModule][%s:%d][%s]: Enter the accept event waiting!"]
  484944:	52                   	push   edx
  484945:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484948:	56                   	push   esi
  484949:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  48494c:	e8 b8 26 f8 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  484951:	83 c4 18             	add    esp,0x18
  484954:	8b ce                	mov    ecx,esi
  484956:	e8 a8 f0 f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  48495b:	8b 9f 31 05 00 00    	mov    ebx,DWORD PTR [edi+0x531]
  484961:	8b 83 80 00 00 00    	mov    eax,DWORD PTR [ebx+0x80]
  484967:	8d b3 80 00 00 00    	lea    esi,[ebx+0x80]
  48496d:	90                   	nop
  48496e:	68 30 75 00 00       	push   0x7530
  484973:	50                   	push   eax
  484974:	ff 15 f8 df 79 00    	call   DWORD PTR ds:0x79dff8
  48497a:	8b 06                	mov    eax,DWORD PTR [esi]
  48497c:	90                   	nop
  48497d:	50                   	push   eax
  48497e:	ff 15 8c db 79 00    	call   DWORD PTR ds:0x79db8c
  484984:	33 c0                	xor    eax,eax
  484986:	87 06                	xchg   DWORD PTR [esi],eax
  484988:	6a 5c                	push   0x5c
  48498a:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  48498f:	e8 d2 3d 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  484994:	83 c4 08             	add    esp,0x8
  484997:	85 c0                	test   eax,eax
  484999:	74 14                	je     0x4849af
  48499b:	6a 5c                	push   0x5c
  48499d:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  4849a2:	e8 bf 3d 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4849a7:	83 c4 08             	add    esp,0x8
  4849aa:	8d 48 01             	lea    ecx,[eax+0x1]
  4849ad:	eb 05                	jmp    0x4849b4
  4849af:	b9 d4 6a 6c 00       	mov    ecx,0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  4849b4:	68 b4 6a 6c 00       	push   0x6c6ab4 ; ["vivo::Worker::connectSSDP"]
  4849b9:	68 c0 00 00 00       	push   0xc0
  4849be:	51                   	push   ecx
  4849bf:	8d 97 74 01 00 00    	lea    edx,[edi+0x174]
  4849c5:	c7 02 02 00 00 00    	mov    DWORD PTR [edx],0x2
  4849cb:	8d b7 78 01 00 00    	lea    esi,[edi+0x178]
  4849d1:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  4849d7:	68 04 6c 6c 00       	push   0x6c6c04 ; ["[ConntctionModule][%s:%d][%s]: Leave the accept event waiting!"]
  4849dc:	52                   	push   edx
  4849dd:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4849e0:	56                   	push   esi
  4849e1:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4849e4:	e8 20 26 f8 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4849e9:	83 c4 18             	add    esp,0x18
  4849ec:	8b ce                	mov    ecx,esi
  4849ee:	e8 10 f0 f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  4849f3:	8b 87 54 01 00 00    	mov    eax,DWORD PTR [edi+0x154]
  4849f9:	50                   	push   eax
  4849fa:	89 45 bc             	mov    DWORD PTR [ebp-0x44],eax
  4849fd:	ff 15 f0 d8 79 00    	call   DWORD PTR ds:0x79d8f0
  484a03:	8a 83 86 00 00 00    	mov    al,BYTE PTR [ebx+0x86]
  484a09:	90                   	nop
  484a0a:	84 c0                	test   al,al
  484a0c:	0f 85 21 03 00 00    	jne    0x484d33
  484a12:	6a 5c                	push   0x5c
  484a14:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  484a19:	e8 48 3d 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  484a1e:	83 c4 08             	add    esp,0x8
  484a21:	85 c0                	test   eax,eax
  484a23:	74 14                	je     0x484a39
  484a25:	6a 5c                	push   0x5c
  484a27:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  484a2c:	e8 35 3d 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  484a31:	83 c4 08             	add    esp,0x8
  484a34:	8d 48 01             	lea    ecx,[eax+0x1]
  484a37:	eb 05                	jmp    0x484a3e
  484a39:	b9 d4 6a 6c 00       	mov    ecx,0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  484a3e:	68 b4 6a 6c 00       	push   0x6c6ab4 ; ["vivo::Worker::connectSSDP"]
  484a43:	68 c5 00 00 00       	push   0xc5
  484a48:	51                   	push   ecx
  484a49:	8d 97 90 01 00 00    	lea    edx,[edi+0x190]
  484a4f:	c7 02 02 00 00 00    	mov    DWORD PTR [edx],0x2
  484a55:	8d b7 94 01 00 00    	lea    esi,[edi+0x194]
  484a5b:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  484a61:	68 50 6c 6c 00       	push   0x6c6c50 ; ["[ConntctionModule][%s:%d][%s]: connect phone server failed ... \n"]
  484a66:	52                   	push   edx
  484a67:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484a6a:	56                   	push   esi
  484a6b:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484a6e:	e8 96 25 f8 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  484a73:	83 c4 18             	add    esp,0x18
  484a76:	8b ce                	mov    ecx,esi
  484a78:	e8 86 ef f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  484a7d:	83 ec 10             	sub    esp,0x10
  484a80:	8b cc                	mov    ecx,esp
  484a82:	89 65 e8             	mov    DWORD PTR [ebp-0x18],esp
  484a85:	68 04 16 6c 00       	push   0x6c1604
  484a8a:	e8 b5 44 f8 ff       	call   0x408f44 ; ["call resolved=0x43d710 "]
  484a8f:	c6 45 fc 1c          	mov    BYTE PTR [ebp-0x4],0x1c
  484a93:	8d 4f 08             	lea    ecx,[edi+0x8]
  484a96:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  484a99:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  484a9f:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484aa2:	68 f4 13 6c 00       	push   0x6c13f4 ; ["error"]
  484aa7:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484aaa:	e8 2f ec f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  484aaf:	8b c8                	mov    ecx,eax
  484ab1:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  484ab5:	e8 cb f9 f7 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  484aba:	83 ec 10             	sub    esp,0x10
  484abd:	8d 8f 20 05 00 00    	lea    ecx,[edi+0x520]
  484ac3:	8b c4                	mov    eax,esp
  484ac5:	89 65 e8             	mov    DWORD PTR [ebp-0x18],esp
  484ac8:	0f 57 c0             	xorps  xmm0,xmm0
  484acb:	89 45 e4             	mov    DWORD PTR [ebp-0x1c],eax
  484ace:	6a 01                	push   0x1
  484ad0:	66 0f d6 40 08       	movq   QWORD PTR [eax+0x8],xmm0
  484ad5:	c6 00 03             	mov    BYTE PTR [eax],0x3
  484ad8:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  484ade:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484ae1:	51                   	push   ecx
  484ae2:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484ae5:	e8 9c 4d f8 ff       	call   0x409886 ; ["call resolved=0x47ffe0 "]
  484aea:	8b f0                	mov    esi,eax
  484aec:	83 c4 08             	add    esp,0x8
  484aef:	8d 87 20 05 00 00    	lea    eax,[edi+0x520]
  484af5:	89 87 24 05 00 00    	mov    DWORD PTR [edi+0x524],eax
  484afb:	89 b7 28 05 00 00    	mov    DWORD PTR [edi+0x528],esi
  484b01:	c6 45 fc 1d          	mov    BYTE PTR [ebp-0x4],0x1d
  484b05:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  484b08:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  484b0e:	8b ce                	mov    ecx,esi
  484b10:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  484b16:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  484b1d:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  484b24:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  484b2a:	6a 22                	push   0x22
  484b2c:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484b2f:	68 a0 6c 6c 00       	push   0x6c6ca0 ; ["WLAN CONNECT PHONE TCP SERVER FAIL"]
  484b34:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484b37:	e8 db f8 f7 ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  484b3c:	8b 45 e4             	mov    eax,DWORD PTR [ebp-0x1c]
  484b3f:	8b c8                	mov    ecx,eax
  484b41:	89 70 08             	mov    DWORD PTR [eax+0x8],esi
  484b44:	e8 95 54 f8 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  484b49:	8b 4d e4             	mov    ecx,DWORD PTR [ebp-0x1c]
  484b4c:	e8 8d 54 f8 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  484b51:	c6 45 fc 1e          	mov    BYTE PTR [ebp-0x4],0x1e
  484b55:	8d 4f 08             	lea    ecx,[edi+0x8]
  484b58:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  484b5b:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  484b61:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484b64:	68 20 69 6c 00       	push   0x6c6920 ; ["error_message"]
  484b69:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484b6c:	e8 6d eb f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  484b71:	8b c8                	mov    ecx,eax
  484b73:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  484b77:	e8 09 f9 f7 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  484b7c:	8b 87 31 05 00 00    	mov    eax,DWORD PTR [edi+0x531]
  484b82:	83 ec 18             	sub    esp,0x18
  484b85:	8b cc                	mov    ecx,esp
  484b87:	8d b0 80 07 00 00    	lea    esi,[eax+0x780]
  484b8d:	05 c8 0c 00 00       	add    eax,0xcc8
  484b92:	89 45 e4             	mov    DWORD PTR [ebp-0x1c],eax
  484b95:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  484b9b:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484b9e:	68 10 18 79 00       	push   0x791810
  484ba3:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484ba6:	e8 e0 10 f8 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  484bab:	ff 75 e4             	push   DWORD PTR [ebp-0x1c]
  484bae:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  484bb4:	8d 8f ac 01 00 00    	lea    ecx,[edi+0x1ac]
  484bba:	51                   	push   ecx
  484bbb:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484bbe:	8b ce                	mov    ecx,esi
  484bc0:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484bc3:	e8 e3 31 f8 ff       	call   0x407dab ; ["call resolved=0x617dd0 Step::getConnectResult"]
  484bc8:	c6 45 fc 1f          	mov    BYTE PTR [ebp-0x4],0x1f
  484bcc:	8d 77 48             	lea    esi,[edi+0x48]
  484bcf:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  484bd2:	8b d1                	mov    edx,ecx
  484bd4:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  484bda:	8b ce                	mov    ecx,esi
  484bdc:	89 55 ec             	mov    DWORD PTR [ebp-0x14],edx
  484bdf:	50                   	push   eax
  484be0:	89 55 fc             	mov    DWORD PTR [ebp-0x4],edx
  484be3:	e8 99 15 f8 ff       	call   0x406181 ; ["call resolved=0x477450 "]
  484be8:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  484bec:	8d 8f ac 01 00 00    	lea    ecx,[edi+0x1ac]
  484bf2:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  484bf5:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  484bfb:	e8 03 ee f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  484c00:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  484c06:	83 ec 10             	sub    esp,0x10
  484c09:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484c0c:	8b cc                	mov    ecx,esp
  484c0e:	89 65 e8             	mov    DWORD PTR [ebp-0x18],esp
  484c11:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484c14:	56                   	push   esi
  484c15:	e8 f6 fe f7 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  484c1a:	c6 45 fc 20          	mov    BYTE PTR [ebp-0x4],0x20
  484c1e:	8d 4f 08             	lea    ecx,[edi+0x8]
  484c21:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  484c24:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  484c2a:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484c2d:	68 a0 6a 6c 00       	push   0x6c6aa0 ; ["connection_steps"]
  484c32:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484c35:	e8 a4 ea f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  484c3a:	8b c8                	mov    ecx,eax
  484c3c:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  484c40:	e8 40 f8 f7 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  484c45:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  484c4b:	8d 8f c4 01 00 00    	lea    ecx,[edi+0x1c4]
  484c51:	6a 00                	push   0x0
  484c53:	6a 00                	push   0x0
  484c55:	6a 20                	push   0x20
  484c57:	6a ff                	push   0xffffffff
  484c59:	51                   	push   ecx
  484c5a:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484c5d:	8d 4f 08             	lea    ecx,[edi+0x8]
  484c60:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484c63:	e8 b6 3b f8 ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  484c68:	c6 45 fc 21          	mov    BYTE PTR [ebp-0x4],0x21
  484c6c:	8d b7 dc 01 00 00    	lea    esi,[edi+0x1dc]
  484c72:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  484c75:	8b d1                	mov    edx,ecx
  484c77:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  484c7d:	50                   	push   eax
  484c7e:	89 55 ec             	mov    DWORD PTR [ebp-0x14],edx
  484c81:	56                   	push   esi
  484c82:	89 55 fc             	mov    DWORD PTR [ebp-0x4],edx
  484c85:	e8 32 20 f8 ff       	call   0x406cbc ; ["call resolved=0x458470 "]
  484c8a:	83 c4 08             	add    esp,0x8
  484c8d:	50                   	push   eax
  484c8e:	8d 4f d0             	lea    ecx,[edi-0x30]
  484c91:	e8 90 15 f8 ff       	call   0x406226 ; ["call resolved=0x4a2b20 "]
  484c96:	8b ce                	mov    ecx,esi
  484c98:	e8 ef ff f7 ff       	call   0x404c8c ; ["call resolved=0x4721f0 "]
  484c9d:	8d 8f c4 01 00 00    	lea    ecx,[edi+0x1c4]
  484ca3:	e8 5b ed f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  484ca8:	8b 87 50 01 00 00    	mov    eax,DWORD PTR [edi+0x150]
  484cae:	89 45 d8             	mov    DWORD PTR [ebp-0x28],eax
  484cb1:	85 c0                	test   eax,eax
  484cb3:	0f 85 8d 03 00 00    	jne    0x485046
  484cb9:	8b 47 5c             	mov    eax,DWORD PTR [edi+0x5c]
  484cbc:	89 85 34 01 00 00    	mov    DWORD PTR [ebp+0x134],eax
  484cc2:	83 f8 10             	cmp    eax,0x10
  484cc5:	72 4d                	jb     0x484d14
  484cc7:	8b 47 5c             	mov    eax,DWORD PTR [edi+0x5c]
  484cca:	89 85 34 01 00 00    	mov    DWORD PTR [ebp+0x134],eax
  484cd0:	8b 4f 48             	mov    ecx,DWORD PTR [edi+0x48]
  484cd3:	89 8d 20 01 00 00    	mov    DWORD PTR [ebp+0x120],ecx
  484cd9:	8d 50 01             	lea    edx,[eax+0x1]
  484cdc:	81 fa 00 10 00 00    	cmp    edx,0x1000
  484ce2:	72 26                	jb     0x484d0a
  484ce4:	8b 47 48             	mov    eax,DWORD PTR [edi+0x48]
  484ce7:	83 c2 23             	add    edx,0x23
  484cea:	89 85 20 01 00 00    	mov    DWORD PTR [ebp+0x120],eax
  484cf0:	8b 48 fc             	mov    ecx,DWORD PTR [eax-0x4]
  484cf3:	8b 47 48             	mov    eax,DWORD PTR [edi+0x48]
  484cf6:	89 85 20 01 00 00    	mov    DWORD PTR [ebp+0x120],eax
  484cfc:	2b c1                	sub    eax,ecx
  484cfe:	83 c0 fc             	add    eax,0xfffffffc
  484d01:	83 f8 1f             	cmp    eax,0x1f
  484d04:	0f 87 93 03 00 00    	ja     0x48509d
  484d0a:	52                   	push   edx
  484d0b:	51                   	push   ecx
  484d0c:	e8 89 d3 f7 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  484d11:	83 c4 08             	add    esp,0x8
  484d14:	c7 47 58 00 00 00 00 	mov    DWORD PTR [edi+0x58],0x0
  484d1b:	8d 4f 08             	lea    ecx,[edi+0x8]
  484d1e:	c7 47 5c 0f 00 00 00 	mov    DWORD PTR [edi+0x5c],0xf
  484d25:	c6 47 48 00          	mov    BYTE PTR [edi+0x48],0x0
  484d29:	e8 e9 46 f8 ff       	call   0x409417 ; ["call resolved=0x46f270 "]
  484d2e:	e9 9b 12 00 00       	jmp    0x485fce
  484d33:	83 ec 18             	sub    esp,0x18
  484d36:	8d 83 c8 0c 00 00    	lea    eax,[ebx+0xcc8]
  484d3c:	89 45 e4             	mov    DWORD PTR [ebp-0x1c],eax
  484d3f:	8d b3 80 07 00 00    	lea    esi,[ebx+0x780]
  484d45:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  484d4b:	8b cc                	mov    ecx,esp
  484d4d:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484d50:	68 28 18 79 00       	push   0x791828
  484d55:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484d58:	e8 2e 0f f8 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  484d5d:	ff 75 e4             	push   DWORD PTR [ebp-0x1c]
  484d60:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  484d66:	8d 9f e0 01 00 00    	lea    ebx,[edi+0x1e0]
  484d6c:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484d6f:	8b ce                	mov    ecx,esi
  484d71:	53                   	push   ebx
  484d72:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484d75:	e8 31 30 f8 ff       	call   0x407dab ; ["call resolved=0x617dd0 Step::getConnectResult"]
  484d7a:	c6 45 fc 22          	mov    BYTE PTR [ebp-0x4],0x22
  484d7e:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  484d81:	8b d1                	mov    edx,ecx
  484d83:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  484d89:	8d 4f 48             	lea    ecx,[edi+0x48]
  484d8c:	89 55 ec             	mov    DWORD PTR [ebp-0x14],edx
  484d8f:	50                   	push   eax
  484d90:	89 55 fc             	mov    DWORD PTR [ebp-0x4],edx
  484d93:	e8 e9 13 f8 ff       	call   0x406181 ; ["call resolved=0x477450 "]
  484d98:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  484d9c:	8b cb                	mov    ecx,ebx
  484d9e:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  484da1:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  484da7:	e8 57 ec f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  484dac:	8b 97 31 05 00 00    	mov    edx,DWORD PTR [edi+0x531]
  484db2:	8d 9f f8 01 00 00    	lea    ebx,[edi+0x1f8]
  484db8:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  484dbe:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484dc1:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484dc4:	8d 82 20 0d 00 00    	lea    eax,[edx+0xd20]
  484dca:	50                   	push   eax
  484dcb:	8d 8a 80 07 00 00    	lea    ecx,[edx+0x780]
  484dd1:	53                   	push   ebx
  484dd2:	e8 64 45 f8 ff       	call   0x40933b ; ["call resolved=0x617cc0 "]
  484dd7:	c6 45 fc 23          	mov    BYTE PTR [ebp-0x4],0x23
  484ddb:	8d 4f 48             	lea    ecx,[edi+0x48]
  484dde:	8b 55 fc             	mov    edx,DWORD PTR [ebp-0x4]
  484de1:	89 97 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],edx
  484de7:	89 55 ec             	mov    DWORD PTR [ebp-0x14],edx
  484dea:	50                   	push   eax
  484deb:	89 55 fc             	mov    DWORD PTR [ebp-0x4],edx
  484dee:	e8 8e 13 f8 ff       	call   0x406181 ; ["call resolved=0x477450 "]
  484df3:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  484df7:	8b cb                	mov    ecx,ebx
  484df9:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  484dfc:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  484e02:	e8 fc eb f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  484e07:	8b b7 31 05 00 00    	mov    esi,DWORD PTR [edi+0x531]
  484e0d:	8a 86 85 00 00 00    	mov    al,BYTE PTR [esi+0x85]
  484e13:	90                   	nop
  484e14:	84 c0                	test   al,al
  484e16:	0f 84 8e 02 00 00    	je     0x4850aa
  484e1c:	6a 5c                	push   0x5c
  484e1e:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  484e23:	e8 3e 39 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  484e28:	83 c4 08             	add    esp,0x8
  484e2b:	85 c0                	test   eax,eax
  484e2d:	74 14                	je     0x484e43
  484e2f:	6a 5c                	push   0x5c
  484e31:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  484e36:	e8 2b 39 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  484e3b:	83 c4 08             	add    esp,0x8
  484e3e:	8d 48 01             	lea    ecx,[eax+0x1]
  484e41:	eb 05                	jmp    0x484e48
  484e43:	b9 d4 6a 6c 00       	mov    ecx,0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  484e48:	68 b4 6a 6c 00       	push   0x6c6ab4 ; ["vivo::Worker::connectSSDP"]
  484e4d:	68 d8 00 00 00       	push   0xd8
  484e52:	51                   	push   ecx
  484e53:	8d 97 10 02 00 00    	lea    edx,[edi+0x210]
  484e59:	c7 02 02 00 00 00    	mov    DWORD PTR [edx],0x2
  484e5f:	8d b7 14 02 00 00    	lea    esi,[edi+0x214]
  484e65:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  484e6b:	68 cc 6c 6c 00       	push   0x6c6ccc ; ["[ConntctionModule][%s:%d][%s]: cancel before return code \n"]
  484e70:	52                   	push   edx
  484e71:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484e74:	56                   	push   esi
  484e75:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484e78:	e8 8c 21 f8 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  484e7d:	83 c4 18             	add    esp,0x18
  484e80:	8b ce                	mov    ecx,esi
  484e82:	e8 7c eb f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  484e87:	83 ec 10             	sub    esp,0x10
  484e8a:	8b cc                	mov    ecx,esp
  484e8c:	89 65 e8             	mov    DWORD PTR [ebp-0x18],esp
  484e8f:	68 00 16 6c 00       	push   0x6c1600
  484e94:	e8 ab 40 f8 ff       	call   0x408f44 ; ["call resolved=0x43d710 "]
  484e99:	c6 45 fc 24          	mov    BYTE PTR [ebp-0x4],0x24
  484e9d:	8d 4f 08             	lea    ecx,[edi+0x8]
  484ea0:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  484ea3:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  484ea9:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484eac:	68 f4 13 6c 00       	push   0x6c13f4 ; ["error"]
  484eb1:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484eb4:	e8 25 e8 f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  484eb9:	8b c8                	mov    ecx,eax
  484ebb:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  484ebf:	e8 c1 f5 f7 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  484ec4:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  484eca:	83 ec 10             	sub    esp,0x10
  484ecd:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484ed0:	8b cc                	mov    ecx,esp
  484ed2:	89 65 e8             	mov    DWORD PTR [ebp-0x18],esp
  484ed5:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484ed8:	68 ec 19 6c 00       	push   0x6c19ec ; ["CANCEL"]
  484edd:	e8 28 2f f8 ff       	call   0x407e0a ; ["call resolved=0x43d3c0 "]
  484ee2:	c6 45 fc 25          	mov    BYTE PTR [ebp-0x4],0x25
  484ee6:	8d 4f 08             	lea    ecx,[edi+0x8]
  484ee9:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  484eec:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  484ef2:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484ef5:	68 20 69 6c 00       	push   0x6c6920 ; ["error_message"]
  484efa:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484efd:	e8 dc e7 f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  484f02:	8b c8                	mov    ecx,eax
  484f04:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  484f08:	e8 78 f5 f7 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  484f0d:	8b 87 31 05 00 00    	mov    eax,DWORD PTR [edi+0x531]
  484f13:	83 ec 18             	sub    esp,0x18
  484f16:	8b cc                	mov    ecx,esp
  484f18:	8d 98 80 07 00 00    	lea    ebx,[eax+0x780]
  484f1e:	05 20 0d 00 00       	add    eax,0xd20
  484f23:	89 45 e4             	mov    DWORD PTR [ebp-0x1c],eax
  484f26:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  484f2c:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484f2f:	68 c0 1a 79 00       	push   0x791ac0
  484f34:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484f37:	e8 4f 0d f8 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  484f3c:	ff 75 e4             	push   DWORD PTR [ebp-0x1c]
  484f3f:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  484f45:	8d 8f 2c 02 00 00    	lea    ecx,[edi+0x22c]
  484f4b:	51                   	push   ecx
  484f4c:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484f4f:	8b cb                	mov    ecx,ebx
  484f51:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484f54:	e8 52 2e f8 ff       	call   0x407dab ; ["call resolved=0x617dd0 Step::getConnectResult"]
  484f59:	c6 45 fc 26          	mov    BYTE PTR [ebp-0x4],0x26
  484f5d:	8d 5f 48             	lea    ebx,[edi+0x48]
  484f60:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  484f63:	8b d1                	mov    edx,ecx
  484f65:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  484f6b:	89 55 ec             	mov    DWORD PTR [ebp-0x14],edx
  484f6e:	89 55 fc             	mov    DWORD PTR [ebp-0x4],edx
  484f71:	50                   	push   eax
  484f72:	8b cb                	mov    ecx,ebx
  484f74:	e8 08 12 f8 ff       	call   0x406181 ; ["call resolved=0x477450 "]
  484f79:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  484f7d:	8d 8f 2c 02 00 00    	lea    ecx,[edi+0x22c]
  484f83:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  484f86:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  484f8c:	e8 72 ea f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  484f91:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  484f97:	83 ec 10             	sub    esp,0x10
  484f9a:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484f9d:	8b cc                	mov    ecx,esp
  484f9f:	89 65 e8             	mov    DWORD PTR [ebp-0x18],esp
  484fa2:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484fa5:	53                   	push   ebx
  484fa6:	e8 65 fb f7 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  484fab:	c6 45 fc 27          	mov    BYTE PTR [ebp-0x4],0x27
  484faf:	8d 4f 08             	lea    ecx,[edi+0x8]
  484fb2:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  484fb5:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  484fbb:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484fbe:	68 a0 6a 6c 00       	push   0x6c6aa0 ; ["connection_steps"]
  484fc3:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484fc6:	e8 13 e7 f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  484fcb:	8b c8                	mov    ecx,eax
  484fcd:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  484fd1:	e8 af f4 f7 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  484fd6:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  484fdc:	8d 8f 44 02 00 00    	lea    ecx,[edi+0x244]
  484fe2:	6a 00                	push   0x0
  484fe4:	6a 00                	push   0x0
  484fe6:	6a 20                	push   0x20
  484fe8:	6a ff                	push   0xffffffff
  484fea:	51                   	push   ecx
  484feb:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  484fee:	8d 4f 08             	lea    ecx,[edi+0x8]
  484ff1:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  484ff4:	e8 25 38 f8 ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  484ff9:	c6 45 fc 28          	mov    BYTE PTR [ebp-0x4],0x28
  484ffd:	8d 9f 5c 02 00 00    	lea    ebx,[edi+0x25c]
  485003:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  485006:	8b d1                	mov    edx,ecx
  485008:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  48500e:	50                   	push   eax
  48500f:	89 55 ec             	mov    DWORD PTR [ebp-0x14],edx
  485012:	53                   	push   ebx
  485013:	89 55 fc             	mov    DWORD PTR [ebp-0x4],edx
  485016:	e8 a1 1c f8 ff       	call   0x406cbc ; ["call resolved=0x458470 "]
  48501b:	83 c4 08             	add    esp,0x8
  48501e:	8d 4f d0             	lea    ecx,[edi-0x30]
  485021:	50                   	push   eax
  485022:	e8 ff 11 f8 ff       	call   0x406226 ; ["call resolved=0x4a2b20 "]
  485027:	8b cb                	mov    ecx,ebx
  485029:	e8 5e fc f7 ff       	call   0x404c8c ; ["call resolved=0x4721f0 "]
  48502e:	8d 8f 44 02 00 00    	lea    ecx,[edi+0x244]
  485034:	e8 ca e9 f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  485039:	8b 87 50 01 00 00    	mov    eax,DWORD PTR [edi+0x150]
  48503f:	89 45 d8             	mov    DWORD PTR [ebp-0x28],eax
  485042:	85 c0                	test   eax,eax
  485044:	74 06                	je     0x48504c
  485046:	ff 15 18 e4 79 00    	call   DWORD PTR ds:0x79e418
  48504c:	8b 47 5c             	mov    eax,DWORD PTR [edi+0x5c]
  48504f:	89 85 34 01 00 00    	mov    DWORD PTR [ebp+0x134],eax
  485055:	83 f8 10             	cmp    eax,0x10
  485058:	0f 82 b6 fc ff ff    	jb     0x484d14
  48505e:	8b 47 5c             	mov    eax,DWORD PTR [edi+0x5c]
  485061:	89 85 34 01 00 00    	mov    DWORD PTR [ebp+0x134],eax
  485067:	8b 57 48             	mov    edx,DWORD PTR [edi+0x48]
  48506a:	89 95 20 01 00 00    	mov    DWORD PTR [ebp+0x120],edx
  485070:	8d 48 01             	lea    ecx,[eax+0x1]
  485073:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  485079:	72 28                	jb     0x4850a3
  48507b:	8b 47 48             	mov    eax,DWORD PTR [edi+0x48]
  48507e:	83 c1 23             	add    ecx,0x23
  485081:	89 85 20 01 00 00    	mov    DWORD PTR [ebp+0x120],eax
  485087:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  48508a:	8b 47 48             	mov    eax,DWORD PTR [edi+0x48]
  48508d:	89 85 20 01 00 00    	mov    DWORD PTR [ebp+0x120],eax
  485093:	2b c2                	sub    eax,edx
  485095:	83 c0 fc             	add    eax,0xfffffffc
  485098:	83 f8 1f             	cmp    eax,0x1f
  48509b:	76 06                	jbe    0x4850a3
  48509d:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  4850a3:	51                   	push   ecx
  4850a4:	52                   	push   edx
  4850a5:	e9 62 fc ff ff       	jmp    0x484d0c
  4850aa:	8b 86 b0 06 00 00    	mov    eax,DWORD PTR [esi+0x6b0]
  4850b0:	83 f8 01             	cmp    eax,0x1
  4850b3:	0f 85 8b 02 00 00    	jne    0x485344
  4850b9:	8b 4f 60             	mov    ecx,DWORD PTR [edi+0x60]
  4850bc:	83 c1 60             	add    ecx,0x60
  4850bf:	6a 00                	push   0x0
  4850c1:	e8 65 0c f8 ff       	call   0x405d2b ; ["call resolved=0x472f40 "]
  4850c6:	8b c8                	mov    ecx,eax
  4850c8:	e8 8a 2b f8 ff       	call   0x407c57 ; ["call resolved=0x4816c0 "]
  4850cd:	6a 5c                	push   0x5c
  4850cf:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  4850d4:	8b d8                	mov    ebx,eax
  4850d6:	e8 8b 36 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4850db:	83 c4 08             	add    esp,0x8
  4850de:	85 c0                	test   eax,eax
  4850e0:	74 14                	je     0x4850f6
  4850e2:	6a 5c                	push   0x5c
  4850e4:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  4850e9:	e8 78 36 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4850ee:	83 c4 08             	add    esp,0x8
  4850f1:	8d 48 01             	lea    ecx,[eax+0x1]
  4850f4:	eb 05                	jmp    0x4850fb
  4850f6:	b9 d4 6a 6c 00       	mov    ecx,0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  4850fb:	53                   	push   ebx
  4850fc:	68 b4 6a 6c 00       	push   0x6c6ab4 ; ["vivo::Worker::connectSSDP"]
  485101:	68 e6 00 00 00       	push   0xe6
  485106:	51                   	push   ecx
  485107:	8d 97 60 02 00 00    	lea    edx,[edi+0x260]
  48510d:	c7 02 02 00 00 00    	mov    DWORD PTR [edx],0x2
  485113:	8d b7 64 02 00 00    	lea    esi,[edi+0x264]
  485119:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  48511f:	68 18 6d 6c 00       	push   0x6c6d18 ; ["[ConntctionModule][%s:%d][%s]: phone is accepted the request, phone ip is: %s\n"]
  485124:	52                   	push   edx
  485125:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485128:	56                   	push   esi
  485129:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  48512c:	e8 d8 1e f8 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  485131:	83 c4 1c             	add    esp,0x1c
  485134:	8b ce                	mov    ecx,esi
  485136:	e8 c8 e8 f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  48513b:	8b 47 60             	mov    eax,DWORD PTR [edi+0x60]
  48513e:	8d b7 7c 02 00 00    	lea    esi,[edi+0x27c]
  485144:	89 45 cc             	mov    DWORD PTR [ebp-0x34],eax
  485147:	6a 00                	push   0x0
  485149:	8d 48 60             	lea    ecx,[eax+0x60]
  48514c:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  485152:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485155:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485158:	e8 ce 0b f8 ff       	call   0x405d2b ; ["call resolved=0x472f40 "]
  48515d:	50                   	push   eax
  48515e:	56                   	push   esi
  48515f:	e8 58 1b f8 ff       	call   0x406cbc ; ["call resolved=0x458470 "]
  485164:	83 c4 08             	add    esp,0x8
  485167:	c6 45 fc 29          	mov    BYTE PTR [ebp-0x4],0x29
  48516b:	8b ce                	mov    ecx,esi
  48516d:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  485170:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  485176:	8d 87 80 02 00 00    	lea    eax,[edi+0x280]
  48517c:	50                   	push   eax
  48517d:	e8 df 43 f8 ff       	call   0x409561 ; ["call resolved=0x472f70 "]
  485182:	8b 8f 2c 05 00 00    	mov    ecx,DWORD PTR [edi+0x52c]
  485188:	8d 9f 88 02 00 00    	lea    ebx,[edi+0x288]
  48518e:	89 4d ec             	mov    DWORD PTR [ebp-0x14],ecx
  485191:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  485194:	ff 70 04             	push   DWORD PTR [eax+0x4]
  485197:	ff 30                	push   DWORD PTR [eax]
  485199:	53                   	push   ebx
  48519a:	e8 f4 0c f8 ff       	call   0x405e93 ; ["call resolved=0x4a64f0 "]
  48519f:	83 c4 0c             	add    esp,0xc
  4851a2:	c6 45 fc 2a          	mov    BYTE PTR [ebp-0x4],0x2a
  4851a6:	83 ec 10             	sub    esp,0x10
  4851a9:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  4851ac:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  4851b2:	89 4d ec             	mov    DWORD PTR [ebp-0x14],ecx
  4851b5:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  4851b8:	8b cc                	mov    ecx,esp
  4851ba:	89 65 e8             	mov    DWORD PTR [ebp-0x18],esp
  4851bd:	50                   	push   eax
  4851be:	e8 85 02 f8 ff       	call   0x405448 ; ["call resolved=0x43de60 "]
  4851c3:	c6 45 fc 2b          	mov    BYTE PTR [ebp-0x4],0x2b
  4851c7:	8d 4f 08             	lea    ecx,[edi+0x8]
  4851ca:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4851cd:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  4851d3:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4851d6:	68 b4 66 6c 00       	push   0x6c66b4 ; ["data"]
  4851db:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4851de:	e8 fb e4 f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  4851e3:	8b c8                	mov    ecx,eax
  4851e5:	c6 45 fc 2a          	mov    BYTE PTR [ebp-0x4],0x2a
  4851e9:	e8 97 f2 f7 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  4851ee:	c6 45 fc 29          	mov    BYTE PTR [ebp-0x4],0x29
  4851f2:	8b cb                	mov    ecx,ebx
  4851f4:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4851f7:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  4851fd:	e8 01 e8 f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  485202:	8b 87 31 05 00 00    	mov    eax,DWORD PTR [edi+0x531]
  485208:	8d 98 80 07 00 00    	lea    ebx,[eax+0x780]
  48520e:	05 20 0d 00 00       	add    eax,0xd20
  485213:	89 45 e4             	mov    DWORD PTR [ebp-0x1c],eax
  485216:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  48521c:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  48521f:	83 ec 18             	sub    esp,0x18
  485222:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485225:	8b cc                	mov    ecx,esp
  485227:	68 28 18 79 00       	push   0x791828
  48522c:	e8 5a 0a f8 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  485231:	ff 75 e4             	push   DWORD PTR [ebp-0x1c]
  485234:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  48523a:	8d 8f a0 02 00 00    	lea    ecx,[edi+0x2a0]
  485240:	51                   	push   ecx
  485241:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485244:	8b cb                	mov    ecx,ebx
  485246:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485249:	e8 5d 2b f8 ff       	call   0x407dab ; ["call resolved=0x617dd0 Step::getConnectResult"]
  48524e:	c6 45 fc 2c          	mov    BYTE PTR [ebp-0x4],0x2c
  485252:	8d 5f 48             	lea    ebx,[edi+0x48]
  485255:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  485258:	8b d1                	mov    edx,ecx
  48525a:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  485260:	8b cb                	mov    ecx,ebx
  485262:	89 55 ec             	mov    DWORD PTR [ebp-0x14],edx
  485265:	50                   	push   eax
  485266:	89 55 fc             	mov    DWORD PTR [ebp-0x4],edx
  485269:	e8 13 0f f8 ff       	call   0x406181 ; ["call resolved=0x477450 "]
  48526e:	c6 45 fc 29          	mov    BYTE PTR [ebp-0x4],0x29
  485272:	8d 8f a0 02 00 00    	lea    ecx,[edi+0x2a0]
  485278:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  48527b:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  485281:	e8 7d e7 f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  485286:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  48528c:	83 ec 10             	sub    esp,0x10
  48528f:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485292:	8b cc                	mov    ecx,esp
  485294:	89 65 e8             	mov    DWORD PTR [ebp-0x18],esp
  485297:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  48529a:	53                   	push   ebx
  48529b:	e8 70 f8 f7 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  4852a0:	c6 45 fc 2d          	mov    BYTE PTR [ebp-0x4],0x2d
  4852a4:	8d 4f 08             	lea    ecx,[edi+0x8]
  4852a7:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4852aa:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  4852b0:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4852b3:	68 a0 6a 6c 00       	push   0x6c6aa0 ; ["connection_steps"]
  4852b8:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4852bb:	e8 1e e4 f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  4852c0:	8b c8                	mov    ecx,eax
  4852c2:	c6 45 fc 29          	mov    BYTE PTR [ebp-0x4],0x29
  4852c6:	e8 ba f1 f7 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  4852cb:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  4852cf:	8d 8f 7c 02 00 00    	lea    ecx,[edi+0x27c]
  4852d5:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4852d8:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  4852de:	e8 a9 f9 f7 ff       	call   0x404c8c ; ["call resolved=0x4721f0 "]
  4852e3:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  4852e9:	8d 9f d8 04 00 00    	lea    ebx,[edi+0x4d8]
  4852ef:	6a 00                	push   0x0
  4852f1:	6a 00                	push   0x0
  4852f3:	6a 20                	push   0x20
  4852f5:	6a ff                	push   0xffffffff
  4852f7:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4852fa:	8d 4f 08             	lea    ecx,[edi+0x8]
  4852fd:	53                   	push   ebx
  4852fe:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485301:	e8 18 35 f8 ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  485306:	c6 45 fc 46          	mov    BYTE PTR [ebp-0x4],0x46
  48530a:	8d 8f f0 04 00 00    	lea    ecx,[edi+0x4f0]
  485310:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  485313:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  485319:	53                   	push   ebx
  48531a:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  48531d:	51                   	push   ecx
  48531e:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485321:	e8 96 19 f8 ff       	call   0x406cbc ; ["call resolved=0x458470 "]
  485326:	83 c4 08             	add    esp,0x8
  485329:	8d 4f d0             	lea    ecx,[edi-0x30]
  48532c:	50                   	push   eax
  48532d:	e8 f4 0e f8 ff       	call   0x406226 ; ["call resolved=0x4a2b20 "]
  485332:	8d 8f f0 04 00 00    	lea    ecx,[edi+0x4f0]
  485338:	e8 4f f9 f7 ff       	call   0x404c8c ; ["call resolved=0x4721f0 "]
  48533d:	8b cb                	mov    ecx,ebx
  48533f:	e9 f0 fc ff ff       	jmp    0x485034
  485344:	6a 5c                	push   0x5c
  485346:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  48534b:	83 f8 0b             	cmp    eax,0xb
  48534e:	0f 85 0a 03 00 00    	jne    0x48565e
  485354:	e8 0d 34 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  485359:	83 c4 08             	add    esp,0x8
  48535c:	85 c0                	test   eax,eax
  48535e:	74 14                	je     0x485374
  485360:	6a 5c                	push   0x5c
  485362:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  485367:	e8 fa 33 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  48536c:	83 c4 08             	add    esp,0x8
  48536f:	8d 48 01             	lea    ecx,[eax+0x1]
  485372:	eb 05                	jmp    0x485379
  485374:	b9 d4 6a 6c 00       	mov    ecx,0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  485379:	68 b4 6a 6c 00       	push   0x6c6ab4 ; ["vivo::Worker::connectSSDP"]
  48537e:	68 f3 00 00 00       	push   0xf3
  485383:	51                   	push   ecx
  485384:	8d 97 b8 02 00 00    	lea    edx,[edi+0x2b8]
  48538a:	c7 02 02 00 00 00    	mov    DWORD PTR [edx],0x2
  485390:	8d 9f bc 02 00 00    	lea    ebx,[edi+0x2bc]
  485396:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  48539c:	68 78 6d 6c 00       	push   0x6c6d78 ; ["[ConntctionModule][%s:%d][%s]: phone is busy 2122\n"]
  4853a1:	52                   	push   edx
  4853a2:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4853a5:	53                   	push   ebx
  4853a6:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4853a9:	e8 5b 1c f8 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4853ae:	83 c4 18             	add    esp,0x18
  4853b1:	8b cb                	mov    ecx,ebx
  4853b3:	e8 4b e6 f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  4853b8:	6a 00                	push   0x0
  4853ba:	6a 00                	push   0x0
  4853bc:	68 11 27 00 00       	push   0x2711
  4853c1:	8b ce                	mov    ecx,esi
  4853c3:	e8 2e fd f7 ff       	call   0x4050f6 ; ["call resolved=0x49d1b0 "]
  4853c8:	8b 9e b0 06 00 00    	mov    ebx,DWORD PTR [esi+0x6b0]
  4853ce:	6a 5c                	push   0x5c
  4853d0:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  4853d5:	e8 8c 33 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4853da:	83 c4 08             	add    esp,0x8
  4853dd:	85 c0                	test   eax,eax
  4853df:	74 14                	je     0x4853f5
  4853e1:	6a 5c                	push   0x5c
  4853e3:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  4853e8:	e8 79 33 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4853ed:	83 c4 08             	add    esp,0x8
  4853f0:	8d 48 01             	lea    ecx,[eax+0x1]
  4853f3:	eb 05                	jmp    0x4853fa
  4853f5:	b9 d4 6a 6c 00       	mov    ecx,0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  4853fa:	53                   	push   ebx
  4853fb:	68 b4 6a 6c 00       	push   0x6c6ab4 ; ["vivo::Worker::connectSSDP"]
  485400:	68 f6 00 00 00       	push   0xf6
  485405:	51                   	push   ecx
  485406:	8d 97 d4 02 00 00    	lea    edx,[edi+0x2d4]
  48540c:	c7 02 02 00 00 00    	mov    DWORD PTR [edx],0x2
  485412:	8d b7 d8 02 00 00    	lea    esi,[edi+0x2d8]
  485418:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  48541e:	68 b8 6d 6c 00       	push   0x6c6db8 ; ["[ConntctionModule][%s:%d][%s]: return_code_ %d , phone is busy\n"]
  485423:	52                   	push   edx
  485424:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485427:	56                   	push   esi
  485428:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  48542b:	e8 d9 1b f8 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  485430:	83 c4 1c             	add    esp,0x1c
  485433:	8b ce                	mov    ecx,esi
  485435:	e8 c9 e5 f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  48543a:	83 ec 10             	sub    esp,0x10
  48543d:	8b cc                	mov    ecx,esp
  48543f:	89 65 e8             	mov    DWORD PTR [ebp-0x18],esp
  485442:	68 f4 15 6c 00       	push   0x6c15f4
  485447:	e8 f8 3a f8 ff       	call   0x408f44 ; ["call resolved=0x43d710 "]
  48544c:	c6 45 fc 2e          	mov    BYTE PTR [ebp-0x4],0x2e
  485450:	8d 4f 08             	lea    ecx,[edi+0x8]
  485453:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  485456:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  48545c:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  48545f:	68 f4 13 6c 00       	push   0x6c13f4 ; ["error"]
  485464:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485467:	e8 72 e2 f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  48546c:	8b c8                	mov    ecx,eax
  48546e:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  485472:	e8 0e f0 f7 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  485477:	6a 5c                	push   0x5c
  485479:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  48547e:	e8 e3 32 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  485483:	83 c4 08             	add    esp,0x8
  485486:	85 c0                	test   eax,eax
  485488:	74 14                	je     0x48549e
  48548a:	6a 5c                	push   0x5c
  48548c:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  485491:	e8 d0 32 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  485496:	83 c4 08             	add    esp,0x8
  485499:	8d 50 01             	lea    edx,[eax+0x1]
  48549c:	eb 05                	jmp    0x4854a3
  48549e:	ba d4 6a 6c 00       	mov    edx,0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  4854a3:	68 b4 6a 6c 00       	push   0x6c6ab4 ; ["vivo::Worker::connectSSDP"]
  4854a8:	68 fa 00 00 00       	push   0xfa
  4854ad:	52                   	push   edx
  4854ae:	8d 8f f0 02 00 00    	lea    ecx,[edi+0x2f0]
  4854b4:	c7 01 02 00 00 00    	mov    DWORD PTR [ecx],0x2
  4854ba:	8d 9f f4 02 00 00    	lea    ebx,[edi+0x2f4]
  4854c0:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  4854c6:	68 04 6e 6c 00       	push   0x6c6e04 ; ["[ConntctionModule][%s:%d][%s]: phone is busy.\n"]
  4854cb:	51                   	push   ecx
  4854cc:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4854cf:	53                   	push   ebx
  4854d0:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4854d3:	e8 31 1b f8 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4854d8:	83 c4 18             	add    esp,0x18
  4854db:	c6 45 fc 2f          	mov    BYTE PTR [ebp-0x4],0x2f
  4854df:	83 ec 10             	sub    esp,0x10
  4854e2:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  4854e5:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  4854eb:	89 4d ec             	mov    DWORD PTR [ebp-0x14],ecx
  4854ee:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  4854f1:	8b cc                	mov    ecx,esp
  4854f3:	89 65 e8             	mov    DWORD PTR [ebp-0x18],esp
  4854f6:	50                   	push   eax
  4854f7:	e8 4c ff f7 ff       	call   0x405448 ; ["call resolved=0x43de60 "]
  4854fc:	c6 45 fc 30          	mov    BYTE PTR [ebp-0x4],0x30
  485500:	8d 4f 08             	lea    ecx,[edi+0x8]
  485503:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  485506:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  48550c:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  48550f:	68 20 69 6c 00       	push   0x6c6920 ; ["error_message"]
  485514:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485517:	e8 c2 e1 f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  48551c:	8b c8                	mov    ecx,eax
  48551e:	c6 45 fc 2f          	mov    BYTE PTR [ebp-0x4],0x2f
  485522:	e8 5e ef f7 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  485527:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  48552b:	8b cb                	mov    ecx,ebx
  48552d:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  485530:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  485536:	e8 c8 e4 f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  48553b:	8b 87 31 05 00 00    	mov    eax,DWORD PTR [edi+0x531]
  485541:	83 ec 18             	sub    esp,0x18
  485544:	8b cc                	mov    ecx,esp
  485546:	8d 98 80 07 00 00    	lea    ebx,[eax+0x780]
  48554c:	05 20 0d 00 00       	add    eax,0xd20
  485551:	89 45 e4             	mov    DWORD PTR [ebp-0x1c],eax
  485554:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  48555a:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  48555d:	68 d8 1a 79 00       	push   0x791ad8
  485562:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485565:	e8 21 07 f8 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  48556a:	ff 75 e4             	push   DWORD PTR [ebp-0x1c]
  48556d:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  485573:	8d 8f 0c 03 00 00    	lea    ecx,[edi+0x30c]
  485579:	51                   	push   ecx
  48557a:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  48557d:	8b cb                	mov    ecx,ebx
  48557f:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485582:	e8 24 28 f8 ff       	call   0x407dab ; ["call resolved=0x617dd0 Step::getConnectResult"]
  485587:	c6 45 fc 31          	mov    BYTE PTR [ebp-0x4],0x31
  48558b:	8d 5f 48             	lea    ebx,[edi+0x48]
  48558e:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  485591:	8b d1                	mov    edx,ecx
  485593:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  485599:	8b cb                	mov    ecx,ebx
  48559b:	89 55 ec             	mov    DWORD PTR [ebp-0x14],edx
  48559e:	50                   	push   eax
  48559f:	89 55 fc             	mov    DWORD PTR [ebp-0x4],edx
  4855a2:	e8 da 0b f8 ff       	call   0x406181 ; ["call resolved=0x477450 "]
  4855a7:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  4855ab:	8d 8f 0c 03 00 00    	lea    ecx,[edi+0x30c]
  4855b1:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4855b4:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  4855ba:	e8 44 e4 f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  4855bf:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  4855c5:	83 ec 10             	sub    esp,0x10
  4855c8:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4855cb:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4855ce:	8b cc                	mov    ecx,esp
  4855d0:	89 65 e8             	mov    DWORD PTR [ebp-0x18],esp
  4855d3:	53                   	push   ebx
  4855d4:	e8 37 f5 f7 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  4855d9:	c6 45 fc 32          	mov    BYTE PTR [ebp-0x4],0x32
  4855dd:	8d 4f 08             	lea    ecx,[edi+0x8]
  4855e0:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4855e3:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  4855e9:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4855ec:	68 a0 6a 6c 00       	push   0x6c6aa0 ; ["connection_steps"]
  4855f1:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4855f4:	e8 e5 e0 f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  4855f9:	8b c8                	mov    ecx,eax
  4855fb:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  4855ff:	e8 81 ee f7 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  485604:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  48560a:	8d 9f 24 03 00 00    	lea    ebx,[edi+0x324]
  485610:	6a 00                	push   0x0
  485612:	6a 00                	push   0x0
  485614:	6a 20                	push   0x20
  485616:	6a ff                	push   0xffffffff
  485618:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  48561b:	8d 4f 08             	lea    ecx,[edi+0x8]
  48561e:	53                   	push   ebx
  48561f:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485622:	e8 f7 31 f8 ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  485627:	c6 45 fc 33          	mov    BYTE PTR [ebp-0x4],0x33
  48562b:	8d 8f 3c 03 00 00    	lea    ecx,[edi+0x33c]
  485631:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  485634:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  48563a:	53                   	push   ebx
  48563b:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  48563e:	51                   	push   ecx
  48563f:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485642:	e8 75 16 f8 ff       	call   0x406cbc ; ["call resolved=0x458470 "]
  485647:	83 c4 08             	add    esp,0x8
  48564a:	8d 4f d0             	lea    ecx,[edi-0x30]
  48564d:	50                   	push   eax
  48564e:	e8 d3 0b f8 ff       	call   0x406226 ; ["call resolved=0x4a2b20 "]
  485653:	8d 8f 3c 03 00 00    	lea    ecx,[edi+0x33c]
  485659:	e9 da fc ff ff       	jmp    0x485338
  48565e:	83 f8 0d             	cmp    eax,0xd
  485661:	0f 85 09 03 00 00    	jne    0x485970
  485667:	e8 fa 30 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  48566c:	83 c4 08             	add    esp,0x8
  48566f:	85 c0                	test   eax,eax
  485671:	74 14                	je     0x485687
  485673:	6a 5c                	push   0x5c
  485675:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  48567a:	e8 e7 30 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  48567f:	83 c4 08             	add    esp,0x8
  485682:	8d 48 01             	lea    ecx,[eax+0x1]
  485685:	eb 05                	jmp    0x48568c
  485687:	b9 d4 6a 6c 00       	mov    ecx,0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  48568c:	68 b4 6a 6c 00       	push   0x6c6ab4 ; ["vivo::Worker::connectSSDP"]
  485691:	68 05 01 00 00       	push   0x105
  485696:	51                   	push   ecx
  485697:	8d 97 40 03 00 00    	lea    edx,[edi+0x340]
  48569d:	c7 02 02 00 00 00    	mov    DWORD PTR [edx],0x2
  4856a3:	8d 9f 44 03 00 00    	lea    ebx,[edi+0x344]
  4856a9:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  4856af:	68 40 6e 6c 00       	push   0x6c6e40
  4856b4:	52                   	push   edx
  4856b5:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4856b8:	53                   	push   ebx
  4856b9:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4856bc:	e8 48 19 f8 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4856c1:	83 c4 18             	add    esp,0x18
  4856c4:	8b cb                	mov    ecx,ebx
  4856c6:	e8 38 e3 f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  4856cb:	6a 00                	push   0x0
  4856cd:	6a 00                	push   0x0
  4856cf:	68 11 27 00 00       	push   0x2711
  4856d4:	8b ce                	mov    ecx,esi
  4856d6:	e8 1b fa f7 ff       	call   0x4050f6 ; ["call resolved=0x49d1b0 "]
  4856db:	8b 9e b0 06 00 00    	mov    ebx,DWORD PTR [esi+0x6b0]
  4856e1:	6a 5c                	push   0x5c
  4856e3:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  4856e8:	e8 79 30 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4856ed:	83 c4 08             	add    esp,0x8
  4856f0:	85 c0                	test   eax,eax
  4856f2:	74 14                	je     0x485708
  4856f4:	6a 5c                	push   0x5c
  4856f6:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  4856fb:	e8 66 30 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  485700:	83 c4 08             	add    esp,0x8
  485703:	8d 48 01             	lea    ecx,[eax+0x1]
  485706:	eb 05                	jmp    0x48570d
  485708:	b9 d4 6a 6c 00       	mov    ecx,0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  48570d:	53                   	push   ebx
  48570e:	68 b4 6a 6c 00       	push   0x6c6ab4 ; ["vivo::Worker::connectSSDP"]
  485713:	68 08 01 00 00       	push   0x108
  485718:	51                   	push   ecx
  485719:	8d 97 5c 03 00 00    	lea    edx,[edi+0x35c]
  48571f:	c7 02 02 00 00 00    	mov    DWORD PTR [edx],0x2
  485725:	8d b7 60 03 00 00    	lea    esi,[edi+0x360]
  48572b:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  485731:	68 b8 6d 6c 00       	push   0x6c6db8 ; ["[ConntctionModule][%s:%d][%s]: return_code_ %d , phone is busy\n"]
  485736:	52                   	push   edx
  485737:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  48573a:	56                   	push   esi
  48573b:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  48573e:	e8 c6 18 f8 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  485743:	83 c4 1c             	add    esp,0x1c
  485746:	8b ce                	mov    ecx,esi
  485748:	e8 b6 e2 f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  48574d:	83 ec 10             	sub    esp,0x10
  485750:	8b cc                	mov    ecx,esp
  485752:	89 65 e8             	mov    DWORD PTR [ebp-0x18],esp
  485755:	68 08 16 6c 00       	push   0x6c1608
  48575a:	e8 e5 37 f8 ff       	call   0x408f44 ; ["call resolved=0x43d710 "]
  48575f:	c6 45 fc 34          	mov    BYTE PTR [ebp-0x4],0x34
  485763:	8d 4f 08             	lea    ecx,[edi+0x8]
  485766:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  485769:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  48576f:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485772:	68 f4 13 6c 00       	push   0x6c13f4 ; ["error"]
  485777:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  48577a:	e8 5f df f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  48577f:	8b c8                	mov    ecx,eax
  485781:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  485785:	e8 fb ec f7 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  48578a:	6a 5c                	push   0x5c
  48578c:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  485791:	e8 d0 2f 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  485796:	83 c4 08             	add    esp,0x8
  485799:	85 c0                	test   eax,eax
  48579b:	74 14                	je     0x4857b1
  48579d:	6a 5c                	push   0x5c
  48579f:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  4857a4:	e8 bd 2f 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4857a9:	83 c4 08             	add    esp,0x8
  4857ac:	8d 50 01             	lea    edx,[eax+0x1]
  4857af:	eb 05                	jmp    0x4857b6
  4857b1:	ba d4 6a 6c 00       	mov    edx,0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  4857b6:	68 b4 6a 6c 00       	push   0x6c6ab4 ; ["vivo::Worker::connectSSDP"]
  4857bb:	68 0c 01 00 00       	push   0x10c
  4857c0:	52                   	push   edx
  4857c1:	8d 8f 78 03 00 00    	lea    ecx,[edi+0x378]
  4857c7:	c7 01 02 00 00 00    	mov    DWORD PTR [ecx],0x2
  4857cd:	8d 9f 7c 03 00 00    	lea    ebx,[edi+0x37c]
  4857d3:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  4857d9:	68 90 6e 6c 00       	push   0x6c6e90
  4857de:	51                   	push   ecx
  4857df:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4857e2:	53                   	push   ebx
  4857e3:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4857e6:	e8 1e 18 f8 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4857eb:	83 c4 18             	add    esp,0x18
  4857ee:	c6 45 fc 35          	mov    BYTE PTR [ebp-0x4],0x35
  4857f2:	83 ec 10             	sub    esp,0x10
  4857f5:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  4857f8:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  4857fe:	89 4d ec             	mov    DWORD PTR [ebp-0x14],ecx
  485801:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  485804:	8b cc                	mov    ecx,esp
  485806:	89 65 e8             	mov    DWORD PTR [ebp-0x18],esp
  485809:	50                   	push   eax
  48580a:	e8 39 fc f7 ff       	call   0x405448 ; ["call resolved=0x43de60 "]
  48580f:	c6 45 fc 36          	mov    BYTE PTR [ebp-0x4],0x36
  485813:	8d 4f 08             	lea    ecx,[edi+0x8]
  485816:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  485819:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  48581f:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485822:	68 20 69 6c 00       	push   0x6c6920 ; ["error_message"]
  485827:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  48582a:	e8 af de f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  48582f:	8b c8                	mov    ecx,eax
  485831:	c6 45 fc 35          	mov    BYTE PTR [ebp-0x4],0x35
  485835:	e8 4b ec f7 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  48583a:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  48583e:	8b cb                	mov    ecx,ebx
  485840:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  485843:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  485849:	e8 b5 e1 f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  48584e:	8b 87 31 05 00 00    	mov    eax,DWORD PTR [edi+0x531]
  485854:	83 ec 18             	sub    esp,0x18
  485857:	8d 88 80 07 00 00    	lea    ecx,[eax+0x780]
  48585d:	05 20 0d 00 00       	add    eax,0xd20
  485862:	89 4d e8             	mov    DWORD PTR [ebp-0x18],ecx
  485865:	8b cc                	mov    ecx,esp
  485867:	89 45 e4             	mov    DWORD PTR [ebp-0x1c],eax
  48586a:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  485870:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485873:	68 d8 1a 79 00       	push   0x791ad8
  485878:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  48587b:	e8 0b 04 f8 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  485880:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  485886:	8d 9f 94 03 00 00    	lea    ebx,[edi+0x394]
  48588c:	ff 75 e4             	push   DWORD PTR [ebp-0x1c]
  48588f:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485892:	8b 4d e8             	mov    ecx,DWORD PTR [ebp-0x18]
  485895:	53                   	push   ebx
  485896:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485899:	e8 0d 25 f8 ff       	call   0x407dab ; ["call resolved=0x617dd0 Step::getConnectResult"]
  48589e:	c6 45 fc 37          	mov    BYTE PTR [ebp-0x4],0x37
  4858a2:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  4858a5:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  4858ab:	89 4d ec             	mov    DWORD PTR [ebp-0x14],ecx
  4858ae:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  4858b1:	8d 4f 48             	lea    ecx,[edi+0x48]
  4858b4:	50                   	push   eax
  4858b5:	e8 c7 08 f8 ff       	call   0x406181 ; ["call resolved=0x477450 "]
  4858ba:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  4858be:	8b cb                	mov    ecx,ebx
  4858c0:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4858c3:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  4858c9:	e8 35 e1 f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  4858ce:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  4858d4:	83 ec 10             	sub    esp,0x10
  4858d7:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4858da:	8b cc                	mov    ecx,esp
  4858dc:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4858df:	8d 47 48             	lea    eax,[edi+0x48]
  4858e2:	89 65 e0             	mov    DWORD PTR [ebp-0x20],esp
  4858e5:	50                   	push   eax
  4858e6:	e8 25 f2 f7 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  4858eb:	c6 45 fc 38          	mov    BYTE PTR [ebp-0x4],0x38
  4858ef:	8d 4f 08             	lea    ecx,[edi+0x8]
  4858f2:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4858f5:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  4858fb:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4858fe:	68 a0 6a 6c 00       	push   0x6c6aa0 ; ["connection_steps"]
  485903:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485906:	e8 d3 dd f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  48590b:	8b c8                	mov    ecx,eax
  48590d:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  485911:	e8 6f eb f7 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  485916:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  48591c:	8d 9f ac 03 00 00    	lea    ebx,[edi+0x3ac]
  485922:	6a 00                	push   0x0
  485924:	6a 00                	push   0x0
  485926:	6a 20                	push   0x20
  485928:	6a ff                	push   0xffffffff
  48592a:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  48592d:	8d 4f 08             	lea    ecx,[edi+0x8]
  485930:	53                   	push   ebx
  485931:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485934:	e8 e5 2e f8 ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  485939:	c6 45 fc 39          	mov    BYTE PTR [ebp-0x4],0x39
  48593d:	8d 8f c4 03 00 00    	lea    ecx,[edi+0x3c4]
  485943:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  485946:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  48594c:	53                   	push   ebx
  48594d:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485950:	51                   	push   ecx
  485951:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485954:	e8 63 13 f8 ff       	call   0x406cbc ; ["call resolved=0x458470 "]
  485959:	83 c4 08             	add    esp,0x8
  48595c:	8d 4f d0             	lea    ecx,[edi-0x30]
  48595f:	50                   	push   eax
  485960:	e8 c1 08 f8 ff       	call   0x406226 ; ["call resolved=0x4a2b20 "]
  485965:	8d 8f c4 03 00 00    	lea    ecx,[edi+0x3c4]
  48596b:	e9 c8 f9 ff ff       	jmp    0x485338
  485970:	83 f8 ff             	cmp    eax,0xffffffff
  485973:	0f 85 0a 03 00 00    	jne    0x485c83
  485979:	e8 e8 2d 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  48597e:	83 c4 08             	add    esp,0x8
  485981:	85 c0                	test   eax,eax
  485983:	74 14                	je     0x485999
  485985:	6a 5c                	push   0x5c
  485987:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  48598c:	e8 d5 2d 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  485991:	83 c4 08             	add    esp,0x8
  485994:	8d 48 01             	lea    ecx,[eax+0x1]
  485997:	eb 05                	jmp    0x48599e
  485999:	b9 d4 6a 6c 00       	mov    ecx,0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  48599e:	68 b4 6a 6c 00       	push   0x6c6ab4 ; ["vivo::Worker::connectSSDP"]
  4859a3:	68 17 01 00 00       	push   0x117
  4859a8:	51                   	push   ecx
  4859a9:	8d 97 c8 03 00 00    	lea    edx,[edi+0x3c8]
  4859af:	c7 02 02 00 00 00    	mov    DWORD PTR [edx],0x2
  4859b5:	8d 9f cc 03 00 00    	lea    ebx,[edi+0x3cc]
  4859bb:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  4859c1:	68 e0 6e 6c 00       	push   0x6c6ee0 ; ["[ConntctionModule][%s:%d][%s]: no response from phone\n"]
  4859c6:	52                   	push   edx
  4859c7:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4859ca:	53                   	push   ebx
  4859cb:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4859ce:	e8 36 16 f8 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4859d3:	83 c4 18             	add    esp,0x18
  4859d6:	8b cb                	mov    ecx,ebx
  4859d8:	e8 26 e0 f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  4859dd:	6a 00                	push   0x0
  4859df:	6a 00                	push   0x0
  4859e1:	68 11 27 00 00       	push   0x2711
  4859e6:	8b ce                	mov    ecx,esi
  4859e8:	e8 09 f7 f7 ff       	call   0x4050f6 ; ["call resolved=0x49d1b0 "]
  4859ed:	8b 9e b0 06 00 00    	mov    ebx,DWORD PTR [esi+0x6b0]
  4859f3:	6a 5c                	push   0x5c
  4859f5:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  4859fa:	e8 67 2d 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4859ff:	83 c4 08             	add    esp,0x8
  485a02:	85 c0                	test   eax,eax
  485a04:	74 14                	je     0x485a1a
  485a06:	6a 5c                	push   0x5c
  485a08:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  485a0d:	e8 54 2d 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  485a12:	83 c4 08             	add    esp,0x8
  485a15:	8d 48 01             	lea    ecx,[eax+0x1]
  485a18:	eb 05                	jmp    0x485a1f
  485a1a:	b9 d4 6a 6c 00       	mov    ecx,0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  485a1f:	53                   	push   ebx
  485a20:	68 b4 6a 6c 00       	push   0x6c6ab4 ; ["vivo::Worker::connectSSDP"]
  485a25:	68 1a 01 00 00       	push   0x11a
  485a2a:	51                   	push   ecx
  485a2b:	8d 97 e4 03 00 00    	lea    edx,[edi+0x3e4]
  485a31:	c7 02 02 00 00 00    	mov    DWORD PTR [edx],0x2
  485a37:	8d b7 e8 03 00 00    	lea    esi,[edi+0x3e8]
  485a3d:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  485a43:	68 24 6f 6c 00       	push   0x6c6f24 ; ["[ConntctionModule][%s:%d][%s]: return_code_ %d \n"]
  485a48:	52                   	push   edx
  485a49:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485a4c:	56                   	push   esi
  485a4d:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485a50:	e8 b4 15 f8 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  485a55:	83 c4 1c             	add    esp,0x1c
  485a58:	8b ce                	mov    ecx,esi
  485a5a:	e8 a4 df f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  485a5f:	83 ec 10             	sub    esp,0x10
  485a62:	8b cc                	mov    ecx,esp
  485a64:	89 65 e0             	mov    DWORD PTR [ebp-0x20],esp
  485a67:	68 f0 15 6c 00       	push   0x6c15f0
  485a6c:	e8 d3 34 f8 ff       	call   0x408f44 ; ["call resolved=0x43d710 "]
  485a71:	c6 45 fc 3a          	mov    BYTE PTR [ebp-0x4],0x3a
  485a75:	8d 4f 08             	lea    ecx,[edi+0x8]
  485a78:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  485a7b:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  485a81:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485a84:	68 f4 13 6c 00       	push   0x6c13f4 ; ["error"]
  485a89:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485a8c:	e8 4d dc f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  485a91:	8b c8                	mov    ecx,eax
  485a93:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  485a97:	e8 e9 e9 f7 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  485a9c:	6a 5c                	push   0x5c
  485a9e:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  485aa3:	e8 be 2c 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  485aa8:	83 c4 08             	add    esp,0x8
  485aab:	85 c0                	test   eax,eax
  485aad:	74 14                	je     0x485ac3
  485aaf:	6a 5c                	push   0x5c
  485ab1:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  485ab6:	e8 ab 2c 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  485abb:	83 c4 08             	add    esp,0x8
  485abe:	8d 50 01             	lea    edx,[eax+0x1]
  485ac1:	eb 05                	jmp    0x485ac8
  485ac3:	ba d4 6a 6c 00       	mov    edx,0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  485ac8:	68 b4 6a 6c 00       	push   0x6c6ab4 ; ["vivo::Worker::connectSSDP"]
  485acd:	68 1e 01 00 00       	push   0x11e
  485ad2:	52                   	push   edx
  485ad3:	8d 8f 00 04 00 00    	lea    ecx,[edi+0x400]
  485ad9:	c7 01 02 00 00 00    	mov    DWORD PTR [ecx],0x2
  485adf:	8d 9f 04 04 00 00    	lea    ebx,[edi+0x404]
  485ae5:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  485aeb:	68 60 6f 6c 00       	push   0x6c6f60 ; ["[ConntctionModule][%s:%d][%s]: connect time out or phone wake up pcsuite failed.\n"]
  485af0:	51                   	push   ecx
  485af1:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485af4:	53                   	push   ebx
  485af5:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485af8:	e8 0c 15 f8 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  485afd:	83 c4 18             	add    esp,0x18
  485b00:	c6 45 fc 3b          	mov    BYTE PTR [ebp-0x4],0x3b
  485b04:	83 ec 10             	sub    esp,0x10
  485b07:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  485b0a:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  485b10:	89 4d ec             	mov    DWORD PTR [ebp-0x14],ecx
  485b13:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  485b16:	8b cc                	mov    ecx,esp
  485b18:	89 65 e0             	mov    DWORD PTR [ebp-0x20],esp
  485b1b:	50                   	push   eax
  485b1c:	e8 27 f9 f7 ff       	call   0x405448 ; ["call resolved=0x43de60 "]
  485b21:	c6 45 fc 3c          	mov    BYTE PTR [ebp-0x4],0x3c
  485b25:	8d 4f 08             	lea    ecx,[edi+0x8]
  485b28:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  485b2b:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  485b31:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485b34:	68 20 69 6c 00       	push   0x6c6920 ; ["error_message"]
  485b39:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485b3c:	e8 9d db f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  485b41:	8b c8                	mov    ecx,eax
  485b43:	c6 45 fc 3b          	mov    BYTE PTR [ebp-0x4],0x3b
  485b47:	e8 39 e9 f7 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  485b4c:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  485b50:	8b cb                	mov    ecx,ebx
  485b52:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  485b55:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  485b5b:	e8 a3 de f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  485b60:	8b 87 31 05 00 00    	mov    eax,DWORD PTR [edi+0x531]
  485b66:	83 ec 18             	sub    esp,0x18
  485b69:	8b cc                	mov    ecx,esp
  485b6b:	8d 98 80 07 00 00    	lea    ebx,[eax+0x780]
  485b71:	05 20 0d 00 00       	add    eax,0xd20
  485b76:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  485b79:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  485b7f:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485b82:	68 70 18 79 00       	push   0x791870
  485b87:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485b8a:	e8 fc 00 f8 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  485b8f:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  485b95:	8d 8f 1c 04 00 00    	lea    ecx,[edi+0x41c]
  485b9b:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485b9e:	ff 75 e8             	push   DWORD PTR [ebp-0x18]
  485ba1:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485ba4:	51                   	push   ecx
  485ba5:	8b cb                	mov    ecx,ebx
  485ba7:	e8 ff 21 f8 ff       	call   0x407dab ; ["call resolved=0x617dd0 Step::getConnectResult"]
  485bac:	c6 45 fc 3d          	mov    BYTE PTR [ebp-0x4],0x3d
  485bb0:	8d 5f 48             	lea    ebx,[edi+0x48]
  485bb3:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  485bb6:	8b d1                	mov    edx,ecx
  485bb8:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  485bbe:	8b cb                	mov    ecx,ebx
  485bc0:	89 55 ec             	mov    DWORD PTR [ebp-0x14],edx
  485bc3:	50                   	push   eax
  485bc4:	89 55 fc             	mov    DWORD PTR [ebp-0x4],edx
  485bc7:	e8 b5 05 f8 ff       	call   0x406181 ; ["call resolved=0x477450 "]
  485bcc:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  485bd0:	8d 8f 1c 04 00 00    	lea    ecx,[edi+0x41c]
  485bd6:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  485bd9:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  485bdf:	e8 1f de f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  485be4:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  485bea:	83 ec 10             	sub    esp,0x10
  485bed:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485bf0:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485bf3:	8b cc                	mov    ecx,esp
  485bf5:	89 65 e0             	mov    DWORD PTR [ebp-0x20],esp
  485bf8:	53                   	push   ebx
  485bf9:	e8 12 ef f7 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  485bfe:	c6 45 fc 3e          	mov    BYTE PTR [ebp-0x4],0x3e
  485c02:	8d 4f 08             	lea    ecx,[edi+0x8]
  485c05:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  485c08:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  485c0e:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485c11:	68 a0 6a 6c 00       	push   0x6c6aa0 ; ["connection_steps"]
  485c16:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485c19:	e8 c0 da f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  485c1e:	8b c8                	mov    ecx,eax
  485c20:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  485c24:	e8 5c e8 f7 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  485c29:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  485c2f:	8d 9f 34 04 00 00    	lea    ebx,[edi+0x434]
  485c35:	6a 00                	push   0x0
  485c37:	6a 00                	push   0x0
  485c39:	6a 20                	push   0x20
  485c3b:	6a ff                	push   0xffffffff
  485c3d:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485c40:	8d 4f 08             	lea    ecx,[edi+0x8]
  485c43:	53                   	push   ebx
  485c44:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485c47:	e8 d2 2b f8 ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  485c4c:	c6 45 fc 3f          	mov    BYTE PTR [ebp-0x4],0x3f
  485c50:	8d 8f 4c 04 00 00    	lea    ecx,[edi+0x44c]
  485c56:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  485c59:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  485c5f:	53                   	push   ebx
  485c60:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485c63:	51                   	push   ecx
  485c64:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485c67:	e8 50 10 f8 ff       	call   0x406cbc ; ["call resolved=0x458470 "]
  485c6c:	83 c4 08             	add    esp,0x8
  485c6f:	8d 4f d0             	lea    ecx,[edi-0x30]
  485c72:	50                   	push   eax
  485c73:	e8 ae 05 f8 ff       	call   0x406226 ; ["call resolved=0x4a2b20 "]
  485c78:	8d 8f 4c 04 00 00    	lea    ecx,[edi+0x44c]
  485c7e:	e9 b5 f6 ff ff       	jmp    0x485338
  485c83:	e8 de 2a 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  485c88:	83 c4 08             	add    esp,0x8
  485c8b:	85 c0                	test   eax,eax
  485c8d:	74 14                	je     0x485ca3
  485c8f:	6a 5c                	push   0x5c
  485c91:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  485c96:	e8 cb 2a 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  485c9b:	83 c4 08             	add    esp,0x8
  485c9e:	8d 48 01             	lea    ecx,[eax+0x1]
  485ca1:	eb 05                	jmp    0x485ca8
  485ca3:	b9 d4 6a 6c 00       	mov    ecx,0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  485ca8:	68 b4 6a 6c 00       	push   0x6c6ab4 ; ["vivo::Worker::connectSSDP"]
  485cad:	68 29 01 00 00       	push   0x129
  485cb2:	51                   	push   ecx
  485cb3:	8d 97 50 04 00 00    	lea    edx,[edi+0x450]
  485cb9:	c7 02 02 00 00 00    	mov    DWORD PTR [edx],0x2
  485cbf:	8d 9f 54 04 00 00    	lea    ebx,[edi+0x454]
  485cc5:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  485ccb:	68 c4 6f 6c 00       	push   0x6c6fc4 ; ["[ConntctionModule][%s:%d][%s]: phone reject 2158\n"]
  485cd0:	52                   	push   edx
  485cd1:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485cd4:	53                   	push   ebx
  485cd5:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485cd8:	e8 2c 13 f8 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  485cdd:	83 c4 18             	add    esp,0x18
  485ce0:	8b cb                	mov    ecx,ebx
  485ce2:	e8 1c dd f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  485ce7:	6a 00                	push   0x0
  485ce9:	6a 00                	push   0x0
  485ceb:	68 11 27 00 00       	push   0x2711
  485cf0:	8b ce                	mov    ecx,esi
  485cf2:	e8 ff f3 f7 ff       	call   0x4050f6 ; ["call resolved=0x49d1b0 "]
  485cf7:	8b 9e b0 06 00 00    	mov    ebx,DWORD PTR [esi+0x6b0]
  485cfd:	6a 5c                	push   0x5c
  485cff:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  485d04:	e8 5d 2a 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  485d09:	83 c4 08             	add    esp,0x8
  485d0c:	85 c0                	test   eax,eax
  485d0e:	74 14                	je     0x485d24
  485d10:	6a 5c                	push   0x5c
  485d12:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  485d17:	e8 4a 2a 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  485d1c:	83 c4 08             	add    esp,0x8
  485d1f:	8d 48 01             	lea    ecx,[eax+0x1]
  485d22:	eb 05                	jmp    0x485d29
  485d24:	b9 d4 6a 6c 00       	mov    ecx,0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  485d29:	53                   	push   ebx
  485d2a:	68 b4 6a 6c 00       	push   0x6c6ab4 ; ["vivo::Worker::connectSSDP"]
  485d2f:	68 2c 01 00 00       	push   0x12c
  485d34:	51                   	push   ecx
  485d35:	8d 97 6c 04 00 00    	lea    edx,[edi+0x46c]
  485d3b:	c7 02 02 00 00 00    	mov    DWORD PTR [edx],0x2
  485d41:	8d b7 70 04 00 00    	lea    esi,[edi+0x470]
  485d47:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  485d4d:	68 24 6f 6c 00       	push   0x6c6f24 ; ["[ConntctionModule][%s:%d][%s]: return_code_ %d \n"]
  485d52:	52                   	push   edx
  485d53:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485d56:	56                   	push   esi
  485d57:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485d5a:	e8 aa 12 f8 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  485d5f:	83 c4 1c             	add    esp,0x1c
  485d62:	8b ce                	mov    ecx,esi
  485d64:	e8 9a dc f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  485d69:	83 ec 10             	sub    esp,0x10
  485d6c:	8b cc                	mov    ecx,esp
  485d6e:	89 65 e0             	mov    DWORD PTR [ebp-0x20],esp
  485d71:	68 fc 15 6c 00       	push   0x6c15fc
  485d76:	e8 c9 31 f8 ff       	call   0x408f44 ; ["call resolved=0x43d710 "]
  485d7b:	c6 45 fc 40          	mov    BYTE PTR [ebp-0x4],0x40
  485d7f:	8d 4f 08             	lea    ecx,[edi+0x8]
  485d82:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  485d85:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  485d8b:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485d8e:	68 f4 13 6c 00       	push   0x6c13f4 ; ["error"]
  485d93:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485d96:	e8 43 d9 f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  485d9b:	8b c8                	mov    ecx,eax
  485d9d:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  485da1:	e8 df e6 f7 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  485da6:	6a 5c                	push   0x5c
  485da8:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  485dad:	e8 b4 29 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  485db2:	83 c4 08             	add    esp,0x8
  485db5:	85 c0                	test   eax,eax
  485db7:	74 14                	je     0x485dcd
  485db9:	6a 5c                	push   0x5c
  485dbb:	68 d4 6a 6c 00       	push   0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  485dc0:	e8 a1 29 1e 00       	call   0x668766 ; ["call resolved=0x668766 "]
  485dc5:	83 c4 08             	add    esp,0x8
  485dc8:	8d 50 01             	lea    edx,[eax+0x1]
  485dcb:	eb 05                	jmp    0x485dd2
  485dcd:	ba d4 6a 6c 00       	mov    edx,0x6c6ad4 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Api.cpp"]
  485dd2:	68 b4 6a 6c 00       	push   0x6c6ab4 ; ["vivo::Worker::connectSSDP"]
  485dd7:	68 30 01 00 00       	push   0x130
  485ddc:	52                   	push   edx
  485ddd:	8d 8f 88 04 00 00    	lea    ecx,[edi+0x488]
  485de3:	c7 01 02 00 00 00    	mov    DWORD PTR [ecx],0x2
  485de9:	8d 9f 8c 04 00 00    	lea    ebx,[edi+0x48c]
  485def:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  485df5:	68 00 70 6c 00       	push   0x6c7000 ; ["[ConntctionModule][%s:%d][%s]: phone reject the connect.\n"]
  485dfa:	51                   	push   ecx
  485dfb:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485dfe:	53                   	push   ebx
  485dff:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485e02:	e8 02 12 f8 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  485e07:	83 c4 18             	add    esp,0x18
  485e0a:	c6 45 fc 41          	mov    BYTE PTR [ebp-0x4],0x41
  485e0e:	83 ec 10             	sub    esp,0x10
  485e11:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  485e14:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  485e1a:	89 4d ec             	mov    DWORD PTR [ebp-0x14],ecx
  485e1d:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  485e20:	8b cc                	mov    ecx,esp
  485e22:	89 65 e0             	mov    DWORD PTR [ebp-0x20],esp
  485e25:	50                   	push   eax
  485e26:	e8 1d f6 f7 ff       	call   0x405448 ; ["call resolved=0x43de60 "]
  485e2b:	c6 45 fc 42          	mov    BYTE PTR [ebp-0x4],0x42
  485e2f:	8d 4f 08             	lea    ecx,[edi+0x8]
  485e32:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  485e35:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  485e3b:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485e3e:	68 20 69 6c 00       	push   0x6c6920 ; ["error_message"]
  485e43:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485e46:	e8 93 d8 f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  485e4b:	8b c8                	mov    ecx,eax
  485e4d:	c6 45 fc 41          	mov    BYTE PTR [ebp-0x4],0x41
  485e51:	e8 2f e6 f7 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  485e56:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  485e5a:	8b cb                	mov    ecx,ebx
  485e5c:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  485e5f:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  485e65:	e8 99 db f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  485e6a:	8b 87 31 05 00 00    	mov    eax,DWORD PTR [edi+0x531]
  485e70:	83 ec 18             	sub    esp,0x18
  485e73:	8b cc                	mov    ecx,esp
  485e75:	8d 98 80 07 00 00    	lea    ebx,[eax+0x780]
  485e7b:	05 20 0d 00 00       	add    eax,0xd20
  485e80:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  485e83:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  485e89:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485e8c:	68 f0 1a 79 00       	push   0x791af0
  485e91:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485e94:	e8 f2 fd f7 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  485e99:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  485e9f:	8d 8f a4 04 00 00    	lea    ecx,[edi+0x4a4]
  485ea5:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485ea8:	ff 75 e8             	push   DWORD PTR [ebp-0x18]
  485eab:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485eae:	51                   	push   ecx
  485eaf:	8b cb                	mov    ecx,ebx
  485eb1:	e8 f5 1e f8 ff       	call   0x407dab ; ["call resolved=0x617dd0 Step::getConnectResult"]
  485eb6:	c6 45 fc 43          	mov    BYTE PTR [ebp-0x4],0x43
  485eba:	8d 5f 48             	lea    ebx,[edi+0x48]
  485ebd:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  485ec0:	8b d1                	mov    edx,ecx
  485ec2:	89 8f 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],ecx
  485ec8:	8b cb                	mov    ecx,ebx
  485eca:	89 55 ec             	mov    DWORD PTR [ebp-0x14],edx
  485ecd:	50                   	push   eax
  485ece:	89 55 fc             	mov    DWORD PTR [ebp-0x4],edx
  485ed1:	e8 ab 02 f8 ff       	call   0x406181 ; ["call resolved=0x477450 "]
  485ed6:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  485eda:	8d 8f a4 04 00 00    	lea    ecx,[edi+0x4a4]
  485ee0:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  485ee3:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  485ee9:	e8 15 db f7 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  485eee:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  485ef4:	83 ec 10             	sub    esp,0x10
  485ef7:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485efa:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485efd:	8b cc                	mov    ecx,esp
  485eff:	89 65 e0             	mov    DWORD PTR [ebp-0x20],esp
  485f02:	53                   	push   ebx
  485f03:	e8 08 ec f7 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  485f08:	c6 45 fc 44          	mov    BYTE PTR [ebp-0x4],0x44
  485f0c:	8d 4f 08             	lea    ecx,[edi+0x8]
  485f0f:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  485f12:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  485f18:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485f1b:	68 a0 6a 6c 00       	push   0x6c6aa0 ; ["connection_steps"]
  485f20:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485f23:	e8 b6 d7 f7 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  485f28:	8b c8                	mov    ecx,eax
  485f2a:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  485f2e:	e8 52 e5 f7 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  485f33:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  485f39:	8d 9f bc 04 00 00    	lea    ebx,[edi+0x4bc]
  485f3f:	6a 00                	push   0x0
  485f41:	6a 00                	push   0x0
  485f43:	6a 20                	push   0x20
  485f45:	6a ff                	push   0xffffffff
  485f47:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485f4a:	8d 4f 08             	lea    ecx,[edi+0x8]
  485f4d:	53                   	push   ebx
  485f4e:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485f51:	e8 c8 28 f8 ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  485f56:	c6 45 fc 45          	mov    BYTE PTR [ebp-0x4],0x45
  485f5a:	8d 8f d4 04 00 00    	lea    ecx,[edi+0x4d4]
  485f60:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  485f63:	89 87 2c 05 00 00    	mov    DWORD PTR [edi+0x52c],eax
  485f69:	53                   	push   ebx
  485f6a:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485f6d:	51                   	push   ecx
  485f6e:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485f71:	e8 46 0d f8 ff       	call   0x406cbc ; ["call resolved=0x458470 "]
  485f76:	83 c4 08             	add    esp,0x8
  485f79:	8d 4f d0             	lea    ecx,[edi-0x30]
  485f7c:	50                   	push   eax
  485f7d:	e8 a4 02 f8 ff       	call   0x406226 ; ["call resolved=0x4a2b20 "]
  485f82:	8d 8f d4 04 00 00    	lea    ecx,[edi+0x4d4]
  485f88:	e9 ab f3 ff ff       	jmp    0x485338
  485f8d:	c7 87 50 01 00 00 00 	mov    DWORD PTR [edi+0x150],0x0
  485f97:	8b 87 2c 05 00 00    	mov    eax,DWORD PTR [edi+0x52c]
  485f9d:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  485fa0:	6a 06                	push   0x6
  485fa2:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  485fa5:	e8 8e f7 1d 00       	call   0x665738 ; ["call resolved=0x665738 "]
  485faa:	8b 4d c8             	mov    ecx,DWORD PTR [ebp-0x38]
  485fad:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  485fb0:	89 81 2c 05 00 00    	mov    DWORD PTR [ecx+0x52c],eax
  485fb6:	83 c8 ff             	or     eax,0xffffffff
  485fb9:	66 89 41 04          	mov    WORD PTR [ecx+0x4],ax
  485fbd:	83 c1 d0             	add    ecx,0xffffffd0
  485fc0:	e8 a2 f3 f7 ff       	call   0x405367 ; ["call resolved=0x4a6da0 "]
  485fc5:	b8 cb 5f 48 00       	mov    eax,0x485fcb
  485fca:	c3                   	ret
  485fcb:	8b 7d c8             	mov    edi,DWORD PTR [ebp-0x38]
  485fce:	8d 8f f4 04 00 00    	lea    ecx,[edi+0x4f4]
  485fd4:	8d 47 d0             	lea    eax,[edi-0x30]
  485fd7:	89 01                	mov    DWORD PTR [ecx],eax
  485fd9:	33 c0                	xor    eax,eax
  485fdb:	57                   	push   edi
  485fdc:	66 89 47 04          	mov    WORD PTR [edi+0x4],ax
  485fe0:	e8 8c b7 f7 ff       	call   0x401771 ; ["call resolved=0x481030 "]
  485fe5:	84 c0                	test   al,al
  485fe7:	75 29                	jne    0x486012
  485fe9:	0f 1f 80 00 00 00 00 	nop    DWORD PTR [eax+0x0]
  485ff0:	8d 77 d0             	lea    esi,[edi-0x30]
  485ff3:	8b ce                	mov    ecx,esi
  485ff5:	e8 93 04 f8 ff       	call   0x40648d ; ["call resolved=0x472390 "]
  485ffa:	66 83 7f 06 00       	cmp    WORD PTR [edi+0x6],0x0
  485fff:	74 11                	je     0x486012
  486001:	68 6d 05 00 00       	push   0x56d
  486006:	56                   	push   esi
  486007:	e8 8e c0 f7 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  48600c:	83 c4 08             	add    esp,0x8
  48600f:	eb 01                	jmp    0x486012
