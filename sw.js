/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","e0ce3e5212bdc47435a9a2223e559bdf"],["/2020/11/29/clash-windows/index.html","a0a554bf749690c639fdf8623aaaebde"],["/2020/11/30/websites2/index.html","7cd2fcbc9e58370f9d816b52d8a8f3f8"],["/2020/12/04/iphone4s/index.html","c68e861314a17f07ace1ee2f405c5415"],["/2020/12/04/onenote/index.html","7f67d11e1cf411d42a05b311515548d1"],["/2020/12/04/wesites1/index.html","a789a66b0d9f8f05f66e84e7084b7e14"],["/2020/12/06/nokia808/index.html","114cdcb55a8c26210c10523a7adbb369"],["/2020/12/07/ipad1/index.html","ce923b220dc519d7601e7ad5cd601e9a"],["/2020/12/18/freesubscribes/index.html","b7d05d762a26daa3b8ec3241d2af6355"],["/2020/12/19/musics/index.html","9fabb5fdee089a40b4d08f32b813b1a2"],["/2020/12/19/shadowrocket/index.html","170d3147a4be37bc04aad5cb0782d2f2"],["/2020/12/19/v2ray-windows/index.html","7cc1ff0e9b797efd829562770e26a94c"],["/2020/12/19/v2rayng/index.html","eee0b1be9ba621123cc53b7ef8dd6626"],["/2020/12/20/beoplay/index.html","f3edcd038d10751e235756a72ff40301"],["/2020/12/20/订阅链接转换/index.html","928550d867743232ff12ca4e134eca7e"],["/2020/12/21/chrome浏览器下载提速/index.html","58d1f183dfe741a72db78a69fd786ce4"],["/2020/12/21/免费128线程并发下载xdown/index.html","bf4a3b1864be82d5e460bf8ff0df6861"],["/2020/12/21/免费32线程下载软件ndm/index.html","7c27fad07641f11f706cf58597e03b3e"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","4140f802e1edbe7e44a82f861b407e3d"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","da1e186c686d0b04299524cdcafdacc5"],["/2020/12/21/广告怎么知道我在想什么/index.html","0b1171ae7382e91d7f504d35f0132747"],["/2020/12/21/无名·引子（小说试写）/index.html","2140ab74c653735c2d2f61d50f5edbc1"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","6e5eee258769e5f03815c0d7ff0545e5"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","1f50303ad78fdc40e6b652719db565bb"],["/2020/12/21/高速轻量下载器aria2/index.html","fe2e4f90fe0da18f69acdaa424a85522"],["/2020/12/22/2020-cee-roo/index.html","f998dc1223eecd2052e5e25cb7c5e4b0"],["/2020/12/22/firefox插件、github、steam富强/index.html","0068d375904b7251cfb85162cadc9518"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","16ddf4126bf0d4c8805c727fbfc96c55"],["/2020/12/26/python-day-1/index.html","9bd2b36ea9f6c983da4b6273e5b069ad"],["/2020/12/26/python-day-2/index.html","d125d39fdae9b68207ca191147cfc852"],["/2020/12/26/度盘不限速下载方式一赏/index.html","a100561cf12be31b4ef0c6256752f023"],["/2020/12/26/添加开机自启软件/index.html","dd1659cb08624658369819666e039f67"],["/2020/12/26/电脑端截图方式一赏/index.html","f110a49b7cc82cd09df347a2a86d3fdf"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","1c40c277fa93596ba80a63fddd3b8148"],["/2020/12/27/最安全的浏览器tor/index.html","4657ad777b63da31fb05079f5f07f655"],["/2020/12/27/网易云刷等级和听歌数量/index.html","906c70578215fd9b207007003d0e58eb"],["/2020/12/28/freenom申请免费域名/index.html","3590be28308d597d3e2864fd382ce44e"],["/2020/12/31/机场/index.html","97bd8de868aeac4f86190b581da70e96"],["/2021/01/01/M1/index.html","fa5d61bf35de759839ef9d290240574c"],["/2021/01/01/compress/index.html","d6faae3c81d05acaeff78be6a2fe90ac"],["/2021/01/01/infinityfree/index.html","f1666f6b5034c8b618dccc61a4705bd8"],["/2021/01/01/硬核翻墙/index.html","2136bdc9dacc7bcdbba2994ce692ee0b"],["/2021/01/02/qq/index.html","7a51652218d748746963805a2d84938d"],["/2021/01/03/netch/index.html","d22d287e7dfbccec8cf9678b23aab92a"],["/2021/01/03/waifu2x/index.html","a0776070e79be3dc2afef5d1a40aafbe"],["/2021/01/04/ads/index.html","66efa56b6ed98b2a778ae837fec61fb0"],["/2021/01/04/games/index.html","3c128dc7ce3ad979f6ff26bf80505c2c"],["/2021/01/04/heroku/index.html","176b07de10af197cbe315a5b02998b24"],["/2021/01/06/movies/index.html","c8a5ffbf31a2776198643a23fabf11b1"],["/2021/01/07/google2020/index.html","3054562383435b17dfa5ed5ef5060150"],["/2021/01/07/lucky/index.html","37eb2f9ae32c42c3b9c95c37a02700b2"],["/2021/01/07/spotify/index.html","0ddc044b1fe5b2651ab850fe8be9b5bd"],["/2021/01/07/thunder/index.html","9d48c025e5adba4150def312280cf654"],["/2021/01/08/adguardhome/index.html","a960f4f0fe05f8f9f8dd8ae5f52533f1"],["/2021/01/10/IBM/index.html","5248ff5b6c27d3935bbcacbbbabadefa"],["/2021/01/10/potplayer/index.html","65686d8b59219c799339dd5e1dbe4535"],["/2021/01/10/sakuraanime/index.html","b4eb87bcc759e3dac9aaca627fa9f9f5"],["/2021/01/10/美剧星球/index.html","99e1f704480555591792088417fc94ee"],["/2021/01/12/telegraph/index.html","de7f93430aa94d646375a4084f9c0b8a"],["/2021/01/14/comics/index.html","b266442233d6bf82232c217b4f14765c"],["/2021/01/14/ftp/index.html","36de062c290aa29cab749edaaf2848c5"],["/2021/01/14/oraclecloud/index.html","d9129a00cc4336198f7c5410b1f605b0"],["/2021/01/14/porkbun/index.html","f2e0c75996f7aabc260f148ae6715aa4"],["/2021/01/14/powertoys/index.html","dfd00ba3d9e41a9075ffab133108250c"],["/2021/01/14/taptap/index.html","41e24817459006bba7911871e6355241"],["/2021/01/14/ubuntuvsftp/index.html","52917412834ec9e7877152898c873400"],["/2021/01/14/小说/index.html","78171e7c73df0aa14ec6a6fad77267f7"],["/2021/01/15/freeproxies/index.html","a113ba2c801c9672ab6cbc12974c8a8a"],["/2021/01/15/incaseformat/index.html","b6681e38567aa6f23d52e933e763fb2b"],["/2021/01/16/euserv/index.html","527a96aecffd0955a50987b6753d2d0e"],["/2021/01/16/winxray/index.html","8385487a53225b4e8ad27af87211cfe7"],["/2021/01/18/qqreadhistory/index.html","e4c2cf7b5b32fbde8aca4c33d3ce15e4"],["/2021/01/18/qqrevoke/index.html","d5091e304a0e6f21d95c3aba4719d4d4"],["/2021/01/19/freevpn/index.html","3f20a55af657b6b3a879256681fcdfaa"],["/2021/01/20/browsertrack/index.html","11bd66d3fa33739f660fbc829fef06a2"],["/2021/01/20/v2ui/index.html","41b347f7f49d3eb335cdcc8aa801a129"],["/2021/01/21/failedtoconnect/index.html","620ce0ab5340178d2d0764cd266f5f09"],["/2021/01/21/gitcalendar/index.html","af730e9344b107da9fe5d98dcaaf9713"],["/2021/01/21/markdownformat/index.html","673c4a6da5e8ab338c2911acf435def5"],["/2021/01/21/markdowntable/index.html","74c4d6f02a040d5a6d6969930c3a8388"],["/2021/01/21/vercel/index.html","b3580c8a0ef2821b4fee5016933fb00a"],["/2021/01/22/hardware/index.html","2e32d5b0ace96737e7b415b5230b61d3"],["/2021/01/22/muviz/index.html","45a2ccaa2f65ed279a3c6d2d98b127e0"],["/2021/01/22/randomapi/index.html","2901cbf5bbf8bda5ea39533ca1f957a3"],["/2021/01/22/searchimages/index.html","d7bfaca7cff402624c56d4d2fbb5daed"],["/2021/01/23/RX文件管理器/index.html","87a0786de58aeb0e33fa041c50c64258"],["/2021/01/23/chromeflag/index.html","0b6fcb5fb2ce820c30558cff89945a59"],["/2021/01/23/qttabbar/index.html","f865f588fd394a33ee840e58a97044fc"],["/2021/01/24/githubspeedup/index.html","0de3468781c814b3821673666b23dabc"],["/2021/01/24/jsdelivr/index.html","8ce5f6b041e48c9f1253a55378223b59"],["/2021/01/25/note/index.html","669b779ff0a150cde9159315fe904fd4"],["/2021/01/25/soul/index.html","3930e4f3840551e3810d25aba5689e31"],["/2021/01/26/herokuxray/index.html","6ac21951d30fb54f563b1dd71e5a6c93"],["/2021/01/27/proxypool/index.html","04eadca08b50e8ac1e2498e87d66869c"],["/2021/01/27/tracker/index.html","e2c629feec78193067d0834134320092"],["/2021/01/30/pandownphp/index.html","f42c4e306d30c769b7c86e435158e1d9"],["/2021/01/31/newgroup/index.html","e9f2b225da9da52e8da9d910611b31ad"],["/2021/02/01/clashlanguage/index.html","9d5e3e4ccefa6fa29157eccb76a6ca09"],["/2021/02/01/encrypt/index.html","93c27d36ea210873d9db7c950ad022db"],["/2021/02/01/footermotion/index.html","7a8887159ad6e220dc176110e2a0f0fa"],["/2021/02/01/gitter/index.html","51cf222890cb02e5fe1b78cfd91619a9"],["/2021/02/01/pixivtop50/index.html","7e2e41966cd4285f9801ffd613a388fa"],["/2021/02/01/scrollbar/index.html","be8d244ada34aef9ba534d10292935bb"],["/2021/02/02/clover/index.html","76491fbf921b588c85e77e8e25d6d260"],["/2021/02/02/maya/index.html","9480ed0abeaee41fd74015391bb20a49"],["/2021/02/02/speedcontroller/index.html","55d8777b241f10512bb3b10b69c69f36"],["/2021/02/02/yesmusicplayer/index.html","87cf09252c5f776ba518f14ef62e558a"],["/2021/02/03/lenovoonelite/index.html","86d9baffd29fe98a04b780a594aa53d6"],["/2021/02/03/skipads/index.html","1ec9098b2463ff8aa1bb6853277ddc59"],["/2021/02/04/picseed/index.html","872e0d4721108b478b45f67e2d192401"],["/2021/02/04/renren/index.html","2a1dc84060992ea93edd6b31f15f9ad1"],["/2021/02/04/serverstress/index.html","3e026e66cc63f4311e91c98afe3348d5"],["/2021/02/04/wikipediazh/index.html","582e11908f883bdd95e454577753b396"],["/2021/02/05/googlevoice/index.html","3b77b4a3a9636fa792a42f396b495c94"],["/2021/02/06/clashconnection/index.html","331942aa4355be456252918d2455526f"],["/2021/02/06/gvtransfer/index.html","e5ac17f866c8af34bed68e2515606e12"],["/2021/02/06/todesk/index.html","8a5a4002d559a47f2826538d1c923086"],["/2021/02/06/vpnblacklist/index.html","ead87f5cb97475f19d32095bbe4cb45a"],["/2021/02/07/mklink/index.html","7eb126af33eb2b1e0d111583e3a05a11"],["/2021/02/07/speedtest/index.html","c3537424adca80b6a45ceb71a8a96ffc"],["/2021/02/07/translate/index.html","46d2c4830b60836f55ab55f433be6ccd"],["/2021/02/08/ewomail/index.html","2053dd214a619fe7713b2b57a085827f"],["/2021/02/10/officee5/index.html","df9f3572fca0c3a7f41868500653323b"],["/2021/02/10/raidrive/index.html","80e7209112518267b388cc04445cbc93"],["/2021/02/13/e5sub/index.html","b501d82a2cad6ea001e2c719568e1b5e"],["/2021/02/14/screen/index.html","177496001e8b192d542ae80e356d4470"],["/2021/02/15/clashtun/index.html","515e8a0690f8870ba0cc46910af94f8a"],["/2021/02/15/messageboom/index.html","e40eb05cf7a4354e26e6d51fa79db790"],["/2021/02/15/oneindex/index.html","c514fa6cfad7fbc6f848f264740344b8"],["/2021/02/16/govsites/index.html","2b5df98ee21d6e2f23db5773c162264d"],["/2021/02/17/hexototypecho/index.html","4cc1834d2cfc8aff0f938ea791157ef8"],["/2021/02/19/fiddler/index.html","c5e7bc967d22f92c92e68d29776ae5af"],["/2021/02/22/potplayerset/index.html","1acaf50c342e3f44a343cfe8c4f77862"],["/2021/02/22/studyresource/index.html","978dff735014658bcd47e328cc7d564f"],["/2021/02/22/telegram/index.html","b648255276be3953b319db51e6cf1757"],["/2021/02/22/videos/index.html","1ee86f3859b63f78eba4ffeaf348faac"],["/2021/02/24/mtproxy/index.html","3a6070217358d4bc43675f70a250eac4"],["/2021/03/10/catchcat/index.html","2539be58b846ca527de491459635ea73"],["/2021/03/10/neteasemusic/index.html","06968ed05396ee53d430eedd061342e6"],["/2021/03/10/surfboard/index.html","43be57f0d737d2977d5e96e5c366375e"],["/2021/03/11/vpnandjc/index.html","1ba3ceb4dd9f4e03674d3017371d3c3a"],["/2021/03/12/qrcodes/index.html","91a8b68a6ffa725a8ae9f962e4dcc8ac"],["/2021/03/20/qv2ray/index.html","08ec4f995580ff011cd6421ad253a349"],["/2021/03/22/freevps/index.html","7c02c105735b67c6642c856ae209ef80"],["/2021/03/24/tgstickers/index.html","36c3042f66a02becd82e830a716b7752"],["/2021/03/25/clashx/index.html","4748d1c9029b6cca63b82b9b411a8241"],["/2021/03/26/bingwallpaper/index.html","02691cc668b9141c61b7297691b3fb14"],["/404.html","cc2e582f9bf2447e35759e9daa878a9d"],["/archives/2020/11/index.html","488983018af59c5ea36bd9c43e24f6f6"],["/archives/2020/12/index.html","33b02d456f22758c3c44185b6cf9f16f"],["/archives/2020/12/page/2/index.html","7e6101172a982fb1ca52ac67c3577f44"],["/archives/2020/12/page/3/index.html","748450d478270f4bad5256cbc29ba73d"],["/archives/2020/index.html","dde0b1c0fa247719295c449b52245704"],["/archives/2020/page/2/index.html","cd40816a4c89891ead35bf555181401a"],["/archives/2020/page/3/index.html","d9cf750b08a124586768f2c6b00d5821"],["/archives/2021/01/index.html","68d0602770c44ee47c150fafbfdb2075"],["/archives/2021/01/page/2/index.html","818695d0d0f85dfe828515c4cfa6bfb9"],["/archives/2021/01/page/3/index.html","ea1bd9d1535fa6c9ea0b68534fba7a62"],["/archives/2021/01/page/4/index.html","04d29f731a5d7f59b6c8e7320bcc776c"],["/archives/2021/02/index.html","9225521cd3d2876c46f7c3051b1be700"],["/archives/2021/02/page/2/index.html","181643b8c9bd6d10d2f917dd9cc3e687"],["/archives/2021/02/page/3/index.html","3e25f5d7f8b90b1ae264bdfee126669a"],["/archives/2021/03/index.html","c72c5f96c7cd55284680af6711a7dfd0"],["/archives/2021/index.html","0e39aa633f7cb0e9474ec009acc6305d"],["/archives/2021/page/2/index.html","f5e6f37ac3a9ad95851d5a89fcf56223"],["/archives/2021/page/3/index.html","e70868da60a0706319e4227c3582bb74"],["/archives/2021/page/4/index.html","a84d48d68bfe0dbdcca3900e1f4ca75f"],["/archives/2021/page/5/index.html","a465aea4dc254dbfde11ab83ef9a3a8e"],["/archives/2021/page/6/index.html","dcfcc0cf08c170fbfabb22123344df09"],["/archives/2021/page/7/index.html","5beabc0201164dc8d8f2371f159c8cb5"],["/archives/2021/page/8/index.html","622be7610bc1a853874ff5660a393340"],["/archives/index.html","51fae9a34f67977a865b30e00d1e3865"],["/archives/page/10/index.html","ee0e8ca68b1968f7fe92e571d9c620d6"],["/archives/page/2/index.html","35f2a89910550cd209a1ffb5e478877e"],["/archives/page/3/index.html","0b7910b0df49d9371166696b837f86eb"],["/archives/page/4/index.html","aaedffb5de24473a30629032546d4e99"],["/archives/page/5/index.html","23d2c97633a29381621cd706473c8477"],["/archives/page/6/index.html","3402a928824f0936657036b2910db594"],["/archives/page/7/index.html","2a9faa499d893b4b62add1f4b8a588d2"],["/archives/page/8/index.html","2d56f3379f350dfda8ba6f488b027c30"],["/archives/page/9/index.html","f91958349959f3b7cbead3715cb6c39b"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","c722c4b2c4a727284cd5a29c3c885564"],["/categories/index.html","0511713ad7b640f24c393564968a2b9e"],["/categories/下载/index.html","188660bdda0e84666024c0642071e943"],["/categories/安全/index.html","bec78c40003380d9391eed722927d61e"],["/categories/建站/index.html","ac8d4fcdc3b84dcad2cfaa23db097712"],["/categories/杂/index.html","24488cedf681d9a0873b29a072aee1ae"],["/categories/杂/page/2/index.html","8cefbbb43c55d8777688ae17ad82557b"],["/categories/测评/index.html","0a8e0f490eaa8d2bb17bf42407976fa2"],["/categories/科学上网/index.html","b4217071db8397dabe3b59f4cad86471"],["/categories/科学上网/page/2/index.html","0dd5c346471a5a772c0c3e0020bb4bfa"],["/categories/编程/index.html","af7844e2a54e9901a0594f1d4ab02c6c"],["/categories/网站/index.html","1fa89faf0fead50efa708ace41637344"],["/categories/网站/page/2/index.html","a5b614890fcfc1a62836ccbceb31c6f7"],["/categories/软件/index.html","9b153ea15bf9a55026dc80c79ba14239"],["/categories/软件/page/2/index.html","798f3b644f1d5b8030840e9eb294be93"],["/categories/软件/page/3/index.html","60de5fb3979d169dbfe00074fde27b77"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","5bce284ad32c9b16fb1687b0b4d70a4c"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","c15ca1d3aa15960cec797e706bb9869e"],["/ios/index.html","5cda62c46bea6bfb1e0366a332876905"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","aa1f535eb5bd8d847af7b085bcab0d02"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","3e8b2e9e3a0bab8f8a5124475a5cc04b"],["/page/2/index.html","f7e3df8ee6b0c62019f620a0a613be6b"],["/page/3/index.html","d7a068846cc0c67e2e5ed0757b372640"],["/page/4/index.html","7eed6478362731db8464c7a7fb9eda64"],["/page/5/index.html","1c9ce7ea8c4c998d8942c516759f3a39"],["/page/6/index.html","4f5f60def1b863eeb5698ae6b2edf5e9"],["/page/7/index.html","50920e7bcbbe587397b81bbd0e573aa0"],["/page/8/index.html","23c17fcf1386bc4fc628ace901641d0b"],["/page/9/index.html","9b6a29c89ca536ddc35415e12d84d551"],["/payment/index.html","8941aa0176a74a9d9ec8ee41f5455f51"],["/privacy-policy/index.html","51a2ff8421873a1cb119c22e5dac0925"],["/rss2.xml","03ddf9632431a09e9ea0f079d4843445"],["/search.xml","363337394937059a87f53ebf8dc28dff"],["/sitemap.xml","f3da353db4274199715fe4317f551989"],["/sw-register.js","3b8455fc3d99edaea9966f8099ca2a6f"],["/tags/5t/index.html","81a5963593d602e41ed803965930b994"],["/tags/Bing/index.html","b3e8e248586087ea84ee1169427d78a4"],["/tags/Clash/index.html","ad64282f9216cae14fb1ca84da9d2b0d"],["/tags/Clover/index.html","a1a9fd75f467107a1e6729e7fa3f4027"],["/tags/E5/index.html","8e11fb17352581872f25a8d8a040bc65"],["/tags/FTP/index.html","f34a0417780df472ce038b61b6270623"],["/tags/GitHub/index.html","8799c59e6923ae6d7be6013dce3764b0"],["/tags/Heroku/index.html","0808868212a041e96c01d5ae7bff41e4"],["/tags/Hexo/index.html","0557b576b3ec41fbcccb276ee583a32b"],["/tags/Lenovo/index.html","549f44560b51a4d57de1806d538b5ccf"],["/tags/Oneindex/index.html","49aed23b606a206b6e46db8fc0202e23"],["/tags/QQ/index.html","00f5d1aa0adddc7bc587cbeaef18387a"],["/tags/QTTabbar/index.html","4f0b0386bdd209bcfdf69175c6050805"],["/tags/RX文件管理器/index.html","537411e3d339c5b8e41d9740054c4464"],["/tags/Todesk/index.html","d0d8d3e2244f4702edcef983a42266d2"],["/tags/Vercel/index.html","2ab2f200ccc02e60f8b61b8354aaef58"],["/tags/ads/index.html","f69e6fb6484dd032b5475a724735783a"],["/tags/api/index.html","6889555d31e36a8c07b06f225667677b"],["/tags/app/index.html","491802e1003a512a925e6e7dc03eba38"],["/tags/blacklist/index.html","556391188ab59c015faf6af41d3dc271"],["/tags/butterfly/index.html","ef69f2c27af00bbe0ac680a04d1ded23"],["/tags/chrome/index.html","c6f347d211409df23986f20f3c695271"],["/tags/clashx/index.html","f704eaf49e24b67e9759b68d7ebd3f71"],["/tags/cloudflare/index.html","7bc252d94b38d43700aad3aa1e008b7a"],["/tags/cmd/index.html","59fc359eddc4cc8b7e490db8630bc4de"],["/tags/c盘/index.html","907e6de6b58ff73457aecbab3476122d"],["/tags/email/index.html","67e9e62ead780599ee6236008539dfdd"],["/tags/ewomail/index.html","76e66ebae21f5580bcf35aa6cfb5a22d"],["/tags/fiddler/index.html","11be22a8003973609d719a4c78538be2"],["/tags/flags/index.html","182f862a821a4ca4d3d5ec865b98253f"],["/tags/footer，页脚/index.html","fa8aa107661bfc4816b1c801effca3ba"],["/tags/galgame/index.html","23160b9430cdc557d855bab1d9f1e654"],["/tags/git/index.html","a992598f61aa459a132ef4599612ff7c"],["/tags/gitcalendar/index.html","884d0e3eb4e3f3a3c5f36260551c2be1"],["/tags/google-voice/index.html","2d6b1cabdc8bba0ed13b41c59f168b6f"],["/tags/gv/index.html","ac4fa57eb22b58a9c6a327eaacd08486"],["/tags/html/index.html","4d41a21ee6499a70832a833e8b8e3a73"],["/tags/index-1.html","bf0b265aba2c1c8be0dae7f6c11f1549"],["/tags/index.html","5457a7fc6a9495e3c33783830c39facb"],["/tags/js/index.html","f8514817e4647779980754a63c3649f5"],["/tags/jsdelivr/index.html","268efdc313dfa9ed6eb1a448e1bc4bce"],["/tags/linux/index.html","839024f34ca17010d130fbaaef0f1d70"],["/tags/macos/index.html","818e2c267635dd581a9328ecf8137056"],["/tags/madVR/index.html","19a192a42ad1b2efc556aa84dc09c867"],["/tags/markdown/index.html","938bad3b359402acf04e799bb319bfb9"],["/tags/maya/index.html","4e0b2c7b3da97faed99faed85d11f4d6"],["/tags/mklink/index.html","66bb29df0a729f5bb1a906576a98d15f"],["/tags/office-e5/index.html","12deb7e239a9cb2bf52e4a3e7929c86a"],["/tags/onedrive/index.html","f4584a55b7deb6e204aa738d8858ac99"],["/tags/picGO/index.html","06a2b6d8f9d113b421eb2b7231406d55"],["/tags/pixiv/index.html","66e93cffe53c0b7742bfa691d95f9c11"],["/tags/potplayer/index.html","709b74ab1680f7bb3aed21b9d5fc8e21"],["/tags/proxypool/index.html","60b966cc56475b54e85a8ea8b7867eb4"],["/tags/qbitorrent/index.html","8febc238664d5b7dcf1193ead88ae957"],["/tags/raidrive/index.html","010e846f9c2875cc39b1ac48135a7eff"],["/tags/screen/index.html","aa9036559b7f703e8358f396714c03d6"],["/tags/speedtest/index.html","a3b2fd143640577c825dfe53704b6a12"],["/tags/ss/index.html","8e71f028cd9d15922ddd02e1ade19d7f"],["/tags/ssr/index.html","38f318b504069fdbb2625af522d7c994"],["/tags/stickers/index.html","27fc0a51a7a652833dbbc04b91b2cd6d"],["/tags/surfboard/index.html","02c44fd86c3c9b2d1c320ee745adba30"],["/tags/tap/index.html","668bb63e0e07a1d19a8bcfd71ed17502"],["/tags/telegram/index.html","df369becdf01adcb9802f0d830fe32c3"],["/tags/telegram代理/index.html","51107f467bb8fff90d97aa3ec0a1c582"],["/tags/tg/index.html","15a3321053dc9e2532b463866bc5760f"],["/tags/tg代理/index.html","62fb19aacb5189d1ac61ecdc7e5f5069"],["/tags/top50/index.html","ee31bb7e3589e1593f8945b15b6423b2"],["/tags/tracker/index.html","7e03caea6b1d6804988ee8ed0c4a9b58"],["/tags/translate/index.html","ba3915367f6856badeb975e4fd2a34ff"],["/tags/translater/index.html","4a514da3a6ca32847e567f95c999db5b"],["/tags/tun/index.html","2742e486612576284247795fe2046be3"],["/tags/typecho/index.html","eec818e560448bb8fb5114031eeb7862"],["/tags/v2ray/index.html","ae48a82aaa745675502ea97d9a8d4e71"],["/tags/vpn/index.html","4dd72e5e9f3666af8d63b296f9207bf9"],["/tags/vps/index.html","c27029db735b5431fe572226a7779ac1"],["/tags/wallpaper/index.html","08c0dc92dfb8a498ff9797d53951a99c"],["/tags/windows/index.html","36a3522423d9cb650ceeb5f0265396b5"],["/tags/windows端/index.html","f8a484122c1a1365fecbd619ab653569"],["/tags/xray/index.html","a72b8a3738c5ba56f70b70992183be20"],["/tags/下载/index.html","53019f20276a31a9d1aec65049a86990"],["/tags/不限速/index.html","8a9797ab4ae1d62fca7faa176e2065d2"],["/tags/个人网盘/index.html","5dceb0905ae1625fd2f8f009f2307b13"],["/tags/主题/index.html","720c24c55fdedd2c33865c6aff1bc902"],["/tags/二维码/index.html","3e519f4fc3282b9ed77ad864476a7a1d"],["/tags/云便签/index.html","1b8176c1f2509e1b007611f2d35d7e41"],["/tags/云盘/index.html","4e11c38fb9df0d8998734fe6313a63e0"],["/tags/人人/index.html","ad75689fba077f47cfa1b7141070a21b"],["/tags/代理/index.html","c3ccd01bbd74d7021baed2a93610e969"],["/tags/代码/index.html","356e3ede2ac42df3e83bdfef301cfbed"],["/tags/优选IP/index.html","48afc7459ad775a5dd3d2fc1f13e4dab"],["/tags/便签/index.html","316d9caadbbeebe27b1a16c8a8215093"],["/tags/保号/index.html","78824f8c51331d284c41bccda9ae3fd5"],["/tags/免费/index.html","90461809d6100f3c647d5a6c57b92f73"],["/tags/免费节点/index.html","41636b22cc45ea66438cb83b9ea59f79"],["/tags/加密/index.html","8aab2ddaec2307fa8df1e053b25e2f7e"],["/tags/动画/index.html","c262eb969df438478d10cd2b66079a78"],["/tags/博客/index.html","5884786a78d9059e04a2f5248fbbb5ae"],["/tags/历史记录/index.html","2017a5da54a9072af07aedcd024f9c47"],["/tags/压力/index.html","3cb15583e605e9d5c9624e7587d60752"],["/tags/压缩包/index.html","9792515bdde535853b665106dabe4113"],["/tags/反代/index.html","668b0bc5224b462bceb042f330da567c"],["/tags/可视化/index.html","ee113b3d004835e63d14c3f155dd407c"],["/tags/命令/index.html","ca643e45f2b033fbf5a806cc5fcb620b"],["/tags/国家/index.html","608a5c16979f81f0992c745dc1885d6c"],["/tags/图床/index.html","1f3f56ae4bd2c31ac71667299d516701"],["/tags/图片/index.html","9c9a9fe81bc8066b26c162b821664f04"],["/tags/域名/index.html","53e51cca92b0c93a71db3b5bba1eab7c"],["/tags/壁纸/index.html","055e2d7c71862b1b07562fddfe5c0589"],["/tags/多标签/index.html","fe07966063709365a6869841cf9d623d"],["/tags/存储/index.html","e7ee7fbcf199c694dc691d8e876f2669"],["/tags/学习/index.html","4fa418723bff82a85e738e652837d09e"],["/tags/安全/index.html","f3521ffa3af2f4e63946cbea073c630e"],["/tags/安卓/index.html","d0346026aaad555f3d11e6eb4ee4cf1b"],["/tags/宝塔/index.html","6822915d2ed8bb78d3025accb1f82865"],["/tags/小游戏/index.html","daea6f714fd7621872e8ac75ab826618"],["/tags/广告/index.html","86f373ed081174c81e948c5cded55c90"],["/tags/建站/index.html","64fc49ca08bcce0a95444669ac783447"],["/tags/影视/index.html","3b36d456658c9fcb1f6b425c6fa84fc9"],["/tags/微信/index.html","fef2a141bd2999632d1046f95154931f"],["/tags/快速启动/index.html","0de2900b750b23c292415d065e75fbea"],["/tags/手机/index.html","e897b79a4b5515321cf0595da51d533f"],["/tags/托管/index.html","e643b14c2e567ee9893bfa0a5c63a68b"],["/tags/抓包/index.html","6a9767f91d3027bd535e4e38758227bd"],["/tags/抓取/index.html","b45526f14c618eb2aa1523667346ef2c"],["/tags/投屏/index.html","6a14a8505b0de2654fb8c0845b03277a"],["/tags/拓展功能/index.html","a0a7ceb93ddc6aacc96c46376e35e8aa"],["/tags/挂载/index.html","059f396beac5c3529e8efe8b27484299"],["/tags/指纹/index.html","d37a52831221028edfc113dfeaaf1883"],["/tags/接口/index.html","00e31aada2482e8ba2d63ef55adbf84c"],["/tags/提取图片/index.html","70ecedada01929f17b147cb75e289bcc"],["/tags/插件/index.html","55c9ae9cf08794da8d6cb4f1f2dc6ce6"],["/tags/搜图/index.html","2d0d89dda7ecd51dc5cdff05e2a0a9c0"],["/tags/搭建/index.html","04fac1af54e6ac95c9c5208bd2781135"],["/tags/撤回/index.html","d0ac85f522c7e028b3ca5fb3ec55e541"],["/tags/播放器/index.html","7d3415a53c56eaf33492128036a94044"],["/tags/支付宝/index.html","93bcd02bba5763ad1ceea27c0aef470a"],["/tags/政府网站/index.html","a17f5264a3e0b306487391db244279ef"],["/tags/效率/index.html","dcf2a8b7e230ad7799166808ba4d7ce8"],["/tags/日历/index.html","c21da0023025a684c440fe48a34fb3bb"],["/tags/服务器/index.html","48fe138259d6a2ab259269ab9487c212"],["/tags/机场/index.html","5a20afa813705da6dbecebd28d696dc1"],["/tags/桌面/index.html","b6f54cf44b8d6fe885ee60d1e6ff0ae3"],["/tags/梯子/index.html","57ee4732033ea4485a52281ac2a4a085"],["/tags/检测工具/index.html","87fbe0775e998af959e996c71fa8870b"],["/tags/汉化/index.html","56c5f62e990f5087c65feae057d3a9b3"],["/tags/测压/index.html","f32d135c18348b65237375fbd3b21a53"],["/tags/测速/index.html","4e564c187a8193c4436ea05b0d562275"],["/tags/浏览器/index.html","18ef960da18349b4f1a0f671a4783781"],["/tags/清理/index.html","bbdd2043c5af547ceeb872985e6b67e8"],["/tags/滚动条/index.html","d203cdeff016c5a3d840a882e0854fa1"],["/tags/灰色歌曲/index.html","b6c85fa3e83d8069ab4f93ebb8534ac1"],["/tags/电影/index.html","aee622e6929a03e4f417e338a7644321"],["/tags/电视剧/index.html","a2527d41e2a8bf5f0f93be08c0af8c04"],["/tags/白嫖/index.html","ecd0f4e7da70da93bc446b6d558b0f09"],["/tags/百度/index.html","728e1be12105e9fa9bfe3cca110132ca"],["/tags/百度云盘/index.html","254758d22777f0ddd35afba6fe3f3915"],["/tags/百科/index.html","b6d801d6644f2eb2b14cdd36d433a816"],["/tags/短信/index.html","ded7c4f191b5cb79d7d1bcdc6f032bf0"],["/tags/硬件/index.html","98bbb3cae0c448f0b6c61691f9e1b9ba"],["/tags/科学上网/index.html","4f4b59fb45587ca88241788985bc6ff8"],["/tags/空间/index.html","2a82aea2ced5e37585495c511b54ae53"],["/tags/笔记/index.html","7aed2272a029fe79da8dcb25226af437"],["/tags/简洁/index.html","37cc88576349cef40b3fdbb0bc648418"],["/tags/简约/index.html","4c7e5bdcf0d76b5a2b5321e7d8f7c042"],["/tags/维基/index.html","ce4570e6b38ca3a28ef31ea795cea4af"],["/tags/网易云/index.html","b0f2c51e7e5c87b7b3c2c2fe1a0ec948"],["/tags/网盘/index.html","49ed242b3c00d6369ae22efbc59305d4"],["/tags/网站/index.html","9efa4a0839195d6811c109378fd2c408"],["/tags/网络/index.html","976f5fb8781e24bb63033b249eef45f5"],["/tags/美化/index.html","ab6c747bb8e7bfbad6562b29d4a849f8"],["/tags/翻墙/index.html","63434544661d1b8bf23f01cd441e93e9"],["/tags/翻译/index.html","4dc1e268e52cd1d83432c662cf8f6242"],["/tags/翻译器/index.html","365323df10a454b8ebec7e4ebd5d81eb"],["/tags/聊天/index.html","9baabc621e0c85e3835eb87c820c0c64"],["/tags/聊天室/index.html","2d3ad42a7d54641e2f3533ca6bd55910"],["/tags/联想/index.html","83b0a9eb16a4e952ffc681bb096f2aed"],["/tags/节点/index.html","6b6ad7aeb2b67174604b51353cd0a933"],["/tags/虚拟手机号/index.html","2f90acafa474df1236d4f97993642bca"],["/tags/补丁/index.html","6a5efb39318b8a8f607d8c625be65237"],["/tags/表情包/index.html","89f4ace4563bd2c3177f5df19570e530"],["/tags/视频/index.html","a5db3aab3ba71deb86377a8733d51fcb"],["/tags/解析/index.html","3b980576f2d275593a85d64f087165e4"],["/tags/订阅链接/index.html","305968273a144c931ae067decb13dc18"],["/tags/记录/index.html","5ee8eddb99af10dcb1d5d4dfd518ea3c"],["/tags/识图/index.html","4354ee5836cf5e7204f1f4f6b7c05268"],["/tags/语言/index.html","5905c1c9be6e395d36fd779c2d8ffe62"],["/tags/资源/index.html","13707f4370245232c647ac5cbc959c68"],["/tags/资源管理器/index.html","c3131f8447514572b2c8d6de32acc75f"],["/tags/转移/index.html","f2e76312ed5960deadcfc4ed4feb2a7d"],["/tags/软件/index.html","2ac50a7445e22b63613dc65faf1ee121"],["/tags/轰炸/index.html","671f29eb8b05294057409db0f88bfd32"],["/tags/迁移/index.html","5fc7db3705ac4816e4296819584b2da2"],["/tags/远程控制/index.html","5f2c8eec7c649672da5fda3be5ae77dc"],["/tags/连接/index.html","bc3746d5af365c403b6ad8b1119defd6"],["/tags/追踪/index.html","3daa57232a8ca6a6496d295e5e1c4e63"],["/tags/速度/index.html","eea7b747933cbcdf9ffcf09d2e9d0f4a"],["/tags/邮箱/index.html","3a9eec259644a1f02ed43f9bd1421bd2"],["/tags/酷炫/index.html","8957f77158a12a9a47656da6f155e8f7"],["/tags/钓鱼/index.html","f6a51a106ecd7680487728248309c4d6"],["/tags/镜像/index.html","b867beb5046c771f1bd83cbc43aeeefe"],["/tags/随机/index.html","b9e3bba27f224778450c2ccc68141336"],["/tags/隐藏/index.html","d085ba45b8a846cf7b021fcfd1f4de09"],["/tags/面板/index.html","b32185b86afebff44ee33d97297c3441"],["/tags/音乐/index.html","1af1c6c5d4436280eabef57340387342"],["/tags/高颜值/index.html","a63f2170670f2c0ebc5844ebf6f98e67"],["/tags/魔改/index.html","46c36eb6073807f3d58d3807739bbf70"],["/tags/黑名单/index.html","5bacd8f42b4822816b9fc9065bb6a34e"],["/urls/index.html","803d5142978af54fbaf93d29771b7a79"],["/vps/index.html","a63b560cd3127e8ccf16e2b6d1866779"],["/支持/index.html","8854826d02d3403aa507a276be933e4f"]];
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
