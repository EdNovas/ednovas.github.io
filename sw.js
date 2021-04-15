/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","cb7d244ebb65057819905f4cda762d70"],["/2020/11/29/clash-windows/index.html","e1c9ab05bf06b0951c3f0911c44259d9"],["/2020/11/30/websites2/index.html","2d6937730da78b63bc6918a6a012dd41"],["/2020/12/04/iphone4s/index.html","3bdaffcc92b16062ce215fdc5845cbcd"],["/2020/12/04/onenote/index.html","ba715973204d8fde8d02add92a6a8c9d"],["/2020/12/04/wesites1/index.html","ae8f230b7d38a9159792222629db6f4c"],["/2020/12/06/nokia808/index.html","8e842814b00e00402abe966ee98fc7cf"],["/2020/12/07/ipad1/index.html","5daf61af728a7ed525a2ae7e64c54a34"],["/2020/12/18/freesubscribes/index.html","f365c290175af1563dbb4bf6ca0c0c84"],["/2020/12/19/musics/index.html","1ef6eb0dedb4cd2f184538e6bf36fe36"],["/2020/12/19/shadowrocket/index.html","df2572e4f67c6897bca768d6caa89cf4"],["/2020/12/19/v2ray-windows/index.html","9b426772abfa3a927d220d59cfc09bef"],["/2020/12/19/v2rayng/index.html","19eb5647c2678ef9120f1006fa4f32b2"],["/2020/12/20/beoplay/index.html","71592147a9c90eda2e80e17bffb9a0a0"],["/2020/12/20/订阅链接转换/index.html","58e18bc87ee399e055cae278a7f8232a"],["/2020/12/21/chrome浏览器下载提速/index.html","00a0c99f8d826874d47137d5ee6787b9"],["/2020/12/21/免费128线程并发下载xdown/index.html","1f969fa2842205581a0e454d2b26170a"],["/2020/12/21/免费32线程下载软件ndm/index.html","4aeefc23dfbface2fe299db1d88172bd"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","2f70e2b7a2eb8e4f48da404c8aa7c877"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","485b603f9d79f7b8868464d463fc7d6a"],["/2020/12/21/广告怎么知道我在想什么/index.html","897fcef80e7c9a54b4ba407595d217fa"],["/2020/12/21/无名·引子（小说试写）/index.html","2603a3246652eba955828127c062dffd"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","5b2f253b751c76bd7231453e310fc3eb"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","7bafff6ceaca96316d129a8cf048191d"],["/2020/12/21/高速轻量下载器aria2/index.html","79529a6e324f4804540855c2979dbbc4"],["/2020/12/22/2020-cee-roo/index.html","45553495081724c022edd5f36e2bcd11"],["/2020/12/22/firefox插件、github、steam富强/index.html","6f9f304ff99ecdd112a6b50ad2462f40"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","dd7ac66201a242d8091ef9c8a5ecd2d3"],["/2020/12/26/python-day-1/index.html","3fd2a982f6adf20f84489987c20fb571"],["/2020/12/26/python-day-2/index.html","e7fa5a5dfe61eb588a7088132ed53265"],["/2020/12/26/度盘不限速下载方式一赏/index.html","ea1a16d5a676d834274da44e7996724b"],["/2020/12/26/添加开机自启软件/index.html","7c8c1339a9ac5d6eadb5edf862e2e04a"],["/2020/12/26/电脑端截图方式一赏/index.html","6c7c973a5df3f871534bc993d6e8e574"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","133ec7f4c905009c7dc325f1538230f7"],["/2020/12/27/最安全的浏览器tor/index.html","e596a5f8e2a6bf80886629068f1fa9ab"],["/2020/12/27/网易云刷等级和听歌数量/index.html","94f6c9c73ac2d07c0fe82eeab91115c1"],["/2020/12/28/freenom申请免费域名/index.html","65f33ebde38bb818f3b905c90dd6bf02"],["/2020/12/31/机场/index.html","032eb41e501654abdb4a162b645338f1"],["/2021/01/01/M1/index.html","0f999b08e6faab3a4296cecc8873215c"],["/2021/01/01/compress/index.html","433539f22190586f8915c79828b1480c"],["/2021/01/01/infinityfree/index.html","3011163cde748a82378e9647768f1743"],["/2021/01/01/硬核翻墙/index.html","01da268b40c23db06903ea4ddd49c82a"],["/2021/01/02/qq/index.html","aaf55fea4b834a2a0135da3f67f753dc"],["/2021/01/03/netch/index.html","d7686144a8d5732705ebb0d1e8812ab8"],["/2021/01/03/waifu2x/index.html","950fac39cc576cf8b74816190214e2b0"],["/2021/01/04/ads/index.html","749dcf3bdf20f670a5f95e9345c9f903"],["/2021/01/04/games/index.html","78d8135243c89d09b61735c270f489ed"],["/2021/01/04/heroku/index.html","17b0b26f29e0cabcf06ae6dbcaaf3745"],["/2021/01/06/movies/index.html","f87d0a96e7b81043037b3cd3ff5b9b00"],["/2021/01/07/google2020/index.html","a8662fa5c3d5bdbf6517f30f64890e7a"],["/2021/01/07/lucky/index.html","1c6bcae902e1d2073b24d17cbcdeb8c4"],["/2021/01/07/spotify/index.html","6b88955e02751efd5d77eaeaa3e114de"],["/2021/01/07/thunder/index.html","136a990bab6283dbba99191bc36a8e00"],["/2021/01/08/adguardhome/index.html","3ae28dcb6d55359fa99d6310be602115"],["/2021/01/10/IBM/index.html","9bc7a99225b2a535a25d54a0bbc464bd"],["/2021/01/10/potplayer/index.html","b95646abc8ff7cbf9c696279be19ef88"],["/2021/01/10/sakuraanime/index.html","41a6f7a4e80b0e4b6c9613e6a28de3ee"],["/2021/01/10/美剧星球/index.html","57aa00c877d5a3011ef1b6454d19bbe8"],["/2021/01/12/telegraph/index.html","391a5fc686d77869d7cff1bb3c4b487c"],["/2021/01/14/comics/index.html","1e4a8d255013cac61806e80ee1999650"],["/2021/01/14/ftp/index.html","0eebd1a9050ac51c4214ec774afc66d6"],["/2021/01/14/oraclecloud/index.html","27eb47d57bdd7b2d581ea16b22e6e98d"],["/2021/01/14/porkbun/index.html","cfa659774a52e6d868b2ec4b10075a0f"],["/2021/01/14/powertoys/index.html","788afab988c6cbad7f7a302fae85aa39"],["/2021/01/14/taptap/index.html","9b79a7ed93dd60f866051866ecd54108"],["/2021/01/14/ubuntuvsftp/index.html","38079328506680b1687d943e64aa1bff"],["/2021/01/14/小说/index.html","9d63e6a5d3181354803d93bbbed75940"],["/2021/01/15/freeproxies/index.html","051bbcdcd7c436245350dec8bc0a97e7"],["/2021/01/15/incaseformat/index.html","6616302b65f7b52a4aa811af1785ec06"],["/2021/01/16/euserv/index.html","e67f0b9d2670fda6e7b0bdad9a2fc86a"],["/2021/01/16/winxray/index.html","cf556c8f4579f2100971bb54bef833fd"],["/2021/01/18/qqreadhistory/index.html","6d14703e7679e9b61b5c6f085c2cb744"],["/2021/01/18/qqrevoke/index.html","ed167d34d2a4f3152d0b8286eed5c24a"],["/2021/01/19/freevpn/index.html","937d9f8631b37746c34bdf8054172e3d"],["/2021/01/20/browsertrack/index.html","3635f503e956329dcdb481638aa614b6"],["/2021/01/20/v2ui/index.html","4aa09a7aa5dfdf1a2c0077901e815f41"],["/2021/01/21/failedtoconnect/index.html","575b17fbdad892fc215ebabef0965380"],["/2021/01/21/gitcalendar/index.html","e296d8addab5252d22873f75d465f0de"],["/2021/01/21/markdownformat/index.html","a6e586b2dc9e6960eb17bf3a820a1ec5"],["/2021/01/21/markdowntable/index.html","e35d1d3ce0673ba592fa7de2861f1a20"],["/2021/01/21/vercel/index.html","f2db4e3a99fef1036c66832a20c91755"],["/2021/01/22/hardware/index.html","3c58b3edd2b683b52d619d30c89b6e53"],["/2021/01/22/muviz/index.html","4d767db51c16126a0f97b1615194402a"],["/2021/01/22/randomapi/index.html","9dd464ee954193211d75e325a4a69aad"],["/2021/01/22/searchimages/index.html","49ea1b70edf0247523155ad2484b30e4"],["/2021/01/23/RX文件管理器/index.html","3c2c6316caea96f160fc5839f631f4d7"],["/2021/01/23/chromeflag/index.html","54b282398af87a3fd1542a66c7fc1f9d"],["/2021/01/23/qttabbar/index.html","8a0a4481b7a9c24796c5914a5cff6891"],["/2021/01/24/githubspeedup/index.html","b50c6d8dc286aaf03598a130d8dfcc4c"],["/2021/01/24/jsdelivr/index.html","53ac6d784fdaa507d455dd3c1d99da6e"],["/2021/01/25/note/index.html","b476363333806f6d0bd32a918f8fc38f"],["/2021/01/25/soul/index.html","11ca7f47b58d8882d0359238978b9f64"],["/2021/01/26/herokuxray/index.html","b2c6b03dbf1851e86a60019ecac031db"],["/2021/01/27/proxypool/index.html","fcfedf8bde5a15fa78d4b0976c00f7c0"],["/2021/01/27/tracker/index.html","6e3634a07391368da69d3a4df176cdda"],["/2021/01/30/pandownphp/index.html","c46510ca507087ab746efb0f8499647a"],["/2021/01/31/newgroup/index.html","60832d1dc813fe76914742099c5120eb"],["/2021/02/01/clashlanguage/index.html","906f23f2e7be780a94b7109893d3d73e"],["/2021/02/01/encrypt/index.html","bf917867250254fb131d3da21977ecf2"],["/2021/02/01/footermotion/index.html","48418d2ca033add44744c69f73c88997"],["/2021/02/01/gitter/index.html","32a07445b0f01af559d27d0d894aafa6"],["/2021/02/01/pixivtop50/index.html","d4db9c71bc1fa83c3fd4c84e0c17a46f"],["/2021/02/01/scrollbar/index.html","19ea2089cc641f847c6e29aa74677cf6"],["/2021/02/02/clover/index.html","9c22dde58d4090407f9c3e19529faed9"],["/2021/02/02/maya/index.html","468899144444f832bb47b972c19a6520"],["/2021/02/02/speedcontroller/index.html","b301feb8978dab3ada20516a6f2b7c64"],["/2021/02/02/yesmusicplayer/index.html","668fe78c61e589f2da2715169c0a1dbd"],["/2021/02/03/lenovoonelite/index.html","4b253ef7c98c24f21929d45887b96fa3"],["/2021/02/03/skipads/index.html","3e2d9d56c0a347882a8692bf14c1e308"],["/2021/02/04/picseed/index.html","80a424a5c53697a8e5e476c04e29ceb2"],["/2021/02/04/renren/index.html","0d5a450d07f0c43f20d612c53c4dd2c2"],["/2021/02/04/serverstress/index.html","36b7172f15bd28c3c849a53ec7f665d6"],["/2021/02/04/wikipediazh/index.html","20cdf5557a9d5314c3fabf16455c4803"],["/2021/02/05/googlevoice/index.html","dc7aaa59390e13bb25df99cdad821305"],["/2021/02/06/clashconnection/index.html","d39f03bd5c151e1b38acc78b13aca0a3"],["/2021/02/06/gvtransfer/index.html","514f6fbe4b78eeedfbc43aff4a1a53bd"],["/2021/02/06/todesk/index.html","40a8a6901cba9e0133da8a4bb4daf613"],["/2021/02/06/vpnblacklist/index.html","0884ebdac9488fe0652538bfe34d71d3"],["/2021/02/07/mklink/index.html","4268f9f198fbcaf6856237c8b3b437fb"],["/2021/02/07/speedtest/index.html","83d7dc9d4c3e1b68c7f6c5e92d45a9f9"],["/2021/02/07/translate/index.html","283a6a443135691be0d47509ecf0fc73"],["/2021/02/08/ewomail/index.html","010ca47df22fdf6b32bc4cf3b531fc0a"],["/2021/02/10/officee5/index.html","aaf52d9e6ad4d224b92d0f9756eebe17"],["/2021/02/10/raidrive/index.html","a2b62e643d9653896d01c77468654878"],["/2021/02/13/e5sub/index.html","e2508cb72765ba38f630b349903b4057"],["/2021/02/14/screen/index.html","3f90affbbb911ba0118dbc37d7302d00"],["/2021/02/15/clashtun/index.html","47d513f25b54600ebbd8c93a04e72d6d"],["/2021/02/15/messageboom/index.html","1733f99303f026ac8c86fe118fb02cc2"],["/2021/02/15/oneindex/index.html","ab25b9d1dc8162f0d6d6f67fc3c5a69e"],["/2021/02/16/govsites/index.html","c0cb26f5963c7ddec76b52ce16b0b68e"],["/2021/02/17/hexototypecho/index.html","cf6116cba7d831536bc4281e1448914d"],["/2021/02/19/fiddler/index.html","62d08dad7afe7dcc18d807447baa5289"],["/2021/02/22/potplayerset/index.html","cd5230eb1e74015703ef4f436f2a67f5"],["/2021/02/22/studyresource/index.html","11ae61c19dadf67ece990a3a5674315f"],["/2021/02/22/telegram/index.html","caa65b9cbd06843f7e1e88b87d3a4d46"],["/2021/02/22/videos/index.html","56f024c2654f4cd9d21d9b1876952296"],["/2021/02/24/mtproxy/index.html","0d82cbd95e3663358243b24a731283b2"],["/2021/03/10/catchcat/index.html","c8299e01c70bee9dceefb1fe1a6781cf"],["/2021/03/10/neteasemusic/index.html","3d1f40b8d9dc5bca7d305d7cd9902988"],["/2021/03/10/surfboard/index.html","e978b29ee6289b985de380808e5bc06a"],["/2021/03/11/vpnandjc/index.html","8da99427ad4c38c1eb464a1cae3ef9fb"],["/2021/03/12/qrcodes/index.html","d48e70971e253be1c4fe9282ec75385c"],["/2021/03/20/qv2ray/index.html","cfc4db36efe6e0f84d0e54b0765529bd"],["/2021/03/22/freevps/index.html","95eeb8dec96cca09677eae7a05ec1b81"],["/2021/03/24/tgstickers/index.html","a37bdd83e2b49279bb6e2747d052ea2a"],["/2021/03/25/clashx/index.html","ebab2e65d679424db41159a3f621db3e"],["/2021/03/26/bingwallpaper/index.html","bd2723360614f0d250adcf8bc7062e18"],["/2021/04/03/soutu/index.html","53d5516ab6061cc3fe2f86176bdf6000"],["/2021/04/03/tiyunti/index.html","9498ea0e41e3d0c2300de9df95fe4747"],["/2021/04/04/btpanel/index.html","9947ccb5c513d0e8dfd13ac81bf12a66"],["/2021/04/06/atlasos/index.html","e9b7c21a7d83fecc4131f5afd7613155"],["/2021/04/06/cleaner/index.html","297017b35d1ce87abf54f270ea71229c"],["/2021/04/14/asf/index.html","0d293f956219ae5eef745cc3db21b934"],["/2021/04/14/rss/index.html","14132c364d7dad913dd80214337d0fcb"],["/404.html","f4282bcf7218e8f5c0630887a44425df"],["/archives/2020/11/index.html","2861486bc0cd6df9e0fc06b325950eab"],["/archives/2020/12/index.html","f614feb9fbc2cc7d577b45647ff0b227"],["/archives/2020/12/page/2/index.html","12bc318dbe7ff8a504c4717cbb72f38d"],["/archives/2020/12/page/3/index.html","fdb4a8eb18d706d3575bd56faea2d436"],["/archives/2020/index.html","f332b7d64fd7919889f68f7a5f016040"],["/archives/2020/page/2/index.html","62b5a3f77407277e8321dc4e12148638"],["/archives/2020/page/3/index.html","33bdfee49baf3ef85a0aa29627569855"],["/archives/2021/01/index.html","66853764cdf0ab55447f3826e00703b2"],["/archives/2021/01/page/2/index.html","54d2a54cba0d6971d6ed97d98b839fb6"],["/archives/2021/01/page/3/index.html","1ec54f7427831531ea2d4025e5423e48"],["/archives/2021/01/page/4/index.html","b09a2b7cf2250529b0a9f889a798416e"],["/archives/2021/02/index.html","9896caab4d751e21e590e66baa581a5f"],["/archives/2021/02/page/2/index.html","f76b4f7d4f455922d34377a00e130aed"],["/archives/2021/02/page/3/index.html","ae8e5781a7d67c093363e1d7e9d9cedc"],["/archives/2021/03/index.html","32b98f1cb4e2593441cb61a93967c632"],["/archives/2021/04/index.html","ef0ff6e279f2459debb82e9c42aab7de"],["/archives/2021/index.html","5923ee7f2c0b611a58a763aa85b1708b"],["/archives/2021/page/2/index.html","55f303604852c8653bd6e0db32245031"],["/archives/2021/page/3/index.html","a661471e77c09eb5a93c5730b899d252"],["/archives/2021/page/4/index.html","0edf11f11dab25527de8f1bbbdf2e43e"],["/archives/2021/page/5/index.html","37d09fb7001e767b7f081b2be20ff327"],["/archives/2021/page/6/index.html","9930f94787043497240700bdfb95b95f"],["/archives/2021/page/7/index.html","93b18af8e8140eba93a3047b29239bff"],["/archives/2021/page/8/index.html","3e276120c67a6d68980207642cfd9cec"],["/archives/index.html","3010aec23b35af2425cabb325a102ab5"],["/archives/page/10/index.html","a89a8227597227cfec6dc82ac3bb11fc"],["/archives/page/11/index.html","1d2bb335d989742355854bb5c98c058a"],["/archives/page/2/index.html","e71d9ffad49e4b9765c7fd579eeafb9e"],["/archives/page/3/index.html","29e644a11dbcc91a9b9e537fa4b77b7c"],["/archives/page/4/index.html","ebcf1decd38e92d11c199278ccdf8a16"],["/archives/page/5/index.html","8c050f0b57487a56868970a034cdcc13"],["/archives/page/6/index.html","11ca8287e2fc288714969e434d3fc022"],["/archives/page/7/index.html","18b28d8186a43a65f4e3bfdcae13dc22"],["/archives/page/8/index.html","04f8a3d7e26c0d6c777c1637c616f74f"],["/archives/page/9/index.html","0eecdb5df85fd705e6ad7dd21d1c68b4"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/atom.xml","625ccd12606c4caf47448345448e0ef9"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","3c1f335e01ac80de7899d076bba2aa3f"],["/categories/index.html","71ec19a6a59a916263b484cf7b473e87"],["/categories/下载/index.html","76e3164f919bcfc72d731796d4de6e9d"],["/categories/安全/index.html","a08e182bb93e09d6136cb681a4fc4bd1"],["/categories/建站/index.html","bfa0057eba23017def25ab6f428cd488"],["/categories/机场测评/index.html","d3025ed1669953a5d760b95831ef90ba"],["/categories/杂/index.html","8b679c50c41d2c90830bffb1d558e161"],["/categories/杂/page/2/index.html","a430f8fb6fcc30d76e3ae2fd38514095"],["/categories/测评/index.html","ff57b41ad13c8037fc4344164f797a1f"],["/categories/科学上网/index.html","6dce22d7a59f79b4fe08ed6f09dbfa24"],["/categories/科学上网/page/2/index.html","375bcc253d31e888a3352b989d956c8f"],["/categories/编程/index.html","f06c0e5bd5fad656dfc32981c88978c0"],["/categories/网站/index.html","29e29ca015c4d306af31ef97c001b4d8"],["/categories/网站/page/2/index.html","144bd832b3943f729928a82551d9da89"],["/categories/软件/index.html","434e164ec93f027e2533e675b65f6731"],["/categories/软件/page/2/index.html","985fc4c42a6c62ffeefd24c64ec2e926"],["/categories/软件/page/3/index.html","9a80e9bb90fb4d13111600da752030c0"],["/categories/软件/page/4/index.html","313018c2a30f01ad0e7f7d0af2f63647"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","a361ee1267e6da6031809bb0e4df381c"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","43145675c5cffe9a07545757e4b89ac5"],["/ios/index.html","06eec52e7d006cf789b4683ccab2d6b0"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","ae7e07a339cb8a8890e14cfe39347838"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","8060f80aab3e6fef4ffc7b83cf7d6265"],["/page/11/index.html","d52875c1a9a47c70bab2be48e2a82516"],["/page/2/index.html","00c3d8df12224287aebcc35b74882419"],["/page/3/index.html","6b355ebbac01633ae8b3d627270248f5"],["/page/4/index.html","fd9d0a2efc6287a3ca023c70683e46a0"],["/page/5/index.html","96b81b055c871df9297e8d10219bb404"],["/page/6/index.html","47b5b438f196406cbd628d26cc780a39"],["/page/7/index.html","d6308bb1079fbd17ce5ef367d7793d6c"],["/page/8/index.html","4a0a8e8e6fa16e4d03a4d10b07682d87"],["/page/9/index.html","99155cbdfa776c06e94c90bb055e8e40"],["/payment/index.html","a455e5cede39476cfe77c81a01717b0e"],["/privacy-policy/index.html","b17c7a1c2feaaacc537dbea61f93be2b"],["/search.xml","29f44b833a867f00c6411acdbdcb3d08"],["/sitemap.xml","a957e1357da04a4ab6143b626eacdb94"],["/sw-register.js","e21c8868a7c6db5b135d607ebdc1e1ac"],["/tags/5t/index.html","45efb1a18845940a3e48b0dbcdb036be"],["/tags/Bing/index.html","25f59bffe01432afd068085dcc799f66"],["/tags/Clash/index.html","12f373209e1dbdd7f07d31a079b7a9a9"],["/tags/Clover/index.html","132322f61c8f8bb4d391126cad179491"],["/tags/E5/index.html","e81334d93f17711082bbaab899a516b0"],["/tags/FTP/index.html","3dc49f65779e77adbfa8e0758ff3e805"],["/tags/GitHub/index.html","0df432a84f9c0622312eb3b8d625f0c1"],["/tags/Heroku/index.html","72208581244f1bcbf8cd6938d14775a6"],["/tags/Hexo/index.html","f5ea4d2be44c40d7f318f79119e52f0c"],["/tags/Lenovo/index.html","7d4b1ad39d5f41907a7b93cb0d9f3bfb"],["/tags/Oneindex/index.html","c5a989aabbfdfe8f328092d83a20d33a"],["/tags/QQ/index.html","9c0f71a7749c75c9c39b49f16de97ed2"],["/tags/QTTabbar/index.html","c574be65f22ed750cc6c77f8139085f7"],["/tags/RSS/index.html","869c383d9cc4506309abd05bb7357d1e"],["/tags/RX文件管理器/index.html","93c035388c73bfa53b5ec779476ed908"],["/tags/Todesk/index.html","d9ea1067541ef9f8a7fbf5646ee1c13c"],["/tags/Vercel/index.html","b457c41c6eb53d4ca0e9328757d73ac2"],["/tags/ads/index.html","ff801d126f1edf7c98a86874a07eb3bd"],["/tags/api/index.html","c7f8f128b5e5772635fc03aedb48b626"],["/tags/app/index.html","b9c4421f01b3265ae90c965e51385c5f"],["/tags/asf/index.html","b9ea6bb3d264343525111d82fbaa7769"],["/tags/atlas-os/index.html","5ef30385f88d5e1f2d3037da2c37b4d0"],["/tags/blacklist/index.html","7fa3be272a5ca499bbe751e794e9781c"],["/tags/butterfly/index.html","6a5cfd193f675578a980bed890a5bb67"],["/tags/chrome/index.html","a098ab5347ac3d3d654c2fc25fbe86d2"],["/tags/clashx/index.html","4ea19f2007ec679450f98f255fa994e1"],["/tags/cloudflare/index.html","f43937d20beb16963655822db3499737"],["/tags/cmd/index.html","f6dd149eefe90d8ba382bac857d9275c"],["/tags/c盘/index.html","7db29e637d98e571bf070aa4dcc2b697"],["/tags/email/index.html","ad2d2767dea78c863532678bfbaa8e54"],["/tags/ewomail/index.html","4b77b95fdf1bae3cec54466c6dfe8253"],["/tags/fiddler/index.html","a4a3d05ca183322795a7c25d6e74e8b2"],["/tags/flags/index.html","9d76817f27aad4d1607f860b5017ff2c"],["/tags/footer，页脚/index.html","99c696fabd95f1b2454d2bbfbe19d812"],["/tags/galgame/index.html","274c842a320d1c3e897f7f4a52fa77d2"],["/tags/git/index.html","26da04244f1aa4a2eda5612446440a2d"],["/tags/gitcalendar/index.html","dda3bb1915864e955b922df87ad53244"],["/tags/google-voice/index.html","bc2a6a1fd0c3a7faf0e1630d7e9c1351"],["/tags/gv/index.html","8282aa7329a313d11a832d8b201ec124"],["/tags/html/index.html","09be89024919e598e1a1989541ce3e83"],["/tags/index-1.html","3a9199dccdec399a2d100b091d0e98b2"],["/tags/index.html","f2d61f41199724f80754d7e6875fb30a"],["/tags/js/index.html","4bc9a375936674ac593fa97898424ca0"],["/tags/jsdelivr/index.html","fec6395e3957f5c43abe98e15d5b793e"],["/tags/linux/index.html","1dbbf96e2f0ccbfc608f0165014f9472"],["/tags/macos/index.html","b50170ffaa236b5a8f064367078dda68"],["/tags/madVR/index.html","a154bc1d1dcfe35af829d5123af130f5"],["/tags/markdown/index.html","1f1c685eb519610f69ae5845a339c652"],["/tags/maya/index.html","40cb62a924d84f1f36f578f15b697d75"],["/tags/mklink/index.html","c0a9d7f42f22a9e9fb85a8a32a0fc9b2"],["/tags/office-e5/index.html","4e338c9b9724926c01b795ff2d23b0fe"],["/tags/onedrive/index.html","962b9f3f823de954502817419fe4f08e"],["/tags/picGO/index.html","c8c7ca0308b02300bf3927aa233cd241"],["/tags/pixiv/index.html","244a74f1f58b781d4361858c291963a8"],["/tags/potplayer/index.html","ecfbc2bd80f07943050e1e46723ec0b8"],["/tags/proxypool/index.html","c26c5bbd1e47a9cf8d1aaed5442e039b"],["/tags/qbitorrent/index.html","aed29c4f246536d1983871fbc3deaa67"],["/tags/raidrive/index.html","fd3a78e835fe59bf4f3db7fe81dcff1e"],["/tags/screen/index.html","3daff32b5e3a2b910b91b16f3e72b36b"],["/tags/speedtest/index.html","a62603687d17f4a40598bb32d466c7dc"],["/tags/ss/index.html","f5b70deff6b848a9b0d180ca7a46edcb"],["/tags/ssr/index.html","f234966945ba52ca63495a9c0d2dce15"],["/tags/steam/index.html","ea8ba8cd364a15470f3856d7fdd38883"],["/tags/stickers/index.html","fa33e29294d9da7617727ec3f2cc5d41"],["/tags/surfboard/index.html","ad7674c9d2630347c8ee8c323842d939"],["/tags/tap/index.html","ece569f7dca5dcc5a6ce6043b0b37439"],["/tags/telegram/index.html","92697aef19fd5322a8372806b429fd65"],["/tags/telegram代理/index.html","12efffce2ffa67e668b8d0b2eedbe97c"],["/tags/tg/index.html","3e385dd11f674dfd8af9f4d7c0057324"],["/tags/tg代理/index.html","3a22d0898d170977c3e13b3eaf1c8c7b"],["/tags/top50/index.html","7e324570bf76a13f268f4518042d261c"],["/tags/tracker/index.html","7249e5b800baec235c930a7d91494614"],["/tags/translate/index.html","3f66e27db657f40b01e5359f71d09bf7"],["/tags/translater/index.html","dc3eb8ad47f01dad892520fd9c072f0c"],["/tags/tun/index.html","a077f40f5f59e43142ed704b26770dca"],["/tags/typecho/index.html","6422ef1f7338d24bf0383902fd3ba4d9"],["/tags/v2ray/index.html","7c7a12e13dce5d964614c8b9f8bec295"],["/tags/vpn/index.html","e77669a9850b829a551339b1a3cf07a6"],["/tags/vps/index.html","5400633968129aace500f055a274b550"],["/tags/wallpaper/index.html","c360e538704f98854fe97732d1a650b1"],["/tags/windows/index.html","1810ac2aac7ccf590bd1115939ae0f21"],["/tags/windows端/index.html","e57039fbbf9db149dc49cc9ca6de8864"],["/tags/xray/index.html","15532916da61ab3521b40ad23c997d53"],["/tags/yandex/index.html","2cba645d2a94e83e728f6874a61e1eae"],["/tags/下载/index.html","61969d3e8e2e0c52f1fdcaa682f5f188"],["/tags/不限速/index.html","82dcb8a23e9f1b850dd713a188730979"],["/tags/个人网盘/index.html","45a1b7cae2be7fad99bd086b9fbe5242"],["/tags/主题/index.html","d7ea2225fdd36247a82430b3d6957a7d"],["/tags/二维码/index.html","724f6fe97abd4b0e919e7bdaa59c4db7"],["/tags/云便签/index.html","1b0ec58f1069ef9ce0488584df1efc15"],["/tags/云盘/index.html","ebbc50f143e3ee802a6c6ca6584f0cf8"],["/tags/人人/index.html","7cc76ec7fa86537e7f66df07d3b40452"],["/tags/代理/index.html","7880d1bbb1b3630707c1cb0906a0971c"],["/tags/代码/index.html","0dffa94b01e1ca966d01347c6f4b6074"],["/tags/优选IP/index.html","8af5fbb6da2051d4b04edc3897bdd0db"],["/tags/便签/index.html","06777a6201af3d416fe02358130e3a68"],["/tags/保号/index.html","e4cef1ed582df9bab0c177c7391b4781"],["/tags/免费/index.html","1e2297185258a5834aa5017d2c2231a7"],["/tags/免费节点/index.html","a9c2dd0d71d1a4a5ad21ca0dcf5e67af"],["/tags/冷门节点/index.html","e7275faba67255c93cdc0b6fd55016a6"],["/tags/删库塔/index.html","6f2be6d51a4f05f6ba55e7ff9fd46ce9"],["/tags/加密/index.html","714977581c595c598e420c880fe92660"],["/tags/动画/index.html","ccd277e66ce37c92f3f759639ac4dc10"],["/tags/博客/index.html","22dcc0bc25e2fe72a4dc8a0db403eb4d"],["/tags/卸载/index.html","6122dd75077bdaa5bc07ede12bd95c20"],["/tags/历史记录/index.html","37729e65e3549f34c59a3fac360cc567"],["/tags/压力/index.html","e365e3f3140d408fc81354106879f3b6"],["/tags/压缩包/index.html","28c3056967efa39a8d0c3844ffd174f0"],["/tags/反代/index.html","803c3ec73d5bbc399816435e931a67e3"],["/tags/可视化/index.html","4f5e203be76753ca4710afa750b6a0a3"],["/tags/命令/index.html","74279aa71eb9d589fa8319f546510860"],["/tags/国家/index.html","bd5c5d192660dae2e52a7ab82f229e0e"],["/tags/图床/index.html","46b7e1f467f2a388d4141a3fc2d8cab1"],["/tags/图片/index.html","a0b65ea4b07d3f23dcc51919b327294d"],["/tags/域名/index.html","8ec361bc7d3b01a37cdf071d3d6dabc6"],["/tags/壁纸/index.html","5ea1d6fadf452a188920ce0dda3a04ca"],["/tags/多标签/index.html","eaa4374f79833d89951d7b20b91d5f8c"],["/tags/奈飞/index.html","66d22b033fbf4315d081da4f0aeb15a3"],["/tags/存储/index.html","a1b267c86eb17736b0243800c8826587"],["/tags/学习/index.html","25d35ace8212a04ccc58d7fc25d7a342"],["/tags/安全/index.html","c3ec48e15aaf2756814f92c9afa993ba"],["/tags/安卓/index.html","8a1f001495a7867a7e2b4ca6b2c90e23"],["/tags/宝塔/index.html","d093e546c3722315004ba0d00cc2da15"],["/tags/小游戏/index.html","ad9e6c8c6a9149e2d22f14cb83b40868"],["/tags/广告/index.html","866e132b6b607fcb4f85149a30e0042f"],["/tags/建站/index.html","86287c32675752f67382b08ff29f8cee"],["/tags/影视/index.html","fc616bffc7cf31b6e429874e2be091a7"],["/tags/微信/index.html","efbb2891a260abd56a7655fce7a6963e"],["/tags/快速启动/index.html","3ce81c8c209170fda3e2434b5a8f0d24"],["/tags/手机/index.html","adf0bb6198844c7c24a46a601354a2cb"],["/tags/托管/index.html","840cb3ec7bf1247595f8a3151a24daa8"],["/tags/抓包/index.html","6bd6bccfaf90a9ea48776b601c0ad49d"],["/tags/抓取/index.html","d2e075d569654e531d41c68fdc3b5f13"],["/tags/投屏/index.html","25ac1cac148518340d2674ff84b4ce77"],["/tags/拓展功能/index.html","6b150c1c7a2893617bdae8cd95624698"],["/tags/挂卡/index.html","99693d3b80fb1758f77a9736c08f9694"],["/tags/挂载/index.html","64ea00ef9916e36431873e83baddad9a"],["/tags/指纹/index.html","f89ad4f27ce6575cee0a1ec4ad668794"],["/tags/接口/index.html","d87d38ed3526c6c0f7693a37cc6a713f"],["/tags/提取图片/index.html","bb1feffbb68bbcf01262fad990eae8fe"],["/tags/插件/index.html","809423accfecf08c0e1811ee214653f5"],["/tags/搜图/index.html","cc548b96d1c9c7eda32ed33041015896"],["/tags/搭建/index.html","0fd97d00427039a3d585a53bc5cff47c"],["/tags/撤回/index.html","1b2e660d20348829bde21efbf44831b8"],["/tags/播放器/index.html","72286834b772445222ecda7491a00300"],["/tags/支付宝/index.html","bd87b7dce7399699200b7674d21878c1"],["/tags/政府网站/index.html","93165beeb099a9c8139f2587bfbdb466"],["/tags/效率/index.html","ebe2622b018637e40946c233b0bcafe2"],["/tags/日历/index.html","431233c6f58f58686b9e5288feb0e201"],["/tags/服务器/index.html","528fbe8fbfb364750937c789a303caa3"],["/tags/机场/index.html","4f79c7230b4379a5bdbb91a936906077"],["/tags/查重/index.html","7a2019f8bb3971a0314a5bfd2df7aea5"],["/tags/桌面/index.html","73ae5d7d11077202d0900bbb9f46460c"],["/tags/梯子/index.html","40df59eec4dcbd39b51f1846d207b5a6"],["/tags/检测工具/index.html","3cdc963d45af7c29bf7cc6d5d6f1504b"],["/tags/汉化/index.html","6f100616d9bac911e0edf058f188c17b"],["/tags/测压/index.html","ea0e52f54bc13a88986139db87cc35ba"],["/tags/测评/index.html","66548ca02baafca913d79372b1e3602f"],["/tags/测速/index.html","1f3a2aea6d94825d4eebf6409de17b7e"],["/tags/浏览器/index.html","17e913166e383cdcff08b5f3a199c35f"],["/tags/清理/index.html","a1cfbc2109b84fd10a77f33559a60be0"],["/tags/滚动条/index.html","b49aa732720db8fa30c4298c3947771d"],["/tags/灰色歌曲/index.html","758b476e0dcd0d5880b79aed629134f4"],["/tags/电影/index.html","583a739357f456544bdbab9a66803d9b"],["/tags/电脑/index.html","178027c6ba5004a47eaa866fb38468f6"],["/tags/电视剧/index.html","4c3206f2b107b1388b4ab1304f4d26d0"],["/tags/白嫖/index.html","301d8424d29668211b5604ec92dacd3b"],["/tags/百度/index.html","a8068190eeccd72d71528d721d68059d"],["/tags/百度云盘/index.html","297024601ce0ee011b0f8d9ad0942f8a"],["/tags/百科/index.html","34c585bcf3453297cb267141367350be"],["/tags/短信/index.html","3424e8cd8c06d9b9d1d0c2bf2a26a0eb"],["/tags/硬件/index.html","38dba61f67e181cdaf237b6aa28bb085"],["/tags/科学上网/index.html","975f0db28f0e75dce6254653770726e5"],["/tags/空间/index.html","c1403ef984632685b6ffdbea9000593f"],["/tags/笔记/index.html","b0236302e53f435052ecc1471afa99a1"],["/tags/简洁/index.html","1846f941aebd234e80b3e87129d02c2f"],["/tags/简约/index.html","01af29834491e096e16af7546e3b61aa"],["/tags/维基/index.html","2e4231a0a93619afde358771f2985bfe"],["/tags/网易云/index.html","b0c06dd3e4b663638c2886784179c3f4"],["/tags/网盘/index.html","4e7cbf1fe800f22b95b7b073892c83fd"],["/tags/网站/index.html","c53cc81f91e706bceccab27e50345f3a"],["/tags/网络/index.html","5376659d9a91c9a71656355362bd6c54"],["/tags/美化/index.html","135058bb799d7c2e74e6c14a5cffab4e"],["/tags/翻墙/index.html","8c776ef907b0d26f072fca8676eeb42d"],["/tags/翻译/index.html","4e1a13786bb60f750ac4366f4b5e7b45"],["/tags/翻译器/index.html","89c89169ad514b45b5c84f93d0e02fcb"],["/tags/聊天/index.html","521b99ae2e854257fdcbc9385ca3a99d"],["/tags/聊天室/index.html","51958c66838fac44743b42d82d5c2c3b"],["/tags/联想/index.html","2b03ac61167614a70ded72176a027155"],["/tags/节点/index.html","a148ad6b92f344a41f5d4c565e1b1eb2"],["/tags/虚拟手机号/index.html","a7d8dff7e4782c25e8fac76f5d693667"],["/tags/补丁/index.html","cc2abca2568e18818e5c27a62722abc0"],["/tags/表情包/index.html","4dfa4218f2f4068fb3d8d57405769eb4"],["/tags/视频/index.html","8e0e9e9b563d0a74de8e3dcab6e9f2d0"],["/tags/解析/index.html","5fdff714be8f01c847b74fbfe93ff287"],["/tags/订阅链接/index.html","4fa043a2bc069a4ca2fbcfb63ccb2bcb"],["/tags/记录/index.html","bed0b2a109c7215bccd94bec261b42fc"],["/tags/识图/index.html","d05b4a639ef90e2fcd9c473ce1b32db3"],["/tags/语言/index.html","6f4e7de0179f5d97273fa86028617230"],["/tags/资源/index.html","62c3af60a26aa24856c640ad6be511ab"],["/tags/资源管理器/index.html","a1dc3d39e2b79b90904952cca176923e"],["/tags/转移/index.html","75fdbb6bea69757330cef24240a1e709"],["/tags/软件/index.html","3955c60230e18e0aab91743af114f3fa"],["/tags/软件/page/2/index.html","9b9d8bc12220ca510088a4c55522ceaf"],["/tags/轰炸/index.html","504de05825cede9d9239e7fbbd00c2f2"],["/tags/迁移/index.html","3dd0b1c07688bb00204147aea52bb936"],["/tags/远程控制/index.html","4abd1ff57b2a6203bb4de505a871b3cd"],["/tags/连接/index.html","7b57b5e8b94e3b1aa64969f31052b092"],["/tags/追踪/index.html","25451f91ade8b523a748b51ab000c5e4"],["/tags/速度/index.html","94ff30fee929fe5c198437ce1bfe95c6"],["/tags/邮箱/index.html","210f9dbf1a83e0cb866ed31a87451d0a"],["/tags/酷炫/index.html","f9eabbd02227a53fc8b82b746d536384"],["/tags/钓鱼/index.html","1d599f85a832d3520c0a68f9648aa814"],["/tags/镜像/index.html","eed5bf6b45437b79f5e871f7080c82ce"],["/tags/阅读器/index.html","f12276d4d1fd3c11f1b0d3ff89015945"],["/tags/随机/index.html","762d6927e5a4d5a3018ff9090728b30f"],["/tags/隐藏/index.html","3d51357a3adde0a20ee2dfd5b0597f91"],["/tags/面板/index.html","1009379d96bc207b251f8440baed2157"],["/tags/音乐/index.html","82130619e59e99d5ec4761153019a9a5"],["/tags/高颜值/index.html","d486aad68e41af2d9f978ded010815c5"],["/tags/魔改/index.html","1e31f9564a6b019784c714c58e73f860"],["/tags/黑名单/index.html","742cd0270e77bbcf009c4466ae19b677"],["/urls/index.html","20a24a1415f895b690ca2d5b8352ac27"],["/vps/index.html","483bf44333fe84c9c3819da6e76faf83"],["/支持/index.html","32ad434df29bc7e6666d343b43d8571d"]];
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
