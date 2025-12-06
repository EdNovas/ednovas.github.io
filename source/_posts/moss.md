---
title: 从摩尔斯电码到密码学
tags: [moss, password]
categories:
  - - 杂
date: 2022-06-25 13:09:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/PASSWORD-ft-IMAGE.png
---

# 起源

早期的密码学 目前已知最早的密码是大约公元前1900年的埃及古王国时期，用特殊的埃及象形文字雕刻在墓碑上。 但这些文字并不被认为是某种秘密通信的真正尝试，而是在增加神秘和阴谋气氛，甚至是为了给能看懂的观者提供乐趣。 这是密码学在其它用途上的应用，或者只是看上去是这样（如果这是某种密码的误导或伪装，那确实令人印象深刻）。

至于最有名的密码，也可以说是代码，肯定就是耳熟能详的莫斯电报码了。著名的 三短三长三短 的 SOS 求救信号应该无人不知无人不晓。

# Moss Code


摩尔斯电码（又译为摩斯密码，英语：Morse code）是一种时通时断的信号代码。通过不同的排列顺序来表达不同的英文字母、数字和标点符号。

是由美国人艾尔菲德·维尔与萨缪尔·摩尔斯在1836年发明。

摩尔斯电码是一种早期的数码化通信形式， 它依靠一系列的 点和划 来传递编码信息 ，它的代码包括五种：

1. 点（·）：1 （读 “滴” dit ，时间占据1t）

2. 划（—）：111 （读 “嗒” dah ，时间占据3t）

3. 字符内部的停顿（在点和划之间）：0 （时间占据1t）

4. 字符间停顿：000 （时间占据3t）

5. 单词间的停顿：0000000 （时间占据7t）

点的长度（也就是上面的时间长度t）决定了发报的速度


![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/72f082025aafa40f2b207369a264034f79f0199b.webp)


![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/morsecode-1.jpg)

## sos

求救信号 SOS（···---···）

1912年，著名的泰坦尼克号游轮首航遇险时，发送的是CQD（英国马可尼无线电公司决定用CQD作为 船舶遇难信号），但因 D（—··）易于其他字母混淆，周围船只并未意识到是求救信号，没有快速救援，在快沉没时才使用的 新求救信号SOS（···———···）发报。泰坦尼克号沉没后，SOS才被广泛接受和使用

事实上，虽然SOS信号在1906年即已制订，但英国的无线电操作员很少使用SOS信号，他们更喜欢老式的CQD遇难信号。

泰坦尼克号的无线电首席官员约翰·乔治·菲利普一直在发送CQD遇难信号，直到下级无线电操作员哈罗德·布莱德建议他：“发送SOS吧，这是新的调用信号，这也可能是你最后的机会来发送它了！”然后菲利普在传统的CQD求救信号中夹杂SOS信号。

求救信号直到第二天早上才被加州人号收到，因为她并没有24小时都监听无线电。


## 转换网站

http://www.jsons.cn/morse/

https://morsecode.world/international/translator.html

等等许多网站都可以快速转换 Moss Code

# Baudot Code

博多式电报机 (Baudot code) 是法国人埃米尔‧博多于1874年发明的“印字电报机”。主要特点是字符用5比特编码，采用两个字符集。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/12067578-5ad092acc57aa4c5.webp)

## 转换网站

https://cryptii.com/pipes/baudot

# 过渡

从电报，到历史上一些十分有名的密码，诸如凯撒密码等。


# 栅栏易位法(凯撒方阵)

即把将要传递的信息中的字母交替排成上下两行，再将下面一行字母排在上面一行的后边，从而形成一段密码。

例如密文：TEOGSDYUTAENNHLNETAMSHVAED

解密过程：先将密文分为两行

T E O G S D Y U T A E N N

H L N E T A M S H V A E D

再按上下上下的顺序组合成一句话

THE LONGEST DAY MUST HAVE AN END.

## 多栏

加密时不一定非用两栏，还是举《数字城堡》中的一个例子，密文为：

PFEE SESN RETM MFHA IRWE OOIG MEEN NRMA ENET SHAS DCNS IIAA IEER BRNK FBLE LODI

去掉空格：PFEESESNRETMMFHAIRWEOOIGMEENNRMAENETSHASDCNSIIAAIEERBRNKFBLELODI

共64个字符，以8个字符为一栏，排列成8*8的方阵(凯撒方阵)：

