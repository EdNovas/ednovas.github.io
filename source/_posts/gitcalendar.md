---
title: Gitcalendar
tags: [hexo,美化,网站,建站,gitcalendar,日历]
id: '1161'
categories:
  - - 建站
date: 2021-01-21 20:13:00
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
cover: https://cdn.jsdelivr.net/gh/wdm1732418365/CDN/New%20folder/git-stats-1024x756.png
highlight_shrink: true
---

## 新建 [Blogroot]\themes\butterfly\layout\includes\gitcalendar.pug:
```javascript
#gitcalendar.gitcalendar
  #gitmessage(:style='{top:y+px,left:x+px,position: fixed,zIndex:9999}')
    .angle-wrapper
      span {{span1}} &nbsp;
      span {{span2}} 次上传
  .position-relative
    .border.py-2.graph-before-activity-overview
      .js-gitcalendar-graph.mx-md-2.mx-3.d-flex.flex-column.flex-items-end.flex-xl-items-center.overflow-hidden.pt-1.is-graph-loading.graph-canvas.gitcalendar-graph.height-full.text-center
        #gitcalendarcanvasbox(v-if='simplemode')
          canvas#gitcanvas(style='animation: none;')
        svg.js-gitcalendar-graph-svg(width='100%', viewBox='0 0 770 128', v-if='!simplemode')
          text.month(:x='32 + monthindex*64', y='20', v-for='(month,monthindex) in monthchange') {{month}}
          text.wday(text-anchor='start', dx='0', dy='40')  日
          text.wday(text-anchor='start', dx='0', dy='65')  二
          text.wday(text-anchor='start', dx='0', dy='90')  四
          text.wday(text-anchor='start', dx='0', dy='115') 六
          g(v-for='(weekitem,weekIndex) in data', :transform='\'translate(\'+ (16 + weekIndex*14) + \',\' + \'0)\'')
            rect(@mouseover="selectStyle(dayitem,$event)"  @mouseleave="outStyle()" v-for='(dayitem,dayIndex) in weekitem', :style='{fill:thiscolor(dayitem.count),shapeRendering:crispedges}', :data-score='dayitem.count', :data-date='dayitem.date', x='0', :y=' 30 + dayIndex*13 ', width='11', height='11')
      .contrib-footer.clearfix.mt-1.mx-3.px-3.pb-1
        .float-left.text-gray
          | 数据来源
          a(:href="'https://github.com/'+ user ", target='blank') @{{user}}
        .contrib-legend.text-gray
          | Less

          ul.legend
            li(:style='{backgroundColor:color[0]}')
            li(:style='{backgroundColor:color[2]}')
            li(:style='{backgroundColor:color[4]}')
            li(:style='{backgroundColor:color[6]}')
            li(:style='{backgroundColor:color[8]}')
          | More

  .contrib-column.contrib-column-first.table-column
    span.text-muted 过去一年提交
    span.contrib-number {{total}}
    span.text-muted {{oneyearbeforeday}}&nbsp;-&nbsp;{{thisday}}
  .contrib-column.table-column
    span.text-muted 最近一月提交
    span.contrib-number {{thisweekdatacore}}
    span.text-muted {{amonthago}}&nbsp;-&nbsp;{{thisday}}
  .contrib-column.table-column
    span.text-muted 最近一周提交
    span.contrib-number {{weekdatacore}}
    span.text-muted {{aweekago}}&nbsp;-&nbsp;{{thisday}}
```

## 新建 [Blogroot]\themes\butterfly\layout\includes\gitcalendar-js.pug:

