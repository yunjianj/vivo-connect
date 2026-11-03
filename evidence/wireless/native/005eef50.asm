; fn_5eef50; image base 0x400000; static annotation only
  5eef50:	55                   	push   ebp
  5eef51:	8b ec                	mov    ebp,esp
  5eef53:	6a ff                	push   0xffffffff
  5eef55:	68 87 83 69 00       	push   0x698387
  5eef5a:	64 a1 00 00 00 00    	mov    eax,fs:0x0
  5eef60:	50                   	push   eax
  5eef61:	83 ec 68             	sub    esp,0x68
  5eef64:	a1 34 b7 75 00       	mov    eax,ds:0x75b734
  5eef69:	33 c5                	xor    eax,ebp
  5eef6b:	89 45 f0             	mov    DWORD PTR [ebp-0x10],eax
  5eef6e:	56                   	push   esi
  5eef6f:	50                   	push   eax
  5eef70:	8d 45 f4             	lea    eax,[ebp-0xc]
  5eef73:	64 a3 00 00 00 00    	mov    fs:0x0,eax
  5eef79:	8b 75 08             	mov    esi,DWORD PTR [ebp+0x8]
  5eef7c:	b9 32 a3 7a 00       	mov    ecx,0x7aa332
  5eef81:	89 75 8c             	mov    DWORD PTR [ebp-0x74],esi
  5eef84:	e8 65 9b e1 ff       	call   0x408aee ; ["call resolved=0x666d52 "]
  5eef89:	8d 4d 90             	lea    ecx,[ebp-0x70]
  5eef8c:	ff 15 cc d3 79 00    	call   DWORD PTR ds:0x79d3cc
  5eef92:	8d 45 e0             	lea    eax,[ebp-0x20]
  5eef95:	c7 45 fc 00 00 00 00 	mov    DWORD PTR [ebp-0x4],0x0
  5eef9c:	50                   	push   eax
  5eef9d:	8d 4d 90             	lea    ecx,[ebp-0x70]
  5eefa0:	ff 15 d4 d3 79 00    	call   DWORD PTR ds:0x79d3d4
  5eefa6:	56                   	push   esi
  5eefa7:	8d 4d e0             	lea    ecx,[ebp-0x20]
  5eefaa:	c6 45 fc 01          	mov    BYTE PTR [ebp-0x4],0x1
  5eefae:	ff 15 c8 d3 79 00    	call   DWORD PTR ds:0x79d3c8
  5eefb4:	8d 4d e0             	lea    ecx,[ebp-0x20]
  5eefb7:	ff 15 b8 d3 79 00    	call   DWORD PTR ds:0x79d3b8
  5eefbd:	8d 4d 90             	lea    ecx,[ebp-0x70]
  5eefc0:	ff 15 d0 d3 79 00    	call   DWORD PTR ds:0x79d3d0
  5eefc6:	8b c6                	mov    eax,esi
  5eefc8:	8b 4d f4             	mov    ecx,DWORD PTR [ebp-0xc]
  5eefcb:	64 89 0d 00 00 00 00 	mov    DWORD PTR fs:0x0,ecx
  5eefd2:	59                   	pop    ecx
  5eefd3:	5e                   	pop    esi
  5eefd4:	8b 4d f0             	mov    ecx,DWORD PTR [ebp-0x10]
  5eefd7:	33 cd                	xor    ecx,ebp
  5eefd9:	e8 b1 54 e1 ff       	call   0x40448f ; ["call resolved=0x666d90 "]
  5eefde:	8b e5                	mov    esp,ebp
  5eefe0:	5d                   	pop    ebp
  5eefe1:	c3                   	ret
