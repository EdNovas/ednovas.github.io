/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","77fca2fd666b7e5ea7ad1f1ca0344b6e"],["/2020/11/29/clash-windows/index.html","ebd2efe72cbfa360c12722e041917c28"],["/2020/11/30/websites2/index.html","079edeca52514682072b8759abb21ee2"],["/2020/12/04/iphone4s/index.html","115f9bcdb5b375c2cb2ef2df49191c6d"],["/2020/12/04/onenote/index.html","750970a15f237ff8ba8c3d0ddcd7bbaa"],["/2020/12/04/wesites1/index.html","90d877324ba583ca9001b0ec5aa2c62a"],["/2020/12/06/nokia808/index.html","b2bd2bfbd822410fe97bfaf34f17e0fd"],["/2020/12/07/ipad1/index.html","b91916a0126dafe1b202af9b1a629cb3"],["/2020/12/18/freesubscribes/index.html","9c7826620260092312dfe55e7a67476f"],["/2020/12/19/musics/index.html","a2fde0e422d258239c4fbeca26597aa3"],["/2020/12/19/shadowrocket/index.html","60b137b756a10a9f31cbec121c094fbb"],["/2020/12/19/v2ray-windows/index.html","db36e404cd90d48f4b682f3d937d31d4"],["/2020/12/19/v2rayng/index.html","1fed5d6915bbb621911197e6bb24f29c"],["/2020/12/20/beoplay/index.html","1a3d3f990d518836c6287d14464e818e"],["/2020/12/20/订阅链接转换/index.html","29f80d99c87487ab5f35f1bca8357ef0"],["/2020/12/21/chrome浏览器下载提速/index.html","ea81c323995de3a27a9c6a8e42f13a24"],["/2020/12/21/免费128线程并发下载xdown/index.html","788397ce466bd3992c760f8eafe68b98"],["/2020/12/21/免费32线程下载软件ndm/index.html","bece670e8a6ad4cec6fbba76476f5a98"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","0caabd5b4533c1e74b6a7904cff4f124"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","c53b3ec500b64dc47fafb29688bb2e66"],["/2020/12/21/广告怎么知道我在想什么/index.html","828bae7fa69fa181a5bed422cc4036e3"],["/2020/12/21/无名·引子（小说试写）/index.html","2df8f121e5688a651f4379d0469a6438"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","0b6f40f50c6ac2f9b3240123647cb986"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","cdd0a3264d067de843699a13d2640624"],["/2020/12/21/高速轻量下载器aria2/index.html","2649ff90d4734b24bf07048e3f709c66"],["/2020/12/22/2020-cee-roo/index.html","bafc8b287318a57780a406e343c63f10"],["/2020/12/22/firefox插件、github、steam富强/index.html","d043be8844019cfbee4ea090f83e164c"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","63131b9a89eab60807e513f232b93fab"],["/2020/12/26/python-day-1/index.html","113035434e7857a0c2722162242dc627"],["/2020/12/26/python-day-2/index.html","0e64dca2cb4890d86e74ed54a9697c05"],["/2020/12/26/度盘不限速下载方式一赏/index.html","d044b2e658d0f0d255c2f14b0137c81a"],["/2020/12/26/添加开机自启软件/index.html","b840c1f7763386b2787094b21001474f"],["/2020/12/26/电脑端截图方式一赏/index.html","f31127252b8fe4ab658ae9a07412220b"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","a6c03bb3b56efbc49e9a79bd734adbe7"],["/2020/12/27/最安全的浏览器tor/index.html","1d64b2933347159b44a52951ad021c1f"],["/2020/12/27/网易云刷等级和听歌数量/index.html","87db2660579477b9b85d620047cb2681"],["/2020/12/28/freenom申请免费域名/index.html","a95dac1420c5b3e118339a74df12770f"],["/2020/12/31/机场/index.html","83ac38b34345c249079fcfa31cc3ebac"],["/2021/01/01/M1/index.html","0077f778976ba0c9becaf403e56c2e30"],["/2021/01/01/compress/index.html","7a1a097f72b68b3a8e0ef70bd6c3103d"],["/2021/01/01/infinityfree/index.html","787b0049e1f1d23e75c497bc99e6f270"],["/2021/01/01/硬核翻墙/index.html","fe25906cf575934fb1fec0f44df706a7"],["/2021/01/02/qq/index.html","6f683577bd175815dbe6925d21e98674"],["/2021/01/03/netch/index.html","9d39b53d2079b4d4f3e5577e13062b52"],["/2021/01/03/waifu2x/index.html","4f1a4864cd7a18c05519f4adcdf45f66"],["/2021/01/04/ads/index.html","76883df6cd55e21b6f5c3ce021adb13f"],["/2021/01/04/games/index.html","d41c521549769a370532c4bf7eedeb00"],["/2021/01/04/heroku/index.html","cc483dba4b184925266211ee9cbc948b"],["/2021/01/06/movies/index.html","1398b0a85c50d2ccc2dfe4ab849edd28"],["/2021/01/07/google2020/index.html","5d7b737d3ca41746b52992c6adfc9b2d"],["/2021/01/07/lucky/index.html","62ded15563b437c12eef20d8cd06836a"],["/2021/01/07/spotify/index.html","1fe168012b493001e368e661326238c8"],["/2021/01/07/thunder/index.html","3ede3a3283221f46bfaea92d67609ed9"],["/2021/01/08/adguardhome/index.html","e76df78710be73600dd40d239042e69f"],["/2021/01/10/IBM/index.html","eb898dd1348da49f26e47972abf1fc55"],["/2021/01/10/potplayer/index.html","708bc4cab2f3b7aab19d6167682c05b2"],["/2021/01/10/sakuraanime/index.html","fa9740f3687bfd1d10737805d591ce57"],["/2021/01/10/美剧星球/index.html","e960909ca55c6ca9471626a351b0a928"],["/2021/01/12/telegraph/index.html","2db7fcdf5780e93ffa112f4ad5e7b84a"],["/2021/01/14/comics/index.html","e215724fece9c301d06c38e92737bf64"],["/2021/01/14/ftp/index.html","aaa33111440369e12b7af624415a716f"],["/2021/01/14/oraclecloud/index.html","d743545c56037687e148690b92efb672"],["/2021/01/14/porkbun/index.html","6ba873cc48182b24033df610bfd9a7b3"],["/2021/01/14/powertoys/index.html","0c5f630b31ad140ce6d9415756c99945"],["/2021/01/14/taptap/index.html","49e791582948fb5f253ae5da4e810688"],["/2021/01/14/ubuntuvsftp/index.html","05f97e5649b2aefdfe1bcf5f803a3ae2"],["/2021/01/14/小说/index.html","cf9e11e934a8e573f9da948b393b957b"],["/2021/01/15/freeproxies/index.html","44e8cbf11f3cd9e18e6d47e035b12797"],["/2021/01/15/incaseformat/index.html","6cf240356d86e8663acb31a1fab9ad40"],["/2021/01/16/euserv/index.html","752656e336dcc873950e3020d46080cb"],["/2021/01/16/winxray/index.html","ced841bb3e1c5d4da9ba23ae611c656a"],["/2021/01/18/qqreadhistory/index.html","85fab501ad69e5f67f78abf7e32e34ec"],["/2021/01/18/qqrevoke/index.html","d757ef23baab487484b1028f1dab397a"],["/2021/01/19/freevpn/index.html","00f70092d9a9e11ae430ffba5171283a"],["/2021/01/20/browsertrack/index.html","b6200e0ad63f791e989c541f6e811f62"],["/2021/01/20/v2ui/index.html","92ae565ba0fb868b4036f35cbebf704c"],["/2021/01/21/failedtoconnect/index.html","e62948ecdb4f8e7a17bfa5aa3f4e1b83"],["/2021/01/21/gitcalendar/index.html","3b3c3b573df8709b0e10d7f401004758"],["/2021/01/21/markdownformat/index.html","6b13b14f2c5e86a5a8bfca1c4b05888d"],["/2021/01/21/markdowntable/index.html","9cf809b6e3f05d9460b97cdaa72ee9f9"],["/2021/01/21/vercel/index.html","c7b063bd24d42a36bafe7ba7add85cce"],["/2021/01/22/hardware/index.html","6bad3350f034556b445af00fd08575f8"],["/2021/01/22/muviz/index.html","e02504b7d652319ccab017eb91f75011"],["/2021/01/22/randomapi/index.html","c2c4e24dc61d81c54ed39cc41baaeea6"],["/2021/01/22/searchimages/index.html","65dbf88aea192376c98b38151e32d2ff"],["/2021/01/23/RX文件管理器/index.html","6475d9b5707c44313faad4cec79f278e"],["/2021/01/23/chromeflag/index.html","5076cc7234c73b12ed1a53c2659c489d"],["/2021/01/23/qttabbar/index.html","de4f0e18610a4ac437eb0279c3949cc6"],["/2021/01/24/githubspeedup/index.html","2e7afedc043288bf508683af49046927"],["/2021/01/24/jsdelivr/index.html","fa7f9cde47587edea0e624d1eb963fdf"],["/2021/01/25/note/index.html","f4071b30c538d756183d002f1d38af22"],["/2021/01/25/soul/index.html","8876c9e632f196187d948e7d4403ac5e"],["/2021/01/26/herokuxray/index.html","6e4182700df51310645f9f95818e7c54"],["/2021/01/27/proxypool/index.html","62593cce5bc9f569405c9e29fe053a61"],["/2021/01/27/tracker/index.html","041dd7c3cd16b9ed3f7cee40c7ff1d8b"],["/2021/01/30/pandownphp/index.html","038e43d58ab35ef7c6ba5af3be26a3b2"],["/2021/01/31/newgroup/index.html","8da62438f3073a4a15fef875908a0c33"],["/2021/02/01/clashlanguage/index.html","2c47ac7067a6aec7f6f7005891552d93"],["/2021/02/01/encrypt/index.html","07cd94ef24438562d3e74cedbf07f072"],["/2021/02/01/footermotion/index.html","b0643a804ebb8d7c3dc73ac15be1f0ef"],["/2021/02/01/gitter/index.html","4fd738f206ba0a7fc6ce36a46ba9158c"],["/2021/02/01/pixivtop50/index.html","e573170512780aec12a9c39d91498ead"],["/2021/02/01/scrollbar/index.html","b98daf6c5d4a5becd9a7b5a173c5c62a"],["/2021/02/02/clover/index.html","0ea30d1cd7f438793fb23ce911f210ce"],["/2021/02/02/maya/index.html","f9f0ae1f4c07250ddd45ffdf1bcbd670"],["/2021/02/02/speedcontroller/index.html","7804b2a8879117ce985170fc53a20dc8"],["/2021/02/02/yesmusicplayer/index.html","fb7eb0b6a5ff7d65eda6c7fa610eb920"],["/2021/02/03/lenovoonelite/index.html","2c93215a94f84c38e53f1b3ee3deb67f"],["/2021/02/03/skipads/index.html","e43d8c32cfc76317ac487e400a62cbb8"],["/2021/02/04/picseed/index.html","f42f70e856d4f3c31f60b8b609a43291"],["/2021/02/04/renren/index.html","bdb6bea08b0d7c1da1823be1489e39a0"],["/2021/02/04/serverstress/index.html","ca2a10f3083de76f9e5abf0d0e4db2da"],["/2021/02/04/wikipediazh/index.html","03d81bf5ab58d281fdfc30a1d0b5c346"],["/2021/02/05/googlevoice/index.html","926b2c4ceae84e813dfef747abaa31c1"],["/2021/02/06/clashconnection/index.html","0b71e0e0fd3afa0fc5a29c2f976b6e48"],["/2021/02/06/gvtransfer/index.html","9d3e109c698f6a3aaeea67025ccd3586"],["/2021/02/06/todesk/index.html","824976f5db0704f86c033c95620cd392"],["/2021/02/06/vpnblacklist/index.html","80813c8ef8e6253dea967ace05645805"],["/2021/02/07/mklink/index.html","34e95d4cb561cb8009e7929ab4609a04"],["/2021/02/07/speedtest/index.html","4391fd905247e40a1f7d175c5e3b3e2f"],["/2021/02/07/translate/index.html","1fc3a56511d943542b83b4824b07f5a2"],["/2021/02/08/ewomail/index.html","f7b339d57e491d8c3f0e59932b40157f"],["/2021/02/10/officee5/index.html","c74bcd68241e715618209986eacc4c39"],["/2021/02/10/raidrive/index.html","05445f15dc5e781715222f60799c2f90"],["/2021/02/13/e5sub/index.html","e5391bc10343de3f3cd44c481254104a"],["/2021/02/14/screen/index.html","015a64f975323555cb908573e8b7308a"],["/2021/02/15/clashtun/index.html","6d1ba6cb8735d18d4c7c01750d249f82"],["/2021/02/15/messageboom/index.html","91eb24e4feb75b5e8d8547f674bb7004"],["/2021/02/15/oneindex/index.html","6b9cf7fb79e8884871d30b4bcc79a5e8"],["/2021/02/16/govsites/index.html","fc4cd1c5b471b662d19a0ce415ecff77"],["/2021/02/17/hexototypecho/index.html","16dd2e241775b952d2967b956905f81d"],["/2021/02/19/fiddler/index.html","622def0ebda165d1bbc180fbf1adf66b"],["/2021/02/22/potplayerset/index.html","e25d587789e66269f2c734d6088e1f41"],["/2021/02/22/studyresource/index.html","33380f90a073ca7d70c8b6faf2b8aefb"],["/2021/02/22/telegram/index.html","4f21a45330d8af5f7495df04e71f2c0e"],["/2021/02/22/videos/index.html","cbac3cfb6cb98097082376ad4dcdd242"],["/2021/02/24/mtproxy/index.html","c17828cda02eb6f1629444a1cf1bac9f"],["/404.html","d19b659f18c8909d723afb2470407b4b"],["/archives/2020/11/index.html","3e2dce2c8ad62fb8cfe6f4bb3e20be2d"],["/archives/2020/12/index.html","22761ce0dd290c0f2b014bc1591d0446"],["/archives/2020/12/page/2/index.html","4011a55ec0406c167f6b8b398b6fe668"],["/archives/2020/12/page/3/index.html","99a9ba7ef3141e77350feec1f5bfb21f"],["/archives/2020/index.html","006d321fda441eff41f4124bd85f563d"],["/archives/2020/page/2/index.html","bdf0f7844196ffc4dd0cf461a5768014"],["/archives/2020/page/3/index.html","1ca4a5c754975219a3cb0d2d7e0667ca"],["/archives/2021/01/index.html","d174528c65383762e9bb1c260f9fc985"],["/archives/2021/01/page/2/index.html","c58e704126f09706140ed55f87848f24"],["/archives/2021/01/page/3/index.html","f6fcd8fcf83054c4ff6740279f5d166b"],["/archives/2021/01/page/4/index.html","9bc24020dd51c7681f96d24a2777eca8"],["/archives/2021/02/index.html","bf97c281ef3ae1926703eeb322d10256"],["/archives/2021/02/page/2/index.html","c777b6c871a41a8a45b6f5ddaded3e61"],["/archives/2021/02/page/3/index.html","3256992afe5769727bc5e8c47868989a"],["/archives/2021/index.html","a3a6458cd04f843064b571bec5bae34f"],["/archives/2021/page/2/index.html","ab01f03837fb5000b33ef575e25090ae"],["/archives/2021/page/3/index.html","7dc3e791ef7bad7089c36ee0f53fc0c1"],["/archives/2021/page/4/index.html","74373e3995af899a2323ab525bcecdfa"],["/archives/2021/page/5/index.html","39c4b414b852a72e10f132f1818a99ca"],["/archives/2021/page/6/index.html","b44d96289bb148f295b1efa74620658a"],["/archives/2021/page/7/index.html","0a6043e6273ac3bfefbb4111a793823f"],["/archives/index.html","4a88475f645311e68c1f845664b188ba"],["/archives/page/10/index.html","0ed523b812e67e546fbe80745c32fbed"],["/archives/page/2/index.html","c734c73256f441eb3a87ea4771266e4b"],["/archives/page/3/index.html","7ad97601dd9c6a37679165804917bac3"],["/archives/page/4/index.html","82741d82da2d4ff0edf655d522c740e9"],["/archives/page/5/index.html","24339db49d4371c0ad81fb7baaa82013"],["/archives/page/6/index.html","a6dbfd6b02600507ee8874f9b059cae7"],["/archives/page/7/index.html","8deaad88c2a72b60582d6e087b8cea54"],["/archives/page/8/index.html","bc9f4868d0cf09a19b30e6d8a2dc0801"],["/archives/page/9/index.html","adc5a2d7319965dce9629d629eed7121"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","a1e97e02f6b3350cf30e7e8b0402fb17"],["/categories/index.html","24b592b93afe054874ec7da19c03f0fa"],["/categories/下载/index.html","4d43e830f4089b316c7daf0f6a647f41"],["/categories/安全/index.html","fb9a87dc39b5d63569728f659228adca"],["/categories/建站/index.html","9d243965fa5dd505d722f3232e16cadc"],["/categories/杂/index.html","5c4a71ed132bbe1e4dcf015108c47b59"],["/categories/杂/page/2/index.html","16b8c177ef20559bb3db10d30aa00dc4"],["/categories/测评/index.html","8aad490045ac06454faef4e114a2284f"],["/categories/科学上网/index.html","23033d930c6d7c44212447d4be65672b"],["/categories/科学上网/page/2/index.html","574d6d699f98f135d3edb86ae07bb265"],["/categories/编程/index.html","a837db93d3f6259b20ab4444cf41ed24"],["/categories/网站/index.html","fd62b73a71ad9e30cd3ad6212abe25d4"],["/categories/网站/page/2/index.html","134355c004007a91839cf867901a3333"],["/categories/软件/index.html","7b061b7958ce256247e9eb1ac7c66b64"],["/categories/软件/page/2/index.html","4a36d0eb1d42ebdb212822d463950b8e"],["/categories/软件/page/3/index.html","dcf70aabcdb9f792bed8620ff9aabf1b"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","9b45a9f0b80c4103449defae306e0d5c"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","8751e11a37d8cf96fbc9cc6b0125758c"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","57723c4dc267158f595a350e09c906f4"],["/ios/index.html","6e70a88aa8798c2e9f09cbb377071e1c"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","367008da37115dbbb486a0310a728720"],["/page/2/index.html","7140c6e99f121446b398dbf200eb7d6f"],["/page/3/index.html","99c26a10049bb84128397758cbedbcfe"],["/page/4/index.html","201c2a3dfeef8027380f361f84a2d1df"],["/page/5/index.html","f9841a63c8b14e045aa6c75be722c95c"],["/page/6/index.html","a886be035e20a0ceb6a84cd4b415a4a5"],["/page/7/index.html","66c7ea878c41c905c9881528edcaeb3c"],["/page/8/index.html","779c71a35cabeb432dfebf35eb73e066"],["/page/9/index.html","d928c93295225eaae4f1e1db5117b5a0"],["/payment/index.html","ad7fe2feacd1cd878c3facb5a56c3e74"],["/privacy-policy/index.html","c095bbc1b5eb6dbd58381dbb2a2c79bd"],["/rss2.xml","5f6ade4480b6dbbc951e4f6ab355d306"],["/search.xml","6dd54bde00cec478f719f628e1daf395"],["/sitemap.xml","76a294cb3cfa55ec84d16e94dba4c6fc"],["/sw-register.js","6e14efd29f9f4cf0c54d3d713b496179"],["/tags/5t/index.html","caa84830c9d4ea81a8bb743aeb3c14d7"],["/tags/Clash/index.html","ce8fc17d3b66e4ba94600f85d8ca4aaf"],["/tags/Clover/index.html","cb49df2b7f2daf591f0bed28b66594b3"],["/tags/E5/index.html","917daf93455421f383af5426209941c0"],["/tags/FTP/index.html","7f6e3724f8cd8e04f34dbd56139de219"],["/tags/GitHub/index.html","ce1a7b677dc366436fc93323b88f3ad2"],["/tags/Heroku/index.html","462eb6ec4d0dc7ada185cf7f35ecfa3f"],["/tags/Hexo/index.html","7ccd7bb022817fdff5fef3017980070f"],["/tags/Lenovo/index.html","94753f55ff1dc834bad381a0ac8d328b"],["/tags/Oneindex/index.html","026b0c33f68ddf1270ea3bf3701dca9e"],["/tags/QQ/index.html","65521cd5fdbd5400f0378d62694668a7"],["/tags/QTTabbar/index.html","bc0814f59aaccb2631464ac47b1923ab"],["/tags/RX文件管理器/index.html","aa68ceb29d87e60c2e81cf21f3a6d35c"],["/tags/Todesk/index.html","425c4be335129192ee232e6d8b299983"],["/tags/Vercel/index.html","00f355d599463e215867039d9e9cf010"],["/tags/ads/index.html","bc5fcae90dcaff7979358139996f7eaa"],["/tags/api/index.html","8615abbb98e32f5ed70ba11eb9e1a666"],["/tags/app/index.html","0a1c9764d833679165ca6cdd2219b500"],["/tags/blacklist/index.html","d8af2b8fed96511af24adf1207b5ced0"],["/tags/butterfly/index.html","36977f9ec02bc107220d22b91ee247ea"],["/tags/chrome/index.html","425aef91396305c318e00431f734cc4a"],["/tags/cloudflare/index.html","8a359602f6fb31f10e51237001dcf6a1"],["/tags/cmd/index.html","b087e3cbbcc1793e2d5b51ab667638a5"],["/tags/c盘/index.html","6f97f90327261470d3b0598c75d93877"],["/tags/email/index.html","e668ca0ab8493dc92cefdf23623dc389"],["/tags/ewomail/index.html","cfc8b05df958ad147b4c1daeadb2c098"],["/tags/fiddler/index.html","1cb65b86152920cb7bedb5596b956961"],["/tags/flags/index.html","4d5c16dedc6332cb9d6f0fc442ad8e90"],["/tags/footer，页脚/index.html","a95a3c4b2afff4a8142e65f3a09ae340"],["/tags/galgame/index.html","5dc341397645db7d12a65f8b66109f98"],["/tags/git/index.html","ae319420375a0c525c204d933efa040a"],["/tags/gitcalendar/index.html","a6b81b4b634b79c328a378d3acd4103a"],["/tags/google-voice/index.html","2995d8b558eada88152408b1e9d0e3ed"],["/tags/gv/index.html","7f13d81ca4e94e58235ce19ca9a4daf9"],["/tags/index-1.html","b4bc4db5077383a0be32efc47287b572"],["/tags/index.html","b7ea49d00146bd20adac213b716c06d7"],["/tags/jsdelivr/index.html","300e49a96b07fb5360dc80fe740095b0"],["/tags/linux/index.html","e3d17ee1615eda90b0a3a81cd263738b"],["/tags/madVR/index.html","cefc43b1b72e5f139cbcfe8e361fb730"],["/tags/markdown/index.html","46ddc7f4ecb5664f7ead1ccb1bebe9e3"],["/tags/maya/index.html","d7ea023caea5b7387597cdf522eaa132"],["/tags/mklink/index.html","65259dad16bf5ad8802a66e4f91cee56"],["/tags/office-e5/index.html","d5ddb316c2d94568dd1a79ecd7f10450"],["/tags/onedrive/index.html","8de42f89920e5e1e1eaa4f1826b602d3"],["/tags/picGO/index.html","4115e0ff86f5bd0076a16bf598700eca"],["/tags/pixiv/index.html","dc56f51b52d5357e03be231aa5e56c88"],["/tags/potplayer/index.html","882edaa8f1a0320c75ceff62c2977a13"],["/tags/proxypool/index.html","7c86ea9af6e0e6a370df8f37a934d8d2"],["/tags/qbitorrent/index.html","9f39d086a45c2322e68a0b9475d45599"],["/tags/raidrive/index.html","d46e5936c1a4ac7a574711a3e5cee3b3"],["/tags/screen/index.html","1c0ee768c507d5b5eff8a5475c6e9cae"],["/tags/speedtest/index.html","1fd5d3e49be6f140acd1d86daeaa52c9"],["/tags/tap/index.html","64f443eb05bc6e2e692ec5a7a881a0e2"],["/tags/telegram/index.html","bb4b01ba63483cad6e46381b0420e453"],["/tags/telegram代理/index.html","7ee0fff2620a2b3c4f8431a3bd18828b"],["/tags/tg/index.html","ff2d997fb3beaa524695858aa663e28c"],["/tags/tg代理/index.html","6e21bb1ae5e45e2d5fd7c85173f1b40d"],["/tags/top50/index.html","143e33098b1b8b1d9e05d7cdb1362ec2"],["/tags/tracker/index.html","3d46fd346c2a9e6d1f2952aa34a1dc74"],["/tags/translate/index.html","360de0bfd4781dd207d27ae62169e4bf"],["/tags/translater/index.html","4f06c37ed17f07a21e90f25be99a93a6"],["/tags/tun/index.html","86a133e23fad81531e9c7040a9a47241"],["/tags/typecho/index.html","d3b85b7d4f8210b70319f032e9c3f38d"],["/tags/v2ray/index.html","ed35c4cc7caaaa005e96efacd13151b5"],["/tags/vpn/index.html","d600685d79ab0426609aeca602f6e895"],["/tags/vps/index.html","1dc3617e169b8d68e3e7e885d3d53724"],["/tags/windows/index.html","50c73986997e4f1f8359dc99c6884f1b"],["/tags/windows端/index.html","94fb4d2d2f2833424f3d1c452fa01ca2"],["/tags/xray/index.html","723c7fefe9b290053454a67a2785fbfd"],["/tags/下载/index.html","19147400867bcbe3618d97560e87a67e"],["/tags/不限速/index.html","4408f386d29ab42af846643f9b7ecb24"],["/tags/个人网盘/index.html","2b3f1f767f2a209fd2815fe80131368e"],["/tags/主题/index.html","eef2c0b30a592142901cf39aa50b3924"],["/tags/云便签/index.html","601af897da5c5c7488fc52a9b6e29a7b"],["/tags/云盘/index.html","c0013e490f52b549d073621c4fdcfc95"],["/tags/人人/index.html","7ddea5b66f98625f0bbc45aa9d470d12"],["/tags/代理/index.html","031095568b6b9a5a407338d6d98798cd"],["/tags/代码/index.html","c9b287751e5b4c20ce467085966c8a43"],["/tags/优选IP/index.html","51deebf6aa6027e9cd47591c7ee18857"],["/tags/便签/index.html","c0fab6cf67abf3c968b2bf677cfe3f80"],["/tags/保号/index.html","ba95520a10a405bd9d374f8b33517346"],["/tags/免费/index.html","0bfa08182e2e255e9d19b7366fbef9be"],["/tags/免费节点/index.html","a29c7751d73a68620032337d145665fe"],["/tags/加密/index.html","bf2436a77e2bb20917e09794cba85c09"],["/tags/动画/index.html","c010f634d004b4779ccfa36549c9ff8b"],["/tags/博客/index.html","1357cbfe4c1a0eff46e29ad289e61f94"],["/tags/历史记录/index.html","71e8f014614af187ed2a497d1ad54509"],["/tags/压力/index.html","37a11f882408f10b7e93ca211056d418"],["/tags/压缩包/index.html","75b7aac47c91f5f040ed94b8e0f0bb52"],["/tags/反代/index.html","1aabdf1e75332d651ccf74f9fa11ca38"],["/tags/可视化/index.html","9fe2c822ae76c78483154d7af38f57af"],["/tags/命令/index.html","c559a776b343de2fced521cefeb15343"],["/tags/国家/index.html","d4cc2717faf0bbcc1756591bed535969"],["/tags/图床/index.html","f8ab528f2dcd5d3043fd446ce7447dda"],["/tags/图片/index.html","1259587451040f98c359fe7bdec9c6d8"],["/tags/域名/index.html","42cbab46e05edac26c9b3095a2ce7d98"],["/tags/多标签/index.html","947f8e7d579bd61b2fdd735ddaee2c0e"],["/tags/存储/index.html","f995994b435126f88a74dd5fc7e6cf79"],["/tags/学习/index.html","0922ab2e078d402eeef946bf5004fcd2"],["/tags/安全/index.html","c2a7398a99dc9480a48f8a0b7a35876e"],["/tags/安卓/index.html","a998dc6bd0f801babdcf4a10ca62cebf"],["/tags/宝塔/index.html","0bdb3bc7b771131d4192c9abba51d28d"],["/tags/广告/index.html","eb9280663d457a613a108331fef53f1b"],["/tags/建站/index.html","d6da60c375a81d61191e57c33f90e4c3"],["/tags/影视/index.html","126530451037e1d43501fc5665cae9c1"],["/tags/快速启动/index.html","e8a7ce473a9c36a976f9344753273546"],["/tags/手机/index.html","2e4e272343420d400b2d22daa14b7efd"],["/tags/托管/index.html","34f44fe33409de7122c20ad89c445371"],["/tags/抓包/index.html","a9d64fddb2b52f5eac5275b6d31de59e"],["/tags/抓取/index.html","a9b41e07c8c68354bfa33c09a60d17b1"],["/tags/投屏/index.html","57e3a328e3f63d4f89ab1df9e076c4f9"],["/tags/拓展功能/index.html","8089013033961d0ab7bde1e32e75f653"],["/tags/挂载/index.html","706cdc460f0c5bc74bf79b50c8468c32"],["/tags/指纹/index.html","9e296d8c90d1ae4bcaba8f5433231edc"],["/tags/接口/index.html","017a030114d826d82272570f93ed933c"],["/tags/提取图片/index.html","e0c6634aaf11a49abc4f321165aef1c2"],["/tags/插件/index.html","2c9d1a8fe604f4e4bb775cbe67aaeb82"],["/tags/搜图/index.html","4e2dd281162143676ecffe3c0afa5aa7"],["/tags/搭建/index.html","37d49ad1ddce9e29e2dfeea37dd49964"],["/tags/撤回/index.html","e5a7fe25155704877dd0e80d5e05d6b9"],["/tags/播放器/index.html","38459f02fbf8d2a74c6734d57ab17503"],["/tags/政府网站/index.html","f13ab3ba08c8fc1a2824864a6b434e55"],["/tags/效率/index.html","5e9a14f39953787180606dbc27008059"],["/tags/日历/index.html","6f7247b986fe2e353c6ae2567e451ce2"],["/tags/服务器/index.html","eb7857f3ca5088831c467e51ec756c8e"],["/tags/桌面/index.html","afe178b3289a248d513fa6d9d32ddb79"],["/tags/梯子/index.html","d1cd5ce82bf4ca3cb95815a9e21afbe5"],["/tags/检测工具/index.html","d2467b1c8ff5133dc80b2d8035bf4190"],["/tags/汉化/index.html","a8039465a7e83c6fd1de5ff88bc3fc60"],["/tags/测压/index.html","312affc40ceea1430b759060b9b53239"],["/tags/测速/index.html","84e3ee1e9c7222c5fadb648dc29f7ebb"],["/tags/浏览器/index.html","d56929e944feaab2c1958eaa09c6a4fb"],["/tags/清理/index.html","400f04c777f6caf43011f9f8f45a8656"],["/tags/滚动条/index.html","2369fe7401c2472012e9d41755689537"],["/tags/电影/index.html","0ea4363bb1db437cb27c149aab877d9e"],["/tags/电视剧/index.html","d64b3fb2ffb54dc7149b5d855b2a7f49"],["/tags/白嫖/index.html","740b64f63d46ffb091fb9e06af1864a8"],["/tags/百度/index.html","2d5644bfe2c3df02037db3256ba9899f"],["/tags/百度云盘/index.html","7371f42ad1edf2eae8b479bb51d6fbd0"],["/tags/百科/index.html","905d1d6e2e6a8b0b79ed19eec19975c0"],["/tags/短信/index.html","2817c46fb466525d56fce70e903e2e10"],["/tags/硬件/index.html","420926dad4d4091ecb4e9692961a0d14"],["/tags/科学上网/index.html","88f44390aa13f3485823946d82c48f03"],["/tags/空间/index.html","401acde0f02583bacc2655c4bb24d9e4"],["/tags/笔记/index.html","1fb43405cff3c83a1feea8f75021d67b"],["/tags/简洁/index.html","8c36996d265466b1742da4da35650051"],["/tags/简约/index.html","8c787fc1d13d4e4257fc2e147b313dca"],["/tags/维基/index.html","c10516389712251ab52faa3112984af6"],["/tags/网易云/index.html","9ead2b2f52b7e20418ddbb3f9f36b5c6"],["/tags/网盘/index.html","8068c1b9f2defb11ef1969221fcb472c"],["/tags/网站/index.html","7f9d141b9d201ef125c4b63212ade77a"],["/tags/网络/index.html","0cfe82be8956d2143c7cd83b3b164cd1"],["/tags/美化/index.html","dcbf737048b6590120cbeaa5bbc5dc42"],["/tags/翻墙/index.html","433f50edf2b3b5127c02de2a526b8574"],["/tags/翻译/index.html","6acb7dd0590caf86b125866f425b3572"],["/tags/翻译器/index.html","98f6dbda0887c8118b5480118f2ee37b"],["/tags/聊天/index.html","e5ecb8bc8e2190015734ca27d4fcc255"],["/tags/聊天室/index.html","8cad25a7b991e2d9ba0a6196c2e64b02"],["/tags/联想/index.html","c25f343428236662c2c0ea9e69f43896"],["/tags/节点/index.html","e3d4c66e082152302ec938029a9181ff"],["/tags/虚拟手机号/index.html","9d60f2aa570d6ba2ddb03cf5af400516"],["/tags/补丁/index.html","44ae87c5d010e0d64b706a2d4e263a34"],["/tags/视频/index.html","4e3f8066c825d0a4aa40c4e4cb0d657a"],["/tags/解析/index.html","4222da6604d7daef6671e70f1d270cf1"],["/tags/订阅链接/index.html","6a36e8f4bf7c1ddab0439cd5c697a3d6"],["/tags/记录/index.html","9be7c66db8c769dd616eda02dffc341d"],["/tags/识图/index.html","57488b0a8b63d2a1e4c1c8c00d289f5f"],["/tags/语言/index.html","95fc2944514bcafad17418c9ac47eff5"],["/tags/资源/index.html","7a3190940031269981fab10f93a037c0"],["/tags/资源管理器/index.html","86798ce7753bf4edad43fbed1301c61c"],["/tags/转移/index.html","364b650789fe116af5afa5e55cdfa354"],["/tags/软件/index.html","14043c6abbf3f4c492bcd2e4b069e232"],["/tags/轰炸/index.html","0e50fc8231f7f64c76ba7e0b35e2f4c5"],["/tags/迁移/index.html","d6d7a805bd43e53d6cb569dd4bd8af08"],["/tags/远程控制/index.html","c308f8c20ec9b0e83069e986f400dc4b"],["/tags/连接/index.html","0964ff42400fe8723e0254d7835e8caf"],["/tags/追踪/index.html","43fd44de75cd9f48d5ca9332e8ace1e0"],["/tags/速度/index.html","08a515546e3fa7f5ebac248ead80e3b5"],["/tags/邮箱/index.html","31c3b42a382bbf0601b3eb7632ce5dcc"],["/tags/酷炫/index.html","4545db2cf005fb815e47d63f3c7e0041"],["/tags/钓鱼/index.html","57cf794c795252230a764b2cc18e99b8"],["/tags/镜像/index.html","56ab3717036b21ec63e2973895471c3b"],["/tags/随机/index.html","5ca9d738bbea999c895f5c86be63a883"],["/tags/隐藏/index.html","82c146b8622185b30b5461d146494b57"],["/tags/面板/index.html","8e7ecf409072ccd4bcece38f03b22729"],["/tags/音乐/index.html","957211787eee397697d3ba70ed2c1d65"],["/tags/高颜值/index.html","e7a49f26de2fc7fe64a13da1b688b0f0"],["/tags/魔改/index.html","398d5040bbbb791de0762142b00e16fd"],["/tags/黑名单/index.html","a0c169b2256be2f9cb0cc8cfafa626e9"],["/urls/index.html","6cca928e32d79cfc516f20277673b18b"],["/vps/index.html","c7cd67e4a276b81854dab7b6bde68911"],["/支持/index.html","1a2c432c4a28ae1481584d001fa0474e"]];
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
