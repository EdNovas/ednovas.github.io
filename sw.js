/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","6e556f5f53c7ddc22f5fd66f771cd23a"],["/2020/11/29/clash-windows/index.html","107cf881ad2550007ba1eca54397b208"],["/2020/11/30/websites2/index.html","8b806cc890a92215c670bee9f3f744aa"],["/2020/12/04/iphone4s/index.html","b6eac6b078bb8c9fb6a48e57cb06adaf"],["/2020/12/04/onenote/index.html","45465bdf68a32de50909ba3a93bc6f6a"],["/2020/12/04/wesites1/index.html","adc603b999cccdcdd8c0b8d12d959f83"],["/2020/12/06/nokia808/index.html","b9be83a946fefec7c11202b9f08a498d"],["/2020/12/07/ipad1/index.html","0fe7566643651dee0ef2115ba0e4107c"],["/2020/12/18/freesubscribes/index.html","a216dd28c59c172e576a9a41c203c82d"],["/2020/12/19/musics/index.html","d2074384bda002510f6637380b4a04f2"],["/2020/12/19/shadowrocket/index.html","7dfb5e354ca45254cc8115f14901b2d7"],["/2020/12/19/v2ray-windows/index.html","0eba3a92912d6c408ecf545a068bacf4"],["/2020/12/19/v2rayng/index.html","5bd1065890fd9ece831995ca101bd452"],["/2020/12/20/beoplay/index.html","de8e11bc821de037e1b0c08dfb2f3de3"],["/2020/12/20/订阅链接转换/index.html","edb87c655c13f4c21fbb4a5f8ac697cb"],["/2020/12/21/chrome浏览器下载提速/index.html","329b64d135db6b2339a41f381cf15d4f"],["/2020/12/21/免费128线程并发下载xdown/index.html","32b105711fcc952339366b5863d11e30"],["/2020/12/21/免费32线程下载软件ndm/index.html","f9fb97ebd475ad528c9853f2119cc84a"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","ba3d546d2636b1a63fb1089d2f713d36"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","a34990f960c45253642264ea592eff72"],["/2020/12/21/广告怎么知道我在想什么/index.html","0665e9431b792ae9b066ce12fe027bef"],["/2020/12/21/无名·引子（小说试写）/index.html","e4c53a99ae77183ac520518ebeb5a0f1"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","5575879c46ba53a36b758e926319c9f9"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","ff12c12b65f990b90eccabca86f32b3f"],["/2020/12/21/高速轻量下载器aria2/index.html","8fb17866219a106c98fa687a9718db60"],["/2020/12/22/2020-cee-roo/index.html","f071679a5139f5ff5247df2782b77972"],["/2020/12/22/firefox插件、github、steam富强/index.html","0c9cb57117b0f894a0a676c629d67aee"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","404741ab1768e7808465d32b07daf558"],["/2020/12/26/python-day-1/index.html","5a247f5b70f650e49eb13c7840a22b2b"],["/2020/12/26/python-day-2/index.html","03653964065544f736cba2b894ecaee1"],["/2020/12/26/度盘不限速下载方式一赏/index.html","09c4053e7c5fe2575efae414604e21a1"],["/2020/12/26/添加开机自启软件/index.html","7c6014b8a808f9ad460a64abcb4d6530"],["/2020/12/26/电脑端截图方式一赏/index.html","721e1f6149ec1af8cb9d1c792d740a37"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","7d4913318437e0b85b463d14f4531555"],["/2020/12/27/最安全的浏览器tor/index.html","ef90e852bd498803e51546308beedb18"],["/2020/12/27/网易云刷等级和听歌数量/index.html","1ebfe4dfda48c43b2bfdf5efa629bf3c"],["/2020/12/28/freenom申请免费域名/index.html","f4c08d61e3e120b00f3144df6b0d49d1"],["/2020/12/31/机场/index.html","b04d6a325fa3ab62f75d67e74104b641"],["/2021/01/01/M1/index.html","af03799476b3c86a5147680f1fd058b9"],["/2021/01/01/compress/index.html","ae58e7ce5df44b24ff5bca52f5741bfd"],["/2021/01/01/infinityfree/index.html","2a8a33106f872b60ee653ebf88fb59a8"],["/2021/01/01/硬核翻墙/index.html","afa918727cfac3dedf9c8c0eeb11561a"],["/2021/01/02/qq/index.html","de0d82d5d37775f75e956e90398d3ad0"],["/2021/01/03/netch/index.html","897e24a91b875edf608df70d757779d3"],["/2021/01/03/waifu2x/index.html","d186a83c6ec7770e651ee2e13680d289"],["/2021/01/04/ads/index.html","67634a7ed71f53e0b204249f47cf5d02"],["/2021/01/04/games/index.html","d25f6e6685686c22c17c9d3b11f7e3cf"],["/2021/01/04/heroku/index.html","82df0bc533e116a29351d607aca4ea8d"],["/2021/01/06/movies/index.html","1d2d03d41a2bd7206222d46cae6326b1"],["/2021/01/07/google2020/index.html","6cd13251b9f546348bc355b71604bbd2"],["/2021/01/07/lucky/index.html","3d0d6e780a48314faeb1407be3927219"],["/2021/01/07/spotify/index.html","d4b29cb96896baeb5032cbe4e8d8536e"],["/2021/01/07/thunder/index.html","275d78097974c83269106d6fd59019e6"],["/2021/01/08/adguardhome/index.html","a034b0bfce2b9b10d7231d4322d0cc03"],["/2021/01/10/IBM/index.html","ab908f96255e43d4966ea232362cc6a4"],["/2021/01/10/potplayer/index.html","4dfd24544165d5df58890d214f033e25"],["/2021/01/10/sakuraanime/index.html","8ab15964a05d534c6dfd1f58ee408668"],["/2021/01/10/美剧星球/index.html","65ed59a6f16c193a208802ad476cf39b"],["/2021/01/12/telegraph/index.html","c8a566ea21508b565c0df71953071921"],["/2021/01/14/comics/index.html","d0e6197a44fc2ee7b831d4c9483a1089"],["/2021/01/14/ftp/index.html","9ca84e85cbacf32a9397a464a7b3a73a"],["/2021/01/14/oraclecloud/index.html","8debc6052528726568a03f45dfbb2aef"],["/2021/01/14/porkbun/index.html","ec7af1c5829dd0cac8aea5293eead44e"],["/2021/01/14/powertoys/index.html","6fdae25a51bb6a339f98718cb74956fe"],["/2021/01/14/taptap/index.html","5f7b019487a39489be39a806807dbb5a"],["/2021/01/14/ubuntuvsftp/index.html","97fb5687acfb13c84b9b040e00efe44f"],["/2021/01/14/小说/index.html","0bb1aac3bc0e76c00dfba0e69ca236df"],["/2021/01/15/freeproxies/index.html","e94c13c2db35349cb3a05b193d6d92a7"],["/2021/01/15/incaseformat/index.html","b22312f5c16fb46a834d4304df707ee2"],["/2021/01/16/euserv/index.html","4a96413ae6bc2cd8dfb0e9336b0dc059"],["/2021/01/16/winxray/index.html","8ee45d6ccddf4e183ec0f60d0753716b"],["/2021/01/18/qqreadhistory/index.html","46715aab3b5bd5a2c03ae0e66c9d6af4"],["/2021/01/18/qqrevoke/index.html","db30cbb40c01e7111caa8b54a8d8a825"],["/2021/01/19/freevpn/index.html","26b97e603af2c690901e2befb316caa0"],["/2021/01/20/browsertrack/index.html","e5c625fb6bc0077993fff6becf1f9734"],["/2021/01/20/v2ui/index.html","d750688cabd7c3127173ffac5249fd04"],["/2021/01/21/failedtoconnect/index.html","0c8b060523387d98697b38c3253b5d31"],["/2021/01/21/gitcalendar/index.html","df4e5808aaa0bed1a931682e379f28c5"],["/2021/01/21/markdownformat/index.html","cd1b6a4981691ad926fd3cd6a8e842e9"],["/2021/01/21/markdowntable/index.html","a8ee6d1570cbd1b223a1a0366ceaefab"],["/2021/01/21/vercel/index.html","f41d0787728ed55ccd1add414a98d99b"],["/2021/01/22/hardware/index.html","0cf47d0fae81d0132098a30029ba228d"],["/2021/01/22/muviz/index.html","6071d8cce4657ee2381ad662a6c851fb"],["/2021/01/22/randomapi/index.html","23ab4a73d50b3cb81caf3de8535eddca"],["/2021/01/22/searchimages/index.html","7c21afba0b4d2d417224bc961d4956f7"],["/2021/01/23/RX文件管理器/index.html","474797e07cf38047d43ab9d509dcbeac"],["/2021/01/23/chromeflag/index.html","c7adf5dbba00b1d55c161bc0b4cb53d0"],["/2021/01/23/qttabbar/index.html","e6f1e85494d0aeba4a3bfdb53d5a4a6d"],["/2021/01/24/githubspeedup/index.html","5e1b2181ddf027db0a757c2b5e20561c"],["/2021/01/24/jsdelivr/index.html","40cea60de0026e4f57a5c41de4fbe7c9"],["/2021/01/25/note/index.html","35059e5cefd21019109d6fbb805a68ef"],["/2021/01/25/soul/index.html","82598a3a0ca1ea72d5a911f6431f0914"],["/2021/01/26/herokuxray/index.html","3d7a23373bf6eba7f53b4363be8dddee"],["/2021/01/27/proxypool/index.html","ee1fec7e8c91e925120b22ca8fa4cffe"],["/2021/01/27/tracker/index.html","009eaebc72200b25c5bb842940e373a6"],["/2021/01/30/pandownphp/index.html","96c583f7a90c79b62d4e1af6331e84ea"],["/2021/01/31/newgroup/index.html","26a0f81a46741b6955edd6e9d17ef886"],["/2021/02/01/clashlanguage/index.html","b27a960c0ab017cc0fee16f2f70ecfbd"],["/2021/02/01/encrypt/index.html","e3847cbaab25ed9105e0bcd931a728b9"],["/2021/02/01/footermotion/index.html","e11021604b056fead951f50cb18a6467"],["/2021/02/01/gitter/index.html","7e44d133feb462b500f47f1e5255774a"],["/2021/02/01/pixivtop50/index.html","a43c838c6aa1757c2300f950a569d6aa"],["/2021/02/01/scrollbar/index.html","9dd06458ed27a09425ee6022c8c17733"],["/2021/02/02/clover/index.html","713b7e0ecb78efce20ba641bafc526fd"],["/2021/02/02/maya/index.html","a71d4b5e2c75ab2768fefdff46aec1bf"],["/2021/02/02/speedcontroller/index.html","e1542530b310e7138c9258db9963e9ad"],["/2021/02/02/yesmusicplayer/index.html","f4e22c9da70dcfa789ecff8b389e843d"],["/2021/02/03/lenovoonelite/index.html","061ee1e968821d3a6bb801c04a5c9b2f"],["/2021/02/03/skipads/index.html","6cd11d14fa1862af8410bd24a718df28"],["/2021/02/04/picseed/index.html","337b83b71c063e15432d9a4009e03803"],["/2021/02/04/renren/index.html","555d5573d88152fe9add174ac3100035"],["/2021/02/04/serverstress/index.html","9ef125ea3468251997f9a3593a0da03e"],["/2021/02/04/wikipediazh/index.html","90f5ae2fb4f4ae09c2b0406eae0eb9a3"],["/2021/02/05/googlevoice/index.html","63de0d87eddf2a8e69d65d767602b0c9"],["/2021/02/06/clashconnection/index.html","e5d1d239f3811b565e100a9155159bec"],["/2021/02/06/gvtransfer/index.html","2fce885ceccba90e210b5d0a441d18a0"],["/2021/02/06/todesk/index.html","d9f421c1284e1deda1d7b8e3e2ef57ae"],["/2021/02/06/vpnblacklist/index.html","520e13f722955f7529711838e4ae07cd"],["/2021/02/07/mklink/index.html","1bfc5664ee3db0d85aa663ccb8be0d0d"],["/2021/02/07/speedtest/index.html","8d37efb2921c30927493ea6ff2f09d66"],["/2021/02/07/translate/index.html","507c6c6b9b66a9f52d4ea88b5b2069ff"],["/2021/02/08/ewomail/index.html","af8d4f8bdf0befd51d1a86602fa0483d"],["/2021/02/10/officee5/index.html","389a730a4a38d52616aaf5736ab923fc"],["/2021/02/10/raidrive/index.html","e429a5d85370dc1430d250b4ff4d7122"],["/2021/02/13/e5sub/index.html","aa2a77f6adc7eb56186043b74395ce9c"],["/2021/02/14/screen/index.html","6674e6f0b7cb87beba73f2f90ffdac2d"],["/2021/02/15/clashtun/index.html","1f5062db04f6ab047b44fda0d1d91548"],["/2021/02/15/messageboom/index.html","616d20e6f3ab08db170eb96711a29d59"],["/2021/02/15/oneindex/index.html","476433ad81c5df034b1aeb20d432c9a8"],["/2021/02/16/govsites/index.html","5329368c6ccda42d5eac63c1c67f8243"],["/2021/02/17/hexototypecho/index.html","e6246e24d17459897155358e56db0e55"],["/2021/02/19/fiddler/index.html","587a5195bb808b7c95d4a10293591acc"],["/2021/02/22/potplayerset/index.html","db833db4cab6d7df825d6802fac68e14"],["/2021/02/22/studyresource/index.html","9419e1b42b4fe0f57fc75d516fd45399"],["/2021/02/22/telegram/index.html","480ac32c84fda9582a94e25f906cd063"],["/2021/02/22/videos/index.html","110bb40e09265a556452e26b0c0e407d"],["/2021/02/24/mtproxy/index.html","450ca5858baac224f38d1bdb6359794a"],["/2021/03/10/catchcat/index.html","788129f53172cd4896bf4c69a1201f18"],["/2021/03/10/neteasemusic/index.html","ede276ef82e001de4c30243fa49c58b5"],["/2021/03/10/surfboard/index.html","9bac98e4057a2b61c2bd152f801b95a5"],["/2021/03/11/vpnandjc/index.html","7052a524d12af2268aa6519f5a4a6248"],["/2021/03/12/qrcodes/index.html","83f4659ba5f985bd1f503c4ffc11eaef"],["/2021/03/20/qv2ray/index.html","e079dcc460eabbfdbb6348abc81c3821"],["/2021/03/22/freevps/index.html","30a61a848879104fd80df55bb2b0dc75"],["/2021/03/24/tgstickers/index.html","b525fa6740796ae0eae0012477a560e0"],["/2021/03/25/clashx/index.html","1a4dde60d5bcf6b9d304a3155308b1ab"],["/404.html","617b05edeafb36bb175e79c68f4ae5b9"],["/archives/2020/11/index.html","9329ce924187be45f504193839ebe3ce"],["/archives/2020/12/index.html","4a225e57e473bfb5d9759863810f3f48"],["/archives/2020/12/page/2/index.html","4e12de518268caf361d3e1d3e3f86977"],["/archives/2020/12/page/3/index.html","a236b9161e04e955c55544b9b95d20ea"],["/archives/2020/index.html","e064465b6e113a572e928109584cd0ea"],["/archives/2020/page/2/index.html","9abcd7fc74c8a707e7d914b5becf8c81"],["/archives/2020/page/3/index.html","a8f1c02f28cb9e01af3732c579fc377a"],["/archives/2021/01/index.html","9323333667829bb24c3b7e9b8395d4de"],["/archives/2021/01/page/2/index.html","e7ed2a3fe7e0291a6887f2320be8f515"],["/archives/2021/01/page/3/index.html","496b44838eea7ad8134baa137f62f5a6"],["/archives/2021/01/page/4/index.html","48513cb8c67b2b56e5a1f0e14b0ed8c7"],["/archives/2021/02/index.html","739e40a099087274133835e6d63d4f13"],["/archives/2021/02/page/2/index.html","80891827530b2d4b4954e0d072bdc209"],["/archives/2021/02/page/3/index.html","3bc7dedf39c0dcd993da65ea481a61e1"],["/archives/2021/03/index.html","a5e7347f9297706571a1067d336ea47e"],["/archives/2021/index.html","79ff0f06a98de0557732fb1ec84ac351"],["/archives/2021/page/2/index.html","b11759766d864785b86b5789cd5e5275"],["/archives/2021/page/3/index.html","2d0c6f9962a9a995d167d08b61562a3b"],["/archives/2021/page/4/index.html","c727731a71f9a62b5d7307b77600dcf7"],["/archives/2021/page/5/index.html","2b63257ae0fd8a5ccbab3ed541b9d56d"],["/archives/2021/page/6/index.html","7b06edb1e55229d6d8b422b8cfca7af9"],["/archives/2021/page/7/index.html","67f507525317b476b9b5a5ee93b90e6b"],["/archives/2021/page/8/index.html","ad89df32136b4abe8e1ab4169b5f403d"],["/archives/index.html","950137a22234d5c7a30d9b07e7799297"],["/archives/page/10/index.html","ff5649340673776f282ff9303cbb391d"],["/archives/page/2/index.html","8ad74d27bd5195ac57d432e08985da4d"],["/archives/page/3/index.html","0776d282cb6d0d073329ff67e07eb386"],["/archives/page/4/index.html","7db34aa4cedd724affbad71f65dc6111"],["/archives/page/5/index.html","6807f976ccd3c40cd3e76db9b6711d08"],["/archives/page/6/index.html","9e0a51de79d9d819deb6bd796d047bc9"],["/archives/page/7/index.html","18c5ad369b8d3a47389cf45ff554fe2a"],["/archives/page/8/index.html","d264426bb3c370c03218ae5c0f44cd03"],["/archives/page/9/index.html","b00f2640c7a9c9fdeb5b1101182d7262"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","a35707971754bbf2aa56ec8138569888"],["/categories/index.html","319b62c5092b5d28f8e7af48c1f40984"],["/categories/下载/index.html","82c05453eed691b7be0a69ff9e203b7a"],["/categories/安全/index.html","e3c1b8c32079542107026769181448ac"],["/categories/建站/index.html","4f61e16f5771f838ef74d2a016514f06"],["/categories/杂/index.html","444db65178f3d7c5a5a27a668a54b2a9"],["/categories/杂/page/2/index.html","c0c23d62ba7149ca901a3f27b3512e00"],["/categories/测评/index.html","c63c4dba673acd657905cb1aac748487"],["/categories/科学上网/index.html","0ec86b30faaf53fb69175dc992f7a1ea"],["/categories/科学上网/page/2/index.html","d974dced07afa8ee372848f2c51c53c1"],["/categories/编程/index.html","6bc21172e28c1445611c4ba6779b5586"],["/categories/网站/index.html","c2ac65d23c5cdae91bbd8ed24c74a986"],["/categories/网站/page/2/index.html","2d936c38bdae89cc37914fef3579386f"],["/categories/软件/index.html","69abf4fafb5d73d37e5b16e19417b751"],["/categories/软件/page/2/index.html","2cfc04e2471f3d6884f24d373fe9fdc0"],["/categories/软件/page/3/index.html","735152d4421273c0833c16f6f684b22f"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","e074eba524157a979f2d48dc6f7ad4a4"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","5345b12d5f1116d3de618100298c3b56"],["/ios/index.html","3e913ab3a9ff2b921751d054543ee6da"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","ca32103830fa0f62282572bbd1f7326a"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","9346c02ae6091d1e7396e3b0d74c58f2"],["/page/2/index.html","f850130ac8253d607803005547b402fd"],["/page/3/index.html","bece28eb2e912ad8e93e5de8bcaf9a66"],["/page/4/index.html","46cd195fad75c2629924003234c38fe3"],["/page/5/index.html","673ee0a5a064e29e0e9af3f4735b4c6b"],["/page/6/index.html","c9efc426f76b2f24d79b2ffdf193b695"],["/page/7/index.html","b1a70ee4ce987fd4126d836853789260"],["/page/8/index.html","47a3fbd94eddb3161c823f53e37c6012"],["/page/9/index.html","09a6369c4a3f3786f6a228972e4bac2c"],["/payment/index.html","e0bf6854e63e45804068f386a6c72999"],["/privacy-policy/index.html","aca6ae7e7d579b3caa7294bd5ec699ee"],["/rss2.xml","8d9d8b97f0c092af41be63c99caf5555"],["/search.xml","2c4feefa257288762219f2627d2c5a1b"],["/sitemap.xml","96100e7401fc3a910ed8b2a2a53d7f85"],["/sw-register.js","087d7cdcc2378c5915ac4f12423f49ba"],["/tags/5t/index.html","2c71386b29a74a35b5147b526fe696de"],["/tags/Clash/index.html","d26505952619e1bf3c40a2867923a83f"],["/tags/Clover/index.html","54120081fea81384bc9e5792d91d9e40"],["/tags/E5/index.html","613c3463efd0ed109100398965f0f4ff"],["/tags/FTP/index.html","148b3ad1fbc66a8deede7042bbb1f145"],["/tags/GitHub/index.html","9daa71b74022bd7fd8539ddfa7e75a84"],["/tags/Heroku/index.html","1adb95688a69b3057e47d214072b4717"],["/tags/Hexo/index.html","fe198f0054ef4b387cde23a96f71c281"],["/tags/Lenovo/index.html","d3fd0270e963b721ab1cf84b2aa8fff7"],["/tags/Oneindex/index.html","0c4ee7bb5b2720d7a28d7ddc2e352a21"],["/tags/QQ/index.html","cf002fc6b9a878b883deda9b782b4f75"],["/tags/QTTabbar/index.html","45eb815d8d5cfaa99aa3035c2549113b"],["/tags/RX文件管理器/index.html","4a4ecac38311d8e91313c0cd4077f38d"],["/tags/Todesk/index.html","0379bda69281653b00e82c48e63c2add"],["/tags/Vercel/index.html","cc98fe13a70c573b19c160714549f78a"],["/tags/ads/index.html","f33b90898a14cb4d77ffd4b20eb1f7f9"],["/tags/api/index.html","259f0ef0ed0ded1c70799747909d43ab"],["/tags/app/index.html","0bf1b57dcbef64b203da49817162eda6"],["/tags/blacklist/index.html","53bdf1bd05160c09797e0f8129248584"],["/tags/butterfly/index.html","34c2b2e764364b531659b72c4e06a2c0"],["/tags/chrome/index.html","22ecbbcff530f604b06f131c103ff249"],["/tags/clashx/index.html","8412339fdd1127a7cb5d401e8fb7bdfc"],["/tags/cloudflare/index.html","7382fc62d5a646195e1c1ff45c81367a"],["/tags/cmd/index.html","9fe902fbe234c97ffdd7fa0fe622913d"],["/tags/c盘/index.html","f8ea8b9b6cfd1da86d17838d85620a99"],["/tags/email/index.html","1d44e806f4fe7847f746ca63651807ab"],["/tags/ewomail/index.html","59aef46c7e08dee99479e966b8d31f74"],["/tags/fiddler/index.html","11e0be66254a18bf94a0424b3764c858"],["/tags/flags/index.html","fc99c8caac7971c23d2140fde9a38144"],["/tags/footer，页脚/index.html","0961cdda332619a95f7c18e474e535ef"],["/tags/galgame/index.html","2aecd7083ddf85c687953c446db9e19a"],["/tags/git/index.html","f353ba0e01fe22bf2057c08dc51d6a04"],["/tags/gitcalendar/index.html","3ec08671658aba5d0bb027019265371d"],["/tags/google-voice/index.html","c5110da9646345417d052df9cda0b34e"],["/tags/gv/index.html","5cf1455a79414132128620a7b6441443"],["/tags/html/index.html","a1bd1d2d193389ca4dcf397a83dcf006"],["/tags/index-1.html","e071ea7d9a1b5da7de3b0b73858f3262"],["/tags/index.html","7529400ae20534711ccdb8f557e48b9c"],["/tags/js/index.html","85234665fa833f7c2ce71590dcf190c5"],["/tags/jsdelivr/index.html","ac3ad4a9ff8b1a398e7d17553d881d4f"],["/tags/linux/index.html","41855e3d0d7093db1e809f8410d9fd94"],["/tags/macos/index.html","a9240fcaad56fed81c71c879d39ff9e5"],["/tags/madVR/index.html","5e80614a6276b8523831e8b849562ca7"],["/tags/markdown/index.html","d44e11099b4874ee45fc5d775eb32685"],["/tags/maya/index.html","0a9ac98c7fc3c5707705ece9ef724653"],["/tags/mklink/index.html","6903e944e2e1b86cc3c32dae0d1f4781"],["/tags/office-e5/index.html","8ed339e7f5eefe7aabcb386c96b2acc9"],["/tags/onedrive/index.html","3d573a8eb8b38f29f2a95c45e2da7eb2"],["/tags/picGO/index.html","e695ece0da916f1386d43ab683c2b1f3"],["/tags/pixiv/index.html","42004a47b02c3bc7f77eb505bc6ee9a6"],["/tags/potplayer/index.html","e5ec87540e50278e6d7ca2974d514680"],["/tags/proxypool/index.html","8651a6c04a8053ff1a36671f6477dc4e"],["/tags/qbitorrent/index.html","292ccd342bcde0d4d86c4f36b8ece300"],["/tags/raidrive/index.html","5ad289cbfb10eea3c5c3f249aae55695"],["/tags/screen/index.html","b84cf3f6895618a03e9316871a03e4a1"],["/tags/speedtest/index.html","870b5c72f42b3e45c0155e9afcc15506"],["/tags/ss/index.html","a86cf132fd0eed4e59bd2a81d64e535c"],["/tags/ssr/index.html","6d3438cb4fdac3505f44ed57e9680328"],["/tags/stickers/index.html","ee01cd7409c22cbbf8ead337b3398437"],["/tags/surfboard/index.html","8767683638a61b95ec7534ad127eaff9"],["/tags/tap/index.html","f2cee3a3c068933ec62bf540fa0bf09a"],["/tags/telegram/index.html","ba6958e7f0f8052dc34dc01ef7343da2"],["/tags/telegram代理/index.html","8816aeb5bdfed293b1fb091f397c176f"],["/tags/tg/index.html","562df7f79fa0cb00cc2fde36ab52fb6b"],["/tags/tg代理/index.html","b933000bfab1e47d438b12947899f8f4"],["/tags/top50/index.html","9e497918937099a2bdea5e0d5bb116b2"],["/tags/tracker/index.html","3c13f659814432410686db5950fc4edb"],["/tags/translate/index.html","5a0fa9eafaa83e66965ea2a8fc1a1c8b"],["/tags/translater/index.html","d83dc03292b7234aa57f935030e7a0be"],["/tags/tun/index.html","83dd51938b8a34b04df71c34ec01d036"],["/tags/typecho/index.html","4fa1344700f1e79690a15b6d39e2d4af"],["/tags/v2ray/index.html","5f186d86f9e3211fff5ab0c3f6a47d79"],["/tags/vpn/index.html","5cbb27880eb81b7bcac88a8c08a09ca1"],["/tags/vps/index.html","a2c7c93cea40fc38223b31e71bc2ca65"],["/tags/windows/index.html","2d8c7c0a6455ef370f775f2729931199"],["/tags/windows端/index.html","fc3e0421229ca1e09cae4875e9019309"],["/tags/xray/index.html","0ebbf368338fbc4abef1578f247151b5"],["/tags/下载/index.html","16b30f462e863b56e1446b31c37e93a8"],["/tags/不限速/index.html","ab52c6e38b1d6997548025a08719acaf"],["/tags/个人网盘/index.html","6bcf831e3a1c772d718db22770048a38"],["/tags/主题/index.html","2ec1a001db512271892d69a6ce25a329"],["/tags/二维码/index.html","1ca0eaf53e230625593d0e667d059fa4"],["/tags/云便签/index.html","78cb76b2a90a9c8fcd5ebed045d9a89f"],["/tags/云盘/index.html","adfc883e7d35f27dd0445ac23eb5c6d1"],["/tags/人人/index.html","042fcce867ed5d3c342886e5c9b2c3ba"],["/tags/代理/index.html","ab409e15a98e1c03764c4b79c31a3444"],["/tags/代码/index.html","641062cab982cf73c9990bb4fdcdb353"],["/tags/优选IP/index.html","6753c3933fda4758b85b84327f4604bf"],["/tags/便签/index.html","7d60ea28310ef7d1337cca24255f29e3"],["/tags/保号/index.html","bd1c3b0b6135878789b834d8e1d9b27c"],["/tags/免费/index.html","8829aba3aeccda4be385918cc8c014a5"],["/tags/免费节点/index.html","abb5a354554f85fd1353739b1ab77de4"],["/tags/加密/index.html","1047952434ce983d6b1aa8e70f4ad5b6"],["/tags/动画/index.html","47c405736bc8d13eed096316be10998a"],["/tags/博客/index.html","096b99819b2d49fc2d3a0f9c18452bb6"],["/tags/历史记录/index.html","9a1f2ce068383eabfc71fcbe769c96d7"],["/tags/压力/index.html","82140df46c9553b87c60fa4f7a004216"],["/tags/压缩包/index.html","5f5abe4d1af721ebc6bc792cc1e7e36f"],["/tags/反代/index.html","69113cd23b00c0e63c16ce17ff5e75d1"],["/tags/可视化/index.html","6b5befa5eee26e1006e5bcd02c68bfc7"],["/tags/命令/index.html","18b9eeaa5ef3200bbf280701dcbb164c"],["/tags/国家/index.html","8f0416f9eafcbc99ae53b2708a15dae5"],["/tags/图床/index.html","1833ec8b30817a605627bc8308fb95fe"],["/tags/图片/index.html","79f8b3b0fb68fb73c25f0c5b946fa086"],["/tags/域名/index.html","b37bcee91a42b62a72f671400b93132b"],["/tags/多标签/index.html","e43d2040950451b0fff5520e0471de0a"],["/tags/存储/index.html","a327d85d5c6e85cf0362811d5fd91095"],["/tags/学习/index.html","c221b67d8ab5a2e8882d3f362d6c6c08"],["/tags/安全/index.html","1ee3b3111632b64ad4e961e9dc4f5f4a"],["/tags/安卓/index.html","fc125029d56c7ca33dbff24666a8051a"],["/tags/宝塔/index.html","3e171a7354880ba7a7f8c4a60c797b3e"],["/tags/小游戏/index.html","f4e1f46ad8bcf500c590c6a2a7be6c19"],["/tags/广告/index.html","8dadfb96bbc5b408c0b003f74eb99979"],["/tags/建站/index.html","a7c37eca6235f7a04889e1e41d57bf7f"],["/tags/影视/index.html","0edbbd459c665f991dd3191e12b072c5"],["/tags/微信/index.html","ef9ee6bcf626a5c4085dc54015bf4f22"],["/tags/快速启动/index.html","24404228806b03bd17d182662721fa9c"],["/tags/手机/index.html","bd9ccef6787052ae90773af217647eb7"],["/tags/托管/index.html","c85e01bdd9fff62bafff314dfef289dd"],["/tags/抓包/index.html","59d2ea922d63d679ef18071effa1cfd8"],["/tags/抓取/index.html","4025a6f88d9b53e05328de716b5199c9"],["/tags/投屏/index.html","533bdf00ae3d93ae3e4bfeca71afaf52"],["/tags/拓展功能/index.html","f34891ad478628d631fdd9f1963eb215"],["/tags/挂载/index.html","9f4a650dd8cab6b2699a5d84e9384337"],["/tags/指纹/index.html","6d9c8e97da65d5b41363a6d479eddf25"],["/tags/接口/index.html","4e0044c7c80c3e367d6718eca6ecd745"],["/tags/提取图片/index.html","fe341c1537009d223500bd255297f8a0"],["/tags/插件/index.html","e0d77d4f7a74a4a363cbb3747ff5f2bf"],["/tags/搜图/index.html","1d07d4d0c0828fd969b1e2eee5c7db80"],["/tags/搭建/index.html","c76a86ab1061f48a5755eec7b5a4f35c"],["/tags/撤回/index.html","0592703b21a96faa34d80604871c371e"],["/tags/播放器/index.html","28ac63b316405a68e9531238e1a60cb5"],["/tags/支付宝/index.html","9614f627823d0155adcb1340b76065c1"],["/tags/政府网站/index.html","0c989979bc4fb4d326ba34aa8ebbff4a"],["/tags/效率/index.html","1784c4cd6075fd1b16e7489033462fcb"],["/tags/日历/index.html","6437caad35a5d77d16602fce224f331c"],["/tags/服务器/index.html","c4d2d0e25d3939294f7d470b12513322"],["/tags/机场/index.html","0cf24a3e92c35efcf31e356d998f4b43"],["/tags/桌面/index.html","d243dfff0dfff89cc2d8ead33a1c7a70"],["/tags/梯子/index.html","0d24e1880fb3efde9da2d96956e8c846"],["/tags/检测工具/index.html","645ea6c0ac8790774bfbaee58da35ac1"],["/tags/汉化/index.html","582a51df07a7ec15e0c5990407cc80be"],["/tags/测压/index.html","cd3202ba52cba8ae104d32a8a4f6d2e6"],["/tags/测速/index.html","9acbfd6dd3920caefe7fa4c096a097a1"],["/tags/浏览器/index.html","4cb759a938f41fdfe0aa10eba2895cf9"],["/tags/清理/index.html","95d05be6c3d55d951659ef73d753bcb3"],["/tags/滚动条/index.html","870f90c64ab6bb6ea66871d43eaa7275"],["/tags/灰色歌曲/index.html","8da97bb8260bbc29b591b4f9fb06189b"],["/tags/电影/index.html","fa296273a92a611b53e96537571150af"],["/tags/电视剧/index.html","85ce49360b025cc96d3f6781657301ab"],["/tags/白嫖/index.html","6f76f7fb9767c5e308be9a81113db958"],["/tags/百度/index.html","fcbf6c2bf29748696bce68816e9e3233"],["/tags/百度云盘/index.html","c9fce7ef3bfdefa00f3680b1686f50c5"],["/tags/百科/index.html","9ddb2dff711e50235d9d49d6017689dc"],["/tags/短信/index.html","90a86f1eafe08f44ebec3acfab16d750"],["/tags/硬件/index.html","24520b25fd6fe5f3ecbb9767825396c4"],["/tags/科学上网/index.html","e9555525e3c33254f4c9bb3022eabdf8"],["/tags/空间/index.html","8215d262f4ac4fc28b36951aab84f1d6"],["/tags/笔记/index.html","036100dcfbf489145aa96dd0bc6bc238"],["/tags/简洁/index.html","6e9d54117a6a53bbd897345bf9b7d0c4"],["/tags/简约/index.html","7065ad6efe34974fda24a844c7fd05b2"],["/tags/维基/index.html","ab1d9958853f0368b7c9dad18dc46d1a"],["/tags/网易云/index.html","2f20ce7e3881432095f719c835d53e88"],["/tags/网盘/index.html","bfc1b46993f15adf616816522e48706c"],["/tags/网站/index.html","242faec4fd0c522465135f41c5833608"],["/tags/网络/index.html","cc89f9e81fd0d589802439d77ec2e979"],["/tags/美化/index.html","920af725d9b106510f6579c9f28c1465"],["/tags/翻墙/index.html","c7425631f3c90ce61bfe1221bc182b82"],["/tags/翻译/index.html","e3e88a1cd693fe0d8d853f77bd4044d3"],["/tags/翻译器/index.html","480ce915dcb571d9afd9f0c7e2f698b6"],["/tags/聊天/index.html","1f9cd7ad0bf45c23ab4ca161057aec53"],["/tags/聊天室/index.html","491c9b5e31e422a1d2e513a44bf16d9f"],["/tags/联想/index.html","2f115211be1b32812034d6000649275f"],["/tags/节点/index.html","61cc176ad9d183fdd09897841512b849"],["/tags/虚拟手机号/index.html","ce89fc7bd8e894901f52f626a74415c0"],["/tags/补丁/index.html","15de02f9a477f4835c748b0338bca8bd"],["/tags/表情包/index.html","6aa118eeeb560521fc57bbef51560198"],["/tags/视频/index.html","c714726954cd33785d77161e11596608"],["/tags/解析/index.html","90d0a41ce2d4df2ec4533e28884c2a78"],["/tags/订阅链接/index.html","16783e88b0f91e5e6b84429878414750"],["/tags/记录/index.html","b3b0e4f34b9bb80edc67aeec55562c9b"],["/tags/识图/index.html","c4b206e359e364f9d097512585713b72"],["/tags/语言/index.html","80820d8f9ec3adaebd94f30f9c90adcf"],["/tags/资源/index.html","44a0bb1e9beb0874fe73c47e7e957331"],["/tags/资源管理器/index.html","25fd02aa55e7269c5aa65beeb7fab14f"],["/tags/转移/index.html","8f295fb76660a31b12d94367ead15023"],["/tags/软件/index.html","3a70d6abea93864a426dd42ffa5853f7"],["/tags/轰炸/index.html","7cbfdc717240c4b31306b336ac3dc21c"],["/tags/迁移/index.html","079c8f6fa7f93cc5efa3691cd637dc60"],["/tags/远程控制/index.html","17398033fab4ba4a18ebcf170295f87e"],["/tags/连接/index.html","a000a729beac04f8dbc3c499aec81749"],["/tags/追踪/index.html","1e271e2e6f8182dadc404a4020a18e96"],["/tags/速度/index.html","83dfa723ca5bb24e4c119bb89dca7656"],["/tags/邮箱/index.html","d1b1a60525233173393d01f7600453ee"],["/tags/酷炫/index.html","c091e127ad62818a73b08ec0a60b199d"],["/tags/钓鱼/index.html","0fe748c936f9cfc52ea55fc2aa67574e"],["/tags/镜像/index.html","ca8f9209fe58d8a008f9ef1aff5b6556"],["/tags/随机/index.html","ec680a88c7cd26470d5a25544dc950a1"],["/tags/隐藏/index.html","8c031c4cfe20ef77e712d66dee8fa468"],["/tags/面板/index.html","ff97ce5f8f85f2bfb475f4cb06a847c8"],["/tags/音乐/index.html","e62e7014a50f3a17225165c2cb9d4cd8"],["/tags/高颜值/index.html","40ea558c8c68e77a940244b9d3b508c1"],["/tags/魔改/index.html","3e1d53c94f395f5d59d9411da265e6d1"],["/tags/黑名单/index.html","3e93cd56212c1b97ee2a08cfdd1592aa"],["/urls/index.html","3db3a56aee8b4fc3e0b0595540baa6b0"],["/vps/index.html","cdf3b881fc31ecc2c474a277821e0b82"],["/支持/index.html","38a0e72a5a997d952cd667bc6b2ad97c"]];
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
