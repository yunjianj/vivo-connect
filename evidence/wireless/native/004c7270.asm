; DataBuilderV1::buildData; image base 0x400000; static annotation only
  4c7270:	55                   	push   ebp
  4c7271:	8b ec                	mov    ebp,esp
  4c7273:	6a ff                	push   0xffffffff
  4c7275:	68 b1 92 67 00       	push   0x6792b1
  4c727a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  4c7280:	50                   	push   eax
  4c7281:	81 ec 18 01 00 00    	sub    esp,0x118
  4c7287:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  4c728c:	33 c5                	xor    eax,ebp
  4c728e:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  4c7291:	56                   	push   esi
  4c7292:	57                   	push   edi
  4c7293:	50                   	push   eax
  4c7294:	8d 45 f4             	lea    eax,[ebp-0xc]
  4c7297:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  4c729d:	89 8d f8 fe ff ff    	mov    DWORD PTR [ebp-0x108],ecx
  4c72a3:	8b 7d 08             	mov    edi,DWORD PTR [ebp+0x8]
  4c72a6:	b9 0e 84 7a 00       	mov    ecx,0x7a840e
  4c72ab:	89 bd dc fe ff ff    	mov    DWORD PTR [ebp-0x124],edi
  4c72b1:	89 bd 0c ff ff ff    	mov    DWORD PTR [ebp-0xf4],edi
  4c72b7:	e8 32 18 f4 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  4c72bc:	8d 85 eb fe ff ff    	lea    eax,[ebp-0x115]
  4c72c2:	b9 d0 35 79 00       	mov    ecx,0x7935d0
  4c72c7:	50                   	push   eax
  4c72c8:	8d 85 e4 fe ff ff    	lea    eax,[ebp-0x11c]
  4c72ce:	50                   	push   eax
  4c72cf:	e8 d2 19 f4 ff       	call   0x408ca6 ; ["call resolved=0x4c6760 "]
  4c72d4:	8b b5 e4 fe ff ff    	mov    esi,DWORD PTR [ebp-0x11c]
  4c72da:	8d 8d 00 ff ff ff    	lea    ecx,[ebp-0x100]
  4c72e0:	c7 85 00 ff ff ff 00 	mov    DWORD PTR [ebp-0x100],0x0
  4c72ea:	51                   	push   ecx
  4c72eb:	56                   	push   esi
  4c72ec:	8b 06                	mov    eax,DWORD PTR [esi]
  4c72ee:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  4c72f5:	ff 50 7c             	call   DWORD PTR [eax+0x7c]
  4c72f8:	85 c0                	test   eax,eax
  4c72fa:	0f 88 4e 08 00 00    	js     0x4c7b4e
  4c7300:	8b 85 00 ff ff ff    	mov    eax,DWORD PTR [ebp-0x100]
  4c7306:	89 85 e0 fe ff ff    	mov    DWORD PTR [ebp-0x120],eax
  4c730c:	c7 85 ec fe ff ff 00 	mov    DWORD PTR [ebp-0x114],0x0
  4c7316:	c7 85 f0 fe ff ff 00 	mov    DWORD PTR [ebp-0x110],0x0
  4c7320:	c7 85 f4 fe ff ff 00 	mov    DWORD PTR [ebp-0x10c],0x0
  4c732a:	8d 85 ec fe ff ff    	lea    eax,[ebp-0x114]
  4c7330:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  4c7334:	50                   	push   eax
  4c7335:	e8 5b c1 f3 ff       	call   0x403495 ; ["call resolved=0x493460 vivo::Utils::getRfcommAddress"]
  4c733a:	83 c4 04             	add    esp,0x4
  4c733d:	84 c0                	test   al,al
  4c733f:	75 5f                	jne    0x4c73a0
  4c7341:	8b 8d ec fe ff ff    	mov    ecx,DWORD PTR [ebp-0x114]
  4c7347:	c7 07 00 00 00 00    	mov    DWORD PTR [edi],0x0
  4c734d:	85 c9                	test   ecx,ecx
  4c734f:	74 30                	je     0x4c7381
  4c7351:	8b 95 f4 fe ff ff    	mov    edx,DWORD PTR [ebp-0x10c]
  4c7357:	8b c1                	mov    eax,ecx
  4c7359:	2b d1                	sub    edx,ecx
  4c735b:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4c7361:	72 14                	jb     0x4c7377
  4c7363:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4c7366:	83 c2 23             	add    edx,0x23
  4c7369:	2b c1                	sub    eax,ecx
  4c736b:	83 c0 fc             	add    eax,0xfffffffc
  4c736e:	83 f8 1f             	cmp    eax,0x1f
  4c7371:	0f 87 94 07 00 00    	ja     0x4c7b0b
  4c7377:	52                   	push   edx
  4c7378:	51                   	push   ecx
  4c7379:	e8 1c ad f3 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4c737e:	83 c4 08             	add    esp,0x8
  4c7381:	83 bd 00 ff ff ff 00 	cmp    DWORD PTR [ebp-0x100],0x0
  4c7388:	74 0b                	je     0x4c7395
  4c738a:	8d 8d e0 fe ff ff    	lea    ecx,[ebp-0x120]
  4c7390:	e8 65 e3 f3 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4c7395:	8d 8d e4 fe ff ff    	lea    ecx,[ebp-0x11c]
  4c739b:	e9 8a 07 00 00       	jmp    0x4c7b2a
  4c73a0:	8b bd f0 fe ff ff    	mov    edi,DWORD PTR [ebp-0x110]
  4c73a6:	2b bd ec fe ff ff    	sub    edi,DWORD PTR [ebp-0x114]
  4c73ac:	57                   	push   edi
  4c73ad:	e8 bf d0 f3 ff       	call   0x404471 ; ["call resolved=0x6665cf "]
  4c73b2:	83 c4 04             	add    esp,0x4
  4c73b5:	89 85 08 ff ff ff    	mov    DWORD PTR [ebp-0xf8],eax
  4c73bb:	33 d2                	xor    edx,edx
  4c73bd:	85 ff                	test   edi,edi
  4c73bf:	74 29                	je     0x4c73ea
  4c73c1:	8b b5 ec fe ff ff    	mov    esi,DWORD PTR [ebp-0x114]
  4c73c7:	8b c8                	mov    ecx,eax
  4c73c9:	2b f0                	sub    esi,eax
  4c73cb:	0f 1f 44 00 00       	nop    DWORD PTR [eax+eax*1+0x0]
  4c73d0:	8a 04 0e             	mov    al,BYTE PTR [esi+ecx*1]
  4c73d3:	8d 49 01             	lea    ecx,[ecx+0x1]
  4c73d6:	42                   	inc    edx
  4c73d7:	88 41 ff             	mov    BYTE PTR [ecx-0x1],al
  4c73da:	3b d7                	cmp    edx,edi
  4c73dc:	72 f2                	jb     0x4c73d0
  4c73de:	8b b5 e4 fe ff ff    	mov    esi,DWORD PTR [ebp-0x11c]
  4c73e4:	8b 85 08 ff ff ff    	mov    eax,DWORD PTR [ebp-0xf8]
  4c73ea:	57                   	push   edi
  4c73eb:	50                   	push   eax
  4c73ec:	8d 85 24 ff ff ff    	lea    eax,[ebp-0xdc]
  4c73f2:	50                   	push   eax
  4c73f3:	e8 da a6 f3 ff       	call   0x401ad2 ; ["call resolved=0x4a66d0 "]
  4c73f8:	8b bd f8 fe ff ff    	mov    edi,DWORD PTR [ebp-0x108]
  4c73fe:	8d 85 24 ff ff ff    	lea    eax,[ebp-0xdc]
  4c7404:	83 c7 04             	add    edi,0x4
  4c7407:	83 c4 0c             	add    esp,0xc
  4c740a:	3b f8                	cmp    edi,eax
  4c740c:	74 20                	je     0x4c742e
  4c740e:	8b cf                	mov    ecx,edi
  4c7410:	e8 ee c5 f3 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  4c7415:	0f 10 85 24 ff ff ff 	movups xmm0,XMMWORD PTR [ebp-0xdc]
  4c741c:	0f 11 07             	movups XMMWORD PTR [edi],xmm0
  4c741f:	f3 0f 7e 85 34 ff ff 	movq   xmm0,QWORD PTR [ebp-0xcc]
  4c7427:	66 0f d6 47 10       	movq   QWORD PTR [edi+0x10],xmm0
  4c742c:	eb 3c                	jmp    0x4c746a
  4c742e:	8b 95 38 ff ff ff    	mov    edx,DWORD PTR [ebp-0xc8]
  4c7434:	83 fa 10             	cmp    edx,0x10
  4c7437:	72 31                	jb     0x4c746a
  4c7439:	8b 8d 24 ff ff ff    	mov    ecx,DWORD PTR [ebp-0xdc]
  4c743f:	42                   	inc    edx
  4c7440:	8b c1                	mov    eax,ecx
  4c7442:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4c7448:	72 16                	jb     0x4c7460
  4c744a:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4c744d:	83 c2 23             	add    edx,0x23
  4c7450:	2b c1                	sub    eax,ecx
  4c7452:	83 c0 fc             	add    eax,0xfffffffc
  4c7455:	83 f8 1f             	cmp    eax,0x1f
  4c7458:	76 06                	jbe    0x4c7460
  4c745a:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  4c7460:	52                   	push   edx
  4c7461:	51                   	push   ecx
  4c7462:	e8 33 ac f3 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4c7467:	83 c4 08             	add    esp,0x8
  4c746a:	ff b5 08 ff ff ff    	push   DWORD PTR [ebp-0xf8]
  4c7470:	e8 e7 f3 f3 ff       	call   0x40685c ; ["call resolved=0x6687d2 "]
  4c7475:	8b 06                	mov    eax,DWORD PTR [esi]
  4c7477:	83 c4 04             	add    esp,0x4
  4c747a:	6a 20                	push   0x20
  4c747c:	56                   	push   esi
  4c747d:	ff 50 2c             	call   DWORD PTR [eax+0x2c]
  4c7480:	85 c0                	test   eax,eax
  4c7482:	0f 88 cc 06 00 00    	js     0x4c7b54
  4c7488:	8b 3d b4 e0 79 00    	mov    edi,DWORD PTR ds:0x79e0b4
  4c748e:	8d 85 18 ff ff ff    	lea    eax,[ebp-0xe8]
  4c7494:	50                   	push   eax
  4c7495:	ff d7                	call   edi
  4c7497:	8d 85 18 ff ff ff    	lea    eax,[ebp-0xe8]
  4c749d:	50                   	push   eax
  4c749e:	ff d7                	call   edi
  4c74a0:	66 8b 85 18 ff ff ff 	mov    ax,WORD PTR [ebp-0xe8]
  4c74a7:	66 83 f8 06          	cmp    ax,0x6
  4c74ab:	74 10                	je     0x4c74bd
  4c74ad:	c7 85 fc fe ff ff 19 	mov    DWORD PTR [ebp-0x104],0x20019
  4c74b7:	66 83 f8 09          	cmp    ax,0x9
  4c74bb:	75 0a                	jne    0x4c74c7
  4c74bd:	c7 85 fc fe ff ff 19 	mov    DWORD PTR [ebp-0x104],0x20219
  4c74c7:	33 ff                	xor    edi,edi
  4c74c9:	68 fe 00 00 00       	push   0xfe
  4c74ce:	89 bd f8 fe ff ff    	mov    DWORD PTR [ebp-0x108],edi
  4c74d4:	e8 98 cf f3 ff       	call   0x404471 ; ["call resolved=0x6665cf "]
  4c74d9:	83 c4 04             	add    esp,0x4
  4c74dc:	89 85 08 ff ff ff    	mov    DWORD PTR [ebp-0xf8],eax
  4c74e2:	8d 85 04 ff ff ff    	lea    eax,[ebp-0xfc]
  4c74e8:	c7 45 e0 01 00 00 00 	mov    DWORD PTR [ebp-0x20],0x1
  4c74ef:	c7 45 e8 fe 00 00 00 	mov    DWORD PTR [ebp-0x18],0xfe
  4c74f6:	50                   	push   eax
  4c74f7:	ff b5 fc fe ff ff    	push   DWORD PTR [ebp-0x104]
  4c74fd:	57                   	push   edi
  4c74fe:	68 d8 b0 6c 00       	push   0x6cb0d8
  4c7503:	68 02 00 00 80       	push   0x80000002
  4c7508:	ff 15 cc de 79 00    	call   DWORD PTR ds:0x79decc
  4c750e:	85 c0                	test   eax,eax
  4c7510:	75 30                	jne    0x4c7542
  4c7512:	8d 45 e8             	lea    eax,[ebp-0x18]
  4c7515:	50                   	push   eax
  4c7516:	ff b5 08 ff ff ff    	push   DWORD PTR [ebp-0xf8]
  4c751c:	8d 45 e0             	lea    eax,[ebp-0x20]
  4c751f:	50                   	push   eax
  4c7520:	57                   	push   edi
  4c7521:	68 08 b1 6c 00       	push   0x6cb108
  4c7526:	ff b5 04 ff ff ff    	push   DWORD PTR [ebp-0xfc]
  4c752c:	ff 15 ac de 79 00    	call   DWORD PTR ds:0x79deac
  4c7532:	85 c0                	test   eax,eax
  4c7534:	b9 02 00 00 00       	mov    ecx,0x2
  4c7539:	0f 44 f9             	cmove  edi,ecx
  4c753c:	89 bd f8 fe ff ff    	mov    DWORD PTR [ebp-0x108],edi
  4c7542:	8d 85 14 ff ff ff    	lea    eax,[ebp-0xec]
  4c7548:	50                   	push   eax
  4c7549:	68 19 02 02 00       	push   0x20219
  4c754e:	6a 00                	push   0x0
  4c7550:	68 d4 4b 6c 00       	push   0x6c4bd4
  4c7555:	68 02 00 00 80       	push   0x80000002
  4c755a:	ff 15 cc de 79 00    	call   DWORD PTR ds:0x79decc
  4c7560:	85 c0                	test   eax,eax
  4c7562:	0f 85 8e 00 00 00    	jne    0x4c75f6
  4c7568:	8d 85 fc fe ff ff    	lea    eax,[ebp-0x104]
  4c756e:	c7 85 0c ff ff ff 01 	mov    DWORD PTR [ebp-0xf4],0x1
  4c7578:	50                   	push   eax
  4c7579:	8d 85 54 ff ff ff    	lea    eax,[ebp-0xac]
  4c757f:	c7 85 fc fe ff ff 80 	mov    DWORD PTR [ebp-0x104],0x80
  4c7589:	50                   	push   eax
  4c758a:	8d 85 0c ff ff ff    	lea    eax,[ebp-0xf4]
  4c7590:	50                   	push   eax
  4c7591:	6a 00                	push   0x0
  4c7593:	68 fc b0 6c 00       	push   0x6cb0fc ; ["InstPath"]
  4c7598:	ff b5 14 ff ff ff    	push   DWORD PTR [ebp-0xec]
  4c759e:	ff 15 a8 de 79 00    	call   DWORD PTR ds:0x79dea8
  4c75a4:	85 c0                	test   eax,eax
  4c75a6:	75 4e                	jne    0x4c75f6
  4c75a8:	ff b5 14 ff ff ff    	push   DWORD PTR [ebp-0xec]
  4c75ae:	85 ff                	test   edi,edi
  4c75b0:	8b 3d b8 de 79 00    	mov    edi,DWORD PTR ds:0x79deb8
  4c75b6:	74 1f                	je     0x4c75d7
  4c75b8:	ff d7                	call   edi
  4c75ba:	ff b5 04 ff ff ff    	push   DWORD PTR [ebp-0xfc]
  4c75c0:	ff d7                	call   edi
  4c75c2:	ff b5 08 ff ff ff    	push   DWORD PTR [ebp-0xf8]
  4c75c8:	e8 8f f2 f3 ff       	call   0x40685c ; ["call resolved=0x6687d2 "]
  4c75cd:	83 c4 04             	add    esp,0x4
  4c75d0:	b8 0c 00 00 00       	mov    eax,0xc
  4c75d5:	eb 66                	jmp    0x4c763d
  4c75d7:	ff d7                	call   edi
  4c75d9:	ff b5 04 ff ff ff    	push   DWORD PTR [ebp-0xfc]
  4c75df:	ff d7                	call   edi
  4c75e1:	ff b5 08 ff ff ff    	push   DWORD PTR [ebp-0xf8]
  4c75e7:	e8 70 f2 f3 ff       	call   0x40685c ; ["call resolved=0x6687d2 "]
  4c75ec:	83 c4 04             	add    esp,0x4
  4c75ef:	b8 08 00 00 00       	mov    eax,0x8
  4c75f4:	eb 47                	jmp    0x4c763d
  4c75f6:	ff b5 14 ff ff ff    	push   DWORD PTR [ebp-0xec]
  4c75fc:	8b 3d b8 de 79 00    	mov    edi,DWORD PTR ds:0x79deb8
  4c7602:	ff d7                	call   edi
  4c7604:	ff b5 04 ff ff ff    	push   DWORD PTR [ebp-0xfc]
  4c760a:	ff d7                	call   edi
  4c760c:	ff b5 08 ff ff ff    	push   DWORD PTR [ebp-0xf8]
  4c7612:	e8 45 f2 f3 ff       	call   0x40685c ; ["call resolved=0x6687d2 "]
  4c7617:	8b 85 f8 fe ff ff    	mov    eax,DWORD PTR [ebp-0x108]
  4c761d:	83 c4 04             	add    esp,0x4
  4c7620:	83 f8 03             	cmp    eax,0x3
  4c7623:	77 12                	ja     0x4c7637
  4c7625:	ff 24 85 68 7b 4c 00 	jmp    DWORD PTR [eax*4+0x4c7b68]
  4c762c:	33 c0                	xor    eax,eax
  4c762e:	eb 0d                	jmp    0x4c763d
  4c7630:	b8 04 00 00 00       	mov    eax,0x4
  4c7635:	eb 06                	jmp    0x4c763d
  4c7637:	8b 85 dc fe ff ff    	mov    eax,DWORD PTR [ebp-0x124]
  4c763d:	c1 e0 04             	shl    eax,0x4
  4c7640:	0f 57 c0             	xorps  xmm0,xmm0
  4c7643:	83 c0 02             	add    eax,0x2
  4c7646:	66 0f d6 45 d4       	movq   QWORD PTR [ebp-0x2c],xmm0
  4c764b:	89 85 14 ff ff ff    	mov    DWORD PTR [ebp-0xec],eax
  4c7651:	33 c0                	xor    eax,eax
  4c7653:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  4c7656:	66 89 45 ec          	mov    WORD PTR [ebp-0x14],ax
  4c765a:	88 45 ee             	mov    BYTE PTR [ebp-0x12],al
  4c765d:	88 45 dc             	mov    BYTE PTR [ebp-0x24],al
  4c7660:	8d 85 3c ff ff ff    	lea    eax,[ebp-0xc4]
  4c7666:	50                   	push   eax
  4c7667:	e8 d6 f2 f3 ff       	call   0x406942 ; ["call resolved=0x4c8020 "]
  4c766c:	83 c4 04             	add    esp,0x4
  4c766f:	8b bd 4c ff ff ff    	mov    edi,DWORD PTR [ebp-0xb4]
  4c7675:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  4c7679:	85 ff                	test   edi,edi
  4c767b:	0f 84 5d 02 00 00    	je     0x4c78de
  4c7681:	83 bd 50 ff ff ff 10 	cmp    DWORD PTR [ebp-0xb0],0x10
  4c7688:	8d 85 3c ff ff ff    	lea    eax,[ebp-0xc4]
  4c768e:	6a 5c                	push   0x5c
  4c7690:	0f 43 85 3c ff ff ff 	cmovae eax,DWORD PTR [ebp-0xc4]
  4c7697:	68 28 b3 6c 00       	push   0x6cb328 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\DataBuilder.cpp"]
  4c769c:	89 85 0c ff ff ff    	mov    DWORD PTR [ebp-0xf4],eax
  4c76a2:	e8 bf 10 1a 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4c76a7:	83 c4 08             	add    esp,0x8
  4c76aa:	85 c0                	test   eax,eax
  4c76ac:	74 12                	je     0x4c76c0
  4c76ae:	6a 5c                	push   0x5c
  4c76b0:	68 28 b3 6c 00       	push   0x6cb328 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\DataBuilder.cpp"]
  4c76b5:	e8 ac 10 1a 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4c76ba:	83 c4 08             	add    esp,0x8
  4c76bd:	40                   	inc    eax
  4c76be:	eb 05                	jmp    0x4c76c5
  4c76c0:	b8 28 b3 6c 00       	mov    eax,0x6cb328 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\DataBuilder.cpp"]
  4c76c5:	57                   	push   edi
  4c76c6:	ff b5 0c ff ff ff    	push   DWORD PTR [ebp-0xf4]
  4c76cc:	c7 45 e0 02 00 00 00 	mov    DWORD PTR [ebp-0x20],0x2
  4c76d3:	68 04 b3 6c 00       	push   0x6cb304 ; ["DataBuilderV1::buildData"]
  4c76d8:	68 a5 00 00 00       	push   0xa5
  4c76dd:	50                   	push   eax
  4c76de:	68 84 b3 6c 00       	push   0x6cb384 ; ["[ConntctionModule][%s:%d][%s]: device name: %s, size: %d\n"]
  4c76e3:	8d 45 e0             	lea    eax,[ebp-0x20]
  4c76e6:	50                   	push   eax
  4c76e7:	8d 85 24 ff ff ff    	lea    eax,[ebp-0xdc]
  4c76ed:	50                   	push   eax
  4c76ee:	e8 16 f9 f3 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4c76f3:	8b 95 38 ff ff ff    	mov    edx,DWORD PTR [ebp-0xc8]
  4c76f9:	83 c4 20             	add    esp,0x20
  4c76fc:	83 fa 10             	cmp    edx,0x10
  4c76ff:	72 2f                	jb     0x4c7730
  4c7701:	8b 8d 24 ff ff ff    	mov    ecx,DWORD PTR [ebp-0xdc]
  4c7707:	42                   	inc    edx
  4c7708:	8b c1                	mov    eax,ecx
  4c770a:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4c7710:	72 14                	jb     0x4c7726
  4c7712:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4c7715:	83 c2 23             	add    edx,0x23
  4c7718:	2b c1                	sub    eax,ecx
  4c771a:	83 c0 fc             	add    eax,0xfffffffc
  4c771d:	83 f8 1f             	cmp    eax,0x1f
  4c7720:	0f 87 e5 03 00 00    	ja     0x4c7b0b
  4c7726:	52                   	push   edx
  4c7727:	51                   	push   ecx
  4c7728:	e8 6d a9 f3 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4c772d:	83 c4 08             	add    esp,0x8
  4c7730:	8b 95 50 ff ff ff    	mov    edx,DWORD PTR [ebp-0xb0]
  4c7736:	8b 8d 3c ff ff ff    	mov    ecx,DWORD PTR [ebp-0xc4]
  4c773c:	83 ff 03             	cmp    edi,0x3
  4c773f:	0f 8e 0b 01 00 00    	jle    0x4c7850
  4c7745:	83 fa 10             	cmp    edx,0x10
  4c7748:	8d 85 3c ff ff ff    	lea    eax,[ebp-0xc4]
  4c774e:	0f 43 c1             	cmovae eax,ecx
  4c7751:	8a 00                	mov    al,BYTE PTR [eax]
  4c7753:	88 45 e8             	mov    BYTE PTR [ebp-0x18],al
  4c7756:	8d 85 3c ff ff ff    	lea    eax,[ebp-0xc4]
  4c775c:	0f 43 c1             	cmovae eax,ecx
  4c775f:	8a 40 01             	mov    al,BYTE PTR [eax+0x1]
  4c7762:	88 45 e9             	mov    BYTE PTR [ebp-0x17],al
  4c7765:	8d 85 3c ff ff ff    	lea    eax,[ebp-0xc4]
  4c776b:	0f 43 c1             	cmovae eax,ecx
  4c776e:	8a 40 02             	mov    al,BYTE PTR [eax+0x2]
  4c7771:	88 45 ea             	mov    BYTE PTR [ebp-0x16],al
  4c7774:	83 ff 06             	cmp    edi,0x6
  4c7777:	0f 8c 01 01 00 00    	jl     0x4c787e
  4c777d:	83 fa 10             	cmp    edx,0x10
  4c7780:	8d 85 3c ff ff ff    	lea    eax,[ebp-0xc4]
  4c7786:	0f 43 c1             	cmovae eax,ecx
  4c7789:	8a 44 38 fd          	mov    al,BYTE PTR [eax+edi*1-0x3]
  4c778d:	88 45 eb             	mov    BYTE PTR [ebp-0x15],al
  4c7790:	8d 85 3c ff ff ff    	lea    eax,[ebp-0xc4]
  4c7796:	0f 43 c1             	cmovae eax,ecx
  4c7799:	8a 44 38 fe          	mov    al,BYTE PTR [eax+edi*1-0x2]
  4c779d:	88 45 ec             	mov    BYTE PTR [ebp-0x14],al
  4c77a0:	8d 85 3c ff ff ff    	lea    eax,[ebp-0xc4]
  4c77a6:	0f 43 c1             	cmovae eax,ecx
  4c77a9:	8a 44 38 ff          	mov    al,BYTE PTR [eax+edi*1-0x1]
  4c77ad:	88 45 ed             	mov    BYTE PTR [ebp-0x13],al
  4c77b0:	83 ff 0b             	cmp    edi,0xb
  4c77b3:	0f 8e 89 00 00 00    	jle    0x4c7842
  4c77b9:	8b bd 14 ff ff ff    	mov    edi,DWORD PTR [ebp-0xec]
  4c77bf:	8d 85 3c ff ff ff    	lea    eax,[ebp-0xc4]
  4c77c5:	83 cf 30             	or     edi,0x30
  4c77c8:	83 fa 10             	cmp    edx,0x10
  4c77cb:	0f 43 c1             	cmovae eax,ecx
  4c77ce:	8a 40 03             	mov    al,BYTE PTR [eax+0x3]
  4c77d1:	88 45 d4             	mov    BYTE PTR [ebp-0x2c],al
  4c77d4:	8d 85 3c ff ff ff    	lea    eax,[ebp-0xc4]
  4c77da:	0f 43 c1             	cmovae eax,ecx
  4c77dd:	8a 40 04             	mov    al,BYTE PTR [eax+0x4]
  4c77e0:	88 45 d5             	mov    BYTE PTR [ebp-0x2b],al
  4c77e3:	8d 85 3c ff ff ff    	lea    eax,[ebp-0xc4]
  4c77e9:	0f 43 c1             	cmovae eax,ecx
  4c77ec:	8a 40 05             	mov    al,BYTE PTR [eax+0x5]
  4c77ef:	88 45 d6             	mov    BYTE PTR [ebp-0x2a],al
  4c77f2:	8d 85 3c ff ff ff    	lea    eax,[ebp-0xc4]
  4c77f8:	0f 43 c1             	cmovae eax,ecx
  4c77fb:	8a 40 06             	mov    al,BYTE PTR [eax+0x6]
  4c77fe:	88 45 d7             	mov    BYTE PTR [ebp-0x29],al
  4c7801:	8d 85 3c ff ff ff    	lea    eax,[ebp-0xc4]
  4c7807:	0f 43 c1             	cmovae eax,ecx
  4c780a:	8a 40 07             	mov    al,BYTE PTR [eax+0x7]
  4c780d:	88 45 d8             	mov    BYTE PTR [ebp-0x28],al
  4c7810:	8d 85 3c ff ff ff    	lea    eax,[ebp-0xc4]
  4c7816:	0f 43 c1             	cmovae eax,ecx
  4c7819:	8a 40 08             	mov    al,BYTE PTR [eax+0x8]
  4c781c:	88 45 d9             	mov    BYTE PTR [ebp-0x27],al
  4c781f:	8d 85 3c ff ff ff    	lea    eax,[ebp-0xc4]
  4c7825:	0f 43 c1             	cmovae eax,ecx
  4c7828:	8a 40 09             	mov    al,BYTE PTR [eax+0x9]
  4c782b:	88 45 da             	mov    BYTE PTR [ebp-0x26],al
  4c782e:	8d 85 3c ff ff ff    	lea    eax,[ebp-0xc4]
  4c7834:	0f 43 c1             	cmovae eax,ecx
  4c7837:	8a 40 0a             	mov    al,BYTE PTR [eax+0xa]
  4c783a:	88 45 db             	mov    BYTE PTR [ebp-0x25],al
  4c783d:	e9 af 00 00 00       	jmp    0x4c78f1
  4c7842:	83 ff 06             	cmp    edi,0x6
  4c7845:	7e 65                	jle    0x4c78ac
  4c7847:	83 8d 14 ff ff ff 20 	or     DWORD PTR [ebp-0xec],0x20
  4c784e:	eb 5c                	jmp    0x4c78ac
  4c7850:	33 c9                	xor    ecx,ecx
  4c7852:	85 ff                	test   edi,edi
  4c7854:	7e 28                	jle    0x4c787e
  4c7856:	8b 95 50 ff ff ff    	mov    edx,DWORD PTR [ebp-0xb0]
  4c785c:	0f 1f 40 00          	nop    DWORD PTR [eax+0x0]
  4c7860:	83 fa 10             	cmp    edx,0x10
  4c7863:	8d 85 3c ff ff ff    	lea    eax,[ebp-0xc4]
  4c7869:	0f 43 85 3c ff ff ff 	cmovae eax,DWORD PTR [ebp-0xc4]
  4c7870:	8a 04 08             	mov    al,BYTE PTR [eax+ecx*1]
  4c7873:	88 44 0d e8          	mov    BYTE PTR [ebp+ecx*1-0x18],al
  4c7877:	41                   	inc    ecx
  4c7878:	3b cf                	cmp    ecx,edi
  4c787a:	7c e4                	jl     0x4c7860
  4c787c:	eb 6d                	jmp    0x4c78eb
  4c787e:	b9 03 00 00 00       	mov    ecx,0x3
  4c7883:	3b f9                	cmp    edi,ecx
  4c7885:	7e 64                	jle    0x4c78eb
  4c7887:	66 0f 1f 84 00 00 00 	nop    WORD PTR [eax+eax*1+0x0]
  4c7890:	83 fa 10             	cmp    edx,0x10
  4c7893:	8d 85 3c ff ff ff    	lea    eax,[ebp-0xc4]
  4c7899:	0f 43 85 3c ff ff ff 	cmovae eax,DWORD PTR [ebp-0xc4]
  4c78a0:	8a 04 08             	mov    al,BYTE PTR [eax+ecx*1]
  4c78a3:	88 44 0d e8          	mov    BYTE PTR [ebp+ecx*1-0x18],al
  4c78a7:	41                   	inc    ecx
  4c78a8:	3b cf                	cmp    ecx,edi
  4c78aa:	7c e4                	jl     0x4c7890
  4c78ac:	b9 03 00 00 00       	mov    ecx,0x3
  4c78b1:	0f 1f 40 00          	nop    DWORD PTR [eax+0x0]
  4c78b5:	66 66 66 0f 1f 84 00 	data16 data16 nop WORD PTR [eax+eax*1+0x0]
  4c78c0:	83 fa 10             	cmp    edx,0x10
  4c78c3:	8d 85 3c ff ff ff    	lea    eax,[ebp-0xc4]
  4c78c9:	0f 43 85 3c ff ff ff 	cmovae eax,DWORD PTR [ebp-0xc4]
  4c78d0:	8a 04 08             	mov    al,BYTE PTR [eax+ecx*1]
  4c78d3:	88 44 0d d1          	mov    BYTE PTR [ebp+ecx*1-0x2f],al
  4c78d7:	41                   	inc    ecx
  4c78d8:	3b cf                	cmp    ecx,edi
  4c78da:	7c e4                	jl     0x4c78c0
  4c78dc:	eb 0d                	jmp    0x4c78eb
  4c78de:	c7 45 e8 e4 ba 92 e4 	mov    DWORD PTR [ebp-0x18],0xe492bae4
  4c78e5:	66 c7 45 ec bc a0    	mov    WORD PTR [ebp-0x14],0xa0bc
  4c78eb:	8b bd 14 ff ff ff    	mov    edi,DWORD PTR [ebp-0xec]
  4c78f1:	a1 d8 95 79 00       	mov    eax,ds:0x7995d8
  4c78f6:	85 c0                	test   eax,eax
  4c78f8:	75 2f                	jne    0x4c7929
  4c78fa:	68 40 02 00 00       	push   0x240
  4c78ff:	e8 b2 b8 f3 ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  4c7904:	83 c4 04             	add    esp,0x4
  4c7907:	89 85 0c ff ff ff    	mov    DWORD PTR [ebp-0xf4],eax
  4c790d:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  4c7911:	85 c0                	test   eax,eax
  4c7913:	74 09                	je     0x4c791e
  4c7915:	8b c8                	mov    ecx,eax
  4c7917:	e8 42 0b f4 ff       	call   0x40845e ; ["call resolved=0x5febf0 "]
  4c791c:	eb 02                	jmp    0x4c7920
  4c791e:	33 c0                	xor    eax,eax
  4c7920:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  4c7924:	a3 d8 95 79 00       	mov    ds:0x7995d8,eax
  4c7929:	83 c0 18             	add    eax,0x18
  4c792c:	8d 8d 24 ff ff ff    	lea    ecx,[ebp-0xdc]
  4c7932:	50                   	push   eax
  4c7933:	e8 53 e3 f3 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  4c7938:	83 bd 34 ff ff ff 00 	cmp    DWORD PTR [ebp-0xcc],0x0
  4c793f:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  4c7943:	c7 45 e0 00 00 00 00 	mov    DWORD PTR [ebp-0x20],0x0
  4c794a:	c6 45 e4 00          	mov    BYTE PTR [ebp-0x1c],0x0
  4c794e:	74 1f                	je     0x4c796f
  4c7950:	8d 45 e0             	lea    eax,[ebp-0x20]
  4c7953:	50                   	push   eax
  4c7954:	83 ec 18             	sub    esp,0x18
  4c7957:	8d 85 24 ff ff ff    	lea    eax,[ebp-0xdc]
  4c795d:	8b cc                	mov    ecx,esp
  4c795f:	50                   	push   eax
  4c7960:	e8 26 e3 f3 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  4c7965:	e8 10 cc f3 ff       	call   0x40457a ; ["call resolved=0x4c8270 "]
  4c796a:	83 c4 1c             	add    esp,0x1c
  4c796d:	eb 1a                	jmp    0x4c7989
  4c796f:	c7 85 0c ff ff ff 00 	mov    DWORD PTR [ebp-0xf4],0x0
  4c7979:	8b 85 0c ff ff ff    	mov    eax,DWORD PTR [ebp-0xf4]
  4c797f:	c6 85 10 ff ff ff 00 	mov    BYTE PTR [ebp-0xf0],0x0
  4c7986:	89 45 e0             	mov    DWORD PTR [ebp-0x20],eax
  4c7989:	8b 06                	mov    eax,DWORD PTR [esi]
  4c798b:	57                   	push   edi
  4c798c:	56                   	push   esi
  4c798d:	ff 50 2c             	call   DWORD PTR [eax+0x2c]
  4c7990:	85 c0                	test   eax,eax
  4c7992:	0f 88 c2 01 00 00    	js     0x4c7b5a
  4c7998:	8b 06                	mov    eax,DWORD PTR [esi]
  4c799a:	6a 01                	push   0x1
  4c799c:	56                   	push   esi
  4c799d:	ff 50 2c             	call   DWORD PTR [eax+0x2c]
  4c79a0:	85 c0                	test   eax,eax
  4c79a2:	0f 88 b8 01 00 00    	js     0x4c7b60
  4c79a8:	8b bd ec fe ff ff    	mov    edi,DWORD PTR [ebp-0x114]
  4c79ae:	3b bd f0 fe ff ff    	cmp    edi,DWORD PTR [ebp-0x110]
  4c79b4:	73 2f                	jae    0x4c79e5
  4c79b6:	66 66 0f 1f 84 00 00 	data16 nop WORD PTR [eax+eax*1+0x0]
  4c79c0:	8a 07                	mov    al,BYTE PTR [edi]
  4c79c2:	88 85 0c ff ff ff    	mov    BYTE PTR [ebp-0xf4],al
  4c79c8:	ff b5 0c ff ff ff    	push   DWORD PTR [ebp-0xf4]
  4c79ce:	8b 06                	mov    eax,DWORD PTR [esi]
  4c79d0:	56                   	push   esi
  4c79d1:	ff 50 2c             	call   DWORD PTR [eax+0x2c]
  4c79d4:	85 c0                	test   eax,eax
  4c79d6:	0f 88 72 01 00 00    	js     0x4c7b4e
  4c79dc:	47                   	inc    edi
  4c79dd:	3b bd f0 fe ff ff    	cmp    edi,DWORD PTR [ebp-0x110]
  4c79e3:	72 db                	jb     0x4c79c0
  4c79e5:	33 ff                	xor    edi,edi
  4c79e7:	66 0f 1f 84 00 00 00 	nop    WORD PTR [eax+eax*1+0x0]
  4c79f0:	8b 06                	mov    eax,DWORD PTR [esi]
  4c79f2:	8b 48 2c             	mov    ecx,DWORD PTR [eax+0x2c]
  4c79f5:	0f b6 44 3d e8       	movzx  eax,BYTE PTR [ebp+edi*1-0x18]
  4c79fa:	50                   	push   eax
  4c79fb:	56                   	push   esi
  4c79fc:	ff d1                	call   ecx
  4c79fe:	85 c0                	test   eax,eax
  4c7a00:	0f 88 48 01 00 00    	js     0x4c7b4e
  4c7a06:	47                   	inc    edi
  4c7a07:	83 ff 06             	cmp    edi,0x6
  4c7a0a:	7c e4                	jl     0x4c79f0
  4c7a0c:	33 ff                	xor    edi,edi
  4c7a0e:	66 90                	xchg   ax,ax
  4c7a10:	8b 06                	mov    eax,DWORD PTR [esi]
  4c7a12:	8b 48 2c             	mov    ecx,DWORD PTR [eax+0x2c]
  4c7a15:	0f b6 44 3d e0       	movzx  eax,BYTE PTR [ebp+edi*1-0x20]
  4c7a1a:	50                   	push   eax
  4c7a1b:	56                   	push   esi
  4c7a1c:	ff d1                	call   ecx
  4c7a1e:	85 c0                	test   eax,eax
  4c7a20:	0f 88 28 01 00 00    	js     0x4c7b4e
  4c7a26:	47                   	inc    edi
  4c7a27:	83 ff 04             	cmp    edi,0x4
  4c7a2a:	7c e4                	jl     0x4c7a10
  4c7a2c:	33 ff                	xor    edi,edi
  4c7a2e:	66 90                	xchg   ax,ax
  4c7a30:	8b 06                	mov    eax,DWORD PTR [esi]
  4c7a32:	8b 48 2c             	mov    ecx,DWORD PTR [eax+0x2c]
  4c7a35:	0f b6 44 3d d4       	movzx  eax,BYTE PTR [ebp+edi*1-0x2c]
  4c7a3a:	50                   	push   eax
  4c7a3b:	56                   	push   esi
  4c7a3c:	ff d1                	call   ecx
  4c7a3e:	85 c0                	test   eax,eax
  4c7a40:	0f 88 08 01 00 00    	js     0x4c7b4e
  4c7a46:	47                   	inc    edi
  4c7a47:	83 ff 08             	cmp    edi,0x8
  4c7a4a:	7c e4                	jl     0x4c7a30
  4c7a4c:	8b bd dc fe ff ff    	mov    edi,DWORD PTR [ebp-0x124]
  4c7a52:	8b 95 38 ff ff ff    	mov    edx,DWORD PTR [ebp-0xc8]
  4c7a58:	89 37                	mov    DWORD PTR [edi],esi
  4c7a5a:	83 fa 10             	cmp    edx,0x10
  4c7a5d:	72 2f                	jb     0x4c7a8e
  4c7a5f:	8b 8d 24 ff ff ff    	mov    ecx,DWORD PTR [ebp-0xdc]
  4c7a65:	42                   	inc    edx
  4c7a66:	8b c1                	mov    eax,ecx
  4c7a68:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4c7a6e:	72 14                	jb     0x4c7a84
  4c7a70:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4c7a73:	83 c2 23             	add    edx,0x23
  4c7a76:	2b c1                	sub    eax,ecx
  4c7a78:	83 c0 fc             	add    eax,0xfffffffc
  4c7a7b:	83 f8 1f             	cmp    eax,0x1f
  4c7a7e:	0f 87 87 00 00 00    	ja     0x4c7b0b
  4c7a84:	52                   	push   edx
  4c7a85:	51                   	push   ecx
  4c7a86:	e8 0f a6 f3 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4c7a8b:	83 c4 08             	add    esp,0x8
  4c7a8e:	8b 95 50 ff ff ff    	mov    edx,DWORD PTR [ebp-0xb0]
  4c7a94:	83 fa 10             	cmp    edx,0x10
  4c7a97:	72 2b                	jb     0x4c7ac4
  4c7a99:	8b 8d 3c ff ff ff    	mov    ecx,DWORD PTR [ebp-0xc4]
  4c7a9f:	42                   	inc    edx
  4c7aa0:	8b c1                	mov    eax,ecx
  4c7aa2:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4c7aa8:	72 10                	jb     0x4c7aba
  4c7aaa:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4c7aad:	83 c2 23             	add    edx,0x23
  4c7ab0:	2b c1                	sub    eax,ecx
  4c7ab2:	83 c0 fc             	add    eax,0xfffffffc
  4c7ab5:	83 f8 1f             	cmp    eax,0x1f
  4c7ab8:	77 51                	ja     0x4c7b0b
  4c7aba:	52                   	push   edx
  4c7abb:	51                   	push   ecx
  4c7abc:	e8 d9 a5 f3 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4c7ac1:	83 c4 08             	add    esp,0x8
  4c7ac4:	8b 95 ec fe ff ff    	mov    edx,DWORD PTR [ebp-0x114]
  4c7aca:	c7 85 4c ff ff ff 00 	mov    DWORD PTR [ebp-0xb4],0x0
  4c7ad4:	c7 85 50 ff ff ff 0f 	mov    DWORD PTR [ebp-0xb0],0xf
  4c7ade:	c6 85 3c ff ff ff 00 	mov    BYTE PTR [ebp-0xc4],0x0
  4c7ae5:	85 d2                	test   edx,edx
  4c7ae7:	74 32                	je     0x4c7b1b
  4c7ae9:	8b 8d f4 fe ff ff    	mov    ecx,DWORD PTR [ebp-0x10c]
  4c7aef:	8b c2                	mov    eax,edx
  4c7af1:	2b ca                	sub    ecx,edx
  4c7af3:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  4c7af9:	72 16                	jb     0x4c7b11
  4c7afb:	8b 52 fc             	mov    edx,DWORD PTR [edx-0x4]
  4c7afe:	83 c1 23             	add    ecx,0x23
  4c7b01:	2b c2                	sub    eax,edx
  4c7b03:	83 c0 fc             	add    eax,0xfffffffc
  4c7b06:	83 f8 1f             	cmp    eax,0x1f
  4c7b09:	76 06                	jbe    0x4c7b11
  4c7b0b:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  4c7b11:	51                   	push   ecx
  4c7b12:	52                   	push   edx
  4c7b13:	e8 82 a5 f3 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4c7b18:	83 c4 08             	add    esp,0x8
  4c7b1b:	83 bd 00 ff ff ff 00 	cmp    DWORD PTR [ebp-0x100],0x0
  4c7b22:	74 0b                	je     0x4c7b2f
  4c7b24:	8d 8d e0 fe ff ff    	lea    ecx,[ebp-0x120]
  4c7b2a:	e8 cb db f3 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4c7b2f:	8b c7                	mov    eax,edi
  4c7b31:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  4c7b34:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  4c7b3b:	59                   	pop    ecx
  4c7b3c:	5f                   	pop    edi
  4c7b3d:	5e                   	pop    esi
  4c7b3e:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  4c7b41:	33 cd                	xor    ecx,ebp
  4c7b43:	e8 47 c9 f3 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  4c7b48:	8b e5                	mov    esp,ebp
  4c7b4a:	5d                   	pop    ebp
  4c7b4b:	c2 04 00             	ret    0x4
  4c7b4e:	50                   	push   eax
  4c7b4f:	e8 a4 97 f3 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4c7b54:	50                   	push   eax
  4c7b55:	e8 9e 97 f3 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4c7b5a:	50                   	push   eax
  4c7b5b:	e8 98 97 f3 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4c7b60:	50                   	push   eax
  4c7b61:	e8 92 97 f3 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4c7b66:	66 90                	xchg   ax,ax
  4c7b68:	2c 76                	sub    al,0x76
  4c7b6a:	4c                   	dec    esp
  4c7b6b:	00 ef                	add    bh,ch
  4c7b6d:	75 4c                	jne    0x4c7bbb
  4c7b6f:	00 30                	add    BYTE PTR [eax],dh
  4c7b71:	76 4c                	jbe    0x4c7bbf
  4c7b73:	00 d0                	add    al,dl
  4c7b75:	75 4c                	jne    0x4c7bc3
  4c7b77:	00 cc                	add    ah,cl
