/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","068b57161ee83bd3ed793c413b2044d5"],["/2020/11/29/clash-windows/index.html","357b3538db6b40f90a8fd30117236840"],["/2020/11/30/websites2/index.html","f98c62f80684a2c41e4ff0e16f6bd1e3"],["/2020/12/04/iphone4s/index.html","aa40d3edb1a31c9fe6a8bb41fecc8c07"],["/2020/12/04/onenote/index.html","4d0e2dd2758ae78f74d73194f8e9bbc7"],["/2020/12/04/wesites1/index.html","1fde8b6e31cc406294bcd536a2e95a6c"],["/2020/12/06/nokia808/index.html","848ab69b603ad2745e4b4120b9bee1e0"],["/2020/12/07/ipad1/index.html","754bff57bb5f7920b83c2e8c3c3fb34d"],["/2020/12/18/freesubscribes/index.html","90b9417dde2e8e64ca513320e95f6b71"],["/2020/12/19/musics/index.html","e51a0d5298a9d66fc44213e07fb670d7"],["/2020/12/19/shadowrocket/index.html","c3b75ebba30f281675a6758884797d28"],["/2020/12/19/v2ray-windows/index.html","67707f5e9b66c34100e60f4b222647b7"],["/2020/12/19/v2rayng/index.html","040197774db21d11112140dff864b2cf"],["/2020/12/20/beoplay/index.html","ac6485eadb40a5e8b02595d76c0abaf6"],["/2020/12/20/订阅链接转换/index.html","954a2a1d4f2665b303ea2ec59cfc14f5"],["/2020/12/21/chrome浏览器下载提速/index.html","4d01a5fae9908c5d89e0f9721a42930f"],["/2020/12/21/免费128线程并发下载xdown/index.html","deec95ea25ec33e9533d24ef0a8e67b0"],["/2020/12/21/免费32线程下载软件ndm/index.html","8380e889ebde4d8e7895a9c3d9f74217"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","375c9253f69c5a026241998c0a585e4b"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","5a624a0d9130ad02b9c18ab0d81c1acb"],["/2020/12/21/广告怎么知道我在想什么/index.html","06a1d4ec1836602c76712d5ca4fca716"],["/2020/12/21/无名·引子（小说试写）/index.html","559ea0661ac11b907ae77c3a875c9cc5"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","7bc5677c51775f512b92d0fca924939e"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","99dacf8f659ffca47516e9b233aab40a"],["/2020/12/21/高速轻量下载器aria2/index.html","51e33e76b601a333879acaec1b927b96"],["/2020/12/22/2020-cee-roo/index.html","588e4932843544768fee40d9b01000d3"],["/2020/12/22/firefox插件、github、steam富强/index.html","13fdf2685e0616afd3795100611fe1ae"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","0c333e4375c0504b574c252d2494e430"],["/2020/12/26/python-day-1/index.html","3eef81e46e47a373cc1c74c67ce2d110"],["/2020/12/26/python-day-2/index.html","3745af739fbba2b0d1d3ff4ad964cd1b"],["/2020/12/26/度盘不限速下载方式一赏/index.html","02a7bbf49fd0250f0be66201f609be29"],["/2020/12/26/添加开机自启软件/index.html","8780ab130932cf9362dae3d40fa510b9"],["/2020/12/26/电脑端截图方式一赏/index.html","2a872f0fb4685b7364d1bc283450fd7d"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","b69770e19682719cabed74f3cbe846ab"],["/2020/12/27/最安全的浏览器tor/index.html","fb21fcac4efd61f700f5f35b1df83557"],["/2020/12/27/网易云刷等级和听歌数量/index.html","acce932426b3d5780cac81e9b5514c5f"],["/2020/12/28/freenom申请免费域名/index.html","0b3807c300f365787ddcf80f210d5631"],["/2020/12/31/机场/index.html","33c3fa5a428373510be38a4cbbcaf9c8"],["/2021/01/01/M1/index.html","004b62a91487fa401bcbb9b693eaf063"],["/2021/01/01/compress/index.html","f3082d66e11b76d3ce50d38ac122f599"],["/2021/01/01/infinityfree/index.html","efbfce277d8282f9f8ee65a025ae81ea"],["/2021/01/01/硬核翻墙/index.html","1fb4e4f054474a2fe15e4f7ce7fb163f"],["/2021/01/02/qq/index.html","c6f444f21526f52732bbca1c4ac9687f"],["/2021/01/03/netch/index.html","a9a49be7160519e603159bf070ef6da5"],["/2021/01/03/waifu2x/index.html","3c5f7523846ff8fd037a395becb7f894"],["/2021/01/04/ads/index.html","48a9e47afe4979ccb5b6a6ec081b8da4"],["/2021/01/04/games/index.html","69afbf82b1394bb0ee3ea7185cfe68c4"],["/2021/01/04/heroku/index.html","2655b6f1e44fdcaa4ce0cd97cb4cdf8b"],["/2021/01/06/movies/index.html","641e834fecd6779a3dbf6d18252af31c"],["/2021/01/07/google2020/index.html","51895c8d8126d291e38a0f2d9f4292e7"],["/2021/01/07/lucky/index.html","45597e61eebdc5359ea16984e5fe9c21"],["/2021/01/07/spotify/index.html","f8c6bbeae023e458001565a0158a8f8b"],["/2021/01/07/thunder/index.html","2209d2dc443575b720e43669535d1f96"],["/2021/01/08/adguardhome/index.html","fd5c76f8f5774f14fc5d9dd4b86491ce"],["/2021/01/10/IBM/index.html","2e7469aacdff82aecb3f0844420ab275"],["/2021/01/10/potplayer/index.html","6561fa82a934e91c5245791f040f9e6f"],["/2021/01/10/sakuraanime/index.html","ff28886aebdcb4693d96113d25cab698"],["/2021/01/10/美剧星球/index.html","8c98843a608166bc7694214b9cde9276"],["/2021/01/12/telegraph/index.html","3ab5900a02a03f40a6432c120432b295"],["/2021/01/14/comics/index.html","6f72e19ebbddc8358eda0b00366b5998"],["/2021/01/14/ftp/index.html","7934776555c0896c93706bfe68a2daa8"],["/2021/01/14/oraclecloud/index.html","2a47ae5de498974c0c09239dc0a18b0e"],["/2021/01/14/porkbun/index.html","a5f929b57c96b63ca00046c6e3f2d94e"],["/2021/01/14/powertoys/index.html","2080a6118b2cf78d7096d156e4c32f80"],["/2021/01/14/taptap/index.html","b9f71bdf44b97c534d8ddd3ad2298684"],["/2021/01/14/ubuntuvsftp/index.html","7cf903f7f84340b112ce758634e06a59"],["/2021/01/14/小说/index.html","e65977cce3ebfd6ab02735d0f73e10fe"],["/2021/01/15/freeproxies/index.html","38cbac37200a7b41b2c58f86399d9e22"],["/2021/01/15/incaseformat/index.html","b5b55675e5f208e454ffc5457c3defd6"],["/2021/01/16/euserv/index.html","a84a84467e3da6508f88da0e29c5f504"],["/2021/01/16/winxray/index.html","6757eb3a63618796a410c4a5dd76f74e"],["/2021/01/18/qqreadhistory/index.html","2da48d2f5b20a438d09110cc7c5b5fb9"],["/2021/01/18/qqrevoke/index.html","6f38cced74f04ed192be04e6def5466d"],["/2021/01/19/freevpn/index.html","89b50c3e9a4da08d2ac52fadf0ad410e"],["/2021/01/20/browsertrack/index.html","532206308b270626203265b7ef6d2ea0"],["/2021/01/20/v2ui/index.html","fbdf26ca572c0e2520af7ac2a0b29f26"],["/2021/01/21/failedtoconnect/index.html","ddd14a1e23376933b7837b5da0099cd5"],["/2021/01/21/gitcalendar/index.html","236cf9a365503a6dbdff578cf514101d"],["/2021/01/21/markdownformat/index.html","a28d8d3aa9898d9bc83961fd3b6f3e6f"],["/2021/01/21/markdowntable/index.html","22b480e63e527a2b57aa27e2771f4784"],["/2021/01/21/vercel/index.html","d0d4fa4099d6b6a25449c4e68a26ded2"],["/2021/01/22/hardware/index.html","97a0da9e1bb2a3d2133ab1d014262e66"],["/2021/01/22/muviz/index.html","0f7626f60631d99bbb6d6b989bf92226"],["/2021/01/22/randomapi/index.html","08a2498b843a5b23aac03caf3f9eae1c"],["/2021/01/22/searchimages/index.html","f23985b9fcf3e91f02ddeaaa9bbb2b3d"],["/2021/01/23/RX文件管理器/index.html","565768c3f7f187c7e9ec2ba73d8df0c7"],["/2021/01/23/chromeflag/index.html","02fddb9eb3ef05e534e3624822601a3c"],["/2021/01/23/qttabbar/index.html","5da632f4c67a719122620dd6b54f7885"],["/2021/01/24/githubspeedup/index.html","16f47ce2a92104936bbb45a8e390b261"],["/2021/01/24/jsdelivr/index.html","81baf64f2c7390e56868da25b4e126d9"],["/2021/01/25/note/index.html","28fe21a8ada9ce9b107de33f65747e93"],["/2021/01/25/soul/index.html","a7cc44154f7d95bdb7c9db87c4a34c85"],["/2021/01/26/herokuxray/index.html","55d5fa8437e393850c3505c77eb62736"],["/2021/01/27/proxypool/index.html","93941d4c7d6a0570db16ec6bda494a08"],["/2021/01/27/tracker/index.html","046a73ebba03ddbae35c74a3e205a732"],["/2021/01/30/pandownphp/index.html","b4cc669397199a299841ef1a516d1e47"],["/2021/01/31/newgroup/index.html","5778348436ee7ed649faf6b4351acb32"],["/2021/02/01/clashlanguage/index.html","0727ae8f6601ecdf65b948168a4e7a0c"],["/2021/02/01/encrypt/index.html","c174ed49280ab1b0ddfa5f666fbfb1b3"],["/2021/02/01/footermotion/index.html","2c809c34a7c6b2376cd7e6770440a1a4"],["/2021/02/01/gitter/index.html","521fc51c8e7dd7fe71e0c398ad0c76fc"],["/2021/02/01/pixivtop50/index.html","f38abf24b1fc4c59425e48394aa8e93d"],["/2021/02/01/scrollbar/index.html","9066397a87161784466498eb845d62b4"],["/2021/02/02/clover/index.html","9c9ae440e96c20516323a3e7abe3bf0a"],["/2021/02/02/maya/index.html","fb012cc83944c044849ed9dc3684d40b"],["/2021/02/02/speedcontroller/index.html","d84afebfc5b5387ade1e24c85f741f8f"],["/2021/02/02/yesmusicplayer/index.html","225e27ccb413f6dc17018c52170fc28c"],["/2021/02/03/lenovoonelite/index.html","37bfaa9af4e7cd96a14f039ca63c65c9"],["/2021/02/03/skipads/index.html","60f624c4a9a4746a4eefdf09a66c8a99"],["/2021/02/04/picseed/index.html","5c343c613f72e4703e912d0199cdb800"],["/2021/02/04/renren/index.html","b214f5924e015766261c3df2bd45f1b8"],["/2021/02/04/serverstress/index.html","f1950f327b77610a81bd955965f07686"],["/2021/02/04/wikipediazh/index.html","ab2626d934bfe3766f7d25b08ef1f86f"],["/2021/02/05/googlevoice/index.html","559d9e90ec216f791c7f70968c3bdf87"],["/2021/02/06/clashconnection/index.html","b657d3fba6d99ad746bdc2e4b0e02258"],["/2021/02/06/gvtransfer/index.html","7499bd6e1e346d4b15857d3c9daf13cd"],["/2021/02/06/todesk/index.html","e93db3247ceec8f019d18b9770aa8dc0"],["/2021/02/06/vpnblacklist/index.html","9a0b9687d708c0846a9a9c3ca2d00da7"],["/2021/02/07/mklink/index.html","9b2e75ec249e252a5025c0df7bb60550"],["/2021/02/07/speedtest/index.html","bb2602d4fae03c553df23fdab54cac30"],["/2021/02/07/translate/index.html","9ad4b2cecf69c282d36ab13a447bce77"],["/2021/02/08/ewomail/index.html","1a59a555bdafb3d874b440a517515a22"],["/2021/02/10/officee5/index.html","a6cf4025759d4f272f30932f0b3b2a71"],["/2021/02/10/raidrive/index.html","13eb1eb344c6ac9bc61f7ffc3c5b6ad9"],["/2021/02/13/e5sub/index.html","af92cce6021eac52f63a383fb0f06a70"],["/2021/02/14/screen/index.html","00a3f8767d01a2633690b24698094aa6"],["/2021/02/15/clashtun/index.html","b6a460ef9c75f42fe8aa066e9992f250"],["/2021/02/15/messageboom/index.html","c232ef426db860fec25826a2d9f64d0f"],["/2021/02/15/oneindex/index.html","2c46464264a931c5c2c497450903f978"],["/2021/02/16/govsites/index.html","154b26af9168bb56fd656b67e75bb74d"],["/2021/02/17/hexototypecho/index.html","13171ef529f7428629ce13674bad0da5"],["/2021/02/19/fiddler/index.html","33ed15544dbe3ee338e3da1184129b5e"],["/2021/02/22/potplayerset/index.html","d4dcabe043a6ee14e3e6f86114e555f8"],["/2021/02/22/studyresource/index.html","8828f8a5f974a8fbb179bae31b9fe0c5"],["/2021/02/22/telegram/index.html","d06ce27b8839fa53e6c0e7c911ea3398"],["/2021/02/22/videos/index.html","64cefb41b967d9c15239ec56ae95da87"],["/2021/02/24/mtproxy/index.html","6a998f61fb68218ed575854153e97063"],["/2021/03/10/catchcat/index.html","9840a8e6d86f531249e1f83fa62cba97"],["/2021/03/10/neteasemusic/index.html","85fcddc26800629bbf75b390dc094254"],["/2021/03/10/surfboard/index.html","6cf24df6b7d5bf0262a40ad17d9647db"],["/2021/03/11/vpnandjc/index.html","e46b63bc12b0fc12875603e6a9b2af48"],["/404.html","ecb3ffe4cb3e0ca22376547abf1804c5"],["/archives/2020/11/index.html","0fe6fe1220d9e571768ac743603e25fb"],["/archives/2020/12/index.html","1e198251da61b1f5229998c559ce61aa"],["/archives/2020/12/page/2/index.html","781fc7429e673f2d1b93336749956ca6"],["/archives/2020/12/page/3/index.html","d3e669fa166fa236a11f1dcdff240840"],["/archives/2020/index.html","66c27df257588902f76b181dabe7e92b"],["/archives/2020/page/2/index.html","3b4d50918324f1decb1a303639b2bae0"],["/archives/2020/page/3/index.html","3e13dfeaf7c6b2787d37a40e59ba8a36"],["/archives/2021/01/index.html","3e71d46cf7d03c41a083a105c76623cd"],["/archives/2021/01/page/2/index.html","bf68bdf607116d939e35658b96375dea"],["/archives/2021/01/page/3/index.html","d2f6dac30d68339856ee5292e2921472"],["/archives/2021/01/page/4/index.html","36771c7384398cd3fb21522a146900e6"],["/archives/2021/02/index.html","75ca6edad157e53b96fca433c2232874"],["/archives/2021/02/page/2/index.html","88c8a5c5fcb27a80c6929d0f84045edc"],["/archives/2021/02/page/3/index.html","cc1829ae3fed9a48930e7d047abb3e96"],["/archives/2021/03/index.html","d7d019600224749c42b1df2cac098a25"],["/archives/2021/index.html","4289d43c9b3bd8d5e7f81491614993b2"],["/archives/2021/page/2/index.html","1cd01d6d05ca7fdc69481356b5e4da42"],["/archives/2021/page/3/index.html","975b3aaa3b9a4138b6c0570344e0afb4"],["/archives/2021/page/4/index.html","3d2f7f4f0677048655c5502027192159"],["/archives/2021/page/5/index.html","d03c684de744781b34b1d94e4df10a8f"],["/archives/2021/page/6/index.html","5306a80b0631866fc0857298d93ca3c6"],["/archives/2021/page/7/index.html","ca4f0983379c49f3d22fb67087468495"],["/archives/index.html","fa69607a56ecdf0c8c584b3c6478c5d6"],["/archives/page/10/index.html","bd463e387392514fadc741d1f198c212"],["/archives/page/2/index.html","2cace64a5fcec058441cda3d4bfcf9e8"],["/archives/page/3/index.html","5b673ab72e828c24dcbd5a416f7a90dc"],["/archives/page/4/index.html","88de9685d115a62d19da0d9f45878f1c"],["/archives/page/5/index.html","9ab17bd918af04fb8a9382defac5c059"],["/archives/page/6/index.html","fb41564f88be8798828cd24102b30ae2"],["/archives/page/7/index.html","80972968c502fbf82aad96f39e81c542"],["/archives/page/8/index.html","3f2402eaf6ac618114b438cec3fb0fca"],["/archives/page/9/index.html","e72a7179b392c283f2363556c37e9ba5"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","140dcd77a56c79d9eb0468ec0df6b3cd"],["/catchcathard/index.html","e9291c58bce68730cd21cc4e2b0a474b"],["/catchcatimpossible/index.html","ce8ac7a16e2b7990d9e0aeb78de4c0db"],["/catchcatmid/index.html","dc073d912aef351b621ce171416ebd82"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/categories/VPN/index.html","5c12a329cf032539b79e3ff499ae758e"],["/categories/VPS/index.html","3363c1116b90d23780be0b61de60ed98"],["/categories/index.html","de19251297cd11c78c9702a979327911"],["/categories/下载/index.html","3f08d2a67786b3dd721b2f2cb65b5a5b"],["/categories/安全/index.html","057e0bdc03140eba685fc33ff2637d03"],["/categories/建站/index.html","8630ea8ddcd960f453e88149dcf1ea66"],["/categories/杂/index.html","e946faf886acbe7f884ebc1d7e2e6026"],["/categories/杂/page/2/index.html","49f90a9c27a582895b360aa6b052cc9e"],["/categories/测评/index.html","1e45482670e132f189bca5730753cb05"],["/categories/科学上网/index.html","68fa247ec185396393534de3caf399df"],["/categories/科学上网/page/2/index.html","3e9336b3a8b8986adda6f2c5f38e9fe8"],["/categories/编程/index.html","33bb3906373eb20df2fac3f164008c99"],["/categories/网站/index.html","714d74d441d69ba8d26779bc8175b132"],["/categories/网站/page/2/index.html","854ae731b363d2a129d137f6f82fad24"],["/categories/软件/index.html","e8a49b7adcea4982272f818ab4170d5f"],["/categories/软件/page/2/index.html","bb23a4d7f4967f5f17e1b984b7a9c144"],["/categories/软件/page/3/index.html","4559e78cc6f8bf5b98bd0fa13d9b424a"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","2b232b687a261692f7089b6edb27f9a3"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","eca2684e68f8a1f499526cef696eae9a"],["/ios/index.html","862e650b8547e135e70e6684e0714139"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","62692a7d6bb5efbb016a70fce5e5f8d6"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","b912556e2b2e781e081c0deb0321c06d"],["/page/2/index.html","8543306cfa76f72c2e2ad63a88fb9dc5"],["/page/3/index.html","a160b99cb7dac4b37e1ab64bc278cf0b"],["/page/4/index.html","450ffdc79f72506af24041c0e3b83f18"],["/page/5/index.html","c09c8a717225d0ac561d69514dd2e8fe"],["/page/6/index.html","aea0147d44d4a2bfb56d4e529951d5ad"],["/page/7/index.html","b99e4ca0033d7bc9e27c1848c97515b7"],["/page/8/index.html","5fa4a6707ce4daf42ffe2f531d415456"],["/page/9/index.html","4a68c39aefc96d8d47acd6fbff357057"],["/payment/index.html","3c571e34185b6de1c3b4307bbe7386e1"],["/privacy-policy/index.html","798a3fa3a59ea1925b99de9db8425e9c"],["/rss2.xml","c9a2fd11ace460a8c8af6a73b29610ce"],["/search.xml","bc7cbf001bdaa30eb4140eb2c07f2550"],["/sitemap.xml","f1a6c6105bb471446ba307ffd119c1cb"],["/sw-register.js","265e06126932a13eeec78860a7c2f531"],["/tags/5t/index.html","90eff7cdac9666c3324aca1172bf50c7"],["/tags/Clash/index.html","e6fbf6c07f7079602e080787877c244a"],["/tags/Clover/index.html","bdbe68118dba58a7f3252b81b51efb05"],["/tags/E5/index.html","36c9385c968e5b8c1a745756f537ab72"],["/tags/FTP/index.html","fd78cc6034fc60f9414b98a6ffa2ba00"],["/tags/GitHub/index.html","8ae40d1f7d0de25c8e08854a21261e74"],["/tags/Heroku/index.html","9f5a202d2aaec19d96f4c22ea09ef3f4"],["/tags/Hexo/index.html","84a80fb897ece54de75027d6c4807389"],["/tags/Lenovo/index.html","3f229654513af61e5ed0202676071a74"],["/tags/Oneindex/index.html","b5e0537a7f13c651efc65e73f8deb450"],["/tags/QQ/index.html","65125aa8d37cc01e8e3e41c3d3d344ce"],["/tags/QTTabbar/index.html","6c462bca73eca90d1c46e225dc561111"],["/tags/RX文件管理器/index.html","fc8dd12bb242f46b74cabb84055195c9"],["/tags/Todesk/index.html","692273e4d1277255f219b7b0aa7339ca"],["/tags/Vercel/index.html","fca635878abee21400d1c338b5abdb96"],["/tags/ads/index.html","7f22585c4cca54feabd04138eed90358"],["/tags/api/index.html","fde701eb4ddec6e035d154351d78b834"],["/tags/app/index.html","d119649606431bd32492dc8ffd9f5858"],["/tags/blacklist/index.html","5f5ce9a89139c940b22c9e385258cb60"],["/tags/butterfly/index.html","34fa0f14d0b36ca7c9d1bfd05a813203"],["/tags/chrome/index.html","1d6197d965f4e5ce74ed0445b4dad09c"],["/tags/cloudflare/index.html","221306992476cadf83906dd25cf7c912"],["/tags/cmd/index.html","56b62a9a5c874081b10f88cb5b2ac0d3"],["/tags/c盘/index.html","5855bf4b2c071e8d568b4c06a6186cc9"],["/tags/email/index.html","2d3bc5061f91c819a9d2f891fd91af32"],["/tags/ewomail/index.html","4a971c924b26684e6ee696c055dd2277"],["/tags/fiddler/index.html","76b7c68a04e124ee5b3dd3af05f2d1ed"],["/tags/flags/index.html","8b274507c8a1282dc1db0dfd64c35541"],["/tags/footer，页脚/index.html","3870a8891db42217de05d3a6bb737c4a"],["/tags/galgame/index.html","e5bfedf9014aa2e95621c9ca07e45d27"],["/tags/git/index.html","d3b88992e3556b64bf3771b14649e27d"],["/tags/gitcalendar/index.html","d9a05b00273d9b54e90c5292eb84c8a9"],["/tags/google-voice/index.html","e6ce93487271b18c0dc9450387916436"],["/tags/gv/index.html","3962909bb5b18672e2192c1f0c6df9d6"],["/tags/html/index.html","d6116a93eee4449e70c4a3fca0d9b451"],["/tags/index-1.html","710416ae079fc8fb1e5d92cb808a413a"],["/tags/index.html","6c6b3f5d09295bc0ada58cf588fbaed8"],["/tags/js/index.html","2067bbfcb4ae38a4ac06071b275979a4"],["/tags/jsdelivr/index.html","e631a31b986157640369db343df4ff6f"],["/tags/linux/index.html","fccf598e5dbb6b6f9713e8f7e67cf24e"],["/tags/madVR/index.html","9f454a70906d40f5701fc01e95d969e6"],["/tags/markdown/index.html","59c0652e565786dbad9c22f3003ff46a"],["/tags/maya/index.html","c95bae9b30ecfa96e69b6a7dcfe79f5f"],["/tags/mklink/index.html","8d3c16231c9f384a7ca4a91553a663fc"],["/tags/office-e5/index.html","832eaeb33edc6e45cf86548423fb746d"],["/tags/onedrive/index.html","2c06b49380c6d0e8c420024d16b31006"],["/tags/picGO/index.html","ab2c48b2792ef3f514224cefeaccbfbb"],["/tags/pixiv/index.html","42215ceba338b9d5f9414d3533d75f69"],["/tags/potplayer/index.html","d46cf31cb66dda4b95192dfd54cdf1ff"],["/tags/proxypool/index.html","3be5322b94814f1d4c285fb7184ad63d"],["/tags/qbitorrent/index.html","918a74bcfb1843f83f79df42d9915801"],["/tags/raidrive/index.html","69b79c8d067fc32f7dbbc539ceef8a3b"],["/tags/screen/index.html","d6006a60def5fee6eda85d34ac7eb79e"],["/tags/speedtest/index.html","540116ae3b1e729ff9378342bbf4bf05"],["/tags/ss/index.html","ba66ad5dc0294f1657c05c26d7eb4825"],["/tags/ssr/index.html","7c340faf6d2cba48cb485165b8d516e6"],["/tags/surfboard/index.html","25e3a2329091af3fa44e9c7212e4861d"],["/tags/tap/index.html","b4cffcfe922a9ba33f4a41ab1a44180c"],["/tags/telegram/index.html","a95a1c791ac110db52215f450350b636"],["/tags/telegram代理/index.html","038bf2e1ce754f0c1fb95c2d421aba59"],["/tags/tg/index.html","8606d8d076088c92cf329f79f430f0bf"],["/tags/tg代理/index.html","d30569c9e15be4005e48bdbeea3a84ba"],["/tags/top50/index.html","58433369c449fb65a153daec4f65f6e5"],["/tags/tracker/index.html","88616cd03fbd66e603c5bf79c6a3fc43"],["/tags/translate/index.html","ec0afa581145507716ae540ebe632a1c"],["/tags/translater/index.html","1dcdeb758a738520405bb06e019e748d"],["/tags/tun/index.html","f6e80ed135d73e4ce7f34bc709926272"],["/tags/typecho/index.html","68d75b0ccec89417636fde20bb1647c3"],["/tags/v2ray/index.html","f18cc9bd64a77c412ed98c75dbe69989"],["/tags/vpn/index.html","40d33c0b720f242d3f08c80957e6bcf8"],["/tags/vps/index.html","a0bd54f16f9599eea45e38aaf7c00316"],["/tags/windows/index.html","1507f2f3b02fb8903f732413391b6de0"],["/tags/windows端/index.html","a03488c1868c2b5244b05237b6ef97af"],["/tags/xray/index.html","eec901fafbc052a857017559e6e397f1"],["/tags/下载/index.html","9f688d69ce148b1bb54e7d51c7a89949"],["/tags/不限速/index.html","dc3021d31d38860c08505a6dcf4fa022"],["/tags/个人网盘/index.html","586068bd87871ff3ba0d3eaf7aeccc35"],["/tags/主题/index.html","4f351eb70d4665ab273bde033b86fa2a"],["/tags/云便签/index.html","a9fad3248eb473fcb95f76f91674e3bb"],["/tags/云盘/index.html","b171c6aa23c1a8c342bcffee4e3af5d6"],["/tags/人人/index.html","bd9ead3e92ad67a7bc22992b2dfef548"],["/tags/代理/index.html","1cba3a3a44617c220ef83f7bf5f9c199"],["/tags/代码/index.html","5cbf9f41253f8eee277817324c9ba3c8"],["/tags/优选IP/index.html","0db04ba2fa53d7aad5e8aa3a47b15953"],["/tags/便签/index.html","819e6958ef601adf73b45582d2b96f83"],["/tags/保号/index.html","1055bf25fc6e4503c34c8c1579b3d5c9"],["/tags/免费/index.html","b81b55c9f1452ebcb763705b611eb5b9"],["/tags/免费节点/index.html","c7e3e1f8f7ce629179adab1cd1e5a5e6"],["/tags/加密/index.html","d7bb358c9e993c5270709b976c43d63e"],["/tags/动画/index.html","392febeba9f16fa98998f0aaa9a60e33"],["/tags/博客/index.html","e50fa810dcc563b9073a209f63f81f1c"],["/tags/历史记录/index.html","bab888205277dca17c2d526cf1efb854"],["/tags/压力/index.html","931383844be8f370c5b334100bf6e8e1"],["/tags/压缩包/index.html","be73d967c46101c1baf4f49ab0779ea1"],["/tags/反代/index.html","446fb9df200b743a4bd224df5ea3f679"],["/tags/可视化/index.html","713e62df2fb8993c856973786a3fed69"],["/tags/命令/index.html","47d2b6f448b51986c1488bcbfc190e4d"],["/tags/国家/index.html","d08c9d7410be23cf0ac7a6f09951571e"],["/tags/图床/index.html","081049b2bcc6744b09756eba0342cb31"],["/tags/图片/index.html","7ef52a5574e4b8463e1e5cf8fea3213c"],["/tags/域名/index.html","e588732bee85d6b5d8fd1e2f98edd2ab"],["/tags/多标签/index.html","f96d7d096cb11bdf4be92989a6cee818"],["/tags/存储/index.html","e1e50d73cb620b977e7a424f428669af"],["/tags/学习/index.html","f42ce7e71e403c9cad13421ccc7ea4ac"],["/tags/安全/index.html","23d4feb53e31c98fcdf251f5e295dd69"],["/tags/安卓/index.html","4064fefd69aa5e0c09218cf1b16f8a4d"],["/tags/宝塔/index.html","108801c9fc56ba51115d170313441315"],["/tags/小游戏/index.html","87b3aebca1e04bcd585b614b8bab0496"],["/tags/广告/index.html","6e687e32fd5c093b1111dee73f28be46"],["/tags/建站/index.html","527b675a1d6295da603dde108276313f"],["/tags/影视/index.html","129ac0fcb4f6c1962b8feb853c009f56"],["/tags/快速启动/index.html","886a37784a5c982e29a3fcbc10540dc9"],["/tags/手机/index.html","8de5c38e743e1a96262d17fff31f8977"],["/tags/托管/index.html","a0a5825808c6f617380592811f00e9c8"],["/tags/抓包/index.html","ba9a9d1de2289633038150be07e25c97"],["/tags/抓取/index.html","e5811a1af3dbd543b8310f1507515125"],["/tags/投屏/index.html","a8b740abc36a5e567c63664574d7800e"],["/tags/拓展功能/index.html","a76cc40d5d16511224ff2ae292f420d4"],["/tags/挂载/index.html","57cd2306278e5068177d03c7fde6ae41"],["/tags/指纹/index.html","ec82782f2e514bbcaafb75b0a9fc3b33"],["/tags/接口/index.html","e20775b460f1f871a9569d86bb57b214"],["/tags/提取图片/index.html","c375bd3aa59b19174aa2b402778ad2c7"],["/tags/插件/index.html","f14e6e0345d6fd874b026b9b6e7af561"],["/tags/搜图/index.html","752d4aad85bd921cf3660a29fe9cc593"],["/tags/搭建/index.html","3a10667fb359ef93b75398efb511571c"],["/tags/撤回/index.html","a2e83c4559c17fc23013f935c42f22ab"],["/tags/播放器/index.html","d3a01097664bfda2523826e7cb20e489"],["/tags/政府网站/index.html","0d873a8d722c3c123017f7a93c5b7098"],["/tags/效率/index.html","377fcf17997ce7de9a7e0644d3c3a1fd"],["/tags/日历/index.html","2a43cc27bd2e133f4f9596306995906e"],["/tags/服务器/index.html","72591db666593c304077575f2de287f8"],["/tags/机场/index.html","a2b60d8450e767635f7c406d6f507e73"],["/tags/桌面/index.html","4f4ee53085e94c7d338a380433af0312"],["/tags/梯子/index.html","dd138104976d0f29d48c7fbc1b915e5d"],["/tags/检测工具/index.html","ea5f3c05f03b889974735be03f62ef93"],["/tags/汉化/index.html","8a1daae26d85384263a69bd489ac97a3"],["/tags/测压/index.html","6c34fb8443451f1b4b87dff37d4d51c9"],["/tags/测速/index.html","56592b81172a764a40f21a0e081eab7c"],["/tags/浏览器/index.html","bcf372dfa119de64e9932f2e77efeb57"],["/tags/清理/index.html","f79f823adad04b06cb4d4c5489c244ce"],["/tags/滚动条/index.html","43e329fcd52b2e0181c95a31007ff123"],["/tags/灰色歌曲/index.html","cf91ebcb17b590aa69cfee4ed25885fe"],["/tags/电影/index.html","e89c686504c487c4dd509674882141c3"],["/tags/电视剧/index.html","5c84ede65b773b946df72da04cd71d78"],["/tags/白嫖/index.html","334173e7840594a85222b8465782f0b5"],["/tags/百度/index.html","46ec36c4cfecf5bceafb276349a9c63c"],["/tags/百度云盘/index.html","7965c5b587f7096f0eced77367e3124d"],["/tags/百科/index.html","9df7119e4b6968b4da8d1bd38b6f6d11"],["/tags/短信/index.html","30749fae4482cb73a49411d24e670422"],["/tags/硬件/index.html","873f45e67b49c47a3828242037c2ce1e"],["/tags/科学上网/index.html","5e2fa900d3f04b23213eb828c8b7ef6f"],["/tags/空间/index.html","8f3a72303ec40b874255e02a7033a5fa"],["/tags/笔记/index.html","74f3812052805c09fcf81b2552eec02a"],["/tags/简洁/index.html","6d70d1a4faed3e9da5a5d3363f3d37cc"],["/tags/简约/index.html","fc8f261cb439b1331fd0f8d2f55f56cc"],["/tags/维基/index.html","8f2db313d7446d53b603ec64522fb704"],["/tags/网易云/index.html","da123118efd2e82d0cbde68592f75c9d"],["/tags/网盘/index.html","51cd13f24d8491f98a2c7b596444bb31"],["/tags/网站/index.html","1104b11f13fc1adf8e151ee8236a62c3"],["/tags/网络/index.html","d1650ff30ab3792ecbddda215683ad83"],["/tags/美化/index.html","9c5829d3341f51fbbcad1bb523e57386"],["/tags/翻墙/index.html","2793be0ac7f0a2d29f95ccce795ff086"],["/tags/翻译/index.html","0d26849860dfbcf6801e543f00451640"],["/tags/翻译器/index.html","933b9f2bc7aa14e00be3e86aeb0432ff"],["/tags/聊天/index.html","e8af2102ac9bd90dd2bea7c039de7322"],["/tags/聊天室/index.html","f64a1a30fee1d8fd222fb1f18b382427"],["/tags/联想/index.html","8e0c5b067f95ba9741cf97139ab92801"],["/tags/节点/index.html","81d0dfb04a134b05c910000b31cf540e"],["/tags/虚拟手机号/index.html","f36f9f6c963bdcfdcf94a5baa30de70d"],["/tags/补丁/index.html","dadd4d68aa14ceb8a53f7fc0f4744542"],["/tags/视频/index.html","e6d43e9763a3f8684ad1a1cd7a576021"],["/tags/解析/index.html","665826ad47e6c3f5f6c04ee2a7154645"],["/tags/订阅链接/index.html","9f37dacd914176f3d168a5d74998733f"],["/tags/记录/index.html","fedcdccdf6d3b6d0eb6d5763fe42610e"],["/tags/识图/index.html","93724c6cae1ad7f58788042670c382ca"],["/tags/语言/index.html","a7bf09f9a778b5ac60bfbc6c963b3a7c"],["/tags/资源/index.html","2a23cc36c1a52576f81cca2c70b7290e"],["/tags/资源管理器/index.html","29654d2d4756478550511c025ec62d0b"],["/tags/转移/index.html","ff6a66e93ad1390cc5d0d6f286008d7e"],["/tags/软件/index.html","1b2cd7f6fe6134c81fea11843df6dde2"],["/tags/轰炸/index.html","50fb9754113a4bd4690f6083ffba94b6"],["/tags/迁移/index.html","5d07c7358467ab7bc3b5f9a7bed540f2"],["/tags/远程控制/index.html","09fc8ad7d9e2ca7886713b875ff61c32"],["/tags/连接/index.html","ebc63b53c414bda0ff3164f5d36f306c"],["/tags/追踪/index.html","089ea7e3719d5ddc9d137d06dc419b89"],["/tags/速度/index.html","e44ff8b5a6e0726b6c46568c32724993"],["/tags/邮箱/index.html","1dd9cfa534f85c7feb9628badc6f53f7"],["/tags/酷炫/index.html","d5c42816bf80e8b1e3b6d415e96d1fbe"],["/tags/钓鱼/index.html","294bc2866e6a3e2ec14edf4c7a729867"],["/tags/镜像/index.html","24806d519ef308b92dbca30ba64d871c"],["/tags/随机/index.html","354c1092e8af16ff546f53dfcc70da56"],["/tags/隐藏/index.html","4c3ed71cdaf5c96fd19d3c3cd0f528d7"],["/tags/面板/index.html","c54b29d2c17ad9df661dca38ea8af0d8"],["/tags/音乐/index.html","2b2cbb3302d214ffbebae2d683032e58"],["/tags/高颜值/index.html","a5fc831118ccb0a02ffcf89c843a0054"],["/tags/魔改/index.html","8861e50096085c5d7021af7c82e4d526"],["/tags/黑名单/index.html","8ccc23f30cd68b977dab469a901a6b02"],["/urls/index.html","e953d626d306a57b307dc6e577ddd8fe"],["/vps/index.html","90699dd6fa0e8b98e22edfac61d7b66d"],["/支持/index.html","1fe6ea0dfe9362efef697f42c655ab0b"]];
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
