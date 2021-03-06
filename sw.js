/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","77fca2fd666b7e5ea7ad1f1ca0344b6e"],["/2020/11/29/clash-windows/index.html","ebd2efe72cbfa360c12722e041917c28"],["/2020/11/30/websites2/index.html","079edeca52514682072b8759abb21ee2"],["/2020/12/04/iphone4s/index.html","115f9bcdb5b375c2cb2ef2df49191c6d"],["/2020/12/04/onenote/index.html","750970a15f237ff8ba8c3d0ddcd7bbaa"],["/2020/12/04/wesites1/index.html","90d877324ba583ca9001b0ec5aa2c62a"],["/2020/12/06/nokia808/index.html","b2bd2bfbd822410fe97bfaf34f17e0fd"],["/2020/12/07/ipad1/index.html","b91916a0126dafe1b202af9b1a629cb3"],["/2020/12/18/freesubscribes/index.html","50c8b287086cbcace72bb271d8c8688b"],["/2020/12/19/musics/index.html","a2fde0e422d258239c4fbeca26597aa3"],["/2020/12/19/shadowrocket/index.html","60b137b756a10a9f31cbec121c094fbb"],["/2020/12/19/v2ray-windows/index.html","db36e404cd90d48f4b682f3d937d31d4"],["/2020/12/19/v2rayng/index.html","1fed5d6915bbb621911197e6bb24f29c"],["/2020/12/20/beoplay/index.html","1a3d3f990d518836c6287d14464e818e"],["/2020/12/20/订阅链接转换/index.html","29f80d99c87487ab5f35f1bca8357ef0"],["/2020/12/21/chrome浏览器下载提速/index.html","ea81c323995de3a27a9c6a8e42f13a24"],["/2020/12/21/免费128线程并发下载xdown/index.html","788397ce466bd3992c760f8eafe68b98"],["/2020/12/21/免费32线程下载软件ndm/index.html","bece670e8a6ad4cec6fbba76476f5a98"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","0caabd5b4533c1e74b6a7904cff4f124"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","c53b3ec500b64dc47fafb29688bb2e66"],["/2020/12/21/广告怎么知道我在想什么/index.html","828bae7fa69fa181a5bed422cc4036e3"],["/2020/12/21/无名·引子（小说试写）/index.html","2df8f121e5688a651f4379d0469a6438"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","0b6f40f50c6ac2f9b3240123647cb986"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","cdd0a3264d067de843699a13d2640624"],["/2020/12/21/高速轻量下载器aria2/index.html","2649ff90d4734b24bf07048e3f709c66"],["/2020/12/22/2020-cee-roo/index.html","bafc8b287318a57780a406e343c63f10"],["/2020/12/22/firefox插件、github、steam富强/index.html","d043be8844019cfbee4ea090f83e164c"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","63131b9a89eab60807e513f232b93fab"],["/2020/12/26/python-day-1/index.html","113035434e7857a0c2722162242dc627"],["/2020/12/26/python-day-2/index.html","0e64dca2cb4890d86e74ed54a9697c05"],["/2020/12/26/度盘不限速下载方式一赏/index.html","d044b2e658d0f0d255c2f14b0137c81a"],["/2020/12/26/添加开机自启软件/index.html","b840c1f7763386b2787094b21001474f"],["/2020/12/26/电脑端截图方式一赏/index.html","f31127252b8fe4ab658ae9a07412220b"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","a6c03bb3b56efbc49e9a79bd734adbe7"],["/2020/12/27/最安全的浏览器tor/index.html","1d64b2933347159b44a52951ad021c1f"],["/2020/12/27/网易云刷等级和听歌数量/index.html","87db2660579477b9b85d620047cb2681"],["/2020/12/28/freenom申请免费域名/index.html","a95dac1420c5b3e118339a74df12770f"],["/2020/12/31/机场/index.html","83ac38b34345c249079fcfa31cc3ebac"],["/2021/01/01/M1/index.html","0077f778976ba0c9becaf403e56c2e30"],["/2021/01/01/compress/index.html","7a1a097f72b68b3a8e0ef70bd6c3103d"],["/2021/01/01/infinityfree/index.html","787b0049e1f1d23e75c497bc99e6f270"],["/2021/01/01/硬核翻墙/index.html","fe25906cf575934fb1fec0f44df706a7"],["/2021/01/02/qq/index.html","6f683577bd175815dbe6925d21e98674"],["/2021/01/03/netch/index.html","9d39b53d2079b4d4f3e5577e13062b52"],["/2021/01/03/waifu2x/index.html","4f1a4864cd7a18c05519f4adcdf45f66"],["/2021/01/04/ads/index.html","76883df6cd55e21b6f5c3ce021adb13f"],["/2021/01/04/games/index.html","d41c521549769a370532c4bf7eedeb00"],["/2021/01/04/heroku/index.html","cc483dba4b184925266211ee9cbc948b"],["/2021/01/06/movies/index.html","1398b0a85c50d2ccc2dfe4ab849edd28"],["/2021/01/07/google2020/index.html","5d7b737d3ca41746b52992c6adfc9b2d"],["/2021/01/07/lucky/index.html","62ded15563b437c12eef20d8cd06836a"],["/2021/01/07/spotify/index.html","1fe168012b493001e368e661326238c8"],["/2021/01/07/thunder/index.html","3ede3a3283221f46bfaea92d67609ed9"],["/2021/01/08/adguardhome/index.html","e76df78710be73600dd40d239042e69f"],["/2021/01/10/IBM/index.html","eb898dd1348da49f26e47972abf1fc55"],["/2021/01/10/potplayer/index.html","708bc4cab2f3b7aab19d6167682c05b2"],["/2021/01/10/sakuraanime/index.html","fa9740f3687bfd1d10737805d591ce57"],["/2021/01/10/美剧星球/index.html","e960909ca55c6ca9471626a351b0a928"],["/2021/01/12/telegraph/index.html","2db7fcdf5780e93ffa112f4ad5e7b84a"],["/2021/01/14/comics/index.html","e215724fece9c301d06c38e92737bf64"],["/2021/01/14/ftp/index.html","aaa33111440369e12b7af624415a716f"],["/2021/01/14/oraclecloud/index.html","d743545c56037687e148690b92efb672"],["/2021/01/14/porkbun/index.html","6ba873cc48182b24033df610bfd9a7b3"],["/2021/01/14/powertoys/index.html","0c5f630b31ad140ce6d9415756c99945"],["/2021/01/14/taptap/index.html","49e791582948fb5f253ae5da4e810688"],["/2021/01/14/ubuntuvsftp/index.html","05f97e5649b2aefdfe1bcf5f803a3ae2"],["/2021/01/14/小说/index.html","cf9e11e934a8e573f9da948b393b957b"],["/2021/01/15/freeproxies/index.html","44e8cbf11f3cd9e18e6d47e035b12797"],["/2021/01/15/incaseformat/index.html","6cf240356d86e8663acb31a1fab9ad40"],["/2021/01/16/euserv/index.html","752656e336dcc873950e3020d46080cb"],["/2021/01/16/winxray/index.html","ced841bb3e1c5d4da9ba23ae611c656a"],["/2021/01/18/qqreadhistory/index.html","85fab501ad69e5f67f78abf7e32e34ec"],["/2021/01/18/qqrevoke/index.html","d757ef23baab487484b1028f1dab397a"],["/2021/01/19/freevpn/index.html","00f70092d9a9e11ae430ffba5171283a"],["/2021/01/20/browsertrack/index.html","b6200e0ad63f791e989c541f6e811f62"],["/2021/01/20/v2ui/index.html","92ae565ba0fb868b4036f35cbebf704c"],["/2021/01/21/failedtoconnect/index.html","e62948ecdb4f8e7a17bfa5aa3f4e1b83"],["/2021/01/21/gitcalendar/index.html","3b3c3b573df8709b0e10d7f401004758"],["/2021/01/21/markdownformat/index.html","6b13b14f2c5e86a5a8bfca1c4b05888d"],["/2021/01/21/markdowntable/index.html","9cf809b6e3f05d9460b97cdaa72ee9f9"],["/2021/01/21/vercel/index.html","c7b063bd24d42a36bafe7ba7add85cce"],["/2021/01/22/hardware/index.html","6bad3350f034556b445af00fd08575f8"],["/2021/01/22/muviz/index.html","e02504b7d652319ccab017eb91f75011"],["/2021/01/22/randomapi/index.html","c2c4e24dc61d81c54ed39cc41baaeea6"],["/2021/01/22/searchimages/index.html","65dbf88aea192376c98b38151e32d2ff"],["/2021/01/23/RX文件管理器/index.html","6475d9b5707c44313faad4cec79f278e"],["/2021/01/23/chromeflag/index.html","5076cc7234c73b12ed1a53c2659c489d"],["/2021/01/23/qttabbar/index.html","de4f0e18610a4ac437eb0279c3949cc6"],["/2021/01/24/githubspeedup/index.html","2e7afedc043288bf508683af49046927"],["/2021/01/24/jsdelivr/index.html","fa7f9cde47587edea0e624d1eb963fdf"],["/2021/01/25/note/index.html","f4071b30c538d756183d002f1d38af22"],["/2021/01/25/soul/index.html","8876c9e632f196187d948e7d4403ac5e"],["/2021/01/26/herokuxray/index.html","6e4182700df51310645f9f95818e7c54"],["/2021/01/27/proxypool/index.html","62593cce5bc9f569405c9e29fe053a61"],["/2021/01/27/tracker/index.html","041dd7c3cd16b9ed3f7cee40c7ff1d8b"],["/2021/01/30/pandownphp/index.html","038e43d58ab35ef7c6ba5af3be26a3b2"],["/2021/01/31/newgroup/index.html","8da62438f3073a4a15fef875908a0c33"],["/2021/02/01/clashlanguage/index.html","2c47ac7067a6aec7f6f7005891552d93"],["/2021/02/01/encrypt/index.html","07cd94ef24438562d3e74cedbf07f072"],["/2021/02/01/footermotion/index.html","b0643a804ebb8d7c3dc73ac15be1f0ef"],["/2021/02/01/gitter/index.html","4fd738f206ba0a7fc6ce36a46ba9158c"],["/2021/02/01/pixivtop50/index.html","e573170512780aec12a9c39d91498ead"],["/2021/02/01/scrollbar/index.html","b98daf6c5d4a5becd9a7b5a173c5c62a"],["/2021/02/02/clover/index.html","0ea30d1cd7f438793fb23ce911f210ce"],["/2021/02/02/maya/index.html","f9f0ae1f4c07250ddd45ffdf1bcbd670"],["/2021/02/02/speedcontroller/index.html","7804b2a8879117ce985170fc53a20dc8"],["/2021/02/02/yesmusicplayer/index.html","fb7eb0b6a5ff7d65eda6c7fa610eb920"],["/2021/02/03/lenovoonelite/index.html","2c93215a94f84c38e53f1b3ee3deb67f"],["/2021/02/03/skipads/index.html","e43d8c32cfc76317ac487e400a62cbb8"],["/2021/02/04/picseed/index.html","f42f70e856d4f3c31f60b8b609a43291"],["/2021/02/04/renren/index.html","bdb6bea08b0d7c1da1823be1489e39a0"],["/2021/02/04/serverstress/index.html","ca2a10f3083de76f9e5abf0d0e4db2da"],["/2021/02/04/wikipediazh/index.html","03d81bf5ab58d281fdfc30a1d0b5c346"],["/2021/02/05/googlevoice/index.html","926b2c4ceae84e813dfef747abaa31c1"],["/2021/02/06/clashconnection/index.html","0b71e0e0fd3afa0fc5a29c2f976b6e48"],["/2021/02/06/gvtransfer/index.html","9d3e109c698f6a3aaeea67025ccd3586"],["/2021/02/06/todesk/index.html","824976f5db0704f86c033c95620cd392"],["/2021/02/06/vpnblacklist/index.html","80813c8ef8e6253dea967ace05645805"],["/2021/02/07/mklink/index.html","34e95d4cb561cb8009e7929ab4609a04"],["/2021/02/07/speedtest/index.html","4391fd905247e40a1f7d175c5e3b3e2f"],["/2021/02/07/translate/index.html","1fc3a56511d943542b83b4824b07f5a2"],["/2021/02/08/ewomail/index.html","f7b339d57e491d8c3f0e59932b40157f"],["/2021/02/10/officee5/index.html","c74bcd68241e715618209986eacc4c39"],["/2021/02/10/raidrive/index.html","05445f15dc5e781715222f60799c2f90"],["/2021/02/13/e5sub/index.html","e5391bc10343de3f3cd44c481254104a"],["/2021/02/14/screen/index.html","015a64f975323555cb908573e8b7308a"],["/2021/02/15/clashtun/index.html","6d1ba6cb8735d18d4c7c01750d249f82"],["/2021/02/15/messageboom/index.html","91eb24e4feb75b5e8d8547f674bb7004"],["/2021/02/15/oneindex/index.html","6b9cf7fb79e8884871d30b4bcc79a5e8"],["/2021/02/16/govsites/index.html","fc4cd1c5b471b662d19a0ce415ecff77"],["/2021/02/17/hexototypecho/index.html","16dd2e241775b952d2967b956905f81d"],["/2021/02/19/fiddler/index.html","622def0ebda165d1bbc180fbf1adf66b"],["/2021/02/22/potplayerset/index.html","e25d587789e66269f2c734d6088e1f41"],["/2021/02/22/studyresource/index.html","33380f90a073ca7d70c8b6faf2b8aefb"],["/2021/02/22/telegram/index.html","4f21a45330d8af5f7495df04e71f2c0e"],["/2021/02/22/videos/index.html","cbac3cfb6cb98097082376ad4dcdd242"],["/2021/02/24/mtproxy/index.html","c17828cda02eb6f1629444a1cf1bac9f"],["/404.html","b2922c64d16b1507b8ba590f81020b23"],["/archives/2020/11/index.html","ee06ac2dd345a46a647222b11860735c"],["/archives/2020/12/index.html","85d8cec8da2a6eb35f8fcbb7a74a67a1"],["/archives/2020/12/page/2/index.html","eb36827af5f92e65e433b0166377d30f"],["/archives/2020/12/page/3/index.html","cfac5aebd814fdb4ea6de3c88650e320"],["/archives/2020/index.html","2b2f2771305d203644feacae441aac72"],["/archives/2020/page/2/index.html","3a13caa70714913db6b14d3f57665e46"],["/archives/2020/page/3/index.html","5265a3a253cd7bfbd32ae8a03b41c5b3"],["/archives/2021/01/index.html","49e04f02e9c33e324ad084a41f5f2a11"],["/archives/2021/01/page/2/index.html","a23b6c793972dfa0a22354a88623ed4b"],["/archives/2021/01/page/3/index.html","06df581fa6f19d1d7773d855520f1640"],["/archives/2021/01/page/4/index.html","858ff1a736ad3c01b5af7599730a42e7"],["/archives/2021/02/index.html","6b54351817e4d0119f1c944a1df9c659"],["/archives/2021/02/page/2/index.html","f308f8dd5792141f05a3f84b953a270f"],["/archives/2021/02/page/3/index.html","fb99bad6f09f28a8a88c97acea3c18ca"],["/archives/2021/index.html","85960a05d54e7e235877f3907222b032"],["/archives/2021/page/2/index.html","1b044c67cff06168565689543b2e1641"],["/archives/2021/page/3/index.html","068bdf023bffd111c02f5a80ec1c8716"],["/archives/2021/page/4/index.html","e3ab8705a489c31b2234d363610b5cb8"],["/archives/2021/page/5/index.html","459e5f17d58dd60e0ef0ca2a2e8da68c"],["/archives/2021/page/6/index.html","93396701433a9fa3cd63806effebb455"],["/archives/2021/page/7/index.html","08da69cec4a9009f3641e67adb75bca2"],["/archives/index.html","1920fe2c6cd91dd1dc4360fad6d6b2f7"],["/archives/page/10/index.html","6bf21759f6a322090d438d7c5e626807"],["/archives/page/2/index.html","a58a7f4c74ef7dcd39731b3dc09d1bed"],["/archives/page/3/index.html","79834e6dd14de5757a7b0f0ebec043bd"],["/archives/page/4/index.html","cc1389cf8de8874ff1ca2c6ab2bfccc8"],["/archives/page/5/index.html","f8ea2b80a0d0428d07fe12adb71a05eb"],["/archives/page/6/index.html","7257f8bc789fd18d6e450404416bce0d"],["/archives/page/7/index.html","099c72e48939f8da42881fb63291e8d1"],["/archives/page/8/index.html","2c72e478fb1a2b472a59afe252c7069d"],["/archives/page/9/index.html","e58c85d514fb9561233eb0dc063fa771"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","6160e6f7d4263fc94dcb1bba0963413a"],["/categories/index.html","946e36da285684d611ed5da8bc449c06"],["/categories/下载/index.html","ad3c6b017172e8d9d33a84f83828ac06"],["/categories/安全/index.html","febe1f9324ec96dc609f641672836028"],["/categories/建站/index.html","81099bc8a2c4a4f1884a58d2015e14ca"],["/categories/杂/index.html","24aca37b5f4b0ab2a7536adf43c38c49"],["/categories/杂/page/2/index.html","8a713f852b9d57677a02212b1b77463c"],["/categories/测评/index.html","16ce8a3e7b6254b64c7819dfa6c7f3df"],["/categories/科学上网/index.html","ec9aceb121280d699cb054f2013ace94"],["/categories/科学上网/page/2/index.html","cb1710dd1350973f6518419831ee4ddd"],["/categories/编程/index.html","db54d1740c6c00d3f816dcfb49be8c0f"],["/categories/网站/index.html","cca083281bf1535833c8bb35af4b31d1"],["/categories/网站/page/2/index.html","1e930c1e11460f67a033290eca9668b0"],["/categories/软件/index.html","0e4549f15fb04b0af48a182a25e8d983"],["/categories/软件/page/2/index.html","68f9dd5d4f9d59365ada7fb322fdf163"],["/categories/软件/page/3/index.html","464f5b0ef1e2a8f406e5da0e837d11b1"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","c07fca4e698483e2bf26d3f369285917"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","ded4b8199378b9ca99fa5fe2932712b2"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","65f4ba4df9b483c910463e996dd2a930"],["/ios/index.html","6839c953c0d1877a411df3a1fde063fa"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","f5479b97857debe22d312d1619706bba"],["/page/2/index.html","575c823aa8d90a26c6143784059059c4"],["/page/3/index.html","d1814eddb66bcc46df2d10d7159a8c63"],["/page/4/index.html","4baa0c7d638ff1556b1fec1e809507fb"],["/page/5/index.html","d2936080f2299c32919b7aef222d0e77"],["/page/6/index.html","fbd1a39ef2e62a8afa12a76b87e7b6c8"],["/page/7/index.html","cd71a5a28e561593e064edc14fc6d39d"],["/page/8/index.html","a0ef5d5f43aef25aabafc233c2b13847"],["/page/9/index.html","0c12106ebd5dcbfb65d8834a5249e84e"],["/payment/index.html","64b50f3e5276b5157e1034a8084b7a08"],["/privacy-policy/index.html","c77ad575786ba26fc0b442271d972bde"],["/rss2.xml","3bb2234253456028a7a5079246ab30f6"],["/search.xml","0f2973150f47da03831332d534de5b37"],["/sitemap.xml","666ff560d9b6ba42cc8b246f8fc1e6b7"],["/sw-register.js","7db27e0d544b692758ac307091740cd8"],["/tags/5t/index.html","ed1428b8aded883272c5f4f96adadd72"],["/tags/Clash/index.html","bf63cd759d62d54529a0f72001992b80"],["/tags/Clover/index.html","201614c910843c728d81f1cc604f1972"],["/tags/E5/index.html","6b0ff62a539af181a2306906ede1d363"],["/tags/FTP/index.html","1c411eb1e874020a644e16b67aaf9556"],["/tags/GitHub/index.html","3d87113cfa5b406c95c04dc7ab9821cd"],["/tags/Heroku/index.html","3202503964ff70d7a882a48810232ee1"],["/tags/Hexo/index.html","95ca0a08fe9871e1f3011393220e120b"],["/tags/Lenovo/index.html","9747c85ce2f6ea4bd2090689a021f203"],["/tags/Oneindex/index.html","987bf111b51d0c3a902199f0dc6d2b4b"],["/tags/QQ/index.html","4340d44381512318238174f1bc9b0eb6"],["/tags/QTTabbar/index.html","502d93a6c2a6eb43493c416a04ba2089"],["/tags/RX文件管理器/index.html","188779a99acc28c6f6737ad20cdd8a7f"],["/tags/Todesk/index.html","291d84d65e106cef36daa4bf91d4431b"],["/tags/Vercel/index.html","3be03e5ef737b4623f4bca36da25c43e"],["/tags/ads/index.html","8e6ded9bae15e28c6109ff6efd96e14b"],["/tags/api/index.html","f672a821c3ed70c39571cc77113cb464"],["/tags/app/index.html","b9b95aff4ddc6d8eed443b1f11d3fe5d"],["/tags/blacklist/index.html","e6e86d4ec1407d89ec0d0ef0b9791c12"],["/tags/butterfly/index.html","a87d4f92920b43a55fb12df743410a25"],["/tags/chrome/index.html","335aebf55a7c92411ebb77d567322d8f"],["/tags/cloudflare/index.html","608c6cb170363cedd81d02c37b01f9fb"],["/tags/cmd/index.html","daeab9b58107fbe0f5af5e12b469d87e"],["/tags/c盘/index.html","23638a58efa8a567564da1002c30e534"],["/tags/email/index.html","fe4654550315ce0eec54dbcdd908318a"],["/tags/ewomail/index.html","5d29fac4facd4de67496a0b15defba57"],["/tags/fiddler/index.html","0ab7eadc608e338f9d8752c82b6fbe03"],["/tags/flags/index.html","04ded0e4209730e5b9a5fafd7619b086"],["/tags/footer，页脚/index.html","ea4da799c81722e5cb7c0d224d689001"],["/tags/galgame/index.html","d5ac000ca2413e478cf86f70d2f4ee5b"],["/tags/git/index.html","48e8d3029f728a06117d07e1a6353077"],["/tags/gitcalendar/index.html","b170d90fde90d1efd421b2a22bb2a399"],["/tags/google-voice/index.html","f0b2ecf4d1026618a8c74b97f6abf6bf"],["/tags/gv/index.html","97605464aa872f3fdcde5afbcf7a45b1"],["/tags/index-1.html","448e2457776a4c027379a65142c7ea10"],["/tags/index.html","25f02ec9c21026c83090d103271a2b21"],["/tags/jsdelivr/index.html","45d5c668276cb1c05b99738a6a15252b"],["/tags/linux/index.html","262c80968770097395b61dee56030971"],["/tags/madVR/index.html","6b07c6c60b64b7e21ae4553471fbd0a9"],["/tags/markdown/index.html","cf6801dc46fd7450a36ddae583bb7134"],["/tags/maya/index.html","c9117fce86ed7de0f3425033f50e45a5"],["/tags/mklink/index.html","04a3e429a625a4805b1a0ff79e424044"],["/tags/office-e5/index.html","43d85e7e893e4a4f83db5d1fc9aa1417"],["/tags/onedrive/index.html","6e1788b27c744826951860701960e6a9"],["/tags/picGO/index.html","fe9d5d1cf4c7936b0d5787b478e4ace0"],["/tags/pixiv/index.html","66ffef411a2f56947bf60e5f7842c689"],["/tags/potplayer/index.html","3028b4973bb9c68fb9acfe9faf55aac7"],["/tags/proxypool/index.html","3f4b3e95ba5f60607ae29e98798d3f42"],["/tags/qbitorrent/index.html","f8cd347142f21ddd6dd05e602848f348"],["/tags/raidrive/index.html","337ca8692d09bbf5f31318dafd1cb761"],["/tags/screen/index.html","9dd7d59188862abf84a5e799bd773325"],["/tags/speedtest/index.html","17e56787ebe545656ac7136dece305aa"],["/tags/tap/index.html","e486b41b4de32c8ec71e7638a913a412"],["/tags/telegram/index.html","5fe12d0ebeab9ff7ade9027d066abb00"],["/tags/telegram代理/index.html","ebadf39be38105fbe0984fcd675c3ad4"],["/tags/tg/index.html","1baf1c626653c0cec3b24066a45f6b42"],["/tags/tg代理/index.html","1ba54e7afc942d17db56cc9ae179eb91"],["/tags/top50/index.html","3cd3823d31caae0dfa99f1c8a181bf78"],["/tags/tracker/index.html","80d14898d8af226794a805ac241b6bd6"],["/tags/translate/index.html","147df35bea5e8c77ee7b7b6e163381ac"],["/tags/translater/index.html","3badef21b31748859fd73cd1f9cba7f1"],["/tags/tun/index.html","e0859d62850db109a016c2964010b3f2"],["/tags/typecho/index.html","1f452d26a2fc45d3e33a4bbaf8d7875b"],["/tags/v2ray/index.html","7d99902d64b4c98c9e3b6fd9bded5a69"],["/tags/vpn/index.html","8b9463e2601641864055adbf307a071c"],["/tags/vps/index.html","7d7036e6c33808889bf070c2fd31c217"],["/tags/windows/index.html","b55cc2b4d30be6bd8843d7c7146ce400"],["/tags/windows端/index.html","b5ad81fd6278495b20429b1a56de640e"],["/tags/xray/index.html","d495cde76d99046e09a16bba7209e599"],["/tags/下载/index.html","2c420370f9edfab75cb5f22eb286de26"],["/tags/不限速/index.html","537b50c122cbb2af05cda7d26372b505"],["/tags/个人网盘/index.html","f5f31caf5a32f92b8d5115a26bf335fc"],["/tags/主题/index.html","0a3935e8f4073e574facec74bde98017"],["/tags/云便签/index.html","e3f554225f8c12aadd137ca5a08eb265"],["/tags/云盘/index.html","743b37af1f0d5faa30de21658a695c1d"],["/tags/人人/index.html","59961661a15a3984968a934a32c053f9"],["/tags/代理/index.html","d794092aba588e60e51eeff2709f4bc6"],["/tags/代码/index.html","7298be663477b9ebfdbf0c3d699b9083"],["/tags/优选IP/index.html","58f8a911b72d1511ead418abeb8d13eb"],["/tags/便签/index.html","c2e8f72bf82e538f04bd148e29fd0f15"],["/tags/保号/index.html","cb57ace7a9e0403b6c6f07f4d5213e3a"],["/tags/免费/index.html","1b43e19132f05706e8573940fa02efaa"],["/tags/免费节点/index.html","12867d2b7cd78109fdf346982fbed960"],["/tags/加密/index.html","39c0b184426b54f97d522747e631bf99"],["/tags/动画/index.html","c2b35f63f63f20b92dcefaef2b21142b"],["/tags/博客/index.html","de6dfc085dc92dc0cc7ab7886d550f55"],["/tags/历史记录/index.html","b66e49d17dcd9e0b3c335340cf34b678"],["/tags/压力/index.html","89e878ba009efab3f2fc3b3312dbf349"],["/tags/压缩包/index.html","a8a82db0ac2815eff69d46f1f9869b20"],["/tags/反代/index.html","d0bbfc211653eeb1acc8e5f79947df8c"],["/tags/可视化/index.html","d7be3a2c5fbdbf81ea41701fed5acba1"],["/tags/命令/index.html","640b0ad0649deaaec1d0fff4a2c61b57"],["/tags/国家/index.html","1d5617ed7219321027a59f7e8ef27caf"],["/tags/图床/index.html","16576e8d6f5cf23457702de87d9c6e46"],["/tags/图片/index.html","f707c7a242e7da36a1dd3781e48d7153"],["/tags/域名/index.html","c3940fbe8c8e40fe15ef1b9803f318ed"],["/tags/多标签/index.html","1fb17459bbffc98687cd54fd3c6f348d"],["/tags/存储/index.html","bb133ed50ec44d0da2bc0d8108e29c37"],["/tags/学习/index.html","0d61e00792eeca27ffab9bd2e4053831"],["/tags/安全/index.html","7318048095c473bbaf1fc108520b7d36"],["/tags/安卓/index.html","e4b5e13e93b87361a4fc96627de2c94e"],["/tags/宝塔/index.html","b22640de34f497488171e1e66e89d750"],["/tags/广告/index.html","65af6ff572e568712522f48add34da19"],["/tags/建站/index.html","8e90ac0b93a075fbe6c2c088a93b3fbe"],["/tags/影视/index.html","268e07e24ad16931d0398d9aaf2cdbc4"],["/tags/快速启动/index.html","689135ca07eca0935f65725feb8fbefc"],["/tags/手机/index.html","f592604170ca974fd5b1517240ecaa28"],["/tags/托管/index.html","1495548cddcf3b6c9b954d7c1144d518"],["/tags/抓包/index.html","5ca02eb0ea7555d21c10d59db245366c"],["/tags/抓取/index.html","dc9bf798674e72614e338f83ad5986a7"],["/tags/投屏/index.html","5bfebf4334020d7ef7a939982a22a6f7"],["/tags/拓展功能/index.html","7f5e1a52273dcff8f7d3178ec28143be"],["/tags/挂载/index.html","d44849c67bd04a1bf865f2173b1708fb"],["/tags/指纹/index.html","c65b7576b00df8df1f0f25b1cd721dbd"],["/tags/接口/index.html","ada28cc276bd2fde82f6285272b87db4"],["/tags/提取图片/index.html","ac22096de6af8fdc21cc910b0dc26fa0"],["/tags/插件/index.html","2fab4d576f7cdd1044d0bcd93433f522"],["/tags/搜图/index.html","0b490a9bcbcec195bc7aaa24b407e687"],["/tags/搭建/index.html","e6bb8903eb516b0d597262b015acc07d"],["/tags/撤回/index.html","019a82e82ca6b73f0a7c76ab2059c53d"],["/tags/播放器/index.html","99660003024544be9bf87e3ef207ab9d"],["/tags/政府网站/index.html","658b25d07031bb70ad6918701071a6f1"],["/tags/效率/index.html","255c0e8473ca2db37a2810f904d9927d"],["/tags/日历/index.html","a70861a3f6241936461f4554385afaf3"],["/tags/服务器/index.html","4df3401785039b963c40a4ac275f6ba2"],["/tags/桌面/index.html","4ca96c5351281668d2ca29bccbf74ec1"],["/tags/梯子/index.html","b94b9d42f6dfb5d191e1dc9243b92746"],["/tags/检测工具/index.html","d2c854398985c122e6b0e8254004a296"],["/tags/汉化/index.html","7508d8e38fd32ba3c18810f6e14438cd"],["/tags/测压/index.html","8ad323013429ff5da9c4f2563f73f005"],["/tags/测速/index.html","1acdc541e75bb37bb30205f81a80cff4"],["/tags/浏览器/index.html","208e2df1415718ed290da9f9c43aba58"],["/tags/清理/index.html","2de8cc6eee23f065bc43addacf47028a"],["/tags/滚动条/index.html","39ea037a88450f9465c23f6bfd7015a5"],["/tags/电影/index.html","9dd3b16033caea8fd6986b641e427676"],["/tags/电视剧/index.html","b86a81712c36f93fa9658d3642c6c0fc"],["/tags/白嫖/index.html","aeb96730094528d07542bfa22ea4eefb"],["/tags/百度/index.html","285baa99cc6ea0fc2cab1a286f77c4c8"],["/tags/百度云盘/index.html","6a56fafc9671665a7b3cb45970e2f02b"],["/tags/百科/index.html","c3ac4dfa86f47d06ebdff6228f6ea739"],["/tags/短信/index.html","1a4794f07fbc8e7905ee673a4529c577"],["/tags/硬件/index.html","f8af08932d4019ab2cff0352f56b5009"],["/tags/科学上网/index.html","2577ab62d04b3ebb468e3f01c6b1d4c3"],["/tags/空间/index.html","a77ebf7c01d36ed3e5d4d0da17ccdb72"],["/tags/笔记/index.html","286c7afb665e61cace78431fc2485538"],["/tags/简洁/index.html","8be49b7c941d6e3995ce8e291802d214"],["/tags/简约/index.html","b71cddf66d31b66eb5fc2f1ee231c8da"],["/tags/维基/index.html","a69c033f64f19bf9821ab9337ee87e19"],["/tags/网易云/index.html","7c6630aa942398f8af95cc500aa6dd3e"],["/tags/网盘/index.html","86a41d310ee73f1945ae60b57e3cb79a"],["/tags/网站/index.html","8c6af817bb045e2240893a6c0c588eaf"],["/tags/网络/index.html","8001b590a76f92781a125dcea2405dc8"],["/tags/美化/index.html","42bcf829bb4aeed529de87312dcfbe09"],["/tags/翻墙/index.html","30e7b1d963bdd9340205e6cbef98b549"],["/tags/翻译/index.html","d5785c67f712b61b956d77ff403ac450"],["/tags/翻译器/index.html","4ef3e91156fc66f1e177cbaf8ed1618a"],["/tags/聊天/index.html","b2c253afedc06bacd3b27d8e4cd4bf55"],["/tags/聊天室/index.html","9f1aa5b031750c27866c3d208535be11"],["/tags/联想/index.html","11c6c98d86b029325fba26690d7e9ac2"],["/tags/节点/index.html","312d4b534233b78a20122a51ce8ac773"],["/tags/虚拟手机号/index.html","a01bfbabdf02bb209eb0b43db68a8934"],["/tags/补丁/index.html","b64ffc9da252693f86c9cd36c26b24d7"],["/tags/视频/index.html","36b00d375bc2066e1eedb6a541878caf"],["/tags/解析/index.html","4c085de06e0a81b9b828ae2640943e7a"],["/tags/订阅链接/index.html","d8bd925874ccde352dc9a7413fda03ae"],["/tags/记录/index.html","60ba0ac69b13de8b8c95ada69ec6802a"],["/tags/识图/index.html","3970db0017e34f4aa2d74b6429955243"],["/tags/语言/index.html","65cf46c8ddfabb7fda15d8a03fb00fd0"],["/tags/资源/index.html","658e91cf2e554bddfcad26911e6aa19b"],["/tags/资源管理器/index.html","f6179e59ff48c0c99c2aacf62a9c1125"],["/tags/转移/index.html","50d36c012f34df7aa166c900502bf632"],["/tags/软件/index.html","4f2440119bc2a58273f0af004c70da35"],["/tags/轰炸/index.html","392f66315a6fbc768e9a881a213909d0"],["/tags/迁移/index.html","13cc1bc9fe19104f043c434bfffdc2c0"],["/tags/远程控制/index.html","52e5637d33b948c03c1cd510afcdfe2b"],["/tags/连接/index.html","e610d4a9aa3a8c414447c9c4787af680"],["/tags/追踪/index.html","db259ee0206ee2301405ec0a8714c699"],["/tags/速度/index.html","42943bb935f4a08671c345e33edbb5b2"],["/tags/邮箱/index.html","511c174163a51fa4963565631d91c3f1"],["/tags/酷炫/index.html","ffec9630967120857e76eac657066d10"],["/tags/钓鱼/index.html","87c50eea23b9e2a519e1ea04e3c80ad5"],["/tags/镜像/index.html","57ff21b98c9a9fd6479101edb42a51ef"],["/tags/随机/index.html","3380377846983881866f0d63f8d22de5"],["/tags/隐藏/index.html","91d9f1b65e9da5ace541eb001659a5f9"],["/tags/面板/index.html","d777362c69f9275f576372219075d2e5"],["/tags/音乐/index.html","46bfd67be0531ee8b776f7feb351b8f7"],["/tags/高颜值/index.html","d0a5b2e2d60c9adc9fd8258618d9779b"],["/tags/魔改/index.html","49df2837422c123ca9f194eeeb516b18"],["/tags/黑名单/index.html","1506ce932e28431f5affc5592f8718eb"],["/urls/index.html","0d567e12fa930cff2f436919bb1d1201"],["/vps/index.html","f5436b2938ab3d92edb5c44428f0797e"],["/支持/index.html","f89fdbf87af0bf7d3de4431835652454"]];
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
