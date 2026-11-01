; BleScanner::stop; image base 0x400000; static annotation only
  4c6320:	55                   	push   ebp
  4c6321:	8b ec                	mov    ebp,esp
  4c6323:	6a ff                	push   0xffffffff
  4c6325:	68 e5 90 67 00       	push   0x6790e5
  4c632a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  4c6330:	50                   	push   eax
  4c6331:	83 ec 54             	sub    esp,0x54
  4c6334:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  4c6339:	33 c5                	xor    eax,ebp
  4c633b:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  4c633e:	53                   	push   ebx
  4c633f:	56                   	push   esi
  4c6340:	57                   	push   edi
  4c6341:	50                   	push   eax
  4c6342:	8d 45 f4             	lea    eax,[ebp-0xc]
  4c6345:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  4c634b:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  4c634e:	8b f9                	mov    edi,ecx
  4c6350:	b9 6a 83 7a 00       	mov    ecx,0x7a836a
  4c6355:	e8 94 27 f4 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  4c635a:	6a 5c                	push   0x5c
  4c635c:	68 90 ad 6c 00       	push   0x6cad90 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\BleScanner.cpp"]
  4c6361:	e8 00 24 1a 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4c6366:	83 c4 08             	add    esp,0x8
  4c6369:	85 c0                	test   eax,eax
  4c636b:	74 12                	je     0x4c637f
  4c636d:	6a 5c                	push   0x5c
  4c636f:	68 90 ad 6c 00       	push   0x6cad90 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\BleScanner.cpp"]
  4c6374:	e8 ed 23 1a 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4c6379:	83 c4 08             	add    esp,0x8
  4c637c:	40                   	inc    eax
  4c637d:	eb 05                	jmp    0x4c6384
  4c637f:	b8 90 ad 6c 00       	mov    eax,0x6cad90 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\BleScanner.cpp"]
  4c6384:	68 ec ae 6c 00       	push   0x6caeec ; ["BleScanner::stop"]
  4c6389:	6a 51                	push   0x51
  4c638b:	50                   	push   eax
  4c638c:	68 00 af 6c 00       	push   0x6caf00 ; ["[ConntctionModule][%s:%d][%s]: Stop ble scan ...\n"]
  4c6391:	8d 45 b8             	lea    eax,[ebp-0x48]
  4c6394:	c7 45 b8 02 00 00 00 	mov    DWORD PTR [ebp-0x48],0x2
  4c639b:	50                   	push   eax
  4c639c:	8d 45 bc             	lea    eax,[ebp-0x44]
  4c639f:	50                   	push   eax
  4c63a0:	e8 64 0c f4 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4c63a5:	8b 55 d0             	mov    edx,DWORD PTR [ebp-0x30]
  4c63a8:	83 c4 18             	add    esp,0x18
  4c63ab:	83 fa 10             	cmp    edx,0x10
  4c63ae:	72 2e                	jb     0x4c63de
  4c63b0:	8b 4d bc             	mov    ecx,DWORD PTR [ebp-0x44]
  4c63b3:	42                   	inc    edx
  4c63b4:	8b c1                	mov    eax,ecx
  4c63b6:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4c63bc:	72 16                	jb     0x4c63d4
  4c63be:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4c63c1:	83 c2 23             	add    edx,0x23
  4c63c4:	2b c1                	sub    eax,ecx
  4c63c6:	83 c0 fc             	add    eax,0xfffffffc
  4c63c9:	83 f8 1f             	cmp    eax,0x1f
  4c63cc:	76 06                	jbe    0x4c63d4
  4c63ce:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  4c63d4:	52                   	push   edx
  4c63d5:	51                   	push   ecx
  4c63d6:	e8 bf bc f3 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4c63db:	83 c4 08             	add    esp,0x8
  4c63de:	90                   	nop
  4c63df:	0f 57 c0             	xorps  xmm0,xmm0
  4c63e2:	66 0f 13 45 b0       	movlpd QWORD PTR [ebp-0x50],xmm0
  4c63e7:	f3 0f 7e 45 b0       	movq   xmm0,QWORD PTR [ebp-0x50]
  4c63ec:	66 0f d6 47 18       	movq   QWORD PTR [edi+0x18],xmm0
  4c63f1:	90                   	nop
  4c63f2:	f0 ff 45 b4          	lock inc DWORD PTR [ebp-0x4c]
  4c63f6:	90                   	nop
  4c63f7:	8d 45 b8             	lea    eax,[ebp-0x48]
  4c63fa:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  4c6401:	50                   	push   eax
  4c6402:	8d 77 04             	lea    esi,[edi+0x4]
  4c6405:	c7 45 b8 00 00 00 00 	mov    DWORD PTR [ebp-0x48],0x0
  4c640c:	56                   	push   esi
  4c640d:	e8 80 05 f4 ff       	call   0x406992 ; ["call resolved=0x472e80 "]
  4c6412:	83 c4 08             	add    esp,0x8
  4c6415:	84 c0                	test   al,al
  4c6417:	75 55                	jne    0x4c646e
  4c6419:	8b 06                	mov    eax,DWORD PTR [esi]
  4c641b:	50                   	push   eax
  4c641c:	8b 08                	mov    ecx,DWORD PTR [eax]
  4c641e:	ff 51 48             	call   DWORD PTR [ecx+0x48]
  4c6421:	85 c0                	test   eax,eax
  4c6423:	0f 88 8d 01 00 00    	js     0x4c65b6
  4c6429:	8b 0e                	mov    ecx,DWORD PTR [esi]
  4c642b:	ff 77 0c             	push   DWORD PTR [edi+0xc]
  4c642e:	ff 77 08             	push   DWORD PTR [edi+0x8]
  4c6431:	8b 01                	mov    eax,DWORD PTR [ecx]
  4c6433:	51                   	push   ecx
  4c6434:	ff 50 50             	call   DWORD PTR [eax+0x50]
  4c6437:	8d 45 ac             	lea    eax,[ebp-0x54]
  4c643a:	3b f0                	cmp    esi,eax
  4c643c:	74 12                	je     0x4c6450
  4c643e:	83 3e 00             	cmp    DWORD PTR [esi],0x0
  4c6441:	74 07                	je     0x4c644a
  4c6443:	8b ce                	mov    ecx,esi
  4c6445:	e8 b0 f2 f3 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4c644a:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  4c6450:	80 7d 08 00          	cmp    BYTE PTR [ebp+0x8],0x0
  4c6454:	74 18                	je     0x4c646e
  4c6456:	8b 4f 28             	mov    ecx,DWORD PTR [edi+0x28]
  4c6459:	85 c9                	test   ecx,ecx
  4c645b:	74 11                	je     0x4c646e
  4c645d:	8b 01                	mov    eax,DWORD PTR [ecx]
  4c645f:	ff 50 10             	call   DWORD PTR [eax+0x10]
  4c6462:	e8 c9 25 f4 ff       	call   0x408a30 ; ["call resolved=0x4c5aa0 "]
  4c6467:	8b c8                	mov    ecx,eax
  4c6469:	e8 27 d5 f3 ff       	call   0x403995 ; ["call resolved=0x4c5c30 "]
  4c646e:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  4c6471:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  4c6478:	59                   	pop    ecx
  4c6479:	5f                   	pop    edi
  4c647a:	5e                   	pop    esi
  4c647b:	5b                   	pop    ebx
  4c647c:	8b 4d ec             	mov    ecx,DWORD PTR [ebp-0x14]
  4c647f:	33 cd                	xor    ecx,ebp
  4c6481:	e8 09 e0 f3 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  4c6486:	8b e5                	mov    esp,ebp
  4c6488:	5d                   	pop    ebp
  4c6489:	c2 04 00             	ret    0x4
  4c648c:	8b 75 a8             	mov    esi,DWORD PTR [ebp-0x58]
  4c648f:	8d 45 b4             	lea    eax,[ebp-0x4c]
  4c6492:	50                   	push   eax
  4c6493:	8b ce                	mov    ecx,esi
  4c6495:	e8 f0 d0 f3 ff       	call   0x40358a ; ["call resolved=0x4bf770 "]
  4c649a:	8d 4d a0             	lea    ecx,[ebp-0x60]
  4c649d:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  4c64a1:	51                   	push   ecx
  4c64a2:	8b c8                	mov    ecx,eax
  4c64a4:	e8 b8 30 f4 ff       	call   0x409561 ; ["call resolved=0x472f70 "]
  4c64a9:	ff 70 04             	push   DWORD PTR [eax+0x4]
  4c64ac:	ff 30                	push   DWORD PTR [eax]
  4c64ae:	8d 45 d4             	lea    eax,[ebp-0x2c]
  4c64b1:	50                   	push   eax
  4c64b2:	e8 dc f9 f3 ff       	call   0x405e93 ; ["call resolved=0x4a64f0 "]
  4c64b7:	83 c4 0c             	add    esp,0xc
  4c64ba:	8b c8                	mov    ecx,eax
  4c64bc:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  4c64c0:	e8 92 17 f4 ff       	call   0x407c57 ; ["call resolved=0x4816c0 "]
  4c64c5:	8b 76 08             	mov    esi,DWORD PTR [esi+0x8]
  4c64c8:	8b f8                	mov    edi,eax
  4c64ca:	6a 5c                	push   0x5c
  4c64cc:	68 90 ad 6c 00       	push   0x6cad90 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\BleScanner.cpp"]
  4c64d1:	e8 90 22 1a 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4c64d6:	83 c4 08             	add    esp,0x8
  4c64d9:	85 c0                	test   eax,eax
  4c64db:	74 12                	je     0x4c64ef
  4c64dd:	6a 5c                	push   0x5c
  4c64df:	68 90 ad 6c 00       	push   0x6cad90 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\BleScanner.cpp"]
  4c64e4:	e8 7d 22 1a 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4c64e9:	83 c4 08             	add    esp,0x8
  4c64ec:	40                   	inc    eax
  4c64ed:	eb 05                	jmp    0x4c64f4
  4c64ef:	b8 90 ad 6c 00       	mov    eax,0x6cad90 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothAdvertisement\\BleScanner.cpp"]
  4c64f4:	57                   	push   edi
  4c64f5:	56                   	push   esi
  4c64f6:	68 ec ae 6c 00       	push   0x6caeec ; ["BleScanner::stop"]
  4c64fb:	6a 65                	push   0x65
  4c64fd:	50                   	push   eax
  4c64fe:	68 40 af 6c 00       	push   0x6caf40 ; ["[ConntctionModule][%s:%d][%s]: ble  stopBleScan::hresult_error 0x%08x message %s\n"]
  4c6503:	8d 45 b8             	lea    eax,[ebp-0x48]
  4c6506:	c7 45 b8 02 00 00 00 	mov    DWORD PTR [ebp-0x48],0x2
  4c650d:	50                   	push   eax
  4c650e:	8d 45 bc             	lea    eax,[ebp-0x44]
  4c6511:	50                   	push   eax
  4c6512:	e8 f2 0a f4 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4c6517:	8b 4d d0             	mov    ecx,DWORD PTR [ebp-0x30]
  4c651a:	83 c4 20             	add    esp,0x20
  4c651d:	83 f9 10             	cmp    ecx,0x10
  4c6520:	0f 93 c0             	setae  al
  4c6523:	84 c0                	test   al,al
  4c6525:	74 2c                	je     0x4c6553
  4c6527:	8b 45 bc             	mov    eax,DWORD PTR [ebp-0x44]
  4c652a:	41                   	inc    ecx
  4c652b:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  4c6531:	72 16                	jb     0x4c6549
  4c6533:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  4c6536:	83 c1 23             	add    ecx,0x23
  4c6539:	2b c2                	sub    eax,edx
  4c653b:	83 c0 fc             	add    eax,0xfffffffc
  4c653e:	83 f8 1f             	cmp    eax,0x1f
  4c6541:	0f 87 87 fe ff ff    	ja     0x4c63ce
  4c6547:	8b c2                	mov    eax,edx
  4c6549:	51                   	push   ecx
  4c654a:	50                   	push   eax
  4c654b:	e8 4a bb f3 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4c6550:	83 c4 08             	add    esp,0x8
  4c6553:	8b 4d e8             	mov    ecx,DWORD PTR [ebp-0x18]
  4c6556:	83 f9 10             	cmp    ecx,0x10
  4c6559:	0f 93 c0             	setae  al
  4c655c:	84 c0                	test   al,al
  4c655e:	74 2c                	je     0x4c658c
  4c6560:	8b 45 d4             	mov    eax,DWORD PTR [ebp-0x2c]
  4c6563:	41                   	inc    ecx
  4c6564:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  4c656a:	72 16                	jb     0x4c6582
  4c656c:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  4c656f:	83 c1 23             	add    ecx,0x23
  4c6572:	2b c2                	sub    eax,edx
  4c6574:	83 c0 fc             	add    eax,0xfffffffc
  4c6577:	83 f8 1f             	cmp    eax,0x1f
  4c657a:	0f 87 4e fe ff ff    	ja     0x4c63ce
  4c6580:	8b c2                	mov    eax,edx
  4c6582:	51                   	push   ecx
  4c6583:	50                   	push   eax
  4c6584:	e8 11 bb f3 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4c6589:	83 c4 08             	add    esp,0x8
  4c658c:	8b 45 b4             	mov    eax,DWORD PTR [ebp-0x4c]
  4c658f:	85 c0                	test   eax,eax
  4c6591:	c7 45 e4 00 00 00 00 	mov    DWORD PTR [ebp-0x1c],0x0
  4c6598:	0f 95 c1             	setne  cl
  4c659b:	c7 45 e8 0f 00 00 00 	mov    DWORD PTR [ebp-0x18],0xf
  4c65a2:	c6 45 d4 00          	mov    BYTE PTR [ebp-0x2c],0x0
  4c65a6:	84 c9                	test   cl,cl
  4c65a8:	74 06                	je     0x4c65b0
  4c65aa:	50                   	push   eax
  4c65ab:	e8 ce 24 1a 00       	call   0x668a7e ; ["call resolved=0x668a7e "]
  4c65b0:	b8 6e 64 4c 00       	mov    eax,0x4c646e
  4c65b5:	c3                   	ret
  4c65b6:	50                   	push   eax
  4c65b7:	e8 3c ad f3 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
