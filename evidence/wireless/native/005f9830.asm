; ConnectFlow::wlanDataParser; image base 0x400000; static annotation only
  5f9830:	55                   	push   ebp
  5f9831:	8b ec                	mov    ebp,esp
  5f9833:	6a ff                	push   0xffffffff
  5f9835:	68 65 9b 69 00       	push   0x699b65
  5f983a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  5f9840:	50                   	push   eax
  5f9841:	83 ec 44             	sub    esp,0x44
  5f9844:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5f9849:	33 c5                	xor    eax,ebp
  5f984b:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  5f984e:	53                   	push   ebx
  5f984f:	56                   	push   esi
  5f9850:	57                   	push   edi
  5f9851:	50                   	push   eax
  5f9852:	8d 45 f4             	lea    eax,[ebp-0xc]
  5f9855:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  5f985b:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  5f985e:	8b 75 08             	mov    esi,DWORD PTR [ebp+0x8]
  5f9861:	b9 3f a3 7a 00       	mov    ecx,0x7aa33f
  5f9866:	e8 83 f2 e0 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5f986b:	83 7e 14 10          	cmp    DWORD PTR [esi+0x14],0x10
  5f986f:	8b 46 10             	mov    eax,DWORD PTR [esi+0x10]
  5f9872:	c7 45 cc ff ff ff ff 	mov    DWORD PTR [ebp-0x34],0xffffffff
  5f9879:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  5f9880:	72 06                	jb     0x5f9888
  5f9882:	03 06                	add    eax,DWORD PTR [esi]
  5f9884:	8b 36                	mov    esi,DWORD PTR [esi]
  5f9886:	eb 02                	jmp    0x5f988a
  5f9888:	03 c6                	add    eax,esi
  5f988a:	50                   	push   eax
  5f988b:	56                   	push   esi
  5f988c:	8d 4d c4             	lea    ecx,[ebp-0x3c]
  5f988f:	e8 52 b9 e0 ff       	call   0x4051e6 ; ["call resolved=0x4a7d20 "]
  5f9894:	6a 01                	push   0x1
  5f9896:	83 ec 28             	sub    esp,0x28
  5f9899:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  5f989d:	8b c4                	mov    eax,esp
  5f989f:	c7 40 24 00 00 00 00 	mov    DWORD PTR [eax+0x24],0x0
  5f98a6:	8d 45 c4             	lea    eax,[ebp-0x3c]
  5f98a9:	50                   	push   eax
  5f98aa:	8d 45 dc             	lea    eax,[ebp-0x24]
  5f98ad:	50                   	push   eax
  5f98ae:	e8 1c 85 e0 ff       	call   0x401dcf ; ["call resolved=0x4b45e0 "]
  5f98b3:	83 c4 34             	add    esp,0x34
  5f98b6:	8b 75 c8             	mov    esi,DWORD PTR [ebp-0x38]
  5f98b9:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  5f98bd:	85 f6                	test   esi,esi
  5f98bf:	74 21                	je     0x5f98e2
  5f98c1:	83 cf ff             	or     edi,0xffffffff
  5f98c4:	8b c7                	mov    eax,edi
  5f98c6:	f0 0f c1 46 04       	lock xadd DWORD PTR [esi+0x4],eax
  5f98cb:	75 15                	jne    0x5f98e2
  5f98cd:	8b 06                	mov    eax,DWORD PTR [esi]
  5f98cf:	8b ce                	mov    ecx,esi
  5f98d1:	ff 10                	call   DWORD PTR [eax]
  5f98d3:	f0 0f c1 7e 08       	lock xadd DWORD PTR [esi+0x8],edi
  5f98d8:	4f                   	dec    edi
  5f98d9:	75 07                	jne    0x5f98e2
  5f98db:	8b 06                	mov    eax,DWORD PTR [esi]
  5f98dd:	8b ce                	mov    ecx,esi
  5f98df:	ff 50 04             	call   DWORD PTR [eax+0x4]
  5f98e2:	68 04 68 6c 00       	push   0x6c6804 ; ["bytes"]
  5f98e7:	8d 4d dc             	lea    ecx,[ebp-0x24]
  5f98ea:	e8 ef 9d e0 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5f98ef:	8d 4d b8             	lea    ecx,[ebp-0x48]
  5f98f2:	51                   	push   ecx
  5f98f3:	8b c8                	mov    ecx,eax
  5f98f5:	e8 50 b9 e0 ff       	call   0x40524a ; ["call resolved=0x55c750 "]
  5f98fa:	8b 45 b8             	mov    eax,DWORD PTR [ebp-0x48]
  5f98fd:	8d 4d b8             	lea    ecx,[ebp-0x48]
  5f9900:	8b 30                	mov    esi,DWORD PTR [eax]
  5f9902:	e8 f2 d2 e0 ff       	call   0x406bf9 ; ["call resolved=0x47f580 "]
  5f9907:	8d 4d dc             	lea    ecx,[ebp-0x24]
  5f990a:	e8 cf 06 e1 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5f990f:	ff 75 dc             	push   DWORD PTR [ebp-0x24]
  5f9912:	8d 4d e4             	lea    ecx,[ebp-0x1c]
  5f9915:	e8 34 00 e1 ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  5f991a:	e9 21 01 00 00       	jmp    0x5f9a40
  5f991f:	6a 5c                	push   0x5c
  5f9921:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f9926:	e8 3b ee 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5f992b:	83 c4 08             	add    esp,0x8
  5f992e:	85 c0                	test   eax,eax
  5f9930:	74 12                	je     0x5f9944
  5f9932:	6a 5c                	push   0x5c
  5f9934:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f9939:	e8 28 ee 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5f993e:	83 c4 08             	add    esp,0x8
  5f9941:	40                   	inc    eax
  5f9942:	eb 05                	jmp    0x5f9949
  5f9944:	b8 80 26 6f 00       	mov    eax,0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f9949:	68 70 36 6f 00       	push   0x6f3670 ; ["ConnectFlow::wlanDataParser"]
  5f994e:	68 c2 02 00 00       	push   0x2c2
  5f9953:	50                   	push   eax
  5f9954:	68 70 43 6d 00       	push   0x6d4370 ; ["[ConntctionModule][%s:%d][%s]:json parse_error\n"]
  5f9959:	8d 45 d0             	lea    eax,[ebp-0x30]
  5f995c:	c7 45 d0 02 00 00 00 	mov    DWORD PTR [ebp-0x30],0x2
  5f9963:	50                   	push   eax
  5f9964:	8d 45 d4             	lea    eax,[ebp-0x2c]
  5f9967:	50                   	push   eax
  5f9968:	e8 9c d6 e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5f996d:	8b 4d e8             	mov    ecx,DWORD PTR [ebp-0x18]
  5f9970:	83 c4 18             	add    esp,0x18
  5f9973:	83 f9 10             	cmp    ecx,0x10
  5f9976:	0f 93 c0             	setae  al
  5f9979:	84 c0                	test   al,al
  5f997b:	74 28                	je     0x5f99a5
  5f997d:	8b 45 d4             	mov    eax,DWORD PTR [ebp-0x2c]
  5f9980:	41                   	inc    ecx
  5f9981:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  5f9987:	72 12                	jb     0x5f999b
  5f9989:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  5f998c:	83 c1 23             	add    ecx,0x23
  5f998f:	2b c2                	sub    eax,edx
  5f9991:	83 c0 fc             	add    eax,0xfffffffc
  5f9994:	83 f8 1f             	cmp    eax,0x1f
  5f9997:	77 12                	ja     0x5f99ab
  5f9999:	8b c2                	mov    eax,edx
  5f999b:	51                   	push   ecx
  5f999c:	50                   	push   eax
  5f999d:	e8 f8 86 e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f99a2:	83 c4 08             	add    esp,0x8
  5f99a5:	b8 3d 9a 5f 00       	mov    eax,0x5f9a3d
  5f99aa:	c3                   	ret
  5f99ab:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5f99b1:	6a 5c                	push   0x5c
  5f99b3:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f99b8:	e8 a9 ed 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5f99bd:	83 c4 08             	add    esp,0x8
  5f99c0:	85 c0                	test   eax,eax
  5f99c2:	74 12                	je     0x5f99d6
  5f99c4:	6a 5c                	push   0x5c
  5f99c6:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f99cb:	e8 96 ed 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5f99d0:	83 c4 08             	add    esp,0x8
  5f99d3:	40                   	inc    eax
  5f99d4:	eb 05                	jmp    0x5f99db
  5f99d6:	b8 80 26 6f 00       	mov    eax,0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f99db:	68 70 36 6f 00       	push   0x6f3670 ; ["ConnectFlow::wlanDataParser"]
  5f99e0:	68 c6 02 00 00       	push   0x2c6
  5f99e5:	50                   	push   eax
  5f99e6:	68 94 36 6f 00       	push   0x6f3694 ; ["[ConntctionModule][%s:%d][%s]:json::exception \n"]
  5f99eb:	8d 45 d0             	lea    eax,[ebp-0x30]
  5f99ee:	c7 45 d0 02 00 00 00 	mov    DWORD PTR [ebp-0x30],0x2
  5f99f5:	50                   	push   eax
  5f99f6:	8d 45 d4             	lea    eax,[ebp-0x2c]
  5f99f9:	50                   	push   eax
  5f99fa:	e8 0a d6 e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5f99ff:	8b 4d e8             	mov    ecx,DWORD PTR [ebp-0x18]
  5f9a02:	83 c4 18             	add    esp,0x18
  5f9a05:	83 f9 10             	cmp    ecx,0x10
  5f9a08:	0f 93 c0             	setae  al
  5f9a0b:	84 c0                	test   al,al
  5f9a0d:	74 28                	je     0x5f9a37
  5f9a0f:	8b 45 d4             	mov    eax,DWORD PTR [ebp-0x2c]
  5f9a12:	41                   	inc    ecx
  5f9a13:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  5f9a19:	72 12                	jb     0x5f9a2d
  5f9a1b:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  5f9a1e:	83 c1 23             	add    ecx,0x23
  5f9a21:	2b c2                	sub    eax,edx
  5f9a23:	83 c0 fc             	add    eax,0xfffffffc
  5f9a26:	83 f8 1f             	cmp    eax,0x1f
  5f9a29:	77 80                	ja     0x5f99ab
  5f9a2b:	8b c2                	mov    eax,edx
  5f9a2d:	51                   	push   ecx
  5f9a2e:	50                   	push   eax
  5f9a2f:	e8 66 86 e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f9a34:	83 c4 08             	add    esp,0x8
  5f9a37:	b8 3d 9a 5f 00       	mov    eax,0x5f9a3d
  5f9a3c:	c3                   	ret
  5f9a3d:	8b 75 cc             	mov    esi,DWORD PTR [ebp-0x34]
  5f9a40:	8b c6                	mov    eax,esi
  5f9a42:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  5f9a45:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  5f9a4c:	59                   	pop    ecx
  5f9a4d:	5f                   	pop    edi
  5f9a4e:	5e                   	pop    esi
  5f9a4f:	5b                   	pop    ebx
  5f9a50:	8b 4d ec             	mov    ecx,DWORD PTR [ebp-0x14]
  5f9a53:	33 cd                	xor    ecx,ebp
  5f9a55:	e8 35 aa e0 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5f9a5a:	8b e5                	mov    esp,ebp
  5f9a5c:	5d                   	pop    ebp
  5f9a5d:	c2 04 00             	ret    0x4
