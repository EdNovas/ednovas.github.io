---
title: Aria2离线下载和Rclone使用
tags: 
  - aria2
  - 离线下载
  - 下载
categories:
  - 下载
date: 2021-08-01 17:56:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/xiao2018-08-26_15-31-27.jpg
---

## 前言

既然是Aria2离线下载了，那么就肯定是用linux服务器下载并且安装aria2了，这里推荐一个好用而且十分方便的方法

## 脚本

Aria2 一键安装管理脚本 增强版

来自P3TREX大佬的脚本：

https://github.com/P3TERX/aria2.sh

### 功能特性

* BT 下载率高、速度快
* 重启后不丢失任务进度、不重复下载
* 下载错误或取消下载自动删除未完成的文件防止磁盘空间占用
* 下载完成自动清除.aria2后缀名文件
* 一键获取 BT tracker，进一步提升 BT 下载速度
* 更好的 PT 下载支持
* 有一定的防版权投诉、防迅雷吸血效果
* 联动 RCLONE 自动上传到 Google Drive 和 OneDrive 等网盘



## 安装

（全部命令基于Debian/Ubuntu系统，Centos等自行更换成yum等）

安装基本组件

```
apt install wget curl ca-certificates
```

下载脚本

```
wget -N git.io/aria2.sh && chmod +x aria2.sh
```

运行脚本

```
./aria2.sh
```

选择你要执行的选项

显示如下，选择1并回车进行安装，安装完成会返回aria2的信息，请复制下来并保存

再次开启该界面用 `./aria2.sh`，输入12并回车开启自动更新BT-Tracker

```
 Aria2 一键安装管理脚本 增强版 [v2.7.4] by P3TERX.COM
 
  0. 升级脚本
 ———————————————————————
  1. 安装 Aria2
  2. 更新 Aria2
  3. 卸载 Aria2
 ———————————————————————
  4. 启动 Aria2
  5. 停止 Aria2
  6. 重启 Aria2
 ———————————————————————
  7. 修改 配置
  8. 查看 配置
  9. 查看 日志
 10. 清空 日志
 ———————————————————————
 11. 手动更新 BT-Tracker
 12. 自动更新 BT-Tracker
 ———————————————————————

 Aria2 状态: 已安装 | 已启动

 自动更新 BT-Tracker: 已开启

 请输入数字 [0-12]:
```

### 其他操作

启动：`/etc/init.d/aria2 start` | `service aria2 start`

停止：`/etc/init.d/aria2 stop` | `service aria2 stop`

重启：`/etc/init.d/aria2 restart` | `service aria2 restart`

