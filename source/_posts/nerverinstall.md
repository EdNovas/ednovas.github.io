---
title: 通过NeverInstall应用平台，实现在线应用体验
tags: []
categories:
  - - 杂
date: 2021-10-24 10:51:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/234ae397-4d40-4dcb-bc33-4b1e0f6777a9.jpg
# highlight_shrink: true
---

> 转载自 小御坂的破站 https://blog.misaka.sbs/202110/139.html

Neverinstall 是一个基于云的平台，可将任何桌面应用程序带入浏览器。 我们的目标是从根本上改变我们使用软件应用程序的方式，不受硬件限制，真正可以从任何地方访问。

据官方的远大远景，看起来挺好玩的样子

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211025013412.png)

## 准备材料

谷歌 / Github / 苹果 / 推特 / 脸书账号一枚


## 注册步骤

1. 打开[官网](https://neverinstall.com/login) https://neverinstall.com/login
2. 选择任意一种方式登录

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211025013556.png)

PS: 由于其登录验证域名在国内被特殊照顾，请使用特殊方式登录

3. 进入到应用管理页面

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211025013814.png)

4. 选择应用，可以发现都是以编程为主的应用多。博主准备以VS Code为例

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211025013826.png)

5. 选择服务器位置，点击Launch

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211025013909.png)

6. 等待创建完成

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211025013947.png)

7. 创建完成了，点击Launch

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211025014006.png)


8. 进入到VS Code的页面，可以看到和Linux的VS Code差不多

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211025014034.png)


9.  可以发现还有root权限？（估计我发出去官方准备要开始打压了）

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/20211025014121.png)


## 系统跑分

AWS的母鸡，不懂是不是正价，速度贼快

----------------------------------------------------------------------
 CPU Model             : Intel(R) Xeon(R) Platinum 8275CL CPU @ 3.00GHz
 CPU Cores             : 16
 CPU Frequency         : 3460.743 MHz
 CPU Cache             : 36608 KB
 Total Disk            : 194.0 GB (56.0 GB Used)
 Total Mem             : 31315 MB (4444 MB Used)
 Total Swap            : 0 MB (0 MB Used)
 System uptime         : 0 days, 18 hour 12 min
 Load average          : 8.50, 7.94, 7.32
 OS                    : Debian GNU/Linux 10
 Arch                  : x86_64 (64 Bit)
 Kernel                : 5.4.0-1045-aws
 TCP CC                : cubic
 Virtualization        : Docker
 Organization          : AS16509 Amazon.com, Inc.
 Location              : San Jose / US
 Region                : California
----------------------------------------------------------------------
 I/O Speed(1st run)    : 134 MB/s
 I/O Speed(2nd run)    : 131 MB/s
 I/O Speed(3rd run)    : 135 MB/s
 Average I/O speed     : 133.3 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    4751.53 Mbps      4711.55 Mbps        0.17 ms     
 Shanghai   CT    118.43 Mbps       2826.67 Mbps        143.37 ms   
 Shanghai   CU    796.89 Mbps       13.88 Mbps          150.74 ms   
 Guangzhou  CT    39.25 Mbps        1484.45 Mbps        172.60 ms   
 Guangzhou  CU    513.62 Mbps       1903.98 Mbps        178.31 ms   
 Hongkong   CN    1154.32 Mbps      2540.81 Mbps        158.30 ms   
 Tokyo      JP    387.35 Mbps       2688.88 Mbps        115.04 ms   
----------------------------------------------------------------------

## 注意事项

1. 请勿挖矿等高CPU占用，或违反官方TOS的操作
2. 过了一段时间之后会自动休眠（Pause你的应用），但是不保留数据。所以说不用的话请在工具栏点击关闭图标，暂停应用即可
3. 虽然速度贼快，但是没公网ip，这也没啥用

