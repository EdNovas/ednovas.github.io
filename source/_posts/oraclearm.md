---
title: 使用脚本自动抢Oracle ARM服务器，并使用tg机器人通知
tags: [VPS]
categories:
  - - VPS
date: 2021-11-28 13:09:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/blog_post_20.webp
---

> 转载自HM的博客 https://him.plus/archives/274


<div class="post-content" id="post_content">
		<h3 id="header-id-1">需要用到的</h3>
<ul>
<li>一台vps服务器</li>
<li>Terraform</li>
<li>oci-cli<br>
<h4 id="header-id-2">一、安装Terraform</h4>
</li>
</ul>
```
wget https://releases.hashicorp.com/terraform/0.15.5/terraform_0.15.5_linux_amd64.zip
```

<p><strong>解压，并移动文件terraform到/usr/bin目录</strong></p>

```
unzip terraform_0.15.5_linux_amd64.zip
mv terraform /usr/bin
```

<p><strong>使用以下命令查看版本</strong></p>
```
terraform version
```

<p><strong>显示如下则安装成功</strong><br>
</p><div class="fancybox-wrapper" data-fancybox="post-images" href="https://him.plus/wp-content/uploads/2021/06/image-1623394981402.png"><img class="lazyload lazyload-style-2 lazyload-loaded" src="https://him.plus/wp-content/uploads/2021/06/image-1623394981402.png" data-original="https://him.plus/wp-content/uploads/2021/06/image-1623394981402.png" alt="file" title="%title插图%num" style=""></div><p></p>
<h4 id="header-id-3">二、安装oci-cli工具</h4>
<p><strong>使用以下命令安装oci-cli工具</strong></p>
```
bash -c "$(curl –L https://raw.githubusercontent.com/oracle/oci-cli/master/scripts/install/install.sh)"
```

<p><strong>一直回车即可</strong><br>
<strong>当出现:</strong><br>
</p><div class="fancybox-wrapper" data-fancybox="post-images" href="https://him.plus/wp-content/uploads/2021/06/image-1623395540213.png"><img class="lazyload lazyload-style-2 lazyload-loaded" src="https://him.plus/wp-content/uploads/2021/06/image-1623395540213.png" data-original="https://him.plus/wp-content/uploads/2021/06/image-1623395540213.png" alt="file" title="%title插图%num" style=""></div><br>
<strong>这个时候，是在提示你输入y回车，会自动添加环境变量<br>
之后又是一直回车。出现如下提示表示安装成功。可以用：<code>oci -v</code>  查询版本</strong><br>
<div class="fancybox-wrapper" data-fancybox="post-images" href="https://him.plus/wp-content/uploads/2021/06/image-1623395572528.png"><img class="lazyload lazyload-style-2 lazyload-loaded" src="https://him.plus/wp-content/uploads/2021/06/image-1623395572528.png" data-original="https://him.plus/wp-content/uploads/2021/06/image-1623395572528.png" alt="file" title="%title插图%num" style=""></div><p></p>
<h4 id="header-id-4">三、复制用户和租户的ocid</h4>
<p><strong>甲骨文后台右上角—用户设置—点击用户以及租户，在信息栏中有我们需要的ID，分别点击复制，可以保存在记事本备份好</strong><br>
</p><div class="fancybox-wrapper" data-fancybox="post-images" href="https://him.plus/wp-content/uploads/2021/06/image-1623395984815.png"><img class="lazyload lazyload-style-2 lazyload-loaded" src="https://him.plus/wp-content/uploads/2021/06/image-1623395984815.png" data-original="https://him.plus/wp-content/uploads/2021/06/image-1623395984815.png" alt="file" title="%title插图%num" style=""></div><br>
<div class="fancybox-wrapper" data-fancybox="post-images" href="https://him.plus/wp-content/uploads/2021/06/image-1623396103425.png"><img class="lazyload lazyload-style-2 lazyload-loaded" src="https://him.plus/wp-content/uploads/2021/06/image-1623396103425.png" data-original="https://him.plus/wp-content/uploads/2021/06/image-1623396103425.png" alt="file" title="%title插图%num" style=""></div><p></p>
<h4 id="header-id-5">四、配置cli</h4>
<p><strong>输入如下代码开始配置，配置的路径默认在root目录</strong></p>
```
oci setup config
```

<p><strong>具体配置看下面</strong></p>

