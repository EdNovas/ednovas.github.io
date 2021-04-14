/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","cb7d244ebb65057819905f4cda762d70"],["/2020/11/29/clash-windows/index.html","e1c9ab05bf06b0951c3f0911c44259d9"],["/2020/11/30/websites2/index.html","2d6937730da78b63bc6918a6a012dd41"],["/2020/12/04/iphone4s/index.html","3bdaffcc92b16062ce215fdc5845cbcd"],["/2020/12/04/onenote/index.html","ba715973204d8fde8d02add92a6a8c9d"],["/2020/12/04/wesites1/index.html","ae8f230b7d38a9159792222629db6f4c"],["/2020/12/06/nokia808/index.html","8e842814b00e00402abe966ee98fc7cf"],["/2020/12/07/ipad1/index.html","5daf61af728a7ed525a2ae7e64c54a34"],["/2020/12/18/freesubscribes/index.html","f3574f5413988f3826b53e60926c745d"],["/2020/12/19/musics/index.html","1ef6eb0dedb4cd2f184538e6bf36fe36"],["/2020/12/19/shadowrocket/index.html","df2572e4f67c6897bca768d6caa89cf4"],["/2020/12/19/v2ray-windows/index.html","9b426772abfa3a927d220d59cfc09bef"],["/2020/12/19/v2rayng/index.html","19eb5647c2678ef9120f1006fa4f32b2"],["/2020/12/20/beoplay/index.html","71592147a9c90eda2e80e17bffb9a0a0"],["/2020/12/20/订阅链接转换/index.html","58e18bc87ee399e055cae278a7f8232a"],["/2020/12/21/chrome浏览器下载提速/index.html","00a0c99f8d826874d47137d5ee6787b9"],["/2020/12/21/免费128线程并发下载xdown/index.html","1f969fa2842205581a0e454d2b26170a"],["/2020/12/21/免费32线程下载软件ndm/index.html","4aeefc23dfbface2fe299db1d88172bd"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","2f70e2b7a2eb8e4f48da404c8aa7c877"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","485b603f9d79f7b8868464d463fc7d6a"],["/2020/12/21/广告怎么知道我在想什么/index.html","897fcef80e7c9a54b4ba407595d217fa"],["/2020/12/21/无名·引子（小说试写）/index.html","2603a3246652eba955828127c062dffd"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","5b2f253b751c76bd7231453e310fc3eb"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","7bafff6ceaca96316d129a8cf048191d"],["/2020/12/21/高速轻量下载器aria2/index.html","79529a6e324f4804540855c2979dbbc4"],["/2020/12/22/2020-cee-roo/index.html","45553495081724c022edd5f36e2bcd11"],["/2020/12/22/firefox插件、github、steam富强/index.html","6f9f304ff99ecdd112a6b50ad2462f40"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","dd7ac66201a242d8091ef9c8a5ecd2d3"],["/2020/12/26/python-day-1/index.html","3fd2a982f6adf20f84489987c20fb571"],["/2020/12/26/python-day-2/index.html","e7fa5a5dfe61eb588a7088132ed53265"],["/2020/12/26/度盘不限速下载方式一赏/index.html","ea1a16d5a676d834274da44e7996724b"],["/2020/12/26/添加开机自启软件/index.html","7c8c1339a9ac5d6eadb5edf862e2e04a"],["/2020/12/26/电脑端截图方式一赏/index.html","6c7c973a5df3f871534bc993d6e8e574"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","133ec7f4c905009c7dc325f1538230f7"],["/2020/12/27/最安全的浏览器tor/index.html","e596a5f8e2a6bf80886629068f1fa9ab"],["/2020/12/27/网易云刷等级和听歌数量/index.html","94f6c9c73ac2d07c0fe82eeab91115c1"],["/2020/12/28/freenom申请免费域名/index.html","65f33ebde38bb818f3b905c90dd6bf02"],["/2020/12/31/机场/index.html","032eb41e501654abdb4a162b645338f1"],["/2021/01/01/M1/index.html","0f999b08e6faab3a4296cecc8873215c"],["/2021/01/01/compress/index.html","433539f22190586f8915c79828b1480c"],["/2021/01/01/infinityfree/index.html","3011163cde748a82378e9647768f1743"],["/2021/01/01/硬核翻墙/index.html","01da268b40c23db06903ea4ddd49c82a"],["/2021/01/02/qq/index.html","aaf55fea4b834a2a0135da3f67f753dc"],["/2021/01/03/netch/index.html","d7686144a8d5732705ebb0d1e8812ab8"],["/2021/01/03/waifu2x/index.html","950fac39cc576cf8b74816190214e2b0"],["/2021/01/04/ads/index.html","749dcf3bdf20f670a5f95e9345c9f903"],["/2021/01/04/games/index.html","78d8135243c89d09b61735c270f489ed"],["/2021/01/04/heroku/index.html","17b0b26f29e0cabcf06ae6dbcaaf3745"],["/2021/01/06/movies/index.html","f87d0a96e7b81043037b3cd3ff5b9b00"],["/2021/01/07/google2020/index.html","a8662fa5c3d5bdbf6517f30f64890e7a"],["/2021/01/07/lucky/index.html","1c6bcae902e1d2073b24d17cbcdeb8c4"],["/2021/01/07/spotify/index.html","6b88955e02751efd5d77eaeaa3e114de"],["/2021/01/07/thunder/index.html","136a990bab6283dbba99191bc36a8e00"],["/2021/01/08/adguardhome/index.html","3ae28dcb6d55359fa99d6310be602115"],["/2021/01/10/IBM/index.html","9bc7a99225b2a535a25d54a0bbc464bd"],["/2021/01/10/potplayer/index.html","b95646abc8ff7cbf9c696279be19ef88"],["/2021/01/10/sakuraanime/index.html","41a6f7a4e80b0e4b6c9613e6a28de3ee"],["/2021/01/10/美剧星球/index.html","57aa00c877d5a3011ef1b6454d19bbe8"],["/2021/01/12/telegraph/index.html","391a5fc686d77869d7cff1bb3c4b487c"],["/2021/01/14/comics/index.html","1e4a8d255013cac61806e80ee1999650"],["/2021/01/14/ftp/index.html","0eebd1a9050ac51c4214ec774afc66d6"],["/2021/01/14/oraclecloud/index.html","27eb47d57bdd7b2d581ea16b22e6e98d"],["/2021/01/14/porkbun/index.html","cfa659774a52e6d868b2ec4b10075a0f"],["/2021/01/14/powertoys/index.html","788afab988c6cbad7f7a302fae85aa39"],["/2021/01/14/taptap/index.html","9b79a7ed93dd60f866051866ecd54108"],["/2021/01/14/ubuntuvsftp/index.html","38079328506680b1687d943e64aa1bff"],["/2021/01/14/小说/index.html","9d63e6a5d3181354803d93bbbed75940"],["/2021/01/15/freeproxies/index.html","051bbcdcd7c436245350dec8bc0a97e7"],["/2021/01/15/incaseformat/index.html","6616302b65f7b52a4aa811af1785ec06"],["/2021/01/16/euserv/index.html","e67f0b9d2670fda6e7b0bdad9a2fc86a"],["/2021/01/16/winxray/index.html","cf556c8f4579f2100971bb54bef833fd"],["/2021/01/18/qqreadhistory/index.html","6d14703e7679e9b61b5c6f085c2cb744"],["/2021/01/18/qqrevoke/index.html","ed167d34d2a4f3152d0b8286eed5c24a"],["/2021/01/19/freevpn/index.html","937d9f8631b37746c34bdf8054172e3d"],["/2021/01/20/browsertrack/index.html","3635f503e956329dcdb481638aa614b6"],["/2021/01/20/v2ui/index.html","4aa09a7aa5dfdf1a2c0077901e815f41"],["/2021/01/21/failedtoconnect/index.html","575b17fbdad892fc215ebabef0965380"],["/2021/01/21/gitcalendar/index.html","e296d8addab5252d22873f75d465f0de"],["/2021/01/21/markdownformat/index.html","a6e586b2dc9e6960eb17bf3a820a1ec5"],["/2021/01/21/markdowntable/index.html","e35d1d3ce0673ba592fa7de2861f1a20"],["/2021/01/21/vercel/index.html","f2db4e3a99fef1036c66832a20c91755"],["/2021/01/22/hardware/index.html","3c58b3edd2b683b52d619d30c89b6e53"],["/2021/01/22/muviz/index.html","4d767db51c16126a0f97b1615194402a"],["/2021/01/22/randomapi/index.html","9dd464ee954193211d75e325a4a69aad"],["/2021/01/22/searchimages/index.html","49ea1b70edf0247523155ad2484b30e4"],["/2021/01/23/RX文件管理器/index.html","3c2c6316caea96f160fc5839f631f4d7"],["/2021/01/23/chromeflag/index.html","54b282398af87a3fd1542a66c7fc1f9d"],["/2021/01/23/qttabbar/index.html","8a0a4481b7a9c24796c5914a5cff6891"],["/2021/01/24/githubspeedup/index.html","b50c6d8dc286aaf03598a130d8dfcc4c"],["/2021/01/24/jsdelivr/index.html","53ac6d784fdaa507d455dd3c1d99da6e"],["/2021/01/25/note/index.html","b476363333806f6d0bd32a918f8fc38f"],["/2021/01/25/soul/index.html","11ca7f47b58d8882d0359238978b9f64"],["/2021/01/26/herokuxray/index.html","b2c6b03dbf1851e86a60019ecac031db"],["/2021/01/27/proxypool/index.html","fcfedf8bde5a15fa78d4b0976c00f7c0"],["/2021/01/27/tracker/index.html","6e3634a07391368da69d3a4df176cdda"],["/2021/01/30/pandownphp/index.html","c46510ca507087ab746efb0f8499647a"],["/2021/01/31/newgroup/index.html","60832d1dc813fe76914742099c5120eb"],["/2021/02/01/clashlanguage/index.html","906f23f2e7be780a94b7109893d3d73e"],["/2021/02/01/encrypt/index.html","bf917867250254fb131d3da21977ecf2"],["/2021/02/01/footermotion/index.html","48418d2ca033add44744c69f73c88997"],["/2021/02/01/gitter/index.html","32a07445b0f01af559d27d0d894aafa6"],["/2021/02/01/pixivtop50/index.html","d4db9c71bc1fa83c3fd4c84e0c17a46f"],["/2021/02/01/scrollbar/index.html","19ea2089cc641f847c6e29aa74677cf6"],["/2021/02/02/clover/index.html","9c22dde58d4090407f9c3e19529faed9"],["/2021/02/02/maya/index.html","468899144444f832bb47b972c19a6520"],["/2021/02/02/speedcontroller/index.html","b301feb8978dab3ada20516a6f2b7c64"],["/2021/02/02/yesmusicplayer/index.html","668fe78c61e589f2da2715169c0a1dbd"],["/2021/02/03/lenovoonelite/index.html","4b253ef7c98c24f21929d45887b96fa3"],["/2021/02/03/skipads/index.html","3e2d9d56c0a347882a8692bf14c1e308"],["/2021/02/04/picseed/index.html","80a424a5c53697a8e5e476c04e29ceb2"],["/2021/02/04/renren/index.html","0d5a450d07f0c43f20d612c53c4dd2c2"],["/2021/02/04/serverstress/index.html","36b7172f15bd28c3c849a53ec7f665d6"],["/2021/02/04/wikipediazh/index.html","20cdf5557a9d5314c3fabf16455c4803"],["/2021/02/05/googlevoice/index.html","dc7aaa59390e13bb25df99cdad821305"],["/2021/02/06/clashconnection/index.html","d39f03bd5c151e1b38acc78b13aca0a3"],["/2021/02/06/gvtransfer/index.html","514f6fbe4b78eeedfbc43aff4a1a53bd"],["/2021/02/06/todesk/index.html","40a8a6901cba9e0133da8a4bb4daf613"],["/2021/02/06/vpnblacklist/index.html","0884ebdac9488fe0652538bfe34d71d3"],["/2021/02/07/mklink/index.html","4268f9f198fbcaf6856237c8b3b437fb"],["/2021/02/07/speedtest/index.html","83d7dc9d4c3e1b68c7f6c5e92d45a9f9"],["/2021/02/07/translate/index.html","283a6a443135691be0d47509ecf0fc73"],["/2021/02/08/ewomail/index.html","010ca47df22fdf6b32bc4cf3b531fc0a"],["/2021/02/10/officee5/index.html","aaf52d9e6ad4d224b92d0f9756eebe17"],["/2021/02/10/raidrive/index.html","a2b62e643d9653896d01c77468654878"],["/2021/02/13/e5sub/index.html","e2508cb72765ba38f630b349903b4057"],["/2021/02/14/screen/index.html","3f90affbbb911ba0118dbc37d7302d00"],["/2021/02/15/clashtun/index.html","47d513f25b54600ebbd8c93a04e72d6d"],["/2021/02/15/messageboom/index.html","1733f99303f026ac8c86fe118fb02cc2"],["/2021/02/15/oneindex/index.html","ab25b9d1dc8162f0d6d6f67fc3c5a69e"],["/2021/02/16/govsites/index.html","c0cb26f5963c7ddec76b52ce16b0b68e"],["/2021/02/17/hexototypecho/index.html","cf6116cba7d831536bc4281e1448914d"],["/2021/02/19/fiddler/index.html","62d08dad7afe7dcc18d807447baa5289"],["/2021/02/22/potplayerset/index.html","cd5230eb1e74015703ef4f436f2a67f5"],["/2021/02/22/studyresource/index.html","11ae61c19dadf67ece990a3a5674315f"],["/2021/02/22/telegram/index.html","caa65b9cbd06843f7e1e88b87d3a4d46"],["/2021/02/22/videos/index.html","56f024c2654f4cd9d21d9b1876952296"],["/2021/02/24/mtproxy/index.html","0d82cbd95e3663358243b24a731283b2"],["/2021/03/10/catchcat/index.html","c8299e01c70bee9dceefb1fe1a6781cf"],["/2021/03/10/neteasemusic/index.html","3d1f40b8d9dc5bca7d305d7cd9902988"],["/2021/03/10/surfboard/index.html","e978b29ee6289b985de380808e5bc06a"],["/2021/03/11/vpnandjc/index.html","8da99427ad4c38c1eb464a1cae3ef9fb"],["/2021/03/12/qrcodes/index.html","d48e70971e253be1c4fe9282ec75385c"],["/2021/03/20/qv2ray/index.html","cfc4db36efe6e0f84d0e54b0765529bd"],["/2021/03/22/freevps/index.html","95eeb8dec96cca09677eae7a05ec1b81"],["/2021/03/24/tgstickers/index.html","a37bdd83e2b49279bb6e2747d052ea2a"],["/2021/03/25/clashx/index.html","ebab2e65d679424db41159a3f621db3e"],["/2021/03/26/bingwallpaper/index.html","bd2723360614f0d250adcf8bc7062e18"],["/2021/04/03/soutu/index.html","53d5516ab6061cc3fe2f86176bdf6000"],["/2021/04/03/tiyunti/index.html","9498ea0e41e3d0c2300de9df95fe4747"],["/2021/04/04/btpanel/index.html","9947ccb5c513d0e8dfd13ac81bf12a66"],["/2021/04/06/atlasos/index.html","e9b7c21a7d83fecc4131f5afd7613155"],["/2021/04/06/cleaner/index.html","297017b35d1ce87abf54f270ea71229c"],["/2021/04/14/asf/index.html","bad314146070935463d586e84fcb2406"],["/2021/04/14/rss/index.html","6af8971c347ca69b63276bc072927126"],["/404.html","16c2fa1f2cb59602c2e0ca4e89431cc0"],["/archives/2020/11/index.html","0ef959974a8dbce77c71a3bca8ca5b3b"],["/archives/2020/12/index.html","c951529274a63766a9bc2287c607a0f1"],["/archives/2020/12/page/2/index.html","05724980f2c92dbc06ead31bc1981cf5"],["/archives/2020/12/page/3/index.html","32e7a91a9273a98a4004480f1168d1e5"],["/archives/2020/index.html","995dc3845917d7825ee66b1e6114ed42"],["/archives/2020/page/2/index.html","51b8465e6a9e228d58ae74e14d2963a2"],["/archives/2020/page/3/index.html","713b2c7e5773acaccfb703523e9c99a1"],["/archives/2021/01/index.html","de0469db4d5a1dbaa168acdd85478c5e"],["/archives/2021/01/page/2/index.html","153669b03fee228f4929ab6e807290d4"],["/archives/2021/01/page/3/index.html","9a647bffa3f920a97ee2eae6b1d7a8a4"],["/archives/2021/01/page/4/index.html","a88d6e9da6ee776f04f530f8b2e69b32"],["/archives/2021/02/index.html","cd97d81f2c625529023d7699e24f06da"],["/archives/2021/02/page/2/index.html","e91c05037511bdb1668cd804379c6b91"],["/archives/2021/02/page/3/index.html","071d22d5925431a63ba954fcb0b63d22"],["/archives/2021/03/index.html","28793d0272dc20baad034681edc2a822"],["/archives/2021/04/index.html","2af343200ee130b5cfe48b1f70e382ef"],["/archives/2021/index.html","6638101ce1a7f3b09bba7d4ee628da34"],["/archives/2021/page/2/index.html","d39065df5938a9f431993318577aae47"],["/archives/2021/page/3/index.html","13577cfec6346d34eea9ca75c9cf47f0"],["/archives/2021/page/4/index.html","af2dfc6510bb66c23a68e4835f4f9395"],["/archives/2021/page/5/index.html","b1efe387d248154262f0d32330f1027e"],["/archives/2021/page/6/index.html","58580f36f11841c7845316798719924b"],["/archives/2021/page/7/index.html","caf944baf77b9f1714d41b312444cb44"],["/archives/2021/page/8/index.html","568863bde76fb3380bef0263c7cb45e7"],["/archives/index.html","699eae189b0b75bd386eaad6519b6fd4"],["/archives/page/10/index.html","ae4509f02e9c8cc5714fba0a8d518c9c"],["/archives/page/11/index.html","927a64c2c3b280bf1f01de63afb0d684"],["/archives/page/2/index.html","964680584f0d4c8109f9e83b7b60e135"],["/archives/page/3/index.html","08f4dfeef8bb1c7186e30797390b454d"],["/archives/page/4/index.html","014b658a948e75682acb26e4d6344511"],["/archives/page/5/index.html","22a4ddc2199a2b77a8ea0da6d10987ad"],["/archives/page/6/index.html","e7e02eda467675167d6160d554d2cc0e"],["/archives/page/7/index.html","8ee592f626d35b01406325bb0c427b0a"],["/archives/page/8/index.html","57814b0bc7670e1be275fc80aa9d444c"],["/archives/page/9/index.html","3c3ecb671065fc726b6f022d251930b6"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/atom.xml","cf844fa25dfb3480fb7b6771768ee55c"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","0fb26e04323b4444079f4841610e3a21"],["/categories/index.html","fb86bc93a40c1b5e0902bfc3c9b717af"],["/categories/下载/index.html","4fb2bcb182899e81dfda2ce66266df6b"],["/categories/安全/index.html","9ee758b2d91c4f75ab4c578cfff29aad"],["/categories/建站/index.html","27d3fc89e8af71b46819369271f52da7"],["/categories/机场测评/index.html","7e8b4f3692d7b6770ce38cf5b5da4498"],["/categories/杂/index.html","1c6927362f49d8c74f4bfbb644ecefb1"],["/categories/杂/page/2/index.html","807e5fe9c4cf363c77bb9343b2a4ad45"],["/categories/测评/index.html","20a745aa7f362bd3dda5be957dcc95e4"],["/categories/科学上网/index.html","cf4971565ed5fe343d6b027c6cc064e4"],["/categories/科学上网/page/2/index.html","0e9d401f12394ff38fa3981bfab526db"],["/categories/编程/index.html","2141f6a666d6691c19320fd90ee884d6"],["/categories/网站/index.html","e5b68c2e012ccbb47e90792bc1fd2b8b"],["/categories/网站/page/2/index.html","7f44153a11995e48f4de7a899056b80f"],["/categories/软件/index.html","ba44b460c4be92f429f46f1312691291"],["/categories/软件/page/2/index.html","9b592bfb3769e9e0bb1dbf8bfd42f1bd"],["/categories/软件/page/3/index.html","2fbf1c28a6266fafb959d5ec4edf41c0"],["/categories/软件/page/4/index.html","da9f991d8a5652da4448fc19ed750ecd"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","f1285da02cb82875369a19ffbac18a6c"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","c4d880a32addd2e28992293ef39719ba"],["/ios/index.html","d502f5b1372c0c278ea237b51928be8f"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","ec4893618cbb653b00abde7393e4f529"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","7dc370eae55150b5dee51d462da7aebd"],["/page/11/index.html","9abce6095fd1b7671d5cb5e33ae39445"],["/page/2/index.html","c6ec78d292672a74c9465b6797595d2f"],["/page/3/index.html","824979fcd4f4d4bd8d90a52407f80719"],["/page/4/index.html","4d2ae44da432dc362b7517ff2f6fe8f0"],["/page/5/index.html","2ad8186d325d3795f9777dd5c96c7d6a"],["/page/6/index.html","97f95beda95ecb9d9535bfee86534c4a"],["/page/7/index.html","c7f1a8d9649c7c926d027c365793c199"],["/page/8/index.html","cba5fd6b6694015fc236ca5f2f5c8f24"],["/page/9/index.html","267886b2db405a5bb549d044e66ddf62"],["/payment/index.html","f55b1d65883fb49f7dbf3c1bb4d37a6e"],["/privacy-policy/index.html","d6717facf82e92f1135a1e04137fb3c1"],["/search.xml","29f44b833a867f00c6411acdbdcb3d08"],["/sitemap.xml","098eaf9191e930614e5df8b3de47b776"],["/sw-register.js","27f4739a82392d820a3cf6ca2efb00fa"],["/tags/5t/index.html","7f9a95067836e16928d29cceeb2da90e"],["/tags/Bing/index.html","71782384272ad114cf20aa028edd4526"],["/tags/Clash/index.html","3071a4737203fb177101eb33f3b6ea00"],["/tags/Clover/index.html","32934776df94f8bca08927d48340584d"],["/tags/E5/index.html","6b3c2b259ca033c96ce04c53f7cc4ab4"],["/tags/FTP/index.html","24c572aae25d289a51cf7b3a6bd8a862"],["/tags/GitHub/index.html","c46e99c3be551c77310969efc1d6efd3"],["/tags/Heroku/index.html","dc3f397074749a176760e91c2cb0164b"],["/tags/Hexo/index.html","eba209e4d39343b75cc865a38ca90e45"],["/tags/Lenovo/index.html","e6807ab103794be95ba45b3cea43eab2"],["/tags/Oneindex/index.html","5c6cd38892632b3df1ffd7f1afede8f2"],["/tags/QQ/index.html","a22d6a39b21eb1392e05fb0a9d502e10"],["/tags/QTTabbar/index.html","f0869632f3c8b26fd2686662e74cbb62"],["/tags/RSS/index.html","99b374aab2cff7a4594f6c534a013d8e"],["/tags/RX文件管理器/index.html","3126084508838b0db6ba58d597c4adb1"],["/tags/Todesk/index.html","122ff988e00c9b0e3294d21d540b4b83"],["/tags/Vercel/index.html","469f120efe481cb380f4683c0d6e9335"],["/tags/ads/index.html","f83ed2623f5434edaee6067424f4dfa3"],["/tags/api/index.html","8a41bfe8c746c806d3f3dbd601a7b152"],["/tags/app/index.html","162bf5f2c9c9c4e70d2257af9e104f6d"],["/tags/asf/index.html","80ad35c4b681e37a5d36e783edeb20d7"],["/tags/atlas-os/index.html","a6cd86e50d09467b131ebfd7fa831eac"],["/tags/blacklist/index.html","87d56bf09c9f42b440f2d407d1b1c23b"],["/tags/butterfly/index.html","aba53d67c94648872b4be35aebf20267"],["/tags/chrome/index.html","80e119786c6ef66a9d23f0f51fab2a70"],["/tags/clashx/index.html","e3ad248bc595e55fb76f1f632e7da4ca"],["/tags/cloudflare/index.html","02fe165d3b6e9127ff80a1169d617e2f"],["/tags/cmd/index.html","dd7cacbe365518d362c761d865f00f9f"],["/tags/c盘/index.html","19a812c35c13df12c743b6262de82114"],["/tags/email/index.html","a79145e983b303706c29ca325a19408b"],["/tags/ewomail/index.html","a012b10c87222d97934a3f513faf7338"],["/tags/fiddler/index.html","5ba2e867550e7b8f3ffc2a2ab1fba451"],["/tags/flags/index.html","debfe40aa9b205a06f102f242564dc7b"],["/tags/footer，页脚/index.html","d2455e63813b0e1b5dce6b970b9f29a9"],["/tags/galgame/index.html","1d0f62ea92c9fbf9bb593438425efb6c"],["/tags/git/index.html","fa45b2291a05b254cb3c7b0ea5f925a1"],["/tags/gitcalendar/index.html","e94029ffcc271e2af0b9f74dbc30ba29"],["/tags/google-voice/index.html","08f6d48f321c9f72576c014bca4e4b76"],["/tags/gv/index.html","5d66e96a31dc080f95be4af391b41f89"],["/tags/html/index.html","88974aa655efefa77abd1b1be6133835"],["/tags/index-1.html","3aaaef28c0074fee9546bc9ac0d3bd01"],["/tags/index.html","5f1cf6cef5c85b025d0e8ce10ad4247c"],["/tags/js/index.html","d324dd5acb94673a612afe7468f84114"],["/tags/jsdelivr/index.html","f300fd866a4589e03ff92647e140b9a8"],["/tags/linux/index.html","38666f3126f78d10b03ff5b1f069c092"],["/tags/macos/index.html","a4e8a2a82d11fa45a70024cd8c82a74e"],["/tags/madVR/index.html","127a370ea3e1f03475008687630c3b22"],["/tags/markdown/index.html","154d024b1e098f17f82fd40fa099d7ae"],["/tags/maya/index.html","394c00fc7f9c0d40fa80e79f81d7ea9e"],["/tags/mklink/index.html","83733ed5afec065585111cc44d7e1983"],["/tags/office-e5/index.html","311d90e0eae773ca9fc8a0443186a7ec"],["/tags/onedrive/index.html","31b86b37a3aa268cbb3aaef9641289a9"],["/tags/picGO/index.html","dbb3e68b0ddc94f3d85ac45c2334fa2a"],["/tags/pixiv/index.html","fab9359c290e289285732e237eeb889f"],["/tags/potplayer/index.html","60fde6c9ad51d55bb3bb606e00bf20aa"],["/tags/proxypool/index.html","927201826307476937aad23cb115dad7"],["/tags/qbitorrent/index.html","47cba79ffcf14d11dde557ffc1ba39af"],["/tags/raidrive/index.html","1ffb82d50c83b73d2ae6f7d65eb868f2"],["/tags/screen/index.html","8945417cb9d7ae28f1d94b535fa7a013"],["/tags/speedtest/index.html","1a0c741a5af12064ee90a445d0651964"],["/tags/ss/index.html","f1c7b48226c043e3bf7e498d2a946af4"],["/tags/ssr/index.html","16b7832bf0e544f1caac185093e14019"],["/tags/steam/index.html","2f95dc752f3f82bf89a405731ba14dbc"],["/tags/stickers/index.html","e1cf08d2a958169aadb67733db9b8909"],["/tags/surfboard/index.html","762a2c6fc0618b413f43b88852f22aff"],["/tags/tap/index.html","67495b052e6407c5e627b3384006e352"],["/tags/telegram/index.html","6e84e02e75d3ddbf048ca66753f2edb1"],["/tags/telegram代理/index.html","c7137b41c4a23c134634808808cb7853"],["/tags/tg/index.html","29ef6be8d0365db5775ec0fcad43316c"],["/tags/tg代理/index.html","41cf2103ba2bc978911bce430719510a"],["/tags/top50/index.html","d93ad9ef4f2bef8aed5ea9e1349a9f90"],["/tags/tracker/index.html","09433d9849d4fb8f9c39a0ea559862be"],["/tags/translate/index.html","f4488d2a939c58394413d3aa6b21b8e8"],["/tags/translater/index.html","376a69115c998b48844ca098e6deb632"],["/tags/tun/index.html","c6057acece283db91fbc3caab90e4088"],["/tags/typecho/index.html","3235b048e33f97bd05b497519683681d"],["/tags/v2ray/index.html","a3136b420aeb5128e9f68a823f3c8dce"],["/tags/vpn/index.html","4b29532cd79ae85ad81eae4ebaa7e17d"],["/tags/vps/index.html","c39de7794e297218ea4005fc85dcfc9f"],["/tags/wallpaper/index.html","11c28dce85bed104f5ca2764de351f43"],["/tags/windows/index.html","80c940e76ab78cdf6de71738bc6ba7be"],["/tags/windows端/index.html","0f6a4fdf7585261096571df211040465"],["/tags/xray/index.html","f2a72d7dfa710affb8908e882f8e1cce"],["/tags/yandex/index.html","cc668fc8e9a6036e8c2be149f9ca83fb"],["/tags/下载/index.html","b3da356519a175439a3cc42f2f2a6555"],["/tags/不限速/index.html","48001a7ed3e621984af7dd3a6744be8f"],["/tags/个人网盘/index.html","f51e87283908f25ecb552b0266a6ba6f"],["/tags/主题/index.html","6d0a48951c3ceb5069c88d5905ed52b9"],["/tags/二维码/index.html","b758f6f49a87080a9ee3206dd28d1ba0"],["/tags/云便签/index.html","116f5b2a678a6acce52f8f69ac59a0bf"],["/tags/云盘/index.html","e8819566e0ff3da1c1052c9407c8802f"],["/tags/人人/index.html","74b51af406b92cd48adf0ccc0c15d8bb"],["/tags/代理/index.html","2e59502dd56f7e32d96641bf1970e9b0"],["/tags/代码/index.html","66203de07658002503780a11d7c9f236"],["/tags/优选IP/index.html","3aa20d9928855919a90f9fd6ae6fa466"],["/tags/便签/index.html","dce06ad3f7158546cb3421e5a4b7b263"],["/tags/保号/index.html","c20d944511287eabb23c64fddbbaaeb2"],["/tags/免费/index.html","cb6206052600e062e1b7c28551e25ba0"],["/tags/免费节点/index.html","56bc70cfde6f19116e9c3ac99e32a430"],["/tags/冷门节点/index.html","3e470ed306747aa678cb922949e7b53c"],["/tags/删库塔/index.html","293da02d45db6b80f782f01f22a3d42d"],["/tags/加密/index.html","86acb5c3b3d9f0b09ce48c603e21f066"],["/tags/动画/index.html","7dcd94f0716c7876c731495cc9b8bc55"],["/tags/博客/index.html","37240a8a2b2ac8dd562b722a87d7a09f"],["/tags/卸载/index.html","d909589ed467a1becd4498ee45502089"],["/tags/历史记录/index.html","ca0d6371fcba118498b6b2590f38a412"],["/tags/压力/index.html","3c5686b3d07e94d2e9e34222c4e0d3a4"],["/tags/压缩包/index.html","cd12a3127ad7b1e31c130d1eddc8b588"],["/tags/反代/index.html","bdf1d36e84c4a2b2b2f7257d98eb4d79"],["/tags/可视化/index.html","9d9af3b69cd4fda0d885bf48b0758c73"],["/tags/命令/index.html","dd4fbf590b99fb35e0842c35b88e5478"],["/tags/国家/index.html","aaa1d9acdcd8619d9c61d547694161a0"],["/tags/图床/index.html","71159c7946dbff1bc3592b0e2dc4b317"],["/tags/图片/index.html","a696e03b5a0d1c8e3a6ff6dadef8501d"],["/tags/域名/index.html","e82c41d4b4215925b2ce0d828f878ca4"],["/tags/壁纸/index.html","849485d2fd269d6b724c8f52530cf2f5"],["/tags/多标签/index.html","2f7f6cf195edfcb026195e0d4facccfb"],["/tags/奈飞/index.html","6eedbc227747ae071e93465f4214cbcd"],["/tags/存储/index.html","8448abf46cb41eab8b0cc5a45e443325"],["/tags/学习/index.html","0c6b7ee2643d080a622743efa613c1aa"],["/tags/安全/index.html","e09d1ed0c2af25d0ed852219d599c11d"],["/tags/安卓/index.html","78192749ce54f58edf63e135d41e438d"],["/tags/宝塔/index.html","088bd646ac28cac0ecc37df057774b5b"],["/tags/小游戏/index.html","f3c8ed20a26487a97373d9c04ed6d8ae"],["/tags/广告/index.html","8b148d5ca404c89704e2830bdc6d8d46"],["/tags/建站/index.html","ad96204e1afe3c937157dbec29938232"],["/tags/影视/index.html","f3ea5d0d9914b07da69826a1778538be"],["/tags/微信/index.html","e307e2fd7f75586684970310a153a6ba"],["/tags/快速启动/index.html","ed7a1dc8a6b261d4ec6827a679baeb7d"],["/tags/手机/index.html","1a2c4b247f546ebe41e421efb6fed876"],["/tags/托管/index.html","1ca185b7c00d6e99695856d6833a5151"],["/tags/抓包/index.html","6d1b5643682331831821c06b84319229"],["/tags/抓取/index.html","ed18710feaeb8a47d1d287ca4ebf76ed"],["/tags/投屏/index.html","e030a1a853d147b53cffb765e2e63300"],["/tags/拓展功能/index.html","6405b712730273d40040c395178d0bc2"],["/tags/挂卡/index.html","30dae0449ece68470a6b676435be9fea"],["/tags/挂载/index.html","e0dd67bc488a85cba728268e10a9f55a"],["/tags/指纹/index.html","4b431aef2566108e8d00bccd5d672868"],["/tags/接口/index.html","7b1e88b4c5abb4f7dff8ef6462edb424"],["/tags/提取图片/index.html","8246f138b8409f1a67010f1151a72b4e"],["/tags/插件/index.html","1721185ae4e143a2e87d0034a79ffc67"],["/tags/搜图/index.html","87b13563f4c541165aa2d0afaac15a43"],["/tags/搭建/index.html","81a6575d03c62fbc5058d9cc7343a716"],["/tags/撤回/index.html","fefe2d40db10737cab28a21f90f3f4f5"],["/tags/播放器/index.html","011a07514815129535b0f0b704935486"],["/tags/支付宝/index.html","57467da41fb3ab40bde04b99a5d32a8b"],["/tags/政府网站/index.html","376c34e6a124bad3523be3bd8fb791e0"],["/tags/效率/index.html","9b7f9689d900bc22019a2bb3979081c6"],["/tags/日历/index.html","3e5eaae9138eee04151393d5f6cc6d26"],["/tags/服务器/index.html","d7458c29841cf2d7bba02c47a98f21ff"],["/tags/机场/index.html","fc1ab6f0f12a61852fd9ef8766586a84"],["/tags/查重/index.html","1f5ed07515e68fd000d7c1fae03ed291"],["/tags/桌面/index.html","b7a06cce15c1986afb3c8d7c07c009e8"],["/tags/梯子/index.html","ba5d7261bba17f9f222d42e045cde67b"],["/tags/检测工具/index.html","53cf5889230b35ccbd847b1aae2f13ee"],["/tags/汉化/index.html","4adcadf5bfe46c3612ed8425c4bff542"],["/tags/测压/index.html","2bbbe854fcbd455ced372dfcecefe742"],["/tags/测评/index.html","06ea9e57e697475b3f44e2cf462e89aa"],["/tags/测速/index.html","218ca42c92fd07e7a07a94e47afde492"],["/tags/浏览器/index.html","48efa978cb9799a7c1ffc7d746fcdcb1"],["/tags/清理/index.html","c17b7e0a9f1144e7357b7f867f7739d6"],["/tags/滚动条/index.html","336828041465694e76e2ae79940d3f31"],["/tags/灰色歌曲/index.html","18c78e52f1b5433bb0b961bab7f74b1b"],["/tags/电影/index.html","865acf5a6413f7bcc71ea8ff88eb1e8c"],["/tags/电脑/index.html","99c56fdc0b0892319acfe9bc6cf51991"],["/tags/电视剧/index.html","43c5bcd609a4e90c4d40f96a40712668"],["/tags/白嫖/index.html","3e78f4936dbd56d371f8943cf01926a0"],["/tags/百度/index.html","bfee716cfd2db0216da1812c6451594b"],["/tags/百度云盘/index.html","8dcb7aa4890272cf1d0234d258033f34"],["/tags/百科/index.html","8b30acbaaabfa9f1bdaeb1f5eb350a86"],["/tags/短信/index.html","3e5270ddd5188a995b1b04b4ea919360"],["/tags/硬件/index.html","901c3bf45361d28a36bab380c1fdb6b3"],["/tags/科学上网/index.html","9d95eab1908e75c216069421017f5a4f"],["/tags/空间/index.html","edfe9a77286731b93a1cca996e5323ca"],["/tags/笔记/index.html","cd85253c8a47bc72523495934f1a70c0"],["/tags/简洁/index.html","ed059b7b93953d8d38021a0c79be9f33"],["/tags/简约/index.html","b791fefda051285ca7897a3c9164a394"],["/tags/维基/index.html","be68417da25c29052b644118fe558ac2"],["/tags/网易云/index.html","cd26ab0a45242e07003490e25323a828"],["/tags/网盘/index.html","c53215fff4b37d83c1327d0a3e3d37e2"],["/tags/网站/index.html","70ac5e857e48cf86040c8f818f030916"],["/tags/网络/index.html","e9772f0e03361cf7cd20515efbaaba27"],["/tags/美化/index.html","1c23104013a96993bbff9fa86fce3160"],["/tags/翻墙/index.html","38c8cb7ab425258a7f1e997395b02449"],["/tags/翻译/index.html","e7682ef696169038576717ad4539f8f7"],["/tags/翻译器/index.html","1651f9d9f199ab81458d991ca59317b9"],["/tags/聊天/index.html","bf353eb789ad75ab828f36a30a70c570"],["/tags/聊天室/index.html","4a0aa002eaea9869516e32363a88790f"],["/tags/联想/index.html","e402eb993707534bcc2c619c6a0a3995"],["/tags/节点/index.html","9650f4e670f144868ec040d49f9bce4a"],["/tags/虚拟手机号/index.html","3e0f4690d7dafa1f33f8d97fe3871fdc"],["/tags/补丁/index.html","55211e5cd0a1bcf1fcafd35592c8650a"],["/tags/表情包/index.html","4180160c61474ed3e82da8dc2a8e41f8"],["/tags/视频/index.html","d22e981c94cf2b97a653470b690c9ef3"],["/tags/解析/index.html","2f32671c935803a94068a8f44c6f1e98"],["/tags/订阅链接/index.html","a7d5ef399d847a41309d69681e4d876f"],["/tags/记录/index.html","7478648a043434eaba36177a23bca754"],["/tags/识图/index.html","8310ba263766bda56d11bd8b95639601"],["/tags/语言/index.html","f4294bad131c3445b87a0fc2913adbee"],["/tags/资源/index.html","ce1a497f1716e721481c0cad33561396"],["/tags/资源管理器/index.html","f2329bfc226d262b711f9ee8858a1669"],["/tags/转移/index.html","7e6ea12c18bc8cb4c44ff0b93f9f3c5c"],["/tags/软件/index.html","a6bb6a62412a144006055f7c865b1bd6"],["/tags/软件/page/2/index.html","1f697e12b5eec236dbfd371feda49a84"],["/tags/轰炸/index.html","606d0353580da393ac7eb4cf2b0d57c1"],["/tags/迁移/index.html","2f508e2cb98d8be7b2ca4a56a4e1b7f0"],["/tags/远程控制/index.html","1c081eb1d6dad3d98e727ce65cfc06c2"],["/tags/连接/index.html","9027a153c8f1092ea1240549a8353f76"],["/tags/追踪/index.html","9dbc8cdac9bf5a2f0c43ccb04dcfb25b"],["/tags/速度/index.html","917f1bd0d8db57e7f55d89cc11409062"],["/tags/邮箱/index.html","869dc7e0aa76a872b859de926916a06e"],["/tags/酷炫/index.html","7792c5fff18077bb118b2e404c361bc4"],["/tags/钓鱼/index.html","8f22e2511faa1a13abf2b09d6af081f5"],["/tags/镜像/index.html","404e3a9ec7aab06eb3c3fde92c36fc0e"],["/tags/阅读器/index.html","375d967ef39cf4e03e141d0552c14bf0"],["/tags/随机/index.html","5e6741f35abc19f6a9f2f278827563e4"],["/tags/隐藏/index.html","15b0c6ddcabd431beaf6513bd303c61f"],["/tags/面板/index.html","156c51c9e5e015a2e205710da434ffd2"],["/tags/音乐/index.html","23829fc1b4eb3c80259f0c88879f44b1"],["/tags/高颜值/index.html","a56fa239e273c652d9b08152ce15722b"],["/tags/魔改/index.html","b7ed003c73078f23506617e17deab9a3"],["/tags/黑名单/index.html","44c395420ee2bfeb990c7d99f11f90f1"],["/urls/index.html","603c97b0cf87c5fc416a4a02d74b990e"],["/vps/index.html","80e2938900565315eb1500604e345c03"],["/支持/index.html","3c4b8eee74fe8d122aad6f77fc929f3d"]];
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
