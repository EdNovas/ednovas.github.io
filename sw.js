/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","a5de85969f5292778e2082e6e0725b1c"],["/2020/11/29/clash-windows/index.html","b32d3a9120037cc3bad03a6c26863e9f"],["/2020/11/30/websites2/index.html","f98c62f80684a2c41e4ff0e16f6bd1e3"],["/2020/12/04/iphone4s/index.html","aa40d3edb1a31c9fe6a8bb41fecc8c07"],["/2020/12/04/onenote/index.html","4d0e2dd2758ae78f74d73194f8e9bbc7"],["/2020/12/04/wesites1/index.html","1fde8b6e31cc406294bcd536a2e95a6c"],["/2020/12/06/nokia808/index.html","848ab69b603ad2745e4b4120b9bee1e0"],["/2020/12/07/ipad1/index.html","754bff57bb5f7920b83c2e8c3c3fb34d"],["/2020/12/18/freesubscribes/index.html","983259e94daf7a1b1844b6c4e2e51830"],["/2020/12/19/musics/index.html","e51a0d5298a9d66fc44213e07fb670d7"],["/2020/12/19/shadowrocket/index.html","1a3775fd2cf0b9ce35f760692049a769"],["/2020/12/19/v2ray-windows/index.html","67707f5e9b66c34100e60f4b222647b7"],["/2020/12/19/v2rayng/index.html","040197774db21d11112140dff864b2cf"],["/2020/12/20/beoplay/index.html","ac6485eadb40a5e8b02595d76c0abaf6"],["/2020/12/20/订阅链接转换/index.html","954a2a1d4f2665b303ea2ec59cfc14f5"],["/2020/12/21/chrome浏览器下载提速/index.html","4d01a5fae9908c5d89e0f9721a42930f"],["/2020/12/21/免费128线程并发下载xdown/index.html","deec95ea25ec33e9533d24ef0a8e67b0"],["/2020/12/21/免费32线程下载软件ndm/index.html","8380e889ebde4d8e7895a9c3d9f74217"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","375c9253f69c5a026241998c0a585e4b"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","5a624a0d9130ad02b9c18ab0d81c1acb"],["/2020/12/21/广告怎么知道我在想什么/index.html","06a1d4ec1836602c76712d5ca4fca716"],["/2020/12/21/无名·引子（小说试写）/index.html","559ea0661ac11b907ae77c3a875c9cc5"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","7bc5677c51775f512b92d0fca924939e"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","99dacf8f659ffca47516e9b233aab40a"],["/2020/12/21/高速轻量下载器aria2/index.html","51e33e76b601a333879acaec1b927b96"],["/2020/12/22/2020-cee-roo/index.html","588e4932843544768fee40d9b01000d3"],["/2020/12/22/firefox插件、github、steam富强/index.html","13fdf2685e0616afd3795100611fe1ae"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","0c333e4375c0504b574c252d2494e430"],["/2020/12/26/python-day-1/index.html","3eef81e46e47a373cc1c74c67ce2d110"],["/2020/12/26/python-day-2/index.html","3745af739fbba2b0d1d3ff4ad964cd1b"],["/2020/12/26/度盘不限速下载方式一赏/index.html","02a7bbf49fd0250f0be66201f609be29"],["/2020/12/26/添加开机自启软件/index.html","8780ab130932cf9362dae3d40fa510b9"],["/2020/12/26/电脑端截图方式一赏/index.html","2a872f0fb4685b7364d1bc283450fd7d"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","b69770e19682719cabed74f3cbe846ab"],["/2020/12/27/最安全的浏览器tor/index.html","fb21fcac4efd61f700f5f35b1df83557"],["/2020/12/27/网易云刷等级和听歌数量/index.html","acce932426b3d5780cac81e9b5514c5f"],["/2020/12/28/freenom申请免费域名/index.html","0b3807c300f365787ddcf80f210d5631"],["/2020/12/31/机场/index.html","33c3fa5a428373510be38a4cbbcaf9c8"],["/2021/01/01/M1/index.html","004b62a91487fa401bcbb9b693eaf063"],["/2021/01/01/compress/index.html","f3082d66e11b76d3ce50d38ac122f599"],["/2021/01/01/infinityfree/index.html","efbfce277d8282f9f8ee65a025ae81ea"],["/2021/01/01/硬核翻墙/index.html","1fb4e4f054474a2fe15e4f7ce7fb163f"],["/2021/01/02/qq/index.html","c6f444f21526f52732bbca1c4ac9687f"],["/2021/01/03/netch/index.html","a9a49be7160519e603159bf070ef6da5"],["/2021/01/03/waifu2x/index.html","3c5f7523846ff8fd037a395becb7f894"],["/2021/01/04/ads/index.html","48a9e47afe4979ccb5b6a6ec081b8da4"],["/2021/01/04/games/index.html","69afbf82b1394bb0ee3ea7185cfe68c4"],["/2021/01/04/heroku/index.html","2655b6f1e44fdcaa4ce0cd97cb4cdf8b"],["/2021/01/06/movies/index.html","641e834fecd6779a3dbf6d18252af31c"],["/2021/01/07/google2020/index.html","51895c8d8126d291e38a0f2d9f4292e7"],["/2021/01/07/lucky/index.html","45597e61eebdc5359ea16984e5fe9c21"],["/2021/01/07/spotify/index.html","f8c6bbeae023e458001565a0158a8f8b"],["/2021/01/07/thunder/index.html","2209d2dc443575b720e43669535d1f96"],["/2021/01/08/adguardhome/index.html","fd5c76f8f5774f14fc5d9dd4b86491ce"],["/2021/01/10/IBM/index.html","2e7469aacdff82aecb3f0844420ab275"],["/2021/01/10/potplayer/index.html","6561fa82a934e91c5245791f040f9e6f"],["/2021/01/10/sakuraanime/index.html","ff28886aebdcb4693d96113d25cab698"],["/2021/01/10/美剧星球/index.html","8c98843a608166bc7694214b9cde9276"],["/2021/01/12/telegraph/index.html","3ab5900a02a03f40a6432c120432b295"],["/2021/01/14/comics/index.html","6f72e19ebbddc8358eda0b00366b5998"],["/2021/01/14/ftp/index.html","7934776555c0896c93706bfe68a2daa8"],["/2021/01/14/oraclecloud/index.html","2a47ae5de498974c0c09239dc0a18b0e"],["/2021/01/14/porkbun/index.html","a5f929b57c96b63ca00046c6e3f2d94e"],["/2021/01/14/powertoys/index.html","2080a6118b2cf78d7096d156e4c32f80"],["/2021/01/14/taptap/index.html","b9f71bdf44b97c534d8ddd3ad2298684"],["/2021/01/14/ubuntuvsftp/index.html","7cf903f7f84340b112ce758634e06a59"],["/2021/01/14/小说/index.html","e65977cce3ebfd6ab02735d0f73e10fe"],["/2021/01/15/freeproxies/index.html","38cbac37200a7b41b2c58f86399d9e22"],["/2021/01/15/incaseformat/index.html","b5b55675e5f208e454ffc5457c3defd6"],["/2021/01/16/euserv/index.html","a84a84467e3da6508f88da0e29c5f504"],["/2021/01/16/winxray/index.html","6757eb3a63618796a410c4a5dd76f74e"],["/2021/01/18/qqreadhistory/index.html","2da48d2f5b20a438d09110cc7c5b5fb9"],["/2021/01/18/qqrevoke/index.html","6f38cced74f04ed192be04e6def5466d"],["/2021/01/19/freevpn/index.html","89b50c3e9a4da08d2ac52fadf0ad410e"],["/2021/01/20/browsertrack/index.html","532206308b270626203265b7ef6d2ea0"],["/2021/01/20/v2ui/index.html","fbdf26ca572c0e2520af7ac2a0b29f26"],["/2021/01/21/failedtoconnect/index.html","ddd14a1e23376933b7837b5da0099cd5"],["/2021/01/21/gitcalendar/index.html","236cf9a365503a6dbdff578cf514101d"],["/2021/01/21/markdownformat/index.html","a28d8d3aa9898d9bc83961fd3b6f3e6f"],["/2021/01/21/markdowntable/index.html","22b480e63e527a2b57aa27e2771f4784"],["/2021/01/21/vercel/index.html","d0d4fa4099d6b6a25449c4e68a26ded2"],["/2021/01/22/hardware/index.html","97a0da9e1bb2a3d2133ab1d014262e66"],["/2021/01/22/muviz/index.html","0f7626f60631d99bbb6d6b989bf92226"],["/2021/01/22/randomapi/index.html","08a2498b843a5b23aac03caf3f9eae1c"],["/2021/01/22/searchimages/index.html","f23985b9fcf3e91f02ddeaaa9bbb2b3d"],["/2021/01/23/RX文件管理器/index.html","565768c3f7f187c7e9ec2ba73d8df0c7"],["/2021/01/23/chromeflag/index.html","02fddb9eb3ef05e534e3624822601a3c"],["/2021/01/23/qttabbar/index.html","5da632f4c67a719122620dd6b54f7885"],["/2021/01/24/githubspeedup/index.html","16f47ce2a92104936bbb45a8e390b261"],["/2021/01/24/jsdelivr/index.html","81baf64f2c7390e56868da25b4e126d9"],["/2021/01/25/note/index.html","28fe21a8ada9ce9b107de33f65747e93"],["/2021/01/25/soul/index.html","a7cc44154f7d95bdb7c9db87c4a34c85"],["/2021/01/26/herokuxray/index.html","55d5fa8437e393850c3505c77eb62736"],["/2021/01/27/proxypool/index.html","93941d4c7d6a0570db16ec6bda494a08"],["/2021/01/27/tracker/index.html","046a73ebba03ddbae35c74a3e205a732"],["/2021/01/30/pandownphp/index.html","b4cc669397199a299841ef1a516d1e47"],["/2021/01/31/newgroup/index.html","5778348436ee7ed649faf6b4351acb32"],["/2021/02/01/clashlanguage/index.html","0727ae8f6601ecdf65b948168a4e7a0c"],["/2021/02/01/encrypt/index.html","c174ed49280ab1b0ddfa5f666fbfb1b3"],["/2021/02/01/footermotion/index.html","2c809c34a7c6b2376cd7e6770440a1a4"],["/2021/02/01/gitter/index.html","521fc51c8e7dd7fe71e0c398ad0c76fc"],["/2021/02/01/pixivtop50/index.html","f38abf24b1fc4c59425e48394aa8e93d"],["/2021/02/01/scrollbar/index.html","9066397a87161784466498eb845d62b4"],["/2021/02/02/clover/index.html","9c9ae440e96c20516323a3e7abe3bf0a"],["/2021/02/02/maya/index.html","fb012cc83944c044849ed9dc3684d40b"],["/2021/02/02/speedcontroller/index.html","d84afebfc5b5387ade1e24c85f741f8f"],["/2021/02/02/yesmusicplayer/index.html","225e27ccb413f6dc17018c52170fc28c"],["/2021/02/03/lenovoonelite/index.html","37bfaa9af4e7cd96a14f039ca63c65c9"],["/2021/02/03/skipads/index.html","60f624c4a9a4746a4eefdf09a66c8a99"],["/2021/02/04/picseed/index.html","5c343c613f72e4703e912d0199cdb800"],["/2021/02/04/renren/index.html","b214f5924e015766261c3df2bd45f1b8"],["/2021/02/04/serverstress/index.html","f1950f327b77610a81bd955965f07686"],["/2021/02/04/wikipediazh/index.html","ab2626d934bfe3766f7d25b08ef1f86f"],["/2021/02/05/googlevoice/index.html","559d9e90ec216f791c7f70968c3bdf87"],["/2021/02/06/clashconnection/index.html","b657d3fba6d99ad746bdc2e4b0e02258"],["/2021/02/06/gvtransfer/index.html","7499bd6e1e346d4b15857d3c9daf13cd"],["/2021/02/06/todesk/index.html","e93db3247ceec8f019d18b9770aa8dc0"],["/2021/02/06/vpnblacklist/index.html","9a0b9687d708c0846a9a9c3ca2d00da7"],["/2021/02/07/mklink/index.html","9b2e75ec249e252a5025c0df7bb60550"],["/2021/02/07/speedtest/index.html","bb2602d4fae03c553df23fdab54cac30"],["/2021/02/07/translate/index.html","9ad4b2cecf69c282d36ab13a447bce77"],["/2021/02/08/ewomail/index.html","1a59a555bdafb3d874b440a517515a22"],["/2021/02/10/officee5/index.html","a6cf4025759d4f272f30932f0b3b2a71"],["/2021/02/10/raidrive/index.html","13eb1eb344c6ac9bc61f7ffc3c5b6ad9"],["/2021/02/13/e5sub/index.html","af92cce6021eac52f63a383fb0f06a70"],["/2021/02/14/screen/index.html","00a3f8767d01a2633690b24698094aa6"],["/2021/02/15/clashtun/index.html","b6a460ef9c75f42fe8aa066e9992f250"],["/2021/02/15/messageboom/index.html","c232ef426db860fec25826a2d9f64d0f"],["/2021/02/15/oneindex/index.html","2c46464264a931c5c2c497450903f978"],["/2021/02/16/govsites/index.html","154b26af9168bb56fd656b67e75bb74d"],["/2021/02/17/hexototypecho/index.html","13171ef529f7428629ce13674bad0da5"],["/2021/02/19/fiddler/index.html","33ed15544dbe3ee338e3da1184129b5e"],["/2021/02/22/potplayerset/index.html","d4dcabe043a6ee14e3e6f86114e555f8"],["/2021/02/22/studyresource/index.html","8828f8a5f974a8fbb179bae31b9fe0c5"],["/2021/02/22/telegram/index.html","d06ce27b8839fa53e6c0e7c911ea3398"],["/2021/02/22/videos/index.html","64cefb41b967d9c15239ec56ae95da87"],["/2021/02/24/mtproxy/index.html","6a998f61fb68218ed575854153e97063"],["/2021/03/10/catchcat/index.html","9840a8e6d86f531249e1f83fa62cba97"],["/2021/03/10/neteasemusic/index.html","85fcddc26800629bbf75b390dc094254"],["/2021/03/10/surfboard/index.html","6cf24df6b7d5bf0262a40ad17d9647db"],["/2021/03/11/vpnandjc/index.html","e46b63bc12b0fc12875603e6a9b2af48"],["/404.html","8dbc80258da798a56f7730473afd12bd"],["/archives/2020/11/index.html","d770f709bcd12b47033dc31e3b17f9cf"],["/archives/2020/12/index.html","467b2f1351beb064b4501768ab0975c3"],["/archives/2020/12/page/2/index.html","3759e64f21655468b2d5071ff34faa0b"],["/archives/2020/12/page/3/index.html","fb57afcd0a297117ba705220da1cff25"],["/archives/2020/index.html","2f3ceb33154befdadeda6d6a57194b62"],["/archives/2020/page/2/index.html","6304d3bf3ec4a0667bdfd4b67964504b"],["/archives/2020/page/3/index.html","f7995421d3357d45cb10b6b6bd792ffd"],["/archives/2021/01/index.html","3c1c8b56ed380215fded8e831bd5ff76"],["/archives/2021/01/page/2/index.html","90ace3b5a1e10d0764521da682c13e1c"],["/archives/2021/01/page/3/index.html","8a206a3b8aba35ee6a76b43d9c499ceb"],["/archives/2021/01/page/4/index.html","d96b04524cafea565b7473396db0b615"],["/archives/2021/02/index.html","e41e72e2d85f6692c363d8a948676f63"],["/archives/2021/02/page/2/index.html","255f4301804dede7bce667877c7cec5a"],["/archives/2021/02/page/3/index.html","7fc70d09212295b80b50ce9c03ef85ce"],["/archives/2021/03/index.html","5beb72eceed10bb9d32becd5376307c5"],["/archives/2021/index.html","acba21aa31f8922c03acb0c048d254f0"],["/archives/2021/page/2/index.html","12fec51f315d896cf138bae15a4f60a8"],["/archives/2021/page/3/index.html","354f3ed386a6a620853b225ddc6b2de3"],["/archives/2021/page/4/index.html","1d39fb5a9d9fc50db08e7cce83beb15c"],["/archives/2021/page/5/index.html","ce32e25230a35ad15befc202cf83d5f6"],["/archives/2021/page/6/index.html","97d15403e8d1e5c30ee3e0d3ac32c450"],["/archives/2021/page/7/index.html","03c1a0c3a505fd446b2282c82f7b5ef4"],["/archives/index.html","e23767cfbdf8e3949f42b74f5c0cd782"],["/archives/page/10/index.html","e807d017d9ec4f2e60e9006986745296"],["/archives/page/2/index.html","7b36b187ac3f696955ee63b541f89fd7"],["/archives/page/3/index.html","cfb62ac79d436a02cb0f06534d19af71"],["/archives/page/4/index.html","a8e1b9bda371e9477ba98e59a61b25a6"],["/archives/page/5/index.html","abcaab70aa5f16cacb4a646736bde7d9"],["/archives/page/6/index.html","8fa3fe5b372e07883429314842e53281"],["/archives/page/7/index.html","c3f25a9b1d98a30ffa80f978d4e20829"],["/archives/page/8/index.html","7fe2ce9506809b0beae7fc6977a041c3"],["/archives/page/9/index.html","1755f861c561c8f10511d76125350e71"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","140dcd77a56c79d9eb0468ec0df6b3cd"],["/catchcathard/index.html","e9291c58bce68730cd21cc4e2b0a474b"],["/catchcatimpossible/index.html","ce8ac7a16e2b7990d9e0aeb78de4c0db"],["/catchcatmid/index.html","dc073d912aef351b621ce171416ebd82"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/categories/VPN/index.html","c33a5ba11d5d3259216ca4ae7a31f754"],["/categories/VPS/index.html","7b6aa32ceb826a9e637b99bc267c3da2"],["/categories/index.html","1cbd95078b8de88486a8bffabc5f8a99"],["/categories/下载/index.html","2c1bc53ae4a338eba27c9c20632f3021"],["/categories/安全/index.html","6c7f8badfdbd2ee93e6619aa7c206ebe"],["/categories/建站/index.html","cdc925c9980605e2d57a66b2c9c991b0"],["/categories/杂/index.html","9034f886e95864c17815e14ac024697f"],["/categories/杂/page/2/index.html","db5bccb85f3672ff8b486ae861f955db"],["/categories/测评/index.html","2c0a370dd2a7b3b7b59547a0a136d31d"],["/categories/科学上网/index.html","0c91313d19ee6a43e097836011e9ee72"],["/categories/科学上网/page/2/index.html","91184d49211c4ce912ed38ee678d25cd"],["/categories/编程/index.html","803f1c7f17573234c0b79287598d3acd"],["/categories/网站/index.html","879ded856b8fdf01b762eb85e77dac0d"],["/categories/网站/page/2/index.html","442f72ec869b3895a9114fce6550d69c"],["/categories/软件/index.html","7b2a8373c095d889435bb4f4441e9633"],["/categories/软件/page/2/index.html","55a60175b81878487a3e0600aa1d779f"],["/categories/软件/page/3/index.html","959a996795e36438acb94ad0bc93cc3b"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","f950ac60496afbb5a39587ef6f1ce396"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","54f20495d84b5d59ba578ee67c3de9e7"],["/ios/index.html","405290ce9ecbe3d8228e0507a8f6ae88"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","fae40b85b83a5e39a58c01ea223fc9f3"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","13c9de5970cdcf4e0339f142c3a35349"],["/page/2/index.html","a6a55f4fbe0d33f9c5b7a1af38a07afc"],["/page/3/index.html","2d3195240f22c845f22c95d35a7aef5b"],["/page/4/index.html","a090f9ce9156d46263d5a38062cd021c"],["/page/5/index.html","1e19d889fb7b6912ae02ce49b595a05b"],["/page/6/index.html","31857e2cdb7d0bc32ee7ee10cd9b0cdf"],["/page/7/index.html","bdcac608f0fbeb400e47c828d2a89722"],["/page/8/index.html","d2e1e8f2b3011c71654a39da046bbdc2"],["/page/9/index.html","b00c1789a1a6b69430a3d58d4571e2d4"],["/payment/index.html","ac46a8a8d7d3b781db3afa01fff0437e"],["/privacy-policy/index.html","0bca9f4c24edd7e8809e679d20d15f23"],["/rss2.xml","f171be6164ee3b19610aad41aa29b6dd"],["/search.xml","7be9f3621b9b2ebcae9346d8e75824d2"],["/sitemap.xml","62cdf1cda2c7c91d944f315c0f8e7676"],["/sw-register.js","15d45925d518cb04c6bc7ae56250e982"],["/tags/5t/index.html","598899ee250ae3b88a93f24fedaef2be"],["/tags/Clash/index.html","1636088d8812af112de5cea1965ed4d5"],["/tags/Clover/index.html","b3072e41eaf177c2a7d9530fb15916f9"],["/tags/E5/index.html","1a95c279935eece46ce2ba9e61d8624d"],["/tags/FTP/index.html","a2df335458dd159c1eeb128ea784f0cc"],["/tags/GitHub/index.html","09a06361bb834a144c53944e7403e067"],["/tags/Heroku/index.html","83c1f17ee1f3ccc5c050772b565ab3d8"],["/tags/Hexo/index.html","54e836166eefb033f57c3fffff18af76"],["/tags/Lenovo/index.html","6f7f25bea541ffb2a46b98c05fb1379b"],["/tags/Oneindex/index.html","55513d46f55ab11df42b8fd406680ff9"],["/tags/QQ/index.html","b72532acbea4305f02494c79ce753a11"],["/tags/QTTabbar/index.html","29914cfa654ef05959439f804d025178"],["/tags/RX文件管理器/index.html","07ae8e5d1fa6d58e46d0b2a8ddad3a24"],["/tags/Todesk/index.html","aea68cc884f86e3eb2c7477d8ec00f53"],["/tags/Vercel/index.html","40123b6fef990c15e2a881e418293d18"],["/tags/ads/index.html","3247e3413169e74d39f23290edb81488"],["/tags/api/index.html","7cc0b13371a1d09344d8e0deb90f673c"],["/tags/app/index.html","b64bdc6ab31aafdfd83773347ddd79a1"],["/tags/blacklist/index.html","0a4926dff276108e8a0967efae9f653b"],["/tags/butterfly/index.html","489f2defe85f62376cf904c4d04f5d0b"],["/tags/chrome/index.html","9919e384d12e648ddb206e36c6e749f8"],["/tags/cloudflare/index.html","ea43722232fdf91e7524c36eb6f8f5e1"],["/tags/cmd/index.html","218adeb3ff515a06a0800641ad7fbc37"],["/tags/c盘/index.html","3c349c494926367a449b1eb9bca6c74e"],["/tags/email/index.html","d567e4be63412c4cc530b20a510c8904"],["/tags/ewomail/index.html","d9a9c68ca8b6428e9d156d29b0accf5e"],["/tags/fiddler/index.html","db7d6a8b386f9f667bc36b20a3cd98a8"],["/tags/flags/index.html","5b9b1eb2d1a54718da2315b90c3fdb00"],["/tags/footer，页脚/index.html","f19f138c720e86d594772d86b9f1a244"],["/tags/galgame/index.html","67b206d72e790ea3bf48f2abbb1fc682"],["/tags/git/index.html","125307d0e2bd1f7c9362d386cd243ad0"],["/tags/gitcalendar/index.html","46c3f46fddc66bf0a27f53d95434b616"],["/tags/google-voice/index.html","f72c9fd4960f1533460918dfd3aec978"],["/tags/gv/index.html","68938a0e41d0afce2135111477b46fe0"],["/tags/html/index.html","c48d6cc33c0dbf0acc02053844f77475"],["/tags/index-1.html","35deb0890fc47b81fe73041906b59553"],["/tags/index.html","8448a7d9b35afac971b3fc7fe957298b"],["/tags/js/index.html","a36014fffb68fc648a40c4a2aa3064bd"],["/tags/jsdelivr/index.html","68000b0e15a3efa648029531d81a8ab9"],["/tags/linux/index.html","242c7f3d01d39794d79b67906ba5c229"],["/tags/madVR/index.html","3f0d3107b73ae9c34243f79b42bb28e4"],["/tags/markdown/index.html","4eb7fe91a449c1b0bb96d886abe37912"],["/tags/maya/index.html","73fe3f5e9cd24ccc6e192bcd094ac23b"],["/tags/mklink/index.html","c73f303e07dcc2b01f77b1b5315ad371"],["/tags/office-e5/index.html","d0e1d9feabbe22e31a71218a2360ebc3"],["/tags/onedrive/index.html","de0ca544b3daa61699fa4885b1c57757"],["/tags/picGO/index.html","d213507e040dd20e72b8bd9bc2f46593"],["/tags/pixiv/index.html","3252155e3e1cf8a310c8ea64291ca90b"],["/tags/potplayer/index.html","1d4d9292766b29a0b557cacf59ee9b91"],["/tags/proxypool/index.html","c6ff96d4109cc91aabee484b094683d7"],["/tags/qbitorrent/index.html","ebf875ef9591b414225159382975ff9d"],["/tags/raidrive/index.html","dc5d9defc0a9c849b57309c7f93f909f"],["/tags/screen/index.html","5f04bc7531a1ccb1742208e09bcc8ce8"],["/tags/speedtest/index.html","556e45ff7a78353236010ec92ce6183b"],["/tags/ss/index.html","cbd0580d52408ef321db83071ebe0f75"],["/tags/ssr/index.html","f4b2af42ad4f1140cb1fc7d96e4cee33"],["/tags/surfboard/index.html","a1bcdc33dc8d24ec571bc36e3a497d11"],["/tags/tap/index.html","61d43065e26b319e402fc1349d4c517c"],["/tags/telegram/index.html","672ad1bbb72097946c8cdc5daf9f84b3"],["/tags/telegram代理/index.html","f5ccdaa896bf3f0638b7237415e5bf31"],["/tags/tg/index.html","8baa02ad01adbac87aced6ef61441556"],["/tags/tg代理/index.html","adc163f6ec1597d91748da6324032370"],["/tags/top50/index.html","72249e0c10bfc6a0110d471565bdcd06"],["/tags/tracker/index.html","692cf1abd51e97f80b00a0f2f3269699"],["/tags/translate/index.html","dbf31da8ecf8eb881bf607430f4e98e2"],["/tags/translater/index.html","b782003f933c9b2e243f7d8f745d2aa7"],["/tags/tun/index.html","e8d515ae3b7df32f649eca790dc460dd"],["/tags/typecho/index.html","8d4351a0075fb2e07d800f2506033ada"],["/tags/v2ray/index.html","dd354643424599d97da50fab553f73ee"],["/tags/vpn/index.html","5a4a5ef909a9e2f6c04bd8d7f235f244"],["/tags/vps/index.html","0a34e8a26718b6102cc01dfb792336fc"],["/tags/windows/index.html","ae15b6e0ea879891b3877b860b464fea"],["/tags/windows端/index.html","918f40a0fe6e2e024d2b369bef63de31"],["/tags/xray/index.html","f4ebf2bc4c33203651280aed3f8c8a42"],["/tags/下载/index.html","a30834f7c56c13ddeeee572819de2cc8"],["/tags/不限速/index.html","684ab37814b3116aef4d7856b8a61b33"],["/tags/个人网盘/index.html","ddc4829e7dc17b44e977a9ce0ef979f4"],["/tags/主题/index.html","7d2a9cf0b5f20f34ebb15db315f461b9"],["/tags/云便签/index.html","e94539c14cf21d48598b91dcf70e068a"],["/tags/云盘/index.html","a8e6d893307d9d3b5afc4a2c7632482c"],["/tags/人人/index.html","fbfed8e6dfede3d1ec084163e52ddac3"],["/tags/代理/index.html","223d2f9d3b710ad65b088d0f9f9b5129"],["/tags/代码/index.html","0b381b04003ec11ef1c8d9cd55e2a0d5"],["/tags/优选IP/index.html","e8a451e92c2229ebfbc051859f6bab96"],["/tags/便签/index.html","21a59074817c06d9a9a9903b5dad5cc0"],["/tags/保号/index.html","105a948e33d04b87ec36084c063f10a0"],["/tags/免费/index.html","37254982a5fa60c55c811a54483ccb3c"],["/tags/免费节点/index.html","df49a73aadde0bae39b04b4cdf838bd6"],["/tags/加密/index.html","398a69006435320a18cdbbddfcb74934"],["/tags/动画/index.html","fb7c24c660b9e1532740f3ab96ebafb5"],["/tags/博客/index.html","b1939df374e7bb3f3ed1fcefdf99f5c3"],["/tags/历史记录/index.html","d0e2618a581faf1312db0b2a35d528a6"],["/tags/压力/index.html","dd2871c89be0d2035eb758a3bd2e01b5"],["/tags/压缩包/index.html","146057bc85a8c769be3e7875fbc6d618"],["/tags/反代/index.html","0256e99a990587c87fd379c140f58780"],["/tags/可视化/index.html","94d813321aeae9ca8997d5d6f5217c08"],["/tags/命令/index.html","ec6d8bf611667cf2636788423e1c22cb"],["/tags/国家/index.html","21bdcddd185c5f751167384fa754d553"],["/tags/图床/index.html","850f6ed86cc32eb50299b2c9fad2769d"],["/tags/图片/index.html","7656751ecb620e8abb7a21fd04654449"],["/tags/域名/index.html","47b2be930b0089f0980894a438bef436"],["/tags/多标签/index.html","e5fde7497a493020c9ef4dfe6a7c815f"],["/tags/存储/index.html","599d7cc8fd818f45abd64ef93d7991e3"],["/tags/学习/index.html","317e038f17c5ce24def3faaadff99bbe"],["/tags/安全/index.html","3c89d27d778c530e1cdb54e1e6ea28a8"],["/tags/安卓/index.html","84ce31720964f413bc6c629d7603415a"],["/tags/宝塔/index.html","8719aa453c47ac56fd2dda23fc77b645"],["/tags/小游戏/index.html","4dff3089317182119deba62dfab74596"],["/tags/广告/index.html","4d38e9195a5120d217cc66d8e0341046"],["/tags/建站/index.html","356fcb2c86cb88ae23768e9518a9d039"],["/tags/影视/index.html","338161923f11bb0b0787569ced5f60ef"],["/tags/快速启动/index.html","8cdb58c87564f41e15b90009831cb86a"],["/tags/手机/index.html","bc035b8aa15bbd7644ee4d151972014f"],["/tags/托管/index.html","1d3e626c1c221c214a005bc17a31cf0a"],["/tags/抓包/index.html","a89f0e046bdd76914d4f92744deec0b4"],["/tags/抓取/index.html","e205b2f2e48c7007631cc822dc289b12"],["/tags/投屏/index.html","644f9b083f3f6fca3dffbe9eabaff3fb"],["/tags/拓展功能/index.html","49cd0541c96b07a0bc6fcfea34fb7211"],["/tags/挂载/index.html","ab71b034de2bcfd48059d1a4e573eb4c"],["/tags/指纹/index.html","7bc373cabdcdd7c4a8515b7503aad849"],["/tags/接口/index.html","31b24e53ac3145709cc902695aa98631"],["/tags/提取图片/index.html","becb1f825d72d377b9853582cab6c5f3"],["/tags/插件/index.html","16621eb7cc6c33e8b422ae69442a71d2"],["/tags/搜图/index.html","0dc8839223b5ad1352cc035b92924d53"],["/tags/搭建/index.html","fd52df8c8a31982a20ef65c399c5fed0"],["/tags/撤回/index.html","d25c886f58e96ebd601d97272010f407"],["/tags/播放器/index.html","f71c7cc3a97f44a725b23f2860a582e4"],["/tags/政府网站/index.html","499423d228876da4ed4c0671812e12b0"],["/tags/效率/index.html","d95d2c6364161980f142d0235bad478f"],["/tags/日历/index.html","3db5d95adeb5ea19749ef3aa48ec4f4b"],["/tags/服务器/index.html","feedfd63ec72329f465c41d180e5717f"],["/tags/机场/index.html","c026efdba950a6aa6aedc504bd718370"],["/tags/桌面/index.html","9961db49dae39a93616d9f65f1e20db0"],["/tags/梯子/index.html","3e5860b6f2f54ca94b7f4e5a70cf60f2"],["/tags/检测工具/index.html","fcbe5ef95f590fb2af29762f3a933316"],["/tags/汉化/index.html","9dd16fda629f2ea3f51652a7192d5a59"],["/tags/测压/index.html","298c85545854094ffe1b14b9ed323094"],["/tags/测速/index.html","92367bfadcb2fff7eff32c1c2cf29b55"],["/tags/浏览器/index.html","2ecadaa12d4f0244142894bc54a8d2cf"],["/tags/清理/index.html","4731b69eaea4f869523849515f038b45"],["/tags/滚动条/index.html","e08bc4902fc2814808f24669aa268eab"],["/tags/灰色歌曲/index.html","ff54fbfc41c30aa6c44ea8a7da1d39b1"],["/tags/电影/index.html","efaa92052add18269d50945944ba4bff"],["/tags/电视剧/index.html","220546491939830def5c4c673e596036"],["/tags/白嫖/index.html","6d0f735e2d35cc0531f67ff913d45d4b"],["/tags/百度/index.html","4f6588d696ec84e5fb5f7a0861bde881"],["/tags/百度云盘/index.html","db759fffed7e095c41819bb0703e753a"],["/tags/百科/index.html","663548fc2fc19b7b9fa4c83940a7bba6"],["/tags/短信/index.html","4ca63d016210b61367872d71ec0d1790"],["/tags/硬件/index.html","20432948d521e017ab79913a7c4ce2de"],["/tags/科学上网/index.html","8b2bf304369073f6c60600b249a1e4cc"],["/tags/空间/index.html","d91d332e4fe707ed3388d69d66ca6e37"],["/tags/笔记/index.html","d5f90deefe14d9a815cf52557857075b"],["/tags/简洁/index.html","3364db6739320bc97ed613f69e2d763e"],["/tags/简约/index.html","42b73f76971866392e1d52ef9f1f305d"],["/tags/维基/index.html","9949257c535627297027153c710febbc"],["/tags/网易云/index.html","71907fcd499c79d3e7a5fd3278541e37"],["/tags/网盘/index.html","033d2bde0d72f5cecb83c8d1a9a86ce6"],["/tags/网站/index.html","747e702f58fbabd47686e7dcc7ddefc9"],["/tags/网络/index.html","349534a26abd6902d5fd2934eb188e9c"],["/tags/美化/index.html","bb7d5001ca4cf4ec6a72b9cc733ab567"],["/tags/翻墙/index.html","c9acd09f989ef03575bb4625d2219411"],["/tags/翻译/index.html","ee1f540d0367f00e6c142b8e4302e875"],["/tags/翻译器/index.html","e0bb0b8315f55d4db47dc90a7c89779b"],["/tags/聊天/index.html","84343e023ada3693ab4d68054df50240"],["/tags/聊天室/index.html","fa44954d1bd2e8dae90b74dccc8e0298"],["/tags/联想/index.html","36d73ade8829d1c710effcf3a52b5e47"],["/tags/节点/index.html","6406501b4e5d8200f844a79b3d4a58ad"],["/tags/虚拟手机号/index.html","5c36e854b2f4d5f619181acd3b92617e"],["/tags/补丁/index.html","ed4cd05c1bab72c3c7e045cc8e63e21d"],["/tags/视频/index.html","d22dffa858fe8552b15e9954b0907de5"],["/tags/解析/index.html","8dc6163f2d8d00add389c84470064df0"],["/tags/订阅链接/index.html","68fb6abe31586148d07fc04534406a90"],["/tags/记录/index.html","3e81f20e4ee6a7d2eba7937e128500dd"],["/tags/识图/index.html","1583dcd2f5c980cafee96805769540ea"],["/tags/语言/index.html","4cb8e60009036dcdc8d9f9d4b215d0fd"],["/tags/资源/index.html","622ce63ea46a9bbf09a4f83cdb20406b"],["/tags/资源管理器/index.html","240ffeb2fe8627f2fb0a894de55bb9de"],["/tags/转移/index.html","1c6b031473ad8fbce438d5bc29ba77c9"],["/tags/软件/index.html","d93403b15b1f0a950cdc96c484157d92"],["/tags/轰炸/index.html","19c48ad5da08ad0bc926e3a45fb254d5"],["/tags/迁移/index.html","7a8553dc7bc1611a651bccacf9a76006"],["/tags/远程控制/index.html","a9c26db334ad3960d3b98a25db4b0859"],["/tags/连接/index.html","3d0d54dc98b4dc87dc178ee2a09c2acb"],["/tags/追踪/index.html","01ade3108aa0edbd8eeaeec43ebeb04a"],["/tags/速度/index.html","ce5ed763dc1bf3b44c6add9fbe53660f"],["/tags/邮箱/index.html","f62d7b6dbcceb9c3aa057947b1d5c3a4"],["/tags/酷炫/index.html","0c28655454be77e2730d92bc9c4823fa"],["/tags/钓鱼/index.html","d89dcb0264fc08f2d114051cfaea1813"],["/tags/镜像/index.html","81781b46479a6a4803865d67f4c41b6c"],["/tags/随机/index.html","8115f54e39f8a8afd524deb6b6aa4bf3"],["/tags/隐藏/index.html","7a4c9b8b2920401d81f249797558faa1"],["/tags/面板/index.html","333bd3660b3aaf35af4908ca20b0da1a"],["/tags/音乐/index.html","589d9664e5ae3a45b1219a0de732245d"],["/tags/高颜值/index.html","52389ff4772f628d6a84d1f4993e6bd5"],["/tags/魔改/index.html","04e3d7aa62cd8e3c272b164cd1e8ebed"],["/tags/黑名单/index.html","1ea6068a4addbca83283b5c32da1a498"],["/urls/index.html","3873b4c5ef193c74da0165a57c0b5171"],["/vps/index.html","41579ad4893cb5fb78a650c1311b9a1c"],["/支持/index.html","acc8aef89dfd22ebd6638728d25de637"]];
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
