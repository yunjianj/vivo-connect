; BluetoothClassicBase::recvMsg; image base 0x400000; static annotation only
  5fd360:	81 ec 2c 04 00 00    	sub    esp,0x42c
  5fd366:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5fd36b:	33 c4                	xor    eax,esp
  5fd36d:	89 84 24 28 04 00 00 	mov    DWORD PTR [esp+0x428],eax
  5fd374:	8b 84 24 30 04 00 00 	mov    eax,DWORD PTR [esp+0x430]
  5fd37b:	53                   	push   ebx
  5fd37c:	8b 9c 24 38 04 00 00 	mov    ebx,DWORD PTR [esp+0x438]
  5fd383:	55                   	push   ebp
  5fd384:	56                   	push   esi
  5fd385:	8b f1                	mov    esi,ecx
  5fd387:	89 44 24 14          	mov    DWORD PTR [esp+0x14],eax
  5fd38b:	8b 84 24 44 04 00 00 	mov    eax,DWORD PTR [esp+0x444]
  5fd392:	b9 d0 a6 7a 00       	mov    ecx,0x7aa6d0
  5fd397:	57                   	push   edi
  5fd398:	89 44 24 10          	mov    DWORD PTR [esp+0x10],eax
  5fd39c:	e8 4d b7 e0 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5fd3a1:	8b 84 24 4c 04 00 00 	mov    eax,DWORD PTR [esp+0x44c]
  5fd3a8:	8b 2d d4 d8 79 00    	mov    ebp,DWORD PTR ds:0x79d8d4
  5fd3ae:	83 38 01             	cmp    DWORD PTR [eax],0x1
  5fd3b1:	75 4b                	jne    0x5fd3fe
  5fd3b3:	8b 3d c4 d8 79 00    	mov    edi,DWORD PTR ds:0x79d8c4
  5fd3b9:	8d 44 24 14          	lea    eax,[esp+0x14]
  5fd3bd:	50                   	push   eax
  5fd3be:	68 7f 66 04 40       	push   0x4004667f
  5fd3c3:	ff 76 04             	push   DWORD PTR [esi+0x4]
  5fd3c6:	ff d7                	call   edi
  5fd3c8:	8b 4c 24 14          	mov    ecx,DWORD PTR [esp+0x14]
  5fd3cc:	85 c9                	test   ecx,ecx
  5fd3ce:	74 2e                	je     0x5fd3fe
  5fd3d0:	b8 00 04 00 00       	mov    eax,0x400
  5fd3d5:	3b c8                	cmp    ecx,eax
  5fd3d7:	6a 00                	push   0x0
  5fd3d9:	0f 42 c1             	cmovb  eax,ecx
  5fd3dc:	50                   	push   eax
  5fd3dd:	8d 44 24 40          	lea    eax,[esp+0x40]
  5fd3e1:	50                   	push   eax
  5fd3e2:	ff 76 04             	push   DWORD PTR [esi+0x4]
  5fd3e5:	ff d5                	call   ebp
  5fd3e7:	8d 44 24 14          	lea    eax,[esp+0x14]
  5fd3eb:	50                   	push   eax
  5fd3ec:	68 7f 66 04 40       	push   0x4004667f
  5fd3f1:	ff 76 04             	push   DWORD PTR [esi+0x4]
  5fd3f4:	ff d7                	call   edi
  5fd3f6:	8b 4c 24 14          	mov    ecx,DWORD PTR [esp+0x14]
  5fd3fa:	85 c9                	test   ecx,ecx
  5fd3fc:	75 d2                	jne    0x5fd3d0
  5fd3fe:	8b 44 24 18          	mov    eax,DWORD PTR [esp+0x18]
  5fd402:	6a 04                	push   0x4
  5fd404:	69 00 e8 03 00 00    	imul   eax,DWORD PTR [eax],0x3e8
  5fd40a:	89 44 24 20          	mov    DWORD PTR [esp+0x20],eax
  5fd40e:	8d 44 24 20          	lea    eax,[esp+0x20]
  5fd412:	50                   	push   eax
  5fd413:	68 06 10 00 00       	push   0x1006
  5fd418:	68 ff ff 00 00       	push   0xffff
  5fd41d:	ff 76 04             	push   DWORD PTR [esi+0x4]
  5fd420:	ff 15 c8 d8 79 00    	call   DWORD PTR ds:0x79d8c8
  5fd426:	83 f8 ff             	cmp    eax,0xffffffff
  5fd429:	0f 85 93 00 00 00    	jne    0x5fd4c2
  5fd42f:	ff 15 a4 d8 79 00    	call   DWORD PTR ds:0x79d8a4
  5fd435:	6a 5c                	push   0x5c
  5fd437:	68 60 48 6f 00       	push   0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fd43c:	8b f8                	mov    edi,eax
  5fd43e:	e8 23 b3 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fd443:	83 c4 08             	add    esp,0x8
  5fd446:	85 c0                	test   eax,eax
  5fd448:	74 12                	je     0x5fd45c
  5fd44a:	6a 5c                	push   0x5c
  5fd44c:	68 60 48 6f 00       	push   0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fd451:	e8 10 b3 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fd456:	83 c4 08             	add    esp,0x8
  5fd459:	40                   	inc    eax
  5fd45a:	eb 05                	jmp    0x5fd461
  5fd45c:	b8 60 48 6f 00       	mov    eax,0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fd461:	57                   	push   edi
  5fd462:	68 cc 49 6f 00       	push   0x6f49cc ; ["BluetoothClassicBase::recvMsg"]
  5fd467:	68 9a 00 00 00       	push   0x9a
  5fd46c:	50                   	push   eax
  5fd46d:	68 78 f1 6c 00       	push   0x6cf178 ; ["[ConntctionModule][%s:%d][%s]: setsockopt for SO_RCVTIMEO failed with error: %u\n"]
  5fd472:	8d 44 24 2c          	lea    eax,[esp+0x2c]
  5fd476:	c7 44 24 2c 02 00 00 	mov    DWORD PTR [esp+0x2c],0x2
  5fd47e:	50                   	push   eax
  5fd47f:	8d 44 24 38          	lea    eax,[esp+0x38]
  5fd483:	50                   	push   eax
  5fd484:	e8 80 9b e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5fd489:	8b 54 24 50          	mov    edx,DWORD PTR [esp+0x50]
  5fd48d:	83 c4 1c             	add    esp,0x1c
  5fd490:	83 fa 10             	cmp    edx,0x10
  5fd493:	72 2d                	jb     0x5fd4c2
  5fd495:	8b 4c 24 20          	mov    ecx,DWORD PTR [esp+0x20]
  5fd499:	42                   	inc    edx
  5fd49a:	8b c1                	mov    eax,ecx
  5fd49c:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5fd4a2:	72 14                	jb     0x5fd4b8
  5fd4a4:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5fd4a7:	83 c2 23             	add    edx,0x23
  5fd4aa:	2b c1                	sub    eax,ecx
  5fd4ac:	83 c0 fc             	add    eax,0xfffffffc
  5fd4af:	83 f8 1f             	cmp    eax,0x1f
  5fd4b2:	0f 87 3b 01 00 00    	ja     0x5fd5f3
  5fd4b8:	52                   	push   edx
  5fd4b9:	51                   	push   ecx
  5fd4ba:	e8 db 4b e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5fd4bf:	83 c4 08             	add    esp,0x8
  5fd4c2:	8b 44 24 10          	mov    eax,DWORD PTR [esp+0x10]
  5fd4c6:	6a 00                	push   0x0
  5fd4c8:	ff 30                	push   DWORD PTR [eax]
  5fd4ca:	53                   	push   ebx
  5fd4cb:	ff 76 04             	push   DWORD PTR [esi+0x4]
  5fd4ce:	ff d5                	call   ebp
  5fd4d0:	83 f8 ff             	cmp    eax,0xffffffff
  5fd4d3:	0f 84 9e 00 00 00    	je     0x5fd577
  5fd4d9:	85 c0                	test   eax,eax
  5fd4db:	0f 84 96 00 00 00    	je     0x5fd577
  5fd4e1:	6a 5c                	push   0x5c
  5fd4e3:	68 60 48 6f 00       	push   0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fd4e8:	c6 04 03 00          	mov    BYTE PTR [ebx+eax*1],0x0
  5fd4ec:	e8 75 b2 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fd4f1:	83 c4 08             	add    esp,0x8
  5fd4f4:	85 c0                	test   eax,eax
  5fd4f6:	74 12                	je     0x5fd50a
  5fd4f8:	6a 5c                	push   0x5c
  5fd4fa:	68 60 48 6f 00       	push   0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fd4ff:	e8 62 b2 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fd504:	83 c4 08             	add    esp,0x8
  5fd507:	40                   	inc    eax
  5fd508:	eb 05                	jmp    0x5fd50f
  5fd50a:	b8 60 48 6f 00       	mov    eax,0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fd50f:	53                   	push   ebx
  5fd510:	68 cc 49 6f 00       	push   0x6f49cc ; ["BluetoothClassicBase::recvMsg"]
  5fd515:	68 a8 00 00 00       	push   0xa8
  5fd51a:	50                   	push   eax
  5fd51b:	68 38 f2 6c 00       	push   0x6cf238 ; ["[ConntctionModule][%s:%d][%s]: Received data: %s\n"]
  5fd520:	8d 44 24 24          	lea    eax,[esp+0x24]
  5fd524:	c7 44 24 24 02 00 00 	mov    DWORD PTR [esp+0x24],0x2
  5fd52c:	50                   	push   eax
  5fd52d:	8d 44 24 38          	lea    eax,[esp+0x38]
  5fd531:	50                   	push   eax
  5fd532:	e8 d2 9a e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5fd537:	8b 54 24 50          	mov    edx,DWORD PTR [esp+0x50]
  5fd53b:	83 c4 1c             	add    esp,0x1c
  5fd53e:	83 fa 10             	cmp    edx,0x10
  5fd541:	72 2d                	jb     0x5fd570
  5fd543:	8b 4c 24 20          	mov    ecx,DWORD PTR [esp+0x20]
  5fd547:	42                   	inc    edx
  5fd548:	8b c1                	mov    eax,ecx
  5fd54a:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5fd550:	72 14                	jb     0x5fd566
  5fd552:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5fd555:	83 c2 23             	add    edx,0x23
  5fd558:	2b c1                	sub    eax,ecx
  5fd55a:	83 c0 fc             	add    eax,0xfffffffc
  5fd55d:	83 f8 1f             	cmp    eax,0x1f
  5fd560:	0f 87 8d 00 00 00    	ja     0x5fd5f3
  5fd566:	52                   	push   edx
  5fd567:	51                   	push   ecx
  5fd568:	e8 2d 4b e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5fd56d:	83 c4 08             	add    esp,0x8
  5fd570:	b0 01                	mov    al,0x1
  5fd572:	e9 8e 00 00 00       	jmp    0x5fd605
  5fd577:	6a 5c                	push   0x5c
  5fd579:	68 60 48 6f 00       	push   0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fd57e:	e8 e3 b1 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fd583:	83 c4 08             	add    esp,0x8
  5fd586:	85 c0                	test   eax,eax
  5fd588:	74 12                	je     0x5fd59c
  5fd58a:	6a 5c                	push   0x5c
  5fd58c:	68 60 48 6f 00       	push   0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fd591:	e8 d0 b1 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fd596:	83 c4 08             	add    esp,0x8
  5fd599:	40                   	inc    eax
  5fd59a:	eb 05                	jmp    0x5fd5a1
  5fd59c:	b8 60 48 6f 00       	mov    eax,0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fd5a1:	68 cc 49 6f 00       	push   0x6f49cc ; ["BluetoothClassicBase::recvMsg"]
  5fd5a6:	68 a1 00 00 00       	push   0xa1
  5fd5ab:	50                   	push   eax
  5fd5ac:	68 e0 f1 6c 00       	push   0x6cf1e0 ; ["[ConntctionModule][%s:%d][%s]: Error: timeout or failed to receive data.\n"]
  5fd5b1:	8d 44 24 20          	lea    eax,[esp+0x20]
  5fd5b5:	c7 44 24 20 02 00 00 	mov    DWORD PTR [esp+0x20],0x2
  5fd5bd:	50                   	push   eax
  5fd5be:	8d 44 24 34          	lea    eax,[esp+0x34]
  5fd5c2:	50                   	push   eax
  5fd5c3:	e8 41 9a e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5fd5c8:	8b 54 24 4c          	mov    edx,DWORD PTR [esp+0x4c]
  5fd5cc:	83 c4 18             	add    esp,0x18
  5fd5cf:	83 fa 10             	cmp    edx,0x10
  5fd5d2:	72 2f                	jb     0x5fd603
  5fd5d4:	8b 4c 24 20          	mov    ecx,DWORD PTR [esp+0x20]
  5fd5d8:	42                   	inc    edx
  5fd5d9:	8b c1                	mov    eax,ecx
  5fd5db:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5fd5e1:	72 16                	jb     0x5fd5f9
  5fd5e3:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5fd5e6:	83 c2 23             	add    edx,0x23
  5fd5e9:	2b c1                	sub    eax,ecx
  5fd5eb:	83 c0 fc             	add    eax,0xfffffffc
  5fd5ee:	83 f8 1f             	cmp    eax,0x1f
  5fd5f1:	76 06                	jbe    0x5fd5f9
  5fd5f3:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5fd5f9:	52                   	push   edx
  5fd5fa:	51                   	push   ecx
  5fd5fb:	e8 9a 4a e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5fd600:	83 c4 08             	add    esp,0x8
  5fd603:	32 c0                	xor    al,al
  5fd605:	8b 8c 24 38 04 00 00 	mov    ecx,DWORD PTR [esp+0x438]
  5fd60c:	5f                   	pop    edi
  5fd60d:	5e                   	pop    esi
  5fd60e:	5d                   	pop    ebp
  5fd60f:	5b                   	pop    ebx
  5fd610:	33 cc                	xor    ecx,esp
  5fd612:	e8 78 6e e0 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5fd617:	81 c4 2c 04 00 00    	add    esp,0x42c
  5fd61d:	c2 10 00             	ret    0x10
