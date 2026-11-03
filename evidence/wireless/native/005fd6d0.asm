; BluetoothClassicBase::sendMsg; image base 0x400000; static annotation only
  5fd6d0:	83 ec 20             	sub    esp,0x20
  5fd6d3:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5fd6d8:	33 c4                	xor    eax,esp
  5fd6da:	89 44 24 1c          	mov    DWORD PTR [esp+0x1c],eax
  5fd6de:	53                   	push   ebx
  5fd6df:	56                   	push   esi
  5fd6e0:	8b 74 24 30          	mov    esi,DWORD PTR [esp+0x30]
  5fd6e4:	8b d9                	mov    ebx,ecx
  5fd6e6:	57                   	push   edi
  5fd6e7:	8b 7c 24 30          	mov    edi,DWORD PTR [esp+0x30]
  5fd6eb:	b9 d0 a6 7a 00       	mov    ecx,0x7aa6d0
  5fd6f0:	e8 f9 b3 e0 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5fd6f5:	6a 00                	push   0x0
  5fd6f7:	ff 36                	push   DWORD PTR [esi]
  5fd6f9:	57                   	push   edi
  5fd6fa:	ff 73 04             	push   DWORD PTR [ebx+0x4]
  5fd6fd:	ff 15 d0 d8 79 00    	call   DWORD PTR ds:0x79d8d0
  5fd703:	83 f8 ff             	cmp    eax,0xffffffff
  5fd706:	0f 85 ab 00 00 00    	jne    0x5fd7b7
  5fd70c:	6a 5c                	push   0x5c
  5fd70e:	68 60 48 6f 00       	push   0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fd713:	e8 4e b0 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fd718:	83 c4 08             	add    esp,0x8
  5fd71b:	85 c0                	test   eax,eax
  5fd71d:	74 12                	je     0x5fd731
  5fd71f:	6a 5c                	push   0x5c
  5fd721:	68 60 48 6f 00       	push   0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fd726:	e8 3b b0 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fd72b:	83 c4 08             	add    esp,0x8
  5fd72e:	40                   	inc    eax
  5fd72f:	eb 05                	jmp    0x5fd736
  5fd731:	b8 60 48 6f 00       	mov    eax,0x6f4860 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\BluetoothClassicBase.cpp"]
  5fd736:	68 a8 49 6f 00       	push   0x6f49a8 ; ["BluetoothClassicBase::sendMsg"]
  5fd73b:	68 84 00 00 00       	push   0x84
  5fd740:	50                   	push   eax
  5fd741:	68 0c f1 6c 00       	push   0x6cf10c ; ["[ConntctionModule][%s:%d][%s]: Error: Failed to send data.\n"]
  5fd746:	8d 44 24 1c          	lea    eax,[esp+0x1c]
  5fd74a:	c7 44 24 1c 02 00 00 	mov    DWORD PTR [esp+0x1c],0x2
  5fd752:	50                   	push   eax
  5fd753:	8d 44 24 24          	lea    eax,[esp+0x24]
  5fd757:	50                   	push   eax
  5fd758:	e8 ac 98 e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5fd75d:	8b 54 24 3c          	mov    edx,DWORD PTR [esp+0x3c]
  5fd761:	83 c4 18             	add    esp,0x18
  5fd764:	83 fa 10             	cmp    edx,0x10
  5fd767:	72 2f                	jb     0x5fd798
  5fd769:	8b 4c 24 10          	mov    ecx,DWORD PTR [esp+0x10]
  5fd76d:	42                   	inc    edx
  5fd76e:	8b c1                	mov    eax,ecx
  5fd770:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5fd776:	72 16                	jb     0x5fd78e
  5fd778:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5fd77b:	83 c2 23             	add    edx,0x23
  5fd77e:	2b c1                	sub    eax,ecx
  5fd780:	83 c0 fc             	add    eax,0xfffffffc
  5fd783:	83 f8 1f             	cmp    eax,0x1f
  5fd786:	76 06                	jbe    0x5fd78e
  5fd788:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5fd78e:	52                   	push   edx
  5fd78f:	51                   	push   ecx
  5fd790:	e8 05 49 e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5fd795:	83 c4 08             	add    esp,0x8
  5fd798:	ff 73 04             	push   DWORD PTR [ebx+0x4]
  5fd79b:	ff 15 f0 d8 79 00    	call   DWORD PTR ds:0x79d8f0
  5fd7a1:	5f                   	pop    edi
  5fd7a2:	5e                   	pop    esi
  5fd7a3:	32 c0                	xor    al,al
  5fd7a5:	5b                   	pop    ebx
  5fd7a6:	8b 4c 24 1c          	mov    ecx,DWORD PTR [esp+0x1c]
  5fd7aa:	33 cc                	xor    ecx,esp
  5fd7ac:	e8 de 6c e0 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5fd7b1:	83 c4 20             	add    esp,0x20
  5fd7b4:	c2 08 00             	ret    0x8
  5fd7b7:	8b 4c 24 28          	mov    ecx,DWORD PTR [esp+0x28]
  5fd7bb:	b0 01                	mov    al,0x1
  5fd7bd:	5f                   	pop    edi
  5fd7be:	5e                   	pop    esi
  5fd7bf:	5b                   	pop    ebx
  5fd7c0:	33 cc                	xor    ecx,esp
  5fd7c2:	e8 c8 6c e0 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5fd7c7:	83 c4 20             	add    esp,0x20
  5fd7ca:	c2 08 00             	ret    0x8