查看状态：`/etc/init.d/aria2 status | `service aria2 status`

配置文件路径：`/root/.aria2c/aria2.conf` （配置文件有中文注释，若语言设置有问题会导致中文乱码）

默认下载目录：`/root/downloads`

RPC 密钥：随机生成，可使用选项`7. 修改 配置文件`自定义

## 文件说明

TIPS: 脚本需配合配置文件使用，仅适用于 GNU/​Linux

|文件|说明|
|:----|:----|
|aria2.conf|Aria2 配置文件。仅适用于 Aria2 1.35.0 及以上版本，在不了解的情况下修改可能导致本方案的特性失效。|
|delete.sh|文件删除脚本。在下载停止后执行([on-download-stop](https://aria2.github.io/manual/en/html/aria2c.html#cmdoption-on-download-stop))，自动删除文件及 .aria2 后缀名文件，防止不必要的磁盘空间占用。（默认启用）|
|clean.sh|清理脚本。在下载完成后执行([on-download-complete](https://aria2.github.io/manual/en/html/aria2c.html#cmdoption-on-download-complete))，自动清除 .aria2 后缀名文件。（默认启用）|
|upload.sh|上传脚本。在下载完成后执行([on-download-complete](https://aria2.github.io/manual/en/html/aria2c.html#cmdoption-on-download-complete))，自动调用 RCLONE 上传(move)下载的文件到网盘，并自动清除 .aria2 后缀名文件与空目录。（默认不启用）|
|move.sh|文件移动脚本。在下载完成后执行([on-download-complete](https://aria2.github.io/manual/en/html/aria2c.html#cmdoption-on-download-complete))，自动将下载完成的文件移动到指定目录，并自动清除 .aria2 后缀名文件与空目录。（默认不启用）|
|tracker.sh|BT tracker 列表更新脚本。在 Aria2 配置文件(aria2.conf)所在目录执行即可获取最新 tracker 列表并添加到配置文件中。此脚本还有更强大的功能，具体使用方法详见 tracker.md|
|dht.dat dht6.dat|DHT 文件。提升 BT 下载率和下载速度的关键之一。相关科普：[《解决 Aria2 无法下载磁力链接、BT种子和速度慢的问题》](https://p3terx.com/archives/solved-aria2-cant-download-magnetic-link-bt-seed-and-slow-speed.html)|

## 更改tracker

如果觉得自动更新的tracker不行，想自己手动更新，先确保`./aria2.sh`里面的`自动更新 BT-Tracker`是关闭的

https://tk.sleele.com/

可以前往这个地址获取aria2格式的BT-Trackers，包含精选和数量最多等多种选择，tracker的选择自行斟酌测试，不同环境各不相同

然后在 Aria2Ng 的链接页面内，黏贴上要添加的tracker

或者去 https://github.com/XIU2/TrackersListCollection 也可获取trackers（每8小时更新）

## Rclone转存

Aria2 有一个配置项 [on-download-complete](https://aria2.github.io/manual/en/html/aria2c.html#cmdoption-on-download-complete)，即在下载完后执行一个脚本或命令。当下载完成后 Aria2 会给脚本传递分别为 `GID` 、`文件数量`、`文件路径`的 3 个变量。利用这个配置项和这些变量就可以实现诸如下载完成后调用 Rclone 进行上传的操作。

也就是说Aria2下载到VPS本地存储空间，然后通过rclone将文件上传到云盘并自动删除下载产生的本地文件

这也就是离线下载的原理和过程

### VPS

[免费和便宜VPS推荐](/2021/03/22/freevps/)

### 安装Aria2

前面已经安装了的可以忽略

```
wget -N git.io/aria2.sh && chmod +x aria2.sh && ./aria2.sh
```

输入数字1并回车进行安装，记录下aria2相关信息

### 安装rclone

rclone官方给出了一键安装脚本，真好！

```
curl https://rclone.org/install.sh | sudo bash
```

安装完成后输入 `rclone config` 进入云盘挂载配置界面

### 云盘挂载

主要也就是连接OneDrive和Google drive所以只以这俩为例

#### Rclone连接OneDrive

获取 token 需要在本地获取

本地下载rclone https://rclone.org/downloads/

一般选 Windows 64Bit

下载完解压并进入文件夹

在当前目录的资源管理器地址栏输入cmd，即为在当前目录打开cmd

输入

```
rclone authorize "onedrive"
```

弹出浏览器并登录对应账号，授权完成后cmd窗口会出现access_token，复制并保存好，

如 `{"access_token":"超长一串"}` （注意!复制{xxxxxxxx}整个内容）

然后linux服务器里输入

```
rclone config
```

!! 因为 RCLONE 会时不时进行更新，当你看到这篇教程时菜单选项可能已经发生了略微的改动，但大致思路不会变，不要无脑照搬操作 !!


```
e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> n  # 选择n，新建
name> P3TERX   # 输入名称，类似于标签，用于区分不同的网盘。
Type of storage to configure.
Enter a string value. Press Enter for the default ("").
Choose a number from below, or type in your own value
 1 / A stackable unification remote, which can appear to merge the contents of several remotes
   \ "union"
 2 / Alias for a existing remote
   \ "alias"
 3 / Amazon Drive
   \ "amazon cloud drive"
 4 / Amazon S3 Compliant Storage Providers (AWS, Ceph, Dreamhost, IBM COS, Minio)
   \ "s3"
 5 / Backblaze B2
   \ "b2"
 6 / Box
   \ "box"
 7 / Cache a remote
   \ "cache"
 8 / Dropbox
   \ "dropbox"
 9 / Encrypt/Decrypt a remote
   \ "crypt"
10 / FTP Connection
   \ "ftp"
11 / Google Cloud Storage (this is not Google Drive)
   \ "google cloud storage"
12 / Google Drive
   \ "drive"
13 / Hubic
   \ "hubic"
14 / JottaCloud
   \ "jottacloud"
15 / Local Disk
   \ "local"
16 / Mega
   \ "mega"
17 / Microsoft Azure Blob Storage
   \ "azureblob"
18 / Microsoft OneDrive
   \ "onedrive"
