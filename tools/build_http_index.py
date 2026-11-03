#!/usr/bin/env python3
"""Render syntax-derived candidates; do not infer host or wire schemas."""
import json,pathlib,re
root=pathlib.Path(__file__).resolve().parent.parent
def read(name):return json.loads((root/'evidence'/name).read_text())
def cell(s):return str(s).replace('|','&#124;').replace('\n',' ')[:180]
rows=read('http.json');lines=['# HTTP 调用与路径索引','','这是语法提取索引，不是逐项验证的在线 API 规范。相同路径可能服务于不同 host、连接方式或环境；动态表达式保留源码形式。业务字段与实际 method 以链接的完整调用为准。第三方依赖也可能贡献候选。完整配置见 [http.json](../evidence/http.json)。','','## 调用配置','','| Method 表达式 | URL 或路径表达式 | Bundle / 模块 | 证据 |','|---|---|---|---|']
seen=set()
for r in rows:
 key=(r['bundle'],r['line'],r['url'],r['method'])
 if key in seen:continue
 seen.add(key);src=f"../analysis/pretty/{r['bundle']}.js#L{r['line']}"
 lines.append(f"| `{cell(r['method'])}` | `{cell(r['url'])}` | {r['bundle']} / {r['module']} | [代码]({src}) |")
lines+=['','## 仅路径与地址字符串','','以下字面值未必属于路由：也可能是资源地址、日志、未启用分支或第三方库示例。不能仅据字符串确定鉴权、请求方法或返回格式。','','| 字面值 | 证据 |','|---|---|']
seen=set()
for r in read('literals.json'):
 if r['value'] in seen:continue
 seen.add(r['value']);lines.append(f"| `{cell(r['value'])}` | [代码](../analysis/pretty/{r['bundle']}.js#L{r['line']}) |")
(root/'docs/http-index.md').write_text('\n'.join(lines)+'\n')
print(json.dumps({'httpCallSites':len(rows),'distinctRenderedLiterals':len(seen)}))
