/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","24d6317d3a03f027d58485e551b0eb05"],["/2020/11/29/clash-windows/index.html","a39c9252428b4f511402dcfcec39e93f"],["/2020/11/30/websites2/index.html","0ec47d17bdb6456bc518ff13768eafdf"],["/2020/12/04/iphone4s/index.html","e786bb117485fb8f736b5b57f84fa183"],["/2020/12/04/onenote/index.html","469e5e59f2ccfa9167a742b1967a3b0b"],["/2020/12/04/wesites1/index.html","8779c6552aca0911f153c3dac1b39a43"],["/2020/12/06/nokia808/index.html","7ace5d65ad88092d267b874d448a540e"],["/2020/12/07/ipad1/index.html","4d7c66cb84cff60a6e8334086747b149"],["/2020/12/18/freesubscribes/index.html","cee110c5652adb1276a400f65ef637e2"],["/2020/12/19/musics/index.html","5929b26fb009d019e19ce037326a7427"],["/2020/12/19/shadowrocket/index.html","67eba5dd4b51b45de838e4db7a9a342f"],["/2020/12/19/v2ray-windows/index.html","901ae196b218e05600b199a33e32935a"],["/2020/12/19/v2rayng/index.html","330af251083372b3747574632c53d71c"],["/2020/12/20/beoplay/index.html","f70c3de1274665ee7791f7d47587948d"],["/2020/12/20/订阅链接转换/index.html","691519705dfa1834cc80145329f8ec9a"],["/2020/12/21/chrome浏览器下载提速/index.html","7e5cf5dd0e23f7b96d2af008710d7e96"],["/2020/12/21/免费128线程并发下载xdown/index.html","1e6d6aa66d019de8ec6da1a1d4343257"],["/2020/12/21/免费32线程下载软件ndm/index.html","df832b6cee6d76bcd6d1fb4b7136102a"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","fcbd6ad2e8e63a069a44a36992c5c699"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","234224a16b391b294cdd6fbc5dce9132"],["/2020/12/21/广告怎么知道我在想什么/index.html","cabffaf3ee5cf8ff6c93c45de805e9db"],["/2020/12/21/无名·引子（小说试写）/index.html","6c1a20646783aae08304e0fa1aa78c66"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","8006539c4d3c4c889d9bd6a6a85d80e1"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","c148523e66c9761e8d2a54578663a52f"],["/2020/12/21/高速轻量下载器aria2/index.html","d210875793299742f7d3e57f7a5b7919"],["/2020/12/22/2020-cee-roo/index.html","ec141d318f6c5cf370615e88934a6c96"],["/2020/12/22/firefox插件、github、steam富强/index.html","a1279b13d5f2cd87c9d8a4971473918e"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","1f50c3f236e0d698ecec4edf19324827"],["/2020/12/26/python-day-1/index.html","0660d030c4c1eff7bc1d9ca9e9c0baf3"],["/2020/12/26/python-day-2/index.html","2ad0c505b0566cd934d3bb57e17aceed"],["/2020/12/26/度盘不限速下载方式一赏/index.html","6969895851564a950a0d17876353cef1"],["/2020/12/26/添加开机自启软件/index.html","7f7382a32aad545a1a70b39999ffb4a8"],["/2020/12/26/电脑端截图方式一赏/index.html","8fff353c6a2370aa1b750b4bba5801b7"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","c1d0fae500961f58ca6ce3680edd5482"],["/2020/12/27/最安全的浏览器tor/index.html","0298634498bcc3207b37a4c815dfaf7b"],["/2020/12/27/网易云刷等级和听歌数量/index.html","af25013978898ac5589524a6bf0d34d3"],["/2020/12/28/freenom申请免费域名/index.html","71512c1795466a7ad00026f26d8b5be0"],["/2020/12/31/机场/index.html","0197fb966df47ff1726633de256cf95b"],["/2021/01/01/M1/index.html","b47414ade583f7db4c60aa5e4acbb302"],["/2021/01/01/compress/index.html","b0b22c89aa31806f52426aca50d82f64"],["/2021/01/01/infinityfree/index.html","7e722c0ade25d4b31013ee9f775955fd"],["/2021/01/01/硬核翻墙/index.html","a259d36856765366ff9aace94fe68dd2"],["/2021/01/02/qq/index.html","f3f7907b2645b2dc2cfb1ff3c54f9a45"],["/2021/01/03/netch/index.html","4cc0079162f96133c0959a13f441e62b"],["/2021/01/03/waifu2x/index.html","6676c91cb0a230d333a39cc7220317bb"],["/2021/01/04/ads/index.html","316440f60028fec377d199a9a0637b1f"],["/2021/01/04/games/index.html","6d8daa3bb1ac37d6fc446b690c52a99e"],["/2021/01/04/heroku/index.html","9fc7714d22c873e0ca38acaebc4518d1"],["/2021/01/06/movies/index.html","5a74b12d85b095be8d76a319800fd849"],["/2021/01/07/google2020/index.html","ad6bf91ad4325062abb87b0536ddcde0"],["/2021/01/07/lucky/index.html","fb36d8c6d3cf2d67d7f561ba2f123225"],["/2021/01/07/spotify/index.html","a7c3cd50b98baa066894f77feee4bb82"],["/2021/01/07/thunder/index.html","d8acef818350641b372ac1993d82ebe4"],["/2021/01/08/adguardhome/index.html","cf8a088cdcd9b4e739fcfc99d1125308"],["/2021/01/10/IBM/index.html","33ed713023cd858a5629c20a80971a4f"],["/2021/01/10/potplayer/index.html","1aeb911af228cc2cae699ae19844ed02"],["/2021/01/10/sakuraanime/index.html","7462c0a51435d8c78e437fa99a77fcb4"],["/2021/01/10/美剧星球/index.html","249ef83c44994314445145db7e9653d9"],["/2021/01/12/telegraph/index.html","ab2f96984a389d89ea0804edd76e5186"],["/2021/01/14/comics/index.html","068f36cf0b662508b4e48cd3c7be69fa"],["/2021/01/14/ftp/index.html","f32ba8fb3deb971b5401fdc280ad6c86"],["/2021/01/14/oraclecloud/index.html","0f1ade0f806a16045c83f4cfcbff3e60"],["/2021/01/14/porkbun/index.html","f3f802aceca47522dc0923434a5fda2d"],["/2021/01/14/powertoys/index.html","42c42dc1135ff4641eb93c8f6e4fae87"],["/2021/01/14/taptap/index.html","1b070334b6876da8a8a434fbc6cc116f"],["/2021/01/14/ubuntuvsftp/index.html","e3535ed0582867bbd98dc88b4f217622"],["/2021/01/14/小说/index.html","9f1a91cf820ae349376b8da421544212"],["/2021/01/15/freeproxies/index.html","b9ea4ce616501a59a459dcb58751cb6e"],["/2021/01/15/incaseformat/index.html","34ff7752020cd543a28462cefb3c2ab6"],["/2021/01/16/euserv/index.html","5050bb34eee8091eb3b4a9b4f6285393"],["/2021/01/16/winxray/index.html","073aad2d59bb6a5e2d01f1287e77fa29"],["/2021/01/18/qqreadhistory/index.html","84001f8fac0cc8877a946a5608c42afd"],["/2021/01/18/qqrevoke/index.html","ba36467e78be4efc1461891d331c4f02"],["/2021/01/19/freevpn/index.html","32304840842c12456ce79b6d66a9cb4b"],["/2021/01/20/browsertrack/index.html","09bc911a4671c8d61d8b0451ece9a47d"],["/2021/01/20/v2ui/index.html","fcf536577ae92b3ff1b3cdb243c85d35"],["/2021/01/21/failedtoconnect/index.html","d35d82f6bfc5035b1684fc58e9b2dc01"],["/2021/01/21/gitcalendar/index.html","9d1bedb149f80761e3f682cd5f89f41e"],["/2021/01/21/markdownformat/index.html","29593f18b09f1e86a75fa49bd159da67"],["/2021/01/21/markdowntable/index.html","ae3cd453607f2a79a97aa140b9267b5b"],["/2021/01/21/vercel/index.html","fd2788227ec3079e7b30fef79858ba4d"],["/2021/01/22/hardware/index.html","1fc2f04a4a62cd622d1e0b1ea82de245"],["/2021/01/22/muviz/index.html","56e4add92bcc64e4268ce00acb26e461"],["/2021/01/22/randomapi/index.html","283cf954afceacf93d31e43377677e74"],["/2021/01/22/searchimages/index.html","3face521b0ce4d296a471ec254195edf"],["/2021/01/23/RX文件管理器/index.html","29ac4e633f0e763628bf2f970abd3c9b"],["/2021/01/23/chromeflag/index.html","15711bd4c6b6c79616793a9c2bb86038"],["/2021/01/23/qttabbar/index.html","86cf931e2d618167367be1136683bdda"],["/2021/01/24/githubspeedup/index.html","3b2b8d40814ed8ae9456a6ea03d4aa41"],["/2021/01/24/jsdelivr/index.html","1b3f33c62de22866ad7ab9529255769f"],["/2021/01/25/note/index.html","6d2520fb13af227cfacfa51ca16da79a"],["/2021/01/25/soul/index.html","8556cbd5f89d7d49517a862f957546fa"],["/2021/01/26/herokuxray/index.html","f4cf1d5f3a19631b7f6ca210e7e4976d"],["/2021/01/27/proxypool/index.html","a87749848ab601f164c2bbdcc089d179"],["/2021/01/27/tracker/index.html","f9c63024dcd566644b1e126b0f36fd30"],["/2021/01/30/pandownphp/index.html","44e4ead1fd826e89180db32840286330"],["/2021/01/31/newgroup/index.html","e95d939b94c65146373cb14547fcb079"],["/2021/02/01/clashlanguage/index.html","03cc11e70562ced013da16bba0168291"],["/2021/02/01/encrypt/index.html","aaa9609e1f5361e50b5c804356103fa0"],["/2021/02/01/footermotion/index.html","56debd2a09ab5ae4afdfbf8b4b2373c3"],["/2021/02/01/gitter/index.html","6a7671cc05aa06b1e80f64bd3d4217b5"],["/2021/02/01/pixivtop50/index.html","c8bf06918ebf89d175b2d2f751bc98d5"],["/2021/02/01/scrollbar/index.html","7df7c25d36b466b8ff5ca0b4d7b5183c"],["/2021/02/02/clover/index.html","1b283b573167a3316178eead48b6e7bb"],["/2021/02/02/maya/index.html","1b4e2c718fc27538fcac1457957352ce"],["/2021/02/02/speedcontroller/index.html","9aac57a08e0ec92999e9d848af519faa"],["/2021/02/02/yesmusicplayer/index.html","266ecbebb08a67e713ce57b78d57f041"],["/2021/02/03/lenovoonelite/index.html","f184c9f3f51a19879103af0678432bac"],["/2021/02/03/skipads/index.html","26b807843004c325ebd8e5155a4009fc"],["/2021/02/04/picseed/index.html","9eb5600d0231f8967dba3241d7bde3f3"],["/2021/02/04/renren/index.html","8f425bcff7b687e8f77d548cc987a1a1"],["/2021/02/04/serverstress/index.html","52b3e7ba26ce04d64196e4a6cb67bc18"],["/2021/02/04/wikipediazh/index.html","136288c48ae4b90d725f7a3fc83be3cc"],["/2021/02/05/googlevoice/index.html","b8e79c9e82aba08757d648e2226f38c5"],["/2021/02/06/clashconnection/index.html","7cafdec19e2a2ae9815bc8c4de324740"],["/2021/02/06/gvtransfer/index.html","b311e78353c12c6cbe621df1bacc1cfb"],["/2021/02/06/todesk/index.html","5891f33868344f23996037a68d7ebee6"],["/2021/02/06/vpnblacklist/index.html","c4346062676b345d508b0e35e133a2fe"],["/2021/02/07/mklink/index.html","7e6b2eab26450d7586154e81821662c7"],["/2021/02/07/speedtest/index.html","ecc394f84663e400583073505dcb5f2c"],["/2021/02/07/translate/index.html","b9aa87e157a0ba37aeb75b1ccfec1ad1"],["/2021/02/08/ewomail/index.html","700d6a7786d543bda067f67af1f462e0"],["/2021/02/10/officee5/index.html","667f5b45e42255764d380266e2d85e30"],["/2021/02/10/raidrive/index.html","e2d73f68354d9b21fa54a2a3da1a33bf"],["/2021/02/13/e5sub/index.html","522e816e6a1e45bfb2d4e562333435ad"],["/2021/02/14/screen/index.html","0ca059b6ea39fd8c12c7898df342a191"],["/2021/02/15/clashtun/index.html","06a8d1299496bad71ff3ca0be9164e1c"],["/2021/02/15/messageboom/index.html","d8729ef63e67f994f183137a7b2b5758"],["/2021/02/15/oneindex/index.html","ab7f810ac0faa331d6b1f0b50e987f14"],["/2021/02/16/govsites/index.html","b364047a7a0cb93a3bbfc8d074392a6e"],["/2021/02/17/hexototypecho/index.html","9c795f1786ac24cafa0529b64f6304c6"],["/2021/02/19/fiddler/index.html","3c846a32e81f1d0a14959d954fdd6d20"],["/2021/02/22/potplayerset/index.html","8bb70f54112d42f273d552b21d926678"],["/2021/02/22/studyresource/index.html","5a2f2b8eb4b63629987df10923a54569"],["/2021/02/22/telegram/index.html","fab2c96da40adee722a18891c5bb05d2"],["/2021/02/22/videos/index.html","66f6d0a2bab01b8ad84bf5bc9ed1851f"],["/404.html","de3c16227ab038a3b5cfb98cba539b16"],["/archives/2020/11/index.html","499f3406ccc4ffb9274ed0287eb03d06"],["/archives/2020/12/index.html","c48b9b2fc560e6a000886f0167a506bf"],["/archives/2020/12/page/2/index.html","6d0102b6ded8bee3584ed53686dc7b6e"],["/archives/2020/12/page/3/index.html","29719430c4b972ef7a475a88f954af0a"],["/archives/2020/index.html","ccb6b63a1d73fe64a8530b17c52fa3ef"],["/archives/2020/page/2/index.html","2a9823d698f0edc0e3d81030d5212fb5"],["/archives/2020/page/3/index.html","12ba24080d9c923f377941cf969783c9"],["/archives/2021/01/index.html","07bb27b460ce39938fcd8fed6eb93d30"],["/archives/2021/01/page/2/index.html","91f490644d37d12bbfbb6839a550248e"],["/archives/2021/01/page/3/index.html","7f85e4c77f1f8cd32058858241d4dcb8"],["/archives/2021/01/page/4/index.html","be92d74632f18b99952fc18ca47b4237"],["/archives/2021/02/index.html","0081cc1400ad3b1120eb39d7a8371a9e"],["/archives/2021/02/page/2/index.html","bea195c934f787a224f46ca48e72276f"],["/archives/2021/02/page/3/index.html","9456a417e7b3462731d27d6152aea335"],["/archives/2021/index.html","37c3996362be287759b511f20db6918b"],["/archives/2021/page/2/index.html","a5e09f28bfbfc321f775834738390806"],["/archives/2021/page/3/index.html","fbe405df9b8baaf69b22a4ed35b3a633"],["/archives/2021/page/4/index.html","0130f13700dcfaa5f4bae5c5ac2ac1ba"],["/archives/2021/page/5/index.html","902f99501a56c34aa8771cc77336d51c"],["/archives/2021/page/6/index.html","6a3d4fd9736e76f49d437ccad39697c7"],["/archives/2021/page/7/index.html","970742cf9181d584263762880fedd4af"],["/archives/index.html","74577866a40d16d3f2e25510f4043535"],["/archives/page/10/index.html","3c45117bcec5f014f3785a8b41178993"],["/archives/page/2/index.html","bc23e11da4b5f863b77e37d4f30c74a7"],["/archives/page/3/index.html","177bc2f2a6316264ccbb8e081ed2297e"],["/archives/page/4/index.html","82a6bc51043278e68e5b427160aa6cd9"],["/archives/page/5/index.html","8ea49d91a13da260bbef71d44a0f1aa8"],["/archives/page/6/index.html","60f4444a96445a13e2863e36e1d516f7"],["/archives/page/7/index.html","79002a39c1883ff47e60974eab0edd49"],["/archives/page/8/index.html","66b1fa38e2e12fc04579f5b5b4487720"],["/archives/page/9/index.html","e2ca2d7d1fce92a8b4819890ac937064"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","1feaf669b9438db8b77a9fd6b54da709"],["/categories/index.html","0d050af16df8debf78d117932911205d"],["/categories/下载/index.html","49d1107fa58972dd5723b66431bda827"],["/categories/安全/index.html","5609ecb636101209e0c7f60741f4e161"],["/categories/建站/index.html","4435f6c6e08b8cf90b57e220d0b365ee"],["/categories/杂/index.html","614d51b78473f2b3431dd9350a2fbdfa"],["/categories/杂/page/2/index.html","9c245377f7e6c86fd7d326bcb7c199c4"],["/categories/测评/index.html","54540a585aa620747bc78cdb1a659a6f"],["/categories/科学上网/index.html","2a564c88e4db3266bb18f6044660e790"],["/categories/科学上网/page/2/index.html","e7c100b68f994a87b45a300209d57c49"],["/categories/编程/index.html","0f411872897f6e6d70f96afddf130f83"],["/categories/网站/index.html","7396289b119f136e03d041396081e677"],["/categories/网站/page/2/index.html","299eee717ef36070f32d404f340e03b1"],["/categories/软件/index.html","f1296292b48f2b4958e33f5f7b83fba9"],["/categories/软件/page/2/index.html","235e67920d428a47ebf945f752385984"],["/categories/软件/page/3/index.html","c5630cd465e6402f9fc95b081c867c94"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","f348c872321257e57b8ad7681c9eabdb"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","9b0fee475f0b43d5563c3c0dee8bba97"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","b1bb94f4d38e42706e2a6f7b348338d6"],["/ios/index.html","61060a33fd29f194ccf82c966951a8be"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","6a7f820a12e8012144e65e2185b5789f"],["/page/2/index.html","1e4b8b2441a238048aeac587d035700f"],["/page/3/index.html","07c4bebcea8b7c5cf3f63a582cf4ac41"],["/page/4/index.html","66173ea9704698e74c19106228420f58"],["/page/5/index.html","c46ca5c943e4f5b26bd49a6225d2f6e6"],["/page/6/index.html","f8404e2715d52cd7f6e0c273f2c0c090"],["/page/7/index.html","ab30f94e0446203dc4e6f8e46836775e"],["/page/8/index.html","78fbe4f632b3538161dbaf13d100a67d"],["/page/9/index.html","9c9e689f6d90abbac2fcc8bed130576b"],["/payment/index.html","daba8932bb91b26d5bd95e5e3ff4455b"],["/privacy-policy/index.html","39bfd0c8952f4f1e13a5bf3318ca47ce"],["/rss2.xml","cb8042e3c712660a594e8ce38405dbec"],["/search.xml","07643488a21d4247679952751768dea7"],["/sitemap.xml","9572f33b8caa2f2c86e9f84a994eeddc"],["/sw-register.js","1b6bd48497e1f6b5416ed1085c689786"],["/tags/5t/index.html","ce2f6e6cbc53106a1f44324e8b03ca71"],["/tags/Clover/index.html","8c250c1cee909b129088aa377724623a"],["/tags/E5/index.html","0d0d8bf4ddb325ff97771c31f81e94c8"],["/tags/FTP/index.html","93879f8539ebdff17f6b5a8ce5967e15"],["/tags/GitHub/index.html","644913b43955748acc349bcc9e7f6169"],["/tags/Heroku/index.html","2bf899e9b345b1548f1e32d4596694a2"],["/tags/Hexo/index.html","07815a1c3748ded2ef68f0b426ab4cca"],["/tags/Lenovo/index.html","c29179375953475bc66ca5e809b6a266"],["/tags/Oneindex/index.html","6a6d940599beff2281b38534c79560d3"],["/tags/QQ/index.html","35e57220b265ec3dbee26ba817e44173"],["/tags/QTTabbar/index.html","1adf57633313ddb6284992db83b4a12b"],["/tags/RX文件管理器/index.html","e1cf148253e9bb0e4c6cc3438204402a"],["/tags/Todesk/index.html","8d87f550b8527bbeae03ecd4305ab66a"],["/tags/Vercel/index.html","137399f3ad41457161ef0ccef9665f8d"],["/tags/ads/index.html","c7424e748cd36461ae1f4347e0fa98bf"],["/tags/api/index.html","a162635bb8d21fa8809d7ac13ba3f39c"],["/tags/app/index.html","b3e95f59de4b83167db6fb0320fdaa97"],["/tags/blacklist/index.html","4321b034ff7a6a31fe515ddd7800877a"],["/tags/butterfly/index.html","17802ac19e21d478b7559788d7ea8b97"],["/tags/chrome/index.html","f13f74f2529cf3cbdddd103bc20abc55"],["/tags/clash/index.html","79d095e682a6f56b79c3d4fa6da8b781"],["/tags/cloudflare/index.html","b1fe5706b8856d3f086c7e55ebc077d0"],["/tags/cmd/index.html","4ce2bbbc62441132f3f38dd627722da7"],["/tags/c盘/index.html","141bc882ebede2c2f5a3d4504bf252c3"],["/tags/email/index.html","782776a56c7486dfddcbd2e890f872df"],["/tags/ewomail/index.html","43afc19139c72d0b132a50f239bf56cd"],["/tags/fiddler/index.html","e6a580e90f75372862aef8f1d47f4c4c"],["/tags/flags/index.html","a5206d19a774f17563737f8e2e71a519"],["/tags/footer，页脚/index.html","a45a8ecbbfb181c2a0261aa356401349"],["/tags/galgame/index.html","d967c71bf8da0847b4a33601db6b0bbc"],["/tags/git/index.html","632d059137f9b37640dcb05e05411a57"],["/tags/gitcalendar/index.html","2369eb4716c1cc1602055f28a164a666"],["/tags/google-voice/index.html","8c1ef628b3377ce7a10dc6a3e3dd5c1c"],["/tags/gv/index.html","5ee8839d98c725a15c477adb08931b2f"],["/tags/index-1.html","28e638e6ff7e76182779235e597a89f1"],["/tags/index.html","2b08aebc3ba910a2d7eb7d7f35876f8b"],["/tags/jsdelivr/index.html","53946edb0a96386a337cf2ca4de7b69f"],["/tags/linux/index.html","f4f9aa4a15e6fb592e08002650f85837"],["/tags/madVR/index.html","99c166f3fdc0498f9cc2c2c73294acb5"],["/tags/markdown/index.html","2ed22e8d9d262268b66c42c33f68398d"],["/tags/maya/index.html","273e234897dd407df4c8ffe5578cd7b9"],["/tags/mklink/index.html","b4a7e4ec653fc2cebbe599705c086b46"],["/tags/office-e5/index.html","8540b3a382739c55c7537af42731abc0"],["/tags/onedrive/index.html","448049e972bab45b0e5eca351325da80"],["/tags/picGO/index.html","3c2f8e6ada8d9a66106c2acbf8644887"],["/tags/pixiv/index.html","40a316a092bccaa12df3dcca43fc0efd"],["/tags/potplayer/index.html","30e7ca934c422d66e42520db50166536"],["/tags/proxypool/index.html","06f6cdd2416ee5b2c09e993025fe0fc3"],["/tags/qbitorrent/index.html","a7e99e149a7415a4dc8ddda1c02bbeb8"],["/tags/raidrive/index.html","8cde83e092c3c2530af6b6e49c597016"],["/tags/screen/index.html","9200a4e2158743a34919431d91c3b45d"],["/tags/speedtest/index.html","ec907500fcc52d83d1c8079ebd65ba1d"],["/tags/tap/index.html","e92f7da7e98c98ed776eca9fb2f2c5f5"],["/tags/telegram/index.html","39767845e47ae6afb418f2c074b2a210"],["/tags/tg/index.html","f48b89973e3db71f477bd95450502392"],["/tags/top50/index.html","719dc9445f82c86aa6c7574e2040e5da"],["/tags/tracker/index.html","acc0e2af9f70e77be6e5b07c0ce488af"],["/tags/translate/index.html","aed4bb7722bfbe109839d317c2bfd707"],["/tags/translater/index.html","9bcc24b4496625142a8e8f0f327a0e83"],["/tags/tun/index.html","d7e5831caabd348bce6a8f03507f9153"],["/tags/typecho/index.html","8fd537ec336531c36771cb3390110fc6"],["/tags/v2ray/index.html","ea6987e1628a08e8feb5e712ff58e4a0"],["/tags/vpn/index.html","3020ab0ae775d4bf83124655b5f900ee"],["/tags/vps/index.html","e778e759e86d3b6733900d038d46633a"],["/tags/windows/index.html","1b616232026e25f9f2ccbf8fa7b42808"],["/tags/windows端/index.html","1ec269f9ed74cab35086ca4dc577c7dd"],["/tags/xray/index.html","6eaa7bebea3e2aef976b169b0fe3f106"],["/tags/下载/index.html","7e57f829195d05a703ab3c167c1d4698"],["/tags/不限速/index.html","9c7390c84fd4b4e1e617f809752c990d"],["/tags/个人网盘/index.html","abeb9c719a4b961f6a3a2032d186d7f9"],["/tags/主题/index.html","63506d8aac11b84d46146a2f4b237cd0"],["/tags/云便签/index.html","4960a60c556da9b6b83140c5fd1ca723"],["/tags/云盘/index.html","169fd9d9a071043b5cc11b0270037be0"],["/tags/人人/index.html","4c684ee96d8b51023e6ad0fb87828a9a"],["/tags/代理/index.html","feb275b1db9ca00852e68089db018de1"],["/tags/代码/index.html","da735a3475a6c5690b87a4446d789ffa"],["/tags/优选IP/index.html","ad779f7f94f0975f5f53f603166b37f8"],["/tags/便签/index.html","40936932fd992d0bcf570691d85b66b2"],["/tags/保号/index.html","911295381524da39ed225daa77b468f1"],["/tags/免费/index.html","06fd0d180b9970f0f4f18b92fd458c04"],["/tags/免费节点/index.html","83fba735032107a9867371d2d424d4d9"],["/tags/加密/index.html","5d5213355bb1b38272f212ff426b67b6"],["/tags/动画/index.html","12a9ae9f6d3c81859ccbc2efd8b31977"],["/tags/博客/index.html","c0b36407668538ea113fce978f3c8295"],["/tags/历史记录/index.html","b3c7abed1c844d65984cf8e70c97babb"],["/tags/压力/index.html","cda689060d504cf8bcdf9a7dd4a2e283"],["/tags/压缩包/index.html","70b3d863b52df98b2b8f0b2ee618b15e"],["/tags/反代/index.html","084376d19b281349b7dea4830d1f3871"],["/tags/可视化/index.html","b534c47ebee053c4286c34b1d6b049d1"],["/tags/命令/index.html","3b9907b5c359e9f961b6c8cf8b98beb3"],["/tags/国家/index.html","3428295208fb3c020a63d72a1132a199"],["/tags/图床/index.html","4ce8aef5f2b5a3d5c4e240551b3b4131"],["/tags/图片/index.html","359116e9db38969d6a2fc86e8f475910"],["/tags/域名/index.html","e4cd7dc3109fd12a81471680ca8f36a0"],["/tags/多标签/index.html","84057a1693274a6c2fbe922fe36b33ea"],["/tags/存储/index.html","02efde8d0266b87c9ad3ec4f5fb11c95"],["/tags/学习/index.html","9585fcb350d3a2017d1d47dc40a6e02d"],["/tags/安全/index.html","7afd54d73a3be449f32bc4ab07e844a3"],["/tags/安卓/index.html","9c5ea86dbc7826ec0102ed2115328234"],["/tags/宝塔/index.html","8495aae5d4f009f24093e4b89851dc25"],["/tags/广告/index.html","659c5fe941f1187ad1776f23dc5a87ef"],["/tags/建站/index.html","9ab4d5a227c149636de6ecec4a213d01"],["/tags/影视/index.html","adfa20a683dfd709f9386e60e6fd2758"],["/tags/快速启动/index.html","5003ab2af90f7aad26b3478d8c5136dd"],["/tags/手机/index.html","f14b9fa8c533a4fe067d8fcf88a1a0b4"],["/tags/托管/index.html","40f82c595bf345df6bcc64401de2fcba"],["/tags/抓包/index.html","1faf81c12082e1fabb25820f788cb70a"],["/tags/抓取/index.html","ac448b2d2774caa67eb0806acd5501bf"],["/tags/投屏/index.html","0b5798f8125279d78d7be2b4cd424958"],["/tags/拓展功能/index.html","f53534823492b570f6402a5ab516220d"],["/tags/挂载/index.html","3bc22f0ab6be951022e1c5f5cc4807ec"],["/tags/指纹/index.html","9839f2e64eea667c2a2cf55f05959ad2"],["/tags/接口/index.html","2e54889af08d25050b57b1a161f9b8de"],["/tags/提取图片/index.html","c1ddd5d919cb5513de34f236b3775502"],["/tags/插件/index.html","298adc0f1e8374bf0627b270c398717f"],["/tags/搜图/index.html","282db85e5242a5c05d02c6adb793190a"],["/tags/搭建/index.html","37ff8686d76f2aae721c3079eb5eae77"],["/tags/撤回/index.html","50d5b3ca28fd245fa741e19ab5d65a4e"],["/tags/播放器/index.html","0e8f991cb5f9a594ebc708fe4622b126"],["/tags/政府网站/index.html","93d952e957b8e23f524af109d465598f"],["/tags/效率/index.html","b19ccb47a4eb9ab0913320174231112d"],["/tags/日历/index.html","00861ad11363707198f66407d879e403"],["/tags/服务器/index.html","57162f35c9dd250cb9da92484b5d3cf8"],["/tags/桌面/index.html","6a66a7986487ff992600b8a03975e55d"],["/tags/梯子/index.html","8eff829e629eb0b261fbb8f9e612cff5"],["/tags/检测工具/index.html","ff3e50cfe97d42cdc56bcd3951a60408"],["/tags/汉化/index.html","37e51cc12fbc240a4586226010bff876"],["/tags/测压/index.html","5360b27441bfdeeaba34eca1e36eb8df"],["/tags/测速/index.html","d6ae10c8d9a4ff300b31685d1b54f1bf"],["/tags/浏览器/index.html","ddcaeb0b57eb57cef170a55cbe2b23bd"],["/tags/清理/index.html","7b1b2adbf2c1b8847dbf98cc0a215b9a"],["/tags/滚动条/index.html","14871e6823ca0b0ce881adbf23dc0654"],["/tags/电影/index.html","16330ae0d92f08833bc501a7b21d5a74"],["/tags/电视剧/index.html","3a0f74aa9b9d145c400d116ee2be4ffb"],["/tags/白嫖/index.html","8140f75aa2ef106d15d37ec734f2c348"],["/tags/百度/index.html","16d8f80e999dcdbae72c5eb5295812d8"],["/tags/百度云盘/index.html","6c52d277cacdb06cd278ca5bf9634661"],["/tags/百科/index.html","f048704dcad50ba00af3571a9659bf8d"],["/tags/短信/index.html","772c1763716d025b3f85063aff31ed6b"],["/tags/硬件/index.html","b3fa8f1d8ae0d862181c1b2b60b4493b"],["/tags/科学上网/index.html","cfc8f94a695757d19f82995e61e5a82d"],["/tags/空间/index.html","56696244cb02f7d9c28c97ca310b2290"],["/tags/笔记/index.html","80c8282fe6e54f6701d4643d7c506c92"],["/tags/简洁/index.html","61093e9116f790eee5ae601e521fc040"],["/tags/简约/index.html","f3e533bdb9cbd5881e4ab02e075f0b8d"],["/tags/维基/index.html","1139c877dcb95f33dc9594422ed8e65e"],["/tags/网易云/index.html","48754110db3656b19f5c42b1b519cb2e"],["/tags/网盘/index.html","8444a46345a0a4a8dab2d8bdf729dd06"],["/tags/网站/index.html","73e6c4e250ff2a5dc85ec5ef0452f059"],["/tags/网络/index.html","dd779bbce672858db363456debcb1e01"],["/tags/美化/index.html","2cade2d2a43e57afc3f47bd325d9e4ec"],["/tags/翻墙/index.html","2a7ca55c0cddff85e933923e7201ade6"],["/tags/翻译/index.html","353c1123d6ad55c8231d4bc9125135ba"],["/tags/翻译器/index.html","7ede82c27680e92f526360c3157088a1"],["/tags/聊天/index.html","41fa34aaa5d7e7a8c2e8bb69ac87e096"],["/tags/聊天室/index.html","128d2a97f00a2c1b743aa1730e281933"],["/tags/联想/index.html","10e997a6b950358759c294b5814532b7"],["/tags/节点/index.html","c092cf641a4a65acb790fce65c01d591"],["/tags/虚拟手机号/index.html","f297161eee3288d8c1f9cc1982f664ba"],["/tags/补丁/index.html","11b3234dfcd30b0224c5a45bb200db32"],["/tags/视频/index.html","efec718b6ff2b567e79798fc25573e50"],["/tags/解析/index.html","87a7de9513bb7c0673d1f1ed0dbad3e2"],["/tags/订阅链接/index.html","1923122dc0817bdc4d75ec548e1c0804"],["/tags/记录/index.html","7389e000e650369466f7b5160ad2a695"],["/tags/识图/index.html","47e4cb40b4703123c09329632d810ddf"],["/tags/语言/index.html","ad7817bb8f8d248bcdee2abd9fd74add"],["/tags/资源/index.html","80a0cd7a56cd1c2c2780a8a28ec356d9"],["/tags/资源管理器/index.html","52c3fd9e94f3c91c3b5476588641847e"],["/tags/转移/index.html","aa4364088aef2bf3aa678371646b1a36"],["/tags/软件/index.html","5aa87301f530e178f51e6b5a1c854ca4"],["/tags/轰炸/index.html","d09a62c079a30e7c72c9d80967251b44"],["/tags/迁移/index.html","6a0bd70eac93ddeb4711790d272a70c0"],["/tags/远程控制/index.html","751290361a72353b96b72641758b8cc2"],["/tags/连接/index.html","8252f3248676567eb512e44f6b280901"],["/tags/追踪/index.html","8c9fdb3ffeaae0206cc7638451d6e787"],["/tags/速度/index.html","f3135ef8c894ff59a6fbe9eea4777d83"],["/tags/邮箱/index.html","12b379dabe4cf8a99cbbe213fb41db0b"],["/tags/酷炫/index.html","43ca160e483944a581a700523b53cb1e"],["/tags/钓鱼/index.html","adf2ce03f76eb2d05dd97fd422f576fa"],["/tags/镜像/index.html","1b65cef73c16e16cfc2f0d44a625bb94"],["/tags/随机/index.html","ad72102d2302643ae37757e45f8d3b05"],["/tags/隐藏/index.html","c15ab001300bfb947772b20fa2dd8911"],["/tags/面板/index.html","9b9cd1673df3988f2943fb604bdfb0fa"],["/tags/音乐/index.html","4db71d015a3f15a99bcf7df702c684d7"],["/tags/高颜值/index.html","c143e77d4d3977e4acee26f01b032094"],["/tags/魔改/index.html","a5f3bb4fff7537cf91da6b71d92e15b8"],["/tags/黑名单/index.html","ac39e8243319dc582fb69b3170f92b3d"],["/urls/index.html","6a2f76dc4fb701b04ff4b09be7b2e6e6"],["/vps/index.html","95cb6810b8617d9a9d64f9badbf336a5"],["/支持/index.html","398258632a80a4611e603046d8a38fc1"]];
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
