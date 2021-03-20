/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","577d5a2c6d7be5cac5ce92a08247f5d7"],["/2020/11/29/clash-windows/index.html","60d68674c783a5f75d5876420eb2f56c"],["/2020/11/30/websites2/index.html","0af1bdcfa49c826ef800e77713f5928e"],["/2020/12/04/iphone4s/index.html","71e27023bba3d86d2c843de9bc758b35"],["/2020/12/04/onenote/index.html","bdf9a6ece806497dc866575bea9ccdc8"],["/2020/12/04/wesites1/index.html","210798970baa3f56f84ec203e761b081"],["/2020/12/06/nokia808/index.html","2b3985b06396fbde95992c46865100e3"],["/2020/12/07/ipad1/index.html","4d4962939d3cc2817d4b53118b7a1f1a"],["/2020/12/18/freesubscribes/index.html","70863057e6c1a36006aed959540d6fb7"],["/2020/12/19/musics/index.html","920038795cb1dc044cbacdbc4e163489"],["/2020/12/19/shadowrocket/index.html","8529e39e2c2ed982d872fd79c74500aa"],["/2020/12/19/v2ray-windows/index.html","ab6699a8e895e1bb206617f6612f2ac0"],["/2020/12/19/v2rayng/index.html","a6385fe0faf5ef377221ff80e9272e16"],["/2020/12/20/beoplay/index.html","03f116a652fdcad84789eaa4d3b93cea"],["/2020/12/20/订阅链接转换/index.html","8a24ced1d690e097b239f81cff78aa9b"],["/2020/12/21/chrome浏览器下载提速/index.html","6c3a34e62b9e8d689eb19bbfc101279b"],["/2020/12/21/免费128线程并发下载xdown/index.html","b16495e7dd6502aee2bce9676d91e077"],["/2020/12/21/免费32线程下载软件ndm/index.html","14b3a0b68388cdd190c8703b46800560"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","812156eae791f0070922a414d9252ae3"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","e3003b85f10bd8b6ea21cb072d6ce3b0"],["/2020/12/21/广告怎么知道我在想什么/index.html","3330b8bd7065febf50eb790f22daedc3"],["/2020/12/21/无名·引子（小说试写）/index.html","667560a5302c9a0fefb0a0f5405852fb"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","fb304e1d376a3fa5b19cceb34e80ce6d"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","ebc245772ccf68f73667ae21fc12ad74"],["/2020/12/21/高速轻量下载器aria2/index.html","746068fa8391b3a78c98499a8db8afc4"],["/2020/12/22/2020-cee-roo/index.html","f2de081633d4c1d4e762d9a576f4e0fd"],["/2020/12/22/firefox插件、github、steam富强/index.html","2030ab624edd7b4aa1a844eb39c6fc47"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","e099e83767f8eef68c5b5972c422087a"],["/2020/12/26/python-day-1/index.html","754bdf78fff9a9f82b6dad7efd35c55c"],["/2020/12/26/python-day-2/index.html","8104f02e0d3d91c78ed4330799a12fda"],["/2020/12/26/度盘不限速下载方式一赏/index.html","4169191a4559dac5213f50d28d40ac84"],["/2020/12/26/添加开机自启软件/index.html","01ff882fc16a1ef4c095e5fc6dbe85ef"],["/2020/12/26/电脑端截图方式一赏/index.html","0abc0e7ee2cc54bbcf1075185ef97760"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","86ee04c6cf2015bf2269979f3895339e"],["/2020/12/27/最安全的浏览器tor/index.html","1b8f0fd098888fa0ab1fc3fdfef6c776"],["/2020/12/27/网易云刷等级和听歌数量/index.html","470da3f3af9479347fd7c85c7129b3a4"],["/2020/12/28/freenom申请免费域名/index.html","a7071355e8131b08b95657211ecab91d"],["/2020/12/31/机场/index.html","68aa57b151b36f18aa92ea17ff41f0b6"],["/2021/01/01/M1/index.html","56794a8f71aaba38f5c80fe9fec0e593"],["/2021/01/01/compress/index.html","b2e0686f24448bad865e5c39b11f2f76"],["/2021/01/01/infinityfree/index.html","7978cd0d88fa4a033303c6a62598c40f"],["/2021/01/01/硬核翻墙/index.html","ab982e7dc19e34bb1a953aa902c21c84"],["/2021/01/02/qq/index.html","db7ae5e2ce68608b5604285b565d644f"],["/2021/01/03/netch/index.html","505ab87721a6a4c65d7efd9a5b7c910f"],["/2021/01/03/waifu2x/index.html","f48ef599e5d6cac4817a704c13aea907"],["/2021/01/04/ads/index.html","d9559994023875cffb79c346bbf517ee"],["/2021/01/04/games/index.html","8bc9004ee22fc7fdc1e9b6e77ff214d0"],["/2021/01/04/heroku/index.html","e12fbb160d0fc0efb2fd39de3e27c8e8"],["/2021/01/06/movies/index.html","31de70b50be0df51e08c2e91b58cc6a4"],["/2021/01/07/google2020/index.html","dfe8648b5bb39276dda975dd5e0989b0"],["/2021/01/07/lucky/index.html","c956c3a12742844cd5591b82cc952d21"],["/2021/01/07/spotify/index.html","49a4183ad9bc34c19bcd1229a47c27d1"],["/2021/01/07/thunder/index.html","3c046e7a73d5a932f17c416d6a0de7e0"],["/2021/01/08/adguardhome/index.html","5d382f6460f8395d1e57dd315b851aa4"],["/2021/01/10/IBM/index.html","6fcd3ac0f8d7fde6040f1c161558e662"],["/2021/01/10/potplayer/index.html","0f0cfd22fb1652cea4b89732b9d0f36b"],["/2021/01/10/sakuraanime/index.html","0f6bd81dacb3a93c4530cdb82f8c93b4"],["/2021/01/10/美剧星球/index.html","606217a4007528dfaebfce5d24f9b5e4"],["/2021/01/12/telegraph/index.html","13c78017f38c4933ed78625f62a933d5"],["/2021/01/14/comics/index.html","fab2f977e786a609a2912869f278e5de"],["/2021/01/14/ftp/index.html","67f57c9fe6488f77e723aeb444f0c972"],["/2021/01/14/oraclecloud/index.html","d4e6f32c1484ac8bfd79829a3a061ac1"],["/2021/01/14/porkbun/index.html","557c2c59cc9c9a973113cd758b91b3e1"],["/2021/01/14/powertoys/index.html","7e912cd2fa8f014ad2a5ec1dff940b18"],["/2021/01/14/taptap/index.html","7ae7b3d49762f667d1e0520f8d5c3d3c"],["/2021/01/14/ubuntuvsftp/index.html","26f3e04fac598ca7580040ca02209a72"],["/2021/01/14/小说/index.html","5b6d8cc9158b265099cb4dc04e32de8f"],["/2021/01/15/freeproxies/index.html","8ef2f34d9b50ab4a3f74102abe65c2d3"],["/2021/01/15/incaseformat/index.html","70cbe7492ad8a74db4aa14991e3e038b"],["/2021/01/16/euserv/index.html","c7b57748476f54e958fdf434961f11ba"],["/2021/01/16/winxray/index.html","66e19e98385b3b6f5bd3e1494c8144a5"],["/2021/01/18/qqreadhistory/index.html","e4858b94f496d7da8ca63211d1120acf"],["/2021/01/18/qqrevoke/index.html","1cb948ba690ed4da75f38eec50ef66da"],["/2021/01/19/freevpn/index.html","76793a64927a2fff660eb5b13ab01818"],["/2021/01/20/browsertrack/index.html","2bdabc55b65ed5258e75bf5411397e94"],["/2021/01/20/v2ui/index.html","21ce5da12c4ac9d105d74e62f26094c4"],["/2021/01/21/failedtoconnect/index.html","49cac9314b6f63a23066220f002b706f"],["/2021/01/21/gitcalendar/index.html","d83f078a026b0d75ad910faa1f25e6c9"],["/2021/01/21/markdownformat/index.html","47b0387c2cd18b27fb9742fc45b9cf5c"],["/2021/01/21/markdowntable/index.html","57bbd59407388a94a4c561e30251dcfc"],["/2021/01/21/vercel/index.html","d72ebf6510deffd8768441132eccda85"],["/2021/01/22/hardware/index.html","25ceefe67a8441cb2ee1b50f69277569"],["/2021/01/22/muviz/index.html","c2f76c6f8b90f1d9d6b95489b22cc278"],["/2021/01/22/randomapi/index.html","9de9f8d57a43a55df32d5db565d5c6d1"],["/2021/01/22/searchimages/index.html","1662e0d728ddb3065ca2906ee4937e6a"],["/2021/01/23/RX文件管理器/index.html","a69b159d54bb04ce29d6b58b0a7e09e8"],["/2021/01/23/chromeflag/index.html","f756275ba3d7aecc159425c69eae29ab"],["/2021/01/23/qttabbar/index.html","23ed1bb4c3ca3bc6061198ce97897994"],["/2021/01/24/githubspeedup/index.html","df2ade526203ad01137efada3af49627"],["/2021/01/24/jsdelivr/index.html","bd89625e0016a06877e0930417e7906b"],["/2021/01/25/note/index.html","d1cf75839016a830b9a9c9ae32b1ef4c"],["/2021/01/25/soul/index.html","32cfe8f6f6c479c22ad7afbfeb68c5a6"],["/2021/01/26/herokuxray/index.html","603d2449e8f8d8510fa24df9f443f000"],["/2021/01/27/proxypool/index.html","73b7451cf2e486da4de0acf3bb0e6e4c"],["/2021/01/27/tracker/index.html","1ed320d1efc291970a939eeb4972c8c5"],["/2021/01/30/pandownphp/index.html","7c0a832c8786a16706b233ff90250cca"],["/2021/01/31/newgroup/index.html","8dfcbbc0db9f4812d32cbc306607eb75"],["/2021/02/01/clashlanguage/index.html","d8190cc8910fb7773649e80d92b1dc6f"],["/2021/02/01/encrypt/index.html","ecf4c66bdfe4d2df32d369360506a0cb"],["/2021/02/01/footermotion/index.html","c3c237540eead047d7b076c5a225bef2"],["/2021/02/01/gitter/index.html","622b8bc9bc04a82b02154fe6836ce168"],["/2021/02/01/pixivtop50/index.html","ec64fa96be82c94bb19b7b0b1e1e15d4"],["/2021/02/01/scrollbar/index.html","b74eb58d34ae22cf6fac4f3f212a2215"],["/2021/02/02/clover/index.html","8162aa1353e5582252fc292e872488bf"],["/2021/02/02/maya/index.html","767db27c3d7ddeb1f194528862adccdf"],["/2021/02/02/speedcontroller/index.html","f3ee0a25b15a63015b77bc183c6f71be"],["/2021/02/02/yesmusicplayer/index.html","f37d7de7ea34be4178d77d0b22724c91"],["/2021/02/03/lenovoonelite/index.html","aadd3e7f2582975c592e7c3abb817c40"],["/2021/02/03/skipads/index.html","a265f62059408a3e1d836e41479af3ac"],["/2021/02/04/picseed/index.html","f685ef02687cdf350557723b4903d86d"],["/2021/02/04/renren/index.html","41f2de25a6a1e8a409cb44d72764f0e8"],["/2021/02/04/serverstress/index.html","c94e28698717734e3cc236b447d6bf0e"],["/2021/02/04/wikipediazh/index.html","883fbdcf71bbbd84e38982f36ef1b242"],["/2021/02/05/googlevoice/index.html","2c884bed91c729853d23027432346d64"],["/2021/02/06/clashconnection/index.html","8f734ad518efe933a4d25913f6b7f90f"],["/2021/02/06/gvtransfer/index.html","28aa94e4c12a4cfaeadb096fcc821122"],["/2021/02/06/todesk/index.html","975c4385fda7c6533950687a87562e0d"],["/2021/02/06/vpnblacklist/index.html","57f4dc3a1e7b60725cd3eb80faf5ce2d"],["/2021/02/07/mklink/index.html","e5892e06ee827b1514963afa4ec84616"],["/2021/02/07/speedtest/index.html","e26b48f6c268689a446889eca59b85d3"],["/2021/02/07/translate/index.html","6b9e315990f75cdb83680beab5a61438"],["/2021/02/08/ewomail/index.html","3e14d6d798d1bb1f1486647706c15721"],["/2021/02/10/officee5/index.html","a1e5df94fdd2e23bc8f1a6b7ccea2161"],["/2021/02/10/raidrive/index.html","b60fe432ed8471db539ea0bd95704294"],["/2021/02/13/e5sub/index.html","7d11b42ad40dff426bf6cf8328739331"],["/2021/02/14/screen/index.html","07cf626a5c8609f47ce26106151bdfa4"],["/2021/02/15/clashtun/index.html","9e2174477a75ed39fe2fe5cd90bd455c"],["/2021/02/15/messageboom/index.html","00be822818586f14ae197b0c42f71290"],["/2021/02/15/oneindex/index.html","faa46cee1e8219a1d072f3d97df82a6c"],["/2021/02/16/govsites/index.html","32a1529060f5b025779aa3a862f47739"],["/2021/02/17/hexototypecho/index.html","493877e96361e73b1203e798d08647ca"],["/2021/02/19/fiddler/index.html","111fed849590dac6d4ece17e810d70f8"],["/2021/02/22/potplayerset/index.html","a6f3e885f98c9719c9439e9e1d309797"],["/2021/02/22/studyresource/index.html","c237b7ac9428adbce0c04ef5cc9ca9d2"],["/2021/02/22/telegram/index.html","657312f1c306cd1fef35594be2796545"],["/2021/02/22/videos/index.html","1782671cf83e11bee8f8ce7b5a198c7b"],["/2021/02/24/mtproxy/index.html","15d389660e460c7e6a8566f648070374"],["/2021/03/10/catchcat/index.html","7b71a0fdc6af7fcc80646d01c8abf08c"],["/2021/03/10/neteasemusic/index.html","1df88273b1d61b6475363e8374f93112"],["/2021/03/10/surfboard/index.html","e2868e5e2651acb8f997b5b0c7f4e916"],["/2021/03/11/vpnandjc/index.html","1d619cc383d1d997d47217cdd2203b9b"],["/2021/03/12/qrcodes/index.html","72e37ca07ca76bc7006a3ace75ff0a04"],["/2021/03/20/qv2ray/index.html","ad422f7c39bf8ceb50dafebccf71fda9"],["/404.html","5d5bd1765f0fbdfae47a5066cb313478"],["/archives/2020/11/index.html","e6ad4b0cb41e4bcd39f4a37c91b264ee"],["/archives/2020/12/index.html","ced4be3e0c7d42d91029ff4cb06c41f7"],["/archives/2020/12/page/2/index.html","1d1d131c0bc9ccb61949d6760838b72e"],["/archives/2020/12/page/3/index.html","fef1920fd29cdb78fe86f18df7bbdb9c"],["/archives/2020/index.html","6765c10400ef12deb5063403c9ab922a"],["/archives/2020/page/2/index.html","dbc55c1828b6d5d66c00ae9c24a9ce97"],["/archives/2020/page/3/index.html","20732bf9e2b0a2916c7c66ec97c1da5b"],["/archives/2021/01/index.html","65af40ba332df4776e9eb95091172316"],["/archives/2021/01/page/2/index.html","a82cf5552aeaf757170ff5faf716cd46"],["/archives/2021/01/page/3/index.html","9a20b828bf2006e55296ddc4771422bf"],["/archives/2021/01/page/4/index.html","178fcb037728d79d83523f9e35833608"],["/archives/2021/02/index.html","a88121479c18ff96b058a39c0851cc4d"],["/archives/2021/02/page/2/index.html","b8de1e86d0c13234ed7a393d15770bae"],["/archives/2021/02/page/3/index.html","05afd29a028a5d9042229edb44e9c2a3"],["/archives/2021/03/index.html","31ae02b225bb5fc5a4e81f89cbf7fc5a"],["/archives/2021/index.html","bb70c648c12ae225fe56c64540a674fa"],["/archives/2021/page/2/index.html","f971926555f7a11e5ba8bf513e8b97ce"],["/archives/2021/page/3/index.html","68cdfefcd01dfc2ed3a5aff493fad365"],["/archives/2021/page/4/index.html","a53769c4a94323bc46f65b99392121eb"],["/archives/2021/page/5/index.html","8dff3e77ea9d3ad430cc351612e3e876"],["/archives/2021/page/6/index.html","c7549bd7dfb9457e4fd3467c940de045"],["/archives/2021/page/7/index.html","e20a5fe2f4f58963934053258fdca861"],["/archives/index.html","bfeb45c8912cfde3679e0e76526b1d00"],["/archives/page/10/index.html","aedff18164f36206a72a4eca39da8abb"],["/archives/page/2/index.html","c14f35b41022ffe520b42677805eaf93"],["/archives/page/3/index.html","eee88fe4cd484b0cf14d7faea6bda09b"],["/archives/page/4/index.html","7c9a5f84f503b146417d5e2dad5a6eae"],["/archives/page/5/index.html","09903c5c429cbd2cb4da7ea871955c86"],["/archives/page/6/index.html","968187aa5e4816b8d06afc6ddf4f312f"],["/archives/page/7/index.html","13fa961440839eb6d4ce02955e1419d3"],["/archives/page/8/index.html","1346cf2f46928818243a0810f119d0b6"],["/archives/page/9/index.html","69a669baff1456c296c7bd1552d6a222"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPN/index.html","f924c552ec72d0ff4269d95577b957f8"],["/categories/VPS/index.html","34af132ae7e01fce5332d7470a6e6fe7"],["/categories/index.html","9f7e90891e85379e1e1c2c01fb044bf6"],["/categories/下载/index.html","38d7010b1f0c0fd05521ad8f2f4a883d"],["/categories/安全/index.html","b65107bf9640e1a454fceebd72a38efa"],["/categories/建站/index.html","89753c3ec23d1c940cb57f9141d35754"],["/categories/杂/index.html","d193f22fd36b8e01c3920d0ee24e5c5b"],["/categories/杂/page/2/index.html","6c4afbb00ddd733cde749eb8265c85c6"],["/categories/测评/index.html","076150e118e5561bee5528e371e2fdf5"],["/categories/科学上网/index.html","b77f78a8fb77cac37e9277f39945d804"],["/categories/科学上网/page/2/index.html","3fd0b817012298723159133e13ce6290"],["/categories/编程/index.html","635e9c51dcf7b09a4a52234f8908aef1"],["/categories/网站/index.html","8ae50410d4f8b5a0333cfe44c890632d"],["/categories/网站/page/2/index.html","317743cc7678197e0586969992d8f88c"],["/categories/软件/index.html","f563c415fbe7ef09c80623c53804aab4"],["/categories/软件/page/2/index.html","4c66ac247cf43552845166b66e709acd"],["/categories/软件/page/3/index.html","48553fff02c732c323d16fac9a50052a"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","7317ac1c7ae6ecb1d6c3d9d371ed43d5"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","c88f2f0e2492cc6d50befe73a2a03d18"],["/ios/index.html","a406ca134175f39e307ba51b6463357c"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","35c7bb9aab0c139d5a1070ed7625e26f"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","c5c48c294455cd16d074df046bbca7a0"],["/page/2/index.html","972cff36b3b379f46da342e33e2d9f3c"],["/page/3/index.html","253f45605ac6cccf6a639c4bf757e95c"],["/page/4/index.html","6ee0d47889dbfdccef7eaecc71119448"],["/page/5/index.html","4aeefc6bd81bda5469a557cee1b3ad33"],["/page/6/index.html","b9b6a5245b1e5bc343dd48fed5180bf7"],["/page/7/index.html","b7f8903d8981f5ad500ae3735a791a40"],["/page/8/index.html","ee48425005ceeb5d20bbf87630139488"],["/page/9/index.html","6bd32d78793d521c1e4141e930bfa6b7"],["/payment/index.html","6254601cdea293c9d6958eadee061a3c"],["/privacy-policy/index.html","7bdd9ebcaea6510942cafc60240af9af"],["/rss2.xml","c2f76cc44c0616c8cc2a55479984194d"],["/search.xml","44c12bd74ccc1bfea39e352bbaf46e21"],["/sitemap.xml","0685471f32bbf3403958068c3583831d"],["/sw-register.js","57bc533e7008956f6f7f31febb2dc1f3"],["/tags/5t/index.html","857dbc038c0c2fa61501695cadc2efb9"],["/tags/Clash/index.html","f6edcfde35ab75a488bed9bdf1a2359d"],["/tags/Clover/index.html","75df239f700f3d3ca1c6a3c879b52300"],["/tags/E5/index.html","a0cb452987dd0bc0dd7e4aa2b9045092"],["/tags/FTP/index.html","567aa2a1a5b4f0e6192a3767b1b9c401"],["/tags/GitHub/index.html","534f418fc11f7a04558d8e2963ab0ce2"],["/tags/Heroku/index.html","966d35e8b97b47c8d00684e6e03c0f97"],["/tags/Hexo/index.html","d7777141610e215879c2290d7ca421bc"],["/tags/Lenovo/index.html","1c2ad616d86d76b935228f1e3741ac81"],["/tags/Oneindex/index.html","45afc6dc41e21cb1629d74d642cd42c3"],["/tags/QQ/index.html","2d999bfe76acee489e3ccbeac9b3eca7"],["/tags/QTTabbar/index.html","5a87ed8634d7c9111c3207c5d75d5d18"],["/tags/RX文件管理器/index.html","2fdbae24f55d62820662e3ddec40a749"],["/tags/Todesk/index.html","b843d0bbb3885c859f26a47104fe6424"],["/tags/Vercel/index.html","8792584ec88194ccb2d18770a30ffccf"],["/tags/ads/index.html","268baabacd4032d49d659bfb1042e841"],["/tags/api/index.html","92880eeca767bd0377c431ab5e0020b9"],["/tags/app/index.html","470873ee27ef3ce5db99e0fa32265e81"],["/tags/blacklist/index.html","c7c185e653998b76b78130337833ac50"],["/tags/butterfly/index.html","503be372f02f0f2b53e5d5c77821c624"],["/tags/chrome/index.html","707a063e7780bc0d585a918ea144c695"],["/tags/cloudflare/index.html","1c7fb0ec470a25ef1ccc5ce6cb87bd4a"],["/tags/cmd/index.html","14c5b5bf16248bac3e302acd7b473195"],["/tags/c盘/index.html","05c2f29c5c8785ddc061559053812a2c"],["/tags/email/index.html","0300a6f2464f8273d502452375326393"],["/tags/ewomail/index.html","ad9ce795dff4343629988dd0d1112021"],["/tags/fiddler/index.html","1b9f9f32a998db61d0a3ff4530848947"],["/tags/flags/index.html","9e0c84c6fa26b55fd7747736fdb9a1b4"],["/tags/footer，页脚/index.html","56340afeae7ca05c176c55b80a54aa4c"],["/tags/galgame/index.html","a7125333118ced42fec0be7bfaa246ec"],["/tags/git/index.html","5d02946557467ae0cc7343b9c5ea92e1"],["/tags/gitcalendar/index.html","a5283d2f376523ff8faa963e739a8d85"],["/tags/google-voice/index.html","cf69698c05eeb2db904f12496162bd12"],["/tags/gv/index.html","987aef32e4bc32436947e4b422515125"],["/tags/html/index.html","a861db94f4cb5696c97cb631afc33c49"],["/tags/index-1.html","4bf811b64843959e46fc99c40b842c30"],["/tags/index.html","a86f87f0e0415fa7f67f3ec02f6fbb1e"],["/tags/js/index.html","56ca3e6b9c152310cfe6e79d4822f00c"],["/tags/jsdelivr/index.html","4242e2545c6654d3a6b0fd3a5f6ac5d7"],["/tags/linux/index.html","5d97fa8e801599121ffee863c412b299"],["/tags/madVR/index.html","2ed7f6833a6160438bc68bbcbf548175"],["/tags/markdown/index.html","3047ccd0b0eaa9b9e8d978cc27cd3729"],["/tags/maya/index.html","6d7a4b07e9fb0761ca8e0158c4554729"],["/tags/mklink/index.html","c6fad178f8afb38b050b7ae5b285e11b"],["/tags/office-e5/index.html","fab63a1f0a056cf58d22e6bce1ddce53"],["/tags/onedrive/index.html","41aecd28f4497157c080810733a1264f"],["/tags/picGO/index.html","d0a4ab878de8916baadbd363de985340"],["/tags/pixiv/index.html","6f4415e8974602bdaa66b76a048867db"],["/tags/potplayer/index.html","0a99d1a9527b7803117bee4be69192ee"],["/tags/proxypool/index.html","7c4368392a3a5d3583ee332d5f548e65"],["/tags/qbitorrent/index.html","8d493c7b160e4de60ca5df27d8fe75d3"],["/tags/raidrive/index.html","27ebe86c1ef4ca3395e12b1004675aad"],["/tags/screen/index.html","9023522ca74d4cb80a4bfcfb59cdbe6f"],["/tags/speedtest/index.html","d971c0eace6d0b42628ba372dda19210"],["/tags/ss/index.html","4d983dae85496d138ce6656ec8354fa2"],["/tags/ssr/index.html","1193bfda21f7cb9c7260b8c7d6e1b486"],["/tags/surfboard/index.html","0e36c444ca6d01a0fd34dd07a384fc49"],["/tags/tap/index.html","d16d0ec804f8163ca0cd09cd0b4c9bb3"],["/tags/telegram/index.html","25fe6dbfab5fc0a70ca38f3184d8648e"],["/tags/telegram代理/index.html","57cbabfc9ec907a416cb11c9bde8e5fe"],["/tags/tg/index.html","8c8cc2f79689ef5f2a1fda8ac380a041"],["/tags/tg代理/index.html","85430c7874a0e05f019ee0709c506970"],["/tags/top50/index.html","d1a4d39a66690fd7c73b2ba2b267c987"],["/tags/tracker/index.html","4e99bf768a13164b25b67c65a14d4b26"],["/tags/translate/index.html","776b52ae304c773f76d72aaa88c2d13f"],["/tags/translater/index.html","52bd0de3085a15d5bea1cce01ca55fa4"],["/tags/tun/index.html","8189dcfe4c4f43fde62826fdff41ff75"],["/tags/typecho/index.html","ecbf1acc5e96d3fb875363b66c109567"],["/tags/v2ray/index.html","328bf176231b92d2583cbd6c8a91d825"],["/tags/vpn/index.html","43bff97048d8a063db00cde5817dd28b"],["/tags/vps/index.html","d32ea3af2a831cf02052d38de57be47b"],["/tags/windows/index.html","a6f6dcbb6be7e9481858197f1263b974"],["/tags/windows端/index.html","0d7ac60826dafbc13dfe3d5affbd27f6"],["/tags/xray/index.html","b70a0b5ed15023a54e050008feec3a24"],["/tags/下载/index.html","52404a0bb1ae27d0619ef93f44a8b752"],["/tags/不限速/index.html","d29deeb10ad201271c9630970ae49048"],["/tags/个人网盘/index.html","7e27810123a559d39dd68ce8e430c277"],["/tags/主题/index.html","42957253c63f9247c8a37bd6d5cb9678"],["/tags/二维码/index.html","55c15e39f7ed47077749fb4487c3bd66"],["/tags/云便签/index.html","bf7ac78d0b830b458f0166921a1fd19e"],["/tags/云盘/index.html","db1910d7923e92a765c935b9b252cede"],["/tags/人人/index.html","1d61391bdac7737d13211e5d9ffd3c1a"],["/tags/代理/index.html","c01ea6beaead20269e3524e869658303"],["/tags/代码/index.html","709c27035834813e8c74b45abb710cf4"],["/tags/优选IP/index.html","5ab15d54787dd151e40c6f2338e91805"],["/tags/便签/index.html","5794b733099860667d2bfe1213a28b09"],["/tags/保号/index.html","f825b9e2c6c3c63d01c0fb322a55ff87"],["/tags/免费/index.html","d09f0288e3ad0121be50b748c39e4404"],["/tags/免费节点/index.html","255918d45ebe40ce5895c71f48ffe34c"],["/tags/加密/index.html","f05eaf8490b20248daf2b323724c9dd2"],["/tags/动画/index.html","38f5220b99d78006e1fb768273526942"],["/tags/博客/index.html","c0978084374abbe1b7eff7a51eb37325"],["/tags/历史记录/index.html","c1113086666efdc04b5ec9f4f7f9a701"],["/tags/压力/index.html","a3a5971ab412a6a1c5c8cbadbf29d477"],["/tags/压缩包/index.html","afe76fac1990edde800fad74f9302c1e"],["/tags/反代/index.html","5ddad81afcf503cc98da911bad53c862"],["/tags/可视化/index.html","34fc246e8c0e1330526fdbd62e551425"],["/tags/命令/index.html","f213216f40f49ddddf3d0359a4737759"],["/tags/国家/index.html","02f3f9d3ef524c4821a9382aec34fae1"],["/tags/图床/index.html","0608c2d6b40bbf2a445e41c988f89df1"],["/tags/图片/index.html","d7f1c75b9113622d529467e2c5f5d0ea"],["/tags/域名/index.html","604f0fc54aad87355051cc2e20c1c89b"],["/tags/多标签/index.html","fdc942fe14f20b1706634cb81391a46c"],["/tags/存储/index.html","d2d10283e482eda0bad90ca140ba7cc4"],["/tags/学习/index.html","3b23eb80fb05c8887d4ba1f0d8dda0ea"],["/tags/安全/index.html","c9877a9284c6799ddbd4405fe8109996"],["/tags/安卓/index.html","2bbcb16cdb9678463f67bb563b382510"],["/tags/宝塔/index.html","397e8c6a206a55eae9cdff8a7f4fe089"],["/tags/小游戏/index.html","3a1f42641d07677b5cd852d9b2521868"],["/tags/广告/index.html","06976768e389913933563e53b69f89be"],["/tags/建站/index.html","b3c7109a53906ac1407e1ddc265aa312"],["/tags/影视/index.html","92d5db434d3efcd264ba97ece9ca6690"],["/tags/微信/index.html","ad34645327487c396d13e62e5a191a92"],["/tags/快速启动/index.html","a7b25571992a004e77f7f22e39c63425"],["/tags/手机/index.html","89481bc9595d3c2932544187f91cc174"],["/tags/托管/index.html","84e63200c2ee81f959fe446be2f751f7"],["/tags/抓包/index.html","5186f3feabb621fa2260a2edb31db18d"],["/tags/抓取/index.html","d8b50518f9512603d0871c0fd7c1720c"],["/tags/投屏/index.html","464ff795f3e65c81f538010206e6d734"],["/tags/拓展功能/index.html","b8e8e3f8169d89f1048d2f2ea1446fc9"],["/tags/挂载/index.html","4ba6d5f06672107c0b7ab096e3b90d4e"],["/tags/指纹/index.html","9875b24a7d7c4ca50f24fb4fbab0a43d"],["/tags/接口/index.html","fa79cbedea53a58a7bc6adec9510f6d7"],["/tags/提取图片/index.html","145ccc0caf51d72c2b565a701917e71a"],["/tags/插件/index.html","de8ad196c234ab443f8cf5bed66bf3b0"],["/tags/搜图/index.html","9b448806d64dcd2f79ed34c1021e0668"],["/tags/搭建/index.html","3d8c0bf2f00d3cda590a8c25bb6b8a68"],["/tags/撤回/index.html","8f8f7040f4fdaff70bafcfb56ccf9e99"],["/tags/播放器/index.html","8094691f5db2635508acf2b17f171118"],["/tags/支付宝/index.html","32e0c1298aceee5130360483b1b284c1"],["/tags/政府网站/index.html","cd4ce14db464ab0cd16f642f91e6666f"],["/tags/效率/index.html","76f198f426695ed0098308d042557f6f"],["/tags/日历/index.html","39f6b32c04e09a89cb7aeeee45039c71"],["/tags/服务器/index.html","97217d6b6c5c0f956e82edafe4b55344"],["/tags/机场/index.html","4359b08cb9c95544c584daffd7fc929a"],["/tags/桌面/index.html","0bdca577c16c56a216666dae135917b1"],["/tags/梯子/index.html","c978d85ae5fd77755eeefe578271c814"],["/tags/检测工具/index.html","7c5e7a5f3f1bdcffc01f7cf321cf2111"],["/tags/汉化/index.html","b5a1d96d62e4fb03a7fb039d82a38dfd"],["/tags/测压/index.html","f4c4a7fc515e30155b110fae88ef22c0"],["/tags/测速/index.html","a5accb52096bfab4310acee3892e7235"],["/tags/浏览器/index.html","bebf1b30569831f57266c03d306589a7"],["/tags/清理/index.html","f5f95032bb72d730726c62d824e2d3fc"],["/tags/滚动条/index.html","0749111694467c7f29aca95ab3e43a9f"],["/tags/灰色歌曲/index.html","cd6900884b425e56b898ad92e86dabcc"],["/tags/电影/index.html","57fb31cc3fed015fd352e1908552b2ef"],["/tags/电视剧/index.html","e65e6759e8ca7dcd89251ed80588d600"],["/tags/白嫖/index.html","e074d737bd51eba3c7c1bc2ccf3ac54d"],["/tags/百度/index.html","deadd35c2e1eabe1c12e204d13125ecb"],["/tags/百度云盘/index.html","bc363d30e8af5665e3c3ad12015fe3db"],["/tags/百科/index.html","9864786b33227b8ae4c13e5022e82beb"],["/tags/短信/index.html","20b9a5d69f458c7ea1dbfa091584d23f"],["/tags/硬件/index.html","3f395e22bb43a9665bc44711874a08bc"],["/tags/科学上网/index.html","58b5b3b8662fb80a22a15cf14ed3ee2f"],["/tags/空间/index.html","7f4e144b438639c98f628c9138119ad7"],["/tags/笔记/index.html","07447e9bb60ce552d931c8357c1dc7f4"],["/tags/简洁/index.html","0ac3e3b47dbba03954bf0121e97ac944"],["/tags/简约/index.html","3e1a95ef205dee0e147485b6925c4c73"],["/tags/维基/index.html","8788f6858363f7213cd66b097ef17a94"],["/tags/网易云/index.html","d40e3e62df4129697faa867c2c2abe0d"],["/tags/网盘/index.html","95f99170e2f236c04c5055d5a8f311c4"],["/tags/网站/index.html","010677627a9287b64d65e759a3a6ace8"],["/tags/网络/index.html","d3b0ea43f1112223991df64844aac138"],["/tags/美化/index.html","1edf0e57942c280f9067b11cd23612ec"],["/tags/翻墙/index.html","429baf7d3f66eb3cfcc9c2503bb9a305"],["/tags/翻译/index.html","73595b4ba1c8deaa7587ce3332f5cddd"],["/tags/翻译器/index.html","647037cf647a412a361d09446bc05d5c"],["/tags/聊天/index.html","85955084dcaa7d0ca9622bde9c1e9077"],["/tags/聊天室/index.html","56d098252e35d42b5dd0ae1abaa6903a"],["/tags/联想/index.html","89eaa438d5b208fa247edcc778e875d0"],["/tags/节点/index.html","bdac6c8b8439d6fd0d873c6a99415155"],["/tags/虚拟手机号/index.html","5bc00d445d37a50b76a1e650b9a43848"],["/tags/补丁/index.html","cc992f4370b5a2ce0dfa8ff6fc6e4b54"],["/tags/视频/index.html","d2fcb8ce50939842845e4060c341d8b0"],["/tags/解析/index.html","589e8729b9b51401f1c3edf069611696"],["/tags/订阅链接/index.html","3ad462d8755dbc565dc59713e6f99918"],["/tags/记录/index.html","33aa7cd30bc5371bbc956418cc750836"],["/tags/识图/index.html","4a7a110687b10a5eee4ae5c36c2cea93"],["/tags/语言/index.html","b01dfa55e492ddbb49bf4c58028f3d5b"],["/tags/资源/index.html","a48e5f89cd2cdfb31f01222fbe061633"],["/tags/资源管理器/index.html","23377123f3c51de3cdf9eec0c8265cd6"],["/tags/转移/index.html","5c73234f1c28b04e884deb2eb85c7734"],["/tags/软件/index.html","0b28b8e824c1cc0985161ef0caa127a7"],["/tags/轰炸/index.html","0c77f5c963869d6b7cad288c5d5a2e71"],["/tags/迁移/index.html","d4fd73cde2a0d16841a4875c22425e51"],["/tags/远程控制/index.html","1ef0fc162aafa303f0044d19ebcf7c3c"],["/tags/连接/index.html","734bfdf98fcfbd447e690819d1196d1a"],["/tags/追踪/index.html","f6c455f71abf24cd98e058505028f7aa"],["/tags/速度/index.html","641cc68b9f63919786c0e85037905633"],["/tags/邮箱/index.html","4aaeac1ea2ab64f570bf7a26dc932575"],["/tags/酷炫/index.html","4c94517c6930d9c31512f686cd2a89d9"],["/tags/钓鱼/index.html","4563e132fb27f94e559f34d974fdbe95"],["/tags/镜像/index.html","d784f5787ba52ecb635c898785cdfe81"],["/tags/随机/index.html","45add1e7cce4cdb90220e65162fdc8a2"],["/tags/隐藏/index.html","230e6e1d6b0e7883a2361fbb5390ffb6"],["/tags/面板/index.html","a3721b0755ce6e0dd275ca01036fc60e"],["/tags/音乐/index.html","c373bf3278f48ece209ef93e51319471"],["/tags/高颜值/index.html","2774fc5b538529284fb28e356f85285a"],["/tags/魔改/index.html","c61b1414c2b7593ed0cb0b9b0f913533"],["/tags/黑名单/index.html","3b8ec418ce29d018f13bbd10c48df65a"],["/urls/index.html","ef0b2e4248f6ef88a8ef243a54a22d2b"],["/vps/index.html","552f684fa92b8e97f2ed6f00d1ca5ec4"],["/支持/index.html","63d971c9d977a2e16283c4b0d49e8e5e"]];
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