```javascript
script.
  var gitcalendar = new Vue({
    el: '#gitcalendar',
    data: {
      simplemode: !{theme.gitcalendar.simplemode},
      user: '!{theme.gitcalendar.user}',
      fixed: 'fixed',
      px: 'px',
      x: '',
      y: '',
      span1: '',
      span2: '',
      month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      monthchange: [],
      oneyearbeforeday: '',
      thisday: '',
      amonthago: '',
      aweekago: '',
      weekdatacore: 0,
      datacore: 0,
      total: 0,
      datadate: '',
      data: [],
      positionplusdata: [],
      firstweek: [],
      lastweek: [],
      beforeweek: [],
      thisweekdatacore: 0,
      mounthbeforeday: 0,
      mounthfirstindex: 0,
      crispedges: 'crispedges',
      thisdayindex: 0,
      amonthagoindex: 0,
      amonthagoweek: [],
      firstdate: [],
      first2date: [],
      montharrbefore: [],
      monthindex: 0,
      color: !{theme.gitcalendar.color}
    },
    methods: {
      selectStyle(data, event) {
        document.querySelector('.angle-wrapper').style.display = 'block'
        this.span1 = data.date;
        this.span2 = data.count;
        this.x = event.clientX - 100;
        this.y = event.clientY - 60
      },
      outStyle() {
        document.querySelector('.angle-wrapper').style.display = 'none'
      },
      thiscolor(x) {
        if (x === 0) {
          let i = parseInt(x / 2);
          return this.color[0]
        } else if (x < 2) {
          return this.color[1]
        } else if (x < 20) {
          let i = parseInt(x / 2);
          return this.color[i]
        } else {
          return this.color[9]
        }
      },
    }
  });
  var githubapiurl = "https://python-github-calendar-api.vercel.app/api?" + gitcalendar.user;
  //canvas绘图
  function responsiveChart() {
    let c = document.getElementById("gitcanvas");
    if (c) {
      let cmessage = document.getElementById("gitmessage");
      let ctx = c.getContext("2d");
      c.width = document.getElementById("gitcalendarcanvasbox").offsetWidth;
      let linemaxwitdh = 0.96 * c.width / gitcalendar.data.length;
      c.height = 9 * linemaxwitdh;
      let lineminwitdh = 0.8 * linemaxwitdh;
      let setposition = {
        x: 0.02 * c.width,
        y: 0.025 * c.width
      };
      for (let week in gitcalendar.data) {
        weekdata = gitcalendar.data[week];
        for (let day in weekdata) {
          let dataitem = {
            date: "",
            count: "",
            x: 0,
            y: 0
          };
          gitcalendar.positionplusdata.push(dataitem);
          ctx.fillStyle = gitcalendar.thiscolor(weekdata[day].count);
          setposition.y = Math.round(setposition.y * 100) / 100;
          dataitem.date = weekdata[day].date;
          dataitem.count = weekdata[day].count;
          dataitem.x = setposition.x;
          dataitem.y = setposition.y;
          ctx.fillRect(setposition.x, setposition.y, lineminwitdh, lineminwitdh);
          setposition.y = setposition.y + linemaxwitdh
        };
        setposition.y = 0.025 * c.width;
        setposition.x = setposition.x + linemaxwitdh
      };
      ctx.font = "600  Arial";
      ctx.fillStyle = '#aaa';
      ctx.fillText("日", 0, 1.9 * linemaxwitdh);
      ctx.fillText("二", 0, 3.9 * linemaxwitdh);
      ctx.fillText("四", 0, 5.9 * linemaxwitdh);
      ctx.fillText("六", 0, 7.9 * linemaxwitdh);
      let monthindexlist = c.width / 24;
      for (let index in gitcalendar.monthchange) {
        ctx.fillText(gitcalendar.monthchange[index], monthindexlist, 0.7 * linemaxwitdh);
        monthindexlist = monthindexlist + c.width / 12
      };
      cmessage.onmousemove = function(event) {
        document.querySelector('.angle-wrapper').style.display = 'none'
      };
      c.onmousemove = function(event) {
        document.querySelector('.angle-wrapper').style.display = 'none'
        getMousePos(c, event);
      };

      function getMousePos(canvas, event) {
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left * (canvas.width / rect.width);
        var y = event.clientY - rect.top * (canvas.height / rect.height);
        //console.log("x:"+x+",y:"+y);
        for (let item of gitcalendar.positionplusdata) {
          let lenthx = x - item.x;
          let lenthy = y - item.y;
          //console.log(lenthx,lenthy);
          if (0 < lenthx && lenthx < lineminwitdh) {
            if (0 < lenthy && lenthy < lineminwitdh) {
              //console.log(item.date,item.count)
              document.querySelector('.angle-wrapper').style.display = 'block'
              gitcalendar.span1 = item.date;
              gitcalendar.span2 = item.count;
              gitcalendar.x = event.clientX - 100;
              gitcalendar.y = event.clientY - 60
            }
          }
          //if(0< x - item.x <lineminwitdh&&0< y - item.y <lineminwitdh){
          //console.log(item.count,item.date);
          //}
        }
      }
    }
  }
  //数据统计算法
  function addlastmonth() {
    if (gitcalendar.thisdayindex === 0) {
      thisweekcore(52);
      thisweekcore(51);
      thisweekcore(50);
      thisweekcore(49);
      thisweekcore(48);
      gitcalendar.thisweekdatacore += gitcalendar.firstdate[6].count;
      gitcalendar.amonthago = gitcalendar.firstdate[6].date
    } else {
      thisweekcore(52);
      thisweekcore(51);
      thisweekcore(50);
      thisweekcore(49);
      thisweek2core();
      gitcalendar.amonthago = gitcalendar.first2date[gitcalendar.thisdayindex - 1].date
    }
  };

  function thisweek2core() {
    for (let i = gitcalendar.thisdayindex - 1; i < gitcalendar.first2date.length; i++) {
      gitcalendar.thisweekdatacore += gitcalendar.first2date[i].count
    }
  };

  function thisweekcore(index) {
    for (let item of gitcalendar.data[index]) {
      gitcalendar.thisweekdatacore += item.count
    }
  };

  function addlastweek() {
    for (let item of gitcalendar.lastweek) {
      gitcalendar.weekdatacore += item.count
    }
  };

  function addbeforeweek() {
    for (let i = gitcalendar.thisdayindex; i < gitcalendar.beforeweek.length; i++) {
      gitcalendar.weekdatacore += gitcalendar.beforeweek[i].count
    }
  };

  function addweek(data) {
    if (gitcalendar.thisdayindex === 6) {
      gitcalendar.aweekago = gitcalendar.lastweek[0].date;
      addlastweek()
    } else {
      lastweek = data.contributions[51];
      gitcalendar.aweekago = lastweek[gitcalendar.thisdayindex + 1].date;
      addlastweek();
      addbeforeweek()
    }
  }

  fetch(githubapiurl)
    .then(data => data.json())
    .then(data => {
      gitcalendar.data = data.contributions;
      gitcalendar.total = data.total;
      gitcalendar.first2date = gitcalendar.data[48];
      gitcalendar.firstdate = gitcalendar.data[47];
      gitcalendar.firstweek = data.contributions[0];
      gitcalendar.lastweek = data.contributions[52];
      gitcalendar.beforeweek = data.contributions[51];
      gitcalendar.thisdayindex = gitcalendar.lastweek.length - 1;
      gitcalendar.thisday = gitcalendar.lastweek[gitcalendar.thisdayindex].date;
      gitcalendar.oneyearbeforeday = gitcalendar.firstweek[0].date;
      gitcalendar.monthindex = gitcalendar.thisday.substring(5, 7) * 1;
      gitcalendar.montharrbefore = gitcalendar.month.splice(gitcalendar.monthindex, 12 - gitcalendar.monthindex);
      gitcalendar.monthchange = gitcalendar.montharrbefore.concat(gitcalendar.month);
      addweek(data);
      addlastmonth();
      responsiveChart();
    })
    .catch(function(error) {
      console.log(error);
    });

  //手机版更换为svg绘制
  if (document.getElementById("gitcalendarcanvasbox").offsetWidth < 500) {
    gitcalendar.simplemode = false
  }

  //当改变窗口大小时重新绘制canvas
  window.onresize = function() {
    if (gitcalendar.simplemode) responsiveChart()
  }

  //解决滚动滑轮时出现的标签显示
  window.onscroll = function() {
    if (document.querySelector('.angle-wrapper')) {
      document.querySelector('.angle-wrapper').style.display = 'none'
    }
  };
```

