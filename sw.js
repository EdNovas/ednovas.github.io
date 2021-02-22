/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","3fd270b653c37e203209d0002c068ba3"],["/2020/11/29/clash-windows/index.html","c1463dcba90f02ac3a45fc424c4f7d10"],["/2020/11/30/websites2/index.html","e97f146b04d2514d935b75f10f78eaa2"],["/2020/12/04/iphone4s/index.html","8e92c9d3f705ea3093dfeff7a30f0a04"],["/2020/12/04/onenote/index.html","a17c90140512301ed22f42e6d9cff5e9"],["/2020/12/04/wesites1/index.html","8a5539a5726bcbf2fb0b5821b5f1f795"],["/2020/12/06/nokia808/index.html","b36fd01d0c841e71f9d6cab82ebb01a6"],["/2020/12/07/ipad1/index.html","33137638b3b591c0d8f8118b6ec24100"],["/2020/12/18/freesubscribes/index.html","e042c1b4e0abc7388fc66235e8d522dd"],["/2020/12/19/musics/index.html","7e1c14ba52cb8e60bb465ae407bab2d3"],["/2020/12/19/shadowrocket/index.html","f634fb84aac248de8781aff4048150a6"],["/2020/12/19/v2ray-windows/index.html","3845b6abc64f2e2e3378ffdb461f703d"],["/2020/12/19/v2rayng/index.html","7d955be7027c11959fc71d487cbbf7a0"],["/2020/12/20/beoplay/index.html","2c2ef445aacdebcc9196889c5bc3b044"],["/2020/12/20/订阅链接转换/index.html","42d2e958d6747ad9855e9b5ca978757d"],["/2020/12/21/chrome浏览器下载提速/index.html","60d25229c2085c306e36f6c396f6c077"],["/2020/12/21/免费128线程并发下载xdown/index.html","15778bc28423f7af9794e46b0e43e481"],["/2020/12/21/免费32线程下载软件ndm/index.html","84cd93b0819486fd2b7d5e2e9b3d6bb2"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","ba8a5c86c592751a51625a0b46c05851"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","6e4df6b66af6327d680e263733827793"],["/2020/12/21/广告怎么知道我在想什么/index.html","b637dfec772a4a2655071a88f274feb1"],["/2020/12/21/无名·引子（小说试写）/index.html","e74a9fc86442036d9ccca8983bdf5f79"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","b9b62defacb5be9172519ea344b47f95"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","c1c7ea7c44ec039971ccff66af1311fe"],["/2020/12/21/高速轻量下载器aria2/index.html","fa21a1ba3dc19675f1c80c1c499876a1"],["/2020/12/22/2020-cee-roo/index.html","8f13849eca2edc2f2379e16706a461a1"],["/2020/12/22/firefox插件、github、steam富强/index.html","364bc4475248e8247fed36b84c992efb"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","72f3d7051593d874c3cf7ce03ec83cc2"],["/2020/12/26/python-day-1/index.html","cb2e5c3cd99221df4bab24f9af000ffb"],["/2020/12/26/python-day-2/index.html","b1d3551074d7b9a8066434e90c239390"],["/2020/12/26/度盘不限速下载方式一赏/index.html","392195d621088c418811d5067ab42ad7"],["/2020/12/26/添加开机自启软件/index.html","c784fbae6c97b8c89ce9b9abd78a81ac"],["/2020/12/26/电脑端截图方式一赏/index.html","5201973513b74f6c44283bb30b32d58f"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","025e4122e8c6d9d79ccd04b4d75c873d"],["/2020/12/27/最安全的浏览器tor/index.html","1a5df074e731f1beb85372725cf4cfc0"],["/2020/12/27/网易云刷等级和听歌数量/index.html","3e4bc82ddec3fc99f3a4a50580a93df3"],["/2020/12/28/freenom申请免费域名/index.html","9c0fc396ab0be77f2f2ab98b7ab077c7"],["/2020/12/31/机场/index.html","891c06eb986d5e46fdc1d37b311074af"],["/2021/01/01/M1/index.html","dbb5d6710e48e0f084e3a16d87332158"],["/2021/01/01/compress/index.html","9852ebea2d7185ef0d7b496b43b0de9b"],["/2021/01/01/infinityfree/index.html","83bb1ed108513ac64c4a80b14ea401c6"],["/2021/01/01/硬核翻墙/index.html","b7ce0d3aa0dcd9f188d8433d3587bcdb"],["/2021/01/02/qq/index.html","aa63a47995569fac9dcacfee06bb0ef2"],["/2021/01/03/netch/index.html","f5ff2cb61b54b39a0b2ca0dbabd58785"],["/2021/01/03/waifu2x/index.html","00f9b448283005e848fef2dbbd80a259"],["/2021/01/04/ads/index.html","56d4d7fffd56b1ce322ada55d91683eb"],["/2021/01/04/games/index.html","9e2f94b3f7a7e3b6ab92b91bcfa76162"],["/2021/01/04/heroku/index.html","70ea9fe8d1982b19fea4d41953c47c02"],["/2021/01/06/movies/index.html","d93e2d7be1ab8b6c8f040020229527af"],["/2021/01/07/google2020/index.html","d1464be4d53adc3e51977e540bc5eb4b"],["/2021/01/07/lucky/index.html","95c6b86e7b0f0ef1db356476ccb7ec3d"],["/2021/01/07/spotify/index.html","d94866bd53a2dd495f646a9b0ae45419"],["/2021/01/07/thunder/index.html","28b2c22a90b88a2c2e0cdc9e00717947"],["/2021/01/08/adguardhome/index.html","5e78403d75e6db573eb2c5772c2360df"],["/2021/01/10/IBM/index.html","c18db6d542017863944da2d5ae4e870e"],["/2021/01/10/potplayer/index.html","c10e647d7847db1e15e40c7552a9744c"],["/2021/01/10/sakuraanime/index.html","59d701a9f0ae775a2ee894e1124377b1"],["/2021/01/10/美剧星球/index.html","6ba2255c5da7deda67c1935c907d8114"],["/2021/01/12/telegraph/index.html","593a189384f79f94cbd32b6863c92912"],["/2021/01/14/comics/index.html","39c69af6f04c931ab7f267cee024a5d6"],["/2021/01/14/ftp/index.html","09021feefff7c44ff4c48c835bd32e29"],["/2021/01/14/oraclecloud/index.html","3b43cdb3ad2e3b240fa694ba092376e3"],["/2021/01/14/porkbun/index.html","5240af6ec3930fd017208865a74babb1"],["/2021/01/14/powertoys/index.html","10d753bc3eabd8f8e84a9ccb2c709932"],["/2021/01/14/taptap/index.html","aa2e384234e1f6a13a82633b151d3a37"],["/2021/01/14/ubuntuvsftp/index.html","ddfa5600b494bee508946a2eafa6aae8"],["/2021/01/14/小说/index.html","2c41dafe4d2da3c81fdc29607022aa8c"],["/2021/01/15/freeproxies/index.html","c2acf7a29905b957e976379ed8e0bbfb"],["/2021/01/15/incaseformat/index.html","d51920dfab64c8d6b6a56ae6d878e523"],["/2021/01/16/euserv/index.html","daafb0f63c1f459de55e211d7a29b650"],["/2021/01/16/winxray/index.html","527ba820869479048fb4d541ed9c2cba"],["/2021/01/18/qqreadhistory/index.html","e237fe80fe35db39ebfd6cd109c347f1"],["/2021/01/18/qqrevoke/index.html","75cf902f1d9216f56cce57c561f00d4a"],["/2021/01/19/freevpn/index.html","b1ebdc98e96b8024027aa8d7f1e80f30"],["/2021/01/20/browsertrack/index.html","c12a28b390346be2acec74796adaf874"],["/2021/01/20/v2ui/index.html","53de17dd4edfc4383d383c8800b6c802"],["/2021/01/21/failedtoconnect/index.html","03baaefac5f96ad77e490f17df7d1e27"],["/2021/01/21/gitcalendar/index.html","338d350cb1d9dd4c8fa191dd7e9ed7cf"],["/2021/01/21/markdownformat/index.html","8b05df4ef4dc159aaa3ba8c90caf2c96"],["/2021/01/21/markdowntable/index.html","21b74d170afd18ab0111d9c6fe6b3c76"],["/2021/01/21/vercel/index.html","46a4595e5ad0a5ac3c1d8adc8afdbbf1"],["/2021/01/22/hardware/index.html","625a757d97690e6999a15cce9c58dda7"],["/2021/01/22/muviz/index.html","49eafd6836e83b3c1601c338d046efcf"],["/2021/01/22/randomapi/index.html","e6f7f0482da4345d24b3f1efaeb10090"],["/2021/01/22/searchimages/index.html","a806ba17b499c78841f2abd80a492e62"],["/2021/01/23/RX文件管理器/index.html","bf701c358fc1316b0a3b9e6f242992d6"],["/2021/01/23/chromeflag/index.html","6f1afda05dfd6dfdb94113478f8c7d64"],["/2021/01/23/qttabbar/index.html","83f902d121d71715878b84e5a4fe090c"],["/2021/01/24/githubspeedup/index.html","430727df46f238bb2ed0f4128de453c9"],["/2021/01/24/jsdelivr/index.html","adc6a4ab6390114633e202c7ffcac864"],["/2021/01/25/note/index.html","edc8b62c4eaffc1dd5a75350b8fbaf6d"],["/2021/01/25/soul/index.html","8137e15ce86ca9aaeda09c1cbe67cfab"],["/2021/01/26/herokuxray/index.html","48f104ffacb55336f3eda464ca0b7e22"],["/2021/01/27/proxypool/index.html","333d6a5192ccdea5d9a81c2bfa38de6a"],["/2021/01/27/tracker/index.html","a54c819ea21eaef45203f8b3051a0c19"],["/2021/01/30/pandownphp/index.html","4a1d80be21e329a4c8477c3ece43c988"],["/2021/01/31/newgroup/index.html","89af8e5457e84b01cd31bf75660cd5a5"],["/2021/02/01/clashlanguage/index.html","0c6c3b5e52fc24224a39b0064a395d18"],["/2021/02/01/encrypt/index.html","7d7c2b5573969461a57f75beb0ca5779"],["/2021/02/01/footermotion/index.html","16aabbaf0a573628c12d9c0358601ff4"],["/2021/02/01/gitter/index.html","bf8d4ce7a5ee414af9f827f8a6d1a202"],["/2021/02/01/pixivtop50/index.html","163052c3fc635bde98ac29e7e8270df1"],["/2021/02/01/scrollbar/index.html","06e3cc496bb6660ebd6f30154d2fa8b7"],["/2021/02/02/clover/index.html","b80d03cab4d1408a89903286a91a50bc"],["/2021/02/02/maya/index.html","e505c9e86a9616e57d154e6161060c53"],["/2021/02/02/speedcontroller/index.html","855e0afca33794d073af8c4cddccb9e9"],["/2021/02/02/yesmusicplayer/index.html","1e94091dfa44fb20de3cec836b133e6d"],["/2021/02/03/lenovoonelite/index.html","059342ea50a542e1ff4223f801a02af4"],["/2021/02/03/skipads/index.html","b0778ce69c50273aac60b1ae37014eaf"],["/2021/02/04/picseed/index.html","010667a00e72deec70fadf3878a61acd"],["/2021/02/04/renren/index.html","b38031178d213f5e9adbae2280aaa8d4"],["/2021/02/04/serverstress/index.html","f25799a28e84b3eb4cd94024dec71cdb"],["/2021/02/04/wikipediazh/index.html","24b368404c9acd7ff9eb3455f901a6a3"],["/2021/02/05/googlevoice/index.html","9ef30d95437e3a6ec0c40e10ef852814"],["/2021/02/06/clashconnection/index.html","e19bf05d5b9602e9172f222cb4651592"],["/2021/02/06/gvtransfer/index.html","4382ad9abd94c82ee47396f0c894802d"],["/2021/02/06/todesk/index.html","600ba98755075515b43bd529679828a8"],["/2021/02/06/vpnblacklist/index.html","5b9c8f7f4102ce8e58d45428e2f73616"],["/2021/02/07/mklink/index.html","1b30b3d92949e196056acdd88e0a3fa2"],["/2021/02/07/speedtest/index.html","30fe220b16210359633e555dcfaf9266"],["/2021/02/07/translate/index.html","5f475f688ff310091dcb84c7428d1380"],["/2021/02/08/ewomail/index.html","e1c96a3590e9938606925e114d31f3de"],["/2021/02/10/officee5/index.html","1bc68bec45fea5d82b22ccc6cfa37b38"],["/2021/02/10/raidrive/index.html","fd34966736d1eafaa4828e1e2ca5ca01"],["/2021/02/13/e5sub/index.html","6b205a61f053cf301f110bcff797f389"],["/2021/02/14/screen/index.html","eea747d619bf8c430ae7fc2b800af025"],["/2021/02/15/clashtun/index.html","e600b20fc0b10b2d7f02d70a89ba5ecb"],["/2021/02/15/messageboom/index.html","dea63161206779935213adf59ebaeac8"],["/2021/02/15/oneindex/index.html","a1296d84ae17a8e0888c68ffc47e3fb1"],["/2021/02/16/govsites/index.html","3a8844060fbd70f6befe43016547a87b"],["/2021/02/17/hexototypecho/index.html","79a660d002ff03f5c36555796ab1b26a"],["/2021/02/19/fiddler/index.html","05a2544fe17eba3b00d87cb6a3b7ac50"],["/404.html","93077f8df448bf94c465aa196f8a9d85"],["/archives/2020/11/index.html","eadf4fa6656450c0ac196cbd8664426a"],["/archives/2020/12/index.html","a107c099441b91ff72943e83086be80a"],["/archives/2020/12/page/2/index.html","64013885b10ce3c6a32ca889cbb3a799"],["/archives/2020/12/page/3/index.html","35af541f0df1b24b2110a939f9bebb6e"],["/archives/2020/index.html","9f1276bf333c88d122a24336ea815af5"],["/archives/2020/page/2/index.html","4bd5bbb7593554fa31c1a7e943195ea5"],["/archives/2020/page/3/index.html","277ac35740e9dd1096ecd969d27614a0"],["/archives/2021/01/index.html","8b9fe30a337e2ebfcd41d5f8f21ae985"],["/archives/2021/01/page/2/index.html","5510c3479d32b39a20c6b311570cbe9f"],["/archives/2021/01/page/3/index.html","2b824317c82ab6fce806d1056cb3369b"],["/archives/2021/01/page/4/index.html","53942db8b501074b0038083a35e8e1aa"],["/archives/2021/02/index.html","262d5673b638194e02ed19f471fbee0f"],["/archives/2021/02/page/2/index.html","e192aaf2ca9908a3b62eb70b31afefc3"],["/archives/2021/02/page/3/index.html","10189478290a00edd458f4eb671b2cd4"],["/archives/2021/index.html","6735b78226176f7bcbdea733af9433ee"],["/archives/2021/page/2/index.html","b0f540e415cc67ae00f6b7a89a5f8b3e"],["/archives/2021/page/3/index.html","1e975165fa305617590d620ecfdd5305"],["/archives/2021/page/4/index.html","97bdd9d42e4ccd91d4d2bd7d306f9798"],["/archives/2021/page/5/index.html","4927ea7d7ffcdb77b82ce37261df7c0d"],["/archives/2021/page/6/index.html","203c919bb62cdc18cd242be34dd78288"],["/archives/2021/page/7/index.html","5b0b7c267bf7844919f33681bfcb69a6"],["/archives/index.html","f5ceffb59335529e6447022d8294843f"],["/archives/page/2/index.html","f7f590f76c2d0b46ab33a6154215295d"],["/archives/page/3/index.html","2ac98bac01a707f2998d3a0b2cc08bb5"],["/archives/page/4/index.html","a509cde24180cf40f896152811684ce3"],["/archives/page/5/index.html","ee999427295d05f6b844e3f0e3a63c1d"],["/archives/page/6/index.html","8186d7bb8a1d646e29fc74622c7f49c3"],["/archives/page/7/index.html","7a2853ddadec3d471f7150bd2c2b0846"],["/archives/page/8/index.html","7355ffb3d452dcda4f360773184b2681"],["/archives/page/9/index.html","0e10ae3de8a2aa818336e28edd8524ba"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","a6fe6f8697e3f0af51ab2fd3279a382f"],["/categories/index.html","564f921e52904d52c95cc4bc4856e667"],["/categories/下载/index.html","9ab3af35b8dfd1d994376fe07e887e69"],["/categories/安全/index.html","254fa54fe4cf41b6c7e4e44f0cc77058"],["/categories/建站/index.html","467b04e6d5165f0103d7f679e0b6e94b"],["/categories/杂/index.html","4a1cf27905454c3a73229c0db44adc81"],["/categories/杂/page/2/index.html","9a501ca919a060ccf20ad1d77a5ce5f8"],["/categories/测评/index.html","041bcbc0fe805981656d8acfbef73182"],["/categories/科学上网/index.html","d6ecdcd24d635427b6a3906897382fbb"],["/categories/科学上网/page/2/index.html","3b2189cab6402555cc4a0a048f0dfd0a"],["/categories/编程/index.html","23499031a72344f9bd097104a89ef685"],["/categories/网站/index.html","1d53d741ce938e5c3071d8478f5cf3d3"],["/categories/网站/page/2/index.html","6c44270e67f167b248511309f7e31bc4"],["/categories/软件/index.html","c1cd90c4a1fe16a9e2788e25cc310cf7"],["/categories/软件/page/2/index.html","d2d6ff3515fd3e680ce97dce03daae56"],["/categories/软件/page/3/index.html","b6ce277099c95ddd54e25b4867eff6a1"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","31860ddf3f0ae6234a42993fa17bbbf6"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","75a58934cc5d8fb79a6ce8cb29babd5b"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","7aeb81dcc19603447ffde5cf11c7d343"],["/ios/index.html","1514ce2353e39374be10f1382c64ac0e"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/2/index.html","304a4c482a03c1816c40942132b2f81f"],["/page/3/index.html","042572b9dfba8be16c3dec578a5d1a8b"],["/page/4/index.html","0220d6f9a1ecb3d1c039add3c27058c5"],["/page/5/index.html","08fe33070318a4c3ed31d81617cd876f"],["/page/6/index.html","2039ba4fcd20f3ca7eeacc986c3136a4"],["/page/7/index.html","00c0ef2dab66c09bcce39dfd3bda40ef"],["/page/8/index.html","dd674f919316750c5f2c1ec4d9b1b900"],["/page/9/index.html","b4ac7de2ebeacf328895f92824b67116"],["/payment/index.html","38145085bdb19d938e14442564227125"],["/privacy-policy/index.html","9ca8255783eeed92b6221fe60360bcae"],["/rss2.xml","e1b70a7dd966be24466080afec5cfbe5"],["/search.xml","465ddebd6382d1ec133cc9e996f107bb"],["/sitemap.xml","9ccf046145916f5ccd5a7a9894d47df8"],["/sw-register.js","fe1218d0568b69172510ad989266e5ac"],["/tags/5t/index.html","9b9b9c5d4fae40eab122815a74f3669d"],["/tags/Clover/index.html","05d21bc1b791e695153afa315cc50a40"],["/tags/E5/index.html","71d87fc84ffa25616ee88ec4a804417c"],["/tags/FTP/index.html","e48baf29cd61e4b6ef57464ce5fe280f"],["/tags/GitHub/index.html","090c36330dc141f207cbc64eeb9d8d8e"],["/tags/Heroku/index.html","32b724e28dae7a9a441ecdb8ae00b616"],["/tags/Hexo/index.html","8ae604dc715ac90c24592fe3148c75e3"],["/tags/Lenovo/index.html","569d049f15c1829f6a1680e973d77c4f"],["/tags/Oneindex/index.html","00454b3b69a35638c33d29850ef43fc7"],["/tags/QQ/index.html","10cdb6f4d9fa8c8f4d5f49138f0c2fe7"],["/tags/QTTabbar/index.html","f3df2b15b0a1426984ca87fd03712103"],["/tags/RX文件管理器/index.html","cbf69b01a5ed6194326d5dfb09f94baa"],["/tags/Todesk/index.html","62b5dda67d256dec58cd885f47788fdd"],["/tags/Vercel/index.html","72d5a0b755b65d3a3d38ae314eb73ada"],["/tags/ads/index.html","49e67edb4e3571f38dd56a135c4eb2dc"],["/tags/api/index.html","346326122986b99986cbf35e8ab91d8a"],["/tags/app/index.html","006499b63adafd0437b087204498bb75"],["/tags/blacklist/index.html","5959e1afac9c7af92466f31fc832035e"],["/tags/butterfly/index.html","fdb1e1b3cecae8c75f000cf30cfe6cdd"],["/tags/chrome/index.html","80ead5b23a6d19a89172d195718e6883"],["/tags/clash/index.html","6adb143f1301e2612f3c3c85d268e0ab"],["/tags/cloudflare/index.html","72d95b5d2e199f200bf0a23b33d6e47b"],["/tags/cmd/index.html","aa5687ed0fa16807b018e82854686f02"],["/tags/c盘/index.html","584c43f45ea6246b598659494e1a3509"],["/tags/email/index.html","32e0af5736164d15c022fec5d8a2f2d8"],["/tags/ewomail/index.html","29598821507f5924c27c920a9c480a2f"],["/tags/fiddler/index.html","a90bab924c65d71123150ec806fe4d9c"],["/tags/flags/index.html","721351dcff5224e674fe839fab41648d"],["/tags/footer，页脚/index.html","433535b554ba36a26d2cb6d3425b2542"],["/tags/galgame/index.html","19c6babef1bf4f1f1c0a998021ba63ec"],["/tags/git/index.html","5b25cf7e35e10a9de1a42fe50ae02d8d"],["/tags/gitcalendar/index.html","b4459d40b3939e0532e785867e0595c2"],["/tags/google-voice/index.html","12e5d5aedd663fce62205e57d5987750"],["/tags/gv/index.html","48d1ca2d240ac484aa9f31b775663c7d"],["/tags/index-1.html","bc626e78c8994f2e88eec18683b66ef4"],["/tags/index.html","d3139fb333b6b36fe6989d45fa5de270"],["/tags/jsdelivr/index.html","57a028199e90130a912a5c5c23c8916a"],["/tags/linux/index.html","f6b7d4e40e730877ec92afcc98b9a654"],["/tags/markdown/index.html","972c7a83f408969378769ae6be06902d"],["/tags/maya/index.html","2694edfb0786d9ee731fa53380203d7a"],["/tags/mklink/index.html","b70ed7299d91251670ec3f658f1715ff"],["/tags/office-e5/index.html","4454e5f9b35fcbb67d8469d1c83d1e3a"],["/tags/onedrive/index.html","ac42afd07f267a69866ff8fcf2cbb651"],["/tags/picGO/index.html","68b4a374d3871f1dd5260ef614c65862"],["/tags/pixiv/index.html","7405a4175e426fd618f8baed160950f3"],["/tags/proxypool/index.html","38e57451c9688ac5b93b34b817a1888a"],["/tags/qbitorrent/index.html","b46e8282bde3dd3841cfd17f7a7f4312"],["/tags/raidrive/index.html","157c0d934d3bc5b01bd60a8f7cc1e8c6"],["/tags/screen/index.html","fad4b05cbc45e16570c13ed72de75195"],["/tags/speedtest/index.html","245fdf67b187982f925814ef99d683a8"],["/tags/tap/index.html","cc0278fbaf1801a9333b12c591ee1fff"],["/tags/top50/index.html","873bae387cad7a30a56516fd6803b882"],["/tags/tracker/index.html","bbc3af5de5e48d40e36fcd6daea153c0"],["/tags/translate/index.html","d9ae4296270fe0d13652990d24fafb1e"],["/tags/translater/index.html","cc7609b30acf4aa72cdc081e0a2f9e16"],["/tags/tun/index.html","4a4ab47ffda0853a215e3bbf0f8a4b0c"],["/tags/typecho/index.html","68338d0a5dcc8756b3df9f4402419db5"],["/tags/v2ray/index.html","a9ccc00230243741cd02c6bac1fe63e0"],["/tags/vpn/index.html","e766ddd025aef06e785a43e2781ea1b5"],["/tags/vps/index.html","6a6ec74cc680c3d2accee17c1f9650c2"],["/tags/windows/index.html","06b7a1155e2a77547b5cd5e3766704a6"],["/tags/windows端/index.html","0339a00649334359c6d6c5ea17cc79e2"],["/tags/xray/index.html","39747737ae2faed2106967b1d898f2f3"],["/tags/下载/index.html","191d95b8e83988ab80a68733a980fc3d"],["/tags/不限速/index.html","e703b9cdf622fe51c3c32b6abc8d1075"],["/tags/个人网盘/index.html","65394914cf1d0f1bcbadb6053ad6d06a"],["/tags/主题/index.html","5c6531f094bb6fc9e6cdebe3b205f5a0"],["/tags/云便签/index.html","fd468d7f7987820cc1c93bef8a84516b"],["/tags/云盘/index.html","8d049f54284cf8178d17293c405c8b6a"],["/tags/人人/index.html","ff08053e4bdd08e7c5fac961fdcc42b6"],["/tags/代理/index.html","b98d504beb216fbcb88e1352d28975ea"],["/tags/代码/index.html","741fc5da7f250a55d94c5c49f09a0079"],["/tags/优选IP/index.html","3c4ba88e69fd2d3882df8054e1ab6db2"],["/tags/便签/index.html","6b36d37aa6f8a4386cb9c6ae5b45f7a8"],["/tags/保号/index.html","bcc2e927b6f60206b11c39019801214b"],["/tags/免费/index.html","0620f20694ccb7425d6f13d2ad2ee0ae"],["/tags/免费节点/index.html","654cf9be0b9d40fbffdc6dcfaad4935e"],["/tags/加密/index.html","6c6d0e7111696ca9561f39c55ac0a22b"],["/tags/动画/index.html","b4074bd053fe8e2237fdacba5e7e0327"],["/tags/博客/index.html","c08cc966c509030bfd840a656c3ea25d"],["/tags/历史记录/index.html","0532ff5570bc8ef0fbb0abf043990df9"],["/tags/压力/index.html","277e97b1a0eaa77c356691ff2a63af98"],["/tags/压缩包/index.html","a6bbe30c817dba9722c3ed0a6f83f3b5"],["/tags/反代/index.html","fd7fcfb4d2ea65a5cfb7f8248f88a10a"],["/tags/可视化/index.html","bf84e70375ced8ac36356235d98c0fd8"],["/tags/命令/index.html","502004991a40ca30c7a2d63f62c8afb5"],["/tags/国家/index.html","b4a396f777f5856f20fdf534460f4408"],["/tags/图床/index.html","0d5f42362df1852259e675eb59a4494a"],["/tags/图片/index.html","3eed6323d9ea42fe9ccd18ad53c92c9c"],["/tags/域名/index.html","394c6751f93be5e1226a7cc545b5a440"],["/tags/多标签/index.html","0b381b8ffc8ae2ef50edea74db5d3e36"],["/tags/存储/index.html","c52dbd7dcde1614bc76d51621d6eb35b"],["/tags/安全/index.html","40493869757077b3c6c6dd24155a97b6"],["/tags/安卓/index.html","6686209abb9f5a443747ab2e17609dab"],["/tags/宝塔/index.html","a5c1b1510e141b63aac1c6f5c281c3fc"],["/tags/广告/index.html","24d697d7343f3ac8f82d47cacf389c3e"],["/tags/建站/index.html","599da3ae84044da01663b61f4ff81f34"],["/tags/影视/index.html","5c515eaf3f54a6c8fa90c2449396eee2"],["/tags/快速启动/index.html","03b97a4d1a2a1605d2261c213087b0dc"],["/tags/手机/index.html","dfc977bd1f8f169f45f07a61cc1fa2a8"],["/tags/托管/index.html","62a1bdff771be408ce4cb1d061f129f7"],["/tags/抓包/index.html","b5b2f856551bc3a55745cb030d014911"],["/tags/抓取/index.html","766612bb5c746cce171c637deacaa0b5"],["/tags/投屏/index.html","5c52d2aa0bc7aa4015304d7e2593105b"],["/tags/拓展功能/index.html","f5087d9256dc2fd53b6a36bf01c7c150"],["/tags/挂载/index.html","d91f061506cef4294f724e3224aec0c1"],["/tags/指纹/index.html","ce3a5d3719a2e86fa6e54da85ff01da9"],["/tags/接口/index.html","119d231ce638f7f20f9821f4d810c218"],["/tags/提取图片/index.html","0eedbc0b2feed79c31535875431f7765"],["/tags/插件/index.html","c5f78b49515f75f3ae2cd25c0580842f"],["/tags/搜图/index.html","2874265bbf23c0eab9d91a3602b05dfa"],["/tags/搭建/index.html","82d39f7346fbd11f9bb3754e6c0008fc"],["/tags/撤回/index.html","f421eb13e01bed6e20cb3d5aeb76ff09"],["/tags/播放器/index.html","8901725de8b4872f4a5006d4a34279cd"],["/tags/政府网站/index.html","4d63e9e8b095d744af371f7f557f80b3"],["/tags/效率/index.html","896c6e82bce841f408e6312227bb9425"],["/tags/日历/index.html","f4ac85a120a6eaaceb34e8b41bbd6761"],["/tags/服务器/index.html","dff9065e0cd3c4828b31d7fde81b073a"],["/tags/桌面/index.html","f314052dab1dcc5a84abee386fdd4e12"],["/tags/梯子/index.html","088064dd38bbe9da91ed29151eb5777e"],["/tags/检测工具/index.html","a72fdf35ec1d9583292bbd2c4e51b409"],["/tags/汉化/index.html","75c63aa75d2235a57edfc044c5e1c9bf"],["/tags/测压/index.html","11fdda2dba2a721e8d3d302c47abbff1"],["/tags/测速/index.html","d574888091bd102be3abe6f7e5ddbbcd"],["/tags/浏览器/index.html","e6e9ca41b75ad58eae5f3d6dac54384f"],["/tags/清理/index.html","c8371fccc2bd4406d7d4401464996853"],["/tags/滚动条/index.html","c1ec47310a49b22b718eb13285bc5073"],["/tags/电影/index.html","8ec32779e39caad4a2c1202cdb3e459c"],["/tags/电视剧/index.html","eabbe37bb0831b15c749dd6f8725fa4d"],["/tags/白嫖/index.html","3b0626b2da346b6ee2c83f8b6799a959"],["/tags/百度/index.html","531e01fcb0cfa0b666a0263c69318572"],["/tags/百度云盘/index.html","d4b1cfbdd4fdac807ed1ee9cb9494736"],["/tags/百科/index.html","2fdee324fe73ff7ad12749d87f954234"],["/tags/短信/index.html","c3ccaa743f354d41ea28c62ccb33e7a0"],["/tags/硬件/index.html","9825f88e8f709c7f3acbde9dd88e8ddc"],["/tags/科学上网/index.html","54de295da3665849fc5d1e55d90d7dcd"],["/tags/空间/index.html","d5627495e59fcfa08b94d8e51ee61727"],["/tags/笔记/index.html","6a79d7c90b8fc13d5d45f0d958d479fd"],["/tags/简洁/index.html","6773075cec9ecb5a2f3d21863a87f165"],["/tags/简约/index.html","3b56f0e3628174edc2e336cc995b04b5"],["/tags/维基/index.html","7b3399e83da2c03f35bc0783fee349c7"],["/tags/网易云/index.html","b7bf090dbe63556bd6eccd1c7d7e8f1f"],["/tags/网盘/index.html","177013977d872aca00001de931027022"],["/tags/网站/index.html","52ce229faf0f43e9e9847af6d765fa32"],["/tags/网络/index.html","494337717f964583f4f73e7c4b806411"],["/tags/美化/index.html","65d2cc86b14e784c0b30bf89bdbe6b6b"],["/tags/翻墙/index.html","420a54547d686e850ea4f994b1c003c3"],["/tags/翻译/index.html","8c586eba3fa7121ddaae34b1b8752803"],["/tags/翻译器/index.html","7c2ab04e39a8d10bc740bbce64d935ce"],["/tags/聊天室/index.html","30062f9f1f2a97d345fbee0ae48b7344"],["/tags/联想/index.html","b86902b4b1b5e5e42706bd6dc22ec084"],["/tags/节点/index.html","58f6643f21fde489a3f2cff578f3055f"],["/tags/虚拟手机号/index.html","412804f42fdc0534d8ed56d1abd2d02e"],["/tags/补丁/index.html","d236b4834003440133069c67d2e7fbe0"],["/tags/视频/index.html","875832df4ef7c17c7279ee2a20c31c6f"],["/tags/解析/index.html","e653f0a201a1b1d047b3909f31e623f1"],["/tags/订阅链接/index.html","64e79273af6da2f6b63623317fd01c85"],["/tags/记录/index.html","2d31e6fc0b40a4256c8e839baafb49a4"],["/tags/识图/index.html","238aa4ed06ba9bbe16d824b02df105cf"],["/tags/语言/index.html","2ec24f61f1fbfd85bd1d0d757df35bf2"],["/tags/资源管理器/index.html","3cbc7f68ba3886c0e471294264a9e344"],["/tags/转移/index.html","7f9d88f040df948506a7470c8d03c1e1"],["/tags/软件/index.html","1fca2b0719a98647175d6df74e3b29d5"],["/tags/轰炸/index.html","af99d99a099837edfe846c61e10029b1"],["/tags/迁移/index.html","56cdbd4cb9315b829ec2abcc64916994"],["/tags/远程控制/index.html","1bbcd40443ed2ff0516c4b91488fbd7a"],["/tags/连接/index.html","4474f290302da44d85c2d323afde9843"],["/tags/追踪/index.html","cf74d6e3a924a1fd13d8ae2add9561b8"],["/tags/速度/index.html","95b9c50b6698c32c93005e988564fe42"],["/tags/邮箱/index.html","e5af263c4b3081249f1e8580f9b4b957"],["/tags/酷炫/index.html","1e6c5e792ba5b8c6ce7012f15f69aa72"],["/tags/钓鱼/index.html","5144e43c487a3981a1d1c584def054be"],["/tags/镜像/index.html","83b929ca55e3755c79e81604f4131f82"],["/tags/随机/index.html","6a05e1124d95cf84e4d2b525b51f02e2"],["/tags/隐藏/index.html","87184d2ee48988a28cee151b4b2e4607"],["/tags/面板/index.html","cf0df9f733990e82ecc26bf4554dce88"],["/tags/音乐/index.html","8fa7aad2c6a8104a7a884764e095429b"],["/tags/高颜值/index.html","55dca41012280feb9d57691f0983a6c9"],["/tags/魔改/index.html","cd551f1bc55b4b7d89a2a136c7926cd5"],["/tags/黑名单/index.html","c732e83c5d988532fe1a6f4fb0a3f616"],["/urls/index.html","cb6a7a6edb296604c70342a1e241e008"],["/vps/index.html","5cca502d00a9fbe803dc0f7e7f88e421"],["/支持/index.html","4dd34f2a5da05669ff1637543c844c6c"]];
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
