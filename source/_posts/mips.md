---
title: Assembly language 汇编语言基础
tags: [编程]
categories:
  - - 编程
date: 2021-09-23 16:51:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/49561-assembly-language.jpg
# highlight_shrink: true
sticky: 5
---

## 安装java环境

这个网上很多，就不再赘述了

基本思路：下载java jdk安装包，安装，添加到环境变量中，cmd测试java版本来判断是否安装成功

## 软件下载安装

MARS：

https://courses.missouristate.edu/KenVollmar/mars/download.htm

点击download mars下载jar文件后

下载下来了一个叫`Mars4_5.jar`的文件

cmd在jar文件包的目录输入

```
java -jar Mars4_5.jar
```

回车，等一会就开启MARS了

## Assembly Language


Assembly Language最大的特点就是基本思路不像python和java等一样的high level language一样的智能并且高效，他主要是能让机器识别的作用

机器指令都是由0，1组成的，汇编语言就允许我们用相应的代码来编写指令。

## MIPS

MIPS 汇编语言是指MIPS处理器的汇编语言，MIPS是指 an acronym for Microprocessor without Interlocked Pipeline Stages. 他是由一个名叫MIPS Technologies的组织开发的精简指令集架构

## 基础

要学习Assembly Language，就需要精通2进制，10进制，16进制的相互转换，这个会在另一篇文章中详细讲解的

还需要了解8bit, 32bit等

## Register 寄存器

- 在MIPS中有32个通用寄存器（Register）

- Register 都是由`$`符号开头的

- 寄存器一般直接用对应的编号表示，比如`$0`就是 `Register 1`， `$1`就是`Register 2`，一直到 `$32`(一共就32个通用寄存器) 或者直接用对应的寄存器名称，例如：`$t1`， `$sp`

- 对于乘法和除法分别有对应的两个寄存器`$lo`, `$hi`

  - 对于以上二者，不存在直接寻址；必须要通过`mfhi(“move from hi”)`以及`mflo(“move from lo”)`分别来进行访问对应的内容

  - 乘法：`HI` 存储32位高位， `LO`存储32位低位

  - 除法：`LO`存储结果，`HI`存储余数

- 栈的走向是从高地址到低地址

### 32个Register

|REGISTER|NAME|USAGE|
|:----|:----|:----|
|$0|$zero|常量0(constant value 0)|
|$1|$at|保留给汇编器(Reserved for assembler)|
|$2-$3|$v0 - $v1|函数调用返回值(values for results and expression evaluation)|
|$4-$7|$a0-$a3|函数调用参数(arguments)|
|$8-$15|$t0-$t7|暂时的(或随便用的)|
|$16-$23|$s0-$s7|保存的(或如果用，需要SAVE/RESTORE的)(saved)|
|$24-$25|$t8-$t9|暂时的(或随便用的)|
|$28|$gp|全局指针(Global Pointer)|
|$29|$sp|堆栈指针(Stack Pointer)|
|$30|$fp|帧指针(Frame Pointer)|

## Byte bit word

A byte = 8 bits
A word* = 4 bytes = 32 bits

```
foo: .word 0xFFEEDDCC
bar: .byte 0xFF, 0xEE, 0xDD, 0xCC
```

## Big endian & Little endian

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-20_16-22-59.png)

## 基本

指令一览

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/MIPS_Instruction_Set_Page_1.png)
![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/MIPS_Instruction_Set_Page_2.png)
![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/MIPS_Instruction_Set_Page_3.png)
![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/MIPS_Instruction_Set_Page_4.png)
![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/MIPS_Instruction_Set_Page_5.png)
![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/MIPS_Instruction_Set_Page_6.png)

### .word && .text && .data

`.word` is essentially creating some space in memory to hold data. Each item following it is 4 bytes long. It's similar to creating an array:

`.word`本质上是在内存中创建一些空间来保存数据，就如同创建一个array一样：

Assembly

```
array:
.word 0x12121212, 0x23232323, 0x34343434, 0x4, 0x5
```

C

```
int array[] = {0x12121212, 0x23232323, 0x34343434, 0x4, 0x5};
```

`.text` tells the assembler to switch to the text segment (where code goes)

`.text` 告诉汇编程序切换到文本段（码代码的地方）

`.data` tells the assembler to switch to the data segment (where data goes).

`.data` 告诉汇编器切换到数据段（数据去的地方）。

> https://stackoverflow.com/questions/60403872/what-is-word-data-and-text-in-assembly

### add && addi

```
addi $9, $0, 1
add $10, $9, $9
add $10, $10, $9
```

分别表示把1这个值存储到`register 9`的位置

把`register 9`和`register 9`里面的值相加，放到`register 10`里面

`Register 10`里面的值加上`Register 9` 里面的值，存储到`Register 10`里面

而计算顺序的话，基本都是以第一个register为结果/输出，后面两个是运算，$y, $x, $z就如同 y=x+z 一样的 (这里的表述十分不严谨，只是体现一个运算基本思路)

这里的`add`很好理解，就是add的意思，`addi`指的是`Add immediate`

同样是add，

> add adds the value in two registers
> 
> addi adds an immediate value (constant) to the register

Add是把两个register里的值相加，而addi是把一个`immediate value`，也就是一个常数加到register里面

### li && ori

addi $8, $0, 0xc800

ori $8, $0, 0xc800

li $8, 0xc800

以上三个都是相同的，都是在Register 8 中填入 0xc800

### AND && OR && XOR && NOR

and 和 or 还有xor看这个图就一目了然了

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/4basicgates.gif)

再来个例子，比如(如下是两个Register的值，并且已经转换到了二进制)

