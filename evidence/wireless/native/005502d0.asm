; BtFarawayDevice::DeviceInfoDataParser; image base 0x400000; static annotation only
  5502d0:	55                   	push   ebp
  5502d1:	8b ec                	mov    ebp,esp
  5502d3:	6a ff                	push   0xffffffff
  5502d5:	68 43 71 68 00       	push   0x687143
  5502da:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  5502e0:	50                   	push   eax
  5502e1:	81 ec 64 04 00 00    	sub    esp,0x464
  5502e7:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5502ec:	33 c5                	xor    eax,ebp
  5502ee:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  5502f1:	53                   	push   ebx
  5502f2:	56                   	push   esi
  5502f3:	57                   	push   edi
  5502f4:	50                   	push   eax
  5502f5:	8d 45 f4             	lea    eax,[ebp-0xc]
  5502f8:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  5502fe:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  550301:	89 8d 9c fb ff ff    	mov    DWORD PTR [ebp-0x464],ecx
  550307:	8b 75 08             	mov    esi,DWORD PTR [ebp+0x8]
  55030a:	33 c0                	xor    eax,eax
  55030c:	b9 74 8b 7a 00       	mov    ecx,0x7a8b74
  550311:	89 85 b0 fb ff ff    	mov    DWORD PTR [ebp-0x450],eax
  550317:	89 85 b4 fb ff ff    	mov    DWORD PTR [ebp-0x44c],eax
  55031d:	e8 cc 87 eb ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  550322:	0f 57 c0             	xorps  xmm0,xmm0
  550325:	c7 45 e6 00 00 00 00 	mov    DWORD PTR [ebp-0x1a],0x0
  55032c:	83 c6 0e             	add    esi,0xe
  55032f:	66 0f d6 45 de       	movq   QWORD PTR [ebp-0x22],xmm0
  550334:	66 c7 45 ea 00 00    	mov    WORD PTR [ebp-0x16],0x0
  55033a:	8d bd ec fb ff ff    	lea    edi,[ebp-0x414]
  550340:	b9 fc 00 00 00       	mov    ecx,0xfc
  550345:	c7 85 d4 fb ff ff 00 	mov    DWORD PTR [ebp-0x42c],0x0
  55034f:	f3 a5                	rep movs DWORD PTR es:[edi],DWORD PTR ds:[esi]
  550351:	8d 8d ec fb ff ff    	lea    ecx,[ebp-0x414]
  550357:	c7 85 e4 fb ff ff 00 	mov    DWORD PTR [ebp-0x41c],0x0
  550361:	c7 85 e8 fb ff ff 0f 	mov    DWORD PTR [ebp-0x418],0xf
  55036b:	8d 51 01             	lea    edx,[ecx+0x1]
  55036e:	c6 85 d4 fb ff ff 00 	mov    BYTE PTR [ebp-0x42c],0x0
  550375:	66 a5                	movs   WORD PTR es:[edi],WORD PTR ds:[esi]
  550377:	8a 01                	mov    al,BYTE PTR [ecx]
  550379:	41                   	inc    ecx
  55037a:	84 c0                	test   al,al
  55037c:	75 f9                	jne    0x550377
  55037e:	2b ca                	sub    ecx,edx
  550380:	8d 85 ec fb ff ff    	lea    eax,[ebp-0x414]
  550386:	51                   	push   ecx
  550387:	50                   	push   eax
  550388:	8d 8d d4 fb ff ff    	lea    ecx,[ebp-0x42c]
  55038e:	e8 84 40 eb ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  550393:	83 bd e8 fb ff ff 10 	cmp    DWORD PTR [ebp-0x418],0x10
  55039a:	8d 8d d4 fb ff ff    	lea    ecx,[ebp-0x42c]
  5503a0:	8b bd e4 fb ff ff    	mov    edi,DWORD PTR [ebp-0x41c]
  5503a6:	0f 43 8d d4 fb ff ff 	cmovae ecx,DWORD PTR [ebp-0x42c]
  5503ad:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  5503b4:	89 8d b4 fb ff ff    	mov    DWORD PTR [ebp-0x44c],ecx
  5503ba:	83 ff 04             	cmp    edi,0x4
  5503bd:	72 5a                	jb     0x550419
  5503bf:	8d 47 fd             	lea    eax,[edi-0x3]
  5503c2:	03 c1                	add    eax,ecx
  5503c4:	89 85 98 fb ff ff    	mov    DWORD PTR [ebp-0x468],eax
  5503ca:	2b c1                	sub    eax,ecx
  5503cc:	50                   	push   eax
  5503cd:	6a 23                	push   0x23
  5503cf:	51                   	push   ecx
  5503d0:	e8 af 83 11 00       	call   0x668784 ; ["call resolved=0x668784 "]
  5503d5:	8b f0                	mov    esi,eax
  5503d7:	83 c4 0c             	add    esp,0xc
  5503da:	85 f6                	test   esi,esi
  5503dc:	74 3b                	je     0x550419
  5503de:	8b bd 98 fb ff ff    	mov    edi,DWORD PTR [ebp-0x468]
  5503e4:	6a 04                	push   0x4
  5503e6:	68 a8 8f 6d 00       	push   0x6d8fa8 ; ["#bri"]
  5503eb:	56                   	push   esi
  5503ec:	e8 cc 44 eb ff       	call   0x4048bd ; ["call resolved=0x482fc0 "]
  5503f1:	83 c4 0c             	add    esp,0xc
  5503f4:	85 c0                	test   eax,eax
  5503f6:	0f 84 a8 00 00 00    	je     0x5504a4
  5503fc:	46                   	inc    esi
  5503fd:	8b c7                	mov    eax,edi
  5503ff:	2b c6                	sub    eax,esi
  550401:	50                   	push   eax
  550402:	6a 23                	push   0x23
  550404:	56                   	push   esi
  550405:	e8 7a 83 11 00       	call   0x668784 ; ["call resolved=0x668784 "]
  55040a:	8b f0                	mov    esi,eax
  55040c:	83 c4 0c             	add    esp,0xc
  55040f:	85 f6                	test   esi,esi
  550411:	75 d1                	jne    0x5503e4
  550413:	8b bd e4 fb ff ff    	mov    edi,DWORD PTR [ebp-0x41c]
  550419:	83 ce ff             	or     esi,0xffffffff
  55041c:	83 fe ff             	cmp    esi,0xffffffff
  55041f:	8d 8d d4 fb ff ff    	lea    ecx,[ebp-0x42c]
  550425:	0f 94 85 bb fb ff ff 	sete   BYTE PTR [ebp-0x445]
  55042c:	83 bd e8 fb ff ff 10 	cmp    DWORD PTR [ebp-0x418],0x10
  550433:	0f 43 8d d4 fb ff ff 	cmovae ecx,DWORD PTR [ebp-0x42c]
  55043a:	89 8d 98 fb ff ff    	mov    DWORD PTR [ebp-0x468],ecx
  550440:	83 ff 0a             	cmp    edi,0xa
  550443:	0f 82 29 01 00 00    	jb     0x550572
  550449:	8d 41 f7             	lea    eax,[ecx-0x9]
  55044c:	03 c7                	add    eax,edi
  55044e:	89 85 b4 fb ff ff    	mov    DWORD PTR [ebp-0x44c],eax
  550454:	2b c1                	sub    eax,ecx
  550456:	50                   	push   eax
  550457:	6a 50                	push   0x50
  550459:	51                   	push   ecx
  55045a:	e8 25 83 11 00       	call   0x668784 ; ["call resolved=0x668784 "]
  55045f:	8b f8                	mov    edi,eax
  550461:	83 c4 0c             	add    esp,0xc
  550464:	85 ff                	test   edi,edi
  550466:	0f 84 06 01 00 00    	je     0x550572
  55046c:	0f 1f 40 00          	nop    DWORD PTR [eax+0x0]
  550470:	6a 0a                	push   0xa
  550472:	68 a8 68 6c 00       	push   0x6c68a8 ; ["PAY_LOAD_1"]
  550477:	57                   	push   edi
  550478:	e8 40 44 eb ff       	call   0x4048bd ; ["call resolved=0x482fc0 "]
  55047d:	83 c4 0c             	add    esp,0xc
  550480:	85 c0                	test   eax,eax
  550482:	74 31                	je     0x5504b5
  550484:	8b 85 b4 fb ff ff    	mov    eax,DWORD PTR [ebp-0x44c]
  55048a:	47                   	inc    edi
  55048b:	2b c7                	sub    eax,edi
  55048d:	50                   	push   eax
  55048e:	6a 50                	push   0x50
  550490:	57                   	push   edi
  550491:	e8 ee 82 11 00       	call   0x668784 ; ["call resolved=0x668784 "]
  550496:	8b f8                	mov    edi,eax
  550498:	83 c4 0c             	add    esp,0xc
  55049b:	85 ff                	test   edi,edi
  55049d:	75 d1                	jne    0x550470
  55049f:	e9 ce 00 00 00       	jmp    0x550572
  5504a4:	2b b5 b4 fb ff ff    	sub    esi,DWORD PTR [ebp-0x44c]
  5504aa:	8b bd e4 fb ff ff    	mov    edi,DWORD PTR [ebp-0x41c]
  5504b0:	e9 67 ff ff ff       	jmp    0x55041c
  5504b5:	2b bd 98 fb ff ff    	sub    edi,DWORD PTR [ebp-0x468]
  5504bb:	83 ff ff             	cmp    edi,0xffffffff
  5504be:	0f 84 ae 00 00 00    	je     0x550572
  5504c4:	39 bd e4 fb ff ff    	cmp    DWORD PTR [ebp-0x41c],edi
  5504ca:	8d 85 d4 fb ff ff    	lea    eax,[ebp-0x42c]
  5504d0:	8d 8d bc fb ff ff    	lea    ecx,[ebp-0x444]
  5504d6:	c7 85 bc fb ff ff 00 	mov    DWORD PTR [ebp-0x444],0x0
  5504e0:	0f 42 bd e4 fb ff ff 	cmovb  edi,DWORD PTR [ebp-0x41c]
  5504e7:	83 bd e8 fb ff ff 10 	cmp    DWORD PTR [ebp-0x418],0x10
  5504ee:	57                   	push   edi
  5504ef:	0f 43 85 d4 fb ff ff 	cmovae eax,DWORD PTR [ebp-0x42c]
  5504f6:	50                   	push   eax
  5504f7:	c7 85 cc fb ff ff 00 	mov    DWORD PTR [ebp-0x434],0x0
  550501:	c7 85 d0 fb ff ff 0f 	mov    DWORD PTR [ebp-0x430],0xf
  55050b:	e8 07 3f eb ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  550510:	8b 95 e8 fb ff ff    	mov    edx,DWORD PTR [ebp-0x418]
  550516:	c7 85 b0 fb ff ff 02 	mov    DWORD PTR [ebp-0x450],0x2
  550520:	83 fa 10             	cmp    edx,0x10
  550523:	72 2f                	jb     0x550554
  550525:	8b 8d d4 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x42c]
  55052b:	42                   	inc    edx
  55052c:	8b c1                	mov    eax,ecx
  55052e:	81 fa 00 10 00 00    	cmp    edx,0x1000
  550534:	72 14                	jb     0x55054a
  550536:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  550539:	83 c2 23             	add    edx,0x23
  55053c:	2b c1                	sub    eax,ecx
  55053e:	83 c0 fc             	add    eax,0xfffffffc
  550541:	83 f8 1f             	cmp    eax,0x1f
  550544:	0f 87 5f 07 00 00    	ja     0x550ca9
  55054a:	52                   	push   edx
  55054b:	51                   	push   ecx
  55054c:	e8 49 1b eb ff       	call   0x40209a ; ["call resolved=0x6665be "]
  550551:	83 c4 08             	add    esp,0x8
  550554:	0f 10 85 bc fb ff ff 	movups xmm0,XMMWORD PTR [ebp-0x444]
  55055b:	0f 11 85 d4 fb ff ff 	movups XMMWORD PTR [ebp-0x42c],xmm0
  550562:	f3 0f 7e 85 cc fb ff 	movq   xmm0,QWORD PTR [ebp-0x434]
  55056a:	66 0f d6 85 e4 fb ff 	movq   QWORD PTR [ebp-0x41c],xmm0
  550572:	83 bd e8 fb ff ff 10 	cmp    DWORD PTR [ebp-0x418],0x10
  550579:	8d bd d4 fb ff ff    	lea    edi,[ebp-0x42c]
  55057f:	6a 5c                	push   0x5c
  550581:	0f 43 bd d4 fb ff ff 	cmovae edi,DWORD PTR [ebp-0x42c]
  550588:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  55058d:	e8 d4 81 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  550592:	83 c4 08             	add    esp,0x8
  550595:	85 c0                	test   eax,eax
  550597:	74 12                	je     0x5505ab
  550599:	6a 5c                	push   0x5c
  55059b:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5505a0:	e8 c1 81 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5505a5:	83 c4 08             	add    esp,0x8
  5505a8:	40                   	inc    eax
  5505a9:	eb 05                	jmp    0x5505b0
  5505ab:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5505b0:	57                   	push   edi
  5505b1:	68 b0 8f 6d 00       	push   0x6d8fb0 ; ["BtFarawayDevice::DeviceInfoDataParser"]
  5505b6:	68 66 02 00 00       	push   0x266
  5505bb:	50                   	push   eax
  5505bc:	68 e0 8f 6d 00       	push   0x6d8fe0 ; ["[ConntctionModule][%s:%d][%s]: FARAWAYBT/FARAWAYWLAN recv data is: %s\n"]
  5505c1:	8d 85 b4 fb ff ff    	lea    eax,[ebp-0x44c]
  5505c7:	c7 85 b4 fb ff ff 02 	mov    DWORD PTR [ebp-0x44c],0x2
  5505d1:	50                   	push   eax
  5505d2:	8d 85 bc fb ff ff    	lea    eax,[ebp-0x444]
  5505d8:	50                   	push   eax
  5505d9:	e8 2b 6a eb ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5505de:	8b 95 d0 fb ff ff    	mov    edx,DWORD PTR [ebp-0x430]
  5505e4:	83 c4 1c             	add    esp,0x1c
  5505e7:	83 fa 10             	cmp    edx,0x10
  5505ea:	72 2f                	jb     0x55061b
  5505ec:	8b 8d bc fb ff ff    	mov    ecx,DWORD PTR [ebp-0x444]
  5505f2:	42                   	inc    edx
  5505f3:	8b c1                	mov    eax,ecx
  5505f5:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5505fb:	72 14                	jb     0x550611
  5505fd:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  550600:	83 c2 23             	add    edx,0x23
  550603:	2b c1                	sub    eax,ecx
  550605:	83 c0 fc             	add    eax,0xfffffffc
  550608:	83 f8 1f             	cmp    eax,0x1f
  55060b:	0f 87 98 06 00 00    	ja     0x550ca9
  550611:	52                   	push   edx
  550612:	51                   	push   ecx
  550613:	e8 82 1a eb ff       	call   0x40209a ; ["call resolved=0x6665be "]
  550618:	83 c4 08             	add    esp,0x8
  55061b:	83 fe ff             	cmp    esi,0xffffffff
  55061e:	74 41                	je     0x550661
  550620:	8b 95 e8 fb ff ff    	mov    edx,DWORD PTR [ebp-0x418]
  550626:	83 fa 10             	cmp    edx,0x10
  550629:	72 2f                	jb     0x55065a
  55062b:	8b 8d d4 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x42c]
  550631:	42                   	inc    edx
  550632:	8b c1                	mov    eax,ecx
  550634:	81 fa 00 10 00 00    	cmp    edx,0x1000
  55063a:	72 14                	jb     0x550650
  55063c:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  55063f:	83 c2 23             	add    edx,0x23
  550642:	2b c1                	sub    eax,ecx
  550644:	83 c0 fc             	add    eax,0xfffffffc
  550647:	83 f8 1f             	cmp    eax,0x1f
  55064a:	0f 87 59 06 00 00    	ja     0x550ca9
  550650:	52                   	push   edx
  550651:	51                   	push   ecx
  550652:	e8 43 1a eb ff       	call   0x40209a ; ["call resolved=0x6665be "]
  550657:	83 c4 08             	add    esp,0x8
  55065a:	32 c0                	xor    al,al
  55065c:	e9 5e 06 00 00       	jmp    0x550cbf
  550661:	83 bd e8 fb ff ff 10 	cmp    DWORD PTR [ebp-0x418],0x10
  550668:	8d 8d d4 fb ff ff    	lea    ecx,[ebp-0x42c]
  55066e:	8b 85 e4 fb ff ff    	mov    eax,DWORD PTR [ebp-0x41c]
  550674:	0f 43 8d d4 fb ff ff 	cmovae ecx,DWORD PTR [ebp-0x42c]
  55067b:	03 c1                	add    eax,ecx
  55067d:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  550681:	83 bd e8 fb ff ff 10 	cmp    DWORD PTR [ebp-0x418],0x10
  550688:	8d 8d d4 fb ff ff    	lea    ecx,[ebp-0x42c]
  55068e:	50                   	push   eax
  55068f:	0f 43 8d d4 fb ff ff 	cmovae ecx,DWORD PTR [ebp-0x42c]
  550696:	51                   	push   ecx
  550697:	8d 8d 94 fb ff ff    	lea    ecx,[ebp-0x46c]
  55069d:	e8 44 4b eb ff       	call   0x4051e6 ; ["call resolved=0x4a7d20 "]
  5506a2:	6a 01                	push   0x1
  5506a4:	83 ec 28             	sub    esp,0x28
  5506a7:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  5506ab:	8b c4                	mov    eax,esp
  5506ad:	c7 40 24 00 00 00 00 	mov    DWORD PTR [eax+0x24],0x0
  5506b4:	8d 85 94 fb ff ff    	lea    eax,[ebp-0x46c]
  5506ba:	50                   	push   eax
  5506bb:	8d 85 a0 fb ff ff    	lea    eax,[ebp-0x460]
  5506c1:	50                   	push   eax
  5506c2:	e8 08 17 eb ff       	call   0x401dcf ; ["call resolved=0x4b45e0 "]
  5506c7:	83 c4 34             	add    esp,0x34
  5506ca:	8b b5 98 fb ff ff    	mov    esi,DWORD PTR [ebp-0x468]
  5506d0:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  5506d4:	85 f6                	test   esi,esi
  5506d6:	74 21                	je     0x5506f9
  5506d8:	83 cf ff             	or     edi,0xffffffff
  5506db:	8b c7                	mov    eax,edi
  5506dd:	f0 0f c1 46 04       	lock xadd DWORD PTR [esi+0x4],eax
  5506e2:	75 15                	jne    0x5506f9
  5506e4:	8b 06                	mov    eax,DWORD PTR [esi]
  5506e6:	8b ce                	mov    ecx,esi
  5506e8:	ff 10                	call   DWORD PTR [eax]
  5506ea:	f0 0f c1 7e 08       	lock xadd DWORD PTR [esi+0x8],edi
  5506ef:	4f                   	dec    edi
  5506f0:	75 07                	jne    0x5506f9
  5506f2:	8b 06                	mov    eax,DWORD PTR [esi]
  5506f4:	8b ce                	mov    ecx,esi
  5506f6:	ff 50 04             	call   DWORD PTR [eax+0x4]
  5506f9:	68 7c 7c 6c 00       	push   0x6c7c7c ; ["code"]
  5506fe:	8d 8d a0 fb ff ff    	lea    ecx,[ebp-0x460]
  550704:	e8 29 90 eb ff       	call   0x409732 ; ["call resolved=0x4a91d0 "]
  550709:	84 c0                	test   al,al
  55070b:	74 54                	je     0x550761
  55070d:	68 18 46 79 00       	push   0x794618
  550712:	8d 8d c4 fb ff ff    	lea    ecx,[ebp-0x43c]
  550718:	e8 64 5f eb ff       	call   0x406681 ; ["call resolved=0x43d750 "]
  55071d:	8b 85 b0 fb ff ff    	mov    eax,DWORD PTR [ebp-0x450]
  550723:	8d 8d a0 fb ff ff    	lea    ecx,[ebp-0x460]
  550729:	83 c8 01             	or     eax,0x1
  55072c:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  550730:	68 7c 7c 6c 00       	push   0x6c7c7c ; ["code"]
  550735:	89 85 b0 fb ff ff    	mov    DWORD PTR [ebp-0x450],eax
  55073b:	89 85 b4 fb ff ff    	mov    DWORD PTR [ebp-0x44c],eax
  550741:	e8 98 2f eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  550746:	8d 8d c4 fb ff ff    	lea    ecx,[ebp-0x43c]
  55074c:	51                   	push   ecx
  55074d:	50                   	push   eax
  55074e:	e8 a6 14 eb ff       	call   0x401bf9 ; ["call resolved=0x4c2dc0 "]
  550753:	83 c4 08             	add    esp,0x8
  550756:	c6 85 ba fb ff ff 01 	mov    BYTE PTR [ebp-0x446],0x1
  55075d:	84 c0                	test   al,al
  55075f:	75 07                	jne    0x550768
  550761:	c6 85 ba fb ff ff 00 	mov    BYTE PTR [ebp-0x446],0x0
  550768:	f6 85 b0 fb ff ff 01 	test   BYTE PTR [ebp-0x450],0x1
  55076f:	c7 45 fc 04 00 00 00 	mov    DWORD PTR [ebp-0x4],0x4
  550776:	74 1c                	je     0x550794
  550778:	8d 8d c4 fb ff ff    	lea    ecx,[ebp-0x43c]
  55077e:	e8 5b 98 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  550783:	ff b5 c4 fb ff ff    	push   DWORD PTR [ebp-0x43c]
  550789:	8d 8d cc fb ff ff    	lea    ecx,[ebp-0x434]
  55078f:	e8 ba 91 eb ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  550794:	80 bd ba fb ff ff 00 	cmp    BYTE PTR [ebp-0x446],0x0
  55079b:	0f 84 09 04 00 00    	je     0x550baa
  5507a1:	68 b4 66 6c 00       	push   0x6c66b4 ; ["data"]
  5507a6:	8d 8d a0 fb ff ff    	lea    ecx,[ebp-0x460]
  5507ac:	e8 81 8f eb ff       	call   0x409732 ; ["call resolved=0x4a91d0 "]
  5507b1:	84 c0                	test   al,al
  5507b3:	74 50                	je     0x550805
  5507b5:	68 b4 66 6c 00       	push   0x6c66b4 ; ["data"]
  5507ba:	8d 8d a0 fb ff ff    	lea    ecx,[ebp-0x460]
  5507c0:	e8 19 2f eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5507c5:	68 cc 8a 6d 00       	push   0x6d8acc ; ["forwardData"]
  5507ca:	8b c8                	mov    ecx,eax
  5507cc:	e8 e6 0a eb ff       	call   0x4012b7 ; ["call resolved=0x54d730 "]
  5507d1:	84 c0                	test   al,al
  5507d3:	74 30                	je     0x550805
  5507d5:	68 b4 66 6c 00       	push   0x6c66b4 ; ["data"]
  5507da:	8d 8d a0 fb ff ff    	lea    ecx,[ebp-0x460]
  5507e0:	e8 f9 2e eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5507e5:	68 cc 8a 6d 00       	push   0x6d8acc ; ["forwardData"]
  5507ea:	8b c8                	mov    ecx,eax
  5507ec:	e8 ed 2e eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5507f1:	8b b5 9c fb ff ff    	mov    esi,DWORD PTR [ebp-0x464]
  5507f7:	50                   	push   eax
  5507f8:	8d 8e 00 01 00 00    	lea    ecx,[esi+0x100]
  5507fe:	e8 11 53 eb ff       	call   0x405b14 ; ["call resolved=0x4a7fe0 "]
  550803:	eb 06                	jmp    0x55080b
  550805:	8b b5 9c fb ff ff    	mov    esi,DWORD PTR [ebp-0x464]
  55080b:	68 b4 66 6c 00       	push   0x6c66b4 ; ["data"]
  550810:	8d 8d a0 fb ff ff    	lea    ecx,[ebp-0x460]
  550816:	e8 17 8f eb ff       	call   0x409732 ; ["call resolved=0x4a91d0 "]
  55081b:	84 c0                	test   al,al
  55081d:	0f 84 8f 01 00 00    	je     0x5509b2
  550823:	68 b4 66 6c 00       	push   0x6c66b4 ; ["data"]
  550828:	8d 8d a0 fb ff ff    	lea    ecx,[ebp-0x460]
  55082e:	e8 ab 2e eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  550833:	68 b4 8a 6d 00       	push   0x6d8ab4 ; ["connectCount"]
  550838:	8b c8                	mov    ecx,eax
  55083a:	e8 ad 34 eb ff       	call   0x403cec ; ["call resolved=0x54d820 "]
  55083f:	84 c0                	test   al,al
  550841:	0f 84 6b 01 00 00    	je     0x5509b2
  550847:	68 b4 66 6c 00       	push   0x6c66b4 ; ["data"]
  55084c:	8d 8d a0 fb ff ff    	lea    ecx,[ebp-0x460]
  550852:	e8 87 2e eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  550857:	68 b4 8a 6d 00       	push   0x6d8ab4 ; ["connectCount"]
  55085c:	8b c8                	mov    ecx,eax
  55085e:	e8 7b 2e eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  550863:	8b c8                	mov    ecx,eax
  550865:	e8 4d 32 eb ff       	call   0x403ab7 ; ["call resolved=0x4a9c50 "]
  55086a:	8b f8                	mov    edi,eax
  55086c:	6a 5c                	push   0x5c
  55086e:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  550873:	89 be 6c 01 00 00    	mov    DWORD PTR [esi+0x16c],edi
  550879:	e8 e8 7e 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  55087e:	83 c4 08             	add    esp,0x8
  550881:	85 c0                	test   eax,eax
  550883:	74 12                	je     0x550897
  550885:	6a 5c                	push   0x5c
  550887:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  55088c:	e8 d5 7e 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  550891:	83 c4 08             	add    esp,0x8
  550894:	40                   	inc    eax
  550895:	eb 05                	jmp    0x55089c
  550897:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  55089c:	57                   	push   edi
  55089d:	68 b0 8f 6d 00       	push   0x6d8fb0 ; ["BtFarawayDevice::DeviceInfoDataParser"]
  5508a2:	68 77 02 00 00       	push   0x277
  5508a7:	50                   	push   eax
  5508a8:	68 38 90 6d 00       	push   0x6d9038 ; ["[ConntctionModule][%s:%d][%s]: moblie device connect bt count is: %d\n"]
  5508ad:	8d 85 b4 fb ff ff    	lea    eax,[ebp-0x44c]
  5508b3:	c7 85 b4 fb ff ff 02 	mov    DWORD PTR [ebp-0x44c],0x2
  5508bd:	50                   	push   eax
  5508be:	8d 85 bc fb ff ff    	lea    eax,[ebp-0x444]
  5508c4:	50                   	push   eax
  5508c5:	e8 3f 67 eb ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5508ca:	8b 95 d0 fb ff ff    	mov    edx,DWORD PTR [ebp-0x430]
  5508d0:	83 c4 1c             	add    esp,0x1c
  5508d3:	83 fa 10             	cmp    edx,0x10
  5508d6:	72 2f                	jb     0x550907
  5508d8:	8b 8d bc fb ff ff    	mov    ecx,DWORD PTR [ebp-0x444]
  5508de:	42                   	inc    edx
  5508df:	8b c1                	mov    eax,ecx
  5508e1:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5508e7:	72 14                	jb     0x5508fd
  5508e9:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5508ec:	83 c2 23             	add    edx,0x23
  5508ef:	2b c1                	sub    eax,ecx
  5508f1:	83 c0 fc             	add    eax,0xfffffffc
  5508f4:	83 f8 1f             	cmp    eax,0x1f
  5508f7:	0f 87 7f 02 00 00    	ja     0x550b7c
  5508fd:	52                   	push   edx
  5508fe:	51                   	push   ecx
  5508ff:	e8 96 17 eb ff       	call   0x40209a ; ["call resolved=0x6665be "]
  550904:	83 c4 08             	add    esp,0x8
  550907:	83 be 6c 01 00 00 02 	cmp    DWORD PTR [esi+0x16c],0x2
  55090e:	8b ce                	mov    ecx,esi
  550910:	8b 06                	mov    eax,DWORD PTR [esi]
  550912:	7d 14                	jge    0x550928
  550914:	6a 00                	push   0x0
  550916:	c6 86 68 01 00 00 00 	mov    BYTE PTR [esi+0x168],0x0
  55091d:	ff 90 b8 00 00 00    	call   DWORD PTR [eax+0xb8]
  550923:	e9 1e 01 00 00       	jmp    0x550a46
  550928:	75 29                	jne    0x550953
  55092a:	8b 40 64             	mov    eax,DWORD PTR [eax+0x64]
  55092d:	ff d0                	call   eax
  55092f:	8b 0e                	mov    ecx,DWORD PTR [esi]
  550931:	c6 86 68 01 00 00 01 	mov    BYTE PTR [esi+0x168],0x1
  550938:	8b 91 b8 00 00 00    	mov    edx,DWORD PTR [ecx+0xb8]
  55093e:	8b ce                	mov    ecx,esi
  550940:	84 c0                	test   al,al
  550942:	74 09                	je     0x55094d
  550944:	6a 00                	push   0x0
  550946:	ff d2                	call   edx
  550948:	e9 f9 00 00 00       	jmp    0x550a46
  55094d:	6a 01                	push   0x1
  55094f:	ff d2                	call   edx
  550951:	eb 0f                	jmp    0x550962
  550953:	6a 01                	push   0x1
  550955:	c6 86 68 01 00 00 01 	mov    BYTE PTR [esi+0x168],0x1
  55095c:	ff 90 b8 00 00 00    	call   DWORD PTR [eax+0xb8]
  550962:	8d 8d a0 fb ff ff    	lea    ecx,[ebp-0x460]
  550968:	e8 aa 8a eb ff       	call   0x409417 ; ["call resolved=0x46f270 "]
  55096d:	8b 95 e8 fb ff ff    	mov    edx,DWORD PTR [ebp-0x418]
  550973:	83 fa 10             	cmp    edx,0x10
  550976:	0f 82 de fc ff ff    	jb     0x55065a
  55097c:	8b 8d d4 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x42c]
  550982:	42                   	inc    edx
  550983:	8b c1                	mov    eax,ecx
  550985:	81 fa 00 10 00 00    	cmp    edx,0x1000
  55098b:	72 14                	jb     0x5509a1
  55098d:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  550990:	83 c2 23             	add    edx,0x23
  550993:	2b c1                	sub    eax,ecx
  550995:	83 c0 fc             	add    eax,0xfffffffc
  550998:	83 f8 1f             	cmp    eax,0x1f
  55099b:	0f 87 db 01 00 00    	ja     0x550b7c
  5509a1:	52                   	push   edx
  5509a2:	51                   	push   ecx
  5509a3:	e8 f2 16 eb ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5509a8:	83 c4 08             	add    esp,0x8
  5509ab:	32 c0                	xor    al,al
  5509ad:	e9 0d 03 00 00       	jmp    0x550cbf
  5509b2:	6a 5c                	push   0x5c
  5509b4:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5509b9:	e8 a8 7d 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5509be:	83 c4 08             	add    esp,0x8
  5509c1:	85 c0                	test   eax,eax
  5509c3:	74 12                	je     0x5509d7
  5509c5:	6a 5c                	push   0x5c
  5509c7:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5509cc:	e8 95 7d 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5509d1:	83 c4 08             	add    esp,0x8
  5509d4:	40                   	inc    eax
  5509d5:	eb 05                	jmp    0x5509dc
  5509d7:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5509dc:	68 b0 8f 6d 00       	push   0x6d8fb0 ; ["BtFarawayDevice::DeviceInfoDataParser"]
  5509e1:	68 99 02 00 00       	push   0x299
  5509e6:	50                   	push   eax
  5509e7:	68 90 90 6d 00       	push   0x6d9090 ; ["[ConntctionModule][%s:%d][%s]: moblie device return data don't contain connectCount\n"]
  5509ec:	8d 85 b4 fb ff ff    	lea    eax,[ebp-0x44c]
  5509f2:	c7 85 b4 fb ff ff 02 	mov    DWORD PTR [ebp-0x44c],0x2
  5509fc:	50                   	push   eax
  5509fd:	8d 85 bc fb ff ff    	lea    eax,[ebp-0x444]
  550a03:	50                   	push   eax
  550a04:	e8 00 66 eb ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  550a09:	8b 95 d0 fb ff ff    	mov    edx,DWORD PTR [ebp-0x430]
  550a0f:	83 c4 18             	add    esp,0x18
  550a12:	83 fa 10             	cmp    edx,0x10
  550a15:	72 2f                	jb     0x550a46
  550a17:	8b 8d bc fb ff ff    	mov    ecx,DWORD PTR [ebp-0x444]
  550a1d:	42                   	inc    edx
  550a1e:	8b c1                	mov    eax,ecx
  550a20:	81 fa 00 10 00 00    	cmp    edx,0x1000
  550a26:	72 14                	jb     0x550a3c
  550a28:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  550a2b:	83 c2 23             	add    edx,0x23
  550a2e:	2b c1                	sub    eax,ecx
  550a30:	83 c0 fc             	add    eax,0xfffffffc
  550a33:	83 f8 1f             	cmp    eax,0x1f
  550a36:	0f 87 40 01 00 00    	ja     0x550b7c
  550a3c:	52                   	push   edx
  550a3d:	51                   	push   ecx
  550a3e:	e8 57 16 eb ff       	call   0x40209a ; ["call resolved=0x6665be "]
  550a43:	83 c4 08             	add    esp,0x8
  550a46:	68 b4 66 6c 00       	push   0x6c66b4 ; ["data"]
  550a4b:	8d 8d a0 fb ff ff    	lea    ecx,[ebp-0x460]
  550a51:	c6 85 bb fb ff ff 01 	mov    BYTE PTR [ebp-0x445],0x1
  550a58:	e8 d5 8c eb ff       	call   0x409732 ; ["call resolved=0x4a91d0 "]
  550a5d:	84 c0                	test   al,al
  550a5f:	0f 84 45 01 00 00    	je     0x550baa
  550a65:	68 b4 66 6c 00       	push   0x6c66b4 ; ["data"]
  550a6a:	8d 8d a0 fb ff ff    	lea    ecx,[ebp-0x460]
  550a70:	e8 69 2c eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  550a75:	68 6c 4d 6c 00       	push   0x6c4d6c ; ["openId"]
  550a7a:	8b c8                	mov    ecx,eax
  550a7c:	c6 85 bb fb ff ff 01 	mov    BYTE PTR [ebp-0x445],0x1
  550a83:	e8 d3 2c eb ff       	call   0x40375b ; ["call resolved=0x54d550 "]
  550a88:	84 c0                	test   al,al
  550a8a:	0f 84 1a 01 00 00    	je     0x550baa
  550a90:	e8 9f 6c eb ff       	call   0x407734 ; ["call resolved=0x492af0 "]
  550a95:	83 c0 18             	add    eax,0x18
  550a98:	8d 8d c4 fb ff ff    	lea    ecx,[ebp-0x43c]
  550a9e:	50                   	push   eax
  550a9f:	e8 6c 40 eb ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  550aa4:	68 b4 66 6c 00       	push   0x6c66b4 ; ["data"]
  550aa9:	8d 8d a0 fb ff ff    	lea    ecx,[ebp-0x460]
  550aaf:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  550ab3:	e8 26 2c eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  550ab8:	68 6c 4d 6c 00       	push   0x6c4d6c ; ["openId"]
  550abd:	8b c8                	mov    ecx,eax
  550abf:	e8 1a 2c eb ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  550ac4:	8d 8d c4 fb ff ff    	lea    ecx,[ebp-0x43c]
  550aca:	51                   	push   ecx
  550acb:	50                   	push   eax
  550acc:	e8 28 11 eb ff       	call   0x401bf9 ; ["call resolved=0x4c2dc0 "]
  550ad1:	83 c4 08             	add    esp,0x8
  550ad4:	88 85 ba fb ff ff    	mov    BYTE PTR [ebp-0x446],al
  550ada:	8d 8d c4 fb ff ff    	lea    ecx,[ebp-0x43c]
  550ae0:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  550ae4:	e8 2e 89 eb ff       	call   0x409417 ; ["call resolved=0x46f270 "]
  550ae9:	80 bd ba fb ff ff 00 	cmp    BYTE PTR [ebp-0x446],0x0
  550af0:	0f 85 a6 00 00 00    	jne    0x550b9c
  550af6:	6a 5c                	push   0x5c
  550af8:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  550afd:	e8 64 7c 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  550b02:	83 c4 08             	add    esp,0x8
  550b05:	85 c0                	test   eax,eax
  550b07:	74 12                	je     0x550b1b
  550b09:	6a 5c                	push   0x5c
  550b0b:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  550b10:	e8 51 7c 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  550b15:	83 c4 08             	add    esp,0x8
  550b18:	40                   	inc    eax
  550b19:	eb 05                	jmp    0x550b20
  550b1b:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  550b20:	68 b0 8f 6d 00       	push   0x6d8fb0 ; ["BtFarawayDevice::DeviceInfoDataParser"]
  550b25:	68 a0 02 00 00       	push   0x2a0
  550b2a:	50                   	push   eax
  550b2b:	68 f8 90 6d 00       	push   0x6d90f8 ; ["[ConntctionModule][%s:%d][%s]: moblie device openId is different of PC\n"]
  550b30:	8d 85 b4 fb ff ff    	lea    eax,[ebp-0x44c]
  550b36:	c7 85 b4 fb ff ff 02 	mov    DWORD PTR [ebp-0x44c],0x2
  550b40:	50                   	push   eax
  550b41:	8d 85 bc fb ff ff    	lea    eax,[ebp-0x444]
  550b47:	50                   	push   eax
  550b48:	e8 bc 64 eb ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  550b4d:	8b 95 d0 fb ff ff    	mov    edx,DWORD PTR [ebp-0x430]
  550b53:	83 c4 18             	add    esp,0x18
  550b56:	83 fa 10             	cmp    edx,0x10
  550b59:	72 31                	jb     0x550b8c
  550b5b:	8b 8d bc fb ff ff    	mov    ecx,DWORD PTR [ebp-0x444]
  550b61:	42                   	inc    edx
  550b62:	8b c1                	mov    eax,ecx
  550b64:	81 fa 00 10 00 00    	cmp    edx,0x1000
  550b6a:	72 16                	jb     0x550b82
  550b6c:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  550b6f:	83 c2 23             	add    edx,0x23
  550b72:	2b c1                	sub    eax,ecx
  550b74:	83 c0 fc             	add    eax,0xfffffffc
  550b77:	83 f8 1f             	cmp    eax,0x1f
  550b7a:	76 06                	jbe    0x550b82
  550b7c:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  550b82:	52                   	push   edx
  550b83:	51                   	push   ecx
  550b84:	e8 11 15 eb ff       	call   0x40209a ; ["call resolved=0x6665be "]
  550b89:	83 c4 08             	add    esp,0x8
  550b8c:	c6 86 a8 01 00 00 00 	mov    BYTE PTR [esi+0x1a8],0x0
  550b93:	c6 85 bb fb ff ff 00 	mov    BYTE PTR [ebp-0x445],0x0
  550b9a:	eb 0e                	jmp    0x550baa
  550b9c:	c6 86 a8 01 00 00 01 	mov    BYTE PTR [esi+0x1a8],0x1
  550ba3:	c6 85 bb fb ff ff 01 	mov    BYTE PTR [ebp-0x445],0x1
  550baa:	8d 8d a0 fb ff ff    	lea    ecx,[ebp-0x460]
  550bb0:	e8 29 94 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  550bb5:	ff b5 a0 fb ff ff    	push   DWORD PTR [ebp-0x460]
  550bbb:	8d 8d a8 fb ff ff    	lea    ecx,[ebp-0x458]
  550bc1:	e8 88 8d eb ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  550bc6:	e9 b2 00 00 00       	jmp    0x550c7d
  550bcb:	6a 5c                	push   0x5c
  550bcd:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  550bd2:	e8 8f 7b 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  550bd7:	83 c4 08             	add    esp,0x8
  550bda:	85 c0                	test   eax,eax
  550bdc:	74 12                	je     0x550bf0
  550bde:	6a 5c                	push   0x5c
  550be0:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  550be5:	e8 7c 7b 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  550bea:	83 c4 08             	add    esp,0x8
  550bed:	40                   	inc    eax
  550bee:	eb 05                	jmp    0x550bf5
  550bf0:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  550bf5:	68 b0 8f 6d 00       	push   0x6d8fb0 ; ["BtFarawayDevice::DeviceInfoDataParser"]
  550bfa:	68 ae 02 00 00       	push   0x2ae
  550bff:	50                   	push   eax
  550c00:	68 70 43 6d 00       	push   0x6d4370 ; ["[ConntctionModule][%s:%d][%s]:json parse_error\n"]
  550c05:	8d 85 b4 fb ff ff    	lea    eax,[ebp-0x44c]
  550c0b:	c7 85 b4 fb ff ff 02 	mov    DWORD PTR [ebp-0x44c],0x2
  550c15:	50                   	push   eax
  550c16:	8d 85 bc fb ff ff    	lea    eax,[ebp-0x444]
  550c1c:	50                   	push   eax
  550c1d:	e8 e7 63 eb ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  550c22:	8b 8d d0 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x430]
  550c28:	83 c4 18             	add    esp,0x18
  550c2b:	83 f9 10             	cmp    ecx,0x10
  550c2e:	0f 93 c0             	setae  al
  550c31:	84 c0                	test   al,al
  550c33:	74 2f                	je     0x550c64
  550c35:	8b 85 bc fb ff ff    	mov    eax,DWORD PTR [ebp-0x444]
  550c3b:	41                   	inc    ecx
  550c3c:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  550c42:	72 16                	jb     0x550c5a
  550c44:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  550c47:	83 c1 23             	add    ecx,0x23
  550c4a:	2b c2                	sub    eax,edx
  550c4c:	83 c0 fc             	add    eax,0xfffffffc
  550c4f:	83 f8 1f             	cmp    eax,0x1f
  550c52:	0f 87 24 ff ff ff    	ja     0x550b7c
  550c58:	8b c2                	mov    eax,edx
  550c5a:	51                   	push   ecx
  550c5b:	50                   	push   eax
  550c5c:	e8 39 14 eb ff       	call   0x40209a ; ["call resolved=0x6665be "]
  550c61:	83 c4 08             	add    esp,0x8
  550c64:	c6 85 ba fb ff ff 00 	mov    BYTE PTR [ebp-0x446],0x0
  550c6b:	b8 71 0c 55 00       	mov    eax,0x550c71
  550c70:	c3                   	ret
  550c71:	8a 85 ba fb ff ff    	mov    al,BYTE PTR [ebp-0x446]
  550c77:	88 85 bb fb ff ff    	mov    BYTE PTR [ebp-0x445],al
  550c7d:	8b 95 e8 fb ff ff    	mov    edx,DWORD PTR [ebp-0x418]
  550c83:	83 fa 10             	cmp    edx,0x10
  550c86:	72 31                	jb     0x550cb9
  550c88:	8b 8d d4 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x42c]
  550c8e:	42                   	inc    edx
  550c8f:	8b c1                	mov    eax,ecx
  550c91:	81 fa 00 10 00 00    	cmp    edx,0x1000
  550c97:	72 16                	jb     0x550caf
  550c99:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  550c9c:	83 c2 23             	add    edx,0x23
  550c9f:	2b c1                	sub    eax,ecx
  550ca1:	83 c0 fc             	add    eax,0xfffffffc
  550ca4:	83 f8 1f             	cmp    eax,0x1f
  550ca7:	76 06                	jbe    0x550caf
  550ca9:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  550caf:	52                   	push   edx
  550cb0:	51                   	push   ecx
  550cb1:	e8 e4 13 eb ff       	call   0x40209a ; ["call resolved=0x6665be "]
  550cb6:	83 c4 08             	add    esp,0x8
  550cb9:	8a 85 bb fb ff ff    	mov    al,BYTE PTR [ebp-0x445]
  550cbf:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  550cc2:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  550cc9:	59                   	pop    ecx
  550cca:	5f                   	pop    edi
  550ccb:	5e                   	pop    esi
  550ccc:	5b                   	pop    ebx
  550ccd:	8b 4d ec             	mov    ecx,DWORD PTR [ebp-0x14]
  550cd0:	33 cd                	xor    ecx,ebp
  550cd2:	e8 b8 37 eb ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  550cd7:	8b e5                	mov    esp,ebp
  550cd9:	5d                   	pop    ebp
  550cda:	c2 04 00             	ret    0x4
