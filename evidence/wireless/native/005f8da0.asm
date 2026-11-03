; ConnectFlow::wlanDataEncryption; image base 0x400000; static annotation only
  5f8da0:	55                   	push   ebp
  5f8da1:	8b ec                	mov    ebp,esp
  5f8da3:	6a ff                	push   0xffffffff
  5f8da5:	68 fc 9a 69 00       	push   0x699afc
  5f8daa:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  5f8db0:	50                   	push   eax
  5f8db1:	81 ec f4 00 00 00    	sub    esp,0xf4
  5f8db7:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5f8dbc:	33 c5                	xor    eax,ebp
  5f8dbe:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  5f8dc1:	56                   	push   esi
  5f8dc2:	57                   	push   edi
  5f8dc3:	50                   	push   eax
  5f8dc4:	8d 45 f4             	lea    eax,[ebp-0xc]
  5f8dc7:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  5f8dcd:	89 8d 1c ff ff ff    	mov    DWORD PTR [ebp-0xe4],ecx
  5f8dd3:	8b 45 10             	mov    eax,DWORD PTR [ebp+0x10]
  5f8dd6:	b9 3f a3 7a 00       	mov    ecx,0x7aa33f
  5f8ddb:	8b 75 08             	mov    esi,DWORD PTR [ebp+0x8]
  5f8dde:	8b 7d 0c             	mov    edi,DWORD PTR [ebp+0xc]
  5f8de1:	89 b5 00 ff ff ff    	mov    DWORD PTR [ebp-0x100],esi
  5f8de7:	89 85 04 ff ff ff    	mov    DWORD PTR [ebp-0xfc],eax
  5f8ded:	e8 fc fc e0 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5f8df2:	83 7e 10 00          	cmp    DWORD PTR [esi+0x10],0x0
  5f8df6:	0f 85 92 00 00 00    	jne    0x5f8e8e
  5f8dfc:	6a 5c                	push   0x5c
  5f8dfe:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f8e03:	e8 5e f9 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5f8e08:	83 c4 08             	add    esp,0x8
  5f8e0b:	85 c0                	test   eax,eax
  5f8e0d:	74 12                	je     0x5f8e21
  5f8e0f:	6a 5c                	push   0x5c
  5f8e11:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f8e16:	e8 4b f9 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5f8e1b:	83 c4 08             	add    esp,0x8
  5f8e1e:	40                   	inc    eax
  5f8e1f:	eb 05                	jmp    0x5f8e26
  5f8e21:	b8 80 26 6f 00       	mov    eax,0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f8e26:	68 e0 33 6f 00       	push   0x6f33e0 ; ["ConnectFlow::wlanDataEncryption"]
  5f8e2b:	68 e7 01 00 00       	push   0x1e7
  5f8e30:	50                   	push   eax
  5f8e31:	68 08 34 6f 00       	push   0x6f3408 ; ["[ConntctionModule][%s:%d][%s]: Pcsuite connect param token is empty"]
  5f8e36:	8d 85 1c ff ff ff    	lea    eax,[ebp-0xe4]
  5f8e3c:	c7 85 1c ff ff ff 02 	mov    DWORD PTR [ebp-0xe4],0x2
  5f8e46:	50                   	push   eax
  5f8e47:	8d 45 a0             	lea    eax,[ebp-0x60]
  5f8e4a:	50                   	push   eax
  5f8e4b:	e8 b9 e1 e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5f8e50:	8b 55 b4             	mov    edx,DWORD PTR [ebp-0x4c]
  5f8e53:	83 c4 18             	add    esp,0x18
  5f8e56:	83 fa 10             	cmp    edx,0x10
  5f8e59:	72 2c                	jb     0x5f8e87
  5f8e5b:	8b 4d a0             	mov    ecx,DWORD PTR [ebp-0x60]
  5f8e5e:	42                   	inc    edx
  5f8e5f:	8b c1                	mov    eax,ecx
  5f8e61:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f8e67:	72 14                	jb     0x5f8e7d
  5f8e69:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f8e6c:	83 c2 23             	add    edx,0x23
  5f8e6f:	2b c1                	sub    eax,ecx
  5f8e71:	83 c0 fc             	add    eax,0xfffffffc
  5f8e74:	83 f8 1f             	cmp    eax,0x1f
  5f8e77:	0f 87 64 06 00 00    	ja     0x5f94e1
  5f8e7d:	52                   	push   edx
  5f8e7e:	51                   	push   ecx
  5f8e7f:	e8 16 92 e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f8e84:	83 c4 08             	add    esp,0x8
  5f8e87:	32 c0                	xor    al,al
  5f8e89:	e9 03 07 00 00       	jmp    0x5f9591
  5f8e8e:	8b b5 1c ff ff ff    	mov    esi,DWORD PTR [ebp-0xe4]
  5f8e94:	8d 85 08 ff ff ff    	lea    eax,[ebp-0xf8]
  5f8e9a:	50                   	push   eax
  5f8e9b:	c7 85 08 ff ff ff 01 	mov    DWORD PTR [ebp-0xf8],0x1
  5f8ea5:	8b 8e 88 0c 00 00    	mov    ecx,DWORD PTR [esi+0xc88]
  5f8eab:	e8 49 83 e0 ff       	call   0x4011f9 ; ["call resolved=0x57e110 "]
  5f8eb0:	8b 08                	mov    ecx,DWORD PTR [eax]
  5f8eb2:	8b 91 c0 00 00 00    	mov    edx,DWORD PTR [ecx+0xc0]
  5f8eb8:	8d 8d 0c ff ff ff    	lea    ecx,[ebp-0xf4]
  5f8ebe:	51                   	push   ecx
  5f8ebf:	8b c8                	mov    ecx,eax
  5f8ec1:	ff d2                	call   edx
  5f8ec3:	c7 45 88 00 00 00 00 	mov    DWORD PTR [ebp-0x78],0x0
  5f8eca:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  5f8ed1:	c7 45 9c 0f 00 00 00 	mov    DWORD PTR [ebp-0x64],0xf
  5f8ed8:	c7 45 98 00 00 00 00 	mov    DWORD PTR [ebp-0x68],0x0
  5f8edf:	c6 45 88 00          	mov    BYTE PTR [ebp-0x78],0x0
  5f8ee3:	8b 8e 88 0c 00 00    	mov    ecx,DWORD PTR [esi+0xc88]
  5f8ee9:	8d 85 08 ff ff ff    	lea    eax,[ebp-0xf8]
  5f8eef:	6a 00                	push   0x0
  5f8ef1:	68 e0 44 78 00       	push   0x7844e0
  5f8ef6:	68 94 36 78 00       	push   0x783694
  5f8efb:	6a 00                	push   0x0
  5f8efd:	50                   	push   eax
  5f8efe:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  5f8f02:	c7 85 08 ff ff ff 01 	mov    DWORD PTR [ebp-0xf8],0x1
  5f8f0c:	e8 e8 82 e0 ff       	call   0x4011f9 ; ["call resolved=0x57e110 "]
  5f8f11:	50                   	push   eax
  5f8f12:	e8 85 f8 06 00       	call   0x66879c ; ["call resolved=0x66879c "]
  5f8f17:	83 c4 14             	add    esp,0x14
  5f8f1a:	8b c8                	mov    ecx,eax
  5f8f1c:	8b 10                	mov    edx,DWORD PTR [eax]
  5f8f1e:	8b 82 90 00 00 00    	mov    eax,DWORD PTR [edx+0x90]
  5f8f24:	ff d0                	call   eax
  5f8f26:	50                   	push   eax
  5f8f27:	8d 4d b8             	lea    ecx,[ebp-0x48]
  5f8f2a:	e8 5c cd e0 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  5f8f2f:	83 7d cc 10          	cmp    DWORD PTR [ebp-0x34],0x10
  5f8f33:	8d 45 b8             	lea    eax,[ebp-0x48]
  5f8f36:	6a 01                	push   0x1
  5f8f38:	0f 43 45 b8          	cmovae eax,DWORD PTR [ebp-0x48]
  5f8f3c:	68 2c 1e 6c 00       	push   0x6c1e2c
  5f8f41:	6a 00                	push   0x0
  5f8f43:	ff 75 c8             	push   DWORD PTR [ebp-0x38]
  5f8f46:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  5f8f4a:	50                   	push   eax
  5f8f4b:	e8 6c ce e0 ff       	call   0x405dbc ; ["call resolved=0x441fc0 "]
  5f8f50:	8b f0                	mov    esi,eax
  5f8f52:	83 c4 14             	add    esp,0x14
  5f8f55:	83 fe ff             	cmp    esi,0xffffffff
  5f8f58:	74 41                	je     0x5f8f9b
  5f8f5a:	66 0f 1f 44 00 00    	nop    WORD PTR [eax+eax*1+0x0]
  5f8f60:	6a 01                	push   0x1
  5f8f62:	68 88 a2 6d 00       	push   0x6da288
  5f8f67:	6a 01                	push   0x1
  5f8f69:	56                   	push   esi
  5f8f6a:	8d 4d b8             	lea    ecx,[ebp-0x48]
  5f8f6d:	e8 f6 c2 e0 ff       	call   0x405268 ; ["call resolved=0x4a2660 "]
  5f8f72:	83 7d cc 10          	cmp    DWORD PTR [ebp-0x34],0x10
  5f8f76:	8d 46 01             	lea    eax,[esi+0x1]
  5f8f79:	6a 01                	push   0x1
  5f8f7b:	68 2c 1e 6c 00       	push   0x6c1e2c
  5f8f80:	50                   	push   eax
  5f8f81:	ff 75 c8             	push   DWORD PTR [ebp-0x38]
  5f8f84:	8d 4d b8             	lea    ecx,[ebp-0x48]
  5f8f87:	0f 43 4d b8          	cmovae ecx,DWORD PTR [ebp-0x48]
  5f8f8b:	51                   	push   ecx
  5f8f8c:	e8 2b ce e0 ff       	call   0x405dbc ; ["call resolved=0x441fc0 "]
  5f8f91:	8b f0                	mov    esi,eax
  5f8f93:	83 c4 14             	add    esp,0x14
  5f8f96:	83 fe ff             	cmp    esi,0xffffffff
  5f8f99:	75 c5                	jne    0x5f8f60
  5f8f9b:	80 bd 0c ff ff ff 01 	cmp    BYTE PTR [ebp-0xf4],0x1
  5f8fa2:	0f 85 9f 00 00 00    	jne    0x5f9047
  5f8fa8:	8b 85 14 ff ff ff    	mov    eax,DWORD PTR [ebp-0xec]
  5f8fae:	8d 4d b8             	lea    ecx,[ebp-0x48]
  5f8fb1:	51                   	push   ecx
  5f8fb2:	8d 8d 7c ff ff ff    	lea    ecx,[ebp-0x84]
  5f8fb8:	89 85 20 ff ff ff    	mov    DWORD PTR [ebp-0xe0],eax
  5f8fbe:	51                   	push   ecx
  5f8fbf:	8b c8                	mov    ecx,eax
  5f8fc1:	e8 38 91 e0 ff       	call   0x4020fe ; ["call resolved=0x441600 "]
  5f8fc6:	8b 75 84             	mov    esi,DWORD PTR [ebp-0x7c]
  5f8fc9:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  5f8fcd:	75 14                	jne    0x5f8fe3
  5f8fcf:	8d 46 10             	lea    eax,[esi+0x10]
  5f8fd2:	50                   	push   eax
  5f8fd3:	8d 45 b8             	lea    eax,[ebp-0x48]
  5f8fd6:	50                   	push   eax
  5f8fd7:	e8 e9 0a e1 ff       	call   0x409ac5 ; ["call resolved=0x43eed0 "]
  5f8fdc:	83 c4 08             	add    esp,0x8
  5f8fdf:	84 c0                	test   al,al
  5f8fe1:	74 08                	je     0x5f8feb
  5f8fe3:	8b b5 20 ff ff ff    	mov    esi,DWORD PTR [ebp-0xe0]
  5f8fe9:	8b 36                	mov    esi,DWORD PTR [esi]
  5f8feb:	8b 8d 14 ff ff ff    	mov    ecx,DWORD PTR [ebp-0xec]
  5f8ff1:	3b 31                	cmp    esi,DWORD PTR [ecx]
  5f8ff3:	74 52                	je     0x5f9047
  5f8ff5:	8a 85 0c ff ff ff    	mov    al,BYTE PTR [ebp-0xf4]
  5f8ffb:	84 c0                	test   al,al
  5f8ffd:	75 29                	jne    0x5f9028
  5f8fff:	c6 85 0c ff ff ff 01 	mov    BYTE PTR [ebp-0xf4],0x1
  5f9006:	e8 bb a5 e0 ff       	call   0x4035c6 ; ["call resolved=0x5e94b0 "]
  5f900b:	8d 8d 0c ff ff ff    	lea    ecx,[ebp-0xf4]
  5f9011:	89 85 14 ff ff ff    	mov    DWORD PTR [ebp-0xec],eax
  5f9017:	e8 c2 0f e1 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5f901c:	8b 8d 14 ff ff ff    	mov    ecx,DWORD PTR [ebp-0xec]
  5f9022:	8a 85 0c ff ff ff    	mov    al,BYTE PTR [ebp-0xf4]
  5f9028:	3c 01                	cmp    al,0x1
  5f902a:	0f 85 7e 05 00 00    	jne    0x5f95ae
  5f9030:	8d 45 b8             	lea    eax,[ebp-0x48]
  5f9033:	50                   	push   eax
  5f9034:	e8 76 0c e1 ff       	call   0x409caf ; ["call resolved=0x4af270 "]
  5f9039:	50                   	push   eax
  5f903a:	8d 4d 88             	lea    ecx,[ebp-0x78]
  5f903d:	e8 d2 ca e0 ff       	call   0x405b14 ; ["call resolved=0x4a7fe0 "]
  5f9042:	e9 97 00 00 00       	jmp    0x5f90de
  5f9047:	83 7d cc 10          	cmp    DWORD PTR [ebp-0x34],0x10
  5f904b:	8d 75 b8             	lea    esi,[ebp-0x48]
  5f904e:	6a 5c                	push   0x5c
  5f9050:	0f 43 75 b8          	cmovae esi,DWORD PTR [ebp-0x48]
  5f9054:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f9059:	e8 08 f7 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5f905e:	83 c4 08             	add    esp,0x8
  5f9061:	85 c0                	test   eax,eax
  5f9063:	74 12                	je     0x5f9077
  5f9065:	6a 5c                	push   0x5c
  5f9067:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f906c:	e8 f5 f6 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5f9071:	83 c4 08             	add    esp,0x8
  5f9074:	40                   	inc    eax
  5f9075:	eb 05                	jmp    0x5f907c
  5f9077:	b8 80 26 6f 00       	mov    eax,0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f907c:	56                   	push   esi
  5f907d:	68 e0 33 6f 00       	push   0x6f33e0 ; ["ConnectFlow::wlanDataEncryption"]
  5f9082:	68 f8 01 00 00       	push   0x1f8
  5f9087:	50                   	push   eax
  5f9088:	68 60 34 6f 00       	push   0x6f3460 ; ["[ConntctionModule][%s:%d][%s]: Mobile device not contain %s seed"]
  5f908d:	8d 85 20 ff ff ff    	lea    eax,[ebp-0xe0]
  5f9093:	c7 85 20 ff ff ff 02 	mov    DWORD PTR [ebp-0xe0],0x2
  5f909d:	50                   	push   eax
  5f909e:	8d 45 a0             	lea    eax,[ebp-0x60]
  5f90a1:	50                   	push   eax
  5f90a2:	e8 62 df e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5f90a7:	8b 55 b4             	mov    edx,DWORD PTR [ebp-0x4c]
  5f90aa:	83 c4 1c             	add    esp,0x1c
  5f90ad:	83 fa 10             	cmp    edx,0x10
  5f90b0:	72 2c                	jb     0x5f90de
  5f90b2:	8b 4d a0             	mov    ecx,DWORD PTR [ebp-0x60]
  5f90b5:	42                   	inc    edx
  5f90b6:	8b c1                	mov    eax,ecx
  5f90b8:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f90be:	72 14                	jb     0x5f90d4
  5f90c0:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f90c3:	83 c2 23             	add    edx,0x23
  5f90c6:	2b c1                	sub    eax,ecx
  5f90c8:	83 c0 fc             	add    eax,0xfffffffc
  5f90cb:	83 f8 1f             	cmp    eax,0x1f
  5f90ce:	0f 87 0d 04 00 00    	ja     0x5f94e1
  5f90d4:	52                   	push   edx
  5f90d5:	51                   	push   ecx
  5f90d6:	e8 bf 8f e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f90db:	83 c4 08             	add    esp,0x8
  5f90de:	8d 45 a0             	lea    eax,[ebp-0x60]
  5f90e1:	50                   	push   eax
  5f90e2:	e8 ec ab e0 ff       	call   0x403cd3 ; ["call resolved=0x5eef50 "]
  5f90e7:	8b f0                	mov    esi,eax
  5f90e9:	83 c4 04             	add    esp,0x4
  5f90ec:	3b fe                	cmp    edi,esi
  5f90ee:	74 28                	je     0x5f9118
  5f90f0:	8b cf                	mov    ecx,edi
  5f90f2:	e8 0c a9 e0 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5f90f7:	0f 10 06             	movups xmm0,XMMWORD PTR [esi]
  5f90fa:	0f 11 07             	movups XMMWORD PTR [edi],xmm0
  5f90fd:	f3 0f 7e 46 10       	movq   xmm0,QWORD PTR [esi+0x10]
  5f9102:	66 0f d6 47 10       	movq   QWORD PTR [edi+0x10],xmm0
  5f9107:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  5f910e:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  5f9115:	c6 06 00             	mov    BYTE PTR [esi],0x0
  5f9118:	8b 55 b4             	mov    edx,DWORD PTR [ebp-0x4c]
  5f911b:	83 fa 10             	cmp    edx,0x10
  5f911e:	72 2e                	jb     0x5f914e
  5f9120:	8b 4d a0             	mov    ecx,DWORD PTR [ebp-0x60]
  5f9123:	42                   	inc    edx
  5f9124:	8b c1                	mov    eax,ecx
  5f9126:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f912c:	72 16                	jb     0x5f9144
  5f912e:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f9131:	83 c2 23             	add    edx,0x23
  5f9134:	2b c1                	sub    eax,ecx
  5f9136:	83 c0 fc             	add    eax,0xfffffffc
  5f9139:	83 f8 1f             	cmp    eax,0x1f
  5f913c:	76 06                	jbe    0x5f9144
  5f913e:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5f9144:	52                   	push   edx
  5f9145:	51                   	push   ecx
  5f9146:	e8 4f 8f e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f914b:	83 c4 08             	add    esp,0x8
  5f914e:	8d 45 d0             	lea    eax,[ebp-0x30]
  5f9151:	be ff ff ff 7f       	mov    esi,0x7fffffff
  5f9156:	50                   	push   eax
  5f9157:	83 ec 18             	sub    esp,0x18
  5f915a:	8b c6                	mov    eax,esi
  5f915c:	8b cc                	mov    ecx,esp
  5f915e:	89 8d 20 ff ff ff    	mov    DWORD PTR [ebp-0xe0],ecx
  5f9164:	2b 45 98             	sub    eax,DWORD PTR [ebp-0x68]
  5f9167:	8b 57 10             	mov    edx,DWORD PTR [edi+0x10]
  5f916a:	3b c2                	cmp    eax,edx
  5f916c:	0f 82 90 04 00 00    	jb     0x5f9602
  5f9172:	83 7d 9c 10          	cmp    DWORD PTR [ebp-0x64],0x10
  5f9176:	8d 45 88             	lea    eax,[ebp-0x78]
  5f9179:	0f 43 45 88          	cmovae eax,DWORD PTR [ebp-0x78]
  5f917d:	83 7f 14 10          	cmp    DWORD PTR [edi+0x14],0x10
  5f9181:	72 02                	jb     0x5f9185
  5f9183:	8b 3f                	mov    edi,DWORD PTR [edi]
  5f9185:	52                   	push   edx
  5f9186:	57                   	push   edi
  5f9187:	ff 75 98             	push   DWORD PTR [ebp-0x68]
  5f918a:	50                   	push   eax
  5f918b:	8d 45 88             	lea    eax,[ebp-0x78]
  5f918e:	50                   	push   eax
  5f918f:	ff b5 04 ff ff ff    	push   DWORD PTR [ebp-0xfc]
  5f9195:	e8 6b 0a e1 ff       	call   0x409c05 ; ["call resolved=0x46a750 "]
  5f919a:	8d 45 a0             	lea    eax,[ebp-0x60]
  5f919d:	50                   	push   eax
  5f919e:	e8 97 fd e0 ff       	call   0x408f3a ; ["call resolved=0x5f38c0 "]
  5f91a3:	8b 55 b4             	mov    edx,DWORD PTR [ebp-0x4c]
  5f91a6:	83 c4 20             	add    esp,0x20
  5f91a9:	83 fa 10             	cmp    edx,0x10
  5f91ac:	72 2e                	jb     0x5f91dc
  5f91ae:	8b 4d a0             	mov    ecx,DWORD PTR [ebp-0x60]
  5f91b1:	42                   	inc    edx
  5f91b2:	8b c1                	mov    eax,ecx
  5f91b4:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f91ba:	72 16                	jb     0x5f91d2
  5f91bc:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f91bf:	83 c2 23             	add    edx,0x23
  5f91c2:	2b c1                	sub    eax,ecx
  5f91c4:	83 c0 fc             	add    eax,0xfffffffc
  5f91c7:	83 f8 1f             	cmp    eax,0x1f
  5f91ca:	76 06                	jbe    0x5f91d2
  5f91cc:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5f91d2:	52                   	push   edx
  5f91d3:	51                   	push   ecx
  5f91d4:	e8 c1 8e e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f91d9:	83 c4 08             	add    esp,0x8
  5f91dc:	e8 53 e5 e0 ff       	call   0x407734 ; ["call resolved=0x492af0 "]
  5f91e1:	8b 50 28             	mov    edx,DWORD PTR [eax+0x28]
  5f91e4:	83 c0 18             	add    eax,0x18
  5f91e7:	2b f2                	sub    esi,edx
  5f91e9:	83 fe 01             	cmp    esi,0x1
  5f91ec:	0f 82 15 04 00 00    	jb     0x5f9607
  5f91f2:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  5f91f6:	8b c8                	mov    ecx,eax
  5f91f8:	72 02                	jb     0x5f91fc
  5f91fa:	8b 08                	mov    ecx,DWORD PTR [eax]
  5f91fc:	6a 01                	push   0x1
  5f91fe:	68 b0 34 6f 00       	push   0x6f34b0
  5f9203:	52                   	push   edx
  5f9204:	51                   	push   ecx
  5f9205:	50                   	push   eax
  5f9206:	ff b5 04 ff ff ff    	push   DWORD PTR [ebp-0xfc]
  5f920c:	8d 8d 58 ff ff ff    	lea    ecx,[ebp-0xa8]
  5f9212:	e8 ee 09 e1 ff       	call   0x409c05 ; ["call resolved=0x46a750 "]
  5f9217:	8b 85 1c ff ff ff    	mov    eax,DWORD PTR [ebp-0xe4]
  5f921d:	05 c0 0c 00 00       	add    eax,0xcc0
  5f9222:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  5f9226:	50                   	push   eax
  5f9227:	8d 85 58 ff ff ff    	lea    eax,[ebp-0xa8]
  5f922d:	50                   	push   eax
  5f922e:	8d 45 a0             	lea    eax,[ebp-0x60]
  5f9231:	50                   	push   eax
  5f9232:	e8 a8 df e0 ff       	call   0x4071df ; ["call resolved=0x43ece0 "]
  5f9237:	83 c4 0c             	add    esp,0xc
  5f923a:	6a 01                	push   0x1
  5f923c:	68 b0 34 6f 00       	push   0x6f34b0
  5f9241:	8b c8                	mov    ecx,eax
  5f9243:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  5f9247:	e8 8a a7 e0 ff       	call   0x4039d6 ; ["call resolved=0x480650 "]
  5f924c:	c7 85 70 ff ff ff 00 	mov    DWORD PTR [ebp-0x90],0x0
  5f9256:	c7 45 80 00 00 00 00 	mov    DWORD PTR [ebp-0x80],0x0
  5f925d:	c7 45 84 00 00 00 00 	mov    DWORD PTR [ebp-0x7c],0x0
  5f9264:	0f 10 00             	movups xmm0,XMMWORD PTR [eax]
  5f9267:	0f 11 85 70 ff ff ff 	movups XMMWORD PTR [ebp-0x90],xmm0
  5f926e:	f3 0f 7e 40 10       	movq   xmm0,QWORD PTR [eax+0x10]
  5f9273:	66 0f d6 45 80       	movq   QWORD PTR [ebp-0x80],xmm0
  5f9278:	c7 40 10 00 00 00 00 	mov    DWORD PTR [eax+0x10],0x0
  5f927f:	c7 40 14 0f 00 00 00 	mov    DWORD PTR [eax+0x14],0xf
  5f9286:	c6 00 00             	mov    BYTE PTR [eax],0x0
  5f9289:	ff b5 00 ff ff ff    	push   DWORD PTR [ebp-0x100]
  5f928f:	8d 85 70 ff ff ff    	lea    eax,[ebp-0x90]
  5f9295:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  5f9299:	50                   	push   eax
  5f929a:	8d 85 3c ff ff ff    	lea    eax,[ebp-0xc4]
  5f92a0:	50                   	push   eax
  5f92a1:	e8 39 df e0 ff       	call   0x4071df ; ["call resolved=0x43ece0 "]
  5f92a6:	83 c4 0c             	add    esp,0xc
  5f92a9:	8b 55 84             	mov    edx,DWORD PTR [ebp-0x7c]
  5f92ac:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  5f92b0:	83 fa 10             	cmp    edx,0x10
  5f92b3:	72 2f                	jb     0x5f92e4
  5f92b5:	8b 8d 70 ff ff ff    	mov    ecx,DWORD PTR [ebp-0x90]
  5f92bb:	42                   	inc    edx
  5f92bc:	8b c1                	mov    eax,ecx
  5f92be:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f92c4:	72 14                	jb     0x5f92da
  5f92c6:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f92c9:	83 c2 23             	add    edx,0x23
  5f92cc:	2b c1                	sub    eax,ecx
  5f92ce:	83 c0 fc             	add    eax,0xfffffffc
  5f92d1:	83 f8 1f             	cmp    eax,0x1f
  5f92d4:	0f 87 95 00 00 00    	ja     0x5f936f
  5f92da:	52                   	push   edx
  5f92db:	51                   	push   ecx
  5f92dc:	e8 b9 8d e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f92e1:	83 c4 08             	add    esp,0x8
  5f92e4:	c7 45 80 00 00 00 00 	mov    DWORD PTR [ebp-0x80],0x0
  5f92eb:	c7 45 84 0f 00 00 00 	mov    DWORD PTR [ebp-0x7c],0xf
  5f92f2:	c6 85 70 ff ff ff 00 	mov    BYTE PTR [ebp-0x90],0x0
  5f92f9:	8b 55 b4             	mov    edx,DWORD PTR [ebp-0x4c]
  5f92fc:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  5f9300:	83 fa 10             	cmp    edx,0x10
  5f9303:	72 28                	jb     0x5f932d
  5f9305:	8b 4d a0             	mov    ecx,DWORD PTR [ebp-0x60]
  5f9308:	42                   	inc    edx
  5f9309:	8b c1                	mov    eax,ecx
  5f930b:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f9311:	72 10                	jb     0x5f9323
  5f9313:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f9316:	83 c2 23             	add    edx,0x23
  5f9319:	2b c1                	sub    eax,ecx
  5f931b:	83 c0 fc             	add    eax,0xfffffffc
  5f931e:	83 f8 1f             	cmp    eax,0x1f
  5f9321:	77 4c                	ja     0x5f936f
  5f9323:	52                   	push   edx
  5f9324:	51                   	push   ecx
  5f9325:	e8 70 8d e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f932a:	83 c4 08             	add    esp,0x8
  5f932d:	c7 45 b0 00 00 00 00 	mov    DWORD PTR [ebp-0x50],0x0
  5f9334:	c7 45 b4 0f 00 00 00 	mov    DWORD PTR [ebp-0x4c],0xf
  5f933b:	c6 45 a0 00          	mov    BYTE PTR [ebp-0x60],0x0
  5f933f:	8b 95 6c ff ff ff    	mov    edx,DWORD PTR [ebp-0x94]
  5f9345:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  5f9349:	83 fa 10             	cmp    edx,0x10
  5f934c:	72 31                	jb     0x5f937f
  5f934e:	8b 8d 58 ff ff ff    	mov    ecx,DWORD PTR [ebp-0xa8]
  5f9354:	42                   	inc    edx
  5f9355:	8b c1                	mov    eax,ecx
  5f9357:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f935d:	72 16                	jb     0x5f9375
  5f935f:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f9362:	83 c2 23             	add    edx,0x23
  5f9365:	2b c1                	sub    eax,ecx
  5f9367:	83 c0 fc             	add    eax,0xfffffffc
  5f936a:	83 f8 1f             	cmp    eax,0x1f
  5f936d:	76 06                	jbe    0x5f9375
  5f936f:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5f9375:	52                   	push   edx
  5f9376:	51                   	push   ecx
  5f9377:	e8 1e 8d e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f937c:	83 c4 08             	add    esp,0x8
  5f937f:	8d 45 d0             	lea    eax,[ebp-0x30]
  5f9382:	c7 85 68 ff ff ff 00 	mov    DWORD PTR [ebp-0x98],0x0
  5f938c:	50                   	push   eax
  5f938d:	8d 85 3c ff ff ff    	lea    eax,[ebp-0xc4]
  5f9393:	c7 85 6c ff ff ff 0f 	mov    DWORD PTR [ebp-0x94],0xf
  5f939d:	50                   	push   eax
  5f939e:	8d 85 24 ff ff ff    	lea    eax,[ebp-0xdc]
  5f93a4:	c6 85 58 ff ff ff 00 	mov    BYTE PTR [ebp-0xa8],0x0
  5f93ab:	50                   	push   eax
  5f93ac:	e8 21 aa e0 ff       	call   0x403dd2 ; ["call resolved=0x5ee680 "]
  5f93b1:	8b bd 04 ff ff ff    	mov    edi,DWORD PTR [ebp-0xfc]
  5f93b7:	8b f0                	mov    esi,eax
  5f93b9:	83 c4 0c             	add    esp,0xc
  5f93bc:	3b fe                	cmp    edi,esi
  5f93be:	74 28                	je     0x5f93e8
  5f93c0:	8b cf                	mov    ecx,edi
  5f93c2:	e8 3c a6 e0 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5f93c7:	0f 10 06             	movups xmm0,XMMWORD PTR [esi]
  5f93ca:	0f 11 07             	movups XMMWORD PTR [edi],xmm0
  5f93cd:	f3 0f 7e 46 10       	movq   xmm0,QWORD PTR [esi+0x10]
  5f93d2:	66 0f d6 47 10       	movq   QWORD PTR [edi+0x10],xmm0
  5f93d7:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  5f93de:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  5f93e5:	c6 06 00             	mov    BYTE PTR [esi],0x0
  5f93e8:	8b 95 38 ff ff ff    	mov    edx,DWORD PTR [ebp-0xc8]
  5f93ee:	83 fa 10             	cmp    edx,0x10
  5f93f1:	72 31                	jb     0x5f9424
  5f93f3:	8b 8d 24 ff ff ff    	mov    ecx,DWORD PTR [ebp-0xdc]
  5f93f9:	42                   	inc    edx
  5f93fa:	8b c1                	mov    eax,ecx
  5f93fc:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f9402:	72 16                	jb     0x5f941a
  5f9404:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f9407:	83 c2 23             	add    edx,0x23
  5f940a:	2b c1                	sub    eax,ecx
  5f940c:	83 c0 fc             	add    eax,0xfffffffc
  5f940f:	83 f8 1f             	cmp    eax,0x1f
  5f9412:	76 06                	jbe    0x5f941a
  5f9414:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5f941a:	52                   	push   edx
  5f941b:	51                   	push   ecx
  5f941c:	e8 79 8c e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f9421:	83 c4 08             	add    esp,0x8
  5f9424:	8b 95 50 ff ff ff    	mov    edx,DWORD PTR [ebp-0xb0]
  5f942a:	83 fa 10             	cmp    edx,0x10
  5f942d:	72 2f                	jb     0x5f945e
  5f942f:	8b 8d 3c ff ff ff    	mov    ecx,DWORD PTR [ebp-0xc4]
  5f9435:	42                   	inc    edx
  5f9436:	8b c1                	mov    eax,ecx
  5f9438:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f943e:	72 14                	jb     0x5f9454
  5f9440:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f9443:	83 c2 23             	add    edx,0x23
  5f9446:	2b c1                	sub    eax,ecx
  5f9448:	83 c0 fc             	add    eax,0xfffffffc
  5f944b:	83 f8 1f             	cmp    eax,0x1f
  5f944e:	0f 87 8d 00 00 00    	ja     0x5f94e1
  5f9454:	52                   	push   edx
  5f9455:	51                   	push   ecx
  5f9456:	e8 3f 8c e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f945b:	83 c4 08             	add    esp,0x8
  5f945e:	8b 55 cc             	mov    edx,DWORD PTR [ebp-0x34]
  5f9461:	c7 85 4c ff ff ff 00 	mov    DWORD PTR [ebp-0xb4],0x0
  5f946b:	c7 85 50 ff ff ff 0f 	mov    DWORD PTR [ebp-0xb0],0xf
  5f9475:	c6 85 3c ff ff ff 00 	mov    BYTE PTR [ebp-0xc4],0x0
  5f947c:	83 fa 10             	cmp    edx,0x10
  5f947f:	72 28                	jb     0x5f94a9
  5f9481:	8b 4d b8             	mov    ecx,DWORD PTR [ebp-0x48]
  5f9484:	42                   	inc    edx
  5f9485:	8b c1                	mov    eax,ecx
  5f9487:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f948d:	72 10                	jb     0x5f949f
  5f948f:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f9492:	83 c2 23             	add    edx,0x23
  5f9495:	2b c1                	sub    eax,ecx
  5f9497:	83 c0 fc             	add    eax,0xfffffffc
  5f949a:	83 f8 1f             	cmp    eax,0x1f
  5f949d:	77 42                	ja     0x5f94e1
  5f949f:	52                   	push   edx
  5f94a0:	51                   	push   ecx
  5f94a1:	e8 f4 8b e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f94a6:	83 c4 08             	add    esp,0x8
  5f94a9:	8b 55 9c             	mov    edx,DWORD PTR [ebp-0x64]
  5f94ac:	c7 45 c8 00 00 00 00 	mov    DWORD PTR [ebp-0x38],0x0
  5f94b3:	c7 45 cc 0f 00 00 00 	mov    DWORD PTR [ebp-0x34],0xf
  5f94ba:	c6 45 b8 00          	mov    BYTE PTR [ebp-0x48],0x0
  5f94be:	83 fa 10             	cmp    edx,0x10
  5f94c1:	72 2e                	jb     0x5f94f1
  5f94c3:	8b 4d 88             	mov    ecx,DWORD PTR [ebp-0x78]
  5f94c6:	42                   	inc    edx
  5f94c7:	8b c1                	mov    eax,ecx
  5f94c9:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f94cf:	72 16                	jb     0x5f94e7
  5f94d1:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f94d4:	83 c2 23             	add    edx,0x23
  5f94d7:	2b c1                	sub    eax,ecx
  5f94d9:	83 c0 fc             	add    eax,0xfffffffc
  5f94dc:	83 f8 1f             	cmp    eax,0x1f
  5f94df:	76 06                	jbe    0x5f94e7
  5f94e1:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5f94e7:	52                   	push   edx
  5f94e8:	51                   	push   ecx
  5f94e9:	e8 ac 8b e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f94ee:	83 c4 08             	add    esp,0x8
  5f94f1:	8a 85 0c ff ff ff    	mov    al,BYTE PTR [ebp-0xf4]
  5f94f7:	8b 35 30 e4 79 00    	mov    esi,DWORD PTR ds:0x79e430
  5f94fd:	c7 45 98 00 00 00 00 	mov    DWORD PTR [ebp-0x68],0x0
  5f9504:	c7 45 9c 0f 00 00 00 	mov    DWORD PTR [ebp-0x64],0xf
  5f950b:	c6 45 88 00          	mov    BYTE PTR [ebp-0x78],0x0
  5f950f:	3c 01                	cmp    al,0x1
  5f9511:	75 23                	jne    0x5f9536
  5f9513:	83 bd 14 ff ff ff 00 	cmp    DWORD PTR [ebp-0xec],0x0
  5f951a:	75 62                	jne    0x5f957e
  5f951c:	68 14 3d 00 00       	push   0x3d14
  5f9521:	68 88 1e 6c 00       	push   0x6c1e88
  5f9526:	68 50 50 6c 00       	push   0x6c5050
  5f952b:	ff d6                	call   esi
  5f952d:	8a 85 0c ff ff ff    	mov    al,BYTE PTR [ebp-0xf4]
  5f9533:	83 c4 0c             	add    esp,0xc
  5f9536:	3c 02                	cmp    al,0x2
  5f9538:	75 23                	jne    0x5f955d
  5f953a:	83 bd 14 ff ff ff 00 	cmp    DWORD PTR [ebp-0xec],0x0
  5f9541:	75 3b                	jne    0x5f957e
  5f9543:	68 15 3d 00 00       	push   0x3d15
  5f9548:	68 88 1e 6c 00       	push   0x6c1e88
  5f954d:	68 d8 50 6c 00       	push   0x6c50d8
  5f9552:	ff d6                	call   esi
  5f9554:	8a 85 0c ff ff ff    	mov    al,BYTE PTR [ebp-0xf4]
  5f955a:	83 c4 0c             	add    esp,0xc
  5f955d:	3c 03                	cmp    al,0x3
  5f955f:	75 1d                	jne    0x5f957e
  5f9561:	83 bd 14 ff ff ff 00 	cmp    DWORD PTR [ebp-0xec],0x0
  5f9568:	75 14                	jne    0x5f957e
  5f956a:	68 16 3d 00 00       	push   0x3d16
  5f956f:	68 88 1e 6c 00       	push   0x6c1e88
  5f9574:	68 58 51 6c 00       	push   0x6c5158
  5f9579:	ff d6                	call   esi
  5f957b:	83 c4 0c             	add    esp,0xc
  5f957e:	ff b5 0c ff ff ff    	push   DWORD PTR [ebp-0xf4]
  5f9584:	8d 8d 14 ff ff ff    	lea    ecx,[ebp-0xec]
  5f958a:	e8 bf 03 e1 ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  5f958f:	b0 01                	mov    al,0x1
  5f9591:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  5f9594:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  5f959b:	59                   	pop    ecx
  5f959c:	5f                   	pop    edi
  5f959d:	5e                   	pop    esi
  5f959e:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  5f95a1:	33 cd                	xor    ecx,ebp
  5f95a3:	e8 e7 ae e0 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5f95a8:	8b e5                	mov    esp,ebp
  5f95aa:	5d                   	pop    ebp
  5f95ab:	c2 0c 00             	ret    0xc
  5f95ae:	8d 8d 0c ff ff ff    	lea    ecx,[ebp-0xf4]
  5f95b4:	e8 c9 a2 e0 ff       	call   0x403882 ; ["call resolved=0x4a6640 "]
  5f95b9:	50                   	push   eax
  5f95ba:	8d 8d 24 ff ff ff    	lea    ecx,[ebp-0xdc]
  5f95c0:	e8 5b 91 e0 ff       	call   0x402720 ; ["call resolved=0x46a4f0 "]
  5f95c5:	50                   	push   eax
  5f95c6:	8d 45 a0             	lea    eax,[ebp-0x60]
  5f95c9:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  5f95cd:	68 a8 5a 6c 00       	push   0x6c5aa8 ; ["cannot use operator[] with a string argument with "]
  5f95d2:	50                   	push   eax
  5f95d3:	e8 4c d8 e0 ff       	call   0x406e24 ; ["call resolved=0x43ede0 "]
  5f95d8:	50                   	push   eax
  5f95d9:	8d 85 54 ff ff ff    	lea    eax,[ebp-0xac]
  5f95df:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  5f95e3:	68 31 01 00 00       	push   0x131
  5f95e8:	50                   	push   eax
  5f95e9:	e8 90 ab e0 ff       	call   0x40417e ; ["call resolved=0x487020 "]
  5f95ee:	83 c4 18             	add    esp,0x18
  5f95f1:	8d 85 54 ff ff ff    	lea    eax,[ebp-0xac]
  5f95f7:	68 10 e2 72 00       	push   0x72e210
  5f95fc:	50                   	push   eax
  5f95fd:	e8 76 f1 06 00       	call   0x668778 ; ["call resolved=0x668778 "]
  5f9602:	e8 de bc e0 ff       	call   0x4052e5 ; ["call resolved=0x47fbd0 "]
  5f9607:	e8 d9 bc e0 ff       	call   0x4052e5 ; ["call resolved=0x47fbd0 "]
