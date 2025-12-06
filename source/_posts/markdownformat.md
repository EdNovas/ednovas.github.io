---
title: Markdown基础
tags: [网站,博客,markdown,语言,代码]
id: '1159'
categories:
  - - 编程
date: 2021-01-21 19:22:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.sspai.com/2018/07/24/088eaabe3a61a2bb4b57739a5b744636.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708/interlace/1
#highlight_shrink: true
---
## 标题

在Markdown中总共有6个标题，我们分别把它们称为：一级标题、二级标题、三级标题、四级标题、五级标题和六级标题。其中六级标题最小，一级标题最大。
```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```
代码格式：
![](https://cdn.sspai.com/2018/07/24/8628e85fdf0d4a0ce25e1a6c91c7ddfb.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)


## 换行
在Markdown之中我们会发现文字无法换行，始终集中在一行之中。这时如果需要换行那么该怎么办呢？
在这里我们可以使用“换行标签”（</br>）。
```
上段文字
</br>
下段文字
```
Ps:在一些Markdown编辑器中，如：网易云笔记的Markdown编辑器中空格+换行键(Enter)，也可以实现换行功能。
![](https://cdn.sspai.com/2018/07/24/8628e85fdf0d4a0ce25e1a6c91c7ddfb.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

## 注释
其实Markdown可以不用注释的，但如果想在Markdown使用注释，其实也是很简单的。代码如下：
```
[瞎写个]:这里写注释
```
代码格式：[xx]:注释内容
你只需要在大括号[]内瞎写一些内容，再加上你要写的注释内容即可。

## 分割线
分割线在我们写文章或笔记的时候是一个不可缺少的内容，它可以清楚的将文章分成不同的层次。在Markdown中分割线代码如下：
```
看
***
分割线
```

代码格式：***
***

## 引用
在我们想要引用一句话的时候，我们在Markdown中使用如下代码：
```
>引用话语
```
代码格式：>引用的内容

![](https://cdn.sspai.com/2018/07/24/74540c9caafe524bb90f5fd81ae27498.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

## 文字样式
在Markdown中有：斜体、加粗、高亮、划线。这些文字样式供我们选择，代码如下：
```
*斜体*
</br>
**加粗**
</br>
==高亮==
</br>
~~划线~~
```
![](https://cdn.sspai.com/2018/07/24/0afdf2cc99c52ba0a3364fc4bb228382.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)
但如果我们想修改文字大小/颜色/字体，就要用font标签，代码如下：
```
<font color=#2196F3 size=2 face="宋体">宋体大小为2的字</font>
```
color代表字体颜色（要用16进制颜色值），size代表文字大小，face代表字体

![](https://cdn.sspai.com/2018/07/24/0ee2035b4029ea380c587d3b045efc82.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

最后我们来实现“文字居中”就要center标签，代码如下：
```
<center>居中</center>
```

![](https://cdn.sspai.com/2018/07/24/17a9441e58780a2e6011048a6c80deb4.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

Ps：center和font都是html的标签，在markdown也能用

## 代码高亮
在Markdown中如果我们想要高亮一段代码，可以使用如下代码：
````
```key
  代码
```
````

![](https://cdn.sspai.com/2018/07/24/cb9d85f24e0eceb7d37fb857d7028434.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)
代码格式就是上面的，当然key要换成自己需要的编程语言，以下是编程语言对应的key

|language|key|
|:----|:----|
|1C|1c|
|ActionScript|actionscript|
|Apache|apache|
|AppleScript|applescript|
|AsciiDoc|asciidoc|
|AspectJ|asciidoc|
|AutoHotkey|autohotkey|
|AVR Assembler|avrasm|
|Axapta|axapta|
|Bash|bash|
|BrainFuck|brainfuck|
|Cap’n Proto|capnproto|
|Clojure REPL|clojure|
|Clojure|clojure|
|CMake|cmake|
|CoffeeScript|coffeescript|
|C++|cpp|
|C#|cs|
|CSS|css|
|D|d|
|Dart|d|
|Delphi|delphi|
|Diff|diff|
|Django|django|
|DOS.bat|dos|
|Dust|dust|
|Elixir|elixir|
|ERB(Embedded Ruby)|erb|
|Erlang REPL|erlang-repl|
|Erlang|erlang|
|FIX|fix|
|F#|fsharp|
|G-code(ISO 6983)|gcode|
|Gherkin|gherkin|
|GLSL|glsl|
|Go|go|
|Gradle|gradle|
|Groovy|groovy|
|Haml|haml|
|Handlebars|handlebars|
|Haskell|haskell|
|Haxe|haxe|
|HTML|html|
|HTTP|http|
|Ini file|ini|
|Java|java|
|JavaScript|javascript|
|JSON|json|
|Lasso|lasso|
|Less|less|
|Lisp|lisp|
|LiveCode|livecodeserver|
|LiveScript|livescript|
|Lua|lua|
|Makefile|makefile|
|Markdown|markdown|
|Mathematica|mathematica|
|Matlab|matlab|
|MEL (Maya Embedded Language)|mel|
|Mercury|mercury|
|Mizar|mizar|
|Monkey|monkey|
|Nginx|nginx|
|Nimrod|nimrod|
|Nix|nix|
|NSIS|nsis|
|Objective C|objectivec|
|OCaml|ocaml|
|Oxygene|oxygene|
|Parser 3|parser3|
|Perl|perl|
|PHP|php|
|PowerShell|powershell|
|Processing|processing|
|Python’s profiler output|profile|
|Protocol Buffers|protobuf|
|Puppet|puppet|
|Python|python|
|Q|q|
|R|r|
|RenderMan RIB|rib|
|Roboconf|roboconf|
|RenderMan RSL|rsl|
|Ruby|ruby|
|Oracle Rules Language|ruleslanguage|
|Rust|rust|
|Scala|scala|
|Scheme|scheme|
|Scilab|scilab|
|SCSS|scss|
|Smali|smali|
|SmallTalk|smalltalk|
|SML|sml|
|SQL|sql|
|Stata|stata|
|STEP Part21(ISO 10303-21)|step21|
|Stylus|stylus|
|Swift|swift|
|Tcl|tcl|
|Tex|tex|
|text|text/plain|
|Thrift|thrift|
|Twig|twig|
|TypeScript|typescript|
|Vala|vala|
|VB.NET|vbnet|
|VBScript in HTML|vbscript-html|
|VBScript|vbscript|
|Verilog|verilog|
|VHDL|vhdl|
|Vim Script|vim|
|Intel x86 Assembly|x86asm|
|XL|xl|
|XML|xml|
|YAML|yml|

## 列表
在Markdown中我们可以绘制列表，代码格式如下：
```
- 列表1
  - 列表1.1
  - 列表1.2
```

![](https://cdn.sspai.com/2018/07/24/32cf90780a63fe0f39df1977a815ecfa.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

## 代办事项
在Markdown中你可以输入你最近的代办事项，代码格式如下：
```
- [ ] 未完成事项
- [x] 已完成事项
```
Ps：带x的代表已经完成的事项，空格的为还没有完成的事项

![](https://cdn.sspai.com/2018/07/24/5d2ba9a200984124a40b49ab5a47ba57.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)


## 链接以及图片
在Markdown中添加链接和图片有异曲同工之妙，所以我们放在一起来讲，代码如下：
```
[少数派](https://sspai.com/)
![logo](https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2634294714,2265844648&fm=58&s=4EE6885691B0CD92947DB9F002005035&bpow=121&bpoh=75)
```
代码格式(链接)：[显示名称]（链接）

代码格式(图片)：[名称]（图片链接）

![](https://cdn.sspai.com/2018/07/24/6c55e484d1a8328e5e6c7411431726d3.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)


## 表格
在Markdown中我们同样可以绘制表格，代码格式如下：
```
大标题1|大标题2|大标题3
---|---|---
内容1|内容2|内容3
内容1|内容2|内容3
```
Ps：第二行中---|---|---是由几个大标题写几个，这里是三个所以写成---|---|---，如果是两个就是---|---，四个就是---|---|---|---

![](https://cdn.sspai.com/2018/07/24/bb37cc35b07fad9e74e9f9d2f2b71442.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)


## 流程图
在Markdown中我们可以用流程图（类似于：树状图），来明确信息之间的关系。

### 流程图基础
我们先来看一下简单的流程图代码：
````
```
graph LR
A-->B
```

```
graph LR
A---B
```

```
graph LR
A[A]---|插入文本|B[B]
X-->|插入文本|Y
```
````

我们来看一下显示效果
![](https://cdn.sspai.com/2018/07/24/96804fdcb94c53c8fdf0931c90698cc1.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)


其中大体格式如下：
````
```
graph xx
yy
```
````
xx可以是TB/BT/RL/LR，他们代表：从上至下/从下至上/从右至左/从左至右

yy可以是A-->B/A---B，第一个是带箭头的（上图1），第二个是不带箭头的（上图2）

如果我们在A-->B/A---B想像上图3,4一样添加文字怎么办呢？我们可以这么写：A-->|插入文本|B

### 流程图进阶
流程图中的图形有：圆形、矩形和菱形。那么使用他们的代码如下：
````
```
graph TB
A((圆))
```

```
graph TB
A[长方形]
```

```
graph TB
A{菱形}
```
````
从上图中我们可以看出：圆形(())、长方形[]、菱形{}

至于每个前面的A，大家可以换成自己想写的文字，它最后是不会显示出来的。

![](https://cdn.sspai.com/2018/07/24/47e404b0d375f7b53031978aa534bbd5.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

### 流程图实战
接下来我们来做个简单的流程图，代码如下：
````
```
graph TB
A[1]-->B[2]
B-->X
B-->|插入文本|Y
B-->Z
```
````
![](https://cdn.sspai.com/2018/07/24/51eb90c9369cc117d26257102eb4d3c5.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)


## 甘特图
甘特图能够将你最近的计划直观地显示出来，对我们的计划安排很有用。我们来看下代码：
````
```
gantt
dateFormat YYYY-MM-DD
title 计划
section 计划1
分班考: 2018-07-21, 4d
section 计划2
吉他: 2018-07-23, 10d
section 计划3
电子琴: 2018-07-21, 10d
```
````
上面是我用甘特图做的最近几天的计划。效果如下：
![](https://cdn.sspai.com/2018/07/24/50f4d0d887f8810b0ea7a26b72766293.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)

红线代表现在是时间，从中我们们可以看出我“现在正在做的事情”和“即将完成/结束的事情”。

代码格式如下：
````
```
gantt
dateFormat YYYY-MM-DD
title 大标题
section 横向计划1
计划详细名称: 日期(如:2018-07-21), 时长(如:4d)
section 横向计划2
吉他: 日期(2018-07-23), 时长(10d)
```
````
我在这说明一个注意点：

dateFormat YYYY-MM-DD  说明日期的格式是：年-月-日，我们在写日期的时候也必须按照这些规矩，必须写成如：2018-07-24这样，不能写成2018年07月24日/2018-7-24。

>转载自 Daydreams https://sspai.com/post/45816