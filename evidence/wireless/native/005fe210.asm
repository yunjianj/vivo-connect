; TcpSocketBase::sendMsg; image base 0x400000; static annotation only
  5fe210:	83 ec 20             	sub    esp,0x20
  5fe213:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5fe218:	33 c4                	xor    eax,esp
  5fe21a:	89 44 24 1c          	mov    DWORD PTR [esp+0x1c],eax
  5fe21e:	53                   	push   ebx
  5fe21f:	8b 5c 24 2c          	mov    ebx,DWORD PTR [esp+0x2c]
  5fe223:	56                   	push   esi
  5fe224:	8b f1                	mov    esi,ecx
  5fe226:	b9 3e a7 7a 00       	mov    ecx,0x7aa73e
  5fe22b:	57                   	push   edi
  5fe22c:	8b 7c 24 30          	mov    edi,DWORD PTR [esp+0x30]
  5fe230:	e8 b9 a8 e0 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5fe235:	8b 46 04             	mov    eax,DWORD PTR [esi+0x4]
  5fe238:	85 c0                	test   eax,eax
  5fe23a:	0f 85 9d 00 00 00    	jne    0x5fe2dd
  5fe240:	6a 5c                	push   0x5c
  5fe242:	68 b8 4a 6f 00       	push   0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fe247:	e8 1a a5 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fe24c:	83 c4 08             	add    esp,0x8
  5fe24f:	85 c0                	test   eax,eax
  5fe251:	74 12                	je     0x5fe265
  5fe253:	6a 5c                	push   0x5c
  5fe255:	68 b8 4a 6f 00       	push   0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fe25a:	e8 07 a5 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fe25f:	83 c4 08             	add    esp,0x8
  5fe262:	40                   	inc    eax
  5fe263:	eb 05                	jmp    0x5fe26a
  5fe265:	b8 b8 4a 6f 00       	mov    eax,0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fe26a:	68 64 4c 6f 00       	push   0x6f4c64 ; ["TcpSocketBase::sendMsg"]
  5fe26f:	6a 7b                	push   0x7b
  5fe271:	50                   	push   eax
  5fe272:	68 80 4c 6f 00       	push   0x6f4c80 ; ["[ConntctionModule][%s:%d][%s]: Tcpsocket is null \n"]
  5fe277:	8d 44 24 1c          	lea    eax,[esp+0x1c]
  5fe27b:	c7 44 24 1c 02 00 00 	mov    DWORD PTR [esp+0x1c],0x2
  5fe283:	50                   	push   eax
  5fe284:	8d 44 24 24          	lea    eax,[esp+0x24]
  5fe288:	50                   	push   eax
  5fe289:	e8 7b 8d e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5fe28e:	8b 54 24 3c          	mov    edx,DWORD PTR [esp+0x3c]
  5fe292:	83 c4 18             	add    esp,0x18
  5fe295:	83 fa 10             	cmp    edx,0x10
  5fe298:	72 2d                	jb     0x5fe2c7
  5fe29a:	8b 4c 24 10          	mov    ecx,DWORD PTR [esp+0x10]
  5fe29e:	42                   	inc    edx
  5fe29f:	8b c1                	mov    eax,ecx
  5fe2a1:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5fe2a7:	72 14                	jb     0x5fe2bd
  5fe2a9:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5fe2ac:	83 c2 23             	add    edx,0x23
  5fe2af:	2b c1                	sub    eax,ecx
  5fe2b1:	83 c0 fc             	add    eax,0xfffffffc
  5fe2b4:	83 f8 1f             	cmp    eax,0x1f
  5fe2b7:	0f 87 bc 00 00 00    	ja     0x5fe379
  5fe2bd:	52                   	push   edx
  5fe2be:	51                   	push   ecx
  5fe2bf:	e8 d6 3d e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5fe2c4:	83 c4 08             	add    esp,0x8
  5fe2c7:	5f                   	pop    edi
  5fe2c8:	5e                   	pop    esi
  5fe2c9:	32 c0                	xor    al,al
  5fe2cb:	5b                   	pop    ebx
  5fe2cc:	8b 4c 24 1c          	mov    ecx,DWORD PTR [esp+0x1c]
  5fe2d0:	33 cc                	xor    ecx,esp
  5fe2d2:	e8 b8 61 e0 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5fe2d7:	83 c4 20             	add    esp,0x20
  5fe2da:	c2 08 00             	ret    0x8
  5fe2dd:	6a 00                	push   0x0
  5fe2df:	ff 33                	push   DWORD PTR [ebx]
  5fe2e1:	57                   	push   edi
  5fe2e2:	50                   	push   eax
  5fe2e3:	ff 15 d0 d8 79 00    	call   DWORD PTR ds:0x79d8d0
  5fe2e9:	85 c0                	test   eax,eax
  5fe2eb:	0f 8f 8e 00 00 00    	jg     0x5fe37f
  5fe2f1:	6a 5c                	push   0x5c
  5fe2f3:	68 b8 4a 6f 00       	push   0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fe2f8:	e8 69 a4 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fe2fd:	83 c4 08             	add    esp,0x8
  5fe300:	85 c0                	test   eax,eax
  5fe302:	74 12                	je     0x5fe316
  5fe304:	6a 5c                	push   0x5c
  5fe306:	68 b8 4a 6f 00       	push   0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fe30b:	e8 56 a4 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fe310:	83 c4 08             	add    esp,0x8
  5fe313:	40                   	inc    eax
  5fe314:	eb 05                	jmp    0x5fe31b
  5fe316:	b8 b8 4a 6f 00       	mov    eax,0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fe31b:	68 64 4c 6f 00       	push   0x6f4c64 ; ["TcpSocketBase::sendMsg"]
  5fe320:	68 82 00 00 00       	push   0x82
  5fe325:	50                   	push   eax
  5fe326:	68 c0 4c 6f 00       	push   0x6f4cc0 ; ["[ConntctionModule][%s:%d][%s]: Tcpsocket send data failed!\n"]
  5fe32b:	8d 44 24 1c          	lea    eax,[esp+0x1c]
  5fe32f:	c7 44 24 1c 02 00 00 	mov    DWORD PTR [esp+0x1c],0x2
  5fe337:	50                   	push   eax
  5fe338:	8d 44 24 24          	lea    eax,[esp+0x24]
  5fe33c:	50                   	push   eax
  5fe33d:	e8 c7 8c e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5fe342:	8b 54 24 3c          	mov    edx,DWORD PTR [esp+0x3c]
  5fe346:	83 c4 18             	add    esp,0x18
  5fe349:	83 fa 10             	cmp    edx,0x10
  5fe34c:	0f 82 75 ff ff ff    	jb     0x5fe2c7
  5fe352:	8b 4c 24 10          	mov    ecx,DWORD PTR [esp+0x10]
  5fe356:	42                   	inc    edx
  5fe357:	8b c1                	mov    eax,ecx
  5fe359:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5fe35f:	0f 82 58 ff ff ff    	jb     0x5fe2bd
  5fe365:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5fe368:	83 c2 23             	add    edx,0x23
  5fe36b:	2b c1                	sub    eax,ecx
  5fe36d:	83 c0 fc             	add    eax,0xfffffffc
  5fe370:	83 f8 1f             	cmp    eax,0x1f
  5fe373:	0f 86 44 ff ff ff    	jbe    0x5fe2bd
  5fe379:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5fe37f:	8b 4c 24 28          	mov    ecx,DWORD PTR [esp+0x28]
  5fe383:	b0 01                	mov    al,0x1
  5fe385:	5f                   	pop    edi
  5fe386:	5e                   	pop    esi
  5fe387:	5b                   	pop    ebx
  5fe388:	33 cc                	xor    ecx,esp
  5fe38a:	e8 00 61 e0 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5fe38f:	83 c4 20             	add    esp,0x20
  5fe392:	c2 08 00             	ret    0x8
