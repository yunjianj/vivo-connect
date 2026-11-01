; BleGattClient::getGattService; image base 0x400000; static annotation only
  4eb690:	55                   	push   ebp
  4eb691:	8b ec                	mov    ebp,esp
  4eb693:	6a ff                	push   0xffffffff
  4eb695:	68 1e d7 67 00       	push   0x67d71e
  4eb69a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  4eb6a0:	50                   	push   eax
  4eb6a1:	81 ec 10 01 00 00    	sub    esp,0x110
  4eb6a7:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  4eb6ac:	33 c5                	xor    eax,ebp
  4eb6ae:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4eb6b1:	53                   	push   ebx
  4eb6b2:	56                   	push   esi
  4eb6b3:	57                   	push   edi
  4eb6b4:	50                   	push   eax
  4eb6b5:	8d 45 f4             	lea    eax,[ebp-0xc]
  4eb6b8:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  4eb6be:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  4eb6c1:	8b 7d 08             	mov    edi,DWORD PTR [ebp+0x8]
  4eb6c4:	b9 ec 86 7a 00       	mov    ecx,0x7a86ec
  4eb6c9:	89 bd 7c ff ff ff    	mov    DWORD PTR [ebp-0x84],edi
  4eb6cf:	e8 1a d4 f1 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  4eb6d4:	33 c0                	xor    eax,eax
  4eb6d6:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4eb6d9:	66 8b 4f 04          	mov    cx,WORD PTR [edi+0x4]
  4eb6dd:	66 89 4d 8a          	mov    WORD PTR [ebp-0x76],cx
  4eb6e1:	8d 51 01             	lea    edx,[ecx+0x1]
  4eb6e4:	66 83 fa 06          	cmp    dx,0x6
  4eb6e8:	0f 87 e5 09 00 00    	ja     0x4ec0d3
  4eb6ee:	66 89 4d 8a          	mov    WORD PTR [ebp-0x76],cx
  4eb6f2:	66 83 f9 02          	cmp    cx,0x2
  4eb6f6:	74 0c                	je     0x4eb704
  4eb6f8:	8b 87 d0 00 00 00    	mov    eax,DWORD PTR [edi+0xd0]
  4eb6fe:	89 45 a0             	mov    DWORD PTR [ebp-0x60],eax
  4eb701:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4eb704:	89 87 d0 00 00 00    	mov    DWORD PTR [edi+0xd0],eax
  4eb70a:	0f bf c2             	movsx  eax,dx
  4eb70d:	ff 24 85 f0 c0 4e 00 	jmp    DWORD PTR [eax*4+0x4ec0f0]
  4eb714:	c7 87 94 00 00 00 00 	mov    DWORD PTR [edi+0x94],0x0
  4eb71e:	c6 47 08 00          	mov    BYTE PTR [edi+0x8],0x0
  4eb722:	c7 47 0c 00 00 00 00 	mov    DWORD PTR [edi+0xc],0x0
  4eb729:	e9 32 06 00 00       	jmp    0x4ebd60
  4eb72e:	8b 47 14             	mov    eax,DWORD PTR [edi+0x14]
  4eb731:	8d 4f 14             	lea    ecx,[edi+0x14]
  4eb734:	89 45 80             	mov    DWORD PTR [ebp-0x80],eax
  4eb737:	85 c0                	test   eax,eax
  4eb739:	0f 84 44 09 00 00    	je     0x4ec083
  4eb73f:	e8 b6 9f f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4eb744:	e9 3a 09 00 00       	jmp    0x4ec083
  4eb749:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  4eb74d:	8d 57 1c             	lea    edx,[edi+0x1c]
  4eb750:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4eb753:	89 87 d0 00 00 00    	mov    DWORD PTR [edi+0xd0],eax
  4eb759:	8b 47 18             	mov    eax,DWORD PTR [edi+0x18]
  4eb75c:	8b b7 94 00 00 00    	mov    esi,DWORD PTR [edi+0x94]
  4eb762:	c7 02 00 00 00 00    	mov    DWORD PTR [edx],0x0
  4eb768:	89 85 6c ff ff ff    	mov    DWORD PTR [ebp-0x94],eax
  4eb76e:	8b 08                	mov    ecx,DWORD PTR [eax]
  4eb770:	89 75 94             	mov    DWORD PTR [ebp-0x6c],esi
  4eb773:	83 ce 04             	or     esi,0x4
  4eb776:	52                   	push   edx
  4eb777:	51                   	push   ecx
  4eb778:	8b 01                	mov    eax,DWORD PTR [ecx]
  4eb77a:	89 b7 94 00 00 00    	mov    DWORD PTR [edi+0x94],esi
  4eb780:	ff 50 20             	call   DWORD PTR [eax+0x20]
  4eb783:	85 c0                	test   eax,eax
  4eb785:	79 12                	jns    0x4eb799
  4eb787:	8b 8f d0 00 00 00    	mov    ecx,DWORD PTR [edi+0xd0]
  4eb78d:	89 4d a0             	mov    DWORD PTR [ebp-0x60],ecx
  4eb790:	50                   	push   eax
  4eb791:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  4eb794:	e8 5f 5b f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4eb799:	83 e6 fb             	and    esi,0xfffffffb
  4eb79c:	c7 45 fc 03 00 00 00 	mov    DWORD PTR [ebp-0x4],0x3
  4eb7a3:	c7 87 d0 00 00 00 03 	mov    DWORD PTR [edi+0xd0],0x3
  4eb7ad:	8d 4f 14             	lea    ecx,[edi+0x14]
  4eb7b0:	89 75 94             	mov    DWORD PTR [ebp-0x6c],esi
  4eb7b3:	83 ce 02             	or     esi,0x2
  4eb7b6:	89 b7 94 00 00 00    	mov    DWORD PTR [edi+0x94],esi
  4eb7bc:	8b 77 1c             	mov    esi,DWORD PTR [edi+0x1c]
  4eb7bf:	89 b5 68 ff ff ff    	mov    DWORD PTR [ebp-0x98],esi
  4eb7c5:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  4eb7c9:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4eb7cc:	89 75 90             	mov    DWORD PTR [ebp-0x70],esi
  4eb7cf:	c7 47 1c 00 00 00 00 	mov    DWORD PTR [edi+0x1c],0x0
  4eb7d6:	89 77 10             	mov    DWORD PTR [edi+0x10],esi
  4eb7d9:	89 87 d0 00 00 00    	mov    DWORD PTR [edi+0xd0],eax
  4eb7df:	8b 01                	mov    eax,DWORD PTR [ecx]
  4eb7e1:	89 45 80             	mov    DWORD PTR [ebp-0x80],eax
  4eb7e4:	85 c0                	test   eax,eax
  4eb7e6:	74 05                	je     0x4eb7ed
  4eb7e8:	e8 0d 9f f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4eb7ed:	8b 0d 54 3f 79 00    	mov    ecx,DWORD PTR ds:0x793f54
  4eb7f3:	85 c9                	test   ecx,ecx
  4eb7f5:	75 57                	jne    0x4eb84e
  4eb7f7:	8b 87 d0 00 00 00    	mov    eax,DWORD PTR [edi+0xd0]
  4eb7fd:	89 45 a0             	mov    DWORD PTR [ebp-0x60],eax
  4eb800:	6a 03                	push   0x3
  4eb802:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4eb805:	e8 ac 79 f1 ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  4eb80a:	8b d0                	mov    edx,eax
  4eb80c:	83 c4 04             	add    esp,0x4
  4eb80f:	89 97 a8 00 00 00    	mov    DWORD PTR [edi+0xa8],edx
  4eb815:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  4eb819:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  4eb81c:	89 8f d0 00 00 00    	mov    DWORD PTR [edi+0xd0],ecx
  4eb822:	85 d2                	test   edx,edx
  4eb824:	74 13                	je     0x4eb839
  4eb826:	8b c1                	mov    eax,ecx
  4eb828:	8b ca                	mov    ecx,edx
  4eb82a:	89 45 a0             	mov    DWORD PTR [ebp-0x60],eax
  4eb82d:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4eb830:	e8 7e 8b f1 ff       	call   0x4043b3 ; ["call resolved=0x5116c0 "]
  4eb835:	8b c8                	mov    ecx,eax
  4eb837:	eb 02                	jmp    0x4eb83b
  4eb839:	33 c9                	xor    ecx,ecx
  4eb83b:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  4eb83f:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4eb842:	89 87 d0 00 00 00    	mov    DWORD PTR [edi+0xd0],eax
  4eb848:	89 0d 54 3f 79 00    	mov    DWORD PTR ds:0x793f54,ecx
  4eb84e:	8b 87 d0 00 00 00    	mov    eax,DWORD PTR [edi+0xd0]
  4eb854:	89 45 a0             	mov    DWORD PTR [ebp-0x60],eax
  4eb857:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4eb85a:	e8 f0 d0 f1 ff       	call   0x40894f ; ["call resolved=0x5116f0 "]
  4eb85f:	84 c0                	test   al,al
  4eb861:	74 19                	je     0x4eb87c
  4eb863:	c6 47 fc 00          	mov    BYTE PTR [edi-0x4],0x0
  4eb867:	85 f6                	test   esi,esi
  4eb869:	0f 84 f9 07 00 00    	je     0x4ec068
  4eb86f:	8d 4f 10             	lea    ecx,[edi+0x10]
  4eb872:	e8 83 9e f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4eb877:	e9 ec 07 00 00       	jmp    0x4ec068
  4eb87c:	8b 06                	mov    eax,DWORD PTR [esi]
  4eb87e:	8b 48 18             	mov    ecx,DWORD PTR [eax+0x18]
  4eb881:	8d 87 ac 00 00 00    	lea    eax,[edi+0xac]
  4eb887:	50                   	push   eax
  4eb888:	56                   	push   esi
  4eb889:	ff d1                	call   ecx
  4eb88b:	85 c0                	test   eax,eax
  4eb88d:	79 12                	jns    0x4eb8a1
  4eb88f:	8b 8f d0 00 00 00    	mov    ecx,DWORD PTR [edi+0xd0]
  4eb895:	89 4d a0             	mov    DWORD PTR [ebp-0x60],ecx
  4eb898:	50                   	push   eax
  4eb899:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  4eb89c:	e8 57 5a f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4eb8a1:	8b 47 0c             	mov    eax,DWORD PTR [edi+0xc]
  4eb8a4:	40                   	inc    eax
  4eb8a5:	6a 5c                	push   0x5c
  4eb8a7:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4eb8ac:	89 45 84             	mov    DWORD PTR [ebp-0x7c],eax
  4eb8af:	e8 b2 ce 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4eb8b4:	83 c4 08             	add    esp,0x8
  4eb8b7:	85 c0                	test   eax,eax
  4eb8b9:	74 15                	je     0x4eb8d0
  4eb8bb:	6a 5c                	push   0x5c
  4eb8bd:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4eb8c2:	e8 9f ce 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4eb8c7:	83 c4 08             	add    esp,0x8
  4eb8ca:	40                   	inc    eax
  4eb8cb:	89 45 8c             	mov    DWORD PTR [ebp-0x74],eax
  4eb8ce:	eb 07                	jmp    0x4eb8d7
  4eb8d0:	c7 45 8c 88 de 6c 00 	mov    DWORD PTR [ebp-0x74],0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4eb8d7:	8b 8f ac 00 00 00    	mov    ecx,DWORD PTR [edi+0xac]
  4eb8dd:	8d 57 20             	lea    edx,[edi+0x20]
  4eb8e0:	51                   	push   ecx
  4eb8e1:	ff 75 84             	push   DWORD PTR [ebp-0x7c]
  4eb8e4:	c7 02 02 00 00 00    	mov    DWORD PTR [edx],0x2
  4eb8ea:	68 0c e1 6c 00       	push   0x6ce10c ; ["BleGattClient::getGattService"]
  4eb8ef:	6a 58                	push   0x58
  4eb8f1:	89 8d 64 ff ff ff    	mov    DWORD PTR [ebp-0x9c],ecx
  4eb8f7:	8b 87 d0 00 00 00    	mov    eax,DWORD PTR [edi+0xd0]
  4eb8fd:	89 45 a0             	mov    DWORD PTR [ebp-0x60],eax
  4eb900:	ff 75 8c             	push   DWORD PTR [ebp-0x74]
  4eb903:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4eb906:	8d 47 24             	lea    eax,[edi+0x24]
  4eb909:	68 30 e1 6c 00       	push   0x6ce130 ; ["[ConntctionModule][%s:%d][%s]: try ble conenct device times=%d: GattDeviceServicesResult statues =%d\n"]
  4eb90e:	52                   	push   edx
  4eb90f:	50                   	push   eax
  4eb910:	e8 f4 b6 f1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4eb915:	8b 47 38             	mov    eax,DWORD PTR [edi+0x38]
  4eb918:	83 c4 20             	add    esp,0x20
  4eb91b:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  4eb91e:	83 f8 10             	cmp    eax,0x10
  4eb921:	72 41                	jb     0x4eb964
  4eb923:	8b 47 38             	mov    eax,DWORD PTR [edi+0x38]
  4eb926:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  4eb929:	8b 57 24             	mov    edx,DWORD PTR [edi+0x24]
  4eb92c:	89 55 d4             	mov    DWORD PTR [ebp-0x2c],edx
  4eb92f:	8d 48 01             	lea    ecx,[eax+0x1]
  4eb932:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  4eb938:	72 20                	jb     0x4eb95a
  4eb93a:	8b 47 24             	mov    eax,DWORD PTR [edi+0x24]
  4eb93d:	83 c1 23             	add    ecx,0x23
  4eb940:	89 45 d4             	mov    DWORD PTR [ebp-0x2c],eax
  4eb943:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  4eb946:	8b 47 24             	mov    eax,DWORD PTR [edi+0x24]
  4eb949:	89 45 d4             	mov    DWORD PTR [ebp-0x2c],eax
  4eb94c:	2b c2                	sub    eax,edx
  4eb94e:	83 c0 fc             	add    eax,0xfffffffc
  4eb951:	83 f8 1f             	cmp    eax,0x1f
  4eb954:	0f 87 c8 06 00 00    	ja     0x4ec022
  4eb95a:	51                   	push   ecx
  4eb95b:	52                   	push   edx
  4eb95c:	e8 39 67 f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4eb961:	83 c4 08             	add    esp,0x8
  4eb964:	8b 06                	mov    eax,DWORD PTR [esi]
  4eb966:	8b 48 18             	mov    ecx,DWORD PTR [eax+0x18]
  4eb969:	8d 87 b0 00 00 00    	lea    eax,[edi+0xb0]
  4eb96f:	50                   	push   eax
  4eb970:	56                   	push   esi
  4eb971:	ff d1                	call   ecx
  4eb973:	85 c0                	test   eax,eax
  4eb975:	79 12                	jns    0x4eb989
  4eb977:	8b 8f d0 00 00 00    	mov    ecx,DWORD PTR [edi+0xd0]
  4eb97d:	89 4d a0             	mov    DWORD PTR [ebp-0x60],ecx
  4eb980:	50                   	push   eax
  4eb981:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  4eb984:	e8 6f 59 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4eb989:	8b 87 b0 00 00 00    	mov    eax,DWORD PTR [edi+0xb0]
  4eb98f:	89 85 60 ff ff ff    	mov    DWORD PTR [ebp-0xa0],eax
  4eb995:	85 c0                	test   eax,eax
  4eb997:	0f 85 97 03 00 00    	jne    0x4ebd34
  4eb99d:	8d 8f b4 00 00 00    	lea    ecx,[edi+0xb4]
  4eb9a3:	89 01                	mov    DWORD PTR [ecx],eax
  4eb9a5:	8b 06                	mov    eax,DWORD PTR [esi]
  4eb9a7:	51                   	push   ecx
  4eb9a8:	56                   	push   esi
  4eb9a9:	ff 50 20             	call   DWORD PTR [eax+0x20]
  4eb9ac:	85 c0                	test   eax,eax
  4eb9ae:	79 12                	jns    0x4eb9c2
  4eb9b0:	8b 8f d0 00 00 00    	mov    ecx,DWORD PTR [edi+0xd0]
  4eb9b6:	89 4d a0             	mov    DWORD PTR [ebp-0x60],ecx
  4eb9b9:	50                   	push   eax
  4eb9ba:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  4eb9bd:	e8 36 59 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4eb9c2:	8b 87 b4 00 00 00    	mov    eax,DWORD PTR [edi+0xb4]
  4eb9c8:	89 47 3c             	mov    DWORD PTR [edi+0x3c],eax
  4eb9cb:	8b 87 94 00 00 00    	mov    eax,DWORD PTR [edi+0x94]
  4eb9d1:	89 45 94             	mov    DWORD PTR [ebp-0x6c],eax
  4eb9d4:	83 c8 08             	or     eax,0x8
  4eb9d7:	89 45 9c             	mov    DWORD PTR [ebp-0x64],eax
  4eb9da:	89 87 94 00 00 00    	mov    DWORD PTR [edi+0x94],eax
  4eb9e0:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  4eb9e4:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4eb9e7:	89 87 d0 00 00 00    	mov    DWORD PTR [edi+0xd0],eax
  4eb9ed:	8b 87 b4 00 00 00    	mov    eax,DWORD PTR [edi+0xb4]
  4eb9f3:	89 45 8c             	mov    DWORD PTR [ebp-0x74],eax
  4eb9f6:	8b 8f b4 00 00 00    	mov    ecx,DWORD PTR [edi+0xb4]
  4eb9fc:	89 4d 8c             	mov    DWORD PTR [ebp-0x74],ecx
  4eb9ff:	8b 00                	mov    eax,DWORD PTR [eax]
  4eba01:	8b 50 1c             	mov    edx,DWORD PTR [eax+0x1c]
  4eba04:	8d 87 b8 00 00 00    	lea    eax,[edi+0xb8]
  4eba0a:	50                   	push   eax
  4eba0b:	51                   	push   ecx
  4eba0c:	ff d2                	call   edx
  4eba0e:	85 c0                	test   eax,eax
  4eba10:	79 12                	jns    0x4eba24
  4eba12:	8b 8f d0 00 00 00    	mov    ecx,DWORD PTR [edi+0xd0]
  4eba18:	89 4d a0             	mov    DWORD PTR [ebp-0x60],ecx
  4eba1b:	50                   	push   eax
  4eba1c:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  4eba1f:	e8 d4 58 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4eba24:	8b b7 b8 00 00 00    	mov    esi,DWORD PTR [edi+0xb8]
  4eba2a:	8d 4f 3c             	lea    ecx,[edi+0x3c]
  4eba2d:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  4eba31:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4eba34:	89 b5 5c ff ff ff    	mov    DWORD PTR [ebp-0xa4],esi
  4eba3a:	89 87 d0 00 00 00    	mov    DWORD PTR [edi+0xd0],eax
  4eba40:	e8 b5 9c f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4eba45:	83 fe 01             	cmp    esi,0x1
  4eba48:	8b 75 90             	mov    esi,DWORD PTR [ebp-0x70]
  4eba4b:	0f 82 f3 00 00 00    	jb     0x4ebb44
  4eba51:	8d 8f bc 00 00 00    	lea    ecx,[edi+0xbc]
  4eba57:	c6 47 08 01          	mov    BYTE PTR [edi+0x8],0x1
  4eba5b:	c7 01 00 00 00 00    	mov    DWORD PTR [ecx],0x0
  4eba61:	8b 06                	mov    eax,DWORD PTR [esi]
  4eba63:	51                   	push   ecx
  4eba64:	56                   	push   esi
  4eba65:	ff 50 20             	call   DWORD PTR [eax+0x20]
  4eba68:	85 c0                	test   eax,eax
  4eba6a:	79 12                	jns    0x4eba7e
  4eba6c:	8b 8f d0 00 00 00    	mov    ecx,DWORD PTR [edi+0xd0]
  4eba72:	89 4d a0             	mov    DWORD PTR [ebp-0x60],ecx
  4eba75:	50                   	push   eax
  4eba76:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  4eba79:	e8 7a 58 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4eba7e:	8b 4d 9c             	mov    ecx,DWORD PTR [ebp-0x64]
  4eba81:	8b 87 bc 00 00 00    	mov    eax,DWORD PTR [edi+0xbc]
  4eba87:	83 c9 10             	or     ecx,0x10
  4eba8a:	89 47 40             	mov    DWORD PTR [edi+0x40],eax
  4eba8d:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  4eba91:	8d 57 44             	lea    edx,[edi+0x44]
  4eba94:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4eba97:	89 87 d0 00 00 00    	mov    DWORD PTR [edi+0xd0],eax
  4eba9d:	8b 87 bc 00 00 00    	mov    eax,DWORD PTR [edi+0xbc]
  4ebaa3:	89 85 78 ff ff ff    	mov    DWORD PTR [ebp-0x88],eax
  4ebaa9:	c7 02 00 00 00 00    	mov    DWORD PTR [edx],0x0
  4ebaaf:	89 4d 94             	mov    DWORD PTR [ebp-0x6c],ecx
  4ebab2:	83 c9 20             	or     ecx,0x20
  4ebab5:	8b 00                	mov    eax,DWORD PTR [eax]
  4ebab7:	52                   	push   edx
  4ebab8:	89 8f 94 00 00 00    	mov    DWORD PTR [edi+0x94],ecx
  4ebabe:	6a 00                	push   0x0
  4ebac0:	8b 48 18             	mov    ecx,DWORD PTR [eax+0x18]
  4ebac3:	8b 87 bc 00 00 00    	mov    eax,DWORD PTR [edi+0xbc]
  4ebac9:	50                   	push   eax
  4ebaca:	89 85 78 ff ff ff    	mov    DWORD PTR [ebp-0x88],eax
  4ebad0:	ff d1                	call   ecx
  4ebad2:	85 c0                	test   eax,eax
  4ebad4:	79 12                	jns    0x4ebae8
  4ebad6:	8b 8f d0 00 00 00    	mov    ecx,DWORD PTR [edi+0xd0]
  4ebadc:	89 4d a0             	mov    DWORD PTR [ebp-0x60],ecx
  4ebadf:	50                   	push   eax
  4ebae0:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  4ebae3:	e8 10 58 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4ebae8:	8b 87 d4 00 00 00    	mov    eax,DWORD PTR [edi+0xd4]
  4ebaee:	8b 88 d8 00 00 00    	mov    ecx,DWORD PTR [eax+0xd8]
  4ebaf4:	8d 47 44             	lea    eax,[edi+0x44]
  4ebaf7:	83 c1 10             	add    ecx,0x10
  4ebafa:	89 4d 9c             	mov    DWORD PTR [ebp-0x64],ecx
  4ebafd:	3b c8                	cmp    ecx,eax
  4ebaff:	74 19                	je     0x4ebb1a
  4ebb01:	83 39 00             	cmp    DWORD PTR [ecx],0x0
  4ebb04:	74 08                	je     0x4ebb0e
  4ebb06:	e8 ef 9b f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ebb0b:	8b 4d 9c             	mov    ecx,DWORD PTR [ebp-0x64]
  4ebb0e:	8b 47 44             	mov    eax,DWORD PTR [edi+0x44]
  4ebb11:	c7 47 44 00 00 00 00 	mov    DWORD PTR [edi+0x44],0x0
  4ebb18:	89 01                	mov    DWORD PTR [ecx],eax
  4ebb1a:	8b 47 44             	mov    eax,DWORD PTR [edi+0x44]
  4ebb1d:	8d 4f 44             	lea    ecx,[edi+0x44]
  4ebb20:	89 85 58 ff ff ff    	mov    DWORD PTR [ebp-0xa8],eax
  4ebb26:	85 c0                	test   eax,eax
  4ebb28:	74 05                	je     0x4ebb2f
  4ebb2a:	e8 cb 9b f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ebb2f:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  4ebb33:	8d 4f 40             	lea    ecx,[edi+0x40]
  4ebb36:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4ebb39:	89 87 d0 00 00 00    	mov    DWORD PTR [edi+0xd0],eax
  4ebb3f:	e8 b6 9b f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ebb44:	8d 8f c0 00 00 00    	lea    ecx,[edi+0xc0]
  4ebb4a:	c7 01 00 00 00 00    	mov    DWORD PTR [ecx],0x0
  4ebb50:	8b 06                	mov    eax,DWORD PTR [esi]
  4ebb52:	51                   	push   ecx
  4ebb53:	56                   	push   esi
  4ebb54:	ff 50 20             	call   DWORD PTR [eax+0x20]
  4ebb57:	85 c0                	test   eax,eax
  4ebb59:	79 12                	jns    0x4ebb6d
  4ebb5b:	8b 8f d0 00 00 00    	mov    ecx,DWORD PTR [edi+0xd0]
  4ebb61:	89 4d a0             	mov    DWORD PTR [ebp-0x60],ecx
  4ebb64:	50                   	push   eax
  4ebb65:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  4ebb68:	e8 8b 57 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4ebb6d:	8b 87 c0 00 00 00    	mov    eax,DWORD PTR [edi+0xc0]
  4ebb73:	89 47 48             	mov    DWORD PTR [edi+0x48],eax
  4ebb76:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  4ebb7a:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4ebb7d:	89 87 d0 00 00 00    	mov    DWORD PTR [edi+0xd0],eax
  4ebb83:	8b 87 c0 00 00 00    	mov    eax,DWORD PTR [edi+0xc0]
  4ebb89:	89 45 9c             	mov    DWORD PTR [ebp-0x64],eax
  4ebb8c:	8b 8f c0 00 00 00    	mov    ecx,DWORD PTR [edi+0xc0]
  4ebb92:	89 4d 9c             	mov    DWORD PTR [ebp-0x64],ecx
  4ebb95:	8b 00                	mov    eax,DWORD PTR [eax]
  4ebb97:	8b 50 1c             	mov    edx,DWORD PTR [eax+0x1c]
  4ebb9a:	8d 87 c4 00 00 00    	lea    eax,[edi+0xc4]
  4ebba0:	50                   	push   eax
  4ebba1:	51                   	push   ecx
  4ebba2:	ff d2                	call   edx
  4ebba4:	85 c0                	test   eax,eax
  4ebba6:	79 12                	jns    0x4ebbba
  4ebba8:	8b 8f d0 00 00 00    	mov    ecx,DWORD PTR [edi+0xd0]
  4ebbae:	89 4d a0             	mov    DWORD PTR [ebp-0x60],ecx
  4ebbb1:	50                   	push   eax
  4ebbb2:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  4ebbb5:	e8 3e 57 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4ebbba:	8b b7 c4 00 00 00    	mov    esi,DWORD PTR [edi+0xc4]
  4ebbc0:	8d 4f 48             	lea    ecx,[edi+0x48]
  4ebbc3:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  4ebbc7:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4ebbca:	89 b5 54 ff ff ff    	mov    DWORD PTR [ebp-0xac],esi
  4ebbd0:	89 87 d0 00 00 00    	mov    DWORD PTR [edi+0xd0],eax
  4ebbd6:	e8 1f 9b f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ebbdb:	83 fe 01             	cmp    esi,0x1
  4ebbde:	73 1a                	jae    0x4ebbfa
  4ebbe0:	c6 45 fc 00          	mov    BYTE PTR [ebp-0x4],0x0
  4ebbe4:	8d 4f 10             	lea    ecx,[edi+0x10]
  4ebbe7:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4ebbea:	89 87 d0 00 00 00    	mov    DWORD PTR [edi+0xd0],eax
  4ebbf0:	e8 05 9b f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ebbf5:	e9 7f 03 00 00       	jmp    0x4ebf79
  4ebbfa:	8b 55 90             	mov    edx,DWORD PTR [ebp-0x70]
  4ebbfd:	8d 8f c8 00 00 00    	lea    ecx,[edi+0xc8]
  4ebc03:	c7 01 00 00 00 00    	mov    DWORD PTR [ecx],0x0
  4ebc09:	51                   	push   ecx
  4ebc0a:	52                   	push   edx
  4ebc0b:	8b 02                	mov    eax,DWORD PTR [edx]
  4ebc0d:	ff 50 20             	call   DWORD PTR [eax+0x20]
  4ebc10:	85 c0                	test   eax,eax
  4ebc12:	79 12                	jns    0x4ebc26
  4ebc14:	8b 8f d0 00 00 00    	mov    ecx,DWORD PTR [edi+0xd0]
  4ebc1a:	89 4d a0             	mov    DWORD PTR [ebp-0x60],ecx
  4ebc1d:	50                   	push   eax
  4ebc1e:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  4ebc21:	e8 d2 56 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4ebc26:	8b 87 c8 00 00 00    	mov    eax,DWORD PTR [edi+0xc8]
  4ebc2c:	89 47 4c             	mov    DWORD PTR [edi+0x4c],eax
  4ebc2f:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  4ebc33:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4ebc36:	89 87 d0 00 00 00    	mov    DWORD PTR [edi+0xd0],eax
  4ebc3c:	8b 87 c8 00 00 00    	mov    eax,DWORD PTR [edi+0xc8]
  4ebc42:	89 45 98             	mov    DWORD PTR [ebp-0x68],eax
  4ebc45:	8b 8f c8 00 00 00    	mov    ecx,DWORD PTR [edi+0xc8]
  4ebc4b:	89 4d 98             	mov    DWORD PTR [ebp-0x68],ecx
  4ebc4e:	8b 00                	mov    eax,DWORD PTR [eax]
  4ebc50:	8b 50 1c             	mov    edx,DWORD PTR [eax+0x1c]
  4ebc53:	8d 87 cc 00 00 00    	lea    eax,[edi+0xcc]
  4ebc59:	50                   	push   eax
  4ebc5a:	51                   	push   ecx
  4ebc5b:	ff d2                	call   edx
  4ebc5d:	85 c0                	test   eax,eax
  4ebc5f:	79 12                	jns    0x4ebc73
  4ebc61:	8b 8f d0 00 00 00    	mov    ecx,DWORD PTR [edi+0xd0]
  4ebc67:	89 4d a0             	mov    DWORD PTR [ebp-0x60],ecx
  4ebc6a:	50                   	push   eax
  4ebc6b:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  4ebc6e:	e8 85 56 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4ebc73:	6a 5c                	push   0x5c
  4ebc75:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4ebc7a:	e8 e7 ca 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4ebc7f:	83 c4 08             	add    esp,0x8
  4ebc82:	85 c0                	test   eax,eax
  4ebc84:	74 14                	je     0x4ebc9a
  4ebc86:	6a 5c                	push   0x5c
  4ebc88:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4ebc8d:	e8 d4 ca 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4ebc92:	83 c4 08             	add    esp,0x8
  4ebc95:	8d 70 01             	lea    esi,[eax+0x1]
  4ebc98:	eb 05                	jmp    0x4ebc9f
  4ebc9a:	be 88 de 6c 00       	mov    esi,0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4ebc9f:	8b 8f cc 00 00 00    	mov    ecx,DWORD PTR [edi+0xcc]
  4ebca5:	8d 57 50             	lea    edx,[edi+0x50]
  4ebca8:	51                   	push   ecx
  4ebca9:	ff 75 84             	push   DWORD PTR [ebp-0x7c]
  4ebcac:	c7 02 02 00 00 00    	mov    DWORD PTR [edx],0x2
  4ebcb2:	68 0c e1 6c 00       	push   0x6ce10c ; ["BleGattClient::getGattService"]
  4ebcb7:	6a 64                	push   0x64
  4ebcb9:	56                   	push   esi
  4ebcba:	89 4d 90             	mov    DWORD PTR [ebp-0x70],ecx
  4ebcbd:	8b 87 d0 00 00 00    	mov    eax,DWORD PTR [edi+0xd0]
  4ebcc3:	89 45 a0             	mov    DWORD PTR [ebp-0x60],eax
  4ebcc6:	68 b0 e1 6c 00       	push   0x6ce1b0 ; ["[ConntctionModule][%s:%d][%s]: Count%d: GattDeviceServicesResult ServicesCount=%d\n"]
  4ebccb:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4ebcce:	8d 47 54             	lea    eax,[edi+0x54]
  4ebcd1:	52                   	push   edx
  4ebcd2:	50                   	push   eax
  4ebcd3:	e8 31 b3 f1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4ebcd8:	8b 47 68             	mov    eax,DWORD PTR [edi+0x68]
  4ebcdb:	83 c4 20             	add    esp,0x20
  4ebcde:	89 45 d0             	mov    DWORD PTR [ebp-0x30],eax
  4ebce1:	83 f8 10             	cmp    eax,0x10
  4ebce4:	72 41                	jb     0x4ebd27
  4ebce6:	8b 47 68             	mov    eax,DWORD PTR [edi+0x68]
  4ebce9:	89 45 d0             	mov    DWORD PTR [ebp-0x30],eax
  4ebcec:	8b 4f 54             	mov    ecx,DWORD PTR [edi+0x54]
  4ebcef:	89 4d bc             	mov    DWORD PTR [ebp-0x44],ecx
  4ebcf2:	8d 50 01             	lea    edx,[eax+0x1]
  4ebcf5:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4ebcfb:	72 20                	jb     0x4ebd1d
  4ebcfd:	8b 47 54             	mov    eax,DWORD PTR [edi+0x54]
  4ebd00:	83 c2 23             	add    edx,0x23
  4ebd03:	89 45 bc             	mov    DWORD PTR [ebp-0x44],eax
  4ebd06:	8b 48 fc             	mov    ecx,DWORD PTR [eax-0x4]
  4ebd09:	8b 47 54             	mov    eax,DWORD PTR [edi+0x54]
  4ebd0c:	89 45 bc             	mov    DWORD PTR [ebp-0x44],eax
  4ebd0f:	2b c1                	sub    eax,ecx
  4ebd11:	83 c0 fc             	add    eax,0xfffffffc
  4ebd14:	83 f8 1f             	cmp    eax,0x1f
  4ebd17:	0f 87 05 03 00 00    	ja     0x4ec022
  4ebd1d:	52                   	push   edx
  4ebd1e:	51                   	push   ecx
  4ebd1f:	e8 76 63 f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4ebd24:	83 c4 08             	add    esp,0x8
  4ebd27:	8d 4f 4c             	lea    ecx,[edi+0x4c]
  4ebd2a:	e8 cb 99 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ebd2f:	e9 ac fe ff ff       	jmp    0x4ebbe0
  4ebd34:	68 e8 03 00 00       	push   0x3e8
  4ebd39:	ff 15 38 e0 79 00    	call   DWORD PTR ds:0x79e038
  4ebd3f:	c6 45 fc 00          	mov    BYTE PTR [ebp-0x4],0x0
  4ebd43:	8d 4f 10             	lea    ecx,[edi+0x10]
  4ebd46:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4ebd49:	89 87 d0 00 00 00    	mov    DWORD PTR [edi+0xd0],eax
  4ebd4f:	e8 a6 99 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ebd54:	8b 45 84             	mov    eax,DWORD PTR [ebp-0x7c]
  4ebd57:	89 47 0c             	mov    DWORD PTR [edi+0xc],eax
  4ebd5a:	66 0f 1f 44 00 00    	nop    WORD PTR [eax+eax*1+0x0]
  4ebd60:	83 7f 0c 03          	cmp    DWORD PTR [edi+0xc],0x3
  4ebd64:	0f 8d 0f 02 00 00    	jge    0x4ebf79
  4ebd6a:	c7 47 10 00 00 00 00 	mov    DWORD PTR [edi+0x10],0x0
  4ebd71:	8b 8f dd 00 00 00    	mov    ecx,DWORD PTR [edi+0xdd]
  4ebd77:	8d 47 01             	lea    eax,[edi+0x1]
  4ebd7a:	89 87 d4 00 00 00    	mov    DWORD PTR [edi+0xd4],eax
  4ebd80:	8d b7 8c 00 00 00    	lea    esi,[edi+0x8c]
  4ebd86:	8b 80 d8 00 00 00    	mov    eax,DWORD PTR [eax+0xd8]
  4ebd8c:	89 4d 98             	mov    DWORD PTR [ebp-0x68],ecx
  4ebd8f:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  4ebd95:	8b 10                	mov    edx,DWORD PTR [eax]
  4ebd97:	85 d2                	test   edx,edx
  4ebd99:	75 04                	jne    0x4ebd9f
  4ebd9b:	33 c0                	xor    eax,eax
  4ebd9d:	eb 23                	jmp    0x4ebdc2
  4ebd9f:	8b 02                	mov    eax,DWORD PTR [edx]
  4ebda1:	8d 8f 98 00 00 00    	lea    ecx,[edi+0x98]
  4ebda7:	51                   	push   ecx
  4ebda8:	68 48 dc 6c 00       	push   0x6cdc48
  4ebdad:	52                   	push   edx
  4ebdae:	c7 01 00 00 00 00    	mov    DWORD PTR [ecx],0x0
  4ebdb4:	ff 10                	call   DWORD PTR [eax]
  4ebdb6:	8b 87 98 00 00 00    	mov    eax,DWORD PTR [edi+0x98]
  4ebdbc:	89 85 50 ff ff ff    	mov    DWORD PTR [ebp-0xb0],eax
  4ebdc2:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  4ebdc6:	89 87 90 00 00 00    	mov    DWORD PTR [edi+0x90],eax
  4ebdcc:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4ebdcf:	89 87 d0 00 00 00    	mov    DWORD PTR [edi+0xd0],eax
  4ebdd5:	8b 87 90 00 00 00    	mov    eax,DWORD PTR [edi+0x90]
  4ebddb:	56                   	push   esi
  4ebddc:	8b 75 98             	mov    esi,DWORD PTR [ebp-0x68]
  4ebddf:	89 85 74 ff ff ff    	mov    DWORD PTR [ebp-0x8c],eax
  4ebde5:	8b 00                	mov    eax,DWORD PTR [eax]
  4ebde7:	6a 01                	push   0x1
  4ebde9:	0f 10 06             	movups xmm0,XMMWORD PTR [esi]
  4ebdec:	83 ec 10             	sub    esp,0x10
  4ebdef:	8b 50 2c             	mov    edx,DWORD PTR [eax+0x2c]
  4ebdf2:	8b cc                	mov    ecx,esp
  4ebdf4:	8b 87 90 00 00 00    	mov    eax,DWORD PTR [edi+0x90]
  4ebdfa:	89 85 74 ff ff ff    	mov    DWORD PTR [ebp-0x8c],eax
  4ebe00:	50                   	push   eax
  4ebe01:	0f 11 01             	movups XMMWORD PTR [ecx],xmm0
  4ebe04:	ff d2                	call   edx
  4ebe06:	85 c0                	test   eax,eax
  4ebe08:	79 12                	jns    0x4ebe1c
  4ebe0a:	8b 8f d0 00 00 00    	mov    ecx,DWORD PTR [edi+0xd0]
  4ebe10:	89 4d a0             	mov    DWORD PTR [ebp-0x60],ecx
  4ebe13:	50                   	push   eax
  4ebe14:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  4ebe17:	e8 dc 54 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4ebe1c:	8d 8f 90 00 00 00    	lea    ecx,[edi+0x90]
  4ebe22:	e8 d3 98 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ebe27:	8b 87 8c 00 00 00    	mov    eax,DWORD PTR [edi+0x8c]
  4ebe2d:	89 85 4c ff ff ff    	mov    DWORD PTR [ebp-0xb4],eax
  4ebe33:	89 47 14             	mov    DWORD PTR [edi+0x14],eax
  4ebe36:	8b 87 94 00 00 00    	mov    eax,DWORD PTR [edi+0x94]
  4ebe3c:	89 45 94             	mov    DWORD PTR [ebp-0x6c],eax
  4ebe3f:	83 c8 01             	or     eax,0x1
  4ebe42:	89 87 94 00 00 00    	mov    DWORD PTR [edi+0x94],eax
  4ebe48:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  4ebe4c:	8d 77 e8             	lea    esi,[edi-0x18]
  4ebe4f:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4ebe52:	56                   	push   esi
  4ebe53:	89 87 d0 00 00 00    	mov    DWORD PTR [edi+0xd0],eax
  4ebe59:	e8 4a cc 17 00       	call   0x668aa8 ; ["call resolved=0x668aa8 "]
  4ebe5e:	8b 47 f4             	mov    eax,DWORD PTR [edi-0xc]
  4ebe61:	56                   	push   esi
  4ebe62:	89 45 98             	mov    DWORD PTR [ebp-0x68],eax
  4ebe65:	e8 44 cc 17 00       	call   0x668aae ; ["call resolved=0x668aae "]
  4ebe6a:	83 7d 98 02          	cmp    DWORD PTR [ebp-0x68],0x2
  4ebe6e:	75 28                	jne    0x4ebe98
  4ebe70:	8d 8d 34 ff ff ff    	lea    ecx,[ebp-0xcc]
  4ebe76:	e8 ff 95 f1 ff       	call   0x40547a ; ["call resolved=0x46c370 "]
  4ebe7b:	8b 87 d0 00 00 00    	mov    eax,DWORD PTR [edi+0xd0]
  4ebe81:	89 45 a0             	mov    DWORD PTR [ebp-0x60],eax
  4ebe84:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4ebe87:	8d 85 34 ff ff ff    	lea    eax,[ebp-0xcc]
  4ebe8d:	68 6c e1 72 00       	push   0x72e16c
  4ebe92:	50                   	push   eax
  4ebe93:	e8 e0 c8 17 00       	call   0x668778 ; ["call resolved=0x668778 "]
  4ebe98:	83 7f 14 00          	cmp    DWORD PTR [edi+0x14],0x0
  4ebe9c:	8d 47 14             	lea    eax,[edi+0x14]
  4ebe9f:	89 47 18             	mov    DWORD PTR [edi+0x18],eax
  4ebea2:	75 04                	jne    0x4ebea8
  4ebea4:	33 c0                	xor    eax,eax
  4ebea6:	eb 31                	jmp    0x4ebed9
  4ebea8:	8b 47 14             	mov    eax,DWORD PTR [edi+0x14]
  4ebeab:	8d 97 a4 00 00 00    	lea    edx,[edi+0xa4]
  4ebeb1:	89 45 80             	mov    DWORD PTR [ebp-0x80],eax
  4ebeb4:	52                   	push   edx
  4ebeb5:	68 5c 1d 6c 00       	push   0x6c1d5c
  4ebeba:	8b 00                	mov    eax,DWORD PTR [eax]
  4ebebc:	c7 02 00 00 00 00    	mov    DWORD PTR [edx],0x0
  4ebec2:	8b 08                	mov    ecx,DWORD PTR [eax]
  4ebec4:	8b 47 14             	mov    eax,DWORD PTR [edi+0x14]
  4ebec7:	50                   	push   eax
  4ebec8:	89 45 80             	mov    DWORD PTR [ebp-0x80],eax
  4ebecb:	ff d1                	call   ecx
  4ebecd:	8b 87 a4 00 00 00    	mov    eax,DWORD PTR [edi+0xa4]
  4ebed3:	89 85 48 ff ff ff    	mov    DWORD PTR [ebp-0xb8],eax
  4ebed9:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  4ebedd:	8d 8f a0 00 00 00    	lea    ecx,[edi+0xa0]
  4ebee3:	89 87 9c 00 00 00    	mov    DWORD PTR [edi+0x9c],eax
  4ebee9:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4ebeec:	89 87 d0 00 00 00    	mov    DWORD PTR [edi+0xd0],eax
  4ebef2:	8b 87 9c 00 00 00    	mov    eax,DWORD PTR [edi+0x9c]
  4ebef8:	89 85 70 ff ff ff    	mov    DWORD PTR [ebp-0x90],eax
  4ebefe:	51                   	push   ecx
  4ebeff:	8b 00                	mov    eax,DWORD PTR [eax]
  4ebf01:	8b 50 1c             	mov    edx,DWORD PTR [eax+0x1c]
  4ebf04:	8b 87 9c 00 00 00    	mov    eax,DWORD PTR [edi+0x9c]
  4ebf0a:	50                   	push   eax
  4ebf0b:	89 85 70 ff ff ff    	mov    DWORD PTR [ebp-0x90],eax
  4ebf11:	ff d2                	call   edx
  4ebf13:	85 c0                	test   eax,eax
  4ebf15:	79 12                	jns    0x4ebf29
  4ebf17:	8b 8f d0 00 00 00    	mov    ecx,DWORD PTR [edi+0xd0]
  4ebf1d:	89 4d a0             	mov    DWORD PTR [ebp-0x60],ecx
  4ebf20:	50                   	push   eax
  4ebf21:	89 4d fc             	mov    DWORD PTR [ebp-0x4],ecx
  4ebf24:	e8 cf 53 f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
  4ebf29:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  4ebf2d:	8d 8f 9c 00 00 00    	lea    ecx,[edi+0x9c]
  4ebf33:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4ebf36:	89 87 d0 00 00 00    	mov    DWORD PTR [edi+0xd0],eax
  4ebf3c:	e8 b9 97 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ebf41:	8b 87 a0 00 00 00    	mov    eax,DWORD PTR [edi+0xa0]
  4ebf47:	89 85 44 ff ff ff    	mov    DWORD PTR [ebp-0xbc],eax
  4ebf4d:	83 f8 01             	cmp    eax,0x1
  4ebf50:	0f 84 f3 f7 ff ff    	je     0x4eb749
  4ebf56:	b8 04 00 00 00       	mov    eax,0x4
  4ebf5b:	8d 4f 18             	lea    ecx,[edi+0x18]
  4ebf5e:	66 89 47 04          	mov    WORD PTR [edi+0x4],ax
  4ebf62:	8b 87 d0 00 00 00    	mov    eax,DWORD PTR [edi+0xd0]
  4ebf68:	89 45 a0             	mov    DWORD PTR [ebp-0x60],eax
  4ebf6b:	57                   	push   edi
  4ebf6c:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4ebf6f:	e8 3f 57 f1 ff       	call   0x4016b3 ; ["call resolved=0x4e9530 "]
  4ebf74:	e9 5b 01 00 00       	jmp    0x4ec0d4
  4ebf79:	80 7f 08 00          	cmp    BYTE PTR [edi+0x8],0x0
  4ebf7d:	0f 85 b5 00 00 00    	jne    0x4ec038
  4ebf83:	6a 5c                	push   0x5c
  4ebf85:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4ebf8a:	e8 d7 c7 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4ebf8f:	83 c4 08             	add    esp,0x8
  4ebf92:	85 c0                	test   eax,eax
  4ebf94:	74 14                	je     0x4ebfaa
  4ebf96:	6a 5c                	push   0x5c
  4ebf98:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4ebf9d:	e8 c4 c7 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4ebfa2:	83 c4 08             	add    esp,0x8
  4ebfa5:	8d 50 01             	lea    edx,[eax+0x1]
  4ebfa8:	eb 05                	jmp    0x4ebfaf
  4ebfaa:	ba 88 de 6c 00       	mov    edx,0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4ebfaf:	68 0c e1 6c 00       	push   0x6ce10c ; ["BleGattClient::getGattService"]
  4ebfb4:	6a 71                	push   0x71
  4ebfb6:	8d 4f 6c             	lea    ecx,[edi+0x6c]
  4ebfb9:	c7 01 02 00 00 00    	mov    DWORD PTR [ecx],0x2
  4ebfbf:	8b 87 d0 00 00 00    	mov    eax,DWORD PTR [edi+0xd0]
  4ebfc5:	52                   	push   edx
  4ebfc6:	89 45 a0             	mov    DWORD PTR [ebp-0x60],eax
  4ebfc9:	68 14 e2 6c 00       	push   0x6ce214 ; ["[ConntctionModule][%s:%d][%s]:connect device failed 3 times\n"]
  4ebfce:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4ebfd1:	8d 47 70             	lea    eax,[edi+0x70]
  4ebfd4:	51                   	push   ecx
  4ebfd5:	50                   	push   eax
  4ebfd6:	e8 2e b0 f1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4ebfdb:	8b 87 84 00 00 00    	mov    eax,DWORD PTR [edi+0x84]
  4ebfe1:	83 c4 18             	add    esp,0x18
  4ebfe4:	89 45 b8             	mov    DWORD PTR [ebp-0x48],eax
  4ebfe7:	83 f8 10             	cmp    eax,0x10
  4ebfea:	72 46                	jb     0x4ec032
  4ebfec:	8b 87 84 00 00 00    	mov    eax,DWORD PTR [edi+0x84]
  4ebff2:	89 45 b8             	mov    DWORD PTR [ebp-0x48],eax
  4ebff5:	8b 57 70             	mov    edx,DWORD PTR [edi+0x70]
  4ebff8:	89 55 a4             	mov    DWORD PTR [ebp-0x5c],edx
  4ebffb:	8d 48 01             	lea    ecx,[eax+0x1]
  4ebffe:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  4ec004:	72 22                	jb     0x4ec028
  4ec006:	8b 47 70             	mov    eax,DWORD PTR [edi+0x70]
  4ec009:	83 c1 23             	add    ecx,0x23
  4ec00c:	89 45 a4             	mov    DWORD PTR [ebp-0x5c],eax
  4ec00f:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  4ec012:	8b 47 70             	mov    eax,DWORD PTR [edi+0x70]
  4ec015:	89 45 a4             	mov    DWORD PTR [ebp-0x5c],eax
  4ec018:	2b c2                	sub    eax,edx
  4ec01a:	83 c0 fc             	add    eax,0xfffffffc
  4ec01d:	83 f8 1f             	cmp    eax,0x1f
  4ec020:	76 06                	jbe    0x4ec028
  4ec022:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  4ec028:	51                   	push   ecx
  4ec029:	52                   	push   edx
  4ec02a:	e8 6b 60 f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4ec02f:	83 c4 08             	add    esp,0x8
  4ec032:	c6 47 fc 00          	mov    BYTE PTR [edi-0x4],0x0
  4ec036:	eb 30                	jmp    0x4ec068
  4ec038:	c6 47 fc 01          	mov    BYTE PTR [edi-0x4],0x1
  4ec03c:	eb 2a                	jmp    0x4ec068
  4ec03e:	8b 8d 7c ff ff ff    	mov    ecx,DWORD PTR [ebp-0x84]
  4ec044:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4ec047:	89 81 d0 00 00 00    	mov    DWORD PTR [ecx+0xd0],eax
  4ec04d:	83 c8 ff             	or     eax,0xffffffff
  4ec050:	66 89 41 04          	mov    WORD PTR [ecx+0x4],ax
  4ec054:	83 c1 d0             	add    ecx,0xffffffd0
  4ec057:	e8 84 d3 f1 ff       	call   0x4093e0 ; ["call resolved=0x4efa00 "]
  4ec05c:	b8 62 c0 4e 00       	mov    eax,0x4ec062
  4ec061:	c3                   	ret
  4ec062:	8b bd 7c ff ff ff    	mov    edi,DWORD PTR [ebp-0x84]
  4ec068:	8d 47 d0             	lea    eax,[edi-0x30]
  4ec06b:	8d 8f 88 00 00 00    	lea    ecx,[edi+0x88]
  4ec071:	89 01                	mov    DWORD PTR [ecx],eax
  4ec073:	33 c0                	xor    eax,eax
  4ec075:	57                   	push   edi
  4ec076:	66 89 47 04          	mov    WORD PTR [edi+0x4],ax
  4ec07a:	e8 0d 55 f1 ff       	call   0x40158c ; ["call resolved=0x4e9850 "]
  4ec07f:	84 c0                	test   al,al
  4ec081:	75 51                	jne    0x4ec0d4
  4ec083:	8d 77 d0             	lea    esi,[edi-0x30]
  4ec086:	83 7e 20 00          	cmp    DWORD PTR [esi+0x20],0x0
  4ec08a:	8d 4e 20             	lea    ecx,[esi+0x20]
  4ec08d:	74 05                	je     0x4ec094
  4ec08f:	e8 66 96 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ec094:	83 7e 1c 00          	cmp    DWORD PTR [esi+0x1c],0x0
  4ec098:	8d 4e 1c             	lea    ecx,[esi+0x1c]
  4ec09b:	74 05                	je     0x4ec0a2
  4ec09d:	e8 58 96 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4ec0a2:	8d 46 10             	lea    eax,[esi+0x10]
  4ec0a5:	50                   	push   eax
  4ec0a6:	e8 eb 95 17 00       	call   0x665696 ; ["call resolved=0x665696 "]
  4ec0ab:	83 c4 04             	add    esp,0x4
  4ec0ae:	8b ce                	mov    ecx,esi
  4ec0b0:	e8 5f 8b f1 ff       	call   0x404c14 ; ["call resolved=0x4ef7c0 "]
  4ec0b5:	f0 ff 0d 84 15 79 00 	lock dec DWORD PTR ds:0x791584
  4ec0bc:	66 83 7f 06 00       	cmp    WORD PTR [edi+0x6],0x0
  4ec0c1:	74 11                	je     0x4ec0d4
  4ec0c3:	68 11 01 00 00       	push   0x111
  4ec0c8:	56                   	push   esi
  4ec0c9:	e8 cc 5f f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4ec0ce:	83 c4 08             	add    esp,0x8
  4ec0d1:	eb 01                	jmp    0x4ec0d4
