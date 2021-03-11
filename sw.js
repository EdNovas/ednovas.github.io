/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","7f90a58522f43799df6e324747f8a0cd"],["/2020/11/29/clash-windows/index.html","746d4cdae68b15e66f0a36f25d7aaefe"],["/2020/11/30/websites2/index.html","f98c62f80684a2c41e4ff0e16f6bd1e3"],["/2020/12/04/iphone4s/index.html","aa40d3edb1a31c9fe6a8bb41fecc8c07"],["/2020/12/04/onenote/index.html","4d0e2dd2758ae78f74d73194f8e9bbc7"],["/2020/12/04/wesites1/index.html","1fde8b6e31cc406294bcd536a2e95a6c"],["/2020/12/06/nokia808/index.html","848ab69b603ad2745e4b4120b9bee1e0"],["/2020/12/07/ipad1/index.html","754bff57bb5f7920b83c2e8c3c3fb34d"],["/2020/12/18/freesubscribes/index.html","90b9417dde2e8e64ca513320e95f6b71"],["/2020/12/19/musics/index.html","e51a0d5298a9d66fc44213e07fb670d7"],["/2020/12/19/shadowrocket/index.html","c3b75ebba30f281675a6758884797d28"],["/2020/12/19/v2ray-windows/index.html","67707f5e9b66c34100e60f4b222647b7"],["/2020/12/19/v2rayng/index.html","040197774db21d11112140dff864b2cf"],["/2020/12/20/beoplay/index.html","ac6485eadb40a5e8b02595d76c0abaf6"],["/2020/12/20/订阅链接转换/index.html","954a2a1d4f2665b303ea2ec59cfc14f5"],["/2020/12/21/chrome浏览器下载提速/index.html","4d01a5fae9908c5d89e0f9721a42930f"],["/2020/12/21/免费128线程并发下载xdown/index.html","deec95ea25ec33e9533d24ef0a8e67b0"],["/2020/12/21/免费32线程下载软件ndm/index.html","8380e889ebde4d8e7895a9c3d9f74217"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","375c9253f69c5a026241998c0a585e4b"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","5a624a0d9130ad02b9c18ab0d81c1acb"],["/2020/12/21/广告怎么知道我在想什么/index.html","06a1d4ec1836602c76712d5ca4fca716"],["/2020/12/21/无名·引子（小说试写）/index.html","559ea0661ac11b907ae77c3a875c9cc5"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","7bc5677c51775f512b92d0fca924939e"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","99dacf8f659ffca47516e9b233aab40a"],["/2020/12/21/高速轻量下载器aria2/index.html","51e33e76b601a333879acaec1b927b96"],["/2020/12/22/2020-cee-roo/index.html","588e4932843544768fee40d9b01000d3"],["/2020/12/22/firefox插件、github、steam富强/index.html","13fdf2685e0616afd3795100611fe1ae"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","0c333e4375c0504b574c252d2494e430"],["/2020/12/26/python-day-1/index.html","3eef81e46e47a373cc1c74c67ce2d110"],["/2020/12/26/python-day-2/index.html","3745af739fbba2b0d1d3ff4ad964cd1b"],["/2020/12/26/度盘不限速下载方式一赏/index.html","02a7bbf49fd0250f0be66201f609be29"],["/2020/12/26/添加开机自启软件/index.html","8780ab130932cf9362dae3d40fa510b9"],["/2020/12/26/电脑端截图方式一赏/index.html","2a872f0fb4685b7364d1bc283450fd7d"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","b69770e19682719cabed74f3cbe846ab"],["/2020/12/27/最安全的浏览器tor/index.html","fb21fcac4efd61f700f5f35b1df83557"],["/2020/12/27/网易云刷等级和听歌数量/index.html","acce932426b3d5780cac81e9b5514c5f"],["/2020/12/28/freenom申请免费域名/index.html","0b3807c300f365787ddcf80f210d5631"],["/2020/12/31/机场/index.html","33c3fa5a428373510be38a4cbbcaf9c8"],["/2021/01/01/M1/index.html","004b62a91487fa401bcbb9b693eaf063"],["/2021/01/01/compress/index.html","f3082d66e11b76d3ce50d38ac122f599"],["/2021/01/01/infinityfree/index.html","efbfce277d8282f9f8ee65a025ae81ea"],["/2021/01/01/硬核翻墙/index.html","1fb4e4f054474a2fe15e4f7ce7fb163f"],["/2021/01/02/qq/index.html","c6f444f21526f52732bbca1c4ac9687f"],["/2021/01/03/netch/index.html","a9a49be7160519e603159bf070ef6da5"],["/2021/01/03/waifu2x/index.html","3c5f7523846ff8fd037a395becb7f894"],["/2021/01/04/ads/index.html","48a9e47afe4979ccb5b6a6ec081b8da4"],["/2021/01/04/games/index.html","69afbf82b1394bb0ee3ea7185cfe68c4"],["/2021/01/04/heroku/index.html","2655b6f1e44fdcaa4ce0cd97cb4cdf8b"],["/2021/01/06/movies/index.html","641e834fecd6779a3dbf6d18252af31c"],["/2021/01/07/google2020/index.html","51895c8d8126d291e38a0f2d9f4292e7"],["/2021/01/07/lucky/index.html","45597e61eebdc5359ea16984e5fe9c21"],["/2021/01/07/spotify/index.html","f8c6bbeae023e458001565a0158a8f8b"],["/2021/01/07/thunder/index.html","2209d2dc443575b720e43669535d1f96"],["/2021/01/08/adguardhome/index.html","fd5c76f8f5774f14fc5d9dd4b86491ce"],["/2021/01/10/IBM/index.html","2e7469aacdff82aecb3f0844420ab275"],["/2021/01/10/potplayer/index.html","6561fa82a934e91c5245791f040f9e6f"],["/2021/01/10/sakuraanime/index.html","ff28886aebdcb4693d96113d25cab698"],["/2021/01/10/美剧星球/index.html","8c98843a608166bc7694214b9cde9276"],["/2021/01/12/telegraph/index.html","3ab5900a02a03f40a6432c120432b295"],["/2021/01/14/comics/index.html","6f72e19ebbddc8358eda0b00366b5998"],["/2021/01/14/ftp/index.html","7934776555c0896c93706bfe68a2daa8"],["/2021/01/14/oraclecloud/index.html","2a47ae5de498974c0c09239dc0a18b0e"],["/2021/01/14/porkbun/index.html","a5f929b57c96b63ca00046c6e3f2d94e"],["/2021/01/14/powertoys/index.html","2080a6118b2cf78d7096d156e4c32f80"],["/2021/01/14/taptap/index.html","b9f71bdf44b97c534d8ddd3ad2298684"],["/2021/01/14/ubuntuvsftp/index.html","7cf903f7f84340b112ce758634e06a59"],["/2021/01/14/小说/index.html","e65977cce3ebfd6ab02735d0f73e10fe"],["/2021/01/15/freeproxies/index.html","38cbac37200a7b41b2c58f86399d9e22"],["/2021/01/15/incaseformat/index.html","b5b55675e5f208e454ffc5457c3defd6"],["/2021/01/16/euserv/index.html","a84a84467e3da6508f88da0e29c5f504"],["/2021/01/16/winxray/index.html","6757eb3a63618796a410c4a5dd76f74e"],["/2021/01/18/qqreadhistory/index.html","2da48d2f5b20a438d09110cc7c5b5fb9"],["/2021/01/18/qqrevoke/index.html","6f38cced74f04ed192be04e6def5466d"],["/2021/01/19/freevpn/index.html","89b50c3e9a4da08d2ac52fadf0ad410e"],["/2021/01/20/browsertrack/index.html","532206308b270626203265b7ef6d2ea0"],["/2021/01/20/v2ui/index.html","fbdf26ca572c0e2520af7ac2a0b29f26"],["/2021/01/21/failedtoconnect/index.html","ddd14a1e23376933b7837b5da0099cd5"],["/2021/01/21/gitcalendar/index.html","236cf9a365503a6dbdff578cf514101d"],["/2021/01/21/markdownformat/index.html","a28d8d3aa9898d9bc83961fd3b6f3e6f"],["/2021/01/21/markdowntable/index.html","22b480e63e527a2b57aa27e2771f4784"],["/2021/01/21/vercel/index.html","d0d4fa4099d6b6a25449c4e68a26ded2"],["/2021/01/22/hardware/index.html","97a0da9e1bb2a3d2133ab1d014262e66"],["/2021/01/22/muviz/index.html","0f7626f60631d99bbb6d6b989bf92226"],["/2021/01/22/randomapi/index.html","08a2498b843a5b23aac03caf3f9eae1c"],["/2021/01/22/searchimages/index.html","f23985b9fcf3e91f02ddeaaa9bbb2b3d"],["/2021/01/23/RX文件管理器/index.html","565768c3f7f187c7e9ec2ba73d8df0c7"],["/2021/01/23/chromeflag/index.html","02fddb9eb3ef05e534e3624822601a3c"],["/2021/01/23/qttabbar/index.html","5da632f4c67a719122620dd6b54f7885"],["/2021/01/24/githubspeedup/index.html","16f47ce2a92104936bbb45a8e390b261"],["/2021/01/24/jsdelivr/index.html","81baf64f2c7390e56868da25b4e126d9"],["/2021/01/25/note/index.html","28fe21a8ada9ce9b107de33f65747e93"],["/2021/01/25/soul/index.html","a7cc44154f7d95bdb7c9db87c4a34c85"],["/2021/01/26/herokuxray/index.html","55d5fa8437e393850c3505c77eb62736"],["/2021/01/27/proxypool/index.html","93941d4c7d6a0570db16ec6bda494a08"],["/2021/01/27/tracker/index.html","046a73ebba03ddbae35c74a3e205a732"],["/2021/01/30/pandownphp/index.html","b4cc669397199a299841ef1a516d1e47"],["/2021/01/31/newgroup/index.html","5778348436ee7ed649faf6b4351acb32"],["/2021/02/01/clashlanguage/index.html","0727ae8f6601ecdf65b948168a4e7a0c"],["/2021/02/01/encrypt/index.html","c174ed49280ab1b0ddfa5f666fbfb1b3"],["/2021/02/01/footermotion/index.html","2c809c34a7c6b2376cd7e6770440a1a4"],["/2021/02/01/gitter/index.html","521fc51c8e7dd7fe71e0c398ad0c76fc"],["/2021/02/01/pixivtop50/index.html","f38abf24b1fc4c59425e48394aa8e93d"],["/2021/02/01/scrollbar/index.html","9066397a87161784466498eb845d62b4"],["/2021/02/02/clover/index.html","9c9ae440e96c20516323a3e7abe3bf0a"],["/2021/02/02/maya/index.html","fb012cc83944c044849ed9dc3684d40b"],["/2021/02/02/speedcontroller/index.html","d84afebfc5b5387ade1e24c85f741f8f"],["/2021/02/02/yesmusicplayer/index.html","225e27ccb413f6dc17018c52170fc28c"],["/2021/02/03/lenovoonelite/index.html","37bfaa9af4e7cd96a14f039ca63c65c9"],["/2021/02/03/skipads/index.html","60f624c4a9a4746a4eefdf09a66c8a99"],["/2021/02/04/picseed/index.html","5c343c613f72e4703e912d0199cdb800"],["/2021/02/04/renren/index.html","b214f5924e015766261c3df2bd45f1b8"],["/2021/02/04/serverstress/index.html","f1950f327b77610a81bd955965f07686"],["/2021/02/04/wikipediazh/index.html","ab2626d934bfe3766f7d25b08ef1f86f"],["/2021/02/05/googlevoice/index.html","559d9e90ec216f791c7f70968c3bdf87"],["/2021/02/06/clashconnection/index.html","b657d3fba6d99ad746bdc2e4b0e02258"],["/2021/02/06/gvtransfer/index.html","7499bd6e1e346d4b15857d3c9daf13cd"],["/2021/02/06/todesk/index.html","e93db3247ceec8f019d18b9770aa8dc0"],["/2021/02/06/vpnblacklist/index.html","9a0b9687d708c0846a9a9c3ca2d00da7"],["/2021/02/07/mklink/index.html","9b2e75ec249e252a5025c0df7bb60550"],["/2021/02/07/speedtest/index.html","bb2602d4fae03c553df23fdab54cac30"],["/2021/02/07/translate/index.html","9ad4b2cecf69c282d36ab13a447bce77"],["/2021/02/08/ewomail/index.html","1a59a555bdafb3d874b440a517515a22"],["/2021/02/10/officee5/index.html","a6cf4025759d4f272f30932f0b3b2a71"],["/2021/02/10/raidrive/index.html","13eb1eb344c6ac9bc61f7ffc3c5b6ad9"],["/2021/02/13/e5sub/index.html","af92cce6021eac52f63a383fb0f06a70"],["/2021/02/14/screen/index.html","00a3f8767d01a2633690b24698094aa6"],["/2021/02/15/clashtun/index.html","b6a460ef9c75f42fe8aa066e9992f250"],["/2021/02/15/messageboom/index.html","c232ef426db860fec25826a2d9f64d0f"],["/2021/02/15/oneindex/index.html","2c46464264a931c5c2c497450903f978"],["/2021/02/16/govsites/index.html","154b26af9168bb56fd656b67e75bb74d"],["/2021/02/17/hexototypecho/index.html","13171ef529f7428629ce13674bad0da5"],["/2021/02/19/fiddler/index.html","33ed15544dbe3ee338e3da1184129b5e"],["/2021/02/22/potplayerset/index.html","d4dcabe043a6ee14e3e6f86114e555f8"],["/2021/02/22/studyresource/index.html","8828f8a5f974a8fbb179bae31b9fe0c5"],["/2021/02/22/telegram/index.html","d06ce27b8839fa53e6c0e7c911ea3398"],["/2021/02/22/videos/index.html","64cefb41b967d9c15239ec56ae95da87"],["/2021/02/24/mtproxy/index.html","6a998f61fb68218ed575854153e97063"],["/2021/03/10/catchcat/index.html","9840a8e6d86f531249e1f83fa62cba97"],["/2021/03/10/neteasemusic/index.html","85fcddc26800629bbf75b390dc094254"],["/2021/03/10/surfboard/index.html","6cf24df6b7d5bf0262a40ad17d9647db"],["/2021/03/11/vpnandjc/index.html","e46b63bc12b0fc12875603e6a9b2af48"],["/404.html","66eb928bf27773764e0dd79000888e08"],["/archives/2020/11/index.html","962c2796ccacd5355277097a7d60a399"],["/archives/2020/12/index.html","0a71def491811896e7b624e2516bb625"],["/archives/2020/12/page/2/index.html","c81bcb09ace04ac79881050e315f357e"],["/archives/2020/12/page/3/index.html","a330fe2c7edd4b6387debca863f738bc"],["/archives/2020/index.html","9939c6fbc399e8dd6c706f9cad6ec544"],["/archives/2020/page/2/index.html","674714980639d3f65d0200bfd1367344"],["/archives/2020/page/3/index.html","515b94ef645acadb4b39b394230d9e5a"],["/archives/2021/01/index.html","851a4da397689cff9d62de9b41b25963"],["/archives/2021/01/page/2/index.html","2a2dfdfa57aad391580596d93cd7b7bb"],["/archives/2021/01/page/3/index.html","69022d5fb979f88e5c9888ff0b46fea5"],["/archives/2021/01/page/4/index.html","6bd73338c8501e0680ac45f58560904e"],["/archives/2021/02/index.html","d2914fb44fd32d173e28f5dcd831a01c"],["/archives/2021/02/page/2/index.html","8de98063cedf1215ba223b34bbee7db5"],["/archives/2021/02/page/3/index.html","470bc3e3fc75ad4a6ef4e67009a80980"],["/archives/2021/03/index.html","e0ebd7d4e9bc5269b53828d87fce9cb2"],["/archives/2021/index.html","3b67fa04eb40aa1cdd1998b756679ae1"],["/archives/2021/page/2/index.html","02e96819b825384f8eae975fa678f724"],["/archives/2021/page/3/index.html","40b4d7fb4737dab421bb19406420f8c6"],["/archives/2021/page/4/index.html","c10088f571468be1708abf093a6f351b"],["/archives/2021/page/5/index.html","2e3b9bdf7e296eb84c51673df8ba73fe"],["/archives/2021/page/6/index.html","52c9ac949a2cc0c18a74a8e5f8dbe146"],["/archives/2021/page/7/index.html","effc2154add53cab35b4c0cd2a618cb1"],["/archives/index.html","d194a1c2c08341c4f72212c7c54919f8"],["/archives/page/10/index.html","6139e98c63a140cc763c2081f68ad20f"],["/archives/page/2/index.html","994651ac3b7df916e808774d9a5ef066"],["/archives/page/3/index.html","f584dd6ef3ef95c50a6f2e6217821b4f"],["/archives/page/4/index.html","3fe03ba671b2a97f6e8b20ec7ff4dfe2"],["/archives/page/5/index.html","700f38a869f125780e0a3be35c6453a3"],["/archives/page/6/index.html","4b829b2892875eb5a4a5c88c00803541"],["/archives/page/7/index.html","1e28aa53ef890dc477013d334f90c1f4"],["/archives/page/8/index.html","9a0472891f52fc81949776873ed84677"],["/archives/page/9/index.html","5e4d1c648bba3e973f792d33edbb7c6b"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","140dcd77a56c79d9eb0468ec0df6b3cd"],["/catchcathard/index.html","e9291c58bce68730cd21cc4e2b0a474b"],["/catchcatimpossible/index.html","ce8ac7a16e2b7990d9e0aeb78de4c0db"],["/catchcatmid/index.html","dc073d912aef351b621ce171416ebd82"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/categories/VPN/index.html","fe13bbcb138784a1ea96f39684de6f13"],["/categories/VPS/index.html","45d95855096c1d9746a5fd9df7c8fa3a"],["/categories/index.html","741e3567a6e7678199e13ca010e25114"],["/categories/下载/index.html","0531906d28acf81c8cee6ac025b93055"],["/categories/安全/index.html","e2068222176e09c235d1daf105b71933"],["/categories/建站/index.html","6ea8abdd1a726c034ef2b3f7e17d8ec7"],["/categories/杂/index.html","e7f31c2dede9ff50db6bce1be08132e0"],["/categories/杂/page/2/index.html","bba004861f4508c749e23152e15df4a8"],["/categories/测评/index.html","6880be07c6dd207df6b7fb5070d6c2ad"],["/categories/科学上网/index.html","55964eb3c948779bfdb09254573b4e5b"],["/categories/科学上网/page/2/index.html","d8ccc623171308d5839d719247158d9e"],["/categories/编程/index.html","a3fbac608f4ada3dd9222244acee1a5f"],["/categories/网站/index.html","b5a0ee522fcc46cf72aeeb8ce597f428"],["/categories/网站/page/2/index.html","f3ebe798bdddb13d40ef3deeaa6aea9b"],["/categories/软件/index.html","6d76b9a5d7cbf59093abf68ace394c27"],["/categories/软件/page/2/index.html","1b0314b453f872084b8e3eed82682d33"],["/categories/软件/page/3/index.html","c3653969fa509b83faf0743049d3c873"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","4473554e6c1f21094ad64df36489a3b2"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","c518ffd42891a9feac3448e8a5e02307"],["/ios/index.html","60fb536f7f744e7f0d6a1f8760e9f656"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","35dbad3a47d845a1030f60eaf9af2b2a"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","4e80cc2b67e83f7ea51e244b91b1629f"],["/page/2/index.html","1a41d3313f81d250e2debc12d76b1718"],["/page/3/index.html","fb5f74c205da0795fd118bba5114f4ae"],["/page/4/index.html","3ff994d96fb67d6b41e48098904aeeea"],["/page/5/index.html","3c2df2ad0ae8c8258a05a99a0e2f612a"],["/page/6/index.html","8db45cff8d48417054ea8b3937fbd0df"],["/page/7/index.html","dccf8b001c02e65b1c8c759c6e60a60b"],["/page/8/index.html","9b07b65e7546b35b5655120cd485bf74"],["/page/9/index.html","f93640fb6ca50b818ba936827f9fceb6"],["/payment/index.html","70f4c156f9e72fbc59af0296f98eb202"],["/privacy-policy/index.html","0b9fc82b7368967361f3d79f3e5bd987"],["/rss2.xml","0ab27348383dd47075cb3d012357d164"],["/search.xml","9390f3d1b0d0e6302d6a806cd6d2f520"],["/sitemap.xml","ee4aace09639a132051cbec4e4ad021b"],["/sw-register.js","04c7549b2491b0d8d7e158d5666c1008"],["/tags/5t/index.html","7819211b04537ef583ce8156700166b7"],["/tags/Clash/index.html","57b0efd55cbd3cd4d68a1cfa6d2012ce"],["/tags/Clover/index.html","c8b33e68e2da02ddb57c3828bf829870"],["/tags/E5/index.html","3c0f7a28cd3ce21e286cab4744d2afff"],["/tags/FTP/index.html","da3e7082d33b9dc93b215cd4b25cd7f5"],["/tags/GitHub/index.html","48adf55edffc8d0750fbe1c7e4727ed1"],["/tags/Heroku/index.html","c216c22139de8dce9909bac5405de99a"],["/tags/Hexo/index.html","646bec22fb9ab7a78d5b135ea547f65e"],["/tags/Lenovo/index.html","e940764ba3cad1c968e9c1acca61d0d1"],["/tags/Oneindex/index.html","7437b9193602696d493eb6555d4931ba"],["/tags/QQ/index.html","9eb0a6fac7c079d4cbb7907a9e430258"],["/tags/QTTabbar/index.html","fd859332cc47fbf355ae1b64986dba92"],["/tags/RX文件管理器/index.html","08096267a996c5ed1c1752710cddda2f"],["/tags/Todesk/index.html","ba43506dd2cedfa00aac7f8de8a9f714"],["/tags/Vercel/index.html","4592dc188e6fb59aba0488fc9c8299ca"],["/tags/ads/index.html","ee465bcb290197c07c8b746ba5614b34"],["/tags/api/index.html","52997ece644b9f1276206461be6ebaed"],["/tags/app/index.html","e001a8fe584b0d64fa123a5d49b2fc54"],["/tags/blacklist/index.html","e1e5537f25e528af5442451035ee7dcb"],["/tags/butterfly/index.html","c52dba1f51bc3a666e58cc7e90ea1e57"],["/tags/chrome/index.html","ca87f4ed77f51452159870618decd254"],["/tags/cloudflare/index.html","1dde2ddb7405a80dd85a49f8d11e45a7"],["/tags/cmd/index.html","7b8535b08efd33a14a9968ab774c3b35"],["/tags/c盘/index.html","ab22ba38173b7d5ef277075398a408cf"],["/tags/email/index.html","a06c9fa54b9b18785ff3f3cdbb642d20"],["/tags/ewomail/index.html","e616753b648b20a25f6966345b3e530f"],["/tags/fiddler/index.html","7e8aa95f7fc5c8784278fcb70344d5b8"],["/tags/flags/index.html","ed3dfc951cba25f6483656547cc7788b"],["/tags/footer，页脚/index.html","2207129ec41ccc214a32b3c362d2d05f"],["/tags/galgame/index.html","ca6d6e5df85a5082863ca6183a58781d"],["/tags/git/index.html","7fb94ce97a367cdaaca9f61f4c1692cb"],["/tags/gitcalendar/index.html","d14cc0614011c9d110b8a9afb2a26f64"],["/tags/google-voice/index.html","a5721da4e3b115825ee8b256dfbb0add"],["/tags/gv/index.html","a3306e31e9b2fb2c0ecd141aaf82f568"],["/tags/html/index.html","c8e21059fc6b3e5b47e4ef133e16a7fd"],["/tags/index-1.html","625efd6bbe0da6b91e06821342742d2a"],["/tags/index.html","8c1e5119aa74733e2b2afb8322dba605"],["/tags/js/index.html","4e3f0cd0dce9f5be3ba2d348ffcdf472"],["/tags/jsdelivr/index.html","eb62d3452e0c5f7f1e3d3513fb676b79"],["/tags/linux/index.html","7d3670babc37e4c76e59f931dfd2411b"],["/tags/madVR/index.html","f517a1b96c57c766a2e02281fd9f83fd"],["/tags/markdown/index.html","7b2295531b15fdbd3c50a1c202c6ac00"],["/tags/maya/index.html","4b7af98302372611b83f76c591c472ad"],["/tags/mklink/index.html","e512c531c923c1c9954bb67127a11d5a"],["/tags/office-e5/index.html","7d3523e48f2952aaa68a63f47134a9ec"],["/tags/onedrive/index.html","4e107fab7a7902f11a8599e7f8b0f45f"],["/tags/picGO/index.html","095dfe673f90e44aa6d48572b51eecee"],["/tags/pixiv/index.html","30014c3d5625e3a3997d599d79e07eef"],["/tags/potplayer/index.html","a413ec52f28eadc51375e92178d04d6a"],["/tags/proxypool/index.html","1609bc09b79b7651f742b403e36d4968"],["/tags/qbitorrent/index.html","cec9ed0408b99938b1620756f7f38a3b"],["/tags/raidrive/index.html","735562b655d454f2dd6cdcb110eeb453"],["/tags/screen/index.html","a8a47bcbefed40232fffcdbd9d943a97"],["/tags/speedtest/index.html","9d3fc7f992b578006d6ce720aa4f6385"],["/tags/ss/index.html","944bc863cde83acf81aa82a79eb3b92a"],["/tags/ssr/index.html","646b02d7b3e2900d1ec63c735bc55934"],["/tags/surfboard/index.html","1c97dd2d773c597b32bcc07a7d4268f8"],["/tags/tap/index.html","6505bbf7b9ffba04ca246cc0fc8205bc"],["/tags/telegram/index.html","e21fd9f62b3809becd5d23d551f88a13"],["/tags/telegram代理/index.html","4b207538d5fbc73e4563efca35940e68"],["/tags/tg/index.html","419303b9d07a7472e2dc98700931db37"],["/tags/tg代理/index.html","ea7dfd75765145f8d165d14c89426da2"],["/tags/top50/index.html","babe0e4b6da2267820087529775a2ccd"],["/tags/tracker/index.html","012a9a97acc025de6c9bf005f2c0cf02"],["/tags/translate/index.html","dcab0262db2f0e74c894bb1cfbe2cfdf"],["/tags/translater/index.html","78c22249f5038f43707e1f6d2be56216"],["/tags/tun/index.html","6bfea2ffaff617913b76e8d7bf868e9b"],["/tags/typecho/index.html","cff47c95e748b8d7308b40fbb826d27e"],["/tags/v2ray/index.html","c6bb1bc62405bb9ec36289fa08d64052"],["/tags/vpn/index.html","18ecacf6950b19ab6329d088e3618eee"],["/tags/vps/index.html","206170d38ce5a04867fe143d8475f911"],["/tags/windows/index.html","95be6c4e28a9efc310d96ed5bdbf8bff"],["/tags/windows端/index.html","87da0bc87f4e7966a98f7d22eecae2f4"],["/tags/xray/index.html","4847e141d167d65e12c8698afeb1cf53"],["/tags/下载/index.html","3a6db45585f1ac623debc9bf76653c65"],["/tags/不限速/index.html","f810377742a3c3c924d8ef22e890b2b0"],["/tags/个人网盘/index.html","336ea98f410d74967b51f7b77f909b16"],["/tags/主题/index.html","825c0a8bf1f714e837ae97c311641452"],["/tags/云便签/index.html","e4a4ebfc980f4fe3a2129be2a7943b0d"],["/tags/云盘/index.html","84a7362e948a9f861e83427e7b1ee800"],["/tags/人人/index.html","dcc67888e3f3bf214623a4051b7a33f0"],["/tags/代理/index.html","fcb2fb49c8e74675ebc14b396acb4e41"],["/tags/代码/index.html","66c8ae6f4a0b5cc0827ea70140d40205"],["/tags/优选IP/index.html","c89338ad409bb73c8ea752f2ad2a7527"],["/tags/便签/index.html","dcab9003e871a6f82aeec53cf9d1b9e0"],["/tags/保号/index.html","ded47c141910b283fac1f59d7768ef00"],["/tags/免费/index.html","09b130077fc3a7bc2a6a7588f1951c0a"],["/tags/免费节点/index.html","94112998547bf4ad761c1043213238fc"],["/tags/加密/index.html","0c460b7bce5015553a0e94faa5a25dfb"],["/tags/动画/index.html","82eeccef693b76ccc6c6d3574b7c2ed5"],["/tags/博客/index.html","2c67c8175dd546471ff71a79b86bd3f9"],["/tags/历史记录/index.html","e39e91013628a5a6fc56007315dab2ad"],["/tags/压力/index.html","65a550a2f76e16b7574689d93044ad37"],["/tags/压缩包/index.html","adaf3b95064cd72fafacfc3ea7bb668c"],["/tags/反代/index.html","f3f9c24bc014b7ecca16f658d6036075"],["/tags/可视化/index.html","7f2fc7e0414940d694cd3b51f7b36992"],["/tags/命令/index.html","b91df4bb9981d4cf9572e8f809613230"],["/tags/国家/index.html","169811d4cb8decab6a7ac9ecb8f76c61"],["/tags/图床/index.html","575a9098e61ac949f8249e0e3d5b61db"],["/tags/图片/index.html","2bda36ffbe3dcc4498442b7a0146be3c"],["/tags/域名/index.html","70a07d3cc20e46d31a82a7deddaa7220"],["/tags/多标签/index.html","5bacc10c7ce8c548ae298637f8dfdd8f"],["/tags/存储/index.html","172bc865e2146a092eec32250a6fe3ba"],["/tags/学习/index.html","cab8d0ca1cdad342a508e7291b50ac83"],["/tags/安全/index.html","b5e6aa07706df6e160ef7d1788a855f4"],["/tags/安卓/index.html","909d1a76c5755c947c798af98a7028f6"],["/tags/宝塔/index.html","e29190fee8760a2ef7a5467df6b74596"],["/tags/小游戏/index.html","d60b205237ee948897bcf4903663d83c"],["/tags/广告/index.html","f31c0dbc4a591b88b6ddce74e8a621d9"],["/tags/建站/index.html","34529d9646e2118fa8964e092045c91c"],["/tags/影视/index.html","7470c0d0d1c1a12186e25557f9f8a8c4"],["/tags/快速启动/index.html","8a95e0d3627e6f26c913617c4530a9d0"],["/tags/手机/index.html","8b0454551434cb8f0c971d2146a05496"],["/tags/托管/index.html","91b07fd4908549f5ed8582a06b4fbda3"],["/tags/抓包/index.html","de3c48f0f0f2ed6db819805505576157"],["/tags/抓取/index.html","968eff2bda30fad9d5c9685797b4e64f"],["/tags/投屏/index.html","92d85063a9f30112f138761eedc253a8"],["/tags/拓展功能/index.html","fe8dc3ce83b8015b9160151154e43080"],["/tags/挂载/index.html","e9dcefc5cf542e95d7dfa5362a7e894f"],["/tags/指纹/index.html","e8d5be4bfa23be66ddf5624c1ffbeaec"],["/tags/接口/index.html","a134927d49b90742d7fff9689349cd89"],["/tags/提取图片/index.html","5fe9e5d10ff9ab65ee0604d57f6eb60a"],["/tags/插件/index.html","74ff47f414a3f08fdf8515f6a563e944"],["/tags/搜图/index.html","77fc4181f616e05f60c21b44dadbfd87"],["/tags/搭建/index.html","eaa3fc2b7e33c7910132114bf0573445"],["/tags/撤回/index.html","801d5523c078f4da036267c319058374"],["/tags/播放器/index.html","3dec7c6dccf8f765b8a2cee9e10313d6"],["/tags/政府网站/index.html","6637d97137b83a7c4d1dc2e85b00bcfc"],["/tags/效率/index.html","fb20f50aa0e84039ad6473ba25aa22fa"],["/tags/日历/index.html","b5dfdd3c63094a25fa6d872c5e6c4f56"],["/tags/服务器/index.html","58593a91cedc20375dd37fab881bd129"],["/tags/机场/index.html","1f6546d327c02cc57196b812a56a2545"],["/tags/桌面/index.html","a217e624c822b4790df613c14f1703d3"],["/tags/梯子/index.html","6c455a5ca805d71bc5797b49a1209cf5"],["/tags/检测工具/index.html","a3174db2744168fc5cef541aa81f296c"],["/tags/汉化/index.html","decab3703097a4e6ef654edc4895b5dd"],["/tags/测压/index.html","69700e78155c4e0dd5f97ec47e26269a"],["/tags/测速/index.html","a6ee2084d45d57ee051f3d3e5b0f63b6"],["/tags/浏览器/index.html","befe6ab0f55244b10039b2a518953b07"],["/tags/清理/index.html","598cca8353be19e12a73bf7a0bbcb372"],["/tags/滚动条/index.html","64b6fef80bcdfec281949a223957b3f4"],["/tags/灰色歌曲/index.html","1c1f737ab5f3d3594d97b09799456370"],["/tags/电影/index.html","75160e5f520b0a84d3997cd3a4babbc0"],["/tags/电视剧/index.html","7c80a1a67af37e66bf7ffc01367f48ca"],["/tags/白嫖/index.html","36fffa6a0f532373f870f1ccb00f140f"],["/tags/百度/index.html","8c1254771a3570b65537e5e91dba3e9d"],["/tags/百度云盘/index.html","1878abc1d33b399ffec0fa122dc0e572"],["/tags/百科/index.html","c0b7822e6c9aabf2e3d76d9f5c71974d"],["/tags/短信/index.html","dbd0040895b1e69e4034d3464f1e73db"],["/tags/硬件/index.html","5b3ce8a5338608068287c629ccb901a7"],["/tags/科学上网/index.html","4314d81e325dd353c2fe21197912103c"],["/tags/空间/index.html","eb61b7aea0431571d304f8ea7ab4df26"],["/tags/笔记/index.html","e6348ada2549e17ba602fa2e8d484cb6"],["/tags/简洁/index.html","026926ad5d3d69827c4d88cbe55b675f"],["/tags/简约/index.html","4f3be587decd671e3d9b0f1bc2cec9f3"],["/tags/维基/index.html","4ff69c604d52378af228b08f853cf640"],["/tags/网易云/index.html","2c3e74fee10d2939c84d21053ce4166b"],["/tags/网盘/index.html","562863db9ce928d3464e047e7caa78ea"],["/tags/网站/index.html","669582051a4c2ce6bd9900fe9f6f07a6"],["/tags/网络/index.html","7ef37d4923467b9afbcda5cea3fd9d64"],["/tags/美化/index.html","f71ad46e93bedea13371d9d88dff24eb"],["/tags/翻墙/index.html","79cd6ed31df44c1d651dfce2ce2d78c5"],["/tags/翻译/index.html","30fc2fbc2266abcd40613de853a09b2a"],["/tags/翻译器/index.html","69c5330fce6737d895e3822d5b13e1a4"],["/tags/聊天/index.html","b7a1e6882458c5a9fd933596343ac859"],["/tags/聊天室/index.html","d0ad92994e8eb3af64b6fe4413cb1358"],["/tags/联想/index.html","276c9a56351c3d5424065078f93fb25e"],["/tags/节点/index.html","fb77fe4c734ad68273d09c1eef5c610e"],["/tags/虚拟手机号/index.html","226d9dabe885ce531d249e17dd88763b"],["/tags/补丁/index.html","a33759039cd39e0788cbfea599da56c6"],["/tags/视频/index.html","aca03aac31402d26bd95692fd9be871d"],["/tags/解析/index.html","7614dd3e289f02482bc29ff63c6e8963"],["/tags/订阅链接/index.html","7198ff2604d174a24db9acb1121b802f"],["/tags/记录/index.html","76b896ab08621e19efad389c638f5a0e"],["/tags/识图/index.html","30c03cb37cf076e7a6cff824261820bc"],["/tags/语言/index.html","9c7f461a70b78b93d5a3c4cd4bf34664"],["/tags/资源/index.html","3964d826ce45f466459b917cd2e0ac88"],["/tags/资源管理器/index.html","090e73e50169b0e53105b68f5c11e593"],["/tags/转移/index.html","14348e57af0e8736f90aac91b410c3ee"],["/tags/软件/index.html","ed64adaff5ef05d662cbce2b65dfc157"],["/tags/轰炸/index.html","44009f5b3a05d03cd77867a0f8a2d0ae"],["/tags/迁移/index.html","3a75e9f34efd89ee97ea832206ac0b0d"],["/tags/远程控制/index.html","ed59c56dcc7f01ba10a1bf64c244b0e6"],["/tags/连接/index.html","0e3c8731b4809671537d0c2155529af9"],["/tags/追踪/index.html","4a938e5c7ec13a772bb354edadd7ec27"],["/tags/速度/index.html","aa43efccf0b0100af55f366c453e5422"],["/tags/邮箱/index.html","58fb7917ffb1b1cf98a0d0206c17ac2c"],["/tags/酷炫/index.html","d7eb4370957cdf1e3995000bdfd1c63e"],["/tags/钓鱼/index.html","7352ff39acd14f8a3e813d0e1b08dbe7"],["/tags/镜像/index.html","0482171b98150764ec0efd57f13f0095"],["/tags/随机/index.html","330b9fe00c291b79eea4fa24a46a9579"],["/tags/隐藏/index.html","81f1fff74fb3805e522858462342813d"],["/tags/面板/index.html","ea2e4ae36b7198cdcbcaeec023667dc5"],["/tags/音乐/index.html","b6379c28b3f9af1fe0cdedfabb418773"],["/tags/高颜值/index.html","a86bc0a96750a2a3a55cb256c8c9043d"],["/tags/魔改/index.html","113534536d28ef7c69c5065a882794d7"],["/tags/黑名单/index.html","c0b6b74f926838b66097623deebfa4c5"],["/urls/index.html","bdcb1e0aec9cadefaec2db329e59cad0"],["/vps/index.html","e354f1ef3e46cf695b61c75ed9b7720f"],["/支持/index.html","c9cb73f43f9e7adf5da7f7763d684ff0"]];
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