## 新建 [Blogroot]\themes\butterfly\source\css\_layout\gitcalendar.styl:

```javascript
if hexo-config('gitcalendar.enable')
  .gitcalendar
    font-family SourceHanSans-Medium
    border 1px solid #DDDDDD
    border-radius 3px
    min-height 120px
    text-align center
    margin 0 auto
    border-width 0px
    width 100%
    display flex
    display -webkit-flex
    justify-content center
    align-items center
    flex-wrap wrap
    img
      &.spinner
        width 70px
        margin-top 50px
        min-height 70px

  .gitcalendar-graph text.wday,
  .gitcalendar-graph text.month
    font-size 10px
    fill #aaa

  .contrib-legend
    text-align right
    padding 0 14px 10px 0
    display inline-block
    float right
    .legend
      display inline-block
      list-style none
      margin 0 5px
      position relative
      bottom -1px
      padding 0
      li
        display inline-block
        width 10px
        height 10px

  .text-small
    font-size 12px
    color #767676

  .gitcalendar-graph
    padding 15px 0 0
    text-align center

  .contrib-column
    text-align center
    border-left 1px solid #ddd
    border-top 1px solid #ddd
    font-size 11px

  .contrib-column-first
    border-left 0

  .table-column
    padding 10px
    display table-cell
    width 33%
    vertical-align top

  .contrib-number
    font-weight 300
    line-height 1.3em
    font-size 24px
    display block

  .monospace
    text-align center
    color #000
    font-family monospace
    a
      color #1D75AB
      text-decoration none

  .contrib-footer
    font-size 11px
    padding 0 10px 12px
    text-align left
    width 100%
    box-sizing border-box
    height 26px

  .left
    &.text-muted
      float left
      margin-left 9px
      color #767676
      a
        color #4078c0
        text-decoration none

  .left.text-muted a:hover,
  .monospace a:hover
    text-decoration underline

  h2
    &.f4
      &.text-normal
        &.mb-3
          display none

  .float-left
    &.text-gray
      float left

  #user-activity-overview
    display none

  .day-tooltip
    white-space nowrap
    position absolute
    z-index 99999
    padding 10px
    font-size 12px
    color #959da5
    text-align center
    background rgba(0,0,0,.85)
    border-radius 3px
    display none
    pointer-events none
    strong
      color #dfe2e5
    &.is-visible
      display block
    &:after
      position absolute
      bottom -10px
      left 50%
      width 5px
      height 5px
      box-sizing border-box
      margin 0 0 0 -5px
      content " "
      border 5px solid transparent
      border-top-color rgba(0,0,0,.85)

  .position-relative
    width 100%
    padding-left 20px
    padding-right 20px

  @media screen and (max-width: 650px)
    .contrib-column
      display none

  .angle-wrapper
    z-index 9999
    display inline
    display none
    width 200px
    height 40px
    position relative
    padding 5px 0
    background rgba(0, 0, 0, 0.8)
    border-radius 8px
    text-align center
    color white
    span
      padding-bottom 1em
    &:before
      content ''
      width 0
      height 0
      border 10px solid transparent
      border-top-color rgba(0, 0, 0, 0.8)
      position absolute
      left 47.5%
      top 100%

  .angle-box
    position fixed
    padding 10px
```

