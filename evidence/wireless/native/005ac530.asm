; MsgHandler::cancelSSDPScan; image base 0x400000; static annotation only
  5ac530:	55                   	push   ebp
  5ac531:	8b ec                	mov    ebp,esp
  5ac533:	6a ff                	push   0xffffffff
  5ac535:	68 15 1c 69 00       	push   0x691c15
  5ac53a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  5ac540:	50                   	push   eax
  5ac541:	83 ec 70             	sub    esp,0x70
  5ac544:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5ac549:	33 c5                	xor    eax,ebp
  5ac54b:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  5ac54e:	53                   	push   ebx
  5ac54f:	56                   	push   esi
  5ac550:	57                   	push   edi
  5ac551:	50                   	push   eax
  5ac552:	8d 45 f4             	lea    eax,[ebp-0xc]
  5ac555:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  5ac55b:	8b f1                	mov    esi,ecx
  5ac55d:	8b 5d 08             	mov    ebx,DWORD PTR [ebp+0x8]
  5ac560:	b9 c8 98 7a 00       	mov    ecx,0x7a98c8
  5ac565:	89 5d a4             	mov    DWORD PTR [ebp-0x5c],ebx
  5ac568:	e8 81 c5 e5 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5ac56d:	6a 5c                	push   0x5c
  5ac56f:	68 34 00 6e 00       	push   0x6e0034 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\MsgHandler\\MsgHandler.cpp"]
  5ac574:	e8 ed c1 0b 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5ac579:	83 c4 08             	add    esp,0x8
  5ac57c:	85 c0                	test   eax,eax
  5ac57e:	74 12                	je     0x5ac592
  5ac580:	6a 5c                	push   0x5c
  5ac582:	68 34 00 6e 00       	push   0x6e0034 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\MsgHandler\\MsgHandler.cpp"]
  5ac587:	e8 da c1 0b 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5ac58c:	83 c4 08             	add    esp,0x8
  5ac58f:	40                   	inc    eax
  5ac590:	eb 05                	jmp    0x5ac597
  5ac592:	b8 34 00 6e 00       	mov    eax,0x6e0034 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\MsgHandler\\MsgHandler.cpp"]
  5ac597:	68 18 1a 6e 00       	push   0x6e1a18 ; ["MsgHandler::InitFunctionMap::<lambda_407dc132302f93c66c45ac7d8b9d967a>::operator ()"]
  5ac59c:	68 e3 04 00 00       	push   0x4e3
  5ac5a1:	50                   	push   eax
  5ac5a2:	68 7c 1a 6e 00       	push   0x6e1a7c ; ["[ConntctionModule][%s:%d][%s]:Stop the SSDP scanning..."]
  5ac5a7:	8d 45 a4             	lea    eax,[ebp-0x5c]
  5ac5aa:	c7 45 a4 02 00 00 00 	mov    DWORD PTR [ebp-0x5c],0x2
  5ac5b1:	50                   	push   eax
  5ac5b2:	8d 45 d8             	lea    eax,[ebp-0x28]
  5ac5b5:	50                   	push   eax
  5ac5b6:	e8 4e aa e5 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5ac5bb:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  5ac5be:	83 c4 18             	add    esp,0x18
  5ac5c1:	83 fa 10             	cmp    edx,0x10
  5ac5c4:	72 2c                	jb     0x5ac5f2
  5ac5c6:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  5ac5c9:	42                   	inc    edx
  5ac5ca:	8b c1                	mov    eax,ecx
  5ac5cc:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5ac5d2:	72 14                	jb     0x5ac5e8
  5ac5d4:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5ac5d7:	83 c2 23             	add    edx,0x23
  5ac5da:	2b c1                	sub    eax,ecx
  5ac5dc:	83 c0 fc             	add    eax,0xfffffffc
  5ac5df:	83 f8 1f             	cmp    eax,0x1f
  5ac5e2:	0f 87 87 01 00 00    	ja     0x5ac76f
  5ac5e8:	52                   	push   edx
  5ac5e9:	51                   	push   ecx
  5ac5ea:	e8 ab 5a e5 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5ac5ef:	83 c4 08             	add    esp,0x8
  5ac5f2:	8b 06                	mov    eax,DWORD PTR [esi]
  5ac5f4:	8a 40 1c             	mov    al,BYTE PTR [eax+0x1c]
  5ac5f7:	90                   	nop
  5ac5f8:	84 c0                	test   al,al
  5ac5fa:	0f 85 96 01 00 00    	jne    0x5ac796
  5ac600:	6a 00                	push   0x0
  5ac602:	8d 4d 94             	lea    ecx,[ebp-0x6c]
  5ac605:	e8 b8 82 e5 ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  5ac60a:	83 ec 10             	sub    esp,0x10
  5ac60d:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  5ac614:	8b c4                	mov    eax,esp
  5ac616:	89 65 a4             	mov    DWORD PTR [ebp-0x5c],esp
  5ac619:	c6 00 05             	mov    BYTE PTR [eax],0x5
  5ac61c:	c7 40 08 00 00 00 00 	mov    DWORD PTR [eax+0x8],0x0
  5ac623:	c7 40 0c 00 00 00 00 	mov    DWORD PTR [eax+0xc],0x0
  5ac62a:	68 f4 13 6c 00       	push   0x6c13f4 ; ["error"]
  5ac62f:	8d 4d 94             	lea    ecx,[ebp-0x6c]
  5ac632:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  5ac636:	e8 a3 70 e5 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5ac63b:	8b c8                	mov    ecx,eax
  5ac63d:	c6 45 fc 00          	mov    BYTE PTR [ebp-0x4],0x0
  5ac641:	e8 3f 7e e5 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5ac646:	83 ec 10             	sub    esp,0x10
  5ac649:	8b cc                	mov    ecx,esp
  5ac64b:	89 65 a4             	mov    DWORD PTR [ebp-0x5c],esp
  5ac64e:	68 02 1c 6c 00       	push   0x6c1c02
  5ac653:	e8 51 5a e5 ff       	call   0x4020a9 ; ["call resolved=0x43d1a0 "]
  5ac658:	68 20 69 6c 00       	push   0x6c6920 ; ["error_message"]
  5ac65d:	8d 4d 94             	lea    ecx,[ebp-0x6c]
  5ac660:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  5ac664:	e8 75 70 e5 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5ac669:	8b c8                	mov    ecx,eax
  5ac66b:	c6 45 fc 00          	mov    BYTE PTR [ebp-0x4],0x0
  5ac66f:	e8 11 7e e5 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5ac674:	6a 5c                	push   0x5c
  5ac676:	68 34 00 6e 00       	push   0x6e0034 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\MsgHandler\\MsgHandler.cpp"]
  5ac67b:	e8 e6 c0 0b 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5ac680:	83 c4 08             	add    esp,0x8
  5ac683:	85 c0                	test   eax,eax
  5ac685:	74 12                	je     0x5ac699
  5ac687:	6a 5c                	push   0x5c
  5ac689:	68 34 00 6e 00       	push   0x6e0034 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\MsgHandler\\MsgHandler.cpp"]
  5ac68e:	e8 d3 c0 0b 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5ac693:	83 c4 08             	add    esp,0x8
  5ac696:	40                   	inc    eax
  5ac697:	eb 05                	jmp    0x5ac69e
  5ac699:	b8 34 00 6e 00       	mov    eax,0x6e0034 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\MsgHandler\\MsgHandler.cpp"]
  5ac69e:	68 18 1a 6e 00       	push   0x6e1a18 ; ["MsgHandler::InitFunctionMap::<lambda_407dc132302f93c66c45ac7d8b9d967a>::operator ()"]
  5ac6a3:	68 ed 04 00 00       	push   0x4ed
  5ac6a8:	50                   	push   eax
  5ac6a9:	68 c0 1a 6e 00       	push   0x6e1ac0 ; ["[ConntctionModule][%s:%d][%s]:leave stopSSDPScan handler ..."]
  5ac6ae:	8d 45 a4             	lea    eax,[ebp-0x5c]
  5ac6b1:	c7 45 a4 02 00 00 00 	mov    DWORD PTR [ebp-0x5c],0x2
  5ac6b8:	50                   	push   eax
  5ac6b9:	8d 45 c0             	lea    eax,[ebp-0x40]
  5ac6bc:	50                   	push   eax
  5ac6bd:	e8 47 a9 e5 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5ac6c2:	8b 55 d4             	mov    edx,DWORD PTR [ebp-0x2c]
  5ac6c5:	83 c4 18             	add    esp,0x18
  5ac6c8:	83 fa 10             	cmp    edx,0x10
  5ac6cb:	72 2c                	jb     0x5ac6f9
  5ac6cd:	8b 4d c0             	mov    ecx,DWORD PTR [ebp-0x40]
  5ac6d0:	42                   	inc    edx
  5ac6d1:	8b c1                	mov    eax,ecx
  5ac6d3:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5ac6d9:	72 14                	jb     0x5ac6ef
  5ac6db:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5ac6de:	83 c2 23             	add    edx,0x23
  5ac6e1:	2b c1                	sub    eax,ecx
  5ac6e3:	83 c0 fc             	add    eax,0xfffffffc
  5ac6e6:	83 f8 1f             	cmp    eax,0x1f
  5ac6e9:	0f 87 80 00 00 00    	ja     0x5ac76f
  5ac6ef:	52                   	push   edx
  5ac6f0:	51                   	push   ecx
  5ac6f1:	e8 a4 59 e5 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5ac6f6:	83 c4 08             	add    esp,0x8
  5ac6f9:	6a 00                	push   0x0
  5ac6fb:	6a 00                	push   0x0
  5ac6fd:	6a 20                	push   0x20
  5ac6ff:	6a ff                	push   0xffffffff
  5ac701:	8d 45 d8             	lea    eax,[ebp-0x28]
  5ac704:	50                   	push   eax
  5ac705:	8d 4d 94             	lea    ecx,[ebp-0x6c]
  5ac708:	e8 11 c1 e5 ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  5ac70d:	8b d0                	mov    edx,eax
  5ac70f:	83 7a 14 10          	cmp    DWORD PTR [edx+0x14],0x10
  5ac713:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  5ac717:	72 02                	jb     0x5ac71b
  5ac719:	8b 12                	mov    edx,DWORD PTR [edx]
  5ac71b:	8b ca                	mov    ecx,edx
  5ac71d:	c7 03 00 00 00 00    	mov    DWORD PTR [ebx],0x0
  5ac723:	c7 43 10 00 00 00 00 	mov    DWORD PTR [ebx+0x10],0x0
  5ac72a:	c7 43 14 0f 00 00 00 	mov    DWORD PTR [ebx+0x14],0xf
  5ac731:	c6 03 00             	mov    BYTE PTR [ebx],0x0
  5ac734:	8d 71 01             	lea    esi,[ecx+0x1]
  5ac737:	8a 01                	mov    al,BYTE PTR [ecx]
  5ac739:	41                   	inc    ecx
  5ac73a:	84 c0                	test   al,al
  5ac73c:	75 f9                	jne    0x5ac737
  5ac73e:	2b ce                	sub    ecx,esi
  5ac740:	51                   	push   ecx
  5ac741:	52                   	push   edx
  5ac742:	8b cb                	mov    ecx,ebx
  5ac744:	e8 ce 7c e5 ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  5ac749:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  5ac74c:	83 fa 10             	cmp    edx,0x10
  5ac74f:	72 2e                	jb     0x5ac77f
  5ac751:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  5ac754:	42                   	inc    edx
  5ac755:	8b c1                	mov    eax,ecx
  5ac757:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5ac75d:	72 16                	jb     0x5ac775
  5ac75f:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5ac762:	83 c2 23             	add    edx,0x23
  5ac765:	2b c1                	sub    eax,ecx
  5ac767:	83 c0 fc             	add    eax,0xfffffffc
  5ac76a:	83 f8 1f             	cmp    eax,0x1f
  5ac76d:	76 06                	jbe    0x5ac775
  5ac76f:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5ac775:	52                   	push   edx
  5ac776:	51                   	push   ecx
  5ac777:	e8 1e 59 e5 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5ac77c:	83 c4 08             	add    esp,0x8
  5ac77f:	c7 45 e8 00 00 00 00 	mov    DWORD PTR [ebp-0x18],0x0
  5ac786:	c7 45 ec 0f 00 00 00 	mov    DWORD PTR [ebp-0x14],0xf
  5ac78d:	c6 45 d8 00          	mov    BYTE PTR [ebp-0x28],0x0
  5ac791:	e9 5c 03 00 00       	jmp    0x5acaf2
  5ac796:	8b 06                	mov    eax,DWORD PTR [esi]
  5ac798:	8d 48 1c             	lea    ecx,[eax+0x1c]
  5ac79b:	32 c0                	xor    al,al
  5ac79d:	86 01                	xchg   BYTE PTR [ecx],al
  5ac79f:	e8 16 75 e5 ff       	call   0x403cba ; ["call resolved=0x5cec20 "]
  5ac7a4:	8b 48 08             	mov    ecx,DWORD PTR [eax+0x8]
  5ac7a7:	2b 48 04             	sub    ecx,DWORD PTR [eax+0x4]
  5ac7aa:	c1 f9 02             	sar    ecx,0x2
  5ac7ad:	83 f9 01             	cmp    ecx,0x1
  5ac7b0:	0f 83 5b 01 00 00    	jae    0x5ac911
  5ac7b6:	6a 00                	push   0x0
  5ac7b8:	8d 4d 94             	lea    ecx,[ebp-0x6c]
  5ac7bb:	e8 02 81 e5 ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  5ac7c0:	83 ec 10             	sub    esp,0x10
  5ac7c3:	c7 45 fc 04 00 00 00 	mov    DWORD PTR [ebp-0x4],0x4
  5ac7ca:	8b c4                	mov    eax,esp
  5ac7cc:	89 65 a4             	mov    DWORD PTR [ebp-0x5c],esp
  5ac7cf:	c6 00 05             	mov    BYTE PTR [eax],0x5
  5ac7d2:	c7 40 08 f0 d8 ff ff 	mov    DWORD PTR [eax+0x8],0xffffd8f0
  5ac7d9:	c7 40 0c ff ff ff ff 	mov    DWORD PTR [eax+0xc],0xffffffff
  5ac7e0:	68 f4 13 6c 00       	push   0x6c13f4 ; ["error"]
  5ac7e5:	8d 4d 94             	lea    ecx,[ebp-0x6c]
  5ac7e8:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  5ac7ec:	e8 ed 6e e5 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5ac7f1:	8b c8                	mov    ecx,eax
  5ac7f3:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  5ac7f7:	e8 89 7c e5 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5ac7fc:	83 ec 10             	sub    esp,0x10
  5ac7ff:	0f 57 c0             	xorps  xmm0,xmm0
  5ac802:	8b fc                	mov    edi,esp
  5ac804:	89 65 a4             	mov    DWORD PTR [ebp-0x5c],esp
  5ac807:	6a 18                	push   0x18
  5ac809:	66 0f d6 47 08       	movq   QWORD PTR [edi+0x8],xmm0
  5ac80e:	c6 07 03             	mov    BYTE PTR [edi],0x3
  5ac811:	e8 a0 69 e5 ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  5ac816:	8b f0                	mov    esi,eax
  5ac818:	6a 0f                	push   0xf
  5ac81a:	68 0c 1b 6e 00       	push   0x6e1b0c ; ["Init SSDP fail."]
  5ac81f:	56                   	push   esi
  5ac820:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  5ac826:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  5ac82d:	c7 46 10 0f 00 00 00 	mov    DWORD PTR [esi+0x10],0xf
  5ac834:	e8 57 bf 0b 00       	call   0x668790 ; ["call resolved=0x668790 "]
  5ac839:	c6 46 0f 00          	mov    BYTE PTR [esi+0xf],0x0
  5ac83d:	83 c4 10             	add    esp,0x10
  5ac840:	89 77 08             	mov    DWORD PTR [edi+0x8],esi
  5ac843:	68 20 69 6c 00       	push   0x6c6920 ; ["error_message"]
  5ac848:	8d 4d 94             	lea    ecx,[ebp-0x6c]
  5ac84b:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  5ac84f:	e8 8a 6e e5 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5ac854:	8b c8                	mov    ecx,eax
  5ac856:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  5ac85a:	e8 26 7c e5 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5ac85f:	6a 5c                	push   0x5c
  5ac861:	68 34 00 6e 00       	push   0x6e0034 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\MsgHandler\\MsgHandler.cpp"]
  5ac866:	e8 fb be 0b 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5ac86b:	83 c4 08             	add    esp,0x8
  5ac86e:	85 c0                	test   eax,eax
  5ac870:	74 12                	je     0x5ac884
  5ac872:	6a 5c                	push   0x5c
  5ac874:	68 34 00 6e 00       	push   0x6e0034 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\MsgHandler\\MsgHandler.cpp"]
  5ac879:	e8 e8 be 0b 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5ac87e:	83 c4 08             	add    esp,0x8
  5ac881:	40                   	inc    eax
  5ac882:	eb 05                	jmp    0x5ac889
  5ac884:	b8 34 00 6e 00       	mov    eax,0x6e0034 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\MsgHandler\\MsgHandler.cpp"]
  5ac889:	68 18 1a 6e 00       	push   0x6e1a18 ; ["MsgHandler::InitFunctionMap::<lambda_407dc132302f93c66c45ac7d8b9d967a>::operator ()"]
  5ac88e:	68 fc 04 00 00       	push   0x4fc
  5ac893:	50                   	push   eax
  5ac894:	68 c0 1a 6e 00       	push   0x6e1ac0 ; ["[ConntctionModule][%s:%d][%s]:leave stopSSDPScan handler ..."]
  5ac899:	8d 45 a4             	lea    eax,[ebp-0x5c]
  5ac89c:	c7 45 a4 02 00 00 00 	mov    DWORD PTR [ebp-0x5c],0x2
  5ac8a3:	50                   	push   eax
  5ac8a4:	8d 45 c0             	lea    eax,[ebp-0x40]
  5ac8a7:	50                   	push   eax
  5ac8a8:	e8 5c a7 e5 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5ac8ad:	8b 55 d4             	mov    edx,DWORD PTR [ebp-0x2c]
  5ac8b0:	83 c4 18             	add    esp,0x18
  5ac8b3:	83 fa 10             	cmp    edx,0x10
  5ac8b6:	72 2c                	jb     0x5ac8e4
  5ac8b8:	8b 4d c0             	mov    ecx,DWORD PTR [ebp-0x40]
  5ac8bb:	42                   	inc    edx
  5ac8bc:	8b c1                	mov    eax,ecx
  5ac8be:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5ac8c4:	72 14                	jb     0x5ac8da
  5ac8c6:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5ac8c9:	83 c2 23             	add    edx,0x23
  5ac8cc:	2b c1                	sub    eax,ecx
  5ac8ce:	83 c0 fc             	add    eax,0xfffffffc
  5ac8d1:	83 f8 1f             	cmp    eax,0x1f
  5ac8d4:	0f 87 95 fe ff ff    	ja     0x5ac76f
  5ac8da:	52                   	push   edx
  5ac8db:	51                   	push   ecx
  5ac8dc:	e8 b9 57 e5 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5ac8e1:	83 c4 08             	add    esp,0x8
  5ac8e4:	6a 00                	push   0x0
  5ac8e6:	6a 00                	push   0x0
  5ac8e8:	6a 20                	push   0x20
  5ac8ea:	6a ff                	push   0xffffffff
  5ac8ec:	8d 45 d8             	lea    eax,[ebp-0x28]
  5ac8ef:	50                   	push   eax
  5ac8f0:	8d 4d 94             	lea    ecx,[ebp-0x6c]
  5ac8f3:	e8 26 bf e5 ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  5ac8f8:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  5ac8fc:	c6 45 fc 08          	mov    BYTE PTR [ebp-0x4],0x8
  5ac900:	72 02                	jb     0x5ac904
  5ac902:	8b 00                	mov    eax,DWORD PTR [eax]
  5ac904:	50                   	push   eax
  5ac905:	8b cb                	mov    ecx,ebx
  5ac907:	e8 14 5e e5 ff       	call   0x402720 ; ["call resolved=0x46a4f0 "]
  5ac90c:	e9 38 fe ff ff       	jmp    0x5ac749
  5ac911:	6a 5c                	push   0x5c
  5ac913:	68 a8 f4 6d 00       	push   0x6df4a8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\MsgHandler\\MsgHandler.h"]
  5ac918:	e8 49 be 0b 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5ac91d:	83 c4 08             	add    esp,0x8
  5ac920:	85 c0                	test   eax,eax
  5ac922:	74 12                	je     0x5ac936
  5ac924:	6a 5c                	push   0x5c
  5ac926:	68 a8 f4 6d 00       	push   0x6df4a8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\MsgHandler\\MsgHandler.h"]
  5ac92b:	e8 36 be 0b 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5ac930:	83 c4 08             	add    esp,0x8
  5ac933:	40                   	inc    eax
  5ac934:	eb 05                	jmp    0x5ac93b
  5ac936:	b8 a8 f4 6d 00       	mov    eax,0x6df4a8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\MsgHandler\\MsgHandler.h"]
  5ac93b:	68 88 f4 6d 00       	push   0x6df488 ; ["MsgHandler::cancelSSDPScan"]
  5ac940:	68 dd 00 00 00       	push   0xdd
  5ac945:	50                   	push   eax
  5ac946:	68 f8 f4 6d 00       	push   0x6df4f8 ; ["[ConntctionModule][%s:%d][%s]:[SSDPSocket::cancelSSDPScan] cancelSSDPScan end ..."]
  5ac94b:	8d 45 a4             	lea    eax,[ebp-0x5c]
  5ac94e:	c7 45 a4 02 00 00 00 	mov    DWORD PTR [ebp-0x5c],0x2
  5ac955:	50                   	push   eax
  5ac956:	8d 45 c0             	lea    eax,[ebp-0x40]
  5ac959:	50                   	push   eax
  5ac95a:	e8 aa a6 e5 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5ac95f:	8b 55 d4             	mov    edx,DWORD PTR [ebp-0x2c]
  5ac962:	83 c4 18             	add    esp,0x18
  5ac965:	83 fa 10             	cmp    edx,0x10
  5ac968:	72 2c                	jb     0x5ac996
  5ac96a:	8b 4d c0             	mov    ecx,DWORD PTR [ebp-0x40]
  5ac96d:	42                   	inc    edx
  5ac96e:	8b c1                	mov    eax,ecx
  5ac970:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5ac976:	72 14                	jb     0x5ac98c
  5ac978:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5ac97b:	83 c2 23             	add    edx,0x23
  5ac97e:	2b c1                	sub    eax,ecx
  5ac980:	83 c0 fc             	add    eax,0xfffffffc
  5ac983:	83 f8 1f             	cmp    eax,0x1f
  5ac986:	0f 87 e3 fd ff ff    	ja     0x5ac76f
  5ac98c:	52                   	push   edx
  5ac98d:	51                   	push   ecx
  5ac98e:	e8 07 57 e5 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5ac993:	83 c4 08             	add    esp,0x8
  5ac996:	e8 c6 bc e5 ff       	call   0x408661 ; ["call resolved=0x4a4b00 "]
  5ac99b:	84 c0                	test   al,al
  5ac99d:	74 0c                	je     0x5ac9ab
  5ac99f:	e8 6d 76 e5 ff       	call   0x404011 ; ["call resolved=0x492cc0 "]
  5ac9a4:	8b c8                	mov    ecx,eax
  5ac9a6:	8b 10                	mov    edx,DWORD PTR [eax]
  5ac9a8:	ff 52 0c             	call   DWORD PTR [edx+0xc]
  5ac9ab:	8b 06                	mov    eax,DWORD PTR [esi]
  5ac9ad:	8d 4d 94             	lea    ecx,[ebp-0x6c]
  5ac9b0:	6a 00                	push   0x0
  5ac9b2:	8b 40 10             	mov    eax,DWORD PTR [eax+0x10]
  5ac9b5:	c6 80 b4 06 00 00 00 	mov    BYTE PTR [eax+0x6b4],0x0
  5ac9bc:	e8 01 7f e5 ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  5ac9c1:	83 ec 10             	sub    esp,0x10
  5ac9c4:	c7 45 fc 09 00 00 00 	mov    DWORD PTR [ebp-0x4],0x9
  5ac9cb:	8b c4                	mov    eax,esp
  5ac9cd:	89 65 a4             	mov    DWORD PTR [ebp-0x5c],esp
  5ac9d0:	c6 00 05             	mov    BYTE PTR [eax],0x5
  5ac9d3:	c7 40 08 00 00 00 00 	mov    DWORD PTR [eax+0x8],0x0
  5ac9da:	c7 40 0c 00 00 00 00 	mov    DWORD PTR [eax+0xc],0x0
  5ac9e1:	68 f4 13 6c 00       	push   0x6c13f4 ; ["error"]
  5ac9e6:	8d 4d 94             	lea    ecx,[ebp-0x6c]
  5ac9e9:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  5ac9ed:	e8 ec 6c e5 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5ac9f2:	8b c8                	mov    ecx,eax
  5ac9f4:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  5ac9f8:	e8 88 7a e5 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5ac9fd:	83 ec 10             	sub    esp,0x10
  5aca00:	0f 57 c0             	xorps  xmm0,xmm0
  5aca03:	8b f4                	mov    esi,esp
  5aca05:	89 65 a4             	mov    DWORD PTR [ebp-0x5c],esp
  5aca08:	6a 18                	push   0x18
  5aca0a:	66 0f d6 46 08       	movq   QWORD PTR [esi+0x8],xmm0
  5aca0f:	c6 06 03             	mov    BYTE PTR [esi],0x3
  5aca12:	e8 9f 67 e5 ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  5aca17:	83 c4 04             	add    esp,0x4
  5aca1a:	c7 00 00 00 00 00    	mov    DWORD PTR [eax],0x0
  5aca20:	c7 40 14 0f 00 00 00 	mov    DWORD PTR [eax+0x14],0xf
  5aca27:	c7 40 10 02 00 00 00 	mov    DWORD PTR [eax+0x10],0x2
  5aca2e:	66 8b 0d 10 0f 6e 00 	mov    cx,WORD PTR ds:0x6e0f10 ; ["ok"]
  5aca35:	66 89 08             	mov    WORD PTR [eax],cx
  5aca38:	8b ce                	mov    ecx,esi
  5aca3a:	c6 40 02 00          	mov    BYTE PTR [eax+0x2],0x0
  5aca3e:	89 46 08             	mov    DWORD PTR [esi+0x8],eax
  5aca41:	e8 98 d5 e5 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5aca46:	8b ce                	mov    ecx,esi
  5aca48:	e8 91 d5 e5 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5aca4d:	68 20 69 6c 00       	push   0x6c6920 ; ["error_message"]
  5aca52:	8d 4d 94             	lea    ecx,[ebp-0x6c]
  5aca55:	c6 45 fc 0c          	mov    BYTE PTR [ebp-0x4],0xc
  5aca59:	e8 80 6c e5 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5aca5e:	8b c8                	mov    ecx,eax
  5aca60:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  5aca64:	e8 1c 7a e5 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5aca69:	6a 5c                	push   0x5c
  5aca6b:	68 34 00 6e 00       	push   0x6e0034 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\MsgHandler\\MsgHandler.cpp"]
  5aca70:	e8 f1 bc 0b 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5aca75:	83 c4 08             	add    esp,0x8
  5aca78:	85 c0                	test   eax,eax
  5aca7a:	74 12                	je     0x5aca8e
  5aca7c:	6a 5c                	push   0x5c
  5aca7e:	68 34 00 6e 00       	push   0x6e0034 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\MsgHandler\\MsgHandler.cpp"]
  5aca83:	e8 de bc 0b 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5aca88:	83 c4 08             	add    esp,0x8
  5aca8b:	40                   	inc    eax
  5aca8c:	eb 05                	jmp    0x5aca93
  5aca8e:	b8 34 00 6e 00       	mov    eax,0x6e0034 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\MsgHandler\\MsgHandler.cpp"]
  5aca93:	68 18 1a 6e 00       	push   0x6e1a18 ; ["MsgHandler::InitFunctionMap::<lambda_407dc132302f93c66c45ac7d8b9d967a>::operator ()"]
  5aca98:	68 0d 05 00 00       	push   0x50d
  5aca9d:	50                   	push   eax
  5aca9e:	68 c0 1a 6e 00       	push   0x6e1ac0 ; ["[ConntctionModule][%s:%d][%s]:leave stopSSDPScan handler ..."]
  5acaa3:	8d 45 a4             	lea    eax,[ebp-0x5c]
  5acaa6:	c7 45 a4 02 00 00 00 	mov    DWORD PTR [ebp-0x5c],0x2
  5acaad:	50                   	push   eax
  5acaae:	8d 45 d8             	lea    eax,[ebp-0x28]
  5acab1:	50                   	push   eax
  5acab2:	e8 52 a5 e5 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5acab7:	83 c4 18             	add    esp,0x18
  5acaba:	8d 4d d8             	lea    ecx,[ebp-0x28]
  5acabd:	e8 41 6f e5 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5acac2:	6a 00                	push   0x0
  5acac4:	6a 00                	push   0x0
  5acac6:	6a 20                	push   0x20
  5acac8:	6a ff                	push   0xffffffff
  5acaca:	8d 45 a8             	lea    eax,[ebp-0x58]
  5acacd:	50                   	push   eax
  5acace:	8d 4d 94             	lea    ecx,[ebp-0x6c]
  5acad1:	e8 48 bd e5 ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  5acad6:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  5acada:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  5acade:	72 02                	jb     0x5acae2
  5acae0:	8b 00                	mov    eax,DWORD PTR [eax]
  5acae2:	50                   	push   eax
  5acae3:	8b cb                	mov    ecx,ebx
  5acae5:	e8 36 5c e5 ff       	call   0x402720 ; ["call resolved=0x46a4f0 "]
  5acaea:	8d 4d a8             	lea    ecx,[ebp-0x58]
  5acaed:	e8 11 6f e5 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5acaf2:	8d 4d 94             	lea    ecx,[ebp-0x6c]
  5acaf5:	e8 e4 d4 e5 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5acafa:	ff 75 94             	push   DWORD PTR [ebp-0x6c]
  5acafd:	8d 4d 9c             	lea    ecx,[ebp-0x64]
  5acb00:	e8 49 ce e5 ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  5acb05:	8b c3                	mov    eax,ebx
  5acb07:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  5acb0a:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  5acb11:	59                   	pop    ecx
  5acb12:	5f                   	pop    edi
  5acb13:	5e                   	pop    esi
  5acb14:	5b                   	pop    ebx
  5acb15:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  5acb18:	33 cd                	xor    ecx,ebp
  5acb1a:	e8 70 79 e5 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5acb1f:	8b e5                	mov    esp,ebp
  5acb21:	5d                   	pop    ebp
  5acb22:	c2 08 00             	ret    0x8
