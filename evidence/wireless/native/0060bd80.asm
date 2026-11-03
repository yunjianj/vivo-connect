; SSDPSocket::parserSSDPData; image base 0x400000; static annotation only
  60bd80:	55                   	push   ebp
  60bd81:	8b ec                	mov    ebp,esp
  60bd83:	6a ff                	push   0xffffffff
  60bd85:	68 2c b8 69 00       	push   0x69b82c
  60bd8a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  60bd90:	50                   	push   eax
  60bd91:	81 ec a8 00 00 00    	sub    esp,0xa8
  60bd97:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  60bd9c:	33 c5                	xor    eax,ebp
  60bd9e:	89 45 ec             	mov    DWORD PTR [ebp-0x14],eax
  60bda1:	53                   	push   ebx
  60bda2:	56                   	push   esi
  60bda3:	57                   	push   edi
  60bda4:	50                   	push   eax
  60bda5:	8d 45 f4             	lea    eax,[ebp-0xc]
  60bda8:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  60bdae:	89 65 f0             	mov    DWORD PTR [ebp-0x10],esp
  60bdb1:	8b 7d 0c             	mov    edi,DWORD PTR [ebp+0xc]
  60bdb4:	b9 03 aa 7a 00       	mov    ecx,0x7aaa03
  60bdb9:	8b 75 08             	mov    esi,DWORD PTR [ebp+0x8]
  60bdbc:	89 7d 84             	mov    DWORD PTR [ebp-0x7c],edi
  60bdbf:	c7 45 88 00 00 00 00 	mov    DWORD PTR [ebp-0x78],0x0
  60bdc6:	e8 23 cd df ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  60bdcb:	83 7e 10 00          	cmp    DWORD PTR [esi+0x10],0x0
  60bdcf:	0f 84 b3 05 00 00    	je     0x60c388
  60bdd5:	6a 00                	push   0x0
  60bdd7:	8d 8d 6c ff ff ff    	lea    ecx,[ebp-0x94]
  60bddd:	e8 e0 8a df ff       	call   0x4048c2 ; ["call resolved=0x469bb0 "]
  60bde2:	83 7e 14 10          	cmp    DWORD PTR [esi+0x14],0x10
  60bde6:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  60bded:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  60bdf1:	72 09                	jb     0x60bdfc
  60bdf3:	8b 0e                	mov    ecx,DWORD PTR [esi]
  60bdf5:	8b c1                	mov    eax,ecx
  60bdf7:	03 46 10             	add    eax,DWORD PTR [esi+0x10]
  60bdfa:	eb 07                	jmp    0x60be03
  60bdfc:	8b 46 10             	mov    eax,DWORD PTR [esi+0x10]
  60bdff:	8b ce                	mov    ecx,esi
  60be01:	03 c6                	add    eax,esi
  60be03:	50                   	push   eax
  60be04:	51                   	push   ecx
  60be05:	8d 8d 7c ff ff ff    	lea    ecx,[ebp-0x84]
  60be0b:	e8 d6 93 df ff       	call   0x4051e6 ; ["call resolved=0x4a7d20 "]
  60be10:	83 ec 10             	sub    esp,0x10
  60be13:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  60be17:	8b cc                	mov    ecx,esp
  60be19:	6a 01                	push   0x1
  60be1b:	83 ec 28             	sub    esp,0x28
  60be1e:	8b c4                	mov    eax,esp
  60be20:	c7 40 24 00 00 00 00 	mov    DWORD PTR [eax+0x24],0x0
  60be27:	8d 85 7c ff ff ff    	lea    eax,[ebp-0x84]
  60be2d:	50                   	push   eax
  60be2e:	51                   	push   ecx
  60be2f:	e8 9b 5f df ff       	call   0x401dcf ; ["call resolved=0x4b45e0 "]
  60be34:	83 c4 34             	add    esp,0x34
  60be37:	8d 8d 6c ff ff ff    	lea    ecx,[ebp-0x94]
  60be3d:	e8 43 86 df ff       	call   0x404485 ; ["call resolved=0x472aa0 "]
  60be42:	8b 75 80             	mov    esi,DWORD PTR [ebp-0x80]
  60be45:	85 f6                	test   esi,esi
  60be47:	74 24                	je     0x60be6d
  60be49:	83 cf ff             	or     edi,0xffffffff
  60be4c:	8b c7                	mov    eax,edi
  60be4e:	f0 0f c1 46 04       	lock xadd DWORD PTR [esi+0x4],eax
  60be53:	75 15                	jne    0x60be6a
  60be55:	8b 06                	mov    eax,DWORD PTR [esi]
  60be57:	8b ce                	mov    ecx,esi
  60be59:	ff 10                	call   DWORD PTR [eax]
  60be5b:	f0 0f c1 7e 08       	lock xadd DWORD PTR [esi+0x8],edi
  60be60:	4f                   	dec    edi
  60be61:	75 07                	jne    0x60be6a
  60be63:	8b 06                	mov    eax,DWORD PTR [esi]
  60be65:	8b ce                	mov    ecx,esi
  60be67:	ff 50 04             	call   DWORD PTR [eax+0x4]
  60be6a:	8b 7d 84             	mov    edi,DWORD PTR [ebp-0x7c]
  60be6d:	68 c0 4d 6c 00       	push   0x6c4dc0 ; ["ip"]
  60be72:	8d 8d 6c ff ff ff    	lea    ecx,[ebp-0x94]
  60be78:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  60be7f:	e8 5a 78 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  60be84:	80 38 02             	cmp    BYTE PTR [eax],0x2
  60be87:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  60be8b:	c7 45 e0 00 00 00 00 	mov    DWORD PTR [ebp-0x20],0x0
  60be92:	c7 45 e4 00 00 00 00 	mov    DWORD PTR [ebp-0x1c],0x0
  60be99:	c7 45 e8 00 00 00 00 	mov    DWORD PTR [ebp-0x18],0x0
  60bea0:	c7 45 88 01 00 00 00 	mov    DWORD PTR [ebp-0x78],0x1
  60bea7:	0f 85 fb 04 00 00    	jne    0x60c3a8
  60bead:	ff 75 88             	push   DWORD PTR [ebp-0x78]
  60beb0:	8d 4d e0             	lea    ecx,[ebp-0x20]
  60beb3:	51                   	push   ecx
  60beb4:	50                   	push   eax
  60beb5:	e8 49 cb df ff       	call   0x408a03 ; ["call resolved=0x56f4e0 "]
  60beba:	8d 77 60             	lea    esi,[edi+0x60]
  60bebd:	83 c4 0c             	add    esp,0xc
  60bec0:	8d 45 e0             	lea    eax,[ebp-0x20]
  60bec3:	3b f0                	cmp    esi,eax
  60bec5:	74 20                	je     0x60bee7
  60bec7:	8b ce                	mov    ecx,esi
  60bec9:	e8 e9 58 df ff       	call   0x4017b7 ; ["call resolved=0x47f7d0 "]
  60bece:	8b 45 e0             	mov    eax,DWORD PTR [ebp-0x20]
  60bed1:	33 ff                	xor    edi,edi
  60bed3:	89 06                	mov    DWORD PTR [esi],eax
  60bed5:	8b 45 e4             	mov    eax,DWORD PTR [ebp-0x1c]
  60bed8:	89 46 04             	mov    DWORD PTR [esi+0x4],eax
  60bedb:	8b 45 e8             	mov    eax,DWORD PTR [ebp-0x18]
  60bede:	89 46 08             	mov    DWORD PTR [esi+0x8],eax
  60bee1:	33 c0                	xor    eax,eax
  60bee3:	33 c9                	xor    ecx,ecx
  60bee5:	eb 09                	jmp    0x60bef0
  60bee7:	8b 4d e8             	mov    ecx,DWORD PTR [ebp-0x18]
  60beea:	8b 45 e4             	mov    eax,DWORD PTR [ebp-0x1c]
  60beed:	8b 7d e0             	mov    edi,DWORD PTR [ebp-0x20]
  60bef0:	89 45 80             	mov    DWORD PTR [ebp-0x80],eax
  60bef3:	89 4d 88             	mov    DWORD PTR [ebp-0x78],ecx
  60bef6:	c6 45 fc 00          	mov    BYTE PTR [ebp-0x4],0x0
  60befa:	85 ff                	test   edi,edi
  60befc:	0f 84 98 00 00 00    	je     0x60bf9a
  60bf02:	8b f7                	mov    esi,edi
  60bf04:	3b f0                	cmp    esi,eax
  60bf06:	74 4e                	je     0x60bf56
  60bf08:	8b 4e 14             	mov    ecx,DWORD PTR [esi+0x14]
  60bf0b:	83 f9 10             	cmp    ecx,0x10
  60bf0e:	72 2e                	jb     0x60bf3e
  60bf10:	8b 06                	mov    eax,DWORD PTR [esi]
  60bf12:	41                   	inc    ecx
  60bf13:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  60bf19:	72 16                	jb     0x60bf31
  60bf1b:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  60bf1e:	83 c1 23             	add    ecx,0x23
  60bf21:	2b c2                	sub    eax,edx
  60bf23:	83 c0 fc             	add    eax,0xfffffffc
  60bf26:	83 f8 1f             	cmp    eax,0x1f
  60bf29:	0f 87 8b 03 00 00    	ja     0x60c2ba
  60bf2f:	8b c2                	mov    eax,edx
  60bf31:	51                   	push   ecx
  60bf32:	50                   	push   eax
  60bf33:	e8 62 61 df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  60bf38:	8b 45 80             	mov    eax,DWORD PTR [ebp-0x80]
  60bf3b:	83 c4 08             	add    esp,0x8
  60bf3e:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  60bf45:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  60bf4c:	c6 06 00             	mov    BYTE PTR [esi],0x0
  60bf4f:	83 c6 18             	add    esi,0x18
  60bf52:	3b f0                	cmp    esi,eax
  60bf54:	75 b2                	jne    0x60bf08
  60bf56:	8b 4d 88             	mov    ecx,DWORD PTR [ebp-0x78]
  60bf59:	b8 ab aa aa 2a       	mov    eax,0x2aaaaaab
  60bf5e:	2b cf                	sub    ecx,edi
  60bf60:	f7 e9                	imul   ecx
  60bf62:	c1 fa 02             	sar    edx,0x2
  60bf65:	8b c2                	mov    eax,edx
  60bf67:	c1 e8 1f             	shr    eax,0x1f
  60bf6a:	03 c2                	add    eax,edx
  60bf6c:	8d 0c 40             	lea    ecx,[eax+eax*2]
  60bf6f:	8b c7                	mov    eax,edi
  60bf71:	c1 e1 03             	shl    ecx,0x3
  60bf74:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  60bf7a:	72 14                	jb     0x60bf90
  60bf7c:	8b 7f fc             	mov    edi,DWORD PTR [edi-0x4]
  60bf7f:	83 c1 23             	add    ecx,0x23
  60bf82:	2b c7                	sub    eax,edi
  60bf84:	83 c0 fc             	add    eax,0xfffffffc
  60bf87:	83 f8 1f             	cmp    eax,0x1f
  60bf8a:	0f 87 2a 03 00 00    	ja     0x60c2ba
  60bf90:	51                   	push   ecx
  60bf91:	57                   	push   edi
  60bf92:	e8 03 61 df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  60bf97:	83 c4 08             	add    esp,0x8
  60bf9a:	68 60 4d 6c 00       	push   0x6c4d60 ; ["account"]
  60bf9f:	8d 8d 6c ff ff ff    	lea    ecx,[ebp-0x94]
  60bfa5:	e8 34 77 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  60bfaa:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  60bfad:	51                   	push   ecx
  60bfae:	8b c8                	mov    ecx,eax
  60bfb0:	e8 35 ac df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  60bfb5:	8b 7d 84             	mov    edi,DWORD PTR [ebp-0x7c]
  60bfb8:	8b f0                	mov    esi,eax
  60bfba:	83 c7 30             	add    edi,0x30
  60bfbd:	3b fe                	cmp    edi,esi
  60bfbf:	74 28                	je     0x60bfe9
  60bfc1:	8b cf                	mov    ecx,edi
  60bfc3:	e8 3b 7a df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  60bfc8:	0f 10 06             	movups xmm0,XMMWORD PTR [esi]
  60bfcb:	0f 11 07             	movups XMMWORD PTR [edi],xmm0
  60bfce:	f3 0f 7e 46 10       	movq   xmm0,QWORD PTR [esi+0x10]
  60bfd3:	66 0f d6 47 10       	movq   QWORD PTR [edi+0x10],xmm0
  60bfd8:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  60bfdf:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  60bfe6:	c6 06 00             	mov    BYTE PTR [esi],0x0
  60bfe9:	8b 55 e8             	mov    edx,DWORD PTR [ebp-0x18]
  60bfec:	83 fa 10             	cmp    edx,0x10
  60bfef:	72 2e                	jb     0x60c01f
  60bff1:	8b 4d d4             	mov    ecx,DWORD PTR [ebp-0x2c]
  60bff4:	42                   	inc    edx
  60bff5:	8b c1                	mov    eax,ecx
  60bff7:	81 fa 00 10 00 00    	cmp    edx,0x1000
  60bffd:	72 16                	jb     0x60c015
  60bfff:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  60c002:	83 c2 23             	add    edx,0x23
  60c005:	2b c1                	sub    eax,ecx
  60c007:	83 c0 fc             	add    eax,0xfffffffc
  60c00a:	83 f8 1f             	cmp    eax,0x1f
  60c00d:	76 06                	jbe    0x60c015
  60c00f:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  60c015:	52                   	push   edx
  60c016:	51                   	push   ecx
  60c017:	e8 7e 60 df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  60c01c:	83 c4 08             	add    esp,0x8
  60c01f:	68 a4 4b 6c 00       	push   0x6c4ba4 ; ["deviceName"]
  60c024:	8d 8d 6c ff ff ff    	lea    ecx,[ebp-0x94]
  60c02a:	e8 af 76 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  60c02f:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  60c032:	51                   	push   ecx
  60c033:	8b c8                	mov    ecx,eax
  60c035:	e8 b0 ab df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  60c03a:	8b 7d 84             	mov    edi,DWORD PTR [ebp-0x7c]
  60c03d:	8b f0                	mov    esi,eax
  60c03f:	3b fe                	cmp    edi,esi
  60c041:	74 28                	je     0x60c06b
  60c043:	8b cf                	mov    ecx,edi
  60c045:	e8 b9 79 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  60c04a:	0f 10 06             	movups xmm0,XMMWORD PTR [esi]
  60c04d:	0f 11 07             	movups XMMWORD PTR [edi],xmm0
  60c050:	f3 0f 7e 46 10       	movq   xmm0,QWORD PTR [esi+0x10]
  60c055:	66 0f d6 47 10       	movq   QWORD PTR [edi+0x10],xmm0
  60c05a:	c7 46 10 00 00 00 00 	mov    DWORD PTR [esi+0x10],0x0
  60c061:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  60c068:	c6 06 00             	mov    BYTE PTR [esi],0x0
  60c06b:	8b 55 e8             	mov    edx,DWORD PTR [ebp-0x18]
  60c06e:	83 fa 10             	cmp    edx,0x10
  60c071:	72 2e                	jb     0x60c0a1
  60c073:	8b 4d d4             	mov    ecx,DWORD PTR [ebp-0x2c]
  60c076:	42                   	inc    edx
  60c077:	8b c1                	mov    eax,ecx
  60c079:	81 fa 00 10 00 00    	cmp    edx,0x1000
  60c07f:	72 16                	jb     0x60c097
  60c081:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  60c084:	83 c2 23             	add    edx,0x23
  60c087:	2b c1                	sub    eax,ecx
  60c089:	83 c0 fc             	add    eax,0xfffffffc
  60c08c:	83 f8 1f             	cmp    eax,0x1f
  60c08f:	76 06                	jbe    0x60c097
  60c091:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  60c097:	52                   	push   edx
  60c098:	51                   	push   ecx
  60c099:	e8 fc 5f df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  60c09e:	83 c4 08             	add    esp,0x8
  60c0a1:	be 0f 00 00 00       	mov    esi,0xf
  60c0a6:	c7 45 bc 00 00 00 00 	mov    DWORD PTR [ebp-0x44],0x0
  60c0ad:	89 75 d0             	mov    DWORD PTR [ebp-0x30],esi
  60c0b0:	c7 45 cc 00 00 00 00 	mov    DWORD PTR [ebp-0x34],0x0
  60c0b7:	c6 45 bc 00          	mov    BYTE PTR [ebp-0x44],0x0
  60c0bb:	68 54 4d 6c 00       	push   0x6c4d54 ; ["deviceId"]
  60c0c0:	8d 8d 6c ff ff ff    	lea    ecx,[ebp-0x94]
  60c0c6:	c6 45 fc 07          	mov    BYTE PTR [ebp-0x4],0x7
  60c0ca:	e8 0f 76 df ff       	call   0x4036de ; ["call resolved=0x43ea00 "]
  60c0cf:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  60c0d2:	51                   	push   ecx
  60c0d3:	8b c8                	mov    ecx,eax
  60c0d5:	e8 10 ab df ff       	call   0x406bea ; ["call resolved=0x4a9db0 "]
  60c0da:	8d 4d bc             	lea    ecx,[ebp-0x44]
  60c0dd:	3b c8                	cmp    ecx,eax
  60c0df:	74 21                	je     0x60c102
  60c0e1:	0f 10 00             	movups xmm0,XMMWORD PTR [eax]
  60c0e4:	0f 11 45 bc          	movups XMMWORD PTR [ebp-0x44],xmm0
  60c0e8:	f3 0f 7e 40 10       	movq   xmm0,QWORD PTR [eax+0x10]
  60c0ed:	66 0f d6 45 cc       	movq   QWORD PTR [ebp-0x34],xmm0
  60c0f2:	89 70 14             	mov    DWORD PTR [eax+0x14],esi
  60c0f5:	8b 75 d0             	mov    esi,DWORD PTR [ebp-0x30]
  60c0f8:	c7 40 10 00 00 00 00 	mov    DWORD PTR [eax+0x10],0x0
  60c0ff:	c6 00 00             	mov    BYTE PTR [eax],0x0
  60c102:	8b 55 e8             	mov    edx,DWORD PTR [ebp-0x18]
  60c105:	83 fa 10             	cmp    edx,0x10
  60c108:	72 2e                	jb     0x60c138
  60c10a:	8b 4d d4             	mov    ecx,DWORD PTR [ebp-0x2c]
  60c10d:	42                   	inc    edx
  60c10e:	8b c1                	mov    eax,ecx
  60c110:	81 fa 00 10 00 00    	cmp    edx,0x1000
  60c116:	72 16                	jb     0x60c12e
  60c118:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  60c11b:	83 c2 23             	add    edx,0x23
  60c11e:	2b c1                	sub    eax,ecx
  60c120:	83 c0 fc             	add    eax,0xfffffffc
  60c123:	83 f8 1f             	cmp    eax,0x1f
  60c126:	76 06                	jbe    0x60c12e
  60c128:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  60c12e:	52                   	push   edx
  60c12f:	51                   	push   ecx
  60c130:	e8 65 5f df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  60c135:	83 c4 08             	add    esp,0x8
  60c138:	bf 04 00 00 00       	mov    edi,0x4
  60c13d:	c7 45 d4 00 00 00 00 	mov    DWORD PTR [ebp-0x2c],0x0
  60c144:	39 7d cc             	cmp    DWORD PTR [ebp-0x34],edi
  60c147:	8d 45 bc             	lea    eax,[ebp-0x44]
  60c14a:	c7 45 e8 0f 00 00 00 	mov    DWORD PTR [ebp-0x18],0xf
  60c151:	0f 42 7d cc          	cmovb  edi,DWORD PTR [ebp-0x34]
  60c155:	83 fe 10             	cmp    esi,0x10
  60c158:	0f 43 45 bc          	cmovae eax,DWORD PTR [ebp-0x44]
  60c15c:	89 45 80             	mov    DWORD PTR [ebp-0x80],eax
  60c15f:	83 ff 0f             	cmp    edi,0xf
  60c162:	77 1b                	ja     0x60c17f
  60c164:	57                   	push   edi
  60c165:	50                   	push   eax
  60c166:	8d 45 d4             	lea    eax,[ebp-0x2c]
  60c169:	89 7d e4             	mov    DWORD PTR [ebp-0x1c],edi
  60c16c:	50                   	push   eax
  60c16d:	e8 1e c6 05 00       	call   0x668790 ; ["call resolved=0x668790 "]
  60c172:	c6 44 3d d4 00       	mov    BYTE PTR [ebp+edi*1-0x2c],0x0
  60c177:	8b 75 e8             	mov    esi,DWORD PTR [ebp-0x18]
  60c17a:	8b 7d d4             	mov    edi,DWORD PTR [ebp-0x2c]
  60c17d:	eb 55                	jmp    0x60c1d4
  60c17f:	81 ff ff ff ff 7f    	cmp    edi,0x7fffffff
  60c185:	0f 87 6a 02 00 00    	ja     0x60c3f5
  60c18b:	8b f7                	mov    esi,edi
  60c18d:	83 ce 0f             	or     esi,0xf
  60c190:	81 fe ff ff ff 7f    	cmp    esi,0x7fffffff
  60c196:	76 07                	jbe    0x60c19f
  60c198:	be ff ff ff 7f       	mov    esi,0x7fffffff
  60c19d:	eb 0a                	jmp    0x60c1a9
  60c19f:	b8 16 00 00 00       	mov    eax,0x16
  60c1a4:	3b f0                	cmp    esi,eax
  60c1a6:	0f 42 f0             	cmovb  esi,eax
  60c1a9:	8d 46 01             	lea    eax,[esi+0x1]
  60c1ac:	50                   	push   eax
  60c1ad:	8d 4d d4             	lea    ecx,[ebp-0x2c]
  60c1b0:	e8 f6 57 df ff       	call   0x4019ab ; ["call resolved=0x480060 "]
  60c1b5:	57                   	push   edi
  60c1b6:	ff 75 80             	push   DWORD PTR [ebp-0x80]
  60c1b9:	89 45 88             	mov    DWORD PTR [ebp-0x78],eax
  60c1bc:	50                   	push   eax
  60c1bd:	89 7d e4             	mov    DWORD PTR [ebp-0x1c],edi
  60c1c0:	89 75 e8             	mov    DWORD PTR [ebp-0x18],esi
  60c1c3:	e8 c2 c5 05 00       	call   0x66878a ; ["call resolved=0x66878a "]
  60c1c8:	8b 4d 88             	mov    ecx,DWORD PTR [ebp-0x78]
  60c1cb:	89 4d d4             	mov    DWORD PTR [ebp-0x2c],ecx
  60c1ce:	c6 04 39 00          	mov    BYTE PTR [ecx+edi*1],0x0
  60c1d2:	8b f9                	mov    edi,ecx
  60c1d4:	8b 45 d0             	mov    eax,DWORD PTR [ebp-0x30]
  60c1d7:	83 c4 0c             	add    esp,0xc
  60c1da:	83 f8 10             	cmp    eax,0x10
  60c1dd:	72 2e                	jb     0x60c20d
  60c1df:	8b 4d bc             	mov    ecx,DWORD PTR [ebp-0x44]
  60c1e2:	8d 50 01             	lea    edx,[eax+0x1]
  60c1e5:	8b c1                	mov    eax,ecx
  60c1e7:	81 fa 00 10 00 00    	cmp    edx,0x1000
  60c1ed:	72 14                	jb     0x60c203
  60c1ef:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  60c1f2:	83 c2 23             	add    edx,0x23
  60c1f5:	2b c1                	sub    eax,ecx
  60c1f7:	83 c0 fc             	add    eax,0xfffffffc
  60c1fa:	83 f8 1f             	cmp    eax,0x1f
  60c1fd:	0f 87 b7 00 00 00    	ja     0x60c2ba
  60c203:	52                   	push   edx
  60c204:	51                   	push   ecx
  60c205:	e8 90 5e df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  60c20a:	83 c4 08             	add    esp,0x8
  60c20d:	0f 10 45 d4          	movups xmm0,XMMWORD PTR [ebp-0x2c]
  60c211:	83 fe 10             	cmp    esi,0x10
  60c214:	8d 45 bc             	lea    eax,[ebp-0x44]
  60c217:	6a 04                	push   0x4
  60c219:	0f 43 c7             	cmovae eax,edi
  60c21c:	50                   	push   eax
  60c21d:	0f 11 45 bc          	movups XMMWORD PTR [ebp-0x44],xmm0
  60c221:	8d 45 d4             	lea    eax,[ebp-0x2c]
  60c224:	f3 0f 7e 45 e4       	movq   xmm0,QWORD PTR [ebp-0x1c]
  60c229:	50                   	push   eax
  60c22a:	66 0f d6 45 cc       	movq   QWORD PTR [ebp-0x34],xmm0
  60c22f:	e8 9e 58 df ff       	call   0x401ad2 ; ["call resolved=0x4a66d0 "]
  60c234:	8b 75 84             	mov    esi,DWORD PTR [ebp-0x7c]
  60c237:	8d 45 d4             	lea    eax,[ebp-0x2c]
  60c23a:	83 c6 18             	add    esi,0x18
  60c23d:	83 c4 0c             	add    esp,0xc
  60c240:	3b f0                	cmp    esi,eax
  60c242:	74 1a                	je     0x60c25e
  60c244:	8b ce                	mov    ecx,esi
  60c246:	e8 b8 77 df ff       	call   0x403a03 ; ["call resolved=0x47fa90 "]
  60c24b:	0f 10 45 d4          	movups xmm0,XMMWORD PTR [ebp-0x2c]
  60c24f:	0f 11 06             	movups XMMWORD PTR [esi],xmm0
  60c252:	f3 0f 7e 45 e4       	movq   xmm0,QWORD PTR [ebp-0x1c]
  60c257:	66 0f d6 46 10       	movq   QWORD PTR [esi+0x10],xmm0
  60c25c:	eb 36                	jmp    0x60c294
  60c25e:	8b 55 e8             	mov    edx,DWORD PTR [ebp-0x18]
  60c261:	83 fa 10             	cmp    edx,0x10
  60c264:	72 2e                	jb     0x60c294
  60c266:	8b 4d d4             	mov    ecx,DWORD PTR [ebp-0x2c]
  60c269:	42                   	inc    edx
  60c26a:	8b c1                	mov    eax,ecx
  60c26c:	81 fa 00 10 00 00    	cmp    edx,0x1000
  60c272:	72 16                	jb     0x60c28a
  60c274:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  60c277:	83 c2 23             	add    edx,0x23
  60c27a:	2b c1                	sub    eax,ecx
  60c27c:	83 c0 fc             	add    eax,0xfffffffc
  60c27f:	83 f8 1f             	cmp    eax,0x1f
  60c282:	76 06                	jbe    0x60c28a
  60c284:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  60c28a:	52                   	push   edx
  60c28b:	51                   	push   ecx
  60c28c:	e8 09 5e df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  60c291:	83 c4 08             	add    esp,0x8
  60c294:	8b 55 d0             	mov    edx,DWORD PTR [ebp-0x30]
  60c297:	83 fa 10             	cmp    edx,0x10
  60c29a:	72 2e                	jb     0x60c2ca
  60c29c:	8b 4d bc             	mov    ecx,DWORD PTR [ebp-0x44]
  60c29f:	42                   	inc    edx
  60c2a0:	8b c1                	mov    eax,ecx
  60c2a2:	81 fa 00 10 00 00    	cmp    edx,0x1000
  60c2a8:	72 16                	jb     0x60c2c0
  60c2aa:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  60c2ad:	83 c2 23             	add    edx,0x23
  60c2b0:	2b c1                	sub    eax,ecx
  60c2b2:	83 c0 fc             	add    eax,0xfffffffc
  60c2b5:	83 f8 1f             	cmp    eax,0x1f
  60c2b8:	76 06                	jbe    0x60c2c0
  60c2ba:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  60c2c0:	52                   	push   edx
  60c2c1:	51                   	push   ecx
  60c2c2:	e8 d3 5d df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  60c2c7:	83 c4 08             	add    esp,0x8
  60c2ca:	8d 8d 6c ff ff ff    	lea    ecx,[ebp-0x94]
  60c2d0:	e8 09 dd df ff       	call   0x409fde ; ["call resolved=0x480970 "]
  60c2d5:	ff b5 6c ff ff ff    	push   DWORD PTR [ebp-0x94]
  60c2db:	8d 8d 74 ff ff ff    	lea    ecx,[ebp-0x8c]
  60c2e1:	e8 68 d6 df ff       	call   0x40994e ; ["call resolved=0x487c40 "]
  60c2e6:	b0 01                	mov    al,0x1
  60c2e8:	e9 9d 00 00 00       	jmp    0x60c38a
  60c2ed:	6a 5c                	push   0x5c
  60c2ef:	68 94 5e 6f 00       	push   0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  60c2f4:	e8 6d c4 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  60c2f9:	83 c4 08             	add    esp,0x8
  60c2fc:	85 c0                	test   eax,eax
  60c2fe:	74 12                	je     0x60c312
  60c300:	6a 5c                	push   0x5c
  60c302:	68 94 5e 6f 00       	push   0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  60c307:	e8 5a c4 05 00       	call   0x668766 ; ["call resolved=0x668766 "]
  60c30c:	83 c4 08             	add    esp,0x8
  60c30f:	40                   	inc    eax
  60c310:	eb 05                	jmp    0x60c317
  60c312:	b8 94 5e 6f 00       	mov    eax,0x6f5e94 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SSDPSocket\\SSDPSocket.cpp"]
  60c317:	68 78 62 6f 00       	push   0x6f6278 ; ["SSDPSocket::parserSSDPData"]
  60c31c:	68 25 01 00 00       	push   0x125
  60c321:	50                   	push   eax
  60c322:	68 98 62 6f 00       	push   0x6f6298 ; ["[ConntctionModule][%s:%d][%s]: ssdp data json parse_error\n"]
  60c327:	8d 45 88             	lea    eax,[ebp-0x78]
  60c32a:	c7 45 88 02 00 00 00 	mov    DWORD PTR [ebp-0x78],0x2
  60c331:	50                   	push   eax
  60c332:	8d 45 d4             	lea    eax,[ebp-0x2c]
  60c335:	50                   	push   eax
  60c336:	e8 ce ac df ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  60c33b:	8b 4d e8             	mov    ecx,DWORD PTR [ebp-0x18]
  60c33e:	83 c4 18             	add    esp,0x18
  60c341:	83 f9 10             	cmp    ecx,0x10
  60c344:	0f 93 c0             	setae  al
  60c347:	84 c0                	test   al,al
  60c349:	74 2c                	je     0x60c377
  60c34b:	8b 45 d4             	mov    eax,DWORD PTR [ebp-0x2c]
  60c34e:	41                   	inc    ecx
  60c34f:	81 f9 00 10 00 00    	cmp    ecx,0x1000
  60c355:	72 16                	jb     0x60c36d
  60c357:	8b 50 fc             	mov    edx,DWORD PTR [eax-0x4]
  60c35a:	83 c1 23             	add    ecx,0x23
  60c35d:	2b c2                	sub    eax,edx
  60c35f:	83 c0 fc             	add    eax,0xfffffffc
  60c362:	83 f8 1f             	cmp    eax,0x1f
  60c365:	0f 87 a4 fc ff ff    	ja     0x60c00f
  60c36b:	8b c2                	mov    eax,edx
  60c36d:	51                   	push   ecx
  60c36e:	50                   	push   eax
  60c36f:	e8 26 5d df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  60c374:	83 c4 08             	add    esp,0x8
  60c377:	b8 7d c3 60 00       	mov    eax,0x60c37d
  60c37c:	c3                   	ret
  60c37d:	8d 8d 6c ff ff ff    	lea    ecx,[ebp-0x94]
  60c383:	e8 8f d0 df ff       	call   0x409417 ; ["call resolved=0x46f270 "]
  60c388:	32 c0                	xor    al,al
  60c38a:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  60c38d:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  60c394:	59                   	pop    ecx
  60c395:	5f                   	pop    edi
  60c396:	5e                   	pop    esi
  60c397:	5b                   	pop    ebx
  60c398:	8b 4d ec             	mov    ecx,DWORD PTR [ebp-0x14]
  60c39b:	33 cd                	xor    ecx,ebp
  60c39d:	e8 ed 80 df ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  60c3a2:	8b e5                	mov    esp,ebp
  60c3a4:	5d                   	pop    ebp
  60c3a5:	c2 08 00             	ret    0x8
  60c3a8:	8b c8                	mov    ecx,eax
  60c3aa:	e8 d3 74 df ff       	call   0x403882 ; ["call resolved=0x4a6640 "]
  60c3af:	50                   	push   eax
  60c3b0:	8d 4d a4             	lea    ecx,[ebp-0x5c]
  60c3b3:	e8 68 63 df ff       	call   0x402720 ; ["call resolved=0x46a4f0 "]
  60c3b8:	50                   	push   eax
  60c3b9:	8d 45 8c             	lea    eax,[ebp-0x74]
  60c3bc:	c6 45 fc 05          	mov    BYTE PTR [ebp-0x4],0x5
  60c3c0:	68 24 95 6d 00       	push   0x6d9524 ; ["type must be array, but is "]
  60c3c5:	50                   	push   eax
  60c3c6:	e8 59 aa df ff       	call   0x406e24 ; ["call resolved=0x43ede0 "]
  60c3cb:	50                   	push   eax
  60c3cc:	8d 85 50 ff ff ff    	lea    eax,[ebp-0xb0]
  60c3d2:	c6 45 fc 06          	mov    BYTE PTR [ebp-0x4],0x6
  60c3d6:	68 2e 01 00 00       	push   0x12e
  60c3db:	50                   	push   eax
  60c3dc:	e8 9d 7d df ff       	call   0x40417e ; ["call resolved=0x487020 "]
  60c3e1:	83 c4 18             	add    esp,0x18
  60c3e4:	8d 85 50 ff ff ff    	lea    eax,[ebp-0xb0]
  60c3ea:	68 10 e2 72 00       	push   0x72e210
  60c3ef:	50                   	push   eax
  60c3f0:	e8 83 c3 05 00       	call   0x668778 ; ["call resolved=0x668778 "]
  60c3f5:	e8 eb 8e df ff       	call   0x4052e5 ; ["call resolved=0x47fbd0 "]
