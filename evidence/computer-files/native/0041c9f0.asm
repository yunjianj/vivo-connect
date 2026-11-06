; SessionTask::sendReadFile; image base 0x400000; static annotation only
  41c9f0:	55                   	push   ebp
  41c9f1:	8b ec                	mov    ebp,esp
  41c9f3:	6a ff                	push   0xffffffff
  41c9f5:	68 a4 4a 47 00       	push   0x474aa4
  41c9fa:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  41ca00:	50                   	push   eax
  41ca01:	81 ec d8 00 00 00    	sub    esp,0xd8
  41ca07:	a1 14 de 49 00       	mov    eax,ds:0x49de14
  41ca0c:	33 c5                	xor    eax,ebp
  41ca0e:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  41ca11:	53                   	push   ebx
  41ca12:	56                   	push   esi
  41ca13:	57                   	push   edi
  41ca14:	50                   	push   eax
  41ca15:	8d 45 f4             	lea    eax,[ebp-0xc]
  41ca18:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  41ca1e:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  41ca21:	8b f9                	mov    edi,ecx
  41ca23:	89 7d 90             	mov    DWORD PTR [ebp-0x70],edi
  41ca26:	8b 45 08             	mov    eax,DWORD PTR [ebp+0x8]
  41ca29:	8b 4f 28             	mov    ecx,DWORD PTR [edi+0x28]
  41ca2c:	50                   	push   eax
  41ca2d:	89 45 a0             	mov    DWORD PTR [ebp-0x60],eax
  41ca30:	8d 45 bb             	lea    eax,[ebp-0x45]
  41ca33:	50                   	push   eax
  41ca34:	8d 85 1c ff ff ff    	lea    eax,[ebp-0xe4]
  41ca3a:	89 7d 9c             	mov    DWORD PTR [ebp-0x64],edi
  41ca3d:	50                   	push   eax
  41ca3e:	c7 85 48 ff ff ff 00 	mov    DWORD PTR [ebp-0xb8],0x0
  41ca48:	c6 45 bb 00          	mov    BYTE PTR [ebp-0x45],0x0
  41ca4c:	e8 cf 70 02 00       	call   0x443b20 ; ["call resolved=0x443b20 "]
  41ca51:	84 c0                	test   al,al
  41ca53:	0f 84 96 03 00 00    	je     0x41cdef
  41ca59:	6a 08                	push   0x8
  41ca5b:	e8 91 5b 05 00       	call   0x4725f1 ; ["call resolved=0x4725f1 "]
  41ca60:	8b f0                	mov    esi,eax
  41ca62:	89 45 b0             	mov    DWORD PTR [ebp-0x50],eax
  41ca65:	83 c4 04             	add    esp,0x4
  41ca68:	89 b5 64 ff ff ff    	mov    DWORD PTR [ebp-0x9c],esi
  41ca6e:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  41ca75:	85 f6                	test   esi,esi
  41ca77:	74 13                	je     0x41ca8c
  41ca79:	ff 75 a0             	push   DWORD PTR [ebp-0x60]
  41ca7c:	8b ce                	mov    ecx,esi
  41ca7e:	ff 15 1c f4 47 00    	call   DWORD PTR ds:0x47f41c ; ??0QFile@@QAE@ABVQString@@@Z
  41ca84:	c7 06 b8 00 48 00    	mov    DWORD PTR [esi],0x4800b8
  41ca8a:	eb 05                	jmp    0x41ca91
  41ca8c:	33 f6                	xor    esi,esi
  41ca8e:	89 75 b0             	mov    DWORD PTR [ebp-0x50],esi
  41ca91:	8b 06                	mov    eax,DWORD PTR [esi]
  41ca93:	51                   	push   ecx
  41ca94:	8b ce                	mov    ecx,esi
  41ca96:	c7 45 fc ff ff ff ff 	mov    DWORD PTR [ebp-0x4],0xffffffff
  41ca9d:	89 b5 64 ff ff ff    	mov    DWORD PTR [ebp-0x9c],esi
  41caa3:	8b 50 30             	mov    edx,DWORD PTR [eax+0x30]
  41caa6:	8b c4                	mov    eax,esp
  41caa8:	c7 00 01 00 00 00    	mov    DWORD PTR [eax],0x1
  41caae:	ff d2                	call   edx
  41cab0:	84 c0                	test   al,al
  41cab2:	0f 85 87 00 00 00    	jne    0x41cb3f
  41cab8:	8b 4d b0             	mov    ecx,DWORD PTR [ebp-0x50]
  41cabb:	8d 55 b4             	lea    edx,[ebp-0x4c]
  41cabe:	8b 35 e4 2b 4a 00    	mov    esi,DWORD PTR ds:0x4a2be4
  41cac4:	52                   	push   edx
  41cac5:	8b 01                	mov    eax,DWORD PTR [ecx]
  41cac7:	8b 40 6c             	mov    eax,DWORD PTR [eax+0x6c]
  41caca:	ff d0                	call   eax
  41cacc:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  41cacf:	c7 45 fc 01 00 00 00 	mov    DWORD PTR [ebp-0x4],0x1
  41cad6:	51                   	push   ecx
  41cad7:	8b c8                	mov    ecx,eax
  41cad9:	ff 15 80 f4 47 00    	call   DWORD PTR ds:0x47f480 ; ?toStdString@QString@@QBE?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
  41cadf:	50                   	push   eax
  41cae0:	6a 0f                	push   0xf
  41cae2:	68 70 12 48 00       	push   0x481270 ; ["{} open failed."]
  41cae7:	6a 04                	push   0x4
  41cae9:	83 ec 0c             	sub    esp,0xc
  41caec:	c7 85 70 ff ff ff 48 	mov    DWORD PTR [ebp-0x90],0x481148 ; ["D:\\vivo_Project\\vdfs\\src\\server\\SessionTask.cpp"]
  41caf6:	8b c4                	mov    eax,esp
  41caf8:	c7 85 74 ff ff ff 0d 	mov    DWORD PTR [ebp-0x8c],0x10d
  41cb02:	f3 0f 7e 85 70 ff ff 	movq   xmm0,QWORD PTR [ebp-0x90]
  41cb0a:	8b ce                	mov    ecx,esi
  41cb0c:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  41cb10:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  41cb14:	c7 40 08 80 12 48 00 	mov    DWORD PTR [eax+0x8],0x481280 ; ["SessionTask::sendReadFile"]
  41cb1b:	e8 40 d2 fe ff       	call   0x409d60 ; ["call resolved=0x409d60 "]
  41cb20:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  41cb23:	e8 68 74 fe ff       	call   0x403f90 ; ["call resolved=0x403f90 "]
  41cb28:	8d 4d b4             	lea    ecx,[ebp-0x4c]
  41cb2b:	c7 45 fc ff ff ff ff 	mov    DWORD PTR [ebp-0x4],0xffffffff
  41cb32:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  41cb38:	8b 75 b0             	mov    esi,DWORD PTR [ebp-0x50]
  41cb3b:	c6 45 bb 05          	mov    BYTE PTR [ebp-0x45],0x5
  41cb3f:	8b 85 3c ff ff ff    	mov    eax,DWORD PTR [ebp-0xc4]
  41cb45:	8b 8d 40 ff ff ff    	mov    ecx,DWORD PTR [ebp-0xc0]
  41cb4b:	89 45 a4             	mov    DWORD PTR [ebp-0x5c],eax
  41cb4e:	89 85 68 ff ff ff    	mov    DWORD PTR [ebp-0x98],eax
  41cb54:	8b 85 38 ff ff ff    	mov    eax,DWORD PTR [ebp-0xc8]
  41cb5a:	89 45 8c             	mov    DWORD PTR [ebp-0x74],eax
  41cb5d:	89 45 80             	mov    DWORD PTR [ebp-0x80],eax
  41cb60:	8b 06                	mov    eax,DWORD PTR [esi]
  41cb62:	89 4d 98             	mov    DWORD PTR [ebp-0x68],ecx
  41cb65:	89 8d 6c ff ff ff    	mov    DWORD PTR [ebp-0x94],ecx
  41cb6b:	8b 8d 34 ff ff ff    	mov    ecx,DWORD PTR [ebp-0xcc]
  41cb71:	8b 40 3c             	mov    eax,DWORD PTR [eax+0x3c]
  41cb74:	89 4d 94             	mov    DWORD PTR [ebp-0x6c],ecx
  41cb77:	89 8d 7c ff ff ff    	mov    DWORD PTR [ebp-0x84],ecx
  41cb7d:	8b ce                	mov    ecx,esi
  41cb7f:	ff d0                	call   eax
  41cb81:	8b ca                	mov    ecx,edx
  41cb83:	89 45 b4             	mov    DWORD PTR [ebp-0x4c],eax
  41cb86:	8b 55 94             	mov    edx,DWORD PTR [ebp-0x6c]
  41cb89:	89 4d 84             	mov    DWORD PTR [ebp-0x7c],ecx
  41cb8c:	89 8d 78 ff ff ff    	mov    DWORD PTR [ebp-0x88],ecx
  41cb92:	8b 4d 8c             	mov    ecx,DWORD PTR [ebp-0x74]
  41cb95:	89 85 74 ff ff ff    	mov    DWORD PTR [ebp-0x8c],eax
  41cb9b:	85 d2                	test   edx,edx
  41cb9d:	75 04                	jne    0x41cba3
  41cb9f:	85 c9                	test   ecx,ecx
  41cba1:	74 11                	je     0x41cbb4
  41cba3:	85 c0                	test   eax,eax
  41cba5:	0f 85 8c 00 00 00    	jne    0x41cc37
  41cbab:	39 45 84             	cmp    DWORD PTR [ebp-0x7c],eax
  41cbae:	0f 85 83 00 00 00    	jne    0x41cc37
  41cbb4:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  41cbba:	8d 85 68 ff ff ff    	lea    eax,[ebp-0x98]
  41cbc0:	50                   	push   eax
  41cbc1:	8d 85 74 ff ff ff    	lea    eax,[ebp-0x8c]
  41cbc7:	c7 45 e0 48 11 48 00 	mov    DWORD PTR [ebp-0x20],0x481148 ; ["D:\\vivo_Project\\vdfs\\src\\server\\SessionTask.cpp"]
  41cbce:	50                   	push   eax
  41cbcf:	8d 85 7c ff ff ff    	lea    eax,[ebp-0x84]
  41cbd5:	c7 45 e4 19 01 00 00 	mov    DWORD PTR [ebp-0x1c],0x119
  41cbdc:	f3 0f 7e 45 e0       	movq   xmm0,QWORD PTR [ebp-0x20]
  41cbe1:	50                   	push   eax
  41cbe2:	6a 2f                	push   0x2f
  41cbe4:	68 9c 12 48 00       	push   0x48129c ; ["Request length is {}. fileSize {}. reqoffset {}"]
  41cbe9:	6a 02                	push   0x2
  41cbeb:	83 ec 0c             	sub    esp,0xc
  41cbee:	c6 45 bb 01          	mov    BYTE PTR [ebp-0x45],0x1
  41cbf2:	8b c4                	mov    eax,esp
  41cbf4:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  41cbf8:	c7 40 08 80 12 48 00 	mov    DWORD PTR [eax+0x8],0x481280 ; ["SessionTask::sendReadFile"]
  41cbff:	e8 ac c8 fe ff       	call   0x4094b0 ; ["call resolved=0x4094b0 "]
  41cc04:	8b 85 6c ff ff ff    	mov    eax,DWORD PTR [ebp-0x94]
  41cc0a:	8b 4d 80             	mov    ecx,DWORD PTR [ebp-0x80]
  41cc0d:	8b 95 7c ff ff ff    	mov    edx,DWORD PTR [ebp-0x84]
  41cc13:	89 45 98             	mov    DWORD PTR [ebp-0x68],eax
  41cc16:	8b 85 68 ff ff ff    	mov    eax,DWORD PTR [ebp-0x98]
  41cc1c:	89 45 a4             	mov    DWORD PTR [ebp-0x5c],eax
  41cc1f:	8b 85 78 ff ff ff    	mov    eax,DWORD PTR [ebp-0x88]
  41cc25:	89 45 84             	mov    DWORD PTR [ebp-0x7c],eax
  41cc28:	8b 85 74 ff ff ff    	mov    eax,DWORD PTR [ebp-0x8c]
  41cc2e:	89 4d 8c             	mov    DWORD PTR [ebp-0x74],ecx
  41cc31:	89 55 94             	mov    DWORD PTR [ebp-0x6c],edx
  41cc34:	89 45 b4             	mov    DWORD PTR [ebp-0x4c],eax
  41cc37:	8b 7d 98             	mov    edi,DWORD PTR [ebp-0x68]
  41cc3a:	3b 7d 84             	cmp    edi,DWORD PTR [ebp-0x7c]
  41cc3d:	8b 7d 90             	mov    edi,DWORD PTR [ebp-0x70]
  41cc40:	0f 82 8e 00 00 00    	jb     0x41ccd4
  41cc46:	77 09                	ja     0x41cc51
  41cc48:	39 45 a4             	cmp    DWORD PTR [ebp-0x5c],eax
  41cc4b:	0f 82 83 00 00 00    	jb     0x41ccd4
  41cc51:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  41cc57:	8d 85 74 ff ff ff    	lea    eax,[ebp-0x8c]
  41cc5d:	50                   	push   eax
  41cc5e:	8d 85 7c ff ff ff    	lea    eax,[ebp-0x84]
  41cc64:	c7 45 e0 48 11 48 00 	mov    DWORD PTR [ebp-0x20],0x481148 ; ["D:\\vivo_Project\\vdfs\\src\\server\\SessionTask.cpp"]
  41cc6b:	50                   	push   eax
  41cc6c:	8d 85 68 ff ff ff    	lea    eax,[ebp-0x98]
  41cc72:	c7 45 e4 1f 01 00 00 	mov    DWORD PTR [ebp-0x1c],0x11f
  41cc79:	f3 0f 7e 45 e0       	movq   xmm0,QWORD PTR [ebp-0x20]
  41cc7e:	50                   	push   eax
  41cc7f:	6a 24                	push   0x24
  41cc81:	68 cc 12 48 00       	push   0x4812cc ; ["reqoffset or reqsize error! {} {} {}"]
  41cc86:	6a 03                	push   0x3
  41cc88:	83 ec 0c             	sub    esp,0xc
  41cc8b:	c6 45 bb 01          	mov    BYTE PTR [ebp-0x45],0x1
  41cc8f:	8b c4                	mov    eax,esp
  41cc91:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  41cc95:	c7 40 08 80 12 48 00 	mov    DWORD PTR [eax+0x8],0x481280 ; ["SessionTask::sendReadFile"]
  41cc9c:	e8 0f c8 fe ff       	call   0x4094b0 ; ["call resolved=0x4094b0 "]
  41cca1:	8b 85 6c ff ff ff    	mov    eax,DWORD PTR [ebp-0x94]
  41cca7:	8b 4d 80             	mov    ecx,DWORD PTR [ebp-0x80]
  41ccaa:	8b 95 7c ff ff ff    	mov    edx,DWORD PTR [ebp-0x84]
  41ccb0:	89 45 98             	mov    DWORD PTR [ebp-0x68],eax
  41ccb3:	8b 85 68 ff ff ff    	mov    eax,DWORD PTR [ebp-0x98]
  41ccb9:	89 45 a4             	mov    DWORD PTR [ebp-0x5c],eax
  41ccbc:	8b 85 78 ff ff ff    	mov    eax,DWORD PTR [ebp-0x88]
  41ccc2:	89 45 84             	mov    DWORD PTR [ebp-0x7c],eax
  41ccc5:	8b 85 74 ff ff ff    	mov    eax,DWORD PTR [ebp-0x8c]
  41cccb:	89 4d 8c             	mov    DWORD PTR [ebp-0x74],ecx
  41ccce:	89 55 94             	mov    DWORD PTR [ebp-0x6c],edx
  41ccd1:	89 45 b4             	mov    DWORD PTR [ebp-0x4c],eax
  41ccd4:	8b c2                	mov    eax,edx
  41ccd6:	8b 55 a4             	mov    edx,DWORD PTR [ebp-0x5c]
  41ccd9:	03 c2                	add    eax,edx
  41ccdb:	89 45 a4             	mov    DWORD PTR [ebp-0x5c],eax
  41ccde:	8b c1                	mov    eax,ecx
  41cce0:	13 45 98             	adc    eax,DWORD PTR [ebp-0x68]
  41cce3:	8b 4d 84             	mov    ecx,DWORD PTR [ebp-0x7c]
  41cce6:	3b c1                	cmp    eax,ecx
  41cce8:	0f 82 ae 00 00 00    	jb     0x41cd9c
  41ccee:	8b 45 b4             	mov    eax,DWORD PTR [ebp-0x4c]
  41ccf1:	77 09                	ja     0x41ccfc
  41ccf3:	39 45 a4             	cmp    DWORD PTR [ebp-0x5c],eax
  41ccf6:	0f 86 a0 00 00 00    	jbe    0x41cd9c
  41ccfc:	8b 35 e4 2b 4a 00    	mov    esi,DWORD PTR ds:0x4a2be4
  41cd02:	2b c2                	sub    eax,edx
  41cd04:	89 85 7c ff ff ff    	mov    DWORD PTR [ebp-0x84],eax
  41cd0a:	8d 45 bc             	lea    eax,[ebp-0x44]
  41cd0d:	1b 4d 98             	sbb    ecx,DWORD PTR [ebp-0x68]
  41cd10:	89 4d 80             	mov    DWORD PTR [ebp-0x80],ecx
  41cd13:	8b 4d a0             	mov    ecx,DWORD PTR [ebp-0x60]
  41cd16:	50                   	push   eax
  41cd17:	ff 15 80 f4 47 00    	call   DWORD PTR ds:0x47f480 ; ?toStdString@QString@@QBE?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
  41cd1d:	8d 8d 7c ff ff ff    	lea    ecx,[ebp-0x84]
  41cd23:	c7 45 e0 48 11 48 00 	mov    DWORD PTR [ebp-0x20],0x481148 ; ["D:\\vivo_Project\\vdfs\\src\\server\\SessionTask.cpp"]
  41cd2a:	51                   	push   ecx
  41cd2b:	8d 8d 68 ff ff ff    	lea    ecx,[ebp-0x98]
  41cd31:	c7 45 e4 25 01 00 00 	mov    DWORD PTR [ebp-0x1c],0x125
  41cd38:	f3 0f 7e 45 e0       	movq   xmm0,QWORD PTR [ebp-0x20]
  41cd3d:	51                   	push   ecx
  41cd3e:	8d 8d 74 ff ff ff    	lea    ecx,[ebp-0x8c]
  41cd44:	c7 45 fc 03 00 00 00 	mov    DWORD PTR [ebp-0x4],0x3
  41cd4b:	51                   	push   ecx
  41cd4c:	50                   	push   eax
  41cd4d:	6a 2c                	push   0x2c
  41cd4f:	68 f4 12 48 00       	push   0x4812f4 ; ["Read EOF {} filesize:{} offset:{} reqsize:{}"]
  41cd54:	6a 02                	push   0x2
  41cd56:	83 ec 0c             	sub    esp,0xc
  41cd59:	8b ce                	mov    ecx,esi
  41cd5b:	8b c4                	mov    eax,esp
  41cd5d:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  41cd61:	c7 40 08 80 12 48 00 	mov    DWORD PTR [eax+0x8],0x481280 ; ["SessionTask::sendReadFile"]
  41cd68:	e8 c3 d2 fe ff       	call   0x40a030 ; ["call resolved=0x40a030 "]
  41cd6d:	8d 4d bc             	lea    ecx,[ebp-0x44]
  41cd70:	c7 45 fc ff ff ff ff 	mov    DWORD PTR [ebp-0x4],0xffffffff
  41cd77:	e8 14 72 fe ff       	call   0x403f90 ; ["call resolved=0x403f90 "]
  41cd7c:	8b 45 80             	mov    eax,DWORD PTR [ebp-0x80]
  41cd7f:	8b 8d 6c ff ff ff    	mov    ecx,DWORD PTR [ebp-0x94]
  41cd85:	8b 95 68 ff ff ff    	mov    edx,DWORD PTR [ebp-0x98]
  41cd8b:	8b 75 b0             	mov    esi,DWORD PTR [ebp-0x50]
  41cd8e:	89 45 8c             	mov    DWORD PTR [ebp-0x74],eax
  41cd91:	8b 85 7c ff ff ff    	mov    eax,DWORD PTR [ebp-0x84]
  41cd97:	89 45 94             	mov    DWORD PTR [ebp-0x6c],eax
  41cd9a:	eb 03                	jmp    0x41cd9f
  41cd9c:	8b 4d 98             	mov    ecx,DWORD PTR [ebp-0x68]
  41cd9f:	80 7d bb 00          	cmp    BYTE PTR [ebp-0x45],0x0
  41cda3:	74 5a                	je     0x41cdff
  41cda5:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  41cdab:	8d 45 bb             	lea    eax,[ebp-0x45]
  41cdae:	50                   	push   eax
  41cdaf:	6a 37                	push   0x37
  41cdb1:	68 24 13 48 00       	push   0x481324 ; ["VDFS-SERVER: Failed to get file properties, errcode {}!"]
  41cdb6:	6a 04                	push   0x4
  41cdb8:	83 ec 0c             	sub    esp,0xc
  41cdbb:	c7 45 e0 48 11 48 00 	mov    DWORD PTR [ebp-0x20],0x481148 ; ["D:\\vivo_Project\\vdfs\\src\\server\\SessionTask.cpp"]
  41cdc2:	8b c4                	mov    eax,esp
  41cdc4:	c7 45 e4 2a 01 00 00 	mov    DWORD PTR [ebp-0x1c],0x12a
  41cdcb:	f3 0f 7e 45 e0       	movq   xmm0,QWORD PTR [ebp-0x20]
  41cdd0:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  41cdd4:	c7 40 08 80 12 48 00 	mov    DWORD PTR [eax+0x8],0x481280 ; ["SessionTask::sendReadFile"]
  41cddb:	e8 30 c1 fe ff       	call   0x408f10 ; ["call resolved=0x408f10 "]
  41cde0:	8b 06                	mov    eax,DWORD PTR [esi]
  41cde2:	8b ce                	mov    ecx,esi
  41cde4:	ff 50 34             	call   DWORD PTR [eax+0x34]
  41cde7:	8b ce                	mov    ecx,esi
  41cde9:	ff 15 6c f4 47 00    	call   DWORD PTR ds:0x47f46c ; ?deleteLater@QObject@@QAEXXZ
  41cdef:	8d 45 bb             	lea    eax,[ebp-0x45]
  41cdf2:	8b cf                	mov    ecx,edi
  41cdf4:	50                   	push   eax
  41cdf5:	e8 c6 f9 ff ff       	call   0x41c7c0 ; ["call resolved=0x41c7c0 SessionTask::sendErr"]
  41cdfa:	e9 e1 05 00 00       	jmp    0x41d3e0
  41cdff:	8b 06                	mov    eax,DWORD PTR [esi]
  41ce01:	51                   	push   ecx
  41ce02:	52                   	push   edx
  41ce03:	8b ce                	mov    ecx,esi
  41ce05:	ff 50 40             	call   DWORD PTR [eax+0x40]
  41ce08:	0f 57 c0             	xorps  xmm0,xmm0
  41ce0b:	8d 4d a8             	lea    ecx,[ebp-0x58]
  41ce0e:	66 0f 13 85 74 ff ff 	movlpd QWORD PTR [ebp-0x8c],xmm0
  41ce16:	ff 15 9c f4 47 00    	call   DWORD PTR ds:0x47f49c ; ??0QByteArray@@QAE@XZ
  41ce1c:	8b 85 78 ff ff ff    	mov    eax,DWORD PTR [ebp-0x88]
  41ce22:	8b 95 74 ff ff ff    	mov    edx,DWORD PTR [ebp-0x8c]
  41ce28:	c7 45 fc 04 00 00 00 	mov    DWORD PTR [ebp-0x4],0x4
  41ce2f:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  41ce33:	89 55 b0             	mov    DWORD PTR [ebp-0x50],edx
  41ce36:	89 45 b4             	mov    DWORD PTR [ebp-0x4c],eax
  41ce39:	3b 45 8c             	cmp    eax,DWORD PTR [ebp-0x74]
  41ce3c:	0f 87 f2 00 00 00    	ja     0x41cf34
  41ce42:	72 09                	jb     0x41ce4d
  41ce44:	3b 55 94             	cmp    edx,DWORD PTR [ebp-0x6c]
  41ce47:	0f 83 e7 00 00 00    	jae    0x41cf34
  41ce4d:	8b 06                	mov    eax,DWORD PTR [esi]
  41ce4f:	8b ce                	mov    ecx,esi
  41ce51:	8b 40 44             	mov    eax,DWORD PTR [eax+0x44]
  41ce54:	ff d0                	call   eax
  41ce56:	84 c0                	test   al,al
  41ce58:	0f 85 d6 00 00 00    	jne    0x41cf34
  41ce5e:	8b 4d 8c             	mov    ecx,DWORD PTR [ebp-0x74]
  41ce61:	8b 57 10             	mov    edx,DWORD PTR [edi+0x10]
  41ce64:	8b 45 94             	mov    eax,DWORD PTR [ebp-0x6c]
  41ce67:	3b 4f 14             	cmp    ecx,DWORD PTR [edi+0x14]
  41ce6a:	0f 82 9f 00 00 00    	jb     0x41cf0f
  41ce70:	77 08                	ja     0x41ce7a
  41ce72:	3b c2                	cmp    eax,edx
  41ce74:	0f 82 95 00 00 00    	jb     0x41cf0f
  41ce7a:	2b 45 b0             	sub    eax,DWORD PTR [ebp-0x50]
  41ce7d:	89 45 a4             	mov    DWORD PTR [ebp-0x5c],eax
  41ce80:	1b 4d b4             	sbb    ecx,DWORD PTR [ebp-0x4c]
  41ce83:	89 4d 84             	mov    DWORD PTR [ebp-0x7c],ecx
  41ce86:	3b 4f 14             	cmp    ecx,DWORD PTR [edi+0x14]
  41ce89:	77 44                	ja     0x41cecf
  41ce8b:	72 04                	jb     0x41ce91
  41ce8d:	3b c2                	cmp    eax,edx
  41ce8f:	77 3e                	ja     0x41cecf
  41ce91:	51                   	push   ecx
  41ce92:	50                   	push   eax
  41ce93:	8d 45 a0             	lea    eax,[ebp-0x60]
  41ce96:	8b ce                	mov    ecx,esi
  41ce98:	50                   	push   eax
  41ce99:	ff 15 4c f4 47 00    	call   DWORD PTR ds:0x47f44c ; ?read@QIODevice@@QAE?AVQByteArray@@_J@Z ; ["ȡ\t"]
  41ce9f:	50                   	push   eax
  41cea0:	8d 4d a8             	lea    ecx,[ebp-0x58]
  41cea3:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  41cea7:	ff 15 88 f4 47 00    	call   DWORD PTR ds:0x47f488 ; ?append@QByteArray@@QAEAAV1@ABV1@@Z ; ["Ξ\t"]
  41cead:	8d 4d a0             	lea    ecx,[ebp-0x60]
  41ceb0:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  41ceb4:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  41ceba:	8b 45 a4             	mov    eax,DWORD PTR [ebp-0x5c]
  41cebd:	8b 55 b0             	mov    edx,DWORD PTR [ebp-0x50]
  41cec0:	8b 4d 84             	mov    ecx,DWORD PTR [ebp-0x7c]
  41cec3:	03 d0                	add    edx,eax
  41cec5:	8b 45 b4             	mov    eax,DWORD PTR [ebp-0x4c]
  41cec8:	13 c1                	adc    eax,ecx
  41ceca:	e9 64 ff ff ff       	jmp    0x41ce33
  41cecf:	ff 77 14             	push   DWORD PTR [edi+0x14]
  41ced2:	8d 45 98             	lea    eax,[ebp-0x68]
  41ced5:	8b ce                	mov    ecx,esi
  41ced7:	52                   	push   edx
  41ced8:	50                   	push   eax
  41ced9:	ff 15 4c f4 47 00    	call   DWORD PTR ds:0x47f44c ; ?read@QIODevice@@QAE?AVQByteArray@@_J@Z ; ["ȡ\t"]
  41cedf:	50                   	push   eax
  41cee0:	8d 4d a8             	lea    ecx,[ebp-0x58]
  41cee3:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  41cee7:	ff 15 88 f4 47 00    	call   DWORD PTR ds:0x47f488 ; ?append@QByteArray@@QAEAAV1@ABV1@@Z ; ["Ξ\t"]
  41ceed:	8d 4d 98             	lea    ecx,[ebp-0x68]
  41cef0:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  41cef4:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  41cefa:	8b 47 10             	mov    eax,DWORD PTR [edi+0x10]
  41cefd:	8b 55 b0             	mov    edx,DWORD PTR [ebp-0x50]
  41cf00:	8b 4f 14             	mov    ecx,DWORD PTR [edi+0x14]
  41cf03:	03 d0                	add    edx,eax
  41cf05:	8b 45 b4             	mov    eax,DWORD PTR [ebp-0x4c]
  41cf08:	13 c1                	adc    eax,ecx
  41cf0a:	e9 24 ff ff ff       	jmp    0x41ce33
  41cf0f:	51                   	push   ecx
  41cf10:	50                   	push   eax
  41cf11:	8d 45 a0             	lea    eax,[ebp-0x60]
  41cf14:	8b ce                	mov    ecx,esi
  41cf16:	50                   	push   eax
  41cf17:	ff 15 4c f4 47 00    	call   DWORD PTR ds:0x47f44c ; ?read@QIODevice@@QAE?AVQByteArray@@_J@Z ; ["ȡ\t"]
  41cf1d:	50                   	push   eax
  41cf1e:	8d 4d a8             	lea    ecx,[ebp-0x58]
  41cf21:	c6 45 fc 08          	mov    BYTE PTR [ebp-0x4],0x8
  41cf25:	ff 15 88 f4 47 00    	call   DWORD PTR ds:0x47f488 ; ?append@QByteArray@@QAEAAV1@ABV1@@Z ; ["Ξ\t"]
  41cf2b:	8d 4d a0             	lea    ecx,[ebp-0x60]
  41cf2e:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  41cf34:	8b 06                	mov    eax,DWORD PTR [esi]
  41cf36:	8b ce                	mov    ecx,esi
  41cf38:	c7 45 fc 04 00 00 00 	mov    DWORD PTR [ebp-0x4],0x4
  41cf3f:	ff 50 34             	call   DWORD PTR [eax+0x34]
  41cf42:	8b ce                	mov    ecx,esi
  41cf44:	ff 15 6c f4 47 00    	call   DWORD PTR ds:0x47f46c ; ?deleteLater@QObject@@QAEXXZ
  41cf4a:	8d 4d ac             	lea    ecx,[ebp-0x54]
  41cf4d:	ff 15 9c f4 47 00    	call   DWORD PTR ds:0x47f49c ; ??0QByteArray@@QAE@XZ
  41cf53:	8b 4f 28             	mov    ecx,DWORD PTR [edi+0x28]
  41cf56:	8d 45 ac             	lea    eax,[ebp-0x54]
  41cf59:	50                   	push   eax
  41cf5a:	8d 45 a8             	lea    eax,[ebp-0x58]
  41cf5d:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  41cf61:	50                   	push   eax
  41cf62:	8d 41 20             	lea    eax,[ecx+0x20]
  41cf65:	50                   	push   eax
  41cf66:	8d 41 08             	lea    eax,[ecx+0x8]
  41cf69:	50                   	push   eax
  41cf6a:	e8 11 f5 01 00       	call   0x43c480 ; ["call resolved=0x43c480 vdfs_cryptopp::encrypt"]
  41cf6f:	83 c4 10             	add    esp,0x10
  41cf72:	84 c0                	test   al,al
  41cf74:	0f 84 03 04 00 00    	je     0x41d37d
  41cf7a:	8b 45 ac             	mov    eax,DWORD PTR [ebp-0x54]
  41cf7d:	83 78 04 00          	cmp    DWORD PTR [eax+0x4],0x0
  41cf81:	0f 8e f6 03 00 00    	jle    0x41d37d
  41cf87:	8d 4d 88             	lea    ecx,[ebp-0x78]
  41cf8a:	ff 15 9c f4 47 00    	call   DWORD PTR ds:0x47f49c ; ??0QByteArray@@QAE@XZ
  41cf90:	51                   	push   ecx
  41cf91:	8b c4                	mov    eax,esp
  41cf93:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  41cf97:	8d 8d 4c ff ff ff    	lea    ecx,[ebp-0xb4]
  41cf9d:	c7 00 02 00 00 00    	mov    DWORD PTR [eax],0x2
  41cfa3:	8d 45 88             	lea    eax,[ebp-0x78]
  41cfa6:	50                   	push   eax
  41cfa7:	ff 15 34 f4 47 00    	call   DWORD PTR ds:0x47f434 ; ??0QDataStream@@QAE@PAVQByteArray@@V?$QFlags@W4OpenModeFlag@QIODevice@@@@@Z
  41cfad:	8b 45 ac             	mov    eax,DWORD PTR [ebp-0x54]
  41cfb0:	8b 8d 50 ff ff ff    	mov    ecx,DWORD PTR [ebp-0xb0]
  41cfb6:	6a 00                	push   0x0
  41cfb8:	6a 00                	push   0x0
  41cfba:	8b 78 04             	mov    edi,DWORD PTR [eax+0x4]
  41cfbd:	8b 01                	mov    eax,DWORD PTR [ecx]
  41cfbf:	47                   	inc    edi
  41cfc0:	c6 45 fc 0c          	mov    BYTE PTR [ebp-0x4],0xc
  41cfc4:	ff 50 40             	call   DWORD PTR [eax+0x40]
  41cfc7:	8b 35 24 f4 47 00    	mov    esi,DWORD PTR ds:0x47f424
  41cfcd:	8d 8d 4c ff ff ff    	lea    ecx,[ebp-0xb4]
  41cfd3:	6a 05                	push   0x5
  41cfd5:	ff d6                	call   esi
  41cfd7:	57                   	push   edi
  41cfd8:	8d 8d 4c ff ff ff    	lea    ecx,[ebp-0xb4]
  41cfde:	ff 15 20 f4 47 00    	call   DWORD PTR ds:0x47f420 ; ??6QDataStream@@QAEAAV0@H@Z
  41cfe4:	6a 00                	push   0x0
  41cfe6:	8d 8d 4c ff ff ff    	lea    ecx,[ebp-0xb4]
  41cfec:	ff d6                	call   esi
  41cfee:	8b 7d 90             	mov    edi,DWORD PTR [ebp-0x70]
  41cff1:	8d 45 88             	lea    eax,[ebp-0x78]
  41cff4:	50                   	push   eax
  41cff5:	8b 4f 1c             	mov    ecx,DWORD PTR [edi+0x1c]
  41cff8:	ff 15 44 f4 47 00    	call   DWORD PTR ds:0x47f444 ; ?write@QIODevice@@QAE_JABVQByteArray@@@Z
  41cffe:	83 f8 ff             	cmp    eax,0xffffffff
  41d001:	0f 85 f6 00 00 00    	jne    0x41d0fd
  41d007:	3b d0                	cmp    edx,eax
  41d009:	0f 85 ee 00 00 00    	jne    0x41d0fd
  41d00f:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  41d015:	83 ec 08             	sub    esp,0x8
  41d018:	8b c4                	mov    eax,esp
  41d01a:	c7 45 e0 48 11 48 00 	mov    DWORD PTR [ebp-0x20],0x481148 ; ["D:\\vivo_Project\\vdfs\\src\\server\\SessionTask.cpp"]
  41d021:	c7 45 e4 80 01 00 00 	mov    DWORD PTR [ebp-0x1c],0x180
  41d028:	f3 0f 7e 45 e0       	movq   xmm0,QWORD PTR [ebp-0x20]
  41d02d:	6a 04                	push   0x4
  41d02f:	83 ec 0c             	sub    esp,0xc
  41d032:	c7 00 f8 11 48 00    	mov    DWORD PTR [eax],0x4811f8 ; ["Error writing socket."]
  41d038:	c7 40 04 15 00 00 00 	mov    DWORD PTR [eax+0x4],0x15
  41d03f:	8b c4                	mov    eax,esp
  41d041:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  41d045:	c7 40 08 80 12 48 00 	mov    DWORD PTR [eax+0x8],0x481280 ; ["SessionTask::sendReadFile"]
  41d04c:	e8 bf e7 ff ff       	call   0x41b810 ; ["call resolved=0x41b810 "]
  41d051:	8d 8d 4c ff ff ff    	lea    ecx,[ebp-0xb4]
  41d057:	ff 15 2c f4 47 00    	call   DWORD PTR ds:0x47f42c ; ??1QDataStream@@QAE@XZ
  41d05d:	8d 4d 88             	lea    ecx,[ebp-0x78]
  41d060:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  41d066:	e9 63 03 00 00       	jmp    0x41d3ce
  41d06b:	8b b5 64 ff ff ff    	mov    esi,DWORD PTR [ebp-0x9c]
  41d071:	8b ce                	mov    ecx,esi
  41d073:	8b 06                	mov    eax,DWORD PTR [esi]
  41d075:	ff 50 34             	call   DWORD PTR [eax+0x34]
  41d078:	8b ce                	mov    ecx,esi
  41d07a:	ff 15 6c f4 47 00    	call   DWORD PTR ds:0x47f46c ; ?deleteLater@QObject@@QAEXXZ
  41d080:	8b 4d 9c             	mov    ecx,DWORD PTR [ebp-0x64]
  41d083:	8d 45 bb             	lea    eax,[ebp-0x45]
  41d086:	50                   	push   eax
  41d087:	c6 45 bb 05          	mov    BYTE PTR [ebp-0x45],0x5
  41d08b:	e8 30 f7 ff ff       	call   0x41c7c0 ; ["call resolved=0x41c7c0 SessionTask::sendErr"]
  41d090:	8b 45 a8             	mov    eax,DWORD PTR [ebp-0x58]
  41d093:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  41d099:	8b 40 08             	mov    eax,DWORD PTR [eax+0x8]
  41d09c:	25 ff ff ff 7f       	and    eax,0x7fffffff
  41d0a1:	74 06                	je     0x41d0a9
  41d0a3:	48                   	dec    eax
  41d0a4:	89 45 a0             	mov    DWORD PTR [ebp-0x60],eax
  41d0a7:	eb 07                	jmp    0x41d0b0
  41d0a9:	c7 45 a0 00 00 00 00 	mov    DWORD PTR [ebp-0x60],0x0
  41d0b0:	8d 45 a0             	lea    eax,[ebp-0x60]
  41d0b3:	c7 45 e0 48 11 48 00 	mov    DWORD PTR [ebp-0x20],0x481148 ; ["D:\\vivo_Project\\vdfs\\src\\server\\SessionTask.cpp"]
  41d0ba:	50                   	push   eax
  41d0bb:	8d 85 7c ff ff ff    	lea    eax,[ebp-0x84]
  41d0c1:	c7 45 e4 55 01 00 00 	mov    DWORD PTR [ebp-0x1c],0x155
  41d0c8:	f3 0f 7e 45 e0       	movq   xmm0,QWORD PTR [ebp-0x20]
  41d0cd:	50                   	push   eax
  41d0ce:	83 ec 08             	sub    esp,0x8
  41d0d1:	8b c4                	mov    eax,esp
  41d0d3:	6a 04                	push   0x4
  41d0d5:	83 ec 0c             	sub    esp,0xc
  41d0d8:	c7 00 5c 13 48 00    	mov    DWORD PTR [eax],0x48135c ; ["insufficient memory. Request Length:{}, Allocated memory:{}."]
  41d0de:	c7 40 04 3c 00 00 00 	mov    DWORD PTR [eax+0x4],0x3c
  41d0e5:	8b c4                	mov    eax,esp
  41d0e7:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  41d0eb:	c7 40 08 80 12 48 00 	mov    DWORD PTR [eax+0x8],0x481280 ; ["SessionTask::sendReadFile"]
  41d0f2:	e8 99 bd fe ff       	call   0x408e90 ; ["call resolved=0x408e90 "]
  41d0f7:	b8 d7 d3 41 00       	mov    eax,0x41d3d7
  41d0fc:	c3                   	ret
  41d0fd:	8b cf                	mov    ecx,edi
  41d0ff:	e8 3c 0a 00 00       	call   0x41db40 ; ["call resolved=0x41db40 "]
  41d104:	8b 45 ac             	mov    eax,DWORD PTR [ebp-0x54]
  41d107:	8b 70 04             	mov    esi,DWORD PTR [eax+0x4]
  41d10a:	8b c6                	mov    eax,esi
  41d10c:	99                   	cdq
  41d10d:	8b c8                	mov    ecx,eax
  41d10f:	89 55 b0             	mov    DWORD PTR [ebp-0x50],edx
  41d112:	89 4d b4             	mov    DWORD PTR [ebp-0x4c],ecx
  41d115:	3b 57 14             	cmp    edx,DWORD PTR [edi+0x14]
  41d118:	0f 87 81 00 00 00    	ja     0x41d19f
  41d11e:	72 05                	jb     0x41d125
  41d120:	3b 4f 10             	cmp    ecx,DWORD PTR [edi+0x10]
  41d123:	77 7a                	ja     0x41d19f
  41d125:	8b 4f 1c             	mov    ecx,DWORD PTR [edi+0x1c]
  41d128:	8d 45 ac             	lea    eax,[ebp-0x54]
  41d12b:	50                   	push   eax
  41d12c:	ff 15 44 f4 47 00    	call   DWORD PTR ds:0x47f444 ; ?write@QIODevice@@QAE_JABVQByteArray@@@Z
  41d132:	83 f8 ff             	cmp    eax,0xffffffff
  41d135:	0f 85 10 02 00 00    	jne    0x41d34b
  41d13b:	3b d0                	cmp    edx,eax
  41d13d:	0f 85 08 02 00 00    	jne    0x41d34b
  41d143:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  41d149:	83 ec 08             	sub    esp,0x8
  41d14c:	8b c4                	mov    eax,esp
  41d14e:	c7 45 e0 48 11 48 00 	mov    DWORD PTR [ebp-0x20],0x481148 ; ["D:\\vivo_Project\\vdfs\\src\\server\\SessionTask.cpp"]
  41d155:	c7 45 e4 8b 01 00 00 	mov    DWORD PTR [ebp-0x1c],0x18b
  41d15c:	f3 0f 7e 45 e0       	movq   xmm0,QWORD PTR [ebp-0x20]
  41d161:	6a 04                	push   0x4
  41d163:	83 ec 0c             	sub    esp,0xc
  41d166:	c7 00 f8 11 48 00    	mov    DWORD PTR [eax],0x4811f8 ; ["Error writing socket."]
  41d16c:	c7 40 04 15 00 00 00 	mov    DWORD PTR [eax+0x4],0x15
  41d173:	8b c4                	mov    eax,esp
  41d175:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  41d179:	c7 40 08 80 12 48 00 	mov    DWORD PTR [eax+0x8],0x481280 ; ["SessionTask::sendReadFile"]
  41d180:	e8 8b e6 ff ff       	call   0x41b810 ; ["call resolved=0x41b810 "]
  41d185:	8d 8d 4c ff ff ff    	lea    ecx,[ebp-0xb4]
  41d18b:	ff 15 2c f4 47 00    	call   DWORD PTR ds:0x47f42c ; ??1QDataStream@@QAE@XZ
  41d191:	8d 4d 88             	lea    ecx,[ebp-0x78]
  41d194:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  41d19a:	e9 2f 02 00 00       	jmp    0x41d3ce
  41d19f:	0f 57 c0             	xorps  xmm0,xmm0
  41d1a2:	66 0f 13 85 74 ff ff 	movlpd QWORD PTR [ebp-0x8c],xmm0
  41d1aa:	85 f6                	test   esi,esi
  41d1ac:	0f 84 a0 01 00 00    	je     0x41d352
  41d1b2:	8b 85 78 ff ff ff    	mov    eax,DWORD PTR [ebp-0x88]
  41d1b8:	8b b5 74 ff ff ff    	mov    esi,DWORD PTR [ebp-0x8c]
  41d1be:	89 45 a4             	mov    DWORD PTR [ebp-0x5c],eax
  41d1c1:	8b 4f 1c             	mov    ecx,DWORD PTR [edi+0x1c]
  41d1c4:	8b 47 10             	mov    eax,DWORD PTR [edi+0x10]
  41d1c7:	89 4d 90             	mov    DWORD PTR [ebp-0x70],ecx
  41d1ca:	8b 4d b4             	mov    ecx,DWORD PTR [ebp-0x4c]
  41d1cd:	3b 57 14             	cmp    edx,DWORD PTR [edi+0x14]
  41d1d0:	0f 82 e0 00 00 00    	jb     0x41d2b6
  41d1d6:	77 08                	ja     0x41d1e0
  41d1d8:	3b c8                	cmp    ecx,eax
  41d1da:	0f 86 d6 00 00 00    	jbe    0x41d2b6
  41d1e0:	50                   	push   eax
  41d1e1:	56                   	push   esi
  41d1e2:	8d 45 9c             	lea    eax,[ebp-0x64]
  41d1e5:	50                   	push   eax
  41d1e6:	8d 4d ac             	lea    ecx,[ebp-0x54]
  41d1e9:	ff 15 8c f4 47 00    	call   DWORD PTR ds:0x47f48c ; ?mid@QByteArray@@QBE?AV1@HH@Z
  41d1ef:	8b 4d 90             	mov    ecx,DWORD PTR [ebp-0x70]
  41d1f2:	50                   	push   eax
  41d1f3:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  41d1f7:	ff 15 44 f4 47 00    	call   DWORD PTR ds:0x47f444 ; ?write@QIODevice@@QAE_JABVQByteArray@@@Z
  41d1fd:	8d 4d 9c             	lea    ecx,[ebp-0x64]
  41d200:	89 45 90             	mov    DWORD PTR [ebp-0x70],eax
  41d203:	89 55 a0             	mov    DWORD PTR [ebp-0x60],edx
  41d206:	c6 45 fc 0c          	mov    BYTE PTR [ebp-0x4],0xc
  41d20a:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  41d210:	83 7d 90 ff          	cmp    DWORD PTR [ebp-0x70],0xffffffff
  41d214:	75 06                	jne    0x41d21c
  41d216:	83 7d a0 ff          	cmp    DWORD PTR [ebp-0x60],0xffffffff
  41d21a:	74 3e                	je     0x41d25a
  41d21c:	8b cf                	mov    ecx,edi
  41d21e:	e8 1d 09 00 00       	call   0x41db40 ; ["call resolved=0x41db40 "]
  41d223:	8b 55 90             	mov    edx,DWORD PTR [ebp-0x70]
  41d226:	03 f2                	add    esi,edx
  41d228:	8b 45 a0             	mov    eax,DWORD PTR [ebp-0x60]
  41d22b:	11 45 a4             	adc    DWORD PTR [ebp-0x5c],eax
  41d22e:	29 55 b4             	sub    DWORD PTR [ebp-0x4c],edx
  41d231:	19 45 b0             	sbb    DWORD PTR [ebp-0x50],eax
  41d234:	8b 45 ac             	mov    eax,DWORD PTR [ebp-0x54]
  41d237:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  41d23a:	99                   	cdq
  41d23b:	39 55 a4             	cmp    DWORD PTR [ebp-0x5c],edx
  41d23e:	8b 55 b0             	mov    edx,DWORD PTR [ebp-0x50]
  41d241:	0f 82 7a ff ff ff    	jb     0x41d1c1
  41d247:	0f 87 05 01 00 00    	ja     0x41d352
  41d24d:	3b f0                	cmp    esi,eax
  41d24f:	0f 83 fd 00 00 00    	jae    0x41d352
  41d255:	e9 67 ff ff ff       	jmp    0x41d1c1
  41d25a:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  41d260:	83 ec 08             	sub    esp,0x8
  41d263:	8b c4                	mov    eax,esp
  41d265:	c7 45 e0 48 11 48 00 	mov    DWORD PTR [ebp-0x20],0x481148 ; ["D:\\vivo_Project\\vdfs\\src\\server\\SessionTask.cpp"]
  41d26c:	c7 45 e4 9c 01 00 00 	mov    DWORD PTR [ebp-0x1c],0x19c
  41d273:	f3 0f 7e 45 e0       	movq   xmm0,QWORD PTR [ebp-0x20]
  41d278:	6a 04                	push   0x4
  41d27a:	83 ec 0c             	sub    esp,0xc
  41d27d:	c7 00 f8 11 48 00    	mov    DWORD PTR [eax],0x4811f8 ; ["Error writing socket."]
  41d283:	c7 40 04 15 00 00 00 	mov    DWORD PTR [eax+0x4],0x15
  41d28a:	8b c4                	mov    eax,esp
  41d28c:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  41d290:	c7 40 08 80 12 48 00 	mov    DWORD PTR [eax+0x8],0x481280 ; ["SessionTask::sendReadFile"]
  41d297:	e8 74 e5 ff ff       	call   0x41b810 ; ["call resolved=0x41b810 "]
  41d29c:	8d 8d 4c ff ff ff    	lea    ecx,[ebp-0xb4]
  41d2a2:	ff 15 2c f4 47 00    	call   DWORD PTR ds:0x47f42c ; ??1QDataStream@@QAE@XZ
  41d2a8:	8d 4d 88             	lea    ecx,[ebp-0x78]
  41d2ab:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  41d2b1:	e9 18 01 00 00       	jmp    0x41d3ce
  41d2b6:	51                   	push   ecx
  41d2b7:	56                   	push   esi
  41d2b8:	8d 45 b0             	lea    eax,[ebp-0x50]
  41d2bb:	50                   	push   eax
  41d2bc:	8d 4d ac             	lea    ecx,[ebp-0x54]
  41d2bf:	ff 15 8c f4 47 00    	call   DWORD PTR ds:0x47f48c ; ?mid@QByteArray@@QBE?AV1@HH@Z
  41d2c5:	8b 4d 90             	mov    ecx,DWORD PTR [ebp-0x70]
  41d2c8:	50                   	push   eax
  41d2c9:	c6 45 fc 0e          	mov    BYTE PTR [ebp-0x4],0xe
  41d2cd:	ff 15 44 f4 47 00    	call   DWORD PTR ds:0x47f444 ; ?write@QIODevice@@QAE_JABVQByteArray@@@Z
  41d2d3:	8d 4d b0             	lea    ecx,[ebp-0x50]
  41d2d6:	89 55 9c             	mov    DWORD PTR [ebp-0x64],edx
  41d2d9:	8b f0                	mov    esi,eax
  41d2db:	c6 45 fc 0c          	mov    BYTE PTR [ebp-0x4],0xc
  41d2df:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  41d2e5:	83 fe ff             	cmp    esi,0xffffffff
  41d2e8:	75 61                	jne    0x41d34b
  41d2ea:	39 75 9c             	cmp    DWORD PTR [ebp-0x64],esi
  41d2ed:	75 5c                	jne    0x41d34b
  41d2ef:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  41d2f5:	83 ec 08             	sub    esp,0x8
  41d2f8:	8b c4                	mov    eax,esp
  41d2fa:	c7 45 e0 48 11 48 00 	mov    DWORD PTR [ebp-0x20],0x481148 ; ["D:\\vivo_Project\\vdfs\\src\\server\\SessionTask.cpp"]
  41d301:	c7 45 e4 a8 01 00 00 	mov    DWORD PTR [ebp-0x1c],0x1a8
  41d308:	f3 0f 7e 45 e0       	movq   xmm0,QWORD PTR [ebp-0x20]
  41d30d:	6a 04                	push   0x4
  41d30f:	83 ec 0c             	sub    esp,0xc
  41d312:	c7 00 f8 11 48 00    	mov    DWORD PTR [eax],0x4811f8 ; ["Error writing socket."]
  41d318:	c7 40 04 15 00 00 00 	mov    DWORD PTR [eax+0x4],0x15
  41d31f:	8b c4                	mov    eax,esp
  41d321:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  41d325:	c7 40 08 80 12 48 00 	mov    DWORD PTR [eax+0x8],0x481280 ; ["SessionTask::sendReadFile"]
  41d32c:	e8 df e4 ff ff       	call   0x41b810 ; ["call resolved=0x41b810 "]
  41d331:	8d 8d 4c ff ff ff    	lea    ecx,[ebp-0xb4]
  41d337:	ff 15 2c f4 47 00    	call   DWORD PTR ds:0x47f42c ; ??1QDataStream@@QAE@XZ
  41d33d:	8d 4d 88             	lea    ecx,[ebp-0x78]
  41d340:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  41d346:	e9 83 00 00 00       	jmp    0x41d3ce
  41d34b:	8b cf                	mov    ecx,edi
  41d34d:	e8 ee 07 00 00       	call   0x41db40 ; ["call resolved=0x41db40 "]
  41d352:	8d 8d 4c ff ff ff    	lea    ecx,[ebp-0xb4]
  41d358:	ff 15 2c f4 47 00    	call   DWORD PTR ds:0x47f42c ; ??1QDataStream@@QAE@XZ
  41d35e:	8d 4d 88             	lea    ecx,[ebp-0x78]
  41d361:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  41d367:	8d 4d ac             	lea    ecx,[ebp-0x54]
  41d36a:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  41d370:	8d 4d a8             	lea    ecx,[ebp-0x58]
  41d373:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  41d379:	b0 01                	mov    al,0x1
  41d37b:	eb 65                	jmp    0x41d3e2
  41d37d:	8d 45 bb             	lea    eax,[ebp-0x45]
  41d380:	c6 45 bb 09          	mov    BYTE PTR [ebp-0x45],0x9
  41d384:	50                   	push   eax
  41d385:	8b cf                	mov    ecx,edi
  41d387:	e8 34 f4 ff ff       	call   0x41c7c0 ; ["call resolved=0x41c7c0 SessionTask::sendErr"]
  41d38c:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  41d392:	83 ec 08             	sub    esp,0x8
  41d395:	8b c4                	mov    eax,esp
  41d397:	c7 45 e0 48 11 48 00 	mov    DWORD PTR [ebp-0x20],0x481148 ; ["D:\\vivo_Project\\vdfs\\src\\server\\SessionTask.cpp"]
  41d39e:	c7 45 e4 6e 01 00 00 	mov    DWORD PTR [ebp-0x1c],0x16e
  41d3a5:	f3 0f 7e 45 e0       	movq   xmm0,QWORD PTR [ebp-0x20]
  41d3aa:	6a 04                	push   0x4
  41d3ac:	83 ec 0c             	sub    esp,0xc
  41d3af:	c7 00 5c 12 48 00    	mov    DWORD PTR [eax],0x48125c ; ["Encryption failed"]
  41d3b5:	c7 40 04 11 00 00 00 	mov    DWORD PTR [eax+0x4],0x11
  41d3bc:	8b c4                	mov    eax,esp
  41d3be:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  41d3c2:	c7 40 08 80 12 48 00 	mov    DWORD PTR [eax+0x8],0x481280 ; ["SessionTask::sendReadFile"]
  41d3c9:	e8 42 e4 ff ff       	call   0x41b810 ; ["call resolved=0x41b810 "]
  41d3ce:	8d 4d ac             	lea    ecx,[ebp-0x54]
  41d3d1:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  41d3d7:	8d 4d a8             	lea    ecx,[ebp-0x58]
  41d3da:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  41d3e0:	32 c0                	xor    al,al
  41d3e2:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  41d3e5:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  41d3ec:	59                   	pop    ecx
  41d3ed:	5f                   	pop    edi
  41d3ee:	5e                   	pop    esi
  41d3ef:	5b                   	pop    ebx
  41d3f0:	8b 4d ec             	mov    ecx,DWORD PTR [ebp-0x14]
  41d3f3:	33 cd                	xor    ecx,ebp
  41d3f5:	e8 86 54 05 00       	call   0x472880 ; ["call resolved=0x472880 "]
  41d3fa:	8b e5                	mov    esp,ebp
  41d3fc:	5d                   	pop    ebp
  41d3fd:	c2 04 00             	ret    0x4
  41d400:	55                   	push   ebp
  41d401:	8d ac 24 68 ff ff ff 	lea    ebp,[esp-0x98]
  41d408:	81 ec 98 00 00 00    	sub    esp,0x98
  41d40e:	6a ff                	push   0xffffffff
  41d410:	68 dd 4a 47 00       	push   0x474add
  41d415:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  41d41b:	50                   	push   eax
  41d41c:	83 ec 3c             	sub    esp,0x3c
  41d41f:	a1 14 de 49 00       	mov    eax,ds:0x49de14
  41d424:	33 c5                	xor    eax,ebp
  41d426:	89 85 94 00 00 00    	mov    DWORD PTR [ebp+0x94],eax
  41d42c:	53                   	push   ebx
  41d42d:	56                   	push   esi
  41d42e:	57                   	push   edi
  41d42f:	50                   	push   eax
  41d430:	8d 45 f4             	lea    eax,[ebp-0xc]
  41d433:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  41d439:	8b f9                	mov    edi,ecx
  41d43b:	89 7d d4             	mov    DWORD PTR [ebp-0x2c],edi
  41d43e:	8b 5f 08             	mov    ebx,DWORD PTR [edi+0x8]
  41d441:	89 5d dc             	mov    DWORD PTR [ebp-0x24],ebx
  41d444:	8d 04 1b             	lea    eax,[ebx+ebx*1]
  41d447:	89 45 d8             	mov    DWORD PTR [ebp-0x28],eax
  41d44a:	8b 47 04             	mov    eax,DWORD PTR [edi+0x4]
  41d44d:	8d 4f 10             	lea    ecx,[edi+0x10]
  41d450:	8b 77 0c             	mov    esi,DWORD PTR [edi+0xc]
  41d453:	ba cc 08 48 00       	mov    edx,0x4808cc
  41d458:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  41d45f:	c7 45 08 00 00 00 00 	mov    DWORD PTR [ebp+0x8],0x0
  41d466:	89 55 00             	mov    DWORD PTR [ebp+0x0],edx
  41d469:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  41d46c:	89 75 0c             	mov    DWORD PTR [ebp+0xc],esi
  41d46f:	3b c1                	cmp    eax,ecx
  41d471:	75 2a                	jne    0x41d49d
  41d473:	8d 45 10             	lea    eax,[ebp+0x10]
  41d476:	89 45 04             	mov    DWORD PTR [ebp+0x4],eax
  41d479:	8d 04 9d 10 00 00 00 	lea    eax,[ebx*4+0x10]
  41d480:	2b c1                	sub    eax,ecx
  41d482:	03 c7                	add    eax,edi
  41d484:	50                   	push   eax
  41d485:	51                   	push   ecx
  41d486:	8d 45 10             	lea    eax,[ebp+0x10]
  41d489:	50                   	push   eax
  41d48a:	e8 f4 64 05 00       	call   0x473983 ; ["call resolved=0x473983 "]
  41d48f:	8b 45 04             	mov    eax,DWORD PTR [ebp+0x4]
  41d492:	83 c4 0c             	add    esp,0xc
  41d495:	8b 55 00             	mov    edx,DWORD PTR [ebp+0x0]
  41d498:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  41d49b:	eb 0d                	jmp    0x41d4aa
  41d49d:	89 45 04             	mov    DWORD PTR [ebp+0x4],eax
  41d4a0:	89 4f 04             	mov    DWORD PTR [edi+0x4],ecx
  41d4a3:	c7 47 0c 00 00 00 00 	mov    DWORD PTR [edi+0xc],0x0
  41d4aa:	3b 5d 0c             	cmp    ebx,DWORD PTR [ebp+0xc]
  41d4ad:	76 2e                	jbe    0x41d4dd
  41d4af:	8b 02                	mov    eax,DWORD PTR [edx]
  41d4b1:	8d 4d 00             	lea    ecx,[ebp+0x0]
  41d4b4:	53                   	push   ebx
  41d4b5:	3d 60 b4 41 00       	cmp    eax,0x41b460
  41d4ba:	75 07                	jne    0x41d4c3
  41d4bc:	e8 9f df ff ff       	call   0x41b460 ; ["call resolved=0x41b460 "]
  41d4c1:	eb 02                	jmp    0x41d4c5
  41d4c3:	ff d0                	call   eax
  41d4c5:	8b 45 0c             	mov    eax,DWORD PTR [ebp+0xc]
  41d4c8:	3b d8                	cmp    ebx,eax
  41d4ca:	76 0b                	jbe    0x41d4d7
  41d4cc:	89 45 08             	mov    DWORD PTR [ebp+0x8],eax
  41d4cf:	8b 45 04             	mov    eax,DWORD PTR [ebp+0x4]
  41d4d2:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  41d4d5:	eb 09                	jmp    0x41d4e0
  41d4d7:	8b 45 04             	mov    eax,DWORD PTR [ebp+0x4]
  41d4da:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  41d4dd:	89 5d 08             	mov    DWORD PTR [ebp+0x8],ebx
  41d4e0:	8b 4f 0c             	mov    ecx,DWORD PTR [edi+0xc]
  41d4e3:	8d 34 1b             	lea    esi,[ebx+ebx*1]
  41d4e6:	c7 45 fc 01 00 00 00 	mov    DWORD PTR [ebp-0x4],0x1
  41d4ed:	3b f1                	cmp    esi,ecx
  41d4ef:	76 12                	jbe    0x41d503
  41d4f1:	8b 07                	mov    eax,DWORD PTR [edi]
  41d4f3:	8b cf                	mov    ecx,edi
  41d4f5:	56                   	push   esi
  41d4f6:	ff 10                	call   DWORD PTR [eax]
  41d4f8:	8b 4f 0c             	mov    ecx,DWORD PTR [edi+0xc]
  41d4fb:	3b f1                	cmp    esi,ecx
  41d4fd:	8b 45 04             	mov    eax,DWORD PTR [ebp+0x4]
  41d500:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  41d503:	0f 46 ce             	cmovbe ecx,esi
  41d506:	c7 45 ec 00 00 00 00 	mov    DWORD PTR [ebp-0x14],0x0
  41d50d:	0f 57 c0             	xorps  xmm0,xmm0
  41d510:	89 4f 08             	mov    DWORD PTR [edi+0x8],ecx
  41d513:	66 0f 13 45 b8       	movlpd QWORD PTR [ebp-0x48],xmm0
  41d518:	85 db                	test   ebx,ebx
  41d51a:	8b 7d b8             	mov    edi,DWORD PTR [ebp-0x48]
  41d51d:	8b 5d bc             	mov    ebx,DWORD PTR [ebp-0x44]
  41d520:	66 0f 13 45 cc       	movlpd QWORD PTR [ebp-0x34],xmm0
  41d525:	8b 75 d0             	mov    esi,DWORD PTR [ebp-0x30]
  41d528:	8b 4d cc             	mov    ecx,DWORD PTR [ebp-0x34]
  41d52b:	7e 77                	jle    0x41d5a4
  41d52d:	89 75 e8             	mov    DWORD PTR [ebp-0x18],esi
  41d530:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  41d533:	89 55 e0             	mov    DWORD PTR [ebp-0x20],edx
  41d536:	89 45 e4             	mov    DWORD PTR [ebp-0x1c],eax
  41d539:	0f 1f 80 00 00 00 00 	nop    DWORD PTR [eax+0x0]
  41d540:	8b 75 f0             	mov    esi,DWORD PTR [ebp-0x10]
  41d543:	8b 00                	mov    eax,DWORD PTR [eax]
  41d545:	f7 24 96             	mul    DWORD PTR [esi+edx*4]
  41d548:	8b 75 e8             	mov    esi,DWORD PTR [ebp-0x18]
  41d54b:	03 f8                	add    edi,eax
  41d54d:	13 da                	adc    ebx,edx
  41d54f:	3b da                	cmp    ebx,edx
  41d551:	77 0f                	ja     0x41d562
  41d553:	72 04                	jb     0x41d559
  41d555:	3b f8                	cmp    edi,eax
  41d557:	73 09                	jae    0x41d562
  41d559:	83 c1 01             	add    ecx,0x1
  41d55c:	83 d6 00             	adc    esi,0x0
  41d55f:	89 75 e8             	mov    DWORD PTR [ebp-0x18],esi
  41d562:	8b 45 e4             	mov    eax,DWORD PTR [ebp-0x1c]
  41d565:	8b 55 e0             	mov    edx,DWORD PTR [ebp-0x20]
  41d568:	83 c0 04             	add    eax,0x4
  41d56b:	83 ea 01             	sub    edx,0x1
  41d56e:	89 45 e4             	mov    DWORD PTR [ebp-0x1c],eax
  41d571:	89 55 e0             	mov    DWORD PTR [ebp-0x20],edx
  41d574:	79 ca                	jns    0x41d540
  41d576:	8b 45 d4             	mov    eax,DWORD PTR [ebp-0x2c]
  41d579:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  41d57c:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  41d57f:	89 3c 90             	mov    DWORD PTR [eax+edx*4],edi
  41d582:	8b fb                	mov    edi,ebx
  41d584:	33 db                	xor    ebx,ebx
  41d586:	8b c2                	mov    eax,edx
  41d588:	8b 55 dc             	mov    edx,DWORD PTR [ebp-0x24]
  41d58b:	0b d9                	or     ebx,ecx
  41d58d:	40                   	inc    eax
  41d58e:	8b ce                	mov    ecx,esi
  41d590:	33 f6                	xor    esi,esi
  41d592:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  41d595:	3b c2                	cmp    eax,edx
  41d597:	89 75 e8             	mov    DWORD PTR [ebp-0x18],esi
  41d59a:	8b 45 04             	mov    eax,DWORD PTR [ebp+0x4]
  41d59d:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  41d5a0:	7c 8e                	jl     0x41d530
  41d5a2:	eb 03                	jmp    0x41d5a7
  41d5a4:	8b 55 dc             	mov    edx,DWORD PTR [ebp-0x24]
  41d5a7:	3b 55 d8             	cmp    edx,DWORD PTR [ebp-0x28]
  41d5aa:	0f 8d ac 00 00 00    	jge    0x41d65c
  41d5b0:	8d 04 95 00 00 00 00 	lea    eax,[edx*4+0x0]
  41d5b7:	c7 45 e8 01 00 00 00 	mov    DWORD PTR [ebp-0x18],0x1
  41d5be:	89 45 c8             	mov    DWORD PTR [ebp-0x38],eax
  41d5c1:	8d 42 ff             	lea    eax,[edx-0x1]
  41d5c4:	89 45 d0             	mov    DWORD PTR [ebp-0x30],eax
  41d5c7:	89 55 d8             	mov    DWORD PTR [ebp-0x28],edx
  41d5ca:	66 0f 1f 44 00 00    	nop    WORD PTR [eax+eax*1+0x0]
  41d5d0:	8b 55 e8             	mov    edx,DWORD PTR [ebp-0x18]
  41d5d3:	8b c2                	mov    eax,edx
  41d5d5:	3b 45 dc             	cmp    eax,DWORD PTR [ebp-0x24]
  41d5d8:	8b 45 f0             	mov    eax,DWORD PTR [ebp-0x10]
  41d5db:	89 55 ec             	mov    DWORD PTR [ebp-0x14],edx
  41d5de:	7d 47                	jge    0x41d627
  41d5e0:	8b 55 d0             	mov    edx,DWORD PTR [ebp-0x30]
  41d5e3:	8d 14 90             	lea    edx,[eax+edx*4]
  41d5e6:	89 55 e4             	mov    DWORD PTR [ebp-0x1c],edx
  41d5e9:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  41d5ec:	0f 1f 40 00          	nop    DWORD PTR [eax+0x0]
  41d5f0:	8b 04 90             	mov    eax,DWORD PTR [eax+edx*4]
  41d5f3:	8b 55 e4             	mov    edx,DWORD PTR [ebp-0x1c]
  41d5f6:	83 6d e4 04          	sub    DWORD PTR [ebp-0x1c],0x4
  41d5fa:	f7 22                	mul    DWORD PTR [edx]
  41d5fc:	89 45 e0             	mov    DWORD PTR [ebp-0x20],eax
  41d5ff:	8b 45 ec             	mov    eax,DWORD PTR [ebp-0x14]
  41d602:	40                   	inc    eax
  41d603:	03 7d e0             	add    edi,DWORD PTR [ebp-0x20]
  41d606:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  41d609:	13 da                	adc    ebx,edx
  41d60b:	3b da                	cmp    ebx,edx
  41d60d:	77 0d                	ja     0x41d61c
  41d60f:	72 05                	jb     0x41d616
  41d611:	3b 7d e0             	cmp    edi,DWORD PTR [ebp-0x20]
  41d614:	73 06                	jae    0x41d61c
  41d616:	83 c1 01             	add    ecx,0x1
  41d619:	83 d6 00             	adc    esi,0x0
  41d61c:	3b 45 dc             	cmp    eax,DWORD PTR [ebp-0x24]
  41d61f:	8b 45 f0             	mov    eax,DWORD PTR [ebp-0x10]
  41d622:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  41d625:	7c c9                	jl     0x41d5f0
  41d627:	8b 45 d4             	mov    eax,DWORD PTR [ebp-0x2c]
  41d62a:	8b 55 c8             	mov    edx,DWORD PTR [ebp-0x38]
  41d62d:	ff 45 e8             	inc    DWORD PTR [ebp-0x18]
  41d630:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  41d633:	89 3c 02             	mov    DWORD PTR [edx+eax*1],edi
  41d636:	8b fb                	mov    edi,ebx
  41d638:	33 db                	xor    ebx,ebx
  41d63a:	83 c2 04             	add    edx,0x4
  41d63d:	0b d9                	or     ebx,ecx
  41d63f:	89 55 c8             	mov    DWORD PTR [ebp-0x38],edx
  41d642:	8b ce                	mov    ecx,esi
  41d644:	33 f6                	xor    esi,esi
  41d646:	83 6d d8 01          	sub    DWORD PTR [ebp-0x28],0x1
  41d64a:	74 0b                	je     0x41d657
  41d64c:	8b 45 04             	mov    eax,DWORD PTR [ebp+0x4]
  41d64f:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  41d652:	e9 79 ff ff ff       	jmp    0x41d5d0
  41d657:	8b 55 04             	mov    edx,DWORD PTR [ebp+0x4]
  41d65a:	eb 03                	jmp    0x41d65f
  41d65c:	8b 55 f0             	mov    edx,DWORD PTR [ebp-0x10]
  41d65f:	8b 5d d4             	mov    ebx,DWORD PTR [ebp-0x2c]
  41d662:	8b 4b 08             	mov    ecx,DWORD PTR [ebx+0x8]
  41d665:	49                   	dec    ecx
  41d666:	85 c9                	test   ecx,ecx
  41d668:	7e 13                	jle    0x41d67d
  41d66a:	8b 43 04             	mov    eax,DWORD PTR [ebx+0x4]
  41d66d:	8d 04 88             	lea    eax,[eax+ecx*4]
  41d670:	83 38 00             	cmp    DWORD PTR [eax],0x0
  41d673:	75 08                	jne    0x41d67d
  41d675:	49                   	dec    ecx
  41d676:	83 e8 04             	sub    eax,0x4
  41d679:	85 c9                	test   ecx,ecx
  41d67b:	7f f3                	jg     0x41d670
  41d67d:	8b 43 0c             	mov    eax,DWORD PTR [ebx+0xc]
  41d680:	8d 71 01             	lea    esi,[ecx+0x1]
  41d683:	3b f0                	cmp    esi,eax
  41d685:	76 0f                	jbe    0x41d696
  41d687:	8b 03                	mov    eax,DWORD PTR [ebx]
  41d689:	8b cb                	mov    ecx,ebx
  41d68b:	56                   	push   esi
  41d68c:	ff 10                	call   DWORD PTR [eax]
  41d68e:	8b 43 0c             	mov    eax,DWORD PTR [ebx+0xc]
  41d691:	3b f0                	cmp    esi,eax
  41d693:	8b 55 04             	mov    edx,DWORD PTR [ebp+0x4]
  41d696:	0f 47 f0             	cmova  esi,eax
  41d699:	c7 45 00 cc 08 48 00 	mov    DWORD PTR [ebp+0x0],0x4808cc
  41d6a0:	89 73 08             	mov    DWORD PTR [ebx+0x8],esi
  41d6a3:	8b 83 94 00 00 00    	mov    eax,DWORD PTR [ebx+0x94]
  41d6a9:	03 c0                	add    eax,eax
  41d6ab:	89 83 94 00 00 00    	mov    DWORD PTR [ebx+0x94],eax
  41d6b1:	8d 45 10             	lea    eax,[ebp+0x10]
  41d6b4:	3b d0                	cmp    edx,eax
  41d6b6:	74 34                	je     0x41d6ec
  41d6b8:	8b 45 0c             	mov    eax,DWORD PTR [ebp+0xc]
  41d6bb:	8d 0c 85 00 00 00 00 	lea    ecx,[eax*4+0x0]
  41d6c2:	8b c2                	mov    eax,edx
  41d6c4:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  41d6ca:	72 16                	jb     0x41d6e2
  41d6cc:	8b 52 fc             	mov    edx,DWORD PTR [edx-0x4]
  41d6cf:	83 c1 23             	add    ecx,0x23
  41d6d2:	2b c2                	sub    eax,edx
  41d6d4:	83 c0 fc             	add    eax,0xfffffffc
  41d6d7:	83 f8 1f             	cmp    eax,0x1f
  41d6da:	76 06                	jbe    0x41d6e2
  41d6dc:	ff 15 68 f6 47 00    	call   DWORD PTR ds:0x47f668 ; _invalid_parameter_noinfo_noreturn
  41d6e2:	51                   	push   ecx
  41d6e3:	52                   	push   edx
  41d6e4:	e8 38 4f 05 00       	call   0x472621 ; ["call resolved=0x472621 "]
  41d6e9:	83 c4 08             	add    esp,0x8
  41d6ec:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  41d6ef:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  41d6f6:	59                   	pop    ecx
  41d6f7:	5f                   	pop    edi
  41d6f8:	5e                   	pop    esi
  41d6f9:	5b                   	pop    ebx
  41d6fa:	8b 8d 94 00 00 00    	mov    ecx,DWORD PTR [ebp+0x94]
  41d700:	33 cd                	xor    ecx,ebp
  41d702:	e8 79 51 05 00       	call   0x472880 ; ["call resolved=0x472880 "]
  41d707:	8d a5 98 00 00 00    	lea    esp,[ebp+0x98]
  41d70d:	5d                   	pop    ebp
  41d70e:	c3                   	ret
