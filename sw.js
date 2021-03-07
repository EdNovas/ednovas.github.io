/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","77fca2fd666b7e5ea7ad1f1ca0344b6e"],["/2020/11/29/clash-windows/index.html","ebd2efe72cbfa360c12722e041917c28"],["/2020/11/30/websites2/index.html","079edeca52514682072b8759abb21ee2"],["/2020/12/04/iphone4s/index.html","115f9bcdb5b375c2cb2ef2df49191c6d"],["/2020/12/04/onenote/index.html","750970a15f237ff8ba8c3d0ddcd7bbaa"],["/2020/12/04/wesites1/index.html","90d877324ba583ca9001b0ec5aa2c62a"],["/2020/12/06/nokia808/index.html","b2bd2bfbd822410fe97bfaf34f17e0fd"],["/2020/12/07/ipad1/index.html","b91916a0126dafe1b202af9b1a629cb3"],["/2020/12/18/freesubscribes/index.html","61899a303598ccdd4f775272d085a821"],["/2020/12/19/musics/index.html","a2fde0e422d258239c4fbeca26597aa3"],["/2020/12/19/shadowrocket/index.html","60b137b756a10a9f31cbec121c094fbb"],["/2020/12/19/v2ray-windows/index.html","db36e404cd90d48f4b682f3d937d31d4"],["/2020/12/19/v2rayng/index.html","1fed5d6915bbb621911197e6bb24f29c"],["/2020/12/20/beoplay/index.html","1a3d3f990d518836c6287d14464e818e"],["/2020/12/20/订阅链接转换/index.html","29f80d99c87487ab5f35f1bca8357ef0"],["/2020/12/21/chrome浏览器下载提速/index.html","ea81c323995de3a27a9c6a8e42f13a24"],["/2020/12/21/免费128线程并发下载xdown/index.html","788397ce466bd3992c760f8eafe68b98"],["/2020/12/21/免费32线程下载软件ndm/index.html","bece670e8a6ad4cec6fbba76476f5a98"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","0caabd5b4533c1e74b6a7904cff4f124"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","c53b3ec500b64dc47fafb29688bb2e66"],["/2020/12/21/广告怎么知道我在想什么/index.html","828bae7fa69fa181a5bed422cc4036e3"],["/2020/12/21/无名·引子（小说试写）/index.html","2df8f121e5688a651f4379d0469a6438"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","0b6f40f50c6ac2f9b3240123647cb986"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","cdd0a3264d067de843699a13d2640624"],["/2020/12/21/高速轻量下载器aria2/index.html","2649ff90d4734b24bf07048e3f709c66"],["/2020/12/22/2020-cee-roo/index.html","bafc8b287318a57780a406e343c63f10"],["/2020/12/22/firefox插件、github、steam富强/index.html","d043be8844019cfbee4ea090f83e164c"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","63131b9a89eab60807e513f232b93fab"],["/2020/12/26/python-day-1/index.html","113035434e7857a0c2722162242dc627"],["/2020/12/26/python-day-2/index.html","0e64dca2cb4890d86e74ed54a9697c05"],["/2020/12/26/度盘不限速下载方式一赏/index.html","d044b2e658d0f0d255c2f14b0137c81a"],["/2020/12/26/添加开机自启软件/index.html","b840c1f7763386b2787094b21001474f"],["/2020/12/26/电脑端截图方式一赏/index.html","f31127252b8fe4ab658ae9a07412220b"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","a6c03bb3b56efbc49e9a79bd734adbe7"],["/2020/12/27/最安全的浏览器tor/index.html","1d64b2933347159b44a52951ad021c1f"],["/2020/12/27/网易云刷等级和听歌数量/index.html","87db2660579477b9b85d620047cb2681"],["/2020/12/28/freenom申请免费域名/index.html","a95dac1420c5b3e118339a74df12770f"],["/2020/12/31/机场/index.html","83ac38b34345c249079fcfa31cc3ebac"],["/2021/01/01/M1/index.html","0077f778976ba0c9becaf403e56c2e30"],["/2021/01/01/compress/index.html","7a1a097f72b68b3a8e0ef70bd6c3103d"],["/2021/01/01/infinityfree/index.html","787b0049e1f1d23e75c497bc99e6f270"],["/2021/01/01/硬核翻墙/index.html","fe25906cf575934fb1fec0f44df706a7"],["/2021/01/02/qq/index.html","6f683577bd175815dbe6925d21e98674"],["/2021/01/03/netch/index.html","9d39b53d2079b4d4f3e5577e13062b52"],["/2021/01/03/waifu2x/index.html","4f1a4864cd7a18c05519f4adcdf45f66"],["/2021/01/04/ads/index.html","76883df6cd55e21b6f5c3ce021adb13f"],["/2021/01/04/games/index.html","d41c521549769a370532c4bf7eedeb00"],["/2021/01/04/heroku/index.html","cc483dba4b184925266211ee9cbc948b"],["/2021/01/06/movies/index.html","1398b0a85c50d2ccc2dfe4ab849edd28"],["/2021/01/07/google2020/index.html","5d7b737d3ca41746b52992c6adfc9b2d"],["/2021/01/07/lucky/index.html","62ded15563b437c12eef20d8cd06836a"],["/2021/01/07/spotify/index.html","1fe168012b493001e368e661326238c8"],["/2021/01/07/thunder/index.html","3ede3a3283221f46bfaea92d67609ed9"],["/2021/01/08/adguardhome/index.html","e76df78710be73600dd40d239042e69f"],["/2021/01/10/IBM/index.html","eb898dd1348da49f26e47972abf1fc55"],["/2021/01/10/potplayer/index.html","708bc4cab2f3b7aab19d6167682c05b2"],["/2021/01/10/sakuraanime/index.html","fa9740f3687bfd1d10737805d591ce57"],["/2021/01/10/美剧星球/index.html","e960909ca55c6ca9471626a351b0a928"],["/2021/01/12/telegraph/index.html","2db7fcdf5780e93ffa112f4ad5e7b84a"],["/2021/01/14/comics/index.html","e215724fece9c301d06c38e92737bf64"],["/2021/01/14/ftp/index.html","aaa33111440369e12b7af624415a716f"],["/2021/01/14/oraclecloud/index.html","d743545c56037687e148690b92efb672"],["/2021/01/14/porkbun/index.html","6ba873cc48182b24033df610bfd9a7b3"],["/2021/01/14/powertoys/index.html","0c5f630b31ad140ce6d9415756c99945"],["/2021/01/14/taptap/index.html","49e791582948fb5f253ae5da4e810688"],["/2021/01/14/ubuntuvsftp/index.html","05f97e5649b2aefdfe1bcf5f803a3ae2"],["/2021/01/14/小说/index.html","cf9e11e934a8e573f9da948b393b957b"],["/2021/01/15/freeproxies/index.html","44e8cbf11f3cd9e18e6d47e035b12797"],["/2021/01/15/incaseformat/index.html","6cf240356d86e8663acb31a1fab9ad40"],["/2021/01/16/euserv/index.html","752656e336dcc873950e3020d46080cb"],["/2021/01/16/winxray/index.html","ced841bb3e1c5d4da9ba23ae611c656a"],["/2021/01/18/qqreadhistory/index.html","85fab501ad69e5f67f78abf7e32e34ec"],["/2021/01/18/qqrevoke/index.html","d757ef23baab487484b1028f1dab397a"],["/2021/01/19/freevpn/index.html","40c13f78c645c47fefbf44d3eb86d2a0"],["/2021/01/20/browsertrack/index.html","b6200e0ad63f791e989c541f6e811f62"],["/2021/01/20/v2ui/index.html","92ae565ba0fb868b4036f35cbebf704c"],["/2021/01/21/failedtoconnect/index.html","e62948ecdb4f8e7a17bfa5aa3f4e1b83"],["/2021/01/21/gitcalendar/index.html","3b3c3b573df8709b0e10d7f401004758"],["/2021/01/21/markdownformat/index.html","6b13b14f2c5e86a5a8bfca1c4b05888d"],["/2021/01/21/markdowntable/index.html","9cf809b6e3f05d9460b97cdaa72ee9f9"],["/2021/01/21/vercel/index.html","c7b063bd24d42a36bafe7ba7add85cce"],["/2021/01/22/hardware/index.html","6bad3350f034556b445af00fd08575f8"],["/2021/01/22/muviz/index.html","e02504b7d652319ccab017eb91f75011"],["/2021/01/22/randomapi/index.html","c2c4e24dc61d81c54ed39cc41baaeea6"],["/2021/01/22/searchimages/index.html","65dbf88aea192376c98b38151e32d2ff"],["/2021/01/23/RX文件管理器/index.html","6475d9b5707c44313faad4cec79f278e"],["/2021/01/23/chromeflag/index.html","5076cc7234c73b12ed1a53c2659c489d"],["/2021/01/23/qttabbar/index.html","de4f0e18610a4ac437eb0279c3949cc6"],["/2021/01/24/githubspeedup/index.html","2e7afedc043288bf508683af49046927"],["/2021/01/24/jsdelivr/index.html","fa7f9cde47587edea0e624d1eb963fdf"],["/2021/01/25/note/index.html","f4071b30c538d756183d002f1d38af22"],["/2021/01/25/soul/index.html","8876c9e632f196187d948e7d4403ac5e"],["/2021/01/26/herokuxray/index.html","6e4182700df51310645f9f95818e7c54"],["/2021/01/27/proxypool/index.html","62593cce5bc9f569405c9e29fe053a61"],["/2021/01/27/tracker/index.html","041dd7c3cd16b9ed3f7cee40c7ff1d8b"],["/2021/01/30/pandownphp/index.html","038e43d58ab35ef7c6ba5af3be26a3b2"],["/2021/01/31/newgroup/index.html","8da62438f3073a4a15fef875908a0c33"],["/2021/02/01/clashlanguage/index.html","2c47ac7067a6aec7f6f7005891552d93"],["/2021/02/01/encrypt/index.html","07cd94ef24438562d3e74cedbf07f072"],["/2021/02/01/footermotion/index.html","b0643a804ebb8d7c3dc73ac15be1f0ef"],["/2021/02/01/gitter/index.html","4fd738f206ba0a7fc6ce36a46ba9158c"],["/2021/02/01/pixivtop50/index.html","e573170512780aec12a9c39d91498ead"],["/2021/02/01/scrollbar/index.html","b98daf6c5d4a5becd9a7b5a173c5c62a"],["/2021/02/02/clover/index.html","0ea30d1cd7f438793fb23ce911f210ce"],["/2021/02/02/maya/index.html","f9f0ae1f4c07250ddd45ffdf1bcbd670"],["/2021/02/02/speedcontroller/index.html","7804b2a8879117ce985170fc53a20dc8"],["/2021/02/02/yesmusicplayer/index.html","fb7eb0b6a5ff7d65eda6c7fa610eb920"],["/2021/02/03/lenovoonelite/index.html","2c93215a94f84c38e53f1b3ee3deb67f"],["/2021/02/03/skipads/index.html","e43d8c32cfc76317ac487e400a62cbb8"],["/2021/02/04/picseed/index.html","f42f70e856d4f3c31f60b8b609a43291"],["/2021/02/04/renren/index.html","bdb6bea08b0d7c1da1823be1489e39a0"],["/2021/02/04/serverstress/index.html","ca2a10f3083de76f9e5abf0d0e4db2da"],["/2021/02/04/wikipediazh/index.html","03d81bf5ab58d281fdfc30a1d0b5c346"],["/2021/02/05/googlevoice/index.html","926b2c4ceae84e813dfef747abaa31c1"],["/2021/02/06/clashconnection/index.html","0b71e0e0fd3afa0fc5a29c2f976b6e48"],["/2021/02/06/gvtransfer/index.html","9d3e109c698f6a3aaeea67025ccd3586"],["/2021/02/06/todesk/index.html","824976f5db0704f86c033c95620cd392"],["/2021/02/06/vpnblacklist/index.html","80813c8ef8e6253dea967ace05645805"],["/2021/02/07/mklink/index.html","34e95d4cb561cb8009e7929ab4609a04"],["/2021/02/07/speedtest/index.html","4391fd905247e40a1f7d175c5e3b3e2f"],["/2021/02/07/translate/index.html","1fc3a56511d943542b83b4824b07f5a2"],["/2021/02/08/ewomail/index.html","f7b339d57e491d8c3f0e59932b40157f"],["/2021/02/10/officee5/index.html","c74bcd68241e715618209986eacc4c39"],["/2021/02/10/raidrive/index.html","05445f15dc5e781715222f60799c2f90"],["/2021/02/13/e5sub/index.html","e5391bc10343de3f3cd44c481254104a"],["/2021/02/14/screen/index.html","015a64f975323555cb908573e8b7308a"],["/2021/02/15/clashtun/index.html","6d1ba6cb8735d18d4c7c01750d249f82"],["/2021/02/15/messageboom/index.html","91eb24e4feb75b5e8d8547f674bb7004"],["/2021/02/15/oneindex/index.html","6b9cf7fb79e8884871d30b4bcc79a5e8"],["/2021/02/16/govsites/index.html","fc4cd1c5b471b662d19a0ce415ecff77"],["/2021/02/17/hexototypecho/index.html","16dd2e241775b952d2967b956905f81d"],["/2021/02/19/fiddler/index.html","622def0ebda165d1bbc180fbf1adf66b"],["/2021/02/22/potplayerset/index.html","e25d587789e66269f2c734d6088e1f41"],["/2021/02/22/studyresource/index.html","33380f90a073ca7d70c8b6faf2b8aefb"],["/2021/02/22/telegram/index.html","4f21a45330d8af5f7495df04e71f2c0e"],["/2021/02/22/videos/index.html","cbac3cfb6cb98097082376ad4dcdd242"],["/2021/02/24/mtproxy/index.html","c17828cda02eb6f1629444a1cf1bac9f"],["/404.html","2a84f71262eea5bc70eaf89126af3ec4"],["/archives/2020/11/index.html","91d3d271891eb0c0a04f10e0625f7357"],["/archives/2020/12/index.html","2e60933544d7233c8f6602fe9e093cde"],["/archives/2020/12/page/2/index.html","6b3167b6073676c8f5bb63e669e788db"],["/archives/2020/12/page/3/index.html","bf56df88a6c97dd4f9b673e9f5f1757f"],["/archives/2020/index.html","9ccccc7772e5fb8cd10ea6c1018368d5"],["/archives/2020/page/2/index.html","ff285cafe8fd1c207227fc5ecc878f2e"],["/archives/2020/page/3/index.html","e8d0f394dc19b5cacba972c035c0cbdb"],["/archives/2021/01/index.html","d02f4c8c3be4615c84cfeb76a45ac330"],["/archives/2021/01/page/2/index.html","c13143120d1a1e5694024decaea1cb30"],["/archives/2021/01/page/3/index.html","48cfdcb7163f1dbb3a9709e5ea80c1d3"],["/archives/2021/01/page/4/index.html","b1047b792c930248d79f20952ce68a18"],["/archives/2021/02/index.html","4898573be12f0ce8839a0e45c32e0b85"],["/archives/2021/02/page/2/index.html","338f1d5d9ed9d0e530a0b1d7022cb818"],["/archives/2021/02/page/3/index.html","addbe67329ac2960fefcf715e854ff4f"],["/archives/2021/index.html","7962442617fff49ad0fb310c544d9c5d"],["/archives/2021/page/2/index.html","ef866b9c01c974c4124e1398ece9f343"],["/archives/2021/page/3/index.html","ecb0b569124cb605d8aa762c4fb600f9"],["/archives/2021/page/4/index.html","17389563800b8aede0b44d908acad202"],["/archives/2021/page/5/index.html","7b6a27f69e42ba10cd7bd3cbce5098cf"],["/archives/2021/page/6/index.html","5b6a19fbd9ea930105bcfbbf7d3e87f6"],["/archives/2021/page/7/index.html","20c5ce460e9fe3d67015f8a2badcd7c1"],["/archives/index.html","57c35c1052f86145d6d2d7cbfd908f20"],["/archives/page/10/index.html","dbac496cee4a8c3e8df8403851fabe99"],["/archives/page/2/index.html","cc632b27a1d5b9cea99cac99f388123e"],["/archives/page/3/index.html","641cf12a2c6d72e7f192af01d1e8c3a1"],["/archives/page/4/index.html","4054c188c1f1c4dffb8ed1c72c58807d"],["/archives/page/5/index.html","3e36d999c0d357462cda5ca665c6b2f5"],["/archives/page/6/index.html","2f3afcb7df731a816023539f36c1a32e"],["/archives/page/7/index.html","45d76ea42b2781997e63fe53d07077fd"],["/archives/page/8/index.html","b0999a19377244b5e6d9cb318feabf7a"],["/archives/page/9/index.html","bf99dbdc0812f71f1519a12b8bf3d14c"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","4559872e4852c810ca9e701b02548520"],["/categories/index.html","2b7ac0865bb52bb688e412e56330829a"],["/categories/下载/index.html","c793e9742245887b48104d86a44fbe0d"],["/categories/安全/index.html","18e9d0b0817231bf38cb0779f85c7a50"],["/categories/建站/index.html","f505c17f387b294aaeb9f943136c5ca4"],["/categories/杂/index.html","def50513c6b0f8b510c3d2319aa80c83"],["/categories/杂/page/2/index.html","13a0f31fbaf2d9e94fee6fca9a15713b"],["/categories/测评/index.html","35e076690e839a9037c356e12e1e5015"],["/categories/科学上网/index.html","608e854a9dcdd62267eb3cba346ee694"],["/categories/科学上网/page/2/index.html","beb8cdfb283acaf62179832ec802b698"],["/categories/编程/index.html","ba38885489997d12860548aabdb71f4e"],["/categories/网站/index.html","235980c4ebc1d752319ae9f21738394a"],["/categories/网站/page/2/index.html","5817b83f0f5db63585b160f6c6ddf515"],["/categories/软件/index.html","51d64a25d7070433e7bf674919840816"],["/categories/软件/page/2/index.html","575352fcf463fcd02d353866f02080e6"],["/categories/软件/page/3/index.html","f852382d550d9ece7313a87a3c2866d6"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","f7c4be4dfc0c43e172500670ce1845c6"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","a9dd6d50e42c49e063447b91bbc368f9"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","27ac759a205f8c001dca49a262edfd55"],["/ios/index.html","ee288b4e5b52ddb1f81ae0e3e7e4267b"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","2514def09a7aeffaba273953512c0e48"],["/page/2/index.html","7ec0ed6baa8aaeb793f76f6600431d11"],["/page/3/index.html","60f547c2c321493c7bcd110b951d421f"],["/page/4/index.html","3884e321fd466eebb79a69f43c53721c"],["/page/5/index.html","089b538c7b9dae51541c0d9ed65d8b85"],["/page/6/index.html","37a51c87f9755ee7a97bb6b6ae3f1fe1"],["/page/7/index.html","466a409c39a2f339ead56dc7091cb5db"],["/page/8/index.html","4f20f73a3c6f9119bd4c9624dbb2dbc7"],["/page/9/index.html","b4e13137fb04e26fbe4ceb81e92e6da0"],["/payment/index.html","0d29b516d4767b48d11aa15354e9b070"],["/privacy-policy/index.html","bb77d2bd467a82bb332b0c3326a19f99"],["/rss2.xml","976cceb3025860f1f0ffe83353c0d674"],["/search.xml","abd1b2dba159a43e916ca571ccd0b741"],["/sitemap.xml","2e55471cf0a809273d161d819a78fc33"],["/sw-register.js","07db3cf4309c3e1ddf34af554ec76d12"],["/tags/5t/index.html","c7bd24f93440c605994cc0eeca670ca3"],["/tags/Clash/index.html","d0b10f8e4e94b9218871d01d48f18746"],["/tags/Clover/index.html","f64f49aef20435166eef62a1ab7c42f0"],["/tags/E5/index.html","654a48f5a24dd3401512c02ebbefe6cc"],["/tags/FTP/index.html","63598a1dd3c200b6dfc70d559c9593bf"],["/tags/GitHub/index.html","cb274331684754aedd7998cc83376745"],["/tags/Heroku/index.html","284595ed71e9f7211155a85ae17c3a34"],["/tags/Hexo/index.html","3125355691fb0d186463c81bb0a39d7b"],["/tags/Lenovo/index.html","bd30fdd7aa50243b1eccd2fdc06d3413"],["/tags/Oneindex/index.html","c999b20b6bef038b59d5a793f92a57d2"],["/tags/QQ/index.html","ee503d6d09ec26e3793998ca0d24fee5"],["/tags/QTTabbar/index.html","f0077085ec6c79a21915cdae976a9fe5"],["/tags/RX文件管理器/index.html","c5ebccb3207b987b75c99fd6bc41a877"],["/tags/Todesk/index.html","1fc2d2afc13ddf84cc8a2f83656d98aa"],["/tags/Vercel/index.html","262b97569598e5b5b379df891d8fbe8e"],["/tags/ads/index.html","95bd8c358ce8c8584d4fa5622fb3c194"],["/tags/api/index.html","a20d11b1888dc9dc861f858ac4aabcc5"],["/tags/app/index.html","21e21f187d00f32381ea5dc336d5c7a1"],["/tags/blacklist/index.html","97f930879bdae2432bb43b7918d33305"],["/tags/butterfly/index.html","2bc26edad06702b8ffcea9b200fa42f7"],["/tags/chrome/index.html","331e6b38c20072e99a42adaf12b50405"],["/tags/cloudflare/index.html","e638ee167a6d659acc75c9d398a71d39"],["/tags/cmd/index.html","0cf94e083392a0af3f9c021d6827270d"],["/tags/c盘/index.html","9ca25020bd9e843602d04be8cffaf04e"],["/tags/email/index.html","9c2e2b48d19d5d936ce5b47d8d9eedac"],["/tags/ewomail/index.html","85bcd1eff8110033698dfd575b2cd522"],["/tags/fiddler/index.html","e293bd3004406008794326f51cad5279"],["/tags/flags/index.html","512e5a5706285f615679811e7914df75"],["/tags/footer，页脚/index.html","c1d8810fa78917dd4074b17cb2f91977"],["/tags/galgame/index.html","8f2e1e5c260ec634bfd902c3dbabe0ae"],["/tags/git/index.html","f26afb63840e815225de734c1ea420b5"],["/tags/gitcalendar/index.html","199d2842889eaca8f1c7e58c0258a9fb"],["/tags/google-voice/index.html","efcea7c37b9ea99d6739ff77da8400a6"],["/tags/gv/index.html","b2e6c281df581c1a5d06a81d30904e19"],["/tags/index-1.html","74a8f5044e1a1a1474c1aeb192bbdf55"],["/tags/index.html","e21972892c48f0fa4b74a3c14b7a5018"],["/tags/jsdelivr/index.html","849f1bbb47bc74aae3fbf96162c5c88f"],["/tags/linux/index.html","1f8df4297150d96d145a7610f1ff5caa"],["/tags/madVR/index.html","29de8cc21547aad30e802791052528ed"],["/tags/markdown/index.html","9f8fcf5bacfd0be5a193457742144dd8"],["/tags/maya/index.html","747f3c2cb028a7f291a756f7e93d6381"],["/tags/mklink/index.html","5c54bb19372a00a1ec9d0458b58e7524"],["/tags/office-e5/index.html","803f38154a1cc1a7569092f3861e5430"],["/tags/onedrive/index.html","83af386ae8c45fb03926dcc84b9b6098"],["/tags/picGO/index.html","76db01cadf54be26dce27e4ed307b0a7"],["/tags/pixiv/index.html","da4825996d4748d2d73229dc30214fa4"],["/tags/potplayer/index.html","9433547dd4690b56c0f87499e8b8a407"],["/tags/proxypool/index.html","0afa5fac4bd22fae42108126284a3c2f"],["/tags/qbitorrent/index.html","9efec0547c97c1851ac10baf2a7e5abc"],["/tags/raidrive/index.html","eb9d98e341f07fecd6fb6d9173e79462"],["/tags/screen/index.html","eb788804fc6c15a5e04e9000b909eb5d"],["/tags/speedtest/index.html","16654b4c3c71006c0e89439d9150af87"],["/tags/tap/index.html","861b54449361fe0c1469b6badacc265c"],["/tags/telegram/index.html","894b7f5b8be589a9e118c23393ca543a"],["/tags/telegram代理/index.html","0fca7fbf88a346243ed78196e9b0f14f"],["/tags/tg/index.html","4afc44e7c834e3fe00bbbb4666c9283a"],["/tags/tg代理/index.html","7b67c60f24f3230342e25d4c0bcc0766"],["/tags/top50/index.html","2fd0eeaefe8bc05e774fa6382cfffbbb"],["/tags/tracker/index.html","feceff62a797255f9c6181b3a7fb52fe"],["/tags/translate/index.html","dffd6c98873cbffd67db9a4e08c9a993"],["/tags/translater/index.html","2173fefe4fea28efc6c15760215b1d38"],["/tags/tun/index.html","9b86875927f33b2df18707a9e0b145b6"],["/tags/typecho/index.html","a973aa9311f862e39c6d5151e4986a73"],["/tags/v2ray/index.html","54e321b710dc5caa9392e7e5d4c8bae2"],["/tags/vpn/index.html","c020eea727d7e713ffb676aa7b2bbd65"],["/tags/vps/index.html","ae9c95bd4e974fa4e009ffdf1ba00129"],["/tags/windows/index.html","80fa028a19fc6eea74ea6f8f7d3ddba8"],["/tags/windows端/index.html","4e9b51a3180cef639c3bcab847ae48c3"],["/tags/xray/index.html","224c2d0d9c12740708645fcd8ccc9078"],["/tags/下载/index.html","d2ff2e5453dedaf29659900ae11408ca"],["/tags/不限速/index.html","1654d559eaae6c64a0c348dfba7930ad"],["/tags/个人网盘/index.html","f31e73b175402f86899269938f7949c4"],["/tags/主题/index.html","abaab4f9a8322e6bd8115ffad42f8be2"],["/tags/云便签/index.html","6f4c1a2b6e9714d34a36cc09ffdce629"],["/tags/云盘/index.html","103702d716c4d24b6b83f38fa525e8f7"],["/tags/人人/index.html","5c0c2016a31d75eb78c56dfe6bd10402"],["/tags/代理/index.html","9bd91c9dc0adbdd027fae7f1f4cfa796"],["/tags/代码/index.html","0a1bed6bc8f4f66b6b896f900d93e936"],["/tags/优选IP/index.html","5303b6cf9086955913360854d0a2894c"],["/tags/便签/index.html","2e912a8e786eb840afd9c23eddc3a6bf"],["/tags/保号/index.html","0c417a400e6568153f521f15833026db"],["/tags/免费/index.html","f534dc45738886fb932ed219e2450631"],["/tags/免费节点/index.html","d60d9c0a0e37b96865f57b48d2b58116"],["/tags/加密/index.html","e95d621333b671d9ed349e497212a02b"],["/tags/动画/index.html","46d7ef32f79a096b20d893073be602e7"],["/tags/博客/index.html","6552a578e3a49134856af9c6b5c076e6"],["/tags/历史记录/index.html","9516bbc829b03b183f1c3b5d342970b6"],["/tags/压力/index.html","cbaba4e8e0a51e2c66bf1754908c64d6"],["/tags/压缩包/index.html","2cb0b510097db148086ea4374f8b3a24"],["/tags/反代/index.html","3571de572fc8b846e61f24112a58cf29"],["/tags/可视化/index.html","95ea65999376033c72173c775c21ef6d"],["/tags/命令/index.html","f906446149cf5cd8401ca0b14ed600e0"],["/tags/国家/index.html","7fc773d369efeda69f7d3362defdd2b7"],["/tags/图床/index.html","cb27478d4008667feb15bd79d02103d1"],["/tags/图片/index.html","03990b8df6557613726a552b022005c4"],["/tags/域名/index.html","76ce82e6cc5702d078a685f8253acbc0"],["/tags/多标签/index.html","6900ae11a1afebbe7bdbf8cb6f286df1"],["/tags/存储/index.html","335436a4c8926bf09580bcf3c0377189"],["/tags/学习/index.html","8fa2f5d26de6a7d51b0db10679d67316"],["/tags/安全/index.html","ba03bb96f7d70797fba74392cbaa2adb"],["/tags/安卓/index.html","acbdfa9afd9499c5f036397bca926163"],["/tags/宝塔/index.html","42ff51322f92f6f4ffb8d1f29471b083"],["/tags/广告/index.html","609ee6cf8eca33dd764ae95eb52d2661"],["/tags/建站/index.html","287a690909fa5a8d2c52009fd949f1d7"],["/tags/影视/index.html","af6280f1271dfebae5f01affa806bc48"],["/tags/快速启动/index.html","c29f24554628275d666ff3d4529f9218"],["/tags/手机/index.html","c2fb169afa18cfb360c5ac7246a7b99b"],["/tags/托管/index.html","c5ea5ef1bf49ea46b9f3e927c5a9d439"],["/tags/抓包/index.html","96b9095167b3d38d4ac862b8696cc3c1"],["/tags/抓取/index.html","84e6c55c8003143835f717b891c49145"],["/tags/投屏/index.html","a6c3c5ecd0c599384220ca84ac301c33"],["/tags/拓展功能/index.html","8d6b66e6975ee59c23d80b5bfa07dddc"],["/tags/挂载/index.html","9efa732a4a9be3f4b6d0562f24b3e73a"],["/tags/指纹/index.html","2c0597ca58b4aa55b40aeffee0624714"],["/tags/接口/index.html","fd953671b211185f1f122b18cc230b82"],["/tags/提取图片/index.html","14fcde9954451e673f92279fde0eb45e"],["/tags/插件/index.html","a579f8cd657647a0617d36c58b5a0f59"],["/tags/搜图/index.html","190effcec037b7119b93018058221c50"],["/tags/搭建/index.html","6deb28b08c0234e26a6022fa87f7f93c"],["/tags/撤回/index.html","576e45f812b9e21f7a0ffad6646a3e50"],["/tags/播放器/index.html","ca51c2a8e1d19165e9f5c9253fd828f6"],["/tags/政府网站/index.html","c3b1f78b3aa3a45862c1fbe112f04d19"],["/tags/效率/index.html","eff6dd167d9487d42a920bc62071b632"],["/tags/日历/index.html","5478a59bce1ff8de4d7d95b78878583e"],["/tags/服务器/index.html","e9a0a9fe9c9b81cd8b3db86c9c36bd6c"],["/tags/桌面/index.html","cb13a4fdc435f8a1d12d09afa74d4fce"],["/tags/梯子/index.html","348d494de6c5ef0ba1ffade0429cde52"],["/tags/检测工具/index.html","387f4229b6a93b0823786f5fd884c322"],["/tags/汉化/index.html","89820c5519fb7d6f67940b0fc63d00c8"],["/tags/测压/index.html","37cca781f91669cc557aac213a2835bc"],["/tags/测速/index.html","67834a2b11b9a3a7f47861aebe5d0871"],["/tags/浏览器/index.html","7e3a7316c179156fb9dd8da00c54ff53"],["/tags/清理/index.html","5a5edf3d168b74ab0fe02e98c1655c77"],["/tags/滚动条/index.html","aa63ae354c44784f5f79bbdefd023bc4"],["/tags/电影/index.html","824875975666beb89e8639c25ac5e11b"],["/tags/电视剧/index.html","425d82aefe7787e1ec44f812cb2f7321"],["/tags/白嫖/index.html","be52bf760a1e92a3144fde1a6d4535f4"],["/tags/百度/index.html","ec770b94cdfe9414984569f8836ca682"],["/tags/百度云盘/index.html","ff0ea9a414038f658304fdc2e7e62d13"],["/tags/百科/index.html","8f1ccd6b27c99aa0d1bd8b742f309070"],["/tags/短信/index.html","dec310ef1b4e7eb21c1e026a4be8ccbc"],["/tags/硬件/index.html","6558753ebe42f1330940930df1fba67d"],["/tags/科学上网/index.html","3fa4fb5a852232be16f8b14e32e0fbca"],["/tags/空间/index.html","97690435668e8a63c71f72b62f32789b"],["/tags/笔记/index.html","08828ac6283d10f6e4ac5adc3d282d28"],["/tags/简洁/index.html","33984bb906b04fdefeaacdc398de1bf1"],["/tags/简约/index.html","a297ada7550b286cac28cb9b49f97b97"],["/tags/维基/index.html","9690fc1981925748e165c632a729e1c8"],["/tags/网易云/index.html","79de52be448f2cf3e16a1ddb958d1c68"],["/tags/网盘/index.html","8a341adfe44b34e720571b3d47ae0303"],["/tags/网站/index.html","4eaf676db263a596516a7b19da0945b2"],["/tags/网络/index.html","dbd3df901a682e07b477f8e084957c43"],["/tags/美化/index.html","56687fb1c6d6124a44e5a620f83e5a55"],["/tags/翻墙/index.html","a9db712b072597b944324bb6f302b904"],["/tags/翻译/index.html","89d4cee46ea8c237a07aa53255da9ac3"],["/tags/翻译器/index.html","b254c89a855b42f0344cce21e2f1ac8e"],["/tags/聊天/index.html","64807a0b2975fa6bb30057cb8cd1023b"],["/tags/聊天室/index.html","9980f503a1b959d7d6957a4616786ff9"],["/tags/联想/index.html","4012be0b1204a704530e74d8171b2905"],["/tags/节点/index.html","93a12a36574ab390c018ca0dbe614604"],["/tags/虚拟手机号/index.html","3a627a9cc261659b4fb370d2df4b4136"],["/tags/补丁/index.html","0495d7eaf8d91e012772bceed8b80a5a"],["/tags/视频/index.html","aa9cbdf8e24fd6ada68344ee11ef9187"],["/tags/解析/index.html","b0699cbf01c3caf6af1f7d50b74c1d71"],["/tags/订阅链接/index.html","72289a77fd49455cc002faaee8de9ad8"],["/tags/记录/index.html","3da0d738986559e0bebbe214d53dc063"],["/tags/识图/index.html","9baccce02b9cc4d8d53992343b8d6e38"],["/tags/语言/index.html","d76cf2ae24f56f6541b06af556120aea"],["/tags/资源/index.html","2492bd80ad6c08d1fc6c8da9307d3630"],["/tags/资源管理器/index.html","c7fae4fbd5c53ff3b7223eda8dbd5587"],["/tags/转移/index.html","9b7b9275a96941e03ecd3023ec0d67f7"],["/tags/软件/index.html","965431a834ac3ecac9bd0d77d0c7c78d"],["/tags/轰炸/index.html","967abb629981d5ce20e0ba377ec5f60b"],["/tags/迁移/index.html","df62d98729d46f98e278caacec4e6f53"],["/tags/远程控制/index.html","f7890f424a4ddae62a1a52a4df1b8ed5"],["/tags/连接/index.html","50fb40052972035ed6689859f7cd9527"],["/tags/追踪/index.html","278ec4185561752f11350d8cf2cd4b1f"],["/tags/速度/index.html","b3587a1a4848f1eb3cb415b7de16fb79"],["/tags/邮箱/index.html","74fbc52e2f131c38d030ad00b29f68c0"],["/tags/酷炫/index.html","9c6e9d4b41f711ff5b79c8b0f3a33391"],["/tags/钓鱼/index.html","94c86bdbb9ab42574a571a54cb798fb4"],["/tags/镜像/index.html","5307bba0977a3d9c540503e20ea7de29"],["/tags/随机/index.html","5f5abbe429bd059d4e14835acb8710a7"],["/tags/隐藏/index.html","d6f9d5ab74fed1741230f25831f140c5"],["/tags/面板/index.html","dc2256f17e164e4eaa2bf1c1f4378454"],["/tags/音乐/index.html","62095b2410b43c117bfec2dc4c5f751b"],["/tags/高颜值/index.html","e6783080125e899591929cbdf83b9652"],["/tags/魔改/index.html","c9d4839118cb32e4aa691ab87bc05dfd"],["/tags/黑名单/index.html","a9c4bee3cda95d764d261ad9e250f2f4"],["/urls/index.html","47a544ccfd64225171d60781a12b1c83"],["/vps/index.html","f023def444e0b689a8b2c73f59aa48c9"],["/支持/index.html","dfdfcef7652982d8f9f734475deb1382"]];
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
