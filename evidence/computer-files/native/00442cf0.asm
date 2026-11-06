; vdfs_server_connector::AssembleDirentReply; image base 0x400000; static annotation only
  442cf0:	55                   	push   ebp
  442cf1:	8b ec                	mov    ebp,esp
  442cf3:	6a ff                	push   0xffffffff
  442cf5:	68 e4 7f 47 00       	push   0x477fe4
  442cfa:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  442d00:	50                   	push   eax
  442d01:	83 ec 64             	sub    esp,0x64
  442d04:	56                   	push   esi
  442d05:	57                   	push   edi
  442d06:	a1 14 de 49 00       	mov    eax,ds:0x49de14
  442d0b:	33 c5                	xor    eax,ebp
  442d0d:	50                   	push   eax
  442d0e:	8d 45 f4             	lea    eax,[ebp-0xc]
  442d11:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  442d17:	8b f1                	mov    esi,ecx
  442d19:	89 75 e8             	mov    DWORD PTR [ebp-0x18],esi
  442d1c:	8b 4d 0c             	mov    ecx,DWORD PTR [ebp+0xc]
  442d1f:	ff 15 90 f4 47 00    	call   DWORD PTR ds:0x47f490 ; ?clear@QByteArray@@QAEXXZ
  442d25:	8b 7d 10             	mov    edi,DWORD PTR [ebp+0x10]
  442d28:	80 3f 00             	cmp    BYTE PTR [edi],0x0
  442d2b:	0f 84 8f 01 00 00    	je     0x442ec0
  442d31:	8b 35 34 f4 47 00    	mov    esi,DWORD PTR ds:0x47f434
  442d37:	51                   	push   ecx
  442d38:	8b c4                	mov    eax,esp
  442d3a:	8d 4d c0             	lea    ecx,[ebp-0x40]
  442d3d:	ff 75 0c             	push   DWORD PTR [ebp+0xc]
  442d40:	c7 00 02 00 00 00    	mov    DWORD PTR [eax],0x2
  442d46:	ff d6                	call   esi
  442d48:	8b 4d c4             	mov    ecx,DWORD PTR [ebp-0x3c]
  442d4b:	6a 00                	push   0x0
  442d4d:	6a 00                	push   0x0
  442d4f:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  442d56:	8b 01                	mov    eax,DWORD PTR [ecx]
  442d58:	ff 50 40             	call   DWORD PTR [eax+0x40]
  442d5b:	8b 4d e8             	mov    ecx,DWORD PTR [ebp-0x18]
  442d5e:	8b 41 48             	mov    eax,DWORD PTR [ecx+0x48]
  442d61:	8d 4d ec             	lea    ecx,[ebp-0x14]
  442d64:	8a 40 08             	mov    al,BYTE PTR [eax+0x8]
  442d67:	88 45 10             	mov    BYTE PTR [ebp+0x10],al
  442d6a:	ff 15 9c f4 47 00    	call   DWORD PTR ds:0x47f49c ; ??0QByteArray@@QAE@XZ
  442d70:	51                   	push   ecx
  442d71:	8b c4                	mov    eax,esp
  442d73:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  442d77:	8d 4d 90             	lea    ecx,[ebp-0x70]
  442d7a:	c7 00 02 00 00 00    	mov    DWORD PTR [eax],0x2
  442d80:	8d 45 ec             	lea    eax,[ebp-0x14]
  442d83:	50                   	push   eax
  442d84:	ff d6                	call   esi
  442d86:	8b 4d 94             	mov    ecx,DWORD PTR [ebp-0x6c]
  442d89:	6a 00                	push   0x0
  442d8b:	6a 00                	push   0x0
  442d8d:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  442d91:	8b 01                	mov    eax,DWORD PTR [ecx]
  442d93:	ff 50 40             	call   DWORD PTR [eax+0x40]
  442d96:	ff 75 10             	push   DWORD PTR [ebp+0x10]
  442d99:	8d 4d 90             	lea    ecx,[ebp-0x70]
  442d9c:	ff 15 24 f4 47 00    	call   DWORD PTR ds:0x47f424 ; ??6QDataStream@@QAEAAV0@C@Z
  442da2:	8d 4d 08             	lea    ecx,[ebp+0x8]
  442da5:	ff 15 9c f4 47 00    	call   DWORD PTR ds:0x47f49c ; ??0QByteArray@@QAE@XZ
  442dab:	8b 4d e8             	mov    ecx,DWORD PTR [ebp-0x18]
  442dae:	8d 45 08             	lea    eax,[ebp+0x8]
  442db1:	50                   	push   eax
  442db2:	8d 45 ec             	lea    eax,[ebp-0x14]
  442db5:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  442db9:	50                   	push   eax
  442dba:	8d 41 20             	lea    eax,[ecx+0x20]
  442dbd:	50                   	push   eax
  442dbe:	8d 41 08             	lea    eax,[ecx+0x8]
  442dc1:	50                   	push   eax
  442dc2:	e8 b9 96 ff ff       	call   0x43c480 ; ["call resolved=0x43c480 vdfs_cryptopp::encrypt"]
  442dc7:	83 c4 10             	add    esp,0x10
  442dca:	84 c0                	test   al,al
  442dcc:	74 09                	je     0x442dd7
  442dce:	8b 45 08             	mov    eax,DWORD PTR [ebp+0x8]
  442dd1:	83 78 04 00          	cmp    DWORD PTR [eax+0x4],0x0
  442dd5:	7f 45                	jg     0x442e1c
  442dd7:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  442ddd:	83 ec 08             	sub    esp,0x8
  442de0:	8b c4                	mov    eax,esp
  442de2:	c7 45 d8 50 62 48 00 	mov    DWORD PTR [ebp-0x28],0x486250 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Parse\\vdfs_server_connector.cpp"]
  442de9:	c7 45 dc d0 01 00 00 	mov    DWORD PTR [ebp-0x24],0x1d0
  442df0:	f3 0f 7e 45 d8       	movq   xmm0,QWORD PTR [ebp-0x28]
  442df5:	6a 04                	push   0x4
  442df7:	83 ec 0c             	sub    esp,0xc
  442dfa:	c7 00 5c 12 48 00    	mov    DWORD PTR [eax],0x48125c ; ["Encryption failed"]
  442e00:	c7 40 04 11 00 00 00 	mov    DWORD PTR [eax+0x4],0x11
  442e07:	8b c4                	mov    eax,esp
  442e09:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  442e0d:	c7 40 08 f0 63 48 00 	mov    DWORD PTR [eax+0x8],0x4863f0 ; ["vdfs_server_connector::AssembleDirentReply"]
  442e14:	e8 f7 89 fd ff       	call   0x41b810 ; ["call resolved=0x41b810 "]
  442e19:	8b 45 08             	mov    eax,DWORD PTR [ebp+0x8]
  442e1c:	8b 70 04             	mov    esi,DWORD PTR [eax+0x4]
  442e1f:	8d 4d c0             	lea    ecx,[ebp-0x40]
  442e22:	6a 05                	push   0x5
  442e24:	ff 15 24 f4 47 00    	call   DWORD PTR ds:0x47f424 ; ??6QDataStream@@QAEAAV0@C@Z
  442e2a:	8d 46 01             	lea    eax,[esi+0x1]
  442e2d:	50                   	push   eax
  442e2e:	8d 4d c0             	lea    ecx,[ebp-0x40]
  442e31:	ff 15 20 f4 47 00    	call   DWORD PTR ds:0x47f420 ; ??6QDataStream@@QAEAAV0@H@Z
  442e37:	0f b6 07             	movzx  eax,BYTE PTR [edi]
  442e3a:	8d 4d c0             	lea    ecx,[ebp-0x40]
  442e3d:	50                   	push   eax
  442e3e:	ff 15 24 f4 47 00    	call   DWORD PTR ds:0x47f424 ; ??6QDataStream@@QAEAAV0@C@Z
  442e44:	8b 4d 0c             	mov    ecx,DWORD PTR [ebp+0xc]
  442e47:	8d 45 08             	lea    eax,[ebp+0x8]
  442e4a:	50                   	push   eax
  442e4b:	ff 15 88 f4 47 00    	call   DWORD PTR ds:0x47f488 ; ?append@QByteArray@@QAEAAV1@ABV1@@Z ; ["Ξ\t"]
  442e51:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  442e57:	57                   	push   edi
  442e58:	6a 2f                	push   0x2f
  442e5a:	68 1c 64 48 00       	push   0x48641c ; ["Failed to get directory properties, errcode {}!"]
  442e5f:	6a 04                	push   0x4
  442e61:	83 ec 0c             	sub    esp,0xc
  442e64:	c7 45 d8 50 62 48 00 	mov    DWORD PTR [ebp-0x28],0x486250 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Parse\\vdfs_server_connector.cpp"]
  442e6b:	8b c4                	mov    eax,esp
  442e6d:	c7 45 dc d9 01 00 00 	mov    DWORD PTR [ebp-0x24],0x1d9
  442e74:	f3 0f 7e 45 d8       	movq   xmm0,QWORD PTR [ebp-0x28]
  442e79:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  442e7d:	c7 40 08 f0 63 48 00 	mov    DWORD PTR [eax+0x8],0x4863f0 ; ["vdfs_server_connector::AssembleDirentReply"]
  442e84:	e8 87 60 fc ff       	call   0x408f10 ; ["call resolved=0x408f10 "]
  442e89:	8d 4d 08             	lea    ecx,[ebp+0x8]
  442e8c:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  442e92:	8b 35 2c f4 47 00    	mov    esi,DWORD PTR ds:0x47f42c
  442e98:	8d 4d 90             	lea    ecx,[ebp-0x70]
  442e9b:	ff d6                	call   esi
  442e9d:	8d 4d ec             	lea    ecx,[ebp-0x14]
  442ea0:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  442ea6:	8d 4d c0             	lea    ecx,[ebp-0x40]
  442ea9:	ff d6                	call   esi
  442eab:	32 c0                	xor    al,al
  442ead:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  442eb0:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  442eb7:	59                   	pop    ecx
  442eb8:	5f                   	pop    edi
  442eb9:	5e                   	pop    esi
  442eba:	8b e5                	mov    esp,ebp
  442ebc:	5d                   	pop    ebp
  442ebd:	c2 0c 00             	ret    0xc
  442ec0:	8d 4d f0             	lea    ecx,[ebp-0x10]
  442ec3:	ff 15 9c f4 47 00    	call   DWORD PTR ds:0x47f49c ; ??0QByteArray@@QAE@XZ
  442ec9:	8b 4d 08             	mov    ecx,DWORD PTR [ebp+0x8]
  442ecc:	c7 45 fc 04 00 00 00 	mov    DWORD PTR [ebp-0x4],0x4
  442ed3:	ff 15 60 f3 47 00    	call   DWORD PTR ds:0x47f360 ; ?isEmpty@QListData@@QBE_NXZ ; ["Ƽ\t"]
  442ed9:	84 c0                	test   al,al
  442edb:	0f 85 b0 00 00 00    	jne    0x442f91
  442ee1:	8d 4d 10             	lea    ecx,[ebp+0x10]
  442ee4:	ff 15 9c f4 47 00    	call   DWORD PTR ds:0x47f49c ; ??0QByteArray@@QAE@XZ
  442eea:	8b 4e 48             	mov    ecx,DWORD PTR [esi+0x48]
  442eed:	8d 45 10             	lea    eax,[ebp+0x10]
  442ef0:	57                   	push   edi
  442ef1:	50                   	push   eax
  442ef2:	ff 75 08             	push   DWORD PTR [ebp+0x8]
  442ef5:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  442ef9:	e8 52 a1 ff ff       	call   0x43d050 ; ["call resolved=0x43d050 "]
  442efe:	8d 45 f0             	lea    eax,[ebp-0x10]
  442f01:	50                   	push   eax
  442f02:	8d 45 10             	lea    eax,[ebp+0x10]
  442f05:	50                   	push   eax
  442f06:	8d 46 20             	lea    eax,[esi+0x20]
  442f09:	50                   	push   eax
  442f0a:	8d 46 08             	lea    eax,[esi+0x8]
  442f0d:	50                   	push   eax
  442f0e:	e8 6d 95 ff ff       	call   0x43c480 ; ["call resolved=0x43c480 vdfs_cryptopp::encrypt"]
  442f13:	83 c4 10             	add    esp,0x10
  442f16:	84 c0                	test   al,al
  442f18:	74 18                	je     0x442f32
  442f1a:	8b 45 f0             	mov    eax,DWORD PTR [ebp-0x10]
  442f1d:	83 78 04 00          	cmp    DWORD PTR [eax+0x4],0x0
  442f21:	7e 0f                	jle    0x442f32
  442f23:	8d 4d 10             	lea    ecx,[ebp+0x10]
  442f26:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  442f2a:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  442f30:	eb 6d                	jmp    0x442f9f
  442f32:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  442f38:	83 ec 08             	sub    esp,0x8
  442f3b:	8b c4                	mov    eax,esp
  442f3d:	c7 45 d8 50 62 48 00 	mov    DWORD PTR [ebp-0x28],0x486250 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Parse\\vdfs_server_connector.cpp"]
  442f44:	c7 45 dc f0 01 00 00 	mov    DWORD PTR [ebp-0x24],0x1f0
  442f4b:	f3 0f 7e 45 d8       	movq   xmm0,QWORD PTR [ebp-0x28]
  442f50:	6a 04                	push   0x4
  442f52:	83 ec 0c             	sub    esp,0xc
  442f55:	c7 00 5c 12 48 00    	mov    DWORD PTR [eax],0x48125c ; ["Encryption failed"]
  442f5b:	c7 40 04 11 00 00 00 	mov    DWORD PTR [eax+0x4],0x11
  442f62:	8b c4                	mov    eax,esp
  442f64:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  442f68:	c7 40 08 f0 63 48 00 	mov    DWORD PTR [eax+0x8],0x4863f0 ; ["vdfs_server_connector::AssembleDirentReply"]
  442f6f:	e8 9c 88 fd ff       	call   0x41b810 ; ["call resolved=0x41b810 "]
  442f74:	57                   	push   edi
  442f75:	ff 75 0c             	push   DWORD PTR [ebp+0xc]
  442f78:	8b ce                	mov    ecx,esi
  442f7a:	c6 07 09             	mov    BYTE PTR [edi],0x9
  442f7d:	e8 2e 13 00 00       	call   0x4442b0 ; ["call resolved=0x4442b0 vdfs_server_connector::errReply"]
  442f82:	8d 4d 10             	lea    ecx,[ebp+0x10]
  442f85:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  442f8b:	c6 45 0f 00          	mov    BYTE PTR [ebp+0xf],0x0
  442f8f:	eb 74                	jmp    0x443005
  442f91:	68 4c 64 48 00       	push   0x48644c ; ["aabbccdd12345678"]
  442f96:	8d 4d f0             	lea    ecx,[ebp-0x10]
  442f99:	ff 15 54 f3 47 00    	call   DWORD PTR ds:0x47f354 ; ??4QByteArray@@QAEAAV0@PBD@Z
  442f9f:	51                   	push   ecx
  442fa0:	8b c4                	mov    eax,esp
  442fa2:	8d 4d a8             	lea    ecx,[ebp-0x58]
  442fa5:	ff 75 0c             	push   DWORD PTR [ebp+0xc]
  442fa8:	c7 00 02 00 00 00    	mov    DWORD PTR [eax],0x2
  442fae:	ff 15 34 f4 47 00    	call   DWORD PTR ds:0x47f434 ; ??0QDataStream@@QAE@PAVQByteArray@@V?$QFlags@W4OpenModeFlag@QIODevice@@@@@Z
  442fb4:	8b 4d ac             	mov    ecx,DWORD PTR [ebp-0x54]
  442fb7:	6a 00                	push   0x0
  442fb9:	6a 00                	push   0x0
  442fbb:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  442fbf:	8b 01                	mov    eax,DWORD PTR [ecx]
  442fc1:	ff 50 40             	call   DWORD PTR [eax+0x40]
  442fc4:	8b 45 f0             	mov    eax,DWORD PTR [ebp-0x10]
  442fc7:	8d 4d a8             	lea    ecx,[ebp-0x58]
  442fca:	8b 3d 24 f4 47 00    	mov    edi,DWORD PTR ds:0x47f424
  442fd0:	6a 05                	push   0x5
  442fd2:	8b 70 04             	mov    esi,DWORD PTR [eax+0x4]
  442fd5:	ff d7                	call   edi
  442fd7:	8d 46 01             	lea    eax,[esi+0x1]
  442fda:	50                   	push   eax
  442fdb:	8d 4d a8             	lea    ecx,[ebp-0x58]
  442fde:	ff 15 20 f4 47 00    	call   DWORD PTR ds:0x47f420 ; ??6QDataStream@@QAEAAV0@H@Z
  442fe4:	6a 00                	push   0x0
  442fe6:	8d 4d a8             	lea    ecx,[ebp-0x58]
  442fe9:	ff d7                	call   edi
  442feb:	8b 4d 0c             	mov    ecx,DWORD PTR [ebp+0xc]
  442fee:	8d 45 f0             	lea    eax,[ebp-0x10]
  442ff1:	50                   	push   eax
  442ff2:	ff 15 88 f4 47 00    	call   DWORD PTR ds:0x47f488 ; ?append@QByteArray@@QAEAAV1@ABV1@@Z ; ["Ξ\t"]
  442ff8:	8d 4d a8             	lea    ecx,[ebp-0x58]
  442ffb:	c6 45 0f 01          	mov    BYTE PTR [ebp+0xf],0x1
  442fff:	ff 15 2c f4 47 00    	call   DWORD PTR ds:0x47f42c ; ??1QDataStream@@QAE@XZ
  443005:	8d 4d f0             	lea    ecx,[ebp-0x10]
  443008:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  44300e:	8a 45 0f             	mov    al,BYTE PTR [ebp+0xf]
  443011:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  443014:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  44301b:	59                   	pop    ecx
  44301c:	5f                   	pop    edi
  44301d:	5e                   	pop    esi
  44301e:	8b e5                	mov    esp,ebp
  443020:	5d                   	pop    ebp
  443021:	c2 0c 00             	ret    0xc
