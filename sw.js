/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","77fca2fd666b7e5ea7ad1f1ca0344b6e"],["/2020/11/29/clash-windows/index.html","ebd2efe72cbfa360c12722e041917c28"],["/2020/11/30/websites2/index.html","079edeca52514682072b8759abb21ee2"],["/2020/12/04/iphone4s/index.html","115f9bcdb5b375c2cb2ef2df49191c6d"],["/2020/12/04/onenote/index.html","750970a15f237ff8ba8c3d0ddcd7bbaa"],["/2020/12/04/wesites1/index.html","90d877324ba583ca9001b0ec5aa2c62a"],["/2020/12/06/nokia808/index.html","b2bd2bfbd822410fe97bfaf34f17e0fd"],["/2020/12/07/ipad1/index.html","b91916a0126dafe1b202af9b1a629cb3"],["/2020/12/18/freesubscribes/index.html","50c8b287086cbcace72bb271d8c8688b"],["/2020/12/19/musics/index.html","a2fde0e422d258239c4fbeca26597aa3"],["/2020/12/19/shadowrocket/index.html","60b137b756a10a9f31cbec121c094fbb"],["/2020/12/19/v2ray-windows/index.html","db36e404cd90d48f4b682f3d937d31d4"],["/2020/12/19/v2rayng/index.html","1fed5d6915bbb621911197e6bb24f29c"],["/2020/12/20/beoplay/index.html","1a3d3f990d518836c6287d14464e818e"],["/2020/12/20/订阅链接转换/index.html","29f80d99c87487ab5f35f1bca8357ef0"],["/2020/12/21/chrome浏览器下载提速/index.html","ea81c323995de3a27a9c6a8e42f13a24"],["/2020/12/21/免费128线程并发下载xdown/index.html","788397ce466bd3992c760f8eafe68b98"],["/2020/12/21/免费32线程下载软件ndm/index.html","bece670e8a6ad4cec6fbba76476f5a98"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","0caabd5b4533c1e74b6a7904cff4f124"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","c53b3ec500b64dc47fafb29688bb2e66"],["/2020/12/21/广告怎么知道我在想什么/index.html","828bae7fa69fa181a5bed422cc4036e3"],["/2020/12/21/无名·引子（小说试写）/index.html","2df8f121e5688a651f4379d0469a6438"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","0b6f40f50c6ac2f9b3240123647cb986"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","cdd0a3264d067de843699a13d2640624"],["/2020/12/21/高速轻量下载器aria2/index.html","2649ff90d4734b24bf07048e3f709c66"],["/2020/12/22/2020-cee-roo/index.html","bafc8b287318a57780a406e343c63f10"],["/2020/12/22/firefox插件、github、steam富强/index.html","d043be8844019cfbee4ea090f83e164c"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","63131b9a89eab60807e513f232b93fab"],["/2020/12/26/python-day-1/index.html","113035434e7857a0c2722162242dc627"],["/2020/12/26/python-day-2/index.html","0e64dca2cb4890d86e74ed54a9697c05"],["/2020/12/26/度盘不限速下载方式一赏/index.html","d044b2e658d0f0d255c2f14b0137c81a"],["/2020/12/26/添加开机自启软件/index.html","b840c1f7763386b2787094b21001474f"],["/2020/12/26/电脑端截图方式一赏/index.html","f31127252b8fe4ab658ae9a07412220b"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","a6c03bb3b56efbc49e9a79bd734adbe7"],["/2020/12/27/最安全的浏览器tor/index.html","1d64b2933347159b44a52951ad021c1f"],["/2020/12/27/网易云刷等级和听歌数量/index.html","87db2660579477b9b85d620047cb2681"],["/2020/12/28/freenom申请免费域名/index.html","a95dac1420c5b3e118339a74df12770f"],["/2020/12/31/机场/index.html","83ac38b34345c249079fcfa31cc3ebac"],["/2021/01/01/M1/index.html","0077f778976ba0c9becaf403e56c2e30"],["/2021/01/01/compress/index.html","7a1a097f72b68b3a8e0ef70bd6c3103d"],["/2021/01/01/infinityfree/index.html","787b0049e1f1d23e75c497bc99e6f270"],["/2021/01/01/硬核翻墙/index.html","fe25906cf575934fb1fec0f44df706a7"],["/2021/01/02/qq/index.html","6f683577bd175815dbe6925d21e98674"],["/2021/01/03/netch/index.html","9d39b53d2079b4d4f3e5577e13062b52"],["/2021/01/03/waifu2x/index.html","4f1a4864cd7a18c05519f4adcdf45f66"],["/2021/01/04/ads/index.html","76883df6cd55e21b6f5c3ce021adb13f"],["/2021/01/04/games/index.html","d41c521549769a370532c4bf7eedeb00"],["/2021/01/04/heroku/index.html","cc483dba4b184925266211ee9cbc948b"],["/2021/01/06/movies/index.html","1398b0a85c50d2ccc2dfe4ab849edd28"],["/2021/01/07/google2020/index.html","5d7b737d3ca41746b52992c6adfc9b2d"],["/2021/01/07/lucky/index.html","62ded15563b437c12eef20d8cd06836a"],["/2021/01/07/spotify/index.html","1fe168012b493001e368e661326238c8"],["/2021/01/07/thunder/index.html","3ede3a3283221f46bfaea92d67609ed9"],["/2021/01/08/adguardhome/index.html","e76df78710be73600dd40d239042e69f"],["/2021/01/10/IBM/index.html","eb898dd1348da49f26e47972abf1fc55"],["/2021/01/10/potplayer/index.html","708bc4cab2f3b7aab19d6167682c05b2"],["/2021/01/10/sakuraanime/index.html","fa9740f3687bfd1d10737805d591ce57"],["/2021/01/10/美剧星球/index.html","e960909ca55c6ca9471626a351b0a928"],["/2021/01/12/telegraph/index.html","2db7fcdf5780e93ffa112f4ad5e7b84a"],["/2021/01/14/comics/index.html","e215724fece9c301d06c38e92737bf64"],["/2021/01/14/ftp/index.html","aaa33111440369e12b7af624415a716f"],["/2021/01/14/oraclecloud/index.html","d743545c56037687e148690b92efb672"],["/2021/01/14/porkbun/index.html","6ba873cc48182b24033df610bfd9a7b3"],["/2021/01/14/powertoys/index.html","0c5f630b31ad140ce6d9415756c99945"],["/2021/01/14/taptap/index.html","49e791582948fb5f253ae5da4e810688"],["/2021/01/14/ubuntuvsftp/index.html","05f97e5649b2aefdfe1bcf5f803a3ae2"],["/2021/01/14/小说/index.html","cf9e11e934a8e573f9da948b393b957b"],["/2021/01/15/freeproxies/index.html","44e8cbf11f3cd9e18e6d47e035b12797"],["/2021/01/15/incaseformat/index.html","6cf240356d86e8663acb31a1fab9ad40"],["/2021/01/16/euserv/index.html","752656e336dcc873950e3020d46080cb"],["/2021/01/16/winxray/index.html","ced841bb3e1c5d4da9ba23ae611c656a"],["/2021/01/18/qqreadhistory/index.html","85fab501ad69e5f67f78abf7e32e34ec"],["/2021/01/18/qqrevoke/index.html","d757ef23baab487484b1028f1dab397a"],["/2021/01/19/freevpn/index.html","e2f8da29a6f810bf64673e85e455e273"],["/2021/01/20/browsertrack/index.html","b6200e0ad63f791e989c541f6e811f62"],["/2021/01/20/v2ui/index.html","92ae565ba0fb868b4036f35cbebf704c"],["/2021/01/21/failedtoconnect/index.html","e62948ecdb4f8e7a17bfa5aa3f4e1b83"],["/2021/01/21/gitcalendar/index.html","3b3c3b573df8709b0e10d7f401004758"],["/2021/01/21/markdownformat/index.html","6b13b14f2c5e86a5a8bfca1c4b05888d"],["/2021/01/21/markdowntable/index.html","9cf809b6e3f05d9460b97cdaa72ee9f9"],["/2021/01/21/vercel/index.html","c7b063bd24d42a36bafe7ba7add85cce"],["/2021/01/22/hardware/index.html","6bad3350f034556b445af00fd08575f8"],["/2021/01/22/muviz/index.html","e02504b7d652319ccab017eb91f75011"],["/2021/01/22/randomapi/index.html","c2c4e24dc61d81c54ed39cc41baaeea6"],["/2021/01/22/searchimages/index.html","65dbf88aea192376c98b38151e32d2ff"],["/2021/01/23/RX文件管理器/index.html","6475d9b5707c44313faad4cec79f278e"],["/2021/01/23/chromeflag/index.html","5076cc7234c73b12ed1a53c2659c489d"],["/2021/01/23/qttabbar/index.html","de4f0e18610a4ac437eb0279c3949cc6"],["/2021/01/24/githubspeedup/index.html","2e7afedc043288bf508683af49046927"],["/2021/01/24/jsdelivr/index.html","fa7f9cde47587edea0e624d1eb963fdf"],["/2021/01/25/note/index.html","f4071b30c538d756183d002f1d38af22"],["/2021/01/25/soul/index.html","8876c9e632f196187d948e7d4403ac5e"],["/2021/01/26/herokuxray/index.html","6e4182700df51310645f9f95818e7c54"],["/2021/01/27/proxypool/index.html","62593cce5bc9f569405c9e29fe053a61"],["/2021/01/27/tracker/index.html","041dd7c3cd16b9ed3f7cee40c7ff1d8b"],["/2021/01/30/pandownphp/index.html","038e43d58ab35ef7c6ba5af3be26a3b2"],["/2021/01/31/newgroup/index.html","8da62438f3073a4a15fef875908a0c33"],["/2021/02/01/clashlanguage/index.html","2c47ac7067a6aec7f6f7005891552d93"],["/2021/02/01/encrypt/index.html","07cd94ef24438562d3e74cedbf07f072"],["/2021/02/01/footermotion/index.html","b0643a804ebb8d7c3dc73ac15be1f0ef"],["/2021/02/01/gitter/index.html","4fd738f206ba0a7fc6ce36a46ba9158c"],["/2021/02/01/pixivtop50/index.html","e573170512780aec12a9c39d91498ead"],["/2021/02/01/scrollbar/index.html","b98daf6c5d4a5becd9a7b5a173c5c62a"],["/2021/02/02/clover/index.html","0ea30d1cd7f438793fb23ce911f210ce"],["/2021/02/02/maya/index.html","f9f0ae1f4c07250ddd45ffdf1bcbd670"],["/2021/02/02/speedcontroller/index.html","7804b2a8879117ce985170fc53a20dc8"],["/2021/02/02/yesmusicplayer/index.html","fb7eb0b6a5ff7d65eda6c7fa610eb920"],["/2021/02/03/lenovoonelite/index.html","2c93215a94f84c38e53f1b3ee3deb67f"],["/2021/02/03/skipads/index.html","e43d8c32cfc76317ac487e400a62cbb8"],["/2021/02/04/picseed/index.html","f42f70e856d4f3c31f60b8b609a43291"],["/2021/02/04/renren/index.html","bdb6bea08b0d7c1da1823be1489e39a0"],["/2021/02/04/serverstress/index.html","ca2a10f3083de76f9e5abf0d0e4db2da"],["/2021/02/04/wikipediazh/index.html","03d81bf5ab58d281fdfc30a1d0b5c346"],["/2021/02/05/googlevoice/index.html","926b2c4ceae84e813dfef747abaa31c1"],["/2021/02/06/clashconnection/index.html","0b71e0e0fd3afa0fc5a29c2f976b6e48"],["/2021/02/06/gvtransfer/index.html","9d3e109c698f6a3aaeea67025ccd3586"],["/2021/02/06/todesk/index.html","824976f5db0704f86c033c95620cd392"],["/2021/02/06/vpnblacklist/index.html","80813c8ef8e6253dea967ace05645805"],["/2021/02/07/mklink/index.html","34e95d4cb561cb8009e7929ab4609a04"],["/2021/02/07/speedtest/index.html","4391fd905247e40a1f7d175c5e3b3e2f"],["/2021/02/07/translate/index.html","1fc3a56511d943542b83b4824b07f5a2"],["/2021/02/08/ewomail/index.html","f7b339d57e491d8c3f0e59932b40157f"],["/2021/02/10/officee5/index.html","c74bcd68241e715618209986eacc4c39"],["/2021/02/10/raidrive/index.html","05445f15dc5e781715222f60799c2f90"],["/2021/02/13/e5sub/index.html","e5391bc10343de3f3cd44c481254104a"],["/2021/02/14/screen/index.html","015a64f975323555cb908573e8b7308a"],["/2021/02/15/clashtun/index.html","6d1ba6cb8735d18d4c7c01750d249f82"],["/2021/02/15/messageboom/index.html","91eb24e4feb75b5e8d8547f674bb7004"],["/2021/02/15/oneindex/index.html","6b9cf7fb79e8884871d30b4bcc79a5e8"],["/2021/02/16/govsites/index.html","fc4cd1c5b471b662d19a0ce415ecff77"],["/2021/02/17/hexototypecho/index.html","16dd2e241775b952d2967b956905f81d"],["/2021/02/19/fiddler/index.html","622def0ebda165d1bbc180fbf1adf66b"],["/2021/02/22/potplayerset/index.html","e25d587789e66269f2c734d6088e1f41"],["/2021/02/22/studyresource/index.html","33380f90a073ca7d70c8b6faf2b8aefb"],["/2021/02/22/telegram/index.html","4f21a45330d8af5f7495df04e71f2c0e"],["/2021/02/22/videos/index.html","cbac3cfb6cb98097082376ad4dcdd242"],["/2021/02/24/mtproxy/index.html","c17828cda02eb6f1629444a1cf1bac9f"],["/404.html","7cfcfbe3cc25950801baf554669bf3bb"],["/archives/2020/11/index.html","94f2aacb5586e55e5432bd782f9ddead"],["/archives/2020/12/index.html","444f824bada0eb7d7b15ecd2baca0927"],["/archives/2020/12/page/2/index.html","23fdea03e4db26e803bb97707efd8c10"],["/archives/2020/12/page/3/index.html","dd180407dcb67e2b7ed5708227cb2597"],["/archives/2020/index.html","e277790ae879578aa3c3c5d98927832e"],["/archives/2020/page/2/index.html","27421ba0d1a155680ad6fb1cee352443"],["/archives/2020/page/3/index.html","b68bfe0cd10cc6adc209e133ea3f9198"],["/archives/2021/01/index.html","208d28c796d1c352aaa991b22645e32a"],["/archives/2021/01/page/2/index.html","5dc1ebf54ccdb24c6219f152a9f8c92f"],["/archives/2021/01/page/3/index.html","55bda75a4bee0c5e71b53e1aae624654"],["/archives/2021/01/page/4/index.html","96b6c92c7e854d1eb215e02d31144d04"],["/archives/2021/02/index.html","3e9318a5c17fd553615087aa23bf4747"],["/archives/2021/02/page/2/index.html","b7f9d748217269f18aef46106ecc67e2"],["/archives/2021/02/page/3/index.html","a3db596ff85fd6c7818c147ce4dd1356"],["/archives/2021/index.html","b609f4d8f89274c4d7d7e2e4a7180b01"],["/archives/2021/page/2/index.html","0a7a0b2d98e48780c9bfd3abc347c0e7"],["/archives/2021/page/3/index.html","449e2096b356a285c6afea3ead650490"],["/archives/2021/page/4/index.html","95ca19eae19283837f223250e4388dfd"],["/archives/2021/page/5/index.html","a9142357f0506526bfde1f33b9076689"],["/archives/2021/page/6/index.html","8cb04f0e25a1795ee5b2c80b20144d50"],["/archives/2021/page/7/index.html","b7fd0d224d06af3e3705e82cfaf4d52a"],["/archives/index.html","82d91f9486fae87c6d8c8375dd154f86"],["/archives/page/10/index.html","43eaa11ea93fa3da2b800d83abc82d23"],["/archives/page/2/index.html","7d293ab438b39fffdac27e9a37317152"],["/archives/page/3/index.html","79e18acebf359a1b26468c1d0b0b8229"],["/archives/page/4/index.html","ab3a8f744124293829dd64842550a5f7"],["/archives/page/5/index.html","f91906138e8b01125e2c904f3ec66ab7"],["/archives/page/6/index.html","02caacbebf8d0acf53097db6c31e0807"],["/archives/page/7/index.html","87389386f5149b65aa59ce3e6eaf1609"],["/archives/page/8/index.html","def74861dd587936c8221c8bd954347b"],["/archives/page/9/index.html","f226306890a430a31fb880a1a1745bbb"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","66250260f14a0b8e685f4b2e806873ed"],["/categories/index.html","06ffea471b6fecc9fc9c72fa4d606b3e"],["/categories/下载/index.html","4d6602bbc96d0b82cede796f94d9eee0"],["/categories/安全/index.html","195af70875daf27faa3d81025914b35f"],["/categories/建站/index.html","27563c107f5d8fbdf8462de2477fa8f8"],["/categories/杂/index.html","720fa805bc8a391ce932ee1eebb7258e"],["/categories/杂/page/2/index.html","167e03a8f251d48796f69ceaee297426"],["/categories/测评/index.html","a5e57a7edd7c7bd4f5ad53c2141a335d"],["/categories/科学上网/index.html","e19465f70da28ed193eea55b1ba43024"],["/categories/科学上网/page/2/index.html","1cc6d214cfccca9b5bee7574df6650b6"],["/categories/编程/index.html","232dc804f3c09f0f704f5f255ac5e73a"],["/categories/网站/index.html","b63c310cacb8a2e0f8651530d5fa784e"],["/categories/网站/page/2/index.html","9a0966ab7a5911d5b1fd55b187543888"],["/categories/软件/index.html","6dfc2986deaa70b9a867701159170a2e"],["/categories/软件/page/2/index.html","660dd4aecd8383dee0e99d9a813638d7"],["/categories/软件/page/3/index.html","48903b71a9692ed990c5359854a1c96d"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","4be5309972099a99483a939d24ea7768"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","17c82bcbcb8810183451cac0686c8c55"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","5b45288a4b3f0c455e6aba5ff5c78a58"],["/ios/index.html","d7e069e32457059141054d956305a062"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","7b9556e592bccc41dc3615532eb1c9b5"],["/page/2/index.html","3a4f8eb355e289db36585def567b24d0"],["/page/3/index.html","424e313c83c60b6ffd188962ab206b48"],["/page/4/index.html","072f1914af29fd067810f29919125988"],["/page/5/index.html","ffead8d6a2799665774f0dd2864cf97a"],["/page/6/index.html","1f4580d717bde3ec9c55ad5e0e154767"],["/page/7/index.html","0185501fde9c3af5f1ff13f9865e8cf5"],["/page/8/index.html","8454c5af7c101d8ecc425db4beb229b4"],["/page/9/index.html","f9d2b70c7a8a2dbcd434f5b67a928109"],["/payment/index.html","816f6d0919df605bc775d40103930572"],["/privacy-policy/index.html","45dcf482e351877516e1d7ff06f0f0d0"],["/rss2.xml","095bcab457839222c631412482f082b9"],["/search.xml","3d4dea0c2d3d932893fc66f937ae7f6e"],["/sitemap.xml","dec537edad166721ece860b1f4361334"],["/sw-register.js","72597bba7b61f2e0ded6146fe845c2d2"],["/tags/5t/index.html","11fd1c958dd32efce69a49a81b259b57"],["/tags/Clash/index.html","3b590502356f050f26b3824153f93262"],["/tags/Clover/index.html","6472220b9cd03cb00fcc5db048d91a68"],["/tags/E5/index.html","2b424e246f0b64b2a796b62bd8bbfb21"],["/tags/FTP/index.html","2a329a17c6147ed2cc35349cc7e08ebc"],["/tags/GitHub/index.html","c972f2ff0db605f6de797b2e3636cd38"],["/tags/Heroku/index.html","e88fc9cdd448e3b5d43ecdc5c9b5d131"],["/tags/Hexo/index.html","cb4ea42a619252aa3660ac688e041626"],["/tags/Lenovo/index.html","c8005a0ca292a50f9780f742671b8594"],["/tags/Oneindex/index.html","d03223b88007f23e867ffe9598caa130"],["/tags/QQ/index.html","aaf0f30d37f6e6dee22e348200b1a764"],["/tags/QTTabbar/index.html","b6df9d48cfa1d435dc94c6e2b622da2f"],["/tags/RX文件管理器/index.html","5e7570ace4b0510f29f96dd9d9f9b471"],["/tags/Todesk/index.html","abade96a9d3467da81873ca29a9ab5e4"],["/tags/Vercel/index.html","7a4a5ffa52b98a721afd3648dd32a7fb"],["/tags/ads/index.html","c041b65384703f6a728a18d5ed9cc971"],["/tags/api/index.html","acf954ff5d1912b933423b86f471d638"],["/tags/app/index.html","6b0abdbc80960b364704210fee4a9489"],["/tags/blacklist/index.html","ddbf5bc39077eaf3a41f7254ae2544fd"],["/tags/butterfly/index.html","3f535f8b81699674b0b22b27d89d3d60"],["/tags/chrome/index.html","9592d62e7d40bf3614d999383b62b306"],["/tags/cloudflare/index.html","26cc900734ce98ef3a8baf4ec306d7a1"],["/tags/cmd/index.html","cb7a8bd82470114e7658b8d23f6ffa63"],["/tags/c盘/index.html","3f2eac460e884f9c286ee728ae4df1ce"],["/tags/email/index.html","91b88287fb12abe82a84a9a6dc742aeb"],["/tags/ewomail/index.html","2b7c633708220e90f4f81c10896f6b48"],["/tags/fiddler/index.html","b3006042815c018c77de26ced8c5c033"],["/tags/flags/index.html","a72be0a51c61ae88e51c6e3be88c3f52"],["/tags/footer，页脚/index.html","5637b47e70ce1599673d23da917965f6"],["/tags/galgame/index.html","adffd4fe740a1665e92a936266ca88fa"],["/tags/git/index.html","8e2ec2abad8aed965ccef520b43eb353"],["/tags/gitcalendar/index.html","3f6d5a69cd876275975d258974dd59fc"],["/tags/google-voice/index.html","726a2f00888241dc2d89f5500875e42e"],["/tags/gv/index.html","04e1b43cebbf266b0fc36b609c546007"],["/tags/index-1.html","b578c433ef1be4b51d0b739695e3036f"],["/tags/index.html","dad3a141fa507c0c2e9825f378f795c4"],["/tags/jsdelivr/index.html","a9c11f2a4e94f72b3d7f8e9995de4444"],["/tags/linux/index.html","1ab69a9beee616fe62e45c5ab1246f03"],["/tags/madVR/index.html","e9e188c567c419b7061b4442fa1dfaea"],["/tags/markdown/index.html","76365de081b422cc5b6867729f47a22a"],["/tags/maya/index.html","31001fb2c8f69506cf08d21cb628e115"],["/tags/mklink/index.html","3b331b7666728daeb87673417668626b"],["/tags/office-e5/index.html","a4a76af5affc1a8375585e372b8e7e43"],["/tags/onedrive/index.html","3d00ab08c622d6789d9880406299ceb8"],["/tags/picGO/index.html","4d93aa143500f138b44158687f4aa6eb"],["/tags/pixiv/index.html","dd67b666e382358c520eeeadad204540"],["/tags/potplayer/index.html","1ae07d63ef161bd64c9db090da63cc48"],["/tags/proxypool/index.html","f1b5831cb64ca6bf0477907fd86a477e"],["/tags/qbitorrent/index.html","0f5a7313b1328099d6348859706ae462"],["/tags/raidrive/index.html","0e696c220bdf9e4ccd27ec00727cbcf5"],["/tags/screen/index.html","2a4fd3df591853097e58b72b336a734e"],["/tags/speedtest/index.html","80318abf7d5a3143f788f4d52cf5f924"],["/tags/tap/index.html","0e8149204bb93f2670a8d0074b6d5bc7"],["/tags/telegram/index.html","0616a03ae56343a77909b02a86f0b4de"],["/tags/telegram代理/index.html","0b90aafd1c7b200076433e9869d09297"],["/tags/tg/index.html","1d7ea8662a8a900f469e578ae596d5ca"],["/tags/tg代理/index.html","3555ffd269e7b156dd4e01eedd1449d8"],["/tags/top50/index.html","45c83321d091a8731e8659bd7213f762"],["/tags/tracker/index.html","2fe91a866b755cc0242b27ad0cbb336c"],["/tags/translate/index.html","9a6505b2778fccf2fd250ae8da2e1721"],["/tags/translater/index.html","6fe3e489a67c6481e635662e25049f50"],["/tags/tun/index.html","e80cc1166244f3759b07ccb3789595d9"],["/tags/typecho/index.html","6b41a9c28ed7f469eb9e619de785d903"],["/tags/v2ray/index.html","8b6b9d4958655ba41a75c34db62493a9"],["/tags/vpn/index.html","57acc778263a0ae6cd289e9e335ba545"],["/tags/vps/index.html","e52d03e58001fd166673c8333a35bc4b"],["/tags/windows/index.html","3d2d01f64cc5f1fffe662939166c10de"],["/tags/windows端/index.html","ff73103417b2f29e474ecebed4dfb5a9"],["/tags/xray/index.html","1bb5e150ebd14e5c65b0beb47e4db66f"],["/tags/下载/index.html","22da6ce568d3c90916790a4aded1037c"],["/tags/不限速/index.html","0996b287f05bca27e4c88463db67817b"],["/tags/个人网盘/index.html","86075a3216596269439368713e78c870"],["/tags/主题/index.html","a9cb95e174b94daf06464ce807ec10f4"],["/tags/云便签/index.html","7f85a4ba1f09b18951b20e35f8c957f1"],["/tags/云盘/index.html","20cd9c7bbd85dfc9d90980329a4e36a1"],["/tags/人人/index.html","71ddc0ef346ed9d7ea1641abfe205087"],["/tags/代理/index.html","61e19c08c9a897e5f9e00c94c89936f0"],["/tags/代码/index.html","6aedb7018c8f46c6c346ba84c2a435f8"],["/tags/优选IP/index.html","92c9e28eb6614b25de0ebcb49ad909d9"],["/tags/便签/index.html","e85f74901dc058b3497940cadfd5ce95"],["/tags/保号/index.html","f4a2d999cc7f7d6b918aa65fc7e1ed99"],["/tags/免费/index.html","fdb5475db0ac9fb26f836bee581a55cd"],["/tags/免费节点/index.html","337ab32865943e1de7bf57744bbde2b7"],["/tags/加密/index.html","95e33344e80b51c17326bb61363b23e0"],["/tags/动画/index.html","e9d2b5fe4c7647d6bcbe038d5e13131f"],["/tags/博客/index.html","857e6723be273ba2f1a14f13881e679d"],["/tags/历史记录/index.html","b44e2b0f43c737d533831cf74bebefe0"],["/tags/压力/index.html","0e346696e33e36c7697ed0ee70cdbd2f"],["/tags/压缩包/index.html","9d27a11796c787bb852aa06ca1b173dc"],["/tags/反代/index.html","ed422d3796e7a8439b69bab6558110f5"],["/tags/可视化/index.html","ddcc493be18e5d3bd139c1c868d5757a"],["/tags/命令/index.html","c5816a7fd23f5f94eec88db5128b57b9"],["/tags/国家/index.html","0e3b47cbcecce69bbdc1065e627ecc6c"],["/tags/图床/index.html","37727972ee20110db66bfa71ea375255"],["/tags/图片/index.html","311793d5c37c26cceef9f86b52b7a8b2"],["/tags/域名/index.html","11a418123fb20470f596d808ef08a6e6"],["/tags/多标签/index.html","8f05c71566dfc639466535267405d5c8"],["/tags/存储/index.html","574e4a2f1c2f9de628107a2f87951199"],["/tags/学习/index.html","85c82d3c3607e8333c6fedc6477938c8"],["/tags/安全/index.html","efa4d73725a48b1ece3b160357fb4b5d"],["/tags/安卓/index.html","6970aebcccbdcd278256bd7a8778eefb"],["/tags/宝塔/index.html","ef38f00053cd2a8e50f910918f3df132"],["/tags/广告/index.html","a66ef124d6ae6a10e0dff32c3a3770da"],["/tags/建站/index.html","68eb017a8703b058912dec469ca273e5"],["/tags/影视/index.html","88bde680bf73c40553c00380c80c664d"],["/tags/快速启动/index.html","086fff78f5c7e6935a9339eb18794261"],["/tags/手机/index.html","0fe76cef08ff844dc5a25eafd64d5b56"],["/tags/托管/index.html","e300b075849e8b3989242f6ba83ffdd5"],["/tags/抓包/index.html","2976f1eb8ba7d4d0354930459107abd0"],["/tags/抓取/index.html","ae0f1efe496ec509cf82fc901d5514db"],["/tags/投屏/index.html","ec598903123e53dc96b2da41cf3935cd"],["/tags/拓展功能/index.html","76fab21c545592ec57374e5d3a27276c"],["/tags/挂载/index.html","b36650d7291427c63940c8b0aaa542c4"],["/tags/指纹/index.html","9a0cc7ebcf0f6a02381103cb1c139532"],["/tags/接口/index.html","496a25b3da1da8bcf34efca0d1b19f95"],["/tags/提取图片/index.html","a8e86187169f3ef196abf2428bd49956"],["/tags/插件/index.html","36c9b96385a5e531ab8274b95b4ef4a8"],["/tags/搜图/index.html","2c2d58c87c77305a2fe6a630193c305c"],["/tags/搭建/index.html","39a6a34e63f0b43424090f3afa9c814c"],["/tags/撤回/index.html","f6a0983427bc4514e8b8ef8053b96c42"],["/tags/播放器/index.html","707b6f3b2c6fe932e3a5fa2dc8d91d39"],["/tags/政府网站/index.html","01a50a0d270236b022908504268c4f1f"],["/tags/效率/index.html","f607f0990f84b162309935edb12aba28"],["/tags/日历/index.html","6fe08f7c959fd25b0d7738be5d67fbc2"],["/tags/服务器/index.html","f02815d17e0a6b2c83cf5e821f3c03e1"],["/tags/桌面/index.html","e7429d74f37fde7f875325f052f1cb1a"],["/tags/梯子/index.html","4f7b22513443f4037bdf92b8914ba02b"],["/tags/检测工具/index.html","ecde8c7df77267e5e94f3bf2b3350917"],["/tags/汉化/index.html","ed871a72f27570b9b1d3e69583d17793"],["/tags/测压/index.html","826c88a9f7a330a28579df59eab35dd1"],["/tags/测速/index.html","f61e375a72931fb2764e5d4b7b9ae878"],["/tags/浏览器/index.html","088fbcbb39f2c3eba9d3ef647964cb85"],["/tags/清理/index.html","555ad310812cc87db16e8cc60b5522e6"],["/tags/滚动条/index.html","971dce7f78345f69c2b9b5a47929e002"],["/tags/电影/index.html","2dac5d6c45615f0d7b89d64027d82a6b"],["/tags/电视剧/index.html","904572b3f1fb8efd1681ad82470757e9"],["/tags/白嫖/index.html","0e6ed8c4debd8ad811cbcfb73bedd570"],["/tags/百度/index.html","b93df767943afe042af1bfe64e171313"],["/tags/百度云盘/index.html","ef0aa19c7f417aaa56b77e276fae07ce"],["/tags/百科/index.html","b95a428114e602e0b0f6614bc116fd43"],["/tags/短信/index.html","756a9873cf0a6b17b6041612644e7235"],["/tags/硬件/index.html","cb8b96edcb3b3d10e97b94196ceb6596"],["/tags/科学上网/index.html","dc401e2c45a3be60eb561ed287157dfd"],["/tags/空间/index.html","ecf816e3473d2f1ee0b060baa40988ca"],["/tags/笔记/index.html","cb8e89c981fe67f1eb25a92152d3abab"],["/tags/简洁/index.html","26f38d43fe30e355977eed2026368a38"],["/tags/简约/index.html","aa33ae0b06ad5d0773784cf419836f66"],["/tags/维基/index.html","186d304fd1c5be2f9589723477deb80b"],["/tags/网易云/index.html","5782bee4b7d5d30e201b91c611a069a0"],["/tags/网盘/index.html","6c03aaed6f221708b5a2a7d2cf7dd27f"],["/tags/网站/index.html","6fdbb57145649989b8110f9af4684498"],["/tags/网络/index.html","3053945615c5a603dc7c39b9f0ad5a00"],["/tags/美化/index.html","d15e13bdc8a4f1a3a58ac2403e186216"],["/tags/翻墙/index.html","d32d2e3eac1119a2e5914e8f612d173e"],["/tags/翻译/index.html","eb7e8eb81588f186c6547a7357bd50d0"],["/tags/翻译器/index.html","e5d10c4ae3d4b3c01cef6b710fd73b4c"],["/tags/聊天/index.html","d32ccc35ae5dfac151992a7816628bd5"],["/tags/聊天室/index.html","a7baa05eae448fac27a31d8f8206728b"],["/tags/联想/index.html","2312b2e9a5a14014036cee9b7aac43dc"],["/tags/节点/index.html","f52a5e0a765c4a2fb839dab99ce4958e"],["/tags/虚拟手机号/index.html","91fcfe2ff2f3fecf842c1fd59cad061a"],["/tags/补丁/index.html","f932205aff8943cec2d90d447183e499"],["/tags/视频/index.html","483c68c835535f255f64fdbc164996b8"],["/tags/解析/index.html","6ffc902b791750d86ed7b3127201c8e0"],["/tags/订阅链接/index.html","8fa68d61edae320a949512dff8fe33c7"],["/tags/记录/index.html","4a5cd8f6517e9bdb273a3a29f18ac562"],["/tags/识图/index.html","4544c166f2a1659f14665593d1475748"],["/tags/语言/index.html","430a204c41805bfcbe1dfcaf9b1759a1"],["/tags/资源/index.html","6843854872022295fc5b1c8b9bcf7c6f"],["/tags/资源管理器/index.html","a339d63eda5de2d98e6e6f96283d9446"],["/tags/转移/index.html","546204a3b9112286a61aac307c991304"],["/tags/软件/index.html","a16eb7362600a86c476eda36cd655200"],["/tags/轰炸/index.html","b4d963d71bca4474985a60098c526eb3"],["/tags/迁移/index.html","dcca6aeb2bff831846d9de42acc5bb0b"],["/tags/远程控制/index.html","bb2fec084056786e2a5c34a400938434"],["/tags/连接/index.html","d08677f8935c29a4b65599bfbffb459c"],["/tags/追踪/index.html","c76158ff3b0b02aba42d70742b6203bf"],["/tags/速度/index.html","327ac419f0945223d9a11ce6639c2d31"],["/tags/邮箱/index.html","3fe0b15f25fa23cf5f33d61670485b28"],["/tags/酷炫/index.html","3cedb935aa9c0f8f33fc2e9e3e425979"],["/tags/钓鱼/index.html","c1ffa53782c8dbe9adef09db11fcb0c7"],["/tags/镜像/index.html","7e2aae57874126322911bd5360faab05"],["/tags/随机/index.html","fceba46ce6a49c6780a27a61cc8ccf5c"],["/tags/隐藏/index.html","e5718bc155311b82721f8ce31fdc1cfb"],["/tags/面板/index.html","c59aacb017b6d88bbd22222a42ebbc79"],["/tags/音乐/index.html","badd91fe0632edf55cfe60e27eaabdf4"],["/tags/高颜值/index.html","12aaab9bba601f8ab24a702b23cd149e"],["/tags/魔改/index.html","078af19fb86cba6b4c6510403e68b360"],["/tags/黑名单/index.html","45f9774d93a3b94545fc9452646b88a9"],["/urls/index.html","bdde436ff5ed4a49a2dafd886dd8902f"],["/vps/index.html","739ef9f4a01f02a77a87eb582cd9ddec"],["/支持/index.html","671844029bd3e7572393745dee2d0140"]];
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
