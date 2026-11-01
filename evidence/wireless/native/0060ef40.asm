; fn_60ef40; image base 0x400000; static annotation only
  60ef40:	55                   	push   ebp
  60ef41:	8d ac 24 dc f8 ff ff 	lea    ebp,[esp-0x724]
  60ef48:	81 ec 24 07 00 00    	sub    esp,0x724
  60ef4e:	6a ff                	push   0xffffffff
  60ef50:	68 fc bb 69 00       	push   0x69bbfc
  60ef55:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  60ef5b:	50                   	push   eax
  60ef5c:	83 ec 3c             	sub    esp,0x3c
  60ef5f:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  60ef64:	33 c5                	xor    eax,ebp
  60ef66:	89 85 20 07 00 00    	mov    DWORD PTR [ebp+0x720],eax
  60ef6c:	53                   	push   ebx
  60ef6d:	56                   	push   esi
  60ef6e:	57                   	push   edi
  60ef6f:	50                   	push   eax
  60ef70:	8d 45 f4             	lea    eax,[ebp-0xc]
  60ef73:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  60ef79:	8b f9                	mov    edi,ecx
  60ef7b:	8b 85 2c 07 00 00    	mov    eax,DWORD PTR [ebp+0x72c]
  60ef81:	8b b5 30 07 00 00    	mov    esi,DWORD PTR [ebp+0x730]
  60ef87:	89 45 d8             	mov    DWORD PTR [ebp-0x28],eax
  60ef8a:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  60ef91:	b9 03 aa 7a 00       	mov    ecx,0x7aaa03
  60ef96:	e8 53 9b df ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  60ef9b:	8d 45 d0             	lea    eax,[ebp-0x30]
  60ef9e:	50                   	push   eax
  60ef9f:	ff 15 6c e5 79 00    	call   DWORD PTR ds:0x79e56c
  60efa5:	8d 45 d0             	lea    eax,[ebp-0x30]
  60efa8:	50                   	push   eax
  60efa9:	ff 15 84 e5 79 00    	call   DWORD PTR ds:0x79e584
  60efaf:	50                   	push   eax
  60efb0:	68 78 3e 6c 00       	push   0x6c3e78 ; ["%Y-%m-%d %H:%M:%S"]
  60efb5:	68 00 04 00 00       	push   0x400
  60efba:	68 b8 98 79 00       	push   0x7998b8
  60efbf:	ff 15 70 e5 79 00    	call   DWORD PTR ds:0x79e570
  60efc5:	68 fc 61 6f 00       	push   0x6f61fc ; ["com.vivo.share.CONNECT_PC"]
  60efca:	68 34 68 6c 00       	push   0x6c6834 ; ["com.vivo.pcsuite.SERVICE"]
  60efcf:	8d 85 a0 06 00 00    	lea    eax,[ebp+0x6a0]
  60efd5:	68 1c 62 6f 00       	push   0x6f621c ; ["%s--%s"]
  60efda:	50                   	push   eax
  60efdb:	e8 26 ab df ff       	call   0x409b06 ; ["call resolved=0x4c8590 "]
  60efe0:	83 c4 28             	add    esp,0x28
  60efe3:	8d 4d dc             	lea    ecx,[ebp-0x24]
  60efe6:	6a 00                	push   0x0
  60efe8:	e8 d5 58 df ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  60efed:	83 ec 10             	sub    esp,0x10
  60eff0:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  60eff4:	8b cc                	mov    ecx,esp
  60eff6:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  60eff9:	56                   	push   esi
  60effa:	e8 82 76 df ff       	call   0x406681 ; ["call resolved=0x43d750 "]
  60efff:	68 54 4d 6c 00       	push   0x6c4d54 ; ["deviceId"]
  60f004:	8d 4d dc             	lea    ecx,[ebp-0x24]
  60f007:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  60f00b:	e8 ce 46 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  60f010:	8b c8                	mov    ecx,eax
  60f012:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  60f016:	e8 6a 54 df ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  60f01b:	83 ec 10             	sub    esp,0x10
  60f01e:	0f 57 c0             	xorps  xmm0,xmm0
  60f021:	8b dc                	mov    ebx,esp
  60f023:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  60f026:	6a 18                	push   0x18
  60f028:	66 0f d6 43 08       	movq   QWORD PTR [ebx+0x8],xmm0
  60f02d:	c6 03 03             	mov    BYTE PTR [ebx],0x3
  60f030:	e8 81 41 df ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  60f035:	8b f0                	mov    esi,eax
  60f037:	83 c4 04             	add    esp,0x4
  60f03a:	8d 45 ef             	lea    eax,[ebp-0x11]
  60f03d:	89 75 cc             	mov    DWORD PTR [ebp-0x34],esi
  60f040:	89 45 c8             	mov    DWORD PTR [ebp-0x38],eax
  60f043:	8d 8d a0 06 00 00    	lea    ecx,[ebp+0x6a0]
  60f049:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  60f04d:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  60f053:	8d 51 01             	lea    edx,[ecx+0x1]
  60f056:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  60f05d:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  60f064:	8a 01                	mov    al,BYTE PTR [ecx]
  60f066:	41                   	inc    ecx
  60f067:	84 c0                	test   al,al
  60f069:	75 f9                	jne    0x60f064
  60f06b:	2b ca                	sub    ecx,edx
  60f06d:	8d 85 a0 06 00 00    	lea    eax,[ebp+0x6a0]
  60f073:	51                   	push   ecx
  60f074:	50                   	push   eax
  60f075:	8b ce                	mov    ecx,esi
  60f077:	e8 9b 53 df ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  60f07c:	89 73 08             	mov    DWORD PTR [ebx+0x8],esi
  60f07f:	68 24 62 6f 00       	push   0x6f6224 ; ["serviceRecord"]
  60f084:	8d 4d dc             	lea    ecx,[ebp-0x24]
  60f087:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  60f08b:	e8 4e 46 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  60f090:	8b c8                	mov    ecx,eax
  60f092:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  60f096:	e8 ea 53 df ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  60f09b:	83 ec 10             	sub    esp,0x10
  60f09e:	8b cc                	mov    ecx,esp
  60f0a0:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  60f0a3:	ff 75 d8             	push   DWORD PTR [ebp-0x28]
  60f0a6:	e8 d6 75 df ff       	call   0x406681 ; ["call resolved=0x43d750 "]
  60f0ab:	68 a4 4b 6c 00       	push   0x6c4ba4 ; ["deviceName"]
  60f0b0:	8d 4d dc             	lea    ecx,[ebp-0x24]
  60f0b3:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  60f0b7:	e8 22 46 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  60f0bc:	8b c8                	mov    ecx,eax
  60f0be:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  60f0c2:	e8 be 53 df ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  60f0c7:	83 ec 10             	sub    esp,0x10
  60f0ca:	8d 85 34 07 00 00    	lea    eax,[ebp+0x734]
  60f0d0:	8b cc                	mov    ecx,esp
  60f0d2:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  60f0d5:	50                   	push   eax
  60f0d6:	e8 35 5a df ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  60f0db:	68 60 4d 6c 00       	push   0x6c4d60 ; ["account"]
  60f0e0:	8d 4d dc             	lea    ecx,[ebp-0x24]
  60f0e3:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  60f0e7:	e8 f2 45 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  60f0ec:	8b c8                	mov    ecx,eax
  60f0ee:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  60f0f2:	e8 8e 53 df ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  60f0f7:	83 ec 10             	sub    esp,0x10
  60f0fa:	0f 57 c0             	xorps  xmm0,xmm0
  60f0fd:	8b f4                	mov    esi,esp
  60f0ff:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  60f102:	6a 18                	push   0x18
  60f104:	66 0f d6 46 08       	movq   QWORD PTR [esi+0x8],xmm0
  60f109:	c6 06 03             	mov    BYTE PTR [esi],0x3
  60f10c:	e8 a5 40 df ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  60f111:	83 c4 04             	add    esp,0x4
  60f114:	c7 00 00 00 00 00    	mov    DWORD PTR [eax],0x0
  60f11a:	c7 40 14 0f 00 00 00 	mov    DWORD PTR [eax+0x14],0xf
  60f121:	c7 40 10 02 00 00 00 	mov    DWORD PTR [eax+0x10],0x2
  60f128:	66 8b 0d 5c 7c 6d 00 	mov    cx,WORD PTR ds:0x6d7c5c ; ["pc"]
  60f12f:	66 89 08             	mov    WORD PTR [eax],cx
  60f132:	c6 40 02 00          	mov    BYTE PTR [eax+0x2],0x0
  60f136:	89 46 08             	mov    DWORD PTR [esi+0x8],eax
  60f139:	68 b0 4d 6c 00       	push   0x6c4db0 ; ["deviceType"]
  60f13e:	8d 4d dc             	lea    ecx,[ebp-0x24]
  60f141:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  60f145:	e8 94 45 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  60f14a:	8b c8                	mov    ecx,eax
  60f14c:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  60f150:	e8 30 53 df ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  60f155:	83 ec 10             	sub    esp,0x10
  60f158:	8b c4                	mov    eax,esp
  60f15a:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  60f15d:	c6 00 05             	mov    BYTE PTR [eax],0x5
  60f160:	c7 40 08 cf 27 00 00 	mov    DWORD PTR [eax+0x8],0x27cf
  60f167:	c7 40 0c 00 00 00 00 	mov    DWORD PTR [eax+0xc],0x0
  60f16e:	68 68 43 6d 00       	push   0x6d4368 ; ["port"]
  60f173:	8d 4d dc             	lea    ecx,[ebp-0x24]
  60f176:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  60f17a:	e8 5f 45 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  60f17f:	8b c8                	mov    ecx,eax
  60f181:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  60f185:	e8 fb 52 df ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  60f18a:	83 ec 10             	sub    esp,0x10
  60f18d:	0f 57 c0             	xorps  xmm0,xmm0
  60f190:	8b f4                	mov    esi,esp
  60f192:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  60f195:	6a 18                	push   0x18
  60f197:	66 0f d6 46 08       	movq   QWORD PTR [esi+0x8],xmm0
  60f19c:	c6 06 03             	mov    BYTE PTR [esi],0x3
  60f19f:	e8 12 40 df ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  60f1a4:	83 c4 04             	add    esp,0x4
  60f1a7:	c7 00 00 00 00 00    	mov    DWORD PTR [eax],0x0
  60f1ad:	c7 40 14 0f 00 00 00 	mov    DWORD PTR [eax+0x14],0xf
  60f1b4:	c7 40 10 04 00 00 00 	mov    DWORD PTR [eax+0x10],0x4
  60f1bb:	8b 0d c8 4f 6c 00    	mov    ecx,DWORD PTR ds:0x6c4fc8 ; ["null"]
  60f1c1:	89 08                	mov    DWORD PTR [eax],ecx
  60f1c3:	8b ce                	mov    ecx,esi
  60f1c5:	c6 40 04 00          	mov    BYTE PTR [eax+0x4],0x0
  60f1c9:	89 46 08             	mov    DWORD PTR [esi+0x8],eax
  60f1cc:	e8 0d ae df ff       	call   0x409fde ; ["call resolved=0x480970 "]
  60f1d1:	8b ce                	mov    ecx,esi
  60f1d3:	e8 06 ae df ff       	call   0x409fde ; ["call resolved=0x480970 "]
  60f1d8:	68 34 62 6f 00       	push   0x6f6234 ; ["extra"]
  60f1dd:	8d 4d dc             	lea    ecx,[ebp-0x24]
  60f1e0:	c6 45 fc 0c          	mov    BYTE PTR [ebp-0x4],0xc
  60f1e4:	e8 f5 44 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  60f1e9:	8b c8                	mov    ecx,eax
  60f1eb:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  60f1ef:	e8 91 52 df ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  60f1f4:	83 ec 10             	sub    esp,0x10
  60f1f7:	8d 85 4c 07 00 00    	lea    eax,[ebp+0x74c]
  60f1fd:	8b cc                	mov    ecx,esp
  60f1ff:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  60f202:	50                   	push   eax
  60f203:	e8 08 59 df ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  60f208:	68 6c 4d 6c 00       	push   0x6c4d6c ; ["openId"]
  60f20d:	8d 4d dc             	lea    ecx,[ebp-0x24]
  60f210:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  60f214:	e8 c5 44 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  60f219:	8b c8                	mov    ecx,eax
  60f21b:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  60f21f:	e8 61 52 df ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  60f224:	68 00 04 00 00       	push   0x400
  60f229:	8d 85 a0 00 00 00    	lea    eax,[ebp+0xa0]
  60f22f:	6a 00                	push   0x0
  60f231:	50                   	push   eax
  60f232:	e8 5f 95 05 00       	call   0x668796 ; ["call resolved=0x668796 "]
  60f237:	83 c4 0c             	add    esp,0xc
  60f23a:	8d 45 70             	lea    eax,[ebp+0x70]
  60f23d:	8d 4d dc             	lea    ecx,[ebp-0x24]
  60f240:	6a 00                	push   0x0
  60f242:	6a 00                	push   0x0
  60f244:	6a 20                	push   0x20
  60f246:	6a ff                	push   0xffffffff
  60f248:	50                   	push   eax
  60f249:	e8 d0 95 df ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  60f24e:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  60f252:	72 02                	jb     0x60f256
  60f254:	8b 00                	mov    eax,DWORD PTR [eax]
  60f256:	8d 95 a0 00 00 00    	lea    edx,[ebp+0xa0]
  60f25c:	2b d0                	sub    edx,eax
  60f25e:	66 90                	xchg   ax,ax
  60f260:	8a 08                	mov    cl,BYTE PTR [eax]
  60f262:	8d 40 01             	lea    eax,[eax+0x1]
  60f265:	88 4c 02 ff          	mov    BYTE PTR [edx+eax*1-0x1],cl
  60f269:	84 c9                	test   cl,cl
  60f26b:	75 f3                	jne    0x60f260
  60f26d:	8d 4d 70             	lea    ecx,[ebp+0x70]
  60f270:	e8 8e 47 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  60f275:	c7 45 70 00 00 00 00 	mov    DWORD PTR [ebp+0x70],0x0
  60f27c:	c7 85 80 00 00 00 00 	mov    DWORD PTR [ebp+0x80],0x0
  60f286:	c7 85 84 00 00 00 0f 	mov    DWORD PTR [ebp+0x84],0xf
  60f290:	c6 45 70 00          	mov    BYTE PTR [ebp+0x70],0x0
  60f294:	c7 85 88 00 00 00 00 	mov    DWORD PTR [ebp+0x88],0x0
  60f29e:	c7 85 98 00 00 00 00 	mov    DWORD PTR [ebp+0x98],0x0
  60f2a8:	c7 85 9c 00 00 00 0f 	mov    DWORD PTR [ebp+0x9c],0xf
  60f2b2:	c6 85 88 00 00 00 00 	mov    BYTE PTR [ebp+0x88],0x0
  60f2b9:	6a 00                	push   0x0
  60f2bb:	6a 00                	push   0x0
  60f2bd:	6a 20                	push   0x20
  60f2bf:	6a ff                	push   0xffffffff
  60f2c1:	8d 45 58             	lea    eax,[ebp+0x58]
  60f2c4:	c6 45 fc 0f          	mov    BYTE PTR [ebp-0x4],0xf
  60f2c8:	50                   	push   eax
  60f2c9:	8d 4d dc             	lea    ecx,[ebp-0x24]
  60f2cc:	e8 4d 95 df ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  60f2d1:	8d 4d 58             	lea    ecx,[ebp+0x58]
  60f2d4:	8b 70 10             	mov    esi,DWORD PTR [eax+0x10]
  60f2d7:	e8 27 47 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  60f2dc:	8d 4d 00             	lea    ecx,[ebp+0x0]
  60f2df:	e8 a5 7a df ff       	call   0x406d89 ; ["call resolved=0x606c70 "]
  60f2e4:	56                   	push   esi
  60f2e5:	83 ec 18             	sub    esp,0x18
  60f2e8:	c6 45 fc 10          	mov    BYTE PTR [ebp-0x4],0x10
  60f2ec:	8b d4                	mov    edx,esp
  60f2ee:	8d 8d a0 00 00 00    	lea    ecx,[ebp+0xa0]
  60f2f4:	8d 71 01             	lea    esi,[ecx+0x1]
  60f2f7:	c7 02 00 00 00 00    	mov    DWORD PTR [edx],0x0
  60f2fd:	c7 42 10 00 00 00 00 	mov    DWORD PTR [edx+0x10],0x0
  60f304:	c7 42 14 0f 00 00 00 	mov    DWORD PTR [edx+0x14],0xf
  60f30b:	0f 1f 44 00 00       	nop    DWORD PTR [eax+eax*1+0x0]
  60f310:	8a 01                	mov    al,BYTE PTR [ecx]
  60f312:	41                   	inc    ecx
  60f313:	84 c0                	test   al,al
  60f315:	75 f9                	jne    0x60f310
  60f317:	2b ce                	sub    ecx,esi
  60f319:	8d 85 a0 00 00 00    	lea    eax,[ebp+0xa0]
  60f31f:	51                   	push   ecx
  60f320:	50                   	push   eax
  60f321:	8b ca                	mov    ecx,edx
  60f323:	e8 ef 50 df ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  60f328:	8d 45 58             	lea    eax,[ebp+0x58]
  60f32b:	50                   	push   eax
  60f32c:	8d 4d 00             	lea    ecx,[ebp+0x0]
  60f32f:	e8 9f a8 df ff       	call   0x409bd3 ; ["call resolved=0x607340 "]
  60f334:	50                   	push   eax
  60f335:	8d 8d 88 00 00 00    	lea    ecx,[ebp+0x88]
  60f33b:	e8 d8 81 df ff       	call   0x407518 ; ["call resolved=0x472b20 "]
  60f340:	8d 4d 58             	lea    ecx,[ebp+0x58]
  60f343:	e8 bb 46 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  60f348:	83 bd 9c 00 00 00 10 	cmp    DWORD PTR [ebp+0x9c],0x10
  60f34f:	8d 85 88 00 00 00    	lea    eax,[ebp+0x88]
  60f355:	0f 43 85 88 00 00 00 	cmovae eax,DWORD PTR [ebp+0x88]
  60f35c:	50                   	push   eax
  60f35d:	68 b8 98 79 00       	push   0x7998b8
  60f362:	68 3c 62 6f 00       	push   0x6f623c ; ["RESPONSE * HTTP/1.1\r\nDATE:%s\r\ncompatGsonStr:%s\r\n"]
  60f367:	8d 85 a0 04 00 00    	lea    eax,[ebp+0x4a0]
  60f36d:	68 00 02 00 00       	push   0x200
  60f372:	50                   	push   eax
  60f373:	e8 14 6d df ff       	call   0x40608c ; ["call resolved=0x4a7900 "]
  60f378:	8d 8d a0 04 00 00    	lea    ecx,[ebp+0x4a0]
  60f37e:	83 c4 14             	add    esp,0x14
  60f381:	8d 51 01             	lea    edx,[ecx+0x1]
  60f384:	8a 01                	mov    al,BYTE PTR [ecx]
  60f386:	41                   	inc    ecx
  60f387:	84 c0                	test   al,al
  60f389:	75 f9                	jne    0x60f384
  60f38b:	6a 10                	push   0x10
  60f38d:	8d 47 14             	lea    eax,[edi+0x14]
  60f390:	2b ca                	sub    ecx,edx
  60f392:	50                   	push   eax
  60f393:	6a 00                	push   0x0
  60f395:	51                   	push   ecx
  60f396:	8d 85 a0 04 00 00    	lea    eax,[ebp+0x4a0]
  60f39c:	50                   	push   eax
  60f39d:	ff 37                	push   DWORD PTR [edi]
  60f39f:	ff 15 94 d8 79 00    	call   DWORD PTR ds:0x79d894
  60f3a5:	8d 4d 00             	lea    ecx,[ebp+0x0]
  60f3a8:	e8 56 46 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  60f3ad:	8b 95 9c 00 00 00    	mov    edx,DWORD PTR [ebp+0x9c]
  60f3b3:	83 fa 10             	cmp    edx,0x10
  60f3b6:	72 31                	jb     0x60f3e9
  60f3b8:	8b 8d 88 00 00 00    	mov    ecx,DWORD PTR [ebp+0x88]
  60f3be:	42                   	inc    edx
  60f3bf:	8b c1                	mov    eax,ecx
  60f3c1:	81 fa 00 10 00 00    	cmp    edx,0x1000
  60f3c7:	72 16                	jb     0x60f3df
  60f3c9:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  60f3cc:	83 c2 23             	add    edx,0x23
  60f3cf:	2b c1                	sub    eax,ecx
  60f3d1:	83 c0 fc             	add    eax,0xfffffffc
  60f3d4:	83 f8 1f             	cmp    eax,0x1f
  60f3d7:	76 06                	jbe    0x60f3df
  60f3d9:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  60f3df:	52                   	push   edx
  60f3e0:	51                   	push   ecx
  60f3e1:	e8 b4 2c df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  60f3e6:	83 c4 08             	add    esp,0x8
  60f3e9:	8d 4d dc             	lea    ecx,[ebp-0x24]
  60f3ec:	c7 85 98 00 00 00 00 	mov    DWORD PTR [ebp+0x98],0x0
  60f3f6:	c7 85 9c 00 00 00 0f 	mov    DWORD PTR [ebp+0x9c],0xf
  60f400:	c6 85 88 00 00 00 00 	mov    BYTE PTR [ebp+0x88],0x0
  60f407:	e8 d2 ab df ff       	call   0x409fde ; ["call resolved=0x480970 "]
  60f40c:	ff 75 dc             	push   DWORD PTR [ebp-0x24]
  60f40f:	8d 4d e4             	lea    ecx,[ebp-0x1c]
  60f412:	e8 37 a5 df ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  60f417:	8d 8d 34 07 00 00    	lea    ecx,[ebp+0x734]
  60f41d:	e8 e1 45 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  60f422:	8d 8d 4c 07 00 00    	lea    ecx,[ebp+0x74c]
  60f428:	e8 d6 45 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  60f42d:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  60f430:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  60f437:	59                   	pop    ecx
  60f438:	5f                   	pop    edi
  60f439:	5e                   	pop    esi
  60f43a:	5b                   	pop    ebx
  60f43b:	8b 8d 20 07 00 00    	mov    ecx,DWORD PTR [ebp+0x720]
  60f441:	33 cd                	xor    ecx,ebp
  60f443:	e8 47 50 df ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  60f448:	8d a5 24 07 00 00    	lea    esp,[ebp+0x724]
  60f44e:	5d                   	pop    ebp
  60f44f:	c2 38 00             	ret    0x38
