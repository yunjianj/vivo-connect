; vdfs_server_connector::AssembleAttrReply; image base 0x400000; static annotation only
  4428e0:	55                   	push   ebp
  4428e1:	8b ec                	mov    ebp,esp
  4428e3:	6a ff                	push   0xffffffff
  4428e5:	68 75 7f 47 00       	push   0x477f75
  4428ea:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  4428f0:	50                   	push   eax
  4428f1:	81 ec 9c 00 00 00    	sub    esp,0x9c
  4428f7:	56                   	push   esi
  4428f8:	57                   	push   edi
  4428f9:	a1 14 de 49 00       	mov    eax,ds:0x49de14
  4428fe:	33 c5                	xor    eax,ebp
  442900:	50                   	push   eax
  442901:	8d 45 f4             	lea    eax,[ebp-0xc]
  442904:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  44290a:	8b f9                	mov    edi,ecx
  44290c:	8d 4d e4             	lea    ecx,[ebp-0x1c]
  44290f:	ff 15 9c f4 47 00    	call   DWORD PTR ds:0x47f49c ; ??0QByteArray@@QAE@XZ
  442915:	51                   	push   ecx
  442916:	8b c4                	mov    eax,esp
  442918:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  44291f:	8d 4d c8             	lea    ecx,[ebp-0x38]
  442922:	c7 00 02 00 00 00    	mov    DWORD PTR [eax],0x2
  442928:	8d 45 e4             	lea    eax,[ebp-0x1c]
  44292b:	50                   	push   eax
  44292c:	ff 15 34 f4 47 00    	call   DWORD PTR ds:0x47f434 ; ??0QDataStream@@QAE@PAVQByteArray@@V?$QFlags@W4OpenModeFlag@QIODevice@@@@@Z
  442932:	8b 4d cc             	mov    ecx,DWORD PTR [ebp-0x34]
  442935:	6a 00                	push   0x0
  442937:	6a 00                	push   0x0
  442939:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  44293d:	8b 01                	mov    eax,DWORD PTR [ecx]
  44293f:	ff 50 40             	call   DWORD PTR [eax+0x40]
  442942:	ff 75 08             	push   DWORD PTR [ebp+0x8]
  442945:	8d 4d c8             	lea    ecx,[ebp-0x38]
  442948:	ff 15 20 f4 47 00    	call   DWORD PTR ds:0x47f420 ; ??6QDataStream@@QAEAAV0@H@Z
  44294e:	ff 75 14             	push   DWORD PTR [ebp+0x14]
  442951:	8b 35 20 f3 47 00    	mov    esi,DWORD PTR ds:0x47f320
  442957:	8d 4d c8             	lea    ecx,[ebp-0x38]
  44295a:	ff 75 10             	push   DWORD PTR [ebp+0x10]
  44295d:	ff d6                	call   esi
  44295f:	ff 75 18             	push   DWORD PTR [ebp+0x18]
  442962:	8d 4d c8             	lea    ecx,[ebp-0x38]
  442965:	ff 15 20 f4 47 00    	call   DWORD PTR ds:0x47f420 ; ??6QDataStream@@QAEAAV0@H@Z
  44296b:	ff 75 1c             	push   DWORD PTR [ebp+0x1c]
  44296e:	8d 4d c8             	lea    ecx,[ebp-0x38]
  442971:	ff 15 1c f3 47 00    	call   DWORD PTR ds:0x47f31c ; ??6QDataStream@@QAEAAV0@F@Z
  442977:	ff 75 20             	push   DWORD PTR [ebp+0x20]
  44297a:	8d 4d c8             	lea    ecx,[ebp-0x38]
  44297d:	ff 15 20 f4 47 00    	call   DWORD PTR ds:0x47f420 ; ??6QDataStream@@QAEAAV0@H@Z
  442983:	ff 75 24             	push   DWORD PTR [ebp+0x24]
  442986:	8d 4d c8             	lea    ecx,[ebp-0x38]
  442989:	ff 15 20 f4 47 00    	call   DWORD PTR ds:0x47f420 ; ??6QDataStream@@QAEAAV0@H@Z
  44298f:	ff 75 28             	push   DWORD PTR [ebp+0x28]
  442992:	8d 4d c8             	lea    ecx,[ebp-0x38]
  442995:	ff 15 20 f4 47 00    	call   DWORD PTR ds:0x47f420 ; ??6QDataStream@@QAEAAV0@H@Z
  44299b:	ff 75 34             	push   DWORD PTR [ebp+0x34]
  44299e:	8d 4d c8             	lea    ecx,[ebp-0x38]
  4429a1:	ff 75 30             	push   DWORD PTR [ebp+0x30]
  4429a4:	ff d6                	call   esi
  4429a6:	ff 75 38             	push   DWORD PTR [ebp+0x38]
  4429a9:	8d 4d c8             	lea    ecx,[ebp-0x38]
  4429ac:	ff 15 20 f4 47 00    	call   DWORD PTR ds:0x47f420 ; ??6QDataStream@@QAEAAV0@H@Z
  4429b2:	ff 75 44             	push   DWORD PTR [ebp+0x44]
  4429b5:	8d 4d c8             	lea    ecx,[ebp-0x38]
  4429b8:	ff 75 40             	push   DWORD PTR [ebp+0x40]
  4429bb:	ff d6                	call   esi
  4429bd:	ff 75 4c             	push   DWORD PTR [ebp+0x4c]
  4429c0:	8d 4d c8             	lea    ecx,[ebp-0x38]
  4429c3:	ff 75 48             	push   DWORD PTR [ebp+0x48]
  4429c6:	ff d6                	call   esi
  4429c8:	ff 75 54             	push   DWORD PTR [ebp+0x54]
  4429cb:	8d 4d c8             	lea    ecx,[ebp-0x38]
  4429ce:	ff 75 50             	push   DWORD PTR [ebp+0x50]
  4429d1:	ff d6                	call   esi
  4429d3:	ff 75 5c             	push   DWORD PTR [ebp+0x5c]
  4429d6:	8d 4d c8             	lea    ecx,[ebp-0x38]
  4429d9:	ff 75 58             	push   DWORD PTR [ebp+0x58]
  4429dc:	ff d6                	call   esi
  4429de:	8b 45 64             	mov    eax,DWORD PTR [ebp+0x64]
  4429e1:	80 38 00             	cmp    BYTE PTR [eax],0x0
  4429e4:	0f 84 87 01 00 00    	je     0x442b71
  4429ea:	8b 35 34 f4 47 00    	mov    esi,DWORD PTR ds:0x47f434
  4429f0:	51                   	push   ecx
  4429f1:	8b c4                	mov    eax,esp
  4429f3:	8d 4d a0             	lea    ecx,[ebp-0x60]
  4429f6:	ff 75 60             	push   DWORD PTR [ebp+0x60]
  4429f9:	c7 00 02 00 00 00    	mov    DWORD PTR [eax],0x2
  4429ff:	ff d6                	call   esi
  442a01:	8b 4d a4             	mov    ecx,DWORD PTR [ebp-0x5c]
  442a04:	6a 00                	push   0x0
  442a06:	6a 00                	push   0x0
  442a08:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  442a0c:	8b 01                	mov    eax,DWORD PTR [ecx]
  442a0e:	ff 50 40             	call   DWORD PTR [eax+0x40]
  442a11:	8b 47 48             	mov    eax,DWORD PTR [edi+0x48]
  442a14:	8d 4d e8             	lea    ecx,[ebp-0x18]
  442a17:	8a 40 08             	mov    al,BYTE PTR [eax+0x8]
  442a1a:	88 45 e0             	mov    BYTE PTR [ebp-0x20],al
  442a1d:	ff 15 9c f4 47 00    	call   DWORD PTR ds:0x47f49c ; ??0QByteArray@@QAE@XZ
  442a23:	51                   	push   ecx
  442a24:	8b c4                	mov    eax,esp
  442a26:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  442a2a:	8d 8d 70 ff ff ff    	lea    ecx,[ebp-0x90]
  442a30:	c7 00 02 00 00 00    	mov    DWORD PTR [eax],0x2
  442a36:	8d 45 e8             	lea    eax,[ebp-0x18]
  442a39:	50                   	push   eax
  442a3a:	ff d6                	call   esi
  442a3c:	8b 8d 74 ff ff ff    	mov    ecx,DWORD PTR [ebp-0x8c]
  442a42:	6a 00                	push   0x0
  442a44:	6a 00                	push   0x0
  442a46:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  442a4a:	8b 01                	mov    eax,DWORD PTR [ecx]
  442a4c:	ff 50 40             	call   DWORD PTR [eax+0x40]
  442a4f:	ff 75 e0             	push   DWORD PTR [ebp-0x20]
  442a52:	8d 8d 70 ff ff ff    	lea    ecx,[ebp-0x90]
  442a58:	ff 15 24 f4 47 00    	call   DWORD PTR ds:0x47f424 ; ??6QDataStream@@QAEAAV0@C@Z
  442a5e:	8d 4d 5c             	lea    ecx,[ebp+0x5c]
  442a61:	ff 15 9c f4 47 00    	call   DWORD PTR ds:0x47f49c ; ??0QByteArray@@QAE@XZ
  442a67:	8d 45 5c             	lea    eax,[ebp+0x5c]
  442a6a:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  442a6e:	50                   	push   eax
  442a6f:	8d 45 e8             	lea    eax,[ebp-0x18]
  442a72:	50                   	push   eax
  442a73:	8d 47 20             	lea    eax,[edi+0x20]
  442a76:	50                   	push   eax
  442a77:	8d 47 08             	lea    eax,[edi+0x8]
  442a7a:	50                   	push   eax
  442a7b:	e8 00 9a ff ff       	call   0x43c480 ; ["call resolved=0x43c480 vdfs_cryptopp::encrypt"]
  442a80:	83 c4 10             	add    esp,0x10
  442a83:	84 c0                	test   al,al
  442a85:	74 09                	je     0x442a90
  442a87:	8b 45 5c             	mov    eax,DWORD PTR [ebp+0x5c]
  442a8a:	83 78 04 00          	cmp    DWORD PTR [eax+0x4],0x0
  442a8e:	7f 45                	jg     0x442ad5
  442a90:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  442a96:	83 ec 08             	sub    esp,0x8
  442a99:	8b c4                	mov    eax,esp
  442a9b:	c7 45 b8 50 62 48 00 	mov    DWORD PTR [ebp-0x48],0x486250 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Parse\\vdfs_server_connector.cpp"]
  442aa2:	c7 45 bc 82 01 00 00 	mov    DWORD PTR [ebp-0x44],0x182
  442aa9:	f3 0f 7e 45 b8       	movq   xmm0,QWORD PTR [ebp-0x48]
  442aae:	6a 04                	push   0x4
  442ab0:	83 ec 0c             	sub    esp,0xc
  442ab3:	c7 00 5c 12 48 00    	mov    DWORD PTR [eax],0x48125c ; ["Encryption failed"]
  442ab9:	c7 40 04 11 00 00 00 	mov    DWORD PTR [eax+0x4],0x11
  442ac0:	8b c4                	mov    eax,esp
  442ac2:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  442ac6:	c7 40 08 98 63 48 00 	mov    DWORD PTR [eax+0x8],0x486398 ; ["vdfs_server_connector::AssembleAttrReply"]
  442acd:	e8 3e 8d fd ff       	call   0x41b810 ; ["call resolved=0x41b810 "]
  442ad2:	8b 45 5c             	mov    eax,DWORD PTR [ebp+0x5c]
  442ad5:	8b 70 04             	mov    esi,DWORD PTR [eax+0x4]
  442ad8:	8d 4d a0             	lea    ecx,[ebp-0x60]
  442adb:	8b 3d 24 f4 47 00    	mov    edi,DWORD PTR ds:0x47f424
  442ae1:	6a 05                	push   0x5
  442ae3:	ff d7                	call   edi
  442ae5:	8d 46 01             	lea    eax,[esi+0x1]
  442ae8:	50                   	push   eax
  442ae9:	8d 4d a0             	lea    ecx,[ebp-0x60]
  442aec:	ff 15 20 f4 47 00    	call   DWORD PTR ds:0x47f420 ; ??6QDataStream@@QAEAAV0@H@Z
  442af2:	8b 75 64             	mov    esi,DWORD PTR [ebp+0x64]
  442af5:	8d 4d a0             	lea    ecx,[ebp-0x60]
  442af8:	0f b6 06             	movzx  eax,BYTE PTR [esi]
  442afb:	50                   	push   eax
  442afc:	ff d7                	call   edi
  442afe:	8b 4d 60             	mov    ecx,DWORD PTR [ebp+0x60]
  442b01:	8d 45 5c             	lea    eax,[ebp+0x5c]
  442b04:	50                   	push   eax
  442b05:	ff 15 88 f4 47 00    	call   DWORD PTR ds:0x47f488 ; ?append@QByteArray@@QAEAAV1@ABV1@@Z ; ["Ξ\t"]
  442b0b:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  442b11:	56                   	push   esi
  442b12:	6a 2a                	push   0x2a
  442b14:	68 c4 63 48 00       	push   0x4863c4 ; ["Failed to get file properties, errCode {}!"]
  442b19:	6a 04                	push   0x4
  442b1b:	83 ec 0c             	sub    esp,0xc
  442b1e:	c7 45 b8 50 62 48 00 	mov    DWORD PTR [ebp-0x48],0x486250 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Parse\\vdfs_server_connector.cpp"]
  442b25:	8b c4                	mov    eax,esp
  442b27:	c7 45 bc 8c 01 00 00 	mov    DWORD PTR [ebp-0x44],0x18c
  442b2e:	f3 0f 7e 45 b8       	movq   xmm0,QWORD PTR [ebp-0x48]
  442b33:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  442b37:	c7 40 08 98 63 48 00 	mov    DWORD PTR [eax+0x8],0x486398 ; ["vdfs_server_connector::AssembleAttrReply"]
  442b3e:	e8 cd 63 fc ff       	call   0x408f10 ; ["call resolved=0x408f10 "]
  442b43:	8d 4d 5c             	lea    ecx,[ebp+0x5c]
  442b46:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  442b4c:	8b 35 2c f4 47 00    	mov    esi,DWORD PTR ds:0x47f42c
  442b52:	8d 8d 70 ff ff ff    	lea    ecx,[ebp-0x90]
  442b58:	ff d6                	call   esi
  442b5a:	8d 4d e8             	lea    ecx,[ebp-0x18]
  442b5d:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  442b63:	8d 4d a0             	lea    ecx,[ebp-0x60]
  442b66:	ff d6                	call   esi
  442b68:	c6 45 63 00          	mov    BYTE PTR [ebp+0x63],0x0
  442b6c:	e9 59 01 00 00       	jmp    0x442cca
  442b71:	8b 75 60             	mov    esi,DWORD PTR [ebp+0x60]
  442b74:	8b ce                	mov    ecx,esi
  442b76:	ff 15 90 f4 47 00    	call   DWORD PTR ds:0x47f490 ; ?clear@QByteArray@@QAEXXZ
  442b7c:	51                   	push   ecx
  442b7d:	8b c4                	mov    eax,esp
  442b7f:	8d 4d 88             	lea    ecx,[ebp-0x78]
  442b82:	56                   	push   esi
  442b83:	c7 00 02 00 00 00    	mov    DWORD PTR [eax],0x2
  442b89:	ff 15 34 f4 47 00    	call   DWORD PTR ds:0x47f434 ; ??0QDataStream@@QAE@PAVQByteArray@@V?$QFlags@W4OpenModeFlag@QIODevice@@@@@Z
  442b8f:	8b 4d 8c             	mov    ecx,DWORD PTR [ebp-0x74]
  442b92:	6a 00                	push   0x0
  442b94:	6a 00                	push   0x0
  442b96:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  442b9a:	8b 01                	mov    eax,DWORD PTR [ecx]
  442b9c:	ff 50 40             	call   DWORD PTR [eax+0x40]
  442b9f:	8d 4d ec             	lea    ecx,[ebp-0x14]
  442ba2:	ff 15 9c f4 47 00    	call   DWORD PTR ds:0x47f49c ; ??0QByteArray@@QAE@XZ
  442ba8:	51                   	push   ecx
  442ba9:	8b c4                	mov    eax,esp
  442bab:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  442baf:	8d 8d 58 ff ff ff    	lea    ecx,[ebp-0xa8]
  442bb5:	c7 00 02 00 00 00    	mov    DWORD PTR [eax],0x2
  442bbb:	8d 45 ec             	lea    eax,[ebp-0x14]
  442bbe:	50                   	push   eax
  442bbf:	ff 15 34 f4 47 00    	call   DWORD PTR ds:0x47f434 ; ??0QDataStream@@QAE@PAVQByteArray@@V?$QFlags@W4OpenModeFlag@QIODevice@@@@@Z
  442bc5:	8b 8d 5c ff ff ff    	mov    ecx,DWORD PTR [ebp-0xa4]
  442bcb:	6a 00                	push   0x0
  442bcd:	6a 00                	push   0x0
  442bcf:	c6 45 fc 08          	mov    BYTE PTR [ebp-0x4],0x8
  442bd3:	8b 01                	mov    eax,DWORD PTR [ecx]
  442bd5:	ff 50 40             	call   DWORD PTR [eax+0x40]
  442bd8:	8d 45 e4             	lea    eax,[ebp-0x1c]
  442bdb:	50                   	push   eax
  442bdc:	8d 4d ec             	lea    ecx,[ebp-0x14]
  442bdf:	ff 15 88 f4 47 00    	call   DWORD PTR ds:0x47f488 ; ?append@QByteArray@@QAEAAV1@ABV1@@Z ; ["Ξ\t"]
  442be5:	8d 4d f0             	lea    ecx,[ebp-0x10]
  442be8:	ff 15 9c f4 47 00    	call   DWORD PTR ds:0x47f49c ; ??0QByteArray@@QAE@XZ
  442bee:	8d 45 f0             	lea    eax,[ebp-0x10]
  442bf1:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  442bf5:	50                   	push   eax
  442bf6:	8d 45 ec             	lea    eax,[ebp-0x14]
  442bf9:	50                   	push   eax
  442bfa:	8d 47 20             	lea    eax,[edi+0x20]
  442bfd:	50                   	push   eax
  442bfe:	8d 47 08             	lea    eax,[edi+0x8]
  442c01:	50                   	push   eax
  442c02:	e8 79 98 ff ff       	call   0x43c480 ; ["call resolved=0x43c480 vdfs_cryptopp::encrypt"]
  442c07:	83 c4 10             	add    esp,0x10
  442c0a:	84 c0                	test   al,al
  442c0c:	74 42                	je     0x442c50
  442c0e:	8b 45 f0             	mov    eax,DWORD PTR [ebp-0x10]
  442c11:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  442c14:	89 45 5c             	mov    DWORD PTR [ebp+0x5c],eax
  442c17:	85 c0                	test   eax,eax
  442c19:	7e 35                	jle    0x442c50
  442c1b:	8b 35 24 f4 47 00    	mov    esi,DWORD PTR ds:0x47f424
  442c21:	8d 4d 88             	lea    ecx,[ebp-0x78]
  442c24:	6a 05                	push   0x5
  442c26:	ff d6                	call   esi
  442c28:	8b 45 5c             	mov    eax,DWORD PTR [ebp+0x5c]
  442c2b:	8d 4d 88             	lea    ecx,[ebp-0x78]
  442c2e:	40                   	inc    eax
  442c2f:	50                   	push   eax
  442c30:	ff 15 20 f4 47 00    	call   DWORD PTR ds:0x47f420 ; ??6QDataStream@@QAEAAV0@H@Z
  442c36:	6a 00                	push   0x0
  442c38:	8d 4d 88             	lea    ecx,[ebp-0x78]
  442c3b:	ff d6                	call   esi
  442c3d:	8b 4d 60             	mov    ecx,DWORD PTR [ebp+0x60]
  442c40:	8d 45 f0             	lea    eax,[ebp-0x10]
  442c43:	50                   	push   eax
  442c44:	ff 15 88 f4 47 00    	call   DWORD PTR ds:0x47f488 ; ?append@QByteArray@@QAEAAV1@ABV1@@Z ; ["Ξ\t"]
  442c4a:	c6 45 63 01          	mov    BYTE PTR [ebp+0x63],0x1
  442c4e:	eb 55                	jmp    0x442ca5
  442c50:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  442c56:	83 ec 08             	sub    esp,0x8
  442c59:	8b c4                	mov    eax,esp
  442c5b:	c7 45 54 50 62 48 00 	mov    DWORD PTR [ebp+0x54],0x486250 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Parse\\vdfs_server_connector.cpp"]
  442c62:	c7 45 58 a8 01 00 00 	mov    DWORD PTR [ebp+0x58],0x1a8
  442c69:	f3 0f 7e 45 54       	movq   xmm0,QWORD PTR [ebp+0x54]
  442c6e:	6a 04                	push   0x4
  442c70:	83 ec 0c             	sub    esp,0xc
  442c73:	c7 00 5c 12 48 00    	mov    DWORD PTR [eax],0x48125c ; ["Encryption failed"]
  442c79:	c7 40 04 11 00 00 00 	mov    DWORD PTR [eax+0x4],0x11
  442c80:	8b c4                	mov    eax,esp
  442c82:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  442c86:	c7 40 08 98 63 48 00 	mov    DWORD PTR [eax+0x8],0x486398 ; ["vdfs_server_connector::AssembleAttrReply"]
  442c8d:	e8 7e 8b fd ff       	call   0x41b810 ; ["call resolved=0x41b810 "]
  442c92:	8b 45 64             	mov    eax,DWORD PTR [ebp+0x64]
  442c95:	8b cf                	mov    ecx,edi
  442c97:	50                   	push   eax
  442c98:	56                   	push   esi
  442c99:	c6 00 09             	mov    BYTE PTR [eax],0x9
  442c9c:	e8 0f 16 00 00       	call   0x4442b0 ; ["call resolved=0x4442b0 vdfs_server_connector::errReply"]
  442ca1:	c6 45 63 00          	mov    BYTE PTR [ebp+0x63],0x0
  442ca5:	8d 4d f0             	lea    ecx,[ebp-0x10]
  442ca8:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  442cae:	8b 35 2c f4 47 00    	mov    esi,DWORD PTR ds:0x47f42c
  442cb4:	8d 8d 58 ff ff ff    	lea    ecx,[ebp-0xa8]
  442cba:	ff d6                	call   esi
  442cbc:	8d 4d ec             	lea    ecx,[ebp-0x14]
  442cbf:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  442cc5:	8d 4d 88             	lea    ecx,[ebp-0x78]
  442cc8:	ff d6                	call   esi
  442cca:	8d 4d c8             	lea    ecx,[ebp-0x38]
  442ccd:	ff d6                	call   esi
  442ccf:	8d 4d e4             	lea    ecx,[ebp-0x1c]
  442cd2:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  442cd8:	8a 45 63             	mov    al,BYTE PTR [ebp+0x63]
  442cdb:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  442cde:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  442ce5:	59                   	pop    ecx
  442ce6:	5f                   	pop    edi
  442ce7:	5e                   	pop    esi
  442ce8:	8b e5                	mov    esp,ebp
  442cea:	5d                   	pop    ebp
  442ceb:	c2 60 00             	ret    0x60
