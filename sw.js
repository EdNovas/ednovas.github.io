/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","a5de85969f5292778e2082e6e0725b1c"],["/2020/11/29/clash-windows/index.html","b32d3a9120037cc3bad03a6c26863e9f"],["/2020/11/30/websites2/index.html","f98c62f80684a2c41e4ff0e16f6bd1e3"],["/2020/12/04/iphone4s/index.html","aa40d3edb1a31c9fe6a8bb41fecc8c07"],["/2020/12/04/onenote/index.html","4d0e2dd2758ae78f74d73194f8e9bbc7"],["/2020/12/04/wesites1/index.html","1fde8b6e31cc406294bcd536a2e95a6c"],["/2020/12/06/nokia808/index.html","848ab69b603ad2745e4b4120b9bee1e0"],["/2020/12/07/ipad1/index.html","754bff57bb5f7920b83c2e8c3c3fb34d"],["/2020/12/18/freesubscribes/index.html","983259e94daf7a1b1844b6c4e2e51830"],["/2020/12/19/musics/index.html","e51a0d5298a9d66fc44213e07fb670d7"],["/2020/12/19/shadowrocket/index.html","c3b75ebba30f281675a6758884797d28"],["/2020/12/19/v2ray-windows/index.html","67707f5e9b66c34100e60f4b222647b7"],["/2020/12/19/v2rayng/index.html","040197774db21d11112140dff864b2cf"],["/2020/12/20/beoplay/index.html","ac6485eadb40a5e8b02595d76c0abaf6"],["/2020/12/20/订阅链接转换/index.html","954a2a1d4f2665b303ea2ec59cfc14f5"],["/2020/12/21/chrome浏览器下载提速/index.html","4d01a5fae9908c5d89e0f9721a42930f"],["/2020/12/21/免费128线程并发下载xdown/index.html","deec95ea25ec33e9533d24ef0a8e67b0"],["/2020/12/21/免费32线程下载软件ndm/index.html","8380e889ebde4d8e7895a9c3d9f74217"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","375c9253f69c5a026241998c0a585e4b"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","5a624a0d9130ad02b9c18ab0d81c1acb"],["/2020/12/21/广告怎么知道我在想什么/index.html","06a1d4ec1836602c76712d5ca4fca716"],["/2020/12/21/无名·引子（小说试写）/index.html","559ea0661ac11b907ae77c3a875c9cc5"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","7bc5677c51775f512b92d0fca924939e"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","99dacf8f659ffca47516e9b233aab40a"],["/2020/12/21/高速轻量下载器aria2/index.html","51e33e76b601a333879acaec1b927b96"],["/2020/12/22/2020-cee-roo/index.html","588e4932843544768fee40d9b01000d3"],["/2020/12/22/firefox插件、github、steam富强/index.html","13fdf2685e0616afd3795100611fe1ae"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","0c333e4375c0504b574c252d2494e430"],["/2020/12/26/python-day-1/index.html","3eef81e46e47a373cc1c74c67ce2d110"],["/2020/12/26/python-day-2/index.html","3745af739fbba2b0d1d3ff4ad964cd1b"],["/2020/12/26/度盘不限速下载方式一赏/index.html","02a7bbf49fd0250f0be66201f609be29"],["/2020/12/26/添加开机自启软件/index.html","8780ab130932cf9362dae3d40fa510b9"],["/2020/12/26/电脑端截图方式一赏/index.html","2a872f0fb4685b7364d1bc283450fd7d"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","b69770e19682719cabed74f3cbe846ab"],["/2020/12/27/最安全的浏览器tor/index.html","fb21fcac4efd61f700f5f35b1df83557"],["/2020/12/27/网易云刷等级和听歌数量/index.html","acce932426b3d5780cac81e9b5514c5f"],["/2020/12/28/freenom申请免费域名/index.html","0b3807c300f365787ddcf80f210d5631"],["/2020/12/31/机场/index.html","33c3fa5a428373510be38a4cbbcaf9c8"],["/2021/01/01/M1/index.html","004b62a91487fa401bcbb9b693eaf063"],["/2021/01/01/compress/index.html","f3082d66e11b76d3ce50d38ac122f599"],["/2021/01/01/infinityfree/index.html","efbfce277d8282f9f8ee65a025ae81ea"],["/2021/01/01/硬核翻墙/index.html","1fb4e4f054474a2fe15e4f7ce7fb163f"],["/2021/01/02/qq/index.html","c6f444f21526f52732bbca1c4ac9687f"],["/2021/01/03/netch/index.html","a9a49be7160519e603159bf070ef6da5"],["/2021/01/03/waifu2x/index.html","3c5f7523846ff8fd037a395becb7f894"],["/2021/01/04/ads/index.html","48a9e47afe4979ccb5b6a6ec081b8da4"],["/2021/01/04/games/index.html","69afbf82b1394bb0ee3ea7185cfe68c4"],["/2021/01/04/heroku/index.html","2655b6f1e44fdcaa4ce0cd97cb4cdf8b"],["/2021/01/06/movies/index.html","641e834fecd6779a3dbf6d18252af31c"],["/2021/01/07/google2020/index.html","51895c8d8126d291e38a0f2d9f4292e7"],["/2021/01/07/lucky/index.html","45597e61eebdc5359ea16984e5fe9c21"],["/2021/01/07/spotify/index.html","f8c6bbeae023e458001565a0158a8f8b"],["/2021/01/07/thunder/index.html","2209d2dc443575b720e43669535d1f96"],["/2021/01/08/adguardhome/index.html","fd5c76f8f5774f14fc5d9dd4b86491ce"],["/2021/01/10/IBM/index.html","2e7469aacdff82aecb3f0844420ab275"],["/2021/01/10/potplayer/index.html","6561fa82a934e91c5245791f040f9e6f"],["/2021/01/10/sakuraanime/index.html","ff28886aebdcb4693d96113d25cab698"],["/2021/01/10/美剧星球/index.html","8c98843a608166bc7694214b9cde9276"],["/2021/01/12/telegraph/index.html","3ab5900a02a03f40a6432c120432b295"],["/2021/01/14/comics/index.html","6f72e19ebbddc8358eda0b00366b5998"],["/2021/01/14/ftp/index.html","7934776555c0896c93706bfe68a2daa8"],["/2021/01/14/oraclecloud/index.html","2a47ae5de498974c0c09239dc0a18b0e"],["/2021/01/14/porkbun/index.html","a5f929b57c96b63ca00046c6e3f2d94e"],["/2021/01/14/powertoys/index.html","2080a6118b2cf78d7096d156e4c32f80"],["/2021/01/14/taptap/index.html","b9f71bdf44b97c534d8ddd3ad2298684"],["/2021/01/14/ubuntuvsftp/index.html","7cf903f7f84340b112ce758634e06a59"],["/2021/01/14/小说/index.html","e65977cce3ebfd6ab02735d0f73e10fe"],["/2021/01/15/freeproxies/index.html","38cbac37200a7b41b2c58f86399d9e22"],["/2021/01/15/incaseformat/index.html","b5b55675e5f208e454ffc5457c3defd6"],["/2021/01/16/euserv/index.html","a84a84467e3da6508f88da0e29c5f504"],["/2021/01/16/winxray/index.html","6757eb3a63618796a410c4a5dd76f74e"],["/2021/01/18/qqreadhistory/index.html","2da48d2f5b20a438d09110cc7c5b5fb9"],["/2021/01/18/qqrevoke/index.html","6f38cced74f04ed192be04e6def5466d"],["/2021/01/19/freevpn/index.html","89b50c3e9a4da08d2ac52fadf0ad410e"],["/2021/01/20/browsertrack/index.html","532206308b270626203265b7ef6d2ea0"],["/2021/01/20/v2ui/index.html","fbdf26ca572c0e2520af7ac2a0b29f26"],["/2021/01/21/failedtoconnect/index.html","ddd14a1e23376933b7837b5da0099cd5"],["/2021/01/21/gitcalendar/index.html","236cf9a365503a6dbdff578cf514101d"],["/2021/01/21/markdownformat/index.html","a28d8d3aa9898d9bc83961fd3b6f3e6f"],["/2021/01/21/markdowntable/index.html","22b480e63e527a2b57aa27e2771f4784"],["/2021/01/21/vercel/index.html","d0d4fa4099d6b6a25449c4e68a26ded2"],["/2021/01/22/hardware/index.html","97a0da9e1bb2a3d2133ab1d014262e66"],["/2021/01/22/muviz/index.html","0f7626f60631d99bbb6d6b989bf92226"],["/2021/01/22/randomapi/index.html","08a2498b843a5b23aac03caf3f9eae1c"],["/2021/01/22/searchimages/index.html","f23985b9fcf3e91f02ddeaaa9bbb2b3d"],["/2021/01/23/RX文件管理器/index.html","565768c3f7f187c7e9ec2ba73d8df0c7"],["/2021/01/23/chromeflag/index.html","02fddb9eb3ef05e534e3624822601a3c"],["/2021/01/23/qttabbar/index.html","5da632f4c67a719122620dd6b54f7885"],["/2021/01/24/githubspeedup/index.html","16f47ce2a92104936bbb45a8e390b261"],["/2021/01/24/jsdelivr/index.html","81baf64f2c7390e56868da25b4e126d9"],["/2021/01/25/note/index.html","28fe21a8ada9ce9b107de33f65747e93"],["/2021/01/25/soul/index.html","a7cc44154f7d95bdb7c9db87c4a34c85"],["/2021/01/26/herokuxray/index.html","55d5fa8437e393850c3505c77eb62736"],["/2021/01/27/proxypool/index.html","93941d4c7d6a0570db16ec6bda494a08"],["/2021/01/27/tracker/index.html","046a73ebba03ddbae35c74a3e205a732"],["/2021/01/30/pandownphp/index.html","b4cc669397199a299841ef1a516d1e47"],["/2021/01/31/newgroup/index.html","5778348436ee7ed649faf6b4351acb32"],["/2021/02/01/clashlanguage/index.html","0727ae8f6601ecdf65b948168a4e7a0c"],["/2021/02/01/encrypt/index.html","c174ed49280ab1b0ddfa5f666fbfb1b3"],["/2021/02/01/footermotion/index.html","2c809c34a7c6b2376cd7e6770440a1a4"],["/2021/02/01/gitter/index.html","521fc51c8e7dd7fe71e0c398ad0c76fc"],["/2021/02/01/pixivtop50/index.html","f38abf24b1fc4c59425e48394aa8e93d"],["/2021/02/01/scrollbar/index.html","9066397a87161784466498eb845d62b4"],["/2021/02/02/clover/index.html","9c9ae440e96c20516323a3e7abe3bf0a"],["/2021/02/02/maya/index.html","fb012cc83944c044849ed9dc3684d40b"],["/2021/02/02/speedcontroller/index.html","d84afebfc5b5387ade1e24c85f741f8f"],["/2021/02/02/yesmusicplayer/index.html","225e27ccb413f6dc17018c52170fc28c"],["/2021/02/03/lenovoonelite/index.html","37bfaa9af4e7cd96a14f039ca63c65c9"],["/2021/02/03/skipads/index.html","60f624c4a9a4746a4eefdf09a66c8a99"],["/2021/02/04/picseed/index.html","5c343c613f72e4703e912d0199cdb800"],["/2021/02/04/renren/index.html","b214f5924e015766261c3df2bd45f1b8"],["/2021/02/04/serverstress/index.html","f1950f327b77610a81bd955965f07686"],["/2021/02/04/wikipediazh/index.html","ab2626d934bfe3766f7d25b08ef1f86f"],["/2021/02/05/googlevoice/index.html","559d9e90ec216f791c7f70968c3bdf87"],["/2021/02/06/clashconnection/index.html","b657d3fba6d99ad746bdc2e4b0e02258"],["/2021/02/06/gvtransfer/index.html","7499bd6e1e346d4b15857d3c9daf13cd"],["/2021/02/06/todesk/index.html","e93db3247ceec8f019d18b9770aa8dc0"],["/2021/02/06/vpnblacklist/index.html","9a0b9687d708c0846a9a9c3ca2d00da7"],["/2021/02/07/mklink/index.html","9b2e75ec249e252a5025c0df7bb60550"],["/2021/02/07/speedtest/index.html","bb2602d4fae03c553df23fdab54cac30"],["/2021/02/07/translate/index.html","9ad4b2cecf69c282d36ab13a447bce77"],["/2021/02/08/ewomail/index.html","1a59a555bdafb3d874b440a517515a22"],["/2021/02/10/officee5/index.html","a6cf4025759d4f272f30932f0b3b2a71"],["/2021/02/10/raidrive/index.html","13eb1eb344c6ac9bc61f7ffc3c5b6ad9"],["/2021/02/13/e5sub/index.html","af92cce6021eac52f63a383fb0f06a70"],["/2021/02/14/screen/index.html","00a3f8767d01a2633690b24698094aa6"],["/2021/02/15/clashtun/index.html","b6a460ef9c75f42fe8aa066e9992f250"],["/2021/02/15/messageboom/index.html","c232ef426db860fec25826a2d9f64d0f"],["/2021/02/15/oneindex/index.html","2c46464264a931c5c2c497450903f978"],["/2021/02/16/govsites/index.html","154b26af9168bb56fd656b67e75bb74d"],["/2021/02/17/hexototypecho/index.html","13171ef529f7428629ce13674bad0da5"],["/2021/02/19/fiddler/index.html","33ed15544dbe3ee338e3da1184129b5e"],["/2021/02/22/potplayerset/index.html","d4dcabe043a6ee14e3e6f86114e555f8"],["/2021/02/22/studyresource/index.html","8828f8a5f974a8fbb179bae31b9fe0c5"],["/2021/02/22/telegram/index.html","d06ce27b8839fa53e6c0e7c911ea3398"],["/2021/02/22/videos/index.html","64cefb41b967d9c15239ec56ae95da87"],["/2021/02/24/mtproxy/index.html","6a998f61fb68218ed575854153e97063"],["/2021/03/10/catchcat/index.html","9840a8e6d86f531249e1f83fa62cba97"],["/2021/03/10/neteasemusic/index.html","85fcddc26800629bbf75b390dc094254"],["/2021/03/10/surfboard/index.html","6cf24df6b7d5bf0262a40ad17d9647db"],["/2021/03/11/vpnandjc/index.html","e46b63bc12b0fc12875603e6a9b2af48"],["/404.html","b5f4f5192d2b315d40906ca54dbbf1ec"],["/archives/2020/11/index.html","a3cb02a00b07cd854aabdccf8bbad422"],["/archives/2020/12/index.html","ff34b74ca2a80d9ba2857c7ffc1e7319"],["/archives/2020/12/page/2/index.html","37ab98be7d77ce2f7870caab1a1ad007"],["/archives/2020/12/page/3/index.html","d8a1b0de1f046aadc37f1f2329fd1afc"],["/archives/2020/index.html","db27ce0d26ba251d6122b7d577efe936"],["/archives/2020/page/2/index.html","0368edd41e9674f047df6330db0c4598"],["/archives/2020/page/3/index.html","092190b2949a0063dd8db6ab9dfbe631"],["/archives/2021/01/index.html","afa31ff716408e35316cd44e143577fc"],["/archives/2021/01/page/2/index.html","99d1f7adee473b0485695b67dcc9a8b8"],["/archives/2021/01/page/3/index.html","ff5224d33595364883eba909c222391c"],["/archives/2021/01/page/4/index.html","9e1a24e667d08237b05b5810d4b4160a"],["/archives/2021/02/index.html","0c9364fb47e0ff5a4e85b9fb55430e31"],["/archives/2021/02/page/2/index.html","6e242697f4242dedd27c4b9b0ca2a82e"],["/archives/2021/02/page/3/index.html","e71ba4d6a250c59fd12ce6e6f42b1e51"],["/archives/2021/03/index.html","49ea5c31cf5e0f2532ad469f34b0bb83"],["/archives/2021/index.html","25e73fb18241613152927633f141eb2d"],["/archives/2021/page/2/index.html","8e609f41900fd53542e41beba639d532"],["/archives/2021/page/3/index.html","6bdcb82d74ea0fcc8cd2a0d75f4ddcaf"],["/archives/2021/page/4/index.html","5242691721b7a370fded19a6c5d0de99"],["/archives/2021/page/5/index.html","f57ad07e06f53eb02024fd3aee958609"],["/archives/2021/page/6/index.html","e51244a2b1c19eca5c440a4a55072c45"],["/archives/2021/page/7/index.html","1ec94c4df8f31bb789c24943d07a1457"],["/archives/index.html","e857f64583d7cc57d90947f091803581"],["/archives/page/10/index.html","6b2d5cf8c48f126b4c9b69439b4c40fc"],["/archives/page/2/index.html","898fa19a1d382ab7344bce302ff8b891"],["/archives/page/3/index.html","2ef314698e6d38ec3d389f489f61b55a"],["/archives/page/4/index.html","1973ccc595faf84f7bc6897f927a4461"],["/archives/page/5/index.html","90f5f87f8c78c39b48135a11ed51d55b"],["/archives/page/6/index.html","276b57df91e8de99b1847d62f4db4a57"],["/archives/page/7/index.html","21db37c7debe344a0f47777cc49b32e4"],["/archives/page/8/index.html","4be8afedeb5a52a7b0c247bf12d3fd1b"],["/archives/page/9/index.html","0ef7849ac8deefa3128829e4de8a5b3c"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","140dcd77a56c79d9eb0468ec0df6b3cd"],["/catchcathard/index.html","e9291c58bce68730cd21cc4e2b0a474b"],["/catchcatimpossible/index.html","ce8ac7a16e2b7990d9e0aeb78de4c0db"],["/catchcatmid/index.html","dc073d912aef351b621ce171416ebd82"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/categories/VPN/index.html","5fb135d105a4da1cea43c8a7f5bbf33c"],["/categories/VPS/index.html","8762d24e6ee3575b36778dc0dd94fc9b"],["/categories/index.html","123f8f32345d4bbd4d99360f1d833036"],["/categories/下载/index.html","43f541cf4dddaac8ba8b13bff7f6db6c"],["/categories/安全/index.html","6c6e4d59b22c425a88a36038ec60784c"],["/categories/建站/index.html","8fd28ae778802f7b3ba0edbd48dafe2d"],["/categories/杂/index.html","f52f4b5acc2c376d84d3aa7ca1cccba3"],["/categories/杂/page/2/index.html","9ed0bb7114b33be62cbc1192da1b7ef4"],["/categories/测评/index.html","63b63332eb4ae03ff09175fe08e4b282"],["/categories/科学上网/index.html","db35bff0ac669bda3b3cff408efd7eb5"],["/categories/科学上网/page/2/index.html","e09c5df186a986fb31bc83183eba124c"],["/categories/编程/index.html","7af0fdeb012ebbf5b23cb5b0901d022a"],["/categories/网站/index.html","aca94d242b32e2be2070495a26ec9f8d"],["/categories/网站/page/2/index.html","64cc381d7837dc205945e3315e842d11"],["/categories/软件/index.html","c603b3dcb27302e2cc455d39236f4c92"],["/categories/软件/page/2/index.html","5ff7493f9d368a224ba4cafac7e2d1fd"],["/categories/软件/page/3/index.html","b47d3539be2033fb54af26d8213fc307"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","8bed6124fa9d3781f3a4a1bde9ff0b87"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","f022e40e28d76070b7d718480b9dae25"],["/ios/index.html","1a046f035690a89cd78b6687b3cae9e0"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","f9f2bf3c1eee25af0450f1afcc78204d"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","1459b15b39bea380a1daf2cc495bfed0"],["/page/2/index.html","97cea721fb6f21dad6f3d2ef4af27900"],["/page/3/index.html","006a71f914aadda4611f9c925541ba41"],["/page/4/index.html","8be22057d06472d32601aaf502394878"],["/page/5/index.html","6db536216c9ad75c2e662a840d1fa252"],["/page/6/index.html","b4b99e58b222475aa7249642885affc2"],["/page/7/index.html","b7239323b6a82a81eee4e4ce1796de38"],["/page/8/index.html","cabd49bf2e7a3a80a4a4f2fa0d901b8a"],["/page/9/index.html","8641509bde13d134345ced1a6f52d6cc"],["/payment/index.html","cd6b0515b991194ed23d84f3ba36d7b2"],["/privacy-policy/index.html","a8d34085f30e31f19436f851c222a70e"],["/rss2.xml","f171be6164ee3b19610aad41aa29b6dd"],["/search.xml","7be9f3621b9b2ebcae9346d8e75824d2"],["/sitemap.xml","63bfb68f20e39577552d070dbad8101e"],["/sw-register.js","bc62cee204b80ab3aa8e5e8b3acd5025"],["/tags/5t/index.html","62335f0e012ffeb1b86913a331ea7da5"],["/tags/Clash/index.html","b18f792ac48160f8e63a926d3b97936b"],["/tags/Clover/index.html","8a0ef0ec251af88de2e6991def1713e3"],["/tags/E5/index.html","a76ac0395a2d6ecc1a31bba59b4e9cee"],["/tags/FTP/index.html","ed4ab91c93a1040f5e28fbf287673464"],["/tags/GitHub/index.html","f4f7cd778ed7d09d751f40eea8c59b6e"],["/tags/Heroku/index.html","e5e85fa43ecf8c114884f515bf48e4a9"],["/tags/Hexo/index.html","1354f2dec2727cf00a769c2ebd498288"],["/tags/Lenovo/index.html","5b8a34c27512613fa3331d42ca5632a3"],["/tags/Oneindex/index.html","9637c62ba9637ee3250203053b21e073"],["/tags/QQ/index.html","d931779b2a2c632e9f10b3991693150c"],["/tags/QTTabbar/index.html","f2338c96dbfbe0e2d712eaf3fafd68f9"],["/tags/RX文件管理器/index.html","6e2c6c45e4b1fafb51294034b575b18e"],["/tags/Todesk/index.html","a4727f6aa4ea136dfa6f1885f65649a2"],["/tags/Vercel/index.html","0314b6983394ae0ea1829452522e31bb"],["/tags/ads/index.html","c5bfd5c351414019be42b0529355171b"],["/tags/api/index.html","6006c46aee8ddcb0cdea42f18c162e3e"],["/tags/app/index.html","719a6c187ea09e2e609c9c62379b151e"],["/tags/blacklist/index.html","91ad70f292d668fd6a7106c5642e6e58"],["/tags/butterfly/index.html","cc9f0a71a9d573ba1b9afeb503bc829d"],["/tags/chrome/index.html","2616fbd1563ce6f2e911ba89f857f29b"],["/tags/cloudflare/index.html","bde252663e70d53d18a0457500dcb895"],["/tags/cmd/index.html","32c5793febd8326d3b67aecf192d1c66"],["/tags/c盘/index.html","c511dac8ea27d507b44027347cba8a16"],["/tags/email/index.html","936c082b244ff01e567149c2b7bf4dc8"],["/tags/ewomail/index.html","a05c89758e2a4a5c34fabdd93c8be897"],["/tags/fiddler/index.html","ff2df2cae4625af835cb410371b26cc5"],["/tags/flags/index.html","fdbef4ede38691710158a0eb82c50b0e"],["/tags/footer，页脚/index.html","bbc38eda101dd6a77a28d11a4668241a"],["/tags/galgame/index.html","0f8f8c864b7da6011b3ac80408f291d3"],["/tags/git/index.html","58863c6f6b118f60f65d02829edd1a85"],["/tags/gitcalendar/index.html","df237c504813fd07dceda2f1ab2624a9"],["/tags/google-voice/index.html","8755e8adbe4e2157c1fd0ac26ee2a97d"],["/tags/gv/index.html","beee4fdc410490e4bfc020ed8d0b76a0"],["/tags/html/index.html","a7efab7aebbd0eab3ab1ee63f0dd215d"],["/tags/index-1.html","41760a47cb986f78cec151e763d41895"],["/tags/index.html","431976e789017ac819d10c26256fe320"],["/tags/js/index.html","d3c9ecc6796e282478b9b1e6e862a44a"],["/tags/jsdelivr/index.html","114bd4b020577f9f9dc27ed6e73c9f70"],["/tags/linux/index.html","3414d9aad12c9f4258ec01b3b2e67db3"],["/tags/madVR/index.html","b5a269b92bb177c3e3a3b835366067e1"],["/tags/markdown/index.html","bd53370f5eeb995ce2f4d6cc3614183d"],["/tags/maya/index.html","557b603a42af74645c4d180fb63849b4"],["/tags/mklink/index.html","ee6f3168a4baafcc721d2405888a0074"],["/tags/office-e5/index.html","de6cd295ca73e504a4ef4774d66e6694"],["/tags/onedrive/index.html","917c18a6a038cb6be5ec688394f300c6"],["/tags/picGO/index.html","8b18e23f27cea0c725cbd8189f509ae1"],["/tags/pixiv/index.html","6ff0e9133040a0f38d2532a768bafe35"],["/tags/potplayer/index.html","356b482585f06bd2790376f3cc7dd904"],["/tags/proxypool/index.html","1dfa12487e5b23e713f880f29c182938"],["/tags/qbitorrent/index.html","27a205d29cbe78772549f20525af0b13"],["/tags/raidrive/index.html","52df762e25f53503a70154eb3e728d1f"],["/tags/screen/index.html","da864933dff586540af133d83e237619"],["/tags/speedtest/index.html","d2977c8895f8462fa079e34956123e55"],["/tags/ss/index.html","d089872c4efabace77519081cc154b40"],["/tags/ssr/index.html","6ee3169f2dc345bdbd1741f2a29ce3d4"],["/tags/surfboard/index.html","c46c3666286e8f788ea2984082e5134b"],["/tags/tap/index.html","d2c32bd8c8e76045b23775844e2f87c3"],["/tags/telegram/index.html","3a99ea9f06068cc4131f3c15632514dc"],["/tags/telegram代理/index.html","567a845b53b466b6b3f55c276d6ebd90"],["/tags/tg/index.html","7cb7fd3abbea652e5c18926e145ca725"],["/tags/tg代理/index.html","cd413a203ebb4353fa194b8f25c7ab08"],["/tags/top50/index.html","92b715fbd2a6f2b8fdefc43956fd6907"],["/tags/tracker/index.html","c3049d0937d9822c6005dfc1c28e4fd3"],["/tags/translate/index.html","0d8b96cfbf103a152b44f3b21fac6d91"],["/tags/translater/index.html","50d4cd860c9c5633e58bfc48dfd4e613"],["/tags/tun/index.html","32f970b14dfd54828324d220e97f8f58"],["/tags/typecho/index.html","a024c4dfe4a670a6f8a4af2d7095d76e"],["/tags/v2ray/index.html","1577347d211ad7b24977a7a90c40f563"],["/tags/vpn/index.html","8e0bc139b17ef8e920172505b7dd4946"],["/tags/vps/index.html","43f105edac436488e96208311094a6d6"],["/tags/windows/index.html","5a12c4adba780e40594d185fcab322d2"],["/tags/windows端/index.html","e703e7216d7559ff8efc74c473b7ceba"],["/tags/xray/index.html","473bd06879218c48b3c1dec371707b1c"],["/tags/下载/index.html","320f765b566c31ec0d23cd85a6763ccc"],["/tags/不限速/index.html","74bf6fa6e6c591d70321fb5f34f8d75a"],["/tags/个人网盘/index.html","e1641443b3d629597054a3cb325bb202"],["/tags/主题/index.html","0f5db18b80fccc2b05bfddde7c4d5260"],["/tags/云便签/index.html","7ca7a892787c23b5a1286549320ed0a9"],["/tags/云盘/index.html","8b11317a7b117c660bbeecbdb8d87e09"],["/tags/人人/index.html","1df99b0802ab78ae0e533e1ef630b13e"],["/tags/代理/index.html","b317041e3952d756831a87df012f4067"],["/tags/代码/index.html","4a98b5bffbe07abee20e587db9638f3e"],["/tags/优选IP/index.html","ae40d46d21e38ffebf82f4800f09d04c"],["/tags/便签/index.html","7c84d6dd16ce1d6f4cceca4b70f68902"],["/tags/保号/index.html","2b49aea7752053a606fb558f5a7b0787"],["/tags/免费/index.html","5449fed2162d51f20eb0184ad2697552"],["/tags/免费节点/index.html","0f0f03ae70b31859c087b3ed55d210c3"],["/tags/加密/index.html","92a4ec991c11c6d140d4d82ae5112eb3"],["/tags/动画/index.html","e024f6f14abbf534c19e19a82b06e1e5"],["/tags/博客/index.html","ded5a98857beec9a6d1d62064c53f12c"],["/tags/历史记录/index.html","f37b09b34c53bd44d58dd9808b418511"],["/tags/压力/index.html","9a441e2ce986adb456ba18ea6224cbd3"],["/tags/压缩包/index.html","7f4f43c7a762195c1d8188dad61ab100"],["/tags/反代/index.html","d1792d990a2e6b2876c8d380bdfec309"],["/tags/可视化/index.html","b524207d3c4841b89d37d39b3a55dc53"],["/tags/命令/index.html","0294a012a7bb66cb8d2e5c240642bae5"],["/tags/国家/index.html","d0dd969b202f18849dee8ce9a84e50c6"],["/tags/图床/index.html","4ffce490dca20615b0823dce7e5b073a"],["/tags/图片/index.html","fb770049fb653118446e4b7561d02973"],["/tags/域名/index.html","7bece1491cb45e28e8c42e949c746a09"],["/tags/多标签/index.html","16d20251456e851596152b5a63af6da1"],["/tags/存储/index.html","6bd3d4b4ecd7cd22a8b62b5b27fedee6"],["/tags/学习/index.html","7cb44ef83071e4ccf7319803df1fb6e8"],["/tags/安全/index.html","ae9b156014675b69562df2b865edbc12"],["/tags/安卓/index.html","7fa0afed83e834344d6373cb6dcbc094"],["/tags/宝塔/index.html","d7aafb0aeb8a099f998d2855941226f5"],["/tags/小游戏/index.html","0a8d91d31a6f07120e1b5cbd952194c2"],["/tags/广告/index.html","a67ba6c069fc6cfd7a037832b91001d3"],["/tags/建站/index.html","b0e4102e9a40b4ddee7e75fde09bdc92"],["/tags/影视/index.html","00f67245c354562d5eeb74dad3df6eb6"],["/tags/快速启动/index.html","4c32898d288bb11a000acd22903ab378"],["/tags/手机/index.html","5957a4f8e84ad367ff8b1f68fc1a4905"],["/tags/托管/index.html","cf6f266b7ee11401c2a9b502cbd406fe"],["/tags/抓包/index.html","837e7eaf0b3b1fd072fa645e2c92bfad"],["/tags/抓取/index.html","e34af875bed7f53c656b3e78633306d7"],["/tags/投屏/index.html","b14da7f05e6954b823cfe67839b2fc2d"],["/tags/拓展功能/index.html","2c5b1666fc7becaf699e55d21f113d7f"],["/tags/挂载/index.html","f0287e46260c7b6c1dd13b7663040e8f"],["/tags/指纹/index.html","026de26416f77d590e7fcfc7eb97c96d"],["/tags/接口/index.html","322339f12d980e4491bce08198ccb356"],["/tags/提取图片/index.html","0ec824e4c8718f6f91c75083672da4cb"],["/tags/插件/index.html","eea4172befd147a8bac45845ff0fcf1e"],["/tags/搜图/index.html","87a654741c9a85fe56c2e9cd15964064"],["/tags/搭建/index.html","44ef4369aa73ef618e871fffd0f4c4a7"],["/tags/撤回/index.html","7f54227f452fa5135c37800151d5f174"],["/tags/播放器/index.html","93067d987dcf36836607d3b2e5ef7374"],["/tags/政府网站/index.html","074fc3a278e1d7e1cf1f8e6575fec606"],["/tags/效率/index.html","685f7a2f88756fee44a37805d5e0f10c"],["/tags/日历/index.html","9ce4e43cd0fcc7ce9a8a0ebff0e90d45"],["/tags/服务器/index.html","8efe41a6fd3ecfbc04ecb01709316969"],["/tags/机场/index.html","f712817be11c3760d2c7fe6b3e73a2f6"],["/tags/桌面/index.html","aac9772d71f9a75f9a02f64dc2d6e031"],["/tags/梯子/index.html","dc592ef4470eabcd37cb7f90e53b842a"],["/tags/检测工具/index.html","c58e85f98ee6c4f3a1981f1834cf29ca"],["/tags/汉化/index.html","2fc21353e9795034612f386eb7e79760"],["/tags/测压/index.html","b4770a6000c9c183205de2177a84e135"],["/tags/测速/index.html","b5352efdf1acc36bd9f0bf3192b45c71"],["/tags/浏览器/index.html","c2dd11a6355a7a9587a729a80cecb0ac"],["/tags/清理/index.html","f2fbb0593bd914b05cabd10257425b47"],["/tags/滚动条/index.html","fc39458f06e2b4238a4344c6a1aeeb17"],["/tags/灰色歌曲/index.html","687dd88894f8302ea8093c08fd96b07f"],["/tags/电影/index.html","fd7108941cca1f976372b073d658822d"],["/tags/电视剧/index.html","f712fc4c0696aab42beb992d6a0453e9"],["/tags/白嫖/index.html","22eba6fc0e536830535393e8918d0442"],["/tags/百度/index.html","67c022192be59db0f1e9bfa58830672c"],["/tags/百度云盘/index.html","6881462a80bcbe4f0873af60adfb9454"],["/tags/百科/index.html","88e50b056d24f8b6d157b8aac01c78af"],["/tags/短信/index.html","601df74c9921ddc9c390d47efeebe32a"],["/tags/硬件/index.html","7750129791fb362d39a0ac94867c4f7d"],["/tags/科学上网/index.html","ed60b8c37a0a47c1dd5cb0c859deb998"],["/tags/空间/index.html","377b050f3c10f460e56f838779df551d"],["/tags/笔记/index.html","e7ce8676134e9c654715787c1a105594"],["/tags/简洁/index.html","f97fff3a0c0f178defc463ffcd1e26dd"],["/tags/简约/index.html","3ba92ba045777eebeab35fc38f47ae65"],["/tags/维基/index.html","a986950566ae6de66879887bf0e14727"],["/tags/网易云/index.html","1d236f1af250a345327632adf4bb3b1e"],["/tags/网盘/index.html","c759751b81f0fa14c2937bb6793c5adb"],["/tags/网站/index.html","2fc4adfc8f0b0438bf03b5d3ef142dc9"],["/tags/网络/index.html","e6bb2b5d3b389fdde7fb62acebe56d29"],["/tags/美化/index.html","f6e289eb584b6dd70df80a61b42aea0e"],["/tags/翻墙/index.html","6d5e7c66919309d8a267440d7afa7541"],["/tags/翻译/index.html","ccaef44a81536489f343f2994a842d8b"],["/tags/翻译器/index.html","63a50f347ed0bbc71dbb223653e72881"],["/tags/聊天/index.html","37bc60c2d59d4862145e0651f8416bfb"],["/tags/聊天室/index.html","eba04b7f9ee307926f5775e579274194"],["/tags/联想/index.html","a5fdb0bad8b74ea00e916d89a45529c1"],["/tags/节点/index.html","d7fa81e083c0765551472b3ae5e25717"],["/tags/虚拟手机号/index.html","b515db589cde069e84c36ece97f8b3e8"],["/tags/补丁/index.html","1ae8ca4763fcc54ef6be75eb1d6d7b45"],["/tags/视频/index.html","20238d9f7b9b157024a65f7db4835ff3"],["/tags/解析/index.html","3e8768aa31adcff1fd6af55c5950c589"],["/tags/订阅链接/index.html","7945701d7a903591b37249d65cabc815"],["/tags/记录/index.html","f57b3a67651e14b952a1cea798013cab"],["/tags/识图/index.html","230ebf40a5d98a096a5fba09c5d1a41c"],["/tags/语言/index.html","378bba8d84db999389326d3b636e1c10"],["/tags/资源/index.html","a2f178bf4f594125efa11aba21a34a56"],["/tags/资源管理器/index.html","f186e93c7bc23e76d8f6abd0261bf4c5"],["/tags/转移/index.html","779d06e9f508471d6c2dc6054e4c33dc"],["/tags/软件/index.html","d99d43df755ca78b708c642c491baaab"],["/tags/轰炸/index.html","0511d764cb414c48296eb7169fa3d3f6"],["/tags/迁移/index.html","95d7762c930e5f53058480331fedaa67"],["/tags/远程控制/index.html","de2ea5691cb03ee03a45b06aa098a021"],["/tags/连接/index.html","afd09b152603bb6614a52585b80e35c2"],["/tags/追踪/index.html","bec83b4d7584b558f4e86a644b0fa753"],["/tags/速度/index.html","7bf5b32566b68590e7075fce2398c4d0"],["/tags/邮箱/index.html","23971bb883c57db38cee84be3c429636"],["/tags/酷炫/index.html","f5f688004affb9911ae1ac866721af67"],["/tags/钓鱼/index.html","e8a77a5172cb01e737aa0b6769c59480"],["/tags/镜像/index.html","7a556f706acfa4e00580172f4d022870"],["/tags/随机/index.html","29bf54f1da5f719e3ef2e22b1524f49c"],["/tags/隐藏/index.html","5075ea03c966ef3fea02be4dc3151185"],["/tags/面板/index.html","05a18fa8aed89472597299e3b9289f0c"],["/tags/音乐/index.html","6f74e913ca6fb6261d70337370c78ebb"],["/tags/高颜值/index.html","63b957b4fb07b2b8ce5a69fea4f7bef1"],["/tags/魔改/index.html","b3f6e053c4ffb36ece9c9f1b515782a5"],["/tags/黑名单/index.html","8269ebfdc9aa085b940395bffaa9fa4e"],["/urls/index.html","badb88c12829c63f28d4cf523aa35934"],["/vps/index.html","61beea624ebdb9b66df32ff6c63ca005"],["/支持/index.html","444aad9eebf4f4a8c43fcb747f37c74b"]];
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
