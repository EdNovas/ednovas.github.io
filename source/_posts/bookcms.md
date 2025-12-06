---
title: 搭建狂雨CMS小说站
tags: 
  - CMS
  - 小说站
  - 小说
  - 搭建
  - VPS
categories:
  - 建站
date: 2021-06-27 10:56:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/photo-1507842217343-583bb7270b66.jpg
---

## 官网

http://bbs.kyxscms.com/

狂雨cms小说采集站

官网下载直链: http://bbs.kyxscms.com/?s=ajax/downfile/id/1051

EdNovas网盘分流:

https://ednovas.cloud/s/O0Vu8

## 安装

解析域名,添加网站域名,申请ssl,强制跳转https

将下载的zip包放到网站根目录解压缩

nginx伪静态改为thinkphp然后保存即可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-27_10-29-39.png)

添加数据库,记住用户名和密码,注意这里要用utf8mb4编码

访问域名进入安装界面

同意即可

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-27_10-27-40.png)

填入对应数据库信息,设置个管理员账密

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-27_10-31-35.png)

安装完成进入后台

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-27_10-32-33.png)

## 采集

狂雨小说采集规则

```
INSERT INTO `ky_collect` (`id`, `title`, `charset`, `type`, `url_complete`, `url_reverse`, `pic_local`, `source_url`, `section`, `url_rule`, `url_merge`, `url_must`, `url_ban`, `relation_url`, `rule`, `category_way`, `category_fixed`, `category_equivalents`, `status`, `create_time`, `update_time`, `collect_time`) VALUES
(10010, 'www.rmxs8.com', 'auto', 'novel', 1, 0, 0, '[{"url":"https://www.rmxs8.com/leixing_1_[内容]/","type":"1","param":["1","50","1",0]},{"url":"https://www.rmxs8.com/leixing_2_[内容]/","type":"1","param":["1","50","1",0]},{"url":"https://www.rmxs8.com/leixing_3_[内容]/","type":"1","param":["1","50","1",0]},{"url":"https://www.rmxs8.com/leixing_4_[内容]/","type":"1","param":["1","50","1",0]},{"url":"https://www.rmxs8.com/leixing_5_[内容]/","type":"1","param":["1","50","1",0]},{"url":"https://www.rmxs8.com/leixing_6_[内容]/","type":"1","param":["1","50","1",0]},{"url":"https://www.rmxs8.com/leixing_7_[内容]/","type":"1","param":["1","50","1",0]},{"url":"https://www.rmxs8.com/leixing_8_[内容]/","type":"1","param":["1","50","1",0]},{"url":"https://www.rmxs8.com/leixing_9_[内容]/","type":"1","param":["1","50","1",0]},{"url":"https://www.rmxs8.com/leixing_10_[内容]/","type":"1","param":["1","50","1",0]},{"url":"https://www.rmxs8.com/leixing_11_[内容]/","type":"1","param":["1","50","1",0]}]', '<div id="newscontent">[内容]</div>', '<span class="s2"><a href="[内容1]">', '', '', '', '[{"title":"章节页","page":"default","chapter":"1","section":"<h2 class=\\"book_article_texttitle\\">[内容]</div>","url_rule":"<dd><a href=\\"[内容1]\\">[章节标题]</a></dd>","url_merge":""}]', '{"category":{"field":"category","source":"default","rule":"<meta property=\\"og:novel:category\\" content=\\"[内容1]\\" \\/>","merge":"","strip":""},"title":{"field":"title","source":"default","rule":"<meta property=\\"og:novel:book_name\\" content=\\"[内容1]\\" \\/>","merge":"","strip":"","replace":""},"author":{"field":"author","source":"default","rule":"<meta property=\\"og:novel:author\\" content=\\"[内容1]\\" \\/>","merge":"","strip":"","replace":""},"serialize":{"field":"serialize","source":"default","rule":"<meta property=\\"og:novel:status\\" content=\\"[内容1]\\" \\/>\\n","merge":"","serial":"连载中","over":"完结","strip":"","replace":""},"pic":{"field":"pic","source":"default","rule":"<meta property=\\"og:image\\" content=\\"[内容1]\\" \\/>","merge":"","strip":"","replace":""},"content":{"field":"content","source":"default","rule":"<meta property=\\"og:description\\" content=\\"[内容1]\\" \\/>","merge":"","strip":"","replace":"[{\\"find\\":\\"热门小说网\\",\\"replaces\\":\\"笔趣阁\\"},{\\"find\\":\\"www.rmxs8.com\\",\\"replaces\\":\\"www.xbqg6.com\\"}]"},"tag":{"field":"tag","source":"default","rule":"<meta name=\\"keywords\\" content=\\"[内容1]\\">","merge":"","strip":"","replace":""},"chapter_title":{"field":"chapter_title","source":"0","rule":"var chapter_name = \\"[内容1]\\";","merge":"","strip":"","replace":""},"chapter_content":{"field":"chapter_content","source":"0","rule":"<div class=\\"content\\" id=(.*)>[内容1]<p>(.*)最新章节地址","merge":"","strip":"","replace":"[{\\"find\\":\\"热门小说网(https:\\/\\/www.remen88.com)\\",\\"replaces\\":\\"www.bqg6.com\\"}]"}}', 0, 0, '[{"target":"都市生活","local":"21"},{"target":"现代言情","local":"21"},{"target":"古代言情","local":"21"},{"target":"青春校园","local":"21"},{"target":"玄幻奇幻","local":"18"},{"target":"武侠仙侠","local":"19"},{"target":"悬疑灵异","local":"18"},{"target":"历史军事","local":"20"},{"target":"游戏竞技","local":"34"},{"target":"科幻未来","local":"22"},{"target":"二次元","local":"42"}]', 1, 1562752316, 1562753580, 1562753413);
```

