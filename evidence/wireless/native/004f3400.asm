; ClassicRfcommClient::sendData; image base 0x400000; static annotation only
  4f3400:	55                   	push   ebp
  4f3401:	8b ec                	mov    ebp,esp
  4f3403:	6a ff                	push   0xffffffff
  4f3405:	68 70 e2 67 00       	push   0x67e270
  4f340a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  4f3410:	50                   	push   eax
  4f3411:	83 ec 2c             	sub    esp,0x2c
  4f3414:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  4f3419:	33 c5                	xor    eax,ebp
  4f341b:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4f341e:	53                   	push   ebx
  4f341f:	56                   	push   esi
  4f3420:	57                   	push   edi
  4f3421:	50                   	push   eax
  4f3422:	8d 45 f4             	lea    eax,[ebp-0xc]
  4f3425:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  4f342b:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  4f342e:	8b 75 08             	mov    esi,DWORD PTR [ebp+0x8]
  4f3431:	b9 1d 88 7a 00       	mov    ecx,0x7a881d
  4f3436:	89 75 cc             	mov    DWORD PTR [ebp-0x34],esi
  4f3439:	e8 b0 56 f1 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  4f343e:	33 c9                	xor    ecx,ecx
  4f3440:	66 8b 46 04          	mov    ax,WORD PTR [esi+0x4]
  4f3444:	66 89 45 d2          	mov    WORD PTR [ebp-0x2e],ax
  4f3448:	8d 50 01             	lea    edx,[eax+0x1]
  4f344b:	66 83 fa 04          	cmp    dx,0x4
  4f344f:	0f 87 7b 01 00 00    	ja     0x4f35d0
  4f3455:	66 89 45 d2          	mov    WORD PTR [ebp-0x2e],ax
  4f3459:	66 83 f8 02          	cmp    ax,0x2
  4f345d:	74 06                	je     0x4f3465
  4f345f:	8b 4e 28             	mov    ecx,DWORD PTR [esi+0x28]
  4f3462:	89 4d c8             	mov    DWORD PTR [ebp-0x38],ecx
  4f3465:	89 4e 28             	mov    DWORD PTR [esi+0x28],ecx
  4f3468:	0f bf c2             	movsx  eax,dx
  4f346b:	ff 24 85 f0 35 4f 00 	jmp    DWORD PTR [eax*4+0x4f35f0]
  4f3472:	8b 46 35             	mov    eax,DWORD PTR [esi+0x35]
  4f3475:	8b 7e 2d             	mov    edi,DWORD PTR [esi+0x2d]
  4f3478:	6a 00                	push   0x0
  4f347a:	ff 30                	push   DWORD PTR [eax]
  4f347c:	ff 76 31             	push   DWORD PTR [esi+0x31]
  4f347f:	ff 37                	push   DWORD PTR [edi]
  4f3481:	ff 15 d0 d8 79 00    	call   DWORD PTR ds:0x79d8d0
  4f3487:	83 f8 ff             	cmp    eax,0xffffffff
  4f348a:	0f 85 d7 00 00 00    	jne    0x4f3567
  4f3490:	6a 5c                	push   0x5c
  4f3492:	68 e8 ed 6c 00       	push   0x6cede8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\ClassicRfcommClient.cpp"]
  4f3497:	e8 ca 52 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4f349c:	83 c4 08             	add    esp,0x8
  4f349f:	85 c0                	test   eax,eax
  4f34a1:	74 14                	je     0x4f34b7
  4f34a3:	6a 5c                	push   0x5c
  4f34a5:	68 e8 ed 6c 00       	push   0x6cede8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\ClassicRfcommClient.cpp"]
  4f34aa:	e8 b7 52 17 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4f34af:	83 c4 08             	add    esp,0x8
  4f34b2:	8d 50 01             	lea    edx,[eax+0x1]
  4f34b5:	eb 05                	jmp    0x4f34bc
  4f34b7:	ba e8 ed 6c 00       	mov    edx,0x6cede8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\ClassicRfcommClient.cpp"]
  4f34bc:	68 e8 f0 6c 00       	push   0x6cf0e8 ; ["ClassicRfcommClient::sendData"]
  4f34c1:	6a 48                	push   0x48
  4f34c3:	8d 4e 08             	lea    ecx,[esi+0x8]
  4f34c6:	c7 01 02 00 00 00    	mov    DWORD PTR [ecx],0x2
  4f34cc:	8b 46 28             	mov    eax,DWORD PTR [esi+0x28]
  4f34cf:	52                   	push   edx
  4f34d0:	89 45 c8             	mov    DWORD PTR [ebp-0x38],eax
  4f34d3:	68 0c f1 6c 00       	push   0x6cf10c ; ["[ConntctionModule][%s:%d][%s]: Error: Failed to send data.\n"]
  4f34d8:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  4f34db:	8d 46 0c             	lea    eax,[esi+0xc]
  4f34de:	51                   	push   ecx
  4f34df:	50                   	push   eax
  4f34e0:	e8 24 3b f1 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4f34e5:	8b 46 20             	mov    eax,DWORD PTR [esi+0x20]
  4f34e8:	83 c4 18             	add    esp,0x18
  4f34eb:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  4f34ee:	83 f8 10             	cmp    eax,0x10
  4f34f1:	72 43                	jb     0x4f3536
  4f34f3:	8b 46 20             	mov    eax,DWORD PTR [esi+0x20]
  4f34f6:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  4f34f9:	8b 56 0c             	mov    edx,DWORD PTR [esi+0xc]
  4f34fc:	89 55 d4             	mov    DWORD PTR [ebp-0x2c],edx
  4f34ff:	8d 48 01             	lea    ecx,[eax+0x1]
  4f3502:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  4f3508:	72 22                	jb     0x4f352c
  4f350a:	8b 46 0c             	mov    eax,DWORD PTR [esi+0xc]
  4f350d:	83 c1 23             	add    ecx,0x23
  4f3510:	89 45 d4             	mov    DWORD PTR [ebp-0x2c],eax
  4f3513:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  4f3516:	8b 46 0c             	mov    eax,DWORD PTR [esi+0xc]
  4f3519:	89 45 d4             	mov    DWORD PTR [ebp-0x2c],eax
  4f351c:	2b c2                	sub    eax,edx
  4f351e:	83 c0 fc             	add    eax,0xfffffffc
  4f3521:	83 f8 1f             	cmp    eax,0x1f
  4f3524:	76 06                	jbe    0x4f352c
  4f3526:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  4f352c:	51                   	push   ecx
  4f352d:	52                   	push   edx
  4f352e:	e8 67 eb f0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4f3533:	83 c4 08             	add    esp,0x8
  4f3536:	ff 37                	push   DWORD PTR [edi]
  4f3538:	ff 15 f0 d8 79 00    	call   DWORD PTR ds:0x79d8f0
  4f353e:	c6 46 fc 00          	mov    BYTE PTR [esi-0x4],0x0
  4f3542:	eb 27                	jmp    0x4f356b
  4f3544:	8b 4d cc             	mov    ecx,DWORD PTR [ebp-0x34]
  4f3547:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  4f354a:	89 41 28             	mov    DWORD PTR [ecx+0x28],eax
  4f354d:	83 c8 ff             	or     eax,0xffffffff
  4f3550:	66 89 41 04          	mov    WORD PTR [ecx+0x4],ax
  4f3554:	83 c1 d0             	add    ecx,0xffffffd0
  4f3557:	e8 95 11 f1 ff       	call   0x4046f1 ; ["call resolved=0x4f38c0 "]
  4f355c:	b8 62 35 4f 00       	mov    eax,0x4f3562
  4f3561:	c3                   	ret
  4f3562:	8b 75 cc             	mov    esi,DWORD PTR [ebp-0x34]
  4f3565:	eb 04                	jmp    0x4f356b
  4f3567:	c6 46 fc 01          	mov    BYTE PTR [esi-0x4],0x1
  4f356b:	8d 4e 24             	lea    ecx,[esi+0x24]
  4f356e:	8d 46 d0             	lea    eax,[esi-0x30]
  4f3571:	89 01                	mov    DWORD PTR [ecx],eax
  4f3573:	33 c0                	xor    eax,eax
  4f3575:	56                   	push   esi
  4f3576:	66 89 46 04          	mov    WORD PTR [esi+0x4],ax
  4f357a:	e8 6d 4d f1 ff       	call   0x4082ec ; ["call resolved=0x4f16e0 "]
  4f357f:	84 c0                	test   al,al
  4f3581:	75 4e                	jne    0x4f35d1
  4f3583:	8d 7e d0             	lea    edi,[esi-0x30]
  4f3586:	83 7f 20 00          	cmp    DWORD PTR [edi+0x20],0x0
  4f358a:	8d 4f 20             	lea    ecx,[edi+0x20]
  4f358d:	74 05                	je     0x4f3594
  4f358f:	e8 66 21 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4f3594:	83 7f 1c 00          	cmp    DWORD PTR [edi+0x1c],0x0
  4f3598:	8d 4f 1c             	lea    ecx,[edi+0x1c]
  4f359b:	74 05                	je     0x4f35a2
  4f359d:	e8 58 21 f1 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4f35a2:	8d 47 10             	lea    eax,[edi+0x10]
  4f35a5:	50                   	push   eax
  4f35a6:	e8 eb 20 17 00       	call   0x665696 ; ["call resolved=0x665696 "]
  4f35ab:	83 c4 04             	add    esp,0x4
  4f35ae:	8b cf                	mov    ecx,edi
  4f35b0:	e8 35 f0 f0 ff       	call   0x4025ea ; ["call resolved=0x4f3760 "]
  4f35b5:	f0 ff 0d 84 15 79 00 	lock dec DWORD PTR ds:0x791584
  4f35bc:	66 83 7e 06 00       	cmp    WORD PTR [esi+0x6],0x0
  4f35c1:	74 0e                	je     0x4f35d1
  4f35c3:	6a 69                	push   0x69
  4f35c5:	57                   	push   edi
  4f35c6:	e8 cf ea f0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4f35cb:	83 c4 08             	add    esp,0x8
  4f35ce:	eb 01                	jmp    0x4f35d1
