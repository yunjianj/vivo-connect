; BtFarawayDevice::setConnected; image base 0x400000; static annotation only
  55ad40:	83 ec 20             	sub    esp,0x20
  55ad43:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  55ad48:	33 c4                	xor    eax,esp
  55ad4a:	89 44 24 1c          	mov    DWORD PTR [esp+0x1c],eax
  55ad4e:	53                   	push   ebx
  55ad4f:	56                   	push   esi
  55ad50:	8b 74 24 2c          	mov    esi,DWORD PTR [esp+0x2c]
  55ad54:	8b d9                	mov    ebx,ecx
  55ad56:	57                   	push   edi
  55ad57:	b9 74 8b 7a 00       	mov    ecx,0x7a8b74
  55ad5c:	e8 8d dd ea ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  55ad61:	0f b6 3e             	movzx  edi,BYTE PTR [esi]
  55ad64:	6a 5c                	push   0x5c
  55ad66:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  55ad6b:	e8 f6 d9 10 00       	call   0x668766 ; ["call resolved=0x668766 "]
  55ad70:	83 c4 08             	add    esp,0x8
  55ad73:	85 c0                	test   eax,eax
  55ad75:	74 12                	je     0x55ad89
  55ad77:	6a 5c                	push   0x5c
  55ad79:	68 38 81 6d 00       	push   0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  55ad7e:	e8 e3 d9 10 00       	call   0x668766 ; ["call resolved=0x668766 "]
  55ad83:	83 c4 08             	add    esp,0x8
  55ad86:	40                   	inc    eax
  55ad87:	eb 05                	jmp    0x55ad8e
  55ad89:	b8 38 81 6d 00       	mov    eax,0x6d8138 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\DeviceHandler\\BtFarawayDevice.cpp"]
  55ad8e:	57                   	push   edi
  55ad8f:	68 50 91 6d 00       	push   0x6d9150 ; ["BtFarawayDevice::setConnected"]
  55ad94:	68 c5 02 00 00       	push   0x2c5
  55ad99:	50                   	push   eax
  55ad9a:	68 74 91 6d 00       	push   0x6d9174 ; ["[ConntctionModule][%s:%d][%s]: Device setIsConnected: %d\n"]
  55ad9f:	8d 44 24 20          	lea    eax,[esp+0x20]
  55ada3:	c7 44 24 20 02 00 00 	mov    DWORD PTR [esp+0x20],0x2
  55adab:	50                   	push   eax
  55adac:	8d 44 24 28          	lea    eax,[esp+0x28]
  55adb0:	50                   	push   eax
  55adb1:	e8 53 c2 ea ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  55adb6:	8b 54 24 40          	mov    edx,DWORD PTR [esp+0x40]
  55adba:	83 c4 1c             	add    esp,0x1c
  55adbd:	83 fa 10             	cmp    edx,0x10
  55adc0:	72 2f                	jb     0x55adf1
  55adc2:	8b 4c 24 10          	mov    ecx,DWORD PTR [esp+0x10]
  55adc6:	42                   	inc    edx
  55adc7:	8b c1                	mov    eax,ecx
  55adc9:	81 fa 00 10 00 00    	cmp    edx,0x1000
  55adcf:	72 16                	jb     0x55ade7
  55add1:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  55add4:	83 c2 23             	add    edx,0x23
  55add7:	2b c1                	sub    eax,ecx
  55add9:	83 c0 fc             	add    eax,0xfffffffc
  55addc:	83 f8 1f             	cmp    eax,0x1f
  55addf:	76 06                	jbe    0x55ade7
  55ade1:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  55ade7:	52                   	push   edx
  55ade8:	51                   	push   ecx
  55ade9:	e8 ac 72 ea ff       	call   0x40209a ; ["call resolved=0x6665be "]
  55adee:	83 c4 08             	add    esp,0x8
  55adf1:	8a 0e                	mov    cl,BYTE PTR [esi]
  55adf3:	8d 83 a9 01 00 00    	lea    eax,[ebx+0x1a9]
  55adf9:	86 08                	xchg   BYTE PTR [eax],cl
  55adfb:	8b 4c 24 28          	mov    ecx,DWORD PTR [esp+0x28]
  55adff:	5f                   	pop    edi
  55ae00:	5e                   	pop    esi
  55ae01:	5b                   	pop    ebx
  55ae02:	33 cc                	xor    ecx,esp
  55ae04:	e8 86 96 ea ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  55ae09:	83 c4 20             	add    esp,0x20
  55ae0c:	c2 04 00             	ret    0x4