```
INSERT INTO `ky_collect` (`id`, `title`, `charset`, `type`, `url_complete`, `url_reverse`, `pic_local`, `source_url`, `section`, `url_rule`, `url_merge`, `url_must`, `url_ban`, `relation_url`, `rule`, `category_way`, `category_fixed`, `category_equivalents`, `status`, `create_time`, `update_time`, `collect_time`) VALUES
(10011, 'www.remenxs.com', 'auto', 'novel', 1, 0, 0, '[{"url":"https://www.remenxs.com/leixing_1_[内容]/","type":"1","param":["1","50","1",0]},{"url":"https://www.remenxs.com/leixing_2_[内容]/","type":"1","param":["1","50","1",0]},{"url":"https://www.remenxs.com/leixing_3_[内容]/","type":"1","param":["1","50","1",0]},{"url":"https://www.remenxs.com/leixing_4_[内容]/","type":"1","param":["1","50","1",0]},{"url":"https://www.remenxs.com/leixing_5_[内容]/","type":"1","param":["1","50","1",0]},{"url":"https://www.remenxs.com/leixing_6_[内容]/","type":"1","param":["1","50","1",0]},{"url":"https://www.remenxs.com/leixing_7_[内容]/","type":"1","param":["1","50","1",0]},{"url":"https://www.remenxs.com/leixing_8_[内容]/","type":"1","param":["1","50","1",0]},{"url":"https://www.remenxs.com/leixing_9_[内容]/","type":"1","param":["1","50","1",0]},{"url":"https://www.remenxs.com/leixing_10_[内容]/","type":"1","param":["1","50","1",0]},{"url":"https://www.remenxs.com/leixing_11_[内容]/","type":"1","param":["1","50","1",0]}]', '<div id="newscontent">[内容]</div>', '<span class="s2"><a href="[内容1]">', '', '', '', '[{"title":"章节页","page":"default","chapter":"1","section":"<h2 class=\\"book_article_texttitle\\">[内容]</div>","url_rule":"<dd><a href=\\"[内容1]\\">[章节标题]</a></dd>","url_merge":""}]', '{"category":{"field":"category","source":"default","rule":"<meta property=\\"og:novel:category\\" content=\\"[内容1]\\" \\/>","merge":"","strip":""},"title":{"field":"title","source":"default","rule":"<meta property=\\"og:novel:book_name\\" content=\\"[内容1]\\" \\/>","merge":"","strip":"","replace":""},"author":{"field":"author","source":"default","rule":"<meta property=\\"og:novel:author\\" content=\\"[内容1]\\" \\/>","merge":"","strip":"","replace":""},"serialize":{"field":"serialize","source":"default","rule":"<meta property=\\"og:novel:status\\" content=\\"[内容1]\\" \\/>\\n","merge":"","serial":"连载中","over":"完结","strip":"","replace":""},"pic":{"field":"pic","source":"default","rule":"<meta property=\\"og:image\\" content=\\"[内容1]\\" \\/>","merge":"","strip":"","replace":""},"content":{"field":"content","source":"default","rule":"<meta property=\\"og:description\\" content=\\"[内容1]\\" \\/>","merge":"","strip":"","replace":"[{\\"find\\":\\"热门小说网\\",\\"replaces\\":\\"笔趣阁\\"},{\\"find\\":\\"www.remenxs.com\\",\\"replaces\\":\\"www.xbqg6.com\\"}]"},"tag":{"field":"tag","source":"default","rule":"<meta name=\\"keywords\\" content=\\"[内容1]\\">","merge":"","strip":"","replace":""},"chapter_title":{"field":"chapter_title","source":"0","rule":"var chapter_name = \\"[内容1]\\";","merge":"","strip":"","replace":""},"chapter_content":{"field":"chapter_content","source":"0","rule":"<div class=\\"content\\" id=(.*)>[内容1]<p>(.*)最新章节地址","merge":"","strip":"","replace":"[{\\"find\\":\\"热门小说网(https:\\/\\/www.remen88.com)\\",\\"replaces\\":\\"www.bqg6.com\\"}]"}}', 0, 0, '[{"target":"都市生活","local":"21"},{"target":"现代言情","local":"21"},{"target":"古代言情","local":"21"},{"target":"青春校园","local":"21"},{"target":"玄幻奇幻","local":"18"},{"target":"武侠仙侠","local":"19"},{"target":"悬疑灵异","local":"18"},{"target":"历史军事","local":"20"},{"target":"游戏竞技","local":"34"},{"target":"科幻未来","local":"22"},{"target":"二次元","local":"42"}]', 1, 1562752316, 1562753580, 1562753413);
```

