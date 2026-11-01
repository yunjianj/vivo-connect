; TcpSocketBase::init; image base 0x400000; static annotation only
  5fd9f0:	81 ec d8 03 00 00    	sub    esp,0x3d8
  5fd9f6:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5fd9fb:	33 c4                	xor    eax,esp
  5fd9fd:	89 84 24 d4 03 00 00 	mov    DWORD PTR [esp+0x3d4],eax
  5fda04:	8b 84 24 e4 03 00 00 	mov    eax,DWORD PTR [esp+0x3e4]
  5fda0b:	53                   	push   ebx
  5fda0c:	8b 9c 24 e0 03 00 00 	mov    ebx,DWORD PTR [esp+0x3e0]
  5fda13:	55                   	push   ebp
  5fda14:	8b ac 24 e8 03 00 00 	mov    ebp,DWORD PTR [esp+0x3e8]
  5fda1b:	56                   	push   esi
  5fda1c:	8b f1                	mov    esi,ecx
  5fda1e:	89 44 24 14          	mov    DWORD PTR [esp+0x14],eax
  5fda22:	57                   	push   edi
  5fda23:	b9 3e a7 7a 00       	mov    ecx,0x7aa73e
  5fda28:	e8 c1 b0 e0 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5fda2d:	8b 7d 00             	mov    edi,DWORD PTR [ebp+0x0]
  5fda30:	6a 5c                	push   0x5c
  5fda32:	68 b8 4a 6f 00       	push   0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fda37:	e8 2a ad 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fda3c:	83 c4 08             	add    esp,0x8
  5fda3f:	85 c0                	test   eax,eax
  5fda41:	74 12                	je     0x5fda55
  5fda43:	6a 5c                	push   0x5c
  5fda45:	68 b8 4a 6f 00       	push   0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fda4a:	e8 17 ad 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fda4f:	83 c4 08             	add    esp,0x8
  5fda52:	40                   	inc    eax
  5fda53:	eb 05                	jmp    0x5fda5a
  5fda55:	b8 b8 4a 6f 00       	mov    eax,0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fda5a:	57                   	push   edi
  5fda5b:	53                   	push   ebx
  5fda5c:	68 9c 4a 6f 00       	push   0x6f4a9c ; ["TcpSocketBase::init"]
  5fda61:	6a 0e                	push   0xe
  5fda63:	50                   	push   eax
  5fda64:	68 08 4b 6f 00       	push   0x6f4b08 ; ["[ConntctionModule][%s:%d][%s]: Tcpsocket init ip is: %s, port is: %d\n"]
  5fda69:	8d 44 24 28          	lea    eax,[esp+0x28]
  5fda6d:	c7 44 24 28 02 00 00 	mov    DWORD PTR [esp+0x28],0x2
  5fda75:	50                   	push   eax
  5fda76:	8d 44 24 40          	lea    eax,[esp+0x40]
  5fda7a:	50                   	push   eax
  5fda7b:	e8 89 95 e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5fda80:	8b 54 24 58          	mov    edx,DWORD PTR [esp+0x58]
  5fda84:	83 c4 20             	add    esp,0x20
  5fda87:	83 fa 10             	cmp    edx,0x10
  5fda8a:	72 2d                	jb     0x5fdab9
  5fda8c:	8b 4c 24 24          	mov    ecx,DWORD PTR [esp+0x24]
  5fda90:	42                   	inc    edx
  5fda91:	8b c1                	mov    eax,ecx
  5fda93:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5fda99:	72 14                	jb     0x5fdaaf
  5fda9b:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5fda9e:	83 c2 23             	add    edx,0x23
  5fdaa1:	2b c1                	sub    eax,ecx
  5fdaa3:	83 c0 fc             	add    eax,0xfffffffc
  5fdaa6:	83 f8 1f             	cmp    eax,0x1f
  5fdaa9:	0f 87 8a 01 00 00    	ja     0x5fdc39
  5fdaaf:	52                   	push   edx
  5fdab0:	51                   	push   ecx
  5fdab1:	e8 e4 45 e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5fdab6:	83 c4 08             	add    esp,0x8
  5fdab9:	83 7e 04 00          	cmp    DWORD PTR [esi+0x4],0x0
  5fdabd:	0f 84 87 00 00 00    	je     0x5fdb4a
  5fdac3:	6a 5c                	push   0x5c
  5fdac5:	68 b8 4a 6f 00       	push   0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fdaca:	e8 97 ac 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fdacf:	83 c4 08             	add    esp,0x8
  5fdad2:	85 c0                	test   eax,eax
  5fdad4:	74 12                	je     0x5fdae8
  5fdad6:	6a 5c                	push   0x5c
  5fdad8:	68 b8 4a 6f 00       	push   0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fdadd:	e8 84 ac 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fdae2:	83 c4 08             	add    esp,0x8
  5fdae5:	40                   	inc    eax
  5fdae6:	eb 05                	jmp    0x5fdaed
  5fdae8:	b8 b8 4a 6f 00       	mov    eax,0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fdaed:	68 9c 4a 6f 00       	push   0x6f4a9c ; ["TcpSocketBase::init"]
  5fdaf2:	6a 11                	push   0x11
  5fdaf4:	50                   	push   eax
  5fdaf5:	68 5c 4b 6f 00       	push   0x6f4b5c ; ["[ConntctionModule][%s:%d][%s]: clientSocket is already exist \n"]
  5fdafa:	8d 44 24 20          	lea    eax,[esp+0x20]
  5fdafe:	c7 44 24 20 02 00 00 	mov    DWORD PTR [esp+0x20],0x2
  5fdb06:	50                   	push   eax
  5fdb07:	8d 44 24 38          	lea    eax,[esp+0x38]
  5fdb0b:	50                   	push   eax
  5fdb0c:	e8 f8 94 e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5fdb11:	8b 54 24 50          	mov    edx,DWORD PTR [esp+0x50]
  5fdb15:	83 c4 18             	add    esp,0x18
  5fdb18:	83 fa 10             	cmp    edx,0x10
  5fdb1b:	72 2d                	jb     0x5fdb4a
  5fdb1d:	8b 4c 24 24          	mov    ecx,DWORD PTR [esp+0x24]
  5fdb21:	42                   	inc    edx
  5fdb22:	8b c1                	mov    eax,ecx
  5fdb24:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5fdb2a:	72 14                	jb     0x5fdb40
  5fdb2c:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5fdb2f:	83 c2 23             	add    edx,0x23
  5fdb32:	2b c1                	sub    eax,ecx
  5fdb34:	83 c0 fc             	add    eax,0xfffffffc
  5fdb37:	83 f8 1f             	cmp    eax,0x1f
  5fdb3a:	0f 87 f9 00 00 00    	ja     0x5fdc39
  5fdb40:	52                   	push   edx
  5fdb41:	51                   	push   ecx
  5fdb42:	e8 53 45 e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5fdb47:	83 c4 08             	add    esp,0x8
  5fdb4a:	8d 84 24 54 02 00 00 	lea    eax,[esp+0x254]
  5fdb51:	50                   	push   eax
  5fdb52:	68 02 02 00 00       	push   0x202
  5fdb57:	ff 15 b0 d8 79 00    	call   DWORD PTR ds:0x79d8b0
  5fdb5d:	0f 57 c0             	xorps  xmm0,xmm0
  5fdb60:	b8 02 00 00 00       	mov    eax,0x2
  5fdb65:	53                   	push   ebx
  5fdb66:	66 0f 13 44 24 48    	movlpd QWORD PTR [esp+0x48],xmm0
  5fdb6c:	66 89 44 24 40       	mov    WORD PTR [esp+0x40],ax
  5fdb71:	ff 15 d8 d8 79 00    	call   DWORD PTR ds:0x79d8d8
  5fdb77:	89 44 24 40          	mov    DWORD PTR [esp+0x40],eax
  5fdb7b:	0f b7 45 00          	movzx  eax,WORD PTR [ebp+0x0]
  5fdb7f:	50                   	push   eax
  5fdb80:	ff 15 e8 d8 79 00    	call   DWORD PTR ds:0x79d8e8
  5fdb86:	6a 06                	push   0x6
  5fdb88:	6a 01                	push   0x1
  5fdb8a:	6a 02                	push   0x2
  5fdb8c:	66 89 44 24 4a       	mov    WORD PTR [esp+0x4a],ax
  5fdb91:	ff 15 cc d8 79 00    	call   DWORD PTR ds:0x79d8cc
  5fdb97:	8b 2d c4 d8 79 00    	mov    ebp,DWORD PTR ds:0x79d8c4
  5fdb9d:	8d 4c 24 14          	lea    ecx,[esp+0x14]
  5fdba1:	51                   	push   ecx
  5fdba2:	68 7e 66 04 80       	push   0x8004667e
  5fdba7:	50                   	push   eax
  5fdba8:	89 46 04             	mov    DWORD PTR [esi+0x4],eax
  5fdbab:	c7 44 24 20 01 00 00 	mov    DWORD PTR [esp+0x20],0x1
  5fdbb3:	ff d5                	call   ebp
  5fdbb5:	8b f8                	mov    edi,eax
  5fdbb7:	85 ff                	test   edi,edi
  5fdbb9:	0f 84 8a 00 00 00    	je     0x5fdc49
  5fdbbf:	6a 5c                	push   0x5c
  5fdbc1:	68 b8 4a 6f 00       	push   0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fdbc6:	e8 9b ab 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fdbcb:	83 c4 08             	add    esp,0x8
  5fdbce:	85 c0                	test   eax,eax
  5fdbd0:	74 12                	je     0x5fdbe4
  5fdbd2:	6a 5c                	push   0x5c
  5fdbd4:	68 b8 4a 6f 00       	push   0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fdbd9:	e8 88 ab 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fdbde:	83 c4 08             	add    esp,0x8
  5fdbe1:	40                   	inc    eax
  5fdbe2:	eb 05                	jmp    0x5fdbe9
  5fdbe4:	b8 b8 4a 6f 00       	mov    eax,0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fdbe9:	57                   	push   edi
  5fdbea:	68 9c 4a 6f 00       	push   0x6f4a9c ; ["TcpSocketBase::init"]
  5fdbef:	6a 3b                	push   0x3b
  5fdbf1:	50                   	push   eax
  5fdbf2:	68 b8 48 6f 00       	push   0x6f48b8 ; ["[ConntctionModule][%s:%d][%s]: ioctlsocket1 failed with error: %ld\n"]
  5fdbf7:	8d 44 24 24          	lea    eax,[esp+0x24]
  5fdbfb:	c7 44 24 24 02 00 00 	mov    DWORD PTR [esp+0x24],0x2
  5fdc03:	50                   	push   eax
  5fdc04:	8d 44 24 3c          	lea    eax,[esp+0x3c]
  5fdc08:	50                   	push   eax
  5fdc09:	e8 fb 93 e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5fdc0e:	8b 54 24 54          	mov    edx,DWORD PTR [esp+0x54]
  5fdc12:	83 c4 1c             	add    esp,0x1c
  5fdc15:	83 fa 10             	cmp    edx,0x10
  5fdc18:	72 2f                	jb     0x5fdc49
  5fdc1a:	8b 4c 24 24          	mov    ecx,DWORD PTR [esp+0x24]
  5fdc1e:	42                   	inc    edx
  5fdc1f:	8b c1                	mov    eax,ecx
  5fdc21:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5fdc27:	72 16                	jb     0x5fdc3f
  5fdc29:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5fdc2c:	83 c2 23             	add    edx,0x23
  5fdc2f:	2b c1                	sub    eax,ecx
  5fdc31:	83 c0 fc             	add    eax,0xfffffffc
  5fdc34:	83 f8 1f             	cmp    eax,0x1f
  5fdc37:	76 06                	jbe    0x5fdc3f
  5fdc39:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5fdc3f:	52                   	push   edx
  5fdc40:	51                   	push   ecx
  5fdc41:	e8 54 44 e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5fdc46:	83 c4 08             	add    esp,0x8
  5fdc49:	6a 10                	push   0x10
  5fdc4b:	8d 44 24 40          	lea    eax,[esp+0x40]
  5fdc4f:	50                   	push   eax
  5fdc50:	ff 76 04             	push   DWORD PTR [esi+0x4]
  5fdc53:	ff 15 ec d8 79 00    	call   DWORD PTR ds:0x79d8ec
  5fdc59:	83 f8 ff             	cmp    eax,0xffffffff
  5fdc5c:	0f 85 b3 01 00 00    	jne    0x5fde15
  5fdc62:	c7 44 24 14 00 00 00 	mov    DWORD PTR [esp+0x14],0x0
  5fdc6a:	ff 15 a4 d8 79 00    	call   DWORD PTR ds:0x79d8a4
  5fdc70:	8b d8                	mov    ebx,eax
  5fdc72:	8d 44 24 14          	lea    eax,[esp+0x14]
  5fdc76:	50                   	push   eax
  5fdc77:	68 7e 66 04 80       	push   0x8004667e
  5fdc7c:	ff 76 04             	push   DWORD PTR [esi+0x4]
  5fdc7f:	ff d5                	call   ebp
  5fdc81:	8b f8                	mov    edi,eax
  5fdc83:	85 ff                	test   edi,edi
  5fdc85:	0f 84 88 00 00 00    	je     0x5fdd13
  5fdc8b:	6a 5c                	push   0x5c
  5fdc8d:	68 b8 4a 6f 00       	push   0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fdc92:	e8 cf aa 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fdc97:	83 c4 08             	add    esp,0x8
  5fdc9a:	85 c0                	test   eax,eax
  5fdc9c:	74 12                	je     0x5fdcb0
  5fdc9e:	6a 5c                	push   0x5c
  5fdca0:	68 b8 4a 6f 00       	push   0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fdca5:	e8 bc aa 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fdcaa:	83 c4 08             	add    esp,0x8
  5fdcad:	40                   	inc    eax
  5fdcae:	eb 05                	jmp    0x5fdcb5
  5fdcb0:	b8 b8 4a 6f 00       	mov    eax,0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fdcb5:	57                   	push   edi
  5fdcb6:	68 9c 4a 6f 00       	push   0x6f4a9c ; ["TcpSocketBase::init"]
  5fdcbb:	6a 48                	push   0x48
  5fdcbd:	50                   	push   eax
  5fdcbe:	68 10 49 6f 00       	push   0x6f4910 ; ["[ConntctionModule][%s:%d][%s]: ioctlsocket2 failed with error: %ld\n"]
  5fdcc3:	8d 44 24 24          	lea    eax,[esp+0x24]
  5fdcc7:	c7 44 24 24 02 00 00 	mov    DWORD PTR [esp+0x24],0x2
  5fdccf:	50                   	push   eax
  5fdcd0:	8d 44 24 3c          	lea    eax,[esp+0x3c]
  5fdcd4:	50                   	push   eax
  5fdcd5:	e8 2f 93 e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5fdcda:	8b 54 24 54          	mov    edx,DWORD PTR [esp+0x54]
  5fdcde:	83 c4 1c             	add    esp,0x1c
  5fdce1:	83 fa 10             	cmp    edx,0x10
  5fdce4:	72 2d                	jb     0x5fdd13
  5fdce6:	8b 4c 24 24          	mov    ecx,DWORD PTR [esp+0x24]
  5fdcea:	42                   	inc    edx
  5fdceb:	8b c1                	mov    eax,ecx
  5fdced:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5fdcf3:	72 14                	jb     0x5fdd09
  5fdcf5:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5fdcf8:	83 c2 23             	add    edx,0x23
  5fdcfb:	2b c1                	sub    eax,ecx
  5fdcfd:	83 c0 fc             	add    eax,0xfffffffc
  5fdd00:	83 f8 1f             	cmp    eax,0x1f
  5fdd03:	0f 87 e8 00 00 00    	ja     0x5fddf1
  5fdd09:	52                   	push   edx
  5fdd0a:	51                   	push   ecx
  5fdd0b:	e8 8a 43 e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5fdd10:	83 c4 08             	add    esp,0x8
  5fdd13:	8b 46 04             	mov    eax,DWORD PTR [esi+0x4]
  5fdd16:	89 44 24 50          	mov    DWORD PTR [esp+0x50],eax
  5fdd1a:	89 84 24 54 01 00 00 	mov    DWORD PTR [esp+0x154],eax
  5fdd21:	8b 44 24 18          	mov    eax,DWORD PTR [esp+0x18]
  5fdd25:	c7 44 24 4c 01 00 00 	mov    DWORD PTR [esp+0x4c],0x1
  5fdd2d:	c7 84 24 50 01 00 00 	mov    DWORD PTR [esp+0x150],0x1
  5fdd38:	c7 44 24 20 00 00 00 	mov    DWORD PTR [esp+0x20],0x0
  5fdd40:	8b 00                	mov    eax,DWORD PTR [eax]
  5fdd42:	89 44 24 1c          	mov    DWORD PTR [esp+0x1c],eax
  5fdd46:	8d 44 24 1c          	lea    eax,[esp+0x1c]
  5fdd4a:	50                   	push   eax
  5fdd4b:	8d 84 24 54 01 00 00 	lea    eax,[esp+0x154]
  5fdd52:	50                   	push   eax
  5fdd53:	8d 44 24 54          	lea    eax,[esp+0x54]
  5fdd57:	50                   	push   eax
  5fdd58:	6a 00                	push   0x0
  5fdd5a:	6a 00                	push   0x0
  5fdd5c:	ff 15 9c d8 79 00    	call   DWORD PTR ds:0x79d89c
  5fdd62:	8d 44 24 4c          	lea    eax,[esp+0x4c]
  5fdd66:	50                   	push   eax
  5fdd67:	ff 76 04             	push   DWORD PTR [esi+0x4]
  5fdd6a:	e8 17 6e 06 00       	call   0x664b86 ; ["call resolved=0x664b86 "]
  5fdd6f:	85 c0                	test   eax,eax
  5fdd71:	0f 85 9e 00 00 00    	jne    0x5fde15
  5fdd77:	6a 5c                	push   0x5c
  5fdd79:	68 b8 4a 6f 00       	push   0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fdd7e:	e8 e3 a9 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fdd83:	83 c4 08             	add    esp,0x8
  5fdd86:	85 c0                	test   eax,eax
  5fdd88:	74 12                	je     0x5fdd9c
  5fdd8a:	6a 5c                	push   0x5c
  5fdd8c:	68 b8 4a 6f 00       	push   0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fdd91:	e8 d0 a9 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fdd96:	83 c4 08             	add    esp,0x8
  5fdd99:	40                   	inc    eax
  5fdd9a:	eb 05                	jmp    0x5fdda1
  5fdd9c:	b8 b8 4a 6f 00       	mov    eax,0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fdda1:	53                   	push   ebx
  5fdda2:	68 9c 4a 6f 00       	push   0x6f4a9c ; ["TcpSocketBase::init"]
  5fdda7:	6a 5b                	push   0x5b
  5fdda9:	50                   	push   eax
  5fddaa:	68 a8 4b 6f 00       	push   0x6f4ba8 ; ["[ConntctionModule][%s:%d][%s]: connect server error: %ld\n"]
  5fddaf:	8d 44 24 2c          	lea    eax,[esp+0x2c]
  5fddb3:	c7 44 24 2c 02 00 00 	mov    DWORD PTR [esp+0x2c],0x2
  5fddbb:	50                   	push   eax
  5fddbc:	8d 44 24 3c          	lea    eax,[esp+0x3c]
  5fddc0:	50                   	push   eax
  5fddc1:	e8 43 92 e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5fddc6:	8b 54 24 54          	mov    edx,DWORD PTR [esp+0x54]
  5fddca:	83 c4 1c             	add    esp,0x1c
  5fddcd:	83 fa 10             	cmp    edx,0x10
  5fddd0:	72 2f                	jb     0x5fde01
  5fddd2:	8b 4c 24 24          	mov    ecx,DWORD PTR [esp+0x24]
  5fddd6:	42                   	inc    edx
  5fddd7:	8b c1                	mov    eax,ecx
  5fddd9:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5fdddf:	72 16                	jb     0x5fddf7
  5fdde1:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5fdde4:	83 c2 23             	add    edx,0x23
  5fdde7:	2b c1                	sub    eax,ecx
  5fdde9:	83 c0 fc             	add    eax,0xfffffffc
  5fddec:	83 f8 1f             	cmp    eax,0x1f
  5fddef:	76 06                	jbe    0x5fddf7
  5fddf1:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5fddf7:	52                   	push   edx
  5fddf8:	51                   	push   ecx
  5fddf9:	e8 9c 42 e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5fddfe:	83 c4 08             	add    esp,0x8
  5fde01:	ff 76 04             	push   DWORD PTR [esi+0x4]
  5fde04:	ff 15 f0 d8 79 00    	call   DWORD PTR ds:0x79d8f0
  5fde0a:	c7 46 04 00 00 00 00 	mov    DWORD PTR [esi+0x4],0x0
  5fde11:	32 c0                	xor    al,al
  5fde13:	eb 02                	jmp    0x5fde17
  5fde15:	b0 01                	mov    al,0x1
  5fde17:	8b 8c 24 e4 03 00 00 	mov    ecx,DWORD PTR [esp+0x3e4]
  5fde1e:	5f                   	pop    edi
  5fde1f:	5e                   	pop    esi
  5fde20:	5d                   	pop    ebp
  5fde21:	5b                   	pop    ebx
  5fde22:	33 cc                	xor    ecx,esp
  5fde24:	e8 66 66 e0 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5fde29:	81 c4 d8 03 00 00    	add    esp,0x3d8
  5fde2f:	c2 0c 00             	ret    0xc
