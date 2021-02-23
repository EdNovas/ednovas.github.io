/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","24d6317d3a03f027d58485e551b0eb05"],["/2020/11/29/clash-windows/index.html","30dc85ab601ebb1789cf364669b49548"],["/2020/11/30/websites2/index.html","0ec47d17bdb6456bc518ff13768eafdf"],["/2020/12/04/iphone4s/index.html","e786bb117485fb8f736b5b57f84fa183"],["/2020/12/04/onenote/index.html","469e5e59f2ccfa9167a742b1967a3b0b"],["/2020/12/04/wesites1/index.html","8779c6552aca0911f153c3dac1b39a43"],["/2020/12/06/nokia808/index.html","7ace5d65ad88092d267b874d448a540e"],["/2020/12/07/ipad1/index.html","4d7c66cb84cff60a6e8334086747b149"],["/2020/12/18/freesubscribes/index.html","cee110c5652adb1276a400f65ef637e2"],["/2020/12/19/musics/index.html","5929b26fb009d019e19ce037326a7427"],["/2020/12/19/shadowrocket/index.html","67eba5dd4b51b45de838e4db7a9a342f"],["/2020/12/19/v2ray-windows/index.html","901ae196b218e05600b199a33e32935a"],["/2020/12/19/v2rayng/index.html","330af251083372b3747574632c53d71c"],["/2020/12/20/beoplay/index.html","f70c3de1274665ee7791f7d47587948d"],["/2020/12/20/订阅链接转换/index.html","691519705dfa1834cc80145329f8ec9a"],["/2020/12/21/chrome浏览器下载提速/index.html","7e5cf5dd0e23f7b96d2af008710d7e96"],["/2020/12/21/免费128线程并发下载xdown/index.html","1e6d6aa66d019de8ec6da1a1d4343257"],["/2020/12/21/免费32线程下载软件ndm/index.html","df832b6cee6d76bcd6d1fb4b7136102a"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","fcbd6ad2e8e63a069a44a36992c5c699"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","234224a16b391b294cdd6fbc5dce9132"],["/2020/12/21/广告怎么知道我在想什么/index.html","cabffaf3ee5cf8ff6c93c45de805e9db"],["/2020/12/21/无名·引子（小说试写）/index.html","6c1a20646783aae08304e0fa1aa78c66"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","8006539c4d3c4c889d9bd6a6a85d80e1"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","c148523e66c9761e8d2a54578663a52f"],["/2020/12/21/高速轻量下载器aria2/index.html","d210875793299742f7d3e57f7a5b7919"],["/2020/12/22/2020-cee-roo/index.html","ec141d318f6c5cf370615e88934a6c96"],["/2020/12/22/firefox插件、github、steam富强/index.html","a1279b13d5f2cd87c9d8a4971473918e"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","1f50c3f236e0d698ecec4edf19324827"],["/2020/12/26/python-day-1/index.html","0660d030c4c1eff7bc1d9ca9e9c0baf3"],["/2020/12/26/python-day-2/index.html","2ad0c505b0566cd934d3bb57e17aceed"],["/2020/12/26/度盘不限速下载方式一赏/index.html","6969895851564a950a0d17876353cef1"],["/2020/12/26/添加开机自启软件/index.html","7f7382a32aad545a1a70b39999ffb4a8"],["/2020/12/26/电脑端截图方式一赏/index.html","8fff353c6a2370aa1b750b4bba5801b7"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","c1d0fae500961f58ca6ce3680edd5482"],["/2020/12/27/最安全的浏览器tor/index.html","0298634498bcc3207b37a4c815dfaf7b"],["/2020/12/27/网易云刷等级和听歌数量/index.html","af25013978898ac5589524a6bf0d34d3"],["/2020/12/28/freenom申请免费域名/index.html","71512c1795466a7ad00026f26d8b5be0"],["/2020/12/31/机场/index.html","0197fb966df47ff1726633de256cf95b"],["/2021/01/01/M1/index.html","b47414ade583f7db4c60aa5e4acbb302"],["/2021/01/01/compress/index.html","b0b22c89aa31806f52426aca50d82f64"],["/2021/01/01/infinityfree/index.html","7e722c0ade25d4b31013ee9f775955fd"],["/2021/01/01/硬核翻墙/index.html","a259d36856765366ff9aace94fe68dd2"],["/2021/01/02/qq/index.html","f3f7907b2645b2dc2cfb1ff3c54f9a45"],["/2021/01/03/netch/index.html","4cc0079162f96133c0959a13f441e62b"],["/2021/01/03/waifu2x/index.html","6676c91cb0a230d333a39cc7220317bb"],["/2021/01/04/ads/index.html","316440f60028fec377d199a9a0637b1f"],["/2021/01/04/games/index.html","6d8daa3bb1ac37d6fc446b690c52a99e"],["/2021/01/04/heroku/index.html","9fc7714d22c873e0ca38acaebc4518d1"],["/2021/01/06/movies/index.html","5a74b12d85b095be8d76a319800fd849"],["/2021/01/07/google2020/index.html","ad6bf91ad4325062abb87b0536ddcde0"],["/2021/01/07/lucky/index.html","fb36d8c6d3cf2d67d7f561ba2f123225"],["/2021/01/07/spotify/index.html","a7c3cd50b98baa066894f77feee4bb82"],["/2021/01/07/thunder/index.html","d8acef818350641b372ac1993d82ebe4"],["/2021/01/08/adguardhome/index.html","cf8a088cdcd9b4e739fcfc99d1125308"],["/2021/01/10/IBM/index.html","33ed713023cd858a5629c20a80971a4f"],["/2021/01/10/potplayer/index.html","1aeb911af228cc2cae699ae19844ed02"],["/2021/01/10/sakuraanime/index.html","7462c0a51435d8c78e437fa99a77fcb4"],["/2021/01/10/美剧星球/index.html","249ef83c44994314445145db7e9653d9"],["/2021/01/12/telegraph/index.html","ab2f96984a389d89ea0804edd76e5186"],["/2021/01/14/comics/index.html","068f36cf0b662508b4e48cd3c7be69fa"],["/2021/01/14/ftp/index.html","f32ba8fb3deb971b5401fdc280ad6c86"],["/2021/01/14/oraclecloud/index.html","0f1ade0f806a16045c83f4cfcbff3e60"],["/2021/01/14/porkbun/index.html","f3f802aceca47522dc0923434a5fda2d"],["/2021/01/14/powertoys/index.html","42c42dc1135ff4641eb93c8f6e4fae87"],["/2021/01/14/taptap/index.html","1b070334b6876da8a8a434fbc6cc116f"],["/2021/01/14/ubuntuvsftp/index.html","e3535ed0582867bbd98dc88b4f217622"],["/2021/01/14/小说/index.html","9f1a91cf820ae349376b8da421544212"],["/2021/01/15/freeproxies/index.html","b9ea4ce616501a59a459dcb58751cb6e"],["/2021/01/15/incaseformat/index.html","34ff7752020cd543a28462cefb3c2ab6"],["/2021/01/16/euserv/index.html","5050bb34eee8091eb3b4a9b4f6285393"],["/2021/01/16/winxray/index.html","073aad2d59bb6a5e2d01f1287e77fa29"],["/2021/01/18/qqreadhistory/index.html","84001f8fac0cc8877a946a5608c42afd"],["/2021/01/18/qqrevoke/index.html","ba36467e78be4efc1461891d331c4f02"],["/2021/01/19/freevpn/index.html","32304840842c12456ce79b6d66a9cb4b"],["/2021/01/20/browsertrack/index.html","09bc911a4671c8d61d8b0451ece9a47d"],["/2021/01/20/v2ui/index.html","fcf536577ae92b3ff1b3cdb243c85d35"],["/2021/01/21/failedtoconnect/index.html","d35d82f6bfc5035b1684fc58e9b2dc01"],["/2021/01/21/gitcalendar/index.html","9d1bedb149f80761e3f682cd5f89f41e"],["/2021/01/21/markdownformat/index.html","29593f18b09f1e86a75fa49bd159da67"],["/2021/01/21/markdowntable/index.html","ae3cd453607f2a79a97aa140b9267b5b"],["/2021/01/21/vercel/index.html","fd2788227ec3079e7b30fef79858ba4d"],["/2021/01/22/hardware/index.html","1fc2f04a4a62cd622d1e0b1ea82de245"],["/2021/01/22/muviz/index.html","56e4add92bcc64e4268ce00acb26e461"],["/2021/01/22/randomapi/index.html","283cf954afceacf93d31e43377677e74"],["/2021/01/22/searchimages/index.html","3face521b0ce4d296a471ec254195edf"],["/2021/01/23/RX文件管理器/index.html","29ac4e633f0e763628bf2f970abd3c9b"],["/2021/01/23/chromeflag/index.html","15711bd4c6b6c79616793a9c2bb86038"],["/2021/01/23/qttabbar/index.html","86cf931e2d618167367be1136683bdda"],["/2021/01/24/githubspeedup/index.html","3b2b8d40814ed8ae9456a6ea03d4aa41"],["/2021/01/24/jsdelivr/index.html","1b3f33c62de22866ad7ab9529255769f"],["/2021/01/25/note/index.html","6d2520fb13af227cfacfa51ca16da79a"],["/2021/01/25/soul/index.html","8556cbd5f89d7d49517a862f957546fa"],["/2021/01/26/herokuxray/index.html","f4cf1d5f3a19631b7f6ca210e7e4976d"],["/2021/01/27/proxypool/index.html","6bf7bbb05b4ac73ea326e7f3feb3f21b"],["/2021/01/27/tracker/index.html","f9c63024dcd566644b1e126b0f36fd30"],["/2021/01/30/pandownphp/index.html","44e4ead1fd826e89180db32840286330"],["/2021/01/31/newgroup/index.html","e95d939b94c65146373cb14547fcb079"],["/2021/02/01/clashlanguage/index.html","7ecc73255a8376d25fe2f384e6521d2e"],["/2021/02/01/encrypt/index.html","aaa9609e1f5361e50b5c804356103fa0"],["/2021/02/01/footermotion/index.html","56debd2a09ab5ae4afdfbf8b4b2373c3"],["/2021/02/01/gitter/index.html","6a7671cc05aa06b1e80f64bd3d4217b5"],["/2021/02/01/pixivtop50/index.html","c8bf06918ebf89d175b2d2f751bc98d5"],["/2021/02/01/scrollbar/index.html","7df7c25d36b466b8ff5ca0b4d7b5183c"],["/2021/02/02/clover/index.html","1b283b573167a3316178eead48b6e7bb"],["/2021/02/02/maya/index.html","1b4e2c718fc27538fcac1457957352ce"],["/2021/02/02/speedcontroller/index.html","9aac57a08e0ec92999e9d848af519faa"],["/2021/02/02/yesmusicplayer/index.html","266ecbebb08a67e713ce57b78d57f041"],["/2021/02/03/lenovoonelite/index.html","f184c9f3f51a19879103af0678432bac"],["/2021/02/03/skipads/index.html","26b807843004c325ebd8e5155a4009fc"],["/2021/02/04/picseed/index.html","9eb5600d0231f8967dba3241d7bde3f3"],["/2021/02/04/renren/index.html","8f425bcff7b687e8f77d548cc987a1a1"],["/2021/02/04/serverstress/index.html","52b3e7ba26ce04d64196e4a6cb67bc18"],["/2021/02/04/wikipediazh/index.html","136288c48ae4b90d725f7a3fc83be3cc"],["/2021/02/05/googlevoice/index.html","b8e79c9e82aba08757d648e2226f38c5"],["/2021/02/06/clashconnection/index.html","7cafdec19e2a2ae9815bc8c4de324740"],["/2021/02/06/gvtransfer/index.html","b311e78353c12c6cbe621df1bacc1cfb"],["/2021/02/06/todesk/index.html","5891f33868344f23996037a68d7ebee6"],["/2021/02/06/vpnblacklist/index.html","c4346062676b345d508b0e35e133a2fe"],["/2021/02/07/mklink/index.html","7e6b2eab26450d7586154e81821662c7"],["/2021/02/07/speedtest/index.html","ecc394f84663e400583073505dcb5f2c"],["/2021/02/07/translate/index.html","b9aa87e157a0ba37aeb75b1ccfec1ad1"],["/2021/02/08/ewomail/index.html","700d6a7786d543bda067f67af1f462e0"],["/2021/02/10/officee5/index.html","667f5b45e42255764d380266e2d85e30"],["/2021/02/10/raidrive/index.html","e2d73f68354d9b21fa54a2a3da1a33bf"],["/2021/02/13/e5sub/index.html","522e816e6a1e45bfb2d4e562333435ad"],["/2021/02/14/screen/index.html","0ca059b6ea39fd8c12c7898df342a191"],["/2021/02/15/clashtun/index.html","06a8d1299496bad71ff3ca0be9164e1c"],["/2021/02/15/messageboom/index.html","d8729ef63e67f994f183137a7b2b5758"],["/2021/02/15/oneindex/index.html","ab7f810ac0faa331d6b1f0b50e987f14"],["/2021/02/16/govsites/index.html","b364047a7a0cb93a3bbfc8d074392a6e"],["/2021/02/17/hexototypecho/index.html","9c795f1786ac24cafa0529b64f6304c6"],["/2021/02/19/fiddler/index.html","3c846a32e81f1d0a14959d954fdd6d20"],["/2021/02/22/potplayerset/index.html","8bb70f54112d42f273d552b21d926678"],["/2021/02/22/studyresource/index.html","5a2f2b8eb4b63629987df10923a54569"],["/2021/02/22/telegram/index.html","fab2c96da40adee722a18891c5bb05d2"],["/2021/02/22/videos/index.html","66f6d0a2bab01b8ad84bf5bc9ed1851f"],["/404.html","286bb9cde3b13460e3634024a46e630d"],["/archives/2020/11/index.html","a00bdc1deda3171d82fc6ab00971d46e"],["/archives/2020/12/index.html","615a8fa9843c3e56a779a84db96a972f"],["/archives/2020/12/page/2/index.html","95df6bc858a323ed0791b4e23a719772"],["/archives/2020/12/page/3/index.html","f9ec3ca6f3cce57a0aa48deacab7964a"],["/archives/2020/index.html","5286450ebbe2743cbeecee94479cbdb1"],["/archives/2020/page/2/index.html","dc5478a69ae54db84280a7f85ab177d4"],["/archives/2020/page/3/index.html","b1c92122084df48362cde0e14adb09d3"],["/archives/2021/01/index.html","4dcc2d0d616c51a6b916c4e0731ba5a7"],["/archives/2021/01/page/2/index.html","9fa498703a7cc772ac39b3cf9244cbeb"],["/archives/2021/01/page/3/index.html","c5321728c9287265a60f0dd011cee15d"],["/archives/2021/01/page/4/index.html","789d8ffe01d77471c864ddd955625423"],["/archives/2021/02/index.html","b88b872876779e9cceb886c544fa1e7d"],["/archives/2021/02/page/2/index.html","edd1abd4ee6f0403952523ea9ec6cd8a"],["/archives/2021/02/page/3/index.html","3b4db5e165ba7ed41005ad85a31c2d70"],["/archives/2021/index.html","8f1a87d6f84cfada3d065bbd0afe00de"],["/archives/2021/page/2/index.html","0ce5a72bed550c439529712dc3c1a280"],["/archives/2021/page/3/index.html","fd54e7beff65e00bf87f346aa7000904"],["/archives/2021/page/4/index.html","a3d6fcb7ea517efd637cd4a725f52619"],["/archives/2021/page/5/index.html","60ef9b7bd56ce56242b638da53e17fcc"],["/archives/2021/page/6/index.html","1a71709848589f381453b06ecb9a7adb"],["/archives/2021/page/7/index.html","86b2fe3038f7f32c8f373483cd941328"],["/archives/index.html","f6ea6e0388abc47d6ed31b4e2a78785e"],["/archives/page/10/index.html","2d951102cfc98a9b08cacb38d142cb00"],["/archives/page/2/index.html","80bec8ddccd1716eeaf46aabcede9ab2"],["/archives/page/3/index.html","b6dfe2035dd020eebae7ca3bd9a45e7f"],["/archives/page/4/index.html","f895cc37cdc963cd27729bc14f9f43fb"],["/archives/page/5/index.html","23d0ef9152c8ced2c7ee59ceb7ce5714"],["/archives/page/6/index.html","3b2afd0f2991050059035c3a0eddfca5"],["/archives/page/7/index.html","aef01ba0eb74309823f74a316a73556f"],["/archives/page/8/index.html","1d0b96f6a40b3517531790842a9d42a2"],["/archives/page/9/index.html","2d0bbb8b25e4f82f38de25fbca4ce0c5"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","e081803b8b41cb73eca499005f674050"],["/categories/index.html","3f113fc182218b6ebcfbbb232d634de2"],["/categories/下载/index.html","f918fd7b855b3aa8d126867b7b8a872f"],["/categories/安全/index.html","33555733e9ce81385fd9448402ea610a"],["/categories/建站/index.html","9fab595399824fbbf0a66c8eda75b2c7"],["/categories/杂/index.html","d713d7d23d42a56d693152bbd8ebb4d1"],["/categories/杂/page/2/index.html","762861e398d7909bd607094f6a7cdfe0"],["/categories/测评/index.html","8ec87a265c1eafdec9e827a42e2b7ce4"],["/categories/科学上网/index.html","f1ed7b21a2ff7840a3c9ad2b6a3a62e4"],["/categories/科学上网/page/2/index.html","64a1f36d61070ae26622d96ae5334924"],["/categories/编程/index.html","16e8b95e497140d8d43dea42e5c6c571"],["/categories/网站/index.html","c78f33f313d77b8ff2628768c72e756b"],["/categories/网站/page/2/index.html","bba57caf4708652db519f15ee5d21875"],["/categories/软件/index.html","96df73826e763d6c0c0192df0107b7fc"],["/categories/软件/page/2/index.html","790ba9a56147f70e3049de6f50b08593"],["/categories/软件/page/3/index.html","0c5d4a77015e55aaf0285a4ae41ffbe4"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","38f63dab3db2d9f0d71fd90289430624"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","e7c992ca449b8f85bdc367ee77961d22"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","ac8715e077cdb08790eee2dcde3fa283"],["/ios/index.html","d621a8a9689e56275f6a31d509b9a3d1"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","b2cba106d97dd2ec7479189390afe7d6"],["/page/2/index.html","88ffe7c81b15dd4944fc74c6984a9f14"],["/page/3/index.html","41c0c2fcafbef8aae677fa0268230f82"],["/page/4/index.html","8f2003413c6720c811d1172a5c867d13"],["/page/5/index.html","6d2d2c62a15c43a5ad2700b5ddbc8282"],["/page/6/index.html","951dc37289871bf7272cc62d619851e0"],["/page/7/index.html","97a6b03c495b9e76a3b3753d5941921c"],["/page/8/index.html","6fcf4ae3799705c3ff25f7b2bd1ac433"],["/page/9/index.html","df999d4195e59852ba0e1c860c105c59"],["/payment/index.html","0cbcebdf38f12a688697b7826e376563"],["/privacy-policy/index.html","bc47bad1788d3dd96aa0fe92ddc9344f"],["/rss2.xml","daed701bbab5c722d935527b3d45e8c4"],["/search.xml","2de315201629233af4ca7f64fe217c5e"],["/sitemap.xml","b033d4b48b05d736922b9912e6e25e1c"],["/sw-register.js","ffca8064db506e6fcbd590d8174db322"],["/tags/5t/index.html","974b3417dfc49bb8a1bef2d123d6b590"],["/tags/Clover/index.html","09acef689ce958ed33760bbccb5fc0ac"],["/tags/E5/index.html","a404755981d5f3f8150c491290a97992"],["/tags/FTP/index.html","711e5f8578f30e6483ed1b868f89202e"],["/tags/GitHub/index.html","06e12341d914b2d2b09bbcfadf139448"],["/tags/Heroku/index.html","e9729c7882e90d65bc5ff43c3e07fc07"],["/tags/Hexo/index.html","bab6f5a8a1e0d218a40994f1c5e5d4f0"],["/tags/Lenovo/index.html","3f3184dac50089d17f5d32df14a1b620"],["/tags/Oneindex/index.html","50405c5edcbf727c57cfa6b3cb87537a"],["/tags/QQ/index.html","03eda16fa5e18567831dc6eab2b9f3ba"],["/tags/QTTabbar/index.html","6a007e5c0bd88bd68943f8f8c62c2f51"],["/tags/RX文件管理器/index.html","d29a61d26c450543aa2965a749c369d1"],["/tags/Todesk/index.html","827377004f6c9326de9ba6def73a6370"],["/tags/Vercel/index.html","cd14bcaec61c40cb1cad85087af6080e"],["/tags/ads/index.html","b158da3a7f06e4da18a09009d9bd4877"],["/tags/api/index.html","7b7fe2884905211643570b8546537bbf"],["/tags/app/index.html","ce6ac0d848a9a6530ab931a69fd2f4ac"],["/tags/blacklist/index.html","c84786fcbdc795303d0a4e11186d0260"],["/tags/butterfly/index.html","0c1b078eaffa9f451efdcd201dd2cfbd"],["/tags/chrome/index.html","944ff5d46ff541172837880156299a83"],["/tags/clash/index.html","530b3b16530edf774f7d23cbc7f485e7"],["/tags/cloudflare/index.html","36f6402ed75971b667b91f10bd46ca2f"],["/tags/cmd/index.html","2302adafea547d7e110b37bed3178c15"],["/tags/c盘/index.html","9a56176073a36275242816b29f24347e"],["/tags/email/index.html","0195608e63f793e25aafcf0eaa72f440"],["/tags/ewomail/index.html","f4025db9284c27797603fbc9be7181a4"],["/tags/fiddler/index.html","af044eb1f8142bca351f1bf9ff0b767f"],["/tags/flags/index.html","7920771157bb737d5db9ac7aa0ccd851"],["/tags/footer，页脚/index.html","5080aaac057cc991115ba9158379407c"],["/tags/galgame/index.html","aa9c93716013178bf59c2bb568d6a68b"],["/tags/git/index.html","82e0057cc0de4d902d67798c64933bef"],["/tags/gitcalendar/index.html","3b1d2bfe9cf31ed691259c03c7da23b8"],["/tags/google-voice/index.html","f5a2d2708c410af96f231c09e30c0a81"],["/tags/gv/index.html","a6c96d6bcd7b3994f70397e84339363c"],["/tags/index-1.html","3dbee6b6d6b30a279439287c97c5c6c7"],["/tags/index.html","a105e9c5c582a5fa79f844b448683fbc"],["/tags/jsdelivr/index.html","cf9c591cf5ce5da67c4d985fc2c14833"],["/tags/linux/index.html","3d9720351db01f4602c675b2c7d95bb8"],["/tags/madVR/index.html","142e1956efb853132766a61485ed6d5a"],["/tags/markdown/index.html","310a9111a46df893774568d923181ff2"],["/tags/maya/index.html","d52fbbd630fefd1aeaec5ec6aedce267"],["/tags/mklink/index.html","dd5de495f7236464bf8134202a3a6ca8"],["/tags/office-e5/index.html","ecc70eb885f1303f0c4d103289f1ff84"],["/tags/onedrive/index.html","7806eb022e50a5ef232aa8472e1e9351"],["/tags/picGO/index.html","0bce2a36874ed5ab5d641753d830f65c"],["/tags/pixiv/index.html","cddd178bcc3911f924686724464e5fd8"],["/tags/potplayer/index.html","920a31a89a4d1cf3fe9e497b1346a6d5"],["/tags/proxypool/index.html","7fdffd24c5a716561c185be2985d25de"],["/tags/qbitorrent/index.html","2700d3878d7502852509ef71fd56c391"],["/tags/raidrive/index.html","0fb9c4259a8689c6f21430fc71aa818e"],["/tags/screen/index.html","3ac72aaeed7ccd907a7852228820e545"],["/tags/speedtest/index.html","671dc15b141c39cb7d953dc4d2879d91"],["/tags/tap/index.html","d8628e6b065c639efe9da925daa63e76"],["/tags/telegram/index.html","2702eaf653b9b9c96d05ed6dccdf60be"],["/tags/tg/index.html","195d9ddc5c0b5b283b9b2ec756df9da7"],["/tags/top50/index.html","aeadc5e9debfd0ca4f71c5563b23badc"],["/tags/tracker/index.html","c151394e95efa13ba87e5e2f93504631"],["/tags/translate/index.html","ba8d6fb2b64cb47ad46ea36a111f6079"],["/tags/translater/index.html","fa170fb9a297a9feac1b503ebda27cd8"],["/tags/tun/index.html","81c80d425bc61c79834bed05f0693c7a"],["/tags/typecho/index.html","2d82652a533efd42a404ae99e2d0321a"],["/tags/v2ray/index.html","0833f5660d4d66b8749a55f93d4c1303"],["/tags/vpn/index.html","723f9f6c6e8607af8335b2d877304b4a"],["/tags/vps/index.html","46312a974ee5c605d134b90b10ca24d5"],["/tags/windows/index.html","fe49acf4e453bfe0c4b5f5b2e00bbfe3"],["/tags/windows端/index.html","d50894bed9ae371436f049afdc711233"],["/tags/xray/index.html","2f136228a11a50a9332f9e142ac75a00"],["/tags/下载/index.html","a69ac73522811704c5ecc30be251c7f3"],["/tags/不限速/index.html","c8016de5002404568d4451577ef5a022"],["/tags/个人网盘/index.html","5479ea0cfad5af492f1e938d043a3d98"],["/tags/主题/index.html","d61fb9ac0c6a797adea509e14808ee2b"],["/tags/云便签/index.html","be08431117822b820dbf801488b944e9"],["/tags/云盘/index.html","978730ef7d8167549b7e6c3e3b318748"],["/tags/人人/index.html","50573b13cfc3dc5cef7ab646c9a96732"],["/tags/代理/index.html","28c30759fe319c9e02996b02e384c141"],["/tags/代码/index.html","7ec4651e554bd5bdf4f78c382a5664b0"],["/tags/优选IP/index.html","cbe08fbc5e6c3c079c0ad480235dec57"],["/tags/便签/index.html","2c0264ac25a6b3b15d340c87be7fbebb"],["/tags/保号/index.html","e7c79bc8db63075278e5a0852980f656"],["/tags/免费/index.html","445bb8cdceb8aa4a61a8e14b7313f27b"],["/tags/免费节点/index.html","ea5a311f7b95290b8264aac6d76d78f0"],["/tags/加密/index.html","27d1fc1f79f847f1cd235f18a75c524f"],["/tags/动画/index.html","b009f4f14fd30bec085cc34474758168"],["/tags/博客/index.html","4b489163727f0384ec57160bcbc5a394"],["/tags/历史记录/index.html","46b0152401035074ca8134274280d648"],["/tags/压力/index.html","1bcb9efcbdc34d5995521fca790a80d5"],["/tags/压缩包/index.html","4bf9e6eb7b49203566f7bbb4c9f7bbbf"],["/tags/反代/index.html","62e21d2469fdb899ec51ff3a1bf0cb92"],["/tags/可视化/index.html","cae83ee9112a7deeaa4200915b57853f"],["/tags/命令/index.html","eb000a8f40dd7e85f6a7a2e450ed1098"],["/tags/国家/index.html","f6e8c690fee05fbc1422b67ac681ca85"],["/tags/图床/index.html","98d8b064b8a55f36307467be28ddf89f"],["/tags/图片/index.html","06ba5689b7121cc2338ab7ac90b5f8b6"],["/tags/域名/index.html","dd157c6f47a397a3dcc2cbdde3c5f4c1"],["/tags/多标签/index.html","0507484502b1edfe4e737da42c10faca"],["/tags/存储/index.html","97be291aed75f9cbd5c10a503c24c1a5"],["/tags/学习/index.html","d0487fa525aa6bd8fa59c6f66d04748b"],["/tags/安全/index.html","e5f68866a9248a666f61c02c22052008"],["/tags/安卓/index.html","452df9fcdc1887d5c7175becb0ad7a4e"],["/tags/宝塔/index.html","f3a3d44cbfb13b3ec7052ead31230387"],["/tags/广告/index.html","b461bd147422450ecf28c91732e05515"],["/tags/建站/index.html","1a472612db46ac808fb3ee6ef0b2509d"],["/tags/影视/index.html","9abc2be8b8f8396f36d325d9661789c6"],["/tags/快速启动/index.html","750d8c7bbc5d98c27bbea1ce28b50570"],["/tags/手机/index.html","a1a892a9631ff7c899be189f4e7bda82"],["/tags/托管/index.html","ff92ae385def36581104f472cf3fe6c0"],["/tags/抓包/index.html","7b1335ec25d9070ec686c5ae9f79a900"],["/tags/抓取/index.html","e65c46d7eb884cf8277dbc19622b749e"],["/tags/投屏/index.html","5323cb855e011f639aafd3b6f5b8c1fc"],["/tags/拓展功能/index.html","1e091effc0c252371845df2e75caaf73"],["/tags/挂载/index.html","6927a3706ab30931536a08efd85d2749"],["/tags/指纹/index.html","2ab0da66babf00042dbb86053969cd03"],["/tags/接口/index.html","adc3556aa3a52f01a60ee7a41532d43b"],["/tags/提取图片/index.html","34f77ab518709bc05145a0490322d8ee"],["/tags/插件/index.html","9cb47227ef81550aedfd7c87bd0f1fc2"],["/tags/搜图/index.html","ed2c460d9bc06938fa36f6a03c5ac9bd"],["/tags/搭建/index.html","24bf12c3eac0abad2dfc6239ed0c85d3"],["/tags/撤回/index.html","395734f4dd576c7130f714d72f379013"],["/tags/播放器/index.html","02375456a0b748633ad41e186993a97c"],["/tags/政府网站/index.html","8cce8a569df61bc84a05c58933c50af7"],["/tags/效率/index.html","4e2d65df1df1b537cb57a783b5f6d32b"],["/tags/日历/index.html","639d6ffe0693d5f22444ca4ee02b7188"],["/tags/服务器/index.html","38a7a0d73dd586a69c102dbe6bcd22b0"],["/tags/桌面/index.html","d1d7499f3844f5e91b686e139086eacb"],["/tags/梯子/index.html","1d0aa7aaeb487a2fa388e11b53b0f29d"],["/tags/检测工具/index.html","8a78ea7c96b1d35c0bb4eb3376d1e8f0"],["/tags/汉化/index.html","c8499c009f53b9467b9d89331cdedf8b"],["/tags/测压/index.html","93e22c3613dff6c9dfd9f7034f07e37c"],["/tags/测速/index.html","9f1b49bc549832fc2151c8d36740926f"],["/tags/浏览器/index.html","cbb6018b4129f4a5e4bcb0a45cd53cef"],["/tags/清理/index.html","1f6044f26cbd7455cb64574d1bc276e1"],["/tags/滚动条/index.html","60a6051dafe3f6be2d516a5e22b2048a"],["/tags/电影/index.html","6ab7a5aa1ef4b993ce7c989e020628ea"],["/tags/电视剧/index.html","6945c1e16848c42dfef474d467de9761"],["/tags/白嫖/index.html","479b4e1aa1a0f21167dc2feb8772648e"],["/tags/百度/index.html","62f172ed720c76bc4c44d0c325743b08"],["/tags/百度云盘/index.html","143fa7ae363d971aadb3cd59512aaeec"],["/tags/百科/index.html","24506053a9752eecbbbf2828b32866b9"],["/tags/短信/index.html","c7bbab13f75de67f80cecf3bd9cbbf25"],["/tags/硬件/index.html","d0cb0d20f5765150ea07efdbffe12301"],["/tags/科学上网/index.html","fe45203bde1e64ed987b1e6ccf925e83"],["/tags/空间/index.html","8af48e60d58ba5ff2b9a00a1ddefaf29"],["/tags/笔记/index.html","c5253282463fdc063ddaa81af472c1e4"],["/tags/简洁/index.html","158aa623dca9100a7217ebd19bf560b0"],["/tags/简约/index.html","e81983aa15cb43001845f158513eb4cd"],["/tags/维基/index.html","87a5e46ee6f07dd312e662b21916ffe8"],["/tags/网易云/index.html","75ae5c24411b074237a63bfa15928ecd"],["/tags/网盘/index.html","597107f966b611672762766eea30de31"],["/tags/网站/index.html","9c4d9f74ec711a0d5df106ade30ac910"],["/tags/网络/index.html","96b39b90c8804d2b398c1d3282cfbaeb"],["/tags/美化/index.html","0feb3d9498896d921ad5a03df59779ac"],["/tags/翻墙/index.html","fee4b0dfd04c041c7c9b81c350dbd4e3"],["/tags/翻译/index.html","25a6a3ec77a7a3835f91d95a82ff0a6c"],["/tags/翻译器/index.html","3119db59fa8d16aad6aaf9d058003503"],["/tags/聊天/index.html","8255fd55efddb57ea9956b900d48fe3c"],["/tags/聊天室/index.html","cb45aacd8af206c96c44d58c04a0a2bf"],["/tags/联想/index.html","df95cfa28b775f7b516c277566dbf5a1"],["/tags/节点/index.html","2aae05de92fa1a3e64a7b064c58b97b0"],["/tags/虚拟手机号/index.html","e52c273814e4bbe88ec1d5d29f39d975"],["/tags/补丁/index.html","a41cee09c4e1a889d4c3a5294c8ac28e"],["/tags/视频/index.html","38d42f5a4b35440bca9d35ff1c2f25f8"],["/tags/解析/index.html","10fe97c81b1734c5dfd60e1dbef73d37"],["/tags/订阅链接/index.html","c41bfb7ec0a2cde6d4c58fbd9f2ff631"],["/tags/记录/index.html","8b8694675f50255a9f53b81ac603991f"],["/tags/识图/index.html","ee59f1c2ee7982395932a6526b9498a2"],["/tags/语言/index.html","29889e6d0e69b1ef7877cc7ecb225716"],["/tags/资源/index.html","a1b0b1d4b71ce49ccd3b1eaf64dcd85a"],["/tags/资源管理器/index.html","65f629a4c047d95b4bf61781b9e1e081"],["/tags/转移/index.html","3a14834766c525c60877d4c145941531"],["/tags/软件/index.html","9c48fe94007abea332331da3c1e575f7"],["/tags/轰炸/index.html","91963a590ad3973827088231aa7c3ea9"],["/tags/迁移/index.html","3242be0cea481158b370a3363f2dc4b0"],["/tags/远程控制/index.html","f719e1ac0f080b29c6478b2b3ade9a4d"],["/tags/连接/index.html","5bd97f3e0ffdc59b6e14c09cfd74bb2f"],["/tags/追踪/index.html","97f27551d0c3683506a68f10ad857bab"],["/tags/速度/index.html","ac6e2633a55751dd732557cbe3ead9dc"],["/tags/邮箱/index.html","58fa9bfd910811c9bc7fbe36bae6c3a7"],["/tags/酷炫/index.html","2ba40154fe9894a88e018d0b45020ade"],["/tags/钓鱼/index.html","02251d4d94521757d00fbce59d29d0e1"],["/tags/镜像/index.html","95bb28ec17df0a7832d6305c8005ddaa"],["/tags/随机/index.html","2a5ccd412596881fc6c52aaa703afe12"],["/tags/隐藏/index.html","14ef3a83e854e4b871603cc82511c54b"],["/tags/面板/index.html","ec0fca12ebedd81193fab24ad4b0786a"],["/tags/音乐/index.html","8bb4ea565756b72d7da482fda98747e2"],["/tags/高颜值/index.html","d8884b12a3bcf00a1109b9984155fbda"],["/tags/魔改/index.html","a99556c55247483f0b31592acb31aa50"],["/tags/黑名单/index.html","99ff1078e8f05f3e4dac29d3aa19e91a"],["/urls/index.html","4935169a6e68b108856f111705b6666f"],["/vps/index.html","beda2cbd7b01d0a7abb04befd66181b1"],["/支持/index.html","f24223c39fa047d1469895c3427c31e2"]];
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