## 修改 [Blogroot]\themes\butterfly\layout\index.pug, 引入 gitcalendar 结构：

```
  extends includes/layout.pug

  block content
    include ./includes/mixins/post-ui.pug
    #recent-posts.recent-posts
      if theme.gitcalendar.enable
        .recent-post-item(style='width:100%')
          !=partial('includes/gitcalendar', {}, {cache:theme.fragment_cache})
      +postUI
      include includes/pagination.pug
```

## 修改 [Blogroot]\themes\butterfly\layout\includes\additional-js.pug, 引入 vue 依赖和 gitcalendar 脚本，这里为了保证依赖顺序，必须把 vue 放在 gitcalendar-js 之前。同时这里为了便于适配 pjax 重载，需要把 gitcalendar-js.pug 放到 js-pjax 下。

vue 引入项配置（butterfly_v3.4.0+ 版本没有 jquery 这行，无需在意）：

````diff
  div
    script(src=url_for(theme.CDN.jquery))
+   script(src=url_for(theme.CDN.vue))
    script(src=url_for(theme.CDN.utils))
    script(src=url_for(theme.CDN.main))
````

gitcalendar-js 引入项配置:

````diff
  .js-pjax
    if theme.subtitle.enable && is_home() && theme.index_img !== false
      include ./third-party/subtitle.pug

    include ./third-party/math/index.pug

    if commentsJsLoad
      include ./third-party/comments/js.pug

    if theme.busuanzi.site_uv || theme.busuanzi.site_pv || theme.busuanzi.page_pv
      script(defer src=url_for(theme.CDN.busuanzi))
