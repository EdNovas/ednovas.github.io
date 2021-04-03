/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","06c11b90ba0ccb4c60e0408351910ac6"],["/2020/11/29/clash-windows/index.html","03d6a0044e2aae1c682dd44baf96ac29"],["/2020/11/30/websites2/index.html","1c6eb46a9c895260afa1c7c6f56849c6"],["/2020/12/04/iphone4s/index.html","3c52e4e3d638500b389af67f0eccdb92"],["/2020/12/04/onenote/index.html","dc026a74b9c5e5881b2951e61dabe426"],["/2020/12/04/wesites1/index.html","37697f1c864b2df8b1058069786a3a74"],["/2020/12/06/nokia808/index.html","a24a838d33b6207169635e4c90d79544"],["/2020/12/07/ipad1/index.html","5bd1d868a38529496d3fef56a351ce5b"],["/2020/12/18/freesubscribes/index.html","aaf936bd3cfb3d7e56af71c71f0530a0"],["/2020/12/19/musics/index.html","0319212da270f28decb0395b69c18a47"],["/2020/12/19/shadowrocket/index.html","0ee17d3fb15f684c68f175796db237df"],["/2020/12/19/v2ray-windows/index.html","93621f01b0cf06376f0721eca31f742e"],["/2020/12/19/v2rayng/index.html","5ca96eaf435561dab65d343b84e87b62"],["/2020/12/20/beoplay/index.html","de06e41cea0b55e3b3d51778b407fa7d"],["/2020/12/20/订阅链接转换/index.html","f845140943e4e5fe96c3fd7589718614"],["/2020/12/21/chrome浏览器下载提速/index.html","41a894196d8f9a2c33b9ddec8f4a503f"],["/2020/12/21/免费128线程并发下载xdown/index.html","4dd7a29b9ca17e9f2f2bb09dfb8e2f9f"],["/2020/12/21/免费32线程下载软件ndm/index.html","c1b13744740eaf49c9f57be7df589e47"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","ea5d6c5c557425531163f8debf55a58e"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","771e7019814116db86f30817d765fbcc"],["/2020/12/21/广告怎么知道我在想什么/index.html","75b3238bad7d1b03a65365ee80ac9343"],["/2020/12/21/无名·引子（小说试写）/index.html","68eb2cf34b05a0daac701a4ca25c055a"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","67036d6e34ec5a58bf6e619383802da3"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","544f24602160899384ea7583199c11b7"],["/2020/12/21/高速轻量下载器aria2/index.html","e7e8d8cf6fbe9c00c9bb19c14a716361"],["/2020/12/22/2020-cee-roo/index.html","dcf5a12380508ffe57e526277f97eeda"],["/2020/12/22/firefox插件、github、steam富强/index.html","137cd6bc71e77f94a9a8cfd3bd1209d1"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","d5805a1df34b3ccf67d6570697d1ded3"],["/2020/12/26/python-day-1/index.html","6f6c1ad6157c6b72fc89a28e1087340f"],["/2020/12/26/python-day-2/index.html","c78dc0137c95e6c961f68d61019e535d"],["/2020/12/26/度盘不限速下载方式一赏/index.html","e92c1cfe4a215acb0509582573853f28"],["/2020/12/26/添加开机自启软件/index.html","3126451067911e640fdb62977aa13e4c"],["/2020/12/26/电脑端截图方式一赏/index.html","fb0a92d9497dca1c96ed402db3600f19"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","842c6d73651c67bfe2d2039c47148c06"],["/2020/12/27/最安全的浏览器tor/index.html","6a26aa2da3de0dffe05ce5497b35e1ac"],["/2020/12/27/网易云刷等级和听歌数量/index.html","728294fcafbdf2fd0dbf929c336e1f08"],["/2020/12/28/freenom申请免费域名/index.html","bd18d466c772cc14767bb835c431df3a"],["/2020/12/31/机场/index.html","fdf643f29fdd1f2e6e82f8254bb2cb20"],["/2021/01/01/M1/index.html","9c86f6af7d3fa46f699a44531a702974"],["/2021/01/01/compress/index.html","de06304c515f8783e8a63daca949bdfc"],["/2021/01/01/infinityfree/index.html","16edd911f9fe47bb80a89785409e4d71"],["/2021/01/01/硬核翻墙/index.html","d786080ae7f0f9b9efb3f5abf51b9b4c"],["/2021/01/02/qq/index.html","4d03c3b75ed9bc1147783f3a9b09ff96"],["/2021/01/03/netch/index.html","c781f235f31348221e40624c24083682"],["/2021/01/03/waifu2x/index.html","dd0bd2eb72ddf33953a2108a77a78546"],["/2021/01/04/ads/index.html","7f52cf4a497e7eb7f63ae185069ce949"],["/2021/01/04/games/index.html","8e4918151b76710b1513a60964452f76"],["/2021/01/04/heroku/index.html","e04f8c95a7da7fb0f0190881fec20211"],["/2021/01/06/movies/index.html","dc3867d19c9e8608db2fed9dc3a094d7"],["/2021/01/07/google2020/index.html","4128b0eecae232a149e157c2a2df72e6"],["/2021/01/07/lucky/index.html","40578b8a218f22392ef31fa2dd8b3520"],["/2021/01/07/spotify/index.html","037ff3b5f978db7e156b9dc172d7e374"],["/2021/01/07/thunder/index.html","e9d131b4d40e6a7096ec5f8e179937d6"],["/2021/01/08/adguardhome/index.html","5d985f0fdc19350381e55eef698a45e3"],["/2021/01/10/IBM/index.html","be343c78415cf0a4505e5126f9057fef"],["/2021/01/10/potplayer/index.html","78b74f00164bd75c5738bd3b8428d783"],["/2021/01/10/sakuraanime/index.html","cba795f7db1a332b93c0da97a8165572"],["/2021/01/10/美剧星球/index.html","1868b9f40acd98dff6816fff679d838f"],["/2021/01/12/telegraph/index.html","d31df330c9c7a3caadd7b5d1c274f860"],["/2021/01/14/comics/index.html","4cc7b6b334147781f1f38e2e38c286ad"],["/2021/01/14/ftp/index.html","d0d7f8e988e7b79e6eaa2d0e45e3f879"],["/2021/01/14/oraclecloud/index.html","b301d2725858570ac06169cc579ea4e9"],["/2021/01/14/porkbun/index.html","c5f437dbd91a482d787293536ed122f4"],["/2021/01/14/powertoys/index.html","a065724986b1f89ea244abcbc0356079"],["/2021/01/14/taptap/index.html","8aea62d080319e6e0f6b4d85adce8eea"],["/2021/01/14/ubuntuvsftp/index.html","8d5fef04e3c35e5c4e0134682f0e7a3e"],["/2021/01/14/小说/index.html","895252131c54d3c524fadab3cb4eee91"],["/2021/01/15/freeproxies/index.html","d5da42fb8253f9dcf876d4dbc16333bb"],["/2021/01/15/incaseformat/index.html","05157a7fc89e4a4d46c24cacaaedf866"],["/2021/01/16/euserv/index.html","99528abb3d76a77a3add53531a340ccb"],["/2021/01/16/winxray/index.html","2ec00d47275fea0615307e51b0757c10"],["/2021/01/18/qqreadhistory/index.html","5e7926ef3fb7d2798c57b296274c25e5"],["/2021/01/18/qqrevoke/index.html","89478673ff9002d0f6899d2b6a8932e6"],["/2021/01/19/freevpn/index.html","cb0418f36a2ede5ac61696207621fcc8"],["/2021/01/20/browsertrack/index.html","90ad712f076b51a4070300ba5fbc70a8"],["/2021/01/20/v2ui/index.html","44b8c67af843cfde62aec8cb615191ff"],["/2021/01/21/failedtoconnect/index.html","fddc75736592cc2a0a8b870ab60f2a1e"],["/2021/01/21/gitcalendar/index.html","8914b4438ae3e599ee0651cf629d6ef4"],["/2021/01/21/markdownformat/index.html","aa0285f1126824f91f38477fcd16fc10"],["/2021/01/21/markdowntable/index.html","d08d9cbec8abb84432686cc03660fe78"],["/2021/01/21/vercel/index.html","219b995df148cfd577549cf889dc06cb"],["/2021/01/22/hardware/index.html","79ebfac7c0bf4337c2a3a4c6156e24a3"],["/2021/01/22/muviz/index.html","be618ef6f67d805e353780d8132f9b1c"],["/2021/01/22/randomapi/index.html","ee8cde4c972e99577df9777884714752"],["/2021/01/22/searchimages/index.html","66c2befd91264d48b8957513944e1306"],["/2021/01/23/RX文件管理器/index.html","61ae8cc4efb81e92f27cfbfd7decb425"],["/2021/01/23/chromeflag/index.html","ac28287140769913a7f9d3b7b5c57a2a"],["/2021/01/23/qttabbar/index.html","2c16fa1804e7999d707addf56bebf4c4"],["/2021/01/24/githubspeedup/index.html","ccf73fc9e3af3d4f333a4b1b1fff0da2"],["/2021/01/24/jsdelivr/index.html","168d3da9721ab09835c68614ddc57a97"],["/2021/01/25/note/index.html","0379e1bbdfcb51567431722fd7c71ea6"],["/2021/01/25/soul/index.html","c79788dc95b91c23dade6d2cb85b0880"],["/2021/01/26/herokuxray/index.html","e552039abec1cd878728d257861521a2"],["/2021/01/27/proxypool/index.html","def02cb9f266b1d8b35b9e6fa3c858cd"],["/2021/01/27/tracker/index.html","d6f2b094f399d5974342ec80eaf2b084"],["/2021/01/30/pandownphp/index.html","8de7251df75dc0a27778464c104150eb"],["/2021/01/31/newgroup/index.html","990fe178d200cf9b6f4db1517a25206d"],["/2021/02/01/clashlanguage/index.html","cb3be2ba9106a3a34c2eb4b557a24fce"],["/2021/02/01/encrypt/index.html","996d669299a14fbab209b287758a6722"],["/2021/02/01/footermotion/index.html","31528425a2ae2c9c64abcc0f9053cb0e"],["/2021/02/01/gitter/index.html","4c47fac97231d1c04631c2bda6e697f7"],["/2021/02/01/pixivtop50/index.html","23efa5c711ef077c0f94cf5a3977f1b8"],["/2021/02/01/scrollbar/index.html","5582915c55a327e0703e470e07d45d45"],["/2021/02/02/clover/index.html","f8268d7eb23147581743b39a13c582ed"],["/2021/02/02/maya/index.html","e68f0c3d09d6bd89c101b13eee571acb"],["/2021/02/02/speedcontroller/index.html","83f632e29912e60de2113b0c5ec5c3de"],["/2021/02/02/yesmusicplayer/index.html","65b64ff4104f57c1b50bc4bf4b2aff9b"],["/2021/02/03/lenovoonelite/index.html","9fb767eb8a36856543ec2f0386eaf9e5"],["/2021/02/03/skipads/index.html","87cd982f577474bee64543da3abd811f"],["/2021/02/04/picseed/index.html","1021344f13c526c8bf26edf918df93e0"],["/2021/02/04/renren/index.html","45b3c45eba32407aa9b7cb8bd633530e"],["/2021/02/04/serverstress/index.html","fb69814598b94511565dd7d5d6c024f2"],["/2021/02/04/wikipediazh/index.html","e6c3ea93ed2c0e1bee34e78faa449810"],["/2021/02/05/googlevoice/index.html","9592f0f031c6ac8ab1cf0d3b3f157753"],["/2021/02/06/clashconnection/index.html","dfcd86bc16b91184c3e9dde694e23cb9"],["/2021/02/06/gvtransfer/index.html","9f490cd5b0048339566d5d9f44e6064a"],["/2021/02/06/todesk/index.html","c696c9f0842fc12f622669c1c6e3f010"],["/2021/02/06/vpnblacklist/index.html","66645a5dbf567377e853de09599cdf52"],["/2021/02/07/mklink/index.html","5932c243261917a5a57bfc914f054aea"],["/2021/02/07/speedtest/index.html","5942dfaed44ba94266ac59411cba04de"],["/2021/02/07/translate/index.html","fa35974bc9715c7565cc8dd4ea2b815c"],["/2021/02/08/ewomail/index.html","bbaea09171c4bedf78e96fd19860a1e9"],["/2021/02/10/officee5/index.html","51f850bd47ded0b78e9f86aa4e72ad35"],["/2021/02/10/raidrive/index.html","cc5b933504e53cb16e7c0aa433adf68b"],["/2021/02/13/e5sub/index.html","87e4894fc24a97ab2763f5cd913f3ddd"],["/2021/02/14/screen/index.html","a5eeec3e5afe91e6e5332b3977da6b7a"],["/2021/02/15/clashtun/index.html","8a060c1360028180af491b08d4124364"],["/2021/02/15/messageboom/index.html","02f91abcd6af773ffbe62de0ed7a6af6"],["/2021/02/15/oneindex/index.html","b52809ebd1150bae733b3f50cf145128"],["/2021/02/16/govsites/index.html","1e2ab4645ea094360fd47a38c4109475"],["/2021/02/17/hexototypecho/index.html","9da8c21ff234370ccb2d05293ef67cf7"],["/2021/02/19/fiddler/index.html","eca68aabeef240d4735f4dccdd98ab08"],["/2021/02/22/potplayerset/index.html","b6f757a4db7012214b1a7047531bd71e"],["/2021/02/22/studyresource/index.html","6ce12bbf9d7bd12e675e2e0310fbad70"],["/2021/02/22/telegram/index.html","b66aa8d77d775f8102956cec97bc7d9c"],["/2021/02/22/videos/index.html","707fc92c8f3100211b187e71c07e8a21"],["/2021/02/24/mtproxy/index.html","cda0d7c09f04501435d5a7faa4faa085"],["/2021/03/10/catchcat/index.html","7729fdfd3d22a967fd91cc7de07b87ee"],["/2021/03/10/neteasemusic/index.html","b2371414b6f16c77ec12ae86bc43a3db"],["/2021/03/10/surfboard/index.html","e7ed23e5ed9bf6489c96c7e9d950d8ae"],["/2021/03/11/vpnandjc/index.html","f3656c37a401d129d85b7f69b1951cea"],["/2021/03/12/qrcodes/index.html","a52bf71fcfd37294134c6681d892cd12"],["/2021/03/20/qv2ray/index.html","2b0ecfeb9dd3854701ff4f45d53ac58c"],["/2021/03/22/freevps/index.html","ebc7280657256b0caa57e6c2e58a3cde"],["/2021/03/24/tgstickers/index.html","a1064b32ed1f42fb1767da77e1ae0766"],["/2021/03/25/clashx/index.html","07626a934fa06d355c848052eb78935b"],["/2021/03/26/bingwallpaper/index.html","584029358c86807cfa8a61578c94134a"],["/2021/04/03/soutu/index.html","ecbb0571dcfa4fb3ab025ecdd8577e93"],["/2021/04/03/tiyunti/index.html","39d2776f91d7e8d1e051d8836524fca2"],["/404.html","1eb19f9cd7698895545dba1921161174"],["/archives/2020/11/index.html","7f8a595e376017a7a8eca1d3530c0cec"],["/archives/2020/12/index.html","57ffbcfb511d2eb5115ad20e62981e48"],["/archives/2020/12/page/2/index.html","940a4d1a3f4e088c5178f762385b0737"],["/archives/2020/12/page/3/index.html","2d42824a8cd017255f8822f5ca47a427"],["/archives/2020/index.html","b363efdd0279f18ac82705f90340e7ef"],["/archives/2020/page/2/index.html","a224fdfb910a1b4eec643557fdb1f8b9"],["/archives/2020/page/3/index.html","11bab566149e28a3c12214329f613a38"],["/archives/2021/01/index.html","671f7e65af2972678b13d6bd024e43c1"],["/archives/2021/01/page/2/index.html","052a2d897f80312853e858ddf2004bad"],["/archives/2021/01/page/3/index.html","9f8bbef8910e2fdd1752f9d5041e20a6"],["/archives/2021/01/page/4/index.html","c2b0d58beea1fc1286010ab11d2ca5ee"],["/archives/2021/02/index.html","4e61b4945ea73fa99625abe919242b84"],["/archives/2021/02/page/2/index.html","ffbd19bc8e147dd7557ffb1ef78bbf80"],["/archives/2021/02/page/3/index.html","f1c2fd7859207e2e4acd7e864588e6a0"],["/archives/2021/03/index.html","9b267b6059398e2a1e40b7e93e80fb7a"],["/archives/2021/04/index.html","097d0620c65d30119683c4f109463fb6"],["/archives/2021/index.html","698ed47faca4b256a80614e64c5fdace"],["/archives/2021/page/2/index.html","b38cbf63a0307a14729b5c9a3b0a4191"],["/archives/2021/page/3/index.html","f879fe921b249a5a6d3c0ceb0ed1aa94"],["/archives/2021/page/4/index.html","e1887fc3906d0ec17ee9c0f6e1a41999"],["/archives/2021/page/5/index.html","33d503fd56fb05c3670d6c410a00e285"],["/archives/2021/page/6/index.html","cdebc0f22bd8ef4c816797678ce15dd1"],["/archives/2021/page/7/index.html","bf89b4cfe29c8e699dbfe5d9d1eb8ca0"],["/archives/2021/page/8/index.html","57156bed884203d7bd2be01bb3ef1e74"],["/archives/index.html","9d35ab3015d5ddb6e5d678fa6ca5b300"],["/archives/page/10/index.html","c9b3ab2fc8a0bab88ac03da4a7a3bd65"],["/archives/page/2/index.html","787ce863a69b6b1f11908f7b914f88e1"],["/archives/page/3/index.html","c47891813b898375222859c6b3521064"],["/archives/page/4/index.html","33e4c63d1a79ebe9871f98db0d968eac"],["/archives/page/5/index.html","ede0bb9e4f92f5f27567019022341868"],["/archives/page/6/index.html","820976e50f03079f1b019209cc96742f"],["/archives/page/7/index.html","3c782c5e7517337dfa9e848c6630f987"],["/archives/page/8/index.html","9273d12fb662f4cff2e0230892fda8ff"],["/archives/page/9/index.html","0f9ba33e4ef6dec880a90e5345763b77"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","103e9203b5b6147e1a036d8ee523cac2"],["/categories/index.html","949b324d925c688ec40255b6ace5b6ef"],["/categories/下载/index.html","45938efc7e4537a3147001fe7c4a2c78"],["/categories/安全/index.html","c6f630ea523dcdc6461a83857d57f373"],["/categories/建站/index.html","56ff79aa70ba6c328d6333dc274c9b88"],["/categories/机场测评/index.html","1d13f1fa4988290274be78a415ecfccf"],["/categories/杂/index.html","168c3a8a52d9cf7662a5690054b9f50d"],["/categories/杂/page/2/index.html","8f2fbc4336d7f93905e24ab76e3c3cc3"],["/categories/测评/index.html","e02c83bf69a5b08e456af9898d2eb0bc"],["/categories/科学上网/index.html","561b7ba54b519648e4c617e2b739d651"],["/categories/科学上网/page/2/index.html","c1543c5fe5f7d98ab5a82df8d249bc98"],["/categories/编程/index.html","8ae1f9f209007cbae3e44b9017b2621b"],["/categories/网站/index.html","8400b869f7fb0a2d21ae37b43e431da1"],["/categories/网站/page/2/index.html","edf62a9a925669aaef414d4171244be7"],["/categories/软件/index.html","03ecb34e2291d48975ab2ddd4f0b5f95"],["/categories/软件/page/2/index.html","e0559e64dc2b1a8a6a59e4ed4d0bbc82"],["/categories/软件/page/3/index.html","905e10f91e72116fd02d211356d16479"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","ed9213edb12d2be2518de58490ee6eeb"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","d49070743361bc8705cb4782b7f1f0b5"],["/ios/index.html","6936cccce20b8c0ab0bd66616362a33d"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","233f6a8a5cf57ee3bd7197f75c59972b"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","9e743d3f213acbaca0e45dc6ab5df662"],["/page/2/index.html","a2bb2286f0adb7fc2be5ca6542707e2f"],["/page/3/index.html","e9aa4e78922c84f0bc5f3741d8d8be8d"],["/page/4/index.html","1d72a617ff0d852c80f5e7dd1982ac44"],["/page/5/index.html","eb6f7c822eede49870b4941a216263d7"],["/page/6/index.html","83c5552dcdb37db5f20540e150a27c7f"],["/page/7/index.html","a92603fd3988793d22b504eab7206170"],["/page/8/index.html","103cfebbb2b4506b4345376125186f08"],["/page/9/index.html","e046edd88140e143f24f69425dbba7dc"],["/payment/index.html","5f92934cfaefd827f9f5b4ce3f847d1e"],["/privacy-policy/index.html","016c0c11a531fc280975663c374a2bdc"],["/rss2.xml","8c972ec3c290862528640c1f60a0e509"],["/search.xml","f9866e2b0a460ebbdcf97a1133d664cd"],["/sitemap.xml","928dab102f3af3c14b4c073a6c236e4e"],["/sw-register.js","9d1208e85bdf0147100aae8404adcbe6"],["/tags/5t/index.html","dfab8af721bf7a292139056d7114a53b"],["/tags/Bing/index.html","f71992bebd43e8ba2877841bfb9d5bb5"],["/tags/Clash/index.html","d1e75dc80d464f1f0e97403029e88e2a"],["/tags/Clover/index.html","22819bcd8d2da01cb73c63bc10a43fd8"],["/tags/E5/index.html","69f194f1cf8d277c73a3268f750f3356"],["/tags/FTP/index.html","98ab1ad1bc0832d7cadfab8f23152ba6"],["/tags/GitHub/index.html","544c576a45558d801ea4178c944ed767"],["/tags/Heroku/index.html","161baa9c2f60d672907c2174770ec511"],["/tags/Hexo/index.html","7304d1c08b19603090317f0834d55b3d"],["/tags/Lenovo/index.html","d508a6b293a8b7b2bff903b3a8495cd2"],["/tags/Oneindex/index.html","955bbcf9fc134a6c60e340fa5374a42a"],["/tags/QQ/index.html","234ef625789876f2e314f81ebe6e1024"],["/tags/QTTabbar/index.html","4fec2c400446e60463c3f4bfca204e22"],["/tags/RX文件管理器/index.html","9a5ca80ed42f51c3b06a30443f7440bd"],["/tags/Todesk/index.html","46f8212f8cf9ede5658d2457f7323825"],["/tags/Vercel/index.html","d2117f0f396e72a7066090c75bf582dc"],["/tags/ads/index.html","b77f9546c391b713daecc11c780d079d"],["/tags/api/index.html","5267235f52e8dc2006caf27fad515240"],["/tags/app/index.html","d687a246e475428acca58dd6a54a26b3"],["/tags/blacklist/index.html","0361516bed5c62a5713498f4965daf8a"],["/tags/butterfly/index.html","b0c2ab840313b1ab40e5d6c46f671397"],["/tags/chrome/index.html","3c9cf02412fb35b0ce00e68a9abbfdf0"],["/tags/clashx/index.html","be232820eb6c36f0cbb288150c5d2edd"],["/tags/cloudflare/index.html","68266b2db9a63b401c7e9f620bf52c2e"],["/tags/cmd/index.html","45bfc3294b61fa2c0f848052193c2bb8"],["/tags/c盘/index.html","ed8283e3bc694af387880d035be2c6f9"],["/tags/email/index.html","d591518665267faf787f5f485f0837be"],["/tags/ewomail/index.html","9ee0c361e3e6fb18fe758a4fa72e3856"],["/tags/fiddler/index.html","9283841c67873cdc5783c56c14669be8"],["/tags/flags/index.html","065eec26e186f8545534fe07aa7559f9"],["/tags/footer，页脚/index.html","a426e364059e3dba04dd854d1ae1e6ce"],["/tags/galgame/index.html","80ec1245e7236ba921000bfb62d4a63f"],["/tags/git/index.html","2b5cd7cc2a6640db58132af894996b0f"],["/tags/gitcalendar/index.html","66778cc9c12305d9676abe1d70d73d34"],["/tags/google-voice/index.html","c31ca52bb8eb6bea4b5165b1ba28b4cb"],["/tags/gv/index.html","9716d48320d8e3599aa7b096a72b0b7b"],["/tags/html/index.html","53f750225ede0dd2a92bb12f6e284aea"],["/tags/index-1.html","9a931608f75cf6b60a270e3860746218"],["/tags/index.html","72b630b5c10e411ca2c581a077001122"],["/tags/js/index.html","15e2214717317b4468b0882775c0b444"],["/tags/jsdelivr/index.html","3810556164b89c2d98d6a51851e554bb"],["/tags/linux/index.html","3e0238f1d7707685c73a408c7dd5789c"],["/tags/macos/index.html","cfcabb23fface2fd9e5dc1071b9ff559"],["/tags/madVR/index.html","a0266b5135e425b0f6543dca4e8c114e"],["/tags/markdown/index.html","728b50d4fa5c85401a0975ceebe46a2a"],["/tags/maya/index.html","d5ac23fa2389cd3bfcfc112f8753c935"],["/tags/mklink/index.html","b9a31410c16372157b720e3f131c791e"],["/tags/office-e5/index.html","acc35c14418d0c9d91d1b9a1fe171851"],["/tags/onedrive/index.html","c345b5d058b4a5a457a3fd3df0e385ea"],["/tags/picGO/index.html","5abedb360358764c4b241968c615989a"],["/tags/pixiv/index.html","e288079c2576ea09f0e9ce520d5fe5b2"],["/tags/potplayer/index.html","8540f3486e9ebf3ddeba58e546aa43e8"],["/tags/proxypool/index.html","266c0eee6cbba20c1091a7c5dd80541a"],["/tags/qbitorrent/index.html","646dc956b2aa3d78e3cacddbbf16e46b"],["/tags/raidrive/index.html","60fac3c589e5c2581c2cb43f14a6f1a4"],["/tags/screen/index.html","72c2da3a6937298e3b067d4c6902ff0a"],["/tags/speedtest/index.html","4ab0596afc94a7fa1a570a556c3604d7"],["/tags/ss/index.html","2f0809541a470060744efa3394b84079"],["/tags/ssr/index.html","9f51990048b337ba8bbc9a26cc5d964e"],["/tags/stickers/index.html","4bf1c63ab77e5463bf77ae2063570011"],["/tags/surfboard/index.html","ba0653140e18d3d795ddcc6a8398762d"],["/tags/tap/index.html","6dd1492167ee01c712ac59b41fd7483c"],["/tags/telegram/index.html","14bea59592137da311cc5f27820bf836"],["/tags/telegram代理/index.html","81726ca1db84e08c1125f7bb9e8ffe25"],["/tags/tg/index.html","b78e51284f3e3ee365330428a8ba1d04"],["/tags/tg代理/index.html","e4f85dcf16f706c15c81821ab1021461"],["/tags/top50/index.html","ae8b00918d3b0c9339a32f9bf12b4e38"],["/tags/tracker/index.html","5b231fa7640aea5c322180d6b983df02"],["/tags/translate/index.html","57dee2f4569c5fdc9af9d3491103447b"],["/tags/translater/index.html","f2e16bbe89969c95c5f43c0e9d70c8f0"],["/tags/tun/index.html","656374c23e7de8900ec2a0b353baabf0"],["/tags/typecho/index.html","d3f9e6c6c749c69f0271e0d02aff5b1b"],["/tags/v2ray/index.html","c9dbc952df8005842a4882db3c5141f3"],["/tags/vpn/index.html","8eef85469f939e7014bd845521f8ec5b"],["/tags/vps/index.html","540a85d54f92be85e627b1ccc2a50c12"],["/tags/wallpaper/index.html","7b1b2d65a92b6bbd5ef71c7ff560be9b"],["/tags/windows/index.html","d31e0f9d9b2fa2b580d93af017311db9"],["/tags/windows端/index.html","9fc2d22e0c4cf47887a4dc6952e3773c"],["/tags/xray/index.html","ed7328d95fc9a8d3ba1d2bcff8b416d5"],["/tags/yandex/index.html","a1d89fab5a79aa7515c62a460d1639dd"],["/tags/下载/index.html","0c8b9741cfddc85bf73780b1cd0bb3b8"],["/tags/不限速/index.html","5cd2b87ceaa1cc26248d69b774a41eed"],["/tags/个人网盘/index.html","3386e4893218f21444ef139ef00bb9b6"],["/tags/主题/index.html","c14b3e3efa96deef0068cdbdf1d2583e"],["/tags/二维码/index.html","cff16c3c42ebc98ab54232688fc38da5"],["/tags/云便签/index.html","d2c13754a0567f1e56153a82db63cb18"],["/tags/云盘/index.html","47cbd10accb90c30054210d4729fdb96"],["/tags/人人/index.html","9b492742b3267e11f7498fc785076691"],["/tags/代理/index.html","86db70aa1034e0d702e1dad57f19e276"],["/tags/代码/index.html","ddc13d7af23eb435fefeab29e2a3493a"],["/tags/优选IP/index.html","119498ccae4aea6054590fa28366ccf2"],["/tags/便签/index.html","19597ab18f599cbc59ea61d016c86459"],["/tags/保号/index.html","43aba7625449703224bb06832c32d0e3"],["/tags/免费/index.html","ef747c86a2dd7c3d4674fe68aed10492"],["/tags/免费节点/index.html","092e93dfcade18bd28e803b3b0d66ce1"],["/tags/冷门节点/index.html","abd6e44ff45758e04895a8b65c0cd453"],["/tags/加密/index.html","55d82897b6ebb9126a940aef319b46ab"],["/tags/动画/index.html","f810a94d761e76d8f84fd01e64dce310"],["/tags/博客/index.html","9581fe0c28768a543449724e15a8c2ca"],["/tags/历史记录/index.html","533bbb67e210bb7c26ac68652bf48180"],["/tags/压力/index.html","ed7b0965a7f8351dcd8eba17893be044"],["/tags/压缩包/index.html","9b986196a8501b01b3382c830ae53565"],["/tags/反代/index.html","9e00598a7bd96288b7b7bc9951ad1387"],["/tags/可视化/index.html","7b9493dc1cde006e88213351b42ec410"],["/tags/命令/index.html","1b7f381ad1aa8be013a43088236f3b31"],["/tags/国家/index.html","8093e6eafd506f196b4e35dd59e8be89"],["/tags/图床/index.html","fda9f6fd08f9f22047ada3466ed97bee"],["/tags/图片/index.html","68a52eb349113688652806a6e563ac9d"],["/tags/域名/index.html","d2385b997a4e38a4dd689ce48009e7fc"],["/tags/壁纸/index.html","f8f3f07a38f1935ba4c85bd2b57dbcca"],["/tags/多标签/index.html","6b1f9fda4e789cb8062fb268640de05d"],["/tags/奈飞/index.html","da038f13aac8721cadf080e9ba01aee7"],["/tags/存储/index.html","8c4b3955737e41e376b10f73f65455f6"],["/tags/学习/index.html","961e169795fae68c82745c87f4977c48"],["/tags/安全/index.html","3c4f6d419136d35e79791339918d8f95"],["/tags/安卓/index.html","be414e60b14882eff6fac40b6728ab44"],["/tags/宝塔/index.html","23f0d9e00c0127f606ff92ba954713c2"],["/tags/小游戏/index.html","289b4971f67f9dce887dfa665548ad61"],["/tags/广告/index.html","b6e45366691a5dae27d8d3f7c186d860"],["/tags/建站/index.html","b02d4313f43d8a62ee413b7f443ca3f1"],["/tags/影视/index.html","10d1e06faf9b7138a64880f6e28b858e"],["/tags/微信/index.html","9dd348554f6856aaa53f828dfc8563d5"],["/tags/快速启动/index.html","a9de4a48c24960d92b2de890bf44be13"],["/tags/手机/index.html","8f3c8076824cb5cb557a3897b0be12ef"],["/tags/托管/index.html","b9b3b6326af3b034c49639bec4906942"],["/tags/抓包/index.html","a222949eadf0a8fff8d190ca9009a6f6"],["/tags/抓取/index.html","4b551dcc338239365609c58a21646921"],["/tags/投屏/index.html","dbc4537fef2ae8045d1c25f1ad8e5949"],["/tags/拓展功能/index.html","081b2e7d0c072c11f5fa87014f5f616e"],["/tags/挂载/index.html","aabb4f6150eb22aaf63c4fb949cf0bf9"],["/tags/指纹/index.html","a91356b9345182cc420f12c638e2d199"],["/tags/接口/index.html","576c2f8047e0721e61a809e64bd94700"],["/tags/提取图片/index.html","29923d4dac13c4959e781690fa444bec"],["/tags/插件/index.html","2eb416edf6087fffbae8d026a804fb49"],["/tags/搜图/index.html","556f8ac1873a4d83a4b82ff9457b1e68"],["/tags/搭建/index.html","ce7fe6bc0815e233da6a51404ede08c1"],["/tags/撤回/index.html","6e3508183b18c15f74ff0f9051942961"],["/tags/播放器/index.html","4f05ade8480cd542415684f0b0f93664"],["/tags/支付宝/index.html","96cdc6b1fe71dbc2b6fab09d9fcb2ed9"],["/tags/政府网站/index.html","7be820eb483a2a3df3bac6a2f3187696"],["/tags/效率/index.html","242fe0b66b7e7077ba10bfb6b5590857"],["/tags/日历/index.html","5c0db44bd5d5eef8ecc9e780a02cc496"],["/tags/服务器/index.html","b4bac5310adcf8a5ee325da122191e53"],["/tags/机场/index.html","94f9155e974f019572a0c725054fff96"],["/tags/桌面/index.html","58ce2e5ca93cc1158142fefdbde14864"],["/tags/梯子/index.html","6a146b580cc5b7444dca0638b72ff91f"],["/tags/检测工具/index.html","3fa5490c0b3f9d39ebbcc8441f8fbd66"],["/tags/汉化/index.html","a520b0e17fbd1ad43b30a8343c96235b"],["/tags/测压/index.html","d3d7ed35f7ffaa977b18af1f0f215f4a"],["/tags/测速/index.html","c49e729013ac7567412cf12821c0b1f4"],["/tags/浏览器/index.html","60efe2f2e76ee7c8792069f1431a49cf"],["/tags/清理/index.html","c87ae4769c99f68a980d79ab952db825"],["/tags/滚动条/index.html","0275f9c782c07c4fb8b547256e607a95"],["/tags/灰色歌曲/index.html","10fc9b8bfb52fe1dd24ba7b5d67ac719"],["/tags/电影/index.html","3cb873c6b5402ccf5dd4402ab6a6ea0e"],["/tags/电视剧/index.html","2b0ea2964ae971c6547a41f6e50e3215"],["/tags/白嫖/index.html","c41a1477ecae7a96f4b30f420a000cbc"],["/tags/百度/index.html","5d3c56e3467286fe4da40593d774b1cb"],["/tags/百度云盘/index.html","60a09d705f9c5fb83315d80c9e04b055"],["/tags/百科/index.html","1bdf1a105c59a9222046f70a11c343fb"],["/tags/短信/index.html","4b43ffd5f3b5556a1ae445fd96b4fe11"],["/tags/硬件/index.html","6367ddfd608703e7d8582fb4f705e33a"],["/tags/科学上网/index.html","d3e58087d272e03285b9614d45508628"],["/tags/空间/index.html","268da5ea1ce8955ca4e17815cddcc10a"],["/tags/笔记/index.html","ba37026bfd5fd096a04cea7d67c6ffb5"],["/tags/简洁/index.html","5055eb0eff4b6181c5d24f083b53f8e5"],["/tags/简约/index.html","9234f7e6a3bae928974912ade2c81150"],["/tags/维基/index.html","1e50988bf9dd81ee0c406b7b55572af1"],["/tags/网易云/index.html","82f8aded7be066087e52c7918b93f33d"],["/tags/网盘/index.html","4abd5aaa83c2c4d965fba629094bcb32"],["/tags/网站/index.html","9a024778386ad943823189b03a8e5469"],["/tags/网络/index.html","a69c2b28f686a8f70898347f85a2b3b0"],["/tags/美化/index.html","e12ea2a8a5aa3a0b7245365acd634748"],["/tags/翻墙/index.html","f38d3ed65b2f50b2a4453c21ad8c23aa"],["/tags/翻译/index.html","f494724678da48c49fc4d0ff222d2a20"],["/tags/翻译器/index.html","58c62589ade671f15e7246bec26e41a2"],["/tags/聊天/index.html","1bdee2ccc80921a76f535b0d3605b5f0"],["/tags/聊天室/index.html","12e27ba4983b094635d57f0511de4118"],["/tags/联想/index.html","d67266fb1c5757549da1525f084373b7"],["/tags/节点/index.html","e05bdc12512d38682911c6770b5e9338"],["/tags/虚拟手机号/index.html","a84847084c56aaf4f089a76a63d510c6"],["/tags/补丁/index.html","c7839be11229a0d27c7d3aa5fbe23cf9"],["/tags/表情包/index.html","5b0c769d0a7641fb76f1ee24d63afae1"],["/tags/视频/index.html","20a7c8b4236ecd148f0b9ac6df67ed15"],["/tags/解析/index.html","758e686978cea202cf7d75c37e9bad8f"],["/tags/订阅链接/index.html","05249a38d16e42d38cf9e20559bbb1c9"],["/tags/记录/index.html","f157e38ea1ebbbd76afb19ab8d945ec1"],["/tags/识图/index.html","e2c290b72ec2937182329fce59c17a17"],["/tags/语言/index.html","ceef2c64c8b89e7ee6356d9f8389d557"],["/tags/资源/index.html","2b88127f6b0eae53817513136b98ad7d"],["/tags/资源管理器/index.html","38a267851f6851b53634bfc218ea2f35"],["/tags/转移/index.html","5274224f19d0d571014ced264402f264"],["/tags/软件/index.html","179e56bb159356cc80716d02175f22d7"],["/tags/轰炸/index.html","0c8aaf77dbe2f27b5c67b5d01300884c"],["/tags/迁移/index.html","ee60fcba0e05c04e2345972ac95f582e"],["/tags/远程控制/index.html","7920c41318cea21fc0fd34473a416936"],["/tags/连接/index.html","25a28a71577e691bc0ade684a684e864"],["/tags/追踪/index.html","89dc03e5ff84d715a45544b4fe46646f"],["/tags/速度/index.html","ac5e98414c9021bd27709164e3411b05"],["/tags/邮箱/index.html","7f4ba0bc2f491b8f725dbbfa2ada7ef5"],["/tags/酷炫/index.html","4bf1e4a87afe76c8084980e0c7744bf3"],["/tags/钓鱼/index.html","40f62f09706f3dd0a6232504e5956f60"],["/tags/镜像/index.html","659a1442917e3032a7d2dfeeb8afc51f"],["/tags/随机/index.html","66590e907450c8b9f0b68e791c72986d"],["/tags/隐藏/index.html","644817f7147c4168ab716dfd0b6d9a07"],["/tags/面板/index.html","f1a4d88607d6e2b93594f900e59b09c9"],["/tags/音乐/index.html","36a687a5985ea3a1278850c3ce84d60d"],["/tags/高颜值/index.html","0273f140126c431100d29540eab8f575"],["/tags/魔改/index.html","0dd3477ff128efe855ea605e4dfc48ee"],["/tags/黑名单/index.html","09bab6c82f7d0096a69a1600ef765d24"],["/urls/index.html","3d800b27a10edc4987fcecb384238ed5"],["/vps/index.html","6873548e859bcb32722bc6b413d276b5"],["/支持/index.html","7f9902a29556a5c56ae84642587ff9fe"]];
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
