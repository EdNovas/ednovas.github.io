---
title: 自定义滚动条
tags: [Hexo,魔改,butterfly,主题,滚动条]
id: '1182'
categories:
  - - 建站
date: 2021-02-01 12:28:00
top_img: 'linear-gradient(20deg,#0062be,#925696,#cc426e,#fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/css-scrollbar.jpg
#top: true
#highlight_shrink: true
---

>转载自 https://www.antmoe.com/posts/a811d614/index.html#%E6%BB%9A%E5%8A%A8%E6%9D%A1

`/themes/butterfly/source/css/`下新建一个`.css`文件，复制黏贴一下内容
`config.yml`的`inject`中按照格式引用该文件

```
/* 滚动条 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background-color: rgba(73, 177, 245, 0.2);
  border-radius: 2em;
}

::-webkit-scrollbar-thumb {
  background-color: #49b1f5;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.4) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0.4) 75%,
    transparent 75%,
    transparent
  );
  border-radius: 2em;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}

::-moz-selection {
  color: #fff;
  background-color: #49b1f5;
}
```