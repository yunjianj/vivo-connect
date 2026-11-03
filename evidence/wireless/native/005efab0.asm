; ConnectFlow::retryWlanConnect; image base 0x400000; static annotation only
  5efab0:	55                   	push   ebp
  5efab1:	8d ac 24 84 f3 ff ff 	lea    ebp,[esp-0xc7c]
  5efab8:	81 ec 7c 0c 00 00    	sub    esp,0xc7c
  5efabe:	6a ff                	push   0xffffffff
  5efac0:	68 5c 85 69 00       	push   0x69855c
  5efac5:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  5efacb:	50                   	push   eax
  5efacc:	83 ec 44             	sub    esp,0x44
  5efacf:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5efad4:	33 c5                	xor    eax,ebp
  5efad6:	89 85 78 0c 00 00    	mov    DWORD PTR [ebp+0xc78],eax
  5efadc:	53                   	push   ebx
  5efadd:	56                   	push   esi
  5efade:	57                   	push   edi
  5efadf:	50                   	push   eax
  5efae0:	8d 45 f4             	lea    eax,[ebp-0xc]
  5efae3:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  5efae9:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  5efaec:	8b d9                	mov    ebx,ecx
  5efaee:	8b 85 88 0c 00 00    	mov    eax,DWORD PTR [ebp+0xc88]
  5efaf4:	b9 3f a3 7a 00       	mov    ecx,0x7aa33f
  5efaf9:	8b bd 84 0c 00 00    	mov    edi,DWORD PTR [ebp+0xc84]
  5efaff:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  5efb02:	8b 85 8c 0c 00 00    	mov    eax,DWORD PTR [ebp+0xc8c]
  5efb08:	89 45 dc             	mov    DWORD PTR [ebp-0x24],eax
  5efb0b:	8b 85 90 0c 00 00    	mov    eax,DWORD PTR [ebp+0xc90]
  5efb11:	89 45 d0             	mov    DWORD PTR [ebp-0x30],eax
  5efb14:	e8 d5 8f e1 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5efb19:	8b 8b 88 0c 00 00    	mov    ecx,DWORD PTR [ebx+0xc88]
  5efb1f:	8d 45 e0             	lea    eax,[ebp-0x20]
  5efb22:	6a 00                	push   0x0
  5efb24:	68 e0 44 78 00       	push   0x7844e0
  5efb29:	68 94 36 78 00       	push   0x783694
  5efb2e:	6a 00                	push   0x0
  5efb30:	50                   	push   eax
  5efb31:	c7 45 e0 01 00 00 00 	mov    DWORD PTR [ebp-0x20],0x1
  5efb38:	e8 bc 16 e1 ff       	call   0x4011f9 ; ["call resolved=0x57e110 "]
  5efb3d:	50                   	push   eax
  5efb3e:	e8 59 8c 07 00       	call   0x66879c ; ["call resolved=0x66879c "]
  5efb43:	83 c4 14             	add    esp,0x14
  5efb46:	8b c8                	mov    ecx,eax
  5efb48:	8b 10                	mov    edx,DWORD PTR [eax]
  5efb4a:	ff 92 90 00 00 00    	call   DWORD PTR [edx+0x90]
  5efb50:	50                   	push   eax
  5efb51:	8d 4d 18             	lea    ecx,[ebp+0x18]
  5efb54:	e8 32 61 e1 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  5efb59:	8d b3 50 05 00 00    	lea    esi,[ebx+0x550]
  5efb5f:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  5efb66:	8d 43 08             	lea    eax,[ebx+0x8]
  5efb69:	56                   	push   esi
  5efb6a:	8d 4d 48             	lea    ecx,[ebp+0x48]
  5efb6d:	89 45 e4             	mov    DWORD PTR [ebp-0x1c],eax
  5efb70:	51                   	push   ecx
  5efb71:	8b c8                	mov    ecx,eax
  5efb73:	e8 c3 97 e1 ff       	call   0x40933b ; ["call resolved=0x617cc0 "]
  5efb78:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  5efb7c:	8b 48 10             	mov    ecx,DWORD PTR [eax+0x10]
  5efb7f:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  5efb83:	72 02                	jb     0x5efb87
  5efb85:	8b 00                	mov    eax,DWORD PTR [eax]
  5efb87:	51                   	push   ecx
  5efb88:	50                   	push   eax
  5efb89:	8b cf                	mov    ecx,edi
  5efb8b:	e8 46 3e e1 ff       	call   0x4039d6 ; ["call resolved=0x480650 "]
  5efb90:	8b 55 5c             	mov    edx,DWORD PTR [ebp+0x5c]
  5efb93:	c6 45 fc 00          	mov    BYTE PTR [ebp-0x4],0x0
  5efb97:	83 fa 10             	cmp    edx,0x10
  5efb9a:	72 2e                	jb     0x5efbca
  5efb9c:	8b 4d 48             	mov    ecx,DWORD PTR [ebp+0x48]
  5efb9f:	42                   	inc    edx
  5efba0:	8b c1                	mov    eax,ecx
  5efba2:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5efba8:	72 16                	jb     0x5efbc0
  5efbaa:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5efbad:	83 c2 23             	add    edx,0x23
  5efbb0:	2b c1                	sub    eax,ecx
  5efbb2:	83 c0 fc             	add    eax,0xfffffffc
  5efbb5:	83 f8 1f             	cmp    eax,0x1f
  5efbb8:	76 06                	jbe    0x5efbc0
  5efbba:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5efbc0:	52                   	push   edx
  5efbc1:	51                   	push   ecx
  5efbc2:	e8 d3 24 e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5efbc7:	83 c4 08             	add    esp,0x8
  5efbca:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  5efbcd:	e8 15 5f e1 ff       	call   0x405ae7 ; ["call resolved=0x5fd810 "]
  5efbd2:	83 7d 2c 10          	cmp    DWORD PTR [ebp+0x2c],0x10
  5efbd6:	8d 4d e0             	lea    ecx,[ebp-0x20]
  5efbd9:	51                   	push   ecx
  5efbda:	8d 4d c8             	lea    ecx,[ebp-0x38]
  5efbdd:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  5efbe1:	8d 45 18             	lea    eax,[ebp+0x18]
  5efbe4:	c7 45 e0 05 00 00 00 	mov    DWORD PTR [ebp-0x20],0x5
  5efbeb:	0f 43 45 18          	cmovae eax,DWORD PTR [ebp+0x18]
  5efbef:	51                   	push   ecx
  5efbf0:	50                   	push   eax
  5efbf1:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  5efbf4:	c7 45 c8 cf 27 00 00 	mov    DWORD PTR [ebp-0x38],0x27cf
  5efbfb:	e8 55 37 e1 ff       	call   0x403355 ; ["call resolved=0x5fd9f0 TcpSocketBase::init"]
  5efc00:	84 c0                	test   al,al
  5efc02:	0f 85 c4 00 00 00    	jne    0x5efccc
  5efc08:	83 ec 18             	sub    esp,0x18
  5efc0b:	8b cc                	mov    ecx,esp
  5efc0d:	68 c4 88 79 00       	push   0x7988c4
  5efc12:	e8 74 60 e1 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  5efc17:	8b 4d e4             	mov    ecx,DWORD PTR [ebp-0x1c]
  5efc1a:	8d 45 48             	lea    eax,[ebp+0x48]
  5efc1d:	56                   	push   esi
  5efc1e:	50                   	push   eax
  5efc1f:	e8 87 81 e1 ff       	call   0x407dab ; ["call resolved=0x617dd0 Step::getConnectResult"]
  5efc24:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  5efc28:	8b 48 10             	mov    ecx,DWORD PTR [eax+0x10]
  5efc2b:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  5efc2f:	72 02                	jb     0x5efc33
  5efc31:	8b 00                	mov    eax,DWORD PTR [eax]
  5efc33:	51                   	push   ecx
  5efc34:	50                   	push   eax
  5efc35:	8b cf                	mov    ecx,edi
  5efc37:	e8 9a 3d e1 ff       	call   0x4039d6 ; ["call resolved=0x480650 "]
  5efc3c:	8b 55 5c             	mov    edx,DWORD PTR [ebp+0x5c]
  5efc3f:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  5efc43:	83 fa 10             	cmp    edx,0x10
  5efc46:	72 2e                	jb     0x5efc76
  5efc48:	8b 4d 48             	mov    ecx,DWORD PTR [ebp+0x48]
  5efc4b:	42                   	inc    edx
  5efc4c:	8b c1                	mov    eax,ecx
  5efc4e:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5efc54:	72 16                	jb     0x5efc6c
  5efc56:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5efc59:	83 c2 23             	add    edx,0x23
  5efc5c:	2b c1                	sub    eax,ecx
  5efc5e:	83 c0 fc             	add    eax,0xfffffffc
  5efc61:	83 f8 1f             	cmp    eax,0x1f
  5efc64:	76 06                	jbe    0x5efc6c
  5efc66:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5efc6c:	52                   	push   edx
  5efc6d:	51                   	push   ecx
  5efc6e:	e8 27 24 e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5efc73:	83 c4 08             	add    esp,0x8
  5efc76:	6a 5c                	push   0x5c
  5efc78:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5efc7d:	e8 e4 8a 07 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5efc82:	83 c4 08             	add    esp,0x8
  5efc85:	85 c0                	test   eax,eax
  5efc87:	74 12                	je     0x5efc9b
  5efc89:	6a 5c                	push   0x5c
  5efc8b:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5efc90:	e8 d1 8a 07 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5efc95:	83 c4 08             	add    esp,0x8
  5efc98:	40                   	inc    eax
  5efc99:	eb 05                	jmp    0x5efca0
  5efc9b:	b8 80 26 6f 00       	mov    eax,0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5efca0:	68 bc 3a 6f 00       	push   0x6f3abc ; ["ConnectFlow::retryWlanConnect"]
  5efca5:	68 44 04 00 00       	push   0x444
  5efcaa:	50                   	push   eax
  5efcab:	68 e0 3a 6f 00       	push   0x6f3ae0 ; ["[ConntctionModule][%s:%d][%s]: Retry wlan connect, tcp socket init failed!"]
  5efcb0:	8d 45 e4             	lea    eax,[ebp-0x1c]
  5efcb3:	c7 45 e4 02 00 00 00 	mov    DWORD PTR [ebp-0x1c],0x2
  5efcba:	50                   	push   eax
  5efcbb:	8d 45 48             	lea    eax,[ebp+0x48]
  5efcbe:	50                   	push   eax
  5efcbf:	e8 45 73 e1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5efcc4:	83 c4 18             	add    esp,0x18
  5efcc7:	e9 1d 07 00 00       	jmp    0x5f03e9
  5efccc:	6a 5c                	push   0x5c
  5efcce:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5efcd3:	e8 8e 8a 07 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5efcd8:	83 c4 08             	add    esp,0x8
  5efcdb:	85 c0                	test   eax,eax
  5efcdd:	74 12                	je     0x5efcf1
  5efcdf:	6a 5c                	push   0x5c
  5efce1:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5efce6:	e8 7b 8a 07 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5efceb:	83 c4 08             	add    esp,0x8
  5efcee:	40                   	inc    eax
  5efcef:	eb 05                	jmp    0x5efcf6
  5efcf1:	b8 80 26 6f 00       	mov    eax,0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5efcf6:	68 bc 3a 6f 00       	push   0x6f3abc ; ["ConnectFlow::retryWlanConnect"]
  5efcfb:	68 49 04 00 00       	push   0x449
  5efd00:	50                   	push   eax
  5efd01:	68 40 3b 6f 00       	push   0x6f3b40 ; ["[ConntctionModule][%s:%d][%s]: Retry wlan connect, tcp socket init success!"]
  5efd06:	8d 45 e4             	lea    eax,[ebp-0x1c]
  5efd09:	c7 45 e4 02 00 00 00 	mov    DWORD PTR [ebp-0x1c],0x2
  5efd10:	50                   	push   eax
  5efd11:	8d 45 48             	lea    eax,[ebp+0x48]
  5efd14:	50                   	push   eax
  5efd15:	e8 ef 72 e1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5efd1a:	8b 55 5c             	mov    edx,DWORD PTR [ebp+0x5c]
  5efd1d:	83 c4 18             	add    esp,0x18
  5efd20:	83 fa 10             	cmp    edx,0x10
  5efd23:	72 2c                	jb     0x5efd51
  5efd25:	8b 4d 48             	mov    ecx,DWORD PTR [ebp+0x48]
  5efd28:	42                   	inc    edx
  5efd29:	8b c1                	mov    eax,ecx
  5efd2b:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5efd31:	72 14                	jb     0x5efd47
  5efd33:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5efd36:	83 c2 23             	add    edx,0x23
  5efd39:	2b c1                	sub    eax,ecx
  5efd3b:	83 c0 fc             	add    eax,0xfffffffc
  5efd3e:	83 f8 1f             	cmp    eax,0x1f
  5efd41:	0f 87 7a 0b 00 00    	ja     0x5f08c1
  5efd47:	52                   	push   edx
  5efd48:	51                   	push   ecx
  5efd49:	e8 4c 23 e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5efd4e:	83 c4 08             	add    esp,0x8
  5efd51:	83 ec 18             	sub    esp,0x18
  5efd54:	8b cc                	mov    ecx,esp
  5efd56:	68 dc 88 79 00       	push   0x7988dc
  5efd5b:	e8 2b 5f e1 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  5efd60:	56                   	push   esi
  5efd61:	8d 45 48             	lea    eax,[ebp+0x48]
  5efd64:	50                   	push   eax
  5efd65:	8d 4b 08             	lea    ecx,[ebx+0x8]
  5efd68:	e8 3e 80 e1 ff       	call   0x407dab ; ["call resolved=0x617dd0 Step::getConnectResult"]
  5efd6d:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  5efd71:	8b 48 10             	mov    ecx,DWORD PTR [eax+0x10]
  5efd74:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  5efd78:	72 02                	jb     0x5efd7c
  5efd7a:	8b 00                	mov    eax,DWORD PTR [eax]
  5efd7c:	51                   	push   ecx
  5efd7d:	50                   	push   eax
  5efd7e:	8b cf                	mov    ecx,edi
  5efd80:	e8 51 3c e1 ff       	call   0x4039d6 ; ["call resolved=0x480650 "]
  5efd85:	8b 55 5c             	mov    edx,DWORD PTR [ebp+0x5c]
  5efd88:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  5efd8c:	83 fa 10             	cmp    edx,0x10
  5efd8f:	72 2e                	jb     0x5efdbf
  5efd91:	8b 4d 48             	mov    ecx,DWORD PTR [ebp+0x48]
  5efd94:	42                   	inc    edx
  5efd95:	8b c1                	mov    eax,ecx
  5efd97:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5efd9d:	72 16                	jb     0x5efdb5
  5efd9f:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5efda2:	83 c2 23             	add    edx,0x23
  5efda5:	2b c1                	sub    eax,ecx
  5efda7:	83 c0 fc             	add    eax,0xfffffffc
  5efdaa:	83 f8 1f             	cmp    eax,0x1f
  5efdad:	76 06                	jbe    0x5efdb5
  5efdaf:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5efdb5:	52                   	push   edx
  5efdb6:	51                   	push   ecx
  5efdb7:	e8 de 22 e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5efdbc:	83 c4 08             	add    esp,0x8
  5efdbf:	c7 45 48 00 00 00 00 	mov    DWORD PTR [ebp+0x48],0x0
  5efdc6:	c7 45 5c 0f 00 00 00 	mov    DWORD PTR [ebp+0x5c],0xf
  5efdcd:	c7 45 58 00 00 00 00 	mov    DWORD PTR [ebp+0x58],0x0
  5efdd4:	c6 45 48 00          	mov    BYTE PTR [ebp+0x48],0x0
  5efdd8:	c7 45 30 00 00 00 00 	mov    DWORD PTR [ebp+0x30],0x0
  5efddf:	c7 45 44 0f 00 00 00 	mov    DWORD PTR [ebp+0x44],0xf
  5efde6:	c7 45 40 00 00 00 00 	mov    DWORD PTR [ebp+0x40],0x0
  5efded:	c6 45 30 00          	mov    BYTE PTR [ebp+0x30],0x0
  5efdf1:	8d 45 30             	lea    eax,[ebp+0x30]
  5efdf4:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  5efdf8:	50                   	push   eax
  5efdf9:	8d 45 48             	lea    eax,[ebp+0x48]
  5efdfc:	8b cb                	mov    ecx,ebx
  5efdfe:	50                   	push   eax
  5efdff:	ff 75 dc             	push   DWORD PTR [ebp-0x24]
  5efe02:	e8 c7 1b e1 ff       	call   0x4019ce ; ["call resolved=0x5f8da0 ConnectFlow::wlanDataEncryption"]
  5efe07:	84 c0                	test   al,al
  5efe09:	0f 85 85 00 00 00    	jne    0x5efe94
  5efe0f:	6a 5c                	push   0x5c
  5efe11:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5efe16:	e8 4b 89 07 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5efe1b:	83 c4 08             	add    esp,0x8
  5efe1e:	85 c0                	test   eax,eax
  5efe20:	74 12                	je     0x5efe34
  5efe22:	6a 5c                	push   0x5c
  5efe24:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5efe29:	e8 38 89 07 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5efe2e:	83 c4 08             	add    esp,0x8
  5efe31:	40                   	inc    eax
  5efe32:	eb 05                	jmp    0x5efe39
  5efe34:	b8 80 26 6f 00       	mov    eax,0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5efe39:	68 bc 3a 6f 00       	push   0x6f3abc ; ["ConnectFlow::retryWlanConnect"]
  5efe3e:	68 53 04 00 00       	push   0x453
  5efe43:	50                   	push   eax
  5efe44:	68 a0 3b 6f 00       	push   0x6f3ba0 ; ["[ConntctionModule][%s:%d][%s]: Retry wlan connect, encryption data failed"]
  5efe49:	8d 45 dc             	lea    eax,[ebp-0x24]
  5efe4c:	c7 45 dc 02 00 00 00 	mov    DWORD PTR [ebp-0x24],0x2
  5efe53:	50                   	push   eax
  5efe54:	8d 45 60             	lea    eax,[ebp+0x60]
  5efe57:	50                   	push   eax
  5efe58:	e8 ac 71 e1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5efe5d:	8b 55 74             	mov    edx,DWORD PTR [ebp+0x74]
  5efe60:	83 c4 18             	add    esp,0x18
  5efe63:	83 fa 10             	cmp    edx,0x10
  5efe66:	72 2c                	jb     0x5efe94
  5efe68:	8b 4d 60             	mov    ecx,DWORD PTR [ebp+0x60]
  5efe6b:	42                   	inc    edx
  5efe6c:	8b c1                	mov    eax,ecx
  5efe6e:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5efe74:	72 14                	jb     0x5efe8a
  5efe76:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5efe79:	83 c2 23             	add    edx,0x23
  5efe7c:	2b c1                	sub    eax,ecx
  5efe7e:	83 c0 fc             	add    eax,0xfffffffc
  5efe81:	83 f8 1f             	cmp    eax,0x1f
  5efe84:	0f 87 37 0a 00 00    	ja     0x5f08c1
  5efe8a:	52                   	push   edx
  5efe8b:	51                   	push   ecx
  5efe8c:	e8 09 22 e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5efe91:	83 c4 08             	add    esp,0x8
  5efe94:	68 00 04 00 00       	push   0x400
  5efe99:	8d 85 78 04 00 00    	lea    eax,[ebp+0x478]
  5efe9f:	6a 00                	push   0x0
  5efea1:	50                   	push   eax
  5efea2:	e8 ef 88 07 00       	call   0x668796 ; ["call resolved=0x668796 "]
  5efea7:	83 c4 0c             	add    esp,0xc
  5efeaa:	8d 45 48             	lea    eax,[ebp+0x48]
  5efead:	8b cb                	mov    ecx,ebx
  5efeaf:	ff 75 d0             	push   DWORD PTR [ebp-0x30]
  5efeb2:	50                   	push   eax
  5efeb3:	8d 45 30             	lea    eax,[ebp+0x30]
  5efeb6:	50                   	push   eax
  5efeb7:	ff 75 ec             	push   DWORD PTR [ebp-0x14]
  5efeba:	8d 85 78 04 00 00    	lea    eax,[ebp+0x478]
  5efec0:	50                   	push   eax
  5efec1:	e8 2b 98 e1 ff       	call   0x4096f1 ; ["call resolved=0x5f7880 ConnectFlow::wlanBuildConnData"]
  5efec6:	89 45 c4             	mov    DWORD PTR [ebp-0x3c],eax
  5efec9:	8d 4b 08             	lea    ecx,[ebx+0x8]
  5efecc:	8d 83 80 0b 00 00    	lea    eax,[ebx+0xb80]
  5efed2:	50                   	push   eax
  5efed3:	8d 45 60             	lea    eax,[ebp+0x60]
  5efed6:	50                   	push   eax
  5efed7:	e8 5f 94 e1 ff       	call   0x40933b ; ["call resolved=0x617cc0 "]
  5efedc:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  5efee0:	8b 48 10             	mov    ecx,DWORD PTR [eax+0x10]
  5efee3:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  5efee7:	72 02                	jb     0x5efeeb
  5efee9:	8b 00                	mov    eax,DWORD PTR [eax]
  5efeeb:	51                   	push   ecx
  5efeec:	50                   	push   eax
  5efeed:	8b cf                	mov    ecx,edi
  5efeef:	e8 e2 3a e1 ff       	call   0x4039d6 ; ["call resolved=0x480650 "]
  5efef4:	8b 55 74             	mov    edx,DWORD PTR [ebp+0x74]
  5efef7:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  5efefb:	83 fa 10             	cmp    edx,0x10
  5efefe:	72 2e                	jb     0x5eff2e
  5eff00:	8b 4d 60             	mov    ecx,DWORD PTR [ebp+0x60]
  5eff03:	42                   	inc    edx
  5eff04:	8b c1                	mov    eax,ecx
  5eff06:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5eff0c:	72 16                	jb     0x5eff24
  5eff0e:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5eff11:	83 c2 23             	add    edx,0x23
  5eff14:	2b c1                	sub    eax,ecx
  5eff16:	83 c0 fc             	add    eax,0xfffffffc
  5eff19:	83 f8 1f             	cmp    eax,0x1f
  5eff1c:	76 06                	jbe    0x5eff24
  5eff1e:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5eff24:	52                   	push   edx
  5eff25:	51                   	push   ecx
  5eff26:	e8 6f 21 e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5eff2b:	83 c4 08             	add    esp,0x8
  5eff2e:	8d 43 08             	lea    eax,[ebx+0x8]
  5eff31:	89 45 e0             	mov    DWORD PTR [ebp-0x20],eax
  5eff34:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  5eff37:	8d 45 c4             	lea    eax,[ebp-0x3c]
  5eff3a:	50                   	push   eax
  5eff3b:	8d 85 78 04 00 00    	lea    eax,[ebp+0x478]
  5eff41:	50                   	push   eax
  5eff42:	8d b3 80 0b 00 00    	lea    esi,[ebx+0xb80]
  5eff48:	e8 79 27 e1 ff       	call   0x4026c6 ; ["call resolved=0x5fe210 TcpSocketBase::sendMsg"]
  5eff4d:	83 ec 18             	sub    esp,0x18
  5eff50:	8b cc                	mov    ecx,esp
  5eff52:	84 c0                	test   al,al
  5eff54:	0f 85 a8 00 00 00    	jne    0x5f0002
  5eff5a:	68 c4 88 79 00       	push   0x7988c4
  5eff5f:	e8 27 5d e1 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  5eff64:	8b 4d e0             	mov    ecx,DWORD PTR [ebp-0x20]
  5eff67:	8d 45 60             	lea    eax,[ebp+0x60]
  5eff6a:	56                   	push   esi
  5eff6b:	50                   	push   eax
  5eff6c:	e8 3a 7e e1 ff       	call   0x407dab ; ["call resolved=0x617dd0 Step::getConnectResult"]
  5eff71:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  5eff75:	8b 48 10             	mov    ecx,DWORD PTR [eax+0x10]
  5eff78:	c6 45 fc 08          	mov    BYTE PTR [ebp-0x4],0x8
  5eff7c:	72 02                	jb     0x5eff80
  5eff7e:	8b 00                	mov    eax,DWORD PTR [eax]
  5eff80:	51                   	push   ecx
  5eff81:	50                   	push   eax
  5eff82:	8b cf                	mov    ecx,edi
  5eff84:	e8 4d 3a e1 ff       	call   0x4039d6 ; ["call resolved=0x480650 "]
  5eff89:	8b 55 74             	mov    edx,DWORD PTR [ebp+0x74]
  5eff8c:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  5eff90:	83 fa 10             	cmp    edx,0x10
  5eff93:	72 2e                	jb     0x5effc3
  5eff95:	8b 4d 60             	mov    ecx,DWORD PTR [ebp+0x60]
  5eff98:	42                   	inc    edx
  5eff99:	8b c1                	mov    eax,ecx
  5eff9b:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5effa1:	72 16                	jb     0x5effb9
  5effa3:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5effa6:	83 c2 23             	add    edx,0x23
  5effa9:	2b c1                	sub    eax,ecx
  5effab:	83 c0 fc             	add    eax,0xfffffffc
  5effae:	83 f8 1f             	cmp    eax,0x1f
  5effb1:	76 06                	jbe    0x5effb9
  5effb3:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5effb9:	52                   	push   edx
  5effba:	51                   	push   ecx
  5effbb:	e8 da 20 e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5effc0:	83 c4 08             	add    esp,0x8
  5effc3:	6a 5c                	push   0x5c
  5effc5:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5effca:	e8 97 87 07 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5effcf:	83 c4 08             	add    esp,0x8
  5effd2:	85 c0                	test   eax,eax
  5effd4:	74 12                	je     0x5effe8
  5effd6:	6a 5c                	push   0x5c
  5effd8:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5effdd:	e8 84 87 07 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5effe2:	83 c4 08             	add    esp,0x8
  5effe5:	40                   	inc    eax
  5effe6:	eb 05                	jmp    0x5effed
  5effe8:	b8 80 26 6f 00       	mov    eax,0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5effed:	68 bc 3a 6f 00       	push   0x6f3abc ; ["ConnectFlow::retryWlanConnect"]
  5efff2:	68 60 04 00 00       	push   0x460
  5efff7:	50                   	push   eax
  5efff8:	68 f8 3b 6f 00       	push   0x6f3bf8 ; ["[ConntctionModule][%s:%d][%s]: Retry wlan connect, tcp socket send message failed!"]
  5efffd:	e9 68 03 00 00       	jmp    0x5f036a
  5f0002:	68 dc 88 79 00       	push   0x7988dc
  5f0007:	e8 7f 5c e1 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  5f000c:	56                   	push   esi
  5f000d:	8d 45 60             	lea    eax,[ebp+0x60]
  5f0010:	50                   	push   eax
  5f0011:	8d 4b 08             	lea    ecx,[ebx+0x8]
  5f0014:	e8 92 7d e1 ff       	call   0x407dab ; ["call resolved=0x617dd0 Step::getConnectResult"]
  5f0019:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  5f001d:	8b 48 10             	mov    ecx,DWORD PTR [eax+0x10]
  5f0020:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  5f0024:	72 02                	jb     0x5f0028
  5f0026:	8b 00                	mov    eax,DWORD PTR [eax]
  5f0028:	51                   	push   ecx
  5f0029:	50                   	push   eax
  5f002a:	8b cf                	mov    ecx,edi
  5f002c:	e8 a5 39 e1 ff       	call   0x4039d6 ; ["call resolved=0x480650 "]
  5f0031:	8b 55 74             	mov    edx,DWORD PTR [ebp+0x74]
  5f0034:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  5f0038:	83 fa 10             	cmp    edx,0x10
  5f003b:	72 2e                	jb     0x5f006b
  5f003d:	8b 4d 60             	mov    ecx,DWORD PTR [ebp+0x60]
  5f0040:	42                   	inc    edx
  5f0041:	8b c1                	mov    eax,ecx
  5f0043:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f0049:	72 16                	jb     0x5f0061
  5f004b:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f004e:	83 c2 23             	add    edx,0x23
  5f0051:	2b c1                	sub    eax,ecx
  5f0053:	83 c0 fc             	add    eax,0xfffffffc
  5f0056:	83 f8 1f             	cmp    eax,0x1f
  5f0059:	76 06                	jbe    0x5f0061
  5f005b:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5f0061:	52                   	push   edx
  5f0062:	51                   	push   ecx
  5f0063:	e8 32 20 e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f0068:	83 c4 08             	add    esp,0x8
  5f006b:	6a 5c                	push   0x5c
  5f006d:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f0072:	e8 ef 86 07 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5f0077:	83 c4 08             	add    esp,0x8
  5f007a:	85 c0                	test   eax,eax
  5f007c:	74 12                	je     0x5f0090
  5f007e:	6a 5c                	push   0x5c
  5f0080:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f0085:	e8 dc 86 07 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5f008a:	83 c4 08             	add    esp,0x8
  5f008d:	40                   	inc    eax
  5f008e:	eb 05                	jmp    0x5f0095
  5f0090:	b8 80 26 6f 00       	mov    eax,0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f0095:	68 bc 3a 6f 00       	push   0x6f3abc ; ["ConnectFlow::retryWlanConnect"]
  5f009a:	68 67 04 00 00       	push   0x467
  5f009f:	50                   	push   eax
  5f00a0:	68 60 3c 6f 00       	push   0x6f3c60 ; ["[ConntctionModule][%s:%d][%s]: Retry wlan connect, tcp socket send message success!"]
  5f00a5:	8d 45 ec             	lea    eax,[ebp-0x14]
  5f00a8:	c7 45 ec 02 00 00 00 	mov    DWORD PTR [ebp-0x14],0x2
  5f00af:	50                   	push   eax
  5f00b0:	8d 45 60             	lea    eax,[ebp+0x60]
  5f00b3:	50                   	push   eax
  5f00b4:	e8 50 6f e1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5f00b9:	8b 55 74             	mov    edx,DWORD PTR [ebp+0x74]
  5f00bc:	83 c4 18             	add    esp,0x18
  5f00bf:	83 fa 10             	cmp    edx,0x10
  5f00c2:	72 2c                	jb     0x5f00f0
  5f00c4:	8b 4d 60             	mov    ecx,DWORD PTR [ebp+0x60]
  5f00c7:	42                   	inc    edx
  5f00c8:	8b c1                	mov    eax,ecx
  5f00ca:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f00d0:	72 14                	jb     0x5f00e6
  5f00d2:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f00d5:	83 c2 23             	add    edx,0x23
  5f00d8:	2b c1                	sub    eax,ecx
  5f00da:	83 c0 fc             	add    eax,0xfffffffc
  5f00dd:	83 f8 1f             	cmp    eax,0x1f
  5f00e0:	0f 87 db 07 00 00    	ja     0x5f08c1
  5f00e6:	52                   	push   edx
  5f00e7:	51                   	push   ecx
  5f00e8:	e8 ad 1f e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f00ed:	83 c4 08             	add    esp,0x8
  5f00f0:	8d 83 d8 0b 00 00    	lea    eax,[ebx+0xbd8]
  5f00f6:	50                   	push   eax
  5f00f7:	8d 45 60             	lea    eax,[ebp+0x60]
  5f00fa:	50                   	push   eax
  5f00fb:	8d 4b 08             	lea    ecx,[ebx+0x8]
  5f00fe:	e8 38 92 e1 ff       	call   0x40933b ; ["call resolved=0x617cc0 "]
  5f0103:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  5f0107:	8b 48 10             	mov    ecx,DWORD PTR [eax+0x10]
  5f010a:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  5f010e:	72 02                	jb     0x5f0112
  5f0110:	8b 00                	mov    eax,DWORD PTR [eax]
  5f0112:	51                   	push   ecx
  5f0113:	50                   	push   eax
  5f0114:	8b cf                	mov    ecx,edi
  5f0116:	e8 bb 38 e1 ff       	call   0x4039d6 ; ["call resolved=0x480650 "]
  5f011b:	8b 55 74             	mov    edx,DWORD PTR [ebp+0x74]
  5f011e:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  5f0122:	83 fa 10             	cmp    edx,0x10
  5f0125:	72 2e                	jb     0x5f0155
  5f0127:	8b 4d 60             	mov    ecx,DWORD PTR [ebp+0x60]
  5f012a:	42                   	inc    edx
  5f012b:	8b c1                	mov    eax,ecx
  5f012d:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f0133:	72 16                	jb     0x5f014b
  5f0135:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f0138:	83 c2 23             	add    edx,0x23
  5f013b:	2b c1                	sub    eax,ecx
  5f013d:	83 c0 fc             	add    eax,0xfffffffc
  5f0140:	83 f8 1f             	cmp    eax,0x1f
  5f0143:	76 06                	jbe    0x5f014b
  5f0145:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5f014b:	52                   	push   edx
  5f014c:	51                   	push   ecx
  5f014d:	e8 48 1f e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f0152:	83 c4 08             	add    esp,0x8
  5f0155:	68 00 04 00 00       	push   0x400
  5f015a:	8d 45 78             	lea    eax,[ebp+0x78]
  5f015d:	c7 45 dc ff ff ff ff 	mov    DWORD PTR [ebp-0x24],0xffffffff
  5f0164:	6a 00                	push   0x0
  5f0166:	50                   	push   eax
  5f0167:	c7 45 c0 00 00 00 00 	mov    DWORD PTR [ebp-0x40],0x0
  5f016e:	e8 23 86 07 00       	call   0x668796 ; ["call resolved=0x668796 "]
  5f0173:	83 c4 0c             	add    esp,0xc
  5f0176:	c6 45 eb 00          	mov    BYTE PTR [ebp-0x15],0x0
  5f017a:	33 f6                	xor    esi,esi
  5f017c:	0f 1f 40 00          	nop    DWORD PTR [eax+0x0]
  5f0180:	8d 45 c0             	lea    eax,[ebp-0x40]
  5f0183:	c7 45 ec 00 04 00 00 	mov    DWORD PTR [ebp-0x14],0x400
  5f018a:	50                   	push   eax
  5f018b:	8d 45 ec             	lea    eax,[ebp-0x14]
  5f018e:	c7 45 d0 01 00 00 00 	mov    DWORD PTR [ebp-0x30],0x1
  5f0195:	50                   	push   eax
  5f0196:	8d 45 78             	lea    eax,[ebp+0x78]
  5f0199:	50                   	push   eax
  5f019a:	8d 45 d0             	lea    eax,[ebp-0x30]
  5f019d:	50                   	push   eax
  5f019e:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  5f01a1:	e8 2e 53 e1 ff       	call   0x4054d4 ; ["call resolved=0x5fdf70 TcpSocketBase::recvMsg"]
  5f01a6:	84 c0                	test   al,al
  5f01a8:	0f 85 8e 00 00 00    	jne    0x5f023c
  5f01ae:	a1 54 3f 79 00       	mov    eax,ds:0x793f54
  5f01b3:	85 c0                	test   eax,eax
  5f01b5:	75 29                	jne    0x5f01e0
  5f01b7:	6a 03                	push   0x3
  5f01b9:	e8 f8 2f e1 ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  5f01be:	83 c4 04             	add    esp,0x4
  5f01c1:	89 45 e4             	mov    DWORD PTR [ebp-0x1c],eax
  5f01c4:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  5f01c8:	85 c0                	test   eax,eax
  5f01ca:	74 09                	je     0x5f01d5
  5f01cc:	8b c8                	mov    ecx,eax
  5f01ce:	e8 e0 41 e1 ff       	call   0x4043b3 ; ["call resolved=0x5116c0 "]
  5f01d3:	eb 02                	jmp    0x5f01d7
  5f01d5:	33 c0                	xor    eax,eax
  5f01d7:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  5f01db:	a3 54 3f 79 00       	mov    ds:0x793f54,eax
  5f01e0:	8b c8                	mov    ecx,eax
  5f01e2:	e8 92 17 e1 ff       	call   0x401979 ; ["call resolved=0x511710 "]
  5f01e7:	84 c0                	test   al,al
  5f01e9:	75 0a                	jne    0x5f01f5
  5f01eb:	8b c6                	mov    eax,esi
  5f01ed:	46                   	inc    esi
  5f01ee:	83 f8 1d             	cmp    eax,0x1d
  5f01f1:	7c 8d                	jl     0x5f0180
  5f01f3:	eb 4b                	jmp    0x5f0240
  5f01f5:	68 00 04 00 00       	push   0x400
  5f01fa:	8d 85 78 08 00 00    	lea    eax,[ebp+0x878]
  5f0200:	6a 00                	push   0x0
  5f0202:	50                   	push   eax
  5f0203:	e8 8e 85 07 00       	call   0x668796 ; ["call resolved=0x668796 "]
  5f0208:	83 c4 0c             	add    esp,0xc
  5f020b:	c7 45 ec 04 00 00 00 	mov    DWORD PTR [ebp-0x14],0x4
  5f0212:	8d 45 ec             	lea    eax,[ebp-0x14]
  5f0215:	8b cb                	mov    ecx,ebx
  5f0217:	50                   	push   eax
  5f0218:	8d 85 78 08 00 00    	lea    eax,[ebp+0x878]
  5f021e:	50                   	push   eax
  5f021f:	e8 ae 90 e1 ff       	call   0x4092d2 ; ["call resolved=0x5f85c0 ConnectFlow::wlanBuildCustomData"]
  5f0224:	89 45 d0             	mov    DWORD PTR [ebp-0x30],eax
  5f0227:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  5f022a:	8d 45 d0             	lea    eax,[ebp-0x30]
  5f022d:	50                   	push   eax
  5f022e:	8d 85 78 08 00 00    	lea    eax,[ebp+0x878]
  5f0234:	50                   	push   eax
  5f0235:	e8 8c 24 e1 ff       	call   0x4026c6 ; ["call resolved=0x5fe210 TcpSocketBase::sendMsg"]
  5f023a:	eb 04                	jmp    0x5f0240
  5f023c:	c6 45 eb 01          	mov    BYTE PTR [ebp-0x15],0x1
  5f0240:	8d b3 d8 0b 00 00    	lea    esi,[ebx+0xbd8]
  5f0246:	e8 76 60 e1 ff       	call   0x4062c1 ; ["call resolved=0x492c20 "]
  5f024b:	8b c8                	mov    ecx,eax
  5f024d:	e8 27 17 e1 ff       	call   0x401979 ; ["call resolved=0x511710 "]
  5f0252:	83 ec 18             	sub    esp,0x18
  5f0255:	8b cc                	mov    ecx,esp
  5f0257:	84 c0                	test   al,al
  5f0259:	74 6e                	je     0x5f02c9
  5f025b:	68 54 89 79 00       	push   0x798954
  5f0260:	e8 26 5a e1 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  5f0265:	56                   	push   esi
  5f0266:	8d 45 60             	lea    eax,[ebp+0x60]
  5f0269:	50                   	push   eax
  5f026a:	8d 4b 08             	lea    ecx,[ebx+0x8]
  5f026d:	e8 39 7b e1 ff       	call   0x407dab ; ["call resolved=0x617dd0 Step::getConnectResult"]
  5f0272:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  5f0276:	8b 48 10             	mov    ecx,DWORD PTR [eax+0x10]
  5f0279:	c6 45 fc 0c          	mov    BYTE PTR [ebp-0x4],0xc
  5f027d:	72 02                	jb     0x5f0281
  5f027f:	8b 00                	mov    eax,DWORD PTR [eax]
  5f0281:	51                   	push   ecx
  5f0282:	50                   	push   eax
  5f0283:	8b cf                	mov    ecx,edi
  5f0285:	e8 4c 37 e1 ff       	call   0x4039d6 ; ["call resolved=0x480650 "]
  5f028a:	8b 55 74             	mov    edx,DWORD PTR [ebp+0x74]
  5f028d:	83 fa 10             	cmp    edx,0x10
  5f0290:	0f 82 bb 02 00 00    	jb     0x5f0551
  5f0296:	8b 4d 60             	mov    ecx,DWORD PTR [ebp+0x60]
  5f0299:	42                   	inc    edx
  5f029a:	8b c1                	mov    eax,ecx
  5f029c:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f02a2:	72 16                	jb     0x5f02ba
  5f02a4:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f02a7:	83 c2 23             	add    edx,0x23
  5f02aa:	2b c1                	sub    eax,ecx
  5f02ac:	83 c0 fc             	add    eax,0xfffffffc
  5f02af:	83 f8 1f             	cmp    eax,0x1f
  5f02b2:	76 06                	jbe    0x5f02ba
  5f02b4:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5f02ba:	52                   	push   edx
  5f02bb:	51                   	push   ecx
  5f02bc:	e8 d9 1d e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f02c1:	83 c4 08             	add    esp,0x8
  5f02c4:	e9 88 02 00 00       	jmp    0x5f0551
  5f02c9:	80 7d eb 00          	cmp    BYTE PTR [ebp-0x15],0x0
  5f02cd:	0f 85 90 01 00 00    	jne    0x5f0463
  5f02d3:	68 c4 88 79 00       	push   0x7988c4
  5f02d8:	e8 ae 59 e1 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  5f02dd:	56                   	push   esi
  5f02de:	8d 45 60             	lea    eax,[ebp+0x60]
  5f02e1:	50                   	push   eax
  5f02e2:	8d 4b 08             	lea    ecx,[ebx+0x8]
  5f02e5:	e8 c1 7a e1 ff       	call   0x407dab ; ["call resolved=0x617dd0 Step::getConnectResult"]
  5f02ea:	50                   	push   eax
  5f02eb:	8b cf                	mov    ecx,edi
  5f02ed:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  5f02f1:	e8 8b 5e e1 ff       	call   0x406181 ; ["call resolved=0x477450 "]
  5f02f6:	8b 55 74             	mov    edx,DWORD PTR [ebp+0x74]
  5f02f9:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  5f02fd:	83 fa 10             	cmp    edx,0x10
  5f0300:	72 2e                	jb     0x5f0330
  5f0302:	8b 4d 60             	mov    ecx,DWORD PTR [ebp+0x60]
  5f0305:	42                   	inc    edx
  5f0306:	8b c1                	mov    eax,ecx
  5f0308:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f030e:	72 16                	jb     0x5f0326
  5f0310:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f0313:	83 c2 23             	add    edx,0x23
  5f0316:	2b c1                	sub    eax,ecx
  5f0318:	83 c0 fc             	add    eax,0xfffffffc
  5f031b:	83 f8 1f             	cmp    eax,0x1f
  5f031e:	76 06                	jbe    0x5f0326
  5f0320:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5f0326:	52                   	push   edx
  5f0327:	51                   	push   ecx
  5f0328:	e8 6d 1d e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f032d:	83 c4 08             	add    esp,0x8
  5f0330:	6a 5c                	push   0x5c
  5f0332:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f0337:	e8 2a 84 07 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5f033c:	83 c4 08             	add    esp,0x8
  5f033f:	85 c0                	test   eax,eax
  5f0341:	74 12                	je     0x5f0355
  5f0343:	6a 5c                	push   0x5c
  5f0345:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f034a:	e8 17 84 07 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5f034f:	83 c4 08             	add    esp,0x8
  5f0352:	40                   	inc    eax
  5f0353:	eb 05                	jmp    0x5f035a
  5f0355:	b8 80 26 6f 00       	mov    eax,0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f035a:	68 bc 3a 6f 00       	push   0x6f3abc ; ["ConnectFlow::retryWlanConnect"]
  5f035f:	68 89 04 00 00       	push   0x489
  5f0364:	50                   	push   eax
  5f0365:	68 c8 3c 6f 00       	push   0x6f3cc8 ; ["[ConntctionModule][%s:%d][%s]: Retry wlan connect, tcp socket recv message failed!"]
  5f036a:	8d 45 ec             	lea    eax,[ebp-0x14]
  5f036d:	c7 45 ec 02 00 00 00 	mov    DWORD PTR [ebp-0x14],0x2
  5f0374:	50                   	push   eax
  5f0375:	8d 45 60             	lea    eax,[ebp+0x60]
  5f0378:	50                   	push   eax
  5f0379:	e8 8b 6c e1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5f037e:	8b 55 74             	mov    edx,DWORD PTR [ebp+0x74]
  5f0381:	83 c4 18             	add    esp,0x18
  5f0384:	83 fa 10             	cmp    edx,0x10
  5f0387:	72 2c                	jb     0x5f03b5
  5f0389:	8b 4d 60             	mov    ecx,DWORD PTR [ebp+0x60]
  5f038c:	42                   	inc    edx
  5f038d:	8b c1                	mov    eax,ecx
  5f038f:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f0395:	72 14                	jb     0x5f03ab
  5f0397:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f039a:	83 c2 23             	add    edx,0x23
  5f039d:	2b c1                	sub    eax,ecx
  5f039f:	83 c0 fc             	add    eax,0xfffffffc
  5f03a2:	83 f8 1f             	cmp    eax,0x1f
  5f03a5:	0f 87 16 05 00 00    	ja     0x5f08c1
  5f03ab:	52                   	push   edx
  5f03ac:	51                   	push   ecx
  5f03ad:	e8 e8 1c e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f03b2:	83 c4 08             	add    esp,0x8
  5f03b5:	8b 55 44             	mov    edx,DWORD PTR [ebp+0x44]
  5f03b8:	83 fa 10             	cmp    edx,0x10
  5f03bb:	72 2c                	jb     0x5f03e9
  5f03bd:	8b 4d 30             	mov    ecx,DWORD PTR [ebp+0x30]
  5f03c0:	42                   	inc    edx
  5f03c1:	8b c1                	mov    eax,ecx
  5f03c3:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f03c9:	72 14                	jb     0x5f03df
  5f03cb:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f03ce:	83 c2 23             	add    edx,0x23
  5f03d1:	2b c1                	sub    eax,ecx
  5f03d3:	83 c0 fc             	add    eax,0xfffffffc
  5f03d6:	83 f8 1f             	cmp    eax,0x1f
  5f03d9:	0f 87 e2 04 00 00    	ja     0x5f08c1
  5f03df:	52                   	push   edx
  5f03e0:	51                   	push   ecx
  5f03e1:	e8 b4 1c e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f03e6:	83 c4 08             	add    esp,0x8
  5f03e9:	8b 55 5c             	mov    edx,DWORD PTR [ebp+0x5c]
  5f03ec:	83 fa 10             	cmp    edx,0x10
  5f03ef:	72 2c                	jb     0x5f041d
  5f03f1:	8b 4d 48             	mov    ecx,DWORD PTR [ebp+0x48]
  5f03f4:	42                   	inc    edx
  5f03f5:	8b c1                	mov    eax,ecx
  5f03f7:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f03fd:	72 14                	jb     0x5f0413
  5f03ff:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f0402:	83 c2 23             	add    edx,0x23
  5f0405:	2b c1                	sub    eax,ecx
  5f0407:	83 c0 fc             	add    eax,0xfffffffc
  5f040a:	83 f8 1f             	cmp    eax,0x1f
  5f040d:	0f 87 ae 04 00 00    	ja     0x5f08c1
  5f0413:	52                   	push   edx
  5f0414:	51                   	push   ecx
  5f0415:	e8 80 1c e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f041a:	83 c4 08             	add    esp,0x8
  5f041d:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  5f0420:	e8 bc 61 e1 ff       	call   0x4065e1 ; ["call resolved=0x5fd840 "]
  5f0425:	8b 55 2c             	mov    edx,DWORD PTR [ebp+0x2c]
  5f0428:	83 fa 10             	cmp    edx,0x10
  5f042b:	72 2c                	jb     0x5f0459
  5f042d:	8b 4d 18             	mov    ecx,DWORD PTR [ebp+0x18]
  5f0430:	42                   	inc    edx
  5f0431:	8b c1                	mov    eax,ecx
  5f0433:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f0439:	72 14                	jb     0x5f044f
  5f043b:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f043e:	83 c2 23             	add    edx,0x23
  5f0441:	2b c1                	sub    eax,ecx
  5f0443:	83 c0 fc             	add    eax,0xfffffffc
  5f0446:	83 f8 1f             	cmp    eax,0x1f
  5f0449:	0f 87 72 04 00 00    	ja     0x5f08c1
  5f044f:	52                   	push   edx
  5f0450:	51                   	push   ecx
  5f0451:	e8 44 1c e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f0456:	83 c4 08             	add    esp,0x8
  5f0459:	b8 e5 d8 ff ff       	mov    eax,0xffffd8e5
  5f045e:	e9 70 04 00 00       	jmp    0x5f08d3
  5f0463:	68 dc 88 79 00       	push   0x7988dc
  5f0468:	e8 1e 58 e1 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  5f046d:	8b 4d e0             	mov    ecx,DWORD PTR [ebp-0x20]
  5f0470:	8d 45 60             	lea    eax,[ebp+0x60]
  5f0473:	56                   	push   esi
  5f0474:	50                   	push   eax
  5f0475:	e8 31 79 e1 ff       	call   0x407dab ; ["call resolved=0x617dd0 Step::getConnectResult"]
  5f047a:	50                   	push   eax
  5f047b:	8b cf                	mov    ecx,edi
  5f047d:	c6 45 fc 0e          	mov    BYTE PTR [ebp-0x4],0xe
  5f0481:	e8 fb 5c e1 ff       	call   0x406181 ; ["call resolved=0x477450 "]
  5f0486:	8d 4d 60             	lea    ecx,[ebp+0x60]
  5f0489:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  5f048d:	e8 71 35 e1 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5f0492:	6a 5c                	push   0x5c
  5f0494:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f0499:	e8 c8 82 07 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5f049e:	83 c4 08             	add    esp,0x8
  5f04a1:	85 c0                	test   eax,eax
  5f04a3:	74 12                	je     0x5f04b7
  5f04a5:	6a 5c                	push   0x5c
  5f04a7:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f04ac:	e8 b5 82 07 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5f04b1:	83 c4 08             	add    esp,0x8
  5f04b4:	40                   	inc    eax
  5f04b5:	eb 05                	jmp    0x5f04bc
  5f04b7:	b8 80 26 6f 00       	mov    eax,0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f04bc:	68 bc 3a 6f 00       	push   0x6f3abc ; ["ConnectFlow::retryWlanConnect"]
  5f04c1:	68 8f 04 00 00       	push   0x48f
  5f04c6:	50                   	push   eax
  5f04c7:	68 30 3d 6f 00       	push   0x6f3d30 ; ["[ConntctionModule][%s:%d][%s]: Retry wlan connect, tcp socket recv message success!"]
  5f04cc:	8d 45 ec             	lea    eax,[ebp-0x14]
  5f04cf:	c7 45 ec 02 00 00 00 	mov    DWORD PTR [ebp-0x14],0x2
  5f04d6:	50                   	push   eax
  5f04d7:	8d 45 60             	lea    eax,[ebp+0x60]
  5f04da:	50                   	push   eax
  5f04db:	e8 29 6b e1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5f04e0:	83 c4 18             	add    esp,0x18
  5f04e3:	8d 4d 60             	lea    ecx,[ebp+0x60]
  5f04e6:	e8 18 35 e1 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5f04eb:	0f 57 c0             	xorps  xmm0,xmm0
  5f04ee:	c7 85 72 0c 00 00 00 	mov    DWORD PTR [ebp+0xc72],0x0
  5f04f8:	66 0f d6 85 6a 0c 00 	movq   QWORD PTR [ebp+0xc6a],xmm0
  5f0500:	8d b5 86 00 00 00    	lea    esi,[ebp+0x86]
  5f0506:	66 c7 85 76 0c 00 00 	mov    WORD PTR [ebp+0xc76],0x0
  5f050f:	8d bd 78 08 00 00    	lea    edi,[ebp+0x878]
  5f0515:	b9 fc 00 00 00       	mov    ecx,0xfc
  5f051a:	8d 85 78 08 00 00    	lea    eax,[ebp+0x878]
  5f0520:	f3 a5                	rep movs DWORD PTR es:[edi],DWORD PTR ds:[esi]
  5f0522:	50                   	push   eax
  5f0523:	8d 4d 00             	lea    ecx,[ebp+0x0]
  5f0526:	66 a5                	movs   WORD PTR es:[edi],WORD PTR ds:[esi]
  5f0528:	e8 f3 21 e1 ff       	call   0x402720 ; ["call resolved=0x46a4f0 "]
  5f052d:	6a 00                	push   0x0
  5f052f:	68 a8 8f 6d 00       	push   0x6d8fa8 ; ["#bri"]
  5f0534:	8d 4d 00             	lea    ecx,[ebp+0x0]
  5f0537:	c6 45 fc 0f          	mov    BYTE PTR [ebp-0x4],0xf
  5f053b:	e8 b3 62 e1 ff       	call   0x4067f3 ; ["call resolved=0x48bbd0 "]
  5f0540:	8d 4d 00             	lea    ecx,[ebp+0x0]
  5f0543:	83 f8 ff             	cmp    eax,0xffffffff
  5f0546:	0f 84 b1 00 00 00    	je     0x5f05fd
  5f054c:	e8 b2 34 e1 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5f0551:	8b 55 44             	mov    edx,DWORD PTR [ebp+0x44]
  5f0554:	83 fa 10             	cmp    edx,0x10
  5f0557:	72 2c                	jb     0x5f0585
  5f0559:	8b 4d 30             	mov    ecx,DWORD PTR [ebp+0x30]
  5f055c:	42                   	inc    edx
  5f055d:	8b c1                	mov    eax,ecx
  5f055f:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f0565:	72 14                	jb     0x5f057b
  5f0567:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f056a:	83 c2 23             	add    edx,0x23
  5f056d:	2b c1                	sub    eax,ecx
  5f056f:	83 c0 fc             	add    eax,0xfffffffc
  5f0572:	83 f8 1f             	cmp    eax,0x1f
  5f0575:	0f 87 46 03 00 00    	ja     0x5f08c1
  5f057b:	52                   	push   edx
  5f057c:	51                   	push   ecx
  5f057d:	e8 18 1b e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f0582:	83 c4 08             	add    esp,0x8
  5f0585:	8b 55 5c             	mov    edx,DWORD PTR [ebp+0x5c]
  5f0588:	83 fa 10             	cmp    edx,0x10
  5f058b:	72 2c                	jb     0x5f05b9
  5f058d:	8b 4d 48             	mov    ecx,DWORD PTR [ebp+0x48]
  5f0590:	42                   	inc    edx
  5f0591:	8b c1                	mov    eax,ecx
  5f0593:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f0599:	72 14                	jb     0x5f05af
  5f059b:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f059e:	83 c2 23             	add    edx,0x23
  5f05a1:	2b c1                	sub    eax,ecx
  5f05a3:	83 c0 fc             	add    eax,0xfffffffc
  5f05a6:	83 f8 1f             	cmp    eax,0x1f
  5f05a9:	0f 87 12 03 00 00    	ja     0x5f08c1
  5f05af:	52                   	push   edx
  5f05b0:	51                   	push   ecx
  5f05b1:	e8 e4 1a e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f05b6:	83 c4 08             	add    esp,0x8
  5f05b9:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  5f05bc:	e8 20 60 e1 ff       	call   0x4065e1 ; ["call resolved=0x5fd840 "]
  5f05c1:	8b 55 2c             	mov    edx,DWORD PTR [ebp+0x2c]
  5f05c4:	83 fa 10             	cmp    edx,0x10
  5f05c7:	72 2c                	jb     0x5f05f5
  5f05c9:	8b 4d 18             	mov    ecx,DWORD PTR [ebp+0x18]
  5f05cc:	42                   	inc    edx
  5f05cd:	8b c1                	mov    eax,ecx
  5f05cf:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f05d5:	72 14                	jb     0x5f05eb
  5f05d7:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f05da:	83 c2 23             	add    edx,0x23
  5f05dd:	2b c1                	sub    eax,ecx
  5f05df:	83 c0 fc             	add    eax,0xfffffffc
  5f05e2:	83 f8 1f             	cmp    eax,0x1f
  5f05e5:	0f 87 d6 02 00 00    	ja     0x5f08c1
  5f05eb:	52                   	push   edx
  5f05ec:	51                   	push   ecx
  5f05ed:	e8 a8 1a e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f05f2:	83 c4 08             	add    esp,0x8
  5f05f5:	83 c8 ff             	or     eax,0xffffffff
  5f05f8:	e9 d6 02 00 00       	jmp    0x5f08d3
  5f05fd:	6a 00                	push   0x0
  5f05ff:	68 a8 68 6c 00       	push   0x6c68a8 ; ["PAY_LOAD_1"]
  5f0604:	e8 ea 61 e1 ff       	call   0x4067f3 ; ["call resolved=0x48bbd0 "]
  5f0609:	83 f8 ff             	cmp    eax,0xffffffff
  5f060c:	74 20                	je     0x5f062e
  5f060e:	50                   	push   eax
  5f060f:	6a 00                	push   0x0
  5f0611:	8d 45 60             	lea    eax,[ebp+0x60]
  5f0614:	50                   	push   eax
  5f0615:	8d 4d 00             	lea    ecx,[ebp+0x0]
  5f0618:	e8 e0 75 e1 ff       	call   0x407bfd ; ["call resolved=0x4cbba0 "]
  5f061d:	50                   	push   eax
  5f061e:	8d 4d 00             	lea    ecx,[ebp+0x0]
  5f0621:	e8 f2 6e e1 ff       	call   0x407518 ; ["call resolved=0x472b20 "]
  5f0626:	8d 4d 60             	lea    ecx,[ebp+0x60]
  5f0629:	e8 d5 33 e1 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5f062e:	8d 4d 00             	lea    ecx,[ebp+0x0]
  5f0631:	e8 21 76 e1 ff       	call   0x407c57 ; ["call resolved=0x4816c0 "]
  5f0636:	6a 5c                	push   0x5c
  5f0638:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f063d:	8b f0                	mov    esi,eax
  5f063f:	e8 22 81 07 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5f0644:	83 c4 08             	add    esp,0x8
  5f0647:	85 c0                	test   eax,eax
  5f0649:	74 12                	je     0x5f065d
  5f064b:	6a 5c                	push   0x5c
  5f064d:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f0652:	e8 0f 81 07 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5f0657:	83 c4 08             	add    esp,0x8
  5f065a:	40                   	inc    eax
  5f065b:	eb 05                	jmp    0x5f0662
  5f065d:	b8 80 26 6f 00       	mov    eax,0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f0662:	56                   	push   esi
  5f0663:	68 bc 3a 6f 00       	push   0x6f3abc ; ["ConnectFlow::retryWlanConnect"]
  5f0668:	68 97 04 00 00       	push   0x497
  5f066d:	50                   	push   eax
  5f066e:	68 94 a1 6d 00       	push   0x6da194 ; ["[ConntctionModule][%s:%d][%s]: FARAWAYWLAN recv data is: %s\n"]
  5f0673:	8d 45 ec             	lea    eax,[ebp-0x14]
  5f0676:	c7 45 ec 02 00 00 00 	mov    DWORD PTR [ebp-0x14],0x2
  5f067d:	50                   	push   eax
  5f067e:	8d 45 60             	lea    eax,[ebp+0x60]
  5f0681:	50                   	push   eax
  5f0682:	e8 82 69 e1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5f0687:	83 c4 1c             	add    esp,0x1c
  5f068a:	8d 4d 60             	lea    ecx,[ebp+0x60]
  5f068d:	e8 71 33 e1 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5f0692:	8d 45 00             	lea    eax,[ebp+0x0]
  5f0695:	c6 45 fc 10          	mov    BYTE PTR [ebp-0x4],0x10
  5f0699:	50                   	push   eax
  5f069a:	8d 4d cc             	lea    ecx,[ebp-0x34]
  5f069d:	e8 43 42 e1 ff       	call   0x4048e5 ; ["call resolved=0x4a7f80 "]
  5f06a2:	6a 01                	push   0x1
  5f06a4:	83 ec 28             	sub    esp,0x28
  5f06a7:	c6 45 fc 11          	mov    BYTE PTR [ebp-0x4],0x11
  5f06ab:	8b c4                	mov    eax,esp
  5f06ad:	c7 40 24 00 00 00 00 	mov    DWORD PTR [eax+0x24],0x0
  5f06b4:	8d 45 cc             	lea    eax,[ebp-0x34]
  5f06b7:	50                   	push   eax
  5f06b8:	8d 45 68             	lea    eax,[ebp+0x68]
  5f06bb:	50                   	push   eax
  5f06bc:	e8 0e 17 e1 ff       	call   0x401dcf ; ["call resolved=0x4b45e0 "]
  5f06c1:	83 c4 34             	add    esp,0x34
  5f06c4:	8d 4d cc             	lea    ecx,[ebp-0x34]
  5f06c7:	c6 45 fc 13          	mov    BYTE PTR [ebp-0x4],0x13
  5f06cb:	e8 06 6f e1 ff       	call   0x4075d6 ; ["call resolved=0x4af180 "]
  5f06d0:	68 04 68 6c 00       	push   0x6c6804 ; ["bytes"]
  5f06d5:	8d 4d 68             	lea    ecx,[ebp+0x68]
  5f06d8:	e8 01 30 e1 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5f06dd:	8d 4d b4             	lea    ecx,[ebp-0x4c]
  5f06e0:	51                   	push   ecx
  5f06e1:	8b c8                	mov    ecx,eax
  5f06e3:	e8 62 4b e1 ff       	call   0x40524a ; ["call resolved=0x55c750 "]
  5f06e8:	8b 45 b8             	mov    eax,DWORD PTR [ebp-0x48]
  5f06eb:	8b 4d b4             	mov    ecx,DWORD PTR [ebp-0x4c]
  5f06ee:	2b c1                	sub    eax,ecx
  5f06f0:	c1 f8 02             	sar    eax,0x2
  5f06f3:	83 f8 01             	cmp    eax,0x1
  5f06f6:	77 19                	ja     0x5f0711
  5f06f8:	72 17                	jb     0x5f0711
  5f06fa:	8b 31                	mov    esi,DWORD PTR [ecx]
  5f06fc:	8d 4d b4             	lea    ecx,[ebp-0x4c]
  5f06ff:	e8 f5 64 e1 ff       	call   0x406bf9 ; ["call resolved=0x47f580 "]
  5f0704:	8d 4d 68             	lea    ecx,[ebp+0x68]
  5f0707:	e8 0b 8d e1 ff       	call   0x409417 ; ["call resolved=0x46f270 "]
  5f070c:	e9 1a 01 00 00       	jmp    0x5f082b
  5f0711:	8d 4d b4             	lea    ecx,[ebp-0x4c]
  5f0714:	e8 e0 64 e1 ff       	call   0x406bf9 ; ["call resolved=0x47f580 "]
  5f0719:	8d 4d 68             	lea    ecx,[ebp+0x68]
  5f071c:	e8 f6 8c e1 ff       	call   0x409417 ; ["call resolved=0x46f270 "]
  5f0721:	8d 4d 00             	lea    ecx,[ebp+0x0]
  5f0724:	e8 da 32 e1 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5f0729:	8b 55 44             	mov    edx,DWORD PTR [ebp+0x44]
  5f072c:	83 fa 10             	cmp    edx,0x10
  5f072f:	72 28                	jb     0x5f0759
  5f0731:	8b 4d 30             	mov    ecx,DWORD PTR [ebp+0x30]
  5f0734:	42                   	inc    edx
  5f0735:	8b c1                	mov    eax,ecx
  5f0737:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f073d:	72 10                	jb     0x5f074f
  5f073f:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f0742:	83 c2 23             	add    edx,0x23
  5f0745:	2b c1                	sub    eax,ecx
  5f0747:	83 c0 fc             	add    eax,0xfffffffc
  5f074a:	83 f8 1f             	cmp    eax,0x1f
  5f074d:	77 74                	ja     0x5f07c3
  5f074f:	52                   	push   edx
  5f0750:	51                   	push   ecx
  5f0751:	e8 44 19 e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f0756:	83 c4 08             	add    esp,0x8
  5f0759:	8b 55 5c             	mov    edx,DWORD PTR [ebp+0x5c]
  5f075c:	83 fa 10             	cmp    edx,0x10
  5f075f:	72 28                	jb     0x5f0789
  5f0761:	8b 4d 48             	mov    ecx,DWORD PTR [ebp+0x48]
  5f0764:	42                   	inc    edx
  5f0765:	8b c1                	mov    eax,ecx
  5f0767:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f076d:	72 10                	jb     0x5f077f
  5f076f:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f0772:	83 c2 23             	add    edx,0x23
  5f0775:	2b c1                	sub    eax,ecx
  5f0777:	83 c0 fc             	add    eax,0xfffffffc
  5f077a:	83 f8 1f             	cmp    eax,0x1f
  5f077d:	77 44                	ja     0x5f07c3
  5f077f:	52                   	push   edx
  5f0780:	51                   	push   ecx
  5f0781:	e8 14 19 e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f0786:	83 c4 08             	add    esp,0x8
  5f0789:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  5f078c:	e8 50 5e e1 ff       	call   0x4065e1 ; ["call resolved=0x5fd840 "]
  5f0791:	8b 55 2c             	mov    edx,DWORD PTR [ebp+0x2c]
  5f0794:	83 fa 10             	cmp    edx,0x10
  5f0797:	0f 82 58 fe ff ff    	jb     0x5f05f5
  5f079d:	8b 4d 18             	mov    ecx,DWORD PTR [ebp+0x18]
  5f07a0:	42                   	inc    edx
  5f07a1:	8b c1                	mov    eax,ecx
  5f07a3:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f07a9:	0f 82 3c fe ff ff    	jb     0x5f05eb
  5f07af:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f07b2:	83 c2 23             	add    edx,0x23
  5f07b5:	2b c1                	sub    eax,ecx
  5f07b7:	83 c0 fc             	add    eax,0xfffffffc
  5f07ba:	83 f8 1f             	cmp    eax,0x1f
  5f07bd:	0f 86 28 fe ff ff    	jbe    0x5f05eb
  5f07c3:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5f07c9:	6a 5c                	push   0x5c
  5f07cb:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f07d0:	e8 91 7f 07 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5f07d5:	83 c4 08             	add    esp,0x8
  5f07d8:	85 c0                	test   eax,eax
  5f07da:	74 12                	je     0x5f07ee
  5f07dc:	6a 5c                	push   0x5c
  5f07de:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f07e3:	e8 7e 7f 07 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5f07e8:	83 c4 08             	add    esp,0x8
  5f07eb:	40                   	inc    eax
  5f07ec:	eb 05                	jmp    0x5f07f3
  5f07ee:	b8 80 26 6f 00       	mov    eax,0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f07f3:	68 bc 3a 6f 00       	push   0x6f3abc ; ["ConnectFlow::retryWlanConnect"]
  5f07f8:	68 a4 04 00 00       	push   0x4a4
  5f07fd:	50                   	push   eax
  5f07fe:	68 70 43 6d 00       	push   0x6d4370 ; ["[ConntctionModule][%s:%d][%s]:json parse_error\n"]
  5f0803:	8d 45 ec             	lea    eax,[ebp-0x14]
  5f0806:	c7 45 ec 02 00 00 00 	mov    DWORD PTR [ebp-0x14],0x2
  5f080d:	50                   	push   eax
  5f080e:	8d 45 60             	lea    eax,[ebp+0x60]
  5f0811:	50                   	push   eax
  5f0812:	e8 f2 67 e1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5f0817:	83 c4 18             	add    esp,0x18
  5f081a:	8d 4d 60             	lea    ecx,[ebp+0x60]
  5f081d:	e8 e1 31 e1 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5f0822:	b8 28 08 5f 00       	mov    eax,0x5f0828
  5f0827:	c3                   	ret
  5f0828:	8b 75 dc             	mov    esi,DWORD PTR [ebp-0x24]
  5f082b:	8d 4d 00             	lea    ecx,[ebp+0x0]
  5f082e:	e8 d0 31 e1 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5f0833:	8b 55 44             	mov    edx,DWORD PTR [ebp+0x44]
  5f0836:	83 fa 10             	cmp    edx,0x10
  5f0839:	72 28                	jb     0x5f0863
  5f083b:	8b 4d 30             	mov    ecx,DWORD PTR [ebp+0x30]
  5f083e:	42                   	inc    edx
  5f083f:	8b c1                	mov    eax,ecx
  5f0841:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f0847:	72 10                	jb     0x5f0859
  5f0849:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f084c:	83 c2 23             	add    edx,0x23
  5f084f:	2b c1                	sub    eax,ecx
  5f0851:	83 c0 fc             	add    eax,0xfffffffc
  5f0854:	83 f8 1f             	cmp    eax,0x1f
  5f0857:	77 68                	ja     0x5f08c1
  5f0859:	52                   	push   edx
  5f085a:	51                   	push   ecx
  5f085b:	e8 3a 18 e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f0860:	83 c4 08             	add    esp,0x8
  5f0863:	8b 55 5c             	mov    edx,DWORD PTR [ebp+0x5c]
  5f0866:	83 fa 10             	cmp    edx,0x10
  5f0869:	72 28                	jb     0x5f0893
  5f086b:	8b 4d 48             	mov    ecx,DWORD PTR [ebp+0x48]
  5f086e:	42                   	inc    edx
  5f086f:	8b c1                	mov    eax,ecx
  5f0871:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f0877:	72 10                	jb     0x5f0889
  5f0879:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f087c:	83 c2 23             	add    edx,0x23
  5f087f:	2b c1                	sub    eax,ecx
  5f0881:	83 c0 fc             	add    eax,0xfffffffc
  5f0884:	83 f8 1f             	cmp    eax,0x1f
  5f0887:	77 38                	ja     0x5f08c1
  5f0889:	52                   	push   edx
  5f088a:	51                   	push   ecx
  5f088b:	e8 0a 18 e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f0890:	83 c4 08             	add    esp,0x8
  5f0893:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  5f0896:	e8 46 5d e1 ff       	call   0x4065e1 ; ["call resolved=0x5fd840 "]
  5f089b:	8b 55 2c             	mov    edx,DWORD PTR [ebp+0x2c]
  5f089e:	83 fa 10             	cmp    edx,0x10
  5f08a1:	72 2e                	jb     0x5f08d1
  5f08a3:	8b 4d 18             	mov    ecx,DWORD PTR [ebp+0x18]
  5f08a6:	42                   	inc    edx
  5f08a7:	8b c1                	mov    eax,ecx
  5f08a9:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f08af:	72 16                	jb     0x5f08c7
  5f08b1:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f08b4:	83 c2 23             	add    edx,0x23
  5f08b7:	2b c1                	sub    eax,ecx
  5f08b9:	83 c0 fc             	add    eax,0xfffffffc
  5f08bc:	83 f8 1f             	cmp    eax,0x1f
  5f08bf:	76 06                	jbe    0x5f08c7
  5f08c1:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5f08c7:	52                   	push   edx
  5f08c8:	51                   	push   ecx
  5f08c9:	e8 cc 17 e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f08ce:	83 c4 08             	add    esp,0x8
  5f08d1:	8b c6                	mov    eax,esi
  5f08d3:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  5f08d6:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  5f08dd:	59                   	pop    ecx
  5f08de:	5f                   	pop    edi
  5f08df:	5e                   	pop    esi
  5f08e0:	5b                   	pop    ebx
  5f08e1:	8b 8d 78 0c 00 00    	mov    ecx,DWORD PTR [ebp+0xc78]
  5f08e7:	33 cd                	xor    ecx,ebp
  5f08e9:	e8 a1 3b e1 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5f08ee:	8d a5 7c 0c 00 00    	lea    esp,[ebp+0xc7c]
  5f08f4:	5d                   	pop    ebp
  5f08f5:	c2 10 00             	ret    0x10
