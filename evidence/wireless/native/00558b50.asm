; BtFarawayDevice::recvMsg; image base 0x400000; static annotation only
  558b50:	55                   	push   ebp
  558b51:	8b ec                	mov    ebp,esp
  558b53:	6a ff                	push   0xffffffff
  558b55:	68 bd 7e 68 00       	push   0x687ebd
  558b5a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  558b60:	50                   	push   eax
  558b61:	83 ec 34             	sub    esp,0x34
  558b64:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  558b69:	33 c5                	xor    eax,ebp
  558b6b:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  558b6e:	53                   	push   ebx
  558b6f:	56                   	push   esi
  558b70:	57                   	push   edi
  558b71:	50                   	push   eax
  558b72:	8d 45 f4             	lea    eax,[ebp-0xc]
  558b75:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  558b7b:	8b f9                	mov    edi,ecx
  558b7d:	8b 45 08             	mov    eax,DWORD PTR [ebp+0x8]
  558b80:	b9 74 8b 7a 00       	mov    ecx,0x7a8b74
  558b85:	89 45 c8             	mov    DWORD PTR [ebp-0x38],eax
  558b88:	8b 45 0c             	mov    eax,DWORD PTR [ebp+0xc]
  558b8b:	89 45 cc             	mov    DWORD PTR [ebp-0x34],eax
  558b8e:	8b 45 10             	mov    eax,DWORD PTR [ebp+0x10]
  558b91:	89 45 d4             	mov    DWORD PTR [ebp-0x2c],eax
  558b94:	e8 55 ff ea ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  558b99:	c7 45 c0 00 00 00 00 	mov    DWORD PTR [ebp-0x40],0x0
  558ba0:	c7 45 c4 00 00 00 00 	mov    DWORD PTR [ebp-0x3c],0x0
  558ba7:	8d 9f dc 0e 00 00    	lea    ebx,[edi+0xedc]
  558bad:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  558bb4:	53                   	push   ebx
  558bb5:	e8 48 cb 10 00       	call   0x665702 ; ["call resolved=0x665702 "]
  558bba:	83 c4 04             	add    esp,0x4
  558bbd:	85 c0                	test   eax,eax
  558bbf:	0f 85 20 01 00 00    	jne    0x558ce5
  558bc5:	8b b7 64 0e 00 00    	mov    esi,DWORD PTR [edi+0xe64]
  558bcb:	85 f6                	test   esi,esi
  558bcd:	74 0a                	je     0x558bd9
  558bcf:	f0 ff 46 04          	lock inc DWORD PTR [esi+0x4]
  558bd3:	8b b7 64 0e 00 00    	mov    esi,DWORD PTR [edi+0xe64]
  558bd9:	8b bf 60 0e 00 00    	mov    edi,DWORD PTR [edi+0xe60]
  558bdf:	53                   	push   ebx
  558be0:	89 7d c0             	mov    DWORD PTR [ebp-0x40],edi
  558be3:	89 75 c4             	mov    DWORD PTR [ebp-0x3c],esi
  558be6:	e8 1d cb 10 00       	call   0x665708 ; ["call resolved=0x665708 "]
  558beb:	83 c4 04             	add    esp,0x4
  558bee:	85 ff                	test   edi,edi
  558bf0:	0f 85 8b 00 00 00    	jne    0x558c81
  558bf6:	6a 5c                	push   0x5c
  558bf8:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  558bfd:	e8 64 fb 10 00       	call   0x668766 ; ["call resolved=0x668766 "]
  558c02:	83 c4 08             	add    esp,0x8
  558c05:	85 c0                	test   eax,eax
  558c07:	74 12                	je     0x558c1b
  558c09:	6a 5c                	push   0x5c
  558c0b:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  558c10:	e8 51 fb 10 00       	call   0x668766 ; ["call resolved=0x668766 "]
  558c15:	83 c4 08             	add    esp,0x8
  558c18:	40                   	inc    eax
  558c19:	eb 05                	jmp    0x558c20
  558c1b:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  558c20:	68 04 87 6d 00       	push   0x6d8704 ; ["BtFarawayDevice::recvMsg"]
  558c25:	68 c9 00 00 00       	push   0xc9
  558c2a:	50                   	push   eax
  558c2b:	68 60 86 6d 00       	push   0x6d8660 ; ["[ConntctionModule][%s:%d][%s]: client == null\n"]
  558c30:	8d 45 d4             	lea    eax,[ebp-0x2c]
  558c33:	c7 45 d4 04 00 00 00 	mov    DWORD PTR [ebp-0x2c],0x4
  558c3a:	50                   	push   eax
  558c3b:	8d 45 d8             	lea    eax,[ebp-0x28]
  558c3e:	50                   	push   eax
  558c3f:	e8 c5 e3 ea ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  558c44:	8b 55 ec             	mov    edx,DWORD PTR [ebp-0x14]
  558c47:	83 c4 18             	add    esp,0x18
  558c4a:	83 fa 10             	cmp    edx,0x10
  558c4d:	72 2e                	jb     0x558c7d
  558c4f:	8b 4d d8             	mov    ecx,DWORD PTR [ebp-0x28]
  558c52:	42                   	inc    edx
  558c53:	8b c1                	mov    eax,ecx
  558c55:	81 fa 00 10 00 00    	cmp    edx,0x1000
  558c5b:	72 16                	jb     0x558c73
  558c5d:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  558c60:	83 c2 23             	add    edx,0x23
  558c63:	2b c1                	sub    eax,ecx
  558c65:	83 c0 fc             	add    eax,0xfffffffc
  558c68:	83 f8 1f             	cmp    eax,0x1f
  558c6b:	76 06                	jbe    0x558c73
  558c6d:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  558c73:	52                   	push   edx
  558c74:	51                   	push   ecx
  558c75:	e8 20 94 ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  558c7a:	83 c4 08             	add    esp,0x8
  558c7d:	32 db                	xor    bl,bl
  558c7f:	eb 1f                	jmp    0x558ca0
  558c81:	ff 75 d4             	push   DWORD PTR [ebp-0x2c]
  558c84:	8b 07                	mov    eax,DWORD PTR [edi]
  558c86:	8d 4d d0             	lea    ecx,[ebp-0x30]
  558c89:	51                   	push   ecx
  558c8a:	ff 75 cc             	push   DWORD PTR [ebp-0x34]
  558c8d:	8b cf                	mov    ecx,edi
  558c8f:	c7 45 d0 00 02 00 00 	mov    DWORD PTR [ebp-0x30],0x200
  558c96:	ff 75 c8             	push   DWORD PTR [ebp-0x38]
  558c99:	8b 40 10             	mov    eax,DWORD PTR [eax+0x10]
  558c9c:	ff d0                	call   eax
  558c9e:	8a d8                	mov    bl,al
  558ca0:	85 f6                	test   esi,esi
  558ca2:	74 21                	je     0x558cc5
  558ca4:	83 cf ff             	or     edi,0xffffffff
  558ca7:	8b cf                	mov    ecx,edi
  558ca9:	f0 0f c1 4e 04       	lock xadd DWORD PTR [esi+0x4],ecx
  558cae:	75 15                	jne    0x558cc5
  558cb0:	8b 06                	mov    eax,DWORD PTR [esi]
  558cb2:	8b ce                	mov    ecx,esi
  558cb4:	ff 10                	call   DWORD PTR [eax]
  558cb6:	f0 0f c1 7e 08       	lock xadd DWORD PTR [esi+0x8],edi
  558cbb:	4f                   	dec    edi
  558cbc:	75 07                	jne    0x558cc5
  558cbe:	8b 06                	mov    eax,DWORD PTR [esi]
  558cc0:	8b ce                	mov    ecx,esi
  558cc2:	ff 50 04             	call   DWORD PTR [eax+0x4]
  558cc5:	8a c3                	mov    al,bl
  558cc7:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  558cca:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  558cd1:	59                   	pop    ecx
  558cd2:	5f                   	pop    edi
  558cd3:	5e                   	pop    esi
  558cd4:	5b                   	pop    ebx
  558cd5:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  558cd8:	33 cd                	xor    ecx,ebp
  558cda:	e8 b0 b7 ea ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  558cdf:	8b e5                	mov    esp,ebp
  558ce1:	5d                   	pop    ebp
  558ce2:	c2 0c 00             	ret    0xc
  558ce5:	50                   	push   eax
  558ce6:	e8 47 ca 10 00       	call   0x665732 ; ["call resolved=0x665732 "]
