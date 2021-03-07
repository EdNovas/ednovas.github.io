/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","77fca2fd666b7e5ea7ad1f1ca0344b6e"],["/2020/11/29/clash-windows/index.html","ebd2efe72cbfa360c12722e041917c28"],["/2020/11/30/websites2/index.html","079edeca52514682072b8759abb21ee2"],["/2020/12/04/iphone4s/index.html","115f9bcdb5b375c2cb2ef2df49191c6d"],["/2020/12/04/onenote/index.html","750970a15f237ff8ba8c3d0ddcd7bbaa"],["/2020/12/04/wesites1/index.html","90d877324ba583ca9001b0ec5aa2c62a"],["/2020/12/06/nokia808/index.html","b2bd2bfbd822410fe97bfaf34f17e0fd"],["/2020/12/07/ipad1/index.html","b91916a0126dafe1b202af9b1a629cb3"],["/2020/12/18/freesubscribes/index.html","9158f38645e0e3a75fc238c4e617b49f"],["/2020/12/19/musics/index.html","a2fde0e422d258239c4fbeca26597aa3"],["/2020/12/19/shadowrocket/index.html","60b137b756a10a9f31cbec121c094fbb"],["/2020/12/19/v2ray-windows/index.html","db36e404cd90d48f4b682f3d937d31d4"],["/2020/12/19/v2rayng/index.html","1fed5d6915bbb621911197e6bb24f29c"],["/2020/12/20/beoplay/index.html","1a3d3f990d518836c6287d14464e818e"],["/2020/12/20/订阅链接转换/index.html","29f80d99c87487ab5f35f1bca8357ef0"],["/2020/12/21/chrome浏览器下载提速/index.html","ea81c323995de3a27a9c6a8e42f13a24"],["/2020/12/21/免费128线程并发下载xdown/index.html","788397ce466bd3992c760f8eafe68b98"],["/2020/12/21/免费32线程下载软件ndm/index.html","bece670e8a6ad4cec6fbba76476f5a98"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","0caabd5b4533c1e74b6a7904cff4f124"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","c53b3ec500b64dc47fafb29688bb2e66"],["/2020/12/21/广告怎么知道我在想什么/index.html","828bae7fa69fa181a5bed422cc4036e3"],["/2020/12/21/无名·引子（小说试写）/index.html","2df8f121e5688a651f4379d0469a6438"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","0b6f40f50c6ac2f9b3240123647cb986"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","cdd0a3264d067de843699a13d2640624"],["/2020/12/21/高速轻量下载器aria2/index.html","2649ff90d4734b24bf07048e3f709c66"],["/2020/12/22/2020-cee-roo/index.html","bafc8b287318a57780a406e343c63f10"],["/2020/12/22/firefox插件、github、steam富强/index.html","d043be8844019cfbee4ea090f83e164c"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","63131b9a89eab60807e513f232b93fab"],["/2020/12/26/python-day-1/index.html","113035434e7857a0c2722162242dc627"],["/2020/12/26/python-day-2/index.html","0e64dca2cb4890d86e74ed54a9697c05"],["/2020/12/26/度盘不限速下载方式一赏/index.html","d044b2e658d0f0d255c2f14b0137c81a"],["/2020/12/26/添加开机自启软件/index.html","b840c1f7763386b2787094b21001474f"],["/2020/12/26/电脑端截图方式一赏/index.html","f31127252b8fe4ab658ae9a07412220b"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","a6c03bb3b56efbc49e9a79bd734adbe7"],["/2020/12/27/最安全的浏览器tor/index.html","1d64b2933347159b44a52951ad021c1f"],["/2020/12/27/网易云刷等级和听歌数量/index.html","87db2660579477b9b85d620047cb2681"],["/2020/12/28/freenom申请免费域名/index.html","a95dac1420c5b3e118339a74df12770f"],["/2020/12/31/机场/index.html","83ac38b34345c249079fcfa31cc3ebac"],["/2021/01/01/M1/index.html","0077f778976ba0c9becaf403e56c2e30"],["/2021/01/01/compress/index.html","7a1a097f72b68b3a8e0ef70bd6c3103d"],["/2021/01/01/infinityfree/index.html","787b0049e1f1d23e75c497bc99e6f270"],["/2021/01/01/硬核翻墙/index.html","fe25906cf575934fb1fec0f44df706a7"],["/2021/01/02/qq/index.html","6f683577bd175815dbe6925d21e98674"],["/2021/01/03/netch/index.html","9d39b53d2079b4d4f3e5577e13062b52"],["/2021/01/03/waifu2x/index.html","4f1a4864cd7a18c05519f4adcdf45f66"],["/2021/01/04/ads/index.html","76883df6cd55e21b6f5c3ce021adb13f"],["/2021/01/04/games/index.html","d41c521549769a370532c4bf7eedeb00"],["/2021/01/04/heroku/index.html","cc483dba4b184925266211ee9cbc948b"],["/2021/01/06/movies/index.html","1398b0a85c50d2ccc2dfe4ab849edd28"],["/2021/01/07/google2020/index.html","5d7b737d3ca41746b52992c6adfc9b2d"],["/2021/01/07/lucky/index.html","62ded15563b437c12eef20d8cd06836a"],["/2021/01/07/spotify/index.html","1fe168012b493001e368e661326238c8"],["/2021/01/07/thunder/index.html","3ede3a3283221f46bfaea92d67609ed9"],["/2021/01/08/adguardhome/index.html","e76df78710be73600dd40d239042e69f"],["/2021/01/10/IBM/index.html","eb898dd1348da49f26e47972abf1fc55"],["/2021/01/10/potplayer/index.html","708bc4cab2f3b7aab19d6167682c05b2"],["/2021/01/10/sakuraanime/index.html","fa9740f3687bfd1d10737805d591ce57"],["/2021/01/10/美剧星球/index.html","e960909ca55c6ca9471626a351b0a928"],["/2021/01/12/telegraph/index.html","2db7fcdf5780e93ffa112f4ad5e7b84a"],["/2021/01/14/comics/index.html","e215724fece9c301d06c38e92737bf64"],["/2021/01/14/ftp/index.html","aaa33111440369e12b7af624415a716f"],["/2021/01/14/oraclecloud/index.html","d743545c56037687e148690b92efb672"],["/2021/01/14/porkbun/index.html","6ba873cc48182b24033df610bfd9a7b3"],["/2021/01/14/powertoys/index.html","0c5f630b31ad140ce6d9415756c99945"],["/2021/01/14/taptap/index.html","49e791582948fb5f253ae5da4e810688"],["/2021/01/14/ubuntuvsftp/index.html","05f97e5649b2aefdfe1bcf5f803a3ae2"],["/2021/01/14/小说/index.html","cf9e11e934a8e573f9da948b393b957b"],["/2021/01/15/freeproxies/index.html","44e8cbf11f3cd9e18e6d47e035b12797"],["/2021/01/15/incaseformat/index.html","6cf240356d86e8663acb31a1fab9ad40"],["/2021/01/16/euserv/index.html","752656e336dcc873950e3020d46080cb"],["/2021/01/16/winxray/index.html","ced841bb3e1c5d4da9ba23ae611c656a"],["/2021/01/18/qqreadhistory/index.html","85fab501ad69e5f67f78abf7e32e34ec"],["/2021/01/18/qqrevoke/index.html","d757ef23baab487484b1028f1dab397a"],["/2021/01/19/freevpn/index.html","40c13f78c645c47fefbf44d3eb86d2a0"],["/2021/01/20/browsertrack/index.html","b6200e0ad63f791e989c541f6e811f62"],["/2021/01/20/v2ui/index.html","92ae565ba0fb868b4036f35cbebf704c"],["/2021/01/21/failedtoconnect/index.html","e62948ecdb4f8e7a17bfa5aa3f4e1b83"],["/2021/01/21/gitcalendar/index.html","3b3c3b573df8709b0e10d7f401004758"],["/2021/01/21/markdownformat/index.html","6b13b14f2c5e86a5a8bfca1c4b05888d"],["/2021/01/21/markdowntable/index.html","9cf809b6e3f05d9460b97cdaa72ee9f9"],["/2021/01/21/vercel/index.html","c7b063bd24d42a36bafe7ba7add85cce"],["/2021/01/22/hardware/index.html","6bad3350f034556b445af00fd08575f8"],["/2021/01/22/muviz/index.html","e02504b7d652319ccab017eb91f75011"],["/2021/01/22/randomapi/index.html","c2c4e24dc61d81c54ed39cc41baaeea6"],["/2021/01/22/searchimages/index.html","65dbf88aea192376c98b38151e32d2ff"],["/2021/01/23/RX文件管理器/index.html","6475d9b5707c44313faad4cec79f278e"],["/2021/01/23/chromeflag/index.html","5076cc7234c73b12ed1a53c2659c489d"],["/2021/01/23/qttabbar/index.html","de4f0e18610a4ac437eb0279c3949cc6"],["/2021/01/24/githubspeedup/index.html","2e7afedc043288bf508683af49046927"],["/2021/01/24/jsdelivr/index.html","fa7f9cde47587edea0e624d1eb963fdf"],["/2021/01/25/note/index.html","f4071b30c538d756183d002f1d38af22"],["/2021/01/25/soul/index.html","8876c9e632f196187d948e7d4403ac5e"],["/2021/01/26/herokuxray/index.html","6e4182700df51310645f9f95818e7c54"],["/2021/01/27/proxypool/index.html","62593cce5bc9f569405c9e29fe053a61"],["/2021/01/27/tracker/index.html","041dd7c3cd16b9ed3f7cee40c7ff1d8b"],["/2021/01/30/pandownphp/index.html","038e43d58ab35ef7c6ba5af3be26a3b2"],["/2021/01/31/newgroup/index.html","8da62438f3073a4a15fef875908a0c33"],["/2021/02/01/clashlanguage/index.html","2c47ac7067a6aec7f6f7005891552d93"],["/2021/02/01/encrypt/index.html","07cd94ef24438562d3e74cedbf07f072"],["/2021/02/01/footermotion/index.html","b0643a804ebb8d7c3dc73ac15be1f0ef"],["/2021/02/01/gitter/index.html","4fd738f206ba0a7fc6ce36a46ba9158c"],["/2021/02/01/pixivtop50/index.html","e573170512780aec12a9c39d91498ead"],["/2021/02/01/scrollbar/index.html","b98daf6c5d4a5becd9a7b5a173c5c62a"],["/2021/02/02/clover/index.html","0ea30d1cd7f438793fb23ce911f210ce"],["/2021/02/02/maya/index.html","f9f0ae1f4c07250ddd45ffdf1bcbd670"],["/2021/02/02/speedcontroller/index.html","7804b2a8879117ce985170fc53a20dc8"],["/2021/02/02/yesmusicplayer/index.html","fb7eb0b6a5ff7d65eda6c7fa610eb920"],["/2021/02/03/lenovoonelite/index.html","2c93215a94f84c38e53f1b3ee3deb67f"],["/2021/02/03/skipads/index.html","e43d8c32cfc76317ac487e400a62cbb8"],["/2021/02/04/picseed/index.html","f42f70e856d4f3c31f60b8b609a43291"],["/2021/02/04/renren/index.html","bdb6bea08b0d7c1da1823be1489e39a0"],["/2021/02/04/serverstress/index.html","ca2a10f3083de76f9e5abf0d0e4db2da"],["/2021/02/04/wikipediazh/index.html","03d81bf5ab58d281fdfc30a1d0b5c346"],["/2021/02/05/googlevoice/index.html","926b2c4ceae84e813dfef747abaa31c1"],["/2021/02/06/clashconnection/index.html","0b71e0e0fd3afa0fc5a29c2f976b6e48"],["/2021/02/06/gvtransfer/index.html","9d3e109c698f6a3aaeea67025ccd3586"],["/2021/02/06/todesk/index.html","824976f5db0704f86c033c95620cd392"],["/2021/02/06/vpnblacklist/index.html","80813c8ef8e6253dea967ace05645805"],["/2021/02/07/mklink/index.html","34e95d4cb561cb8009e7929ab4609a04"],["/2021/02/07/speedtest/index.html","4391fd905247e40a1f7d175c5e3b3e2f"],["/2021/02/07/translate/index.html","1fc3a56511d943542b83b4824b07f5a2"],["/2021/02/08/ewomail/index.html","f7b339d57e491d8c3f0e59932b40157f"],["/2021/02/10/officee5/index.html","c74bcd68241e715618209986eacc4c39"],["/2021/02/10/raidrive/index.html","05445f15dc5e781715222f60799c2f90"],["/2021/02/13/e5sub/index.html","e5391bc10343de3f3cd44c481254104a"],["/2021/02/14/screen/index.html","015a64f975323555cb908573e8b7308a"],["/2021/02/15/clashtun/index.html","6d1ba6cb8735d18d4c7c01750d249f82"],["/2021/02/15/messageboom/index.html","91eb24e4feb75b5e8d8547f674bb7004"],["/2021/02/15/oneindex/index.html","6b9cf7fb79e8884871d30b4bcc79a5e8"],["/2021/02/16/govsites/index.html","fc4cd1c5b471b662d19a0ce415ecff77"],["/2021/02/17/hexototypecho/index.html","16dd2e241775b952d2967b956905f81d"],["/2021/02/19/fiddler/index.html","622def0ebda165d1bbc180fbf1adf66b"],["/2021/02/22/potplayerset/index.html","e25d587789e66269f2c734d6088e1f41"],["/2021/02/22/studyresource/index.html","33380f90a073ca7d70c8b6faf2b8aefb"],["/2021/02/22/telegram/index.html","4f21a45330d8af5f7495df04e71f2c0e"],["/2021/02/22/videos/index.html","cbac3cfb6cb98097082376ad4dcdd242"],["/2021/02/24/mtproxy/index.html","c17828cda02eb6f1629444a1cf1bac9f"],["/404.html","f76acec4e750b1228b8a1ab2787484e4"],["/archives/2020/11/index.html","c284f51934d78eab98f341876be6663d"],["/archives/2020/12/index.html","a90f39ec46afc724de164a0d0a2c0472"],["/archives/2020/12/page/2/index.html","6ca2dc129253a4ef841907c444063db5"],["/archives/2020/12/page/3/index.html","8dc928e8c18b3717b31de56c26a10257"],["/archives/2020/index.html","ef3ad3bfb928f73841c2937905e8a2f3"],["/archives/2020/page/2/index.html","aee797aa10138dc2691c5a3303dd0cd9"],["/archives/2020/page/3/index.html","09d9a8eff7cf8238976e0a5280c91f13"],["/archives/2021/01/index.html","d21b97324c24f7d378c6d387d999b785"],["/archives/2021/01/page/2/index.html","14f0a59a70db419e6dba744f92425144"],["/archives/2021/01/page/3/index.html","3e4592d18939d5535f1c150b14378432"],["/archives/2021/01/page/4/index.html","6f01bdc960ba26431c0d705fa3d6225a"],["/archives/2021/02/index.html","51c048c4f11dbc9c44ddea403dd2b6d4"],["/archives/2021/02/page/2/index.html","96176d9525e50f78b265c919afbf7112"],["/archives/2021/02/page/3/index.html","3de1d6adbbb64e717363374e0220b6d2"],["/archives/2021/index.html","5536207542cfa71bc6402629fdfe73f1"],["/archives/2021/page/2/index.html","473a1e4e509a34737bbed3c62f14f44a"],["/archives/2021/page/3/index.html","ecc33142412c560af6c25964606c59d3"],["/archives/2021/page/4/index.html","9530c3989510b0ea35a03f93c5aae330"],["/archives/2021/page/5/index.html","d22b204c20161548e808dfbdcd4e8c8d"],["/archives/2021/page/6/index.html","f4be269ef9a93594094416693ffe6253"],["/archives/2021/page/7/index.html","293699acc57322113b6c3525627f00ad"],["/archives/index.html","942a588011894904baaa1d7c5d8c32a5"],["/archives/page/10/index.html","c4e09c0c6cb52f1701fae0606d390454"],["/archives/page/2/index.html","c8a31924b0c0473e53703bdb2e4996d7"],["/archives/page/3/index.html","9149a469c71fb723eda80b85f0ed0609"],["/archives/page/4/index.html","b4e791dfd355914067d8b70bcc4c8c4b"],["/archives/page/5/index.html","53543095d2b24218bd199609e9ef1496"],["/archives/page/6/index.html","9cbd7a63e23d84d12d3532ec7665cf05"],["/archives/page/7/index.html","9acdda61d2995defb6e37bda52ae453f"],["/archives/page/8/index.html","8dd33fcad2169122eee23883c7bddeec"],["/archives/page/9/index.html","c38f7f3f0bb37158a87922338c4b96d3"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","6f5e6408e679df715cda0343772e6359"],["/categories/index.html","8c7a87c22cc0492a002f6844719499d7"],["/categories/下载/index.html","008a0e6dcd6e52c1d231cebd15699b0b"],["/categories/安全/index.html","c260f4ec4d62d66df936563d930fb3d0"],["/categories/建站/index.html","7f5f21fae6150650d65d45b970369b3b"],["/categories/杂/index.html","bea5a88282da9fa641009adf38a917e6"],["/categories/杂/page/2/index.html","634161257f0a77a6fe8d276af37c9c14"],["/categories/测评/index.html","e8c2b1a5089c2268d7b9a1f0eba99fc7"],["/categories/科学上网/index.html","178d3fe2ed6d4febae015dc1f81f3cb1"],["/categories/科学上网/page/2/index.html","7eff3f6e7fa1fe00793507d7ec13c601"],["/categories/编程/index.html","494a1550b8c5cd2281c84f9da6936f1f"],["/categories/网站/index.html","f05eac297e47f48ea93b5d9a33ec2287"],["/categories/网站/page/2/index.html","3ffc1f6f09cd82880169c199882ed165"],["/categories/软件/index.html","bd05fb27cb863ec5bf4f0ad7e315f0e1"],["/categories/软件/page/2/index.html","edbc579727700e5671c026a83a4e9144"],["/categories/软件/page/3/index.html","38037b9f3f7187f559433000c528414d"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","29bb8a99f0d7711fb7de66ff93a135c0"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","c92ffcee39a8bb13c7f93c697e4d629c"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","8fee7c9bb1c85d9ecfdf3b75135ae1ea"],["/ios/index.html","b093285675e04728c767356547a6ca15"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","02f224a959191746dec2334dc630158b"],["/page/2/index.html","555a07aa854acba949ea3ba2cffc58b3"],["/page/3/index.html","669875c246ac14a2e06e0e6bb01df49d"],["/page/4/index.html","1dd6ca17dbbc8e4ae444c2f3875f87b1"],["/page/5/index.html","f818c52140c230c65631ec7e1f8ba9f3"],["/page/6/index.html","91a51fb36d57833d0661886f010c44a3"],["/page/7/index.html","94fabb34322081017665eeef12403797"],["/page/8/index.html","e175e7dbb85bfbf38478adb7deb0b810"],["/page/9/index.html","37317d909e3e3b4e1fe259457da70956"],["/payment/index.html","7db79f7943f171054af6c2db2a06eb5e"],["/privacy-policy/index.html","8ccf5237939865369a0a88fa4e3c2b76"],["/rss2.xml","107a7a1d137675f37fe74049846a2acb"],["/search.xml","9ad81268a34ee311395c05ab21e03dca"],["/sitemap.xml","de7d016a6b18a65edd7b1521677babe2"],["/sw-register.js","f3d0850ca55a2392fb7dfb99c5d0c6e2"],["/tags/5t/index.html","412745fb55fb7d24f8038be16da83b23"],["/tags/Clash/index.html","15bfbf1954ddb5ea6d80f75f2a53d643"],["/tags/Clover/index.html","24d3470f5a9d8e97d18aff0e46156865"],["/tags/E5/index.html","f5f2c256c7a8999182c2ddaf24510f16"],["/tags/FTP/index.html","7a7098e24597edb354aabf0d9a253f1b"],["/tags/GitHub/index.html","11568ce9d35453e98bac75421e3cf7ea"],["/tags/Heroku/index.html","a86c861fd10e0a113e6c7d25aab20610"],["/tags/Hexo/index.html","a78bcd55d31255ee4fb6cd80c650c86d"],["/tags/Lenovo/index.html","a9ce5590148cffb1b188aa583c0160d1"],["/tags/Oneindex/index.html","7159c900005f13a80834fcca98e7477f"],["/tags/QQ/index.html","c68d293204caa70393926876bf8ad55a"],["/tags/QTTabbar/index.html","6c1575d0f18f51bcb0cc03786d594d6d"],["/tags/RX文件管理器/index.html","d4dccfeb4f68771475449622a49dd0ba"],["/tags/Todesk/index.html","fd6a9a9e13bf63a111be8fdc662cc2e8"],["/tags/Vercel/index.html","f0c6da24ba06a8289ad7535dd2693de7"],["/tags/ads/index.html","f8e672cab8eeb4ae8d4c8e1e35f8adfd"],["/tags/api/index.html","1ae63c3673753e4a3a593ae82e2e4d1a"],["/tags/app/index.html","058875110e77b1be6843eeabcf847ba4"],["/tags/blacklist/index.html","7cd30dbc24fb6d1eadbdee613ae56f6b"],["/tags/butterfly/index.html","3255441a742623c1968a515951172be0"],["/tags/chrome/index.html","fcefbfa6ee20f08f6e521401f8d27ad9"],["/tags/cloudflare/index.html","6d8e6c333ce8356ba6177becb84794ac"],["/tags/cmd/index.html","9cd611c2e8eff6a0bb03c2aa40764cfb"],["/tags/c盘/index.html","b994b841d2a42f5463b8710c13ee0230"],["/tags/email/index.html","b6e85e797a67a4c3521c8ed430c59dfd"],["/tags/ewomail/index.html","17f333ceda3f1b41b962e9c93498da7c"],["/tags/fiddler/index.html","7dce97029a388084257985db9efc59e4"],["/tags/flags/index.html","346e43852586bc4bf693e6176810c684"],["/tags/footer，页脚/index.html","b913d533df2fbb6896f6a38f1259e8ad"],["/tags/galgame/index.html","01f644be0c1c2d31b57b0aa21fe004a7"],["/tags/git/index.html","69cf6deb8d5fe1e95348d38d637ee467"],["/tags/gitcalendar/index.html","993848e83d495ca95e52857b2e664ae9"],["/tags/google-voice/index.html","e01de1cafec12ae88537f18cb4529aec"],["/tags/gv/index.html","1da572b579261566a5277b864057b0ab"],["/tags/index-1.html","42b51793a0d04e39768daee73e09ab3a"],["/tags/index.html","8bd6997b23e1fd8ac9390604e6e1200c"],["/tags/jsdelivr/index.html","0a09b7349721a85ee6331aac5c91f311"],["/tags/linux/index.html","292bcb51402298caa5a9ce8750b4bff7"],["/tags/madVR/index.html","5702a212e495ee4e310f8a9c59c827af"],["/tags/markdown/index.html","3214892e0bfe6c3d2a6d03b769644a03"],["/tags/maya/index.html","10b57ac948a0104bbcae5831a313abfc"],["/tags/mklink/index.html","99564a720017ae17e0a4ff1e4721e51d"],["/tags/office-e5/index.html","528563890cf18fda93b954b9b324d14e"],["/tags/onedrive/index.html","36a3f50066e5c59b21656b8bf38641c5"],["/tags/picGO/index.html","afa142da4a72f719de3d2d473de503bc"],["/tags/pixiv/index.html","c269dcad0c54b7acce421e376646b1ff"],["/tags/potplayer/index.html","89cc7eea650336821147923638a59311"],["/tags/proxypool/index.html","81fc2a54a0f1cfcbc6263abd406ae440"],["/tags/qbitorrent/index.html","ea956bd9390234a5d33667b035b18ecc"],["/tags/raidrive/index.html","65ae2ee7f12dc6a4169e9208f4f73e29"],["/tags/screen/index.html","6a541daa781c383a12a7db1102e5bb0a"],["/tags/speedtest/index.html","49fc1a0ba1d7732df9b2ce6104f0f1af"],["/tags/tap/index.html","ac78d28a2a361871b099b1428ffbad5f"],["/tags/telegram/index.html","be04c84f256d1a757fc20f46e36d567a"],["/tags/telegram代理/index.html","7e949cbcbbb228c6bbcd0785994bae38"],["/tags/tg/index.html","4bfe11b5da3b1d431e3d0de176821c93"],["/tags/tg代理/index.html","0fd4efe052412cdc548a06a90aa42540"],["/tags/top50/index.html","9d6a3352f93384062c0ded8e5d2a9a5c"],["/tags/tracker/index.html","4f950c36c1ffcfcc672962bb8fcb5215"],["/tags/translate/index.html","cb495a8dccf5bd28882842a4c8f0f8f2"],["/tags/translater/index.html","705134172b472fdc77f293a30a7ce769"],["/tags/tun/index.html","f0806951300de2448758dc2c197e9a33"],["/tags/typecho/index.html","641e5d53722031bd24ae133527a10b5b"],["/tags/v2ray/index.html","55351e7ebb6bca63bd1886385e634dbf"],["/tags/vpn/index.html","159ca92fdd1610f8464af637c3ba0ada"],["/tags/vps/index.html","28028caf96e808bd785d2f5c71615255"],["/tags/windows/index.html","91136bcf4a218c126df0cc45242150e2"],["/tags/windows端/index.html","35c0c797899255463d5d915e88867bad"],["/tags/xray/index.html","ca309ddfcf2eb4553041983d3bdab5d3"],["/tags/下载/index.html","ccd3341f24b18a23ff4035747fe8863c"],["/tags/不限速/index.html","dac390b6b5a163937071a09c0739665c"],["/tags/个人网盘/index.html","0ad84950eaa4351deac512b902c21c66"],["/tags/主题/index.html","104a2522fd936b57ce566f9110113a12"],["/tags/云便签/index.html","f7863eaeef9f3f4565356eaf80609f09"],["/tags/云盘/index.html","2d11d39eae4a674e932b51f0c9f8ae79"],["/tags/人人/index.html","a309fa99b0e5569827f09f87d83199b4"],["/tags/代理/index.html","3dcb946a3a366a421a4075bc0a99341e"],["/tags/代码/index.html","806fcb967c6ca25511af2cddaa99a182"],["/tags/优选IP/index.html","6e7e528af186dbb25c72b7630cfe02d8"],["/tags/便签/index.html","eed95a938597587406a92e25e2f3e2f6"],["/tags/保号/index.html","003833b1b9670b278f089fc4da2c5b1a"],["/tags/免费/index.html","aac7a179a1d3da27e600f80f35515bb7"],["/tags/免费节点/index.html","b10130e31b89c4fc57359c71645b3076"],["/tags/加密/index.html","d27fbb1eed2c744b976a9dbd07f880d3"],["/tags/动画/index.html","c60b56596314594e856b4f237210e343"],["/tags/博客/index.html","3266388aabb88daa4adc00eaa0bce007"],["/tags/历史记录/index.html","8ec6c594b7ba00b8b17d57eb6139295b"],["/tags/压力/index.html","0dac9c5445ea92cff534716d98a5cefc"],["/tags/压缩包/index.html","216f784c38dd3c75857cb32d54008f51"],["/tags/反代/index.html","ae78c1f3e57615a6bf2f08c9893706ff"],["/tags/可视化/index.html","099a54c6927d77965511e9ec3e797a72"],["/tags/命令/index.html","f85785ccf42b212aa1036590e9f160d8"],["/tags/国家/index.html","869519e607a365fe540d2722a4d0980f"],["/tags/图床/index.html","2fc159dd9929d2a1376e2499f3f84744"],["/tags/图片/index.html","fb1316397428398e37662dbd9adff833"],["/tags/域名/index.html","19f199678413d4c7b0dbb911d6720e16"],["/tags/多标签/index.html","9d22bbd8dce8a35a38889f0a41ee2a38"],["/tags/存储/index.html","1dc5ab202038c90bbc0dde057b66b597"],["/tags/学习/index.html","5a8042beadfab574e768e9a781bb3061"],["/tags/安全/index.html","d0d18ecaaf4b674c3d6e458d59faff08"],["/tags/安卓/index.html","70feb89cb2cf640accee7633118b6bf4"],["/tags/宝塔/index.html","7977f9467c0c9a54822d19e6979eed2d"],["/tags/广告/index.html","d77cd2b0260ff7d1f206b7d246bc2304"],["/tags/建站/index.html","e92e6f8fc773372649c3f54527c00fb8"],["/tags/影视/index.html","de59c2ed1e6d23b4ba93f3e6054d5f39"],["/tags/快速启动/index.html","3929e6a41f443dfe0ac673905996a26d"],["/tags/手机/index.html","08724d70140a02cbe3f6f2886cd60340"],["/tags/托管/index.html","3bd8d223d34c8226a4bf8d4e1def36ff"],["/tags/抓包/index.html","c9d45eef74438f42fc9404ae20ed90de"],["/tags/抓取/index.html","44904fd723fc871e374a430c11b65b43"],["/tags/投屏/index.html","a5cc9264f514ca6d35694ba892a61de0"],["/tags/拓展功能/index.html","9591a9314a696ea77676aa0e214d452e"],["/tags/挂载/index.html","9ae1933935df60fea7bc50464aad97bc"],["/tags/指纹/index.html","4abb6117d378a3600a30c9499ea76521"],["/tags/接口/index.html","68e17c80a7a043fbe47f47bac14fbd30"],["/tags/提取图片/index.html","ca28b039bf9d64821a6c40e34c7ae77a"],["/tags/插件/index.html","12e6b8b37d109216961708884ada9512"],["/tags/搜图/index.html","f3d3bb87198abe72fcf0f7ced44ee786"],["/tags/搭建/index.html","bc7b27320efff5b3aaf39be01d6dbf74"],["/tags/撤回/index.html","2239175631ccb25ee1f56520ec202991"],["/tags/播放器/index.html","28d78ddc07a673ca0b3c73c337c63827"],["/tags/政府网站/index.html","8e0c3bc46d7bf5cc105f4585ed0826e8"],["/tags/效率/index.html","574487fb82b91b02fe823cbc1d921d32"],["/tags/日历/index.html","4a5b33654ca2e8c2858514173b2418b0"],["/tags/服务器/index.html","7aa436e19fde5bf9813634758ff071ec"],["/tags/桌面/index.html","2c5500371719877c879579c0cf191dee"],["/tags/梯子/index.html","f400e0de6b7f280c191ca8d4d6f47942"],["/tags/检测工具/index.html","d40507931f6536c0bc983cbea0da10da"],["/tags/汉化/index.html","ba324f30b57b2a7ca01443e7ca529e28"],["/tags/测压/index.html","f98e62fe5a5075b5e436f09711abde3e"],["/tags/测速/index.html","adeb5c658a23593e8fe4673e059c5140"],["/tags/浏览器/index.html","5310dacad28b8746d3b6af870dae13ab"],["/tags/清理/index.html","dc0c2b02495a93487fe86d7f04cf3547"],["/tags/滚动条/index.html","304226a5ce26457cfea74df7dac226a2"],["/tags/电影/index.html","0a0e77fe48e21630295a94ce062fec1a"],["/tags/电视剧/index.html","4f4f654e381bc926f945fd5b6174e784"],["/tags/白嫖/index.html","237b2d26f1b48ad85c5e60c12e39ab0a"],["/tags/百度/index.html","77dc709c7c3566a2a1da04c2500ff804"],["/tags/百度云盘/index.html","93d5133f9a12f02cc0beea5374379735"],["/tags/百科/index.html","5d733b903c2f57b8ae4545b209816808"],["/tags/短信/index.html","243c5765ac32331cee4d1a987a1454eb"],["/tags/硬件/index.html","0b204d892a4fc7ee3a9e3bb6a2b52e96"],["/tags/科学上网/index.html","bd8a09eca39e9df213f2d1154b298503"],["/tags/空间/index.html","08b97e4e577e308bfb55eb1ed8407807"],["/tags/笔记/index.html","a1324608b430a08b29861a0cc45ca2af"],["/tags/简洁/index.html","52428f592d44684ae913a43e58c37989"],["/tags/简约/index.html","7dff0ba7474bf13f637da5ddf2cb2fd1"],["/tags/维基/index.html","a12ec5d9785a6c57fc5a53411e25e937"],["/tags/网易云/index.html","f4e28b282dca945a4cd866f580fe50b0"],["/tags/网盘/index.html","7ba68d5b40698b6d2af0f1caec37f449"],["/tags/网站/index.html","0d9b8cfce504efaf5937145e325d3e02"],["/tags/网络/index.html","b115ad98e0ee977897a20457fb67f023"],["/tags/美化/index.html","48bd5c7ccb20fd83271b01639df5c855"],["/tags/翻墙/index.html","48f46e59cadadc2577f5d8fa8ad32ce8"],["/tags/翻译/index.html","bf9a81fb211cb0740d50dc6d37a9aaf1"],["/tags/翻译器/index.html","ca52657c4f716f891bcb540cb92ae9fc"],["/tags/聊天/index.html","8ee61f1f4a65a3c09c04edae961b55b9"],["/tags/聊天室/index.html","1852c7a8a77833cc193cc1fc9a62fdc2"],["/tags/联想/index.html","b9588939ca05af05355c31a77fa5edd6"],["/tags/节点/index.html","8340c9847653776831b51872083c558a"],["/tags/虚拟手机号/index.html","d8ee365bb111e13463beca0d6d9123a1"],["/tags/补丁/index.html","466ede6d5081e5d6c47a87b7bb8a03f3"],["/tags/视频/index.html","75e39ad9e99af2e7006ff82e50a894bc"],["/tags/解析/index.html","d12d108e33deb8356afb4a60bf0d59c0"],["/tags/订阅链接/index.html","1c93edda6f1549d662a16c56fb9cb6c2"],["/tags/记录/index.html","fe3d9a5b917efc098edb39cc19d719c9"],["/tags/识图/index.html","881cd79b4de8ac527de0d6f3386f3593"],["/tags/语言/index.html","168d376d3f35b35d09d3a4460769a4ce"],["/tags/资源/index.html","c7fbee0231f0e02efbb5683f88c8f0da"],["/tags/资源管理器/index.html","2fb068c26939f4557b691ed63059b08e"],["/tags/转移/index.html","372d201802677a2796f8cdac931658d2"],["/tags/软件/index.html","5b7418e480d8e504ee2e531198f13c97"],["/tags/轰炸/index.html","72d816eb199785cb368b2749d2808802"],["/tags/迁移/index.html","95b7320fe1f8714579ef5c64ba1d05df"],["/tags/远程控制/index.html","56845df11eceead481ca815c0c1d2eb1"],["/tags/连接/index.html","3bfe90c1d1e74aa5f996b5cad55b9602"],["/tags/追踪/index.html","c530173ccf9b4d21bd07e1fb44965f00"],["/tags/速度/index.html","b6768235684c0b12ca28c427a416c53f"],["/tags/邮箱/index.html","f280b4599be812ce69c62b3f36152b26"],["/tags/酷炫/index.html","0fdc85114eb14f163caabeffb707f166"],["/tags/钓鱼/index.html","2e213822135e3c3f112a48d6425bc663"],["/tags/镜像/index.html","e171737c0e0baa9b4aa72031d011a609"],["/tags/随机/index.html","a24756e919a5e91855615fdc40501195"],["/tags/隐藏/index.html","5852c168bc083abf2c63a9022c5cf86d"],["/tags/面板/index.html","3254f7afca3bc4f20586ea509e178030"],["/tags/音乐/index.html","20017c22cf58f414e198fd47efaebd20"],["/tags/高颜值/index.html","c481a4507092cf76525857f2d8cf408f"],["/tags/魔改/index.html","5b9adfcf50993fc54cebce05637f7115"],["/tags/黑名单/index.html","e70756591cffe104039a91aa299e75d9"],["/urls/index.html","71be1ba3a2a014df6ed19f116f6f7305"],["/vps/index.html","6a2f628fd72e1b5e9a87a4712ae99b75"],["/支持/index.html","80e042365beb1c2246a5375af11eb623"]];
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
