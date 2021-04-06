/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","dd151f877e0e5b177b47c6eb2f221e82"],["/2020/11/29/clash-windows/index.html","361d3f239f01a728645dc203d568c98f"],["/2020/11/30/websites2/index.html","5b1725bbc70fbc8daf21e38bf3a38dd7"],["/2020/12/04/iphone4s/index.html","40a98ca210134dacf92dd2853de9c254"],["/2020/12/04/onenote/index.html","e6e6ad2870a2af13c534fe79555745b8"],["/2020/12/04/wesites1/index.html","c5086915ad42ac8c4dd5131cf2b58e2d"],["/2020/12/06/nokia808/index.html","5407cded169e7b371fb0bd2f414aaa47"],["/2020/12/07/ipad1/index.html","5f8819987724a89990a4e14eb5c5d8b2"],["/2020/12/18/freesubscribes/index.html","a0808318821d99dc6489534acce80c76"],["/2020/12/19/musics/index.html","22d6fba4f1caa888e159ebccff16ba6e"],["/2020/12/19/shadowrocket/index.html","e7871107676894823616b685aab89b79"],["/2020/12/19/v2ray-windows/index.html","b5ac193267614576aec63c86dcaa0149"],["/2020/12/19/v2rayng/index.html","198602e74ef7ddc941da9a358c1da976"],["/2020/12/20/beoplay/index.html","079facc2ce3a72fcaa824655c48ad528"],["/2020/12/20/订阅链接转换/index.html","073f70533a30406475b21102a902ba5f"],["/2020/12/21/chrome浏览器下载提速/index.html","fbb717f4a3349a63e613ebce0d0d023d"],["/2020/12/21/免费128线程并发下载xdown/index.html","da200abecc16a4461d626ab25e6af4d2"],["/2020/12/21/免费32线程下载软件ndm/index.html","a8e83d0760a2eb3bd1e5229b41158c52"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","4d9e93ec5a41b3e51ee2dee27a5c34ab"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","d5454c5583adf340ff34073aa921da67"],["/2020/12/21/广告怎么知道我在想什么/index.html","1e2ac29bd796697e5375506d544a075c"],["/2020/12/21/无名·引子（小说试写）/index.html","89cfd24f2d4095dd51937643245eec0d"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","897f08c64cc9dc8d1b34299ae6d273b6"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","ee465c7387ffee4ebf49562543b05b06"],["/2020/12/21/高速轻量下载器aria2/index.html","1428e93bd325fb1be4f9f2d3bacbca4f"],["/2020/12/22/2020-cee-roo/index.html","e9b10d9b288bb957a09fb0455c173dfc"],["/2020/12/22/firefox插件、github、steam富强/index.html","3804767901cb7b60c213ab5bcbce44e8"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","74840abf3af20a84c0fcef0b95585c66"],["/2020/12/26/python-day-1/index.html","0b087f9369d32a4407175fb236cb2596"],["/2020/12/26/python-day-2/index.html","8f6e6775ed50546120dbc3684c166aec"],["/2020/12/26/度盘不限速下载方式一赏/index.html","20f648eb0c63527aa107d67aaadbf394"],["/2020/12/26/添加开机自启软件/index.html","5cb3b1ed241e175a990c6c726fa2d35c"],["/2020/12/26/电脑端截图方式一赏/index.html","b337024d1d9d8088fd4ddbc5f557a811"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","5b7dbe63dcbd70e0a03639c7beaeb91b"],["/2020/12/27/最安全的浏览器tor/index.html","dfb600177869a2be767d01182a1da44d"],["/2020/12/27/网易云刷等级和听歌数量/index.html","cb473b133d853a374557d815d231226e"],["/2020/12/28/freenom申请免费域名/index.html","2517e17af9c23477bc0fc60cb4e5150e"],["/2020/12/31/机场/index.html","3b8a2207333529d6a46fca76c2e4c765"],["/2021/01/01/M1/index.html","98807ff750d911ce10f5e2968e9437fc"],["/2021/01/01/compress/index.html","952ba35d754ecf062ad1e5eb754eded8"],["/2021/01/01/infinityfree/index.html","a43555e2fb15cc77958469b70dd1bcfb"],["/2021/01/01/硬核翻墙/index.html","18de0e3d9df157f30ed4e674e004fe1f"],["/2021/01/02/qq/index.html","5531db599feddf9b74f10db9281a3b8a"],["/2021/01/03/netch/index.html","d6cd6faebe234d0c622050130f9dd3df"],["/2021/01/03/waifu2x/index.html","10789881e761bd69e9cb4683bf356078"],["/2021/01/04/ads/index.html","7c1ef592e2106147cdfae7d85ae17140"],["/2021/01/04/games/index.html","b8a761115d3a799c7cdf82f9f2345377"],["/2021/01/04/heroku/index.html","81008e515f7f36ca823940de447a9111"],["/2021/01/06/movies/index.html","5eeddf8ca65fa5ac5b9ac18a283b6165"],["/2021/01/07/google2020/index.html","b4e421199344cecd04c71fa71a82d6dd"],["/2021/01/07/lucky/index.html","284b18a777efee09df3fa58c23a313e5"],["/2021/01/07/spotify/index.html","ec79e6c09e48e91b4240ed9fd4a4d983"],["/2021/01/07/thunder/index.html","1ea1afc01f3f47464689b7bbf6589e96"],["/2021/01/08/adguardhome/index.html","422de752070f42d3089896da5d7e03dd"],["/2021/01/10/IBM/index.html","166379e9c17d763bd361b08e72cfe5a3"],["/2021/01/10/potplayer/index.html","7e5b357cf9f55a4cc7687642f2b31421"],["/2021/01/10/sakuraanime/index.html","b90c4299deb053aaca3cac49d4ab69dc"],["/2021/01/10/美剧星球/index.html","10bf8fa47578459c55b40ad1022cd61a"],["/2021/01/12/telegraph/index.html","eb0b589c2d1094c9f03eaa6a7141fc38"],["/2021/01/14/comics/index.html","2acf0b43f3a9b2006a6ab20db2ce89a3"],["/2021/01/14/ftp/index.html","37cfd0a28b78ee79eb42f2e975eac060"],["/2021/01/14/oraclecloud/index.html","d4bf8858da750f3f439bd0389fbdd983"],["/2021/01/14/porkbun/index.html","419883fc8dafc97b1671d9287e822399"],["/2021/01/14/powertoys/index.html","cd05b3f13c00f6056902622875808d5d"],["/2021/01/14/taptap/index.html","0f04e2c757e8d80c11fe6fc167af37f7"],["/2021/01/14/ubuntuvsftp/index.html","232e01023091c365fbd5300029375144"],["/2021/01/14/小说/index.html","53c18dc08542672208858fef8521e510"],["/2021/01/15/freeproxies/index.html","81a52f113d90d3112508f95b703976b5"],["/2021/01/15/incaseformat/index.html","f32862ec1bba887c4c36da75a32266a2"],["/2021/01/16/euserv/index.html","e66628342aec086657f40f66ea9a80c9"],["/2021/01/16/winxray/index.html","73ecd0a549a344cf8bc5b5232564b311"],["/2021/01/18/qqreadhistory/index.html","ffec5b89cb1554e32f2d33a08d632148"],["/2021/01/18/qqrevoke/index.html","20cb035350d309157055a5e0c13f2905"],["/2021/01/19/freevpn/index.html","6b8d5fbddab82ab9b626ac5a092edea1"],["/2021/01/20/browsertrack/index.html","a58a29ebda6b4ac48f6a3732b02d35d3"],["/2021/01/20/v2ui/index.html","3327d5dd29be057afc941ec4af788df6"],["/2021/01/21/failedtoconnect/index.html","7ca826055e4cd1f2c18e1f324782bf7d"],["/2021/01/21/gitcalendar/index.html","f3f4ac41cc39753515e1be90c6905aec"],["/2021/01/21/markdownformat/index.html","baa332d5ad0d05611b22164fcaf55a2c"],["/2021/01/21/markdowntable/index.html","f124a6370aec5bd362124a88ce9128ac"],["/2021/01/21/vercel/index.html","f00d7ba7916739c458e52ff42c0d54bb"],["/2021/01/22/hardware/index.html","5cdc7af37dabb82d2fa5c809dc208f04"],["/2021/01/22/muviz/index.html","41b230d75aa7ccdb48b06fbb9120386d"],["/2021/01/22/randomapi/index.html","8f2a4210390a3cdfcf383761ac7a99d7"],["/2021/01/22/searchimages/index.html","f2cd58c52a848f4e5c6427cb890c69a5"],["/2021/01/23/RX文件管理器/index.html","b76e72271e09a4881008800ad68a748f"],["/2021/01/23/chromeflag/index.html","00abc2bf16f13c4439b8b57fad95ce3b"],["/2021/01/23/qttabbar/index.html","4bd428ee962d0c23a07844298a9bd8f6"],["/2021/01/24/githubspeedup/index.html","bd4b9e1defced4c02d5fcb539bd01737"],["/2021/01/24/jsdelivr/index.html","31285ef653ed4cdded824dce147dfcc2"],["/2021/01/25/note/index.html","6f3491ea3b08e8914ed2452da2d86c61"],["/2021/01/25/soul/index.html","606496e0237152a715942b8ac184eec8"],["/2021/01/26/herokuxray/index.html","6c1d95560d48cb5de9bf444f99e06ea4"],["/2021/01/27/proxypool/index.html","feada2cb929e15e64e04ce7bd7d1e027"],["/2021/01/27/tracker/index.html","77b4da4d855244f9074f20c1e1829b20"],["/2021/01/30/pandownphp/index.html","1d48a5906aa6505e8d0730c38a915ce3"],["/2021/01/31/newgroup/index.html","0b3e52f8990832bc55b011700214bc63"],["/2021/02/01/clashlanguage/index.html","d5cd335b7618570ddcd51a001028f783"],["/2021/02/01/encrypt/index.html","b6431b1fd6d5ae48308a1a1abc0e01e5"],["/2021/02/01/footermotion/index.html","72115516428c76ba061e9614fa46eac0"],["/2021/02/01/gitter/index.html","09106d8d9c67847c4b7060e0a207cea2"],["/2021/02/01/pixivtop50/index.html","a8c5184053671942509f05ebe86e6482"],["/2021/02/01/scrollbar/index.html","e5b5267ae7b11290e30af73a6b3425ba"],["/2021/02/02/clover/index.html","48fb437cbce4b033fcae8b426d738025"],["/2021/02/02/maya/index.html","603cdcf352a91e4aa3375e6dfdff28e3"],["/2021/02/02/speedcontroller/index.html","8da4d6bbe9d0f27b505d2e67b8cd4026"],["/2021/02/02/yesmusicplayer/index.html","230a7e17118b18ae0ef575cf5618bca4"],["/2021/02/03/lenovoonelite/index.html","76566b3475e5eb2cfb82f09d0eb2355b"],["/2021/02/03/skipads/index.html","5f4c4e71151cb8b848b165cb1e25b885"],["/2021/02/04/picseed/index.html","2251669ad3f16d8131b8f6070d39f36f"],["/2021/02/04/renren/index.html","9882be7a30e819d8aba9e37684833f65"],["/2021/02/04/serverstress/index.html","390a715162d178c8f7c84343bddb4ed1"],["/2021/02/04/wikipediazh/index.html","1a91dd2cabb1ea587ff7f7c5e2e07d51"],["/2021/02/05/googlevoice/index.html","0bac606a74a199827d792734b9c00071"],["/2021/02/06/clashconnection/index.html","35850a309ed27e29b0bf902a69b0a249"],["/2021/02/06/gvtransfer/index.html","387ca4bcd00f55d8f9414071ca2ee0cf"],["/2021/02/06/todesk/index.html","60d1c49a51df05d400d909366e090314"],["/2021/02/06/vpnblacklist/index.html","7bc2b27c4e5954cd4adcf36e97481108"],["/2021/02/07/mklink/index.html","bc6164ca889c25fa676b54d38b032dd8"],["/2021/02/07/speedtest/index.html","f9942e3e86d4111cab2a4e933919e643"],["/2021/02/07/translate/index.html","2ced0b6036fd9b832d397c9d40d68791"],["/2021/02/08/ewomail/index.html","75aa45e08070817d474589178fd31f86"],["/2021/02/10/officee5/index.html","e81e07ed630b7a736ee74ad9235ecc9a"],["/2021/02/10/raidrive/index.html","8af5cbadbd56929fd0aabea671ca50e3"],["/2021/02/13/e5sub/index.html","203fb8e84387929b0fcd15bb509298f6"],["/2021/02/14/screen/index.html","f14071abf91f948d05b8fcdcb6bc7a19"],["/2021/02/15/clashtun/index.html","179aabbc4f76570997bdb910b85cf67c"],["/2021/02/15/messageboom/index.html","a2d4a71ac795bc91f6b31cb7a368fc25"],["/2021/02/15/oneindex/index.html","3d7e4744ab56fc237195c9dc9f6a8e47"],["/2021/02/16/govsites/index.html","781eac40fd6d9f2f23478464b922cef4"],["/2021/02/17/hexototypecho/index.html","806962c63195470ed9ffc20877df9a37"],["/2021/02/19/fiddler/index.html","015d8a0604b97b98a5f9543060a3b295"],["/2021/02/22/potplayerset/index.html","ecd1e42dcdce1c5d1de26f76c87f24a8"],["/2021/02/22/studyresource/index.html","8eddc32b2a560754898160caef330930"],["/2021/02/22/telegram/index.html","4d8438d8a356f761fb88a0ee4bbfc53a"],["/2021/02/22/videos/index.html","ad013fc81dc326c3314a458f442c06a9"],["/2021/02/24/mtproxy/index.html","f0ce00b71ef5fb1c5917df46d6b7a0f7"],["/2021/03/10/catchcat/index.html","e8d9fb35b079d98c9663084c98b605a2"],["/2021/03/10/neteasemusic/index.html","aa29c69dd4aa0f98da8d0fa491c8e195"],["/2021/03/10/surfboard/index.html","7d68d2056f84eccb17af4f125453c66d"],["/2021/03/11/vpnandjc/index.html","1575c81952e066f1f657be5d0fe4a40c"],["/2021/03/12/qrcodes/index.html","e264be9241442b781a669756f51ebcc8"],["/2021/03/20/qv2ray/index.html","68ac0276170ef703f2e5bfd78f7b16b0"],["/2021/03/22/freevps/index.html","6c1d7386a0c7ecb0ac4d12eff1255d4e"],["/2021/03/24/tgstickers/index.html","f4c7e19f10c0e162b880e56338522e96"],["/2021/03/25/clashx/index.html","ae14fb893a1bda9d3a80fb16d293f146"],["/2021/03/26/bingwallpaper/index.html","ac6e23de59d92a989e3ccb9896a350a5"],["/2021/04/03/soutu/index.html","b1ad8c588276242a099d303b31aa784d"],["/2021/04/03/tiyunti/index.html","7fa41274d68a859e1ec7154c527ca403"],["/2021/04/04/btpanel/index.html","c1133a51f8fdf2affd1f2bc7f1332311"],["/2021/04/06/atlasos/index.html","bb6a6e3702b97534da3114220c1d760e"],["/2021/04/06/cleaner/index.html","1152da5f046a21ea38b8de1ea7cfa27c"],["/404.html","8047042bb81cfd0bd7d98a14286dc8ad"],["/archives/2020/11/index.html","b56f737aabeecdaf7c1ae48aba215c94"],["/archives/2020/12/index.html","bb55572520528851e62b20aa38f84cdf"],["/archives/2020/12/page/2/index.html","b567ec4674f6910981768af6b415af18"],["/archives/2020/12/page/3/index.html","748b1b10ee60146210a30e476468f703"],["/archives/2020/index.html","9f3f81f4b39693cc666e4edab24dab6b"],["/archives/2020/page/2/index.html","8f0c5624529fb4efafea2c3eafdfad24"],["/archives/2020/page/3/index.html","730374b51607340e272adc199c67e14a"],["/archives/2021/01/index.html","99c138dcbf0d8bcf0d671d746ed95aff"],["/archives/2021/01/page/2/index.html","26c5086a968f93743258dcd548299d39"],["/archives/2021/01/page/3/index.html","aac70d5459b492c21379d77724d2381d"],["/archives/2021/01/page/4/index.html","8b45758d9d9444c0acee67e3a1518fe2"],["/archives/2021/02/index.html","b486d8cb6664af4c842ec9ef82165fe8"],["/archives/2021/02/page/2/index.html","5d99ecc87b70006eddfd04d282741924"],["/archives/2021/02/page/3/index.html","8a7bd5474d74c6873476e326cff082b4"],["/archives/2021/03/index.html","9cc7277abf2d8c1f89220ce19892e9e7"],["/archives/2021/04/index.html","666cbe3803cf76a5c4a101ce5cd25508"],["/archives/2021/index.html","a38dc7020e2939c50a5fdbefabd99f91"],["/archives/2021/page/2/index.html","6efcd10ee50a722ba0f7149c006ffdb6"],["/archives/2021/page/3/index.html","25d19ea32a1c108863788d73a8165301"],["/archives/2021/page/4/index.html","9aae514618d4a939f20b70fab6297c57"],["/archives/2021/page/5/index.html","2929b4abee027a8d47f07b83619460e9"],["/archives/2021/page/6/index.html","936b43905bc9e2a63f736d070934000e"],["/archives/2021/page/7/index.html","31dcb32f440102410b4c4cdba725f4b0"],["/archives/2021/page/8/index.html","00f0c296282460aff1994bc82e41482d"],["/archives/index.html","fb540a305a1de71b343fcc668859b151"],["/archives/page/10/index.html","cf4458affc4cec0aec51881f010157a7"],["/archives/page/11/index.html","0c7ece826f15b83d06e4d14b80d17ab6"],["/archives/page/2/index.html","a19bd5216ce6b184e9008f523fadb2c6"],["/archives/page/3/index.html","39baa874eaf823fb8ec0220cb84209d1"],["/archives/page/4/index.html","6a0ee7d2c9ffa49b2354a7a4bc0845db"],["/archives/page/5/index.html","6112638c703d39f11f5695922c749bf5"],["/archives/page/6/index.html","c5148cb2c25e79e1c701a6be68db0535"],["/archives/page/7/index.html","c6346515677dbe0c34ae6004564d3bfa"],["/archives/page/8/index.html","1e498b463a93156724ebc52045059416"],["/archives/page/9/index.html","483789b29933a4d3722ae4c9d84042e3"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","fdbf0604c418f35fcfcdb3b47d14e3a8"],["/categories/index.html","ace7181e97292dcac87cf97e67e6c09c"],["/categories/下载/index.html","edea33e3dd169772491f63001c7a820f"],["/categories/安全/index.html","8be0866ff470f719182d35bce911939b"],["/categories/建站/index.html","600a4c885ccbab21e21ccc1b19b374ad"],["/categories/机场测评/index.html","f16de7a6e8d5b05f99f90e4bc1bbe896"],["/categories/杂/index.html","c90e68e45235ff3dd6f5e87dcc7a10bf"],["/categories/杂/page/2/index.html","e353b0b88769d2f438d9f5adb19b3208"],["/categories/测评/index.html","fd3d5ea789ade63c55e8e287bf15e318"],["/categories/科学上网/index.html","919efc3d5d317f67a7db752ed1308700"],["/categories/科学上网/page/2/index.html","395165fd8513a2cd62f98fec95aa3195"],["/categories/编程/index.html","3e31fb1db82d9b03916e949872b21f7d"],["/categories/网站/index.html","ff2cf46dfebb46fa81aa55b38923f7bd"],["/categories/网站/page/2/index.html","9c3a6f894d1534448463afdf30d5715a"],["/categories/软件/index.html","e335c14d807becdf219b0d11490272d6"],["/categories/软件/page/2/index.html","0a7ef56bac5d2d65822f9da3bb3e6eba"],["/categories/软件/page/3/index.html","e6875c91640ba724a00430b554afa134"],["/categories/软件/page/4/index.html","3cd96fddd4aa274c11dbda7118de987f"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","53ec3a5f0c20dbf6ba40f21585f44314"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","cdebfddbfeeb326de3fe13d39d919801"],["/ios/index.html","720d82fb3899cb5ac6b48aa4a1f1eeb9"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","b25e585bd069ab397fececdd0c312f53"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","4b3c4df55d9907b290b54dc7131105b6"],["/page/11/index.html","993de983441fd168460f9d9aa9b4bed3"],["/page/2/index.html","8a678ffb6a9f03456a3e4ab076ce1dec"],["/page/3/index.html","2ff53027494b3872cb3822483911cd19"],["/page/4/index.html","f13817307ec272ee63c224d1df58d96a"],["/page/5/index.html","c0d9eca51a4465d213ac0d4413e4aec3"],["/page/6/index.html","d2fcc01230f7477625733a52a4302799"],["/page/7/index.html","680d3b7aa810cc3bc4708d268a8a7be6"],["/page/8/index.html","b77debb145e8c4799d8e386f33a68cc2"],["/page/9/index.html","0aa60863e83bd75d80f135b3d42c8933"],["/payment/index.html","9731610ceab3ecb8168a9b68f4eeacf1"],["/privacy-policy/index.html","08cb70b97d0e5ef1862828e876d7e3c7"],["/rss2.xml","64becf79c56bb78f4604d80106068073"],["/search.xml","82a92acfe8555c57e94100c1a1e873e0"],["/sitemap.xml","b9d1d39c9336094359cf33ed97289bc7"],["/sw-register.js","dd07b078246768a02dd6412ad6ead2d1"],["/tags/5t/index.html","000810484d6167b816a191adae1d87d2"],["/tags/Bing/index.html","396c09aa82ac340c390f2e90e2ab4d0c"],["/tags/Clash/index.html","fd64c3b900a74c092b77f8acbfb35ee6"],["/tags/Clover/index.html","3c5e58174f423087aecdb106ced52dbe"],["/tags/E5/index.html","fa3b3c7ae9bd2d7002b475784359af81"],["/tags/FTP/index.html","9823a685b1fc7a8b310889c6ddfd1090"],["/tags/GitHub/index.html","636c9e165b51c21a5899d79c9833cdac"],["/tags/Heroku/index.html","1bbaf6ce7a687b7a6b84a7920099bc29"],["/tags/Hexo/index.html","a564594cf02128eb5e7ea8cbc6120938"],["/tags/Lenovo/index.html","33bf9ee1f72a46637ca379c1c0ba5cbc"],["/tags/Oneindex/index.html","4a0b248fe760d6f06e9e5b2992edfc32"],["/tags/QQ/index.html","1e662e70a7696778d08a3ef5ae4b9f6f"],["/tags/QTTabbar/index.html","8652dc899b9e21ea39844d5212d26caf"],["/tags/RX文件管理器/index.html","6b430e37c60382bf372af0e04a968253"],["/tags/Todesk/index.html","cf6d56b2150ac6334cd6048060ca0d50"],["/tags/Vercel/index.html","7de63b8fb7edf5a56e883a976452a205"],["/tags/ads/index.html","4e03c8a075194c7a8afe58cdc7a60500"],["/tags/api/index.html","8d3d171d9f545aa57efc65c1e53d1d2e"],["/tags/app/index.html","9d95cc3ae2699dd6e62e04c18c389b6e"],["/tags/atlas-os/index.html","4265416b76ede79ccb5ea4b16fe76377"],["/tags/blacklist/index.html","f4a3b0db8af3138f7175f08b02524f69"],["/tags/butterfly/index.html","b608efc7212cc1d5ddb1866ea3f08890"],["/tags/chrome/index.html","8a5c8ade024f1f8e29916bbe8ffe6eb5"],["/tags/clashx/index.html","52fe9c7be2dd92c5920f8b2da6b4c617"],["/tags/cloudflare/index.html","6c45b4118062473379fc00798bf55dcc"],["/tags/cmd/index.html","62c692343bf339f159d29d7bcfee5c95"],["/tags/c盘/index.html","6c950ef0d515e931cadd515f8cdc26dc"],["/tags/email/index.html","d4f57925ea4f8b72f6f10018fb8f833b"],["/tags/ewomail/index.html","f9315cef3bec06402df3f2b9a0564259"],["/tags/fiddler/index.html","defe5d5ea5faf0635b1f9f52addb914b"],["/tags/flags/index.html","3a7192c68d0cf9404e626352445b075f"],["/tags/footer，页脚/index.html","c078a9474e33a5e04a3927adead0bcd1"],["/tags/galgame/index.html","2c8c010176ac61aa18e10c5dc7740d23"],["/tags/git/index.html","0af9ee5b23976ba15be83d442d7fb6d2"],["/tags/gitcalendar/index.html","c981ca81e254e5dc361bab0834817cff"],["/tags/google-voice/index.html","a00337a3ec6761f166cbb01134323a0e"],["/tags/gv/index.html","0ab1e837742fefccd037b6219582c80e"],["/tags/html/index.html","af41f88409db5f730238a9efb14a45e3"],["/tags/index-1.html","f13fee955e48b1990f2dff0967a78ed1"],["/tags/index.html","d968757078bd5d07649e19f1cc7b92e1"],["/tags/js/index.html","6080d363214d9089c05709914a1d4ef8"],["/tags/jsdelivr/index.html","5e65e96f9eb5788d97d75ea1b07c894b"],["/tags/linux/index.html","bbea4b69c8cc6779d63f91480535e721"],["/tags/macos/index.html","954e97f7b2fcd46f23baa6b6822db6c0"],["/tags/madVR/index.html","1b7bcf72266c6d8755be96ca0410e0cd"],["/tags/markdown/index.html","22330d3075485891675eccb20941629a"],["/tags/maya/index.html","c9dfb6217f6a9892d2c035924bc35396"],["/tags/mklink/index.html","5558f9786522f7dfd1f398c623c1b35a"],["/tags/office-e5/index.html","d89f9e03fc980aed34a0c9047c410fa6"],["/tags/onedrive/index.html","e1e5ad6e9143fd78e6cd324bbe313471"],["/tags/picGO/index.html","2a3a7eed0f87952267696828fb07d8ca"],["/tags/pixiv/index.html","e2be774cae6e4be82ae16fdbf61bd49f"],["/tags/potplayer/index.html","e55400547b9dc320606d9d7c08ff3eb8"],["/tags/proxypool/index.html","e23086a0307c7270150da4e7fba751ac"],["/tags/qbitorrent/index.html","85c9bec09348dd59d1f1ae021d84e0ce"],["/tags/raidrive/index.html","bfbf0a40711f117eefc4b14355891673"],["/tags/screen/index.html","341f10560b799b8310deebb43301e037"],["/tags/speedtest/index.html","f371c1270de133499e6bcd792e172951"],["/tags/ss/index.html","c25c6d90aded9eef73de87d9cd62104a"],["/tags/ssr/index.html","01a5ab6e41b00b7480aabd54eb4a123a"],["/tags/stickers/index.html","5a8d0074f105242b830ecae357aa9a5b"],["/tags/surfboard/index.html","a543a0b1597f15c9a60244e22417f4f6"],["/tags/tap/index.html","5ce4f95432b7c6249d32613946f6715d"],["/tags/telegram/index.html","06edbcfc4feb7c47bd950176b7717e33"],["/tags/telegram代理/index.html","0bfd9f197da50f2c62d54775a39030b8"],["/tags/tg/index.html","27d61ef88ca4ceb0d3a52af498463453"],["/tags/tg代理/index.html","fb84e857b04fbc64dc65384b87e21d1a"],["/tags/top50/index.html","a8a5ad6a943289421b356e373783a98e"],["/tags/tracker/index.html","61e0aa56384f419db5fab102fb924e26"],["/tags/translate/index.html","ddd53a686481993f1da8ecf4be23b5b9"],["/tags/translater/index.html","ff0aae5923922c545d4116ca3412b437"],["/tags/tun/index.html","46b8891cab200aaf395c09524d2139f8"],["/tags/typecho/index.html","eea419863f9f729ae2f1d10d00978514"],["/tags/v2ray/index.html","325a9e31352d198e840d51e1c885a77f"],["/tags/vpn/index.html","ab12c2c4f5b3d2586a4a809ad9d2e9c5"],["/tags/vps/index.html","8889df701a254180ad72fdf4029a904b"],["/tags/wallpaper/index.html","7797f09684d984077fd8a1bf85620499"],["/tags/windows/index.html","a57e23b9c0b9f99fbb1c7aaf1d718a44"],["/tags/windows端/index.html","834ce58c2e3f0dfe72f46f50995485a0"],["/tags/xray/index.html","c34c1f31829af1b1b4c8594f91e383a1"],["/tags/yandex/index.html","d183cd09dfba995e7e31198b9250f588"],["/tags/下载/index.html","e37db27f5637806a3df9f5a004ea3fd3"],["/tags/不限速/index.html","bc5211e2fa3530103eae0615aa2c61b2"],["/tags/个人网盘/index.html","b1a108e723fe8cbe4a9fe59c87ff1114"],["/tags/主题/index.html","50a724927c625d10108633842caeb5d3"],["/tags/二维码/index.html","23fa730b689ce486352fa7b0d38a6e61"],["/tags/云便签/index.html","e0614341a60c5ac96e12f59376354fdf"],["/tags/云盘/index.html","8df5d2ca7af7cb3c360842e60fa1862d"],["/tags/人人/index.html","ab2b5f450924b52b290c73469c10d2e6"],["/tags/代理/index.html","27580fec468c6c6ca47c4cfa541934bb"],["/tags/代码/index.html","1592f7b78d939892c56a12c7bb4d37f7"],["/tags/优选IP/index.html","b4ad89d89bca7210eb4777adcd911a12"],["/tags/便签/index.html","66e96d05987df2ebaf331c66add843a2"],["/tags/保号/index.html","ffbadc355b5f8012fde5c981b9530d69"],["/tags/免费/index.html","b91b74553a4a21dfc1e64b307fc1cc5a"],["/tags/免费节点/index.html","80c33846112e0e16107e0522b2e09dc8"],["/tags/冷门节点/index.html","f5319248c100aade274393e49d90d98c"],["/tags/删库塔/index.html","7f04605fbe40681337b4d7050e653d69"],["/tags/加密/index.html","48059b1e89781df0d5bbcb497817f995"],["/tags/动画/index.html","5e0fde95457fda685c11e50772b64f07"],["/tags/博客/index.html","7d3b8a8993fed982f3a7d7676cbf3665"],["/tags/卸载/index.html","94f02764250afeedd9fab7e05b08255c"],["/tags/历史记录/index.html","d8279d0b35b728185eacf61c0993e499"],["/tags/压力/index.html","3088980a86cc15ed96d97fffaa45ac78"],["/tags/压缩包/index.html","8115a9ad55306888665050523013411d"],["/tags/反代/index.html","13bc6049387845b47880fbd047b094b3"],["/tags/可视化/index.html","3569609adcf290a43d5d23c118268f61"],["/tags/命令/index.html","441f1bca8241e866d9bb4cc3fd3702b6"],["/tags/国家/index.html","c4ea68e3e9d7378b64370bfe198fc22c"],["/tags/图床/index.html","a217ca3d221e5d3368a122e7f9554637"],["/tags/图片/index.html","9dc239cd63b76aa031a21403e3578ded"],["/tags/域名/index.html","cb91ce39c9bf94666fda8936e2debc2e"],["/tags/壁纸/index.html","2c2aaac0627a344e38b0bdaad2e3cc55"],["/tags/多标签/index.html","3baea8afe5a29b4747651f4270958998"],["/tags/奈飞/index.html","f19ea6a32927d2d4aa5ddb700b043f38"],["/tags/存储/index.html","0177f0c3893e4a0983f354fc6995a1d8"],["/tags/学习/index.html","3fed5294efde4a3b4541bc805d23a3bd"],["/tags/安全/index.html","0ba94c94ec3cfc93d776f1dbda1090f5"],["/tags/安卓/index.html","7b278d837a8865f6edb8ad9765f0dad4"],["/tags/宝塔/index.html","dc1dd4fea82abbf7d604896b58a377af"],["/tags/小游戏/index.html","1d46fdc14ceef4a8dcc7141652ab715f"],["/tags/广告/index.html","429dc9b80e17bf6e927a224df425c7b2"],["/tags/建站/index.html","aaf76dc40f4cd6e692206607af184172"],["/tags/影视/index.html","592d8c0c6313f5fa17ae0d81c6d05724"],["/tags/微信/index.html","a8ddf14224ef92326cea2a6839730744"],["/tags/快速启动/index.html","c98fa418b8dab5c7fa812e7fccc08d97"],["/tags/手机/index.html","a4741381c7b7bd1d2f302dd24175a9de"],["/tags/托管/index.html","087cffdb49b80245473ea6aceb1c92e1"],["/tags/抓包/index.html","0e63ed9af3027869c028c29cc755e8b4"],["/tags/抓取/index.html","40126592a841ee9e4f8658d11b067639"],["/tags/投屏/index.html","79790af904b92d776b8c7325e0d767b1"],["/tags/拓展功能/index.html","ba5164f83e40f431c9fb809c931fdbae"],["/tags/挂载/index.html","a1d2d105bbf54becb07d55b6954f103b"],["/tags/指纹/index.html","58f2c3ccb13609704300310ce339523b"],["/tags/接口/index.html","0945d5f517d1dadd0b033f42a76d4678"],["/tags/提取图片/index.html","a5213f41787d8d96168a4c9d7465ffd0"],["/tags/插件/index.html","63920775f62ec12cc915eb0fe36bd9c7"],["/tags/搜图/index.html","2d976a81dc7b7171ca3ff5b00e42e2c3"],["/tags/搭建/index.html","2e17179bb79a4766e3f59ffd91c67765"],["/tags/撤回/index.html","cb61705e3e0c867c2a1fe3470f477db9"],["/tags/播放器/index.html","cf8e290d33a2d032d81517c79d5da6a9"],["/tags/支付宝/index.html","274e7073e11900b6796d399ce0234d30"],["/tags/政府网站/index.html","98c02f586622b87fe5d5eb256a624129"],["/tags/效率/index.html","0251311bac84814b93052fde896818ea"],["/tags/日历/index.html","427393620537a89447f0e4f4d1349edc"],["/tags/服务器/index.html","f19e3af1a488a9368e5cd60bdc4a528a"],["/tags/机场/index.html","384c05d9a54b23f2f1ec55aa0d0e18fd"],["/tags/查重/index.html","cba597ab80bcc3257370c076901cebfa"],["/tags/桌面/index.html","fff0347c02ebcc6d3563c546ee565626"],["/tags/梯子/index.html","aca8fdb5ddfe29e9decf943afb7947ea"],["/tags/检测工具/index.html","c776233adc1c74c3704933ca8e832141"],["/tags/汉化/index.html","fcdf8cad6f70375975b409bbd0543554"],["/tags/测压/index.html","f13730c4c6e68f6c2c6640ea4a318160"],["/tags/测速/index.html","814af24ab45abce55cca7ae4b73499d3"],["/tags/浏览器/index.html","0f98385134ba157c8ab765c9123592eb"],["/tags/清理/index.html","28cc9c2b8c13aa5f47c549f8d1b64405"],["/tags/滚动条/index.html","ec5ea97f948225acfe7e19eaf15a3539"],["/tags/灰色歌曲/index.html","77ab13b53a91f99044d1e78357f1ea0c"],["/tags/电影/index.html","4ec7404709981ed16b61fa3cbee8728c"],["/tags/电脑/index.html","5577b5cd4fd8b369b2ac86b9b6352210"],["/tags/电视剧/index.html","7e4023a7f3717cf1181f310a8ebfe07e"],["/tags/白嫖/index.html","adfc3c32af2ab136b0f986301cf40bbf"],["/tags/百度/index.html","34514a5772008bcc0a76a379b64b524c"],["/tags/百度云盘/index.html","aa519bcd3158ba0f69a30db90a6bc371"],["/tags/百科/index.html","2df839ce0b084c268a80f8b175080c28"],["/tags/短信/index.html","9251add70330fcf4143e3a271698b282"],["/tags/硬件/index.html","efd261b8ca5d64681873ed7ca2eb3799"],["/tags/科学上网/index.html","8e910b3ddc956f644b730999a509db6c"],["/tags/空间/index.html","236f0d1a99b805d5630e7dc89534ea55"],["/tags/笔记/index.html","72fd30346365792806022ff7b51e3376"],["/tags/简洁/index.html","146319090f85ae498cb5f3b8e3a60f23"],["/tags/简约/index.html","ad1ae6c36af349a9dcbf929dcb2bd432"],["/tags/维基/index.html","6035c2d3eb46b27f455579f86277efb6"],["/tags/网易云/index.html","972fd35ba6c4223b713a2270463e6dae"],["/tags/网盘/index.html","b661f91f7c99ea1d0cad13df62efebab"],["/tags/网站/index.html","aca3cb507daafc25d635edae1fd99286"],["/tags/网络/index.html","466c3964402f2408338c061b11f65ae8"],["/tags/美化/index.html","9a0a1385ec2251da7f30887f92786bdb"],["/tags/翻墙/index.html","f22170a134b75718884ce8b8bd149dd3"],["/tags/翻译/index.html","5c52e566fe71ad9db257a563ecb8efc6"],["/tags/翻译器/index.html","eaa128581fdee86b7ff1b4d2e43f709d"],["/tags/聊天/index.html","8c00611616aa65b7c858d7b27fd3a806"],["/tags/聊天室/index.html","42abff1fa6e51040abda60ef9733a2b0"],["/tags/联想/index.html","a14a6b90fca2148e2c77a6823b05fe40"],["/tags/节点/index.html","5ca40f73665ea7623ad90f922eef6157"],["/tags/虚拟手机号/index.html","8ec1dbf6c568cebb70509991bac26ee3"],["/tags/补丁/index.html","4e3dd8992f39acd6a23642e3ecf906ed"],["/tags/表情包/index.html","dbf6e31b561bce5caec9d7274296092d"],["/tags/视频/index.html","8d7c1f385fe6dfdd94e8e83abd7bb2df"],["/tags/解析/index.html","e2977385f1c4871660e68ff91cccea2c"],["/tags/订阅链接/index.html","b6ed3c5d04cabd20dd8c75f931b0abaf"],["/tags/记录/index.html","952e76ef6f983e1a132e1724959ce095"],["/tags/识图/index.html","44d0e6a3f2b64447d570df63c7b42ac8"],["/tags/语言/index.html","a63aa6b7733ed2b340e45857591ca27d"],["/tags/资源/index.html","3edd40c29688f4ff5f04f2cbff549fdb"],["/tags/资源管理器/index.html","a29c5dedaf99b6aacc1b6ddf7a17efea"],["/tags/转移/index.html","46a784dd52e468b4e819e72160022fd5"],["/tags/软件/index.html","3aff5787d2fa486027a540dc876d03d3"],["/tags/轰炸/index.html","1e0d9a83c29a4c7bb8675f617da34b53"],["/tags/迁移/index.html","09ff21c7a4f0d9342e3b064d7cf934ae"],["/tags/远程控制/index.html","b9189ddc2a102b5b076048462f6a8529"],["/tags/连接/index.html","6d9ee0153bc898cd7557aabde0165010"],["/tags/追踪/index.html","43d60cfaf6a3137b6f9683d5fcf1e7bb"],["/tags/速度/index.html","6c61ae4ade7ef9caf2da0aeccc4afdef"],["/tags/邮箱/index.html","d4899f2b4d56ad175327058c83c9f40e"],["/tags/酷炫/index.html","9646882f0bfd23ddea0804022ccfc4e4"],["/tags/钓鱼/index.html","1db469dbb6af9052f9fa6a01eced76cd"],["/tags/镜像/index.html","05510cee7c037c7eba82c550f5b41906"],["/tags/随机/index.html","d924a6bfcaae7a9f2fd39194f5a66534"],["/tags/隐藏/index.html","f0030de86e3316c0d2138c662c538198"],["/tags/面板/index.html","0bccbe5f3fe26ed145e34f097eae3f31"],["/tags/音乐/index.html","5ebf1d362e1fc7c2e1220778f4785996"],["/tags/高颜值/index.html","4589af50c5476a614a7fb869c5372ffa"],["/tags/魔改/index.html","4b2d8b62ec51801b821ea8b53999f09f"],["/tags/黑名单/index.html","4ee13e0a5144e6f837de32b1197e3bfb"],["/urls/index.html","dcbb2d1e4c2a71d1900f1ac54516b7a2"],["/vps/index.html","614e095686c38952987cf1bbf83ae978"],["/支持/index.html","4d9efa046fa12af5715a94c9d8b8d221"]];
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
