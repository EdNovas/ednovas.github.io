/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","577d5a2c6d7be5cac5ce92a08247f5d7"],["/2020/11/29/clash-windows/index.html","60d68674c783a5f75d5876420eb2f56c"],["/2020/11/30/websites2/index.html","0af1bdcfa49c826ef800e77713f5928e"],["/2020/12/04/iphone4s/index.html","71e27023bba3d86d2c843de9bc758b35"],["/2020/12/04/onenote/index.html","bdf9a6ece806497dc866575bea9ccdc8"],["/2020/12/04/wesites1/index.html","210798970baa3f56f84ec203e761b081"],["/2020/12/06/nokia808/index.html","2b3985b06396fbde95992c46865100e3"],["/2020/12/07/ipad1/index.html","4d4962939d3cc2817d4b53118b7a1f1a"],["/2020/12/18/freesubscribes/index.html","70863057e6c1a36006aed959540d6fb7"],["/2020/12/19/musics/index.html","920038795cb1dc044cbacdbc4e163489"],["/2020/12/19/shadowrocket/index.html","8529e39e2c2ed982d872fd79c74500aa"],["/2020/12/19/v2ray-windows/index.html","ab6699a8e895e1bb206617f6612f2ac0"],["/2020/12/19/v2rayng/index.html","a6385fe0faf5ef377221ff80e9272e16"],["/2020/12/20/beoplay/index.html","03f116a652fdcad84789eaa4d3b93cea"],["/2020/12/20/订阅链接转换/index.html","8a24ced1d690e097b239f81cff78aa9b"],["/2020/12/21/chrome浏览器下载提速/index.html","6c3a34e62b9e8d689eb19bbfc101279b"],["/2020/12/21/免费128线程并发下载xdown/index.html","b16495e7dd6502aee2bce9676d91e077"],["/2020/12/21/免费32线程下载软件ndm/index.html","14b3a0b68388cdd190c8703b46800560"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","812156eae791f0070922a414d9252ae3"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","e3003b85f10bd8b6ea21cb072d6ce3b0"],["/2020/12/21/广告怎么知道我在想什么/index.html","3330b8bd7065febf50eb790f22daedc3"],["/2020/12/21/无名·引子（小说试写）/index.html","667560a5302c9a0fefb0a0f5405852fb"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","fb304e1d376a3fa5b19cceb34e80ce6d"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","ebc245772ccf68f73667ae21fc12ad74"],["/2020/12/21/高速轻量下载器aria2/index.html","746068fa8391b3a78c98499a8db8afc4"],["/2020/12/22/2020-cee-roo/index.html","f2de081633d4c1d4e762d9a576f4e0fd"],["/2020/12/22/firefox插件、github、steam富强/index.html","2030ab624edd7b4aa1a844eb39c6fc47"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","e099e83767f8eef68c5b5972c422087a"],["/2020/12/26/python-day-1/index.html","754bdf78fff9a9f82b6dad7efd35c55c"],["/2020/12/26/python-day-2/index.html","8104f02e0d3d91c78ed4330799a12fda"],["/2020/12/26/度盘不限速下载方式一赏/index.html","4169191a4559dac5213f50d28d40ac84"],["/2020/12/26/添加开机自启软件/index.html","01ff882fc16a1ef4c095e5fc6dbe85ef"],["/2020/12/26/电脑端截图方式一赏/index.html","0abc0e7ee2cc54bbcf1075185ef97760"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","86ee04c6cf2015bf2269979f3895339e"],["/2020/12/27/最安全的浏览器tor/index.html","1b8f0fd098888fa0ab1fc3fdfef6c776"],["/2020/12/27/网易云刷等级和听歌数量/index.html","470da3f3af9479347fd7c85c7129b3a4"],["/2020/12/28/freenom申请免费域名/index.html","a7071355e8131b08b95657211ecab91d"],["/2020/12/31/机场/index.html","68aa57b151b36f18aa92ea17ff41f0b6"],["/2021/01/01/M1/index.html","56794a8f71aaba38f5c80fe9fec0e593"],["/2021/01/01/compress/index.html","b2e0686f24448bad865e5c39b11f2f76"],["/2021/01/01/infinityfree/index.html","7978cd0d88fa4a033303c6a62598c40f"],["/2021/01/01/硬核翻墙/index.html","ab982e7dc19e34bb1a953aa902c21c84"],["/2021/01/02/qq/index.html","db7ae5e2ce68608b5604285b565d644f"],["/2021/01/03/netch/index.html","505ab87721a6a4c65d7efd9a5b7c910f"],["/2021/01/03/waifu2x/index.html","f48ef599e5d6cac4817a704c13aea907"],["/2021/01/04/ads/index.html","d9559994023875cffb79c346bbf517ee"],["/2021/01/04/games/index.html","8bc9004ee22fc7fdc1e9b6e77ff214d0"],["/2021/01/04/heroku/index.html","e12fbb160d0fc0efb2fd39de3e27c8e8"],["/2021/01/06/movies/index.html","31de70b50be0df51e08c2e91b58cc6a4"],["/2021/01/07/google2020/index.html","dfe8648b5bb39276dda975dd5e0989b0"],["/2021/01/07/lucky/index.html","c956c3a12742844cd5591b82cc952d21"],["/2021/01/07/spotify/index.html","49a4183ad9bc34c19bcd1229a47c27d1"],["/2021/01/07/thunder/index.html","3c046e7a73d5a932f17c416d6a0de7e0"],["/2021/01/08/adguardhome/index.html","5d382f6460f8395d1e57dd315b851aa4"],["/2021/01/10/IBM/index.html","6fcd3ac0f8d7fde6040f1c161558e662"],["/2021/01/10/potplayer/index.html","0f0cfd22fb1652cea4b89732b9d0f36b"],["/2021/01/10/sakuraanime/index.html","0f6bd81dacb3a93c4530cdb82f8c93b4"],["/2021/01/10/美剧星球/index.html","606217a4007528dfaebfce5d24f9b5e4"],["/2021/01/12/telegraph/index.html","13c78017f38c4933ed78625f62a933d5"],["/2021/01/14/comics/index.html","fab2f977e786a609a2912869f278e5de"],["/2021/01/14/ftp/index.html","67f57c9fe6488f77e723aeb444f0c972"],["/2021/01/14/oraclecloud/index.html","d4e6f32c1484ac8bfd79829a3a061ac1"],["/2021/01/14/porkbun/index.html","557c2c59cc9c9a973113cd758b91b3e1"],["/2021/01/14/powertoys/index.html","7e912cd2fa8f014ad2a5ec1dff940b18"],["/2021/01/14/taptap/index.html","7ae7b3d49762f667d1e0520f8d5c3d3c"],["/2021/01/14/ubuntuvsftp/index.html","26f3e04fac598ca7580040ca02209a72"],["/2021/01/14/小说/index.html","5b6d8cc9158b265099cb4dc04e32de8f"],["/2021/01/15/freeproxies/index.html","8ef2f34d9b50ab4a3f74102abe65c2d3"],["/2021/01/15/incaseformat/index.html","70cbe7492ad8a74db4aa14991e3e038b"],["/2021/01/16/euserv/index.html","c7b57748476f54e958fdf434961f11ba"],["/2021/01/16/winxray/index.html","66e19e98385b3b6f5bd3e1494c8144a5"],["/2021/01/18/qqreadhistory/index.html","e4858b94f496d7da8ca63211d1120acf"],["/2021/01/18/qqrevoke/index.html","1cb948ba690ed4da75f38eec50ef66da"],["/2021/01/19/freevpn/index.html","76793a64927a2fff660eb5b13ab01818"],["/2021/01/20/browsertrack/index.html","2bdabc55b65ed5258e75bf5411397e94"],["/2021/01/20/v2ui/index.html","21ce5da12c4ac9d105d74e62f26094c4"],["/2021/01/21/failedtoconnect/index.html","49cac9314b6f63a23066220f002b706f"],["/2021/01/21/gitcalendar/index.html","d83f078a026b0d75ad910faa1f25e6c9"],["/2021/01/21/markdownformat/index.html","47b0387c2cd18b27fb9742fc45b9cf5c"],["/2021/01/21/markdowntable/index.html","57bbd59407388a94a4c561e30251dcfc"],["/2021/01/21/vercel/index.html","d72ebf6510deffd8768441132eccda85"],["/2021/01/22/hardware/index.html","25ceefe67a8441cb2ee1b50f69277569"],["/2021/01/22/muviz/index.html","c2f76c6f8b90f1d9d6b95489b22cc278"],["/2021/01/22/randomapi/index.html","9de9f8d57a43a55df32d5db565d5c6d1"],["/2021/01/22/searchimages/index.html","1662e0d728ddb3065ca2906ee4937e6a"],["/2021/01/23/RX文件管理器/index.html","a69b159d54bb04ce29d6b58b0a7e09e8"],["/2021/01/23/chromeflag/index.html","f756275ba3d7aecc159425c69eae29ab"],["/2021/01/23/qttabbar/index.html","23ed1bb4c3ca3bc6061198ce97897994"],["/2021/01/24/githubspeedup/index.html","df2ade526203ad01137efada3af49627"],["/2021/01/24/jsdelivr/index.html","bd89625e0016a06877e0930417e7906b"],["/2021/01/25/note/index.html","d1cf75839016a830b9a9c9ae32b1ef4c"],["/2021/01/25/soul/index.html","32cfe8f6f6c479c22ad7afbfeb68c5a6"],["/2021/01/26/herokuxray/index.html","603d2449e8f8d8510fa24df9f443f000"],["/2021/01/27/proxypool/index.html","73b7451cf2e486da4de0acf3bb0e6e4c"],["/2021/01/27/tracker/index.html","1ed320d1efc291970a939eeb4972c8c5"],["/2021/01/30/pandownphp/index.html","7c0a832c8786a16706b233ff90250cca"],["/2021/01/31/newgroup/index.html","8dfcbbc0db9f4812d32cbc306607eb75"],["/2021/02/01/clashlanguage/index.html","d8190cc8910fb7773649e80d92b1dc6f"],["/2021/02/01/encrypt/index.html","ecf4c66bdfe4d2df32d369360506a0cb"],["/2021/02/01/footermotion/index.html","c3c237540eead047d7b076c5a225bef2"],["/2021/02/01/gitter/index.html","622b8bc9bc04a82b02154fe6836ce168"],["/2021/02/01/pixivtop50/index.html","ec64fa96be82c94bb19b7b0b1e1e15d4"],["/2021/02/01/scrollbar/index.html","b74eb58d34ae22cf6fac4f3f212a2215"],["/2021/02/02/clover/index.html","8162aa1353e5582252fc292e872488bf"],["/2021/02/02/maya/index.html","767db27c3d7ddeb1f194528862adccdf"],["/2021/02/02/speedcontroller/index.html","f3ee0a25b15a63015b77bc183c6f71be"],["/2021/02/02/yesmusicplayer/index.html","f37d7de7ea34be4178d77d0b22724c91"],["/2021/02/03/lenovoonelite/index.html","aadd3e7f2582975c592e7c3abb817c40"],["/2021/02/03/skipads/index.html","a265f62059408a3e1d836e41479af3ac"],["/2021/02/04/picseed/index.html","f685ef02687cdf350557723b4903d86d"],["/2021/02/04/renren/index.html","41f2de25a6a1e8a409cb44d72764f0e8"],["/2021/02/04/serverstress/index.html","c94e28698717734e3cc236b447d6bf0e"],["/2021/02/04/wikipediazh/index.html","883fbdcf71bbbd84e38982f36ef1b242"],["/2021/02/05/googlevoice/index.html","2c884bed91c729853d23027432346d64"],["/2021/02/06/clashconnection/index.html","8f734ad518efe933a4d25913f6b7f90f"],["/2021/02/06/gvtransfer/index.html","28aa94e4c12a4cfaeadb096fcc821122"],["/2021/02/06/todesk/index.html","975c4385fda7c6533950687a87562e0d"],["/2021/02/06/vpnblacklist/index.html","57f4dc3a1e7b60725cd3eb80faf5ce2d"],["/2021/02/07/mklink/index.html","e5892e06ee827b1514963afa4ec84616"],["/2021/02/07/speedtest/index.html","e26b48f6c268689a446889eca59b85d3"],["/2021/02/07/translate/index.html","6b9e315990f75cdb83680beab5a61438"],["/2021/02/08/ewomail/index.html","3e14d6d798d1bb1f1486647706c15721"],["/2021/02/10/officee5/index.html","a1e5df94fdd2e23bc8f1a6b7ccea2161"],["/2021/02/10/raidrive/index.html","b60fe432ed8471db539ea0bd95704294"],["/2021/02/13/e5sub/index.html","7d11b42ad40dff426bf6cf8328739331"],["/2021/02/14/screen/index.html","07cf626a5c8609f47ce26106151bdfa4"],["/2021/02/15/clashtun/index.html","9e2174477a75ed39fe2fe5cd90bd455c"],["/2021/02/15/messageboom/index.html","00be822818586f14ae197b0c42f71290"],["/2021/02/15/oneindex/index.html","faa46cee1e8219a1d072f3d97df82a6c"],["/2021/02/16/govsites/index.html","32a1529060f5b025779aa3a862f47739"],["/2021/02/17/hexototypecho/index.html","493877e96361e73b1203e798d08647ca"],["/2021/02/19/fiddler/index.html","111fed849590dac6d4ece17e810d70f8"],["/2021/02/22/potplayerset/index.html","a6f3e885f98c9719c9439e9e1d309797"],["/2021/02/22/studyresource/index.html","c237b7ac9428adbce0c04ef5cc9ca9d2"],["/2021/02/22/telegram/index.html","657312f1c306cd1fef35594be2796545"],["/2021/02/22/videos/index.html","1782671cf83e11bee8f8ce7b5a198c7b"],["/2021/02/24/mtproxy/index.html","15d389660e460c7e6a8566f648070374"],["/2021/03/10/catchcat/index.html","7b71a0fdc6af7fcc80646d01c8abf08c"],["/2021/03/10/neteasemusic/index.html","1df88273b1d61b6475363e8374f93112"],["/2021/03/10/surfboard/index.html","e2868e5e2651acb8f997b5b0c7f4e916"],["/2021/03/11/vpnandjc/index.html","1d619cc383d1d997d47217cdd2203b9b"],["/2021/03/12/qrcodes/index.html","72e37ca07ca76bc7006a3ace75ff0a04"],["/2021/03/20/qv2ray/index.html","c1c08f3eee4d726dfbe87214bab161f7"],["/404.html","cf1f2153db987599b825e23591a59a0d"],["/archives/2020/11/index.html","2d55a737fb6591d044fab992122fd16a"],["/archives/2020/12/index.html","88da2267b67478ff08956d39036cbc4e"],["/archives/2020/12/page/2/index.html","92c9e00c11036a752e2c34dc9fdc7646"],["/archives/2020/12/page/3/index.html","04476e7a119ec75f51ae5e5a7505de88"],["/archives/2020/index.html","3bb97d9edf9ac401732ecb1efa9f1f93"],["/archives/2020/page/2/index.html","5e515685ceb0489e16e4f176d4fd3826"],["/archives/2020/page/3/index.html","c08499cb55d8667d0318a97b05e00244"],["/archives/2021/01/index.html","8e84682c820f6269355f789e56223fbd"],["/archives/2021/01/page/2/index.html","c748ed06f91dd4500a7b428bd165df94"],["/archives/2021/01/page/3/index.html","34d836608dc10f54ca13245fc9e82edd"],["/archives/2021/01/page/4/index.html","5e4110a1ec650b497f0388a84704cb8d"],["/archives/2021/02/index.html","baf168e3a0ae93b45b4bc6ae51304330"],["/archives/2021/02/page/2/index.html","4a90f7612a21e9b01befde4f8c791fca"],["/archives/2021/02/page/3/index.html","411d29f64574a2fef22f8e8e845a718d"],["/archives/2021/03/index.html","f0196b3ce58b59f616e5fc1e601667d0"],["/archives/2021/index.html","4b084dbc3d417764f4aadd863d02cefd"],["/archives/2021/page/2/index.html","a2700d5a99350cb68fc57f12fd5e18ff"],["/archives/2021/page/3/index.html","c9e315b1399bedd7e03e9beefdee7512"],["/archives/2021/page/4/index.html","eb03ad6428446df191b01c470c0c59c4"],["/archives/2021/page/5/index.html","a76c7c0665153b189f5ce4cae57730b6"],["/archives/2021/page/6/index.html","d8f0b6f4a076869e9377a30a98066241"],["/archives/2021/page/7/index.html","e860634de7fe65c85bb6844ecf798e08"],["/archives/index.html","dfcf8d8accc123ebab9fd737556d08e5"],["/archives/page/10/index.html","b9af9d794ba9194791298a661c4beafc"],["/archives/page/2/index.html","a60de2a8909b07c09a04a9d3aa6d23b4"],["/archives/page/3/index.html","634fdc3110eba872ea4c3ea78c03a264"],["/archives/page/4/index.html","da7fef072e306b52e06189aa55939566"],["/archives/page/5/index.html","d458b8402a0afc6673e7e4adb21e5740"],["/archives/page/6/index.html","8ce4daa64eff003a9cc831fbff35e55d"],["/archives/page/7/index.html","ea0fd661c95c2baecc2209effeb3e277"],["/archives/page/8/index.html","b4bcf823c1764fdcf90d9746ee89a2b3"],["/archives/page/9/index.html","a275a53f502c15f746c7561a414c31e7"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPN/index.html","e380c48a3975862b189dcc61f32f30bb"],["/categories/VPS/index.html","172294d79e30e7b507548c9eecdaef49"],["/categories/index.html","693e76bb01299de01196daed6e860273"],["/categories/下载/index.html","9627dc196c49f57f4611eec6f403eb8d"],["/categories/安全/index.html","1ef87cda81993e79916f6f8206d861e3"],["/categories/建站/index.html","14313d00ccccab5d9fdeb31665ff0022"],["/categories/杂/index.html","1e1eb7c32c9bf7d1d9b67426f9227929"],["/categories/杂/page/2/index.html","c6adc4db2ae7688e8ccc9020a3b02acc"],["/categories/测评/index.html","dcf63ff9410fe79b31ba0cf00d40bff1"],["/categories/科学上网/index.html","b5abb0163a5e44a67dfe338cfd4526b0"],["/categories/科学上网/page/2/index.html","a1140edb2ca1e8ee59fbc16e1e2c8941"],["/categories/编程/index.html","60e52d7613152e24f25e1bc8ea7d70b1"],["/categories/网站/index.html","39178fa26ef3f67d18009982d2302917"],["/categories/网站/page/2/index.html","4b2489b785dfa0a4820be6f854b8a488"],["/categories/软件/index.html","da6b9231366222999bd62484bb318981"],["/categories/软件/page/2/index.html","fa656fbfbc9c25cc8c35f69625e73392"],["/categories/软件/page/3/index.html","2a6818167a8c5923c8608ea01f2efd15"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","8a7eeeafb1b48770a4c80efc6fdfa1af"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","cde88049730f4804b72faf20cb3c7fe6"],["/ios/index.html","af95fe8a71b96691357c4c227ac16a9a"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","82b39d2e71549b281b9b651e3a67c82e"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","15ac666b3ae9fbec8af8e2f1c5828edd"],["/page/2/index.html","292874de11faaef097e3ce2c74d43e03"],["/page/3/index.html","473c37f8510d1cdb4ec4e13637658f1f"],["/page/4/index.html","edc5898b9cb7868f19c898630988271e"],["/page/5/index.html","c022be5e983de2f98e86b7260aa013f3"],["/page/6/index.html","aeca4d74670bdf23ce72eeac9712f445"],["/page/7/index.html","c54aad0ed6636f09524156c94843809f"],["/page/8/index.html","b0d561eeb86c686594a2797bda9164e0"],["/page/9/index.html","38c58ad84b136bf243018edcdb6935ad"],["/payment/index.html","389f40ffaf2c3283f72566190d26c1c6"],["/privacy-policy/index.html","426a2128cdc7c8b2b5791aa42317e0a5"],["/rss2.xml","a3fc1dff84d6a88186522d9225c9c7a1"],["/search.xml","87d754a1d7dc0e286f61f54f9f7ac0e7"],["/sitemap.xml","0675a017a834ec194cfb2fc09e20069a"],["/sw-register.js","e2c81adfcc7478b59ca98f2b371ad4e7"],["/tags/5t/index.html","1300d8c5ff3ddc1f7d02920ad9560575"],["/tags/Clash/index.html","cddb54610910cb958212b309c9f84cfa"],["/tags/Clover/index.html","43e7fc6ef255ed3eb5bcf38101120740"],["/tags/E5/index.html","0dc15021fcd9091f943fb9d2beeefac6"],["/tags/FTP/index.html","e9a61d8d5e71536d2d0cd06c184adb25"],["/tags/GitHub/index.html","92f58c990f78ef261356c0580bafad07"],["/tags/Heroku/index.html","35d6d02e4d74049952822c8dab44cc2a"],["/tags/Hexo/index.html","2d17f648c6cc99c15c9f271ada6accbd"],["/tags/Lenovo/index.html","339b3375696737817d1cb3576d0d7f18"],["/tags/Oneindex/index.html","84ccdbbd94f9122afe74bf630f5b6f9e"],["/tags/QQ/index.html","432b5d727b53027ac13ded6b8158f47a"],["/tags/QTTabbar/index.html","1f5d5e27b2022a5bfe5aaa4afc526f00"],["/tags/RX文件管理器/index.html","3a72e3e4a3a0639a1c27f9b427abd1fd"],["/tags/Todesk/index.html","f7238398847aee3d91fa660922650cb4"],["/tags/Vercel/index.html","5e70e0a670fd3b440526a2d68859a036"],["/tags/ads/index.html","d2e52f37e31873c36220fedc6d705c11"],["/tags/api/index.html","3b6cbad2e0e4a9e368335103201ae220"],["/tags/app/index.html","6c74568381890141d689e953dedc5779"],["/tags/blacklist/index.html","4001cae66c59a215d3871ab6acfb7455"],["/tags/butterfly/index.html","a58d26fe31f7f23bb9b3d9aea74d71f0"],["/tags/chrome/index.html","36f2fd8cf63aae85409b2524968a0cc7"],["/tags/cloudflare/index.html","96907041051af59885429766c7b8f622"],["/tags/cmd/index.html","4ddd8d901acce2e1400564373e285da7"],["/tags/c盘/index.html","8673c8f3434f658ace3cafd351b9ff5c"],["/tags/email/index.html","86f2bcae145e21c605e41ccd6e1c7e95"],["/tags/ewomail/index.html","0a856c8898532d303d2a1361a2c31790"],["/tags/fiddler/index.html","431a08c193bf65d2e4d46a6064510a6b"],["/tags/flags/index.html","987edb064e954805bd7bd1d407cf87c8"],["/tags/footer，页脚/index.html","e893a216434c07b02a2a7ff7d4140d6a"],["/tags/galgame/index.html","ec71f5877d908b3ae4951292fb3f88c0"],["/tags/git/index.html","b85bb35f32c580702b53d1269fd250d8"],["/tags/gitcalendar/index.html","a8f39eef9360adece166dbcddc465004"],["/tags/google-voice/index.html","047d7904aa860aef1da00b1059a72c92"],["/tags/gv/index.html","b473214e52883acef8c98cab41695e7c"],["/tags/html/index.html","869fe83a4c3d08f720d8b86c2a26a330"],["/tags/index-1.html","8141023f441cba96840b47585e8e2df7"],["/tags/index.html","b07235937c1641272c99b864cfabc153"],["/tags/js/index.html","3cd59832e3530f730e9bade6440f23d9"],["/tags/jsdelivr/index.html","d6bef8832b9240b30e168057f5bc9ab0"],["/tags/linux/index.html","734169dc244ba7446201399eae1e43b6"],["/tags/madVR/index.html","0e1a8a18113ec825cf1164eb18e3c462"],["/tags/markdown/index.html","ab184d9e91ec99c91a660a9fa67a4e65"],["/tags/maya/index.html","152f9246819569e521b3e6b6543554dd"],["/tags/mklink/index.html","02705394031410a36d0dfa88c8ac943d"],["/tags/office-e5/index.html","5d795fd844c23665535654c5d65a3cc9"],["/tags/onedrive/index.html","f870fced8ba36c4057b909ed87bc9929"],["/tags/picGO/index.html","e545904a7c315e5ca5489888e8b55a9e"],["/tags/pixiv/index.html","52963038c2f94efc2c06472cc983b530"],["/tags/potplayer/index.html","68ba6ed43f903c9211e1cf6a0fbcf9cd"],["/tags/proxypool/index.html","05c828b607a762043475df0432ab49c8"],["/tags/qbitorrent/index.html","ed1f7f146e7d580358e4894fed6c4b3d"],["/tags/raidrive/index.html","9e1859334c72a2a561f62e1d43c81fc0"],["/tags/screen/index.html","bee9c31aadf5a99ea1f23dce1057c6b0"],["/tags/speedtest/index.html","05e5e424f759d40a25f9ed940e9a62b6"],["/tags/ss/index.html","28be7f0faf1067477c0ad46925e53771"],["/tags/ssr/index.html","662e78d116c8350e411480bcc68ed1d3"],["/tags/surfboard/index.html","bc53199e76ad87ff5ccc1c32e44d68d9"],["/tags/tap/index.html","65dd0409129aaf7fd9c50224564afa91"],["/tags/telegram/index.html","b0b9745ff9be5f150734b2a543911b18"],["/tags/telegram代理/index.html","766affb305b3589c70d87a0c263b74e2"],["/tags/tg/index.html","773d7deb77a76fb0c283071b33c99f14"],["/tags/tg代理/index.html","f4285a2c6ef8b5649e1d7320b952b235"],["/tags/top50/index.html","79036fc497f1e5f7da123b783c7b9711"],["/tags/tracker/index.html","62032c06f48b2e78b5e344841011c409"],["/tags/translate/index.html","d3dc347fdadbeb6d11b5381c1dfacc73"],["/tags/translater/index.html","908406e176f5eabbb368baa897a359ad"],["/tags/tun/index.html","37cf63c5344a6457d477fec18cc17243"],["/tags/typecho/index.html","077437c0410523baf8971a3894e3bf31"],["/tags/v2ray/index.html","2742ad09892f08e76b042a31dd781550"],["/tags/vpn/index.html","d32ee0d75cbc5d0c0e0cecb83acff488"],["/tags/vps/index.html","06a4b918db2254931c63d3d6d4812a04"],["/tags/windows/index.html","bad889ec32399caeb1199929c8b7f57b"],["/tags/windows端/index.html","95b9c331dcbf8a35eac7eefc5c5f2351"],["/tags/xray/index.html","f6ba19497610ebcbca36355b6f1959b6"],["/tags/下载/index.html","257527bb21fb80b5fc81831584973f2f"],["/tags/不限速/index.html","3ba78204b47970a907c40356a0daf2f2"],["/tags/个人网盘/index.html","68d57d4bfd808ee4695d997374b60d3f"],["/tags/主题/index.html","291550d1a5dbbf34d21d42d47fb700a2"],["/tags/二维码/index.html","667a8b169838e11694fe9d10542de97d"],["/tags/云便签/index.html","55bc52f65c6981d67faa96aacb04cd87"],["/tags/云盘/index.html","83f59e4c9615869de7d0134b25f17fe1"],["/tags/人人/index.html","10ddc86295b92ed972fd4fcdd07cb0ab"],["/tags/代理/index.html","9dd1cb1f129ec0b0e204214fab4a2191"],["/tags/代码/index.html","86db3404a985aebb1aabd8a222c15a1d"],["/tags/优选IP/index.html","3bf5891aea261425aae122464bdcffcc"],["/tags/便签/index.html","a0de32defb3a3382bdbca0050702b2a5"],["/tags/保号/index.html","fa096c8c80932f8caa4764c1f8050581"],["/tags/免费/index.html","d266d4b67ee1cb4eec895bed24449525"],["/tags/免费节点/index.html","be1893474f0a3dc3c11a636413934e08"],["/tags/加密/index.html","09a82db663bbb741db7776f7ac11db6c"],["/tags/动画/index.html","5d0cab77e8baf43c97e7d0409aa7e59c"],["/tags/博客/index.html","5e6379abc0493e352d4956dc38cdc640"],["/tags/历史记录/index.html","125f980711f6cffb7c3334c99074f1b5"],["/tags/压力/index.html","9bd44c1b5b99709ed020ff7a086d62dc"],["/tags/压缩包/index.html","fe01e0b960056eb0d4754727f082e627"],["/tags/反代/index.html","159f974e89f4f8e54b9d7df5cc5974ca"],["/tags/可视化/index.html","e33df1dd679de2317f6bcf7380b0d908"],["/tags/命令/index.html","5555270fe7b14eccdb8894f419cb4665"],["/tags/国家/index.html","42b7d433e6d82ea7fbdb26be24d604ac"],["/tags/图床/index.html","b5e863983e043fa362b969b3670281c4"],["/tags/图片/index.html","b140f3f20203928c7817f75d39c47d21"],["/tags/域名/index.html","a39e4b4ad78e25ac29d54dfa84fca71d"],["/tags/多标签/index.html","a396ef37afbcf40952a7bc48d15a3265"],["/tags/存储/index.html","9800d348bc0d539459c252b7f18c4599"],["/tags/学习/index.html","aae4a0d813ed518711d49bcde1a1d410"],["/tags/安全/index.html","3eeb021d5571d56ee54d1cee5b79e55e"],["/tags/安卓/index.html","2c172a985094a998c6d841dc667dcb6b"],["/tags/宝塔/index.html","46d80f73ca41c4dd2bd35b153ac1c8e2"],["/tags/小游戏/index.html","702557897b82981862ada14daa521e6c"],["/tags/广告/index.html","fefc878fa27f6c86452b94a15fb5d2aa"],["/tags/建站/index.html","556f3b43d0a979205bbd3325bba07680"],["/tags/影视/index.html","87301fbd8c93c5389cb3bea5b26d2303"],["/tags/微信/index.html","47289a0c0966684bebe52d914db2cf4a"],["/tags/快速启动/index.html","e04c75eb234e8a7212e74ec059aedadf"],["/tags/手机/index.html","6b5b6b1c0397c81e200ad8c35b2f0a53"],["/tags/托管/index.html","03498fc446f70ba1bb4fb416bfdcecef"],["/tags/抓包/index.html","4104b993f10e43888c0fa3109ad69a29"],["/tags/抓取/index.html","040fa6e08c2811bbb7f44ae27b5d296a"],["/tags/投屏/index.html","8ff627978d8df26482083d0d99470fe5"],["/tags/拓展功能/index.html","9942c5da258389e40b6f549f2ee6e8ba"],["/tags/挂载/index.html","525293d49520b401d303d72eedb5b7ce"],["/tags/指纹/index.html","9fe6a8d14c032c8a3e7014be0f2ddec2"],["/tags/接口/index.html","0daa1d206f8259c022e37871c5931568"],["/tags/提取图片/index.html","beff770bfee9609c83bbe519f309f49f"],["/tags/插件/index.html","9458f79a74cd5a4c53cc443a1e872790"],["/tags/搜图/index.html","5f868993318f1e9df1b2b8554d816029"],["/tags/搭建/index.html","8538afcddcf0f16285a8c8527ba3dcc3"],["/tags/撤回/index.html","72a93386cb53f59803cb6e4b8f99d873"],["/tags/播放器/index.html","21bd75b5413daca59193cfaa2cbecd31"],["/tags/支付宝/index.html","d143025bc932d3f3df80d780007525b9"],["/tags/政府网站/index.html","746f0288854108f3292c928108602f9e"],["/tags/效率/index.html","d7cee1fca6c269a812c4406c3f82644b"],["/tags/日历/index.html","7669b217f7b020bf8cb6fbdc1fe8ebe6"],["/tags/服务器/index.html","a09932a79ab6479f0c7203096d8761ea"],["/tags/机场/index.html","1014c481ce987c8e6b3c03b0c08df69a"],["/tags/桌面/index.html","40bf388e8117fc2ac350179937570931"],["/tags/梯子/index.html","3756f717db0a4fcad2609c5bfc326b36"],["/tags/检测工具/index.html","e1eac3ffb086844a67c85bc04ee36c59"],["/tags/汉化/index.html","a4073b9f873769ff4b50647adf532ccc"],["/tags/测压/index.html","50911e5dc7bb192c5b422e4dbf3e89a0"],["/tags/测速/index.html","5a52dd91bd08d7145bf947a9b7829036"],["/tags/浏览器/index.html","58dfc861994da3be59c950e1cc78b31e"],["/tags/清理/index.html","389f2b573005c9fb00d4938d86230dde"],["/tags/滚动条/index.html","3f75f769170625275da198035d0fc372"],["/tags/灰色歌曲/index.html","23ae852ab50de34bc78dd609d5e7884c"],["/tags/电影/index.html","caba104d3f4d511e117c5898dcf29d51"],["/tags/电视剧/index.html","5a9868242cb2ee2500dcfd4feca752a7"],["/tags/白嫖/index.html","263c604e721b9a246fef21a2b92886ff"],["/tags/百度/index.html","b426252683a2c02265a74c699c7433de"],["/tags/百度云盘/index.html","d8394e8ead36c520c1b56d4e38c66e4c"],["/tags/百科/index.html","5a6cad919ac0eaa7d487fe77272f899d"],["/tags/短信/index.html","12dfe7cf09ab3947eafa0cf79f8cde36"],["/tags/硬件/index.html","aef3b49e903c14d341737a3172f45ae2"],["/tags/科学上网/index.html","41f0652991631b8408fa42a29485da31"],["/tags/空间/index.html","f1a6c1dea5d80c8bb74503af5a7623ab"],["/tags/笔记/index.html","80de155ae37f7056c4cf79caac81ffe4"],["/tags/简洁/index.html","d89d2d43c0345e7461f0a7c779863f82"],["/tags/简约/index.html","95962ccca6b4e77f03f5a4d874a02716"],["/tags/维基/index.html","f38663a59bd197e435208ea43c748ad4"],["/tags/网易云/index.html","6772d1b73aa0e25f6a285cec3f13d16c"],["/tags/网盘/index.html","1c0c53394aa5cdd2053e892bed5ab525"],["/tags/网站/index.html","b05c365d4482e325ecca111128d1e204"],["/tags/网络/index.html","bd0995a777ffbf98029bc089b7e00498"],["/tags/美化/index.html","d384875f461ed3c06d52f677d3d38b9c"],["/tags/翻墙/index.html","db78f042253048ca1ce91d78ec94d097"],["/tags/翻译/index.html","6adcb3a9a3cd0cb5cffdf3d64cf0dffa"],["/tags/翻译器/index.html","0faa53daf89f57d43bf039fdb731e74b"],["/tags/聊天/index.html","ef985ccbeff286891beb10ec8fba44b8"],["/tags/聊天室/index.html","06f753d6715c61dbe533051447d86d5d"],["/tags/联想/index.html","d5ab39a3dc5a2d9917808b1f4a0ae3cf"],["/tags/节点/index.html","d04046172008c300e46fce2f07495926"],["/tags/虚拟手机号/index.html","24d116743d3dc1f7e67178d8971af09b"],["/tags/补丁/index.html","baaebb737536dba13770d6bcb71f5036"],["/tags/视频/index.html","da2a024db3d1efd03edbcc3086c7237f"],["/tags/解析/index.html","50b7ec6031a013f45218c9d0e8028382"],["/tags/订阅链接/index.html","b725b7e8e679ce3b011308057c46715b"],["/tags/记录/index.html","0ecf4a5137131cec6b3a8a2ff394b7b3"],["/tags/识图/index.html","25b7aa6cd162d4e5e670cb00050c063f"],["/tags/语言/index.html","1451d7d4fff226302f7b3b560857275f"],["/tags/资源/index.html","204d42c1f284a450e239dcbb72fead47"],["/tags/资源管理器/index.html","5ae2a792e5253301bd473d495f911495"],["/tags/转移/index.html","a57eea6b7bea6d6a06697c9eea54c48e"],["/tags/软件/index.html","514545e9201e7843845bb24715933369"],["/tags/轰炸/index.html","53e70aae348c74eeb3e31a1efa894543"],["/tags/迁移/index.html","0cdc78dd547d29e023d765cd072ba65f"],["/tags/远程控制/index.html","cf548fa53fbcae5edc9320743deb4269"],["/tags/连接/index.html","21ebe9916bbe0da3f7ebca8d56ccbfc0"],["/tags/追踪/index.html","33f4d197433bd958f062d5da84d5f0bd"],["/tags/速度/index.html","6c61881a321af20e52b77f7c7818a2c2"],["/tags/邮箱/index.html","3c4d5f345761669214abc2f9fffd99df"],["/tags/酷炫/index.html","34ac0023758b877101204c440fa757e0"],["/tags/钓鱼/index.html","bc9a3c494840d24b536ff9447348aac8"],["/tags/镜像/index.html","3c850c7b6e9162394f08c452c948f81c"],["/tags/随机/index.html","b3da8915bdcfd0517ebaa3825d6e9661"],["/tags/隐藏/index.html","27753e3c2c755bac2117b7142543134c"],["/tags/面板/index.html","6c76ecb3f00216ee33672453abf1750b"],["/tags/音乐/index.html","3af930db6984f4faaa4b52e93b34f69b"],["/tags/高颜值/index.html","cc45b76fb34ed74c6dfcb60e2fd3c2df"],["/tags/魔改/index.html","50e8328054124cabbd687ff87f4eb66e"],["/tags/黑名单/index.html","c5b8011746bd6cff2ee0a49389ca7671"],["/urls/index.html","49f7d0e9da49f1e576417085da228969"],["/vps/index.html","d563f980d2132ec10d67f4d781ce9606"],["/支持/index.html","05af2518d4a1a793e2e08e6c0689072d"]];
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
