/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","ea61d8b2e07eb270a7381fb6130329a7"],["/2020/11/29/clash-windows/index.html","bede6f867b330f47ffb1486bda9be2d8"],["/2020/11/30/websites2/index.html","150a2172340aa22315d8b4d1ed2501a7"],["/2020/12/04/iphone4s/index.html","7e85999a04a83a4a21e9c01b97b1449b"],["/2020/12/04/onenote/index.html","cb6499697cacc07b77497167e06abe50"],["/2020/12/04/wesites1/index.html","e03b7dd38758de6396aed7e8284e8bb9"],["/2020/12/06/nokia808/index.html","977e112b4adbeb77cf5d70fa8f7be599"],["/2020/12/07/ipad1/index.html","c01056307fd004b9befb43679b55025b"],["/2020/12/18/freesubscribes/index.html","287eed927589158d955d85268122a7bb"],["/2020/12/19/musics/index.html","5e32b952b1f7bc934c49af13d01638c7"],["/2020/12/19/shadowrocket/index.html","987c14a7847fdc81160711d9b302a618"],["/2020/12/19/v2ray-windows/index.html","939de7e5b66f9f4d1086e9485985735f"],["/2020/12/19/v2rayng/index.html","b12ce90db3b6ada998fe89f8353d7692"],["/2020/12/20/beoplay/index.html","5773538b07682711b04ad60791d66b34"],["/2020/12/20/订阅链接转换/index.html","de07c5f93afa844f7d42308b37f7e8d7"],["/2020/12/21/chrome浏览器下载提速/index.html","e6a35fb1ebfff14a5dbe351864a6ca9e"],["/2020/12/21/免费128线程并发下载xdown/index.html","6ec66f77025b03b3c92f5b65eb732264"],["/2020/12/21/免费32线程下载软件ndm/index.html","a386dbdbbae34c1239f0e8be58d7bbbe"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","66daefb8697f99e9ba47ff4d9c6ede07"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","aad372ee9c718a7606e35beffe25ee13"],["/2020/12/21/广告怎么知道我在想什么/index.html","21573de1961e6baa6a8c0b0af1655555"],["/2020/12/21/无名·引子（小说试写）/index.html","55d29a96421b4f5ca1e1e2e27232ff90"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","9c9d3cf318e3fd88f1249b715671a0e3"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","cc501778654b4bb4b4c154a5b79d38c7"],["/2020/12/21/高速轻量下载器aria2/index.html","161bf5b8016603e2feddf539ff5128b5"],["/2020/12/22/2020-cee-roo/index.html","eba9e4bab079e5ec722240548bf3068c"],["/2020/12/22/firefox插件、github、steam富强/index.html","c02cb18663dffd66ee11c79abcbf2684"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","4151f1a440b196634d444a2c2db99847"],["/2020/12/26/python-day-1/index.html","216b132425d5465fcc15dc46fd7b252d"],["/2020/12/26/python-day-2/index.html","1add2b0db15662bf7427ce5a54ab9bc4"],["/2020/12/26/度盘不限速下载方式一赏/index.html","eb69727c5d3994ff9e55e4329b1947dd"],["/2020/12/26/添加开机自启软件/index.html","1ff20c582c1802e1df6eab73cb5bb07f"],["/2020/12/26/电脑端截图方式一赏/index.html","ebdca93ebf8e7be68045280be5d5adf1"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","88c3639aebc253ce1d6b8294162e50ab"],["/2020/12/27/最安全的浏览器tor/index.html","7367c7a6636daeeea5608e9363dcdaf0"],["/2020/12/27/网易云刷等级和听歌数量/index.html","9d355f8feb6350b422d31d05fd7c5d39"],["/2020/12/28/freenom申请免费域名/index.html","223828163c458089602edadd1356d37b"],["/2020/12/31/机场/index.html","a9057221c92e84e16edb8409a358fdf9"],["/2021/01/01/M1/index.html","96ec542dc930ff2e6da8e8684f53434a"],["/2021/01/01/compress/index.html","b6f73a6a0875a2091f1119dc862ca421"],["/2021/01/01/infinityfree/index.html","cf5368225c66f7d141cce41fb084c59e"],["/2021/01/01/硬核翻墙/index.html","f34e0a5b40a35f4db64e7be613cd1f6f"],["/2021/01/02/qq/index.html","e28c25a7d1a8cffcf0482b4c0fb73212"],["/2021/01/03/netch/index.html","de34b14ce63f22feabbf30b7f2a168ce"],["/2021/01/03/waifu2x/index.html","da1ce2129628276fe67317d89a994577"],["/2021/01/04/ads/index.html","89b5ce3b6c98a18930c1605420e4fb06"],["/2021/01/04/games/index.html","559c7cefdd30f9d0046c6f75871a41f7"],["/2021/01/04/heroku/index.html","5f6d29f76ba9634fc8303002f6b9fbca"],["/2021/01/06/movies/index.html","4fbd2457fac32b8f96d89ea5e8d90ce7"],["/2021/01/07/google2020/index.html","284ff2d9f8d80451c2e84fe16ea6b6cd"],["/2021/01/07/lucky/index.html","332614e48a556e407f1ddb150f35494f"],["/2021/01/07/spotify/index.html","abaca9a8d9dab463ce99b5c71a865f3c"],["/2021/01/07/thunder/index.html","6f84148173669b05dc335db9738312c0"],["/2021/01/08/adguardhome/index.html","4c09ca9f75eeca56b869529a4d0b3699"],["/2021/01/10/IBM/index.html","57e292b864831a9522c847b1405788f3"],["/2021/01/10/potplayer/index.html","ae10becc10b2bcf287b5334b7a7bc609"],["/2021/01/10/sakuraanime/index.html","a405b5efb6603d2d8b2bf53076a4cbba"],["/2021/01/10/美剧星球/index.html","548840671364c34c8ffbda7c20f6c5f7"],["/2021/01/12/telegraph/index.html","270bfe0d00f8836cd1962582ea3d22a6"],["/2021/01/14/comics/index.html","b989b996b1e4cc9bf6a25652da7fea17"],["/2021/01/14/ftp/index.html","221e7f45ca1f9057627bfc2a5a4640a3"],["/2021/01/14/oraclecloud/index.html","50e51ffe006274e8ee6b0998132bf2dd"],["/2021/01/14/porkbun/index.html","ffb91ad6045d8bb1eb1f749c944bc80b"],["/2021/01/14/powertoys/index.html","0ab0bec5e83a580cc471dcc4d0299807"],["/2021/01/14/taptap/index.html","2b92cbb0ecfb7ff1cba84e17ced69312"],["/2021/01/14/ubuntuvsftp/index.html","ff16ac6ea8af0780b4472cda4d9f5210"],["/2021/01/14/小说/index.html","18fc537e0be9bc83ba37891a38aaceaa"],["/2021/01/15/freeproxies/index.html","dabe5f6f49b5e2af440344d597b63b9c"],["/2021/01/15/incaseformat/index.html","3c33d771aae7dcad3b9f6e5a44518410"],["/2021/01/16/euserv/index.html","9eb67c03c824461cf497b529f47b3872"],["/2021/01/16/winxray/index.html","b941c257bfc1ebeb5d27b459e4759f40"],["/2021/01/18/qqreadhistory/index.html","3266871fe88dfbb3190e6c534691eacd"],["/2021/01/18/qqrevoke/index.html","f5766d2e1ce39cbb634096ddc49f3e65"],["/2021/01/19/freevpn/index.html","769a0a9fa2fe49edcebf433853bb119a"],["/2021/01/20/browsertrack/index.html","bea9c38568f8c10617697001d5dce1f1"],["/2021/01/20/v2ui/index.html","42843bb710f7bb0e349decb3bd792f69"],["/2021/01/21/failedtoconnect/index.html","e23350fd362232aa97faaf63810014bf"],["/2021/01/21/gitcalendar/index.html","762ede254cbea9b49e1740f5f50112fb"],["/2021/01/21/markdownformat/index.html","dd7f9977e4deb49df6dccfd9e2c05607"],["/2021/01/21/markdowntable/index.html","6d28dda68937e7dc465f96322b7fc5c8"],["/2021/01/21/vercel/index.html","d2fd2016c8a06bde19fd23c79789ac64"],["/2021/01/22/hardware/index.html","381349c25b7c6689fae989d12ba6b5fd"],["/2021/01/22/muviz/index.html","d50e08c9877f016b3d6609fc9e21126f"],["/2021/01/22/randomapi/index.html","71b20b2c0171a9c76ef981f460b61739"],["/2021/01/22/searchimages/index.html","ebfaeb35cce50f7bbe852cdfcce4a7a1"],["/2021/01/23/RX文件管理器/index.html","e80ac7f3627d9d3708def3ca404267ca"],["/2021/01/23/chromeflag/index.html","35b43ef8cc9746c3ce68d3352b3f9eba"],["/2021/01/23/qttabbar/index.html","7f29fd0fadb8e0b244b05b6729a5fb55"],["/2021/01/24/githubspeedup/index.html","76939f38382cd00ffd2d05159a5da06d"],["/2021/01/24/jsdelivr/index.html","3d29550580a4b30207bdd1b4a09038d1"],["/2021/01/25/note/index.html","299a4a6b3ad9cba484f2c666dd947055"],["/2021/01/25/soul/index.html","9dac6ff5e74b31a6e77c45904bb18861"],["/2021/01/26/herokuxray/index.html","dc0881e1821cbc9c0c21d3b810375dde"],["/2021/01/27/proxypool/index.html","cd60319cf7f2ea5c74f3ed91ca1ca65d"],["/2021/01/27/tracker/index.html","89eb40f699c7b7f5268305daa5996459"],["/2021/01/30/pandownphp/index.html","989bc96bcbfcccac081c8c81fcff4ad8"],["/2021/01/31/newgroup/index.html","6b0ae6542eb943b4438dd3dd68de5bc8"],["/2021/02/01/clashlanguage/index.html","982ddf09707c3871182e93d705ab31f0"],["/2021/02/01/encrypt/index.html","abab0ead8732604ce4356be26965d65a"],["/2021/02/01/footermotion/index.html","461944c6e3f5c5fa356a0bf00f3bbc9e"],["/2021/02/01/gitter/index.html","83266307cd1585ef70528c609d3e05d8"],["/2021/02/01/pixivtop50/index.html","1f9cc7a6c799fbbe2707846491a15f47"],["/2021/02/01/scrollbar/index.html","4d25ee00fe63889d455bdd0fbf18503f"],["/2021/02/02/clover/index.html","3f234d5287ef3d2302ec8efbc4eb598e"],["/2021/02/02/maya/index.html","a758f03a4dd97c034d226fdfd6255ac1"],["/2021/02/02/speedcontroller/index.html","5d2b98142f4ab25a092f2ee65a65e873"],["/2021/02/02/yesmusicplayer/index.html","940365fd25b0171ef431aa558bae6ef6"],["/2021/02/03/lenovoonelite/index.html","e955928f56bca079d576a4873dc3bb62"],["/2021/02/03/skipads/index.html","6cbd0543406e06c79e9d73561551b77e"],["/2021/02/04/picseed/index.html","c391741fdb1e37593e676def1d9f6c1e"],["/2021/02/04/renren/index.html","6e3d0dd29ab8d5737f4e38e9825bb552"],["/2021/02/04/serverstress/index.html","a9aa26c3509d0969012f582fdb766283"],["/2021/02/04/wikipediazh/index.html","ca184b308fc9cc4a7a8d12a63ec5d124"],["/2021/02/05/googlevoice/index.html","191a737c79678857f5add7fe990ca050"],["/2021/02/06/clashconnection/index.html","739e2b217324de83339f502aded10cb8"],["/2021/02/06/gvtransfer/index.html","4487c4d90a94002c78de96d90f856305"],["/2021/02/06/todesk/index.html","cc8cee23b8aa4d3ae7d70e0c88214712"],["/2021/02/06/vpnblacklist/index.html","b6f43409971c4e0d70ac820f538b1ad5"],["/2021/02/07/mklink/index.html","2b1b88fdc4891be47737609bb737b76b"],["/2021/02/07/speedtest/index.html","f5d141a1dcc384113b339cbaad6787cb"],["/2021/02/07/translate/index.html","6cba41cb42e57548cd1895846d7a0bf7"],["/2021/02/08/ewomail/index.html","6bd0bbb36540da20a1722ab36d33ab8c"],["/2021/02/10/officee5/index.html","34dd02c36e1800212fff6d1ad7487ecf"],["/2021/02/10/raidrive/index.html","2f64980ac6affe84f7ed6dc9160c6769"],["/2021/02/13/e5sub/index.html","c825981cd9d7e76f4af7a9973f912bbf"],["/2021/02/14/screen/index.html","028d4217b64a3c10573f30f2836cefda"],["/2021/02/15/clashtun/index.html","cb0bb61a70bd497c4df9fbc7da92fe23"],["/2021/02/15/messageboom/index.html","96f7bcfa8fa87401318f3241c5f6b6a6"],["/2021/02/15/oneindex/index.html","e1ac6df992e0ec44d03c549e849a9bc5"],["/2021/02/16/govsites/index.html","8ab5160bd9c6bd9af6484e8b1d044e83"],["/2021/02/17/hexototypecho/index.html","0aa8d2ac6612aa2569deb348e13db18f"],["/2021/02/19/fiddler/index.html","9a57528cb4b1403d9eaef800a1b74621"],["/404.html","d23fdcc62311ba4fc471fca0284b6eb2"],["/archives/2020/11/index.html","03d7d50ad010e3605d32e6b015a6c9c7"],["/archives/2020/12/index.html","fd794c1302e7f6251e2f73ce2635e639"],["/archives/2020/12/page/2/index.html","3e041b9c6128a013e1c6673f76087eca"],["/archives/2020/12/page/3/index.html","4b26fc6adb7f5d6225c7c25397a49fd1"],["/archives/2020/index.html","5a73e99f98f677d1d44ddbe3c9d6b662"],["/archives/2020/page/2/index.html","591a383c0c1cbea88ab9b38fe1f780bf"],["/archives/2020/page/3/index.html","075e2059cf80830e25712628075dc477"],["/archives/2021/01/index.html","b56f0739c363342ddd99a5960b5a79f7"],["/archives/2021/01/page/2/index.html","846a658a2eb889e103bc5cc75abbc1bb"],["/archives/2021/01/page/3/index.html","7c2f78896aaf62fd6b793088b94d8c53"],["/archives/2021/01/page/4/index.html","6bdca39df0af014e9ec48470f82ea70a"],["/archives/2021/02/index.html","7159282ec15db018b0303e12d24de0ce"],["/archives/2021/02/page/2/index.html","52281283cc681f92ef5f13a692eff1db"],["/archives/2021/02/page/3/index.html","5cd393069db947b0fb69efac41a17bd3"],["/archives/2021/index.html","e5a655b1b4615214f710dd8f215a379e"],["/archives/2021/page/2/index.html","7006bdefbecc7ec5133cef86b91b3d32"],["/archives/2021/page/3/index.html","905b70bd4fc8b9c3d8a0ab45ca0b6fb9"],["/archives/2021/page/4/index.html","29ab6a2db1c46374514e342c04a312e5"],["/archives/2021/page/5/index.html","fc11c7e119c19579b8ed4856cfcc0373"],["/archives/2021/page/6/index.html","09caa17d6f70fe364fe849d3b9bb234b"],["/archives/2021/page/7/index.html","c2a346ec2b516a86064dbb075db907a8"],["/archives/index.html","53374b13cc873af0fb846d37a3f00af0"],["/archives/page/2/index.html","cc62fd7b9485483e93b9ac2a1d177082"],["/archives/page/3/index.html","9b2e1ea65a85d4527ba2259b10914e03"],["/archives/page/4/index.html","4456ed9655f4fdb55cf3c94b1e95048e"],["/archives/page/5/index.html","71323a072db883db96e3b2591c52727c"],["/archives/page/6/index.html","22ad3b5b8a1de10f8f26d7df1e06f798"],["/archives/page/7/index.html","d4726f6b8f3d263092d7789d0d63c296"],["/archives/page/8/index.html","a7ef5dd5435465b4cd277025bae753c0"],["/archives/page/9/index.html","dd8ea07c6486355f4e46e28cf536c7a1"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","08b8754dfb9d110527f20ce1566639da"],["/categories/index.html","0027d06454ca001457f937bda2c45c9f"],["/categories/下载/index.html","e1138adf11c4b2e47029b4c9faf6c455"],["/categories/安全/index.html","75b10289575b838e839fb850ad9be40f"],["/categories/建站/index.html","60d82c7e6ee0d19c6a8782128907cc3d"],["/categories/杂/index.html","56f2b0641f4ba9198df5111702f9b3ba"],["/categories/杂/page/2/index.html","d6135698a27a1f9901018b1ed6760e9d"],["/categories/测评/index.html","f4f2c8e2085077dd1067666835035189"],["/categories/科学上网/index.html","cbb81fcee1fd75745e3e23267e83d0f4"],["/categories/科学上网/page/2/index.html","fb19ae0f2a73fa18165c42bf1acfa01f"],["/categories/编程/index.html","0dff618dcb97c213688faba67ee3932c"],["/categories/网站/index.html","36570df471ca31ba23a3fa2902476384"],["/categories/网站/page/2/index.html","49d1d5a4c535ac157bfc4be057080b6f"],["/categories/软件/index.html","8b523cb30fe101735267269d67944ed5"],["/categories/软件/page/2/index.html","63a74b771ce8f44f3715ba7f6d4863e2"],["/categories/软件/page/3/index.html","8877b4bbea24446e0f287cca9c2eb6c1"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","2dbaa8cf7320b9e280c866f0552cc37f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","e796b8d5f210a66efae8f1acf45c9af3"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","6513f61591d41468ae0d327dde575607"],["/ios/index.html","f12829e5cb048bae887f0918e9d12f8b"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/2/index.html","0552c9e9c7e25fc3382cb9fc3691cf1c"],["/page/3/index.html","e9f716f1d57844bb7cee68dd73de0386"],["/page/4/index.html","fa9e4df0ceaf254b5e7e4df6949025ec"],["/page/5/index.html","72b1c14bec83945d1dd86dc8d407ee11"],["/page/6/index.html","1c714710b07fbb1b944afa5142bb41f8"],["/page/7/index.html","d58c43bada274844fa6ec60656f617f8"],["/page/8/index.html","f4d0c26fe00af92ca3b2ca7194148352"],["/page/9/index.html","bd1f1992c7dfec02bca8488c342e35d8"],["/payment/index.html","3ccd232a167c077be373c6fb42f161e0"],["/privacy-policy/index.html","80113ff5a0a7ee26791445777d6fab85"],["/rss2.xml","5a675dfcf97bfe6ad3db4a1a28837bb6"],["/search.xml","7fa1f29247a9681c818365abcc367a03"],["/sitemap.xml","2f3de213b171ce253fd03b61423d98a1"],["/sw-register.js","a56bea727ee13d05595154bc906725bb"],["/tags/5t/index.html","032bc44b0facf4bbfbc8043b7f5779a0"],["/tags/Clash/index.html","f28ba9bdb2b97eb9c3815424b02bfb76"],["/tags/Clover/index.html","f3a2771732bca120b5b63372d12622a0"],["/tags/E5/index.html","2bac7a96efb88ab61da0ee938ec1bfda"],["/tags/FTP/index.html","ae3a297251fbbe7b16e074dbade2bc7e"],["/tags/GitHub/index.html","7e43a90521e519112f4394be98c8a504"],["/tags/Heroku/index.html","776083d63a9b2e35db889de39a19bf6e"],["/tags/Hexo/index.html","cdbe9bbd49c229a35e7d318d7deb3c58"],["/tags/Lenovo/index.html","b7389b743b6c6a389d9c81713db07ecc"],["/tags/Oneindex/index.html","fe0cc4fbf176c85286a773581d6881a2"],["/tags/QQ/index.html","7fcb50cc1cb62af54873c241b6156e29"],["/tags/QTTabbar/index.html","06c5d796f985c4cd810eac61852a4994"],["/tags/RX文件管理器/index.html","6b4b6cf1cb0013ea978eafe3eb100ebc"],["/tags/Todesk/index.html","d1549b7d36098edd82e776f6ee9361e8"],["/tags/Vercel/index.html","34a1d62790745eb2095176c65382ca38"],["/tags/ads/index.html","c70e84d0ce1ec0866600715741f70173"],["/tags/api/index.html","36e4ca983c7797060d31988cd5b312ee"],["/tags/app/index.html","e6179659b5b651b358aa31b36ff3d7e0"],["/tags/blacklist/index.html","451bb425d9a1f9224e598b0be1a69a71"],["/tags/butterfly/index.html","b14e94a6a3320ee8389c5d660a6442ca"],["/tags/chrome/index.html","5796080161610f77bb7797a3f9257965"],["/tags/cloudflare/index.html","832025567f4b75838e9060e24506e49b"],["/tags/cmd/index.html","8ca7e1c945721f9264bd074602f6f420"],["/tags/c盘/index.html","1804b04b4d05bea3cdc0ea4ee32da588"],["/tags/email/index.html","f3eebbf050ec16715ce068d9b65c78ec"],["/tags/ewomail/index.html","d505ea734198dd75b7d05e3530c03fd0"],["/tags/fiddler/index.html","b00d3e3392239d8b633ec66777150c8b"],["/tags/flags/index.html","59c6f337f6719488a65d74fa4561a0e6"],["/tags/footer，页脚/index.html","607e6b4a8226153d16c728fb7cddc304"],["/tags/galgame/index.html","fc4fffc5139f24ac5e2dddb15a466887"],["/tags/git/index.html","7dc1ad0618b53c97146183532640e489"],["/tags/gitcalendar/index.html","43c6bbb4794502a0bd869bea2eace4c8"],["/tags/google-voice/index.html","6e8c078486c69ead98d0cc42559154d7"],["/tags/gv/index.html","3c572873632ec06d18153e8d9c163b80"],["/tags/index-1.html","fb2cdd732f7024941f9a0805a3245b97"],["/tags/index.html","38d822b2228e0c7382766147b580206a"],["/tags/jsdelivr/index.html","ec01eed2877264ce9916486aa46807e9"],["/tags/linux/index.html","c3ccb44697aca81478b7063284be02df"],["/tags/markdown/index.html","83fbe749b6732676bd09f15e529500d6"],["/tags/maya/index.html","268b5a7048a551b3482c82d288200362"],["/tags/mklink/index.html","38124dac2d2e2c62cdf0056e0cde69ff"],["/tags/office-e5/index.html","3864684216ae7aca8bc2041b0a332aba"],["/tags/onedrive/index.html","0aef16d81b6f4e2cc74b873bec7934e7"],["/tags/picGO/index.html","5d7b191e6b709fb92dd23dcbe370d301"],["/tags/pixiv/index.html","27364ecbf6b13981ce1e29d05dc6385e"],["/tags/proxypool/index.html","744feaa7af360e1fa071ceceda5caffa"],["/tags/qbitorrent/index.html","6e63ddd393e55a274db97c71bbd49774"],["/tags/raidrive/index.html","34b9e97e7e9216416d954a1921526c26"],["/tags/screen/index.html","a15c42aedc0de7b21e9fc94e8f278d9d"],["/tags/speedtest/index.html","83f2fcb85bee8501a960f0d48f904f2e"],["/tags/tap/index.html","c4901e46a954a1f812af1b2471e097f6"],["/tags/top50/index.html","3528cd177e50a6aaeb4bd140abb90136"],["/tags/tracker/index.html","f438f7fb342b9fbf981a79eb82aa1f2f"],["/tags/translate/index.html","48b5d3f77a98364f88a42a61a64b6842"],["/tags/translater/index.html","07ab587c63110afb76391558513fb32c"],["/tags/tun/index.html","ef83c5ce0ae78e609bfb2f03b58e5da3"],["/tags/typecho/index.html","bc241fbe1199af6e561796cc1133d84e"],["/tags/v2ray/index.html","a70e4681936ab571fc748c03002e8200"],["/tags/vpn/index.html","583d3965e630290a50b7e33327eaa89f"],["/tags/vps/index.html","012533aa36c7c791bf7e62156328cc23"],["/tags/windows/index.html","13a0f7874b4f95b7462a3d47a5888cb2"],["/tags/windows端/index.html","cbde4df590b88d0e3ce26f7a0ea64616"],["/tags/xray/index.html","b0d1aac5d62b61daea7d29e2bdc8808e"],["/tags/下载/index.html","61a56844f7afe408eb08b0afa07daeb1"],["/tags/不限速/index.html","f5720b0d7699e9ec0f90843d17f9a684"],["/tags/个人网盘/index.html","6b56684b158597410d79a759871c602f"],["/tags/主题/index.html","0b9f72e64db309fd180365118a0d398c"],["/tags/云便签/index.html","3e0295a1ee1f5d604b2a6441a830922d"],["/tags/云盘/index.html","b881ce3e2ec612920e7fe40fb36faf17"],["/tags/人人/index.html","db9272c460635726e524a2618989ee45"],["/tags/代理/index.html","992c5145be58a8124e2235b391d1f5d3"],["/tags/代码/index.html","deff635f2df12c8d3066a1e2279cf7ca"],["/tags/优选IP/index.html","86d029ad8277eff607ffaf37cd86c719"],["/tags/便签/index.html","2ed01eebf0f26fd0c406879b310407b3"],["/tags/保号/index.html","e30aff520da8564f2c4434bc2c17e03c"],["/tags/免费/index.html","22c93ce5867cfc61b67b4533765f6318"],["/tags/免费节点/index.html","b6657dd243cd50c094532155a2a219d3"],["/tags/加密/index.html","2ef54fc415ed949821a4f90966953560"],["/tags/动画/index.html","e5606bb6af6978a48bce610d73fd4b39"],["/tags/博客/index.html","06c308cb1294085f43f63a95176a09ec"],["/tags/历史记录/index.html","c750a9ff58f73e5383423caa5340e0e0"],["/tags/压力/index.html","9118e1dc4b7ef4d8d0daac23251f4409"],["/tags/压缩包/index.html","7795b2c46c7d076660dd1c4f0da1971d"],["/tags/反代/index.html","60192750a8e42b0fba7eee21b07757b5"],["/tags/可视化/index.html","01af0b249980ea75edf4d8a0915c7242"],["/tags/命令/index.html","1bc6bb9fdda2aaf2920e6a3fae19f763"],["/tags/国家/index.html","0505bcb97d2424ee99af0ea2c779c053"],["/tags/图床/index.html","1c31c5bc67cdc3613920294ef8118dca"],["/tags/图片/index.html","e0be73f38615689511376617b846233d"],["/tags/域名/index.html","c29c789e2fb5c803d18c660f0ac4f35f"],["/tags/多标签/index.html","f77677616d566a3115874829a3fbd4db"],["/tags/存储/index.html","104a530620a7d056114ff7b70ed3b68f"],["/tags/安全/index.html","6fc7c20ecc97721dc4d1232533b8148b"],["/tags/安卓/index.html","15b0cc3c4b9bd74e01e2b075fddaafc1"],["/tags/宝塔/index.html","952a3136cbae9dd8b650a6e43393e1c9"],["/tags/广告/index.html","7057fd182ca9fbba562a6c81913ea89d"],["/tags/建站/index.html","c354a9ac31544f8c607aeafcd1345bfb"],["/tags/影视/index.html","bd8bc3248e372200dea7168d30921ca7"],["/tags/快速启动/index.html","e956964dc681e2518b16461413ee3399"],["/tags/手机/index.html","795af49ef4302bde107a761e05fccd56"],["/tags/托管/index.html","faa81ec543275eba7782b99a3b0d0186"],["/tags/抓包/index.html","c26dabcc421708909f0c7fe4e76f9aeb"],["/tags/抓取/index.html","429a075832da7dd3a3c80c1646f31bff"],["/tags/投屏/index.html","18a9d1b8ffead42746e812b97d818c95"],["/tags/拓展功能/index.html","5123a539b25586df31ee2c5808bb15a3"],["/tags/挂载/index.html","af2952f7c5b4b98a8fea6ab3d77b5a43"],["/tags/指纹/index.html","b29c9cf7521852e5b3b0eceb7039ed02"],["/tags/接口/index.html","b7c28b64e877ccbdab40107b096ca7de"],["/tags/提取图片/index.html","affa0dc3ef696375bbe8682dd309edf3"],["/tags/插件/index.html","e48866509f9cd048f58f1129192950c1"],["/tags/搜图/index.html","baeca304c02fe22523d4708ae7888f49"],["/tags/搭建/index.html","d03f45f09c8e0ef20f216875efa449fd"],["/tags/撤回/index.html","b14ec4937cc0e7b5a3589677bb8b5599"],["/tags/播放器/index.html","bc033639bf095eef464e348afa7635ee"],["/tags/政府网站/index.html","37d066b9b10676991886ac387b367fb6"],["/tags/效率/index.html","800f7791e48945c542934c61bd52814c"],["/tags/日历/index.html","a55771c2f11ba0ed73b674ac5df59b3d"],["/tags/服务器/index.html","8449746890b0ab2e41ba29a83b6f64f4"],["/tags/桌面/index.html","1271ce42fe0fd38cbf484fd75b54691c"],["/tags/梯子/index.html","dcbd0ef677a20066203acc193e0da6e8"],["/tags/检测工具/index.html","a6c73b739b4043f3c06d2e48fd66ccbe"],["/tags/汉化/index.html","704786786ffbdedb2bc4ebf4c92678a1"],["/tags/测压/index.html","eb07fbcb379251a02e4f1e7dc9e236dc"],["/tags/测速/index.html","3e79bab779fcff9d0e198d83939f9ef1"],["/tags/浏览器/index.html","484c7c24faf759a9e6ab95a206316447"],["/tags/清理/index.html","7bd33f8e79894b37f1693902b7cd1932"],["/tags/滚动条/index.html","3b4ced7ac7499a6520735b59e520890f"],["/tags/电影/index.html","adf6e2703bbb7027ce566f6dc22b652a"],["/tags/电视剧/index.html","f748c3083d0dff7d6354ff1f66c9f75f"],["/tags/白嫖/index.html","0861f5b36e2e5ca574abde6ddc31df88"],["/tags/百度/index.html","825810e8726e664cb4e0f113873ad5be"],["/tags/百度云盘/index.html","296bc7176b8969f31cb38b0ea655bfad"],["/tags/百科/index.html","30e42e5e442005e212bd2e7f369b72b4"],["/tags/短信/index.html","87d0f71bf1d40c693631d32fac2c3eea"],["/tags/硬件/index.html","1dc7cb4579fe7e6c4bcf324341a983c4"],["/tags/科学上网/index.html","45a210af2574db17944b039191f838f6"],["/tags/空间/index.html","e60e19012c4eabdd012e1c3767e4bd94"],["/tags/笔记/index.html","acb73f6daf2c5cf08348011f6c62a661"],["/tags/简洁/index.html","0be2e50916514fbb8703b8967e649c9c"],["/tags/简约/index.html","a841bd28fa523f5aa24a389f3a30ca75"],["/tags/维基/index.html","353bc821cbd7b8def31dfe7d643eaea8"],["/tags/网易云/index.html","8a9df0f67c291167ed46415060cb2d66"],["/tags/网盘/index.html","1f8ba98bb99c7a53a025a9420e564512"],["/tags/网站/index.html","5e2ebcd08a1bc305065bb9191e60894e"],["/tags/网络/index.html","d93abe528f331f3cca34c244385b292b"],["/tags/美化/index.html","5e3be611cd50ac9f7333dd9d203da7b7"],["/tags/翻墙/index.html","83547df1b4fc12836ee0e2f59689ab4c"],["/tags/翻译/index.html","8caa8d2ac2cbe9ab8980aa133aa50f28"],["/tags/翻译器/index.html","ff58146ebe8c18746f600b9646065c27"],["/tags/聊天室/index.html","d81c922191fe2d2213ed3c96370436dc"],["/tags/联想/index.html","7020bd5597d59fb8d89dabefc4a87b44"],["/tags/节点/index.html","43501a133357f73cde20250ae0d38f85"],["/tags/虚拟手机号/index.html","f84e43faab650abb9ee781df93b0455e"],["/tags/补丁/index.html","47328041c31943e1b7a17f8b5d850a46"],["/tags/视频/index.html","6fb472967259f7419e1be8d05d936bf1"],["/tags/解析/index.html","01f1a56241b0c40a8be90a70997b1760"],["/tags/订阅链接/index.html","6f6ce0eec24584c5888903aaceda719a"],["/tags/记录/index.html","f9b77408c973b7c893fa1c295614948f"],["/tags/识图/index.html","befba52fa34960141c46381e0f03151c"],["/tags/语言/index.html","49dff9652252ace481d1cd3890491281"],["/tags/资源管理器/index.html","9f45ae5d9d8021c4d313315de9ce27eb"],["/tags/转移/index.html","6f6bdbd6d0158aaf242f901c455d6b3b"],["/tags/软件/index.html","0f51a84322a225e5a13fa2fbcda34022"],["/tags/轰炸/index.html","d4584c89e184d59a571e08b96cf14727"],["/tags/迁移/index.html","332089ae1f3f8b4e98728a362eae3cda"],["/tags/远程控制/index.html","b84bd2994030c8a4a3c6d656e692792c"],["/tags/连接/index.html","7b3ea0d70320b8fd0e3c421a92a57132"],["/tags/追踪/index.html","e7523593430727e5ba27eec5c3056daa"],["/tags/速度/index.html","dc501d378d3fc29b41759ec5283eea93"],["/tags/邮箱/index.html","51460715ca05629100f84ac7756d3298"],["/tags/酷炫/index.html","ed7345341f71028e7d379bf9caa770f4"],["/tags/钓鱼/index.html","8ba5761750a0045fc99f595aa325ca48"],["/tags/镜像/index.html","a9c1eb7868dee2f1ac45d002b29172f4"],["/tags/随机/index.html","380305cd86bbb3648874738a748c899b"],["/tags/隐藏/index.html","2fa1b87c3a489e1b5397b11184470a32"],["/tags/面板/index.html","79d8dfe018bb0fc140a603601875ac01"],["/tags/音乐/index.html","ca25db6c6d929a4277882c501b92a1ae"],["/tags/高颜值/index.html","35bc572c1ae063c6c344f964c72d40f6"],["/tags/魔改/index.html","999e71406b0378a06bd233acee5397eb"],["/tags/黑名单/index.html","c50881f448a9ce71321fc3bd92976195"],["/urls/index.html","58a29e71314fa6a9f152352b656091a4"],["/vps/index.html","9d88708f898ac2d84c364ef0dbb93cb9"],["/支持/index.html","945f95668e13b65f98ead59e9244b9a2"]];
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
