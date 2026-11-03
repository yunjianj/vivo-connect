; ConnectFlow::wlanBuildConnData; image base 0x400000; static annotation only
  5f7880:	55                   	push   ebp
  5f7881:	8b ec                	mov    ebp,esp
  5f7883:	6a ff                	push   0xffffffff
  5f7885:	68 d9 98 69 00       	push   0x6998d9
  5f788a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  5f7890:	50                   	push   eax
  5f7891:	81 ec 60 06 00 00    	sub    esp,0x660
  5f7897:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5f789c:	33 c5                	xor    eax,ebp
  5f789e:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  5f78a1:	56                   	push   esi
  5f78a2:	57                   	push   edi
  5f78a3:	50                   	push   eax
  5f78a4:	8d 45 f4             	lea    eax,[ebp-0xc]
  5f78a7:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  5f78ad:	8b 45 08             	mov    eax,DWORD PTR [ebp+0x8]
  5f78b0:	b9 3f a3 7a 00       	mov    ecx,0x7aa33f
  5f78b5:	89 85 cc fa ff ff    	mov    DWORD PTR [ebp-0x534],eax
  5f78bb:	8b 45 0c             	mov    eax,DWORD PTR [ebp+0xc]
  5f78be:	89 85 d4 fa ff ff    	mov    DWORD PTR [ebp-0x52c],eax
  5f78c4:	8b 45 10             	mov    eax,DWORD PTR [ebp+0x10]
  5f78c7:	89 85 f8 fa ff ff    	mov    DWORD PTR [ebp-0x508],eax
  5f78cd:	8b 45 14             	mov    eax,DWORD PTR [ebp+0x14]
  5f78d0:	89 85 d0 fa ff ff    	mov    DWORD PTR [ebp-0x530],eax
  5f78d6:	e8 13 12 e1 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5f78db:	68 00 04 00 00       	push   0x400
  5f78e0:	8d 85 f0 fb ff ff    	lea    eax,[ebp-0x410]
  5f78e6:	6a 00                	push   0x0
  5f78e8:	50                   	push   eax
  5f78e9:	e8 a8 0e 07 00       	call   0x668796 ; ["call resolved=0x668796 "]
  5f78ee:	83 c4 0c             	add    esp,0xc
  5f78f1:	8d 8d e4 fa ff ff    	lea    ecx,[ebp-0x51c]
  5f78f7:	6a 00                	push   0x0
  5f78f9:	e8 c4 cf e0 ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  5f78fe:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  5f7905:	c7 85 d8 fa ff ff 00 	mov    DWORD PTR [ebp-0x528],0x0
  5f790f:	c7 85 dc fa ff ff 00 	mov    DWORD PTR [ebp-0x524],0x0
  5f7919:	c7 85 e0 fa ff ff 00 	mov    DWORD PTR [ebp-0x520],0x0
  5f7923:	8d 85 fc fa ff ff    	lea    eax,[ebp-0x504]
  5f7929:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  5f792d:	50                   	push   eax
  5f792e:	6a 00                	push   0x0
  5f7930:	8d 8d d8 fa ff ff    	lea    ecx,[ebp-0x528]
  5f7936:	c7 85 fc fa ff ff 00 	mov    DWORD PTR [ebp-0x504],0x0
  5f7940:	e8 f6 a1 e0 ff       	call   0x401b3b ; ["call resolved=0x440d60 "]
  5f7945:	83 ec 10             	sub    esp,0x10
  5f7948:	8d 85 d8 fa ff ff    	lea    eax,[ebp-0x528]
  5f794e:	8b cc                	mov    ecx,esp
  5f7950:	89 a5 fc fa ff ff    	mov    DWORD PTR [ebp-0x504],esp
  5f7956:	50                   	push   eax
  5f7957:	e8 1a 9e e0 ff       	call   0x401776 ; ["call resolved=0x43d050 "]
  5f795c:	68 04 68 6c 00       	push   0x6c6804 ; ["bytes"]
  5f7961:	8d 8d e4 fa ff ff    	lea    ecx,[ebp-0x51c]
  5f7967:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  5f796b:	e8 6e bd e0 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5f7970:	8b c8                	mov    ecx,eax
  5f7972:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  5f7976:	e8 0a cb e0 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5f797b:	c7 85 a8 fb ff ff 00 	mov    DWORD PTR [ebp-0x458],0x0
  5f7985:	c7 85 bc fb ff ff 0f 	mov    DWORD PTR [ebp-0x444],0xf
  5f798f:	c7 85 b8 fb ff ff 00 	mov    DWORD PTR [ebp-0x448],0x0
  5f7999:	c6 85 a8 fb ff ff 00 	mov    BYTE PTR [ebp-0x458],0x0
  5f79a0:	8d 85 a8 fb ff ff    	lea    eax,[ebp-0x458]
  5f79a6:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  5f79aa:	50                   	push   eax
  5f79ab:	8d 85 c0 fb ff ff    	lea    eax,[ebp-0x440]
  5f79b1:	50                   	push   eax
  5f79b2:	e8 cb e6 e0 ff       	call   0x406082 ; ["call resolved=0x562cc0 "]
  5f79b7:	83 ec 08             	sub    esp,0x8
  5f79ba:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  5f79be:	8b cc                	mov    ecx,esp
  5f79c0:	89 a5 fc fa ff ff    	mov    DWORD PTR [ebp-0x504],esp
  5f79c6:	50                   	push   eax
  5f79c7:	e8 7c da e0 ff       	call   0x405448 ; ["call resolved=0x43de60 "]
  5f79cc:	68 a4 4b 6c 00       	push   0x6c4ba4 ; ["deviceName"]
  5f79d1:	8d 8d e4 fa ff ff    	lea    ecx,[ebp-0x51c]
  5f79d7:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  5f79db:	e8 fe bc e0 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5f79e0:	8b c8                	mov    ecx,eax
  5f79e2:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  5f79e6:	e8 9a ca e0 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5f79eb:	8b 95 d4 fb ff ff    	mov    edx,DWORD PTR [ebp-0x42c]
  5f79f1:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  5f79f5:	83 fa 10             	cmp    edx,0x10
  5f79f8:	72 31                	jb     0x5f7a2b
  5f79fa:	8b 8d c0 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x440]
  5f7a00:	42                   	inc    edx
  5f7a01:	8b c1                	mov    eax,ecx
  5f7a03:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f7a09:	72 16                	jb     0x5f7a21
  5f7a0b:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f7a0e:	83 c2 23             	add    edx,0x23
  5f7a11:	2b c1                	sub    eax,ecx
  5f7a13:	83 c0 fc             	add    eax,0xfffffffc
  5f7a16:	83 f8 1f             	cmp    eax,0x1f
  5f7a19:	76 06                	jbe    0x5f7a21
  5f7a1b:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5f7a21:	52                   	push   edx
  5f7a22:	51                   	push   ecx
  5f7a23:	e8 72 a6 e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f7a28:	83 c4 08             	add    esp,0x8
  5f7a2b:	83 ec 10             	sub    esp,0x10
  5f7a2e:	8b c4                	mov    eax,esp
  5f7a30:	89 a5 fc fa ff ff    	mov    DWORD PTR [ebp-0x504],esp
  5f7a36:	c6 00 05             	mov    BYTE PTR [eax],0x5
  5f7a39:	c7 40 08 00 00 00 00 	mov    DWORD PTR [eax+0x8],0x0
  5f7a40:	c7 40 0c 00 00 00 00 	mov    DWORD PTR [eax+0xc],0x0
  5f7a47:	68 0c 68 6c 00       	push   0x6c680c ; ["channel"]
  5f7a4c:	8d 8d e4 fa ff ff    	lea    ecx,[ebp-0x51c]
  5f7a52:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  5f7a56:	e8 83 bc e0 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5f7a5b:	8b c8                	mov    ecx,eax
  5f7a5d:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  5f7a61:	e8 1f ca e0 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5f7a66:	83 ec 10             	sub    esp,0x10
  5f7a69:	8b c4                	mov    eax,esp
  5f7a6b:	89 a5 fc fa ff ff    	mov    DWORD PTR [ebp-0x504],esp
  5f7a71:	c6 00 05             	mov    BYTE PTR [eax],0x5
  5f7a74:	c7 40 08 b1 7f 39 05 	mov    DWORD PTR [eax+0x8],0x5397fb1
  5f7a7b:	c7 40 0c 00 00 00 00 	mov    DWORD PTR [eax+0xc],0x0
  5f7a82:	68 cc 4d 6c 00       	push   0x6c4dcc ; ["id"]
  5f7a87:	8d 8d e4 fa ff ff    	lea    ecx,[ebp-0x51c]
  5f7a8d:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  5f7a91:	e8 48 bc e0 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5f7a96:	8b c8                	mov    ecx,eax
  5f7a98:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  5f7a9c:	e8 e4 c9 e0 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5f7aa1:	83 ec 10             	sub    esp,0x10
  5f7aa4:	8b f4                	mov    esi,esp
  5f7aa6:	89 a5 fc fa ff ff    	mov    DWORD PTR [ebp-0x504],esp
  5f7aac:	e8 83 fc e0 ff       	call   0x407734 ; ["call resolved=0x492af0 "]
  5f7ab1:	83 c0 18             	add    eax,0x18
  5f7ab4:	8b ce                	mov    ecx,esi
  5f7ab6:	50                   	push   eax
  5f7ab7:	e8 54 d0 e0 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  5f7abc:	68 18 68 6c 00       	push   0x6c6818 ; ["open_Id"]
  5f7ac1:	8d 8d e4 fa ff ff    	lea    ecx,[ebp-0x51c]
  5f7ac7:	c6 45 fc 08          	mov    BYTE PTR [ebp-0x4],0x8
  5f7acb:	e8 0e bc e0 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5f7ad0:	8b c8                	mov    ecx,eax
  5f7ad2:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  5f7ad6:	e8 aa c9 e0 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5f7adb:	83 ec 10             	sub    esp,0x10
  5f7ade:	0f 57 c0             	xorps  xmm0,xmm0
  5f7ae1:	8b fc                	mov    edi,esp
  5f7ae3:	89 a5 fc fa ff ff    	mov    DWORD PTR [ebp-0x504],esp
  5f7ae9:	6a 18                	push   0x18
  5f7aeb:	66 0f d6 47 08       	movq   QWORD PTR [edi+0x8],xmm0
  5f7af0:	c6 07 03             	mov    BYTE PTR [edi],0x3
  5f7af3:	e8 be b6 e0 ff       	call   0x4031b6 ; ["call resolved=0x666582 "]
  5f7af8:	8b f0                	mov    esi,eax
  5f7afa:	83 c4 04             	add    esp,0x4
  5f7afd:	8d 85 f7 fa ff ff    	lea    eax,[ebp-0x509]
  5f7b03:	89 b5 58 fa ff ff    	mov    DWORD PTR [ebp-0x5a8],esi
  5f7b09:	89 85 54 fa ff ff    	mov    DWORD PTR [ebp-0x5ac],eax
  5f7b0f:	6a 20                	push   0x20
  5f7b11:	8b ce                	mov    ecx,esi
  5f7b13:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  5f7b17:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  5f7b1d:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  5f7b24:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  5f7b2b:	e8 7b 9e e0 ff       	call   0x4019ab ; ["call resolved=0x480060 "]
  5f7b30:	c7 46 10 18 00 00 00 	mov    DWORD PTR [esi+0x10],0x18
  5f7b37:	c7 46 14 1f 00 00 00 	mov    DWORD PTR [esi+0x14],0x1f
  5f7b3e:	0f 10 05 34 68 6c 00 	movups xmm0,XMMWORD PTR ds:0x6c6834 ; ["com.vivo.pcsuite.SERVICE"]
  5f7b45:	0f 11 00             	movups XMMWORD PTR [eax],xmm0
  5f7b48:	f3 0f 7e 05 44 68 6c 	movq   xmm0,QWORD PTR ds:0x6c6844 ; [".SERVICE"]
  5f7b50:	66 0f d6 40 10       	movq   QWORD PTR [eax+0x10],xmm0
  5f7b55:	c6 40 18 00          	mov    BYTE PTR [eax+0x18],0x0
  5f7b59:	89 06                	mov    DWORD PTR [esi],eax
  5f7b5b:	89 77 08             	mov    DWORD PTR [edi+0x8],esi
  5f7b5e:	68 24 68 6c 00       	push   0x6c6824 ; ["service_id"]
  5f7b63:	8d 8d e4 fa ff ff    	lea    ecx,[ebp-0x51c]
  5f7b69:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  5f7b6d:	e8 6c bb e0 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5f7b72:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  5f7b76:	8b c8                	mov    ecx,eax
  5f7b78:	e8 08 c9 e0 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5f7b7d:	c7 85 d8 fb ff ff 00 	mov    DWORD PTR [ebp-0x428],0x0
  5f7b87:	c7 85 ec fb ff ff 0f 	mov    DWORD PTR [ebp-0x414],0xf
  5f7b91:	c7 85 e8 fb ff ff 00 	mov    DWORD PTR [ebp-0x418],0x0
  5f7b9b:	c6 85 d8 fb ff ff 00 	mov    BYTE PTR [ebp-0x428],0x0
  5f7ba2:	8d 85 d8 fb ff ff    	lea    eax,[ebp-0x428]
  5f7ba8:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  5f7bac:	50                   	push   eax
  5f7bad:	e8 1e f6 e0 ff       	call   0x4071d0 ; ["call resolved=0x4b3650 vivo::Utils::getDeviceId"]
  5f7bb2:	83 ec 0c             	sub    esp,0xc
  5f7bb5:	8d 85 d8 fb ff ff    	lea    eax,[ebp-0x428]
  5f7bbb:	8b cc                	mov    ecx,esp
  5f7bbd:	89 a5 fc fa ff ff    	mov    DWORD PTR [ebp-0x504],esp
  5f7bc3:	50                   	push   eax
  5f7bc4:	e8 47 cf e0 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  5f7bc9:	68 54 68 6c 00       	push   0x6c6854 ; ["target_id"]
  5f7bce:	8d 8d e4 fa ff ff    	lea    ecx,[ebp-0x51c]
  5f7bd4:	c6 45 fc 0c          	mov    BYTE PTR [ebp-0x4],0xc
  5f7bd8:	e8 01 bb e0 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5f7bdd:	8b c8                	mov    ecx,eax
  5f7bdf:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  5f7be3:	e8 9d c8 e0 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5f7be8:	83 ec 10             	sub    esp,0x10
  5f7beb:	8b f4                	mov    esi,esp
  5f7bed:	89 a5 fc fa ff ff    	mov    DWORD PTR [ebp-0x504],esp
  5f7bf3:	e8 3c fb e0 ff       	call   0x407734 ; ["call resolved=0x492af0 "]
  5f7bf8:	50                   	push   eax
  5f7bf9:	8b ce                	mov    ecx,esi
  5f7bfb:	e8 10 cf e0 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  5f7c00:	68 60 4d 6c 00       	push   0x6c4d60 ; ["account"]
  5f7c05:	8d 8d e4 fa ff ff    	lea    ecx,[ebp-0x51c]
  5f7c0b:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  5f7c0f:	e8 ca ba e0 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5f7c14:	8b c8                	mov    ecx,eax
  5f7c16:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  5f7c1a:	e8 66 c8 e0 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5f7c1f:	83 ec 10             	sub    esp,0x10
  5f7c22:	8b cc                	mov    ecx,esp
  5f7c24:	89 a5 fc fa ff ff    	mov    DWORD PTR [ebp-0x504],esp
  5f7c2a:	c6 01 05             	mov    BYTE PTR [ecx],0x5
  5f7c2d:	c7 41 08 01 00 00 00 	mov    DWORD PTR [ecx+0x8],0x1
  5f7c34:	c7 41 0c 00 00 00 00 	mov    DWORD PTR [ecx+0xc],0x0
  5f7c3b:	e8 9e 23 e1 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5f7c40:	68 60 68 6c 00       	push   0x6c6860 ; ["type"]
  5f7c45:	8d 8d e4 fa ff ff    	lea    ecx,[ebp-0x51c]
  5f7c4b:	c6 45 fc 0e          	mov    BYTE PTR [ebp-0x4],0xe
  5f7c4f:	e8 8a ba e0 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5f7c54:	8b c8                	mov    ecx,eax
  5f7c56:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  5f7c5a:	e8 26 c8 e0 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5f7c5f:	8b b5 d4 fa ff ff    	mov    esi,DWORD PTR [ebp-0x52c]
  5f7c65:	8d 8d c0 fb ff ff    	lea    ecx,[ebp-0x440]
  5f7c6b:	56                   	push   esi
  5f7c6c:	e8 1a e0 e0 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  5f7c71:	83 7e 14 10          	cmp    DWORD PTR [esi+0x14],0x10
  5f7c75:	8b 46 10             	mov    eax,DWORD PTR [esi+0x10]
  5f7c78:	c6 45 fc 0f          	mov    BYTE PTR [ebp-0x4],0xf
  5f7c7c:	72 02                	jb     0x5f7c80
  5f7c7e:	8b 36                	mov    esi,DWORD PTR [esi]
  5f7c80:	83 f8 01             	cmp    eax,0x1
  5f7c83:	75 2c                	jne    0x5f7cb1
  5f7c85:	50                   	push   eax
  5f7c86:	68 58 26 6f 00       	push   0x6f2658
  5f7c8b:	56                   	push   esi
  5f7c8c:	e8 2c cc e0 ff       	call   0x4048bd ; ["call resolved=0x482fc0 "]
  5f7c91:	83 c4 0c             	add    esp,0xc
  5f7c94:	85 c0                	test   eax,eax
  5f7c96:	75 19                	jne    0x5f7cb1
  5f7c98:	6a 01                	push   0x1
  5f7c9a:	68 80 12 6c 00       	push   0x6c1280
  5f7c9f:	8d 8d c0 fb ff ff    	lea    ecx,[ebp-0x440]
  5f7ca5:	e8 6d c7 e0 ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  5f7caa:	be 03 00 00 00       	mov    esi,0x3
  5f7caf:	eb 05                	jmp    0x5f7cb6
  5f7cb1:	be 02 00 00 00       	mov    esi,0x2
  5f7cb6:	68 b4 34 6f 00       	push   0x6f34b4 ; ["isAutoConnect"]
  5f7cbb:	8d 8d 94 f9 ff ff    	lea    ecx,[ebp-0x66c]
  5f7cc1:	e8 a8 a7 e0 ff       	call   0x40246e ; ["call resolved=0x5e8d90 "]
  5f7cc6:	8d 85 c0 fb ff ff    	lea    eax,[ebp-0x440]
  5f7ccc:	c6 45 fc 10          	mov    BYTE PTR [ebp-0x4],0x10
  5f7cd0:	50                   	push   eax
  5f7cd1:	8d 8d ac f9 ff ff    	lea    ecx,[ebp-0x654]
  5f7cd7:	e8 34 ce e0 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  5f7cdc:	8d 85 ac f9 ff ff    	lea    eax,[ebp-0x654]
  5f7ce2:	c6 85 c0 f9 ff ff 01 	mov    BYTE PTR [ebp-0x640],0x1
  5f7ce9:	89 85 bc f9 ff ff    	mov    DWORD PTR [ebp-0x644],eax
  5f7cef:	6a 02                	push   0x2
  5f7cf1:	6a 01                	push   0x1
  5f7cf3:	8d 85 c4 f9 ff ff    	lea    eax,[ebp-0x63c]
  5f7cf9:	c6 45 fc 11          	mov    BYTE PTR [ebp-0x4],0x11
  5f7cfd:	8d 8d 94 f9 ff ff    	lea    ecx,[ebp-0x66c]
  5f7d03:	50                   	push   eax
  5f7d04:	51                   	push   ecx
  5f7d05:	8d 8d 00 fb ff ff    	lea    ecx,[ebp-0x500]
  5f7d0b:	e8 9b 0f e1 ff       	call   0x408cab ; ["call resolved=0x46a010 "]
  5f7d10:	8d 85 00 fb ff ff    	lea    eax,[ebp-0x500]
  5f7d16:	c6 85 14 fb ff ff 01 	mov    BYTE PTR [ebp-0x4ec],0x1
  5f7d1d:	89 85 10 fb ff ff    	mov    DWORD PTR [ebp-0x4f0],eax
  5f7d23:	68 c4 34 6f 00       	push   0x6f34c4 ; ["seed"]
  5f7d28:	8d 8d c4 f9 ff ff    	lea    ecx,[ebp-0x63c]
  5f7d2e:	c6 45 fc 12          	mov    BYTE PTR [ebp-0x4],0x12
  5f7d32:	e8 41 f7 e0 ff       	call   0x407478 ; ["call resolved=0x54c050 "]
  5f7d37:	ff b5 d0 fa ff ff    	push   DWORD PTR [ebp-0x530]
  5f7d3d:	8d 8d dc f9 ff ff    	lea    ecx,[ebp-0x624]
  5f7d43:	c6 45 fc 13          	mov    BYTE PTR [ebp-0x4],0x13
  5f7d47:	e8 35 e9 e0 ff       	call   0x406681 ; ["call resolved=0x43d750 "]
  5f7d4c:	8d 85 dc f9 ff ff    	lea    eax,[ebp-0x624]
  5f7d52:	c6 85 f0 f9 ff ff 01 	mov    BYTE PTR [ebp-0x610],0x1
  5f7d59:	89 85 ec f9 ff ff    	mov    DWORD PTR [ebp-0x614],eax
  5f7d5f:	6a 02                	push   0x2
  5f7d61:	6a 01                	push   0x1
  5f7d63:	8d 85 f4 f9 ff ff    	lea    eax,[ebp-0x60c]
  5f7d69:	c6 45 fc 14          	mov    BYTE PTR [ebp-0x4],0x14
  5f7d6d:	8d 8d c4 f9 ff ff    	lea    ecx,[ebp-0x63c]
  5f7d73:	50                   	push   eax
  5f7d74:	51                   	push   ecx
  5f7d75:	8d 8d 18 fb ff ff    	lea    ecx,[ebp-0x4e8]
  5f7d7b:	e8 2b 0f e1 ff       	call   0x408cab ; ["call resolved=0x46a010 "]
  5f7d80:	8d 85 18 fb ff ff    	lea    eax,[ebp-0x4e8]
  5f7d86:	c6 85 2c fb ff ff 01 	mov    BYTE PTR [ebp-0x4d4],0x1
  5f7d8d:	89 85 28 fb ff ff    	mov    DWORD PTR [ebp-0x4d8],eax
  5f7d93:	68 cc 34 6f 00       	push   0x6f34cc ; ["sign"]
  5f7d98:	8d 8d f4 f9 ff ff    	lea    ecx,[ebp-0x60c]
  5f7d9e:	c6 45 fc 15          	mov    BYTE PTR [ebp-0x4],0x15
  5f7da2:	e8 d1 f6 e0 ff       	call   0x407478 ; ["call resolved=0x54c050 "]
  5f7da7:	ff b5 f8 fa ff ff    	push   DWORD PTR [ebp-0x508]
  5f7dad:	8d 8d 0c fa ff ff    	lea    ecx,[ebp-0x5f4]
  5f7db3:	c6 45 fc 16          	mov    BYTE PTR [ebp-0x4],0x16
  5f7db7:	e8 c5 e8 e0 ff       	call   0x406681 ; ["call resolved=0x43d750 "]
  5f7dbc:	8d 85 0c fa ff ff    	lea    eax,[ebp-0x5f4]
  5f7dc2:	c6 85 20 fa ff ff 01 	mov    BYTE PTR [ebp-0x5e0],0x1
  5f7dc9:	89 85 1c fa ff ff    	mov    DWORD PTR [ebp-0x5e4],eax
  5f7dcf:	6a 02                	push   0x2
  5f7dd1:	6a 01                	push   0x1
  5f7dd3:	8d 85 24 fa ff ff    	lea    eax,[ebp-0x5dc]
  5f7dd9:	c6 45 fc 17          	mov    BYTE PTR [ebp-0x4],0x17
  5f7ddd:	8d 8d f4 f9 ff ff    	lea    ecx,[ebp-0x60c]
  5f7de3:	50                   	push   eax
  5f7de4:	51                   	push   ecx
  5f7de5:	8d 8d 30 fb ff ff    	lea    ecx,[ebp-0x4d0]
  5f7deb:	e8 bb 0e e1 ff       	call   0x408cab ; ["call resolved=0x46a010 "]
  5f7df0:	8d 85 30 fb ff ff    	lea    eax,[ebp-0x4d0]
  5f7df6:	c6 85 44 fb ff ff 01 	mov    BYTE PTR [ebp-0x4bc],0x1
  5f7dfd:	89 85 40 fb ff ff    	mov    DWORD PTR [ebp-0x4c0],eax
  5f7e03:	c6 45 fc 18          	mov    BYTE PTR [ebp-0x4],0x18
  5f7e07:	8d 8d 5c fa ff ff    	lea    ecx,[ebp-0x5a4]
  5f7e0d:	68 bc 66 6c 00       	push   0x6c66bc ; ["connectType"]
  5f7e12:	e8 6d e5 e0 ff       	call   0x406384 ; ["call resolved=0x5e8cb0 "]
  5f7e17:	0f 57 c0             	xorps  xmm0,xmm0
  5f7e1a:	c6 85 74 fa ff ff 05 	mov    BYTE PTR [ebp-0x58c],0x5
  5f7e21:	66 0f d6 85 7c fa ff 	movq   QWORD PTR [ebp-0x584],xmm0
  5f7e29:	8d 8d 74 fa ff ff    	lea    ecx,[ebp-0x58c]
  5f7e2f:	89 b5 7c fa ff ff    	mov    DWORD PTR [ebp-0x584],esi
  5f7e35:	c7 85 80 fa ff ff 00 	mov    DWORD PTR [ebp-0x580],0x0
  5f7e3f:	e8 9a 21 e1 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5f7e44:	8d 8d 74 fa ff ff    	lea    ecx,[ebp-0x58c]
  5f7e4a:	e8 8f 21 e1 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5f7e4f:	8d 85 74 fa ff ff    	lea    eax,[ebp-0x58c]
  5f7e55:	c6 85 88 fa ff ff 01 	mov    BYTE PTR [ebp-0x578],0x1
  5f7e5c:	89 85 84 fa ff ff    	mov    DWORD PTR [ebp-0x57c],eax
  5f7e62:	6a 02                	push   0x2
  5f7e64:	6a 01                	push   0x1
  5f7e66:	8d 85 8c fa ff ff    	lea    eax,[ebp-0x574]
  5f7e6c:	c6 45 fc 19          	mov    BYTE PTR [ebp-0x4],0x19
  5f7e70:	8d 8d 5c fa ff ff    	lea    ecx,[ebp-0x5a4]
  5f7e76:	50                   	push   eax
  5f7e77:	51                   	push   ecx
  5f7e78:	8d 8d 48 fb ff ff    	lea    ecx,[ebp-0x4b8]
  5f7e7e:	e8 28 0e e1 ff       	call   0x408cab ; ["call resolved=0x46a010 "]
  5f7e83:	8d 85 48 fb ff ff    	lea    eax,[ebp-0x4b8]
  5f7e89:	c6 85 5c fb ff ff 01 	mov    BYTE PTR [ebp-0x4a4],0x1
  5f7e90:	89 85 58 fb ff ff    	mov    DWORD PTR [ebp-0x4a8],eax
  5f7e96:	68 d4 34 6f 00       	push   0x6f34d4 ; ["isAutoConnectNew"]
  5f7e9b:	8d 8d 24 fa ff ff    	lea    ecx,[ebp-0x5dc]
  5f7ea1:	c6 45 fc 1a          	mov    BYTE PTR [ebp-0x4],0x1a
  5f7ea5:	e8 ca db e0 ff       	call   0x405a74 ; ["call resolved=0x5e8bd0 "]
  5f7eaa:	8d 85 c0 fb ff ff    	lea    eax,[ebp-0x440]
  5f7eb0:	c6 45 fc 1b          	mov    BYTE PTR [ebp-0x4],0x1b
  5f7eb4:	50                   	push   eax
  5f7eb5:	8d 8d 3c fa ff ff    	lea    ecx,[ebp-0x5c4]
  5f7ebb:	e8 50 cc e0 ff       	call   0x404b10 ; ["call resolved=0x43cf90 "]
  5f7ec0:	8d 85 3c fa ff ff    	lea    eax,[ebp-0x5c4]
  5f7ec6:	c6 85 50 fa ff ff 01 	mov    BYTE PTR [ebp-0x5b0],0x1
  5f7ecd:	89 85 4c fa ff ff    	mov    DWORD PTR [ebp-0x5b4],eax
  5f7ed3:	6a 02                	push   0x2
  5f7ed5:	6a 01                	push   0x1
  5f7ed7:	8d 85 54 fa ff ff    	lea    eax,[ebp-0x5ac]
  5f7edd:	c6 45 fc 1c          	mov    BYTE PTR [ebp-0x4],0x1c
  5f7ee1:	8d 8d 24 fa ff ff    	lea    ecx,[ebp-0x5dc]
  5f7ee7:	50                   	push   eax
  5f7ee8:	51                   	push   ecx
  5f7ee9:	8d 8d 60 fb ff ff    	lea    ecx,[ebp-0x4a0]
  5f7eef:	e8 b7 0d e1 ff       	call   0x408cab ; ["call resolved=0x46a010 "]
  5f7ef4:	8d 85 60 fb ff ff    	lea    eax,[ebp-0x4a0]
  5f7efa:	c6 85 74 fb ff ff 01 	mov    BYTE PTR [ebp-0x48c],0x1
  5f7f01:	89 85 70 fb ff ff    	mov    DWORD PTR [ebp-0x490],eax
  5f7f07:	68 e8 34 6f 00       	push   0x6f34e8 ; ["pcPcsuiteVersion"]
  5f7f0c:	8d 8d 8c fa ff ff    	lea    ecx,[ebp-0x574]
  5f7f12:	c6 45 fc 1d          	mov    BYTE PTR [ebp-0x4],0x1d
  5f7f16:	e8 59 db e0 ff       	call   0x405a74 ; ["call resolved=0x5e8bd0 "]
  5f7f1b:	c6 45 fc 1e          	mov    BYTE PTR [ebp-0x4],0x1e
  5f7f1f:	e8 16 ac e0 ff       	call   0x402b3a ; ["call resolved=0x5ef010 "]
  5f7f24:	0f 57 c0             	xorps  xmm0,xmm0
  5f7f27:	99                   	cdq
  5f7f28:	66 0f d6 85 ac fa ff 	movq   QWORD PTR [ebp-0x554],xmm0
  5f7f30:	8d 8d a4 fa ff ff    	lea    ecx,[ebp-0x55c]
  5f7f36:	c6 85 a4 fa ff ff 05 	mov    BYTE PTR [ebp-0x55c],0x5
  5f7f3d:	89 85 ac fa ff ff    	mov    DWORD PTR [ebp-0x554],eax
  5f7f43:	89 95 b0 fa ff ff    	mov    DWORD PTR [ebp-0x550],edx
  5f7f49:	e8 90 20 e1 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5f7f4e:	8d 8d a4 fa ff ff    	lea    ecx,[ebp-0x55c]
  5f7f54:	e8 85 20 e1 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5f7f59:	8d 85 a4 fa ff ff    	lea    eax,[ebp-0x55c]
  5f7f5f:	c6 85 b8 fa ff ff 01 	mov    BYTE PTR [ebp-0x548],0x1
  5f7f66:	89 85 b4 fa ff ff    	mov    DWORD PTR [ebp-0x54c],eax
  5f7f6c:	6a 02                	push   0x2
  5f7f6e:	8d 85 bc fa ff ff    	lea    eax,[ebp-0x544]
  5f7f74:	c6 45 fc 1f          	mov    BYTE PTR [ebp-0x4],0x1f
  5f7f78:	6a 01                	push   0x1
  5f7f7a:	8d 8d 8c fa ff ff    	lea    ecx,[ebp-0x574]
  5f7f80:	50                   	push   eax
  5f7f81:	51                   	push   ecx
  5f7f82:	8d 8d 78 fb ff ff    	lea    ecx,[ebp-0x488]
  5f7f88:	e8 1e 0d e1 ff       	call   0x408cab ; ["call resolved=0x46a010 "]
  5f7f8d:	8d 85 78 fb ff ff    	lea    eax,[ebp-0x488]
  5f7f93:	c6 85 8c fb ff ff 01 	mov    BYTE PTR [ebp-0x474],0x1
  5f7f9a:	89 85 88 fb ff ff    	mov    DWORD PTR [ebp-0x478],eax
  5f7fa0:	6a 02                	push   0x2
  5f7fa2:	6a 01                	push   0x1
  5f7fa4:	8d 85 90 fb ff ff    	lea    eax,[ebp-0x470]
  5f7faa:	c6 45 fc 25          	mov    BYTE PTR [ebp-0x4],0x25
  5f7fae:	8d 8d 00 fb ff ff    	lea    ecx,[ebp-0x500]
  5f7fb4:	50                   	push   eax
  5f7fb5:	51                   	push   ecx
  5f7fb6:	8d 8d bc fa ff ff    	lea    ecx,[ebp-0x544]
  5f7fbc:	e8 ea 0c e1 ff       	call   0x408cab ; ["call resolved=0x46a010 "]
  5f7fc1:	68 a0 65 40 00       	push   0x4065a0
  5f7fc6:	6a 06                	push   0x6
  5f7fc8:	6a 18                	push   0x18
  5f7fca:	8d 85 00 fb ff ff    	lea    eax,[ebp-0x500]
  5f7fd0:	c6 45 fc 27          	mov    BYTE PTR [ebp-0x4],0x27
  5f7fd4:	50                   	push   eax
  5f7fd5:	e8 b8 f3 e0 ff       	call   0x407392 ; ["call resolved=0x6663ee "]
  5f7fda:	68 a0 65 40 00       	push   0x4065a0
  5f7fdf:	6a 02                	push   0x2
  5f7fe1:	6a 18                	push   0x18
  5f7fe3:	8d 85 8c fa ff ff    	lea    eax,[ebp-0x574]
  5f7fe9:	c6 45 fc 28          	mov    BYTE PTR [ebp-0x4],0x28
  5f7fed:	50                   	push   eax
  5f7fee:	e8 9f f3 e0 ff       	call   0x407392 ; ["call resolved=0x6663ee "]
  5f7ff3:	68 a0 65 40 00       	push   0x4065a0
  5f7ff8:	6a 02                	push   0x2
  5f7ffa:	6a 18                	push   0x18
  5f7ffc:	8d 85 24 fa ff ff    	lea    eax,[ebp-0x5dc]
  5f8002:	c6 45 fc 29          	mov    BYTE PTR [ebp-0x4],0x29
  5f8006:	50                   	push   eax
  5f8007:	e8 86 f3 e0 ff       	call   0x407392 ; ["call resolved=0x6663ee "]
  5f800c:	68 a0 65 40 00       	push   0x4065a0
  5f8011:	6a 02                	push   0x2
  5f8013:	6a 18                	push   0x18
  5f8015:	8d 85 5c fa ff ff    	lea    eax,[ebp-0x5a4]
  5f801b:	c6 45 fc 2a          	mov    BYTE PTR [ebp-0x4],0x2a
  5f801f:	50                   	push   eax
  5f8020:	e8 6d f3 e0 ff       	call   0x407392 ; ["call resolved=0x6663ee "]
  5f8025:	68 a0 65 40 00       	push   0x4065a0
  5f802a:	6a 02                	push   0x2
  5f802c:	6a 18                	push   0x18
  5f802e:	8d 85 f4 f9 ff ff    	lea    eax,[ebp-0x60c]
  5f8034:	c6 45 fc 2b          	mov    BYTE PTR [ebp-0x4],0x2b
  5f8038:	50                   	push   eax
  5f8039:	e8 54 f3 e0 ff       	call   0x407392 ; ["call resolved=0x6663ee "]
  5f803e:	68 a0 65 40 00       	push   0x4065a0
  5f8043:	6a 02                	push   0x2
  5f8045:	6a 18                	push   0x18
  5f8047:	8d 85 c4 f9 ff ff    	lea    eax,[ebp-0x63c]
  5f804d:	c6 45 fc 2c          	mov    BYTE PTR [ebp-0x4],0x2c
  5f8051:	50                   	push   eax
  5f8052:	e8 3b f3 e0 ff       	call   0x407392 ; ["call resolved=0x6663ee "]
  5f8057:	68 a0 65 40 00       	push   0x4065a0
  5f805c:	6a 02                	push   0x2
  5f805e:	6a 18                	push   0x18
  5f8060:	8d 85 94 f9 ff ff    	lea    eax,[ebp-0x66c]
  5f8066:	c6 45 fc 2d          	mov    BYTE PTR [ebp-0x4],0x2d
  5f806a:	50                   	push   eax
  5f806b:	e8 22 f3 e0 ff       	call   0x407392 ; ["call resolved=0x6663ee "]
  5f8070:	8b 45 18             	mov    eax,DWORD PTR [ebp+0x18]
  5f8073:	80 38 00             	cmp    BYTE PTR [eax],0x0
  5f8076:	74 34                	je     0x5f80ac
  5f8078:	83 ec 10             	sub    esp,0x10
  5f807b:	8b cc                	mov    ecx,esp
  5f807d:	89 a5 f8 fa ff ff    	mov    DWORD PTR [ebp-0x508],esp
  5f8083:	68 58 19 6c 00       	push   0x6c1958 ; ["pcsuiteTransfer"]
  5f8088:	e8 d0 b9 e0 ff       	call   0x403a5d ; ["call resolved=0x59e4b0 "]
  5f808d:	68 fc 34 6f 00       	push   0x6f34fc ; ["businessName"]
  5f8092:	8d 8d bc fa ff ff    	lea    ecx,[ebp-0x544]
  5f8098:	c6 45 fc 2e          	mov    BYTE PTR [ebp-0x4],0x2e
  5f809c:	e8 3d b6 e0 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5f80a1:	8b c8                	mov    ecx,eax
  5f80a3:	c6 45 fc 2d          	mov    BYTE PTR [ebp-0x4],0x2d
  5f80a7:	e8 d9 c3 e0 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5f80ac:	6a 00                	push   0x0
  5f80ae:	6a 00                	push   0x0
  5f80b0:	6a 20                	push   0x20
  5f80b2:	6a ff                	push   0xffffffff
  5f80b4:	8d 85 90 fb ff ff    	lea    eax,[ebp-0x470]
  5f80ba:	50                   	push   eax
  5f80bb:	8d 8d bc fa ff ff    	lea    ecx,[ebp-0x544]
  5f80c1:	e8 58 07 e1 ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  5f80c6:	83 ec 10             	sub    esp,0x10
  5f80c9:	c6 45 fc 2f          	mov    BYTE PTR [ebp-0x4],0x2f
  5f80cd:	8b cc                	mov    ecx,esp
  5f80cf:	89 a5 f8 fa ff ff    	mov    DWORD PTR [ebp-0x508],esp
  5f80d5:	50                   	push   eax
  5f80d6:	e8 6d d3 e0 ff       	call   0x405448 ; ["call resolved=0x43de60 "]
  5f80db:	68 e4 4d 6c 00       	push   0x6c4de4 ; ["extra_info"]
  5f80e0:	8d 8d e4 fa ff ff    	lea    ecx,[ebp-0x51c]
  5f80e6:	c6 45 fc 30          	mov    BYTE PTR [ebp-0x4],0x30
  5f80ea:	e8 ef b5 e0 ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  5f80ef:	8b c8                	mov    ecx,eax
  5f80f1:	c6 45 fc 2f          	mov    BYTE PTR [ebp-0x4],0x2f
  5f80f5:	e8 8b c3 e0 ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  5f80fa:	8d 8d 90 fb ff ff    	lea    ecx,[ebp-0x470]
  5f8100:	c6 45 fc 2d          	mov    BYTE PTR [ebp-0x4],0x2d
  5f8104:	e8 fa b8 e0 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5f8109:	6a 00                	push   0x0
  5f810b:	6a 00                	push   0x0
  5f810d:	6a 20                	push   0x20
  5f810f:	6a ff                	push   0xffffffff
  5f8111:	8d 85 90 fb ff ff    	lea    eax,[ebp-0x470]
  5f8117:	50                   	push   eax
  5f8118:	8d 8d e4 fa ff ff    	lea    ecx,[ebp-0x51c]
  5f811e:	e8 fb 06 e1 ff       	call   0x40881e ; ["call resolved=0x4894a0 "]
  5f8123:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  5f8127:	72 02                	jb     0x5f812b
  5f8129:	8b 00                	mov    eax,DWORD PTR [eax]
  5f812b:	8d 95 f0 fb ff ff    	lea    edx,[ebp-0x410]
  5f8131:	2b d0                	sub    edx,eax
  5f8133:	8a 08                	mov    cl,BYTE PTR [eax]
  5f8135:	8d 40 01             	lea    eax,[eax+0x1]
  5f8138:	88 4c 10 ff          	mov    BYTE PTR [eax+edx*1-0x1],cl
  5f813c:	84 c9                	test   cl,cl
  5f813e:	75 f3                	jne    0x5f8133
  5f8140:	8d 8d 90 fb ff ff    	lea    ecx,[ebp-0x470]
  5f8146:	e8 b8 b8 e0 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5f814b:	6a 5c                	push   0x5c
  5f814d:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f8152:	e8 0f 06 07 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5f8157:	83 c4 08             	add    esp,0x8
  5f815a:	85 c0                	test   eax,eax
  5f815c:	74 12                	je     0x5f8170
  5f815e:	6a 5c                	push   0x5c
  5f8160:	68 80 26 6f 00       	push   0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f8165:	e8 fc 05 07 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5f816a:	83 c4 08             	add    esp,0x8
  5f816d:	40                   	inc    eax
  5f816e:	eb 05                	jmp    0x5f8175
  5f8170:	b8 80 26 6f 00       	mov    eax,0x6f2680 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\PreConnect\\ConnectFlow.cpp"]
  5f8175:	8d 8d f0 fb ff ff    	lea    ecx,[ebp-0x410]
  5f817b:	c7 85 f8 fa ff ff 02 	mov    DWORD PTR [ebp-0x508],0x2
  5f8185:	51                   	push   ecx
  5f8186:	68 0c 35 6f 00       	push   0x6f350c ; ["ConnectFlow::wlanBuildConnData"]
  5f818b:	68 32 02 00 00       	push   0x232
  5f8190:	50                   	push   eax
  5f8191:	68 38 35 6f 00       	push   0x6f3538 ; ["[ConntctionModule][%s:%d][%s]: [INTERACTION][CONNSERVER_TO_MOBILEPHONE] ConnectFlow wlan send connect data: %s\n"]
  5f8196:	8d 85 f8 fa ff ff    	lea    eax,[ebp-0x508]
  5f819c:	50                   	push   eax
  5f819d:	8d 85 90 fb ff ff    	lea    eax,[ebp-0x470]
  5f81a3:	50                   	push   eax
  5f81a4:	e8 60 ee e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5f81a9:	83 c4 1c             	add    esp,0x1c
  5f81ac:	8d 8d 90 fb ff ff    	lea    ecx,[ebp-0x470]
  5f81b2:	e8 4c b8 e0 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5f81b7:	8d 8d f0 fb ff ff    	lea    ecx,[ebp-0x410]
  5f81bd:	8d 51 01             	lea    edx,[ecx+0x1]
  5f81c0:	8a 01                	mov    al,BYTE PTR [ecx]
  5f81c2:	41                   	inc    ecx
  5f81c3:	84 c0                	test   al,al
  5f81c5:	75 f9                	jne    0x5f81c0
  5f81c7:	f3 0f 7e 05 a8 68 6c 	movq   xmm0,QWORD PTR ds:0x6c68a8 ; ["PAY_LOAD_1"]
  5f81cf:	2b ca                	sub    ecx,edx
  5f81d1:	8b 95 cc fa ff ff    	mov    edx,DWORD PTR [ebp-0x534]
  5f81d7:	51                   	push   ecx
  5f81d8:	89 8d f8 fa ff ff    	mov    DWORD PTR [ebp-0x508],ecx
  5f81de:	66 0f d6 02          	movq   QWORD PTR [edx],xmm0
  5f81e2:	66 a1 b0 68 6c 00    	mov    ax,ds:0x6c68b0 ; ["_1"]
  5f81e8:	66 89 42 08          	mov    WORD PTR [edx+0x8],ax
  5f81ec:	8b c1                	mov    eax,ecx
  5f81ee:	c1 f8 18             	sar    eax,0x18
  5f81f1:	88 42 0a             	mov    BYTE PTR [edx+0xa],al
  5f81f4:	8b c1                	mov    eax,ecx
  5f81f6:	c1 f8 10             	sar    eax,0x10
  5f81f9:	88 42 0b             	mov    BYTE PTR [edx+0xb],al
  5f81fc:	8b c1                	mov    eax,ecx
  5f81fe:	c1 f8 08             	sar    eax,0x8
  5f8201:	88 42 0c             	mov    BYTE PTR [edx+0xc],al
  5f8204:	8d 85 f0 fb ff ff    	lea    eax,[ebp-0x410]
  5f820a:	50                   	push   eax
  5f820b:	8d 42 0e             	lea    eax,[edx+0xe]
  5f820e:	88 4a 0d             	mov    BYTE PTR [edx+0xd],cl
  5f8211:	50                   	push   eax
  5f8212:	e8 73 05 07 00       	call   0x66878a ; ["call resolved=0x66878a "]
  5f8217:	8b b5 f8 fa ff ff    	mov    esi,DWORD PTR [ebp-0x508]
  5f821d:	8d 8d bc fa ff ff    	lea    ecx,[ebp-0x544]
  5f8223:	83 c4 0c             	add    esp,0xc
  5f8226:	e8 b3 1d e1 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5f822b:	ff b5 bc fa ff ff    	push   DWORD PTR [ebp-0x544]
  5f8231:	8d 8d c4 fa ff ff    	lea    ecx,[ebp-0x53c]
  5f8237:	e8 12 17 e1 ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  5f823c:	8d 8d c0 fb ff ff    	lea    ecx,[ebp-0x440]
  5f8242:	e8 bc b7 e0 ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  5f8247:	8b 95 ec fb ff ff    	mov    edx,DWORD PTR [ebp-0x414]
  5f824d:	83 fa 10             	cmp    edx,0x10
  5f8250:	72 2b                	jb     0x5f827d
  5f8252:	8b 8d d8 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x428]
  5f8258:	42                   	inc    edx
  5f8259:	8b c1                	mov    eax,ecx
  5f825b:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f8261:	72 10                	jb     0x5f8273
  5f8263:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f8266:	83 c2 23             	add    edx,0x23
  5f8269:	2b c1                	sub    eax,ecx
  5f826b:	83 c0 fc             	add    eax,0xfffffffc
  5f826e:	83 f8 1f             	cmp    eax,0x1f
  5f8271:	77 36                	ja     0x5f82a9
  5f8273:	52                   	push   edx
  5f8274:	51                   	push   ecx
  5f8275:	e8 20 9e e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f827a:	83 c4 08             	add    esp,0x8
  5f827d:	8b 95 bc fb ff ff    	mov    edx,DWORD PTR [ebp-0x444]
  5f8283:	83 fa 10             	cmp    edx,0x10
  5f8286:	72 31                	jb     0x5f82b9
  5f8288:	8b 8d a8 fb ff ff    	mov    ecx,DWORD PTR [ebp-0x458]
  5f828e:	42                   	inc    edx
  5f828f:	8b c1                	mov    eax,ecx
  5f8291:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5f8297:	72 16                	jb     0x5f82af
  5f8299:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5f829c:	83 c2 23             	add    edx,0x23
  5f829f:	2b c1                	sub    eax,ecx
  5f82a1:	83 c0 fc             	add    eax,0xfffffffc
  5f82a4:	83 f8 1f             	cmp    eax,0x1f
  5f82a7:	76 06                	jbe    0x5f82af
  5f82a9:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5f82af:	52                   	push   edx
  5f82b0:	51                   	push   ecx
  5f82b1:	e8 e4 9d e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5f82b6:	83 c4 08             	add    esp,0x8
  5f82b9:	8b 8d d8 fa ff ff    	mov    ecx,DWORD PTR [ebp-0x528]
  5f82bf:	85 c9                	test   ecx,ecx
  5f82c1:	74 18                	je     0x5f82db
  5f82c3:	8b 85 e0 fa ff ff    	mov    eax,DWORD PTR [ebp-0x520]
  5f82c9:	2b c1                	sub    eax,ecx
  5f82cb:	c1 f8 02             	sar    eax,0x2
  5f82ce:	50                   	push   eax
  5f82cf:	51                   	push   ecx
  5f82d0:	8d 8d d8 fa ff ff    	lea    ecx,[ebp-0x528]
  5f82d6:	e8 21 b4 e0 ff       	call   0x4036fc ; ["call resolved=0x487630 "]
  5f82db:	8d 8d e4 fa ff ff    	lea    ecx,[ebp-0x51c]
  5f82e1:	e8 f8 1c e1 ff       	call   0x409fde ; ["call resolved=0x480970 "]
  5f82e6:	ff b5 e4 fa ff ff    	push   DWORD PTR [ebp-0x51c]
  5f82ec:	8d 8d ec fa ff ff    	lea    ecx,[ebp-0x514]
  5f82f2:	e8 57 16 e1 ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  5f82f7:	8d 46 0e             	lea    eax,[esi+0xe]
  5f82fa:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  5f82fd:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  5f8304:	59                   	pop    ecx
  5f8305:	5f                   	pop    edi
  5f8306:	5e                   	pop    esi
  5f8307:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  5f830a:	33 cd                	xor    ecx,ebp
  5f830c:	e8 7e c1 e0 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5f8311:	8b e5                	mov    esp,ebp
  5f8313:	5d                   	pop    ebp
  5f8314:	c2 14 00             	ret    0x14
