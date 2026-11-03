; GatewayServer::RequestInterceptor; image base 0x400000; static annotation only
  5d8cd0:	55                   	push   ebp
  5d8cd1:	8b ec                	mov    ebp,esp
  5d8cd3:	6a ff                	push   0xffffffff
  5d8cd5:	68 f4 5f 69 00       	push   0x695ff4
  5d8cda:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  5d8ce0:	50                   	push   eax
  5d8ce1:	81 ec e0 00 00 00    	sub    esp,0xe0
  5d8ce7:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5d8cec:	33 c5                	xor    eax,ebp
  5d8cee:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  5d8cf1:	53                   	push   ebx
  5d8cf2:	56                   	push   esi
  5d8cf3:	57                   	push   edi
  5d8cf4:	50                   	push   eax
  5d8cf5:	8d 45 f4             	lea    eax,[ebp-0xc]
  5d8cf8:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  5d8cfe:	8b 7d 08             	mov    edi,DWORD PTR [ebp+0x8]
  5d8d01:	b9 40 9d 7a 00       	mov    ecx,0x7a9d40
  5d8d06:	e8 e3 fd e2 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5d8d0b:	e8 24 ea e2 ff       	call   0x407734 ; ["call resolved=0x492af0 "]
  5d8d10:	05 f8 00 00 00       	add    eax,0xf8
  5d8d15:	8d 8d 18 ff ff ff    	lea    ecx,[ebp-0xe8]
  5d8d1b:	50                   	push   eax
  5d8d1c:	e8 6a cf e2 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  5d8d21:	c7 45 a8 00 00 00 00 	mov    DWORD PTR [ebp-0x58],0x0
  5d8d28:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  5d8d2f:	c7 45 bc 0f 00 00 00 	mov    DWORD PTR [ebp-0x44],0xf
  5d8d36:	c7 45 b8 01 00 00 00 	mov    DWORD PTR [ebp-0x48],0x1
  5d8d3d:	66 c7 45 a8 32 00    	mov    WORD PTR [ebp-0x58],0x32
  5d8d43:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  5d8d47:	e8 e8 e9 e2 ff       	call   0x407734 ; ["call resolved=0x492af0 "]
  5d8d4c:	05 10 01 00 00       	add    eax,0x110
  5d8d51:	8d 8d 30 ff ff ff    	lea    ecx,[ebp-0xd0]
  5d8d57:	50                   	push   eax
  5d8d58:	e8 2e cf e2 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  5d8d5d:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  5d8d61:	e8 ce e9 e2 ff       	call   0x407734 ; ["call resolved=0x492af0 "]
  5d8d66:	83 c0 18             	add    eax,0x18
  5d8d69:	8d 4d 90             	lea    ecx,[ebp-0x70]
  5d8d6c:	50                   	push   eax
  5d8d6d:	e8 19 cf e2 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  5d8d72:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  5d8d76:	e8 b9 e9 e2 ff       	call   0x407734 ; ["call resolved=0x492af0 "]
  5d8d7b:	05 98 00 00 00       	add    eax,0x98
  5d8d80:	8d 8d 78 ff ff ff    	lea    ecx,[ebp-0x88]
  5d8d86:	50                   	push   eax
  5d8d87:	e8 ff ce e2 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  5d8d8c:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  5d8d90:	e8 9f e9 e2 ff       	call   0x407734 ; ["call resolved=0x492af0 "]
  5d8d95:	05 bc 01 00 00       	add    eax,0x1bc
  5d8d9a:	8d 8d 48 ff ff ff    	lea    ecx,[ebp-0xb8]
  5d8da0:	50                   	push   eax
  5d8da1:	e8 e5 ce e2 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  5d8da6:	83 7f 60 10          	cmp    DWORD PTR [edi+0x60],0x10
  5d8daa:	8d 77 4c             	lea    esi,[edi+0x4c]
  5d8dad:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  5d8db1:	8b c6                	mov    eax,esi
  5d8db3:	72 02                	jb     0x5d8db7
  5d8db5:	8b 06                	mov    eax,DWORD PTR [esi]
  5d8db7:	83 7e 10 0e          	cmp    DWORD PTR [esi+0x10],0xe
  5d8dbb:	0f 85 3b 03 00 00    	jne    0x5d90fc
  5d8dc1:	6a 0e                	push   0xe
  5d8dc3:	68 4c 47 6e 00       	push   0x6e474c ; ["/device/unBind"]
  5d8dc8:	50                   	push   eax
  5d8dc9:	e8 ef ba e2 ff       	call   0x4048bd ; ["call resolved=0x482fc0 "]
  5d8dce:	83 c4 0c             	add    esp,0xc
  5d8dd1:	85 c0                	test   eax,eax
  5d8dd3:	0f 85 23 03 00 00    	jne    0x5d90fc
  5d8dd9:	e8 56 e9 e2 ff       	call   0x407734 ; ["call resolved=0x492af0 "]
  5d8dde:	05 b0 00 00 00       	add    eax,0xb0
  5d8de3:	8d 8d 60 ff ff ff    	lea    ecx,[ebp-0xa0]
  5d8de9:	50                   	push   eax
  5d8dea:	e8 9c ce e2 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  5d8def:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  5d8df3:	e8 3c e9 e2 ff       	call   0x407734 ; ["call resolved=0x492af0 "]
  5d8df8:	05 c8 00 00 00       	add    eax,0xc8
  5d8dfd:	8d 4d d8             	lea    ecx,[ebp-0x28]
  5d8e00:	50                   	push   eax
  5d8e01:	e8 85 ce e2 ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  5d8e06:	83 7d a0 00          	cmp    DWORD PTR [ebp-0x60],0x0
  5d8e0a:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  5d8e0e:	0f 85 d7 01 00 00    	jne    0x5d8feb
  5d8e14:	83 7d 88 00          	cmp    DWORD PTR [ebp-0x78],0x0
  5d8e18:	0f 85 cd 01 00 00    	jne    0x5d8feb
  5d8e1e:	83 bd 70 ff ff ff 00 	cmp    DWORD PTR [ebp-0x90],0x0
  5d8e25:	0f 84 c0 01 00 00    	je     0x5d8feb
  5d8e2b:	83 7d e8 00          	cmp    DWORD PTR [ebp-0x18],0x0
  5d8e2f:	0f 84 b6 01 00 00    	je     0x5d8feb
  5d8e35:	68 dc 4d 6c 00       	push   0x6c4ddc ; ["token"]
  5d8e3a:	8d 4d c0             	lea    ecx,[ebp-0x40]
  5d8e3d:	e8 de 98 e2 ff       	call   0x402720 ; ["call resolved=0x46a4f0 "]
  5d8e42:	8b 35 a8 d4 79 00    	mov    esi,DWORD PTR ds:0x79d4a8
  5d8e48:	8d 45 d8             	lea    eax,[ebp-0x28]
  5d8e4b:	50                   	push   eax
  5d8e4c:	8d 45 c0             	lea    eax,[ebp-0x40]
  5d8e4f:	c6 45 fc 08          	mov    BYTE PTR [ebp-0x4],0x8
  5d8e53:	50                   	push   eax
  5d8e54:	8b cf                	mov    ecx,edi
  5d8e56:	ff d6                	call   esi
  5d8e58:	8b 55 d4             	mov    edx,DWORD PTR [ebp-0x2c]
  5d8e5b:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  5d8e5f:	83 fa 10             	cmp    edx,0x10
  5d8e62:	72 2e                	jb     0x5d8e92
  5d8e64:	8b 4d c0             	mov    ecx,DWORD PTR [ebp-0x40]
  5d8e67:	42                   	inc    edx
  5d8e68:	8b c1                	mov    eax,ecx
  5d8e6a:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5d8e70:	72 16                	jb     0x5d8e88
  5d8e72:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5d8e75:	83 c2 23             	add    edx,0x23
  5d8e78:	2b c1                	sub    eax,ecx
  5d8e7a:	83 c0 fc             	add    eax,0xfffffffc
  5d8e7d:	83 f8 1f             	cmp    eax,0x1f
  5d8e80:	76 06                	jbe    0x5d8e88
  5d8e82:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5d8e88:	52                   	push   edx
  5d8e89:	51                   	push   ecx
  5d8e8a:	e8 0b 92 e2 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5d8e8f:	83 c4 08             	add    esp,0x8
  5d8e92:	68 8c 8b 6d 00       	push   0x6d8b8c ; ["userId"]
  5d8e97:	8d 4d c0             	lea    ecx,[ebp-0x40]
  5d8e9a:	e8 81 98 e2 ff       	call   0x402720 ; ["call resolved=0x46a4f0 "]
  5d8e9f:	8d 85 60 ff ff ff    	lea    eax,[ebp-0xa0]
  5d8ea5:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  5d8ea9:	50                   	push   eax
  5d8eaa:	8d 45 c0             	lea    eax,[ebp-0x40]
  5d8ead:	8b cf                	mov    ecx,edi
  5d8eaf:	50                   	push   eax
  5d8eb0:	ff d6                	call   esi
  5d8eb2:	8b 55 d4             	mov    edx,DWORD PTR [ebp-0x2c]
  5d8eb5:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  5d8eb9:	83 fa 10             	cmp    edx,0x10
  5d8ebc:	72 2e                	jb     0x5d8eec
  5d8ebe:	8b 4d c0             	mov    ecx,DWORD PTR [ebp-0x40]
  5d8ec1:	42                   	inc    edx
  5d8ec2:	8b c1                	mov    eax,ecx
  5d8ec4:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5d8eca:	72 16                	jb     0x5d8ee2
  5d8ecc:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5d8ecf:	83 c2 23             	add    edx,0x23
  5d8ed2:	2b c1                	sub    eax,ecx
  5d8ed4:	83 c0 fc             	add    eax,0xfffffffc
  5d8ed7:	83 f8 1f             	cmp    eax,0x1f
  5d8eda:	76 06                	jbe    0x5d8ee2
  5d8edc:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5d8ee2:	52                   	push   edx
  5d8ee3:	51                   	push   ecx
  5d8ee4:	e8 b1 91 e2 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5d8ee9:	83 c4 08             	add    esp,0x8
  5d8eec:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  5d8eef:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  5d8ef3:	83 fa 10             	cmp    edx,0x10
  5d8ef6:	72 2c                	jb     0x5d8f24
  5d8ef8:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  5d8efb:	42                   	inc    edx
  5d8efc:	8b c1                	mov    eax,ecx
  5d8efe:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5d8f04:	72 14                	jb     0x5d8f1a
  5d8f06:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5d8f09:	83 c2 23             	add    edx,0x23
  5d8f0c:	2b c1                	sub    eax,ecx
  5d8f0e:	83 c0 fc             	add    eax,0xfffffffc
  5d8f11:	83 f8 1f             	cmp    eax,0x1f
  5d8f14:	0f 87 dc 01 00 00    	ja     0x5d90f6
  5d8f1a:	52                   	push   edx
  5d8f1b:	51                   	push   ecx
  5d8f1c:	e8 79 91 e2 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5d8f21:	83 c4 08             	add    esp,0x8
  5d8f24:	8b 95 74 ff ff ff    	mov    edx,DWORD PTR [ebp-0x8c]
  5d8f2a:	c7 45 e8 00 00 00 00 	mov    DWORD PTR [ebp-0x18],0x0
  5d8f31:	c7 45 ec 0f 00 00 00 	mov    DWORD PTR [ebp-0x14],0xf
  5d8f38:	c6 45 d8 00          	mov    BYTE PTR [ebp-0x28],0x0
  5d8f3c:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  5d8f40:	83 fa 10             	cmp    edx,0x10
  5d8f43:	72 2f                	jb     0x5d8f74
  5d8f45:	8b 8d 60 ff ff ff    	mov    ecx,DWORD PTR [ebp-0xa0]
  5d8f4b:	42                   	inc    edx
  5d8f4c:	8b c1                	mov    eax,ecx
  5d8f4e:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5d8f54:	72 14                	jb     0x5d8f6a
  5d8f56:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5d8f59:	83 c2 23             	add    edx,0x23
  5d8f5c:	2b c1                	sub    eax,ecx
  5d8f5e:	83 c0 fc             	add    eax,0xfffffffc
  5d8f61:	83 f8 1f             	cmp    eax,0x1f
  5d8f64:	0f 87 8c 01 00 00    	ja     0x5d90f6
  5d8f6a:	52                   	push   edx
  5d8f6b:	51                   	push   ecx
  5d8f6c:	e8 29 91 e2 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5d8f71:	83 c4 08             	add    esp,0x8
  5d8f74:	6a 08                	push   0x8
  5d8f76:	c7 45 d8 00 00 00 00 	mov    DWORD PTR [ebp-0x28],0x0
  5d8f7d:	8d 4d d8             	lea    ecx,[ebp-0x28]
  5d8f80:	68 54 4d 6c 00       	push   0x6c4d54 ; ["deviceId"]
  5d8f85:	c7 45 e8 00 00 00 00 	mov    DWORD PTR [ebp-0x18],0x0
  5d8f8c:	c7 45 ec 0f 00 00 00 	mov    DWORD PTR [ebp-0x14],0xf
  5d8f93:	c6 45 d8 00          	mov    BYTE PTR [ebp-0x28],0x0
  5d8f97:	e8 7b b4 e2 ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  5d8f9c:	8d 85 18 ff ff ff    	lea    eax,[ebp-0xe8]
  5d8fa2:	c6 45 fc 0c          	mov    BYTE PTR [ebp-0x4],0xc
  5d8fa6:	50                   	push   eax
  5d8fa7:	8d 45 d8             	lea    eax,[ebp-0x28]
  5d8faa:	8b cf                	mov    ecx,edi
  5d8fac:	50                   	push   eax
  5d8fad:	ff d6                	call   esi
  5d8faf:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  5d8fb2:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  5d8fb6:	83 fa 10             	cmp    edx,0x10
  5d8fb9:	0f 82 ce 02 00 00    	jb     0x5d928d
  5d8fbf:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  5d8fc2:	42                   	inc    edx
  5d8fc3:	8b c1                	mov    eax,ecx
  5d8fc5:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5d8fcb:	0f 82 b2 02 00 00    	jb     0x5d9283
  5d8fd1:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5d8fd4:	83 c2 23             	add    edx,0x23
  5d8fd7:	2b c1                	sub    eax,ecx
  5d8fd9:	83 c0 fc             	add    eax,0xfffffffc
  5d8fdc:	83 f8 1f             	cmp    eax,0x1f
  5d8fdf:	0f 86 9e 02 00 00    	jbe    0x5d9283
  5d8fe5:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5d8feb:	83 7e 14 10          	cmp    DWORD PTR [esi+0x14],0x10
  5d8fef:	72 02                	jb     0x5d8ff3
  5d8ff1:	8b 36                	mov    esi,DWORD PTR [esi]
  5d8ff3:	6a 5c                	push   0x5c
  5d8ff5:	68 48 71 6e 00       	push   0x6e7148 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\GatewayServer\\GatewayServer.cpp"]
  5d8ffa:	e8 67 f7 08 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5d8fff:	83 c4 08             	add    esp,0x8
  5d9002:	85 c0                	test   eax,eax
  5d9004:	74 12                	je     0x5d9018
  5d9006:	6a 5c                	push   0x5c
  5d9008:	68 48 71 6e 00       	push   0x6e7148 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\GatewayServer\\GatewayServer.cpp"]
  5d900d:	e8 54 f7 08 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5d9012:	83 c4 08             	add    esp,0x8
  5d9015:	40                   	inc    eax
  5d9016:	eb 05                	jmp    0x5d901d
  5d9018:	b8 48 71 6e 00       	mov    eax,0x6e7148 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\GatewayServer\\GatewayServer.cpp"]
  5d901d:	56                   	push   esi
  5d901e:	68 dc 71 6e 00       	push   0x6e71dc ; ["GatewayServer::RequestInterceptor"]
  5d9023:	6a 2d                	push   0x2d
  5d9025:	50                   	push   eax
  5d9026:	68 08 72 6e 00       	push   0x6e7208 ; ["[GatewayServer][%s:%d][%s]: URI=%s, Does not meet the device unbinding conditions"]
  5d902b:	8d 85 14 ff ff ff    	lea    eax,[ebp-0xec]
  5d9031:	c7 85 14 ff ff ff 02 	mov    DWORD PTR [ebp-0xec],0x2
  5d903b:	50                   	push   eax
  5d903c:	8d 45 c0             	lea    eax,[ebp-0x40]
  5d903f:	50                   	push   eax
  5d9040:	e8 c4 df e2 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5d9045:	8b 55 d4             	mov    edx,DWORD PTR [ebp-0x2c]
  5d9048:	83 c4 1c             	add    esp,0x1c
  5d904b:	83 fa 10             	cmp    edx,0x10
  5d904e:	72 2c                	jb     0x5d907c
  5d9050:	8b 4d c0             	mov    ecx,DWORD PTR [ebp-0x40]
  5d9053:	42                   	inc    edx
  5d9054:	8b c1                	mov    eax,ecx
  5d9056:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5d905c:	72 14                	jb     0x5d9072
  5d905e:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5d9061:	83 c2 23             	add    edx,0x23
  5d9064:	2b c1                	sub    eax,ecx
  5d9066:	83 c0 fc             	add    eax,0xfffffffc
  5d9069:	83 f8 1f             	cmp    eax,0x1f
  5d906c:	0f 87 84 00 00 00    	ja     0x5d90f6
  5d9072:	52                   	push   edx
  5d9073:	51                   	push   ecx
  5d9074:	e8 21 90 e2 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5d9079:	83 c4 08             	add    esp,0x8
  5d907c:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  5d907f:	83 fa 10             	cmp    edx,0x10
  5d9082:	72 28                	jb     0x5d90ac
  5d9084:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  5d9087:	42                   	inc    edx
  5d9088:	8b c1                	mov    eax,ecx
  5d908a:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5d9090:	72 10                	jb     0x5d90a2
  5d9092:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5d9095:	83 c2 23             	add    edx,0x23
  5d9098:	2b c1                	sub    eax,ecx
  5d909a:	83 c0 fc             	add    eax,0xfffffffc
  5d909d:	83 f8 1f             	cmp    eax,0x1f
  5d90a0:	77 54                	ja     0x5d90f6
  5d90a2:	52                   	push   edx
  5d90a3:	51                   	push   ecx
  5d90a4:	e8 f1 8f e2 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5d90a9:	83 c4 08             	add    esp,0x8
  5d90ac:	8b 95 74 ff ff ff    	mov    edx,DWORD PTR [ebp-0x8c]
  5d90b2:	c7 45 e8 00 00 00 00 	mov    DWORD PTR [ebp-0x18],0x0
  5d90b9:	c7 45 ec 0f 00 00 00 	mov    DWORD PTR [ebp-0x14],0xf
  5d90c0:	c6 45 d8 00          	mov    BYTE PTR [ebp-0x28],0x0
  5d90c4:	83 fa 10             	cmp    edx,0x10
  5d90c7:	0f 82 ca 00 00 00    	jb     0x5d9197
  5d90cd:	8b 8d 60 ff ff ff    	mov    ecx,DWORD PTR [ebp-0xa0]
  5d90d3:	42                   	inc    edx
  5d90d4:	8b c1                	mov    eax,ecx
  5d90d6:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5d90dc:	0f 82 ab 00 00 00    	jb     0x5d918d
  5d90e2:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5d90e5:	83 c2 23             	add    edx,0x23
  5d90e8:	2b c1                	sub    eax,ecx
  5d90ea:	83 c0 fc             	add    eax,0xfffffffc
  5d90ed:	83 f8 1f             	cmp    eax,0x1f
  5d90f0:	0f 86 97 00 00 00    	jbe    0x5d918d
  5d90f6:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5d90fc:	83 7d a0 00          	cmp    DWORD PTR [ebp-0x60],0x0
  5d9100:	0f 85 98 00 00 00    	jne    0x5d919e
  5d9106:	83 7e 14 10          	cmp    DWORD PTR [esi+0x14],0x10
  5d910a:	72 02                	jb     0x5d910e
  5d910c:	8b 36                	mov    esi,DWORD PTR [esi]
  5d910e:	6a 5c                	push   0x5c
  5d9110:	68 48 71 6e 00       	push   0x6e7148 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\GatewayServer\\GatewayServer.cpp"]
  5d9115:	e8 4c f6 08 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5d911a:	83 c4 08             	add    esp,0x8
  5d911d:	85 c0                	test   eax,eax
  5d911f:	74 12                	je     0x5d9133
  5d9121:	6a 5c                	push   0x5c
  5d9123:	68 48 71 6e 00       	push   0x6e7148 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\GatewayServer\\GatewayServer.cpp"]
  5d9128:	e8 39 f6 08 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5d912d:	83 c4 08             	add    esp,0x8
  5d9130:	40                   	inc    eax
  5d9131:	eb 05                	jmp    0x5d9138
  5d9133:	b8 48 71 6e 00       	mov    eax,0x6e7148 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\GatewayServer\\GatewayServer.cpp"]
  5d9138:	56                   	push   esi
  5d9139:	68 dc 71 6e 00       	push   0x6e71dc ; ["GatewayServer::RequestInterceptor"]
  5d913e:	6a 39                	push   0x39
  5d9140:	50                   	push   eax
  5d9141:	68 6c 72 6e 00       	push   0x6e726c ; ["[GatewayServer][%s:%d][%s]: URI=%s, openid does not exist"]
  5d9146:	8d 85 14 ff ff ff    	lea    eax,[ebp-0xec]
  5d914c:	c7 85 14 ff ff ff 02 	mov    DWORD PTR [ebp-0xec],0x2
  5d9156:	50                   	push   eax
  5d9157:	8d 45 c0             	lea    eax,[ebp-0x40]
  5d915a:	50                   	push   eax
  5d915b:	e8 a9 de e2 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5d9160:	8b 55 d4             	mov    edx,DWORD PTR [ebp-0x2c]
  5d9163:	83 c4 1c             	add    esp,0x1c
  5d9166:	83 fa 10             	cmp    edx,0x10
  5d9169:	72 2c                	jb     0x5d9197
  5d916b:	8b 4d c0             	mov    ecx,DWORD PTR [ebp-0x40]
  5d916e:	42                   	inc    edx
  5d916f:	8b c1                	mov    eax,ecx
  5d9171:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5d9177:	72 14                	jb     0x5d918d
  5d9179:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5d917c:	83 c2 23             	add    edx,0x23
  5d917f:	2b c1                	sub    eax,ecx
  5d9181:	83 c0 fc             	add    eax,0xfffffffc
  5d9184:	83 f8 1f             	cmp    eax,0x1f
  5d9187:	0f 87 04 04 00 00    	ja     0x5d9591
  5d918d:	52                   	push   edx
  5d918e:	51                   	push   ecx
  5d918f:	e8 06 8f e2 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5d9194:	83 c4 08             	add    esp,0x8
  5d9197:	32 db                	xor    bl,bl
  5d9199:	e9 49 02 00 00       	jmp    0x5d93e7
  5d919e:	a1 dc 4d 6c 00       	mov    eax,ds:0x6c4ddc ; ["token"]
  5d91a3:	89 45 d8             	mov    DWORD PTR [ebp-0x28],eax
  5d91a6:	a0 e0 4d 6c 00       	mov    al,ds:0x6c4de0
  5d91ab:	c7 45 ec 0f 00 00 00 	mov    DWORD PTR [ebp-0x14],0xf
  5d91b2:	c7 45 e8 05 00 00 00 	mov    DWORD PTR [ebp-0x18],0x5
  5d91b9:	88 45 dc             	mov    BYTE PTR [ebp-0x24],al
  5d91bc:	c6 45 dd 00          	mov    BYTE PTR [ebp-0x23],0x0
  5d91c0:	8b 35 a8 d4 79 00    	mov    esi,DWORD PTR ds:0x79d4a8
  5d91c6:	8d 85 78 ff ff ff    	lea    eax,[ebp-0x88]
  5d91cc:	50                   	push   eax
  5d91cd:	8d 45 d8             	lea    eax,[ebp-0x28]
  5d91d0:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  5d91d4:	50                   	push   eax
  5d91d5:	8b cf                	mov    ecx,edi
  5d91d7:	ff d6                	call   esi
  5d91d9:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  5d91dc:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  5d91e0:	83 fa 10             	cmp    edx,0x10
  5d91e3:	72 2e                	jb     0x5d9213
  5d91e5:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  5d91e8:	42                   	inc    edx
  5d91e9:	8b c1                	mov    eax,ecx
  5d91eb:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5d91f1:	72 16                	jb     0x5d9209
  5d91f3:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5d91f6:	83 c2 23             	add    edx,0x23
  5d91f9:	2b c1                	sub    eax,ecx
  5d91fb:	83 c0 fc             	add    eax,0xfffffffc
  5d91fe:	83 f8 1f             	cmp    eax,0x1f
  5d9201:	76 06                	jbe    0x5d9209
  5d9203:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5d9209:	52                   	push   edx
  5d920a:	51                   	push   ecx
  5d920b:	e8 8a 8e e2 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5d9210:	83 c4 08             	add    esp,0x8
  5d9213:	a1 8c 8b 6d 00       	mov    eax,ds:0x6d8b8c ; ["userId"]
  5d9218:	89 45 d8             	mov    DWORD PTR [ebp-0x28],eax
  5d921b:	66 a1 90 8b 6d 00    	mov    ax,ds:0x6d8b90 ; ["Id"]
  5d9221:	c7 45 ec 0f 00 00 00 	mov    DWORD PTR [ebp-0x14],0xf
  5d9228:	c7 45 e8 06 00 00 00 	mov    DWORD PTR [ebp-0x18],0x6
  5d922f:	66 89 45 dc          	mov    WORD PTR [ebp-0x24],ax
  5d9233:	c6 45 de 00          	mov    BYTE PTR [ebp-0x22],0x0
  5d9237:	8d 45 90             	lea    eax,[ebp-0x70]
  5d923a:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  5d923e:	50                   	push   eax
  5d923f:	8d 45 d8             	lea    eax,[ebp-0x28]
  5d9242:	8b cf                	mov    ecx,edi
  5d9244:	50                   	push   eax
  5d9245:	ff d6                	call   esi
  5d9247:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  5d924a:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  5d924e:	83 fa 10             	cmp    edx,0x10
  5d9251:	0f 82 1d fd ff ff    	jb     0x5d8f74
  5d9257:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  5d925a:	42                   	inc    edx
  5d925b:	8b c1                	mov    eax,ecx
  5d925d:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5d9263:	0f 82 01 fd ff ff    	jb     0x5d8f6a
  5d9269:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5d926c:	83 c2 23             	add    edx,0x23
  5d926f:	2b c1                	sub    eax,ecx
  5d9271:	83 c0 fc             	add    eax,0xfffffffc
  5d9274:	83 f8 1f             	cmp    eax,0x1f
  5d9277:	0f 86 ed fc ff ff    	jbe    0x5d8f6a
  5d927d:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5d9283:	52                   	push   edx
  5d9284:	51                   	push   ecx
  5d9285:	e8 10 8e e2 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5d928a:	83 c4 08             	add    esp,0x8
  5d928d:	6a 06                	push   0x6
  5d928f:	c7 45 d8 00 00 00 00 	mov    DWORD PTR [ebp-0x28],0x0
  5d9296:	8d 4d d8             	lea    ecx,[ebp-0x28]
  5d9299:	68 1c aa 6d 00       	push   0x6daa1c ; ["source"]
  5d929e:	c7 45 e8 00 00 00 00 	mov    DWORD PTR [ebp-0x18],0x0
  5d92a5:	c7 45 ec 0f 00 00 00 	mov    DWORD PTR [ebp-0x14],0xf
  5d92ac:	c6 45 d8 00          	mov    BYTE PTR [ebp-0x28],0x0
  5d92b0:	e8 62 b1 e2 ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  5d92b5:	8d 45 a8             	lea    eax,[ebp-0x58]
  5d92b8:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  5d92bc:	50                   	push   eax
  5d92bd:	8d 45 d8             	lea    eax,[ebp-0x28]
  5d92c0:	8b cf                	mov    ecx,edi
  5d92c2:	50                   	push   eax
  5d92c3:	ff d6                	call   esi
  5d92c5:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  5d92c8:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  5d92cc:	83 fa 10             	cmp    edx,0x10
  5d92cf:	72 2e                	jb     0x5d92ff
  5d92d1:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  5d92d4:	42                   	inc    edx
  5d92d5:	8b c1                	mov    eax,ecx
  5d92d7:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5d92dd:	72 16                	jb     0x5d92f5
  5d92df:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5d92e2:	83 c2 23             	add    edx,0x23
  5d92e5:	2b c1                	sub    eax,ecx
  5d92e7:	83 c0 fc             	add    eax,0xfffffffc
  5d92ea:	83 f8 1f             	cmp    eax,0x1f
  5d92ed:	76 06                	jbe    0x5d92f5
  5d92ef:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5d92f5:	52                   	push   edx
  5d92f6:	51                   	push   ecx
  5d92f7:	e8 9e 8d e2 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5d92fc:	83 c4 08             	add    esp,0x8
  5d92ff:	6a 07                	push   0x7
  5d9301:	c7 45 d8 00 00 00 00 	mov    DWORD PTR [ebp-0x28],0x0
  5d9308:	8d 4d d8             	lea    ecx,[ebp-0x28]
  5d930b:	68 88 ac 6c 00       	push   0x6cac88 ; ["version"]
  5d9310:	c7 45 e8 00 00 00 00 	mov    DWORD PTR [ebp-0x18],0x0
  5d9317:	c7 45 ec 0f 00 00 00 	mov    DWORD PTR [ebp-0x14],0xf
  5d931e:	c6 45 d8 00          	mov    BYTE PTR [ebp-0x28],0x0
  5d9322:	e8 f0 b0 e2 ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  5d9327:	8d 85 30 ff ff ff    	lea    eax,[ebp-0xd0]
  5d932d:	c6 45 fc 0e          	mov    BYTE PTR [ebp-0x4],0xe
  5d9331:	50                   	push   eax
  5d9332:	8d 45 d8             	lea    eax,[ebp-0x28]
  5d9335:	8b cf                	mov    ecx,edi
  5d9337:	50                   	push   eax
  5d9338:	ff d6                	call   esi
  5d933a:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  5d933d:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  5d9341:	83 fa 10             	cmp    edx,0x10
  5d9344:	72 2e                	jb     0x5d9374
  5d9346:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  5d9349:	42                   	inc    edx
  5d934a:	8b c1                	mov    eax,ecx
  5d934c:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5d9352:	72 16                	jb     0x5d936a
  5d9354:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5d9357:	83 c2 23             	add    edx,0x23
  5d935a:	2b c1                	sub    eax,ecx
  5d935c:	83 c0 fc             	add    eax,0xfffffffc
  5d935f:	83 f8 1f             	cmp    eax,0x1f
  5d9362:	76 06                	jbe    0x5d936a
  5d9364:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5d936a:	52                   	push   edx
  5d936b:	51                   	push   ecx
  5d936c:	e8 29 8d e2 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5d9371:	83 c4 08             	add    esp,0x8
  5d9374:	6a 0b                	push   0xb
  5d9376:	c7 45 d8 00 00 00 00 	mov    DWORD PTR [ebp-0x28],0x0
  5d937d:	8d 4d d8             	lea    ecx,[ebp-0x28]
  5d9380:	68 a4 d9 6d 00       	push   0x6dd9a4 ; ["countryCode"]
  5d9385:	c7 45 e8 00 00 00 00 	mov    DWORD PTR [ebp-0x18],0x0
  5d938c:	c7 45 ec 0f 00 00 00 	mov    DWORD PTR [ebp-0x14],0xf
  5d9393:	c6 45 d8 00          	mov    BYTE PTR [ebp-0x28],0x0
  5d9397:	e8 7b b0 e2 ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  5d939c:	8d 85 48 ff ff ff    	lea    eax,[ebp-0xb8]
  5d93a2:	c6 45 fc 0f          	mov    BYTE PTR [ebp-0x4],0xf
  5d93a6:	50                   	push   eax
  5d93a7:	8d 45 d8             	lea    eax,[ebp-0x28]
  5d93aa:	8b cf                	mov    ecx,edi
  5d93ac:	50                   	push   eax
  5d93ad:	ff d6                	call   esi
  5d93af:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  5d93b2:	83 fa 10             	cmp    edx,0x10
  5d93b5:	72 2e                	jb     0x5d93e5
  5d93b7:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  5d93ba:	42                   	inc    edx
  5d93bb:	8b c1                	mov    eax,ecx
  5d93bd:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5d93c3:	72 16                	jb     0x5d93db
  5d93c5:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5d93c8:	83 c2 23             	add    edx,0x23
  5d93cb:	2b c1                	sub    eax,ecx
  5d93cd:	83 c0 fc             	add    eax,0xfffffffc
  5d93d0:	83 f8 1f             	cmp    eax,0x1f
  5d93d3:	76 06                	jbe    0x5d93db
  5d93d5:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5d93db:	52                   	push   edx
  5d93dc:	51                   	push   ecx
  5d93dd:	e8 b8 8c e2 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5d93e2:	83 c4 08             	add    esp,0x8
  5d93e5:	b3 01                	mov    bl,0x1
  5d93e7:	8b 95 5c ff ff ff    	mov    edx,DWORD PTR [ebp-0xa4]
  5d93ed:	83 fa 10             	cmp    edx,0x10
  5d93f0:	72 2f                	jb     0x5d9421
  5d93f2:	8b 8d 48 ff ff ff    	mov    ecx,DWORD PTR [ebp-0xb8]
  5d93f8:	42                   	inc    edx
  5d93f9:	8b c1                	mov    eax,ecx
  5d93fb:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5d9401:	72 14                	jb     0x5d9417
  5d9403:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5d9406:	83 c2 23             	add    edx,0x23
  5d9409:	2b c1                	sub    eax,ecx
  5d940b:	83 c0 fc             	add    eax,0xfffffffc
  5d940e:	83 f8 1f             	cmp    eax,0x1f
  5d9411:	0f 87 7a 01 00 00    	ja     0x5d9591
  5d9417:	52                   	push   edx
  5d9418:	51                   	push   ecx
  5d9419:	e8 7c 8c e2 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5d941e:	83 c4 08             	add    esp,0x8
  5d9421:	8b 55 8c             	mov    edx,DWORD PTR [ebp-0x74]
  5d9424:	c7 85 58 ff ff ff 00 	mov    DWORD PTR [ebp-0xa8],0x0
  5d942e:	c7 85 5c ff ff ff 0f 	mov    DWORD PTR [ebp-0xa4],0xf
  5d9438:	c6 85 48 ff ff ff 00 	mov    BYTE PTR [ebp-0xb8],0x0
  5d943f:	83 fa 10             	cmp    edx,0x10
  5d9442:	72 2f                	jb     0x5d9473
  5d9444:	8b 8d 78 ff ff ff    	mov    ecx,DWORD PTR [ebp-0x88]
  5d944a:	42                   	inc    edx
  5d944b:	8b c1                	mov    eax,ecx
  5d944d:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5d9453:	72 14                	jb     0x5d9469
  5d9455:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5d9458:	83 c2 23             	add    edx,0x23
  5d945b:	2b c1                	sub    eax,ecx
  5d945d:	83 c0 fc             	add    eax,0xfffffffc
  5d9460:	83 f8 1f             	cmp    eax,0x1f
  5d9463:	0f 87 28 01 00 00    	ja     0x5d9591
  5d9469:	52                   	push   edx
  5d946a:	51                   	push   ecx
  5d946b:	e8 2a 8c e2 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5d9470:	83 c4 08             	add    esp,0x8
  5d9473:	8b 55 a4             	mov    edx,DWORD PTR [ebp-0x5c]
  5d9476:	c7 45 88 00 00 00 00 	mov    DWORD PTR [ebp-0x78],0x0
  5d947d:	c7 45 8c 0f 00 00 00 	mov    DWORD PTR [ebp-0x74],0xf
  5d9484:	c6 85 78 ff ff ff 00 	mov    BYTE PTR [ebp-0x88],0x0
  5d948b:	83 fa 10             	cmp    edx,0x10
  5d948e:	72 2c                	jb     0x5d94bc
  5d9490:	8b 4d 90             	mov    ecx,DWORD PTR [ebp-0x70]
  5d9493:	42                   	inc    edx
  5d9494:	8b c1                	mov    eax,ecx
  5d9496:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5d949c:	72 14                	jb     0x5d94b2
  5d949e:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5d94a1:	83 c2 23             	add    edx,0x23
  5d94a4:	2b c1                	sub    eax,ecx
  5d94a6:	83 c0 fc             	add    eax,0xfffffffc
  5d94a9:	83 f8 1f             	cmp    eax,0x1f
  5d94ac:	0f 87 df 00 00 00    	ja     0x5d9591
  5d94b2:	52                   	push   edx
  5d94b3:	51                   	push   ecx
  5d94b4:	e8 e1 8b e2 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5d94b9:	83 c4 08             	add    esp,0x8
  5d94bc:	8b 95 44 ff ff ff    	mov    edx,DWORD PTR [ebp-0xbc]
  5d94c2:	c7 45 a0 00 00 00 00 	mov    DWORD PTR [ebp-0x60],0x0
  5d94c9:	c7 45 a4 0f 00 00 00 	mov    DWORD PTR [ebp-0x5c],0xf
  5d94d0:	c6 45 90 00          	mov    BYTE PTR [ebp-0x70],0x0
  5d94d4:	83 fa 10             	cmp    edx,0x10
  5d94d7:	72 2f                	jb     0x5d9508
  5d94d9:	8b 8d 30 ff ff ff    	mov    ecx,DWORD PTR [ebp-0xd0]
  5d94df:	42                   	inc    edx
  5d94e0:	8b c1                	mov    eax,ecx
  5d94e2:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5d94e8:	72 14                	jb     0x5d94fe
  5d94ea:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5d94ed:	83 c2 23             	add    edx,0x23
  5d94f0:	2b c1                	sub    eax,ecx
  5d94f2:	83 c0 fc             	add    eax,0xfffffffc
  5d94f5:	83 f8 1f             	cmp    eax,0x1f
  5d94f8:	0f 87 93 00 00 00    	ja     0x5d9591
  5d94fe:	52                   	push   edx
  5d94ff:	51                   	push   ecx
  5d9500:	e8 95 8b e2 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5d9505:	83 c4 08             	add    esp,0x8
  5d9508:	8b 55 bc             	mov    edx,DWORD PTR [ebp-0x44]
  5d950b:	c7 85 40 ff ff ff 00 	mov    DWORD PTR [ebp-0xc0],0x0
  5d9515:	c7 85 44 ff ff ff 0f 	mov    DWORD PTR [ebp-0xbc],0xf
  5d951f:	c6 85 30 ff ff ff 00 	mov    BYTE PTR [ebp-0xd0],0x0
  5d9526:	83 fa 10             	cmp    edx,0x10
  5d9529:	72 28                	jb     0x5d9553
  5d952b:	8b 4d a8             	mov    ecx,DWORD PTR [ebp-0x58]
  5d952e:	42                   	inc    edx
  5d952f:	8b c1                	mov    eax,ecx
  5d9531:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5d9537:	72 10                	jb     0x5d9549
  5d9539:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5d953c:	83 c2 23             	add    edx,0x23
  5d953f:	2b c1                	sub    eax,ecx
  5d9541:	83 c0 fc             	add    eax,0xfffffffc
  5d9544:	83 f8 1f             	cmp    eax,0x1f
  5d9547:	77 48                	ja     0x5d9591
  5d9549:	52                   	push   edx
  5d954a:	51                   	push   ecx
  5d954b:	e8 4a 8b e2 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5d9550:	83 c4 08             	add    esp,0x8
  5d9553:	8b 95 2c ff ff ff    	mov    edx,DWORD PTR [ebp-0xd4]
  5d9559:	c7 45 b8 00 00 00 00 	mov    DWORD PTR [ebp-0x48],0x0
  5d9560:	c7 45 bc 0f 00 00 00 	mov    DWORD PTR [ebp-0x44],0xf
  5d9567:	c6 45 a8 00          	mov    BYTE PTR [ebp-0x58],0x0
  5d956b:	83 fa 10             	cmp    edx,0x10
  5d956e:	72 31                	jb     0x5d95a1
  5d9570:	8b 8d 18 ff ff ff    	mov    ecx,DWORD PTR [ebp-0xe8]
  5d9576:	42                   	inc    edx
  5d9577:	8b c1                	mov    eax,ecx
  5d9579:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5d957f:	72 16                	jb     0x5d9597
  5d9581:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5d9584:	83 c2 23             	add    edx,0x23
  5d9587:	2b c1                	sub    eax,ecx
  5d9589:	83 c0 fc             	add    eax,0xfffffffc
  5d958c:	83 f8 1f             	cmp    eax,0x1f
  5d958f:	76 06                	jbe    0x5d9597
  5d9591:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5d9597:	52                   	push   edx
  5d9598:	51                   	push   ecx
  5d9599:	e8 fc 8a e2 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5d959e:	83 c4 08             	add    esp,0x8
  5d95a1:	8a c3                	mov    al,bl
  5d95a3:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  5d95a6:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  5d95ad:	59                   	pop    ecx
  5d95ae:	5f                   	pop    edi
  5d95af:	5e                   	pop    esi
  5d95b0:	5b                   	pop    ebx
  5d95b1:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  5d95b4:	33 cd                	xor    ecx,ebp
  5d95b6:	e8 d4 ae e2 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5d95bb:	8b e5                	mov    esp,ebp
  5d95bd:	5d                   	pop    ebp
  5d95be:	c2 08 00             	ret    0x8
