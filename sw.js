/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","1759a7125d294cdde3c9806a438c2ccf"],["/2020/11/29/clash-windows/index.html","83699c4b179b2f7e3aaabdca5a5e1e01"],["/2020/11/30/websites2/index.html","526f207dc97dad32708e0ec00f860bac"],["/2020/12/04/iphone4s/index.html","06601282d43ca74007bc34881bdd3b2a"],["/2020/12/04/onenote/index.html","20898b27476b990e2920a70a06181067"],["/2020/12/04/wesites1/index.html","330f227fe5f4b642a1ce87653755af93"],["/2020/12/06/nokia808/index.html","497cf7470fd194367ff29adeb4932d5e"],["/2020/12/07/ipad1/index.html","890590d8fa5406e53cf4012a52193fff"],["/2020/12/18/freesubscribes/index.html","1fc25ad69cbd054e1ad3cd861d7a9b61"],["/2020/12/19/musics/index.html","01a23a45dc25348d7d31885a04062918"],["/2020/12/19/shadowrocket/index.html","d0bebd1acbfc702ebd696ec6adc1df66"],["/2020/12/19/v2ray-windows/index.html","30bf3bd92702ad616d37fb188704ad5d"],["/2020/12/19/v2rayng/index.html","b45a421770bda4e296f085fb3ae48bd0"],["/2020/12/20/beoplay/index.html","c3f42fc9c4b4557124b88f60734c6cdb"],["/2020/12/20/订阅链接转换/index.html","e17b3d2ff1640307865efaea6aa04352"],["/2020/12/21/chrome浏览器下载提速/index.html","ad549841faf549ee50e7226cc7f0b521"],["/2020/12/21/免费128线程并发下载xdown/index.html","bb217a776812fac21d9ff626818e8383"],["/2020/12/21/免费32线程下载软件ndm/index.html","3048888ba77571d64d4ffcee4f630303"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","75e8763f0bcb276370b9b9b5eed1aa36"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","8295053f7d8d539d361a163545e0ab3f"],["/2020/12/21/广告怎么知道我在想什么/index.html","229f605575ab110c8c05e5d4a3ef0005"],["/2020/12/21/无名·引子（小说试写）/index.html","d6e97ae6227a32378f4d67af6ab59900"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","41b0b358a4f060e0fb8ff4fe246b3861"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","c860fff1d5c014a5631ef73f34641585"],["/2020/12/21/高速轻量下载器aria2/index.html","efbabd3596e4693f2248838679c44eb2"],["/2020/12/22/2020-cee-roo/index.html","48a5992bfb95260b18b1e73eefd0ff17"],["/2020/12/22/firefox插件、github、steam富强/index.html","92900d73e8389f1494f5545312e629a4"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","d02029b89d91badd64356ce3e2a3f2c6"],["/2020/12/26/python-day-1/index.html","b185f39342fbfa7525aba9adae1794dc"],["/2020/12/26/python-day-2/index.html","1cd6f86cb7a821d5fff39d6a8dbe5807"],["/2020/12/26/度盘不限速下载方式一赏/index.html","6fcff99ab77f54b3d4c6395f995933df"],["/2020/12/26/添加开机自启软件/index.html","dca3bdb00de76ea94ec268402fc2a32a"],["/2020/12/26/电脑端截图方式一赏/index.html","61db03e3b39e5fab2040b2f0f01eacf5"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","be67be549b3f924fbde1692fc21fe7a5"],["/2020/12/27/最安全的浏览器tor/index.html","73175827281807ce07c511cc8d11e85a"],["/2020/12/27/网易云刷等级和听歌数量/index.html","c0b87eb2940239c4d043589dc5efa435"],["/2020/12/28/freenom申请免费域名/index.html","0fa3599acf448f1f29b247e9b043b0ed"],["/2020/12/31/机场/index.html","997d45c01aae076fce22c15c536230cf"],["/2021/01/01/M1/index.html","d7729a5508dfffe4d1716f5f5ef9bdcb"],["/2021/01/01/compress/index.html","8e9437a5f98b364981ebac1ab7802668"],["/2021/01/01/infinityfree/index.html","9637384df43dc1340e95580fa430fc98"],["/2021/01/01/硬核翻墙/index.html","bf08d7f8097c62bbd41dca61f7ab6316"],["/2021/01/02/qq/index.html","3bf13e62e588bd1539c541fc2d478064"],["/2021/01/03/netch/index.html","3f4db625bce9a1be48b8951553c39b15"],["/2021/01/03/waifu2x/index.html","651b22953729ee586f0883a649eeef6c"],["/2021/01/04/ads/index.html","aff96c80b2b8cf995774acf5f63006b7"],["/2021/01/04/games/index.html","8b617b9f06014e97393b655f5d444c2e"],["/2021/01/04/heroku/index.html","9c15c38efcc00bd0ea37097e90b04330"],["/2021/01/06/movies/index.html","326545c5a66087252d71539485556bc8"],["/2021/01/07/google2020/index.html","18c055e6b9c6f14b4580210e1877ec77"],["/2021/01/07/lucky/index.html","a0934ea028a09991a0287af4356ea9b8"],["/2021/01/07/spotify/index.html","d97e9c27bd02e6f307ac3a35eaf6841d"],["/2021/01/07/thunder/index.html","8085b86e8fc93db0467a0cd92635e024"],["/2021/01/08/adguardhome/index.html","17ca1986127bd8595eac3f1ebceef6af"],["/2021/01/10/IBM/index.html","e56b6f4d18b0baa5f6b37f9697752579"],["/2021/01/10/potplayer/index.html","5376e77fca0eb67140baf702c8e417cd"],["/2021/01/10/sakuraanime/index.html","c3765ded2db7b086e4f74bf324eb8286"],["/2021/01/10/美剧星球/index.html","a74298bd8fe46c52cfa6b50a742c2707"],["/2021/01/12/telegraph/index.html","84fc5a92c75749ed2e3e4b10bec315fc"],["/2021/01/14/comics/index.html","138367ce4acf3c63276be6da8e90d2ef"],["/2021/01/14/ftp/index.html","c784e022719bad1fc07142ca82b9a1b4"],["/2021/01/14/oraclecloud/index.html","9ed650737f5d94bb51c93ff94f9b20da"],["/2021/01/14/porkbun/index.html","df376cd05e798298535dfa211ab28ac8"],["/2021/01/14/powertoys/index.html","bd469c978b8d65870f88a0884cd47b8d"],["/2021/01/14/taptap/index.html","800542604764bbbf3c643d68c1ed8806"],["/2021/01/14/ubuntuvsftp/index.html","d6d0ad75584925c45a11e9d7bab1e78a"],["/2021/01/14/小说/index.html","0e4a4635e0cd001143ee32c4d193e95f"],["/2021/01/15/freeproxies/index.html","8a5bba1f4819085c74816ca9fd144125"],["/2021/01/15/incaseformat/index.html","d7f8b3d5f56c7f2866c6448082bfbf10"],["/2021/01/16/euserv/index.html","0bd2f927a80604563d191260a7408085"],["/2021/01/16/winxray/index.html","d65c859258337d7a6c08a65ccaaf51e3"],["/2021/01/18/qqreadhistory/index.html","350a03a7c16e8b84853a28bef7fe07fb"],["/2021/01/18/qqrevoke/index.html","71045876206d9fc67a732914338d9441"],["/2021/01/19/freevpn/index.html","6e2d7534843b661b0e6a69720e3bbf39"],["/2021/01/20/browsertrack/index.html","67583f45f37b8b3eef5cf76bb9a00505"],["/2021/01/20/v2ui/index.html","846b3a5e5a53d1191c51eff8e9e9e89e"],["/2021/01/21/failedtoconnect/index.html","5b6cc30812ab5c37467c9bf50958323e"],["/2021/01/21/gitcalendar/index.html","6fd513ee422ccd02d718bf8c4c8c4ebf"],["/2021/01/21/markdownformat/index.html","a60a47f75299a3b54fa7c37cfdb1628f"],["/2021/01/21/markdowntable/index.html","268584097eb6067332de9025191a51a1"],["/2021/01/21/vercel/index.html","90ac1bb0e43cbb1c2486c3b89d88430f"],["/2021/01/22/hardware/index.html","36c352b2ccf19e2e3d38fd1b9b32a539"],["/2021/01/22/muviz/index.html","7101aad96ba2563305bf39c33dcd810a"],["/2021/01/22/randomapi/index.html","79d5e606c4e455b629665298d743583a"],["/2021/01/22/searchimages/index.html","657f7a40b8570f3616db81a89bfa732b"],["/2021/01/23/RX文件管理器/index.html","9dab2ae977d333bdaf3eb201e055c14f"],["/2021/01/23/chromeflag/index.html","8a7d1ca0da37b73ed3e46680af130cfe"],["/2021/01/23/qttabbar/index.html","186fa727c157ad768c4178dd36fbc7d1"],["/2021/01/24/githubspeedup/index.html","da4b8b7d13a3c0db265b5295fa0ed631"],["/2021/01/24/jsdelivr/index.html","def0244b1aec7a45f583bddea1423699"],["/2021/01/25/note/index.html","a09a951274c9abbba9b16db2b87ab371"],["/2021/01/25/soul/index.html","d0e127bf5ad5edba6f41489a5feff058"],["/2021/01/26/herokuxray/index.html","a899bfc750658d53d44bdc656abc0694"],["/2021/01/27/proxypool/index.html","aa3d3809d000123c5bb304d1d3ce08df"],["/2021/01/27/tracker/index.html","32bab3f792a4f475bd03e6660748c5a0"],["/2021/01/30/pandownphp/index.html","21d10e80bd985e567fd1a9ccb76d82c6"],["/2021/01/31/newgroup/index.html","55586da69718a58312a4b40ff54ed745"],["/2021/02/01/clashlanguage/index.html","65c5e7d6b6f80614006d2de45c525b99"],["/2021/02/01/encrypt/index.html","2bd0dfc50e01bc4c0ff867bff315aed2"],["/2021/02/01/footermotion/index.html","4dc41dedf0c0bfa5a29957fbaa744b31"],["/2021/02/01/gitter/index.html","d6de5674c76cf4c671af0f4728783803"],["/2021/02/01/pixivtop50/index.html","464a0f1e5c29281608c45f15357a0f13"],["/2021/02/01/scrollbar/index.html","2943c40a4d9929a4482ca1b5fc7fdab2"],["/2021/02/02/clover/index.html","f016beb8d1ef5d34fb80ac56aaf62c1d"],["/2021/02/02/maya/index.html","0f988a4b9de19b438c8782d1b3aaac6f"],["/2021/02/02/speedcontroller/index.html","db1fc8bb4d446ab6758c1c2ad34ca0dd"],["/2021/02/02/yesmusicplayer/index.html","9cd83de7e4ea4e62669a652bf1a7e36a"],["/2021/02/03/lenovoonelite/index.html","14956ddc48654dc1bd5e0139e405d01f"],["/2021/02/03/skipads/index.html","1ff5ae7981776c863340c7b56a7fabdb"],["/2021/02/04/picseed/index.html","0c46ee5bc1fa67022e6ead133661c399"],["/2021/02/04/renren/index.html","c3b0dec5d39c83d3a4fecc65dd1f2385"],["/2021/02/04/serverstress/index.html","611ec68a663c1f6c44e777d782e1db8d"],["/2021/02/04/wikipediazh/index.html","f44309fab81333a5ce62b16cadb39fc0"],["/2021/02/05/googlevoice/index.html","30a1513bdc455a3ee1149467d35ad17d"],["/2021/02/06/clashconnection/index.html","e63e819abf0eb92fe3c8def0f30f6f3f"],["/2021/02/06/gvtransfer/index.html","00e3073f3ac772b70801e287fbc0ed3b"],["/2021/02/06/todesk/index.html","93da1e25bb3b0528424050dcea034691"],["/2021/02/06/vpnblacklist/index.html","47afa61a07f2d2f5f5b04e7876d912fa"],["/2021/02/07/mklink/index.html","8cfe81cd813095a44882c1df30bebed0"],["/2021/02/07/speedtest/index.html","47dc50975dc54b8cf4a1092114d349ab"],["/2021/02/07/translate/index.html","e904fe2d7919985d7700338accb853d0"],["/2021/02/08/ewomail/index.html","2535a4c60ecaa3638a8ea1f616c56145"],["/2021/02/10/officee5/index.html","92acaf522e17a625972da734f8863b5d"],["/2021/02/10/raidrive/index.html","6462d943c0caacbd64a5edf0ea337611"],["/2021/02/13/e5sub/index.html","38e99b7f2982b53b938a29f9933af2dd"],["/2021/02/14/screen/index.html","d98f8ec178116d7d6a5bf98cd4aacf55"],["/2021/02/15/clashtun/index.html","9962574c69513fbc843ce222644eb9ac"],["/2021/02/15/messageboom/index.html","0484e536a7f5c641cee9bcf4855ac45b"],["/2021/02/15/oneindex/index.html","b25eb48b929e603423be3029d012f027"],["/2021/02/16/govsites/index.html","9b1ea748b5d8a11da5ed668a987e5b11"],["/2021/02/17/hexototypecho/index.html","9a3e52596189e483c853521e52f985ec"],["/2021/02/19/fiddler/index.html","9509187b817188cd1582575859fecf6d"],["/2021/02/22/potplayerset/index.html","94369514d89d1decab7cd9af15fe41ad"],["/2021/02/22/studyresource/index.html","d1c5a737bdd1f42372c74c9801e3babb"],["/2021/02/22/telegram/index.html","e829a03a8dc893957bd470579c95a3d3"],["/2021/02/22/videos/index.html","a8dde6e3d3a83a90e3dfe9690feaa53b"],["/404.html","83705960aa44521d05765c0564ff593c"],["/archives/2020/11/index.html","5f387c60ec8fe327ae03390e3db93ce6"],["/archives/2020/12/index.html","15766b08722186cd8ca8ecff03549baf"],["/archives/2020/12/page/2/index.html","abbede9f4d57796255df6394369a0555"],["/archives/2020/12/page/3/index.html","0cc7876af7a2570d614a3ab04dc2f9ab"],["/archives/2020/index.html","84f76238a894a464140acf14b5ff35dd"],["/archives/2020/page/2/index.html","2a1f976f8cb860ee138cbf91803959d5"],["/archives/2020/page/3/index.html","93fccac00a3b2a1c533f8da024d2151f"],["/archives/2021/01/index.html","0b8c22282caf1cd37f17503d03e206a8"],["/archives/2021/01/page/2/index.html","7dc812376f1c6aa696db72836806eb9c"],["/archives/2021/01/page/3/index.html","b4a9a97c440a44302cbfd47f8ed015ca"],["/archives/2021/01/page/4/index.html","5a2058b9f9fe06ba2de6cfffb9a04add"],["/archives/2021/02/index.html","a1dd85d44c575358b7c6219d2765fd98"],["/archives/2021/02/page/2/index.html","4b6a474b5cc70248e63404c2201ba5c7"],["/archives/2021/02/page/3/index.html","a8532dfa48fe4e771957ba84e3f115aa"],["/archives/2021/index.html","4253fdedd78d0015e0b7d90cc6544bf0"],["/archives/2021/page/2/index.html","ea2e9cfbcdba3a53a2fc578b57c7f26a"],["/archives/2021/page/3/index.html","57f65dda977d55c279d5d0f77ff06045"],["/archives/2021/page/4/index.html","fd4b8acd293a1095d0f0aee57b6232a5"],["/archives/2021/page/5/index.html","0c22496d30d142807654733504725283"],["/archives/2021/page/6/index.html","dd477d2ceebd95faf0455136679f5d8d"],["/archives/2021/page/7/index.html","b6a12926dcef7431171360fd965e8f35"],["/archives/index.html","f7e2128537f6aec4f46f0e1440314c78"],["/archives/page/10/index.html","576374b6778cca5afe81b4ee9f1fa2c1"],["/archives/page/2/index.html","98040dd267c11c9e9dc872d33220e53a"],["/archives/page/3/index.html","e684ab2f0b726467621d85ccec00c4c4"],["/archives/page/4/index.html","841e14a6141044b5a83a1dcfa718b030"],["/archives/page/5/index.html","c274bd3312c30eb8a2a224a2714f6563"],["/archives/page/6/index.html","10523b468b4b8752aac4bccc6b4c1ce6"],["/archives/page/7/index.html","f7d34b6b0c417cb3319949972bb9228b"],["/archives/page/8/index.html","e17e94de478ec3662288b6a9a9e377d0"],["/archives/page/9/index.html","841b4f993cd84afe64930a566caa08e3"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","0e3e961eb7d6194166a785003d4fc362"],["/categories/index.html","b283058fd2a8a2fc8e5c2def2e4b21f6"],["/categories/下载/index.html","f6b3ac10b53c7a287c1570aa9f3ea747"],["/categories/安全/index.html","d6f269f1f8b5bdc68a0fd068e183333f"],["/categories/建站/index.html","2928c5f9a0cb67b823fe1acc236727d0"],["/categories/杂/index.html","b5db57e184aff108f360863314164530"],["/categories/杂/page/2/index.html","0d6112c0df3f26b52f845318f12430c9"],["/categories/测评/index.html","1dd9db6c0f9daf17fd747c0d6cf7eeed"],["/categories/科学上网/index.html","0839fe07bd7996740a009311e0cc578a"],["/categories/科学上网/page/2/index.html","e6db49d1d8f78d4ab16385711c020932"],["/categories/编程/index.html","d49efc44b441227bb09f54d528399256"],["/categories/网站/index.html","f41835450cdc58214cd296a1770195ce"],["/categories/网站/page/2/index.html","d62f1a9f33716fc4f6ff74e38ba9d280"],["/categories/软件/index.html","21e662736a7fb54e67f08d0b378f05b7"],["/categories/软件/page/2/index.html","d93f1dfd530dc6eb845bce4a0d92e1b5"],["/categories/软件/page/3/index.html","bfce4ff72f5845aad300821f9b7fab1c"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","f087f90e8c55ae8934a58fc0e9c9900d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","877cfa8497b59a75cdd70615890bf242"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","b9e7cb05c2f8bf31d41a94a4f8dffc38"],["/ios/index.html","be69b84b98240ea2b4145b1d92d24c7b"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","20a82c18987c130cf3125fd86889e22c"],["/page/2/index.html","1b7160d3af448283f87800bb9058377a"],["/page/3/index.html","690956d2abe1e242f6921715853872f2"],["/page/4/index.html","3b92f2168f6e8d57d5242ce8a36f3fb5"],["/page/5/index.html","b9cfe2ab7afab506e81a891b6172749a"],["/page/6/index.html","e7e08d8a48ef0bcec4f85b890c7024a0"],["/page/7/index.html","bb2e1e07afec2b43052c7c0b35311730"],["/page/8/index.html","4c6b263603d43b2d1ea4f725c39d5290"],["/page/9/index.html","54d7acec0485d387f411b83cdeb7f767"],["/payment/index.html","4dc81b8d870c8e7bd2baaa531c3fed44"],["/privacy-policy/index.html","8afef2e26fc30ec595b4bc4bfc01a367"],["/rss2.xml","553d2bbebacd4be74e586aeb6ebc274b"],["/search.xml","ca68db1dc32fbac5fc5597f576395205"],["/sitemap.xml","094fd108ac1bbeea21954cd8ce65d80c"],["/sw-register.js","6f5ad434e0ba9efb5c705f5cb5c634f2"],["/tags/5t/index.html","e39da00fb6a1cbc3e54db89115ef63a7"],["/tags/Clover/index.html","2a36260857a2da77a68540d74758c90f"],["/tags/E5/index.html","9906278668e7a701136f57a11a7c27e0"],["/tags/FTP/index.html","0bfe0395a9f284968d0cd1ff31c58dcc"],["/tags/GitHub/index.html","1b92400df28d6d9c824199f20cb98746"],["/tags/Heroku/index.html","8a5da07d6810207cba6aa62a2c328bcb"],["/tags/Hexo/index.html","7855634c618fb76501fcb01741d24aea"],["/tags/Lenovo/index.html","f99e6ddc3ccabf4e30b146c6f8ee1004"],["/tags/Oneindex/index.html","193a879e27859c909c5798b19955b911"],["/tags/QQ/index.html","46bcbd7eba534a835e544cc5db883fda"],["/tags/QTTabbar/index.html","a0b7cb943ce7c7b766fa9efd411a36d2"],["/tags/RX文件管理器/index.html","af5ded6f2d5c01f0492cb3fdb60145ad"],["/tags/Todesk/index.html","5842fc867e0c379d390b4bbe920ff365"],["/tags/Vercel/index.html","1c2544b24be6056c22f229f03d2def52"],["/tags/ads/index.html","3ca8de41ec31a6ab7efc5025d6daffc7"],["/tags/api/index.html","d555aa7140f4a31a0e9d64eefd7de8a8"],["/tags/app/index.html","1172ccc7dbeef094209c2dc2ef78e572"],["/tags/blacklist/index.html","dea8e63ed69fc940bffaae05d623a717"],["/tags/butterfly/index.html","132730e2c9fc9c9321671ee2e073e7b5"],["/tags/chrome/index.html","c46f8975fab897c0b038917d735a17f5"],["/tags/clash/index.html","b8eb1f8484b32b221d09d276f6372393"],["/tags/cloudflare/index.html","87b11414b799f9f4698e60f5435cdc9b"],["/tags/cmd/index.html","9ec0dd915151e516fe433ee7d2223aee"],["/tags/c盘/index.html","ee01d214353851ea81132c838ba3a3cf"],["/tags/email/index.html","8f5f937d5ffed53ce44d6ebfce131f38"],["/tags/ewomail/index.html","1d7a9290e9d5e34ff44c1d4b7162e074"],["/tags/fiddler/index.html","8359238c14beedf5a47dc7d4dbe3d99a"],["/tags/flags/index.html","bf15f9478039fa86286bf7f104a8fc34"],["/tags/footer，页脚/index.html","062363aa16ecc4589d840fb6b02dc4b5"],["/tags/galgame/index.html","1103b002411837b5934812faf9b07c48"],["/tags/git/index.html","31d053c742d20d3ba2d64eae62403a19"],["/tags/gitcalendar/index.html","743090609d3ba1052f518b81b2eaa494"],["/tags/google-voice/index.html","0c825aa6c45d2e12730ef55fd97123c6"],["/tags/gv/index.html","144d759f9f42d8f663c78a76571eb9d0"],["/tags/index-1.html","e94a80cce5c3b9eb6a7d25544b50f06f"],["/tags/index.html","3e75debb4368f884168f79530e98d116"],["/tags/jsdelivr/index.html","b3e97c2b9d2810c4ae00dc0aaa8a87a0"],["/tags/linux/index.html","6ccc192b7b701f321d199d6f27fcb98b"],["/tags/madVR/index.html","3988fc452ff028706a202b50280ebce7"],["/tags/markdown/index.html","efcbc3d89af37717ff41eff338054a40"],["/tags/maya/index.html","adfd4f229c546f810000ca87468c2789"],["/tags/mklink/index.html","871fbb6345bea3894f40c69e5b4a8c07"],["/tags/office-e5/index.html","df4658a9ed8ed029fe3750d9393ab167"],["/tags/onedrive/index.html","97200d18efb02fd26dc5b774deee9ed2"],["/tags/picGO/index.html","52d267be094aa63c53cd9fe4e18eb548"],["/tags/pixiv/index.html","ba258d9f3cefde91b43a800c22510cbe"],["/tags/potplayer/index.html","ff9cd53f9472a6559d3724fef9577d20"],["/tags/proxypool/index.html","2020e0c89154d86a66c20236ee0fd51e"],["/tags/qbitorrent/index.html","c424de4c901514011605d0d46fbbb592"],["/tags/raidrive/index.html","e7243722cb638c32fbcf8374a7c3ea23"],["/tags/screen/index.html","e04fe6e8a482f947b8eb77a161e7e33d"],["/tags/speedtest/index.html","ac66683d9a0deb9164621efc59918eef"],["/tags/tap/index.html","345f6a6bd3250b0c316abe4e68e55404"],["/tags/telegram/index.html","47fc5217e01383c2a7e96ae119a59e3c"],["/tags/tg/index.html","d4af9285e343e5d7a800041d2a0cdfa8"],["/tags/top50/index.html","7558c084f11cede7d46088fdaabc0750"],["/tags/tracker/index.html","6a76744043d59fdaafb4a0849cf5f7e0"],["/tags/translate/index.html","e43b959a60d526e5559967baa4a86c58"],["/tags/translater/index.html","f9d3d0b0fd0f0f70f3b6ba2a0c34de6d"],["/tags/tun/index.html","1a97483748c70b255c3106934de36b95"],["/tags/typecho/index.html","a12ceb23964630c0c17aba7881cd2e45"],["/tags/v2ray/index.html","f4e216c57effac70f3bab665b8f965a7"],["/tags/vpn/index.html","212a2e94fdc0dd0c94794645ea4f3778"],["/tags/vps/index.html","8a8af2786ad94e7f8354dedb9df72a2d"],["/tags/windows/index.html","4f54727b4e05d1725e3d9e9ed600675b"],["/tags/windows端/index.html","e94ec2796bcc50bd685a500c13c1c90b"],["/tags/xray/index.html","5388f395622f59bbad81aa4ceafbd470"],["/tags/下载/index.html","7d2a82a828dc7f63cd6028053d124b76"],["/tags/不限速/index.html","f83a8661b6313d04dc8bc5ed42e09077"],["/tags/个人网盘/index.html","00ccb996b864e4d74c05665f34f453bb"],["/tags/主题/index.html","7a5574f7513d76c2e576032a2d97a4ef"],["/tags/云便签/index.html","8e5a169ee667caf65d68c6dbeabd583a"],["/tags/云盘/index.html","9255fbd3b9f70a04f17c6b7b82cd83ba"],["/tags/人人/index.html","919876f2146c4e21079bdd0cd04c2f73"],["/tags/代理/index.html","6ddd96f43e99b970ecaaed853c741833"],["/tags/代码/index.html","4a13eeb954d6aa44be742673d10afee0"],["/tags/优选IP/index.html","5dd6130f6ef0cd349abd0a3928f97ef9"],["/tags/便签/index.html","1a0368132125835f662d17dccaedd52e"],["/tags/保号/index.html","342b883893d18548d0f9573db5683cbe"],["/tags/免费/index.html","fa3f82e0ea1bce2356a61344f99de16b"],["/tags/免费节点/index.html","8b3142a46b408c3491e3b8d392ca93df"],["/tags/加密/index.html","8470814711cb7db29076638bdee363f0"],["/tags/动画/index.html","c52ca8f2e76caa82e59623083f34a80d"],["/tags/博客/index.html","a8cd0b893a59d67c2c009bb3ff875e65"],["/tags/历史记录/index.html","df6f6884c167cec5e7c8e34cf1344e7d"],["/tags/压力/index.html","629b0d18c8e2bd94b65e4c8fa42ca7fa"],["/tags/压缩包/index.html","718264097f94b9fad4f60d59acd00651"],["/tags/反代/index.html","7d62b1f1e89beb9e16acaef29f4bfc57"],["/tags/可视化/index.html","49629fd75a3a556216dc695840f14071"],["/tags/命令/index.html","ad343f0ed9cd68ec14a4d942b9c0fa5b"],["/tags/国家/index.html","150156277f75b980c3f75491d03f0089"],["/tags/图床/index.html","815be47d6aa0a298fe95de0e6e9fb62f"],["/tags/图片/index.html","c03c4486a72a5f38e66232e6af010b53"],["/tags/域名/index.html","2edb3825bc6fcdfe195c9fb519d129a6"],["/tags/多标签/index.html","e593154cbe9c7cebc9d27e82e28600c0"],["/tags/存储/index.html","3342de72a66ce85f33485051058c91f8"],["/tags/学习/index.html","616362565dd32ae8294467b68ee3bb81"],["/tags/安全/index.html","dde8cd30077dd796244bfc221900a7c2"],["/tags/安卓/index.html","9ee3de1f0bfe1bd15c9a4c9fed6b9b53"],["/tags/宝塔/index.html","90a1ead2328cd7f8933f090360c4e174"],["/tags/广告/index.html","c181f1e66db77da9d4bc38e46a52d4d2"],["/tags/建站/index.html","33711e28c714660038b5c213facc6690"],["/tags/影视/index.html","adee99553c6d553035e22e19b1097dd9"],["/tags/快速启动/index.html","c05b1396d474e855512f3710bde4f2a4"],["/tags/手机/index.html","c520d8f19e23e31d0a46604d3292c393"],["/tags/托管/index.html","2f75ef4abe03b8a5255e9fd2fb1c3a94"],["/tags/抓包/index.html","f06a8a8e0e74db63a91d6325ff731cf8"],["/tags/抓取/index.html","86d34edd2cbcdd401054ac2b6261086f"],["/tags/投屏/index.html","827c57f229c89459d943d68aeac0d7e6"],["/tags/拓展功能/index.html","53daf9087a3c2ce6ca047a00ee9aae6f"],["/tags/挂载/index.html","f6b22a503c7483c91a1b11450c192049"],["/tags/指纹/index.html","3db6522f766bedada9d9e4d8ee9cb4fe"],["/tags/接口/index.html","2dc7b30338291b5db0c66c4fec543295"],["/tags/提取图片/index.html","68d018ba61a0a187e2c564827d869d74"],["/tags/插件/index.html","66fe5f71f7fc20e5afff6924c549a00e"],["/tags/搜图/index.html","f004d6170e99970d69f204cc9295dffc"],["/tags/搭建/index.html","2dd2033fbad426acfa4e692383617d8b"],["/tags/撤回/index.html","24fd2c0f13c20aab6b292871c7ccfebe"],["/tags/播放器/index.html","3599fc75135d04169928770ee0250438"],["/tags/政府网站/index.html","945647c9db7dde88902aef6703b5d5d1"],["/tags/效率/index.html","6eeb6e53cff23fed5ea0b7fe0106cbd7"],["/tags/日历/index.html","4611597733092e45d5ad01a47a65e844"],["/tags/服务器/index.html","fec6c33c4657cc283978ded5074a4a2a"],["/tags/桌面/index.html","531de9c6bcf4de79154d06c5aede27c6"],["/tags/梯子/index.html","8684bb3803bc1d9f8cb30212e96fde9b"],["/tags/检测工具/index.html","b4cd93a699e8d488a23540629c8f9a83"],["/tags/汉化/index.html","4272f227718196dd51ff9d75ad999d99"],["/tags/测压/index.html","82e220ff464367ea78894a6a00305f16"],["/tags/测速/index.html","e37ada80911ab68cf454d7875ec9912c"],["/tags/浏览器/index.html","38251d9c5adc6848dff8dd653f0bf78d"],["/tags/清理/index.html","cf6a1daa4d24595a83e64e1d01ae8e0a"],["/tags/滚动条/index.html","9a5e28cf27c5a9665dad7348ae25d1cd"],["/tags/电影/index.html","4f758206305b83ac1a6cd2ac1c23b184"],["/tags/电视剧/index.html","18e6c725e6b6fdb606f7e382e0db6846"],["/tags/白嫖/index.html","6d5c5db3209936e93d3b8c4d04d1eaa1"],["/tags/百度/index.html","9457ac61839bdbec0cf8ec38a6dd80a1"],["/tags/百度云盘/index.html","8fc5e1e9e583b3cc587eb6de8879ed6d"],["/tags/百科/index.html","5b104ab4b6fe509c4a1c26dbd1593fc4"],["/tags/短信/index.html","e446340c7e214d9a4562f5e9a1275c42"],["/tags/硬件/index.html","cfe4d34b9b7be2acc9a34b5e3ba72271"],["/tags/科学上网/index.html","322ec222961dea79afc1a76875a224a7"],["/tags/空间/index.html","e750304f352810a94397cbf61882796e"],["/tags/笔记/index.html","8bdafd1c672ef01230e3adba1dd920fb"],["/tags/简洁/index.html","1bec053ab8050fcf930280105b896730"],["/tags/简约/index.html","4d3ec50f52d869f40438e26ddcd57c54"],["/tags/维基/index.html","3f2d8836dfb3f901a775f2ab38b91f08"],["/tags/网易云/index.html","1689f7be3f1085d069dbdd03d08e365e"],["/tags/网盘/index.html","b29ed674c67cf3423a3ab3e5e02c4fa2"],["/tags/网站/index.html","7398a600fbe71ba4e2304334142c63f3"],["/tags/网络/index.html","3ef23da814be1bcd24ba41cc660ab6ef"],["/tags/美化/index.html","4af1080dcf19c8ddb9986a3c7236fe6e"],["/tags/翻墙/index.html","85187eeff0c3570ead8bc0f4850d9d1c"],["/tags/翻译/index.html","98b5035057bd436a9b05e210b5e10dc9"],["/tags/翻译器/index.html","66038229d0cdd94b05abdbcc0e6e6bc6"],["/tags/聊天/index.html","4b5230b2d5b6fc0e6ac13ab7977b4b3b"],["/tags/聊天室/index.html","7bca643130ea7fa485142d1e16c7ef6a"],["/tags/联想/index.html","6ae4b46ad4c45068b3c370fcc9c319b3"],["/tags/节点/index.html","88bb06fe22f01b964ac6097b2e4bb9b8"],["/tags/虚拟手机号/index.html","0c3357d4dae2970639efd10c260a9e56"],["/tags/补丁/index.html","e3ed9b01918f7d8eef8e3b17109a4928"],["/tags/视频/index.html","a99c759cd57ba3c45316c2296e36ffd6"],["/tags/解析/index.html","24e62d589a759dab1d3d89262b41efe9"],["/tags/订阅链接/index.html","5f18e64294a82573a8f019ee179a29a2"],["/tags/记录/index.html","0f6e1b925e7bb70d105eb41e3d9f8de9"],["/tags/识图/index.html","4df7b2b50ee539d977611faff6277341"],["/tags/语言/index.html","508fd7b509ca025954cc4d3c1306683a"],["/tags/资源/index.html","a48f7620cf229762d82e5bf12db941cf"],["/tags/资源管理器/index.html","febcd7acc37209a192c021c1e4a4b7fe"],["/tags/转移/index.html","327cc0203e035a6d086fd7bc1e251640"],["/tags/软件/index.html","c573d7af7bdb016ba5cfa20b7df43c86"],["/tags/轰炸/index.html","8b230b0e5c6031437b73fef446ade998"],["/tags/迁移/index.html","aec199fd7a9b6154eff2c89196a71b6d"],["/tags/远程控制/index.html","9a074c71d787bbab0c31aa575358f8d4"],["/tags/连接/index.html","491510c51d5f5f4ab16654bfae54c851"],["/tags/追踪/index.html","ce33f6e20f8858da75a63a27e0112d61"],["/tags/速度/index.html","781b9566e3686f89a0b051033bc14e56"],["/tags/邮箱/index.html","fb7ccac62aa93aa62a9bfac5afb36793"],["/tags/酷炫/index.html","e341faa902c26a0bfff33a66a7a4cd7a"],["/tags/钓鱼/index.html","c303b43183495dc4f7be06fe29a73f73"],["/tags/镜像/index.html","21323a339b2184f4f6d2ee0810d720b7"],["/tags/随机/index.html","0a177dc2a6c1259c029066dca8b518ef"],["/tags/隐藏/index.html","6d9172d6aeb8f927df5f4e1f458302ef"],["/tags/面板/index.html","110864bc896c00a789acfe5bc648207f"],["/tags/音乐/index.html","3ae2bae58dc1ba12b370b0d12bf76ecd"],["/tags/高颜值/index.html","1daaebb6fdabbcee32fc93ce10fbf5d0"],["/tags/魔改/index.html","27cfa2eb67dad2b1c971981302a8b8b1"],["/tags/黑名单/index.html","ead1f28cbcec1e67a7d43d913fe10578"],["/urls/index.html","68290465a618a587bc270ef0ce752786"],["/vps/index.html","1bcdd2d39fd0739f63bc2bc63c074829"],["/支持/index.html","6f9341efa2212df610b9ad4c8bcdd0ed"]];
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
