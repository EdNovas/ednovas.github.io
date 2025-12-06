---
title: Python Day 2
tags: []
id: '1030'
categories:
  - - 编程
date: 2020-12-26 17:16:30
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/heybox/day1/V1.webp
---

IDE的话，看每个人的个人选择，wing不是最好的ide但是我学的是这个啦，很多老哥推荐pycharm，那个ide也很推荐哦

## 变量赋值

变量是存储在内存中的一个值，就类似于数学中 x = 1一样，然后可以把x带入到各种复杂的式子里。不过python中的这个变量可以指定不同的数据类型：int、float、str 分别代表整数，浮点数（小数）和字符串。

如下图，给变量w赋予了3个不同的值，分别是integer：5，float：5.5，string：‘string’。简写int，float，str。至于这三个数据类型分别是什么意思很好理解。

int：整数。-10，-100，-1，0，2，10，9999这些都是属于int

float：浮点数。-1.23，-1.00，-1.01，0.00，2.23，0.13这些都是属于浮点数，基本上带个小数点的就是float

str：字符串。这个就是文字信息，基本上任何你能想到的文字信息都是字符串，当然也包括数字。只要把文字信息用引号框起来了，那么他就是字符串了。比如‘string’，‘啥’，‘2’，‘3.45’，这些都是str。

![](https://cdn.max-c.com/heybox/dailynews/img/135220d8682fe90a9ca327393ae04ee1.png)

而如上w=5,这就是一个赋值过程，让w这个变量等于5了。但是要注意一点，如果给同一变量多次赋值，他会更新赋值内容。比如上图给w赋值了三个不同的内容，那么输出是什么呢？我们可以输入w然后按回车看这个变量值是什么。

![](https://cdn.max-c.com/heybox/dailynews/img/4300facb789d6e02193e5385d80e5bb5.png)

可以看到他的值是最后一个‘string’而不是前面两个，这就是因为这个变量已经更新过了。

你还可以让多个变量都等于同一个值，如下

![](https://cdn.max-c.com/heybox/dailynews/img/dad327096ddc2b9d550aed76f25fd11f.png)

可以看到x、y、z都被赋予了1这个值。

通过赋值，我们可以更方便的用一个字母或者单词来代表一堆复杂的东西，增加代码的逻辑性和可读性。

## 变量命名规则

1\. 变量不能是一个python的专用keyword。比如try等，判别方法是：变量颜色为白色即为正常（不同ide和同ide不同主题字体颜色可能不同）

2\. 不能包含空格

3\. 首字母必须是小写字母或者下划线

4\. 首字母之后可以用字母、数字或下划线

5\. 变量名称区分大小写

6\. 变量名称最好能反映他代表什么含义

7\. 多词可以用下划线分割，如my\_variable = ‘hello’，square\_area = 45.9

## 运算

python的运算方式和键盘输入差不多，+代表加，-代表相减，/代表除法，\*代表乘法，\*\*代表幂运算，//代表向下取整，%代表求余数。

通过一些加减的符号，我们可以进行一些运算。注意，int和float可以随意加减，但是str只能和str相加，不能相减或者和int/float相加，否则会如图报错显示TypeError。

![](https://cdn.max-c.com/heybox/dailynews/img/965c555e5e097fddffa393d0a2f4146f.png)

其他的运算也基本如此。为了更好的表示各种运算的结果，可以研究一下如下表格。int和int就是所有

![](https://cdn.max-c.com/heybox/dailynews/img/da485a2e3c739022784ad5364714ea0e.png)

如下是每个运算符号的例子（不包括str）

![](https://cdn.max-c.com/heybox/dailynews/img/758ce78e9dc0e5e78a3d206ae92b11bf.png)

str的乘法例子，前后调换str和int的顺序是无所谓的。

![](https://cdn.max-c.com/heybox/dailynews/img/90d30713ea2fec0975cd8706d0236f25.png)

至于运算顺序的话，和日常的运算顺序是一样的，先乘方、再乘除、最后再加减，有括号的先算括号。

此外，当我们想要表达连续的更新这个变量的值的时候，比如 x = x +5时，可以用 x += 5来表示，这样可以更清晰和明了，当然要是更习惯 x = x +5 这样也可以。这个多用于循环语句中。

![](https://cdn.max-c.com/heybox/dailynews/img/86e606027b5606cc84921987ce24630a.png)

## 小试身手

很好的检验自己的结果对不对的方法就是实践！自己可以在python shell里输入和测试结果哦！

1\. 如图，最后的b是float、int、str？

![](https://cdn.max-c.com/heybox/dailynews/img/6562fe5eba0df97914289a83023197fb.png)

2\. y是int、float、str？

![](https://cdn.max-c.com/heybox/dailynews/img/a2bc38995e487d35e86a6ca92bf73736.png)

3\. 6-12哪一行不会输出Error？

![](https://cdn.max-c.com/heybox/dailynews/img/cdc9e26de2b598e5f9b9fde3cf29c58c.png)

4\. 如图，会输出几？

![](https://cdn.max-c.com/heybox/dailynews/img/2ba9846119b8a6dfd2c33078ba165fc4.png)

5\. 以下1-7行哪一个是合法的变量名（多选）

![](https://cdn.max-c.com/heybox/dailynews/img/f6c73ff5b5d4d0bd586f3f17a7f9d4b2.png)

6\. 现在data的值等于什么

![](https://cdn.max-c.com/heybox/dailynews/img/eb012c92a585e9ab72779cf7b5721964.png)

## 小结

1\. int、float、str

2\. 变量命名

3\. 运算