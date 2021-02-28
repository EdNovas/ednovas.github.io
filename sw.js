/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","77fca2fd666b7e5ea7ad1f1ca0344b6e"],["/2020/11/29/clash-windows/index.html","ebd2efe72cbfa360c12722e041917c28"],["/2020/11/30/websites2/index.html","079edeca52514682072b8759abb21ee2"],["/2020/12/04/iphone4s/index.html","115f9bcdb5b375c2cb2ef2df49191c6d"],["/2020/12/04/onenote/index.html","750970a15f237ff8ba8c3d0ddcd7bbaa"],["/2020/12/04/wesites1/index.html","90d877324ba583ca9001b0ec5aa2c62a"],["/2020/12/06/nokia808/index.html","b2bd2bfbd822410fe97bfaf34f17e0fd"],["/2020/12/07/ipad1/index.html","b91916a0126dafe1b202af9b1a629cb3"],["/2020/12/18/freesubscribes/index.html","18f352f60ec8e232e91a89525eaab679"],["/2020/12/19/musics/index.html","a2fde0e422d258239c4fbeca26597aa3"],["/2020/12/19/shadowrocket/index.html","60b137b756a10a9f31cbec121c094fbb"],["/2020/12/19/v2ray-windows/index.html","db36e404cd90d48f4b682f3d937d31d4"],["/2020/12/19/v2rayng/index.html","1fed5d6915bbb621911197e6bb24f29c"],["/2020/12/20/beoplay/index.html","1a3d3f990d518836c6287d14464e818e"],["/2020/12/20/订阅链接转换/index.html","29f80d99c87487ab5f35f1bca8357ef0"],["/2020/12/21/chrome浏览器下载提速/index.html","ea81c323995de3a27a9c6a8e42f13a24"],["/2020/12/21/免费128线程并发下载xdown/index.html","788397ce466bd3992c760f8eafe68b98"],["/2020/12/21/免费32线程下载软件ndm/index.html","bece670e8a6ad4cec6fbba76476f5a98"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","0caabd5b4533c1e74b6a7904cff4f124"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","c53b3ec500b64dc47fafb29688bb2e66"],["/2020/12/21/广告怎么知道我在想什么/index.html","828bae7fa69fa181a5bed422cc4036e3"],["/2020/12/21/无名·引子（小说试写）/index.html","2df8f121e5688a651f4379d0469a6438"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","0b6f40f50c6ac2f9b3240123647cb986"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","cdd0a3264d067de843699a13d2640624"],["/2020/12/21/高速轻量下载器aria2/index.html","2649ff90d4734b24bf07048e3f709c66"],["/2020/12/22/2020-cee-roo/index.html","bafc8b287318a57780a406e343c63f10"],["/2020/12/22/firefox插件、github、steam富强/index.html","d043be8844019cfbee4ea090f83e164c"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","63131b9a89eab60807e513f232b93fab"],["/2020/12/26/python-day-1/index.html","113035434e7857a0c2722162242dc627"],["/2020/12/26/python-day-2/index.html","0e64dca2cb4890d86e74ed54a9697c05"],["/2020/12/26/度盘不限速下载方式一赏/index.html","d044b2e658d0f0d255c2f14b0137c81a"],["/2020/12/26/添加开机自启软件/index.html","b840c1f7763386b2787094b21001474f"],["/2020/12/26/电脑端截图方式一赏/index.html","f31127252b8fe4ab658ae9a07412220b"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","a6c03bb3b56efbc49e9a79bd734adbe7"],["/2020/12/27/最安全的浏览器tor/index.html","1d64b2933347159b44a52951ad021c1f"],["/2020/12/27/网易云刷等级和听歌数量/index.html","87db2660579477b9b85d620047cb2681"],["/2020/12/28/freenom申请免费域名/index.html","a95dac1420c5b3e118339a74df12770f"],["/2020/12/31/机场/index.html","83ac38b34345c249079fcfa31cc3ebac"],["/2021/01/01/M1/index.html","0077f778976ba0c9becaf403e56c2e30"],["/2021/01/01/compress/index.html","7a1a097f72b68b3a8e0ef70bd6c3103d"],["/2021/01/01/infinityfree/index.html","787b0049e1f1d23e75c497bc99e6f270"],["/2021/01/01/硬核翻墙/index.html","fe25906cf575934fb1fec0f44df706a7"],["/2021/01/02/qq/index.html","6f683577bd175815dbe6925d21e98674"],["/2021/01/03/netch/index.html","9d39b53d2079b4d4f3e5577e13062b52"],["/2021/01/03/waifu2x/index.html","4f1a4864cd7a18c05519f4adcdf45f66"],["/2021/01/04/ads/index.html","76883df6cd55e21b6f5c3ce021adb13f"],["/2021/01/04/games/index.html","d41c521549769a370532c4bf7eedeb00"],["/2021/01/04/heroku/index.html","cc483dba4b184925266211ee9cbc948b"],["/2021/01/06/movies/index.html","1398b0a85c50d2ccc2dfe4ab849edd28"],["/2021/01/07/google2020/index.html","5d7b737d3ca41746b52992c6adfc9b2d"],["/2021/01/07/lucky/index.html","62ded15563b437c12eef20d8cd06836a"],["/2021/01/07/spotify/index.html","1fe168012b493001e368e661326238c8"],["/2021/01/07/thunder/index.html","3ede3a3283221f46bfaea92d67609ed9"],["/2021/01/08/adguardhome/index.html","e76df78710be73600dd40d239042e69f"],["/2021/01/10/IBM/index.html","eb898dd1348da49f26e47972abf1fc55"],["/2021/01/10/potplayer/index.html","708bc4cab2f3b7aab19d6167682c05b2"],["/2021/01/10/sakuraanime/index.html","fa9740f3687bfd1d10737805d591ce57"],["/2021/01/10/美剧星球/index.html","e960909ca55c6ca9471626a351b0a928"],["/2021/01/12/telegraph/index.html","2db7fcdf5780e93ffa112f4ad5e7b84a"],["/2021/01/14/comics/index.html","e215724fece9c301d06c38e92737bf64"],["/2021/01/14/ftp/index.html","aaa33111440369e12b7af624415a716f"],["/2021/01/14/oraclecloud/index.html","d743545c56037687e148690b92efb672"],["/2021/01/14/porkbun/index.html","6ba873cc48182b24033df610bfd9a7b3"],["/2021/01/14/powertoys/index.html","0c5f630b31ad140ce6d9415756c99945"],["/2021/01/14/taptap/index.html","49e791582948fb5f253ae5da4e810688"],["/2021/01/14/ubuntuvsftp/index.html","05f97e5649b2aefdfe1bcf5f803a3ae2"],["/2021/01/14/小说/index.html","cf9e11e934a8e573f9da948b393b957b"],["/2021/01/15/freeproxies/index.html","44e8cbf11f3cd9e18e6d47e035b12797"],["/2021/01/15/incaseformat/index.html","6cf240356d86e8663acb31a1fab9ad40"],["/2021/01/16/euserv/index.html","752656e336dcc873950e3020d46080cb"],["/2021/01/16/winxray/index.html","ced841bb3e1c5d4da9ba23ae611c656a"],["/2021/01/18/qqreadhistory/index.html","85fab501ad69e5f67f78abf7e32e34ec"],["/2021/01/18/qqrevoke/index.html","d757ef23baab487484b1028f1dab397a"],["/2021/01/19/freevpn/index.html","00f70092d9a9e11ae430ffba5171283a"],["/2021/01/20/browsertrack/index.html","b6200e0ad63f791e989c541f6e811f62"],["/2021/01/20/v2ui/index.html","92ae565ba0fb868b4036f35cbebf704c"],["/2021/01/21/failedtoconnect/index.html","e62948ecdb4f8e7a17bfa5aa3f4e1b83"],["/2021/01/21/gitcalendar/index.html","3b3c3b573df8709b0e10d7f401004758"],["/2021/01/21/markdownformat/index.html","6b13b14f2c5e86a5a8bfca1c4b05888d"],["/2021/01/21/markdowntable/index.html","9cf809b6e3f05d9460b97cdaa72ee9f9"],["/2021/01/21/vercel/index.html","c7b063bd24d42a36bafe7ba7add85cce"],["/2021/01/22/hardware/index.html","6bad3350f034556b445af00fd08575f8"],["/2021/01/22/muviz/index.html","e02504b7d652319ccab017eb91f75011"],["/2021/01/22/randomapi/index.html","c2c4e24dc61d81c54ed39cc41baaeea6"],["/2021/01/22/searchimages/index.html","65dbf88aea192376c98b38151e32d2ff"],["/2021/01/23/RX文件管理器/index.html","6475d9b5707c44313faad4cec79f278e"],["/2021/01/23/chromeflag/index.html","5076cc7234c73b12ed1a53c2659c489d"],["/2021/01/23/qttabbar/index.html","de4f0e18610a4ac437eb0279c3949cc6"],["/2021/01/24/githubspeedup/index.html","2e7afedc043288bf508683af49046927"],["/2021/01/24/jsdelivr/index.html","fa7f9cde47587edea0e624d1eb963fdf"],["/2021/01/25/note/index.html","f4071b30c538d756183d002f1d38af22"],["/2021/01/25/soul/index.html","8876c9e632f196187d948e7d4403ac5e"],["/2021/01/26/herokuxray/index.html","6e4182700df51310645f9f95818e7c54"],["/2021/01/27/proxypool/index.html","62593cce5bc9f569405c9e29fe053a61"],["/2021/01/27/tracker/index.html","041dd7c3cd16b9ed3f7cee40c7ff1d8b"],["/2021/01/30/pandownphp/index.html","038e43d58ab35ef7c6ba5af3be26a3b2"],["/2021/01/31/newgroup/index.html","8da62438f3073a4a15fef875908a0c33"],["/2021/02/01/clashlanguage/index.html","2c47ac7067a6aec7f6f7005891552d93"],["/2021/02/01/encrypt/index.html","07cd94ef24438562d3e74cedbf07f072"],["/2021/02/01/footermotion/index.html","b0643a804ebb8d7c3dc73ac15be1f0ef"],["/2021/02/01/gitter/index.html","4fd738f206ba0a7fc6ce36a46ba9158c"],["/2021/02/01/pixivtop50/index.html","e573170512780aec12a9c39d91498ead"],["/2021/02/01/scrollbar/index.html","b98daf6c5d4a5becd9a7b5a173c5c62a"],["/2021/02/02/clover/index.html","0ea30d1cd7f438793fb23ce911f210ce"],["/2021/02/02/maya/index.html","f9f0ae1f4c07250ddd45ffdf1bcbd670"],["/2021/02/02/speedcontroller/index.html","7804b2a8879117ce985170fc53a20dc8"],["/2021/02/02/yesmusicplayer/index.html","fb7eb0b6a5ff7d65eda6c7fa610eb920"],["/2021/02/03/lenovoonelite/index.html","2c93215a94f84c38e53f1b3ee3deb67f"],["/2021/02/03/skipads/index.html","e43d8c32cfc76317ac487e400a62cbb8"],["/2021/02/04/picseed/index.html","f42f70e856d4f3c31f60b8b609a43291"],["/2021/02/04/renren/index.html","bdb6bea08b0d7c1da1823be1489e39a0"],["/2021/02/04/serverstress/index.html","ca2a10f3083de76f9e5abf0d0e4db2da"],["/2021/02/04/wikipediazh/index.html","03d81bf5ab58d281fdfc30a1d0b5c346"],["/2021/02/05/googlevoice/index.html","926b2c4ceae84e813dfef747abaa31c1"],["/2021/02/06/clashconnection/index.html","0b71e0e0fd3afa0fc5a29c2f976b6e48"],["/2021/02/06/gvtransfer/index.html","9d3e109c698f6a3aaeea67025ccd3586"],["/2021/02/06/todesk/index.html","824976f5db0704f86c033c95620cd392"],["/2021/02/06/vpnblacklist/index.html","80813c8ef8e6253dea967ace05645805"],["/2021/02/07/mklink/index.html","34e95d4cb561cb8009e7929ab4609a04"],["/2021/02/07/speedtest/index.html","4391fd905247e40a1f7d175c5e3b3e2f"],["/2021/02/07/translate/index.html","1fc3a56511d943542b83b4824b07f5a2"],["/2021/02/08/ewomail/index.html","f7b339d57e491d8c3f0e59932b40157f"],["/2021/02/10/officee5/index.html","c74bcd68241e715618209986eacc4c39"],["/2021/02/10/raidrive/index.html","05445f15dc5e781715222f60799c2f90"],["/2021/02/13/e5sub/index.html","e5391bc10343de3f3cd44c481254104a"],["/2021/02/14/screen/index.html","015a64f975323555cb908573e8b7308a"],["/2021/02/15/clashtun/index.html","6d1ba6cb8735d18d4c7c01750d249f82"],["/2021/02/15/messageboom/index.html","91eb24e4feb75b5e8d8547f674bb7004"],["/2021/02/15/oneindex/index.html","6b9cf7fb79e8884871d30b4bcc79a5e8"],["/2021/02/16/govsites/index.html","fc4cd1c5b471b662d19a0ce415ecff77"],["/2021/02/17/hexototypecho/index.html","16dd2e241775b952d2967b956905f81d"],["/2021/02/19/fiddler/index.html","622def0ebda165d1bbc180fbf1adf66b"],["/2021/02/22/potplayerset/index.html","e25d587789e66269f2c734d6088e1f41"],["/2021/02/22/studyresource/index.html","33380f90a073ca7d70c8b6faf2b8aefb"],["/2021/02/22/telegram/index.html","4f21a45330d8af5f7495df04e71f2c0e"],["/2021/02/22/videos/index.html","cbac3cfb6cb98097082376ad4dcdd242"],["/2021/02/24/mtproxy/index.html","c17828cda02eb6f1629444a1cf1bac9f"],["/404.html","62b3dec002aaad6c877ff2928e19ee70"],["/archives/2020/11/index.html","6eea421622c52fec65b38d3eb0a966d4"],["/archives/2020/12/index.html","872725c095858027de34e85ae01c6ecf"],["/archives/2020/12/page/2/index.html","e8edcda5266b9b85cff45850332b0f5d"],["/archives/2020/12/page/3/index.html","561d0d17251e191d7fc0525f6897d6b8"],["/archives/2020/index.html","b9c2977284d54ab45c208e0937cf1125"],["/archives/2020/page/2/index.html","6d74c5f66acdb9029bbfdb4316a72168"],["/archives/2020/page/3/index.html","0a9b229f18f109c6529b497528fc70fd"],["/archives/2021/01/index.html","a44aa718ecd8aef349d958055e5f1d55"],["/archives/2021/01/page/2/index.html","8126ae26c1aa96beb20ec9d593451961"],["/archives/2021/01/page/3/index.html","bc2dec2e6189a24b7c06a21dd93cbd78"],["/archives/2021/01/page/4/index.html","c3e1a2812a434f2e01c6a3923eb2c3b8"],["/archives/2021/02/index.html","8d4bdae3e0b871cb0594b82fe6f872e3"],["/archives/2021/02/page/2/index.html","d3cdce2759054da139a07102b1931317"],["/archives/2021/02/page/3/index.html","1a99ad889c8849e0a050b813e0d2eb35"],["/archives/2021/index.html","47307d96db5a11bf92e3f9fa3aedfea9"],["/archives/2021/page/2/index.html","d9e1f117b2b7d70fae9fdf7de4adb39d"],["/archives/2021/page/3/index.html","3f05df421fa28436915299e9f211111d"],["/archives/2021/page/4/index.html","44265a69dac65b286a0fe42ab3678382"],["/archives/2021/page/5/index.html","961dd770a791c22e197c2a44ff1a0ece"],["/archives/2021/page/6/index.html","7012206ea083cbfac6d1b860c9fbf43f"],["/archives/2021/page/7/index.html","9c1a281b9a74572d71061a8f191cee98"],["/archives/index.html","67defd269f0fd841f3eecbac5ad2c381"],["/archives/page/10/index.html","ff96520629c618015af098e19e6617d9"],["/archives/page/2/index.html","cc14e20adec4b90b53d86f2474c5fb64"],["/archives/page/3/index.html","bff02c820af11036b5b8fad75e8011c1"],["/archives/page/4/index.html","545b63efe2b2c3749eabc419406607eb"],["/archives/page/5/index.html","53022dd084681478eb213f15cf991e4e"],["/archives/page/6/index.html","08d9c7770b0906a975fec86b8483ecca"],["/archives/page/7/index.html","cf0151a5091035d51defaa0a5312e173"],["/archives/page/8/index.html","1af7aa789431e35647f6dde360e2172e"],["/archives/page/9/index.html","8582cd43f46e6360fc364be035bc7141"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","7763a23c68595c90f4fdcb309530fad0"],["/categories/index.html","ad4b7b51e79c00dd0dfd5a84ab1861ae"],["/categories/下载/index.html","d937e88c6132628c7cbd0721cb11bc87"],["/categories/安全/index.html","f74cecc37952bd83b11b2c6afbfcf46d"],["/categories/建站/index.html","1900b44f5e2e0bb94efca7d048c369bb"],["/categories/杂/index.html","a59a85a2beef3af58a9209a62e4f59a7"],["/categories/杂/page/2/index.html","e377db1b5a4d498d68d9ee9e8f63196a"],["/categories/测评/index.html","9aeeb313fba01a4cef19d57322fc3060"],["/categories/科学上网/index.html","054a37ce2480ceb0ce86a22b1b293d1b"],["/categories/科学上网/page/2/index.html","785a54c96a4deee10f623f21caceb818"],["/categories/编程/index.html","cae440f3278661f5de4c832bb9037117"],["/categories/网站/index.html","933895b2818afb2721e2b2fa03d047c2"],["/categories/网站/page/2/index.html","bb2bccdb7b6591071f04fd82ebcfa428"],["/categories/软件/index.html","1ffd00d1a57f371517735c913ce29943"],["/categories/软件/page/2/index.html","0b0f21112b3de204d7b2b4ffcec2129f"],["/categories/软件/page/3/index.html","cb1159f4ae96205ed27aeff84ef9ae11"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","e3c0ffce6ddbbcb47d913f4228f87e6f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","39a18520fd1ad49929cc16d6d21df399"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","6988032c7edcd6fdc920f25e2d284887"],["/ios/index.html","2d53e67c68aafdaa6b6007d93cfe7334"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","93b4997328fa4f4b1d05dfc4f12212a1"],["/page/2/index.html","7e61440cb9786c1acfc4e1dfeb9d4db4"],["/page/3/index.html","a4f0e6c5ae48f87f71bdbd5c5586e4c4"],["/page/4/index.html","06a30c19f3236191154951548a1caf14"],["/page/5/index.html","16737c0bf2d85d6ce981833237f064c2"],["/page/6/index.html","a507fe9538c1dca87d0b46e4856d61f0"],["/page/7/index.html","6c3b77b6e11d89190bc549ee38e5e83b"],["/page/8/index.html","8dba3234d22230d9249a7119f56c8174"],["/page/9/index.html","67b48fcfce64127526b3ac21e7018c27"],["/payment/index.html","b1c93bbad3aeb5ffe04a8666151ca4bb"],["/privacy-policy/index.html","5bf830fd124c55257398732c1824af5c"],["/rss2.xml","c44bf94396f189f33b163c8966a29b0e"],["/search.xml","834c35245a132da9e5c95a75711f96b3"],["/sitemap.xml","e416857e243aa1ee7c656c43adf0b110"],["/sw-register.js","aed4c6b3eae28a113244584e5e82029c"],["/tags/5t/index.html","2ca579d61c51c22a445037a1d65f5818"],["/tags/Clash/index.html","21d0b036430bec3701ce7078cf0d5e57"],["/tags/Clover/index.html","f9b6574ed4b5e190a43999fc61e8fb5b"],["/tags/E5/index.html","444f59ba9342020a3a5a3a8deea0a3c0"],["/tags/FTP/index.html","4f190a2701576c64adc2a12d27ce90e3"],["/tags/GitHub/index.html","46f78a66ddc5de5355418bb0a3a2b82f"],["/tags/Heroku/index.html","ce924a7810960019e788708c0825ac2a"],["/tags/Hexo/index.html","1ddc20f447534908531c8ec4e887ff12"],["/tags/Lenovo/index.html","f7619708b0cc65ba1ec6b0c3a036ed17"],["/tags/Oneindex/index.html","6584f7a1729cd4aa0a14325e981eb631"],["/tags/QQ/index.html","11dbdc2f1fea5860c511235b8467bf30"],["/tags/QTTabbar/index.html","29830058ed77163cb9b4b140777e46ff"],["/tags/RX文件管理器/index.html","290018d4d3eec7202375133a4fe513cf"],["/tags/Todesk/index.html","55d9ac6cb349d373536f5f62172e8900"],["/tags/Vercel/index.html","2319f24e4621b605e4544700b970face"],["/tags/ads/index.html","c0839343ddfcc122450d2a8852a0081d"],["/tags/api/index.html","4ce354ee6e8242360e67f76c9b532299"],["/tags/app/index.html","815cf973b94b82cf672da79e74576c62"],["/tags/blacklist/index.html","57ce62dae9c6f532dcc9e438186dba3e"],["/tags/butterfly/index.html","7aeeee980a4c08432d7fe2fcbef7f497"],["/tags/chrome/index.html","6f69078cb1b8c99601026c656433ef75"],["/tags/cloudflare/index.html","416d89124d6b278b476d45910538f507"],["/tags/cmd/index.html","36f2984bef42197b84346e714ad069cb"],["/tags/c盘/index.html","9324fa89cdeedfbddd81fcfd0a5940aa"],["/tags/email/index.html","f19de705bc82527a79f06d3988408f36"],["/tags/ewomail/index.html","8172ab487a04393fa790924a49bb6340"],["/tags/fiddler/index.html","05cbd816d5c65ebaf1628da6d17d60a4"],["/tags/flags/index.html","973fcd4796f100fb25cded3f2b369c05"],["/tags/footer，页脚/index.html","5e74ee6a6dd32f2f09e3033fe7406392"],["/tags/galgame/index.html","6a525f486f67ed217834f9736b00c911"],["/tags/git/index.html","0c40842af16ac1cfc2f65f907fd4a90c"],["/tags/gitcalendar/index.html","0a05c5f6e56fdd1719e35bc14b5b0853"],["/tags/google-voice/index.html","6c9fa6015729ad59422f7a33111635eb"],["/tags/gv/index.html","20c8c7fa782535cfbe19e9c4efcf17df"],["/tags/index-1.html","908046ba150074a01cb73511ab95608f"],["/tags/index.html","9a8ad0d5e4b1805ad7ebeaead0132799"],["/tags/jsdelivr/index.html","c208d1c258e9c18e3b853c1b2c2bf3f9"],["/tags/linux/index.html","0ae5103ab725b7dd2e0230eb9f874d13"],["/tags/madVR/index.html","b61049175197d538a90476928f63d65f"],["/tags/markdown/index.html","55f1384e1597233df74862ffeb266157"],["/tags/maya/index.html","50b48fa2d22f12ab819854cc0424e34e"],["/tags/mklink/index.html","d48ec1397d571d280e260e5a32f9e7d0"],["/tags/office-e5/index.html","14e2a2c2a9a653c7df3045f66be8cf1f"],["/tags/onedrive/index.html","82ea70240e64b5a2382dd6ab483a073b"],["/tags/picGO/index.html","780cabd9dffd915ef4f166ea04a623d0"],["/tags/pixiv/index.html","e2f5a25120aa0e2ca1dd059c18ba0667"],["/tags/potplayer/index.html","348dfccbbb9960f804098545d2b62fd0"],["/tags/proxypool/index.html","88eae2258428070d14d09631f755ff4b"],["/tags/qbitorrent/index.html","086d38955391fe54e5d94162cd5f251f"],["/tags/raidrive/index.html","77929cd501537b0522fb8403b11aa182"],["/tags/screen/index.html","d97fd89e1734dd1fb78c218ec13ea703"],["/tags/speedtest/index.html","90d75fc9a8393f7a14ca14eba91c8063"],["/tags/tap/index.html","53c39848d125cd823001a34ab25fbdd9"],["/tags/telegram/index.html","d350cb2e73b47b12b7625b3e53db37d6"],["/tags/telegram代理/index.html","01d44afec6c8c41436ddf2726b8d25b0"],["/tags/tg/index.html","fcbe19f58b80427b1f4228f224c30ecf"],["/tags/tg代理/index.html","e1190b45eb40d04a852616821f944324"],["/tags/top50/index.html","ba14c370384202fe86bf5e9abd414871"],["/tags/tracker/index.html","7435054778655d316f632c63f21bc1da"],["/tags/translate/index.html","c3bf104c8e0efffbd221db2327b8f603"],["/tags/translater/index.html","80078089be65212fcc5a2f8ea56ef6d4"],["/tags/tun/index.html","07d63bbe8edbf4f41e96be095139c7e7"],["/tags/typecho/index.html","597dc36775778303179592e2fcb354b0"],["/tags/v2ray/index.html","67b33bc0495022e2b37b09febf9e15f0"],["/tags/vpn/index.html","6d72baeca8b3194897886ac02c20e35c"],["/tags/vps/index.html","d4aa97b50c5a2d708b2dd6525b497d3a"],["/tags/windows/index.html","5fdcd8d7a0a631c8eadc3589aa0a6242"],["/tags/windows端/index.html","839abe3869d4dc2c8ff18c61d68c3aa5"],["/tags/xray/index.html","db1a3082169cededb154a5df43dfceac"],["/tags/下载/index.html","876142218ef8466c2fb95664b0ee0fba"],["/tags/不限速/index.html","92645d9b842c03449271e20f27dff56b"],["/tags/个人网盘/index.html","146d48819383289db564fe609ec76be3"],["/tags/主题/index.html","c51c47aab756e7e370d5a76a0fbdf2d9"],["/tags/云便签/index.html","240f644f54e837442648e38ef841427a"],["/tags/云盘/index.html","520b2980b0221762636e4a355dbc9e5b"],["/tags/人人/index.html","bbbee33a8a142323f8d571706df42abf"],["/tags/代理/index.html","e565dbcaed6a0710b4e55d92b4dd06e0"],["/tags/代码/index.html","c06d91fa01424d799df99681a1bf6c99"],["/tags/优选IP/index.html","c342f9c2afd09a8102eec42fd38683f6"],["/tags/便签/index.html","15b84f16e5b3d35ba4132cc5f76e1107"],["/tags/保号/index.html","f41331883f6c8d1bb8fc8ca1131e7624"],["/tags/免费/index.html","cc0b51b3e4ec62c02b096399597f1d39"],["/tags/免费节点/index.html","567e1b72d6d08481a0d13cbf21d1bc4c"],["/tags/加密/index.html","bc43b22d88373f0b6b3c5bc1da799a92"],["/tags/动画/index.html","158607826ecd07d3dd6c69e4a61e1b7c"],["/tags/博客/index.html","2d8f39fa48a10930451583b127d40e31"],["/tags/历史记录/index.html","1e198443c068e283466721b51b95fce6"],["/tags/压力/index.html","9e6d7ef0b74dfba3b4125197d06925e3"],["/tags/压缩包/index.html","b453f6b74ad842269390888582352cd2"],["/tags/反代/index.html","42b5acd4d9883ed74104f36d098271c5"],["/tags/可视化/index.html","61e53715f2bf8149b65369fa1f0abdc7"],["/tags/命令/index.html","0f57d76bf2375ac8826d3e3bdb04c918"],["/tags/国家/index.html","719db27989e8177f93695f537c658a25"],["/tags/图床/index.html","1d6f1932925c60b070785b1d87439f34"],["/tags/图片/index.html","b703a5ea0a8b64e4c297d7076b7a2dfd"],["/tags/域名/index.html","d09f22582735ec99304b1268986b7d35"],["/tags/多标签/index.html","c7bfbe8233942dae34c604c026f3eb9a"],["/tags/存储/index.html","6893bf8f52e40efeb1b702b50160b514"],["/tags/学习/index.html","a854df0e83674f504eb22ea28b698293"],["/tags/安全/index.html","bbe08cea9ed2de4806ea0d3fbce37702"],["/tags/安卓/index.html","c3848fbabccf65869cc5444f5152d303"],["/tags/宝塔/index.html","4c8f59ccb113f18dbea065a81e851e52"],["/tags/广告/index.html","1a948b01ea011c50392c0bd422b0d595"],["/tags/建站/index.html","746f7728cccf30e8c1d3bd7098c42ed2"],["/tags/影视/index.html","766a8b2551e7cbfe039074e90c0cb856"],["/tags/快速启动/index.html","7b12b08cdb28873e489a209388bfa6e4"],["/tags/手机/index.html","fafc5f6fbabb5a6c6f2164e56e81a2d9"],["/tags/托管/index.html","356b63f46bda9442e651c749ca15cfa1"],["/tags/抓包/index.html","d2b8d9d208a84f798d760dcf2e2a23f2"],["/tags/抓取/index.html","3c15b6a6c89937c2b53b171bf4a04610"],["/tags/投屏/index.html","07313f98a8f9775bb85b174802284b98"],["/tags/拓展功能/index.html","fd984752cdd9bfd7e9a45ce5fa70d5b9"],["/tags/挂载/index.html","209a0bc472fe48dc555b834fb37dbf46"],["/tags/指纹/index.html","195413135e7e9a5336bb92dd1c70066a"],["/tags/接口/index.html","cf9582da8a4a2c144636af355f7e8296"],["/tags/提取图片/index.html","e3e04f81afd4650ccf9578564648afe9"],["/tags/插件/index.html","054e45d79987f7d0375ba91da39f622f"],["/tags/搜图/index.html","7327e898c368f74387b713657831a50e"],["/tags/搭建/index.html","51dc5619055c06a10c8d49ef7e3ea09f"],["/tags/撤回/index.html","3b09783fbe3f48d3a8f81e6480576a22"],["/tags/播放器/index.html","554275095f8a299addd75c5311315e2c"],["/tags/政府网站/index.html","b52934097719a2b65115e11fcf0454ed"],["/tags/效率/index.html","5f7ae2049589df0344f6cb9707a91965"],["/tags/日历/index.html","2098554363ac0c6616c94fd586547a46"],["/tags/服务器/index.html","b4ac220aa898eb790205db5e932b7fa1"],["/tags/桌面/index.html","13de576785a8b22cf27cba9a7132414e"],["/tags/梯子/index.html","e15810b01f999ac1a11b771b114b241c"],["/tags/检测工具/index.html","9515633c502eed5cc15acfd424243ec2"],["/tags/汉化/index.html","a29a0fc55b22cda688069cfe2067d2e8"],["/tags/测压/index.html","e2eea85cc88baeba0969329ba846eb10"],["/tags/测速/index.html","0d4f86f13eb106718f37f3dd2540cf46"],["/tags/浏览器/index.html","c34642ea9fb3071452ffbbfea094ab03"],["/tags/清理/index.html","3a708837cf8c569b0f51117bcf32be02"],["/tags/滚动条/index.html","ef5175ed96a5e27ee8fdcdf65ee3f902"],["/tags/电影/index.html","26cb22ff84cfcc9cdcf5e36598e15605"],["/tags/电视剧/index.html","ce1ebf431e4d23c315ff5c331e540fc6"],["/tags/白嫖/index.html","bb89171e4d49d8dcff7a13da49d13c5e"],["/tags/百度/index.html","1d0ddd33d7d17155386326a96bc93070"],["/tags/百度云盘/index.html","82861fa7f6a29d8ab8bccaf0ec27aff8"],["/tags/百科/index.html","b97b328b2c52300b0496f4db907577dd"],["/tags/短信/index.html","fce0e91e172b869e3fc3910b840f7afa"],["/tags/硬件/index.html","38ea663bfe2c7597b9626f616889be8b"],["/tags/科学上网/index.html","b539cff8ae3293c98a0348d7450236c9"],["/tags/空间/index.html","e8acef318b1cbe8f98056f3db321ccb7"],["/tags/笔记/index.html","c3f0f2d372fef29df92637caf575bd0f"],["/tags/简洁/index.html","d0a8e662fb47b4653703bd3c51997ef0"],["/tags/简约/index.html","fa881fd9f4c8479d5df2282cee4dcd6f"],["/tags/维基/index.html","fd9f1581383e2351cd21dbadf5a5ba59"],["/tags/网易云/index.html","913085f66fdcadcdb876207bb45cd260"],["/tags/网盘/index.html","6b13ccb0241e0a5e0e0409c4feea2408"],["/tags/网站/index.html","ac2161f605011ba0db02e5583a2186c4"],["/tags/网络/index.html","cf6a54a27f2f3a192bd862cede98569d"],["/tags/美化/index.html","5ce52bf3981a566319b6fc60163fa8c3"],["/tags/翻墙/index.html","c841b126df07835f238686b0e66a15af"],["/tags/翻译/index.html","5e6f23fcd12cb66565df57c85801df62"],["/tags/翻译器/index.html","71776081c0a4959dffdc70d7cccaa161"],["/tags/聊天/index.html","9b9c94ac640001264079ee13a031e3a5"],["/tags/聊天室/index.html","4423aa173e9daea7b6e655d6a9f71d76"],["/tags/联想/index.html","1c728db004ffc089d44a4e51d19f141e"],["/tags/节点/index.html","149598f5747b27ad1c5bb276b28bb5b7"],["/tags/虚拟手机号/index.html","4a6fb9069ddeeb658c9ef5294c073ad3"],["/tags/补丁/index.html","d6ee15f9e7e821eafc2eba5660daa250"],["/tags/视频/index.html","f3eead190290d23283313b550a608807"],["/tags/解析/index.html","2e7d9523313c6a29051dcffe353334ac"],["/tags/订阅链接/index.html","f2fed1db451dec18a6653890d3a91159"],["/tags/记录/index.html","fd4df29ed0a9b776e3a6364f862b12bb"],["/tags/识图/index.html","633edf14b4a8e11221a922d95eeeda8f"],["/tags/语言/index.html","7f0198ee935d258777350065f5a58e35"],["/tags/资源/index.html","234ebe38a3d6c4f9a49564a2b7acd20a"],["/tags/资源管理器/index.html","5c65236a9fc41c0bbac170fd5abe2bfc"],["/tags/转移/index.html","c382cbf790b8d1c8ff03b4492a292670"],["/tags/软件/index.html","5daaea8573bcdfbc3f14ad97be101af7"],["/tags/轰炸/index.html","e3c37fee739ced5f14ddcca9b34c93b6"],["/tags/迁移/index.html","3c457e37781da1179ea42a8cdd7d0343"],["/tags/远程控制/index.html","b2b7309435d758cff0411aeb1f74bb7a"],["/tags/连接/index.html","7710c40d69f17cd4f57fa34d85376e4e"],["/tags/追踪/index.html","54dcb253d7d57445d6fa910903c4791f"],["/tags/速度/index.html","2247d343a8d050545620973ad730773e"],["/tags/邮箱/index.html","1736c019d76370e476573687508cba0f"],["/tags/酷炫/index.html","50c67bfc0fc2eebfd9f3255caab13e36"],["/tags/钓鱼/index.html","763d608870aa801e63626b88800f09ce"],["/tags/镜像/index.html","69bf5e4c580307dfea246433c7b34b06"],["/tags/随机/index.html","febf576712fc407131da8a28c248e4b4"],["/tags/隐藏/index.html","84eec6e20330426ce235553093f80e4e"],["/tags/面板/index.html","ae29a8a12bb332258f2f9d6204d4d6f4"],["/tags/音乐/index.html","48cd83d3e66b4dd9416cfbbc0d85b7a1"],["/tags/高颜值/index.html","3e5a4a210f86b23618893b92a020bcfe"],["/tags/魔改/index.html","a95a450325ee6e10c93c7bacf449ba7f"],["/tags/黑名单/index.html","d5bab748147a59bda69d1045feaf10e6"],["/urls/index.html","a9ecc25bb4d8e95c8218b5b39c6e5bbe"],["/vps/index.html","11c2599ad75fb49b7c16261621ac9e3a"],["/支持/index.html","41a3ac6d9926a34e5ac2b9bacf40df14"]];
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
