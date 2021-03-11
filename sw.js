/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","a5de85969f5292778e2082e6e0725b1c"],["/2020/11/29/clash-windows/index.html","b32d3a9120037cc3bad03a6c26863e9f"],["/2020/11/30/websites2/index.html","f98c62f80684a2c41e4ff0e16f6bd1e3"],["/2020/12/04/iphone4s/index.html","aa40d3edb1a31c9fe6a8bb41fecc8c07"],["/2020/12/04/onenote/index.html","4d0e2dd2758ae78f74d73194f8e9bbc7"],["/2020/12/04/wesites1/index.html","1fde8b6e31cc406294bcd536a2e95a6c"],["/2020/12/06/nokia808/index.html","848ab69b603ad2745e4b4120b9bee1e0"],["/2020/12/07/ipad1/index.html","754bff57bb5f7920b83c2e8c3c3fb34d"],["/2020/12/18/freesubscribes/index.html","fcedaf5fe4f8585b2ef3cf71ea67934c"],["/2020/12/19/musics/index.html","e51a0d5298a9d66fc44213e07fb670d7"],["/2020/12/19/shadowrocket/index.html","7cc6dbaa84bff138d3f162900b3f739b"],["/2020/12/19/v2ray-windows/index.html","67707f5e9b66c34100e60f4b222647b7"],["/2020/12/19/v2rayng/index.html","040197774db21d11112140dff864b2cf"],["/2020/12/20/beoplay/index.html","ac6485eadb40a5e8b02595d76c0abaf6"],["/2020/12/20/订阅链接转换/index.html","954a2a1d4f2665b303ea2ec59cfc14f5"],["/2020/12/21/chrome浏览器下载提速/index.html","4d01a5fae9908c5d89e0f9721a42930f"],["/2020/12/21/免费128线程并发下载xdown/index.html","deec95ea25ec33e9533d24ef0a8e67b0"],["/2020/12/21/免费32线程下载软件ndm/index.html","8380e889ebde4d8e7895a9c3d9f74217"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","375c9253f69c5a026241998c0a585e4b"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","5a624a0d9130ad02b9c18ab0d81c1acb"],["/2020/12/21/广告怎么知道我在想什么/index.html","06a1d4ec1836602c76712d5ca4fca716"],["/2020/12/21/无名·引子（小说试写）/index.html","559ea0661ac11b907ae77c3a875c9cc5"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","7bc5677c51775f512b92d0fca924939e"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","99dacf8f659ffca47516e9b233aab40a"],["/2020/12/21/高速轻量下载器aria2/index.html","51e33e76b601a333879acaec1b927b96"],["/2020/12/22/2020-cee-roo/index.html","588e4932843544768fee40d9b01000d3"],["/2020/12/22/firefox插件、github、steam富强/index.html","13fdf2685e0616afd3795100611fe1ae"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","0c333e4375c0504b574c252d2494e430"],["/2020/12/26/python-day-1/index.html","3eef81e46e47a373cc1c74c67ce2d110"],["/2020/12/26/python-day-2/index.html","3745af739fbba2b0d1d3ff4ad964cd1b"],["/2020/12/26/度盘不限速下载方式一赏/index.html","02a7bbf49fd0250f0be66201f609be29"],["/2020/12/26/添加开机自启软件/index.html","8780ab130932cf9362dae3d40fa510b9"],["/2020/12/26/电脑端截图方式一赏/index.html","2a872f0fb4685b7364d1bc283450fd7d"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","b69770e19682719cabed74f3cbe846ab"],["/2020/12/27/最安全的浏览器tor/index.html","fb21fcac4efd61f700f5f35b1df83557"],["/2020/12/27/网易云刷等级和听歌数量/index.html","acce932426b3d5780cac81e9b5514c5f"],["/2020/12/28/freenom申请免费域名/index.html","0b3807c300f365787ddcf80f210d5631"],["/2020/12/31/机场/index.html","33c3fa5a428373510be38a4cbbcaf9c8"],["/2021/01/01/M1/index.html","004b62a91487fa401bcbb9b693eaf063"],["/2021/01/01/compress/index.html","f3082d66e11b76d3ce50d38ac122f599"],["/2021/01/01/infinityfree/index.html","efbfce277d8282f9f8ee65a025ae81ea"],["/2021/01/01/硬核翻墙/index.html","1fb4e4f054474a2fe15e4f7ce7fb163f"],["/2021/01/02/qq/index.html","c6f444f21526f52732bbca1c4ac9687f"],["/2021/01/03/netch/index.html","a9a49be7160519e603159bf070ef6da5"],["/2021/01/03/waifu2x/index.html","3c5f7523846ff8fd037a395becb7f894"],["/2021/01/04/ads/index.html","48a9e47afe4979ccb5b6a6ec081b8da4"],["/2021/01/04/games/index.html","69afbf82b1394bb0ee3ea7185cfe68c4"],["/2021/01/04/heroku/index.html","2655b6f1e44fdcaa4ce0cd97cb4cdf8b"],["/2021/01/06/movies/index.html","641e834fecd6779a3dbf6d18252af31c"],["/2021/01/07/google2020/index.html","51895c8d8126d291e38a0f2d9f4292e7"],["/2021/01/07/lucky/index.html","45597e61eebdc5359ea16984e5fe9c21"],["/2021/01/07/spotify/index.html","f8c6bbeae023e458001565a0158a8f8b"],["/2021/01/07/thunder/index.html","2209d2dc443575b720e43669535d1f96"],["/2021/01/08/adguardhome/index.html","fd5c76f8f5774f14fc5d9dd4b86491ce"],["/2021/01/10/IBM/index.html","2e7469aacdff82aecb3f0844420ab275"],["/2021/01/10/potplayer/index.html","6561fa82a934e91c5245791f040f9e6f"],["/2021/01/10/sakuraanime/index.html","ff28886aebdcb4693d96113d25cab698"],["/2021/01/10/美剧星球/index.html","8c98843a608166bc7694214b9cde9276"],["/2021/01/12/telegraph/index.html","3ab5900a02a03f40a6432c120432b295"],["/2021/01/14/comics/index.html","6f72e19ebbddc8358eda0b00366b5998"],["/2021/01/14/ftp/index.html","7934776555c0896c93706bfe68a2daa8"],["/2021/01/14/oraclecloud/index.html","2a47ae5de498974c0c09239dc0a18b0e"],["/2021/01/14/porkbun/index.html","a5f929b57c96b63ca00046c6e3f2d94e"],["/2021/01/14/powertoys/index.html","2080a6118b2cf78d7096d156e4c32f80"],["/2021/01/14/taptap/index.html","b9f71bdf44b97c534d8ddd3ad2298684"],["/2021/01/14/ubuntuvsftp/index.html","7cf903f7f84340b112ce758634e06a59"],["/2021/01/14/小说/index.html","e65977cce3ebfd6ab02735d0f73e10fe"],["/2021/01/15/freeproxies/index.html","38cbac37200a7b41b2c58f86399d9e22"],["/2021/01/15/incaseformat/index.html","b5b55675e5f208e454ffc5457c3defd6"],["/2021/01/16/euserv/index.html","a84a84467e3da6508f88da0e29c5f504"],["/2021/01/16/winxray/index.html","d6bfb3b12fab005a8ea99f4a3a92f637"],["/2021/01/18/qqreadhistory/index.html","2da48d2f5b20a438d09110cc7c5b5fb9"],["/2021/01/18/qqrevoke/index.html","6f38cced74f04ed192be04e6def5466d"],["/2021/01/19/freevpn/index.html","da6767a3f459a0fe4e4753f8c133e6f9"],["/2021/01/20/browsertrack/index.html","532206308b270626203265b7ef6d2ea0"],["/2021/01/20/v2ui/index.html","cfc666478eba3164a23e8228d754b12d"],["/2021/01/21/failedtoconnect/index.html","ddd14a1e23376933b7837b5da0099cd5"],["/2021/01/21/gitcalendar/index.html","236cf9a365503a6dbdff578cf514101d"],["/2021/01/21/markdownformat/index.html","a28d8d3aa9898d9bc83961fd3b6f3e6f"],["/2021/01/21/markdowntable/index.html","22b480e63e527a2b57aa27e2771f4784"],["/2021/01/21/vercel/index.html","d0d4fa4099d6b6a25449c4e68a26ded2"],["/2021/01/22/hardware/index.html","97a0da9e1bb2a3d2133ab1d014262e66"],["/2021/01/22/muviz/index.html","0f7626f60631d99bbb6d6b989bf92226"],["/2021/01/22/randomapi/index.html","08a2498b843a5b23aac03caf3f9eae1c"],["/2021/01/22/searchimages/index.html","f23985b9fcf3e91f02ddeaaa9bbb2b3d"],["/2021/01/23/RX文件管理器/index.html","565768c3f7f187c7e9ec2ba73d8df0c7"],["/2021/01/23/chromeflag/index.html","02fddb9eb3ef05e534e3624822601a3c"],["/2021/01/23/qttabbar/index.html","5da632f4c67a719122620dd6b54f7885"],["/2021/01/24/githubspeedup/index.html","16f47ce2a92104936bbb45a8e390b261"],["/2021/01/24/jsdelivr/index.html","81baf64f2c7390e56868da25b4e126d9"],["/2021/01/25/note/index.html","28fe21a8ada9ce9b107de33f65747e93"],["/2021/01/25/soul/index.html","a7cc44154f7d95bdb7c9db87c4a34c85"],["/2021/01/26/herokuxray/index.html","cad931bebca97d659ae6b21b94f72645"],["/2021/01/27/proxypool/index.html","93941d4c7d6a0570db16ec6bda494a08"],["/2021/01/27/tracker/index.html","046a73ebba03ddbae35c74a3e205a732"],["/2021/01/30/pandownphp/index.html","b4cc669397199a299841ef1a516d1e47"],["/2021/01/31/newgroup/index.html","5778348436ee7ed649faf6b4351acb32"],["/2021/02/01/clashlanguage/index.html","0727ae8f6601ecdf65b948168a4e7a0c"],["/2021/02/01/encrypt/index.html","c174ed49280ab1b0ddfa5f666fbfb1b3"],["/2021/02/01/footermotion/index.html","2c809c34a7c6b2376cd7e6770440a1a4"],["/2021/02/01/gitter/index.html","521fc51c8e7dd7fe71e0c398ad0c76fc"],["/2021/02/01/pixivtop50/index.html","f38abf24b1fc4c59425e48394aa8e93d"],["/2021/02/01/scrollbar/index.html","9066397a87161784466498eb845d62b4"],["/2021/02/02/clover/index.html","9c9ae440e96c20516323a3e7abe3bf0a"],["/2021/02/02/maya/index.html","fb012cc83944c044849ed9dc3684d40b"],["/2021/02/02/speedcontroller/index.html","d84afebfc5b5387ade1e24c85f741f8f"],["/2021/02/02/yesmusicplayer/index.html","225e27ccb413f6dc17018c52170fc28c"],["/2021/02/03/lenovoonelite/index.html","37bfaa9af4e7cd96a14f039ca63c65c9"],["/2021/02/03/skipads/index.html","60f624c4a9a4746a4eefdf09a66c8a99"],["/2021/02/04/picseed/index.html","5c343c613f72e4703e912d0199cdb800"],["/2021/02/04/renren/index.html","b214f5924e015766261c3df2bd45f1b8"],["/2021/02/04/serverstress/index.html","f1950f327b77610a81bd955965f07686"],["/2021/02/04/wikipediazh/index.html","ab2626d934bfe3766f7d25b08ef1f86f"],["/2021/02/05/googlevoice/index.html","559d9e90ec216f791c7f70968c3bdf87"],["/2021/02/06/clashconnection/index.html","b657d3fba6d99ad746bdc2e4b0e02258"],["/2021/02/06/gvtransfer/index.html","7499bd6e1e346d4b15857d3c9daf13cd"],["/2021/02/06/todesk/index.html","e93db3247ceec8f019d18b9770aa8dc0"],["/2021/02/06/vpnblacklist/index.html","9a0b9687d708c0846a9a9c3ca2d00da7"],["/2021/02/07/mklink/index.html","9b2e75ec249e252a5025c0df7bb60550"],["/2021/02/07/speedtest/index.html","bb2602d4fae03c553df23fdab54cac30"],["/2021/02/07/translate/index.html","9ad4b2cecf69c282d36ab13a447bce77"],["/2021/02/08/ewomail/index.html","1a59a555bdafb3d874b440a517515a22"],["/2021/02/10/officee5/index.html","a6cf4025759d4f272f30932f0b3b2a71"],["/2021/02/10/raidrive/index.html","13eb1eb344c6ac9bc61f7ffc3c5b6ad9"],["/2021/02/13/e5sub/index.html","af92cce6021eac52f63a383fb0f06a70"],["/2021/02/14/screen/index.html","00a3f8767d01a2633690b24698094aa6"],["/2021/02/15/clashtun/index.html","b6a460ef9c75f42fe8aa066e9992f250"],["/2021/02/15/messageboom/index.html","c232ef426db860fec25826a2d9f64d0f"],["/2021/02/15/oneindex/index.html","2c46464264a931c5c2c497450903f978"],["/2021/02/16/govsites/index.html","154b26af9168bb56fd656b67e75bb74d"],["/2021/02/17/hexototypecho/index.html","13171ef529f7428629ce13674bad0da5"],["/2021/02/19/fiddler/index.html","33ed15544dbe3ee338e3da1184129b5e"],["/2021/02/22/potplayerset/index.html","d4dcabe043a6ee14e3e6f86114e555f8"],["/2021/02/22/studyresource/index.html","8828f8a5f974a8fbb179bae31b9fe0c5"],["/2021/02/22/telegram/index.html","d06ce27b8839fa53e6c0e7c911ea3398"],["/2021/02/22/videos/index.html","64cefb41b967d9c15239ec56ae95da87"],["/2021/02/24/mtproxy/index.html","6a998f61fb68218ed575854153e97063"],["/2021/03/10/catchcat/index.html","ee54974474b9dc523b7d407ef21aad6b"],["/2021/03/10/neteasemusic/index.html","85fcddc26800629bbf75b390dc094254"],["/2021/03/10/surfboard/index.html","6cf24df6b7d5bf0262a40ad17d9647db"],["/2021/03/11/vpnandjc/index.html","ea4abf77a5f8c795ebeda924ead9da1f"],["/404.html","1a0174c86a5c8359eed0453d07e87dce"],["/archives/2020/11/index.html","3d3452721e8e5a3055d6a4dfc71813d4"],["/archives/2020/12/index.html","b3b745e4471996a67b0438ec4d8d882e"],["/archives/2020/12/page/2/index.html","2a722e0047a6da4d5c6faf06693e29cb"],["/archives/2020/12/page/3/index.html","f2cee961a0b5320b8b7d28406060422a"],["/archives/2020/index.html","d67a2dd44c4867724d5917f674fadf24"],["/archives/2020/page/2/index.html","a54c2a2c2b5284421e1d45dc22429346"],["/archives/2020/page/3/index.html","4ba88674eb828ee6050d04b25f021ea9"],["/archives/2021/01/index.html","c2aea74f4fb89c807844ed241ec41684"],["/archives/2021/01/page/2/index.html","ca0d5e87fd2fdcc42eb76fc65e4427b6"],["/archives/2021/01/page/3/index.html","cd24af3e3fa3d718f7cda260ad489bb9"],["/archives/2021/01/page/4/index.html","6f1a030670766d3be5d290b24bf41d56"],["/archives/2021/02/index.html","021a7ebca562e395be942e26f512a87a"],["/archives/2021/02/page/2/index.html","5023a5da4792bb1e9834057897834189"],["/archives/2021/02/page/3/index.html","47a8ce05b75d0f196650a144f7930ac6"],["/archives/2021/03/index.html","07f9779b349ba0d5b24019e571f6ab5e"],["/archives/2021/index.html","75e913669d223343ba660271f27eae55"],["/archives/2021/page/2/index.html","02547c6ff2a30608d3ebb23b9847a9f3"],["/archives/2021/page/3/index.html","6100f1dcdf7a1a42b546ff9dbd162c41"],["/archives/2021/page/4/index.html","1acd663de33af97b63d0c996e98bc623"],["/archives/2021/page/5/index.html","89d51cc88c077ac1e3589661b5c6aa18"],["/archives/2021/page/6/index.html","72830f8edcd052b27f62b3afd5d4c555"],["/archives/2021/page/7/index.html","562045bd865cb5ad0e7750e8c59323d1"],["/archives/index.html","ce7d74cebfedd5abfaee7907bbec023f"],["/archives/page/10/index.html","dcaa47a9f221f5f87cf680e17ea8a938"],["/archives/page/2/index.html","830fb978522cf876d3d218821e8d3662"],["/archives/page/3/index.html","6b82f91ba0d8c2cfc79fdd4827bbc5d9"],["/archives/page/4/index.html","fa53aa920577c23ff0227124817253fe"],["/archives/page/5/index.html","b7b7b7088b661eb365178e4327fcbbdc"],["/archives/page/6/index.html","2cd898ecbe3ed8f5f52f2a66093d7390"],["/archives/page/7/index.html","4275b954e9bc047fddb5cf04764fa87a"],["/archives/page/8/index.html","4b801b137d0bbf3b21f426602388e2b6"],["/archives/page/9/index.html","e974f33c81175b0a17f473b21aa67696"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","140dcd77a56c79d9eb0468ec0df6b3cd"],["/catchcathard/index.html","e9291c58bce68730cd21cc4e2b0a474b"],["/catchcatimpossible/index.html","ce8ac7a16e2b7990d9e0aeb78de4c0db"],["/catchcatmid/index.html","dc073d912aef351b621ce171416ebd82"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/categories/VPN/index.html","6ca100fabb18968226433faafd8eccb3"],["/categories/VPS/index.html","794b114259c0c5959a5c891f5b2ff2cb"],["/categories/index.html","5f2925bf41aba9b864e5e4c43e3f908d"],["/categories/下载/index.html","54e1115cfc979ac62eb02abdcd5332e2"],["/categories/安全/index.html","ec54b4a82523c924e15810927b0aa0c3"],["/categories/建站/index.html","2cf3ae8cbaff3907d80aedd3d9131bb3"],["/categories/杂/index.html","39c15cff3e22161fc4a08f82e0fb6887"],["/categories/杂/page/2/index.html","c24be1bcacc1c02eb9f0a70366d33cd9"],["/categories/测评/index.html","6c84c02a08935e4d71ea8a1d83e784c0"],["/categories/科学上网/index.html","b50eb5ce5a9644fad195a65c774346c5"],["/categories/科学上网/page/2/index.html","c9a2140921a772c775ca6d88bc07e660"],["/categories/编程/index.html","c6ee12a4c291b49052c715effac4c23e"],["/categories/网站/index.html","42f40801e55e99769b33aae8e9ef3fd3"],["/categories/网站/page/2/index.html","72ca5d5dfac5210829756b5360826e07"],["/categories/软件/index.html","ddbba6cfd2eebc9c2d2a6b39a29665b5"],["/categories/软件/page/2/index.html","75052eb8c09e104862266138f2dbb603"],["/categories/软件/page/3/index.html","8966905b7a6dd933f608039ce0d9e917"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","c516ec1b2bec11707179fe3ac6364280"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","28a0f5d5291971951029d04d05dc5921"],["/ios/index.html","58cdbbe8ed1512065bc0edb6a774c894"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","1016e9c16af0ed8cee7ca9b28676d8da"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","d524cdb01bfeeb0e4d474bfb91e651db"],["/page/2/index.html","c855865d04e26a5d2db1e24fe6f1b4f0"],["/page/3/index.html","e917439726e3dcdc7f1691f331a7601c"],["/page/4/index.html","1de5e7e97ccc11a4ef4334781da424d8"],["/page/5/index.html","3010483e8cbd25e8612c9eeb35cd9dde"],["/page/6/index.html","e7472cca9bc0027dfa9f2e248e48f8b7"],["/page/7/index.html","e63cc24a0ddd9894391a50259fa07d25"],["/page/8/index.html","1e327733561bd5ba94338053f46136ed"],["/page/9/index.html","a69589dbffeccb3bfc068df0596e2cae"],["/payment/index.html","77cb89d665e4be6d84e420313d0b04d8"],["/privacy-policy/index.html","d3101dd22889c2a8ec6ad74aca917710"],["/rss2.xml","9201c4324b501a69e93fe922ec15f1bc"],["/search.xml","8f861de005de79247fbc1b71ee9fd294"],["/sitemap.xml","b2a02eb421e9982f2817a0ab39d00b33"],["/sw-register.js","c26ddbb702a495abb3a163dded2451e7"],["/tags/5t/index.html","d0fe28bbf2d229378a8e2ba748a3b22b"],["/tags/Clash/index.html","441df705666aca06d20210044d2adc4a"],["/tags/Clover/index.html","830b3a8a1c736ef982dafe868e94f664"],["/tags/E5/index.html","79f14a5ee3a48ac5934d4da498cbb6d1"],["/tags/FTP/index.html","cb51ff39d66f992f956a92f6b3bce682"],["/tags/GitHub/index.html","dc59dca2d8d6d5cebf83ba5ac43044db"],["/tags/Heroku/index.html","13844e8f5ebff0b2195086ddc70c9a9b"],["/tags/Hexo/index.html","9c5c9d17262622d65be2973d97c8e226"],["/tags/Lenovo/index.html","683c8895e301f0c9e13a3911a143c9b0"],["/tags/Oneindex/index.html","873230deaf66bcb5625961e79571758e"],["/tags/QQ/index.html","654971e18d8779bc92ce2d9cf45833b7"],["/tags/QTTabbar/index.html","2adc71377b589d39a818323c357f294b"],["/tags/RX文件管理器/index.html","503dca934eb6546b84cb3c686ce2c7eb"],["/tags/Todesk/index.html","94348ed74bb3dd5df9c0123f686273df"],["/tags/Vercel/index.html","2fa79b19180d90e795f5036bf8a01b6a"],["/tags/ads/index.html","63fe6f440801467342beaa63c9eab2ac"],["/tags/api/index.html","22ef3c6ed011c8d9bc4a99368006342b"],["/tags/app/index.html","c7e1fe6f88fcefc87e6edb4361caddd1"],["/tags/blacklist/index.html","929e4dda8a4041e84c132d2163139c8e"],["/tags/butterfly/index.html","eaf0baa0c3b89e4af86219644bc57904"],["/tags/chrome/index.html","a847b5cf1d754bf0d20c4f0ae6d93f52"],["/tags/cloudflare/index.html","b9927b0be663dad88f5134bd42eacdb3"],["/tags/cmd/index.html","791f39ffffb143998af6dca6d40c1d73"],["/tags/c盘/index.html","ee8d8d8d41c2e6a44ab5681b5937f03c"],["/tags/email/index.html","353b7d58831a321e60b9ee57fe22e9ff"],["/tags/ewomail/index.html","6e6ee0d6e6920c12fd7ff0d6dad85e32"],["/tags/fiddler/index.html","124c4da3cdd090770c91cdb5be30fac8"],["/tags/flags/index.html","eae52f7922a48b011ee86b8d78f79f38"],["/tags/footer，页脚/index.html","1a68c26c03d5d334808bc8c320dd796f"],["/tags/galgame/index.html","3e3ad855605fc8a7204ccc8b3caa7235"],["/tags/git/index.html","0819dc3059f979984bfdfad0555872e5"],["/tags/gitcalendar/index.html","208f80ac46a15f56a51e2876d1e111be"],["/tags/google-voice/index.html","5e46764f462c1716ff3897be0fa93082"],["/tags/gv/index.html","85deeb12db2d90a3de89f5343e197cad"],["/tags/html/index.html","745f7c4c9bfab4a6b896283687e8cc4c"],["/tags/index-1.html","98a3d05e349692d17a96675f72faddde"],["/tags/index.html","87c48609b08c01c12cc3ae4f01a4e6d4"],["/tags/js/index.html","8ef73f656eb4f57e0774ef5f528c46f2"],["/tags/jsdelivr/index.html","5739e4f1bf29a8e5c4c7c62611f9eb85"],["/tags/linux/index.html","76ab04e9ebdb465278629181df1fc7ff"],["/tags/madVR/index.html","019048639092b087fdf54f65f6a93617"],["/tags/markdown/index.html","e2e346c7550ebdd80fa2ac24495492d1"],["/tags/maya/index.html","53fd863fdb29aeec7fdbca285e9c0b56"],["/tags/mklink/index.html","20c683131fe9eebb03821a76000f0d1b"],["/tags/office-e5/index.html","df920ccaa8654e70148f06a6a7d072cf"],["/tags/onedrive/index.html","4e5ddb2198720030792f440099c1997e"],["/tags/picGO/index.html","c03e191585bdbf677e68d930b04e432c"],["/tags/pixiv/index.html","7597468cb3e0afe5517db673d725a6c7"],["/tags/potplayer/index.html","64f3fb91a823f5c62f3a7695078c0e87"],["/tags/proxypool/index.html","b7d00a5478f96f653a242baefc7cdeb8"],["/tags/qbitorrent/index.html","26ea682958aef743205d3ec1fdd634c1"],["/tags/raidrive/index.html","e7f97224d4701d602bd349b9cf1d944b"],["/tags/screen/index.html","bbcbd6388a12b62e5fea45b367f05da4"],["/tags/speedtest/index.html","b4b85d84117b6d6a60cff058a33b867b"],["/tags/ss/index.html","c27a93bb1089edd8b6dd982011e717dc"],["/tags/ssr/index.html","f2f18505d3f841426823fe26d53d33f4"],["/tags/surfboard/index.html","6fc1ad845fb8b4361affee2926f2c961"],["/tags/tap/index.html","009265469c1cce5e005573bb607945fe"],["/tags/telegram/index.html","db0150fca494209cc43e2de948981894"],["/tags/telegram代理/index.html","c350a9606c62639a867314375ef2997e"],["/tags/tg/index.html","74e27c92dbcb4fad8d81d33e924766b7"],["/tags/tg代理/index.html","78ea20854d11682f04dd5a18d25ffd62"],["/tags/top50/index.html","949fd74feef1125d8bd62495245b6753"],["/tags/tracker/index.html","a97fae2b71e3118c4457540a0012cf0d"],["/tags/translate/index.html","c3f1688d5784bbe1c5c8d51a70b15103"],["/tags/translater/index.html","3a339d45bc6b89501376becfe4a4e038"],["/tags/tun/index.html","f2d44c05910c644d18b1fda46fdff08c"],["/tags/typecho/index.html","f5798567206437b17b231ca174049daf"],["/tags/v2ray/index.html","12200d953a5f5f4059b897a76d5f46d5"],["/tags/vpn/index.html","41da6c87587bf79f481350068a785b2c"],["/tags/vps/index.html","fe57fb724b637d7fbf0f7ae5ef98258a"],["/tags/windows/index.html","efabab7d2c6846da5b91a82216417840"],["/tags/windows端/index.html","84480ba2fdf5b3e4db472396731596b2"],["/tags/xray/index.html","8f1e04f0208708b688cb0bb83c0afab3"],["/tags/下载/index.html","aab80aed1c02b7f3b861d94bb229b448"],["/tags/不限速/index.html","b21a7861fa04fc947c58f9ee7933f417"],["/tags/个人网盘/index.html","727bd8d94a3d14bfc7077c5c9d4ba005"],["/tags/主题/index.html","1dd9d1f652597c85bdb65e11e7007d22"],["/tags/云便签/index.html","7f21428edb455ed3782ca8045d2f6aab"],["/tags/云盘/index.html","934f69b88fcc66d808a2ab3114d2d0a3"],["/tags/人人/index.html","6e94fa7287b91a6af1b21f75d0649b05"],["/tags/代理/index.html","3329758667bd04fe915cd1cbe240a591"],["/tags/代码/index.html","1bdafd6d174699fcc8746b37970bdf79"],["/tags/优选IP/index.html","8320645b416ffefb487ff1cba25c3e4f"],["/tags/便签/index.html","b2282d9ab56de8079b183ecd5c39d965"],["/tags/保号/index.html","9a989801e383c03fe5fdb894c551eaf0"],["/tags/免费/index.html","b719e355b1be0e4a7f9af7876e242e74"],["/tags/免费节点/index.html","84fb78bfc58fbf358f28f2043a08e132"],["/tags/加密/index.html","ad2d2f88fa5abdd4e231704132c450c7"],["/tags/动画/index.html","f1a483786ebc56e31746de5480e346da"],["/tags/博客/index.html","cd144dd3e86f5c38b9a30894e55fd593"],["/tags/历史记录/index.html","dcd0bcf0ab28c4960cdf4c90a05d4fb7"],["/tags/压力/index.html","2c4ffae0f82409984d93dca368538959"],["/tags/压缩包/index.html","0c3ef44248544c51c5e3803766bf4eda"],["/tags/反代/index.html","191b17b2e48315376c5281d28d52c2bb"],["/tags/可视化/index.html","9bd9bc3d50d2cb5004de428a38ab86bc"],["/tags/命令/index.html","d9f6d0edf65330b7390bcfd79c1297f3"],["/tags/国家/index.html","0e580790f695e7b5defd1d035f1299f0"],["/tags/图床/index.html","af00e11d53a3338bc7eb9693144470b6"],["/tags/图片/index.html","0aa6ebf025d8e89f2e1610b124ee232d"],["/tags/域名/index.html","a2d213e262bfd049f1c8a66d6f5a27ae"],["/tags/多标签/index.html","7531586b5ac8d854dd273433c39b2e5d"],["/tags/存储/index.html","bb7cb61d64aa036702435a0c1f93519e"],["/tags/学习/index.html","79388f306ca520d1322c603fa3198e10"],["/tags/安全/index.html","437f0e97c767c6acecaf3f86018024e5"],["/tags/安卓/index.html","2efb241124f6ef6937dddd7678224a1f"],["/tags/宝塔/index.html","ae718bc3880ca9ad0544a0adf270eddd"],["/tags/小游戏/index.html","727691fd8ecb91d03502d9d6d2d48e63"],["/tags/广告/index.html","818b9c6cad03d6ea66fc5fa1dad96589"],["/tags/建站/index.html","7a7849c2faec694e543dd58bb3bf22b4"],["/tags/影视/index.html","97c4f385d33db5916f4ebea9ad5cac4a"],["/tags/快速启动/index.html","934ebeacd041e2db25dbf9720c99ba67"],["/tags/手机/index.html","1b861b00de893829fb79bbe8408e331a"],["/tags/托管/index.html","aa6d8cfda0a007203c7e1328cd65e47c"],["/tags/抓包/index.html","3ebf37c8bd6ecbf707babfae3868787b"],["/tags/抓取/index.html","e7ea9342b4487fbd5d5df03fb00a98a9"],["/tags/投屏/index.html","6440eb36c4e05183a5bd61f702b28731"],["/tags/拓展功能/index.html","153734fcdbf166f4235a38d9f0949a4c"],["/tags/挂载/index.html","0ccfc15633a8c1d4e4db879ff55700a1"],["/tags/指纹/index.html","dca74b48f3b0136303073d4c0a2b9923"],["/tags/接口/index.html","4a166cbab8d6ab2e77c62ecbdbe6f0cd"],["/tags/提取图片/index.html","4e6cfb63b109f915c681d90997c07788"],["/tags/插件/index.html","1603d05e3fe55658c2365274a0fec899"],["/tags/搜图/index.html","b4eb90522266831c382ed8fd805e26ce"],["/tags/搭建/index.html","1bdc2b23457110bef1d1c416df5f2928"],["/tags/撤回/index.html","d824b1951a4b7b14087bd12dd29c3264"],["/tags/播放器/index.html","579589973696252004a57386ce4ff1ae"],["/tags/政府网站/index.html","e3525618962d87463427c981a125e7e8"],["/tags/效率/index.html","6929beadf4f368bed3d56b9417aa2a20"],["/tags/日历/index.html","2e1f11afeb1656efc59d047d4aef3e6f"],["/tags/服务器/index.html","aaea21efff0e22654f3832f33c965705"],["/tags/机场/index.html","9f3526138c78688f96734808f79a59cf"],["/tags/桌面/index.html","134568d763c63709b451df6a457c2b1a"],["/tags/梯子/index.html","810d8074012807111b7f1030c865a6e2"],["/tags/检测工具/index.html","f01423895477c7362909d131a85b8764"],["/tags/汉化/index.html","3bdfe5b3d3df0622ba153d4ff509c3b8"],["/tags/测压/index.html","0b3513fc57d0e9a9324911f0446e7d66"],["/tags/测速/index.html","38f441dee383cd341e5bf585bae15122"],["/tags/浏览器/index.html","00c9ac4cbaac12ec6698c2d09249e954"],["/tags/清理/index.html","2e6d21c5d94467debdfeaf44628702a5"],["/tags/滚动条/index.html","fd0c8b5e18ff588861d3348f331e67e6"],["/tags/灰色歌曲/index.html","723a90b5025484cd877516a401b2ed3e"],["/tags/电影/index.html","f7bae6f4c71acc529173236095fd2dfb"],["/tags/电视剧/index.html","1079bab65e8d8a47ccf5479349d533f3"],["/tags/白嫖/index.html","ae2a7ed8b1807160dd846837a2f031fd"],["/tags/百度/index.html","e9f2dfadfe9940b1a914de7278f378c0"],["/tags/百度云盘/index.html","144403922a9fec3f915345d8a0ba0b39"],["/tags/百科/index.html","3774d4a4ae7f399ff42e5d7cc0f9b1a1"],["/tags/短信/index.html","cdc003ba7d9b09010a25996f973b625d"],["/tags/硬件/index.html","95644a10c12fe2935105db46cdd915e4"],["/tags/科学上网/index.html","9fca6a095e3610b4d3bda0a9e7a2c888"],["/tags/空间/index.html","5d765e873e7ea3f223a26f520fa1e568"],["/tags/笔记/index.html","68e726317b590170dabaf4e3bf1dcd01"],["/tags/简洁/index.html","6065bab1121c195a422a93fd2f8be981"],["/tags/简约/index.html","f55109e8522a6ff90429a8a7a0141366"],["/tags/维基/index.html","7e125a1bc4a89517c5e2f58f2abd6788"],["/tags/网易云/index.html","829a780157cf785810539289453fd33c"],["/tags/网盘/index.html","ac02ca45588b430bb0dfa08288d3a863"],["/tags/网站/index.html","670396ad431201a045c2ae3510e8ff13"],["/tags/网络/index.html","125effffaf5916edcccc23ae87e118c1"],["/tags/美化/index.html","ba71633b5282d178786b6adc451629f9"],["/tags/翻墙/index.html","6e5998e43618ab19db0ecf24e1e4a951"],["/tags/翻译/index.html","b1be5ab225b67a643d2ba69ba6e4ded4"],["/tags/翻译器/index.html","2eb2d0ff3adff4042ffdef3033b97bbe"],["/tags/聊天/index.html","94ffe48e2d817bb51bc7aea2fa397b2a"],["/tags/聊天室/index.html","eea50f062759ed3f431de972680cb112"],["/tags/联想/index.html","54c45bb4c31646a6107926a4279d5ec8"],["/tags/节点/index.html","de7a2c7fe553419edd1c380c01017c8e"],["/tags/虚拟手机号/index.html","04012c66bbfa916254af13e429d60f64"],["/tags/补丁/index.html","6076aaf39bc525cedace098a5c25aa8b"],["/tags/视频/index.html","32f90473aadf910a81bbb0aacc920077"],["/tags/解析/index.html","7dc13386247e3d3fd2a5ed908899eca0"],["/tags/订阅链接/index.html","6c32b4882375aaee0a327c1bdbe323ee"],["/tags/记录/index.html","0fbd2cd8573b6f174b390d642c465eea"],["/tags/识图/index.html","24a24c7e63b7a0f5adbb49b14a6c2441"],["/tags/语言/index.html","78b0a4953c2b0fd2c329a9308cc1edaa"],["/tags/资源/index.html","823b8af9fdf1f505d9845b29faaae166"],["/tags/资源管理器/index.html","b73d65f7d0a45e294b8a1523a0419a93"],["/tags/转移/index.html","c69dbfe664d898d74a52a48abc3cab73"],["/tags/软件/index.html","a4951ada673793057d8ce691ee950655"],["/tags/轰炸/index.html","0d68958ba8472a7bf0942fc5baed703f"],["/tags/迁移/index.html","8b1b578e405a76fd6d03f3ae9dfb918b"],["/tags/远程控制/index.html","7466838d745057f902d2b5dd6f5a28b4"],["/tags/连接/index.html","04863b84ba2960854ae9032f179d73c9"],["/tags/追踪/index.html","19866cf48a0cc02cab0e76e7b14abcb6"],["/tags/速度/index.html","2dfd19960c3f7ad6478a2ed829b69d22"],["/tags/邮箱/index.html","bd0f0f1dec96ceaf8541a2ba449ce71c"],["/tags/酷炫/index.html","187804de94ecc1d000e7ca10fc2ccecf"],["/tags/钓鱼/index.html","e9f69218bf8f57e8208b68f840ffcefa"],["/tags/镜像/index.html","f204cddd6230d33b9c0d188cd5244bb0"],["/tags/随机/index.html","166860247690798765e4e8ab87ab6aa7"],["/tags/隐藏/index.html","de41e0834dc4ef9ebe0a697faa9da8cc"],["/tags/面板/index.html","1fad734779103b50ff4b24169c5be0ea"],["/tags/音乐/index.html","c8a366197832b8eb5357bab65006d3d5"],["/tags/高颜值/index.html","54ab46788c8474ee7816da070c38f1af"],["/tags/魔改/index.html","939a85467c0873008426d04f92b0a7d7"],["/tags/黑名单/index.html","d1ea0bba3e4f24b62e281ddcdd151ef1"],["/urls/index.html","4cd3e59ea933a2d9afef6f6f33bed3c2"],["/vps/index.html","f790227f9ad9e6714f9d11a928f19e6e"],["/支持/index.html","16825d15e01cd0065f11f02921e9a7c5"]];
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
