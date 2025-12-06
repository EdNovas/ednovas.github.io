---
title: 页脚渐变魔改
tags: [Hexo,魔改,butterfly,主题,footer，页脚]
id: '1181'
categories:
  - - 建站
date: 2021-02-01 12:25:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/jianbian.jpg
#top: true
#highlight_shrink: true
---

>转载自 https://www.antmoe.com/posts/a811d614/index.html#%E9%A1%B5%E8%84%9A%E6%B8%90%E5%8F%98

`/themes/butterfly/source/css/`下新建一个`.css`文件，复制黏贴一下内容
`config.yml`的`inject`中按照格式引用该文件
```
/* 页脚footer */
/* 渐变色滚动动画 */
@-webkit-keyframes Gradient {
    0% {
        background-position: 0 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0 50%;
    }
}

@-moz-keyframes Gradient {
    0% {
        background-position: 0 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0 50%;
    }
}

@keyframes Gradient {
    0% {
        background-position: 0 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0 50%;
    }
}
#footer {
    background: linear-gradient(-45deg, #ee7752, #ce3e75, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    -webkit-animation: Gradient 10s ease infinite;
    -moz-animation: Gradient 10s ease infinite;
    animation: Gradient 10s ease infinite;
    -o-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
#footer:before {
    background-color: rgba(0, 0, 0, 0);
}
```