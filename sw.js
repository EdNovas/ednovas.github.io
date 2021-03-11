/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","808594dd2ca4498dcfd0a19a2035a7ca"],["/2020/11/29/clash-windows/index.html","794765a524ebb5287a2c913f73fd4c75"],["/2020/11/30/websites2/index.html","f98c62f80684a2c41e4ff0e16f6bd1e3"],["/2020/12/04/iphone4s/index.html","aa40d3edb1a31c9fe6a8bb41fecc8c07"],["/2020/12/04/onenote/index.html","4d0e2dd2758ae78f74d73194f8e9bbc7"],["/2020/12/04/wesites1/index.html","1fde8b6e31cc406294bcd536a2e95a6c"],["/2020/12/06/nokia808/index.html","848ab69b603ad2745e4b4120b9bee1e0"],["/2020/12/07/ipad1/index.html","754bff57bb5f7920b83c2e8c3c3fb34d"],["/2020/12/18/freesubscribes/index.html","90b9417dde2e8e64ca513320e95f6b71"],["/2020/12/19/musics/index.html","e51a0d5298a9d66fc44213e07fb670d7"],["/2020/12/19/shadowrocket/index.html","c3b75ebba30f281675a6758884797d28"],["/2020/12/19/v2ray-windows/index.html","67707f5e9b66c34100e60f4b222647b7"],["/2020/12/19/v2rayng/index.html","040197774db21d11112140dff864b2cf"],["/2020/12/20/beoplay/index.html","ac6485eadb40a5e8b02595d76c0abaf6"],["/2020/12/20/订阅链接转换/index.html","954a2a1d4f2665b303ea2ec59cfc14f5"],["/2020/12/21/chrome浏览器下载提速/index.html","4d01a5fae9908c5d89e0f9721a42930f"],["/2020/12/21/免费128线程并发下载xdown/index.html","deec95ea25ec33e9533d24ef0a8e67b0"],["/2020/12/21/免费32线程下载软件ndm/index.html","8380e889ebde4d8e7895a9c3d9f74217"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","375c9253f69c5a026241998c0a585e4b"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","5a624a0d9130ad02b9c18ab0d81c1acb"],["/2020/12/21/广告怎么知道我在想什么/index.html","06a1d4ec1836602c76712d5ca4fca716"],["/2020/12/21/无名·引子（小说试写）/index.html","559ea0661ac11b907ae77c3a875c9cc5"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","7bc5677c51775f512b92d0fca924939e"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","99dacf8f659ffca47516e9b233aab40a"],["/2020/12/21/高速轻量下载器aria2/index.html","51e33e76b601a333879acaec1b927b96"],["/2020/12/22/2020-cee-roo/index.html","588e4932843544768fee40d9b01000d3"],["/2020/12/22/firefox插件、github、steam富强/index.html","13fdf2685e0616afd3795100611fe1ae"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","0c333e4375c0504b574c252d2494e430"],["/2020/12/26/python-day-1/index.html","3eef81e46e47a373cc1c74c67ce2d110"],["/2020/12/26/python-day-2/index.html","3745af739fbba2b0d1d3ff4ad964cd1b"],["/2020/12/26/度盘不限速下载方式一赏/index.html","02a7bbf49fd0250f0be66201f609be29"],["/2020/12/26/添加开机自启软件/index.html","8780ab130932cf9362dae3d40fa510b9"],["/2020/12/26/电脑端截图方式一赏/index.html","2a872f0fb4685b7364d1bc283450fd7d"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","b69770e19682719cabed74f3cbe846ab"],["/2020/12/27/最安全的浏览器tor/index.html","fb21fcac4efd61f700f5f35b1df83557"],["/2020/12/27/网易云刷等级和听歌数量/index.html","acce932426b3d5780cac81e9b5514c5f"],["/2020/12/28/freenom申请免费域名/index.html","0b3807c300f365787ddcf80f210d5631"],["/2020/12/31/机场/index.html","33c3fa5a428373510be38a4cbbcaf9c8"],["/2021/01/01/M1/index.html","004b62a91487fa401bcbb9b693eaf063"],["/2021/01/01/compress/index.html","f3082d66e11b76d3ce50d38ac122f599"],["/2021/01/01/infinityfree/index.html","efbfce277d8282f9f8ee65a025ae81ea"],["/2021/01/01/硬核翻墙/index.html","1fb4e4f054474a2fe15e4f7ce7fb163f"],["/2021/01/02/qq/index.html","c6f444f21526f52732bbca1c4ac9687f"],["/2021/01/03/netch/index.html","a9a49be7160519e603159bf070ef6da5"],["/2021/01/03/waifu2x/index.html","3c5f7523846ff8fd037a395becb7f894"],["/2021/01/04/ads/index.html","48a9e47afe4979ccb5b6a6ec081b8da4"],["/2021/01/04/games/index.html","69afbf82b1394bb0ee3ea7185cfe68c4"],["/2021/01/04/heroku/index.html","2655b6f1e44fdcaa4ce0cd97cb4cdf8b"],["/2021/01/06/movies/index.html","641e834fecd6779a3dbf6d18252af31c"],["/2021/01/07/google2020/index.html","51895c8d8126d291e38a0f2d9f4292e7"],["/2021/01/07/lucky/index.html","45597e61eebdc5359ea16984e5fe9c21"],["/2021/01/07/spotify/index.html","f8c6bbeae023e458001565a0158a8f8b"],["/2021/01/07/thunder/index.html","2209d2dc443575b720e43669535d1f96"],["/2021/01/08/adguardhome/index.html","fd5c76f8f5774f14fc5d9dd4b86491ce"],["/2021/01/10/IBM/index.html","2e7469aacdff82aecb3f0844420ab275"],["/2021/01/10/potplayer/index.html","6561fa82a934e91c5245791f040f9e6f"],["/2021/01/10/sakuraanime/index.html","ff28886aebdcb4693d96113d25cab698"],["/2021/01/10/美剧星球/index.html","8c98843a608166bc7694214b9cde9276"],["/2021/01/12/telegraph/index.html","3ab5900a02a03f40a6432c120432b295"],["/2021/01/14/comics/index.html","6f72e19ebbddc8358eda0b00366b5998"],["/2021/01/14/ftp/index.html","7934776555c0896c93706bfe68a2daa8"],["/2021/01/14/oraclecloud/index.html","2a47ae5de498974c0c09239dc0a18b0e"],["/2021/01/14/porkbun/index.html","a5f929b57c96b63ca00046c6e3f2d94e"],["/2021/01/14/powertoys/index.html","2080a6118b2cf78d7096d156e4c32f80"],["/2021/01/14/taptap/index.html","b9f71bdf44b97c534d8ddd3ad2298684"],["/2021/01/14/ubuntuvsftp/index.html","7cf903f7f84340b112ce758634e06a59"],["/2021/01/14/小说/index.html","e65977cce3ebfd6ab02735d0f73e10fe"],["/2021/01/15/freeproxies/index.html","38cbac37200a7b41b2c58f86399d9e22"],["/2021/01/15/incaseformat/index.html","b5b55675e5f208e454ffc5457c3defd6"],["/2021/01/16/euserv/index.html","a84a84467e3da6508f88da0e29c5f504"],["/2021/01/16/winxray/index.html","6757eb3a63618796a410c4a5dd76f74e"],["/2021/01/18/qqreadhistory/index.html","2da48d2f5b20a438d09110cc7c5b5fb9"],["/2021/01/18/qqrevoke/index.html","6f38cced74f04ed192be04e6def5466d"],["/2021/01/19/freevpn/index.html","89b50c3e9a4da08d2ac52fadf0ad410e"],["/2021/01/20/browsertrack/index.html","532206308b270626203265b7ef6d2ea0"],["/2021/01/20/v2ui/index.html","fbdf26ca572c0e2520af7ac2a0b29f26"],["/2021/01/21/failedtoconnect/index.html","ddd14a1e23376933b7837b5da0099cd5"],["/2021/01/21/gitcalendar/index.html","236cf9a365503a6dbdff578cf514101d"],["/2021/01/21/markdownformat/index.html","a28d8d3aa9898d9bc83961fd3b6f3e6f"],["/2021/01/21/markdowntable/index.html","22b480e63e527a2b57aa27e2771f4784"],["/2021/01/21/vercel/index.html","d0d4fa4099d6b6a25449c4e68a26ded2"],["/2021/01/22/hardware/index.html","97a0da9e1bb2a3d2133ab1d014262e66"],["/2021/01/22/muviz/index.html","0f7626f60631d99bbb6d6b989bf92226"],["/2021/01/22/randomapi/index.html","08a2498b843a5b23aac03caf3f9eae1c"],["/2021/01/22/searchimages/index.html","f23985b9fcf3e91f02ddeaaa9bbb2b3d"],["/2021/01/23/RX文件管理器/index.html","565768c3f7f187c7e9ec2ba73d8df0c7"],["/2021/01/23/chromeflag/index.html","02fddb9eb3ef05e534e3624822601a3c"],["/2021/01/23/qttabbar/index.html","5da632f4c67a719122620dd6b54f7885"],["/2021/01/24/githubspeedup/index.html","16f47ce2a92104936bbb45a8e390b261"],["/2021/01/24/jsdelivr/index.html","81baf64f2c7390e56868da25b4e126d9"],["/2021/01/25/note/index.html","28fe21a8ada9ce9b107de33f65747e93"],["/2021/01/25/soul/index.html","a7cc44154f7d95bdb7c9db87c4a34c85"],["/2021/01/26/herokuxray/index.html","55d5fa8437e393850c3505c77eb62736"],["/2021/01/27/proxypool/index.html","93941d4c7d6a0570db16ec6bda494a08"],["/2021/01/27/tracker/index.html","046a73ebba03ddbae35c74a3e205a732"],["/2021/01/30/pandownphp/index.html","b4cc669397199a299841ef1a516d1e47"],["/2021/01/31/newgroup/index.html","5778348436ee7ed649faf6b4351acb32"],["/2021/02/01/clashlanguage/index.html","0727ae8f6601ecdf65b948168a4e7a0c"],["/2021/02/01/encrypt/index.html","c174ed49280ab1b0ddfa5f666fbfb1b3"],["/2021/02/01/footermotion/index.html","2c809c34a7c6b2376cd7e6770440a1a4"],["/2021/02/01/gitter/index.html","521fc51c8e7dd7fe71e0c398ad0c76fc"],["/2021/02/01/pixivtop50/index.html","f38abf24b1fc4c59425e48394aa8e93d"],["/2021/02/01/scrollbar/index.html","9066397a87161784466498eb845d62b4"],["/2021/02/02/clover/index.html","9c9ae440e96c20516323a3e7abe3bf0a"],["/2021/02/02/maya/index.html","fb012cc83944c044849ed9dc3684d40b"],["/2021/02/02/speedcontroller/index.html","d84afebfc5b5387ade1e24c85f741f8f"],["/2021/02/02/yesmusicplayer/index.html","225e27ccb413f6dc17018c52170fc28c"],["/2021/02/03/lenovoonelite/index.html","37bfaa9af4e7cd96a14f039ca63c65c9"],["/2021/02/03/skipads/index.html","60f624c4a9a4746a4eefdf09a66c8a99"],["/2021/02/04/picseed/index.html","5c343c613f72e4703e912d0199cdb800"],["/2021/02/04/renren/index.html","b214f5924e015766261c3df2bd45f1b8"],["/2021/02/04/serverstress/index.html","f1950f327b77610a81bd955965f07686"],["/2021/02/04/wikipediazh/index.html","ab2626d934bfe3766f7d25b08ef1f86f"],["/2021/02/05/googlevoice/index.html","559d9e90ec216f791c7f70968c3bdf87"],["/2021/02/06/clashconnection/index.html","b657d3fba6d99ad746bdc2e4b0e02258"],["/2021/02/06/gvtransfer/index.html","7499bd6e1e346d4b15857d3c9daf13cd"],["/2021/02/06/todesk/index.html","e93db3247ceec8f019d18b9770aa8dc0"],["/2021/02/06/vpnblacklist/index.html","9a0b9687d708c0846a9a9c3ca2d00da7"],["/2021/02/07/mklink/index.html","9b2e75ec249e252a5025c0df7bb60550"],["/2021/02/07/speedtest/index.html","bb2602d4fae03c553df23fdab54cac30"],["/2021/02/07/translate/index.html","9ad4b2cecf69c282d36ab13a447bce77"],["/2021/02/08/ewomail/index.html","1a59a555bdafb3d874b440a517515a22"],["/2021/02/10/officee5/index.html","a6cf4025759d4f272f30932f0b3b2a71"],["/2021/02/10/raidrive/index.html","13eb1eb344c6ac9bc61f7ffc3c5b6ad9"],["/2021/02/13/e5sub/index.html","af92cce6021eac52f63a383fb0f06a70"],["/2021/02/14/screen/index.html","00a3f8767d01a2633690b24698094aa6"],["/2021/02/15/clashtun/index.html","b6a460ef9c75f42fe8aa066e9992f250"],["/2021/02/15/messageboom/index.html","c232ef426db860fec25826a2d9f64d0f"],["/2021/02/15/oneindex/index.html","2c46464264a931c5c2c497450903f978"],["/2021/02/16/govsites/index.html","154b26af9168bb56fd656b67e75bb74d"],["/2021/02/17/hexototypecho/index.html","13171ef529f7428629ce13674bad0da5"],["/2021/02/19/fiddler/index.html","33ed15544dbe3ee338e3da1184129b5e"],["/2021/02/22/potplayerset/index.html","d4dcabe043a6ee14e3e6f86114e555f8"],["/2021/02/22/studyresource/index.html","8828f8a5f974a8fbb179bae31b9fe0c5"],["/2021/02/22/telegram/index.html","d06ce27b8839fa53e6c0e7c911ea3398"],["/2021/02/22/videos/index.html","64cefb41b967d9c15239ec56ae95da87"],["/2021/02/24/mtproxy/index.html","6a998f61fb68218ed575854153e97063"],["/2021/03/10/catchcat/index.html","9840a8e6d86f531249e1f83fa62cba97"],["/2021/03/10/neteasemusic/index.html","85fcddc26800629bbf75b390dc094254"],["/2021/03/10/surfboard/index.html","6cf24df6b7d5bf0262a40ad17d9647db"],["/2021/03/11/vpnandjc/index.html","e46b63bc12b0fc12875603e6a9b2af48"],["/404.html","a2831bd3e66997852d690577702d114e"],["/archives/2020/11/index.html","c824d491ad95bb4797fbe37013cb57f6"],["/archives/2020/12/index.html","583f8edcdfedb4e28047929ce7d836a5"],["/archives/2020/12/page/2/index.html","ae280135f280e890cce471215edf783a"],["/archives/2020/12/page/3/index.html","236923dba7e4ea0a8cd35c571d5178d6"],["/archives/2020/index.html","28dfa61bc2944a00229a05571d349c32"],["/archives/2020/page/2/index.html","a462d7b136c1cf6f9b859b31e3e4b8fc"],["/archives/2020/page/3/index.html","589fed1bac3fd68998a389d1c556f406"],["/archives/2021/01/index.html","a8687d70d385c49c4d90550543631bc3"],["/archives/2021/01/page/2/index.html","0021301fc114714a0c40f8c10e6173e2"],["/archives/2021/01/page/3/index.html","243a9183ec9cdff2c917e2cbc8b21fbe"],["/archives/2021/01/page/4/index.html","b69b3e6a95678b0f18ee0a5b7fca3f96"],["/archives/2021/02/index.html","90a2ca54962051e1f14cac95350ae3ad"],["/archives/2021/02/page/2/index.html","8b45ec82c137783a3b1d35b8fbed3a60"],["/archives/2021/02/page/3/index.html","9b68c01aa207afa263e55f1d129cc428"],["/archives/2021/03/index.html","30459b09b2165e8b92d71494af54da50"],["/archives/2021/index.html","dec108db2dd1eb22dc0e99ed8dc2bb36"],["/archives/2021/page/2/index.html","5f49afc6b05c0ec1a6f28aeb73914ff5"],["/archives/2021/page/3/index.html","8d72a175ede0e87bbb5311e22e98157f"],["/archives/2021/page/4/index.html","fe794f4b39c62dad41b219523111b062"],["/archives/2021/page/5/index.html","428737e8022dc5bda34ca8820b4aa600"],["/archives/2021/page/6/index.html","8985a885610f618c85bd9ffc1c9b59fc"],["/archives/2021/page/7/index.html","a4ec5680fca92330f97e27b3cd45cd05"],["/archives/index.html","8e3548f9cc2ddb4d37acbdd442640fa4"],["/archives/page/10/index.html","82a3e4ae004aacc5f1e7eec79dd03e6f"],["/archives/page/2/index.html","6de123c2035d3286bed613a6d62012e0"],["/archives/page/3/index.html","d4f39bc02239d20f92c819ace40e4a15"],["/archives/page/4/index.html","ce0de29561b0b0537f16987733791c52"],["/archives/page/5/index.html","c03c24c93e1a6630d37bd0c56abd39f5"],["/archives/page/6/index.html","b6f85841f7cafa842a8c347f223eadbb"],["/archives/page/7/index.html","5feb1ecdde9f26fdfb7ebe81525093b4"],["/archives/page/8/index.html","56012c099e83b1b781d95b96b0b2c0d6"],["/archives/page/9/index.html","89313d449112065cd92ae00a320ff479"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","140dcd77a56c79d9eb0468ec0df6b3cd"],["/catchcathard/index.html","e9291c58bce68730cd21cc4e2b0a474b"],["/catchcatimpossible/index.html","ce8ac7a16e2b7990d9e0aeb78de4c0db"],["/catchcatmid/index.html","dc073d912aef351b621ce171416ebd82"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/categories/VPN/index.html","5cfddc60984da865860e727c8cbc8601"],["/categories/VPS/index.html","2508f6c53d3cd3c25cbfd2dee0a9658b"],["/categories/index.html","bd133c4f0cde6dab2d1e74e9cd82f2ac"],["/categories/下载/index.html","074a159ad20b5c353461795df8a2de84"],["/categories/安全/index.html","a2eec443f53d324b8f2f7be9e5acaef2"],["/categories/建站/index.html","b18553280be39d6a6ef3ad63ac0ae2e0"],["/categories/杂/index.html","5c218042c1f7800da1cd34d118103112"],["/categories/杂/page/2/index.html","8366f3897a730c41e0e2eef1f4e256db"],["/categories/测评/index.html","caefd3096c37fda6bc57b9932f675f22"],["/categories/科学上网/index.html","69a280ce2c986a4819398af8ab6cf6c6"],["/categories/科学上网/page/2/index.html","e84018d40fd4373355945553bbe618e0"],["/categories/编程/index.html","47458ba250632754021ad1330a11ca0d"],["/categories/网站/index.html","d438f349af5b5a5435e1d038ffa02e62"],["/categories/网站/page/2/index.html","25328cda6821ba0fd8383e14938d6032"],["/categories/软件/index.html","ce13e5e31dd7a6b8f888ef8d6d6ebecd"],["/categories/软件/page/2/index.html","7202417e93fbd878d95a2cf89d2c159b"],["/categories/软件/page/3/index.html","63e68e1c6eb66fba4c63116abbbffd16"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","30d64b7890c11a03c1dfd9227998fa5c"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","b066920cf3ded8cbb96daae4af8a3dbb"],["/ios/index.html","f2a8801e5a51837b927a6160d9911262"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","86b623fb5aed75d94eb925d14b84d401"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","ca3f1c7da22f86a92df5dfc66514aa7a"],["/page/2/index.html","7f5252506a8f55a23f1962ed18cfd44b"],["/page/3/index.html","28a1b86eecbe7af7194cabd246d7317f"],["/page/4/index.html","28b9f5e5748356518d8a93d29eb3c74d"],["/page/5/index.html","0272127ad4f7cd161aa6fd14ca98b1e6"],["/page/6/index.html","07672dae542f5db6737d11e90e5e3c5b"],["/page/7/index.html","5d338c8517d9f4c35c4c3acfa4edeb75"],["/page/8/index.html","43b331e9761789e3ab015e98dec56c04"],["/page/9/index.html","e9c3f17f64ccf8342f261c60baeba3b0"],["/payment/index.html","e505222343a577a2befd7b81ba555685"],["/privacy-policy/index.html","ca89c54193989fb350a05577888968e8"],["/rss2.xml","c95793cfc02ffac9f85779f439c4938f"],["/search.xml","021f68b2305a5d68313605125e65118f"],["/sitemap.xml","f1a6c6105bb471446ba307ffd119c1cb"],["/sw-register.js","2f826d188d98e2946d24ff2b0d888ada"],["/tags/5t/index.html","ddb80646826ccac908f89f37d2986a64"],["/tags/Clash/index.html","3fae9ea56db4f3216ce06a464a343055"],["/tags/Clover/index.html","dc452c4a4b1fde5a1472cb5a51446a52"],["/tags/E5/index.html","f601f2d112ef9690a89260f64990942d"],["/tags/FTP/index.html","91e36570dd92bec748c570746dc81392"],["/tags/GitHub/index.html","0dc3b6fed3b46c99c076b1ef86b55f75"],["/tags/Heroku/index.html","0514fd30d96ddbff63707d4f4de295e1"],["/tags/Hexo/index.html","bde7aaa968940376e93370bddf74ed1c"],["/tags/Lenovo/index.html","c22703686a21b7b3f3d46dca614b089c"],["/tags/Oneindex/index.html","20ee79975dcf3569f6ed281f6691cff9"],["/tags/QQ/index.html","6e89d685d3b97f50566c6263710b9a7d"],["/tags/QTTabbar/index.html","76c16d9b1de72910f316a68877c9043e"],["/tags/RX文件管理器/index.html","233322597414204ef1934c7113b29dc8"],["/tags/Todesk/index.html","198137b3bcbb60afbb234d11fca3f54d"],["/tags/Vercel/index.html","05bdfc633f1787d3f8decdde98117fac"],["/tags/ads/index.html","7861269018684f298986d248e4f2b08e"],["/tags/api/index.html","066ff91385dbdc969e1170d3b619c46f"],["/tags/app/index.html","230efb204e45063109665efc5377091b"],["/tags/blacklist/index.html","837e6134d5b0940014561084028024a4"],["/tags/butterfly/index.html","59773173651c2cd08ef07e772d7069f1"],["/tags/chrome/index.html","c9f855a607ec32e2fe3f5d413e6e618e"],["/tags/cloudflare/index.html","48d7f6271b5cc2d79098cc648651c62e"],["/tags/cmd/index.html","8d7ba865f88cce5931c085a3758e0019"],["/tags/c盘/index.html","eb633f798b0b03717bae593721c063e2"],["/tags/email/index.html","086dc7765f589f7262d81031aa49b348"],["/tags/ewomail/index.html","e145db277c0dee3e47e6ed83cdc05418"],["/tags/fiddler/index.html","984cffd1215708891d55cb0a42cb5ad7"],["/tags/flags/index.html","a19313806b312fc718ced1d7f8de2e9f"],["/tags/footer，页脚/index.html","c849208b03684cfad8b16f0d0e42b9b1"],["/tags/galgame/index.html","39b4a168aa9f0e7a83d2b8c83fef6ea7"],["/tags/git/index.html","a1397c8177ae659cd691534478c6e411"],["/tags/gitcalendar/index.html","3b0b72ba1440ec9ff3c03adad55ab5ff"],["/tags/google-voice/index.html","bd70446113f0f443e2e47f141a8356cb"],["/tags/gv/index.html","8728325b61fb80e3aa1a212eadee45de"],["/tags/html/index.html","17b9378106137a94c795d84831b14887"],["/tags/index-1.html","9e15f4c19c82b8d86f39b840ed1c1c78"],["/tags/index.html","a9d1f49e4ae75e36273ddad3a070ee70"],["/tags/js/index.html","228ca1901814e92eb032fdd86d1b61e3"],["/tags/jsdelivr/index.html","7ef64ddac9084c4217030bd7089be8e5"],["/tags/linux/index.html","973e4cd1277f2ba120e55bae1c8fb1d1"],["/tags/madVR/index.html","087186e3211fd5628d66b2854682fb37"],["/tags/markdown/index.html","1ef2744524a91c9287f4360e90cc15c0"],["/tags/maya/index.html","f9f82c3f79d01b403f4f0bce58ff69d4"],["/tags/mklink/index.html","84dce3d753ed0fd191ae5e5e579b093c"],["/tags/office-e5/index.html","6a2fe711335b8d0c3623bb1aef6c200c"],["/tags/onedrive/index.html","71f895a1a7de70abf256210363cc9cec"],["/tags/picGO/index.html","ea2190006b717b5b2761701fc1c5431b"],["/tags/pixiv/index.html","3023842bac5eaf0a32791117aedd3552"],["/tags/potplayer/index.html","5271e85194a37356d9e1438f0212efd3"],["/tags/proxypool/index.html","be37e8e25e4edca40bc442eb353809e5"],["/tags/qbitorrent/index.html","88beacd129aed21289552489c8c5bbc5"],["/tags/raidrive/index.html","f2a0ac920e10c37af8cfba069538cdc7"],["/tags/screen/index.html","d3ff664e428ae34569f4d491254c1ba1"],["/tags/speedtest/index.html","5325a053748ab6bcb7ce7f55f328c787"],["/tags/ss/index.html","9df72d1fc8e2f7a67eca908f1ac35b4f"],["/tags/ssr/index.html","ab1c4d6239c95dd4acfd3581fc10d5cb"],["/tags/surfboard/index.html","e7d5f5b11243d599b2f24761009a6200"],["/tags/tap/index.html","43414aac790e4d31d7c718b2d15a148b"],["/tags/telegram/index.html","e0c100b0612e5b8f7ba67a8fd09a0285"],["/tags/telegram代理/index.html","4083cd83df8b0e8999314dfa4de855a2"],["/tags/tg/index.html","ebc969b8be6912d9bf152e122f158f2b"],["/tags/tg代理/index.html","f62744ba67c3de6f76b3440557a6b7e1"],["/tags/top50/index.html","018295d8791d2dc283b9273894c78d38"],["/tags/tracker/index.html","523faf5e2baea054b389e0f147965795"],["/tags/translate/index.html","a47f4ab97c65640b4f18cc6cecfe9cc3"],["/tags/translater/index.html","4b18fa3d3dcfd5c87563fd581e0ff7a4"],["/tags/tun/index.html","3f7256ddd442fcd52639942876bf8754"],["/tags/typecho/index.html","ed5cb503dc822d4500e0468d2ee6b696"],["/tags/v2ray/index.html","7a191de83ffe4c6a08e33ba9591df95e"],["/tags/vpn/index.html","8f4af8b057cbbcf62878283a0722da4b"],["/tags/vps/index.html","92ec577603f8e9517383fea24b17c95f"],["/tags/windows/index.html","dcc51149d39aa4da365640bdbb0b119f"],["/tags/windows端/index.html","860bc77ac1821d2e80d1fba40f88c59b"],["/tags/xray/index.html","4143b89eab6759f12b6a0a1daf988897"],["/tags/下载/index.html","59a7ee34e2062dc4bb4914bd2865dd34"],["/tags/不限速/index.html","6ea333180149e348cbe90af31214dfba"],["/tags/个人网盘/index.html","d218f7b72f43f583c010828348ae8965"],["/tags/主题/index.html","9aac3420eb16269a781660eb5a6eab92"],["/tags/云便签/index.html","8932c11f2063d82080dcc166aa068864"],["/tags/云盘/index.html","3f4bebdecf890ed71e3a94c0c98832b9"],["/tags/人人/index.html","05d6b6f4595e73a15bc31008f626c642"],["/tags/代理/index.html","34d06d3cd161efbb4da9b96496a772c8"],["/tags/代码/index.html","6f814f8433068d9ae607171b0a6caff9"],["/tags/优选IP/index.html","16fbd84cc24293028df044fac0b7c01c"],["/tags/便签/index.html","a38c6b306129196321488cabff7c0d2c"],["/tags/保号/index.html","54bdddd1e61d25ae4eb0041fc02ed15a"],["/tags/免费/index.html","842cd04cb27c9f7e361abce868a9ab6e"],["/tags/免费节点/index.html","3efa64a8d901da0f39c0ac66b3b6d327"],["/tags/加密/index.html","fa379ba9811439376bfffb5640d6e680"],["/tags/动画/index.html","8dcb73289d48c21ba85d8cbec4c6ec87"],["/tags/博客/index.html","f649fdb3e4e42e4ab5f3ca5f753d9ce1"],["/tags/历史记录/index.html","8baafda2f8f7f900314f70591cdc103e"],["/tags/压力/index.html","1ed3a62cf23019fe4539a5a754965995"],["/tags/压缩包/index.html","09b2670d4da7e72c1e6e38ed9d13a836"],["/tags/反代/index.html","590a616f3c1465f9b9fa36df50a32441"],["/tags/可视化/index.html","316b99765338e5bb908b2b14dc47f242"],["/tags/命令/index.html","5de95487c2e7a0b263a84a584d3858e5"],["/tags/国家/index.html","1bf4739aed6b9b5994b04b08ae96f9ab"],["/tags/图床/index.html","982da4a1a2881ff5d143033e63b18b56"],["/tags/图片/index.html","b4fab66f1c0a559385967683e35fab36"],["/tags/域名/index.html","0380c4ad0a3f5326a56ff85ef71b5e22"],["/tags/多标签/index.html","2d92fdaa47e697fb9f929829cf0befca"],["/tags/存储/index.html","70979179d4acb13f78b44fb6bedb6a7d"],["/tags/学习/index.html","bc888be6341b8ac169ca73923a14e716"],["/tags/安全/index.html","e5144877a195eb85540bff74b56caa24"],["/tags/安卓/index.html","ff42f69d6952b575116339e40e962a84"],["/tags/宝塔/index.html","5858f164ab403775374e569e3ee85c3c"],["/tags/小游戏/index.html","b9059ab56c098bccad4403382b112012"],["/tags/广告/index.html","e603852c39e5d5fdf31648c7b1b2a863"],["/tags/建站/index.html","7746156429df6db607b11dc0f33169e1"],["/tags/影视/index.html","bb818e8a55b11b3a2320989b8a73989d"],["/tags/快速启动/index.html","2a2ed33ee4039a4a6372575f9bf8da43"],["/tags/手机/index.html","ed58e0af3bdef213cdc1eb59df0db8f0"],["/tags/托管/index.html","54f0a63937c3cefd163dc344f0dd90cc"],["/tags/抓包/index.html","782c30023e824a5515921ad8fc1092ea"],["/tags/抓取/index.html","2dc67be3dd8d70252498ccb05eefb0ea"],["/tags/投屏/index.html","548fae655d1b0557e5dea4929df41985"],["/tags/拓展功能/index.html","43771cb2125473421e97a6aa861d5c7c"],["/tags/挂载/index.html","6b3af5abd1c55e89481e23f38d3960fe"],["/tags/指纹/index.html","61e4021250d495fd7f801a1b465f087f"],["/tags/接口/index.html","00c902bbc36565250075733ea59cfadc"],["/tags/提取图片/index.html","718cda538e70a7fd53374475319aea33"],["/tags/插件/index.html","e19273fea0f9ef28276384eb174ea8ee"],["/tags/搜图/index.html","469e718aa0d5a9032d0113db4180ab5d"],["/tags/搭建/index.html","73fb30bd5c2fcfb4668c294d21ec00a1"],["/tags/撤回/index.html","28e5e22bb7de75221569037bd04c22ec"],["/tags/播放器/index.html","ed1af17a6c8d6f397d217ceb6d2053d9"],["/tags/政府网站/index.html","3973d5713790353c835b0ecdebc6eb5d"],["/tags/效率/index.html","2c0095c542a0464acb35212d21b83b89"],["/tags/日历/index.html","fa1d7fde35dc713e65e08e64596730d0"],["/tags/服务器/index.html","65010fb238540172ff9df022b9816264"],["/tags/机场/index.html","0af0920e4ccadc3494eedda9ce353444"],["/tags/桌面/index.html","45a2a02e3a2a0a7128a0b28c42b975b8"],["/tags/梯子/index.html","43c2898c94e6c307a9e9c4c7289bce7e"],["/tags/检测工具/index.html","a2ee3ee114b3fffc185b26de4d76f352"],["/tags/汉化/index.html","fb5aae3e6a77cbf2c16f7bc6c95f0472"],["/tags/测压/index.html","35f3f16aebd70b3eeb279215a9c77098"],["/tags/测速/index.html","c07748af53aae85455a31889c9d017f8"],["/tags/浏览器/index.html","6baaf69823144d1bb1552867dd9eeb63"],["/tags/清理/index.html","54f5b1f1efa0ac84d6be9771ce19e71e"],["/tags/滚动条/index.html","0e1aca4b3e2b23c7134535a16cb3a2c7"],["/tags/灰色歌曲/index.html","9f236ccb088b842d13fafad32a2e697f"],["/tags/电影/index.html","744099ee6944d8285d7165369bc621ac"],["/tags/电视剧/index.html","d6dae397e1400c77b6f041c57440a88d"],["/tags/白嫖/index.html","48c20015302b53a058a8a74e8e58a9d7"],["/tags/百度/index.html","1b4d222893c46fc7cbc4d00559fc206a"],["/tags/百度云盘/index.html","8c972989917c24918716690ea27feba2"],["/tags/百科/index.html","798dbb8f8156f6537e38fddc5ece0bf0"],["/tags/短信/index.html","fabe56248f55f55329486fa97ead9669"],["/tags/硬件/index.html","4d2a011a71da1a9ec25900cade2aedd9"],["/tags/科学上网/index.html","9ab080d86bd45edd322a60b581d4d368"],["/tags/空间/index.html","e68d21a03266bff81e48281fe222d962"],["/tags/笔记/index.html","10b29fcb6cd6f1ea35bbe6fb33d0edc3"],["/tags/简洁/index.html","3b70a35e8371ba99911968ea27e9c083"],["/tags/简约/index.html","0698fcfa9abb86cc1b89df9fbd68c6bc"],["/tags/维基/index.html","8b4374bb24be709d22a54981d01e8517"],["/tags/网易云/index.html","b9bb3682344f2be8650682e038a37bd3"],["/tags/网盘/index.html","722ab4296ef29ac9975efbe476057830"],["/tags/网站/index.html","35cb1f600dc222b0e7c43c08ab8c8664"],["/tags/网络/index.html","090bc08bdc302d174a6f0319d4b4f088"],["/tags/美化/index.html","c3ca772d212e3e2adfff73fde4a012d4"],["/tags/翻墙/index.html","95bc6ccfa0c5fda2d08bd42a8dabe32d"],["/tags/翻译/index.html","a1517f7164a97d8b33e716d202ebd11d"],["/tags/翻译器/index.html","7b189b5a11783c803f0ea576a9c222ac"],["/tags/聊天/index.html","e13dc61cefdda1427f57a8e4eb32fda9"],["/tags/聊天室/index.html","2a107eeab10b9d14a7e737afbf24d325"],["/tags/联想/index.html","df25245679d87b5d92a6279a1e98ba8e"],["/tags/节点/index.html","41059c43f78ecddc373772686648e18d"],["/tags/虚拟手机号/index.html","77b79a609ee4620ebf2fbaddc8845dae"],["/tags/补丁/index.html","3de8f985d0c66b48d69f527a7adff91c"],["/tags/视频/index.html","89df641d0548dda58886c3250144f0c8"],["/tags/解析/index.html","3c49a042cb37934031c273763b076853"],["/tags/订阅链接/index.html","6791c1e3baaaa93a21b665b42e515f67"],["/tags/记录/index.html","9dedda8bea004dd117fb2d0ee4238b3c"],["/tags/识图/index.html","b7d2ee857e660a6a7ee2158d97349b1e"],["/tags/语言/index.html","be206d8d93b94db7fe78bc85f923bbc0"],["/tags/资源/index.html","0b105df57fb4b594b5de8866e134f13c"],["/tags/资源管理器/index.html","12baa5e90029e680d14bb8178bec7acc"],["/tags/转移/index.html","714e3dc5bcd99b24fd9b2e41475c2a32"],["/tags/软件/index.html","39b48e36a737fa5f77ee6f46abe0b32e"],["/tags/轰炸/index.html","888a89e3a0b8f455e8482060cb988baa"],["/tags/迁移/index.html","0e609b2b9f8468c3ccce55cd22c45a88"],["/tags/远程控制/index.html","775e80be36a3872854f716b126317541"],["/tags/连接/index.html","da5dbfad7cf216f33225272af146b9ee"],["/tags/追踪/index.html","ccb496a8ee525ed2b53e1b25a939fa58"],["/tags/速度/index.html","c45ba3d2e884fe14839b771f0dafab46"],["/tags/邮箱/index.html","be14decaaf9d80fe5d3d9b725ff2a875"],["/tags/酷炫/index.html","1fb132b3bdcdf595af8db0576cfe9b6d"],["/tags/钓鱼/index.html","469d79716671912f1ca09725865c4745"],["/tags/镜像/index.html","5115302677da4fc90d0ca053148b30c4"],["/tags/随机/index.html","44bfd7fcd622725ba05bd40594e448ca"],["/tags/隐藏/index.html","9bc94a6a1b6781f8d1a32f495ce8ed1b"],["/tags/面板/index.html","bd0bbc44c64e8b7e98948510617ad9cc"],["/tags/音乐/index.html","e6555a80d6f01dbf168da499991684f2"],["/tags/高颜值/index.html","dc90099fca34c0f0bb66e9c13eb6b136"],["/tags/魔改/index.html","3384a7076d21a5882ecb266ae223324a"],["/tags/黑名单/index.html","72d30af19909d3a8a40ced1e29102caf"],["/urls/index.html","4caf412f7c1f48266f4f10aba61171b3"],["/vps/index.html","638d1d9d80179b29cb7493c9def9764a"],["/支持/index.html","577858f237696dae73d15220efbc57d8"]];
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
