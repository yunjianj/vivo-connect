; BtFarawayDevice::preConnect; image base 0x400000; static annotation only
  5567c0:	55                   	push   ebp
  5567c1:	8b ec                	mov    ebp,esp
  5567c3:	6a ff                	push   0xffffffff
  5567c5:	68 be 7c 68 00       	push   0x687cbe
  5567ca:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  5567d0:	50                   	push   eax
  5567d1:	81 ec 48 01 00 00    	sub    esp,0x148
  5567d7:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5567dc:	33 c5                	xor    eax,ebp
  5567de:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  5567e1:	53                   	push   ebx
  5567e2:	56                   	push   esi
  5567e3:	57                   	push   edi
  5567e4:	50                   	push   eax
  5567e5:	8d 45 f4             	lea    eax,[ebp-0xc]
  5567e8:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  5567ee:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  5567f1:	8b 75 08             	mov    esi,DWORD PTR [ebp+0x8]
  5567f4:	b9 74 8b 7a 00       	mov    ecx,0x7a8b74
  5567f9:	89 b5 f8 fe ff ff    	mov    DWORD PTR [ebp-0x108],esi
  5567ff:	89 b5 f4 fe ff ff    	mov    DWORD PTR [ebp-0x10c],esi
  556805:	e8 e4 22 eb ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  55680a:	33 d2                	xor    edx,edx
  55680c:	66 8b 46 04          	mov    ax,WORD PTR [esi+0x4]
  556810:	66 89 85 fe fe ff ff 	mov    WORD PTR [ebp-0x102],ax
  556817:	8d 48 01             	lea    ecx,[eax+0x1]
  55681a:	66 83 f9 04          	cmp    cx,0x4
  55681e:	0f 87 2d 0f 00 00    	ja     0x557751
  556824:	66 89 85 fe fe ff ff 	mov    WORD PTR [ebp-0x102],ax
  55682b:	66 83 f8 02          	cmp    ax,0x2
  55682f:	74 0c                	je     0x55683d
  556831:	8b 96 1c 0a 00 00    	mov    edx,DWORD PTR [esi+0xa1c]
  556837:	89 95 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],edx
  55683d:	89 96 1c 0a 00 00    	mov    DWORD PTR [esi+0xa1c],edx
  556843:	0f bf c1             	movsx  eax,cx
  556846:	ff 24 85 70 77 55 00 	jmp    DWORD PTR [eax*4+0x557770]
  55684d:	8b 86 21 0a 00 00    	mov    eax,DWORD PTR [esi+0xa21]
  556853:	8d 8e b0 09 00 00    	lea    ecx,[esi+0x9b0]
  556859:	c6 46 08 00          	mov    BYTE PTR [esi+0x8],0x0
  55685d:	8b 00                	mov    eax,DWORD PTR [eax]
  55685f:	8b 40 58             	mov    eax,DWORD PTR [eax+0x58]
  556862:	89 85 00 ff ff ff    	mov    DWORD PTR [ebp-0x100],eax
  556868:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  55686e:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  556874:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  556877:	ff 15 cc d3 79 00    	call   DWORD PTR ds:0x79d3cc
  55687d:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  556881:	8d be 00 0a 00 00    	lea    edi,[esi+0xa00]
  556887:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  55688a:	8d 8e b0 09 00 00    	lea    ecx,[esi+0x9b0]
  556890:	89 86 1c 0a 00 00    	mov    DWORD PTR [esi+0xa1c],eax
  556896:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  55689c:	57                   	push   edi
  55689d:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  5568a0:	ff 15 d4 d3 79 00    	call   DWORD PTR ds:0x79d3d4
  5568a6:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  5568aa:	8d 4e 0c             	lea    ecx,[esi+0xc]
  5568ad:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  5568b0:	89 86 1c 0a 00 00    	mov    DWORD PTR [esi+0xa1c],eax
  5568b6:	51                   	push   ecx
  5568b7:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  5568bd:	8b cf                	mov    ecx,edi
  5568bf:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  5568c2:	ff 15 c8 d3 79 00    	call   DWORD PTR ds:0x79d3c8
  5568c8:	8b cf                	mov    ecx,edi
  5568ca:	ff 15 b8 d3 79 00    	call   DWORD PTR ds:0x79d3b8
  5568d0:	8d 8e b0 09 00 00    	lea    ecx,[esi+0x9b0]
  5568d6:	ff 15 d0 d3 79 00    	call   DWORD PTR ds:0x79d3d0
  5568dc:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  5568e0:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  5568e3:	89 86 1c 0a 00 00    	mov    DWORD PTR [esi+0xa1c],eax
  5568e9:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  5568ef:	8b 8e 21 0a 00 00    	mov    ecx,DWORD PTR [esi+0xa21]
  5568f5:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  5568f8:	8d 46 0c             	lea    eax,[esi+0xc]
  5568fb:	50                   	push   eax
  5568fc:	ff 95 00 ff ff ff    	call   DWORD PTR [ebp-0x100]
  556902:	c6 45 fc 00          	mov    BYTE PTR [ebp-0x4],0x0
  556906:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  556909:	89 86 1c 0a 00 00    	mov    DWORD PTR [esi+0xa1c],eax
  55690f:	8b 46 20             	mov    eax,DWORD PTR [esi+0x20]
  556912:	89 45 d0             	mov    DWORD PTR [ebp-0x30],eax
  556915:	83 f8 10             	cmp    eax,0x10
  556918:	72 43                	jb     0x55695d
  55691a:	8b 46 20             	mov    eax,DWORD PTR [esi+0x20]
  55691d:	89 45 d0             	mov    DWORD PTR [ebp-0x30],eax
  556920:	8b 56 0c             	mov    edx,DWORD PTR [esi+0xc]
  556923:	89 55 bc             	mov    DWORD PTR [ebp-0x44],edx
  556926:	8d 48 01             	lea    ecx,[eax+0x1]
  556929:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  55692f:	72 22                	jb     0x556953
  556931:	8b 46 0c             	mov    eax,DWORD PTR [esi+0xc]
  556934:	83 c1 23             	add    ecx,0x23
  556937:	89 45 bc             	mov    DWORD PTR [ebp-0x44],eax
  55693a:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  55693d:	8b 46 0c             	mov    eax,DWORD PTR [esi+0xc]
  556940:	89 45 bc             	mov    DWORD PTR [ebp-0x44],eax
  556943:	2b c2                	sub    eax,edx
  556945:	83 c0 fc             	add    eax,0xfffffffc
  556948:	83 f8 1f             	cmp    eax,0x1f
  55694b:	76 06                	jbe    0x556953
  55694d:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  556953:	51                   	push   ecx
  556954:	52                   	push   edx
  556955:	e8 40 b7 ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  55695a:	83 c4 08             	add    esp,0x8
  55695d:	68 00 04 00 00       	push   0x400
  556962:	8d 46 30             	lea    eax,[esi+0x30]
  556965:	c7 46 24 00 00 00 00 	mov    DWORD PTR [esi+0x24],0x0
  55696c:	6a 00                	push   0x0
  55696e:	50                   	push   eax
  55696f:	c7 46 28 00 00 00 00 	mov    DWORD PTR [esi+0x28],0x0
  556976:	e8 1b 1e 11 00       	call   0x668796 ; ["call resolved=0x668796 "]
  55697b:	68 00 04 00 00       	push   0x400
  556980:	8d 86 30 04 00 00    	lea    eax,[esi+0x430]
  556986:	6a 00                	push   0x0
  556988:	50                   	push   eax
  556989:	e8 08 1e 11 00       	call   0x668796 ; ["call resolved=0x668796 "]
  55698e:	8b 86 21 0a 00 00    	mov    eax,DWORD PTR [esi+0xa21]
  556994:	83 c4 18             	add    esp,0x18
  556997:	83 78 30 10          	cmp    DWORD PTR [eax+0x30],0x10
  55699b:	8d 78 1c             	lea    edi,[eax+0x1c]
  55699e:	8b 88 38 01 00 00    	mov    ecx,DWORD PTR [eax+0x138]
  5569a4:	89 8d 08 ff ff ff    	mov    DWORD PTR [ebp-0xf8],ecx
  5569aa:	8b 88 3c 01 00 00    	mov    ecx,DWORD PTR [eax+0x13c]
  5569b0:	89 8d 00 ff ff ff    	mov    DWORD PTR [ebp-0x100],ecx
  5569b6:	72 02                	jb     0x5569ba
  5569b8:	8b 3f                	mov    edi,DWORD PTR [edi]
  5569ba:	6a 5c                	push   0x5c
  5569bc:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5569c1:	e8 a0 1d 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5569c6:	83 c4 08             	add    esp,0x8
  5569c9:	85 c0                	test   eax,eax
  5569cb:	74 14                	je     0x5569e1
  5569cd:	6a 5c                	push   0x5c
  5569cf:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5569d4:	e8 8d 1d 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5569d9:	83 c4 08             	add    esp,0x8
  5569dc:	8d 50 01             	lea    edx,[eax+0x1]
  5569df:	eb 05                	jmp    0x5569e6
  5569e1:	ba 38 81 6d 00       	mov    edx,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5569e6:	ff b5 00 ff ff ff    	push   DWORD PTR [ebp-0x100]
  5569ec:	8d 8e 30 08 00 00    	lea    ecx,[esi+0x830]
  5569f2:	c7 01 02 00 00 00    	mov    DWORD PTR [ecx],0x2
  5569f8:	ff b5 08 ff ff ff    	push   DWORD PTR [ebp-0xf8]
  5569fe:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  556a04:	57                   	push   edi
  556a05:	68 2c 83 6d 00       	push   0x6d832c ; ["BtFarawayDevice::preConnect"]
  556a0a:	6a 4c                	push   0x4c
  556a0c:	52                   	push   edx
  556a0d:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  556a13:	68 50 83 6d 00       	push   0x6d8350 ; ["[ConntctionModule][%s:%d][%s]: preConnect type is: FARAWAYBT, deviceId is: %s, device mac address: %4x\n"]
  556a18:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  556a1b:	8d 86 34 08 00 00    	lea    eax,[esi+0x834]
  556a21:	51                   	push   ecx
  556a22:	50                   	push   eax
  556a23:	e8 e1 05 eb ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  556a28:	8b 86 48 08 00 00    	mov    eax,DWORD PTR [esi+0x848]
  556a2e:	83 c4 24             	add    esp,0x24
  556a31:	89 45 b8             	mov    DWORD PTR [ebp-0x48],eax
  556a34:	83 f8 10             	cmp    eax,0x10
  556a37:	72 4d                	jb     0x556a86
  556a39:	8b 86 48 08 00 00    	mov    eax,DWORD PTR [esi+0x848]
  556a3f:	89 45 b8             	mov    DWORD PTR [ebp-0x48],eax
  556a42:	8b 96 34 08 00 00    	mov    edx,DWORD PTR [esi+0x834]
  556a48:	89 55 a4             	mov    DWORD PTR [ebp-0x5c],edx
  556a4b:	8d 48 01             	lea    ecx,[eax+0x1]
  556a4e:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  556a54:	72 26                	jb     0x556a7c
  556a56:	8b 86 34 08 00 00    	mov    eax,DWORD PTR [esi+0x834]
  556a5c:	83 c1 23             	add    ecx,0x23
  556a5f:	89 45 a4             	mov    DWORD PTR [ebp-0x5c],eax
  556a62:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  556a65:	8b 86 34 08 00 00    	mov    eax,DWORD PTR [esi+0x834]
  556a6b:	89 45 a4             	mov    DWORD PTR [ebp-0x5c],eax
  556a6e:	2b c2                	sub    eax,edx
  556a70:	83 c0 fc             	add    eax,0xfffffffc
  556a73:	83 f8 1f             	cmp    eax,0x1f
  556a76:	0f 87 05 07 00 00    	ja     0x557181
  556a7c:	51                   	push   ecx
  556a7d:	52                   	push   edx
  556a7e:	e8 17 b6 ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  556a83:	83 c4 08             	add    esp,0x8
  556a86:	8b 8e 21 0a 00 00    	mov    ecx,DWORD PTR [esi+0xa21]
  556a8c:	8b 01                	mov    eax,DWORD PTR [ecx]
  556a8e:	8b 50 04             	mov    edx,DWORD PTR [eax+0x4]
  556a91:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  556a97:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  556a9d:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  556aa0:	ff d2                	call   edx
  556aa2:	8d 8e 50 08 00 00    	lea    ecx,[esi+0x850]
  556aa8:	6a 00                	push   0x0
  556aaa:	e8 13 de ea ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  556aaf:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  556ab3:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  556ab6:	89 86 1c 0a 00 00    	mov    DWORD PTR [esi+0xa1c],eax
  556abc:	8b be 21 0a 00 00    	mov    edi,DWORD PTR [esi+0xa21]
  556ac2:	83 c7 64             	add    edi,0x64
  556ac5:	83 7f 14 10          	cmp    DWORD PTR [edi+0x14],0x10
  556ac9:	72 02                	jb     0x556acd
  556acb:	8b 3f                	mov    edi,DWORD PTR [edi]
  556acd:	83 ec 10             	sub    esp,0x10
  556ad0:	0f 57 c0             	xorps  xmm0,xmm0
  556ad3:	8b c4                	mov    eax,esp
  556ad5:	89 a5 f0 fe ff ff    	mov    DWORD PTR [ebp-0x110],esp
  556adb:	89 85 0c ff ff ff    	mov    DWORD PTR [ebp-0xf4],eax
  556ae1:	6a 18                	push   0x18
  556ae3:	66 0f d6 40 08       	movq   QWORD PTR [eax+0x8],xmm0
  556ae8:	c6 00 03             	mov    BYTE PTR [eax],0x3
  556aeb:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  556af1:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  556af7:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  556afa:	e8 b7 c6 ea ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  556aff:	8b d0                	mov    edx,eax
  556b01:	8d 8e 10 0a 00 00    	lea    ecx,[esi+0xa10]
  556b07:	89 8e 14 0a 00 00    	mov    DWORD PTR [esi+0xa14],ecx
  556b0d:	83 c4 04             	add    esp,0x4
  556b10:	89 95 08 ff ff ff    	mov    DWORD PTR [ebp-0xf8],edx
  556b16:	89 96 18 0a 00 00    	mov    DWORD PTR [esi+0xa18],edx
  556b1c:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  556b20:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  556b23:	89 8e 1c 0a 00 00    	mov    DWORD PTR [esi+0xa1c],ecx
  556b29:	8b cf                	mov    ecx,edi
  556b2b:	c7 02 00 00 00 00    	mov    DWORD PTR [edx],0x0
  556b31:	c7 42 10 00 00 00 00 	mov    DWORD PTR [edx+0x10],0x0
  556b38:	c7 42 14 0f 00 00 00 	mov    DWORD PTR [edx+0x14],0xf
  556b3f:	8d 41 01             	lea    eax,[ecx+0x1]
  556b42:	89 85 00 ff ff ff    	mov    DWORD PTR [ebp-0x100],eax
  556b48:	8a 01                	mov    al,BYTE PTR [ecx]
  556b4a:	41                   	inc    ecx
  556b4b:	84 c0                	test   al,al
  556b4d:	75 f9                	jne    0x556b48
  556b4f:	2b 8d 00 ff ff ff    	sub    ecx,DWORD PTR [ebp-0x100]
  556b55:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  556b5b:	51                   	push   ecx
  556b5c:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  556b62:	8b ca                	mov    ecx,edx
  556b64:	57                   	push   edi
  556b65:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  556b68:	e8 aa d8 ea ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  556b6d:	8b 8d 0c ff ff ff    	mov    ecx,DWORD PTR [ebp-0xf4]
  556b73:	8b 85 08 ff ff ff    	mov    eax,DWORD PTR [ebp-0xf8]
  556b79:	89 41 08             	mov    DWORD PTR [ecx+0x8],eax
  556b7c:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  556b80:	8d 8e 50 08 00 00    	lea    ecx,[esi+0x850]
  556b86:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  556b89:	89 86 1c 0a 00 00    	mov    DWORD PTR [esi+0xa1c],eax
  556b8f:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  556b95:	68 c4 4d 6c 00       	push   0x6c4dc4 ; ["name"]
  556b9a:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  556b9d:	e8 3c cb ea ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  556ba2:	8b c8                	mov    ecx,eax
  556ba4:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  556ba8:	e8 d8 d8 ea ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  556bad:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  556bb3:	8d 8e 50 08 00 00    	lea    ecx,[esi+0x850]
  556bb9:	6a 00                	push   0x0
  556bbb:	6a 00                	push   0x0
  556bbd:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  556bc3:	6a 20                	push   0x20
  556bc5:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  556bc8:	8d 86 60 08 00 00    	lea    eax,[esi+0x860]
  556bce:	6a ff                	push   0xffffffff
  556bd0:	50                   	push   eax
  556bd1:	e8 48 1c eb ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  556bd6:	89 85 08 ff ff ff    	mov    DWORD PTR [ebp-0xf8],eax
  556bdc:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  556be0:	8b 4d fc             	mov    ecx,DWORD PTR [ebp-0x4]
  556be3:	89 8e 1c 0a 00 00    	mov    DWORD PTR [esi+0xa1c],ecx
  556be9:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  556bed:	72 08                	jb     0x556bf7
  556bef:	8b 00                	mov    eax,DWORD PTR [eax]
  556bf1:	89 85 08 ff ff ff    	mov    DWORD PTR [ebp-0xf8],eax
  556bf7:	8b be 21 0a 00 00    	mov    edi,DWORD PTR [esi+0xa21]
  556bfd:	83 c7 1c             	add    edi,0x1c
  556c00:	83 7f 14 10          	cmp    DWORD PTR [edi+0x14],0x10
  556c04:	72 02                	jb     0x556c08
  556c06:	8b 3f                	mov    edi,DWORD PTR [edi]
  556c08:	6a 5c                	push   0x5c
  556c0a:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  556c0f:	e8 52 1b 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  556c14:	83 c4 08             	add    esp,0x8
  556c17:	85 c0                	test   eax,eax
  556c19:	74 14                	je     0x556c2f
  556c1b:	6a 5c                	push   0x5c
  556c1d:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  556c22:	e8 3f 1b 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  556c27:	83 c4 08             	add    esp,0x8
  556c2a:	8d 50 01             	lea    edx,[eax+0x1]
  556c2d:	eb 05                	jmp    0x556c34
  556c2f:	ba 38 81 6d 00       	mov    edx,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  556c34:	ff b5 08 ff ff ff    	push   DWORD PTR [ebp-0xf8]
  556c3a:	8d 8e 78 08 00 00    	lea    ecx,[esi+0x878]
  556c40:	c7 01 02 00 00 00    	mov    DWORD PTR [ecx],0x2
  556c46:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  556c4c:	57                   	push   edi
  556c4d:	68 2c 83 6d 00       	push   0x6d832c ; ["BtFarawayDevice::preConnect"]
  556c52:	6a 51                	push   0x51
  556c54:	52                   	push   edx
  556c55:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  556c5b:	68 d0 83 6d 00       	push   0x6d83d0 ; ["[ConntctionModule][%s:%d][%s]: $$[Statistical][preconnectionspeed][bt][node0][%s]$$-$$$%s$$$\n"]
  556c60:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  556c63:	8d 86 7c 08 00 00    	lea    eax,[esi+0x87c]
  556c69:	51                   	push   ecx
  556c6a:	50                   	push   eax
  556c6b:	e8 99 03 eb ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  556c70:	8b 86 90 08 00 00    	mov    eax,DWORD PTR [esi+0x890]
  556c76:	83 c4 20             	add    esp,0x20
  556c79:	89 45 a0             	mov    DWORD PTR [ebp-0x60],eax
  556c7c:	83 f8 10             	cmp    eax,0x10
  556c7f:	72 49                	jb     0x556cca
  556c81:	8b 86 90 08 00 00    	mov    eax,DWORD PTR [esi+0x890]
  556c87:	89 45 a0             	mov    DWORD PTR [ebp-0x60],eax
  556c8a:	8b 96 7c 08 00 00    	mov    edx,DWORD PTR [esi+0x87c]
  556c90:	89 55 8c             	mov    DWORD PTR [ebp-0x74],edx
  556c93:	8d 48 01             	lea    ecx,[eax+0x1]
  556c96:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  556c9c:	72 22                	jb     0x556cc0
  556c9e:	8b 86 7c 08 00 00    	mov    eax,DWORD PTR [esi+0x87c]
  556ca4:	83 c1 23             	add    ecx,0x23
  556ca7:	89 45 8c             	mov    DWORD PTR [ebp-0x74],eax
  556caa:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  556cad:	8b 86 7c 08 00 00    	mov    eax,DWORD PTR [esi+0x87c]
  556cb3:	89 45 8c             	mov    DWORD PTR [ebp-0x74],eax
  556cb6:	2b c2                	sub    eax,edx
  556cb8:	83 c0 fc             	add    eax,0xfffffffc
  556cbb:	83 f8 1f             	cmp    eax,0x1f
  556cbe:	77 6d                	ja     0x556d2d
  556cc0:	51                   	push   ecx
  556cc1:	52                   	push   edx
  556cc2:	e8 d3 b3 ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  556cc7:	83 c4 08             	add    esp,0x8
  556cca:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  556cce:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  556cd1:	89 86 1c 0a 00 00    	mov    DWORD PTR [esi+0xa1c],eax
  556cd7:	8b 86 74 08 00 00    	mov    eax,DWORD PTR [esi+0x874]
  556cdd:	89 45 88             	mov    DWORD PTR [ebp-0x78],eax
  556ce0:	83 f8 10             	cmp    eax,0x10
  556ce3:	72 58                	jb     0x556d3d
  556ce5:	8b 86 74 08 00 00    	mov    eax,DWORD PTR [esi+0x874]
  556ceb:	89 45 88             	mov    DWORD PTR [ebp-0x78],eax
  556cee:	8b 96 60 08 00 00    	mov    edx,DWORD PTR [esi+0x860]
  556cf4:	89 95 74 ff ff ff    	mov    DWORD PTR [ebp-0x8c],edx
  556cfa:	8d 48 01             	lea    ecx,[eax+0x1]
  556cfd:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  556d03:	72 2e                	jb     0x556d33
  556d05:	8b 86 60 08 00 00    	mov    eax,DWORD PTR [esi+0x860]
  556d0b:	83 c1 23             	add    ecx,0x23
  556d0e:	89 85 74 ff ff ff    	mov    DWORD PTR [ebp-0x8c],eax
  556d14:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  556d17:	8b 86 60 08 00 00    	mov    eax,DWORD PTR [esi+0x860]
  556d1d:	89 85 74 ff ff ff    	mov    DWORD PTR [ebp-0x8c],eax
  556d23:	2b c2                	sub    eax,edx
  556d25:	83 c0 fc             	add    eax,0xfffffffc
  556d28:	83 f8 1f             	cmp    eax,0x1f
  556d2b:	76 06                	jbe    0x556d33
  556d2d:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  556d33:	51                   	push   ecx
  556d34:	52                   	push   edx
  556d35:	e8 60 b3 ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  556d3a:	83 c4 08             	add    esp,0x8
  556d3d:	8b be 21 0a 00 00    	mov    edi,DWORD PTR [esi+0xa21]
  556d43:	8b cf                	mov    ecx,edi
  556d45:	89 bd 0c ff ff ff    	mov    DWORD PTR [ebp-0xf4],edi
  556d4b:	8b 07                	mov    eax,DWORD PTR [edi]
  556d4d:	8b 50 08             	mov    edx,DWORD PTR [eax+0x8]
  556d50:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  556d56:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  556d5c:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  556d5f:	ff d2                	call   edx
  556d61:	8a c8                	mov    cl,al
  556d63:	88 4e 08             	mov    BYTE PTR [esi+0x8],cl
  556d66:	81 c6 94 08 00 00    	add    esi,0x894
  556d6c:	8b 07                	mov    eax,DWORD PTR [edi]
  556d6e:	6a 0f                	push   0xf
  556d70:	68 40 84 6d 00       	push   0x6d8440 ; ["CONNECT_ADDRESS"]
  556d75:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  556d7b:	8b 78 7c             	mov    edi,DWORD PTR [eax+0x7c]
  556d7e:	8b 85 f8 fe ff ff    	mov    eax,DWORD PTR [ebp-0x108]
  556d84:	56                   	push   esi
  556d85:	c7 80 a8 08 00 00 0f 	mov    DWORD PTR [eax+0x8a8],0xf
  556d8f:	c6 80 94 08 00 00 00 	mov    BYTE PTR [eax+0x894],0x0
  556d96:	c7 80 a4 08 00 00 0f 	mov    DWORD PTR [eax+0x8a4],0xf
  556da0:	e8 eb 19 11 00       	call   0x668790 ; ["call resolved=0x668790 "]
  556da5:	8b 95 f8 fe ff ff    	mov    edx,DWORD PTR [ebp-0x108]
  556dab:	83 c4 0c             	add    esp,0xc
  556dae:	c6 82 a3 08 00 00 00 	mov    BYTE PTR [edx+0x8a3],0x0
  556db5:	8b 8d 0c ff ff ff    	mov    ecx,DWORD PTR [ebp-0xf4]
  556dbb:	c6 45 fc 08          	mov    BYTE PTR [ebp-0x4],0x8
  556dbf:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  556dc2:	56                   	push   esi
  556dc3:	8b b5 f8 fe ff ff    	mov    esi,DWORD PTR [ebp-0x108]
  556dc9:	89 82 1c 0a 00 00    	mov    DWORD PTR [edx+0xa1c],eax
  556dcf:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  556dd5:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  556dd8:	8d 46 08             	lea    eax,[esi+0x8]
  556ddb:	50                   	push   eax
  556ddc:	ff d7                	call   edi
  556dde:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  556de2:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  556de5:	89 86 1c 0a 00 00    	mov    DWORD PTR [esi+0xa1c],eax
  556deb:	8b 86 a8 08 00 00    	mov    eax,DWORD PTR [esi+0x8a8]
  556df1:	89 85 70 ff ff ff    	mov    DWORD PTR [ebp-0x90],eax
  556df7:	83 f8 10             	cmp    eax,0x10
  556dfa:	72 5b                	jb     0x556e57
  556dfc:	8b 86 a8 08 00 00    	mov    eax,DWORD PTR [esi+0x8a8]
  556e02:	89 85 70 ff ff ff    	mov    DWORD PTR [ebp-0x90],eax
  556e08:	8b 96 94 08 00 00    	mov    edx,DWORD PTR [esi+0x894]
  556e0e:	89 95 5c ff ff ff    	mov    DWORD PTR [ebp-0xa4],edx
  556e14:	8d 48 01             	lea    ecx,[eax+0x1]
  556e17:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  556e1d:	72 2e                	jb     0x556e4d
  556e1f:	8b 86 94 08 00 00    	mov    eax,DWORD PTR [esi+0x894]
  556e25:	83 c1 23             	add    ecx,0x23
  556e28:	89 85 5c ff ff ff    	mov    DWORD PTR [ebp-0xa4],eax
  556e2e:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  556e31:	8b 86 94 08 00 00    	mov    eax,DWORD PTR [esi+0x894]
  556e37:	89 85 5c ff ff ff    	mov    DWORD PTR [ebp-0xa4],eax
  556e3d:	2b c2                	sub    eax,edx
  556e3f:	83 c0 fc             	add    eax,0xfffffffc
  556e42:	83 f8 1f             	cmp    eax,0x1f
  556e45:	76 06                	jbe    0x556e4d
  556e47:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  556e4d:	51                   	push   ecx
  556e4e:	52                   	push   edx
  556e4f:	e8 46 b2 ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  556e54:	83 c4 08             	add    esp,0x8
  556e57:	80 7e 08 00          	cmp    BYTE PTR [esi+0x8],0x0
  556e5b:	0f 84 36 08 00 00    	je     0x557697
  556e61:	8b be 21 0a 00 00    	mov    edi,DWORD PTR [esi+0xa21]
  556e67:	83 c7 1c             	add    edi,0x1c
  556e6a:	83 7f 14 10          	cmp    DWORD PTR [edi+0x14],0x10
  556e6e:	72 02                	jb     0x556e72
  556e70:	8b 3f                	mov    edi,DWORD PTR [edi]
  556e72:	6a 5c                	push   0x5c
  556e74:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  556e79:	e8 e8 18 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  556e7e:	83 c4 08             	add    esp,0x8
  556e81:	85 c0                	test   eax,eax
  556e83:	74 14                	je     0x556e99
  556e85:	6a 5c                	push   0x5c
  556e87:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  556e8c:	e8 d5 18 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  556e91:	83 c4 08             	add    esp,0x8
  556e94:	8d 50 01             	lea    edx,[eax+0x1]
  556e97:	eb 05                	jmp    0x556e9e
  556e99:	ba 38 81 6d 00       	mov    edx,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  556e9e:	57                   	push   edi
  556e9f:	68 2c 83 6d 00       	push   0x6d832c ; ["BtFarawayDevice::preConnect"]
  556ea4:	6a 58                	push   0x58
  556ea6:	8d 8e ac 08 00 00    	lea    ecx,[esi+0x8ac]
  556eac:	c7 01 02 00 00 00    	mov    DWORD PTR [ecx],0x2
  556eb2:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  556eb8:	52                   	push   edx
  556eb9:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  556ebf:	68 58 84 6d 00       	push   0x6d8458 ; ["[ConntctionModule][%s:%d][%s]: $$[Statistical][preconnectionspeed][bt][node1][%s]$$\n"]
  556ec4:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  556ec7:	8d 86 b0 08 00 00    	lea    eax,[esi+0x8b0]
  556ecd:	51                   	push   ecx
  556ece:	50                   	push   eax
  556ecf:	e8 35 01 eb ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  556ed4:	8b 86 c4 08 00 00    	mov    eax,DWORD PTR [esi+0x8c4]
  556eda:	83 c4 1c             	add    esp,0x1c
  556edd:	89 85 58 ff ff ff    	mov    DWORD PTR [ebp-0xa8],eax
  556ee3:	83 f8 10             	cmp    eax,0x10
  556ee6:	72 59                	jb     0x556f41
  556ee8:	8b 86 c4 08 00 00    	mov    eax,DWORD PTR [esi+0x8c4]
  556eee:	89 85 58 ff ff ff    	mov    DWORD PTR [ebp-0xa8],eax
  556ef4:	8b 96 b0 08 00 00    	mov    edx,DWORD PTR [esi+0x8b0]
  556efa:	89 95 44 ff ff ff    	mov    DWORD PTR [ebp-0xbc],edx
  556f00:	8d 48 01             	lea    ecx,[eax+0x1]
  556f03:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  556f09:	72 2c                	jb     0x556f37
  556f0b:	8b 86 b0 08 00 00    	mov    eax,DWORD PTR [esi+0x8b0]
  556f11:	83 c1 23             	add    ecx,0x23
  556f14:	89 85 44 ff ff ff    	mov    DWORD PTR [ebp-0xbc],eax
  556f1a:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  556f1d:	8b 86 b0 08 00 00    	mov    eax,DWORD PTR [esi+0x8b0]
  556f23:	89 85 44 ff ff ff    	mov    DWORD PTR [ebp-0xbc],eax
  556f29:	2b c2                	sub    eax,edx
  556f2b:	83 c0 fc             	add    eax,0xfffffffc
  556f2e:	83 f8 1f             	cmp    eax,0x1f
  556f31:	0f 87 4a 02 00 00    	ja     0x557181
  556f37:	51                   	push   ecx
  556f38:	52                   	push   edx
  556f39:	e8 5c b1 ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  556f3e:	83 c4 08             	add    esp,0x8
  556f41:	8b be 21 0a 00 00    	mov    edi,DWORD PTR [esi+0xa21]
  556f47:	8d 4e 24             	lea    ecx,[esi+0x24]
  556f4a:	51                   	push   ecx
  556f4b:	8b cf                	mov    ecx,edi
  556f4d:	8b 07                	mov    eax,DWORD PTR [edi]
  556f4f:	8b 50 5c             	mov    edx,DWORD PTR [eax+0x5c]
  556f52:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  556f58:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  556f5e:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  556f61:	8d 46 30             	lea    eax,[esi+0x30]
  556f64:	50                   	push   eax
  556f65:	ff d2                	call   edx
  556f67:	8b 07                	mov    eax,DWORD PTR [edi]
  556f69:	8b cf                	mov    ecx,edi
  556f6b:	8b 50 1c             	mov    edx,DWORD PTR [eax+0x1c]
  556f6e:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  556f74:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  556f7a:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  556f7d:	8d 46 24             	lea    eax,[esi+0x24]
  556f80:	50                   	push   eax
  556f81:	8d 46 30             	lea    eax,[esi+0x30]
  556f84:	50                   	push   eax
  556f85:	ff d2                	call   edx
  556f87:	8a c8                	mov    cl,al
  556f89:	88 4e 08             	mov    BYTE PTR [esi+0x8],cl
  556f8c:	8d 8e c8 08 00 00    	lea    ecx,[esi+0x8c8]
  556f92:	8b 07                	mov    eax,DWORD PTR [edi]
  556f94:	c7 86 c8 08 00 00 00 	mov    DWORD PTR [esi+0x8c8],0x0
  556f9e:	c7 86 d8 08 00 00 00 	mov    DWORD PTR [esi+0x8d8],0x0
  556fa8:	c7 86 dc 08 00 00 0f 	mov    DWORD PTR [esi+0x8dc],0xf
  556fb2:	8b 40 7c             	mov    eax,DWORD PTR [eax+0x7c]
  556fb5:	89 85 0c ff ff ff    	mov    DWORD PTR [ebp-0xf4],eax
  556fbb:	c6 86 c8 08 00 00 00 	mov    BYTE PTR [esi+0x8c8],0x0
  556fc2:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  556fc8:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  556fce:	6a 20                	push   0x20
  556fd0:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  556fd3:	e8 d3 a9 ea ff       	call   0x4019ab ; ["call resolved=0x480060 "]
  556fd8:	0f 10 05 c0 84 6d 00 	movups xmm0,XMMWORD PTR ds:0x6d84c0 ; ["SEND_DEVICE_INFO"]
  556fdf:	c7 86 d8 08 00 00 10 	mov    DWORD PTR [esi+0x8d8],0x10
  556fe9:	8d 96 c8 08 00 00    	lea    edx,[esi+0x8c8]
  556fef:	c7 86 dc 08 00 00 1f 	mov    DWORD PTR [esi+0x8dc],0x1f
  556ff9:	0f 11 00             	movups XMMWORD PTR [eax],xmm0
  556ffc:	c6 40 10 00          	mov    BYTE PTR [eax+0x10],0x0
  557000:	89 02                	mov    DWORD PTR [edx],eax
  557002:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  557006:	8b cf                	mov    ecx,edi
  557008:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  55700b:	89 86 1c 0a 00 00    	mov    DWORD PTR [esi+0xa1c],eax
  557011:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  557017:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  55701a:	8d 46 08             	lea    eax,[esi+0x8]
  55701d:	52                   	push   edx
  55701e:	50                   	push   eax
  55701f:	ff 95 0c ff ff ff    	call   DWORD PTR [ebp-0xf4]
  557025:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  557029:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  55702c:	89 86 1c 0a 00 00    	mov    DWORD PTR [esi+0xa1c],eax
  557032:	8b 86 dc 08 00 00    	mov    eax,DWORD PTR [esi+0x8dc]
  557038:	89 85 40 ff ff ff    	mov    DWORD PTR [ebp-0xc0],eax
  55703e:	83 f8 10             	cmp    eax,0x10
  557041:	72 5b                	jb     0x55709e
  557043:	8b 86 dc 08 00 00    	mov    eax,DWORD PTR [esi+0x8dc]
  557049:	89 85 40 ff ff ff    	mov    DWORD PTR [ebp-0xc0],eax
  55704f:	8b 96 c8 08 00 00    	mov    edx,DWORD PTR [esi+0x8c8]
  557055:	89 95 2c ff ff ff    	mov    DWORD PTR [ebp-0xd4],edx
  55705b:	8d 48 01             	lea    ecx,[eax+0x1]
  55705e:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  557064:	72 2e                	jb     0x557094
  557066:	8b 86 c8 08 00 00    	mov    eax,DWORD PTR [esi+0x8c8]
  55706c:	83 c1 23             	add    ecx,0x23
  55706f:	89 85 2c ff ff ff    	mov    DWORD PTR [ebp-0xd4],eax
  557075:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  557078:	8b 86 c8 08 00 00    	mov    eax,DWORD PTR [esi+0x8c8]
  55707e:	89 85 2c ff ff ff    	mov    DWORD PTR [ebp-0xd4],eax
  557084:	2b c2                	sub    eax,edx
  557086:	83 c0 fc             	add    eax,0xfffffffc
  557089:	83 f8 1f             	cmp    eax,0x1f
  55708c:	76 06                	jbe    0x557094
  55708e:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  557094:	51                   	push   ecx
  557095:	52                   	push   edx
  557096:	e8 ff af ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  55709b:	83 c4 08             	add    esp,0x8
  55709e:	8b be 21 0a 00 00    	mov    edi,DWORD PTR [esi+0xa21]
  5570a4:	83 7f 30 10          	cmp    DWORD PTR [edi+0x30],0x10
  5570a8:	8d 47 1c             	lea    eax,[edi+0x1c]
  5570ab:	89 85 08 ff ff ff    	mov    DWORD PTR [ebp-0xf8],eax
  5570b1:	72 08                	jb     0x5570bb
  5570b3:	8b 00                	mov    eax,DWORD PTR [eax]
  5570b5:	89 85 08 ff ff ff    	mov    DWORD PTR [ebp-0xf8],eax
  5570bb:	6a 5c                	push   0x5c
  5570bd:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5570c2:	e8 9f 16 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5570c7:	83 c4 08             	add    esp,0x8
  5570ca:	85 c0                	test   eax,eax
  5570cc:	74 14                	je     0x5570e2
  5570ce:	6a 5c                	push   0x5c
  5570d0:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5570d5:	e8 8c 16 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5570da:	83 c4 08             	add    esp,0x8
  5570dd:	8d 50 01             	lea    edx,[eax+0x1]
  5570e0:	eb 05                	jmp    0x5570e7
  5570e2:	ba 38 81 6d 00       	mov    edx,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  5570e7:	ff b5 08 ff ff ff    	push   DWORD PTR [ebp-0xf8]
  5570ed:	8d 8e e0 08 00 00    	lea    ecx,[esi+0x8e0]
  5570f3:	c7 01 02 00 00 00    	mov    DWORD PTR [ecx],0x2
  5570f9:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  5570ff:	68 2c 83 6d 00       	push   0x6d832c ; ["BtFarawayDevice::preConnect"]
  557104:	6a 5d                	push   0x5d
  557106:	52                   	push   edx
  557107:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  55710d:	68 d8 84 6d 00       	push   0x6d84d8 ; ["[ConntctionModule][%s:%d][%s]: $$[Statistical][preconnectionspeed][bt][node2][%s]$$\n"]
  557112:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  557115:	8d 86 e4 08 00 00    	lea    eax,[esi+0x8e4]
  55711b:	51                   	push   ecx
  55711c:	50                   	push   eax
  55711d:	e8 e7 fe ea ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  557122:	8b 86 f8 08 00 00    	mov    eax,DWORD PTR [esi+0x8f8]
  557128:	83 c4 1c             	add    esp,0x1c
  55712b:	89 85 28 ff ff ff    	mov    DWORD PTR [ebp-0xd8],eax
  557131:	83 f8 10             	cmp    eax,0x10
  557134:	72 5b                	jb     0x557191
  557136:	8b 86 f8 08 00 00    	mov    eax,DWORD PTR [esi+0x8f8]
  55713c:	89 85 28 ff ff ff    	mov    DWORD PTR [ebp-0xd8],eax
  557142:	8b 96 e4 08 00 00    	mov    edx,DWORD PTR [esi+0x8e4]
  557148:	89 95 14 ff ff ff    	mov    DWORD PTR [ebp-0xec],edx
  55714e:	8d 48 01             	lea    ecx,[eax+0x1]
  557151:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  557157:	72 2e                	jb     0x557187
  557159:	8b 86 e4 08 00 00    	mov    eax,DWORD PTR [esi+0x8e4]
  55715f:	83 c1 23             	add    ecx,0x23
  557162:	89 85 14 ff ff ff    	mov    DWORD PTR [ebp-0xec],eax
  557168:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  55716b:	8b 86 e4 08 00 00    	mov    eax,DWORD PTR [esi+0x8e4]
  557171:	89 85 14 ff ff ff    	mov    DWORD PTR [ebp-0xec],eax
  557177:	2b c2                	sub    eax,edx
  557179:	83 c0 fc             	add    eax,0xfffffffc
  55717c:	83 f8 1f             	cmp    eax,0x1f
  55717f:	76 06                	jbe    0x557187
  557181:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  557187:	51                   	push   ecx
  557188:	52                   	push   edx
  557189:	e8 0c af ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  55718e:	83 c4 08             	add    esp,0x8
  557191:	80 7e 08 00          	cmp    BYTE PTR [esi+0x8],0x0
  557195:	0f 84 fc 04 00 00    	je     0x557697
  55719b:	8b 07                	mov    eax,DWORD PTR [edi]
  55719d:	8d 8e fc 08 00 00    	lea    ecx,[esi+0x8fc]
  5571a3:	c7 01 03 00 00 00    	mov    DWORD PTR [ecx],0x3
  5571a9:	8b 50 24             	mov    edx,DWORD PTR [eax+0x24]
  5571ac:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  5571b2:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  5571b8:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  5571bb:	8d 46 28             	lea    eax,[esi+0x28]
  5571be:	50                   	push   eax
  5571bf:	8d 86 30 04 00 00    	lea    eax,[esi+0x430]
  5571c5:	50                   	push   eax
  5571c6:	51                   	push   ecx
  5571c7:	8b cf                	mov    ecx,edi
  5571c9:	ff d2                	call   edx
  5571cb:	88 46 08             	mov    BYTE PTR [esi+0x8],al
  5571ce:	84 c0                	test   al,al
  5571d0:	8b 07                	mov    eax,DWORD PTR [edi]
  5571d2:	0f 85 0a 01 00 00    	jne    0x5572e2
  5571d8:	8b 40 7c             	mov    eax,DWORD PTR [eax+0x7c]
  5571db:	8d 8e 00 09 00 00    	lea    ecx,[esi+0x900]
  5571e1:	c7 86 00 09 00 00 00 	mov    DWORD PTR [esi+0x900],0x0
  5571eb:	c7 86 10 09 00 00 00 	mov    DWORD PTR [esi+0x910],0x0
  5571f5:	c7 86 14 09 00 00 0f 	mov    DWORD PTR [esi+0x914],0xf
  5571ff:	89 85 0c ff ff ff    	mov    DWORD PTR [ebp-0xf4],eax
  557205:	c6 86 00 09 00 00 00 	mov    BYTE PTR [esi+0x900],0x0
  55720c:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  557212:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  557218:	6a 20                	push   0x20
  55721a:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  55721d:	e8 89 a7 ea ff       	call   0x4019ab ; ["call resolved=0x480060 "]
  557222:	0f 10 05 40 85 6d 00 	movups xmm0,XMMWORD PTR ds:0x6d8540 ; ["RECV_DEVICE_INFO"]
  557229:	c7 86 10 09 00 00 10 	mov    DWORD PTR [esi+0x910],0x10
  557233:	8d 8e 00 09 00 00    	lea    ecx,[esi+0x900]
  557239:	c7 86 14 09 00 00 1f 	mov    DWORD PTR [esi+0x914],0x1f
  557243:	0f 11 00             	movups XMMWORD PTR [eax],xmm0
  557246:	c6 40 10 00          	mov    BYTE PTR [eax+0x10],0x0
  55724a:	89 01                	mov    DWORD PTR [ecx],eax
  55724c:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  557250:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  557253:	89 86 1c 0a 00 00    	mov    DWORD PTR [esi+0xa1c],eax
  557259:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  55725f:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  557262:	8d 46 08             	lea    eax,[esi+0x8]
  557265:	51                   	push   ecx
  557266:	50                   	push   eax
  557267:	8b cf                	mov    ecx,edi
  557269:	ff 95 0c ff ff ff    	call   DWORD PTR [ebp-0xf4]
  55726f:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  557273:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  557276:	89 86 1c 0a 00 00    	mov    DWORD PTR [esi+0xa1c],eax
  55727c:	8b 86 14 09 00 00    	mov    eax,DWORD PTR [esi+0x914]
  557282:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  557285:	83 f8 10             	cmp    eax,0x10
  557288:	0f 82 09 04 00 00    	jb     0x557697
  55728e:	8b 86 14 09 00 00    	mov    eax,DWORD PTR [esi+0x914]
  557294:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  557297:	8b 96 00 09 00 00    	mov    edx,DWORD PTR [esi+0x900]
  55729d:	89 55 d4             	mov    DWORD PTR [ebp-0x2c],edx
  5572a0:	8d 48 01             	lea    ecx,[eax+0x1]
  5572a3:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  5572a9:	72 28                	jb     0x5572d3
  5572ab:	8b 86 00 09 00 00    	mov    eax,DWORD PTR [esi+0x900]
  5572b1:	83 c1 23             	add    ecx,0x23
  5572b4:	89 45 d4             	mov    DWORD PTR [ebp-0x2c],eax
  5572b7:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  5572ba:	8b 86 00 09 00 00    	mov    eax,DWORD PTR [esi+0x900]
  5572c0:	89 45 d4             	mov    DWORD PTR [ebp-0x2c],eax
  5572c3:	2b c2                	sub    eax,edx
  5572c5:	83 c0 fc             	add    eax,0xfffffffc
  5572c8:	83 f8 1f             	cmp    eax,0x1f
  5572cb:	76 06                	jbe    0x5572d3
  5572cd:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5572d3:	51                   	push   ecx
  5572d4:	52                   	push   edx
  5572d5:	e8 c0 ad ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5572da:	83 c4 08             	add    esp,0x8
  5572dd:	e9 b5 03 00 00       	jmp    0x557697
  5572e2:	8b 50 60             	mov    edx,DWORD PTR [eax+0x60]
  5572e5:	8b cf                	mov    ecx,edi
  5572e7:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  5572ed:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  5572f3:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  5572f6:	8d 86 30 04 00 00    	lea    eax,[esi+0x430]
  5572fc:	50                   	push   eax
  5572fd:	ff d2                	call   edx
  5572ff:	88 46 08             	mov    BYTE PTR [esi+0x8],al
  557302:	84 c0                	test   al,al
  557304:	0f 85 e8 00 00 00    	jne    0x5573f2
  55730a:	8b 07                	mov    eax,DWORD PTR [edi]
  55730c:	8d 8e 18 09 00 00    	lea    ecx,[esi+0x918]
  557312:	c7 01 03 00 00 00    	mov    DWORD PTR [ecx],0x3
  557318:	8b 50 24             	mov    edx,DWORD PTR [eax+0x24]
  55731b:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  557321:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  557327:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  55732a:	8d 46 28             	lea    eax,[esi+0x28]
  55732d:	50                   	push   eax
  55732e:	8d 86 30 04 00 00    	lea    eax,[esi+0x430]
  557334:	50                   	push   eax
  557335:	51                   	push   ecx
  557336:	8b cf                	mov    ecx,edi
  557338:	ff d2                	call   edx
  55733a:	88 46 08             	mov    BYTE PTR [esi+0x8],al
  55733d:	84 c0                	test   al,al
  55733f:	0f 85 ad 00 00 00    	jne    0x5573f2
  557345:	8b 07                	mov    eax,DWORD PTR [edi]
  557347:	8d 8e 1c 09 00 00    	lea    ecx,[esi+0x91c]
  55734d:	68 40 85 6d 00       	push   0x6d8540 ; ["RECV_DEVICE_INFO"]
  557352:	8b 40 7c             	mov    eax,DWORD PTR [eax+0x7c]
  557355:	89 85 0c ff ff ff    	mov    DWORD PTR [ebp-0xf4],eax
  55735b:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  557361:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  557367:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  55736a:	e8 b1 b3 ea ff       	call   0x402720 ; ["call resolved=0x46a4f0 "]
  55736f:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  557373:	8b cf                	mov    ecx,edi
  557375:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  557378:	89 86 1c 0a 00 00    	mov    DWORD PTR [esi+0xa1c],eax
  55737e:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  557384:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  557387:	8d 86 1c 09 00 00    	lea    eax,[esi+0x91c]
  55738d:	50                   	push   eax
  55738e:	8d 46 08             	lea    eax,[esi+0x8]
  557391:	50                   	push   eax
  557392:	ff 95 0c ff ff ff    	call   DWORD PTR [ebp-0xf4]
  557398:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  55739c:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  55739f:	89 86 1c 0a 00 00    	mov    DWORD PTR [esi+0xa1c],eax
  5573a5:	8b 86 30 09 00 00    	mov    eax,DWORD PTR [esi+0x930]
  5573ab:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  5573ae:	83 f8 10             	cmp    eax,0x10
  5573b1:	0f 82 e0 02 00 00    	jb     0x557697
  5573b7:	8b 86 30 09 00 00    	mov    eax,DWORD PTR [esi+0x930]
  5573bd:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  5573c0:	8b 96 1c 09 00 00    	mov    edx,DWORD PTR [esi+0x91c]
  5573c6:	89 55 d4             	mov    DWORD PTR [ebp-0x2c],edx
  5573c9:	8d 48 01             	lea    ecx,[eax+0x1]
  5573cc:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  5573d2:	0f 82 fb fe ff ff    	jb     0x5572d3
  5573d8:	8b 86 1c 09 00 00    	mov    eax,DWORD PTR [esi+0x91c]
  5573de:	83 c1 23             	add    ecx,0x23
  5573e1:	89 45 d4             	mov    DWORD PTR [ebp-0x2c],eax
  5573e4:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  5573e7:	8b 86 1c 09 00 00    	mov    eax,DWORD PTR [esi+0x91c]
  5573ed:	e9 ce fe ff ff       	jmp    0x5572c0
  5573f2:	8d 4f 1c             	lea    ecx,[edi+0x1c]
  5573f5:	e8 5d 08 eb ff       	call   0x407c57 ; ["call resolved=0x4816c0 "]
  5573fa:	6a 5c                	push   0x5c
  5573fc:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  557401:	89 85 0c ff ff ff    	mov    DWORD PTR [ebp-0xf4],eax
  557407:	e8 5a 13 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  55740c:	83 c4 08             	add    esp,0x8
  55740f:	85 c0                	test   eax,eax
  557411:	74 14                	je     0x557427
  557413:	6a 5c                	push   0x5c
  557415:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  55741a:	e8 47 13 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  55741f:	83 c4 08             	add    esp,0x8
  557422:	8d 48 01             	lea    ecx,[eax+0x1]
  557425:	eb 05                	jmp    0x55742c
  557427:	b9 38 81 6d 00       	mov    ecx,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  55742c:	ff b5 0c ff ff ff    	push   DWORD PTR [ebp-0xf4]
  557432:	8d 96 34 09 00 00    	lea    edx,[esi+0x934]
  557438:	c7 02 02 00 00 00    	mov    DWORD PTR [edx],0x2
  55743e:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  557444:	68 2c 83 6d 00       	push   0x6d832c ; ["BtFarawayDevice::preConnect"]
  557449:	6a 74                	push   0x74
  55744b:	51                   	push   ecx
  55744c:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  557452:	68 58 85 6d 00       	push   0x6d8558 ; ["[ConntctionModule][%s:%d][%s]: $$[Statistical][preconnectionspeed][bt][node3][%s]$$\n"]
  557457:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  55745a:	8d 86 38 09 00 00    	lea    eax,[esi+0x938]
  557460:	52                   	push   edx
  557461:	50                   	push   eax
  557462:	e8 a2 fb ea ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  557467:	83 c4 1c             	add    esp,0x1c
  55746a:	8d 8e 38 09 00 00    	lea    ecx,[esi+0x938]
  557470:	e8 8e c5 ea ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  557475:	8b 07                	mov    eax,DWORD PTR [edi]
  557477:	8b cf                	mov    ecx,edi
  557479:	8b 50 60             	mov    edx,DWORD PTR [eax+0x60]
  55747c:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  557482:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  557488:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  55748b:	8d 86 30 04 00 00    	lea    eax,[esi+0x430]
  557491:	50                   	push   eax
  557492:	ff d2                	call   edx
  557494:	8a c8                	mov    cl,al
  557496:	88 4e 08             	mov    BYTE PTR [esi+0x8],cl
  557499:	84 c9                	test   cl,cl
  55749b:	75 70                	jne    0x55750d
  55749d:	8b 07                	mov    eax,DWORD PTR [edi]
  55749f:	8d 8e 50 09 00 00    	lea    ecx,[esi+0x950]
  5574a5:	68 c0 85 6d 00       	push   0x6d85c0 ; ["PARSER_DEVICE_INFO"]
  5574aa:	8b 40 7c             	mov    eax,DWORD PTR [eax+0x7c]
  5574ad:	89 85 0c ff ff ff    	mov    DWORD PTR [ebp-0xf4],eax
  5574b3:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  5574b9:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  5574bf:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  5574c2:	e8 59 b2 ea ff       	call   0x402720 ; ["call resolved=0x46a4f0 "]
  5574c7:	c6 45 fc 0c          	mov    BYTE PTR [ebp-0x4],0xc
  5574cb:	8b cf                	mov    ecx,edi
  5574cd:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  5574d0:	89 86 1c 0a 00 00    	mov    DWORD PTR [esi+0xa1c],eax
  5574d6:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  5574dc:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  5574df:	8d 86 50 09 00 00    	lea    eax,[esi+0x950]
  5574e5:	50                   	push   eax
  5574e6:	8d 46 08             	lea    eax,[esi+0x8]
  5574e9:	50                   	push   eax
  5574ea:	ff 95 0c ff ff ff    	call   DWORD PTR [ebp-0xf4]
  5574f0:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  5574f4:	8d 8e 50 09 00 00    	lea    ecx,[esi+0x950]
  5574fa:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  5574fd:	89 86 1c 0a 00 00    	mov    DWORD PTR [esi+0xa1c],eax
  557503:	e8 fb c4 ea ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  557508:	e9 8a 01 00 00       	jmp    0x557697
  55750d:	8d 4f 1c             	lea    ecx,[edi+0x1c]
  557510:	e8 42 07 eb ff       	call   0x407c57 ; ["call resolved=0x4816c0 "]
  557515:	6a 5c                	push   0x5c
  557517:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  55751c:	89 85 0c ff ff ff    	mov    DWORD PTR [ebp-0xf4],eax
  557522:	e8 3f 12 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  557527:	83 c4 08             	add    esp,0x8
  55752a:	85 c0                	test   eax,eax
  55752c:	74 14                	je     0x557542
  55752e:	6a 5c                	push   0x5c
  557530:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  557535:	e8 2c 12 11 00       	call   0x668766 ; ["call resolved=0x668766 "]
  55753a:	83 c4 08             	add    esp,0x8
  55753d:	8d 48 01             	lea    ecx,[eax+0x1]
  557540:	eb 05                	jmp    0x557547
  557542:	b9 38 81 6d 00       	mov    ecx,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  557547:	ff b5 0c ff ff ff    	push   DWORD PTR [ebp-0xf4]
  55754d:	8d 96 68 09 00 00    	lea    edx,[esi+0x968]
  557553:	c7 02 02 00 00 00    	mov    DWORD PTR [edx],0x2
  557559:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  55755f:	68 2c 83 6d 00       	push   0x6d832c ; ["BtFarawayDevice::preConnect"]
  557564:	6a 7c                	push   0x7c
  557566:	51                   	push   ecx
  557567:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  55756d:	68 d8 85 6d 00       	push   0x6d85d8 ; ["[ConntctionModule][%s:%d][%s]: $$[Statistical][preconnectionspeed][bt][node4][%s]$$\n"]
  557572:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  557575:	8d 86 6c 09 00 00    	lea    eax,[esi+0x96c]
  55757b:	52                   	push   edx
  55757c:	50                   	push   eax
  55757d:	e8 87 fa ea ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  557582:	83 c4 1c             	add    esp,0x1c
  557585:	8d 8e 6c 09 00 00    	lea    ecx,[esi+0x96c]
  55758b:	e8 73 c4 ea ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  557590:	80 7e 08 00          	cmp    BYTE PTR [esi+0x8],0x0
  557594:	0f 84 fd 00 00 00    	je     0x557697
  55759a:	8b 07                	mov    eax,DWORD PTR [edi]
  55759c:	8d 8e 84 09 00 00    	lea    ecx,[esi+0x984]
  5575a2:	c6 01 01             	mov    BYTE PTR [ecx],0x1
  5575a5:	51                   	push   ecx
  5575a6:	8b cf                	mov    ecx,edi
  5575a8:	8b 50 70             	mov    edx,DWORD PTR [eax+0x70]
  5575ab:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  5575b1:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  5575b7:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  5575ba:	ff d2                	call   edx
  5575bc:	8d 96 90 09 00 00    	lea    edx,[esi+0x990]
  5575c2:	c7 86 94 09 00 00 b7 	mov    DWORD PTR [esi+0x994],0x4035b7
  5575cc:	8d 8e 94 09 00 00    	lea    ecx,[esi+0x994]
  5575d2:	89 3a                	mov    DWORD PTR [edx],edi
  5575d4:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  5575da:	52                   	push   edx
  5575db:	51                   	push   ecx
  5575dc:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  5575e2:	8d 8e 88 09 00 00    	lea    ecx,[esi+0x988]
  5575e8:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  5575eb:	e8 f6 f9 ea ff       	call   0x406fe6 ; ["call resolved=0x54c220 "]
  5575f0:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  5575f4:	8d 8e 88 09 00 00    	lea    ecx,[esi+0x988]
  5575fa:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  5575fd:	89 86 1c 0a 00 00    	mov    DWORD PTR [esi+0xa1c],eax
  557603:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  557609:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  55760c:	e8 ca e6 ea ff       	call   0x405cdb ; ["call resolved=0x554630 "]
  557611:	8b 86 21 0a 00 00    	mov    eax,DWORD PTR [esi+0xa21]
  557617:	8d 96 a0 09 00 00    	lea    edx,[esi+0x9a0]
  55761d:	8d 8e a4 09 00 00    	lea    ecx,[esi+0x9a4]
  557623:	89 02                	mov    DWORD PTR [edx],eax
  557625:	c7 01 2c 70 40 00    	mov    DWORD PTR [ecx],0x40702c
  55762b:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  557631:	52                   	push   edx
  557632:	51                   	push   ecx
  557633:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  557639:	8d 8e 98 09 00 00    	lea    ecx,[esi+0x998]
  55763f:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  557642:	e8 9f f9 ea ff       	call   0x406fe6 ; ["call resolved=0x54c220 "]
  557647:	c6 45 fc 0e          	mov    BYTE PTR [ebp-0x4],0xe
  55764b:	8d 8e 98 09 00 00    	lea    ecx,[esi+0x998]
  557651:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  557654:	89 86 1c 0a 00 00    	mov    DWORD PTR [esi+0xa1c],eax
  55765a:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  557660:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  557663:	e8 73 e6 ea ff       	call   0x405cdb ; ["call resolved=0x554630 "]
  557668:	8a 46 08             	mov    al,BYTE PTR [esi+0x8]
  55766b:	8d 8e 98 09 00 00    	lea    ecx,[esi+0x998]
  557671:	88 85 07 ff ff ff    	mov    BYTE PTR [ebp-0xf9],al
  557677:	88 46 fc             	mov    BYTE PTR [esi-0x4],al
  55767a:	e8 93 f5 ea ff       	call   0x406c12 ; ["call resolved=0x472600 "]
  55767f:	8d 8e 88 09 00 00    	lea    ecx,[esi+0x988]
  557685:	e8 88 f5 ea ff       	call   0x406c12 ; ["call resolved=0x472600 "]
  55768a:	8d 8e 50 08 00 00    	lea    ecx,[esi+0x850]
  557690:	e8 82 1d eb ff       	call   0x409417 ; ["call resolved=0x46f270 "]
  557695:	eb 7a                	jmp    0x557711
  557697:	8b 8e 21 0a 00 00    	mov    ecx,DWORD PTR [esi+0xa21]
  55769d:	8b 01                	mov    eax,DWORD PTR [ecx]
  55769f:	8b 50 28             	mov    edx,DWORD PTR [eax+0x28]
  5576a2:	8b 86 1c 0a 00 00    	mov    eax,DWORD PTR [esi+0xa1c]
  5576a8:	89 85 10 ff ff ff    	mov    DWORD PTR [ebp-0xf0],eax
  5576ae:	89 45 fc             	mov    DWORD PTR [ebp-0x4],eax
  5576b1:	ff d2                	call   edx
  5576b3:	8a 46 08             	mov    al,BYTE PTR [esi+0x8]
  5576b6:	8d 8e 50 08 00 00    	lea    ecx,[esi+0x850]
  5576bc:	88 85 07 ff ff ff    	mov    BYTE PTR [ebp-0xf9],al
  5576c2:	88 46 fc             	mov    BYTE PTR [esi-0x4],al
  5576c5:	e8 14 29 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5576ca:	8a 86 50 08 00 00    	mov    al,BYTE PTR [esi+0x850]
  5576d0:	8d 8e 58 08 00 00    	lea    ecx,[esi+0x858]
  5576d6:	88 85 e0 fe ff ff    	mov    BYTE PTR [ebp-0x120],al
  5576dc:	0f b6 c0             	movzx  eax,al
  5576df:	50                   	push   eax
  5576e0:	e8 69 22 eb ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  5576e5:	eb 2a                	jmp    0x557711
  5576e7:	8b 8d f4 fe ff ff    	mov    ecx,DWORD PTR [ebp-0x10c]
  5576ed:	8b 45 fc             	mov    eax,DWORD PTR [ebp-0x4]
  5576f0:	89 81 1c 0a 00 00    	mov    DWORD PTR [ecx+0xa1c],eax
  5576f6:	83 c8 ff             	or     eax,0xffffffff
  5576f9:	66 89 41 04          	mov    WORD PTR [ecx+0x4],ax
  5576fd:	83 c1 d0             	add    ecx,0xffffffd0
  557700:	e8 a5 cb ea ff       	call   0x4042aa ; ["call resolved=0x55af30 "]
  557705:	b8 0b 77 55 00       	mov    eax,0x55770b
  55770a:	c3                   	ret
  55770b:	8b b5 f4 fe ff ff    	mov    esi,DWORD PTR [ebp-0x10c]
  557711:	8d 8e a8 09 00 00    	lea    ecx,[esi+0x9a8]
  557717:	8d 46 d0             	lea    eax,[esi-0x30]
  55771a:	89 01                	mov    DWORD PTR [ecx],eax
  55771c:	33 c0                	xor    eax,eax
  55771e:	56                   	push   esi
  55771f:	66 89 46 04          	mov    WORD PTR [esi+0x4],ax
  557723:	e8 b1 e2 ea ff       	call   0x4059d9 ; ["call resolved=0x5517e0 "]
  557728:	84 c0                	test   al,al
  55772a:	75 26                	jne    0x557752
  55772c:	0f 1f 40 00          	nop    DWORD PTR [eax+0x0]
  557730:	8d 7e d0             	lea    edi,[esi-0x30]
  557733:	8b cf                	mov    ecx,edi
  557735:	e8 9d f3 ea ff       	call   0x406ad7 ; ["call resolved=0x54eb80 "]
  55773a:	66 83 7e 06 00       	cmp    WORD PTR [esi+0x6],0x0
  55773f:	74 11                	je     0x557752
  557741:	68 55 0a 00 00       	push   0xa55
  557746:	57                   	push   edi
  557747:	e8 4e a9 ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  55774c:	83 c4 08             	add    esp,0x8
  55774f:	eb 01                	jmp    0x557752
