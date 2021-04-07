/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","2c104b004b0d1bdd1dd8bb3f164913a5"],["/2020/11/29/clash-windows/index.html","16268dadfee25349e7f4f623d5455555"],["/2020/11/30/websites2/index.html","99bae3c6761fc2287833515a46a0555d"],["/2020/12/04/iphone4s/index.html","2bbf7dbcffe6483416d590ac126f78f1"],["/2020/12/04/onenote/index.html","2e660d7754f93c9d256c65321c86f7e5"],["/2020/12/04/wesites1/index.html","dcdb57e3da5b3b8286bec6dc31a7eced"],["/2020/12/06/nokia808/index.html","7b31c33539766dc19579d7b0265ab6a8"],["/2020/12/07/ipad1/index.html","7e04d82715a3d529710aa29b91dfe353"],["/2020/12/18/freesubscribes/index.html","1d56f8b006a74025480ea7b8255c5fae"],["/2020/12/19/musics/index.html","90b9e10d5cde67f03448d9769999ba25"],["/2020/12/19/shadowrocket/index.html","e29cef7a1f10112d67c5fbda38fcb935"],["/2020/12/19/v2ray-windows/index.html","723cfd169f87af58621383c1a9ad93d0"],["/2020/12/19/v2rayng/index.html","4136f503b60c4356730192f51ea0831b"],["/2020/12/20/beoplay/index.html","7cec779dfb853b62da49d4f7206a46fb"],["/2020/12/20/订阅链接转换/index.html","c2a03b1162151fb8463c94414402abf8"],["/2020/12/21/chrome浏览器下载提速/index.html","fe163d68ea4ec749b3157b7645601fa0"],["/2020/12/21/免费128线程并发下载xdown/index.html","945a19fb8bec2f93d3cd3e06d5e861be"],["/2020/12/21/免费32线程下载软件ndm/index.html","9c9530a10f44ba7443eb245a5f817386"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","a5c01f420ba1e3e0ac5874f69dbd36f3"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","88b91cd56a4f4d765186680ca3112b2d"],["/2020/12/21/广告怎么知道我在想什么/index.html","d783e5e802082a7ca6e3b318894acf8e"],["/2020/12/21/无名·引子（小说试写）/index.html","2fb16904969ef75584af063c8c551124"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","13ee3dfcc07356628367cb26e05cffc4"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","9b027335a9804f9cabd02157dd7d4176"],["/2020/12/21/高速轻量下载器aria2/index.html","f2eff6be01996267c3d475ce9364dcbc"],["/2020/12/22/2020-cee-roo/index.html","18e2c9f7489c16e631b34387b208b390"],["/2020/12/22/firefox插件、github、steam富强/index.html","e1faa2535ff21a151fb47ffe219ed636"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","0d6378f20e0c972d30678c505b6d4563"],["/2020/12/26/python-day-1/index.html","36d4d4a5146ff16cf2b8cb3534f47a69"],["/2020/12/26/python-day-2/index.html","cdd8fc33ab5bb14627fe0b92e536a5cd"],["/2020/12/26/度盘不限速下载方式一赏/index.html","00fb6f51bdddaf4d9787ab373c483166"],["/2020/12/26/添加开机自启软件/index.html","81cda4026b5a118365e1f9e9be7642aa"],["/2020/12/26/电脑端截图方式一赏/index.html","cca16739dfcbcb3ef1bfee4597e617e5"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","3e3b438f98fcfa38129e1b7890ca7238"],["/2020/12/27/最安全的浏览器tor/index.html","06cdd802231351d22284e87afde5fa15"],["/2020/12/27/网易云刷等级和听歌数量/index.html","7ed85f31b415355035c1b6b967a3c5ce"],["/2020/12/28/freenom申请免费域名/index.html","4c888b55479e91075501e1f2f1917621"],["/2020/12/31/机场/index.html","3a18bdf099363ca852f2b7398c297f32"],["/2021/01/01/M1/index.html","978eb3ed011e3ee6974517dbfff487f9"],["/2021/01/01/compress/index.html","a925b204b5abcaed6c9b7f519c89c51d"],["/2021/01/01/infinityfree/index.html","226b4e7b68231b263e0a73bf8f96eaf6"],["/2021/01/01/硬核翻墙/index.html","ff068e5201b9a947bd552c1523ea67df"],["/2021/01/02/qq/index.html","5c6e13083a8df55b41909c3dd9280854"],["/2021/01/03/netch/index.html","7e07a84fdeff4c366e851afae73032bd"],["/2021/01/03/waifu2x/index.html","2956680c66a1e1eaf6b596de0164254e"],["/2021/01/04/ads/index.html","c0512fbf75529e660e28b964552594bf"],["/2021/01/04/games/index.html","f486e22b9c3ff10c5c9bd30fb6b9c1d1"],["/2021/01/04/heroku/index.html","a584ca717aeb29963dcad9ebd1b70744"],["/2021/01/06/movies/index.html","041a8c031c6822866c1f6e067de945a6"],["/2021/01/07/google2020/index.html","a1300c795ebdbb79a301ea79eb3d3f79"],["/2021/01/07/lucky/index.html","3cb1e6824ac6e9fe7e57a59a6b1029d8"],["/2021/01/07/spotify/index.html","8488b66cc2e83fc9da37267aebbff92c"],["/2021/01/07/thunder/index.html","7037329151ace51a17ee399a78726159"],["/2021/01/08/adguardhome/index.html","40bd4b6920860093699f93bb77eed2e3"],["/2021/01/10/IBM/index.html","497aa254f1c79aec90efc0efb503c29e"],["/2021/01/10/potplayer/index.html","123ddc67ed6c9074083f3991d1eced35"],["/2021/01/10/sakuraanime/index.html","42d6427f1f8d334d35d4d79c1fa6a58b"],["/2021/01/10/美剧星球/index.html","0bd4d760e6cc806b92e24f42a70b79d0"],["/2021/01/12/telegraph/index.html","09a59783d03e6cdbd74f5ca47a8316b4"],["/2021/01/14/comics/index.html","3252b0e6406832ccd3e5860daa479c27"],["/2021/01/14/ftp/index.html","bbc23b80e8a9875606a009de8da17cc2"],["/2021/01/14/oraclecloud/index.html","0d981cc6e8ccbcdba7649c754dc582f6"],["/2021/01/14/porkbun/index.html","1d5f7d13536abb0577f9fa154713f98b"],["/2021/01/14/powertoys/index.html","3b146c2d30229c546a561c12471fe79a"],["/2021/01/14/taptap/index.html","6ad56639fa3a1d1c8d8b82a651a62c15"],["/2021/01/14/ubuntuvsftp/index.html","2f6fe936f1837107c8b28c699450318a"],["/2021/01/14/小说/index.html","ccb60f84faed06bccaff01586e480fe5"],["/2021/01/15/freeproxies/index.html","995e3c2846bd2a5f22cb018b9feb8f73"],["/2021/01/15/incaseformat/index.html","e3f1382dcb4b5ad3839f3702ac2377d9"],["/2021/01/16/euserv/index.html","ef507bfbac2c748be7acfd4e8394308b"],["/2021/01/16/winxray/index.html","b343f8fb5314e5615c598c16bdb9e7a1"],["/2021/01/18/qqreadhistory/index.html","9a40450c5318a5a2a2b83e18e3093e15"],["/2021/01/18/qqrevoke/index.html","fe65bfb17a60091a7d0c75ceafe43377"],["/2021/01/19/freevpn/index.html","249b3f36666eb02768afeebf01fcfcb1"],["/2021/01/20/browsertrack/index.html","4c8034edc4b6c6ee6bc113832e2b4bce"],["/2021/01/20/v2ui/index.html","a588321813137697181133524d37b8d7"],["/2021/01/21/failedtoconnect/index.html","55ed59495adfef9aa575e903efe3087d"],["/2021/01/21/gitcalendar/index.html","51759869cd0fe3ce7f6017ea9f8f66c5"],["/2021/01/21/markdownformat/index.html","fa6655e5c9c98957cbf4b01c372aa874"],["/2021/01/21/markdowntable/index.html","9685706a029d99e680b0c93a79199923"],["/2021/01/21/vercel/index.html","920657eda1a6405e9eaef3972f8b6ce7"],["/2021/01/22/hardware/index.html","6a648b13c81ecc242544aced69acfa03"],["/2021/01/22/muviz/index.html","8cdded8f65daba036556bc433e8ef811"],["/2021/01/22/randomapi/index.html","b66a2ede465cae3377cc584b86970f91"],["/2021/01/22/searchimages/index.html","b7766c1e663757a22af6c28598ddfc14"],["/2021/01/23/RX文件管理器/index.html","f7b255417f311f731626b0f6749a019b"],["/2021/01/23/chromeflag/index.html","ad4894bb8cddce453fa8d13eb0a08945"],["/2021/01/23/qttabbar/index.html","9da028fbedbf92ece123be1bb4f0f8af"],["/2021/01/24/githubspeedup/index.html","a9d7c30ef4226505335c5183005871d2"],["/2021/01/24/jsdelivr/index.html","df73c81b0dd61940e8d4b62482b9d56c"],["/2021/01/25/note/index.html","43ebbd1c309125a6c0a3d1a1888c6a0c"],["/2021/01/25/soul/index.html","d35f4aca3569bf7b744047ab0377010b"],["/2021/01/26/herokuxray/index.html","7abe3650ec6622dae332a2f8665cdb48"],["/2021/01/27/proxypool/index.html","d018fb8c2e7a084b06dfc9a4744172dc"],["/2021/01/27/tracker/index.html","3abcb48a5d6b79678974919ef5883959"],["/2021/01/30/pandownphp/index.html","7e83171c84abc6612d6fbeafa7fc5d95"],["/2021/01/31/newgroup/index.html","d750ad66884173a43c4da92d90d5b7a5"],["/2021/02/01/clashlanguage/index.html","35ecf50bbdba1ebde2271f1f4b7129e5"],["/2021/02/01/encrypt/index.html","617c19de7fd81c525debbf89e88e5ecd"],["/2021/02/01/footermotion/index.html","51932eb9eb52bb2f8f62709491c44d1c"],["/2021/02/01/gitter/index.html","853e8b1d22af4001ebefdf91caaebe52"],["/2021/02/01/pixivtop50/index.html","ea18d0872aa8d91359e8714a00b33a25"],["/2021/02/01/scrollbar/index.html","c3df7b8bc3a8bb4942bd83a3361bf203"],["/2021/02/02/clover/index.html","0a011ae786dfa8e861f5ed58b1a382cb"],["/2021/02/02/maya/index.html","4d3e90a314fc41643fa6d2d9fd5260d9"],["/2021/02/02/speedcontroller/index.html","5ca482f5396949e3c6fa3d352a18594c"],["/2021/02/02/yesmusicplayer/index.html","e9253145fd3a2aa186d4ac41be3f364f"],["/2021/02/03/lenovoonelite/index.html","8df1a8f44346279a21eff612844503b5"],["/2021/02/03/skipads/index.html","d4eeb608905265b1a71268b844fd5a17"],["/2021/02/04/picseed/index.html","a8169551711c6c8edf1cd6a80cdec765"],["/2021/02/04/renren/index.html","fa7b2094efd57bf9d9ce56b1be2d30e6"],["/2021/02/04/serverstress/index.html","c4c37baae7737c2777016607e5b87190"],["/2021/02/04/wikipediazh/index.html","76368181319b580d9d47512dfe6ac18d"],["/2021/02/05/googlevoice/index.html","2cee52b51ad92629f2acec50376eae36"],["/2021/02/06/clashconnection/index.html","9c2b22967cfd167d431e814829f868bb"],["/2021/02/06/gvtransfer/index.html","77966c2582a142c4788d07ed1640b2b9"],["/2021/02/06/todesk/index.html","7ccd07124851ae79b4a73ad9e5e0b8a8"],["/2021/02/06/vpnblacklist/index.html","176aba6e566f7ef7db61dcc300e8d84d"],["/2021/02/07/mklink/index.html","0532850b5853afe6cc8b1a77df3695d0"],["/2021/02/07/speedtest/index.html","c8770533f27abc3bc621c6b23c70da96"],["/2021/02/07/translate/index.html","553da48439983f435a09ed6c64450ac5"],["/2021/02/08/ewomail/index.html","7b99f23ecf5988c4df61c280318d586e"],["/2021/02/10/officee5/index.html","f5abfda1cadf8621f3e280dc9a0993b7"],["/2021/02/10/raidrive/index.html","b57b273c0fcb426094dbcf5b95d3d9a1"],["/2021/02/13/e5sub/index.html","a8f975a139593185395af6282d6bf4ef"],["/2021/02/14/screen/index.html","584b39a076f4ecd60729f87de18bbd22"],["/2021/02/15/clashtun/index.html","6856554620b79cbbc79816f81d6c9539"],["/2021/02/15/messageboom/index.html","c52252df1406cf45beb7e0334eff25cf"],["/2021/02/15/oneindex/index.html","0b839f538c15835a16f9b758863624cd"],["/2021/02/16/govsites/index.html","823f8c5fa96114fad8cfd7a2d97184f0"],["/2021/02/17/hexototypecho/index.html","789f0a4d5e0e8af6c0337b50648df130"],["/2021/02/19/fiddler/index.html","6b7dff00858af8db3d2c863fb10fb1e6"],["/2021/02/22/potplayerset/index.html","6077de2c0734eb252476053c6f6df1b7"],["/2021/02/22/studyresource/index.html","96af3b78dea42bcc48636f075e707726"],["/2021/02/22/telegram/index.html","b2865c77fa02751f9985033c69fe219b"],["/2021/02/22/videos/index.html","cd83e9953a73e33f265ba92a6ed8c426"],["/2021/02/24/mtproxy/index.html","d4852d6efb8793e45959cd79019304a4"],["/2021/03/10/catchcat/index.html","2025df813ad22f285411545adb0a0435"],["/2021/03/10/neteasemusic/index.html","83e7c09ffcf679b690801c8f15efcbd4"],["/2021/03/10/surfboard/index.html","1cf2a80fa990938f62d33c38e49670ab"],["/2021/03/11/vpnandjc/index.html","e59fc3744bbf85f8627655eb0421bc1b"],["/2021/03/12/qrcodes/index.html","6f343311fa9d20fd7bd1b9e2f4d87a86"],["/2021/03/20/qv2ray/index.html","787c96415128324749ea75fa95453245"],["/2021/03/22/freevps/index.html","7ec47bb95fc351dc7b883b87f8167621"],["/2021/03/24/tgstickers/index.html","6ba865a356fa9c3d2ca523fc817d8d23"],["/2021/03/25/clashx/index.html","a19bae4316dda04e31610660f64cdf43"],["/2021/03/26/bingwallpaper/index.html","da24a367093b7d4cc6430314dc0968e0"],["/2021/04/03/soutu/index.html","88d33175720581a73382adbc8b56f104"],["/2021/04/03/tiyunti/index.html","bdaca5034c866018746574f4aa989a2a"],["/2021/04/04/btpanel/index.html","5f8ea5224df14201072f341eb05baa27"],["/2021/04/06/atlasos/index.html","c7cf610c28d45693ded1775781aa5715"],["/2021/04/06/cleaner/index.html","ff5fb8876b1b6b8785fe6c364d45a2b3"],["/404.html","51471f835abc1819ba7e2363358426bb"],["/archives/2020/11/index.html","0077241c0330bd764aa3fed742e3f790"],["/archives/2020/12/index.html","b9c113905ddd2226686a37d61347bf34"],["/archives/2020/12/page/2/index.html","95608cc8b2bcfc4e268e9c83fad8857a"],["/archives/2020/12/page/3/index.html","f669b07efa3675150f691ea224ff922a"],["/archives/2020/index.html","90f17ac64315efe556cfcd909284ff36"],["/archives/2020/page/2/index.html","5a541140be48ee4025e5c18456301e11"],["/archives/2020/page/3/index.html","d66a823f8c5762c0b455f23af4c0451e"],["/archives/2021/01/index.html","6e64789e432675e08429c2b383e1b0e2"],["/archives/2021/01/page/2/index.html","34d3dd466f1ce0e4786e4679147c1db4"],["/archives/2021/01/page/3/index.html","c16568cd207eeb32d7ef9670ad19f3fe"],["/archives/2021/01/page/4/index.html","4753ac840cc1dace658b9df3ae13f9af"],["/archives/2021/02/index.html","349128fa05b8f526384a150224f3d8f1"],["/archives/2021/02/page/2/index.html","0f289fb271955b62f0ecb029357da753"],["/archives/2021/02/page/3/index.html","b7f6a759abb897f4dfd567a25fe6fbe5"],["/archives/2021/03/index.html","617877c7fad682537acd4c13cbbcd6ce"],["/archives/2021/04/index.html","a26b86bfd29347a8c3e622b8dc03351d"],["/archives/2021/index.html","d3761adb1bc9fb2b102309d51a05d015"],["/archives/2021/page/2/index.html","03441abc81e8a04f9c108296daee94a5"],["/archives/2021/page/3/index.html","1a4c50287d740390baf1b19ed9fc530a"],["/archives/2021/page/4/index.html","43ea0d96499e89699eaac993416101df"],["/archives/2021/page/5/index.html","2cf0e6737e4cb2576aefd408857fb885"],["/archives/2021/page/6/index.html","15eb766ca4d3b1b3cfdba0f8fa0f4efd"],["/archives/2021/page/7/index.html","96bb1847e0cf249cd8fe507ea66fa4c6"],["/archives/2021/page/8/index.html","f943664bef233a43f02424bf3c2bbf1a"],["/archives/index.html","971e45abaf8cb61ef08bd964807ae352"],["/archives/page/10/index.html","697a7f03736802147c3d5ba0211ad321"],["/archives/page/11/index.html","cb9c9c986261fb0f0830cb2fdb28b270"],["/archives/page/2/index.html","720817c04b3a9bcce08bb298ffe3c69c"],["/archives/page/3/index.html","b379ae22f31b470393a7376b82b770f8"],["/archives/page/4/index.html","21133ef9e299004541adbe25b8226122"],["/archives/page/5/index.html","14c7716ae772dc04c8cf22b97ae6908a"],["/archives/page/6/index.html","2146acd344182f1b918b4eab6dba10a8"],["/archives/page/7/index.html","af05f5e3ae853adc198228e19b071535"],["/archives/page/8/index.html","b4121d890d7dde73dcfc4579bf9d24cc"],["/archives/page/9/index.html","e0462a3038355d6497a99693157b4dae"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","0ab540ba61cdb2e8e63663b9ceb4d453"],["/categories/index.html","c53f5ea86326f3598dfd0964037ab763"],["/categories/下载/index.html","939223b2f6854426c217eb9fc9599ba9"],["/categories/安全/index.html","a5a142d2488fbf302b7396685ed6ba01"],["/categories/建站/index.html","76fc3724b6a5e5aab041300c1be24593"],["/categories/机场测评/index.html","0c4caedcfedf47c5292f378822d0827b"],["/categories/杂/index.html","b42fa4e56f70d78e7d63d04c96f744bc"],["/categories/杂/page/2/index.html","d21e06f548e9cb1da36788b3fad928ba"],["/categories/测评/index.html","cd2fa1b31ddecb64d1295b9a92337645"],["/categories/科学上网/index.html","f4acc9874e36edc170e33b72c53bd417"],["/categories/科学上网/page/2/index.html","192232144204fa5bc595c74e5a1dcdd1"],["/categories/编程/index.html","c36e936cc02f787207149c950bdc9047"],["/categories/网站/index.html","fcab2fbbcf064f9a9536e4ff044aca30"],["/categories/网站/page/2/index.html","4f7d12b9d27f74a99978f4e7eb018d7a"],["/categories/软件/index.html","7a09430ac0bbe06fbc8d0e942ff7fdc5"],["/categories/软件/page/2/index.html","f22eef16b4020f1ee4a0ba4e0e60b5f4"],["/categories/软件/page/3/index.html","6c6efd391bd1fcc6bdcba16e03c57e0a"],["/categories/软件/page/4/index.html","ea13c429fc52446c423b0d443be2c4cf"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","a5fb7a0f092e57fd0a72f1141af98e1c"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","1f3ee4e53c59a2c2b647b6a93a82383e"],["/ios/index.html","d23d4b60c8da88f29ea4b0760fc7989a"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","9f8d73be04e3b0eabb670c45063889af"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","177333a17e27a7f8741d2be7929539ec"],["/page/11/index.html","06c611b1b1af0ac42de40af480fed5a9"],["/page/2/index.html","9ec05f293e075884343ab2de4519d438"],["/page/3/index.html","5738b887fc89cde2d1d152b910c9771f"],["/page/4/index.html","aa0d2a106ca17b3332a7f97e300fa8ef"],["/page/5/index.html","e1bd753257311ed8174d3ff61f8057b9"],["/page/6/index.html","cbf727a021ed0a6bd284583367d66526"],["/page/7/index.html","c978e43683d87ff82dac349e65bbe0da"],["/page/8/index.html","c293d6dee8103c22ebe5d7c33788c541"],["/page/9/index.html","76c731166ef4093d5b6db4f1379320ff"],["/payment/index.html","f13b0010f4f6fbd73b9921efdf7ea52d"],["/privacy-policy/index.html","df988209521aa706470cded0ddf24808"],["/rss2.xml","64becf79c56bb78f4604d80106068073"],["/search.xml","82a92acfe8555c57e94100c1a1e873e0"],["/sitemap.xml","b9d1d39c9336094359cf33ed97289bc7"],["/sw-register.js","20289364afb1bfa729de52c02ad49aa6"],["/tags/5t/index.html","972a21d54611c11d9f80937c5446eeed"],["/tags/Bing/index.html","e24f634dfbada952e188cfd2d1ed48ad"],["/tags/Clash/index.html","17c2ce3735174228e9dda7d528848f67"],["/tags/Clover/index.html","fa264d01f8463ada58ba207e8176cf99"],["/tags/E5/index.html","22e4415482ae956d1ce582c14002cff4"],["/tags/FTP/index.html","c84f9d1db7381d92c30436b7fc77e6a3"],["/tags/GitHub/index.html","89f5e93fcff495572303a353a178138b"],["/tags/Heroku/index.html","e5ef7f08f7c4a67aeca202fc75080113"],["/tags/Hexo/index.html","6e6ad9ed16b7273ceda6427320a3a2aa"],["/tags/Lenovo/index.html","875ce528ccf904901708c96cd03e9591"],["/tags/Oneindex/index.html","4576206f10a4d69879d53e19fdef37a5"],["/tags/QQ/index.html","4bd1238917dab2f638c99abfc8300229"],["/tags/QTTabbar/index.html","04359e77b30b89bec2cacda9b822f43b"],["/tags/RX文件管理器/index.html","0a1a987825a403b11f3fbe6076fc53c3"],["/tags/Todesk/index.html","6c38d978d6211ec0d69396ba87d70139"],["/tags/Vercel/index.html","f68b544928ae7c5cabda38c2c99540af"],["/tags/ads/index.html","e289f94041ff8e666e3e7d8259c540ed"],["/tags/api/index.html","7b7c09a17f2a5ebc226830443e01b781"],["/tags/app/index.html","d016ea95b33d77133314a45538c16f13"],["/tags/atlas-os/index.html","dfabc4ac26b934827cdd90566245cff7"],["/tags/blacklist/index.html","53d61ff7eb74d63b8b13ab5c973cd02c"],["/tags/butterfly/index.html","45808e1e9f050eaeb29bef4650f1f808"],["/tags/chrome/index.html","6b1de88f35852855aabb317cc6bec909"],["/tags/clashx/index.html","32ee02c1ff0047b7d199c0089f40c7ac"],["/tags/cloudflare/index.html","d08aa7150bdb28f8f2273dc7ba5fc824"],["/tags/cmd/index.html","4458cbebef4e31874815d8410ce21ea5"],["/tags/c盘/index.html","ca0f38fe730ed9acf7b882c4fe6ea287"],["/tags/email/index.html","7936c8daa6b8046e48c909cb26812c5b"],["/tags/ewomail/index.html","fc2b8984695322b9927ad3f62d2e1889"],["/tags/fiddler/index.html","ae9bd58622620203def221ea60591bd0"],["/tags/flags/index.html","1da0db2c6d4d2234f742ddb6304a17c2"],["/tags/footer，页脚/index.html","0327846a048bbe8e007361b9fd2d3b2b"],["/tags/galgame/index.html","e7362479e99d4ccedeea781a1cfa8318"],["/tags/git/index.html","56576244e136b4aa622ad6151b788a53"],["/tags/gitcalendar/index.html","ba6356256f81bf32af725e9fcfb37fb0"],["/tags/google-voice/index.html","2f308475840a008a92c0d2c152d30af1"],["/tags/gv/index.html","271e94ba0bfb8ab03eb533527d6774d6"],["/tags/html/index.html","7042706b88d0544f7b3550c986de16a6"],["/tags/index-1.html","75f8bb2c33a13b5d1505fdcb4641bd90"],["/tags/index.html","84cc714e436923a5bafef631e1c9685a"],["/tags/js/index.html","a4655ad65abadbddae515c7b5a7e0613"],["/tags/jsdelivr/index.html","f77166af1d4d3e44ad0d49a35a627ab0"],["/tags/linux/index.html","60bbe46a8417a15f1f08d21553ff7a5c"],["/tags/macos/index.html","319a390b2f5d1ed41d6e85f278b24733"],["/tags/madVR/index.html","1eb14472fcf5595bebf602170118127d"],["/tags/markdown/index.html","94ab600dae3b66ef1c83e9c285bbeaba"],["/tags/maya/index.html","f6ce1f6d8d60402376f3c8dd2fabc07f"],["/tags/mklink/index.html","0e44bec2c8d0d1dbb559cf5a4c773d0f"],["/tags/office-e5/index.html","0fb458a8536550be1e8cf4db558fca1c"],["/tags/onedrive/index.html","d47c264205f74ce624822f405911f52d"],["/tags/picGO/index.html","23a00ea92d3a77b79421f575a15932e5"],["/tags/pixiv/index.html","6c8c7225faae7afa5ad443d62ef8a601"],["/tags/potplayer/index.html","9a0405dfcdec4c5d91c31d51d2050ab8"],["/tags/proxypool/index.html","590b6a811d050c639528549085620c77"],["/tags/qbitorrent/index.html","da2052b4300f6ac2964586c7e3a423e8"],["/tags/raidrive/index.html","23c9323f307d2064d3bb92fd4a947858"],["/tags/screen/index.html","a1adb12fdc510a072784c5bb66815005"],["/tags/speedtest/index.html","e53fd95dc96fd4495d9479b2acd8ac77"],["/tags/ss/index.html","cff55c7a1b925ea39f9ea0b034044c28"],["/tags/ssr/index.html","7d0ea8282c9e118ec3e1a1bf6f25ab3d"],["/tags/stickers/index.html","24fe85977a7588db01d7ddd799418583"],["/tags/surfboard/index.html","8dff45899e168d195123e58b32d97fec"],["/tags/tap/index.html","110a7043da5b156e7f26f4681e69e79b"],["/tags/telegram/index.html","3fb3b44128a6d954ab5795c084104543"],["/tags/telegram代理/index.html","63414375ff8fc86916c8fbecbf855eef"],["/tags/tg/index.html","64ae12cb1bc3f0659e7073c79a946044"],["/tags/tg代理/index.html","4b70a77b9c497688b608bb6e0681b76d"],["/tags/top50/index.html","79fecd810093d9d66be03ad22aefc50c"],["/tags/tracker/index.html","40aafed1727efad9b5f03d370cb1651f"],["/tags/translate/index.html","f3f27a2f1825a7ab86503b860fdf6c37"],["/tags/translater/index.html","c989cfe5e591edd59c4cc480758f44cd"],["/tags/tun/index.html","44b0bf95aaed161b12e319bf95d365c4"],["/tags/typecho/index.html","01769d696d22346cd4ec28b01fbf885a"],["/tags/v2ray/index.html","46741f51e82862fedaf04bc291471b48"],["/tags/vpn/index.html","c4e6bf628ac42b0b64ce66e52bf8ff70"],["/tags/vps/index.html","d8ceb9596d7b85598810def02a74c9b5"],["/tags/wallpaper/index.html","61f69a68acbbcaf106ff12c31d9bb28d"],["/tags/windows/index.html","44404d3892e66dcc200dec529b76e3c1"],["/tags/windows端/index.html","ff186072d99013147e57614283f35e8f"],["/tags/xray/index.html","a12f46e64851e02f4ae789abafe40512"],["/tags/yandex/index.html","6768fdaacc881a0db6d09856765a9fd3"],["/tags/下载/index.html","aba51632649c9a55ba3ba139bf93fb27"],["/tags/不限速/index.html","85a5a37d44e02e72fab4da7e640acaad"],["/tags/个人网盘/index.html","045b66ff07a8b3e0f35a26b11bad84c8"],["/tags/主题/index.html","fed328cadc4a4573adef095944da3130"],["/tags/二维码/index.html","e97ddf54db59075e15c76b8609f14b4f"],["/tags/云便签/index.html","a946b250a473faed2549231284abb7da"],["/tags/云盘/index.html","ced1b9d04e7cb62c4ebf25143fd6e529"],["/tags/人人/index.html","3e9a901048fcc53fe663dda8abfa7d92"],["/tags/代理/index.html","52f7cbbab549c20e942869b8936aa390"],["/tags/代码/index.html","5476a61c2b31867e8e35f424e29460bc"],["/tags/优选IP/index.html","e5abfdb22a6cdde06a77ba8e93688f6e"],["/tags/便签/index.html","a7dd46b65a56036a7e60df0e8f7ae570"],["/tags/保号/index.html","3a24bb6b7bddd37085e2aeda73b4ca6c"],["/tags/免费/index.html","59bf9955f3913e19874b51ea5698a666"],["/tags/免费节点/index.html","86b1c94cfebb950da8d88c95d4ba05f6"],["/tags/冷门节点/index.html","83d892344b3e3493788909cbfc417ec6"],["/tags/删库塔/index.html","659f959c14907b2839cc350dadca7599"],["/tags/加密/index.html","d6e94fdeb18e1708b412ccf45186eb6c"],["/tags/动画/index.html","2ff4b18410e0ca665af425deddb385d8"],["/tags/博客/index.html","246af23062902a40fc23b2f8f4dabb5a"],["/tags/卸载/index.html","ac72ed6fce0a3cd0c498fe167a56d417"],["/tags/历史记录/index.html","b4a0a38eb64b7a1dc8d70e269c037442"],["/tags/压力/index.html","64c8a86b0b63f5e5a7c742d6be9a3a88"],["/tags/压缩包/index.html","c17f7df5d5e3354d27e914fecb483fc9"],["/tags/反代/index.html","0b01f975b30d71198b91e834c46797ec"],["/tags/可视化/index.html","6017b1164daabccecc12c43d713eeafd"],["/tags/命令/index.html","18bc5a5af61a597d4e44441f1b547e61"],["/tags/国家/index.html","3e657a583799f15739a0c684f1700c8e"],["/tags/图床/index.html","3a3538a09c922c2f48f728d279297eac"],["/tags/图片/index.html","17bd1b45897c8083f8975fc03cd3ddc6"],["/tags/域名/index.html","581d2efd707efe8156b33ee9e428c51c"],["/tags/壁纸/index.html","3a59daa7bfb38a375ddd33a232dce4e1"],["/tags/多标签/index.html","33787bc345651fd01941b1605e3934e6"],["/tags/奈飞/index.html","983cfdb266ef8e88af22051653e524ba"],["/tags/存储/index.html","09eb7a6280963d226e766b62a60d5cb5"],["/tags/学习/index.html","04e266d4a4f5f18690c41bd90436307b"],["/tags/安全/index.html","3c3f85dd255777832ae53024542c43b8"],["/tags/安卓/index.html","de5db7dbf084aaaf3712178a464bedb2"],["/tags/宝塔/index.html","3296970bb7bba9e02e16835f7a98838a"],["/tags/小游戏/index.html","b1dfe97629ce2ed7f217dcfec1a2adf7"],["/tags/广告/index.html","bc34d885b59f87499f5eb489145e5c40"],["/tags/建站/index.html","374770394e0ce1163bd2acff9d9a1203"],["/tags/影视/index.html","23500ec5cc97fc3c17c47c83e4838997"],["/tags/微信/index.html","148e6ebbf4337172b74529274ae9f7b9"],["/tags/快速启动/index.html","57ac8cc44d2941e8093aecffcefcc6df"],["/tags/手机/index.html","df2db98fd3a6c449c42488efea131403"],["/tags/托管/index.html","ac5c0019155c0dd2e40b962b20905607"],["/tags/抓包/index.html","b170ab837344fbad1bf18f78971b6f45"],["/tags/抓取/index.html","83b4d1a2cdac634ef99284afcd4be3d8"],["/tags/投屏/index.html","67a64f9ad72eaf5a6eed2a2aed2d6ac9"],["/tags/拓展功能/index.html","ec178f3dbda196b2c1ac7bea3a83d66d"],["/tags/挂载/index.html","ea5bd6c75a39bd3453461a7cbc88e81f"],["/tags/指纹/index.html","0cf97573ec953aa5405a3367f7b14dd8"],["/tags/接口/index.html","3e8e68a8b1c0e270eb765c2e1c6c675c"],["/tags/提取图片/index.html","999f98ef8ee7964ded230b8b963d57e6"],["/tags/插件/index.html","ec258daa1cdcfcc72803a5077eb15663"],["/tags/搜图/index.html","d943aa51f67d79fa016b6a4c8d2e0968"],["/tags/搭建/index.html","4ef49d11f00c882563b5cd992b32d0a2"],["/tags/撤回/index.html","b982e63e2b24aa630815c182d9076025"],["/tags/播放器/index.html","4eb6d7ae62b5d468d8b4cfc82e508e8a"],["/tags/支付宝/index.html","e82ee704c77407c648d63544fd6d62f9"],["/tags/政府网站/index.html","f238fe97e65c53a8c5d426d8a28a2786"],["/tags/效率/index.html","4f0ffc840b374454f70ef04f2340b000"],["/tags/日历/index.html","df1852aa53af3e3e77bcb688eaf47a46"],["/tags/服务器/index.html","74e9c2498073b9a89df496b8298f0520"],["/tags/机场/index.html","ca2f11563562b8713cd69e9cd6614ccc"],["/tags/查重/index.html","96bea3be87c10206bc6155e1ba439980"],["/tags/桌面/index.html","cfb0dfa3a567f05238a055e7553c4fb8"],["/tags/梯子/index.html","4424e4ae845dfec17fd962b223bd4f13"],["/tags/检测工具/index.html","723be1ddbfedb666ca05bfb64515ec1c"],["/tags/汉化/index.html","e4cb7f0a0201aaedf68e6c164421babc"],["/tags/测压/index.html","8d776529a8b26f26e001cfd0ffbd68f6"],["/tags/测速/index.html","11210aa3a1cb0f1f16c2a9ce29734e95"],["/tags/浏览器/index.html","17e348d8a4852718a2237934070075be"],["/tags/清理/index.html","42f46bbb57b4fd0c13464c65e5a846c7"],["/tags/滚动条/index.html","3faf142789172680f8e564141ba83965"],["/tags/灰色歌曲/index.html","07fc6ae25f89785c850bebe53fe35897"],["/tags/电影/index.html","a71e2380b44dab9217e2f5761d883934"],["/tags/电脑/index.html","c7d66cb9457e5723076295572e11ab06"],["/tags/电视剧/index.html","32c5f90cf7ec754603b8b4be68f01af8"],["/tags/白嫖/index.html","79f0e0d1d51d6c4f38473a6670a93744"],["/tags/百度/index.html","3585f17e2b99a414e1f2559fc0eb4a05"],["/tags/百度云盘/index.html","c2820cee7480c56f05be5d5f4373335a"],["/tags/百科/index.html","79145cdbec25c5862bd17b759647017d"],["/tags/短信/index.html","bad30b39b68b8f37c9e131d48c9c0bf7"],["/tags/硬件/index.html","d579d52e956d739ed8b7442e51f567ad"],["/tags/科学上网/index.html","22d8a1785e5e76ab1566ee712bc71366"],["/tags/空间/index.html","b6f82fc5736c5c3961a4bc684be97eaa"],["/tags/笔记/index.html","15887a98f8d45540d3e436de659da6ee"],["/tags/简洁/index.html","71a7288073ba097bc9dfab48d9b0d79b"],["/tags/简约/index.html","f963deada1c6ef8c2bffa847ca636388"],["/tags/维基/index.html","9251fbec8ea5a2e9e417f259a5dbdc84"],["/tags/网易云/index.html","e054b54452d524942a1f4bb4288e74ec"],["/tags/网盘/index.html","a97f75be61e45ca474a687b3dfe28177"],["/tags/网站/index.html","c9b814c92cf22d7b8595c6cb20ed4504"],["/tags/网络/index.html","0dbc6983495b96c3af2d040e8c6fcacc"],["/tags/美化/index.html","f0c80d0526ce866218ec3ca32107bf29"],["/tags/翻墙/index.html","a33e2940d7ff42ba104ceffed68f402f"],["/tags/翻译/index.html","27cec79f7a0306f7960f64e267d2a6c7"],["/tags/翻译器/index.html","ec1670a4f2b0701ee907010c6a67eb4c"],["/tags/聊天/index.html","6e8625dafc0e7aa5c70ec031c882f5e7"],["/tags/聊天室/index.html","7e8c08337e9dfedd2c30c6919486c0b0"],["/tags/联想/index.html","67906dfdb1c2f37b679c6d9d056ac738"],["/tags/节点/index.html","4d9d0ad502cfe7f505d48ec8b85a1815"],["/tags/虚拟手机号/index.html","6b245af6638bf3f04178b77a70e70bd1"],["/tags/补丁/index.html","ee1f7e4408e8f45f6215010a6c384825"],["/tags/表情包/index.html","4ae8e6135a683491c07948fec583ea3f"],["/tags/视频/index.html","8b3c632dd7a7bd38da3a8cc35f1c07cb"],["/tags/解析/index.html","ba31de751a1938f2cbb4a51af6356bd4"],["/tags/订阅链接/index.html","f2a848ed8e2f11fd356792d7718e64d3"],["/tags/记录/index.html","4202de74187812eba298695dcaf9f5a2"],["/tags/识图/index.html","3104ae506fadaf8a57872feb0c8e7cec"],["/tags/语言/index.html","0e82dee1d05ba6773edc257da7ba6f16"],["/tags/资源/index.html","681fb3a211f8c7b968dc18668ee895b7"],["/tags/资源管理器/index.html","bc237db381297f605ee26d067c347224"],["/tags/转移/index.html","c696c40701defeb4e07610c7f9680829"],["/tags/软件/index.html","17ff1583e8b386f6381eff8a396f861e"],["/tags/轰炸/index.html","e1bf81f697fd737a1cfea65e593b6253"],["/tags/迁移/index.html","b9cedc410e60983c8e485c8a21341d2c"],["/tags/远程控制/index.html","43f9e1d3e8cfb94dada86a10908a3b1d"],["/tags/连接/index.html","53cbe40741e92a53be1f9d64904dacd1"],["/tags/追踪/index.html","09c84e76ddad801bb7f5f18e8666d3dc"],["/tags/速度/index.html","505d269cb3ea60df3ad41971e4a46f6c"],["/tags/邮箱/index.html","a2862254e7bd89cf430a6ed987a4c4e4"],["/tags/酷炫/index.html","fe220f1aa9f68fe9355ef829043e3a8b"],["/tags/钓鱼/index.html","413a2e9d504d70d094c5f3e83961a00a"],["/tags/镜像/index.html","c170af56fe556b9616fbb6db143df44c"],["/tags/随机/index.html","0757e1a3e7a3bc450121cee5ab27c485"],["/tags/隐藏/index.html","5a7de66af9bd5ecfca08c21161813600"],["/tags/面板/index.html","b6a863a9ac5536d3a977e2e99eb4a7ef"],["/tags/音乐/index.html","55c6e142a043740c4a63cb452914745e"],["/tags/高颜值/index.html","a05304b3b9f52a9b43e533897b862b48"],["/tags/魔改/index.html","6e8bd7e146aaa6b672286c28f235596e"],["/tags/黑名单/index.html","c5b363135cf46b91571bd2f8cf4679bc"],["/urls/index.html","fda437da56a0e2626b2315000742f226"],["/vps/index.html","50d74b523c322227c3111091550c18ca"],["/支持/index.html","4d369ac6f043374062144ee38a48feb6"]];
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
