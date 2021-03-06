/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","77fca2fd666b7e5ea7ad1f1ca0344b6e"],["/2020/11/29/clash-windows/index.html","ebd2efe72cbfa360c12722e041917c28"],["/2020/11/30/websites2/index.html","079edeca52514682072b8759abb21ee2"],["/2020/12/04/iphone4s/index.html","115f9bcdb5b375c2cb2ef2df49191c6d"],["/2020/12/04/onenote/index.html","750970a15f237ff8ba8c3d0ddcd7bbaa"],["/2020/12/04/wesites1/index.html","90d877324ba583ca9001b0ec5aa2c62a"],["/2020/12/06/nokia808/index.html","b2bd2bfbd822410fe97bfaf34f17e0fd"],["/2020/12/07/ipad1/index.html","b91916a0126dafe1b202af9b1a629cb3"],["/2020/12/18/freesubscribes/index.html","50c8b287086cbcace72bb271d8c8688b"],["/2020/12/19/musics/index.html","a2fde0e422d258239c4fbeca26597aa3"],["/2020/12/19/shadowrocket/index.html","60b137b756a10a9f31cbec121c094fbb"],["/2020/12/19/v2ray-windows/index.html","db36e404cd90d48f4b682f3d937d31d4"],["/2020/12/19/v2rayng/index.html","1fed5d6915bbb621911197e6bb24f29c"],["/2020/12/20/beoplay/index.html","1a3d3f990d518836c6287d14464e818e"],["/2020/12/20/订阅链接转换/index.html","29f80d99c87487ab5f35f1bca8357ef0"],["/2020/12/21/chrome浏览器下载提速/index.html","ea81c323995de3a27a9c6a8e42f13a24"],["/2020/12/21/免费128线程并发下载xdown/index.html","788397ce466bd3992c760f8eafe68b98"],["/2020/12/21/免费32线程下载软件ndm/index.html","bece670e8a6ad4cec6fbba76476f5a98"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","0caabd5b4533c1e74b6a7904cff4f124"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","c53b3ec500b64dc47fafb29688bb2e66"],["/2020/12/21/广告怎么知道我在想什么/index.html","828bae7fa69fa181a5bed422cc4036e3"],["/2020/12/21/无名·引子（小说试写）/index.html","2df8f121e5688a651f4379d0469a6438"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","0b6f40f50c6ac2f9b3240123647cb986"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","cdd0a3264d067de843699a13d2640624"],["/2020/12/21/高速轻量下载器aria2/index.html","2649ff90d4734b24bf07048e3f709c66"],["/2020/12/22/2020-cee-roo/index.html","bafc8b287318a57780a406e343c63f10"],["/2020/12/22/firefox插件、github、steam富强/index.html","d043be8844019cfbee4ea090f83e164c"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","63131b9a89eab60807e513f232b93fab"],["/2020/12/26/python-day-1/index.html","113035434e7857a0c2722162242dc627"],["/2020/12/26/python-day-2/index.html","0e64dca2cb4890d86e74ed54a9697c05"],["/2020/12/26/度盘不限速下载方式一赏/index.html","d044b2e658d0f0d255c2f14b0137c81a"],["/2020/12/26/添加开机自启软件/index.html","b840c1f7763386b2787094b21001474f"],["/2020/12/26/电脑端截图方式一赏/index.html","f31127252b8fe4ab658ae9a07412220b"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","a6c03bb3b56efbc49e9a79bd734adbe7"],["/2020/12/27/最安全的浏览器tor/index.html","1d64b2933347159b44a52951ad021c1f"],["/2020/12/27/网易云刷等级和听歌数量/index.html","87db2660579477b9b85d620047cb2681"],["/2020/12/28/freenom申请免费域名/index.html","a95dac1420c5b3e118339a74df12770f"],["/2020/12/31/机场/index.html","83ac38b34345c249079fcfa31cc3ebac"],["/2021/01/01/M1/index.html","0077f778976ba0c9becaf403e56c2e30"],["/2021/01/01/compress/index.html","7a1a097f72b68b3a8e0ef70bd6c3103d"],["/2021/01/01/infinityfree/index.html","787b0049e1f1d23e75c497bc99e6f270"],["/2021/01/01/硬核翻墙/index.html","fe25906cf575934fb1fec0f44df706a7"],["/2021/01/02/qq/index.html","6f683577bd175815dbe6925d21e98674"],["/2021/01/03/netch/index.html","9d39b53d2079b4d4f3e5577e13062b52"],["/2021/01/03/waifu2x/index.html","4f1a4864cd7a18c05519f4adcdf45f66"],["/2021/01/04/ads/index.html","76883df6cd55e21b6f5c3ce021adb13f"],["/2021/01/04/games/index.html","d41c521549769a370532c4bf7eedeb00"],["/2021/01/04/heroku/index.html","cc483dba4b184925266211ee9cbc948b"],["/2021/01/06/movies/index.html","1398b0a85c50d2ccc2dfe4ab849edd28"],["/2021/01/07/google2020/index.html","5d7b737d3ca41746b52992c6adfc9b2d"],["/2021/01/07/lucky/index.html","62ded15563b437c12eef20d8cd06836a"],["/2021/01/07/spotify/index.html","1fe168012b493001e368e661326238c8"],["/2021/01/07/thunder/index.html","3ede3a3283221f46bfaea92d67609ed9"],["/2021/01/08/adguardhome/index.html","e76df78710be73600dd40d239042e69f"],["/2021/01/10/IBM/index.html","eb898dd1348da49f26e47972abf1fc55"],["/2021/01/10/potplayer/index.html","708bc4cab2f3b7aab19d6167682c05b2"],["/2021/01/10/sakuraanime/index.html","fa9740f3687bfd1d10737805d591ce57"],["/2021/01/10/美剧星球/index.html","e960909ca55c6ca9471626a351b0a928"],["/2021/01/12/telegraph/index.html","2db7fcdf5780e93ffa112f4ad5e7b84a"],["/2021/01/14/comics/index.html","e215724fece9c301d06c38e92737bf64"],["/2021/01/14/ftp/index.html","aaa33111440369e12b7af624415a716f"],["/2021/01/14/oraclecloud/index.html","d743545c56037687e148690b92efb672"],["/2021/01/14/porkbun/index.html","6ba873cc48182b24033df610bfd9a7b3"],["/2021/01/14/powertoys/index.html","0c5f630b31ad140ce6d9415756c99945"],["/2021/01/14/taptap/index.html","49e791582948fb5f253ae5da4e810688"],["/2021/01/14/ubuntuvsftp/index.html","05f97e5649b2aefdfe1bcf5f803a3ae2"],["/2021/01/14/小说/index.html","cf9e11e934a8e573f9da948b393b957b"],["/2021/01/15/freeproxies/index.html","44e8cbf11f3cd9e18e6d47e035b12797"],["/2021/01/15/incaseformat/index.html","6cf240356d86e8663acb31a1fab9ad40"],["/2021/01/16/euserv/index.html","752656e336dcc873950e3020d46080cb"],["/2021/01/16/winxray/index.html","ced841bb3e1c5d4da9ba23ae611c656a"],["/2021/01/18/qqreadhistory/index.html","85fab501ad69e5f67f78abf7e32e34ec"],["/2021/01/18/qqrevoke/index.html","d757ef23baab487484b1028f1dab397a"],["/2021/01/19/freevpn/index.html","00f70092d9a9e11ae430ffba5171283a"],["/2021/01/20/browsertrack/index.html","b6200e0ad63f791e989c541f6e811f62"],["/2021/01/20/v2ui/index.html","92ae565ba0fb868b4036f35cbebf704c"],["/2021/01/21/failedtoconnect/index.html","e62948ecdb4f8e7a17bfa5aa3f4e1b83"],["/2021/01/21/gitcalendar/index.html","3b3c3b573df8709b0e10d7f401004758"],["/2021/01/21/markdownformat/index.html","6b13b14f2c5e86a5a8bfca1c4b05888d"],["/2021/01/21/markdowntable/index.html","9cf809b6e3f05d9460b97cdaa72ee9f9"],["/2021/01/21/vercel/index.html","c7b063bd24d42a36bafe7ba7add85cce"],["/2021/01/22/hardware/index.html","6bad3350f034556b445af00fd08575f8"],["/2021/01/22/muviz/index.html","e02504b7d652319ccab017eb91f75011"],["/2021/01/22/randomapi/index.html","c2c4e24dc61d81c54ed39cc41baaeea6"],["/2021/01/22/searchimages/index.html","65dbf88aea192376c98b38151e32d2ff"],["/2021/01/23/RX文件管理器/index.html","6475d9b5707c44313faad4cec79f278e"],["/2021/01/23/chromeflag/index.html","5076cc7234c73b12ed1a53c2659c489d"],["/2021/01/23/qttabbar/index.html","de4f0e18610a4ac437eb0279c3949cc6"],["/2021/01/24/githubspeedup/index.html","2e7afedc043288bf508683af49046927"],["/2021/01/24/jsdelivr/index.html","fa7f9cde47587edea0e624d1eb963fdf"],["/2021/01/25/note/index.html","f4071b30c538d756183d002f1d38af22"],["/2021/01/25/soul/index.html","8876c9e632f196187d948e7d4403ac5e"],["/2021/01/26/herokuxray/index.html","6e4182700df51310645f9f95818e7c54"],["/2021/01/27/proxypool/index.html","62593cce5bc9f569405c9e29fe053a61"],["/2021/01/27/tracker/index.html","041dd7c3cd16b9ed3f7cee40c7ff1d8b"],["/2021/01/30/pandownphp/index.html","038e43d58ab35ef7c6ba5af3be26a3b2"],["/2021/01/31/newgroup/index.html","8da62438f3073a4a15fef875908a0c33"],["/2021/02/01/clashlanguage/index.html","2c47ac7067a6aec7f6f7005891552d93"],["/2021/02/01/encrypt/index.html","07cd94ef24438562d3e74cedbf07f072"],["/2021/02/01/footermotion/index.html","b0643a804ebb8d7c3dc73ac15be1f0ef"],["/2021/02/01/gitter/index.html","4fd738f206ba0a7fc6ce36a46ba9158c"],["/2021/02/01/pixivtop50/index.html","e573170512780aec12a9c39d91498ead"],["/2021/02/01/scrollbar/index.html","b98daf6c5d4a5becd9a7b5a173c5c62a"],["/2021/02/02/clover/index.html","0ea30d1cd7f438793fb23ce911f210ce"],["/2021/02/02/maya/index.html","f9f0ae1f4c07250ddd45ffdf1bcbd670"],["/2021/02/02/speedcontroller/index.html","7804b2a8879117ce985170fc53a20dc8"],["/2021/02/02/yesmusicplayer/index.html","fb7eb0b6a5ff7d65eda6c7fa610eb920"],["/2021/02/03/lenovoonelite/index.html","2c93215a94f84c38e53f1b3ee3deb67f"],["/2021/02/03/skipads/index.html","e43d8c32cfc76317ac487e400a62cbb8"],["/2021/02/04/picseed/index.html","f42f70e856d4f3c31f60b8b609a43291"],["/2021/02/04/renren/index.html","bdb6bea08b0d7c1da1823be1489e39a0"],["/2021/02/04/serverstress/index.html","ca2a10f3083de76f9e5abf0d0e4db2da"],["/2021/02/04/wikipediazh/index.html","03d81bf5ab58d281fdfc30a1d0b5c346"],["/2021/02/05/googlevoice/index.html","926b2c4ceae84e813dfef747abaa31c1"],["/2021/02/06/clashconnection/index.html","0b71e0e0fd3afa0fc5a29c2f976b6e48"],["/2021/02/06/gvtransfer/index.html","9d3e109c698f6a3aaeea67025ccd3586"],["/2021/02/06/todesk/index.html","824976f5db0704f86c033c95620cd392"],["/2021/02/06/vpnblacklist/index.html","80813c8ef8e6253dea967ace05645805"],["/2021/02/07/mklink/index.html","34e95d4cb561cb8009e7929ab4609a04"],["/2021/02/07/speedtest/index.html","4391fd905247e40a1f7d175c5e3b3e2f"],["/2021/02/07/translate/index.html","1fc3a56511d943542b83b4824b07f5a2"],["/2021/02/08/ewomail/index.html","f7b339d57e491d8c3f0e59932b40157f"],["/2021/02/10/officee5/index.html","c74bcd68241e715618209986eacc4c39"],["/2021/02/10/raidrive/index.html","05445f15dc5e781715222f60799c2f90"],["/2021/02/13/e5sub/index.html","e5391bc10343de3f3cd44c481254104a"],["/2021/02/14/screen/index.html","015a64f975323555cb908573e8b7308a"],["/2021/02/15/clashtun/index.html","6d1ba6cb8735d18d4c7c01750d249f82"],["/2021/02/15/messageboom/index.html","91eb24e4feb75b5e8d8547f674bb7004"],["/2021/02/15/oneindex/index.html","6b9cf7fb79e8884871d30b4bcc79a5e8"],["/2021/02/16/govsites/index.html","fc4cd1c5b471b662d19a0ce415ecff77"],["/2021/02/17/hexototypecho/index.html","16dd2e241775b952d2967b956905f81d"],["/2021/02/19/fiddler/index.html","622def0ebda165d1bbc180fbf1adf66b"],["/2021/02/22/potplayerset/index.html","e25d587789e66269f2c734d6088e1f41"],["/2021/02/22/studyresource/index.html","33380f90a073ca7d70c8b6faf2b8aefb"],["/2021/02/22/telegram/index.html","4f21a45330d8af5f7495df04e71f2c0e"],["/2021/02/22/videos/index.html","cbac3cfb6cb98097082376ad4dcdd242"],["/2021/02/24/mtproxy/index.html","c17828cda02eb6f1629444a1cf1bac9f"],["/404.html","4a682ff0d30a71faf8ece57c025bf835"],["/archives/2020/11/index.html","8e2e1f4386a9734b0f56f41f4f9d386b"],["/archives/2020/12/index.html","4033da6a6c90d29e222c684df1359b6f"],["/archives/2020/12/page/2/index.html","66aa67d67746e95cd0db3c3b28a6e1dc"],["/archives/2020/12/page/3/index.html","2362fbcdddc5cabf4fb209dc5fb40a3a"],["/archives/2020/index.html","e1657cce95dd5e3f6add065b86d4c187"],["/archives/2020/page/2/index.html","ecad9800bca34e3dee5fa1610b27e847"],["/archives/2020/page/3/index.html","b5067e6f2751134500f52b0a5c1cc179"],["/archives/2021/01/index.html","2f600c41ac498c5b476e30345395074a"],["/archives/2021/01/page/2/index.html","cd416968fdc41cd1d9ff8b6957decfc3"],["/archives/2021/01/page/3/index.html","cad55f8509caa6a794cbcb4fa8653a4b"],["/archives/2021/01/page/4/index.html","18198f6f47808128d5d09b4fd6f95821"],["/archives/2021/02/index.html","86e29109ecec792729aa4610b61d07eb"],["/archives/2021/02/page/2/index.html","068b1dd56dc0e2370781925bded61fe9"],["/archives/2021/02/page/3/index.html","bc9f68a5a12b0e5fa8dad585c13c841e"],["/archives/2021/index.html","1707d7e6b706dae98988f9a2748ec525"],["/archives/2021/page/2/index.html","09d36f25a5f2b6ec926b657fb14ec28a"],["/archives/2021/page/3/index.html","f183c0ba6a3fa26038ac729eb4269654"],["/archives/2021/page/4/index.html","e1754959e14c974ec8fb4a6a65cbdf71"],["/archives/2021/page/5/index.html","d7055263d86e358dcc425ade347c08e9"],["/archives/2021/page/6/index.html","c65f68ae82698686ee85265abdfc8acd"],["/archives/2021/page/7/index.html","dfa406e873f41694650777771596dbfc"],["/archives/index.html","c3f42b57f920e57a5a12a8538ef528cb"],["/archives/page/10/index.html","171bbd25fc3491620a8472a57478f92e"],["/archives/page/2/index.html","18e274406dee323cf219b0cb74c129f5"],["/archives/page/3/index.html","08865657c50858cf6407f28c0972081d"],["/archives/page/4/index.html","54c58e99d4f9f5f0b0ce375996c96701"],["/archives/page/5/index.html","2d1ee93b5da66f8b5bfa6fc3b0224dcb"],["/archives/page/6/index.html","613374fe0fb8492456836286ffd802d6"],["/archives/page/7/index.html","05c38b6491a0ab10bb7d73ba0c505d75"],["/archives/page/8/index.html","e5eccbb18d0313be50f0f1f16e3a95ac"],["/archives/page/9/index.html","d0759f67e70648e27d61aeb8eedd7f3e"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","d4b692adfb1dd975ad1e862963054c49"],["/categories/index.html","d20913521c90d728f78c18fdbcb16aca"],["/categories/下载/index.html","52860f17130a20257b79b961ce4267ef"],["/categories/安全/index.html","1d2657da5230af5b440c15a481a19bc8"],["/categories/建站/index.html","535987160b02066a89e77921c7420c17"],["/categories/杂/index.html","a281eba3549e4b5bf6c32d3406836051"],["/categories/杂/page/2/index.html","153c751cd02d8de41b5eba65a59a016b"],["/categories/测评/index.html","4aa38edb42a7e41965dfca4c9f45d7a8"],["/categories/科学上网/index.html","c3a699138caa6ab0595ef91b1bf33457"],["/categories/科学上网/page/2/index.html","3f5cb2c5fd080fefdf64a4f61523a544"],["/categories/编程/index.html","c4974b3957248eba283360eb5322277c"],["/categories/网站/index.html","3b848cc25ff793e227ca0d24b07a6117"],["/categories/网站/page/2/index.html","f6f3b5aa60f9755e6afd2dd1f7414197"],["/categories/软件/index.html","dd361cfbc7111d9886ce3d4a41f924ce"],["/categories/软件/page/2/index.html","5c3db18c8e39bbfa5c26a5fa6fba9525"],["/categories/软件/page/3/index.html","331de933658c0de9fe21033eab2fbfdd"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","d8c17e486461902d0d0c4d736172a6ed"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","378302e4238f410f56523657a9e4d05e"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","dca6e79bf1feae09d5b3034bb1b98492"],["/ios/index.html","275a41ccea4182d9693a4d4fc959ec81"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","4a7a29cbb97401a0951f24fdb8b2e9d7"],["/page/2/index.html","3cf710386e9b5665001ea3edae5a0718"],["/page/3/index.html","7f59cf845f6866d602d5c8a451faa069"],["/page/4/index.html","46af9941ef1df38e20b5aaef102cf7d5"],["/page/5/index.html","0ca85c5cadb3f0a43a84a4cdc0d594d1"],["/page/6/index.html","32b78f36301db706ead34d5be74cbe28"],["/page/7/index.html","c3a4e9909ee3720d4112f2b0d0c35304"],["/page/8/index.html","3904d13743b7a2568cbd88c45b42f5fc"],["/page/9/index.html","ac0a7886427175e7e9678c484ec19186"],["/payment/index.html","06b290cb74355be5b4cbe363fc18ddfc"],["/privacy-policy/index.html","acd845579cc18857b62b2e49fa14f2f8"],["/rss2.xml","3bb2234253456028a7a5079246ab30f6"],["/search.xml","0f2973150f47da03831332d534de5b37"],["/sitemap.xml","ad13d636b6d964d9bb0280389f9108d1"],["/sw-register.js","d74779ecc7ebfa8548cdb1fedf81fd95"],["/tags/5t/index.html","7bb8a8b42058a2cf3d7137c17f990825"],["/tags/Clash/index.html","6df8044513ceef418865200d426e4045"],["/tags/Clover/index.html","39cc21bece877256d9b9c7edcfa20339"],["/tags/E5/index.html","9893488038866b82bc74cd13d6cc7627"],["/tags/FTP/index.html","2d1c86d5e26a2d913bb70199851d8f46"],["/tags/GitHub/index.html","23cd0b5488ec3545018db4acd99fe5e6"],["/tags/Heroku/index.html","b32478a6f5a662b5031106a38704e725"],["/tags/Hexo/index.html","5df9b2bd23fd42fba2a73bd809439ed5"],["/tags/Lenovo/index.html","8c78deb2ba9c2cdb9ce0124f6abbdacd"],["/tags/Oneindex/index.html","599630cf4f1952b92c67b9dab3d55720"],["/tags/QQ/index.html","9913fe99b3c15d4598ba87cf73c022bd"],["/tags/QTTabbar/index.html","7f888ad6f4b1b7ccb7cb1769262cacb0"],["/tags/RX文件管理器/index.html","fd6286ff3d533db766c32a0546103bb4"],["/tags/Todesk/index.html","8f09964b2cb74a14829581d938e95688"],["/tags/Vercel/index.html","2079a052ac9aa31e0bb152f1b505de5e"],["/tags/ads/index.html","28ad744d9aefd0e9e28372a70c4cf65d"],["/tags/api/index.html","ec4a754884d2e99105208362967b39cf"],["/tags/app/index.html","33731ca61c2888defee312da455acea9"],["/tags/blacklist/index.html","b2db27499176ac8703a69f68cc6f721b"],["/tags/butterfly/index.html","cfcb70c10f25f0b4f8a0177eba575580"],["/tags/chrome/index.html","0cc08f26f286c3e7b262ee8270e1c20f"],["/tags/cloudflare/index.html","258d0d7f17fa1ea41082f3f41275f551"],["/tags/cmd/index.html","d78e99723b0eae2884648801e75ae036"],["/tags/c盘/index.html","a2411cab98d6066863b1e089cae832f0"],["/tags/email/index.html","a7d3987a3c34499a3d16aed49e1b5e86"],["/tags/ewomail/index.html","08122b59520d29f0aaad9b5e7f1ff712"],["/tags/fiddler/index.html","ec3d4015c3530018523a1186b76379fb"],["/tags/flags/index.html","cebc5b70acc154c83a07ad2a09634221"],["/tags/footer，页脚/index.html","02f06dffa5f33910cca8750915c1e295"],["/tags/galgame/index.html","4f6c9fa03a1a382c01fe662d9841461f"],["/tags/git/index.html","6c1e8596a11ea0f1751413e84f0e9748"],["/tags/gitcalendar/index.html","1ce3f3e1f9b82b425e3846ae76190271"],["/tags/google-voice/index.html","d9f8b237b81930d317fab51210953773"],["/tags/gv/index.html","fd39ad176e033bc4d891f0bb4e511a91"],["/tags/index-1.html","35f4c837ca34420ac558d733346ac6ec"],["/tags/index.html","db9aed5ecf645e76eded9d4538bb9893"],["/tags/jsdelivr/index.html","fcb922aeb7f3b30c142d52f10821eef1"],["/tags/linux/index.html","5468f106a27f97c56402c0f12893203b"],["/tags/madVR/index.html","bb81699643fe484afd49c1a8a3c50ac0"],["/tags/markdown/index.html","216535bea148d8c713e977b3791df8c4"],["/tags/maya/index.html","5443ba6e4c104ffbf51882c04353630e"],["/tags/mklink/index.html","1e3625eae5313a6b1a8be763594b4749"],["/tags/office-e5/index.html","b1f6089fa81d94e2c7ae81974890f0a5"],["/tags/onedrive/index.html","7910fcb57680ec4a643c5b05a59b2c97"],["/tags/picGO/index.html","03b0e289de529d944416e0155e3a0881"],["/tags/pixiv/index.html","5d0f0c5549618d943ce9ffa5d585244d"],["/tags/potplayer/index.html","1214dbbdb9adbe2cd5cbf043f395675c"],["/tags/proxypool/index.html","07f178b2c226df09ef353a1f2cd469b2"],["/tags/qbitorrent/index.html","a9ee2ae82a6d39d6444b764473a57b0c"],["/tags/raidrive/index.html","0f0279ea54428f022431c1d180789301"],["/tags/screen/index.html","21899656d766563f3e21ecb4673eae5d"],["/tags/speedtest/index.html","7029a165fb7986b0bc2aca29c9e000c2"],["/tags/tap/index.html","069e8411870f2bbc876c907efcde485d"],["/tags/telegram/index.html","be7a5c4fa3ee3f288e200981c56092f6"],["/tags/telegram代理/index.html","cf8d325bd0df27f4f6eefa52ec40e7e8"],["/tags/tg/index.html","1b8b26b19ea4505cc42e4872009533e1"],["/tags/tg代理/index.html","57e67a34485e242a7ae63a9157a97cd5"],["/tags/top50/index.html","75bb55dd77d03abfc272412e0da5cef4"],["/tags/tracker/index.html","d13a750cea6c47543d930c55f59d2ebc"],["/tags/translate/index.html","a7e13aa43d4ecc711aabcbf22dca4e94"],["/tags/translater/index.html","b9126318ffc221b2892875155a30bbfb"],["/tags/tun/index.html","68f376e21f572624e51b768b3d851596"],["/tags/typecho/index.html","6bf014ed2c744695d452f342abaab254"],["/tags/v2ray/index.html","855f121b9905f03608e388c3fad2f9d3"],["/tags/vpn/index.html","a1092e2d9608492c935884d26adac8d0"],["/tags/vps/index.html","1aaf9b9c45277c5013ef24005bd2087f"],["/tags/windows/index.html","2d86090ae63d9e69a8b92555fb402e76"],["/tags/windows端/index.html","e673181a76f9be34fec0c65b2d8c7068"],["/tags/xray/index.html","15dffe4e37629ff8720691cf7ef099f6"],["/tags/下载/index.html","7a279a9555d39fa09a03298fba246c67"],["/tags/不限速/index.html","3d5aef561d7ea2f13566e7f3496db681"],["/tags/个人网盘/index.html","69459cf213ad100374206c6a48dc8e7d"],["/tags/主题/index.html","ca0847c9d1de96b02c2468d247f29edd"],["/tags/云便签/index.html","c5d99903b85de9c6ed86d41b6110fc07"],["/tags/云盘/index.html","7b7d83231b15b00b9156a175cb290306"],["/tags/人人/index.html","94206ff6fca7272fbb9372d3e461ae19"],["/tags/代理/index.html","fa91a26422b2f866d493050e460c2bb7"],["/tags/代码/index.html","f2b2b584a110774c3562f2f557b45c82"],["/tags/优选IP/index.html","a2402d64f79b675bc3212e0109a76526"],["/tags/便签/index.html","6411033c152e07ce5ed2c867a2c0b962"],["/tags/保号/index.html","3195b6f00ddab2cda0cb5c260d5ad69e"],["/tags/免费/index.html","43c1426bc560f811ef7b05c2e6671c1c"],["/tags/免费节点/index.html","7acd6505e742391496c9d02a6e0d4f9b"],["/tags/加密/index.html","d5c3be73d3dba722b7952ea2f6c399b4"],["/tags/动画/index.html","4d7d8ce08ad2589dbf7d0b5337519286"],["/tags/博客/index.html","ead9730275fc3ef513c9483c34aed245"],["/tags/历史记录/index.html","2735761d10f5b03343c172462b667463"],["/tags/压力/index.html","ffd9cab5315816b456951340257f7bf5"],["/tags/压缩包/index.html","588a16a1bdf5a0df5d4482536141dbd1"],["/tags/反代/index.html","d1632e765cf28aed489a050b2450ca40"],["/tags/可视化/index.html","e77a13c6e524c7ef9b0f19bc4fe3c970"],["/tags/命令/index.html","e0fd1a01497ed5db7f5d3b9877687feb"],["/tags/国家/index.html","40433658aaaf08d7745ebc4c67a76e4d"],["/tags/图床/index.html","d3c674da19c10f564a65886d2f902651"],["/tags/图片/index.html","79965f03d15fa390e73e470676b201a4"],["/tags/域名/index.html","f001baadf68596db339f5961a078ff71"],["/tags/多标签/index.html","5eac882417bb0f0872551c670018c3a8"],["/tags/存储/index.html","74664c943793e51cc01e5e3e3a6c799e"],["/tags/学习/index.html","596a812d816fb79b7ff1a953b831b44e"],["/tags/安全/index.html","a0de50f15c039928eede68289504d7ab"],["/tags/安卓/index.html","e85516211f6a574064fbc23a1bbfd18b"],["/tags/宝塔/index.html","ebb080e0c930006a2524733b25215955"],["/tags/广告/index.html","a7fc3f22e28e102c2348e02dcbf70b04"],["/tags/建站/index.html","cdffd0d1e9ed4d9b9adf89fb2255601b"],["/tags/影视/index.html","6a2e8ff29d64a777cb422c665093f121"],["/tags/快速启动/index.html","5f9dee38e13f7740a12ae3e02de3abbe"],["/tags/手机/index.html","34008aa6816d17c4ef01747bd537af8b"],["/tags/托管/index.html","f7f6641752f18c140581e008837dba27"],["/tags/抓包/index.html","c1150679128d45104af0fb32c85e37c4"],["/tags/抓取/index.html","5298eb2bdf1fb63e7f72c2910cca93a9"],["/tags/投屏/index.html","68d47a975972a6c3dab633df2336b38a"],["/tags/拓展功能/index.html","696f56e1a2196bcd91edc2296514c711"],["/tags/挂载/index.html","a9b21f263bfd229fdf89c0a4b0a300a0"],["/tags/指纹/index.html","aee7a3f48ebbf2e28d0a645c6292f57a"],["/tags/接口/index.html","acecf35e1ab18c9cd13f0f64ddfc0f68"],["/tags/提取图片/index.html","19d30574ffd2a7db53a9a4ab631c2109"],["/tags/插件/index.html","acfe711c5efe6651131166dec120f4e7"],["/tags/搜图/index.html","171df202f9c1db52c8f1d8f65730b1a3"],["/tags/搭建/index.html","c001c824c45fe5a8e169940a3c51d78b"],["/tags/撤回/index.html","27afdb86468ac10a57cdf3ebcecad557"],["/tags/播放器/index.html","4eca4e2dbbccbe5dc17232299cabbbfe"],["/tags/政府网站/index.html","c65bd833dbe15d41af4d914e40cbb05f"],["/tags/效率/index.html","41b7b6718726735d4d4161d69b6c7a15"],["/tags/日历/index.html","2d60eca94fbb194412f2be73cdeb5dcb"],["/tags/服务器/index.html","08fa70e4ca1fc8243d277410d9f8c093"],["/tags/桌面/index.html","272e8b9e3b8dbefe29d22de4ad4e3e12"],["/tags/梯子/index.html","04a8f103bed38009ea5bc33ebb06dafd"],["/tags/检测工具/index.html","e08ec0b7fe70ae2f4a9b6f16ffb02647"],["/tags/汉化/index.html","3359b891e68decdec96f400e0a12c8ab"],["/tags/测压/index.html","1bf0604317f8309c9db94980e4519d37"],["/tags/测速/index.html","0f691641cdddf7ac126334075b91d9a8"],["/tags/浏览器/index.html","80a9d52482fcfb0c040c5b1d8dcfd9e8"],["/tags/清理/index.html","999213ddbd42db9892c63a02b9623291"],["/tags/滚动条/index.html","8d58bdb0c824c360a6d138e4832bf498"],["/tags/电影/index.html","84ef3177f4e4fb6f0d929489bec20374"],["/tags/电视剧/index.html","a17864e96731277eaa2a5071d86e8a84"],["/tags/白嫖/index.html","734c9e87aff0eb9cbec7e10a7930bb26"],["/tags/百度/index.html","ba8ec9376f7d23e0d7dc38ed240c87ec"],["/tags/百度云盘/index.html","004ddb9013e36e274a1ce75fcbe3d847"],["/tags/百科/index.html","5fa5580c39d229cb94efb9b4629a8cfa"],["/tags/短信/index.html","c9469e737fc6d87b1d8c9db3b25de2e5"],["/tags/硬件/index.html","844c64fd980c6cadb8a85b2974991287"],["/tags/科学上网/index.html","a4e7c1ef08b1030d6ded9aded9cbb647"],["/tags/空间/index.html","9714ac13e84e87c84611763f8d0b7dee"],["/tags/笔记/index.html","c50a1fca5ead84b23d29f98120ad16b6"],["/tags/简洁/index.html","08e39e349e310cea17b574ab284027b6"],["/tags/简约/index.html","1f65cc93a772598bd21424584fd1739d"],["/tags/维基/index.html","86b2c21363df43b82264f01c77626ac9"],["/tags/网易云/index.html","85d0b8ef3f612c7a4c1bc3361d930c56"],["/tags/网盘/index.html","6c80323a1892320271ff6a5be2be741b"],["/tags/网站/index.html","9993a9ff6368409279ec6330d4d0167a"],["/tags/网络/index.html","de5522edc1b0b8402daff51fbfdcfcb2"],["/tags/美化/index.html","9e2800672c19a66548963911670a8a33"],["/tags/翻墙/index.html","8641f70987d722193c6e473d685e94df"],["/tags/翻译/index.html","da7a0810e43c281e55e07c8eb3d51bcd"],["/tags/翻译器/index.html","4b91f1c8c3fd750374a24e5d626a74b2"],["/tags/聊天/index.html","9feee98ce9284d83c0d394a5dd9833c9"],["/tags/聊天室/index.html","d8a7e47d160b770e74012dce1c11441a"],["/tags/联想/index.html","270a1f0a05f3367771e639231cf28173"],["/tags/节点/index.html","90bd41313427a1a0005f42c0fed6eb51"],["/tags/虚拟手机号/index.html","3ba5410a83068f730b1c2c4cedf2cb21"],["/tags/补丁/index.html","0eab717135ebb9477ba523e424d92c48"],["/tags/视频/index.html","192f9f20ab6e45ab0d366a1364f36cd3"],["/tags/解析/index.html","f81b9f7709754cbbe0c407ed1b37d805"],["/tags/订阅链接/index.html","a38928e34ca9d4637e67a0125cb33c66"],["/tags/记录/index.html","0d163aeeb8d53129939f22b4cd0abea6"],["/tags/识图/index.html","02f82e7054dc751e91238aec916c9d42"],["/tags/语言/index.html","3764d6d3de401b05ee3e94ce681962fb"],["/tags/资源/index.html","43cd90887f9328efc34edfe4559611ba"],["/tags/资源管理器/index.html","98f0bcc3d343f708f4f50ef8ce13f420"],["/tags/转移/index.html","6f906987e6c6f7ae6a6e3205c2757c99"],["/tags/软件/index.html","563275750f4fad201be4bc44ec32b93d"],["/tags/轰炸/index.html","b86d925a49168aac7932c7bb43ceca14"],["/tags/迁移/index.html","129ae6146141ddc3c7a51d6a34a46777"],["/tags/远程控制/index.html","463d75af884ffa72a849cd97b11ec931"],["/tags/连接/index.html","6e9b12b36a04a3805779d4e0e175b2d0"],["/tags/追踪/index.html","d9fc11ed452d0ce0964dab0e2ed521e2"],["/tags/速度/index.html","f92d6555a23b57001e57f5f908dbf284"],["/tags/邮箱/index.html","64e53177eae35c8a2bbfb71f44efb0b0"],["/tags/酷炫/index.html","6cd7769467137a3a8607086c2ae86082"],["/tags/钓鱼/index.html","84b298c25373e5ec6525244aeb9c1388"],["/tags/镜像/index.html","70a5b194e2072444a1a147e74e414765"],["/tags/随机/index.html","63434f1b3706898862b3e4535f6539e1"],["/tags/隐藏/index.html","e8802b2fe72e37b2eb87d77fa5795363"],["/tags/面板/index.html","4272825143c19352456d17bc40aefa15"],["/tags/音乐/index.html","9f07c407d2535202d1ecf62c9e762f57"],["/tags/高颜值/index.html","23aa40ddd019354d1679c788427ff4a3"],["/tags/魔改/index.html","e823d389de66db68207a64339c28b0c4"],["/tags/黑名单/index.html","8775023f7b7fb87c4a77f395408a19a6"],["/urls/index.html","09a926dcd62e2349729688975e4b10f3"],["/vps/index.html","4677f4a6f3fd28b81023f311ffee5f79"],["/支持/index.html","ba602c9fc987af7a079321a7b0c1e8ec"]];
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
