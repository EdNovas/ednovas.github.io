/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","a5de85969f5292778e2082e6e0725b1c"],["/2020/11/29/clash-windows/index.html","b32d3a9120037cc3bad03a6c26863e9f"],["/2020/11/30/websites2/index.html","f98c62f80684a2c41e4ff0e16f6bd1e3"],["/2020/12/04/iphone4s/index.html","aa40d3edb1a31c9fe6a8bb41fecc8c07"],["/2020/12/04/onenote/index.html","4d0e2dd2758ae78f74d73194f8e9bbc7"],["/2020/12/04/wesites1/index.html","1fde8b6e31cc406294bcd536a2e95a6c"],["/2020/12/06/nokia808/index.html","848ab69b603ad2745e4b4120b9bee1e0"],["/2020/12/07/ipad1/index.html","754bff57bb5f7920b83c2e8c3c3fb34d"],["/2020/12/18/freesubscribes/index.html","983259e94daf7a1b1844b6c4e2e51830"],["/2020/12/19/musics/index.html","e51a0d5298a9d66fc44213e07fb670d7"],["/2020/12/19/shadowrocket/index.html","491a70150675ef046a225569dd0e78be"],["/2020/12/19/v2ray-windows/index.html","67707f5e9b66c34100e60f4b222647b7"],["/2020/12/19/v2rayng/index.html","040197774db21d11112140dff864b2cf"],["/2020/12/20/beoplay/index.html","ac6485eadb40a5e8b02595d76c0abaf6"],["/2020/12/20/订阅链接转换/index.html","954a2a1d4f2665b303ea2ec59cfc14f5"],["/2020/12/21/chrome浏览器下载提速/index.html","4d01a5fae9908c5d89e0f9721a42930f"],["/2020/12/21/免费128线程并发下载xdown/index.html","deec95ea25ec33e9533d24ef0a8e67b0"],["/2020/12/21/免费32线程下载软件ndm/index.html","8380e889ebde4d8e7895a9c3d9f74217"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","375c9253f69c5a026241998c0a585e4b"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","5a624a0d9130ad02b9c18ab0d81c1acb"],["/2020/12/21/广告怎么知道我在想什么/index.html","06a1d4ec1836602c76712d5ca4fca716"],["/2020/12/21/无名·引子（小说试写）/index.html","559ea0661ac11b907ae77c3a875c9cc5"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","7bc5677c51775f512b92d0fca924939e"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","99dacf8f659ffca47516e9b233aab40a"],["/2020/12/21/高速轻量下载器aria2/index.html","51e33e76b601a333879acaec1b927b96"],["/2020/12/22/2020-cee-roo/index.html","588e4932843544768fee40d9b01000d3"],["/2020/12/22/firefox插件、github、steam富强/index.html","13fdf2685e0616afd3795100611fe1ae"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","0c333e4375c0504b574c252d2494e430"],["/2020/12/26/python-day-1/index.html","3eef81e46e47a373cc1c74c67ce2d110"],["/2020/12/26/python-day-2/index.html","3745af739fbba2b0d1d3ff4ad964cd1b"],["/2020/12/26/度盘不限速下载方式一赏/index.html","02a7bbf49fd0250f0be66201f609be29"],["/2020/12/26/添加开机自启软件/index.html","8780ab130932cf9362dae3d40fa510b9"],["/2020/12/26/电脑端截图方式一赏/index.html","2a872f0fb4685b7364d1bc283450fd7d"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","b69770e19682719cabed74f3cbe846ab"],["/2020/12/27/最安全的浏览器tor/index.html","fb21fcac4efd61f700f5f35b1df83557"],["/2020/12/27/网易云刷等级和听歌数量/index.html","acce932426b3d5780cac81e9b5514c5f"],["/2020/12/28/freenom申请免费域名/index.html","0b3807c300f365787ddcf80f210d5631"],["/2020/12/31/机场/index.html","33c3fa5a428373510be38a4cbbcaf9c8"],["/2021/01/01/M1/index.html","004b62a91487fa401bcbb9b693eaf063"],["/2021/01/01/compress/index.html","f3082d66e11b76d3ce50d38ac122f599"],["/2021/01/01/infinityfree/index.html","efbfce277d8282f9f8ee65a025ae81ea"],["/2021/01/01/硬核翻墙/index.html","1fb4e4f054474a2fe15e4f7ce7fb163f"],["/2021/01/02/qq/index.html","c6f444f21526f52732bbca1c4ac9687f"],["/2021/01/03/netch/index.html","a9a49be7160519e603159bf070ef6da5"],["/2021/01/03/waifu2x/index.html","3c5f7523846ff8fd037a395becb7f894"],["/2021/01/04/ads/index.html","48a9e47afe4979ccb5b6a6ec081b8da4"],["/2021/01/04/games/index.html","69afbf82b1394bb0ee3ea7185cfe68c4"],["/2021/01/04/heroku/index.html","2655b6f1e44fdcaa4ce0cd97cb4cdf8b"],["/2021/01/06/movies/index.html","641e834fecd6779a3dbf6d18252af31c"],["/2021/01/07/google2020/index.html","51895c8d8126d291e38a0f2d9f4292e7"],["/2021/01/07/lucky/index.html","45597e61eebdc5359ea16984e5fe9c21"],["/2021/01/07/spotify/index.html","f8c6bbeae023e458001565a0158a8f8b"],["/2021/01/07/thunder/index.html","2209d2dc443575b720e43669535d1f96"],["/2021/01/08/adguardhome/index.html","fd5c76f8f5774f14fc5d9dd4b86491ce"],["/2021/01/10/IBM/index.html","2e7469aacdff82aecb3f0844420ab275"],["/2021/01/10/potplayer/index.html","6561fa82a934e91c5245791f040f9e6f"],["/2021/01/10/sakuraanime/index.html","ff28886aebdcb4693d96113d25cab698"],["/2021/01/10/美剧星球/index.html","8c98843a608166bc7694214b9cde9276"],["/2021/01/12/telegraph/index.html","3ab5900a02a03f40a6432c120432b295"],["/2021/01/14/comics/index.html","6f72e19ebbddc8358eda0b00366b5998"],["/2021/01/14/ftp/index.html","7934776555c0896c93706bfe68a2daa8"],["/2021/01/14/oraclecloud/index.html","2a47ae5de498974c0c09239dc0a18b0e"],["/2021/01/14/porkbun/index.html","a5f929b57c96b63ca00046c6e3f2d94e"],["/2021/01/14/powertoys/index.html","2080a6118b2cf78d7096d156e4c32f80"],["/2021/01/14/taptap/index.html","b9f71bdf44b97c534d8ddd3ad2298684"],["/2021/01/14/ubuntuvsftp/index.html","7cf903f7f84340b112ce758634e06a59"],["/2021/01/14/小说/index.html","e65977cce3ebfd6ab02735d0f73e10fe"],["/2021/01/15/freeproxies/index.html","38cbac37200a7b41b2c58f86399d9e22"],["/2021/01/15/incaseformat/index.html","b5b55675e5f208e454ffc5457c3defd6"],["/2021/01/16/euserv/index.html","a84a84467e3da6508f88da0e29c5f504"],["/2021/01/16/winxray/index.html","6757eb3a63618796a410c4a5dd76f74e"],["/2021/01/18/qqreadhistory/index.html","2da48d2f5b20a438d09110cc7c5b5fb9"],["/2021/01/18/qqrevoke/index.html","6f38cced74f04ed192be04e6def5466d"],["/2021/01/19/freevpn/index.html","89b50c3e9a4da08d2ac52fadf0ad410e"],["/2021/01/20/browsertrack/index.html","532206308b270626203265b7ef6d2ea0"],["/2021/01/20/v2ui/index.html","fbdf26ca572c0e2520af7ac2a0b29f26"],["/2021/01/21/failedtoconnect/index.html","ddd14a1e23376933b7837b5da0099cd5"],["/2021/01/21/gitcalendar/index.html","236cf9a365503a6dbdff578cf514101d"],["/2021/01/21/markdownformat/index.html","a28d8d3aa9898d9bc83961fd3b6f3e6f"],["/2021/01/21/markdowntable/index.html","22b480e63e527a2b57aa27e2771f4784"],["/2021/01/21/vercel/index.html","d0d4fa4099d6b6a25449c4e68a26ded2"],["/2021/01/22/hardware/index.html","97a0da9e1bb2a3d2133ab1d014262e66"],["/2021/01/22/muviz/index.html","0f7626f60631d99bbb6d6b989bf92226"],["/2021/01/22/randomapi/index.html","08a2498b843a5b23aac03caf3f9eae1c"],["/2021/01/22/searchimages/index.html","f23985b9fcf3e91f02ddeaaa9bbb2b3d"],["/2021/01/23/RX文件管理器/index.html","565768c3f7f187c7e9ec2ba73d8df0c7"],["/2021/01/23/chromeflag/index.html","02fddb9eb3ef05e534e3624822601a3c"],["/2021/01/23/qttabbar/index.html","5da632f4c67a719122620dd6b54f7885"],["/2021/01/24/githubspeedup/index.html","16f47ce2a92104936bbb45a8e390b261"],["/2021/01/24/jsdelivr/index.html","81baf64f2c7390e56868da25b4e126d9"],["/2021/01/25/note/index.html","28fe21a8ada9ce9b107de33f65747e93"],["/2021/01/25/soul/index.html","a7cc44154f7d95bdb7c9db87c4a34c85"],["/2021/01/26/herokuxray/index.html","55d5fa8437e393850c3505c77eb62736"],["/2021/01/27/proxypool/index.html","93941d4c7d6a0570db16ec6bda494a08"],["/2021/01/27/tracker/index.html","046a73ebba03ddbae35c74a3e205a732"],["/2021/01/30/pandownphp/index.html","b4cc669397199a299841ef1a516d1e47"],["/2021/01/31/newgroup/index.html","5778348436ee7ed649faf6b4351acb32"],["/2021/02/01/clashlanguage/index.html","0727ae8f6601ecdf65b948168a4e7a0c"],["/2021/02/01/encrypt/index.html","c174ed49280ab1b0ddfa5f666fbfb1b3"],["/2021/02/01/footermotion/index.html","2c809c34a7c6b2376cd7e6770440a1a4"],["/2021/02/01/gitter/index.html","521fc51c8e7dd7fe71e0c398ad0c76fc"],["/2021/02/01/pixivtop50/index.html","f38abf24b1fc4c59425e48394aa8e93d"],["/2021/02/01/scrollbar/index.html","9066397a87161784466498eb845d62b4"],["/2021/02/02/clover/index.html","9c9ae440e96c20516323a3e7abe3bf0a"],["/2021/02/02/maya/index.html","fb012cc83944c044849ed9dc3684d40b"],["/2021/02/02/speedcontroller/index.html","d84afebfc5b5387ade1e24c85f741f8f"],["/2021/02/02/yesmusicplayer/index.html","225e27ccb413f6dc17018c52170fc28c"],["/2021/02/03/lenovoonelite/index.html","37bfaa9af4e7cd96a14f039ca63c65c9"],["/2021/02/03/skipads/index.html","60f624c4a9a4746a4eefdf09a66c8a99"],["/2021/02/04/picseed/index.html","5c343c613f72e4703e912d0199cdb800"],["/2021/02/04/renren/index.html","b214f5924e015766261c3df2bd45f1b8"],["/2021/02/04/serverstress/index.html","f1950f327b77610a81bd955965f07686"],["/2021/02/04/wikipediazh/index.html","ab2626d934bfe3766f7d25b08ef1f86f"],["/2021/02/05/googlevoice/index.html","559d9e90ec216f791c7f70968c3bdf87"],["/2021/02/06/clashconnection/index.html","b657d3fba6d99ad746bdc2e4b0e02258"],["/2021/02/06/gvtransfer/index.html","7499bd6e1e346d4b15857d3c9daf13cd"],["/2021/02/06/todesk/index.html","e93db3247ceec8f019d18b9770aa8dc0"],["/2021/02/06/vpnblacklist/index.html","9a0b9687d708c0846a9a9c3ca2d00da7"],["/2021/02/07/mklink/index.html","9b2e75ec249e252a5025c0df7bb60550"],["/2021/02/07/speedtest/index.html","bb2602d4fae03c553df23fdab54cac30"],["/2021/02/07/translate/index.html","9ad4b2cecf69c282d36ab13a447bce77"],["/2021/02/08/ewomail/index.html","1a59a555bdafb3d874b440a517515a22"],["/2021/02/10/officee5/index.html","a6cf4025759d4f272f30932f0b3b2a71"],["/2021/02/10/raidrive/index.html","13eb1eb344c6ac9bc61f7ffc3c5b6ad9"],["/2021/02/13/e5sub/index.html","af92cce6021eac52f63a383fb0f06a70"],["/2021/02/14/screen/index.html","00a3f8767d01a2633690b24698094aa6"],["/2021/02/15/clashtun/index.html","b6a460ef9c75f42fe8aa066e9992f250"],["/2021/02/15/messageboom/index.html","c232ef426db860fec25826a2d9f64d0f"],["/2021/02/15/oneindex/index.html","2c46464264a931c5c2c497450903f978"],["/2021/02/16/govsites/index.html","154b26af9168bb56fd656b67e75bb74d"],["/2021/02/17/hexototypecho/index.html","13171ef529f7428629ce13674bad0da5"],["/2021/02/19/fiddler/index.html","33ed15544dbe3ee338e3da1184129b5e"],["/2021/02/22/potplayerset/index.html","d4dcabe043a6ee14e3e6f86114e555f8"],["/2021/02/22/studyresource/index.html","8828f8a5f974a8fbb179bae31b9fe0c5"],["/2021/02/22/telegram/index.html","d06ce27b8839fa53e6c0e7c911ea3398"],["/2021/02/22/videos/index.html","64cefb41b967d9c15239ec56ae95da87"],["/2021/02/24/mtproxy/index.html","6a998f61fb68218ed575854153e97063"],["/2021/03/10/catchcat/index.html","9840a8e6d86f531249e1f83fa62cba97"],["/2021/03/10/neteasemusic/index.html","85fcddc26800629bbf75b390dc094254"],["/2021/03/10/surfboard/index.html","6cf24df6b7d5bf0262a40ad17d9647db"],["/2021/03/11/vpnandjc/index.html","e46b63bc12b0fc12875603e6a9b2af48"],["/404.html","a145db27fec025185581f3da715aed53"],["/archives/2020/11/index.html","dc4a2fd8e61bf964c57a04c14c1babc0"],["/archives/2020/12/index.html","5e880922f8f92228b43a1034b18312a6"],["/archives/2020/12/page/2/index.html","718d84f657fc34bb36fb8496fda7377c"],["/archives/2020/12/page/3/index.html","8084d53925911a9da1ed8f5d58e8c367"],["/archives/2020/index.html","abf773cc5a460644bff3a7b02dc04af0"],["/archives/2020/page/2/index.html","8a3ba4632f7cb8b02c2a51d63df475ca"],["/archives/2020/page/3/index.html","cbaec60a4859a5440ca2e483e35fb20d"],["/archives/2021/01/index.html","980e7bce583e37f1a1dc22f5f3748aca"],["/archives/2021/01/page/2/index.html","0000640dc3cf81449136c7447d45b6c5"],["/archives/2021/01/page/3/index.html","07805cf592af223b15f6400fc531da28"],["/archives/2021/01/page/4/index.html","197955b822ec2789ebe783a9271fe0d2"],["/archives/2021/02/index.html","e6e59ba8000f813abaade8dd2db927e2"],["/archives/2021/02/page/2/index.html","24054e18b7003c24b5ecee640500ae82"],["/archives/2021/02/page/3/index.html","61039078dca722ce4e858d8fa00521b7"],["/archives/2021/03/index.html","3cdc2e570abf5fa42acbd356b3f9a351"],["/archives/2021/index.html","cc1c262130f7d42a065c4cf0c9c987e3"],["/archives/2021/page/2/index.html","609c6dce32833d658ddf40e2fb73589a"],["/archives/2021/page/3/index.html","6159313b0cc21b86e087ef779d97f63c"],["/archives/2021/page/4/index.html","5d07328c48fab9fd202675817da1bd3c"],["/archives/2021/page/5/index.html","735b30b6f8eafbf80da9915aaa890270"],["/archives/2021/page/6/index.html","23b2ead74cc657ea91cf721400a66d31"],["/archives/2021/page/7/index.html","5340e599046bf9e579418d0bd2aca6c9"],["/archives/index.html","925e3a00a83d055fcc026a44f22f06f6"],["/archives/page/10/index.html","e9e973b11e2e4f5875403812b2217f91"],["/archives/page/2/index.html","40d23421179a2aee083848d6b9f64b41"],["/archives/page/3/index.html","2ad3556f5b3697bb9d9e8d1ac73984c5"],["/archives/page/4/index.html","62be96ae3c95d41b40dafa52d64bc89e"],["/archives/page/5/index.html","ab7adcae034aad3265d9cda2fe734389"],["/archives/page/6/index.html","0c32afff2fb99ca4e531e7043e3dd594"],["/archives/page/7/index.html","7fa7cf05edc21306b1c25915e8f2f13f"],["/archives/page/8/index.html","9306d2e371e4faf65ea88ab424ac1d0a"],["/archives/page/9/index.html","1a44c8eeca33e22ca00567b7dfd44188"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","140dcd77a56c79d9eb0468ec0df6b3cd"],["/catchcathard/index.html","e9291c58bce68730cd21cc4e2b0a474b"],["/catchcatimpossible/index.html","ce8ac7a16e2b7990d9e0aeb78de4c0db"],["/catchcatmid/index.html","dc073d912aef351b621ce171416ebd82"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/categories/VPN/index.html","3951e7bb683f4dac9840759ed840470a"],["/categories/VPS/index.html","fb78683b622a1b05be4fe88f62411665"],["/categories/index.html","6f5a97b9dd8db90688ae2fb8cb6c1f4c"],["/categories/下载/index.html","cc1cdeb44e8d44cc7822a7c3ac6ad58e"],["/categories/安全/index.html","f5c5f1f3923ffebb156ac7d710ab777c"],["/categories/建站/index.html","4def2bfbf7a8a6d63d762f1d7e4cd964"],["/categories/杂/index.html","b359e84606cb33b10da5ef78cdccdef0"],["/categories/杂/page/2/index.html","6e1ef16d87a1b6af08e52b6161699ca3"],["/categories/测评/index.html","b5a0f728b6406b3712fd725d352df6f9"],["/categories/科学上网/index.html","28f13de2df0c01a58601370842a2db21"],["/categories/科学上网/page/2/index.html","b318c250c060090ce2f0b14e999cea22"],["/categories/编程/index.html","96d33723b6222ab874cedf57c0331d68"],["/categories/网站/index.html","90e0ccbcfb0ad76453b15a61c94ed809"],["/categories/网站/page/2/index.html","624a4849a79377e07067e1d6e8d70bda"],["/categories/软件/index.html","cf2abc626582376ce84f6a15de173644"],["/categories/软件/page/2/index.html","d6a7c8b0ab59aa096e05bc1ce865517f"],["/categories/软件/page/3/index.html","ee5d75948469ff38f6897223a17168c0"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","14e136d02695f93c1d8a46b93196bd34"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","a2277772a5ac82b452a873caf5755620"],["/ios/index.html","491028407ce2df8e2aa747b650857252"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","20f6ae500505df4a8bcae5aa0da9cd42"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","e60c08e682bf937baa61996aad637ba8"],["/page/2/index.html","03fe5833bfb7f62ba76d95acc8787187"],["/page/3/index.html","56c3438cb7f24b323bc19e2ebb6d4f78"],["/page/4/index.html","8d0e0ecea5a6d213347a1aa62d78519e"],["/page/5/index.html","511cc7dba30a97b7e4039c9892b09fb6"],["/page/6/index.html","4acd6b6653a531676812dc7b88cea604"],["/page/7/index.html","a4816d401f2c3ea483303e82b543e756"],["/page/8/index.html","6b95fbd57567076360bef5f1111f1b94"],["/page/9/index.html","50fec7a0413b0edebee5bb41f53238b0"],["/payment/index.html","dc04d05abeb00bb5784ae74bb9870f05"],["/privacy-policy/index.html","ff9db3be6b8916cf16e19e2156d252ed"],["/rss2.xml","cc2117b099f6c0458210f94d3fe76a63"],["/search.xml","34cf7446f5e7553da9384889bf8d4bed"],["/sitemap.xml","62cdf1cda2c7c91d944f315c0f8e7676"],["/sw-register.js","90ee6c4b671a64088c7a3dfb64ab91ef"],["/tags/5t/index.html","a97665e92282f3f0eb0b82b673d2e750"],["/tags/Clash/index.html","a7c0b21db9197eb0f9c4b7a207de2009"],["/tags/Clover/index.html","fa06612311eda9b0db97ac49f9c355f0"],["/tags/E5/index.html","2f7fe9a6b8a6071460957052b6a4bd55"],["/tags/FTP/index.html","eb221a1bcbf3fa30225de8eab5a78015"],["/tags/GitHub/index.html","a216eb514434f5ef46458efb8853619d"],["/tags/Heroku/index.html","6f28dcda8e76891466994dd79824b1d3"],["/tags/Hexo/index.html","942e83361fbb430877b4cdbd6f5626b0"],["/tags/Lenovo/index.html","c6699c71b27d733174ebd76451506f00"],["/tags/Oneindex/index.html","d89423aa6c0788776fc6fe10f930d699"],["/tags/QQ/index.html","6e520cfd8faf564846d2e4efd4ad1623"],["/tags/QTTabbar/index.html","3a39cc7e45f6298058a1d5594a16a5f2"],["/tags/RX文件管理器/index.html","d002dd4c1f50b5f92b35439606a4c30e"],["/tags/Todesk/index.html","9682d96a32d65e5876d3dad184f6b8e0"],["/tags/Vercel/index.html","23dd46d06aa843073d7abe16f85979f7"],["/tags/ads/index.html","4c179638ab563af35a1825c2aef93380"],["/tags/api/index.html","d7bb5a0b62bd822413f83cdbf97beb70"],["/tags/app/index.html","5ba76dc4dbac4a085a49f5620f6b823f"],["/tags/blacklist/index.html","d527c0d61b924233036e36c02cf82fcd"],["/tags/butterfly/index.html","e1b61e3929bf0b2a072a9b67c6c2ca9a"],["/tags/chrome/index.html","cf07925fd0f98e888b101e509601cd3e"],["/tags/cloudflare/index.html","680c9ebaa4a6b606335086d2329a6cb7"],["/tags/cmd/index.html","812e0df8af6383903c7a17eafe67b939"],["/tags/c盘/index.html","cc98344cd3c93fb4bff1bd26457f641f"],["/tags/email/index.html","33b2651c30cb5dde06ccb711e41f8e68"],["/tags/ewomail/index.html","b8d47fa4dfcddd44a36ddf0d4db8ba3f"],["/tags/fiddler/index.html","90b49dde19c4108402e41b4d73e39f57"],["/tags/flags/index.html","291359cc4fb9a9a63bcdd1c4b99f4bc5"],["/tags/footer，页脚/index.html","06759fdedd6358c1b0569bc7a28dc515"],["/tags/galgame/index.html","6232c3d3806ddee4f9a27ac76189a686"],["/tags/git/index.html","b98dec9db44d94121b2f68291c7751f3"],["/tags/gitcalendar/index.html","4161a5a8f00e8109af39fff0b4875bcb"],["/tags/google-voice/index.html","765da612acff1cd34dc7d9c6079c6eb3"],["/tags/gv/index.html","9ac7550a68c75344d86538cdd029921b"],["/tags/html/index.html","7959d8fd03adcf9ae84628fefca465ba"],["/tags/index-1.html","afdd8785f7095b7f061300632d150cd0"],["/tags/index.html","94a14f0307f3aeed5b92af6c85fd9630"],["/tags/js/index.html","7c186ca1f4c82abd2c47e9c904ba35a7"],["/tags/jsdelivr/index.html","231ceae293bf83a5b69e7ea99ae35ab5"],["/tags/linux/index.html","b26e47b76b0fad39a7921132fc272228"],["/tags/madVR/index.html","bb5d4d251e627525ecc58089eecd4884"],["/tags/markdown/index.html","e4c78240f078986a0f452d5df9e27a45"],["/tags/maya/index.html","40241ec4beba44dd66bd9ef5850ce4e4"],["/tags/mklink/index.html","72a2ac3eede6fca5b0e565c7ea107062"],["/tags/office-e5/index.html","9b082b19a9a844c835cd6b8cf6d3a1c4"],["/tags/onedrive/index.html","f7dca6ab9adb7f909a7eb72f3cce9233"],["/tags/picGO/index.html","7f1ab0f40a98e9c831ebda210a816811"],["/tags/pixiv/index.html","ca3ad17cdd363c739b99693fa0c55731"],["/tags/potplayer/index.html","f58ea48a9805e63891ef116062af05e7"],["/tags/proxypool/index.html","661ba197112396b05e1b95fe84fdc5ea"],["/tags/qbitorrent/index.html","46ab91691734571414a491baa68a23f7"],["/tags/raidrive/index.html","6c1a66c5c4bf9dcfa95a6595aa93b8b1"],["/tags/screen/index.html","0c193c2252613720cb010e1cc60a36ff"],["/tags/speedtest/index.html","6c1a45dc36ec4bb8ef10d0c6ccf324c6"],["/tags/ss/index.html","a58bfdc4ae02f2616aed581afbb36d50"],["/tags/ssr/index.html","a9491a03b0f4f79434d9037712fe1431"],["/tags/surfboard/index.html","e40f631cc1aefdcb757aa1d9179cf843"],["/tags/tap/index.html","9d2aae8838b9363baccc312bfb8749ca"],["/tags/telegram/index.html","6c1c2e675e36c3c11001b39bc1524649"],["/tags/telegram代理/index.html","aa923d17777dd67cb40c7998bb0bdf42"],["/tags/tg/index.html","26988365bdfc03a6d41c7da4c1abbbb5"],["/tags/tg代理/index.html","b7c732e0be2fae1ce200726ad703761f"],["/tags/top50/index.html","e952a2619506098fa01365d8cf5cba4c"],["/tags/tracker/index.html","22bf31d3b98914d5cd886421c162201f"],["/tags/translate/index.html","b7be0e1e42e578fad4721d51c5e09810"],["/tags/translater/index.html","bce0f616067c2c7623ac7a3e63933ea2"],["/tags/tun/index.html","362fcb39c71f2e92dd31542753e80ea3"],["/tags/typecho/index.html","80b03415b21f6450ce4bad8546c3fde1"],["/tags/v2ray/index.html","28eb6b36347148b33c6b8a9ff79dc52c"],["/tags/vpn/index.html","05aafb14e5b008e06726d3e3bb035d35"],["/tags/vps/index.html","d6bbab24d4178563371b15f92f8edc6f"],["/tags/windows/index.html","1d37c38dd51070cdc6be62739ca4e183"],["/tags/windows端/index.html","5e9686ba246147e14ff24e2f52d14e8a"],["/tags/xray/index.html","35cef1027542b8fde95225b6f1162f55"],["/tags/下载/index.html","a8aef9e47731116bf1b4c83ec4bc16fd"],["/tags/不限速/index.html","80db1255709aff574c5cfbae3685baba"],["/tags/个人网盘/index.html","287de275071d794210d1564fec0c4da0"],["/tags/主题/index.html","34fc46e226c1f34116401219fbe1052e"],["/tags/云便签/index.html","c3933ab1c602a211b54c897538af909f"],["/tags/云盘/index.html","d395d0bb9c30106cffb35faa73b48349"],["/tags/人人/index.html","18923aeeaf5a3c61cfa9f0a06eec6474"],["/tags/代理/index.html","8652a6378b0b047d938eec070dbddb33"],["/tags/代码/index.html","7b7861f5c0c1b717e3c607ae761439bf"],["/tags/优选IP/index.html","456e80df89854d45c6e234aa58d6e4ce"],["/tags/便签/index.html","9999467d575694190e6dfcda568b4a11"],["/tags/保号/index.html","db70c1c655ee361310dd4c2e73881c11"],["/tags/免费/index.html","6ddc6459bbea778f754e757ef60204e9"],["/tags/免费节点/index.html","a5fee10c0c97b25895a8f2ca6b6ace7f"],["/tags/加密/index.html","1404566884ec7a4e6d22739568d1a73f"],["/tags/动画/index.html","34c0a95b9412d87cc1a0e28a9e7ad679"],["/tags/博客/index.html","439bff6dba85c1e2c9bfc9256e03dc58"],["/tags/历史记录/index.html","dc05c21793554e0bee7b9417a993800f"],["/tags/压力/index.html","6ed1d15f3d8f8f0fb9a229dc19bf6131"],["/tags/压缩包/index.html","98ee44a1856daf8a55f0d4d24db8b87c"],["/tags/反代/index.html","e2c70f74a630511931f440da4ce99a92"],["/tags/可视化/index.html","7a92f2a65efcc4c436cb006f585ad5da"],["/tags/命令/index.html","86aa7f429fece2605eab094cc67be038"],["/tags/国家/index.html","fcc0cb7a89c7ec39ed7f4723b4631e93"],["/tags/图床/index.html","4cb90f3a19499f2aa9555b1099ba069d"],["/tags/图片/index.html","20d1bfb5d4337f4896f5aa589328061a"],["/tags/域名/index.html","a87190df06be66708c7cf1a3874f22ad"],["/tags/多标签/index.html","60dfcad1740765a3fa8d3601a861fcf8"],["/tags/存储/index.html","bb4f5caeb1eeed4f1f19aa751021dc38"],["/tags/学习/index.html","1bb16d2f0f6874ad36af031b382fc64f"],["/tags/安全/index.html","d4027370de886032c7c9017fceb2276a"],["/tags/安卓/index.html","7772a0b658c8df5685d1d0d5d7699ce9"],["/tags/宝塔/index.html","32ca394ac4882b389f46ad27dc992e84"],["/tags/小游戏/index.html","31a69ad58b26b7058ec5193a8ef4bd79"],["/tags/广告/index.html","ea117102ecee1080c394553db36bed85"],["/tags/建站/index.html","958d98f20b5d7ec6ef5ac7831cea10b5"],["/tags/影视/index.html","909fc324fae9d9b7e4098b98b4bdb2a3"],["/tags/快速启动/index.html","561e4faa61a189cc592fbfe1b5e5f5f0"],["/tags/手机/index.html","b00e9748f6c2a958c5012d3b21619a5f"],["/tags/托管/index.html","72329b748417b7ce284205160b3c43f4"],["/tags/抓包/index.html","a80f4ad9d26c0e4bb797275450364f59"],["/tags/抓取/index.html","a7847a28838bdd92c0f76458364364dd"],["/tags/投屏/index.html","ebd98e63ecc0faefc8c60ddc851c580b"],["/tags/拓展功能/index.html","ee4adb78150c19a72ee39633fff4b637"],["/tags/挂载/index.html","01896df14723ca4e9b9fe2e0a57a9fc3"],["/tags/指纹/index.html","61b5ebb9fcd219357e72de74a78dd691"],["/tags/接口/index.html","d8d1562f0fa371a2660a0044145338f8"],["/tags/提取图片/index.html","ba0771de53d71e44bec13670fd330ae9"],["/tags/插件/index.html","04537aa403cabdb0b5d346102488a770"],["/tags/搜图/index.html","f7db7f96009dbb0a95b19523bee6231d"],["/tags/搭建/index.html","03beba8c7080db180a60c6b1d492f761"],["/tags/撤回/index.html","ee54534f9fab08a86d7f17fd17017d0e"],["/tags/播放器/index.html","10fe7a5159afbe63c01e597a3905ec9d"],["/tags/政府网站/index.html","e23700c6e0dc0cb0b00d30d254fb7fc1"],["/tags/效率/index.html","ebf3e668a31474ec169f9653447e0bb8"],["/tags/日历/index.html","a21a5f7bbd506b50b48b513c9f280429"],["/tags/服务器/index.html","a2ccd8c30a288b54bc812d290f58ee8a"],["/tags/机场/index.html","131a3100d5522142b561104b4d4d48db"],["/tags/桌面/index.html","d0ab7a6ddc6cbe6882765e1ba6ed6787"],["/tags/梯子/index.html","f0fcd5a376dba9b9f507d087ddc3c83d"],["/tags/检测工具/index.html","e61d23a3e6634dda1b36a000bdec7c1c"],["/tags/汉化/index.html","3a6bc58c1775d8daf3fd18b1844e0712"],["/tags/测压/index.html","8f26e490977661f23117e9bd95bd3d25"],["/tags/测速/index.html","f7c56ee5d118a18165652f1351b6a3e6"],["/tags/浏览器/index.html","67782cca1ae6a74789dd1bd89e4ab8ae"],["/tags/清理/index.html","3ee35838a9e549a0eba05d4888a8f5a2"],["/tags/滚动条/index.html","10d322366a0740be6e0e732e33d2d009"],["/tags/灰色歌曲/index.html","ec4a55367babed1b6127b9b7bea2473d"],["/tags/电影/index.html","196b385edc73226a8a6b1bab9911101a"],["/tags/电视剧/index.html","72af19dbdbc09ae17dabcc1e14a0e59f"],["/tags/白嫖/index.html","ae2dd4e1310fcadb94087ca8c686307b"],["/tags/百度/index.html","796b5dde1252c89d3491fed4fc00389c"],["/tags/百度云盘/index.html","da05115a54d3cd362482856a11b1f0fe"],["/tags/百科/index.html","eff66ff75ac1df762762b54f30533898"],["/tags/短信/index.html","6765e652fd080b8e4e58befac9769bbb"],["/tags/硬件/index.html","41f6d3c6eb3f9a7903afdfb4c36f7ae6"],["/tags/科学上网/index.html","7d4fccd4cec38f581bac0e6aff652e40"],["/tags/空间/index.html","9206e13c167e2586cc9192e6391de52f"],["/tags/笔记/index.html","2f6eff764fb6dce25e4bd8c72b2185d2"],["/tags/简洁/index.html","ddd974bb7c940d3f3cb4b4b36cb96656"],["/tags/简约/index.html","331d5c3cef88c520101b03566aeaf441"],["/tags/维基/index.html","b339cdd3953edbf47e1accec329bfe61"],["/tags/网易云/index.html","ad48bc13d8d2df03e51201ebbf1c6e48"],["/tags/网盘/index.html","679c36f0a8f78bde4a59811705c4e44c"],["/tags/网站/index.html","02135f95476f4c40623b73ad52b024e8"],["/tags/网络/index.html","b39d07dfb52975d1c48325c14710f550"],["/tags/美化/index.html","97bd8f0244ec3b85db81cb06a3f396ed"],["/tags/翻墙/index.html","047c05e7564b705756b500d65fa4566f"],["/tags/翻译/index.html","9c4da9014eab67db54f6a148c9274d82"],["/tags/翻译器/index.html","d2f0a1932b6bc2559075106349cbf4d6"],["/tags/聊天/index.html","4f9a1eff08dcd3da445ee9a704ffa31e"],["/tags/聊天室/index.html","628350b204660511950aafb0120c4bab"],["/tags/联想/index.html","8d62034d1d11955cec63296a9a93487a"],["/tags/节点/index.html","035b309329b6d33eb7ca3318b663e0f1"],["/tags/虚拟手机号/index.html","92b3f46af467ed70c4b3c7154991c083"],["/tags/补丁/index.html","81a5af120b2f9e7896e2dc0bd94cee00"],["/tags/视频/index.html","64ce506fd3485867133ac20e1749a285"],["/tags/解析/index.html","6e882ed06b1636b7dff07a4fdf0d6610"],["/tags/订阅链接/index.html","207154bca86e3162e4d166a4bf760155"],["/tags/记录/index.html","e1cb2b79e89443ccc1bcf09dbb2c9a44"],["/tags/识图/index.html","13fa8f95746131176a8b0ee7c02ad7ae"],["/tags/语言/index.html","7b385aeb40d6fadf636655c5855cdaf3"],["/tags/资源/index.html","7766726e1a341c7b974fb52ea9246f4e"],["/tags/资源管理器/index.html","f89004bd9edc6011fecb820cd7009677"],["/tags/转移/index.html","4856894293c2199b7bf9f783523d86a7"],["/tags/软件/index.html","3bb479700eb0f3d472928f2196b0c3d8"],["/tags/轰炸/index.html","5909a7bd222859c884d35f1e6fb6de1b"],["/tags/迁移/index.html","ec50b3b4e8bedebfcd82d102d56b8e42"],["/tags/远程控制/index.html","05ce9dedeca03430ea6f99f6e73fda7a"],["/tags/连接/index.html","0fea1c050fbab48d009a59d3ae3f18f0"],["/tags/追踪/index.html","0e66b4267a28643f22395a120812d595"],["/tags/速度/index.html","5870d89bb322e84ebb8af310ea364842"],["/tags/邮箱/index.html","602759856078dfd7bfa060f732abb09b"],["/tags/酷炫/index.html","80b06a4e9d08160812fd1637bc8096f8"],["/tags/钓鱼/index.html","7c36a8f2e92fe9972fec2d3028b0771c"],["/tags/镜像/index.html","585df145dab8799a285d3e62bd05d63c"],["/tags/随机/index.html","92d59d63a15646ea2b2e4c8cd966f7a3"],["/tags/隐藏/index.html","24bef61e9f37b29991641d6e6346698b"],["/tags/面板/index.html","77b12b39f8778b2f707980cf32cba432"],["/tags/音乐/index.html","7fd7a670855dfeff13b3aeded4769ec3"],["/tags/高颜值/index.html","b9684064a4b2e082dcfa8992de6cfc25"],["/tags/魔改/index.html","8dc5eec284c3573fd53b2a31751d0724"],["/tags/黑名单/index.html","36ab1c969a5b113f3886393eaef38691"],["/urls/index.html","176424970816c84af3fc61839a0cabc7"],["/vps/index.html","0146ccb1941d3779d5a4f2d7a86003ad"],["/支持/index.html","795b7b153512a09178ec722ff981052f"]];
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
