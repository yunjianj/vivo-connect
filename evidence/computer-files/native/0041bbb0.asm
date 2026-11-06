; SessionTask::recvRequest; image base 0x400000; static annotation only
  41bbb0:	55                   	push   ebp
  41bbb1:	8b ec                	mov    ebp,esp
  41bbb3:	6a ff                	push   0xffffffff
  41bbb5:	68 39 49 47 00       	push   0x474939
  41bbba:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  41bbc0:	50                   	push   eax
  41bbc1:	83 ec 38             	sub    esp,0x38
  41bbc4:	56                   	push   esi
  41bbc5:	57                   	push   edi
  41bbc6:	a1 14 de 49 00       	mov    eax,ds:0x49de14
  41bbcb:	33 c5                	xor    eax,ebp
  41bbcd:	50                   	push   eax
  41bbce:	8d 45 f4             	lea    eax,[ebp-0xc]
  41bbd1:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  41bbd7:	8b f1                	mov    esi,ecx
  41bbd9:	8b 4e 1c             	mov    ecx,DWORD PTR [esi+0x1c]
  41bbdc:	8d 45 f0             	lea    eax,[ebp-0x10]
  41bbdf:	50                   	push   eax
  41bbe0:	ff 15 48 f4 47 00    	call   DWORD PTR ds:0x47f448 ; ?readAll@QIODevice@@QAE?AVQByteArray@@XZ
  41bbe6:	8b 45 f0             	mov    eax,DWORD PTR [ebp-0x10]
  41bbe9:	0f 57 c0             	xorps  xmm0,xmm0
  41bbec:	66 0f 13 45 d4       	movlpd QWORD PTR [ebp-0x2c],xmm0
  41bbf1:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  41bbf8:	83 78 04 08          	cmp    DWORD PTR [eax+0x4],0x8
  41bbfc:	76 33                	jbe    0x41bc31
  41bbfe:	8d 45 f0             	lea    eax,[ebp-0x10]
  41bc01:	50                   	push   eax
  41bc02:	8d 4d bc             	lea    ecx,[ebp-0x44]
  41bc05:	ff 15 30 f4 47 00    	call   DWORD PTR ds:0x47f430 ; ??0QDataStream@@QAE@ABVQByteArray@@@Z
  41bc0b:	8b 4d c0             	mov    ecx,DWORD PTR [ebp-0x40]
  41bc0e:	6a 00                	push   0x0
  41bc10:	6a 00                	push   0x0
  41bc12:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  41bc16:	8b 01                	mov    eax,DWORD PTR [ecx]
  41bc18:	ff 50 40             	call   DWORD PTR [eax+0x40]
  41bc1b:	8d 45 d4             	lea    eax,[ebp-0x2c]
  41bc1e:	50                   	push   eax
  41bc1f:	8d 4d bc             	lea    ecx,[ebp-0x44]
  41bc22:	ff 15 28 f4 47 00    	call   DWORD PTR ds:0x47f428 ; ??5QDataStream@@QAEAAV0@AA_J@Z
  41bc28:	8d 4d bc             	lea    ecx,[ebp-0x44]
  41bc2b:	ff 15 2c f4 47 00    	call   DWORD PTR ds:0x47f42c ; ??1QDataStream@@QAE@XZ
  41bc31:	8d 4d ec             	lea    ecx,[ebp-0x14]
  41bc34:	ff 15 9c f4 47 00    	call   DWORD PTR ds:0x47f49c ; ??0QByteArray@@QAE@XZ
  41bc3a:	8b 45 f0             	mov    eax,DWORD PTR [ebp-0x10]
  41bc3d:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  41bc41:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  41bc44:	99                   	cdq
  41bc45:	3b 55 d8             	cmp    edx,DWORD PTR [ebp-0x28]
  41bc48:	0f 87 f6 00 00 00    	ja     0x41bd44
  41bc4e:	72 09                	jb     0x41bc59
  41bc50:	3b 45 d4             	cmp    eax,DWORD PTR [ebp-0x2c]
  41bc53:	0f 83 eb 00 00 00    	jae    0x41bd44
  41bc59:	8b 3d 0c f4 47 00    	mov    edi,DWORD PTR ds:0x47f40c
  41bc5f:	90                   	nop
  41bc60:	8b 4e 1c             	mov    ecx,DWORD PTR [esi+0x1c]
  41bc63:	8b 01                	mov    eax,DWORD PTR [ecx]
  41bc65:	8b 40 44             	mov    eax,DWORD PTR [eax+0x44]
  41bc68:	ff d0                	call   eax
  41bc6a:	84 c0                	test   al,al
  41bc6c:	74 35                	je     0x41bca3
  41bc6e:	66 90                	xchg   ax,ax
  41bc70:	8b 4e 24             	mov    ecx,DWORD PTR [esi+0x24]
  41bc73:	68 f4 01 00 00       	push   0x1f4
  41bc78:	ff d7                	call   edi
  41bc7a:	8b 4e 20             	mov    ecx,DWORD PTR [esi+0x20]
  41bc7d:	51                   	push   ecx
  41bc7e:	8b c4                	mov    eax,esp
  41bc80:	c7 00 00 00 00 00    	mov    DWORD PTR [eax],0x0
  41bc86:	ff 15 5c f4 47 00    	call   DWORD PTR ds:0x47f45c ; ?exec@QEventLoop@@QAEHV?$QFlags@W4ProcessEventsFlag@QEventLoop@@@@@Z
  41bc8c:	8b 4e 24             	mov    ecx,DWORD PTR [esi+0x24]
  41bc8f:	ff 15 08 f4 47 00    	call   DWORD PTR ds:0x47f408 ; ?stop@QTimer@@QAEXXZ
  41bc95:	8b 4e 1c             	mov    ecx,DWORD PTR [esi+0x1c]
  41bc98:	8b 01                	mov    eax,DWORD PTR [ecx]
  41bc9a:	8b 40 44             	mov    eax,DWORD PTR [eax+0x44]
  41bc9d:	ff d0                	call   eax
  41bc9f:	84 c0                	test   al,al
  41bca1:	75 cd                	jne    0x41bc70
  41bca3:	8d 4d ec             	lea    ecx,[ebp-0x14]
  41bca6:	ff 15 90 f4 47 00    	call   DWORD PTR ds:0x47f490 ; ?clear@QByteArray@@QAEXXZ
  41bcac:	8b 4e 1c             	mov    ecx,DWORD PTR [esi+0x1c]
  41bcaf:	8d 45 e0             	lea    eax,[ebp-0x20]
  41bcb2:	50                   	push   eax
  41bcb3:	ff 15 48 f4 47 00    	call   DWORD PTR ds:0x47f448 ; ?readAll@QIODevice@@QAE?AVQByteArray@@XZ
  41bcb9:	50                   	push   eax
  41bcba:	8d 4d ec             	lea    ecx,[ebp-0x14]
  41bcbd:	ff 15 94 f4 47 00    	call   DWORD PTR ds:0x47f494 ; ??4QByteArray@@QAEAAV0@$$QAV0@@Z
  41bcc3:	8d 4d e0             	lea    ecx,[ebp-0x20]
  41bcc6:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  41bccc:	8b 45 ec             	mov    eax,DWORD PTR [ebp-0x14]
  41bccf:	83 78 04 00          	cmp    DWORD PTR [eax+0x4],0x0
  41bcd3:	7e 2a                	jle    0x41bcff
  41bcd5:	8d 45 ec             	lea    eax,[ebp-0x14]
  41bcd8:	50                   	push   eax
  41bcd9:	8d 4d f0             	lea    ecx,[ebp-0x10]
  41bcdc:	ff 15 88 f4 47 00    	call   DWORD PTR ds:0x47f488 ; ?append@QByteArray@@QAEAAV1@ABV1@@Z ; ["Ξ\t"]
  41bce2:	8b 45 f0             	mov    eax,DWORD PTR [ebp-0x10]
  41bce5:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  41bce8:	99                   	cdq
  41bce9:	3b 55 d8             	cmp    edx,DWORD PTR [ebp-0x28]
  41bcec:	0f 82 6e ff ff ff    	jb     0x41bc60
  41bcf2:	77 50                	ja     0x41bd44
  41bcf4:	3b 45 d4             	cmp    eax,DWORD PTR [ebp-0x2c]
  41bcf7:	0f 82 63 ff ff ff    	jb     0x41bc60
  41bcfd:	eb 45                	jmp    0x41bd44
  41bcff:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  41bd02:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  41bd08:	89 45 e0             	mov    DWORD PTR [ebp-0x20],eax
  41bd0b:	8d 45 d4             	lea    eax,[ebp-0x2c]
  41bd0e:	50                   	push   eax
  41bd0f:	8d 45 e0             	lea    eax,[ebp-0x20]
  41bd12:	c7 45 c8 48 11 48 00 	mov    DWORD PTR [ebp-0x38],0x481148 ; ["D:\\vivo_Project\\vdfs\\src\\server\\SessionTask.cpp"]
  41bd19:	50                   	push   eax
  41bd1a:	6a 22                	push   0x22
  41bd1c:	68 bc 11 48 00       	push   0x4811bc ; ["Read stream error! {} totalSize {}"]
  41bd21:	6a 04                	push   0x4
  41bd23:	83 ec 0c             	sub    esp,0xc
  41bd26:	c7 45 cc 81 00 00 00 	mov    DWORD PTR [ebp-0x34],0x81
  41bd2d:	f3 0f 7e 45 c8       	movq   xmm0,QWORD PTR [ebp-0x38]
  41bd32:	8b c4                	mov    eax,esp
  41bd34:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  41bd38:	c7 40 08 a0 11 48 00 	mov    DWORD PTR [eax+0x8],0x4811a0 ; ["SessionTask::recvRequest"]
  41bd3f:	e8 3c dd fe ff       	call   0x409a80 ; ["call resolved=0x409a80 "]
  41bd44:	8d 4d e8             	lea    ecx,[ebp-0x18]
  41bd47:	ff 15 9c f4 47 00    	call   DWORD PTR ds:0x47f49c ; ??0QByteArray@@QAE@XZ
  41bd4d:	8b 4e 28             	mov    ecx,DWORD PTR [esi+0x28]
  41bd50:	8d 45 e4             	lea    eax,[ebp-0x1c]
  41bd53:	50                   	push   eax
  41bd54:	8d 45 e8             	lea    eax,[ebp-0x18]
  41bd57:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  41bd5b:	50                   	push   eax
  41bd5c:	8d 45 f0             	lea    eax,[ebp-0x10]
  41bd5f:	c6 45 e4 00          	mov    BYTE PTR [ebp-0x1c],0x0
  41bd63:	50                   	push   eax
  41bd64:	e8 07 82 02 00       	call   0x443f70 ; ["call resolved=0x443f70 vdfs_server_connector::ParseRequest"]
  41bd69:	ff 75 e4             	push   DWORD PTR [ebp-0x1c]
  41bd6c:	8d 45 e8             	lea    eax,[ebp-0x18]
  41bd6f:	8b ce                	mov    ecx,esi
  41bd71:	50                   	push   eax
  41bd72:	e8 49 05 00 00       	call   0x41c2c0 ; ["call resolved=0x41c2c0 SessionTask::sendData"]
  41bd77:	84 c0                	test   al,al
  41bd79:	75 42                	jne    0x41bdbd
  41bd7b:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  41bd81:	83 ec 08             	sub    esp,0x8
  41bd84:	8b c4                	mov    eax,esp
  41bd86:	c7 45 c8 48 11 48 00 	mov    DWORD PTR [ebp-0x38],0x481148 ; ["D:\\vivo_Project\\vdfs\\src\\server\\SessionTask.cpp"]
  41bd8d:	c7 45 cc 8c 00 00 00 	mov    DWORD PTR [ebp-0x34],0x8c
  41bd94:	f3 0f 7e 45 c8       	movq   xmm0,QWORD PTR [ebp-0x38]
  41bd99:	6a 04                	push   0x4
  41bd9b:	83 ec 0c             	sub    esp,0xc
  41bd9e:	c7 00 e0 11 48 00    	mov    DWORD PTR [eax],0x4811e0 ; ["file operation failed."]
  41bda4:	c7 40 04 16 00 00 00 	mov    DWORD PTR [eax+0x4],0x16
  41bdab:	8b c4                	mov    eax,esp
  41bdad:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  41bdb1:	c7 40 08 a0 11 48 00 	mov    DWORD PTR [eax+0x8],0x4811a0 ; ["SessionTask::recvRequest"]
  41bdb8:	e8 53 fa ff ff       	call   0x41b810 ; ["call resolved=0x41b810 "]
  41bdbd:	8d 4d e8             	lea    ecx,[ebp-0x18]
  41bdc0:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  41bdc6:	8d 4d ec             	lea    ecx,[ebp-0x14]
  41bdc9:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  41bdcf:	8d 4d f0             	lea    ecx,[ebp-0x10]
  41bdd2:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  41bdd8:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  41bddb:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  41bde2:	59                   	pop    ecx
  41bde3:	5f                   	pop    edi
  41bde4:	5e                   	pop    esi
  41bde5:	8b e5                	mov    esp,ebp
  41bde7:	5d                   	pop    ebp
  41bde8:	c3                   	ret
