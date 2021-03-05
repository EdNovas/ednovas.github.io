/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","77fca2fd666b7e5ea7ad1f1ca0344b6e"],["/2020/11/29/clash-windows/index.html","ebd2efe72cbfa360c12722e041917c28"],["/2020/11/30/websites2/index.html","079edeca52514682072b8759abb21ee2"],["/2020/12/04/iphone4s/index.html","115f9bcdb5b375c2cb2ef2df49191c6d"],["/2020/12/04/onenote/index.html","750970a15f237ff8ba8c3d0ddcd7bbaa"],["/2020/12/04/wesites1/index.html","90d877324ba583ca9001b0ec5aa2c62a"],["/2020/12/06/nokia808/index.html","b2bd2bfbd822410fe97bfaf34f17e0fd"],["/2020/12/07/ipad1/index.html","b91916a0126dafe1b202af9b1a629cb3"],["/2020/12/18/freesubscribes/index.html","295a7e8f344c263cb2f0321adede6634"],["/2020/12/19/musics/index.html","a2fde0e422d258239c4fbeca26597aa3"],["/2020/12/19/shadowrocket/index.html","60b137b756a10a9f31cbec121c094fbb"],["/2020/12/19/v2ray-windows/index.html","db36e404cd90d48f4b682f3d937d31d4"],["/2020/12/19/v2rayng/index.html","1fed5d6915bbb621911197e6bb24f29c"],["/2020/12/20/beoplay/index.html","1a3d3f990d518836c6287d14464e818e"],["/2020/12/20/订阅链接转换/index.html","29f80d99c87487ab5f35f1bca8357ef0"],["/2020/12/21/chrome浏览器下载提速/index.html","ea81c323995de3a27a9c6a8e42f13a24"],["/2020/12/21/免费128线程并发下载xdown/index.html","788397ce466bd3992c760f8eafe68b98"],["/2020/12/21/免费32线程下载软件ndm/index.html","bece670e8a6ad4cec6fbba76476f5a98"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","0caabd5b4533c1e74b6a7904cff4f124"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","c53b3ec500b64dc47fafb29688bb2e66"],["/2020/12/21/广告怎么知道我在想什么/index.html","828bae7fa69fa181a5bed422cc4036e3"],["/2020/12/21/无名·引子（小说试写）/index.html","2df8f121e5688a651f4379d0469a6438"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","0b6f40f50c6ac2f9b3240123647cb986"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","cdd0a3264d067de843699a13d2640624"],["/2020/12/21/高速轻量下载器aria2/index.html","2649ff90d4734b24bf07048e3f709c66"],["/2020/12/22/2020-cee-roo/index.html","bafc8b287318a57780a406e343c63f10"],["/2020/12/22/firefox插件、github、steam富强/index.html","d043be8844019cfbee4ea090f83e164c"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","63131b9a89eab60807e513f232b93fab"],["/2020/12/26/python-day-1/index.html","113035434e7857a0c2722162242dc627"],["/2020/12/26/python-day-2/index.html","0e64dca2cb4890d86e74ed54a9697c05"],["/2020/12/26/度盘不限速下载方式一赏/index.html","d044b2e658d0f0d255c2f14b0137c81a"],["/2020/12/26/添加开机自启软件/index.html","b840c1f7763386b2787094b21001474f"],["/2020/12/26/电脑端截图方式一赏/index.html","f31127252b8fe4ab658ae9a07412220b"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","a6c03bb3b56efbc49e9a79bd734adbe7"],["/2020/12/27/最安全的浏览器tor/index.html","1d64b2933347159b44a52951ad021c1f"],["/2020/12/27/网易云刷等级和听歌数量/index.html","87db2660579477b9b85d620047cb2681"],["/2020/12/28/freenom申请免费域名/index.html","a95dac1420c5b3e118339a74df12770f"],["/2020/12/31/机场/index.html","83ac38b34345c249079fcfa31cc3ebac"],["/2021/01/01/M1/index.html","0077f778976ba0c9becaf403e56c2e30"],["/2021/01/01/compress/index.html","7a1a097f72b68b3a8e0ef70bd6c3103d"],["/2021/01/01/infinityfree/index.html","787b0049e1f1d23e75c497bc99e6f270"],["/2021/01/01/硬核翻墙/index.html","fe25906cf575934fb1fec0f44df706a7"],["/2021/01/02/qq/index.html","6f683577bd175815dbe6925d21e98674"],["/2021/01/03/netch/index.html","9d39b53d2079b4d4f3e5577e13062b52"],["/2021/01/03/waifu2x/index.html","4f1a4864cd7a18c05519f4adcdf45f66"],["/2021/01/04/ads/index.html","76883df6cd55e21b6f5c3ce021adb13f"],["/2021/01/04/games/index.html","d41c521549769a370532c4bf7eedeb00"],["/2021/01/04/heroku/index.html","cc483dba4b184925266211ee9cbc948b"],["/2021/01/06/movies/index.html","1398b0a85c50d2ccc2dfe4ab849edd28"],["/2021/01/07/google2020/index.html","5d7b737d3ca41746b52992c6adfc9b2d"],["/2021/01/07/lucky/index.html","62ded15563b437c12eef20d8cd06836a"],["/2021/01/07/spotify/index.html","1fe168012b493001e368e661326238c8"],["/2021/01/07/thunder/index.html","3ede3a3283221f46bfaea92d67609ed9"],["/2021/01/08/adguardhome/index.html","e76df78710be73600dd40d239042e69f"],["/2021/01/10/IBM/index.html","eb898dd1348da49f26e47972abf1fc55"],["/2021/01/10/potplayer/index.html","708bc4cab2f3b7aab19d6167682c05b2"],["/2021/01/10/sakuraanime/index.html","fa9740f3687bfd1d10737805d591ce57"],["/2021/01/10/美剧星球/index.html","e960909ca55c6ca9471626a351b0a928"],["/2021/01/12/telegraph/index.html","2db7fcdf5780e93ffa112f4ad5e7b84a"],["/2021/01/14/comics/index.html","e215724fece9c301d06c38e92737bf64"],["/2021/01/14/ftp/index.html","aaa33111440369e12b7af624415a716f"],["/2021/01/14/oraclecloud/index.html","d743545c56037687e148690b92efb672"],["/2021/01/14/porkbun/index.html","6ba873cc48182b24033df610bfd9a7b3"],["/2021/01/14/powertoys/index.html","0c5f630b31ad140ce6d9415756c99945"],["/2021/01/14/taptap/index.html","49e791582948fb5f253ae5da4e810688"],["/2021/01/14/ubuntuvsftp/index.html","05f97e5649b2aefdfe1bcf5f803a3ae2"],["/2021/01/14/小说/index.html","cf9e11e934a8e573f9da948b393b957b"],["/2021/01/15/freeproxies/index.html","44e8cbf11f3cd9e18e6d47e035b12797"],["/2021/01/15/incaseformat/index.html","6cf240356d86e8663acb31a1fab9ad40"],["/2021/01/16/euserv/index.html","752656e336dcc873950e3020d46080cb"],["/2021/01/16/winxray/index.html","ced841bb3e1c5d4da9ba23ae611c656a"],["/2021/01/18/qqreadhistory/index.html","85fab501ad69e5f67f78abf7e32e34ec"],["/2021/01/18/qqrevoke/index.html","d757ef23baab487484b1028f1dab397a"],["/2021/01/19/freevpn/index.html","00f70092d9a9e11ae430ffba5171283a"],["/2021/01/20/browsertrack/index.html","b6200e0ad63f791e989c541f6e811f62"],["/2021/01/20/v2ui/index.html","92ae565ba0fb868b4036f35cbebf704c"],["/2021/01/21/failedtoconnect/index.html","e62948ecdb4f8e7a17bfa5aa3f4e1b83"],["/2021/01/21/gitcalendar/index.html","3b3c3b573df8709b0e10d7f401004758"],["/2021/01/21/markdownformat/index.html","6b13b14f2c5e86a5a8bfca1c4b05888d"],["/2021/01/21/markdowntable/index.html","9cf809b6e3f05d9460b97cdaa72ee9f9"],["/2021/01/21/vercel/index.html","c7b063bd24d42a36bafe7ba7add85cce"],["/2021/01/22/hardware/index.html","6bad3350f034556b445af00fd08575f8"],["/2021/01/22/muviz/index.html","e02504b7d652319ccab017eb91f75011"],["/2021/01/22/randomapi/index.html","c2c4e24dc61d81c54ed39cc41baaeea6"],["/2021/01/22/searchimages/index.html","65dbf88aea192376c98b38151e32d2ff"],["/2021/01/23/RX文件管理器/index.html","6475d9b5707c44313faad4cec79f278e"],["/2021/01/23/chromeflag/index.html","5076cc7234c73b12ed1a53c2659c489d"],["/2021/01/23/qttabbar/index.html","de4f0e18610a4ac437eb0279c3949cc6"],["/2021/01/24/githubspeedup/index.html","2e7afedc043288bf508683af49046927"],["/2021/01/24/jsdelivr/index.html","fa7f9cde47587edea0e624d1eb963fdf"],["/2021/01/25/note/index.html","f4071b30c538d756183d002f1d38af22"],["/2021/01/25/soul/index.html","8876c9e632f196187d948e7d4403ac5e"],["/2021/01/26/herokuxray/index.html","6e4182700df51310645f9f95818e7c54"],["/2021/01/27/proxypool/index.html","62593cce5bc9f569405c9e29fe053a61"],["/2021/01/27/tracker/index.html","041dd7c3cd16b9ed3f7cee40c7ff1d8b"],["/2021/01/30/pandownphp/index.html","038e43d58ab35ef7c6ba5af3be26a3b2"],["/2021/01/31/newgroup/index.html","8da62438f3073a4a15fef875908a0c33"],["/2021/02/01/clashlanguage/index.html","2c47ac7067a6aec7f6f7005891552d93"],["/2021/02/01/encrypt/index.html","07cd94ef24438562d3e74cedbf07f072"],["/2021/02/01/footermotion/index.html","b0643a804ebb8d7c3dc73ac15be1f0ef"],["/2021/02/01/gitter/index.html","4fd738f206ba0a7fc6ce36a46ba9158c"],["/2021/02/01/pixivtop50/index.html","e573170512780aec12a9c39d91498ead"],["/2021/02/01/scrollbar/index.html","b98daf6c5d4a5becd9a7b5a173c5c62a"],["/2021/02/02/clover/index.html","0ea30d1cd7f438793fb23ce911f210ce"],["/2021/02/02/maya/index.html","f9f0ae1f4c07250ddd45ffdf1bcbd670"],["/2021/02/02/speedcontroller/index.html","7804b2a8879117ce985170fc53a20dc8"],["/2021/02/02/yesmusicplayer/index.html","fb7eb0b6a5ff7d65eda6c7fa610eb920"],["/2021/02/03/lenovoonelite/index.html","2c93215a94f84c38e53f1b3ee3deb67f"],["/2021/02/03/skipads/index.html","e43d8c32cfc76317ac487e400a62cbb8"],["/2021/02/04/picseed/index.html","f42f70e856d4f3c31f60b8b609a43291"],["/2021/02/04/renren/index.html","bdb6bea08b0d7c1da1823be1489e39a0"],["/2021/02/04/serverstress/index.html","ca2a10f3083de76f9e5abf0d0e4db2da"],["/2021/02/04/wikipediazh/index.html","03d81bf5ab58d281fdfc30a1d0b5c346"],["/2021/02/05/googlevoice/index.html","926b2c4ceae84e813dfef747abaa31c1"],["/2021/02/06/clashconnection/index.html","0b71e0e0fd3afa0fc5a29c2f976b6e48"],["/2021/02/06/gvtransfer/index.html","9d3e109c698f6a3aaeea67025ccd3586"],["/2021/02/06/todesk/index.html","824976f5db0704f86c033c95620cd392"],["/2021/02/06/vpnblacklist/index.html","80813c8ef8e6253dea967ace05645805"],["/2021/02/07/mklink/index.html","34e95d4cb561cb8009e7929ab4609a04"],["/2021/02/07/speedtest/index.html","4391fd905247e40a1f7d175c5e3b3e2f"],["/2021/02/07/translate/index.html","1fc3a56511d943542b83b4824b07f5a2"],["/2021/02/08/ewomail/index.html","f7b339d57e491d8c3f0e59932b40157f"],["/2021/02/10/officee5/index.html","c74bcd68241e715618209986eacc4c39"],["/2021/02/10/raidrive/index.html","05445f15dc5e781715222f60799c2f90"],["/2021/02/13/e5sub/index.html","e5391bc10343de3f3cd44c481254104a"],["/2021/02/14/screen/index.html","015a64f975323555cb908573e8b7308a"],["/2021/02/15/clashtun/index.html","6d1ba6cb8735d18d4c7c01750d249f82"],["/2021/02/15/messageboom/index.html","91eb24e4feb75b5e8d8547f674bb7004"],["/2021/02/15/oneindex/index.html","6b9cf7fb79e8884871d30b4bcc79a5e8"],["/2021/02/16/govsites/index.html","fc4cd1c5b471b662d19a0ce415ecff77"],["/2021/02/17/hexototypecho/index.html","16dd2e241775b952d2967b956905f81d"],["/2021/02/19/fiddler/index.html","622def0ebda165d1bbc180fbf1adf66b"],["/2021/02/22/potplayerset/index.html","e25d587789e66269f2c734d6088e1f41"],["/2021/02/22/studyresource/index.html","33380f90a073ca7d70c8b6faf2b8aefb"],["/2021/02/22/telegram/index.html","4f21a45330d8af5f7495df04e71f2c0e"],["/2021/02/22/videos/index.html","cbac3cfb6cb98097082376ad4dcdd242"],["/2021/02/24/mtproxy/index.html","c17828cda02eb6f1629444a1cf1bac9f"],["/404.html","86853919099220df4d1b312f76a45bd6"],["/archives/2020/11/index.html","de1195554afaf9b4f428fe52effb7dd3"],["/archives/2020/12/index.html","5e7f8fcf0948622abb471e88f900dcf8"],["/archives/2020/12/page/2/index.html","afe65f201706b3c490f833a4f196891d"],["/archives/2020/12/page/3/index.html","928413bf7de3466d5c2a31434a7465de"],["/archives/2020/index.html","725e884abd88a6dea1a3537bb26bcc40"],["/archives/2020/page/2/index.html","606d4bce036bd85f362a962cfc24274c"],["/archives/2020/page/3/index.html","0f62d9bfd7b6807b3f3f2e3cbe81481c"],["/archives/2021/01/index.html","ecbd90c1b378bb0e8f83155ce85c3f8e"],["/archives/2021/01/page/2/index.html","2bd399f791b5db031bebd45bd39aadf4"],["/archives/2021/01/page/3/index.html","e2fc46de2e156b465ace725ef10e009d"],["/archives/2021/01/page/4/index.html","2b5a89958488efa5be871914d236b823"],["/archives/2021/02/index.html","0906f9e7a5419ed8c020442e2643eae8"],["/archives/2021/02/page/2/index.html","14155bc0639b63da3d826f96fbb9c041"],["/archives/2021/02/page/3/index.html","3d0703eec59a2f5f7735e3d2c35633dd"],["/archives/2021/index.html","f579d4e60c55b711af88f19bb9eec00d"],["/archives/2021/page/2/index.html","59492c2241e02d891819ad1c2ca52f5a"],["/archives/2021/page/3/index.html","cfb3555290f5a520c608f4a1c8f35205"],["/archives/2021/page/4/index.html","a5a8178c3faf3f6e30212b04879d3586"],["/archives/2021/page/5/index.html","a4f6945f53e164f73fa4438db379ecb6"],["/archives/2021/page/6/index.html","e0a2e31487d9c45a15870118f3135fe8"],["/archives/2021/page/7/index.html","1c88b7f58458f726514c910f8355bfeb"],["/archives/index.html","65f5c788d275a2a64df25d15bd919ef2"],["/archives/page/10/index.html","58986eb05136327141bd395359a19115"],["/archives/page/2/index.html","53f8c5cb613428c911b9b659c6bd7085"],["/archives/page/3/index.html","e85d058cf829018c765a9b0087fc508b"],["/archives/page/4/index.html","1570e7f9fab9b911aa7769475304bfc9"],["/archives/page/5/index.html","e647c4b52e12ec81fab56e919a8a9541"],["/archives/page/6/index.html","606dc33016d32b226f7b70c892a206de"],["/archives/page/7/index.html","e96f07807b1d4ea0a97f9156a3d317bc"],["/archives/page/8/index.html","c771a853ef60fbd4458cacfa06ccaf7e"],["/archives/page/9/index.html","5ee13f75ee2659b6af78311199a62574"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","27fead4df3c85b9fbcd327ad3d28ac22"],["/categories/index.html","97916ca4d4660d5223001c6293daef8f"],["/categories/下载/index.html","5f3a04caa39d5ff42acdd996ddb712ff"],["/categories/安全/index.html","6e2e0e01f55faec0bb765f7d51663231"],["/categories/建站/index.html","a2cbaa5f4eaeddf4923f8e1a357d71d9"],["/categories/杂/index.html","2ada11df2593aba57edcebe874ea4ff3"],["/categories/杂/page/2/index.html","33c90c895fb9cb39621ff59d75ad5f65"],["/categories/测评/index.html","3268e04a8778de83080b5a64bbd218a4"],["/categories/科学上网/index.html","e60ed7407a0350f43e17a41051d6ee8f"],["/categories/科学上网/page/2/index.html","f79cc78955d6e428af9df7675a4e678e"],["/categories/编程/index.html","d9269e7bc11e4bbf306d2bed6745d2c2"],["/categories/网站/index.html","dcff1971af9ab2846c54aaa2929fa46d"],["/categories/网站/page/2/index.html","4d4ad0db625fa20e82a663b257899d23"],["/categories/软件/index.html","90084f813522e2dff24f574480d82251"],["/categories/软件/page/2/index.html","4d9ebe7813751ccead405d94c4121af1"],["/categories/软件/page/3/index.html","d6a6c61f2f257d4c299357d4b0e7f283"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","4e903b8a8b51d2ade855de5ff65dcbc7"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","829fb75024016773645f87f3acc19113"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","5fd4eaef9c78dbe4526a19a6a9a2cd6b"],["/ios/index.html","609a5ddcbec61a8b9eb58584a6931fb2"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","0b024aec1b24cc1cc1e26faa0b23ee43"],["/page/2/index.html","ef2a43a651b1345f3961621619e47cc3"],["/page/3/index.html","4ab75a08110423d7406a025ba30a3b32"],["/page/4/index.html","21efa150d397162f08fa6d3063e3c178"],["/page/5/index.html","f0322133dea838ba2c8f562c589d97f9"],["/page/6/index.html","77caab4494cf9a0c7c42f0241361f066"],["/page/7/index.html","082c50089bd13e312cc11228c6f183be"],["/page/8/index.html","be789b53802a3b3f4fa51e835b539abd"],["/page/9/index.html","688fc9c45f194e919ce682580d66d143"],["/payment/index.html","ee100ff00128b4cedd97ffae5c220cbc"],["/privacy-policy/index.html","023289d9d9060a7b7d8028bc10010be2"],["/rss2.xml","3bb2234253456028a7a5079246ab30f6"],["/search.xml","0f2973150f47da03831332d534de5b37"],["/sitemap.xml","6fffb09a24d48341d6e506f5191e4e76"],["/sw-register.js","ac3b94a12558dcf2632f16acd11d2a71"],["/tags/5t/index.html","4fe29e1ad6aaa19009e836b9c412a1ec"],["/tags/Clash/index.html","ce5f85cce3df13891f5853c62bb6fc80"],["/tags/Clover/index.html","9178552edcf183a051fd613bac5e55c1"],["/tags/E5/index.html","a5a9a8f6f1a0cb1b8c83ba1090b9d654"],["/tags/FTP/index.html","0462e9ae7d190acac8073c9158d70951"],["/tags/GitHub/index.html","09ca7541961c71fa23bc53281ef6c616"],["/tags/Heroku/index.html","c14807bf62b59c1b26bdb71d48c9c99f"],["/tags/Hexo/index.html","81fa3a4a8126909fd782ddc4a793da9f"],["/tags/Lenovo/index.html","9353f4955bedbfb2b08576910213cfa9"],["/tags/Oneindex/index.html","952d2a37d8febd34cb775920cab6c928"],["/tags/QQ/index.html","03aaaa162f2cc3827c0208572f777909"],["/tags/QTTabbar/index.html","97b446771c777f8251c3352498fe888d"],["/tags/RX文件管理器/index.html","4fcefd9969745304484a4936a4ea6844"],["/tags/Todesk/index.html","aaee023041d811a05f905fc3c9fa3120"],["/tags/Vercel/index.html","1f66c00af87210e4e44990d6673c6db2"],["/tags/ads/index.html","206b00a71b82139ced050e465da7b2cc"],["/tags/api/index.html","f0b686b6485c64a680c1ab38292b5ead"],["/tags/app/index.html","665a9d2c0fd86deaed05191a1e80ff91"],["/tags/blacklist/index.html","d9c0b89d14b18453e57c7eae4912f2ef"],["/tags/butterfly/index.html","a9dba46938fc7fe56450d9675d74ef92"],["/tags/chrome/index.html","bbe082d60f28e94bece47322538b237d"],["/tags/cloudflare/index.html","5b668b2947afa78d93afbb881678254d"],["/tags/cmd/index.html","6eee6ec039fe4dc771cb4ac00c357e95"],["/tags/c盘/index.html","a56b962bfb6c8324c2f4f2f70d503fa2"],["/tags/email/index.html","6332904955d4e2c469804e7dd5eb070c"],["/tags/ewomail/index.html","d6a5aabd1a067f698f82b93f25c6707b"],["/tags/fiddler/index.html","ed9ec83770f702381925f5681619970f"],["/tags/flags/index.html","37938af1d6570e0ee078e82c243a05f5"],["/tags/footer，页脚/index.html","f836c131b8fb8aa8301c85a4c34e91e7"],["/tags/galgame/index.html","66fb6683ee2ca86231b50683ecf20374"],["/tags/git/index.html","68d8cf918cb483c8567b4acc18f25ecd"],["/tags/gitcalendar/index.html","aeb2f10a4b3df037244d7c423b8aa636"],["/tags/google-voice/index.html","4d4404f2254bed164964330271ae0d69"],["/tags/gv/index.html","58c5696b8cb1d5daca09c7539da07098"],["/tags/index-1.html","6fb943e89c7eed9b114ff84067753e16"],["/tags/index.html","d13af70e1689783d4109fac54321ac70"],["/tags/jsdelivr/index.html","791f38fe323c66ec897a147557877a82"],["/tags/linux/index.html","8af6ec09b07707182fd6711b00805f48"],["/tags/madVR/index.html","d6ebc40017b2d54f2fe8e432e5acf08b"],["/tags/markdown/index.html","47c90d8728d369ad6e7c1426365b1f8b"],["/tags/maya/index.html","0a0f54e049516447bb442455a160c0d8"],["/tags/mklink/index.html","9a5ebd9de443c6403985c3d467dfec89"],["/tags/office-e5/index.html","09d8a4070ea57609bb30f6c3e5d3a4f3"],["/tags/onedrive/index.html","8b98e2adeb04d81e4511f4086007d637"],["/tags/picGO/index.html","f3f6fdce0b7feecfe528128fe326c9ee"],["/tags/pixiv/index.html","b17328f6667ba286e9bc8e5288119bc2"],["/tags/potplayer/index.html","20ece7a74b8456dc9a75bbf83ca51fe2"],["/tags/proxypool/index.html","59be585a3d829649f1d37382f637b1b7"],["/tags/qbitorrent/index.html","1a94ebe9a4c02e7a50f9a53185f9bb77"],["/tags/raidrive/index.html","355679653696735126a1db658d37476b"],["/tags/screen/index.html","505598397fff49c18ceed7ee82ce9f7c"],["/tags/speedtest/index.html","8893210c7dfb559aa2e894a04612cc9b"],["/tags/tap/index.html","57d330eb97d99dc139c69b8f3dc564a4"],["/tags/telegram/index.html","fc98dcc090d6ba97af2aef02b7f6d305"],["/tags/telegram代理/index.html","31a923097e6258ef1b60fd6f438eacea"],["/tags/tg/index.html","3c1feab16b432eac7309afdad89d13f6"],["/tags/tg代理/index.html","90f54dc8fd4cd50f245165ad42d89e2b"],["/tags/top50/index.html","7cb40483fec012a835b3c59bb440751b"],["/tags/tracker/index.html","ae5a56db71a5d722bce85af0558fb359"],["/tags/translate/index.html","9842dd8c97d9ef3b6696635f84c0916c"],["/tags/translater/index.html","2f8a001ec095a123e1a07822935dd4c9"],["/tags/tun/index.html","c55d2fa25d242ab1810714a18e4471e8"],["/tags/typecho/index.html","2214a5ca423c6421f40b71e831d92e03"],["/tags/v2ray/index.html","1116fdacf3b2711f7e272fb04fa6b0ce"],["/tags/vpn/index.html","fff74db8a06738d25d9f7ca0ae978085"],["/tags/vps/index.html","15def1bd324a37ea587e1ecbd38b6f8d"],["/tags/windows/index.html","382a8844eb0d5fdde8dcc38e85c06dcb"],["/tags/windows端/index.html","b4f958ea77ff1a5b290734e1ce073271"],["/tags/xray/index.html","3ac9f5c8c29725d435e3e1988c413e59"],["/tags/下载/index.html","81182c7fe8005e33a45673228da2b8df"],["/tags/不限速/index.html","e2ca93184bf4461308772658e3b659a9"],["/tags/个人网盘/index.html","7bcd18ae03956a1ed81ca48d9aa1b249"],["/tags/主题/index.html","aa99b68c9d8c6a2de2a74626c746e7a2"],["/tags/云便签/index.html","e3d5569f51225b9279a227eff8c053d7"],["/tags/云盘/index.html","b1502226aeb2145bfc9ccd3edead7c17"],["/tags/人人/index.html","22f80dc9659c7a5c6f490c35e45c781a"],["/tags/代理/index.html","e37a3ad5b13c30344b432b18a06e9efd"],["/tags/代码/index.html","dc471d3c03e06c45d5e78cd2a6a81858"],["/tags/优选IP/index.html","28c4503a39b2ceae8647bbdd98b74bea"],["/tags/便签/index.html","0bd4d11431f9b7dbcfc364a605dafdf9"],["/tags/保号/index.html","95a8009c6c4ea24b42784bb6bb7153e7"],["/tags/免费/index.html","25a384dbd9b7bc7f8ed4ff2d7613ffb2"],["/tags/免费节点/index.html","9b5850abe72b794f281344813bbd1f57"],["/tags/加密/index.html","210e1135c53e08f386485aec5ad51fac"],["/tags/动画/index.html","2af4fd50212faaaee3848ff5cbf10457"],["/tags/博客/index.html","88d7cb6941da2309c9e6a11100cdb089"],["/tags/历史记录/index.html","a3c7a4d245a6e8f12f56290014b76e3c"],["/tags/压力/index.html","b95a8c49646b73967cf214349e8d5575"],["/tags/压缩包/index.html","41063d4eef04e33df30f5bf402f6c655"],["/tags/反代/index.html","ebee4b8bdd620f5d3c76c6a232b3142f"],["/tags/可视化/index.html","4db85b20c1cf8ff22961d1a0ee12110c"],["/tags/命令/index.html","07b1461c18762e90831878e02c0054c6"],["/tags/国家/index.html","a3e86d15f8896f48c0b4b1f129428215"],["/tags/图床/index.html","0bf78ec56a863c3cd4209bb20170d540"],["/tags/图片/index.html","ef472d9b223442147adfe590667cef95"],["/tags/域名/index.html","b5f2b38c7631f932ea399f35b7e5dfc3"],["/tags/多标签/index.html","ffbbaa9fced1430abf1002bb9c94bd3a"],["/tags/存储/index.html","01e1fe85ce3504e2f7fd2f47b8dd1941"],["/tags/学习/index.html","1855cf6543a31e8cbfd8a7a76bc83561"],["/tags/安全/index.html","86c8b4400c3278123eab3d9d93a2b069"],["/tags/安卓/index.html","06185a97c304ca8cd00693efb70e052f"],["/tags/宝塔/index.html","7138b0c4b1d6152c4681fc741d863aa6"],["/tags/广告/index.html","75493a9e037cc60fbf961dd820299ee8"],["/tags/建站/index.html","7f2cc05844cf0784d00d3e9edc8527ff"],["/tags/影视/index.html","c1af1d159898e7694c5176afd167a851"],["/tags/快速启动/index.html","f3cef604972c11728add15c64a560ebb"],["/tags/手机/index.html","6e4901a57d650a7e33b33a68c3506c1e"],["/tags/托管/index.html","2163de259214345163bfa8b4146b43e5"],["/tags/抓包/index.html","943000324f9fc83b044106cddbc2229a"],["/tags/抓取/index.html","c0737cb12ea24ee167eed69182b92a32"],["/tags/投屏/index.html","dadc61169e04867671c116fa22468f27"],["/tags/拓展功能/index.html","49117588b186aaa866cff15d2d05a956"],["/tags/挂载/index.html","56605cc1ff25206184f2a294580b021d"],["/tags/指纹/index.html","38e0bf27f1b41cd0dbdb2caa742f8743"],["/tags/接口/index.html","db128413b5a57e0f3a7970e7ade0c3dc"],["/tags/提取图片/index.html","e14fa025c25765f50f22479575c645b7"],["/tags/插件/index.html","a1efd7423187ab926608bccc4e227f6f"],["/tags/搜图/index.html","7ac597bb6af69dc0e8afbb7cac036d04"],["/tags/搭建/index.html","b5bf8738e25b76c4f244e3297b8e6fad"],["/tags/撤回/index.html","5aea563f25721176e4aa4dd492120734"],["/tags/播放器/index.html","c30b35e0bb245f7bebddb05aaaf06be6"],["/tags/政府网站/index.html","fe4ab1bb30ac26661f49fb9a1aa3d1e6"],["/tags/效率/index.html","e5883ee3862cc8669173c00806881319"],["/tags/日历/index.html","2b76de333066c1fe64d69f9605354563"],["/tags/服务器/index.html","6218f1b18c275726680e9eac29e308ba"],["/tags/桌面/index.html","e52d7a14d2b8eda1d446ab3a98e0e623"],["/tags/梯子/index.html","3f828138ca716cb70088cba15b98ee46"],["/tags/检测工具/index.html","23fcfd94be6d9965a9c3f89132bcfafd"],["/tags/汉化/index.html","c9b5107285ad048551bedbdde8cc7b9e"],["/tags/测压/index.html","eba5d40113d2e49b3f6145647fdc594f"],["/tags/测速/index.html","f2aba159669d88c7154a8fd450ab91e6"],["/tags/浏览器/index.html","08968d0f15db0084adf9f585d8d7054a"],["/tags/清理/index.html","98ed91dc1fa86c5f54a89fa3a080207a"],["/tags/滚动条/index.html","7038225f820ca25883db54cdedfc8828"],["/tags/电影/index.html","812ea093530c3d835736786022a82177"],["/tags/电视剧/index.html","343557ee2a734976ec6c80e49ffba3a8"],["/tags/白嫖/index.html","38640942f0633f7263443b71427df451"],["/tags/百度/index.html","0f95805058826d52fa4275651d24ef51"],["/tags/百度云盘/index.html","f90dc78b093c0c67b0c7e2dca7c40101"],["/tags/百科/index.html","0e29c67f10adc2f612bc1a0da682a0de"],["/tags/短信/index.html","40770f33beabb4f1338d77da59f8d1cc"],["/tags/硬件/index.html","1bbc24e97efce390d46f1ed434f04b05"],["/tags/科学上网/index.html","5d0796c8cf268c0724095aab5b157325"],["/tags/空间/index.html","72b6c8e7bfc51a6c1d050b5b8f28a089"],["/tags/笔记/index.html","e13356a0a37143a050f460fd7f0c1acf"],["/tags/简洁/index.html","56a0fb09e9d98dfa1a3304540d6b04c5"],["/tags/简约/index.html","0d846aa3ee4fe657c34a7d4df204e1b6"],["/tags/维基/index.html","11aacc52c16bff18efded8dd41675919"],["/tags/网易云/index.html","f585c153cb6a499b813edfd85b837313"],["/tags/网盘/index.html","c476c33adca12494d077b6427b7a84cb"],["/tags/网站/index.html","a337fe6d577a72988071567b1a47d3ca"],["/tags/网络/index.html","8ea87e5da1016078210c89ff8dbf8c7d"],["/tags/美化/index.html","1f6a792a57f5f90cc8d49211ef081340"],["/tags/翻墙/index.html","086761efbc475ac4b96e41ef5ce4b6c0"],["/tags/翻译/index.html","12c47d8a1da7f94f4d6f5a699da8ec62"],["/tags/翻译器/index.html","4078f9e4bbc0ee11301b11cc7870f699"],["/tags/聊天/index.html","4e2625535917cd745fc19a62e43ef87b"],["/tags/聊天室/index.html","967ed3ec61304a64dd2ef25d2e9677b6"],["/tags/联想/index.html","e7a4195807bbc65a6ddf7c0c8741c5a4"],["/tags/节点/index.html","952d5a91296fce02533f96f8f4c9ba80"],["/tags/虚拟手机号/index.html","06e37865f336c9d6cdfa55133ec83e2d"],["/tags/补丁/index.html","661180d84eb1df971e0ffa32b0168217"],["/tags/视频/index.html","1b75729e9e1cee1cfee5f08379b76677"],["/tags/解析/index.html","73cac3cd8a1bb0accdcd85144e07b695"],["/tags/订阅链接/index.html","66d6f9b836d3cedac6daf150f48585b4"],["/tags/记录/index.html","f00ad821bcbe706a72b213935e5b204d"],["/tags/识图/index.html","6911fe4d94149c313a93fc7a05085b09"],["/tags/语言/index.html","2dfa3eb6de9138aa4c195a42822aad23"],["/tags/资源/index.html","c9f1a2eeba449d6e89f2b6d0e6942433"],["/tags/资源管理器/index.html","56d1dde81e2e5a88efb6a437ec6335ce"],["/tags/转移/index.html","87b0f15f4637253fcc3520faee2cc052"],["/tags/软件/index.html","4151b6e57c2b9aef4df518c121a1ddb6"],["/tags/轰炸/index.html","bcc0443999c119d8a40a69dcc002a949"],["/tags/迁移/index.html","ca048d9abceaa838b72f4b8df6346d7f"],["/tags/远程控制/index.html","e223e8259210dedb1f7142fa637a42ce"],["/tags/连接/index.html","05109de320870acdbebb884887a272db"],["/tags/追踪/index.html","6e246dccd218ae55a37871b6a0f2b3cb"],["/tags/速度/index.html","2ccf384e3c106f41cce882e9204bf973"],["/tags/邮箱/index.html","7208664bf5b512c0580871573a73ba9f"],["/tags/酷炫/index.html","b52c40ae61c9e171f6cf5efd069c1234"],["/tags/钓鱼/index.html","f5853960282dd2e865ccb35e6faa8ca4"],["/tags/镜像/index.html","e1caeb308e8371f1b6220a2a1a37df78"],["/tags/随机/index.html","13741fc501ffc484d467a5c2785f3a09"],["/tags/隐藏/index.html","ccb0e61c97aecc915d4f64d192ec7de0"],["/tags/面板/index.html","ea5904844388e3a43aca7163122b8314"],["/tags/音乐/index.html","279a750322ab85fe3c7947bee3fe6cd4"],["/tags/高颜值/index.html","cfe54ecdae76c1f8414d4ab3303ce1d7"],["/tags/魔改/index.html","5cf1489692b0e77cc22d3a594ec6afb1"],["/tags/黑名单/index.html","a7c484f8439110039820a25f4e1f4d44"],["/urls/index.html","6b39fab4a908a1ca8b15a1c9499e197b"],["/vps/index.html","9ade20b0525aee0aeccf02dca6f978df"],["/支持/index.html","ea3665028d3939997c6178cf3c829b03"]];
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
