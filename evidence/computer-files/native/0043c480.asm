; vdfs_cryptopp::encrypt; image base 0x400000; static annotation only
  43c480:	55                   	push   ebp
  43c481:	8b ec                	mov    ebp,esp
  43c483:	6a ff                	push   0xffffffff
  43c485:	68 bb 75 47 00       	push   0x4775bb
  43c48a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  43c490:	50                   	push   eax
  43c491:	81 ec 8c 01 00 00    	sub    esp,0x18c
  43c497:	a1 14 de 49 00       	mov    eax,ds:0x49de14
  43c49c:	33 c5                	xor    eax,ebp
  43c49e:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  43c4a1:	53                   	push   ebx
  43c4a2:	56                   	push   esi
  43c4a3:	57                   	push   edi
  43c4a4:	50                   	push   eax
  43c4a5:	8d 45 f4             	lea    eax,[ebp-0xc]
  43c4a8:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  43c4ae:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  43c4b1:	8b 4d 0c             	mov    ecx,DWORD PTR [ebp+0xc]
  43c4b4:	8b 75 14             	mov    esi,DWORD PTR [ebp+0x14]
  43c4b7:	8b 55 08             	mov    edx,DWORD PTR [ebp+0x8]
  43c4ba:	8b 7d 10             	mov    edi,DWORD PTR [ebp+0x10]
  43c4bd:	83 79 10 0c          	cmp    DWORD PTR [ecx+0x10],0xc
  43c4c1:	89 b5 2c ff ff ff    	mov    DWORD PTR [ebp-0xd4],esi
  43c4c7:	0f 82 ff 04 00 00    	jb     0x43c9cc
  43c4cd:	83 7a 10 20          	cmp    DWORD PTR [edx+0x10],0x20
  43c4d1:	0f 82 f5 04 00 00    	jb     0x43c9cc
  43c4d7:	8b 07                	mov    eax,DWORD PTR [edi]
  43c4d9:	83 78 04 00          	cmp    DWORD PTR [eax+0x4],0x0
  43c4dd:	0f 84 e9 04 00 00    	je     0x43c9cc
  43c4e3:	83 7a 14 10          	cmp    DWORD PTR [edx+0x14],0x10
  43c4e7:	72 02                	jb     0x43c4eb
  43c4e9:	8b 12                	mov    edx,DWORD PTR [edx]
  43c4eb:	83 79 14 10          	cmp    DWORD PTR [ecx+0x14],0x10
  43c4ef:	0f 10 02             	movups xmm0,XMMWORD PTR [edx]
  43c4f2:	0f 11 45 c0          	movups XMMWORD PTR [ebp-0x40],xmm0
  43c4f6:	0f 10 42 10          	movups xmm0,XMMWORD PTR [edx+0x10]
  43c4fa:	0f 11 45 d0          	movups XMMWORD PTR [ebp-0x30],xmm0
  43c4fe:	72 02                	jb     0x43c502
  43c500:	8b 09                	mov    ecx,DWORD PTR [ecx]
  43c502:	f3 0f 7e 01          	movq   xmm0,QWORD PTR [ecx]
  43c506:	66 0f d6 45 e0       	movq   QWORD PTR [ebp-0x20],xmm0
  43c50b:	8b 41 08             	mov    eax,DWORD PTR [ecx+0x8]
  43c50e:	c7 45 90 00 00 00 00 	mov    DWORD PTR [ebp-0x70],0x0
  43c515:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  43c518:	c7 45 a0 00 00 00 00 	mov    DWORD PTR [ebp-0x60],0x0
  43c51f:	c7 45 a4 0f 00 00 00 	mov    DWORD PTR [ebp-0x5c],0xf
  43c526:	c6 45 90 00          	mov    BYTE PTR [ebp-0x70],0x0
  43c52a:	8b ce                	mov    ecx,esi
  43c52c:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  43c533:	ff 15 90 f4 47 00    	call   DWORD PTR ds:0x47f490 ; ?clear@QByteArray@@QAEXXZ
  43c539:	8d 8d 68 fe ff ff    	lea    ecx,[ebp-0x198]
  43c53f:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  43c543:	e8 b8 c6 ff ff       	call   0x438c00 ; ["call resolved=0x438c00 "]
  43c548:	8d 85 f8 fe ff ff    	lea    eax,[ebp-0x108]
  43c54e:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  43c552:	6a 01                	push   0x1
  43c554:	8d 8d fc fe ff ff    	lea    ecx,[ebp-0x104]
  43c55a:	c7 85 68 fe ff ff 98 	mov    DWORD PTR [ebp-0x198],0x485198
  43c564:	c7 85 6c fe ff ff 20 	mov    DWORD PTR [ebp-0x194],0x485220
  43c56e:	c7 85 70 fe ff ff 70 	mov    DWORD PTR [ebp-0x190],0x485270
  43c578:	89 85 30 ff ff ff    	mov    DWORD PTR [ebp-0xd0],eax
  43c57e:	e8 4d ba 01 00       	call   0x457fd0 ; ["call resolved=0x457fd0 "]
  43c583:	6a 00                	push   0x0
  43c585:	6a 00                	push   0x0
  43c587:	8d 8d 08 ff ff ff    	lea    ecx,[ebp-0xf8]
  43c58d:	c7 85 0c ff ff ff ff 	mov    DWORD PTR [ebp-0xf4],0x3fffffff
  43c597:	c7 85 10 ff ff ff 00 	mov    DWORD PTR [ebp-0xf0],0x0
  43c5a1:	e8 9a f8 ff ff       	call   0x43be40 ; ["call resolved=0x43be40 "]
  43c5a6:	89 85 14 ff ff ff    	mov    DWORD PTR [ebp-0xec],eax
  43c5ac:	c7 85 1c ff ff ff ff 	mov    DWORD PTR [ebp-0xe4],0xffffffff
  43c5b6:	c7 85 20 ff ff ff 00 	mov    DWORD PTR [ebp-0xe0],0x0
  43c5c0:	c7 85 24 ff ff ff 00 	mov    DWORD PTR [ebp-0xdc],0x0
  43c5ca:	c7 85 f8 fe ff ff 28 	mov    DWORD PTR [ebp-0x108],0x485128
  43c5d4:	c7 85 fc fe ff ff 68 	mov    DWORD PTR [ebp-0x104],0x485168
  43c5de:	6a 0c                	push   0xc
  43c5e0:	8d 45 e0             	lea    eax,[ebp-0x20]
  43c5e3:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  43c5e7:	50                   	push   eax
  43c5e8:	6a 20                	push   0x20
  43c5ea:	8d 45 c0             	lea    eax,[ebp-0x40]
  43c5ed:	50                   	push   eax
  43c5ee:	8d 8d 68 fe ff ff    	lea    ecx,[ebp-0x198]
  43c5f4:	e8 17 d2 01 00       	call   0x459810 ; ["call resolved=0x459810 "]
  43c5f9:	68 ec 00 00 00       	push   0xec
  43c5fe:	e8 ee 5f 03 00       	call   0x4725f1 ; ["call resolved=0x4725f1 "]
  43c603:	8b f0                	mov    esi,eax
  43c605:	83 c4 04             	add    esp,0x4
  43c608:	89 b5 30 ff ff ff    	mov    DWORD PTR [ebp-0xd0],esi
  43c60e:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  43c612:	85 f6                	test   esi,esi
  43c614:	74 49                	je     0x43c65f
  43c616:	6a 14                	push   0x14
  43c618:	e8 d4 5f 03 00       	call   0x4725f1 ; ["call resolved=0x4725f1 "]
  43c61d:	83 c4 04             	add    esp,0x4
  43c620:	89 85 34 ff ff ff    	mov    DWORD PTR [ebp-0xcc],eax
  43c626:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  43c62a:	85 c0                	test   eax,eax
  43c62c:	74 0d                	je     0x43c63b
  43c62e:	8d 4d 90             	lea    ecx,[ebp-0x70]
  43c631:	51                   	push   ecx
  43c632:	8b c8                	mov    ecx,eax
  43c634:	e8 87 c3 ff ff       	call   0x4389c0 ; ["call resolved=0x4389c0 "]
  43c639:	eb 02                	jmp    0x43c63d
  43c63b:	33 c0                	xor    eax,eax
  43c63d:	6a 05                	push   0x5
  43c63f:	68 28 2c 4a 00       	push   0x4a2c28
  43c644:	6a 10                	push   0x10
  43c646:	6a 00                	push   0x0
  43c648:	50                   	push   eax
  43c649:	8d 85 68 fe ff ff    	lea    eax,[ebp-0x198]
  43c64f:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  43c653:	50                   	push   eax
  43c654:	8b ce                	mov    ecx,esi
  43c656:	e8 35 e4 01 00       	call   0x45aa90 ; ["call resolved=0x45aa90 "]
  43c65b:	8b f0                	mov    esi,eax
  43c65d:	eb 02                	jmp    0x43c661
  43c65f:	33 f6                	xor    esi,esi
  43c661:	8b 07                	mov    eax,DWORD PTR [edi]
  43c663:	8b cf                	mov    ecx,edi
  43c665:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  43c669:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  43c66c:	89 85 34 ff ff ff    	mov    DWORD PTR [ebp-0xcc],eax
  43c672:	ff 15 b4 f1 47 00    	call   DWORD PTR ds:0x47f1b4 ; ?constData@QByteArray@@QBEPBDXZ ; ["ƫ\t"]
  43c678:	56                   	push   esi
  43c679:	6a 01                	push   0x1
  43c67b:	ff b5 34 ff ff ff    	push   DWORD PTR [ebp-0xcc]
  43c681:	8d 8d 38 ff ff ff    	lea    ecx,[ebp-0xc8]
  43c687:	50                   	push   eax
  43c688:	e8 a3 ce ff ff       	call   0x439530 ; ["call resolved=0x439530 "]
  43c68d:	8b 8d 48 ff ff ff    	mov    ecx,DWORD PTR [ebp-0xb8]
  43c693:	c7 85 38 ff ff ff fc 	mov    DWORD PTR [ebp-0xc8],0x484cfc
  43c69d:	c7 85 3c ff ff ff d0 	mov    DWORD PTR [ebp-0xc4],0x484dd0
  43c6a7:	85 c9                	test   ecx,ecx
  43c6a9:	74 06                	je     0x43c6b1
  43c6ab:	8b 01                	mov    eax,DWORD PTR [ecx]
  43c6ad:	6a 01                	push   0x1
  43c6af:	ff 10                	call   DWORD PTR [eax]
  43c6b1:	8b 45 a0             	mov    eax,DWORD PTR [ebp-0x60]
  43c6b4:	c7 85 78 ff ff ff 00 	mov    DWORD PTR [ebp-0x88],0x0
  43c6be:	c7 45 88 00 00 00 00 	mov    DWORD PTR [ebp-0x78],0x0
  43c6c5:	c7 45 8c 0f 00 00 00 	mov    DWORD PTR [ebp-0x74],0xf
  43c6cc:	8d 48 f0             	lea    ecx,[eax-0x10]
  43c6cf:	c6 85 78 ff ff ff 00 	mov    BYTE PTR [ebp-0x88],0x0
  43c6d6:	3b c1                	cmp    eax,ecx
  43c6d8:	0f 42 c8             	cmovb  ecx,eax
  43c6db:	83 7d a4 10          	cmp    DWORD PTR [ebp-0x5c],0x10
  43c6df:	8d 45 90             	lea    eax,[ebp-0x70]
  43c6e2:	0f 43 45 90          	cmovae eax,DWORD PTR [ebp-0x70]
  43c6e6:	51                   	push   ecx
  43c6e7:	50                   	push   eax
  43c6e8:	8d 8d 78 ff ff ff    	lea    ecx,[ebp-0x88]
  43c6ee:	e8 bd 79 fc ff       	call   0x4040b0 ; ["call resolved=0x4040b0 "]
  43c6f3:	8b 45 a0             	mov    eax,DWORD PTR [ebp-0x60]
  43c6f6:	c7 45 a8 00 00 00 00 	mov    DWORD PTR [ebp-0x58],0x0
  43c6fd:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  43c701:	c7 45 b8 00 00 00 00 	mov    DWORD PTR [ebp-0x48],0x0
  43c708:	8d 48 f0             	lea    ecx,[eax-0x10]
  43c70b:	c7 45 bc 0f 00 00 00 	mov    DWORD PTR [ebp-0x44],0xf
  43c712:	c6 45 a8 00          	mov    BYTE PTR [ebp-0x58],0x0
  43c716:	3b c1                	cmp    eax,ecx
  43c718:	0f 82 0e 03 00 00    	jb     0x43ca2c
  43c71e:	2b c1                	sub    eax,ecx
  43c720:	bf 10 00 00 00       	mov    edi,0x10
  43c725:	3b c7                	cmp    eax,edi
  43c727:	0f 42 f8             	cmovb  edi,eax
  43c72a:	83 7d a4 10          	cmp    DWORD PTR [ebp-0x5c],0x10
  43c72e:	8d 45 90             	lea    eax,[ebp-0x70]
  43c731:	0f 43 45 90          	cmovae eax,DWORD PTR [ebp-0x70]
  43c735:	03 c1                	add    eax,ecx
  43c737:	89 85 34 ff ff ff    	mov    DWORD PTR [ebp-0xcc],eax
  43c73d:	83 ff 0f             	cmp    edi,0xf
  43c740:	77 18                	ja     0x43c75a
  43c742:	57                   	push   edi
  43c743:	50                   	push   eax
  43c744:	8d 45 a8             	lea    eax,[ebp-0x58]
  43c747:	89 7d b8             	mov    DWORD PTR [ebp-0x48],edi
  43c74a:	50                   	push   eax
  43c74b:	e8 39 72 03 00       	call   0x473989 ; ["call resolved=0x473989 "]
  43c750:	c6 44 3d a8 00       	mov    BYTE PTR [ebp+edi*1-0x58],0x0
  43c755:	8b 75 a8             	mov    esi,DWORD PTR [ebp-0x58]
  43c758:	eb 58                	jmp    0x43c7b2
  43c75a:	81 ff ff ff ff 7f    	cmp    edi,0x7fffffff
  43c760:	0f 87 cb 02 00 00    	ja     0x43ca31
  43c766:	8b f7                	mov    esi,edi
  43c768:	83 ce 0f             	or     esi,0xf
  43c76b:	81 fe ff ff ff 7f    	cmp    esi,0x7fffffff
  43c771:	76 07                	jbe    0x43c77a
  43c773:	be ff ff ff 7f       	mov    esi,0x7fffffff
  43c778:	eb 0a                	jmp    0x43c784
  43c77a:	b8 16 00 00 00       	mov    eax,0x16
  43c77f:	3b f0                	cmp    esi,eax
  43c781:	0f 42 f0             	cmovb  esi,eax
  43c784:	8d 46 01             	lea    eax,[esi+0x1]
  43c787:	50                   	push   eax
  43c788:	8d 4d a8             	lea    ecx,[ebp-0x58]
  43c78b:	e8 d0 78 fc ff       	call   0x404060 ; ["call resolved=0x404060 "]
  43c790:	57                   	push   edi
  43c791:	ff b5 34 ff ff ff    	push   DWORD PTR [ebp-0xcc]
  43c797:	89 75 bc             	mov    DWORD PTR [ebp-0x44],esi
  43c79a:	8b f0                	mov    esi,eax
  43c79c:	56                   	push   esi
  43c79d:	89 85 30 ff ff ff    	mov    DWORD PTR [ebp-0xd0],eax
  43c7a3:	89 7d b8             	mov    DWORD PTR [ebp-0x48],edi
  43c7a6:	e8 d8 71 03 00       	call   0x473983 ; ["call resolved=0x473983 "]
  43c7ab:	c6 04 3e 00          	mov    BYTE PTR [esi+edi*1],0x0
  43c7af:	89 75 a8             	mov    DWORD PTR [ebp-0x58],esi
  43c7b2:	83 c4 0c             	add    esp,0xc
  43c7b5:	83 7d bc 10          	cmp    DWORD PTR [ebp-0x44],0x10
  43c7b9:	8d 45 a8             	lea    eax,[ebp-0x58]
  43c7bc:	ff 75 b8             	push   DWORD PTR [ebp-0x48]
  43c7bf:	8b bd 2c ff ff ff    	mov    edi,DWORD PTR [ebp-0xd4]
  43c7c5:	0f 43 c6             	cmovae eax,esi
  43c7c8:	8b 35 28 f3 47 00    	mov    esi,DWORD PTR ds:0x47f328
  43c7ce:	8b cf                	mov    ecx,edi
  43c7d0:	50                   	push   eax
  43c7d1:	c6 45 fc 08          	mov    BYTE PTR [ebp-0x4],0x8
  43c7d5:	ff d6                	call   esi
  43c7d7:	83 7d 8c 10          	cmp    DWORD PTR [ebp-0x74],0x10
  43c7db:	8d 85 78 ff ff ff    	lea    eax,[ebp-0x88]
  43c7e1:	ff 75 88             	push   DWORD PTR [ebp-0x78]
  43c7e4:	0f 43 85 78 ff ff ff 	cmovae eax,DWORD PTR [ebp-0x88]
  43c7eb:	8b cf                	mov    ecx,edi
  43c7ed:	50                   	push   eax
  43c7ee:	ff d6                	call   esi
  43c7f0:	8b 55 bc             	mov    edx,DWORD PTR [ebp-0x44]
  43c7f3:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  43c7f7:	83 fa 10             	cmp    edx,0x10
  43c7fa:	72 2c                	jb     0x43c828
  43c7fc:	8b 4d a8             	mov    ecx,DWORD PTR [ebp-0x58]
  43c7ff:	42                   	inc    edx
  43c800:	8b c1                	mov    eax,ecx
  43c802:	81 fa 00 10 00 00    	cmp    edx,0x1000
  43c808:	72 14                	jb     0x43c81e
  43c80a:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  43c80d:	83 c2 23             	add    edx,0x23
  43c810:	2b c1                	sub    eax,ecx
  43c812:	83 c0 fc             	add    eax,0xfffffffc
  43c815:	83 f8 1f             	cmp    eax,0x1f
  43c818:	0f 87 fb 00 00 00    	ja     0x43c919
  43c81e:	52                   	push   edx
  43c81f:	51                   	push   ecx
  43c820:	e8 fc 5d 03 00       	call   0x472621 ; ["call resolved=0x472621 "]
  43c825:	83 c4 08             	add    esp,0x8
  43c828:	8b 55 8c             	mov    edx,DWORD PTR [ebp-0x74]
  43c82b:	c7 45 b8 00 00 00 00 	mov    DWORD PTR [ebp-0x48],0x0
  43c832:	c7 45 bc 0f 00 00 00 	mov    DWORD PTR [ebp-0x44],0xf
  43c839:	c6 45 a8 00          	mov    BYTE PTR [ebp-0x58],0x0
  43c83d:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  43c841:	83 fa 10             	cmp    edx,0x10
  43c844:	72 2f                	jb     0x43c875
  43c846:	8b 8d 78 ff ff ff    	mov    ecx,DWORD PTR [ebp-0x88]
  43c84c:	42                   	inc    edx
  43c84d:	8b c1                	mov    eax,ecx
  43c84f:	81 fa 00 10 00 00    	cmp    edx,0x1000
  43c855:	72 14                	jb     0x43c86b
  43c857:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  43c85a:	83 c2 23             	add    edx,0x23
  43c85d:	2b c1                	sub    eax,ecx
  43c85f:	83 c0 fc             	add    eax,0xfffffffc
  43c862:	83 f8 1f             	cmp    eax,0x1f
  43c865:	0f 87 ae 00 00 00    	ja     0x43c919
  43c86b:	52                   	push   edx
  43c86c:	51                   	push   ecx
  43c86d:	e8 af 5d 03 00       	call   0x472621 ; ["call resolved=0x472621 "]
  43c872:	83 c4 08             	add    esp,0x8
  43c875:	c7 45 88 00 00 00 00 	mov    DWORD PTR [ebp-0x78],0x0
  43c87c:	c7 45 8c 0f 00 00 00 	mov    DWORD PTR [ebp-0x74],0xf
  43c883:	c6 85 78 ff ff ff 00 	mov    BYTE PTR [ebp-0x88],0x0
  43c88a:	8b 8d 20 ff ff ff    	mov    ecx,DWORD PTR [ebp-0xe0]
  43c890:	8b 85 1c ff ff ff    	mov    eax,DWORD PTR [ebp-0xe4]
  43c896:	3b c1                	cmp    eax,ecx
  43c898:	8b 95 24 ff ff ff    	mov    edx,DWORD PTR [ebp-0xdc]
  43c89e:	0f 42 c8             	cmovb  ecx,eax
  43c8a1:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  43c8a5:	85 d2                	test   edx,edx
  43c8a7:	74 0f                	je     0x43c8b8
  43c8a9:	8b fa                	mov    edi,edx
  43c8ab:	32 c0                	xor    al,al
  43c8ad:	f3 aa                	rep stos BYTE PTR es:[edi],al
  43c8af:	52                   	push   edx
  43c8b0:	e8 7b 13 02 00       	call   0x45dc30 ; ["call resolved=0x45dc30 "]
  43c8b5:	83 c4 04             	add    esp,0x4
  43c8b8:	8b 8d 10 ff ff ff    	mov    ecx,DWORD PTR [ebp-0xf0]
  43c8be:	39 8d 0c ff ff ff    	cmp    DWORD PTR [ebp-0xf4],ecx
  43c8c4:	8b 95 14 ff ff ff    	mov    edx,DWORD PTR [ebp-0xec]
  43c8ca:	0f 42 8d 0c ff ff ff 	cmovb  ecx,DWORD PTR [ebp-0xf4]
  43c8d1:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  43c8d5:	85 d2                	test   edx,edx
  43c8d7:	74 0f                	je     0x43c8e8
  43c8d9:	8b fa                	mov    edi,edx
  43c8db:	33 c0                	xor    eax,eax
  43c8dd:	f3 ab                	rep stos DWORD PTR es:[edi],eax
  43c8df:	52                   	push   edx
  43c8e0:	e8 bb 12 02 00       	call   0x45dba0 ; ["call resolved=0x45dba0 "]
  43c8e5:	83 c4 04             	add    esp,0x4
  43c8e8:	8d 8d 68 fe ff ff    	lea    ecx,[ebp-0x198]
  43c8ee:	e8 8d d8 ff ff       	call   0x43a180 ; ["call resolved=0x43a180 "]
  43c8f3:	8b 55 a4             	mov    edx,DWORD PTR [ebp-0x5c]
  43c8f6:	83 fa 10             	cmp    edx,0x10
  43c8f9:	72 2e                	jb     0x43c929
  43c8fb:	8b 4d 90             	mov    ecx,DWORD PTR [ebp-0x70]
  43c8fe:	42                   	inc    edx
  43c8ff:	8b c1                	mov    eax,ecx
  43c901:	81 fa 00 10 00 00    	cmp    edx,0x1000
  43c907:	72 16                	jb     0x43c91f
  43c909:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  43c90c:	83 c2 23             	add    edx,0x23
  43c90f:	2b c1                	sub    eax,ecx
  43c911:	83 c0 fc             	add    eax,0xfffffffc
  43c914:	83 f8 1f             	cmp    eax,0x1f
  43c917:	76 06                	jbe    0x43c91f
  43c919:	ff 15 68 f6 47 00    	call   DWORD PTR ds:0x47f668 ; _invalid_parameter_noinfo_noreturn
  43c91f:	52                   	push   edx
  43c920:	51                   	push   ecx
  43c921:	e8 fb 5c 03 00       	call   0x472621 ; ["call resolved=0x472621 "]
  43c926:	83 c4 08             	add    esp,0x8
  43c929:	b0 01                	mov    al,0x1
  43c92b:	e9 e0 00 00 00       	jmp    0x43ca10
  43c930:	8b 8d 28 ff ff ff    	mov    ecx,DWORD PTR [ebp-0xd8]
  43c936:	8b 35 e4 2b 4a 00    	mov    esi,DWORD PTR ds:0x4a2be4
  43c93c:	8b 01                	mov    eax,DWORD PTR [ecx]
  43c93e:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  43c941:	ff d0                	call   eax
  43c943:	89 85 2c ff ff ff    	mov    DWORD PTR [ebp-0xd4],eax
  43c949:	8b ce                	mov    ecx,esi
  43c94b:	8d 85 2c ff ff ff    	lea    eax,[ebp-0xd4]
  43c951:	c7 45 b4 e4 52 48 00 	mov    DWORD PTR [ebp-0x4c],0x4852e4 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Cryptopp\\vdfs_cryptopp.cpp"]
  43c958:	50                   	push   eax
  43c959:	83 ec 08             	sub    esp,0x8
  43c95c:	c7 45 b8 2c 00 00 00 	mov    DWORD PTR [ebp-0x48],0x2c
  43c963:	f3 0f 7e 45 b4       	movq   xmm0,QWORD PTR [ebp-0x4c]
  43c968:	8b c4                	mov    eax,esp
  43c96a:	6a 04                	push   0x4
  43c96c:	83 ec 0c             	sub    esp,0xc
  43c96f:	c7 00 20 53 48 00    	mov    DWORD PTR [eax],0x485320 ; ["Decryption error:{}"]
  43c975:	c7 40 04 13 00 00 00 	mov    DWORD PTR [eax+0x4],0x13
  43c97c:	8b c4                	mov    eax,esp
  43c97e:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  43c982:	c7 40 08 cc 52 48 00 	mov    DWORD PTR [eax+0x8],0x4852cc ; ["vdfs_cryptopp::encrypt"]
  43c989:	e8 22 44 ff ff       	call   0x430db0 ; ["call resolved=0x430db0 "]
  43c98e:	b8 94 c9 43 00       	mov    eax,0x43c994
  43c993:	c3                   	ret
  43c994:	8b 55 a4             	mov    edx,DWORD PTR [ebp-0x5c]
  43c997:	83 fa 10             	cmp    edx,0x10
  43c99a:	72 72                	jb     0x43ca0e
  43c99c:	8b 4d 90             	mov    ecx,DWORD PTR [ebp-0x70]
  43c99f:	42                   	inc    edx
  43c9a0:	8b c1                	mov    eax,ecx
  43c9a2:	81 fa 00 10 00 00    	cmp    edx,0x1000
  43c9a8:	72 16                	jb     0x43c9c0
  43c9aa:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  43c9ad:	83 c2 23             	add    edx,0x23
  43c9b0:	2b c1                	sub    eax,ecx
  43c9b2:	83 c0 fc             	add    eax,0xfffffffc
  43c9b5:	83 f8 1f             	cmp    eax,0x1f
  43c9b8:	76 06                	jbe    0x43c9c0
  43c9ba:	ff 15 68 f6 47 00    	call   DWORD PTR ds:0x47f668 ; _invalid_parameter_noinfo_noreturn
  43c9c0:	52                   	push   edx
  43c9c1:	51                   	push   ecx
  43c9c2:	e8 5a 5c 03 00       	call   0x472621 ; ["call resolved=0x472621 "]
  43c9c7:	83 c4 08             	add    esp,0x8
  43c9ca:	eb 42                	jmp    0x43ca0e
  43c9cc:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  43c9d2:	83 ec 08             	sub    esp,0x8
  43c9d5:	8b c4                	mov    eax,esp
  43c9d7:	c7 45 b4 e4 52 48 00 	mov    DWORD PTR [ebp-0x4c],0x4852e4 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Cryptopp\\vdfs_cryptopp.cpp"]
  43c9de:	c7 45 b8 11 00 00 00 	mov    DWORD PTR [ebp-0x48],0x11
  43c9e5:	f3 0f 7e 45 b4       	movq   xmm0,QWORD PTR [ebp-0x4c]
  43c9ea:	6a 04                	push   0x4
  43c9ec:	83 ec 0c             	sub    esp,0xc
  43c9ef:	c7 00 b0 52 48 00    	mov    DWORD PTR [eax],0x4852b0 ; ["Encrypto param is invalid."]
  43c9f5:	c7 40 04 1a 00 00 00 	mov    DWORD PTR [eax+0x4],0x1a
  43c9fc:	8b c4                	mov    eax,esp
  43c9fe:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  43ca02:	c7 40 08 cc 52 48 00 	mov    DWORD PTR [eax+0x8],0x4852cc ; ["vdfs_cryptopp::encrypt"]
  43ca09:	e8 02 ee fd ff       	call   0x41b810 ; ["call resolved=0x41b810 "]
  43ca0e:	32 c0                	xor    al,al
  43ca10:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  43ca13:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  43ca1a:	59                   	pop    ecx
  43ca1b:	5f                   	pop    edi
  43ca1c:	5e                   	pop    esi
  43ca1d:	5b                   	pop    ebx
  43ca1e:	8b 4d ec             	mov    ecx,DWORD PTR [ebp-0x14]
  43ca21:	33 cd                	xor    ecx,ebp
  43ca23:	e8 58 5e 03 00       	call   0x472880 ; ["call resolved=0x472880 "]
  43ca28:	8b e5                	mov    esp,ebp
  43ca2a:	5d                   	pop    ebp
  43ca2b:	c3                   	ret
  43ca2c:	e8 bf 5c ff ff       	call   0x4326f0 ; ["call resolved=0x4326f0 "]
  43ca31:	e8 1a 76 fc ff       	call   0x404050 ; ["call resolved=0x404050 "]
