; vivo::Worker::initTcpClient; image base 0x400000; static annotation only
  496af0:	55                   	push   ebp
  496af1:	8b ec                	mov    ebp,esp
  496af3:	6a ff                	push   0xffffffff
  496af5:	68 98 44 67 00       	push   0x674498
  496afa:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  496b00:	50                   	push   eax
  496b01:	81 ec 08 0b 00 00    	sub    esp,0xb08
  496b07:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  496b0c:	33 c5                	xor    eax,ebp
  496b0e:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  496b11:	56                   	push   esi
  496b12:	57                   	push   edi
  496b13:	50                   	push   eax
  496b14:	8d 45 f4             	lea    eax,[ebp-0xc]
  496b17:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  496b1d:	8b f1                	mov    esi,ecx
  496b1f:	89 b5 b8 f5 ff ff    	mov    DWORD PTR [ebp-0xa48],esi
  496b25:	8b 7d 38             	mov    edi,DWORD PTR [ebp+0x38]
  496b28:	89 bd ac f5 ff ff    	mov    DWORD PTR [ebp-0xa54],edi
  496b2e:	b9 33 80 7a 00       	mov    ecx,0x7a8033
  496b33:	c7 45 fc 01 00 00 00 	mov    DWORD PTR [ebp-0x4],0x1
  496b3a:	e8 af 1f f7 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  496b3f:	8d 85 c0 f5 ff ff    	lea    eax,[ebp-0xa40]
  496b45:	50                   	push   eax
  496b46:	68 02 02 00 00       	push   0x202
  496b4b:	ff 15 b0 d8 79 00    	call   DWORD PTR ds:0x79d8b0
  496b51:	83 7d 34 10          	cmp    DWORD PTR [ebp+0x34],0x10
  496b55:	b8 02 00 00 00       	mov    eax,0x2
  496b5a:	66 89 85 b0 f7 ff ff 	mov    WORD PTR [ebp-0x850],ax
  496b61:	0f 57 c0             	xorps  xmm0,xmm0
  496b64:	8d 45 20             	lea    eax,[ebp+0x20]
  496b67:	66 0f 13 85 b8 f7 ff 	movlpd QWORD PTR [ebp-0x848],xmm0
  496b6f:	0f 43 45 20          	cmovae eax,DWORD PTR [ebp+0x20]
  496b73:	50                   	push   eax
  496b74:	ff 15 d8 d8 79 00    	call   DWORD PTR ds:0x79d8d8
  496b7a:	68 cf 27 00 00       	push   0x27cf
  496b7f:	89 85 b4 f7 ff ff    	mov    DWORD PTR [ebp-0x84c],eax
  496b85:	ff 15 e8 d8 79 00    	call   DWORD PTR ds:0x79d8e8
  496b8b:	6a 06                	push   0x6
  496b8d:	6a 01                	push   0x1
  496b8f:	6a 02                	push   0x2
  496b91:	66 89 85 b2 f7 ff ff 	mov    WORD PTR [ebp-0x84e],ax
  496b98:	ff 15 cc d8 79 00    	call   DWORD PTR ds:0x79d8cc
  496b9e:	89 07                	mov    DWORD PTR [edi],eax
  496ba0:	8a 86 85 00 00 00    	mov    al,BYTE PTR [esi+0x85]
  496ba6:	90                   	nop
  496ba7:	84 c0                	test   al,al
  496ba9:	74 30                	je     0x496bdb
  496bab:	ff 37                	push   DWORD PTR [edi]
  496bad:	ff 15 f0 d8 79 00    	call   DWORD PTR ds:0x79d8f0
  496bb3:	ff 15 ac d8 79 00    	call   DWORD PTR ds:0x79d8ac
  496bb9:	8b 86 80 00 00 00    	mov    eax,DWORD PTR [esi+0x80]
  496bbf:	90                   	nop
  496bc0:	85 c0                	test   eax,eax
  496bc2:	0f 84 1f 0a 00 00    	je     0x4975e7
  496bc8:	8b 86 80 00 00 00    	mov    eax,DWORD PTR [esi+0x80]
  496bce:	90                   	nop
  496bcf:	50                   	push   eax
  496bd0:	ff 15 d8 df 79 00    	call   DWORD PTR ds:0x79dfd8
  496bd6:	e9 0c 0a 00 00       	jmp    0x4975e7
  496bdb:	8d 85 c0 f5 ff ff    	lea    eax,[ebp-0xa40]
  496be1:	50                   	push   eax
  496be2:	68 02 02 00 00       	push   0x202
  496be7:	ff 15 b0 d8 79 00    	call   DWORD PTR ds:0x79d8b0
  496bed:	8d 8e 86 00 00 00    	lea    ecx,[esi+0x86]
  496bf3:	32 c0                	xor    al,al
  496bf5:	86 01                	xchg   BYTE PTR [ecx],al
  496bf7:	6a 10                	push   0x10
  496bf9:	8d 85 b0 f7 ff ff    	lea    eax,[ebp-0x850]
  496bff:	50                   	push   eax
  496c00:	ff 37                	push   DWORD PTR [edi]
  496c02:	ff 15 ec d8 79 00    	call   DWORD PTR ds:0x79d8ec
  496c08:	83 f8 ff             	cmp    eax,0xffffffff
  496c0b:	0f 85 d6 00 00 00    	jne    0x496ce7
  496c11:	ff 15 a4 d8 79 00    	call   DWORD PTR ds:0x79d8a4
  496c17:	6a 5c                	push   0x5c
  496c19:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  496c1e:	89 85 ac f5 ff ff    	mov    DWORD PTR [ebp-0xa54],eax
  496c24:	e8 3d 1b 1d 00       	call   0x668766 ; ["call resolved=0x668766 "]
  496c29:	83 c4 08             	add    esp,0x8
  496c2c:	85 c0                	test   eax,eax
  496c2e:	74 12                	je     0x496c42
  496c30:	6a 5c                	push   0x5c
  496c32:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  496c37:	e8 2a 1b 1d 00       	call   0x668766 ; ["call resolved=0x668766 "]
  496c3c:	83 c4 08             	add    esp,0x8
  496c3f:	40                   	inc    eax
  496c40:	eb 05                	jmp    0x496c47
  496c42:	b8 cc 66 6c 00       	mov    eax,0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  496c47:	ff b5 ac f5 ff ff    	push   DWORD PTR [ebp-0xa54]
  496c4d:	c7 85 b8 f5 ff ff 02 	mov    DWORD PTR [ebp-0xa48],0x2
  496c57:	68 94 67 6c 00       	push   0x6c6794 ; ["vivo::Worker::initTcpClient"]
  496c5c:	68 4f 01 00 00       	push   0x14f
  496c61:	50                   	push   eax
  496c62:	68 b8 67 6c 00       	push   0x6c67b8 ; ["[ConntctionModule][%s:%d][%s]: connect phone server error: %ld\n"]
  496c67:	8d 85 b8 f5 ff ff    	lea    eax,[ebp-0xa48]
  496c6d:	50                   	push   eax
  496c6e:	8d 85 d8 f7 ff ff    	lea    eax,[ebp-0x828]
  496c74:	50                   	push   eax
  496c75:	e8 8f 03 f7 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  496c7a:	8b 95 ec f7 ff ff    	mov    edx,DWORD PTR [ebp-0x814]
  496c80:	83 c4 1c             	add    esp,0x1c
  496c83:	83 fa 10             	cmp    edx,0x10
  496c86:	72 2f                	jb     0x496cb7
  496c88:	8b 8d d8 f7 ff ff    	mov    ecx,DWORD PTR [ebp-0x828]
  496c8e:	42                   	inc    edx
  496c8f:	8b c1                	mov    eax,ecx
  496c91:	81 fa 00 10 00 00    	cmp    edx,0x1000
  496c97:	72 14                	jb     0x496cad
  496c99:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  496c9c:	83 c2 23             	add    edx,0x23
  496c9f:	2b c1                	sub    eax,ecx
  496ca1:	83 c0 fc             	add    eax,0xfffffffc
  496ca4:	83 f8 1f             	cmp    eax,0x1f
  496ca7:	0f 87 a2 09 00 00    	ja     0x49764f
  496cad:	52                   	push   edx
  496cae:	51                   	push   ecx
  496caf:	e8 e6 b3 f6 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  496cb4:	83 c4 08             	add    esp,0x8
  496cb7:	ff 37                	push   DWORD PTR [edi]
  496cb9:	ff 15 f0 d8 79 00    	call   DWORD PTR ds:0x79d8f0
  496cbf:	ff 15 ac d8 79 00    	call   DWORD PTR ds:0x79d8ac
  496cc5:	8b 86 80 00 00 00    	mov    eax,DWORD PTR [esi+0x80]
  496ccb:	90                   	nop
  496ccc:	85 c0                	test   eax,eax
  496cce:	0f 84 13 09 00 00    	je     0x4975e7
  496cd4:	8b 86 80 00 00 00    	mov    eax,DWORD PTR [esi+0x80]
  496cda:	90                   	nop
  496cdb:	50                   	push   eax
  496cdc:	ff 15 d8 df 79 00    	call   DWORD PTR ds:0x79dfd8
  496ce2:	e9 00 09 00 00       	jmp    0x4975e7
  496ce7:	b0 01                	mov    al,0x1
  496ce9:	8d 8e 86 00 00 00    	lea    ecx,[esi+0x86]
  496cef:	86 01                	xchg   BYTE PTR [ecx],al
  496cf1:	68 00 02 00 00       	push   0x200
  496cf6:	8d 85 f0 f9 ff ff    	lea    eax,[ebp-0x610]
  496cfc:	6a 00                	push   0x0
  496cfe:	50                   	push   eax
  496cff:	e8 92 1a 1d 00       	call   0x668796 ; ["call resolved=0x668796 "]
  496d04:	6a 00                	push   0x0
  496d06:	ff 15 6c e5 79 00    	call   DWORD PTR ds:0x79e56c
  496d0c:	50                   	push   eax
  496d0d:	ff 15 c0 e5 79 00    	call   DWORD PTR ds:0x79e5c0
  496d13:	83 c4 14             	add    esp,0x14
  496d16:	ff 15 bc e5 79 00    	call   DWORD PTR ds:0x79e5bc
  496d1c:	99                   	cdq
  496d1d:	b9 27 23 00 00       	mov    ecx,0x2327
  496d22:	f7 f9                	idiv   ecx
  496d24:	6a 00                	push   0x0
  496d26:	81 c2 e8 03 00 00    	add    edx,0x3e8
  496d2c:	8d 8d e0 f7 ff ff    	lea    ecx,[ebp-0x820]
  496d32:	89 96 f0 06 00 00    	mov    DWORD PTR [esi+0x6f0],edx
  496d38:	e8 85 db f6 ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  496d3d:	c7 85 9c f5 ff ff 00 	mov    DWORD PTR [ebp-0xa64],0x0
  496d47:	c7 85 a0 f5 ff ff 00 	mov    DWORD PTR [ebp-0xa60],0x0
  496d51:	c7 85 a4 f5 ff ff 00 	mov    DWORD PTR [ebp-0xa5c],0x0
  496d5b:	8d 85 bc f5 ff ff    	lea    eax,[ebp-0xa44]
  496d61:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  496d65:	50                   	push   eax
  496d66:	6a 00                	push   0x0
  496d68:	8d 8d 9c f5 ff ff    	lea    ecx,[ebp-0xa64]
  496d6e:	c7 85 bc f5 ff ff 00 	mov    DWORD PTR [ebp-0xa44],0x0
  496d78:	e8 be ad f6 ff       	call   0x401b3b ; ["call resolved=0x440d60 "]
  496d7d:	83 ec 10             	sub    esp,0x10
  496d80:	8d 85 9c f5 ff ff    	lea    eax,[ebp-0xa64]
  496d86:	8b cc                	mov    ecx,esp
  496d88:	89 a5 bc f5 ff ff    	mov    DWORD PTR [ebp-0xa44],esp
  496d8e:	50                   	push   eax
  496d8f:	e8 e2 a9 f6 ff       	call   0x401776 ; ["call resolved=0x43d050 "]
  496d94:	68 04 68 6c 00       	push   0x6c6804 ; ["bytes"]
  496d99:	8d 8d e0 f7 ff ff    	lea    ecx,[ebp-0x820]
  496d9f:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  496da3:	e8 36 c9 f6 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  496da8:	8b c8                	mov    ecx,eax
  496daa:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  496dae:	e8 d2 d6 f6 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  496db3:	83 ec 10             	sub    esp,0x10
  496db6:	8d 86 58 02 00 00    	lea    eax,[esi+0x258]
  496dbc:	8b cc                	mov    ecx,esp
  496dbe:	89 a5 bc f5 ff ff    	mov    DWORD PTR [ebp-0xa44],esp
  496dc4:	50                   	push   eax
  496dc5:	e8 46 dd f6 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  496dca:	68 a4 4b 6c 00       	push   0x6c4ba4 ; ["deviceName"]
  496dcf:	8d 8d e0 f7 ff ff    	lea    ecx,[ebp-0x820]
  496dd5:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  496dd9:	e8 00 c9 f6 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  496dde:	8b c8                	mov    ecx,eax
  496de0:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  496de4:	e8 9c d6 f6 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  496de9:	83 ec 10             	sub    esp,0x10
  496dec:	8b c4                	mov    eax,esp
  496dee:	89 a5 bc f5 ff ff    	mov    DWORD PTR [ebp-0xa44],esp
  496df4:	c6 00 05             	mov    BYTE PTR [eax],0x5
  496df7:	c7 40 08 00 00 00 00 	mov    DWORD PTR [eax+0x8],0x0
  496dfe:	c7 40 0c 00 00 00 00 	mov    DWORD PTR [eax+0xc],0x0
  496e05:	68 0c 68 6c 00       	push   0x6c680c ; ["channel"]
  496e0a:	8d 8d e0 f7 ff ff    	lea    ecx,[ebp-0x820]
  496e10:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  496e14:	e8 c5 c8 f6 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  496e19:	8b c8                	mov    ecx,eax
  496e1b:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  496e1f:	e8 61 d6 f6 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  496e24:	83 ec 10             	sub    esp,0x10
  496e27:	8b c4                	mov    eax,esp
  496e29:	89 a5 bc f5 ff ff    	mov    DWORD PTR [ebp-0xa44],esp
  496e2f:	c6 00 05             	mov    BYTE PTR [eax],0x5
  496e32:	c7 40 08 b1 7f 39 05 	mov    DWORD PTR [eax+0x8],0x5397fb1
  496e39:	c7 40 0c 00 00 00 00 	mov    DWORD PTR [eax+0xc],0x0
  496e40:	68 cc 4d 6c 00       	push   0x6c4dcc ; ["id"]
  496e45:	8d 8d e0 f7 ff ff    	lea    ecx,[ebp-0x820]
  496e4b:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  496e4f:	e8 8a c8 f6 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  496e54:	8b c8                	mov    ecx,eax
  496e56:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  496e5a:	e8 26 d6 f6 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  496e5f:	83 ec 10             	sub    esp,0x10
  496e62:	8b f4                	mov    esi,esp
  496e64:	89 a5 bc f5 ff ff    	mov    DWORD PTR [ebp-0xa44],esp
  496e6a:	e8 c5 08 f7 ff       	call   0x407734 ; ["call resolved=0x492af0 "]
  496e6f:	83 c0 18             	add    eax,0x18
  496e72:	8b ce                	mov    ecx,esi
  496e74:	50                   	push   eax
  496e75:	e8 96 dc f6 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  496e7a:	68 18 68 6c 00       	push   0x6c6818 ; ["open_Id"]
  496e7f:	8d 8d e0 f7 ff ff    	lea    ecx,[ebp-0x820]
  496e85:	c6 45 fc 08          	mov    BYTE PTR [ebp-0x4],0x8
  496e89:	e8 50 c8 f6 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  496e8e:	8b c8                	mov    ecx,eax
  496e90:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  496e94:	e8 ec d5 f6 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  496e99:	83 ec 10             	sub    esp,0x10
  496e9c:	0f 57 c0             	xorps  xmm0,xmm0
  496e9f:	8b fc                	mov    edi,esp
  496ea1:	89 a5 bc f5 ff ff    	mov    DWORD PTR [ebp-0xa44],esp
  496ea7:	6a 18                	push   0x18
  496ea9:	66 0f d6 47 08       	movq   QWORD PTR [edi+0x8],xmm0
  496eae:	c6 07 03             	mov    BYTE PTR [edi],0x3
  496eb1:	e8 00 c3 f6 ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  496eb6:	8b f0                	mov    esi,eax
  496eb8:	83 c4 04             	add    esp,0x4
  496ebb:	8d 85 ab f5 ff ff    	lea    eax,[ebp-0xa55]
  496ec1:	89 b5 68 f5 ff ff    	mov    DWORD PTR [ebp-0xa98],esi
  496ec7:	89 85 64 f5 ff ff    	mov    DWORD PTR [ebp-0xa9c],eax
  496ecd:	6a 20                	push   0x20
  496ecf:	8b ce                	mov    ecx,esi
  496ed1:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  496ed5:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  496edb:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  496ee2:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  496ee9:	e8 bd aa f6 ff       	call   0x4019ab ; ["call resolved=0x480060 "]
  496eee:	c7 46 10 18 00 00 00 	mov    DWORD PTR [esi+0x10],0x18
  496ef5:	c7 46 14 1f 00 00 00 	mov    DWORD PTR [esi+0x14],0x1f
  496efc:	0f 10 05 34 68 6c 00 	movups xmm0,XMMWORD PTR ds:0x6c6834 ; ["com.vivo.pcsuite.SERVICE"]
  496f03:	0f 11 00             	movups XMMWORD PTR [eax],xmm0
  496f06:	f3 0f 7e 05 44 68 6c 	movq   xmm0,QWORD PTR ds:0x6c6844 ; [".SERVICE"]
  496f0e:	66 0f d6 40 10       	movq   QWORD PTR [eax+0x10],xmm0
  496f13:	c6 40 18 00          	mov    BYTE PTR [eax+0x18],0x0
  496f17:	89 06                	mov    DWORD PTR [esi],eax
  496f19:	89 77 08             	mov    DWORD PTR [edi+0x8],esi
  496f1c:	68 24 68 6c 00       	push   0x6c6824 ; ["service_id"]
  496f21:	8d 8d e0 f7 ff ff    	lea    ecx,[ebp-0x820]
  496f27:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  496f2b:	e8 ae c7 f6 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  496f30:	8b c8                	mov    ecx,eax
  496f32:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  496f36:	e8 4a d5 f6 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  496f3b:	8b bd b8 f5 ff ff    	mov    edi,DWORD PTR [ebp-0xa48]
  496f41:	83 ec 10             	sub    esp,0x10
  496f44:	8b cc                	mov    ecx,esp
  496f46:	89 a5 bc f5 ff ff    	mov    DWORD PTR [ebp-0xa44],esp
  496f4c:	8d 87 40 02 00 00    	lea    eax,[edi+0x240]
  496f52:	50                   	push   eax
  496f53:	e8 b8 db f6 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  496f58:	68 54 68 6c 00       	push   0x6c6854 ; ["target_id"]
  496f5d:	8d 8d e0 f7 ff ff    	lea    ecx,[ebp-0x820]
  496f63:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  496f67:	e8 72 c7 f6 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  496f6c:	8b c8                	mov    ecx,eax
  496f6e:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  496f72:	e8 0e d5 f6 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  496f77:	83 ec 10             	sub    esp,0x10
  496f7a:	8b f4                	mov    esi,esp
  496f7c:	89 a5 bc f5 ff ff    	mov    DWORD PTR [ebp-0xa44],esp
  496f82:	e8 ad 07 f7 ff       	call   0x407734 ; ["call resolved=0x492af0 "]
  496f87:	50                   	push   eax
  496f88:	8b ce                	mov    ecx,esi
  496f8a:	e8 81 db f6 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  496f8f:	68 60 4d 6c 00       	push   0x6c4d60 ; ["account"]
  496f94:	8d 8d e0 f7 ff ff    	lea    ecx,[ebp-0x820]
  496f9a:	c6 45 fc 0c          	mov    BYTE PTR [ebp-0x4],0xc
  496f9e:	e8 3b c7 f6 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  496fa3:	8b c8                	mov    ecx,eax
  496fa5:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  496fa9:	e8 d7 d4 f6 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  496fae:	83 ec 10             	sub    esp,0x10
  496fb1:	8b c4                	mov    eax,esp
  496fb3:	89 a5 bc f5 ff ff    	mov    DWORD PTR [ebp-0xa44],esp
  496fb9:	c6 00 05             	mov    BYTE PTR [eax],0x5
  496fbc:	c7 40 08 01 00 00 00 	mov    DWORD PTR [eax+0x8],0x1
  496fc3:	c7 40 0c 00 00 00 00 	mov    DWORD PTR [eax+0xc],0x0
  496fca:	68 60 68 6c 00       	push   0x6c6860 ; ["type"]
  496fcf:	8d 8d e0 f7 ff ff    	lea    ecx,[ebp-0x820]
  496fd5:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  496fd9:	e8 00 c7 f6 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  496fde:	8b c8                	mov    ecx,eax
  496fe0:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  496fe4:	e8 9c d4 f6 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  496fe9:	0f 57 c0             	xorps  xmm0,xmm0
  496fec:	c6 85 6c f5 ff ff 03 	mov    BYTE PTR [ebp-0xa94],0x3
  496ff3:	6a 18                	push   0x18
  496ff5:	66 0f d6 85 74 f5 ff 	movq   QWORD PTR [ebp-0xa8c],xmm0
  496ffd:	e8 b4 c1 f6 ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  497002:	8b f0                	mov    esi,eax
  497004:	6a 0b                	push   0xb
  497006:	68 bc 66 6c 00       	push   0x6c66bc ; ["connectType"]
  49700b:	56                   	push   esi
  49700c:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  497012:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  497019:	c7 46 10 0b 00 00 00 	mov    DWORD PTR [esi+0x10],0xb
  497020:	e8 6b 17 1d 00       	call   0x668790 ; ["call resolved=0x668790 "]
  497025:	83 c4 10             	add    esp,0x10
  497028:	c6 46 0b 00          	mov    BYTE PTR [esi+0xb],0x0
  49702c:	8d 8d 6c f5 ff ff    	lea    ecx,[ebp-0xa94]
  497032:	89 b5 74 f5 ff ff    	mov    DWORD PTR [ebp-0xa8c],esi
  497038:	e8 a1 2f f7 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  49703d:	8d 8d 6c f5 ff ff    	lea    ecx,[ebp-0xa94]
  497043:	e8 96 2f f7 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  497048:	0f 57 c0             	xorps  xmm0,xmm0
  49704b:	c6 85 80 f5 ff ff 01 	mov    BYTE PTR [ebp-0xa80],0x1
  497052:	8d 85 6c f5 ff ff    	lea    eax,[ebp-0xa94]
  497058:	66 0f d6 85 8c f5 ff 	movq   QWORD PTR [ebp-0xa74],xmm0
  497060:	8d 8d 84 f5 ff ff    	lea    ecx,[ebp-0xa7c]
  497066:	89 85 7c f5 ff ff    	mov    DWORD PTR [ebp-0xa84],eax
  49706c:	c6 85 84 f5 ff ff 05 	mov    BYTE PTR [ebp-0xa7c],0x5
  497073:	c7 85 8c f5 ff ff 01 	mov    DWORD PTR [ebp-0xa74],0x1
  49707d:	c7 85 90 f5 ff ff 00 	mov    DWORD PTR [ebp-0xa70],0x0
  497087:	e8 52 2f f7 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  49708c:	8d 8d 84 f5 ff ff    	lea    ecx,[ebp-0xa7c]
  497092:	e8 47 2f f7 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  497097:	8d 85 84 f5 ff ff    	lea    eax,[ebp-0xa7c]
  49709d:	c6 85 98 f5 ff ff 01 	mov    BYTE PTR [ebp-0xa68],0x1
  4970a4:	89 85 94 f5 ff ff    	mov    DWORD PTR [ebp-0xa6c],eax
  4970aa:	6a 02                	push   0x2
  4970ac:	6a 01                	push   0x1
  4970ae:	8d 85 9c f5 ff ff    	lea    eax,[ebp-0xa64]
  4970b4:	c6 45 fc 0f          	mov    BYTE PTR [ebp-0x4],0xf
  4970b8:	8d 8d 6c f5 ff ff    	lea    ecx,[ebp-0xa94]
  4970be:	50                   	push   eax
  4970bf:	51                   	push   ecx
  4970c0:	8d 8d 24 f5 ff ff    	lea    ecx,[ebp-0xadc]
  4970c6:	e8 e0 1b f7 ff       	call   0x408cab ; ["call resolved=0x46a010 "]
  4970cb:	8d 85 24 f5 ff ff    	lea    eax,[ebp-0xadc]
  4970d1:	c6 85 38 f5 ff ff 01 	mov    BYTE PTR [ebp-0xac8],0x1
  4970d8:	89 85 34 f5 ff ff    	mov    DWORD PTR [ebp-0xacc],eax
  4970de:	68 dc 4d 6c 00       	push   0x6c4ddc ; ["token"]
  4970e3:	8d 8d f4 f4 ff ff    	lea    ecx,[ebp-0xb0c]
  4970e9:	c6 45 fc 10          	mov    BYTE PTR [ebp-0x4],0x10
  4970ed:	e8 f3 13 f7 ff       	call   0x4084e5 ; ["call resolved=0x43d2e0 "]
  4970f2:	8d 45 08             	lea    eax,[ebp+0x8]
  4970f5:	c6 45 fc 11          	mov    BYTE PTR [ebp-0x4],0x11
  4970f9:	50                   	push   eax
  4970fa:	8d 8d 0c f5 ff ff    	lea    ecx,[ebp-0xaf4]
  497100:	e8 7c f5 f6 ff       	call   0x406681 ; ["call resolved=0x43d750 "]
  497105:	8d 85 0c f5 ff ff    	lea    eax,[ebp-0xaf4]
  49710b:	c6 85 20 f5 ff ff 01 	mov    BYTE PTR [ebp-0xae0],0x1
  497112:	89 85 1c f5 ff ff    	mov    DWORD PTR [ebp-0xae4],eax
  497118:	6a 02                	push   0x2
  49711a:	6a 01                	push   0x1
  49711c:	8d 85 24 f5 ff ff    	lea    eax,[ebp-0xadc]
  497122:	c6 45 fc 12          	mov    BYTE PTR [ebp-0x4],0x12
  497126:	8d 8d f4 f4 ff ff    	lea    ecx,[ebp-0xb0c]
  49712c:	50                   	push   eax
  49712d:	51                   	push   ecx
  49712e:	8d 8d 3c f5 ff ff    	lea    ecx,[ebp-0xac4]
  497134:	e8 72 1b f7 ff       	call   0x408cab ; ["call resolved=0x46a010 "]
  497139:	8d 85 3c f5 ff ff    	lea    eax,[ebp-0xac4]
  49713f:	c6 85 50 f5 ff ff 01 	mov    BYTE PTR [ebp-0xab0],0x1
  497146:	89 85 4c f5 ff ff    	mov    DWORD PTR [ebp-0xab4],eax
  49714c:	6a 02                	push   0x2
  49714e:	6a 01                	push   0x1
  497150:	8d 85 54 f5 ff ff    	lea    eax,[ebp-0xaac]
  497156:	c6 45 fc 14          	mov    BYTE PTR [ebp-0x4],0x14
  49715a:	8d 8d 24 f5 ff ff    	lea    ecx,[ebp-0xadc]
  497160:	50                   	push   eax
  497161:	51                   	push   ecx
  497162:	8d 8d 54 f5 ff ff    	lea    ecx,[ebp-0xaac]
  497168:	e8 3e 1b f7 ff       	call   0x408cab ; ["call resolved=0x46a010 "]
  49716d:	68 a0 65 40 00       	push   0x4065a0
  497172:	6a 02                	push   0x2
  497174:	6a 18                	push   0x18
  497176:	8d 85 24 f5 ff ff    	lea    eax,[ebp-0xadc]
  49717c:	c6 45 fc 16          	mov    BYTE PTR [ebp-0x4],0x16
  497180:	50                   	push   eax
  497181:	e8 0c 02 f7 ff       	call   0x407392 ; ["call resolved=0x6663ee "]
  497186:	68 a0 65 40 00       	push   0x4065a0
  49718b:	6a 02                	push   0x2
  49718d:	6a 18                	push   0x18
  49718f:	8d 85 f4 f4 ff ff    	lea    eax,[ebp-0xb0c]
  497195:	c6 45 fc 17          	mov    BYTE PTR [ebp-0x4],0x17
  497199:	50                   	push   eax
  49719a:	e8 f3 01 f7 ff       	call   0x407392 ; ["call resolved=0x6663ee "]
  49719f:	68 a0 65 40 00       	push   0x4065a0
  4971a4:	6a 02                	push   0x2
  4971a6:	6a 18                	push   0x18
  4971a8:	8d 85 6c f5 ff ff    	lea    eax,[ebp-0xa94]
  4971ae:	c6 45 fc 18          	mov    BYTE PTR [ebp-0x4],0x18
  4971b2:	50                   	push   eax
  4971b3:	e8 da 01 f7 ff       	call   0x407392 ; ["call resolved=0x6663ee "]
  4971b8:	6a 00                	push   0x0
  4971ba:	6a 00                	push   0x0
  4971bc:	6a 20                	push   0x20
  4971be:	6a ff                	push   0xffffffff
  4971c0:	8d 85 98 f7 ff ff    	lea    eax,[ebp-0x868]
  4971c6:	50                   	push   eax
  4971c7:	8d 8d 54 f5 ff ff    	lea    ecx,[ebp-0xaac]
  4971cd:	e8 4c 16 f7 ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  4971d2:	83 ec 10             	sub    esp,0x10
  4971d5:	c6 45 fc 19          	mov    BYTE PTR [ebp-0x4],0x19
  4971d9:	8b cc                	mov    ecx,esp
  4971db:	89 a5 bc f5 ff ff    	mov    DWORD PTR [ebp-0xa44],esp
  4971e1:	50                   	push   eax
  4971e2:	e8 61 e2 f6 ff       	call   0x405448 ; ["call resolved=0x43de60 "]
  4971e7:	68 e4 4d 6c 00       	push   0x6c4de4 ; ["extra_info"]
  4971ec:	8d 8d e0 f7 ff ff    	lea    ecx,[ebp-0x820]
  4971f2:	c6 45 fc 1a          	mov    BYTE PTR [ebp-0x4],0x1a
  4971f6:	e8 e3 c4 f6 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  4971fb:	8b c8                	mov    ecx,eax
  4971fd:	c6 45 fc 19          	mov    BYTE PTR [ebp-0x4],0x19
  497201:	e8 7f d2 f6 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  497206:	c6 45 fc 18          	mov    BYTE PTR [ebp-0x4],0x18
  49720a:	8d 8d 98 f7 ff ff    	lea    ecx,[ebp-0x868]
  497210:	e8 ee c7 f6 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  497215:	6a 00                	push   0x0
  497217:	6a 00                	push   0x0
  497219:	6a 20                	push   0x20
  49721b:	6a ff                	push   0xffffffff
  49721d:	8d 85 80 f7 ff ff    	lea    eax,[ebp-0x880]
  497223:	50                   	push   eax
  497224:	8d 8d e0 f7 ff ff    	lea    ecx,[ebp-0x820]
  49722a:	e8 ef 15 f7 ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  49722f:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  497233:	72 02                	jb     0x497237
  497235:	8b 00                	mov    eax,DWORD PTR [eax]
  497237:	8d 95 f0 f9 ff ff    	lea    edx,[ebp-0x610]
  49723d:	2b d0                	sub    edx,eax
  49723f:	90                   	nop
  497240:	8a 08                	mov    cl,BYTE PTR [eax]
  497242:	8d 40 01             	lea    eax,[eax+0x1]
  497245:	88 4c 02 ff          	mov    BYTE PTR [edx+eax*1-0x1],cl
  497249:	84 c9                	test   cl,cl
  49724b:	75 f3                	jne    0x497240
  49724d:	8d 8d 80 f7 ff ff    	lea    ecx,[ebp-0x880]
  497253:	e8 ab c7 f6 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  497258:	6a 5c                	push   0x5c
  49725a:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  49725f:	e8 02 15 1d 00       	call   0x668766 ; ["call resolved=0x668766 "]
  497264:	83 c4 08             	add    esp,0x8
  497267:	85 c0                	test   eax,eax
  497269:	74 12                	je     0x49727d
  49726b:	6a 5c                	push   0x5c
  49726d:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  497272:	e8 ef 14 1d 00       	call   0x668766 ; ["call resolved=0x668766 "]
  497277:	83 c4 08             	add    esp,0x8
  49727a:	40                   	inc    eax
  49727b:	eb 05                	jmp    0x497282
  49727d:	b8 cc 66 6c 00       	mov    eax,0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  497282:	8d 8d f0 f9 ff ff    	lea    ecx,[ebp-0x610]
  497288:	c7 85 bc f5 ff ff 02 	mov    DWORD PTR [ebp-0xa44],0x2
  497292:	51                   	push   ecx
  497293:	68 94 67 6c 00       	push   0x6c6794 ; ["vivo::Worker::initTcpClient"]
  497298:	68 6f 01 00 00       	push   0x16f
  49729d:	50                   	push   eax
  49729e:	68 68 68 6c 00       	push   0x6c6868 ; ["[ConntctionModule][%s:%d][%s]: send connect data: %s\n"]
  4972a3:	8d 85 bc f5 ff ff    	lea    eax,[ebp-0xa44]
  4972a9:	50                   	push   eax
  4972aa:	8d 85 68 f7 ff ff    	lea    eax,[ebp-0x898]
  4972b0:	50                   	push   eax
  4972b1:	e8 53 fd f6 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4972b6:	83 c4 1c             	add    esp,0x1c
  4972b9:	8d 8d 68 f7 ff ff    	lea    ecx,[ebp-0x898]
  4972bf:	e8 3f c7 f6 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  4972c4:	68 f2 01 00 00       	push   0x1f2
  4972c9:	8d 85 fe fd ff ff    	lea    eax,[ebp-0x202]
  4972cf:	6a 00                	push   0x0
  4972d1:	50                   	push   eax
  4972d2:	e8 bf 14 1d 00       	call   0x668796 ; ["call resolved=0x668796 "]
  4972d7:	8d 8d f0 f9 ff ff    	lea    ecx,[ebp-0x610]
  4972dd:	c7 85 b0 f5 ff ff 00 	mov    DWORD PTR [ebp-0xa50],0x0
  4972e7:	83 c4 0c             	add    esp,0xc
  4972ea:	c6 85 b4 f5 ff ff 00 	mov    BYTE PTR [ebp-0xa4c],0x0
  4972f1:	8d 51 01             	lea    edx,[ecx+0x1]
  4972f4:	8a 01                	mov    al,BYTE PTR [ecx]
  4972f6:	41                   	inc    ecx
  4972f7:	84 c0                	test   al,al
  4972f9:	75 f9                	jne    0x4972f4
  4972fb:	8d 85 b0 f5 ff ff    	lea    eax,[ebp-0xa50]
  497301:	2b ca                	sub    ecx,edx
  497303:	50                   	push   eax
  497304:	51                   	push   ecx
  497305:	e8 8e ff f6 ff       	call   0x407298 ; ["call resolved=0x498590 "]
  49730a:	66 a1 b0 68 6c 00    	mov    ax,ds:0x6c68b0 ; ["_1"]
  497310:	8d b5 f0 f9 ff ff    	lea    esi,[ebp-0x610]
  497316:	f3 0f 7e 05 a8 68 6c 	movq   xmm0,QWORD PTR ds:0x6c68a8 ; ["PAY_LOAD_1"]
  49731e:	8d 4e 01             	lea    ecx,[esi+0x1]
  497321:	66 89 85 f8 fd ff ff 	mov    WORD PTR [ebp-0x208],ax
  497328:	83 c4 08             	add    esp,0x8
  49732b:	0f b6 85 b0 f5 ff ff 	movzx  eax,BYTE PTR [ebp-0xa50]
  497332:	88 85 fa fd ff ff    	mov    BYTE PTR [ebp-0x206],al
  497338:	0f b6 85 b1 f5 ff ff 	movzx  eax,BYTE PTR [ebp-0xa4f]
  49733f:	88 85 fb fd ff ff    	mov    BYTE PTR [ebp-0x205],al
  497345:	0f b6 85 b2 f5 ff ff 	movzx  eax,BYTE PTR [ebp-0xa4e]
  49734c:	88 85 fc fd ff ff    	mov    BYTE PTR [ebp-0x204],al
  497352:	0f b6 85 b3 f5 ff ff 	movzx  eax,BYTE PTR [ebp-0xa4d]
  497359:	66 0f d6 85 f0 fd ff 	movq   QWORD PTR [ebp-0x210],xmm0
  497361:	88 85 fd fd ff ff    	mov    BYTE PTR [ebp-0x203],al
  497367:	8a 06                	mov    al,BYTE PTR [esi]
  497369:	46                   	inc    esi
  49736a:	84 c0                	test   al,al
  49736c:	75 f9                	jne    0x497367
  49736e:	2b f1                	sub    esi,ecx
  497370:	8d 85 f0 f9 ff ff    	lea    eax,[ebp-0x610]
  497376:	56                   	push   esi
  497377:	50                   	push   eax
  497378:	8d 85 fe fd ff ff    	lea    eax,[ebp-0x202]
  49737e:	50                   	push   eax
  49737f:	e8 06 14 1d 00       	call   0x66878a ; ["call resolved=0x66878a "]
  497384:	83 c4 0c             	add    esp,0xc
  497387:	8d 46 0e             	lea    eax,[esi+0xe]
  49738a:	8b b5 ac f5 ff ff    	mov    esi,DWORD PTR [ebp-0xa54]
  497390:	6a 00                	push   0x0
  497392:	50                   	push   eax
  497393:	8d 85 f0 fd ff ff    	lea    eax,[ebp-0x210]
  497399:	50                   	push   eax
  49739a:	ff 36                	push   DWORD PTR [esi]
  49739c:	ff 15 d0 d8 79 00    	call   DWORD PTR ds:0x79d8d0
  4973a2:	8a 87 85 00 00 00    	mov    al,BYTE PTR [edi+0x85]
  4973a8:	90                   	nop
  4973a9:	8b 36                	mov    esi,DWORD PTR [esi]
  4973ab:	84 c0                	test   al,al
  4973ad:	74 19                	je     0x4973c8
  4973af:	56                   	push   esi
  4973b0:	ff 15 f0 d8 79 00    	call   DWORD PTR ds:0x79d8f0
  4973b6:	ff 15 ac d8 79 00    	call   DWORD PTR ds:0x79d8ac
  4973bc:	8b cf                	mov    ecx,edi
  4973be:	e8 ff ac f6 ff       	call   0x4020c2 ; ["call resolved=0x4a3010 "]
  4973c3:	e9 e7 01 00 00       	jmp    0x4975af
  4973c8:	68 00 02 00 00       	push   0x200
  4973cd:	8d 85 f0 fb ff ff    	lea    eax,[ebp-0x410]
  4973d3:	6a 00                	push   0x0
  4973d5:	50                   	push   eax
  4973d6:	e8 bb 13 1d 00       	call   0x668796 ; ["call resolved=0x668796 "]
  4973db:	83 c4 0c             	add    esp,0xc
  4973de:	8d 85 f0 fb ff ff    	lea    eax,[ebp-0x410]
  4973e4:	6a 00                	push   0x0
  4973e6:	68 00 02 00 00       	push   0x200
  4973eb:	50                   	push   eax
  4973ec:	56                   	push   esi
  4973ed:	ff 15 d4 d8 79 00    	call   DWORD PTR ds:0x79d8d4
  4973f3:	0f 57 c0             	xorps  xmm0,xmm0
  4973f6:	c7 85 ea f9 ff ff 00 	mov    DWORD PTR [ebp-0x616],0x0
  497400:	66 0f d6 85 e2 f9 ff 	movq   QWORD PTR [ebp-0x61e],xmm0
  497408:	8d b5 fe fb ff ff    	lea    esi,[ebp-0x402]
  49740e:	66 c7 85 ee f9 ff ff 	mov    WORD PTR [ebp-0x612],0x0
  497417:	8d bd f0 f7 ff ff    	lea    edi,[ebp-0x810]
  49741d:	b9 7c 00 00 00       	mov    ecx,0x7c
  497422:	8d 85 f0 f7 ff ff    	lea    eax,[ebp-0x810]
  497428:	f3 a5                	rep movs DWORD PTR es:[edi],DWORD PTR ds:[esi]
  49742a:	50                   	push   eax
  49742b:	8d 8d c0 f7 ff ff    	lea    ecx,[ebp-0x840]
  497431:	66 a5                	movs   WORD PTR es:[edi],WORD PTR ds:[esi]
  497433:	e8 e8 b2 f6 ff       	call   0x402720 ; ["call resolved=0x46a4f0 "]
  497438:	83 bd d4 f7 ff ff 10 	cmp    DWORD PTR [ebp-0x82c],0x10
  49743f:	8d b5 c0 f7 ff ff    	lea    esi,[ebp-0x840]
  497445:	6a 5c                	push   0x5c
  497447:	0f 43 b5 c0 f7 ff ff 	cmovae esi,DWORD PTR [ebp-0x840]
  49744e:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  497453:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  497457:	e8 0a 13 1d 00       	call   0x668766 ; ["call resolved=0x668766 "]
  49745c:	83 c4 08             	add    esp,0x8
  49745f:	85 c0                	test   eax,eax
  497461:	74 12                	je     0x497475
  497463:	6a 5c                	push   0x5c
  497465:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  49746a:	e8 f7 12 1d 00       	call   0x668766 ; ["call resolved=0x668766 "]
  49746f:	83 c4 08             	add    esp,0x8
  497472:	40                   	inc    eax
  497473:	eb 05                	jmp    0x49747a
  497475:	b8 cc 66 6c 00       	mov    eax,0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  49747a:	56                   	push   esi
  49747b:	68 94 67 6c 00       	push   0x6c6794 ; ["vivo::Worker::initTcpClient"]
  497480:	68 8b 01 00 00       	push   0x18b
  497485:	50                   	push   eax
  497486:	68 b8 68 6c 00       	push   0x6c68b8 ; ["[ConntctionModule][%s:%d][%s]: recv form phone server: %s\n"]
  49748b:	8d 85 bc f5 ff ff    	lea    eax,[ebp-0xa44]
  497491:	c7 85 bc f5 ff ff 02 	mov    DWORD PTR [ebp-0xa44],0x2
  49749b:	50                   	push   eax
  49749c:	8d 85 50 f7 ff ff    	lea    eax,[ebp-0x8b0]
  4974a2:	50                   	push   eax
  4974a3:	e8 61 fb f6 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  4974a8:	83 c4 1c             	add    esp,0x1c
  4974ab:	8d 8d 50 f7 ff ff    	lea    ecx,[ebp-0x8b0]
  4974b1:	e8 4d c5 f6 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  4974b6:	6a 00                	push   0x0
  4974b8:	68 00 69 6c 00       	push   0x6c6900 ; ["\"bytes\":[11]"]
  4974bd:	8d 8d c0 f7 ff ff    	lea    ecx,[ebp-0x840]
  4974c3:	e8 2b f3 f6 ff       	call   0x4067f3 ; ["call resolved=0x48bbd0 "]
  4974c8:	83 f8 ff             	cmp    eax,0xffffffff
  4974cb:	74 28                	je     0x4974f5
  4974cd:	8b b5 b8 f5 ff ff    	mov    esi,DWORD PTR [ebp-0xa48]
  4974d3:	c7 86 b0 06 00 00 0b 	mov    DWORD PTR [esi+0x6b0],0xb
  4974dd:	68 00 02 00 00       	push   0x200
  4974e2:	8d 85 f0 fb ff ff    	lea    eax,[ebp-0x410]
  4974e8:	6a 00                	push   0x0
  4974ea:	50                   	push   eax
  4974eb:	e8 a6 12 1d 00       	call   0x668796 ; ["call resolved=0x668796 "]
  4974f0:	e9 91 00 00 00       	jmp    0x497586
  4974f5:	6a 00                	push   0x0
  4974f7:	68 10 69 6c 00       	push   0x6c6910 ; ["\"bytes\":[13]"]
  4974fc:	8d 8d c0 f7 ff ff    	lea    ecx,[ebp-0x840]
  497502:	e8 ec f2 f6 ff       	call   0x4067f3 ; ["call resolved=0x48bbd0 "]
  497507:	83 f8 ff             	cmp    eax,0xffffffff
  49750a:	74 12                	je     0x49751e
  49750c:	8b b5 b8 f5 ff ff    	mov    esi,DWORD PTR [ebp-0xa48]
  497512:	c7 86 b0 06 00 00 0d 	mov    DWORD PTR [esi+0x6b0],0xd
  49751c:	eb bf                	jmp    0x4974dd
  49751e:	6a 00                	push   0x0
  497520:	68 04 68 6c 00       	push   0x6c6804 ; ["bytes"]
  497525:	8d 8d c0 f7 ff ff    	lea    ecx,[ebp-0x840]
  49752b:	e8 c3 f2 f6 ff       	call   0x4067f3 ; ["call resolved=0x48bbd0 "]
  497530:	83 f8 ff             	cmp    eax,0xffffffff
  497533:	74 38                	je     0x49756d
  497535:	6a 00                	push   0x0
  497537:	68 04 68 6c 00       	push   0x6c6804 ; ["bytes"]
  49753c:	8d 8d c0 f7 ff ff    	lea    ecx,[ebp-0x840]
  497542:	e8 ac f2 f6 ff       	call   0x4067f3 ; ["call resolved=0x48bbd0 "]
  497547:	83 c0 08             	add    eax,0x8
  49754a:	8d 8d c0 f7 ff ff    	lea    ecx,[ebp-0x840]
  497550:	50                   	push   eax
  497551:	e8 47 ad f6 ff       	call   0x40229d ; ["call resolved=0x472f10 "]
  497556:	8b b5 b8 f5 ff ff    	mov    esi,DWORD PTR [ebp-0xa48]
  49755c:	0f be 00             	movsx  eax,BYTE PTR [eax]
  49755f:	83 e8 30             	sub    eax,0x30
  497562:	89 86 b0 06 00 00    	mov    DWORD PTR [esi+0x6b0],eax
  497568:	e9 70 ff ff ff       	jmp    0x4974dd
  49756d:	68 00 02 00 00       	push   0x200
  497572:	8d 85 f0 fb ff ff    	lea    eax,[ebp-0x410]
  497578:	6a 00                	push   0x0
  49757a:	50                   	push   eax
  49757b:	e8 16 12 1d 00       	call   0x668796 ; ["call resolved=0x668796 "]
  497580:	8b b5 b8 f5 ff ff    	mov    esi,DWORD PTR [ebp-0xa48]
  497586:	8b 85 ac f5 ff ff    	mov    eax,DWORD PTR [ebp-0xa54]
  49758c:	83 c4 0c             	add    esp,0xc
  49758f:	ff 30                	push   DWORD PTR [eax]
  497591:	ff 15 f0 d8 79 00    	call   DWORD PTR ds:0x79d8f0
  497597:	ff 15 ac d8 79 00    	call   DWORD PTR ds:0x79d8ac
  49759d:	8b ce                	mov    ecx,esi
  49759f:	e8 1e ab f6 ff       	call   0x4020c2 ; ["call resolved=0x4a3010 "]
  4975a4:	8d 8d c0 f7 ff ff    	lea    ecx,[ebp-0x840]
  4975aa:	e8 54 c4 f6 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  4975af:	8d 8d 54 f5 ff ff    	lea    ecx,[ebp-0xaac]
  4975b5:	e8 5d 1e f7 ff       	call   0x409417 ; ["call resolved=0x46f270 "]
  4975ba:	8b 8d 9c f5 ff ff    	mov    ecx,DWORD PTR [ebp-0xa64]
  4975c0:	85 c9                	test   ecx,ecx
  4975c2:	74 18                	je     0x4975dc
  4975c4:	8b 85 a4 f5 ff ff    	mov    eax,DWORD PTR [ebp-0xa5c]
  4975ca:	2b c1                	sub    eax,ecx
  4975cc:	c1 f8 02             	sar    eax,0x2
  4975cf:	50                   	push   eax
  4975d0:	51                   	push   ecx
  4975d1:	8d 8d 9c f5 ff ff    	lea    ecx,[ebp-0xa64]
  4975d7:	e8 20 c1 f6 ff       	call   0x4036fc ; ["call resolved=0x487630 "]
  4975dc:	8d 8d e0 f7 ff ff    	lea    ecx,[ebp-0x820]
  4975e2:	e8 30 1e f7 ff       	call   0x409417 ; ["call resolved=0x46f270 "]
  4975e7:	8b 55 1c             	mov    edx,DWORD PTR [ebp+0x1c]
  4975ea:	83 fa 10             	cmp    edx,0x10
  4975ed:	72 28                	jb     0x497617
  4975ef:	8b 4d 08             	mov    ecx,DWORD PTR [ebp+0x8]
  4975f2:	42                   	inc    edx
  4975f3:	8b c1                	mov    eax,ecx
  4975f5:	81 fa 00 10 00 00    	cmp    edx,0x1000
  4975fb:	72 10                	jb     0x49760d
  4975fd:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  497600:	83 c2 23             	add    edx,0x23
  497603:	2b c1                	sub    eax,ecx
  497605:	83 c0 fc             	add    eax,0xfffffffc
  497608:	83 f8 1f             	cmp    eax,0x1f
  49760b:	77 42                	ja     0x49764f
  49760d:	52                   	push   edx
  49760e:	51                   	push   ecx
  49760f:	e8 86 aa f6 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  497614:	83 c4 08             	add    esp,0x8
  497617:	8b 55 34             	mov    edx,DWORD PTR [ebp+0x34]
  49761a:	c7 45 18 00 00 00 00 	mov    DWORD PTR [ebp+0x18],0x0
  497621:	c7 45 1c 0f 00 00 00 	mov    DWORD PTR [ebp+0x1c],0xf
  497628:	c6 45 08 00          	mov    BYTE PTR [ebp+0x8],0x0
  49762c:	83 fa 10             	cmp    edx,0x10
  49762f:	72 2e                	jb     0x49765f
  497631:	8b 4d 20             	mov    ecx,DWORD PTR [ebp+0x20]
  497634:	42                   	inc    edx
  497635:	8b c1                	mov    eax,ecx
  497637:	81 fa 00 10 00 00    	cmp    edx,0x1000
  49763d:	72 16                	jb     0x497655
  49763f:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  497642:	83 c2 23             	add    edx,0x23
  497645:	2b c1                	sub    eax,ecx
  497647:	83 c0 fc             	add    eax,0xfffffffc
  49764a:	83 f8 1f             	cmp    eax,0x1f
  49764d:	76 06                	jbe    0x497655
  49764f:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  497655:	52                   	push   edx
  497656:	51                   	push   ecx
  497657:	e8 3e aa f6 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  49765c:	83 c4 08             	add    esp,0x8
  49765f:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  497662:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  497669:	59                   	pop    ecx
  49766a:	5f                   	pop    edi
  49766b:	5e                   	pop    esi
  49766c:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  49766f:	33 cd                	xor    ecx,ebp
  497671:	e8 19 ce f6 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  497676:	8b e5                	mov    esp,ebp
  497678:	5d                   	pop    ebp
  497679:	c2 34 00             	ret    0x34
