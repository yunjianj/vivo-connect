; vdfs_server_connector::ParseDirentRequest; image base 0x400000; static annotation only
  4435f0:	55                   	push   ebp
  4435f1:	8b ec                	mov    ebp,esp
  4435f3:	6a ff                	push   0xffffffff
  4435f5:	68 a4 81 47 00       	push   0x4781a4
  4435fa:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  443600:	50                   	push   eax
  443601:	81 ec a4 02 00 00    	sub    esp,0x2a4
  443607:	a1 14 de 49 00       	mov    eax,ds:0x49de14
  44360c:	33 c5                	xor    eax,ebp
  44360e:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  443611:	56                   	push   esi
  443612:	57                   	push   edi
  443613:	50                   	push   eax
  443614:	8d 45 f4             	lea    eax,[ebp-0xc]
  443617:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  44361d:	89 8d 8c fd ff ff    	mov    DWORD PTR [ebp-0x274],ecx
  443623:	8b 4d 0c             	mov    ecx,DWORD PTR [ebp+0xc]
  443626:	0f 57 c0             	xorps  xmm0,xmm0
  443629:	8b 45 08             	mov    eax,DWORD PTR [ebp+0x8]
  44362c:	89 8d 88 fd ff ff    	mov    DWORD PTR [ebp-0x278],ecx
  443632:	8d 8d 9c fd ff ff    	lea    ecx,[ebp-0x264]
  443638:	50                   	push   eax
  443639:	c7 85 80 fd ff ff 00 	mov    DWORD PTR [ebp-0x280],0x0
  443643:	c6 85 bb fd ff ff 00 	mov    BYTE PTR [ebp-0x245],0x0
  44364a:	0f 11 45 dc          	movups XMMWORD PTR [ebp-0x24],xmm0
  44364e:	c6 45 ec 00          	mov    BYTE PTR [ebp-0x14],0x0
  443652:	ff 15 4c f3 47 00    	call   DWORD PTR ds:0x47f34c ; ??0QByteArray@@QAE@ABV0@@Z
  443658:	51                   	push   ecx
  443659:	8b c4                	mov    eax,esp
  44365b:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  443662:	8d 8d 50 fd ff ff    	lea    ecx,[ebp-0x2b0]
  443668:	c7 00 01 00 00 00    	mov    DWORD PTR [eax],0x1
  44366e:	8d 85 9c fd ff ff    	lea    eax,[ebp-0x264]
  443674:	50                   	push   eax
  443675:	ff 15 34 f4 47 00    	call   DWORD PTR ds:0x47f434 ; ??0QDataStream@@QAE@PAVQByteArray@@V?$QFlags@W4OpenModeFlag@QIODevice@@@@@Z
  44367b:	8b 8d 54 fd ff ff    	mov    ecx,DWORD PTR [ebp-0x2ac]
  443681:	6a 00                	push   0x0
  443683:	6a 00                	push   0x0
  443685:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  443689:	8b 01                	mov    eax,DWORD PTR [ecx]
  44368b:	ff 50 40             	call   DWORD PTR [eax+0x40]
  44368e:	8b 45 10             	mov    eax,DWORD PTR [ebp+0x10]
  443691:	8b 4d 14             	mov    ecx,DWORD PTR [ebp+0x14]
  443694:	89 85 68 fd ff ff    	mov    DWORD PTR [ebp-0x298],eax
  44369a:	8d 85 70 fd ff ff    	lea    eax,[ebp-0x290]
  4436a0:	89 8d 6c fd ff ff    	mov    DWORD PTR [ebp-0x294],ecx
  4436a6:	8d 8d 50 fd ff ff    	lea    ecx,[ebp-0x2b0]
  4436ac:	50                   	push   eax
  4436ad:	ff 15 68 f3 47 00    	call   DWORD PTR ds:0x47f368 ; ??5QDataStream@@QAEAAV0@AAC@Z
  4436b3:	8b 35 6c f3 47 00    	mov    esi,DWORD PTR ds:0x47f36c
  4436b9:	8d 8d 74 fd ff ff    	lea    ecx,[ebp-0x28c]
  4436bf:	51                   	push   ecx
  4436c0:	8b c8                	mov    ecx,eax
  4436c2:	ff d6                	call   esi
  4436c4:	8b 8d 54 fd ff ff    	mov    ecx,DWORD PTR [ebp-0x2ac]
  4436ca:	8d 45 dc             	lea    eax,[ebp-0x24]
  4436cd:	8b 3d 64 f3 47 00    	mov    edi,DWORD PTR ds:0x47f364
  4436d3:	6a 00                	push   0x0
  4436d5:	6a 10                	push   0x10
  4436d7:	50                   	push   eax
  4436d8:	ff d7                	call   edi
  4436da:	8d 85 78 fd ff ff    	lea    eax,[ebp-0x288]
  4436e0:	c6 45 ec 00          	mov    BYTE PTR [ebp-0x14],0x0
  4436e4:	50                   	push   eax
  4436e5:	8d 8d 50 fd ff ff    	lea    ecx,[ebp-0x2b0]
  4436eb:	ff 15 68 f3 47 00    	call   DWORD PTR ds:0x47f368 ; ??5QDataStream@@QAEAAV0@AAC@Z
  4436f1:	8d 8d 7c fd ff ff    	lea    ecx,[ebp-0x284]
  4436f7:	51                   	push   ecx
  4436f8:	8b c8                	mov    ecx,eax
  4436fa:	ff d6                	call   esi
  4436fc:	8b 8d 54 fd ff ff    	mov    ecx,DWORD PTR [ebp-0x2ac]
  443702:	8d 85 dc fe ff ff    	lea    eax,[ebp-0x124]
  443708:	6a 00                	push   0x0
  44370a:	ff b5 7c fd ff ff    	push   DWORD PTR [ebp-0x284]
  443710:	50                   	push   eax
  443711:	ff d7                	call   edi
  443713:	8b 85 7c fd ff ff    	mov    eax,DWORD PTR [ebp-0x284]
  443719:	3d 00 01 00 00       	cmp    eax,0x100
  44371e:	0f 83 ea 03 00 00    	jae    0x443b0e
  443724:	8b 8d 68 fd ff ff    	mov    ecx,DWORD PTR [ebp-0x298]
  44372a:	8b b5 6c fd ff ff    	mov    esi,DWORD PTR [ebp-0x294]
  443730:	83 c1 e8             	add    ecx,0xffffffe8
  443733:	c6 84 05 dc fe ff ff 	mov    BYTE PTR [ebp+eax*1-0x124],0x0
  44373b:	8b 85 9c fd ff ff    	mov    eax,DWORD PTR [ebp-0x264]
  443741:	83 d6 ff             	adc    esi,0xffffffff
  443744:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  443747:	99                   	cdq
  443748:	3b c1                	cmp    eax,ecx
  44374a:	75 04                	jne    0x443750
  44374c:	3b d6                	cmp    edx,esi
  44374e:	74 07                	je     0x443757
  443750:	c6 85 bb fd ff ff 01 	mov    BYTE PTR [ebp-0x245],0x1
  443757:	8d 8d b4 fd ff ff    	lea    ecx,[ebp-0x24c]
  44375d:	ff 15 84 f4 47 00    	call   DWORD PTR ds:0x47f484 ; ??0QString@@QAE@XZ
  443763:	8d 8d dc fe ff ff    	lea    ecx,[ebp-0x124]
  443769:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  44376d:	8d 51 01             	lea    edx,[ecx+0x1]
  443770:	8a 01                	mov    al,BYTE PTR [ecx]
  443772:	41                   	inc    ecx
  443773:	84 c0                	test   al,al
  443775:	75 f9                	jne    0x443770
  443777:	8b 3d b8 f4 47 00    	mov    edi,DWORD PTR ds:0x47f4b8
  44377d:	8d 85 dc fe ff ff    	lea    eax,[ebp-0x124]
  443783:	2b ca                	sub    ecx,edx
  443785:	51                   	push   ecx
  443786:	50                   	push   eax
  443787:	ff d7                	call   edi
  443789:	89 85 a8 fd ff ff    	mov    DWORD PTR [ebp-0x258],eax
  44378f:	6a 01                	push   0x1
  443791:	68 d0 3b 48 00       	push   0x483bd0
  443796:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  44379a:	ff d7                	call   edi
  44379c:	89 85 98 fd ff ff    	mov    DWORD PTR [ebp-0x268],eax
  4437a2:	6a 01                	push   0x1
  4437a4:	68 10 62 48 00       	push   0x486210
  4437a9:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  4437ad:	ff d7                	call   edi
  4437af:	83 c4 18             	add    esp,0x18
  4437b2:	89 85 94 fd ff ff    	mov    DWORD PTR [ebp-0x26c],eax
  4437b8:	6a 01                	push   0x1
  4437ba:	8d 85 98 fd ff ff    	lea    eax,[ebp-0x268]
  4437c0:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  4437c4:	50                   	push   eax
  4437c5:	8d 85 94 fd ff ff    	lea    eax,[ebp-0x26c]
  4437cb:	50                   	push   eax
  4437cc:	8d 8d a8 fd ff ff    	lea    ecx,[ebp-0x258]
  4437d2:	ff 15 5c f3 47 00    	call   DWORD PTR ds:0x47f35c ; ?replace@QString@@QAEAAV1@ABV1@0W4CaseSensitivity@Qt@@@Z
  4437d8:	50                   	push   eax
  4437d9:	8d 8d a4 fd ff ff    	lea    ecx,[ebp-0x25c]
  4437df:	ff 15 c0 f1 47 00    	call   DWORD PTR ds:0x47f1c0 ; ??0QString@@QAE@ABV0@@Z
  4437e5:	8d 8d 94 fd ff ff    	lea    ecx,[ebp-0x26c]
  4437eb:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  4437f1:	8d 8d 98 fd ff ff    	lea    ecx,[ebp-0x268]
  4437f7:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  4437fd:	8d 8d a8 fd ff ff    	lea    ecx,[ebp-0x258]
  443803:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  443807:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  44380d:	6a 01                	push   0x1
  44380f:	68 d0 3b 48 00       	push   0x483bd0
  443814:	ff d7                	call   edi
  443816:	89 85 ac fd ff ff    	mov    DWORD PTR [ebp-0x254],eax
  44381c:	83 c4 04             	add    esp,0x4
  44381f:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  443823:	8b c4                	mov    eax,esp
  443825:	8d 8d a4 fd ff ff    	lea    ecx,[ebp-0x25c]
  44382b:	6a 00                	push   0x0
  44382d:	c7 00 00 00 00 00    	mov    DWORD PTR [eax],0x0
  443833:	8d 85 ac fd ff ff    	lea    eax,[ebp-0x254]
  443839:	6a 00                	push   0x0
  44383b:	50                   	push   eax
  44383c:	8d 85 90 fd ff ff    	lea    eax,[ebp-0x270]
  443842:	50                   	push   eax
  443843:	ff 15 dc f4 47 00    	call   DWORD PTR ds:0x47f4dc ; ?section@QString@@QBE?AV1@ABV1@HHV?$QFlags@W4SectionFlag@QString@@@@@Z
  443849:	8d 8d ac fd ff ff    	lea    ecx,[ebp-0x254]
  44384f:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  443855:	8d 8d bc fd ff ff    	lea    ecx,[ebp-0x244]
  44385b:	e8 b0 e2 fe ff       	call   0x431b10 ; ["call resolved=0x431b10 "]
  443860:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  443864:	e8 97 aa ff ff       	call   0x43e300 ; ["call resolved=0x43e300 "]
  443869:	8b f0                	mov    esi,eax
  44386b:	8d 8d 90 fd ff ff    	lea    ecx,[ebp-0x270]
  443871:	8d 85 c4 fe ff ff    	lea    eax,[ebp-0x13c]
  443877:	50                   	push   eax
  443878:	ff 15 80 f4 47 00    	call   DWORD PTR ds:0x47f480 ; ?toStdString@QString@@QBE?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
  44387e:	8d 8d bc fd ff ff    	lea    ecx,[ebp-0x244]
  443884:	c6 45 fc 0e          	mov    BYTE PTR [ebp-0x4],0xe
  443888:	51                   	push   ecx
  443889:	50                   	push   eax
  44388a:	8b ce                	mov    ecx,esi
  44388c:	e8 df b4 ff ff       	call   0x43ed70 ; ["call resolved=0x43ed70 "]
  443891:	8d 8d c4 fe ff ff    	lea    ecx,[ebp-0x13c]
  443897:	88 85 b3 fd ff ff    	mov    BYTE PTR [ebp-0x24d],al
  44389d:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  4438a1:	e8 ea 06 fc ff       	call   0x403f90 ; ["call resolved=0x403f90 "]
  4438a6:	80 bd b3 fd ff ff 00 	cmp    BYTE PTR [ebp-0x24d],0x0
  4438ad:	75 47                	jne    0x4438f6
  4438af:	83 bd 18 fe ff ff 10 	cmp    DWORD PTR [ebp-0x1e8],0x10
  4438b6:	8d 85 04 fe ff ff    	lea    eax,[ebp-0x1fc]
  4438bc:	8d 8d b4 fd ff ff    	lea    ecx,[ebp-0x24c]
  4438c2:	0f 43 85 04 fe ff ff 	cmovae eax,DWORD PTR [ebp-0x1fc]
  4438c9:	50                   	push   eax
  4438ca:	ff 15 48 f3 47 00    	call   DWORD PTR ds:0x47f348 ; ??YQString@@QAEAAV0@PBD@Z
  4438d0:	68 d0 3b 48 00       	push   0x483bd0
  4438d5:	8d 8d b4 fd ff ff    	lea    ecx,[ebp-0x24c]
  4438db:	ff 15 48 f3 47 00    	call   DWORD PTR ds:0x47f348 ; ??YQString@@QAEAAV0@PBD@Z
  4438e1:	8d 85 a4 fd ff ff    	lea    eax,[ebp-0x25c]
  4438e7:	50                   	push   eax
  4438e8:	8d 8d b4 fd ff ff    	lea    ecx,[ebp-0x24c]
  4438ee:	ff 15 90 f2 47 00    	call   DWORD PTR ds:0x47f290 ; ?append@QString@@QAEAAV1@ABV1@@Z
  4438f4:	eb 65                	jmp    0x44395b
  4438f6:	6a 01                	push   0x1
  4438f8:	68 d0 3b 48 00       	push   0x483bd0
  4438fd:	ff d7                	call   edi
  4438ff:	89 85 ac fd ff ff    	mov    DWORD PTR [ebp-0x254],eax
  443905:	83 c4 04             	add    esp,0x4
  443908:	c6 45 fc 0f          	mov    BYTE PTR [ebp-0x4],0xf
  44390c:	8b c4                	mov    eax,esp
  44390e:	8d 8d a4 fd ff ff    	lea    ecx,[ebp-0x25c]
  443914:	6a ff                	push   0xffffffff
  443916:	c7 00 00 00 00 00    	mov    DWORD PTR [eax],0x0
  44391c:	8d 85 ac fd ff ff    	lea    eax,[ebp-0x254]
  443922:	6a 01                	push   0x1
  443924:	50                   	push   eax
  443925:	8d 85 a8 fd ff ff    	lea    eax,[ebp-0x258]
  44392b:	50                   	push   eax
  44392c:	ff 15 dc f4 47 00    	call   DWORD PTR ds:0x47f4dc ; ?section@QString@@QBE?AV1@ABV1@HHV?$QFlags@W4SectionFlag@QString@@@@@Z
  443932:	50                   	push   eax
  443933:	8d 8d b4 fd ff ff    	lea    ecx,[ebp-0x24c]
  443939:	ff 15 c8 f1 47 00    	call   DWORD PTR ds:0x47f1c8 ; ??4QString@@QAEAAV0@$$QAV0@@Z
  44393f:	8d 8d a8 fd ff ff    	lea    ecx,[ebp-0x258]
  443945:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  44394b:	8d 8d ac fd ff ff    	lea    ecx,[ebp-0x254]
  443951:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  443955:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  44395b:	8b 35 e4 2b 4a 00    	mov    esi,DWORD PTR ds:0x4a2be4
  443961:	8d 85 ac fe ff ff    	lea    eax,[ebp-0x154]
  443967:	50                   	push   eax
  443968:	8d 8d b4 fd ff ff    	lea    ecx,[ebp-0x24c]
  44396e:	ff 15 80 f4 47 00    	call   DWORD PTR ds:0x47f480 ; ?toStdString@QString@@QBE?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
  443974:	50                   	push   eax
  443975:	6a 1d                	push   0x1d
  443977:	68 14 63 48 00       	push   0x486314 ; ["The requested directory is {}"]
  44397c:	6a 02                	push   0x2
  44397e:	83 ec 0c             	sub    esp,0xc
  443981:	c7 85 d0 fe ff ff 50 	mov    DWORD PTR [ebp-0x130],0x486250 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Parse\\vdfs_server_connector.cpp"]
  44398b:	8b c4                	mov    eax,esp
  44398d:	c7 85 d4 fe ff ff d4 	mov    DWORD PTR [ebp-0x12c],0xd4
  443997:	f3 0f 7e 85 d0 fe ff 	movq   xmm0,QWORD PTR [ebp-0x130]
  44399f:	8b ce                	mov    ecx,esi
  4439a1:	c6 45 fc 10          	mov    BYTE PTR [ebp-0x4],0x10
  4439a5:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  4439a9:	c7 40 08 34 63 48 00 	mov    DWORD PTR [eax+0x8],0x486334 ; ["vdfs_server_connector::ParseDirentRequest"]
  4439b0:	e8 ab 63 fc ff       	call   0x409d60 ; ["call resolved=0x409d60 "]
  4439b5:	8d 8d ac fe ff ff    	lea    ecx,[ebp-0x154]
  4439bb:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  4439bf:	e8 cc 05 fc ff       	call   0x403f90 ; ["call resolved=0x403f90 "]
  4439c4:	8b b5 8c fd ff ff    	mov    esi,DWORD PTR [ebp-0x274]
  4439ca:	8d 85 b4 fd ff ff    	lea    eax,[ebp-0x24c]
  4439d0:	50                   	push   eax
  4439d1:	8b 4e 48             	mov    ecx,DWORD PTR [esi+0x48]
  4439d4:	e8 77 9c ff ff       	call   0x43d650 ; ["call resolved=0x43d650 FileOperation::isExist"]
  4439d9:	0f b6 8d bb fd ff ff 	movzx  ecx,BYTE PTR [ebp-0x245]
  4439e0:	84 c0                	test   al,al
  4439e2:	a1 5c f2 47 00       	mov    eax,ds:0x47f25c
  4439e7:	ba 02 00 00 00       	mov    edx,0x2
  4439ec:	0f 44 ca             	cmove  ecx,edx
  4439ef:	89 85 a0 fd ff ff    	mov    DWORD PTR [ebp-0x260],eax
  4439f5:	88 8d bb fd ff ff    	mov    BYTE PTR [ebp-0x245],cl
  4439fb:	c6 45 fc 11          	mov    BYTE PTR [ebp-0x4],0x11
  4439ff:	84 c9                	test   cl,cl
  443a01:	75 16                	jne    0x443a19
  443a03:	8b 4e 48             	mov    ecx,DWORD PTR [esi+0x48]
  443a06:	8d 85 a0 fd ff ff    	lea    eax,[ebp-0x260]
  443a0c:	50                   	push   eax
  443a0d:	8d 85 b4 fd ff ff    	lea    eax,[ebp-0x24c]
  443a13:	50                   	push   eax
  443a14:	e8 87 95 ff ff       	call   0x43cfa0 ; ["call resolved=0x43cfa0 "]
  443a19:	8d 85 bb fd ff ff    	lea    eax,[ebp-0x245]
  443a1f:	8b ce                	mov    ecx,esi
  443a21:	50                   	push   eax
  443a22:	ff b5 88 fd ff ff    	push   DWORD PTR [ebp-0x278]
  443a28:	8d 85 a0 fd ff ff    	lea    eax,[ebp-0x260]
  443a2e:	50                   	push   eax
  443a2f:	e8 bc f2 ff ff       	call   0x442cf0 ; ["call resolved=0x442cf0 vdfs_server_connector::AssembleDirentReply"]
  443a34:	84 c0                	test   al,al
  443a36:	75 65                	jne    0x443a9d
  443a38:	8b 35 e4 2b 4a 00    	mov    esi,DWORD PTR ds:0x4a2be4
  443a3e:	8d 85 ac fe ff ff    	lea    eax,[ebp-0x154]
  443a44:	50                   	push   eax
  443a45:	8d 8d b4 fd ff ff    	lea    ecx,[ebp-0x24c]
  443a4b:	ff 15 80 f4 47 00    	call   DWORD PTR ds:0x47f480 ; ?toStdString@QString@@QBE?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
  443a51:	50                   	push   eax
  443a52:	6a 37                	push   0x37
  443a54:	68 60 63 48 00       	push   0x486360 ; ["Failed to obtain directory operation, directory name {}"]
  443a59:	6a 04                	push   0x4
  443a5b:	83 ec 0c             	sub    esp,0xc
  443a5e:	c7 85 d0 fe ff ff 50 	mov    DWORD PTR [ebp-0x130],0x486250 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Parse\\vdfs_server_connector.cpp"]
  443a68:	8b c4                	mov    eax,esp
  443a6a:	c7 85 d4 fe ff ff e2 	mov    DWORD PTR [ebp-0x12c],0xe2
  443a74:	f3 0f 7e 85 d0 fe ff 	movq   xmm0,QWORD PTR [ebp-0x130]
  443a7c:	8b ce                	mov    ecx,esi
  443a7e:	c6 45 fc 12          	mov    BYTE PTR [ebp-0x4],0x12
  443a82:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  443a86:	c7 40 08 34 63 48 00 	mov    DWORD PTR [eax+0x8],0x486334 ; ["vdfs_server_connector::ParseDirentRequest"]
  443a8d:	e8 ce 62 fc ff       	call   0x409d60 ; ["call resolved=0x409d60 "]
  443a92:	8d 8d ac fe ff ff    	lea    ecx,[ebp-0x154]
  443a98:	e8 f3 04 fc ff       	call   0x403f90 ; ["call resolved=0x403f90 "]
  443a9d:	8d 8d a0 fd ff ff    	lea    ecx,[ebp-0x260]
  443aa3:	e8 68 e1 fe ff       	call   0x431c10 ; ["call resolved=0x431c10 "]
  443aa8:	8d 8d bc fd ff ff    	lea    ecx,[ebp-0x244]
  443aae:	e8 4d 45 fe ff       	call   0x428000 ; ["call resolved=0x428000 "]
  443ab3:	8d 8d 90 fd ff ff    	lea    ecx,[ebp-0x270]
  443ab9:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  443abf:	8d 8d a4 fd ff ff    	lea    ecx,[ebp-0x25c]
  443ac5:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  443acb:	8d 8d b4 fd ff ff    	lea    ecx,[ebp-0x24c]
  443ad1:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  443ad7:	8d 8d 50 fd ff ff    	lea    ecx,[ebp-0x2b0]
  443add:	ff 15 2c f4 47 00    	call   DWORD PTR ds:0x47f42c ; ??1QDataStream@@QAE@XZ
  443ae3:	8d 8d 9c fd ff ff    	lea    ecx,[ebp-0x264]
  443ae9:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  443aef:	b0 01                	mov    al,0x1
  443af1:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  443af4:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  443afb:	59                   	pop    ecx
  443afc:	5f                   	pop    edi
  443afd:	5e                   	pop    esi
  443afe:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  443b01:	33 cd                	xor    ecx,ebp
  443b03:	e8 78 ed 02 00       	call   0x472880 ; ["call resolved=0x472880 "]
  443b08:	8b e5                	mov    esp,ebp
  443b0a:	5d                   	pop    ebp
  443b0b:	c2 10 00             	ret    0x10
  443b0e:	e8 ca f3 02 00       	call   0x472edd ; ["call resolved=0x472edd "]
