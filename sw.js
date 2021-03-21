/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","577d5a2c6d7be5cac5ce92a08247f5d7"],["/2020/11/29/clash-windows/index.html","60d68674c783a5f75d5876420eb2f56c"],["/2020/11/30/websites2/index.html","0af1bdcfa49c826ef800e77713f5928e"],["/2020/12/04/iphone4s/index.html","71e27023bba3d86d2c843de9bc758b35"],["/2020/12/04/onenote/index.html","bdf9a6ece806497dc866575bea9ccdc8"],["/2020/12/04/wesites1/index.html","210798970baa3f56f84ec203e761b081"],["/2020/12/06/nokia808/index.html","2b3985b06396fbde95992c46865100e3"],["/2020/12/07/ipad1/index.html","4d4962939d3cc2817d4b53118b7a1f1a"],["/2020/12/18/freesubscribes/index.html","70863057e6c1a36006aed959540d6fb7"],["/2020/12/19/musics/index.html","920038795cb1dc044cbacdbc4e163489"],["/2020/12/19/shadowrocket/index.html","8529e39e2c2ed982d872fd79c74500aa"],["/2020/12/19/v2ray-windows/index.html","ab6699a8e895e1bb206617f6612f2ac0"],["/2020/12/19/v2rayng/index.html","a6385fe0faf5ef377221ff80e9272e16"],["/2020/12/20/beoplay/index.html","03f116a652fdcad84789eaa4d3b93cea"],["/2020/12/20/订阅链接转换/index.html","8a24ced1d690e097b239f81cff78aa9b"],["/2020/12/21/chrome浏览器下载提速/index.html","6c3a34e62b9e8d689eb19bbfc101279b"],["/2020/12/21/免费128线程并发下载xdown/index.html","b16495e7dd6502aee2bce9676d91e077"],["/2020/12/21/免费32线程下载软件ndm/index.html","14b3a0b68388cdd190c8703b46800560"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","812156eae791f0070922a414d9252ae3"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","e3003b85f10bd8b6ea21cb072d6ce3b0"],["/2020/12/21/广告怎么知道我在想什么/index.html","3330b8bd7065febf50eb790f22daedc3"],["/2020/12/21/无名·引子（小说试写）/index.html","667560a5302c9a0fefb0a0f5405852fb"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","fb304e1d376a3fa5b19cceb34e80ce6d"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","ebc245772ccf68f73667ae21fc12ad74"],["/2020/12/21/高速轻量下载器aria2/index.html","746068fa8391b3a78c98499a8db8afc4"],["/2020/12/22/2020-cee-roo/index.html","f2de081633d4c1d4e762d9a576f4e0fd"],["/2020/12/22/firefox插件、github、steam富强/index.html","2030ab624edd7b4aa1a844eb39c6fc47"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","e099e83767f8eef68c5b5972c422087a"],["/2020/12/26/python-day-1/index.html","754bdf78fff9a9f82b6dad7efd35c55c"],["/2020/12/26/python-day-2/index.html","8104f02e0d3d91c78ed4330799a12fda"],["/2020/12/26/度盘不限速下载方式一赏/index.html","4169191a4559dac5213f50d28d40ac84"],["/2020/12/26/添加开机自启软件/index.html","01ff882fc16a1ef4c095e5fc6dbe85ef"],["/2020/12/26/电脑端截图方式一赏/index.html","0abc0e7ee2cc54bbcf1075185ef97760"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","86ee04c6cf2015bf2269979f3895339e"],["/2020/12/27/最安全的浏览器tor/index.html","1b8f0fd098888fa0ab1fc3fdfef6c776"],["/2020/12/27/网易云刷等级和听歌数量/index.html","470da3f3af9479347fd7c85c7129b3a4"],["/2020/12/28/freenom申请免费域名/index.html","a7071355e8131b08b95657211ecab91d"],["/2020/12/31/机场/index.html","68aa57b151b36f18aa92ea17ff41f0b6"],["/2021/01/01/M1/index.html","56794a8f71aaba38f5c80fe9fec0e593"],["/2021/01/01/compress/index.html","b2e0686f24448bad865e5c39b11f2f76"],["/2021/01/01/infinityfree/index.html","7978cd0d88fa4a033303c6a62598c40f"],["/2021/01/01/硬核翻墙/index.html","ab982e7dc19e34bb1a953aa902c21c84"],["/2021/01/02/qq/index.html","db7ae5e2ce68608b5604285b565d644f"],["/2021/01/03/netch/index.html","505ab87721a6a4c65d7efd9a5b7c910f"],["/2021/01/03/waifu2x/index.html","f48ef599e5d6cac4817a704c13aea907"],["/2021/01/04/ads/index.html","d9559994023875cffb79c346bbf517ee"],["/2021/01/04/games/index.html","8bc9004ee22fc7fdc1e9b6e77ff214d0"],["/2021/01/04/heroku/index.html","e12fbb160d0fc0efb2fd39de3e27c8e8"],["/2021/01/06/movies/index.html","31de70b50be0df51e08c2e91b58cc6a4"],["/2021/01/07/google2020/index.html","dfe8648b5bb39276dda975dd5e0989b0"],["/2021/01/07/lucky/index.html","c956c3a12742844cd5591b82cc952d21"],["/2021/01/07/spotify/index.html","49a4183ad9bc34c19bcd1229a47c27d1"],["/2021/01/07/thunder/index.html","3c046e7a73d5a932f17c416d6a0de7e0"],["/2021/01/08/adguardhome/index.html","5d382f6460f8395d1e57dd315b851aa4"],["/2021/01/10/IBM/index.html","6fcd3ac0f8d7fde6040f1c161558e662"],["/2021/01/10/potplayer/index.html","0f0cfd22fb1652cea4b89732b9d0f36b"],["/2021/01/10/sakuraanime/index.html","0f6bd81dacb3a93c4530cdb82f8c93b4"],["/2021/01/10/美剧星球/index.html","606217a4007528dfaebfce5d24f9b5e4"],["/2021/01/12/telegraph/index.html","13c78017f38c4933ed78625f62a933d5"],["/2021/01/14/comics/index.html","fab2f977e786a609a2912869f278e5de"],["/2021/01/14/ftp/index.html","67f57c9fe6488f77e723aeb444f0c972"],["/2021/01/14/oraclecloud/index.html","d4e6f32c1484ac8bfd79829a3a061ac1"],["/2021/01/14/porkbun/index.html","557c2c59cc9c9a973113cd758b91b3e1"],["/2021/01/14/powertoys/index.html","7e912cd2fa8f014ad2a5ec1dff940b18"],["/2021/01/14/taptap/index.html","7ae7b3d49762f667d1e0520f8d5c3d3c"],["/2021/01/14/ubuntuvsftp/index.html","26f3e04fac598ca7580040ca02209a72"],["/2021/01/14/小说/index.html","5b6d8cc9158b265099cb4dc04e32de8f"],["/2021/01/15/freeproxies/index.html","8ef2f34d9b50ab4a3f74102abe65c2d3"],["/2021/01/15/incaseformat/index.html","70cbe7492ad8a74db4aa14991e3e038b"],["/2021/01/16/euserv/index.html","c7b57748476f54e958fdf434961f11ba"],["/2021/01/16/winxray/index.html","66e19e98385b3b6f5bd3e1494c8144a5"],["/2021/01/18/qqreadhistory/index.html","e4858b94f496d7da8ca63211d1120acf"],["/2021/01/18/qqrevoke/index.html","1cb948ba690ed4da75f38eec50ef66da"],["/2021/01/19/freevpn/index.html","76793a64927a2fff660eb5b13ab01818"],["/2021/01/20/browsertrack/index.html","2bdabc55b65ed5258e75bf5411397e94"],["/2021/01/20/v2ui/index.html","21ce5da12c4ac9d105d74e62f26094c4"],["/2021/01/21/failedtoconnect/index.html","49cac9314b6f63a23066220f002b706f"],["/2021/01/21/gitcalendar/index.html","d83f078a026b0d75ad910faa1f25e6c9"],["/2021/01/21/markdownformat/index.html","47b0387c2cd18b27fb9742fc45b9cf5c"],["/2021/01/21/markdowntable/index.html","57bbd59407388a94a4c561e30251dcfc"],["/2021/01/21/vercel/index.html","d72ebf6510deffd8768441132eccda85"],["/2021/01/22/hardware/index.html","25ceefe67a8441cb2ee1b50f69277569"],["/2021/01/22/muviz/index.html","c2f76c6f8b90f1d9d6b95489b22cc278"],["/2021/01/22/randomapi/index.html","9de9f8d57a43a55df32d5db565d5c6d1"],["/2021/01/22/searchimages/index.html","1662e0d728ddb3065ca2906ee4937e6a"],["/2021/01/23/RX文件管理器/index.html","a69b159d54bb04ce29d6b58b0a7e09e8"],["/2021/01/23/chromeflag/index.html","f756275ba3d7aecc159425c69eae29ab"],["/2021/01/23/qttabbar/index.html","23ed1bb4c3ca3bc6061198ce97897994"],["/2021/01/24/githubspeedup/index.html","df2ade526203ad01137efada3af49627"],["/2021/01/24/jsdelivr/index.html","bd89625e0016a06877e0930417e7906b"],["/2021/01/25/note/index.html","d1cf75839016a830b9a9c9ae32b1ef4c"],["/2021/01/25/soul/index.html","32cfe8f6f6c479c22ad7afbfeb68c5a6"],["/2021/01/26/herokuxray/index.html","603d2449e8f8d8510fa24df9f443f000"],["/2021/01/27/proxypool/index.html","73b7451cf2e486da4de0acf3bb0e6e4c"],["/2021/01/27/tracker/index.html","1ed320d1efc291970a939eeb4972c8c5"],["/2021/01/30/pandownphp/index.html","7c0a832c8786a16706b233ff90250cca"],["/2021/01/31/newgroup/index.html","8dfcbbc0db9f4812d32cbc306607eb75"],["/2021/02/01/clashlanguage/index.html","d8190cc8910fb7773649e80d92b1dc6f"],["/2021/02/01/encrypt/index.html","ecf4c66bdfe4d2df32d369360506a0cb"],["/2021/02/01/footermotion/index.html","c3c237540eead047d7b076c5a225bef2"],["/2021/02/01/gitter/index.html","622b8bc9bc04a82b02154fe6836ce168"],["/2021/02/01/pixivtop50/index.html","ec64fa96be82c94bb19b7b0b1e1e15d4"],["/2021/02/01/scrollbar/index.html","b74eb58d34ae22cf6fac4f3f212a2215"],["/2021/02/02/clover/index.html","8162aa1353e5582252fc292e872488bf"],["/2021/02/02/maya/index.html","767db27c3d7ddeb1f194528862adccdf"],["/2021/02/02/speedcontroller/index.html","f3ee0a25b15a63015b77bc183c6f71be"],["/2021/02/02/yesmusicplayer/index.html","f37d7de7ea34be4178d77d0b22724c91"],["/2021/02/03/lenovoonelite/index.html","aadd3e7f2582975c592e7c3abb817c40"],["/2021/02/03/skipads/index.html","a265f62059408a3e1d836e41479af3ac"],["/2021/02/04/picseed/index.html","f685ef02687cdf350557723b4903d86d"],["/2021/02/04/renren/index.html","41f2de25a6a1e8a409cb44d72764f0e8"],["/2021/02/04/serverstress/index.html","c94e28698717734e3cc236b447d6bf0e"],["/2021/02/04/wikipediazh/index.html","883fbdcf71bbbd84e38982f36ef1b242"],["/2021/02/05/googlevoice/index.html","2c884bed91c729853d23027432346d64"],["/2021/02/06/clashconnection/index.html","8f734ad518efe933a4d25913f6b7f90f"],["/2021/02/06/gvtransfer/index.html","28aa94e4c12a4cfaeadb096fcc821122"],["/2021/02/06/todesk/index.html","975c4385fda7c6533950687a87562e0d"],["/2021/02/06/vpnblacklist/index.html","57f4dc3a1e7b60725cd3eb80faf5ce2d"],["/2021/02/07/mklink/index.html","e5892e06ee827b1514963afa4ec84616"],["/2021/02/07/speedtest/index.html","e26b48f6c268689a446889eca59b85d3"],["/2021/02/07/translate/index.html","6b9e315990f75cdb83680beab5a61438"],["/2021/02/08/ewomail/index.html","3e14d6d798d1bb1f1486647706c15721"],["/2021/02/10/officee5/index.html","a1e5df94fdd2e23bc8f1a6b7ccea2161"],["/2021/02/10/raidrive/index.html","b60fe432ed8471db539ea0bd95704294"],["/2021/02/13/e5sub/index.html","7d11b42ad40dff426bf6cf8328739331"],["/2021/02/14/screen/index.html","07cf626a5c8609f47ce26106151bdfa4"],["/2021/02/15/clashtun/index.html","9e2174477a75ed39fe2fe5cd90bd455c"],["/2021/02/15/messageboom/index.html","00be822818586f14ae197b0c42f71290"],["/2021/02/15/oneindex/index.html","faa46cee1e8219a1d072f3d97df82a6c"],["/2021/02/16/govsites/index.html","32a1529060f5b025779aa3a862f47739"],["/2021/02/17/hexototypecho/index.html","493877e96361e73b1203e798d08647ca"],["/2021/02/19/fiddler/index.html","111fed849590dac6d4ece17e810d70f8"],["/2021/02/22/potplayerset/index.html","a6f3e885f98c9719c9439e9e1d309797"],["/2021/02/22/studyresource/index.html","c237b7ac9428adbce0c04ef5cc9ca9d2"],["/2021/02/22/telegram/index.html","657312f1c306cd1fef35594be2796545"],["/2021/02/22/videos/index.html","1782671cf83e11bee8f8ce7b5a198c7b"],["/2021/02/24/mtproxy/index.html","15d389660e460c7e6a8566f648070374"],["/2021/03/10/catchcat/index.html","7b71a0fdc6af7fcc80646d01c8abf08c"],["/2021/03/10/neteasemusic/index.html","1df88273b1d61b6475363e8374f93112"],["/2021/03/10/surfboard/index.html","e2868e5e2651acb8f997b5b0c7f4e916"],["/2021/03/11/vpnandjc/index.html","1d619cc383d1d997d47217cdd2203b9b"],["/2021/03/12/qrcodes/index.html","72e37ca07ca76bc7006a3ace75ff0a04"],["/2021/03/20/qv2ray/index.html","9dde63a4bccd24ceb2ab14542f344ee5"],["/404.html","08d712f867d8b7e4ce710bee14190e21"],["/archives/2020/11/index.html","0a687200a25fbba8e0ebb880a63205ee"],["/archives/2020/12/index.html","8a7c0de48c8e36a6a2419c6bb652d03c"],["/archives/2020/12/page/2/index.html","0a72416b23dcc1597d8b6863519fd854"],["/archives/2020/12/page/3/index.html","803d6b4f8e218f39cdf562ee99d36565"],["/archives/2020/index.html","ba724c55f0f81d94506c282c7a86df6b"],["/archives/2020/page/2/index.html","ca17a94559eaa3581b0443d761ed57db"],["/archives/2020/page/3/index.html","a5b1e4a4618eb7e5ff32482d0a68f2cd"],["/archives/2021/01/index.html","f8065f4c7150c34e85f8356545d3bac4"],["/archives/2021/01/page/2/index.html","2d4a34f4c513e5c84f5ddb275885c7b1"],["/archives/2021/01/page/3/index.html","12de27fd20785def7b6da7335107c880"],["/archives/2021/01/page/4/index.html","87ae528dd3155c4265ec8a44c711a6f6"],["/archives/2021/02/index.html","392444c62327fb7fbf651ca81ecb46fe"],["/archives/2021/02/page/2/index.html","102ff5569627e77f58050443c9b7e564"],["/archives/2021/02/page/3/index.html","4257bc94fc28e9f82c208d6b0822edce"],["/archives/2021/03/index.html","eee8e4829b89b3827e6598c08f007ae9"],["/archives/2021/index.html","4e2c30cd318399d46a69262395887c86"],["/archives/2021/page/2/index.html","bb8832c22a20c4ed44dd6b0f14fa22c1"],["/archives/2021/page/3/index.html","cc0bb8b82523d5491372f58786bb4d30"],["/archives/2021/page/4/index.html","30f3a41ce1252864348eeaf43398b917"],["/archives/2021/page/5/index.html","a4b024de3fe1d3ad134a95a927fa2363"],["/archives/2021/page/6/index.html","7fe3161427467a94bc1a7c22ddeaf279"],["/archives/2021/page/7/index.html","728374cb37aaf25353e90aa5e2e131f5"],["/archives/index.html","031616dc4fcf531622a8b5a774f64882"],["/archives/page/10/index.html","f1a23333c1f15e439fd61b7ba8579da5"],["/archives/page/2/index.html","9b5c3dd48ff0ecdc55f7e055292c4aa2"],["/archives/page/3/index.html","a8d8ed5592b2bd013061c67dc9f7ff33"],["/archives/page/4/index.html","4fd0c159bd61a5be484c74ceb14f9ddd"],["/archives/page/5/index.html","96b9b0db695b998f9b2dd7cf35f45ff6"],["/archives/page/6/index.html","14580e08fe96353d17d5b635e3f7daed"],["/archives/page/7/index.html","b106bf617476d9277ea7708b5ca42e01"],["/archives/page/8/index.html","9df9c8bc6a77e8b225093a60ff76fe30"],["/archives/page/9/index.html","dcaee32becfc50b891e4a913c8948251"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPN/index.html","5bba69fd3b06ca0c807dbc6e0fd46cda"],["/categories/VPS/index.html","d053845fa0e0db192bccd800b86bfeae"],["/categories/index.html","80b4190a29a9f1ba9a6a126fdb8ef5b3"],["/categories/下载/index.html","07b83f2bb4ed80dcf766c6ef7e7952ae"],["/categories/安全/index.html","fe6e15873fc326cd6d9f06ab164faefa"],["/categories/建站/index.html","7f253c4c458e1005b91c1e9885dc3517"],["/categories/杂/index.html","6ccad7ce434932ed8f9b25d3829bdb63"],["/categories/杂/page/2/index.html","a54666f84d18e0017c882ebbb3fe1fbd"],["/categories/测评/index.html","5ee6dca533ac2ff8ce636df036794948"],["/categories/科学上网/index.html","5441d9fa7e0103d66d1064a5c2016ffe"],["/categories/科学上网/page/2/index.html","34a68b822a4610a1c6ad1ea165971472"],["/categories/编程/index.html","1828d0f681e3d4cd362dc407c158da2b"],["/categories/网站/index.html","a2e4d6eb5454d9017f84667abb89542d"],["/categories/网站/page/2/index.html","c4949252f6372fa7d9c35d09aed1a3aa"],["/categories/软件/index.html","a4c14f7809f53311f1c7ac9ffadd3418"],["/categories/软件/page/2/index.html","60369b8338d6d5478d5f9e0f8f2e2948"],["/categories/软件/page/3/index.html","56800eeeb3d1cecb92b7161396e81bf6"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","6ac4277e47417f72fd59a37ffec81212"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","5f6175c44995e655e71acb4a8a4f8ca0"],["/ios/index.html","5110bf441951f72dfe1d3437ff341020"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","79d86c83ab105368d93984a75c368c47"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","8738fe2fc9511ea174853a08aa167a3f"],["/page/2/index.html","95518ad3bec247516cb6e1f79ec71d12"],["/page/3/index.html","79881b1fd55b5b86ab7f957195279a93"],["/page/4/index.html","daf168359321178818d6c025173e7302"],["/page/5/index.html","6338cc0b22252fd12c5b4617ae9a8c04"],["/page/6/index.html","4bb4a03e4aa79d708ede15035af4b135"],["/page/7/index.html","1a7fb6f1338173d2658f499315d8c544"],["/page/8/index.html","e549a8710a5349f245690b2b13e1bf6c"],["/page/9/index.html","8a4256e326107680efdf80d69870e098"],["/payment/index.html","4637445924bd7f62e7956df9b9c81896"],["/privacy-policy/index.html","699803b2151c9d0add83df2816563086"],["/rss2.xml","4b10620c9d69ad62c6540bef95265302"],["/search.xml","38ea911d3134a5b5f5d9f372d9f16ce9"],["/sitemap.xml","0685471f32bbf3403958068c3583831d"],["/sw-register.js","fb87c43810603dfbee3f172bf301602b"],["/tags/5t/index.html","26dbdd9888208f064de72e91dea52a45"],["/tags/Clash/index.html","02a990a66447a8fe7494fe8124fa4ac5"],["/tags/Clover/index.html","cf8fae7abff090a25cf6b9233566a2ce"],["/tags/E5/index.html","a35bb96c9f4d5e779b101427d76b8e30"],["/tags/FTP/index.html","3c06112087d12f40707d9e9e5f845710"],["/tags/GitHub/index.html","8001f755cf35ea37b690fc99ff8c050d"],["/tags/Heroku/index.html","dee82405ec82a63cc1f4431c12b504c2"],["/tags/Hexo/index.html","e2720ff1ff6b26b83f796246714eb818"],["/tags/Lenovo/index.html","71b8fb730cad3697449a54396796f547"],["/tags/Oneindex/index.html","7b01b5317007262730d11cd1e00909d3"],["/tags/QQ/index.html","bf3bd62292daa216c579c73df5063a54"],["/tags/QTTabbar/index.html","09b0b30625fb3057fdfe1fd8055762c3"],["/tags/RX文件管理器/index.html","f9d65a060c20477ebc695aa1a3a8a27a"],["/tags/Todesk/index.html","491e4df51575e063b85b4f0862f23329"],["/tags/Vercel/index.html","cffc9ec3d7059a9e45e2c1225ca8c5c5"],["/tags/ads/index.html","0a678601a203344110be283a4e356702"],["/tags/api/index.html","e13661e3e57d8b9d826c720fda90a4a9"],["/tags/app/index.html","0dd709281235bab1dd3821be561e953f"],["/tags/blacklist/index.html","9c51dbfd4bf3debddde0cc6db079b106"],["/tags/butterfly/index.html","6243ef5f3c64caa58cc6215eae6bc789"],["/tags/chrome/index.html","a77740e8a278c354b1d57be358047b7d"],["/tags/cloudflare/index.html","31e38934186b8e2a1c91a71ce107eee5"],["/tags/cmd/index.html","18d28d41a9f787a8a32f21579472ab93"],["/tags/c盘/index.html","aaee9f4a5e19580333195b022c9bf840"],["/tags/email/index.html","dbc3a4efdef0cf294f9e4d7cd7608646"],["/tags/ewomail/index.html","3ae545d23a0945c05e6942ff764fe089"],["/tags/fiddler/index.html","32a4c5e15ba5399d9cccf35c70689fb6"],["/tags/flags/index.html","51be203ef0cd9e46ffd02ea8aa0b032e"],["/tags/footer，页脚/index.html","49c2af682795b612f09575b1e5a4f2d2"],["/tags/galgame/index.html","d8c6820dd19124b9df953795e1d47e72"],["/tags/git/index.html","e4ef98505b76a2a081f30330a077dd37"],["/tags/gitcalendar/index.html","ad5e4bf8a8b941dd9b6327fdf5656569"],["/tags/google-voice/index.html","d44b70dc06bb9af396e7163d3a202eb9"],["/tags/gv/index.html","8cb6188bcfbb49975e8abcd0e6fc85f7"],["/tags/html/index.html","5b3e2bbc0d9d36889e271f25ba1e474e"],["/tags/index-1.html","2e2ea8a7e5079262bc3ae2beca3756cd"],["/tags/index.html","210045f1002169e9be2af3f965185431"],["/tags/js/index.html","a1d5dd240af4ac27fda58d01ffb1fc4e"],["/tags/jsdelivr/index.html","4403047424e2f305dde3c05ae8fe073b"],["/tags/linux/index.html","83445c1fbe5b6daaac5fbee3857eb5b8"],["/tags/madVR/index.html","f174ae2495511942aba00890dfa0ad39"],["/tags/markdown/index.html","b9be3837b2da4526df9590512793f480"],["/tags/maya/index.html","23e627a5b86eb92984d8cd522fec810a"],["/tags/mklink/index.html","ed39de0ba8e3e830de0fae85dc9732b1"],["/tags/office-e5/index.html","6a3340add7ed034d72077eeb0553d992"],["/tags/onedrive/index.html","c57e61caeaa79a47483d95247a420845"],["/tags/picGO/index.html","d5011398150b080313f02b6cd673e76b"],["/tags/pixiv/index.html","4ac15dd199207b3170f1feab3280e883"],["/tags/potplayer/index.html","8a61c1773229c4f3af0d75c2f1c3547c"],["/tags/proxypool/index.html","a56889ad557ff36d7f06aeca5a46fef8"],["/tags/qbitorrent/index.html","59c74e1dc5bee8abab0ea6c0c2bebe6b"],["/tags/raidrive/index.html","a3048f396f86d20c462920b122d840e4"],["/tags/screen/index.html","c6c21f7ec75f8fba9e089c2d71d74230"],["/tags/speedtest/index.html","016c8571d653b921544b4d6ad7bfeca6"],["/tags/ss/index.html","58ad6f8caebe7bc8645b3189bda9b874"],["/tags/ssr/index.html","04c6e74a5fc5e6e49355fca335518da3"],["/tags/surfboard/index.html","0ecc07460d52011a0d55e5d4b08ddfa5"],["/tags/tap/index.html","f34f0ced971a68c7dca7603a2824305a"],["/tags/telegram/index.html","8e5be2a5b25c853a68555cd8ef0fe02a"],["/tags/telegram代理/index.html","374541fa88ead9af2222c8756766b7b0"],["/tags/tg/index.html","20a79d22cb07e22728d223ffbf4f9bf3"],["/tags/tg代理/index.html","d06df47dde095b1964c13561aad2ac7b"],["/tags/top50/index.html","19be419baa30340e4b33fee5d5434e5e"],["/tags/tracker/index.html","9a48bf94d0dfead36ecafcfe78de9b6d"],["/tags/translate/index.html","f46939cdc3786df33a59c29132356716"],["/tags/translater/index.html","0f970c4205de08258e8f8c157a6f5bea"],["/tags/tun/index.html","0758ddaae21cd095f4313763ffb46377"],["/tags/typecho/index.html","cd6f73582c6954acc35570c328fad016"],["/tags/v2ray/index.html","143e9de02efd732c28fcbc4224e55b30"],["/tags/vpn/index.html","c191c7937f2c59deef35b599a149d451"],["/tags/vps/index.html","5501e83fc73c236ec7ac2db550b210bd"],["/tags/windows/index.html","fa5f07eda1a5535b3d1d196c946a3322"],["/tags/windows端/index.html","33675c270ccf929e4107acad433e0779"],["/tags/xray/index.html","ea7e5913761da906d3648bcf486f989e"],["/tags/下载/index.html","fd10f4d67f24855dde89c353b3bfd9d6"],["/tags/不限速/index.html","a76699d536e1f6a3ad7139e7d6889aa5"],["/tags/个人网盘/index.html","79cf08698b300b8b03784031c2928078"],["/tags/主题/index.html","16a19bd33fae1f4a1d4275c7149986be"],["/tags/二维码/index.html","20b61f7d97f6b33c42a30e24f442d3e0"],["/tags/云便签/index.html","748ecb15b8a219ac02ea41e7627094bc"],["/tags/云盘/index.html","5790736a35d196dc84f07515bd9c4fb8"],["/tags/人人/index.html","cd5e2f95de0c4876437f746bc403cf3a"],["/tags/代理/index.html","691bd80faf0bba135f53ad3888e80a4b"],["/tags/代码/index.html","295aaa5db47d733b91d815f27825c38f"],["/tags/优选IP/index.html","30f389ae716d18e0e546f2c3dae0212d"],["/tags/便签/index.html","6ad7c0fdf02d8040139b16eb1f64b49b"],["/tags/保号/index.html","2040107042fa316dbfc16546233618ca"],["/tags/免费/index.html","96a1c3691fbbb32a6a6f4e6a40fb698f"],["/tags/免费节点/index.html","cdfa9e22160b8e71ae1f5a93a09a618b"],["/tags/加密/index.html","a075435f5d569b2fd95e15fc818bb00f"],["/tags/动画/index.html","e9d67e3bc07b30369eef7b7f3fbc37e4"],["/tags/博客/index.html","8d7db898fceb36ea48ae66af55eddc6f"],["/tags/历史记录/index.html","c76cff6442fec2b57d474b8d5f71716a"],["/tags/压力/index.html","5d502dab24565e7ecfdab4ca7737845a"],["/tags/压缩包/index.html","c4a40c367966fd5ccbfa0cbf191f6d87"],["/tags/反代/index.html","3b98393e420d0e15aa67f7badfd3b4cc"],["/tags/可视化/index.html","b5491a9d12ebc866233ff2d62e36eb7a"],["/tags/命令/index.html","79f7bc519ce54ffcf92d4ae192fbd65d"],["/tags/国家/index.html","692eb18efdd3b32eb561d6f722d19f8b"],["/tags/图床/index.html","c64dff859059a172e68c49f54e7b83e0"],["/tags/图片/index.html","2d6ce858f074bc782c0ccb6e8e437619"],["/tags/域名/index.html","63930643460023b0593a1321632ea97e"],["/tags/多标签/index.html","cb8b485a7c016224b30ca4c85f9513cb"],["/tags/存储/index.html","3976e720fda2d3ce4b3b8bcc1bd23f2f"],["/tags/学习/index.html","631e7fbd8c011b5c42ed2020f13a9ad4"],["/tags/安全/index.html","bbdde74e35543876ba3cbee9fa4b9053"],["/tags/安卓/index.html","9321ef9f40c5beef5ab5e3bfcfce3dbb"],["/tags/宝塔/index.html","ed7ee2fa9b74f1ae88fb9d6a18e5ba5a"],["/tags/小游戏/index.html","e9be288e93b3c23a140437ba5723361b"],["/tags/广告/index.html","05cde2c9b83d62708437f67bdb72b682"],["/tags/建站/index.html","865021a8724ad95c07d7dfc5dc371c4c"],["/tags/影视/index.html","359ea3d7649cf1e4347f05990507dfe7"],["/tags/微信/index.html","d9e68f97a630b3f911bd617a9af18190"],["/tags/快速启动/index.html","16abecb0567e17938159e2c35afe930d"],["/tags/手机/index.html","f6ffd8979ae1dcec823787e855e61ff3"],["/tags/托管/index.html","34ce703ab38f600c71c7ba321a44ceff"],["/tags/抓包/index.html","10883285857eb529e8bc6572b08363d0"],["/tags/抓取/index.html","22dbfcb2341760a62ce1fcc29005ecd8"],["/tags/投屏/index.html","79fea2a54c1c8922242648a3e6b9b919"],["/tags/拓展功能/index.html","7de5c0e2dd2d736255b159bc4beb361d"],["/tags/挂载/index.html","8c0179f31648ac6e2e20c78dc70e68a3"],["/tags/指纹/index.html","a7a0a02aa039cca6771f9a4cdd49d867"],["/tags/接口/index.html","a43ef5161bdb1976c6a153e27f285e6c"],["/tags/提取图片/index.html","87bc1dffbad7640f2da26621d1cf1f5b"],["/tags/插件/index.html","319f52d98b06019777be5b24ee49b837"],["/tags/搜图/index.html","b9cf8ff1520b3759a4f5c6a581a085f0"],["/tags/搭建/index.html","5438d9e3dd814dd503670e0a74302796"],["/tags/撤回/index.html","6abfcc690dc3d910ddced8465dfa465b"],["/tags/播放器/index.html","cb886c678c8bf171144095377b0b039b"],["/tags/支付宝/index.html","1ab85786875acb6656ce5fceee0d34b1"],["/tags/政府网站/index.html","758e9fe2952dc6c16ad92f18ce8f6032"],["/tags/效率/index.html","07c6fb3bfe9ae1e7fa71b86e81580951"],["/tags/日历/index.html","6a3f32071a7eba37d5c98e5d0203a860"],["/tags/服务器/index.html","2f13d0645d4b90bc072c6df252926677"],["/tags/机场/index.html","3a4b19e5d6ff80662f542f991cc23903"],["/tags/桌面/index.html","884ae211c5adafd46bd342c839455e22"],["/tags/梯子/index.html","354d9ba7b02e0c527bffc235bc375970"],["/tags/检测工具/index.html","64590d73b6f38a889e183de1eaf4acd5"],["/tags/汉化/index.html","7791141c30ffcff02f0af74eb6671028"],["/tags/测压/index.html","675a5765b01b6a500b9a703e205ee317"],["/tags/测速/index.html","dcb57306bfe30be709c7040c0e12f63b"],["/tags/浏览器/index.html","04b225ce7aaf781187c26c8b142aa7d1"],["/tags/清理/index.html","6f2532d53198cfde2636bed0a9e8bd7c"],["/tags/滚动条/index.html","7f48b5918e9f3ea3ba0db74c582c01a6"],["/tags/灰色歌曲/index.html","b62e35d33616b02b303650b219724b84"],["/tags/电影/index.html","55023e98fefba45294abca1c871a5918"],["/tags/电视剧/index.html","3d03e0194fffec22d0219ae00d822b5f"],["/tags/白嫖/index.html","c7d9d37e6b26477e7b8ff2e291fce054"],["/tags/百度/index.html","d2d4a686a3edc4e5d26ca267b3745739"],["/tags/百度云盘/index.html","7a2ca97c85fb5266266e348a91161e33"],["/tags/百科/index.html","be77f87de716baaa3632af29edfd27e7"],["/tags/短信/index.html","93506ccb64d5055de43153625f0de7a8"],["/tags/硬件/index.html","2e3bee48573a23b75dbb2e6ad9c39ffe"],["/tags/科学上网/index.html","cff93ac74f3aaf343d72790119670bec"],["/tags/空间/index.html","fe7cd49df49999ddd19ce324d47c9d86"],["/tags/笔记/index.html","32f8fa4c08b082be4fe8f030a3e228b4"],["/tags/简洁/index.html","40f22b0cbd65c425b7f62f8ba0edb6f8"],["/tags/简约/index.html","e1d678ea2e9eba1e74b650131196df4a"],["/tags/维基/index.html","c4426b23d7ed3c8b199870847fb480a7"],["/tags/网易云/index.html","caeb02b95d6f54c76c0f8b91338d04fe"],["/tags/网盘/index.html","34298f2414bc36a3e8d9b0b466a93a5c"],["/tags/网站/index.html","9cad28f729922e00d79ce59aa3d139c2"],["/tags/网络/index.html","aee24f100f2fe0fe181d7d012a8abb47"],["/tags/美化/index.html","77cfd8956b051bdbc1eb9ad46ca2a572"],["/tags/翻墙/index.html","150f01def0609ac24a1a158110feb4e2"],["/tags/翻译/index.html","dc85460b4672ae4865567db4e46639ad"],["/tags/翻译器/index.html","8ad852235c851b65f59e8d5fa53d6df4"],["/tags/聊天/index.html","0c62cd3b40ff258260a2e5f778b57d5c"],["/tags/聊天室/index.html","84c7145d8f52e21d5275c6d3f03e0f02"],["/tags/联想/index.html","fb8b51d10a561780d74b8f45a505631e"],["/tags/节点/index.html","654f6b31436ecc49eafd5b4d5c60eb55"],["/tags/虚拟手机号/index.html","737775618ea7d40a45ab3206f4f3ee23"],["/tags/补丁/index.html","da3438337e95d7d20a5b2bf88157091d"],["/tags/视频/index.html","b6a6e1162073eff6d8929e795e18ea82"],["/tags/解析/index.html","a73feadbf1d5e5a336889ad9379c71a1"],["/tags/订阅链接/index.html","341a528c962a3fd62cf6a1ee91613149"],["/tags/记录/index.html","2b9d148d8a7aecc442f56334e3d78b69"],["/tags/识图/index.html","808677a59b282d7a0a48f2afbb7dda56"],["/tags/语言/index.html","81f8d205a7a6889de114300063d8f0ac"],["/tags/资源/index.html","bccd9b36d37293690d7c40a6c30e6104"],["/tags/资源管理器/index.html","acc701d6a7641a0b550a42f49e95c476"],["/tags/转移/index.html","31afe7ae2f48e5b950f78443fe7e54bc"],["/tags/软件/index.html","5961fff6f5d58362be7e5c325a224939"],["/tags/轰炸/index.html","6218d64206945276a4f83d3e447479af"],["/tags/迁移/index.html","a17f9b3da0b6e120b2314c6e87c7874b"],["/tags/远程控制/index.html","d2c858ef4baa9a1c6c99499464e4c306"],["/tags/连接/index.html","f40a9df61dda8d2cf490f0caa0bddd72"],["/tags/追踪/index.html","d2cdded2408f18a68141fce7e6b64974"],["/tags/速度/index.html","99998533e88367713d5bf7aa4180fa28"],["/tags/邮箱/index.html","574d363c5c3c63e5abe7aa6caece77e0"],["/tags/酷炫/index.html","3ca478cae1713c4af522a2394f9fa397"],["/tags/钓鱼/index.html","af13124749313c7c9574fe92ca9fc663"],["/tags/镜像/index.html","ee44cbd1d5fd6716166110238b3b3226"],["/tags/随机/index.html","925136cd7c1515a13b7431f71300baf2"],["/tags/隐藏/index.html","f2d5af3c51081bfc72e839c959fa3287"],["/tags/面板/index.html","3fc1c5538cdff9cb941310eb695261c7"],["/tags/音乐/index.html","f0f204b68e923c1c2e2601606e62f4bf"],["/tags/高颜值/index.html","69fbe199cdf7cb433cb0172335412167"],["/tags/魔改/index.html","548b3dded9012ae72e087a667fdd2a4f"],["/tags/黑名单/index.html","da87ffa8181f6728f7bee106297db7a5"],["/urls/index.html","5cefcf16afb26949319d2c0c78b4e5de"],["/vps/index.html","31659579a506cbde01da8a144bdc34dc"],["/支持/index.html","2015083bdd02dbdee6a149f4dd0f7562"]];
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
