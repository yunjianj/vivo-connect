; fn_5ef010; image base 0x400000; static annotation only
  5ef010:	55                   	push   ebp
  5ef011:	8b ec                	mov    ebp,esp
  5ef013:	6a ff                	push   0xffffffff
  5ef015:	68 cd 83 69 00       	push   0x6983cd
  5ef01a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  5ef020:	50                   	push   eax
  5ef021:	83 ec 24             	sub    esp,0x24
  5ef024:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5ef029:	33 c5                	xor    eax,ebp
  5ef02b:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  5ef02e:	53                   	push   ebx
  5ef02f:	56                   	push   esi
  5ef030:	57                   	push   edi
  5ef031:	50                   	push   eax
  5ef032:	8d 45 f4             	lea    eax,[ebp-0xc]
  5ef035:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  5ef03b:	b9 32 a3 7a 00       	mov    ecx,0x7aa332
  5ef040:	e8 a9 9a e1 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5ef045:	66 a1 94 df 6d 00    	mov    ax,ds:0x6ddf94 ; ["1.0"]
  5ef04b:	be 0f 00 00 00       	mov    esi,0xf
  5ef050:	8b 1d 90 df 6d 00    	mov    ebx,DWORD PTR ds:0x6ddf90 ; ["7.0.1.0"]
  5ef056:	bf 07 00 00 00       	mov    edi,0x7
  5ef05b:	66 89 45 dc          	mov    WORD PTR [ebp-0x24],ax
  5ef05f:	a0 96 df 6d 00       	mov    al,ds:0x6ddf96
  5ef064:	89 75 ec             	mov    DWORD PTR [ebp-0x14],esi
  5ef067:	89 7d e8             	mov    DWORD PTR [ebp-0x18],edi
  5ef06a:	89 5d d0             	mov    DWORD PTR [ebp-0x30],ebx
  5ef06d:	89 5d d8             	mov    DWORD PTR [ebp-0x28],ebx
  5ef070:	88 45 de             	mov    BYTE PTR [ebp-0x22],al
  5ef073:	c6 45 df 00          	mov    BYTE PTR [ebp-0x21],0x0
  5ef077:	8d 55 d8             	lea    edx,[ebp-0x28]
  5ef07a:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  5ef081:	8d 4f ff             	lea    ecx,[edi-0x1]
  5ef084:	80 3c 0a 2e          	cmp    BYTE PTR [edx+ecx*1],0x2e
  5ef088:	8d 04 0a             	lea    eax,[edx+ecx*1]
  5ef08b:	74 0d                	je     0x5ef09a
  5ef08d:	0f 1f 00             	nop    DWORD PTR [eax]
  5ef090:	3b c2                	cmp    eax,edx
  5ef092:	74 2b                	je     0x5ef0bf
  5ef094:	48                   	dec    eax
  5ef095:	80 38 2e             	cmp    BYTE PTR [eax],0x2e
  5ef098:	75 f6                	jne    0x5ef090
  5ef09a:	2b c2                	sub    eax,edx
  5ef09c:	83 f8 ff             	cmp    eax,0xffffffff
  5ef09f:	74 1e                	je     0x5ef0bf
  5ef0a1:	3b f8                	cmp    edi,eax
  5ef0a3:	0f 82 41 01 00 00    	jb     0x5ef1ea
  5ef0a9:	8d 4d d8             	lea    ecx,[ebp-0x28]
  5ef0ac:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  5ef0af:	c6 04 08 00          	mov    BYTE PTR [eax+ecx*1],0x0
  5ef0b3:	8b 5d d8             	mov    ebx,DWORD PTR [ebp-0x28]
  5ef0b6:	8b 7d e8             	mov    edi,DWORD PTR [ebp-0x18]
  5ef0b9:	8b 75 ec             	mov    esi,DWORD PTR [ebp-0x14]
  5ef0bc:	89 5d d0             	mov    DWORD PTR [ebp-0x30],ebx
  5ef0bf:	83 fe 10             	cmp    esi,0x10
  5ef0c2:	8d 45 d8             	lea    eax,[ebp-0x28]
  5ef0c5:	8d 4d d8             	lea    ecx,[ebp-0x28]
  5ef0c8:	0f 43 c3             	cmovae eax,ebx
  5ef0cb:	03 c7                	add    eax,edi
  5ef0cd:	83 fe 10             	cmp    esi,0x10
  5ef0d0:	89 45 d4             	mov    DWORD PTR [ebp-0x2c],eax
  5ef0d3:	8d 45 d8             	lea    eax,[ebp-0x28]
  5ef0d6:	0f 43 4d d0          	cmovae ecx,DWORD PTR [ebp-0x30]
  5ef0da:	0f 43 c3             	cmovae eax,ebx
  5ef0dd:	8d 1c 07             	lea    ebx,[edi+eax*1]
  5ef0e0:	8b c3                	mov    eax,ebx
  5ef0e2:	2b c1                	sub    eax,ecx
  5ef0e4:	50                   	push   eax
  5ef0e5:	6a 2e                	push   0x2e
  5ef0e7:	51                   	push   ecx
  5ef0e8:	e8 97 96 07 00       	call   0x668784 ; ["call resolved=0x668784 "]
  5ef0ed:	83 c4 0c             	add    esp,0xc
  5ef0f0:	8b cb                	mov    ecx,ebx
  5ef0f2:	85 c0                	test   eax,eax
  5ef0f4:	0f 45 c8             	cmovne ecx,eax
  5ef0f7:	8b f1                	mov    esi,ecx
  5ef0f9:	3b cb                	cmp    ecx,ebx
  5ef0fb:	74 1c                	je     0x5ef119
  5ef0fd:	41                   	inc    ecx
  5ef0fe:	3b cb                	cmp    ecx,ebx
  5ef100:	74 17                	je     0x5ef119
  5ef102:	8a 01                	mov    al,BYTE PTR [ecx]
  5ef104:	3c 2e                	cmp    al,0x2e
  5ef106:	74 03                	je     0x5ef10b
  5ef108:	88 06                	mov    BYTE PTR [esi],al
  5ef10a:	46                   	inc    esi
  5ef10b:	41                   	inc    ecx
  5ef10c:	3b cb                	cmp    ecx,ebx
  5ef10e:	75 f2                	jne    0x5ef102
  5ef110:	8b 45 d8             	mov    eax,DWORD PTR [ebp-0x28]
  5ef113:	8b 7d e8             	mov    edi,DWORD PTR [ebp-0x18]
  5ef116:	89 45 d0             	mov    DWORD PTR [ebp-0x30],eax
  5ef119:	83 7d ec 10          	cmp    DWORD PTR [ebp-0x14],0x10
  5ef11d:	8d 45 d8             	lea    eax,[ebp-0x28]
  5ef120:	8b d6                	mov    edx,esi
  5ef122:	8d 4d d8             	lea    ecx,[ebp-0x28]
  5ef125:	0f 43 45 d0          	cmovae eax,DWORD PTR [ebp-0x30]
  5ef129:	29 75 d4             	sub    DWORD PTR [ebp-0x2c],esi
  5ef12c:	2b d0                	sub    edx,eax
  5ef12e:	8b 75 d4             	mov    esi,DWORD PTR [ebp-0x2c]
  5ef131:	8b c7                	mov    eax,edi
  5ef133:	2b c2                	sub    eax,edx
  5ef135:	3b c6                	cmp    eax,esi
  5ef137:	0f 42 f0             	cmovb  esi,eax
  5ef13a:	83 7d ec 10          	cmp    DWORD PTR [ebp-0x14],0x10
  5ef13e:	0f 43 4d d0          	cmovae ecx,DWORD PTR [ebp-0x30]
  5ef142:	2b fe                	sub    edi,esi
  5ef144:	03 ca                	add    ecx,edx
  5ef146:	89 7d e8             	mov    DWORD PTR [ebp-0x18],edi
  5ef149:	2b fa                	sub    edi,edx
  5ef14b:	47                   	inc    edi
  5ef14c:	57                   	push   edi
  5ef14d:	8d 04 31             	lea    eax,[ecx+esi*1]
  5ef150:	50                   	push   eax
  5ef151:	51                   	push   ecx
  5ef152:	e8 39 96 07 00       	call   0x668790 ; ["call resolved=0x668790 "]
  5ef157:	ff 15 f4 e3 79 00    	call   DWORD PTR ds:0x79e3f4
  5ef15d:	83 7d ec 10          	cmp    DWORD PTR [ebp-0x14],0x10
  5ef161:	8d 75 d8             	lea    esi,[ebp-0x28]
  5ef164:	8b f8                	mov    edi,eax
  5ef166:	8d 45 d4             	lea    eax,[ebp-0x2c]
  5ef169:	0f 43 75 d8          	cmovae esi,DWORD PTR [ebp-0x28]
  5ef16d:	6a 0a                	push   0xa
  5ef16f:	50                   	push   eax
  5ef170:	56                   	push   esi
  5ef171:	c7 07 00 00 00 00    	mov    DWORD PTR [edi],0x0
  5ef177:	ff 15 80 e2 79 00    	call   DWORD PTR ds:0x79e280
  5ef17d:	83 c4 18             	add    esp,0x18
  5ef180:	8b d8                	mov    ebx,eax
  5ef182:	3b 75 d4             	cmp    esi,DWORD PTR [ebp-0x2c]
  5ef185:	74 68                	je     0x5ef1ef
  5ef187:	83 3f 22             	cmp    DWORD PTR [edi],0x22
  5ef18a:	74 54                	je     0x5ef1e0
  5ef18c:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  5ef18f:	83 fa 10             	cmp    edx,0x10
  5ef192:	72 2e                	jb     0x5ef1c2
  5ef194:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  5ef197:	42                   	inc    edx
  5ef198:	8b c1                	mov    eax,ecx
  5ef19a:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5ef1a0:	72 16                	jb     0x5ef1b8
  5ef1a2:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5ef1a5:	83 c2 23             	add    edx,0x23
  5ef1a8:	2b c1                	sub    eax,ecx
  5ef1aa:	83 c0 fc             	add    eax,0xfffffffc
  5ef1ad:	83 f8 1f             	cmp    eax,0x1f
  5ef1b0:	76 06                	jbe    0x5ef1b8
  5ef1b2:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5ef1b8:	52                   	push   edx
  5ef1b9:	51                   	push   ecx
  5ef1ba:	e8 db 2e e1 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5ef1bf:	83 c4 08             	add    esp,0x8
  5ef1c2:	8b c3                	mov    eax,ebx
  5ef1c4:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  5ef1c7:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  5ef1ce:	59                   	pop    ecx
  5ef1cf:	5f                   	pop    edi
  5ef1d0:	5e                   	pop    esi
  5ef1d1:	5b                   	pop    ebx
  5ef1d2:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  5ef1d5:	33 cd                	xor    ecx,ebp
  5ef1d7:	e8 b3 52 e1 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5ef1dc:	8b e5                	mov    esp,ebp
  5ef1de:	5d                   	pop    ebp
  5ef1df:	c3                   	ret
  5ef1e0:	68 a0 94 6d 00       	push   0x6d94a0 ; ["stoi argument out of range"]
  5ef1e5:	e8 dc 64 07 00       	call   0x6656c6 ; ["call resolved=0x6656c6 "]
  5ef1ea:	e8 69 a7 e1 ff       	call   0x409958 ; ["call resolved=0x47fd30 "]
  5ef1ef:	68 84 94 6d 00       	push   0x6d9484 ; ["invalid stoi argument"]
  5ef1f4:	e8 82 67 07 00       	call   0x66597b ; ["call resolved=0x66597b "]