19 / OpenDrive
   \ "opendrive"
20 / Openstack Swift (Rackspace Cloud Files, Memset Memstore, OVH)
   \ "swift"
21 / Pcloud
   \ "pcloud"
22 / QingCloud Object Storage
   \ "qingstor"
23 / SSH/SFTP Connection
   \ "sftp"
24 / Webdav
   \ "webdav"
25 / Yandex Disk
   \ "yandex"
26 / http Connection
   \ "http"
Storage> 18  # 选择18，Microsoft OneDrive
** See help for onedrive backend at: https://rclone.org/onedrive/ **

Microsoft App Client Id
Leave blank normally.
Enter a string value. Press Enter for the default ("").
client_id>   # 留空，回车
Microsoft App Client Secret
Leave blank normally.
Enter a string value. Press Enter for the default ("").
client_secret>   # 留空，回车
Edit advanced config? (y/n)
y) Yes
n) No
y/n> n  # 选n
Remote config
Use auto config?
 * Say Y if not sure
 * Say N if you are working on a remote or headless machine
y) Yes
n) No
y/n> n  # 选n
For this to work, you will need rclone available on a machine that has a web browser available.
Execute the following on your machine:
    rclone authorize "onedrive"
Then paste the result below:
result> {"XXXXXXXX"}  # 上面保存的token复制到这里
2018/10/31 19:54:06 ERROR : Failed to save new token in config file: section 'P3TERX' not found
Choose a number from below, or type in an existing value
 1 / OneDrive Personal or Business
   \ "onedrive"
 2 / Root Sharepoint site
   \ "sharepoint"
 3 / Type in driveID
   \ "driveid"
 4 / Type in SiteID
   \ "siteid"
 5 / Search a Sharepoint site
   \ "search"
Your choice> 1  # 这里问你要选择的类型，选1
Found 1 drives, please select the one you want to use:
0: OneDrive (business)
Chose drive to use:> 0  # 程序找到网盘，这里编号是0，就选择0
Found drive 'root' of type 'business', URL: https://xxxxxx-my.sharepoint.com/personal/xxxxxxx/Documents
Is that okay?
y) Yes
n) No
y/n> y  # 选y
--------------------
[P3TERX]
type = onedrive
token = {"XXXXXXXX"}
drive_id = XXXXXXXXX
drive_type = business
--------------------
y) Yes this is OK
e) Edit this remote
d) Delete this remote
y/e/d> y  # 选y
Current remotes:

Name                 Type
====                 ====
P3TERX               onedrive

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> q  # 选q，退出
```


#### Google Drive

gd不用本地授权，挺好的，直接配置过程中授权即可

同样的

```
rclone config
```

!! 因为 RCLONE 会时不时进行更新，当你看到这篇教程时菜单选项可能已经发生了略微的改动，但大致思路不会变，不要无脑照搬操作 !!


```
e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> n  # 选择n，新建
name> Google  # 输入名称，类似于标签，用于区分不同的网盘。
Type of storage to configure.
Enter a string value. Press Enter for the default ("").
Choose a number from below, or type in your own value
 1 / A stackable unification remote, which can appear to merge the contents of several remotes
   \ "union"
 2 / Alias for a existing remote
   \ "alias"
 3 / Amazon Drive
   \ "amazon cloud drive"
 4 / Amazon S3 Compliant Storage Providers (AWS, Ceph, Dreamhost, IBM COS, Minio)
   \ "s3"
 5 / Backblaze B2
   \ "b2"
 6 / Box
   \ "box"
 7 / Cache a remote
   \ "cache"
 8 / Dropbox
   \ "dropbox"
 9 / Encrypt/Decrypt a remote
   \ "crypt"
10 / FTP Connection
   \ "ftp"
11 / Google Cloud Storage (this is not Google Drive)
   \ "google cloud storage"
12 / Google Drive
   \ "drive"
13 / Hubic
   \ "hubic"
14 / JottaCloud
   \ "jottacloud"
15 / Local Disk
   \ "local"
16 / Mega
   \ "mega"
17 / Microsoft Azure Blob Storage
   \ "azureblob"
18 / Microsoft OneDrive
   \ "onedrive"
19 / OpenDrive
   \ "opendrive"
20 / Openstack Swift (Rackspace Cloud Files, Memset Memstore, OVH)
   \ "swift"
21 / Pcloud
   \ "pcloud"