```
$8: 0b 1100 0010 1001 1010 
$9: 0b 0100 1011 1010 0111
```

那么

```
and $10, $8, $9
```

就可以得到

```
$10: 0b 0100 0010 1000 0010
```

（从左到右，上下对齐，1 and 0可以得到0，1 and 1可以得到1，0 and 0可以得到0，以此类推）

这里这个$8是我们的data，那么$9就叫做mask

同样的or 和 xor也是类似的

除此之外，还有andi，ori，xori，也是和addi一样类似的含义（指immediate）

如：andi $10, $8, 0x1f

Nor则是

|a|b|out|
|:----|:----|:----|
|0|0|1|
|0|1|0|
|1|0|0|
|1|1|0|


### sll && srl && sra

位移，sll （shift left logical）就是指向左位移，srl（shift right logical）就是向右位移

至于这个位移的过程，可以用图来很好的表示

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/sll.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/srl.png)

位移的时候，头上的如果是0（以位移方向为头，反向为尾），直接抛弃，如果是1也是如此。

而尾部则是一直补足一个0，永远都是补上一个0，这个补足的0可以是无限的

所以如果一直向一个方向位移很多次以后就会发现这个值会变成0（受限于bit）

#### sra

shift right arithmetic & keep sign bit(left most bit)

向右移动并且保持最左sign bit不变，例：

```
1010 sra (discrad right most 0)
1101 

0101 sra (discard right most 1)
0010 
```

### nop

no operation

啥也不干

### loop

```
.text
	addi $8, $0, 5       	# Initial value & counter
	addi $9, $0, 11
	add $10, $0, $0         # For sum

    # Count-down loop (from 5)
loop:
	beqz $8, exit
	add $10, $10, $9
	addi $8, $8, -1
	b loop

exit:
	nop	
```

一个简单的loop

`beqz`是指 `Branch Equal to Zero` 也就是如果这个$8的值是0的话，就跳转到`exit`这里

`beq`类似beqz，不过这里不是等于0，而是等于另一个register。如下例子

```
beq $t0, $t1, Target
# 意思就是 branch to Target if $t0 == $t1
# 如果 register t0 等于 t1的话，那么就跳转到target那里去（比如loop）
```


`b loop`: The b instruction for the ARM CPU is nearly the same as the jmp instruction for the x86 CPU: A jump instruction

简单来说这里就是跳转到loop循环的开头，从头开始判断

> https://stackoverflow.com/questions/48084634/what-does-b-mean-in-this-assembly-code

```
bne $10, $0, exit
```

`bne`: `Branch if Not Equal` 如果$10 不等于 $0的话，就exit

### load

`lw` load a word from memory

`la` load an address

`lui` load upperimmediate

`li` load an immediate

`lb` load byte

`lbu` load byte unsigned 


#### Example

```
la $11, nums
lw $12, 16($11)
lui $10, 100
li $10, 0xdeadbeef
lb $t0, 0($t1)
# $FF => $FFFFFFFF
lbu
# $FF => $000000FF
```

### Array

```
.data
	array: .word 7, 8, 9, 10,

	la $8, array
	lw $9, 0($8)
```

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-20_16-42-54.png)

### sw & sb

`sw`: store word (Copy from register to memory)
`sb`: store b

write to memory:

```
sw $8, 0($9)
sb $10, 0($11)
```

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/kngyn.png)

### BASIC INSTRUCTION FORMATS

R I J 三种

头6位都是opcode，也就是决定这个instruction name的，rs,rt,rd对应registers

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-07_13-31-33.png)

Instruction Encoding:

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-20_17-02-28.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-20_17-02-39.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-20_17-02-49.png)

Branch instruction encoding:

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-20_17-07-00.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-20_17-08-01.png)

Branch distance:

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-10-20_17-09-42.png)

完整对应列表：

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/MIPS_Reference_Data_Page_1.png)

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/MIPS_Reference_Data_Page_2.png)

#### Examples

```
nor $12, $21, $7

# nor = R-type
# opcode   rs    rt    rd   shamt  funct
# xxxxxx xxxxx xxxxx xxxxx xxxxx xxxxxx
# 000000 10101 00111 01100 00000 100111
# 0000 0010 1010 0111 0110 0000 0010 0111
# 0	2    A    7    6    0     2   7
```

```
beq $9, $8, label_A	

# beq = I-type
# opcode    rs    rt    immediate
# xxxxxx xxxxx xxxxx xxxx xxxx xxxx xxxx
# 000100 01001 01000 1111 1111 1111 0111
# 0001 0001 0010 1000 1111 1111 1111 0111
# 1    1     2     8   F    F     F    7

# what's -9 in 16-bit 2's complement?
# write it in positive form:
# 0000 0000 0000 1001
# flip all the bits
# 1111 1111 1111 0110
# add one
# 1111 1111 1111 0111
```

```
.data

bob:
	.word 212
	
connie:
	.word 40122
	
.text
	# Store the sum of integer
	# at 'bob' and integer at
	# 'connie' into register
	# $12 -- and without using
	# bob or connie directly
	# in a 'lw' instruction
	# (ie must use register and
	# an offset of zero).
	
#lw $8, bob   # don't do this (just a usually way we would do it but incorrect)
#lw $9, connie
#add $10, $8, $9

la $7, bob
lw $8, 0($7)
lw $8, ($7)
lw $9, 4($7)	# load at the forth value in that memory address
add $10, $8, $9

# or

la $7, bob
lw $8, 0($7)
addi $7, $7, 4
lw $9, 0($7)
add $10, $8, $8
```

### ASCII table

https://www.asciitable.com/

## 未完待持续更新中

> 参考自 https://valeeraz.github.io/2020/05/08/architecture-mips/