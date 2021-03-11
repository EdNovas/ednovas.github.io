/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","a5de85969f5292778e2082e6e0725b1c"],["/2020/11/29/clash-windows/index.html","b32d3a9120037cc3bad03a6c26863e9f"],["/2020/11/30/websites2/index.html","f98c62f80684a2c41e4ff0e16f6bd1e3"],["/2020/12/04/iphone4s/index.html","aa40d3edb1a31c9fe6a8bb41fecc8c07"],["/2020/12/04/onenote/index.html","4d0e2dd2758ae78f74d73194f8e9bbc7"],["/2020/12/04/wesites1/index.html","1fde8b6e31cc406294bcd536a2e95a6c"],["/2020/12/06/nokia808/index.html","848ab69b603ad2745e4b4120b9bee1e0"],["/2020/12/07/ipad1/index.html","754bff57bb5f7920b83c2e8c3c3fb34d"],["/2020/12/18/freesubscribes/index.html","983259e94daf7a1b1844b6c4e2e51830"],["/2020/12/19/musics/index.html","e51a0d5298a9d66fc44213e07fb670d7"],["/2020/12/19/shadowrocket/index.html","c3b75ebba30f281675a6758884797d28"],["/2020/12/19/v2ray-windows/index.html","67707f5e9b66c34100e60f4b222647b7"],["/2020/12/19/v2rayng/index.html","040197774db21d11112140dff864b2cf"],["/2020/12/20/beoplay/index.html","ac6485eadb40a5e8b02595d76c0abaf6"],["/2020/12/20/订阅链接转换/index.html","954a2a1d4f2665b303ea2ec59cfc14f5"],["/2020/12/21/chrome浏览器下载提速/index.html","4d01a5fae9908c5d89e0f9721a42930f"],["/2020/12/21/免费128线程并发下载xdown/index.html","deec95ea25ec33e9533d24ef0a8e67b0"],["/2020/12/21/免费32线程下载软件ndm/index.html","8380e889ebde4d8e7895a9c3d9f74217"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","375c9253f69c5a026241998c0a585e4b"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","5a624a0d9130ad02b9c18ab0d81c1acb"],["/2020/12/21/广告怎么知道我在想什么/index.html","06a1d4ec1836602c76712d5ca4fca716"],["/2020/12/21/无名·引子（小说试写）/index.html","559ea0661ac11b907ae77c3a875c9cc5"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","7bc5677c51775f512b92d0fca924939e"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","99dacf8f659ffca47516e9b233aab40a"],["/2020/12/21/高速轻量下载器aria2/index.html","51e33e76b601a333879acaec1b927b96"],["/2020/12/22/2020-cee-roo/index.html","588e4932843544768fee40d9b01000d3"],["/2020/12/22/firefox插件、github、steam富强/index.html","13fdf2685e0616afd3795100611fe1ae"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","0c333e4375c0504b574c252d2494e430"],["/2020/12/26/python-day-1/index.html","3eef81e46e47a373cc1c74c67ce2d110"],["/2020/12/26/python-day-2/index.html","3745af739fbba2b0d1d3ff4ad964cd1b"],["/2020/12/26/度盘不限速下载方式一赏/index.html","02a7bbf49fd0250f0be66201f609be29"],["/2020/12/26/添加开机自启软件/index.html","8780ab130932cf9362dae3d40fa510b9"],["/2020/12/26/电脑端截图方式一赏/index.html","2a872f0fb4685b7364d1bc283450fd7d"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","b69770e19682719cabed74f3cbe846ab"],["/2020/12/27/最安全的浏览器tor/index.html","fb21fcac4efd61f700f5f35b1df83557"],["/2020/12/27/网易云刷等级和听歌数量/index.html","acce932426b3d5780cac81e9b5514c5f"],["/2020/12/28/freenom申请免费域名/index.html","0b3807c300f365787ddcf80f210d5631"],["/2020/12/31/机场/index.html","33c3fa5a428373510be38a4cbbcaf9c8"],["/2021/01/01/M1/index.html","004b62a91487fa401bcbb9b693eaf063"],["/2021/01/01/compress/index.html","f3082d66e11b76d3ce50d38ac122f599"],["/2021/01/01/infinityfree/index.html","efbfce277d8282f9f8ee65a025ae81ea"],["/2021/01/01/硬核翻墙/index.html","1fb4e4f054474a2fe15e4f7ce7fb163f"],["/2021/01/02/qq/index.html","c6f444f21526f52732bbca1c4ac9687f"],["/2021/01/03/netch/index.html","a9a49be7160519e603159bf070ef6da5"],["/2021/01/03/waifu2x/index.html","3c5f7523846ff8fd037a395becb7f894"],["/2021/01/04/ads/index.html","48a9e47afe4979ccb5b6a6ec081b8da4"],["/2021/01/04/games/index.html","69afbf82b1394bb0ee3ea7185cfe68c4"],["/2021/01/04/heroku/index.html","2655b6f1e44fdcaa4ce0cd97cb4cdf8b"],["/2021/01/06/movies/index.html","641e834fecd6779a3dbf6d18252af31c"],["/2021/01/07/google2020/index.html","51895c8d8126d291e38a0f2d9f4292e7"],["/2021/01/07/lucky/index.html","45597e61eebdc5359ea16984e5fe9c21"],["/2021/01/07/spotify/index.html","f8c6bbeae023e458001565a0158a8f8b"],["/2021/01/07/thunder/index.html","2209d2dc443575b720e43669535d1f96"],["/2021/01/08/adguardhome/index.html","fd5c76f8f5774f14fc5d9dd4b86491ce"],["/2021/01/10/IBM/index.html","2e7469aacdff82aecb3f0844420ab275"],["/2021/01/10/potplayer/index.html","6561fa82a934e91c5245791f040f9e6f"],["/2021/01/10/sakuraanime/index.html","ff28886aebdcb4693d96113d25cab698"],["/2021/01/10/美剧星球/index.html","8c98843a608166bc7694214b9cde9276"],["/2021/01/12/telegraph/index.html","3ab5900a02a03f40a6432c120432b295"],["/2021/01/14/comics/index.html","6f72e19ebbddc8358eda0b00366b5998"],["/2021/01/14/ftp/index.html","7934776555c0896c93706bfe68a2daa8"],["/2021/01/14/oraclecloud/index.html","2a47ae5de498974c0c09239dc0a18b0e"],["/2021/01/14/porkbun/index.html","a5f929b57c96b63ca00046c6e3f2d94e"],["/2021/01/14/powertoys/index.html","2080a6118b2cf78d7096d156e4c32f80"],["/2021/01/14/taptap/index.html","b9f71bdf44b97c534d8ddd3ad2298684"],["/2021/01/14/ubuntuvsftp/index.html","7cf903f7f84340b112ce758634e06a59"],["/2021/01/14/小说/index.html","e65977cce3ebfd6ab02735d0f73e10fe"],["/2021/01/15/freeproxies/index.html","38cbac37200a7b41b2c58f86399d9e22"],["/2021/01/15/incaseformat/index.html","b5b55675e5f208e454ffc5457c3defd6"],["/2021/01/16/euserv/index.html","a84a84467e3da6508f88da0e29c5f504"],["/2021/01/16/winxray/index.html","6757eb3a63618796a410c4a5dd76f74e"],["/2021/01/18/qqreadhistory/index.html","2da48d2f5b20a438d09110cc7c5b5fb9"],["/2021/01/18/qqrevoke/index.html","6f38cced74f04ed192be04e6def5466d"],["/2021/01/19/freevpn/index.html","89b50c3e9a4da08d2ac52fadf0ad410e"],["/2021/01/20/browsertrack/index.html","532206308b270626203265b7ef6d2ea0"],["/2021/01/20/v2ui/index.html","fbdf26ca572c0e2520af7ac2a0b29f26"],["/2021/01/21/failedtoconnect/index.html","ddd14a1e23376933b7837b5da0099cd5"],["/2021/01/21/gitcalendar/index.html","236cf9a365503a6dbdff578cf514101d"],["/2021/01/21/markdownformat/index.html","a28d8d3aa9898d9bc83961fd3b6f3e6f"],["/2021/01/21/markdowntable/index.html","22b480e63e527a2b57aa27e2771f4784"],["/2021/01/21/vercel/index.html","d0d4fa4099d6b6a25449c4e68a26ded2"],["/2021/01/22/hardware/index.html","97a0da9e1bb2a3d2133ab1d014262e66"],["/2021/01/22/muviz/index.html","0f7626f60631d99bbb6d6b989bf92226"],["/2021/01/22/randomapi/index.html","08a2498b843a5b23aac03caf3f9eae1c"],["/2021/01/22/searchimages/index.html","f23985b9fcf3e91f02ddeaaa9bbb2b3d"],["/2021/01/23/RX文件管理器/index.html","565768c3f7f187c7e9ec2ba73d8df0c7"],["/2021/01/23/chromeflag/index.html","02fddb9eb3ef05e534e3624822601a3c"],["/2021/01/23/qttabbar/index.html","5da632f4c67a719122620dd6b54f7885"],["/2021/01/24/githubspeedup/index.html","16f47ce2a92104936bbb45a8e390b261"],["/2021/01/24/jsdelivr/index.html","81baf64f2c7390e56868da25b4e126d9"],["/2021/01/25/note/index.html","28fe21a8ada9ce9b107de33f65747e93"],["/2021/01/25/soul/index.html","a7cc44154f7d95bdb7c9db87c4a34c85"],["/2021/01/26/herokuxray/index.html","55d5fa8437e393850c3505c77eb62736"],["/2021/01/27/proxypool/index.html","93941d4c7d6a0570db16ec6bda494a08"],["/2021/01/27/tracker/index.html","046a73ebba03ddbae35c74a3e205a732"],["/2021/01/30/pandownphp/index.html","b4cc669397199a299841ef1a516d1e47"],["/2021/01/31/newgroup/index.html","5778348436ee7ed649faf6b4351acb32"],["/2021/02/01/clashlanguage/index.html","0727ae8f6601ecdf65b948168a4e7a0c"],["/2021/02/01/encrypt/index.html","c174ed49280ab1b0ddfa5f666fbfb1b3"],["/2021/02/01/footermotion/index.html","2c809c34a7c6b2376cd7e6770440a1a4"],["/2021/02/01/gitter/index.html","521fc51c8e7dd7fe71e0c398ad0c76fc"],["/2021/02/01/pixivtop50/index.html","f38abf24b1fc4c59425e48394aa8e93d"],["/2021/02/01/scrollbar/index.html","9066397a87161784466498eb845d62b4"],["/2021/02/02/clover/index.html","9c9ae440e96c20516323a3e7abe3bf0a"],["/2021/02/02/maya/index.html","fb012cc83944c044849ed9dc3684d40b"],["/2021/02/02/speedcontroller/index.html","d84afebfc5b5387ade1e24c85f741f8f"],["/2021/02/02/yesmusicplayer/index.html","225e27ccb413f6dc17018c52170fc28c"],["/2021/02/03/lenovoonelite/index.html","37bfaa9af4e7cd96a14f039ca63c65c9"],["/2021/02/03/skipads/index.html","60f624c4a9a4746a4eefdf09a66c8a99"],["/2021/02/04/picseed/index.html","5c343c613f72e4703e912d0199cdb800"],["/2021/02/04/renren/index.html","b214f5924e015766261c3df2bd45f1b8"],["/2021/02/04/serverstress/index.html","f1950f327b77610a81bd955965f07686"],["/2021/02/04/wikipediazh/index.html","ab2626d934bfe3766f7d25b08ef1f86f"],["/2021/02/05/googlevoice/index.html","559d9e90ec216f791c7f70968c3bdf87"],["/2021/02/06/clashconnection/index.html","b657d3fba6d99ad746bdc2e4b0e02258"],["/2021/02/06/gvtransfer/index.html","7499bd6e1e346d4b15857d3c9daf13cd"],["/2021/02/06/todesk/index.html","e93db3247ceec8f019d18b9770aa8dc0"],["/2021/02/06/vpnblacklist/index.html","9a0b9687d708c0846a9a9c3ca2d00da7"],["/2021/02/07/mklink/index.html","9b2e75ec249e252a5025c0df7bb60550"],["/2021/02/07/speedtest/index.html","bb2602d4fae03c553df23fdab54cac30"],["/2021/02/07/translate/index.html","9ad4b2cecf69c282d36ab13a447bce77"],["/2021/02/08/ewomail/index.html","1a59a555bdafb3d874b440a517515a22"],["/2021/02/10/officee5/index.html","a6cf4025759d4f272f30932f0b3b2a71"],["/2021/02/10/raidrive/index.html","13eb1eb344c6ac9bc61f7ffc3c5b6ad9"],["/2021/02/13/e5sub/index.html","af92cce6021eac52f63a383fb0f06a70"],["/2021/02/14/screen/index.html","00a3f8767d01a2633690b24698094aa6"],["/2021/02/15/clashtun/index.html","b6a460ef9c75f42fe8aa066e9992f250"],["/2021/02/15/messageboom/index.html","c232ef426db860fec25826a2d9f64d0f"],["/2021/02/15/oneindex/index.html","2c46464264a931c5c2c497450903f978"],["/2021/02/16/govsites/index.html","154b26af9168bb56fd656b67e75bb74d"],["/2021/02/17/hexototypecho/index.html","13171ef529f7428629ce13674bad0da5"],["/2021/02/19/fiddler/index.html","33ed15544dbe3ee338e3da1184129b5e"],["/2021/02/22/potplayerset/index.html","d4dcabe043a6ee14e3e6f86114e555f8"],["/2021/02/22/studyresource/index.html","8828f8a5f974a8fbb179bae31b9fe0c5"],["/2021/02/22/telegram/index.html","d06ce27b8839fa53e6c0e7c911ea3398"],["/2021/02/22/videos/index.html","64cefb41b967d9c15239ec56ae95da87"],["/2021/02/24/mtproxy/index.html","6a998f61fb68218ed575854153e97063"],["/2021/03/10/catchcat/index.html","9840a8e6d86f531249e1f83fa62cba97"],["/2021/03/10/neteasemusic/index.html","85fcddc26800629bbf75b390dc094254"],["/2021/03/10/surfboard/index.html","6cf24df6b7d5bf0262a40ad17d9647db"],["/2021/03/11/vpnandjc/index.html","e46b63bc12b0fc12875603e6a9b2af48"],["/404.html","577180c93c2118d31c26dd81654917d4"],["/archives/2020/11/index.html","3927ff1db1bd958ff29e4688be890fbf"],["/archives/2020/12/index.html","b505dadb8b85d44e81ec74dd5398029b"],["/archives/2020/12/page/2/index.html","29802d90dff2ce050506110eee297be6"],["/archives/2020/12/page/3/index.html","c797828286b3820c510120d9b18af1b9"],["/archives/2020/index.html","d8d1d3c66d9d7fe72ce08fabac4a3093"],["/archives/2020/page/2/index.html","5ad654fbd60f8555a2326bbfcb0890ad"],["/archives/2020/page/3/index.html","7c4b469d83b1f1ca30c6a579f67e0277"],["/archives/2021/01/index.html","3b2e4079a0e59e2f80f3932b5b5613a0"],["/archives/2021/01/page/2/index.html","811c66b1b6bbb22756b58450c8d09f36"],["/archives/2021/01/page/3/index.html","7a57bae6ee7d502ad46d18c7203df421"],["/archives/2021/01/page/4/index.html","c38b2bca772ae833da5563327e118823"],["/archives/2021/02/index.html","35caf028b5557720739a1ccec07155c1"],["/archives/2021/02/page/2/index.html","12fd4e969ba8ab7d9496a942ff50d043"],["/archives/2021/02/page/3/index.html","fe7bfdde35c3307b745a81878da8457d"],["/archives/2021/03/index.html","096b6d4ee5146915532a55b6fa8d297a"],["/archives/2021/index.html","15952bde1e695a81fb6016a5e5ac64b2"],["/archives/2021/page/2/index.html","60a11038a7033d55770169a9e55f2bb5"],["/archives/2021/page/3/index.html","42fad22920027e40a9b0fad00ed1cdc7"],["/archives/2021/page/4/index.html","0a1b92183a5c81cb200b5c563c31c9da"],["/archives/2021/page/5/index.html","0b0dd1427904887b2bcc828ec14e29c5"],["/archives/2021/page/6/index.html","ff38e1b4e21df600091b03df746050cc"],["/archives/2021/page/7/index.html","105a1f92f965fd5355b52c8541b6b2b6"],["/archives/index.html","e2bb26d57514e7446c1cd13bb5cc46b1"],["/archives/page/10/index.html","f268fe912d3b36a263b068eb3a21d29f"],["/archives/page/2/index.html","36f7e2836726c1b1e1996dab027d7031"],["/archives/page/3/index.html","561eb212cfb68455bf18c191fb9c0553"],["/archives/page/4/index.html","5effcbdc7fcffc6aee45f94b6043d220"],["/archives/page/5/index.html","986f2ac0414b3451985251beb022f44d"],["/archives/page/6/index.html","966fc8e859827829ef9e2c1d967cfb93"],["/archives/page/7/index.html","3d03538c6de3bfb6a2b52e57f2c5fef5"],["/archives/page/8/index.html","28046ab81a0ab009975f32aa7f4ef884"],["/archives/page/9/index.html","5fdaa5cf308d78535234986dce0764c8"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","140dcd77a56c79d9eb0468ec0df6b3cd"],["/catchcathard/index.html","e9291c58bce68730cd21cc4e2b0a474b"],["/catchcatimpossible/index.html","ce8ac7a16e2b7990d9e0aeb78de4c0db"],["/catchcatmid/index.html","dc073d912aef351b621ce171416ebd82"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/categories/VPN/index.html","468483f4ff324e19dcd46dd67f09b6c6"],["/categories/VPS/index.html","ed308c2e486948fc2f53eb15af7247f8"],["/categories/index.html","cfc60af2c99712242d8449d0fb09f1c1"],["/categories/下载/index.html","d2afce5a71b05ba821fd57c262f43fe1"],["/categories/安全/index.html","df1913f9b45ba6a7c67dcc3c38eb9dc6"],["/categories/建站/index.html","094f0f2d43435a239f403cd502cc420a"],["/categories/杂/index.html","e13e34fdf3af06b4f78b37e0d3fd603e"],["/categories/杂/page/2/index.html","b9f5c6cfdd5ba45e7beeba4289357958"],["/categories/测评/index.html","81c0aacf0a1dc03fc21f74f5c21679ec"],["/categories/科学上网/index.html","37ee200603d2a0023b7da9c7b5220634"],["/categories/科学上网/page/2/index.html","194f3bb840f3dce46f1eeebb4a831a5e"],["/categories/编程/index.html","850f40d0498f130cd35193781e431535"],["/categories/网站/index.html","cc2352afa3fdc5bef426d06e50998a4a"],["/categories/网站/page/2/index.html","82625cace977860d976ff7d272896ef8"],["/categories/软件/index.html","708361ec5306af4fc0582080dc771a4b"],["/categories/软件/page/2/index.html","cd649433ea54c7a2d147c2adc68d8394"],["/categories/软件/page/3/index.html","7f45498edcd426ed2b5ab202b62c251e"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","e6420955b568343bddbe46038ab776ed"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","44f66ff923d7e4d8909573cd484a1420"],["/ios/index.html","dcbbc52a0cab6e2ef1929b6276a98742"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","9c077938e491329fc0c927efbf7acdd2"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","aabe39d69e8dd8ce825634cb8f4e9fb7"],["/page/2/index.html","5a5008edd31d3d1e900d1da45f765291"],["/page/3/index.html","b921a3c76e13378d97c6c14e51f3eae4"],["/page/4/index.html","3c50c1977d7a98ed2d3695ffa20f5fa2"],["/page/5/index.html","eedc3427f8e40e4fe8702d1fe07b37e4"],["/page/6/index.html","956ecd8cff71bc5927e5a606760f58a5"],["/page/7/index.html","0e76e1686874b9c3601a45841ecf56cf"],["/page/8/index.html","3776ae560eb82f61bc7897da1637986a"],["/page/9/index.html","b4af7f2138a81b03fee77fb4bcd60926"],["/payment/index.html","5299eeda5a1f9627dc0ac6cc01a2b51b"],["/privacy-policy/index.html","c9fa5cb82c6fa3de724998c35bf60f19"],["/rss2.xml","f171be6164ee3b19610aad41aa29b6dd"],["/search.xml","7be9f3621b9b2ebcae9346d8e75824d2"],["/sitemap.xml","62cdf1cda2c7c91d944f315c0f8e7676"],["/sw-register.js","b8437fbc326bfcf87510479f86016894"],["/tags/5t/index.html","d12ba973de4dbadad2007109c886df7c"],["/tags/Clash/index.html","009ab54816897ba04c797769c22dee04"],["/tags/Clover/index.html","0e11efd06492a656977d1432fb691477"],["/tags/E5/index.html","4d59d145c584a66d2e790392494b9db1"],["/tags/FTP/index.html","1cd73bfa4a681295be6b7864d23e2dd4"],["/tags/GitHub/index.html","6c783a71f557cc0695ceb73207d01166"],["/tags/Heroku/index.html","c32460ff31adaeaae06f3a722ca4f2ee"],["/tags/Hexo/index.html","964fa4a99c6d7fcbee9bdea29507b7e2"],["/tags/Lenovo/index.html","7aaa7ae64e74aea39e3aae4d4666e02e"],["/tags/Oneindex/index.html","0d02c2ebb39f9a1714fe136c3f4b3bc6"],["/tags/QQ/index.html","28335e7ad6fbf3a5f4d5c4b1a7a0df2d"],["/tags/QTTabbar/index.html","c936f1277d5baadd8b3a469d1d65c067"],["/tags/RX文件管理器/index.html","2540f88cc77602b3da19c3d40efb23c6"],["/tags/Todesk/index.html","42cd11e8b3e5b78095588ea3c9cead09"],["/tags/Vercel/index.html","62b952b5f2c7424234b9e5547ae604e2"],["/tags/ads/index.html","beacbcee71a80a997c3cdf0b7577de1f"],["/tags/api/index.html","eb93107a8c2e76c95d631e1588644b9a"],["/tags/app/index.html","b0c2f3ea6255dc7591b201fd79aaa0b7"],["/tags/blacklist/index.html","a2f7579a72142aa3b2d28d19d09e7c92"],["/tags/butterfly/index.html","4506e38fdf017666785f2dc2fe29052f"],["/tags/chrome/index.html","0e59e78ba680a4a2857044814f3107cf"],["/tags/cloudflare/index.html","c181dc68a7e3cd820c34176458acaec1"],["/tags/cmd/index.html","38f07c7899a58f0992209a605617716d"],["/tags/c盘/index.html","e81d3d53cfe21f1c77111ca3c6857683"],["/tags/email/index.html","985241f0b04bfcaa474063acc44a19d6"],["/tags/ewomail/index.html","80bae7dd9198bf1c79f74250de22c732"],["/tags/fiddler/index.html","2bc275e5a57407175292a14d52510c7d"],["/tags/flags/index.html","6c81cd4088834202880ca33ee77c1596"],["/tags/footer，页脚/index.html","a1768196ba75319d41d96a3aecd52a33"],["/tags/galgame/index.html","e1971c4370879cdf417518cdb6f31e62"],["/tags/git/index.html","5d830e3da71279564990c1d9622749f1"],["/tags/gitcalendar/index.html","26cb0ad4129cd611d5e9fa23d0c8e6c2"],["/tags/google-voice/index.html","3d357365bdd41303b3da2a6a1c6bceb9"],["/tags/gv/index.html","e9653ba06ce07329971b3c76820de809"],["/tags/html/index.html","4c37c78348c37cf97519f1a110e6f436"],["/tags/index-1.html","915524d132cf5a6bb88dc0ddddda51fa"],["/tags/index.html","66ca63b678aa200aa89e0e4f3ac3f61a"],["/tags/js/index.html","21fd50c3c6ce16210224cc587dbd9ade"],["/tags/jsdelivr/index.html","bbc5a6a8a48059097f1f55b512a84171"],["/tags/linux/index.html","e236352fb21b1528d7dc1070fcd037f3"],["/tags/madVR/index.html","5a3bca1bae26cb300eea58132db8f4c3"],["/tags/markdown/index.html","9f5e6ba5bb1806f8606ed209f84576f8"],["/tags/maya/index.html","74f6d1e48baa86cf30299c41a624605b"],["/tags/mklink/index.html","ab40579ddd7b1ffbc346c36a1b886260"],["/tags/office-e5/index.html","5ce3460f6c7989a6c5f2e9549c4ca663"],["/tags/onedrive/index.html","3716191e92013bf55dea940d172d19d9"],["/tags/picGO/index.html","bf78a41a092e17e0e8d2c26021241566"],["/tags/pixiv/index.html","bc69bd7f85b9deadf6dd7a9679c3de6d"],["/tags/potplayer/index.html","bf19f03e723d46591cf420c0aef61348"],["/tags/proxypool/index.html","0467b05524ca885d6d814d3aced8c210"],["/tags/qbitorrent/index.html","818be8a90fab9a4ab0e7d6b1a4631eca"],["/tags/raidrive/index.html","d4285562d5e1aa5bc80d35d26b3f97f8"],["/tags/screen/index.html","fe96c8e8f59e5eda3d9fa2b9d4eefa63"],["/tags/speedtest/index.html","62662bdb49f8a035f4e80101e830671e"],["/tags/ss/index.html","0cb20edf6158f6cc0b9853ff49937050"],["/tags/ssr/index.html","1581ff4c453a877652cb730e03650b7b"],["/tags/surfboard/index.html","5124024a53978d4ba86950e32a25b1b5"],["/tags/tap/index.html","c9114080c9a26c2b254a75eeeb675604"],["/tags/telegram/index.html","0b42cc319e7d95a9d8753b9503443db8"],["/tags/telegram代理/index.html","d4b4b5986c6fc58a36a2d50a66d3acb8"],["/tags/tg/index.html","60b136555c8be083730a7805f5b5d42f"],["/tags/tg代理/index.html","35db2241e507f1820579826636df6d40"],["/tags/top50/index.html","067e324af714886a0635649fe6c7f3e3"],["/tags/tracker/index.html","bca77fc7af6820280885c6e900b85694"],["/tags/translate/index.html","e08629f56f607a62bbdb366c0321f65c"],["/tags/translater/index.html","484f8b0b6013b26736f42c0ea3ff8342"],["/tags/tun/index.html","ffd0c94bfc63595cc13a4f50a2538e46"],["/tags/typecho/index.html","25540145747ac6f64fe0c2b13332e577"],["/tags/v2ray/index.html","897c40098290129bd513b0e4b543e28b"],["/tags/vpn/index.html","b07952f416fd023150246f20fee14a40"],["/tags/vps/index.html","dd1f8590ce771a5e1b29884a34d14768"],["/tags/windows/index.html","50be7edb3027c222988375cd22cb5e39"],["/tags/windows端/index.html","9c541d283ac38337c4556c0897e11e34"],["/tags/xray/index.html","ce62691772ccf7edfb0923327b05ac51"],["/tags/下载/index.html","37bc8affa0027c692eaad7aad1894a76"],["/tags/不限速/index.html","c86b91c13dd4e3c9b343a8764ededa57"],["/tags/个人网盘/index.html","103e874d95db52033f5c85ab841285d1"],["/tags/主题/index.html","bd26c5b329864ffb1bed25af2af303e4"],["/tags/云便签/index.html","e63f0327ae46e1b3e379730b031c4542"],["/tags/云盘/index.html","6b2761db479a52f4e549aff357b1d536"],["/tags/人人/index.html","05ab8dd5c44710b9bff204901cde819b"],["/tags/代理/index.html","5f402d81a6bd6446eacc83d1283c8a15"],["/tags/代码/index.html","7cb0e53bdf196ac1cd43ecd27c34f958"],["/tags/优选IP/index.html","87c282e9479564a995b5a3b5544c62c5"],["/tags/便签/index.html","3ca5bd4b14c7fdb061b67d53631372a3"],["/tags/保号/index.html","ffed7572f0e9399544b485abe59b1e65"],["/tags/免费/index.html","e144d58da9fa9ab079e1790b352e566e"],["/tags/免费节点/index.html","3208b935674f456f3a4ce1a7d440e55b"],["/tags/加密/index.html","6cd139d693895ff062616822462bff45"],["/tags/动画/index.html","2b298b7f8a41ce50bccc0dc130de25e5"],["/tags/博客/index.html","0ff523aae92d5bfbddd9bb78e6c7bfbd"],["/tags/历史记录/index.html","aeb065ad70ac534a39b447481ab202e5"],["/tags/压力/index.html","5695bb8b56d798f69bceb5558e54bfe0"],["/tags/压缩包/index.html","2327149889cc6f9decce610132b206f2"],["/tags/反代/index.html","f9fc7ac7fbb38c5e8fd9b37f04775283"],["/tags/可视化/index.html","37f8857d684fee9bc277f682fccea2fd"],["/tags/命令/index.html","b91279b962ed791b483276c567183d11"],["/tags/国家/index.html","fe690111731bc4f1038365c790f53603"],["/tags/图床/index.html","466b8382bddf5a9a8f6e8b17b680871b"],["/tags/图片/index.html","403856b429b53d1b2f18678f5beb3ade"],["/tags/域名/index.html","698685eb6b0286aca0e3c3f1c9dc5bce"],["/tags/多标签/index.html","56b2c033d8807e25a2d82ace4d8a0039"],["/tags/存储/index.html","3984d71e1b2ab19ee0da7407f10053ae"],["/tags/学习/index.html","befbcaac9172f616bcd0df3e27d1ab39"],["/tags/安全/index.html","3f843c445ab5f35117b4b63363a85595"],["/tags/安卓/index.html","d7fb0ce29fac0e9df24818946b6ceb89"],["/tags/宝塔/index.html","074840ff7ae9048895a02223200c6001"],["/tags/小游戏/index.html","fffc317487ec6ce84ad7473f0ca0e059"],["/tags/广告/index.html","dbf76ffd383226eb1c9d9c1ddce86e46"],["/tags/建站/index.html","f7388d3780d353c22188fcb4075e7803"],["/tags/影视/index.html","4fcac360aa534aec0e06217cb66d2c5a"],["/tags/快速启动/index.html","65471037d997ebb8123215558804d68f"],["/tags/手机/index.html","27804dfbf5a0e5b7322dfa6863aff0bd"],["/tags/托管/index.html","8b18fe4773caf91b3a21e1cda02ca93b"],["/tags/抓包/index.html","9d4db83640bc21a9d7d8a1994a3e7a91"],["/tags/抓取/index.html","531bfe9d3f4f78078de19a07ce4108f4"],["/tags/投屏/index.html","26fa671bb8c56f11c611fbc78ef92805"],["/tags/拓展功能/index.html","977d8c5a665fe0680af2e2cccb88f2dd"],["/tags/挂载/index.html","c8615804cb4b64d51574a5c88d4bd087"],["/tags/指纹/index.html","f734f35666ceca2d099d92c6b5b2d60a"],["/tags/接口/index.html","951cded2f46ced32c6f45711d8a21ee2"],["/tags/提取图片/index.html","9737009ba0f7789f97cbf662cb927ecb"],["/tags/插件/index.html","fab53e15ae2c4981dbd26a3e52a3fd3b"],["/tags/搜图/index.html","93a143d9f89373224ae00b04c1bbf44b"],["/tags/搭建/index.html","8511844380131ba28bea688c3b34f1a8"],["/tags/撤回/index.html","25aa67eb41d494424d9196d0545a278f"],["/tags/播放器/index.html","19a41a46fd3183650fc42c60eb7ff723"],["/tags/政府网站/index.html","c12188c306cf74e3f698cb21c561f6af"],["/tags/效率/index.html","baf9df6996c592a73c030c543eebcb89"],["/tags/日历/index.html","d0d3230d0f97cd3d5dd1c3470e7fd3fe"],["/tags/服务器/index.html","67c58502b8474888691711e3fd6e2520"],["/tags/机场/index.html","4340ba59446b53aa3059b1c4d47b5bbc"],["/tags/桌面/index.html","c49987f0ee49365060770a34f9fc4215"],["/tags/梯子/index.html","f4d7e66f6cffe4ac4f02eb9f1cdfafa3"],["/tags/检测工具/index.html","5821aa7c3b0aa305a19342572b93b905"],["/tags/汉化/index.html","4c4813d8b6181c8eeb37f646e8460dec"],["/tags/测压/index.html","87e48194f721dc4221fe5c1452f063b2"],["/tags/测速/index.html","bf6ae1786ca999f92b0e536b25a026a0"],["/tags/浏览器/index.html","2fda9d35b8a2e182fbbdc12ccfb877a4"],["/tags/清理/index.html","3a67548eda2153a79d7a91e94317b769"],["/tags/滚动条/index.html","95f94de907c84f6a75cea532425b5459"],["/tags/灰色歌曲/index.html","b5cc71376f56f33e9fc79635b617d3c6"],["/tags/电影/index.html","a77d5ce251d567b683fac463670e4160"],["/tags/电视剧/index.html","7058886a0254b7c6a52a56eaba0ce8d5"],["/tags/白嫖/index.html","6c8e4b9ee1b9044952985da03b3f909f"],["/tags/百度/index.html","bd1c5442ea2383dc2c8222365c642927"],["/tags/百度云盘/index.html","a63eb0498e253741c494e930cc673eee"],["/tags/百科/index.html","73416629f12a7f3673fda863f596309e"],["/tags/短信/index.html","38a17395d7c5659de3eca262cb2dd312"],["/tags/硬件/index.html","a76811f2227365d2b01bab67c1e93696"],["/tags/科学上网/index.html","472b6ebdb04aaa9ba0d0b3b934e864f4"],["/tags/空间/index.html","e66f522582322a87882a9bdd75e01fb9"],["/tags/笔记/index.html","5d43d097ef9bcf63be78d274eba2bfa5"],["/tags/简洁/index.html","a1e27e8a2b8160a929c4cc963d0f1e43"],["/tags/简约/index.html","9d77e68fd8b2a8ca3120be0e226c52bf"],["/tags/维基/index.html","c372c47328be681e2da4d2921cf216be"],["/tags/网易云/index.html","532318ffd6bf8c18e939e0a26522542f"],["/tags/网盘/index.html","594d1baca4b5483cf45e1766bbb40951"],["/tags/网站/index.html","f7ec763367ea9a26b2de4a6ece279e29"],["/tags/网络/index.html","5b2609f69d93fe3e7e4ef47f23098d12"],["/tags/美化/index.html","d2344cc7d056bf010acf2d425d94aee9"],["/tags/翻墙/index.html","3362716fc3b4270acabad76ace4b8292"],["/tags/翻译/index.html","d8e418779aa99638023edaceb70df4dd"],["/tags/翻译器/index.html","f1f2d9d9b8f06bc0915ef53dd75979f2"],["/tags/聊天/index.html","3d18c72d8d129a071ced428d35356886"],["/tags/聊天室/index.html","aeea68cc8a5c0470eef835e4fa19999c"],["/tags/联想/index.html","4eafc0985cf3b7fc580ed71e8459be8a"],["/tags/节点/index.html","5ba205b3de0223714a5baf1e3d4335e7"],["/tags/虚拟手机号/index.html","3d975548172bfa6773ee154195d6da34"],["/tags/补丁/index.html","921a662162c3347c6a5ee5191b90a520"],["/tags/视频/index.html","240415ac3f43a871e3ccd58b9b217d95"],["/tags/解析/index.html","fd516624260d61928e3395e1c7b68df1"],["/tags/订阅链接/index.html","85cf91533dafd572260b195c4a1a3e70"],["/tags/记录/index.html","e098d2cae5f03fae4b814c4eab58b8ea"],["/tags/识图/index.html","0db0d541b32c973aa4011b7a14b6bce9"],["/tags/语言/index.html","01ef09396f8583341990bed03cfc03e3"],["/tags/资源/index.html","6b138a4322ca3e0df55594f8c568ac36"],["/tags/资源管理器/index.html","0ad5c0b232be18af039fc7f5c4525c0f"],["/tags/转移/index.html","d0d51603c8f4e26049fa27230cc12812"],["/tags/软件/index.html","5996770e2d2c13740a5efbd90037bc82"],["/tags/轰炸/index.html","f80eb7845d49068b3743b494119fb804"],["/tags/迁移/index.html","a4bc6b51080dd09cd54945a02f4b2e36"],["/tags/远程控制/index.html","01dba400b33eeaedb865a2a212b233f4"],["/tags/连接/index.html","e2e160138e6ba956ff516582a92a09eb"],["/tags/追踪/index.html","9f0a31cf3b794ef57df1d82bd616417c"],["/tags/速度/index.html","1dce2ff8bf699fb847b054129d88c585"],["/tags/邮箱/index.html","295d8dcb492e957487e59601520c4ecb"],["/tags/酷炫/index.html","c2bf65698722f4c928847111dd5b1932"],["/tags/钓鱼/index.html","6ed654acc9940d3769739a89957ff59f"],["/tags/镜像/index.html","9d97d9beadae6d16406838d950be214c"],["/tags/随机/index.html","e77bd46628c869102c5409e4593ce2b0"],["/tags/隐藏/index.html","30eb9d72ca78d107990642f5b6437c9e"],["/tags/面板/index.html","16bdf2a6e6ab634864ef082721879136"],["/tags/音乐/index.html","30e63f11820ef07d56df033b8f291052"],["/tags/高颜值/index.html","f49d97895cf2f9e5be57013c7ee1877d"],["/tags/魔改/index.html","de11521a9dc8b71d1d92579b9cb84eaa"],["/tags/黑名单/index.html","58974616fda233bfef12f54a3129ffcf"],["/urls/index.html","f58aaad5df1f57f8c40d5661fbc01792"],["/vps/index.html","06075b862d06fcd6c30810d2fca9330f"],["/支持/index.html","196a925046323d19c06d52d6c4b812b4"]];
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
