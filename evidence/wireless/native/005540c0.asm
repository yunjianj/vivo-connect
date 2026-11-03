; BtFarawayDevice::createClient; image base 0x400000; static annotation only
  5540c0:	55                   	push   ebp
  5540c1:	8b ec                	mov    ebp,esp
  5540c3:	6a ff                	push   0xffffffff
  5540c5:	68 47 75 68 00       	push   0x687547
  5540ca:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  5540d0:	50                   	push   eax
  5540d1:	83 ec 28             	sub    esp,0x28
  5540d4:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5540d9:	33 c5                	xor    eax,ebp
  5540db:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  5540de:	53                   	push   ebx
  5540df:	56                   	push   esi
  5540e0:	57                   	push   edi
  5540e1:	50                   	push   eax
  5540e2:	8d 45 f4             	lea    eax,[ebp-0xc]
  5540e5:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  5540eb:	8b d9                	mov    ebx,ecx
  5540ed:	b9 74 8b 7a 00       	mov    ecx,0x7a8b74
  5540f2:	e8 f7 49 eb ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5540f7:	8d 83 dc 0e 00 00    	lea    eax,[ebx+0xedc]
  5540fd:	c6 45 d0 00          	mov    BYTE PTR [ebp-0x30],0x0
  554101:	50                   	push   eax
  554102:	89 45 cc             	mov    DWORD PTR [ebp-0x34],eax
  554105:	e8 f8 15 11 00       	call   0x665702 ; ["call resolved=0x665702 "]
  55410a:	83 c4 04             	add    esp,0x4
  55410d:	85 c0                	test   eax,eax
  55410f:	0f 85 65 01 00 00    	jne    0x55427a
  554115:	c6 45 d0 01          	mov    BYTE PTR [ebp-0x30],0x1
  554119:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  55411c:	39 83 60 0e 00 00    	cmp    DWORD PTR [ebx+0xe60],eax
  554122:	0f 85 27 01 00 00    	jne    0x55424f
  554128:	39 83 8c 00 00 00    	cmp    DWORD PTR [ebx+0x8c],eax
  55412e:	0f 84 97 00 00 00    	je     0x5541cb
  554134:	68 a4 01 00 00       	push   0x1a4
  554139:	e8 78 f0 ea ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  55413e:	8b f0                	mov    esi,eax
  554140:	83 c4 04             	add    esp,0x4
  554143:	89 75 d4             	mov    DWORD PTR [ebp-0x2c],esi
  554146:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  55414a:	85 f6                	test   esi,esi
  55414c:	74 30                	je     0x55417e
  55414e:	0f 57 c0             	xorps  xmm0,xmm0
  554151:	66 0f d6 06          	movq   QWORD PTR [esi],xmm0
  554155:	c7 46 08 00 00 00 00 	mov    DWORD PTR [esi+0x8],0x0
  55415c:	c7 46 04 01 00 00 00 	mov    DWORD PTR [esi+0x4],0x1
  554163:	c7 46 08 01 00 00 00 	mov    DWORD PTR [esi+0x8],0x1
  55416a:	8d 4e 0c             	lea    ecx,[esi+0xc]
  55416d:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  554171:	c7 06 c0 91 6d 00    	mov    DWORD PTR [esi],0x6d91c0
  554177:	e8 a7 28 eb ff       	call   0x406a23 ; ["call resolved=0x5fcb70 "]
  55417c:	eb 02                	jmp    0x554180
  55417e:	33 f6                	xor    esi,esi
  554180:	8b bb 64 0e 00 00    	mov    edi,DWORD PTR [ebx+0xe64]
  554186:	8d 46 0c             	lea    eax,[esi+0xc]
  554189:	89 83 60 0e 00 00    	mov    DWORD PTR [ebx+0xe60],eax
  55418f:	89 b3 64 0e 00 00    	mov    DWORD PTR [ebx+0xe64],esi
  554195:	85 ff                	test   edi,edi
  554197:	0f 84 b2 00 00 00    	je     0x55424f
  55419d:	83 ce ff             	or     esi,0xffffffff
  5541a0:	8b c6                	mov    eax,esi
  5541a2:	f0 0f c1 47 04       	lock xadd DWORD PTR [edi+0x4],eax
  5541a7:	0f 85 a2 00 00 00    	jne    0x55424f
  5541ad:	8b 07                	mov    eax,DWORD PTR [edi]
  5541af:	8b cf                	mov    ecx,edi
  5541b1:	ff 10                	call   DWORD PTR [eax]
  5541b3:	f0 0f c1 77 08       	lock xadd DWORD PTR [edi+0x8],esi
  5541b8:	4e                   	dec    esi
  5541b9:	0f 85 90 00 00 00    	jne    0x55424f
  5541bf:	8b 07                	mov    eax,DWORD PTR [edi]
  5541c1:	8b cf                	mov    ecx,edi
  5541c3:	ff 50 04             	call   DWORD PTR [eax+0x4]
  5541c6:	e9 84 00 00 00       	jmp    0x55424f
  5541cb:	6a 5c                	push   0x5c
  5541cd:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5541d2:	e8 8f 45 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5541d7:	83 c4 08             	add    esp,0x8
  5541da:	85 c0                	test   eax,eax
  5541dc:	74 12                	je     0x5541f0
  5541de:	6a 5c                	push   0x5c
  5541e0:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5541e5:	e8 7c 45 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5541ea:	83 c4 08             	add    esp,0x8
  5541ed:	40                   	inc    eax
  5541ee:	eb 05                	jmp    0x5541f5
  5541f0:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5541f5:	68 14 81 6d 00       	push   0x6d8114 ; ["BtFarawayDevice::createClient"]
  5541fa:	6a 27                	push   0x27
  5541fc:	50                   	push   eax
  5541fd:	68 90 81 6d 00       	push   0x6d8190 ; ["[ConntctionModule][%s:%d][%s]: bluetooth is empty.\n"]
  554202:	8d 45 d4             	lea    eax,[ebp-0x2c]
  554205:	c7 45 d4 04 00 00 00 	mov    DWORD PTR [ebp-0x2c],0x4
  55420c:	50                   	push   eax
  55420d:	8d 45 d8             	lea    eax,[ebp-0x28]
  554210:	50                   	push   eax
  554211:	e8 f3 2d eb ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  554216:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  554219:	83 c4 18             	add    esp,0x18
  55421c:	83 fa 10             	cmp    edx,0x10
  55421f:	72 2e                	jb     0x55424f
  554221:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  554224:	42                   	inc    edx
  554225:	8b c1                	mov    eax,ecx
  554227:	81 fa 00 10 00 00    	cmp    edx,0x1000
  55422d:	72 16                	jb     0x554245
  55422f:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  554232:	83 c2 23             	add    edx,0x23
  554235:	2b c1                	sub    eax,ecx
  554237:	83 c0 fc             	add    eax,0xfffffffc
  55423a:	83 f8 1f             	cmp    eax,0x1f
  55423d:	76 06                	jbe    0x554245
  55423f:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  554245:	52                   	push   edx
  554246:	51                   	push   ecx
  554247:	e8 4e de ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  55424c:	83 c4 08             	add    esp,0x8
  55424f:	8d 83 dc 0e 00 00    	lea    eax,[ebx+0xedc]
  554255:	50                   	push   eax
  554256:	e8 ad 14 11 00       	call   0x665708 ; ["call resolved=0x665708 "]
  55425b:	83 c4 04             	add    esp,0x4
  55425e:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  554261:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  554268:	59                   	pop    ecx
  554269:	5f                   	pop    edi
  55426a:	5e                   	pop    esi
  55426b:	5b                   	pop    ebx
  55426c:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  55426f:	33 cd                	xor    ecx,ebp
  554271:	e8 19 02 eb ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  554276:	8b e5                	mov    esp,ebp
  554278:	5d                   	pop    ebp
  554279:	c3                   	ret
  55427a:	50                   	push   eax
  55427b:	e8 b2 14 11 00       	call   0x665732 ; ["call resolved=0x665732 "]
