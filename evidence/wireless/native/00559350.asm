; BtFarawayDevice::sendFrameData; image base 0x400000; static annotation only
  559350:	81 ec 20 04 00 00    	sub    esp,0x420
  559356:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  55935b:	33 c4                	xor    eax,esp
  55935d:	89 84 24 1c 04 00 00 	mov    DWORD PTR [esp+0x41c],eax
  559364:	53                   	push   ebx
  559365:	56                   	push   esi
  559366:	8b d9                	mov    ebx,ecx
  559368:	b9 74 8b 7a 00       	mov    ecx,0x7a8b74
  55936d:	57                   	push   edi
  55936e:	8b bc 24 30 04 00 00 	mov    edi,DWORD PTR [esp+0x430]
  559375:	e8 74 f7 ea ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  55937a:	83 7f 14 10          	cmp    DWORD PTR [edi+0x14],0x10
  55937e:	8b f7                	mov    esi,edi
  559380:	72 02                	jb     0x559384
  559382:	8b 37                	mov    esi,DWORD PTR [edi]
  559384:	6a 5c                	push   0x5c
  559386:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  55938b:	e8 d6 f3 10 00       	call   0x668766 ; ["call resolved=0x668766 "]
  559390:	83 c4 08             	add    esp,0x8
  559393:	85 c0                	test   eax,eax
  559395:	74 12                	je     0x5593a9
  559397:	6a 5c                	push   0x5c
  559399:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  55939e:	e8 c3 f3 10 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5593a3:	83 c4 08             	add    esp,0x8
  5593a6:	40                   	inc    eax
  5593a7:	eb 05                	jmp    0x5593ae
  5593a9:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5593ae:	56                   	push   esi
  5593af:	68 98 86 6d 00       	push   0x6d8698 ; ["BtFarawayDevice::sendFrameData"]
  5593b4:	68 a9 00 00 00       	push   0xa9
  5593b9:	50                   	push   eax
  5593ba:	68 c0 86 6d 00       	push   0x6d86c0 ; ["[ConntctionModule][%s:%d][%s]: send a frame of data= %s\n"]
  5593bf:	8d 44 24 20          	lea    eax,[esp+0x20]
  5593c3:	c7 44 24 20 02 00 00 	mov    DWORD PTR [esp+0x20],0x2
  5593cb:	50                   	push   eax
  5593cc:	8d 44 24 28          	lea    eax,[esp+0x28]
  5593d0:	50                   	push   eax
  5593d1:	e8 33 dc ea ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5593d6:	8b 54 24 40          	mov    edx,DWORD PTR [esp+0x40]
  5593da:	83 c4 1c             	add    esp,0x1c
  5593dd:	83 fa 10             	cmp    edx,0x10
  5593e0:	72 2f                	jb     0x559411
  5593e2:	8b 4c 24 10          	mov    ecx,DWORD PTR [esp+0x10]
  5593e6:	42                   	inc    edx
  5593e7:	8b c1                	mov    eax,ecx
  5593e9:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5593ef:	72 16                	jb     0x559407
  5593f1:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5593f4:	83 c2 23             	add    edx,0x23
  5593f7:	2b c1                	sub    eax,ecx
  5593f9:	83 c0 fc             	add    eax,0xfffffffc
  5593fc:	83 f8 1f             	cmp    eax,0x1f
  5593ff:	76 06                	jbe    0x559407
  559401:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  559407:	52                   	push   edx
  559408:	51                   	push   ecx
  559409:	e8 8c 8c ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  55940e:	83 c4 08             	add    esp,0x8
  559411:	68 ee 03 00 00       	push   0x3ee
  559416:	8d 44 24 3e          	lea    eax,[esp+0x3e]
  55941a:	6a 00                	push   0x0
  55941c:	50                   	push   eax
  55941d:	e8 74 f3 10 00       	call   0x668796 ; ["call resolved=0x668796 "]
  559422:	8b 57 14             	mov    edx,DWORD PTR [edi+0x14]
  559425:	83 c4 0c             	add    esp,0xc
  559428:	8b f7                	mov    esi,edi
  55942a:	83 fa 10             	cmp    edx,0x10
  55942d:	72 02                	jb     0x559431
  55942f:	8b 37                	mov    esi,DWORD PTR [edi]
  559431:	8d 4e 01             	lea    ecx,[esi+0x1]
  559434:	8a 06                	mov    al,BYTE PTR [esi]
  559436:	46                   	inc    esi
  559437:	84 c0                	test   al,al
  559439:	75 f9                	jne    0x559434
  55943b:	66 a1 b0 68 6c 00    	mov    ax,ds:0x6c68b0 ; ["_1"]
  559441:	2b f1                	sub    esi,ecx
  559443:	f3 0f 7e 05 a8 68 6c 	movq   xmm0,QWORD PTR ds:0x6c68a8 ; ["PAY_LOAD_1"]
  55944b:	66 89 44 24 30       	mov    WORD PTR [esp+0x30],ax
  559450:	66 0f d6 44 24 28    	movq   QWORD PTR [esp+0x28],xmm0
  559456:	8d 4e 04             	lea    ecx,[esi+0x4]
  559459:	c7 44 24 36 23 70 63 	mov    DWORD PTR [esp+0x36],0x63637023
  559461:	8b c1                	mov    eax,ecx
  559463:	88 4c 24 35          	mov    BYTE PTR [esp+0x35],cl
  559467:	c1 f8 18             	sar    eax,0x18
  55946a:	88 44 24 32          	mov    BYTE PTR [esp+0x32],al
  55946e:	8b c1                	mov    eax,ecx
  559470:	c1 f8 10             	sar    eax,0x10
  559473:	88 44 24 33          	mov    BYTE PTR [esp+0x33],al
  559477:	8b c1                	mov    eax,ecx
  559479:	c1 f8 08             	sar    eax,0x8
  55947c:	88 44 24 34          	mov    BYTE PTR [esp+0x34],al
  559480:	83 fa 10             	cmp    edx,0x10
  559483:	72 16                	jb     0x55949b
  559485:	8b 0f                	mov    ecx,DWORD PTR [edi]
  559487:	8d 51 01             	lea    edx,[ecx+0x1]
  55948a:	66 0f 1f 44 00 00    	nop    WORD PTR [eax+eax*1+0x0]
  559490:	8a 01                	mov    al,BYTE PTR [ecx]
  559492:	41                   	inc    ecx
  559493:	84 c0                	test   al,al
  559495:	75 f9                	jne    0x559490
  559497:	8b 3f                	mov    edi,DWORD PTR [edi]
  559499:	eb 0c                	jmp    0x5594a7
  55949b:	8b cf                	mov    ecx,edi
  55949d:	8d 51 01             	lea    edx,[ecx+0x1]
  5594a0:	8a 01                	mov    al,BYTE PTR [ecx]
  5594a2:	41                   	inc    ecx
  5594a3:	84 c0                	test   al,al
  5594a5:	75 f9                	jne    0x5594a0
  5594a7:	2b ca                	sub    ecx,edx
  5594a9:	8d 44 24 3a          	lea    eax,[esp+0x3a]
  5594ad:	51                   	push   ecx
  5594ae:	57                   	push   edi
  5594af:	50                   	push   eax
  5594b0:	e8 d5 f2 10 00       	call   0x66878a ; ["call resolved=0x66878a "]
  5594b5:	8b 03                	mov    eax,DWORD PTR [ebx]
  5594b7:	83 c4 0c             	add    esp,0xc
  5594ba:	8b cb                	mov    ecx,ebx
  5594bc:	8b 50 1c             	mov    edx,DWORD PTR [eax+0x1c]
  5594bf:	8d 46 12             	lea    eax,[esi+0x12]
  5594c2:	89 44 24 0c          	mov    DWORD PTR [esp+0xc],eax
  5594c6:	8d 44 24 0c          	lea    eax,[esp+0xc]
  5594ca:	50                   	push   eax
  5594cb:	8d 44 24 2c          	lea    eax,[esp+0x2c]
  5594cf:	50                   	push   eax
  5594d0:	ff d2                	call   edx
  5594d2:	8b 8c 24 28 04 00 00 	mov    ecx,DWORD PTR [esp+0x428]
  5594d9:	5f                   	pop    edi
  5594da:	5e                   	pop    esi
  5594db:	5b                   	pop    ebx
  5594dc:	33 cc                	xor    ecx,esp
  5594de:	e8 ac af ea ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5594e3:	81 c4 20 04 00 00    	add    esp,0x420
  5594e9:	c2 04 00             	ret    0x4
