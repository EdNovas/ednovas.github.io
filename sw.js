/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","e0ce3e5212bdc47435a9a2223e559bdf"],["/2020/11/29/clash-windows/index.html","a12b2294b5ff1f2a1eb1129f38f18575"],["/2020/11/30/websites2/index.html","7cd2fcbc9e58370f9d816b52d8a8f3f8"],["/2020/12/04/iphone4s/index.html","c68e861314a17f07ace1ee2f405c5415"],["/2020/12/04/onenote/index.html","7f67d11e1cf411d42a05b311515548d1"],["/2020/12/04/wesites1/index.html","a789a66b0d9f8f05f66e84e7084b7e14"],["/2020/12/06/nokia808/index.html","114cdcb55a8c26210c10523a7adbb369"],["/2020/12/07/ipad1/index.html","ce923b220dc519d7601e7ad5cd601e9a"],["/2020/12/18/freesubscribes/index.html","b7d05d762a26daa3b8ec3241d2af6355"],["/2020/12/19/musics/index.html","9fabb5fdee089a40b4d08f32b813b1a2"],["/2020/12/19/shadowrocket/index.html","170d3147a4be37bc04aad5cb0782d2f2"],["/2020/12/19/v2ray-windows/index.html","7cc1ff0e9b797efd829562770e26a94c"],["/2020/12/19/v2rayng/index.html","eee0b1be9ba621123cc53b7ef8dd6626"],["/2020/12/20/beoplay/index.html","f3edcd038d10751e235756a72ff40301"],["/2020/12/20/订阅链接转换/index.html","928550d867743232ff12ca4e134eca7e"],["/2020/12/21/chrome浏览器下载提速/index.html","58d1f183dfe741a72db78a69fd786ce4"],["/2020/12/21/免费128线程并发下载xdown/index.html","bf4a3b1864be82d5e460bf8ff0df6861"],["/2020/12/21/免费32线程下载软件ndm/index.html","7c27fad07641f11f706cf58597e03b3e"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","4140f802e1edbe7e44a82f861b407e3d"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","da1e186c686d0b04299524cdcafdacc5"],["/2020/12/21/广告怎么知道我在想什么/index.html","0b1171ae7382e91d7f504d35f0132747"],["/2020/12/21/无名·引子（小说试写）/index.html","2140ab74c653735c2d2f61d50f5edbc1"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","6e5eee258769e5f03815c0d7ff0545e5"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","1f50303ad78fdc40e6b652719db565bb"],["/2020/12/21/高速轻量下载器aria2/index.html","fe2e4f90fe0da18f69acdaa424a85522"],["/2020/12/22/2020-cee-roo/index.html","f998dc1223eecd2052e5e25cb7c5e4b0"],["/2020/12/22/firefox插件、github、steam富强/index.html","0068d375904b7251cfb85162cadc9518"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","16ddf4126bf0d4c8805c727fbfc96c55"],["/2020/12/26/python-day-1/index.html","9bd2b36ea9f6c983da4b6273e5b069ad"],["/2020/12/26/python-day-2/index.html","d125d39fdae9b68207ca191147cfc852"],["/2020/12/26/度盘不限速下载方式一赏/index.html","a100561cf12be31b4ef0c6256752f023"],["/2020/12/26/添加开机自启软件/index.html","dd1659cb08624658369819666e039f67"],["/2020/12/26/电脑端截图方式一赏/index.html","f110a49b7cc82cd09df347a2a86d3fdf"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","1c40c277fa93596ba80a63fddd3b8148"],["/2020/12/27/最安全的浏览器tor/index.html","4657ad777b63da31fb05079f5f07f655"],["/2020/12/27/网易云刷等级和听歌数量/index.html","906c70578215fd9b207007003d0e58eb"],["/2020/12/28/freenom申请免费域名/index.html","3590be28308d597d3e2864fd382ce44e"],["/2020/12/31/机场/index.html","97bd8de868aeac4f86190b581da70e96"],["/2021/01/01/M1/index.html","fa5d61bf35de759839ef9d290240574c"],["/2021/01/01/compress/index.html","d6faae3c81d05acaeff78be6a2fe90ac"],["/2021/01/01/infinityfree/index.html","f1666f6b5034c8b618dccc61a4705bd8"],["/2021/01/01/硬核翻墙/index.html","2136bdc9dacc7bcdbba2994ce692ee0b"],["/2021/01/02/qq/index.html","7a51652218d748746963805a2d84938d"],["/2021/01/03/netch/index.html","d22d287e7dfbccec8cf9678b23aab92a"],["/2021/01/03/waifu2x/index.html","a0776070e79be3dc2afef5d1a40aafbe"],["/2021/01/04/ads/index.html","66efa56b6ed98b2a778ae837fec61fb0"],["/2021/01/04/games/index.html","3c128dc7ce3ad979f6ff26bf80505c2c"],["/2021/01/04/heroku/index.html","176b07de10af197cbe315a5b02998b24"],["/2021/01/06/movies/index.html","c8a5ffbf31a2776198643a23fabf11b1"],["/2021/01/07/google2020/index.html","3054562383435b17dfa5ed5ef5060150"],["/2021/01/07/lucky/index.html","37eb2f9ae32c42c3b9c95c37a02700b2"],["/2021/01/07/spotify/index.html","0ddc044b1fe5b2651ab850fe8be9b5bd"],["/2021/01/07/thunder/index.html","9d48c025e5adba4150def312280cf654"],["/2021/01/08/adguardhome/index.html","a960f4f0fe05f8f9f8dd8ae5f52533f1"],["/2021/01/10/IBM/index.html","5248ff5b6c27d3935bbcacbbbabadefa"],["/2021/01/10/potplayer/index.html","65686d8b59219c799339dd5e1dbe4535"],["/2021/01/10/sakuraanime/index.html","b4eb87bcc759e3dac9aaca627fa9f9f5"],["/2021/01/10/美剧星球/index.html","99e1f704480555591792088417fc94ee"],["/2021/01/12/telegraph/index.html","de7f93430aa94d646375a4084f9c0b8a"],["/2021/01/14/comics/index.html","b266442233d6bf82232c217b4f14765c"],["/2021/01/14/ftp/index.html","36de062c290aa29cab749edaaf2848c5"],["/2021/01/14/oraclecloud/index.html","d9129a00cc4336198f7c5410b1f605b0"],["/2021/01/14/porkbun/index.html","f2e0c75996f7aabc260f148ae6715aa4"],["/2021/01/14/powertoys/index.html","dfd00ba3d9e41a9075ffab133108250c"],["/2021/01/14/taptap/index.html","41e24817459006bba7911871e6355241"],["/2021/01/14/ubuntuvsftp/index.html","52917412834ec9e7877152898c873400"],["/2021/01/14/小说/index.html","78171e7c73df0aa14ec6a6fad77267f7"],["/2021/01/15/freeproxies/index.html","a113ba2c801c9672ab6cbc12974c8a8a"],["/2021/01/15/incaseformat/index.html","b6681e38567aa6f23d52e933e763fb2b"],["/2021/01/16/euserv/index.html","527a96aecffd0955a50987b6753d2d0e"],["/2021/01/16/winxray/index.html","8385487a53225b4e8ad27af87211cfe7"],["/2021/01/18/qqreadhistory/index.html","e4c2cf7b5b32fbde8aca4c33d3ce15e4"],["/2021/01/18/qqrevoke/index.html","d5091e304a0e6f21d95c3aba4719d4d4"],["/2021/01/19/freevpn/index.html","3f20a55af657b6b3a879256681fcdfaa"],["/2021/01/20/browsertrack/index.html","11bd66d3fa33739f660fbc829fef06a2"],["/2021/01/20/v2ui/index.html","41b347f7f49d3eb335cdcc8aa801a129"],["/2021/01/21/failedtoconnect/index.html","620ce0ab5340178d2d0764cd266f5f09"],["/2021/01/21/gitcalendar/index.html","af730e9344b107da9fe5d98dcaaf9713"],["/2021/01/21/markdownformat/index.html","673c4a6da5e8ab338c2911acf435def5"],["/2021/01/21/markdowntable/index.html","74c4d6f02a040d5a6d6969930c3a8388"],["/2021/01/21/vercel/index.html","b3580c8a0ef2821b4fee5016933fb00a"],["/2021/01/22/hardware/index.html","2e32d5b0ace96737e7b415b5230b61d3"],["/2021/01/22/muviz/index.html","45a2ccaa2f65ed279a3c6d2d98b127e0"],["/2021/01/22/randomapi/index.html","2901cbf5bbf8bda5ea39533ca1f957a3"],["/2021/01/22/searchimages/index.html","d7bfaca7cff402624c56d4d2fbb5daed"],["/2021/01/23/RX文件管理器/index.html","87a0786de58aeb0e33fa041c50c64258"],["/2021/01/23/chromeflag/index.html","0b6fcb5fb2ce820c30558cff89945a59"],["/2021/01/23/qttabbar/index.html","f865f588fd394a33ee840e58a97044fc"],["/2021/01/24/githubspeedup/index.html","0de3468781c814b3821673666b23dabc"],["/2021/01/24/jsdelivr/index.html","8ce5f6b041e48c9f1253a55378223b59"],["/2021/01/25/note/index.html","669b779ff0a150cde9159315fe904fd4"],["/2021/01/25/soul/index.html","3930e4f3840551e3810d25aba5689e31"],["/2021/01/26/herokuxray/index.html","6ac21951d30fb54f563b1dd71e5a6c93"],["/2021/01/27/proxypool/index.html","04eadca08b50e8ac1e2498e87d66869c"],["/2021/01/27/tracker/index.html","e2c629feec78193067d0834134320092"],["/2021/01/30/pandownphp/index.html","f42c4e306d30c769b7c86e435158e1d9"],["/2021/01/31/newgroup/index.html","e9f2b225da9da52e8da9d910611b31ad"],["/2021/02/01/clashlanguage/index.html","d2a71b5c6f113d99a388424b742ecb4f"],["/2021/02/01/encrypt/index.html","93c27d36ea210873d9db7c950ad022db"],["/2021/02/01/footermotion/index.html","7a8887159ad6e220dc176110e2a0f0fa"],["/2021/02/01/gitter/index.html","51cf222890cb02e5fe1b78cfd91619a9"],["/2021/02/01/pixivtop50/index.html","7e2e41966cd4285f9801ffd613a388fa"],["/2021/02/01/scrollbar/index.html","be8d244ada34aef9ba534d10292935bb"],["/2021/02/02/clover/index.html","76491fbf921b588c85e77e8e25d6d260"],["/2021/02/02/maya/index.html","9480ed0abeaee41fd74015391bb20a49"],["/2021/02/02/speedcontroller/index.html","55d8777b241f10512bb3b10b69c69f36"],["/2021/02/02/yesmusicplayer/index.html","87cf09252c5f776ba518f14ef62e558a"],["/2021/02/03/lenovoonelite/index.html","86d9baffd29fe98a04b780a594aa53d6"],["/2021/02/03/skipads/index.html","1ec9098b2463ff8aa1bb6853277ddc59"],["/2021/02/04/picseed/index.html","872e0d4721108b478b45f67e2d192401"],["/2021/02/04/renren/index.html","2a1dc84060992ea93edd6b31f15f9ad1"],["/2021/02/04/serverstress/index.html","3e026e66cc63f4311e91c98afe3348d5"],["/2021/02/04/wikipediazh/index.html","582e11908f883bdd95e454577753b396"],["/2021/02/05/googlevoice/index.html","3b77b4a3a9636fa792a42f396b495c94"],["/2021/02/06/clashconnection/index.html","331942aa4355be456252918d2455526f"],["/2021/02/06/gvtransfer/index.html","e5ac17f866c8af34bed68e2515606e12"],["/2021/02/06/todesk/index.html","8a5a4002d559a47f2826538d1c923086"],["/2021/02/06/vpnblacklist/index.html","ead87f5cb97475f19d32095bbe4cb45a"],["/2021/02/07/mklink/index.html","7eb126af33eb2b1e0d111583e3a05a11"],["/2021/02/07/speedtest/index.html","c3537424adca80b6a45ceb71a8a96ffc"],["/2021/02/07/translate/index.html","46d2c4830b60836f55ab55f433be6ccd"],["/2021/02/08/ewomail/index.html","2053dd214a619fe7713b2b57a085827f"],["/2021/02/10/officee5/index.html","df9f3572fca0c3a7f41868500653323b"],["/2021/02/10/raidrive/index.html","80e7209112518267b388cc04445cbc93"],["/2021/02/13/e5sub/index.html","b501d82a2cad6ea001e2c719568e1b5e"],["/2021/02/14/screen/index.html","177496001e8b192d542ae80e356d4470"],["/2021/02/15/clashtun/index.html","515e8a0690f8870ba0cc46910af94f8a"],["/2021/02/15/messageboom/index.html","e40eb05cf7a4354e26e6d51fa79db790"],["/2021/02/15/oneindex/index.html","c514fa6cfad7fbc6f848f264740344b8"],["/2021/02/16/govsites/index.html","2b5df98ee21d6e2f23db5773c162264d"],["/2021/02/17/hexototypecho/index.html","4cc1834d2cfc8aff0f938ea791157ef8"],["/2021/02/19/fiddler/index.html","c5e7bc967d22f92c92e68d29776ae5af"],["/2021/02/22/potplayerset/index.html","1acaf50c342e3f44a343cfe8c4f77862"],["/2021/02/22/studyresource/index.html","978dff735014658bcd47e328cc7d564f"],["/2021/02/22/telegram/index.html","b648255276be3953b319db51e6cf1757"],["/2021/02/22/videos/index.html","1ee86f3859b63f78eba4ffeaf348faac"],["/2021/02/24/mtproxy/index.html","3a6070217358d4bc43675f70a250eac4"],["/2021/03/10/catchcat/index.html","2539be58b846ca527de491459635ea73"],["/2021/03/10/neteasemusic/index.html","06968ed05396ee53d430eedd061342e6"],["/2021/03/10/surfboard/index.html","43be57f0d737d2977d5e96e5c366375e"],["/2021/03/11/vpnandjc/index.html","1ba3ceb4dd9f4e03674d3017371d3c3a"],["/2021/03/12/qrcodes/index.html","91a8b68a6ffa725a8ae9f962e4dcc8ac"],["/2021/03/20/qv2ray/index.html","08ec4f995580ff011cd6421ad253a349"],["/2021/03/22/freevps/index.html","7c02c105735b67c6642c856ae209ef80"],["/2021/03/24/tgstickers/index.html","36c3042f66a02becd82e830a716b7752"],["/2021/03/25/clashx/index.html","4748d1c9029b6cca63b82b9b411a8241"],["/2021/03/26/bingwallpaper/index.html","02691cc668b9141c61b7297691b3fb14"],["/404.html","56794286c521aadf25ce38a32c36a10e"],["/archives/2020/11/index.html","93630d8a3bcb6bba8cef44998818a3b4"],["/archives/2020/12/index.html","dcc2565a28a26a0f01a204cbe81fae11"],["/archives/2020/12/page/2/index.html","2ecd69f966e55f93bf10ebfaa2de6feb"],["/archives/2020/12/page/3/index.html","6379130f6caa8f7e7881518a5ea04906"],["/archives/2020/index.html","bbee78632d623dcdd64b776310538fed"],["/archives/2020/page/2/index.html","9eafb57269e7175bce0b9722bd07f8c8"],["/archives/2020/page/3/index.html","f28c416f143b873dec5bd99f226c2454"],["/archives/2021/01/index.html","369f94775ff4a736d08ccee8f75246d2"],["/archives/2021/01/page/2/index.html","9e1a5fd6f00da17580ff52f04cdce0a9"],["/archives/2021/01/page/3/index.html","6a50d787ff4980877dbe7ae2a475debe"],["/archives/2021/01/page/4/index.html","42c01fad3f0fda16c614420257ec8931"],["/archives/2021/02/index.html","abb2d01fc22cbceba9711d6ac651ad6e"],["/archives/2021/02/page/2/index.html","9661988511289085a68d9951966c0189"],["/archives/2021/02/page/3/index.html","60b6006618046eb05cc524674f7323ea"],["/archives/2021/03/index.html","638714a871ef6d2c491507f04ab931e5"],["/archives/2021/index.html","2e2cc8acabca75f60791d435f0fd1a98"],["/archives/2021/page/2/index.html","b90c6de2cae971f374df2ebfe024dfbc"],["/archives/2021/page/3/index.html","30e6cc2e02c9e48e3c7d5cf592e24234"],["/archives/2021/page/4/index.html","c927cd28d3d99a35beee9ed80c970f98"],["/archives/2021/page/5/index.html","f80f8f9982be4db839f4630c958fd371"],["/archives/2021/page/6/index.html","a2ce2914536e459f48bd5725d5f7d289"],["/archives/2021/page/7/index.html","dae36e61d87aa4bd91b97fcff42b7eac"],["/archives/2021/page/8/index.html","87c1147027945eb13fdfde81d4083d62"],["/archives/index.html","cf08acc8f81014e94a2227b799b19503"],["/archives/page/10/index.html","94732c342f8ccac3d1321d8dd86a14e5"],["/archives/page/2/index.html","205280451635a7a7dc7c50242443d936"],["/archives/page/3/index.html","2ae0bacb9c1197491d15aad4f5319478"],["/archives/page/4/index.html","74db19ac0cc62e5ff1dd6b4e7330320e"],["/archives/page/5/index.html","5fb3d172349aa44269b832ca4727e1ad"],["/archives/page/6/index.html","7abec3f4b2b0fa072974cc1cc963bb31"],["/archives/page/7/index.html","7a66e39c13a006677c343c920fa47ddf"],["/archives/page/8/index.html","bfed2c53262e4bb586b04bda6d950d49"],["/archives/page/9/index.html","93c983b864a9742efca80be24407de41"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","b03bf22a6b6944716175697efcffa206"],["/categories/index.html","392f03d3fb888be3efd58f7d0c2ca9bc"],["/categories/下载/index.html","59ac2428049936660fd13299ba15dfa8"],["/categories/安全/index.html","b02244385abc3869cac8e2541a9d7191"],["/categories/建站/index.html","68d2b48170bff3f920de3718609c8244"],["/categories/杂/index.html","f9a720d7155b5161a69df03825f257e9"],["/categories/杂/page/2/index.html","e522cf78c4e5645ebc69aeaffb00abc7"],["/categories/测评/index.html","4564c502ff03dac4539084ea80a3e937"],["/categories/科学上网/index.html","bc0a3b0d49814d696412075324a1cd61"],["/categories/科学上网/page/2/index.html","78dc8cdb9ac11ba4d482de09f812ea80"],["/categories/编程/index.html","c821796cfe63355c5f43af6e8a026958"],["/categories/网站/index.html","f283c8b1ed7711a0003ab32ace8d9224"],["/categories/网站/page/2/index.html","0545ba9fd7b54aa67ac7999b1a49f3a4"],["/categories/软件/index.html","830de1cf2cf1973ea944a8277a6b8b91"],["/categories/软件/page/2/index.html","a6d34a58437807e4861356b5521ae200"],["/categories/软件/page/3/index.html","4d96f3803b3b2dcf6f5c627536ec2cc9"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","68a59cbeee28373b9ec19d31a3c82138"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","69c7b33aa43fd715b9b6644321f725ae"],["/ios/index.html","828760aea7a95e64ba51a1f512d8b4e0"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","c0ce4bdd80bb56f6e32ef455d566e2c9"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","1723c811830139af82e9bed5c6a83ad7"],["/page/2/index.html","2df63bb7c6b3ce2a66ae05dd26efa5a8"],["/page/3/index.html","e7e05edc1a1e3de4c4ce36c4ca7fc9dc"],["/page/4/index.html","f0bb09cbeb61a387b1403ea887a1c04d"],["/page/5/index.html","f5806d207e2c37bbcd88914b6f24353b"],["/page/6/index.html","b002373dab0295924db7e4b2e5d1c8b4"],["/page/7/index.html","655e0b3d97625f7775d869db2d5d835b"],["/page/8/index.html","374bfa0e170202cc8970645e66f71af8"],["/page/9/index.html","d44ee297be0e7b32b37da1898a9ebbeb"],["/payment/index.html","f2b684fee45df4664d8a09f8e7a180ae"],["/privacy-policy/index.html","2f6b2ef0ae69d3d57fe7ea8e59c54ccb"],["/rss2.xml","03ddf9632431a09e9ea0f079d4843445"],["/search.xml","363337394937059a87f53ebf8dc28dff"],["/sitemap.xml","bf3f0181281542932aa452f7ee71d9bb"],["/sw-register.js","08cc355b936bcb552b94b8ecfc5e787c"],["/tags/5t/index.html","a544a72e8b75ef0641e51330481f9016"],["/tags/Bing/index.html","617e4b379f067ed7aa9add801d557ab6"],["/tags/Clash/index.html","c7ebeae4d1d21971a1edbc484dcc0ae1"],["/tags/Clover/index.html","4f9a222d4ea408b37909155ccf3a952b"],["/tags/E5/index.html","e44e073024573e3e5fb3f9e509d4422f"],["/tags/FTP/index.html","b9492a5328bb06d04be28fc96eac8404"],["/tags/GitHub/index.html","e269fdb29d2f609ad3f7c369586cd7d0"],["/tags/Heroku/index.html","09f97f1bd52bb31b0e10b23ab7319db6"],["/tags/Hexo/index.html","88d8d07658b234d5202ec3abb4d23142"],["/tags/Lenovo/index.html","52b02627cfd476e325507e2e9ac7f39b"],["/tags/Oneindex/index.html","48338f134574aa58d4cd32f2e6d1242a"],["/tags/QQ/index.html","de0da99575eba7e23394c2bd3bd12350"],["/tags/QTTabbar/index.html","ff9eff8282fac6b81baed38f361ab025"],["/tags/RX文件管理器/index.html","d51653e21756830a6dd28420c017b60a"],["/tags/Todesk/index.html","d5f53d354d0d4f0beaa1681830eb37fb"],["/tags/Vercel/index.html","b3ac23ec781e4fa5df42aab06b100f52"],["/tags/ads/index.html","3823b53f362a01237b64b38c904da4ef"],["/tags/api/index.html","1cd1bb0c58b9b1248cb5caba711536ce"],["/tags/app/index.html","c338b393c8b3389fc46741f2c91db72e"],["/tags/blacklist/index.html","9a0d24357f342cd02fff7e35e5272614"],["/tags/butterfly/index.html","a32edc48bc806b4e95eba5aebba43166"],["/tags/chrome/index.html","087a855d40fb99e2cc7d4435cb1bc54a"],["/tags/clashx/index.html","482b21907b7e97bcf253db8c1d31bb06"],["/tags/cloudflare/index.html","e5e2dab49d875c3aa2a29b68c7506b9c"],["/tags/cmd/index.html","cd449d6ec516517f65987a8663f5257d"],["/tags/c盘/index.html","1230bfacdac16aaf1d59fa2671262afe"],["/tags/email/index.html","e4476a9b8108e3337d82590dc186fa08"],["/tags/ewomail/index.html","35f673773b15422436a19e5cc504c145"],["/tags/fiddler/index.html","c12980dd3357f45d1de664be48ee7340"],["/tags/flags/index.html","f7c0265f6254a699307dae889eef2f46"],["/tags/footer，页脚/index.html","9288cfa9f376472266678267d5ee9f51"],["/tags/galgame/index.html","f594557b3debc276a0a36f540f37e7ce"],["/tags/git/index.html","d4d4ae3b66fcf2a00e135d27779aa49f"],["/tags/gitcalendar/index.html","3227b26600d4757c4038ac6214341857"],["/tags/google-voice/index.html","6e34af39ad3fe389cf068210cfef2e9c"],["/tags/gv/index.html","3185571b794fd03b6e2dc2478036fdf3"],["/tags/html/index.html","dbd36dfae6b2af2070358aa1d8b9c272"],["/tags/index-1.html","12a1d70eba78dee5e0a15bac72867dd2"],["/tags/index.html","4be206a02d1e4cd631f181ed0fe58d4e"],["/tags/js/index.html","907c4d507d8aed7639b853757c65ef0d"],["/tags/jsdelivr/index.html","6cc76ac779dfc83aeb8320c8d50e1bd6"],["/tags/linux/index.html","9a3a38722b018fe6c05d5d72a03613f9"],["/tags/macos/index.html","3e6681fa02f18b9aed7aa4d225333927"],["/tags/madVR/index.html","48030272371fe6336b06e8a1043e0a62"],["/tags/markdown/index.html","e9f89f3423825d7c69b8e11d26b5392c"],["/tags/maya/index.html","5911bc3963834af545c21acca2f9ddaf"],["/tags/mklink/index.html","e815e52456b6bafac14a6e416d8a41d6"],["/tags/office-e5/index.html","ad50ba1ff78e2e6512f895eb90d42515"],["/tags/onedrive/index.html","2d26db2ea849fed6cf77bf6ae298ca7e"],["/tags/picGO/index.html","7a1c71a2ab2742fcd17be557ed7e7965"],["/tags/pixiv/index.html","cc1b009d43ada8303a8741daba7eca38"],["/tags/potplayer/index.html","bdb9b38aad385980bf2b0081fa8fb924"],["/tags/proxypool/index.html","71d153fb13d307403669bbc20d3cffff"],["/tags/qbitorrent/index.html","8e5d83eb53b5188bdfe00c3bd00f37df"],["/tags/raidrive/index.html","3df414f54867304b4a3c9eb15d7993b5"],["/tags/screen/index.html","bcf24b221dbb2f1c06ae1a104ed18a80"],["/tags/speedtest/index.html","69545bab5213081162b7eb053ea7fdc0"],["/tags/ss/index.html","f4e4a17a9c0cf622203c5765534accf9"],["/tags/ssr/index.html","89e0b02c8f2d233a0afdfd313caf84fb"],["/tags/stickers/index.html","ea04aa8e2ff60fba3a947a877ebe480f"],["/tags/surfboard/index.html","928f5287d11e22f0de4919008ae739e4"],["/tags/tap/index.html","37bdd7c636a556b1aafe25a785be337d"],["/tags/telegram/index.html","cc54483b8000e6e77dcf067b63eb7f9c"],["/tags/telegram代理/index.html","0e2851e05aa17cf590a0868d21c2ef5a"],["/tags/tg/index.html","cb3efa2350e5bb61718f556d721852db"],["/tags/tg代理/index.html","20f227cde83e5d18a8145602634546f7"],["/tags/top50/index.html","4b7af6768e0a4d84b683f00bff3c5d96"],["/tags/tracker/index.html","431c533f4193d424890c20f42c2f69fa"],["/tags/translate/index.html","f7f54705f7bbf0c6dc2dc749e3c55945"],["/tags/translater/index.html","7233909bfabd7b2e109bc88a1427ea24"],["/tags/tun/index.html","b0dd329ab35652827ca2c5ddfc92a78c"],["/tags/typecho/index.html","0d090b3491bc4b60b3c185f244c0d31a"],["/tags/v2ray/index.html","87824167f1f9e148418dd7edf5f3dd8f"],["/tags/vpn/index.html","36e05c6292565363528e8fbdfd75f4a8"],["/tags/vps/index.html","2951f83daebaa2fad354b9235c44a62d"],["/tags/wallpaper/index.html","b98e4dcd5c0cb753790a157f1171f9ec"],["/tags/windows/index.html","ea771312b04d3948fd30b16030baa0bf"],["/tags/windows端/index.html","2ec6c3c94a53c764f958fffba95b4c2d"],["/tags/xray/index.html","8504fbefd71bf75f2c7541794e26d360"],["/tags/下载/index.html","b7d78beb38466483128e06a7254b355f"],["/tags/不限速/index.html","f5250d737a1b104290cfa8f1ceb9ebc1"],["/tags/个人网盘/index.html","7c22969d7da81cddd938f529c317001e"],["/tags/主题/index.html","849f9fa60860bca9de06566e6d11dad6"],["/tags/二维码/index.html","938bc02d275cb43f6c54c1d6eb46c8f8"],["/tags/云便签/index.html","1547d1ece595616fbeb8de2cbcc7dd37"],["/tags/云盘/index.html","6a07bd4dc924e7fbbd47d15ea82eeaa6"],["/tags/人人/index.html","66b0a76c66d8513de3381746cf3d7c2a"],["/tags/代理/index.html","57a54187d3c89fc7d8af3cd32bb30e8a"],["/tags/代码/index.html","022fdae967e8b2eb7137f28b4328d4a8"],["/tags/优选IP/index.html","5bf897884952d5d900bb78f195513eb2"],["/tags/便签/index.html","ee5682e6adf433e03fcfb914e56a25f2"],["/tags/保号/index.html","f27e1d57d959d84e93cffbad1722bf29"],["/tags/免费/index.html","fde9e23b6c28b0d1dd5879c5dc6faec7"],["/tags/免费节点/index.html","f58e90ca656d319a7a00a14825872ef1"],["/tags/加密/index.html","9c97b8b4ed39a3b8bdd9f9dccb04551a"],["/tags/动画/index.html","89b9355e86cd40af2f5e04252e4e381b"],["/tags/博客/index.html","6df18a12d92215648c85be4bb20e9b3d"],["/tags/历史记录/index.html","3e270332bacfc79e15bfc20d9dd19924"],["/tags/压力/index.html","e07782af8ac3fdd182c09cc7af8d24d8"],["/tags/压缩包/index.html","d8bffc9a452e1953c5c89e2e0aeeed13"],["/tags/反代/index.html","d1afc273a1c1798d0356d851b21ed30b"],["/tags/可视化/index.html","652fe7eded39db5402ed00cdd99a1daa"],["/tags/命令/index.html","158cd3838a07a7b0eebba6997db47b94"],["/tags/国家/index.html","a6497e4ada989c73af3d357c7aab5e63"],["/tags/图床/index.html","d1293af3a8c0a409180d6033f045aef0"],["/tags/图片/index.html","84ad75f9484cd6637fdbd0736adf6a14"],["/tags/域名/index.html","66c01fbe212370fc5bcc208928b641f5"],["/tags/壁纸/index.html","07cdcb2535f9418e913c59ed083e1a8c"],["/tags/多标签/index.html","e0a45d237016ef88a8be38e741ff4358"],["/tags/存储/index.html","50768b563a3d8807191bb16484b1e320"],["/tags/学习/index.html","3e0b9351db1857a665cac74327d0edde"],["/tags/安全/index.html","4072e1c796f2e198e95199b39283dc31"],["/tags/安卓/index.html","c88b71910f2f6a5defa2aa6a16bb55b4"],["/tags/宝塔/index.html","299dd59a6d838e1aba7f244c6e2877a6"],["/tags/小游戏/index.html","462504284bcf33b21361a45f4cc24ac9"],["/tags/广告/index.html","b3c90ef83f5b6ff73967db4a418517e8"],["/tags/建站/index.html","1af2128c18af77a448a9d1f481b88b59"],["/tags/影视/index.html","54091f241c53e4d4bb71d205e276c5ab"],["/tags/微信/index.html","7f31a1fcb772121e4aa5722e8e4a4073"],["/tags/快速启动/index.html","aa98516d6cd7dc5384efedf9758fb95f"],["/tags/手机/index.html","9a5381394e9fe58b4044e21b2c40b1ca"],["/tags/托管/index.html","7d2347df618fd0bb48919eaa0d81c48d"],["/tags/抓包/index.html","0d246f2cadcb6ef7fd60c5e9c49f13f6"],["/tags/抓取/index.html","363a09ad40013572a9c31cc9d818f271"],["/tags/投屏/index.html","301f896879156a2af121c7fad806dd12"],["/tags/拓展功能/index.html","113128aab74fdafde00f0d5fc1d9b957"],["/tags/挂载/index.html","ad537cee35d9ee0439c82335c1d41d34"],["/tags/指纹/index.html","f3a88a14adcc997c0953b71a525f3a8b"],["/tags/接口/index.html","99d27a0f38b975d41bdfb9b11032de2b"],["/tags/提取图片/index.html","ace6b0396c834c438d8fbee42033f219"],["/tags/插件/index.html","2fe1399b4a90b7e92815b705815e2cee"],["/tags/搜图/index.html","a7abfd26055be0acd16bd3fa7b1f98b9"],["/tags/搭建/index.html","2a0f93dd040e57294c028b54fdcbe819"],["/tags/撤回/index.html","e82e05eff1fdc84e78de9db13ce4ba36"],["/tags/播放器/index.html","e9f3bbaa1b8162ccc7c7d7b1f7ccbed5"],["/tags/支付宝/index.html","ea587e30299c454c78bf3b1ddfc9fac7"],["/tags/政府网站/index.html","ac8619eb3b5076bd214cda705d938847"],["/tags/效率/index.html","02c72331f495cb500cdda1939480d818"],["/tags/日历/index.html","97af3e116d7c8d12503517258de9506c"],["/tags/服务器/index.html","b73ba337ca0b534c7cf16c31933b347f"],["/tags/机场/index.html","45e0fa1705b9f327df9b5814ad6605d6"],["/tags/桌面/index.html","c9899229e2f37de3c5c637deb63b4e54"],["/tags/梯子/index.html","273a23e211f8dbed532222b7facdda13"],["/tags/检测工具/index.html","8a0f6dae62f3152c5d4e9779b81cecac"],["/tags/汉化/index.html","17ce9bcc1f575ccd26a93701259364be"],["/tags/测压/index.html","2087d341037dae2df39578235db9387f"],["/tags/测速/index.html","ff0fffd084b03bbbca10cbb70d2a51a0"],["/tags/浏览器/index.html","482d57c13b119309971e2661342a373b"],["/tags/清理/index.html","0b702271b6026b8d838a954f2866d32f"],["/tags/滚动条/index.html","29493d0948ef7852680fd17b205579e1"],["/tags/灰色歌曲/index.html","90b4be0a1b044bf2a32fbeec11466abc"],["/tags/电影/index.html","1d6834ccc683c849c3f453b76bed5caf"],["/tags/电视剧/index.html","fd0690a8352aefa40d2f3beb6f0fd236"],["/tags/白嫖/index.html","4d0841f2dbeddb22f83341cd4bdd2cf8"],["/tags/百度/index.html","92fa79f12bca0eeb21ee32cd079297a3"],["/tags/百度云盘/index.html","bf24093f66cdf6825c47e4a1e316a049"],["/tags/百科/index.html","399829c282969f0dd5d55be4614977a0"],["/tags/短信/index.html","677a19f94b1aaff8ab4da19ca1f3003e"],["/tags/硬件/index.html","10b29c849f8e8cdeff41dffd0a824ea8"],["/tags/科学上网/index.html","7383a04eb92dabe718e2ee75f004eebd"],["/tags/空间/index.html","a3acaba99712b7fe2e92f61cff32376a"],["/tags/笔记/index.html","403bcacd5c308864036a4abe5279c8cc"],["/tags/简洁/index.html","1709c81a5afc605b6918358fe12e8e0b"],["/tags/简约/index.html","a54b8df75435ae2d59cf21ad4a5b5633"],["/tags/维基/index.html","3bb8e420ef97fe5eb24b8a5a6313ab72"],["/tags/网易云/index.html","9863e59e27957118c2d3ea4fd8bdb99f"],["/tags/网盘/index.html","b0f5a881b8536afa6cffbd4491b220ac"],["/tags/网站/index.html","99804da73db243f5eee520e9cb8c2158"],["/tags/网络/index.html","db697a80f87d3ddf6ea647ce59c9571c"],["/tags/美化/index.html","2328743e97c2c1624f2f8cced51866b2"],["/tags/翻墙/index.html","b4e77a22ea3db31fdef5630a71bce7d5"],["/tags/翻译/index.html","7b2669305faf3800724f8b569c31c5c0"],["/tags/翻译器/index.html","57bf581923ee8b996242f23b4006ed65"],["/tags/聊天/index.html","415b13451e43466f3c29796ab7c84a9a"],["/tags/聊天室/index.html","9fd1aa9ed16448b5ae0a8afa23ed7c34"],["/tags/联想/index.html","67356bbcb23d48ec9844112d08abb3c1"],["/tags/节点/index.html","9d8454ce7c7c98e6f3b3e217f954b4c3"],["/tags/虚拟手机号/index.html","1d9561427a793f76cf7f0b29c8cf2eec"],["/tags/补丁/index.html","dd685ccbbc04f2c2e2df0c2b64d2e0c8"],["/tags/表情包/index.html","a1d2dbba40fa5c5712e946b3f09fc5b4"],["/tags/视频/index.html","063b8510adb674ef997b2ac0abdb43f6"],["/tags/解析/index.html","051b7028b31760f134fa385808d012cc"],["/tags/订阅链接/index.html","999f9d650ecddea2435c1ece21497e4c"],["/tags/记录/index.html","cf1a87adb64fc378c59b52498581c7f5"],["/tags/识图/index.html","07fed9ad3c92ed409c0b451eede12c0f"],["/tags/语言/index.html","df55690654131df1ae206983d19b7c12"],["/tags/资源/index.html","f9b77cfa13384923df1d746849c078c1"],["/tags/资源管理器/index.html","372d588d7502ab37a01985648d8950b5"],["/tags/转移/index.html","c2e279088f739e592e3dd51ef9f9ef6a"],["/tags/软件/index.html","049893b10d69339494576eb2952f61d5"],["/tags/轰炸/index.html","16d6427b18fcf7619f2c1309db04e514"],["/tags/迁移/index.html","7b943627acf323bfcaf235cfb5aa63f8"],["/tags/远程控制/index.html","885338dba6a9c12759fc3c7afdf6253e"],["/tags/连接/index.html","c6f115a96f4671bbb30af481b7e305b8"],["/tags/追踪/index.html","a2e7e87cfff8e2654d35d35d67f3a665"],["/tags/速度/index.html","bc117d87ca8fee2c6d426a96f2888cfb"],["/tags/邮箱/index.html","c23ac97c50d8e27f66968cb294e78206"],["/tags/酷炫/index.html","269fa71d2c567adb7528e0c3a8f839f2"],["/tags/钓鱼/index.html","bb764ff0eadb2e0d0bedfcab853c77f2"],["/tags/镜像/index.html","666b3cfa98695d3342f3a4e8025222b5"],["/tags/随机/index.html","b6a2bb0211609fa3c218cda79019b3ab"],["/tags/隐藏/index.html","b29f62345e499eb5f869fb94a5937e64"],["/tags/面板/index.html","9c07d925d59474d8581456e7f1dc12f3"],["/tags/音乐/index.html","9fddc7b966fb6adefeae8a5a128554f1"],["/tags/高颜值/index.html","e1e8b20d2342ae72403a109de026a953"],["/tags/魔改/index.html","fe40534320d6b260aac541fbf3c2a4a2"],["/tags/黑名单/index.html","193953294ce185d4a1c8801bc1c5976b"],["/urls/index.html","70f310792a64c9dea565fab4bbfc5a8e"],["/vps/index.html","6327546786758c135a29b025241e0670"],["/支持/index.html","e349aea77ab9c90838138ac11bb3e244"]];
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
