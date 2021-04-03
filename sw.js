/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","e0ce3e5212bdc47435a9a2223e559bdf"],["/2020/11/29/clash-windows/index.html","a12b2294b5ff1f2a1eb1129f38f18575"],["/2020/11/30/websites2/index.html","7cd2fcbc9e58370f9d816b52d8a8f3f8"],["/2020/12/04/iphone4s/index.html","c68e861314a17f07ace1ee2f405c5415"],["/2020/12/04/onenote/index.html","7f67d11e1cf411d42a05b311515548d1"],["/2020/12/04/wesites1/index.html","a789a66b0d9f8f05f66e84e7084b7e14"],["/2020/12/06/nokia808/index.html","114cdcb55a8c26210c10523a7adbb369"],["/2020/12/07/ipad1/index.html","ce923b220dc519d7601e7ad5cd601e9a"],["/2020/12/18/freesubscribes/index.html","252f2461eeaeda8d7abd426e1d5a9c58"],["/2020/12/19/musics/index.html","9fabb5fdee089a40b4d08f32b813b1a2"],["/2020/12/19/shadowrocket/index.html","170d3147a4be37bc04aad5cb0782d2f2"],["/2020/12/19/v2ray-windows/index.html","7cc1ff0e9b797efd829562770e26a94c"],["/2020/12/19/v2rayng/index.html","eee0b1be9ba621123cc53b7ef8dd6626"],["/2020/12/20/beoplay/index.html","f3edcd038d10751e235756a72ff40301"],["/2020/12/20/订阅链接转换/index.html","928550d867743232ff12ca4e134eca7e"],["/2020/12/21/chrome浏览器下载提速/index.html","58d1f183dfe741a72db78a69fd786ce4"],["/2020/12/21/免费128线程并发下载xdown/index.html","bf4a3b1864be82d5e460bf8ff0df6861"],["/2020/12/21/免费32线程下载软件ndm/index.html","7c27fad07641f11f706cf58597e03b3e"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","4140f802e1edbe7e44a82f861b407e3d"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","da1e186c686d0b04299524cdcafdacc5"],["/2020/12/21/广告怎么知道我在想什么/index.html","0b1171ae7382e91d7f504d35f0132747"],["/2020/12/21/无名·引子（小说试写）/index.html","2140ab74c653735c2d2f61d50f5edbc1"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","6e5eee258769e5f03815c0d7ff0545e5"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","1f50303ad78fdc40e6b652719db565bb"],["/2020/12/21/高速轻量下载器aria2/index.html","fe2e4f90fe0da18f69acdaa424a85522"],["/2020/12/22/2020-cee-roo/index.html","f998dc1223eecd2052e5e25cb7c5e4b0"],["/2020/12/22/firefox插件、github、steam富强/index.html","0068d375904b7251cfb85162cadc9518"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","16ddf4126bf0d4c8805c727fbfc96c55"],["/2020/12/26/python-day-1/index.html","9bd2b36ea9f6c983da4b6273e5b069ad"],["/2020/12/26/python-day-2/index.html","d125d39fdae9b68207ca191147cfc852"],["/2020/12/26/度盘不限速下载方式一赏/index.html","a100561cf12be31b4ef0c6256752f023"],["/2020/12/26/添加开机自启软件/index.html","dd1659cb08624658369819666e039f67"],["/2020/12/26/电脑端截图方式一赏/index.html","f110a49b7cc82cd09df347a2a86d3fdf"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","1c40c277fa93596ba80a63fddd3b8148"],["/2020/12/27/最安全的浏览器tor/index.html","4657ad777b63da31fb05079f5f07f655"],["/2020/12/27/网易云刷等级和听歌数量/index.html","906c70578215fd9b207007003d0e58eb"],["/2020/12/28/freenom申请免费域名/index.html","3590be28308d597d3e2864fd382ce44e"],["/2020/12/31/机场/index.html","97bd8de868aeac4f86190b581da70e96"],["/2021/01/01/M1/index.html","fa5d61bf35de759839ef9d290240574c"],["/2021/01/01/compress/index.html","d6faae3c81d05acaeff78be6a2fe90ac"],["/2021/01/01/infinityfree/index.html","f1666f6b5034c8b618dccc61a4705bd8"],["/2021/01/01/硬核翻墙/index.html","2136bdc9dacc7bcdbba2994ce692ee0b"],["/2021/01/02/qq/index.html","7a51652218d748746963805a2d84938d"],["/2021/01/03/netch/index.html","d22d287e7dfbccec8cf9678b23aab92a"],["/2021/01/03/waifu2x/index.html","a0776070e79be3dc2afef5d1a40aafbe"],["/2021/01/04/ads/index.html","66efa56b6ed98b2a778ae837fec61fb0"],["/2021/01/04/games/index.html","3c128dc7ce3ad979f6ff26bf80505c2c"],["/2021/01/04/heroku/index.html","176b07de10af197cbe315a5b02998b24"],["/2021/01/06/movies/index.html","c8a5ffbf31a2776198643a23fabf11b1"],["/2021/01/07/google2020/index.html","3054562383435b17dfa5ed5ef5060150"],["/2021/01/07/lucky/index.html","37eb2f9ae32c42c3b9c95c37a02700b2"],["/2021/01/07/spotify/index.html","0ddc044b1fe5b2651ab850fe8be9b5bd"],["/2021/01/07/thunder/index.html","9d48c025e5adba4150def312280cf654"],["/2021/01/08/adguardhome/index.html","a960f4f0fe05f8f9f8dd8ae5f52533f1"],["/2021/01/10/IBM/index.html","5248ff5b6c27d3935bbcacbbbabadefa"],["/2021/01/10/potplayer/index.html","65686d8b59219c799339dd5e1dbe4535"],["/2021/01/10/sakuraanime/index.html","b4eb87bcc759e3dac9aaca627fa9f9f5"],["/2021/01/10/美剧星球/index.html","99e1f704480555591792088417fc94ee"],["/2021/01/12/telegraph/index.html","de7f93430aa94d646375a4084f9c0b8a"],["/2021/01/14/comics/index.html","b266442233d6bf82232c217b4f14765c"],["/2021/01/14/ftp/index.html","36de062c290aa29cab749edaaf2848c5"],["/2021/01/14/oraclecloud/index.html","d9129a00cc4336198f7c5410b1f605b0"],["/2021/01/14/porkbun/index.html","f2e0c75996f7aabc260f148ae6715aa4"],["/2021/01/14/powertoys/index.html","dfd00ba3d9e41a9075ffab133108250c"],["/2021/01/14/taptap/index.html","41e24817459006bba7911871e6355241"],["/2021/01/14/ubuntuvsftp/index.html","52917412834ec9e7877152898c873400"],["/2021/01/14/小说/index.html","78171e7c73df0aa14ec6a6fad77267f7"],["/2021/01/15/freeproxies/index.html","a113ba2c801c9672ab6cbc12974c8a8a"],["/2021/01/15/incaseformat/index.html","b6681e38567aa6f23d52e933e763fb2b"],["/2021/01/16/euserv/index.html","527a96aecffd0955a50987b6753d2d0e"],["/2021/01/16/winxray/index.html","8385487a53225b4e8ad27af87211cfe7"],["/2021/01/18/qqreadhistory/index.html","e4c2cf7b5b32fbde8aca4c33d3ce15e4"],["/2021/01/18/qqrevoke/index.html","d5091e304a0e6f21d95c3aba4719d4d4"],["/2021/01/19/freevpn/index.html","3f20a55af657b6b3a879256681fcdfaa"],["/2021/01/20/browsertrack/index.html","11bd66d3fa33739f660fbc829fef06a2"],["/2021/01/20/v2ui/index.html","41b347f7f49d3eb335cdcc8aa801a129"],["/2021/01/21/failedtoconnect/index.html","620ce0ab5340178d2d0764cd266f5f09"],["/2021/01/21/gitcalendar/index.html","af730e9344b107da9fe5d98dcaaf9713"],["/2021/01/21/markdownformat/index.html","673c4a6da5e8ab338c2911acf435def5"],["/2021/01/21/markdowntable/index.html","74c4d6f02a040d5a6d6969930c3a8388"],["/2021/01/21/vercel/index.html","b3580c8a0ef2821b4fee5016933fb00a"],["/2021/01/22/hardware/index.html","2e32d5b0ace96737e7b415b5230b61d3"],["/2021/01/22/muviz/index.html","45a2ccaa2f65ed279a3c6d2d98b127e0"],["/2021/01/22/randomapi/index.html","2901cbf5bbf8bda5ea39533ca1f957a3"],["/2021/01/22/searchimages/index.html","d7bfaca7cff402624c56d4d2fbb5daed"],["/2021/01/23/RX文件管理器/index.html","87a0786de58aeb0e33fa041c50c64258"],["/2021/01/23/chromeflag/index.html","0b6fcb5fb2ce820c30558cff89945a59"],["/2021/01/23/qttabbar/index.html","f865f588fd394a33ee840e58a97044fc"],["/2021/01/24/githubspeedup/index.html","0de3468781c814b3821673666b23dabc"],["/2021/01/24/jsdelivr/index.html","8ce5f6b041e48c9f1253a55378223b59"],["/2021/01/25/note/index.html","669b779ff0a150cde9159315fe904fd4"],["/2021/01/25/soul/index.html","3930e4f3840551e3810d25aba5689e31"],["/2021/01/26/herokuxray/index.html","6ac21951d30fb54f563b1dd71e5a6c93"],["/2021/01/27/proxypool/index.html","04eadca08b50e8ac1e2498e87d66869c"],["/2021/01/27/tracker/index.html","e2c629feec78193067d0834134320092"],["/2021/01/30/pandownphp/index.html","f42c4e306d30c769b7c86e435158e1d9"],["/2021/01/31/newgroup/index.html","e9f2b225da9da52e8da9d910611b31ad"],["/2021/02/01/clashlanguage/index.html","d2a71b5c6f113d99a388424b742ecb4f"],["/2021/02/01/encrypt/index.html","93c27d36ea210873d9db7c950ad022db"],["/2021/02/01/footermotion/index.html","7a8887159ad6e220dc176110e2a0f0fa"],["/2021/02/01/gitter/index.html","51cf222890cb02e5fe1b78cfd91619a9"],["/2021/02/01/pixivtop50/index.html","7e2e41966cd4285f9801ffd613a388fa"],["/2021/02/01/scrollbar/index.html","be8d244ada34aef9ba534d10292935bb"],["/2021/02/02/clover/index.html","76491fbf921b588c85e77e8e25d6d260"],["/2021/02/02/maya/index.html","9480ed0abeaee41fd74015391bb20a49"],["/2021/02/02/speedcontroller/index.html","55d8777b241f10512bb3b10b69c69f36"],["/2021/02/02/yesmusicplayer/index.html","87cf09252c5f776ba518f14ef62e558a"],["/2021/02/03/lenovoonelite/index.html","86d9baffd29fe98a04b780a594aa53d6"],["/2021/02/03/skipads/index.html","1ec9098b2463ff8aa1bb6853277ddc59"],["/2021/02/04/picseed/index.html","872e0d4721108b478b45f67e2d192401"],["/2021/02/04/renren/index.html","2a1dc84060992ea93edd6b31f15f9ad1"],["/2021/02/04/serverstress/index.html","3e026e66cc63f4311e91c98afe3348d5"],["/2021/02/04/wikipediazh/index.html","582e11908f883bdd95e454577753b396"],["/2021/02/05/googlevoice/index.html","3b77b4a3a9636fa792a42f396b495c94"],["/2021/02/06/clashconnection/index.html","331942aa4355be456252918d2455526f"],["/2021/02/06/gvtransfer/index.html","e5ac17f866c8af34bed68e2515606e12"],["/2021/02/06/todesk/index.html","8a5a4002d559a47f2826538d1c923086"],["/2021/02/06/vpnblacklist/index.html","ead87f5cb97475f19d32095bbe4cb45a"],["/2021/02/07/mklink/index.html","7eb126af33eb2b1e0d111583e3a05a11"],["/2021/02/07/speedtest/index.html","c3537424adca80b6a45ceb71a8a96ffc"],["/2021/02/07/translate/index.html","46d2c4830b60836f55ab55f433be6ccd"],["/2021/02/08/ewomail/index.html","2053dd214a619fe7713b2b57a085827f"],["/2021/02/10/officee5/index.html","df9f3572fca0c3a7f41868500653323b"],["/2021/02/10/raidrive/index.html","80e7209112518267b388cc04445cbc93"],["/2021/02/13/e5sub/index.html","b501d82a2cad6ea001e2c719568e1b5e"],["/2021/02/14/screen/index.html","177496001e8b192d542ae80e356d4470"],["/2021/02/15/clashtun/index.html","515e8a0690f8870ba0cc46910af94f8a"],["/2021/02/15/messageboom/index.html","e40eb05cf7a4354e26e6d51fa79db790"],["/2021/02/15/oneindex/index.html","c514fa6cfad7fbc6f848f264740344b8"],["/2021/02/16/govsites/index.html","2b5df98ee21d6e2f23db5773c162264d"],["/2021/02/17/hexototypecho/index.html","4cc1834d2cfc8aff0f938ea791157ef8"],["/2021/02/19/fiddler/index.html","c5e7bc967d22f92c92e68d29776ae5af"],["/2021/02/22/potplayerset/index.html","1acaf50c342e3f44a343cfe8c4f77862"],["/2021/02/22/studyresource/index.html","978dff735014658bcd47e328cc7d564f"],["/2021/02/22/telegram/index.html","b648255276be3953b319db51e6cf1757"],["/2021/02/22/videos/index.html","1ee86f3859b63f78eba4ffeaf348faac"],["/2021/02/24/mtproxy/index.html","3a6070217358d4bc43675f70a250eac4"],["/2021/03/10/catchcat/index.html","2539be58b846ca527de491459635ea73"],["/2021/03/10/neteasemusic/index.html","06968ed05396ee53d430eedd061342e6"],["/2021/03/10/surfboard/index.html","43be57f0d737d2977d5e96e5c366375e"],["/2021/03/11/vpnandjc/index.html","1ba3ceb4dd9f4e03674d3017371d3c3a"],["/2021/03/12/qrcodes/index.html","91a8b68a6ffa725a8ae9f962e4dcc8ac"],["/2021/03/20/qv2ray/index.html","08ec4f995580ff011cd6421ad253a349"],["/2021/03/22/freevps/index.html","7c02c105735b67c6642c856ae209ef80"],["/2021/03/24/tgstickers/index.html","36c3042f66a02becd82e830a716b7752"],["/2021/03/25/clashx/index.html","4748d1c9029b6cca63b82b9b411a8241"],["/2021/03/26/bingwallpaper/index.html","02691cc668b9141c61b7297691b3fb14"],["/404.html","3fd52551a5790053f6de2b2f5307a658"],["/archives/2020/11/index.html","db9c489c6f12a5f0beadcd8f011a96f0"],["/archives/2020/12/index.html","1313cc16a154b8ddb46eb6bae1598762"],["/archives/2020/12/page/2/index.html","3be815916d8c01bf6949ab1fb8849b59"],["/archives/2020/12/page/3/index.html","8ee9682a0ce3796f54a3984b3bfede06"],["/archives/2020/index.html","f2af2c4e8352a16c2c1c6d1b46fb91aa"],["/archives/2020/page/2/index.html","13327e6b170cf4d9f81fa20f2e339c0d"],["/archives/2020/page/3/index.html","c63e0938e7431e81d36071d224aaba85"],["/archives/2021/01/index.html","d9bcca222268a0c3486ac3c3f685407c"],["/archives/2021/01/page/2/index.html","f25f4264bd01baf0c180c02705431987"],["/archives/2021/01/page/3/index.html","a4d30e3a233dd623743660c75a03b73d"],["/archives/2021/01/page/4/index.html","3f4fd0e1bfdb02b5bbe2772f94d8749d"],["/archives/2021/02/index.html","cf51d07d1cf557b5f298aa7e1b75ce8d"],["/archives/2021/02/page/2/index.html","14b7468ce7e359af6218586ce1ce5855"],["/archives/2021/02/page/3/index.html","9d30b66cb5fee3f6fddfb88ae6c7095b"],["/archives/2021/03/index.html","2a5f0b90687c2b587cf03fd583f0da37"],["/archives/2021/index.html","c49f6b6675132be2291ec660d80792d5"],["/archives/2021/page/2/index.html","c25b9c67ac0e1fe1ecbe0a0c2a6683d4"],["/archives/2021/page/3/index.html","f939267661d7cdcd936f8121745580a8"],["/archives/2021/page/4/index.html","a594900a47757a28e6fe3905548a7a6c"],["/archives/2021/page/5/index.html","3b6fc30fe868f8ecad5dd2ff5f382963"],["/archives/2021/page/6/index.html","203b7f7b1564b8a20201043e5414e97f"],["/archives/2021/page/7/index.html","cbbe912628b632ae9c3504843b4f7dd0"],["/archives/2021/page/8/index.html","aefb88c6dee5d0b51d4bf28193e07450"],["/archives/index.html","d1144a5b504479706434bf169389cb1e"],["/archives/page/10/index.html","5671d58425ae4e6faeadc7df2d9ef92a"],["/archives/page/2/index.html","839ceb749f8bf325b23382177eed87a6"],["/archives/page/3/index.html","4886d4b2f1f0514a47249c72f6923906"],["/archives/page/4/index.html","0981506ac20ebbcedfaaaf502fbf6112"],["/archives/page/5/index.html","ff3e6e92d24399605ab3a85d1684e955"],["/archives/page/6/index.html","87023e6a76be9bf842cb3bde85a20ca8"],["/archives/page/7/index.html","8da55b3c31083aae2d2d623a682f441b"],["/archives/page/8/index.html","7018439dfea8b12df077140df003a1eb"],["/archives/page/9/index.html","1cee7aba4215243ed4f3e6275735dd40"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","3834451a18108aa0d4713c80b85216df"],["/categories/index.html","3a201cf55619bb5fc6a8d14301ba159b"],["/categories/下载/index.html","08f537617aaf2c01a97049d6d27c94eb"],["/categories/安全/index.html","4650abb88fb83985fda515d8715c6b9d"],["/categories/建站/index.html","4eeed128d629fd909b1f53f9935facd2"],["/categories/杂/index.html","a14a518bb47913062c25a033a629f6b7"],["/categories/杂/page/2/index.html","450f09613531c66448954aa305d92767"],["/categories/测评/index.html","d6c2f5eac008ba471a3bb5c36481cb5b"],["/categories/科学上网/index.html","e7149559e3542851bef9df206f8f492a"],["/categories/科学上网/page/2/index.html","c367eacc3d2e7e4d1782d224fab6082e"],["/categories/编程/index.html","72f47c93c9cc5951250eefd7fcd3465b"],["/categories/网站/index.html","eb42e34f83d80469b6ec4ac074ab41fe"],["/categories/网站/page/2/index.html","735619a68edf17f950190967cde7ad5b"],["/categories/软件/index.html","2b16ea08a9389fa2a17a25f601d1d87f"],["/categories/软件/page/2/index.html","bb445d047cd6680ca0bce48b8f87920e"],["/categories/软件/page/3/index.html","e5bbb5e7cfdd81919a430c81b3bc89a1"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","b22a687347a4ae88862b8aa39ea6b86d"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","8d5d3319132d56be2d65b39032557887"],["/ios/index.html","a277bafc367e68daa96d359f8736a639"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","ec888329c93a99040024dc061069153c"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","4a3adb5df773081391b08ce319d9b957"],["/page/2/index.html","bb814a8b285b201a905a29f180a879de"],["/page/3/index.html","43705e6fc5d1153e14432b7c45525691"],["/page/4/index.html","d854f44c44770581a2bde05f8ccae751"],["/page/5/index.html","6dab7c4da32dfa76043278a7a6c331fd"],["/page/6/index.html","6d0fef344a6719c2b12bd368bc6ff94c"],["/page/7/index.html","9776f06536354464698de1f080de8fb7"],["/page/8/index.html","a96213ed51fa6b349f9e8fc68ddbee0a"],["/page/9/index.html","ff22917bbb4f555988bdb14d71a7d2d8"],["/payment/index.html","226678f96e3814c7b4b6683488b56f95"],["/privacy-policy/index.html","249744b04d5e7e9d99a8a450d78f682f"],["/rss2.xml","4de761da6c1f6a6b584be22c42643031"],["/search.xml","609478c792436d4b3f34685c9615b64b"],["/sitemap.xml","fb2c246bc6f1d68f9fc04a5a5cfc1ebe"],["/sw-register.js","77cb85e9e468e9fa76b107c1c328494b"],["/tags/5t/index.html","47a9fc9558c593d9b5e93f9be366b02f"],["/tags/Bing/index.html","0bcf494ac3833439428ed4ce3d0b50e3"],["/tags/Clash/index.html","0a898533d9e7685c9cbebb3e3dbac8d1"],["/tags/Clover/index.html","1b4acb33b86b494a699c601a19f2bef4"],["/tags/E5/index.html","0a249cf2208cd99f833b65a09168e33d"],["/tags/FTP/index.html","7b51c8ab8a0b994ffbec6cb346cef1bf"],["/tags/GitHub/index.html","8abf0c30ca520605fc35cd38ba06c6d7"],["/tags/Heroku/index.html","bba43c28811366e591f8d97d927de9e7"],["/tags/Hexo/index.html","d8e8b84af3f34641848fec6a84b985cd"],["/tags/Lenovo/index.html","a26a1366f7a8cb15236a5925d48962e1"],["/tags/Oneindex/index.html","8c5f1d150fa4235c85ad271b8cb7f94e"],["/tags/QQ/index.html","2b4b33922a5498b8d8aded8b9ebd00f5"],["/tags/QTTabbar/index.html","447f073a9c91765637a256af22495755"],["/tags/RX文件管理器/index.html","95e698ec1a001fc7d435c07e7c15a5a1"],["/tags/Todesk/index.html","224f5d981ba3412d05bfefefacf5bb7b"],["/tags/Vercel/index.html","bd6913b328f7e78cc941a3775a0be789"],["/tags/ads/index.html","c218b66de91a53c04df32e4bdbc42e9b"],["/tags/api/index.html","6cea2b33f26218309527213b058595cf"],["/tags/app/index.html","ea9ed51cb8d73551af048233e2be17bf"],["/tags/blacklist/index.html","1a04870eb085c8c498b5df1d53bbcde8"],["/tags/butterfly/index.html","4de0df368f7ea8377f34ed051000d74b"],["/tags/chrome/index.html","1640eebef34d4bf7c5adce2587c88b8f"],["/tags/clashx/index.html","979dd0d39a961b939a4cacb7418d9eed"],["/tags/cloudflare/index.html","332209d7c902f4f529eb9b5b62d85652"],["/tags/cmd/index.html","b0c5631946c1884020551d73f733fee5"],["/tags/c盘/index.html","d42b5d8a1ad0593600a1985cc6b8d49e"],["/tags/email/index.html","a54e18ebf5ca73deb14c56527e5356f7"],["/tags/ewomail/index.html","50453bae9dfd26e0ee2f8aca68bf73c1"],["/tags/fiddler/index.html","cf52dc5324ab0f6825a6b5fa18da6857"],["/tags/flags/index.html","b6bcce5c363df28cb0059876a6f2f093"],["/tags/footer，页脚/index.html","17591badcd9634ffe28589cb42d800e2"],["/tags/galgame/index.html","7eeece7f0adf0d251dc00f6ad6445b87"],["/tags/git/index.html","486d2c01f057df4645386f9fd803198e"],["/tags/gitcalendar/index.html","7709cbfb573b79be731d0da80c46a487"],["/tags/google-voice/index.html","fc510f635ad804cea6611edfc0899ef9"],["/tags/gv/index.html","1b8949ad3e4c153c6c3f43aff03a475e"],["/tags/html/index.html","9a66ff517e899e8a35928455b7ddf02a"],["/tags/index-1.html","2fe137e9c6afdb4ddd126055379e60bf"],["/tags/index.html","c9416b19988a275cf0df38ed040f990e"],["/tags/js/index.html","5b9148ed9558e21f9775acb574cc8190"],["/tags/jsdelivr/index.html","96aafd5bc80ee81fc9ef9b395bcbbb8a"],["/tags/linux/index.html","324298618651c3e0ecabd44b277a6b1e"],["/tags/macos/index.html","dcab6e81cc7ab347d943c23968fb9dcf"],["/tags/madVR/index.html","5795cd529b2102bfed8535ee1e525017"],["/tags/markdown/index.html","2eff729d8cf9aba462499bf8e6ccdb54"],["/tags/maya/index.html","6a47d3a6be8fdba4c88b287ff5d3be71"],["/tags/mklink/index.html","77959e233d3e7deee93e5946988fc2c2"],["/tags/office-e5/index.html","486e7b2bd61f5329d3f53de1f49136ff"],["/tags/onedrive/index.html","65e0cd2889954831080d241e1799bd7e"],["/tags/picGO/index.html","09e2366250ee7034af5123434915f815"],["/tags/pixiv/index.html","4c6affcad939084277ed6a6d2aaf1472"],["/tags/potplayer/index.html","ec26e4dcbda52e2978ab17da759e72f2"],["/tags/proxypool/index.html","277327daf40d4a8941bf8177a8e2ad3c"],["/tags/qbitorrent/index.html","6ea0d395d42bdee8c4efbe3ce74c9931"],["/tags/raidrive/index.html","d6a25cfd0fa57c8c5b3b56cf0c73d07b"],["/tags/screen/index.html","6e10823d8d40353bdd54a0b97f1e3171"],["/tags/speedtest/index.html","c788bb38a711ec294928faf50edb868d"],["/tags/ss/index.html","5bdb63b958527b84fb10a98e4c2d1824"],["/tags/ssr/index.html","a933db7b71781353bfffce56c90c6a7c"],["/tags/stickers/index.html","f70745cb8c57a8099b69477a06b630ed"],["/tags/surfboard/index.html","f8c9f9b07d8774cce75eadb7c46a061c"],["/tags/tap/index.html","1769dbfd5c67441f1aecf8e3e5a48896"],["/tags/telegram/index.html","aa861291a476ed39ba06eaa21085c669"],["/tags/telegram代理/index.html","0a595bf294e211f71f5132ae8eae0821"],["/tags/tg/index.html","130a67785829fa1d671efe4bc2b92daf"],["/tags/tg代理/index.html","df1047ba884a153a69146b2513a7a72d"],["/tags/top50/index.html","e23e238130d884f77cb585fca22431eb"],["/tags/tracker/index.html","e4eae0ebb1f2d54f951c51f593082bc1"],["/tags/translate/index.html","07db642d72ea607c1c7034a02f83f211"],["/tags/translater/index.html","9f7a7ad624cfb05301d216d633427f23"],["/tags/tun/index.html","f5a522b5dbc85ce71d080f773250f25d"],["/tags/typecho/index.html","00cb7b002cbf05698c367a293949f6c3"],["/tags/v2ray/index.html","9d3a8f5d6ea1122d4799746d4f772b6d"],["/tags/vpn/index.html","a5a10ca22edc6ead6d264ff2d99f1463"],["/tags/vps/index.html","2ec8774c548a80660d858497cc885151"],["/tags/wallpaper/index.html","a6cfa73e9028c0035072026c7ba1f5e7"],["/tags/windows/index.html","5345d9115bae8cc2e67b05585edcc21e"],["/tags/windows端/index.html","91289caf1a9595ab29c32e7c473397e4"],["/tags/xray/index.html","3af7167fbcc1afd367a8e8dbd14e5837"],["/tags/下载/index.html","60e95dfbbbe97d26e759be12248cbd07"],["/tags/不限速/index.html","87762102397b60cd007336913b230472"],["/tags/个人网盘/index.html","b14c59281c567529ee735c8b5d54841c"],["/tags/主题/index.html","bbc79885f78556271ed59c428264784f"],["/tags/二维码/index.html","46c7701fc65dee8a329a9934b5c4ae69"],["/tags/云便签/index.html","8a144d909adcf16c67e37b1f90d24542"],["/tags/云盘/index.html","553a23fa1412640cca2782c02d2f2f82"],["/tags/人人/index.html","d73e21a7f13cf72d5cfc839e7b421edf"],["/tags/代理/index.html","363e0b5ba67fa69329874307c93e1ef1"],["/tags/代码/index.html","f8682fd2f95183a3afef4a2aa3e287a9"],["/tags/优选IP/index.html","a43df4c21eb1c3f7b35c9b52c033afe0"],["/tags/便签/index.html","1bf273a8fad988b7f7741a4067895f0c"],["/tags/保号/index.html","02b0ad21cc21b17feff1a132d70cf4d3"],["/tags/免费/index.html","e3c74274cef1fc452f91bac228ca6ba5"],["/tags/免费节点/index.html","af8a10921433795ab8e70d5c7991b39d"],["/tags/加密/index.html","bfc07116fde33bde8a402d9973e78571"],["/tags/动画/index.html","07b1916219bf7713598da1854edcc303"],["/tags/博客/index.html","dc0495f88a730e09f158fcdbd308c672"],["/tags/历史记录/index.html","3f9d382f943bc30f9e56271e11d84c2c"],["/tags/压力/index.html","54d68ad70533702ce5582a73873edca4"],["/tags/压缩包/index.html","10ad2b905c72b619e9bb9ae6a0779550"],["/tags/反代/index.html","13f8e272299dc81c325bb9ff96ea02b2"],["/tags/可视化/index.html","42ddb12ca872f865704382521fa588e9"],["/tags/命令/index.html","04bc32efb5485c999015749625db4d23"],["/tags/国家/index.html","1d16f603c801b0f0ffe6a41bd4f0326c"],["/tags/图床/index.html","6c683aa12b81b5cf2bdb2f561fc8fae2"],["/tags/图片/index.html","cf0d2d2aec932307c040c238cd617c17"],["/tags/域名/index.html","9f6c9803a39fe11c6447911a5372ef8b"],["/tags/壁纸/index.html","f2e5d1b599cc4e5cc36a5663b8dd5152"],["/tags/多标签/index.html","b4042d9f8b9ca56019cdcbe62612d90a"],["/tags/存储/index.html","15bef3f89e0366f4cd661f50239fec6e"],["/tags/学习/index.html","b26e7981333fcf9808c332860b0a1b44"],["/tags/安全/index.html","9bbf10dfcebecef66209d2f5ffad337a"],["/tags/安卓/index.html","b814f5b45e15ce3e04cf62bc3fbb7f3c"],["/tags/宝塔/index.html","73288f546431802a01474dd51675380d"],["/tags/小游戏/index.html","5d12a9c8e2077a099fdaee1824ea166b"],["/tags/广告/index.html","e75ae321381742f91c96ce0c76a58cc9"],["/tags/建站/index.html","f18648da0394af0b4c69aa47309ac01f"],["/tags/影视/index.html","75916f0725f9e53c67991917410256d0"],["/tags/微信/index.html","f54b7423c8206f0d19494722357e9731"],["/tags/快速启动/index.html","d814157947ea6b13fc1cab0ff336f565"],["/tags/手机/index.html","db0e190c10d890df134c47fba114e761"],["/tags/托管/index.html","9780c3edb81020afea60898926cf4eee"],["/tags/抓包/index.html","ea235848d66fcf9c6f2b5a6e82fb48bf"],["/tags/抓取/index.html","c1f811dd8e96b16f1d429c8a9c65918d"],["/tags/投屏/index.html","f2c1f06324b242b4e3e5aa31ab8a2b08"],["/tags/拓展功能/index.html","08ee010ecba5cd28d52961559d77cef2"],["/tags/挂载/index.html","08e3cb37b7a9d31670ce44cb9cbfa5a2"],["/tags/指纹/index.html","29575187fcbb4286c8848c5bf1097d26"],["/tags/接口/index.html","bb5975d0ed86ef7dfa7f9ef139cdad07"],["/tags/提取图片/index.html","d0358f4cd3c1e86ab15d1dda74b973a1"],["/tags/插件/index.html","530ab75d8400cf1bcf2b0d73462116b3"],["/tags/搜图/index.html","bac89bfaf2fb1d05d0663ada2dc20872"],["/tags/搭建/index.html","7caf9dd98b67f1befdf344a71223cd53"],["/tags/撤回/index.html","73c8c25e19a3bfd52945739ca5302849"],["/tags/播放器/index.html","097733c5a6dfba44a2e5650aaac0dd2b"],["/tags/支付宝/index.html","52edba4b590834fb3b4abb443fad3e68"],["/tags/政府网站/index.html","fd78592e280b4444f05e024ed3fa149c"],["/tags/效率/index.html","43fbe7bb3f19e250ae3e396ea9bf8c0b"],["/tags/日历/index.html","a116227d52dbfa0b760a1d471a874322"],["/tags/服务器/index.html","d1d0f7984fd9d0f7dd127d007b159cd1"],["/tags/机场/index.html","599519e964dd4b7017ca58f3b66c41d1"],["/tags/桌面/index.html","8d511bfb8c7b7b848c7acb063be1bbda"],["/tags/梯子/index.html","651f8b1311bc12e4972407af975adf01"],["/tags/检测工具/index.html","4d8600ad416a793ca93c397bfd968912"],["/tags/汉化/index.html","930a49e0afc85dbd60e0e62152386b9f"],["/tags/测压/index.html","e8ebe9e3cc5967888c4aa72c451bce1e"],["/tags/测速/index.html","26267bbd68ab92571093b270f6bde5bb"],["/tags/浏览器/index.html","878d41e449b68f013b88b7391cc68355"],["/tags/清理/index.html","7273a56b2f50f48aa68896da72868816"],["/tags/滚动条/index.html","a43fc71dd0747eae097451e4fa7864c2"],["/tags/灰色歌曲/index.html","55fe331dfc6f6c84282461e5fd5eb628"],["/tags/电影/index.html","c454be50e061f8fa7134cc31de420c75"],["/tags/电视剧/index.html","d657a743f7691240568bb1afc5d4b533"],["/tags/白嫖/index.html","9f3d0b4c98952d31ea1196dfbcf14cd0"],["/tags/百度/index.html","591ec1f2b1726388a12c811d1385f5f4"],["/tags/百度云盘/index.html","9b78fa2ac86d4e192d0a2c3fe02bdd9c"],["/tags/百科/index.html","90eb5a765320c9ef3fd38534c2624abd"],["/tags/短信/index.html","f187b7005fffefd6a43368c201e0fe99"],["/tags/硬件/index.html","f109b475b10e77b818d960ec7a7efbef"],["/tags/科学上网/index.html","3d1ed0186ff1e1ba178f53dfbfe6a4c4"],["/tags/空间/index.html","b608978ce8e6c34dcf3970d9f05e2ff6"],["/tags/笔记/index.html","fa18455e5aa0cfd5fb580aefcc4264b6"],["/tags/简洁/index.html","8c2157b5236c16ce52c2c7baed0df90a"],["/tags/简约/index.html","bd31fc41caa08b501815c13d282f7efc"],["/tags/维基/index.html","12c046fc3847be0e248c8ae9d300bdc5"],["/tags/网易云/index.html","5eeaa45c9348ad127ea33663e3ee8c34"],["/tags/网盘/index.html","7f49883561a780411fbaa9a9a26cc6fe"],["/tags/网站/index.html","e2cead46fef854e02c603f6484cfdb25"],["/tags/网络/index.html","a06ff5ed939abd4735bc12713938c3b6"],["/tags/美化/index.html","98848337ffd234aa25c50c8ad8b21500"],["/tags/翻墙/index.html","d8f25441d3f9c0a12cc73b390899ea1c"],["/tags/翻译/index.html","e0e4aff38f43c8f0bd130c2174533bb9"],["/tags/翻译器/index.html","293af74b56939513b6f6ca3be9d7cc02"],["/tags/聊天/index.html","4b84ab199cfb738fd266db9d31216c29"],["/tags/聊天室/index.html","90ae509d67050396c79f08e485ce8f6f"],["/tags/联想/index.html","678acade612c9d9c429f6f5f456ee4ca"],["/tags/节点/index.html","bc1b96cb304f4bd0d0cf56030c0245c0"],["/tags/虚拟手机号/index.html","49f4c6a65dd3d5eea56bc076528181b0"],["/tags/补丁/index.html","89b1522897bc0b2d33d8c7a841cca2dd"],["/tags/表情包/index.html","0d8d96a6f417e88cb50507a14089390f"],["/tags/视频/index.html","21792bf90ad808f70db9032f2f190b9b"],["/tags/解析/index.html","cbb5010917a983385f52ba4cbfbac45c"],["/tags/订阅链接/index.html","bb0a856e618c86dd3e388dbd1401c1a5"],["/tags/记录/index.html","3b11c68536a638f799f80c2bd9f631ea"],["/tags/识图/index.html","57f745c25815861268dd54ceeb46ec65"],["/tags/语言/index.html","34d0752fac438fa4e41d89c112bc1711"],["/tags/资源/index.html","1efa960061cdf90fa48e72b94c63392b"],["/tags/资源管理器/index.html","214d406a6b9d452625f9e1135585c288"],["/tags/转移/index.html","f517ecfdb82c2e63377167fb97aec208"],["/tags/软件/index.html","743ed0f9a7a3b9b146990d54a4ed3e4d"],["/tags/轰炸/index.html","b8096c241fa7bd335f6deced1ffc5537"],["/tags/迁移/index.html","d6268e3c0f38237aceb8195586e5a7e2"],["/tags/远程控制/index.html","b4d5d8f88fccee955d87eb74eb7675dc"],["/tags/连接/index.html","1030b224cf78f91511271a976d7a709a"],["/tags/追踪/index.html","9b976c9fe5ab3f55371bce088bd9886c"],["/tags/速度/index.html","30c4aeb24eb53f276598e9232765f4f2"],["/tags/邮箱/index.html","621189a6b8a1f7b568b79b5c68c6c0e2"],["/tags/酷炫/index.html","02d1bc09e21aa93a96b61130a8883e8c"],["/tags/钓鱼/index.html","d1426fd8573eeae1b3b192c50aac96ac"],["/tags/镜像/index.html","aa291de841bf83210aa20f347724175a"],["/tags/随机/index.html","3d50950be3168a115466fbb40ca3ec77"],["/tags/隐藏/index.html","0037a6d0dc95974a55647ca1fd9626fe"],["/tags/面板/index.html","c3af27168f9b58d241dcee0a8658d9ea"],["/tags/音乐/index.html","836699a33e86b639ec60f0b11795d882"],["/tags/高颜值/index.html","2a34f9c98a681e72e06f286953f41ec3"],["/tags/魔改/index.html","afed8a493f16b2550b51f4d113ac6b3b"],["/tags/黑名单/index.html","c2d94d99be7ce489c4a72464d2827a9e"],["/urls/index.html","8d0a4af7a382b0438c7e13561180ce82"],["/vps/index.html","f52354d6d4de13341d7b83898c3b926c"],["/支持/index.html","8f7f1c115355668c6c2d2b117b119313"]];
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
