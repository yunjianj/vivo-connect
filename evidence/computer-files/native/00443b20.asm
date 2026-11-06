; fn_443b20; image base 0x400000; static annotation only
  443b20:	55                   	push   ebp
  443b21:	8b ec                	mov    ebp,esp
  443b23:	6a ff                	push   0xffffffff
  443b25:	68 57 82 47 00       	push   0x478257
  443b2a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  443b30:	50                   	push   eax
  443b31:	81 ec 60 03 00 00    	sub    esp,0x360
  443b37:	a1 14 de 49 00       	mov    eax,ds:0x49de14
  443b3c:	33 c5                	xor    eax,ebp
  443b3e:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  443b41:	56                   	push   esi
  443b42:	57                   	push   edi
  443b43:	50                   	push   eax
  443b44:	8d 45 f4             	lea    eax,[ebp-0xc]
  443b47:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  443b4d:	8b f1                	mov    esi,ecx
  443b4f:	89 b5 ac fc ff ff    	mov    DWORD PTR [ebp-0x354],esi
  443b55:	8b 45 0c             	mov    eax,DWORD PTR [ebp+0xc]
  443b58:	8b 7d 08             	mov    edi,DWORD PTR [ebp+0x8]
  443b5b:	6a 30                	push   0x30
  443b5d:	89 85 b0 fc ff ff    	mov    DWORD PTR [ebp-0x350],eax
  443b63:	8b 45 10             	mov    eax,DWORD PTR [ebp+0x10]
  443b66:	6a 00                	push   0x0
  443b68:	57                   	push   edi
  443b69:	89 bd d0 fc ff ff    	mov    DWORD PTR [ebp-0x330],edi
  443b6f:	89 85 c8 fc ff ff    	mov    DWORD PTR [ebp-0x338],eax
  443b75:	e8 2d fe 02 00       	call   0x4739a7 ; ["call resolved=0x4739a7 "]
  443b7a:	83 c4 0c             	add    esp,0xc
  443b7d:	c6 45 ec 00          	mov    BYTE PTR [ebp-0x14],0x0
  443b81:	8d 46 38             	lea    eax,[esi+0x38]
  443b84:	0f 57 c0             	xorps  xmm0,xmm0
  443b87:	8d 8d bc fc ff ff    	lea    ecx,[ebp-0x344]
  443b8d:	0f 11 45 dc          	movups XMMWORD PTR [ebp-0x24],xmm0
  443b91:	50                   	push   eax
  443b92:	ff 15 4c f3 47 00    	call   DWORD PTR ds:0x47f34c ; ??0QByteArray@@QAE@ABV0@@Z
  443b98:	51                   	push   ecx
  443b99:	8b c4                	mov    eax,esp
  443b9b:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  443ba2:	8d 8d 94 fc ff ff    	lea    ecx,[ebp-0x36c]
  443ba8:	c7 00 01 00 00 00    	mov    DWORD PTR [eax],0x1
  443bae:	8d 85 bc fc ff ff    	lea    eax,[ebp-0x344]
  443bb4:	50                   	push   eax
  443bb5:	ff 15 34 f4 47 00    	call   DWORD PTR ds:0x47f434 ; ??0QDataStream@@QAE@PAVQByteArray@@V?$QFlags@W4OpenModeFlag@QIODevice@@@@@Z
  443bbb:	8b 8d 98 fc ff ff    	mov    ecx,DWORD PTR [ebp-0x368]
  443bc1:	6a 00                	push   0x0
  443bc3:	6a 00                	push   0x0
  443bc5:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  443bc9:	8b 01                	mov    eax,DWORD PTR [ecx]
  443bcb:	ff 50 40             	call   DWORD PTR [eax+0x40]
  443bce:	8b 46 40             	mov    eax,DWORD PTR [esi+0x40]
  443bd1:	8b 4e 44             	mov    ecx,DWORD PTR [esi+0x44]
  443bd4:	8b 35 68 f3 47 00    	mov    esi,DWORD PTR ds:0x47f368
  443bda:	89 07                	mov    DWORD PTR [edi],eax
  443bdc:	8d 47 08             	lea    eax,[edi+0x8]
  443bdf:	89 4f 04             	mov    DWORD PTR [edi+0x4],ecx
  443be2:	8d 8d 94 fc ff ff    	lea    ecx,[ebp-0x36c]
  443be8:	50                   	push   eax
  443be9:	ff d6                	call   esi
  443beb:	8d 4f 0c             	lea    ecx,[edi+0xc]
  443bee:	8b 3d 6c f3 47 00    	mov    edi,DWORD PTR ds:0x47f36c
  443bf4:	51                   	push   ecx
  443bf5:	8b c8                	mov    ecx,eax
  443bf7:	ff d7                	call   edi
  443bf9:	8b 8d 98 fc ff ff    	mov    ecx,DWORD PTR [ebp-0x368]
  443bff:	8d 45 dc             	lea    eax,[ebp-0x24]
  443c02:	6a 00                	push   0x0
  443c04:	6a 10                	push   0x10
  443c06:	50                   	push   eax
  443c07:	ff 15 64 f3 47 00    	call   DWORD PTR ds:0x47f364 ; ?read@QIODevice@@QAE_JPAD_J@Z
  443c0d:	8b 85 d0 fc ff ff    	mov    eax,DWORD PTR [ebp-0x330]
  443c13:	8d 8d 94 fc ff ff    	lea    ecx,[ebp-0x36c]
  443c19:	83 c0 10             	add    eax,0x10
  443c1c:	c6 45 ec 00          	mov    BYTE PTR [ebp-0x14],0x0
  443c20:	50                   	push   eax
  443c21:	ff d6                	call   esi
  443c23:	8b 8d d0 fc ff ff    	mov    ecx,DWORD PTR [ebp-0x330]
  443c29:	8b 35 28 f4 47 00    	mov    esi,DWORD PTR ds:0x47f428
  443c2f:	83 c1 18             	add    ecx,0x18
  443c32:	51                   	push   ecx
  443c33:	8b c8                	mov    ecx,eax
  443c35:	ff d6                	call   esi
  443c37:	8b 8d d0 fc ff ff    	mov    ecx,DWORD PTR [ebp-0x330]
  443c3d:	83 c1 20             	add    ecx,0x20
  443c40:	51                   	push   ecx
  443c41:	8b c8                	mov    ecx,eax
  443c43:	ff d6                	call   esi
  443c45:	8b b5 d0 fc ff ff    	mov    esi,DWORD PTR [ebp-0x330]
  443c4b:	8b c8                	mov    ecx,eax
  443c4d:	83 c6 28             	add    esi,0x28
  443c50:	56                   	push   esi
  443c51:	ff d7                	call   edi
  443c53:	8b 8d 98 fc ff ff    	mov    ecx,DWORD PTR [ebp-0x368]
  443c59:	8d 85 dc fd ff ff    	lea    eax,[ebp-0x224]
  443c5f:	6a 00                	push   0x0
  443c61:	ff 36                	push   DWORD PTR [esi]
  443c63:	50                   	push   eax
  443c64:	ff 15 64 f3 47 00    	call   DWORD PTR ds:0x47f364 ; ?read@QIODevice@@QAE_JPAD_J@Z
  443c6a:	8b 06                	mov    eax,DWORD PTR [esi]
  443c6c:	3d 00 02 00 00       	cmp    eax,0x200
  443c71:	0f 83 ec 02 00 00    	jae    0x443f63
  443c77:	8b 95 d0 fc ff ff    	mov    edx,DWORD PTR [ebp-0x330]
  443c7d:	c6 84 05 dc fd ff ff 	mov    BYTE PTR [ebp+eax*1-0x224],0x0
  443c85:	8b 85 bc fc ff ff    	mov    eax,DWORD PTR [ebp-0x344]
  443c8b:	8b 0a                	mov    ecx,DWORD PTR [edx]
  443c8d:	8b 72 04             	mov    esi,DWORD PTR [edx+0x4]
  443c90:	83 c1 e8             	add    ecx,0xffffffe8
  443c93:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  443c96:	99                   	cdq
  443c97:	83 d6 ff             	adc    esi,0xffffffff
  443c9a:	3b c1                	cmp    eax,ecx
  443c9c:	75 04                	jne    0x443ca2
  443c9e:	3b d6                	cmp    edx,esi
  443ca0:	74 09                	je     0x443cab
  443ca2:	8b 85 b0 fc ff ff    	mov    eax,DWORD PTR [ebp-0x350]
  443ca8:	c6 00 01             	mov    BYTE PTR [eax],0x1
  443cab:	8b bd c8 fc ff ff    	mov    edi,DWORD PTR [ebp-0x338]
  443cb1:	8b cf                	mov    ecx,edi
  443cb3:	ff 15 58 f3 47 00    	call   DWORD PTR ds:0x47f358 ; ?clear@QString@@QAEXXZ
  443cb9:	8d 85 dc fd ff ff    	lea    eax,[ebp-0x224]
  443cbf:	8d 50 01             	lea    edx,[eax+0x1]
  443cc2:	8a 08                	mov    cl,BYTE PTR [eax]
  443cc4:	40                   	inc    eax
  443cc5:	84 c9                	test   cl,cl
  443cc7:	75 f9                	jne    0x443cc2
  443cc9:	8b 35 b8 f4 47 00    	mov    esi,DWORD PTR ds:0x47f4b8
  443ccf:	2b c2                	sub    eax,edx
  443cd1:	50                   	push   eax
  443cd2:	8d 85 dc fd ff ff    	lea    eax,[ebp-0x224]
  443cd8:	50                   	push   eax
  443cd9:	ff d6                	call   esi
  443cdb:	89 85 c4 fc ff ff    	mov    DWORD PTR [ebp-0x33c],eax
  443ce1:	6a 01                	push   0x1
  443ce3:	68 d0 3b 48 00       	push   0x483bd0
  443ce8:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  443cec:	ff d6                	call   esi
  443cee:	89 85 b4 fc ff ff    	mov    DWORD PTR [ebp-0x34c],eax
  443cf4:	6a 01                	push   0x1
  443cf6:	68 10 62 48 00       	push   0x486210
  443cfb:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  443cff:	ff d6                	call   esi
  443d01:	83 c4 18             	add    esp,0x18
  443d04:	89 85 d0 fc ff ff    	mov    DWORD PTR [ebp-0x330],eax
  443d0a:	6a 01                	push   0x1
  443d0c:	8d 85 b4 fc ff ff    	lea    eax,[ebp-0x34c]
  443d12:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  443d16:	50                   	push   eax
  443d17:	8d 85 d0 fc ff ff    	lea    eax,[ebp-0x330]
  443d1d:	50                   	push   eax
  443d1e:	8d 8d c4 fc ff ff    	lea    ecx,[ebp-0x33c]
  443d24:	ff 15 5c f3 47 00    	call   DWORD PTR ds:0x47f35c ; ?replace@QString@@QAEAAV1@ABV1@0W4CaseSensitivity@Qt@@@Z
  443d2a:	50                   	push   eax
  443d2b:	8d 8d c0 fc ff ff    	lea    ecx,[ebp-0x340]
  443d31:	ff 15 c0 f1 47 00    	call   DWORD PTR ds:0x47f1c0 ; ??0QString@@QAE@ABV0@@Z
  443d37:	8d 8d d0 fc ff ff    	lea    ecx,[ebp-0x330]
  443d3d:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  443d43:	8d 8d b4 fc ff ff    	lea    ecx,[ebp-0x34c]
  443d49:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  443d4f:	8d 8d c4 fc ff ff    	lea    ecx,[ebp-0x33c]
  443d55:	c6 45 fc 08          	mov    BYTE PTR [ebp-0x4],0x8
  443d59:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  443d5f:	6a 01                	push   0x1
  443d61:	68 d0 3b 48 00       	push   0x483bd0
  443d66:	ff d6                	call   esi
  443d68:	89 85 c8 fc ff ff    	mov    DWORD PTR [ebp-0x338],eax
  443d6e:	83 c4 04             	add    esp,0x4
  443d71:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  443d75:	8b c4                	mov    eax,esp
  443d77:	8d 8d c0 fc ff ff    	lea    ecx,[ebp-0x340]
  443d7d:	6a 00                	push   0x0
  443d7f:	c7 00 00 00 00 00    	mov    DWORD PTR [eax],0x0
  443d85:	8d 85 c8 fc ff ff    	lea    eax,[ebp-0x338]
  443d8b:	6a 00                	push   0x0
  443d8d:	50                   	push   eax
  443d8e:	8d 85 b8 fc ff ff    	lea    eax,[ebp-0x348]
  443d94:	50                   	push   eax
  443d95:	ff 15 dc f4 47 00    	call   DWORD PTR ds:0x47f4dc ; ?section@QString@@QBE?AV1@ABV1@HHV?$QFlags@W4SectionFlag@QString@@@@@Z
  443d9b:	8d 8d c8 fc ff ff    	lea    ecx,[ebp-0x338]
  443da1:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  443da7:	8d 8d d4 fc ff ff    	lea    ecx,[ebp-0x32c]
  443dad:	e8 5e dd fe ff       	call   0x431b10 ; ["call resolved=0x431b10 "]
  443db2:	c6 45 fc 0c          	mov    BYTE PTR [ebp-0x4],0xc
  443db6:	e8 45 a5 ff ff       	call   0x43e300 ; ["call resolved=0x43e300 "]
  443dbb:	8b f0                	mov    esi,eax
  443dbd:	8d 8d b8 fc ff ff    	lea    ecx,[ebp-0x348]
  443dc3:	8d 85 c4 fd ff ff    	lea    eax,[ebp-0x23c]
  443dc9:	50                   	push   eax
  443dca:	ff 15 80 f4 47 00    	call   DWORD PTR ds:0x47f480 ; ?toStdString@QString@@QBE?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@XZ
  443dd0:	8d 8d d4 fc ff ff    	lea    ecx,[ebp-0x32c]
  443dd6:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  443dda:	51                   	push   ecx
  443ddb:	50                   	push   eax
  443ddc:	8b ce                	mov    ecx,esi
  443dde:	e8 8d af ff ff       	call   0x43ed70 ; ["call resolved=0x43ed70 "]
  443de3:	8d 8d c4 fd ff ff    	lea    ecx,[ebp-0x23c]
  443de9:	88 85 cf fc ff ff    	mov    BYTE PTR [ebp-0x331],al
  443def:	c6 45 fc 0c          	mov    BYTE PTR [ebp-0x4],0xc
  443df3:	e8 98 01 fc ff       	call   0x403f90 ; ["call resolved=0x403f90 "]
  443df8:	80 bd cf fc ff ff 00 	cmp    BYTE PTR [ebp-0x331],0x0
  443dff:	75 3b                	jne    0x443e3c
  443e01:	83 bd 30 fd ff ff 10 	cmp    DWORD PTR [ebp-0x2d0],0x10
  443e08:	8d 85 1c fd ff ff    	lea    eax,[ebp-0x2e4]
  443e0e:	8b cf                	mov    ecx,edi
  443e10:	0f 43 85 1c fd ff ff 	cmovae eax,DWORD PTR [ebp-0x2e4]
  443e17:	50                   	push   eax
  443e18:	ff 15 48 f3 47 00    	call   DWORD PTR ds:0x47f348 ; ??YQString@@QAEAAV0@PBD@Z
  443e1e:	68 d0 3b 48 00       	push   0x483bd0
  443e23:	8b cf                	mov    ecx,edi
  443e25:	ff 15 48 f3 47 00    	call   DWORD PTR ds:0x47f348 ; ??YQString@@QAEAAV0@PBD@Z
  443e2b:	8d 85 c0 fc ff ff    	lea    eax,[ebp-0x340]
  443e31:	8b cf                	mov    ecx,edi
  443e33:	50                   	push   eax
  443e34:	ff 15 90 f2 47 00    	call   DWORD PTR ds:0x47f290 ; ?append@QString@@QAEAAV1@ABV1@@Z
  443e3a:	eb 65                	jmp    0x443ea1
  443e3c:	6a 01                	push   0x1
  443e3e:	68 d0 3b 48 00       	push   0x483bd0
  443e43:	ff 15 b8 f4 47 00    	call   DWORD PTR ds:0x47f4b8 ; ?fromAscii_helper@QString@@CAPAU?$QTypedArrayData@G@@PBDH@Z
  443e49:	89 85 c8 fc ff ff    	mov    DWORD PTR [ebp-0x338],eax
  443e4f:	83 c4 04             	add    esp,0x4
  443e52:	c6 45 fc 0e          	mov    BYTE PTR [ebp-0x4],0xe
  443e56:	8b c4                	mov    eax,esp
  443e58:	8d 8d c0 fc ff ff    	lea    ecx,[ebp-0x340]
  443e5e:	6a ff                	push   0xffffffff
  443e60:	c7 00 00 00 00 00    	mov    DWORD PTR [eax],0x0
  443e66:	8d 85 c8 fc ff ff    	lea    eax,[ebp-0x338]
  443e6c:	6a 01                	push   0x1
  443e6e:	50                   	push   eax
  443e6f:	8d 85 c4 fc ff ff    	lea    eax,[ebp-0x33c]
  443e75:	50                   	push   eax
  443e76:	ff 15 dc f4 47 00    	call   DWORD PTR ds:0x47f4dc ; ?section@QString@@QBE?AV1@ABV1@HHV?$QFlags@W4SectionFlag@QString@@@@@Z
  443e7c:	50                   	push   eax
  443e7d:	8b cf                	mov    ecx,edi
  443e7f:	ff 15 c8 f1 47 00    	call   DWORD PTR ds:0x47f1c8 ; ??4QString@@QAEAAV0@$$QAV0@@Z
  443e85:	8d 8d c4 fc ff ff    	lea    ecx,[ebp-0x33c]
  443e8b:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  443e91:	8d 8d c8 fc ff ff    	lea    ecx,[ebp-0x338]
  443e97:	c6 45 fc 0c          	mov    BYTE PTR [ebp-0x4],0xc
  443e9b:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  443ea1:	8b b5 ac fc ff ff    	mov    esi,DWORD PTR [ebp-0x354]
  443ea7:	57                   	push   edi
  443ea8:	8b 4e 48             	mov    ecx,DWORD PTR [esi+0x48]
  443eab:	e8 b0 98 ff ff       	call   0x43d760 ; ["call resolved=0x43d760 FileOperation::isFile"]
  443eb0:	84 c0                	test   al,al
  443eb2:	74 67                	je     0x443f1b
  443eb4:	8b 4e 48             	mov    ecx,DWORD PTR [esi+0x48]
  443eb7:	57                   	push   edi
  443eb8:	e8 33 9a ff ff       	call   0x43d8f0 ; ["call resolved=0x43d8f0 FileOperation::isReadable"]
  443ebd:	84 c0                	test   al,al
  443ebf:	74 5a                	je     0x443f1b
  443ec1:	8d 8d d4 fc ff ff    	lea    ecx,[ebp-0x32c]
  443ec7:	e8 34 41 fe ff       	call   0x428000 ; ["call resolved=0x428000 "]
  443ecc:	8d 8d b8 fc ff ff    	lea    ecx,[ebp-0x348]
  443ed2:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  443ed8:	8d 8d c0 fc ff ff    	lea    ecx,[ebp-0x340]
  443ede:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  443ee4:	8d 8d 94 fc ff ff    	lea    ecx,[ebp-0x36c]
  443eea:	ff 15 2c f4 47 00    	call   DWORD PTR ds:0x47f42c ; ??1QDataStream@@QAE@XZ
  443ef0:	8d 8d bc fc ff ff    	lea    ecx,[ebp-0x344]
  443ef6:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  443efc:	b0 01                	mov    al,0x1
  443efe:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  443f01:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  443f08:	59                   	pop    ecx
  443f09:	5f                   	pop    edi
  443f0a:	5e                   	pop    esi
  443f0b:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  443f0e:	33 cd                	xor    ecx,ebp
  443f10:	e8 6b e9 02 00       	call   0x472880 ; ["call resolved=0x472880 "]
  443f15:	8b e5                	mov    esp,ebp
  443f17:	5d                   	pop    ebp
  443f18:	c2 0c 00             	ret    0xc
  443f1b:	8b 85 b0 fc ff ff    	mov    eax,DWORD PTR [ebp-0x350]
  443f21:	8d 8d d4 fc ff ff    	lea    ecx,[ebp-0x32c]
  443f27:	c6 00 05             	mov    BYTE PTR [eax],0x5
  443f2a:	e8 d1 40 fe ff       	call   0x428000 ; ["call resolved=0x428000 "]
  443f2f:	8d 8d b8 fc ff ff    	lea    ecx,[ebp-0x348]
  443f35:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  443f3b:	8d 8d c0 fc ff ff    	lea    ecx,[ebp-0x340]
  443f41:	ff 15 bc f4 47 00    	call   DWORD PTR ds:0x47f4bc ; ??1QString@@QAE@XZ ; ["̜\t"]
  443f47:	8d 8d 94 fc ff ff    	lea    ecx,[ebp-0x36c]
  443f4d:	ff 15 2c f4 47 00    	call   DWORD PTR ds:0x47f42c ; ??1QDataStream@@QAE@XZ
  443f53:	8d 8d bc fc ff ff    	lea    ecx,[ebp-0x344]
  443f59:	ff 15 98 f4 47 00    	call   DWORD PTR ds:0x47f498 ; ??1QByteArray@@QAE@XZ
  443f5f:	32 c0                	xor    al,al
  443f61:	eb 9b                	jmp    0x443efe
  443f63:	e8 75 ef 02 00       	call   0x472edd ; ["call resolved=0x472edd "]
