; TcpSocketBase::recvMsg; image base 0x400000; static annotation only
  5fdf70:	83 ec 2c             	sub    esp,0x2c
  5fdf73:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5fdf78:	33 c4                	xor    eax,esp
  5fdf7a:	89 44 24 28          	mov    DWORD PTR [esp+0x28],eax
  5fdf7e:	8b 44 24 38          	mov    eax,DWORD PTR [esp+0x38]
  5fdf82:	53                   	push   ebx
  5fdf83:	8b 5c 24 38          	mov    ebx,DWORD PTR [esp+0x38]
  5fdf87:	56                   	push   esi
  5fdf88:	8b 74 24 44          	mov    esi,DWORD PTR [esp+0x44]
  5fdf8c:	89 4c 24 08          	mov    DWORD PTR [esp+0x8],ecx
  5fdf90:	b9 3e a7 7a 00       	mov    ecx,0x7aa73e
  5fdf95:	57                   	push   edi
  5fdf96:	8b 7c 24 3c          	mov    edi,DWORD PTR [esp+0x3c]
  5fdf9a:	89 44 24 18          	mov    DWORD PTR [esp+0x18],eax
  5fdf9e:	e8 4b ab e0 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5fdfa3:	8b 4c 24 0c          	mov    ecx,DWORD PTR [esp+0xc]
  5fdfa7:	8b 49 04             	mov    ecx,DWORD PTR [ecx+0x4]
  5fdfaa:	85 c9                	test   ecx,ecx
  5fdfac:	0f 85 a0 00 00 00    	jne    0x5fe052
  5fdfb2:	6a 5c                	push   0x5c
  5fdfb4:	68 b8 4a 6f 00       	push   0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fdfb9:	e8 a8 a7 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fdfbe:	83 c4 08             	add    esp,0x8
  5fdfc1:	85 c0                	test   eax,eax
  5fdfc3:	74 12                	je     0x5fdfd7
  5fdfc5:	6a 5c                	push   0x5c
  5fdfc7:	68 b8 4a 6f 00       	push   0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fdfcc:	e8 95 a7 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fdfd1:	83 c4 08             	add    esp,0x8
  5fdfd4:	40                   	inc    eax
  5fdfd5:	eb 05                	jmp    0x5fdfdc
  5fdfd7:	b8 b8 4a 6f 00       	mov    eax,0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fdfdc:	68 08 4d 6f 00       	push   0x6f4d08 ; ["TcpSocketBase::recvMsg"]
  5fdfe1:	68 8c 00 00 00       	push   0x8c
  5fdfe6:	50                   	push   eax
  5fdfe7:	68 80 4c 6f 00       	push   0x6f4c80 ; ["[ConntctionModule][%s:%d][%s]: Tcpsocket is null \n"]
  5fdfec:	8d 44 24 1c          	lea    eax,[esp+0x1c]
  5fdff0:	c7 44 24 1c 02 00 00 	mov    DWORD PTR [esp+0x1c],0x2
  5fdff8:	50                   	push   eax
  5fdff9:	8d 44 24 30          	lea    eax,[esp+0x30]
  5fdffd:	50                   	push   eax
  5fdffe:	e8 06 90 e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5fe003:	8b 54 24 48          	mov    edx,DWORD PTR [esp+0x48]
  5fe007:	83 c4 18             	add    esp,0x18
  5fe00a:	83 fa 10             	cmp    edx,0x10
  5fe00d:	72 2d                	jb     0x5fe03c
  5fe00f:	8b 4c 24 1c          	mov    ecx,DWORD PTR [esp+0x1c]
  5fe013:	42                   	inc    edx
  5fe014:	8b c1                	mov    eax,ecx
  5fe016:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5fe01c:	72 14                	jb     0x5fe032
  5fe01e:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5fe021:	83 c2 23             	add    edx,0x23
  5fe024:	2b c1                	sub    eax,ecx
  5fe026:	83 c0 fc             	add    eax,0xfffffffc
  5fe029:	83 f8 1f             	cmp    eax,0x1f
  5fe02c:	0f 87 d4 00 00 00    	ja     0x5fe106
  5fe032:	52                   	push   edx
  5fe033:	51                   	push   ecx
  5fe034:	e8 61 40 e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5fe039:	83 c4 08             	add    esp,0x8
  5fe03c:	5f                   	pop    edi
  5fe03d:	5e                   	pop    esi
  5fe03e:	32 c0                	xor    al,al
  5fe040:	5b                   	pop    ebx
  5fe041:	8b 4c 24 28          	mov    ecx,DWORD PTR [esp+0x28]
  5fe045:	33 cc                	xor    ecx,esp
  5fe047:	e8 43 64 e0 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5fe04c:	83 c4 2c             	add    esp,0x2c
  5fe04f:	c2 10 00             	ret    0x10
  5fe052:	69 07 e8 03 00 00    	imul   eax,DWORD PTR [edi],0x3e8
  5fe058:	6a 04                	push   0x4
  5fe05a:	89 44 24 14          	mov    DWORD PTR [esp+0x14],eax
  5fe05e:	8d 44 24 14          	lea    eax,[esp+0x14]
  5fe062:	50                   	push   eax
  5fe063:	68 06 10 00 00       	push   0x1006
  5fe068:	68 ff ff 00 00       	push   0xffff
  5fe06d:	51                   	push   ecx
  5fe06e:	ff 15 c8 d8 79 00    	call   DWORD PTR ds:0x79d8c8
  5fe074:	8b 3d a4 d8 79 00    	mov    edi,DWORD PTR ds:0x79d8a4
  5fe07a:	83 f8 ff             	cmp    eax,0xffffffff
  5fe07d:	0f 85 93 00 00 00    	jne    0x5fe116
  5fe083:	55                   	push   ebp
  5fe084:	ff d7                	call   edi
  5fe086:	6a 5c                	push   0x5c
  5fe088:	68 b8 4a 6f 00       	push   0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fe08d:	8b e8                	mov    ebp,eax
  5fe08f:	e8 d2 a6 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fe094:	83 c4 08             	add    esp,0x8
  5fe097:	85 c0                	test   eax,eax
  5fe099:	74 12                	je     0x5fe0ad
  5fe09b:	6a 5c                	push   0x5c
  5fe09d:	68 b8 4a 6f 00       	push   0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fe0a2:	e8 bf a6 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fe0a7:	83 c4 08             	add    esp,0x8
  5fe0aa:	40                   	inc    eax
  5fe0ab:	eb 05                	jmp    0x5fe0b2
  5fe0ad:	b8 b8 4a 6f 00       	mov    eax,0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fe0b2:	55                   	push   ebp
  5fe0b3:	68 08 4d 6f 00       	push   0x6f4d08 ; ["TcpSocketBase::recvMsg"]
  5fe0b8:	68 95 00 00 00       	push   0x95
  5fe0bd:	50                   	push   eax
  5fe0be:	68 78 f1 6c 00       	push   0x6cf178 ; ["[ConntctionModule][%s:%d][%s]: setsockopt for SO_RCVTIMEO failed with error: %u\n"]
  5fe0c3:	8d 44 24 2c          	lea    eax,[esp+0x2c]
  5fe0c7:	c7 44 24 2c 02 00 00 	mov    DWORD PTR [esp+0x2c],0x2
  5fe0cf:	50                   	push   eax
  5fe0d0:	8d 44 24 38          	lea    eax,[esp+0x38]
  5fe0d4:	50                   	push   eax
  5fe0d5:	e8 2f 8f e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5fe0da:	8b 54 24 50          	mov    edx,DWORD PTR [esp+0x50]
  5fe0de:	83 c4 1c             	add    esp,0x1c
  5fe0e1:	5d                   	pop    ebp
  5fe0e2:	83 fa 10             	cmp    edx,0x10
  5fe0e5:	72 2f                	jb     0x5fe116
  5fe0e7:	8b 4c 24 1c          	mov    ecx,DWORD PTR [esp+0x1c]
  5fe0eb:	42                   	inc    edx
  5fe0ec:	8b c1                	mov    eax,ecx
  5fe0ee:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5fe0f4:	72 16                	jb     0x5fe10c
  5fe0f6:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5fe0f9:	83 c2 23             	add    edx,0x23
  5fe0fc:	2b c1                	sub    eax,ecx
  5fe0fe:	83 c0 fc             	add    eax,0xfffffffc
  5fe101:	83 f8 1f             	cmp    eax,0x1f
  5fe104:	76 06                	jbe    0x5fe10c
  5fe106:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5fe10c:	52                   	push   edx
  5fe10d:	51                   	push   ecx
  5fe10e:	e8 87 3f e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5fe113:	83 c4 08             	add    esp,0x8
  5fe116:	8b 44 24 18          	mov    eax,DWORD PTR [esp+0x18]
  5fe11a:	6a 00                	push   0x0
  5fe11c:	ff 30                	push   DWORD PTR [eax]
  5fe11e:	8b 44 24 14          	mov    eax,DWORD PTR [esp+0x14]
  5fe122:	53                   	push   ebx
  5fe123:	ff 70 04             	push   DWORD PTR [eax+0x4]
  5fe126:	ff 15 d4 d8 79 00    	call   DWORD PTR ds:0x79d8d4
  5fe12c:	83 f8 ff             	cmp    eax,0xffffffff
  5fe12f:	75 1a                	jne    0x5fe14b
  5fe131:	ff d7                	call   edi
  5fe133:	5f                   	pop    edi
  5fe134:	89 06                	mov    DWORD PTR [esi],eax
  5fe136:	32 c0                	xor    al,al
  5fe138:	5e                   	pop    esi
  5fe139:	5b                   	pop    ebx
  5fe13a:	8b 4c 24 28          	mov    ecx,DWORD PTR [esp+0x28]
  5fe13e:	33 cc                	xor    ecx,esp
  5fe140:	e8 4a 63 e0 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5fe145:	83 c4 2c             	add    esp,0x2c
  5fe148:	c2 10 00             	ret    0x10
  5fe14b:	85 c0                	test   eax,eax
  5fe14d:	75 18                	jne    0x5fe167
  5fe14f:	5f                   	pop    edi
  5fe150:	89 06                	mov    DWORD PTR [esi],eax
  5fe152:	32 c0                	xor    al,al
  5fe154:	5e                   	pop    esi
  5fe155:	5b                   	pop    ebx
  5fe156:	8b 4c 24 28          	mov    ecx,DWORD PTR [esp+0x28]
  5fe15a:	33 cc                	xor    ecx,esp
  5fe15c:	e8 2e 63 e0 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5fe161:	83 c4 2c             	add    esp,0x2c
  5fe164:	c2 10 00             	ret    0x10
  5fe167:	8b 4c 24 34          	mov    ecx,DWORD PTR [esp+0x34]
  5fe16b:	c6 04 03 00          	mov    BYTE PTR [ebx+eax*1],0x0
  5fe16f:	5f                   	pop    edi
  5fe170:	89 06                	mov    DWORD PTR [esi],eax
  5fe172:	b0 01                	mov    al,0x1
  5fe174:	5e                   	pop    esi
  5fe175:	5b                   	pop    ebx
  5fe176:	33 cc                	xor    ecx,esp
  5fe178:	e8 12 63 e0 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5fe17d:	83 c4 2c             	add    esp,0x2c
  5fe180:	c2 10 00             	ret    0x10
