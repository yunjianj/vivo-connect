; ipcCenter::startup_MessageParsing; image base 0x400000; static annotation only
  441cb0:	55                   	push   ebp
  441cb1:	8b ec                	mov    ebp,esp
  441cb3:	6a ff                	push   0xffffffff
  441cb5:	68 db 7d 47 00       	push   0x477ddb
  441cba:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  441cc0:	50                   	push   eax
  441cc1:	81 ec 30 01 00 00    	sub    esp,0x130
  441cc7:	a1 14 de 49 00       	mov    eax,ds:0x49de14
  441ccc:	33 c5                	xor    eax,ebp
  441cce:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  441cd1:	56                   	push   esi
  441cd2:	57                   	push   edi
  441cd3:	50                   	push   eax
  441cd4:	8d 45 f4             	lea    eax,[ebp-0xc]
  441cd7:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  441cdd:	8b 45 08             	mov    eax,DWORD PTR [ebp+0x8]
  441ce0:	89 85 d4 fe ff ff    	mov    DWORD PTR [ebp-0x12c],eax
  441ce6:	8d 85 d4 fe ff ff    	lea    eax,[ebp-0x12c]
  441cec:	6a 00                	push   0x0
  441cee:	50                   	push   eax
  441cef:	e8 bc ed fe ff       	call   0x430ab0 ; ["call resolved=0x430ab0 "]
  441cf4:	83 c4 08             	add    esp,0x8
  441cf7:	84 c0                	test   al,al
  441cf9:	75 50                	jne    0x441d4b
  441cfb:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  441d01:	83 ec 08             	sub    esp,0x8
  441d04:	8b c4                	mov    eax,esp
  441d06:	c7 85 d8 fe ff ff c4 	mov    DWORD PTR [ebp-0x128],0x4858c4 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Ipc\\ipccenter.cpp"]
  441d10:	c7 85 dc fe ff ff 82 	mov    DWORD PTR [ebp-0x124],0x82
  441d1a:	f3 0f 7e 85 d8 fe ff 	movq   xmm0,QWORD PTR [ebp-0x128]
  441d22:	6a 04                	push   0x4
  441d24:	83 ec 0c             	sub    esp,0xc
  441d27:	c7 00 60 5a 48 00    	mov    DWORD PTR [eax],0x485a60 ; ["startup msg format error!"]
  441d2d:	c7 40 04 19 00 00 00 	mov    DWORD PTR [eax+0x4],0x19
  441d34:	8b c4                	mov    eax,esp
  441d36:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  441d3a:	c7 40 08 7c 5a 48 00 	mov    DWORD PTR [eax+0x8],0x485a7c ; ["ipcCenter::startup_MessageParsing"]
  441d41:	e8 ca 9a fd ff       	call   0x41b810 ; ["call resolved=0x41b810 "]
  441d46:	e9 83 05 00 00       	jmp    0x4422ce
  441d4b:	6a 00                	push   0x0
  441d4d:	6a 01                	push   0x1
  441d4f:	83 ec 28             	sub    esp,0x28
  441d52:	8b c4                	mov    eax,esp
  441d54:	c7 40 24 00 00 00 00 	mov    DWORD PTR [eax+0x24],0x0
  441d5b:	8d 85 d4 fe ff ff    	lea    eax,[ebp-0x12c]
  441d61:	50                   	push   eax
  441d62:	8d 85 c4 fe ff ff    	lea    eax,[ebp-0x13c]
  441d68:	50                   	push   eax
  441d69:	e8 72 f6 fe ff       	call   0x4313e0 ; ["call resolved=0x4313e0 "]
  441d6e:	83 c4 38             	add    esp,0x38
  441d71:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  441d78:	e8 83 c5 ff ff       	call   0x43e300 ; ["call resolved=0x43e300 "]
  441d7d:	8b f8                	mov    edi,eax
  441d7f:	8d 85 e8 fe ff ff    	lea    eax,[ebp-0x118]
  441d85:	50                   	push   eax
  441d86:	8b cf                	mov    ecx,edi
  441d88:	e8 73 cd ff ff       	call   0x43eb00 ; ["call resolved=0x43eb00 "]
  441d8d:	83 ec 18             	sub    esp,0x18
  441d90:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  441d94:	8b f4                	mov    esi,esp
  441d96:	6a 0a                	push   0xa
  441d98:	68 30 24 48 00       	push   0x482430 ; ["pcDeviceId"]
  441d9d:	56                   	push   esi
  441d9e:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  441da4:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  441dab:	c7 46 10 0a 00 00 00 	mov    DWORD PTR [esi+0x10],0xa
  441db2:	e8 d2 1b 03 00       	call   0x473989 ; ["call resolved=0x473989 "]
  441db7:	83 c4 0c             	add    esp,0xc
  441dba:	c6 46 0a 00          	mov    BYTE PTR [esi+0xa],0x0
  441dbe:	8d 8d c4 fe ff ff    	lea    ecx,[ebp-0x13c]
  441dc4:	e8 f7 65 fe ff       	call   0x4283c0 ; ["call resolved=0x4283c0 "]
  441dc9:	8d 8d e8 fe ff ff    	lea    ecx,[ebp-0x118]
  441dcf:	51                   	push   ecx
  441dd0:	50                   	push   eax
  441dd1:	e8 5a 0f fe ff       	call   0x422d30 ; ["call resolved=0x422d30 "]
  441dd6:	83 ec 10             	sub    esp,0x10
  441dd9:	8b f4                	mov    esi,esp
  441ddb:	6a 03                	push   0x3
  441ddd:	68 a0 5a 48 00       	push   0x485aa0 ; ["key"]
  441de2:	56                   	push   esi
  441de3:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  441de9:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  441df0:	c7 46 10 03 00 00 00 	mov    DWORD PTR [esi+0x10],0x3
  441df7:	e8 8d 1b 03 00       	call   0x473989 ; ["call resolved=0x473989 "]
  441dfc:	83 c4 0c             	add    esp,0xc
  441dff:	c6 46 03 00          	mov    BYTE PTR [esi+0x3],0x0
  441e03:	8d 8d c4 fe ff ff    	lea    ecx,[ebp-0x13c]
  441e09:	e8 b2 65 fe ff       	call   0x4283c0 ; ["call resolved=0x4283c0 "]
  441e0e:	8d 8d 00 ff ff ff    	lea    ecx,[ebp-0x100]
  441e14:	51                   	push   ecx
  441e15:	50                   	push   eax
  441e16:	e8 15 0f fe ff       	call   0x422d30 ; ["call resolved=0x422d30 "]
  441e1b:	83 ec 10             	sub    esp,0x10
  441e1e:	b9 69 76 00 00       	mov    ecx,0x7669
  441e23:	8b c4                	mov    eax,esp
  441e25:	c7 00 00 00 00 00    	mov    DWORD PTR [eax],0x0
  441e2b:	c7 40 14 0f 00 00 00 	mov    DWORD PTR [eax+0x14],0xf
  441e32:	c7 40 10 02 00 00 00 	mov    DWORD PTR [eax+0x10],0x2
  441e39:	66 89 08             	mov    WORD PTR [eax],cx
  441e3c:	8d 8d c4 fe ff ff    	lea    ecx,[ebp-0x13c]
  441e42:	e8 79 65 fe ff       	call   0x4283c0 ; ["call resolved=0x4283c0 "]
  441e47:	8d 8d 18 ff ff ff    	lea    ecx,[ebp-0xe8]
  441e4d:	51                   	push   ecx
  441e4e:	50                   	push   eax
  441e4f:	e8 dc 0e fe ff       	call   0x422d30 ; ["call resolved=0x422d30 "]
  441e54:	83 ec 10             	sub    esp,0x10
  441e57:	8b f4                	mov    esi,esp
  441e59:	6a 08                	push   0x8
  441e5b:	68 a8 5a 48 00       	push   0x485aa8 ; ["vdfsPath"]
  441e60:	56                   	push   esi
  441e61:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  441e67:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  441e6e:	c7 46 10 08 00 00 00 	mov    DWORD PTR [esi+0x10],0x8
  441e75:	e8 0f 1b 03 00       	call   0x473989 ; ["call resolved=0x473989 "]
  441e7a:	83 c4 0c             	add    esp,0xc
  441e7d:	c6 46 08 00          	mov    BYTE PTR [esi+0x8],0x0
  441e81:	8d 8d c4 fe ff ff    	lea    ecx,[ebp-0x13c]
  441e87:	e8 34 65 fe ff       	call   0x4283c0 ; ["call resolved=0x4283c0 "]
  441e8c:	8d 8d 30 ff ff ff    	lea    ecx,[ebp-0xd0]
  441e92:	51                   	push   ecx
  441e93:	50                   	push   eax
  441e94:	e8 97 0e fe ff       	call   0x422d30 ; ["call resolved=0x422d30 "]
  441e99:	83 c4 08             	add    esp,0x8
  441e9c:	80 bd c4 fe ff ff 01 	cmp    BYTE PTR [ebp-0x13c],0x1
  441ea3:	0f 85 33 03 00 00    	jne    0x4421dc
  441ea9:	8b b5 cc fe ff ff    	mov    esi,DWORD PTR [ebp-0x134]
  441eaf:	8d 85 e4 fe ff ff    	lea    eax,[ebp-0x11c]
  441eb5:	68 b4 5a 48 00       	push   0x485ab4 ; ["farway"]
  441eba:	50                   	push   eax
  441ebb:	8b ce                	mov    ecx,esi
  441ebd:	e8 be 0d fe ff       	call   0x422c80 ; ["call resolved=0x422c80 "]
  441ec2:	8b 00                	mov    eax,DWORD PTR [eax]
  441ec4:	3b 06                	cmp    eax,DWORD PTR [esi]
  441ec6:	0f 84 10 03 00 00    	je     0x4421dc
  441ecc:	68 b4 5a 48 00       	push   0x485ab4 ; ["farway"]
  441ed1:	8d 8d c4 fe ff ff    	lea    ecx,[ebp-0x13c]
  441ed7:	e8 d4 ed fd ff       	call   0x420cb0 ; ["call resolved=0x420cb0 "]
  441edc:	80 38 01             	cmp    BYTE PTR [eax],0x1
  441edf:	0f 85 f7 02 00 00    	jne    0x4421dc
  441ee5:	68 b4 5a 48 00       	push   0x485ab4 ; ["farway"]
  441eea:	8d 8d c4 fe ff ff    	lea    ecx,[ebp-0x13c]
  441ef0:	e8 bb ed fd ff       	call   0x420cb0 ; ["call resolved=0x420cb0 "]
  441ef5:	50                   	push   eax
  441ef6:	8d 4d e0             	lea    ecx,[ebp-0x20]
  441ef9:	e8 e2 48 fe ff       	call   0x4267e0 ; ["call resolved=0x4267e0 "]
  441efe:	80 7d e0 01          	cmp    BYTE PTR [ebp-0x20],0x1
  441f02:	8b 75 e8             	mov    esi,DWORD PTR [ebp-0x18]
  441f05:	c6 45 fc 02          	mov    BYTE PTR [ebp-0x4],0x2
  441f09:	75 63                	jne    0x441f6e
  441f0b:	68 bc 5a 48 00       	push   0x485abc ; ["url"]
  441f10:	8d 85 e4 fe ff ff    	lea    eax,[ebp-0x11c]
  441f16:	8b ce                	mov    ecx,esi
  441f18:	50                   	push   eax
  441f19:	e8 62 0d fe ff       	call   0x422c80 ; ["call resolved=0x422c80 "]
  441f1e:	8b 00                	mov    eax,DWORD PTR [eax]
  441f20:	3b 06                	cmp    eax,DWORD PTR [esi]
  441f22:	74 4a                	je     0x441f6e
  441f24:	83 ec 18             	sub    esp,0x18
  441f27:	8b f4                	mov    esi,esp
  441f29:	6a 03                	push   0x3
  441f2b:	68 bc 5a 48 00       	push   0x485abc ; ["url"]
  441f30:	56                   	push   esi
  441f31:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  441f37:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  441f3e:	c7 46 10 03 00 00 00 	mov    DWORD PTR [esi+0x10],0x3
  441f45:	e8 3f 1a 03 00       	call   0x473989 ; ["call resolved=0x473989 "]
  441f4a:	83 c4 0c             	add    esp,0xc
  441f4d:	c6 46 03 00          	mov    BYTE PTR [esi+0x3],0x0
  441f51:	8d 4d e0             	lea    ecx,[ebp-0x20]
  441f54:	e8 67 64 fe ff       	call   0x4283c0 ; ["call resolved=0x4283c0 "]
  441f59:	8d 8d 78 ff ff ff    	lea    ecx,[ebp-0x88]
  441f5f:	51                   	push   ecx
  441f60:	50                   	push   eax
  441f61:	e8 ca 0d fe ff       	call   0x422d30 ; ["call resolved=0x422d30 "]
  441f66:	8b 75 e8             	mov    esi,DWORD PTR [ebp-0x18]
  441f69:	83 c4 08             	add    esp,0x8
  441f6c:	eb 4b                	jmp    0x441fb9
  441f6e:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  441f74:	83 ec 08             	sub    esp,0x8
  441f77:	8b c4                	mov    eax,esp
  441f79:	c7 85 d8 fe ff ff c4 	mov    DWORD PTR [ebp-0x128],0x4858c4 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Ipc\\ipccenter.cpp"]
  441f83:	c7 85 dc fe ff ff 99 	mov    DWORD PTR [ebp-0x124],0x99
  441f8d:	f3 0f 7e 85 d8 fe ff 	movq   xmm0,QWORD PTR [ebp-0x128]
  441f95:	6a 03                	push   0x3
  441f97:	83 ec 0c             	sub    esp,0xc
  441f9a:	c7 00 c0 5a 48 00    	mov    DWORD PTR [eax],0x485ac0 ; ["'url' does not exist in farway."]
  441fa0:	c7 40 04 1f 00 00 00 	mov    DWORD PTR [eax+0x4],0x1f
  441fa7:	8b c4                	mov    eax,esp
  441fa9:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  441fad:	c7 40 08 7c 5a 48 00 	mov    DWORD PTR [eax+0x8],0x485a7c ; ["ipcCenter::startup_MessageParsing"]
  441fb4:	e8 57 98 fd ff       	call   0x41b810 ; ["call resolved=0x41b810 "]
  441fb9:	80 7d e0 01          	cmp    BYTE PTR [ebp-0x20],0x1
  441fbd:	75 60                	jne    0x44201f
  441fbf:	68 d4 22 48 00       	push   0x4822d4 ; ["openid"]
  441fc4:	8d 85 e4 fe ff ff    	lea    eax,[ebp-0x11c]
  441fca:	8b ce                	mov    ecx,esi
  441fcc:	50                   	push   eax
  441fcd:	e8 ae 0c fe ff       	call   0x422c80 ; ["call resolved=0x422c80 "]
  441fd2:	8b 00                	mov    eax,DWORD PTR [eax]
  441fd4:	3b 06                	cmp    eax,DWORD PTR [esi]
  441fd6:	74 47                	je     0x44201f
  441fd8:	83 ec 18             	sub    esp,0x18
  441fdb:	8b f4                	mov    esi,esp
  441fdd:	6a 06                	push   0x6
  441fdf:	68 d4 22 48 00       	push   0x4822d4 ; ["openid"]
  441fe4:	56                   	push   esi
  441fe5:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  441feb:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  441ff2:	c7 46 10 06 00 00 00 	mov    DWORD PTR [esi+0x10],0x6
  441ff9:	e8 8b 19 03 00       	call   0x473989 ; ["call resolved=0x473989 "]
  441ffe:	83 c4 0c             	add    esp,0xc
  442001:	c6 46 06 00          	mov    BYTE PTR [esi+0x6],0x0
  442005:	8d 4d e0             	lea    ecx,[ebp-0x20]
  442008:	e8 b3 63 fe ff       	call   0x4283c0 ; ["call resolved=0x4283c0 "]
  44200d:	8d 4d 90             	lea    ecx,[ebp-0x70]
  442010:	51                   	push   ecx
  442011:	50                   	push   eax
  442012:	e8 19 0d fe ff       	call   0x422d30 ; ["call resolved=0x422d30 "]
  442017:	8b 75 e8             	mov    esi,DWORD PTR [ebp-0x18]
  44201a:	83 c4 08             	add    esp,0x8
  44201d:	eb 4b                	jmp    0x44206a
  44201f:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  442025:	83 ec 08             	sub    esp,0x8
  442028:	8b c4                	mov    eax,esp
  44202a:	c7 85 d8 fe ff ff c4 	mov    DWORD PTR [ebp-0x128],0x4858c4 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Ipc\\ipccenter.cpp"]
  442034:	c7 85 dc fe ff ff a0 	mov    DWORD PTR [ebp-0x124],0xa0
  44203e:	f3 0f 7e 85 d8 fe ff 	movq   xmm0,QWORD PTR [ebp-0x128]
  442046:	6a 03                	push   0x3
  442048:	83 ec 0c             	sub    esp,0xc
  44204b:	c7 00 e0 5a 48 00    	mov    DWORD PTR [eax],0x485ae0 ; ["'openid' does not exist in farway."]
  442051:	c7 40 04 22 00 00 00 	mov    DWORD PTR [eax+0x4],0x22
  442058:	8b c4                	mov    eax,esp
  44205a:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  44205e:	c7 40 08 7c 5a 48 00 	mov    DWORD PTR [eax+0x8],0x485a7c ; ["ipcCenter::startup_MessageParsing"]
  442065:	e8 a6 97 fd ff       	call   0x41b810 ; ["call resolved=0x41b810 "]
  44206a:	80 7d e0 01          	cmp    BYTE PTR [ebp-0x20],0x1
  44206e:	75 60                	jne    0x4420d0
  442070:	68 04 5b 48 00       	push   0x485b04 ; ["cloudHttpToken"]
  442075:	8d 85 e4 fe ff ff    	lea    eax,[ebp-0x11c]
  44207b:	8b ce                	mov    ecx,esi
  44207d:	50                   	push   eax
  44207e:	e8 fd 0b fe ff       	call   0x422c80 ; ["call resolved=0x422c80 "]
  442083:	8b 00                	mov    eax,DWORD PTR [eax]
  442085:	3b 06                	cmp    eax,DWORD PTR [esi]
  442087:	74 47                	je     0x4420d0
  442089:	83 ec 18             	sub    esp,0x18
  44208c:	8b f4                	mov    esi,esp
  44208e:	6a 0e                	push   0xe
  442090:	68 04 5b 48 00       	push   0x485b04 ; ["cloudHttpToken"]
  442095:	56                   	push   esi
  442096:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  44209c:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  4420a3:	c7 46 10 0e 00 00 00 	mov    DWORD PTR [esi+0x10],0xe
  4420aa:	e8 da 18 03 00       	call   0x473989 ; ["call resolved=0x473989 "]
  4420af:	83 c4 0c             	add    esp,0xc
  4420b2:	c6 46 0e 00          	mov    BYTE PTR [esi+0xe],0x0
  4420b6:	8d 4d e0             	lea    ecx,[ebp-0x20]
  4420b9:	e8 02 63 fe ff       	call   0x4283c0 ; ["call resolved=0x4283c0 "]
  4420be:	8d 4d a8             	lea    ecx,[ebp-0x58]
  4420c1:	51                   	push   ecx
  4420c2:	50                   	push   eax
  4420c3:	e8 68 0c fe ff       	call   0x422d30 ; ["call resolved=0x422d30 "]
  4420c8:	8b 75 e8             	mov    esi,DWORD PTR [ebp-0x18]
  4420cb:	83 c4 08             	add    esp,0x8
  4420ce:	eb 4b                	jmp    0x44211b
  4420d0:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  4420d6:	83 ec 08             	sub    esp,0x8
  4420d9:	8b c4                	mov    eax,esp
  4420db:	c7 85 d8 fe ff ff c4 	mov    DWORD PTR [ebp-0x128],0x4858c4 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Ipc\\ipccenter.cpp"]
  4420e5:	c7 85 dc fe ff ff a7 	mov    DWORD PTR [ebp-0x124],0xa7
  4420ef:	f3 0f 7e 85 d8 fe ff 	movq   xmm0,QWORD PTR [ebp-0x128]
  4420f7:	6a 03                	push   0x3
  4420f9:	83 ec 0c             	sub    esp,0xc
  4420fc:	c7 00 14 5b 48 00    	mov    DWORD PTR [eax],0x485b14 ; ["'cloudHttpToken' does not exist in farway."]
  442102:	c7 40 04 2a 00 00 00 	mov    DWORD PTR [eax+0x4],0x2a
  442109:	8b c4                	mov    eax,esp
  44210b:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  44210f:	c7 40 08 7c 5a 48 00 	mov    DWORD PTR [eax+0x8],0x485a7c ; ["ipcCenter::startup_MessageParsing"]
  442116:	e8 f5 96 fd ff       	call   0x41b810 ; ["call resolved=0x41b810 "]
  44211b:	80 7d e0 01          	cmp    BYTE PTR [ebp-0x20],0x1
  44211f:	75 5d                	jne    0x44217e
  442121:	68 20 24 48 00       	push   0x482420 ; ["cloudDeviceId"]
  442126:	8d 85 e4 fe ff ff    	lea    eax,[ebp-0x11c]
  44212c:	8b ce                	mov    ecx,esi
  44212e:	50                   	push   eax
  44212f:	e8 4c 0b fe ff       	call   0x422c80 ; ["call resolved=0x422c80 "]
  442134:	8b 00                	mov    eax,DWORD PTR [eax]
  442136:	3b 06                	cmp    eax,DWORD PTR [esi]
  442138:	74 44                	je     0x44217e
  44213a:	83 ec 18             	sub    esp,0x18
  44213d:	8b f4                	mov    esi,esp
  44213f:	6a 0d                	push   0xd
  442141:	68 20 24 48 00       	push   0x482420 ; ["cloudDeviceId"]
  442146:	56                   	push   esi
  442147:	c7 06 00 00 00 00    	mov    DWORD PTR [esi],0x0
  44214d:	c7 46 14 0f 00 00 00 	mov    DWORD PTR [esi+0x14],0xf
  442154:	c7 46 10 0d 00 00 00 	mov    DWORD PTR [esi+0x10],0xd
  44215b:	e8 29 18 03 00       	call   0x473989 ; ["call resolved=0x473989 "]
  442160:	83 c4 0c             	add    esp,0xc
  442163:	c6 46 0d 00          	mov    BYTE PTR [esi+0xd],0x0
  442167:	8d 4d e0             	lea    ecx,[ebp-0x20]
  44216a:	e8 51 62 fe ff       	call   0x4283c0 ; ["call resolved=0x4283c0 "]
  44216f:	8d 4d c0             	lea    ecx,[ebp-0x40]
  442172:	51                   	push   ecx
  442173:	50                   	push   eax
  442174:	e8 b7 0b fe ff       	call   0x422d30 ; ["call resolved=0x422d30 "]
  442179:	83 c4 08             	add    esp,0x8
  44217c:	eb 4b                	jmp    0x4421c9
  44217e:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  442184:	83 ec 08             	sub    esp,0x8
  442187:	8b c4                	mov    eax,esp
  442189:	c7 85 d8 fe ff ff c4 	mov    DWORD PTR [ebp-0x128],0x4858c4 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Ipc\\ipccenter.cpp"]
  442193:	c7 85 dc fe ff ff ae 	mov    DWORD PTR [ebp-0x124],0xae
  44219d:	f3 0f 7e 85 d8 fe ff 	movq   xmm0,QWORD PTR [ebp-0x128]
  4421a5:	6a 03                	push   0x3
  4421a7:	83 ec 0c             	sub    esp,0xc
  4421aa:	c7 00 40 5b 48 00    	mov    DWORD PTR [eax],0x485b40 ; ["'cloudDeviceId' does not exist in farway."]
  4421b0:	c7 40 04 29 00 00 00 	mov    DWORD PTR [eax+0x4],0x29
  4421b7:	8b c4                	mov    eax,esp
  4421b9:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  4421bd:	c7 40 08 7c 5a 48 00 	mov    DWORD PTR [eax+0x8],0x485a7c ; ["ipcCenter::startup_MessageParsing"]
  4421c4:	e8 47 96 fd ff       	call   0x41b810 ; ["call resolved=0x41b810 "]
  4421c9:	ff 75 e0             	push   DWORD PTR [ebp-0x20]
  4421cc:	8d 4d e8             	lea    ecx,[ebp-0x18]
  4421cf:	c6 45 fc 03          	mov    BYTE PTR [ebp-0x4],0x3
  4421d3:	e8 78 87 fe ff       	call   0x42a950 ; ["call resolved=0x42a950 "]
  4421d8:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  4421dc:	85 ff                	test   edi,edi
  4421de:	0f 84 c7 00 00 00    	je     0x4422ab
  4421e4:	8d 85 e8 fe ff ff    	lea    eax,[ebp-0x118]
  4421ea:	8b cf                	mov    ecx,edi
  4421ec:	50                   	push   eax
  4421ed:	e8 3e c5 ff ff       	call   0x43e730 ; ["call resolved=0x43e730 "]
  4421f2:	84 c0                	test   al,al
  4421f4:	0f 85 b1 00 00 00    	jne    0x4422ab
  4421fa:	8b 0d e4 2b 4a 00    	mov    ecx,DWORD PTR ds:0x4a2be4
  442200:	83 ec 08             	sub    esp,0x8
  442203:	8b c4                	mov    eax,esp
  442205:	c7 85 d8 fe ff ff c4 	mov    DWORD PTR [ebp-0x128],0x4858c4 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Ipc\\ipccenter.cpp"]
  44220f:	c7 85 dc fe ff ff b7 	mov    DWORD PTR [ebp-0x124],0xb7
  442219:	f3 0f 7e 85 d8 fe ff 	movq   xmm0,QWORD PTR [ebp-0x128]
  442221:	6a 04                	push   0x4
  442223:	83 ec 0c             	sub    esp,0xc
  442226:	c7 00 6c 5b 48 00    	mov    DWORD PTR [eax],0x485b6c ; ["Failed to add local deviceInfo"]
  44222c:	c7 40 04 1e 00 00 00 	mov    DWORD PTR [eax+0x4],0x1e
  442233:	8b c4                	mov    eax,esp
  442235:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  442239:	c7 40 08 7c 5a 48 00 	mov    DWORD PTR [eax+0x8],0x485a7c ; ["ipcCenter::startup_MessageParsing"]
  442240:	e8 cb 95 fd ff       	call   0x41b810 ; ["call resolved=0x41b810 "]
  442245:	8b 35 e4 2b 4a 00    	mov    esi,DWORD PTR ds:0x4a2be4
  44224b:	8d 45 d8             	lea    eax,[ebp-0x28]
  44224e:	6a 00                	push   0x0
  442250:	6a 00                	push   0x0
  442252:	6a 20                	push   0x20
  442254:	6a ff                	push   0xffffffff
  442256:	50                   	push   eax
  442257:	8d 8d c4 fe ff ff    	lea    ecx,[ebp-0x13c]
  44225d:	e8 2e 8b fe ff       	call   0x42ad90 ; ["call resolved=0x42ad90 "]
  442262:	50                   	push   eax
  442263:	6a 0c                	push   0xc
  442265:	68 8c 5b 48 00       	push   0x485b8c ; ["Json dump {}"]
  44226a:	6a 04                	push   0x4
  44226c:	83 ec 0c             	sub    esp,0xc
  44226f:	c7 85 d8 fe ff ff c4 	mov    DWORD PTR [ebp-0x128],0x4858c4 ; ["D:\\vivo_Project\\vdfs\\src\\server\\Ipc\\ipccenter.cpp"]
  442279:	8b c4                	mov    eax,esp
  44227b:	c7 85 dc fe ff ff b8 	mov    DWORD PTR [ebp-0x124],0xb8
  442285:	f3 0f 7e 85 d8 fe ff 	movq   xmm0,QWORD PTR [ebp-0x128]
  44228d:	8b ce                	mov    ecx,esi
  44228f:	c6 45 fc 04          	mov    BYTE PTR [ebp-0x4],0x4
  442293:	66 0f d6 00          	movq   QWORD PTR [eax],xmm0
  442297:	c7 40 08 7c 5a 48 00 	mov    DWORD PTR [eax+0x8],0x485a7c ; ["ipcCenter::startup_MessageParsing"]
  44229e:	e8 bd 7a fc ff       	call   0x409d60 ; ["call resolved=0x409d60 "]
  4422a3:	8d 4d d8             	lea    ecx,[ebp-0x28]
  4422a6:	e8 e5 1c fc ff       	call   0x403f90 ; ["call resolved=0x403f90 "]
  4422ab:	8d 8d e8 fe ff ff    	lea    ecx,[ebp-0x118]
  4422b1:	e8 4a 5d fe ff       	call   0x428000 ; ["call resolved=0x428000 "]
  4422b6:	ff b5 c4 fe ff ff    	push   DWORD PTR [ebp-0x13c]
  4422bc:	8d 8d cc fe ff ff    	lea    ecx,[ebp-0x134]
  4422c2:	c7 45 fc 05 00 00 00 	mov    DWORD PTR [ebp-0x4],0x5
  4422c9:	e8 82 86 fe ff       	call   0x42a950 ; ["call resolved=0x42a950 "]
  4422ce:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  4422d1:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  4422d8:	59                   	pop    ecx
  4422d9:	5f                   	pop    edi
  4422da:	5e                   	pop    esi
  4422db:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  4422de:	33 cd                	xor    ecx,ebp
  4422e0:	e8 9b 05 03 00       	call   0x472880 ; ["call resolved=0x472880 "]
  4422e5:	8b e5                	mov    esp,ebp
  4422e7:	5d                   	pop    ebp
  4422e8:	c2 04 00             	ret    0x4
