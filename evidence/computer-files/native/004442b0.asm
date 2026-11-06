; vdfs_server_connector::errReply; image base 0x400000; static annotation only
  4442b0:	55                   	push   ebp
  4442b1:	8b ec                	mov    ebp,esp
  4442b3:	6a ff                	push   0xffffffff
  4442b5:	68 29 83 47 00       	push   0x478329
  4442ba:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  4442c0:	50                   	push   eax
  4442c1:	83 ec 4c             	sub    esp,0x4c
  4442c4:	56                   	push   esi
  4442c5:	57                   	push   edi
  4442c6:	a1 14 de 49 00       	mov    eax,ds:0x49de14
  4442cb:	33 c5                	xor    eax,ebp
  4442cd:	50                   	push   eax
  4442ce:	8d 45 f4             	lea    eax,[ebp-0xc]
  4442d1:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  4442d7:	8b f9                	mov    edi,ecx
  4442d9:	ff 75 0c             	push   DWORD PTR [ebp+0xc]
  4442dc:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  4442e2:	6a 0d                	push   0xd
  4442e4:	68 9c 13 48 00       	push   0x48139c ; ["errorCode:{}."]
  4442e9:	6a 03                	push   0x3
  4442eb:	83 ec 0c             	sub    esp,0xc
  4442ee:	c7 45 d8 50 62 48 00 	mov    DWORD PTR [ebp-0x28],0x486250 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Parse\\vdfs_server_connector.cpp"]
  4442f5:	8b c4                	mov    eax,esp
  4442f7:	c7 45 dc 8c 02 00 00 	mov    DWORD PTR [ebp-0x24],0x28c
  4442fe:	f3 0f 7e 45 d8       	movq   xmm0,QWORD PTR [ebp-0x28]
  444303:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  444307:	c7 40 08 60 64 48 00 	mov    DWORD PTR [eax+0x8],0x486460 ; ["vdfs_server_connector::errReply"]
  44430e:	e8 fd 4b fc ff       	call   0x408f10 ; ["call resolved=0x408f10 "]
  444313:	8b 75 08             	mov    esi,DWORD PTR [ebp+0x8]
  444316:	8b ce                	mov    ecx,esi
  444318:	ff 15 90 f4 47 00    	call   DWORD PTR ds:0x47f490 ; ?clear@QByteArray@@QAEXXZ
  44431e:	51                   	push   ecx
  44431f:	8b c4                	mov    eax,esp
  444321:	8d 4d c0             	lea    ecx,[ebp-0x40]
  444324:	56                   	push   esi
  444325:	8b 35 34 f4 47 00    	mov    esi,DWORD PTR ds:0x47f434
  44432b:	c7 00 02 00 00 00    	mov    DWORD PTR [eax],0x2
  444331:	ff d6                	call   esi
  444333:	8b 47 48             	mov    eax,DWORD PTR [edi+0x48]
  444336:	8d 4d ec             	lea    ecx,[ebp-0x14]
  444339:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  444340:	8a 40 08             	mov    al,BYTE PTR [eax+0x8]
  444343:	88 45 e8             	mov    BYTE PTR [ebp-0x18],al
  444346:	ff 15 9c f4 47 00    	call   DWORD PTR ds:0x47f49c ; ??0QByteArray@@QAE@XZ
  44434c:	51                   	push   ecx
  44434d:	8b c4                	mov    eax,esp
  44434f:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  444353:	8d 4d a8             	lea    ecx,[ebp-0x58]
  444356:	c7 00 02 00 00 00    	mov    DWORD PTR [eax],0x2
  44435c:	8d 45 ec             	lea    eax,[ebp-0x14]
  44435f:	50                   	push   eax
  444360:	ff d6                	call   esi
  444362:	8b 4d ac             	mov    ecx,DWORD PTR [ebp-0x54]
  444365:	6a 00                	push   0x0
  444367:	6a 00                	push   0x0
  444369:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  44436d:	8b 01                	mov    eax,DWORD PTR [ecx]
  44436f:	ff 50 40             	call   DWORD PTR [eax+0x40]
  444372:	ff 75 e8             	push   DWORD PTR [ebp-0x18]
  444375:	8d 4d a8             	lea    ecx,[ebp-0x58]
  444378:	ff 15 24 f4 47 00    	call   DWORD PTR ds:0x47f424 ; ??6QDataStream@@QAEAAV0@C@Z
  44437e:	8d 4d f0             	lea    ecx,[ebp-0x10]
  444381:	ff 15 9c f4 47 00    	call   DWORD PTR ds:0x47f49c ; ??0QByteArray@@QAE@XZ
  444387:	8d 45 f0             	lea    eax,[ebp-0x10]
  44438a:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  44438e:	50                   	push   eax
  44438f:	8d 45 ec             	lea    eax,[ebp-0x14]
  444392:	50                   	push   eax
  444393:	8d 47 20             	lea    eax,[edi+0x20]
  444396:	50                   	push   eax
  444397:	8d 47 08             	lea    eax,[edi+0x8]
  44439a:	50                   	push   eax
  44439b:	e8 e0 80 ff ff       	call   0x43c480 ; ["call resolved=0x43c480 vdfs_cryptopp::encrypt"]
  4443a0:	83 c4 10             	add    esp,0x10
  4443a3:	84 c0                	test   al,al
  4443a5:	74 09                	je     0x4443b0
  4443a7:	8b 45 f0             	mov    eax,DWORD PTR [ebp-0x10]
  4443aa:	83 78 04 00          	cmp    DWORD PTR [eax+0x4],0x0
  4443ae:	7f 45                	jg     0x4443f5
  4443b0:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  4443b6:	83 ec 08             	sub    esp,0x8
  4443b9:	8b c4                	mov    eax,esp
  4443bb:	c7 45 d8 50 62 48 00 	mov    DWORD PTR [ebp-0x28],0x486250 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Parse\\vdfs_server_connector.cpp"]
  4443c2:	c7 45 dc 9a 02 00 00 	mov    DWORD PTR [ebp-0x24],0x29a
  4443c9:	f3 0f 7e 45 d8       	movq   xmm0,QWORD PTR [ebp-0x28]
  4443ce:	6a 04                	push   0x4
  4443d0:	83 ec 0c             	sub    esp,0xc
  4443d3:	c7 00 5c 12 48 00    	mov    DWORD PTR [eax],0x48125c ; ["Encryption failed"]
  4443d9:	c7 40 04 11 00 00 00 	mov    DWORD PTR [eax+0x4],0x11
  4443e0:	8b c4                	mov    eax,esp
  4443e2:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  4443e6:	c7 40 08 60 64 48 00 	mov    DWORD PTR [eax+0x8],0x486460 ; ["vdfs_server_connector::errReply"]
  4443ed:	e8 1e 74 fd ff       	call   0x41b810 ; ["call resolved=0x41b810 "]
  4443f2:	8b 45 f0             	mov    eax,DWORD PTR [ebp-0x10]
  4443f5:	8b 70 04             	mov    esi,DWORD PTR [eax+0x4]
  4443f8:	8d 4d c0             	lea    ecx,[ebp-0x40]
  4443fb:	8b 3d 24 f4 47 00    	mov    edi,DWORD PTR ds:0x47f424
  444401:	6a 05                	push   0x5
  444403:	ff d7                	call   edi
  444405:	8d 46 01             	lea    eax,[esi+0x1]
  444408:	50                   	push   eax
  444409:	8d 4d c0             	lea    ecx,[ebp-0x40]
  44440c:	ff 15 20 f4 47 00    	call   DWORD PTR ds:0x47f420 ; ??6QDataStream@@QAEAAV0@H@Z
  444412:	8b 4d 0c             	mov    ecx,DWORD PTR [ebp+0xc]
  444415:	0f b6 01             	movzx  eax,BYTE PTR [ecx]
  444418:	8d 4d c0             	lea    ecx,[ebp-0x40]
  44441b:	50                   	push   eax
  44441c:	ff d7                	call   edi
  44441e:	8b 4d 08             	mov    ecx,DWORD PTR [ebp+0x8]
  444421:	8d 45 f0             	lea    eax,[ebp-0x10]
  444424:	50                   	push   eax
  444425:	ff 15 88 f4 47 00    	call   DWORD PTR ds:0x47f488 ; ?append@QByteArray@@QAEAAV1@ABV1@@Z ; ["Ξ\t"]
  44442b:	8d 4d f0             	lea    ecx,[ebp-0x10]
  44442e:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  444434:	8b 35 2c f4 47 00    	mov    esi,DWORD PTR ds:0x47f42c
  44443a:	8d 4d a8             	lea    ecx,[ebp-0x58]
  44443d:	ff d6                	call   esi
  44443f:	8d 4d ec             	lea    ecx,[ebp-0x14]
  444442:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  444448:	8d 4d c0             	lea    ecx,[ebp-0x40]
  44444b:	ff d6                	call   esi
  44444d:	b0 01                	mov    al,0x1
  44444f:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  444452:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  444459:	59                   	pop    ecx
  44445a:	5f                   	pop    edi
  44445b:	5e                   	pop    esi
  44445c:	8b e5                	mov    esp,ebp
  44445e:	5d                   	pop    ebp
  44445f:	c2 08 00             	ret    0x8
