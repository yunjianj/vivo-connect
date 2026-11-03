; BtFarawayDevice::sendMsg; image base 0x400000; static annotation only
  559560:	55                   	push   ebp
  559561:	8b ec                	mov    ebp,esp
  559563:	6a ff                	push   0xffffffff
  559565:	68 bd 7f 68 00       	push   0x687fbd
  55956a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  559570:	50                   	push   eax
  559571:	83 ec 2c             	sub    esp,0x2c
  559574:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  559579:	33 c5                	xor    eax,ebp
  55957b:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  55957e:	53                   	push   ebx
  55957f:	56                   	push   esi
  559580:	57                   	push   edi
  559581:	50                   	push   eax
  559582:	8d 45 f4             	lea    eax,[ebp-0xc]
  559585:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  55958b:	8b f9                	mov    edi,ecx
  55958d:	8b 45 08             	mov    eax,DWORD PTR [ebp+0x8]
  559590:	b9 74 8b 7a 00       	mov    ecx,0x7a8b74
  559595:	89 45 d0             	mov    DWORD PTR [ebp-0x30],eax
  559598:	8b 45 0c             	mov    eax,DWORD PTR [ebp+0xc]
  55959b:	89 45 d4             	mov    DWORD PTR [ebp-0x2c],eax
  55959e:	e8 4b f5 ea ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5595a3:	c7 45 c8 00 00 00 00 	mov    DWORD PTR [ebp-0x38],0x0
  5595aa:	c7 45 cc 00 00 00 00 	mov    DWORD PTR [ebp-0x34],0x0
  5595b1:	8d 9f dc 0e 00 00    	lea    ebx,[edi+0xedc]
  5595b7:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  5595be:	53                   	push   ebx
  5595bf:	e8 3e c1 10 00       	call   0x665702 ; ["call resolved=0x665702 "]
  5595c4:	83 c4 04             	add    esp,0x4
  5595c7:	85 c0                	test   eax,eax
  5595c9:	0f 85 12 01 00 00    	jne    0x5596e1
  5595cf:	8b b7 64 0e 00 00    	mov    esi,DWORD PTR [edi+0xe64]
  5595d5:	85 f6                	test   esi,esi
  5595d7:	74 0a                	je     0x5595e3
  5595d9:	f0 ff 46 04          	lock inc DWORD PTR [esi+0x4]
  5595dd:	8b b7 64 0e 00 00    	mov    esi,DWORD PTR [edi+0xe64]
  5595e3:	8b bf 60 0e 00 00    	mov    edi,DWORD PTR [edi+0xe60]
  5595e9:	53                   	push   ebx
  5595ea:	89 7d c8             	mov    DWORD PTR [ebp-0x38],edi
  5595ed:	89 75 cc             	mov    DWORD PTR [ebp-0x34],esi
  5595f0:	e8 13 c1 10 00       	call   0x665708 ; ["call resolved=0x665708 "]
  5595f5:	83 c4 04             	add    esp,0x4
  5595f8:	85 ff                	test   edi,edi
  5595fa:	0f 85 8b 00 00 00    	jne    0x55968b
  559600:	6a 5c                	push   0x5c
  559602:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  559607:	e8 5a f1 10 00       	call   0x668766 ; ["call resolved=0x668766 "]
  55960c:	83 c4 08             	add    esp,0x8
  55960f:	85 c0                	test   eax,eax
  559611:	74 12                	je     0x559625
  559613:	6a 5c                	push   0x5c
  559615:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  55961a:	e8 47 f1 10 00       	call   0x668766 ; ["call resolved=0x668766 "]
  55961f:	83 c4 08             	add    esp,0x8
  559622:	40                   	inc    eax
  559623:	eb 05                	jmp    0x55962a
  559625:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  55962a:	68 40 86 6d 00       	push   0x6d8640 ; ["BtFarawayDevice::sendMsg"]
  55962f:	68 a1 00 00 00       	push   0xa1
  559634:	50                   	push   eax
  559635:	68 60 86 6d 00       	push   0x6d8660 ; ["[ConntctionModule][%s:%d][%s]: client == null\n"]
  55963a:	8d 45 d4             	lea    eax,[ebp-0x2c]
  55963d:	c7 45 d4 04 00 00 00 	mov    DWORD PTR [ebp-0x2c],0x4
  559644:	50                   	push   eax
  559645:	8d 45 d8             	lea    eax,[ebp-0x28]
  559648:	50                   	push   eax
  559649:	e8 bb d9 ea ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  55964e:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  559651:	83 c4 18             	add    esp,0x18
  559654:	83 fa 10             	cmp    edx,0x10
  559657:	72 2e                	jb     0x559687
  559659:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  55965c:	42                   	inc    edx
  55965d:	8b c1                	mov    eax,ecx
  55965f:	81 fa 00 10 00 00    	cmp    edx,0x1000
  559665:	72 16                	jb     0x55967d
  559667:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  55966a:	83 c2 23             	add    edx,0x23
  55966d:	2b c1                	sub    eax,ecx
  55966f:	83 c0 fc             	add    eax,0xfffffffc
  559672:	83 f8 1f             	cmp    eax,0x1f
  559675:	76 06                	jbe    0x55967d
  559677:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  55967d:	52                   	push   edx
  55967e:	51                   	push   ecx
  55967f:	e8 16 8a ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  559684:	83 c4 08             	add    esp,0x8
  559687:	32 db                	xor    bl,bl
  559689:	eb 11                	jmp    0x55969c
  55968b:	8b 07                	mov    eax,DWORD PTR [edi]
  55968d:	8b cf                	mov    ecx,edi
  55968f:	ff 75 d4             	push   DWORD PTR [ebp-0x2c]
  559692:	ff 75 d0             	push   DWORD PTR [ebp-0x30]
  559695:	8b 40 0c             	mov    eax,DWORD PTR [eax+0xc]
  559698:	ff d0                	call   eax
  55969a:	8a d8                	mov    bl,al
  55969c:	85 f6                	test   esi,esi
  55969e:	74 21                	je     0x5596c1
  5596a0:	83 cf ff             	or     edi,0xffffffff
  5596a3:	8b cf                	mov    ecx,edi
  5596a5:	f0 0f c1 4e 04       	lock xadd DWORD PTR [esi+0x4],ecx
  5596aa:	75 15                	jne    0x5596c1
  5596ac:	8b 06                	mov    eax,DWORD PTR [esi]
  5596ae:	8b ce                	mov    ecx,esi
  5596b0:	ff 10                	call   DWORD PTR [eax]
  5596b2:	f0 0f c1 7e 08       	lock xadd DWORD PTR [esi+0x8],edi
  5596b7:	4f                   	dec    edi
  5596b8:	75 07                	jne    0x5596c1
  5596ba:	8b 06                	mov    eax,DWORD PTR [esi]
  5596bc:	8b ce                	mov    ecx,esi
  5596be:	ff 50 04             	call   DWORD PTR [eax+0x4]
  5596c1:	8a c3                	mov    al,bl
  5596c3:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  5596c6:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  5596cd:	59                   	pop    ecx
  5596ce:	5f                   	pop    edi
  5596cf:	5e                   	pop    esi
  5596d0:	5b                   	pop    ebx
  5596d1:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  5596d4:	33 cd                	xor    ecx,ebp
  5596d6:	e8 b4 ad ea ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5596db:	8b e5                	mov    esp,ebp
  5596dd:	5d                   	pop    ebp
  5596de:	c2 08 00             	ret    0x8
  5596e1:	50                   	push   eax
  5596e2:	e8 4b c0 10 00       	call   0x665732 ; ["call resolved=0x665732 "]