P F E E S E S N

R E T M M F H A

I R W E O O I G

M E E N N R M A

E N E T S H A S

D C N S I I A A

I E E R B R N K

F B L E L O D I

从上向下竖着读：PRIMEDIFFERENCEBETWEENELEMENTSRESMONSIBLEFORHIROSHIMAANDNAGASAKI

插入空格：PRIME DIFFERENCE BETWEEN ELEMENTS RESMONSIBLE FOR HIROSHIMA AND NAGASAKI (广岛和长崎的原子弹轰炸的最主要区别)

## 转换网站

https://cryptii.com/pipes/rail-fence-cipher

# 维吉尼亚密码

Vigenère cipher

维吉尼亚密码是一种简单的多表代换密码(由26个类似的Caesar密码的代换表组成)，

即由一些偏移量不同的恺撒密码组成，这些代换在一起组成了密钥。

英文中a~z，由0~25表示。

假设串长为m，明文为P，密文为C，密钥为K则

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-06-25_22-20-10.bmp)


也可以根据图1进行计算，如图。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/v2-994bb20eb908fe1ace76f14d5e93aea1_720w.jpg)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-06-25_22-20-39.bmp)

## 转换网站

https://cryptii.com/pipes/vigenere-cipher

# 恺撒移位密码（凯撒密码）


将字母表前移或者后错几位

明码表 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

密码表 Q W E R T Y U I O P A S D F G H J K L Z X C V B N M

明文 F O R E S T

密文 Y G K T L Z

只需重排密码表二十六个字母的顺序，允许密码表是明码表的任意一种重排，密钥就会增加到四千亿亿亿多种，我们就有超过4×1027种密码表。破解就变得很困难。

## 转换网站

https://cryptii.com/pipes/caesar-cipher

# 培根密码

Bacon Cipher

培根密码是弗朗西斯·培根在1605年设计的消息编码方式。培根密码将消息隐藏到文本的表现方式中，而不是文本的内容中。

为了对消息进行编码，需要将明文中的每个字母按照下方的编码表进行编码。明文中的每个字母都会转换成一组5个的a/b字母。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/BaconCipher-1.png)

除此之外，还有第二种编码表，与第一种编码表不同的是，在第二种编码表里I与J、U与V皆有不同编号。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/BaconCipher-2.png)

加密者需使用两种不同字体，分别代表A和B。准备好一篇包含相同AB字数的假信息后，按照密文格式化假信息，即依密文中每个字母是A还是B分别套用两种字体。

解密时，将上述方法倒转。所有字体一转回A，字体二转回B，以后再按上表拼回字母。

# 示例

使用培根密码加密单词：`civilizations`

首先根据对照表写出明文对应的AB字母：

```
AAABA ABAAA BABAB ABAAA ABABB ABAAA BBAAB AAAAA BAABB ABAAA ABBBA ABBAB BAABA
```

将B转换为小写:

```
AAAbA AbAAA bAbAb AbAAA AbAbb AbAAA bbAAb AAAAA bAAbb AbAAA AbbbA AbbAb bAAbA
```

此时任意选取一段英文句子，由于培根密码是1个字母对应5个字母（比方说A对应aaaaa）所以要求句子的字母总个数为明文个数的五倍，即所选句子要和上面AB字符串长度相同

例如明文：`civilizations`有13个字母，所以选取的句子为13*5=65个字母长度。

此时我们选取了句子（载体）：

```
my interest is in the future because i am going to spend the rest of my life ttere
```

再将AB字符串附加到句子上（呈现方式为大小写）：

```
MY InTErEST iS iN tHe FUTUrE beCaUSE i aM GoING TO sPEnd ThE RESt of MY liFe tTErE
```

在本例中，仅使用了大小写来表现培根密码中的A和B，其实我们也可以使用不同的字体，是否加粗来表现。

例如：

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/BaconCipher-3.png)

## 转换网站

https://cryptii.com/pipes/bacon-cipher

# 现代

时间到了近现代，在信息时代，我们更多的接触到了密码。各种进制的转换和键盘以及字母颠倒等新奇的密码出现了。

# 进制转换密码

这个就是比较简单的了

10011010010

一看就是二进制，转换为10进制就是1234了

然后还可以对应字母表中26个字母做进一步的密码转换。

## 转换网站

