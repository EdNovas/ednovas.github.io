/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","a5de85969f5292778e2082e6e0725b1c"],["/2020/11/29/clash-windows/index.html","b32d3a9120037cc3bad03a6c26863e9f"],["/2020/11/30/websites2/index.html","f98c62f80684a2c41e4ff0e16f6bd1e3"],["/2020/12/04/iphone4s/index.html","aa40d3edb1a31c9fe6a8bb41fecc8c07"],["/2020/12/04/onenote/index.html","4d0e2dd2758ae78f74d73194f8e9bbc7"],["/2020/12/04/wesites1/index.html","1fde8b6e31cc406294bcd536a2e95a6c"],["/2020/12/06/nokia808/index.html","848ab69b603ad2745e4b4120b9bee1e0"],["/2020/12/07/ipad1/index.html","754bff57bb5f7920b83c2e8c3c3fb34d"],["/2020/12/18/freesubscribes/index.html","fcedaf5fe4f8585b2ef3cf71ea67934c"],["/2020/12/19/musics/index.html","e51a0d5298a9d66fc44213e07fb670d7"],["/2020/12/19/shadowrocket/index.html","7cc6dbaa84bff138d3f162900b3f739b"],["/2020/12/19/v2ray-windows/index.html","67707f5e9b66c34100e60f4b222647b7"],["/2020/12/19/v2rayng/index.html","040197774db21d11112140dff864b2cf"],["/2020/12/20/beoplay/index.html","ac6485eadb40a5e8b02595d76c0abaf6"],["/2020/12/20/订阅链接转换/index.html","954a2a1d4f2665b303ea2ec59cfc14f5"],["/2020/12/21/chrome浏览器下载提速/index.html","4d01a5fae9908c5d89e0f9721a42930f"],["/2020/12/21/免费128线程并发下载xdown/index.html","deec95ea25ec33e9533d24ef0a8e67b0"],["/2020/12/21/免费32线程下载软件ndm/index.html","8380e889ebde4d8e7895a9c3d9f74217"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","375c9253f69c5a026241998c0a585e4b"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","5a624a0d9130ad02b9c18ab0d81c1acb"],["/2020/12/21/广告怎么知道我在想什么/index.html","06a1d4ec1836602c76712d5ca4fca716"],["/2020/12/21/无名·引子（小说试写）/index.html","559ea0661ac11b907ae77c3a875c9cc5"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","7bc5677c51775f512b92d0fca924939e"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","99dacf8f659ffca47516e9b233aab40a"],["/2020/12/21/高速轻量下载器aria2/index.html","51e33e76b601a333879acaec1b927b96"],["/2020/12/22/2020-cee-roo/index.html","588e4932843544768fee40d9b01000d3"],["/2020/12/22/firefox插件、github、steam富强/index.html","13fdf2685e0616afd3795100611fe1ae"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","0c333e4375c0504b574c252d2494e430"],["/2020/12/26/python-day-1/index.html","3eef81e46e47a373cc1c74c67ce2d110"],["/2020/12/26/python-day-2/index.html","3745af739fbba2b0d1d3ff4ad964cd1b"],["/2020/12/26/度盘不限速下载方式一赏/index.html","02a7bbf49fd0250f0be66201f609be29"],["/2020/12/26/添加开机自启软件/index.html","8780ab130932cf9362dae3d40fa510b9"],["/2020/12/26/电脑端截图方式一赏/index.html","2a872f0fb4685b7364d1bc283450fd7d"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","b69770e19682719cabed74f3cbe846ab"],["/2020/12/27/最安全的浏览器tor/index.html","fb21fcac4efd61f700f5f35b1df83557"],["/2020/12/27/网易云刷等级和听歌数量/index.html","acce932426b3d5780cac81e9b5514c5f"],["/2020/12/28/freenom申请免费域名/index.html","0b3807c300f365787ddcf80f210d5631"],["/2020/12/31/机场/index.html","33c3fa5a428373510be38a4cbbcaf9c8"],["/2021/01/01/M1/index.html","004b62a91487fa401bcbb9b693eaf063"],["/2021/01/01/compress/index.html","f3082d66e11b76d3ce50d38ac122f599"],["/2021/01/01/infinityfree/index.html","efbfce277d8282f9f8ee65a025ae81ea"],["/2021/01/01/硬核翻墙/index.html","1fb4e4f054474a2fe15e4f7ce7fb163f"],["/2021/01/02/qq/index.html","c6f444f21526f52732bbca1c4ac9687f"],["/2021/01/03/netch/index.html","a9a49be7160519e603159bf070ef6da5"],["/2021/01/03/waifu2x/index.html","3c5f7523846ff8fd037a395becb7f894"],["/2021/01/04/ads/index.html","48a9e47afe4979ccb5b6a6ec081b8da4"],["/2021/01/04/games/index.html","69afbf82b1394bb0ee3ea7185cfe68c4"],["/2021/01/04/heroku/index.html","2655b6f1e44fdcaa4ce0cd97cb4cdf8b"],["/2021/01/06/movies/index.html","641e834fecd6779a3dbf6d18252af31c"],["/2021/01/07/google2020/index.html","51895c8d8126d291e38a0f2d9f4292e7"],["/2021/01/07/lucky/index.html","45597e61eebdc5359ea16984e5fe9c21"],["/2021/01/07/spotify/index.html","f8c6bbeae023e458001565a0158a8f8b"],["/2021/01/07/thunder/index.html","2209d2dc443575b720e43669535d1f96"],["/2021/01/08/adguardhome/index.html","fd5c76f8f5774f14fc5d9dd4b86491ce"],["/2021/01/10/IBM/index.html","2e7469aacdff82aecb3f0844420ab275"],["/2021/01/10/potplayer/index.html","6561fa82a934e91c5245791f040f9e6f"],["/2021/01/10/sakuraanime/index.html","ff28886aebdcb4693d96113d25cab698"],["/2021/01/10/美剧星球/index.html","8c98843a608166bc7694214b9cde9276"],["/2021/01/12/telegraph/index.html","3ab5900a02a03f40a6432c120432b295"],["/2021/01/14/comics/index.html","6f72e19ebbddc8358eda0b00366b5998"],["/2021/01/14/ftp/index.html","7934776555c0896c93706bfe68a2daa8"],["/2021/01/14/oraclecloud/index.html","2a47ae5de498974c0c09239dc0a18b0e"],["/2021/01/14/porkbun/index.html","a5f929b57c96b63ca00046c6e3f2d94e"],["/2021/01/14/powertoys/index.html","2080a6118b2cf78d7096d156e4c32f80"],["/2021/01/14/taptap/index.html","b9f71bdf44b97c534d8ddd3ad2298684"],["/2021/01/14/ubuntuvsftp/index.html","7cf903f7f84340b112ce758634e06a59"],["/2021/01/14/小说/index.html","e65977cce3ebfd6ab02735d0f73e10fe"],["/2021/01/15/freeproxies/index.html","38cbac37200a7b41b2c58f86399d9e22"],["/2021/01/15/incaseformat/index.html","b5b55675e5f208e454ffc5457c3defd6"],["/2021/01/16/euserv/index.html","a84a84467e3da6508f88da0e29c5f504"],["/2021/01/16/winxray/index.html","6757eb3a63618796a410c4a5dd76f74e"],["/2021/01/18/qqreadhistory/index.html","2da48d2f5b20a438d09110cc7c5b5fb9"],["/2021/01/18/qqrevoke/index.html","6f38cced74f04ed192be04e6def5466d"],["/2021/01/19/freevpn/index.html","a8a8ea71722ab76c59d9965e51779aef"],["/2021/01/20/browsertrack/index.html","532206308b270626203265b7ef6d2ea0"],["/2021/01/20/v2ui/index.html","fbdf26ca572c0e2520af7ac2a0b29f26"],["/2021/01/21/failedtoconnect/index.html","ddd14a1e23376933b7837b5da0099cd5"],["/2021/01/21/gitcalendar/index.html","236cf9a365503a6dbdff578cf514101d"],["/2021/01/21/markdownformat/index.html","a28d8d3aa9898d9bc83961fd3b6f3e6f"],["/2021/01/21/markdowntable/index.html","22b480e63e527a2b57aa27e2771f4784"],["/2021/01/21/vercel/index.html","d0d4fa4099d6b6a25449c4e68a26ded2"],["/2021/01/22/hardware/index.html","97a0da9e1bb2a3d2133ab1d014262e66"],["/2021/01/22/muviz/index.html","0f7626f60631d99bbb6d6b989bf92226"],["/2021/01/22/randomapi/index.html","08a2498b843a5b23aac03caf3f9eae1c"],["/2021/01/22/searchimages/index.html","f23985b9fcf3e91f02ddeaaa9bbb2b3d"],["/2021/01/23/RX文件管理器/index.html","565768c3f7f187c7e9ec2ba73d8df0c7"],["/2021/01/23/chromeflag/index.html","02fddb9eb3ef05e534e3624822601a3c"],["/2021/01/23/qttabbar/index.html","5da632f4c67a719122620dd6b54f7885"],["/2021/01/24/githubspeedup/index.html","16f47ce2a92104936bbb45a8e390b261"],["/2021/01/24/jsdelivr/index.html","81baf64f2c7390e56868da25b4e126d9"],["/2021/01/25/note/index.html","28fe21a8ada9ce9b107de33f65747e93"],["/2021/01/25/soul/index.html","a7cc44154f7d95bdb7c9db87c4a34c85"],["/2021/01/26/herokuxray/index.html","55d5fa8437e393850c3505c77eb62736"],["/2021/01/27/proxypool/index.html","93941d4c7d6a0570db16ec6bda494a08"],["/2021/01/27/tracker/index.html","046a73ebba03ddbae35c74a3e205a732"],["/2021/01/30/pandownphp/index.html","b4cc669397199a299841ef1a516d1e47"],["/2021/01/31/newgroup/index.html","5778348436ee7ed649faf6b4351acb32"],["/2021/02/01/clashlanguage/index.html","0727ae8f6601ecdf65b948168a4e7a0c"],["/2021/02/01/encrypt/index.html","c174ed49280ab1b0ddfa5f666fbfb1b3"],["/2021/02/01/footermotion/index.html","2c809c34a7c6b2376cd7e6770440a1a4"],["/2021/02/01/gitter/index.html","521fc51c8e7dd7fe71e0c398ad0c76fc"],["/2021/02/01/pixivtop50/index.html","f38abf24b1fc4c59425e48394aa8e93d"],["/2021/02/01/scrollbar/index.html","9066397a87161784466498eb845d62b4"],["/2021/02/02/clover/index.html","9c9ae440e96c20516323a3e7abe3bf0a"],["/2021/02/02/maya/index.html","fb012cc83944c044849ed9dc3684d40b"],["/2021/02/02/speedcontroller/index.html","d84afebfc5b5387ade1e24c85f741f8f"],["/2021/02/02/yesmusicplayer/index.html","225e27ccb413f6dc17018c52170fc28c"],["/2021/02/03/lenovoonelite/index.html","37bfaa9af4e7cd96a14f039ca63c65c9"],["/2021/02/03/skipads/index.html","60f624c4a9a4746a4eefdf09a66c8a99"],["/2021/02/04/picseed/index.html","5c343c613f72e4703e912d0199cdb800"],["/2021/02/04/renren/index.html","b214f5924e015766261c3df2bd45f1b8"],["/2021/02/04/serverstress/index.html","f1950f327b77610a81bd955965f07686"],["/2021/02/04/wikipediazh/index.html","ab2626d934bfe3766f7d25b08ef1f86f"],["/2021/02/05/googlevoice/index.html","559d9e90ec216f791c7f70968c3bdf87"],["/2021/02/06/clashconnection/index.html","b657d3fba6d99ad746bdc2e4b0e02258"],["/2021/02/06/gvtransfer/index.html","7499bd6e1e346d4b15857d3c9daf13cd"],["/2021/02/06/todesk/index.html","e93db3247ceec8f019d18b9770aa8dc0"],["/2021/02/06/vpnblacklist/index.html","9a0b9687d708c0846a9a9c3ca2d00da7"],["/2021/02/07/mklink/index.html","9b2e75ec249e252a5025c0df7bb60550"],["/2021/02/07/speedtest/index.html","bb2602d4fae03c553df23fdab54cac30"],["/2021/02/07/translate/index.html","9ad4b2cecf69c282d36ab13a447bce77"],["/2021/02/08/ewomail/index.html","1a59a555bdafb3d874b440a517515a22"],["/2021/02/10/officee5/index.html","a6cf4025759d4f272f30932f0b3b2a71"],["/2021/02/10/raidrive/index.html","13eb1eb344c6ac9bc61f7ffc3c5b6ad9"],["/2021/02/13/e5sub/index.html","af92cce6021eac52f63a383fb0f06a70"],["/2021/02/14/screen/index.html","00a3f8767d01a2633690b24698094aa6"],["/2021/02/15/clashtun/index.html","b6a460ef9c75f42fe8aa066e9992f250"],["/2021/02/15/messageboom/index.html","c232ef426db860fec25826a2d9f64d0f"],["/2021/02/15/oneindex/index.html","2c46464264a931c5c2c497450903f978"],["/2021/02/16/govsites/index.html","154b26af9168bb56fd656b67e75bb74d"],["/2021/02/17/hexototypecho/index.html","13171ef529f7428629ce13674bad0da5"],["/2021/02/19/fiddler/index.html","33ed15544dbe3ee338e3da1184129b5e"],["/2021/02/22/potplayerset/index.html","d4dcabe043a6ee14e3e6f86114e555f8"],["/2021/02/22/studyresource/index.html","8828f8a5f974a8fbb179bae31b9fe0c5"],["/2021/02/22/telegram/index.html","d06ce27b8839fa53e6c0e7c911ea3398"],["/2021/02/22/videos/index.html","64cefb41b967d9c15239ec56ae95da87"],["/2021/02/24/mtproxy/index.html","6a998f61fb68218ed575854153e97063"],["/2021/03/10/catchcat/index.html","9840a8e6d86f531249e1f83fa62cba97"],["/2021/03/10/neteasemusic/index.html","85fcddc26800629bbf75b390dc094254"],["/2021/03/10/surfboard/index.html","6cf24df6b7d5bf0262a40ad17d9647db"],["/2021/03/11/vpnandjc/index.html","e46b63bc12b0fc12875603e6a9b2af48"],["/404.html","0ef9769c981c7745e26cdc940aafcecf"],["/archives/2020/11/index.html","38f6c524c08f9e70e64cdd5200a426b4"],["/archives/2020/12/index.html","9e9eee27bba710b1fe22528ea83a07d0"],["/archives/2020/12/page/2/index.html","e202e62dc815e16de8ac46db80682007"],["/archives/2020/12/page/3/index.html","dac24438f66d7ddfb900f94c61e6f5d5"],["/archives/2020/index.html","0620c0bf660ce3f9487be5ff6389ade8"],["/archives/2020/page/2/index.html","e1fecba5f4c2b7d77eb92ec070db89f6"],["/archives/2020/page/3/index.html","4738a80dbce5690cbf6f8b82ccf9e437"],["/archives/2021/01/index.html","0274b886c7c2781567d6dfdc30a9c82c"],["/archives/2021/01/page/2/index.html","49863d1e753cbcfd7f593abda7dcea88"],["/archives/2021/01/page/3/index.html","5c6323bf1c715cb1bd000c4169ebfa91"],["/archives/2021/01/page/4/index.html","dd230e8283f1d0ecbadad7f7e3134cf1"],["/archives/2021/02/index.html","668f9ba98152961b4a5fd707dc5715c4"],["/archives/2021/02/page/2/index.html","af271d6b68695bcb0e39127abc755a8a"],["/archives/2021/02/page/3/index.html","6c4a8a64aa96267fd29ed31eac2edec0"],["/archives/2021/03/index.html","e0b7e44c87b29575115116c8885cbfec"],["/archives/2021/index.html","7accd586fe957eb0ab90f69da8d3c857"],["/archives/2021/page/2/index.html","8d5471cdeae968b9e731461aec315d87"],["/archives/2021/page/3/index.html","649fda5d6a37425f877605e214a174d4"],["/archives/2021/page/4/index.html","1e13fc9204527a63e229fb6c63ef7763"],["/archives/2021/page/5/index.html","100c3b260ad2a5c796bc74769a4570f2"],["/archives/2021/page/6/index.html","eb86c9ef4e7679adc8817696e50cbe3d"],["/archives/2021/page/7/index.html","626cb59d2c8fd41b817ed423a11da8a3"],["/archives/index.html","772e943c49baf44c0e120d11e0d3ae10"],["/archives/page/10/index.html","44ac9a94ee2fd15df2277316fcae30cc"],["/archives/page/2/index.html","da5ea275745331b8cd7312fd90d821e2"],["/archives/page/3/index.html","0ed984981a56419b73052dc780ffce7d"],["/archives/page/4/index.html","afd9dfe27ed769188b90b2a08c024fb3"],["/archives/page/5/index.html","93e7f4379cc4b3e8bf8a44be68f1f1e2"],["/archives/page/6/index.html","91f9b78b4df14eb8ded71bc84e4c517a"],["/archives/page/7/index.html","8f1dac08aa84aa4cf0aee4c3861f3759"],["/archives/page/8/index.html","10993300a3c38491dd2f19fbf29e01dc"],["/archives/page/9/index.html","33a29245343712414d37934b147241b9"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","140dcd77a56c79d9eb0468ec0df6b3cd"],["/catchcathard/index.html","e9291c58bce68730cd21cc4e2b0a474b"],["/catchcatimpossible/index.html","ce8ac7a16e2b7990d9e0aeb78de4c0db"],["/catchcatmid/index.html","dc073d912aef351b621ce171416ebd82"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/categories/VPN/index.html","03ede16750597eba5d2812f95215ccdc"],["/categories/VPS/index.html","c7bfc7e54a957e75a81c307d2d8fbcb1"],["/categories/index.html","31af6ef43b34d642508e918e3b83e201"],["/categories/下载/index.html","70382d5cdd6b1c5f192353adda8ccc53"],["/categories/安全/index.html","56010b8147e8adacc286dbef53803da5"],["/categories/建站/index.html","0da188807075b8e6f4e177d9d9c5914b"],["/categories/杂/index.html","1f7cdb2e4dae3ba5ea7b87322b28f29a"],["/categories/杂/page/2/index.html","dd6c21e12e0e53313d3c8d51c631d418"],["/categories/测评/index.html","53d38f92263ff960e09753bb84a2ab83"],["/categories/科学上网/index.html","4ac553782387da547737fa785d6ab357"],["/categories/科学上网/page/2/index.html","fc04c301bc510b2dc9abad8acf8431af"],["/categories/编程/index.html","bffa777811505601c5a0c0e602cf754b"],["/categories/网站/index.html","e69e3b7301c6430aecad03ecb23789c4"],["/categories/网站/page/2/index.html","873f63769de50c5f8c63997b829c550b"],["/categories/软件/index.html","b8b58cd0e1529ab5bf43635d71529c26"],["/categories/软件/page/2/index.html","f847005427a495da70054f290a70f044"],["/categories/软件/page/3/index.html","41e0191cfaad85c8b429fff226f3199b"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","c28a3d5175ac4d30b746aab45c5c9ae1"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","4eadba9ca8a24f5a574ae60dd64c8768"],["/ios/index.html","00967f33f15a62464518143b52d914ff"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","9e8aaa26f405403b67d96e2cde4b747e"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","8eaac48dac1dfbfdb3b8c5d0d48f7ff0"],["/page/2/index.html","7d9533aed584c3022417ddc8813b3a8d"],["/page/3/index.html","e0cba5f9b86d8ad3afa479163fdbce31"],["/page/4/index.html","771dbdd27c491914275c7756844ae97e"],["/page/5/index.html","0b3a605b382e5fad4e8e5daae39d8064"],["/page/6/index.html","bfc238e2f7e3932ab428918a8b266519"],["/page/7/index.html","deaa70c7bbe75cd939f4a1f6f531f2ff"],["/page/8/index.html","08d25c6596a85699039154b3bcac533a"],["/page/9/index.html","0a0a27ff89cdb2b3285df05aab765911"],["/payment/index.html","ca0fbdd3f66d0fd7656ecb1a64afc679"],["/privacy-policy/index.html","d3ad2b62494c8919f6f8d98e824bec03"],["/rss2.xml","bb7c3f555d16f56c3848b630431bdf0d"],["/search.xml","d0adfe4ddd911394f810d510822daf33"],["/sitemap.xml","6b03b4ae9f75e2e0624fc6d5e5e58c02"],["/sw-register.js","adfc9196df84a20d0467595244154e43"],["/tags/5t/index.html","f70e84597ff2c5cc1093b08916a2c5f6"],["/tags/Clash/index.html","0c1ed0c133b75c2abc909a04245ffe49"],["/tags/Clover/index.html","7a7bbdad58026ac5de045e571398f8ef"],["/tags/E5/index.html","d14bbefc05ab60fa52a0d665a8054082"],["/tags/FTP/index.html","023ca833ba973fde252a443bb135c149"],["/tags/GitHub/index.html","fd248ed4def94a8c4901dfe33a086f46"],["/tags/Heroku/index.html","9f957080333b98d56261f88912059186"],["/tags/Hexo/index.html","09dc174a02fd6b433cbc97405c2b9b62"],["/tags/Lenovo/index.html","5cc293c27b66855532c182d8e48d9bdc"],["/tags/Oneindex/index.html","5a5a84c9e064dfa31d5bcbfe2411a026"],["/tags/QQ/index.html","bfcaff58fe710ebd0b7a62ddfb56b6ed"],["/tags/QTTabbar/index.html","f8c054788b295897562bffc867316158"],["/tags/RX文件管理器/index.html","31771ef2642954978b7400b661c24d5a"],["/tags/Todesk/index.html","b754d8a3afb15bce84a6c49a203559a7"],["/tags/Vercel/index.html","ea8250b8df166ddba6cf892e30815e71"],["/tags/ads/index.html","a06814237717e60d734941bab8f2de7c"],["/tags/api/index.html","b4c08e4515718fe25a63eab94d70ed9b"],["/tags/app/index.html","bfac77bf4449803a75bfef070ff25981"],["/tags/blacklist/index.html","a70bf0daaebaf84333a963956c3ce9a3"],["/tags/butterfly/index.html","cc2625fe5989c34c7c814ebb32bc7fe9"],["/tags/chrome/index.html","9d09c1f3833460f11304cdc6c0e139ad"],["/tags/cloudflare/index.html","0d9b88cef367649eb2ac084018257200"],["/tags/cmd/index.html","d57abcf3b55e4bfb748249ce39f0e5dc"],["/tags/c盘/index.html","74c33a40ef85ee4a73d7dd5e8caf7023"],["/tags/email/index.html","10a6e461f7e0c8d034349218a69b9117"],["/tags/ewomail/index.html","8bf41765c8b9db73f9ce03f03e40080b"],["/tags/fiddler/index.html","f1759fab1dad9e7cea3991d2bbc2c3ca"],["/tags/flags/index.html","3dca817c6de25b77255a6cb2cd071917"],["/tags/footer，页脚/index.html","ccd957ccf83209237d51275edf89637e"],["/tags/galgame/index.html","e5adb8a0029c22fb8e9c79eb519a2570"],["/tags/git/index.html","36922187a54b3d5c39df3bcbcb7c7314"],["/tags/gitcalendar/index.html","c0477084d5e6c0b43ac68c7b3c5778e9"],["/tags/google-voice/index.html","1964e48f5f1a8c0d9764f4d9a216b0db"],["/tags/gv/index.html","b5c795df64994d73070a9280ade8267c"],["/tags/html/index.html","d9528865716a451c34a89c5aaba0f622"],["/tags/index-1.html","00f1549b5beecbdf15c0a05ad5ebadec"],["/tags/index.html","dc74daf90b61e5894278c49570cd66c9"],["/tags/js/index.html","ea07ba983c1ad2f29e29d747e1eca3da"],["/tags/jsdelivr/index.html","bfb3ad29f0ded7d2e3b1c3c7ea71c56e"],["/tags/linux/index.html","d91d0f4c2a7c2b0ecbe71f9e67c38c44"],["/tags/madVR/index.html","1f6ed16782508cf66d855d35d95ee019"],["/tags/markdown/index.html","b3c18efc429c172bcb8570480e17fa39"],["/tags/maya/index.html","7da2e2b1266cb8d18cd825cf47935538"],["/tags/mklink/index.html","5e3a4b9595e83b51be2d20f69e4fdfe3"],["/tags/office-e5/index.html","01e1081b86aea78929a2c3e3d5eb174f"],["/tags/onedrive/index.html","2741c3967d182427cbc3c544e271babc"],["/tags/picGO/index.html","19735be93047566a6fe4bb1f3cb533d1"],["/tags/pixiv/index.html","38dff1c027f039027b7ebd79a61b417f"],["/tags/potplayer/index.html","018332abf41d5686e298a494a3b59a7f"],["/tags/proxypool/index.html","00f85afe2826eaf07e1c8d78c3a63d36"],["/tags/qbitorrent/index.html","2e8009b4de2d54deb18c67d8eba8c9c5"],["/tags/raidrive/index.html","48c71e5da2bd196265af3f092627d3a5"],["/tags/screen/index.html","d189224f6197ee3f59dd8cecf8c0cd29"],["/tags/speedtest/index.html","e8c56163bc8e90e0a96547d2400df4d2"],["/tags/ss/index.html","bc2e5ab65776929d5af817dd03306e72"],["/tags/ssr/index.html","12561426d5edae47d49132e05f44692f"],["/tags/surfboard/index.html","8b79b3634a8283370feb0c32a33a4637"],["/tags/tap/index.html","4c9e91edd0abb982e6e6f1b2f5f1b8e2"],["/tags/telegram/index.html","c73e4947ca64d319b9320c14016ae5a1"],["/tags/telegram代理/index.html","22e3552050fd649a1435af5f98c7e0d3"],["/tags/tg/index.html","1630a00f966a623c6a52251ddfaa5fde"],["/tags/tg代理/index.html","6c78cbeb002cf46ecc24055ec4931393"],["/tags/top50/index.html","95e9726a26c13c06c9c45891d62c344b"],["/tags/tracker/index.html","b01be49e2f94f0711cf61d6066cfaedb"],["/tags/translate/index.html","241caff0826dc413e83e040e4b17e842"],["/tags/translater/index.html","671d6f47c72a99b68e9d993e86193899"],["/tags/tun/index.html","38506d5ade04583d300e3160464de749"],["/tags/typecho/index.html","5dbf48757fd4a6a5b3bbd06c63c0021b"],["/tags/v2ray/index.html","4708d4051ab991fa334484007948d30d"],["/tags/vpn/index.html","a2541143a4fc02bcbb6134eef01d1d7b"],["/tags/vps/index.html","ecef1fc8f8bf1d3b15a3fb182d35671a"],["/tags/windows/index.html","8635eaa34ce0c49715536d2ffc844831"],["/tags/windows端/index.html","f2f38dbbdd3a9e8c49450a25466443d3"],["/tags/xray/index.html","f8530ff8d4968660e8925e104b1d54ca"],["/tags/下载/index.html","8f90a9f51904ca236b9df6fc69570930"],["/tags/不限速/index.html","15b8c8b9394989c07b4147b61997c075"],["/tags/个人网盘/index.html","a1b9736279b80dfb3ab63739f2154f1f"],["/tags/主题/index.html","68af8ad871b461bce62e94b8b01d17d1"],["/tags/云便签/index.html","b7ab8d4c7fc1090f5388e8682024b699"],["/tags/云盘/index.html","096812ab95b1235dd3de6db0a1e23332"],["/tags/人人/index.html","ddd23b55d9609609663d4355c9280765"],["/tags/代理/index.html","d28267939a7592e0b0110671fbcb3322"],["/tags/代码/index.html","2d22cd57c4efed53560216421754c4e6"],["/tags/优选IP/index.html","49745d33ce4bbe2aac02330ef10a4df8"],["/tags/便签/index.html","bc43cca4a8c08c50eb1fa8140b40ef2e"],["/tags/保号/index.html","b5d12e16bcad32d6469946a9543a95a7"],["/tags/免费/index.html","ea06bcdaf88f5e4aba27930c1e83a324"],["/tags/免费节点/index.html","82410b97022872fb02fed65223c2f863"],["/tags/加密/index.html","a310d61628ca26e3c60d458c8f028545"],["/tags/动画/index.html","bf93d92ba0509928353e4dd81f7c6fac"],["/tags/博客/index.html","b7c2fa319d05d35275c90154f956dc0b"],["/tags/历史记录/index.html","5300785c080e9a75d4f99368f806a23a"],["/tags/压力/index.html","b13e3892eb9eab9dff6643542f1a4650"],["/tags/压缩包/index.html","d89c28a719821818f34680aa19e1e60a"],["/tags/反代/index.html","be84ab1b9abad7810f5e19c4fa72f55d"],["/tags/可视化/index.html","c87e42da4414fb3f37f78d525e681c66"],["/tags/命令/index.html","e8c698e4b6832f2d0dbf7c027b9b7d2c"],["/tags/国家/index.html","27c7de7c2f52feeb1bae00365558eefa"],["/tags/图床/index.html","a447e26e20df5d6c7b44d3a78f668c67"],["/tags/图片/index.html","ab307bbc926959ab88349142d0a5d045"],["/tags/域名/index.html","d0916384fbb34669e3d8fbf27679418f"],["/tags/多标签/index.html","d839114dc615df6000e2001153f7cc26"],["/tags/存储/index.html","1f5be292f4f6079701aa3f653925003a"],["/tags/学习/index.html","87fe239a51a05b2aba75fcc27e7d62a1"],["/tags/安全/index.html","bc8866c284a1bc8fb004e8c92c0ca45b"],["/tags/安卓/index.html","2fe684576809a550b74a60b8389e2941"],["/tags/宝塔/index.html","0790bda29dfdafd745a2271c51148a27"],["/tags/小游戏/index.html","977a945a1ab0cfbf53951f2312dea329"],["/tags/广告/index.html","0b17bccf9716a478361ce427d93e0dd1"],["/tags/建站/index.html","ff278a6619c19e791f571f1a860e447a"],["/tags/影视/index.html","20f94e63631621a9a0399a745961b297"],["/tags/快速启动/index.html","0f02139ce60798c8d496ac918fb52e2d"],["/tags/手机/index.html","533c2a5a15b4bbbb4597610bbc74baee"],["/tags/托管/index.html","ad9fd4fc71bb96782c5418bc94b2683e"],["/tags/抓包/index.html","8a57dfa03e0e50b0ebff1c207a7d6f92"],["/tags/抓取/index.html","138beecd6c6522a791e374e3c237055f"],["/tags/投屏/index.html","a5178f132cfa54c0ac344d2da60901ad"],["/tags/拓展功能/index.html","ebdc4d1af22825cb9f2c6f8251b17a3c"],["/tags/挂载/index.html","a30236bb0d03fe9b2d88421e776d809a"],["/tags/指纹/index.html","27b6d1ad566000bb56826a125ab144bc"],["/tags/接口/index.html","85403ea8e0a8999247549507dfcdf3b9"],["/tags/提取图片/index.html","0bc150c9968672c4db9946f76fc5f60b"],["/tags/插件/index.html","796f15dbdc412fe4b85af1a05473b89b"],["/tags/搜图/index.html","f412d0009de24a0ea0bee0644ab8c8f8"],["/tags/搭建/index.html","067b903b63a479f07f10247926a3821d"],["/tags/撤回/index.html","82995977843346bb3382047d65e4faf7"],["/tags/播放器/index.html","724f5ae39fd9ad1a96d0f6d1e287e2d2"],["/tags/政府网站/index.html","44634b8968d56e6b9fe5434bfc8a86d9"],["/tags/效率/index.html","19f958f5cc84ba1f8f477f2777e4f21e"],["/tags/日历/index.html","843eb8fcde426830668fbbdb6f587a81"],["/tags/服务器/index.html","0216247956ecdb654be478668837f7af"],["/tags/机场/index.html","875d8ee59585fa9b8bd27e05fcc0c8a4"],["/tags/桌面/index.html","17b89f840a9b08cb032896af2308c482"],["/tags/梯子/index.html","b463f140e35e9a05d1eb7501692c1892"],["/tags/检测工具/index.html","f1f5467a59dbbc1dd99693aa9b5356a3"],["/tags/汉化/index.html","348254d61ca038146ce1ea1ff29538ab"],["/tags/测压/index.html","2d9d36ae2ab9e69cc128b5fa0d60b483"],["/tags/测速/index.html","801f1eddc76fc5a10e2974aaed301c5d"],["/tags/浏览器/index.html","73673f064419ad17b68aa165c246ade6"],["/tags/清理/index.html","2201db847249af0ee8f6b1ee914789a6"],["/tags/滚动条/index.html","45b6e9fccaf2e43b4d8a07c22c21ec91"],["/tags/灰色歌曲/index.html","cba7ef9c1e01595a35a4a9ecd4bd381a"],["/tags/电影/index.html","01292e4cb9248ca4f6c719a1a59d1119"],["/tags/电视剧/index.html","340afff0c0f6846d3d4d427e120273f8"],["/tags/白嫖/index.html","def4d270abcc45d8a961037a885596a5"],["/tags/百度/index.html","5e6b47fa0d7acaa2905b876014afefdd"],["/tags/百度云盘/index.html","b47e62badfb78ded14765bcd646fcc9f"],["/tags/百科/index.html","1edc565dcb78fa24a885e03592e411a4"],["/tags/短信/index.html","eb4a3346314222ebbecd2d26e37653e8"],["/tags/硬件/index.html","df63bb46a45fab9b389a0a4e83ff3062"],["/tags/科学上网/index.html","aa3dda5fcfa57dd173e12abc56a162de"],["/tags/空间/index.html","fd85389c378295bff8377ece6f3732cf"],["/tags/笔记/index.html","883c18b6431928402a4d566c1a572afd"],["/tags/简洁/index.html","1980d4ccceb061896a06e51b03f0b303"],["/tags/简约/index.html","2f4d24cf6aebd1ec41b4582825230836"],["/tags/维基/index.html","2b62872f3ac89300984822950db67a8a"],["/tags/网易云/index.html","cbd615735da8e9bc0a99d3e7605e100e"],["/tags/网盘/index.html","350222f7513b9530a69741bf31e3090d"],["/tags/网站/index.html","4b80e409aac6763bfe752b66448dfbd7"],["/tags/网络/index.html","8ddb1396efa7d3a0f4ae1883765ab8d5"],["/tags/美化/index.html","50ffd40ac528259734162d2d12131311"],["/tags/翻墙/index.html","bad90e0c3eff19778a1e4b60c7bc9628"],["/tags/翻译/index.html","ef0083681795f712db4b23727609b519"],["/tags/翻译器/index.html","8f4dbe3bda9d0fb55bea58373c59d725"],["/tags/聊天/index.html","72fcb0e56bd5e14bbc59a2e513642720"],["/tags/聊天室/index.html","2682b47abdee09297d7efef1b8666250"],["/tags/联想/index.html","e62ba7bb2372bbb32ba83c46c369191c"],["/tags/节点/index.html","8cd67085d41f3594d71b8107fc3be868"],["/tags/虚拟手机号/index.html","1c6a686786232573dadfe1f736dc7f5c"],["/tags/补丁/index.html","56f226ddbc883904afe27c909bbfdc14"],["/tags/视频/index.html","3879f173ed2b461d44c5578a83591361"],["/tags/解析/index.html","c2fad8fe7d9f6652373a94fdf9201f75"],["/tags/订阅链接/index.html","3474aff85bcfb0bf55b0dd1ef4f516d6"],["/tags/记录/index.html","0cec50f993221fbf17cd7296588169c4"],["/tags/识图/index.html","fade255f926373ef3c3a79553e4fcbd4"],["/tags/语言/index.html","638f0e35eb42d08dc456e3796fc0f8bb"],["/tags/资源/index.html","be5fa86ba2d3daf8cf74578e98b175a6"],["/tags/资源管理器/index.html","7d72da1fb8366ac15e542964a57ac880"],["/tags/转移/index.html","b4543d14ab0c85e7a3b9915b3338faba"],["/tags/软件/index.html","9a46a371c8a6f549280c9fd5a94cd9df"],["/tags/轰炸/index.html","d8809d9f93f3c1090d92e73d87af51ae"],["/tags/迁移/index.html","e027469898c08fbe4b24ccb137bf6d8b"],["/tags/远程控制/index.html","812d72ae558438b7fc6d0cfcb86ed875"],["/tags/连接/index.html","84c276abeb44ff89d1ad957216d802c0"],["/tags/追踪/index.html","2527e3140357302f2240fb351f56fb78"],["/tags/速度/index.html","4617c89805547bf64dd381408ee3af72"],["/tags/邮箱/index.html","bbbc5da0e346201e26780fdfabe94aa7"],["/tags/酷炫/index.html","b8562e985db22c6fdb1e0ed06bff94f4"],["/tags/钓鱼/index.html","02fa9c46c460250a82970e4aac481c7f"],["/tags/镜像/index.html","5ae0f61a518bfa75a702f1114881d2d4"],["/tags/随机/index.html","9efe44c78a609cb0c1230693df71bc73"],["/tags/隐藏/index.html","7818319644de64da86da24388b72429f"],["/tags/面板/index.html","ba522837b1f895d50941401e3dd468a5"],["/tags/音乐/index.html","b42a6c4422113e48b794989b94a0aab8"],["/tags/高颜值/index.html","d245b8c8a9898d5ba336e749b4d1a647"],["/tags/魔改/index.html","2b78883917c87dfed1a002e8c5389c29"],["/tags/黑名单/index.html","857c608d48cdf582d690f511bca6079e"],["/urls/index.html","1454bcd71b35aea4b375fcac87109f76"],["/vps/index.html","b529948782764f7a8ff06d366b1b73ce"],["/支持/index.html","eca5d999c02163f85bca9317967930de"]];
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
