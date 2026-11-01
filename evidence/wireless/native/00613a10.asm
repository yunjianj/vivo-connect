; vivo::Worker::sendTcp; image base 0x400000; static annotation only
  613a10:	55                   	push   ebp
  613a11:	8b ec                	mov    ebp,esp
  613a13:	6a ff                	push   0xffffffff
  613a15:	68 b4 c2 69 00       	push   0x69c2b4
  613a1a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  613a20:	50                   	push   eax
  613a21:	81 ec 70 04 00 00    	sub    esp,0x470
  613a27:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  613a2c:	33 c5                	xor    eax,ebp
  613a2e:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  613a31:	56                   	push   esi
  613a32:	57                   	push   edi
  613a33:	50                   	push   eax
  613a34:	8d 45 f4             	lea    eax,[ebp-0xc]
  613a37:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  613a3d:	8b f1                	mov    esi,ecx
  613a3f:	89 b5 90 fb ff ff    	mov    DWORD PTR [ebp-0x470],esi
  613a45:	8b 45 10             	mov    eax,DWORD PTR [ebp+0x10]
  613a48:	b9 97 aa 7a 00       	mov    ecx,0x7aaa97
  613a4d:	89 85 8c fb ff ff    	mov    DWORD PTR [ebp-0x474],eax
  613a53:	e8 96 50 df ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  613a58:	c7 85 d8 fb ff ff 00 	mov    DWORD PTR [ebp-0x428],0x0
  613a62:	c7 85 ec fb ff ff 0f 	mov    DWORD PTR [ebp-0x414],0xf
  613a6c:	c7 85 e8 fb ff ff 00 	mov    DWORD PTR [ebp-0x418],0x0
  613a76:	c6 85 d8 fb ff ff 00 	mov    BYTE PTR [ebp-0x428],0x0
  613a7d:	8b 45 0c             	mov    eax,DWORD PTR [ebp+0xc]
  613a80:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  613a87:	8b 00                	mov    eax,DWORD PTR [eax]
  613a89:	83 f8 02             	cmp    eax,0x2
  613a8c:	75 47                	jne    0x613ad5
  613a8e:	6a 20                	push   0x20
  613a90:	8d 8d d8 fb ff ff    	lea    ecx,[ebp-0x428]
  613a96:	e8 10 df de ff       	call   0x4019ab ; ["call resolved=0x480060 "]
  613a9b:	0f 10 05 fc 61 6f 00 	movups xmm0,XMMWORD PTR ds:0x6f61fc ; ["com.vivo.share.CONNECT_PC"]
  613aa2:	c7 85 e8 fb ff ff 19 	mov    DWORD PTR [ebp-0x418],0x19
  613aac:	c7 85 ec fb ff ff 1f 	mov    DWORD PTR [ebp-0x414],0x1f
  613ab6:	0f 11 00             	movups XMMWORD PTR [eax],xmm0
  613ab9:	f3 0f 7e 05 0c 62 6f 	movq   xmm0,QWORD PTR ds:0x6f620c ; ["ONNECT_PC"]
  613ac1:	66 0f d6 40 10       	movq   QWORD PTR [eax+0x10],xmm0
  613ac6:	8a 0d 14 62 6f 00    	mov    cl,BYTE PTR ds:0x6f6214
  613acc:	88 48 18             	mov    BYTE PTR [eax+0x18],cl
  613acf:	c6 40 19 00          	mov    BYTE PTR [eax+0x19],0x0
  613ad3:	eb 41                	jmp    0x613b16
  613ad5:	83 f8 01             	cmp    eax,0x1
  613ad8:	75 42                	jne    0x613b1c
  613ada:	6a 20                	push   0x20
  613adc:	8d 8d d8 fb ff ff    	lea    ecx,[ebp-0x428]
  613ae2:	e8 c4 de de ff       	call   0x4019ab ; ["call resolved=0x480060 "]
  613ae7:	0f 10 05 34 68 6c 00 	movups xmm0,XMMWORD PTR ds:0x6c6834 ; ["com.vivo.pcsuite.SERVICE"]
  613aee:	c7 85 e8 fb ff ff 18 	mov    DWORD PTR [ebp-0x418],0x18
  613af8:	c7 85 ec fb ff ff 1f 	mov    DWORD PTR [ebp-0x414],0x1f
  613b02:	0f 11 00             	movups XMMWORD PTR [eax],xmm0
  613b05:	f3 0f 7e 05 44 68 6c 	movq   xmm0,QWORD PTR ds:0x6c6844 ; [".SERVICE"]
  613b0d:	66 0f d6 40 10       	movq   QWORD PTR [eax+0x10],xmm0
  613b12:	c6 40 18 00          	mov    BYTE PTR [eax+0x18],0x0
  613b16:	89 85 d8 fb ff ff    	mov    DWORD PTR [ebp-0x428],eax
  613b1c:	68 00 02 00 00       	push   0x200
  613b21:	8d 85 f0 fb ff ff    	lea    eax,[ebp-0x410]
  613b27:	6a 00                	push   0x0
  613b29:	50                   	push   eax
  613b2a:	e8 67 4c 05 00       	call   0x668796 ; ["call resolved=0x668796 "]
  613b2f:	68 f2 01 00 00       	push   0x1f2
  613b34:	8d 85 fe fd ff ff    	lea    eax,[ebp-0x202]
  613b3a:	6a 00                	push   0x0
  613b3c:	50                   	push   eax
  613b3d:	e8 54 4c 05 00       	call   0x668796 ; ["call resolved=0x668796 "]
  613b42:	83 c4 18             	add    esp,0x18
  613b45:	8d 8d 94 fb ff ff    	lea    ecx,[ebp-0x46c]
  613b4b:	6a 00                	push   0x0
  613b4d:	e8 70 0d df ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  613b52:	c7 85 a4 fb ff ff 00 	mov    DWORD PTR [ebp-0x45c],0x0
  613b5c:	c7 85 a8 fb ff ff 00 	mov    DWORD PTR [ebp-0x458],0x0
  613b66:	c7 85 ac fb ff ff 00 	mov    DWORD PTR [ebp-0x454],0x0
  613b70:	6a 00                	push   0x0
  613b72:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  613b76:	ff 15 6c e5 79 00    	call   DWORD PTR ds:0x79e56c
  613b7c:	50                   	push   eax
  613b7d:	ff 15 c0 e5 79 00    	call   DWORD PTR ds:0x79e5c0
  613b83:	83 c4 08             	add    esp,0x8
  613b86:	ff 15 bc e5 79 00    	call   DWORD PTR ds:0x79e5bc
  613b8c:	99                   	cdq
  613b8d:	b9 27 23 00 00       	mov    ecx,0x2327
  613b92:	f7 f9                	idiv   ecx
  613b94:	8b 45 08             	mov    eax,DWORD PTR [ebp+0x8]
  613b97:	8d 8d a4 fb ff ff    	lea    ecx,[ebp-0x45c]
  613b9d:	89 85 b4 fb ff ff    	mov    DWORD PTR [ebp-0x44c],eax
  613ba3:	81 c2 e8 03 00 00    	add    edx,0x3e8
  613ba9:	8d 85 b4 fb ff ff    	lea    eax,[ebp-0x44c]
  613baf:	89 96 f0 06 00 00    	mov    DWORD PTR [esi+0x6f0],edx
  613bb5:	50                   	push   eax
  613bb6:	6a 00                	push   0x0
  613bb8:	e8 7e df de ff       	call   0x401b3b ; ["call resolved=0x440d60 "]
  613bbd:	83 ec 10             	sub    esp,0x10
  613bc0:	0f 57 c0             	xorps  xmm0,xmm0
  613bc3:	8b c4                	mov    eax,esp
  613bc5:	89 a5 bc fb ff ff    	mov    DWORD PTR [ebp-0x444],esp
  613bcb:	89 85 b8 fb ff ff    	mov    DWORD PTR [ebp-0x448],eax
  613bd1:	6a 0c                	push   0xc
  613bd3:	66 0f d6 40 08       	movq   QWORD PTR [eax+0x8],xmm0
  613bd8:	c6 00 02             	mov    BYTE PTR [eax],0x2
  613bdb:	e8 d6 f5 de ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  613be0:	8d 8d b3 fb ff ff    	lea    ecx,[ebp-0x44d]
  613be6:	89 85 b4 fb ff ff    	mov    DWORD PTR [ebp-0x44c],eax
  613bec:	83 c4 04             	add    esp,0x4
  613bef:	89 8d 84 fb ff ff    	mov    DWORD PTR [ebp-0x47c],ecx
  613bf5:	89 85 88 fb ff ff    	mov    DWORD PTR [ebp-0x478],eax
  613bfb:	8b bd a8 fb ff ff    	mov    edi,DWORD PTR [ebp-0x458]
  613c01:	2b bd a4 fb ff ff    	sub    edi,DWORD PTR [ebp-0x45c]
  613c07:	c1 ff 02             	sar    edi,0x2
  613c0a:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  613c0e:	c7 00 00 00 00 00    	mov    DWORD PTR [eax],0x0
  613c14:	c7 40 04 00 00 00 00 	mov    DWORD PTR [eax+0x4],0x0
  613c1b:	c7 40 08 00 00 00 00 	mov    DWORD PTR [eax+0x8],0x0
  613c22:	85 ff                	test   edi,edi
  613c24:	74 7c                	je     0x613ca2
  613c26:	81 ff ff ff ff 0f    	cmp    edi,0xfffffff
  613c2c:	0f 87 80 04 00 00    	ja     0x6140b2
  613c32:	57                   	push   edi
  613c33:	8b c8                	mov    ecx,eax
  613c35:	e8 5b 39 df ff       	call   0x407595 ; ["call resolved=0x480240 "]
  613c3a:	8b f0                	mov    esi,eax
  613c3c:	c1 e7 04             	shl    edi,0x4
  613c3f:	8b 85 b4 fb ff ff    	mov    eax,DWORD PTR [ebp-0x44c]
  613c45:	03 fe                	add    edi,esi
  613c47:	89 30                	mov    DWORD PTR [eax],esi
  613c49:	89 70 04             	mov    DWORD PTR [eax+0x4],esi
  613c4c:	89 78 08             	mov    DWORD PTR [eax+0x8],edi
  613c4f:	8b bd a4 fb ff ff    	mov    edi,DWORD PTR [ebp-0x45c]
  613c55:	3b bd a8 fb ff ff    	cmp    edi,DWORD PTR [ebp-0x458]
  613c5b:	74 3c                	je     0x613c99
  613c5d:	0f 1f 00             	nop    DWORD PTR [eax]
  613c60:	c6 06 00             	mov    BYTE PTR [esi],0x0
  613c63:	0f 57 c0             	xorps  xmm0,xmm0
  613c66:	66 0f d6 46 08       	movq   QWORD PTR [esi+0x8],xmm0
  613c6b:	8b ce                	mov    ecx,esi
  613c6d:	8b 07                	mov    eax,DWORD PTR [edi]
  613c6f:	99                   	cdq
  613c70:	c6 06 05             	mov    BYTE PTR [esi],0x5
  613c73:	89 46 08             	mov    DWORD PTR [esi+0x8],eax
  613c76:	89 56 0c             	mov    DWORD PTR [esi+0xc],edx
  613c79:	e8 60 63 df ff       	call   0x409fde ; ["call resolved=0x480970 "]
  613c7e:	8b ce                	mov    ecx,esi
  613c80:	e8 59 63 df ff       	call   0x409fde ; ["call resolved=0x480970 "]
  613c85:	83 c7 04             	add    edi,0x4
  613c88:	83 c6 10             	add    esi,0x10
  613c8b:	3b bd a8 fb ff ff    	cmp    edi,DWORD PTR [ebp-0x458]
  613c91:	75 cd                	jne    0x613c60
  613c93:	8b 85 b4 fb ff ff    	mov    eax,DWORD PTR [ebp-0x44c]
  613c99:	89 70 04             	mov    DWORD PTR [eax+0x4],esi
  613c9c:	8b b5 90 fb ff ff    	mov    esi,DWORD PTR [ebp-0x470]
  613ca2:	8b 8d b8 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x448]
  613ca8:	89 41 08             	mov    DWORD PTR [ecx+0x8],eax
  613cab:	68 04 68 6c 00       	push   0x6c6804 ; ["bytes"]
  613cb0:	8d 8d 94 fb ff ff    	lea    ecx,[ebp-0x46c]
  613cb6:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  613cba:	e8 1f fa de ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  613cbf:	8b c8                	mov    ecx,eax
  613cc1:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  613cc5:	e8 bb 07 df ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  613cca:	83 ec 10             	sub    esp,0x10
  613ccd:	8d 86 58 02 00 00    	lea    eax,[esi+0x258]
  613cd3:	8b cc                	mov    ecx,esp
  613cd5:	89 a5 bc fb ff ff    	mov    DWORD PTR [ebp-0x444],esp
  613cdb:	50                   	push   eax
  613cdc:	e8 2f 0e df ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  613ce1:	68 a4 4b 6c 00       	push   0x6c4ba4 ; ["deviceName"]
  613ce6:	8d 8d 94 fb ff ff    	lea    ecx,[ebp-0x46c]
  613cec:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  613cf0:	e8 e9 f9 de ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  613cf5:	8b c8                	mov    ecx,eax
  613cf7:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  613cfb:	e8 85 07 df ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  613d00:	83 ec 10             	sub    esp,0x10
  613d03:	8b cc                	mov    ecx,esp
  613d05:	89 a5 bc fb ff ff    	mov    DWORD PTR [ebp-0x444],esp
  613d0b:	c6 01 05             	mov    BYTE PTR [ecx],0x5
  613d0e:	c7 41 08 00 00 00 00 	mov    DWORD PTR [ecx+0x8],0x0
  613d15:	c7 41 0c 00 00 00 00 	mov    DWORD PTR [ecx+0xc],0x0
  613d1c:	e8 bd 62 df ff       	call   0x409fde ; ["call resolved=0x480970 "]
  613d21:	68 0c 68 6c 00       	push   0x6c680c ; ["channel"]
  613d26:	8d 8d 94 fb ff ff    	lea    ecx,[ebp-0x46c]
  613d2c:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  613d30:	e8 a9 f9 de ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  613d35:	8b c8                	mov    ecx,eax
  613d37:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  613d3b:	e8 45 07 df ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  613d40:	83 ec 10             	sub    esp,0x10
  613d43:	8b f4                	mov    esi,esp
  613d45:	89 a5 bc fb ff ff    	mov    DWORD PTR [ebp-0x444],esp
  613d4b:	8b ce                	mov    ecx,esi
  613d4d:	c6 06 05             	mov    BYTE PTR [esi],0x5
  613d50:	c7 46 08 b1 7f 39 05 	mov    DWORD PTR [esi+0x8],0x5397fb1
  613d57:	c7 46 0c 00 00 00 00 	mov    DWORD PTR [esi+0xc],0x0
  613d5e:	e8 7b 62 df ff       	call   0x409fde ; ["call resolved=0x480970 "]
  613d63:	8b ce                	mov    ecx,esi
  613d65:	e8 74 62 df ff       	call   0x409fde ; ["call resolved=0x480970 "]
  613d6a:	68 cc 4d 6c 00       	push   0x6c4dcc ; ["id"]
  613d6f:	8d 8d 94 fb ff ff    	lea    ecx,[ebp-0x46c]
  613d75:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  613d79:	e8 60 f9 de ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  613d7e:	8b c8                	mov    ecx,eax
  613d80:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  613d84:	e8 fc 06 df ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  613d89:	83 ec 10             	sub    esp,0x10
  613d8c:	8b f4                	mov    esi,esp
  613d8e:	89 a5 bc fb ff ff    	mov    DWORD PTR [ebp-0x444],esp
  613d94:	e8 9b 39 df ff       	call   0x407734 ; ["call resolved=0x492af0 "]
  613d99:	83 c0 18             	add    eax,0x18
  613d9c:	8b ce                	mov    ecx,esi
  613d9e:	50                   	push   eax
  613d9f:	e8 6c 0d df ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  613da4:	68 18 68 6c 00       	push   0x6c6818 ; ["open_Id"]
  613da9:	8d 8d 94 fb ff ff    	lea    ecx,[ebp-0x46c]
  613daf:	c6 45 fc 08          	mov    BYTE PTR [ebp-0x4],0x8
  613db3:	e8 26 f9 de ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  613db8:	8b c8                	mov    ecx,eax
  613dba:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  613dbe:	e8 c2 06 df ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  613dc3:	83 bd ec fb ff ff 10 	cmp    DWORD PTR [ebp-0x414],0x10
  613dca:	8d 85 d8 fb ff ff    	lea    eax,[ebp-0x428]
  613dd0:	0f 43 85 d8 fb ff ff 	cmovae eax,DWORD PTR [ebp-0x428]
  613dd7:	83 ec 10             	sub    esp,0x10
  613dda:	89 85 b8 fb ff ff    	mov    DWORD PTR [ebp-0x448],eax
  613de0:	8b cc                	mov    ecx,esp
  613de2:	89 a5 bc fb ff ff    	mov    DWORD PTR [ebp-0x444],esp
  613de8:	8d 85 b8 fb ff ff    	lea    eax,[ebp-0x448]
  613dee:	50                   	push   eax
  613def:	e8 2c f3 de ff       	call   0x403120 ; ["call resolved=0x4a7c40 "]
  613df4:	68 24 68 6c 00       	push   0x6c6824 ; ["service_id"]
  613df9:	8d 8d 94 fb ff ff    	lea    ecx,[ebp-0x46c]
  613dff:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  613e03:	e8 d6 f8 de ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  613e08:	8b c8                	mov    ecx,eax
  613e0a:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  613e0e:	e8 72 06 df ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  613e13:	8b 85 90 fb ff ff    	mov    eax,DWORD PTR [ebp-0x470]
  613e19:	83 ec 10             	sub    esp,0x10
  613e1c:	05 40 02 00 00       	add    eax,0x240
  613e21:	89 a5 bc fb ff ff    	mov    DWORD PTR [ebp-0x444],esp
  613e27:	8b cc                	mov    ecx,esp
  613e29:	50                   	push   eax
  613e2a:	e8 e1 0c df ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  613e2f:	68 54 68 6c 00       	push   0x6c6854 ; ["target_id"]
  613e34:	8d 8d 94 fb ff ff    	lea    ecx,[ebp-0x46c]
  613e3a:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  613e3e:	e8 9b f8 de ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  613e43:	8b c8                	mov    ecx,eax
  613e45:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  613e49:	e8 37 06 df ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  613e4e:	83 ec 10             	sub    esp,0x10
  613e51:	8b f4                	mov    esi,esp
  613e53:	89 a5 bc fb ff ff    	mov    DWORD PTR [ebp-0x444],esp
  613e59:	e8 d6 38 df ff       	call   0x407734 ; ["call resolved=0x492af0 "]
  613e5e:	50                   	push   eax
  613e5f:	8b ce                	mov    ecx,esi
  613e61:	e8 aa 0c df ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  613e66:	68 60 4d 6c 00       	push   0x6c4d60 ; ["account"]
  613e6b:	8d 8d 94 fb ff ff    	lea    ecx,[ebp-0x46c]
  613e71:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  613e75:	e8 64 f8 de ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  613e7a:	8b c8                	mov    ecx,eax
  613e7c:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  613e80:	e8 00 06 df ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  613e85:	83 ec 10             	sub    esp,0x10
  613e88:	8b f4                	mov    esi,esp
  613e8a:	89 a5 bc fb ff ff    	mov    DWORD PTR [ebp-0x444],esp
  613e90:	8b ce                	mov    ecx,esi
  613e92:	c6 06 05             	mov    BYTE PTR [esi],0x5
  613e95:	c7 46 08 01 00 00 00 	mov    DWORD PTR [esi+0x8],0x1
  613e9c:	c7 46 0c 00 00 00 00 	mov    DWORD PTR [esi+0xc],0x0
  613ea3:	e8 36 61 df ff       	call   0x409fde ; ["call resolved=0x480970 "]
  613ea8:	8b ce                	mov    ecx,esi
  613eaa:	e8 2f 61 df ff       	call   0x409fde ; ["call resolved=0x480970 "]
  613eaf:	68 60 68 6c 00       	push   0x6c6860 ; ["type"]
  613eb4:	8d 8d 94 fb ff ff    	lea    ecx,[ebp-0x46c]
  613eba:	c6 45 fc 0c          	mov    BYTE PTR [ebp-0x4],0xc
  613ebe:	e8 1b f8 de ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  613ec3:	8b c8                	mov    ecx,eax
  613ec5:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  613ec9:	e8 b7 05 df ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  613ece:	6a 00                	push   0x0
  613ed0:	6a 00                	push   0x0
  613ed2:	6a 20                	push   0x20
  613ed4:	6a ff                	push   0xffffffff
  613ed6:	8d 85 c0 fb ff ff    	lea    eax,[ebp-0x440]
  613edc:	50                   	push   eax
  613edd:	8d 8d 94 fb ff ff    	lea    ecx,[ebp-0x46c]
  613ee3:	e8 36 49 df ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  613ee8:	8b c8                	mov    ecx,eax
  613eea:	83 79 14 10          	cmp    DWORD PTR [ecx+0x14],0x10
  613eee:	72 02                	jb     0x613ef2
  613ef0:	8b 09                	mov    ecx,DWORD PTR [ecx]
  613ef2:	8d 95 f0 fb ff ff    	lea    edx,[ebp-0x410]
  613ef8:	2b d1                	sub    edx,ecx
  613efa:	66 0f 1f 44 00 00    	nop    WORD PTR [eax+eax*1+0x0]
  613f00:	8a 01                	mov    al,BYTE PTR [ecx]
  613f02:	8d 49 01             	lea    ecx,[ecx+0x1]
  613f05:	88 44 0a ff          	mov    BYTE PTR [edx+ecx*1-0x1],al
  613f09:	84 c0                	test   al,al
  613f0b:	75 f3                	jne    0x613f00
  613f0d:	8d 8d c0 fb ff ff    	lea    ecx,[ebp-0x440]
  613f13:	e8 eb fa de ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  613f18:	6a 5c                	push   0x5c
  613f1a:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  613f1f:	e8 42 48 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  613f24:	83 c4 08             	add    esp,0x8
  613f27:	85 c0                	test   eax,eax
  613f29:	74 12                	je     0x613f3d
  613f2b:	6a 5c                	push   0x5c
  613f2d:	68 cc 66 6c 00       	push   0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  613f32:	e8 2f 48 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  613f37:	83 c4 08             	add    esp,0x8
  613f3a:	40                   	inc    eax
  613f3b:	eb 05                	jmp    0x613f42
  613f3d:	b8 cc 66 6c 00       	mov    eax,0x6c66cc ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\Worker.h"]
  613f42:	8d 8d f0 fb ff ff    	lea    ecx,[ebp-0x410]
  613f48:	c7 85 b8 fb ff ff 02 	mov    DWORD PTR [ebp-0x448],0x2
  613f52:	51                   	push   ecx
  613f53:	68 38 67 6f 00       	push   0x6f6738 ; ["vivo::Worker::sendTcp"]
  613f58:	68 e0 01 00 00       	push   0x1e0
  613f5d:	50                   	push   eax
  613f5e:	68 68 68 6c 00       	push   0x6c6868 ; ["[ConntctionModule][%s:%d][%s]: send connect data: %s\n"]
  613f63:	8d 85 b8 fb ff ff    	lea    eax,[ebp-0x448]
  613f69:	50                   	push   eax
  613f6a:	8d 85 c0 fb ff ff    	lea    eax,[ebp-0x440]
  613f70:	50                   	push   eax
  613f71:	e8 93 30 df ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  613f76:	83 c4 1c             	add    esp,0x1c
  613f79:	8d 8d c0 fb ff ff    	lea    ecx,[ebp-0x440]
  613f7f:	e8 7f fa de ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  613f84:	8d 8d f0 fb ff ff    	lea    ecx,[ebp-0x410]
  613f8a:	8d 51 01             	lea    edx,[ecx+0x1]
  613f8d:	0f 1f 00             	nop    DWORD PTR [eax]
  613f90:	8a 01                	mov    al,BYTE PTR [ecx]
  613f92:	41                   	inc    ecx
  613f93:	84 c0                	test   al,al
  613f95:	75 f9                	jne    0x613f90
  613f97:	66 a1 b0 68 6c 00    	mov    ax,ds:0x6c68b0 ; ["_1"]
  613f9d:	2b ca                	sub    ecx,edx
  613f9f:	f3 0f 7e 05 a8 68 6c 	movq   xmm0,QWORD PTR ds:0x6c68a8 ; ["PAY_LOAD_1"]
  613fa7:	66 89 85 f8 fd ff ff 	mov    WORD PTR [ebp-0x208],ax
  613fae:	8b c1                	mov    eax,ecx
  613fb0:	c1 f8 18             	sar    eax,0x18
  613fb3:	88 85 fa fd ff ff    	mov    BYTE PTR [ebp-0x206],al
  613fb9:	8b c1                	mov    eax,ecx
  613fbb:	c1 f8 10             	sar    eax,0x10
  613fbe:	88 85 fb fd ff ff    	mov    BYTE PTR [ebp-0x205],al
  613fc4:	8b c1                	mov    eax,ecx
  613fc6:	c1 f8 08             	sar    eax,0x8
  613fc9:	88 85 fc fd ff ff    	mov    BYTE PTR [ebp-0x204],al
  613fcf:	8d 85 f0 fb ff ff    	lea    eax,[ebp-0x410]
  613fd5:	51                   	push   ecx
  613fd6:	50                   	push   eax
  613fd7:	8d 85 fe fd ff ff    	lea    eax,[ebp-0x202]
  613fdd:	89 8d b8 fb ff ff    	mov    DWORD PTR [ebp-0x448],ecx
  613fe3:	50                   	push   eax
  613fe4:	66 0f d6 85 f0 fd ff 	movq   QWORD PTR [ebp-0x210],xmm0
  613fec:	88 8d fd fd ff ff    	mov    BYTE PTR [ebp-0x203],cl
  613ff2:	e8 93 47 05 00       	call   0x66878a ; ["call resolved=0x66878a "]
  613ff7:	8b 85 b8 fb ff ff    	mov    eax,DWORD PTR [ebp-0x448]
  613ffd:	83 c4 0c             	add    esp,0xc
  614000:	83 c0 0e             	add    eax,0xe
  614003:	6a 00                	push   0x0
  614005:	50                   	push   eax
  614006:	8d 85 f0 fd ff ff    	lea    eax,[ebp-0x210]
  61400c:	50                   	push   eax
  61400d:	8b 85 8c fb ff ff    	mov    eax,DWORD PTR [ebp-0x474]
  614013:	ff 30                	push   DWORD PTR [eax]
  614015:	ff 15 d0 d8 79 00    	call   DWORD PTR ds:0x79d8d0
  61401b:	8b 8d a4 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x45c]
  614021:	85 c9                	test   ecx,ecx
  614023:	74 18                	je     0x61403d
  614025:	8b 85 ac fb ff ff    	mov    eax,DWORD PTR [ebp-0x454]
  61402b:	2b c1                	sub    eax,ecx
  61402d:	c1 f8 02             	sar    eax,0x2
  614030:	50                   	push   eax
  614031:	51                   	push   ecx
  614032:	8d 8d a4 fb ff ff    	lea    ecx,[ebp-0x45c]
  614038:	e8 bf f6 de ff       	call   0x4036fc ; ["call resolved=0x487630 "]
  61403d:	8d 8d 94 fb ff ff    	lea    ecx,[ebp-0x46c]
  614043:	e8 96 5f df ff       	call   0x409fde ; ["call resolved=0x480970 "]
  614048:	ff b5 94 fb ff ff    	push   DWORD PTR [ebp-0x46c]
  61404e:	8d 8d 9c fb ff ff    	lea    ecx,[ebp-0x464]
  614054:	e8 f5 58 df ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  614059:	8b 95 ec fb ff ff    	mov    edx,DWORD PTR [ebp-0x414]
  61405f:	83 fa 10             	cmp    edx,0x10
  614062:	72 31                	jb     0x614095
  614064:	8b 8d d8 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x428]
  61406a:	42                   	inc    edx
  61406b:	8b c1                	mov    eax,ecx
  61406d:	81 fa 00 10 00 00    	cmp    edx,0x1000
  614073:	72 16                	jb     0x61408b
  614075:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  614078:	83 c2 23             	add    edx,0x23
  61407b:	2b c1                	sub    eax,ecx
  61407d:	83 c0 fc             	add    eax,0xfffffffc
  614080:	83 f8 1f             	cmp    eax,0x1f
  614083:	76 06                	jbe    0x61408b
  614085:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  61408b:	52                   	push   edx
  61408c:	51                   	push   ecx
  61408d:	e8 08 e0 de ff       	call   0x40209a ; ["call resolved=0x6665be "]
  614092:	83 c4 08             	add    esp,0x8
  614095:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  614098:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  61409f:	59                   	pop    ecx
  6140a0:	5f                   	pop    edi
  6140a1:	5e                   	pop    esi
  6140a2:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  6140a5:	33 cd                	xor    ecx,ebp
  6140a7:	e8 e3 03 df ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  6140ac:	8b e5                	mov    esp,ebp
  6140ae:	5d                   	pop    ebp
  6140af:	c2 0c 00             	ret    0xc
  6140b2:	e8 c1 d9 de ff       	call   0x401a78 ; ["call resolved=0x47fc50 "]
