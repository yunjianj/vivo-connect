; fn_5f38c0; image base 0x400000; static annotation only
  5f38c0:	55                   	push   ebp
  5f38c1:	8b ec                	mov    ebp,esp
  5f38c3:	6a ff                	push   0xffffffff
  5f38c5:	68 f8 8c 69 00       	push   0x698cf8
  5f38ca:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  5f38d0:	50                   	push   eax
  5f38d1:	81 ec 3c 01 00 00    	sub    esp,0x13c
  5f38d7:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5f38dc:	33 c5                	xor    eax,ebp
  5f38de:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  5f38e1:	53                   	push   ebx
  5f38e2:	56                   	push   esi
  5f38e3:	57                   	push   edi
  5f38e4:	50                   	push   eax
  5f38e5:	8d 45 f4             	lea    eax,[ebp-0xc]
  5f38e8:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  5f38ee:	8b 5d 08             	mov    ebx,DWORD PTR [ebp+0x8]
  5f38f1:	8b 75 24             	mov    esi,DWORD PTR [ebp+0x24]
  5f38f4:	89 9d 7c ff ff ff    	mov    DWORD PTR [ebp-0x84],ebx
  5f38fa:	89 9d 78 ff ff ff    	mov    DWORD PTR [ebp-0x88],ebx
  5f3900:	89 b5 7c ff ff ff    	mov    DWORD PTR [ebp-0x84],esi
  5f3906:	b9 32 a3 7a 00       	mov    ecx,0x7aa332
  5f390b:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  5f3912:	e8 d7 51 e1 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5f3917:	8d 45 80             	lea    eax,[ebp-0x80]
  5f391a:	50                   	push   eax
  5f391b:	e8 aa 16 07 00       	call   0x664fca ; ["call resolved=0x664fca "]
  5f3920:	83 7d 20 10          	cmp    DWORD PTR [ebp+0x20],0x10
  5f3924:	8d 45 0c             	lea    eax,[ebp+0xc]
  5f3927:	ff 75 1c             	push   DWORD PTR [ebp+0x1c]
  5f392a:	0f 43 45 0c          	cmovae eax,DWORD PTR [ebp+0xc]
  5f392e:	50                   	push   eax
  5f392f:	8d 45 80             	lea    eax,[ebp-0x80]
  5f3932:	50                   	push   eax
  5f3933:	e8 98 16 07 00       	call   0x664fd0 ; ["call resolved=0x664fd0 "]
  5f3938:	8d 45 80             	lea    eax,[ebp-0x80]
  5f393b:	50                   	push   eax
  5f393c:	56                   	push   esi
  5f393d:	e8 94 16 07 00       	call   0x664fd6 ; ["call resolved=0x664fd6 "]
  5f3942:	83 c4 18             	add    esp,0x18
  5f3945:	8d 8d b8 fe ff ff    	lea    ecx,[ebp-0x148]
  5f394b:	6a 01                	push   0x1
  5f394d:	e8 6b 28 e1 ff       	call   0x4061bd ; ["call resolved=0x4ce3c0 "]
  5f3952:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  5f3956:	33 ff                	xor    edi,edi
  5f3958:	8b de                	mov    ebx,esi
  5f395a:	66 0f 1f 44 00 00    	nop    WORD PTR [eax+eax*1+0x0]
  5f3960:	68 4a 7f 40 00       	push   0x407f4a
  5f3965:	8d 8d c8 fe ff ff    	lea    ecx,[ebp-0x138]
  5f396b:	ff 15 54 d1 79 00    	call   DWORD PTR ds:0x79d154
  5f3971:	6a 00                	push   0x0
  5f3973:	8b f0                	mov    esi,eax
  5f3975:	8d 85 68 ff ff ff    	lea    eax,[ebp-0x98]
  5f397b:	6a 02                	push   0x2
  5f397d:	50                   	push   eax
  5f397e:	e8 50 1f 07 00       	call   0x6658d3 ; ["call resolved=0x6658d3 "]
  5f3983:	8b c8                	mov    ecx,eax
  5f3985:	8b 06                	mov    eax,DWORD PTR [esi]
  5f3987:	ff 71 0c             	push   DWORD PTR [ecx+0xc]
  5f398a:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  5f398d:	ff 71 08             	push   DWORD PTR [ecx+0x8]
  5f3990:	03 c6                	add    eax,esi
  5f3992:	50                   	push   eax
  5f3993:	8b 01                	mov    eax,DWORD PTR [ecx]
  5f3995:	ff d0                	call   eax
  5f3997:	8b 06                	mov    eax,DWORD PTR [esi]
  5f3999:	83 c4 18             	add    esp,0x18
  5f399c:	8b ce                	mov    ecx,esi
  5f399e:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  5f39a1:	c6 44 30 40 30       	mov    BYTE PTR [eax+esi*1+0x40],0x30
  5f39a6:	0f b6 04 3b          	movzx  eax,BYTE PTR [ebx+edi*1]
  5f39aa:	50                   	push   eax
  5f39ab:	ff 15 e4 d1 79 00    	call   DWORD PTR ds:0x79d1e4
  5f39b1:	47                   	inc    edi
  5f39b2:	83 ff 20             	cmp    edi,0x20
  5f39b5:	7c a9                	jl     0x5f3960
  5f39b7:	8b 9d 78 ff ff ff    	mov    ebx,DWORD PTR [ebp-0x88]
  5f39bd:	8d 8d b8 fe ff ff    	lea    ecx,[ebp-0x148]
  5f39c3:	53                   	push   ebx
  5f39c4:	e8 2d 12 e1 ff       	call   0x404bf6 ; ["call resolved=0x4e00c0 "]
  5f39c9:	8b 85 b8 fe ff ff    	mov    eax,DWORD PTR [ebp-0x148]
  5f39cf:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  5f39d2:	c7 84 05 b8 fe ff ff 	mov    DWORD PTR [ebp+eax*1-0x148],0x6c446c
  5f39dd:	8b 85 b8 fe ff ff    	mov    eax,DWORD PTR [ebp-0x148]
  5f39e3:	8b 48 04             	mov    ecx,DWORD PTR [eax+0x4]
  5f39e6:	8d 41 98             	lea    eax,[ecx-0x68]
  5f39e9:	89 84 0d b4 fe ff ff 	mov    DWORD PTR [ebp+ecx*1-0x14c],eax
  5f39f0:	8d 8d d0 fe ff ff    	lea    ecx,[ebp-0x130]
  5f39f6:	e8 e3 06 e1 ff       	call   0x4040de ; ["call resolved=0x46f4f0 "]
  5f39fb:	8d 8d d8 fe ff ff    	lea    ecx,[ebp-0x128]
  5f3a01:	ff 15 30 d1 79 00    	call   DWORD PTR ds:0x79d130
  5f3a07:	8d 8d 20 ff ff ff    	lea    ecx,[ebp-0xe0]
  5f3a0d:	ff 15 d0 d0 79 00    	call   DWORD PTR ds:0x79d0d0
  5f3a13:	8b 55 20             	mov    edx,DWORD PTR [ebp+0x20]
  5f3a16:	83 fa 10             	cmp    edx,0x10
  5f3a19:	72 2e                	jb     0x5f3a49
  5f3a1b:	8b 4d 0c             	mov    ecx,DWORD PTR [ebp+0xc]
  5f3a1e:	42                   	inc    edx
  5f3a1f:	8b c1                	mov    eax,ecx
  5f3a21:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f3a27:	72 16                	jb     0x5f3a3f
  5f3a29:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f3a2c:	83 c2 23             	add    edx,0x23
  5f3a2f:	2b c1                	sub    eax,ecx
  5f3a31:	83 c0 fc             	add    eax,0xfffffffc
  5f3a34:	83 f8 1f             	cmp    eax,0x1f
  5f3a37:	76 06                	jbe    0x5f3a3f
  5f3a39:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5f3a3f:	52                   	push   edx
  5f3a40:	51                   	push   ecx
  5f3a41:	e8 54 e6 e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f3a46:	83 c4 08             	add    esp,0x8
  5f3a49:	8b c3                	mov    eax,ebx
  5f3a4b:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  5f3a4e:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  5f3a55:	59                   	pop    ecx
  5f3a56:	5f                   	pop    edi
  5f3a57:	5e                   	pop    esi
  5f3a58:	5b                   	pop    ebx
  5f3a59:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  5f3a5c:	33 cd                	xor    ecx,ebp
  5f3a5e:	e8 2c 0a e1 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5f3a63:	8b e5                	mov    esp,ebp
  5f3a65:	5d                   	pop    ebp
  5f3a66:	c3                   	ret