```
INSERT INTO `ky_collect` (`id`, `title`, `charset`, `type`, `url_complete`, `url_reverse`, `pic_local`, `source_url`, `section`, `url_rule`, `url_merge`, `url_must`, `url_ban`, `relation_url`, `rule`, `category_way`, `category_fixed`, `category_equivalents`, `status`, `create_time`, `update_time`, `collect_time`) VALUES
(50, 'www.dingdiann.com权8 20W本书', 'auto', 'novel', 1, 0, 1, '[{"url":"https://wap.dingdiann.com/sort/1/[内容].html","type":"1","param":["1","3335","1",0]},{"url":"https://wap.dingdiann.com/sort/2/[内容].html","type":"1","param":["1","1375","1",0]},{"url":"https://wap.dingdiann.com/sort/3/[内容].html","type":"1","param":["1","2577","1",0]},{"url":"https://wap.dingdiann.com/sort/4/[内容].html","type":"1","param":["1","914","1",0]},{"url":"https://wap.dingdiann.com/sort/5/[内容].html","type":"1","param":["1","1736","1",0]},{"url":"https://wap.dingdiann.com/sort/6/[内容].html","type":"1","param":["1","530","1",0]},{"url":"https://wap.dingdiann.com/sort/7/[内容].html","type":"1","param":["1","8533","1",0]}]', '<div class="recommend">[内容]<p class="page">', '<a href="[内容1]">', '', '', '', '[{"title":"章节列表页","page":"default","chapter":"0","section":"<div id=\\"chapterlist\\" class=\\"directoryArea\\">[内容]</h2>","url_rule":"<h2><a href=\\"[内容1]\\">","url_merge":""},{"title":"章节页","page":"0","chapter":"1","section":"<div  id=\\"chapterlist\\" class=\\"directoryArea\\">[内容]<p class=\\"Readpage\\" id=\\"bottom\\" >","url_rule":"<p> <a style=\\"\\" href=\\"[内容1]\\">[章节标题]</a></p>","url_merge":""}]', '{"category":{"field":"category","source":"default","rule":"<meta property=\\"og:novel:category\\" content=\\"[内容1]\\"\\/>","merge":"","strip":""},"title":{"field":"title","source":"default","rule":"<meta property=\\"og:novel:book_name\\" content=\\"[内容1]\\"\\/>","merge":"","strip":"","replace":""},"author":{"field":"author","source":"default","rule":"<meta property=\\"og:novel:author\\" content=\\"[内容1]\\"\\/>","merge":"","strip":"","replace":""},"serialize":{"field":"serialize","source":"default","rule":"<meta property=\\"og:novel:status\\" content=\\"[内容1]\\"\\/>","merge":"","serial":"连载","over":"完成","strip":"","replace":""},"pic":{"field":"pic","source":"default","rule":"<meta property=\\"og:image\\" content=\\"[内容1]\\"\\/>","merge":"","strip":"","replace":""},"content":{"field":"content","source":"default","rule":"<meta property=\\"og:description\\" content=\\"[内容1]\\"\\/>","merge":"","strip":"","replace":""},"tag":{"field":"tag","source":"default","rule":"<meta property=\\"og:novel:category\\" content=\\"[内容1]\\"\\/>","merge":"","strip":"","replace":""},"chapter_title":{"field":"chapter_title","source":"1","rule":"<title>[内容1]_(*)_(*)<\\/title>","merge":"","strip":"","replace":""},"chapter_content":{"field":"chapter_content","source":"1","rule":"<div id=\\"chaptercontent\\" class=\\"Readarea ReadAjax_content\\">[内容1]<\\/div>","merge":"","strip":"a,img,div,form,iframe,object,script,style,link,a,a,a,link,style,style","replace":"[{\\"find\\":\\"『章节错误,点此举报』\\",\\"replaces\\":\\"\\"},{\\"find\\":\\"『加入书签，方便阅读』\\",\\"replaces\\":\\"\\"}]"}}', 0, 18, '[{"target":"玄幻奇幻","local":"18"},{"target":"武侠仙侠","local":"19"},{"target":"都市言情","local":"21"},{"target":"历史军事","local":"20"},{"target":"科幻灵异","local":"22"},{"target":"网游竞技","local":"34"},{"target":"女生频道","local":"8"}]', 1, 1563776318, 1563783889, 1563947285);
```


复制上方内容的到SQL里

![](https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/Snipaste_2021-06-27_10-42-32.png)

## 更多资源

https://ednovas.cloud/s/JEZIG

这里面有别的几个小说CMS采集站以及更多的采集规则

## DEMO

https://novel.ednovas.xyz