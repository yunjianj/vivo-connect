; vdfs_server_connector::ParseRequest; image base 0x400000; static annotation only
  443f70:	55                   	push   ebp
  443f71:	8b ec                	mov    ebp,esp
  443f73:	6a ff                	push   0xffffffff
  443f75:	68 c8 82 47 00       	push   0x4782c8
  443f7a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  443f80:	50                   	push   eax
  443f81:	81 ec a8 00 00 00    	sub    esp,0xa8
  443f87:	a1 14 de 49 00       	mov    eax,ds:0x49de14
  443f8c:	33 c5                	xor    eax,ebp
  443f8e:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  443f91:	56                   	push   esi
  443f92:	57                   	push   edi
  443f93:	50                   	push   eax
  443f94:	8d 45 f4             	lea    eax,[ebp-0xc]
  443f97:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  443f9d:	8b f9                	mov    edi,ecx
  443f9f:	8b 45 0c             	mov    eax,DWORD PTR [ebp+0xc]
  443fa2:	8d 4d 8c             	lea    ecx,[ebp-0x74]
  443fa5:	8b 75 08             	mov    esi,DWORD PTR [ebp+0x8]
  443fa8:	0f 57 c0             	xorps  xmm0,xmm0
  443fab:	89 45 94             	mov    DWORD PTR [ebp-0x6c],eax
  443fae:	8b 45 10             	mov    eax,DWORD PTR [ebp+0x10]
  443fb1:	56                   	push   esi
  443fb2:	89 45 98             	mov    DWORD PTR [ebp-0x68],eax
  443fb5:	0f 11 45 b4          	movups XMMWORD PTR [ebp-0x4c],xmm0
  443fb9:	0f 11 45 c4          	movups XMMWORD PTR [ebp-0x3c],xmm0
  443fbd:	ff 15 4c f3 47 00    	call   DWORD PTR ds:0x47f34c ; ??0QByteArray@@QAE@ABV0@@Z
  443fc3:	51                   	push   ecx
  443fc4:	8b c4                	mov    eax,esp
  443fc6:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  443fcd:	8d 8d 4c ff ff ff    	lea    ecx,[ebp-0xb4]
  443fd3:	c7 00 01 00 00 00    	mov    DWORD PTR [eax],0x1
  443fd9:	8d 45 8c             	lea    eax,[ebp-0x74]
  443fdc:	50                   	push   eax
  443fdd:	ff 15 34 f4 47 00    	call   DWORD PTR ds:0x47f434 ; ??0QDataStream@@QAE@PAVQByteArray@@V?$QFlags@W4OpenModeFlag@QIODevice@@@@@Z
  443fe3:	8b 8d 50 ff ff ff    	mov    ecx,DWORD PTR [ebp-0xb0]
  443fe9:	6a 00                	push   0x0
  443feb:	6a 00                	push   0x0
  443fed:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  443ff1:	8b 01                	mov    eax,DWORD PTR [ecx]
  443ff3:	ff 50 40             	call   DWORD PTR [eax+0x40]
  443ff6:	8d 45 a4             	lea    eax,[ebp-0x5c]
  443ff9:	50                   	push   eax
  443ffa:	8d 8d 4c ff ff ff    	lea    ecx,[ebp-0xb4]
  444000:	ff 15 28 f4 47 00    	call   DWORD PTR ds:0x47f428 ; ??5QDataStream@@QAEAAV0@AA_J@Z
  444006:	8d 4d 9c             	lea    ecx,[ebp-0x64]
  444009:	ff 15 9c f4 47 00    	call   DWORD PTR ds:0x47f49c ; ??0QByteArray@@QAE@XZ
  44400f:	8b 45 a4             	mov    eax,DWORD PTR [ebp-0x5c]
  444012:	8b ce                	mov    ecx,esi
  444014:	83 c0 f8             	add    eax,0xfffffff8
  444017:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  44401b:	50                   	push   eax
  44401c:	6a 08                	push   0x8
  44401e:	8d 45 90             	lea    eax,[ebp-0x70]
  444021:	50                   	push   eax
  444022:	ff 15 8c f4 47 00    	call   DWORD PTR ds:0x47f48c ; ?mid@QByteArray@@QBE?AV1@HH@Z
  444028:	8d 45 9c             	lea    eax,[ebp-0x64]
  44402b:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  44402f:	50                   	push   eax
  444030:	8d 45 90             	lea    eax,[ebp-0x70]
  444033:	50                   	push   eax
  444034:	8d 47 20             	lea    eax,[edi+0x20]
  444037:	50                   	push   eax
  444038:	8d 47 08             	lea    eax,[edi+0x8]
  44403b:	50                   	push   eax
  44403c:	e8 8f 7e ff ff       	call   0x43bed0 ; ["call resolved=0x43bed0 vdfs_cryptopp::decrypt"]
  444041:	83 c4 10             	add    esp,0x10
  444044:	84 c0                	test   al,al
  444046:	0f 84 96 01 00 00    	je     0x4441e2
  44404c:	8b 45 9c             	mov    eax,DWORD PTR [ebp-0x64]
  44404f:	83 78 04 00          	cmp    DWORD PTR [eax+0x4],0x0
  444053:	0f 8e 89 01 00 00    	jle    0x4441e2
  444059:	51                   	push   ecx
  44405a:	8b c4                	mov    eax,esp
  44405c:	8d 8d 64 ff ff ff    	lea    ecx,[ebp-0x9c]
  444062:	c7 00 01 00 00 00    	mov    DWORD PTR [eax],0x1
  444068:	8d 45 9c             	lea    eax,[ebp-0x64]
  44406b:	50                   	push   eax
  44406c:	ff 15 34 f4 47 00    	call   DWORD PTR ds:0x47f434 ; ??0QDataStream@@QAE@PAVQByteArray@@V?$QFlags@W4OpenModeFlag@QIODevice@@@@@Z
  444072:	8b 8d 68 ff ff ff    	mov    ecx,DWORD PTR [ebp-0x98]
  444078:	6a 00                	push   0x0
  44407a:	6a 00                	push   0x0
  44407c:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  444080:	8b 01                	mov    eax,DWORD PTR [ecx]
  444082:	ff 50 40             	call   DWORD PTR [eax+0x40]
  444085:	8b 35 68 f3 47 00    	mov    esi,DWORD PTR ds:0x47f368
  44408b:	8d 45 ac             	lea    eax,[ebp-0x54]
  44408e:	50                   	push   eax
  44408f:	8d 8d 64 ff ff ff    	lea    ecx,[ebp-0x9c]
  444095:	ff d6                	call   esi
  444097:	8d 4d b0             	lea    ecx,[ebp-0x50]
  44409a:	51                   	push   ecx
  44409b:	8b c8                	mov    ecx,eax
  44409d:	ff 15 6c f3 47 00    	call   DWORD PTR ds:0x47f36c ; ??5QDataStream@@QAEAAV0@AAH@Z
  4440a3:	8b 8d 68 ff ff ff    	mov    ecx,DWORD PTR [ebp-0x98]
  4440a9:	8d 45 dc             	lea    eax,[ebp-0x24]
  4440ac:	6a 00                	push   0x0
  4440ae:	6a 10                	push   0x10
  4440b0:	50                   	push   eax
  4440b1:	ff 15 64 f3 47 00    	call   DWORD PTR ds:0x47f364 ; ?read@QIODevice@@QAE_JPAD_J@Z
  4440b7:	8d 45 d4             	lea    eax,[ebp-0x2c]
  4440ba:	c6 45 ec 00          	mov    BYTE PTR [ebp-0x14],0x0
  4440be:	50                   	push   eax
  4440bf:	8d 8d 64 ff ff ff    	lea    ecx,[ebp-0x9c]
  4440c5:	ff d6                	call   esi
  4440c7:	0f b6 45 d4          	movzx  eax,BYTE PTR [ebp-0x2c]
  4440cb:	83 c0 fe             	add    eax,0xfffffffe
  4440ce:	83 f8 10             	cmp    eax,0x10
  4440d1:	0f 87 8f 00 00 00    	ja     0x444166
  4440d7:	0f b6 80 90 42 44 00 	movzx  eax,BYTE PTR [eax+0x444290]
  4440de:	ff 24 85 78 42 44 00 	jmp    DWORD PTR [eax*4+0x444278]
  4440e5:	ff 75 a8             	push   DWORD PTR [ebp-0x58]
  4440e8:	8b 45 98             	mov    eax,DWORD PTR [ebp-0x68]
  4440eb:	8b cf                	mov    ecx,edi
  4440ed:	ff 75 a4             	push   DWORD PTR [ebp-0x5c]
  4440f0:	ff 75 94             	push   DWORD PTR [ebp-0x6c]
  4440f3:	c6 00 03             	mov    BYTE PTR [eax],0x3
  4440f6:	8d 45 9c             	lea    eax,[ebp-0x64]
  4440f9:	50                   	push   eax
  4440fa:	e8 31 ef ff ff       	call   0x443030 ; ["call resolved=0x443030 vdfs_server_connector::ParseAttrRequest"]
  4440ff:	e9 a9 00 00 00       	jmp    0x4441ad
  444104:	8b 45 98             	mov    eax,DWORD PTR [ebp-0x68]
  444107:	8d 4f 38             	lea    ecx,[edi+0x38]
  44410a:	c6 00 06             	mov    BYTE PTR [eax],0x6
  44410d:	8d 45 9c             	lea    eax,[ebp-0x64]
  444110:	50                   	push   eax
  444111:	ff 15 e8 f4 47 00    	call   DWORD PTR ds:0x47f4e8 ; ??4QByteArray@@QAEAAV0@ABV0@@Z
  444117:	8b 45 a4             	mov    eax,DWORD PTR [ebp-0x5c]
  44411a:	8b 4d a8             	mov    ecx,DWORD PTR [ebp-0x58]
  44411d:	89 47 40             	mov    DWORD PTR [edi+0x40],eax
  444120:	89 4f 44             	mov    DWORD PTR [edi+0x44],ecx
  444123:	e9 85 00 00 00       	jmp    0x4441ad
  444128:	ff 75 a8             	push   DWORD PTR [ebp-0x58]
  44412b:	8b 45 98             	mov    eax,DWORD PTR [ebp-0x68]
  44412e:	8b cf                	mov    ecx,edi
  444130:	ff 75 a4             	push   DWORD PTR [ebp-0x5c]
  444133:	ff 75 94             	push   DWORD PTR [ebp-0x6c]
  444136:	c6 00 02             	mov    BYTE PTR [eax],0x2
  444139:	8d 45 9c             	lea    eax,[ebp-0x64]
  44413c:	50                   	push   eax
  44413d:	e8 ae f4 ff ff       	call   0x4435f0 ; ["call resolved=0x4435f0 vdfs_server_connector::ParseDirentRequest"]
  444142:	eb 69                	jmp    0x4441ad
  444144:	8b 45 98             	mov    eax,DWORD PTR [ebp-0x68]
  444147:	c6 00 0a             	mov    BYTE PTR [eax],0xa
  44414a:	8d 45 a3             	lea    eax,[ebp-0x5d]
  44414d:	c6 45 a3 03          	mov    BYTE PTR [ebp-0x5d],0x3
  444151:	50                   	push   eax
  444152:	ff 75 94             	push   DWORD PTR [ebp-0x6c]
  444155:	8b cf                	mov    ecx,edi
  444157:	e8 54 01 00 00       	call   0x4442b0 ; ["call resolved=0x4442b0 vdfs_server_connector::errReply"]
  44415c:	eb 4f                	jmp    0x4441ad
  44415e:	8b 45 98             	mov    eax,DWORD PTR [ebp-0x68]
  444161:	c6 00 12             	mov    BYTE PTR [eax],0x12
  444164:	eb e4                	jmp    0x44414a
  444166:	8b 45 98             	mov    eax,DWORD PTR [ebp-0x68]
  444169:	c7 85 7c ff ff ff 50 	mov    DWORD PTR [ebp-0x84],0x486250 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Parse\\vdfs_server_connector.cpp"]
  444173:	c7 45 80 57 00 00 00 	mov    DWORD PTR [ebp-0x80],0x57
  44417a:	f3 0f 7e 85 7c ff ff 	movq   xmm0,QWORD PTR [ebp-0x84]
  444182:	c6 00 14             	mov    BYTE PTR [eax],0x14
  444185:	8d 45 d4             	lea    eax,[ebp-0x2c]
  444188:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  44418e:	50                   	push   eax
  44418f:	6a 1f                	push   0x1f
  444191:	68 90 62 48 00       	push   0x486290 ; ["No such function temporarily {}"]
  444196:	6a 03                	push   0x3
  444198:	83 ec 0c             	sub    esp,0xc
  44419b:	8b c4                	mov    eax,esp
  44419d:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  4441a1:	c7 40 08 28 62 48 00 	mov    DWORD PTR [eax+0x8],0x486228 ; ["vdfs_server_connector::ParseRequest"]
  4441a8:	e8 63 4d fc ff       	call   0x408f10 ; ["call resolved=0x408f10 "]
  4441ad:	8b 35 2c f4 47 00    	mov    esi,DWORD PTR ds:0x47f42c
  4441b3:	8d 8d 64 ff ff ff    	lea    ecx,[ebp-0x9c]
  4441b9:	ff d6                	call   esi
  4441bb:	8d 4d 90             	lea    ecx,[ebp-0x70]
  4441be:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  4441c4:	8d 4d 9c             	lea    ecx,[ebp-0x64]
  4441c7:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  4441cd:	8d 8d 4c ff ff ff    	lea    ecx,[ebp-0xb4]
  4441d3:	ff d6                	call   esi
  4441d5:	8d 4d 8c             	lea    ecx,[ebp-0x74]
  4441d8:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  4441de:	b0 01                	mov    al,0x1
  4441e0:	eb 77                	jmp    0x444259
  4441e2:	8b 45 98             	mov    eax,DWORD PTR [ebp-0x68]
  4441e5:	83 ec 08             	sub    esp,0x8
  4441e8:	c7 85 7c ff ff ff 50 	mov    DWORD PTR [ebp-0x84],0x486250 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Parse\\vdfs_server_connector.cpp"]
  4441f2:	c7 45 80 27 00 00 00 	mov    DWORD PTR [ebp-0x80],0x27
  4441f9:	f3 0f 7e 85 7c ff ff 	movq   xmm0,QWORD PTR [ebp-0x84]
  444201:	c6 00 09             	mov    BYTE PTR [eax],0x9
  444204:	8b c4                	mov    eax,esp
  444206:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  44420c:	6a 04                	push   0x4
  44420e:	83 ec 0c             	sub    esp,0xc
  444211:	c7 00 14 62 48 00    	mov    DWORD PTR [eax],0x486214 ; ["Decryption failed"]
  444217:	c7 40 04 11 00 00 00 	mov    DWORD PTR [eax+0x4],0x11
  44421e:	8b c4                	mov    eax,esp
  444220:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  444224:	c7 40 08 28 62 48 00 	mov    DWORD PTR [eax+0x8],0x486228 ; ["vdfs_server_connector::ParseRequest"]
  44422b:	e8 e0 75 fd ff       	call   0x41b810 ; ["call resolved=0x41b810 "]
  444230:	8d 4d 90             	lea    ecx,[ebp-0x70]
  444233:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  444239:	8d 4d 9c             	lea    ecx,[ebp-0x64]
  44423c:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  444242:	8d 8d 4c ff ff ff    	lea    ecx,[ebp-0xb4]
  444248:	ff 15 2c f4 47 00    	call   DWORD PTR ds:0x47f42c ; ??1QDataStream@@QAE@XZ
  44424e:	8d 4d 8c             	lea    ecx,[ebp-0x74]
  444251:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  444257:	32 c0                	xor    al,al
  444259:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  44425c:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  444263:	59                   	pop    ecx
  444264:	5f                   	pop    edi
  444265:	5e                   	pop    esi
  444266:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  444269:	33 cd                	xor    ecx,ebp
  44426b:	e8 10 e6 02 00       	call   0x472880 ; ["call resolved=0x472880 "]
  444270:	8b e5                	mov    esp,ebp
  444272:	5d                   	pop    ebp
  444273:	c2 0c 00             	ret    0xc
  444276:	66 90                	xchg   ax,ax
  444278:	28 41 44             	sub    BYTE PTR [ecx+0x44],al
  44427b:	00 e5                	add    ch,ah
  44427d:	40                   	inc    eax
  44427e:	44                   	inc    esp
  44427f:	00 04 41             	add    BYTE PTR [ecx+eax*2],al
  444282:	44                   	inc    esp
  444283:	00 44 41 44          	add    BYTE PTR [ecx+eax*2+0x44],al
  444287:	00 5e 41             	add    BYTE PTR [esi+0x41],bl
  44428a:	44                   	inc    esp
  44428b:	00 66 41             	add    BYTE PTR [esi+0x41],ah
  44428e:	44                   	inc    esp
  44428f:	00 00                	add    BYTE PTR [eax],al
  444291:	01 05 05 02 05 05    	add    DWORD PTR ds:0x5050205,eax
  444297:	05 03 05 05 05       	add    eax,0x5050503
  44429c:	05 05 05 05 04       	add    eax,0x4050505
