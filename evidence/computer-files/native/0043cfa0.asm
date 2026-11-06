; fn_43cfa0; image base 0x400000; static annotation only
  43cfa0:	55                   	push   ebp
  43cfa1:	8b ec                	mov    ebp,esp
  43cfa3:	6a ff                	push   0xffffffff
  43cfa5:	68 5e 76 47 00       	push   0x47765e
  43cfaa:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  43cfb0:	50                   	push   eax
  43cfb1:	83 ec 08             	sub    esp,0x8
  43cfb4:	a1 14 de 49 00       	mov    eax,ds:0x49de14
  43cfb9:	33 c5                	xor    eax,ebp
  43cfbb:	50                   	push   eax
  43cfbc:	8d 45 f4             	lea    eax,[ebp-0xc]
  43cfbf:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  43cfc5:	ff 75 08             	push   DWORD PTR [ebp+0x8]
  43cfc8:	8d 4d 08             	lea    ecx,[ebp+0x8]
  43cfcb:	ff 15 ec f2 47 00    	call   DWORD PTR ds:0x47f2ec ; ??0QDir@@QAE@ABVQString@@@Z
  43cfd1:	68 03 61 00 00       	push   0x6103
  43cfd6:	8d 4d 08             	lea    ecx,[ebp+0x8]
  43cfd9:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  43cfe0:	ff 15 fc f2 47 00    	call   DWORD PTR ds:0x47f2fc ; ?setFilter@QDir@@QAEXV?$QFlags@W4Filter@QDir@@@@@Z
  43cfe6:	6a 0e                	push   0xe
  43cfe8:	8d 4d 08             	lea    ecx,[ebp+0x8]
  43cfeb:	ff 15 00 f3 47 00    	call   DWORD PTR ds:0x47f300 ; ?setSorting@QDir@@QAEXV?$QFlags@W4SortFlag@QDir@@@@@Z ; ["¸\t"]
  43cff1:	51                   	push   ecx
  43cff2:	8b c4                	mov    eax,esp
  43cff4:	51                   	push   ecx
  43cff5:	8d 4d 08             	lea    ecx,[ebp+0x8]
  43cff8:	c7 00 ff ff ff ff    	mov    DWORD PTR [eax],0xffffffff
  43cffe:	8b c4                	mov    eax,esp
  43d000:	c7 00 ff ff ff ff    	mov    DWORD PTR [eax],0xffffffff
  43d006:	8d 45 f0             	lea    eax,[ebp-0x10]
  43d009:	50                   	push   eax
  43d00a:	ff 15 08 f3 47 00    	call   DWORD PTR ds:0x47f308 ; ?entryInfoList@QDir@@QBE?AV?$QList@VQFileInfo@@@@V?$QFlags@W4Filter@QDir@@@@V?$QFlags@W4SortFlag@QDir@@@@@Z
  43d010:	8b 0d 5c f2 47 00    	mov    ecx,DWORD PTR ds:0x47f25c
  43d016:	8b 10                	mov    edx,DWORD PTR [eax]
  43d018:	89 08                	mov    DWORD PTR [eax],ecx
  43d01a:	8b 45 0c             	mov    eax,DWORD PTR [ebp+0xc]
  43d01d:	8b 08                	mov    ecx,DWORD PTR [eax]
  43d01f:	89 4d 0c             	mov    DWORD PTR [ebp+0xc],ecx
  43d022:	8d 4d 0c             	lea    ecx,[ebp+0xc]
  43d025:	89 10                	mov    DWORD PTR [eax],edx
  43d027:	e8 e4 4b ff ff       	call   0x431c10 ; ["call resolved=0x431c10 "]
  43d02c:	8d 4d f0             	lea    ecx,[ebp-0x10]
  43d02f:	e8 dc 4b ff ff       	call   0x431c10 ; ["call resolved=0x431c10 "]
  43d034:	8d 4d 08             	lea    ecx,[ebp+0x8]
  43d037:	ff 15 f0 f2 47 00    	call   DWORD PTR ds:0x47f2f0 ; ??1QDir@@QAE@XZ
  43d03d:	b0 01                	mov    al,0x1
  43d03f:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  43d042:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  43d049:	59                   	pop    ecx
  43d04a:	8b e5                	mov    esp,ebp
  43d04c:	5d                   	pop    ebp
  43d04d:	c2 08 00             	ret    0x8
  43d050:	55                   	push   ebp
  43d051:	8b ec                	mov    ebp,esp
  43d053:	6a ff                	push   0xffffffff
  43d055:	68 b2 76 47 00       	push   0x4776b2
  43d05a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  43d060:	50                   	push   eax
  43d061:	83 ec 48             	sub    esp,0x48
  43d064:	a1 14 de 49 00       	mov    eax,ds:0x49de14
  43d069:	33 c5                	xor    eax,ebp
  43d06b:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  43d06e:	53                   	push   ebx
  43d06f:	56                   	push   esi
  43d070:	57                   	push   edi
  43d071:	50                   	push   eax
  43d072:	8d 45 f4             	lea    eax,[ebp-0xc]
  43d075:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  43d07b:	8b 75 0c             	mov    esi,DWORD PTR [ebp+0xc]
  43d07e:	8b ce                	mov    ecx,esi
  43d080:	8b 5d 08             	mov    ebx,DWORD PTR [ebp+0x8]
  43d083:	ff 15 90 f4 47 00    	call   DWORD PTR ds:0x47f490 ; ?clear@QByteArray@@QAEXXZ
  43d089:	51                   	push   ecx
  43d08a:	8b c4                	mov    eax,esp
  43d08c:	8d 4d ac             	lea    ecx,[ebp-0x54]
  43d08f:	56                   	push   esi
  43d090:	c7 00 02 00 00 00    	mov    DWORD PTR [eax],0x2
  43d096:	ff 15 34 f4 47 00    	call   DWORD PTR ds:0x47f434 ; ??0QDataStream@@QAE@PAVQByteArray@@V?$QFlags@W4OpenModeFlag@QIODevice@@@@@Z
  43d09c:	8b 4d b0             	mov    ecx,DWORD PTR [ebp-0x50]
  43d09f:	6a 00                	push   0x0
  43d0a1:	6a 00                	push   0x0
  43d0a3:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  43d0aa:	8b 01                	mov    eax,DWORD PTR [ecx]
  43d0ac:	ff 50 40             	call   DWORD PTR [eax+0x40]
  43d0af:	8b cb                	mov    ecx,ebx
  43d0b1:	33 ff                	xor    edi,edi
  43d0b3:	ff 15 a4 f2 47 00    	call   DWORD PTR ds:0x47f2a4 ; ?size@QListData@@QBEHXZ
  43d0b9:	85 c0                	test   eax,eax
  43d0bb:	0f 8e ce 01 00 00    	jle    0x43d28f
  43d0c1:	57                   	push   edi
  43d0c2:	8b cb                	mov    ecx,ebx
  43d0c4:	ff 15 a8 f2 47 00    	call   DWORD PTR ds:0x47f2a8 ; ?at@QListData@@QBEPAPAXH@Z ; ["ĵ\t"]
  43d0ca:	50                   	push   eax
  43d0cb:	8d 4d d0             	lea    ecx,[ebp-0x30]
  43d0ce:	ff 15 b8 f2 47 00    	call   DWORD PTR ds:0x47f2b8 ; ??0QFileInfo@@QAE@ABV0@@Z
  43d0d4:	8d 45 c4             	lea    eax,[ebp-0x3c]
  43d0d7:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  43d0db:	50                   	push   eax
  43d0dc:	8d 4d d0             	lea    ecx,[ebp-0x30]
  43d0df:	ff 15 c8 f2 47 00    	call   DWORD PTR ds:0x47f2c8 ; ?fileName@QFileInfo@@QBE?AVQString@@XZ ; ["ƶ\t"]
  43d0e5:	8d 45 cc             	lea    eax,[ebp-0x34]
  43d0e8:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  43d0ec:	50                   	push   eax
  43d0ed:	8d 4d c4             	lea    ecx,[ebp-0x3c]
  43d0f0:	ff 15 34 f3 47 00    	call   DWORD PTR ds:0x47f334 ; ?toUtf8@QString@@QGBE?AVQByteArray@@XZ
  43d0f6:	8d 4d d0             	lea    ecx,[ebp-0x30]
  43d0f9:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  43d0fd:	c6 45 d4 00          	mov    BYTE PTR [ebp-0x2c],0x0
  43d101:	ff 15 dc f2 47 00    	call   DWORD PTR ds:0x47f2dc ; ?isDir@QFileInfo@@QBE_NXZ
  43d107:	84 c0                	test   al,al
  43d109:	74 09                	je     0x43d114
  43d10b:	c6 45 d4 04          	mov    BYTE PTR [ebp-0x2c],0x4
  43d10f:	e9 fd 00 00 00       	jmp    0x43d211
  43d114:	8d 4d d0             	lea    ecx,[ebp-0x30]
  43d117:	ff 15 d8 f2 47 00    	call   DWORD PTR ds:0x47f2d8 ; ?isFile@QFileInfo@@QBE_NXZ
  43d11d:	84 c0                	test   al,al
  43d11f:	74 09                	je     0x43d12a
  43d121:	c6 45 d4 08          	mov    BYTE PTR [ebp-0x2c],0x8
  43d125:	e9 e7 00 00 00       	jmp    0x43d211
  43d12a:	8d 4d d0             	lea    ecx,[ebp-0x30]
  43d12d:	ff 15 e0 f2 47 00    	call   DWORD PTR ds:0x47f2e0 ; ?isSymLink@QFileInfo@@QBE_NXZ
  43d133:	84 c0                	test   al,al
  43d135:	74 09                	je     0x43d140
  43d137:	c6 45 d4 0a          	mov    BYTE PTR [ebp-0x2c],0xa
  43d13b:	e9 d1 00 00 00       	jmp    0x43d211
  43d140:	8d 45 c8             	lea    eax,[ebp-0x38]
  43d143:	50                   	push   eax
  43d144:	8d 4d d0             	lea    ecx,[ebp-0x30]
  43d147:	ff 15 c4 f2 47 00    	call   DWORD PTR ds:0x47f2c4 ; ?absoluteFilePath@QFileInfo@@QBE?AVQString@@XZ
  43d14d:	8d 45 d8             	lea    eax,[ebp-0x28]
  43d150:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  43d154:	50                   	push   eax
  43d155:	8d 4d c8             	lea    ecx,[ebp-0x38]
  43d158:	ff 15 a0 f2 47 00    	call   DWORD PTR ds:0x47f2a0 ; ?toStdWString@QString@@QBE?AV?$basic_string@_WU?$char_traits@_W@std@@V?$allocator@_W@2@@std@@XZ
  43d15e:	83 7d ec 08          	cmp    DWORD PTR [ebp-0x14],0x8
  43d162:	8d 45 d8             	lea    eax,[ebp-0x28]
  43d165:	6a 00                	push   0x0
  43d167:	0f 43 45 d8          	cmovae eax,DWORD PTR [ebp-0x28]
  43d16b:	68 80 00 00 00       	push   0x80
  43d170:	6a 03                	push   0x3
  43d172:	6a 00                	push   0x0
  43d174:	6a 01                	push   0x1
  43d176:	68 00 00 00 80       	push   0x80000000
  43d17b:	50                   	push   eax
  43d17c:	ff 15 3c f0 47 00    	call   DWORD PTR ds:0x47f03c ; CreateFileW
  43d182:	8b f0                	mov    esi,eax
  43d184:	56                   	push   esi
  43d185:	ff 15 40 f0 47 00    	call   DWORD PTR ds:0x47f040 ; GetFileType
  43d18b:	8b c8                	mov    ecx,eax
  43d18d:	83 fe ff             	cmp    esi,0xffffffff
  43d190:	74 1d                	je     0x43d1af
  43d192:	83 f9 03             	cmp    ecx,0x3
  43d195:	75 06                	jne    0x43d19d
  43d197:	c6 45 d4 01          	mov    BYTE PTR [ebp-0x2c],0x1
  43d19b:	eb 12                	jmp    0x43d1af
  43d19d:	0f b6 45 d4          	movzx  eax,BYTE PTR [ebp-0x2c]
  43d1a1:	83 f9 02             	cmp    ecx,0x2
  43d1a4:	b9 02 00 00 00       	mov    ecx,0x2
  43d1a9:	0f 44 c1             	cmove  eax,ecx
  43d1ac:	88 45 d4             	mov    BYTE PTR [ebp-0x2c],al
  43d1af:	56                   	push   esi
  43d1b0:	ff 15 44 f0 47 00    	call   DWORD PTR ds:0x47f044 ; CloseHandle
  43d1b6:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  43d1b9:	83 fa 08             	cmp    edx,0x8
  43d1bc:	72 32                	jb     0x43d1f0
  43d1be:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  43d1c1:	8d 14 55 02 00 00 00 	lea    edx,[edx*2+0x2]
  43d1c8:	8b c1                	mov    eax,ecx
  43d1ca:	81 fa 00 10 00 00    	cmp    edx,0x1000
  43d1d0:	72 14                	jb     0x43d1e6
  43d1d2:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  43d1d5:	83 c2 23             	add    edx,0x23
  43d1d8:	2b c1                	sub    eax,ecx
  43d1da:	83 c0 fc             	add    eax,0xfffffffc
  43d1dd:	83 f8 1f             	cmp    eax,0x1f
  43d1e0:	0f 87 d2 00 00 00    	ja     0x43d2b8
  43d1e6:	52                   	push   edx
  43d1e7:	51                   	push   ecx
  43d1e8:	e8 34 54 03 00       	call   0x472621 ; ["call resolved=0x472621 "]
  43d1ed:	83 c4 08             	add    esp,0x8
  43d1f0:	33 c0                	xor    eax,eax
  43d1f2:	c7 45 e8 00 00 00 00 	mov    DWORD PTR [ebp-0x18],0x0
  43d1f9:	8d 4d c8             	lea    ecx,[ebp-0x38]
  43d1fc:	c7 45 ec 07 00 00 00 	mov    DWORD PTR [ebp-0x14],0x7
  43d203:	66 89 45 d8          	mov    WORD PTR [ebp-0x28],ax
  43d207:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  43d20b:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  43d211:	6a 00                	push   0x0
  43d213:	8d 4d ac             	lea    ecx,[ebp-0x54]
  43d216:	ff 15 20 f4 47 00    	call   DWORD PTR ds:0x47f420 ; ??6QDataStream@@QAEAAV0@H@Z
  43d21c:	6a 00                	push   0x0
  43d21e:	6a 00                	push   0x0
  43d220:	8d 4d ac             	lea    ecx,[ebp-0x54]
  43d223:	ff 15 20 f3 47 00    	call   DWORD PTR ds:0x47f320 ; ??6QDataStream@@QAEAAV0@_J@Z
  43d229:	8b 45 cc             	mov    eax,DWORD PTR [ebp-0x34]
  43d22c:	8d 4d ac             	lea    ecx,[ebp-0x54]
  43d22f:	ff 70 04             	push   DWORD PTR [eax+0x4]
  43d232:	ff 15 1c f3 47 00    	call   DWORD PTR ds:0x47f31c ; ??6QDataStream@@QAEAAV0@F@Z
  43d238:	ff 75 d4             	push   DWORD PTR [ebp-0x2c]
  43d23b:	8d 4d ac             	lea    ecx,[ebp-0x54]
  43d23e:	ff 15 24 f4 47 00    	call   DWORD PTR ds:0x47f424 ; ??6QDataStream@@QAEAAV0@C@Z
  43d244:	8b 45 cc             	mov    eax,DWORD PTR [ebp-0x34]
  43d247:	8d 4d cc             	lea    ecx,[ebp-0x34]
  43d24a:	8b 70 04             	mov    esi,DWORD PTR [eax+0x4]
  43d24d:	46                   	inc    esi
  43d24e:	ff 15 b4 f1 47 00    	call   DWORD PTR ds:0x47f1b4 ; ?constData@QByteArray@@QBEPBDXZ ; ["ƫ\t"]
  43d254:	56                   	push   esi
  43d255:	50                   	push   eax
  43d256:	8d 4d ac             	lea    ecx,[ebp-0x54]
  43d259:	ff 15 24 f3 47 00    	call   DWORD PTR ds:0x47f324 ; ?writeRawData@QDataStream@@QAEHPBDH@Z
  43d25f:	8d 4d cc             	lea    ecx,[ebp-0x34]
  43d262:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  43d268:	8d 4d c4             	lea    ecx,[ebp-0x3c]
  43d26b:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  43d271:	8d 4d d0             	lea    ecx,[ebp-0x30]
  43d274:	c6 45 fc 00          	mov    BYTE PTR [ebp-0x4],0x0
  43d278:	ff 15 bc f2 47 00    	call   DWORD PTR ds:0x47f2bc ; ??1QFileInfo@@QAE@XZ
  43d27e:	8b cb                	mov    ecx,ebx
  43d280:	47                   	inc    edi
  43d281:	ff 15 a4 f2 47 00    	call   DWORD PTR ds:0x47f2a4 ; ?size@QListData@@QBEHXZ
  43d287:	3b f8                	cmp    edi,eax
  43d289:	0f 8c 32 fe ff ff    	jl     0x43d0c1
  43d28f:	8d 4d ac             	lea    ecx,[ebp-0x54]
  43d292:	ff 15 2c f4 47 00    	call   DWORD PTR ds:0x47f42c ; ??1QDataStream@@QAE@XZ
  43d298:	b0 01                	mov    al,0x1
  43d29a:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  43d29d:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  43d2a4:	59                   	pop    ecx
  43d2a5:	5f                   	pop    edi
  43d2a6:	5e                   	pop    esi
  43d2a7:	5b                   	pop    ebx
  43d2a8:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  43d2ab:	33 cd                	xor    ecx,ebp
  43d2ad:	e8 ce 55 03 00       	call   0x472880 ; ["call resolved=0x472880 "]
  43d2b2:	8b e5                	mov    esp,ebp
  43d2b4:	5d                   	pop    ebp
  43d2b5:	c2 0c 00             	ret    0xc
  43d2b8:	ff 15 68 f6 47 00    	call   DWORD PTR ds:0x47f668 ; _invalid_parameter_noinfo_noreturn
