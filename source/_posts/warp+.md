---
title: WARP+ 刷无限流量
tags: [白嫖,免费]
categories:
  - - 杂
date: 2021-10-05 11:51:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/main-warp-share-1.png
# highlight_shrink: true
---

## 最简单的方法

https://replit.com/@wdm1732418365/warp

点击小三角开始run运行，然后输入你的warp ID（获取方法见下`获取APP的设备ID`部分）

如果你有python环境，本地也可以挂着，或者挂在VPS上开个screen挂着

> fork 自 https://replit.com/@aliilapro/warp

## 下载

CloudFlare® WARP APP

下载地址：https://1.1.1.1/

包含全客户端，下载对应客户端软件

## 获取APP的设备ID

### Windows

打开客户端的偏好设置，然后复制这一串设备ID

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-05_19-04-39.png)

### Android

点击右上角菜单图标，选择 Advanced，选择 Diagnostics，复制ID

## 脚本

直接下载`warp.py`脚本 https://ednovas.cloud/s/xoQhl

或者

复制下方的脚本内容并保存到 `warp.py` 文件


```python
import urllib.request
import json
import datetime
import random
import string
import time
import os
import sys
os.system("title WARP-PLUS-CLOUDFLARE By ALIILAPRO")
os.system('cls' if os.name == 'nt' else 'clear')
print('Getting WARP+ Traffic on Github Actions')
referrer = os.environ["DEVICEID"]
def genString(stringLength):
	try:
		letters = string.ascii_letters + string.digits
		return ''.join(random.choice(letters) for i in range(stringLength))
	except Exception as error:
		print(error)		    
def digitString(stringLength):
	try:
		digit = string.digits
		return ''.join((random.choice(digit) for i in range(stringLength)))    
	except Exception as error:
		print(error)	
url = f'https://api.cloudflareclient.com/v0a{digitString(3)}/reg'
def run():
	try:
		install_id = genString(22)
		body = {"key": "{}=".format(genString(43)),
				"install_id": install_id,
				"fcm_token": "{}:APA91b{}".format(install_id, genString(134)),
				"referrer": referrer,
				"warp_enabled": False,
				"tos": datetime.datetime.now().isoformat()[:-3] + "+02:00",
				"type": "Android",
				"locale": "es_ES"}
		data = json.dumps(body).encode('utf8')
		headers = {'Content-Type': 'application/json; charset=UTF-8',
					'Host': 'api.cloudflareclient.com',
					'Connection': 'Keep-Alive',
					'Accept-Encoding': 'gzip',
					'User-Agent': 'okhttp/3.12.1'
					}
		req         = urllib.request.Request(url, data, headers)
		response    = urllib.request.urlopen(req)
		status_code = response.getcode()	
		return status_code
	except Exception as error:
		print(error)	

g = 0
b = 0
while True:
	result = run()
	if result == 200:
		g = g + 1
		os.system('cls' if os.name == 'nt' else 'clear')
		print("")
		print("Getting WARP+ Traffic")
		print("")
		animation = ["[■□□□□□□□□□] 10%","[■■□□□□□□□□] 20%", "[■■■□□□□□□□] 30%", "[■■■■□□□□□□] 40%", "[■■■■■□□□□□] 50%", "[■■■■■■□□□□] 60%", "[■■■■■■■□□□] 70%", "[■■■■■■■■□□] 80%", "[■■■■■■■■■□] 90%", "[■■■■■■■■■■] 100%"] 
		for i in range(len(animation)):
			time.sleep(0.5)
			sys.stdout.write("\r[+] Preparing... " + animation[i % len(animation)])
			sys.stdout.flush()
		print(f"\n[-] WORK ON ID: {referrer}")    
		print(f"[:)] {g} GB has been successfully added to your account.")
		print(f"[#] Total: {g} Good {b} Bad")
		print("[*] After 18 seconds, a new request will be sent.")
		time.sleep(18)
	else:
		b = b + 1
		os.system('cls' if os.name == 'nt' else 'clear')
		print("")
		print("Getting WARP+ Traffic")
		print("")
		print("[:(] Error when connecting to server.")
		print(f"[#] Total: {g} Good {b} Bad")	
```

## 配置GitHub Actions

新建一个私人仓库，名称自拟

上传 `warp.py` 到该仓库

转到Actions，点击 `set up a workflow yourself`

复制黏贴以下内容，并点击绿色的`Start commit` 

```
name: 'Getting WARP+ Traffic'

on:
  workflow_dispatch:
  push:
    branches:
     - main
  schedule:
    - cron: '33 8 * * *'

jobs:
  auto_getting_traffic:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checking'
        uses: actions/checkout@v2

      - name: 'Setting Python'
        uses: actions/setup-python@v1
        with:
          python-version: '3.x'

      - name: 'Getting WARP+ Traffic'
        env:
          DEVICEID: ${{ secrets.DEVICEID }}      
        run: python warp.py
```

## 添加 Secret

找到settings, secrets,新创建一个仓库secret

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-05_21-29-17.png)

名字填入`DEVICEID`，下方黏贴上最早复制的那个设备ID，最后点击Add secret添加

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-05_21-31-32.png)

## 开始 Actions

转到 `Actions`，点击`Getting WARP+ Traffic`，`Run workflow` 即可开始了

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-05_21-34-24.png)

## F&Q

1. 为什么我刷的流量没收到？
   
    网络延迟缘故，请重新启动客户端或重新输入原来的账户许可密钥。（请耐心等待，实际时间可能会等一会）
    或者Github Action设置的设备ID有误

2. 怎么做到把这个流量同步到别的客户端上面

    记录下你刷的那个对应的许可密钥（可在设置中找到），然后把别的端的许可密钥替换一下，即可自动同步过去了（相当于登录账号）

3. 为什么没法科学上网

    连接的时候需要更新连接分发信息，而这些信息基本都在国外并且可能被墙了。warp更倾向的是私人安全网络还有加速，国内用途不大



> 小御坂的破站 https://blog.misaka.sbs/202110/51.html?__cf_chl_managed_tk__=pmd_AkvdgMl3lYFmS0UPptjlrqGcU2kUCCCW7kRitfjk7BI-1633457298-0-gqNtZGzNAvujcnBszQiR