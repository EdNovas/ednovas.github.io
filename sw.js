/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","24d6317d3a03f027d58485e551b0eb05"],["/2020/11/29/clash-windows/index.html","0c7d85cc62fc5d6357c783024b19e061"],["/2020/11/30/websites2/index.html","0ec47d17bdb6456bc518ff13768eafdf"],["/2020/12/04/iphone4s/index.html","e786bb117485fb8f736b5b57f84fa183"],["/2020/12/04/onenote/index.html","469e5e59f2ccfa9167a742b1967a3b0b"],["/2020/12/04/wesites1/index.html","8779c6552aca0911f153c3dac1b39a43"],["/2020/12/06/nokia808/index.html","7ace5d65ad88092d267b874d448a540e"],["/2020/12/07/ipad1/index.html","4d7c66cb84cff60a6e8334086747b149"],["/2020/12/18/freesubscribes/index.html","cee110c5652adb1276a400f65ef637e2"],["/2020/12/19/musics/index.html","5929b26fb009d019e19ce037326a7427"],["/2020/12/19/shadowrocket/index.html","67eba5dd4b51b45de838e4db7a9a342f"],["/2020/12/19/v2ray-windows/index.html","901ae196b218e05600b199a33e32935a"],["/2020/12/19/v2rayng/index.html","330af251083372b3747574632c53d71c"],["/2020/12/20/beoplay/index.html","f70c3de1274665ee7791f7d47587948d"],["/2020/12/20/订阅链接转换/index.html","691519705dfa1834cc80145329f8ec9a"],["/2020/12/21/chrome浏览器下载提速/index.html","7e5cf5dd0e23f7b96d2af008710d7e96"],["/2020/12/21/免费128线程并发下载xdown/index.html","1e6d6aa66d019de8ec6da1a1d4343257"],["/2020/12/21/免费32线程下载软件ndm/index.html","df832b6cee6d76bcd6d1fb4b7136102a"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","fcbd6ad2e8e63a069a44a36992c5c699"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","234224a16b391b294cdd6fbc5dce9132"],["/2020/12/21/广告怎么知道我在想什么/index.html","cabffaf3ee5cf8ff6c93c45de805e9db"],["/2020/12/21/无名·引子（小说试写）/index.html","6c1a20646783aae08304e0fa1aa78c66"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","8006539c4d3c4c889d9bd6a6a85d80e1"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","c148523e66c9761e8d2a54578663a52f"],["/2020/12/21/高速轻量下载器aria2/index.html","d210875793299742f7d3e57f7a5b7919"],["/2020/12/22/2020-cee-roo/index.html","ec141d318f6c5cf370615e88934a6c96"],["/2020/12/22/firefox插件、github、steam富强/index.html","a1279b13d5f2cd87c9d8a4971473918e"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","1f50c3f236e0d698ecec4edf19324827"],["/2020/12/26/python-day-1/index.html","0660d030c4c1eff7bc1d9ca9e9c0baf3"],["/2020/12/26/python-day-2/index.html","2ad0c505b0566cd934d3bb57e17aceed"],["/2020/12/26/度盘不限速下载方式一赏/index.html","6969895851564a950a0d17876353cef1"],["/2020/12/26/添加开机自启软件/index.html","7f7382a32aad545a1a70b39999ffb4a8"],["/2020/12/26/电脑端截图方式一赏/index.html","8fff353c6a2370aa1b750b4bba5801b7"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","c1d0fae500961f58ca6ce3680edd5482"],["/2020/12/27/最安全的浏览器tor/index.html","0298634498bcc3207b37a4c815dfaf7b"],["/2020/12/27/网易云刷等级和听歌数量/index.html","af25013978898ac5589524a6bf0d34d3"],["/2020/12/28/freenom申请免费域名/index.html","71512c1795466a7ad00026f26d8b5be0"],["/2020/12/31/机场/index.html","0197fb966df47ff1726633de256cf95b"],["/2021/01/01/M1/index.html","b47414ade583f7db4c60aa5e4acbb302"],["/2021/01/01/compress/index.html","b0b22c89aa31806f52426aca50d82f64"],["/2021/01/01/infinityfree/index.html","7e722c0ade25d4b31013ee9f775955fd"],["/2021/01/01/硬核翻墙/index.html","a259d36856765366ff9aace94fe68dd2"],["/2021/01/02/qq/index.html","f3f7907b2645b2dc2cfb1ff3c54f9a45"],["/2021/01/03/netch/index.html","4cc0079162f96133c0959a13f441e62b"],["/2021/01/03/waifu2x/index.html","6676c91cb0a230d333a39cc7220317bb"],["/2021/01/04/ads/index.html","316440f60028fec377d199a9a0637b1f"],["/2021/01/04/games/index.html","6d8daa3bb1ac37d6fc446b690c52a99e"],["/2021/01/04/heroku/index.html","9fc7714d22c873e0ca38acaebc4518d1"],["/2021/01/06/movies/index.html","5a74b12d85b095be8d76a319800fd849"],["/2021/01/07/google2020/index.html","ad6bf91ad4325062abb87b0536ddcde0"],["/2021/01/07/lucky/index.html","fb36d8c6d3cf2d67d7f561ba2f123225"],["/2021/01/07/spotify/index.html","a7c3cd50b98baa066894f77feee4bb82"],["/2021/01/07/thunder/index.html","d8acef818350641b372ac1993d82ebe4"],["/2021/01/08/adguardhome/index.html","cf8a088cdcd9b4e739fcfc99d1125308"],["/2021/01/10/IBM/index.html","33ed713023cd858a5629c20a80971a4f"],["/2021/01/10/potplayer/index.html","1aeb911af228cc2cae699ae19844ed02"],["/2021/01/10/sakuraanime/index.html","7462c0a51435d8c78e437fa99a77fcb4"],["/2021/01/10/美剧星球/index.html","249ef83c44994314445145db7e9653d9"],["/2021/01/12/telegraph/index.html","ab2f96984a389d89ea0804edd76e5186"],["/2021/01/14/comics/index.html","068f36cf0b662508b4e48cd3c7be69fa"],["/2021/01/14/ftp/index.html","f32ba8fb3deb971b5401fdc280ad6c86"],["/2021/01/14/oraclecloud/index.html","0f1ade0f806a16045c83f4cfcbff3e60"],["/2021/01/14/porkbun/index.html","f3f802aceca47522dc0923434a5fda2d"],["/2021/01/14/powertoys/index.html","42c42dc1135ff4641eb93c8f6e4fae87"],["/2021/01/14/taptap/index.html","1b070334b6876da8a8a434fbc6cc116f"],["/2021/01/14/ubuntuvsftp/index.html","e3535ed0582867bbd98dc88b4f217622"],["/2021/01/14/小说/index.html","9f1a91cf820ae349376b8da421544212"],["/2021/01/15/freeproxies/index.html","b9ea4ce616501a59a459dcb58751cb6e"],["/2021/01/15/incaseformat/index.html","34ff7752020cd543a28462cefb3c2ab6"],["/2021/01/16/euserv/index.html","5050bb34eee8091eb3b4a9b4f6285393"],["/2021/01/16/winxray/index.html","073aad2d59bb6a5e2d01f1287e77fa29"],["/2021/01/18/qqreadhistory/index.html","84001f8fac0cc8877a946a5608c42afd"],["/2021/01/18/qqrevoke/index.html","ba36467e78be4efc1461891d331c4f02"],["/2021/01/19/freevpn/index.html","32304840842c12456ce79b6d66a9cb4b"],["/2021/01/20/browsertrack/index.html","09bc911a4671c8d61d8b0451ece9a47d"],["/2021/01/20/v2ui/index.html","fcf536577ae92b3ff1b3cdb243c85d35"],["/2021/01/21/failedtoconnect/index.html","d35d82f6bfc5035b1684fc58e9b2dc01"],["/2021/01/21/gitcalendar/index.html","9d1bedb149f80761e3f682cd5f89f41e"],["/2021/01/21/markdownformat/index.html","29593f18b09f1e86a75fa49bd159da67"],["/2021/01/21/markdowntable/index.html","ae3cd453607f2a79a97aa140b9267b5b"],["/2021/01/21/vercel/index.html","fd2788227ec3079e7b30fef79858ba4d"],["/2021/01/22/hardware/index.html","1fc2f04a4a62cd622d1e0b1ea82de245"],["/2021/01/22/muviz/index.html","56e4add92bcc64e4268ce00acb26e461"],["/2021/01/22/randomapi/index.html","283cf954afceacf93d31e43377677e74"],["/2021/01/22/searchimages/index.html","3face521b0ce4d296a471ec254195edf"],["/2021/01/23/RX文件管理器/index.html","29ac4e633f0e763628bf2f970abd3c9b"],["/2021/01/23/chromeflag/index.html","15711bd4c6b6c79616793a9c2bb86038"],["/2021/01/23/qttabbar/index.html","86cf931e2d618167367be1136683bdda"],["/2021/01/24/githubspeedup/index.html","3b2b8d40814ed8ae9456a6ea03d4aa41"],["/2021/01/24/jsdelivr/index.html","1b3f33c62de22866ad7ab9529255769f"],["/2021/01/25/note/index.html","6d2520fb13af227cfacfa51ca16da79a"],["/2021/01/25/soul/index.html","8556cbd5f89d7d49517a862f957546fa"],["/2021/01/26/herokuxray/index.html","f4cf1d5f3a19631b7f6ca210e7e4976d"],["/2021/01/27/proxypool/index.html","a87749848ab601f164c2bbdcc089d179"],["/2021/01/27/tracker/index.html","f9c63024dcd566644b1e126b0f36fd30"],["/2021/01/30/pandownphp/index.html","44e4ead1fd826e89180db32840286330"],["/2021/01/31/newgroup/index.html","e95d939b94c65146373cb14547fcb079"],["/2021/02/01/clashlanguage/index.html","d8323dcf986ada47df4c28f016188f9f"],["/2021/02/01/encrypt/index.html","aaa9609e1f5361e50b5c804356103fa0"],["/2021/02/01/footermotion/index.html","56debd2a09ab5ae4afdfbf8b4b2373c3"],["/2021/02/01/gitter/index.html","6a7671cc05aa06b1e80f64bd3d4217b5"],["/2021/02/01/pixivtop50/index.html","c8bf06918ebf89d175b2d2f751bc98d5"],["/2021/02/01/scrollbar/index.html","7df7c25d36b466b8ff5ca0b4d7b5183c"],["/2021/02/02/clover/index.html","1b283b573167a3316178eead48b6e7bb"],["/2021/02/02/maya/index.html","1b4e2c718fc27538fcac1457957352ce"],["/2021/02/02/speedcontroller/index.html","9aac57a08e0ec92999e9d848af519faa"],["/2021/02/02/yesmusicplayer/index.html","266ecbebb08a67e713ce57b78d57f041"],["/2021/02/03/lenovoonelite/index.html","f184c9f3f51a19879103af0678432bac"],["/2021/02/03/skipads/index.html","26b807843004c325ebd8e5155a4009fc"],["/2021/02/04/picseed/index.html","9eb5600d0231f8967dba3241d7bde3f3"],["/2021/02/04/renren/index.html","8f425bcff7b687e8f77d548cc987a1a1"],["/2021/02/04/serverstress/index.html","52b3e7ba26ce04d64196e4a6cb67bc18"],["/2021/02/04/wikipediazh/index.html","136288c48ae4b90d725f7a3fc83be3cc"],["/2021/02/05/googlevoice/index.html","b8e79c9e82aba08757d648e2226f38c5"],["/2021/02/06/clashconnection/index.html","7cafdec19e2a2ae9815bc8c4de324740"],["/2021/02/06/gvtransfer/index.html","b311e78353c12c6cbe621df1bacc1cfb"],["/2021/02/06/todesk/index.html","5891f33868344f23996037a68d7ebee6"],["/2021/02/06/vpnblacklist/index.html","c4346062676b345d508b0e35e133a2fe"],["/2021/02/07/mklink/index.html","7e6b2eab26450d7586154e81821662c7"],["/2021/02/07/speedtest/index.html","ecc394f84663e400583073505dcb5f2c"],["/2021/02/07/translate/index.html","b9aa87e157a0ba37aeb75b1ccfec1ad1"],["/2021/02/08/ewomail/index.html","700d6a7786d543bda067f67af1f462e0"],["/2021/02/10/officee5/index.html","667f5b45e42255764d380266e2d85e30"],["/2021/02/10/raidrive/index.html","e2d73f68354d9b21fa54a2a3da1a33bf"],["/2021/02/13/e5sub/index.html","522e816e6a1e45bfb2d4e562333435ad"],["/2021/02/14/screen/index.html","0ca059b6ea39fd8c12c7898df342a191"],["/2021/02/15/clashtun/index.html","06a8d1299496bad71ff3ca0be9164e1c"],["/2021/02/15/messageboom/index.html","d8729ef63e67f994f183137a7b2b5758"],["/2021/02/15/oneindex/index.html","ab7f810ac0faa331d6b1f0b50e987f14"],["/2021/02/16/govsites/index.html","b364047a7a0cb93a3bbfc8d074392a6e"],["/2021/02/17/hexototypecho/index.html","9c795f1786ac24cafa0529b64f6304c6"],["/2021/02/19/fiddler/index.html","3c846a32e81f1d0a14959d954fdd6d20"],["/2021/02/22/potplayerset/index.html","8bb70f54112d42f273d552b21d926678"],["/2021/02/22/studyresource/index.html","113a37e4096b4731e9274935df353a2d"],["/2021/02/22/telegram/index.html","d2b64b4b07ced6667e3d11ae8be1427f"],["/2021/02/22/videos/index.html","17a926ab1b5cdc97fe83356dde3fec10"],["/404.html","317931121f7451808107cd2a28e55545"],["/archives/2020/11/index.html","386c6f9ad09f69f10f329a95bd89069d"],["/archives/2020/12/index.html","9dd6e50e542e3499e4f661f55ca57044"],["/archives/2020/12/page/2/index.html","8586b944ce7ec2d0d3eb8901ff73f89f"],["/archives/2020/12/page/3/index.html","aaf047800c80cf05a6c9114e973ca318"],["/archives/2020/index.html","f7c0b6d49dee4c2f45937fe6047bb2c7"],["/archives/2020/page/2/index.html","8c8a0da1517378baa79f5bf365a72944"],["/archives/2020/page/3/index.html","25d6ca398ada5286350a4bc3b66d1e9d"],["/archives/2021/01/index.html","abfe43eafc484bd2497beaf3f79c0f3b"],["/archives/2021/01/page/2/index.html","7ddb8865111890417398b18e7776047d"],["/archives/2021/01/page/3/index.html","3d851128fadbf12569fca7ce2c91ec29"],["/archives/2021/01/page/4/index.html","af00747e16402ae95f34d1ec320f6d17"],["/archives/2021/02/index.html","e07884aff2ce7d6e1370abbf789a35e1"],["/archives/2021/02/page/2/index.html","0ea1db90f2cff3a1ff86a93c22f7dcc5"],["/archives/2021/02/page/3/index.html","569ee7d00e85afe2a937e23a8701e361"],["/archives/2021/index.html","68c0f77a5e2651444118c411e7f1b862"],["/archives/2021/page/2/index.html","3c405934c9689469fd5a504b72056c0f"],["/archives/2021/page/3/index.html","afff4f3f5d1b25d243435f2cae43c74a"],["/archives/2021/page/4/index.html","7434cd0daa88f47fd88aa43bab127dd9"],["/archives/2021/page/5/index.html","151570cb74129da46003c45a705565ce"],["/archives/2021/page/6/index.html","cb6287cf366587013b2930159fee1273"],["/archives/2021/page/7/index.html","60495f9f6b68e700deec3eb15f813d2f"],["/archives/index.html","301543356a3c78b465a7d70940e81366"],["/archives/page/10/index.html","b8210c1f900198376b690bdcc21ccd3f"],["/archives/page/2/index.html","1f6f23cff41b94ddd2d7f09ae92af56e"],["/archives/page/3/index.html","81903096dd40d99428dcb56810d1e0c5"],["/archives/page/4/index.html","74426668fe468b7fa1fb30b7f7249bb8"],["/archives/page/5/index.html","f0ef431a381fbbbd49ae215e637f588f"],["/archives/page/6/index.html","522834ca293201680c10b92688ec9424"],["/archives/page/7/index.html","4e164ccd0f2e40f5b60ab43cfb819def"],["/archives/page/8/index.html","8b8253488265c29f2b3e4d813602e52e"],["/archives/page/9/index.html","b9b9f9e4ff36ca30d2e0dda4414beeb3"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","0985b3fff56b5d866101ff4aa3073f3e"],["/categories/index.html","c234e5fed67254a7224b7ae25e936546"],["/categories/下载/index.html","82aedd495b8f4367560a7b45156b4056"],["/categories/安全/index.html","7b896bebd7e27321cd67fcc195de56ae"],["/categories/建站/index.html","15f417f9185b07b7394d3a5e0e57d2e2"],["/categories/杂/index.html","c85c8ec1d0cefed2e5b2251ac0591ce6"],["/categories/杂/page/2/index.html","d3fc5c30a6d321f4d3e149154947b0fc"],["/categories/测评/index.html","92b79b34a40ac391a5d6721c95ddb1c5"],["/categories/科学上网/index.html","7005a27ac53bb46ceb7676f5807ed98f"],["/categories/科学上网/page/2/index.html","22bfaae5956abf742511b90103d2c3a6"],["/categories/编程/index.html","e39e1d31c693dc5262d05af6f6e4d093"],["/categories/网站/index.html","187722093af678f7a7c4db88dd3ca4ec"],["/categories/网站/page/2/index.html","4c79865c512b481bebd588a78c39d95d"],["/categories/软件/index.html","b9b5752682884ed4d476cc7519abbf45"],["/categories/软件/page/2/index.html","7741e2926555bc1ff8b849d73379dde3"],["/categories/软件/page/3/index.html","9b48f7b847e1b5dea9f2e6be49f4a052"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","118b3eb9986efc6bd37107d0fd7c1b57"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","c592a72754c6dcc04ee60378432cac6d"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","c0ecbcd428829655e55af18d43d06f83"],["/ios/index.html","c3ac75386d41d49677c9317fb4372bc3"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","10239b6d900a6ca5e2d6cf5203ad0f1e"],["/page/2/index.html","f81b8eca5bf718c11d48657b06ef89b5"],["/page/3/index.html","9789ba32de8e3c7aac07308f95934ef4"],["/page/4/index.html","e647101a58085d653dc5d7327860549f"],["/page/5/index.html","82b848e6a490e8c88ac1ab3c5a8ac31e"],["/page/6/index.html","2176cd66fccd3c913b701bca086849da"],["/page/7/index.html","e0e4e5472277fdc04f2ef0c6cf6dd073"],["/page/8/index.html","a12f133ffc7315c3417c5a0607b32d14"],["/page/9/index.html","b396b92ac132a2fe1f748c84d6e28049"],["/payment/index.html","75ff8ea49cda33a529ec45205804c8df"],["/privacy-policy/index.html","8bfc3176677008b24cf3b7f97d226f7b"],["/rss2.xml","3cd919d52f1c5e52e4320136143bba9e"],["/search.xml","bfafa7270375ea6fb66ffa720ac71af1"],["/sitemap.xml","094fd108ac1bbeea21954cd8ce65d80c"],["/sw-register.js","e9561155406ea86db888d0a980b11cad"],["/tags/5t/index.html","8a2576399c0b0d296b02649f45f87a22"],["/tags/Clover/index.html","33a5b1c7a2d64cbef2e405cbc8c8ade4"],["/tags/E5/index.html","3bb245f3a3d1afc216dc5d3ca935e9db"],["/tags/FTP/index.html","ef10f40bade4acbfca62b9eda9088342"],["/tags/GitHub/index.html","79d46569cc635f55d7c9786869aede6e"],["/tags/Heroku/index.html","51ee2b9d7fbb794d2dd5ad835f5d3a30"],["/tags/Hexo/index.html","c110edae5ce9e3e0265d29053cd7d527"],["/tags/Lenovo/index.html","8d80b05343a09c011824811bc0050521"],["/tags/Oneindex/index.html","2d73aae21c471577d9912c2e6de8b4df"],["/tags/QQ/index.html","3f7998c134f190ad7fe33aa4a23306e9"],["/tags/QTTabbar/index.html","d7f3f69bdb284206c3945e98d4911317"],["/tags/RX文件管理器/index.html","1b8e23edf7955a39d15aaeb343ff804e"],["/tags/Todesk/index.html","dfd2c94893f73758707785cf49038737"],["/tags/Vercel/index.html","1b77793505897998d4cb10a0bfdabe31"],["/tags/ads/index.html","28be0af4ae43348794fac178b957870c"],["/tags/api/index.html","8b438588d9bad68b018179809e0c7ee7"],["/tags/app/index.html","7465025db6b7f3c0b7d93090c56fda8b"],["/tags/blacklist/index.html","6f6cd787621b9a5c9986a6308ebe113c"],["/tags/butterfly/index.html","fb2a67bbb0a4b1f2c6e4f1f0aca37f53"],["/tags/chrome/index.html","7888fbb83fbb31318a39b5b2e9de77ea"],["/tags/clash/index.html","a9c20f61714fd53881f412b584dd3a74"],["/tags/cloudflare/index.html","e4a09c9740544c07167c29a9fc214e8b"],["/tags/cmd/index.html","3437e78360bba60bc2bf2e8fe4e32d34"],["/tags/c盘/index.html","e92eb9ea37c58dcba82dbf8b7250a8ee"],["/tags/email/index.html","3d6d7424d37e86859f2b205f04cdae7d"],["/tags/ewomail/index.html","0e20b2232ebf58bcd3a6ef19d3878145"],["/tags/fiddler/index.html","d839cb45b6ad80537782ed018743cdbd"],["/tags/flags/index.html","f9f22efd30b71789de0a3a705992d838"],["/tags/footer，页脚/index.html","3980071d0a133462dac9cd4817a5e17e"],["/tags/galgame/index.html","0900ec7066221b5fadb57d8c0e923157"],["/tags/git/index.html","3528b56e041eeb548ac42ea0bf708a68"],["/tags/gitcalendar/index.html","e4117fdfbfbfe4fc3fa00c0e0dc732f7"],["/tags/google-voice/index.html","08967f660200214a8167c11e474759d2"],["/tags/gv/index.html","5ef9a7ca1e8bbd932255c39b42f8d814"],["/tags/index-1.html","828bd10774571b04a73a17616138e034"],["/tags/index.html","fb535273ede7d6abf8b545a6c555c309"],["/tags/jsdelivr/index.html","2559e69d9f9268e66dd5e1e229f6e804"],["/tags/linux/index.html","1439084240d536a4013422feaa5f4ccf"],["/tags/madVR/index.html","c535a4d39dda283a0db4ae246703faba"],["/tags/markdown/index.html","7fa00ce76f8d9cdacde1f2693f39ddad"],["/tags/maya/index.html","73b838303d2c6d0a93170cd68f9c865f"],["/tags/mklink/index.html","baa3eb2517cbd75fcd75e027ef1cc541"],["/tags/office-e5/index.html","c2efddc49bb6d3d15f3b366afcf9103b"],["/tags/onedrive/index.html","7836a5b9e97519357366b8a6b7444dba"],["/tags/picGO/index.html","0a6290d753c09c4beb2f196875cdcbd6"],["/tags/pixiv/index.html","838d37ff56ac3f2397c5495f183484d8"],["/tags/potplayer/index.html","25843666c3371104bf34365f17205949"],["/tags/proxypool/index.html","87c3757d23d8d43bd1c6410a2c8f13dc"],["/tags/qbitorrent/index.html","2e56d6fcd1d1eb4006e15ca1de45f479"],["/tags/raidrive/index.html","87544e7e84d374d7f97522ff08e40d73"],["/tags/screen/index.html","5b4851dddc07fe1e356c37b396ccede3"],["/tags/speedtest/index.html","0cd419a2ecf0f4228a5057491d976b07"],["/tags/tap/index.html","a240a0523e6850f2f53b5b35eb1eb062"],["/tags/telegram/index.html","73ee5788aa01d370945393b31337c9a5"],["/tags/tg/index.html","34038e71f2db567f38e8ea0af9571f28"],["/tags/top50/index.html","3c802095c4fee12205432ea7d1584d87"],["/tags/tracker/index.html","caec02eecacb2d73bb7ed4c86bab8522"],["/tags/translate/index.html","2e6bcea4f3a110bada137c7cfff7efd1"],["/tags/translater/index.html","8aa60319108c4eef9145cac4b55e71d1"],["/tags/tun/index.html","74b6a5d3c3d62d3df00a9d2e4e39214a"],["/tags/typecho/index.html","f1fa3d486c2ba7754675b3c7160a3a9c"],["/tags/v2ray/index.html","a7d52971e05fe39af5914609fa3d60e7"],["/tags/vpn/index.html","a3b73c4a5cc503a1dd5a9207a36612a2"],["/tags/vps/index.html","0098d3a6c9c2206e2efd85fc37eef3e7"],["/tags/windows/index.html","50d181628d95130d4bdd5d9a71d0e415"],["/tags/windows端/index.html","e9c41dbbf724e1c4d6552460acbca71b"],["/tags/xray/index.html","414752fba691c1a952326e1475da440b"],["/tags/下载/index.html","a683dcde49c4b9579bcb9cc3e98ef156"],["/tags/不限速/index.html","4fb532fcaa4bcd212c7a76e0a010942f"],["/tags/个人网盘/index.html","9c6a8c2ac11022bc5ae6c59240d86a93"],["/tags/主题/index.html","6dc66c4663019d538d6db4b7bd6e6f48"],["/tags/云便签/index.html","31cac0eae9a05dd7c74feb76fc90d6e0"],["/tags/云盘/index.html","2592fb62073c5a69b31a40ffd6198c3b"],["/tags/人人/index.html","08b53907703186a0abb7baffaafbecfd"],["/tags/代理/index.html","a48f6c1e0256179c6469e1a2ca2dc406"],["/tags/代码/index.html","920b8f23e909c79c565a79c5b8207491"],["/tags/优选IP/index.html","f745cc0220b9fbef44dca4b798b06198"],["/tags/便签/index.html","d879da906b54db1471c6140528a101c7"],["/tags/保号/index.html","79d740d24b91400e446bac9c8828db1f"],["/tags/免费/index.html","7e13406dc936f8cec241fd57e49662ab"],["/tags/免费节点/index.html","e3e2d15654f984c44bbc6159f137db7e"],["/tags/加密/index.html","dae893073b577a47522f70a9fdc6fcb8"],["/tags/动画/index.html","e2575c7f516e0b2dcc65ac760cfa3869"],["/tags/博客/index.html","e7ad6f60b5511a9e78a0d5384b98f716"],["/tags/历史记录/index.html","15ad2447f6fdf369206b325278e8229f"],["/tags/压力/index.html","2081e6ce591b31b61ba23f64a7d286bf"],["/tags/压缩包/index.html","b1e651210bcbcc65f92cf1fd67bd6e3a"],["/tags/反代/index.html","f43810d93cb0bb8eb99c379464810ec1"],["/tags/可视化/index.html","5a6f33cb09db988015429a53f3d6f65d"],["/tags/命令/index.html","8aadbd8c428ab576d5781b958bb698be"],["/tags/国家/index.html","0597e72834a8d8631fbfe19f28840502"],["/tags/图床/index.html","6d395ad63e4f051e0b6afa21ae822ce3"],["/tags/图片/index.html","3b8aa527808bd5d08796179fe62270ed"],["/tags/域名/index.html","da92a3b047ca146450061fc474498c1e"],["/tags/多标签/index.html","0eb9ae00b8f4565bb0cd04f4586b2247"],["/tags/存储/index.html","45b5969ff82c6fe76eb4756a239a322b"],["/tags/学习/index.html","a320db2a4c2b634a67cc4806deceae3c"],["/tags/安全/index.html","855d0919d51aa339f38296c63ce93e09"],["/tags/安卓/index.html","f675a68a342e75aadbfbfb13d00805b1"],["/tags/宝塔/index.html","4c6fb6e6660030db25353510e1277f76"],["/tags/广告/index.html","807c1bffaa5612e6e77e0390adfd60cf"],["/tags/建站/index.html","2126b9a824770a976e023845f0f26bf6"],["/tags/影视/index.html","e1ff74fdb877ed8eafd03df7bae8d6e4"],["/tags/快速启动/index.html","5f6eea97b5d895348286c9cae5f4c233"],["/tags/手机/index.html","0a2f7f448b547f6a5cde22258aa77857"],["/tags/托管/index.html","9a096380ef819b8ff7046db3f4193776"],["/tags/抓包/index.html","a8d4cf955b5335888786b33bdd7e6150"],["/tags/抓取/index.html","3ccb1218858f8c691abdfc6400aede66"],["/tags/投屏/index.html","8f859ffd0df863f5d3b4004d39599dd8"],["/tags/拓展功能/index.html","4447623e1e863682bab14663b8d4dfbf"],["/tags/挂载/index.html","9f716d35374536a80ed726a5b227f276"],["/tags/指纹/index.html","3e80ef74d4eead52b3b8973e123b40d9"],["/tags/接口/index.html","20c90b87061ff4bf0ac6827cb6948bef"],["/tags/提取图片/index.html","3b4b7851d7a62c839cfb3a2d0b3d0676"],["/tags/插件/index.html","ab81dabe0ec6771042563b77d479bfb1"],["/tags/搜图/index.html","3be85a684cf70a074d84882afb410092"],["/tags/搭建/index.html","3ee803af5efc107082609bfcdd5546ff"],["/tags/撤回/index.html","af665854a5506f6c7a45f6d17adbeab2"],["/tags/播放器/index.html","64caf49823eadad3e19aec802af6c0a6"],["/tags/政府网站/index.html","b672771f7608ee543f252df81f526f9f"],["/tags/效率/index.html","22a5850667c2a5e3f4e42ddaeca002f9"],["/tags/日历/index.html","1233ad6fc1a2a1d55270106540a7d921"],["/tags/服务器/index.html","dbbfd48e705cc6fb5f23acd348c333b7"],["/tags/桌面/index.html","e7c7c79db49f08bc3446cd2e3fb01fee"],["/tags/梯子/index.html","47f87f6b2b08bf2795e8daee34bddac2"],["/tags/检测工具/index.html","f54d554f964fd73ce87cf30fb5c6248d"],["/tags/汉化/index.html","d9bd21e21e7e464494038596664e8e56"],["/tags/测压/index.html","1f25effc41e431d92855a2fa6d44a84c"],["/tags/测速/index.html","619d0aeed94ffd55d971cc1a1a2e8412"],["/tags/浏览器/index.html","1e0716992b5d8af473c5e17e0b338296"],["/tags/清理/index.html","a8fb17509f9c8d9a0fb5aa7aa540d80e"],["/tags/滚动条/index.html","4e2c4c1d0183a10287dc5f04a7e8eec0"],["/tags/电影/index.html","a346a8de4d4791c57634317192e677cf"],["/tags/电视剧/index.html","43110bdbdc9a3c90b11e7366954568f1"],["/tags/白嫖/index.html","4013996fac0bceb0d8b53674a6759e30"],["/tags/百度/index.html","c566ca4deb1494e82e798cc099480501"],["/tags/百度云盘/index.html","e208531705130405cdd1f148679eaa74"],["/tags/百科/index.html","1d42c281558b85517765fbdd73c10515"],["/tags/短信/index.html","3845b8f70e6e7c32b6399192e5680fcd"],["/tags/硬件/index.html","95cfecc62e19fa0097e8cbcaf897bfa5"],["/tags/科学上网/index.html","678aea9b29ed779ba713f4b337765d0e"],["/tags/空间/index.html","b8c4c5e3bce07b253873a37eb478e941"],["/tags/笔记/index.html","60873713dc69ebd7ea1f34186c4db255"],["/tags/简洁/index.html","7d92f4dacf84801e9c88a75f9ab67df9"],["/tags/简约/index.html","7eeb406da724b80eebfee24edfaf007a"],["/tags/维基/index.html","0d5619963627a221584e1974a3dcdd13"],["/tags/网易云/index.html","a399b5b528cdd46ab1bf4cf167e5ec47"],["/tags/网盘/index.html","96b6d35f8a64343160a8c258c934b055"],["/tags/网站/index.html","cdf803ac16af1ca6970c67fe1b1590d5"],["/tags/网络/index.html","ad56eaf728c4fa439cc6b8adbdf24090"],["/tags/美化/index.html","40e5bbf62dce82c6f938c8459d0ed0b7"],["/tags/翻墙/index.html","eb0e923514bdc8000fe9abe11e63f41b"],["/tags/翻译/index.html","f60c8204327eae0b782ec40e6d913751"],["/tags/翻译器/index.html","1632b739fe59b0e93454e3bd68bec3a8"],["/tags/聊天/index.html","7d9d0de27ff52c91ba0c1ac3c39b58ea"],["/tags/聊天室/index.html","5dc63a4b0d00f863c113dd4af2a9cb46"],["/tags/联想/index.html","a42986a763ff6cefe99378ba58acfefd"],["/tags/节点/index.html","860c6b4d1023423fcee9bce53c82f4f6"],["/tags/虚拟手机号/index.html","720f7a7904a1c94340528a312fdfb6d9"],["/tags/补丁/index.html","0c0fb77443a6cb3378df6de856983fcd"],["/tags/视频/index.html","e23a515577b458d24dce34e2f20c8e63"],["/tags/解析/index.html","f22e6cc226eb19af0933f122b86514b1"],["/tags/订阅链接/index.html","6bd3915ebbefa01acd20b75be45a56e2"],["/tags/记录/index.html","a2dd92aa22443d200bd2c7e289ab5261"],["/tags/识图/index.html","8bc1ed93add15f2c6b9b504f0d690991"],["/tags/语言/index.html","1800cda98b77cbe7b1bc4a85254ad43d"],["/tags/资源/index.html","0ae2da5aecf7c9b717d17e7acc15f912"],["/tags/资源管理器/index.html","9fa279939fc5527cc87250cc65946a3a"],["/tags/转移/index.html","0293e7263d2f93964deaa12e9bade153"],["/tags/软件/index.html","b55e210464fdf5c163b06f975795add1"],["/tags/轰炸/index.html","f8c3c3b205249a11f0ca0c9470699802"],["/tags/迁移/index.html","223f427df91a8d2ffff59db0b7ec24da"],["/tags/远程控制/index.html","57974d77d8c81d9fea5931eb02850d65"],["/tags/连接/index.html","f4d1b949bdc0f0acca37973b1b6833ad"],["/tags/追踪/index.html","2a7755e047f5ace039d2d7b53e18ec8e"],["/tags/速度/index.html","7bdabb219ea4106ad90c9e30713dc251"],["/tags/邮箱/index.html","4262228849552c806c8de850363533cf"],["/tags/酷炫/index.html","0eecfc461880828cbd412e5a5b413fda"],["/tags/钓鱼/index.html","b43049d204f43e9c50437fae46a0ff8a"],["/tags/镜像/index.html","13a36041dbb7a408de67633b2ff78922"],["/tags/随机/index.html","9fb105084ae000c7c48d9c091e89e7e8"],["/tags/隐藏/index.html","193c262749dd390a370586ee636298e5"],["/tags/面板/index.html","34507e8be3a4116d252fa30ef4af3626"],["/tags/音乐/index.html","10421d9795820b6127ed2ac4973519d5"],["/tags/高颜值/index.html","b5d2b53886c842dfe7d9b547eeace8db"],["/tags/魔改/index.html","c617621c752e923c16af28dab563cb60"],["/tags/黑名单/index.html","c0e2b25b7a0949fa3fa2189d3fb47adc"],["/urls/index.html","8512069f3281f7c2f347c81b6ab4fc6e"],["/vps/index.html","3e6f1870731cb43b8af969faacab4bc4"],["/支持/index.html","2605df3c28330ba6a008e5980d11c03c"]];
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
