/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","2c104b004b0d1bdd1dd8bb3f164913a5"],["/2020/11/29/clash-windows/index.html","16268dadfee25349e7f4f623d5455555"],["/2020/11/30/websites2/index.html","99bae3c6761fc2287833515a46a0555d"],["/2020/12/04/iphone4s/index.html","2bbf7dbcffe6483416d590ac126f78f1"],["/2020/12/04/onenote/index.html","2e660d7754f93c9d256c65321c86f7e5"],["/2020/12/04/wesites1/index.html","dcdb57e3da5b3b8286bec6dc31a7eced"],["/2020/12/06/nokia808/index.html","7b31c33539766dc19579d7b0265ab6a8"],["/2020/12/07/ipad1/index.html","7e04d82715a3d529710aa29b91dfe353"],["/2020/12/18/freesubscribes/index.html","ca41d26158416a8760587fc25789b39e"],["/2020/12/19/musics/index.html","90b9e10d5cde67f03448d9769999ba25"],["/2020/12/19/shadowrocket/index.html","a81f1583d89f30cb018d5cd47f88cfda"],["/2020/12/19/v2ray-windows/index.html","649a2596874d01682218ad673b9197c4"],["/2020/12/19/v2rayng/index.html","4136f503b60c4356730192f51ea0831b"],["/2020/12/20/beoplay/index.html","7cec779dfb853b62da49d4f7206a46fb"],["/2020/12/20/订阅链接转换/index.html","c2a03b1162151fb8463c94414402abf8"],["/2020/12/21/chrome浏览器下载提速/index.html","fe163d68ea4ec749b3157b7645601fa0"],["/2020/12/21/免费128线程并发下载xdown/index.html","945a19fb8bec2f93d3cd3e06d5e861be"],["/2020/12/21/免费32线程下载软件ndm/index.html","9c9530a10f44ba7443eb245a5f817386"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","a5c01f420ba1e3e0ac5874f69dbd36f3"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","88b91cd56a4f4d765186680ca3112b2d"],["/2020/12/21/广告怎么知道我在想什么/index.html","7712d6a10a88bc5de558f77c1b076258"],["/2020/12/21/无名·引子（小说试写）/index.html","16598a2b7bffdb0a5ea252375bf71524"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","b83955978336128af3ae69dc6f9f7c3c"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","3b231b1ffa38a7565266f177626ec020"],["/2020/12/21/高速轻量下载器aria2/index.html","f2eff6be01996267c3d475ce9364dcbc"],["/2020/12/22/2020-cee-roo/index.html","529279ed30d7c694467b7fffce6c1406"],["/2020/12/22/firefox插件、github、steam富强/index.html","e1faa2535ff21a151fb47ffe219ed636"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","0d6378f20e0c972d30678c505b6d4563"],["/2020/12/26/python-day-1/index.html","36d4d4a5146ff16cf2b8cb3534f47a69"],["/2020/12/26/python-day-2/index.html","cdd8fc33ab5bb14627fe0b92e536a5cd"],["/2020/12/26/度盘不限速下载方式一赏/index.html","00fb6f51bdddaf4d9787ab373c483166"],["/2020/12/26/添加开机自启软件/index.html","f8e633c24ca72643d208fa4fbcd865ff"],["/2020/12/26/电脑端截图方式一赏/index.html","cca16739dfcbcb3ef1bfee4597e617e5"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","3e3b438f98fcfa38129e1b7890ca7238"],["/2020/12/27/最安全的浏览器tor/index.html","0075c672fc49c91846d7459e0f882280"],["/2020/12/27/网易云刷等级和听歌数量/index.html","f049feeb6b8193c0c21f6ac3f897f3b0"],["/2020/12/28/freenom申请免费域名/index.html","4c888b55479e91075501e1f2f1917621"],["/2020/12/31/机场/index.html","3a18bdf099363ca852f2b7398c297f32"],["/2021/01/01/M1/index.html","978eb3ed011e3ee6974517dbfff487f9"],["/2021/01/01/compress/index.html","c7df82f24bdfa97646e16c9553f1993c"],["/2021/01/01/infinityfree/index.html","226b4e7b68231b263e0a73bf8f96eaf6"],["/2021/01/01/硬核翻墙/index.html","ff068e5201b9a947bd552c1523ea67df"],["/2021/01/02/qq/index.html","ff42ef22ed050dc233306731c115325a"],["/2021/01/03/netch/index.html","7e07a84fdeff4c366e851afae73032bd"],["/2021/01/03/waifu2x/index.html","2956680c66a1e1eaf6b596de0164254e"],["/2021/01/04/ads/index.html","c0512fbf75529e660e28b964552594bf"],["/2021/01/04/games/index.html","f486e22b9c3ff10c5c9bd30fb6b9c1d1"],["/2021/01/04/heroku/index.html","a584ca717aeb29963dcad9ebd1b70744"],["/2021/01/06/movies/index.html","041a8c031c6822866c1f6e067de945a6"],["/2021/01/07/google2020/index.html","a7b8c4ae15d49652e56867649352137f"],["/2021/01/07/lucky/index.html","3cb1e6824ac6e9fe7e57a59a6b1029d8"],["/2021/01/07/spotify/index.html","8488b66cc2e83fc9da37267aebbff92c"],["/2021/01/07/thunder/index.html","7037329151ace51a17ee399a78726159"],["/2021/01/08/adguardhome/index.html","40bd4b6920860093699f93bb77eed2e3"],["/2021/01/10/IBM/index.html","497aa254f1c79aec90efc0efb503c29e"],["/2021/01/10/potplayer/index.html","123ddc67ed6c9074083f3991d1eced35"],["/2021/01/10/sakuraanime/index.html","42d6427f1f8d334d35d4d79c1fa6a58b"],["/2021/01/10/美剧星球/index.html","0bd4d760e6cc806b92e24f42a70b79d0"],["/2021/01/12/telegraph/index.html","09a59783d03e6cdbd74f5ca47a8316b4"],["/2021/01/14/comics/index.html","3252b0e6406832ccd3e5860daa479c27"],["/2021/01/14/ftp/index.html","bbc23b80e8a9875606a009de8da17cc2"],["/2021/01/14/oraclecloud/index.html","0d981cc6e8ccbcdba7649c754dc582f6"],["/2021/01/14/porkbun/index.html","a5bc5927546cf010013b27f3d36f0ce7"],["/2021/01/14/powertoys/index.html","3b146c2d30229c546a561c12471fe79a"],["/2021/01/14/taptap/index.html","6ad56639fa3a1d1c8d8b82a651a62c15"],["/2021/01/14/ubuntuvsftp/index.html","2f6fe936f1837107c8b28c699450318a"],["/2021/01/14/小说/index.html","ccb60f84faed06bccaff01586e480fe5"],["/2021/01/15/freeproxies/index.html","995e3c2846bd2a5f22cb018b9feb8f73"],["/2021/01/15/incaseformat/index.html","e3f1382dcb4b5ad3839f3702ac2377d9"],["/2021/01/16/euserv/index.html","ef507bfbac2c748be7acfd4e8394308b"],["/2021/01/16/winxray/index.html","05878a2491b745c0934363b497e371aa"],["/2021/01/18/qqreadhistory/index.html","9a40450c5318a5a2a2b83e18e3093e15"],["/2021/01/18/qqrevoke/index.html","2a72f87f64ff8cc6ff497faf1366f8a1"],["/2021/01/19/freevpn/index.html","249b3f36666eb02768afeebf01fcfcb1"],["/2021/01/20/browsertrack/index.html","4c8034edc4b6c6ee6bc113832e2b4bce"],["/2021/01/20/v2ui/index.html","807aa880321209fd301ad6bf243a4bdd"],["/2021/01/21/failedtoconnect/index.html","55ed59495adfef9aa575e903efe3087d"],["/2021/01/21/gitcalendar/index.html","51759869cd0fe3ce7f6017ea9f8f66c5"],["/2021/01/21/markdownformat/index.html","fa6655e5c9c98957cbf4b01c372aa874"],["/2021/01/21/markdowntable/index.html","81a663eb89cf583d114c6b22d6d3df45"],["/2021/01/21/vercel/index.html","920657eda1a6405e9eaef3972f8b6ce7"],["/2021/01/22/hardware/index.html","16561156b4dbdd76d463ff961f0e6114"],["/2021/01/22/muviz/index.html","2951c8bf0be24b67479d64abf99bf041"],["/2021/01/22/randomapi/index.html","b66a2ede465cae3377cc584b86970f91"],["/2021/01/22/searchimages/index.html","735ff0e651ab2ecba4c72c655af71e91"],["/2021/01/23/RX文件管理器/index.html","f7b255417f311f731626b0f6749a019b"],["/2021/01/23/chromeflag/index.html","ad4894bb8cddce453fa8d13eb0a08945"],["/2021/01/23/qttabbar/index.html","9da028fbedbf92ece123be1bb4f0f8af"],["/2021/01/24/githubspeedup/index.html","a9d7c30ef4226505335c5183005871d2"],["/2021/01/24/jsdelivr/index.html","6eb10b2f9577ffaf20fd0dd3235c5186"],["/2021/01/25/note/index.html","3e7e4d56060f2aaef41c71942912f293"],["/2021/01/25/soul/index.html","e2078fe3ec6127f8f2e03b15f9bb3a7d"],["/2021/01/26/herokuxray/index.html","7abe3650ec6622dae332a2f8665cdb48"],["/2021/01/27/proxypool/index.html","6aaae52c43be2f016ca13cb252130c8a"],["/2021/01/27/tracker/index.html","3abcb48a5d6b79678974919ef5883959"],["/2021/01/30/pandownphp/index.html","7e83171c84abc6612d6fbeafa7fc5d95"],["/2021/01/31/newgroup/index.html","22fd67bd416629060395d8a68f9d3ded"],["/2021/02/01/clashlanguage/index.html","35ecf50bbdba1ebde2271f1f4b7129e5"],["/2021/02/01/encrypt/index.html","617c19de7fd81c525debbf89e88e5ecd"],["/2021/02/01/footermotion/index.html","55dd601136b8b65a36d9122bc0a733ad"],["/2021/02/01/gitter/index.html","853e8b1d22af4001ebefdf91caaebe52"],["/2021/02/01/pixivtop50/index.html","ea18d0872aa8d91359e8714a00b33a25"],["/2021/02/01/scrollbar/index.html","d724c80f474874c3fbebbd2803d01797"],["/2021/02/02/clover/index.html","887d3c11b7e5544c054e87e6c240e3fb"],["/2021/02/02/maya/index.html","a4ba0edfad95aa7996222bbac02cc441"],["/2021/02/02/speedcontroller/index.html","7ca3292d162680805a83620875ed2f2b"],["/2021/02/02/yesmusicplayer/index.html","74721dff0263d47d832667fc22f3f324"],["/2021/02/03/lenovoonelite/index.html","7dba6e52a7a129e23fb5c841fbc5d096"],["/2021/02/03/skipads/index.html","0a429a2a010c1ae70b745a9546d5a76c"],["/2021/02/04/picseed/index.html","a8169551711c6c8edf1cd6a80cdec765"],["/2021/02/04/renren/index.html","5e143291805719be340dc05c592a01a6"],["/2021/02/04/serverstress/index.html","ec21d5ef417be927fdb1eb36b8d1060f"],["/2021/02/04/wikipediazh/index.html","76368181319b580d9d47512dfe6ac18d"],["/2021/02/05/googlevoice/index.html","2cee52b51ad92629f2acec50376eae36"],["/2021/02/06/clashconnection/index.html","9c2b22967cfd167d431e814829f868bb"],["/2021/02/06/gvtransfer/index.html","77966c2582a142c4788d07ed1640b2b9"],["/2021/02/06/todesk/index.html","7ccd07124851ae79b4a73ad9e5e0b8a8"],["/2021/02/06/vpnblacklist/index.html","fb89d88056c9789ca3e4b9c36732b655"],["/2021/02/07/mklink/index.html","d8cf23ad92745c0e636396cbe0d668dd"],["/2021/02/07/speedtest/index.html","c8770533f27abc3bc621c6b23c70da96"],["/2021/02/07/translate/index.html","553da48439983f435a09ed6c64450ac5"],["/2021/02/08/ewomail/index.html","25478bed04bf5ca9874dc0f84bfd7ff1"],["/2021/02/10/officee5/index.html","d88ab337102aee1eba6a04fe80ec0d2c"],["/2021/02/10/raidrive/index.html","b57b273c0fcb426094dbcf5b95d3d9a1"],["/2021/02/13/e5sub/index.html","a8f975a139593185395af6282d6bf4ef"],["/2021/02/14/screen/index.html","0173231f0a6e2ff3ada9e096b5a9f515"],["/2021/02/15/clashtun/index.html","6856554620b79cbbc79816f81d6c9539"],["/2021/02/15/messageboom/index.html","c52252df1406cf45beb7e0334eff25cf"],["/2021/02/15/oneindex/index.html","ad4ad4cb93e5d56143bc0eb8e79e03d4"],["/2021/02/16/govsites/index.html","823f8c5fa96114fad8cfd7a2d97184f0"],["/2021/02/17/hexototypecho/index.html","54c455dec19462a515fb8dbeb7ec7819"],["/2021/02/19/fiddler/index.html","6b7dff00858af8db3d2c863fb10fb1e6"],["/2021/02/22/potplayerset/index.html","6077de2c0734eb252476053c6f6df1b7"],["/2021/02/22/studyresource/index.html","96af3b78dea42bcc48636f075e707726"],["/2021/02/22/telegram/index.html","44159295ff8bad5f712d0e333f82d678"],["/2021/02/22/videos/index.html","cd83e9953a73e33f265ba92a6ed8c426"],["/2021/02/24/mtproxy/index.html","d4852d6efb8793e45959cd79019304a4"],["/2021/03/10/catchcat/index.html","2025df813ad22f285411545adb0a0435"],["/2021/03/10/neteasemusic/index.html","83e7c09ffcf679b690801c8f15efcbd4"],["/2021/03/10/surfboard/index.html","1cf2a80fa990938f62d33c38e49670ab"],["/2021/03/11/vpnandjc/index.html","e59fc3744bbf85f8627655eb0421bc1b"],["/2021/03/12/qrcodes/index.html","350523b6842e6967ec2d8a3f660cd1b7"],["/2021/03/20/qv2ray/index.html","787c96415128324749ea75fa95453245"],["/2021/03/22/freevps/index.html","f101ee812dfb3c92b5e6f0907737f94b"],["/2021/03/24/tgstickers/index.html","6ba865a356fa9c3d2ca523fc817d8d23"],["/2021/03/25/clashx/index.html","a19bae4316dda04e31610660f64cdf43"],["/2021/03/26/bingwallpaper/index.html","514d4ad8a28ff3073c0886b5d2e435d5"],["/2021/04/03/soutu/index.html","36d674acc9cb0c5f4506d8de5b53cb06"],["/2021/04/03/tiyunti/index.html","59d3a8be5640383d9a1f18fc8d6e1314"],["/2021/04/04/btpanel/index.html","17184be8158f40f074ce00d389b41817"],["/2021/04/06/atlasos/index.html","7ad9703ee3fb59d5aee09dfa43791168"],["/2021/04/06/cleaner/index.html","48b726c2f327f39247bdfd7197b08733"],["/404.html","dee120c4851399b8e18e33a56e9af423"],["/archives/2020/11/index.html","f0297b482c5846be4685ed060effaf9f"],["/archives/2020/12/index.html","3c16ccf0195d3960c6bfc0d9d6b6a645"],["/archives/2020/12/page/2/index.html","df0cab170077e2fa623dcd40a34e589a"],["/archives/2020/12/page/3/index.html","12d5ba88a2adf1d5ecf41e675a2e8062"],["/archives/2020/index.html","3df95564c31f6881a302c859f10ce37f"],["/archives/2020/page/2/index.html","0d041c4e9ff962c4818836679fa7bed9"],["/archives/2020/page/3/index.html","61389a16be925de545edba138fa8896f"],["/archives/2021/01/index.html","a4dcdd16acbf56468dfe184bd367c2c4"],["/archives/2021/01/page/2/index.html","99db12534938c782208239626a54646d"],["/archives/2021/01/page/3/index.html","6ffd1680c7f3b6690f31e8580dd54aa9"],["/archives/2021/01/page/4/index.html","983d6c760a7e44bf86f672d02778ae08"],["/archives/2021/02/index.html","bbf9628c8aa2c58a73fe4bd50011cb22"],["/archives/2021/02/page/2/index.html","ed00f15986034200442967a0e09dfefe"],["/archives/2021/02/page/3/index.html","6c447165d0c82ff68eae9e02f3272166"],["/archives/2021/03/index.html","417c1d515e5c2efecc8511b3154b4e9e"],["/archives/2021/04/index.html","f678191832e65b9b20e423506a3bc4df"],["/archives/2021/index.html","df16344c5d5c1c3ed428d3a9ef832521"],["/archives/2021/page/2/index.html","a1700c7e7559ba8a6cd9a629005e3756"],["/archives/2021/page/3/index.html","67fcd8f215c4aa23ed3172954267b475"],["/archives/2021/page/4/index.html","e9357d69091e59b0362d20b25be7a360"],["/archives/2021/page/5/index.html","e20eab55927ce8a95dfad276e80738cc"],["/archives/2021/page/6/index.html","8a33ba6f5610d69703f73f7aa718a695"],["/archives/2021/page/7/index.html","a8a26f8bf8ed6bb4bd15eb394a64ff22"],["/archives/2021/page/8/index.html","cc8381ff2a6c692793707880f3cc2c56"],["/archives/index.html","f5da1681dcd5be248160005c989843b5"],["/archives/page/10/index.html","c2a7bf2299f8f7648e7f4bab3902060e"],["/archives/page/11/index.html","f0822020bcd070723a26223d6b1ff169"],["/archives/page/2/index.html","a10783ce27ab54154696ffcc6bb81cd8"],["/archives/page/3/index.html","24a153f31608dccded23d4067c8228ed"],["/archives/page/4/index.html","016aa6aae1240d3c1952708929589d6b"],["/archives/page/5/index.html","d5b5a570591c37bcfd0285fb3b1b3ff4"],["/archives/page/6/index.html","a2ab95c1f78681f1d190aa98eb006fda"],["/archives/page/7/index.html","dc526003600a073b4c97846483790bef"],["/archives/page/8/index.html","acef8a58d5cbfa88a2269be40c0a2740"],["/archives/page/9/index.html","5b6e1a28cf38242867b6eb47cc313845"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","23f854e98ad690cc2f90c3f8c521fddb"],["/categories/index.html","a2a932d4d1dd4cec986db405943d6188"],["/categories/下载/index.html","aeca060f556fdc1246cf6b4f157d4a60"],["/categories/安全/index.html","3584c1e82daa9b0d02124c65df34bcfe"],["/categories/建站/index.html","e3b7dae346276ce13ce72e0785199284"],["/categories/机场测评/index.html","aa1308957fb665048c5591fb257b6cdf"],["/categories/杂/index.html","9f0d68f3b277999b695e0bc6f9904ec3"],["/categories/杂/page/2/index.html","daeea283645464a9c36619a4f68df70f"],["/categories/测评/index.html","3d9a02966ef0402a8edcdf28c7b5d704"],["/categories/科学上网/index.html","e03b31bfe427c139cf0d9ba6fe7ce9d4"],["/categories/科学上网/page/2/index.html","bf1c038a15327521c525a13ac1ff6c2e"],["/categories/编程/index.html","e80abba9df173a5c2206317954060722"],["/categories/网站/index.html","89f83e74b96a1aea3c3e3852418f3d03"],["/categories/网站/page/2/index.html","ef95872d5281602f40461e1b8876285b"],["/categories/软件/index.html","7d189c97e680bddd454e4a3a3fa2fe12"],["/categories/软件/page/2/index.html","09a8a5bb86b3f854dab096bf94b2c52e"],["/categories/软件/page/3/index.html","2b620c086657892cdf698f7d769edc9d"],["/categories/软件/page/4/index.html","c67e00a4a2dbb5973ea17af7bd1ece8c"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","c99d2617af76aac6acdc7579a3ae0958"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","ac928678361e4fdaac14ef777f9a0aa2"],["/ios/index.html","b324ff885e933166921c80dc5d41ca76"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","95a10b99cd81c953addeb56403c35184"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","faa3030a3e16756ea2ad3b120f1d4fe5"],["/page/11/index.html","6ae902ca88c2d2feeb31da4ee1910b2b"],["/page/2/index.html","43267942ede96aff5004f844cf2079bf"],["/page/3/index.html","b0773ad5f5bcf55fca2acd96d46b482e"],["/page/4/index.html","cea79b4e4dd5ba8aac56a4620d000732"],["/page/5/index.html","94b9b1959df55e57e90a67ed62ac008e"],["/page/6/index.html","2210fe3942fb6a3250fabd009a1b756d"],["/page/7/index.html","b52deb25b966119a183056063e5b1efc"],["/page/8/index.html","9d54f3f35fd66658d1eb27763518b86f"],["/page/9/index.html","aadac7df4085196aa347084ce968103d"],["/payment/index.html","49f7612dd43c7f64450bd5dab9dd7f84"],["/privacy-policy/index.html","1a804c6bc210dd20da691ea9eb2a7924"],["/rss2.xml","ee4a62a37bfbbf7a4b7fd9cb53b2a02e"],["/search.xml","e718b311320466f7fd7a986872c30b05"],["/sitemap.xml","c99f384ef8117247b7170a028bda5c60"],["/sw-register.js","7817a841f1c30fda8e47477b854129f4"],["/tags/5t/index.html","b92a05a706fe5bb9d0ea61edd900c864"],["/tags/Bing/index.html","95760665dfd8da0a2ccab13367fcedda"],["/tags/Clash/index.html","12062f25b364dc16d75a88b2202b5a49"],["/tags/Clover/index.html","de07992fbd245746b70913dc90b98bcc"],["/tags/E5/index.html","87df44d22a07c93fab9aee4aedfcb094"],["/tags/FTP/index.html","0b9b4fa6db75053439c10d00fa0ed3c6"],["/tags/GitHub/index.html","6235d696084eadb0ee1d4d7fe4a9bb5e"],["/tags/Heroku/index.html","0462706ff7e6b86df4d586000abfa2c9"],["/tags/Hexo/index.html","3ce9be21fd30edbdf3ab61dcde51ce86"],["/tags/Lenovo/index.html","32a047f0abfd52d105f3f2d2cf16567d"],["/tags/Oneindex/index.html","4165b66262f228110fee84e8605a29dd"],["/tags/QQ/index.html","22cb5c3c18457a57a769d6185696b815"],["/tags/QTTabbar/index.html","4e1b1b577a80be382935989b93b83032"],["/tags/RX文件管理器/index.html","d1be7f616b34da441b9963ec19982b1a"],["/tags/Todesk/index.html","0b07ef88e9af453ea62a9585895133a5"],["/tags/VPS/index.html","972d42fa2c38ee938d4da58b50f528e5"],["/tags/Vercel/index.html","01e9d2be958a6f2e9e646011f38e6c73"],["/tags/ads/index.html","466c8a46e21e7755dcb38193556ea833"],["/tags/api/index.html","e69ba2f5ebcfe5927bcca805c318e403"],["/tags/app/index.html","e56719e154ef562894034bd68cfe5475"],["/tags/atlas-os/index.html","d126dc429054f440215ded4bd05ec987"],["/tags/blacklist/index.html","7856a40278dc0e4d1b5659a76711104c"],["/tags/butterfly/index.html","6cbe466cab7be53862f629a3e2086ae1"],["/tags/chrome/index.html","498c65c6f2dc8a10b3d1a2b729765a78"],["/tags/clashx/index.html","fbc87531b2cdd52f674236a6e65a1b61"],["/tags/cloudflare/index.html","bd51b0de18f581e531103bb26c40c956"],["/tags/cmd/index.html","38152f3f965f7c880b8d2fc8db3c277c"],["/tags/c盘/index.html","74b9bd4e5e1d9bd4605f924ab22455a5"],["/tags/email/index.html","3bee1b38b29927d34f8430d6021bcfad"],["/tags/ewomail/index.html","664281c98855a53ae20562956425d978"],["/tags/fiddler/index.html","cd7826ffed8a1929b87bf6055049c8bc"],["/tags/flags/index.html","06f8f9340f783f7e25b03ba64ee29098"],["/tags/footer，页脚/index.html","20fe4b3fe7e75b215db392737298af3d"],["/tags/galgame/index.html","799a5031d28a8ac1f2c30dba16067c13"],["/tags/git/index.html","477e04661d47cedd4a948852b1e3b335"],["/tags/gitcalendar/index.html","b6ef37b156c281f2131b3adce3b2679b"],["/tags/google-voice/index.html","320d25841f47a117ead5de884a5fdc87"],["/tags/gv/index.html","4a852052ab86431d1a222da15a20c85c"],["/tags/html/index.html","9361e6bcb0e25a64689ae59b79bef57a"],["/tags/index-1.html","3d41cc862861273f66879ed27b65302f"],["/tags/index.html","e16cadc93d8e5e92b527b535de955650"],["/tags/js/index.html","06c8d8220edc851f7bb4615695685a0f"],["/tags/jsdelivr/index.html","6fa470cfc6783bd1588c6f3fd3c70220"],["/tags/linux/index.html","c9aedfa101906f04fb1460cfd5796189"],["/tags/macos/index.html","985e961bc95896b5a4a33d443844551a"],["/tags/madVR/index.html","c8952aaf96ed3283433beba98139fba9"],["/tags/markdown/index.html","4a9241fb8a13ea3503129a1ad350a8aa"],["/tags/maya/index.html","94df166616c860fe44354fb7d4ab157a"],["/tags/mklink/index.html","6937d79bbda4c9bbddb250fd55a02ffa"],["/tags/office-e5/index.html","b75003e4d5657ba90df42b0d48efbeea"],["/tags/onedrive/index.html","1ed23db86aaf0dd0804c09326c4f5675"],["/tags/picGO/index.html","0581feb2768aa24844a82f0fb3f935e4"],["/tags/pixiv/index.html","951363bee9e2828730ac648d1a4eac09"],["/tags/potplayer/index.html","2354b6910df2dee0b8e97dfdc13fd823"],["/tags/proxypool/index.html","07ce549bd5327b5b8ee980e13c05888f"],["/tags/qbitorrent/index.html","558e92790cbd97e29d7c6987d9f152c3"],["/tags/raidrive/index.html","f17d3138ac599717105c20b56c42f9c1"],["/tags/screen/index.html","773f3173d35ffccc5b55697fe160e5d4"],["/tags/speedtest/index.html","3143f6a089fc10dc781d1c57f5afd697"],["/tags/ss/index.html","3170edfff313cdd68d95a9f9d5390898"],["/tags/ssr/index.html","b733e46d842c885d6b55ea15e2cbe1aa"],["/tags/stickers/index.html","559898a1cb5c595e6ddcaa7ed798d8d4"],["/tags/surfboard/index.html","a3b8d5b74a62d4acd0d30a415834ee22"],["/tags/tap/index.html","95132c829a9c7d9f4edb61a141208149"],["/tags/telegram/index.html","372b3a651c239c7bd8fec53d9417090c"],["/tags/telegram代理/index.html","1b11aea903b986bcdb21ab0f7040447c"],["/tags/tg/index.html","d4ecf5c2d85a5c3be637cf8418c58dcc"],["/tags/tg代理/index.html","fdd19a2bedd2898ae7e32ed3c8c14893"],["/tags/top50/index.html","9f699aa1f20d71524c8aa62fdc29a49f"],["/tags/tracker/index.html","ecbd37452bae6fd0b674fdcfda7cb9d3"],["/tags/translate/index.html","bf7a85ce001554b61be2105e0deda10a"],["/tags/translater/index.html","2830e6a488059eb191e558d349568828"],["/tags/tun/index.html","140c52ca4ae3c65740f40dc599b5bd04"],["/tags/typecho/index.html","0b7e1938612471c278b55a2d04a3db5f"],["/tags/v2ray/index.html","0b0569cd641751de42efaec63106e4ac"],["/tags/vpn/index.html","33108a14b32f48390904b6bbf791a382"],["/tags/wallpaper/index.html","08d0f954ffb2e1cb0a9c3e8a20ed6462"],["/tags/windows/index.html","26086a39c7ad08d67e8d2a130718db99"],["/tags/windows端/index.html","32fd7232440f23898561abf67745307e"],["/tags/xray/index.html","d94039decf34efedef93d54805624922"],["/tags/yandex/index.html","a07bd46db65e3a509028b358f539cd60"],["/tags/下载/index.html","24b67fb8e70ec927321ca720c9d62065"],["/tags/不限速/index.html","11429c9bd9d448ee1a19e80f8b8ff1c4"],["/tags/个人网盘/index.html","763aefbd7021c166285719332fc0409d"],["/tags/主题/index.html","ce1f1d83688505bf1ff7336289e6187f"],["/tags/二维码/index.html","d449ae3ff4ea041afaf76fcee0d3a16a"],["/tags/云便签/index.html","688104eb89c34051d2f3daa4b546a8fd"],["/tags/云盘/index.html","6e5dcee7c3ed067ff0dda2a7277c0f73"],["/tags/人人/index.html","c63ff6f55fa15c6ff7f69e3faa52748b"],["/tags/代理/index.html","9abf9c4dce27ca993a60e0126bbcf98f"],["/tags/代码/index.html","24cfadfe56cda5369282c85568cd0940"],["/tags/优选IP/index.html","ccc45b5f914a6df44341d86a241feed0"],["/tags/便签/index.html","b3003032198bd57af619135ca25c63ab"],["/tags/保号/index.html","b9f2cbad218238d94b5d6a833cc4bfe2"],["/tags/免费/index.html","38e40235252f0e5ea4111b5543237d41"],["/tags/免费节点/index.html","ade94f436786680bc5ff112345ae7021"],["/tags/冷门节点/index.html","acf465932ecb36c98da6a240ffe0463b"],["/tags/删库塔/index.html","29dfa37700b05bc3313de5577fcbd929"],["/tags/加密/index.html","85265adc03cc5b7ba4f235fa13452ac2"],["/tags/动画/index.html","b45ac9a90d103c222645ebc16eaf27bf"],["/tags/博客/index.html","1e959f3b787ff863c71019940757b75e"],["/tags/卸载/index.html","65a16cef762ce2f37441b93819bd0066"],["/tags/历史记录/index.html","917ec7d63948b07ad4189250f24931b5"],["/tags/压力/index.html","336995f15a9317c14987bf95f0650893"],["/tags/压缩包/index.html","48fd0ab72a18fb0e75229be73009915b"],["/tags/反代/index.html","e72070534600ed85be7839c0606a4bc9"],["/tags/可视化/index.html","882a62f94d9d8579b31c11fc64d6efc8"],["/tags/命令/index.html","7d37c89de1e6c8447fe7ae30c03594d7"],["/tags/国家/index.html","c9c01e76533b38f1d99310b7bd26a034"],["/tags/图床/index.html","eb3efdb2d25f384d846ba3b1df525fda"],["/tags/图片/index.html","734c673b05c173da96e82859a42547ad"],["/tags/域名/index.html","66f42e065bb16c3ba87430231c224c82"],["/tags/壁纸/index.html","0180e465f54858a50ffa6402c3553458"],["/tags/多标签/index.html","bb2fb29aacc3a0cc133f3e6c05688836"],["/tags/奈飞/index.html","4ce6ebe565549f0d89b34f04e95b3f9a"],["/tags/存储/index.html","fa591e9f1085fb0c6fcfabc7469cf724"],["/tags/学习/index.html","2eba8a16b6d1ee67744f4440c4e515c3"],["/tags/安全/index.html","739b12a70a00e9aeacacac512e5903de"],["/tags/安卓/index.html","fc9e47d153e391d4e07acf5c65ee30d0"],["/tags/宝塔/index.html","3afde85318776dbb242a9b20817d012e"],["/tags/小游戏/index.html","4a30d6e4075ed26b57df7eb956744a22"],["/tags/广告/index.html","43e9cded6f3105c983e2097716b98c6c"],["/tags/建站/index.html","21f378916d173b52ae2fd1c868ff39b9"],["/tags/影视/index.html","21b6f503399d2f1a2684df2d939bd45a"],["/tags/微信/index.html","a1c24cd37b7e1d66899fe6d9038abfd9"],["/tags/快速启动/index.html","4f7b4d872fe16c96a55e9673a5ff0444"],["/tags/手机/index.html","bc3e4c1d28c32da6b31453bd0beb3dc4"],["/tags/托管/index.html","dc56583e2511dd2b24e317c691541f8d"],["/tags/抓包/index.html","af21b2b3926aaca5f7e2610f99501ec9"],["/tags/抓取/index.html","f4cf4ba963173ec1df4fabaaf74e1835"],["/tags/投屏/index.html","8be68d27026e252f1c118883074e86d8"],["/tags/拓展功能/index.html","8b22c0acbe573d2bd8856c84f7e33cb0"],["/tags/挂载/index.html","1dbde9799738c4e38a156aa87e0013d5"],["/tags/指纹/index.html","17e50613dced669a33a2599ed64b6c27"],["/tags/接口/index.html","6ab5698a531ecd10e3aa551fdaad16f3"],["/tags/提取图片/index.html","6cfb9734b54eeb9623a932aa4794adf3"],["/tags/插件/index.html","10f5ee4e4bafcfb0b4546bcc7fc569b8"],["/tags/搜图/index.html","e8664ac68a60a71d2a55be793f5fb112"],["/tags/搭建/index.html","d4fc55c797dd8f3ee5a2587f75b09d61"],["/tags/撤回/index.html","2d5f3af4f5b9a6596976c308b8bdfa8a"],["/tags/播放器/index.html","4ccfe1fa131c3ff5ec57fb78888f6bd9"],["/tags/支付宝/index.html","0a9690e29c01f4a54c0c40b48ae4b704"],["/tags/政府网站/index.html","bdfe39922a2a8ce0406c690097cedbfd"],["/tags/效率/index.html","29791d7b05d712a2d6cabd164330db33"],["/tags/日历/index.html","6253dd757111a2f67ca6269662287fea"],["/tags/服务器/index.html","fc158a04bd004d069790ee9b5a8e41b0"],["/tags/机场/index.html","4a3454fbabf7dd49cf607a1ea3b0c14b"],["/tags/查重/index.html","7d4cafe55e1050acf264a0ee29a58fd6"],["/tags/桌面/index.html","8ec4d139dffc7ef5644fbe0266e46c99"],["/tags/梯子/index.html","f4a546c861d2eb2ae5b07bfbdc870d9c"],["/tags/检测工具/index.html","4a6c285ab34b6666e5ab830bcc315c97"],["/tags/汉化/index.html","23cba9a2fcd0a7b340f8c7325cf0e312"],["/tags/测压/index.html","dc66cb7edf8b0d7360429179734837e0"],["/tags/测速/index.html","4d8e8c7eadd3555d722dcfe9d2994819"],["/tags/浏览器/index.html","a988697f9e4376a5e205a0fd6de24191"],["/tags/清理/index.html","5b0bf2118e5fa47c2fe50e1042efa47b"],["/tags/滚动条/index.html","52e6df45d3841be0066d56f77dee9126"],["/tags/灰色歌曲/index.html","3b2b0a3438856234b6b86fe6cd436e7e"],["/tags/电影/index.html","2998c0329e3a0df8333c503c10e7dd94"],["/tags/电脑/index.html","fd690086221dbe687845d4153d7a391d"],["/tags/电视剧/index.html","ef8f59138ac84732e19987f641d09be6"],["/tags/白嫖/index.html","0ae866e1a8935e0710ce14d3bd06102f"],["/tags/百度/index.html","0c5c847e0f7b4efe27225293e6c39808"],["/tags/百度云盘/index.html","eda33f8373a739c675d0365e7e89c005"],["/tags/百科/index.html","a7c557c1deb6d90606715b5edd85ea35"],["/tags/短信/index.html","5978f08af979f4d59dc2578bbffbfa30"],["/tags/硬件/index.html","03c6272e453cb88d30ab14d1ab894a50"],["/tags/科学上网/index.html","0f270bc1928d132289d5903a83df251c"],["/tags/空间/index.html","ba55aaefda977c92a17be90c048716f1"],["/tags/笔记/index.html","b9fc1aaaa34fa7da252ab32f1b2f9f2f"],["/tags/简洁/index.html","a081baf32175729f0ac9a8e2a0ce1585"],["/tags/简约/index.html","32e3bbc8f063e61a84904f594140e0c1"],["/tags/维基/index.html","d085cd83818f5a78d6669208f2c80a30"],["/tags/网易云/index.html","b3f11c6c397e3304b2231b455c822e2e"],["/tags/网盘/index.html","fc9d5680bf72c03d1ab9528f257c9c08"],["/tags/网站/index.html","34b66766ff7f3f7da52c36a2590622ae"],["/tags/网络/index.html","5a6313e5a5bba4c2b25467afbed94adb"],["/tags/美化/index.html","1f7778ebd92826d9c168f046275f0014"],["/tags/翻墙/index.html","36b66dd4e7e295033a132a8e60061441"],["/tags/翻译/index.html","25157740121d2bb17d7579ea02fddd84"],["/tags/翻译器/index.html","885f04de5b765e101df28c7eaf28460d"],["/tags/聊天/index.html","78281ccedc595eb67983a36e66d67b6f"],["/tags/聊天室/index.html","efca470f6f63303861ec669c99544262"],["/tags/联想/index.html","c990ee7ed398fb6675d036c4d1ac5dc7"],["/tags/节点/index.html","ae6e1b711aa246fbbc4d752f82470722"],["/tags/虚拟手机号/index.html","aae85d80a74f213e37471d0ac4436b21"],["/tags/补丁/index.html","3ac580b72a866d49eb42500c7be1c427"],["/tags/表情包/index.html","504af76b109cfe382f1c133af561e78c"],["/tags/视频/index.html","2de2d02cec1513a69219a242cc2bfb3f"],["/tags/解析/index.html","8bf06b26f6faf46d497ac881f0a5e38e"],["/tags/订阅链接/index.html","c4673a7360aa0ab24b525fdb4c40e26e"],["/tags/记录/index.html","5e7bed1818f677da1989343d0d4692c1"],["/tags/识图/index.html","5daefad572f30c72445a675f75b97356"],["/tags/语言/index.html","6b65b6bac72131c3b91f37acc8049b38"],["/tags/资源/index.html","6061e7ada2fc700219837b001fe48a90"],["/tags/资源管理器/index.html","04f9973211fdfb0f16f1a232468878ac"],["/tags/转移/index.html","2ebd6a31e20aecc0011d8df9550b9a8d"],["/tags/软件/index.html","ccf145201d25d8dfee801725f7b76570"],["/tags/轰炸/index.html","0a4dd225e8a436d4c5a25789c87303ad"],["/tags/迁移/index.html","f69227c84823b1301ea1da71ae333e8c"],["/tags/远程控制/index.html","019af14c48043b683e9e27b45429b4ce"],["/tags/连接/index.html","9db28ff6ea9a0e82cc8d83c0a2e79135"],["/tags/追踪/index.html","20e3c879e4a82872d913cf6a10a17137"],["/tags/速度/index.html","938842bb55ebd2389489c58c2d9b10a2"],["/tags/邮箱/index.html","ba8332c8bd2c7e3281fd9f774002df07"],["/tags/酷炫/index.html","5b60ab6571ab0660956db3cfc0291d6e"],["/tags/钓鱼/index.html","b45ac9af98cbbec9bc4a6716bd668401"],["/tags/镜像/index.html","98d8bb07906e69424cdc663513412f1a"],["/tags/随机/index.html","d1992315a4f7aa0e3792423b9c387bd5"],["/tags/隐藏/index.html","e2f09abd3f40417925a0d114780870be"],["/tags/面板/index.html","c6fef8328733e8d2aa0e3c1a933c5d64"],["/tags/音乐/index.html","9c6ed23c322ee415d7368e766966703d"],["/tags/高颜值/index.html","18e8e43a73bf2cf532eda9962e60bd34"],["/tags/魔改/index.html","f237bbfedb769bd8bfb260f5801426f8"],["/tags/黑名单/index.html","ccbf7f8e18d9362143ce433a75b2c0ec"],["/urls/index.html","237d91aa27710fe355e823a379e6308f"],["/vps/index.html","e6d389c70f9ab8eee5e0a0d8bafa91c2"],["/支持/index.html","29f3eb8df2b76ca247e84c0bbe23fb70"]];
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
