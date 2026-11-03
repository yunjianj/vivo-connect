; fn_5d83e0; image base 0x400000; static annotation only
  5d83e0:	55                   	push   ebp
  5d83e1:	8b ec                	mov    ebp,esp
  5d83e3:	6a ff                	push   0xffffffff
  5d83e5:	68 ed 5d 69 00       	push   0x695ded
  5d83ea:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  5d83f0:	50                   	push   eax
  5d83f1:	83 ec 4c             	sub    esp,0x4c
  5d83f4:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5d83f9:	33 c5                	xor    eax,ebp
  5d83fb:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  5d83fe:	53                   	push   ebx
  5d83ff:	56                   	push   esi
  5d8400:	57                   	push   edi
  5d8401:	50                   	push   eax
  5d8402:	8d 45 f4             	lea    eax,[ebp-0xc]
  5d8405:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  5d840b:	8b f9                	mov    edi,ecx
  5d840d:	89 7d c8             	mov    DWORD PTR [ebp-0x38],edi
  5d8410:	8b 45 0c             	mov    eax,DWORD PTR [ebp+0xc]
  5d8413:	b9 40 9d 7a 00       	mov    ecx,0x7a9d40
  5d8418:	8b 5d 08             	mov    ebx,DWORD PTR [ebp+0x8]
  5d841b:	8b 75 18             	mov    esi,DWORD PTR [ebp+0x18]
  5d841e:	89 45 c4             	mov    DWORD PTR [ebp-0x3c],eax
  5d8421:	8b 45 10             	mov    eax,DWORD PTR [ebp+0x10]
  5d8424:	89 45 d0             	mov    DWORD PTR [ebp-0x30],eax
  5d8427:	8b 45 14             	mov    eax,DWORD PTR [ebp+0x14]
  5d842a:	89 45 cc             	mov    DWORD PTR [ebp-0x34],eax
  5d842d:	e8 bc 06 e3 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5d8432:	6a 00                	push   0x0
  5d8434:	8d 4d b4             	lea    ecx,[ebp-0x4c]
  5d8437:	e8 86 c4 e2 ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  5d843c:	f3 0f 7e 05 a0 73 6e 	movq   xmm0,QWORD PTR ds:0x6e73a0 ; ["/device/list"]
  5d8444:	a1 a8 73 6e 00       	mov    eax,ds:0x6e73a8 ; ["list"]
  5d8449:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  5d8450:	c7 45 ec 0f 00 00 00 	mov    DWORD PTR [ebp-0x14],0xf
  5d8457:	c7 45 e8 0c 00 00 00 	mov    DWORD PTR [ebp-0x18],0xc
  5d845e:	66 0f d6 45 d8       	movq   QWORD PTR [ebp-0x28],xmm0
  5d8463:	89 45 e0             	mov    DWORD PTR [ebp-0x20],eax
  5d8466:	c6 45 e4 00          	mov    BYTE PTR [ebp-0x1c],0x0
  5d846a:	8d 45 a8             	lea    eax,[ebp-0x58]
  5d846d:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  5d8471:	50                   	push   eax
  5d8472:	e8 58 df e2 ff       	call   0x4063cf ; ["call resolved=0x499e50 "]
  5d8477:	8b 07                	mov    eax,DWORD PTR [edi]
  5d8479:	83 c4 04             	add    esp,0x4
  5d847c:	8b 78 0c             	mov    edi,DWORD PTR [eax+0xc]
  5d847f:	8d 45 b4             	lea    eax,[ebp-0x4c]
  5d8482:	56                   	push   esi
  5d8483:	8b 75 cc             	mov    esi,DWORD PTR [ebp-0x34]
  5d8486:	56                   	push   esi
  5d8487:	ff 75 d0             	push   DWORD PTR [ebp-0x30]
  5d848a:	53                   	push   ebx
  5d848b:	50                   	push   eax
  5d848c:	83 ec 18             	sub    esp,0x18
  5d848f:	8b cc                	mov    ecx,esp
  5d8491:	89 65 cc             	mov    DWORD PTR [ebp-0x34],esp
  5d8494:	ff 35 18 d5 79 00    	push   DWORD PTR ds:0x79d518
  5d849a:	e8 ec d7 e2 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  5d849f:	83 ec 18             	sub    esp,0x18
  5d84a2:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  5d84a6:	8d 45 d8             	lea    eax,[ebp-0x28]
  5d84a9:	8b cc                	mov    ecx,esp
  5d84ab:	50                   	push   eax
  5d84ac:	e8 da d7 e2 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  5d84b1:	8b 4d c8             	mov    ecx,DWORD PTR [ebp-0x38]
  5d84b4:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  5d84b8:	ff d7                	call   edi
  5d84ba:	ff 75 c4             	push   DWORD PTR [ebp-0x3c]
  5d84bd:	8b 4d c8             	mov    ecx,DWORD PTR [ebp-0x38]
  5d84c0:	88 45 d7             	mov    BYTE PTR [ebp-0x29],al
  5d84c3:	8d 45 a8             	lea    eax,[ebp-0x58]
  5d84c6:	50                   	push   eax
  5d84c7:	56                   	push   esi
  5d84c8:	ff 75 d0             	push   DWORD PTR [ebp-0x30]
  5d84cb:	8d 45 d8             	lea    eax,[ebp-0x28]
  5d84ce:	50                   	push   eax
  5d84cf:	e8 87 c1 e2 ff       	call   0x40465b ; ["call resolved=0x5d9d20 GatewayServer::SendConnectCenterBuryPoint"]
  5d84d4:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  5d84d7:	83 fa 10             	cmp    edx,0x10
  5d84da:	72 2e                	jb     0x5d850a
  5d84dc:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  5d84df:	42                   	inc    edx
  5d84e0:	8b c1                	mov    eax,ecx
  5d84e2:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5d84e8:	72 16                	jb     0x5d8500
  5d84ea:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5d84ed:	83 c2 23             	add    edx,0x23
  5d84f0:	2b c1                	sub    eax,ecx
  5d84f2:	83 c0 fc             	add    eax,0xfffffffc
  5d84f5:	83 f8 1f             	cmp    eax,0x1f
  5d84f8:	76 06                	jbe    0x5d8500
  5d84fa:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5d8500:	52                   	push   edx
  5d8501:	51                   	push   ecx
  5d8502:	e8 93 9b e2 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5d8507:	83 c4 08             	add    esp,0x8
  5d850a:	8d 4d b4             	lea    ecx,[ebp-0x4c]
  5d850d:	e8 cc 1a e3 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5d8512:	ff 75 b4             	push   DWORD PTR [ebp-0x4c]
  5d8515:	8d 4d bc             	lea    ecx,[ebp-0x44]
  5d8518:	e8 31 14 e3 ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  5d851d:	8a 45 d7             	mov    al,BYTE PTR [ebp-0x29]
  5d8520:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  5d8523:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  5d852a:	59                   	pop    ecx
  5d852b:	5f                   	pop    edi
  5d852c:	5e                   	pop    esi
  5d852d:	5b                   	pop    ebx
  5d852e:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  5d8531:	33 cd                	xor    ecx,ebp
  5d8533:	e8 57 bf e2 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5d8538:	8b e5                	mov    esp,ebp
  5d853a:	5d                   	pop    ebp
  5d853b:	c2 14 00             	ret    0x14
