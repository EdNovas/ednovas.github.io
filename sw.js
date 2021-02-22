/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","3fd270b653c37e203209d0002c068ba3"],["/2020/11/29/clash-windows/index.html","c1463dcba90f02ac3a45fc424c4f7d10"],["/2020/11/30/websites2/index.html","e97f146b04d2514d935b75f10f78eaa2"],["/2020/12/04/iphone4s/index.html","8e92c9d3f705ea3093dfeff7a30f0a04"],["/2020/12/04/onenote/index.html","a17c90140512301ed22f42e6d9cff5e9"],["/2020/12/04/wesites1/index.html","8a5539a5726bcbf2fb0b5821b5f1f795"],["/2020/12/06/nokia808/index.html","b36fd01d0c841e71f9d6cab82ebb01a6"],["/2020/12/07/ipad1/index.html","33137638b3b591c0d8f8118b6ec24100"],["/2020/12/18/freesubscribes/index.html","58aa6fa9ae7217d3a3da58095bbd04ed"],["/2020/12/19/musics/index.html","7e1c14ba52cb8e60bb465ae407bab2d3"],["/2020/12/19/shadowrocket/index.html","f634fb84aac248de8781aff4048150a6"],["/2020/12/19/v2ray-windows/index.html","3845b6abc64f2e2e3378ffdb461f703d"],["/2020/12/19/v2rayng/index.html","7d955be7027c11959fc71d487cbbf7a0"],["/2020/12/20/beoplay/index.html","2c2ef445aacdebcc9196889c5bc3b044"],["/2020/12/20/订阅链接转换/index.html","42d2e958d6747ad9855e9b5ca978757d"],["/2020/12/21/chrome浏览器下载提速/index.html","60d25229c2085c306e36f6c396f6c077"],["/2020/12/21/免费128线程并发下载xdown/index.html","15778bc28423f7af9794e46b0e43e481"],["/2020/12/21/免费32线程下载软件ndm/index.html","84cd93b0819486fd2b7d5e2e9b3d6bb2"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","ba8a5c86c592751a51625a0b46c05851"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","6e4df6b66af6327d680e263733827793"],["/2020/12/21/广告怎么知道我在想什么/index.html","b637dfec772a4a2655071a88f274feb1"],["/2020/12/21/无名·引子（小说试写）/index.html","e74a9fc86442036d9ccca8983bdf5f79"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","b9b62defacb5be9172519ea344b47f95"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","c1c7ea7c44ec039971ccff66af1311fe"],["/2020/12/21/高速轻量下载器aria2/index.html","fa21a1ba3dc19675f1c80c1c499876a1"],["/2020/12/22/2020-cee-roo/index.html","8f13849eca2edc2f2379e16706a461a1"],["/2020/12/22/firefox插件、github、steam富强/index.html","364bc4475248e8247fed36b84c992efb"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","72f3d7051593d874c3cf7ce03ec83cc2"],["/2020/12/26/python-day-1/index.html","cb2e5c3cd99221df4bab24f9af000ffb"],["/2020/12/26/python-day-2/index.html","b1d3551074d7b9a8066434e90c239390"],["/2020/12/26/度盘不限速下载方式一赏/index.html","392195d621088c418811d5067ab42ad7"],["/2020/12/26/添加开机自启软件/index.html","c784fbae6c97b8c89ce9b9abd78a81ac"],["/2020/12/26/电脑端截图方式一赏/index.html","5201973513b74f6c44283bb30b32d58f"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","025e4122e8c6d9d79ccd04b4d75c873d"],["/2020/12/27/最安全的浏览器tor/index.html","1a5df074e731f1beb85372725cf4cfc0"],["/2020/12/27/网易云刷等级和听歌数量/index.html","3e4bc82ddec3fc99f3a4a50580a93df3"],["/2020/12/28/freenom申请免费域名/index.html","9c0fc396ab0be77f2f2ab98b7ab077c7"],["/2020/12/31/机场/index.html","891c06eb986d5e46fdc1d37b311074af"],["/2021/01/01/M1/index.html","dbb5d6710e48e0f084e3a16d87332158"],["/2021/01/01/compress/index.html","9852ebea2d7185ef0d7b496b43b0de9b"],["/2021/01/01/infinityfree/index.html","83bb1ed108513ac64c4a80b14ea401c6"],["/2021/01/01/硬核翻墙/index.html","b7ce0d3aa0dcd9f188d8433d3587bcdb"],["/2021/01/02/qq/index.html","aa63a47995569fac9dcacfee06bb0ef2"],["/2021/01/03/netch/index.html","f5ff2cb61b54b39a0b2ca0dbabd58785"],["/2021/01/03/waifu2x/index.html","00f9b448283005e848fef2dbbd80a259"],["/2021/01/04/ads/index.html","56d4d7fffd56b1ce322ada55d91683eb"],["/2021/01/04/games/index.html","9e2f94b3f7a7e3b6ab92b91bcfa76162"],["/2021/01/04/heroku/index.html","70ea9fe8d1982b19fea4d41953c47c02"],["/2021/01/06/movies/index.html","d93e2d7be1ab8b6c8f040020229527af"],["/2021/01/07/google2020/index.html","d1464be4d53adc3e51977e540bc5eb4b"],["/2021/01/07/lucky/index.html","95c6b86e7b0f0ef1db356476ccb7ec3d"],["/2021/01/07/spotify/index.html","d94866bd53a2dd495f646a9b0ae45419"],["/2021/01/07/thunder/index.html","28b2c22a90b88a2c2e0cdc9e00717947"],["/2021/01/08/adguardhome/index.html","5e78403d75e6db573eb2c5772c2360df"],["/2021/01/10/IBM/index.html","c18db6d542017863944da2d5ae4e870e"],["/2021/01/10/potplayer/index.html","c10e647d7847db1e15e40c7552a9744c"],["/2021/01/10/sakuraanime/index.html","59d701a9f0ae775a2ee894e1124377b1"],["/2021/01/10/美剧星球/index.html","6ba2255c5da7deda67c1935c907d8114"],["/2021/01/12/telegraph/index.html","593a189384f79f94cbd32b6863c92912"],["/2021/01/14/comics/index.html","39c69af6f04c931ab7f267cee024a5d6"],["/2021/01/14/ftp/index.html","09021feefff7c44ff4c48c835bd32e29"],["/2021/01/14/oraclecloud/index.html","3b43cdb3ad2e3b240fa694ba092376e3"],["/2021/01/14/porkbun/index.html","5240af6ec3930fd017208865a74babb1"],["/2021/01/14/powertoys/index.html","10d753bc3eabd8f8e84a9ccb2c709932"],["/2021/01/14/taptap/index.html","aa2e384234e1f6a13a82633b151d3a37"],["/2021/01/14/ubuntuvsftp/index.html","ddfa5600b494bee508946a2eafa6aae8"],["/2021/01/14/小说/index.html","2c41dafe4d2da3c81fdc29607022aa8c"],["/2021/01/15/freeproxies/index.html","c2acf7a29905b957e976379ed8e0bbfb"],["/2021/01/15/incaseformat/index.html","d51920dfab64c8d6b6a56ae6d878e523"],["/2021/01/16/euserv/index.html","daafb0f63c1f459de55e211d7a29b650"],["/2021/01/16/winxray/index.html","527ba820869479048fb4d541ed9c2cba"],["/2021/01/18/qqreadhistory/index.html","e237fe80fe35db39ebfd6cd109c347f1"],["/2021/01/18/qqrevoke/index.html","75cf902f1d9216f56cce57c561f00d4a"],["/2021/01/19/freevpn/index.html","b1ebdc98e96b8024027aa8d7f1e80f30"],["/2021/01/20/browsertrack/index.html","c12a28b390346be2acec74796adaf874"],["/2021/01/20/v2ui/index.html","53de17dd4edfc4383d383c8800b6c802"],["/2021/01/21/failedtoconnect/index.html","03baaefac5f96ad77e490f17df7d1e27"],["/2021/01/21/gitcalendar/index.html","338d350cb1d9dd4c8fa191dd7e9ed7cf"],["/2021/01/21/markdownformat/index.html","8b05df4ef4dc159aaa3ba8c90caf2c96"],["/2021/01/21/markdowntable/index.html","21b74d170afd18ab0111d9c6fe6b3c76"],["/2021/01/21/vercel/index.html","46a4595e5ad0a5ac3c1d8adc8afdbbf1"],["/2021/01/22/hardware/index.html","625a757d97690e6999a15cce9c58dda7"],["/2021/01/22/muviz/index.html","49eafd6836e83b3c1601c338d046efcf"],["/2021/01/22/randomapi/index.html","e6f7f0482da4345d24b3f1efaeb10090"],["/2021/01/22/searchimages/index.html","a806ba17b499c78841f2abd80a492e62"],["/2021/01/23/RX文件管理器/index.html","bf701c358fc1316b0a3b9e6f242992d6"],["/2021/01/23/chromeflag/index.html","6f1afda05dfd6dfdb94113478f8c7d64"],["/2021/01/23/qttabbar/index.html","83f902d121d71715878b84e5a4fe090c"],["/2021/01/24/githubspeedup/index.html","430727df46f238bb2ed0f4128de453c9"],["/2021/01/24/jsdelivr/index.html","adc6a4ab6390114633e202c7ffcac864"],["/2021/01/25/note/index.html","edc8b62c4eaffc1dd5a75350b8fbaf6d"],["/2021/01/25/soul/index.html","8137e15ce86ca9aaeda09c1cbe67cfab"],["/2021/01/26/herokuxray/index.html","48f104ffacb55336f3eda464ca0b7e22"],["/2021/01/27/proxypool/index.html","333d6a5192ccdea5d9a81c2bfa38de6a"],["/2021/01/27/tracker/index.html","a54c819ea21eaef45203f8b3051a0c19"],["/2021/01/30/pandownphp/index.html","4a1d80be21e329a4c8477c3ece43c988"],["/2021/01/31/newgroup/index.html","89af8e5457e84b01cd31bf75660cd5a5"],["/2021/02/01/clashlanguage/index.html","0c6c3b5e52fc24224a39b0064a395d18"],["/2021/02/01/encrypt/index.html","7d7c2b5573969461a57f75beb0ca5779"],["/2021/02/01/footermotion/index.html","16aabbaf0a573628c12d9c0358601ff4"],["/2021/02/01/gitter/index.html","bf8d4ce7a5ee414af9f827f8a6d1a202"],["/2021/02/01/pixivtop50/index.html","163052c3fc635bde98ac29e7e8270df1"],["/2021/02/01/scrollbar/index.html","06e3cc496bb6660ebd6f30154d2fa8b7"],["/2021/02/02/clover/index.html","b80d03cab4d1408a89903286a91a50bc"],["/2021/02/02/maya/index.html","e505c9e86a9616e57d154e6161060c53"],["/2021/02/02/speedcontroller/index.html","855e0afca33794d073af8c4cddccb9e9"],["/2021/02/02/yesmusicplayer/index.html","1e94091dfa44fb20de3cec836b133e6d"],["/2021/02/03/lenovoonelite/index.html","059342ea50a542e1ff4223f801a02af4"],["/2021/02/03/skipads/index.html","b0778ce69c50273aac60b1ae37014eaf"],["/2021/02/04/picseed/index.html","010667a00e72deec70fadf3878a61acd"],["/2021/02/04/renren/index.html","b38031178d213f5e9adbae2280aaa8d4"],["/2021/02/04/serverstress/index.html","f25799a28e84b3eb4cd94024dec71cdb"],["/2021/02/04/wikipediazh/index.html","24b368404c9acd7ff9eb3455f901a6a3"],["/2021/02/05/googlevoice/index.html","9ef30d95437e3a6ec0c40e10ef852814"],["/2021/02/06/clashconnection/index.html","e19bf05d5b9602e9172f222cb4651592"],["/2021/02/06/gvtransfer/index.html","4382ad9abd94c82ee47396f0c894802d"],["/2021/02/06/todesk/index.html","600ba98755075515b43bd529679828a8"],["/2021/02/06/vpnblacklist/index.html","5b9c8f7f4102ce8e58d45428e2f73616"],["/2021/02/07/mklink/index.html","1b30b3d92949e196056acdd88e0a3fa2"],["/2021/02/07/speedtest/index.html","30fe220b16210359633e555dcfaf9266"],["/2021/02/07/translate/index.html","5f475f688ff310091dcb84c7428d1380"],["/2021/02/08/ewomail/index.html","e1c96a3590e9938606925e114d31f3de"],["/2021/02/10/officee5/index.html","1bc68bec45fea5d82b22ccc6cfa37b38"],["/2021/02/10/raidrive/index.html","fd34966736d1eafaa4828e1e2ca5ca01"],["/2021/02/13/e5sub/index.html","6b205a61f053cf301f110bcff797f389"],["/2021/02/14/screen/index.html","eea747d619bf8c430ae7fc2b800af025"],["/2021/02/15/clashtun/index.html","e600b20fc0b10b2d7f02d70a89ba5ecb"],["/2021/02/15/messageboom/index.html","dea63161206779935213adf59ebaeac8"],["/2021/02/15/oneindex/index.html","a1296d84ae17a8e0888c68ffc47e3fb1"],["/2021/02/16/govsites/index.html","3a8844060fbd70f6befe43016547a87b"],["/2021/02/17/hexototypecho/index.html","79a660d002ff03f5c36555796ab1b26a"],["/2021/02/19/fiddler/index.html","05a2544fe17eba3b00d87cb6a3b7ac50"],["/404.html","c5a7431ed7d43d8b77d452414c31cc11"],["/archives/2020/11/index.html","724d33ea92315c0c1aa4bffe6527ee2e"],["/archives/2020/12/index.html","388fff0883ca430588e7ce210ff3706d"],["/archives/2020/12/page/2/index.html","d183df47a29cbc15c2aec9f509aa3873"],["/archives/2020/12/page/3/index.html","0d5d4a7e2d151ac12529f3617884fbfb"],["/archives/2020/index.html","bca8fda19c6c377e94bf29883fcd77c5"],["/archives/2020/page/2/index.html","5ad6eab559dafeebdd2030cbcf3bbf11"],["/archives/2020/page/3/index.html","e0e8c93e7c280963f238517eb476cda4"],["/archives/2021/01/index.html","40611fe8ece37198b3c7e175c9e6b4ca"],["/archives/2021/01/page/2/index.html","5ab9cab78817a57f7dd701338fde68b1"],["/archives/2021/01/page/3/index.html","8785584c050ad1e9f861c991a39f01ef"],["/archives/2021/01/page/4/index.html","fd6ca11d25b078e14ceb7831cbaff7f4"],["/archives/2021/02/index.html","f2b2b1795893220b5fbc48cc0d78c3fe"],["/archives/2021/02/page/2/index.html","15a7b2dfb41409afb39479aede4c3db9"],["/archives/2021/02/page/3/index.html","eacc91cb5d7a281e406321321dee7531"],["/archives/2021/index.html","de4ecd458c045c31736bbe5a736430db"],["/archives/2021/page/2/index.html","316b8def3ad70fe051dfb1bd7048babe"],["/archives/2021/page/3/index.html","e2087b5b14ccbc0a292a4212283cd78b"],["/archives/2021/page/4/index.html","2b404acabba5e9ef6bab609e8ab9c0d6"],["/archives/2021/page/5/index.html","c14a0f8e4f1a2d8e072699caf4f20f27"],["/archives/2021/page/6/index.html","7bca0f9be3f905b2f34d608fe712daf9"],["/archives/2021/page/7/index.html","61ec0bf5b19207537e6e28db88ccc431"],["/archives/index.html","a8fe20eaf4a2ef7876d12f2402fd4182"],["/archives/page/2/index.html","c9e2dc1328a33eb1be0a96a3f571d1bf"],["/archives/page/3/index.html","a75b2c02c104dd6f0454172dd4947354"],["/archives/page/4/index.html","3b619f7ff0c05e8e5decb7366b271c76"],["/archives/page/5/index.html","24ed75df2aec6999dd299408e1d55cca"],["/archives/page/6/index.html","08585bcdf062418541c1c3a7a6f46c4b"],["/archives/page/7/index.html","d559b2cd6b347da21ff3b6a128e3b7f9"],["/archives/page/8/index.html","ff5054dde836c5a356f70238a52c1c19"],["/archives/page/9/index.html","a85a08e24a569b855c5ca51d96b55213"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","6a237d17873a0fcbc5ae062d001c3479"],["/categories/index.html","8e22f7422ca218f359996c5943ae6877"],["/categories/下载/index.html","0d86687472100df08a0f6d71ae11773e"],["/categories/安全/index.html","531f261785e30bc010f18c29cbb7b475"],["/categories/建站/index.html","cd8df1a0b17e298a79c4842259e378f4"],["/categories/杂/index.html","65de1e1f41a19e89e663d9baf4b48a84"],["/categories/杂/page/2/index.html","8c18b40ef240c9f6e2cc9698d3869883"],["/categories/测评/index.html","2b6be33022ca3e6bb3b0e6851edc8444"],["/categories/科学上网/index.html","132b4e7ad34977b7a89709a8417d7d84"],["/categories/科学上网/page/2/index.html","e4943c6501a6a42801da0f9e0b16c962"],["/categories/编程/index.html","bd7e7b29819b0991b089fc7a2d356d51"],["/categories/网站/index.html","e38cfa452ad1916fa08dd035687ab587"],["/categories/网站/page/2/index.html","536e9da727e10bbdb56919bf91838679"],["/categories/软件/index.html","462baeda19b09558e8d9bc3d1ff193a4"],["/categories/软件/page/2/index.html","661cd9f662a77db4262cd96f82253b31"],["/categories/软件/page/3/index.html","42d55edaaa652d6f49c37c8fc411eeaf"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","065dc773aa98b64314a3f391775815f2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","85ffa1f1041b6517f2df95ed690339e9"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","3b0bd44d0401d036c5860c175f2da2fb"],["/ios/index.html","c95c9e52915ab58934d369676be28b23"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/2/index.html","2732b1294aaf45f3daf8b434966b5324"],["/page/3/index.html","a69aa040117fe090fe1010ae4f315556"],["/page/4/index.html","805f638836169d26e791bf99ef1e4123"],["/page/5/index.html","0154bbd885d6e17aa3bec6ed4d52465c"],["/page/6/index.html","343eba827d822582ea8ebdf48a0378f1"],["/page/7/index.html","4102f50c7766e14e771403454535e668"],["/page/8/index.html","074a9e02ec84724e979a78fb45e55812"],["/page/9/index.html","5b1c168101c69a910faf955ed150209c"],["/payment/index.html","5559c2da8d28feb42fca0f7f8ea19aea"],["/privacy-policy/index.html","06dc66f3b3441300e5af96ddc7b5f9aa"],["/rss2.xml","975892977c695bc12befe3f1639b83ef"],["/search.xml","3805d975ec41712693654832cc6abde0"],["/sitemap.xml","9ccf046145916f5ccd5a7a9894d47df8"],["/sw-register.js","35efb30c366a3954bc9462021acce451"],["/tags/5t/index.html","9aa196d4c4efda11eb65d8d70a8e8861"],["/tags/Clover/index.html","cb0d97ee6ad31d91b02fe14addc8e90a"],["/tags/E5/index.html","9650422a244ce243e34e6611bed22670"],["/tags/FTP/index.html","6df01d3f61b1a7faaa200dce6ba5f354"],["/tags/GitHub/index.html","dddf933e15de0eb850e246a2eae51eb5"],["/tags/Heroku/index.html","be7d6f01b6765a384f966ee34e3e757c"],["/tags/Hexo/index.html","40fda7b6f8db5a0e5cebb9094626f0a6"],["/tags/Lenovo/index.html","1b0e0a9c9e678cbd6874f153e4795266"],["/tags/Oneindex/index.html","9d911096477325bb6e8bc4de9688f8a5"],["/tags/QQ/index.html","b972d5d34792a984860386178ac111f8"],["/tags/QTTabbar/index.html","b918071ffb24a5a365fe2285ff19dba0"],["/tags/RX文件管理器/index.html","225669aedd4ebf81e24a91e315a4b28b"],["/tags/Todesk/index.html","ae058ad99ef59a2b5342c9aadb92935d"],["/tags/Vercel/index.html","56e04ff0cdfabe06185a1d801287815e"],["/tags/ads/index.html","8c007ce951f40cbdef58e22d07242aa9"],["/tags/api/index.html","150473327d1b155fae86c002c9861349"],["/tags/app/index.html","6936d478b4da5a4982fe02058b62dec9"],["/tags/blacklist/index.html","59b7501de87d33303f778aae6e0575b6"],["/tags/butterfly/index.html","f6034fbf250159ed1c8fbbca1b1c01ad"],["/tags/chrome/index.html","741cbcdf840550e7e69172718ca1311f"],["/tags/clash/index.html","ac113c1051f17a3278877832d2e251df"],["/tags/cloudflare/index.html","2c5fc2ae750c47231aa44aec2e40e9e2"],["/tags/cmd/index.html","84c5fc2a66f88878d2e56c79e4b41fdd"],["/tags/c盘/index.html","746f2d6e6f68181ca035a6b75cdc22b5"],["/tags/email/index.html","12f8b2767626a265f95fb06f25086f3f"],["/tags/ewomail/index.html","21fb2d35ace7943b478cb6abad9688d5"],["/tags/fiddler/index.html","fcbb9debb3f1953e114c06a4564e32c9"],["/tags/flags/index.html","3848a53c019c709c24989ea387650f4b"],["/tags/footer，页脚/index.html","04341d163ea6920a11071723fef6feff"],["/tags/galgame/index.html","8556f5efe17a925670ecbaf5aa379c2a"],["/tags/git/index.html","11aab64918bf179f8a96f262fd483e0d"],["/tags/gitcalendar/index.html","bf4f709e78dc82e9358ff774213097e3"],["/tags/google-voice/index.html","4a874932fb3ac5d3176de1746d26d69c"],["/tags/gv/index.html","72350fc42146a73f352b9ae33c43522e"],["/tags/index-1.html","90380070761b2fcd3af0b8229a133ad3"],["/tags/index.html","c4440e5ec68ea5bdc18ca32bf2a9fef4"],["/tags/jsdelivr/index.html","8ad190e994a20461e6a6e401552e5b12"],["/tags/linux/index.html","2912290df30978a529e4b04cbfbe6ec3"],["/tags/markdown/index.html","560268497a21a35f71a97981f13fe9f2"],["/tags/maya/index.html","e4630fccb977d7b38160c95ccd650d12"],["/tags/mklink/index.html","a05f819047b2da46105bc72fb526b598"],["/tags/office-e5/index.html","5cbb9efa36cfa50a4b199695b845465c"],["/tags/onedrive/index.html","668c6b3e9273606f0dda63b2272625b8"],["/tags/picGO/index.html","1a904ee5aed58788fb419f3b1e0a7a2d"],["/tags/pixiv/index.html","0b9141d8fc8679f083f388a5c2e8a498"],["/tags/proxypool/index.html","8b7304b9d747f48e80b488954c92d387"],["/tags/qbitorrent/index.html","6e6401ba28d92223eb0c51e0ad2d91d6"],["/tags/raidrive/index.html","3d50d5845b0b4c3e0328b0ea03076bac"],["/tags/screen/index.html","e0bacf270dfe17adbf9794660329cb23"],["/tags/speedtest/index.html","d22ce7067595f1dd17d076081b347d1f"],["/tags/tap/index.html","d1a88af7b18ae8c154192a0d8bed0060"],["/tags/top50/index.html","63f825112fea1cb320b6dbaaac3a22af"],["/tags/tracker/index.html","b598df8cc567e845ef8f6e9fda3c69a3"],["/tags/translate/index.html","ef3f5db3e434c35db30dea8b46a82368"],["/tags/translater/index.html","a66e837ed30c95040677d78b45b0cb7d"],["/tags/tun/index.html","52f6f36fe2ef57835128db233fd84743"],["/tags/typecho/index.html","3b920b61032e082a769d2411996e665e"],["/tags/v2ray/index.html","95fed423608f74c973de548a4c8aa3eb"],["/tags/vpn/index.html","a55ce6e54f083f2080f8b2bf1bf9e68e"],["/tags/vps/index.html","f6eca2da2cf4c5392b873f1eb0ee5234"],["/tags/windows/index.html","81873f81325e8c5c5af8d438dca104fd"],["/tags/windows端/index.html","06937ab0de03dd914914a469936971b9"],["/tags/xray/index.html","e623b7551fc5af2570348f3a88c8ae73"],["/tags/下载/index.html","565ef556da94aaae6b5d0cd23d666b2b"],["/tags/不限速/index.html","89d96228cd7c0b8c21327ec3aa93e5c5"],["/tags/个人网盘/index.html","6fe2344ad459667def4001ca8d09b839"],["/tags/主题/index.html","c2ff01ed947ab52a92962ea0f9b50d87"],["/tags/云便签/index.html","05b8df4531167c2438a6782bd1392fc7"],["/tags/云盘/index.html","82a822092321aed9ba22b270aff750d8"],["/tags/人人/index.html","aa004b21f7bf04a49f49bee1fe243905"],["/tags/代理/index.html","b3a4d9d3dadb5ed0f5eb1e1257a4fa89"],["/tags/代码/index.html","7c7242a725d8399646362c57ff7f00c4"],["/tags/优选IP/index.html","354347a2a44c021d78ed0fe18d98167e"],["/tags/便签/index.html","c043faead0b4fe4028275f485c5c7926"],["/tags/保号/index.html","a34a441d0f2a36a6e968e9c0bda311ac"],["/tags/免费/index.html","79eceecfa4d8d501a4536730797b4e8e"],["/tags/免费节点/index.html","9a39528487b809ee46d60d0bfe61eb13"],["/tags/加密/index.html","f0ac33011a11c4f442d29ea4abffa7e2"],["/tags/动画/index.html","2e80bf6fa39b33e02d18cdfa0ec2b18f"],["/tags/博客/index.html","e40523a31fb6f8749325b66e976e2fa8"],["/tags/历史记录/index.html","965a550f567fb688c13b46f74135a71e"],["/tags/压力/index.html","1c4c638da7177c22e0964e541a67ca20"],["/tags/压缩包/index.html","20bef3c5c95a7e2a4beb28812942a81d"],["/tags/反代/index.html","def6965694593d7378d5f1dc7fa3a892"],["/tags/可视化/index.html","8907772a33f283d513805f7a99895831"],["/tags/命令/index.html","345a2afe22ecd0c7a00319c34e08c0f1"],["/tags/国家/index.html","e278d762e8ff0f3ee505b5422ea6b0cd"],["/tags/图床/index.html","bfaf96266ba4d37de3fc9acf458cc1f9"],["/tags/图片/index.html","d05d3e5bbb3c246190da4a3b9ae92bfd"],["/tags/域名/index.html","a49e741459424f99323ae2ff909b8fa7"],["/tags/多标签/index.html","201e62def2691a5e02ade85b71716dd6"],["/tags/存储/index.html","7d58ddc7d0f791f0e6ade8500c44b24a"],["/tags/安全/index.html","f41469d4874de48d24c73e92ce6236ed"],["/tags/安卓/index.html","16ac3543f05b1d33db066158ae7131c1"],["/tags/宝塔/index.html","3ed744b7969d8d8c2577566e0eaba418"],["/tags/广告/index.html","e12af5441a5c300e1c755561ff2c6433"],["/tags/建站/index.html","319efd5893a3b818766716109a4ae098"],["/tags/影视/index.html","da7be69aef22ca4eac1cb0449049a7ab"],["/tags/快速启动/index.html","5a40624fe3be8bdaf3f29ce4a21d51d1"],["/tags/手机/index.html","1e5d59db96a6e4bb51576e994c557ce8"],["/tags/托管/index.html","2126fda6c358b20b891c6cbc5dafa8f5"],["/tags/抓包/index.html","51087fcc540e31a534d9e7058eea9289"],["/tags/抓取/index.html","804e9039832e3eb33e3cc6ad0aab1e7a"],["/tags/投屏/index.html","33debb8de1d26819c269ee3f81172cb1"],["/tags/拓展功能/index.html","1c724a3fc65bd03a36807e09e02d00f0"],["/tags/挂载/index.html","3099fd1b68caa066f8b97ef609529414"],["/tags/指纹/index.html","ded6577148587564602d8ffd41737824"],["/tags/接口/index.html","f981aca31d049cbb2c3f5dc3c9553e58"],["/tags/提取图片/index.html","a6132aaf6cd11a7564adcca3b585f5c1"],["/tags/插件/index.html","5f0775da3d2b4f8f51b69e8b83b42d61"],["/tags/搜图/index.html","8157442f0cb17ecf001f52827c05877a"],["/tags/搭建/index.html","3bdd19b896cb3faa1d9efae431f068eb"],["/tags/撤回/index.html","3999a73b52cab6428b406891d8c80a0f"],["/tags/播放器/index.html","13e474f96f0707485cf7e691e3ed9f26"],["/tags/政府网站/index.html","cffc51c05a1aa02942e34acb37a9a829"],["/tags/效率/index.html","30f802a32fc96c3725c689868825732e"],["/tags/日历/index.html","440c937e08ace2e34a747492555490f3"],["/tags/服务器/index.html","4efbedc9ce5a614632c412779ff34be7"],["/tags/桌面/index.html","ec73abfc35c5262edd35d4f7f69906aa"],["/tags/梯子/index.html","335e04e88769346576f313cbd0b8d108"],["/tags/检测工具/index.html","6cb5d4d7555d17d163440a23133f9980"],["/tags/汉化/index.html","f734a4a12806bda466b43f6c68e5e026"],["/tags/测压/index.html","71aac6cb8e4accceaee1cc6efbbf97dd"],["/tags/测速/index.html","8ec09163624820b2472d9a04d3855e25"],["/tags/浏览器/index.html","6e295d7a2e8dab53a2deb9f0476ae96a"],["/tags/清理/index.html","086ec9946c9dff72751e1abe8f3ef885"],["/tags/滚动条/index.html","cca63e3bc5aef228f642f32a929c8f76"],["/tags/电影/index.html","747010e32cdfd978c715f76ff2bb0f00"],["/tags/电视剧/index.html","84eb7e4d6ff8f613e82486537f41c0cb"],["/tags/白嫖/index.html","d131e3d45f7234c4d04a92a8ba8ec90d"],["/tags/百度/index.html","53c7587b01eaa4d1694f8fb629cc491a"],["/tags/百度云盘/index.html","016bb2488274e59efb1cad6a17e1d54c"],["/tags/百科/index.html","f8d69c064d6a2b654502104eb8b51560"],["/tags/短信/index.html","d1c0855b292a9634b3b9989aac5a0fff"],["/tags/硬件/index.html","9558ddd8e321db784253d5c8c87995d9"],["/tags/科学上网/index.html","65390a777906014d1a1109dfd7c8021b"],["/tags/空间/index.html","0e4e5d0168b1da40d0061c2409c3b424"],["/tags/笔记/index.html","40c88d3169bca2f8370887a26fb82f0b"],["/tags/简洁/index.html","964e10e983eab1eea31bed642307a499"],["/tags/简约/index.html","8c15b00795760a1cdcfcd6c1884b8fb8"],["/tags/维基/index.html","3f3c5f9840d5ca5709a32f65495784be"],["/tags/网易云/index.html","88eb00496a53b0c95488c84b018f880c"],["/tags/网盘/index.html","91afd0ec0e29ad28743e2d4a611350c2"],["/tags/网站/index.html","841d1ebce16ea46b8e0b275cb85a5f68"],["/tags/网络/index.html","86af783f7e9e09325d9473e9040c260e"],["/tags/美化/index.html","609c548ce8b9975a20c00cc711b78a4a"],["/tags/翻墙/index.html","df1f5e223db9b9a140172cf0a47f896b"],["/tags/翻译/index.html","2cfa42c3481c0190f4f1c7f04c606cd9"],["/tags/翻译器/index.html","ddb52a18f1754dc6ca3c350ea43c590c"],["/tags/聊天室/index.html","d355fc82853f7a84cb066643cdc15d09"],["/tags/联想/index.html","3631777103941df6cfbf8de0307485ac"],["/tags/节点/index.html","d36dcb6149ebc05fb2f84c49245c51d1"],["/tags/虚拟手机号/index.html","747dbf69ab9dbae83e8ef871eec6f938"],["/tags/补丁/index.html","61ee6904bf1d95b41407ca305051ce39"],["/tags/视频/index.html","f27d64ee45ef4da12c301008d72f9753"],["/tags/解析/index.html","750c87ec558aa6ad285778e0340123a0"],["/tags/订阅链接/index.html","2c02b51dccdaf8fe673d7117d8c4d3eb"],["/tags/记录/index.html","ce7a2738a60628ce60513e5b8ba9b23f"],["/tags/识图/index.html","17ebecf7b7474872373e9ef3a0b67601"],["/tags/语言/index.html","646b12a173e180342da5dba9230c3e0b"],["/tags/资源管理器/index.html","51d24bcf00fba2a0f9110960a5c10581"],["/tags/转移/index.html","c8cc1233d50ca336e79d28b0e07d835b"],["/tags/软件/index.html","e348620a55f7529638557c996ac94124"],["/tags/轰炸/index.html","658f145be25c986320fc76458b581cfb"],["/tags/迁移/index.html","6d4396913d4b01c701832fd77cda2080"],["/tags/远程控制/index.html","27be1a09d848997e4efabcae32aa9145"],["/tags/连接/index.html","76785b57861e7c21aeb54f8c896d6bd2"],["/tags/追踪/index.html","c8d0c8cb2e0806a6f98ef55c5efd78e3"],["/tags/速度/index.html","92efbde7335274ff4f7b2136451078b6"],["/tags/邮箱/index.html","5a7a3db18e322ac9e14dfa44337b3b59"],["/tags/酷炫/index.html","9f10e7d1c70da1c28e337a1afcd802a3"],["/tags/钓鱼/index.html","db35340efb5b8aa1ca72a530fc7c222e"],["/tags/镜像/index.html","9d7b349d8d5894da31d096433cea0197"],["/tags/随机/index.html","4c5f698ae5e1d1605cc9b6e52c93ce7d"],["/tags/隐藏/index.html","b8570294137f4e0b28a24c1ea382b0fd"],["/tags/面板/index.html","0d64154d74e645c496ffee6d1626807e"],["/tags/音乐/index.html","983591a938d1fb1f1c03a735506e5472"],["/tags/高颜值/index.html","e6c8cbf4ef525790484aa83b4d836688"],["/tags/魔改/index.html","3097fe1a22f7fde76426798c40517904"],["/tags/黑名单/index.html","6f184abffd159475faaa375c206cbd5a"],["/urls/index.html","6763804b03d5f1af2a9c08c130375065"],["/vps/index.html","7f29e6b6a660b5d2cab02d47a4c3bd23"],["/支持/index.html","3837254b9b2dd904b3944a909c8a1a39"]];
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
