; fn_60ed40; image base 0x400000; static annotation only
  60ed40:	81 ec 04 02 00 00    	sub    esp,0x204
  60ed46:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  60ed4b:	33 c4                	xor    eax,esp
  60ed4d:	89 84 24 00 02 00 00 	mov    DWORD PTR [esp+0x200],eax
  60ed54:	56                   	push   esi
  60ed55:	8b b4 24 0c 02 00 00 	mov    esi,DWORD PTR [esp+0x20c]
  60ed5c:	57                   	push   edi
  60ed5d:	8b f9                	mov    edi,ecx
  60ed5f:	b9 03 aa 7a 00       	mov    ecx,0x7aaa03
  60ed64:	e8 85 9d df ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  60ed69:	83 bc 24 28 02 00 00 	cmp    DWORD PTR [esp+0x228],0x10
  60ed71:	8d 84 24 14 02 00 00 	lea    eax,[esp+0x214]
  60ed78:	0f 43 84 24 14 02 00 	cmovae eax,DWORD PTR [esp+0x214]
  60ed80:	83 7e 14 10          	cmp    DWORD PTR [esi+0x14],0x10
  60ed84:	72 02                	jb     0x60ed88
  60ed86:	8b 36                	mov    esi,DWORD PTR [esi]
  60ed88:	68 fc 61 6f 00       	push   0x6f61fc ; ["com.vivo.share.CONNECT_PC"]
  60ed8d:	50                   	push   eax
  60ed8e:	56                   	push   esi
  60ed8f:	68 98 08 00 00       	push   0x898
  60ed94:	68 2c 60 6f 00       	push   0x6f602c ; ["239.255.255.250"]
  60ed99:	68 70 61 6f 00       	push   0x6f6170 ; ["M-SEARCH * HTTP/1.1\r\nHost:%s:%d\r\nMan:\"ssdp:discover\"\r\nMX:5\r\nST:vivo_connect\r\ndeviceId:%s\r\nopenId:%s\r\nService:%s\r\n\r\n"]
  60ed9e:	8d 44 24 20          	lea    eax,[esp+0x20]
  60eda2:	68 00 02 00 00       	push   0x200
  60eda7:	50                   	push   eax
  60eda8:	e8 df 72 df ff       	call   0x40608c ; ["call resolved=0x4a7900 "]
  60edad:	8d 4c 24 28          	lea    ecx,[esp+0x28]
  60edb1:	83 c4 20             	add    esp,0x20
  60edb4:	8d 51 01             	lea    edx,[ecx+0x1]
  60edb7:	8a 01                	mov    al,BYTE PTR [ecx]
  60edb9:	41                   	inc    ecx
  60edba:	84 c0                	test   al,al
  60edbc:	75 f9                	jne    0x60edb7
  60edbe:	6a 10                	push   0x10
  60edc0:	8d 47 14             	lea    eax,[edi+0x14]
  60edc3:	2b ca                	sub    ecx,edx
  60edc5:	50                   	push   eax
  60edc6:	6a 00                	push   0x0
  60edc8:	51                   	push   ecx
  60edc9:	8d 44 24 18          	lea    eax,[esp+0x18]
  60edcd:	50                   	push   eax
  60edce:	ff 37                	push   DWORD PTR [edi]
  60edd0:	ff 15 94 d8 79 00    	call   DWORD PTR ds:0x79d894
  60edd6:	8b 94 24 28 02 00 00 	mov    edx,DWORD PTR [esp+0x228]
  60eddd:	5f                   	pop    edi
  60edde:	5e                   	pop    esi
  60eddf:	83 fa 10             	cmp    edx,0x10
  60ede2:	72 32                	jb     0x60ee16
  60ede4:	8b 8c 24 0c 02 00 00 	mov    ecx,DWORD PTR [esp+0x20c]
  60edeb:	42                   	inc    edx
  60edec:	8b c1                	mov    eax,ecx
  60edee:	81 fa 00 10 00 00    	cmp    edx,0x1000
  60edf4:	72 16                	jb     0x60ee0c
  60edf6:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  60edf9:	83 c2 23             	add    edx,0x23
  60edfc:	2b c1                	sub    eax,ecx
  60edfe:	83 c0 fc             	add    eax,0xfffffffc
  60ee01:	83 f8 1f             	cmp    eax,0x1f
  60ee04:	76 06                	jbe    0x60ee0c
  60ee06:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  60ee0c:	52                   	push   edx
  60ee0d:	51                   	push   ecx
  60ee0e:	e8 87 32 df ff       	call   0x40209a ; ["call resolved=0x6665be "]
  60ee13:	83 c4 08             	add    esp,0x8
  60ee16:	8b 8c 24 00 02 00 00 	mov    ecx,DWORD PTR [esp+0x200]
  60ee1d:	33 cc                	xor    ecx,esp
  60ee1f:	e8 6b 56 df ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  60ee24:	81 c4 04 02 00 00    	add    esp,0x204
  60ee2a:	c2 1c 00             	ret    0x1c
