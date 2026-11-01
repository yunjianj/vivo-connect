; ConnectFlow::wlanBuildCustomData; image base 0x400000; static annotation only
  5f85c0:	55                   	push   ebp
  5f85c1:	8b ec                	mov    ebp,esp
  5f85c3:	6a ff                	push   0xffffffff
  5f85c5:	68 3a 9a 69 00       	push   0x699a3a
  5f85ca:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  5f85d0:	50                   	push   eax
  5f85d1:	81 ec 7c 04 00 00    	sub    esp,0x47c
  5f85d7:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5f85dc:	33 c5                	xor    eax,ebp
  5f85de:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  5f85e1:	56                   	push   esi
  5f85e2:	57                   	push   edi
  5f85e3:	50                   	push   eax
  5f85e4:	8d 45 f4             	lea    eax,[ebp-0xc]
  5f85e7:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  5f85ed:	8b 45 08             	mov    eax,DWORD PTR [ebp+0x8]
  5f85f0:	b9 3f a3 7a 00       	mov    ecx,0x7aa33f
  5f85f5:	89 85 80 fb ff ff    	mov    DWORD PTR [ebp-0x480],eax
  5f85fb:	e8 ee 04 e1 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5f8600:	68 00 04 00 00       	push   0x400
  5f8605:	8d 85 f0 fb ff ff    	lea    eax,[ebp-0x410]
  5f860b:	6a 00                	push   0x0
  5f860d:	50                   	push   eax
  5f860e:	e8 83 01 07 00       	call   0x668796 ; ["call resolved=0x668796 "]
  5f8613:	83 c4 0c             	add    esp,0xc
  5f8616:	8d 8d 90 fb ff ff    	lea    ecx,[ebp-0x470]
  5f861c:	6a 00                	push   0x0
  5f861e:	e8 9f c2 e0 ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  5f8623:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  5f862a:	c7 85 84 fb ff ff 00 	mov    DWORD PTR [ebp-0x47c],0x0
  5f8634:	c7 85 88 fb ff ff 00 	mov    DWORD PTR [ebp-0x478],0x0
  5f863e:	c7 85 8c fb ff ff 00 	mov    DWORD PTR [ebp-0x474],0x0
  5f8648:	ff 75 0c             	push   DWORD PTR [ebp+0xc]
  5f864b:	8d 8d 84 fb ff ff    	lea    ecx,[ebp-0x47c]
  5f8651:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  5f8655:	6a 00                	push   0x0
  5f8657:	e8 c3 c9 e0 ff       	call   0x40501f ; ["call resolved=0x5e9010 "]
  5f865c:	83 ec 10             	sub    esp,0x10
  5f865f:	8d 85 84 fb ff ff    	lea    eax,[ebp-0x47c]
  5f8665:	8b cc                	mov    ecx,esp
  5f8667:	89 a5 a4 fb ff ff    	mov    DWORD PTR [ebp-0x45c],esp
  5f866d:	50                   	push   eax
  5f866e:	e8 03 91 e0 ff       	call   0x401776 ; ["call resolved=0x43d050 "]
  5f8673:	68 04 68 6c 00       	push   0x6c6804 ; ["bytes"]
  5f8678:	8d 8d 90 fb ff ff    	lea    ecx,[ebp-0x470]
  5f867e:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  5f8682:	e8 57 b0 e0 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5f8687:	8b c8                	mov    ecx,eax
  5f8689:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  5f868d:	e8 f3 bd e0 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5f8692:	c7 85 a8 fb ff ff 00 	mov    DWORD PTR [ebp-0x458],0x0
  5f869c:	c7 85 bc fb ff ff 0f 	mov    DWORD PTR [ebp-0x444],0xf
  5f86a6:	c7 85 b8 fb ff ff 00 	mov    DWORD PTR [ebp-0x448],0x0
  5f86b0:	c6 85 a8 fb ff ff 00 	mov    BYTE PTR [ebp-0x458],0x0
  5f86b7:	8d 85 a8 fb ff ff    	lea    eax,[ebp-0x458]
  5f86bd:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  5f86c1:	50                   	push   eax
  5f86c2:	8d 85 d8 fb ff ff    	lea    eax,[ebp-0x428]
  5f86c8:	50                   	push   eax
  5f86c9:	e8 b4 d9 e0 ff       	call   0x406082 ; ["call resolved=0x562cc0 "]
  5f86ce:	83 ec 08             	sub    esp,0x8
  5f86d1:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  5f86d5:	8b cc                	mov    ecx,esp
  5f86d7:	89 a5 a4 fb ff ff    	mov    DWORD PTR [ebp-0x45c],esp
  5f86dd:	50                   	push   eax
  5f86de:	e8 65 cd e0 ff       	call   0x405448 ; ["call resolved=0x43de60 "]
  5f86e3:	68 a4 4b 6c 00       	push   0x6c4ba4 ; ["deviceName"]
  5f86e8:	8d 8d 90 fb ff ff    	lea    ecx,[ebp-0x470]
  5f86ee:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  5f86f2:	e8 e7 af e0 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5f86f7:	8b c8                	mov    ecx,eax
  5f86f9:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  5f86fd:	e8 83 bd e0 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5f8702:	8b 95 ec fb ff ff    	mov    edx,DWORD PTR [ebp-0x414]
  5f8708:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  5f870c:	83 fa 10             	cmp    edx,0x10
  5f870f:	72 31                	jb     0x5f8742
  5f8711:	8b 8d d8 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x428]
  5f8717:	42                   	inc    edx
  5f8718:	8b c1                	mov    eax,ecx
  5f871a:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f8720:	72 16                	jb     0x5f8738
  5f8722:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f8725:	83 c2 23             	add    edx,0x23
  5f8728:	2b c1                	sub    eax,ecx
  5f872a:	83 c0 fc             	add    eax,0xfffffffc
  5f872d:	83 f8 1f             	cmp    eax,0x1f
  5f8730:	76 06                	jbe    0x5f8738
  5f8732:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5f8738:	52                   	push   edx
  5f8739:	51                   	push   ecx
  5f873a:	e8 5b 99 e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f873f:	83 c4 08             	add    esp,0x8
  5f8742:	83 ec 10             	sub    esp,0x10
  5f8745:	8b c4                	mov    eax,esp
  5f8747:	89 a5 a4 fb ff ff    	mov    DWORD PTR [ebp-0x45c],esp
  5f874d:	c6 00 05             	mov    BYTE PTR [eax],0x5
  5f8750:	c7 40 08 00 00 00 00 	mov    DWORD PTR [eax+0x8],0x0
  5f8757:	c7 40 0c 00 00 00 00 	mov    DWORD PTR [eax+0xc],0x0
  5f875e:	68 0c 68 6c 00       	push   0x6c680c ; ["channel"]
  5f8763:	8d 8d 90 fb ff ff    	lea    ecx,[ebp-0x470]
  5f8769:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  5f876d:	e8 6c af e0 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5f8772:	8b c8                	mov    ecx,eax
  5f8774:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  5f8778:	e8 08 bd e0 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5f877d:	83 ec 10             	sub    esp,0x10
  5f8780:	8b c4                	mov    eax,esp
  5f8782:	89 a5 a4 fb ff ff    	mov    DWORD PTR [ebp-0x45c],esp
  5f8788:	c6 00 05             	mov    BYTE PTR [eax],0x5
  5f878b:	c7 40 08 b1 7f 39 05 	mov    DWORD PTR [eax+0x8],0x5397fb1
  5f8792:	c7 40 0c 00 00 00 00 	mov    DWORD PTR [eax+0xc],0x0
  5f8799:	68 cc 4d 6c 00       	push   0x6c4dcc ; ["id"]
  5f879e:	8d 8d 90 fb ff ff    	lea    ecx,[ebp-0x470]
  5f87a4:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  5f87a8:	e8 31 af e0 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5f87ad:	8b c8                	mov    ecx,eax
  5f87af:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  5f87b3:	e8 cd bc e0 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5f87b8:	83 ec 10             	sub    esp,0x10
  5f87bb:	8b f4                	mov    esi,esp
  5f87bd:	89 a5 a4 fb ff ff    	mov    DWORD PTR [ebp-0x45c],esp
  5f87c3:	e8 6c ef e0 ff       	call   0x407734 ; ["call resolved=0x492af0 "]
  5f87c8:	83 c0 18             	add    eax,0x18
  5f87cb:	8b ce                	mov    ecx,esi
  5f87cd:	50                   	push   eax
  5f87ce:	e8 3d c3 e0 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  5f87d3:	68 18 68 6c 00       	push   0x6c6818 ; ["open_Id"]
  5f87d8:	8d 8d 90 fb ff ff    	lea    ecx,[ebp-0x470]
  5f87de:	c6 45 fc 08          	mov    BYTE PTR [ebp-0x4],0x8
  5f87e2:	e8 f7 ae e0 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5f87e7:	8b c8                	mov    ecx,eax
  5f87e9:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  5f87ed:	e8 93 bc e0 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5f87f2:	83 ec 10             	sub    esp,0x10
  5f87f5:	0f 57 c0             	xorps  xmm0,xmm0
  5f87f8:	8b fc                	mov    edi,esp
  5f87fa:	89 a5 a4 fb ff ff    	mov    DWORD PTR [ebp-0x45c],esp
  5f8800:	6a 18                	push   0x18
  5f8802:	66 0f d6 47 08       	movq   QWORD PTR [edi+0x8],xmm0
  5f8807:	c6 07 03             	mov    BYTE PTR [edi],0x3
  5f880a:	e8 a7 a9 e0 ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  5f880f:	8b f0                	mov    esi,eax
  5f8811:	83 c4 04             	add    esp,0x4
  5f8814:	8d 85 a3 fb ff ff    	lea    eax,[ebp-0x45d]
  5f881a:	89 b5 7c fb ff ff    	mov    DWORD PTR [ebp-0x484],esi
  5f8820:	89 85 78 fb ff ff    	mov    DWORD PTR [ebp-0x488],eax
  5f8826:	6a 20                	push   0x20
  5f8828:	8b ce                	mov    ecx,esi
  5f882a:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  5f882e:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  5f8834:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  5f883b:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  5f8842:	e8 64 91 e0 ff       	call   0x4019ab ; ["call resolved=0x480060 "]
  5f8847:	c7 46 10 18 00 00 00 	mov    DWORD PTR [esi+0x10],0x18
  5f884e:	c7 46 14 1f 00 00 00 	mov    DWORD PTR [esi+0x14],0x1f
  5f8855:	0f 10 05 34 68 6c 00 	movups xmm0,XMMWORD PTR ds:0x6c6834 ; ["com.vivo.pcsuite.SERVICE"]
  5f885c:	0f 11 00             	movups XMMWORD PTR [eax],xmm0
  5f885f:	f3 0f 7e 05 44 68 6c 	movq   xmm0,QWORD PTR ds:0x6c6844 ; [".SERVICE"]
  5f8867:	66 0f d6 40 10       	movq   QWORD PTR [eax+0x10],xmm0
  5f886c:	c6 40 18 00          	mov    BYTE PTR [eax+0x18],0x0
  5f8870:	89 06                	mov    DWORD PTR [esi],eax
  5f8872:	89 77 08             	mov    DWORD PTR [edi+0x8],esi
  5f8875:	68 24 68 6c 00       	push   0x6c6824 ; ["service_id"]
  5f887a:	8d 8d 90 fb ff ff    	lea    ecx,[ebp-0x470]
  5f8880:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  5f8884:	e8 55 ae e0 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5f8889:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  5f888d:	8b c8                	mov    ecx,eax
  5f888f:	e8 f1 bb e0 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5f8894:	c7 85 c0 fb ff ff 00 	mov    DWORD PTR [ebp-0x440],0x0
  5f889e:	c7 85 d4 fb ff ff 0f 	mov    DWORD PTR [ebp-0x42c],0xf
  5f88a8:	c7 85 d0 fb ff ff 00 	mov    DWORD PTR [ebp-0x430],0x0
  5f88b2:	c6 85 c0 fb ff ff 00 	mov    BYTE PTR [ebp-0x440],0x0
  5f88b9:	8d 85 c0 fb ff ff    	lea    eax,[ebp-0x440]
  5f88bf:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  5f88c3:	50                   	push   eax
  5f88c4:	e8 07 e9 e0 ff       	call   0x4071d0 ; ["call resolved=0x4b3650 vivo::Utils::getDeviceId"]
  5f88c9:	83 ec 0c             	sub    esp,0xc
  5f88cc:	8d 85 c0 fb ff ff    	lea    eax,[ebp-0x440]
  5f88d2:	8b cc                	mov    ecx,esp
  5f88d4:	89 a5 a4 fb ff ff    	mov    DWORD PTR [ebp-0x45c],esp
  5f88da:	50                   	push   eax
  5f88db:	e8 30 c2 e0 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  5f88e0:	68 54 68 6c 00       	push   0x6c6854 ; ["target_id"]
  5f88e5:	8d 8d 90 fb ff ff    	lea    ecx,[ebp-0x470]
  5f88eb:	c6 45 fc 0c          	mov    BYTE PTR [ebp-0x4],0xc
  5f88ef:	e8 ea ad e0 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5f88f4:	8b c8                	mov    ecx,eax
  5f88f6:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  5f88fa:	e8 86 bb e0 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5f88ff:	83 ec 10             	sub    esp,0x10
  5f8902:	8b f4                	mov    esi,esp
  5f8904:	89 a5 a4 fb ff ff    	mov    DWORD PTR [ebp-0x45c],esp
  5f890a:	e8 25 ee e0 ff       	call   0x407734 ; ["call resolved=0x492af0 "]
  5f890f:	50                   	push   eax
  5f8910:	8b ce                	mov    ecx,esi
  5f8912:	e8 f9 c1 e0 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  5f8917:	68 60 4d 6c 00       	push   0x6c4d60 ; ["account"]
  5f891c:	8d 8d 90 fb ff ff    	lea    ecx,[ebp-0x470]
  5f8922:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  5f8926:	e8 b3 ad e0 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5f892b:	8b c8                	mov    ecx,eax
  5f892d:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  5f8931:	e8 4f bb e0 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5f8936:	83 ec 10             	sub    esp,0x10
  5f8939:	8b c4                	mov    eax,esp
  5f893b:	89 a5 a4 fb ff ff    	mov    DWORD PTR [ebp-0x45c],esp
  5f8941:	c6 00 05             	mov    BYTE PTR [eax],0x5
  5f8944:	c7 40 08 01 00 00 00 	mov    DWORD PTR [eax+0x8],0x1
  5f894b:	c7 40 0c 00 00 00 00 	mov    DWORD PTR [eax+0xc],0x0
  5f8952:	68 60 68 6c 00       	push   0x6c6860 ; ["type"]
  5f8957:	8d 8d 90 fb ff ff    	lea    ecx,[ebp-0x470]
  5f895d:	c6 45 fc 0e          	mov    BYTE PTR [ebp-0x4],0xe
  5f8961:	e8 78 ad e0 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5f8966:	8b c8                	mov    ecx,eax
  5f8968:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  5f896c:	e8 14 bb e0 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5f8971:	6a 00                	push   0x0
  5f8973:	6a 00                	push   0x0
  5f8975:	6a 20                	push   0x20
  5f8977:	6a ff                	push   0xffffffff
  5f8979:	8d 85 d8 fb ff ff    	lea    eax,[ebp-0x428]
  5f897f:	50                   	push   eax
  5f8980:	8d 8d 90 fb ff ff    	lea    ecx,[ebp-0x470]
  5f8986:	e8 93 fe e0 ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  5f898b:	8b c8                	mov    ecx,eax
  5f898d:	83 79 14 10          	cmp    DWORD PTR [ecx+0x14],0x10
  5f8991:	72 02                	jb     0x5f8995
  5f8993:	8b 09                	mov    ecx,DWORD PTR [ecx]
  5f8995:	8d 95 f0 fb ff ff    	lea    edx,[ebp-0x410]
  5f899b:	2b d1                	sub    edx,ecx
  5f899d:	0f 1f 00             	nop    DWORD PTR [eax]
  5f89a0:	8a 01                	mov    al,BYTE PTR [ecx]
  5f89a2:	8d 49 01             	lea    ecx,[ecx+0x1]
  5f89a5:	88 44 0a ff          	mov    BYTE PTR [edx+ecx*1-0x1],al
  5f89a9:	84 c0                	test   al,al
  5f89ab:	75 f3                	jne    0x5f89a0
  5f89ad:	8b 85 ec fb ff ff    	mov    eax,DWORD PTR [ebp-0x414]
  5f89b3:	83 f8 10             	cmp    eax,0x10
  5f89b6:	72 13                	jb     0x5f89cb
  5f89b8:	40                   	inc    eax
  5f89b9:	8d 8d d8 fb ff ff    	lea    ecx,[ebp-0x428]
  5f89bf:	50                   	push   eax
  5f89c0:	ff b5 d8 fb ff ff    	push   DWORD PTR [ebp-0x428]
  5f89c6:	e8 e6 89 e0 ff       	call   0x4013b1 ; ["call resolved=0x4875e0 "]
  5f89cb:	6a 5c                	push   0x5c
  5f89cd:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f89d2:	e8 8f fd 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5f89d7:	83 c4 08             	add    esp,0x8
  5f89da:	85 c0                	test   eax,eax
  5f89dc:	74 12                	je     0x5f89f0
  5f89de:	6a 5c                	push   0x5c
  5f89e0:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f89e5:	e8 7c fd 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5f89ea:	83 c4 08             	add    esp,0x8
  5f89ed:	40                   	inc    eax
  5f89ee:	eb 05                	jmp    0x5f89f5
  5f89f0:	b8 80 26 6f 00       	mov    eax,0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f89f5:	8d 8d f0 fb ff ff    	lea    ecx,[ebp-0x410]
  5f89fb:	c7 85 a4 fb ff ff 02 	mov    DWORD PTR [ebp-0x45c],0x2
  5f8a05:	51                   	push   ecx
  5f8a06:	68 c0 35 6f 00       	push   0x6f35c0 ; ["ConnectFlow::wlanBuildCustomData"]
  5f8a0b:	68 5c 02 00 00       	push   0x25c
  5f8a10:	50                   	push   eax
  5f8a11:	68 e8 35 6f 00       	push   0x6f35e8 ; ["[ConntctionModule][%s:%d][%s]: [INTERACTION][CONNSERVER_TO_MOBILEPHONE] ConnectFlow wlan build custom data: %s\n"]
  5f8a16:	8d 85 a4 fb ff ff    	lea    eax,[ebp-0x45c]
  5f8a1c:	50                   	push   eax
  5f8a1d:	8d 85 d8 fb ff ff    	lea    eax,[ebp-0x428]
  5f8a23:	50                   	push   eax
  5f8a24:	e8 e0 e5 e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5f8a29:	83 c4 1c             	add    esp,0x1c
  5f8a2c:	8d 8d d8 fb ff ff    	lea    ecx,[ebp-0x428]
  5f8a32:	e8 cc af e0 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5f8a37:	8d 85 f0 fb ff ff    	lea    eax,[ebp-0x410]
  5f8a3d:	8d 50 01             	lea    edx,[eax+0x1]
  5f8a40:	8a 08                	mov    cl,BYTE PTR [eax]
  5f8a42:	40                   	inc    eax
  5f8a43:	84 c9                	test   cl,cl
  5f8a45:	75 f9                	jne    0x5f8a40
  5f8a47:	f3 0f 7e 05 a8 68 6c 	movq   xmm0,QWORD PTR ds:0x6c68a8 ; ["PAY_LOAD_1"]
  5f8a4f:	2b c2                	sub    eax,edx
  5f8a51:	8b 95 80 fb ff ff    	mov    edx,DWORD PTR [ebp-0x480]
  5f8a57:	50                   	push   eax
  5f8a58:	89 85 a4 fb ff ff    	mov    DWORD PTR [ebp-0x45c],eax
  5f8a5e:	66 0f d6 02          	movq   QWORD PTR [edx],xmm0
  5f8a62:	66 8b 0d b0 68 6c 00 	mov    cx,WORD PTR ds:0x6c68b0 ; ["_1"]
  5f8a69:	66 89 4a 08          	mov    WORD PTR [edx+0x8],cx
  5f8a6d:	8b c8                	mov    ecx,eax
  5f8a6f:	c1 f9 18             	sar    ecx,0x18
  5f8a72:	88 4a 0a             	mov    BYTE PTR [edx+0xa],cl
  5f8a75:	8b c8                	mov    ecx,eax
  5f8a77:	c1 f9 10             	sar    ecx,0x10
  5f8a7a:	88 4a 0b             	mov    BYTE PTR [edx+0xb],cl
  5f8a7d:	8b c8                	mov    ecx,eax
  5f8a7f:	88 42 0d             	mov    BYTE PTR [edx+0xd],al
  5f8a82:	8d 85 f0 fb ff ff    	lea    eax,[ebp-0x410]
  5f8a88:	50                   	push   eax
  5f8a89:	8d 42 0e             	lea    eax,[edx+0xe]
  5f8a8c:	c1 f9 08             	sar    ecx,0x8
  5f8a8f:	50                   	push   eax
  5f8a90:	88 4a 0c             	mov    BYTE PTR [edx+0xc],cl
  5f8a93:	e8 f2 fc 06 00       	call   0x66878a ; ["call resolved=0x66878a "]
  5f8a98:	8b 95 d4 fb ff ff    	mov    edx,DWORD PTR [ebp-0x42c]
  5f8a9e:	83 c4 0c             	add    esp,0xc
  5f8aa1:	8b b5 a4 fb ff ff    	mov    esi,DWORD PTR [ebp-0x45c]
  5f8aa7:	83 fa 10             	cmp    edx,0x10
  5f8aaa:	72 2b                	jb     0x5f8ad7
  5f8aac:	8b 8d c0 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x440]
  5f8ab2:	42                   	inc    edx
  5f8ab3:	8b c1                	mov    eax,ecx
  5f8ab5:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f8abb:	72 10                	jb     0x5f8acd
  5f8abd:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f8ac0:	83 c2 23             	add    edx,0x23
  5f8ac3:	2b c1                	sub    eax,ecx
  5f8ac5:	83 c0 fc             	add    eax,0xfffffffc
  5f8ac8:	83 f8 1f             	cmp    eax,0x1f
  5f8acb:	77 36                	ja     0x5f8b03
  5f8acd:	52                   	push   edx
  5f8ace:	51                   	push   ecx
  5f8acf:	e8 c6 95 e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f8ad4:	83 c4 08             	add    esp,0x8
  5f8ad7:	8b 95 bc fb ff ff    	mov    edx,DWORD PTR [ebp-0x444]
  5f8add:	83 fa 10             	cmp    edx,0x10
  5f8ae0:	72 31                	jb     0x5f8b13
  5f8ae2:	8b 8d a8 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x458]
  5f8ae8:	42                   	inc    edx
  5f8ae9:	8b c1                	mov    eax,ecx
  5f8aeb:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f8af1:	72 16                	jb     0x5f8b09
  5f8af3:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f8af6:	83 c2 23             	add    edx,0x23
  5f8af9:	2b c1                	sub    eax,ecx
  5f8afb:	83 c0 fc             	add    eax,0xfffffffc
  5f8afe:	83 f8 1f             	cmp    eax,0x1f
  5f8b01:	76 06                	jbe    0x5f8b09
  5f8b03:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5f8b09:	52                   	push   edx
  5f8b0a:	51                   	push   ecx
  5f8b0b:	e8 8a 95 e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f8b10:	83 c4 08             	add    esp,0x8
  5f8b13:	8b 8d 84 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x47c]
  5f8b19:	85 c9                	test   ecx,ecx
  5f8b1b:	74 18                	je     0x5f8b35
  5f8b1d:	8b 85 8c fb ff ff    	mov    eax,DWORD PTR [ebp-0x474]
  5f8b23:	2b c1                	sub    eax,ecx
  5f8b25:	c1 f8 02             	sar    eax,0x2
  5f8b28:	50                   	push   eax
  5f8b29:	51                   	push   ecx
  5f8b2a:	8d 8d 84 fb ff ff    	lea    ecx,[ebp-0x47c]
  5f8b30:	e8 c7 ab e0 ff       	call   0x4036fc ; ["call resolved=0x487630 "]
  5f8b35:	8d 8d 90 fb ff ff    	lea    ecx,[ebp-0x470]
  5f8b3b:	e8 9e 14 e1 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5f8b40:	ff b5 90 fb ff ff    	push   DWORD PTR [ebp-0x470]
  5f8b46:	8d 8d 98 fb ff ff    	lea    ecx,[ebp-0x468]
  5f8b4c:	e8 fd 0d e1 ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  5f8b51:	8d 46 0e             	lea    eax,[esi+0xe]
  5f8b54:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  5f8b57:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  5f8b5e:	59                   	pop    ecx
  5f8b5f:	5f                   	pop    edi
  5f8b60:	5e                   	pop    esi
  5f8b61:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  5f8b64:	33 cd                	xor    ecx,ebp
  5f8b66:	e8 24 b9 e0 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5f8b6b:	8b e5                	mov    esp,ebp
  5f8b6d:	5d                   	pop    ebp
  5f8b6e:	c2 08 00             	ret    0x8
