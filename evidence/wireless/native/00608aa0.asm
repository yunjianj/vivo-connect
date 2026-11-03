; SSDPSocket::createSocket; image base 0x400000; static annotation only
  608aa0:	83 ec 38             	sub    esp,0x38
  608aa3:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  608aa8:	33 c4                	xor    eax,esp
  608aaa:	89 44 24 34          	mov    DWORD PTR [esp+0x34],eax
  608aae:	53                   	push   ebx
  608aaf:	56                   	push   esi
  608ab0:	8b f1                	mov    esi,ecx
  608ab2:	b9 03 aa 7a 00       	mov    ecx,0x7aaa03
  608ab7:	57                   	push   edi
  608ab8:	e8 31 00 e0 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  608abd:	6a 11                	push   0x11
  608abf:	6a 02                	push   0x2
  608ac1:	6a 02                	push   0x2
  608ac3:	ff 15 cc d8 79 00    	call   DWORD PTR ds:0x79d8cc
  608ac9:	89 06                	mov    DWORD PTR [esi],eax
  608acb:	83 f8 ff             	cmp    eax,0xffffffff
  608ace:	75 15                	jne    0x608ae5
  608ad0:	6a 18                	push   0x18
  608ad2:	68 98 5d 6f 00       	push   0x6f5d98
  608ad7:	68 30 5e 6f 00       	push   0x6f5e30
  608adc:	ff 15 30 e4 79 00    	call   DWORD PTR ds:0x79e430
  608ae2:	83 c4 0c             	add    esp,0xc
  608ae5:	8b 44 24 48          	mov    eax,DWORD PTR [esp+0x48]
  608ae9:	8d 7e 04             	lea    edi,[esi+0x4]
  608aec:	0f 57 c0             	xorps  xmm0,xmm0
  608aef:	0f 11 07             	movups XMMWORD PTR [edi],xmm0
  608af2:	68 98 08 00 00       	push   0x898
  608af7:	89 46 08             	mov    DWORD PTR [esi+0x8],eax
  608afa:	ff 15 e8 d8 79 00    	call   DWORD PTR ds:0x79d8e8
  608b00:	66 89 46 06          	mov    WORD PTR [esi+0x6],ax
  608b04:	b8 02 00 00 00       	mov    eax,0x2
  608b09:	66 89 07             	mov    WORD PTR [edi],ax
  608b0c:	8d 44 24 10          	lea    eax,[esp+0x10]
  608b10:	50                   	push   eax
  608b11:	68 7e 66 04 80       	push   0x8004667e
  608b16:	ff 36                	push   DWORD PTR [esi]
  608b18:	c7 44 24 1c 01 00 00 	mov    DWORD PTR [esp+0x1c],0x1
  608b20:	ff 15 c4 d8 79 00    	call   DWORD PTR ds:0x79d8c4
  608b26:	85 c0                	test   eax,eax
  608b28:	0f 84 87 00 00 00    	je     0x608bb5
  608b2e:	6a 5c                	push   0x5c
  608b30:	68 94 5e 6f 00       	push   0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  608b35:	e8 2c fc 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  608b3a:	83 c4 08             	add    esp,0x8
  608b3d:	85 c0                	test   eax,eax
  608b3f:	74 12                	je     0x608b53
  608b41:	6a 5c                	push   0x5c
  608b43:	68 94 5e 6f 00       	push   0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  608b48:	e8 19 fc 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  608b4d:	83 c4 08             	add    esp,0x8
  608b50:	40                   	inc    eax
  608b51:	eb 05                	jmp    0x608b58
  608b53:	b8 94 5e 6f 00       	mov    eax,0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  608b58:	68 74 5e 6f 00       	push   0x6f5e74 ; ["SSDPSocket::createSocket"]
  608b5d:	6a 21                	push   0x21
  608b5f:	50                   	push   eax
  608b60:	68 e0 5e 6f 00       	push   0x6f5ee0 ; ["[ConntctionModule][%s:%d][%s]: set non blocking fail ..."]
  608b65:	8d 44 24 1c          	lea    eax,[esp+0x1c]
  608b69:	c7 44 24 1c 02 00 00 	mov    DWORD PTR [esp+0x1c],0x2
  608b71:	50                   	push   eax
  608b72:	8d 44 24 3c          	lea    eax,[esp+0x3c]
  608b76:	50                   	push   eax
  608b77:	e8 8d e4 df ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  608b7c:	8b 54 24 54          	mov    edx,DWORD PTR [esp+0x54]
  608b80:	83 c4 18             	add    esp,0x18
  608b83:	83 fa 10             	cmp    edx,0x10
  608b86:	72 2d                	jb     0x608bb5
  608b88:	8b 4c 24 28          	mov    ecx,DWORD PTR [esp+0x28]
  608b8c:	42                   	inc    edx
  608b8d:	8b c1                	mov    eax,ecx
  608b8f:	81 fa 00 10 00 00    	cmp    edx,0x1000
  608b95:	72 14                	jb     0x608bab
  608b97:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  608b9a:	83 c2 23             	add    edx,0x23
  608b9d:	2b c1                	sub    eax,ecx
  608b9f:	83 c0 fc             	add    eax,0xfffffffc
  608ba2:	83 f8 1f             	cmp    eax,0x1f
  608ba5:	0f 87 4a 03 00 00    	ja     0x608ef5
  608bab:	52                   	push   edx
  608bac:	51                   	push   ecx
  608bad:	e8 e8 94 df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  608bb2:	83 c4 08             	add    esp,0x8
  608bb5:	8b 1d c8 d8 79 00    	mov    ebx,DWORD PTR ds:0x79d8c8
  608bbb:	8d 44 24 14          	lea    eax,[esp+0x14]
  608bbf:	6a 04                	push   0x4
  608bc1:	50                   	push   eax
  608bc2:	6a 04                	push   0x4
  608bc4:	68 ff ff 00 00       	push   0xffff
  608bc9:	ff 36                	push   DWORD PTR [esi]
  608bcb:	c7 44 24 28 01 00 00 	mov    DWORD PTR [esp+0x28],0x1
  608bd3:	ff d3                	call   ebx
  608bd5:	85 c0                	test   eax,eax
  608bd7:	0f 84 87 00 00 00    	je     0x608c64
  608bdd:	6a 5c                	push   0x5c
  608bdf:	68 94 5e 6f 00       	push   0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  608be4:	e8 7d fb 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  608be9:	83 c4 08             	add    esp,0x8
  608bec:	85 c0                	test   eax,eax
  608bee:	74 12                	je     0x608c02
  608bf0:	6a 5c                	push   0x5c
  608bf2:	68 94 5e 6f 00       	push   0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  608bf7:	e8 6a fb 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  608bfc:	83 c4 08             	add    esp,0x8
  608bff:	40                   	inc    eax
  608c00:	eb 05                	jmp    0x608c07
  608c02:	b8 94 5e 6f 00       	mov    eax,0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  608c07:	68 74 5e 6f 00       	push   0x6f5e74 ; ["SSDPSocket::createSocket"]
  608c0c:	6a 26                	push   0x26
  608c0e:	50                   	push   eax
  608c0f:	68 24 5f 6f 00       	push   0x6f5f24 ; ["[ConntctionModule][%s:%d][%s]: set reuse fail ..."]
  608c14:	8d 44 24 1c          	lea    eax,[esp+0x1c]
  608c18:	c7 44 24 1c 02 00 00 	mov    DWORD PTR [esp+0x1c],0x2
  608c20:	50                   	push   eax
  608c21:	8d 44 24 3c          	lea    eax,[esp+0x3c]
  608c25:	50                   	push   eax
  608c26:	e8 de e3 df ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  608c2b:	8b 54 24 54          	mov    edx,DWORD PTR [esp+0x54]
  608c2f:	83 c4 18             	add    esp,0x18
  608c32:	83 fa 10             	cmp    edx,0x10
  608c35:	72 2d                	jb     0x608c64
  608c37:	8b 4c 24 28          	mov    ecx,DWORD PTR [esp+0x28]
  608c3b:	42                   	inc    edx
  608c3c:	8b c1                	mov    eax,ecx
  608c3e:	81 fa 00 10 00 00    	cmp    edx,0x1000
  608c44:	72 14                	jb     0x608c5a
  608c46:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  608c49:	83 c2 23             	add    edx,0x23
  608c4c:	2b c1                	sub    eax,ecx
  608c4e:	83 c0 fc             	add    eax,0xfffffffc
  608c51:	83 f8 1f             	cmp    eax,0x1f
  608c54:	0f 87 9b 02 00 00    	ja     0x608ef5
  608c5a:	52                   	push   edx
  608c5b:	51                   	push   ecx
  608c5c:	e8 39 94 df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  608c61:	83 c4 08             	add    esp,0x8
  608c64:	6a 04                	push   0x4
  608c66:	8d 44 24 1c          	lea    eax,[esp+0x1c]
  608c6a:	c7 44 24 1c 01 00 00 	mov    DWORD PTR [esp+0x1c],0x1
  608c72:	50                   	push   eax
  608c73:	6a 20                	push   0x20
  608c75:	68 ff ff 00 00       	push   0xffff
  608c7a:	ff 36                	push   DWORD PTR [esi]
  608c7c:	ff d3                	call   ebx
  608c7e:	85 c0                	test   eax,eax
  608c80:	0f 84 87 00 00 00    	je     0x608d0d
  608c86:	6a 5c                	push   0x5c
  608c88:	68 94 5e 6f 00       	push   0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  608c8d:	e8 d4 fa 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  608c92:	83 c4 08             	add    esp,0x8
  608c95:	85 c0                	test   eax,eax
  608c97:	74 12                	je     0x608cab
  608c99:	6a 5c                	push   0x5c
  608c9b:	68 94 5e 6f 00       	push   0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  608ca0:	e8 c1 fa 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  608ca5:	83 c4 08             	add    esp,0x8
  608ca8:	40                   	inc    eax
  608ca9:	eb 05                	jmp    0x608cb0
  608cab:	b8 94 5e 6f 00       	mov    eax,0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  608cb0:	68 74 5e 6f 00       	push   0x6f5e74 ; ["SSDPSocket::createSocket"]
  608cb5:	6a 2b                	push   0x2b
  608cb7:	50                   	push   eax
  608cb8:	68 60 5f 6f 00       	push   0x6f5f60 ; ["[ConntctionModule][%s:%d][%s]: set udp broadcast fail ..."]
  608cbd:	8d 44 24 1c          	lea    eax,[esp+0x1c]
  608cc1:	c7 44 24 1c 02 00 00 	mov    DWORD PTR [esp+0x1c],0x2
  608cc9:	50                   	push   eax
  608cca:	8d 44 24 3c          	lea    eax,[esp+0x3c]
  608cce:	50                   	push   eax
  608ccf:	e8 35 e3 df ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  608cd4:	8b 54 24 54          	mov    edx,DWORD PTR [esp+0x54]
  608cd8:	83 c4 18             	add    esp,0x18
  608cdb:	83 fa 10             	cmp    edx,0x10
  608cde:	72 2d                	jb     0x608d0d
  608ce0:	8b 4c 24 28          	mov    ecx,DWORD PTR [esp+0x28]
  608ce4:	42                   	inc    edx
  608ce5:	8b c1                	mov    eax,ecx
  608ce7:	81 fa 00 10 00 00    	cmp    edx,0x1000
  608ced:	72 14                	jb     0x608d03
  608cef:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  608cf2:	83 c2 23             	add    edx,0x23
  608cf5:	2b c1                	sub    eax,ecx
  608cf7:	83 c0 fc             	add    eax,0xfffffffc
  608cfa:	83 f8 1f             	cmp    eax,0x1f
  608cfd:	0f 87 f2 01 00 00    	ja     0x608ef5
  608d03:	52                   	push   edx
  608d04:	51                   	push   ecx
  608d05:	e8 90 93 df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  608d0a:	83 c4 08             	add    esp,0x8
  608d0d:	6a 10                	push   0x10
  608d0f:	57                   	push   edi
  608d10:	ff 36                	push   DWORD PTR [esi]
  608d12:	ff 15 90 d8 79 00    	call   DWORD PTR ds:0x79d890
  608d18:	85 c0                	test   eax,eax
  608d1a:	0f 84 87 00 00 00    	je     0x608da7
  608d20:	6a 5c                	push   0x5c
  608d22:	68 94 5e 6f 00       	push   0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  608d27:	e8 3a fa 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  608d2c:	83 c4 08             	add    esp,0x8
  608d2f:	85 c0                	test   eax,eax
  608d31:	74 12                	je     0x608d45
  608d33:	6a 5c                	push   0x5c
  608d35:	68 94 5e 6f 00       	push   0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  608d3a:	e8 27 fa 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  608d3f:	83 c4 08             	add    esp,0x8
  608d42:	40                   	inc    eax
  608d43:	eb 05                	jmp    0x608d4a
  608d45:	b8 94 5e 6f 00       	mov    eax,0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  608d4a:	68 74 5e 6f 00       	push   0x6f5e74 ; ["SSDPSocket::createSocket"]
  608d4f:	6a 2f                	push   0x2f
  608d51:	50                   	push   eax
  608d52:	68 a8 5f 6f 00       	push   0x6f5fa8 ; ["[ConntctionModule][%s:%d][%s]: udp bind fail ..."]
  608d57:	8d 44 24 1c          	lea    eax,[esp+0x1c]
  608d5b:	c7 44 24 1c 02 00 00 	mov    DWORD PTR [esp+0x1c],0x2
  608d63:	50                   	push   eax
  608d64:	8d 44 24 3c          	lea    eax,[esp+0x3c]
  608d68:	50                   	push   eax
  608d69:	e8 9b e2 df ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  608d6e:	8b 54 24 54          	mov    edx,DWORD PTR [esp+0x54]
  608d72:	83 c4 18             	add    esp,0x18
  608d75:	83 fa 10             	cmp    edx,0x10
  608d78:	72 2d                	jb     0x608da7
  608d7a:	8b 4c 24 28          	mov    ecx,DWORD PTR [esp+0x28]
  608d7e:	42                   	inc    edx
  608d7f:	8b c1                	mov    eax,ecx
  608d81:	81 fa 00 10 00 00    	cmp    edx,0x1000
  608d87:	72 14                	jb     0x608d9d
  608d89:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  608d8c:	83 c2 23             	add    edx,0x23
  608d8f:	2b c1                	sub    eax,ecx
  608d91:	83 c0 fc             	add    eax,0xfffffffc
  608d94:	83 f8 1f             	cmp    eax,0x1f
  608d97:	0f 87 58 01 00 00    	ja     0x608ef5
  608d9d:	52                   	push   edx
  608d9e:	51                   	push   ecx
  608d9f:	e8 f6 92 df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  608da4:	83 c4 08             	add    esp,0x8
  608da7:	6a 04                	push   0x4
  608da9:	8d 44 24 20          	lea    eax,[esp+0x20]
  608dad:	c7 44 24 20 01 00 00 	mov    DWORD PTR [esp+0x20],0x1
  608db5:	50                   	push   eax
  608db6:	6a 0b                	push   0xb
  608db8:	6a 00                	push   0x0
  608dba:	ff 36                	push   DWORD PTR [esi]
  608dbc:	ff d3                	call   ebx
  608dbe:	85 c0                	test   eax,eax
  608dc0:	0f 89 87 00 00 00    	jns    0x608e4d
  608dc6:	6a 5c                	push   0x5c
  608dc8:	68 94 5e 6f 00       	push   0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  608dcd:	e8 94 f9 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  608dd2:	83 c4 08             	add    esp,0x8
  608dd5:	85 c0                	test   eax,eax
  608dd7:	74 12                	je     0x608deb
  608dd9:	6a 5c                	push   0x5c
  608ddb:	68 94 5e 6f 00       	push   0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  608de0:	e8 81 f9 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  608de5:	83 c4 08             	add    esp,0x8
  608de8:	40                   	inc    eax
  608de9:	eb 05                	jmp    0x608df0
  608deb:	b8 94 5e 6f 00       	mov    eax,0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  608df0:	68 74 5e 6f 00       	push   0x6f5e74 ; ["SSDPSocket::createSocket"]
  608df5:	6a 34                	push   0x34
  608df7:	50                   	push   eax
  608df8:	68 e4 5f 6f 00       	push   0x6f5fe4 ; ["[ConntctionModule][%s:%d][%s]: multicast loopback fail ..."]
  608dfd:	8d 44 24 1c          	lea    eax,[esp+0x1c]
  608e01:	c7 44 24 1c 02 00 00 	mov    DWORD PTR [esp+0x1c],0x2
  608e09:	50                   	push   eax
  608e0a:	8d 44 24 3c          	lea    eax,[esp+0x3c]
  608e0e:	50                   	push   eax
  608e0f:	e8 f5 e1 df ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  608e14:	8b 54 24 54          	mov    edx,DWORD PTR [esp+0x54]
  608e18:	83 c4 18             	add    esp,0x18
  608e1b:	83 fa 10             	cmp    edx,0x10
  608e1e:	72 2d                	jb     0x608e4d
  608e20:	8b 4c 24 28          	mov    ecx,DWORD PTR [esp+0x28]
  608e24:	42                   	inc    edx
  608e25:	8b c1                	mov    eax,ecx
  608e27:	81 fa 00 10 00 00    	cmp    edx,0x1000
  608e2d:	72 14                	jb     0x608e43
  608e2f:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  608e32:	83 c2 23             	add    edx,0x23
  608e35:	2b c1                	sub    eax,ecx
  608e37:	83 c0 fc             	add    eax,0xfffffffc
  608e3a:	83 f8 1f             	cmp    eax,0x1f
  608e3d:	0f 87 b2 00 00 00    	ja     0x608ef5
  608e43:	52                   	push   edx
  608e44:	51                   	push   ecx
  608e45:	e8 50 92 df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  608e4a:	83 c4 08             	add    esp,0x8
  608e4d:	8b 3d d8 d8 79 00    	mov    edi,DWORD PTR ds:0x79d8d8
  608e53:	68 2c 60 6f 00       	push   0x6f602c ; ["239.255.255.250"]
  608e58:	ff d7                	call   edi
  608e5a:	89 44 24 20          	mov    DWORD PTR [esp+0x20],eax
  608e5e:	8b 46 08             	mov    eax,DWORD PTR [esi+0x8]
  608e61:	6a 08                	push   0x8
  608e63:	89 44 24 28          	mov    DWORD PTR [esp+0x28],eax
  608e67:	8d 44 24 24          	lea    eax,[esp+0x24]
  608e6b:	50                   	push   eax
  608e6c:	6a 0c                	push   0xc
  608e6e:	6a 00                	push   0x0
  608e70:	ff 36                	push   DWORD PTR [esi]
  608e72:	ff d3                	call   ebx
  608e74:	85 c0                	test   eax,eax
  608e76:	0f 89 89 00 00 00    	jns    0x608f05
  608e7c:	6a 5c                	push   0x5c
  608e7e:	68 94 5e 6f 00       	push   0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  608e83:	e8 de f8 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  608e88:	83 c4 08             	add    esp,0x8
  608e8b:	85 c0                	test   eax,eax
  608e8d:	74 12                	je     0x608ea1
  608e8f:	6a 5c                	push   0x5c
  608e91:	68 94 5e 6f 00       	push   0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  608e96:	e8 cb f8 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  608e9b:	83 c4 08             	add    esp,0x8
  608e9e:	40                   	inc    eax
  608e9f:	eb 05                	jmp    0x608ea6
  608ea1:	b8 94 5e 6f 00       	mov    eax,0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  608ea6:	68 74 5e 6f 00       	push   0x6f5e74 ; ["SSDPSocket::createSocket"]
  608eab:	6a 3d                	push   0x3d
  608ead:	50                   	push   eax
  608eae:	68 40 60 6f 00       	push   0x6f6040 ; ["[ConntctionModule][%s:%d][%s]: add ip membership fail ..."]
  608eb3:	8d 44 24 1c          	lea    eax,[esp+0x1c]
  608eb7:	c7 44 24 1c 02 00 00 	mov    DWORD PTR [esp+0x1c],0x2
  608ebf:	50                   	push   eax
  608ec0:	8d 44 24 3c          	lea    eax,[esp+0x3c]
  608ec4:	50                   	push   eax
  608ec5:	e8 3f e1 df ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  608eca:	8b 54 24 54          	mov    edx,DWORD PTR [esp+0x54]
  608ece:	83 c4 18             	add    esp,0x18
  608ed1:	83 fa 10             	cmp    edx,0x10
  608ed4:	72 2f                	jb     0x608f05
  608ed6:	8b 4c 24 28          	mov    ecx,DWORD PTR [esp+0x28]
  608eda:	42                   	inc    edx
  608edb:	8b c1                	mov    eax,ecx
  608edd:	81 fa 00 10 00 00    	cmp    edx,0x1000
  608ee3:	72 16                	jb     0x608efb
  608ee5:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  608ee8:	83 c2 23             	add    edx,0x23
  608eeb:	2b c1                	sub    eax,ecx
  608eed:	83 c0 fc             	add    eax,0xfffffffc
  608ef0:	83 f8 1f             	cmp    eax,0x1f
  608ef3:	76 06                	jbe    0x608efb
  608ef5:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  608efb:	52                   	push   edx
  608efc:	51                   	push   ecx
  608efd:	e8 98 91 df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  608f02:	83 c4 08             	add    esp,0x8
  608f05:	b8 02 00 00 00       	mov    eax,0x2
  608f0a:	68 98 08 00 00       	push   0x898
  608f0f:	66 89 46 14          	mov    WORD PTR [esi+0x14],ax
  608f13:	ff 15 e8 d8 79 00    	call   DWORD PTR ds:0x79d8e8
  608f19:	68 2c 60 6f 00       	push   0x6f602c ; ["239.255.255.250"]
  608f1e:	66 89 46 16          	mov    WORD PTR [esi+0x16],ax
  608f22:	ff d7                	call   edi
  608f24:	8b 4c 24 40          	mov    ecx,DWORD PTR [esp+0x40]
  608f28:	5f                   	pop    edi
  608f29:	89 46 18             	mov    DWORD PTR [esi+0x18],eax
  608f2c:	5e                   	pop    esi
  608f2d:	5b                   	pop    ebx
  608f2e:	33 cc                	xor    ecx,esp
  608f30:	e8 5a b5 df ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  608f35:	83 c4 38             	add    esp,0x38
  608f38:	c2 04 00             	ret    0x4
