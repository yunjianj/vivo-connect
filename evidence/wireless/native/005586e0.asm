; BtFarawayDevice::recvMessageAndHeartbeatLoop; image base 0x400000; static annotation only
  5586e0:	55                   	push   ebp
  5586e1:	8d ac 24 cc f7 ff ff 	lea    ebp,[esp-0x834]
  5586e8:	81 ec 34 08 00 00    	sub    esp,0x834
  5586ee:	6a ff                	push   0xffffffff
  5586f0:	68 67 7e 68 00       	push   0x687e67
  5586f5:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  5586fb:	50                   	push   eax
  5586fc:	83 ec 10             	sub    esp,0x10
  5586ff:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  558704:	33 c5                	xor    eax,ebp
  558706:	89 85 30 08 00 00    	mov    DWORD PTR [ebp+0x830],eax
  55870c:	53                   	push   ebx
  55870d:	56                   	push   esi
  55870e:	57                   	push   edi
  55870f:	50                   	push   eax
  558710:	8d 45 f4             	lea    eax,[ebp-0xc]
  558713:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  558719:	8b d9                	mov    ebx,ecx
  55871b:	b9 74 8b 7a 00       	mov    ecx,0x7a8b74
  558720:	e8 c9 03 eb ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  558725:	68 e8 03 00 00       	push   0x3e8
  55872a:	ff 15 38 e0 79 00    	call   DWORD PTR ds:0x79e038
  558730:	68 00 04 00 00       	push   0x400
  558735:	8d 85 30 04 00 00    	lea    eax,[ebp+0x430]
  55873b:	6a 00                	push   0x0
  55873d:	50                   	push   eax
  55873e:	e8 53 00 11 00       	call   0x668796 ; ["call resolved=0x668796 "]
  558743:	83 c4 0c             	add    esp,0xc
  558746:	c7 45 e4 00 00 00 00 	mov    DWORD PTR [ebp-0x1c],0x0
  55874d:	83 bb 60 0e 00 00 00 	cmp    DWORD PTR [ebx+0xe60],0x0
  558754:	0f 84 fc 01 00 00    	je     0x558956
  55875a:	66 0f 1f 44 00 00    	nop    WORD PTR [eax+eax*1+0x0]
  558760:	8b 03                	mov    eax,DWORD PTR [ebx]
  558762:	8d 4d e4             	lea    ecx,[ebp-0x1c]
  558765:	51                   	push   ecx
  558766:	8d 8d 30 04 00 00    	lea    ecx,[ebp+0x430]
  55876c:	c7 45 f0 00 00 00 00 	mov    DWORD PTR [ebp-0x10],0x0
  558773:	51                   	push   ecx
  558774:	8b 40 24             	mov    eax,DWORD PTR [eax+0x24]
  558777:	8d 4d f0             	lea    ecx,[ebp-0x10]
  55877a:	51                   	push   ecx
  55877b:	8b cb                	mov    ecx,ebx
  55877d:	ff d0                	call   eax
  55877f:	84 c0                	test   al,al
  558781:	0f 84 cf 01 00 00    	je     0x558956
  558787:	b9 00 01 00 00       	mov    ecx,0x100
  55878c:	c7 45 18 00 00 00 00 	mov    DWORD PTR [ebp+0x18],0x0
  558793:	8d b5 3e 04 00 00    	lea    esi,[ebp+0x43e]
  558799:	c7 45 28 00 00 00 00 	mov    DWORD PTR [ebp+0x28],0x0
  5587a0:	8d 7d 30             	lea    edi,[ebp+0x30]
  5587a3:	c7 45 2c 0f 00 00 00 	mov    DWORD PTR [ebp+0x2c],0xf
  5587aa:	8d 45 30             	lea    eax,[ebp+0x30]
  5587ad:	c6 45 18 00          	mov    BYTE PTR [ebp+0x18],0x0
  5587b1:	f3 a5                	rep movs DWORD PTR es:[edi],DWORD PTR ds:[esi]
  5587b3:	8d 50 01             	lea    edx,[eax+0x1]
  5587b6:	8a 08                	mov    cl,BYTE PTR [eax]
  5587b8:	40                   	inc    eax
  5587b9:	84 c9                	test   cl,cl
  5587bb:	75 f9                	jne    0x5587b6
  5587bd:	2b c2                	sub    eax,edx
  5587bf:	8d 4d 18             	lea    ecx,[ebp+0x18]
  5587c2:	50                   	push   eax
  5587c3:	8d 45 30             	lea    eax,[ebp+0x30]
  5587c6:	50                   	push   eax
  5587c7:	e8 4b bc ea ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  5587cc:	83 7d 2c 10          	cmp    DWORD PTR [ebp+0x2c],0x10
  5587d0:	8d 7d 18             	lea    edi,[ebp+0x18]
  5587d3:	8d 73 1c             	lea    esi,[ebx+0x1c]
  5587d6:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  5587dd:	0f 43 7d 18          	cmovae edi,DWORD PTR [ebp+0x18]
  5587e1:	83 7e 14 10          	cmp    DWORD PTR [esi+0x14],0x10
  5587e5:	72 02                	jb     0x5587e9
  5587e7:	8b 36                	mov    esi,DWORD PTR [esi]
  5587e9:	6a 5c                	push   0x5c
  5587eb:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5587f0:	e8 71 ff 10 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5587f5:	83 c4 08             	add    esp,0x8
  5587f8:	85 c0                	test   eax,eax
  5587fa:	74 12                	je     0x55880e
  5587fc:	6a 5c                	push   0x5c
  5587fe:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  558803:	e8 5e ff 10 00       	call   0x668766 ; ["call resolved=0x668766 "]
  558808:	83 c4 08             	add    esp,0x8
  55880b:	40                   	inc    eax
  55880c:	eb 05                	jmp    0x558813
  55880e:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  558813:	57                   	push   edi
  558814:	56                   	push   esi
  558815:	68 08 88 6d 00       	push   0x6d8808 ; ["BtFarawayDevice::recvMessageAndHeartbeatLoop"]
  55881a:	68 fc 00 00 00       	push   0xfc
  55881f:	50                   	push   eax
  558820:	68 40 88 6d 00       	push   0x6d8840 ; ["[ConntctionModule][%s:%d][%s]: [INTERACTION][MOBILEPHONE_TO_CONNSERVER] id %s recvMessageAndHeartbeatLoop FARAWAYBT recv data is: %s\n"]
  558825:	8d 45 f0             	lea    eax,[ebp-0x10]
  558828:	c7 45 f0 02 00 00 00 	mov    DWORD PTR [ebp-0x10],0x2
  55882f:	50                   	push   eax
  558830:	8d 45 00             	lea    eax,[ebp+0x0]
  558833:	50                   	push   eax
  558834:	e8 d0 e7 ea ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  558839:	8b 55 14             	mov    edx,DWORD PTR [ebp+0x14]
  55883c:	83 c4 20             	add    esp,0x20
  55883f:	83 fa 10             	cmp    edx,0x10
  558842:	72 2c                	jb     0x558870
  558844:	8b 4d 00             	mov    ecx,DWORD PTR [ebp+0x0]
  558847:	42                   	inc    edx
  558848:	8b c1                	mov    eax,ecx
  55884a:	81 fa 00 10 00 00    	cmp    edx,0x1000
  558850:	72 14                	jb     0x558866
  558852:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  558855:	83 c2 23             	add    edx,0x23
  558858:	2b c1                	sub    eax,ecx
  55885a:	83 c0 fc             	add    eax,0xfffffffc
  55885d:	83 f8 1f             	cmp    eax,0x1f
  558860:	0f 87 75 01 00 00    	ja     0x5589db
  558866:	52                   	push   edx
  558867:	51                   	push   ecx
  558868:	e8 2d 98 ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  55886d:	83 c4 08             	add    esp,0x8
  558870:	8d b3 68 0e 00 00    	lea    esi,[ebx+0xe68]
  558876:	c6 45 ec 00          	mov    BYTE PTR [ebp-0x14],0x0
  55887a:	8d 7e 14             	lea    edi,[esi+0x14]
  55887d:	57                   	push   edi
  55887e:	89 7d e8             	mov    DWORD PTR [ebp-0x18],edi
  558881:	e8 7c ce 10 00       	call   0x665702 ; ["call resolved=0x665702 "]
  558886:	83 c4 04             	add    esp,0x4
  558889:	85 c0                	test   eax,eax
  55888b:	0f 85 cb 01 00 00    	jne    0x558a5c
  558891:	c6 45 ec 01          	mov    BYTE PTR [ebp-0x14],0x1
  558895:	8b 56 10             	mov    edx,DWORD PTR [esi+0x10]
  558898:	8b 4e 08             	mov    ecx,DWORD PTR [esi+0x8]
  55889b:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  55889f:	8d 42 01             	lea    eax,[edx+0x1]
  5588a2:	3b c8                	cmp    ecx,eax
  5588a4:	77 0f                	ja     0x5588b5
  5588a6:	6a 01                	push   0x1
  5588a8:	8b ce                	mov    ecx,esi
  5588aa:	e8 cd ab ea ff       	call   0x40347c ; ["call resolved=0x4e8fe0 "]
  5588af:	8b 4e 08             	mov    ecx,DWORD PTR [esi+0x8]
  5588b2:	8b 56 10             	mov    edx,DWORD PTR [esi+0x10]
  5588b5:	8d 41 ff             	lea    eax,[ecx-0x1]
  5588b8:	49                   	dec    ecx
  5588b9:	23 46 0c             	and    eax,DWORD PTR [esi+0xc]
  5588bc:	89 46 0c             	mov    DWORD PTR [esi+0xc],eax
  5588bf:	03 c2                	add    eax,edx
  5588c1:	23 c8                	and    ecx,eax
  5588c3:	8d 04 8d 00 00 00 00 	lea    eax,[ecx*4+0x0]
  5588ca:	8b 4e 04             	mov    ecx,DWORD PTR [esi+0x4]
  5588cd:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  5588d0:	83 3c 08 00          	cmp    DWORD PTR [eax+ecx*1],0x0
  5588d4:	75 18                	jne    0x5588ee
  5588d6:	6a 18                	push   0x18
  5588d8:	e8 d9 a8 ea ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  5588dd:	8b 4e 04             	mov    ecx,DWORD PTR [esi+0x4]
  5588e0:	83 c4 04             	add    esp,0x4
  5588e3:	8b 55 f0             	mov    edx,DWORD PTR [ebp-0x10]
  5588e6:	89 04 0a             	mov    DWORD PTR [edx+ecx*1],eax
  5588e9:	8b c2                	mov    eax,edx
  5588eb:	8b 4e 04             	mov    ecx,DWORD PTR [esi+0x4]
  5588ee:	8b 0c 08             	mov    ecx,DWORD PTR [eax+ecx*1]
  5588f1:	8d 55 18             	lea    edx,[ebp+0x18]
  5588f4:	52                   	push   edx
  5588f5:	e8 91 d3 ea ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  5588fa:	ff 46 10             	inc    DWORD PTR [esi+0x10]
  5588fd:	57                   	push   edi
  5588fe:	e8 05 ce 10 00       	call   0x665708 ; ["call resolved=0x665708 "]
  558903:	83 c4 04             	add    esp,0x4
  558906:	6a 0a                	push   0xa
  558908:	ff 15 38 e0 79 00    	call   DWORD PTR ds:0x79e038
  55890e:	8b 55 2c             	mov    edx,DWORD PTR [ebp+0x2c]
  558911:	c7 45 fc ff ff ff ff 	mov    DWORD PTR [ebp-0x4],0xffffffff
  558918:	83 fa 10             	cmp    edx,0x10
  55891b:	72 2c                	jb     0x558949
  55891d:	8b 4d 18             	mov    ecx,DWORD PTR [ebp+0x18]
  558920:	42                   	inc    edx
  558921:	8b c1                	mov    eax,ecx
  558923:	81 fa 00 10 00 00    	cmp    edx,0x1000
  558929:	72 14                	jb     0x55893f
  55892b:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  55892e:	83 c2 23             	add    edx,0x23
  558931:	2b c1                	sub    eax,ecx
  558933:	83 c0 fc             	add    eax,0xfffffffc
  558936:	83 f8 1f             	cmp    eax,0x1f
  558939:	0f 87 9c 00 00 00    	ja     0x5589db
  55893f:	52                   	push   edx
  558940:	51                   	push   ecx
  558941:	e8 54 97 ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  558946:	83 c4 08             	add    esp,0x8
  558949:	83 bb 60 0e 00 00 00 	cmp    DWORD PTR [ebx+0xe60],0x0
  558950:	0f 85 0a fe ff ff    	jne    0x558760
  558956:	83 c3 1c             	add    ebx,0x1c
  558959:	8b f3                	mov    esi,ebx
  55895b:	83 7b 14 10          	cmp    DWORD PTR [ebx+0x14],0x10
  55895f:	72 02                	jb     0x558963
  558961:	8b 33                	mov    esi,DWORD PTR [ebx]
  558963:	6a 5c                	push   0x5c
  558965:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  55896a:	e8 f7 fd 10 00       	call   0x668766 ; ["call resolved=0x668766 "]
  55896f:	83 c4 08             	add    esp,0x8
  558972:	85 c0                	test   eax,eax
  558974:	74 12                	je     0x558988
  558976:	6a 5c                	push   0x5c
  558978:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  55897d:	e8 e4 fd 10 00       	call   0x668766 ; ["call resolved=0x668766 "]
  558982:	83 c4 08             	add    esp,0x8
  558985:	40                   	inc    eax
  558986:	eb 05                	jmp    0x55898d
  558988:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  55898d:	56                   	push   esi
  55898e:	68 08 88 6d 00       	push   0x6d8808 ; ["BtFarawayDevice::recvMessageAndHeartbeatLoop"]
  558993:	68 03 01 00 00       	push   0x103
  558998:	50                   	push   eax
  558999:	68 e0 88 6d 00       	push   0x6d88e0 ; ["[ConntctionModule][%s:%d][%s]: device %s heartbeat is alnormal\n"]
  55899e:	8d 45 f0             	lea    eax,[ebp-0x10]
  5589a1:	c7 45 f0 02 00 00 00 	mov    DWORD PTR [ebp-0x10],0x2
  5589a8:	50                   	push   eax
  5589a9:	8d 45 00             	lea    eax,[ebp+0x0]
  5589ac:	50                   	push   eax
  5589ad:	e8 57 e6 ea ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5589b2:	8b 55 14             	mov    edx,DWORD PTR [ebp+0x14]
  5589b5:	83 c4 1c             	add    esp,0x1c
  5589b8:	83 fa 10             	cmp    edx,0x10
  5589bb:	72 2e                	jb     0x5589eb
  5589bd:	8b 4d 00             	mov    ecx,DWORD PTR [ebp+0x0]
  5589c0:	42                   	inc    edx
  5589c1:	8b c1                	mov    eax,ecx
  5589c3:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5589c9:	72 16                	jb     0x5589e1
  5589cb:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5589ce:	83 c2 23             	add    edx,0x23
  5589d1:	2b c1                	sub    eax,ecx
  5589d3:	83 c0 fc             	add    eax,0xfffffffc
  5589d6:	83 f8 1f             	cmp    eax,0x1f
  5589d9:	76 06                	jbe    0x5589e1
  5589db:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5589e1:	52                   	push   edx
  5589e2:	51                   	push   ecx
  5589e3:	e8 b2 96 ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5589e8:	83 c4 08             	add    esp,0x8
  5589eb:	a1 08 8c 79 00       	mov    eax,ds:0x798c08
  5589f0:	85 c0                	test   eax,eax
  5589f2:	75 32                	jne    0x558a26
  5589f4:	68 80 00 00 00       	push   0x80
  5589f9:	e8 b8 a7 ea ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  5589fe:	83 c4 04             	add    esp,0x4
  558a01:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  558a04:	c7 45 fc 02 00 00 00 	mov    DWORD PTR [ebp-0x4],0x2
  558a0b:	85 c0                	test   eax,eax
  558a0d:	74 09                	je     0x558a18
  558a0f:	8b c8                	mov    ecx,eax
  558a11:	e8 f7 f5 ea ff       	call   0x40800d ; ["call resolved=0x5fa6d0 "]
  558a16:	eb 02                	jmp    0x558a1a
  558a18:	33 c0                	xor    eax,eax
  558a1a:	c7 45 fc ff ff ff ff 	mov    DWORD PTR [ebp-0x4],0xffffffff
  558a21:	a3 08 8c 79 00       	mov    ds:0x798c08,eax
  558a26:	8d 4d ec             	lea    ecx,[ebp-0x14]
  558a29:	c7 45 ec 02 00 00 00 	mov    DWORD PTR [ebp-0x14],0x2
  558a30:	51                   	push   ecx
  558a31:	53                   	push   ebx
  558a32:	8b c8                	mov    ecx,eax
  558a34:	e8 44 b8 ea ff       	call   0x40427d ; ["call resolved=0x556440 PreConnectionAbnormalPublisher::notifySubscribers"]
  558a39:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  558a3c:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  558a43:	59                   	pop    ecx
  558a44:	5f                   	pop    edi
  558a45:	5e                   	pop    esi
  558a46:	5b                   	pop    ebx
  558a47:	8b 8d 30 08 00 00    	mov    ecx,DWORD PTR [ebp+0x830]
  558a4d:	33 cd                	xor    ecx,ebp
  558a4f:	e8 3b ba ea ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  558a54:	8d a5 34 08 00 00    	lea    esp,[ebp+0x834]
  558a5a:	5d                   	pop    ebp
  558a5b:	c3                   	ret
  558a5c:	50                   	push   eax
  558a5d:	e8 d0 cc 10 00       	call   0x665732 ; ["call resolved=0x665732 "]
