; BleGattClient::CharacteristicValueChanged; image base 0x400000; static annotation only
  4e5490:	55                   	push   ebp
  4e5491:	8b ec                	mov    ebp,esp
  4e5493:	6a ff                	push   0xffffffff
  4e5495:	68 1d c6 67 00       	push   0x67c61d
  4e549a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  4e54a0:	50                   	push   eax
  4e54a1:	83 ec 38             	sub    esp,0x38
  4e54a4:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  4e54a9:	33 c5                	xor    eax,ebp
  4e54ab:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  4e54ae:	56                   	push   esi
  4e54af:	57                   	push   edi
  4e54b0:	50                   	push   eax
  4e54b1:	8d 45 f4             	lea    eax,[ebp-0xc]
  4e54b4:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  4e54ba:	8b f9                	mov    edi,ecx
  4e54bc:	b9 ec 86 7a 00       	mov    ecx,0x7a86ec
  4e54c1:	c7 45 fc 01 00 00 00 	mov    DWORD PTR [ebp-0x4],0x1
  4e54c8:	e8 21 36 f2 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  4e54cd:	6a 5c                	push   0x5c
  4e54cf:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4e54d4:	e8 8d 32 18 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4e54d9:	83 c4 08             	add    esp,0x8
  4e54dc:	85 c0                	test   eax,eax
  4e54de:	74 12                	je     0x4e54f2
  4e54e0:	6a 5c                	push   0x5c
  4e54e2:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4e54e7:	e8 7a 32 18 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4e54ec:	83 c4 08             	add    esp,0x8
  4e54ef:	40                   	inc    eax
  4e54f0:	eb 05                	jmp    0x4e54f7
  4e54f2:	b8 88 de 6c 00       	mov    eax,0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4e54f7:	68 e0 e6 6c 00       	push   0x6ce6e0 ; ["BleGattClient::CharacteristicValueChanged"]
  4e54fc:	68 e3 00 00 00       	push   0xe3
  4e5501:	50                   	push   eax
  4e5502:	68 14 e7 6c 00       	push   0x6ce714 ; ["[ConntctionModule][%s:%d][%s]: Characteristic_ValueChanged 11"]
  4e5507:	8d 45 bc             	lea    eax,[ebp-0x44]
  4e550a:	c7 45 bc 02 00 00 00 	mov    DWORD PTR [ebp-0x44],0x2
  4e5511:	50                   	push   eax
  4e5512:	8d 45 c0             	lea    eax,[ebp-0x40]
  4e5515:	50                   	push   eax
  4e5516:	e8 ee 1a f2 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4e551b:	8b 55 d4             	mov    edx,DWORD PTR [ebp-0x2c]
  4e551e:	83 c4 18             	add    esp,0x18
  4e5521:	83 fa 10             	cmp    edx,0x10
  4e5524:	72 2c                	jb     0x4e5552
  4e5526:	8b 4d c0             	mov    ecx,DWORD PTR [ebp-0x40]
  4e5529:	42                   	inc    edx
  4e552a:	8b c1                	mov    eax,ecx
  4e552c:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4e5532:	72 14                	jb     0x4e5548
  4e5534:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4e5537:	83 c2 23             	add    edx,0x23
  4e553a:	2b c1                	sub    eax,ecx
  4e553c:	83 c0 fc             	add    eax,0xfffffffc
  4e553f:	83 f8 1f             	cmp    eax,0x1f
  4e5542:	0f 87 54 01 00 00    	ja     0x4e569c
  4e5548:	52                   	push   edx
  4e5549:	51                   	push   ecx
  4e554a:	e8 4b cb f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4e554f:	83 c4 08             	add    esp,0x8
  4e5552:	51                   	push   ecx
  4e5553:	8b f4                	mov    esi,esp
  4e5555:	8d 55 bc             	lea    edx,[ebp-0x44]
  4e5558:	89 75 bc             	mov    DWORD PTR [ebp-0x44],esi
  4e555b:	8b 45 0c             	mov    eax,DWORD PTR [ebp+0xc]
  4e555e:	c7 45 bc 00 00 00 00 	mov    DWORD PTR [ebp-0x44],0x0
  4e5565:	52                   	push   edx
  4e5566:	50                   	push   eax
  4e5567:	8b 08                	mov    ecx,DWORD PTR [eax]
  4e5569:	ff 51 18             	call   DWORD PTR [ecx+0x18]
  4e556c:	85 c0                	test   eax,eax
  4e556e:	0f 88 83 01 00 00    	js     0x4e56f7
  4e5574:	8b 45 bc             	mov    eax,DWORD PTR [ebp-0x44]
  4e5577:	89 06                	mov    DWORD PTR [esi],eax
  4e5579:	8d 45 d8             	lea    eax,[ebp-0x28]
  4e557c:	50                   	push   eax
  4e557d:	e8 4b 38 f2 ff       	call   0x408dcd ; ["call resolved=0x4ee680 vivo::Utils::readIbufferAsString"]
  4e5582:	83 7d ec 10          	cmp    DWORD PTR [ebp-0x14],0x10
  4e5586:	8d 75 d8             	lea    esi,[ebp-0x28]
  4e5589:	6a 5c                	push   0x5c
  4e558b:	0f 43 75 d8          	cmovae esi,DWORD PTR [ebp-0x28]
  4e558f:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4e5594:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  4e5598:	e8 c9 31 18 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4e559d:	83 c4 10             	add    esp,0x10
  4e55a0:	85 c0                	test   eax,eax
  4e55a2:	74 12                	je     0x4e55b6
  4e55a4:	6a 5c                	push   0x5c
  4e55a6:	68 88 de 6c 00       	push   0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4e55ab:	e8 b6 31 18 00       	call   0x668766 ; ["call resolved=0x668766 "]
  4e55b0:	83 c4 08             	add    esp,0x8
  4e55b3:	40                   	inc    eax
  4e55b4:	eb 05                	jmp    0x4e55bb
  4e55b6:	b8 88 de 6c 00       	mov    eax,0x6cde88 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\BluetoothConnect\\BleGattClient.cpp"]
  4e55bb:	56                   	push   esi
  4e55bc:	68 e0 e6 6c 00       	push   0x6ce6e0 ; ["BleGattClient::CharacteristicValueChanged"]
  4e55c1:	68 e7 00 00 00       	push   0xe7
  4e55c6:	50                   	push   eax
  4e55c7:	68 60 e7 6c 00       	push   0x6ce760 ; ["[ConntctionModule][%s:%d][%s]: Characteristic_ValueChanged =================== %s \n"]
  4e55cc:	8d 45 bc             	lea    eax,[ebp-0x44]
  4e55cf:	c7 45 bc 02 00 00 00 	mov    DWORD PTR [ebp-0x44],0x2
  4e55d6:	50                   	push   eax
  4e55d7:	8d 45 c0             	lea    eax,[ebp-0x40]
  4e55da:	50                   	push   eax
  4e55db:	e8 29 1a f2 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4e55e0:	8b 55 d4             	mov    edx,DWORD PTR [ebp-0x2c]
  4e55e3:	83 c4 1c             	add    esp,0x1c
  4e55e6:	83 fa 10             	cmp    edx,0x10
  4e55e9:	72 2c                	jb     0x4e5617
  4e55eb:	8b 4d c0             	mov    ecx,DWORD PTR [ebp-0x40]
  4e55ee:	42                   	inc    edx
  4e55ef:	8b c1                	mov    eax,ecx
  4e55f1:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4e55f7:	72 14                	jb     0x4e560d
  4e55f9:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4e55fc:	83 c2 23             	add    edx,0x23
  4e55ff:	2b c1                	sub    eax,ecx
  4e5601:	83 c0 fc             	add    eax,0xfffffffc
  4e5604:	83 f8 1f             	cmp    eax,0x1f
  4e5607:	0f 87 8f 00 00 00    	ja     0x4e569c
  4e560d:	52                   	push   edx
  4e560e:	51                   	push   ecx
  4e560f:	e8 86 ca f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4e5614:	83 c4 08             	add    esp,0x8
  4e5617:	8b 4f 2c             	mov    ecx,DWORD PTR [edi+0x2c]
  4e561a:	8d 77 1c             	lea    esi,[edi+0x1c]
  4e561d:	8b 56 08             	mov    edx,DWORD PTR [esi+0x8]
  4e5620:	8d 41 01             	lea    eax,[ecx+0x1]
  4e5623:	3b d0                	cmp    edx,eax
  4e5625:	77 0f                	ja     0x4e5636
  4e5627:	6a 01                	push   0x1
  4e5629:	8b ce                	mov    ecx,esi
  4e562b:	e8 4c de f1 ff       	call   0x40347c ; ["call resolved=0x4e8fe0 "]
  4e5630:	8b 56 08             	mov    edx,DWORD PTR [esi+0x8]
  4e5633:	8b 4e 10             	mov    ecx,DWORD PTR [esi+0x10]
  4e5636:	8d 42 ff             	lea    eax,[edx-0x1]
  4e5639:	21 46 0c             	and    DWORD PTR [esi+0xc],eax
  4e563c:	8d 42 ff             	lea    eax,[edx-0x1]
  4e563f:	03 4e 0c             	add    ecx,DWORD PTR [esi+0xc]
  4e5642:	23 c8                	and    ecx,eax
  4e5644:	8d 3c 8d 00 00 00 00 	lea    edi,[ecx*4+0x0]
  4e564b:	8b 4e 04             	mov    ecx,DWORD PTR [esi+0x4]
  4e564e:	83 3c 39 00          	cmp    DWORD PTR [ecx+edi*1],0x0
  4e5652:	75 13                	jne    0x4e5667
  4e5654:	6a 18                	push   0x18
  4e5656:	e8 5b db f1 ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  4e565b:	8b 56 04             	mov    edx,DWORD PTR [esi+0x4]
  4e565e:	83 c4 04             	add    esp,0x4
  4e5661:	89 04 17             	mov    DWORD PTR [edi+edx*1],eax
  4e5664:	8b 4e 04             	mov    ecx,DWORD PTR [esi+0x4]
  4e5667:	8b 0c 0f             	mov    ecx,DWORD PTR [edi+ecx*1]
  4e566a:	8d 45 d8             	lea    eax,[ebp-0x28]
  4e566d:	50                   	push   eax
  4e566e:	e8 18 06 f2 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  4e5673:	ff 46 10             	inc    DWORD PTR [esi+0x10]
  4e5676:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  4e5679:	83 fa 10             	cmp    edx,0x10
  4e567c:	72 2e                	jb     0x4e56ac
  4e567e:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  4e5681:	42                   	inc    edx
  4e5682:	8b c1                	mov    eax,ecx
  4e5684:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4e568a:	72 16                	jb     0x4e56a2
  4e568c:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  4e568f:	83 c2 23             	add    edx,0x23
  4e5692:	2b c1                	sub    eax,ecx
  4e5694:	83 c0 fc             	add    eax,0xfffffffc
  4e5697:	83 f8 1f             	cmp    eax,0x1f
  4e569a:	76 06                	jbe    0x4e56a2
  4e569c:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  4e56a2:	52                   	push   edx
  4e56a3:	51                   	push   ecx
  4e56a4:	e8 f1 c9 f1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  4e56a9:	83 c4 08             	add    esp,0x8
  4e56ac:	83 7d 08 00          	cmp    DWORD PTR [ebp+0x8],0x0
  4e56b0:	c7 45 e8 00 00 00 00 	mov    DWORD PTR [ebp-0x18],0x0
  4e56b7:	c7 45 ec 0f 00 00 00 	mov    DWORD PTR [ebp-0x14],0xf
  4e56be:	c6 45 d8 00          	mov    BYTE PTR [ebp-0x28],0x0
  4e56c2:	74 08                	je     0x4e56cc
  4e56c4:	8d 4d 08             	lea    ecx,[ebp+0x8]
  4e56c7:	e8 2e 00 f2 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4e56cc:	83 7d 0c 00          	cmp    DWORD PTR [ebp+0xc],0x0
  4e56d0:	74 08                	je     0x4e56da
  4e56d2:	8d 4d 0c             	lea    ecx,[ebp+0xc]
  4e56d5:	e8 20 00 f2 ff       	call   0x4056fa ; ["call resolved=0x4a6c00 "]
  4e56da:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  4e56dd:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  4e56e4:	59                   	pop    ecx
  4e56e5:	5f                   	pop    edi
  4e56e6:	5e                   	pop    esi
  4e56e7:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  4e56ea:	33 cd                	xor    ecx,ebp
  4e56ec:	e8 9e ed f1 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  4e56f1:	8b e5                	mov    esp,ebp
  4e56f3:	5d                   	pop    ebp
  4e56f4:	c2 08 00             	ret    0x8
  4e56f7:	50                   	push   eax
  4e56f8:	e8 fb bb f1 ff       	call   0x4012f8 ; ["call resolved=0x4a4cc0 "]
