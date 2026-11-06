; FileOperation::getFileAttr; image base 0x400000; static annotation only
  43d2c0:	55                   	push   ebp
  43d2c1:	8b ec                	mov    ebp,esp
  43d2c3:	6a ff                	push   0xffffffff
  43d2c5:	68 21 77 47 00       	push   0x477721
  43d2ca:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  43d2d0:	50                   	push   eax
  43d2d1:	83 ec 5c             	sub    esp,0x5c
  43d2d4:	a1 14 de 49 00       	mov    eax,ds:0x49de14
  43d2d9:	33 c5                	xor    eax,ebp
  43d2db:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  43d2de:	56                   	push   esi
  43d2df:	57                   	push   edi
  43d2e0:	50                   	push   eax
  43d2e1:	8d 45 f4             	lea    eax,[ebp-0xc]
  43d2e4:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  43d2ea:	89 4d b4             	mov    DWORD PTR [ebp-0x4c],ecx
  43d2ed:	8b 7d 08             	mov    edi,DWORD PTR [ebp+0x8]
  43d2f0:	8d 4d b8             	lea    ecx,[ebp-0x48]
  43d2f3:	8b 55 0c             	mov    edx,DWORD PTR [ebp+0xc]
  43d2f6:	8b 45 10             	mov    eax,DWORD PTR [ebp+0x10]
  43d2f9:	57                   	push   edi
  43d2fa:	89 7d 98             	mov    DWORD PTR [ebp-0x68],edi
  43d2fd:	89 55 b0             	mov    DWORD PTR [ebp-0x50],edx
  43d300:	89 45 ac             	mov    DWORD PTR [ebp-0x54],eax
  43d303:	ff 15 b4 f2 47 00    	call   DWORD PTR ds:0x47f2b4 ; ??0QFileInfo@@QAE@ABVQString@@@Z
  43d309:	8d 4d b8             	lea    ecx,[ebp-0x48]
  43d30c:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  43d313:	ff 15 c0 f2 47 00    	call   DWORD PTR ds:0x47f2c0 ; ?exists@QFileInfo@@QBE_NXZ
  43d319:	84 c0                	test   al,al
  43d31b:	0f 85 96 00 00 00    	jne    0x43d3b7
  43d321:	8b 35 e4 2b 4a 00    	mov    esi,DWORD PTR ds:0x4a2be4
  43d327:	8d 45 d8             	lea    eax,[ebp-0x28]
  43d32a:	50                   	push   eax
  43d32b:	8b cf                	mov    ecx,edi
  43d32d:	ff 15 80 f4 47 00    	call   DWORD PTR ds:0x47f480 ; ?toStdString@QString@@QBE?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
  43d333:	50                   	push   eax
  43d334:	6a 0d                	push   0xd
  43d336:	68 e0 40 48 00       	push   0x4840e0 ; ["{} not exists"]
  43d33b:	6a 04                	push   0x4
  43d33d:	83 ec 0c             	sub    esp,0xc
  43d340:	c7 45 9c 08 56 48 00 	mov    DWORD PTR [ebp-0x64],0x485608 ; ["D:\\vivo_Project\\vdfs\\src\\server\\File\\fileoperation.cpp"]
  43d347:	8b c4                	mov    eax,esp
  43d349:	c7 45 a0 14 00 00 00 	mov    DWORD PTR [ebp-0x60],0x14
  43d350:	f3 0f 7e 45 9c       	movq   xmm0,QWORD PTR [ebp-0x64]
  43d355:	8b ce                	mov    ecx,esi
  43d357:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  43d35b:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  43d35f:	c7 40 08 ec 55 48 00 	mov    DWORD PTR [eax+0x8],0x4855ec ; ["FileOperation::getFileAttr"]
  43d366:	e8 f5 c9 fc ff       	call   0x409d60 ; ["call resolved=0x409d60 "]
  43d36b:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  43d36e:	83 fa 10             	cmp    edx,0x10
  43d371:	72 2e                	jb     0x43d3a1
  43d373:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  43d376:	42                   	inc    edx
  43d377:	8b c1                	mov    eax,ecx
  43d379:	81 fa 00 10 00 00    	cmp    edx,0x1000
  43d37f:	72 16                	jb     0x43d397
  43d381:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  43d384:	83 c2 23             	add    edx,0x23
  43d387:	2b c1                	sub    eax,ecx
  43d389:	83 c0 fc             	add    eax,0xfffffffc
  43d38c:	83 f8 1f             	cmp    eax,0x1f
  43d38f:	76 06                	jbe    0x43d397
  43d391:	ff 15 68 f6 47 00    	call   DWORD PTR ds:0x47f668 ; _invalid_parameter_noinfo_noreturn
  43d397:	52                   	push   edx
  43d398:	51                   	push   ecx
  43d399:	e8 83 52 03 00       	call   0x472621 ; ["call resolved=0x472621 "]
  43d39e:	83 c4 08             	add    esp,0x8
  43d3a1:	8b 45 ac             	mov    eax,DWORD PTR [ebp-0x54]
  43d3a4:	c6 45 bf 00          	mov    BYTE PTR [ebp-0x41],0x0
  43d3a8:	c6 00 05             	mov    BYTE PTR [eax],0x5
  43d3ab:	8b 45 b4             	mov    eax,DWORD PTR [ebp-0x4c]
  43d3ae:	c6 40 08 02          	mov    BYTE PTR [eax+0x8],0x2
  43d3b2:	e9 63 02 00 00       	jmp    0x43d61a
  43d3b7:	8d 4d b8             	lea    ecx,[ebp-0x48]
  43d3ba:	ff 15 e4 f2 47 00    	call   DWORD PTR ds:0x47f2e4 ; ?size@QFileInfo@@QBE_JXZ
  43d3c0:	8d 4d b8             	lea    ecx,[ebp-0x48]
  43d3c3:	89 45 a8             	mov    DWORD PTR [ebp-0x58],eax
  43d3c6:	89 55 b4             	mov    DWORD PTR [ebp-0x4c],edx
  43d3c9:	ff 15 e0 f2 47 00    	call   DWORD PTR ds:0x47f2e0 ; ?isSymLink@QFileInfo@@QBE_NXZ
  43d3cf:	84 c0                	test   al,al
  43d3d1:	0f 84 b3 00 00 00    	je     0x43d48a
  43d3d7:	57                   	push   edi
  43d3d8:	8d 4d a0             	lea    ecx,[ebp-0x60]
  43d3db:	ff 15 1c f4 47 00    	call   DWORD PTR ds:0x47f41c ; ??0QFile@@QAE@ABVQString@@@Z
  43d3e1:	51                   	push   ecx
  43d3e2:	8b c4                	mov    eax,esp
  43d3e4:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  43d3e8:	8d 4d a0             	lea    ecx,[ebp-0x60]
  43d3eb:	c7 00 01 00 00 00    	mov    DWORD PTR [eax],0x1
  43d3f1:	ff 15 bc f3 47 00    	call   DWORD PTR ds:0x47f3bc ; ?open@QFile@@UAE_NV?$QFlags@W4OpenModeFlag@QIODevice@@@@@Z
  43d3f7:	84 c0                	test   al,al
  43d3f9:	75 6a                	jne    0x43d465
  43d3fb:	8b 35 e4 2b 4a 00    	mov    esi,DWORD PTR ds:0x4a2be4
  43d401:	8d 45 c0             	lea    eax,[ebp-0x40]
  43d404:	50                   	push   eax
  43d405:	8b cf                	mov    ecx,edi
  43d407:	ff 15 80 f4 47 00    	call   DWORD PTR ds:0x47f480 ; ?toStdString@QString@@QBE?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
  43d40d:	50                   	push   eax
  43d40e:	6a 1f                	push   0x1f
  43d410:	68 40 56 48 00       	push   0x485640 ; ["Failed to retrieve file size {}"]
  43d415:	6a 04                	push   0x4
  43d417:	83 ec 0c             	sub    esp,0xc
  43d41a:	c7 45 e4 08 56 48 00 	mov    DWORD PTR [ebp-0x1c],0x485608 ; ["D:\\vivo_Project\\vdfs\\src\\server\\File\\fileoperation.cpp"]
  43d421:	8b c4                	mov    eax,esp
  43d423:	c7 45 e8 21 00 00 00 	mov    DWORD PTR [ebp-0x18],0x21
  43d42a:	f3 0f 7e 45 e4       	movq   xmm0,QWORD PTR [ebp-0x1c]
  43d42f:	8b ce                	mov    ecx,esi
  43d431:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  43d435:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  43d439:	c7 40 08 ec 55 48 00 	mov    DWORD PTR [eax+0x8],0x4855ec ; ["FileOperation::getFileAttr"]
  43d440:	e8 1b c9 fc ff       	call   0x409d60 ; ["call resolved=0x409d60 "]
  43d445:	8d 4d c0             	lea    ecx,[ebp-0x40]
  43d448:	e8 43 6b fc ff       	call   0x403f90 ; ["call resolved=0x403f90 "]
  43d44d:	8b 45 ac             	mov    eax,DWORD PTR [ebp-0x54]
  43d450:	8d 4d a0             	lea    ecx,[ebp-0x60]
  43d453:	c6 00 05             	mov    BYTE PTR [eax],0x5
  43d456:	ff 15 18 f4 47 00    	call   DWORD PTR ds:0x47f418 ; ??1QFile@@UAE@XZ ; ["ȣ\t"]
  43d45c:	c6 45 bf 00          	mov    BYTE PTR [ebp-0x41],0x0
  43d460:	e9 b5 01 00 00       	jmp    0x43d61a
  43d465:	8d 4d a0             	lea    ecx,[ebp-0x60]
  43d468:	ff 15 c8 f4 47 00    	call   DWORD PTR ds:0x47f4c8 ; ?size@QFile@@UBE_JXZ
  43d46e:	8d 4d a0             	lea    ecx,[ebp-0x60]
  43d471:	89 45 a8             	mov    DWORD PTR [ebp-0x58],eax
  43d474:	89 55 b4             	mov    DWORD PTR [ebp-0x4c],edx
  43d477:	ff 15 ec f3 47 00    	call   DWORD PTR ds:0x47f3ec ; ?close@QFileDevice@@UAEXXZ
  43d47d:	8d 4d a0             	lea    ecx,[ebp-0x60]
  43d480:	c6 45 fc 00          	mov    BYTE PTR [ebp-0x4],0x0
  43d484:	ff 15 18 f4 47 00    	call   DWORD PTR ds:0x47f418 ; ??1QFile@@UAE@XZ ; ["ȣ\t"]
  43d48a:	8d 4d b8             	lea    ecx,[ebp-0x48]
  43d48d:	33 f6                	xor    esi,esi
  43d48f:	ff 15 dc f2 47 00    	call   DWORD PTR ds:0x47f2dc ; ?isDir@QFileInfo@@QBE_NXZ
  43d495:	84 c0                	test   al,al
  43d497:	74 07                	je     0x43d4a0
  43d499:	be 00 40 00 00       	mov    esi,0x4000
  43d49e:	eb 13                	jmp    0x43d4b3
  43d4a0:	8d 4d b8             	lea    ecx,[ebp-0x48]
  43d4a3:	ff 15 d8 f2 47 00    	call   DWORD PTR ds:0x47f2d8 ; ?isFile@QFileInfo@@QBE_NXZ
  43d4a9:	84 c0                	test   al,al
  43d4ab:	b9 00 80 00 00       	mov    ecx,0x8000
  43d4b0:	0f 45 f1             	cmovne esi,ecx
  43d4b3:	8d 4d b8             	lea    ecx,[ebp-0x48]
  43d4b6:	ff 15 cc f2 47 00    	call   DWORD PTR ds:0x47f2cc ; ?isReadable@QFileInfo@@QBE_NXZ
  43d4bc:	84 c0                	test   al,al
  43d4be:	74 06                	je     0x43d4c6
  43d4c0:	81 ce 00 01 00 00    	or     esi,0x100
  43d4c6:	8d 4d b8             	lea    ecx,[ebp-0x48]
  43d4c9:	ff 15 d0 f2 47 00    	call   DWORD PTR ds:0x47f2d0 ; ?isWritable@QFileInfo@@QBE_NXZ
  43d4cf:	84 c0                	test   al,al
  43d4d1:	74 08                	je     0x43d4db
  43d4d3:	81 ce 80 00 00 00    	or     esi,0x80
  43d4d9:	eb 10                	jmp    0x43d4eb
  43d4db:	8d 4d b8             	lea    ecx,[ebp-0x48]
  43d4de:	ff 15 d4 f2 47 00    	call   DWORD PTR ds:0x47f2d4 ; ?isExecutable@QFileInfo@@QBE_NXZ
  43d4e4:	84 c0                	test   al,al
  43d4e6:	74 03                	je     0x43d4eb
  43d4e8:	83 ce 40             	or     esi,0x40
  43d4eb:	8b 7d b0             	mov    edi,DWORD PTR [ebp-0x50]
  43d4ee:	8d 4d b8             	lea    ecx,[ebp-0x48]
  43d4f1:	33 c0                	xor    eax,eax
  43d4f3:	c7 07 00 00 00 00    	mov    DWORD PTR [edi],0x0
  43d4f9:	c7 47 08 00 00 00 00 	mov    DWORD PTR [edi+0x8],0x0
  43d500:	c7 47 0c 00 00 00 00 	mov    DWORD PTR [edi+0xc],0x0
  43d507:	89 77 10             	mov    DWORD PTR [edi+0x10],esi
  43d50a:	66 89 47 14          	mov    WORD PTR [edi+0x14],ax
  43d50e:	ff 15 38 f3 47 00    	call   DWORD PTR ds:0x47f338 ; ?ownerId@QFileInfo@@QBEIXZ
  43d514:	8d 4d b8             	lea    ecx,[ebp-0x48]
  43d517:	89 47 18             	mov    DWORD PTR [edi+0x18],eax
  43d51a:	ff 15 3c f3 47 00    	call   DWORD PTR ds:0x47f33c ; ?groupId@QFileInfo@@QBEIXZ
  43d520:	8b 4d a8             	mov    ecx,DWORD PTR [ebp-0x58]
  43d523:	89 4f 28             	mov    DWORD PTR [edi+0x28],ecx
  43d526:	8b 4d b4             	mov    ecx,DWORD PTR [ebp-0x4c]
  43d529:	89 47 1c             	mov    DWORD PTR [edi+0x1c],eax
  43d52c:	8d 45 b4             	lea    eax,[ebp-0x4c]
  43d52f:	89 4f 2c             	mov    DWORD PTR [edi+0x2c],ecx
  43d532:	8d 4d b8             	lea    ecx,[ebp-0x48]
  43d535:	50                   	push   eax
  43d536:	c7 47 20 00 00 00 00 	mov    DWORD PTR [edi+0x20],0x0
  43d53d:	c7 47 30 00 00 00 00 	mov    DWORD PTR [edi+0x30],0x0
  43d544:	c7 47 38 00 00 00 00 	mov    DWORD PTR [edi+0x38],0x0
  43d54b:	c7 47 3c 00 00 00 00 	mov    DWORD PTR [edi+0x3c],0x0
  43d552:	ff 15 40 f3 47 00    	call   DWORD PTR ds:0x47f340 ; ?lastRead@QFileInfo@@QBE?AVQDateTime@@XZ
  43d558:	8b 3d 18 f3 47 00    	mov    edi,DWORD PTR ds:0x47f318
  43d55e:	8b c8                	mov    ecx,eax
  43d560:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  43d564:	ff d7                	call   edi
  43d566:	8b 55 b0             	mov    edx,DWORD PTR [ebp-0x50]
  43d569:	8d 4d b4             	lea    ecx,[ebp-0x4c]
  43d56c:	8b 35 14 f3 47 00    	mov    esi,DWORD PTR ds:0x47f314 ; ["й\t"]
  43d572:	c6 45 fc 00          	mov    BYTE PTR [ebp-0x4],0x0
  43d576:	89 42 40             	mov    DWORD PTR [edx+0x40],eax
  43d579:	c7 42 44 00 00 00 00 	mov    DWORD PTR [edx+0x44],0x0
  43d580:	ff d6                	call   esi
  43d582:	8d 45 b4             	lea    eax,[ebp-0x4c]
  43d585:	50                   	push   eax
  43d586:	8d 4d b8             	lea    ecx,[ebp-0x48]
  43d589:	ff 15 e8 f2 47 00    	call   DWORD PTR ds:0x47f2e8 ; ?metadataChangeTime@QFileInfo@@QBE?AVQDateTime@@XZ ; ["η\t"]
  43d58f:	8b c8                	mov    ecx,eax
  43d591:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  43d595:	ff d7                	call   edi
  43d597:	8b 7d b0             	mov    edi,DWORD PTR [ebp-0x50]
  43d59a:	8d 4d b4             	lea    ecx,[ebp-0x4c]
  43d59d:	c6 45 fc 00          	mov    BYTE PTR [ebp-0x4],0x0
  43d5a1:	89 47 48             	mov    DWORD PTR [edi+0x48],eax
  43d5a4:	c7 47 4c 00 00 00 00 	mov    DWORD PTR [edi+0x4c],0x0
  43d5ab:	ff d6                	call   esi
  43d5ad:	8b 4d 98             	mov    ecx,DWORD PTR [ebp-0x68]
  43d5b0:	8d 45 c0             	lea    eax,[ebp-0x40]
  43d5b3:	c7 47 50 00 00 00 00 	mov    DWORD PTR [edi+0x50],0x0
  43d5ba:	c7 47 54 00 00 00 00 	mov    DWORD PTR [edi+0x54],0x0
  43d5c1:	8b 35 e4 2b 4a 00    	mov    esi,DWORD PTR ds:0x4a2be4
  43d5c7:	50                   	push   eax
  43d5c8:	ff 15 80 f4 47 00    	call   DWORD PTR ds:0x47f480 ; ?toStdString@QString@@QBE?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
  43d5ce:	50                   	push   eax
  43d5cf:	8d 47 28             	lea    eax,[edi+0x28]
  43d5d2:	c7 45 e4 08 56 48 00 	mov    DWORD PTR [ebp-0x1c],0x485608 ; ["D:\\vivo_Project\\vdfs\\src\\server\\File\\fileoperation.cpp"]
  43d5d9:	50                   	push   eax
  43d5da:	8d 47 10             	lea    eax,[edi+0x10]
  43d5dd:	c7 45 e8 49 00 00 00 	mov    DWORD PTR [ebp-0x18],0x49
  43d5e4:	f3 0f 7e 45 e4       	movq   xmm0,QWORD PTR [ebp-0x1c]
  43d5e9:	8b ce                	mov    ecx,esi
  43d5eb:	50                   	push   eax
  43d5ec:	6a 22                	push   0x22
  43d5ee:	68 60 56 48 00       	push   0x485660 ; ["Reply attr mode:{} size:{} path:{}"]
  43d5f3:	6a 02                	push   0x2
  43d5f5:	83 ec 0c             	sub    esp,0xc
  43d5f8:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  43d5fc:	8b c4                	mov    eax,esp
  43d5fe:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  43d602:	c7 40 08 ec 55 48 00 	mov    DWORD PTR [eax+0x8],0x4855ec ; ["FileOperation::getFileAttr"]
  43d609:	e8 22 f6 ff ff       	call   0x43cc30 ; ["call resolved=0x43cc30 "]
  43d60e:	8d 4d c0             	lea    ecx,[ebp-0x40]
  43d611:	e8 7a 69 fc ff       	call   0x403f90 ; ["call resolved=0x403f90 "]
  43d616:	c6 45 bf 01          	mov    BYTE PTR [ebp-0x41],0x1
  43d61a:	8d 4d b8             	lea    ecx,[ebp-0x48]
  43d61d:	ff 15 bc f2 47 00    	call   DWORD PTR ds:0x47f2bc ; ??1QFileInfo@@QAE@XZ
  43d623:	8a 45 bf             	mov    al,BYTE PTR [ebp-0x41]
  43d626:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  43d629:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  43d630:	59                   	pop    ecx
  43d631:	5f                   	pop    edi
  43d632:	5e                   	pop    esi
  43d633:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  43d636:	33 cd                	xor    ecx,ebp
  43d638:	e8 43 52 03 00       	call   0x472880 ; ["call resolved=0x472880 "]
  43d63d:	8b e5                	mov    esp,ebp
  43d63f:	5d                   	pop    ebp
  43d640:	c2 0c 00             	ret    0xc
