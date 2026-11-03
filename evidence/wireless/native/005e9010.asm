; fn_5e9010; image base 0x400000; static annotation only
  5e9010:	83 ec 08             	sub    esp,0x8
  5e9013:	53                   	push   ebx
  5e9014:	56                   	push   esi
  5e9015:	8b f1                	mov    esi,ecx
  5e9017:	b9 98 a2 7a 00       	mov    ecx,0x7aa298
  5e901c:	e8 cd fa e1 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5e9021:	8b 16                	mov    edx,DWORD PTR [esi]
  5e9023:	8b 46 04             	mov    eax,DWORD PTR [esi+0x4]
  5e9026:	8b 5c 24 14          	mov    ebx,DWORD PTR [esp+0x14]
  5e902a:	2b c2                	sub    eax,edx
  5e902c:	2b da                	sub    ebx,edx
  5e902e:	c1 f8 02             	sar    eax,0x2
  5e9031:	c1 fb 02             	sar    ebx,0x2
  5e9034:	3d ff ff ff 3f       	cmp    eax,0x3fffffff
  5e9039:	0f 84 aa 00 00 00    	je     0x5e90e9
  5e903f:	8b 4e 08             	mov    ecx,DWORD PTR [esi+0x8]
  5e9042:	2b ca                	sub    ecx,edx
  5e9044:	c1 f9 02             	sar    ecx,0x2
  5e9047:	55                   	push   ebp
  5e9048:	8d 68 01             	lea    ebp,[eax+0x1]
  5e904b:	8b d1                	mov    edx,ecx
  5e904d:	d1 ea                	shr    edx,1
  5e904f:	b8 ff ff ff 3f       	mov    eax,0x3fffffff
  5e9054:	2b c2                	sub    eax,edx
  5e9056:	89 6c 24 10          	mov    DWORD PTR [esp+0x10],ebp
  5e905a:	57                   	push   edi
  5e905b:	3b c8                	cmp    ecx,eax
  5e905d:	76 07                	jbe    0x5e9066
  5e905f:	bf ff ff ff 3f       	mov    edi,0x3fffffff
  5e9064:	eb 08                	jmp    0x5e906e
  5e9066:	8d 3c 0a             	lea    edi,[edx+ecx*1]
  5e9069:	3b fd                	cmp    edi,ebp
  5e906b:	0f 42 fd             	cmovb  edi,ebp
  5e906e:	57                   	push   edi
  5e906f:	8b ce                	mov    ecx,esi
  5e9071:	e8 d2 af e1 ff       	call   0x404048 ; ["call resolved=0x480140 "]
  5e9076:	8b 4c 24 20          	mov    ecx,DWORD PTR [esp+0x20]
  5e907a:	8b e8                	mov    ebp,eax
  5e907c:	8d 04 9d 00 00 00 00 	lea    eax,[ebx*4+0x0]
  5e9083:	8b 5c 24 1c          	mov    ebx,DWORD PTR [esp+0x1c]
  5e9087:	03 c5                	add    eax,ebp
  5e9089:	89 44 24 10          	mov    DWORD PTR [esp+0x10],eax
  5e908d:	8b 09                	mov    ecx,DWORD PTR [ecx]
  5e908f:	89 08                	mov    DWORD PTR [eax],ecx
  5e9091:	8b 4e 04             	mov    ecx,DWORD PTR [esi+0x4]
  5e9094:	8b 16                	mov    edx,DWORD PTR [esi]
  5e9096:	3b d9                	cmp    ebx,ecx
  5e9098:	75 13                	jne    0x5e90ad
  5e909a:	2b ca                	sub    ecx,edx
  5e909c:	51                   	push   ecx
  5e909d:	52                   	push   edx
  5e909e:	55                   	push   ebp
  5e909f:	e8 ec f6 07 00       	call   0x668790 ; ["call resolved=0x668790 "]
  5e90a4:	8b 5c 24 1c          	mov    ebx,DWORD PTR [esp+0x1c]
  5e90a8:	83 c4 0c             	add    esp,0xc
  5e90ab:	eb 23                	jmp    0x5e90d0
  5e90ad:	8b c3                	mov    eax,ebx
  5e90af:	2b c2                	sub    eax,edx
  5e90b1:	50                   	push   eax
  5e90b2:	52                   	push   edx
  5e90b3:	55                   	push   ebp
  5e90b4:	e8 d7 f6 07 00       	call   0x668790 ; ["call resolved=0x668790 "]
  5e90b9:	8b 46 04             	mov    eax,DWORD PTR [esi+0x4]
  5e90bc:	2b c3                	sub    eax,ebx
  5e90be:	50                   	push   eax
  5e90bf:	53                   	push   ebx
  5e90c0:	8b 5c 24 24          	mov    ebx,DWORD PTR [esp+0x24]
  5e90c4:	8d 43 04             	lea    eax,[ebx+0x4]
  5e90c7:	50                   	push   eax
  5e90c8:	e8 c3 f6 07 00       	call   0x668790 ; ["call resolved=0x668790 "]
  5e90cd:	83 c4 18             	add    esp,0x18
  5e90d0:	57                   	push   edi
  5e90d1:	ff 74 24 18          	push   DWORD PTR [esp+0x18]
  5e90d5:	8b ce                	mov    ecx,esi
  5e90d7:	55                   	push   ebp
  5e90d8:	e8 62 95 e1 ff       	call   0x40263f ; ["call resolved=0x47dff0 "]
  5e90dd:	5f                   	pop    edi
  5e90de:	5d                   	pop    ebp
  5e90df:	5e                   	pop    esi
  5e90e0:	8b c3                	mov    eax,ebx
  5e90e2:	5b                   	pop    ebx
  5e90e3:	83 c4 08             	add    esp,0x8
  5e90e6:	c2 08 00             	ret    0x8
  5e90e9:	e8 7b d4 e1 ff       	call   0x406569 ; ["call resolved=0x47fc10 "]
