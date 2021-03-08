/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","77fca2fd666b7e5ea7ad1f1ca0344b6e"],["/2020/11/29/clash-windows/index.html","ebd2efe72cbfa360c12722e041917c28"],["/2020/11/30/websites2/index.html","079edeca52514682072b8759abb21ee2"],["/2020/12/04/iphone4s/index.html","115f9bcdb5b375c2cb2ef2df49191c6d"],["/2020/12/04/onenote/index.html","750970a15f237ff8ba8c3d0ddcd7bbaa"],["/2020/12/04/wesites1/index.html","90d877324ba583ca9001b0ec5aa2c62a"],["/2020/12/06/nokia808/index.html","b2bd2bfbd822410fe97bfaf34f17e0fd"],["/2020/12/07/ipad1/index.html","b91916a0126dafe1b202af9b1a629cb3"],["/2020/12/18/freesubscribes/index.html","a86652b8e6365e321e90586fbeef5495"],["/2020/12/19/musics/index.html","a2fde0e422d258239c4fbeca26597aa3"],["/2020/12/19/shadowrocket/index.html","60b137b756a10a9f31cbec121c094fbb"],["/2020/12/19/v2ray-windows/index.html","db36e404cd90d48f4b682f3d937d31d4"],["/2020/12/19/v2rayng/index.html","1fed5d6915bbb621911197e6bb24f29c"],["/2020/12/20/beoplay/index.html","1a3d3f990d518836c6287d14464e818e"],["/2020/12/20/订阅链接转换/index.html","29f80d99c87487ab5f35f1bca8357ef0"],["/2020/12/21/chrome浏览器下载提速/index.html","ea81c323995de3a27a9c6a8e42f13a24"],["/2020/12/21/免费128线程并发下载xdown/index.html","788397ce466bd3992c760f8eafe68b98"],["/2020/12/21/免费32线程下载软件ndm/index.html","bece670e8a6ad4cec6fbba76476f5a98"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","0caabd5b4533c1e74b6a7904cff4f124"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","c53b3ec500b64dc47fafb29688bb2e66"],["/2020/12/21/广告怎么知道我在想什么/index.html","828bae7fa69fa181a5bed422cc4036e3"],["/2020/12/21/无名·引子（小说试写）/index.html","2df8f121e5688a651f4379d0469a6438"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","0b6f40f50c6ac2f9b3240123647cb986"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","cdd0a3264d067de843699a13d2640624"],["/2020/12/21/高速轻量下载器aria2/index.html","2649ff90d4734b24bf07048e3f709c66"],["/2020/12/22/2020-cee-roo/index.html","bafc8b287318a57780a406e343c63f10"],["/2020/12/22/firefox插件、github、steam富强/index.html","d043be8844019cfbee4ea090f83e164c"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","63131b9a89eab60807e513f232b93fab"],["/2020/12/26/python-day-1/index.html","113035434e7857a0c2722162242dc627"],["/2020/12/26/python-day-2/index.html","0e64dca2cb4890d86e74ed54a9697c05"],["/2020/12/26/度盘不限速下载方式一赏/index.html","d044b2e658d0f0d255c2f14b0137c81a"],["/2020/12/26/添加开机自启软件/index.html","b840c1f7763386b2787094b21001474f"],["/2020/12/26/电脑端截图方式一赏/index.html","f31127252b8fe4ab658ae9a07412220b"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","a6c03bb3b56efbc49e9a79bd734adbe7"],["/2020/12/27/最安全的浏览器tor/index.html","1d64b2933347159b44a52951ad021c1f"],["/2020/12/27/网易云刷等级和听歌数量/index.html","87db2660579477b9b85d620047cb2681"],["/2020/12/28/freenom申请免费域名/index.html","a95dac1420c5b3e118339a74df12770f"],["/2020/12/31/机场/index.html","83ac38b34345c249079fcfa31cc3ebac"],["/2021/01/01/M1/index.html","0077f778976ba0c9becaf403e56c2e30"],["/2021/01/01/compress/index.html","7a1a097f72b68b3a8e0ef70bd6c3103d"],["/2021/01/01/infinityfree/index.html","787b0049e1f1d23e75c497bc99e6f270"],["/2021/01/01/硬核翻墙/index.html","fe25906cf575934fb1fec0f44df706a7"],["/2021/01/02/qq/index.html","6f683577bd175815dbe6925d21e98674"],["/2021/01/03/netch/index.html","9d39b53d2079b4d4f3e5577e13062b52"],["/2021/01/03/waifu2x/index.html","4f1a4864cd7a18c05519f4adcdf45f66"],["/2021/01/04/ads/index.html","76883df6cd55e21b6f5c3ce021adb13f"],["/2021/01/04/games/index.html","d41c521549769a370532c4bf7eedeb00"],["/2021/01/04/heroku/index.html","cc483dba4b184925266211ee9cbc948b"],["/2021/01/06/movies/index.html","1398b0a85c50d2ccc2dfe4ab849edd28"],["/2021/01/07/google2020/index.html","5d7b737d3ca41746b52992c6adfc9b2d"],["/2021/01/07/lucky/index.html","62ded15563b437c12eef20d8cd06836a"],["/2021/01/07/spotify/index.html","1fe168012b493001e368e661326238c8"],["/2021/01/07/thunder/index.html","3ede3a3283221f46bfaea92d67609ed9"],["/2021/01/08/adguardhome/index.html","e76df78710be73600dd40d239042e69f"],["/2021/01/10/IBM/index.html","1e39a390cf8b0862e51a9b2b9159f111"],["/2021/01/10/potplayer/index.html","708bc4cab2f3b7aab19d6167682c05b2"],["/2021/01/10/sakuraanime/index.html","fa9740f3687bfd1d10737805d591ce57"],["/2021/01/10/美剧星球/index.html","e960909ca55c6ca9471626a351b0a928"],["/2021/01/12/telegraph/index.html","2db7fcdf5780e93ffa112f4ad5e7b84a"],["/2021/01/14/comics/index.html","e215724fece9c301d06c38e92737bf64"],["/2021/01/14/ftp/index.html","aaa33111440369e12b7af624415a716f"],["/2021/01/14/oraclecloud/index.html","d743545c56037687e148690b92efb672"],["/2021/01/14/porkbun/index.html","6ba873cc48182b24033df610bfd9a7b3"],["/2021/01/14/powertoys/index.html","0c5f630b31ad140ce6d9415756c99945"],["/2021/01/14/taptap/index.html","49e791582948fb5f253ae5da4e810688"],["/2021/01/14/ubuntuvsftp/index.html","05f97e5649b2aefdfe1bcf5f803a3ae2"],["/2021/01/14/小说/index.html","cf9e11e934a8e573f9da948b393b957b"],["/2021/01/15/freeproxies/index.html","44e8cbf11f3cd9e18e6d47e035b12797"],["/2021/01/15/incaseformat/index.html","6cf240356d86e8663acb31a1fab9ad40"],["/2021/01/16/euserv/index.html","752656e336dcc873950e3020d46080cb"],["/2021/01/16/winxray/index.html","ced841bb3e1c5d4da9ba23ae611c656a"],["/2021/01/18/qqreadhistory/index.html","85fab501ad69e5f67f78abf7e32e34ec"],["/2021/01/18/qqrevoke/index.html","d757ef23baab487484b1028f1dab397a"],["/2021/01/19/freevpn/index.html","40c13f78c645c47fefbf44d3eb86d2a0"],["/2021/01/20/browsertrack/index.html","b6200e0ad63f791e989c541f6e811f62"],["/2021/01/20/v2ui/index.html","92ae565ba0fb868b4036f35cbebf704c"],["/2021/01/21/failedtoconnect/index.html","e62948ecdb4f8e7a17bfa5aa3f4e1b83"],["/2021/01/21/gitcalendar/index.html","3b3c3b573df8709b0e10d7f401004758"],["/2021/01/21/markdownformat/index.html","6b13b14f2c5e86a5a8bfca1c4b05888d"],["/2021/01/21/markdowntable/index.html","9cf809b6e3f05d9460b97cdaa72ee9f9"],["/2021/01/21/vercel/index.html","c7b063bd24d42a36bafe7ba7add85cce"],["/2021/01/22/hardware/index.html","6bad3350f034556b445af00fd08575f8"],["/2021/01/22/muviz/index.html","e02504b7d652319ccab017eb91f75011"],["/2021/01/22/randomapi/index.html","c2c4e24dc61d81c54ed39cc41baaeea6"],["/2021/01/22/searchimages/index.html","65dbf88aea192376c98b38151e32d2ff"],["/2021/01/23/RX文件管理器/index.html","6475d9b5707c44313faad4cec79f278e"],["/2021/01/23/chromeflag/index.html","5076cc7234c73b12ed1a53c2659c489d"],["/2021/01/23/qttabbar/index.html","de4f0e18610a4ac437eb0279c3949cc6"],["/2021/01/24/githubspeedup/index.html","2e7afedc043288bf508683af49046927"],["/2021/01/24/jsdelivr/index.html","fa7f9cde47587edea0e624d1eb963fdf"],["/2021/01/25/note/index.html","f4071b30c538d756183d002f1d38af22"],["/2021/01/25/soul/index.html","8876c9e632f196187d948e7d4403ac5e"],["/2021/01/26/herokuxray/index.html","6e4182700df51310645f9f95818e7c54"],["/2021/01/27/proxypool/index.html","62593cce5bc9f569405c9e29fe053a61"],["/2021/01/27/tracker/index.html","041dd7c3cd16b9ed3f7cee40c7ff1d8b"],["/2021/01/30/pandownphp/index.html","038e43d58ab35ef7c6ba5af3be26a3b2"],["/2021/01/31/newgroup/index.html","8da62438f3073a4a15fef875908a0c33"],["/2021/02/01/clashlanguage/index.html","2c47ac7067a6aec7f6f7005891552d93"],["/2021/02/01/encrypt/index.html","07cd94ef24438562d3e74cedbf07f072"],["/2021/02/01/footermotion/index.html","b0643a804ebb8d7c3dc73ac15be1f0ef"],["/2021/02/01/gitter/index.html","4fd738f206ba0a7fc6ce36a46ba9158c"],["/2021/02/01/pixivtop50/index.html","e573170512780aec12a9c39d91498ead"],["/2021/02/01/scrollbar/index.html","b98daf6c5d4a5becd9a7b5a173c5c62a"],["/2021/02/02/clover/index.html","0ea30d1cd7f438793fb23ce911f210ce"],["/2021/02/02/maya/index.html","f9f0ae1f4c07250ddd45ffdf1bcbd670"],["/2021/02/02/speedcontroller/index.html","7804b2a8879117ce985170fc53a20dc8"],["/2021/02/02/yesmusicplayer/index.html","fb7eb0b6a5ff7d65eda6c7fa610eb920"],["/2021/02/03/lenovoonelite/index.html","2c93215a94f84c38e53f1b3ee3deb67f"],["/2021/02/03/skipads/index.html","e43d8c32cfc76317ac487e400a62cbb8"],["/2021/02/04/picseed/index.html","f42f70e856d4f3c31f60b8b609a43291"],["/2021/02/04/renren/index.html","bdb6bea08b0d7c1da1823be1489e39a0"],["/2021/02/04/serverstress/index.html","ca2a10f3083de76f9e5abf0d0e4db2da"],["/2021/02/04/wikipediazh/index.html","03d81bf5ab58d281fdfc30a1d0b5c346"],["/2021/02/05/googlevoice/index.html","926b2c4ceae84e813dfef747abaa31c1"],["/2021/02/06/clashconnection/index.html","0b71e0e0fd3afa0fc5a29c2f976b6e48"],["/2021/02/06/gvtransfer/index.html","9d3e109c698f6a3aaeea67025ccd3586"],["/2021/02/06/todesk/index.html","824976f5db0704f86c033c95620cd392"],["/2021/02/06/vpnblacklist/index.html","80813c8ef8e6253dea967ace05645805"],["/2021/02/07/mklink/index.html","34e95d4cb561cb8009e7929ab4609a04"],["/2021/02/07/speedtest/index.html","4391fd905247e40a1f7d175c5e3b3e2f"],["/2021/02/07/translate/index.html","1fc3a56511d943542b83b4824b07f5a2"],["/2021/02/08/ewomail/index.html","f7b339d57e491d8c3f0e59932b40157f"],["/2021/02/10/officee5/index.html","c74bcd68241e715618209986eacc4c39"],["/2021/02/10/raidrive/index.html","05445f15dc5e781715222f60799c2f90"],["/2021/02/13/e5sub/index.html","e5391bc10343de3f3cd44c481254104a"],["/2021/02/14/screen/index.html","015a64f975323555cb908573e8b7308a"],["/2021/02/15/clashtun/index.html","6d1ba6cb8735d18d4c7c01750d249f82"],["/2021/02/15/messageboom/index.html","91eb24e4feb75b5e8d8547f674bb7004"],["/2021/02/15/oneindex/index.html","6b9cf7fb79e8884871d30b4bcc79a5e8"],["/2021/02/16/govsites/index.html","fc4cd1c5b471b662d19a0ce415ecff77"],["/2021/02/17/hexototypecho/index.html","16dd2e241775b952d2967b956905f81d"],["/2021/02/19/fiddler/index.html","622def0ebda165d1bbc180fbf1adf66b"],["/2021/02/22/potplayerset/index.html","e25d587789e66269f2c734d6088e1f41"],["/2021/02/22/studyresource/index.html","33380f90a073ca7d70c8b6faf2b8aefb"],["/2021/02/22/telegram/index.html","4f21a45330d8af5f7495df04e71f2c0e"],["/2021/02/22/videos/index.html","cbac3cfb6cb98097082376ad4dcdd242"],["/2021/02/24/mtproxy/index.html","c17828cda02eb6f1629444a1cf1bac9f"],["/404.html","8a2bebd3f1fb24f97a1ec550829d6a32"],["/archives/2020/11/index.html","c282a0c53bfd78c4eeb1ff5fbec8b322"],["/archives/2020/12/index.html","bd0535a98e0b11de3cc5400f110c3e82"],["/archives/2020/12/page/2/index.html","d17b9ecc03cc3a9d2dc0d227d366948f"],["/archives/2020/12/page/3/index.html","28ece6e623a1633d483abcf6c6f92f8f"],["/archives/2020/index.html","f24df42703da781265254f973b673f71"],["/archives/2020/page/2/index.html","c88b9a003052b82e5b3e9cf0a98b2027"],["/archives/2020/page/3/index.html","e79826d904a05ddacb3f4f467e9c908b"],["/archives/2021/01/index.html","4b6bb55b5f55c637adf32807ff8d3f84"],["/archives/2021/01/page/2/index.html","e838adcdea625fba15633053f10edf2e"],["/archives/2021/01/page/3/index.html","46ac4b53ae22ccf5736ddb4b08e8693b"],["/archives/2021/01/page/4/index.html","c8df70841832d0fbf6d7b85145d67c7c"],["/archives/2021/02/index.html","573609e3acae2e1464568b6137c79c5a"],["/archives/2021/02/page/2/index.html","c4ac7766feda6500dfcd2885741dbfa3"],["/archives/2021/02/page/3/index.html","0b2125a8fb99a8e9c32c95bdacf862a2"],["/archives/2021/index.html","7ff6a983828945b60f7c48a6e7aa8eec"],["/archives/2021/page/2/index.html","d6c4f8eb0d7454f08b10f867f80354f5"],["/archives/2021/page/3/index.html","48a54ebaa9b1834aedcaf6045fa30577"],["/archives/2021/page/4/index.html","f9f5a0d513acee524c9efbe3b0096d49"],["/archives/2021/page/5/index.html","36cd5d31d16821471ee5ed4a9c75d51c"],["/archives/2021/page/6/index.html","eab7a1b6b9c34f90874f87d80da80a65"],["/archives/2021/page/7/index.html","7085b86902bd7112faa2c0a07d4736e4"],["/archives/index.html","f6cbd5643ab07d1ca09ff0c4b04af493"],["/archives/page/10/index.html","dfe0db530e6dead1e5c3e1850925494a"],["/archives/page/2/index.html","b86a24e92b9b3ec45cc7738aac3dabdc"],["/archives/page/3/index.html","ac7540cdc1d4f0c096819cd9a58859ab"],["/archives/page/4/index.html","47c6404b104aa88e3826fc48bce552f9"],["/archives/page/5/index.html","0ffab8bacf35c2ade8ef390a87ea2912"],["/archives/page/6/index.html","e42f64cb50cf7477ac1a4de323ff2508"],["/archives/page/7/index.html","8bafac716f62fdf92ac3324523428709"],["/archives/page/8/index.html","d634eb97c6f7666cee5173f6baae6865"],["/archives/page/9/index.html","b0d97d7440f2d5aa937b0d4fa72b6ef0"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","100c1fe0b15554e1c6391dab64d2c5fb"],["/categories/index.html","d432982d06ba324b1a102d42a1affcb1"],["/categories/下载/index.html","25d4e2989f99e057807edc0a1f0a2acc"],["/categories/安全/index.html","351333c64d0a3bc89e97093d3de74eb4"],["/categories/建站/index.html","9ac07e14c21812c7d5167d6b22827cfb"],["/categories/杂/index.html","c23b22d5d02a676dbee4ae5aeab23fde"],["/categories/杂/page/2/index.html","f4cf7084d8f0bc0b113846eee7d436dd"],["/categories/测评/index.html","7fc2ec8c0ff1a079ad2c848634019f2a"],["/categories/科学上网/index.html","c167a7a33ab3896c61676b8cf7028543"],["/categories/科学上网/page/2/index.html","665e545137f5fc85bc06fcbe4b4f4874"],["/categories/编程/index.html","fc10f6adeca2bdd15394d98c740511e3"],["/categories/网站/index.html","b478c3066495b5f539cf807db9682d8d"],["/categories/网站/page/2/index.html","de9c65d5ad70696172f27de5fcbaf774"],["/categories/软件/index.html","aefa9bfd123df6a7ccd140e69c48382a"],["/categories/软件/page/2/index.html","e4e1f0517e566626f13ec8cccea1c7bf"],["/categories/软件/page/3/index.html","74669636410f40896319135a291b02bb"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","f8e1ea48b27b0781a8f37d712029652d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","222aaf66df77f6a956c10c2b9726709b"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","065a1d18bf195ad770d4e1909a7b04d4"],["/ios/index.html","9e4b14b34ab5cb150356928bdf5a6266"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","439d2a00cb3983f79157d171fd6a21c7"],["/page/2/index.html","b04f9e5b4a8d7d6e66dc875a4990dd61"],["/page/3/index.html","e4d3258630b09931969945d5fe1ed1ec"],["/page/4/index.html","98e3221f71259dafefdb2b39becbbfc4"],["/page/5/index.html","c91a13d3fab6f6af4c4746b20b3b55a2"],["/page/6/index.html","399a97c661a4ccb7e754af368ddbb539"],["/page/7/index.html","8122ec9cd888acebc6bb72214ab975e3"],["/page/8/index.html","3e8ecf250fe27604350a3aba7ac3070c"],["/page/9/index.html","aa63fc4f2e5dced6c1a9533576dea865"],["/payment/index.html","2871bc3a128eb6c23d66bd3ff5dd0929"],["/privacy-policy/index.html","52c4cbf6e11dc517b6f307a3fc860d43"],["/rss2.xml","dd6cf32550b1ddf90594fdfa027612ab"],["/search.xml","e1b209e401cb7dc6a1b0975d2e620949"],["/sitemap.xml","ea3d0451a8ba0d93d10ce3f7352e5642"],["/sw-register.js","c3b9675885eaacbdca9cfeba9e7d7d41"],["/tags/5t/index.html","2ce7607472c10916b5d1a0729cd56465"],["/tags/Clash/index.html","2bfe86d12bc6f86df9739d9288579286"],["/tags/Clover/index.html","e70c6e1b28d14d63f05672798068d42a"],["/tags/E5/index.html","93367234bf936c72ffb4a3ee36abbed1"],["/tags/FTP/index.html","62377b04491742daa228ce27306bf542"],["/tags/GitHub/index.html","5c96f6d1968317908815dd2fe3e0f5d7"],["/tags/Heroku/index.html","59a0501bff8c06a3818e2339f1d5adc3"],["/tags/Hexo/index.html","2c7714ec2d44f13a5a28c4a3210a16f7"],["/tags/Lenovo/index.html","e0d8b65901ec7a1555237fee7aa55a70"],["/tags/Oneindex/index.html","a8eab014da9993b60dfb2e06a5cc6fb7"],["/tags/QQ/index.html","52eb12fbb1e0842b09e474214f043ea1"],["/tags/QTTabbar/index.html","ef9c6d9b4f9eac0374fbabd2bf5444bd"],["/tags/RX文件管理器/index.html","c895b0009b50a6b6885f430cd2ae23a0"],["/tags/Todesk/index.html","aa3f9fac100f6d59a34bb695faacadaf"],["/tags/Vercel/index.html","d4403d52e7fb1bd4d13362f133b1cbf6"],["/tags/ads/index.html","93d1b82d26be4beaac9a63cd71f1b814"],["/tags/api/index.html","1a286d2c61ee709d1fc8415e08983962"],["/tags/app/index.html","2581c84d1e150db0067cdc4dd7e2d7f1"],["/tags/blacklist/index.html","119ceef3a6bb9dc8b75b9156aa7c6968"],["/tags/butterfly/index.html","7ff482fe29eafd0dae5d38d807c0e6d7"],["/tags/chrome/index.html","ba984b07d0f7e3689fc11db0f20ca54c"],["/tags/cloudflare/index.html","3e10b1b34e756d17b66603c598cf238c"],["/tags/cmd/index.html","c57913285e7a09e53febcf5293e3024c"],["/tags/c盘/index.html","63c0e4ad37f2b854bae297d537b2a302"],["/tags/email/index.html","6ea1f65e26c9a41f9556ab9b91350ed7"],["/tags/ewomail/index.html","5a31481c7afe378bd398c257d55c4f6b"],["/tags/fiddler/index.html","3a39b078d755db99b2689d3b05aa6925"],["/tags/flags/index.html","8fb56b8ec4ec7c46676e645d33ef3e6c"],["/tags/footer，页脚/index.html","c3e129655a76b19c734088c1e1f8dafd"],["/tags/galgame/index.html","233c0284eeff6f0d740ca79f29405f20"],["/tags/git/index.html","b232ba7199c75c88e20842ac10a8b1b3"],["/tags/gitcalendar/index.html","fc0feb24329516bb10b56e48deff0265"],["/tags/google-voice/index.html","800f0da1182e98d0aff7da770200a6c4"],["/tags/gv/index.html","304fded5b058ae9df2da322153030d34"],["/tags/index-1.html","c1e9820877aa9e271e6611167b36bf9f"],["/tags/index.html","f3f148d519047a201e9f939adb586567"],["/tags/jsdelivr/index.html","839865a0b7593a9664ebbb7fd297aea1"],["/tags/linux/index.html","c61b8f10efb742e70d1928852a00f437"],["/tags/madVR/index.html","c6a958ea1a9aa757edd99df788e793f2"],["/tags/markdown/index.html","f712a5026bcd70e2706f1eea2ec15f72"],["/tags/maya/index.html","386de9abb128318415168529c0fe7781"],["/tags/mklink/index.html","5448497d97b2416639c39556f77b50c9"],["/tags/office-e5/index.html","20f0116083f511d516413a06e4d526cf"],["/tags/onedrive/index.html","41d677eb359164958553a498d182c56c"],["/tags/picGO/index.html","b5ff78465083a937927ab10169850141"],["/tags/pixiv/index.html","d7651c11edb1dbb7555f74149195d698"],["/tags/potplayer/index.html","662e974ee3157e699d41fff6cdbbeab1"],["/tags/proxypool/index.html","6b62f8cd8071028573670cb05b0fc006"],["/tags/qbitorrent/index.html","458a7933e950980681a6589dfe0e5e5c"],["/tags/raidrive/index.html","a148e2762e3c7be951b45b9a9fd985ae"],["/tags/screen/index.html","43ca60e779899170f4114f8ac4ed46de"],["/tags/speedtest/index.html","515fad24606058ee14945146af3d417d"],["/tags/tap/index.html","17e0b5d1ebb9e340642337be22a42071"],["/tags/telegram/index.html","f42c044b34915cade457b62e0b5457b4"],["/tags/telegram代理/index.html","878456b56ebdb9296bbe891eef20b8dd"],["/tags/tg/index.html","c3bf6c8da1a87a44400b312bda8b70a1"],["/tags/tg代理/index.html","97905fe5c35f4a7f67f7ac5724633953"],["/tags/top50/index.html","c0793ffb52f62f3253bc317a78f79323"],["/tags/tracker/index.html","5289342af2e2b6d06b2ed8f4c4de754a"],["/tags/translate/index.html","fdfc945ae5569c5c40961e3cb2eb8ed5"],["/tags/translater/index.html","fb0cc4684cccfaf777806736fea7f0f5"],["/tags/tun/index.html","16084fb03577045749b163ae7b90b806"],["/tags/typecho/index.html","10305ef267eed39c5cc57fbf8e3aa6c0"],["/tags/v2ray/index.html","b7a0e1105d3f6011b7fb7dfad4939d5f"],["/tags/vpn/index.html","84888db533c388e2c8f82d431fd4d02e"],["/tags/vps/index.html","b01d8bf99392a7aee9099101b54446ce"],["/tags/windows/index.html","3cd1533df8e327a21aa3f04e7b647fe6"],["/tags/windows端/index.html","bc27e0a3315c7ebe3066afc41a8ad3f5"],["/tags/xray/index.html","d469501c82239ce4332962b6f3b0e268"],["/tags/下载/index.html","8b63e36356ea74572390b179a65357af"],["/tags/不限速/index.html","578a9d6e3da692b1ade6df0a5ffc7f1b"],["/tags/个人网盘/index.html","1f2cbdbdcad2e71164dfb539e92644a1"],["/tags/主题/index.html","250a1c40bba8621faf5efe70057caed7"],["/tags/云便签/index.html","6764de5d262287398d83e3179068e7c1"],["/tags/云盘/index.html","4aa074056c18497908372e89fe8ea6e7"],["/tags/人人/index.html","f56ef6a8ccb02a3a57c143ce97bc79d2"],["/tags/代理/index.html","5816a59044e75e54da9da02e5b934a60"],["/tags/代码/index.html","537e7e593506ab6038033f221f374820"],["/tags/优选IP/index.html","4d04ceefda7f2ea0925b4012534eb81b"],["/tags/便签/index.html","85aba868562678021875453e1bf611ac"],["/tags/保号/index.html","ba67a46eb12995c028fd560a6792f204"],["/tags/免费/index.html","f39d1269a354b6c2ef27b28bdd9e8d00"],["/tags/免费节点/index.html","e3a7e2229200c25bd6b86006ebd742cc"],["/tags/加密/index.html","d2ea843e729e523d312360b3c3fdebc6"],["/tags/动画/index.html","c2bfe1e5efdc5df6310ae5bad7327b57"],["/tags/博客/index.html","cc0be77d9157413596b5f8b34cc50000"],["/tags/历史记录/index.html","f9a593de0ca2a7b791270a46c3350990"],["/tags/压力/index.html","53d5142b83f50aea47299518c0cefb8f"],["/tags/压缩包/index.html","fd9044cd81c293f188f01db4bb398ef8"],["/tags/反代/index.html","e82a1b3f1ad6a102ab144d56b3db54ca"],["/tags/可视化/index.html","9a98acb98cdcd3545bc7fb7d1433f7d0"],["/tags/命令/index.html","8e379f9c33819d222b8bacbd0c67846f"],["/tags/国家/index.html","6f7289b4f2b74a74090f3016a0936dff"],["/tags/图床/index.html","b901d3cd5266bff19be2dff3b56d8031"],["/tags/图片/index.html","1fa0f8854f6be4856a4e136e67b90bf9"],["/tags/域名/index.html","a462c8e8be9496b9902ee58171394604"],["/tags/多标签/index.html","66930423a9495c8fb6b8a9219a10042a"],["/tags/存储/index.html","22c4582c566da73b922125b9663c81b4"],["/tags/学习/index.html","e1e9f790f13e73e8df27a3107d74772e"],["/tags/安全/index.html","0d26ee99e1aa0041bb06f532ce358326"],["/tags/安卓/index.html","0624e1852fa98774b6b93cc9a8fe125b"],["/tags/宝塔/index.html","54a010d08b1540a776808269c94b20aa"],["/tags/广告/index.html","a7a79a9bbdc0ee998425cd5aef71279b"],["/tags/建站/index.html","d17a4bc98c896cf5bcd685fa4b73b4af"],["/tags/影视/index.html","c6299ba3a3c198e55d785c615e19e22f"],["/tags/快速启动/index.html","67c75976cb48ba09aeda39ee26ebb296"],["/tags/手机/index.html","41831b0f2fffebe708d26e16b52883ef"],["/tags/托管/index.html","af4d7341228b2616547acbb92730f810"],["/tags/抓包/index.html","7e1d617f98398b6b1eeda25d0cf587b4"],["/tags/抓取/index.html","295593343a945a59a7669ae1163e9db1"],["/tags/投屏/index.html","ec7df4704f2a2a30a6f40384fec3c17a"],["/tags/拓展功能/index.html","a0cd791843609c169b63b52f3e26bcca"],["/tags/挂载/index.html","3eef9c7abddfa2e436883c530ec12384"],["/tags/指纹/index.html","10365eb595772548a2e48a652d61e025"],["/tags/接口/index.html","4c688e4bb1d85099f4576e7686695f74"],["/tags/提取图片/index.html","ed62f8817e9001bf34c7f85c42fe87ce"],["/tags/插件/index.html","9e37f323914931c7fe4c21c6dd7c4c83"],["/tags/搜图/index.html","f580269e3e01c0bb55b5e8d4eb805b0f"],["/tags/搭建/index.html","d9656ad54229874cfc05bba91027b4b2"],["/tags/撤回/index.html","56d54e2f46df0646bf026a897b5318f9"],["/tags/播放器/index.html","6e2cdabe9389ead7c0d66961fb588c01"],["/tags/政府网站/index.html","54d47dee03620a3f34d29f2eeb8f5c57"],["/tags/效率/index.html","20b62df25ea637603d3c10a7818ac15d"],["/tags/日历/index.html","461b404260b4de6bddaf36f876c503c0"],["/tags/服务器/index.html","7fea6229d8b0576c3cf880ce280109f5"],["/tags/桌面/index.html","9c36f1b36eb9a27d5a9a99b9dcd28e1f"],["/tags/梯子/index.html","1fac8290a981bf0bf41b70d19abf3e16"],["/tags/检测工具/index.html","907093c1ef7b081b7d698068ff026011"],["/tags/汉化/index.html","160d5de241318390893626715390debd"],["/tags/测压/index.html","2e7fd43358637871f0835e7db15f76c9"],["/tags/测速/index.html","27ab69a1a68414dc35c578b1d830a865"],["/tags/浏览器/index.html","81248fe0eea9051b39193312fc5c868f"],["/tags/清理/index.html","e515ff1ce04c7ad1d38511bd8c4dc104"],["/tags/滚动条/index.html","7f5983a4dc177b14b88c573577600489"],["/tags/电影/index.html","dfbfe9277243679d699e0cfa2f482890"],["/tags/电视剧/index.html","d73c5606316e6d26462e4f4ed4b7015b"],["/tags/白嫖/index.html","5e3c360bc48e2f65831032c419fe7480"],["/tags/百度/index.html","037b87e5289b8627c86454df10600c97"],["/tags/百度云盘/index.html","a98204a44919f1da62d9c0c8e56f63c3"],["/tags/百科/index.html","361d170100d0a0ba18c3bb77326d8854"],["/tags/短信/index.html","55859c037d518225cca174668320999d"],["/tags/硬件/index.html","fcb572a6d6059b927de2421ed3d372ca"],["/tags/科学上网/index.html","6d4b4d18e73febce6eb4017d9c03ddb0"],["/tags/空间/index.html","258ea72503ffe450e785ebf2662e9380"],["/tags/笔记/index.html","713cd24b91b15b7624a19ae47f6e8b1e"],["/tags/简洁/index.html","f9d9e9b2a8cc222666528b5a2b5dc835"],["/tags/简约/index.html","cac800736e67b0daa1a11b5a5db8d123"],["/tags/维基/index.html","6f55340ef2fd3a69fc0f06b30524047d"],["/tags/网易云/index.html","924ce9c5346582020faa0e102761dc6b"],["/tags/网盘/index.html","5654923d236a3fc2e409d6b0da3f7fc0"],["/tags/网站/index.html","edf7e1db9f7a445f53a5791c127b1c1c"],["/tags/网络/index.html","d3f195a9aaf9f279b8650cd5954f9699"],["/tags/美化/index.html","2fda24838896c037bd9da6f24ce59641"],["/tags/翻墙/index.html","471e3140056b99de38e60e30374bac02"],["/tags/翻译/index.html","46e2defbb4085bc38853c0aeb34fea64"],["/tags/翻译器/index.html","8d40cd0127b0ee4e91515caf1b5dce3f"],["/tags/聊天/index.html","815ec61180b9cd21cb7d5283c852d393"],["/tags/聊天室/index.html","adc4290c9be9bce3a4d2cd0063713939"],["/tags/联想/index.html","47f0d719be023840b5400df66f814724"],["/tags/节点/index.html","72b004254130cc6bbf7d9bbe7eca86b5"],["/tags/虚拟手机号/index.html","88a1b17d7737772d23b2dc974df5b1b2"],["/tags/补丁/index.html","2c57a72fd102401e3b246819653bebdf"],["/tags/视频/index.html","6b55964d23ced64934f9cbc81de91bb8"],["/tags/解析/index.html","87826bf1de8a726e846b82cc2d928802"],["/tags/订阅链接/index.html","f95bb048912c21cad7cb76fd00295de0"],["/tags/记录/index.html","7ecc1da641164aec206fbe39e11b3fc2"],["/tags/识图/index.html","daab9db2bd84a4de5373b63542a4aceb"],["/tags/语言/index.html","eaabc81203eabc13a9e49226b9841ab1"],["/tags/资源/index.html","41dee10359f378fb4e36dfdbc48aff0c"],["/tags/资源管理器/index.html","d50edde75417f4e6f46487e0ac67e840"],["/tags/转移/index.html","4cc0b82a13932c9d26831eb08bd72fba"],["/tags/软件/index.html","549a35edadd8ed7eb91d851636c2822c"],["/tags/轰炸/index.html","a7015ee153ffbc659d68439bac27be34"],["/tags/迁移/index.html","d64f25fe8cef540e85dd80f91b324906"],["/tags/远程控制/index.html","00799cf3473b3083fbda0bc2dd62166d"],["/tags/连接/index.html","f16c5fd1e98f052fa704753fccd6967c"],["/tags/追踪/index.html","40d083e616cdf1eec64e0836f72705e3"],["/tags/速度/index.html","da3618cef952598de0c3e2b9108b3f86"],["/tags/邮箱/index.html","43aaf4146b17e39b26a1b6c0f2b2671e"],["/tags/酷炫/index.html","fa3adb9bdaa32098725287308e78b8cf"],["/tags/钓鱼/index.html","aae27e605a8cd284596d71b0bd00563a"],["/tags/镜像/index.html","89da5c3266ec9a9d589a60f7ef8981ad"],["/tags/随机/index.html","1a50e638010643ca6ab32c2e0bb81df4"],["/tags/隐藏/index.html","bc8d4c83545115a4c9fdfa50548a9407"],["/tags/面板/index.html","bb2ff271e14e7d6ae3f783b7040a0568"],["/tags/音乐/index.html","26c3798e45c2671645cdc1b1be54ba09"],["/tags/高颜值/index.html","b62f2b4c7fd8cbb2794f5f464bd92e8f"],["/tags/魔改/index.html","a5043d6f38c158da8a05b7f5ee58405f"],["/tags/黑名单/index.html","09a91259fa26bd3b1388894316efcaaf"],["/urls/index.html","97c3f1e49b8dfdaa6d328a58554695ec"],["/vps/index.html","60e54a24e6f93cd069501b2bc66c3b6e"],["/支持/index.html","1f7eedb4e0a3d8a2391ca65d80767071"]];
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
