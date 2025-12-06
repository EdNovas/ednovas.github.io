---
title: Pagermaid Keyword 插件使用教程
tags: 
  - pagermaid
  - keyword
  - 插件
  - bot
categories:
  - VPS
date: 2021-05-11 17:40:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/keyword-research.png
---

## 入门

### 安装

使用 -apt install keyword 安装此插件

### 简单的规则 ( -keyword )

1. 添加规则 ( -keyword new )

    添加纯文本匹配 :

    -keyword new plain 'test' 'reply' ( 检测到文本中 包含 test 就回复 reply )

    添加正则匹配 ( 仅是举例，正则远不止这些 ) :

    -keyword new regex 'test(1|2)' 'reply' ( 检测到文本中 包含 test1 或 test2 就回复 reply )

    -keyword new regex '^test$' 'reply' ( 检测到文本 是 test 就回复 )

2. 列出规则 ( -keyword list )
   
3. 删除规则 ( -keyword del , -keyword delid )
   
    删除纯文本规则 :

    方法 1: -keyword del plain 'test' ( 暴力匹配，test 为要删除的规则 )

    方法 2: -keyword delid plain '1' ( 1 为 -keyword list 列出的规则的序号 )

    删除正则规则同理，将 plain 替换为 regex 即可。

4. 清空规则 ( -keyword clear )
    
    清除纯文本规则 : -keyword clear plain

    清除正则规则 : -keyword clear regex

### 细节提醒

清空规则会清空 所有 纯文本或正则规则，慎用。

添加和删除规则中的 英文单引号 不可省略。

## 进阶

### 回复限制 ( -replyset )

1. 黑名单、白名单 ( -replyset mode )
   
    黑名单 : 不回复在列表中的用户。

    白名单 : 仅回复在列表中的用户。

    设置为黑名单 :

    -replyset mode 0 ( 注意，这里是数字零而不是英文字母 o，仅仅因为显示问题 )

    设置为白名单 :

    -replyset mode 1

    清除黑白名单设置 : -replyset mode clear

2. 列表 ( -replyset list )

    添加用户 : -replyset list add 100000000 ( 将用户 id 为 100000000 的用户添加进列表 )

    删除用户 : -replyset list del 100000000 ( 将用户 id 为 100000000 的用户从列表移除 )

    显示列表 : -replyset list show ( 显示已有用户列表 )

    清空列表 : -replyset list clear ( 清空用户列表 )

3. 频率限制 ( -replyset freq )

    限制 : 最短回复间隔 ( 秒 )

    设置限制 : -replyset freq 7.5 ( 设置最短回复间隔为 7.5 秒 )

    清除限制 : -replyset freq clear ( 清除设置的频率限制，使用默认值 )

4. 文件缓存 ( -replyset cache )

    功能 : 当设置打开后，自动缓存规则中的文件和图片，下次发送时不用再次下载。

    打开缓存 : -replyset cache 1

    关闭缓存 : -replyset cache 0 ( 注意，这里是数字零而不是英文字母 o，仅仅因为显示问题 )

    清除缓存 : -replyset cache remove

    删除缓存设置 : -replyset cache clear

    可以使用全局设置和单独设置，具体参考第 7 和第 8 条 : 全局设置、单独设置。

5. 自我触发 ( -replyset trig )

    功能 : 当此设置开启后，自己发送的消息也将会触发规则，同样可以使用全局设置和单独设置。

    开启关闭和缓存设置一样，清除为 -replyset trig clear。

6. 显示设置 ( -replyset show )

    显示所有设置，包括黑白名单，列表和频率限制。

7. 清除设置 ( -replyset clear )

    清除所有设置，慎用。

8. 全局设置 ( global )

    在 -replyset 后面加上 global，如 -replyset global list add 1234。

9. 单独设置 ( plain / regex )

    在 -replyset 后面加上 plain 或者 regex 加上对应规则编号 ( -keyword list 查看 ) ，

    如 -replyset plain 1 list add 1234。

### 规则进阶 ( -keyword )

看这里之前请务必了解 入门篇 中的所有内容。

1. 回复信息 ( reply_to )

    -keyword new regex '^/prpr$' 'reply::NM$L'

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/38f538f946af07630e8a9.png)

2. 正则捕获组 ( ${regex_<捕获组名称>} )

    -keyword new regex '(?P<text>[\S\s]+)' 'reply::${regex_text}' ( 复读机，${regex_text} 中的 text 为捕获组名称 )

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/61e5c8166b62dd5e709a0.png)


3. 回复文件或图片 ( file, photo, tgfile, tgphoto )

    本机文件 : -keyword new plain 'file' 'file::file_name file:///home/ubuntu/testfile' ( 发送 /home/ubuntu/testfile，送出的文件名为 file_name )

    网络图片 : -keyword new plain 'photo' 'photo::photo.png https://test.test/test.png' ( 以 file_name 发送此网络文件，文件名处必须以图片的后缀结尾 )

    TG 中的文件和图片同理，将文件链接替换成包含文件的消息链接即可。

    ![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/336c65e6d870fad1ca794.png)

1. 外部回复 ( ext_<chat_id> )

    -keyword new plain 'test' 'ext_100000000,plain::message' ( 在聊天中匹配到 test 后给 user_id 为 100000000 的用户发送 message )

5. 删除信息 ( op::delete )

    -keyword new plain 'test' 'op::delete' ( 如果消息含有 test 就删除 )

6. 睡眠时间 ( op::sleep <time> )

    -keyword new plain 'test' 'op::sleep 1' ( 如果消息含有 test 就休息 1 秒 )

7. 删除自己的信息 ( op::delself <int> )

    用法 : op::delself 回复序号 ( 本条规则中的回复中的序号，序号从 0 开始 )

    -keyword new plain 'test' 'reply1||reply2||op::sleep 5||op::delself 1' ( 检测到发送 test 后发送 reply1 和 reply2，发送五秒后删除 reply2 )

8. 属性混用 ( 逗号分隔 )

    eg : -keyword new plain 'test' 'ext_100000000,file::file_name file:///home/ubuntu/testfile' ( 如果检测到文本中有 test，给 user_id 为 100000000 的用户发送 /home/ubuntu/testfile，文件名为 file_name )

9. 多个回复 ( || 分隔 )

    eg : -keyword new plain 'cnm' 'reply::warn||op::sleep 2||op::delete' ( 检测到消息中含有 cnm 后，回复发送 warn，2 秒后删除含有 cnm 的消息 )

## 大佬

### 函数 ( -funcset )

1. 新建函数 ( -funcset new <func_name> )

    需要附带插件文件或者回复含有插件文件的消息。

    函数需要包含 main 函数，参数为 context，需要 async。

    ```
    # 生成 1 - 100 的随机数
    import random
    async def main(context):
    return random.randint(1, 100)
    ```

2. 从 REPO 获取函数 ( -funcset install <func_name> )

3. 删除函数 ( -funcset del <func_name> )

4. 获取函数文件 ( -funcset show <func_name> )

    发送函数文件到聊天。

5. 列出函数 ( -funcset ls )

6. 使用 ( ${func_<func_name>} )

    eg : -keyword new plain 'test' '${func_random}' ( 引用 random 函数的返回值 )

> 转载自keyword作者 @c3b2abot 大佬（telegram）https://telegra.ph/Keyword-%E6%8F%92%E4%BB%B6%E4%BD%BF%E7%94%A8%E6%95%99%E7%A8%8B-02-07