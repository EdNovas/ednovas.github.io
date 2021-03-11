/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","a5de85969f5292778e2082e6e0725b1c"],["/2020/11/29/clash-windows/index.html","b32d3a9120037cc3bad03a6c26863e9f"],["/2020/11/30/websites2/index.html","f98c62f80684a2c41e4ff0e16f6bd1e3"],["/2020/12/04/iphone4s/index.html","aa40d3edb1a31c9fe6a8bb41fecc8c07"],["/2020/12/04/onenote/index.html","4d0e2dd2758ae78f74d73194f8e9bbc7"],["/2020/12/04/wesites1/index.html","1fde8b6e31cc406294bcd536a2e95a6c"],["/2020/12/06/nokia808/index.html","848ab69b603ad2745e4b4120b9bee1e0"],["/2020/12/07/ipad1/index.html","754bff57bb5f7920b83c2e8c3c3fb34d"],["/2020/12/18/freesubscribes/index.html","fcedaf5fe4f8585b2ef3cf71ea67934c"],["/2020/12/19/musics/index.html","e51a0d5298a9d66fc44213e07fb670d7"],["/2020/12/19/shadowrocket/index.html","7cc6dbaa84bff138d3f162900b3f739b"],["/2020/12/19/v2ray-windows/index.html","67707f5e9b66c34100e60f4b222647b7"],["/2020/12/19/v2rayng/index.html","040197774db21d11112140dff864b2cf"],["/2020/12/20/beoplay/index.html","ac6485eadb40a5e8b02595d76c0abaf6"],["/2020/12/20/订阅链接转换/index.html","954a2a1d4f2665b303ea2ec59cfc14f5"],["/2020/12/21/chrome浏览器下载提速/index.html","4d01a5fae9908c5d89e0f9721a42930f"],["/2020/12/21/免费128线程并发下载xdown/index.html","deec95ea25ec33e9533d24ef0a8e67b0"],["/2020/12/21/免费32线程下载软件ndm/index.html","8380e889ebde4d8e7895a9c3d9f74217"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","375c9253f69c5a026241998c0a585e4b"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","5a624a0d9130ad02b9c18ab0d81c1acb"],["/2020/12/21/广告怎么知道我在想什么/index.html","06a1d4ec1836602c76712d5ca4fca716"],["/2020/12/21/无名·引子（小说试写）/index.html","559ea0661ac11b907ae77c3a875c9cc5"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","7bc5677c51775f512b92d0fca924939e"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","99dacf8f659ffca47516e9b233aab40a"],["/2020/12/21/高速轻量下载器aria2/index.html","51e33e76b601a333879acaec1b927b96"],["/2020/12/22/2020-cee-roo/index.html","588e4932843544768fee40d9b01000d3"],["/2020/12/22/firefox插件、github、steam富强/index.html","13fdf2685e0616afd3795100611fe1ae"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","0c333e4375c0504b574c252d2494e430"],["/2020/12/26/python-day-1/index.html","3eef81e46e47a373cc1c74c67ce2d110"],["/2020/12/26/python-day-2/index.html","3745af739fbba2b0d1d3ff4ad964cd1b"],["/2020/12/26/度盘不限速下载方式一赏/index.html","02a7bbf49fd0250f0be66201f609be29"],["/2020/12/26/添加开机自启软件/index.html","8780ab130932cf9362dae3d40fa510b9"],["/2020/12/26/电脑端截图方式一赏/index.html","2a872f0fb4685b7364d1bc283450fd7d"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","b69770e19682719cabed74f3cbe846ab"],["/2020/12/27/最安全的浏览器tor/index.html","fb21fcac4efd61f700f5f35b1df83557"],["/2020/12/27/网易云刷等级和听歌数量/index.html","acce932426b3d5780cac81e9b5514c5f"],["/2020/12/28/freenom申请免费域名/index.html","0b3807c300f365787ddcf80f210d5631"],["/2020/12/31/机场/index.html","33c3fa5a428373510be38a4cbbcaf9c8"],["/2021/01/01/M1/index.html","004b62a91487fa401bcbb9b693eaf063"],["/2021/01/01/compress/index.html","f3082d66e11b76d3ce50d38ac122f599"],["/2021/01/01/infinityfree/index.html","efbfce277d8282f9f8ee65a025ae81ea"],["/2021/01/01/硬核翻墙/index.html","1fb4e4f054474a2fe15e4f7ce7fb163f"],["/2021/01/02/qq/index.html","c6f444f21526f52732bbca1c4ac9687f"],["/2021/01/03/netch/index.html","a9a49be7160519e603159bf070ef6da5"],["/2021/01/03/waifu2x/index.html","3c5f7523846ff8fd037a395becb7f894"],["/2021/01/04/ads/index.html","48a9e47afe4979ccb5b6a6ec081b8da4"],["/2021/01/04/games/index.html","69afbf82b1394bb0ee3ea7185cfe68c4"],["/2021/01/04/heroku/index.html","2655b6f1e44fdcaa4ce0cd97cb4cdf8b"],["/2021/01/06/movies/index.html","641e834fecd6779a3dbf6d18252af31c"],["/2021/01/07/google2020/index.html","51895c8d8126d291e38a0f2d9f4292e7"],["/2021/01/07/lucky/index.html","45597e61eebdc5359ea16984e5fe9c21"],["/2021/01/07/spotify/index.html","f8c6bbeae023e458001565a0158a8f8b"],["/2021/01/07/thunder/index.html","2209d2dc443575b720e43669535d1f96"],["/2021/01/08/adguardhome/index.html","fd5c76f8f5774f14fc5d9dd4b86491ce"],["/2021/01/10/IBM/index.html","2e7469aacdff82aecb3f0844420ab275"],["/2021/01/10/potplayer/index.html","6561fa82a934e91c5245791f040f9e6f"],["/2021/01/10/sakuraanime/index.html","ff28886aebdcb4693d96113d25cab698"],["/2021/01/10/美剧星球/index.html","8c98843a608166bc7694214b9cde9276"],["/2021/01/12/telegraph/index.html","3ab5900a02a03f40a6432c120432b295"],["/2021/01/14/comics/index.html","6f72e19ebbddc8358eda0b00366b5998"],["/2021/01/14/ftp/index.html","7934776555c0896c93706bfe68a2daa8"],["/2021/01/14/oraclecloud/index.html","2a47ae5de498974c0c09239dc0a18b0e"],["/2021/01/14/porkbun/index.html","a5f929b57c96b63ca00046c6e3f2d94e"],["/2021/01/14/powertoys/index.html","2080a6118b2cf78d7096d156e4c32f80"],["/2021/01/14/taptap/index.html","b9f71bdf44b97c534d8ddd3ad2298684"],["/2021/01/14/ubuntuvsftp/index.html","7cf903f7f84340b112ce758634e06a59"],["/2021/01/14/小说/index.html","e65977cce3ebfd6ab02735d0f73e10fe"],["/2021/01/15/freeproxies/index.html","38cbac37200a7b41b2c58f86399d9e22"],["/2021/01/15/incaseformat/index.html","b5b55675e5f208e454ffc5457c3defd6"],["/2021/01/16/euserv/index.html","a84a84467e3da6508f88da0e29c5f504"],["/2021/01/16/winxray/index.html","6757eb3a63618796a410c4a5dd76f74e"],["/2021/01/18/qqreadhistory/index.html","2da48d2f5b20a438d09110cc7c5b5fb9"],["/2021/01/18/qqrevoke/index.html","6f38cced74f04ed192be04e6def5466d"],["/2021/01/19/freevpn/index.html","5dd1fab36eacb307c5785001eb3077d3"],["/2021/01/20/browsertrack/index.html","532206308b270626203265b7ef6d2ea0"],["/2021/01/20/v2ui/index.html","fbdf26ca572c0e2520af7ac2a0b29f26"],["/2021/01/21/failedtoconnect/index.html","ddd14a1e23376933b7837b5da0099cd5"],["/2021/01/21/gitcalendar/index.html","236cf9a365503a6dbdff578cf514101d"],["/2021/01/21/markdownformat/index.html","a28d8d3aa9898d9bc83961fd3b6f3e6f"],["/2021/01/21/markdowntable/index.html","22b480e63e527a2b57aa27e2771f4784"],["/2021/01/21/vercel/index.html","d0d4fa4099d6b6a25449c4e68a26ded2"],["/2021/01/22/hardware/index.html","97a0da9e1bb2a3d2133ab1d014262e66"],["/2021/01/22/muviz/index.html","0f7626f60631d99bbb6d6b989bf92226"],["/2021/01/22/randomapi/index.html","08a2498b843a5b23aac03caf3f9eae1c"],["/2021/01/22/searchimages/index.html","f23985b9fcf3e91f02ddeaaa9bbb2b3d"],["/2021/01/23/RX文件管理器/index.html","565768c3f7f187c7e9ec2ba73d8df0c7"],["/2021/01/23/chromeflag/index.html","02fddb9eb3ef05e534e3624822601a3c"],["/2021/01/23/qttabbar/index.html","5da632f4c67a719122620dd6b54f7885"],["/2021/01/24/githubspeedup/index.html","16f47ce2a92104936bbb45a8e390b261"],["/2021/01/24/jsdelivr/index.html","81baf64f2c7390e56868da25b4e126d9"],["/2021/01/25/note/index.html","28fe21a8ada9ce9b107de33f65747e93"],["/2021/01/25/soul/index.html","a7cc44154f7d95bdb7c9db87c4a34c85"],["/2021/01/26/herokuxray/index.html","55d5fa8437e393850c3505c77eb62736"],["/2021/01/27/proxypool/index.html","93941d4c7d6a0570db16ec6bda494a08"],["/2021/01/27/tracker/index.html","046a73ebba03ddbae35c74a3e205a732"],["/2021/01/30/pandownphp/index.html","b4cc669397199a299841ef1a516d1e47"],["/2021/01/31/newgroup/index.html","5778348436ee7ed649faf6b4351acb32"],["/2021/02/01/clashlanguage/index.html","0727ae8f6601ecdf65b948168a4e7a0c"],["/2021/02/01/encrypt/index.html","c174ed49280ab1b0ddfa5f666fbfb1b3"],["/2021/02/01/footermotion/index.html","2c809c34a7c6b2376cd7e6770440a1a4"],["/2021/02/01/gitter/index.html","521fc51c8e7dd7fe71e0c398ad0c76fc"],["/2021/02/01/pixivtop50/index.html","f38abf24b1fc4c59425e48394aa8e93d"],["/2021/02/01/scrollbar/index.html","9066397a87161784466498eb845d62b4"],["/2021/02/02/clover/index.html","9c9ae440e96c20516323a3e7abe3bf0a"],["/2021/02/02/maya/index.html","fb012cc83944c044849ed9dc3684d40b"],["/2021/02/02/speedcontroller/index.html","d84afebfc5b5387ade1e24c85f741f8f"],["/2021/02/02/yesmusicplayer/index.html","225e27ccb413f6dc17018c52170fc28c"],["/2021/02/03/lenovoonelite/index.html","37bfaa9af4e7cd96a14f039ca63c65c9"],["/2021/02/03/skipads/index.html","60f624c4a9a4746a4eefdf09a66c8a99"],["/2021/02/04/picseed/index.html","5c343c613f72e4703e912d0199cdb800"],["/2021/02/04/renren/index.html","b214f5924e015766261c3df2bd45f1b8"],["/2021/02/04/serverstress/index.html","f1950f327b77610a81bd955965f07686"],["/2021/02/04/wikipediazh/index.html","ab2626d934bfe3766f7d25b08ef1f86f"],["/2021/02/05/googlevoice/index.html","559d9e90ec216f791c7f70968c3bdf87"],["/2021/02/06/clashconnection/index.html","b657d3fba6d99ad746bdc2e4b0e02258"],["/2021/02/06/gvtransfer/index.html","7499bd6e1e346d4b15857d3c9daf13cd"],["/2021/02/06/todesk/index.html","e93db3247ceec8f019d18b9770aa8dc0"],["/2021/02/06/vpnblacklist/index.html","9a0b9687d708c0846a9a9c3ca2d00da7"],["/2021/02/07/mklink/index.html","9b2e75ec249e252a5025c0df7bb60550"],["/2021/02/07/speedtest/index.html","bb2602d4fae03c553df23fdab54cac30"],["/2021/02/07/translate/index.html","9ad4b2cecf69c282d36ab13a447bce77"],["/2021/02/08/ewomail/index.html","1a59a555bdafb3d874b440a517515a22"],["/2021/02/10/officee5/index.html","a6cf4025759d4f272f30932f0b3b2a71"],["/2021/02/10/raidrive/index.html","13eb1eb344c6ac9bc61f7ffc3c5b6ad9"],["/2021/02/13/e5sub/index.html","af92cce6021eac52f63a383fb0f06a70"],["/2021/02/14/screen/index.html","00a3f8767d01a2633690b24698094aa6"],["/2021/02/15/clashtun/index.html","b6a460ef9c75f42fe8aa066e9992f250"],["/2021/02/15/messageboom/index.html","c232ef426db860fec25826a2d9f64d0f"],["/2021/02/15/oneindex/index.html","2c46464264a931c5c2c497450903f978"],["/2021/02/16/govsites/index.html","154b26af9168bb56fd656b67e75bb74d"],["/2021/02/17/hexototypecho/index.html","13171ef529f7428629ce13674bad0da5"],["/2021/02/19/fiddler/index.html","33ed15544dbe3ee338e3da1184129b5e"],["/2021/02/22/potplayerset/index.html","d4dcabe043a6ee14e3e6f86114e555f8"],["/2021/02/22/studyresource/index.html","8828f8a5f974a8fbb179bae31b9fe0c5"],["/2021/02/22/telegram/index.html","d06ce27b8839fa53e6c0e7c911ea3398"],["/2021/02/22/videos/index.html","64cefb41b967d9c15239ec56ae95da87"],["/2021/02/24/mtproxy/index.html","6a998f61fb68218ed575854153e97063"],["/2021/03/10/catchcat/index.html","9840a8e6d86f531249e1f83fa62cba97"],["/2021/03/10/neteasemusic/index.html","85fcddc26800629bbf75b390dc094254"],["/2021/03/10/surfboard/index.html","6cf24df6b7d5bf0262a40ad17d9647db"],["/2021/03/11/vpnandjc/index.html","b1654101373cad252f9ecc21eb16e56c"],["/404.html","2da95c39dcb5492df7d9884f9aa40da0"],["/archives/2020/11/index.html","f953b6e91f81378bebda3540a41cc623"],["/archives/2020/12/index.html","6755432a429dfc81a8222f7ce3c025d5"],["/archives/2020/12/page/2/index.html","f97d02f8df6ad354b263aeab4f83e774"],["/archives/2020/12/page/3/index.html","e1f1b8fe2ec79a50f1fc5adcbe2af4d1"],["/archives/2020/index.html","5b633ff8c1763beba41f21933a7d422e"],["/archives/2020/page/2/index.html","9c8043f1a278488e9bfba42d67b4e311"],["/archives/2020/page/3/index.html","1d6d93d3ebac1b1f59597e3a45728cac"],["/archives/2021/01/index.html","6d9874bd98468c93f446fafa4be12095"],["/archives/2021/01/page/2/index.html","713f0a5ac231a4de5063572bb1fd4163"],["/archives/2021/01/page/3/index.html","6315790d38d0a5c387ba978227c8c059"],["/archives/2021/01/page/4/index.html","1f4b434b3cc867a331928dcac9bcd65b"],["/archives/2021/02/index.html","bfd7963da6759aca8b12412889c74530"],["/archives/2021/02/page/2/index.html","e7802163fd4194fa95f4ff2bd526548f"],["/archives/2021/02/page/3/index.html","e3e3415ece3932945cfba6b87c228d2e"],["/archives/2021/03/index.html","e9226281015bbfdcad58dd77ad8fbcda"],["/archives/2021/index.html","e81c0af2013664a3db6c8e9d0fec4895"],["/archives/2021/page/2/index.html","ecc921fff7d840562e7b036deb3680c1"],["/archives/2021/page/3/index.html","3b9d455e886ab3e42c9d735debcf25d5"],["/archives/2021/page/4/index.html","cc7437301b75a009f8e72a0b4addc0a2"],["/archives/2021/page/5/index.html","f08f2e900cde36034cb9ada7627c8a6c"],["/archives/2021/page/6/index.html","dbe4868267858df8ef83bd48ac80cce2"],["/archives/2021/page/7/index.html","04ec8e0473e7184a663e0e0dab69b206"],["/archives/index.html","267d5cd2d496f952ea772e440178400b"],["/archives/page/10/index.html","0a8333211a6dc747c49e407c6ee83e5b"],["/archives/page/2/index.html","c1f141c43864c07690ffefac2ac897c7"],["/archives/page/3/index.html","70cc08f8297396e60ff31573a1b406aa"],["/archives/page/4/index.html","281d9cb9c45ad2a8058faa07c0e9a44e"],["/archives/page/5/index.html","6244a42e7988cce02222661bcbf569ca"],["/archives/page/6/index.html","ac80972b4cb855451e26114ac1ad2b3d"],["/archives/page/7/index.html","06d5c5a02b7c40d2a9508bb7c949aff9"],["/archives/page/8/index.html","a355c810f6d8470bf0869702df55c2e9"],["/archives/page/9/index.html","8041e333c81095836bcdcdb8b93df21e"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","140dcd77a56c79d9eb0468ec0df6b3cd"],["/catchcathard/index.html","e9291c58bce68730cd21cc4e2b0a474b"],["/catchcatimpossible/index.html","ce8ac7a16e2b7990d9e0aeb78de4c0db"],["/catchcatmid/index.html","dc073d912aef351b621ce171416ebd82"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/categories/VPN/index.html","aef98ff149bf03ad0f8e6b46ffafc8c8"],["/categories/VPS/index.html","448e5bf60df73800ac0f32cb93df2167"],["/categories/index.html","96cf49b3195dca1eceb9998af30fa7ca"],["/categories/下载/index.html","a9fcf5d9cd3427fb72d3c04b336fd5c8"],["/categories/安全/index.html","0fafc638867cd7985eada8e03f367c0a"],["/categories/建站/index.html","b8db96fe45470638c5480eff65b8b3aa"],["/categories/杂/index.html","5255d4e24ff8b964f57b8913670588af"],["/categories/杂/page/2/index.html","7b8c4f6ea684c5a7d5b368c66b196546"],["/categories/测评/index.html","344a056cc79f3cf5c8c6d4f526b095a2"],["/categories/科学上网/index.html","b62d06471ba8e6ac80675ec2d89497aa"],["/categories/科学上网/page/2/index.html","63a8d541c5b7a622d8dee4cd5b456939"],["/categories/编程/index.html","0bde68ec9b729ba7f4578be418b88936"],["/categories/网站/index.html","4a94e25aec95b65a7e72e6c8fc832a1e"],["/categories/网站/page/2/index.html","6830a2293b3aac5c3251ff500b42dd0f"],["/categories/软件/index.html","cd57d499f4b042d84b509532af8d8c51"],["/categories/软件/page/2/index.html","f84521c20992e14fc55663e4fdb72953"],["/categories/软件/page/3/index.html","d3f04ec59ecbe0f611a294dd65f9034e"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","82ec8d7bc765f888b3ffadb6329eb99e"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","4acc4e4ae885f9a88c58fef2882a0fbb"],["/ios/index.html","6574bc94f6bdb3dacf48f999c80f9516"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","faedfa5445ec39b2b61fd54356ff700b"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","3c5c147511f6b8384e94cde5de779d13"],["/page/2/index.html","4d1e0af175a2f09403ba32472681a911"],["/page/3/index.html","d174a1a3ce97cdd7ee9620d95e6ea4b3"],["/page/4/index.html","7c0e44569764e241c0862be917c5e9da"],["/page/5/index.html","bb5e1286f942632aef55c18120ae7412"],["/page/6/index.html","02af8da228df0511da3021bc92f2ba33"],["/page/7/index.html","6a4e7a37825f28bced38597298078896"],["/page/8/index.html","57df6e9d08d281a0968d7b85e4cefb90"],["/page/9/index.html","50218476465e32301f3286c287755d1d"],["/payment/index.html","48df6b1da6d8f878f618a9c761d30241"],["/privacy-policy/index.html","858587716e9688d73ad230e0305ca12c"],["/rss2.xml","eae73f27afd96806489b0b3205987672"],["/search.xml","f2c4ec7c8c2398e5cc8ffce4dc89fcda"],["/sitemap.xml","306f71478f7b29ec361463864992b464"],["/sw-register.js","3471f6c1cced4221e2d9d2e2e3bb45bc"],["/tags/5t/index.html","c121177a02232b9e08feae1a044ea09d"],["/tags/Clash/index.html","65242a5ec29f7343004c7c1e1893e76d"],["/tags/Clover/index.html","f37e20d1a691573c92a882d480f22cf3"],["/tags/E5/index.html","5c70b4249b60ff6480d893ae1b126ed1"],["/tags/FTP/index.html","9ce97fc55217ad93c395413d0da1522b"],["/tags/GitHub/index.html","e993945bdac402a2cf6ea89b86df0272"],["/tags/Heroku/index.html","e11eccd4dec714d00cb0df69530eeaf2"],["/tags/Hexo/index.html","a71be5215f429828e4ae891be5d41b79"],["/tags/Lenovo/index.html","4481274b5bf07b60f108fc151dace3cc"],["/tags/Oneindex/index.html","743b4d3af2c2f06f6c80917832baa3b3"],["/tags/QQ/index.html","6b880bab3b1efdb38b8afd4b576a5079"],["/tags/QTTabbar/index.html","a5262209e33af3a2ef4d057a5fc950eb"],["/tags/RX文件管理器/index.html","026d1712c5d5dd334c040b090a98ea35"],["/tags/Todesk/index.html","af8b92d34e9724d22be8553689aa54c5"],["/tags/Vercel/index.html","4b4d5239d841bbbcf505da66f727d067"],["/tags/ads/index.html","99824efe7b8c5f5a8407c609d3ad372f"],["/tags/api/index.html","104fa1ea08536026909fd5d998243552"],["/tags/app/index.html","6c80dbbe20ab8f9dac3fae7d83b1a06d"],["/tags/blacklist/index.html","55cb824c75c86a98fc83c36834eabb32"],["/tags/butterfly/index.html","6c25f685e7b4165371490a5192c6413f"],["/tags/chrome/index.html","99b82b8df6de7cfc769dd38c3cd1f670"],["/tags/cloudflare/index.html","9ba55e9de1e5ee531313e6b94a949cc2"],["/tags/cmd/index.html","379b132debf027870334816265e17fe3"],["/tags/c盘/index.html","f69cbbda9ce24df051738219e1fc0ab2"],["/tags/email/index.html","d758fdb4e5aa600baccb10af143798ab"],["/tags/ewomail/index.html","8939519c6f38acacf11b30ab974f83d5"],["/tags/fiddler/index.html","696fda52d932dd9e5daeb76c2ce56745"],["/tags/flags/index.html","0f9171ad7fd33e178c921161ad3ef383"],["/tags/footer，页脚/index.html","ff248e923504c84b6501a6977a7f4d68"],["/tags/galgame/index.html","24c1d6538c0ba85bcbda7d3413e9ed95"],["/tags/git/index.html","19fe54a76e3f81053c516c0a6a818f3d"],["/tags/gitcalendar/index.html","3484319c3fd31cad0762e264dc7c1fa2"],["/tags/google-voice/index.html","2bd9b7affcc26f1d21bb2ff2a5a603f9"],["/tags/gv/index.html","e04b23742a96390418c8be9e21b691d7"],["/tags/html/index.html","cbe2659dfd65d98225cbf24d1ce41d7f"],["/tags/index-1.html","edd5340cf32748aa5a06acb7c106a218"],["/tags/index.html","41c4e0e2ed81ce2fb549bd5d1fe0270a"],["/tags/js/index.html","414bfe9504ea64bf97d8e709da00c9ca"],["/tags/jsdelivr/index.html","e2ec349526a8d6c3c03b0d65d8cf08c1"],["/tags/linux/index.html","ff4676bf78e641b9adb20eab9c7f6044"],["/tags/madVR/index.html","d39f6e699e45d1c98d1c7a9678ff5207"],["/tags/markdown/index.html","073349796fa15d5d06d829ab4c7b7e44"],["/tags/maya/index.html","71040ca81d99b4acb193f2c46041ae6e"],["/tags/mklink/index.html","92c35e484167b311933652a77e556e2e"],["/tags/office-e5/index.html","c5820ed8d43dea95804d21c228b06683"],["/tags/onedrive/index.html","f5396ec5bcbac34f14c130df07e9c5e3"],["/tags/picGO/index.html","638d67cdf933b6d639e3d18f225d845c"],["/tags/pixiv/index.html","a945a553bc64210cfcdd3c3e1ec4dce7"],["/tags/potplayer/index.html","4e295b0a30106fd6cf7b1c902b93858d"],["/tags/proxypool/index.html","43ff4900960acca617b0ece1bad347e7"],["/tags/qbitorrent/index.html","64bca5f47f569a9705825d6de99c480d"],["/tags/raidrive/index.html","05a0c87cc204ec521639f3a370004e76"],["/tags/screen/index.html","f094b510cd3c1ec74d721c36ea98becd"],["/tags/speedtest/index.html","e6aa86895604377ce6a17cae60d1bd67"],["/tags/ss/index.html","95727734b40a8dfd09b3f4a1ffbb2ce2"],["/tags/ssr/index.html","23651588b1d640fcdec04553478e8dfd"],["/tags/surfboard/index.html","01f05cb35fa8f0857ca92f9afa5a76ef"],["/tags/tap/index.html","4d0a7c074f6fd09b2207c6c734d13cd8"],["/tags/telegram/index.html","063784d861552f531a10ff5d21a37e37"],["/tags/telegram代理/index.html","546b699d3ec3af47a3d0c4d1fc021cb9"],["/tags/tg/index.html","4444248a71f84d4aa22b59c53866f661"],["/tags/tg代理/index.html","f10191d61feabc09a98ddf5da814dacb"],["/tags/top50/index.html","fec7b073dc091530aa2eb2ef6200ce4a"],["/tags/tracker/index.html","f4e844db11e5a70f3775c15ea6d69fb0"],["/tags/translate/index.html","357ab5f7834a44500f30cf311c432c82"],["/tags/translater/index.html","744967b612b298ee10b6207aea98d422"],["/tags/tun/index.html","b728ec5dd10ffd3ea4cd19312f0459ba"],["/tags/typecho/index.html","dc5fbff44c00822ddbd8614e72b8af7f"],["/tags/v2ray/index.html","cd3a056ab7af6e071ce6f65f82118023"],["/tags/vpn/index.html","84a8df95c2401727ee88e91916b22553"],["/tags/vps/index.html","1076b2f66f5533d4e169b3adf35ea3c2"],["/tags/windows/index.html","99b1da1cef8c4b36de24879ce326822e"],["/tags/windows端/index.html","6314782302d4be9825423b806fd7c836"],["/tags/xray/index.html","75a9723392330c0398008fbb2048c19b"],["/tags/下载/index.html","a2c57d8b90ed0ea4dbcf9a0846afe022"],["/tags/不限速/index.html","60c82c3d9b9b7f2e1a19ef5e4d477848"],["/tags/个人网盘/index.html","8bcbac265aa5a6d348b5925bfe3be2b3"],["/tags/主题/index.html","14ba4c5e500d1331854baf67d7c7b784"],["/tags/云便签/index.html","34d158d26c7bb732e58ba801d3f007a7"],["/tags/云盘/index.html","ebc6d763bee3d2eabe111f951f1f8954"],["/tags/人人/index.html","1052a02ae760b656e829824757425971"],["/tags/代理/index.html","ab57bde6e47a0f540dfacc420b2f64d0"],["/tags/代码/index.html","12537b2eb2101c323f948431cbad61ff"],["/tags/优选IP/index.html","d022ce573adb05b2022dc8ac821ad52a"],["/tags/便签/index.html","39be7f889364122c005fa5e76ee8def2"],["/tags/保号/index.html","48f71e5a888ec653586a76f530d4847c"],["/tags/免费/index.html","948cfde8fbbb1c23094ed942349a81db"],["/tags/免费节点/index.html","5d1589f5f6e545dc81dd40b7c6a30a6a"],["/tags/加密/index.html","abdd946084e9cd9278a57f5aa9ad375e"],["/tags/动画/index.html","7445ebcc29bff60d5dc4be1a1a2fb2c1"],["/tags/博客/index.html","dbab3be856d1bf7dc74c9197c216304d"],["/tags/历史记录/index.html","67dd9a08055765262e3b8f2663ffcfb5"],["/tags/压力/index.html","5baf8bae4a3f6d1b2bf79dcc2925d669"],["/tags/压缩包/index.html","972aaed4751b453016d24c5769bfa814"],["/tags/反代/index.html","bffbe72c06df475da11a67086d56847b"],["/tags/可视化/index.html","e2766c5cb4503b6d3af4cf11602b01c6"],["/tags/命令/index.html","6d380a62dbc7d52dadf82f51bdf6bd4f"],["/tags/国家/index.html","502efc7a3da45632046a2f69861e31fe"],["/tags/图床/index.html","3198b9dcd42f8ee92f0c2442c06178d1"],["/tags/图片/index.html","77f611dd854acbdc0a715d5203bb3f36"],["/tags/域名/index.html","10cdc0fe9757be5d5d0c4923bd6e52f5"],["/tags/多标签/index.html","a9ca40a0339f88c62f0510830a0a9fa6"],["/tags/存储/index.html","35371000cd7765616a9dbde5e2f2abf6"],["/tags/学习/index.html","14946a32c548635cf66051237e6cdcfe"],["/tags/安全/index.html","5fecdaa26c42122fadb35600f6dd20be"],["/tags/安卓/index.html","8488016e92069f488fc2b90dd695b10f"],["/tags/宝塔/index.html","360ea12e370f23d039a8c5c683d2f43f"],["/tags/小游戏/index.html","322638397ab18bcdb3df5235e41205a9"],["/tags/广告/index.html","93ca97cad96d7946cb5fdd56c6f5e1bb"],["/tags/建站/index.html","8e15338325d81fc18a1d103f6d145724"],["/tags/影视/index.html","24871000ddaf33c1554b15fde41719c4"],["/tags/快速启动/index.html","fcda25ccb1acf9bf50a265e339954d40"],["/tags/手机/index.html","26d0b279f09cb0d76aeab54c6cf58da5"],["/tags/托管/index.html","9a51ab8c04a4d9061f6e2f145ce54fa2"],["/tags/抓包/index.html","1380a430c694a11084c96b5ca38f69f4"],["/tags/抓取/index.html","d1a3b0426252480541872ebc9019e047"],["/tags/投屏/index.html","e23afee1b7dbfea85195e7900b4236ae"],["/tags/拓展功能/index.html","5bb5cdab3be29feaa6de8e0e0ec22286"],["/tags/挂载/index.html","f52227b8eb6a344aae31aa76ab808ec9"],["/tags/指纹/index.html","3755ff6fcf8eb57c9f93fdf70b4a27c0"],["/tags/接口/index.html","37083abdc34434366a79915c1fe24c13"],["/tags/提取图片/index.html","2e657670d7bd595f7fdb6152dcdd88b2"],["/tags/插件/index.html","83269086599d9cae057db73f6b507b39"],["/tags/搜图/index.html","6220aca2b9200a496baae9a1759af341"],["/tags/搭建/index.html","3b0dca62bd4fe2085482ff596685b782"],["/tags/撤回/index.html","7036e800a5868ccd6ba3d5a3c75c5621"],["/tags/播放器/index.html","831f37927a21dbd7bbca9fc8f7e3be88"],["/tags/政府网站/index.html","305749483af23c509f752c8d75c52c3f"],["/tags/效率/index.html","39035c9b31ebb3baa81811014a228a70"],["/tags/日历/index.html","5896301f1240bd1aa0e651753d90f04d"],["/tags/服务器/index.html","d0a7c70463eea7f86506b93ea12ecbe3"],["/tags/机场/index.html","cfdee47fbb58b3aa7095c4e43c2c4abc"],["/tags/桌面/index.html","618da55e7918d9319191142e90123a33"],["/tags/梯子/index.html","90996e42eb7055df24e39b1074a5578f"],["/tags/检测工具/index.html","477ac5998540cd5706e78a52f0815f13"],["/tags/汉化/index.html","252234ed566dbae782affb9e15363eec"],["/tags/测压/index.html","1d15a49c58057669432093c6285a3df4"],["/tags/测速/index.html","d0dc127fdb7016d12665b92ab22b35ef"],["/tags/浏览器/index.html","0f5cd2e5ded982b330dbb6b0fa432c34"],["/tags/清理/index.html","ca89ff56be29b894864d63a73a6b24d4"],["/tags/滚动条/index.html","7079743de917b5b651a913a4d68dd20e"],["/tags/灰色歌曲/index.html","5eb830c2e342e666128040adf5a7a78a"],["/tags/电影/index.html","516324c6420d126a6a38947a5f1be73f"],["/tags/电视剧/index.html","da3c2fba15dd0c28199c3cbde39fd9ea"],["/tags/白嫖/index.html","d4800cbb48707e1197eb39670276e276"],["/tags/百度/index.html","7149d74378a5b39506d942b034489b17"],["/tags/百度云盘/index.html","0e77d307f66c67f2bf27a770ed595712"],["/tags/百科/index.html","a197ec10b1fc0b560d8a298409a0d737"],["/tags/短信/index.html","7d27f69124f437057f2ef96e18883f8b"],["/tags/硬件/index.html","a639bbae5c2716d06c7cb4e4cb2b427a"],["/tags/科学上网/index.html","27cb37903b951f326f4f3c4818c1684c"],["/tags/空间/index.html","31a0facabca81669e7690b1f0199a524"],["/tags/笔记/index.html","5f1e7d24898c0b57cbd98e47d13c47f3"],["/tags/简洁/index.html","891b0d8b0c1d96df107ef0d46c7dfa5e"],["/tags/简约/index.html","c384d55b635c809dfafc1a3e499f726e"],["/tags/维基/index.html","80d137363b18d834d25ba0d9ffebee59"],["/tags/网易云/index.html","0daa5cb68bb0e213dfacc6e8ee7cc5fa"],["/tags/网盘/index.html","f511d9f99ac9092199386f5f66039d88"],["/tags/网站/index.html","ad0168605bfa4798f1434a8fb90c5c8e"],["/tags/网络/index.html","306cd8384aa9ef368e5e7e0b83cd0416"],["/tags/美化/index.html","ecf1c9c4cf0246adb236c6716d89450d"],["/tags/翻墙/index.html","949564fb2e6fdf935f962fbe5f7d7fd9"],["/tags/翻译/index.html","0143e738607bd66a0666b7e14336792d"],["/tags/翻译器/index.html","4252a816d6345e6737eee8655e79a21e"],["/tags/聊天/index.html","d1e8a93b7a547ff2d42adf2acdb561e4"],["/tags/聊天室/index.html","0631ab01c712ede702b9ccde7a108250"],["/tags/联想/index.html","c4c22ec36c75a4bd0d2e735f0e366ad9"],["/tags/节点/index.html","3febaf55e138e673affce1d687b0dad4"],["/tags/虚拟手机号/index.html","66ec484ab92e0f41b6758a0ba8e9aac0"],["/tags/补丁/index.html","c64452e759c5fb19f40f72c6a2223b94"],["/tags/视频/index.html","02a2eadc54a7d790d27717579898997c"],["/tags/解析/index.html","5f66f97d37a4a5efe91491ae3549c8a7"],["/tags/订阅链接/index.html","fbcd7669b52d717ca7e90dde3d561b82"],["/tags/记录/index.html","60cd91ddf127bb5602e2d8cc5c944fcd"],["/tags/识图/index.html","958e09356e34f6deec42672f57681c6f"],["/tags/语言/index.html","ce5156b334adf5375cba1922a5669e46"],["/tags/资源/index.html","2df7548f72c5588ae73260b82b70677a"],["/tags/资源管理器/index.html","7eb46ac935f69e39383aa8940696fab2"],["/tags/转移/index.html","28ddda9374563ff9b74e6e2936ddc423"],["/tags/软件/index.html","c44eccc7c54764690367f759f7ed0fae"],["/tags/轰炸/index.html","2396609e3714f2a9aebcb6c1621f0e96"],["/tags/迁移/index.html","fc6377d6362e7fcd9a7ce6c01bf505cf"],["/tags/远程控制/index.html","47ecfba7ee7488bd3bc69b9c44ab82d9"],["/tags/连接/index.html","c7ce7a5c9cd79f3f7da2daf3d8faaa12"],["/tags/追踪/index.html","74bebe762cabec4074acc77a31055053"],["/tags/速度/index.html","5f1030a8e31b8ef3616e027451d8aef6"],["/tags/邮箱/index.html","12438999590b484e30769bd2da049c95"],["/tags/酷炫/index.html","683898e025976851fd4eee912ccef92e"],["/tags/钓鱼/index.html","575e74774428473c5de9ef0b46543ffe"],["/tags/镜像/index.html","74ed606a2c0a090e976daa9a7f2698bc"],["/tags/随机/index.html","e82c119edd5fad27a131f326f63e3348"],["/tags/隐藏/index.html","1cf5a653cb2c7424d517326d2b20e862"],["/tags/面板/index.html","bce1fbaf4db69c47a9d25a2f58ba03f9"],["/tags/音乐/index.html","59f1958563e5688df5c8048d0a9c4e9d"],["/tags/高颜值/index.html","9c7005eec68d0798c819a33ff574dca4"],["/tags/魔改/index.html","9527eb5005191f3710e4cad7ecc39065"],["/tags/黑名单/index.html","e1c2945629b0c2881f2d180dbb3dbac4"],["/urls/index.html","c8916122182c810c597e83838b742f1b"],["/vps/index.html","4ff941e6433678ca776f28d8bd3409f7"],["/支持/index.html","77e7de58ffcd77afb66090fcd92c5bc1"]];
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
