/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","a5de85969f5292778e2082e6e0725b1c"],["/2020/11/29/clash-windows/index.html","b32d3a9120037cc3bad03a6c26863e9f"],["/2020/11/30/websites2/index.html","f98c62f80684a2c41e4ff0e16f6bd1e3"],["/2020/12/04/iphone4s/index.html","aa40d3edb1a31c9fe6a8bb41fecc8c07"],["/2020/12/04/onenote/index.html","4d0e2dd2758ae78f74d73194f8e9bbc7"],["/2020/12/04/wesites1/index.html","1fde8b6e31cc406294bcd536a2e95a6c"],["/2020/12/06/nokia808/index.html","848ab69b603ad2745e4b4120b9bee1e0"],["/2020/12/07/ipad1/index.html","754bff57bb5f7920b83c2e8c3c3fb34d"],["/2020/12/18/freesubscribes/index.html","983259e94daf7a1b1844b6c4e2e51830"],["/2020/12/19/musics/index.html","e51a0d5298a9d66fc44213e07fb670d7"],["/2020/12/19/shadowrocket/index.html","c3b75ebba30f281675a6758884797d28"],["/2020/12/19/v2ray-windows/index.html","67707f5e9b66c34100e60f4b222647b7"],["/2020/12/19/v2rayng/index.html","040197774db21d11112140dff864b2cf"],["/2020/12/20/beoplay/index.html","ac6485eadb40a5e8b02595d76c0abaf6"],["/2020/12/20/订阅链接转换/index.html","954a2a1d4f2665b303ea2ec59cfc14f5"],["/2020/12/21/chrome浏览器下载提速/index.html","4d01a5fae9908c5d89e0f9721a42930f"],["/2020/12/21/免费128线程并发下载xdown/index.html","deec95ea25ec33e9533d24ef0a8e67b0"],["/2020/12/21/免费32线程下载软件ndm/index.html","8380e889ebde4d8e7895a9c3d9f74217"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","375c9253f69c5a026241998c0a585e4b"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","5a624a0d9130ad02b9c18ab0d81c1acb"],["/2020/12/21/广告怎么知道我在想什么/index.html","06a1d4ec1836602c76712d5ca4fca716"],["/2020/12/21/无名·引子（小说试写）/index.html","559ea0661ac11b907ae77c3a875c9cc5"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","7bc5677c51775f512b92d0fca924939e"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","99dacf8f659ffca47516e9b233aab40a"],["/2020/12/21/高速轻量下载器aria2/index.html","51e33e76b601a333879acaec1b927b96"],["/2020/12/22/2020-cee-roo/index.html","588e4932843544768fee40d9b01000d3"],["/2020/12/22/firefox插件、github、steam富强/index.html","13fdf2685e0616afd3795100611fe1ae"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","0c333e4375c0504b574c252d2494e430"],["/2020/12/26/python-day-1/index.html","3eef81e46e47a373cc1c74c67ce2d110"],["/2020/12/26/python-day-2/index.html","3745af739fbba2b0d1d3ff4ad964cd1b"],["/2020/12/26/度盘不限速下载方式一赏/index.html","02a7bbf49fd0250f0be66201f609be29"],["/2020/12/26/添加开机自启软件/index.html","8780ab130932cf9362dae3d40fa510b9"],["/2020/12/26/电脑端截图方式一赏/index.html","2a872f0fb4685b7364d1bc283450fd7d"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","b69770e19682719cabed74f3cbe846ab"],["/2020/12/27/最安全的浏览器tor/index.html","fb21fcac4efd61f700f5f35b1df83557"],["/2020/12/27/网易云刷等级和听歌数量/index.html","acce932426b3d5780cac81e9b5514c5f"],["/2020/12/28/freenom申请免费域名/index.html","0b3807c300f365787ddcf80f210d5631"],["/2020/12/31/机场/index.html","33c3fa5a428373510be38a4cbbcaf9c8"],["/2021/01/01/M1/index.html","004b62a91487fa401bcbb9b693eaf063"],["/2021/01/01/compress/index.html","f3082d66e11b76d3ce50d38ac122f599"],["/2021/01/01/infinityfree/index.html","efbfce277d8282f9f8ee65a025ae81ea"],["/2021/01/01/硬核翻墙/index.html","1fb4e4f054474a2fe15e4f7ce7fb163f"],["/2021/01/02/qq/index.html","c6f444f21526f52732bbca1c4ac9687f"],["/2021/01/03/netch/index.html","a9a49be7160519e603159bf070ef6da5"],["/2021/01/03/waifu2x/index.html","3c5f7523846ff8fd037a395becb7f894"],["/2021/01/04/ads/index.html","48a9e47afe4979ccb5b6a6ec081b8da4"],["/2021/01/04/games/index.html","69afbf82b1394bb0ee3ea7185cfe68c4"],["/2021/01/04/heroku/index.html","2655b6f1e44fdcaa4ce0cd97cb4cdf8b"],["/2021/01/06/movies/index.html","641e834fecd6779a3dbf6d18252af31c"],["/2021/01/07/google2020/index.html","51895c8d8126d291e38a0f2d9f4292e7"],["/2021/01/07/lucky/index.html","45597e61eebdc5359ea16984e5fe9c21"],["/2021/01/07/spotify/index.html","f8c6bbeae023e458001565a0158a8f8b"],["/2021/01/07/thunder/index.html","2209d2dc443575b720e43669535d1f96"],["/2021/01/08/adguardhome/index.html","fd5c76f8f5774f14fc5d9dd4b86491ce"],["/2021/01/10/IBM/index.html","2e7469aacdff82aecb3f0844420ab275"],["/2021/01/10/potplayer/index.html","6561fa82a934e91c5245791f040f9e6f"],["/2021/01/10/sakuraanime/index.html","ff28886aebdcb4693d96113d25cab698"],["/2021/01/10/美剧星球/index.html","8c98843a608166bc7694214b9cde9276"],["/2021/01/12/telegraph/index.html","3ab5900a02a03f40a6432c120432b295"],["/2021/01/14/comics/index.html","6f72e19ebbddc8358eda0b00366b5998"],["/2021/01/14/ftp/index.html","7934776555c0896c93706bfe68a2daa8"],["/2021/01/14/oraclecloud/index.html","2a47ae5de498974c0c09239dc0a18b0e"],["/2021/01/14/porkbun/index.html","a5f929b57c96b63ca00046c6e3f2d94e"],["/2021/01/14/powertoys/index.html","2080a6118b2cf78d7096d156e4c32f80"],["/2021/01/14/taptap/index.html","b9f71bdf44b97c534d8ddd3ad2298684"],["/2021/01/14/ubuntuvsftp/index.html","7cf903f7f84340b112ce758634e06a59"],["/2021/01/14/小说/index.html","e65977cce3ebfd6ab02735d0f73e10fe"],["/2021/01/15/freeproxies/index.html","38cbac37200a7b41b2c58f86399d9e22"],["/2021/01/15/incaseformat/index.html","b5b55675e5f208e454ffc5457c3defd6"],["/2021/01/16/euserv/index.html","a84a84467e3da6508f88da0e29c5f504"],["/2021/01/16/winxray/index.html","6757eb3a63618796a410c4a5dd76f74e"],["/2021/01/18/qqreadhistory/index.html","2da48d2f5b20a438d09110cc7c5b5fb9"],["/2021/01/18/qqrevoke/index.html","6f38cced74f04ed192be04e6def5466d"],["/2021/01/19/freevpn/index.html","89b50c3e9a4da08d2ac52fadf0ad410e"],["/2021/01/20/browsertrack/index.html","532206308b270626203265b7ef6d2ea0"],["/2021/01/20/v2ui/index.html","fbdf26ca572c0e2520af7ac2a0b29f26"],["/2021/01/21/failedtoconnect/index.html","ddd14a1e23376933b7837b5da0099cd5"],["/2021/01/21/gitcalendar/index.html","236cf9a365503a6dbdff578cf514101d"],["/2021/01/21/markdownformat/index.html","a28d8d3aa9898d9bc83961fd3b6f3e6f"],["/2021/01/21/markdowntable/index.html","22b480e63e527a2b57aa27e2771f4784"],["/2021/01/21/vercel/index.html","d0d4fa4099d6b6a25449c4e68a26ded2"],["/2021/01/22/hardware/index.html","97a0da9e1bb2a3d2133ab1d014262e66"],["/2021/01/22/muviz/index.html","0f7626f60631d99bbb6d6b989bf92226"],["/2021/01/22/randomapi/index.html","08a2498b843a5b23aac03caf3f9eae1c"],["/2021/01/22/searchimages/index.html","f23985b9fcf3e91f02ddeaaa9bbb2b3d"],["/2021/01/23/RX文件管理器/index.html","565768c3f7f187c7e9ec2ba73d8df0c7"],["/2021/01/23/chromeflag/index.html","02fddb9eb3ef05e534e3624822601a3c"],["/2021/01/23/qttabbar/index.html","5da632f4c67a719122620dd6b54f7885"],["/2021/01/24/githubspeedup/index.html","16f47ce2a92104936bbb45a8e390b261"],["/2021/01/24/jsdelivr/index.html","81baf64f2c7390e56868da25b4e126d9"],["/2021/01/25/note/index.html","28fe21a8ada9ce9b107de33f65747e93"],["/2021/01/25/soul/index.html","a7cc44154f7d95bdb7c9db87c4a34c85"],["/2021/01/26/herokuxray/index.html","55d5fa8437e393850c3505c77eb62736"],["/2021/01/27/proxypool/index.html","93941d4c7d6a0570db16ec6bda494a08"],["/2021/01/27/tracker/index.html","046a73ebba03ddbae35c74a3e205a732"],["/2021/01/30/pandownphp/index.html","b4cc669397199a299841ef1a516d1e47"],["/2021/01/31/newgroup/index.html","5778348436ee7ed649faf6b4351acb32"],["/2021/02/01/clashlanguage/index.html","0727ae8f6601ecdf65b948168a4e7a0c"],["/2021/02/01/encrypt/index.html","c174ed49280ab1b0ddfa5f666fbfb1b3"],["/2021/02/01/footermotion/index.html","2c809c34a7c6b2376cd7e6770440a1a4"],["/2021/02/01/gitter/index.html","521fc51c8e7dd7fe71e0c398ad0c76fc"],["/2021/02/01/pixivtop50/index.html","f38abf24b1fc4c59425e48394aa8e93d"],["/2021/02/01/scrollbar/index.html","9066397a87161784466498eb845d62b4"],["/2021/02/02/clover/index.html","9c9ae440e96c20516323a3e7abe3bf0a"],["/2021/02/02/maya/index.html","fb012cc83944c044849ed9dc3684d40b"],["/2021/02/02/speedcontroller/index.html","d84afebfc5b5387ade1e24c85f741f8f"],["/2021/02/02/yesmusicplayer/index.html","225e27ccb413f6dc17018c52170fc28c"],["/2021/02/03/lenovoonelite/index.html","37bfaa9af4e7cd96a14f039ca63c65c9"],["/2021/02/03/skipads/index.html","60f624c4a9a4746a4eefdf09a66c8a99"],["/2021/02/04/picseed/index.html","5c343c613f72e4703e912d0199cdb800"],["/2021/02/04/renren/index.html","b214f5924e015766261c3df2bd45f1b8"],["/2021/02/04/serverstress/index.html","f1950f327b77610a81bd955965f07686"],["/2021/02/04/wikipediazh/index.html","ab2626d934bfe3766f7d25b08ef1f86f"],["/2021/02/05/googlevoice/index.html","559d9e90ec216f791c7f70968c3bdf87"],["/2021/02/06/clashconnection/index.html","b657d3fba6d99ad746bdc2e4b0e02258"],["/2021/02/06/gvtransfer/index.html","7499bd6e1e346d4b15857d3c9daf13cd"],["/2021/02/06/todesk/index.html","e93db3247ceec8f019d18b9770aa8dc0"],["/2021/02/06/vpnblacklist/index.html","9a0b9687d708c0846a9a9c3ca2d00da7"],["/2021/02/07/mklink/index.html","9b2e75ec249e252a5025c0df7bb60550"],["/2021/02/07/speedtest/index.html","bb2602d4fae03c553df23fdab54cac30"],["/2021/02/07/translate/index.html","9ad4b2cecf69c282d36ab13a447bce77"],["/2021/02/08/ewomail/index.html","1a59a555bdafb3d874b440a517515a22"],["/2021/02/10/officee5/index.html","a6cf4025759d4f272f30932f0b3b2a71"],["/2021/02/10/raidrive/index.html","13eb1eb344c6ac9bc61f7ffc3c5b6ad9"],["/2021/02/13/e5sub/index.html","af92cce6021eac52f63a383fb0f06a70"],["/2021/02/14/screen/index.html","00a3f8767d01a2633690b24698094aa6"],["/2021/02/15/clashtun/index.html","b6a460ef9c75f42fe8aa066e9992f250"],["/2021/02/15/messageboom/index.html","c232ef426db860fec25826a2d9f64d0f"],["/2021/02/15/oneindex/index.html","2c46464264a931c5c2c497450903f978"],["/2021/02/16/govsites/index.html","154b26af9168bb56fd656b67e75bb74d"],["/2021/02/17/hexototypecho/index.html","13171ef529f7428629ce13674bad0da5"],["/2021/02/19/fiddler/index.html","33ed15544dbe3ee338e3da1184129b5e"],["/2021/02/22/potplayerset/index.html","d4dcabe043a6ee14e3e6f86114e555f8"],["/2021/02/22/studyresource/index.html","8828f8a5f974a8fbb179bae31b9fe0c5"],["/2021/02/22/telegram/index.html","d06ce27b8839fa53e6c0e7c911ea3398"],["/2021/02/22/videos/index.html","64cefb41b967d9c15239ec56ae95da87"],["/2021/02/24/mtproxy/index.html","6a998f61fb68218ed575854153e97063"],["/2021/03/10/catchcat/index.html","9840a8e6d86f531249e1f83fa62cba97"],["/2021/03/10/neteasemusic/index.html","85fcddc26800629bbf75b390dc094254"],["/2021/03/10/surfboard/index.html","6cf24df6b7d5bf0262a40ad17d9647db"],["/2021/03/11/vpnandjc/index.html","e46b63bc12b0fc12875603e6a9b2af48"],["/404.html","b8de3898566398de8f1c98fe508bf4e6"],["/archives/2020/11/index.html","e659493575677f8b6d05697039692a8f"],["/archives/2020/12/index.html","c78b3db7cc683529990c56e746d8929d"],["/archives/2020/12/page/2/index.html","0a21f41704eda2f7af01a02e31c9e585"],["/archives/2020/12/page/3/index.html","ba9734f28c5e7e16f40c65c587223809"],["/archives/2020/index.html","d8fd63246733b7243240c6c59d0c007c"],["/archives/2020/page/2/index.html","2681db56e100b3575f557f5feec00f0f"],["/archives/2020/page/3/index.html","73e29e596805fc91b5caf9bdf2ac823e"],["/archives/2021/01/index.html","53d159b242c08c79d975e1810469beda"],["/archives/2021/01/page/2/index.html","c1d1f5900df7a706b2947bd4bbbf76cd"],["/archives/2021/01/page/3/index.html","227954d129dcbe42bd5cfe602965f769"],["/archives/2021/01/page/4/index.html","3566b77af099b77f8a1e647bb3387366"],["/archives/2021/02/index.html","955d1c7b0c1182894e4d228645586a69"],["/archives/2021/02/page/2/index.html","f84e9d3a99c800e83d706f962c860942"],["/archives/2021/02/page/3/index.html","26b7f9bb7668d49ff97db2dd2b1a507e"],["/archives/2021/03/index.html","e090c55bc7c59ed4a32647f21caa50ee"],["/archives/2021/index.html","a6c6939be2ab89519f72b25b71eb5918"],["/archives/2021/page/2/index.html","70d0f8d2b471cd38b221dd096d2294c5"],["/archives/2021/page/3/index.html","bb44d88c9d2bb3cd5ce0b40203ee1093"],["/archives/2021/page/4/index.html","a819f1a3da67c3b0a219578dc365edb7"],["/archives/2021/page/5/index.html","0cb538c2ba2eb0c84215ac253d833c21"],["/archives/2021/page/6/index.html","fe2f4c531dd8085c112c407977355ec5"],["/archives/2021/page/7/index.html","ed747e8f9a26ea349a968623581b79c1"],["/archives/index.html","706564ca4fc8fdecb7585a5b5ad0c82f"],["/archives/page/10/index.html","2fe1eadec60040c0f058d0ca5dfabae3"],["/archives/page/2/index.html","fdb2a7238631684cea41473283e3c7cc"],["/archives/page/3/index.html","44d87e065009b275884e471d23b5956d"],["/archives/page/4/index.html","744aecb993557412a99a60e0ef43b79c"],["/archives/page/5/index.html","4077d2898b434f77f71dd4b919640144"],["/archives/page/6/index.html","95d9ca5cafe906d210dea307b6bfe2f2"],["/archives/page/7/index.html","42abd42eadab75e2e0f0dc4d17a0b6f0"],["/archives/page/8/index.html","05bd13867cbd17f328b3e2deed5290d0"],["/archives/page/9/index.html","a773956f551842f807eb404abe4c2b4c"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","140dcd77a56c79d9eb0468ec0df6b3cd"],["/catchcathard/index.html","e9291c58bce68730cd21cc4e2b0a474b"],["/catchcatimpossible/index.html","ce8ac7a16e2b7990d9e0aeb78de4c0db"],["/catchcatmid/index.html","dc073d912aef351b621ce171416ebd82"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/categories/VPN/index.html","ef9b274f642414232b2f3c8026fd8daa"],["/categories/VPS/index.html","15f39aef4f4e93d5192c74aed5629353"],["/categories/index.html","035e73a7cb427bc38a9f6d870d504079"],["/categories/下载/index.html","e7015ba93627abb5acd9a663a063231a"],["/categories/安全/index.html","b1eeb2380da0c15ba0fe78b824cd587f"],["/categories/建站/index.html","9ba3abef9f952be3a273f844ab8eb29e"],["/categories/杂/index.html","a7bc6a04b644bb96fad925f6ce5a7284"],["/categories/杂/page/2/index.html","facb6ee7f56cedd10becc27e6b0a13ff"],["/categories/测评/index.html","dcaf2e6f7685f46052c51b707bb86726"],["/categories/科学上网/index.html","de942a385a05cb32d2d21cb56e9bb08f"],["/categories/科学上网/page/2/index.html","7213487d519edef56b1d34e375fe0ee4"],["/categories/编程/index.html","b505a2287815b536a17bc8c8c7d3955c"],["/categories/网站/index.html","266100a608e986dad1b7d2037c464823"],["/categories/网站/page/2/index.html","081598cbe3efac5e0411950915f6c93c"],["/categories/软件/index.html","17db5f19553a7bffbe822ca1db9868bc"],["/categories/软件/page/2/index.html","0df1be2c6cde7011e8d486ff91a0561c"],["/categories/软件/page/3/index.html","dda8a74f221d71b1db4aeeab3889809c"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","76d85c7b46f4eabedfe1759b646776e7"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","bf1c4e8a7a4994eef03f62e2d6390cfa"],["/ios/index.html","d77d08096d4e39414a1eec679ac887bd"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","6eb55b39577a80af4ffe2372e114ba16"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","b716a82e6cf86dd6db1ad4da05d20ae6"],["/page/2/index.html","a7327c4af0b0fc4ca8fdcff3b0ba6960"],["/page/3/index.html","d5354e969aaefef46f5697386873047b"],["/page/4/index.html","abb9a453160737c32f468b887e1d763d"],["/page/5/index.html","12bb0c60148dc8194792a20d97019c19"],["/page/6/index.html","f03d34520d7db52ea6c31094b5c07b86"],["/page/7/index.html","f28b64a23da9aff9d3841a319c2b08cc"],["/page/8/index.html","eb04c8f62d9a48b4703d2c4ea70a9d02"],["/page/9/index.html","c80c6105a8c11be1b8e26885267bad32"],["/payment/index.html","cc50068e7a602c459b04a6d384cd86b2"],["/privacy-policy/index.html","be6b4f00bf023b8fef3f92b743e46875"],["/rss2.xml","f171be6164ee3b19610aad41aa29b6dd"],["/search.xml","7be9f3621b9b2ebcae9346d8e75824d2"],["/sitemap.xml","63bfb68f20e39577552d070dbad8101e"],["/sw-register.js","0539379f5ebe62cde5e6954f2f166180"],["/tags/5t/index.html","db1e25ae3db0aef243582fb23b4a29f4"],["/tags/Clash/index.html","000afd051ad20d25323743a3e0128488"],["/tags/Clover/index.html","8dfb1e4483b1e32620b41a2e35fab6d0"],["/tags/E5/index.html","5e6216a217aae201eb079f6ff9a22b95"],["/tags/FTP/index.html","e6d3ba32fa3afb4c4b8109de6e82e22b"],["/tags/GitHub/index.html","645b2082e70a5217584d883ca386fa02"],["/tags/Heroku/index.html","b38969a8f494b080ca853d2abca342e5"],["/tags/Hexo/index.html","2bb93f45a73ea50493c00cc2769bcf3d"],["/tags/Lenovo/index.html","6c9aedc3981e636da8f2868c1251c678"],["/tags/Oneindex/index.html","8e90c7596dc22500aa58adbdc4c8a7b8"],["/tags/QQ/index.html","afceec95eb105e5338bff199b3a6d111"],["/tags/QTTabbar/index.html","bd4640a14e8b5bbd4e19bca26ee0524e"],["/tags/RX文件管理器/index.html","e845cfe0e0ca6b540151210de007e0ca"],["/tags/Todesk/index.html","91eba740ebc626f7b6b1f06e10132351"],["/tags/Vercel/index.html","23f898cbb78c28d966fd7259e58a4ded"],["/tags/ads/index.html","5b4eb092db8c4d8dc4f0b22cd6523b36"],["/tags/api/index.html","3761964991c90f3816eab8742cddaa28"],["/tags/app/index.html","e929d08a81841e0c0ac0fbd409e61dcd"],["/tags/blacklist/index.html","ed2b8f7239697e54089eca7684794f1b"],["/tags/butterfly/index.html","91d34e405f18da802018232a50d148ed"],["/tags/chrome/index.html","68bce3a13274e175ff64cb8958401fb0"],["/tags/cloudflare/index.html","f6bc76c35adc979904f17a11ac024fbb"],["/tags/cmd/index.html","6164705123126971e55d1450439a5462"],["/tags/c盘/index.html","9bcfc5266621d0d98820bec55be80d10"],["/tags/email/index.html","69c4914ab13f80271a2990293034b151"],["/tags/ewomail/index.html","6fda92f24c842cd53b1b3b139569ad72"],["/tags/fiddler/index.html","7b6e95de2b8715485da0b4f9149c8a54"],["/tags/flags/index.html","51068513909af53bcc5b8a5cca358465"],["/tags/footer，页脚/index.html","829b47242648a4a422fc93d62a78e3d1"],["/tags/galgame/index.html","79e1929a73f6baf3ead599ee1a50e367"],["/tags/git/index.html","30526ecd524c5210c7c2e04942c69045"],["/tags/gitcalendar/index.html","394f1f6246a60075d500ade394aa6ddd"],["/tags/google-voice/index.html","06ead5cbcce0bd3f5729bf82fc394e5d"],["/tags/gv/index.html","be59ec5a17738953144017554701b99c"],["/tags/html/index.html","c02dba418c44d72828a6a0abdc603a8c"],["/tags/index-1.html","71f19ebd0b8fdd28921b2202ccb614ed"],["/tags/index.html","9548ac9114b6dbfa71bb95911e44e733"],["/tags/js/index.html","71e8f03d63130fc97a4576a3c63a6570"],["/tags/jsdelivr/index.html","905b8c922a86cd7c91a8ecb8dd5a6f3a"],["/tags/linux/index.html","a6e8f3addd6c8921c750c0b460daac72"],["/tags/madVR/index.html","7ba5b6ce3a30dd6fa469934d1a299f68"],["/tags/markdown/index.html","efb5fb9d11b0077a5ead8f64d14358f3"],["/tags/maya/index.html","401e0c3d9d3349de16c4796239181627"],["/tags/mklink/index.html","50899a16128954bc91edd954acd95b7b"],["/tags/office-e5/index.html","5fbb8ab5202d87d001164a242b167e77"],["/tags/onedrive/index.html","dece76f4bf97fada8ee5415534c2d2f6"],["/tags/picGO/index.html","5de174c67588a6c9c65b6b9e90ff58ff"],["/tags/pixiv/index.html","73d743697ff059d96ce35b1d10c378f1"],["/tags/potplayer/index.html","d240763b7a4e43c4fbce066aa01e2f31"],["/tags/proxypool/index.html","7a8838fb38968d0a683ad4491f98a2b0"],["/tags/qbitorrent/index.html","23bed5e73148e148f74f707dc7107536"],["/tags/raidrive/index.html","df0bc7e2e1e3be4e156ac3989e2e4a11"],["/tags/screen/index.html","b70db2f47e3f1380ea0a69c1922a4a9e"],["/tags/speedtest/index.html","8762bf2ffaf8f233f680aea86917882d"],["/tags/ss/index.html","ca812f5dd2a9fc633c7647a7ff09cc23"],["/tags/ssr/index.html","2076f41a80389fd34f1823c82a11ae8c"],["/tags/surfboard/index.html","076181d506ff679296e42c09424e152f"],["/tags/tap/index.html","8b3e6ff1071cd16b877171c6c603de86"],["/tags/telegram/index.html","67211b3695535c4d4c8fcca748cd039a"],["/tags/telegram代理/index.html","33c1b710f21a0016048794c369256dc7"],["/tags/tg/index.html","d8ef78bbe3b734dc3d361e2a52178cd8"],["/tags/tg代理/index.html","a09335ce54dc9206175fbaaa47947acd"],["/tags/top50/index.html","026f4926ccade6280103c6cdd1839951"],["/tags/tracker/index.html","ffd112273a1cc991963faeb8171a5d47"],["/tags/translate/index.html","d3ae46851dca7184eded701e81df7023"],["/tags/translater/index.html","40836904534315ab9884b588a0c19760"],["/tags/tun/index.html","ceca951b89ea40420d61b10321791124"],["/tags/typecho/index.html","d188f1480841ec340859b5c14dc4f6f1"],["/tags/v2ray/index.html","7a57975d3617a1d563a0f7016f878e69"],["/tags/vpn/index.html","6c2ad735245455fc103f6d0d6eadf0e0"],["/tags/vps/index.html","74b6afbe4b585889a88f1eba95109217"],["/tags/windows/index.html","670724f2234c67e6cd8f1459c1c885ee"],["/tags/windows端/index.html","d1e2b9a0ac7a84ad19157b7d5004279f"],["/tags/xray/index.html","8fd732b37a311239cfac136da6a8d58c"],["/tags/下载/index.html","9d8b07c950c62195c89f809a5c01779d"],["/tags/不限速/index.html","653928fd2f79e4e4d49863919edcfb09"],["/tags/个人网盘/index.html","761452290ef7bd874f3b04702aae9188"],["/tags/主题/index.html","cbfb621418ba24de9f4e84ee757e6051"],["/tags/云便签/index.html","174f444e8be52fd47a6edda36b7e79dd"],["/tags/云盘/index.html","37e69ad070ecf53619592add19188aef"],["/tags/人人/index.html","40b3a528ea4c2666eed112ad2227a107"],["/tags/代理/index.html","57135244ee9c51fbb875dd4648a3647c"],["/tags/代码/index.html","962b7e3335662d8522ef9b4a93e9bfbc"],["/tags/优选IP/index.html","9d6145453c1f2cbcf7a7ae6153821660"],["/tags/便签/index.html","2a3b7b8321ac595674c18fa8f85e90f8"],["/tags/保号/index.html","7b16f9a21ed0fa459a4d2a7512df6483"],["/tags/免费/index.html","7078174bef4cd712d17f3f72d924c69d"],["/tags/免费节点/index.html","49b08bd90af98a8e93e06c74e7221956"],["/tags/加密/index.html","222ec4bc6e49abdba33fcb2ad12baae3"],["/tags/动画/index.html","77a7cf59b0142ce5761d862b82c7c10f"],["/tags/博客/index.html","be41614ba974047f5e0c3d699d7b35c5"],["/tags/历史记录/index.html","e797765b3ffeaec43a8d02161a29d12d"],["/tags/压力/index.html","120843b1260d5fcaae5a1774966db086"],["/tags/压缩包/index.html","445e84c6f338359bcaf5ea8b3e3bfc95"],["/tags/反代/index.html","b2d529fe239d6f368818db9f657ae518"],["/tags/可视化/index.html","e66e093e7da7e1a5b37c8d2891facd57"],["/tags/命令/index.html","2bbf691b5b08a9a7173c8ad019ace1b6"],["/tags/国家/index.html","8642724165ff183ba8b046df8a0ae359"],["/tags/图床/index.html","39fcade01b00b55a6f12cc4c66a636df"],["/tags/图片/index.html","299085b6b91b0f354b01671e5b5e8c28"],["/tags/域名/index.html","c8e8b5170be184475fed650be2b63252"],["/tags/多标签/index.html","ae0fb9ae349fb4e815823b36152bd5f1"],["/tags/存储/index.html","b45a24cbd3ef9183ff18df9bd4c7b692"],["/tags/学习/index.html","e033cec7e6b70c4296453807a1662320"],["/tags/安全/index.html","c3725507f62380c9e1422104cd389416"],["/tags/安卓/index.html","a475623bc413b5d0d14561a40d03ecdb"],["/tags/宝塔/index.html","17e8c65c93605b685f3578f59eb350cc"],["/tags/小游戏/index.html","474686573a9977c7cab440edcc8b1b20"],["/tags/广告/index.html","e85b82ac48192f37772c79d0214f2458"],["/tags/建站/index.html","2a44243be69e8dd51ed7b5eba85dde97"],["/tags/影视/index.html","78760d40303f6c06a932862c803f2a13"],["/tags/快速启动/index.html","06549012c06ac0b290b32e5c37e8dd93"],["/tags/手机/index.html","3396246c3a5a94153cddfb8edfc7aef3"],["/tags/托管/index.html","856a9f83bcaa645bba7cffe33c42de24"],["/tags/抓包/index.html","9f92785e96881ba75e94605040928c18"],["/tags/抓取/index.html","d9a477daccead8e6864889a0e155319b"],["/tags/投屏/index.html","6d735ce926762c0291e9c4123a90d890"],["/tags/拓展功能/index.html","f5d0ec1d608fda6f3cf2c6022a03d4ec"],["/tags/挂载/index.html","f3c0c1164d1dc4a1685c22453df98dc6"],["/tags/指纹/index.html","53c6ae75a6bef351cdb984cc5e27148a"],["/tags/接口/index.html","95cbd2fa14b4c2ccf3d9d08ff685f43f"],["/tags/提取图片/index.html","6cdd86b5412c9046af83482cbd3ef41d"],["/tags/插件/index.html","7ee7275d598826392264a1ec8dd670c6"],["/tags/搜图/index.html","0ca99faf29eb88ae308da7385145d520"],["/tags/搭建/index.html","9d77109152cf91d2353a33a195deb4b0"],["/tags/撤回/index.html","deadf6a8d25f24b95e0c462ece29e6ab"],["/tags/播放器/index.html","65f2cb35f546ce0b7e2ea6dbe0b5ff7a"],["/tags/政府网站/index.html","edcd0a35972f9b0dcf87f9136517a7f7"],["/tags/效率/index.html","b5c0cf2ef68549c1f39adf85f6fb01fa"],["/tags/日历/index.html","94ba9bb02e2d63b6942e3ca1f5ed9987"],["/tags/服务器/index.html","73db4c1baa4684e614bf4af8fbe1f887"],["/tags/机场/index.html","7887fdf2cc805dcbeb8f9a130a340702"],["/tags/桌面/index.html","6112cb59471f9b5b29b8a51a408d310b"],["/tags/梯子/index.html","7914ee4c0f1ab9f638b1ea5f51fdc4fa"],["/tags/检测工具/index.html","a4620c0ae7cc98741f576cbfcae4136f"],["/tags/汉化/index.html","8f656f7ac2a7fca683024219cf56df53"],["/tags/测压/index.html","72de3e5864abfb39b70eab6f9afc6506"],["/tags/测速/index.html","10691534ffeb7df8609261cfcb4a572d"],["/tags/浏览器/index.html","944f56e15d5ed92e00c851d18aa86883"],["/tags/清理/index.html","6a5ae9ffad95ee90ce4d2a1a2ad318e9"],["/tags/滚动条/index.html","f1ee7b28d09618c2eb10653106eb3734"],["/tags/灰色歌曲/index.html","d6889399746ff7e922e2c7e24713d180"],["/tags/电影/index.html","c8b1eae1c5efc4abb98d45b507d52a40"],["/tags/电视剧/index.html","c16b240915ac4408127ff274219f1659"],["/tags/白嫖/index.html","eeb15dd90d878d0809f777d1ebf961f9"],["/tags/百度/index.html","a1248e42b9b5f4afac571f4cc9a7f243"],["/tags/百度云盘/index.html","ff5f580d7a6c8e2dcb839f5a346aa84a"],["/tags/百科/index.html","110b4766b75dd4db856272a70dde1b5e"],["/tags/短信/index.html","9945fb45e3a6e89b031c95554b25a9d7"],["/tags/硬件/index.html","fc70fb1db3d9f3df93caba73c3f1aaaa"],["/tags/科学上网/index.html","068546352d68b9facca3ec26f6ea5183"],["/tags/空间/index.html","9b65550c4304edbce6bb50a4e86d03e1"],["/tags/笔记/index.html","eb1dbaa7d5cd493bb839a9e2efd21d34"],["/tags/简洁/index.html","580bdd0b22a9f866efe5c006e8f88f66"],["/tags/简约/index.html","7286362f6483acabda8d271467ec5095"],["/tags/维基/index.html","74013c7f92808825d9471afc3766d2c9"],["/tags/网易云/index.html","17c81650d223173a486abbf871433df1"],["/tags/网盘/index.html","a269caa8d430f77bf23ca0003d2c7987"],["/tags/网站/index.html","f54f7eaf86627eada40f23ecc3b634f7"],["/tags/网络/index.html","01994e98d2547738020ae07ff24f6343"],["/tags/美化/index.html","41a25c6e364b34c4a36ca221a688f232"],["/tags/翻墙/index.html","95cf31e0facbb535fd4a29f409f4e76c"],["/tags/翻译/index.html","c8ec471ba765fddcbe6446f3db1e8cee"],["/tags/翻译器/index.html","170f92aef6e006b452076084d6cd2e1a"],["/tags/聊天/index.html","2f4ff8967c7085897ad78b9aa1b6ff7a"],["/tags/聊天室/index.html","d15f94f1cb0ee48d90d3f966921b217a"],["/tags/联想/index.html","d357f60ab56f08cd734a5e4f199167b0"],["/tags/节点/index.html","473d2a522a4e6e293296b39e9b72ea5e"],["/tags/虚拟手机号/index.html","24a595d8165784f7028eb91f8e62eb33"],["/tags/补丁/index.html","68589a55517f311873b24b5c28e2908d"],["/tags/视频/index.html","a86876837af70045c93b4fe257cf59cb"],["/tags/解析/index.html","2adda9325f64c0fdb578f8e6a1f3d710"],["/tags/订阅链接/index.html","4ef13434cd49d69a2d8663064013b5c3"],["/tags/记录/index.html","3ce30586b1c87668c02ca0d1ee541660"],["/tags/识图/index.html","196f163fb138697af821f52da7819737"],["/tags/语言/index.html","4cd18f47b6567b73237c1934bf494499"],["/tags/资源/index.html","f4b98ccfc7e0705becb918c66e243075"],["/tags/资源管理器/index.html","42c77efba744e0cf87c630905036cf8c"],["/tags/转移/index.html","2d37f2878eec739436a8462f2b2b6c61"],["/tags/软件/index.html","d86276fe8cd487e9d732fd6296364b09"],["/tags/轰炸/index.html","5054609fb015d56cc8303af2162396d6"],["/tags/迁移/index.html","8576233f6dc9edff875fbdb600be10bb"],["/tags/远程控制/index.html","627910717cd0d542dbc98371ce9eb746"],["/tags/连接/index.html","bb8aa296720a6b860811680d78b1c12f"],["/tags/追踪/index.html","3df34dfd224c3682dbe2bce9d0a49dd1"],["/tags/速度/index.html","50670e1556015880b39f274e0eab8254"],["/tags/邮箱/index.html","3c082d7297a9c0b2364bd1859642f40b"],["/tags/酷炫/index.html","a046ae600fef3c5ff34a11633ba3ab38"],["/tags/钓鱼/index.html","dcf5670a1d7ecde8b043015445801c2a"],["/tags/镜像/index.html","94f54873b3af7758ffb160afda10de72"],["/tags/随机/index.html","3a5ddb54f3faf4cedb2ecfaff1013e24"],["/tags/隐藏/index.html","56816998677542d4ee9e9e9272f0508a"],["/tags/面板/index.html","e29adc19c291f699c29ac096c10927ba"],["/tags/音乐/index.html","45fd39a3755a9d82b765bf3ce553a2f2"],["/tags/高颜值/index.html","12f703814d4a76a68219980c7aeac205"],["/tags/魔改/index.html","7e1342f3f495b653b8a1b12cb8141262"],["/tags/黑名单/index.html","d53c01dff24d77b5a0cc00ffdb9ead90"],["/urls/index.html","322db38a9864d9a6c6669b9b55da3354"],["/vps/index.html","122c2954afbfd7db7af4296e2ac5a524"],["/支持/index.html","1c24c98e6c3cd35feb68d4d0b7d8a14b"]];
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
