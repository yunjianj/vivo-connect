; BtFarawayDevice::setAllInfo; image base 0x400000; static annotation only
  559ab0:	55                   	push   ebp
  559ab1:	8b ec                	mov    ebp,esp
  559ab3:	6a ff                	push   0xffffffff
  559ab5:	68 0d 82 68 00       	push   0x68820d
  559aba:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  559ac0:	50                   	push   eax
  559ac1:	81 ec 00 01 00 00    	sub    esp,0x100
  559ac7:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  559acc:	33 c5                	xor    eax,ebp
  559ace:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  559ad1:	53                   	push   ebx
  559ad2:	56                   	push   esi
  559ad3:	57                   	push   edi
  559ad4:	50                   	push   eax
  559ad5:	8d 45 f4             	lea    eax,[ebp-0xc]
  559ad8:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  559ade:	8b f1                	mov    esi,ecx
  559ae0:	89 b5 00 ff ff ff    	mov    DWORD PTR [ebp-0x100],esi
  559ae6:	8b 7d 08             	mov    edi,DWORD PTR [ebp+0x8]
  559ae9:	33 db                	xor    ebx,ebx
  559aeb:	b9 74 8b 7a 00       	mov    ecx,0x7a8b74
  559af0:	89 bd f4 fe ff ff    	mov    DWORD PTR [ebp-0x10c],edi
  559af6:	89 9d 08 ff ff ff    	mov    DWORD PTR [ebp-0xf8],ebx
  559afc:	e8 ed ef ea ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  559b01:	68 8c 8b 6d 00       	push   0x6d8b8c ; ["userId"]
  559b06:	8b cf                	mov    ecx,edi
  559b08:	e8 32 95 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559b0d:	50                   	push   eax
  559b0e:	8d 4e 04             	lea    ecx,[esi+0x4]
  559b11:	e8 fe bf ea ff       	call   0x405b14 ; ["call resolved=0x4a7fe0 "]
  559b16:	68 94 8b 6d 00       	push   0x6d8b94 ; ["bizInfo"]
  559b1b:	8b cf                	mov    ecx,edi
  559b1d:	e8 27 7c ea ff       	call   0x401749 ; ["call resolved=0x512b40 "]
  559b22:	84 c0                	test   al,al
  559b24:	0f 84 2b 01 00 00    	je     0x559c55
  559b2a:	68 94 8b 6d 00       	push   0x6d8b94 ; ["bizInfo"]
  559b2f:	8b cf                	mov    ecx,edi
  559b31:	e8 09 95 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559b36:	68 a0 8b 6d 00       	push   0x6d8ba0 ; ["conn_base"]
  559b3b:	8b c8                	mov    ecx,eax
  559b3d:	e8 b3 9d ea ff       	call   0x4038f5 ; ["call resolved=0x54d640 "]
  559b42:	84 c0                	test   al,al
  559b44:	0f 84 0b 01 00 00    	je     0x559c55
  559b4a:	68 94 8b 6d 00       	push   0x6d8b94 ; ["bizInfo"]
  559b4f:	8b cf                	mov    ecx,edi
  559b51:	e8 e9 94 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559b56:	68 a0 8b 6d 00       	push   0x6d8ba0 ; ["conn_base"]
  559b5b:	8b c8                	mov    ecx,eax
  559b5d:	e8 dd 94 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559b62:	68 ac 8b 6d 00       	push   0x6d8bac ; ["businessId"]
  559b67:	8b c8                	mov    ecx,eax
  559b69:	e8 bb eb ea ff       	call   0x408729 ; ["call resolved=0x4a93b0 "]
  559b6e:	84 c0                	test   al,al
  559b70:	0f 84 df 00 00 00    	je     0x559c55
  559b76:	68 94 8b 6d 00       	push   0x6d8b94 ; ["bizInfo"]
  559b7b:	8b cf                	mov    ecx,edi
  559b7d:	e8 bd 94 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559b82:	68 a0 8b 6d 00       	push   0x6d8ba0 ; ["conn_base"]
  559b87:	8b c8                	mov    ecx,eax
  559b89:	e8 b1 94 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559b8e:	68 ac 8b 6d 00       	push   0x6d8bac ; ["businessId"]
  559b93:	8b c8                	mov    ecx,eax
  559b95:	83 c6 1c             	add    esi,0x1c
  559b98:	e8 a2 94 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559b9d:	50                   	push   eax
  559b9e:	8b ce                	mov    ecx,esi
  559ba0:	e8 6f bf ea ff       	call   0x405b14 ; ["call resolved=0x4a7fe0 "]
  559ba5:	6a 04                	push   0x4
  559ba7:	53                   	push   ebx
  559ba8:	8d 45 d8             	lea    eax,[ebp-0x28]
  559bab:	8b ce                	mov    ecx,esi
  559bad:	50                   	push   eax
  559bae:	e8 4a e0 ea ff       	call   0x407bfd ; ["call resolved=0x4cbba0 "]
  559bb3:	83 7d ec 10          	cmp    DWORD PTR [ebp-0x14],0x10
  559bb7:	8d 45 d8             	lea    eax,[ebp-0x28]
  559bba:	6a 04                	push   0x4
  559bbc:	0f 43 45 d8          	cmovae eax,DWORD PTR [ebp-0x28]
  559bc0:	50                   	push   eax
  559bc1:	8d 45 c0             	lea    eax,[ebp-0x40]
  559bc4:	89 5d fc             	mov    DWORD PTR [ebp-0x4],ebx
  559bc7:	50                   	push   eax
  559bc8:	e8 05 7f ea ff       	call   0x401ad2 ; ["call resolved=0x4a66d0 "]
  559bcd:	83 c4 0c             	add    esp,0xc
  559bd0:	8d 45 c0             	lea    eax,[ebp-0x40]
  559bd3:	bb 10 00 00 00       	mov    ebx,0x10
  559bd8:	8b ce                	mov    ecx,esi
  559bda:	89 9d 08 ff ff ff    	mov    DWORD PTR [ebp-0xf8],ebx
  559be0:	50                   	push   eax
  559be1:	e8 32 d9 ea ff       	call   0x407518 ; ["call resolved=0x472b20 "]
  559be6:	8b 55 d4             	mov    edx,DWORD PTR [ebp-0x2c]
  559be9:	3b d3                	cmp    edx,ebx
  559beb:	72 2e                	jb     0x559c1b
  559bed:	8b 4d c0             	mov    ecx,DWORD PTR [ebp-0x40]
  559bf0:	42                   	inc    edx
  559bf1:	8b c1                	mov    eax,ecx
  559bf3:	81 fa 00 10 00 00    	cmp    edx,0x1000
  559bf9:	72 16                	jb     0x559c11
  559bfb:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  559bfe:	83 c2 23             	add    edx,0x23
  559c01:	2b c1                	sub    eax,ecx
  559c03:	83 c0 fc             	add    eax,0xfffffffc
  559c06:	83 f8 1f             	cmp    eax,0x1f
  559c09:	76 06                	jbe    0x559c11
  559c0b:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  559c11:	52                   	push   edx
  559c12:	51                   	push   ecx
  559c13:	e8 82 84 ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  559c18:	83 c4 08             	add    esp,0x8
  559c1b:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  559c1e:	c7 45 fc ff ff ff ff 	mov    DWORD PTR [ebp-0x4],0xffffffff
  559c25:	3b d3                	cmp    edx,ebx
  559c27:	72 2c                	jb     0x559c55
  559c29:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  559c2c:	42                   	inc    edx
  559c2d:	8b c1                	mov    eax,ecx
  559c2f:	81 fa 00 10 00 00    	cmp    edx,0x1000
  559c35:	72 14                	jb     0x559c4b
  559c37:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  559c3a:	83 c2 23             	add    edx,0x23
  559c3d:	2b c1                	sub    eax,ecx
  559c3f:	83 c0 fc             	add    eax,0xfffffffc
  559c42:	83 f8 1f             	cmp    eax,0x1f
  559c45:	0f 87 2b 0c 00 00    	ja     0x55a876
  559c4b:	52                   	push   edx
  559c4c:	51                   	push   ecx
  559c4d:	e8 48 84 ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  559c52:	83 c4 08             	add    esp,0x8
  559c55:	68 94 8b 6d 00       	push   0x6d8b94 ; ["bizInfo"]
  559c5a:	8b cf                	mov    ecx,edi
  559c5c:	e8 e8 7a ea ff       	call   0x401749 ; ["call resolved=0x512b40 "]
  559c61:	84 c0                	test   al,al
  559c63:	0f 84 3d 01 00 00    	je     0x559da6
  559c69:	68 94 8b 6d 00       	push   0x6d8b94 ; ["bizInfo"]
  559c6e:	8b cf                	mov    ecx,edi
  559c70:	e8 ca 93 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559c75:	68 a0 8b 6d 00       	push   0x6d8ba0 ; ["conn_base"]
  559c7a:	8b c8                	mov    ecx,eax
  559c7c:	e8 74 9c ea ff       	call   0x4038f5 ; ["call resolved=0x54d640 "]
  559c81:	84 c0                	test   al,al
  559c83:	0f 84 1d 01 00 00    	je     0x559da6
  559c89:	68 94 8b 6d 00       	push   0x6d8b94 ; ["bizInfo"]
  559c8e:	8b cf                	mov    ecx,edi
  559c90:	e8 aa 93 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559c95:	68 a0 8b 6d 00       	push   0x6d8ba0 ; ["conn_base"]
  559c9a:	8b c8                	mov    ecx,eax
  559c9c:	e8 9e 93 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559ca1:	89 85 f8 fe ff ff    	mov    DWORD PTR [ebp-0x108],eax
  559ca7:	80 38 01             	cmp    BYTE PTR [eax],0x1
  559caa:	0f 85 f6 00 00 00    	jne    0x559da6
  559cb0:	8b 40 08             	mov    eax,DWORD PTR [eax+0x8]
  559cb3:	ba 18 00 00 00       	mov    edx,0x18
  559cb8:	89 85 fc fe ff ff    	mov    DWORD PTR [ebp-0x104],eax
  559cbe:	8b 00                	mov    eax,DWORD PTR [eax]
  559cc0:	89 85 04 ff ff ff    	mov    DWORD PTR [ebp-0xfc],eax
  559cc6:	8b 70 04             	mov    esi,DWORD PTR [eax+0x4]
  559cc9:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  559ccd:	75 52                	jne    0x559d21
  559ccf:	8b fa                	mov    edi,edx
  559cd1:	83 7e 24 10          	cmp    DWORD PTR [esi+0x24],0x10
  559cd5:	8d 4e 10             	lea    ecx,[esi+0x10]
  559cd8:	8b 51 10             	mov    edx,DWORD PTR [ecx+0x10]
  559cdb:	89 55 d4             	mov    DWORD PTR [ebp-0x2c],edx
  559cde:	72 02                	jb     0x559ce2
  559ce0:	8b 09                	mov    ecx,DWORD PTR [ecx]
  559ce2:	3b d7                	cmp    edx,edi
  559ce4:	8b c2                	mov    eax,edx
  559ce6:	0f 47 c7             	cmova  eax,edi
  559ce9:	50                   	push   eax
  559cea:	68 bc 8b 6d 00       	push   0x6d8bbc ; ["cloudConnectionSupported"]
  559cef:	51                   	push   ecx
  559cf0:	e8 c8 ab ea ff       	call   0x4048bd ; ["call resolved=0x482fc0 "]
  559cf5:	83 c4 0c             	add    esp,0xc
  559cf8:	85 c0                	test   eax,eax
  559cfa:	0f 84 e6 01 00 00    	je     0x559ee6
  559d00:	0f 88 e9 01 00 00    	js     0x559eef
  559d06:	8b c6                	mov    eax,esi
  559d08:	8b 36                	mov    esi,DWORD PTR [esi]
  559d0a:	89 85 04 ff ff ff    	mov    DWORD PTR [ebp-0xfc],eax
  559d10:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  559d14:	74 bb                	je     0x559cd1
  559d16:	8b bd f4 fe ff ff    	mov    edi,DWORD PTR [ebp-0x10c]
  559d1c:	ba 18 00 00 00       	mov    edx,0x18
  559d21:	80 78 0d 00          	cmp    BYTE PTR [eax+0xd],0x0
  559d25:	75 33                	jne    0x559d5a
  559d27:	83 78 24 10          	cmp    DWORD PTR [eax+0x24],0x10
  559d2b:	8d 48 10             	lea    ecx,[eax+0x10]
  559d2e:	8b 71 10             	mov    esi,DWORD PTR [ecx+0x10]
  559d31:	72 02                	jb     0x559d35
  559d33:	8b 09                	mov    ecx,DWORD PTR [ecx]
  559d35:	83 fe 18             	cmp    esi,0x18
  559d38:	8b c6                	mov    eax,esi
  559d3a:	0f 47 c2             	cmova  eax,edx
  559d3d:	50                   	push   eax
  559d3e:	68 bc 8b 6d 00       	push   0x6d8bbc ; ["cloudConnectionSupported"]
  559d43:	51                   	push   ecx
  559d44:	e8 74 ab ea ff       	call   0x4048bd ; ["call resolved=0x482fc0 "]
  559d49:	83 c4 0c             	add    esp,0xc
  559d4c:	85 c0                	test   eax,eax
  559d4e:	0f 84 a9 01 00 00    	je     0x559efd
  559d54:	0f 8e ae 01 00 00    	jle    0x559f08
  559d5a:	8b 8d fc fe ff ff    	mov    ecx,DWORD PTR [ebp-0x104]
  559d60:	8b 09                	mov    ecx,DWORD PTR [ecx]
  559d62:	8b 85 f8 fe ff ff    	mov    eax,DWORD PTR [ebp-0x108]
  559d68:	8b 40 08             	mov    eax,DWORD PTR [eax+0x8]
  559d6b:	3b 08                	cmp    ecx,DWORD PTR [eax]
  559d6d:	74 37                	je     0x559da6
  559d6f:	68 94 8b 6d 00       	push   0x6d8b94 ; ["bizInfo"]
  559d74:	8b cf                	mov    ecx,edi
  559d76:	e8 c4 92 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559d7b:	68 a0 8b 6d 00       	push   0x6d8ba0 ; ["conn_base"]
  559d80:	8b c8                	mov    ecx,eax
  559d82:	e8 b8 92 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559d87:	68 bc 8b 6d 00       	push   0x6d8bbc ; ["cloudConnectionSupported"]
  559d8c:	8b c8                	mov    ecx,eax
  559d8e:	e8 ac 92 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559d93:	8b c8                	mov    ecx,eax
  559d95:	e8 26 8a ea ff       	call   0x4027c0 ; ["call resolved=0x4c2210 "]
  559d9a:	8b 8d 00 ff ff ff    	mov    ecx,DWORD PTR [ebp-0x100]
  559da0:	88 81 70 01 00 00    	mov    BYTE PTR [ecx+0x170],al
  559da6:	83 ec 10             	sub    esp,0x10
  559da9:	8b cf                	mov    ecx,edi
  559dab:	8b f4                	mov    esi,esp
  559dad:	68 38 89 6d 00       	push   0x6d8938 ; ["ext"]
  559db2:	e8 88 92 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559db7:	50                   	push   eax
  559db8:	8b ce                	mov    ecx,esi
  559dba:	e8 4c 85 ea ff       	call   0x40230b ; ["call resolved=0x469d20 "]
  559dbf:	8b b5 00 ff ff ff    	mov    esi,DWORD PTR [ebp-0x100]
  559dc5:	8d 8e 78 01 00 00    	lea    ecx,[esi+0x178]
  559dcb:	e8 b5 a6 ea ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  559dd0:	68 38 89 6d 00       	push   0x6d8938 ; ["ext"]
  559dd5:	8b cf                	mov    ecx,edi
  559dd7:	e8 63 92 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559ddc:	68 dc 8b 6d 00       	push   0x6d8bdc ; ["seeds"]
  559de1:	8b c8                	mov    ecx,eax
  559de3:	e8 85 eb ea ff       	call   0x40896d ; ["call resolved=0x4a92c0 "]
  559de8:	84 c0                	test   al,al
  559dea:	74 36                	je     0x559e22
  559dec:	68 38 89 6d 00       	push   0x6d8938 ; ["ext"]
  559df1:	8b cf                	mov    ecx,edi
  559df3:	e8 47 92 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559df8:	83 ec 10             	sub    esp,0x10
  559dfb:	8b c8                	mov    ecx,eax
  559dfd:	8b f4                	mov    esi,esp
  559dff:	68 dc 8b 6d 00       	push   0x6d8bdc ; ["seeds"]
  559e04:	e8 36 92 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559e09:	50                   	push   eax
  559e0a:	8b ce                	mov    ecx,esi
  559e0c:	e8 fa 84 ea ff       	call   0x40230b ; ["call resolved=0x469d20 "]
  559e11:	8b b5 00 ff ff ff    	mov    esi,DWORD PTR [ebp-0x100]
  559e17:	8d 8e 88 01 00 00    	lea    ecx,[esi+0x188]
  559e1d:	e8 63 a6 ea ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  559e22:	68 38 89 6d 00       	push   0x6d8938 ; ["ext"]
  559e27:	8b cf                	mov    ecx,edi
  559e29:	e8 11 92 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559e2e:	68 e4 8b 6d 00       	push   0x6d8be4 ; ["randomId"]
  559e33:	8b c8                	mov    ecx,eax
  559e35:	e8 3d be ea ff       	call   0x405c77 ; ["call resolved=0x512c30 "]
  559e3a:	84 c0                	test   al,al
  559e3c:	74 24                	je     0x559e62
  559e3e:	68 38 89 6d 00       	push   0x6d8938 ; ["ext"]
  559e43:	8b cf                	mov    ecx,edi
  559e45:	e8 f5 91 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559e4a:	68 e4 8b 6d 00       	push   0x6d8be4 ; ["randomId"]
  559e4f:	8b c8                	mov    ecx,eax
  559e51:	e8 e9 91 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559e56:	50                   	push   eax
  559e57:	8d 8e 18 01 00 00    	lea    ecx,[esi+0x118]
  559e5d:	e8 b2 bc ea ff       	call   0x405b14 ; ["call resolved=0x4a7fe0 "]
  559e62:	68 38 89 6d 00       	push   0x6d8938 ; ["ext"]
  559e67:	8b cf                	mov    ecx,edi
  559e69:	e8 d1 91 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559e6e:	68 f0 8b 6d 00       	push   0x6d8bf0 ; ["enpVer"]
  559e73:	8b c8                	mov    ecx,eax
  559e75:	e8 e1 98 ea ff       	call   0x40375b ; ["call resolved=0x54d550 "]
  559e7a:	84 c0                	test   al,al
  559e7c:	74 25                	je     0x559ea3
  559e7e:	68 38 89 6d 00       	push   0x6d8938 ; ["ext"]
  559e83:	8b cf                	mov    ecx,edi
  559e85:	e8 b5 91 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559e8a:	68 f0 8b 6d 00       	push   0x6d8bf0 ; ["enpVer"]
  559e8f:	8b c8                	mov    ecx,eax
  559e91:	e8 a9 91 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559e96:	8b c8                	mov    ecx,eax
  559e98:	e8 1a 9c ea ff       	call   0x403ab7 ; ["call resolved=0x4a9c50 "]
  559e9d:	89 86 30 01 00 00    	mov    DWORD PTR [esi+0x130],eax
  559ea3:	68 54 4d 6c 00       	push   0x6c4d54 ; ["deviceId"]
  559ea8:	8b cf                	mov    ecx,edi
  559eaa:	e8 90 91 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559eaf:	50                   	push   eax
  559eb0:	8d 4e 34             	lea    ecx,[esi+0x34]
  559eb3:	e8 5c bc ea ff       	call   0x405b14 ; ["call resolved=0x4a7fe0 "]
  559eb8:	68 60 68 6c 00       	push   0x6c6860 ; ["type"]
  559ebd:	8b cf                	mov    ecx,edi
  559ebf:	e8 7b 91 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559ec4:	8b c8                	mov    ecx,eax
  559ec6:	e8 ec 9b ea ff       	call   0x403ab7 ; ["call resolved=0x4a9c50 "]
  559ecb:	83 e8 01             	sub    eax,0x1
  559ece:	74 5b                	je     0x559f2b
  559ed0:	83 e8 01             	sub    eax,0x1
  559ed3:	74 4a                	je     0x559f1f
  559ed5:	83 e8 01             	sub    eax,0x1
  559ed8:	74 39                	je     0x559f13
  559eda:	b8 f8 8b 6d 00       	mov    eax,0x6d8bf8 ; ["unknowed"]
  559edf:	b9 08 00 00 00       	mov    ecx,0x8
  559ee4:	eb 4f                	jmp    0x559f35
  559ee6:	39 7d d4             	cmp    DWORD PTR [ebp-0x2c],edi
  559ee9:	0f 83 17 fe ff ff    	jae    0x559d06
  559eef:	8b 76 08             	mov    esi,DWORD PTR [esi+0x8]
  559ef2:	8b 85 04 ff ff ff    	mov    eax,DWORD PTR [ebp-0xfc]
  559ef8:	e9 13 fe ff ff       	jmp    0x559d10
  559efd:	83 fe 18             	cmp    esi,0x18
  559f00:	72 06                	jb     0x559f08
  559f02:	0f 87 52 fe ff ff    	ja     0x559d5a
  559f08:	8b 8d 04 ff ff ff    	mov    ecx,DWORD PTR [ebp-0xfc]
  559f0e:	e9 4f fe ff ff       	jmp    0x559d62
  559f13:	b8 5c 7c 6d 00       	mov    eax,0x6d7c5c ; ["pc"]
  559f18:	b9 02 00 00 00       	mov    ecx,0x2
  559f1d:	eb 16                	jmp    0x559f35
  559f1f:	b8 14 7d 6c 00       	mov    eax,0x6c7d14 ; ["pad"]
  559f24:	b9 03 00 00 00       	mov    ecx,0x3
  559f29:	eb 0a                	jmp    0x559f35
  559f2b:	b8 f4 4d 6c 00       	mov    eax,0x6c4df4 ; ["phone"]
  559f30:	b9 05 00 00 00       	mov    ecx,0x5
  559f35:	51                   	push   ecx
  559f36:	50                   	push   eax
  559f37:	8d 4e 4c             	lea    ecx,[esi+0x4c]
  559f3a:	e8 d8 a4 ea ff       	call   0x404417 ; ["call resolved=0x480a10 "]
  559f3f:	68 c4 4d 6c 00       	push   0x6c4dc4 ; ["name"]
  559f44:	8b cf                	mov    ecx,edi
  559f46:	e8 f4 90 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559f4b:	50                   	push   eax
  559f4c:	8d 4e 64             	lea    ecx,[esi+0x64]
  559f4f:	e8 c0 bb ea ff       	call   0x405b14 ; ["call resolved=0x4a7fe0 "]
  559f54:	68 78 78 6c 00       	push   0x6c7878 ; ["bluetooth"]
  559f59:	8b cf                	mov    ecx,edi
  559f5b:	e8 df 90 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559f60:	80 38 00             	cmp    BYTE PTR [eax],0x0
  559f63:	75 19                	jne    0x559f7e
  559f65:	68 02 1c 6c 00       	push   0x6c1c02
  559f6a:	8d 4d c8             	lea    ecx,[ebp-0x38]
  559f6d:	e8 37 81 ea ff       	call   0x4020a9 ; ["call resolved=0x43d1a0 "]
  559f72:	c7 45 fc 01 00 00 00 	mov    DWORD PTR [ebp-0x4],0x1
  559f79:	83 cb 01             	or     ebx,0x1
  559f7c:	eb 1f                	jmp    0x559f9d
  559f7e:	68 78 78 6c 00       	push   0x6c7878 ; ["bluetooth"]
  559f83:	8b cf                	mov    ecx,edi
  559f85:	e8 b5 90 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  559f8a:	50                   	push   eax
  559f8b:	8d 4d e0             	lea    ecx,[ebp-0x20]
  559f8e:	e8 78 83 ea ff       	call   0x40230b ; ["call resolved=0x469d20 "]
  559f93:	c7 45 fc 02 00 00 00 	mov    DWORD PTR [ebp-0x4],0x2
  559f9a:	83 cb 02             	or     ebx,0x2
  559f9d:	8d 4e 7c             	lea    ecx,[esi+0x7c]
  559fa0:	89 9d 08 ff ff ff    	mov    DWORD PTR [ebp-0xf8],ebx
  559fa6:	50                   	push   eax
  559fa7:	e8 68 bb ea ff       	call   0x405b14 ; ["call resolved=0x4a7fe0 "]
  559fac:	f6 c3 02             	test   bl,0x2
  559faf:	74 1c                	je     0x559fcd
  559fb1:	83 e3 fd             	and    ebx,0xfffffffd
  559fb4:	8d 4d e0             	lea    ecx,[ebp-0x20]
  559fb7:	89 9d 08 ff ff ff    	mov    DWORD PTR [ebp-0xf8],ebx
  559fbd:	e8 1c 00 eb ff       	call   0x409fde ; ["call resolved=0x480970 "]
  559fc2:	ff 75 e0             	push   DWORD PTR [ebp-0x20]
  559fc5:	8d 4d e8             	lea    ecx,[ebp-0x18]
  559fc8:	e8 81 f9 ea ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  559fcd:	c7 45 fc ff ff ff ff 	mov    DWORD PTR [ebp-0x4],0xffffffff
  559fd4:	f6 c3 01             	test   bl,0x1
  559fd7:	74 1c                	je     0x559ff5
  559fd9:	83 e3 fe             	and    ebx,0xfffffffe
  559fdc:	8d 4d c8             	lea    ecx,[ebp-0x38]
  559fdf:	89 9d 08 ff ff ff    	mov    DWORD PTR [ebp-0xf8],ebx
  559fe5:	e8 f4 ff ea ff       	call   0x409fde ; ["call resolved=0x480970 "]
  559fea:	ff 75 c8             	push   DWORD PTR [ebp-0x38]
  559fed:	8d 4d d0             	lea    ecx,[ebp-0x30]
  559ff0:	e8 59 f9 ea ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  559ff5:	80 3f 01             	cmp    BYTE PTR [edi],0x1
  559ff8:	0f 85 7f 01 00 00    	jne    0x55a17d
  559ffe:	8b 47 08             	mov    eax,DWORD PTR [edi+0x8]
  55a001:	ba 0d 00 00 00       	mov    edx,0xd
  55a006:	89 85 fc fe ff ff    	mov    DWORD PTR [ebp-0x104],eax
  55a00c:	8b 00                	mov    eax,DWORD PTR [eax]
  55a00e:	89 85 04 ff ff ff    	mov    DWORD PTR [ebp-0xfc],eax
  55a014:	8b 70 04             	mov    esi,DWORD PTR [eax+0x4]
  55a017:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  55a01b:	75 53                	jne    0x55a070
  55a01d:	8b fa                	mov    edi,edx
  55a01f:	90                   	nop
  55a020:	83 7e 24 10          	cmp    DWORD PTR [esi+0x24],0x10
  55a024:	8d 4e 10             	lea    ecx,[esi+0x10]
  55a027:	8b 51 10             	mov    edx,DWORD PTR [ecx+0x10]
  55a02a:	89 55 d4             	mov    DWORD PTR [ebp-0x2c],edx
  55a02d:	72 02                	jb     0x55a031
  55a02f:	8b 09                	mov    ecx,DWORD PTR [ecx]
  55a031:	3b d7                	cmp    edx,edi
  55a033:	8b c2                	mov    eax,edx
  55a035:	0f 47 c7             	cmova  eax,edi
  55a038:	50                   	push   eax
  55a039:	68 04 8c 6d 00       	push   0x6d8c04 ; ["bluetoothHash"]
  55a03e:	51                   	push   ecx
  55a03f:	e8 79 a8 ea ff       	call   0x4048bd ; ["call resolved=0x482fc0 "]
  55a044:	83 c4 0c             	add    esp,0xc
  55a047:	85 c0                	test   eax,eax
  55a049:	0f 84 8f 00 00 00    	je     0x55a0de
  55a04f:	0f 88 92 00 00 00    	js     0x55a0e7
  55a055:	8b c6                	mov    eax,esi
  55a057:	8b 36                	mov    esi,DWORD PTR [esi]
  55a059:	89 85 04 ff ff ff    	mov    DWORD PTR [ebp-0xfc],eax
  55a05f:	80 7e 0d 00          	cmp    BYTE PTR [esi+0xd],0x0
  55a063:	74 bb                	je     0x55a020
  55a065:	8b bd f4 fe ff ff    	mov    edi,DWORD PTR [ebp-0x10c]
  55a06b:	ba 0d 00 00 00       	mov    edx,0xd
  55a070:	80 78 0d 00          	cmp    BYTE PTR [eax+0xd],0x0
  55a074:	75 2b                	jne    0x55a0a1
  55a076:	83 78 24 10          	cmp    DWORD PTR [eax+0x24],0x10
  55a07a:	8d 48 10             	lea    ecx,[eax+0x10]
  55a07d:	8b 71 10             	mov    esi,DWORD PTR [ecx+0x10]
  55a080:	72 02                	jb     0x55a084
  55a082:	8b 09                	mov    ecx,DWORD PTR [ecx]
  55a084:	83 fe 0d             	cmp    esi,0xd
  55a087:	8b c6                	mov    eax,esi
  55a089:	0f 47 c2             	cmova  eax,edx
  55a08c:	50                   	push   eax
  55a08d:	68 04 8c 6d 00       	push   0x6d8c04 ; ["bluetoothHash"]
  55a092:	51                   	push   ecx
  55a093:	e8 25 a8 ea ff       	call   0x4048bd ; ["call resolved=0x482fc0 "]
  55a098:	83 c4 0c             	add    esp,0xc
  55a09b:	85 c0                	test   eax,eax
  55a09d:	74 56                	je     0x55a0f5
  55a09f:	7e 5b                	jle    0x55a0fc
  55a0a1:	8b 8d fc fe ff ff    	mov    ecx,DWORD PTR [ebp-0x104]
  55a0a7:	8b 09                	mov    ecx,DWORD PTR [ecx]
  55a0a9:	8b 47 08             	mov    eax,DWORD PTR [edi+0x8]
  55a0ac:	3b 08                	cmp    ecx,DWORD PTR [eax]
  55a0ae:	0f 84 c3 00 00 00    	je     0x55a177
  55a0b4:	68 04 8c 6d 00       	push   0x6d8c04 ; ["bluetoothHash"]
  55a0b9:	8b cf                	mov    ecx,edi
  55a0bb:	e8 7f 8f ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  55a0c0:	80 38 00             	cmp    BYTE PTR [eax],0x0
  55a0c3:	75 3f                	jne    0x55a104
  55a0c5:	68 02 1c 6c 00       	push   0x6c1c02
  55a0ca:	8d 4d c8             	lea    ecx,[ebp-0x38]
  55a0cd:	e8 d7 7f ea ff       	call   0x4020a9 ; ["call resolved=0x43d1a0 "]
  55a0d2:	c7 45 fc 03 00 00 00 	mov    DWORD PTR [ebp-0x4],0x3
  55a0d9:	83 cb 04             	or     ebx,0x4
  55a0dc:	eb 45                	jmp    0x55a123
  55a0de:	39 7d d4             	cmp    DWORD PTR [ebp-0x2c],edi
  55a0e1:	0f 83 6e ff ff ff    	jae    0x55a055
  55a0e7:	8b 76 08             	mov    esi,DWORD PTR [esi+0x8]
  55a0ea:	8b 85 04 ff ff ff    	mov    eax,DWORD PTR [ebp-0xfc]
  55a0f0:	e9 6a ff ff ff       	jmp    0x55a05f
  55a0f5:	83 fe 0d             	cmp    esi,0xd
  55a0f8:	72 02                	jb     0x55a0fc
  55a0fa:	77 a5                	ja     0x55a0a1
  55a0fc:	8b 8d 04 ff ff ff    	mov    ecx,DWORD PTR [ebp-0xfc]
  55a102:	eb a5                	jmp    0x55a0a9
  55a104:	68 04 8c 6d 00       	push   0x6d8c04 ; ["bluetoothHash"]
  55a109:	8b cf                	mov    ecx,edi
  55a10b:	e8 2f 8f ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  55a110:	50                   	push   eax
  55a111:	8d 4d e0             	lea    ecx,[ebp-0x20]
  55a114:	e8 f2 81 ea ff       	call   0x40230b ; ["call resolved=0x469d20 "]
  55a119:	c7 45 fc 04 00 00 00 	mov    DWORD PTR [ebp-0x4],0x4
  55a120:	83 cb 08             	or     ebx,0x8
  55a123:	8b b5 00 ff ff ff    	mov    esi,DWORD PTR [ebp-0x100]
  55a129:	50                   	push   eax
  55a12a:	89 9d 08 ff ff ff    	mov    DWORD PTR [ebp-0xf8],ebx
  55a130:	8d 8e 94 00 00 00    	lea    ecx,[esi+0x94]
  55a136:	e8 d9 b9 ea ff       	call   0x405b14 ; ["call resolved=0x4a7fe0 "]
  55a13b:	f6 c3 08             	test   bl,0x8
  55a13e:	74 16                	je     0x55a156
  55a140:	8d 4d e0             	lea    ecx,[ebp-0x20]
  55a143:	83 e3 f7             	and    ebx,0xfffffff7
  55a146:	e8 93 fe ea ff       	call   0x409fde ; ["call resolved=0x480970 "]
  55a14b:	ff 75 e0             	push   DWORD PTR [ebp-0x20]
  55a14e:	8d 4d e8             	lea    ecx,[ebp-0x18]
  55a151:	e8 f8 f7 ea ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  55a156:	c7 45 fc ff ff ff ff 	mov    DWORD PTR [ebp-0x4],0xffffffff
  55a15d:	f6 c3 04             	test   bl,0x4
  55a160:	74 1b                	je     0x55a17d
  55a162:	8d 4d c8             	lea    ecx,[ebp-0x38]
  55a165:	e8 74 fe ea ff       	call   0x409fde ; ["call resolved=0x480970 "]
  55a16a:	ff 75 c8             	push   DWORD PTR [ebp-0x38]
  55a16d:	8d 4d d0             	lea    ecx,[ebp-0x30]
  55a170:	e8 d9 f7 ea ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  55a175:	eb 06                	jmp    0x55a17d
  55a177:	8b b5 00 ff ff ff    	mov    esi,DWORD PTR [ebp-0x100]
  55a17d:	68 14 8c 6d 00       	push   0x6d8c14 ; ["company"]
  55a182:	8b cf                	mov    ecx,edi
  55a184:	e8 b6 8e ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  55a189:	50                   	push   eax
  55a18a:	8d 8e ac 00 00 00    	lea    ecx,[esi+0xac]
  55a190:	e8 7f b9 ea ff       	call   0x405b14 ; ["call resolved=0x4a7fe0 "]
  55a195:	68 20 8c 6d 00       	push   0x6d8c20 ; ["model"]
  55a19a:	8b cf                	mov    ecx,edi
  55a19c:	e8 9e 8e ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  55a1a1:	50                   	push   eax
  55a1a2:	8d 8e c4 00 00 00    	lea    ecx,[esi+0xc4]
  55a1a8:	e8 67 b9 ea ff       	call   0x405b14 ; ["call resolved=0x4a7fe0 "]
  55a1ad:	68 28 8c 6d 00       	push   0x6d8c28 ; ["reportTime"]
  55a1b2:	8b cf                	mov    ecx,edi
  55a1b4:	e8 86 8e ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  55a1b9:	50                   	push   eax
  55a1ba:	8d 8e dc 00 00 00    	lea    ecx,[esi+0xdc]
  55a1c0:	e8 4f b9 ea ff       	call   0x405b14 ; ["call resolved=0x4a7fe0 "]
  55a1c5:	68 38 8c 6d 00       	push   0x6d8c38 ; ["inets"]
  55a1ca:	8b cf                	mov    ecx,edi
  55a1cc:	e8 6e 8e ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  55a1d1:	50                   	push   eax
  55a1d2:	8d 4d e0             	lea    ecx,[ebp-0x20]
  55a1d5:	89 45 d4             	mov    DWORD PTR [ebp-0x2c],eax
  55a1d8:	e8 7a a3 ea ff       	call   0x404557 ; ["call resolved=0x54df70 "]
  55a1dd:	8b 5d e0             	mov    ebx,DWORD PTR [ebp-0x20]
  55a1e0:	85 db                	test   ebx,ebx
  55a1e2:	75 18                	jne    0x55a1fc
  55a1e4:	68 08 25 00 00       	push   0x2508
  55a1e9:	68 88 1e 6c 00       	push   0x6c1e88
  55a1ee:	68 48 90 6c 00       	push   0x6c9048
  55a1f3:	ff 15 30 e4 79 00    	call   DWORD PTR ds:0x79e430
  55a1f9:	83 c4 0c             	add    esp,0xc
  55a1fc:	0f b6 03             	movzx  eax,BYTE PTR [ebx]
  55a1ff:	83 e8 00             	sub    eax,0x0
  55a202:	74 27                	je     0x55a22b
  55a204:	83 e8 01             	sub    eax,0x1
  55a207:	74 16                	je     0x55a21f
  55a209:	8b 7d e4             	mov    edi,DWORD PTR [ebp-0x1c]
  55a20c:	83 e8 01             	sub    eax,0x1
  55a20f:	74 04                	je     0x55a215
  55a211:	33 c0                	xor    eax,eax
  55a213:	eb 1e                	jmp    0x55a233
  55a215:	8b 73 08             	mov    esi,DWORD PTR [ebx+0x8]
  55a218:	8b 45 ec             	mov    eax,DWORD PTR [ebp-0x14]
  55a21b:	8b 36                	mov    esi,DWORD PTR [esi]
  55a21d:	eb 17                	jmp    0x55a236
  55a21f:	8b 43 08             	mov    eax,DWORD PTR [ebx+0x8]
  55a222:	8b 38                	mov    edi,DWORD PTR [eax]
  55a224:	8b 45 ec             	mov    eax,DWORD PTR [ebp-0x14]
  55a227:	8b 3f                	mov    edi,DWORD PTR [edi]
  55a229:	eb 08                	jmp    0x55a233
  55a22b:	8b 7d e4             	mov    edi,DWORD PTR [ebp-0x1c]
  55a22e:	b8 01 00 00 00       	mov    eax,0x1
  55a233:	8b 75 e8             	mov    esi,DWORD PTR [ebp-0x18]
  55a236:	ff 75 d4             	push   DWORD PTR [ebp-0x2c]
  55a239:	8d 4d c8             	lea    ecx,[ebp-0x38]
  55a23c:	89 85 08 ff ff ff    	mov    DWORD PTR [ebp-0xf8],eax
  55a242:	e8 10 a3 ea ff       	call   0x404557 ; ["call resolved=0x54df70 "]
  55a247:	8b 55 c8             	mov    edx,DWORD PTR [ebp-0x38]
  55a24a:	85 d2                	test   edx,edx
  55a24c:	75 1b                	jne    0x55a269
  55a24e:	68 2d 25 00 00       	push   0x252d
  55a253:	68 88 1e 6c 00       	push   0x6c1e88
  55a258:	68 48 90 6c 00       	push   0x6c9048
  55a25d:	ff 15 30 e4 79 00    	call   DWORD PTR ds:0x79e430
  55a263:	8b 55 c8             	mov    edx,DWORD PTR [ebp-0x38]
  55a266:	83 c4 0c             	add    esp,0xc
  55a269:	0f b6 02             	movzx  eax,BYTE PTR [edx]
  55a26c:	83 e8 01             	sub    eax,0x1
  55a26f:	74 28                	je     0x55a299
  55a271:	83 e8 01             	sub    eax,0x1
  55a274:	74 0f                	je     0x55a285
  55a276:	8b 4d cc             	mov    ecx,DWORD PTR [ebp-0x34]
  55a279:	c7 85 04 ff ff ff 01 	mov    DWORD PTR [ebp-0xfc],0x1
  55a283:	eb 22                	jmp    0x55a2a7
  55a285:	8b 42 08             	mov    eax,DWORD PTR [edx+0x8]
  55a288:	8b 4d d4             	mov    ecx,DWORD PTR [ebp-0x2c]
  55a28b:	89 8d 04 ff ff ff    	mov    DWORD PTR [ebp-0xfc],ecx
  55a291:	8b 4d cc             	mov    ecx,DWORD PTR [ebp-0x34]
  55a294:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  55a297:	eb 11                	jmp    0x55a2aa
  55a299:	8b 4a 08             	mov    ecx,DWORD PTR [edx+0x8]
  55a29c:	8b 45 d4             	mov    eax,DWORD PTR [ebp-0x2c]
  55a29f:	89 85 04 ff ff ff    	mov    DWORD PTR [ebp-0xfc],eax
  55a2a5:	8b 09                	mov    ecx,DWORD PTR [ecx]
  55a2a7:	8b 45 d0             	mov    eax,DWORD PTR [ebp-0x30]
  55a2aa:	89 8d fc fe ff ff    	mov    DWORD PTR [ebp-0x104],ecx
  55a2b0:	89 85 f8 fe ff ff    	mov    DWORD PTR [ebp-0x108],eax
  55a2b6:	3b da                	cmp    ebx,edx
  55a2b8:	0f 85 1a 06 00 00    	jne    0x55a8d8
  55a2be:	66 90                	xchg   ax,ax
  55a2c0:	0f b6 13             	movzx  edx,BYTE PTR [ebx]
  55a2c3:	8b da                	mov    ebx,edx
  55a2c5:	83 eb 01             	sub    ebx,0x1
  55a2c8:	74 17                	je     0x55a2e1
  55a2ca:	8b 8d 08 ff ff ff    	mov    ecx,DWORD PTR [ebp-0xf8]
  55a2d0:	83 eb 01             	sub    ebx,0x1
  55a2d3:	74 08                	je     0x55a2dd
  55a2d5:	3b 8d 04 ff ff ff    	cmp    ecx,DWORD PTR [ebp-0xfc]
  55a2db:	eb 0c                	jmp    0x55a2e9
  55a2dd:	3b f0                	cmp    esi,eax
  55a2df:	eb 08                	jmp    0x55a2e9
  55a2e1:	3b f9                	cmp    edi,ecx
  55a2e3:	8b 8d 08 ff ff ff    	mov    ecx,DWORD PTR [ebp-0xf8]
  55a2e9:	0f 95 c0             	setne  al
  55a2ec:	84 c0                	test   al,al
  55a2ee:	0f 84 fb 02 00 00    	je     0x55a5ef
  55a2f4:	83 ea 00             	sub    edx,0x0
  55a2f7:	0f 84 d9 02 00 00    	je     0x55a5d6
  55a2fd:	83 ea 01             	sub    edx,0x1
  55a300:	74 39                	je     0x55a33b
  55a302:	83 ea 01             	sub    edx,0x1
  55a305:	74 0d                	je     0x55a314
  55a307:	85 c9                	test   ecx,ecx
  55a309:	0f 85 e8 05 00 00    	jne    0x55a8f7
  55a30f:	8b 45 e0             	mov    eax,DWORD PTR [ebp-0x20]
  55a312:	eb 4c                	jmp    0x55a360
  55a314:	8b 45 e0             	mov    eax,DWORD PTR [ebp-0x20]
  55a317:	8b 40 08             	mov    eax,DWORD PTR [eax+0x8]
  55a31a:	3b 70 04             	cmp    esi,DWORD PTR [eax+0x4]
  55a31d:	75 18                	jne    0x55a337
  55a31f:	68 58 25 00 00       	push   0x2558
  55a324:	68 88 1e 6c 00       	push   0x6c1e88
  55a329:	68 00 91 6c 00       	push   0x6c9100
  55a32e:	ff 15 30 e4 79 00    	call   DWORD PTR ds:0x79e430
  55a334:	83 c4 0c             	add    esp,0xc
  55a337:	8b c6                	mov    eax,esi
  55a339:	eb 25                	jmp    0x55a360
  55a33b:	8b 45 e0             	mov    eax,DWORD PTR [ebp-0x20]
  55a33e:	8b 40 08             	mov    eax,DWORD PTR [eax+0x8]
  55a341:	3b 38                	cmp    edi,DWORD PTR [eax]
  55a343:	75 18                	jne    0x55a35d
  55a345:	68 52 25 00 00       	push   0x2552
  55a34a:	68 88 1e 6c 00       	push   0x6c1e88
  55a34f:	68 78 90 6c 00       	push   0x6c9078
  55a354:	ff 15 30 e4 79 00    	call   DWORD PTR ds:0x79e430
  55a35a:	83 c4 0c             	add    esp,0xc
  55a35d:	8d 47 28             	lea    eax,[edi+0x28]
  55a360:	c7 85 5c ff ff ff 00 	mov    DWORD PTR [ebp-0xa4],0x0
  55a36a:	c7 85 74 ff ff ff 00 	mov    DWORD PTR [ebp-0x8c],0x0
  55a374:	c7 45 8c 00 00 00 00 	mov    DWORD PTR [ebp-0x74],0x0
  55a37b:	c7 45 a4 00 00 00 00 	mov    DWORD PTR [ebp-0x5c],0x0
  55a382:	c7 85 6c ff ff ff 00 	mov    DWORD PTR [ebp-0x94],0x0
  55a38c:	c7 85 70 ff ff ff 0f 	mov    DWORD PTR [ebp-0x90],0xf
  55a396:	c6 85 5c ff ff ff 00 	mov    BYTE PTR [ebp-0xa4],0x0
  55a39d:	c7 45 84 00 00 00 00 	mov    DWORD PTR [ebp-0x7c],0x0
  55a3a4:	c7 45 88 0f 00 00 00 	mov    DWORD PTR [ebp-0x78],0xf
  55a3ab:	c6 85 74 ff ff ff 00 	mov    BYTE PTR [ebp-0x8c],0x0
  55a3b2:	c7 45 9c 00 00 00 00 	mov    DWORD PTR [ebp-0x64],0x0
  55a3b9:	c7 45 a0 0f 00 00 00 	mov    DWORD PTR [ebp-0x60],0xf
  55a3c0:	c6 45 8c 00          	mov    BYTE PTR [ebp-0x74],0x0
  55a3c4:	c7 45 b4 00 00 00 00 	mov    DWORD PTR [ebp-0x4c],0x0
  55a3cb:	c7 45 b8 0f 00 00 00 	mov    DWORD PTR [ebp-0x48],0xf
  55a3d2:	c6 45 a4 00          	mov    BYTE PTR [ebp-0x5c],0x0
  55a3d6:	50                   	push   eax
  55a3d7:	8d 8d 5c ff ff ff    	lea    ecx,[ebp-0xa4]
  55a3dd:	c7 45 fc 08 00 00 00 	mov    DWORD PTR [ebp-0x4],0x8
  55a3e4:	e8 46 a6 ea ff       	call   0x404a2f ; ["call resolved=0x559750 "]
  55a3e9:	8b 85 00 ff ff ff    	mov    eax,DWORD PTR [ebp-0x100]
  55a3ef:	8b 98 f8 00 00 00    	mov    ebx,DWORD PTR [eax+0xf8]
  55a3f5:	3b 98 fc 00 00 00    	cmp    ebx,DWORD PTR [eax+0xfc]
  55a3fb:	74 53                	je     0x55a450
  55a3fd:	8d 85 5c ff ff ff    	lea    eax,[ebp-0xa4]
  55a403:	89 5d d4             	mov    DWORD PTR [ebp-0x2c],ebx
  55a406:	50                   	push   eax
  55a407:	8b cb                	mov    ecx,ebx
  55a409:	e8 7d b8 ea ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  55a40e:	8d 85 74 ff ff ff    	lea    eax,[ebp-0x8c]
  55a414:	c6 45 fc 09          	mov    BYTE PTR [ebp-0x4],0x9
  55a418:	8d 4b 18             	lea    ecx,[ebx+0x18]
  55a41b:	50                   	push   eax
  55a41c:	e8 6a b8 ea ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  55a421:	8d 45 8c             	lea    eax,[ebp-0x74]
  55a424:	c6 45 fc 0a          	mov    BYTE PTR [ebp-0x4],0xa
  55a428:	8d 4b 30             	lea    ecx,[ebx+0x30]
  55a42b:	50                   	push   eax
  55a42c:	e8 5a b8 ea ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  55a431:	8d 45 a4             	lea    eax,[ebp-0x5c]
  55a434:	c6 45 fc 0b          	mov    BYTE PTR [ebp-0x4],0xb
  55a438:	8d 4b 48             	lea    ecx,[ebx+0x48]
  55a43b:	50                   	push   eax
  55a43c:	e8 4a b8 ea ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  55a441:	8b 85 00 ff ff ff    	mov    eax,DWORD PTR [ebp-0x100]
  55a447:	83 80 f8 00 00 00 60 	add    DWORD PTR [eax+0xf8],0x60
  55a44e:	eb 13                	jmp    0x55a463
  55a450:	8d 8d 5c ff ff ff    	lea    ecx,[ebp-0xa4]
  55a456:	51                   	push   ecx
  55a457:	53                   	push   ebx
  55a458:	8d 88 f4 00 00 00    	lea    ecx,[eax+0xf4]
  55a45e:	e8 b3 be ea ff       	call   0x406316 ; ["call resolved=0x54c900 "]
  55a463:	8b 55 b8             	mov    edx,DWORD PTR [ebp-0x48]
  55a466:	c7 45 fc ff ff ff ff 	mov    DWORD PTR [ebp-0x4],0xffffffff
  55a46d:	83 fa 10             	cmp    edx,0x10
  55a470:	72 2c                	jb     0x55a49e
  55a472:	8b 4d a4             	mov    ecx,DWORD PTR [ebp-0x5c]
  55a475:	42                   	inc    edx
  55a476:	8b c1                	mov    eax,ecx
  55a478:	81 fa 00 10 00 00    	cmp    edx,0x1000
  55a47e:	72 14                	jb     0x55a494
  55a480:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  55a483:	83 c2 23             	add    edx,0x23
  55a486:	2b c1                	sub    eax,ecx
  55a488:	83 c0 fc             	add    eax,0xfffffffc
  55a48b:	83 f8 1f             	cmp    eax,0x1f
  55a48e:	0f 87 77 f7 ff ff    	ja     0x559c0b
  55a494:	52                   	push   edx
  55a495:	51                   	push   ecx
  55a496:	e8 ff 7b ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  55a49b:	83 c4 08             	add    esp,0x8
  55a49e:	8b 55 a0             	mov    edx,DWORD PTR [ebp-0x60]
  55a4a1:	c7 45 b4 00 00 00 00 	mov    DWORD PTR [ebp-0x4c],0x0
  55a4a8:	c7 45 b8 0f 00 00 00 	mov    DWORD PTR [ebp-0x48],0xf
  55a4af:	c6 45 a4 00          	mov    BYTE PTR [ebp-0x5c],0x0
  55a4b3:	83 fa 10             	cmp    edx,0x10
  55a4b6:	72 2c                	jb     0x55a4e4
  55a4b8:	8b 4d 8c             	mov    ecx,DWORD PTR [ebp-0x74]
  55a4bb:	42                   	inc    edx
  55a4bc:	8b c1                	mov    eax,ecx
  55a4be:	81 fa 00 10 00 00    	cmp    edx,0x1000
  55a4c4:	72 14                	jb     0x55a4da
  55a4c6:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  55a4c9:	83 c2 23             	add    edx,0x23
  55a4cc:	2b c1                	sub    eax,ecx
  55a4ce:	83 c0 fc             	add    eax,0xfffffffc
  55a4d1:	83 f8 1f             	cmp    eax,0x1f
  55a4d4:	0f 87 31 f7 ff ff    	ja     0x559c0b
  55a4da:	52                   	push   edx
  55a4db:	51                   	push   ecx
  55a4dc:	e8 b9 7b ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  55a4e1:	83 c4 08             	add    esp,0x8
  55a4e4:	8b 55 88             	mov    edx,DWORD PTR [ebp-0x78]
  55a4e7:	c7 45 9c 00 00 00 00 	mov    DWORD PTR [ebp-0x64],0x0
  55a4ee:	c7 45 a0 0f 00 00 00 	mov    DWORD PTR [ebp-0x60],0xf
  55a4f5:	c6 45 8c 00          	mov    BYTE PTR [ebp-0x74],0x0
  55a4f9:	83 fa 10             	cmp    edx,0x10
  55a4fc:	72 2f                	jb     0x55a52d
  55a4fe:	8b 8d 74 ff ff ff    	mov    ecx,DWORD PTR [ebp-0x8c]
  55a504:	42                   	inc    edx
  55a505:	8b c1                	mov    eax,ecx
  55a507:	81 fa 00 10 00 00    	cmp    edx,0x1000
  55a50d:	72 14                	jb     0x55a523
  55a50f:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  55a512:	83 c2 23             	add    edx,0x23
  55a515:	2b c1                	sub    eax,ecx
  55a517:	83 c0 fc             	add    eax,0xfffffffc
  55a51a:	83 f8 1f             	cmp    eax,0x1f
  55a51d:	0f 87 e8 f6 ff ff    	ja     0x559c0b
  55a523:	52                   	push   edx
  55a524:	51                   	push   ecx
  55a525:	e8 70 7b ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  55a52a:	83 c4 08             	add    esp,0x8
  55a52d:	8b 95 70 ff ff ff    	mov    edx,DWORD PTR [ebp-0x90]
  55a533:	c7 45 84 00 00 00 00 	mov    DWORD PTR [ebp-0x7c],0x0
  55a53a:	c7 45 88 0f 00 00 00 	mov    DWORD PTR [ebp-0x78],0xf
  55a541:	c6 85 74 ff ff ff 00 	mov    BYTE PTR [ebp-0x8c],0x0
  55a548:	83 fa 10             	cmp    edx,0x10
  55a54b:	72 2f                	jb     0x55a57c
  55a54d:	8b 8d 5c ff ff ff    	mov    ecx,DWORD PTR [ebp-0xa4]
  55a553:	42                   	inc    edx
  55a554:	8b c1                	mov    eax,ecx
  55a556:	81 fa 00 10 00 00    	cmp    edx,0x1000
  55a55c:	72 14                	jb     0x55a572
  55a55e:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  55a561:	83 c2 23             	add    edx,0x23
  55a564:	2b c1                	sub    eax,ecx
  55a566:	83 c0 fc             	add    eax,0xfffffffc
  55a569:	83 f8 1f             	cmp    eax,0x1f
  55a56c:	0f 87 99 f6 ff ff    	ja     0x559c0b
  55a572:	52                   	push   edx
  55a573:	51                   	push   ecx
  55a574:	e8 21 7b ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  55a579:	83 c4 08             	add    esp,0x8
  55a57c:	8b 5d e0             	mov    ebx,DWORD PTR [ebp-0x20]
  55a57f:	0f b6 03             	movzx  eax,BYTE PTR [ebx]
  55a582:	83 e8 01             	sub    eax,0x1
  55a585:	74 30                	je     0x55a5b7
  55a587:	83 e8 01             	sub    eax,0x1
  55a58a:	74 17                	je     0x55a5a3
  55a58c:	ff 85 08 ff ff ff    	inc    DWORD PTR [ebp-0xf8]
  55a592:	8b 85 f8 fe ff ff    	mov    eax,DWORD PTR [ebp-0x108]
  55a598:	8b 8d fc fe ff ff    	mov    ecx,DWORD PTR [ebp-0x104]
  55a59e:	e9 1d fd ff ff       	jmp    0x55a2c0
  55a5a3:	8b 85 f8 fe ff ff    	mov    eax,DWORD PTR [ebp-0x108]
  55a5a9:	83 c6 10             	add    esi,0x10
  55a5ac:	8b 8d fc fe ff ff    	mov    ecx,DWORD PTR [ebp-0x104]
  55a5b2:	e9 09 fd ff ff       	jmp    0x55a2c0
  55a5b7:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  55a5ba:	89 7d d4             	mov    DWORD PTR [ebp-0x2c],edi
  55a5bd:	e8 b5 c5 ea ff       	call   0x406b77 ; ["call resolved=0x473080 "]
  55a5c2:	8b 7d d4             	mov    edi,DWORD PTR [ebp-0x2c]
  55a5c5:	8b 85 f8 fe ff ff    	mov    eax,DWORD PTR [ebp-0x108]
  55a5cb:	8b 8d fc fe ff ff    	mov    ecx,DWORD PTR [ebp-0x104]
  55a5d1:	e9 ea fc ff ff       	jmp    0x55a2c0
  55a5d6:	68 84 91 6c 00       	push   0x6c9184 ; ["cannot get value"]
  55a5db:	8d 4d d8             	lea    ecx,[ebp-0x28]
  55a5de:	e8 3d 81 ea ff       	call   0x402720 ; ["call resolved=0x46a4f0 "]
  55a5e3:	c7 45 fc 06 00 00 00 	mov    DWORD PTR [ebp-0x4],0x6
  55a5ea:	e9 1c 03 00 00       	jmp    0x55a90b
  55a5ef:	ff 15 80 e0 79 00    	call   DWORD PTR ds:0x79e080
  55a5f5:	8b 9d 00 ff ff ff    	mov    ebx,DWORD PTR [ebp-0x100]
  55a5fb:	89 93 44 01 00 00    	mov    DWORD PTR [ebx+0x144],edx
  55a601:	8d 53 7c             	lea    edx,[ebx+0x7c]
  55a604:	89 83 40 01 00 00    	mov    DWORD PTR [ebx+0x140],eax
  55a60a:	83 7a 14 10          	cmp    DWORD PTR [edx+0x14],0x10
  55a60e:	72 0e                	jb     0x55a61e
  55a610:	8b 0a                	mov    ecx,DWORD PTR [edx]
  55a612:	8b f1                	mov    esi,ecx
  55a614:	03 72 10             	add    esi,DWORD PTR [edx+0x10]
  55a617:	8b f9                	mov    edi,ecx
  55a619:	03 7a 10             	add    edi,DWORD PTR [edx+0x10]
  55a61c:	eb 0b                	jmp    0x55a629
  55a61e:	8b 42 10             	mov    eax,DWORD PTR [edx+0x10]
  55a621:	8b ca                	mov    ecx,edx
  55a623:	8d 34 10             	lea    esi,[eax+edx*1]
  55a626:	8d 3c 02             	lea    edi,[edx+eax*1]
  55a629:	8b c6                	mov    eax,esi
  55a62b:	2b c1                	sub    eax,ecx
  55a62d:	50                   	push   eax
  55a62e:	6a 3a                	push   0x3a
  55a630:	51                   	push   ecx
  55a631:	e8 4e e1 10 00       	call   0x668784 ; ["call resolved=0x668784 "]
  55a636:	83 c4 0c             	add    esp,0xc
  55a639:	8b ce                	mov    ecx,esi
  55a63b:	85 c0                	test   eax,eax
  55a63d:	0f 45 c8             	cmovne ecx,eax
  55a640:	3b ce                	cmp    ecx,esi
  55a642:	74 1b                	je     0x55a65f
  55a644:	8d 41 01             	lea    eax,[ecx+0x1]
  55a647:	3b c6                	cmp    eax,esi
  55a649:	74 14                	je     0x55a65f
  55a64b:	0f 1f 44 00 00       	nop    DWORD PTR [eax+eax*1+0x0]
  55a650:	8a 10                	mov    dl,BYTE PTR [eax]
  55a652:	80 fa 3a             	cmp    dl,0x3a
  55a655:	74 03                	je     0x55a65a
  55a657:	88 11                	mov    BYTE PTR [ecx],dl
  55a659:	41                   	inc    ecx
  55a65a:	40                   	inc    eax
  55a65b:	3b c6                	cmp    eax,esi
  55a65d:	75 f1                	jne    0x55a650
  55a65f:	57                   	push   edi
  55a660:	51                   	push   ecx
  55a661:	8d 45 d4             	lea    eax,[ebp-0x2c]
  55a664:	8d 73 7c             	lea    esi,[ebx+0x7c]
  55a667:	50                   	push   eax
  55a668:	8b ce                	mov    ecx,esi
  55a66a:	e8 38 7c ea ff       	call   0x4022a7 ; ["call resolved=0x525bf0 "]
  55a66f:	56                   	push   esi
  55a670:	8d 4d d8             	lea    ecx,[ebp-0x28]
  55a673:	e8 13 b6 ea ff       	call   0x405c8b ; ["call resolved=0x46a360 "]
  55a678:	6a 01                	push   0x1
  55a67a:	8d 8d 0c ff ff ff    	lea    ecx,[ebp-0xf4]
  55a680:	c7 45 fc 0c 00 00 00 	mov    DWORD PTR [ebp-0x4],0xc
  55a687:	e8 31 bb ea ff       	call   0x4061bd ; ["call resolved=0x4ce3c0 "]
  55a68c:	68 4a 7f 40 00       	push   0x407f4a
  55a691:	8d 8d 1c ff ff ff    	lea    ecx,[ebp-0xe4]
  55a697:	c6 45 fc 0d          	mov    BYTE PTR [ebp-0x4],0xd
  55a69b:	ff 15 54 d1 79 00    	call   DWORD PTR ds:0x79d154
  55a6a1:	83 7d ec 10          	cmp    DWORD PTR [ebp-0x14],0x10
  55a6a5:	8d 4d d8             	lea    ecx,[ebp-0x28]
  55a6a8:	ff 75 e8             	push   DWORD PTR [ebp-0x18]
  55a6ab:	0f 43 4d d8          	cmovae ecx,DWORD PTR [ebp-0x28]
  55a6af:	51                   	push   ecx
  55a6b0:	50                   	push   eax
  55a6b1:	e8 d8 a3 ea ff       	call   0x404a8e ; ["call resolved=0x54ced0 "]
  55a6b6:	83 c4 0c             	add    esp,0xc
  55a6b9:	8d 45 d0             	lea    eax,[ebp-0x30]
  55a6bc:	8d 8d 0c ff ff ff    	lea    ecx,[ebp-0xf4]
  55a6c2:	50                   	push   eax
  55a6c3:	ff 15 2c d2 79 00    	call   DWORD PTR ds:0x79d22c
  55a6c9:	8b 85 0c ff ff ff    	mov    eax,DWORD PTR [ebp-0xf4]
  55a6cf:	8b 75 d0             	mov    esi,DWORD PTR [ebp-0x30]
  55a6d2:	8b 7d d4             	mov    edi,DWORD PTR [ebp-0x2c]
  55a6d5:	8b 40 04             	mov    eax,DWORD PTR [eax+0x4]
  55a6d8:	c7 84 05 0c ff ff ff 	mov    DWORD PTR [ebp+eax*1-0xf4],0x6c446c
  55a6e3:	8b 85 0c ff ff ff    	mov    eax,DWORD PTR [ebp-0xf4]
  55a6e9:	8b 48 04             	mov    ecx,DWORD PTR [eax+0x4]
  55a6ec:	8d 41 98             	lea    eax,[ecx-0x68]
  55a6ef:	89 84 0d 08 ff ff ff 	mov    DWORD PTR [ebp+ecx*1-0xf8],eax
  55a6f6:	8d 8d 24 ff ff ff    	lea    ecx,[ebp-0xdc]
  55a6fc:	e8 dd 99 ea ff       	call   0x4040de ; ["call resolved=0x46f4f0 "]
  55a701:	8d 8d 2c ff ff ff    	lea    ecx,[ebp-0xd4]
  55a707:	ff 15 30 d1 79 00    	call   DWORD PTR ds:0x79d130
  55a70d:	8d 8d 74 ff ff ff    	lea    ecx,[ebp-0x8c]
  55a713:	ff 15 d0 d0 79 00    	call   DWORD PTR ds:0x79d0d0
  55a719:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  55a71c:	c7 45 fc ff ff ff ff 	mov    DWORD PTR [ebp-0x4],0xffffffff
  55a723:	83 fa 10             	cmp    edx,0x10
  55a726:	72 2e                	jb     0x55a756
  55a728:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  55a72b:	42                   	inc    edx
  55a72c:	8b c1                	mov    eax,ecx
  55a72e:	81 fa 00 10 00 00    	cmp    edx,0x1000
  55a734:	72 16                	jb     0x55a74c
  55a736:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  55a739:	83 c2 23             	add    edx,0x23
  55a73c:	2b c1                	sub    eax,ecx
  55a73e:	83 c0 fc             	add    eax,0xfffffffc
  55a741:	83 f8 1f             	cmp    eax,0x1f
  55a744:	76 06                	jbe    0x55a74c
  55a746:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  55a74c:	52                   	push   edx
  55a74d:	51                   	push   ecx
  55a74e:	e8 47 79 ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  55a753:	83 c4 08             	add    esp,0x8
  55a756:	89 bb 3c 01 00 00    	mov    DWORD PTR [ebx+0x13c],edi
  55a75c:	8b bd f4 fe ff ff    	mov    edi,DWORD PTR [ebp-0x10c]
  55a762:	8b cf                	mov    ecx,edi
  55a764:	68 40 8c 6d 00       	push   0x6d8c40 ; ["btSwitch"]
  55a769:	89 b3 38 01 00 00    	mov    DWORD PTR [ebx+0x138],esi
  55a76f:	e8 03 b5 ea ff       	call   0x405c77 ; ["call resolved=0x512c30 "]
  55a774:	84 c0                	test   al,al
  55a776:	74 33                	je     0x55a7ab
  55a778:	68 40 8c 6d 00       	push   0x6d8c40 ; ["btSwitch"]
  55a77d:	8b cf                	mov    ecx,edi
  55a77f:	e8 bb 88 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  55a784:	8a 00                	mov    al,BYTE PTR [eax]
  55a786:	3c 05                	cmp    al,0x5
  55a788:	74 08                	je     0x55a792
  55a78a:	3c 06                	cmp    al,0x6
  55a78c:	74 04                	je     0x55a792
  55a78e:	3c 07                	cmp    al,0x7
  55a790:	75 19                	jne    0x55a7ab
  55a792:	68 40 8c 6d 00       	push   0x6d8c40 ; ["btSwitch"]
  55a797:	8b cf                	mov    ecx,edi
  55a799:	e8 a1 88 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  55a79e:	8b c8                	mov    ecx,eax
  55a7a0:	e8 98 76 ea ff       	call   0x401e3d ; ["call resolved=0x54c3b0 "]
  55a7a5:	89 83 48 01 00 00    	mov    DWORD PTR [ebx+0x148],eax
  55a7ab:	68 4c 8c 6d 00       	push   0x6d8c4c ; ["wifiSwitch"]
  55a7b0:	8b cf                	mov    ecx,edi
  55a7b2:	e8 72 df ea ff       	call   0x408729 ; ["call resolved=0x4a93b0 "]
  55a7b7:	84 c0                	test   al,al
  55a7b9:	74 38                	je     0x55a7f3
  55a7bb:	68 4c 8c 6d 00       	push   0x6d8c4c ; ["wifiSwitch"]
  55a7c0:	8b cf                	mov    ecx,edi
  55a7c2:	e8 78 88 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  55a7c7:	8a 00                	mov    al,BYTE PTR [eax]
  55a7c9:	3c 05                	cmp    al,0x5
  55a7cb:	74 08                	je     0x55a7d5
  55a7cd:	3c 06                	cmp    al,0x6
  55a7cf:	74 04                	je     0x55a7d5
  55a7d1:	3c 07                	cmp    al,0x7
  55a7d3:	75 1e                	jne    0x55a7f3
  55a7d5:	68 4c 8c 6d 00       	push   0x6d8c4c ; ["wifiSwitch"]
  55a7da:	8b cf                	mov    ecx,edi
  55a7dc:	e8 5e 88 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  55a7e1:	8b c8                	mov    ecx,eax
  55a7e3:	e8 55 76 ea ff       	call   0x401e3d ; ["call resolved=0x54c3b0 "]
  55a7e8:	89 83 4c 01 00 00    	mov    DWORD PTR [ebx+0x14c],eax
  55a7ee:	e9 93 00 00 00       	jmp    0x55a886
  55a7f3:	83 7b 30 10          	cmp    DWORD PTR [ebx+0x30],0x10
  55a7f7:	8d 73 1c             	lea    esi,[ebx+0x1c]
  55a7fa:	72 02                	jb     0x55a7fe
  55a7fc:	8b 36                	mov    esi,DWORD PTR [esi]
  55a7fe:	6a 5c                	push   0x5c
  55a800:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  55a805:	e8 5c df 10 00       	call   0x668766 ; ["call resolved=0x668766 "]
  55a80a:	83 c4 08             	add    esp,0x8
  55a80d:	85 c0                	test   eax,eax
  55a80f:	74 12                	je     0x55a823
  55a811:	6a 5c                	push   0x5c
  55a813:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  55a818:	e8 49 df 10 00       	call   0x668766 ; ["call resolved=0x668766 "]
  55a81d:	83 c4 08             	add    esp,0x8
  55a820:	40                   	inc    eax
  55a821:	eb 05                	jmp    0x55a828
  55a823:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  55a828:	56                   	push   esi
  55a829:	68 5c 8c 6d 00       	push   0x6d8c5c ; ["BtFarawayDevice::setAllInfo"]
  55a82e:	68 c6 01 00 00       	push   0x1c6
  55a833:	50                   	push   eax
  55a834:	68 80 8c 6d 00       	push   0x6d8c80 ; ["[ConntctionModule][%s:%d][%s]: deviceId %s report wifiSwitch is null\n"]
  55a839:	8d 45 d4             	lea    eax,[ebp-0x2c]
  55a83c:	c7 45 d4 02 00 00 00 	mov    DWORD PTR [ebp-0x2c],0x2
  55a843:	50                   	push   eax
  55a844:	8d 45 d8             	lea    eax,[ebp-0x28]
  55a847:	50                   	push   eax
  55a848:	e8 bc c7 ea ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  55a84d:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  55a850:	83 c4 1c             	add    esp,0x1c
  55a853:	83 fa 10             	cmp    edx,0x10
  55a856:	72 2e                	jb     0x55a886
  55a858:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  55a85b:	42                   	inc    edx
  55a85c:	8b c1                	mov    eax,ecx
  55a85e:	81 fa 00 10 00 00    	cmp    edx,0x1000
  55a864:	72 16                	jb     0x55a87c
  55a866:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  55a869:	83 c2 23             	add    edx,0x23
  55a86c:	2b c1                	sub    eax,ecx
  55a86e:	83 c0 fc             	add    eax,0xfffffffc
  55a871:	83 f8 1f             	cmp    eax,0x1f
  55a874:	76 06                	jbe    0x55a87c
  55a876:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  55a87c:	52                   	push   edx
  55a87d:	51                   	push   ecx
  55a87e:	e8 17 78 ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  55a883:	83 c4 08             	add    esp,0x8
  55a886:	68 d4 8c 6d 00       	push   0x6d8cd4 ; ["pushInfo"]
  55a88b:	8b cf                	mov    ecx,edi
  55a88d:	e8 e5 b3 ea ff       	call   0x405c77 ; ["call resolved=0x512c30 "]
  55a892:	84 c0                	test   al,al
  55a894:	74 24                	je     0x55a8ba
  55a896:	83 ec 10             	sub    esp,0x10
  55a899:	8b cf                	mov    ecx,edi
  55a89b:	8b f4                	mov    esi,esp
  55a89d:	68 d4 8c 6d 00       	push   0x6d8cd4 ; ["pushInfo"]
  55a8a2:	e8 98 87 ea ff       	call   0x40303f ; ["call resolved=0x4a8150 "]
  55a8a7:	50                   	push   eax
  55a8a8:	8b ce                	mov    ecx,esi
  55a8aa:	e8 5c 7a ea ff       	call   0x40230b ; ["call resolved=0x469d20 "]
  55a8af:	8d 8b 98 01 00 00    	lea    ecx,[ebx+0x198]
  55a8b5:	e8 cb 9b ea ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  55a8ba:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  55a8bd:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  55a8c4:	59                   	pop    ecx
  55a8c5:	5f                   	pop    edi
  55a8c6:	5e                   	pop    esi
  55a8c7:	5b                   	pop    ebx
  55a8c8:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  55a8cb:	33 cd                	xor    ecx,ebp
  55a8cd:	e8 bd 9b ea ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  55a8d2:	8b e5                	mov    esp,ebp
  55a8d4:	5d                   	pop    ebp
  55a8d5:	c2 04 00             	ret    0x4
  55a8d8:	68 98 91 6c 00       	push   0x6c9198 ; ["cannot compare iterators of different containers"]
  55a8dd:	8d 4d d8             	lea    ecx,[ebp-0x28]
  55a8e0:	e8 3b 7e ea ff       	call   0x402720 ; ["call resolved=0x46a4f0 "]
  55a8e5:	8d 45 d8             	lea    eax,[ebp-0x28]
  55a8e8:	c7 45 fc 05 00 00 00 	mov    DWORD PTR [ebp-0x4],0x5
  55a8ef:	50                   	push   eax
  55a8f0:	68 d4 00 00 00       	push   0xd4
  55a8f5:	eb 1d                	jmp    0x55a914
  55a8f7:	68 84 91 6c 00       	push   0x6c9184 ; ["cannot get value"]
  55a8fc:	8d 4d d8             	lea    ecx,[ebp-0x28]
  55a8ff:	e8 1c 7e ea ff       	call   0x402720 ; ["call resolved=0x46a4f0 "]
  55a904:	c7 45 fc 07 00 00 00 	mov    DWORD PTR [ebp-0x4],0x7
  55a90b:	8d 45 d8             	lea    eax,[ebp-0x28]
  55a90e:	50                   	push   eax
  55a90f:	68 d6 00 00 00       	push   0xd6
  55a914:	8d 45 bc             	lea    eax,[ebp-0x44]
  55a917:	50                   	push   eax
  55a918:	e8 e2 df ea ff       	call   0x4088ff ; ["call resolved=0x4b1c90 "]
  55a91d:	83 c4 0c             	add    esp,0xc
  55a920:	8d 45 bc             	lea    eax,[ebp-0x44]
  55a923:	68 48 f5 72 00       	push   0x72f548
  55a928:	50                   	push   eax
  55a929:	e8 4a de 10 00       	call   0x668778 ; ["call resolved=0x668778 "]
