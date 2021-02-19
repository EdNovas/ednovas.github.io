/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","d69f8ea6b1f436080c8f4e1ccccd2402"],["/2020/11/29/clash-windows/index.html","b7034cb90042e27301de226bf51d6f7b"],["/2020/11/30/websites2/index.html","fe438eab034f48276d2f63a95694da96"],["/2020/12/04/iphone4s/index.html","f27c55fb9702397a68cd2279b4eb9e26"],["/2020/12/04/onenote/index.html","1d42c21889588a26f5c63999a82d0480"],["/2020/12/04/wesites1/index.html","c800208091007ad0821262325043e9b3"],["/2020/12/06/nokia808/index.html","f38e6ef72fedc53223894562be714fba"],["/2020/12/07/ipad1/index.html","b23781e37328c194a73a7a9941d65a17"],["/2020/12/18/freesubscribes/index.html","23b81d30869f0d1c42f2397e2d5b8d5a"],["/2020/12/19/musics/index.html","40114ce515052ab87396d629d9b15d8a"],["/2020/12/19/shadowrocket/index.html","d5ef78eba9a403a828fce60ef9fda1c1"],["/2020/12/19/v2ray-windows/index.html","d20a5062368451aae0d5a788becce507"],["/2020/12/19/v2rayng/index.html","9c499bb0ddfd7a6171c8be9200b90710"],["/2020/12/20/beoplay/index.html","fb20b99487d750b63da1de056db367f1"],["/2020/12/20/订阅链接转换/index.html","2c8622af45bbcf669b4b3d12027ad64e"],["/2020/12/21/chrome浏览器下载提速/index.html","635f7609f66a631928d57d0f70402786"],["/2020/12/21/免费128线程并发下载xdown/index.html","b599a8a21e3fd659cc486e910927cb77"],["/2020/12/21/免费32线程下载软件ndm/index.html","53d8d29cc198bf48a9e66aa9fc68411d"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","376fe1c8c986218008c7d4886cb9ba1b"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","e8f2c925cd4f82a51ee1eb272b61b3b0"],["/2020/12/21/广告怎么知道我在想什么/index.html","d11ed59f2bcd36ab68a00ec84ab3e983"],["/2020/12/21/无名·引子（小说试写）/index.html","8bc2dc7daca42fe9ebf9259371f2e0f8"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","23127a0f35615d82fe8358418af6fa53"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","8cc5ced46cd0c1d32efcb23ab4251a14"],["/2020/12/21/高速轻量下载器aria2/index.html","32281d0f585c93177ff73fe691994f5a"],["/2020/12/22/2020-cee-roo/index.html","9a2bf66b803b9881cdf2ece9f79a194a"],["/2020/12/22/firefox插件、github、steam富强/index.html","9ecb81fe89be3e5e796b477625d4b13c"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","5c86e41ecf0a37b1f94e53cf8d2cc235"],["/2020/12/26/python-day-1/index.html","2a94b31e3212b87cd03acf259457cd4b"],["/2020/12/26/python-day-2/index.html","52ff1edff0bc7286511160eb1a42435f"],["/2020/12/26/度盘不限速下载方式一赏/index.html","19430c5d52124cf3ab1e48a9a678e9d0"],["/2020/12/26/添加开机自启软件/index.html","120eebfc930b70e4afc4b83c15b69c11"],["/2020/12/26/电脑端截图方式一赏/index.html","cad31a7684f80975d0d2d547cff2f8d8"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","06bb167a04df53cd113b1d7d0c907849"],["/2020/12/27/最安全的浏览器tor/index.html","f99af7c32aa38b3e27f7221995ae91c5"],["/2020/12/27/网易云刷等级和听歌数量/index.html","0834c7814b96b93e66d8fe82dd2ed160"],["/2020/12/28/freenom申请免费域名/index.html","f40cc4d1229bcb056bd8bc0159b804ba"],["/2020/12/31/机场/index.html","08501cfc26c618fd31ed7443f6c24714"],["/2021/01/01/M1/index.html","7d442f9625714a9972360923a82f69b9"],["/2021/01/01/compress/index.html","71e477d6284d6ddb84db9c96ef91ce97"],["/2021/01/01/infinityfree/index.html","8847cde8e6980e8d634b9e3216f84c51"],["/2021/01/01/硬核翻墙/index.html","bcb8e65b0ccd51ff112dfef1121eb22e"],["/2021/01/02/qq/index.html","a86887d7e2811a1fa701f6c82e44f282"],["/2021/01/03/netch/index.html","3f29c73e92deec1688b7923b027c7d31"],["/2021/01/03/waifu2x/index.html","5d84e9e72e2f6a4c3bba1ffdc55dfeb9"],["/2021/01/04/ads/index.html","fe6c27f0384fe5da722391840d42b422"],["/2021/01/04/games/index.html","960ad51734321f9826039b9ef0cf1382"],["/2021/01/04/heroku/index.html","110aab7f1971ce7379dd0bb9d8df908e"],["/2021/01/06/movies/index.html","efd1de0a10e438f184b815924e2f60e1"],["/2021/01/07/google2020/index.html","3a24d71a4684e34b969a511691f984b9"],["/2021/01/07/lucky/index.html","579bc7f84041c5757a790abe904e452c"],["/2021/01/07/spotify/index.html","29f77abe63d71a5e347f8c146e294a6e"],["/2021/01/07/thunder/index.html","3a62df9a6ca4680dc8e058b037299eab"],["/2021/01/08/adguardhome/index.html","c2fa56a0eeaf5136b91584977439d6b5"],["/2021/01/10/IBM/index.html","c0d9cf09dae66c0b8c0b1197422f10bb"],["/2021/01/10/potplayer/index.html","6d6062de1cc2678a22f989ce2458ae0b"],["/2021/01/10/sakuraanime/index.html","626b8c5fbcce9049207b978c1156ef39"],["/2021/01/10/美剧星球/index.html","1aa319641ff906f3f5cbb6621956ec99"],["/2021/01/12/telegraph/index.html","fbfe7608c9ae2d2805ccd358655329c7"],["/2021/01/14/comics/index.html","0bac9a5f362de82685efa8274309e3f3"],["/2021/01/14/ftp/index.html","0e47a0a8cf89fb70803b75c93d66e221"],["/2021/01/14/oraclecloud/index.html","6f3969b5fb62450a20187dbfe6e5089a"],["/2021/01/14/porkbun/index.html","25c0f92ee802e491fdd176bdb3e732e4"],["/2021/01/14/powertoys/index.html","146a14691d9d427b4417e34c6e4fc90c"],["/2021/01/14/taptap/index.html","955fb36b9eb9e24045effd533ad7268c"],["/2021/01/14/ubuntuvsftp/index.html","540493b2a210fb774506b5c5c5c2661d"],["/2021/01/14/小说/index.html","85739da455198480b8512ffcda7cc226"],["/2021/01/15/freeproxies/index.html","dfd15b82c447a0408aaaffaff6ce6b01"],["/2021/01/15/incaseformat/index.html","ac83195212ff4b2e42dcb00bde92c054"],["/2021/01/16/euserv/index.html","a65fdc27a9189172b5cdc53f97caad1f"],["/2021/01/16/winxray/index.html","0e7084346bae0b0c761860aede222e0d"],["/2021/01/18/qqreadhistory/index.html","092e1d4f3475e78425a565060979c714"],["/2021/01/18/qqrevoke/index.html","d8845df6cb91c8a63ad69a248e61d97f"],["/2021/01/19/freevpn/index.html","19e53cf2fefcd8f0950a2c9dc58690c9"],["/2021/01/20/browsertrack/index.html","ce9daf7ae61fdee23f70c85dae4b7fdd"],["/2021/01/20/v2ui/index.html","55e6b255962fc1f15b52724eb74644ca"],["/2021/01/21/failedtoconnect/index.html","69ca496f6eb67b996b71677293e9bc8a"],["/2021/01/21/gitcalendar/index.html","0042c1d061fe81148f040094f73409cd"],["/2021/01/21/markdownformat/index.html","dad3182f27d4288109e814718c03fcbe"],["/2021/01/21/markdowntable/index.html","0a71190168975c1166b9ec7e6dd8b394"],["/2021/01/21/vercel/index.html","717d664b2e88be0d6c9414910f81d183"],["/2021/01/22/hardware/index.html","28dde1abeb1af7ecce59acb51a954ef9"],["/2021/01/22/muviz/index.html","865dd39fb533ad8e7f87812a49919b1c"],["/2021/01/22/randomapi/index.html","1d2ed2d5f4394bc2ceefa26bd0180ecc"],["/2021/01/22/searchimages/index.html","b27e4ad978cb42304f4ee286978d226b"],["/2021/01/23/RX文件管理器/index.html","055b8b65a59a88f0e7c862cebef0bd6d"],["/2021/01/23/chromeflag/index.html","59eb8512a033114fe457ebf95a408fd8"],["/2021/01/23/qttabbar/index.html","93fb6a3ba06c5fa8c660ea59dcf7f18b"],["/2021/01/24/githubspeedup/index.html","68de6f3657bd8a0cba0f81a35088ec8e"],["/2021/01/24/jsdelivr/index.html","1b54561efd14dc9f69fe90c431b8f8a2"],["/2021/01/25/note/index.html","7f200733f4b12b9cc3dc4df1c90bb897"],["/2021/01/25/soul/index.html","775f04cc5d81eaadd2903816f1f04938"],["/2021/01/26/herokuxray/index.html","1cf549a3041ece5bb1963a074fc56291"],["/2021/01/27/proxypool/index.html","6146ad13ab9325dd72fac50591c9b885"],["/2021/01/27/tracker/index.html","78882123faaee2e089ebc06c3ab6f19e"],["/2021/01/30/pandownphp/index.html","af211029e9c0edd3163cff51c59f0a9e"],["/2021/01/31/newgroup/index.html","b76ba717149ece7bed7ca41756bb7a28"],["/2021/02/01/clashlanguage/index.html","6d40bfdfc334cbedc0c63cf4291d62f8"],["/2021/02/01/encrypt/index.html","b37415e842b38586becfcc27f8842732"],["/2021/02/01/footermotion/index.html","63bd5c8a01876e486f438c118eae43f2"],["/2021/02/01/gitter/index.html","3eccf76bea6f0d2f1c3d058ef65d9236"],["/2021/02/01/pixivtop50/index.html","e5be09fa2c936e626c7a2488a6de40b1"],["/2021/02/01/scrollbar/index.html","724a8a4a29cd1aed6e9cd1715cfd6eba"],["/2021/02/02/clover/index.html","f5aede32f7fe8e48f201c9bc1418c467"],["/2021/02/02/maya/index.html","f47eed4e83a2579bbe2fd4e37710d351"],["/2021/02/02/speedcontroller/index.html","ed70cc40b376b025b4e6c0ec135a9420"],["/2021/02/02/yesmusicplayer/index.html","fe77d2db7f0ded9d04e087d8a7f48a85"],["/2021/02/03/lenovoonelite/index.html","739f5be969b36fdb5c72ed0ef54b4c09"],["/2021/02/03/skipads/index.html","95fe46db14d79a02f30073428e7bdc38"],["/2021/02/04/picseed/index.html","e32006dad0ed5f0eef254140f0db5358"],["/2021/02/04/renren/index.html","2786100a511a20d93d3c9fca61f8ecc3"],["/2021/02/04/serverstress/index.html","c022dd4c230a6c1e687d24ba96ec5679"],["/2021/02/04/wikipediazh/index.html","a748ebd5626d471736adc99e3b477619"],["/2021/02/05/googlevoice/index.html","48c7243b05d486a95305ce8e6c4a9f16"],["/2021/02/06/clashconnection/index.html","c1e9d819912b40cef4c305a23a4631ac"],["/2021/02/06/gvtransfer/index.html","9cb63838033a32f0eec975870b6e0a92"],["/2021/02/06/todesk/index.html","cfe0da733abd4bd1d7eec353d18ecc84"],["/2021/02/06/vpnblacklist/index.html","9cdead0d0eab4fcd12e162939d85c794"],["/2021/02/07/mklink/index.html","9214f40f049fa8d6eb71fdbe8e57d6d5"],["/2021/02/07/speedtest/index.html","a54e3d48a52b2e31e7dcb3c730fbd89d"],["/2021/02/07/translate/index.html","d1766c650ac71ca3ad6b3102aa2b3583"],["/2021/02/08/ewomail/index.html","389cd9f6d24c3a5b52feeed49081b5d0"],["/2021/02/10/officee5/index.html","988b27e90ea2cf3a989d6b227093abe7"],["/2021/02/10/raidrive/index.html","b2900aabd04e1f7889b31bc0ef08a90f"],["/2021/02/13/e5sub/index.html","0cab106bb411c10c11ae0acffd9898f0"],["/2021/02/14/screen/index.html","6897cff44b48bc30fd7ec7d5f42da1ba"],["/2021/02/15/clashtun/index.html","d98959470c0bb0cccbbce50f3b64cdcb"],["/2021/02/15/messageboom/index.html","e0572f2df93b7aa520e05a97435d755f"],["/2021/02/15/oneindex/index.html","57cee3bd8cc914fd0258bd68ec27ea3d"],["/2021/02/16/govsites/index.html","1cb14e1570f6e4dfd8946a6cf6eaffa5"],["/2021/02/17/hexototypecho/index.html","cf42ced8d40e89ffa6ad450271b2465d"],["/404.html","40e7a9b12299d5885d00d6f5a518272b"],["/archives/2020/11/index.html","25c16cad68cc61678ed860cf5b64a748"],["/archives/2020/12/index.html","7a28952471f80b90ee0db64b94618672"],["/archives/2020/12/page/2/index.html","7777f7b0d63ba99d55a8b76a942a7fcd"],["/archives/2020/12/page/3/index.html","0a66cda365becf985427c554859599c3"],["/archives/2020/index.html","a9d6bea64d38abb5f619eed2f9899c19"],["/archives/2020/page/2/index.html","0f5ec46204ad673b8a9b1a1a1ec6a8f8"],["/archives/2020/page/3/index.html","1745cc0fae7466955e6e0decf8a84c4a"],["/archives/2021/01/index.html","0f14c6a821b7d1883dda526c931a03dd"],["/archives/2021/01/page/2/index.html","1285774ed6a6fa056e1b547d9d82e804"],["/archives/2021/01/page/3/index.html","298126817f4ef2ff0f8ea5da7773fadd"],["/archives/2021/01/page/4/index.html","0f7d0502f18318a81ac771f6d3305be7"],["/archives/2021/02/index.html","fcbcbc22540a062c17a9d3bf675c510a"],["/archives/2021/02/page/2/index.html","067633fcd6c858ef04da01b1299b6150"],["/archives/2021/02/page/3/index.html","1d5387345d4b62c14165b74d6d91458a"],["/archives/2021/index.html","7081dc26a020354b7d9e15a9a1d5c4ba"],["/archives/2021/page/2/index.html","f1266b09534cac24c80ee0c48a541c20"],["/archives/2021/page/3/index.html","099f014ed839c5bb5548f3aabe5181d5"],["/archives/2021/page/4/index.html","c853f05415cb33da77dfc010f0c72da9"],["/archives/2021/page/5/index.html","435faad859de42f06d2f54b562637ad1"],["/archives/2021/page/6/index.html","5122de0faff08c1086b661f246b76d16"],["/archives/2021/page/7/index.html","32414c3d6c73efef94f71575537779f0"],["/archives/index.html","11c14ff17850c370194f74151f8ca012"],["/archives/page/2/index.html","85717057cc52176006f1b1a748a91d36"],["/archives/page/3/index.html","61bbceea95317f8a17482429835890b1"],["/archives/page/4/index.html","07d3f1f7e8a496cd1cff61804418261d"],["/archives/page/5/index.html","985d820c28c6d10ff6e1d9672d3a9e41"],["/archives/page/6/index.html","777bc077161d8e174845e1402f944cdf"],["/archives/page/7/index.html","089cea1741c9a72ce9eaae73b3b77ed1"],["/archives/page/8/index.html","cfc189418ef55345b0a714289ada9ada"],["/archives/page/9/index.html","fe4dff52cabf8a99111f3ebd16d8cb07"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","c980a1d07a26f479a19617a786ef9167"],["/categories/index.html","e64c0618f2739d5186591bcd4b74acde"],["/categories/下载/index.html","379aad3785beb3906a56dd73502d92d7"],["/categories/安全/index.html","6f30b64cb29bf9c538a8b34d643fc8a0"],["/categories/建站/index.html","48cc5b73df8bc27a7c0f785d2d72d176"],["/categories/杂/index.html","b6839c87a13b6817f7b5f554c1e43fdf"],["/categories/杂/page/2/index.html","1ecf22a23f617c8a594bca18c003174f"],["/categories/测评/index.html","4a463ade0715fb3790da2b066acb9580"],["/categories/科学上网/index.html","2acd1e2f96130e1886042ff092f98101"],["/categories/科学上网/page/2/index.html","7581c06bcd2c7b4af3ea0195ace2c1cf"],["/categories/编程/index.html","8195425d481ef7900c91d0293ff08e85"],["/categories/网站/index.html","274a36be3b25873e40a510bde49056eb"],["/categories/网站/page/2/index.html","1d2d616fc727861c48183f4ea7a1b3c5"],["/categories/软件/index.html","c4a53677c9a0367188cb70f32c73f337"],["/categories/软件/page/2/index.html","3c917003c7a39e4cad150727fe2611c4"],["/categories/软件/page/3/index.html","a8e11970724fe871bedd34d5ec284a54"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","aa379b9c98e9fd0ced4f61f18a03c2e0"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","a25095e0f8b998a0048bde4e78e2bbeb"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","54c87f234c6a103e7a28cd9a327eb000"],["/ios/index.html","1b0f2f6439dca6a532ba4f4752a58bad"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/2/index.html","e98464b30ba701ee07181f3589435875"],["/page/3/index.html","2a866b740eec08c5ae7c354e00500141"],["/page/4/index.html","c04ecef7a779769580380057efde31dc"],["/page/5/index.html","06af66aa885b4be9f67caa6e9e053810"],["/page/6/index.html","84139171774d5c1f97624e841fb2e995"],["/page/7/index.html","b4f5f52e7b2ddd3be3758b7d9da7745d"],["/page/8/index.html","0516b8f47da968c7614245f2c48e08a8"],["/page/9/index.html","5368566ef960bd457ef115494e26cc99"],["/payment/index.html","0629ea8d9b3edd11bbca3066289e63dc"],["/privacy-policy/index.html","1ddcf8d2ec1fb3cac4f35bb919f955b5"],["/rss2.xml","66e4299fea0816260e084ff2d7d6559d"],["/search.xml","108cfe23cfafbec0cf5187bcd58cd31b"],["/sitemap.xml","6ab13739eda650945780e9e72cc1a5e4"],["/sw-register.js","81bf045b17a19c6d178188a51011e584"],["/tags/5t/index.html","518f78fb324101b89210c9f2b3f315ac"],["/tags/Clash/index.html","242fa084a1f8876da3b89a532b3950b0"],["/tags/Clover/index.html","71772f3ca3e277f96fb1789f4e7227ca"],["/tags/E5/index.html","8621cef8728a9a2751b633dd03baf072"],["/tags/FTP/index.html","62ff661c597240211b7586e409b5f7c1"],["/tags/GitHub/index.html","d200627767fc639226ca4f2fc08f7c11"],["/tags/Heroku/index.html","639872d557efa0d280f461bed87dd8c9"],["/tags/Hexo/index.html","2b99e4a440d59a9aabef822b2e50b0e7"],["/tags/Lenovo/index.html","241fe32cf82223292b0be4a4fa341439"],["/tags/Oneindex/index.html","892b8cfb259f83191a3791cb5dd1d5a8"],["/tags/QQ/index.html","039b1a414d1d9eaea1d923609b207c06"],["/tags/QTTabbar/index.html","c82c3b83387f10a8ea2a59c20bc1a0c4"],["/tags/RX文件管理器/index.html","80c28b3fb7ddc318e0daed6c7bc6a737"],["/tags/Todesk/index.html","b3b1afd1569ad79eb66797dff2a4381b"],["/tags/Vercel/index.html","37dee62d28886dc56730121f843c9d5f"],["/tags/ads/index.html","5b75acc822ba6c66271ce80c4922445a"],["/tags/api/index.html","8784f4b1c89d8e1e70d5b01039235b57"],["/tags/app/index.html","30f428527a6fbbc1e486049a4eff4244"],["/tags/blacklist/index.html","19ab91fa300fe549d37bdefecddb88e2"],["/tags/butterfly/index.html","d1abbb9c4f81adf5fc77c1bda36dce93"],["/tags/chrome/index.html","912a909b303c9420ef768d35ad19a1b6"],["/tags/cloudflare/index.html","a1ae2d20159c22f94bff93140c73f80d"],["/tags/cmd/index.html","9964c47d2bac4fc394cac08454b0ea63"],["/tags/c盘/index.html","d6700e7e493c177e4a30ec5b3604299f"],["/tags/email/index.html","07aaef804944abd64e61aba61c63f3b7"],["/tags/ewomail/index.html","5fb7ec44d03cf0f763520dbc514e8512"],["/tags/flags/index.html","8805e025b3d4c14301edd37fb1e75897"],["/tags/footer，页脚/index.html","bceb0e7a0295d3853100fc445241cfed"],["/tags/galgame/index.html","c5ba0510727996feec26a847e800e677"],["/tags/git/index.html","04ef72a0dc9807c8cb876a41fdb984ac"],["/tags/gitcalendar/index.html","5827f90211070b91f92cda7a89e69131"],["/tags/google-voice/index.html","989c16e9e23157567e4b947b15321abc"],["/tags/gv/index.html","a482683a5f81af9f78a78120a227daf5"],["/tags/index-1.html","954ce2e8b6696fd8966791b8bf88b605"],["/tags/index.html","ae3beaa89fd15fcd1c4db4a0642e12bd"],["/tags/jsdelivr/index.html","0b172a3c7efd5e0d33f8d57e251a8f40"],["/tags/linux/index.html","cfc5faece4bc1e5a727d33521710ef3f"],["/tags/markdown/index.html","8e3c72a04e974cca87df9ff8f648964a"],["/tags/maya/index.html","3de3e45833f26203abff5f11034d973a"],["/tags/mklink/index.html","e93106839f603b59e3be51e92a38fd3a"],["/tags/office-e5/index.html","9076baf4730988bad8d51e9e0ef8caa9"],["/tags/onedrive/index.html","96f43ee04eb758ce4ffb840f3b125ea3"],["/tags/picGO/index.html","32b5a7bbf13ed020fbaa7264acd32a1c"],["/tags/pixiv/index.html","d8f42786c996895eb2dd60be1843cbec"],["/tags/proxypool/index.html","7c390547f817f880cc6df4ab7dbf774a"],["/tags/qbitorrent/index.html","52e005936f5a5a51e281d8447a7f6a48"],["/tags/raidrive/index.html","ed1b6b776e79b2f49f42d48830f8bf69"],["/tags/screen/index.html","f4829684efbf06694565ad3c8eab09c0"],["/tags/speedtest/index.html","f964c1d913d914326ad615ed0c93237c"],["/tags/tap/index.html","c7fc078553381bfbbfeb57822555566d"],["/tags/top50/index.html","84dcc612ac54481f82b3f6e1e46b94ce"],["/tags/tracker/index.html","01706ac196a55a580da1878b60e6f9f1"],["/tags/translate/index.html","3ceca68d48c6a22ff7f548a2721ea6aa"],["/tags/translater/index.html","ac7eaa8f1e15a7eaa8f95cf89b87b62f"],["/tags/tun/index.html","9bcf3649a0ad764e6deec0620e15ae01"],["/tags/typecho/index.html","1007de52bc68cb2bd7a7c27a710d8396"],["/tags/v2ray/index.html","e32007ef558ffad19c880401c5601adc"],["/tags/vpn/index.html","f7f2e68285cccffea0efb6d31fe7dd83"],["/tags/vps/index.html","b3d95840cdbe378bb2bebae29aad0df7"],["/tags/windows/index.html","d563bd4bcbadde839290594ae51c720c"],["/tags/windows端/index.html","afa853a5c95908b7cc41f03860b3b49b"],["/tags/xray/index.html","b97eb24cfb45d4959503f500d120307f"],["/tags/下载/index.html","840a13d43c51682ba6cab51c61876a6e"],["/tags/不限速/index.html","e4808c83f5dbf2ba3d1b78927677e266"],["/tags/个人网盘/index.html","fa7153334e0c669d0a84f72862d46785"],["/tags/主题/index.html","7dc203baaedd3788472c453a00da2909"],["/tags/云便签/index.html","6901c9fb32a1bf55723893b7c0972534"],["/tags/云盘/index.html","2d3f2312575e79d688b3eb88706c4357"],["/tags/人人/index.html","a1f606fb9c68c5a3c3b6bc5b859359b5"],["/tags/代理/index.html","e0e16127e2e48318788f4fcc6bb87edf"],["/tags/代码/index.html","d8e68bb6ab6f25e1f0f50352168d8629"],["/tags/优选IP/index.html","ae3eff7cbf42344347c7e2ee42fb60f0"],["/tags/便签/index.html","63f436bb55b6d7b18d70581e9e14b728"],["/tags/保号/index.html","b77240e5fc74683556c4c9cdff89d93b"],["/tags/免费/index.html","12701a85c5fc18d5fd9ef6f07f22c260"],["/tags/免费节点/index.html","dfd61b4732968822406a3d46e24904dc"],["/tags/加密/index.html","b3c0aab0396c4447b4d9960933311dfd"],["/tags/动画/index.html","c8a6c1772bd48e72a459c8fbca5a4259"],["/tags/博客/index.html","b7b9e0adaad68224addd5da787d24800"],["/tags/历史记录/index.html","c5cc35312e1c1295f005dfe4973791f5"],["/tags/压力/index.html","a34c1edf24ecff0a1c0052245475964b"],["/tags/压缩包/index.html","25bf6c8ddc03f724808cb5b72b0939be"],["/tags/反代/index.html","0f65eea68a77eeee091553e01af91699"],["/tags/可视化/index.html","9b5f2799618c7df7fba8bd1941c1dbbc"],["/tags/命令/index.html","5d3469d32d9d76f6d9a313f4eaf4dca7"],["/tags/国家/index.html","6b9eabafc611b3f66f661cc36a36779b"],["/tags/图床/index.html","f2a26c9a747bfde4b79d506b1e2b9e94"],["/tags/图片/index.html","911d8272221b4d906124a1bd01a2db08"],["/tags/域名/index.html","e3e31f2fcd4f1e8b26b3569482bd51e1"],["/tags/多标签/index.html","f69a468ac5a11ba79fc196596f77eec3"],["/tags/存储/index.html","675d1ebaeb8f809ad701b385627dd482"],["/tags/安全/index.html","26f47fd81f8383a09eb4e2a69b2ea31e"],["/tags/安卓/index.html","57ad162086cd316785505330995b2872"],["/tags/宝塔/index.html","c0380f546eceb80a2a058aa7bcc996c2"],["/tags/广告/index.html","5b421727c1332c5e688870030ff8d17b"],["/tags/建站/index.html","603285e368626cb86f48d6a2dfc4d61d"],["/tags/影视/index.html","9f9dea48a5b3c60c7d7d8622406e1a9d"],["/tags/快速启动/index.html","6e037fee33b2c4fea549d5e921127204"],["/tags/手机/index.html","bd8c42c7a73ef606d66ad30ab6ca3cea"],["/tags/托管/index.html","038f048da9a2616449204721b3c33a1b"],["/tags/抓取/index.html","e4758d5f27633ed86d62509b34a740d4"],["/tags/投屏/index.html","125e8a7e774b408b0299de3129ef82ad"],["/tags/拓展功能/index.html","9ab0a4bd528c1e5426bbf43e10a874a0"],["/tags/挂载/index.html","6d16a127f8cc0a6673de1760e3e74224"],["/tags/指纹/index.html","53fb7d2631a09dcd2d2b0c9e2c593725"],["/tags/接口/index.html","e0ed3225c45d71f2a8804c379df2e7a6"],["/tags/提取图片/index.html","71eb892e8b4bfa83bcba12f238d92d6f"],["/tags/插件/index.html","1260f7869689898e75506676cb84cd5b"],["/tags/搜图/index.html","98d2e27c47b3fa82a9f78f911fa6677d"],["/tags/搭建/index.html","25d477a8e5f5a5a7b5b27c2f2b4b4c75"],["/tags/撤回/index.html","ea297556305aaf00758bde32836a9e12"],["/tags/播放器/index.html","d92b9ff9f49ddbefc65d91735a65682b"],["/tags/政府网站/index.html","e16687a486f6da35ca885862cb177a52"],["/tags/效率/index.html","118958976543ef78f9f03c8fe27857c5"],["/tags/日历/index.html","6d02b7d34c3813d7cb45c018b2ce6e7a"],["/tags/服务器/index.html","e8d81feb69b93daafb73c2db15375b65"],["/tags/桌面/index.html","f4411964fca44d69750dd0ae6c27cfb8"],["/tags/梯子/index.html","82b14bbaa1d5b16d8ec12942e1088481"],["/tags/检测工具/index.html","9f1062daa5547540515122a2cae47f12"],["/tags/汉化/index.html","df0ed46ed1b037d68674ab912608e00e"],["/tags/测压/index.html","4b5c13b1c90b0b5d1a361ddb8e0949cc"],["/tags/测速/index.html","74a6bcfb0d5a87dcdd0113e1902cc922"],["/tags/浏览器/index.html","29f15d69355a086a846c4d13dc0abcb1"],["/tags/清理/index.html","1c078089e9b3acdefa5551af4ce3a294"],["/tags/滚动条/index.html","0d73e581be5898ab8c0e747d64092af3"],["/tags/电影/index.html","7284453137b333b3755741b637193b42"],["/tags/电视剧/index.html","91e6349a525c6aba8737e48e0ea5b525"],["/tags/白嫖/index.html","b8946ac6bc80d8fa2ac3bb2e05476839"],["/tags/百度/index.html","51d7a1122392704802ab25703d88de86"],["/tags/百度云盘/index.html","22a979119b56f67681125d6a26dcb8cf"],["/tags/百科/index.html","74a36c511472ab52456e5957edd4b591"],["/tags/短信/index.html","f939e4836c6a3ff9b77b0a0c01b9c438"],["/tags/硬件/index.html","6d4c38d3b6f6f7bab27b15e7732b98ac"],["/tags/科学上网/index.html","11662dcd827ac8a57d86659e6ddd4044"],["/tags/空间/index.html","23e3af8a11d6edfe2453a9bba93e3959"],["/tags/笔记/index.html","606d3e5a487d7a670b3ab3dea236ab51"],["/tags/简洁/index.html","7da6f08616cecf512c9273909f3bc136"],["/tags/简约/index.html","53192f6ef794b94ba8322db56e12b735"],["/tags/维基/index.html","db95226077b38c9a2d61946d5499c00a"],["/tags/网易云/index.html","46c873cc582f3b7e97df9c5ea626edb8"],["/tags/网盘/index.html","aba43b0b1350f9893ec1e5adc876728e"],["/tags/网站/index.html","be70d46f62e788c012a093c526f30e5d"],["/tags/美化/index.html","09cba29c544775b0dab62fbdf910dfc6"],["/tags/翻墙/index.html","07d1f101007e4c2ea6d73d8d3521ecf9"],["/tags/翻译/index.html","542470db04cd4076603de867d99dafbe"],["/tags/翻译器/index.html","3de67470abcd2666d6e755bf9928db55"],["/tags/聊天室/index.html","85c845ef2edc76132ea744300f6ed9e5"],["/tags/联想/index.html","f3d6259d80237cbae72d3ea73b34d952"],["/tags/节点/index.html","08e8b91c550cf904a330ab8466aebde9"],["/tags/虚拟手机号/index.html","45fbe04fe1febce57147009e6a45f666"],["/tags/补丁/index.html","01b2a62c99f6adc6d9a86c26f9ef26a5"],["/tags/视频/index.html","229f0f2cba530070ab2335945fe745b7"],["/tags/解析/index.html","df087989c486858b7436b4417bd985f3"],["/tags/订阅链接/index.html","0ebe1f9a0e29bd6c6e3dfa3ef615080f"],["/tags/记录/index.html","c7266b564de00479e2db4edc55707c7c"],["/tags/识图/index.html","16bbe2c16db5687fc0d1531e20be6aae"],["/tags/语言/index.html","aff9caf2899a4cc043fa914a11ffc70a"],["/tags/资源管理器/index.html","54be47b196d2f33cae282273b4053af1"],["/tags/转移/index.html","bd100a8d26c14e4e4ceda282db1106b9"],["/tags/软件/index.html","4ac975b9be55f031e34de425b87acc64"],["/tags/轰炸/index.html","dca90555df5f02cde4b7e05218f97b1d"],["/tags/迁移/index.html","50d45ef76193fb00f35086d2f34669b9"],["/tags/远程控制/index.html","7636aaf89ad74f41a18cfe92ea3e8a12"],["/tags/连接/index.html","5514da627be930e4296ff2ca84b4d84f"],["/tags/追踪/index.html","42f81dcf51af563a7dc3039ff4c77ce6"],["/tags/速度/index.html","6549456f2c0b4e8d3be6514e97f1fa52"],["/tags/邮箱/index.html","45bdfb477c6e81bf0bd9aa5f3d05f431"],["/tags/酷炫/index.html","0dc0a5fec174d7902345eb0a3cd4dd5c"],["/tags/钓鱼/index.html","f0cc4854224553105116d2656f8ee4d7"],["/tags/镜像/index.html","c053924fcf27739ac411dd67b3d75029"],["/tags/随机/index.html","45530f4ed6b6c4cafd0552e956d1f04b"],["/tags/隐藏/index.html","e42390d6a23079f2dd342a963952d977"],["/tags/面板/index.html","390c3139b4fd9d8463fd91b119cdd8b8"],["/tags/音乐/index.html","183a46870c618901701bd36d1da55dca"],["/tags/高颜值/index.html","3f6f8168a9d64775cf8aedd1a83c322a"],["/tags/魔改/index.html","5a3ba9d2a310a36620852f51c80f9309"],["/tags/黑名单/index.html","9acbb7b7aabec1adbf12ee491e0d41ba"],["/urls/index.html","9ee0d8f49963bf351640d0ba932a50ab"],["/vps/index.html","acfa693ab6d3c752199010e604e15cb9"],["/支持/index.html","84129221211e158164616ddffb761972"]];
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
