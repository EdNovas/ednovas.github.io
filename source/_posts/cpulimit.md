---
title: Linux 下 CPU limit 命令基本用法
tags: [cpulimit,vps,cpu,命令,bash]
id: '1233'
categories:
  - - 编程
date: 2021-04-15 12:37:45
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/cpulimit.jpg
# highlight_shrink: true
---

## Ubuntu/Debian下安装CPUlimit

```
apt install cpulimit
```

## CentOS下安装：
```
yum install cpulimit
```

## 使用说明

```
cpulimit -h
```

使用说明：

```
Usage: cpulimit TARGET [OPTIONS...] [-- PROGRAM]
   TARGET must be exactly one of these:
      -p, --pid=N        pid of the process
      -e, --exe=FILE     name of the executable program file
                         The -e option only works when
                         cpulimit is run with admin rights.
      -P, --path=PATH    absolute path name of the
                         executable program file
   OPTIONS
      -b  --background   run in background
      -f  --foreground   launch target process in foreground and wait for it to exit
      -c  --cpu=N        override the detection of CPUs on the machine.
      -l, --limit=N      percentage of cpu allowed from 1 up.
                         Usually 1 - 100, but can be higher
                         on multi-core CPUs (mandatory)
      -m, --monitor-forks  Watch children/forks of the target process
      -q, --quiet        run in quiet mode (only print errors).
      -k, --kill         kill processes going over their limit
                         instead of just throttling them.
      -r, --restore      Restore processes after they have
                         been killed. Works with the -k flag.
      -s, --signal=SIG   Send this signal to the watched process when cpulimit exits.
                         Signal should be specificed as a number or 
                         SIGTERM, SIGCONT, SIGSTOP, etc. SIGCONT is the default.
      -v, --verbose      show control statistics
      -z, --lazy         exit if there is no suitable target process,
                         or if it dies
          --             This is the final CPUlimit option. All following
                         options are for another program we will launch.
      -h, --help         display this help and exit
```

如果想要限制某个程序，比如xmrig挖矿程序，可以使用
```
cpulimit -e xmrig -l 80
```
即为限制xmrig程序为占用cpu80%

或者限制pid
```
cpulimit -p 1234 -l 10
```
或者限制目录
```
cpulimit -e /usr/local/nginx/sbin/nginx -l 10
```

## 注意事项
* -l后面限制的cpu使用量，要根据实际的核心数量而成倍减少。比如上文中的进程1234，40%的限制生效在1核服务器中，如果是双核服务器，则应该限制到20%，四核服务器限制到10%以此类推。

* root用户可以限制所有的进程，普通用户只能限制自己有权限管理的进程。