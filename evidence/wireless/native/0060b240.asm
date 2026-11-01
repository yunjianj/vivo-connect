; SSDPSocket::parserResponseData; image base 0x400000; static annotation only
  60b240:	55                   	push   ebp
  60b241:	8b ec                	mov    ebp,esp
  60b243:	6a ff                	push   0xffffffff
  60b245:	68 95 b7 69 00       	push   0x69b795
  60b24a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  60b250:	50                   	push   eax
  60b251:	83 ec 78             	sub    esp,0x78
  60b254:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  60b259:	33 c5                	xor    eax,ebp
  60b25b:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  60b25e:	53                   	push   ebx
  60b25f:	56                   	push   esi
  60b260:	57                   	push   edi
  60b261:	50                   	push   eax
  60b262:	8d 45 f4             	lea    eax,[ebp-0xc]
  60b265:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  60b26b:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  60b26e:	8b 75 08             	mov    esi,DWORD PTR [ebp+0x8]
  60b271:	b9 03 aa 7a 00       	mov    ecx,0x7aaa03
  60b276:	8b 7d 0c             	mov    edi,DWORD PTR [ebp+0xc]
  60b279:	e8 70 d8 df ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  60b27e:	83 7e 10 00          	cmp    DWORD PTR [esi+0x10],0x0
  60b282:	0f 84 84 08 00 00    	je     0x60bb0c
  60b288:	6a 00                	push   0x0
  60b28a:	8d 4d 80             	lea    ecx,[ebp-0x80]
  60b28d:	e8 30 96 df ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  60b292:	83 7e 14 10          	cmp    DWORD PTR [esi+0x14],0x10
  60b296:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  60b29d:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  60b2a1:	72 09                	jb     0x60b2ac
  60b2a3:	8b 06                	mov    eax,DWORD PTR [esi]
  60b2a5:	03 46 10             	add    eax,DWORD PTR [esi+0x10]
  60b2a8:	8b 0e                	mov    ecx,DWORD PTR [esi]
  60b2aa:	eb 07                	jmp    0x60b2b3
  60b2ac:	8b 46 10             	mov    eax,DWORD PTR [esi+0x10]
  60b2af:	8b ce                	mov    ecx,esi
  60b2b1:	03 c6                	add    eax,esi
  60b2b3:	50                   	push   eax
  60b2b4:	51                   	push   ecx
  60b2b5:	8d 4d 90             	lea    ecx,[ebp-0x70]
  60b2b8:	e8 29 9f df ff       	call   0x4051e6 ; ["call resolved=0x4a7d20 "]
  60b2bd:	83 ec 10             	sub    esp,0x10
  60b2c0:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  60b2c4:	8b cc                	mov    ecx,esp
  60b2c6:	6a 01                	push   0x1
  60b2c8:	83 ec 28             	sub    esp,0x28
  60b2cb:	8b c4                	mov    eax,esp
  60b2cd:	c7 40 24 00 00 00 00 	mov    DWORD PTR [eax+0x24],0x0
  60b2d4:	8d 45 90             	lea    eax,[ebp-0x70]
  60b2d7:	50                   	push   eax
  60b2d8:	51                   	push   ecx
  60b2d9:	e8 f1 6a df ff       	call   0x401dcf ; ["call resolved=0x4b45e0 "]
  60b2de:	83 c4 34             	add    esp,0x34
  60b2e1:	8d 4d 80             	lea    ecx,[ebp-0x80]
  60b2e4:	e8 9c 91 df ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  60b2e9:	8b 4d 94             	mov    ecx,DWORD PTR [ebp-0x6c]
  60b2ec:	89 4d 9c             	mov    DWORD PTR [ebp-0x64],ecx
  60b2ef:	85 c9                	test   ecx,ecx
  60b2f1:	74 20                	je     0x60b313
  60b2f3:	83 c8 ff             	or     eax,0xffffffff
  60b2f6:	f0 0f c1 41 04       	lock xadd DWORD PTR [ecx+0x4],eax
  60b2fb:	75 16                	jne    0x60b313
  60b2fd:	8b 01                	mov    eax,DWORD PTR [ecx]
  60b2ff:	ff 10                	call   DWORD PTR [eax]
  60b301:	8b 4d 9c             	mov    ecx,DWORD PTR [ebp-0x64]
  60b304:	83 c8 ff             	or     eax,0xffffffff
  60b307:	f0 0f c1 41 08       	lock xadd DWORD PTR [ecx+0x8],eax
  60b30c:	75 05                	jne    0x60b313
  60b30e:	8b 01                	mov    eax,DWORD PTR [ecx]
  60b310:	ff 50 04             	call   DWORD PTR [eax+0x4]
  60b313:	83 7e 14 10          	cmp    DWORD PTR [esi+0x14],0x10
  60b317:	8b 46 10             	mov    eax,DWORD PTR [esi+0x10]
  60b31a:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  60b321:	72 02                	jb     0x60b325
  60b323:	8b 36                	mov    esi,DWORD PTR [esi]
  60b325:	6a 06                	push   0x6
  60b327:	68 6c 4d 6c 00       	push   0x6c4d6c ; ["openId"]
  60b32c:	6a 00                	push   0x0
  60b32e:	50                   	push   eax
  60b32f:	56                   	push   esi
  60b330:	e8 87 aa df ff       	call   0x405dbc ; ["call resolved=0x441fc0 "]
  60b335:	83 c4 14             	add    esp,0x14
  60b338:	83 f8 ff             	cmp    eax,0xffffffff
  60b33b:	74 59                	je     0x60b396
  60b33d:	68 6c 4d 6c 00       	push   0x6c4d6c ; ["openId"]
  60b342:	8d 4d 80             	lea    ecx,[ebp-0x80]
  60b345:	e8 94 83 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  60b34a:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  60b34d:	51                   	push   ecx
  60b34e:	8b c8                	mov    ecx,eax
  60b350:	e8 95 b8 df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  60b355:	50                   	push   eax
  60b356:	8d 4f 48             	lea    ecx,[edi+0x48]
  60b359:	e8 ba c1 df ff       	call   0x407518 ; ["call resolved=0x472b20 "]
  60b35e:	8b 55 e8             	mov    edx,DWORD PTR [ebp-0x18]
  60b361:	83 fa 10             	cmp    edx,0x10
  60b364:	72 3f                	jb     0x60b3a5
  60b366:	8b 4d d4             	mov    ecx,DWORD PTR [ebp-0x2c]
  60b369:	42                   	inc    edx
  60b36a:	8b c1                	mov    eax,ecx
  60b36c:	81 fa 00 10 00 00    	cmp    edx,0x1000
  60b372:	72 16                	jb     0x60b38a
  60b374:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  60b377:	83 c2 23             	add    edx,0x23
  60b37a:	2b c1                	sub    eax,ecx
  60b37c:	83 c0 fc             	add    eax,0xfffffffc
  60b37f:	83 f8 1f             	cmp    eax,0x1f
  60b382:	76 06                	jbe    0x60b38a
  60b384:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  60b38a:	52                   	push   edx
  60b38b:	51                   	push   ecx
  60b38c:	e8 09 6d df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  60b391:	83 c4 08             	add    esp,0x8
  60b394:	eb 0f                	jmp    0x60b3a5
  60b396:	6a 00                	push   0x0
  60b398:	68 02 1c 6c 00       	push   0x6c1c02
  60b39d:	8d 4f 48             	lea    ecx,[edi+0x48]
  60b3a0:	e8 72 90 df ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  60b3a5:	68 08 63 6f 00       	push   0x6f6308 ; ["pcCustomizedData"]
  60b3aa:	8d 4d 80             	lea    ecx,[ebp-0x80]
  60b3ad:	e8 2c 83 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  60b3b2:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  60b3b5:	51                   	push   ecx
  60b3b6:	8b c8                	mov    ecx,eax
  60b3b8:	e8 2d b8 df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  60b3bd:	8b f0                	mov    esi,eax
  60b3bf:	8d 47 78             	lea    eax,[edi+0x78]
  60b3c2:	3b c6                	cmp    eax,esi
  60b3c4:	74 2c                	je     0x60b3f2
  60b3c6:	8b c8                	mov    ecx,eax
  60b3c8:	e8 36 86 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  60b3cd:	0f 10 06             	movups xmm0,XMMWORD PTR [esi]
  60b3d0:	0f 11 47 78          	movups XMMWORD PTR [edi+0x78],xmm0
  60b3d4:	f3 0f 7e 46 10       	movq   xmm0,QWORD PTR [esi+0x10]
  60b3d9:	66 0f d6 87 88 00 00 	movq   QWORD PTR [edi+0x88],xmm0
  60b3e1:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  60b3e8:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  60b3ef:	c6 06 00             	mov    BYTE PTR [esi],0x0
  60b3f2:	8b 55 e8             	mov    edx,DWORD PTR [ebp-0x18]
  60b3f5:	83 fa 10             	cmp    edx,0x10
  60b3f8:	72 2e                	jb     0x60b428
  60b3fa:	8b 4d d4             	mov    ecx,DWORD PTR [ebp-0x2c]
  60b3fd:	42                   	inc    edx
  60b3fe:	8b c1                	mov    eax,ecx
  60b400:	81 fa 00 10 00 00    	cmp    edx,0x1000
  60b406:	72 16                	jb     0x60b41e
  60b408:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  60b40b:	83 c2 23             	add    edx,0x23
  60b40e:	2b c1                	sub    eax,ecx
  60b410:	83 c0 fc             	add    eax,0xfffffffc
  60b413:	83 f8 1f             	cmp    eax,0x1f
  60b416:	76 06                	jbe    0x60b41e
  60b418:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  60b41e:	52                   	push   edx
  60b41f:	51                   	push   ecx
  60b420:	e8 75 6c df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  60b425:	83 c4 08             	add    esp,0x8
  60b428:	68 a4 4b 6c 00       	push   0x6c4ba4 ; ["deviceName"]
  60b42d:	8d 4d 80             	lea    ecx,[ebp-0x80]
  60b430:	e8 a9 82 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  60b435:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  60b438:	51                   	push   ecx
  60b439:	8b c8                	mov    ecx,eax
  60b43b:	e8 aa b7 df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  60b440:	8b f0                	mov    esi,eax
  60b442:	3b fe                	cmp    edi,esi
  60b444:	74 28                	je     0x60b46e
  60b446:	8b cf                	mov    ecx,edi
  60b448:	e8 b6 85 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  60b44d:	0f 10 06             	movups xmm0,XMMWORD PTR [esi]
  60b450:	0f 11 07             	movups XMMWORD PTR [edi],xmm0
  60b453:	f3 0f 7e 46 10       	movq   xmm0,QWORD PTR [esi+0x10]
  60b458:	66 0f d6 47 10       	movq   QWORD PTR [edi+0x10],xmm0
  60b45d:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  60b464:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  60b46b:	c6 06 00             	mov    BYTE PTR [esi],0x0
  60b46e:	8b 55 e8             	mov    edx,DWORD PTR [ebp-0x18]
  60b471:	83 fa 10             	cmp    edx,0x10
  60b474:	72 2e                	jb     0x60b4a4
  60b476:	8b 4d d4             	mov    ecx,DWORD PTR [ebp-0x2c]
  60b479:	42                   	inc    edx
  60b47a:	8b c1                	mov    eax,ecx
  60b47c:	81 fa 00 10 00 00    	cmp    edx,0x1000
  60b482:	72 16                	jb     0x60b49a
  60b484:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  60b487:	83 c2 23             	add    edx,0x23
  60b48a:	2b c1                	sub    eax,ecx
  60b48c:	83 c0 fc             	add    eax,0xfffffffc
  60b48f:	83 f8 1f             	cmp    eax,0x1f
  60b492:	76 06                	jbe    0x60b49a
  60b494:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  60b49a:	52                   	push   edx
  60b49b:	51                   	push   ecx
  60b49c:	e8 f9 6b df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  60b4a1:	83 c4 08             	add    esp,0x8
  60b4a4:	be 05 00 00 00       	mov    esi,0x5
  60b4a9:	c7 45 d4 00 00 00 00 	mov    DWORD PTR [ebp-0x2c],0x0
  60b4b0:	39 77 10             	cmp    DWORD PTR [edi+0x10],esi
  60b4b3:	8b c7                	mov    eax,edi
  60b4b5:	c7 45 e8 0f 00 00 00 	mov    DWORD PTR [ebp-0x18],0xf
  60b4bc:	0f 42 77 10          	cmovb  esi,DWORD PTR [edi+0x10]
  60b4c0:	83 7f 14 10          	cmp    DWORD PTR [edi+0x14],0x10
  60b4c4:	89 75 9c             	mov    DWORD PTR [ebp-0x64],esi
  60b4c7:	89 7d 94             	mov    DWORD PTR [ebp-0x6c],edi
  60b4ca:	72 05                	jb     0x60b4d1
  60b4cc:	8b 07                	mov    eax,DWORD PTR [edi]
  60b4ce:	89 45 94             	mov    DWORD PTR [ebp-0x6c],eax
  60b4d1:	83 fe 0f             	cmp    esi,0xf
  60b4d4:	77 1e                	ja     0x60b4f4
  60b4d6:	56                   	push   esi
  60b4d7:	50                   	push   eax
  60b4d8:	8d 45 d4             	lea    eax,[ebp-0x2c]
  60b4db:	89 75 e4             	mov    DWORD PTR [ebp-0x1c],esi
  60b4de:	50                   	push   eax
  60b4df:	e8 ac d2 05 00       	call   0x668790 ; ["call resolved=0x668790 "]
  60b4e4:	c6 44 35 d4 00       	mov    BYTE PTR [ebp+esi*1-0x2c],0x0
  60b4e9:	8b 75 e8             	mov    esi,DWORD PTR [ebp-0x18]
  60b4ec:	8b 45 e4             	mov    eax,DWORD PTR [ebp-0x1c]
  60b4ef:	8b 4d d4             	mov    ecx,DWORD PTR [ebp-0x2c]
  60b4f2:	eb 57                	jmp    0x60b54b
  60b4f4:	81 fe ff ff ff 7f    	cmp    esi,0x7fffffff
  60b4fa:	0f 87 31 06 00 00    	ja     0x60bb31
  60b500:	83 ce 0f             	or     esi,0xf
  60b503:	81 fe ff ff ff 7f    	cmp    esi,0x7fffffff
  60b509:	76 07                	jbe    0x60b512
  60b50b:	be ff ff ff 7f       	mov    esi,0x7fffffff
  60b510:	eb 0a                	jmp    0x60b51c
  60b512:	b8 16 00 00 00       	mov    eax,0x16
  60b517:	3b f0                	cmp    esi,eax
  60b519:	0f 42 f0             	cmovb  esi,eax
  60b51c:	8d 46 01             	lea    eax,[esi+0x1]
  60b51f:	50                   	push   eax
  60b520:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  60b523:	e8 83 64 df ff       	call   0x4019ab ; ["call resolved=0x480060 "]
  60b528:	8b 4d 9c             	mov    ecx,DWORD PTR [ebp-0x64]
  60b52b:	51                   	push   ecx
  60b52c:	ff 75 94             	push   DWORD PTR [ebp-0x6c]
  60b52f:	89 45 98             	mov    DWORD PTR [ebp-0x68],eax
  60b532:	50                   	push   eax
  60b533:	89 4d e4             	mov    DWORD PTR [ebp-0x1c],ecx
  60b536:	89 75 e8             	mov    DWORD PTR [ebp-0x18],esi
  60b539:	e8 4c d2 05 00       	call   0x66878a ; ["call resolved=0x66878a "]
  60b53e:	8b 4d 98             	mov    ecx,DWORD PTR [ebp-0x68]
  60b541:	8b 45 9c             	mov    eax,DWORD PTR [ebp-0x64]
  60b544:	89 4d d4             	mov    DWORD PTR [ebp-0x2c],ecx
  60b547:	c6 04 01 00          	mov    BYTE PTR [ecx+eax*1],0x0
  60b54b:	83 c4 0c             	add    esp,0xc
  60b54e:	8d 55 d4             	lea    edx,[ebp-0x2c]
  60b551:	83 fe 10             	cmp    esi,0x10
  60b554:	0f 43 d1             	cmovae edx,ecx
  60b557:	83 f8 05             	cmp    eax,0x5
  60b55a:	75 1d                	jne    0x60b579
  60b55c:	50                   	push   eax
  60b55d:	68 1c 63 6f 00       	push   0x6f631c ; ["vivo "]
  60b562:	52                   	push   edx
  60b563:	e8 55 93 df ff       	call   0x4048bd ; ["call resolved=0x482fc0 "]
  60b568:	8b 75 e8             	mov    esi,DWORD PTR [ebp-0x18]
  60b56b:	83 c4 0c             	add    esp,0xc
  60b56e:	8b 4d d4             	mov    ecx,DWORD PTR [ebp-0x2c]
  60b571:	c6 45 a3 01          	mov    BYTE PTR [ebp-0x5d],0x1
  60b575:	85 c0                	test   eax,eax
  60b577:	74 04                	je     0x60b57d
  60b579:	c6 45 a3 00          	mov    BYTE PTR [ebp-0x5d],0x0
  60b57d:	83 fe 10             	cmp    esi,0x10
  60b580:	72 29                	jb     0x60b5ab
  60b582:	46                   	inc    esi
  60b583:	8b c1                	mov    eax,ecx
  60b585:	81 fe 00 10 00 00    	cmp    esi,0x1000
  60b58b:	72 14                	jb     0x60b5a1
  60b58d:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  60b590:	83 c6 23             	add    esi,0x23
  60b593:	2b c1                	sub    eax,ecx
  60b595:	83 c0 fc             	add    eax,0xfffffffc
  60b598:	83 f8 1f             	cmp    eax,0x1f
  60b59b:	0f 87 b2 03 00 00    	ja     0x60b953
  60b5a1:	56                   	push   esi
  60b5a2:	51                   	push   ecx
  60b5a3:	e8 f2 6a df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  60b5a8:	83 c4 08             	add    esp,0x8
  60b5ab:	80 7d a3 00          	cmp    BYTE PTR [ebp-0x5d],0x0
  60b5af:	8b 47 10             	mov    eax,DWORD PTR [edi+0x10]
  60b5b2:	89 45 94             	mov    DWORD PTR [ebp-0x6c],eax
  60b5b5:	c7 45 d4 00 00 00 00 	mov    DWORD PTR [ebp-0x2c],0x0
  60b5bc:	c7 45 e8 0f 00 00 00 	mov    DWORD PTR [ebp-0x18],0xf
  60b5c3:	0f 84 a1 01 00 00    	je     0x60b76a
  60b5c9:	83 f8 05             	cmp    eax,0x5
  60b5cc:	0f 82 5a 05 00 00    	jb     0x60bb2c
  60b5d2:	83 7f 14 10          	cmp    DWORD PTR [edi+0x14],0x10
  60b5d6:	8d 70 fb             	lea    esi,[eax-0x5]
  60b5d9:	8b c7                	mov    eax,edi
  60b5db:	72 02                	jb     0x60b5df
  60b5dd:	8b 07                	mov    eax,DWORD PTR [edi]
  60b5df:	83 c0 05             	add    eax,0x5
  60b5e2:	89 45 98             	mov    DWORD PTR [ebp-0x68],eax
  60b5e5:	83 fe 0f             	cmp    esi,0xf
  60b5e8:	77 15                	ja     0x60b5ff
  60b5ea:	56                   	push   esi
  60b5eb:	50                   	push   eax
  60b5ec:	8d 45 d4             	lea    eax,[ebp-0x2c]
  60b5ef:	89 75 e4             	mov    DWORD PTR [ebp-0x1c],esi
  60b5f2:	50                   	push   eax
  60b5f3:	e8 98 d1 05 00       	call   0x668790 ; ["call resolved=0x668790 "]
  60b5f8:	c6 44 35 d4 00       	mov    BYTE PTR [ebp+esi*1-0x2c],0x0
  60b5fd:	eb 5d                	jmp    0x60b65c
  60b5ff:	81 fe ff ff ff 7f    	cmp    esi,0x7fffffff
  60b605:	0f 87 26 05 00 00    	ja     0x60bb31
  60b60b:	8b c6                	mov    eax,esi
  60b60d:	83 c8 0f             	or     eax,0xf
  60b610:	3d ff ff ff 7f       	cmp    eax,0x7fffffff
  60b615:	76 07                	jbe    0x60b61e
  60b617:	b8 ff ff ff 7f       	mov    eax,0x7fffffff
  60b61c:	eb 0b                	jmp    0x60b629
  60b61e:	83 f8 16             	cmp    eax,0x16
  60b621:	b9 16 00 00 00       	mov    ecx,0x16
  60b626:	0f 42 c1             	cmovb  eax,ecx
  60b629:	89 45 9c             	mov    DWORD PTR [ebp-0x64],eax
  60b62c:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  60b62f:	40                   	inc    eax
  60b630:	50                   	push   eax
  60b631:	e8 75 63 df ff       	call   0x4019ab ; ["call resolved=0x480060 "]
  60b636:	8b 4d 9c             	mov    ecx,DWORD PTR [ebp-0x64]
  60b639:	8b f0                	mov    esi,eax
  60b63b:	8b 45 94             	mov    eax,DWORD PTR [ebp-0x6c]
  60b63e:	83 c0 fb             	add    eax,0xfffffffb
  60b641:	89 4d e8             	mov    DWORD PTR [ebp-0x18],ecx
  60b644:	50                   	push   eax
  60b645:	ff 75 98             	push   DWORD PTR [ebp-0x68]
  60b648:	89 45 e4             	mov    DWORD PTR [ebp-0x1c],eax
  60b64b:	56                   	push   esi
  60b64c:	e8 39 d1 05 00       	call   0x66878a ; ["call resolved=0x66878a "]
  60b651:	8b 45 94             	mov    eax,DWORD PTR [ebp-0x6c]
  60b654:	89 75 d4             	mov    DWORD PTR [ebp-0x2c],esi
  60b657:	c6 44 06 fb 00       	mov    BYTE PTR [esi+eax*1-0x5],0x0
  60b65c:	83 c4 0c             	add    esp,0xc
  60b65f:	8d 45 d4             	lea    eax,[ebp-0x2c]
  60b662:	8b cf                	mov    ecx,edi
  60b664:	50                   	push   eax
  60b665:	e8 ae be df ff       	call   0x407518 ; ["call resolved=0x472b20 "]
  60b66a:	8b 55 e8             	mov    edx,DWORD PTR [ebp-0x18]
  60b66d:	83 fa 10             	cmp    edx,0x10
  60b670:	72 2c                	jb     0x60b69e
  60b672:	8b 4d d4             	mov    ecx,DWORD PTR [ebp-0x2c]
  60b675:	42                   	inc    edx
  60b676:	8b c1                	mov    eax,ecx
  60b678:	81 fa 00 10 00 00    	cmp    edx,0x1000
  60b67e:	72 14                	jb     0x60b694
  60b680:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  60b683:	83 c2 23             	add    edx,0x23
  60b686:	2b c1                	sub    eax,ecx
  60b688:	83 c0 fc             	add    eax,0xfffffffc
  60b68b:	83 f8 1f             	cmp    eax,0x1f
  60b68e:	0f 87 bf 02 00 00    	ja     0x60b953
  60b694:	52                   	push   edx
  60b695:	51                   	push   ecx
  60b696:	e8 ff 69 df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  60b69b:	83 c4 08             	add    esp,0x8
  60b69e:	83 7f 10 06          	cmp    DWORD PTR [edi+0x10],0x6
  60b6a2:	8d 4d 80             	lea    ecx,[ebp-0x80]
  60b6a5:	68 54 4d 6c 00       	push   0x6c4d54 ; ["deviceId"]
  60b6aa:	0f 96 c0             	setbe  al
  60b6ad:	88 47 6d             	mov    BYTE PTR [edi+0x6d],al
  60b6b0:	e8 29 80 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  60b6b5:	8d 4d bc             	lea    ecx,[ebp-0x44]
  60b6b8:	51                   	push   ecx
  60b6b9:	8b c8                	mov    ecx,eax
  60b6bb:	e8 2a b5 df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  60b6c0:	50                   	push   eax
  60b6c1:	8d 4f 18             	lea    ecx,[edi+0x18]
  60b6c4:	e8 4f be df ff       	call   0x407518 ; ["call resolved=0x472b20 "]
  60b6c9:	8d 4d bc             	lea    ecx,[ebp-0x44]
  60b6cc:	e8 32 83 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  60b6d1:	6a 04                	push   0x4
  60b6d3:	6a 00                	push   0x0
  60b6d5:	8d 45 d4             	lea    eax,[ebp-0x2c]
  60b6d8:	50                   	push   eax
  60b6d9:	8d 4f 18             	lea    ecx,[edi+0x18]
  60b6dc:	e8 1c c5 df ff       	call   0x407bfd ; ["call resolved=0x4cbba0 "]
  60b6e1:	83 7d e8 10          	cmp    DWORD PTR [ebp-0x18],0x10
  60b6e5:	8d 45 d4             	lea    eax,[ebp-0x2c]
  60b6e8:	6a 04                	push   0x4
  60b6ea:	0f 43 45 d4          	cmovae eax,DWORD PTR [ebp-0x2c]
  60b6ee:	50                   	push   eax
  60b6ef:	8d 45 bc             	lea    eax,[ebp-0x44]
  60b6f2:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  60b6f6:	50                   	push   eax
  60b6f7:	e8 d6 63 df ff       	call   0x401ad2 ; ["call resolved=0x4a66d0 "]
  60b6fc:	83 c4 0c             	add    esp,0xc
  60b6ff:	8d 45 bc             	lea    eax,[ebp-0x44]
  60b702:	8d 4f 18             	lea    ecx,[edi+0x18]
  60b705:	50                   	push   eax
  60b706:	e8 0d be df ff       	call   0x407518 ; ["call resolved=0x472b20 "]
  60b70b:	8d 4d bc             	lea    ecx,[ebp-0x44]
  60b70e:	e8 f0 82 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  60b713:	68 b0 4d 6c 00       	push   0x6c4db0 ; ["deviceType"]
  60b718:	8d 4d 80             	lea    ecx,[ebp-0x80]
  60b71b:	e8 be 7f df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  60b720:	8d 4d bc             	lea    ecx,[ebp-0x44]
  60b723:	51                   	push   ecx
  60b724:	8b c8                	mov    ecx,eax
  60b726:	e8 bf b4 df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  60b72b:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  60b72f:	8b 48 10             	mov    ecx,DWORD PTR [eax+0x10]
  60b732:	72 02                	jb     0x60b736
  60b734:	8b 00                	mov    eax,DWORD PTR [eax]
  60b736:	83 f9 06             	cmp    ecx,0x6
  60b739:	0f 85 1a 02 00 00    	jne    0x60b959
  60b73f:	51                   	push   ecx
  60b740:	68 24 63 6f 00       	push   0x6f6324 ; ["mobile"]
  60b745:	50                   	push   eax
  60b746:	e8 72 91 df ff       	call   0x4048bd ; ["call resolved=0x482fc0 "]
  60b74b:	83 c4 0c             	add    esp,0xc
  60b74e:	85 c0                	test   eax,eax
  60b750:	0f 85 03 02 00 00    	jne    0x60b959
  60b756:	8d 4d bc             	lea    ecx,[ebp-0x44]
  60b759:	e8 a5 82 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  60b75e:	6a 05                	push   0x5
  60b760:	68 f4 4d 6c 00       	push   0x6c4df4 ; ["phone"]
  60b765:	e9 35 02 00 00       	jmp    0x60b99f
  60b76a:	be 04 00 00 00       	mov    esi,0x4
  60b76f:	89 7d 9c             	mov    DWORD PTR [ebp-0x64],edi
  60b772:	3b c6                	cmp    eax,esi
  60b774:	0f 42 f0             	cmovb  esi,eax
  60b777:	83 7f 14 10          	cmp    DWORD PTR [edi+0x14],0x10
  60b77b:	89 75 94             	mov    DWORD PTR [ebp-0x6c],esi
  60b77e:	8b c7                	mov    eax,edi
  60b780:	72 05                	jb     0x60b787
  60b782:	8b 07                	mov    eax,DWORD PTR [edi]
  60b784:	89 45 9c             	mov    DWORD PTR [ebp-0x64],eax
  60b787:	83 fe 0f             	cmp    esi,0xf
  60b78a:	77 1e                	ja     0x60b7aa
  60b78c:	56                   	push   esi
  60b78d:	50                   	push   eax
  60b78e:	8d 45 d4             	lea    eax,[ebp-0x2c]
  60b791:	89 75 e4             	mov    DWORD PTR [ebp-0x1c],esi
  60b794:	50                   	push   eax
  60b795:	e8 f6 cf 05 00       	call   0x668790 ; ["call resolved=0x668790 "]
  60b79a:	c6 44 35 d4 00       	mov    BYTE PTR [ebp+esi*1-0x2c],0x0
  60b79f:	8b 75 e8             	mov    esi,DWORD PTR [ebp-0x18]
  60b7a2:	8b 45 e4             	mov    eax,DWORD PTR [ebp-0x1c]
  60b7a5:	8b 4d d4             	mov    ecx,DWORD PTR [ebp-0x2c]
  60b7a8:	eb 58                	jmp    0x60b802
  60b7aa:	81 fe ff ff ff 7f    	cmp    esi,0x7fffffff
  60b7b0:	0f 87 7b 03 00 00    	ja     0x60bb31
  60b7b6:	83 ce 0f             	or     esi,0xf
  60b7b9:	81 fe ff ff ff 7f    	cmp    esi,0x7fffffff
  60b7bf:	76 07                	jbe    0x60b7c8
  60b7c1:	be ff ff ff 7f       	mov    esi,0x7fffffff
  60b7c6:	eb 0b                	jmp    0x60b7d3
  60b7c8:	83 fe 16             	cmp    esi,0x16
  60b7cb:	b8 16 00 00 00       	mov    eax,0x16
  60b7d0:	0f 42 f0             	cmovb  esi,eax
  60b7d3:	8d 46 01             	lea    eax,[esi+0x1]
  60b7d6:	50                   	push   eax
  60b7d7:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  60b7da:	e8 cc 61 df ff       	call   0x4019ab ; ["call resolved=0x480060 "]
  60b7df:	8b 4d 94             	mov    ecx,DWORD PTR [ebp-0x6c]
  60b7e2:	51                   	push   ecx
  60b7e3:	ff 75 9c             	push   DWORD PTR [ebp-0x64]
  60b7e6:	89 45 98             	mov    DWORD PTR [ebp-0x68],eax
  60b7e9:	50                   	push   eax
  60b7ea:	89 4d e4             	mov    DWORD PTR [ebp-0x1c],ecx
  60b7ed:	89 75 e8             	mov    DWORD PTR [ebp-0x18],esi
  60b7f0:	e8 95 cf 05 00       	call   0x66878a ; ["call resolved=0x66878a "]
  60b7f5:	8b 4d 98             	mov    ecx,DWORD PTR [ebp-0x68]
  60b7f8:	8b 45 94             	mov    eax,DWORD PTR [ebp-0x6c]
  60b7fb:	89 4d d4             	mov    DWORD PTR [ebp-0x2c],ecx
  60b7fe:	c6 04 08 00          	mov    BYTE PTR [eax+ecx*1],0x0
  60b802:	83 c4 0c             	add    esp,0xc
  60b805:	8d 55 d4             	lea    edx,[ebp-0x2c]
  60b808:	83 fe 10             	cmp    esi,0x10
  60b80b:	0f 43 d1             	cmovae edx,ecx
  60b80e:	83 f8 04             	cmp    eax,0x4
  60b811:	75 1d                	jne    0x60b830
  60b813:	50                   	push   eax
  60b814:	68 c4 00 6d 00       	push   0x6d00c4 ; ["vivo"]
  60b819:	52                   	push   edx
  60b81a:	e8 9e 90 df ff       	call   0x4048bd ; ["call resolved=0x482fc0 "]
  60b81f:	8b 75 e8             	mov    esi,DWORD PTR [ebp-0x18]
  60b822:	83 c4 0c             	add    esp,0xc
  60b825:	8b 4d d4             	mov    ecx,DWORD PTR [ebp-0x2c]
  60b828:	c6 45 a3 01          	mov    BYTE PTR [ebp-0x5d],0x1
  60b82c:	85 c0                	test   eax,eax
  60b82e:	74 04                	je     0x60b834
  60b830:	c6 45 a3 00          	mov    BYTE PTR [ebp-0x5d],0x0
  60b834:	83 fe 10             	cmp    esi,0x10
  60b837:	72 29                	jb     0x60b862
  60b839:	46                   	inc    esi
  60b83a:	8b c1                	mov    eax,ecx
  60b83c:	81 fe 00 10 00 00    	cmp    esi,0x1000
  60b842:	72 14                	jb     0x60b858
  60b844:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  60b847:	83 c6 23             	add    esi,0x23
  60b84a:	2b c1                	sub    eax,ecx
  60b84c:	83 c0 fc             	add    eax,0xfffffffc
  60b84f:	83 f8 1f             	cmp    eax,0x1f
  60b852:	0f 87 fb 00 00 00    	ja     0x60b953
  60b858:	56                   	push   esi
  60b859:	51                   	push   ecx
  60b85a:	e8 3b 68 df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  60b85f:	83 c4 08             	add    esp,0x8
  60b862:	80 7d a3 00          	cmp    BYTE PTR [ebp-0x5d],0x0
  60b866:	0f 84 32 fe ff ff    	je     0x60b69e
  60b86c:	8b 47 10             	mov    eax,DWORD PTR [edi+0x10]
  60b86f:	89 45 94             	mov    DWORD PTR [ebp-0x6c],eax
  60b872:	c7 45 d4 00 00 00 00 	mov    DWORD PTR [ebp-0x2c],0x0
  60b879:	c7 45 e8 0f 00 00 00 	mov    DWORD PTR [ebp-0x18],0xf
  60b880:	83 f8 04             	cmp    eax,0x4
  60b883:	0f 82 a3 02 00 00    	jb     0x60bb2c
  60b889:	83 7f 14 10          	cmp    DWORD PTR [edi+0x14],0x10
  60b88d:	8d 70 fc             	lea    esi,[eax-0x4]
  60b890:	8b c7                	mov    eax,edi
  60b892:	72 02                	jb     0x60b896
  60b894:	8b 07                	mov    eax,DWORD PTR [edi]
  60b896:	83 c0 04             	add    eax,0x4
  60b899:	89 45 98             	mov    DWORD PTR [ebp-0x68],eax
  60b89c:	83 fe 0f             	cmp    esi,0xf
  60b89f:	77 15                	ja     0x60b8b6
  60b8a1:	56                   	push   esi
  60b8a2:	50                   	push   eax
  60b8a3:	8d 45 d4             	lea    eax,[ebp-0x2c]
  60b8a6:	89 75 e4             	mov    DWORD PTR [ebp-0x1c],esi
  60b8a9:	50                   	push   eax
  60b8aa:	e8 e1 ce 05 00       	call   0x668790 ; ["call resolved=0x668790 "]
  60b8af:	c6 44 35 d4 00       	mov    BYTE PTR [ebp+esi*1-0x2c],0x0
  60b8b4:	eb 5d                	jmp    0x60b913
  60b8b6:	81 fe ff ff ff 7f    	cmp    esi,0x7fffffff
  60b8bc:	0f 87 6f 02 00 00    	ja     0x60bb31
  60b8c2:	8b c6                	mov    eax,esi
  60b8c4:	83 c8 0f             	or     eax,0xf
  60b8c7:	3d ff ff ff 7f       	cmp    eax,0x7fffffff
  60b8cc:	76 07                	jbe    0x60b8d5
  60b8ce:	b8 ff ff ff 7f       	mov    eax,0x7fffffff
  60b8d3:	eb 0b                	jmp    0x60b8e0
  60b8d5:	83 f8 16             	cmp    eax,0x16
  60b8d8:	b9 16 00 00 00       	mov    ecx,0x16
  60b8dd:	0f 42 c1             	cmovb  eax,ecx
  60b8e0:	89 45 9c             	mov    DWORD PTR [ebp-0x64],eax
  60b8e3:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  60b8e6:	40                   	inc    eax
  60b8e7:	50                   	push   eax
  60b8e8:	e8 be 60 df ff       	call   0x4019ab ; ["call resolved=0x480060 "]
  60b8ed:	8b 4d 9c             	mov    ecx,DWORD PTR [ebp-0x64]
  60b8f0:	8b f0                	mov    esi,eax
  60b8f2:	8b 45 94             	mov    eax,DWORD PTR [ebp-0x6c]
  60b8f5:	83 c0 fc             	add    eax,0xfffffffc
  60b8f8:	89 4d e8             	mov    DWORD PTR [ebp-0x18],ecx
  60b8fb:	50                   	push   eax
  60b8fc:	ff 75 98             	push   DWORD PTR [ebp-0x68]
  60b8ff:	89 45 e4             	mov    DWORD PTR [ebp-0x1c],eax
  60b902:	56                   	push   esi
  60b903:	e8 82 ce 05 00       	call   0x66878a ; ["call resolved=0x66878a "]
  60b908:	8b 45 94             	mov    eax,DWORD PTR [ebp-0x6c]
  60b90b:	89 75 d4             	mov    DWORD PTR [ebp-0x2c],esi
  60b90e:	c6 44 06 fc 00       	mov    BYTE PTR [esi+eax*1-0x4],0x0
  60b913:	83 c4 0c             	add    esp,0xc
  60b916:	8d 45 d4             	lea    eax,[ebp-0x2c]
  60b919:	8b cf                	mov    ecx,edi
  60b91b:	50                   	push   eax
  60b91c:	e8 f7 bb df ff       	call   0x407518 ; ["call resolved=0x472b20 "]
  60b921:	8b 55 e8             	mov    edx,DWORD PTR [ebp-0x18]
  60b924:	83 fa 10             	cmp    edx,0x10
  60b927:	0f 82 71 fd ff ff    	jb     0x60b69e
  60b92d:	8b 4d d4             	mov    ecx,DWORD PTR [ebp-0x2c]
  60b930:	42                   	inc    edx
  60b931:	8b c1                	mov    eax,ecx
  60b933:	81 fa 00 10 00 00    	cmp    edx,0x1000
  60b939:	0f 82 55 fd ff ff    	jb     0x60b694
  60b93f:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  60b942:	83 c2 23             	add    edx,0x23
  60b945:	2b c1                	sub    eax,ecx
  60b947:	83 c0 fc             	add    eax,0xfffffffc
  60b94a:	83 f8 1f             	cmp    eax,0x1f
  60b94d:	0f 86 41 fd ff ff    	jbe    0x60b694
  60b953:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  60b959:	8d 4d bc             	lea    ecx,[ebp-0x44]
  60b95c:	e8 a2 80 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  60b961:	68 b0 4d 6c 00       	push   0x6c4db0 ; ["deviceType"]
  60b966:	8d 4d 80             	lea    ecx,[ebp-0x80]
  60b969:	e8 70 7d df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  60b96e:	8d 4d bc             	lea    ecx,[ebp-0x44]
  60b971:	51                   	push   ecx
  60b972:	8b c8                	mov    ecx,eax
  60b974:	e8 71 b2 df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  60b979:	50                   	push   eax
  60b97a:	68 14 7d 6c 00       	push   0x6c7d14 ; ["pad"]
  60b97f:	e8 d1 ce df ff       	call   0x408855 ; ["call resolved=0x43e180 "]
  60b984:	83 c4 08             	add    esp,0x8
  60b987:	88 45 a3             	mov    BYTE PTR [ebp-0x5d],al
  60b98a:	8d 4d bc             	lea    ecx,[ebp-0x44]
  60b98d:	e8 71 80 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  60b992:	80 7d a3 00          	cmp    BYTE PTR [ebp-0x5d],0x0
  60b996:	74 12                	je     0x60b9aa
  60b998:	6a 03                	push   0x3
  60b99a:	68 14 7d 6c 00       	push   0x6c7d14 ; ["pad"]
  60b99f:	8d 8f 90 00 00 00    	lea    ecx,[edi+0x90]
  60b9a5:	e8 6d 8a df ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  60b9aa:	68 60 4d 6c 00       	push   0x6c4d60 ; ["account"]
  60b9af:	8d 4d 80             	lea    ecx,[ebp-0x80]
  60b9b2:	e8 27 7d df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  60b9b7:	8d 4d bc             	lea    ecx,[ebp-0x44]
  60b9ba:	51                   	push   ecx
  60b9bb:	8b c8                	mov    ecx,eax
  60b9bd:	e8 28 b2 df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  60b9c2:	50                   	push   eax
  60b9c3:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  60b9c6:	e8 4d bb df ff       	call   0x407518 ; ["call resolved=0x472b20 "]
  60b9cb:	8d 4d bc             	lea    ecx,[ebp-0x44]
  60b9ce:	e8 30 80 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  60b9d3:	8b 45 e4             	mov    eax,DWORD PTR [ebp-0x1c]
  60b9d6:	85 c0                	test   eax,eax
  60b9d8:	74 78                	je     0x60ba52
  60b9da:	8d 77 30             	lea    esi,[edi+0x30]
  60b9dd:	83 f8 06             	cmp    eax,0x6
  60b9e0:	76 65                	jbe    0x60ba47
  60b9e2:	6a 03                	push   0x3
  60b9e4:	6a 00                	push   0x0
  60b9e6:	8d 45 bc             	lea    eax,[ebp-0x44]
  60b9e9:	50                   	push   eax
  60b9ea:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  60b9ed:	e8 0b c2 df ff       	call   0x407bfd ; ["call resolved=0x4cbba0 "]
  60b9f2:	50                   	push   eax
  60b9f3:	8b ce                	mov    ecx,esi
  60b9f5:	e8 1e bb df ff       	call   0x407518 ; ["call resolved=0x472b20 "]
  60b9fa:	8d 4d bc             	lea    ecx,[ebp-0x44]
  60b9fd:	e8 01 80 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  60ba02:	8b 45 e4             	mov    eax,DWORD PTR [ebp-0x1c]
  60ba05:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  60ba08:	6a 03                	push   0x3
  60ba0a:	83 c0 fd             	add    eax,0xfffffffd
  60ba0d:	50                   	push   eax
  60ba0e:	8d 45 a4             	lea    eax,[ebp-0x5c]
  60ba11:	50                   	push   eax
  60ba12:	e8 e6 c1 df ff       	call   0x407bfd ; ["call resolved=0x4cbba0 "]
  60ba17:	50                   	push   eax
  60ba18:	8d 45 bc             	lea    eax,[ebp-0x44]
  60ba1b:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  60ba1f:	56                   	push   esi
  60ba20:	50                   	push   eax
  60ba21:	e8 5c 88 df ff       	call   0x404282 ; ["call resolved=0x592a10 "]
  60ba26:	83 c4 0c             	add    esp,0xc
  60ba29:	8b ce                	mov    ecx,esi
  60ba2b:	50                   	push   eax
  60ba2c:	e8 e7 ba df ff       	call   0x407518 ; ["call resolved=0x472b20 "]
  60ba31:	8d 4d bc             	lea    ecx,[ebp-0x44]
  60ba34:	e8 ca 7f df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  60ba39:	8d 4d a4             	lea    ecx,[ebp-0x5c]
  60ba3c:	e8 c2 7f df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  60ba41:	c6 47 6e 00          	mov    BYTE PTR [edi+0x6e],0x0
  60ba45:	eb 0b                	jmp    0x60ba52
  60ba47:	8d 45 d4             	lea    eax,[ebp-0x2c]
  60ba4a:	8b ce                	mov    ecx,esi
  60ba4c:	50                   	push   eax
  60ba4d:	e8 41 72 df ff       	call   0x402c93 ; ["call resolved=0x4ceaf0 "]
  60ba52:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  60ba55:	e8 a9 7f df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  60ba5a:	8d 4d 80             	lea    ecx,[ebp-0x80]
  60ba5d:	e8 7c e5 df ff       	call   0x409fde ; ["call resolved=0x480970 "]
  60ba62:	ff 75 80             	push   DWORD PTR [ebp-0x80]
  60ba65:	8d 4d 88             	lea    ecx,[ebp-0x78]
  60ba68:	e8 e1 de df ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  60ba6d:	b0 01                	mov    al,0x1
  60ba6f:	e9 9a 00 00 00       	jmp    0x60bb0e
  60ba74:	6a 5c                	push   0x5c
  60ba76:	68 94 5e 6f 00       	push   0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  60ba7b:	e8 e6 cc 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  60ba80:	83 c4 08             	add    esp,0x8
  60ba83:	85 c0                	test   eax,eax
  60ba85:	74 12                	je     0x60ba99
  60ba87:	6a 5c                	push   0x5c
  60ba89:	68 94 5e 6f 00       	push   0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  60ba8e:	e8 d3 cc 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  60ba93:	83 c4 08             	add    esp,0x8
  60ba96:	40                   	inc    eax
  60ba97:	eb 05                	jmp    0x60ba9e
  60ba99:	b8 94 5e 6f 00       	mov    eax,0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  60ba9e:	68 e0 62 6f 00       	push   0x6f62e0 ; ["SSDPSocket::parserResponseData"]
  60baa3:	68 40 01 00 00       	push   0x140
  60baa8:	50                   	push   eax
  60baa9:	68 98 62 6f 00       	push   0x6f6298 ; ["[ConntctionModule][%s:%d][%s]: ssdp data json parse_error\n"]
  60baae:	8d 45 98             	lea    eax,[ebp-0x68]
  60bab1:	c7 45 98 02 00 00 00 	mov    DWORD PTR [ebp-0x68],0x2
  60bab8:	50                   	push   eax
  60bab9:	8d 45 bc             	lea    eax,[ebp-0x44]
  60babc:	50                   	push   eax
  60babd:	e8 47 b5 df ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  60bac2:	8b 4d d0             	mov    ecx,DWORD PTR [ebp-0x30]
  60bac5:	83 c4 18             	add    esp,0x18
  60bac8:	83 f9 10             	cmp    ecx,0x10
  60bacb:	0f 93 c0             	setae  al
  60bace:	84 c0                	test   al,al
  60bad0:	74 2c                	je     0x60bafe
  60bad2:	8b 45 bc             	mov    eax,DWORD PTR [ebp-0x44]
  60bad5:	41                   	inc    ecx
  60bad6:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  60badc:	72 16                	jb     0x60baf4
  60bade:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  60bae1:	83 c1 23             	add    ecx,0x23
  60bae4:	2b c2                	sub    eax,edx
  60bae6:	83 c0 fc             	add    eax,0xfffffffc
  60bae9:	83 f8 1f             	cmp    eax,0x1f
  60baec:	0f 87 92 f8 ff ff    	ja     0x60b384
  60baf2:	8b c2                	mov    eax,edx
  60baf4:	51                   	push   ecx
  60baf5:	50                   	push   eax
  60baf6:	e8 9f 65 df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  60bafb:	83 c4 08             	add    esp,0x8
  60bafe:	b8 04 bb 60 00       	mov    eax,0x60bb04
  60bb03:	c3                   	ret
  60bb04:	8d 4d 80             	lea    ecx,[ebp-0x80]
  60bb07:	e8 0b d9 df ff       	call   0x409417 ; ["call resolved=0x46f270 "]
  60bb0c:	32 c0                	xor    al,al
  60bb0e:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  60bb11:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  60bb18:	59                   	pop    ecx
  60bb19:	5f                   	pop    edi
  60bb1a:	5e                   	pop    esi
  60bb1b:	5b                   	pop    ebx
  60bb1c:	8b 4d ec             	mov    ecx,DWORD PTR [ebp-0x14]
  60bb1f:	33 cd                	xor    ecx,ebp
  60bb21:	e8 69 89 df ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  60bb26:	8b e5                	mov    esp,ebp
  60bb28:	5d                   	pop    ebp
  60bb29:	c2 08 00             	ret    0x8
  60bb2c:	e8 27 de df ff       	call   0x409958 ; ["call resolved=0x47fd30 "]
  60bb31:	e8 af 97 df ff       	call   0x4052e5 ; ["call resolved=0x47fbd0 "]
