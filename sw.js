/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","fe09302896744e3283f77f252b20db48"],["/2020/11/29/clash-windows/index.html","b04f36ff12280bdbe466bbf161308dd2"],["/2020/11/30/websites2/index.html","f8b01269b6bf05ca3f823c50f6d913aa"],["/2020/12/04/iphone4s/index.html","0a8100b5c62a161af073020c1a7997a1"],["/2020/12/04/onenote/index.html","17349a46fbaeb73a8be32ec9e39768eb"],["/2020/12/04/wesites1/index.html","f6604a02aa64befdda3c93503c846f39"],["/2020/12/06/nokia808/index.html","77d951c087f5bb6366cef8d839e6d9b6"],["/2020/12/07/ipad1/index.html","77ffb40e57af1ef983cc920042ed9166"],["/2020/12/18/freesubscribes/index.html","e9e533d0c1f3c4e833f98c35156eb8fb"],["/2020/12/19/musics/index.html","8fcf576130ebe362b3854bcfca26df2e"],["/2020/12/19/shadowrocket/index.html","aa70df1599f9f9b649cd65681d387671"],["/2020/12/19/v2ray-windows/index.html","50331dce0e46c77abe9132b867a17f50"],["/2020/12/19/v2rayng/index.html","77f88c84dc9ce798da7cf60ac525cebd"],["/2020/12/20/beoplay/index.html","c24ffae4d8b8c07aa06346d3bb296f00"],["/2020/12/20/订阅链接转换/index.html","9908c85f06d557a7a7e9de75ad9a3516"],["/2020/12/21/chrome浏览器下载提速/index.html","b5655975e9b9bbbce6cdf2f01b113f8a"],["/2020/12/21/免费128线程并发下载xdown/index.html","e5de6ebfec26b5010c9bc6028cacbd76"],["/2020/12/21/免费32线程下载软件ndm/index.html","02615e3601019bc72b880af8ee804705"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","ac76c69c9225d1ebd4e960b5e0e6fc51"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","4373c2f026e0dfc96e45f486236d5692"],["/2020/12/21/广告怎么知道我在想什么/index.html","56950efa1557c2df04eb4a7151936f3f"],["/2020/12/21/无名·引子（小说试写）/index.html","39553f1ed291575c0daa4d48567d89d1"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","3bc661b1be163b57306a957f448d4263"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","4fc75cb33bc91e29304b961977d8d27c"],["/2020/12/21/高速轻量下载器aria2/index.html","a9aab74697de606edb7b4b5799d454fe"],["/2020/12/22/2020-cee-roo/index.html","1740c65d60dceac964a45dfd7fc67ad2"],["/2020/12/22/firefox插件、github、steam富强/index.html","3ce03598bd458fd4827f0befd16bcfe5"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","3ffef4a1c29c506aee167b31fe029b17"],["/2020/12/26/python-day-1/index.html","18106684dd73107375225c96f005ef86"],["/2020/12/26/python-day-2/index.html","8f37b742454f48f8b863bf120f6e5bd5"],["/2020/12/26/度盘不限速下载方式一赏/index.html","4972255665a7fbea62e1765e7b452e7b"],["/2020/12/26/添加开机自启软件/index.html","3fb7f1cf546253a9cc6785f7faf7930e"],["/2020/12/26/电脑端截图方式一赏/index.html","7caca36111ee6b4dcf6cfc295ead22cc"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","3717b8f19b7be954ccddcad22474c968"],["/2020/12/27/最安全的浏览器tor/index.html","8d64035b0f2c55023df7ae12cba8806a"],["/2020/12/27/网易云刷等级和听歌数量/index.html","acee7b4a10961b8ea788557fcc9f780c"],["/2020/12/28/freenom申请免费域名/index.html","3b98dd3050b552ca03dd699e50e44fe0"],["/2020/12/31/机场/index.html","0ab785c7477e765e46e1e1ffd8fb39e8"],["/2021/01/01/M1/index.html","3dd2ab7b9c99e970659072adcfc8980c"],["/2021/01/01/compress/index.html","c1f0b45c8784dc483c8797fd7d865ff4"],["/2021/01/01/infinityfree/index.html","6cc65b6ca5013b05f53d6cd93f892282"],["/2021/01/01/硬核翻墙/index.html","2867af5656e05e0540cf7ef9a9fd3b42"],["/2021/01/02/qq/index.html","332d087b4d6c71f1b09f5402db7bdc0b"],["/2021/01/03/netch/index.html","1a6c5d3702d332a8b8df9be090289cd8"],["/2021/01/03/waifu2x/index.html","030ad69e7a4ab777979691e32aeba1d6"],["/2021/01/04/ads/index.html","2050d752fe02c8104ff60a16211b13e2"],["/2021/01/04/games/index.html","4b07a0d304c3be8628d5c2108934a643"],["/2021/01/04/heroku/index.html","74abe9b002a45f9cc587297721292d1b"],["/2021/01/06/movies/index.html","1bec8ac7303dc9cc3cbb2e1b20a1322a"],["/2021/01/07/google2020/index.html","f2a13156595f5c0ec68c5911159d2dba"],["/2021/01/07/lucky/index.html","48c3465303dffdfbc66c8f8dae7e4c49"],["/2021/01/07/spotify/index.html","48285d0f406ade7cad878bd196bb0071"],["/2021/01/07/thunder/index.html","4c164cf976862db492aca636a06fa7d0"],["/2021/01/08/adguardhome/index.html","c1e68f1bee1653fe7d2688dc3302c976"],["/2021/01/10/IBM/index.html","951032bee3793342cf8b2ae655ca85d1"],["/2021/01/10/potplayer/index.html","c1331b0426bb82fb5171e7bd3b8ea1ab"],["/2021/01/10/sakuraanime/index.html","9245efabe8d0ebcf3da987b21a6ec6ac"],["/2021/01/10/美剧星球/index.html","498a985ad30b220b6d961513e0f4071a"],["/2021/01/12/telegraph/index.html","5c650ccad175ac98ed2688738c6f8998"],["/2021/01/14/comics/index.html","9f5162980595d1d1e4f782dc326838cf"],["/2021/01/14/ftp/index.html","ce4325d5b03cdb88842e695442fa3952"],["/2021/01/14/oraclecloud/index.html","8fa8ace8477c47452b7bcd2aa27b1753"],["/2021/01/14/porkbun/index.html","f482bc7a523f372a99c84be62e1f38ce"],["/2021/01/14/powertoys/index.html","cd53820f8d5bf0ec7c91b6d97d28c872"],["/2021/01/14/taptap/index.html","507917659513638a49eb87dcfb3104c8"],["/2021/01/14/ubuntuvsftp/index.html","29142419c77c84aee173e2952ae3c34e"],["/2021/01/14/小说/index.html","c8d40cf861de5deff60da8d684b1e83c"],["/2021/01/15/freeproxies/index.html","6fd888925d3dc986790244ada2ac546e"],["/2021/01/15/incaseformat/index.html","7b4c16f4850e6518fff40ebfb81fee56"],["/2021/01/16/euserv/index.html","5f8a0a8a1e7cab09b68eda90a1917b1c"],["/2021/01/16/winxray/index.html","6492c0aa18e3436423ef249659c9a447"],["/2021/01/18/qqreadhistory/index.html","0fb8a496abaf5748cc31857abd0dd271"],["/2021/01/18/qqrevoke/index.html","21a099e1b9f0f60d359876c8d8856189"],["/2021/01/19/freevpn/index.html","5daf31f4c1074cfb545b02525396b490"],["/2021/01/20/browsertrack/index.html","5466bab30a93f795dc77f4fe1b5d5fae"],["/2021/01/20/v2ui/index.html","aa661b6ab06631a00b984ca6d93fd60e"],["/2021/01/21/failedtoconnect/index.html","9d82cd2498964c6ea66c48cadaa2149c"],["/2021/01/21/gitcalendar/index.html","8e3a8431cfd75dcc970a9f7a3b9f2600"],["/2021/01/21/markdownformat/index.html","13d83f430f712275df7d532553307f8d"],["/2021/01/21/markdowntable/index.html","f875e20f36fb6592d6bb3da664889def"],["/2021/01/21/vercel/index.html","f1fe321cd5d2cc8c532568359c3ce1bc"],["/2021/01/22/hardware/index.html","23651b80690cc8e4599dff8134fce023"],["/2021/01/22/muviz/index.html","5f7204561c681c32b1dcb737b502bc6f"],["/2021/01/22/randomapi/index.html","c59de5c76bcd984be2fa86d14ebaaec0"],["/2021/01/22/searchimages/index.html","95c336019ab03c388ddda27a8b666563"],["/2021/01/23/RX文件管理器/index.html","9ac0439938fd5aea97ed4835c7172fa1"],["/2021/01/23/chromeflag/index.html","a3c67dadcdf5e9162c01cbb3ed993379"],["/2021/01/23/qttabbar/index.html","36c58f7b6a37c8534a49241e724439eb"],["/2021/01/24/githubspeedup/index.html","8e76bfdd1daa421f64894c3e41e194b0"],["/2021/01/24/jsdelivr/index.html","27d31242b0d348ad3a3914ee7684003f"],["/2021/01/25/note/index.html","60cb6543a71efac44a61ef39469a1973"],["/2021/01/25/soul/index.html","97f4af9a95555f505e4860f460236f08"],["/2021/01/26/herokuxray/index.html","62bcbe7d766b286fc0220e272a656a28"],["/2021/01/27/proxypool/index.html","5c22735c88f40c31a34e9c400a2adac7"],["/2021/01/27/tracker/index.html","a199f37415ed9f96bc934b50d3115bc7"],["/2021/01/30/pandownphp/index.html","a88a9e6889defd9b39ec27b3bc408e58"],["/2021/01/31/newgroup/index.html","de3ceb71b0624d23521fad450627c011"],["/2021/02/01/clashlanguage/index.html","279867b09d2945bed73eef305fa4346d"],["/2021/02/01/encrypt/index.html","1939869f124ac4baaf73bf7b08b3947c"],["/2021/02/01/footermotion/index.html","336b7d34a38cdb174c31e40d3ccbff9f"],["/2021/02/01/gitter/index.html","3798336fcc09c30053c0629bb0b07e0a"],["/2021/02/01/pixivtop50/index.html","1026dea358f0d3c7eeb81318a611cc3c"],["/2021/02/01/scrollbar/index.html","0a02513decfc0f13f8b728dbc190c724"],["/2021/02/02/clover/index.html","d01acdf5e26b3a711d0d3581ae66dd64"],["/2021/02/02/maya/index.html","de0fb885397a9350e429b9a326636618"],["/2021/02/02/speedcontroller/index.html","50e9c9fa52e29f63a126db9fd28392f1"],["/2021/02/02/yesmusicplayer/index.html","b75aa4bbb5b3219ac971adbbbce203f6"],["/2021/02/03/lenovoonelite/index.html","d5fc65ce525c55a79d5eb42265f9aa79"],["/2021/02/03/skipads/index.html","9fa20feab792d5f5af6fa0624b130ec2"],["/2021/02/04/picseed/index.html","584402987ef3f6c85a2b0045daedc345"],["/2021/02/04/renren/index.html","7c20e109c8900468f846b82ad592841b"],["/2021/02/04/serverstress/index.html","c703c588ef087bdf8b1ac45016364857"],["/2021/02/04/wikipediazh/index.html","ed526acd0f95eecade8aec00f89191a9"],["/2021/02/05/googlevoice/index.html","ac5ab1c2beaa529630b225b3f08a06ff"],["/2021/02/06/clashconnection/index.html","da98c8f8c5b6d87ebc0fabc33c4de311"],["/2021/02/06/gvtransfer/index.html","858566f1a0137ec60f9296e4906695d1"],["/2021/02/06/todesk/index.html","e0b40fd14dbd119c0214db24d8a0025d"],["/2021/02/06/vpnblacklist/index.html","eaf1a830384bb05ddf1c967716d0039f"],["/2021/02/07/mklink/index.html","b4a09823f9336afdb9440b381a8af0d8"],["/2021/02/07/speedtest/index.html","aca59502d504889f338e3989535f8db6"],["/2021/02/07/translate/index.html","85055a9907eb032d5169ad38cdbfd9ce"],["/2021/02/08/ewomail/index.html","a2384c70739f54c6eca53a634b94d2ed"],["/2021/02/10/officee5/index.html","120ca47fe075ab948eab2bfaf829d1b4"],["/2021/02/10/raidrive/index.html","449fbc83318d52a021acc4dd51f09612"],["/2021/02/13/e5sub/index.html","8b71a0a8123a28a86de27d962f333e9d"],["/2021/02/14/screen/index.html","a04c9408d30a6223c1dfc15d7e3cf3e3"],["/2021/02/15/clashtun/index.html","6745ff10699814d1c69ada80ca38aa82"],["/2021/02/15/messageboom/index.html","540e1b87e76cee5f0edf73caf0ab1f88"],["/2021/02/15/oneindex/index.html","3eb236de00c47f6be3600fe8045a153a"],["/2021/02/16/govsites/index.html","24bd05ccc90fca9c440e6a7599dfe22c"],["/2021/02/17/hexototypecho/index.html","4972c85b8332f3d8591385705b4c30fa"],["/2021/02/19/fiddler/index.html","27ea67a3ca6e1c36dc73923af27e802b"],["/2021/02/22/potplayerset/index.html","ab17a7a51540c3c1407846ad6acc4506"],["/2021/02/22/studyresource/index.html","865bff2c62fb43fbd31e7fd5d60fc259"],["/2021/02/22/telegram/index.html","96429ec6186a8c602dfa2decc0ff45c9"],["/2021/02/22/videos/index.html","3e7ac43fa9d81ea1008101c09ac0b184"],["/2021/02/24/mtproxy/index.html","1e6c40068e7f450d16e42b0f0152b1b8"],["/2021/03/10/catchcat/index.html","9febe90ece7cc1ae61e6b77934ebbc1c"],["/2021/03/10/neteasemusic/index.html","8182b2c86f54b0fd5a31ac789a29e5a8"],["/2021/03/10/surfboard/index.html","414a8580adaaa5ccc3a37578dea9a7de"],["/2021/03/11/vpnandjc/index.html","930ee2b1aeab48b5223fb30deaf232a4"],["/2021/03/12/qrcodes/index.html","41d5eed5dcb54d61593882e25f343540"],["/2021/03/20/qv2ray/index.html","d9e494891b5d955951ba59d50698f11d"],["/2021/03/22/freevps/index.html","c582959f76acd7f92687ffb3d0e67229"],["/2021/03/24/tgstickers/index.html","5d9cb1ad765f0b12814b05a6fcc182e6"],["/2021/03/25/clashx/index.html","642d4f9781716a059f5dcacaf746884d"],["/2021/03/26/bingwallpaper/index.html","7785400d68f80a6cdcfff16eef9a56e4"],["/2021/04/03/soutu/index.html","099b2fe9a1f44050596748b1bab5aace"],["/2021/04/03/tiyunti/index.html","064aa4de1491b856c809c33758028cf2"],["/2021/04/04/btpanel/index.html","7132562d0f128ba14cbeaac730021a94"],["/404.html","ad00b31291b512f513ad7f6f1ffde464"],["/archives/2020/11/index.html","17b0c962de74abcedbe7df6fe58c64a2"],["/archives/2020/12/index.html","b4691ef6fdd3ea20f304ca2cb634e2b7"],["/archives/2020/12/page/2/index.html","0119ef77087511c249f8e41ca7d4d1c5"],["/archives/2020/12/page/3/index.html","f8db90f7ef7d47307adb4dd424adf209"],["/archives/2020/index.html","fe39826d95ae96db937388763ceec3a5"],["/archives/2020/page/2/index.html","b28588382b27b09c3e9bf1a56a5fb08b"],["/archives/2020/page/3/index.html","c192fd8d569a569d0787b362c0c317c5"],["/archives/2021/01/index.html","cff83174374cc234e161442a85b772fb"],["/archives/2021/01/page/2/index.html","d8a6340891446ef50606bc2aa8e677d0"],["/archives/2021/01/page/3/index.html","a03fa0d423c6c28a1fb39e90079a0df4"],["/archives/2021/01/page/4/index.html","0207d4b06d7b315a4d07c4f8f750adc5"],["/archives/2021/02/index.html","b278d224d47fb4137af57073d7231f8e"],["/archives/2021/02/page/2/index.html","cc9290bfab0d38373b10c4da684b6ee8"],["/archives/2021/02/page/3/index.html","5db8757aea15c37e1f4ea2c16de28633"],["/archives/2021/03/index.html","700d0967b26f22f835e4faa5a632eefa"],["/archives/2021/04/index.html","d112b45d178a18a4aa0fc7bf7bf14720"],["/archives/2021/index.html","ef55134cc4d878b664187b96cc35514a"],["/archives/2021/page/2/index.html","65446771da41a2272c7bcc3401c7d6ab"],["/archives/2021/page/3/index.html","5a35538d1bff39080b10d49a7cd30237"],["/archives/2021/page/4/index.html","b2dc0c67a98dfdc679b3c4127d0ddd79"],["/archives/2021/page/5/index.html","7414f0ccbef22b1488c38c1b5fe93576"],["/archives/2021/page/6/index.html","1bc3fda05c86bc00dc7672bbac5e65b7"],["/archives/2021/page/7/index.html","8f4e9b27a6edccb975a536347b582a89"],["/archives/2021/page/8/index.html","4ec4181e8b2c28bb51f8c114151f5c28"],["/archives/index.html","99b0df1d9228cbe94d4dfde95512d2f4"],["/archives/page/10/index.html","8ec53e9b4fdd7de128df746a5122bb72"],["/archives/page/2/index.html","2addba8f670aa907e30a8a275d4b1557"],["/archives/page/3/index.html","720db26adabaa2043c11be538d1aa851"],["/archives/page/4/index.html","ba0a4e66e674f9fe568025ff2ff24c4a"],["/archives/page/5/index.html","42b0c2a04549082d6323da6605e0c1ce"],["/archives/page/6/index.html","3555422a5492ea604eb08372d8e5c3d6"],["/archives/page/7/index.html","072d877321d274dbb7f1f8f97bcf8211"],["/archives/page/8/index.html","8d0c50bd370be107d72f673ef66f543c"],["/archives/page/9/index.html","e2b396316a2a8c0dae5b5d3bb5611840"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","0872104966108fc9bd78173bf1ad8fe8"],["/categories/index.html","79cce6afb955225286e624273bb20b5d"],["/categories/下载/index.html","37e5d1266e214ba0707aee78e0a22462"],["/categories/安全/index.html","ac66de6fe20e4722154b0be0a0f69c18"],["/categories/建站/index.html","2eda004224f32339c64feac2c244e396"],["/categories/机场测评/index.html","0e5dcdcbc6ef34f11ee14e5504ffb3d3"],["/categories/杂/index.html","944d8efd6aa986da25e0b2aa679590d5"],["/categories/杂/page/2/index.html","985ba5a80947f3836f1d63096a4c84b0"],["/categories/测评/index.html","0ed925fe77e26337148c209db68a5052"],["/categories/科学上网/index.html","3a9a08163207c006a68d7220ce5a9e04"],["/categories/科学上网/page/2/index.html","4f7628dc9eb737e4f1ae669946421663"],["/categories/编程/index.html","4673ebff35d64e2ca1028092c56f0b54"],["/categories/网站/index.html","8c302c2d0af5e7bff5c17c419df3edeb"],["/categories/网站/page/2/index.html","7642485f0a0b51fdc3a9a524a48fb626"],["/categories/软件/index.html","ff63e31380b079f075fd28d022d0cc75"],["/categories/软件/page/2/index.html","921a02685f89bb84830e75004171234a"],["/categories/软件/page/3/index.html","39fb3b00b5b4fd9b05b19f2c65ac3240"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","c6ce0eed4415399ea08863aa21351a08"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","a1023840af3ee0cd90d96345d63e46f5"],["/ios/index.html","a5c92109d0feb785f8bb9ce57bf0f1ff"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","f9eaf057b22e32e475fb68b399523f81"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","c4877f39ec88e8497b852947145d643c"],["/page/2/index.html","64923f48adddd13abd3424bf93b56666"],["/page/3/index.html","08acd281801d82fbe0df4566d158b01a"],["/page/4/index.html","7db6e44eaf6eb680fb4a3c4d5585995b"],["/page/5/index.html","a298714610c432590a1c8932db4076f4"],["/page/6/index.html","f877f3f307c35da3b5f64163880a276f"],["/page/7/index.html","7d1c77fd3e7550348fc2be727ebcc9cf"],["/page/8/index.html","b414e03a5879970b109310646f5d880b"],["/page/9/index.html","08c855f6067b49c8f17741a880591788"],["/payment/index.html","d501f2e5b8ceca4f66ac72e6ff6e4cc7"],["/privacy-policy/index.html","19d08b9a634df892fbac0bde78754e4c"],["/rss2.xml","ff05cab70691fa31d7ac753c85db39d3"],["/search.xml","20ac561ae437fc41834742b0e816862d"],["/sitemap.xml","68cf053ad613543cc4776dddd2071deb"],["/sw-register.js","64a9b79142e4587e6b09f45905ef2c69"],["/tags/5t/index.html","2ddae137e73a1480853bf57d3f2bca56"],["/tags/Bing/index.html","e95b8447da05673cac5a1cb4809eadc5"],["/tags/Clash/index.html","ed8f196c4afd2d98af8cec5478a1bb38"],["/tags/Clover/index.html","18f3bbe46ccd59fc00d1d55b7c7dbaf6"],["/tags/E5/index.html","6f3b0d8c9e8c3022f2aee1c3bdbf4014"],["/tags/FTP/index.html","6ecbb7e0a67c4678fce47b425e4d055d"],["/tags/GitHub/index.html","50936361ecedc46fc018ff616815aa94"],["/tags/Heroku/index.html","b0618e90c328b7efc9fc3ba4594a6cd2"],["/tags/Hexo/index.html","c52476aea2d5af4fe6aa5026462a7d2f"],["/tags/Lenovo/index.html","99499bc9f59803a0acdb25b0606eb970"],["/tags/Oneindex/index.html","f58c5168e836a07efdfbd330dc504718"],["/tags/QQ/index.html","c1666545332100e3f9721584b01b49be"],["/tags/QTTabbar/index.html","4e5665f36d813df1f16829c524dd7ee0"],["/tags/RX文件管理器/index.html","00533f59e0221ddc6d53d9af19fc3e38"],["/tags/Todesk/index.html","237dad72b53f67823119ad495ef61150"],["/tags/Vercel/index.html","64324b91585259c50dd0ef8d37211a68"],["/tags/ads/index.html","e9c4236817dfb28170e2135779e7efde"],["/tags/api/index.html","47418758844a97bfa343459c00edb2cf"],["/tags/app/index.html","5202b3e9e47b4fd71d22a7b067722757"],["/tags/blacklist/index.html","d2f840474b05db7e83b47ccb306f606a"],["/tags/butterfly/index.html","d94e54b06fdd6e180f7778342862a794"],["/tags/chrome/index.html","04c39289b13cc3eda2ffceecf237f088"],["/tags/clashx/index.html","bc46776ab39083c0699550235beffb86"],["/tags/cloudflare/index.html","2187b1cb5c34511e41502ce2861b215f"],["/tags/cmd/index.html","c517a174dc3d08c0ced2c6047a64ca82"],["/tags/c盘/index.html","90943b276c43ddf0b088102991a27601"],["/tags/email/index.html","630769ae21951c205f3b57462a017a42"],["/tags/ewomail/index.html","d919cd1064ca7d410fc934adafc4a1d7"],["/tags/fiddler/index.html","92dfebd411d57183f172cb5a540a28ed"],["/tags/flags/index.html","f135c122f729ba2368e90c2d95a24a71"],["/tags/footer，页脚/index.html","59c849475f634f57df9ea8da7a14100a"],["/tags/galgame/index.html","6a0683c0594f327a5bac25ce4d5fd1a1"],["/tags/git/index.html","2e78f4167164e1765f0e9cc5e399b520"],["/tags/gitcalendar/index.html","23590a6568354905fb9f26a379449b6a"],["/tags/google-voice/index.html","9a8af09dd11112682c864e4dc1cf7f66"],["/tags/gv/index.html","3c8fbee503ccaff0d1a556964e39b926"],["/tags/html/index.html","3578f46386416e836cd3ae8d7c50f5ea"],["/tags/index-1.html","6a2372afc3b37525119aa4ec82bcb63a"],["/tags/index.html","0c61eb84c7d9a201249c4390bac82b30"],["/tags/js/index.html","8487833ce7f972f997fbb454c259d3ff"],["/tags/jsdelivr/index.html","ec619145350d1e64b0c48e60bc744115"],["/tags/linux/index.html","46317ca6bc4cc11b18e2e87b9f84a677"],["/tags/macos/index.html","4015e00c50e54ad1989fcef02f26f73e"],["/tags/madVR/index.html","82a03f19c2af29cacd185100a672cec2"],["/tags/markdown/index.html","aec977387d1aca33572451b8fb0d812c"],["/tags/maya/index.html","ece7a310c9dcd0b2158ccdc51451e4c5"],["/tags/mklink/index.html","1a37ce95630f9c49399cb2da42fd8e7d"],["/tags/office-e5/index.html","2dca17823c361ff7e18770fce25a7b6c"],["/tags/onedrive/index.html","3e9e163b2d2dd9c5883a0967565364ec"],["/tags/picGO/index.html","d8bd84e46c6f48867b17445626373862"],["/tags/pixiv/index.html","35df1dd47a59949869ad38e513b27fd3"],["/tags/potplayer/index.html","bc73d5bb9d5fe432ce7f1c27e628bf34"],["/tags/proxypool/index.html","76cd4afcb93ddecf5c619d58ef5ab1d3"],["/tags/qbitorrent/index.html","0920f2df4c3f00f338b0fd4fb9bd4587"],["/tags/raidrive/index.html","091460ef738669f4a5e9f40dd63e4bf0"],["/tags/screen/index.html","d354c2c53d7ca4eb4881b6b9ef699902"],["/tags/speedtest/index.html","e55b3bbe7287d33ed9609d1a42c9bd98"],["/tags/ss/index.html","eee25dfe12c69aae227c11549c7ddc8d"],["/tags/ssr/index.html","b3da29e6363cadff36b27f07edc037c9"],["/tags/stickers/index.html","11f30b1b2addd19c5e40bcfa89927c6c"],["/tags/surfboard/index.html","ac8819f874648411f9125495e186c698"],["/tags/tap/index.html","b2620cacbcbfabec0dd34aab78b90fc9"],["/tags/telegram/index.html","5e13d9b183ff41c2ab446f10145ded3f"],["/tags/telegram代理/index.html","09dfcb16ce8e1136694b0f3933e88c28"],["/tags/tg/index.html","e8fd3d07efb9bd3c668b147f133d0f96"],["/tags/tg代理/index.html","27bf46849fa95e084a3886c2301b4b63"],["/tags/top50/index.html","cfca66216444d152cd3e359d5f5de294"],["/tags/tracker/index.html","2a97ca46a6d542c540776507545109c4"],["/tags/translate/index.html","e108cc6002e1ab8b75ba7538bd9abec3"],["/tags/translater/index.html","a3df00002d8fa3b84b166072bb5bf493"],["/tags/tun/index.html","34bdf23f680a448a6f62372fecf2410f"],["/tags/typecho/index.html","7ed044de90d2816e51d5988414499320"],["/tags/v2ray/index.html","e0ad415b229142fe1d8f953902df8a1f"],["/tags/vpn/index.html","58b3b98ff92d8f5420758938051fcbd8"],["/tags/vps/index.html","b51b1eed911d3eac712286c20f383707"],["/tags/wallpaper/index.html","3f0b5fd325da6f45a7208927e4d2dac8"],["/tags/windows/index.html","6246c4642ea0572542f60911b7ade98e"],["/tags/windows端/index.html","5d82b2dcef0072389e08912a729c317e"],["/tags/xray/index.html","3d040fac31d10f6a848e0efcb6ef1b0e"],["/tags/yandex/index.html","c8ede4cf98f4ed9f40aa35f47459e99c"],["/tags/下载/index.html","079bb0a3167f81d877ce229aa44f5182"],["/tags/不限速/index.html","2b187273615db862bfcb526bd6250bb4"],["/tags/个人网盘/index.html","614ecf99708fe16a06e47a52bcf6ebde"],["/tags/主题/index.html","47782d4ea02bd7c9bab6a16c19d68fea"],["/tags/二维码/index.html","f140bdd16916793fca603633d0c9ad80"],["/tags/云便签/index.html","c25350c04d4be97cb2e9283aeee09e5d"],["/tags/云盘/index.html","41fa940161f75380249f915abeece64d"],["/tags/人人/index.html","d59baf2dd0fe248b724629c37a7a1ccc"],["/tags/代理/index.html","40d28c769ac7bdf88ac189530e34afaf"],["/tags/代码/index.html","dab8affced372047d2b4dd7ef5d202b4"],["/tags/优选IP/index.html","56c9496f542a5da878071c3d6a0182a4"],["/tags/便签/index.html","38cd6e1e5e50843add6fef141da8a843"],["/tags/保号/index.html","44e071db5aea4695e51b85b6f27c4960"],["/tags/免费/index.html","e7f339ef3cbfab53bddaf67944785b96"],["/tags/免费节点/index.html","bdb547116ee88ede68cecd09c80f3f55"],["/tags/冷门节点/index.html","8366e8c8f7943cf3aae71aa6a13750bf"],["/tags/删库塔/index.html","0743ccb71b414db5db2c0102069b5f11"],["/tags/加密/index.html","095e5480348613d91b9ace17e31c65c6"],["/tags/动画/index.html","ed07724d8a6c7ebcf6afd57a668b6eed"],["/tags/博客/index.html","8687068dfdf1f6feeeb8564fcf42dfcf"],["/tags/历史记录/index.html","fc48c4d015bb8562a021b72e214124f3"],["/tags/压力/index.html","cbe47d1aeb739fd1fcbd19911162a69e"],["/tags/压缩包/index.html","68d7046d326dde039791aaa032495a96"],["/tags/反代/index.html","d995902c77e64a1f26c4f28690bdc524"],["/tags/可视化/index.html","ffe4ba6cda96434cbb9aba006de23cc0"],["/tags/命令/index.html","e27f56f7e87a7d006b4e5bd681d3752e"],["/tags/国家/index.html","566661a4b229bd5ed1706704cfae13cf"],["/tags/图床/index.html","58e92d4b32ca4b30381a675818b7d67c"],["/tags/图片/index.html","3e4e3ac12465dc127dcbdc023229ef0d"],["/tags/域名/index.html","57df7450231ab86926792c44713a2e53"],["/tags/壁纸/index.html","21cd2ca10c6b9089d2a6773b9fba9204"],["/tags/多标签/index.html","a283b9f6f802755f1960a1abe4c955d2"],["/tags/奈飞/index.html","504dfa21ea07c84a4d3f6a8b2613bde3"],["/tags/存储/index.html","a76234d6ce867f6a53d39aa542a2c547"],["/tags/学习/index.html","f72150bad3340730e0e3778ecdc7595d"],["/tags/安全/index.html","eb27724db0bf83ac849819abea43887f"],["/tags/安卓/index.html","0f80c564aaa0be10fdff4a4301591e9c"],["/tags/宝塔/index.html","a88b7998970ca19077b67a63303dc574"],["/tags/小游戏/index.html","45600eeb64b4ad7e322061e271b60564"],["/tags/广告/index.html","c6fb597004c69f00bc3a9b723164710e"],["/tags/建站/index.html","b14e41912656870312902366e258f73c"],["/tags/影视/index.html","a36703cc69fe60ef9f6640b163e15661"],["/tags/微信/index.html","1878a04874cdc9fc43eef5588ef80667"],["/tags/快速启动/index.html","8952628bd65bc62bb615e2625ae34588"],["/tags/手机/index.html","0756296c7911d30650db35fc2295a521"],["/tags/托管/index.html","fcc6e37659b27f2597864d3fb1fc74ec"],["/tags/抓包/index.html","54c0c8b12e528aca1cce5ba937b50b8e"],["/tags/抓取/index.html","5f2f4adc5c712b5f3316a959780b9bbb"],["/tags/投屏/index.html","6c85ab2d13de0c782010e2aa17448810"],["/tags/拓展功能/index.html","3637409f9f4256e00b16fa8d4418d4da"],["/tags/挂载/index.html","a14197fff6f4218ddab6becae5c7cd72"],["/tags/指纹/index.html","9a3332a86601ffe4bd01727cd8fa1d52"],["/tags/接口/index.html","db629462070928f6a7389eb9159b6149"],["/tags/提取图片/index.html","b672845c8127056c1786f9eca73a1c0f"],["/tags/插件/index.html","9b526f21ba6874f5ae8ae43b34cd9980"],["/tags/搜图/index.html","676ee0acfa978b55ccce83291936fd19"],["/tags/搭建/index.html","a31328aa97ab9857f4de6ad3bc18da0b"],["/tags/撤回/index.html","dffb1cb95308a49d92c2ba38d300232f"],["/tags/播放器/index.html","b181825234fee03bee1d4268291b0d5c"],["/tags/支付宝/index.html","8ecb78d372b174c1a237555d68d5e67d"],["/tags/政府网站/index.html","cbf849021358fce76b5662502cf79bc2"],["/tags/效率/index.html","32e74ba02513a393f7986608804ec011"],["/tags/日历/index.html","f7045b2cf6c952f963a3a2be6558e4b0"],["/tags/服务器/index.html","975ebe26d8695f22d9b0f200c53bf37b"],["/tags/机场/index.html","d26c8e95404cd719fb363a3eccb5767c"],["/tags/桌面/index.html","d6fd707c0d89e6672facf43d0177275c"],["/tags/梯子/index.html","93fe3a83dec233ae9446e91ab336f7f3"],["/tags/检测工具/index.html","af7aec76dc9420ead0cb36f9c7aaf8fb"],["/tags/汉化/index.html","645fa5b231811ec08c02a04582197d8a"],["/tags/测压/index.html","da9e7d370b8602cb57b06ef2f5e996bd"],["/tags/测速/index.html","5c80d2e3ed7567b6edf6e0d3c91e5941"],["/tags/浏览器/index.html","8a30176d25ca64f2febe9b2243c81a32"],["/tags/清理/index.html","b07e9a5c322826624f9b685188a794a3"],["/tags/滚动条/index.html","34f98e573674c84f407adb37ccc0c9aa"],["/tags/灰色歌曲/index.html","bd48c9148ac1af4b5c517ffcb0c70064"],["/tags/电影/index.html","d69fe4ee34c907a4e59a39b5501c8dfd"],["/tags/电视剧/index.html","0faae237edede2dfdf96d2db192ccebe"],["/tags/白嫖/index.html","b0358912a8902f879818b3513c82c318"],["/tags/百度/index.html","2582ab592579a45cc8c70659a6c98be1"],["/tags/百度云盘/index.html","eca893043628f8dddd4a8ae2edea51c6"],["/tags/百科/index.html","53fcf71f8f32372bd435c16f2067039a"],["/tags/短信/index.html","d37d58337973f60cfd4508505106091c"],["/tags/硬件/index.html","f068bb4d3a7874fccf3bb410ec7e5f87"],["/tags/科学上网/index.html","68c29717f63bee46407cac8558561715"],["/tags/空间/index.html","9f3a765b0d1f80dd544a211d1ab929c7"],["/tags/笔记/index.html","13ae3ef44ef8714ee3bb7d656586263e"],["/tags/简洁/index.html","8269a394e3efc08ff8a548e1f9a1b70b"],["/tags/简约/index.html","dbd564d46745677e6f1601e1db989f9c"],["/tags/维基/index.html","584b06780fa53839b26af01c785d2a71"],["/tags/网易云/index.html","4a420c4bef80dcd24dd1daa581fa6aef"],["/tags/网盘/index.html","36e27cb83d0f59cfde76bf3e5e151e35"],["/tags/网站/index.html","f6adcf75c23c075f0802a29174a76d3d"],["/tags/网络/index.html","7bcd8fb2a0e226acedb73dcc317e0a8f"],["/tags/美化/index.html","983d8420987c8984875c16e29cd1d1a1"],["/tags/翻墙/index.html","25302ca370dcfa10e560d5f5dcab4307"],["/tags/翻译/index.html","0023606d8c7e7af5fef9a5befa599407"],["/tags/翻译器/index.html","df3406a1f1d068cd84eeba4e73fe7c75"],["/tags/聊天/index.html","6f639eca8df6413eed52db8557aa0733"],["/tags/聊天室/index.html","d03890d007fe3f93f42d0ba3e5e135a6"],["/tags/联想/index.html","7a6798fd9fcc32b2769dcd4173c9794e"],["/tags/节点/index.html","f9b0da8ef1e97d464d4fde10cf1aa903"],["/tags/虚拟手机号/index.html","65cfb440c251c9fc5640e58b62037861"],["/tags/补丁/index.html","73853c174fb6a18aa1c0233e821559ba"],["/tags/表情包/index.html","cf8c171524a53f3304f74816c2d09175"],["/tags/视频/index.html","3091bef12f02bd0fe70d7a7794f11b5d"],["/tags/解析/index.html","7e51398d9e7b2f19fec50d393fe0364b"],["/tags/订阅链接/index.html","59bc182d7511017c25edd022de97b97d"],["/tags/记录/index.html","da2517fe7511718723174e9ef2336984"],["/tags/识图/index.html","84565959365eef1e00d09d10e68eeacd"],["/tags/语言/index.html","27b9ee078034d5d1515c77ccb71be51a"],["/tags/资源/index.html","6cdd3cdcf8689593252510b16eab4115"],["/tags/资源管理器/index.html","f68e7823f9094805c1b0b8f4e6783444"],["/tags/转移/index.html","03504cb0db1c6e37a356d56045e34fc0"],["/tags/软件/index.html","4f04417217008cf9f6fdeaf64bc3ef8b"],["/tags/轰炸/index.html","7620da1c21ff3f50335a9add3b69a527"],["/tags/迁移/index.html","c39bf6699a795d7547fd1fbc364d5867"],["/tags/远程控制/index.html","2e38de9a5564380c0481bcea3e3231bb"],["/tags/连接/index.html","55006eb7eaa45d0768429ad765b97c39"],["/tags/追踪/index.html","68b9594fe748a1d074ba95918b9243a5"],["/tags/速度/index.html","b7564f739e537586ed3990f2cc9cb262"],["/tags/邮箱/index.html","dd2d162daaebb8364f7ce232e37f4608"],["/tags/酷炫/index.html","e8019214f5c083d36f101d9a286d4dc9"],["/tags/钓鱼/index.html","e25e63b14fd582fbbe503bbee71520a1"],["/tags/镜像/index.html","4923393021083ee2ba5341c5f38766ca"],["/tags/随机/index.html","1f94a809b189be8dcf3b4f3db33c28a5"],["/tags/隐藏/index.html","585959cc3bc0bc8c5a968168c98349c4"],["/tags/面板/index.html","a1b389249f610ff5caf8754e3ec657cd"],["/tags/音乐/index.html","5febeeaa12aed96c0578f17c101d15ec"],["/tags/高颜值/index.html","313b4e0de4bc796387b236df684a3957"],["/tags/魔改/index.html","cc10ecda36cf920018cfc4b1c9ab60c3"],["/tags/黑名单/index.html","a52322821bb5375430cec7c62c11b570"],["/urls/index.html","e7cb02b4f0d040ed155dc9beca03db26"],["/vps/index.html","604f89ac0084cd4956e084f17624a0fb"],["/支持/index.html","305cb525cc2f1acf090e06fc4b54a579"]];
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