+   if theme.gitcalendar.enable
+     !=partial('includes/gitcalendar-js', {}, {cache:theme.fragment_cache})
````

## 修改 [Blogroot]\_config.butterfly.yml 添加 gitcalendar 配置项和 vue 的 CDN 链接：

添加 gitcalendar 配置项：

```yml
#gitcalendar
gitcalendar:
  enable: true
  simplemode: false
  #设为true时使用canvas绘制gitgitcalendar，
  #设为false时使用svg绘制gitgitcalendar
  #canvas：dom数少，但图像会发生模糊，自适应一般
  #svg：dom数多，图像清晰，自适应更佳
  user: Akilarlxh #这里填写你的github用户名
  apiurl: github-calendar-api.vercel.app
  # 以下色调选择喜欢的一行保留即可。其余注释。
  color: "['#e4dfd7', '#f9f4dc', '#f7e8aa', '#f7e8aa', '#f8df72', '#fcd217', '#fcc515', '#f28e16', '#fb8b05', '#d85916', '#f43e06']" #橘黄色调
  # color: "['#ebedf0', '#fdcdec', '#fc9bd9', '#fa6ac5', '#f838b2', '#f5089f', '#c4067e', '#92055e', '#540336', '#48022f', '#30021f']" #浅紫色调
  # color: "['#ebedf0', '#f0fff4', '#dcffe4', '#bef5cb', '#85e89d', '#34d058', '#28a745', '#22863a', '#176f2c', '#165c26', '#144620']" #翠绿色调
  # color: "['#ebedf0', '#f1f8ff', '#dbedff', '#c8e1ff', '#79b8ff', '#2188ff', '#0366d6', '#005cc5', '#044289', '#032f62', '#05264c']" #天青色调
```

添加 vue 的 CDN 链接

```diff
  # CDN
  # Don't modify the following settings unless you know how they work
  # 非必要請不要修改
  CDN:
    # main
    main_css: /css/index.css
    jquery: https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js
    main: /js/main.js
    utils: /js/utils.js
    # custom
+   vue: https://cdn.jsdelivr.net/npm/vue@2.6.11  # Veu.js依赖
```

7. `hexo clean && hexo g && hexo s` 即可查看预览。

> 转载自 Akilar https://akilar.top/posts/1f9c68c9/