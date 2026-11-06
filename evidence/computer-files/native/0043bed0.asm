; vdfs_cryptopp::decrypt; image base 0x400000; static annotation only
  43bed0:	55                   	push   ebp
  43bed1:	8b ec                	mov    ebp,esp
  43bed3:	6a ff                	push   0xffffffff
  43bed5:	68 18 75 47 00       	push   0x477518
  43beda:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  43bee0:	50                   	push   eax
  43bee1:	81 ec a0 02 00 00    	sub    esp,0x2a0
  43bee7:	a1 14 de 49 00       	mov    eax,ds:0x49de14
  43beec:	33 c5                	xor    eax,ebp
  43beee:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  43bef1:	53                   	push   ebx
  43bef2:	56                   	push   esi
  43bef3:	57                   	push   edi
  43bef4:	50                   	push   eax
  43bef5:	8d 45 f4             	lea    eax,[ebp-0xc]
  43bef8:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  43befe:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  43bf01:	8b 4d 0c             	mov    ecx,DWORD PTR [ebp+0xc]
  43bf04:	8b 75 14             	mov    esi,DWORD PTR [ebp+0x14]
  43bf07:	8b 55 08             	mov    edx,DWORD PTR [ebp+0x8]
  43bf0a:	8b 7d 10             	mov    edi,DWORD PTR [ebp+0x10]
  43bf0d:	83 79 10 0c          	cmp    DWORD PTR [ecx+0x10],0xc
  43bf11:	89 b5 24 fe ff ff    	mov    DWORD PTR [ebp-0x1dc],esi
  43bf17:	0f 82 f3 04 00 00    	jb     0x43c410
  43bf1d:	83 7a 10 20          	cmp    DWORD PTR [edx+0x10],0x20
  43bf21:	0f 82 e9 04 00 00    	jb     0x43c410
  43bf27:	8b 07                	mov    eax,DWORD PTR [edi]
  43bf29:	83 78 04 10          	cmp    DWORD PTR [eax+0x4],0x10
  43bf2d:	0f 8c dd 04 00 00    	jl     0x43c410
  43bf33:	83 7a 14 10          	cmp    DWORD PTR [edx+0x14],0x10
  43bf37:	72 02                	jb     0x43bf3b
  43bf39:	8b 12                	mov    edx,DWORD PTR [edx]
  43bf3b:	83 79 14 10          	cmp    DWORD PTR [ecx+0x14],0x10
  43bf3f:	0f 10 02             	movups xmm0,XMMWORD PTR [edx]
  43bf42:	0f 11 45 c0          	movups XMMWORD PTR [ebp-0x40],xmm0
  43bf46:	0f 10 42 10          	movups xmm0,XMMWORD PTR [edx+0x10]
  43bf4a:	0f 11 45 d0          	movups XMMWORD PTR [ebp-0x30],xmm0
  43bf4e:	72 02                	jb     0x43bf52
  43bf50:	8b 09                	mov    ecx,DWORD PTR [ecx]
  43bf52:	f3 0f 7e 01          	movq   xmm0,QWORD PTR [ecx]
  43bf56:	66 0f d6 45 e0       	movq   QWORD PTR [ebp-0x20],xmm0
  43bf5b:	8b 41 08             	mov    eax,DWORD PTR [ecx+0x8]
  43bf5e:	c7 45 a8 00 00 00 00 	mov    DWORD PTR [ebp-0x58],0x0
  43bf65:	89 45 e8             	mov    DWORD PTR [ebp-0x18],eax
  43bf68:	c7 45 b8 00 00 00 00 	mov    DWORD PTR [ebp-0x48],0x0
  43bf6f:	c7 45 bc 0f 00 00 00 	mov    DWORD PTR [ebp-0x44],0xf
  43bf76:	c6 45 a8 00          	mov    BYTE PTR [ebp-0x58],0x0
  43bf7a:	8b ce                	mov    ecx,esi
  43bf7c:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  43bf83:	ff 15 90 f4 47 00    	call   DWORD PTR ds:0x47f490 ; ?clear@QByteArray@@QAEXXZ
  43bf89:	8d 8d 54 fd ff ff    	lea    ecx,[ebp-0x2ac]
  43bf8f:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  43bf93:	e8 68 cc ff ff       	call   0x438c00 ; ["call resolved=0x438c00 "]
  43bf98:	8d 85 e4 fd ff ff    	lea    eax,[ebp-0x21c]
  43bf9e:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  43bfa2:	6a 01                	push   0x1
  43bfa4:	8d 8d e8 fd ff ff    	lea    ecx,[ebp-0x218]
  43bfaa:	c7 85 54 fd ff ff 38 	mov    DWORD PTR [ebp-0x2ac],0x485338
  43bfb4:	c7 85 58 fd ff ff c0 	mov    DWORD PTR [ebp-0x2a8],0x4853c0
  43bfbe:	c7 85 5c fd ff ff 10 	mov    DWORD PTR [ebp-0x2a4],0x485410
  43bfc8:	89 85 2c fe ff ff    	mov    DWORD PTR [ebp-0x1d4],eax
  43bfce:	e8 fd bf 01 00       	call   0x457fd0 ; ["call resolved=0x457fd0 "]
  43bfd3:	6a 00                	push   0x0
  43bfd5:	6a 00                	push   0x0
  43bfd7:	8d 8d f4 fd ff ff    	lea    ecx,[ebp-0x20c]
  43bfdd:	c7 85 f8 fd ff ff ff 	mov    DWORD PTR [ebp-0x208],0x3fffffff
  43bfe7:	c7 85 fc fd ff ff 00 	mov    DWORD PTR [ebp-0x204],0x0
  43bff1:	e8 4a fe ff ff       	call   0x43be40 ; ["call resolved=0x43be40 "]
  43bff6:	89 85 00 fe ff ff    	mov    DWORD PTR [ebp-0x200],eax
  43bffc:	c7 85 08 fe ff ff ff 	mov    DWORD PTR [ebp-0x1f8],0xffffffff
  43c006:	c7 85 0c fe ff ff 00 	mov    DWORD PTR [ebp-0x1f4],0x0
  43c010:	c7 85 10 fe ff ff 00 	mov    DWORD PTR [ebp-0x1f0],0x0
  43c01a:	c7 85 e4 fd ff ff 28 	mov    DWORD PTR [ebp-0x21c],0x485128
  43c024:	c7 85 e8 fd ff ff 68 	mov    DWORD PTR [ebp-0x218],0x485168
  43c02e:	6a 0c                	push   0xc
  43c030:	8d 45 e0             	lea    eax,[ebp-0x20]
  43c033:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  43c037:	50                   	push   eax
  43c038:	6a 20                	push   0x20
  43c03a:	8d 45 c0             	lea    eax,[ebp-0x40]
  43c03d:	50                   	push   eax
  43c03e:	8d 8d 54 fd ff ff    	lea    ecx,[ebp-0x2ac]
  43c044:	e8 c7 d7 01 00       	call   0x459810 ; ["call resolved=0x459810 "]
  43c049:	6a 14                	push   0x14
  43c04b:	e8 a1 65 03 00       	call   0x4725f1 ; ["call resolved=0x4725f1 "]
  43c050:	8b f0                	mov    esi,eax
  43c052:	83 c4 04             	add    esp,0x4
  43c055:	89 b5 2c fe ff ff    	mov    DWORD PTR [ebp-0x1d4],esi
  43c05b:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  43c05f:	85 f6                	test   esi,esi
  43c061:	74 1e                	je     0x43c081
  43c063:	6a 00                	push   0x0
  43c065:	8b ce                	mov    ecx,esi
  43c067:	e8 64 bf 01 00       	call   0x457fd0 ; ["call resolved=0x457fd0 "]
  43c06c:	8d 45 a8             	lea    eax,[ebp-0x58]
  43c06f:	c7 06 5c 4b 48 00    	mov    DWORD PTR [esi],0x484b5c
  43c075:	c7 46 04 14 4c 48 00 	mov    DWORD PTR [esi+0x4],0x484c14
  43c07c:	89 46 10             	mov    DWORD PTR [esi+0x10],eax
  43c07f:	eb 02                	jmp    0x43c083
  43c081:	33 f6                	xor    esi,esi
  43c083:	6a 05                	push   0x5
  43c085:	6a 10                	push   0x10
  43c087:	6a 10                	push   0x10
  43c089:	56                   	push   esi
  43c08a:	8d 85 54 fd ff ff    	lea    eax,[ebp-0x2ac]
  43c090:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  43c094:	50                   	push   eax
  43c095:	8d 8d 30 fe ff ff    	lea    ecx,[ebp-0x1d0]
  43c09b:	e8 c0 e7 01 00       	call   0x45a860 ; ["call resolved=0x45a860 "]
  43c0a0:	8d 8d 28 fe ff ff    	lea    ecx,[ebp-0x1d8]
  43c0a6:	ff 15 9c f4 47 00    	call   DWORD PTR ds:0x47f49c ; ??0QByteArray@@QAE@XZ
  43c0ac:	8b 07                	mov    eax,DWORD PTR [edi]
  43c0ae:	8b cf                	mov    ecx,edi
  43c0b0:	8b 35 8c f4 47 00    	mov    esi,DWORD PTR ds:0x47f48c
  43c0b6:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  43c0ba:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  43c0bd:	83 c0 f0             	add    eax,0xfffffff0
  43c0c0:	50                   	push   eax
  43c0c1:	6a 10                	push   0x10
  43c0c3:	8d 85 2c fe ff ff    	lea    eax,[ebp-0x1d4]
  43c0c9:	50                   	push   eax
  43c0ca:	ff d6                	call   esi
  43c0cc:	50                   	push   eax
  43c0cd:	8d 8d 28 fe ff ff    	lea    ecx,[ebp-0x1d8]
  43c0d3:	ff 15 94 f4 47 00    	call   DWORD PTR ds:0x47f494 ; ??4QByteArray@@QAEAAV0@$$QAV0@@Z
  43c0d9:	8d 8d 2c fe ff ff    	lea    ecx,[ebp-0x1d4]
  43c0df:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  43c0e5:	6a 10                	push   0x10
  43c0e7:	6a 00                	push   0x0
  43c0e9:	8d 85 2c fe ff ff    	lea    eax,[ebp-0x1d4]
  43c0ef:	8b cf                	mov    ecx,edi
  43c0f1:	50                   	push   eax
  43c0f2:	ff d6                	call   esi
  43c0f4:	50                   	push   eax
  43c0f5:	8d 8d 28 fe ff ff    	lea    ecx,[ebp-0x1d8]
  43c0fb:	c6 45 fc 08          	mov    BYTE PTR [ebp-0x4],0x8
  43c0ff:	ff 15 88 f4 47 00    	call   DWORD PTR ds:0x47f488 ; ?append@QByteArray@@QAEAAV1@ABV1@@Z ; ["Ξ\t"]
  43c105:	8d 8d 2c fe ff ff    	lea    ecx,[ebp-0x1d4]
  43c10b:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  43c10f:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  43c115:	6a 18                	push   0x18
  43c117:	e8 d5 64 03 00       	call   0x4725f1 ; ["call resolved=0x4725f1 "]
  43c11c:	8b f0                	mov    esi,eax
  43c11e:	83 c4 04             	add    esp,0x4
  43c121:	89 b5 2c fe ff ff    	mov    DWORD PTR [ebp-0x1d4],esi
  43c127:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  43c12b:	85 f6                	test   esi,esi
  43c12d:	74 28                	je     0x43c157
  43c12f:	6a 00                	push   0x0
  43c131:	8b ce                	mov    ecx,esi
  43c133:	e8 98 be 01 00       	call   0x457fd0 ; ["call resolved=0x457fd0 "]
  43c138:	8d 85 30 fe ff ff    	lea    eax,[ebp-0x1d0]
  43c13e:	c7 06 94 4a 48 00    	mov    DWORD PTR [esi],0x484a94
  43c144:	c7 46 04 4c 4b 48 00 	mov    DWORD PTR [esi+0x4],0x484b4c
  43c14b:	89 46 10             	mov    DWORD PTR [esi+0x10],eax
  43c14e:	c7 46 14 03 00 00 00 	mov    DWORD PTR [esi+0x14],0x3
  43c155:	eb 02                	jmp    0x43c159
  43c157:	33 f6                	xor    esi,esi
  43c159:	8b 85 28 fe ff ff    	mov    eax,DWORD PTR [ebp-0x1d8]
  43c15f:	8d 8d 28 fe ff ff    	lea    ecx,[ebp-0x1d8]
  43c165:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  43c169:	8b 78 04             	mov    edi,DWORD PTR [eax+0x4]
  43c16c:	ff 15 b4 f1 47 00    	call   DWORD PTR ds:0x47f1b4 ; ?constData@QByteArray@@QBEPBDXZ ; ["ƫ\t"]
  43c172:	56                   	push   esi
  43c173:	6a 01                	push   0x1
  43c175:	57                   	push   edi
  43c176:	50                   	push   eax
  43c177:	8d 8d 68 ff ff ff    	lea    ecx,[ebp-0x98]
  43c17d:	e8 ae d3 ff ff       	call   0x439530 ; ["call resolved=0x439530 "]
  43c182:	8b 8d 78 ff ff ff    	mov    ecx,DWORD PTR [ebp-0x88]
  43c188:	c7 85 68 ff ff ff fc 	mov    DWORD PTR [ebp-0x98],0x484cfc
  43c192:	c7 85 6c ff ff ff d0 	mov    DWORD PTR [ebp-0x94],0x484dd0
  43c19c:	85 c9                	test   ecx,ecx
  43c19e:	74 06                	je     0x43c1a6
  43c1a0:	8b 01                	mov    eax,DWORD PTR [ecx]
  43c1a2:	6a 01                	push   0x1
  43c1a4:	ff 10                	call   DWORD PTR [eax]
  43c1a6:	80 bd d8 fe ff ff 01 	cmp    BYTE PTR [ebp-0x128],0x1
  43c1ad:	0f 85 e8 00 00 00    	jne    0x43c29b
  43c1b3:	8d 45 a8             	lea    eax,[ebp-0x58]
  43c1b6:	50                   	push   eax
  43c1b7:	8d 85 2c fe ff ff    	lea    eax,[ebp-0x1d4]
  43c1bd:	50                   	push   eax
  43c1be:	ff 15 2c f3 47 00    	call   DWORD PTR ds:0x47f32c ; ?fromStdString@QByteArray@@SA?AV1@ABV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@@Z
  43c1c4:	8b 8d 24 fe ff ff    	mov    ecx,DWORD PTR [ebp-0x1dc]
  43c1ca:	83 c4 08             	add    esp,0x8
  43c1cd:	50                   	push   eax
  43c1ce:	ff 15 94 f4 47 00    	call   DWORD PTR ds:0x47f494 ; ??4QByteArray@@QAEAAV0@$$QAV0@@Z
  43c1d4:	8d 8d 2c fe ff ff    	lea    ecx,[ebp-0x1d4]
  43c1da:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  43c1e0:	8d 8d 28 fe ff ff    	lea    ecx,[ebp-0x1d8]
  43c1e6:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  43c1ec:	8d 8d 30 fe ff ff    	lea    ecx,[ebp-0x1d0]
  43c1f2:	e8 e9 db ff ff       	call   0x439de0 ; ["call resolved=0x439de0 "]
  43c1f7:	8b 8d 0c fe ff ff    	mov    ecx,DWORD PTR [ebp-0x1f4]
  43c1fd:	8b 85 08 fe ff ff    	mov    eax,DWORD PTR [ebp-0x1f8]
  43c203:	3b c1                	cmp    eax,ecx
  43c205:	8b 95 10 fe ff ff    	mov    edx,DWORD PTR [ebp-0x1f0]
  43c20b:	0f 42 c8             	cmovb  ecx,eax
  43c20e:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  43c212:	85 d2                	test   edx,edx
  43c214:	74 0f                	je     0x43c225
  43c216:	8b fa                	mov    edi,edx
  43c218:	32 c0                	xor    al,al
  43c21a:	f3 aa                	rep stos BYTE PTR es:[edi],al
  43c21c:	52                   	push   edx
  43c21d:	e8 0e 1a 02 00       	call   0x45dc30 ; ["call resolved=0x45dc30 "]
  43c222:	83 c4 04             	add    esp,0x4
  43c225:	8b 8d fc fd ff ff    	mov    ecx,DWORD PTR [ebp-0x204]
  43c22b:	39 8d f8 fd ff ff    	cmp    DWORD PTR [ebp-0x208],ecx
  43c231:	8b 95 00 fe ff ff    	mov    edx,DWORD PTR [ebp-0x200]
  43c237:	0f 42 8d f8 fd ff ff 	cmovb  ecx,DWORD PTR [ebp-0x208]
  43c23e:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  43c242:	85 d2                	test   edx,edx
  43c244:	74 0f                	je     0x43c255
  43c246:	8b fa                	mov    edi,edx
  43c248:	33 c0                	xor    eax,eax
  43c24a:	f3 ab                	rep stos DWORD PTR es:[edi],eax
  43c24c:	52                   	push   edx
  43c24d:	e8 4e 19 02 00       	call   0x45dba0 ; ["call resolved=0x45dba0 "]
  43c252:	83 c4 04             	add    esp,0x4
  43c255:	8d 8d 54 fd ff ff    	lea    ecx,[ebp-0x2ac]
  43c25b:	e8 20 df ff ff       	call   0x43a180 ; ["call resolved=0x43a180 "]
  43c260:	8b 55 bc             	mov    edx,DWORD PTR [ebp-0x44]
  43c263:	83 fa 10             	cmp    edx,0x10
  43c266:	72 2c                	jb     0x43c294
  43c268:	8b 4d a8             	mov    ecx,DWORD PTR [ebp-0x58]
  43c26b:	42                   	inc    edx
  43c26c:	8b c1                	mov    eax,ecx
  43c26e:	81 fa 00 10 00 00    	cmp    edx,0x1000
  43c274:	72 14                	jb     0x43c28a
  43c276:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  43c279:	83 c2 23             	add    edx,0x23
  43c27c:	2b c1                	sub    eax,ecx
  43c27e:	83 c0 fc             	add    eax,0xfffffffc
  43c281:	83 f8 1f             	cmp    eax,0x1f
  43c284:	0f 87 04 01 00 00    	ja     0x43c38e
  43c28a:	52                   	push   edx
  43c28b:	51                   	push   ecx
  43c28c:	e8 90 63 03 00       	call   0x472621 ; ["call resolved=0x472621 "]
  43c291:	83 c4 08             	add    esp,0x8
  43c294:	b0 01                	mov    al,0x1
  43c296:	e9 c2 01 00 00       	jmp    0x43c45d
  43c29b:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  43c2a1:	83 ec 08             	sub    esp,0x8
  43c2a4:	8b c4                	mov    eax,esp
  43c2a6:	c7 85 18 fe ff ff e4 	mov    DWORD PTR [ebp-0x1e8],0x4852e4 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Cryptopp\\vdfs_cryptopp.cpp"]
  43c2b0:	c7 85 1c fe ff ff 53 	mov    DWORD PTR [ebp-0x1e4],0x53
  43c2ba:	f3 0f 7e 85 18 fe ff 	movq   xmm0,QWORD PTR [ebp-0x1e8]
  43c2c2:	6a 04                	push   0x4
  43c2c4:	83 ec 0c             	sub    esp,0xc
  43c2c7:	c7 00 68 54 48 00    	mov    DWORD PTR [eax],0x485468 ; ["Decryption error"]
  43c2cd:	c7 40 04 10 00 00 00 	mov    DWORD PTR [eax+0x4],0x10
  43c2d4:	8b c4                	mov    eax,esp
  43c2d6:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  43c2da:	c7 40 08 50 54 48 00 	mov    DWORD PTR [eax+0x8],0x485450 ; ["vdfs_cryptopp::decrypt"]
  43c2e1:	e8 2a f5 fd ff       	call   0x41b810 ; ["call resolved=0x41b810 "]
  43c2e6:	8d 8d 28 fe ff ff    	lea    ecx,[ebp-0x1d8]
  43c2ec:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  43c2f2:	8d 8d 30 fe ff ff    	lea    ecx,[ebp-0x1d0]
  43c2f8:	e8 e3 da ff ff       	call   0x439de0 ; ["call resolved=0x439de0 "]
  43c2fd:	8b 8d 0c fe ff ff    	mov    ecx,DWORD PTR [ebp-0x1f4]
  43c303:	8b 85 08 fe ff ff    	mov    eax,DWORD PTR [ebp-0x1f8]
  43c309:	3b c1                	cmp    eax,ecx
  43c30b:	8b 95 10 fe ff ff    	mov    edx,DWORD PTR [ebp-0x1f0]
  43c311:	0f 42 c8             	cmovb  ecx,eax
  43c314:	c6 45 fc 0c          	mov    BYTE PTR [ebp-0x4],0xc
  43c318:	85 d2                	test   edx,edx
  43c31a:	74 0f                	je     0x43c32b
  43c31c:	8b fa                	mov    edi,edx
  43c31e:	32 c0                	xor    al,al
  43c320:	f3 aa                	rep stos BYTE PTR es:[edi],al
  43c322:	52                   	push   edx
  43c323:	e8 08 19 02 00       	call   0x45dc30 ; ["call resolved=0x45dc30 "]
  43c328:	83 c4 04             	add    esp,0x4
  43c32b:	8b 8d fc fd ff ff    	mov    ecx,DWORD PTR [ebp-0x204]
  43c331:	8b 85 f8 fd ff ff    	mov    eax,DWORD PTR [ebp-0x208]
  43c337:	3b c1                	cmp    eax,ecx
  43c339:	8b 95 00 fe ff ff    	mov    edx,DWORD PTR [ebp-0x200]
  43c33f:	0f 42 c8             	cmovb  ecx,eax
  43c342:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  43c346:	85 d2                	test   edx,edx
  43c348:	74 0f                	je     0x43c359
  43c34a:	8b fa                	mov    edi,edx
  43c34c:	33 c0                	xor    eax,eax
  43c34e:	f3 ab                	rep stos DWORD PTR es:[edi],eax
  43c350:	52                   	push   edx
  43c351:	e8 4a 18 02 00       	call   0x45dba0 ; ["call resolved=0x45dba0 "]
  43c356:	83 c4 04             	add    esp,0x4
  43c359:	8d 8d 54 fd ff ff    	lea    ecx,[ebp-0x2ac]
  43c35f:	e8 1c de ff ff       	call   0x43a180 ; ["call resolved=0x43a180 "]
  43c364:	8b 55 bc             	mov    edx,DWORD PTR [ebp-0x44]
  43c367:	83 fa 10             	cmp    edx,0x10
  43c36a:	0f 82 eb 00 00 00    	jb     0x43c45b
  43c370:	8b 4d a8             	mov    ecx,DWORD PTR [ebp-0x58]
  43c373:	42                   	inc    edx
  43c374:	8b c1                	mov    eax,ecx
  43c376:	81 fa 00 10 00 00    	cmp    edx,0x1000
  43c37c:	72 16                	jb     0x43c394
  43c37e:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  43c381:	83 c2 23             	add    edx,0x23
  43c384:	2b c1                	sub    eax,ecx
  43c386:	83 c0 fc             	add    eax,0xfffffffc
  43c389:	83 f8 1f             	cmp    eax,0x1f
  43c38c:	76 06                	jbe    0x43c394
  43c38e:	ff 15 68 f6 47 00    	call   DWORD PTR ds:0x47f668 ; _invalid_parameter_noinfo_noreturn
  43c394:	52                   	push   edx
  43c395:	51                   	push   ecx
  43c396:	e8 86 62 03 00       	call   0x472621 ; ["call resolved=0x472621 "]
  43c39b:	83 c4 08             	add    esp,0x8
  43c39e:	e9 b8 00 00 00       	jmp    0x43c45b
  43c3a3:	8b 8d 14 fe ff ff    	mov    ecx,DWORD PTR [ebp-0x1ec]
  43c3a9:	8b 35 e4 2b 4a 00    	mov    esi,DWORD PTR ds:0x4a2be4
  43c3af:	8b 01                	mov    eax,DWORD PTR [ecx]
  43c3b1:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  43c3b4:	ff d0                	call   eax
  43c3b6:	89 85 24 fe ff ff    	mov    DWORD PTR [ebp-0x1dc],eax
  43c3bc:	8b ce                	mov    ecx,esi
  43c3be:	8d 85 24 fe ff ff    	lea    eax,[ebp-0x1dc]
  43c3c4:	c7 85 18 fe ff ff e4 	mov    DWORD PTR [ebp-0x1e8],0x4852e4 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Cryptopp\\vdfs_cryptopp.cpp"]
  43c3ce:	50                   	push   eax
  43c3cf:	83 ec 08             	sub    esp,0x8
  43c3d2:	c7 85 1c fe ff ff 59 	mov    DWORD PTR [ebp-0x1e4],0x59
  43c3dc:	f3 0f 7e 85 18 fe ff 	movq   xmm0,QWORD PTR [ebp-0x1e8]
  43c3e4:	8b c4                	mov    eax,esp
  43c3e6:	6a 04                	push   0x4
  43c3e8:	83 ec 0c             	sub    esp,0xc
  43c3eb:	c7 00 20 53 48 00    	mov    DWORD PTR [eax],0x485320 ; ["Decryption error:{}"]
  43c3f1:	c7 40 04 13 00 00 00 	mov    DWORD PTR [eax+0x4],0x13
  43c3f8:	8b c4                	mov    eax,esp
  43c3fa:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  43c3fe:	c7 40 08 50 54 48 00 	mov    DWORD PTR [eax+0x8],0x485450 ; ["vdfs_cryptopp::decrypt"]
  43c405:	e8 a6 49 ff ff       	call   0x430db0 ; ["call resolved=0x430db0 "]
  43c40a:	b8 64 c3 43 00       	mov    eax,0x43c364
  43c40f:	c3                   	ret
  43c410:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  43c416:	83 ec 08             	sub    esp,0x8
  43c419:	8b c4                	mov    eax,esp
  43c41b:	c7 85 18 fe ff ff e4 	mov    DWORD PTR [ebp-0x1e8],0x4852e4 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Cryptopp\\vdfs_cryptopp.cpp"]
  43c425:	c7 85 1c fe ff ff 35 	mov    DWORD PTR [ebp-0x1e4],0x35
  43c42f:	f3 0f 7e 85 18 fe ff 	movq   xmm0,QWORD PTR [ebp-0x1e8]
  43c437:	6a 04                	push   0x4
  43c439:	83 ec 0c             	sub    esp,0xc
  43c43c:	c7 00 b0 52 48 00    	mov    DWORD PTR [eax],0x4852b0 ; ["Encrypto param is invalid."]
  43c442:	c7 40 04 1a 00 00 00 	mov    DWORD PTR [eax+0x4],0x1a
  43c449:	8b c4                	mov    eax,esp
  43c44b:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  43c44f:	c7 40 08 50 54 48 00 	mov    DWORD PTR [eax+0x8],0x485450 ; ["vdfs_cryptopp::decrypt"]
  43c456:	e8 b5 f3 fd ff       	call   0x41b810 ; ["call resolved=0x41b810 "]
  43c45b:	32 c0                	xor    al,al
  43c45d:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  43c460:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  43c467:	59                   	pop    ecx
  43c468:	5f                   	pop    edi
  43c469:	5e                   	pop    esi
  43c46a:	5b                   	pop    ebx
  43c46b:	8b 4d ec             	mov    ecx,DWORD PTR [ebp-0x14]
  43c46e:	33 cd                	xor    ecx,ebp
  43c470:	e8 0b 64 03 00       	call   0x472880 ; ["call resolved=0x472880 "]
  43c475:	8b e5                	mov    esp,ebp
  43c477:	5d                   	pop    ebp
  43c478:	c3                   	ret
