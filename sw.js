/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","77fca2fd666b7e5ea7ad1f1ca0344b6e"],["/2020/11/29/clash-windows/index.html","ebd2efe72cbfa360c12722e041917c28"],["/2020/11/30/websites2/index.html","079edeca52514682072b8759abb21ee2"],["/2020/12/04/iphone4s/index.html","115f9bcdb5b375c2cb2ef2df49191c6d"],["/2020/12/04/onenote/index.html","750970a15f237ff8ba8c3d0ddcd7bbaa"],["/2020/12/04/wesites1/index.html","90d877324ba583ca9001b0ec5aa2c62a"],["/2020/12/06/nokia808/index.html","b2bd2bfbd822410fe97bfaf34f17e0fd"],["/2020/12/07/ipad1/index.html","b91916a0126dafe1b202af9b1a629cb3"],["/2020/12/18/freesubscribes/index.html","806ad81876e423e272f30c18a7a4dc1d"],["/2020/12/19/musics/index.html","a2fde0e422d258239c4fbeca26597aa3"],["/2020/12/19/shadowrocket/index.html","60b137b756a10a9f31cbec121c094fbb"],["/2020/12/19/v2ray-windows/index.html","db36e404cd90d48f4b682f3d937d31d4"],["/2020/12/19/v2rayng/index.html","1fed5d6915bbb621911197e6bb24f29c"],["/2020/12/20/beoplay/index.html","1a3d3f990d518836c6287d14464e818e"],["/2020/12/20/订阅链接转换/index.html","29f80d99c87487ab5f35f1bca8357ef0"],["/2020/12/21/chrome浏览器下载提速/index.html","ea81c323995de3a27a9c6a8e42f13a24"],["/2020/12/21/免费128线程并发下载xdown/index.html","788397ce466bd3992c760f8eafe68b98"],["/2020/12/21/免费32线程下载软件ndm/index.html","bece670e8a6ad4cec6fbba76476f5a98"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","0caabd5b4533c1e74b6a7904cff4f124"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","c53b3ec500b64dc47fafb29688bb2e66"],["/2020/12/21/广告怎么知道我在想什么/index.html","828bae7fa69fa181a5bed422cc4036e3"],["/2020/12/21/无名·引子（小说试写）/index.html","2df8f121e5688a651f4379d0469a6438"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","0b6f40f50c6ac2f9b3240123647cb986"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","cdd0a3264d067de843699a13d2640624"],["/2020/12/21/高速轻量下载器aria2/index.html","2649ff90d4734b24bf07048e3f709c66"],["/2020/12/22/2020-cee-roo/index.html","bafc8b287318a57780a406e343c63f10"],["/2020/12/22/firefox插件、github、steam富强/index.html","d043be8844019cfbee4ea090f83e164c"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","63131b9a89eab60807e513f232b93fab"],["/2020/12/26/python-day-1/index.html","113035434e7857a0c2722162242dc627"],["/2020/12/26/python-day-2/index.html","0e64dca2cb4890d86e74ed54a9697c05"],["/2020/12/26/度盘不限速下载方式一赏/index.html","d044b2e658d0f0d255c2f14b0137c81a"],["/2020/12/26/添加开机自启软件/index.html","b840c1f7763386b2787094b21001474f"],["/2020/12/26/电脑端截图方式一赏/index.html","f31127252b8fe4ab658ae9a07412220b"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","a6c03bb3b56efbc49e9a79bd734adbe7"],["/2020/12/27/最安全的浏览器tor/index.html","1d64b2933347159b44a52951ad021c1f"],["/2020/12/27/网易云刷等级和听歌数量/index.html","87db2660579477b9b85d620047cb2681"],["/2020/12/28/freenom申请免费域名/index.html","a95dac1420c5b3e118339a74df12770f"],["/2020/12/31/机场/index.html","83ac38b34345c249079fcfa31cc3ebac"],["/2021/01/01/M1/index.html","0077f778976ba0c9becaf403e56c2e30"],["/2021/01/01/compress/index.html","7a1a097f72b68b3a8e0ef70bd6c3103d"],["/2021/01/01/infinityfree/index.html","787b0049e1f1d23e75c497bc99e6f270"],["/2021/01/01/硬核翻墙/index.html","fe25906cf575934fb1fec0f44df706a7"],["/2021/01/02/qq/index.html","6f683577bd175815dbe6925d21e98674"],["/2021/01/03/netch/index.html","9d39b53d2079b4d4f3e5577e13062b52"],["/2021/01/03/waifu2x/index.html","4f1a4864cd7a18c05519f4adcdf45f66"],["/2021/01/04/ads/index.html","76883df6cd55e21b6f5c3ce021adb13f"],["/2021/01/04/games/index.html","d41c521549769a370532c4bf7eedeb00"],["/2021/01/04/heroku/index.html","cc483dba4b184925266211ee9cbc948b"],["/2021/01/06/movies/index.html","1398b0a85c50d2ccc2dfe4ab849edd28"],["/2021/01/07/google2020/index.html","5d7b737d3ca41746b52992c6adfc9b2d"],["/2021/01/07/lucky/index.html","62ded15563b437c12eef20d8cd06836a"],["/2021/01/07/spotify/index.html","1fe168012b493001e368e661326238c8"],["/2021/01/07/thunder/index.html","3ede3a3283221f46bfaea92d67609ed9"],["/2021/01/08/adguardhome/index.html","e76df78710be73600dd40d239042e69f"],["/2021/01/10/IBM/index.html","eb898dd1348da49f26e47972abf1fc55"],["/2021/01/10/potplayer/index.html","708bc4cab2f3b7aab19d6167682c05b2"],["/2021/01/10/sakuraanime/index.html","fa9740f3687bfd1d10737805d591ce57"],["/2021/01/10/美剧星球/index.html","e960909ca55c6ca9471626a351b0a928"],["/2021/01/12/telegraph/index.html","2db7fcdf5780e93ffa112f4ad5e7b84a"],["/2021/01/14/comics/index.html","e215724fece9c301d06c38e92737bf64"],["/2021/01/14/ftp/index.html","aaa33111440369e12b7af624415a716f"],["/2021/01/14/oraclecloud/index.html","d743545c56037687e148690b92efb672"],["/2021/01/14/porkbun/index.html","6ba873cc48182b24033df610bfd9a7b3"],["/2021/01/14/powertoys/index.html","0c5f630b31ad140ce6d9415756c99945"],["/2021/01/14/taptap/index.html","49e791582948fb5f253ae5da4e810688"],["/2021/01/14/ubuntuvsftp/index.html","05f97e5649b2aefdfe1bcf5f803a3ae2"],["/2021/01/14/小说/index.html","cf9e11e934a8e573f9da948b393b957b"],["/2021/01/15/freeproxies/index.html","44e8cbf11f3cd9e18e6d47e035b12797"],["/2021/01/15/incaseformat/index.html","6cf240356d86e8663acb31a1fab9ad40"],["/2021/01/16/euserv/index.html","752656e336dcc873950e3020d46080cb"],["/2021/01/16/winxray/index.html","ced841bb3e1c5d4da9ba23ae611c656a"],["/2021/01/18/qqreadhistory/index.html","85fab501ad69e5f67f78abf7e32e34ec"],["/2021/01/18/qqrevoke/index.html","d757ef23baab487484b1028f1dab397a"],["/2021/01/19/freevpn/index.html","00f70092d9a9e11ae430ffba5171283a"],["/2021/01/20/browsertrack/index.html","b6200e0ad63f791e989c541f6e811f62"],["/2021/01/20/v2ui/index.html","92ae565ba0fb868b4036f35cbebf704c"],["/2021/01/21/failedtoconnect/index.html","e62948ecdb4f8e7a17bfa5aa3f4e1b83"],["/2021/01/21/gitcalendar/index.html","3b3c3b573df8709b0e10d7f401004758"],["/2021/01/21/markdownformat/index.html","6b13b14f2c5e86a5a8bfca1c4b05888d"],["/2021/01/21/markdowntable/index.html","9cf809b6e3f05d9460b97cdaa72ee9f9"],["/2021/01/21/vercel/index.html","c7b063bd24d42a36bafe7ba7add85cce"],["/2021/01/22/hardware/index.html","6bad3350f034556b445af00fd08575f8"],["/2021/01/22/muviz/index.html","e02504b7d652319ccab017eb91f75011"],["/2021/01/22/randomapi/index.html","c2c4e24dc61d81c54ed39cc41baaeea6"],["/2021/01/22/searchimages/index.html","65dbf88aea192376c98b38151e32d2ff"],["/2021/01/23/RX文件管理器/index.html","6475d9b5707c44313faad4cec79f278e"],["/2021/01/23/chromeflag/index.html","5076cc7234c73b12ed1a53c2659c489d"],["/2021/01/23/qttabbar/index.html","de4f0e18610a4ac437eb0279c3949cc6"],["/2021/01/24/githubspeedup/index.html","2e7afedc043288bf508683af49046927"],["/2021/01/24/jsdelivr/index.html","fa7f9cde47587edea0e624d1eb963fdf"],["/2021/01/25/note/index.html","f4071b30c538d756183d002f1d38af22"],["/2021/01/25/soul/index.html","8876c9e632f196187d948e7d4403ac5e"],["/2021/01/26/herokuxray/index.html","6e4182700df51310645f9f95818e7c54"],["/2021/01/27/proxypool/index.html","62593cce5bc9f569405c9e29fe053a61"],["/2021/01/27/tracker/index.html","041dd7c3cd16b9ed3f7cee40c7ff1d8b"],["/2021/01/30/pandownphp/index.html","038e43d58ab35ef7c6ba5af3be26a3b2"],["/2021/01/31/newgroup/index.html","8da62438f3073a4a15fef875908a0c33"],["/2021/02/01/clashlanguage/index.html","2c47ac7067a6aec7f6f7005891552d93"],["/2021/02/01/encrypt/index.html","07cd94ef24438562d3e74cedbf07f072"],["/2021/02/01/footermotion/index.html","b0643a804ebb8d7c3dc73ac15be1f0ef"],["/2021/02/01/gitter/index.html","4fd738f206ba0a7fc6ce36a46ba9158c"],["/2021/02/01/pixivtop50/index.html","e573170512780aec12a9c39d91498ead"],["/2021/02/01/scrollbar/index.html","b98daf6c5d4a5becd9a7b5a173c5c62a"],["/2021/02/02/clover/index.html","0ea30d1cd7f438793fb23ce911f210ce"],["/2021/02/02/maya/index.html","f9f0ae1f4c07250ddd45ffdf1bcbd670"],["/2021/02/02/speedcontroller/index.html","7804b2a8879117ce985170fc53a20dc8"],["/2021/02/02/yesmusicplayer/index.html","fb7eb0b6a5ff7d65eda6c7fa610eb920"],["/2021/02/03/lenovoonelite/index.html","2c93215a94f84c38e53f1b3ee3deb67f"],["/2021/02/03/skipads/index.html","e43d8c32cfc76317ac487e400a62cbb8"],["/2021/02/04/picseed/index.html","f42f70e856d4f3c31f60b8b609a43291"],["/2021/02/04/renren/index.html","bdb6bea08b0d7c1da1823be1489e39a0"],["/2021/02/04/serverstress/index.html","ca2a10f3083de76f9e5abf0d0e4db2da"],["/2021/02/04/wikipediazh/index.html","03d81bf5ab58d281fdfc30a1d0b5c346"],["/2021/02/05/googlevoice/index.html","926b2c4ceae84e813dfef747abaa31c1"],["/2021/02/06/clashconnection/index.html","0b71e0e0fd3afa0fc5a29c2f976b6e48"],["/2021/02/06/gvtransfer/index.html","9d3e109c698f6a3aaeea67025ccd3586"],["/2021/02/06/todesk/index.html","824976f5db0704f86c033c95620cd392"],["/2021/02/06/vpnblacklist/index.html","80813c8ef8e6253dea967ace05645805"],["/2021/02/07/mklink/index.html","34e95d4cb561cb8009e7929ab4609a04"],["/2021/02/07/speedtest/index.html","4391fd905247e40a1f7d175c5e3b3e2f"],["/2021/02/07/translate/index.html","1fc3a56511d943542b83b4824b07f5a2"],["/2021/02/08/ewomail/index.html","f7b339d57e491d8c3f0e59932b40157f"],["/2021/02/10/officee5/index.html","c74bcd68241e715618209986eacc4c39"],["/2021/02/10/raidrive/index.html","05445f15dc5e781715222f60799c2f90"],["/2021/02/13/e5sub/index.html","e5391bc10343de3f3cd44c481254104a"],["/2021/02/14/screen/index.html","015a64f975323555cb908573e8b7308a"],["/2021/02/15/clashtun/index.html","6d1ba6cb8735d18d4c7c01750d249f82"],["/2021/02/15/messageboom/index.html","91eb24e4feb75b5e8d8547f674bb7004"],["/2021/02/15/oneindex/index.html","6b9cf7fb79e8884871d30b4bcc79a5e8"],["/2021/02/16/govsites/index.html","fc4cd1c5b471b662d19a0ce415ecff77"],["/2021/02/17/hexototypecho/index.html","16dd2e241775b952d2967b956905f81d"],["/2021/02/19/fiddler/index.html","622def0ebda165d1bbc180fbf1adf66b"],["/2021/02/22/potplayerset/index.html","e25d587789e66269f2c734d6088e1f41"],["/2021/02/22/studyresource/index.html","33380f90a073ca7d70c8b6faf2b8aefb"],["/2021/02/22/telegram/index.html","4f21a45330d8af5f7495df04e71f2c0e"],["/2021/02/22/videos/index.html","cbac3cfb6cb98097082376ad4dcdd242"],["/2021/02/24/mtproxy/index.html","c17828cda02eb6f1629444a1cf1bac9f"],["/404.html","bdef3658478f91bcc5df3938858f869b"],["/archives/2020/11/index.html","a258d49d58a2c7d8895c903c4260b16e"],["/archives/2020/12/index.html","d87bd5fb1631d2f8bbb0774ec3bdd4be"],["/archives/2020/12/page/2/index.html","9b17b7575ba6b847a63868118a0fac78"],["/archives/2020/12/page/3/index.html","45086404ca6db5cfce740f65f22c6a3e"],["/archives/2020/index.html","887bb2a4fbc54c4ed77fc8506a2ac177"],["/archives/2020/page/2/index.html","0f5a44d3ed286ea39ec7da5058ac3c98"],["/archives/2020/page/3/index.html","e4a5240a6181784c426f50544d1bfc02"],["/archives/2021/01/index.html","b11faa29664d81a4ed2b1225044440af"],["/archives/2021/01/page/2/index.html","e709babbc47f3ceb84047764dd85d8cc"],["/archives/2021/01/page/3/index.html","f90e827dfb49fd088f2ad7beb6bf7d44"],["/archives/2021/01/page/4/index.html","9c8c3e410258e0b0d2128568daee7203"],["/archives/2021/02/index.html","34be93bd8201841d9c55bc0c51dd781d"],["/archives/2021/02/page/2/index.html","7f5cc29348d49b00ea445183324e2924"],["/archives/2021/02/page/3/index.html","25f4716552971de7d01bbbd350a6b9a6"],["/archives/2021/index.html","c2cf42a0464a9be24c8c646cf567c1fb"],["/archives/2021/page/2/index.html","f6ea106a1aa53037d85f6ded3e342419"],["/archives/2021/page/3/index.html","25687cef0be6c671464ff0b60cb2b45c"],["/archives/2021/page/4/index.html","11b7542201d48cfbab9fdcbe035da8e6"],["/archives/2021/page/5/index.html","4f8da7a96639343fb7210c208c1bb6ef"],["/archives/2021/page/6/index.html","47b269a1d8a63000ec5913b8a058c1ca"],["/archives/2021/page/7/index.html","4dc285d97b67a5f943775aacf8bb5801"],["/archives/index.html","614f5b8b615ff9f55829a6adc35aa302"],["/archives/page/10/index.html","5102456ffb8067f0f2861a120370a773"],["/archives/page/2/index.html","6a47ea66e63caeeddf3836ec87581a8d"],["/archives/page/3/index.html","649be18f1df703e3cbe3bb7119cdaeda"],["/archives/page/4/index.html","805b42e53d2cecef7508579df8d8c570"],["/archives/page/5/index.html","938322d64f1b72dee711d47b58ca27b2"],["/archives/page/6/index.html","ef9ea4470831efa44cb7caa198be2c86"],["/archives/page/7/index.html","9b514e6c9fffc10ed68c768c4bc46476"],["/archives/page/8/index.html","3e7701ea5d4f22581b45fd1fa7157453"],["/archives/page/9/index.html","9916e0c7bea529985c89533e5089bbed"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","07172f25d6f2932eb7bf9e1f29eef58a"],["/categories/index.html","7725f656e6b48fbdce60cc6b88682157"],["/categories/下载/index.html","45a3801e72295a9e4a4d1b624777091f"],["/categories/安全/index.html","3c752bf20bad33df14dea543ff71f7c3"],["/categories/建站/index.html","a88fbef54825867b92c65d18dd7fcd47"],["/categories/杂/index.html","d602eb790c85b73e90332de3c494ebc6"],["/categories/杂/page/2/index.html","d316395b4940f34950a76e8104d0cb40"],["/categories/测评/index.html","2e32eba9eb24f20baee15f3ad16f3375"],["/categories/科学上网/index.html","0e3c55e8fcb8fd47fbb05fc37441b7fc"],["/categories/科学上网/page/2/index.html","8bd6ced8566f2e6a493643943a27bbee"],["/categories/编程/index.html","531c730fb1ca0b76233d031976ff3ac9"],["/categories/网站/index.html","64e4aede6b66ca9f2b22c85f353e4976"],["/categories/网站/page/2/index.html","7a69c171814530aa8fac87b3195e3163"],["/categories/软件/index.html","f413415359906320c906a26e4411708b"],["/categories/软件/page/2/index.html","c8b3b05928adc08d4035beea7249a0ee"],["/categories/软件/page/3/index.html","e380e318f1f9f2ef2c93f262e88341b2"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","c6b3cd32b6796f4dcaef119623bbacde"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","1bf562d76d157250840c9b4765b4eb71"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","1442c0b46b0953f8f3509054407bb878"],["/ios/index.html","4bc0140076dfac45a6ba72687cbd0750"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","7111d173b6d5f24a50f36b5f37d621dd"],["/page/2/index.html","c8cf53d79cdb7aeee6150802e165797d"],["/page/3/index.html","65e863096485e33ea38f6757fcbd30b1"],["/page/4/index.html","23a3debc59f85233b548141b5f24a8bf"],["/page/5/index.html","4c569903f69af7920fe2ebf4365dbbee"],["/page/6/index.html","8ce6be5bca30fa11537e79c420dfee62"],["/page/7/index.html","03c7a27781a9a3d24eb3b7f09a70261d"],["/page/8/index.html","854493868fe2d664e0a3ed3d37273173"],["/page/9/index.html","17f6e9e425878fe12ddabe86d15edcab"],["/payment/index.html","15d32c72dbe461e3899591f873f0411f"],["/privacy-policy/index.html","65dc79ebddc1f9d9dc01d49a4ce017ba"],["/rss2.xml","5f6ade4480b6dbbc951e4f6ab355d306"],["/search.xml","6dd54bde00cec478f719f628e1daf395"],["/sitemap.xml","c6c0f9a018e31fff0a7b01ff80b94d0c"],["/sw-register.js","992691d41dc8852cb53c16628d120052"],["/tags/5t/index.html","2cfa0e9dc0f1f60dd9d20235ea51a10a"],["/tags/Clash/index.html","039ea759af951c64698e004d21ec129f"],["/tags/Clover/index.html","6b9e411555412e0074e6f23fbe33173e"],["/tags/E5/index.html","cd611260f82d1c0a00c9f26faf839b97"],["/tags/FTP/index.html","5b90185f64d90c4e30944d9f57ff9656"],["/tags/GitHub/index.html","f7dec82d20a18c5bdf7558920b7cf01b"],["/tags/Heroku/index.html","01dc3cde548abc68989e622aedb5ea3d"],["/tags/Hexo/index.html","19d3d29309fb330c3bfcb4e6c5583c8e"],["/tags/Lenovo/index.html","63abb5ac43a2dd71c026a460b9332f9d"],["/tags/Oneindex/index.html","d4db72ac26f977e9696307d4159fbb6f"],["/tags/QQ/index.html","c9f9c0ab4dcf67426ce4d41af704af69"],["/tags/QTTabbar/index.html","5a72d766166dfd9ba8aadbe332499f90"],["/tags/RX文件管理器/index.html","33f98462d94fab36e8cba9d944314bf4"],["/tags/Todesk/index.html","69f735dbb1d78c6baa1e87509ceb7367"],["/tags/Vercel/index.html","b0cca92375b19e7ec59a7c03d1e8332a"],["/tags/ads/index.html","73d934649ce79ceb6bd837ad78d25fbe"],["/tags/api/index.html","23da46028b591f37b1ddba6acaa1c7ed"],["/tags/app/index.html","f9703f0af74452954a7ab2fc17f1e196"],["/tags/blacklist/index.html","5b660ba5eebb6c7c41c91069a8f7811d"],["/tags/butterfly/index.html","b84d18bd419ec4422d59196c86fa4228"],["/tags/chrome/index.html","b4088d7add884008031c18dc6b03de9a"],["/tags/cloudflare/index.html","f7a0294e73b34183a1edbee291a8dcd9"],["/tags/cmd/index.html","1b0f3dc6554150e2f7aa8b00c077f404"],["/tags/c盘/index.html","114321dfc691b66c98f28cf2234ce513"],["/tags/email/index.html","a023de1ca533a1243d9cced3f861e802"],["/tags/ewomail/index.html","e2aaac2b267f4542cd58f4bd99a16639"],["/tags/fiddler/index.html","7f1868fe2926e29c415b33c40fe9d023"],["/tags/flags/index.html","5497bb52e1b01d1823f20d26d0a9b779"],["/tags/footer，页脚/index.html","2780338079730b9408b8a8f75124f2c2"],["/tags/galgame/index.html","fddb48f2e847f5845641dce6f53c8979"],["/tags/git/index.html","768e3f0bd397acfc097dcdc38049574d"],["/tags/gitcalendar/index.html","101c6af57235afdb549dee459acfe9eb"],["/tags/google-voice/index.html","0e9773d299841297fab3c1381b1fb818"],["/tags/gv/index.html","f3e9a1075002ae364a47912770c82ead"],["/tags/index-1.html","819e17ec2da6f77158e0c2d5978493a4"],["/tags/index.html","9946a443fee1c6f9d718558758138fa9"],["/tags/jsdelivr/index.html","91b3e9f44f238c1dd22e22c8009b88e6"],["/tags/linux/index.html","683df2273124ebd5d9157cfe387f0c2b"],["/tags/madVR/index.html","0c22d006e3d95d457acfb4951d64e748"],["/tags/markdown/index.html","f4ebe00e94618fbd3213bc8bd0f57717"],["/tags/maya/index.html","fd18457a6cbb0cbf7873093535cfff1d"],["/tags/mklink/index.html","4ce9451e667f5ed5b17dcd583afa20b5"],["/tags/office-e5/index.html","7459198d3b2bc0c26b243709f1e73ccb"],["/tags/onedrive/index.html","6aad29d4fffc73d5beb61f3f5ca8d5d0"],["/tags/picGO/index.html","5b9abb7ccd8c59f37afbb906f4a5d565"],["/tags/pixiv/index.html","bbd7c65cf25c77d073f0bc2d7c7076ba"],["/tags/potplayer/index.html","9bf3681ca489ca7993cd722f4d6d8cb2"],["/tags/proxypool/index.html","8527abf1a0bea219e973b2a9f18f6b5e"],["/tags/qbitorrent/index.html","e7e4e859a7550d7ee11a08a1263389d8"],["/tags/raidrive/index.html","778123ee37344dba5797400a7ae45248"],["/tags/screen/index.html","2917abed7d7cb32a7926d7c9d17ec265"],["/tags/speedtest/index.html","d81d66aba003374f50700bce5b2c1a5d"],["/tags/tap/index.html","1a6a040fdc67516dc07569fafe2461c0"],["/tags/telegram/index.html","19bac46b9e5e38aabc225803a88aa1d8"],["/tags/telegram代理/index.html","d7ff43c426ff10cfc4f83c6c21e5ac35"],["/tags/tg/index.html","3a3a16cb6faa7b2c044a6f42ac9d452a"],["/tags/tg代理/index.html","835ae62966404877087700b392afb413"],["/tags/top50/index.html","53dcede03d480ea052417c2474c985ae"],["/tags/tracker/index.html","69dffbd67f83d19fadec754231468916"],["/tags/translate/index.html","58033146fbfdc10ef2f3e659cde3f22a"],["/tags/translater/index.html","03b001741efc00d0b79d43f85a070811"],["/tags/tun/index.html","820753f7a5fcc2c500eb79c1859b90cc"],["/tags/typecho/index.html","8122a433b42daff20cd2b41274777fb7"],["/tags/v2ray/index.html","fdce95c21f29fef520ab11644b062758"],["/tags/vpn/index.html","d28c956f62c57afe1b22b3cc85ae073d"],["/tags/vps/index.html","0f809041e3cff330e7118b1d66906193"],["/tags/windows/index.html","ffc3e7c8517bed05ffdfb87e8b68a93c"],["/tags/windows端/index.html","412663b6ff0f41dd22e44036ded01871"],["/tags/xray/index.html","a9ab3e09d5c692748273816c9fac000a"],["/tags/下载/index.html","590ddec92ca401cc5599fff4ddf4560c"],["/tags/不限速/index.html","1163769f912a5fbc1e25373750ad4e21"],["/tags/个人网盘/index.html","80eacd86966d2779484a1de5143adf6c"],["/tags/主题/index.html","406965f3f71419c4ca74a023d4fc53af"],["/tags/云便签/index.html","842696733e90b7264ae4a1fde2834636"],["/tags/云盘/index.html","9bb8cfdcc03db5c6c1f9bdb4cfba7808"],["/tags/人人/index.html","f1a6d2044175a28dfaf2d9906b66f531"],["/tags/代理/index.html","065cc8017d4f60c1b1be8cc72d36a055"],["/tags/代码/index.html","9cbf708792f25960aa2fe918b29919bd"],["/tags/优选IP/index.html","4178690e4bdffb56e8b96e73cf06df70"],["/tags/便签/index.html","d5249b3d4245fd10fbccd29c7700ad6c"],["/tags/保号/index.html","8dbdbcfcc9aa690760d988f9f612432b"],["/tags/免费/index.html","5ee83fe9038266b66938965eb19f9691"],["/tags/免费节点/index.html","a8864e13dd6e434d2e66c84542be1531"],["/tags/加密/index.html","61b0c385ae565c62e865153d5aef1d77"],["/tags/动画/index.html","6375b66b8ae8d836ac45cb932a75e234"],["/tags/博客/index.html","66fd3cd3e51d1ae6b53d69e0967d1888"],["/tags/历史记录/index.html","6d301ce9700200c827f98fab3ffd2fa7"],["/tags/压力/index.html","cf6100618cae8f635b57da9212f24234"],["/tags/压缩包/index.html","e738ad52e603e380cee2cd08072da6ec"],["/tags/反代/index.html","0f5e4ea1275cc0e8eaefc1743eade4fd"],["/tags/可视化/index.html","f0d5bd1c3bd7e68f546f41b521d93c6c"],["/tags/命令/index.html","5f595d1d42c3dca0e114c12e8060a032"],["/tags/国家/index.html","13d3e4bfdb5576b152196fc6d65d4234"],["/tags/图床/index.html","96425aaab68cf49c1c182da92c93ae1d"],["/tags/图片/index.html","f156f90c3651bdbbfcd43b28425e7d67"],["/tags/域名/index.html","eedfbeb1e05000f6deed9ea51ea8fc7c"],["/tags/多标签/index.html","1a17a80ec581bd0697c54491119197d1"],["/tags/存储/index.html","079a508e7f13e246f3cfddbed02b435b"],["/tags/学习/index.html","6c8970e6109fadd7c44cd8dee9ce0799"],["/tags/安全/index.html","701575b169d74c8912222b741f0ff6f4"],["/tags/安卓/index.html","8b26bae3df3722f7ff7b67948b52a570"],["/tags/宝塔/index.html","789e865541c5b0cc393b4f8775b57402"],["/tags/广告/index.html","79184d90138c3dfb29b586263dd50efa"],["/tags/建站/index.html","c0d98afe4b410f80b57efffb9ac34bbb"],["/tags/影视/index.html","f6029f483d270225cc173071788bc5b6"],["/tags/快速启动/index.html","ed9f233f058ee9a9dd2a64520510169d"],["/tags/手机/index.html","3b4d8e759d8f3ae9e0653ce94bfa560b"],["/tags/托管/index.html","4937a4a8c25bf85803d8ee8c96506c34"],["/tags/抓包/index.html","fc9913ffd6d7f803c91b5530715c5414"],["/tags/抓取/index.html","8665fb89346bba3508f78021550b9438"],["/tags/投屏/index.html","f24b0fcd3d86fcfe6f5f3adf8507d230"],["/tags/拓展功能/index.html","17d5f14e0153d255d4b8e394ec22300e"],["/tags/挂载/index.html","3f349d158827dc35ae376e8647d0f25f"],["/tags/指纹/index.html","3daa5b625cedbe80c842fec826a7acdb"],["/tags/接口/index.html","af92a90249db7ad41c6ca8a22f3927cc"],["/tags/提取图片/index.html","88f924e3db0f01b299c389f5670c5668"],["/tags/插件/index.html","723d1c9c4cc9b8ccee461a367a161f7d"],["/tags/搜图/index.html","ab25f4bcf659fa63183e1c4747c4a31e"],["/tags/搭建/index.html","c7b300e8cea2584d511fc667a22362d7"],["/tags/撤回/index.html","6f0072525153c0a84bcce91f6678ba5c"],["/tags/播放器/index.html","c26a5e1b23b3768ad855a2d562659753"],["/tags/政府网站/index.html","ee5259f37282ca9ccaf747269cd5e0cb"],["/tags/效率/index.html","cb6dd4a11504ed38b27437ba79acd019"],["/tags/日历/index.html","aa3d8319e1b1c495a1974eaf9f809b16"],["/tags/服务器/index.html","85087fe36b1f7b1c54895013e35a29a1"],["/tags/桌面/index.html","04fe6522c59dc5a6bd56f8c19b7b0dc2"],["/tags/梯子/index.html","d02de64277e4b7a3c37f289952224a68"],["/tags/检测工具/index.html","5f88aa83a020b41c4d093adf32bc2228"],["/tags/汉化/index.html","86cd26f37b73610c70b471db2c896056"],["/tags/测压/index.html","f6b35c1d61f3b85ada8046394112f79d"],["/tags/测速/index.html","ac75e398c87b7b5f539c7d33fd781361"],["/tags/浏览器/index.html","ce551931dac73453d3e3f01fb52c481a"],["/tags/清理/index.html","ef13c4a0c5781f24e8821c26079a4516"],["/tags/滚动条/index.html","df3bd5059ccd08e7777f5cbad1587a06"],["/tags/电影/index.html","98ed9ffd5366af8408d48dcf10c9308c"],["/tags/电视剧/index.html","7bac5d2d8ce67cf7fd4fd6fcdb89199b"],["/tags/白嫖/index.html","e78a6d7375527c450cdd2d644f9c3a71"],["/tags/百度/index.html","3968c264a0b7222942427969871e25c6"],["/tags/百度云盘/index.html","64f15e664ee32aa3655fd1870cc0192b"],["/tags/百科/index.html","f64ff1926a0543a581985006e0180637"],["/tags/短信/index.html","01ea118d759267ed28099f0bb9bb348c"],["/tags/硬件/index.html","02ca76f0e38a9819bb0de5e618b1c4c1"],["/tags/科学上网/index.html","64858318d04e3264a9dc6afcc4e92bca"],["/tags/空间/index.html","74a6f0099cecb7d47a7910a58a1b2a0b"],["/tags/笔记/index.html","c061b8c983e42d2b9ed838c166b63341"],["/tags/简洁/index.html","69f3e2e64119887f8a2195d79e47deb1"],["/tags/简约/index.html","91d2adecf531d1e14943399d45d7054a"],["/tags/维基/index.html","5a050cbb77622eede5f25dced9100092"],["/tags/网易云/index.html","18b8401862c763b2a6800f4468c92fc1"],["/tags/网盘/index.html","5ac70845d5f09132ac7fe5b90e8e4754"],["/tags/网站/index.html","a4980e5e27c60eb3ccba8d3985eb4ce2"],["/tags/网络/index.html","d1a69c68c3c95ab9de745ed096928106"],["/tags/美化/index.html","f935c0ad494564a2dd0803f57c836f87"],["/tags/翻墙/index.html","1f5404f077ada2fd44bd48fe55ae9770"],["/tags/翻译/index.html","de7d3f7e7b8a21f8a960ee8e1fa035f3"],["/tags/翻译器/index.html","90c0a805d938148fc14dd5339606db91"],["/tags/聊天/index.html","8c19e277cd4749b528c2b9bc56670468"],["/tags/聊天室/index.html","f451f0338502e4a2a69fa0c3d6521013"],["/tags/联想/index.html","a91159afac72f8d2c4a38414a86f7cc0"],["/tags/节点/index.html","6e77c1352fc7bed44090fbc0447a1437"],["/tags/虚拟手机号/index.html","68abc5f099b80228b50f7c76eb3e4e92"],["/tags/补丁/index.html","148804b01f9b3e7ac033245b446ea0f3"],["/tags/视频/index.html","37bea23357934ebfe9413f20183a6497"],["/tags/解析/index.html","2d26e199b046522193ed81cf93accbb8"],["/tags/订阅链接/index.html","3a301192a5dd8f9c17b5a4e964561596"],["/tags/记录/index.html","31c4f6eac188349fd779b742a88c34a0"],["/tags/识图/index.html","1b39558db3eb3f1a84649dab8dd0a602"],["/tags/语言/index.html","0dfbea657245cec6c2a9039f73aa2224"],["/tags/资源/index.html","2e659b5dd5c45d4b9ef59c7f72893b06"],["/tags/资源管理器/index.html","769fbcbeda5a99288b3c1c472f0fe750"],["/tags/转移/index.html","8427663fddfd47dab78a68c694fc15b5"],["/tags/软件/index.html","4a854889e724536fb271a3a545fe664d"],["/tags/轰炸/index.html","1253fbcc5b0414c13c068b383da43c0b"],["/tags/迁移/index.html","0f7a7673705a1ff0149ff27bc7b3d429"],["/tags/远程控制/index.html","0fa6d0e3dce68badbd1eee73bfcb927e"],["/tags/连接/index.html","fc71a37aa02c9d08f93fd071e2e9b3fa"],["/tags/追踪/index.html","231c5114b2cd05ebd7cc8e659556fb1a"],["/tags/速度/index.html","ba54af7505b847d459d8766454040ecf"],["/tags/邮箱/index.html","bc3037b9e40cc784a14d75eb67ed29e7"],["/tags/酷炫/index.html","1fbe4951dacaa685f136b16814df62b5"],["/tags/钓鱼/index.html","19187f99a665fa6528ee5443a3a14321"],["/tags/镜像/index.html","924e5e9fcc905f1810df1ad099ec98c4"],["/tags/随机/index.html","48e66b3160fb25028f74df22ee4f3a4f"],["/tags/隐藏/index.html","a76edd2626aed8a864495c26609dcd1b"],["/tags/面板/index.html","d876698cac8828dfaf2716c902b51c3a"],["/tags/音乐/index.html","3b92a1e2bd80773fd862cd020e04fb98"],["/tags/高颜值/index.html","2211807bd1b8a99e9315c2b1b02cfc49"],["/tags/魔改/index.html","000041ff731b58aa76a8d12a76190a2a"],["/tags/黑名单/index.html","13963f1f608db423a4091a6df59c3ab3"],["/urls/index.html","6e9209c63a92f697fcc69701df05939b"],["/vps/index.html","a6bb271e7af38df5a828cfe41f8384bb"],["/支持/index.html","a7301ddb0d454e9d41998109cf782065"]];
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
