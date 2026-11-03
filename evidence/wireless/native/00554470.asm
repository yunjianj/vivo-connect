; BtFarawayDevice::destoryClient; image base 0x400000; static annotation only
  554470:	55                   	push   ebp
  554471:	8b ec                	mov    ebp,esp
  554473:	6a ff                	push   0xffffffff
  554475:	68 9d 75 68 00       	push   0x68759d
  55447a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  554480:	50                   	push   eax
  554481:	83 ec 2c             	sub    esp,0x2c
  554484:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  554489:	33 c5                	xor    eax,ebp
  55448b:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  55448e:	53                   	push   ebx
  55448f:	56                   	push   esi
  554490:	57                   	push   edi
  554491:	50                   	push   eax
  554492:	8d 45 f4             	lea    eax,[ebp-0xc]
  554495:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  55449b:	8b f1                	mov    esi,ecx
  55449d:	b9 74 8b 7a 00       	mov    ecx,0x7a8b74
  5544a2:	e8 47 46 eb ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5544a7:	8d 9e dc 0e 00 00    	lea    ebx,[esi+0xedc]
  5544ad:	c6 45 cc 00          	mov    BYTE PTR [ebp-0x34],0x0
  5544b1:	53                   	push   ebx
  5544b2:	89 5d c8             	mov    DWORD PTR [ebp-0x38],ebx
  5544b5:	e8 48 12 11 00       	call   0x665702 ; ["call resolved=0x665702 "]
  5544ba:	83 c4 04             	add    esp,0x4
  5544bd:	85 c0                	test   eax,eax
  5544bf:	0f 85 09 01 00 00    	jne    0x5545ce
  5544c5:	c6 45 cc 01          	mov    BYTE PTR [ebp-0x34],0x1
  5544c9:	6a 5c                	push   0x5c
  5544cb:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5544d0:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  5544d3:	e8 8e 42 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5544d8:	83 c4 08             	add    esp,0x8
  5544db:	85 c0                	test   eax,eax
  5544dd:	74 12                	je     0x5544f1
  5544df:	6a 5c                	push   0x5c
  5544e1:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5544e6:	e8 7b 42 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5544eb:	83 c4 08             	add    esp,0x8
  5544ee:	40                   	inc    eax
  5544ef:	eb 05                	jmp    0x5544f6
  5544f1:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5544f6:	68 24 87 6d 00       	push   0x6d8724 ; ["BtFarawayDevice::destoryClient"]
  5544fb:	68 d3 00 00 00       	push   0xd3
  554500:	50                   	push   eax
  554501:	68 4c 87 6d 00       	push   0x6d874c ; ["[ConntctionModule][%s:%d][%s]: destoryClient\n"]
  554506:	8d 45 d4             	lea    eax,[ebp-0x2c]
  554509:	c7 45 d4 01 00 00 00 	mov    DWORD PTR [ebp-0x2c],0x1
  554510:	50                   	push   eax
  554511:	8d 45 d8             	lea    eax,[ebp-0x28]
  554514:	50                   	push   eax
  554515:	e8 ef 2a eb ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  55451a:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  55451d:	83 c4 18             	add    esp,0x18
  554520:	83 fa 10             	cmp    edx,0x10
  554523:	72 2e                	jb     0x554553
  554525:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  554528:	42                   	inc    edx
  554529:	8b c1                	mov    eax,ecx
  55452b:	81 fa 00 10 00 00    	cmp    edx,0x1000
  554531:	72 16                	jb     0x554549
  554533:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  554536:	83 c2 23             	add    edx,0x23
  554539:	2b c1                	sub    eax,ecx
  55453b:	83 c0 fc             	add    eax,0xfffffffc
  55453e:	83 f8 1f             	cmp    eax,0x1f
  554541:	76 06                	jbe    0x554549
  554543:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  554549:	52                   	push   edx
  55454a:	51                   	push   ecx
  55454b:	e8 4a db ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  554550:	83 c4 08             	add    esp,0x8
  554553:	8b 8e 60 0e 00 00    	mov    ecx,DWORD PTR [esi+0xe60]
  554559:	85 c9                	test   ecx,ecx
  55455b:	74 4a                	je     0x5545a7
  55455d:	8b 01                	mov    eax,DWORD PTR [ecx]
  55455f:	ff 50 08             	call   DWORD PTR [eax+0x8]
  554562:	8d 45 d0             	lea    eax,[ebp-0x30]
  554565:	c7 45 d0 00 00 00 00 	mov    DWORD PTR [ebp-0x30],0x0
  55456c:	50                   	push   eax
  55456d:	8d 8e 60 0e 00 00    	lea    ecx,[esi+0xe60]
  554573:	c7 45 d4 00 00 00 00 	mov    DWORD PTR [ebp-0x2c],0x0
  55457a:	e8 97 18 eb ff       	call   0x405e16 ; ["call resolved=0x54ec60 "]
  55457f:	8b 75 d4             	mov    esi,DWORD PTR [ebp-0x2c]
  554582:	85 f6                	test   esi,esi
  554584:	74 21                	je     0x5545a7
  554586:	83 cf ff             	or     edi,0xffffffff
  554589:	8b c7                	mov    eax,edi
  55458b:	f0 0f c1 46 04       	lock xadd DWORD PTR [esi+0x4],eax
  554590:	75 15                	jne    0x5545a7
  554592:	8b 06                	mov    eax,DWORD PTR [esi]
  554594:	8b ce                	mov    ecx,esi
  554596:	ff 10                	call   DWORD PTR [eax]
  554598:	f0 0f c1 7e 08       	lock xadd DWORD PTR [esi+0x8],edi
  55459d:	4f                   	dec    edi
  55459e:	75 07                	jne    0x5545a7
  5545a0:	8b 06                	mov    eax,DWORD PTR [esi]
  5545a2:	8b ce                	mov    ecx,esi
  5545a4:	ff 50 04             	call   DWORD PTR [eax+0x4]
  5545a7:	53                   	push   ebx
  5545a8:	e8 5b 11 11 00       	call   0x665708 ; ["call resolved=0x665708 "]
  5545ad:	83 c4 04             	add    esp,0x4
  5545b0:	b0 01                	mov    al,0x1
  5545b2:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  5545b5:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  5545bc:	59                   	pop    ecx
  5545bd:	5f                   	pop    edi
  5545be:	5e                   	pop    esi
  5545bf:	5b                   	pop    ebx
  5545c0:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  5545c3:	33 cd                	xor    ecx,ebp
  5545c5:	e8 c5 fe ea ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5545ca:	8b e5                	mov    esp,ebp
  5545cc:	5d                   	pop    ebp
  5545cd:	c3                   	ret
  5545ce:	50                   	push   eax
  5545cf:	e8 5e 11 11 00       	call   0x665732 ; ["call resolved=0x665732 "]
