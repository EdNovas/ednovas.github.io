---
title: Linux Nano编辑器使用说明
tags: 
  - nano
  - linux
  - VPS
categories:
  - VPS
date: 2021-08-15 15:25:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/featured_hub2cfcd6b5c77b9a12c88168cc4a68ae1_69085_768x0_resize_q75_lanczos.webp
---

## 前言

「Q：如何生成一个随机字符串？ A：让新手退出Vim。」

网上大部分 Linux 相关教程在涉及文本编辑操作时都是选择的 Vim 编辑器，对于新手来说如何退出成了最大的难题。其实除了 Vim 之外还有别的选择，那就是 nano 。上手 nano 几乎是零学习成本，而且对于只改几行配置文件这样的简单操作，nano 的用户体验完全吊打 Vim。

## 安装

一般系统都内置了 nano 编辑器，如果没有，可以自己安装。

### Cen­tOS 系统

```bash
yum install -y nano
```


### De­bian/​Ubuntu 系统

```bash
apt-get install -y nano
```


## 基本操作

### 语法

```
nano <文件名或文件绝对路径>
```

### 使用示例

```
nano P3TERX.COM
nano /root/P3TERX.COM
```

当你打开一个不存在的文件，那么即为新建文件。
打开文件后，就可以直接编辑了。

### 光标控制

移动光标：使用用方向键移动。

选择文字：按住鼠标左键拖动（然后就可以复制了）。

### 复制文本

这取决于你用的是什么 SSH 软件。

Putty 要复制文本是选择要复制的文本点击鼠标左键即可。

Xshell 要复制文本则是选择要复制的文本按下 Ctrl+INSERT 键。

Finalshell 要复制文本是选择复制的文本然后右键复制。

### 粘贴文本

这取决于你用的是什么 SSH 软件。

Putty 要粘贴文本点击鼠标右键即可。

Xshell 要粘贴文本则是按下 Shift+INSERT 键。

Finalshell 要黏贴文本是按下右键黏贴。

### 快捷键

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20181207050337.png)

打开文件后，下方有一堆文字，那就是快捷键说明。例如：`^G` 即为 `Ctrl+G` ，功能为显示帮助文本。

`Ctrl+G`，显示帮助文本

`Ctrl+O`，保存当前文件

`Ctrl+R`，读取其他文件并插入光标位置

`Ctrl+Y`，跳至上一屏幕

`Ctrl+K`，剪切当前一行

`Ctrl+C`，显示光标位置

`Ctrl+X`，退出编辑文本

`Ctrl+J`，对其当前段落（以空格为分隔符）

`Ctrl+W`，搜索文本位置

`Ctrl+V`，跳至下一屏幕

`Ctrl+U`，粘贴文本至光标处

`Ctrl+T`，运行拼写检查

`Ctrl+_`，跳转到某一行

`ALT+U`，撤销

`ALT+E`，重做

`ALT+Y`, 语法高亮

`ALT+#`，显示行号

## 进阶使用

基本操作都玩转了，下面就来点骚操作。

### nano 配置文件(~/.nanorc)

下面配置因人而异，可以选择性添加，不过一般向类似：制表符宽度，隐藏帮助，显示行号，语法高亮，以及平滑卷屏等基本上是必开的选项。

```
set tabsize 4       # 设置制表符宽度
set autoindent      # 允许自动缩进
set cut             # 设置 CTRL-K 可以剪贴到行末
set noconvert       # 不要转换 DOS/UNIX 换行符
set nowrap          # 不要自动换行
set nohelp          # 不显示下面两行帮助
set morespace       # 隐藏标题下的空白行，换取更多编辑空间
set smooth          # 平滑卷屏
set suspend         # 允许 ctrl-z 将 nano 置于后台
set smarthome       # 第一次 Home 跳到行首非空字符，第二次到行首
set tabstospaces    # 展开制表符为空格（如果需要的话）
set mouse           # 允许鼠标
set linenumbers     # 显示行号（可以在编辑时 ALT-# 切换）
set backupdir path  # 设置备份路径
set backup          # 允许保存备份
set casesensitive   # 搜索使用大小写敏感
set multibuffer     # 使用 CTRL-r 读取文件时，默认读取到新缓存
set nonewlines      # 不在文件末尾添加新行
include <filename>  # 加载额外配置，通常是 /usr/share/nano 下的各种语法文件
```

### 语法高亮

nanorc 是一个改善 nano 语法高亮的项目，如果你的系统没有 nano 的语法高亮文件，可以安装它。

```bash
curl https://raw.githubusercontent.com/scopatz/nanorc/master/install.sh | sh
```

## 参考资料

[Linux 更适合新手的文本编辑器 nano 真・简单使用教程](http://ww12.doub.io/)

[Nano 编辑器可以做些什么？](https://zhuanlan.zhihu.com/p/47794948)


> 转载自 P3TERX https://p3terx.com/archives/linux-nano-tutorial.html