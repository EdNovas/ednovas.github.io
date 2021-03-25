/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","6e556f5f53c7ddc22f5fd66f771cd23a"],["/2020/11/29/clash-windows/index.html","107cf881ad2550007ba1eca54397b208"],["/2020/11/30/websites2/index.html","8b806cc890a92215c670bee9f3f744aa"],["/2020/12/04/iphone4s/index.html","b6eac6b078bb8c9fb6a48e57cb06adaf"],["/2020/12/04/onenote/index.html","45465bdf68a32de50909ba3a93bc6f6a"],["/2020/12/04/wesites1/index.html","adc603b999cccdcdd8c0b8d12d959f83"],["/2020/12/06/nokia808/index.html","b9be83a946fefec7c11202b9f08a498d"],["/2020/12/07/ipad1/index.html","0fe7566643651dee0ef2115ba0e4107c"],["/2020/12/18/freesubscribes/index.html","a216dd28c59c172e576a9a41c203c82d"],["/2020/12/19/musics/index.html","d2074384bda002510f6637380b4a04f2"],["/2020/12/19/shadowrocket/index.html","7dfb5e354ca45254cc8115f14901b2d7"],["/2020/12/19/v2ray-windows/index.html","0eba3a92912d6c408ecf545a068bacf4"],["/2020/12/19/v2rayng/index.html","5bd1065890fd9ece831995ca101bd452"],["/2020/12/20/beoplay/index.html","de8e11bc821de037e1b0c08dfb2f3de3"],["/2020/12/20/订阅链接转换/index.html","edb87c655c13f4c21fbb4a5f8ac697cb"],["/2020/12/21/chrome浏览器下载提速/index.html","329b64d135db6b2339a41f381cf15d4f"],["/2020/12/21/免费128线程并发下载xdown/index.html","32b105711fcc952339366b5863d11e30"],["/2020/12/21/免费32线程下载软件ndm/index.html","f9fb97ebd475ad528c9853f2119cc84a"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","ba3d546d2636b1a63fb1089d2f713d36"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","a34990f960c45253642264ea592eff72"],["/2020/12/21/广告怎么知道我在想什么/index.html","0665e9431b792ae9b066ce12fe027bef"],["/2020/12/21/无名·引子（小说试写）/index.html","e4c53a99ae77183ac520518ebeb5a0f1"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","5575879c46ba53a36b758e926319c9f9"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","ff12c12b65f990b90eccabca86f32b3f"],["/2020/12/21/高速轻量下载器aria2/index.html","8fb17866219a106c98fa687a9718db60"],["/2020/12/22/2020-cee-roo/index.html","f071679a5139f5ff5247df2782b77972"],["/2020/12/22/firefox插件、github、steam富强/index.html","0c9cb57117b0f894a0a676c629d67aee"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","404741ab1768e7808465d32b07daf558"],["/2020/12/26/python-day-1/index.html","5a247f5b70f650e49eb13c7840a22b2b"],["/2020/12/26/python-day-2/index.html","03653964065544f736cba2b894ecaee1"],["/2020/12/26/度盘不限速下载方式一赏/index.html","09c4053e7c5fe2575efae414604e21a1"],["/2020/12/26/添加开机自启软件/index.html","7c6014b8a808f9ad460a64abcb4d6530"],["/2020/12/26/电脑端截图方式一赏/index.html","721e1f6149ec1af8cb9d1c792d740a37"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","7d4913318437e0b85b463d14f4531555"],["/2020/12/27/最安全的浏览器tor/index.html","ef90e852bd498803e51546308beedb18"],["/2020/12/27/网易云刷等级和听歌数量/index.html","1ebfe4dfda48c43b2bfdf5efa629bf3c"],["/2020/12/28/freenom申请免费域名/index.html","f4c08d61e3e120b00f3144df6b0d49d1"],["/2020/12/31/机场/index.html","b04d6a325fa3ab62f75d67e74104b641"],["/2021/01/01/M1/index.html","af03799476b3c86a5147680f1fd058b9"],["/2021/01/01/compress/index.html","ae58e7ce5df44b24ff5bca52f5741bfd"],["/2021/01/01/infinityfree/index.html","2a8a33106f872b60ee653ebf88fb59a8"],["/2021/01/01/硬核翻墙/index.html","afa918727cfac3dedf9c8c0eeb11561a"],["/2021/01/02/qq/index.html","de0d82d5d37775f75e956e90398d3ad0"],["/2021/01/03/netch/index.html","897e24a91b875edf608df70d757779d3"],["/2021/01/03/waifu2x/index.html","d186a83c6ec7770e651ee2e13680d289"],["/2021/01/04/ads/index.html","67634a7ed71f53e0b204249f47cf5d02"],["/2021/01/04/games/index.html","d25f6e6685686c22c17c9d3b11f7e3cf"],["/2021/01/04/heroku/index.html","82df0bc533e116a29351d607aca4ea8d"],["/2021/01/06/movies/index.html","1d2d03d41a2bd7206222d46cae6326b1"],["/2021/01/07/google2020/index.html","6cd13251b9f546348bc355b71604bbd2"],["/2021/01/07/lucky/index.html","3d0d6e780a48314faeb1407be3927219"],["/2021/01/07/spotify/index.html","d4b29cb96896baeb5032cbe4e8d8536e"],["/2021/01/07/thunder/index.html","275d78097974c83269106d6fd59019e6"],["/2021/01/08/adguardhome/index.html","a034b0bfce2b9b10d7231d4322d0cc03"],["/2021/01/10/IBM/index.html","ab908f96255e43d4966ea232362cc6a4"],["/2021/01/10/potplayer/index.html","4dfd24544165d5df58890d214f033e25"],["/2021/01/10/sakuraanime/index.html","8ab15964a05d534c6dfd1f58ee408668"],["/2021/01/10/美剧星球/index.html","65ed59a6f16c193a208802ad476cf39b"],["/2021/01/12/telegraph/index.html","c8a566ea21508b565c0df71953071921"],["/2021/01/14/comics/index.html","d0e6197a44fc2ee7b831d4c9483a1089"],["/2021/01/14/ftp/index.html","9ca84e85cbacf32a9397a464a7b3a73a"],["/2021/01/14/oraclecloud/index.html","8debc6052528726568a03f45dfbb2aef"],["/2021/01/14/porkbun/index.html","ec7af1c5829dd0cac8aea5293eead44e"],["/2021/01/14/powertoys/index.html","6fdae25a51bb6a339f98718cb74956fe"],["/2021/01/14/taptap/index.html","5f7b019487a39489be39a806807dbb5a"],["/2021/01/14/ubuntuvsftp/index.html","97fb5687acfb13c84b9b040e00efe44f"],["/2021/01/14/小说/index.html","0bb1aac3bc0e76c00dfba0e69ca236df"],["/2021/01/15/freeproxies/index.html","e94c13c2db35349cb3a05b193d6d92a7"],["/2021/01/15/incaseformat/index.html","b22312f5c16fb46a834d4304df707ee2"],["/2021/01/16/euserv/index.html","4a96413ae6bc2cd8dfb0e9336b0dc059"],["/2021/01/16/winxray/index.html","8ee45d6ccddf4e183ec0f60d0753716b"],["/2021/01/18/qqreadhistory/index.html","46715aab3b5bd5a2c03ae0e66c9d6af4"],["/2021/01/18/qqrevoke/index.html","db30cbb40c01e7111caa8b54a8d8a825"],["/2021/01/19/freevpn/index.html","26b97e603af2c690901e2befb316caa0"],["/2021/01/20/browsertrack/index.html","e5c625fb6bc0077993fff6becf1f9734"],["/2021/01/20/v2ui/index.html","d750688cabd7c3127173ffac5249fd04"],["/2021/01/21/failedtoconnect/index.html","0c8b060523387d98697b38c3253b5d31"],["/2021/01/21/gitcalendar/index.html","df4e5808aaa0bed1a931682e379f28c5"],["/2021/01/21/markdownformat/index.html","cd1b6a4981691ad926fd3cd6a8e842e9"],["/2021/01/21/markdowntable/index.html","a8ee6d1570cbd1b223a1a0366ceaefab"],["/2021/01/21/vercel/index.html","f41d0787728ed55ccd1add414a98d99b"],["/2021/01/22/hardware/index.html","0cf47d0fae81d0132098a30029ba228d"],["/2021/01/22/muviz/index.html","6071d8cce4657ee2381ad662a6c851fb"],["/2021/01/22/randomapi/index.html","23ab4a73d50b3cb81caf3de8535eddca"],["/2021/01/22/searchimages/index.html","7c21afba0b4d2d417224bc961d4956f7"],["/2021/01/23/RX文件管理器/index.html","474797e07cf38047d43ab9d509dcbeac"],["/2021/01/23/chromeflag/index.html","c7adf5dbba00b1d55c161bc0b4cb53d0"],["/2021/01/23/qttabbar/index.html","e6f1e85494d0aeba4a3bfdb53d5a4a6d"],["/2021/01/24/githubspeedup/index.html","5e1b2181ddf027db0a757c2b5e20561c"],["/2021/01/24/jsdelivr/index.html","40cea60de0026e4f57a5c41de4fbe7c9"],["/2021/01/25/note/index.html","35059e5cefd21019109d6fbb805a68ef"],["/2021/01/25/soul/index.html","82598a3a0ca1ea72d5a911f6431f0914"],["/2021/01/26/herokuxray/index.html","3d7a23373bf6eba7f53b4363be8dddee"],["/2021/01/27/proxypool/index.html","ee1fec7e8c91e925120b22ca8fa4cffe"],["/2021/01/27/tracker/index.html","009eaebc72200b25c5bb842940e373a6"],["/2021/01/30/pandownphp/index.html","96c583f7a90c79b62d4e1af6331e84ea"],["/2021/01/31/newgroup/index.html","26a0f81a46741b6955edd6e9d17ef886"],["/2021/02/01/clashlanguage/index.html","b27a960c0ab017cc0fee16f2f70ecfbd"],["/2021/02/01/encrypt/index.html","e3847cbaab25ed9105e0bcd931a728b9"],["/2021/02/01/footermotion/index.html","e11021604b056fead951f50cb18a6467"],["/2021/02/01/gitter/index.html","7e44d133feb462b500f47f1e5255774a"],["/2021/02/01/pixivtop50/index.html","a43c838c6aa1757c2300f950a569d6aa"],["/2021/02/01/scrollbar/index.html","9dd06458ed27a09425ee6022c8c17733"],["/2021/02/02/clover/index.html","713b7e0ecb78efce20ba641bafc526fd"],["/2021/02/02/maya/index.html","a71d4b5e2c75ab2768fefdff46aec1bf"],["/2021/02/02/speedcontroller/index.html","e1542530b310e7138c9258db9963e9ad"],["/2021/02/02/yesmusicplayer/index.html","f4e22c9da70dcfa789ecff8b389e843d"],["/2021/02/03/lenovoonelite/index.html","061ee1e968821d3a6bb801c04a5c9b2f"],["/2021/02/03/skipads/index.html","6cd11d14fa1862af8410bd24a718df28"],["/2021/02/04/picseed/index.html","337b83b71c063e15432d9a4009e03803"],["/2021/02/04/renren/index.html","555d5573d88152fe9add174ac3100035"],["/2021/02/04/serverstress/index.html","9ef125ea3468251997f9a3593a0da03e"],["/2021/02/04/wikipediazh/index.html","90f5ae2fb4f4ae09c2b0406eae0eb9a3"],["/2021/02/05/googlevoice/index.html","63de0d87eddf2a8e69d65d767602b0c9"],["/2021/02/06/clashconnection/index.html","e5d1d239f3811b565e100a9155159bec"],["/2021/02/06/gvtransfer/index.html","2fce885ceccba90e210b5d0a441d18a0"],["/2021/02/06/todesk/index.html","d9f421c1284e1deda1d7b8e3e2ef57ae"],["/2021/02/06/vpnblacklist/index.html","520e13f722955f7529711838e4ae07cd"],["/2021/02/07/mklink/index.html","1bfc5664ee3db0d85aa663ccb8be0d0d"],["/2021/02/07/speedtest/index.html","8d37efb2921c30927493ea6ff2f09d66"],["/2021/02/07/translate/index.html","507c6c6b9b66a9f52d4ea88b5b2069ff"],["/2021/02/08/ewomail/index.html","af8d4f8bdf0befd51d1a86602fa0483d"],["/2021/02/10/officee5/index.html","389a730a4a38d52616aaf5736ab923fc"],["/2021/02/10/raidrive/index.html","e429a5d85370dc1430d250b4ff4d7122"],["/2021/02/13/e5sub/index.html","aa2a77f6adc7eb56186043b74395ce9c"],["/2021/02/14/screen/index.html","6674e6f0b7cb87beba73f2f90ffdac2d"],["/2021/02/15/clashtun/index.html","1f5062db04f6ab047b44fda0d1d91548"],["/2021/02/15/messageboom/index.html","616d20e6f3ab08db170eb96711a29d59"],["/2021/02/15/oneindex/index.html","476433ad81c5df034b1aeb20d432c9a8"],["/2021/02/16/govsites/index.html","5329368c6ccda42d5eac63c1c67f8243"],["/2021/02/17/hexototypecho/index.html","e6246e24d17459897155358e56db0e55"],["/2021/02/19/fiddler/index.html","587a5195bb808b7c95d4a10293591acc"],["/2021/02/22/potplayerset/index.html","db833db4cab6d7df825d6802fac68e14"],["/2021/02/22/studyresource/index.html","9419e1b42b4fe0f57fc75d516fd45399"],["/2021/02/22/telegram/index.html","480ac32c84fda9582a94e25f906cd063"],["/2021/02/22/videos/index.html","110bb40e09265a556452e26b0c0e407d"],["/2021/02/24/mtproxy/index.html","450ca5858baac224f38d1bdb6359794a"],["/2021/03/10/catchcat/index.html","788129f53172cd4896bf4c69a1201f18"],["/2021/03/10/neteasemusic/index.html","ede276ef82e001de4c30243fa49c58b5"],["/2021/03/10/surfboard/index.html","9bac98e4057a2b61c2bd152f801b95a5"],["/2021/03/11/vpnandjc/index.html","7052a524d12af2268aa6519f5a4a6248"],["/2021/03/12/qrcodes/index.html","83f4659ba5f985bd1f503c4ffc11eaef"],["/2021/03/20/qv2ray/index.html","e079dcc460eabbfdbb6348abc81c3821"],["/2021/03/22/freevps/index.html","30a61a848879104fd80df55bb2b0dc75"],["/2021/03/24/tgstickers/index.html","b525fa6740796ae0eae0012477a560e0"],["/2021/03/25/clashx/index.html","1a4dde60d5bcf6b9d304a3155308b1ab"],["/404.html","4ce1fb3b6a669dcce3995858db24814e"],["/archives/2020/11/index.html","c1adfd155c64ce34497b195999c91f8f"],["/archives/2020/12/index.html","7b49940960a5638e70049e08bbbf9ed5"],["/archives/2020/12/page/2/index.html","e73245fc8c09229ba936efab3b52fd28"],["/archives/2020/12/page/3/index.html","9b0b7bb6ab68d8f375cca7bb96a62afc"],["/archives/2020/index.html","bea9d22d146bb4fa8a368a29759939dd"],["/archives/2020/page/2/index.html","dbf5bf05507c4aaaffcb9762bb3af1ba"],["/archives/2020/page/3/index.html","fdb6ccfddb8135a1a0b8ca9a750b6a33"],["/archives/2021/01/index.html","4e3fb249594ca931da7390680a13342a"],["/archives/2021/01/page/2/index.html","00f827ac3bd01a151db218f6651697f2"],["/archives/2021/01/page/3/index.html","37cd4e874943cf197b56d3611f4e58e0"],["/archives/2021/01/page/4/index.html","05c64209cd2256fdc97ecaab97180a81"],["/archives/2021/02/index.html","ba58964ab4ce3970f2ec95d1136b52b4"],["/archives/2021/02/page/2/index.html","48f7ee0fd3257158f66f38f1ecb76192"],["/archives/2021/02/page/3/index.html","7b761faaea1c2bf2cae6a93c67db12a7"],["/archives/2021/03/index.html","cd393bd8f7809604df5fbf0a74b34e86"],["/archives/2021/index.html","66fe3872d11af8d50bb305b554451e67"],["/archives/2021/page/2/index.html","6519f15c925092cd2a596d245c44b3ab"],["/archives/2021/page/3/index.html","bfa86066f05ac152b796a582ff7255c2"],["/archives/2021/page/4/index.html","3b8cb1673e7f2ab76e80d186ce6ed638"],["/archives/2021/page/5/index.html","0df1aed58ed5a23c0d1a30c219bbba88"],["/archives/2021/page/6/index.html","44fd01ee8dfaa9f3819c953510f0b247"],["/archives/2021/page/7/index.html","07af6309b3a36744d2a846aededbec58"],["/archives/2021/page/8/index.html","f7c1bb39f9bf5f01352804f3434c5f71"],["/archives/index.html","93953565392f62c61c9161a6b649af4f"],["/archives/page/10/index.html","694427e3002d4928427ca316f9481a46"],["/archives/page/2/index.html","b2756d8ec5e226c7021633f1d072a27f"],["/archives/page/3/index.html","5b4f6e61795a4b9dc9829f8140d641db"],["/archives/page/4/index.html","476f0799a1bb35e4e4f120d4611ae216"],["/archives/page/5/index.html","7dff0eecdc4aa923741e184d59f4f40c"],["/archives/page/6/index.html","9fb211a1efcaf43c94625dbdba85f152"],["/archives/page/7/index.html","d1b1e01b64a1c54f804bbca7096f6b2e"],["/archives/page/8/index.html","a69d56adda201ae5a6055f009e613581"],["/archives/page/9/index.html","b3ffac7116c9d0728c01023360b5144e"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","18ec111df8fb425e9e5fe250277fd435"],["/categories/index.html","d501f8e6a2f08daf34f1928f5b0b2ef6"],["/categories/下载/index.html","61bae882cb3969b8507d4b8b16d193df"],["/categories/安全/index.html","2de6ab1261a326ac7de055c02f4b6855"],["/categories/建站/index.html","099362f92193dd297978e61561399819"],["/categories/杂/index.html","70607acad6fbf2387a8afbbf7d386108"],["/categories/杂/page/2/index.html","f5bbd183a5a8ceb3c5de6ae7b52657be"],["/categories/测评/index.html","5d2c54b7ef2855d9f644be504ee5400f"],["/categories/科学上网/index.html","4079855713ec3525a02687757a155630"],["/categories/科学上网/page/2/index.html","7ecfda45384bf3e1448c7cea5fcdc9b2"],["/categories/编程/index.html","97aee57458c4a6ece1294e5f0fd8515d"],["/categories/网站/index.html","319b768f170b8c9a14d39514814f0728"],["/categories/网站/page/2/index.html","4c0192de8061396887b2223dd0fbb742"],["/categories/软件/index.html","4c1431f0981da30f3436b6395f12b550"],["/categories/软件/page/2/index.html","2e7134216a693d2d538fd738a66d241d"],["/categories/软件/page/3/index.html","f0817134398c8a43e8c35e19e0c3f5d0"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","d64601c025624beb413f78104dddf7e9"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","ada3a97aad09bcb06e6beb0312b6e99f"],["/ios/index.html","e16ad38af834ec32465f4ab30b98f001"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","2894975e7fe821be6ff77606ac2a881b"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","119a1dd1dfc5d89afdf569d942ab3acd"],["/page/2/index.html","4f4f96197f12b6c885f3deefbf231a6a"],["/page/3/index.html","2809f614b42080d01d47d9b570c0883c"],["/page/4/index.html","7cc3009ca7a7ea716e3e6fdf3bf9649b"],["/page/5/index.html","a68c15bba83e5e13f26015c04444eea7"],["/page/6/index.html","f541bb3c1eac7a99881273e853a2b784"],["/page/7/index.html","50a38f976199f9eeed095f3c7f5f760f"],["/page/8/index.html","e678a7f1f06a574e1ca0cbc2a43bbcd6"],["/page/9/index.html","bd28237da8cd1429beacac3e569579fd"],["/payment/index.html","80220aaad43174b087866f19acbd71f6"],["/privacy-policy/index.html","ff040e1dcbf432f392efb5eeceadc083"],["/rss2.xml","fff58483eb7c3115d34717d04c065535"],["/search.xml","6786f2f0a62861dfcc55006aaa4758cf"],["/sitemap.xml","96100e7401fc3a910ed8b2a2a53d7f85"],["/sw-register.js","087d7cdcc2378c5915ac4f12423f49ba"],["/tags/5t/index.html","0552031b10b953ce7641120b55458b05"],["/tags/Clash/index.html","df4e6057371c98940cd26f3da3646952"],["/tags/Clover/index.html","0f24e03659c1bac1b11d4c6d1ecbc905"],["/tags/E5/index.html","129c8a9ff9a807096ce0f38f5d841164"],["/tags/FTP/index.html","11e5603404109619ab17b6eb734cc337"],["/tags/GitHub/index.html","13fc375244f307d274afb051166f3eb3"],["/tags/Heroku/index.html","da50e12337b76de0b8d7d4f0856a6c03"],["/tags/Hexo/index.html","c69a9407ceee064cde210baaa31978dd"],["/tags/Lenovo/index.html","2aa60778ff3fe140441036234f6f284b"],["/tags/Oneindex/index.html","b73ec6c22d25b02f67bf1cf6815203f2"],["/tags/QQ/index.html","ea09137eaef00fd794a3e3af96aed7bf"],["/tags/QTTabbar/index.html","9660bf580582857a3cda19203bcd11c4"],["/tags/RX文件管理器/index.html","4dda510736da87bca7f7c7a629f44cc4"],["/tags/Todesk/index.html","5001ee14cb825406d057e4e6acac329d"],["/tags/Vercel/index.html","161302b0636cd86d2a684c6b95864a12"],["/tags/ads/index.html","d0247da025b6ba687a3d18de050d1f67"],["/tags/api/index.html","16c16f53e51a9f2523e41580eae706ca"],["/tags/app/index.html","a5075904d3888aee10afb4e6528de136"],["/tags/blacklist/index.html","252e20224b5c99035e99e5bfa9663e44"],["/tags/butterfly/index.html","bb6b94d89f94179308e86119faa82065"],["/tags/chrome/index.html","55a2bfe0f6106d84bcc57c7ec3548ddc"],["/tags/clashx/index.html","2a31ac6d74363e795ac604042e58bf16"],["/tags/cloudflare/index.html","c728a645f27759b56549f234978f4e40"],["/tags/cmd/index.html","49b631c552c712c00ced56d6cac3d2e0"],["/tags/c盘/index.html","a636e8400bf8414f7cdaf4cc5ba1ba32"],["/tags/email/index.html","521ac3c7234624954b86c616203c5241"],["/tags/ewomail/index.html","e671d3eb0bf7ee6dd668e49fa750b307"],["/tags/fiddler/index.html","26e403d34becd700b9640a66e077f0d1"],["/tags/flags/index.html","d79930fd85dff98429d70d412b89c0b4"],["/tags/footer，页脚/index.html","8af8784ba8d9599a5d7a94c77270e56d"],["/tags/galgame/index.html","0ba608b56bac4b6780ac91a7284207b1"],["/tags/git/index.html","4e5cf3b4b7d4bb86a2645bf64ece038d"],["/tags/gitcalendar/index.html","3099f0f4ef18c8cdac627bdb7ad8ec98"],["/tags/google-voice/index.html","a31be026523dc90aace76906b63c360a"],["/tags/gv/index.html","5e95f285cbb8943156ae2efbde575893"],["/tags/html/index.html","cf3e461502457792a15bfc2d93ccf221"],["/tags/index-1.html","78f25a2b9b3cfe3a197cd491466d5eec"],["/tags/index.html","6e1e38c7388afa1b28658d7991262b81"],["/tags/js/index.html","88ad3645745fbc5c0869f419a0c74d7e"],["/tags/jsdelivr/index.html","1c37211d3b44ad3b78a507acaab9559f"],["/tags/linux/index.html","cb3a385fc19deeb2d731e62a28d3a20c"],["/tags/macos/index.html","9fd3c8fd8654f7af122f6e8985e5e48d"],["/tags/madVR/index.html","af2136346e6d40d90afa1bf96c45ed29"],["/tags/markdown/index.html","360c64eb9d2144014418a7deb1b91de7"],["/tags/maya/index.html","f43e17527f4baa028d69830514cb09f3"],["/tags/mklink/index.html","51dbf5d4e22f31ebc97f73bba6622372"],["/tags/office-e5/index.html","f601c5b6045ff4d65d08f9e3e5c30c7f"],["/tags/onedrive/index.html","c1f152930a788acf65f3b5437c92d5a5"],["/tags/picGO/index.html","abe5284acb36b44e217b9151599502b0"],["/tags/pixiv/index.html","d18b9a2c3db20477d098c76b4bfadba4"],["/tags/potplayer/index.html","ffa4c56ce4bd923de9160892a9e54554"],["/tags/proxypool/index.html","8402425d062de8008966a989ba092755"],["/tags/qbitorrent/index.html","f8c78a8803044df3278ae5129f3fdc00"],["/tags/raidrive/index.html","00b1618c505204c5339d004ee27c38c4"],["/tags/screen/index.html","a73552fc8c6409df328549b579f69386"],["/tags/speedtest/index.html","ad564c67629b56fa4ce84ee990811dfa"],["/tags/ss/index.html","ac2958df81b08a1e16898ac2172180a9"],["/tags/ssr/index.html","59e2794e9120a70225ed21dbc9ece36d"],["/tags/stickers/index.html","4fe203b3c8559d77f359580c925eb9ce"],["/tags/surfboard/index.html","fb5f046b2dcd762792efebd674981f3e"],["/tags/tap/index.html","efac43b5e67c4ee8587e13ea89582439"],["/tags/telegram/index.html","7b68c95f98f35c8539ffde3568170d00"],["/tags/telegram代理/index.html","25906ce0156fede043506ed11bf34895"],["/tags/tg/index.html","35bdce9706b598322c9e5e255836a70a"],["/tags/tg代理/index.html","bac8d1c06a732829130407d9073d0ab1"],["/tags/top50/index.html","82fdb699cf915dca7ecd0d2e5d573181"],["/tags/tracker/index.html","ef0020de067defd4e242b1761ec870a7"],["/tags/translate/index.html","91450bbe1e1bba44ea68c06d350a44c3"],["/tags/translater/index.html","64b994d61f7a783cde0a301d2646f1dd"],["/tags/tun/index.html","ccbb65f109b61859400c7b922eb056e1"],["/tags/typecho/index.html","ad2e2755914e92ae29a5b72ed2af4890"],["/tags/v2ray/index.html","a37b388265f19ebdef334c98482786ce"],["/tags/vpn/index.html","f5a2ab073a19c533864a0f1746c15c7b"],["/tags/vps/index.html","90459bd4645d17208f036b3e9a8ae201"],["/tags/windows/index.html","06725a3906f71f14b69184a3578021b5"],["/tags/windows端/index.html","e740b0d1566d1d56067c7a8493458317"],["/tags/xray/index.html","ed83665ebd0be73795e98d64aa262edc"],["/tags/下载/index.html","3d74a7207512ed0e0720b782a55ca189"],["/tags/不限速/index.html","d2e642178a7eb6cb6480e9c4f7617826"],["/tags/个人网盘/index.html","65d00caa084889ceb113016f1b05187f"],["/tags/主题/index.html","692c59eeaca4563c7b525eb8326ce7b3"],["/tags/二维码/index.html","06c28089c5f3c9fd8ad32be34376c050"],["/tags/云便签/index.html","1f340bf304e2d8d63af0bcb0a0d65146"],["/tags/云盘/index.html","9ae3068fa0aeb38e410475240a5a9723"],["/tags/人人/index.html","7fc77d4952d0736774307a9c61f7f415"],["/tags/代理/index.html","3d87d3ac535ee8d1df9432bd93d090c7"],["/tags/代码/index.html","bbd16d384341bb27372803bd3f88700b"],["/tags/优选IP/index.html","5ef778022f4be3e9e5f93361854e18a3"],["/tags/便签/index.html","e1900a0cdbae8767a5fd3a822ed72ea9"],["/tags/保号/index.html","28b355a31ae91dae5ad270a29421990e"],["/tags/免费/index.html","be33f655da2b3f814c953bbf17a16c10"],["/tags/免费节点/index.html","423da9f91bc5a3b25061bfb1d552b96c"],["/tags/加密/index.html","64a687e21bc94349c9c71b74721e74a6"],["/tags/动画/index.html","7e51eb735b85b2c06703cc4b9962d52d"],["/tags/博客/index.html","80def52ea7f02dc52c6ae3e9656f13f1"],["/tags/历史记录/index.html","7d59bf712096ad1fdd0a6be83921fd7d"],["/tags/压力/index.html","8699369dc4a3b24d19db913f85f2df9a"],["/tags/压缩包/index.html","2499494f0ec6e8865c1fa204cf0b57bc"],["/tags/反代/index.html","5b5f58675e5bd92b8de28f577b127da8"],["/tags/可视化/index.html","d7b6f7ddeaabb5328c01f86a26b86d9f"],["/tags/命令/index.html","bc150efe1a01d3b3f99f04259864a470"],["/tags/国家/index.html","7701afc98b20e67714b97c790fb13143"],["/tags/图床/index.html","4c2f9576defd7a2e85b9fd861a26f4d3"],["/tags/图片/index.html","f8992f8010d49ab96f45390d124e4744"],["/tags/域名/index.html","11d328da8a2efd489e438a6fee6907a0"],["/tags/多标签/index.html","29862ac64d151086b90bf8d56d55b584"],["/tags/存储/index.html","dd96b3ef8b4e4b29d91c6cae1637b926"],["/tags/学习/index.html","149d89f0c1c3ddb8da5e14bce08ca760"],["/tags/安全/index.html","1fac8dbaba92b687af22433985592f2b"],["/tags/安卓/index.html","125ecfe9983db2d9f6830c4d69e56a0c"],["/tags/宝塔/index.html","ab0b6ffaf21d4d2ddb9e5c01a877ad87"],["/tags/小游戏/index.html","00c280a00d5d5e70725b198605a4a2c7"],["/tags/广告/index.html","74ed426db51201ef133bc96caef711a6"],["/tags/建站/index.html","37dc1387e0d9d8d0df551dfc5f3c95bb"],["/tags/影视/index.html","02f2e9949c8821939f14465d74ff8cf1"],["/tags/微信/index.html","257d7b3b7755cc1d528e5a5d86512afd"],["/tags/快速启动/index.html","467e267a754837b5dfddc7b47b7280a0"],["/tags/手机/index.html","cd09449ca4f8befe90978121caa00d44"],["/tags/托管/index.html","2d1738956451fd7e2465484796fb5bed"],["/tags/抓包/index.html","1345dda4562ec207f7546f486774e1bd"],["/tags/抓取/index.html","b54e8423a8b39f4c62b4d06f44d06968"],["/tags/投屏/index.html","7602b2281112724b4ac12c34a26e48aa"],["/tags/拓展功能/index.html","a2d59fe49f93d78e2e26276e52464395"],["/tags/挂载/index.html","fe64048035de84dc8265adb6b4fad213"],["/tags/指纹/index.html","1a27eb501c617b220e851df2ecea1410"],["/tags/接口/index.html","1aa11a435da2402c8ec4a61bdc30dc54"],["/tags/提取图片/index.html","e951572cfc7d8b5a87511b4469eedce9"],["/tags/插件/index.html","bce1bb9243c05985d3a2b3b3a19589ce"],["/tags/搜图/index.html","7ff1cd6df8517ba079d2fc2030c2ceba"],["/tags/搭建/index.html","23d94086e2dff703710bf952c49aa3ac"],["/tags/撤回/index.html","6919e937bc7eb4c2fc545550b3f08c19"],["/tags/播放器/index.html","3a46401b2a2459587bb622572f34f5a0"],["/tags/支付宝/index.html","b2c4be6719141647547204fd0fdb9934"],["/tags/政府网站/index.html","45a32c2490919dadcf7760c867a27bda"],["/tags/效率/index.html","9d47169bbe9db1fed282cc0cd9a6e7d8"],["/tags/日历/index.html","50332686d11d7c4c6abfc9d555fca2da"],["/tags/服务器/index.html","ee7c28eaa86da277dde49a17e2e467d2"],["/tags/机场/index.html","91ec9f756d730ac217ae391aab06021d"],["/tags/桌面/index.html","eecaae47c88b43f4b794a96463d56b7e"],["/tags/梯子/index.html","6c912f77257376ef51947e4a5a3fd77c"],["/tags/检测工具/index.html","9dd94a6380dd642842efdd9fad39ad34"],["/tags/汉化/index.html","9a4d2a7b0ba5157c1fd089dface813cd"],["/tags/测压/index.html","555eec355aed8dd91aff0844be5678e3"],["/tags/测速/index.html","2091a089c4ebc1b0f010a1bbffaaed55"],["/tags/浏览器/index.html","80adeca7bf4ea48d98309a2a55c7b497"],["/tags/清理/index.html","c8cba855f092eb0b8feaae2d9f06cd73"],["/tags/滚动条/index.html","9213b239aec2897b5f3649f22d92e7ce"],["/tags/灰色歌曲/index.html","6f25b1bf228b8a00152d1fc8be573c7b"],["/tags/电影/index.html","a5094578849e4edc45b878f8b33aafe5"],["/tags/电视剧/index.html","f9234d8fbd990f4da45c866429d12966"],["/tags/白嫖/index.html","25dfd33f50a44bb2078eac25cb96303c"],["/tags/百度/index.html","f2041baedc29576329f7cf5cf95f4c54"],["/tags/百度云盘/index.html","28b9d8f3cc5607551c0350781a96a378"],["/tags/百科/index.html","864a32e0046c48c88333fa21069f43d0"],["/tags/短信/index.html","915ed15ec2510688c100525dff2e6f97"],["/tags/硬件/index.html","0d3f681a14e3da90b168973e359cea14"],["/tags/科学上网/index.html","2f30942cd2b977023beee33467099f56"],["/tags/空间/index.html","8478d0d76d5ef3a953cba0c7be72760d"],["/tags/笔记/index.html","ffd4295011ab444ee7390de54ef8f3d7"],["/tags/简洁/index.html","745185888a30226888a914fde2612da7"],["/tags/简约/index.html","48f031dd5dce3a2e034100664ddd1304"],["/tags/维基/index.html","54f5ee626cf8d3a513640c2ce4aa0473"],["/tags/网易云/index.html","daae2b3995c989630825cbf3142c38dd"],["/tags/网盘/index.html","4c6e9da8146ab67979bcbdc939609301"],["/tags/网站/index.html","b0a2019abdb57c2b4f25fdb8ae074226"],["/tags/网络/index.html","3c8711cb7a7826fc522172a81a651ab4"],["/tags/美化/index.html","cc7821b9e5621bd006e47181e8e2d063"],["/tags/翻墙/index.html","e9eec7bc49e7246cff134c976909fbc6"],["/tags/翻译/index.html","bd0bfa23a9fccac41e9affea9d329a52"],["/tags/翻译器/index.html","92988e0fd808d99b8ab05951166d731b"],["/tags/聊天/index.html","eb4af41b41bb0b89ba078879aec8d607"],["/tags/聊天室/index.html","dfb8c85f941dfc965995dab9f375b254"],["/tags/联想/index.html","b3d77a1be6e48707a7842f2052a8e8e5"],["/tags/节点/index.html","efd1175c49fae3bb23ccd88bf83319a4"],["/tags/虚拟手机号/index.html","97ac13fac5f0ade080ab69bde34dd8e6"],["/tags/补丁/index.html","bafeac02c2b6b3fa312a6462f8c7e0d0"],["/tags/表情包/index.html","e99e7bc02af4b3ea43c3cf1a25abafd3"],["/tags/视频/index.html","b223911b55e622b3651f3068b0b15fad"],["/tags/解析/index.html","0fe989addd907b148749e01fd4459160"],["/tags/订阅链接/index.html","290ab4aed9c77f1476229554aea0f80e"],["/tags/记录/index.html","cda537ed00dd585d5648ac415c80c934"],["/tags/识图/index.html","5209ea50a069445d7ac2577a944afb55"],["/tags/语言/index.html","79b22178beef956a5805bf0f77c3c436"],["/tags/资源/index.html","dea7776be64b82ccb4c62f410b2d82e7"],["/tags/资源管理器/index.html","b9fc4dbb6fa4c7bba5da3ae31ad5b77b"],["/tags/转移/index.html","1b1b17b80e696c09082bffa138a36a2f"],["/tags/软件/index.html","a1925e39509451e2e39a10e5d6347024"],["/tags/轰炸/index.html","1cbc7a57f3610d6a966da7734325a0bc"],["/tags/迁移/index.html","2a497879c0e5b5d6a51155430913e53d"],["/tags/远程控制/index.html","4ed38e033d8d6c2754eb22b2b6ad16a1"],["/tags/连接/index.html","ca3d19eeb534824592bb4252c58b9ab2"],["/tags/追踪/index.html","2075509c2b70f03f21ca94f58f2f91fb"],["/tags/速度/index.html","03840ad8f74231f8810f0b305a05b58b"],["/tags/邮箱/index.html","6c7cafe1bd18e84f38fc43670e94febc"],["/tags/酷炫/index.html","30325a4a7f6dc61e0c044cc281c2bd05"],["/tags/钓鱼/index.html","0afea69076d37c6fbaabcaf25de2aa54"],["/tags/镜像/index.html","8d7d95a20d7b0c7b35b429ca2f835ff2"],["/tags/随机/index.html","a45a1c35d7a454d563aba5728d9bfa2b"],["/tags/隐藏/index.html","c30ba9a7dcdb57d0fce7b0e4b02d7479"],["/tags/面板/index.html","6b590fc325cf5b291165e91e36fa7e50"],["/tags/音乐/index.html","cb8a56e18633a7c54960e8173c5fa793"],["/tags/高颜值/index.html","4d8ff200012bc702763a15a5cf95920b"],["/tags/魔改/index.html","bc0e1674785c44bff3ddfa65f3128ae8"],["/tags/黑名单/index.html","4a52b0053eb8dcfc9bb1d79732315ee3"],["/urls/index.html","f247ba0fbb047d9f057572ec88c61055"],["/vps/index.html","043136f6e819b7bcd36acf193e017590"],["/支持/index.html","54f55a670a46c73c6a0b237827501989"]];
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
