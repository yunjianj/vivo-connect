; fn_43ec00; image base 0x400000; static annotation only
  43ec00:	56                   	push   esi
  43ec01:	8b f1                	mov    esi,ecx
  43ec03:	8b 4c 24 08          	mov    ecx,DWORD PTR [esp+0x8]
  43ec07:	8d 46 18             	lea    eax,[esi+0x18]
  43ec0a:	3b c8                	cmp    ecx,eax
  43ec0c:	74 12                	je     0x43ec20
  43ec0e:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  43ec12:	8b 50 10             	mov    edx,DWORD PTR [eax+0x10]
  43ec15:	72 02                	jb     0x43ec19
  43ec17:	8b 00                	mov    eax,DWORD PTR [eax]
  43ec19:	52                   	push   edx
  43ec1a:	50                   	push   eax
  43ec1b:	e8 90 54 fc ff       	call   0x4040b0 ; ["call resolved=0x4040b0 "]
  43ec20:	8b 4c 24 0c          	mov    ecx,DWORD PTR [esp+0xc]
  43ec24:	8d 46 30             	lea    eax,[esi+0x30]
  43ec27:	5e                   	pop    esi
  43ec28:	3b c8                	cmp    ecx,eax
  43ec2a:	74 12                	je     0x43ec3e
  43ec2c:	83 78 14 10          	cmp    DWORD PTR [eax+0x14],0x10
  43ec30:	8b 50 10             	mov    edx,DWORD PTR [eax+0x10]
  43ec33:	72 02                	jb     0x43ec37
  43ec35:	8b 00                	mov    eax,DWORD PTR [eax]
  43ec37:	52                   	push   edx
  43ec38:	50                   	push   eax
  43ec39:	e8 72 54 fc ff       	call   0x4040b0 ; ["call resolved=0x4040b0 "]
  43ec3e:	b0 01                	mov    al,0x1
  43ec40:	c2 08 00             	ret    0x8