https://tool.oschina.net/hexconvert/

# 键盘密码

利用手机和电脑键盘的排列组合形成的密码

# 字母颠倒/镜像密码

比如 hep poo6 上下颠倒过来就是 good day

达芬奇终其一生每天都在做笔记，在去世后留下了大批未经整理的手稿，皆以个人独特的左手镜像反写字书写，难以解读。需要使用镜子照着来看。

# Base64

Base64（基底64）是一种基于64个可打印字符来表示二进制数据的表示方法。由于log2(64) = 6，所以每6个位元为一个单元，对应某个可打印字符。3个字节相当于24个位元，对应于4个Base64单元，即3个字节可由4个可打印字符来表示。在Base64中的可打印字符包括字母A-Z、a-z、数字0-9，这样共有62个字符，此外两个可打印符号在不同的系统中而不同。一些如uuencode的其他编码方法，和之后BinHex（英语：BinHex）的版本使用不同的64字符集来代表6个二进制数字，但是不被称为Base64。

Base64常用于在通常处理文本数据的场合，表示、传输、存储一些二进制数据，包括MIME的电子邮件及XML的一些复杂数据。

## 转换网站 

https://cryptii.com/pipes/text-to-base64

# ASCII

ASCII是基于拉丁字母的一套电脑编码系统。它主要用于显示现代英语，而其扩展版本延伸美国标准信息交换码则可以部分支持其他西欧语言，并等同于国际标准ISO/IEC 646。 美国信息交换标准代码是这套编码系统的传统命名，互联网号码分配局现在更倾向于使用它的新名字US-ASCII。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-06-25_22-45-12.bmp)

# 苏州码子

在BBC英剧《神探夏洛克》第一季第二集中出现过的 “苏州码子”（Suzhou numerals），又作“杭州码子”（Hangzhou misnomer）

苏州码子是种曾在民间流行一时在中国传统数字，产生于中国的苏州，由中国的算筹演变而来。因为苏州码子容易学习，书写便捷，一串数字能连笔写出，而且写法如同算珠，可以配合算盘使用，所以曾经广泛使用于商业中，在账簿和发票等均有使用。现在这种数字在中国大陆几近绝迹，但在港澳地区、台湾的街市、旧式茶餐厅及中药房偶而仍然可见。

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2022-06-25_22-05-48.bmp)

## 为何叫杭州码子？

苏州码子由Unicode3.0版本加入Unicode标准，当时被误解为杭州风格。Unicode中大多的“杭州”错误已经被修正，但是为了稳定，Unicode的方针不允许字符名称的改变，所以字符名称中的“杭州数字”也就将错就错了。字符名称被有些软件作为唯一标识符，修改会造成向后兼容问题。关于这个误命名的广泛性，甚至在英国广播公司于2010年出品的最新福尔摩斯改编剧《Sherlock》里都得以体现：苏州码子大量地以“杭州”这个名称作为本剧第一季第二集的关键线索穿插其间。

# 书本单词密码

在各种侦探电视剧中都可能会看到通过书本传输加密信息的片段。通过传递标记的页码和行数以及第几个单词，来传输信息。至于使用的哪本书籍，因为书的数量实在太多了，所以这种密码也是一种低成本但高效的方法，当然伪装就是多买几本书吧（笑）。

# 小结

密码是为了防止别人破译加密用的，所以只要说你能知道怎么加密和解密，并且让旁人看着云里雾里摸不清头脑，那么你就成功了。密码学不限于以上所说的这些，甚至有时候和朋友之间的梗也是一种密码，足以能让你和朋友会心一笑而旁人则一脸懵逼。可以说密码学渗透了我们的方方面面。我们输入的每个账号密码，卡的芯片，甚至和人之间的交流也是密码。

密码就在我们身边。

> https://zh.m.wikipedia.org/zh-hans/%E5%AF%86%E7%A0%81%E5%AD%A6%E5%8E%86%E5%8F%B2
> https://zhuanlan.zhihu.com/p/92781133
> https://en.wikipedia.org/wiki/Suzhou_numerals#Hangzhou_misnomer
> https://baike.baidu.com/item/%E5%87%AF%E6%92%92%E6%96%B9%E9%98%B5/5373130
> https://zhuanlan.zhihu.com/p/111611977
> https://cryptowikis.com/ClassicalCipher/Steganography/BaconCipher/