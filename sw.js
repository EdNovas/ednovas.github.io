/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","5b92d576b6b53aa4fa65994c210565e5"],["/2020/11/29/clash-windows/index.html","db536c3c4a76f9c7880064fee3cbe0db"],["/2020/11/30/websites2/index.html","0697275201065b13fd22ff21f3f51168"],["/2020/12/04/iphone4s/index.html","7bbdee47664249f7a3cbb22304a320e6"],["/2020/12/04/onenote/index.html","30dbe192a7869ba4fd74524f4629a2a6"],["/2020/12/04/wesites1/index.html","14d60fce404ac4f62ead50bf4228d2a5"],["/2020/12/06/nokia808/index.html","faf587988e18cc0f52dbc96a97ac8f45"],["/2020/12/07/ipad1/index.html","e5804d9d443e72931e21d232d8de3d91"],["/2020/12/18/freesubscribes/index.html","0182d1b45c42ec023a8fe4800dc9e22d"],["/2020/12/19/musics/index.html","88fe929e87424628ef3168abe69b0659"],["/2020/12/19/shadowrocket/index.html","9aaf7d14d69b10a81c1fc47dd8a529f8"],["/2020/12/19/v2ray-windows/index.html","6eb5d695a00ce224c828ee63ebad8e01"],["/2020/12/19/v2rayng/index.html","3d7e34b7865e02554265d03d808d43dc"],["/2020/12/20/beoplay/index.html","0b49c5dd7b4e80513ec5661a2a1c01eb"],["/2020/12/20/订阅链接转换/index.html","9b1e427467dabee00d73ab7dd003ef33"],["/2020/12/21/chrome浏览器下载提速/index.html","68a700b9852277db15bfc21a1925f7a7"],["/2020/12/21/免费128线程并发下载xdown/index.html","ac04f062c4db4ef9b53e375f2f6e0546"],["/2020/12/21/免费32线程下载软件ndm/index.html","2ea03e99f0bac0066bf5c850d05b7925"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","ca876683d90416bec388d4743af0560b"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","2625b79242a3ed1b9edf46bb84fc6243"],["/2020/12/21/广告怎么知道我在想什么/index.html","185feb11f4cb3198753fb3b43b1855bb"],["/2020/12/21/无名·引子（小说试写）/index.html","5509e19d95f9524c6a7df5f4290e832f"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","eae1ad0f8d11b1538a82a2db3272f345"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","1223f8dc55d9433cbefe1406e8a24c24"],["/2020/12/21/高速轻量下载器aria2/index.html","98e5f70a06a5606dde77813ee1a44b63"],["/2020/12/22/2020-cee-roo/index.html","a9fae86da4904b582e9e1adfd47c2049"],["/2020/12/22/firefox插件、github、steam富强/index.html","741d59392758c4ce7cf05eb03843871f"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","c6ce8f844945d2c83822eda5ad6dc446"],["/2020/12/26/python-day-1/index.html","2d100a8e0dca041ce3941f4fc7521a3c"],["/2020/12/26/python-day-2/index.html","8ed57551c2051766200af2fa18cf031a"],["/2020/12/26/度盘不限速下载方式一赏/index.html","488a16d85aaccafe97f711b8a494ed50"],["/2020/12/26/添加开机自启软件/index.html","936d572335d2847bf241c145e6cce050"],["/2020/12/26/电脑端截图方式一赏/index.html","120817dcf4dc85205e146e3f3c6d7a6c"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","033a8a05cce9c102859384d9a22b82d1"],["/2020/12/27/最安全的浏览器tor/index.html","79bbd2ead5d78d0cb8593808ae6b371f"],["/2020/12/27/网易云刷等级和听歌数量/index.html","a6b1ea5a16eddfcd848abfdb0ad88bbe"],["/2020/12/28/freenom申请免费域名/index.html","ad38018c50d1420932bf1ac4fc42f16f"],["/2020/12/31/机场/index.html","1b3bcb9b27095a03a7ab36ce081de4de"],["/2021/01/01/M1/index.html","5e763af1f19b3d60d813ec21eef866f5"],["/2021/01/01/compress/index.html","046a32f12f92e13eef8c50c22b1d8c38"],["/2021/01/01/infinityfree/index.html","4504868cae2f7f7e2f6edb2f5b2f3a2a"],["/2021/01/01/硬核翻墙/index.html","7dcc7c53d1ca2baaaeb8e37c54438493"],["/2021/01/02/qq/index.html","c4b2279619350a4ef03c9e8dcf221dbc"],["/2021/01/03/netch/index.html","c78f8c926ae11097070641c8cdba66d4"],["/2021/01/03/waifu2x/index.html","a956eeca787bd1f29a17b76dee6b1c77"],["/2021/01/04/ads/index.html","6feab15510e4abf4deeafe1df09e14cf"],["/2021/01/04/games/index.html","5d70a7c71b46fd8db236fc601184601a"],["/2021/01/04/heroku/index.html","054e68a5ea0442265863935f918758aa"],["/2021/01/06/movies/index.html","190ad4db6164b607d8ca40be75ff2d2c"],["/2021/01/07/google2020/index.html","dad44c57814949cf350d3c36ca317088"],["/2021/01/07/lucky/index.html","491bdbe4bb2d784aed27cfb8e3213b0a"],["/2021/01/07/spotify/index.html","899bca6444ac75085fb64cfa584affc5"],["/2021/01/07/thunder/index.html","191635a2ff32b81ddb33cc3cb4f3806d"],["/2021/01/08/adguardhome/index.html","4b314c4dd5680edf42e392e4924f3dd5"],["/2021/01/10/IBM/index.html","3ed36c441f90ebc14272e4137d9f0326"],["/2021/01/10/potplayer/index.html","a0fd9e276f397acb8dde6f66fed46133"],["/2021/01/10/sakuraanime/index.html","9e48884d85fe62a1d05d55dca316a907"],["/2021/01/10/美剧星球/index.html","8e9941d6a2d0a743102c390f98275ca4"],["/2021/01/12/telegraph/index.html","d6cec9a1e3fb3760421c11f6648adca7"],["/2021/01/14/comics/index.html","cb7582a6fbd60e82603b34fdcb87f243"],["/2021/01/14/ftp/index.html","12945a9db482c1d21898ae1ae5a4018f"],["/2021/01/14/oraclecloud/index.html","262865186a1b424fd44bc5935c3b7474"],["/2021/01/14/porkbun/index.html","328bd4b5aa7f7cf1249bcd8c4db42828"],["/2021/01/14/powertoys/index.html","dd47e7f53a856e5fcf151ad82c15a5bb"],["/2021/01/14/taptap/index.html","97aa5f04a47ac4c49445ef53ac4c1d54"],["/2021/01/14/ubuntuvsftp/index.html","9768d8159f079911f4ced36240e189ca"],["/2021/01/14/小说/index.html","0a419a77394b67dfd4e45727f5c42770"],["/2021/01/15/freeproxies/index.html","af96c2e0d26960e6125b34fb534bb204"],["/2021/01/15/incaseformat/index.html","abd2695c70261f34f3a2e0eb58299262"],["/2021/01/16/euserv/index.html","c6644710d9e721c5d2aac49ea1ac66ea"],["/2021/01/16/winxray/index.html","52e48506c0e97070e2149f35b9aae491"],["/2021/01/18/qqreadhistory/index.html","03f9c21aaadb74bf8eb95cc3833153c1"],["/2021/01/18/qqrevoke/index.html","da3096b34c533345ba1c95a989cf5885"],["/2021/01/19/freevpn/index.html","bb57d5b3cec9e1d1dd50b7a2c4985825"],["/2021/01/20/browsertrack/index.html","2ff8efa1bb47fba39ef47544a93c9c59"],["/2021/01/20/v2ui/index.html","d3ebc5ed8ecd72c0ad980c01613b3c7f"],["/2021/01/21/failedtoconnect/index.html","7e3550972bd735c4926aac87fc1690ba"],["/2021/01/21/gitcalendar/index.html","35a291138910ccb745fec7660b3ff679"],["/2021/01/21/markdownformat/index.html","077b82cf6d3cf60e65601b6cb1fb937a"],["/2021/01/21/markdowntable/index.html","c3bf7c67fedf8ac282ed81c253bc50b2"],["/2021/01/21/vercel/index.html","c4836f9b12f8ff319edc59e54e66ddbb"],["/2021/01/22/hardware/index.html","b1c43fa24d5e5dcc5e368ff727b1d3c1"],["/2021/01/22/muviz/index.html","aeb79d537df6f4834cea5fc74d0cd6b0"],["/2021/01/22/randomapi/index.html","b3a198090766c6e4253d83a75b9bb343"],["/2021/01/22/searchimages/index.html","08f1817e45d5036af27b53469b87a3a9"],["/2021/01/23/RX文件管理器/index.html","c70b4b160f230b0e30f75e9f9043191e"],["/2021/01/23/chromeflag/index.html","2fc34cbb5762b6be89f111c8eed07a2b"],["/2021/01/23/qttabbar/index.html","50cc256ddf0dfbdf6c0a85a6aac5317a"],["/2021/01/24/githubspeedup/index.html","467af2023736d8bfd6ce5f94dac7b372"],["/2021/01/24/jsdelivr/index.html","e45fd842c8e1d31b2e2e5280f204d37b"],["/2021/01/25/note/index.html","620c14e04ff078372bb81c959cca5ece"],["/2021/01/25/soul/index.html","916990c1c862540153362b0c8dfad154"],["/2021/01/26/herokuxray/index.html","9bb032d8560d1a8bfc2ee271cf09e779"],["/2021/01/27/proxypool/index.html","c369087cf7251f14dee05ddc8b7c00da"],["/2021/01/27/tracker/index.html","50ae399b9dbf3a8d7f460fc4ba0ba5e3"],["/2021/01/30/pandownphp/index.html","87f3900583c4f3ab37ae919d7f7a75c3"],["/2021/01/31/newgroup/index.html","dc7443fe92fbf3ba3dce7b64cd775028"],["/2021/02/01/clashlanguage/index.html","11f46515d6ee8a56e31fdba788d821ae"],["/2021/02/01/encrypt/index.html","17056bdef1f41dd195b7d576286d8597"],["/2021/02/01/footermotion/index.html","d6d022c21943fb3afa4d027199bdc8fe"],["/2021/02/01/gitter/index.html","323f2fd2e0a36b0cc9716bdde2b780ba"],["/2021/02/01/pixivtop50/index.html","9f3066529af800d85957b487861169a5"],["/2021/02/01/scrollbar/index.html","637aa2160516125c3c2e96875acb59bc"],["/2021/02/02/clover/index.html","c4767c5567e62136e5b18c1f319b28c6"],["/2021/02/02/maya/index.html","d97e57158930709fa3cb96b5c2daed21"],["/2021/02/02/speedcontroller/index.html","3174855ea0b912f4bbfc08f545b32f55"],["/2021/02/02/yesmusicplayer/index.html","9142a7b1c0306f675704652c2229f1a5"],["/2021/02/03/lenovoonelite/index.html","0b875d00f3e6dea066fb01121830845e"],["/2021/02/03/skipads/index.html","9c15680458a977173c9ca9c4983d49c6"],["/2021/02/04/picseed/index.html","77b9a82cff021c9cc724e8c973f16215"],["/2021/02/04/renren/index.html","08cbff6ec7b88b9c8a940535de4ab151"],["/2021/02/04/serverstress/index.html","bca084f146aab5e2e373c295984125f3"],["/2021/02/04/wikipediazh/index.html","c3a66c8c45e0a8229e1ca2629d77ead8"],["/2021/02/05/googlevoice/index.html","73f002b1d1b942b1cf2d0c906deae4b3"],["/2021/02/06/clashconnection/index.html","b04b83304e676c00d7062150a85fccd7"],["/2021/02/06/gvtransfer/index.html","20de1a4ec828446603b1251fdf257687"],["/2021/02/06/todesk/index.html","cf780a9ace8ee16f56bf692fcb86a0c4"],["/2021/02/06/vpnblacklist/index.html","4249336dd4f223af5d68f8ecc7dbdd4a"],["/2021/02/07/mklink/index.html","df8cfc0435b13567d8e68d0dabf1d438"],["/2021/02/07/speedtest/index.html","b75ea6fad3cdaba36f55412f2cf39886"],["/2021/02/07/translate/index.html","7f29ecd6c5200565d7fd330d6358a3e8"],["/2021/02/08/ewomail/index.html","31eae596d4c2c8a114f2d40eea5a1459"],["/2021/02/10/officee5/index.html","b87420267d3f213209b0a9d7f6480953"],["/2021/02/10/raidrive/index.html","bcac68087d6fd53639845ae14416e4fc"],["/2021/02/13/e5sub/index.html","65bc8aa3a3505d35dbcaae526116944d"],["/2021/02/14/screen/index.html","b07fbd964a97ea3eefada13b536cde54"],["/2021/02/15/clashtun/index.html","fd8c973db09db5f57023d6883452c0da"],["/2021/02/15/messageboom/index.html","9af3612dea58e8913057f5c873333cec"],["/2021/02/15/oneindex/index.html","227833662f8a177896af2806cb226ea7"],["/404.html","0e10c4115ccac3cc68a1d638ff7ea1e1"],["/archives/2020/11/index.html","fac25ddfb24f544ff0b1fc830bcaa395"],["/archives/2020/12/index.html","92cad64e7607cdee1bbe470c349e2436"],["/archives/2020/12/page/2/index.html","b7817f27aeb4c93358922f0894316f2c"],["/archives/2020/12/page/3/index.html","3bf8d8ded3a4126addcfc2804fa40b2d"],["/archives/2020/index.html","80b7c1c5b485d6b3e2454440d63c78c6"],["/archives/2020/page/2/index.html","055dc8d54f3c8f1af53145365ba41a36"],["/archives/2020/page/3/index.html","fbd8754363ae65ef2c4e0ebabcfdaecf"],["/archives/2021/01/index.html","2a742b0f9eec5ae249733bad7c9ec15a"],["/archives/2021/01/page/2/index.html","63da294bfd15cc6e5b8449b062704dce"],["/archives/2021/01/page/3/index.html","47fdd13c94e29c598f34eb4b98a00146"],["/archives/2021/01/page/4/index.html","d698d9012cf94d096996649bbcb09db7"],["/archives/2021/02/index.html","20fa9a8e81929ce04fd50b107f203ea0"],["/archives/2021/02/page/2/index.html","64035e59857859e3cd4048338d9c6ad3"],["/archives/2021/02/page/3/index.html","0b7382cff88e93784ffccfddab558723"],["/archives/2021/index.html","25a305b4b2890d293b3d1535f8b0dea1"],["/archives/2021/page/2/index.html","2e1e1b2231330f5f8fa8ad1709adc2dd"],["/archives/2021/page/3/index.html","464bd423814e8b27667fbc207449a6a1"],["/archives/2021/page/4/index.html","8ddf072d01b63edc805bd86ec03444c1"],["/archives/2021/page/5/index.html","48072ba6dd95d6a7894ebdb9530b2cec"],["/archives/2021/page/6/index.html","56b0d7c5b1f42634dbea2cf79381908b"],["/archives/2021/page/7/index.html","c580634e46e64ef6fb6eb602657f124f"],["/archives/index.html","b5d72d7149f5959e31c483b1569c43af"],["/archives/page/2/index.html","bbd5a66244e67abbce00909d284f0355"],["/archives/page/3/index.html","d32e0a8985f823b8a3658bfb13902885"],["/archives/page/4/index.html","0844953e93c474160a54fd79c07c109d"],["/archives/page/5/index.html","78fe25a1a58a3446cf0ee6897aaba001"],["/archives/page/6/index.html","5f4bb934277291f06dca64b82dee31dd"],["/archives/page/7/index.html","bebf945ddf8dfe910ae8f7deb1a17e43"],["/archives/page/8/index.html","ccd3de02964f93229d91d4062422f890"],["/archives/page/9/index.html","7578072fe64cda3e1daad3841ae27d84"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","14539395dad688cc2638be53cb21fe63"],["/categories/index.html","de912d6a010849189e6255ce0153d57d"],["/categories/下载/index.html","6c39b88a55cd4c8d0e29289fd71794db"],["/categories/安全/index.html","cb85e0c08b972b52400a4fe181a88fdf"],["/categories/建站/index.html","83db02ca04ef7f29d057b72ce081696c"],["/categories/杂/index.html","769df7b1d7fb0b71d22e94813da300fe"],["/categories/杂/page/2/index.html","31ecfb8ee513ef42c0610838c107ebb1"],["/categories/测评/index.html","9331c140b5b6ab4cdeead724d1d93dbf"],["/categories/科学上网/index.html","fe23e1701d9fbbc446082e2b8dc7ea53"],["/categories/科学上网/page/2/index.html","02eb3c6a4ef542702197934bc059c6bf"],["/categories/编程/index.html","0964c6e28bc71744601b02470d4b0267"],["/categories/网站/index.html","f21a565642eae5bc7bd0dcb3576210a9"],["/categories/网站/page/2/index.html","f0542982e79571150ebc57be8535f5bf"],["/categories/软件/index.html","8fcee6e9c085ae3c22e200d1ac605b66"],["/categories/软件/page/2/index.html","64fee869efafaa15855352e617cc28da"],["/categories/软件/page/3/index.html","875910fa1770e2ecfbc64a7069740a60"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","fd315596b80b2f6db5984f089d031c7d"],["/css/scrollbar.css","126673ef644daf0a86bdee35bef343bb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","487338d4aba6a4863125bf74d33f286a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","6d5df269cebd5a54418ecb95d6fcc67e"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","af79756dbba7b7afd62907a5c1e8af37"],["/ios/index.html","4f7379973e1d55d2be2950103eaa1717"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/2/index.html","ee3667237a9d143376c58b8d96b464ef"],["/page/3/index.html","41ce8f0216e21bfeaad16b84bba9a5c8"],["/page/4/index.html","6c6c7890bc4526be5f75f66d4a56cbc1"],["/page/5/index.html","44d47566e8bfdd3156646e9f74364c12"],["/page/6/index.html","8fcd642afe91c4ed28f3b5f146d6e1bb"],["/page/7/index.html","1b1b7b009c7d621645ccf0c20c80e17c"],["/page/8/index.html","e737927bc74dd2fa258d67348a0fda56"],["/page/9/index.html","8c05bd75ac4c321505dbda6a0b22dc26"],["/payment/index.html","dace72b078e80b42dca298a32a56144d"],["/privacy-policy/index.html","523443aafdc94732bf0db744cb24af44"],["/search.xml","c1e482ae6b3d0c9a854f21708b580e67"],["/sitemap.xml","f6ceef61483dd7aaa550ab09cd885f10"],["/sw-register.js","0808cd6b8f00ad866f3a757d4e749875"],["/tags/5t/index.html","f5450996d749eabb50f9852cbb1ed482"],["/tags/Clash/index.html","fad12fc95762f4d0c620c04482b96c92"],["/tags/Clover/index.html","9994831f88150b502b4fc8d32e5ea8c4"],["/tags/E5/index.html","8ee94e815d60c5a0ab03a3e4e40c1641"],["/tags/FTP/index.html","128fca29e91afe7bb5c9065be50a73b0"],["/tags/GitHub/index.html","b0aa99654f2d1c8570ede5df904a57f6"],["/tags/Heroku/index.html","2a14b6eaed356ac7c8e8b809564738e6"],["/tags/Hexo/index.html","f51343ac467659fc68cf16e87abe06d3"],["/tags/Lenovo/index.html","4d5172c17558c2de9f331cd630e73d8f"],["/tags/Oneindex/index.html","fa97c15240da274f46929fc46b577eaa"],["/tags/QQ/index.html","d01f5558894c5ff59aede31c1bb68e46"],["/tags/QTTabbar/index.html","91efaf8d006bebab084434f81c972179"],["/tags/RX文件管理器/index.html","34d31b8052720151167784ef53090055"],["/tags/Todesk/index.html","b434b37f1e68539ba25ed0ee9ce59543"],["/tags/Vercel/index.html","2b33b04e2919e0421b83e407bff6a11f"],["/tags/ads/index.html","54cd71c11a2ae3ab7ad31e0a6e13e9a4"],["/tags/api/index.html","b42e8defb90221b2619fafb5063e1f3e"],["/tags/app/index.html","3ad4ddccc02ddc238f98f84ae93c43a2"],["/tags/blacklist/index.html","13862c5401f0ce6f8f935633f6493c37"],["/tags/butterfly/index.html","5887dc54ddd7f6249a7969367fc6a551"],["/tags/chrome/index.html","b82b60bf86e1933a2591c82ffaee1f06"],["/tags/cloudflare/index.html","788024404b4f6a2f6a22bd6f648052e8"],["/tags/cmd/index.html","6253bbc76e1fc9fa7b681cc65e5f5762"],["/tags/c盘/index.html","3b9d05a6be6e460e1346cc37b4678ba1"],["/tags/email/index.html","062f36ceda2cd5bdd851e9fa52447c6e"],["/tags/ewomail/index.html","c89aa0c13f7483024fbd5556fe56d2e9"],["/tags/flags/index.html","89ea0850f32c0ea336a729a89cb83c1a"],["/tags/footer，页脚/index.html","4a25356963cdae4366b3dc22b3618fd4"],["/tags/galgame/index.html","2ee60fef6b1e61e006e81ea429aeb4d5"],["/tags/git/index.html","650a57c7663a839c9e932b72f6463e31"],["/tags/gitcalendar/index.html","cf9e020237813e20c5def1e3c32c47d9"],["/tags/google-voice/index.html","7f82cf4a42f979d4b18b4d73cfa83d62"],["/tags/gv/index.html","cd9d59eb161badd54fb5f51ffa53e745"],["/tags/index-1.html","c1482719721512e9f48ab0839b03e836"],["/tags/index.html","c2eabbec5339eaa774d96ebc20317cf9"],["/tags/jsdelivr/index.html","8c63f911365e64d65a86fe0dde8a3145"],["/tags/linux/index.html","ef8475bc20f0ef8a1a132b367f3f2030"],["/tags/markdown/index.html","a4db159ba5ea1b59caaf9409119fc76d"],["/tags/maya/index.html","6a65c53be9c0f6b227404e0ef19e7461"],["/tags/mklink/index.html","10aa10e85c7a31930648b8933bb8930d"],["/tags/office-e5/index.html","f4a2e4da2b57de8983e05931ee8fec47"],["/tags/onedrive/index.html","9fdd14839830015c24d0ade790c498fa"],["/tags/picGO/index.html","226a27d6eb4af890d178957f5c59e18c"],["/tags/pixiv/index.html","822760a403e3558f5e3b6a38bed863d1"],["/tags/proxypool/index.html","9b06d7cbed0951156299402f7aebf35f"],["/tags/qbitorrent/index.html","0e1d1099c4a927f8ce04f41c4355cf82"],["/tags/raidrive/index.html","e0f64ec3334b160e5870e2891f8f5ed0"],["/tags/screen/index.html","48063665387a8139f7016477c92f9fc3"],["/tags/speedtest/index.html","d0d562a72491790267b7c391566385c6"],["/tags/tap/index.html","93ed9fd97a870ada4122cbfbd11b90ed"],["/tags/top50/index.html","c38436edf7f7d59cdb2c17aa5f6d7a91"],["/tags/tracker/index.html","d44976152dce633b321009b29225a4e8"],["/tags/translate/index.html","78a03ce59c91ed90f7a37949143e6997"],["/tags/translater/index.html","6a62fa66ae1ca7a5d33a7b8420fc773a"],["/tags/tun/index.html","44b2a48c6733607d529c228d5c3f86d1"],["/tags/v2ray/index.html","4abe146aaee99fc28c8c6a2defc7a8f6"],["/tags/vpn/index.html","aee1f9ef08d062711f484967e2f28640"],["/tags/vps/index.html","34dafb7c37491dafe7901605102ca6bf"],["/tags/windows/index.html","029774124ea05dc9b7694df8506257b3"],["/tags/windows端/index.html","0bb3e6a8952e24dd91851d4776ef0353"],["/tags/xray/index.html","479516aea9fc250c9b7087b1b677eb8f"],["/tags/下载/index.html","dc4dcc65d90904943e9ba122bcfdb825"],["/tags/不限速/index.html","e726ef3f4190e33525d2b24df7082802"],["/tags/个人网盘/index.html","ee8aa398b73e28f94be8f13282545b54"],["/tags/主题/index.html","a442057ed9a8be99f28e6d984545f606"],["/tags/云便签/index.html","f739d18357ff0e4d9565a1e0d3e78e15"],["/tags/云盘/index.html","3bceeaedb900b9946fd06f23f5af4db2"],["/tags/人人/index.html","8d700e73a925798c7377ae3cb0642b77"],["/tags/代理/index.html","e4eff253fc0ca94c86636b28157b0aff"],["/tags/代码/index.html","3af34898c9a5d3f15a0ff84e59d0b6d9"],["/tags/优选IP/index.html","a410d7c56b989e1f31f03efe045ef0aa"],["/tags/便签/index.html","929fe5649bf97ce80b454e529a05de42"],["/tags/保号/index.html","6673a5fcb7faea93471336bf0b207a9a"],["/tags/免费/index.html","2e465377119e6c2104f7c2916a4a99ce"],["/tags/免费节点/index.html","0efb8572cb40ad901ddb3bf0685d5bf6"],["/tags/加密/index.html","b35def04aac015c548dd93f76be1b09c"],["/tags/动画/index.html","eb4f3cb97919c4ecc3504628c4a4e816"],["/tags/博客/index.html","82c3d11d0f3b6e009a31e3d69e542ff7"],["/tags/历史记录/index.html","fb1217e0d17598afaacfa4dda3fcb1e8"],["/tags/压力/index.html","3646bae25364c9aa376df18b11607ae1"],["/tags/压缩包/index.html","8b432fe7ec94bda10b1df18334e50167"],["/tags/反代/index.html","7acb1644230ff86ff53f0ca2b4799e01"],["/tags/可视化/index.html","e3e56bb3d1ac31fcd37c7f7177bb7557"],["/tags/命令/index.html","dba14cc0b122ebaa3a36c53ed482e365"],["/tags/图床/index.html","eec95222cc9f0c0943a540644948d5e9"],["/tags/图片/index.html","b8acc363d73c968558a95fb9349bb5ff"],["/tags/域名/index.html","5b3fb17b15fa847bc7bbd818ee331433"],["/tags/多标签/index.html","86b51d91b66f1043efd8b26dea7b6ae0"],["/tags/存储/index.html","2356f7ff6f9633ea00e9216d532a3931"],["/tags/安全/index.html","58855c80f093e24f2e518fcf1b8a22ca"],["/tags/安卓/index.html","6a621b3223b5ed5762a7034fcd2db55d"],["/tags/宝塔/index.html","2b6ffa01e87b713126cefa7f385c9d6f"],["/tags/广告/index.html","f54750163281897e9082ca793d81e74c"],["/tags/建站/index.html","f9dc0f0c9a7998b557757d8d80113365"],["/tags/影视/index.html","ab21c318417bda8afb28e632d9a33280"],["/tags/快速启动/index.html","a9de96ac6f213a0e0ce9880721e8b847"],["/tags/手机/index.html","e27d44bf0d02919d11655fdbbb0f6190"],["/tags/托管/index.html","4e41791d9ce13373c59c8cbfc1a09b25"],["/tags/抓取/index.html","a10592c47ab87f2ae0c313f15a6ff4a5"],["/tags/投屏/index.html","d71b911684fd20783a04e86822d2dc97"],["/tags/拓展功能/index.html","3ad7f92f564e66a2bde0f9a321fecb30"],["/tags/挂载/index.html","9f181b62ee054cb5ae306b67b9c987bb"],["/tags/指纹/index.html","d82d5a260834300e79e09679df0205cf"],["/tags/接口/index.html","62a00bb59f853aec26ecbabb3d493d40"],["/tags/提取图片/index.html","59f1e72a79f987cd1128043b38467e26"],["/tags/插件/index.html","d04fad1877f5d0e7b93df9b5e36e7371"],["/tags/搜图/index.html","cf03c0ce0e9b4592c970d87fcc2fa02c"],["/tags/搭建/index.html","0a0b11534038c91405105a0bd19e37b8"],["/tags/撤回/index.html","43f08250f72448e778097856f8b760b5"],["/tags/播放器/index.html","daf8207b3c8c9310391c6263a706c66c"],["/tags/效率/index.html","deb68850da13296a1fa7ff5da1b179cb"],["/tags/日历/index.html","f7d0f0207bdf2b10767a14a829e2a0a7"],["/tags/服务器/index.html","c36bba6ea680ceb011979bb25697dc44"],["/tags/桌面/index.html","b9e0257060bdb440f1f496a7eee89798"],["/tags/梯子/index.html","bbddaebf02a8646a94949cdd98f8400b"],["/tags/检测工具/index.html","9b21cf7270e7bf07c751a7f30a230d72"],["/tags/汉化/index.html","2d9716e495419d34a3e74d1647c65cb1"],["/tags/测压/index.html","aa9d492de405e00c52c2b2965c42f6bc"],["/tags/测速/index.html","b9094c5f6504e8e4e481754bb8fc93ce"],["/tags/浏览器/index.html","75c27a2d6e57a0f507d1d1d186a2b096"],["/tags/清理/index.html","3943b1f6eeb68068fae1aeee1577ee4e"],["/tags/滚动条/index.html","10e478d1be36c82583ceed0e9f36fc6c"],["/tags/电影/index.html","7e52c1501b156188d1e71b1acafb474c"],["/tags/电视剧/index.html","4ad363c6feb51d4d113b9f2e58fc6bd1"],["/tags/白嫖/index.html","074a3ea90705d7a874c185d784741e7a"],["/tags/百度/index.html","c687dddea6bf72f81a1101f3e8d73d8d"],["/tags/百度云盘/index.html","193262cec57f77f10cd3eacc339528a2"],["/tags/百科/index.html","ee018fabef3be140bc2cc9b7a4e0393c"],["/tags/短信/index.html","c79990e856d9017ca71908aac322ec8f"],["/tags/硬件/index.html","abbd526254ed2d85f22c0df4fb584540"],["/tags/科学上网/index.html","fa05ecf9c0ccf1dfc1dc07226dc9879e"],["/tags/空间/index.html","f041b4836df12ed5820bdcee7bf70873"],["/tags/笔记/index.html","4b13e7743d061f8ff7bd0637e2fe980b"],["/tags/简洁/index.html","fc06e9956d00fb2751bfb289536e3eea"],["/tags/简约/index.html","ecbeb351a87f143269181bdf25fb13b1"],["/tags/维基/index.html","e8f536a8ce649946876ac52823602249"],["/tags/网易云/index.html","1ee8613077cba49bd981639adb1b80a2"],["/tags/网盘/index.html","3351aa4a9bede3fc71faec55c5dbda59"],["/tags/网站/index.html","4a9fb65d2cac2dbf7cffb3a3dabd0b95"],["/tags/美化/index.html","2520165a8d81adf4ee673cec887a2885"],["/tags/翻墙/index.html","0494677eae70c922885e6e1eaecf960f"],["/tags/翻译/index.html","0bd2fa4e861edfc9f0635315fbbd5400"],["/tags/翻译器/index.html","f332fb053df8d6da98fdbbc4510ff912"],["/tags/聊天室/index.html","43f340f8c95b0be9d0b382a645b26c30"],["/tags/联想/index.html","0e0a087cc96904fa92b96432b4180211"],["/tags/节点/index.html","09e994be6885690e8e587af3e3ab5ae4"],["/tags/虚拟手机号/index.html","8a5670b7f11c4193682f3a67af664428"],["/tags/补丁/index.html","8cda5d1194fef92ee27f4cf757f801d2"],["/tags/视频/index.html","b8f979977f49cb225c8cfdabf7070c7b"],["/tags/解析/index.html","3735fc73c8592a73b51b9fedca701fed"],["/tags/订阅链接/index.html","e877a33d9bc4308eff4f6963c353536b"],["/tags/记录/index.html","3638bdbec5a3101f0117045c4ff9450b"],["/tags/识图/index.html","75e44c86d36fee968c374adcfa2f5488"],["/tags/语言/index.html","caa7a0c96aefa5f0f3f1e41a0232d3d5"],["/tags/资源管理器/index.html","2018a1c3d9b4a2b83ecdc051ba2dfb64"],["/tags/转移/index.html","96b7afba1bbb8b5c3e299621f867120a"],["/tags/软件/index.html","d285279756d0367f056b6a8f41ff2958"],["/tags/轰炸/index.html","b7072f237d1f2168aec37541d439c688"],["/tags/远程控制/index.html","e7f1d1a70f08b90ccb4502c60518f138"],["/tags/连接/index.html","62485baca427df09f058c6d60eb68aff"],["/tags/追踪/index.html","6630934fcc8f4d8c3b92bd1a5bde6a2a"],["/tags/速度/index.html","4ddd3f4feed9e0885530b9b2a7ec8bfb"],["/tags/邮箱/index.html","9cd344ceaceeab222ed9d42a4f1236e4"],["/tags/酷炫/index.html","f428785b0983c6a1efc893493e37f6a7"],["/tags/钓鱼/index.html","2734bcec87293fa8adbc6fd423060ba6"],["/tags/镜像/index.html","455fed20b6a4ec942f659235a9c4af27"],["/tags/随机/index.html","a2ea4a97a55b29c5b30a0991d54ae960"],["/tags/隐藏/index.html","4812c0e3ed660df364634f4cafcc9010"],["/tags/面板/index.html","7716774bdab5465bb3ed654074971756"],["/tags/音乐/index.html","218558c03a4f7a5a4c74719e5fba5393"],["/tags/高颜值/index.html","0b96ecef041a361d85d20d5ccabb2c7f"],["/tags/魔改/index.html","515914e92c4414ff035015ef399c2f7b"],["/tags/黑名单/index.html","5277bac0b2437e040a6f44f599f061f3"],["/urls/index.html","2a46bdf48adfe72990db5cbac502c8c6"],["/vps/index.html","bcf55ed023c60753194098b7aaa265ed"],["/支持/index.html","5c5708cb994848f6bec06b94513135f4"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
