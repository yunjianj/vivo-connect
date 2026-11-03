; BtFarawayDevice::notifyPcsuiteP2PConflict; image base 0x400000; static annotation only
  5561d0:	55                   	push   ebp
  5561d1:	8b ec                	mov    ebp,esp
  5561d3:	6a ff                	push   0xffffffff
  5561d5:	68 fd 79 68 00       	push   0x6879fd
  5561da:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  5561e0:	50                   	push   eax
  5561e1:	83 ec 44             	sub    esp,0x44
  5561e4:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5561e9:	33 c5                	xor    eax,ebp
  5561eb:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  5561ee:	56                   	push   esi
  5561ef:	50                   	push   eax
  5561f0:	8d 45 f4             	lea    eax,[ebp-0xc]
  5561f3:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  5561f9:	8b f1                	mov    esi,ecx
  5561fb:	b9 74 8b 7a 00       	mov    ecx,0x7a8b74
  556200:	e8 e9 28 eb ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  556205:	6a 00                	push   0x0
  556207:	8d 4d c0             	lea    ecx,[ebp-0x40]
  55620a:	e8 b3 e6 ea ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  55620f:	83 ec 10             	sub    esp,0x10
  556212:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  556219:	8d 46 1c             	lea    eax,[esi+0x1c]
  55621c:	89 65 d0             	mov    DWORD PTR [ebp-0x30],esp
  55621f:	8b cc                	mov    ecx,esp
  556221:	50                   	push   eax
  556222:	e8 e9 e8 ea ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  556227:	68 54 4d 6c 00       	push   0x6c4d54 ; ["deviceId"]
  55622c:	8d 4d c0             	lea    ecx,[ebp-0x40]
  55622f:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  556233:	e8 a6 d4 ea ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  556238:	8b c8                	mov    ecx,eax
  55623a:	c6 45 fc 00          	mov    BYTE PTR [ebp-0x4],0x0
  55623e:	e8 42 e2 ea ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  556243:	6a 00                	push   0x0
  556245:	8d 4d b0             	lea    ecx,[ebp-0x50]
  556248:	e8 75 e6 ea ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  55624d:	8d 45 d7             	lea    eax,[ebp-0x29]
  556250:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  556254:	50                   	push   eax
  556255:	8d 45 b0             	lea    eax,[ebp-0x50]
  556258:	c6 45 d7 00          	mov    BYTE PTR [ebp-0x29],0x0
  55625c:	50                   	push   eax
  55625d:	8d 45 c0             	lea    eax,[ebp-0x40]
  556260:	50                   	push   eax
  556261:	68 30 46 79 00       	push   0x794630
  556266:	e8 44 1c eb ff       	call   0x407eaf ; ["call resolved=0x4b6f60 vivo::NetworkInteraction::sendHttpRequest"]
  55626b:	83 c4 10             	add    esp,0x10
  55626e:	6a 5c                	push   0x5c
  556270:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  556275:	84 c0                	test   al,al
  556277:	0f 84 be 00 00 00    	je     0x55633b
  55627d:	e8 e4 24 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  556282:	83 c4 08             	add    esp,0x8
  556285:	85 c0                	test   eax,eax
  556287:	74 12                	je     0x55629b
  556289:	6a 5c                	push   0x5c
  55628b:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  556290:	e8 d1 24 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  556295:	83 c4 08             	add    esp,0x8
  556298:	40                   	inc    eax
  556299:	eb 05                	jmp    0x5562a0
  55629b:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5562a0:	68 3c 8e 6d 00       	push   0x6d8e3c ; ["BtFarawayDevice::notifyPcsuiteP2PConflict"]
  5562a5:	68 25 02 00 00       	push   0x225
  5562aa:	50                   	push   eax
  5562ab:	68 70 8e 6d 00       	push   0x6d8e70 ; ["[ConntctionModule][%s:%d][%s]:notify pcsuite P2P conflict success\n"]
  5562b0:	8d 45 d0             	lea    eax,[ebp-0x30]
  5562b3:	c7 45 d0 02 00 00 00 	mov    DWORD PTR [ebp-0x30],0x2
  5562ba:	50                   	push   eax
  5562bb:	8d 45 d8             	lea    eax,[ebp-0x28]
  5562be:	50                   	push   eax
  5562bf:	e8 45 0d eb ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5562c4:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  5562c7:	83 c4 18             	add    esp,0x18
  5562ca:	83 fa 10             	cmp    edx,0x10
  5562cd:	72 2c                	jb     0x5562fb
  5562cf:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  5562d2:	42                   	inc    edx
  5562d3:	8b c1                	mov    eax,ecx
  5562d5:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5562db:	72 14                	jb     0x5562f1
  5562dd:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5562e0:	83 c2 23             	add    edx,0x23
  5562e3:	2b c1                	sub    eax,ecx
  5562e5:	83 c0 fc             	add    eax,0xfffffffc
  5562e8:	83 f8 1f             	cmp    eax,0x1f
  5562eb:	0f 87 c6 00 00 00    	ja     0x5563b7
  5562f1:	52                   	push   edx
  5562f2:	51                   	push   ecx
  5562f3:	e8 a2 bd ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5562f8:	83 c4 08             	add    esp,0x8
  5562fb:	8d 4d b0             	lea    ecx,[ebp-0x50]
  5562fe:	e8 db 3c eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  556303:	ff 75 b0             	push   DWORD PTR [ebp-0x50]
  556306:	8d 4d b8             	lea    ecx,[ebp-0x48]
  556309:	e8 40 36 eb ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  55630e:	8d 4d c0             	lea    ecx,[ebp-0x40]
  556311:	e8 c8 3c eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  556316:	ff 75 c0             	push   DWORD PTR [ebp-0x40]
  556319:	8d 4d c8             	lea    ecx,[ebp-0x38]
  55631c:	e8 2d 36 eb ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  556321:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  556324:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  55632b:	59                   	pop    ecx
  55632c:	5e                   	pop    esi
  55632d:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  556330:	33 cd                	xor    ecx,ebp
  556332:	e8 58 e1 ea ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  556337:	8b e5                	mov    esp,ebp
  556339:	5d                   	pop    ebp
  55633a:	c3                   	ret
  55633b:	e8 26 24 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  556340:	83 c4 08             	add    esp,0x8
  556343:	85 c0                	test   eax,eax
  556345:	74 12                	je     0x556359
  556347:	6a 5c                	push   0x5c
  556349:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  55634e:	e8 13 24 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  556353:	83 c4 08             	add    esp,0x8
  556356:	40                   	inc    eax
  556357:	eb 05                	jmp    0x55635e
  556359:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  55635e:	68 3c 8e 6d 00       	push   0x6d8e3c ; ["BtFarawayDevice::notifyPcsuiteP2PConflict"]
  556363:	68 28 02 00 00       	push   0x228
  556368:	50                   	push   eax
  556369:	68 c0 8e 6d 00       	push   0x6d8ec0 ; ["[ConntctionModule][%s:%d][%s]:notify pcsuite P2P conflict failed\n"]
  55636e:	8d 45 d0             	lea    eax,[ebp-0x30]
  556371:	c7 45 d0 02 00 00 00 	mov    DWORD PTR [ebp-0x30],0x2
  556378:	50                   	push   eax
  556379:	8d 45 d8             	lea    eax,[ebp-0x28]
  55637c:	50                   	push   eax
  55637d:	e8 87 0c eb ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  556382:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  556385:	83 c4 18             	add    esp,0x18
  556388:	83 fa 10             	cmp    edx,0x10
  55638b:	0f 82 6a ff ff ff    	jb     0x5562fb
  556391:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  556394:	42                   	inc    edx
  556395:	8b c1                	mov    eax,ecx
  556397:	81 fa 00 10 00 00    	cmp    edx,0x1000
  55639d:	0f 82 4e ff ff ff    	jb     0x5562f1
  5563a3:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5563a6:	83 c2 23             	add    edx,0x23
  5563a9:	2b c1                	sub    eax,ecx
  5563ab:	83 c0 fc             	add    eax,0xfffffffc
  5563ae:	83 f8 1f             	cmp    eax,0x1f
  5563b1:	0f 86 3a ff ff ff    	jbe    0x5562f1
  5563b7:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
