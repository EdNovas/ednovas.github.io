---
title: 使用 SSH 连接 GitHub Action 服务器
tags: [vps,github,github actions,ssh]
id: '1247'
categories:
  - - VPS
date: 2021-![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-03 11:32:45
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/442-github-actions.png
# highlight_shrink: true
---

奇技淫巧，请勿滥用

GitHub Actions 虚拟服务器(VM/VPS)评测（源自p3trex大佬）：

https://p3terx.com/archives/github-actions-virtual-environment-simple-evaluation.html


实际上 GitHub Ac­tions 本身是不允许直接连接进行交互式操作，但有好事的开发者竟然另辟蹊径通过安装 tmate 来实现了 SSH 连接，并且制作了相关的 ac­tion 。这使得我们可以非常容易连接到 Ac­tions 的虚拟环境中，相当于免费获得了 20 台 E5 2vCPU/​7G RAM/​90G SSD 配置的 Linux VPS 和 5 台 ma­cOS VPS。

## tmate

GitHub项目地址：

https://github.com/mxschmitt/action-tmate

第一个实现 tmate 连接 Ac­tions 的 ac­tion ，但此方案在退出连接后不能进行到下一个步骤，所以在实际使用中没有多少价值，且极易造成资源浪费，所以只能用于 SSH 连接。不过由于其开天辟地的作用，我决定把它放到第一位。

work­flow 文件示例：

```
name: Ubuntu
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - name: Setup tmate session
      uses: mxschmitt/action-tmate@v1
```

## debugger-action

GitHub项目地址：

https://github.com/csexton/debugger-action

此 ac­tion 作者受 mxschmitt/action-tmate 启发，同样是通过 tmate 连接，退出连接后可持续进行下一个步骤，能更好的应用到实际项目中使用。作者可能考虑到为 GitHub 节约资源，默认加了 15 分钟自动断开连接，不过可以通过执行 `touch /tmp/keepalive` 命令去解除。

> TIPS: 博主在实际使用中发现，如果一段时间内（大概2分钟左右）不进行任何操作将会失去控制，有可能是 Ac­tions 的限制措施或者是 tmate 本身的问题。

work­flow 文件示例：

```
name: Ubuntu
on: push
jobs:
  Ubuntu:
    runs-on: ubuntu-latest
    steps:
    - name: Setup Debug Session
      uses: csexton/debugger-action@master
```

## ngrok

使用ngrok来穿透内网

### 注册ngrok

https://www.ngrok.com/

### 查看 Authtoken

前往 https://dashboard.ngrok.com/auth/your-authtoken

复制下来这一长串token，如我的就是（最后几位已打码）

1ry9Mln411aOpQrcrtCzLWYaBwl_5rQXwdRRcA14oXXoXoXoo

### 创建项目

在 GitHub 创建一个新的仓库

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-03_11-56-18.png)

只需要填上仓库名字，点击下面的Creat repository

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-03_11-56-43.png)

添加两个仓库secrets，一个是 `NGROK_TOKEN`，一个是 `SSH_PASSWORD`

分别填入刚刚获取的token和你想要用的ssh密码

NGROK_TOKEN： 1ry9Mln411aOpQrcrtCzLWYaBwl_5rQXwdRRcA14oXXoXoXoo
SSH_PASSWORD：英文数字ssh密码

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-03_12-01-43.png)

点击code, creating a new file

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-03_12-05-04.png)

文件名填入`ssh-server.sh`，内容复制以下


```
#!/bin/bash

if [[ -z "$NGROK_TOKEN" ]]; then
  echo "Please set 'NGROK_TOKEN'"
  exit 2
fi

if [[ -z "$SSH_PASSWORD" ]]; then
  echo "Please set 'SSH_PASSWORD' for user: $USER"
  exit 3
fi

wget -q https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-386.zip
unzip ngrok-stable-linux-386.zip
chmod +x ./ngrok

echo -e "$SSH_PASSWORD\n$SSH_PASSWORD" | sudo passwd "$USER"

rm -f .ngrok.log
./ngrok authtoken "$NGROK_TOKEN"
./ngrok tcp 22 --log ".ngrok.log" &

sleep 10

HAS_ERRORS=$(grep "command failed" < .ngrok.log)

if [[ -z "$HAS_ERRORS" ]]; then
  echo ""
  echo "To connect: $(grep -o -E "tcp://(.+)" < .ngrok.log | sed "s/tcp:\/\//ssh $USER@/" | sed "s/:/ -p /")"
  echo ""
else
  echo "$HAS_ERRORS"
  exit 4
fi
```

## 创建 workflow

点击Actions， set up a workflow yourself

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-03_12-07-51.png)

名字填入`ssh-server.yml`

内容复制黏贴以下（这是最长时长6小时）

```
name: SSH Server
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
     - uses: actions/checkout@v2

     - name: Failed
       run: ./dummy.sh

     - name: Start SSH Server
       if: ${{ failure() }}
       env:
         NGROK_TOKEN: ${{ secrets.NGROK_TOKEN }}
         SSH_PASSWORD: ${{ secrets.SSH_PASSWORD }}
       run: |
          chmod +x ./ssh-server.sh &&  ./ssh-server.sh

     - name: Sleep
       if: ${{ failure() }}
       run: sleep 6h
```

## 启动github action

ssh中填入对应内容

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-03_12-09-57.png)

ssh的密码填入刚刚设定的 `SSH_PASSWORD`

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-03_12-10-28.png)

## ActionsVM

https://github.com/P3TERX/ActionsVM

点击 Use this template （别fork）或者以下链接创建一个仓库

https://github.com/P3TERX/ActionsVM/generate

也是同样在settings中secrets填入`NGROK_TOKEN`和`SSH_PASSWORD`

然后点击actions，选择Ubuntu（ngrok），点击运行run workflow，同上找到ssh连接信息并连接

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/05-03_12-18-33.png)

## 服务器存活时间

服务器存活时长最长6小时，到时间会停止actions，可以rerun jobs重新运行，不过ssh信息都会改变


> 文章参考/引用自 P3TREX大佬 https://p3terx.com/archives/ssh-to-the-github-actions-virtual-server-environment.html
> https://p3terx.com/archives/github-actions-virtual-environment-simple-evaluation.html
> 福儿fule https://www.wangfuchao.com/479/
> csdn https://blog.csdn.net/alex_yangchuansheng/article/details/108313625
