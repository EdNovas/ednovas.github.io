/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","3fd270b653c37e203209d0002c068ba3"],["/2020/11/29/clash-windows/index.html","c1463dcba90f02ac3a45fc424c4f7d10"],["/2020/11/30/websites2/index.html","e97f146b04d2514d935b75f10f78eaa2"],["/2020/12/04/iphone4s/index.html","8e92c9d3f705ea3093dfeff7a30f0a04"],["/2020/12/04/onenote/index.html","a17c90140512301ed22f42e6d9cff5e9"],["/2020/12/04/wesites1/index.html","8a5539a5726bcbf2fb0b5821b5f1f795"],["/2020/12/06/nokia808/index.html","b36fd01d0c841e71f9d6cab82ebb01a6"],["/2020/12/07/ipad1/index.html","33137638b3b591c0d8f8118b6ec24100"],["/2020/12/18/freesubscribes/index.html","287fa0f4f9c300ac21d81e759d0e77eb"],["/2020/12/19/musics/index.html","7e1c14ba52cb8e60bb465ae407bab2d3"],["/2020/12/19/shadowrocket/index.html","f634fb84aac248de8781aff4048150a6"],["/2020/12/19/v2ray-windows/index.html","3845b6abc64f2e2e3378ffdb461f703d"],["/2020/12/19/v2rayng/index.html","7d955be7027c11959fc71d487cbbf7a0"],["/2020/12/20/beoplay/index.html","2c2ef445aacdebcc9196889c5bc3b044"],["/2020/12/20/订阅链接转换/index.html","42d2e958d6747ad9855e9b5ca978757d"],["/2020/12/21/chrome浏览器下载提速/index.html","60d25229c2085c306e36f6c396f6c077"],["/2020/12/21/免费128线程并发下载xdown/index.html","15778bc28423f7af9794e46b0e43e481"],["/2020/12/21/免费32线程下载软件ndm/index.html","84cd93b0819486fd2b7d5e2e9b3d6bb2"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","ba8a5c86c592751a51625a0b46c05851"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","6e4df6b66af6327d680e263733827793"],["/2020/12/21/广告怎么知道我在想什么/index.html","b637dfec772a4a2655071a88f274feb1"],["/2020/12/21/无名·引子（小说试写）/index.html","e74a9fc86442036d9ccca8983bdf5f79"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","b9b62defacb5be9172519ea344b47f95"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","c1c7ea7c44ec039971ccff66af1311fe"],["/2020/12/21/高速轻量下载器aria2/index.html","fa21a1ba3dc19675f1c80c1c499876a1"],["/2020/12/22/2020-cee-roo/index.html","8f13849eca2edc2f2379e16706a461a1"],["/2020/12/22/firefox插件、github、steam富强/index.html","364bc4475248e8247fed36b84c992efb"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","72f3d7051593d874c3cf7ce03ec83cc2"],["/2020/12/26/python-day-1/index.html","cb2e5c3cd99221df4bab24f9af000ffb"],["/2020/12/26/python-day-2/index.html","b1d3551074d7b9a8066434e90c239390"],["/2020/12/26/度盘不限速下载方式一赏/index.html","392195d621088c418811d5067ab42ad7"],["/2020/12/26/添加开机自启软件/index.html","c784fbae6c97b8c89ce9b9abd78a81ac"],["/2020/12/26/电脑端截图方式一赏/index.html","5201973513b74f6c44283bb30b32d58f"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","025e4122e8c6d9d79ccd04b4d75c873d"],["/2020/12/27/最安全的浏览器tor/index.html","1a5df074e731f1beb85372725cf4cfc0"],["/2020/12/27/网易云刷等级和听歌数量/index.html","3e4bc82ddec3fc99f3a4a50580a93df3"],["/2020/12/28/freenom申请免费域名/index.html","9c0fc396ab0be77f2f2ab98b7ab077c7"],["/2020/12/31/机场/index.html","891c06eb986d5e46fdc1d37b311074af"],["/2021/01/01/M1/index.html","dbb5d6710e48e0f084e3a16d87332158"],["/2021/01/01/compress/index.html","9852ebea2d7185ef0d7b496b43b0de9b"],["/2021/01/01/infinityfree/index.html","83bb1ed108513ac64c4a80b14ea401c6"],["/2021/01/01/硬核翻墙/index.html","b7ce0d3aa0dcd9f188d8433d3587bcdb"],["/2021/01/02/qq/index.html","aa63a47995569fac9dcacfee06bb0ef2"],["/2021/01/03/netch/index.html","f5ff2cb61b54b39a0b2ca0dbabd58785"],["/2021/01/03/waifu2x/index.html","00f9b448283005e848fef2dbbd80a259"],["/2021/01/04/ads/index.html","56d4d7fffd56b1ce322ada55d91683eb"],["/2021/01/04/games/index.html","9e2f94b3f7a7e3b6ab92b91bcfa76162"],["/2021/01/04/heroku/index.html","70ea9fe8d1982b19fea4d41953c47c02"],["/2021/01/06/movies/index.html","d93e2d7be1ab8b6c8f040020229527af"],["/2021/01/07/google2020/index.html","d1464be4d53adc3e51977e540bc5eb4b"],["/2021/01/07/lucky/index.html","95c6b86e7b0f0ef1db356476ccb7ec3d"],["/2021/01/07/spotify/index.html","d94866bd53a2dd495f646a9b0ae45419"],["/2021/01/07/thunder/index.html","28b2c22a90b88a2c2e0cdc9e00717947"],["/2021/01/08/adguardhome/index.html","5e78403d75e6db573eb2c5772c2360df"],["/2021/01/10/IBM/index.html","c18db6d542017863944da2d5ae4e870e"],["/2021/01/10/potplayer/index.html","c10e647d7847db1e15e40c7552a9744c"],["/2021/01/10/sakuraanime/index.html","59d701a9f0ae775a2ee894e1124377b1"],["/2021/01/10/美剧星球/index.html","6ba2255c5da7deda67c1935c907d8114"],["/2021/01/12/telegraph/index.html","593a189384f79f94cbd32b6863c92912"],["/2021/01/14/comics/index.html","39c69af6f04c931ab7f267cee024a5d6"],["/2021/01/14/ftp/index.html","09021feefff7c44ff4c48c835bd32e29"],["/2021/01/14/oraclecloud/index.html","3b43cdb3ad2e3b240fa694ba092376e3"],["/2021/01/14/porkbun/index.html","5240af6ec3930fd017208865a74babb1"],["/2021/01/14/powertoys/index.html","10d753bc3eabd8f8e84a9ccb2c709932"],["/2021/01/14/taptap/index.html","aa2e384234e1f6a13a82633b151d3a37"],["/2021/01/14/ubuntuvsftp/index.html","ddfa5600b494bee508946a2eafa6aae8"],["/2021/01/14/小说/index.html","2c41dafe4d2da3c81fdc29607022aa8c"],["/2021/01/15/freeproxies/index.html","979672a4b2b4d602e63919ce6cedb3cb"],["/2021/01/15/incaseformat/index.html","d51920dfab64c8d6b6a56ae6d878e523"],["/2021/01/16/euserv/index.html","daafb0f63c1f459de55e211d7a29b650"],["/2021/01/16/winxray/index.html","527ba820869479048fb4d541ed9c2cba"],["/2021/01/18/qqreadhistory/index.html","e237fe80fe35db39ebfd6cd109c347f1"],["/2021/01/18/qqrevoke/index.html","75cf902f1d9216f56cce57c561f00d4a"],["/2021/01/19/freevpn/index.html","b1ebdc98e96b8024027aa8d7f1e80f30"],["/2021/01/20/browsertrack/index.html","c12a28b390346be2acec74796adaf874"],["/2021/01/20/v2ui/index.html","53de17dd4edfc4383d383c8800b6c802"],["/2021/01/21/failedtoconnect/index.html","03baaefac5f96ad77e490f17df7d1e27"],["/2021/01/21/gitcalendar/index.html","338d350cb1d9dd4c8fa191dd7e9ed7cf"],["/2021/01/21/markdownformat/index.html","8b05df4ef4dc159aaa3ba8c90caf2c96"],["/2021/01/21/markdowntable/index.html","21b74d170afd18ab0111d9c6fe6b3c76"],["/2021/01/21/vercel/index.html","46a4595e5ad0a5ac3c1d8adc8afdbbf1"],["/2021/01/22/hardware/index.html","625a757d97690e6999a15cce9c58dda7"],["/2021/01/22/muviz/index.html","49eafd6836e83b3c1601c338d046efcf"],["/2021/01/22/randomapi/index.html","e6f7f0482da4345d24b3f1efaeb10090"],["/2021/01/22/searchimages/index.html","a806ba17b499c78841f2abd80a492e62"],["/2021/01/23/RX文件管理器/index.html","bf701c358fc1316b0a3b9e6f242992d6"],["/2021/01/23/chromeflag/index.html","6f1afda05dfd6dfdb94113478f8c7d64"],["/2021/01/23/qttabbar/index.html","83f902d121d71715878b84e5a4fe090c"],["/2021/01/24/githubspeedup/index.html","430727df46f238bb2ed0f4128de453c9"],["/2021/01/24/jsdelivr/index.html","adc6a4ab6390114633e202c7ffcac864"],["/2021/01/25/note/index.html","edc8b62c4eaffc1dd5a75350b8fbaf6d"],["/2021/01/25/soul/index.html","8137e15ce86ca9aaeda09c1cbe67cfab"],["/2021/01/26/herokuxray/index.html","48f104ffacb55336f3eda464ca0b7e22"],["/2021/01/27/proxypool/index.html","333d6a5192ccdea5d9a81c2bfa38de6a"],["/2021/01/27/tracker/index.html","a54c819ea21eaef45203f8b3051a0c19"],["/2021/01/30/pandownphp/index.html","4a1d80be21e329a4c8477c3ece43c988"],["/2021/01/31/newgroup/index.html","89af8e5457e84b01cd31bf75660cd5a5"],["/2021/02/01/clashlanguage/index.html","0c6c3b5e52fc24224a39b0064a395d18"],["/2021/02/01/encrypt/index.html","7d7c2b5573969461a57f75beb0ca5779"],["/2021/02/01/footermotion/index.html","16aabbaf0a573628c12d9c0358601ff4"],["/2021/02/01/gitter/index.html","bf8d4ce7a5ee414af9f827f8a6d1a202"],["/2021/02/01/pixivtop50/index.html","163052c3fc635bde98ac29e7e8270df1"],["/2021/02/01/scrollbar/index.html","06e3cc496bb6660ebd6f30154d2fa8b7"],["/2021/02/02/clover/index.html","b80d03cab4d1408a89903286a91a50bc"],["/2021/02/02/maya/index.html","e505c9e86a9616e57d154e6161060c53"],["/2021/02/02/speedcontroller/index.html","855e0afca33794d073af8c4cddccb9e9"],["/2021/02/02/yesmusicplayer/index.html","1e94091dfa44fb20de3cec836b133e6d"],["/2021/02/03/lenovoonelite/index.html","059342ea50a542e1ff4223f801a02af4"],["/2021/02/03/skipads/index.html","b0778ce69c50273aac60b1ae37014eaf"],["/2021/02/04/picseed/index.html","010667a00e72deec70fadf3878a61acd"],["/2021/02/04/renren/index.html","b38031178d213f5e9adbae2280aaa8d4"],["/2021/02/04/serverstress/index.html","f25799a28e84b3eb4cd94024dec71cdb"],["/2021/02/04/wikipediazh/index.html","24b368404c9acd7ff9eb3455f901a6a3"],["/2021/02/05/googlevoice/index.html","9ef30d95437e3a6ec0c40e10ef852814"],["/2021/02/06/clashconnection/index.html","e19bf05d5b9602e9172f222cb4651592"],["/2021/02/06/gvtransfer/index.html","4382ad9abd94c82ee47396f0c894802d"],["/2021/02/06/todesk/index.html","600ba98755075515b43bd529679828a8"],["/2021/02/06/vpnblacklist/index.html","5b9c8f7f4102ce8e58d45428e2f73616"],["/2021/02/07/mklink/index.html","1b30b3d92949e196056acdd88e0a3fa2"],["/2021/02/07/speedtest/index.html","30fe220b16210359633e555dcfaf9266"],["/2021/02/07/translate/index.html","5f475f688ff310091dcb84c7428d1380"],["/2021/02/08/ewomail/index.html","e1c96a3590e9938606925e114d31f3de"],["/2021/02/10/officee5/index.html","1bc68bec45fea5d82b22ccc6cfa37b38"],["/2021/02/10/raidrive/index.html","fd34966736d1eafaa4828e1e2ca5ca01"],["/2021/02/13/e5sub/index.html","6b205a61f053cf301f110bcff797f389"],["/2021/02/14/screen/index.html","eea747d619bf8c430ae7fc2b800af025"],["/2021/02/15/clashtun/index.html","e600b20fc0b10b2d7f02d70a89ba5ecb"],["/2021/02/15/messageboom/index.html","dea63161206779935213adf59ebaeac8"],["/2021/02/15/oneindex/index.html","a1296d84ae17a8e0888c68ffc47e3fb1"],["/2021/02/16/govsites/index.html","3a8844060fbd70f6befe43016547a87b"],["/2021/02/17/hexototypecho/index.html","79a660d002ff03f5c36555796ab1b26a"],["/2021/02/19/fiddler/index.html","05a2544fe17eba3b00d87cb6a3b7ac50"],["/404.html","d94cb5a46ff4dd1c5b7b2628d4fd60d2"],["/archives/2020/11/index.html","c59aa0319201cd23f7e2d068904009c9"],["/archives/2020/12/index.html","584f0a99c6361257ff4c65f190278545"],["/archives/2020/12/page/2/index.html","48d69eff4ba45abf29236289ab642841"],["/archives/2020/12/page/3/index.html","46705ca43358305055c2e97e897f5678"],["/archives/2020/index.html","2d283c97d7e5dcf211324281845b23bc"],["/archives/2020/page/2/index.html","d6b70e69a2759e5b5988443cdcd23ed1"],["/archives/2020/page/3/index.html","317fa8674e55182dce1009833c76dc96"],["/archives/2021/01/index.html","6de80b975fb0bf042a70dacbb16127b3"],["/archives/2021/01/page/2/index.html","e69306d8440940e694a61ca0ab7371ef"],["/archives/2021/01/page/3/index.html","b5544ca9d63d1fc7992ce65c26c07fe6"],["/archives/2021/01/page/4/index.html","a5b4c8087ab4529151df089b69518a6f"],["/archives/2021/02/index.html","61374c9412b504c65eec9ced6b5fbab8"],["/archives/2021/02/page/2/index.html","74a1ab198714de24233abf9ead117b96"],["/archives/2021/02/page/3/index.html","4f17afa09d273f39ebc752e00402ecc1"],["/archives/2021/index.html","4c7032e5b3811194b26b8a5f98e1dfca"],["/archives/2021/page/2/index.html","71f0d09537ba41d5574fa552a4dbe4b0"],["/archives/2021/page/3/index.html","54d1a5d7d72d85a62fcc6b10672b6c0d"],["/archives/2021/page/4/index.html","c02d417a927c968bc9cd2ad397059553"],["/archives/2021/page/5/index.html","0f604a7d4dfb380bd625d50420d93bd4"],["/archives/2021/page/6/index.html","851200b8bc095dc71de28d5e56e950ef"],["/archives/2021/page/7/index.html","39540334d5ef35dd5978920cf3cba72a"],["/archives/index.html","ebb40acfd7fc483ced96ae820669d578"],["/archives/page/2/index.html","3456006c3e8784e356c5b27cfe84633d"],["/archives/page/3/index.html","802d24cee0867871f5db9f1cb4348cb8"],["/archives/page/4/index.html","d961da737c7d0a137180554a5d5c3d17"],["/archives/page/5/index.html","f7fa4379703d3d07403005ed063d87b3"],["/archives/page/6/index.html","777e43089d1d2d8fdb86105f23b5e197"],["/archives/page/7/index.html","5e13f58dfe284d66d92f52ad16e3d5cf"],["/archives/page/8/index.html","d7ca73e35186f4430251b6319f28e73b"],["/archives/page/9/index.html","4b4fd196258330313e5a1a4d2c0e03c3"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","03ee6e85cac05246d265c65a4d7b89fa"],["/categories/index.html","2fdfe3d6bae3a7e38750c88ab8236589"],["/categories/下载/index.html","8ef424b47d9c2192df726f4d2dc594d0"],["/categories/安全/index.html","cf3cd15470dd09647d818c86b0a4779d"],["/categories/建站/index.html","e4dec4d8c54aaea1f22790516e414fd1"],["/categories/杂/index.html","111bf6f662b805528ccc4b8b786eb988"],["/categories/杂/page/2/index.html","cd1f2b90c0cb6363a439638500f22308"],["/categories/测评/index.html","2cc24167e8dfe6b5a018b73f8e178440"],["/categories/科学上网/index.html","e5405701a5b07fbb53078136c6efb8e1"],["/categories/科学上网/page/2/index.html","c87208671675e82666e05f09c2d43c1f"],["/categories/编程/index.html","a8895c00fccd3686daeb9faf48b3a601"],["/categories/网站/index.html","93dceade02ac223155949ed352687c2c"],["/categories/网站/page/2/index.html","29c80b6fdb390b69129f22a594422699"],["/categories/软件/index.html","1437ceff0ca27c6ac7231b5ce39143ed"],["/categories/软件/page/2/index.html","49988ad1dd6c078347edbef6f7bd9bea"],["/categories/软件/page/3/index.html","ad20050b2201cfb251f467e3f5f670ca"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","4ee335588c1a7959d7a7314716974932"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","3e1ff428b6fb9bb0d4f553149b366791"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","ddf54caca02ae821cc545663dbd6c1b3"],["/ios/index.html","d25530ac32476577cf0cf8cb316dec55"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/2/index.html","4252b285b559cb9ee0c96583c2c7b281"],["/page/3/index.html","5a95a657569faeea277086332184943a"],["/page/4/index.html","ef7de5d4eb402ad9bd02a6f0d7c7717e"],["/page/5/index.html","bf0cd6e63225b47706dccae7069c38cd"],["/page/6/index.html","8692cd872c58b1313202fef68370f288"],["/page/7/index.html","2cccec808de60e74060cf06a6440a9ae"],["/page/8/index.html","9c2652a786ecb633dcdd856b6fd29cc5"],["/page/9/index.html","4c85cd8032dff4892ec9bb1311c0b5c9"],["/payment/index.html","75028fb590e5c70105fdc0ddd5c8b824"],["/privacy-policy/index.html","89d4766f7a3d676e0bd32d5a22bab87f"],["/rss2.xml","912181f54d79ed547736eaedf224c354"],["/search.xml","ba7bbd90404126edf88ebc72c12c92f0"],["/sitemap.xml","ccbd0b20a861267581bbc82b325d4060"],["/sw-register.js","6c521e4a04ef49c38cf414ceec72a5ad"],["/tags/5t/index.html","acda86eaf6500f5b087338a6d7186cbc"],["/tags/Clover/index.html","a12fdb6c700f41fac0132466fcd0070b"],["/tags/E5/index.html","81a8c2b769f1228c8442c7e7ad37e7d8"],["/tags/FTP/index.html","96db45a517847bf7bd44a34fac849305"],["/tags/GitHub/index.html","63244517a8330b3c90789f8307fdd0e0"],["/tags/Heroku/index.html","1c0c873549d86391877f21596948566c"],["/tags/Hexo/index.html","ad1a1b4706a1b0c7fa2109e1c5d5515e"],["/tags/Lenovo/index.html","ea7c7dca7bec9f272c2c382edfc857c0"],["/tags/Oneindex/index.html","71a568f99d1349107f76b4ef62a24df3"],["/tags/QQ/index.html","edbf4bae0856a1f16e9d5fb7755d2640"],["/tags/QTTabbar/index.html","ed4594a79847155d8f316d1a452e9c63"],["/tags/RX文件管理器/index.html","c841f30bc834ec2556756f56d92b77b9"],["/tags/Todesk/index.html","65d043db08b09456194fb1d8e954ec65"],["/tags/Vercel/index.html","e0e2e28c3a1350b91d0bd9da85d903b9"],["/tags/ads/index.html","b2395550908432f81061b6e2662e3cfa"],["/tags/api/index.html","69bb4e093de6c2c81adb5a724e62d619"],["/tags/app/index.html","b25a047297861ce2e4c81fb5101d1619"],["/tags/blacklist/index.html","196855e899f05dc5362e9ee0ab965101"],["/tags/butterfly/index.html","1e907fffb80a29f6baf6adf6606b1887"],["/tags/chrome/index.html","0b1248744aa0b08b69aa414f0857dc1f"],["/tags/clash/index.html","69361015571d240d95e63a38a18e5393"],["/tags/cloudflare/index.html","816440be9e064749b2c49978683bff7c"],["/tags/cmd/index.html","f142aa9256ad6d4acd6e909965f7c345"],["/tags/c盘/index.html","8db5c46a37a3b1c2ebdef7b500b91dd1"],["/tags/email/index.html","b30b332363e2d570a0c7c363c5ed53b7"],["/tags/ewomail/index.html","71d7c6011b569658f6d612f4d1d9f3c2"],["/tags/fiddler/index.html","bcfedb0fb920211ea22d1601cf9624a4"],["/tags/flags/index.html","07f4fee03ac7b57efd8f01954793f2e3"],["/tags/footer，页脚/index.html","510b054c2c9ff7bcd6afbff0a8cc90bc"],["/tags/galgame/index.html","93d6296fbb72299fe56beee1f22b6cc8"],["/tags/git/index.html","6b4d793f3095fa3040610cfa811ece50"],["/tags/gitcalendar/index.html","1cbd7fddc1d03d6bd5a553669b371591"],["/tags/google-voice/index.html","302254bc759b62366356a8d0a373ae8a"],["/tags/gv/index.html","8091ae28238effc35b656d867971addc"],["/tags/index-1.html","1989b31ad15e7a1b4f654ba14363091b"],["/tags/index.html","39d88b2029dbb2ce9add685ffe6a5f0d"],["/tags/jsdelivr/index.html","e523fc2261ce464dc83ea3a6ff3d72ff"],["/tags/linux/index.html","f93332d3138d853e40350d3344581579"],["/tags/markdown/index.html","bf7d336cd514ce4f65fa19870062844c"],["/tags/maya/index.html","b25f2f3d6bc85cbd24a47a1e8a3d6042"],["/tags/mklink/index.html","8352c79572c8ff5e08f38a63519bea81"],["/tags/office-e5/index.html","0f4dcf69a9083f2398c9006598469306"],["/tags/onedrive/index.html","a82b9738e061ea48ad5e89c4f6568956"],["/tags/picGO/index.html","441289c0ddf2562e2365a27c9ec48317"],["/tags/pixiv/index.html","a1c2714234d1b3ab30234c25aae981b8"],["/tags/proxypool/index.html","bf23c01c8298f9ed42de35c91f58d279"],["/tags/qbitorrent/index.html","bf3467975803ba5180f45be66c90ad85"],["/tags/raidrive/index.html","c1c86f9a8b0174c0d173b30dcddf12c4"],["/tags/screen/index.html","9cf90bba933357cc06f580ed2b97e69d"],["/tags/speedtest/index.html","505533dd069d97ac07e4f42a476c1bef"],["/tags/tap/index.html","661f507d40d6ad80b85745604b13e85e"],["/tags/top50/index.html","129ca2e1082e1bf68f78f1922705cbc4"],["/tags/tracker/index.html","d28e4e39c3ea34231b21bbb7a393d5a0"],["/tags/translate/index.html","e46651f92e9601802419a1fa45bf06ae"],["/tags/translater/index.html","d072d3f148ea33d42bd4f1e538f3ea6f"],["/tags/tun/index.html","9beff07b0cbe53a69f75c9d3bebad477"],["/tags/typecho/index.html","73a33609d0ec8dfaaaf10b3e86ae91f3"],["/tags/v2ray/index.html","69269c6e098b66e20ed92227a7116c64"],["/tags/vpn/index.html","0022423f1c777bf8a41e03bdaf372a05"],["/tags/vps/index.html","809e85b1d2be4c0cd0f936b12943a59d"],["/tags/windows/index.html","b9a9ff1646226c656bc9c4038e7e7773"],["/tags/windows端/index.html","25cd82d3c88fe156045dfe2a90497327"],["/tags/xray/index.html","d54cd48b0c008b69485273c74129d314"],["/tags/下载/index.html","59d59215f3db83af066965cdc7354f01"],["/tags/不限速/index.html","5be0c097756c7858be0d96592d085f7b"],["/tags/个人网盘/index.html","59ae272dff66edc278f6beb254fa3c5a"],["/tags/主题/index.html","6fbe324668f3d0193943fa7885d31e50"],["/tags/云便签/index.html","c7e0488841a26fe183dc8aa81e93ede8"],["/tags/云盘/index.html","54799a27e968340f14ff734f6af568e0"],["/tags/人人/index.html","eaa1a6e8a019853897e4d674b57b3271"],["/tags/代理/index.html","30f4e6e357ddbf41c39b98bbc7594026"],["/tags/代码/index.html","487196fb255281aec597527e8aedb645"],["/tags/优选IP/index.html","900c49f460bb642263af41152a53e7e8"],["/tags/便签/index.html","c06d6b53a8ca439a13ed7e4ef849816c"],["/tags/保号/index.html","7f727b5efea0bc09ff59bc98a67aa719"],["/tags/免费/index.html","24dfe857a45eac72bba74c383a45a5d3"],["/tags/免费节点/index.html","1fd25e29115a67cb823c7b07ddb15183"],["/tags/加密/index.html","09d3f80d3db9d355ad75815ff77b85c4"],["/tags/动画/index.html","c234beb5ee05e72520a68c26a85a052d"],["/tags/博客/index.html","e36bb6b24ccf7478a3ef67af80045c75"],["/tags/历史记录/index.html","81bf66e4d9354a8eb282a29435fa79fe"],["/tags/压力/index.html","d271ca139197d4f37a92a0989759d218"],["/tags/压缩包/index.html","6f7ac0d3da41f57bcfc1869d23f540cf"],["/tags/反代/index.html","8ab8dc126b1dbbc8c67d4f4d4f2973be"],["/tags/可视化/index.html","35202d4f64ae2118dbb3bb744af2c95e"],["/tags/命令/index.html","a139395a7e36a9efc7dcb3596440ff14"],["/tags/国家/index.html","5f4636a57f28039ad6096e48f6fe5b19"],["/tags/图床/index.html","c822d533505843da7385aeb4dfd59d44"],["/tags/图片/index.html","48211b59af5fdb630bc374e4b980d8b9"],["/tags/域名/index.html","a841a7e66b17c1748a5290e6be2f15f4"],["/tags/多标签/index.html","1f8e3224fcb8930f1b6acfaf2279db5b"],["/tags/存储/index.html","2d868b82a4b99bb35fcd69f1740f2643"],["/tags/安全/index.html","eecc60e41dd99c0c6754aeb7768e6ca2"],["/tags/安卓/index.html","8170d174c7bd66683fc54817e04e5178"],["/tags/宝塔/index.html","8c75dfeb1c7f7aab906a00be0fc0dfd3"],["/tags/广告/index.html","a52d10b7758a05174a02aedf659b22be"],["/tags/建站/index.html","8b95b9bfd3098512e33d0d8adcd32c6f"],["/tags/影视/index.html","2488b114bbdab154fc3bcd5bec41f82f"],["/tags/快速启动/index.html","2974ea26645ca652be1626217bc73498"],["/tags/手机/index.html","8bc6d43b8595a75f324688eaf36dd6f8"],["/tags/托管/index.html","082bef89f3b5c2a14df93f3aa56dc58b"],["/tags/抓包/index.html","d11b4ae36fe52bc4bc6f7329dfab0f3e"],["/tags/抓取/index.html","0881a3fe454b39205d90c33791b59433"],["/tags/投屏/index.html","fd79ce7f94dbf6d3b5625dafe29f0ec9"],["/tags/拓展功能/index.html","df6268045ebad0eb7108195f5f943915"],["/tags/挂载/index.html","53989bfea1ba5dbc2423fd5468a7f798"],["/tags/指纹/index.html","debbc2b8a18f913612f7fef3eb2bc526"],["/tags/接口/index.html","258ab991198debaa8dc54e01d1b8dc25"],["/tags/提取图片/index.html","d098e8f5ef1cf3de4a4143c27f34a747"],["/tags/插件/index.html","fb8843985e4ba2f1b851bb2a61199d9d"],["/tags/搜图/index.html","4008b44d858f211867034cd6e8f4a494"],["/tags/搭建/index.html","3fc75916f1aafbe876c8944ba45dc895"],["/tags/撤回/index.html","67e8cd52ec988f9df1e6c1bdcabbd00a"],["/tags/播放器/index.html","6a5f5d0d210a91340610dfe76093fa23"],["/tags/政府网站/index.html","3bcc0fc5b03e865a53f2aa5c81469751"],["/tags/效率/index.html","c6d6b6015181dbfd84e6ce5f7beb1283"],["/tags/日历/index.html","acc64b3c4e276d685931d12fb9ea5d37"],["/tags/服务器/index.html","d51c4a674a5e8513f021c967f1f1026e"],["/tags/桌面/index.html","d89eda9225ccd1ad720b9070c6b9367f"],["/tags/梯子/index.html","606c8186a66bc62621c5675d7fd57cc7"],["/tags/检测工具/index.html","c0916e316f25167b5cd61ca99257a337"],["/tags/汉化/index.html","c8a20070de5494c85a9ee6dea7204ab0"],["/tags/测压/index.html","566715362f4772547d5ce6933e317ef6"],["/tags/测速/index.html","0bb5d5c2724cf85d477da4d3e081a2e1"],["/tags/浏览器/index.html","37ed332cc43929bc388978a732c2e569"],["/tags/清理/index.html","4bbc488e549e1d083e6a7f7743918ab8"],["/tags/滚动条/index.html","6542699b8d38d3cdfc7a19260af92b3a"],["/tags/电影/index.html","a6d0bb0bc07cc4384f375084feedb3a9"],["/tags/电视剧/index.html","8155506677e2e354bf133ff3e3afac5b"],["/tags/白嫖/index.html","0a70219d92e09a7503aed6fa99de3525"],["/tags/百度/index.html","e946b6e514c70abbfec2188314c7f3ab"],["/tags/百度云盘/index.html","bcf07fef40728883d34ac497f27fbbbf"],["/tags/百科/index.html","d79be579ac4a9f23c1088c84d3f4bd6c"],["/tags/短信/index.html","edffbf303f9ff03c5546cbbbe7672712"],["/tags/硬件/index.html","365fa18f23e243e5930a3632d3e49fe2"],["/tags/科学上网/index.html","ba249cd1a5e24543e581c71cf9a187a0"],["/tags/空间/index.html","26882aabe8e4cb0a6faf1d4a0165a5d8"],["/tags/笔记/index.html","be46d0f2308ee667b0425bb8c6e31ddd"],["/tags/简洁/index.html","f0b853ed9356b52ed2579fc53b89c83a"],["/tags/简约/index.html","ecc308f8f92cd9a9aa9d1e2ac2b718c0"],["/tags/维基/index.html","000849a8557c35257e6cf4af0690ea08"],["/tags/网易云/index.html","06424e0c6dcf0027cc1df877adec9ed5"],["/tags/网盘/index.html","358317343d30d54727149feabd8e5eaa"],["/tags/网站/index.html","3137d1f4995bf86a5f12fe46b583adbe"],["/tags/网络/index.html","4ae7de0d6bc816a8bfdeabc693151d6d"],["/tags/美化/index.html","4025987cbaf981e0af8cccb210d0441d"],["/tags/翻墙/index.html","d478fafb8632364554f048e4a2b1e9e5"],["/tags/翻译/index.html","86239c3d726f36cc3525161356c123ab"],["/tags/翻译器/index.html","a67872eb8af57e4ce1c7490072a88fb1"],["/tags/聊天室/index.html","193c37630e579719e4ee75ee0ecc25d2"],["/tags/联想/index.html","4a95e835a6ed15e9bca7af34f5593c84"],["/tags/节点/index.html","31e854f1cff5f883657c6e8b5466faf6"],["/tags/虚拟手机号/index.html","169b789666d43fa46aa795131ed06859"],["/tags/补丁/index.html","796d399aa9e78f4436fd6d547c785691"],["/tags/视频/index.html","e48e7498c5ea63983c0fa01ee38f9562"],["/tags/解析/index.html","954da458edcfad1787009a6fc8ff4bfb"],["/tags/订阅链接/index.html","4269fb49aedfbb53eff502e4b11cbc93"],["/tags/记录/index.html","b8755114fcfe6e0609bab706366d81ab"],["/tags/识图/index.html","73d295df4a7215c66d739fd2b32f497b"],["/tags/语言/index.html","5a590af53afd607122f0c5a5eece864f"],["/tags/资源管理器/index.html","41bf0c216204cc0804c87a58ca4d64dd"],["/tags/转移/index.html","f43bf08ae08cf2e29708dd550596747c"],["/tags/软件/index.html","2cf6f6a2fa309f55afa701510443101b"],["/tags/轰炸/index.html","916fcf5504c7f2f9c5b4c47e97c7c38e"],["/tags/迁移/index.html","4fffd77475c8cc37574bbd9e7b1b275d"],["/tags/远程控制/index.html","9f7a898575c6a1017cb54be8dc1a4023"],["/tags/连接/index.html","1e5d71bec141f6585923ea492bb4a832"],["/tags/追踪/index.html","bb721d46d4bbab42abdb208be9935e2b"],["/tags/速度/index.html","738ee95420a2a4c32744d440432819bb"],["/tags/邮箱/index.html","a16bb13b527104c0e4537455adc71950"],["/tags/酷炫/index.html","730e7aa23295c41036f06046525f5f40"],["/tags/钓鱼/index.html","acc6f16631df6c8eb2caf165508db375"],["/tags/镜像/index.html","e048aef44f616e8cf19ba2fd09fe351b"],["/tags/随机/index.html","c4087fed159697126d4db76795fe4540"],["/tags/隐藏/index.html","52757ca047c3b3113405b6bfac959777"],["/tags/面板/index.html","e94e8b28991f5d87dd95bf8584319d51"],["/tags/音乐/index.html","566376518e5429eea7a5836c4c686539"],["/tags/高颜值/index.html","5e52b82dc004178b337f8f1b78e399f1"],["/tags/魔改/index.html","a30edcfc008485dde0c78021f415a6c0"],["/tags/黑名单/index.html","960d2177512c6e414624910015ac0471"],["/urls/index.html","e8fb554d784a8358fdc595e0d78f5af0"],["/vps/index.html","08efd5beed44bbddf86b9366332f1ff2"],["/支持/index.html","00ebb19bf088b6492ff9c5dd96454a14"]];
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