22 / QingCloud Object Storage
   \ "qingstor"
23 / SSH/SFTP Connection
   \ "sftp"
24 / Webdav
   \ "webdav"
25 / Yandex Disk
   \ "yandex"
26 / http Connection
   \ "http"
Storage> 12  # 选择12，Google Drive
** See help for drive backend at: https://rclone.org/drive/ **

Google Application Client Id
Leave blank normally.
Enter a string value. Press Enter for the default ("").
client_id>  # 留空，回车
Google Application Client Secret
Leave blank normally.
Enter a string value. Press Enter for the default ("").
client_secret>  # 留空，回车
Scope that rclone should use when requesting access from drive.
Enter a string value. Press Enter for the default ("").
Choose a number from below, or type in your own value
 1 / Full access all files, excluding Application Data Folder.
   \ "drive"
 2 / Read-only access to file metadata and file contents.
   \ "drive.readonly"
   / Access to files created by rclone only.
 3 | These are visible in the drive website.
   | File authorization is revoked when the user deauthorizes the app.
   \ "drive.file"
   / Allows read and write access to the Application Data folder.
 4 | This is not visible in the drive website.
   \ "drive.appfolder"
   / Allows read-only access to file metadata but
 5 | does not allow any access to read or download file content.
   \ "drive.metadata.readonly"
scope> 1
ID of the root folder
Leave blank normally.
Fill in to access "Computers" folders. (see docs).
Enter a string value. Press Enter for the default ("").
root_folder_id>  # 留空，回车
Service Account Credentials JSON file path
Leave blank normally.
Needed only if you want use SA instead of interactive login.
Enter a string value. Press Enter for the default ("").
service_account_file>
Edit advanced config? (y/n)
y) Yes
n) No
y/n> n
Remote config
Use auto config?
 * Say Y if not sure
 * Say N if you are working on a remote or headless machine or Y didn't work
y) Yes
n) No
y/n> n
If your browser doesn't open automatically go to the following link: https://accounts.google.com/o/oauth2/auth?access_type=offline&client_id=XXXXXXXXXXX.apps.googleusercontent.com&redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive&state=XXXXXXXXXXXXXXXXXXXX
Log in and authorize rclone for access  # 会弹出浏览器，要求你登录账号进行授权。如果没有弹出，复制上面的链接到浏览器中打开进行授权。
Enter verification code>  # 在这里输入网页上显示的验证码

Configure this as a team drive?
y) Yes
n) No
y/n> y
Fetching team drive list...
No team drives found in your account--------------------
[Google]
type = drive
scope = drive
token = {"access_token":"XXXXXXXXXXXXXXXXXXXXX"}
--------------------
y) Yes this is OK
e) Edit this remote
d) Delete this remote
y/e/d> y
Current remotes:

Name                 Type
====                 ====
Google               drive
P3TERX               onedrive

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> q
```



### 配置自动上传（重要）

aria2默认不会上传的，所以要手动开启下

```
nano /root/.aria2c/aria2.conf
# 或者用vi等你喜欢的文字编辑器
```

找到 `下载完成后执行的命令`，把`clean.sh`替换为`upload.sh`

```
# 下载完成后执行的命令
on-download-complete=/root/.aria2c/upload.sh
```

nano编辑器保存当前文件为 `Ctrl+o`，退出nano界面为`Ctrl+x` （或直接退出，会询问你是否保存，回复y）

输入`nano /root/.aria2c/script.conf`打开附加功能脚本配置文件进行修改

有中文注释，按照自己的实际情况进行修改，第一次使用只建议修改网盘名称。

```
# 网盘名称(RCLONE 配置时填写的 name)
drive-name=OneDrive
```

重启aria2

```
service aria2 restart
```

#### 检查配置是否成功

执行 `upload.sh` 脚本，提示success即代上传脚本能正常被调用，否则请检查与 RCLONE 有关的配置。

```
/root/.aria2c/upload.sh
```

打开实时日志并下载任意文件，出现上传成功信息即代表配置成功，否则请认真阅读教程并重新开始。
检查网盘是否存在相关文件，若不存在说明你搞错网盘了。

> 参考，引用自 P3TREX https://p3terx.com/archives/aria2_perfect_config.html
> https://p3terx.com/archives/offline-download-of-onedrive-gdrive.html
> https://github.com/P3TERX/aria2.sh