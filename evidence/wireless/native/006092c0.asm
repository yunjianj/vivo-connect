; SSDPSocket::insertResponseDevice; image base 0x400000; static annotation only
  6092c0:	55                   	push   ebp
  6092c1:	8d ac 24 24 ff ff ff 	lea    ebp,[esp-0xdc]
  6092c8:	81 ec dc 00 00 00    	sub    esp,0xdc
  6092ce:	6a ff                	push   0xffffffff
  6092d0:	68 b9 b4 69 00       	push   0x69b4b9
  6092d5:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  6092db:	50                   	push   eax
  6092dc:	83 ec 18             	sub    esp,0x18
  6092df:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  6092e4:	33 c5                	xor    eax,ebp
  6092e6:	89 85 d8 00 00 00    	mov    DWORD PTR [ebp+0xd8],eax
  6092ec:	53                   	push   ebx
  6092ed:	56                   	push   esi
  6092ee:	57                   	push   edi
  6092ef:	50                   	push   eax
  6092f0:	8d 45 f4             	lea    eax,[ebp-0xc]
  6092f3:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  6092f9:	8b d9                	mov    ebx,ecx
  6092fb:	8b b5 e4 00 00 00    	mov    esi,DWORD PTR [ebp+0xe4]
  609301:	8b bd e8 00 00 00    	mov    edi,DWORD PTR [ebp+0xe8]
  609307:	b9 03 aa 7a 00       	mov    ecx,0x7aaa03
  60930c:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  609313:	e8 d6 f7 df ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  609318:	83 7e 10 00          	cmp    DWORD PTR [esi+0x10],0x0
  60931c:	0f 84 14 07 00 00    	je     0x609a36
  609322:	83 7f 10 00          	cmp    DWORD PTR [edi+0x10],0x0
  609326:	0f 84 0a 07 00 00    	je     0x609a36
  60932c:	8d 4d 00             	lea    ecx,[ebp+0x0]
  60932f:	e8 7e c5 df ff       	call   0x4058b2 ; ["call resolved=0x5a1d30 "]
  609334:	80 bd 04 01 00 00 00 	cmp    BYTE PTR [ebp+0x104],0x0
  60933b:	8d 45 00             	lea    eax,[ebp+0x0]
  60933e:	50                   	push   eax
  60933f:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  609343:	8b cb                	mov    ecx,ebx
  609345:	56                   	push   esi
  609346:	75 4d                	jne    0x609395
  609348:	e8 0a 94 df ff       	call   0x402757 ; ["call resolved=0x60a8f0 "]
  60934d:	84 c0                	test   al,al
  60934f:	0f 85 db 00 00 00    	jne    0x609430
  609355:	6a 5c                	push   0x5c
  609357:	68 94 5e 6f 00       	push   0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  60935c:	e8 05 f4 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  609361:	83 c4 08             	add    esp,0x8
  609364:	85 c0                	test   eax,eax
  609366:	74 1c                	je     0x609384
  609368:	6a 5c                	push   0x5c
  60936a:	68 94 5e 6f 00       	push   0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  60936f:	e8 f2 f3 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  609374:	83 c4 08             	add    esp,0x8
  609377:	40                   	inc    eax
  609378:	68 78 63 6f 00       	push   0x6f6378 ; ["SSDPSocket::insertResponseDevice"]
  60937d:	68 ea 01 00 00       	push   0x1ea
  609382:	eb 52                	jmp    0x6093d6
  609384:	68 78 63 6f 00       	push   0x6f6378 ; ["SSDPSocket::insertResponseDevice"]
  609389:	b8 94 5e 6f 00       	mov    eax,0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  60938e:	68 ea 01 00 00       	push   0x1ea
  609393:	eb 41                	jmp    0x6093d6
  609395:	e8 d8 b9 df ff       	call   0x404d72 ; ["call resolved=0x60b240 SSDPSocket::parserResponseData"]
  60939a:	84 c0                	test   al,al
  60939c:	0f 85 8e 00 00 00    	jne    0x609430
  6093a2:	6a 5c                	push   0x5c
  6093a4:	68 94 5e 6f 00       	push   0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  6093a9:	e8 b8 f3 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  6093ae:	83 c4 08             	add    esp,0x8
  6093b1:	85 c0                	test   eax,eax
  6093b3:	74 12                	je     0x6093c7
  6093b5:	6a 5c                	push   0x5c
  6093b7:	68 94 5e 6f 00       	push   0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  6093bc:	e8 a5 f3 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  6093c1:	83 c4 08             	add    esp,0x8
  6093c4:	40                   	inc    eax
  6093c5:	eb 05                	jmp    0x6093cc
  6093c7:	b8 94 5e 6f 00       	mov    eax,0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  6093cc:	68 78 63 6f 00       	push   0x6f6378 ; ["SSDPSocket::insertResponseDevice"]
  6093d1:	68 ef 01 00 00       	push   0x1ef
  6093d6:	50                   	push   eax
  6093d7:	68 a0 63 6f 00       	push   0x6f63a0 ; ["[ConntctionModule][%s:%d][%s]: receive data is empty or parser fail ..."]
  6093dc:	8d 45 f0             	lea    eax,[ebp-0x10]
  6093df:	c7 45 f0 02 00 00 00 	mov    DWORD PTR [ebp-0x10],0x2
  6093e6:	50                   	push   eax
  6093e7:	8d 85 c0 00 00 00    	lea    eax,[ebp+0xc0]
  6093ed:	50                   	push   eax
  6093ee:	e8 16 dc df ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  6093f3:	8b 95 d4 00 00 00    	mov    edx,DWORD PTR [ebp+0xd4]
  6093f9:	83 c4 18             	add    esp,0x18
  6093fc:	83 fa 10             	cmp    edx,0x10
  6093ff:	72 2f                	jb     0x609430
  609401:	8b 8d c0 00 00 00    	mov    ecx,DWORD PTR [ebp+0xc0]
  609407:	42                   	inc    edx
  609408:	8b c1                	mov    eax,ecx
  60940a:	81 fa 00 10 00 00    	cmp    edx,0x1000
  609410:	72 14                	jb     0x609426
  609412:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  609415:	83 c2 23             	add    edx,0x23
  609418:	2b c1                	sub    eax,ecx
  60941a:	83 c0 fc             	add    eax,0xfffffffc
  60941d:	83 f8 1f             	cmp    eax,0x1f
  609420:	0f 87 3c 06 00 00    	ja     0x609a62
  609426:	52                   	push   edx
  609427:	51                   	push   ecx
  609428:	e8 6d 8c df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  60942d:	83 c4 08             	add    esp,0x8
  609430:	8b 45 58             	mov    eax,DWORD PTR [ebp+0x58]
  609433:	85 c0                	test   eax,eax
  609435:	74 40                	je     0x609477
  609437:	8b b5 fc 00 00 00    	mov    esi,DWORD PTR [ebp+0xfc]
  60943d:	85 f6                	test   esi,esi
  60943f:	74 36                	je     0x609477
  609441:	83 bd 00 01 00 00 10 	cmp    DWORD PTR [ebp+0x100],0x10
  609448:	8d 8d ec 00 00 00    	lea    ecx,[ebp+0xec]
  60944e:	8d 55 48             	lea    edx,[ebp+0x48]
  609451:	0f 43 8d ec 00 00 00 	cmovae ecx,DWORD PTR [ebp+0xec]
  609458:	83 7d 5c 10          	cmp    DWORD PTR [ebp+0x5c],0x10
  60945c:	0f 43 55 48          	cmovae edx,DWORD PTR [ebp+0x48]
  609460:	3b c6                	cmp    eax,esi
  609462:	75 13                	jne    0x609477
  609464:	50                   	push   eax
  609465:	51                   	push   ecx
  609466:	52                   	push   edx
  609467:	e8 51 b4 df ff       	call   0x4048bd ; ["call resolved=0x482fc0 "]
  60946c:	83 c4 0c             	add    esp,0xc
  60946f:	c6 45 6c 01          	mov    BYTE PTR [ebp+0x6c],0x1
  609473:	85 c0                	test   eax,eax
  609475:	74 04                	je     0x60947b
  609477:	c6 45 6c 00          	mov    BYTE PTR [ebp+0x6c],0x0
  60947b:	8b 45 64             	mov    eax,DWORD PTR [ebp+0x64]
  60947e:	57                   	push   edi
  60947f:	3b 45 68             	cmp    eax,DWORD PTR [ebp+0x68]
  609482:	74 12                	je     0x609496
  609484:	8b c8                	mov    ecx,eax
  609486:	e8 00 c8 df ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  60948b:	8b 45 64             	mov    eax,DWORD PTR [ebp+0x64]
  60948e:	83 c0 18             	add    eax,0x18
  609491:	89 45 64             	mov    DWORD PTR [ebp+0x64],eax
  609494:	eb 0c                	jmp    0x6094a2
  609496:	50                   	push   eax
  609497:	8d 4d 60             	lea    ecx,[ebp+0x60]
  60949a:	e8 86 83 df ff       	call   0x401825 ; ["call resolved=0x440a00 "]
  60949f:	8b 45 64             	mov    eax,DWORD PTR [ebp+0x64]
  6094a2:	39 45 60             	cmp    DWORD PTR [ebp+0x60],eax
  6094a5:	0f 84 83 05 00 00    	je     0x609a2e
  6094ab:	83 7d 28 00          	cmp    DWORD PTR [ebp+0x28],0x0
  6094af:	0f 84 79 05 00 00    	je     0x609a2e
  6094b5:	80 7d 6d 00          	cmp    BYTE PTR [ebp+0x6d],0x0
  6094b9:	0f 85 91 01 00 00    	jne    0x609650
  6094bf:	8b 7d 10             	mov    edi,DWORD PTR [ebp+0x10]
  6094c2:	8d 4d 00             	lea    ecx,[ebp+0x0]
  6094c5:	be 03 00 00 00       	mov    esi,0x3
  6094ca:	6a 00                	push   0x0
  6094cc:	8b de                	mov    ebx,esi
  6094ce:	e8 ca 8d df ff       	call   0x40229d ; ["call resolved=0x472f10 "]
  6094d3:	6a 01                	push   0x1
  6094d5:	8d 4d 00             	lea    ecx,[ebp+0x0]
  6094d8:	8a 00                	mov    al,BYTE PTR [eax]
  6094da:	88 45 f0             	mov    BYTE PTR [ebp-0x10],al
  6094dd:	e8 bb 8d df ff       	call   0x40229d ; ["call resolved=0x472f10 "]
  6094e2:	6a 02                	push   0x2
  6094e4:	8d 4d 00             	lea    ecx,[ebp+0x0]
  6094e7:	8a 00                	mov    al,BYTE PTR [eax]
  6094e9:	88 45 f1             	mov    BYTE PTR [ebp-0xf],al
  6094ec:	e8 ac 8d df ff       	call   0x40229d ; ["call resolved=0x472f10 "]
  6094f1:	56                   	push   esi
  6094f2:	8d 4d 00             	lea    ecx,[ebp+0x0]
  6094f5:	8a 00                	mov    al,BYTE PTR [eax]
  6094f7:	88 45 f2             	mov    BYTE PTR [ebp-0xe],al
  6094fa:	e8 9e 8d df ff       	call   0x40229d ; ["call resolved=0x472f10 "]
  6094ff:	c7 45 e8 04 00 00 00 	mov    DWORD PTR [ebp-0x18],0x4
  609506:	8a 00                	mov    al,BYTE PTR [eax]
  609508:	88 45 f3             	mov    BYTE PTR [ebp-0xd],al
  60950b:	8d 45 e8             	lea    eax,[ebp-0x18]
  60950e:	50                   	push   eax
  60950f:	8d 45 f0             	lea    eax,[ebp-0x10]
  609512:	50                   	push   eax
  609513:	e8 c6 b0 df ff       	call   0x4045de ; ["call resolved=0x609c90 "]
  609518:	83 c4 08             	add    esp,0x8
  60951b:	b9 04 00 00 00       	mov    ecx,0x4
  609520:	84 c0                	test   al,al
  609522:	8d 47 fc             	lea    eax,[edi-0x4]
  609525:	0f 45 f1             	cmovne esi,ecx
  609528:	8d 4d 00             	lea    ecx,[ebp+0x0]
  60952b:	50                   	push   eax
  60952c:	89 75 dc             	mov    DWORD PTR [ebp-0x24],esi
  60952f:	e8 69 8d df ff       	call   0x40229d ; ["call resolved=0x472f10 "]
  609534:	8d 77 fd             	lea    esi,[edi-0x3]
  609537:	56                   	push   esi
  609538:	8d 4d 00             	lea    ecx,[ebp+0x0]
  60953b:	8a 00                	mov    al,BYTE PTR [eax]
  60953d:	88 45 f0             	mov    BYTE PTR [ebp-0x10],al
  609540:	e8 58 8d df ff       	call   0x40229d ; ["call resolved=0x472f10 "]
  609545:	8d 4d 00             	lea    ecx,[ebp+0x0]
  609548:	8a 00                	mov    al,BYTE PTR [eax]
  60954a:	88 45 f1             	mov    BYTE PTR [ebp-0xf],al
  60954d:	8d 47 fe             	lea    eax,[edi-0x2]
  609550:	50                   	push   eax
  609551:	89 45 e0             	mov    DWORD PTR [ebp-0x20],eax
  609554:	e8 44 8d df ff       	call   0x40229d ; ["call resolved=0x472f10 "]
  609559:	4f                   	dec    edi
  60955a:	8d 4d 00             	lea    ecx,[ebp+0x0]
  60955d:	57                   	push   edi
  60955e:	8a 00                	mov    al,BYTE PTR [eax]
  609560:	88 45 f2             	mov    BYTE PTR [ebp-0xe],al
  609563:	e8 35 8d df ff       	call   0x40229d ; ["call resolved=0x472f10 "]
  609568:	c7 45 e8 04 00 00 00 	mov    DWORD PTR [ebp-0x18],0x4
  60956f:	8a 00                	mov    al,BYTE PTR [eax]
  609571:	88 45 f3             	mov    BYTE PTR [ebp-0xd],al
  609574:	8d 45 e8             	lea    eax,[ebp-0x18]
  609577:	50                   	push   eax
  609578:	8d 45 f0             	lea    eax,[ebp-0x10]
  60957b:	50                   	push   eax
  60957c:	e8 5d b0 df ff       	call   0x4045de ; ["call resolved=0x609c90 "]
  609581:	83 c4 08             	add    esp,0x8
  609584:	8d 4d 00             	lea    ecx,[ebp+0x0]
  609587:	84 c0                	test   al,al
  609589:	b8 04 00 00 00       	mov    eax,0x4
  60958e:	0f 45 d8             	cmovne ebx,eax
  609591:	6a 00                	push   0x0
  609593:	89 5d e8             	mov    DWORD PTR [ebp-0x18],ebx
  609596:	e8 02 8d df ff       	call   0x40229d ; ["call resolved=0x472f10 "]
  60959b:	80 38 00             	cmp    BYTE PTR [eax],0x0
  60959e:	7e 1c                	jle    0x6095bc
  6095a0:	6a 01                	push   0x1
  6095a2:	8d 4d 00             	lea    ecx,[ebp+0x0]
  6095a5:	e8 f3 8c df ff       	call   0x40229d ; ["call resolved=0x472f10 "]
  6095aa:	80 38 00             	cmp    BYTE PTR [eax],0x0
  6095ad:	7d 0d                	jge    0x6095bc
  6095af:	6a 01                	push   0x1
  6095b1:	8d 4d 00             	lea    ecx,[ebp+0x0]
  6095b4:	e8 e4 8c df ff       	call   0x40229d ; ["call resolved=0x472f10 "]
  6095b9:	c6 00 20             	mov    BYTE PTR [eax],0x20
  6095bc:	6a 00                	push   0x0
  6095be:	8d 4d 00             	lea    ecx,[ebp+0x0]
  6095c1:	e8 d7 8c df ff       	call   0x40229d ; ["call resolved=0x472f10 "]
  6095c6:	80 38 00             	cmp    BYTE PTR [eax],0x0
  6095c9:	7e 1c                	jle    0x6095e7
  6095cb:	6a 02                	push   0x2
  6095cd:	8d 4d 00             	lea    ecx,[ebp+0x0]
  6095d0:	e8 c8 8c df ff       	call   0x40229d ; ["call resolved=0x472f10 "]
  6095d5:	80 38 00             	cmp    BYTE PTR [eax],0x0
  6095d8:	7d 0d                	jge    0x6095e7
  6095da:	6a 02                	push   0x2
  6095dc:	8d 4d 00             	lea    ecx,[ebp+0x0]
  6095df:	e8 b9 8c df ff       	call   0x40229d ; ["call resolved=0x472f10 "]
  6095e4:	c6 00 20             	mov    BYTE PTR [eax],0x20
  6095e7:	57                   	push   edi
  6095e8:	8d 4d 00             	lea    ecx,[ebp+0x0]
  6095eb:	e8 ad 8c df ff       	call   0x40229d ; ["call resolved=0x472f10 "]
  6095f0:	80 38 00             	cmp    BYTE PTR [eax],0x0
  6095f3:	7e 1d                	jle    0x609612
  6095f5:	8b 5d e0             	mov    ebx,DWORD PTR [ebp-0x20]
  6095f8:	8d 4d 00             	lea    ecx,[ebp+0x0]
  6095fb:	53                   	push   ebx
  6095fc:	e8 9c 8c df ff       	call   0x40229d ; ["call resolved=0x472f10 "]
  609601:	80 38 00             	cmp    BYTE PTR [eax],0x0
  609604:	7d 0c                	jge    0x609612
  609606:	53                   	push   ebx
  609607:	8d 4d 00             	lea    ecx,[ebp+0x0]
  60960a:	e8 8e 8c df ff       	call   0x40229d ; ["call resolved=0x472f10 "]
  60960f:	c6 00 20             	mov    BYTE PTR [eax],0x20
  609612:	57                   	push   edi
  609613:	8d 4d 00             	lea    ecx,[ebp+0x0]
  609616:	e8 82 8c df ff       	call   0x40229d ; ["call resolved=0x472f10 "]
  60961b:	80 38 00             	cmp    BYTE PTR [eax],0x0
  60961e:	7e 1a                	jle    0x60963a
  609620:	56                   	push   esi
  609621:	8d 4d 00             	lea    ecx,[ebp+0x0]
  609624:	e8 74 8c df ff       	call   0x40229d ; ["call resolved=0x472f10 "]
  609629:	80 38 00             	cmp    BYTE PTR [eax],0x0
  60962c:	7d 0c                	jge    0x60963a
  60962e:	56                   	push   esi
  60962f:	8d 4d 00             	lea    ecx,[ebp+0x0]
  609632:	e8 66 8c df ff       	call   0x40229d ; ["call resolved=0x472f10 "]
  609637:	c6 00 20             	mov    BYTE PTR [eax],0x20
  60963a:	6a 01                	push   0x1
  60963c:	8d 45 00             	lea    eax,[ebp+0x0]
  60963f:	50                   	push   eax
  609640:	8d 45 e8             	lea    eax,[ebp-0x18]
  609643:	50                   	push   eax
  609644:	8d 45 dc             	lea    eax,[ebp-0x24]
  609647:	50                   	push   eax
  609648:	e8 df ac df ff       	call   0x40432c ; ["call resolved=0x609d50 "]
  60964d:	83 c4 10             	add    esp,0x10
  609650:	80 7d 6e 00          	cmp    BYTE PTR [ebp+0x6e],0x0
  609654:	0f 85 40 01 00 00    	jne    0x60979a
  60965a:	68 02 1c 6c 00       	push   0x6c1c02
  60965f:	8d 8d c0 00 00 00    	lea    ecx,[ebp+0xc0]
  609665:	e8 b6 90 df ff       	call   0x402720 ; ["call resolved=0x46a4f0 "]
  60966a:	6a 03                	push   0x3
  60966c:	6a 00                	push   0x0
  60966e:	8d 85 a8 00 00 00    	lea    eax,[ebp+0xa8]
  609674:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  609678:	50                   	push   eax
  609679:	8d 4d 30             	lea    ecx,[ebp+0x30]
  60967c:	e8 7c e5 df ff       	call   0x407bfd ; ["call resolved=0x4cbba0 "]
  609681:	50                   	push   eax
  609682:	8d 8d c0 00 00 00    	lea    ecx,[ebp+0xc0]
  609688:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  60968c:	e8 f0 ca df ff       	call   0x406181 ; ["call resolved=0x477450 "]
  609691:	8b 95 bc 00 00 00    	mov    edx,DWORD PTR [ebp+0xbc]
  609697:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  60969b:	83 fa 10             	cmp    edx,0x10
  60969e:	72 31                	jb     0x6096d1
  6096a0:	8b 8d a8 00 00 00    	mov    ecx,DWORD PTR [ebp+0xa8]
  6096a6:	42                   	inc    edx
  6096a7:	8b c1                	mov    eax,ecx
  6096a9:	81 fa 00 10 00 00    	cmp    edx,0x1000
  6096af:	72 16                	jb     0x6096c7
  6096b1:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  6096b4:	83 c2 23             	add    edx,0x23
  6096b7:	2b c1                	sub    eax,ecx
  6096b9:	83 c0 fc             	add    eax,0xfffffffc
  6096bc:	83 f8 1f             	cmp    eax,0x1f
  6096bf:	76 06                	jbe    0x6096c7
  6096c1:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  6096c7:	52                   	push   edx
  6096c8:	51                   	push   ecx
  6096c9:	e8 cc 89 df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  6096ce:	83 c4 08             	add    esp,0x8
  6096d1:	6a 04                	push   0x4
  6096d3:	68 08 b6 6c 00       	push   0x6cb608 ; ["****"]
  6096d8:	8d 8d c0 00 00 00    	lea    ecx,[ebp+0xc0]
  6096de:	e8 f3 a2 df ff       	call   0x4039d6 ; ["call resolved=0x480650 "]
  6096e3:	8b 45 40             	mov    eax,DWORD PTR [ebp+0x40]
  6096e6:	8d 4d 30             	lea    ecx,[ebp+0x30]
  6096e9:	6a 03                	push   0x3
  6096eb:	83 c0 fd             	add    eax,0xfffffffd
  6096ee:	50                   	push   eax
  6096ef:	8d 85 a8 00 00 00    	lea    eax,[ebp+0xa8]
  6096f5:	50                   	push   eax
  6096f6:	e8 02 e5 df ff       	call   0x407bfd ; ["call resolved=0x4cbba0 "]
  6096fb:	50                   	push   eax
  6096fc:	8d 8d c0 00 00 00    	lea    ecx,[ebp+0xc0]
  609702:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  609706:	e8 76 ca df ff       	call   0x406181 ; ["call resolved=0x477450 "]
  60970b:	8b 95 bc 00 00 00    	mov    edx,DWORD PTR [ebp+0xbc]
  609711:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  609715:	83 fa 10             	cmp    edx,0x10
  609718:	72 31                	jb     0x60974b
  60971a:	8b 8d a8 00 00 00    	mov    ecx,DWORD PTR [ebp+0xa8]
  609720:	42                   	inc    edx
  609721:	8b c1                	mov    eax,ecx
  609723:	81 fa 00 10 00 00    	cmp    edx,0x1000
  609729:	72 16                	jb     0x609741
  60972b:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  60972e:	83 c2 23             	add    edx,0x23
  609731:	2b c1                	sub    eax,ecx
  609733:	83 c0 fc             	add    eax,0xfffffffc
  609736:	83 f8 1f             	cmp    eax,0x1f
  609739:	76 06                	jbe    0x609741
  60973b:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  609741:	52                   	push   edx
  609742:	51                   	push   ecx
  609743:	e8 52 89 df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  609748:	83 c4 08             	add    esp,0x8
  60974b:	8d 85 c0 00 00 00    	lea    eax,[ebp+0xc0]
  609751:	50                   	push   eax
  609752:	8d 4d 30             	lea    ecx,[ebp+0x30]
  609755:	e8 39 95 df ff       	call   0x402c93 ; ["call resolved=0x4ceaf0 "]
  60975a:	8b 95 d4 00 00 00    	mov    edx,DWORD PTR [ebp+0xd4]
  609760:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  609764:	83 fa 10             	cmp    edx,0x10
  609767:	72 31                	jb     0x60979a
  609769:	8b 8d c0 00 00 00    	mov    ecx,DWORD PTR [ebp+0xc0]
  60976f:	42                   	inc    edx
  609770:	8b c1                	mov    eax,ecx
  609772:	81 fa 00 10 00 00    	cmp    edx,0x1000
  609778:	72 16                	jb     0x609790
  60977a:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  60977d:	83 c2 23             	add    edx,0x23
  609780:	2b c1                	sub    eax,ecx
  609782:	83 c0 fc             	add    eax,0xfffffffc
  609785:	83 f8 1f             	cmp    eax,0x1f
  609788:	76 06                	jbe    0x609790
  60978a:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  609790:	52                   	push   edx
  609791:	51                   	push   ecx
  609792:	e8 03 89 df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  609797:	83 c4 08             	add    esp,0x8
  60979a:	8b 35 60 5d 79 00    	mov    esi,DWORD PTR ds:0x795d60
  6097a0:	85 f6                	test   esi,esi
  6097a2:	75 2c                	jne    0x6097d0
  6097a4:	6a 0c                	push   0xc
  6097a6:	e8 0b 9a df ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  6097ab:	83 c4 04             	add    esp,0x4
  6097ae:	89 45 e4             	mov    DWORD PTR [ebp-0x1c],eax
  6097b1:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  6097b5:	85 c0                	test   eax,eax
  6097b7:	74 0b                	je     0x6097c4
  6097b9:	8b c8                	mov    ecx,eax
  6097bb:	e8 88 d5 df ff       	call   0x406d48 ; ["call resolved=0x58c0f0 "]
  6097c0:	8b f0                	mov    esi,eax
  6097c2:	eb 02                	jmp    0x6097c6
  6097c4:	33 f6                	xor    esi,esi
  6097c6:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  6097ca:	89 35 60 5d 79 00    	mov    DWORD PTR ds:0x795d60,esi
  6097d0:	8b 0d 4c 5e 79 00    	mov    ecx,DWORD PTR ds:0x795e4c
  6097d6:	85 c9                	test   ecx,ecx
  6097d8:	75 2c                	jne    0x609806
  6097da:	6a 70                	push   0x70
  6097dc:	e8 d5 99 df ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  6097e1:	83 c4 04             	add    esp,0x4
  6097e4:	89 45 e4             	mov    DWORD PTR [ebp-0x1c],eax
  6097e7:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  6097eb:	85 c0                	test   eax,eax
  6097ed:	74 0b                	je     0x6097fa
  6097ef:	8b c8                	mov    ecx,eax
  6097f1:	e8 45 d8 df ff       	call   0x40703b ; ["call resolved=0x58c850 "]
  6097f6:	8b c8                	mov    ecx,eax
  6097f8:	eb 02                	jmp    0x6097fc
  6097fa:	33 c9                	xor    ecx,ecx
  6097fc:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  609800:	89 0d 4c 5e 79 00    	mov    DWORD PTR ds:0x795e4c,ecx
  609806:	8b 01                	mov    eax,DWORD PTR [ecx]
  609808:	8d 55 f0             	lea    edx,[ebp-0x10]
  60980b:	52                   	push   edx
  60980c:	8d 55 18             	lea    edx,[ebp+0x18]
  60980f:	52                   	push   edx
  609810:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  609813:	ff d0                	call   eax
  609815:	84 c0                	test   al,al
  609817:	74 69                	je     0x609882
  609819:	8b 45 f0             	mov    eax,DWORD PTR [ebp-0x10]
  60981c:	8d 4d 30             	lea    ecx,[ebp+0x30]
  60981f:	83 c0 30             	add    eax,0x30
  609822:	83 7d 44 10          	cmp    DWORD PTR [ebp+0x44],0x10
  609826:	0f 43 4d 30          	cmovae ecx,DWORD PTR [ebp+0x30]
  60982a:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  60982e:	8b 50 10             	mov    edx,DWORD PTR [eax+0x10]
  609831:	72 02                	jb     0x609835
  609833:	8b 00                	mov    eax,DWORD PTR [eax]
  609835:	3b 55 40             	cmp    edx,DWORD PTR [ebp+0x40]
  609838:	75 48                	jne    0x609882
  60983a:	52                   	push   edx
  60983b:	51                   	push   ecx
  60983c:	50                   	push   eax
  60983d:	e8 7b b0 df ff       	call   0x4048bd ; ["call resolved=0x482fc0 "]
  609842:	83 c4 0c             	add    esp,0xc
  609845:	85 c0                	test   eax,eax
  609847:	75 39                	jne    0x609882
  609849:	8d 45 78             	lea    eax,[ebp+0x78]
  60984c:	50                   	push   eax
  60984d:	8b 45 f0             	mov    eax,DWORD PTR [ebp-0x10]
  609850:	83 c0 78             	add    eax,0x78
  609853:	50                   	push   eax
  609854:	e8 55 c9 df ff       	call   0x4061ae ; ["call resolved=0x4c0ce0 "]
  609859:	83 c4 08             	add    esp,0x8
  60985c:	84 c0                	test   al,al
  60985e:	75 22                	jne    0x609882
  609860:	8d 45 48             	lea    eax,[ebp+0x48]
  609863:	50                   	push   eax
  609864:	8b 45 f0             	mov    eax,DWORD PTR [ebp-0x10]
  609867:	83 c0 48             	add    eax,0x48
  60986a:	50                   	push   eax
  60986b:	e8 3e c9 df ff       	call   0x4061ae ; ["call resolved=0x4c0ce0 "]
  609870:	83 c4 08             	add    esp,0x8
  609873:	84 c0                	test   al,al
  609875:	75 0b                	jne    0x609882
  609877:	8b 45 f0             	mov    eax,DWORD PTR [ebp-0x10]
  60987a:	8a 40 6c             	mov    al,BYTE PTR [eax+0x6c]
  60987d:	3a 45 6c             	cmp    al,BYTE PTR [ebp+0x6c]
  609880:	74 24                	je     0x6098a6
  609882:	8b 46 04             	mov    eax,DWORD PTR [esi+0x4]
  609885:	33 ff                	xor    edi,edi
  609887:	2b 06                	sub    eax,DWORD PTR [esi]
  609889:	c1 f8 02             	sar    eax,0x2
  60988c:	85 c0                	test   eax,eax
  60988e:	74 16                	je     0x6098a6
  609890:	8b 06                	mov    eax,DWORD PTR [esi]
  609892:	8b 0c b8             	mov    ecx,DWORD PTR [eax+edi*4]
  609895:	8b 01                	mov    eax,DWORD PTR [ecx]
  609897:	ff 10                	call   DWORD PTR [eax]
  609899:	8b 46 04             	mov    eax,DWORD PTR [esi+0x4]
  60989c:	47                   	inc    edi
  60989d:	2b 06                	sub    eax,DWORD PTR [esi]
  60989f:	c1 f8 02             	sar    eax,0x2
  6098a2:	3b f8                	cmp    edi,eax
  6098a4:	72 ea                	jb     0x609890
  6098a6:	c7 45 ec 00 00 00 00 	mov    DWORD PTR [ebp-0x14],0x0
  6098ad:	e8 5f a7 df ff       	call   0x404011 ; ["call resolved=0x492cc0 "]
  6098b2:	8b 08                	mov    ecx,DWORD PTR [eax]
  6098b4:	8b 51 04             	mov    edx,DWORD PTR [ecx+0x4]
  6098b7:	8d 4d ec             	lea    ecx,[ebp-0x14]
  6098ba:	51                   	push   ecx
  6098bb:	8d 4d 18             	lea    ecx,[ebp+0x18]
  6098be:	51                   	push   ecx
  6098bf:	8b c8                	mov    ecx,eax
  6098c1:	ff d2                	call   edx
  6098c3:	84 c0                	test   al,al
  6098c5:	74 20                	je     0x6098e7
  6098c7:	8b 4d ec             	mov    ecx,DWORD PTR [ebp-0x14]
  6098ca:	8d 45 00             	lea    eax,[ebp+0x0]
  6098cd:	50                   	push   eax
  6098ce:	e8 f5 a9 df ff       	call   0x4042c8 ; ["call resolved=0x607010 "]
  6098d3:	ff 15 80 e0 79 00    	call   DWORD PTR ds:0x79e080
  6098d9:	8b 4d ec             	mov    ecx,DWORD PTR [ebp-0x14]
  6098dc:	89 41 70             	mov    DWORD PTR [ecx+0x70],eax
  6098df:	89 51 74             	mov    DWORD PTR [ecx+0x74],edx
  6098e2:	e9 47 01 00 00       	jmp    0x609a2e
  6098e7:	68 a8 00 00 00       	push   0xa8
  6098ec:	e8 c5 98 df ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  6098f1:	83 c4 04             	add    esp,0x4
  6098f4:	89 45 e4             	mov    DWORD PTR [ebp-0x1c],eax
  6098f7:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  6098fb:	85 c0                	test   eax,eax
  6098fd:	74 09                	je     0x609908
  6098ff:	8b c8                	mov    ecx,eax
  609901:	e8 ac bf df ff       	call   0x4058b2 ; ["call resolved=0x5a1d30 "]
  609906:	eb 02                	jmp    0x60990a
  609908:	33 c0                	xor    eax,eax
  60990a:	8d 4d 00             	lea    ecx,[ebp+0x0]
  60990d:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  609911:	51                   	push   ecx
  609912:	8b c8                	mov    ecx,eax
  609914:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  609917:	e8 ac a9 df ff       	call   0x4042c8 ; ["call resolved=0x607010 "]
  60991c:	ff 15 80 e0 79 00    	call   DWORD PTR ds:0x79e080
  609922:	8b 4d ec             	mov    ecx,DWORD PTR [ebp-0x14]
  609925:	89 41 70             	mov    DWORD PTR [ecx+0x70],eax
  609928:	89 51 74             	mov    DWORD PTR [ecx+0x74],edx
  60992b:	e8 e1 a6 df ff       	call   0x404011 ; ["call resolved=0x492cc0 "]
  609930:	8d 4d ec             	lea    ecx,[ebp-0x14]
  609933:	51                   	push   ecx
  609934:	8d 4d 18             	lea    ecx,[ebp+0x18]
  609937:	8b 10                	mov    edx,DWORD PTR [eax]
  609939:	51                   	push   ecx
  60993a:	8b c8                	mov    ecx,eax
  60993c:	ff 52 10             	call   DWORD PTR [edx+0x10]
  60993f:	8b 4d ec             	mov    ecx,DWORD PTR [ebp-0x14]
  609942:	8d 89 90 00 00 00    	lea    ecx,[ecx+0x90]
  609948:	e8 0a e3 df ff       	call   0x407c57 ; ["call resolved=0x4816c0 "]
  60994d:	8b 4d ec             	mov    ecx,DWORD PTR [ebp-0x14]
  609950:	8b f0                	mov    esi,eax
  609952:	0f b6 79 6c          	movzx  edi,BYTE PTR [ecx+0x6c]
  609956:	83 c1 78             	add    ecx,0x78
  609959:	e8 f9 e2 df ff       	call   0x407c57 ; ["call resolved=0x4816c0 "]
  60995e:	8b 4d ec             	mov    ecx,DWORD PTR [ebp-0x14]
  609961:	8b d8                	mov    ebx,eax
  609963:	e8 ef e2 df ff       	call   0x407c57 ; ["call resolved=0x4816c0 "]
  609968:	8b 4d ec             	mov    ecx,DWORD PTR [ebp-0x14]
  60996b:	83 c1 48             	add    ecx,0x48
  60996e:	89 45 dc             	mov    DWORD PTR [ebp-0x24],eax
  609971:	e8 e1 e2 df ff       	call   0x407c57 ; ["call resolved=0x4816c0 "]
  609976:	8b 4d ec             	mov    ecx,DWORD PTR [ebp-0x14]
  609979:	83 c1 30             	add    ecx,0x30
  60997c:	89 45 e0             	mov    DWORD PTR [ebp-0x20],eax
  60997f:	e8 d3 e2 df ff       	call   0x407c57 ; ["call resolved=0x4816c0 "]
  609984:	8b 4d ec             	mov    ecx,DWORD PTR [ebp-0x14]
  609987:	83 c1 18             	add    ecx,0x18
  60998a:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  60998d:	e8 c5 e2 df ff       	call   0x407c57 ; ["call resolved=0x4816c0 "]
  609992:	6a 5c                	push   0x5c
  609994:	68 94 5e 6f 00       	push   0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  609999:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  60999c:	e8 c5 ed 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  6099a1:	83 c4 08             	add    esp,0x8
  6099a4:	85 c0                	test   eax,eax
  6099a6:	74 12                	je     0x6099ba
  6099a8:	6a 5c                	push   0x5c
  6099aa:	68 94 5e 6f 00       	push   0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  6099af:	e8 b2 ed 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  6099b4:	83 c4 08             	add    esp,0x8
  6099b7:	40                   	inc    eax
  6099b8:	eb 05                	jmp    0x6099bf
  6099ba:	b8 94 5e 6f 00       	mov    eax,0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  6099bf:	56                   	push   esi
  6099c0:	57                   	push   edi
  6099c1:	53                   	push   ebx
  6099c2:	ff 75 dc             	push   DWORD PTR [ebp-0x24]
  6099c5:	c7 45 e4 02 00 00 00 	mov    DWORD PTR [ebp-0x1c],0x2
  6099cc:	ff 75 e0             	push   DWORD PTR [ebp-0x20]
  6099cf:	ff 75 e8             	push   DWORD PTR [ebp-0x18]
  6099d2:	ff 75 f0             	push   DWORD PTR [ebp-0x10]
  6099d5:	68 78 63 6f 00       	push   0x6f6378 ; ["SSDPSocket::insertResponseDevice"]
  6099da:	68 4f 02 00 00       	push   0x24f
  6099df:	50                   	push   eax
  6099e0:	68 f8 63 6f 00       	push   0x6f63f8 ; ["[ConntctionModule][%s:%d][%s]: New SSDP device deviceId:%s  account:%s  openid:%s  deviceName:%s  guide:%s  isOpenIdSame:%d, type:%s\n"]
  6099e5:	8d 45 e4             	lea    eax,[ebp-0x1c]
  6099e8:	50                   	push   eax
  6099e9:	8d 85 a8 00 00 00    	lea    eax,[ebp+0xa8]
  6099ef:	50                   	push   eax
  6099f0:	e8 14 d6 df ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  6099f5:	8b 95 bc 00 00 00    	mov    edx,DWORD PTR [ebp+0xbc]
  6099fb:	83 c4 34             	add    esp,0x34
  6099fe:	83 fa 10             	cmp    edx,0x10
  609a01:	72 2b                	jb     0x609a2e
  609a03:	8b 8d a8 00 00 00    	mov    ecx,DWORD PTR [ebp+0xa8]
  609a09:	42                   	inc    edx
  609a0a:	8b c1                	mov    eax,ecx
  609a0c:	81 fa 00 10 00 00    	cmp    edx,0x1000
  609a12:	72 10                	jb     0x609a24
  609a14:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  609a17:	83 c2 23             	add    edx,0x23
  609a1a:	2b c1                	sub    eax,ecx
  609a1c:	83 c0 fc             	add    eax,0xfffffffc
  609a1f:	83 f8 1f             	cmp    eax,0x1f
  609a22:	77 3e                	ja     0x609a62
  609a24:	52                   	push   edx
  609a25:	51                   	push   ecx
  609a26:	e8 6f 86 df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  609a2b:	83 c4 08             	add    esp,0x8
  609a2e:	8d 4d 00             	lea    ecx,[ebp+0x0]
  609a31:	e8 50 f4 df ff       	call   0x408e86 ; ["call resolved=0x58cc20 "]
  609a36:	8b 95 00 01 00 00    	mov    edx,DWORD PTR [ebp+0x100]
  609a3c:	83 fa 10             	cmp    edx,0x10
  609a3f:	72 31                	jb     0x609a72
  609a41:	8b 8d ec 00 00 00    	mov    ecx,DWORD PTR [ebp+0xec]
  609a47:	42                   	inc    edx
  609a48:	8b c1                	mov    eax,ecx
  609a4a:	81 fa 00 10 00 00    	cmp    edx,0x1000
  609a50:	72 16                	jb     0x609a68
  609a52:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  609a55:	83 c2 23             	add    edx,0x23
  609a58:	2b c1                	sub    eax,ecx
  609a5a:	83 c0 fc             	add    eax,0xfffffffc
  609a5d:	83 f8 1f             	cmp    eax,0x1f
  609a60:	76 06                	jbe    0x609a68
  609a62:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  609a68:	52                   	push   edx
  609a69:	51                   	push   ecx
  609a6a:	e8 2b 86 df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  609a6f:	83 c4 08             	add    esp,0x8
  609a72:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  609a75:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  609a7c:	59                   	pop    ecx
  609a7d:	5f                   	pop    edi
  609a7e:	5e                   	pop    esi
  609a7f:	5b                   	pop    ebx
  609a80:	8b 8d d8 00 00 00    	mov    ecx,DWORD PTR [ebp+0xd8]
  609a86:	33 cd                	xor    ecx,ebp
  609a88:	e8 02 aa df ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  609a8d:	8d a5 dc 00 00 00    	lea    esp,[ebp+0xdc]
  609a93:	5d                   	pop    ebp
  609a94:	c2 24 00             	ret    0x24
