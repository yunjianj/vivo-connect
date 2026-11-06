; vdfs_server_connector::ParseAttrRequest; image base 0x400000; static annotation only
  443030:	55                   	push   ebp
  443031:	8b ec                	mov    ebp,esp
  443033:	6a ff                	push   0xffffffff
  443035:	68 b9 80 47 00       	push   0x4780b9
  44303a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  443040:	50                   	push   eax
  443041:	81 ec f8 02 00 00    	sub    esp,0x2f8
  443047:	a1 14 de 49 00       	mov    eax,ds:0x49de14
  44304c:	33 c5                	xor    eax,ebp
  44304e:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  443051:	56                   	push   esi
  443052:	57                   	push   edi
  443053:	50                   	push   eax
  443054:	8d 45 f4             	lea    eax,[ebp-0xc]
  443057:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  44305d:	89 8d 38 fd ff ff    	mov    DWORD PTR [ebp-0x2c8],ecx
  443063:	8b 4d 0c             	mov    ecx,DWORD PTR [ebp+0xc]
  443066:	0f 57 c0             	xorps  xmm0,xmm0
  443069:	8b 45 08             	mov    eax,DWORD PTR [ebp+0x8]
  44306c:	89 8d 34 fd ff ff    	mov    DWORD PTR [ebp-0x2cc],ecx
  443072:	8d 8d 48 fd ff ff    	lea    ecx,[ebp-0x2b8]
  443078:	50                   	push   eax
  443079:	c7 85 2c fd ff ff 00 	mov    DWORD PTR [ebp-0x2d4],0x0
  443083:	c6 85 63 fd ff ff 00 	mov    BYTE PTR [ebp-0x29d],0x0
  44308a:	0f 11 45 dc          	movups XMMWORD PTR [ebp-0x24],xmm0
  44308e:	c6 45 ec 00          	mov    BYTE PTR [ebp-0x14],0x0
  443092:	ff 15 4c f3 47 00    	call   DWORD PTR ds:0x47f34c ; ??0QByteArray@@QAE@ABV0@@Z
  443098:	51                   	push   ecx
  443099:	8b c4                	mov    eax,esp
  44309b:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  4430a2:	8d 8d fc fc ff ff    	lea    ecx,[ebp-0x304]
  4430a8:	c7 00 01 00 00 00    	mov    DWORD PTR [eax],0x1
  4430ae:	8d 85 48 fd ff ff    	lea    eax,[ebp-0x2b8]
  4430b4:	50                   	push   eax
  4430b5:	ff 15 34 f4 47 00    	call   DWORD PTR ds:0x47f434 ; ??0QDataStream@@QAE@PAVQByteArray@@V?$QFlags@W4OpenModeFlag@QIODevice@@@@@Z
  4430bb:	8b 8d 00 fd ff ff    	mov    ecx,DWORD PTR [ebp-0x300]
  4430c1:	6a 00                	push   0x0
  4430c3:	6a 00                	push   0x0
  4430c5:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  4430c9:	8b 01                	mov    eax,DWORD PTR [ecx]
  4430cb:	ff 50 40             	call   DWORD PTR [eax+0x40]
  4430ce:	8b 45 10             	mov    eax,DWORD PTR [ebp+0x10]
  4430d1:	8b 4d 14             	mov    ecx,DWORD PTR [ebp+0x14]
  4430d4:	89 85 14 fd ff ff    	mov    DWORD PTR [ebp-0x2ec],eax
  4430da:	8d 85 1c fd ff ff    	lea    eax,[ebp-0x2e4]
  4430e0:	89 8d 18 fd ff ff    	mov    DWORD PTR [ebp-0x2e8],ecx
  4430e6:	8d 8d fc fc ff ff    	lea    ecx,[ebp-0x304]
  4430ec:	50                   	push   eax
  4430ed:	ff 15 68 f3 47 00    	call   DWORD PTR ds:0x47f368 ; ??5QDataStream@@QAEAAV0@AAC@Z
  4430f3:	8b 35 6c f3 47 00    	mov    esi,DWORD PTR ds:0x47f36c
  4430f9:	8d 8d 20 fd ff ff    	lea    ecx,[ebp-0x2e0]
  4430ff:	51                   	push   ecx
  443100:	8b c8                	mov    ecx,eax
  443102:	ff d6                	call   esi
  443104:	8b 8d 00 fd ff ff    	mov    ecx,DWORD PTR [ebp-0x300]
  44310a:	8d 45 dc             	lea    eax,[ebp-0x24]
  44310d:	8b 3d 64 f3 47 00    	mov    edi,DWORD PTR ds:0x47f364
  443113:	6a 00                	push   0x0
  443115:	6a 10                	push   0x10
  443117:	50                   	push   eax
  443118:	ff d7                	call   edi
  44311a:	8d 85 24 fd ff ff    	lea    eax,[ebp-0x2dc]
  443120:	c6 45 ec 00          	mov    BYTE PTR [ebp-0x14],0x0
  443124:	50                   	push   eax
  443125:	8d 8d fc fc ff ff    	lea    ecx,[ebp-0x304]
  44312b:	ff 15 68 f3 47 00    	call   DWORD PTR ds:0x47f368 ; ??5QDataStream@@QAEAAV0@AAC@Z
  443131:	8d 8d 28 fd ff ff    	lea    ecx,[ebp-0x2d8]
  443137:	51                   	push   ecx
  443138:	8b c8                	mov    ecx,eax
  44313a:	ff d6                	call   esi
  44313c:	8b 8d 00 fd ff ff    	mov    ecx,DWORD PTR [ebp-0x300]
  443142:	8d 85 dc fe ff ff    	lea    eax,[ebp-0x124]
  443148:	6a 00                	push   0x0
  44314a:	ff b5 28 fd ff ff    	push   DWORD PTR [ebp-0x2d8]
  443150:	50                   	push   eax
  443151:	ff d7                	call   edi
  443153:	8b 85 28 fd ff ff    	mov    eax,DWORD PTR [ebp-0x2d8]
  443159:	3d 00 01 00 00       	cmp    eax,0x100
  44315e:	0f 83 85 04 00 00    	jae    0x4435e9
  443164:	8d 4d dc             	lea    ecx,[ebp-0x24]
  443167:	c6 84 05 dc fe ff ff 	mov    BYTE PTR [ebp+eax*1-0x124],0x0
  44316f:	8d 51 01             	lea    edx,[ecx+0x1]
  443172:	8a 01                	mov    al,BYTE PTR [ecx]
  443174:	41                   	inc    ecx
  443175:	84 c0                	test   al,al
  443177:	75 f9                	jne    0x443172
  443179:	0f b6 85 63 fd ff ff 	movzx  eax,BYTE PTR [ebp-0x29d]
  443180:	2b ca                	sub    ecx,edx
  443182:	8b b5 18 fd ff ff    	mov    esi,DWORD PTR [ebp-0x2e8]
  443188:	b9 06 00 00 00       	mov    ecx,0x6
  44318d:	0f 44 c1             	cmove  eax,ecx
  443190:	8b 8d 14 fd ff ff    	mov    ecx,DWORD PTR [ebp-0x2ec]
  443196:	88 85 63 fd ff ff    	mov    BYTE PTR [ebp-0x29d],al
  44319c:	83 c1 e8             	add    ecx,0xffffffe8
  44319f:	8b 85 48 fd ff ff    	mov    eax,DWORD PTR [ebp-0x2b8]
  4431a5:	83 d6 ff             	adc    esi,0xffffffff
  4431a8:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  4431ab:	99                   	cdq
  4431ac:	3b c1                	cmp    eax,ecx
  4431ae:	75 04                	jne    0x4431b4
  4431b0:	3b d6                	cmp    edx,esi
  4431b2:	74 07                	je     0x4431bb
  4431b4:	c6 85 63 fd ff ff 01 	mov    BYTE PTR [ebp-0x29d],0x1
  4431bb:	8d 8d 5c fd ff ff    	lea    ecx,[ebp-0x2a4]
  4431c1:	ff 15 84 f4 47 00    	call   DWORD PTR ds:0x47f484 ; ??0QString@@QAE@XZ
  4431c7:	8d 8d dc fe ff ff    	lea    ecx,[ebp-0x124]
  4431cd:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  4431d1:	8d 51 01             	lea    edx,[ecx+0x1]
  4431d4:	8a 01                	mov    al,BYTE PTR [ecx]
  4431d6:	41                   	inc    ecx
  4431d7:	84 c0                	test   al,al
  4431d9:	75 f9                	jne    0x4431d4
  4431db:	8b 3d b8 f4 47 00    	mov    edi,DWORD PTR ds:0x47f4b8
  4431e1:	8d 85 dc fe ff ff    	lea    eax,[ebp-0x124]
  4431e7:	2b ca                	sub    ecx,edx
  4431e9:	51                   	push   ecx
  4431ea:	50                   	push   eax
  4431eb:	ff d7                	call   edi
  4431ed:	89 85 4c fd ff ff    	mov    DWORD PTR [ebp-0x2b4],eax
  4431f3:	6a 01                	push   0x1
  4431f5:	68 d0 3b 48 00       	push   0x483bd0
  4431fa:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  4431fe:	ff d7                	call   edi
  443200:	89 85 40 fd ff ff    	mov    DWORD PTR [ebp-0x2c0],eax
  443206:	6a 01                	push   0x1
  443208:	68 10 62 48 00       	push   0x486210
  44320d:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  443211:	ff d7                	call   edi
  443213:	83 c4 18             	add    esp,0x18
  443216:	89 85 3c fd ff ff    	mov    DWORD PTR [ebp-0x2c4],eax
  44321c:	6a 01                	push   0x1
  44321e:	8d 85 40 fd ff ff    	lea    eax,[ebp-0x2c0]
  443224:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  443228:	50                   	push   eax
  443229:	8d 85 3c fd ff ff    	lea    eax,[ebp-0x2c4]
  44322f:	50                   	push   eax
  443230:	8d 8d 4c fd ff ff    	lea    ecx,[ebp-0x2b4]
  443236:	ff 15 5c f3 47 00    	call   DWORD PTR ds:0x47f35c ; ?replace@QString@@QAEAAV1@ABV1@0W4CaseSensitivity@Qt@@@Z
  44323c:	50                   	push   eax
  44323d:	8d 8d 50 fd ff ff    	lea    ecx,[ebp-0x2b0]
  443243:	ff 15 c0 f1 47 00    	call   DWORD PTR ds:0x47f1c0 ; ??0QString@@QAE@ABV0@@Z
  443249:	8d 8d 3c fd ff ff    	lea    ecx,[ebp-0x2c4]
  44324f:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  443255:	8d 8d 40 fd ff ff    	lea    ecx,[ebp-0x2c0]
  44325b:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  443261:	8d 8d 4c fd ff ff    	lea    ecx,[ebp-0x2b4]
  443267:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  44326b:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  443271:	6a 01                	push   0x1
  443273:	68 d0 3b 48 00       	push   0x483bd0
  443278:	ff d7                	call   edi
  44327a:	89 85 54 fd ff ff    	mov    DWORD PTR [ebp-0x2ac],eax
  443280:	83 c4 04             	add    esp,0x4
  443283:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  443287:	8b c4                	mov    eax,esp
  443289:	8d 8d 50 fd ff ff    	lea    ecx,[ebp-0x2b0]
  44328f:	6a 00                	push   0x0
  443291:	c7 00 00 00 00 00    	mov    DWORD PTR [eax],0x0
  443297:	8d 85 54 fd ff ff    	lea    eax,[ebp-0x2ac]
  44329d:	6a 00                	push   0x0
  44329f:	50                   	push   eax
  4432a0:	8d 85 44 fd ff ff    	lea    eax,[ebp-0x2bc]
  4432a6:	50                   	push   eax
  4432a7:	ff 15 dc f4 47 00    	call   DWORD PTR ds:0x47f4dc ; ?section@QString@@QBE?AV1@ABV1@HHV?$QFlags@W4SectionFlag@QString@@@@@Z
  4432ad:	8d 8d 54 fd ff ff    	lea    ecx,[ebp-0x2ac]
  4432b3:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  4432b9:	8d 8d 64 fd ff ff    	lea    ecx,[ebp-0x29c]
  4432bf:	e8 4c e8 fe ff       	call   0x431b10 ; ["call resolved=0x431b10 "]
  4432c4:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  4432c8:	e8 33 b0 ff ff       	call   0x43e300 ; ["call resolved=0x43e300 "]
  4432cd:	8b f0                	mov    esi,eax
  4432cf:	8d 8d 44 fd ff ff    	lea    ecx,[ebp-0x2bc]
  4432d5:	8d 85 c4 fe ff ff    	lea    eax,[ebp-0x13c]
  4432db:	50                   	push   eax
  4432dc:	ff 15 80 f4 47 00    	call   DWORD PTR ds:0x47f480 ; ?toStdString@QString@@QBE?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
  4432e2:	8d 8d 64 fd ff ff    	lea    ecx,[ebp-0x29c]
  4432e8:	c6 45 fc 0e          	mov    BYTE PTR [ebp-0x4],0xe
  4432ec:	51                   	push   ecx
  4432ed:	50                   	push   eax
  4432ee:	8b ce                	mov    ecx,esi
  4432f0:	e8 7b ba ff ff       	call   0x43ed70 ; ["call resolved=0x43ed70 "]
  4432f5:	8d 8d c4 fe ff ff    	lea    ecx,[ebp-0x13c]
  4432fb:	88 85 5b fd ff ff    	mov    BYTE PTR [ebp-0x2a5],al
  443301:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  443305:	e8 86 0c fc ff       	call   0x403f90 ; ["call resolved=0x403f90 "]
  44330a:	80 bd 5b fd ff ff 00 	cmp    BYTE PTR [ebp-0x2a5],0x0
  443311:	75 47                	jne    0x44335a
  443313:	83 bd c0 fd ff ff 10 	cmp    DWORD PTR [ebp-0x240],0x10
  44331a:	8d 85 ac fd ff ff    	lea    eax,[ebp-0x254]
  443320:	8d 8d 5c fd ff ff    	lea    ecx,[ebp-0x2a4]
  443326:	0f 43 85 ac fd ff ff 	cmovae eax,DWORD PTR [ebp-0x254]
  44332d:	50                   	push   eax
  44332e:	ff 15 48 f3 47 00    	call   DWORD PTR ds:0x47f348 ; ??YQString@@QAEAAV0@PBD@Z
  443334:	68 d0 3b 48 00       	push   0x483bd0
  443339:	8d 8d 5c fd ff ff    	lea    ecx,[ebp-0x2a4]
  44333f:	ff 15 48 f3 47 00    	call   DWORD PTR ds:0x47f348 ; ??YQString@@QAEAAV0@PBD@Z
  443345:	8d 85 50 fd ff ff    	lea    eax,[ebp-0x2b0]
  44334b:	50                   	push   eax
  44334c:	8d 8d 5c fd ff ff    	lea    ecx,[ebp-0x2a4]
  443352:	ff 15 90 f2 47 00    	call   DWORD PTR ds:0x47f290 ; ?append@QString@@QAEAAV1@ABV1@@Z
  443358:	eb 65                	jmp    0x4433bf
  44335a:	6a 01                	push   0x1
  44335c:	68 d0 3b 48 00       	push   0x483bd0
  443361:	ff d7                	call   edi
  443363:	89 85 54 fd ff ff    	mov    DWORD PTR [ebp-0x2ac],eax
  443369:	83 c4 04             	add    esp,0x4
  44336c:	c6 45 fc 0f          	mov    BYTE PTR [ebp-0x4],0xf
  443370:	8b c4                	mov    eax,esp
  443372:	8d 8d 50 fd ff ff    	lea    ecx,[ebp-0x2b0]
  443378:	6a ff                	push   0xffffffff
  44337a:	c7 00 00 00 00 00    	mov    DWORD PTR [eax],0x0
  443380:	8d 85 54 fd ff ff    	lea    eax,[ebp-0x2ac]
  443386:	6a 01                	push   0x1
  443388:	50                   	push   eax
  443389:	8d 85 4c fd ff ff    	lea    eax,[ebp-0x2b4]
  44338f:	50                   	push   eax
  443390:	ff 15 dc f4 47 00    	call   DWORD PTR ds:0x47f4dc ; ?section@QString@@QBE?AV1@ABV1@HHV?$QFlags@W4SectionFlag@QString@@@@@Z
  443396:	50                   	push   eax
  443397:	8d 8d 5c fd ff ff    	lea    ecx,[ebp-0x2a4]
  44339d:	ff 15 c8 f1 47 00    	call   DWORD PTR ds:0x47f1c8 ; ??4QString@@QAEAAV0@$$QAV0@@Z
  4433a3:	8d 8d 4c fd ff ff    	lea    ecx,[ebp-0x2b4]
  4433a9:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  4433af:	8d 8d 54 fd ff ff    	lea    ecx,[ebp-0x2ac]
  4433b5:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  4433b9:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  4433bf:	6a 58                	push   0x58
  4433c1:	8d 85 54 fe ff ff    	lea    eax,[ebp-0x1ac]
  4433c7:	6a 00                	push   0x0
  4433c9:	50                   	push   eax
  4433ca:	e8 d8 05 03 00       	call   0x4739a7 ; ["call resolved=0x4739a7 "]
  4433cf:	83 c4 0c             	add    esp,0xc
  4433d2:	80 bd 63 fd ff ff 00 	cmp    BYTE PTR [ebp-0x29d],0x0
  4433d9:	75 25                	jne    0x443400
  4433db:	8b b5 38 fd ff ff    	mov    esi,DWORD PTR [ebp-0x2c8]
  4433e1:	8d 85 63 fd ff ff    	lea    eax,[ebp-0x29d]
  4433e7:	50                   	push   eax
  4433e8:	8d 85 54 fe ff ff    	lea    eax,[ebp-0x1ac]
  4433ee:	50                   	push   eax
  4433ef:	8b 4e 48             	mov    ecx,DWORD PTR [esi+0x48]
  4433f2:	8d 85 5c fd ff ff    	lea    eax,[ebp-0x2a4]
  4433f8:	50                   	push   eax
  4433f9:	e8 c2 9e ff ff       	call   0x43d2c0 ; ["call resolved=0x43d2c0 FileOperation::getFileAttr"]
  4433fe:	eb 6f                	jmp    0x44346f
  443400:	8b 35 e4 2b 4a 00    	mov    esi,DWORD PTR ds:0x4a2be4
  443406:	8d 85 ac fe ff ff    	lea    eax,[ebp-0x154]
  44340c:	50                   	push   eax
  44340d:	8d 8d 5c fd ff ff    	lea    ecx,[ebp-0x2a4]
  443413:	ff 15 80 f4 47 00    	call   DWORD PTR ds:0x47f480 ; ?toStdString@QString@@QBE?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
  443419:	50                   	push   eax
  44341a:	6a 1a                	push   0x1a
  44341c:	68 b0 62 48 00       	push   0x4862b0 ; ["Failed to retrive attr: {}"]
  443421:	6a 04                	push   0x4
  443423:	83 ec 0c             	sub    esp,0xc
  443426:	c7 85 d0 fe ff ff 50 	mov    DWORD PTR [ebp-0x130],0x486250 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Parse\\vdfs_server_connector.cpp"]
  443430:	8b c4                	mov    eax,esp
  443432:	c7 85 d4 fe ff ff 9a 	mov    DWORD PTR [ebp-0x12c],0x9a
  44343c:	f3 0f 7e 85 d0 fe ff 	movq   xmm0,QWORD PTR [ebp-0x130]
  443444:	8b ce                	mov    ecx,esi
  443446:	c6 45 fc 10          	mov    BYTE PTR [ebp-0x4],0x10
  44344a:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  44344e:	c7 40 08 cc 62 48 00 	mov    DWORD PTR [eax+0x8],0x4862cc ; ["vdfs_server_connector::ParseAttrRequest"]
  443455:	e8 06 69 fc ff       	call   0x409d60 ; ["call resolved=0x409d60 "]
  44345a:	8d 8d ac fe ff ff    	lea    ecx,[ebp-0x154]
  443460:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  443464:	e8 27 0b fc ff       	call   0x403f90 ; ["call resolved=0x403f90 "]
  443469:	8b b5 38 fd ff ff    	mov    esi,DWORD PTR [ebp-0x2c8]
  44346f:	0f 10 85 54 fe ff ff 	movups xmm0,XMMWORD PTR [ebp-0x1ac]
  443476:	8d 85 63 fd ff ff    	lea    eax,[ebp-0x29d]
  44347c:	8b ce                	mov    ecx,esi
  44347e:	50                   	push   eax
  44347f:	ff b5 34 fd ff ff    	push   DWORD PTR [ebp-0x2cc]
  443485:	83 ec 58             	sub    esp,0x58
  443488:	8b c4                	mov    eax,esp
  44348a:	0f 11 00             	movups XMMWORD PTR [eax],xmm0
  44348d:	0f 10 85 64 fe ff ff 	movups xmm0,XMMWORD PTR [ebp-0x19c]
  443494:	0f 11 40 10          	movups XMMWORD PTR [eax+0x10],xmm0
  443498:	0f 10 85 74 fe ff ff 	movups xmm0,XMMWORD PTR [ebp-0x18c]
  44349f:	0f 11 40 20          	movups XMMWORD PTR [eax+0x20],xmm0
  4434a3:	0f 10 85 84 fe ff ff 	movups xmm0,XMMWORD PTR [ebp-0x17c]
  4434aa:	0f 11 40 30          	movups XMMWORD PTR [eax+0x30],xmm0
  4434ae:	0f 10 85 94 fe ff ff 	movups xmm0,XMMWORD PTR [ebp-0x16c]
  4434b5:	0f 11 40 40          	movups XMMWORD PTR [eax+0x40],xmm0
  4434b9:	f3 0f 7e 85 a4 fe ff 	movq   xmm0,QWORD PTR [ebp-0x15c]
  4434c1:	66 0f d6 40 50       	movq   QWORD PTR [eax+0x50],xmm0
  4434c6:	e8 15 f4 ff ff       	call   0x4428e0 ; ["call resolved=0x4428e0 vdfs_server_connector::AssembleAttrReply"]
  4434cb:	84 c0                	test   al,al
  4434cd:	0f 85 cb 00 00 00    	jne    0x44359e
  4434d3:	8b 35 e4 2b 4a 00    	mov    esi,DWORD PTR ds:0x4a2be4
  4434d9:	8d 85 ac fe ff ff    	lea    eax,[ebp-0x154]
  4434df:	50                   	push   eax
  4434e0:	8d 8d 5c fd ff ff    	lea    ecx,[ebp-0x2a4]
  4434e6:	ff 15 80 f4 47 00    	call   DWORD PTR ds:0x47f480 ; ?toStdString@QString@@QBE?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
  4434ec:	50                   	push   eax
  4434ed:	6a 1c                	push   0x1c
  4434ef:	68 f4 62 48 00       	push   0x4862f4 ; ["Error get attr. fileName: {}"]
  4434f4:	6a 04                	push   0x4
  4434f6:	83 ec 0c             	sub    esp,0xc
  4434f9:	c7 85 d0 fe ff ff 50 	mov    DWORD PTR [ebp-0x130],0x486250 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Parse\\vdfs_server_connector.cpp"]
  443503:	8b c4                	mov    eax,esp
  443505:	c7 85 d4 fe ff ff 9f 	mov    DWORD PTR [ebp-0x12c],0x9f
  44350f:	f3 0f 7e 85 d0 fe ff 	movq   xmm0,QWORD PTR [ebp-0x130]
  443517:	8b ce                	mov    ecx,esi
  443519:	c6 45 fc 11          	mov    BYTE PTR [ebp-0x4],0x11
  44351d:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  443521:	c7 40 08 cc 62 48 00 	mov    DWORD PTR [eax+0x8],0x4862cc ; ["vdfs_server_connector::ParseAttrRequest"]
  443528:	e8 33 68 fc ff       	call   0x409d60 ; ["call resolved=0x409d60 "]
  44352d:	8d 8d ac fe ff ff    	lea    ecx,[ebp-0x154]
  443533:	e8 58 0a fc ff       	call   0x403f90 ; ["call resolved=0x403f90 "]
  443538:	8d 8d 64 fd ff ff    	lea    ecx,[ebp-0x29c]
  44353e:	e8 bd 4a fe ff       	call   0x428000 ; ["call resolved=0x428000 "]
  443543:	8d 8d 44 fd ff ff    	lea    ecx,[ebp-0x2bc]
  443549:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  44354f:	8d 8d 50 fd ff ff    	lea    ecx,[ebp-0x2b0]
  443555:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  44355b:	8d 8d 5c fd ff ff    	lea    ecx,[ebp-0x2a4]
  443561:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  443567:	8d 8d fc fc ff ff    	lea    ecx,[ebp-0x304]
  44356d:	ff 15 2c f4 47 00    	call   DWORD PTR ds:0x47f42c ; ??1QDataStream@@QAE@XZ
  443573:	8d 8d 48 fd ff ff    	lea    ecx,[ebp-0x2b8]
  443579:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  44357f:	32 c0                	xor    al,al
  443581:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  443584:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  44358b:	59                   	pop    ecx
  44358c:	5f                   	pop    edi
  44358d:	5e                   	pop    esi
  44358e:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  443591:	33 cd                	xor    ecx,ebp
  443593:	e8 e8 f2 02 00       	call   0x472880 ; ["call resolved=0x472880 "]
  443598:	8b e5                	mov    esp,ebp
  44359a:	5d                   	pop    ebp
  44359b:	c2 10 00             	ret    0x10
  44359e:	8d 8d 64 fd ff ff    	lea    ecx,[ebp-0x29c]
  4435a4:	e8 57 4a fe ff       	call   0x428000 ; ["call resolved=0x428000 "]
  4435a9:	8d 8d 44 fd ff ff    	lea    ecx,[ebp-0x2bc]
  4435af:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  4435b5:	8d 8d 50 fd ff ff    	lea    ecx,[ebp-0x2b0]
  4435bb:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  4435c1:	8d 8d 5c fd ff ff    	lea    ecx,[ebp-0x2a4]
  4435c7:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  4435cd:	8d 8d fc fc ff ff    	lea    ecx,[ebp-0x304]
  4435d3:	ff 15 2c f4 47 00    	call   DWORD PTR ds:0x47f42c ; ??1QDataStream@@QAE@XZ
  4435d9:	8d 8d 48 fd ff ff    	lea    ecx,[ebp-0x2b8]
  4435df:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  4435e5:	b0 01                	mov    al,0x1
  4435e7:	eb 98                	jmp    0x443581
  4435e9:	e8 ef f8 02 00       	call   0x472edd ; ["call resolved=0x472edd "]