```
Enter a location for your config [/root/.oci/config]: 
Enter a user OCID: #输入你的用户OCID
Enter a tenancy OCID: #输入你的租户OCID
Enter a region by index or name(e.g.
1: ap-chiyoda-1, 2: ap-chuncheon-1, 3: ap-hyderabad-1, 4: ap-melbourne-1, 5: ap-mumbai-1,
6: ap-osaka-1, 7: ap-seoul-1, 8: ap-sydney-1, 9: ap-tokyo-1, 10: ca-montreal-1,
11: ca-toronto-1, 12: eu-amsterdam-1, 13: eu-frankfurt-1, 14: eu-zurich-1, 15: me-dubai-1,
16: me-jeddah-1, 17: sa-santiago-1, 18: sa-saopaulo-1, 19: uk-cardiff-1, 20: uk-gov-cardiff-1,
21: uk-gov-london-1, 22: uk-london-1, 23: us-ashburn-1, 24: us-gov-ashburn-1, 25: us-gov-chicago-1,
26: us-gov-phoenix-1, 27: us-langley-1, 28: us-luke-1, 29: us-phoenix-1, 30: us-sanjose-1): 9  #这里选择你的区域
Do you want to generate a new API Signing RSA key pair? (If you decline you will be asked to supply the path to an existing key.) [Y/n]: y  #输入y生成公钥
Enter a directory for your keys to be created [/root/.oci]: 
Enter a name for your key [oci_api_key]: 
Public key written to: /root/.oci/oci_api_key_public.pem
Enter a passphrase for your private key (empty for no passphrase): 
Private key written to: /root/.oci/oci_api_key.pem
Fingerprint: 
Config written to /root/.oci/config
 
    If you haven't already uploaded your API Signing public key through the
    console, follow the instructions on the page linked below in the section
    'How to upload the public key':
 
   https://docs.cloud.oracle.com/Content/API/Concepts/apisigningkey.htm#How2
```


<p><strong>复制生成的公钥，使用以下命令获取公钥</strong></p>

```
cat /root/.oci/oci_api_key_public.pem
```


<p>把显示出来的内容复制,并且添加到<br>
甲骨文后台—用户设置—资源—API秘钥—添加API秘钥<br>

![](https://him.plus/wp-content/uploads/2021/06/image-1623396703012.png)

```
oci iam availability-domain list
```


<p><strong>提示以下内容则是配置正确</strong><br></p>


![](https://him.plus/wp-content/uploads/2021/06/image-1623396861886.png)


<h4 id="header-id-6">五、Terraform环境初始化</h4>
<h5 id="header-id-7">1、我们先获取甲骨文的Terraform脚本</h5>
<p><strong>点击 创建VM实例</strong><br>
</p>

![](https://him.plus/wp-content/uploads/2021/06/image-1623397006677.png)


![](https://him.plus/wp-content/uploads/2021/06/image-1623397155148.png)

![](https://him.plus/wp-content/uploads/2021/06/image-1623397237969.png)

<strong>一直下一步</strong><br>


![](https://him.plus/wp-content/uploads/2021/06/image-1623397917222.png)


![](https://him.plus/wp-content/uploads/2021/06/image-1623397993340.png)


![](https://him.plus/wp-content/uploads/2021/06/image-1623398056711.png)


<h5 id="header-id-8">2、配置Terraform</h5>
<p><strong>使用以下命令创建Terraform运行目录</strong></p>

```
cd /opt/
mkdir terraform-learning && cd terraform-learning
```



<p><strong>将刚刚解压到桌面的main.tf文件 上传到这个目录</strong><br>
</p>


![](https://him.plus/wp-content/uploads/2021/06/image-1623398566301.png)


<strong>将目录设置为Terraform运行目录</strong><p></p>

```
terraform init
```

<p><strong>以上完成后，开始创建任务，用命令：（注意还是在/opt/terraform-learning）</strong></p>

```
terraform apply
```

<p><strong>执行完上面命令之后，会提示输入yes</strong><br>

</p>

![](https://him.plus/wp-content/uploads/2021/06/image-1623398738195.png)

<strong>上图还能看到API返回Error Message: Out of host capacity,提示主机容量不足，下面就用脚本来不停刷就行了</strong><p></p>
<h4 id="header-id-9">六、部署脚本</h4>
<p><strong>终于可以部署脚本来抢服务器了，请先获取telegram账号id，并且关注通知机器人@oracle_message_bot<br>
TG id请通过@userinfobot机器人获取<br>
在root目录下新建一个terraform.sh</strong></p>

```
cd /root
vi terraform.sh
```

<p><strong>写入以下内容</strong></p>

```
#!/bin/bash
 
path='/opt/terraform-learning/'
FIND_FILE="/root/terraform.log" #日志文件位置
FIND_STR="Apply complete!"
cd $path &&
while true
do
    echo 'yes' | terraform apply -lock=false
    sleep 1s
done
if [ grep -c "$FIND_STR" $FIND_FILE -ne '20' ];then
    curl --location --request POST 'https://api.telegram.org/bot2124631392:AAHtVpEm7KRWo6ulYNG_Zbz98irpmTSIf8o/sendMessage' \
--form 'text=服务器创建成功！' \
--form 'chat_id=你的tg id' \
--form 'parse_mode=markdown'
pkill terraform
    exit 0
fi
```


<p><strong>给Shell脚本赋予执行权限：</strong></p>

```
chmod +x terraform.sh
```


<p><strong>使用以下命令后台执行脚本</strong></p>

```
nohup ./terraform.sh >> terraform.log 2>&1  &
```

<h5 id="header-id-10">如何结束脚本？</h5>
<p><strong>使用以下命令结束脚本</strong></p>

```
pkill terraform
```


> 转载自HM的博客 https://him.plus/archives/274