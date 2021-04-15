/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","cb7d244ebb65057819905f4cda762d70"],["/2020/11/29/clash-windows/index.html","e1c9ab05bf06b0951c3f0911c44259d9"],["/2020/11/30/websites2/index.html","2d6937730da78b63bc6918a6a012dd41"],["/2020/12/04/iphone4s/index.html","3bdaffcc92b16062ce215fdc5845cbcd"],["/2020/12/04/onenote/index.html","ba715973204d8fde8d02add92a6a8c9d"],["/2020/12/04/wesites1/index.html","ae8f230b7d38a9159792222629db6f4c"],["/2020/12/06/nokia808/index.html","8e842814b00e00402abe966ee98fc7cf"],["/2020/12/07/ipad1/index.html","5daf61af728a7ed525a2ae7e64c54a34"],["/2020/12/18/freesubscribes/index.html","f365c290175af1563dbb4bf6ca0c0c84"],["/2020/12/19/musics/index.html","1ef6eb0dedb4cd2f184538e6bf36fe36"],["/2020/12/19/shadowrocket/index.html","df2572e4f67c6897bca768d6caa89cf4"],["/2020/12/19/v2ray-windows/index.html","9b426772abfa3a927d220d59cfc09bef"],["/2020/12/19/v2rayng/index.html","19eb5647c2678ef9120f1006fa4f32b2"],["/2020/12/20/beoplay/index.html","71592147a9c90eda2e80e17bffb9a0a0"],["/2020/12/20/订阅链接转换/index.html","58e18bc87ee399e055cae278a7f8232a"],["/2020/12/21/chrome浏览器下载提速/index.html","00a0c99f8d826874d47137d5ee6787b9"],["/2020/12/21/免费128线程并发下载xdown/index.html","1f969fa2842205581a0e454d2b26170a"],["/2020/12/21/免费32线程下载软件ndm/index.html","4aeefc23dfbface2fe299db1d88172bd"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","2f70e2b7a2eb8e4f48da404c8aa7c877"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","485b603f9d79f7b8868464d463fc7d6a"],["/2020/12/21/广告怎么知道我在想什么/index.html","897fcef80e7c9a54b4ba407595d217fa"],["/2020/12/21/无名·引子（小说试写）/index.html","2603a3246652eba955828127c062dffd"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","5b2f253b751c76bd7231453e310fc3eb"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","7bafff6ceaca96316d129a8cf048191d"],["/2020/12/21/高速轻量下载器aria2/index.html","79529a6e324f4804540855c2979dbbc4"],["/2020/12/22/2020-cee-roo/index.html","45553495081724c022edd5f36e2bcd11"],["/2020/12/22/firefox插件、github、steam富强/index.html","6f9f304ff99ecdd112a6b50ad2462f40"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","dd7ac66201a242d8091ef9c8a5ecd2d3"],["/2020/12/26/python-day-1/index.html","3fd2a982f6adf20f84489987c20fb571"],["/2020/12/26/python-day-2/index.html","e7fa5a5dfe61eb588a7088132ed53265"],["/2020/12/26/度盘不限速下载方式一赏/index.html","ea1a16d5a676d834274da44e7996724b"],["/2020/12/26/添加开机自启软件/index.html","7c8c1339a9ac5d6eadb5edf862e2e04a"],["/2020/12/26/电脑端截图方式一赏/index.html","6c7c973a5df3f871534bc993d6e8e574"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","133ec7f4c905009c7dc325f1538230f7"],["/2020/12/27/最安全的浏览器tor/index.html","e596a5f8e2a6bf80886629068f1fa9ab"],["/2020/12/27/网易云刷等级和听歌数量/index.html","94f6c9c73ac2d07c0fe82eeab91115c1"],["/2020/12/28/freenom申请免费域名/index.html","65f33ebde38bb818f3b905c90dd6bf02"],["/2020/12/31/机场/index.html","032eb41e501654abdb4a162b645338f1"],["/2021/01/01/M1/index.html","0f999b08e6faab3a4296cecc8873215c"],["/2021/01/01/compress/index.html","433539f22190586f8915c79828b1480c"],["/2021/01/01/infinityfree/index.html","3011163cde748a82378e9647768f1743"],["/2021/01/01/硬核翻墙/index.html","01da268b40c23db06903ea4ddd49c82a"],["/2021/01/02/qq/index.html","aaf55fea4b834a2a0135da3f67f753dc"],["/2021/01/03/netch/index.html","d7686144a8d5732705ebb0d1e8812ab8"],["/2021/01/03/waifu2x/index.html","950fac39cc576cf8b74816190214e2b0"],["/2021/01/04/ads/index.html","749dcf3bdf20f670a5f95e9345c9f903"],["/2021/01/04/games/index.html","78d8135243c89d09b61735c270f489ed"],["/2021/01/04/heroku/index.html","17b0b26f29e0cabcf06ae6dbcaaf3745"],["/2021/01/06/movies/index.html","f87d0a96e7b81043037b3cd3ff5b9b00"],["/2021/01/07/google2020/index.html","a8662fa5c3d5bdbf6517f30f64890e7a"],["/2021/01/07/lucky/index.html","1c6bcae902e1d2073b24d17cbcdeb8c4"],["/2021/01/07/spotify/index.html","6b88955e02751efd5d77eaeaa3e114de"],["/2021/01/07/thunder/index.html","136a990bab6283dbba99191bc36a8e00"],["/2021/01/08/adguardhome/index.html","3ae28dcb6d55359fa99d6310be602115"],["/2021/01/10/IBM/index.html","9bc7a99225b2a535a25d54a0bbc464bd"],["/2021/01/10/potplayer/index.html","b95646abc8ff7cbf9c696279be19ef88"],["/2021/01/10/sakuraanime/index.html","41a6f7a4e80b0e4b6c9613e6a28de3ee"],["/2021/01/10/美剧星球/index.html","57aa00c877d5a3011ef1b6454d19bbe8"],["/2021/01/12/telegraph/index.html","391a5fc686d77869d7cff1bb3c4b487c"],["/2021/01/14/comics/index.html","1e4a8d255013cac61806e80ee1999650"],["/2021/01/14/ftp/index.html","0eebd1a9050ac51c4214ec774afc66d6"],["/2021/01/14/oraclecloud/index.html","27eb47d57bdd7b2d581ea16b22e6e98d"],["/2021/01/14/porkbun/index.html","cfa659774a52e6d868b2ec4b10075a0f"],["/2021/01/14/powertoys/index.html","788afab988c6cbad7f7a302fae85aa39"],["/2021/01/14/taptap/index.html","9b79a7ed93dd60f866051866ecd54108"],["/2021/01/14/ubuntuvsftp/index.html","38079328506680b1687d943e64aa1bff"],["/2021/01/14/小说/index.html","9d63e6a5d3181354803d93bbbed75940"],["/2021/01/15/freeproxies/index.html","051bbcdcd7c436245350dec8bc0a97e7"],["/2021/01/15/incaseformat/index.html","6616302b65f7b52a4aa811af1785ec06"],["/2021/01/16/euserv/index.html","e67f0b9d2670fda6e7b0bdad9a2fc86a"],["/2021/01/16/winxray/index.html","cf556c8f4579f2100971bb54bef833fd"],["/2021/01/18/qqreadhistory/index.html","6d14703e7679e9b61b5c6f085c2cb744"],["/2021/01/18/qqrevoke/index.html","ed167d34d2a4f3152d0b8286eed5c24a"],["/2021/01/19/freevpn/index.html","937d9f8631b37746c34bdf8054172e3d"],["/2021/01/20/browsertrack/index.html","3635f503e956329dcdb481638aa614b6"],["/2021/01/20/v2ui/index.html","4aa09a7aa5dfdf1a2c0077901e815f41"],["/2021/01/21/failedtoconnect/index.html","575b17fbdad892fc215ebabef0965380"],["/2021/01/21/gitcalendar/index.html","e296d8addab5252d22873f75d465f0de"],["/2021/01/21/markdownformat/index.html","a6e586b2dc9e6960eb17bf3a820a1ec5"],["/2021/01/21/markdowntable/index.html","e35d1d3ce0673ba592fa7de2861f1a20"],["/2021/01/21/vercel/index.html","f2db4e3a99fef1036c66832a20c91755"],["/2021/01/22/hardware/index.html","3c58b3edd2b683b52d619d30c89b6e53"],["/2021/01/22/muviz/index.html","4d767db51c16126a0f97b1615194402a"],["/2021/01/22/randomapi/index.html","9dd464ee954193211d75e325a4a69aad"],["/2021/01/22/searchimages/index.html","49ea1b70edf0247523155ad2484b30e4"],["/2021/01/23/RX文件管理器/index.html","3c2c6316caea96f160fc5839f631f4d7"],["/2021/01/23/chromeflag/index.html","54b282398af87a3fd1542a66c7fc1f9d"],["/2021/01/23/qttabbar/index.html","8a0a4481b7a9c24796c5914a5cff6891"],["/2021/01/24/githubspeedup/index.html","b50c6d8dc286aaf03598a130d8dfcc4c"],["/2021/01/24/jsdelivr/index.html","53ac6d784fdaa507d455dd3c1d99da6e"],["/2021/01/25/note/index.html","b476363333806f6d0bd32a918f8fc38f"],["/2021/01/25/soul/index.html","11ca7f47b58d8882d0359238978b9f64"],["/2021/01/26/herokuxray/index.html","b2c6b03dbf1851e86a60019ecac031db"],["/2021/01/27/proxypool/index.html","fcfedf8bde5a15fa78d4b0976c00f7c0"],["/2021/01/27/tracker/index.html","6e3634a07391368da69d3a4df176cdda"],["/2021/01/30/pandownphp/index.html","c46510ca507087ab746efb0f8499647a"],["/2021/01/31/newgroup/index.html","60832d1dc813fe76914742099c5120eb"],["/2021/02/01/clashlanguage/index.html","906f23f2e7be780a94b7109893d3d73e"],["/2021/02/01/encrypt/index.html","bf917867250254fb131d3da21977ecf2"],["/2021/02/01/footermotion/index.html","48418d2ca033add44744c69f73c88997"],["/2021/02/01/gitter/index.html","32a07445b0f01af559d27d0d894aafa6"],["/2021/02/01/pixivtop50/index.html","d4db9c71bc1fa83c3fd4c84e0c17a46f"],["/2021/02/01/scrollbar/index.html","19ea2089cc641f847c6e29aa74677cf6"],["/2021/02/02/clover/index.html","9c22dde58d4090407f9c3e19529faed9"],["/2021/02/02/maya/index.html","468899144444f832bb47b972c19a6520"],["/2021/02/02/speedcontroller/index.html","b301feb8978dab3ada20516a6f2b7c64"],["/2021/02/02/yesmusicplayer/index.html","668fe78c61e589f2da2715169c0a1dbd"],["/2021/02/03/lenovoonelite/index.html","4b253ef7c98c24f21929d45887b96fa3"],["/2021/02/03/skipads/index.html","3e2d9d56c0a347882a8692bf14c1e308"],["/2021/02/04/picseed/index.html","80a424a5c53697a8e5e476c04e29ceb2"],["/2021/02/04/renren/index.html","0d5a450d07f0c43f20d612c53c4dd2c2"],["/2021/02/04/serverstress/index.html","36b7172f15bd28c3c849a53ec7f665d6"],["/2021/02/04/wikipediazh/index.html","20cdf5557a9d5314c3fabf16455c4803"],["/2021/02/05/googlevoice/index.html","dc7aaa59390e13bb25df99cdad821305"],["/2021/02/06/clashconnection/index.html","d39f03bd5c151e1b38acc78b13aca0a3"],["/2021/02/06/gvtransfer/index.html","514f6fbe4b78eeedfbc43aff4a1a53bd"],["/2021/02/06/todesk/index.html","40a8a6901cba9e0133da8a4bb4daf613"],["/2021/02/06/vpnblacklist/index.html","0884ebdac9488fe0652538bfe34d71d3"],["/2021/02/07/mklink/index.html","4268f9f198fbcaf6856237c8b3b437fb"],["/2021/02/07/speedtest/index.html","83d7dc9d4c3e1b68c7f6c5e92d45a9f9"],["/2021/02/07/translate/index.html","283a6a443135691be0d47509ecf0fc73"],["/2021/02/08/ewomail/index.html","010ca47df22fdf6b32bc4cf3b531fc0a"],["/2021/02/10/officee5/index.html","aaf52d9e6ad4d224b92d0f9756eebe17"],["/2021/02/10/raidrive/index.html","a2b62e643d9653896d01c77468654878"],["/2021/02/13/e5sub/index.html","e2508cb72765ba38f630b349903b4057"],["/2021/02/14/screen/index.html","3f90affbbb911ba0118dbc37d7302d00"],["/2021/02/15/clashtun/index.html","47d513f25b54600ebbd8c93a04e72d6d"],["/2021/02/15/messageboom/index.html","1733f99303f026ac8c86fe118fb02cc2"],["/2021/02/15/oneindex/index.html","ab25b9d1dc8162f0d6d6f67fc3c5a69e"],["/2021/02/16/govsites/index.html","c0cb26f5963c7ddec76b52ce16b0b68e"],["/2021/02/17/hexototypecho/index.html","cf6116cba7d831536bc4281e1448914d"],["/2021/02/19/fiddler/index.html","62d08dad7afe7dcc18d807447baa5289"],["/2021/02/22/potplayerset/index.html","cd5230eb1e74015703ef4f436f2a67f5"],["/2021/02/22/studyresource/index.html","11ae61c19dadf67ece990a3a5674315f"],["/2021/02/22/telegram/index.html","caa65b9cbd06843f7e1e88b87d3a4d46"],["/2021/02/22/videos/index.html","56f024c2654f4cd9d21d9b1876952296"],["/2021/02/24/mtproxy/index.html","0d82cbd95e3663358243b24a731283b2"],["/2021/03/10/catchcat/index.html","c8299e01c70bee9dceefb1fe1a6781cf"],["/2021/03/10/neteasemusic/index.html","3d1f40b8d9dc5bca7d305d7cd9902988"],["/2021/03/10/surfboard/index.html","e978b29ee6289b985de380808e5bc06a"],["/2021/03/11/vpnandjc/index.html","8da99427ad4c38c1eb464a1cae3ef9fb"],["/2021/03/12/qrcodes/index.html","d48e70971e253be1c4fe9282ec75385c"],["/2021/03/20/qv2ray/index.html","cfc4db36efe6e0f84d0e54b0765529bd"],["/2021/03/22/freevps/index.html","95eeb8dec96cca09677eae7a05ec1b81"],["/2021/03/24/tgstickers/index.html","a37bdd83e2b49279bb6e2747d052ea2a"],["/2021/03/25/clashx/index.html","ebab2e65d679424db41159a3f621db3e"],["/2021/03/26/bingwallpaper/index.html","bd2723360614f0d250adcf8bc7062e18"],["/2021/04/03/soutu/index.html","53d5516ab6061cc3fe2f86176bdf6000"],["/2021/04/03/tiyunti/index.html","9498ea0e41e3d0c2300de9df95fe4747"],["/2021/04/04/btpanel/index.html","9947ccb5c513d0e8dfd13ac81bf12a66"],["/2021/04/06/atlasos/index.html","e9b7c21a7d83fecc4131f5afd7613155"],["/2021/04/06/cleaner/index.html","297017b35d1ce87abf54f270ea71229c"],["/2021/04/14/asf/index.html","6e2bff292c7416ffacb26869b459e213"],["/2021/04/14/rss/index.html","906f640e3918bc56c200c62df9d3e791"],["/404.html","c547f21627aae2d66f49bb2f7ce9c829"],["/archives/2020/11/index.html","ab502f5b2d382404f5da5ec08a3fec97"],["/archives/2020/12/index.html","cfa74e5c3c6559d8c1e34ebb8d7d1ebc"],["/archives/2020/12/page/2/index.html","1428ebdf37408aa78e2c0141ebf8b98b"],["/archives/2020/12/page/3/index.html","f7e8e1cb653c341d989315ceb3df0d99"],["/archives/2020/index.html","fa5bc102e21f38415a097ae60818fc11"],["/archives/2020/page/2/index.html","4210789694908889617c02fca6b34969"],["/archives/2020/page/3/index.html","e7cf8a845283597d82ec0fb07e0e0676"],["/archives/2021/01/index.html","e54212ad803e5b6e1d7af1c32ce53dab"],["/archives/2021/01/page/2/index.html","3a4189269d73a2ab5713ad220844f9ae"],["/archives/2021/01/page/3/index.html","fdf6651345654f4bff473ff454a76f12"],["/archives/2021/01/page/4/index.html","bcc186465bb980f626361d668862836b"],["/archives/2021/02/index.html","737434e674ffed2f2cdfb4aea2e656f4"],["/archives/2021/02/page/2/index.html","566f795470a3f113b75311488fb50706"],["/archives/2021/02/page/3/index.html","e393c4fe6de084eb85166f9a1db22c5d"],["/archives/2021/03/index.html","4d066ac62545bdf6c5f3d8a664ac94ab"],["/archives/2021/04/index.html","c1e7c35dd702daee83d9d75c27e5752d"],["/archives/2021/index.html","310ecad0e330163ef192dd090ab85cb6"],["/archives/2021/page/2/index.html","e6afb5d6c2b5d0ba910af877041cbe1e"],["/archives/2021/page/3/index.html","d0ce10bae75db150ff66bbd13134b60d"],["/archives/2021/page/4/index.html","f712b72391959c7d016da12b4d773a5f"],["/archives/2021/page/5/index.html","d35d8b71201714e99ea08d1f998f9c4c"],["/archives/2021/page/6/index.html","c8112501e56bff999d8ab8d12458429b"],["/archives/2021/page/7/index.html","4cbfe6a6f8e10ed560f884dc29edb0df"],["/archives/2021/page/8/index.html","e0672ba58c350b6b77cdf0b81a5accf5"],["/archives/index.html","73822530af20be5663fddb585bae9743"],["/archives/page/10/index.html","ebbef24fe122a5c5851d242042afbb81"],["/archives/page/11/index.html","303b92fbcead3f176416f974b3f6c679"],["/archives/page/2/index.html","5b31b11ea15c97f903e0751065bc354f"],["/archives/page/3/index.html","3c4409b751a4387267c4584fbeefd832"],["/archives/page/4/index.html","10fa9dca68d7354ec235ebb7d755398d"],["/archives/page/5/index.html","32617b8be77f3e09618593a3f9c0db28"],["/archives/page/6/index.html","46ddbd4d1905c8805b4715ed5008160a"],["/archives/page/7/index.html","fcf4b34ca6a958dc9c0da0531a1ff7a9"],["/archives/page/8/index.html","ee343f99c5a380597d368119d5ace11d"],["/archives/page/9/index.html","8c27982f74a210ed39afce48df025133"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/atom.xml","625ccd12606c4caf47448345448e0ef9"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","08c641adc45ddf2eb928dea3e8d0852e"],["/categories/index.html","4b13be0d614ddf04f22a883f7ba5495e"],["/categories/下载/index.html","dbd5bf5f582fbfbafd7cb5bdea104175"],["/categories/安全/index.html","2edfa3b57a66032f6687d7fa3a907c48"],["/categories/建站/index.html","af852d8e07326fc6eb00932312ee3205"],["/categories/机场测评/index.html","5a10bf51b0a166158d3127747193ea96"],["/categories/杂/index.html","e570cfb6598d605fbbe0e39f3a56d06a"],["/categories/杂/page/2/index.html","83ec247314c685c296ec5542c4d8912c"],["/categories/测评/index.html","762ceaf5cebc02332bf827b251e2cfb5"],["/categories/科学上网/index.html","5259733d135b354e434dc3c10159b761"],["/categories/科学上网/page/2/index.html","758d3347cf01bf364bc577d285788395"],["/categories/编程/index.html","78725c141035c5585188064d2d556486"],["/categories/网站/index.html","d4ebbec84925b8e8472650e1fd3824c6"],["/categories/网站/page/2/index.html","d7479745f5412510e5a0491af70f7743"],["/categories/软件/index.html","a5f6573f7a698e4bed522585ad929403"],["/categories/软件/page/2/index.html","059ba0d437142c34c3b0c4bd017d4328"],["/categories/软件/page/3/index.html","a67ce2b5e77aaee40e82e5ce98b79ba9"],["/categories/软件/page/4/index.html","61917111ef13e73409bd2eb54f5c86c3"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","e364556e4c947913955460c9b776de9a"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","a8578f071cc0a3d07e3baeedb5bc57bf"],["/ios/index.html","ab9589e7d682e28b363fd4978a5f4a2b"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","7490546feb046fa7964948a1c7ad0711"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","a3552b0d25e9079900e1f6f873a823c6"],["/page/11/index.html","643c3c4040651867cbc9ac6993998dcf"],["/page/2/index.html","d25c9490644a69ee71c1d83a728ddb22"],["/page/3/index.html","ad4d170831f7035fa3b64c9df7d8d19d"],["/page/4/index.html","f9a0342234ac4718056153d75529ecd6"],["/page/5/index.html","71b482349ff8ed65c92a9fd2c3b83917"],["/page/6/index.html","dcfb0b0cef1322310223533f074f8231"],["/page/7/index.html","e9edbb5dd28dc3d04dbee2d255bc22b2"],["/page/8/index.html","25ebc3ce2b98d5f01771cc90b40c4eb4"],["/page/9/index.html","6cf3ec3d808e0c9cd3421a75df188a77"],["/payment/index.html","748e2f0116d39bbe349fab79a521f341"],["/privacy-policy/index.html","4003cb1ba4b2cef9fdd9f52262654f67"],["/search.xml","29f44b833a867f00c6411acdbdcb3d08"],["/sitemap.xml","10065c95fed02317a15c71e4976d060e"],["/sw-register.js","a36e5844eee0f1597944950a758c0bcc"],["/tags/5t/index.html","2f84fd5cbcfeb16a8b079a14d175c61f"],["/tags/Bing/index.html","910fea324593d59857fdcb4348a5216e"],["/tags/Clash/index.html","651c75f59bee81434f9f7e16382d9603"],["/tags/Clover/index.html","3eb266d3f2ffa90d2cb436e58bb93a72"],["/tags/E5/index.html","67e6c9cb16f6442edab9be5c78d96ab4"],["/tags/FTP/index.html","25cc77643db151c9424172f205df1dde"],["/tags/GitHub/index.html","167756d265c1c46b3169aa0a22944dcf"],["/tags/Heroku/index.html","9f84b4a67595ec1c356c28d8997ea16b"],["/tags/Hexo/index.html","ff3e05fc282acca630f8325f58a9d0e8"],["/tags/Lenovo/index.html","857010ccc69af49b0c46945014c29880"],["/tags/Oneindex/index.html","e9e4d03f81024196ed36b496deec707b"],["/tags/QQ/index.html","318a116be13e042bfa2f4dfba4948486"],["/tags/QTTabbar/index.html","c7289c38263199f74bd2452cb3e43c9c"],["/tags/RSS/index.html","50751ce8b899bd5d0bbe7f52fc1e30c1"],["/tags/RX文件管理器/index.html","7b85a09a5c1a7dbe7cfb1a80421649a0"],["/tags/Todesk/index.html","dbfa1686a812252b5b639ce42ff0d480"],["/tags/Vercel/index.html","0630a6f661b1302cb65615dc0911ab7c"],["/tags/ads/index.html","04b1d2f656001d9c04185f0c962ef26c"],["/tags/api/index.html","a2a429644fd743254f638314f94a0eba"],["/tags/app/index.html","54e46965c6ab91aeb55af7272ca9cb8f"],["/tags/asf/index.html","d2522212d3edcd1be796b369183c34f7"],["/tags/atlas-os/index.html","cb94928ef47bf4a112e72aa0a54b2520"],["/tags/blacklist/index.html","023a2533088dbef9624a7bcc979560fc"],["/tags/butterfly/index.html","e265dd977b5698abbf8e5d6fae125ed0"],["/tags/chrome/index.html","1e3819f280c815dfa044c589e19541fd"],["/tags/clashx/index.html","273d15f2d1ebeacc7b56661d21c216a4"],["/tags/cloudflare/index.html","850983cec90f48be109111b86450205f"],["/tags/cmd/index.html","f7a460d595b23214fee23f6e29388f94"],["/tags/c盘/index.html","20c6e87202390125fafff47cb631a0a3"],["/tags/email/index.html","c546b26cb195796482eadd64c997a68f"],["/tags/ewomail/index.html","281aa09d05bebc3d6120e9725523b0fc"],["/tags/fiddler/index.html","741c8acf54a02ad7f8a038eb737f4e35"],["/tags/flags/index.html","c2add2831262404b7d6a9a7df2626be3"],["/tags/footer，页脚/index.html","15a9b5b05c7f9e1566386d2496459c73"],["/tags/galgame/index.html","8519bbd4a03da3571e58e129fe21fa4f"],["/tags/git/index.html","c52c0ff29ccafb6a8f605fe2e792a994"],["/tags/gitcalendar/index.html","7290812e65257092490556341cde9198"],["/tags/google-voice/index.html","820b752a48d00f9e095d476ec901e0e9"],["/tags/gv/index.html","43e203129524f861a7c82c5e6f279ec8"],["/tags/html/index.html","e6469032dbd4805009dc096e059479fa"],["/tags/index-1.html","4aa1218c268879ce5f25ee097705474a"],["/tags/index.html","8e24366f709e21ec5aca3cb4879eef2f"],["/tags/js/index.html","bf7a03eb4cd8d743adc76e13cead88f1"],["/tags/jsdelivr/index.html","c5162cd8b5c4fb397185be5b6277d5ce"],["/tags/linux/index.html","4a2b0d6dee435cf44190e11ea7bdb91b"],["/tags/macos/index.html","e250f7f2b6ea318986fd995d8f3d56ea"],["/tags/madVR/index.html","bc5f42b5ae938d3de84ed701144f4c12"],["/tags/markdown/index.html","5bacadb4ec69d3edcc335b9ce358301f"],["/tags/maya/index.html","7b977630d389042b7ecbf6dab7ee99fc"],["/tags/mklink/index.html","34ee87027185495b87e6f6f6de33d3c2"],["/tags/office-e5/index.html","3b2ca8f268779040bc75ff54c0ae4cf3"],["/tags/onedrive/index.html","7b51c6ac1e0907378d0cc2f2025584ff"],["/tags/picGO/index.html","874c7abdc0b086c888bc390f908c087e"],["/tags/pixiv/index.html","691f5390dc01517f9fa653c0d1f7f580"],["/tags/potplayer/index.html","a83bc611bcccaebdbfaab3767c206304"],["/tags/proxypool/index.html","1a8044bb748a38509e716bf9546a56e2"],["/tags/qbitorrent/index.html","4210008cf1acbf3784921e2faa4dc43a"],["/tags/raidrive/index.html","e2d6eacca09f8ac324c3cf84c457bc11"],["/tags/screen/index.html","bebf515e4caa1c6a0f52b3bdca45ca94"],["/tags/speedtest/index.html","841c641ae1906015b4da47a6329a36c0"],["/tags/ss/index.html","77c92ac10042e8e394654ec03e3f493c"],["/tags/ssr/index.html","1f1c21aa897a4c601884cee6d9878dd2"],["/tags/steam/index.html","d9eb655e0ded6132768ccb54f376461d"],["/tags/stickers/index.html","716876b10222f1f2da8e3af377201b44"],["/tags/surfboard/index.html","5d75a64712dd0f7a53a6c1494ccb207d"],["/tags/tap/index.html","55e74b99ccf76addcc682289e0628a6d"],["/tags/telegram/index.html","b8794dd63b68c5cdd275f44281adee8b"],["/tags/telegram代理/index.html","a89d1fd90c3fba204e0d48ffc12c26c8"],["/tags/tg/index.html","2669f7c45b336c53a017a1c16849385b"],["/tags/tg代理/index.html","242075ea4e64e561446885947b12ed8c"],["/tags/top50/index.html","c11f54d56eef41974acb813ff3b41311"],["/tags/tracker/index.html","ef15c28de091cc2d194a5c5de717b161"],["/tags/translate/index.html","9d9e848cbe62ebc45c382e9a912377fe"],["/tags/translater/index.html","8fdf903dbe6ea251be7b88cf6c3f4a02"],["/tags/tun/index.html","ea8f4dbb171c2b37a30d27c1a9794d2a"],["/tags/typecho/index.html","6179e053eb2a6a23bf801a1c6a9d9f2c"],["/tags/v2ray/index.html","59578e652a8b8d779bde15f2b95a0252"],["/tags/vpn/index.html","c45ae861a03486d59d9bd0a58e039065"],["/tags/vps/index.html","e94f28effde168287596d68d7475e21b"],["/tags/wallpaper/index.html","1cc7fe8dfbc3a3ace6225e37e5a9654f"],["/tags/windows/index.html","e3f83de1f2f7c537ba9d997ca40e069a"],["/tags/windows端/index.html","0898dcc3c1de3969215bc32a1618a0a0"],["/tags/xray/index.html","55acc970e5fe0c8269e4a4a369c27d62"],["/tags/yandex/index.html","1dde978db1b0ce733688ad0f541cb83d"],["/tags/下载/index.html","b6b2a7ff35a6d0487f93d5b253d0710d"],["/tags/不限速/index.html","cf415079b88088f6e555ce3125f84547"],["/tags/个人网盘/index.html","1fa2d6805c991a4c2b90da2c50b2fd48"],["/tags/主题/index.html","a207eb714f1b7e2f4090b2bd8a216b77"],["/tags/二维码/index.html","586d30e68a0e071c16b3d2a03be2a60d"],["/tags/云便签/index.html","3e6f093411267f3afcf3e33fcb9cd4b9"],["/tags/云盘/index.html","398071a86ed6b185cd41c591a341f12b"],["/tags/人人/index.html","39d053506635786ce60dd8a62657749b"],["/tags/代理/index.html","5853dd30da2e5e017fe13303188c494f"],["/tags/代码/index.html","8f458463c70f5c9dfbaf3017199958bf"],["/tags/优选IP/index.html","185296b42a85ae9b076a7e2966b7d5ce"],["/tags/便签/index.html","028210074cde5af14519a9b442bffbc4"],["/tags/保号/index.html","65f8c6c47bdbe5047de04000905a4cc6"],["/tags/免费/index.html","41f8a253bcf4e5bf047f6c441de8ddc8"],["/tags/免费节点/index.html","09a9ac188949248310df93da95d821ab"],["/tags/冷门节点/index.html","080e4c7f5fba74be10627195d542a019"],["/tags/删库塔/index.html","d59bcb36dcbb1e199787c8e659cf28c8"],["/tags/加密/index.html","010273b2e7337f2fb597315192fa2712"],["/tags/动画/index.html","fbc395d08d7d9ef280fc3025746da37d"],["/tags/博客/index.html","860b5f9a9db39b9cdef46599e145ebe9"],["/tags/卸载/index.html","0c3483cce6b67aa91ec9b53610085d15"],["/tags/历史记录/index.html","a5097063a630dc48581c5e5143228b8f"],["/tags/压力/index.html","978fe55f6b225c6d7cdb21f925c9c765"],["/tags/压缩包/index.html","c66182c16b80942cf2619e9bd1e47f0e"],["/tags/反代/index.html","1e4800708ad534a1ae3cf599fee3490f"],["/tags/可视化/index.html","221456fca0ba53a5baf4cb783cc642b2"],["/tags/命令/index.html","c0fad402e58704b536a4ea83fb8ec57d"],["/tags/国家/index.html","8e2a188bbe673d63b4f8d710b7fc3a0f"],["/tags/图床/index.html","eb6f53223d5a97421e45219b05f5dbe0"],["/tags/图片/index.html","3f8dd8b6ec5939fa8e26cc5ee4c1bd76"],["/tags/域名/index.html","4c544e7a602f97db9fedeb0b157db4fc"],["/tags/壁纸/index.html","5f277b8fb7896a244c0ca5a666cf9bdd"],["/tags/多标签/index.html","fb5f125fc0c7ac3dbef627230d9ec30e"],["/tags/奈飞/index.html","26a1ef6da7094a2f7085b71a69e63827"],["/tags/存储/index.html","89ad4f426f4d81a8295873e2c7b98e11"],["/tags/学习/index.html","5d151a01c62c41e8a91edb7479f0402d"],["/tags/安全/index.html","6433eb1ff254a46528c2bf6ed4e5ebbf"],["/tags/安卓/index.html","504db2ad9efd3c4d6ec5c5f8f974f50f"],["/tags/宝塔/index.html","509706eda7c510646e9ac08e2a3b4014"],["/tags/小游戏/index.html","4631eb20c7278676ce356a8fcca9cdb3"],["/tags/广告/index.html","b15aed48b4c35e9b237a0be83e5b1bb3"],["/tags/建站/index.html","f2c8e3c4dfea5705c2e92065a449b369"],["/tags/影视/index.html","f8c1d6b935fd5800e57cd44155d1818a"],["/tags/微信/index.html","5c79fbc941991cbe81341a464109485e"],["/tags/快速启动/index.html","8e29bb6f5705dbe1540d3aa113343c2a"],["/tags/手机/index.html","cb9310f6d58b2bcdee6c87e5037f4f17"],["/tags/托管/index.html","8d5ac5e0dac2ee05aeb12cb2d984f781"],["/tags/抓包/index.html","f6ef91263967557d25e5bfa1c70274b9"],["/tags/抓取/index.html","66dfbf4390502c80c70ce586ba555a88"],["/tags/投屏/index.html","4fd04fb9a62c38e0390d1250cfdc62a5"],["/tags/拓展功能/index.html","6ac9967c46bed4b0f49e7bb59e47b732"],["/tags/挂卡/index.html","71f5cd77d98a75b40303fd5d4a7994d9"],["/tags/挂载/index.html","1c8d1674b89edd8fcd30e1fa1b3db9a9"],["/tags/指纹/index.html","43df7f86009183201be2cf900a74a714"],["/tags/接口/index.html","4ef744386e8cf6477569eb243694f52d"],["/tags/提取图片/index.html","61623034f0ce6d53eee46d479b63cd82"],["/tags/插件/index.html","72512c511e8b6e4b9cea44a2c69729b5"],["/tags/搜图/index.html","ac08bc1443a3a2b7e64f3c2f73bb8fe4"],["/tags/搭建/index.html","8723311970525cf29fe6740e35c36187"],["/tags/撤回/index.html","549cd7c5994337572bd2c5b2a82bc804"],["/tags/播放器/index.html","a1b09b6db6f9ff2223d6fcca17f52ce9"],["/tags/支付宝/index.html","0c866600f6cd7bc67402b8b8f233f1c3"],["/tags/政府网站/index.html","008047615a736acdd3add03867bf7630"],["/tags/效率/index.html","ee558c34ed6349833d131b6d44ede458"],["/tags/日历/index.html","34c1d843e67dd5663c4f7cc6ed6dba2c"],["/tags/服务器/index.html","219694109bedd1ea4f40bd1ce088e9a1"],["/tags/机场/index.html","d6d9da09fed3b466f82d660467cb3234"],["/tags/查重/index.html","b45ccc3239e81f371101b65df1298011"],["/tags/桌面/index.html","4837f4f0dcd27b3e259c1ead8df60b82"],["/tags/梯子/index.html","826e750af2b41aefd4fec2e0877fa869"],["/tags/检测工具/index.html","3d4efab1e06990cc96490685d01d3895"],["/tags/汉化/index.html","33a57bbf29debdb6ae891d809bcfb710"],["/tags/测压/index.html","42ddb08517943f471c934213ff15db21"],["/tags/测评/index.html","cd47b1a9458dffbd66a5e1eb47788f9e"],["/tags/测速/index.html","e175fab86076e1bc28fc3567cee2ef6b"],["/tags/浏览器/index.html","72162e75a3f5dbe4c2c46ea2f91da7ab"],["/tags/清理/index.html","c1a98145731bfa5b92d7db0683b09677"],["/tags/滚动条/index.html","fa853c21128b8679bec1afe2dc5ead3e"],["/tags/灰色歌曲/index.html","e502628c3cfd8430b49ab8478e246af8"],["/tags/电影/index.html","9b29b262dba60072a11e80fc99c3bfcc"],["/tags/电脑/index.html","206101ba19d9e6a19484f3f3c8710f0f"],["/tags/电视剧/index.html","e35a7163d74bf0eed3477b0ab047b3a0"],["/tags/白嫖/index.html","6acaf2671617735d827f2b45ad4833a1"],["/tags/百度/index.html","9fe7ab6736376efbb1b27f1c1866d07a"],["/tags/百度云盘/index.html","670af01c8e261b2a35df8fe2ea7fdfa9"],["/tags/百科/index.html","2dcaefc738fbeb52927afb2e528feac6"],["/tags/短信/index.html","bdadf29c8850f87410ffeffd500fde82"],["/tags/硬件/index.html","d5b0a9b8a1ac18111bb5b5aa7e875fcf"],["/tags/科学上网/index.html","96227e3cf0d2b0623837d68e0c306e86"],["/tags/空间/index.html","d0709718b164b5a3ab4b9840ff7663b5"],["/tags/笔记/index.html","3e6ec318b5ab0dbca3ae7f7019da9e34"],["/tags/简洁/index.html","0a335da5398aa358ba85bb56e2f78bfd"],["/tags/简约/index.html","7038a4b6cd0172b01b12b2b89bc7045d"],["/tags/维基/index.html","a6bdaf0d39519f756d3e0014baccbd84"],["/tags/网易云/index.html","60f769321eb67618e80b58d3136eb005"],["/tags/网盘/index.html","6b8b6f25e9151a505668a889f93362bf"],["/tags/网站/index.html","056ca20db37993994317804dea5d9a33"],["/tags/网络/index.html","28ba610a979e484dd00574f3f2910648"],["/tags/美化/index.html","289532c1892bfa00b34a8e12645323aa"],["/tags/翻墙/index.html","e2249c5bee7f582f07757003169e2f92"],["/tags/翻译/index.html","6027b8498e114aeb585d4ce0cbb4d249"],["/tags/翻译器/index.html","b85858976f8f2f8860d8d4aba273c1e6"],["/tags/聊天/index.html","b0749d4ce88152eae5df1fade4e28eb6"],["/tags/聊天室/index.html","2dc315c486b4913509bd2c2254a988f0"],["/tags/联想/index.html","10cde6ce6c6313f2ff03ab166dd1458c"],["/tags/节点/index.html","92f47b53d359a05c5d9b4a5d1d56371c"],["/tags/虚拟手机号/index.html","91c473c885ce5d69e11c6f23e57c628a"],["/tags/补丁/index.html","4bf82ea49112f4955c9cbb02c3852f89"],["/tags/表情包/index.html","c1fa1ba83c1b7cf2c081ca7f16026f4d"],["/tags/视频/index.html","1f0137ccdaa05072c8a7313681a4a803"],["/tags/解析/index.html","d275e5570e26a4257f575c40cdbf02a1"],["/tags/订阅链接/index.html","41b2d1497db6be68a7a1102a964c5455"],["/tags/记录/index.html","f1e417e3ba0d64cfcd69294efa8b3010"],["/tags/识图/index.html","fb4650e4c4493e822a746d81514399e1"],["/tags/语言/index.html","8d48ecf837a24459421e9dd3b0fb2cec"],["/tags/资源/index.html","dfe381f847c9ffc07365b1cc8f705890"],["/tags/资源管理器/index.html","aabc1d84d9c22e0f704d9cefd931ff59"],["/tags/转移/index.html","86918fa329774c362d60a942e21149b1"],["/tags/软件/index.html","58b2537e628a6b5624b6f418abaa785e"],["/tags/软件/page/2/index.html","07500ebc1528f81c61c6b2b96cabe6fc"],["/tags/轰炸/index.html","149563161dd3bc939123db0a2066958a"],["/tags/迁移/index.html","f45830a9a335420148e378c8ac282ef8"],["/tags/远程控制/index.html","59b07c7b7ae7d95656a3f9dc8539a87a"],["/tags/连接/index.html","70436a8e9afbd4b52106bc156cce25ec"],["/tags/追踪/index.html","be9a6a88a4c42aa4ada02140acc0eda1"],["/tags/速度/index.html","2380a2401f3de095408f69a6026bcb1e"],["/tags/邮箱/index.html","65e9f29806bbf4fb398a8fb72c1be665"],["/tags/酷炫/index.html","5edc9a2c85c6e77d71459af204d748c4"],["/tags/钓鱼/index.html","6148289c9d504b3d9a6a1234915c9e8d"],["/tags/镜像/index.html","cd86846a06840078f38fd5665f63bcc1"],["/tags/阅读器/index.html","52ef862b6de6c50d36834ac3e86ccc62"],["/tags/随机/index.html","0cfcd5724651c37fc79f91b3c14b3c03"],["/tags/隐藏/index.html","cf671d107b3cca2e99b5c2e0c1d93f43"],["/tags/面板/index.html","9786a3face5e6093a7166309bfa1656f"],["/tags/音乐/index.html","e24e0a61eaacb9a821571de3abc30711"],["/tags/高颜值/index.html","2fb8183eb675af44c730bb31b1df0f36"],["/tags/魔改/index.html","457cebce3cc8640350ad093207cb1cd1"],["/tags/黑名单/index.html","4f9f24730d276978202a51aba50f3dc9"],["/urls/index.html","8c5c6b3f4a6b35bce017ddf34c493a4e"],["/vps/index.html","72db6faf7d547e6aba12769855fda02b"],["/支持/index.html","57110a0c08ddc2f1ec18ffe072578541"]];
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
