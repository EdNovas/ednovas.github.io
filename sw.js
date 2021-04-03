/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","e0ce3e5212bdc47435a9a2223e559bdf"],["/2020/11/29/clash-windows/index.html","a12b2294b5ff1f2a1eb1129f38f18575"],["/2020/11/30/websites2/index.html","7cd2fcbc9e58370f9d816b52d8a8f3f8"],["/2020/12/04/iphone4s/index.html","c68e861314a17f07ace1ee2f405c5415"],["/2020/12/04/onenote/index.html","7f67d11e1cf411d42a05b311515548d1"],["/2020/12/04/wesites1/index.html","a789a66b0d9f8f05f66e84e7084b7e14"],["/2020/12/06/nokia808/index.html","114cdcb55a8c26210c10523a7adbb369"],["/2020/12/07/ipad1/index.html","ce923b220dc519d7601e7ad5cd601e9a"],["/2020/12/18/freesubscribes/index.html","baf77514efb699e7eaad869502460c06"],["/2020/12/19/musics/index.html","9fabb5fdee089a40b4d08f32b813b1a2"],["/2020/12/19/shadowrocket/index.html","170d3147a4be37bc04aad5cb0782d2f2"],["/2020/12/19/v2ray-windows/index.html","7cc1ff0e9b797efd829562770e26a94c"],["/2020/12/19/v2rayng/index.html","eee0b1be9ba621123cc53b7ef8dd6626"],["/2020/12/20/beoplay/index.html","f3edcd038d10751e235756a72ff40301"],["/2020/12/20/订阅链接转换/index.html","928550d867743232ff12ca4e134eca7e"],["/2020/12/21/chrome浏览器下载提速/index.html","58d1f183dfe741a72db78a69fd786ce4"],["/2020/12/21/免费128线程并发下载xdown/index.html","bf4a3b1864be82d5e460bf8ff0df6861"],["/2020/12/21/免费32线程下载软件ndm/index.html","7c27fad07641f11f706cf58597e03b3e"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","4140f802e1edbe7e44a82f861b407e3d"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","da1e186c686d0b04299524cdcafdacc5"],["/2020/12/21/广告怎么知道我在想什么/index.html","0b1171ae7382e91d7f504d35f0132747"],["/2020/12/21/无名·引子（小说试写）/index.html","2140ab74c653735c2d2f61d50f5edbc1"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","6e5eee258769e5f03815c0d7ff0545e5"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","1f50303ad78fdc40e6b652719db565bb"],["/2020/12/21/高速轻量下载器aria2/index.html","fe2e4f90fe0da18f69acdaa424a85522"],["/2020/12/22/2020-cee-roo/index.html","f998dc1223eecd2052e5e25cb7c5e4b0"],["/2020/12/22/firefox插件、github、steam富强/index.html","0068d375904b7251cfb85162cadc9518"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","16ddf4126bf0d4c8805c727fbfc96c55"],["/2020/12/26/python-day-1/index.html","9bd2b36ea9f6c983da4b6273e5b069ad"],["/2020/12/26/python-day-2/index.html","d125d39fdae9b68207ca191147cfc852"],["/2020/12/26/度盘不限速下载方式一赏/index.html","a100561cf12be31b4ef0c6256752f023"],["/2020/12/26/添加开机自启软件/index.html","dd1659cb08624658369819666e039f67"],["/2020/12/26/电脑端截图方式一赏/index.html","f110a49b7cc82cd09df347a2a86d3fdf"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","1c40c277fa93596ba80a63fddd3b8148"],["/2020/12/27/最安全的浏览器tor/index.html","4657ad777b63da31fb05079f5f07f655"],["/2020/12/27/网易云刷等级和听歌数量/index.html","906c70578215fd9b207007003d0e58eb"],["/2020/12/28/freenom申请免费域名/index.html","3590be28308d597d3e2864fd382ce44e"],["/2020/12/31/机场/index.html","97bd8de868aeac4f86190b581da70e96"],["/2021/01/01/M1/index.html","fa5d61bf35de759839ef9d290240574c"],["/2021/01/01/compress/index.html","d6faae3c81d05acaeff78be6a2fe90ac"],["/2021/01/01/infinityfree/index.html","f1666f6b5034c8b618dccc61a4705bd8"],["/2021/01/01/硬核翻墙/index.html","2136bdc9dacc7bcdbba2994ce692ee0b"],["/2021/01/02/qq/index.html","7a51652218d748746963805a2d84938d"],["/2021/01/03/netch/index.html","d22d287e7dfbccec8cf9678b23aab92a"],["/2021/01/03/waifu2x/index.html","a0776070e79be3dc2afef5d1a40aafbe"],["/2021/01/04/ads/index.html","66efa56b6ed98b2a778ae837fec61fb0"],["/2021/01/04/games/index.html","3c128dc7ce3ad979f6ff26bf80505c2c"],["/2021/01/04/heroku/index.html","176b07de10af197cbe315a5b02998b24"],["/2021/01/06/movies/index.html","c8a5ffbf31a2776198643a23fabf11b1"],["/2021/01/07/google2020/index.html","3054562383435b17dfa5ed5ef5060150"],["/2021/01/07/lucky/index.html","37eb2f9ae32c42c3b9c95c37a02700b2"],["/2021/01/07/spotify/index.html","0ddc044b1fe5b2651ab850fe8be9b5bd"],["/2021/01/07/thunder/index.html","9d48c025e5adba4150def312280cf654"],["/2021/01/08/adguardhome/index.html","a960f4f0fe05f8f9f8dd8ae5f52533f1"],["/2021/01/10/IBM/index.html","5248ff5b6c27d3935bbcacbbbabadefa"],["/2021/01/10/potplayer/index.html","65686d8b59219c799339dd5e1dbe4535"],["/2021/01/10/sakuraanime/index.html","b4eb87bcc759e3dac9aaca627fa9f9f5"],["/2021/01/10/美剧星球/index.html","99e1f704480555591792088417fc94ee"],["/2021/01/12/telegraph/index.html","de7f93430aa94d646375a4084f9c0b8a"],["/2021/01/14/comics/index.html","b266442233d6bf82232c217b4f14765c"],["/2021/01/14/ftp/index.html","36de062c290aa29cab749edaaf2848c5"],["/2021/01/14/oraclecloud/index.html","d9129a00cc4336198f7c5410b1f605b0"],["/2021/01/14/porkbun/index.html","f2e0c75996f7aabc260f148ae6715aa4"],["/2021/01/14/powertoys/index.html","dfd00ba3d9e41a9075ffab133108250c"],["/2021/01/14/taptap/index.html","41e24817459006bba7911871e6355241"],["/2021/01/14/ubuntuvsftp/index.html","52917412834ec9e7877152898c873400"],["/2021/01/14/小说/index.html","78171e7c73df0aa14ec6a6fad77267f7"],["/2021/01/15/freeproxies/index.html","a113ba2c801c9672ab6cbc12974c8a8a"],["/2021/01/15/incaseformat/index.html","b6681e38567aa6f23d52e933e763fb2b"],["/2021/01/16/euserv/index.html","527a96aecffd0955a50987b6753d2d0e"],["/2021/01/16/winxray/index.html","8385487a53225b4e8ad27af87211cfe7"],["/2021/01/18/qqreadhistory/index.html","e4c2cf7b5b32fbde8aca4c33d3ce15e4"],["/2021/01/18/qqrevoke/index.html","d5091e304a0e6f21d95c3aba4719d4d4"],["/2021/01/19/freevpn/index.html","3f20a55af657b6b3a879256681fcdfaa"],["/2021/01/20/browsertrack/index.html","11bd66d3fa33739f660fbc829fef06a2"],["/2021/01/20/v2ui/index.html","41b347f7f49d3eb335cdcc8aa801a129"],["/2021/01/21/failedtoconnect/index.html","620ce0ab5340178d2d0764cd266f5f09"],["/2021/01/21/gitcalendar/index.html","af730e9344b107da9fe5d98dcaaf9713"],["/2021/01/21/markdownformat/index.html","673c4a6da5e8ab338c2911acf435def5"],["/2021/01/21/markdowntable/index.html","74c4d6f02a040d5a6d6969930c3a8388"],["/2021/01/21/vercel/index.html","b3580c8a0ef2821b4fee5016933fb00a"],["/2021/01/22/hardware/index.html","2e32d5b0ace96737e7b415b5230b61d3"],["/2021/01/22/muviz/index.html","45a2ccaa2f65ed279a3c6d2d98b127e0"],["/2021/01/22/randomapi/index.html","2901cbf5bbf8bda5ea39533ca1f957a3"],["/2021/01/22/searchimages/index.html","d7bfaca7cff402624c56d4d2fbb5daed"],["/2021/01/23/RX文件管理器/index.html","87a0786de58aeb0e33fa041c50c64258"],["/2021/01/23/chromeflag/index.html","0b6fcb5fb2ce820c30558cff89945a59"],["/2021/01/23/qttabbar/index.html","f865f588fd394a33ee840e58a97044fc"],["/2021/01/24/githubspeedup/index.html","0de3468781c814b3821673666b23dabc"],["/2021/01/24/jsdelivr/index.html","8ce5f6b041e48c9f1253a55378223b59"],["/2021/01/25/note/index.html","669b779ff0a150cde9159315fe904fd4"],["/2021/01/25/soul/index.html","3930e4f3840551e3810d25aba5689e31"],["/2021/01/26/herokuxray/index.html","6ac21951d30fb54f563b1dd71e5a6c93"],["/2021/01/27/proxypool/index.html","04eadca08b50e8ac1e2498e87d66869c"],["/2021/01/27/tracker/index.html","e2c629feec78193067d0834134320092"],["/2021/01/30/pandownphp/index.html","f42c4e306d30c769b7c86e435158e1d9"],["/2021/01/31/newgroup/index.html","e9f2b225da9da52e8da9d910611b31ad"],["/2021/02/01/clashlanguage/index.html","d2a71b5c6f113d99a388424b742ecb4f"],["/2021/02/01/encrypt/index.html","93c27d36ea210873d9db7c950ad022db"],["/2021/02/01/footermotion/index.html","7a8887159ad6e220dc176110e2a0f0fa"],["/2021/02/01/gitter/index.html","51cf222890cb02e5fe1b78cfd91619a9"],["/2021/02/01/pixivtop50/index.html","7e2e41966cd4285f9801ffd613a388fa"],["/2021/02/01/scrollbar/index.html","be8d244ada34aef9ba534d10292935bb"],["/2021/02/02/clover/index.html","76491fbf921b588c85e77e8e25d6d260"],["/2021/02/02/maya/index.html","9480ed0abeaee41fd74015391bb20a49"],["/2021/02/02/speedcontroller/index.html","55d8777b241f10512bb3b10b69c69f36"],["/2021/02/02/yesmusicplayer/index.html","87cf09252c5f776ba518f14ef62e558a"],["/2021/02/03/lenovoonelite/index.html","86d9baffd29fe98a04b780a594aa53d6"],["/2021/02/03/skipads/index.html","1ec9098b2463ff8aa1bb6853277ddc59"],["/2021/02/04/picseed/index.html","872e0d4721108b478b45f67e2d192401"],["/2021/02/04/renren/index.html","2a1dc84060992ea93edd6b31f15f9ad1"],["/2021/02/04/serverstress/index.html","3e026e66cc63f4311e91c98afe3348d5"],["/2021/02/04/wikipediazh/index.html","582e11908f883bdd95e454577753b396"],["/2021/02/05/googlevoice/index.html","3b77b4a3a9636fa792a42f396b495c94"],["/2021/02/06/clashconnection/index.html","331942aa4355be456252918d2455526f"],["/2021/02/06/gvtransfer/index.html","e5ac17f866c8af34bed68e2515606e12"],["/2021/02/06/todesk/index.html","8a5a4002d559a47f2826538d1c923086"],["/2021/02/06/vpnblacklist/index.html","ead87f5cb97475f19d32095bbe4cb45a"],["/2021/02/07/mklink/index.html","7eb126af33eb2b1e0d111583e3a05a11"],["/2021/02/07/speedtest/index.html","c3537424adca80b6a45ceb71a8a96ffc"],["/2021/02/07/translate/index.html","46d2c4830b60836f55ab55f433be6ccd"],["/2021/02/08/ewomail/index.html","2053dd214a619fe7713b2b57a085827f"],["/2021/02/10/officee5/index.html","df9f3572fca0c3a7f41868500653323b"],["/2021/02/10/raidrive/index.html","80e7209112518267b388cc04445cbc93"],["/2021/02/13/e5sub/index.html","b501d82a2cad6ea001e2c719568e1b5e"],["/2021/02/14/screen/index.html","177496001e8b192d542ae80e356d4470"],["/2021/02/15/clashtun/index.html","515e8a0690f8870ba0cc46910af94f8a"],["/2021/02/15/messageboom/index.html","e40eb05cf7a4354e26e6d51fa79db790"],["/2021/02/15/oneindex/index.html","c514fa6cfad7fbc6f848f264740344b8"],["/2021/02/16/govsites/index.html","2b5df98ee21d6e2f23db5773c162264d"],["/2021/02/17/hexototypecho/index.html","4cc1834d2cfc8aff0f938ea791157ef8"],["/2021/02/19/fiddler/index.html","c5e7bc967d22f92c92e68d29776ae5af"],["/2021/02/22/potplayerset/index.html","1acaf50c342e3f44a343cfe8c4f77862"],["/2021/02/22/studyresource/index.html","978dff735014658bcd47e328cc7d564f"],["/2021/02/22/telegram/index.html","b648255276be3953b319db51e6cf1757"],["/2021/02/22/videos/index.html","1ee86f3859b63f78eba4ffeaf348faac"],["/2021/02/24/mtproxy/index.html","3a6070217358d4bc43675f70a250eac4"],["/2021/03/10/catchcat/index.html","2539be58b846ca527de491459635ea73"],["/2021/03/10/neteasemusic/index.html","06968ed05396ee53d430eedd061342e6"],["/2021/03/10/surfboard/index.html","43be57f0d737d2977d5e96e5c366375e"],["/2021/03/11/vpnandjc/index.html","1ba3ceb4dd9f4e03674d3017371d3c3a"],["/2021/03/12/qrcodes/index.html","91a8b68a6ffa725a8ae9f962e4dcc8ac"],["/2021/03/20/qv2ray/index.html","08ec4f995580ff011cd6421ad253a349"],["/2021/03/22/freevps/index.html","7c02c105735b67c6642c856ae209ef80"],["/2021/03/24/tgstickers/index.html","36c3042f66a02becd82e830a716b7752"],["/2021/03/25/clashx/index.html","4748d1c9029b6cca63b82b9b411a8241"],["/2021/03/26/bingwallpaper/index.html","02691cc668b9141c61b7297691b3fb14"],["/404.html","b25227f78ca8330192cf70a058457da7"],["/archives/2020/11/index.html","cc68038b5d3d061e92dd74d293c9402a"],["/archives/2020/12/index.html","cc1e2582d39a452f335f90c7efd51282"],["/archives/2020/12/page/2/index.html","61dbbbf0d73285c7bf34e78689232bb3"],["/archives/2020/12/page/3/index.html","35d3ce1e15dd28fdf687884b663f1add"],["/archives/2020/index.html","614dbce8cf9941ed085076bf813ac778"],["/archives/2020/page/2/index.html","4fac368a2ca5b8e02e119b2fa4afc06e"],["/archives/2020/page/3/index.html","13bcfcbde1aa0bc5f764df81d649f06a"],["/archives/2021/01/index.html","469f476aeaa6d05709cc9e69c5486db5"],["/archives/2021/01/page/2/index.html","8a9b5340e8e91a41ba8832833f65329d"],["/archives/2021/01/page/3/index.html","eb526d753a9e356dde45c1126f589578"],["/archives/2021/01/page/4/index.html","d01aa6ba2a14efda9dc4c21f4f7d7217"],["/archives/2021/02/index.html","dfbdac9c99337dd40cd4beb9d23987dc"],["/archives/2021/02/page/2/index.html","964b3d9b4868bf7c3db145b686bee258"],["/archives/2021/02/page/3/index.html","9c19e77d8129811b4991f1ac84a48e99"],["/archives/2021/03/index.html","fe1bf4208cdbc13573e85f4b84e618f4"],["/archives/2021/index.html","606a1ab9af81010edfb39e7e5e8af82e"],["/archives/2021/page/2/index.html","8904ab984a9b3b662f27028dd429617a"],["/archives/2021/page/3/index.html","25ed1938e51374eac5603dbeb0b7ed10"],["/archives/2021/page/4/index.html","31ea3ecfcccfce428f2870c24b8d023b"],["/archives/2021/page/5/index.html","1b65f3f8a3e00c1ec61d917045784e9b"],["/archives/2021/page/6/index.html","af65c045f760fc07b2ab0b8df861ac08"],["/archives/2021/page/7/index.html","07f5061b0c5349220b890902d9af924d"],["/archives/2021/page/8/index.html","6794602b6ef7567f6a35f1b12dc6a5df"],["/archives/index.html","3c22e53579ff72ff35f2ac7817ca8692"],["/archives/page/10/index.html","abd1eb84c439b78065859dff92f6885a"],["/archives/page/2/index.html","331429d41c0649642299f66135ceddc7"],["/archives/page/3/index.html","2d4e9fe14575a6ac76b3b45927e8f7f2"],["/archives/page/4/index.html","d20c30f293a514783622ec78c68d8a03"],["/archives/page/5/index.html","72c9eb9a84133377a9693a48427bec3f"],["/archives/page/6/index.html","ad0e6bc2fc3485acbea6230a6c2e7c4c"],["/archives/page/7/index.html","972566342c9dcd61909e04035b4d551b"],["/archives/page/8/index.html","0c4d9f19630834378f4b848521b40043"],["/archives/page/9/index.html","cb2a139951c8c2a545c187b99c40ff36"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","b846e14074c41c237147c486fb3d96d2"],["/categories/index.html","7b91655371ca2744c9e6b7bdc6994000"],["/categories/下载/index.html","770d8d32703ccde270d729972392e886"],["/categories/安全/index.html","935187e8b7b8eb87afd6c21c3f6d1736"],["/categories/建站/index.html","76defbeaf88f8951777ea18c0639b814"],["/categories/杂/index.html","ecfcc276e5ed1b65667c408ef4bf205f"],["/categories/杂/page/2/index.html","e276bdfc0a4249151a49e69248060bfd"],["/categories/测评/index.html","78bcdd86d97866e12acd191221642c88"],["/categories/科学上网/index.html","6e27491b0a97ce6f9fadae5103d28e66"],["/categories/科学上网/page/2/index.html","056755fd0e4af7453e844c86d57e971f"],["/categories/编程/index.html","8e81334120151fae67f3a2147ec958c3"],["/categories/网站/index.html","e6523d14a56d24af98f251e3073a1ec6"],["/categories/网站/page/2/index.html","ab94d63f4a9d85dba3df34c80ea64416"],["/categories/软件/index.html","0991e009342e51983c0dcae267f702e5"],["/categories/软件/page/2/index.html","0c91a75d95a17c60a07a1fcf19cc0e15"],["/categories/软件/page/3/index.html","00a916e46be39d1c9c1a7174d2e14e48"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","fcf92a72744ad058f9604b7ea332a465"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","9f13aaf0851bafdb719fb59a50345dad"],["/ios/index.html","983e0d865b69eff1fd7a1811839d139a"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","e6e95bf95b636799298a4473da014da8"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","407ee3756568b9886b4757f760f025a4"],["/page/2/index.html","072d0a4382cdf72df7c6d2740765080d"],["/page/3/index.html","2d70cc69cb7653fd5abf586896ce149a"],["/page/4/index.html","2de478e10cbadc388daaaaf058de6c4b"],["/page/5/index.html","8c17166b1bb98e0ee71f313a1410582f"],["/page/6/index.html","c551e069dac36062c36c7392dfd41f39"],["/page/7/index.html","526d13a77447d7edf1eb2c59e0e465b9"],["/page/8/index.html","987ccfbaf6bf24df8bfc6f3bd3f2f373"],["/page/9/index.html","a0863cd823bf1b7a60123179619db240"],["/payment/index.html","558e391fba4aa5a3ab896941d0bf90fa"],["/privacy-policy/index.html","13ab77fc29010df66764b70a96b7cb56"],["/rss2.xml","4de761da6c1f6a6b584be22c42643031"],["/search.xml","609478c792436d4b3f34685c9615b64b"],["/sitemap.xml","fb2c246bc6f1d68f9fc04a5a5cfc1ebe"],["/sw-register.js","12fa786cd26f3626639be7b8c85d139a"],["/tags/5t/index.html","96dd76255827a262705a95704ccbd0c2"],["/tags/Bing/index.html","55f4acdd59779300bebbf1fda4d51a75"],["/tags/Clash/index.html","66014444db30d4232ae76324527a832a"],["/tags/Clover/index.html","e30214768a130d4e0130b415eb75a4e1"],["/tags/E5/index.html","0674227aa32997d932eb4b099efb7c57"],["/tags/FTP/index.html","78f497aef6d85d4e56fb454e833c7f18"],["/tags/GitHub/index.html","376bcb73c52d014415cdfc7e14f50e2b"],["/tags/Heroku/index.html","f4375e0ca6dcdbe116cf72f3df33fa41"],["/tags/Hexo/index.html","a23b48e536072aa34377f44594e5700d"],["/tags/Lenovo/index.html","e83a5a5326f26121b09c701aa5161410"],["/tags/Oneindex/index.html","742b8ee2549b970fc491fb6ea5655e01"],["/tags/QQ/index.html","3a4bcf2fb784419d64087a7e6686d8be"],["/tags/QTTabbar/index.html","ceb3bc3722fb1ff0e920351ca859be24"],["/tags/RX文件管理器/index.html","c54d13ced495b1dee87f3e561d4ca317"],["/tags/Todesk/index.html","0f6b3369bf25010b363e89f3da7e4688"],["/tags/Vercel/index.html","1aad2e19924f929d087f20f69ef2cd16"],["/tags/ads/index.html","f30f71796c16c1c109d358b90f2f924d"],["/tags/api/index.html","5535dcfd659228135cdc6a1ffd58b2db"],["/tags/app/index.html","98b9bdc927d347cf34eddddbe319723b"],["/tags/blacklist/index.html","6cd33122389c4a1149aca7acefe4a4f6"],["/tags/butterfly/index.html","ecfab1edd2cfc62e50265a1cd74cec0d"],["/tags/chrome/index.html","ba0ac12ff26595876e2a7585e057113f"],["/tags/clashx/index.html","4a85034bd6affc102a940ad734ee6429"],["/tags/cloudflare/index.html","b7250c0d55aeb9114c1e3be697327ede"],["/tags/cmd/index.html","9c2e4c98ec5c5c2ffcc69597a7ae0dd6"],["/tags/c盘/index.html","a05afee4953b2f91ef346372b344d44d"],["/tags/email/index.html","8cebe4d3346c5d82461ec2709457a052"],["/tags/ewomail/index.html","097da7d349e8b74936def7674fbde8fd"],["/tags/fiddler/index.html","e0139ba462b0adc23e5b3d45ee9e92ba"],["/tags/flags/index.html","8d3e186ea0cb2a0cdb1aac9cc7c9b3ab"],["/tags/footer，页脚/index.html","70c7a677009518b8ad07739712817adf"],["/tags/galgame/index.html","be448d6ecc9de6ecc0d5e98113e94002"],["/tags/git/index.html","764473270f4a76cdf7b06d060120fd9c"],["/tags/gitcalendar/index.html","a93a39384246bca089efabf0a99c2923"],["/tags/google-voice/index.html","723dfd83d92c2b2bf743ddf89edb0811"],["/tags/gv/index.html","3b2b5cb5ea16f1e36e208094153b1f4d"],["/tags/html/index.html","afaa33ddd7a56bc42e48f728a2bc6a80"],["/tags/index-1.html","0327f6279e1eafe1da5859d14a4a1fdf"],["/tags/index.html","1acba375c13683decfdba49789cbe47f"],["/tags/js/index.html","0cba61440608cfb4c26feea2ba2e9867"],["/tags/jsdelivr/index.html","820e54843506d8859a15ea2533170a3a"],["/tags/linux/index.html","fe456e941856aeb04c1943ef9f1bbd5b"],["/tags/macos/index.html","041a475610e40524d85221fcd3ab1f19"],["/tags/madVR/index.html","f498a127f7720aef41b8b36159bd0bd7"],["/tags/markdown/index.html","a7edc90c5f69902ed5f966b7e71cfc8f"],["/tags/maya/index.html","6683c01549c14bb941593fcf714f51f2"],["/tags/mklink/index.html","8c31241e712a0f8ab8bcc63b54441466"],["/tags/office-e5/index.html","afe0ee3a0b082627b284bf3649228700"],["/tags/onedrive/index.html","7c03ead2f5b3911d4d02bc3119802a0c"],["/tags/picGO/index.html","c91b8236f9b53f2722d5601efa63d994"],["/tags/pixiv/index.html","56ce64ca4ee84a4eacc148b49328079a"],["/tags/potplayer/index.html","a5bdced17730318bab196621574144d5"],["/tags/proxypool/index.html","39e4c29507caf2bca282910f0dfa1c35"],["/tags/qbitorrent/index.html","b9fcd679f74995e6400380d99292872b"],["/tags/raidrive/index.html","50801d72b8cf0ae0dc139cde79b253d5"],["/tags/screen/index.html","e0037594ad5282eff443c3e6255de819"],["/tags/speedtest/index.html","8f4bf8f19df489be7403ae4db4e2b165"],["/tags/ss/index.html","89220c8af680a7b59d129559edf04b72"],["/tags/ssr/index.html","fb35ff4a14a8966547e1f8e01eb287c8"],["/tags/stickers/index.html","e96acfd293ee033f770fccddf6c6fda6"],["/tags/surfboard/index.html","f14002c159e94f330f6ef9c7c4f4d036"],["/tags/tap/index.html","7db2a8236d43a24811c4b18b12844a3c"],["/tags/telegram/index.html","55b51ecff2bbec9aba464d406fcdfe19"],["/tags/telegram代理/index.html","e958967e08b29642e5b3d0cf6828bf8a"],["/tags/tg/index.html","205900653c547735bab1643376436547"],["/tags/tg代理/index.html","e989dba809f6723d4b306feed3f9ff7d"],["/tags/top50/index.html","a68295f2868ead3c96827a6754679929"],["/tags/tracker/index.html","611e1c574f011212e04f2190ba058ee2"],["/tags/translate/index.html","950655e0537e0fc97af8155808f04a98"],["/tags/translater/index.html","1bb1df3ae84aeace063072338f5bb4f8"],["/tags/tun/index.html","bd61e5fb42e332354f0368d2f7463930"],["/tags/typecho/index.html","2b5cc66ee0eaf2fedce3951c47dd5b65"],["/tags/v2ray/index.html","969500219aa3bdbe6f4e4367d0b900e1"],["/tags/vpn/index.html","d0582afaba50b123a92d816a2ee8c8da"],["/tags/vps/index.html","f8128851af2187949d4e53a25dbf86fd"],["/tags/wallpaper/index.html","8db1fd47f9391d7aae50972ab4441237"],["/tags/windows/index.html","f2aff2fab8ac53b6dd98746e06236b95"],["/tags/windows端/index.html","f7bb449bf02a645e18a69cf30e1f93a4"],["/tags/xray/index.html","b4d0ab425fc57a7d3c0a3376c88eb1a7"],["/tags/下载/index.html","f582b272ffffd68d158fb67aca2b9bc3"],["/tags/不限速/index.html","96b67b2b8ef6dc6312383f40a7b6b03b"],["/tags/个人网盘/index.html","cefdd2b46e0411962aa06de96bdb5478"],["/tags/主题/index.html","9134ecc8efee461b02e533451fc01dab"],["/tags/二维码/index.html","8a82b80f89396e343d02bdeb9c85e275"],["/tags/云便签/index.html","a5d31de03fff722d2ee013135447a831"],["/tags/云盘/index.html","7b67e186f79144696e0d504b184fde38"],["/tags/人人/index.html","d66c0ec20ee8fd78cfb2741b14a77700"],["/tags/代理/index.html","e5554467fc0190c49515db6e0598ebfe"],["/tags/代码/index.html","26ecc5f37a0fa98af6323bb283cac027"],["/tags/优选IP/index.html","7e0138d582cd3bf1956819b6e13bdb35"],["/tags/便签/index.html","855a18105568209e5ddec4cc884083e3"],["/tags/保号/index.html","d90cb0fb5690d1085d29d6bf55a79da1"],["/tags/免费/index.html","d17d59c3cf243ad128a45bcc66b55911"],["/tags/免费节点/index.html","c3847c503391814a45137dcd94c7a526"],["/tags/加密/index.html","add5d0e0f6cce1b8f28a5e7cf9487ebc"],["/tags/动画/index.html","82b33fd2a84a03bd2b1cff888cc4746f"],["/tags/博客/index.html","e0fe59401ee4b919b37b6a7babacabd1"],["/tags/历史记录/index.html","f24be007822adb2140271cdea4188c35"],["/tags/压力/index.html","4081f38f501aab23381caeaf9ad7e62a"],["/tags/压缩包/index.html","9e3ba56ae9f9b5322225726027f90650"],["/tags/反代/index.html","9172acf4e251a2c25839056b0814e027"],["/tags/可视化/index.html","b01ae379fea5b553bab4943c26ad99a5"],["/tags/命令/index.html","19b99336b23f6bc7595d3f778caec71c"],["/tags/国家/index.html","ec3eb8e7b2ed95fff7646667d772971e"],["/tags/图床/index.html","2c57d93bd6bb6cd628751834cacea719"],["/tags/图片/index.html","f3faba88bcf30abe74a0a8b75d80ae08"],["/tags/域名/index.html","4834493a16ad5a94e2ffe6e38e49db2f"],["/tags/壁纸/index.html","ce8e9cf8fb3917e2e6342af639229a35"],["/tags/多标签/index.html","624c19c3e8f827c040ffa950f5846471"],["/tags/存储/index.html","586cd118ba71d07c29e623ac6011c52d"],["/tags/学习/index.html","f32d1f40be5dcceb269c873fb6de8006"],["/tags/安全/index.html","0dc5bc8aa77b606ace230509c4f6e3eb"],["/tags/安卓/index.html","6d8b78cb0742b4853b89634e3a227341"],["/tags/宝塔/index.html","4535e7fcdbd0db1bb6c2e68c1acbd34d"],["/tags/小游戏/index.html","bca6dd632affad0df654474387a9ba47"],["/tags/广告/index.html","86911c82bed2ebb1a90784f95345e3f8"],["/tags/建站/index.html","420a3f67e42e3488c24e2dd0de18efbc"],["/tags/影视/index.html","8f66b25e689432d0026d904003278aa2"],["/tags/微信/index.html","9f413a98c9766da59970530332f6d52d"],["/tags/快速启动/index.html","535ddb1b7e51bab3bc8d54802ce655e5"],["/tags/手机/index.html","a74f3df20175cf78e0acbe828321c3c5"],["/tags/托管/index.html","43b0a558d801e26e9e6fe54f55ebe94d"],["/tags/抓包/index.html","90126cc70ca9ce28ca5c392235336667"],["/tags/抓取/index.html","88c7edc94d3247284b81b932d6d65762"],["/tags/投屏/index.html","64f04cdc60b05e77dfe0ade8e909451f"],["/tags/拓展功能/index.html","19dd9d358f4afea538be2357e0a6f524"],["/tags/挂载/index.html","dc61f81e48cd62127f9ea1e5242eb659"],["/tags/指纹/index.html","354ca6dea8168b8e68808d031a21ec0e"],["/tags/接口/index.html","451442b0a4d504e5a505267e9bbbd979"],["/tags/提取图片/index.html","5cf1f07da187d80fecba2a000d96f0bb"],["/tags/插件/index.html","742c68181536ba709a77dfacc1dfb09c"],["/tags/搜图/index.html","680c55aae7a3874707575548eef23501"],["/tags/搭建/index.html","fff13b9cd54ca1af150958d189361d3b"],["/tags/撤回/index.html","cbe89adeed954d382a427fbdc49472d0"],["/tags/播放器/index.html","05170dae20215629e459abd4aa36c980"],["/tags/支付宝/index.html","d1e0a6457c5ae5f60f3aa479d1b59d09"],["/tags/政府网站/index.html","dd688509b52326ad7bac908ef4919fc1"],["/tags/效率/index.html","68d979595764177c0787847e7f757041"],["/tags/日历/index.html","3d426ce38f6413abd519bf624223c003"],["/tags/服务器/index.html","90aea42741006bcd38c4f9ac54f123be"],["/tags/机场/index.html","8a2ce21f348740cde9345bf584f90e74"],["/tags/桌面/index.html","f4362529818000e9ab61b1b9fbca0a4c"],["/tags/梯子/index.html","3e8cf326b0c28e7ce47b1c2199f54078"],["/tags/检测工具/index.html","fe95c295e2cb830b7dd3c487be553b0a"],["/tags/汉化/index.html","e9ddd3ffa9885b225ce496286ac1d689"],["/tags/测压/index.html","8c4e5577ce56bf27f6f13eb26063d8eb"],["/tags/测速/index.html","ab1218d4beaa489ee33617904120d99e"],["/tags/浏览器/index.html","261e6e6e63b717f063636ab1236098ef"],["/tags/清理/index.html","78eeddb7cca913e9322f94076a05a93c"],["/tags/滚动条/index.html","d45fbec396ac50f5dee148aa64af613c"],["/tags/灰色歌曲/index.html","8715487c0e6ea86d04cc8c6f7e8c0e32"],["/tags/电影/index.html","2be098e8a58493d916baca880e51e8eb"],["/tags/电视剧/index.html","672dbb33d437862cf5cf500edbb825ec"],["/tags/白嫖/index.html","09616b56eba6654a31c2604d82522f41"],["/tags/百度/index.html","8abca7dad3b3065bf2ddb844dc89d68e"],["/tags/百度云盘/index.html","82b5240d90aa5b280202c1980ea74431"],["/tags/百科/index.html","f074bea99b03f7ada7d425199983cf2d"],["/tags/短信/index.html","e5c72320f343f0d6cfc601ea28a4cfdc"],["/tags/硬件/index.html","fbcf935fd5f2f0759ed95fa1a13f217b"],["/tags/科学上网/index.html","716b8022cd3418211ec4e2bcca51953d"],["/tags/空间/index.html","e7d21f976f7cb5636bbc3e213b54f1a0"],["/tags/笔记/index.html","83fe5308b170ff5a728ab29da744e6c8"],["/tags/简洁/index.html","9367638274152d4ef6a341a4c7663022"],["/tags/简约/index.html","295d6c9043807ec6545fa6548d68e32f"],["/tags/维基/index.html","06b958b89905588f886fccdfbf6199d4"],["/tags/网易云/index.html","4f591d6dcf32b6df41a80dc5349a3772"],["/tags/网盘/index.html","77de18975d5c889fc431c0bb018ea026"],["/tags/网站/index.html","d393ff3bd4fc5ad1c51c060632c8b165"],["/tags/网络/index.html","65701d6cdf10cad29e2e12cbef26610b"],["/tags/美化/index.html","2bffcfc8d897e19c684060d33122c8e3"],["/tags/翻墙/index.html","b53b16f0dab170932f872da6836d6596"],["/tags/翻译/index.html","82084fd383022b9e15cff6835275cf40"],["/tags/翻译器/index.html","fa691cc4edf50b0226f77a1c1dde3f0c"],["/tags/聊天/index.html","573a8ad1d556ebcee78f11c925e3e36c"],["/tags/聊天室/index.html","f3df1b4345f89afaa68c5f7fc7866361"],["/tags/联想/index.html","36aaa3f5f0e53fa11053ebf3e125ce9a"],["/tags/节点/index.html","b1c79d0a9ff141509b16c35a0d4f91b7"],["/tags/虚拟手机号/index.html","b0b72cb2074bfc23789072c9797b2770"],["/tags/补丁/index.html","af0e9c7e91eb0d4d7d4db1fbc9a7a7d4"],["/tags/表情包/index.html","f133caa7c9d4d57ef6c5a4544be56cfd"],["/tags/视频/index.html","6199439d582b69ab8f99378d0fd4dc40"],["/tags/解析/index.html","2f6156f19a6b198396508f7696e2a5d4"],["/tags/订阅链接/index.html","13307fddfe9caccfb513011f62bd815a"],["/tags/记录/index.html","1ea140ad2ec9aa7f9f6808ffe8919c9f"],["/tags/识图/index.html","6fe7ce706b082a62b623672463dabacc"],["/tags/语言/index.html","b3a967d137781bdd7665c1865f5f2d36"],["/tags/资源/index.html","5fbb963228869656cd0c272c5d69a86c"],["/tags/资源管理器/index.html","bf0c298adea3ecdb74d741e1ca69d322"],["/tags/转移/index.html","bf18482423841d9a99ca32f2426db2e1"],["/tags/软件/index.html","d0c48069bb5d45ddcb74054c3ef2193a"],["/tags/轰炸/index.html","d3e3248894913364e7bc11e647f3cb5a"],["/tags/迁移/index.html","64a2b4c3f763cab1b6749851d609aa45"],["/tags/远程控制/index.html","15468ca41664af3e82081e7a2f045d3c"],["/tags/连接/index.html","86d688fc94ca519af3ea758d7270b764"],["/tags/追踪/index.html","807bd97b5e9c7ec36def4b9ae94f089e"],["/tags/速度/index.html","706ca3b261f7795e71786e66639dbcae"],["/tags/邮箱/index.html","e933ad1faf5f2819ce3db62a02808f37"],["/tags/酷炫/index.html","14cc0ba39976359ff74cf3ecc43a06f6"],["/tags/钓鱼/index.html","18bb37795d4f0acbd2784f146dff56d4"],["/tags/镜像/index.html","255b6379173ed5e02afa99490e9e62ba"],["/tags/随机/index.html","95144dbeb09a8e6a184d959ddcfc84f6"],["/tags/隐藏/index.html","626f77b8d5b3de36539b28b72a42eb99"],["/tags/面板/index.html","fc17a900feb4e3cb60345e18afb1eac3"],["/tags/音乐/index.html","24eeb7c514e007e41fb6adf4ea426b72"],["/tags/高颜值/index.html","c1c084a1909729bcc811614cef947308"],["/tags/魔改/index.html","52ad0cc2bbc204fd510da1c5768438e7"],["/tags/黑名单/index.html","bb6f6190367f191503c42878f45dc536"],["/urls/index.html","208b809c675df0b58c25cbd45d814de1"],["/vps/index.html","16ea3d09390625d32b60c0d0b58ba110"],["/支持/index.html","ec0e697acebf4a42044c951a4db2fcf5"]];
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
