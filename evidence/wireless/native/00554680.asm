; BtFarawayDevice::disconnect; image base 0x400000; static annotation only
  554680:	83 ec 24             	sub    esp,0x24
  554683:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  554688:	33 c4                	xor    eax,esp
  55468a:	89 44 24 20          	mov    DWORD PTR [esp+0x20],eax
  55468e:	56                   	push   esi
  55468f:	57                   	push   edi
  554690:	8b f9                	mov    edi,ecx
  554692:	b9 74 8b 7a 00       	mov    ecx,0x7a8b74
  554697:	e8 52 44 eb ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  55469c:	83 7f 30 10          	cmp    DWORD PTR [edi+0x30],0x10
  5546a0:	8d 77 1c             	lea    esi,[edi+0x1c]
  5546a3:	72 02                	jb     0x5546a7
  5546a5:	8b 36                	mov    esi,DWORD PTR [esi]
  5546a7:	6a 5c                	push   0x5c
  5546a9:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5546ae:	e8 b3 40 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5546b3:	83 c4 08             	add    esp,0x8
  5546b6:	85 c0                	test   eax,eax
  5546b8:	74 12                	je     0x5546cc
  5546ba:	6a 5c                	push   0x5c
  5546bc:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5546c1:	e8 a0 40 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5546c6:	83 c4 08             	add    esp,0x8
  5546c9:	40                   	inc    eax
  5546ca:	eb 05                	jmp    0x5546d1
  5546cc:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5546d1:	56                   	push   esi
  5546d2:	68 84 87 6d 00       	push   0x6d8784 ; ["BtFarawayDevice::disconnect"]
  5546d7:	68 df 00 00 00       	push   0xdf
  5546dc:	50                   	push   eax
  5546dd:	68 a8 87 6d 00       	push   0x6d87a8 ; ["[ConntctionModule][%s:%d][%s]: Disconnect one device preconnect, device id: %s\n"]
  5546e2:	8d 44 24 20          	lea    eax,[esp+0x20]
  5546e6:	c7 44 24 20 02 00 00 	mov    DWORD PTR [esp+0x20],0x2
  5546ee:	50                   	push   eax
  5546ef:	8d 44 24 28          	lea    eax,[esp+0x28]
  5546f3:	50                   	push   eax
  5546f4:	e8 10 29 eb ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5546f9:	8b 54 24 40          	mov    edx,DWORD PTR [esp+0x40]
  5546fd:	83 c4 1c             	add    esp,0x1c
  554700:	83 fa 10             	cmp    edx,0x10
  554703:	72 2f                	jb     0x554734
  554705:	8b 4c 24 10          	mov    ecx,DWORD PTR [esp+0x10]
  554709:	42                   	inc    edx
  55470a:	8b c1                	mov    eax,ecx
  55470c:	81 fa 00 10 00 00    	cmp    edx,0x1000
  554712:	72 16                	jb     0x55472a
  554714:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  554717:	83 c2 23             	add    edx,0x23
  55471a:	2b c1                	sub    eax,ecx
  55471c:	83 c0 fc             	add    eax,0xfffffffc
  55471f:	83 f8 1f             	cmp    eax,0x1f
  554722:	76 06                	jbe    0x55472a
  554724:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  55472a:	52                   	push   edx
  55472b:	51                   	push   ecx
  55472c:	e8 69 d9 ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  554731:	83 c4 08             	add    esp,0x8
  554734:	8b 07                	mov    eax,DWORD PTR [edi]
  554736:	8b cf                	mov    ecx,edi
  554738:	ff 50 28             	call   DWORD PTR [eax+0x28]
  55473b:	8b 07                	mov    eax,DWORD PTR [edi]
  55473d:	8d 4c 24 0b          	lea    ecx,[esp+0xb]
  554741:	51                   	push   ecx
  554742:	8b cf                	mov    ecx,edi
  554744:	c6 44 24 0f 00       	mov    BYTE PTR [esp+0xf],0x0
  554749:	ff 50 70             	call   DWORD PTR [eax+0x70]
  55474c:	8b 4c 24 28          	mov    ecx,DWORD PTR [esp+0x28]
  554750:	b0 01                	mov    al,0x1
  554752:	5f                   	pop    edi
  554753:	5e                   	pop    esi
  554754:	33 cc                	xor    ecx,esp
  554756:	e8 34 fd ea ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  55475b:	83 c4 24             	add    esp,0x24
  55475e:	c3                   	ret
