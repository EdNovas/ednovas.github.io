/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","7d63eb8a5431a6a0093bce5cb197a12a"],["/2020/11/29/clash-windows/index.html","38dc69851ff00a30586280229facc9ed"],["/2020/11/30/websites2/index.html","53a57cdf81679267b65c3fd596a726c4"],["/2020/12/04/iphone4s/index.html","b2b0ece3952d02d1f9549fda50142944"],["/2020/12/04/onenote/index.html","080f3e60497624ff99bc364f37d06c4f"],["/2020/12/04/wesites1/index.html","40fb1be1e4aecc41d988e1710a223063"],["/2020/12/06/nokia808/index.html","cd2d4393353016c250d7ca8991ff81ac"],["/2020/12/07/ipad1/index.html","a4d8ecdd7d476e7b4aaa82902b3b6ea7"],["/2020/12/18/freesubscribes/index.html","b1bff76eb5405767d4992273ae05b4fe"],["/2020/12/19/musics/index.html","0db587768cf1337c8c5d54fe58702d35"],["/2020/12/19/shadowrocket/index.html","af68b11fc7944ade42f925c82fda8404"],["/2020/12/19/v2ray-windows/index.html","0f91c762cc8a8cda4a12315e853808f0"],["/2020/12/19/v2rayng/index.html","e7196033dee6acf66ae87cf64bbfa89f"],["/2020/12/20/beoplay/index.html","0bc62173c2e38d7354b5aeccd517af08"],["/2020/12/20/订阅链接转换/index.html","9f0d546aadddb21e8e4ad810a8754787"],["/2020/12/21/chrome浏览器下载提速/index.html","237da249dfc124f67711831934fc0fe0"],["/2020/12/21/免费128线程并发下载xdown/index.html","9db62e1ef374db3b5763d1ccfbede602"],["/2020/12/21/免费32线程下载软件ndm/index.html","68a6cb3719fdb6bcb55d11b7702024b5"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","033d312b2ea6bd65738fb358d22cbe3a"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","070d45b130418571f6fc901939a58337"],["/2020/12/21/广告怎么知道我在想什么/index.html","013b37bc72dec1ff81d7cd23a8a577dc"],["/2020/12/21/无名·引子（小说试写）/index.html","fb665d9d30000dadea34f75fed427a18"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","55feb273a3a34146878fcbb6616ed6c9"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","d992ceb04c1ae698431f31e5cb27661f"],["/2020/12/21/高速轻量下载器aria2/index.html","e9a97dfd6645347e1e2cbe1137e82fc8"],["/2020/12/22/2020-cee-roo/index.html","af9d515833345cd22dbf81009d40f76d"],["/2020/12/22/firefox插件、github、steam富强/index.html","9f38913d4c27e0c7560f993fd4eccb74"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","2361a7df4268bb4971a680c29918a857"],["/2020/12/26/python-day-1/index.html","ac8580c1e278f390c7bcb701d7f4eb0a"],["/2020/12/26/python-day-2/index.html","30c07baec837f188b845bbaf2e46fbfd"],["/2020/12/26/度盘不限速下载方式一赏/index.html","76b18bbc41628f0e77dbb20d6f3373dc"],["/2020/12/26/添加开机自启软件/index.html","85a00595c7a0c2330a2332e316b61de7"],["/2020/12/26/电脑端截图方式一赏/index.html","01c4200c4ef90599add41b3ff64558d6"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","ebcb11fd25a98c8e6b60197c99086a57"],["/2020/12/27/最安全的浏览器tor/index.html","1ee00dc7ce1702b859c084628f64eaf7"],["/2020/12/27/网易云刷等级和听歌数量/index.html","98ae19dd14dd6fb0be5706668c1218c1"],["/2020/12/28/freenom申请免费域名/index.html","b710fa1c0de5b388c659f65ede4a49be"],["/2020/12/31/机场/index.html","ee0e1adc2d6c4d0a50b2dc7940423759"],["/2021/01/01/M1/index.html","d169f54c322b77c6793bfa4cbc1a425c"],["/2021/01/01/compress/index.html","58d56afa1301d00732e2a47fe5652e6c"],["/2021/01/01/infinityfree/index.html","8e3e1c5d24c0ccff9bd47d8d19affe41"],["/2021/01/01/硬核翻墙/index.html","772115a1de329fe2e813d49c3c8ccfba"],["/2021/01/02/qq/index.html","48192f3d3b949b147a21d33b691a7387"],["/2021/01/03/netch/index.html","15765a2e5040b34604c780d799680b8c"],["/2021/01/03/waifu2x/index.html","6680c62f047025abe1513d58e789bbfd"],["/2021/01/04/ads/index.html","bd8dfb951c26fc153e57a19a1912fe81"],["/2021/01/04/games/index.html","f89aed8bb5ac05ba9b7097a0db03fd6b"],["/2021/01/04/heroku/index.html","6836876d0ec55e4b2eb049a5002de02b"],["/2021/01/06/movies/index.html","76d05e0e1c4cf4034439a6d0832f85ce"],["/2021/01/07/google2020/index.html","cee0916d92c94ad680a9f0359ff2983c"],["/2021/01/07/lucky/index.html","fd35fa745b6e7368a433320f96de3003"],["/2021/01/07/spotify/index.html","6b7eb23a58396c08056afd132e938a93"],["/2021/01/07/thunder/index.html","e07fddc304bcbc6e16160896439515c9"],["/2021/01/08/adguardhome/index.html","cfd38b7630a64b975c3624f524d9a623"],["/2021/01/10/IBM/index.html","072f3c17513f6c1408e5f88eded97785"],["/2021/01/10/potplayer/index.html","c403aac4ce3c36e7e12bcd986a2b296d"],["/2021/01/10/sakuraanime/index.html","4749ee602055cec6e69ae27d6bff9948"],["/2021/01/10/美剧星球/index.html","20166c3c0471c4ccd71822f4b57d809b"],["/2021/01/12/telegraph/index.html","7c1765c4d9664c220803fc2700bad744"],["/2021/01/14/comics/index.html","abdb1dacc025a60cd56ba7aaffea75bd"],["/2021/01/14/ftp/index.html","e0497cd2756a434964f66a9bf4b64d93"],["/2021/01/14/oraclecloud/index.html","841854b0f77d08325c434d63a2f782d9"],["/2021/01/14/porkbun/index.html","1de02abb75d262307d159d757a4999a6"],["/2021/01/14/powertoys/index.html","6405906a98e30eca55a3c18c49a6434f"],["/2021/01/14/taptap/index.html","19a05d56e5e2c084975556fbbf776000"],["/2021/01/14/ubuntuvsftp/index.html","888414221349316039c7aeb153e8d7d9"],["/2021/01/14/小说/index.html","f8c1d6d7fb03f9656ad873598e4a1c99"],["/2021/01/15/freeproxies/index.html","14a63e74e0f994c1954f781d19a18bdb"],["/2021/01/15/incaseformat/index.html","c6bd894fbf1aca8ba005308e3d1bf484"],["/2021/01/16/euserv/index.html","f3a2351c360f5e731c1475da043f0a7f"],["/2021/01/16/winxray/index.html","759a212310eab3492081319a4072f777"],["/2021/01/18/qqreadhistory/index.html","9ef1ca1120a8463f89108a49b7e6f4aa"],["/2021/01/18/qqrevoke/index.html","bf51cbcda364044494baecc54c82a4fd"],["/2021/01/19/freevpn/index.html","d6b84f091928b0b248d40b1e5cfc836c"],["/2021/01/20/browsertrack/index.html","a6173c544a20a112fdcf25e04c6661d9"],["/2021/01/20/v2ui/index.html","5b9d1fcb92240d1763435090bce41ca2"],["/2021/01/21/failedtoconnect/index.html","6205d8bc47edf7abe8f06f979c815486"],["/2021/01/21/gitcalendar/index.html","91bcc25ee437bfd238f0f32435a9eb44"],["/2021/01/21/markdownformat/index.html","7a0a3e00f83034f6608850e8c5dec708"],["/2021/01/21/markdowntable/index.html","34c6977bf9ff5b76c8039cb16ab848d7"],["/2021/01/21/vercel/index.html","23f6788b69de83a4687e7ce9817c1221"],["/2021/01/22/hardware/index.html","184b504b0119a2f1934232849ede7c7e"],["/2021/01/22/muviz/index.html","a138fc3fd116cfeda4510147c712332d"],["/2021/01/22/randomapi/index.html","e7d0c6070a3a05c05cd80ce627ecd21e"],["/2021/01/22/searchimages/index.html","ec00ad4c3709efb5e7b99c7fb95d6960"],["/2021/01/23/RX文件管理器/index.html","74e6b5e70a0f1956550969010ded7c98"],["/2021/01/23/chromeflag/index.html","252c09563dc7ede6868648b1682dc9b8"],["/2021/01/23/qttabbar/index.html","eabf1c7d316b1c7a4a84ae2c48752d7d"],["/2021/01/24/githubspeedup/index.html","de3f93790aaf1342881f150f2c5ff8f2"],["/2021/01/24/jsdelivr/index.html","cc42534d21b0e321065d0e1c725c10e1"],["/2021/01/25/note/index.html","856866b74bdf556c1a533de8c0b7a20b"],["/2021/01/25/soul/index.html","c2fe406d2dab9fdb5e9338410af12b92"],["/2021/01/26/herokuxray/index.html","d1d526674f9d2b77e47ba7e5554cf6a9"],["/2021/01/27/proxypool/index.html","4310ed6eb4dbaa5bc30364d35a2064a4"],["/2021/01/27/tracker/index.html","38436d6eb2c8b8950756f120c47020ef"],["/2021/01/30/pandownphp/index.html","e27e974a31795fd44fa1134a45f648e6"],["/2021/01/31/newgroup/index.html","ccd31dcd1c2e053f93442cc1e125bb5b"],["/2021/02/01/clashlanguage/index.html","02aa0fec7ee070f19877261e014c7383"],["/2021/02/01/encrypt/index.html","b3754cfe06caf5228f562138356b7602"],["/2021/02/01/footermotion/index.html","7b30b0b63abeea5c5a0d5a4896345684"],["/2021/02/01/gitter/index.html","d1eb062c47b569740aaa399f02e7d6ff"],["/2021/02/01/pixivtop50/index.html","b2a1cfd28e0f89146ff4a611382ded35"],["/2021/02/01/scrollbar/index.html","dc22bf9f8ba1b79e73a750a1820ed139"],["/2021/02/02/clover/index.html","90ebd0559a40183b9687105ba1eb39ce"],["/2021/02/02/maya/index.html","e57b3a8b37a09c9cc836032848de9670"],["/2021/02/02/speedcontroller/index.html","4564bba93d12c55fd113fbe66b8bd741"],["/2021/02/02/yesmusicplayer/index.html","0014a381c5626d25e13f6b58a2f59269"],["/2021/02/03/lenovoonelite/index.html","7fb83809dd43f05ab011ea546c908b01"],["/2021/02/03/skipads/index.html","8e701f4538325bec5d0532d2ba96bb2b"],["/2021/02/04/picseed/index.html","aa7cb81bce02744f42cf4824a6fee80d"],["/2021/02/04/renren/index.html","cc7501a470fdc62efe33492461e19c37"],["/2021/02/04/serverstress/index.html","6e4a19244e75389e20c8f6d02511496f"],["/2021/02/04/wikipediazh/index.html","dee97291f5f7c0fabac81916e1e3f491"],["/2021/02/05/googlevoice/index.html","3fbd6b3a4c032bda2d94c962e4934ebc"],["/2021/02/06/clashconnection/index.html","7e77510d4b3ddb32ae06296deb43eb56"],["/2021/02/06/gvtransfer/index.html","a0d0db12acfc9fb198e1ab9482e6410f"],["/2021/02/06/todesk/index.html","c06f6f94a37abf6b7ff3d1a7aba5d972"],["/2021/02/06/vpnblacklist/index.html","20adba153ab8306cce7c89eea0e5a0e9"],["/2021/02/07/mklink/index.html","50a0e2be941d6d2d6882ed859c2a69d5"],["/2021/02/07/speedtest/index.html","7d10baa0dc0978f2bf730dad8818dc20"],["/2021/02/07/translate/index.html","5e6d84d43fdff447b831489970132a41"],["/2021/02/08/ewomail/index.html","2aa8fa898de5b6ebac557a5ada33356d"],["/2021/02/10/officee5/index.html","07e31804f922095e28f7b322c8b6e3cb"],["/2021/02/10/raidrive/index.html","8df186fc79e36d77a5b20022fb554126"],["/2021/02/13/e5sub/index.html","f47c1678bd8d0e8266a751bd1feb3a88"],["/2021/02/14/screen/index.html","e7f1ca741b014901d1c9cb2c450d5a3b"],["/2021/02/15/clashtun/index.html","72cb96e8fe9d51887f431ff16efc26fe"],["/2021/02/15/messageboom/index.html","f2b1a68bc728f85b821f05194c74ce05"],["/2021/02/15/oneindex/index.html","33ebebc062affa6334fd6b935710947e"],["/2021/02/16/govsites/index.html","7b780d9b06f92c047aed82d91cbb1fff"],["/2021/02/17/hexototypecho/index.html","d29430469225eb296fed897790aed51a"],["/2021/02/19/fiddler/index.html","41093e66057a1129c7bf1beff907a5bb"],["/2021/02/22/potplayerset/index.html","180cd21778279d8157bdebbab88dd868"],["/2021/02/22/studyresource/index.html","6f74257a511b50c5643d8f1015d34577"],["/2021/02/22/telegram/index.html","0d51500f588903f3045987a4adead972"],["/2021/02/22/videos/index.html","8265c111beb905e8a11e997bcc14e46d"],["/2021/02/24/mtproxy/index.html","612ff80958581c1800c0f9d761f3bb40"],["/2021/03/10/catchcat/index.html","96452864d6b1a80e4f06978af531c29b"],["/2021/03/10/neteasemusic/index.html","918fba834c287ffc214d349ad205123e"],["/2021/03/10/surfboard/index.html","21d2be480d0e3490da1d9be4e7cac4bb"],["/2021/03/11/vpnandjc/index.html","600414c5e6e977f54b26611a4c31afe1"],["/2021/03/12/qrcodes/index.html","21f638e1b398a7f736504f795cf0a915"],["/2021/03/20/qv2ray/index.html","8c6d6c1e7fba3f08b1eef513fed03833"],["/2021/03/22/freevps/index.html","4190775755c9cb4042abf763cc2636e1"],["/404.html","95fc3a10e8eb300419fb02c0d8be34b3"],["/archives/2020/11/index.html","0c0bb89845ffe9907ed1a1db99f1d83f"],["/archives/2020/12/index.html","5f3d934e650a96264b7d6ed458c659b1"],["/archives/2020/12/page/2/index.html","e16990a4742a26511761289c04944a96"],["/archives/2020/12/page/3/index.html","ff8fd565bef242561b2b84dd97b26f3a"],["/archives/2020/index.html","9758968945122a12fd0abff7836c12cd"],["/archives/2020/page/2/index.html","a877ece05b83726fb35dab2e7b3d68b6"],["/archives/2020/page/3/index.html","e253527d92399da9643be7ea48abdaf2"],["/archives/2021/01/index.html","567ac76d15698db94f116ad507871334"],["/archives/2021/01/page/2/index.html","2d0d32cf726b2967021714142d9c59bd"],["/archives/2021/01/page/3/index.html","19058bedc2c50693083661f6b583f4f7"],["/archives/2021/01/page/4/index.html","d034baebdcc97c5e342a092226f7bdc4"],["/archives/2021/02/index.html","98d70323917ea9b80858c10fe32ff0a7"],["/archives/2021/02/page/2/index.html","1506de1fb58b658ff8f3dadf343f3263"],["/archives/2021/02/page/3/index.html","1128632e25cbfb03e027e9f73f4bc42a"],["/archives/2021/03/index.html","37fcf7b1b1ac084ae7c471c7b5936bc8"],["/archives/2021/index.html","ea6e8b8240ab6738276bd42fd4558bac"],["/archives/2021/page/2/index.html","52f8c8b096d8973abace74c92db86afe"],["/archives/2021/page/3/index.html","4d5844a3a825fcc5ec41ce47221e5969"],["/archives/2021/page/4/index.html","a2ac355cefa2847f0c39832ca88c50ad"],["/archives/2021/page/5/index.html","bae813973e9eef92ca95b2abe56ea63a"],["/archives/2021/page/6/index.html","bc0172012793a7dc3998177b4be8aec3"],["/archives/2021/page/7/index.html","a91892ff89b41fa9f2c14c7f81422d95"],["/archives/2021/page/8/index.html","5dd38032ff684829b8262a740972cfd3"],["/archives/index.html","18d117452cd22d2e8b7ba210ef745cec"],["/archives/page/10/index.html","4ab7316ffcb0651063c86f72548a97df"],["/archives/page/2/index.html","c5ec4cbe80a161c96c67735c65272cfd"],["/archives/page/3/index.html","5470de1e190e87cfc1153d6a10b678c4"],["/archives/page/4/index.html","7e3f441a7094a641af658e79e492de9a"],["/archives/page/5/index.html","619c186a65897d5f361da7be3facf152"],["/archives/page/6/index.html","396d3bde5e15637a0aa4a55d40e9db35"],["/archives/page/7/index.html","c6aa3b7131f06aa2845073927bdc1225"],["/archives/page/8/index.html","71ed5a3c44b3c8f651b5ac21b813cfc5"],["/archives/page/9/index.html","7a582b9dd8d5ce5f0c0b53d9b9c25265"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPN/index.html","5da6c27fed2b59d154ec287a3486ed42"],["/categories/VPS/index.html","a68f65cea405dbaabb63b57dbe44d3df"],["/categories/index.html","3ba8f66ef4943f72ac7357096a13a56b"],["/categories/下载/index.html","7ea024e7a167c38f559e6fc0f6c5fc25"],["/categories/安全/index.html","79054c726cb4e9c230656b0f0c8c7377"],["/categories/建站/index.html","2ba0c5008f5f14cc9621ab898ef26995"],["/categories/杂/index.html","9ffa43e002ac6f6bb85a8caf88537624"],["/categories/杂/page/2/index.html","0eebe9981c75e19d64b6730286571cda"],["/categories/测评/index.html","b97eb1090ef7f91b2864870dca6eedea"],["/categories/科学上网/index.html","3f8a6891865e68cb62dd37ff91e6e8db"],["/categories/科学上网/page/2/index.html","5621614c037674b1ea3de40e465536a3"],["/categories/编程/index.html","2babfe2da596a71620b5bb7d842d3139"],["/categories/网站/index.html","80f4a37576e6683f00e93ef5f8dd8fa7"],["/categories/网站/page/2/index.html","77ef1861cca143a23a0a0ef01df39a4c"],["/categories/软件/index.html","143da4d4737b0d3eb07127c9e1fd11ee"],["/categories/软件/page/2/index.html","7430f473b3916d50908f015922e470d8"],["/categories/软件/page/3/index.html","89025863d6ec99893577415840df8227"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","f20ee80bf8f0fc317a8bd14ed21b8946"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","f5e74b595be1ea512aff86293c69fd35"],["/ios/index.html","70fefb156a9669bb0a1aa812f2b87523"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","0437b610641989d6b02a6e4db91c0ea3"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","cb471c543ce3a89bcbdca2f0d8da4168"],["/page/2/index.html","df8f5589d4e4f4feb870925c7a6f2fdc"],["/page/3/index.html","b411dac6dd7553be9bd286dbf1db74dc"],["/page/4/index.html","d19076033bb697ca234b327dd57ab406"],["/page/5/index.html","f4a0f8b96881dce2b7196493ae5a0ea9"],["/page/6/index.html","b1a06520b8fe55db558f85c9fb3703d1"],["/page/7/index.html","c2ecc77fc6a06d4d1482d36d5dd3208d"],["/page/8/index.html","5feae66f6f77c948ce4d25acc86f1fc8"],["/page/9/index.html","cb3b51a5dcc43eface9586ee7494c628"],["/payment/index.html","98e357fcdd544de70cbe6e83fdb31343"],["/privacy-policy/index.html","2f547ff5cd830beae51430e299a682b1"],["/rss2.xml","fd0becf27be425d34bfe75a3fbcb6231"],["/search.xml","d3aeb32d94830ed1532f70fef1cae8fd"],["/sitemap.xml","a7b0daf2638567b8eb17973051c9d85c"],["/sw-register.js","bd0a7052059436f051978fff471b703d"],["/tags/5t/index.html","1d579368221aa439d559fdb1042ce187"],["/tags/Clash/index.html","b2145231a0fafc81930aac5e2d7690ec"],["/tags/Clover/index.html","217e6d6a07acf90de447de1a81654ee3"],["/tags/E5/index.html","0a1f43c2347b3ef216d298432176bda0"],["/tags/FTP/index.html","e0776ffb785047d530ef4fcf788cd755"],["/tags/GitHub/index.html","89f2d3af827be46f04ffe7e5b9d7085c"],["/tags/Heroku/index.html","493e304c018ac3d3581a786d6c6e41e9"],["/tags/Hexo/index.html","c5754851c2300d91a2994ada458ed6ea"],["/tags/Lenovo/index.html","dd7f773db999b79f44bf51eb64e4c8c5"],["/tags/Oneindex/index.html","50f7c13ded001185051d828d6180e630"],["/tags/QQ/index.html","4dd37746733ef796cd65f8570b8589b9"],["/tags/QTTabbar/index.html","ee8b1042c9ead0434ade3ecc546e2f46"],["/tags/RX文件管理器/index.html","25f79e1f7344a1887f01546dfcaeeaa1"],["/tags/Todesk/index.html","f54f3fc2c67f9c31197572ff1ec0af9a"],["/tags/Vercel/index.html","d0b76677a2b36f49a74958c4c500d215"],["/tags/ads/index.html","637789852331cf0529a838f87a735695"],["/tags/api/index.html","cab51855be55b210fe5ac377303d6d75"],["/tags/app/index.html","8ca7212cb252093a219550330aedc0b6"],["/tags/blacklist/index.html","cb3ff89f7f00b02b2cdce9246059bbe9"],["/tags/butterfly/index.html","a81476572d41802db1ddf07eec1fa4c0"],["/tags/chrome/index.html","d61a82ba6a09457cef33f2cdb66614fe"],["/tags/cloudflare/index.html","b232085059ccee2987b8032231c13410"],["/tags/cmd/index.html","23026880ed3f2d28c219e9a4dc44e42c"],["/tags/c盘/index.html","568d3d5715e3dfdb0f7ca44b5ea49177"],["/tags/email/index.html","899eecf05c77ad7140dc3974218bf371"],["/tags/ewomail/index.html","a425fefd634de6209d3794c164c2a814"],["/tags/fiddler/index.html","08645ae97f120e872f259af2a9883065"],["/tags/flags/index.html","ceac6144b6d8f4a6959b459135cd7767"],["/tags/footer，页脚/index.html","3aef1ebdf87f787f1a07ab9726871741"],["/tags/galgame/index.html","f1f038e2a4edf2399ac40b2fa5541f8e"],["/tags/git/index.html","c5914fc041d2d3acfe7c7e2042d567b0"],["/tags/gitcalendar/index.html","403d6f06b2867d39d310b8daf246d427"],["/tags/google-voice/index.html","d11f63d2c5c7a0a6bcb71b96a6431801"],["/tags/gv/index.html","bb12323e35577fa5d49558897b576644"],["/tags/html/index.html","3b04c1812f954defbef558189d80d557"],["/tags/index-1.html","ee91480257f2875e829a614cd1419220"],["/tags/index.html","51733e47533b6d7e06bc19b0bff69a8d"],["/tags/js/index.html","79fffe4964c5a3df897310755717b948"],["/tags/jsdelivr/index.html","54e0a40d7ef090c415f4532676923b8e"],["/tags/linux/index.html","98771dca72d68029dd43700033bf4283"],["/tags/madVR/index.html","49ca0f3d2bd6c3e6b61c8475710e83e5"],["/tags/markdown/index.html","b56b4e35ee9123f26f2f9fccbedf9cf9"],["/tags/maya/index.html","6e9e54fb46df36801d92c11d1851ba97"],["/tags/mklink/index.html","da30ee990e023e03b8770e0c5d75c692"],["/tags/office-e5/index.html","39a08413f3e539cd122e19b6115e9982"],["/tags/onedrive/index.html","5fbecca8494d20be0df6698036ba742f"],["/tags/picGO/index.html","9058df7eafb3af4990e0f87f52037b86"],["/tags/pixiv/index.html","2e13d912c85dc16eea9552abe18372c1"],["/tags/potplayer/index.html","62c4da4ca6ab75da9660042de5f407be"],["/tags/proxypool/index.html","e23bec0989929c3ac95e40ddabda44b2"],["/tags/qbitorrent/index.html","314f2babadb531d046a1753d187a5313"],["/tags/raidrive/index.html","f0ed22c77d377783f1be4017b720c323"],["/tags/screen/index.html","f24152e5474a86125db5702a109d69b1"],["/tags/speedtest/index.html","2a595d688342511b65fc2665ce8f86f9"],["/tags/ss/index.html","091b9a6429cb68e783092de016c68f79"],["/tags/ssr/index.html","6845cfe88cef85d93bb4fa4963c05852"],["/tags/surfboard/index.html","00069d17a31044280ab1181c3f233f73"],["/tags/tap/index.html","ec3e6cec772f50e2f674d08a8f4a2bd7"],["/tags/telegram/index.html","8adcce1b399c3aad175690619f38a32c"],["/tags/telegram代理/index.html","523f3e57406257eba66b1c783f261a5b"],["/tags/tg/index.html","d2ca37e5b366c1b26934237840f2150e"],["/tags/tg代理/index.html","36692f3db2861d9c92b566374af2632f"],["/tags/top50/index.html","d3ffc430006195158fd16167e8b72400"],["/tags/tracker/index.html","8f5e2fe5aff84628d089a7acd9e9607c"],["/tags/translate/index.html","c04aac00806251fd82e5b993b369609f"],["/tags/translater/index.html","8f5512d5a8707b737950ac85adaa422a"],["/tags/tun/index.html","cb08137b4e7855aa7393d8791843222b"],["/tags/typecho/index.html","ad27be28710b51db29437424996975bc"],["/tags/v2ray/index.html","98ea2569f66ec0747aa907352813a62b"],["/tags/vpn/index.html","38c6a129f677964f8e8dd89e2bdec2da"],["/tags/vps/index.html","023288d696cd2aa807eb7e6ad8b558a6"],["/tags/windows/index.html","c241f89d7e75fa36d518ff5879901d12"],["/tags/windows端/index.html","517c1f45fcae3ffb488b99725b8d7487"],["/tags/xray/index.html","d76cf03403e2946312b7a332a8c4c15a"],["/tags/下载/index.html","7b59df96ca40c6f0796c5242400e4072"],["/tags/不限速/index.html","18e8b5c304d9c7e87cde2a646f0ecca3"],["/tags/个人网盘/index.html","800af72e44dc6d7e02027cc92d02e60f"],["/tags/主题/index.html","9832fcaea927761a3c39e4fdcd4fcbce"],["/tags/二维码/index.html","cc3c5dd50dc8b6289905d4330e8ac115"],["/tags/云便签/index.html","7c69e3d57afe6d44e8af1e9f559e3706"],["/tags/云盘/index.html","2f99dbc33d9b4d82003576fdcd52a2b8"],["/tags/人人/index.html","325556d822286e0bb051b5b6b79e2adb"],["/tags/代理/index.html","e04ec35c420353848219acbb34925753"],["/tags/代码/index.html","e6576f910d4f385b6e61d5430071d954"],["/tags/优选IP/index.html","3f4f4b384d76887ebff8cd4b3863ca44"],["/tags/便签/index.html","617829072ed49ec4efc62f88563a13d8"],["/tags/保号/index.html","e2e1f9906cdf82208d654686a84842f8"],["/tags/免费/index.html","8497aee020edecb633f0c3e5dfc6384f"],["/tags/免费节点/index.html","9f16ad9ab66a452edcdac388870062fe"],["/tags/加密/index.html","b948c268d489eac2581c21f001a40f51"],["/tags/动画/index.html","c55f2b272c1b3408709ec408729859ed"],["/tags/博客/index.html","d34f3454bdc4a17778aaa76a22d61f0a"],["/tags/历史记录/index.html","01cbf5fca5ff023fa14c0f6c7a1d6b58"],["/tags/压力/index.html","40f27aaf6f2c49f6414202d845bc5e5d"],["/tags/压缩包/index.html","4a99743b1c00ae5f831a87ce17cd57a3"],["/tags/反代/index.html","c2bbb240300b118e121b0399efa4ca42"],["/tags/可视化/index.html","ef3f920a21872f5e90807d66931c6849"],["/tags/命令/index.html","3098356acfe4925760ad61fe32d95f80"],["/tags/国家/index.html","aa874644ba771dbced279faefec12fa0"],["/tags/图床/index.html","19d31c719383bef927914366e555a107"],["/tags/图片/index.html","40ef3d451366e90a143589073a1b0952"],["/tags/域名/index.html","86b6fd65b252c015441aa9ec1981da66"],["/tags/多标签/index.html","10046d7d894dc93990b47ed6fd763d21"],["/tags/存储/index.html","617e8c9269cfb96f15a24c2139c1e41c"],["/tags/学习/index.html","c16c2a47d2974c53b405efaf5f04e83f"],["/tags/安全/index.html","25a89f27918ad3036c318c95919669f8"],["/tags/安卓/index.html","7602f418f185468cff2bbba6f449d4b6"],["/tags/宝塔/index.html","94fc7ed14368041fae3e50a659490beb"],["/tags/小游戏/index.html","bf0e81ef0d8aea0e4a913db0a701db03"],["/tags/广告/index.html","6179501a15093c8ae6068f6cd7df8ad8"],["/tags/建站/index.html","d4487c71568243d5faeeecd07d01c653"],["/tags/影视/index.html","7715cf850bedbff83e3571b18ae5a05c"],["/tags/微信/index.html","81b1ff42fa2a9358ce53f0494a059c5a"],["/tags/快速启动/index.html","32ecbb7d70180720ba26e49ac0f14426"],["/tags/手机/index.html","b78c5b8a7bce349f25c42ad66a6a394e"],["/tags/托管/index.html","503058534756ad9b9c3e7dfee6b7faf6"],["/tags/抓包/index.html","0c9ab133eeecd08bbbc3bde80f127aa9"],["/tags/抓取/index.html","dc03e8ac3611f6f7788ad36d1c75c463"],["/tags/投屏/index.html","10c55c753a277f85d30e67cfd8982db6"],["/tags/拓展功能/index.html","8efea49c165b111818d699885de19c1f"],["/tags/挂载/index.html","9bd9c19a9759f4693efbf5f733ae8083"],["/tags/指纹/index.html","fd7c29709dd60c99a4ee1b2403f40699"],["/tags/接口/index.html","d96b98cde65edeb6b132b1ae95fd06ac"],["/tags/提取图片/index.html","6cd47cd776a7dacac109294078ab2d21"],["/tags/插件/index.html","ee45a4ab1d9b6908ace4e5fb679105eb"],["/tags/搜图/index.html","a1d35eb04724b22b77be00a9b6b30f87"],["/tags/搭建/index.html","30a14dae24662e95fad952afa016d0ba"],["/tags/撤回/index.html","1621e2b2b30d79a715cdbfd5ac05e570"],["/tags/播放器/index.html","900a7977785d084ce6fba810c03aa7bf"],["/tags/支付宝/index.html","3c96f3c972433e142d00e05fe5cd3c5b"],["/tags/政府网站/index.html","3eb8fbce9570db3750c662e25762dafe"],["/tags/效率/index.html","fc7bec820a9e44657732e02a9aa6faad"],["/tags/日历/index.html","1793a9f570a42ddd728e1cd84a180b26"],["/tags/服务器/index.html","cbaccb06aa5ba2d149c2414a51156268"],["/tags/机场/index.html","1b4b6ae7173bffdda753cb2260131a77"],["/tags/桌面/index.html","04c72060fb41301d42b174a60df42fc1"],["/tags/梯子/index.html","19ef6d43e9c1524459c11759d96e7f5d"],["/tags/检测工具/index.html","f0d9b427579f16c6445681522c07bc0e"],["/tags/汉化/index.html","f7fac02419684c354ef63348af402236"],["/tags/测压/index.html","f593d3f4b05ecb856aa34ddf37aa9b5b"],["/tags/测速/index.html","2a58c5247154d81fcb5a7ffe9f1a9510"],["/tags/浏览器/index.html","ced4c1df4bb63d078941a4694281f34d"],["/tags/清理/index.html","fb1c4bb34a3fccc22b8a01337e39b637"],["/tags/滚动条/index.html","dddc84f6f861a76cbbd154498eda0b45"],["/tags/灰色歌曲/index.html","1b23922a4c84e6f35c258fe8db718d6a"],["/tags/电影/index.html","b92192ddd0b29bae3121664c485ea852"],["/tags/电视剧/index.html","182a1ffa89ba3d07e9b138d613e569ae"],["/tags/白嫖/index.html","1a5f15a56077857cd69d7e33b482f5e2"],["/tags/百度/index.html","3ac90a37b6228b7351a0710c01fbc7bf"],["/tags/百度云盘/index.html","680e49c476c22632ebff89cd7fe54ddd"],["/tags/百科/index.html","265febf9035a3cc270303c8d3e77a2ae"],["/tags/短信/index.html","36595f65a14f975cb7028e6f50fdf01c"],["/tags/硬件/index.html","43083a503676b7866d3f2b6331892050"],["/tags/科学上网/index.html","bbac9498af275480875552786617bd00"],["/tags/空间/index.html","27cd8618c095be02cf64c503adff524f"],["/tags/笔记/index.html","4b912c6d9786aeb03bd54a38e15a4fc2"],["/tags/简洁/index.html","df7755ccb54d01f69ae37ebbe9688127"],["/tags/简约/index.html","fde98d21d777aabd4d56fa8f61458847"],["/tags/维基/index.html","12d20edccf3d9b17e9deaa7969aacdf6"],["/tags/网易云/index.html","db94190f3e62bbca7598bf161b4ebaed"],["/tags/网盘/index.html","83a119f31272cd23e23090c7c6225d0c"],["/tags/网站/index.html","5fadc0fa322e34f53c30d51eff94f6ad"],["/tags/网络/index.html","d6cdcbb532fa86c833ea0828121f51d7"],["/tags/美化/index.html","96b5c6bb7962aa5dc3426a56cab0c2b8"],["/tags/翻墙/index.html","6d4044bd00b8643816e0ad1890edf4ee"],["/tags/翻译/index.html","4c7bd77c28581981648739909b86f4f5"],["/tags/翻译器/index.html","2a602cca801456f846a2d9484431343b"],["/tags/聊天/index.html","5d9c2fcd9b972d6aeff15454a761aec2"],["/tags/聊天室/index.html","c49bbd1bbe2936074c8f0b2a1b8f2eb4"],["/tags/联想/index.html","873ae4fafbce6df7f3061257e2ccf2fe"],["/tags/节点/index.html","17339ebd6126e6eadb4af168a063ed1e"],["/tags/虚拟手机号/index.html","6a31102c7438e8e0f6c0436f63e7fa6b"],["/tags/补丁/index.html","fcf08e1fb7a0ecd15dcad2a796917128"],["/tags/视频/index.html","38120f2acbfae6eebedc37cc93e88a65"],["/tags/解析/index.html","c4350768f71b5acfc4bf824efdf77e11"],["/tags/订阅链接/index.html","361c34f77b2925c8720454a6ae941fcc"],["/tags/记录/index.html","77ebbe6abe373e214e4b91c2d78b5720"],["/tags/识图/index.html","222cb435e77929ec9fca8b1eaa183b6c"],["/tags/语言/index.html","53f0f91d59edd1e31be21fa1c791946b"],["/tags/资源/index.html","df0fbb5f2ac08f33183f346737c73322"],["/tags/资源管理器/index.html","1c0446ecbdaffd2893aa192dabb26250"],["/tags/转移/index.html","522c245df9d4ba06636685df621be046"],["/tags/软件/index.html","d7c92ac2e9f803a0dec89e103c7b5c31"],["/tags/轰炸/index.html","8308f9d1f613d64dc9ef4799a2b09053"],["/tags/迁移/index.html","baad702f41f026f6ed0af97a6aa77565"],["/tags/远程控制/index.html","156bead6f09538c68333ea59079b712f"],["/tags/连接/index.html","392d9e485d56afa7ac6289435111367d"],["/tags/追踪/index.html","b07b33ae81251574a0b2cfc8a7684ea7"],["/tags/速度/index.html","dee66df7475dd1ffb22b4b059c51cafc"],["/tags/邮箱/index.html","2a1f5d8548142db2cf98962c5778bb33"],["/tags/酷炫/index.html","13a0f94ce4db65468d43477779a3cdab"],["/tags/钓鱼/index.html","91bd610abc0850c09602377f473b34ac"],["/tags/镜像/index.html","b2c1a14812849c6f277c06a30dba7423"],["/tags/随机/index.html","81bdc6b8ac46215bb287f7a7df517c52"],["/tags/隐藏/index.html","1bd88c7b05694ad4790c9b613ec027b3"],["/tags/面板/index.html","840ef91ed06e43cba1e7e6a08dbb764c"],["/tags/音乐/index.html","4e4131fe4b6725b082824768cfcae62d"],["/tags/高颜值/index.html","00007cee29b91f143c79bffecc99a95e"],["/tags/魔改/index.html","62711712df6703bbbd47c460892dfd55"],["/tags/黑名单/index.html","b7e4cdeb385f09a39ef90b88765a4052"],["/urls/index.html","3ad70d80d049b291c014cce2b7af737c"],["/vps/index.html","c47c5bf7d05efda3d717221b7c9ecf76"],["/支持/index.html","56bbb2a2a5d2f8b01bd44dd8195e786c"]];
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
