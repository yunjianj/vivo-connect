; TcpSocketBase::close; image base 0x400000; static annotation only
  5fd860:	83 ec 20             	sub    esp,0x20
  5fd863:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5fd868:	33 c4                	xor    eax,esp
  5fd86a:	89 44 24 1c          	mov    DWORD PTR [esp+0x1c],eax
  5fd86e:	56                   	push   esi
  5fd86f:	8b f1                	mov    esi,ecx
  5fd871:	b9 3e a7 7a 00       	mov    ecx,0x7aa73e
  5fd876:	e8 73 b2 e0 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5fd87b:	83 7e 04 00          	cmp    DWORD PTR [esi+0x4],0x0
  5fd87f:	0f 84 99 00 00 00    	je     0x5fd91e
  5fd885:	6a 5c                	push   0x5c
  5fd887:	68 b8 4a 6f 00       	push   0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fd88c:	e8 d5 ae 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fd891:	83 c4 08             	add    esp,0x8
  5fd894:	85 c0                	test   eax,eax
  5fd896:	74 12                	je     0x5fd8aa
  5fd898:	6a 5c                	push   0x5c
  5fd89a:	68 b8 4a 6f 00       	push   0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fd89f:	e8 c2 ae 06 00       	call   0x668766 ; ["call resolved=0x668766 "]
  5fd8a4:	83 c4 08             	add    esp,0x8
  5fd8a7:	40                   	inc    eax
  5fd8a8:	eb 05                	jmp    0x5fd8af
  5fd8aa:	b8 b8 4a 6f 00       	mov    eax,0x6f4ab8 ; ["E:\\7.0.1\\vivoesservice\\vivoesService\\SocketBase\\TcpSocketBase.cpp"]
  5fd8af:	68 f0 4b 6f 00       	push   0x6f4bf0 ; ["TcpSocketBase::close"]
  5fd8b4:	6a 6f                	push   0x6f
  5fd8b6:	50                   	push   eax
  5fd8b7:	68 10 4c 6f 00       	push   0x6f4c10 ; ["[ConntctionModule][%s:%d][%s]: Tcpsocket close =================! \n"]
  5fd8bc:	8d 44 24 14          	lea    eax,[esp+0x14]
  5fd8c0:	c7 44 24 14 02 00 00 	mov    DWORD PTR [esp+0x14],0x2
  5fd8c8:	50                   	push   eax
  5fd8c9:	8d 44 24 1c          	lea    eax,[esp+0x1c]
  5fd8cd:	50                   	push   eax
  5fd8ce:	e8 36 97 e0 ff       	call   0x407009 ; ["call resolved=0x49d340 "]
  5fd8d3:	8b 54 24 34          	mov    edx,DWORD PTR [esp+0x34]
  5fd8d7:	83 c4 18             	add    esp,0x18
  5fd8da:	83 fa 10             	cmp    edx,0x10
  5fd8dd:	72 2f                	jb     0x5fd90e
  5fd8df:	8b 4c 24 08          	mov    ecx,DWORD PTR [esp+0x8]
  5fd8e3:	42                   	inc    edx
  5fd8e4:	8b c1                	mov    eax,ecx
  5fd8e6:	81 fa 00 10 00 00    	cmp    edx,0x1000
  5fd8ec:	72 16                	jb     0x5fd904
  5fd8ee:	8b 49 fc             	mov    ecx,DWORD PTR [ecx-0x4]
  5fd8f1:	83 c2 23             	add    edx,0x23
  5fd8f4:	2b c1                	sub    eax,ecx
  5fd8f6:	83 c0 fc             	add    eax,0xfffffffc
  5fd8f9:	83 f8 1f             	cmp    eax,0x1f
  5fd8fc:	76 06                	jbe    0x5fd904
  5fd8fe:	ff 15 00 e4 79 00    	call   DWORD PTR ds:0x79e400
  5fd904:	52                   	push   edx
  5fd905:	51                   	push   ecx
  5fd906:	e8 8f 47 e0 ff       	call   0x40209a ; ["call resolved=0x6665be "]
  5fd90b:	83 c4 08             	add    esp,0x8
  5fd90e:	ff 76 04             	push   DWORD PTR [esi+0x4]
  5fd911:	ff 15 f0 d8 79 00    	call   DWORD PTR ds:0x79d8f0
  5fd917:	c7 46 04 00 00 00 00 	mov    DWORD PTR [esi+0x4],0x0
  5fd91e:	8b 4c 24 20          	mov    ecx,DWORD PTR [esp+0x20]
  5fd922:	b0 01                	mov    al,0x1
  5fd924:	5e                   	pop    esi
  5fd925:	33 cc                	xor    ecx,esp
  5fd927:	e8 63 6b e0 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5fd92c:	83 c4 20             	add    esp,0x20
  5fd92f:	c3                   	ret
