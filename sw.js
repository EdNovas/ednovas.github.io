/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","24d6317d3a03f027d58485e551b0eb05"],["/2020/11/29/clash-windows/index.html","0c7d85cc62fc5d6357c783024b19e061"],["/2020/11/30/websites2/index.html","0ec47d17bdb6456bc518ff13768eafdf"],["/2020/12/04/iphone4s/index.html","e786bb117485fb8f736b5b57f84fa183"],["/2020/12/04/onenote/index.html","469e5e59f2ccfa9167a742b1967a3b0b"],["/2020/12/04/wesites1/index.html","8779c6552aca0911f153c3dac1b39a43"],["/2020/12/06/nokia808/index.html","7ace5d65ad88092d267b874d448a540e"],["/2020/12/07/ipad1/index.html","4d7c66cb84cff60a6e8334086747b149"],["/2020/12/18/freesubscribes/index.html","cee110c5652adb1276a400f65ef637e2"],["/2020/12/19/musics/index.html","5929b26fb009d019e19ce037326a7427"],["/2020/12/19/shadowrocket/index.html","67eba5dd4b51b45de838e4db7a9a342f"],["/2020/12/19/v2ray-windows/index.html","901ae196b218e05600b199a33e32935a"],["/2020/12/19/v2rayng/index.html","330af251083372b3747574632c53d71c"],["/2020/12/20/beoplay/index.html","f70c3de1274665ee7791f7d47587948d"],["/2020/12/20/订阅链接转换/index.html","691519705dfa1834cc80145329f8ec9a"],["/2020/12/21/chrome浏览器下载提速/index.html","7e5cf5dd0e23f7b96d2af008710d7e96"],["/2020/12/21/免费128线程并发下载xdown/index.html","1e6d6aa66d019de8ec6da1a1d4343257"],["/2020/12/21/免费32线程下载软件ndm/index.html","df832b6cee6d76bcd6d1fb4b7136102a"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","fcbd6ad2e8e63a069a44a36992c5c699"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","234224a16b391b294cdd6fbc5dce9132"],["/2020/12/21/广告怎么知道我在想什么/index.html","cabffaf3ee5cf8ff6c93c45de805e9db"],["/2020/12/21/无名·引子（小说试写）/index.html","6c1a20646783aae08304e0fa1aa78c66"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","8006539c4d3c4c889d9bd6a6a85d80e1"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","c148523e66c9761e8d2a54578663a52f"],["/2020/12/21/高速轻量下载器aria2/index.html","d210875793299742f7d3e57f7a5b7919"],["/2020/12/22/2020-cee-roo/index.html","ec141d318f6c5cf370615e88934a6c96"],["/2020/12/22/firefox插件、github、steam富强/index.html","a1279b13d5f2cd87c9d8a4971473918e"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","1f50c3f236e0d698ecec4edf19324827"],["/2020/12/26/python-day-1/index.html","0660d030c4c1eff7bc1d9ca9e9c0baf3"],["/2020/12/26/python-day-2/index.html","2ad0c505b0566cd934d3bb57e17aceed"],["/2020/12/26/度盘不限速下载方式一赏/index.html","6969895851564a950a0d17876353cef1"],["/2020/12/26/添加开机自启软件/index.html","7f7382a32aad545a1a70b39999ffb4a8"],["/2020/12/26/电脑端截图方式一赏/index.html","8fff353c6a2370aa1b750b4bba5801b7"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","c1d0fae500961f58ca6ce3680edd5482"],["/2020/12/27/最安全的浏览器tor/index.html","0298634498bcc3207b37a4c815dfaf7b"],["/2020/12/27/网易云刷等级和听歌数量/index.html","af25013978898ac5589524a6bf0d34d3"],["/2020/12/28/freenom申请免费域名/index.html","71512c1795466a7ad00026f26d8b5be0"],["/2020/12/31/机场/index.html","0197fb966df47ff1726633de256cf95b"],["/2021/01/01/M1/index.html","b47414ade583f7db4c60aa5e4acbb302"],["/2021/01/01/compress/index.html","b0b22c89aa31806f52426aca50d82f64"],["/2021/01/01/infinityfree/index.html","7e722c0ade25d4b31013ee9f775955fd"],["/2021/01/01/硬核翻墙/index.html","a259d36856765366ff9aace94fe68dd2"],["/2021/01/02/qq/index.html","f3f7907b2645b2dc2cfb1ff3c54f9a45"],["/2021/01/03/netch/index.html","4cc0079162f96133c0959a13f441e62b"],["/2021/01/03/waifu2x/index.html","6676c91cb0a230d333a39cc7220317bb"],["/2021/01/04/ads/index.html","316440f60028fec377d199a9a0637b1f"],["/2021/01/04/games/index.html","6d8daa3bb1ac37d6fc446b690c52a99e"],["/2021/01/04/heroku/index.html","9fc7714d22c873e0ca38acaebc4518d1"],["/2021/01/06/movies/index.html","5a74b12d85b095be8d76a319800fd849"],["/2021/01/07/google2020/index.html","ad6bf91ad4325062abb87b0536ddcde0"],["/2021/01/07/lucky/index.html","fb36d8c6d3cf2d67d7f561ba2f123225"],["/2021/01/07/spotify/index.html","a7c3cd50b98baa066894f77feee4bb82"],["/2021/01/07/thunder/index.html","d8acef818350641b372ac1993d82ebe4"],["/2021/01/08/adguardhome/index.html","cf8a088cdcd9b4e739fcfc99d1125308"],["/2021/01/10/IBM/index.html","33ed713023cd858a5629c20a80971a4f"],["/2021/01/10/potplayer/index.html","1aeb911af228cc2cae699ae19844ed02"],["/2021/01/10/sakuraanime/index.html","7462c0a51435d8c78e437fa99a77fcb4"],["/2021/01/10/美剧星球/index.html","249ef83c44994314445145db7e9653d9"],["/2021/01/12/telegraph/index.html","ab2f96984a389d89ea0804edd76e5186"],["/2021/01/14/comics/index.html","068f36cf0b662508b4e48cd3c7be69fa"],["/2021/01/14/ftp/index.html","f32ba8fb3deb971b5401fdc280ad6c86"],["/2021/01/14/oraclecloud/index.html","0f1ade0f806a16045c83f4cfcbff3e60"],["/2021/01/14/porkbun/index.html","f3f802aceca47522dc0923434a5fda2d"],["/2021/01/14/powertoys/index.html","42c42dc1135ff4641eb93c8f6e4fae87"],["/2021/01/14/taptap/index.html","1b070334b6876da8a8a434fbc6cc116f"],["/2021/01/14/ubuntuvsftp/index.html","e3535ed0582867bbd98dc88b4f217622"],["/2021/01/14/小说/index.html","9f1a91cf820ae349376b8da421544212"],["/2021/01/15/freeproxies/index.html","b9ea4ce616501a59a459dcb58751cb6e"],["/2021/01/15/incaseformat/index.html","34ff7752020cd543a28462cefb3c2ab6"],["/2021/01/16/euserv/index.html","5050bb34eee8091eb3b4a9b4f6285393"],["/2021/01/16/winxray/index.html","073aad2d59bb6a5e2d01f1287e77fa29"],["/2021/01/18/qqreadhistory/index.html","84001f8fac0cc8877a946a5608c42afd"],["/2021/01/18/qqrevoke/index.html","ba36467e78be4efc1461891d331c4f02"],["/2021/01/19/freevpn/index.html","32304840842c12456ce79b6d66a9cb4b"],["/2021/01/20/browsertrack/index.html","09bc911a4671c8d61d8b0451ece9a47d"],["/2021/01/20/v2ui/index.html","fcf536577ae92b3ff1b3cdb243c85d35"],["/2021/01/21/failedtoconnect/index.html","d35d82f6bfc5035b1684fc58e9b2dc01"],["/2021/01/21/gitcalendar/index.html","9d1bedb149f80761e3f682cd5f89f41e"],["/2021/01/21/markdownformat/index.html","29593f18b09f1e86a75fa49bd159da67"],["/2021/01/21/markdowntable/index.html","ae3cd453607f2a79a97aa140b9267b5b"],["/2021/01/21/vercel/index.html","fd2788227ec3079e7b30fef79858ba4d"],["/2021/01/22/hardware/index.html","1fc2f04a4a62cd622d1e0b1ea82de245"],["/2021/01/22/muviz/index.html","56e4add92bcc64e4268ce00acb26e461"],["/2021/01/22/randomapi/index.html","283cf954afceacf93d31e43377677e74"],["/2021/01/22/searchimages/index.html","3face521b0ce4d296a471ec254195edf"],["/2021/01/23/RX文件管理器/index.html","29ac4e633f0e763628bf2f970abd3c9b"],["/2021/01/23/chromeflag/index.html","15711bd4c6b6c79616793a9c2bb86038"],["/2021/01/23/qttabbar/index.html","86cf931e2d618167367be1136683bdda"],["/2021/01/24/githubspeedup/index.html","3b2b8d40814ed8ae9456a6ea03d4aa41"],["/2021/01/24/jsdelivr/index.html","1b3f33c62de22866ad7ab9529255769f"],["/2021/01/25/note/index.html","6d2520fb13af227cfacfa51ca16da79a"],["/2021/01/25/soul/index.html","8556cbd5f89d7d49517a862f957546fa"],["/2021/01/26/herokuxray/index.html","f4cf1d5f3a19631b7f6ca210e7e4976d"],["/2021/01/27/proxypool/index.html","a87749848ab601f164c2bbdcc089d179"],["/2021/01/27/tracker/index.html","f9c63024dcd566644b1e126b0f36fd30"],["/2021/01/30/pandownphp/index.html","44e4ead1fd826e89180db32840286330"],["/2021/01/31/newgroup/index.html","e95d939b94c65146373cb14547fcb079"],["/2021/02/01/clashlanguage/index.html","d8323dcf986ada47df4c28f016188f9f"],["/2021/02/01/encrypt/index.html","aaa9609e1f5361e50b5c804356103fa0"],["/2021/02/01/footermotion/index.html","56debd2a09ab5ae4afdfbf8b4b2373c3"],["/2021/02/01/gitter/index.html","6a7671cc05aa06b1e80f64bd3d4217b5"],["/2021/02/01/pixivtop50/index.html","c8bf06918ebf89d175b2d2f751bc98d5"],["/2021/02/01/scrollbar/index.html","7df7c25d36b466b8ff5ca0b4d7b5183c"],["/2021/02/02/clover/index.html","1b283b573167a3316178eead48b6e7bb"],["/2021/02/02/maya/index.html","1b4e2c718fc27538fcac1457957352ce"],["/2021/02/02/speedcontroller/index.html","9aac57a08e0ec92999e9d848af519faa"],["/2021/02/02/yesmusicplayer/index.html","266ecbebb08a67e713ce57b78d57f041"],["/2021/02/03/lenovoonelite/index.html","f184c9f3f51a19879103af0678432bac"],["/2021/02/03/skipads/index.html","26b807843004c325ebd8e5155a4009fc"],["/2021/02/04/picseed/index.html","9eb5600d0231f8967dba3241d7bde3f3"],["/2021/02/04/renren/index.html","8f425bcff7b687e8f77d548cc987a1a1"],["/2021/02/04/serverstress/index.html","52b3e7ba26ce04d64196e4a6cb67bc18"],["/2021/02/04/wikipediazh/index.html","136288c48ae4b90d725f7a3fc83be3cc"],["/2021/02/05/googlevoice/index.html","b8e79c9e82aba08757d648e2226f38c5"],["/2021/02/06/clashconnection/index.html","7cafdec19e2a2ae9815bc8c4de324740"],["/2021/02/06/gvtransfer/index.html","b311e78353c12c6cbe621df1bacc1cfb"],["/2021/02/06/todesk/index.html","5891f33868344f23996037a68d7ebee6"],["/2021/02/06/vpnblacklist/index.html","c4346062676b345d508b0e35e133a2fe"],["/2021/02/07/mklink/index.html","7e6b2eab26450d7586154e81821662c7"],["/2021/02/07/speedtest/index.html","ecc394f84663e400583073505dcb5f2c"],["/2021/02/07/translate/index.html","b9aa87e157a0ba37aeb75b1ccfec1ad1"],["/2021/02/08/ewomail/index.html","700d6a7786d543bda067f67af1f462e0"],["/2021/02/10/officee5/index.html","667f5b45e42255764d380266e2d85e30"],["/2021/02/10/raidrive/index.html","e2d73f68354d9b21fa54a2a3da1a33bf"],["/2021/02/13/e5sub/index.html","522e816e6a1e45bfb2d4e562333435ad"],["/2021/02/14/screen/index.html","0ca059b6ea39fd8c12c7898df342a191"],["/2021/02/15/clashtun/index.html","06a8d1299496bad71ff3ca0be9164e1c"],["/2021/02/15/messageboom/index.html","d8729ef63e67f994f183137a7b2b5758"],["/2021/02/15/oneindex/index.html","ab7f810ac0faa331d6b1f0b50e987f14"],["/2021/02/16/govsites/index.html","b364047a7a0cb93a3bbfc8d074392a6e"],["/2021/02/17/hexototypecho/index.html","9c795f1786ac24cafa0529b64f6304c6"],["/2021/02/19/fiddler/index.html","3c846a32e81f1d0a14959d954fdd6d20"],["/2021/02/22/potplayerset/index.html","8bb70f54112d42f273d552b21d926678"],["/2021/02/22/studyresource/index.html","5a2f2b8eb4b63629987df10923a54569"],["/2021/02/22/telegram/index.html","517f41689aaa9836763124190dedda57"],["/2021/02/22/videos/index.html","66f6d0a2bab01b8ad84bf5bc9ed1851f"],["/404.html","6fa1179db3a6693051ea458fbf70d125"],["/archives/2020/11/index.html","6b5d9940ae953fbdcb2676f27e70706b"],["/archives/2020/12/index.html","c29e7f6a07734c65a6144ffa5f4884ce"],["/archives/2020/12/page/2/index.html","55228ffa3551c84b6efd630edc78af96"],["/archives/2020/12/page/3/index.html","a9181c7f0608ecfc9b9c029bec64e531"],["/archives/2020/index.html","951795dc9468ef75791840b7902d2410"],["/archives/2020/page/2/index.html","04e3ae408b7a5567e20ff967fb0e90dc"],["/archives/2020/page/3/index.html","8ecea15b089de195f00b4f6837912805"],["/archives/2021/01/index.html","6e5d87637641193194c61f98fd17a877"],["/archives/2021/01/page/2/index.html","d7b80e9cc00a581989261629bfb3a1c4"],["/archives/2021/01/page/3/index.html","3e18defe8645579cbd767887b3e06dd8"],["/archives/2021/01/page/4/index.html","d21f1fa3ebaf35440309e569a28ab711"],["/archives/2021/02/index.html","fa46024c362873b188a6d1587e30f278"],["/archives/2021/02/page/2/index.html","6bcd0c20fa638c6ea18368fb27fd6c45"],["/archives/2021/02/page/3/index.html","b3be61f9336b6e78c09f55fca2a4de07"],["/archives/2021/index.html","5c27d051d4d581b69a53bd38da03edc2"],["/archives/2021/page/2/index.html","5a23cfd3001b37be515ab4bc69a2c3af"],["/archives/2021/page/3/index.html","868a4afc008b2e79af9df85823122481"],["/archives/2021/page/4/index.html","3060c9671bfba13ca306ceee47272359"],["/archives/2021/page/5/index.html","6bb1cfd5de79101284d01372ac5a5fed"],["/archives/2021/page/6/index.html","0c8d75ac4c80318788b2469cdd8ccc72"],["/archives/2021/page/7/index.html","5e3dba217a6a4ceca357982be2c963d4"],["/archives/index.html","b981dc4bcd8b8d2cbe6bb6cf24b3a9f8"],["/archives/page/10/index.html","2aed612764e3b22630762af57db51484"],["/archives/page/2/index.html","d739513b81e2ab8a1beb7622a5823abf"],["/archives/page/3/index.html","041fc51435727817e9e4875e7415ebd4"],["/archives/page/4/index.html","5d828a06e67f705356bd0480fb681a73"],["/archives/page/5/index.html","2d09858617d87366f114dbf7d33045ba"],["/archives/page/6/index.html","9198129a26fb830414762aef09411479"],["/archives/page/7/index.html","286a7acc7f265f9407d90c4ac71ef22d"],["/archives/page/8/index.html","cea3aece48e45857ff2a58de453c21e1"],["/archives/page/9/index.html","e8c94e742adcb6a25a0f6c4fb06a898e"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","26223af4a4514286fef6024b91fc1708"],["/categories/index.html","2dc906faaf5478d81e42050654469290"],["/categories/下载/index.html","891298cc517d9fdbb7d02f321a9a67b4"],["/categories/安全/index.html","1969f4fb882ff272d4ce358bd68970a2"],["/categories/建站/index.html","22b39494328e2a40eaaffc9b28cd9ebd"],["/categories/杂/index.html","80894f183e38c598fcf4d89dd184c383"],["/categories/杂/page/2/index.html","a141b5dd4df303bc564828868790120a"],["/categories/测评/index.html","5ec670db5b4047b9d3cce70ad5b844ba"],["/categories/科学上网/index.html","90c032e975c04bbc8f9bfbeec4079e97"],["/categories/科学上网/page/2/index.html","e6a01272f59fb63e19040d16c5ee867a"],["/categories/编程/index.html","ab454d1efab5c0f59f6b6d8c6b964c1d"],["/categories/网站/index.html","5914805a8238826fb03cd6b914803768"],["/categories/网站/page/2/index.html","8539b705c202275d03af2c47e59d22d1"],["/categories/软件/index.html","9fc0a1a2c75cde718addc6ca5291fc72"],["/categories/软件/page/2/index.html","428bcaea3f9f813e27ee76360400e738"],["/categories/软件/page/3/index.html","d6d177112be22ba7388519dc89507ed0"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","bf60298cfc654d451da3349a5e78d05f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","b759bf5b9bcc193ce0b71d200843d227"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","d800dc9887a6cb3e085697347f64c9c4"],["/ios/index.html","79767a95e3ee3521ecf403eb4e6cefff"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","64a3bf131ff2ed6129d26a1071629390"],["/page/2/index.html","bddf98f2970a4eb0f6d7cb3a0897cdb5"],["/page/3/index.html","d49585d31dbd69323ac7e7301f7be65d"],["/page/4/index.html","1238932684ca5aeabf7e42c76baa7504"],["/page/5/index.html","c58ef5c84ae19a63e6f9079c62e5d788"],["/page/6/index.html","76adb42e6cd3241c52925ff5a8eaf7bb"],["/page/7/index.html","30874a87a16b8e1d6cbba39d8f7eb5cb"],["/page/8/index.html","db6fcdf58344a4202c9fc8497e5d3a61"],["/page/9/index.html","70906c0876dcbd19fb4c07b4e95aec1c"],["/payment/index.html","a8bdf69797f1e9434ea5aadced4dbf3a"],["/privacy-policy/index.html","5c11f6c0de005dc1caf1b7ffbc47f3a8"],["/rss2.xml","d5b0eeab090570df4f951d06159a64dc"],["/search.xml","43dfa3cd84964f92cb99b324dbdac9cc"],["/sitemap.xml","094fd108ac1bbeea21954cd8ce65d80c"],["/sw-register.js","578cc7ba5ab141e6dd4fb92887aed7d1"],["/tags/5t/index.html","37f2f417a3e707111f973e9f9292c29b"],["/tags/Clover/index.html","c36ad346d5801266a18a9c00fbefbaa2"],["/tags/E5/index.html","17c2b8ba806419d94bc6970cebe3524a"],["/tags/FTP/index.html","f4cbe46bc34d82e168f6c9c45872c369"],["/tags/GitHub/index.html","0e0e57983d92851f1835f94fca6747d8"],["/tags/Heroku/index.html","b7e64bb3c16fd453d981492628cd7648"],["/tags/Hexo/index.html","b7dd569f763fd6db64540c0f95e03b3e"],["/tags/Lenovo/index.html","8e34a41c80ffdd0173f32fbff0de9516"],["/tags/Oneindex/index.html","e82ba7a04979329ef1820354a21a77aa"],["/tags/QQ/index.html","8d232316ebc8ceeff055ca7210bca9e4"],["/tags/QTTabbar/index.html","f885ddb77b5f958eb7ec979e44806ee5"],["/tags/RX文件管理器/index.html","895da18e7293ef38b1e9c8399c065b4c"],["/tags/Todesk/index.html","83e61fb2e24109ea702a65bf69d7b380"],["/tags/Vercel/index.html","962ed0e46718d91c1c5c9ea7ea38f87e"],["/tags/ads/index.html","5cef29fd3bc8416e9f8a9eca26fa614f"],["/tags/api/index.html","ab9758b4bb0b0d340fe2ff4bb0a8b898"],["/tags/app/index.html","f96f867e8911d3fcedf80a01e6e3fb07"],["/tags/blacklist/index.html","d8e31894a6a57f4d0760656d72a79793"],["/tags/butterfly/index.html","f4b4a9c952f8e5cff44e35909a8459a2"],["/tags/chrome/index.html","c14e093d20071f13e893702ea5581d3b"],["/tags/clash/index.html","e9a5edfd303c97379dc18d13d3ad9461"],["/tags/cloudflare/index.html","e01c168e87ed0dd4b9d3b71a2346bf26"],["/tags/cmd/index.html","4abf7c1e4a9f598160d337fdc671abcd"],["/tags/c盘/index.html","a17905cc2a40db4480d972b85142c8b9"],["/tags/email/index.html","3a7f8bbe4a12252bbed06b91dbc83a9e"],["/tags/ewomail/index.html","338d969396b441536e89af3434781b15"],["/tags/fiddler/index.html","ccef4095950d0de4147e0a7c509b56d9"],["/tags/flags/index.html","76bc948b68c4ee5dcaf2bec158fd3585"],["/tags/footer，页脚/index.html","ca10909cbd005dbb6bff0f273056853d"],["/tags/galgame/index.html","ce76f1dd2733eac149110bbe01185cb5"],["/tags/git/index.html","ee72c212b6d8e992d61fb24a1d0c0ff1"],["/tags/gitcalendar/index.html","8a5c60683dcb8dc654467ae624d61ffe"],["/tags/google-voice/index.html","0b7b6821666e22ac9e6f4e88a541af06"],["/tags/gv/index.html","9e395f169657b3ca7b8e456556c9f94f"],["/tags/index-1.html","2e32c6807231a12558c899f5eadb5aed"],["/tags/index.html","4fb40e98555b5bc0c76640df2173249a"],["/tags/jsdelivr/index.html","2891ac7e2406b8417f35b86fd78af213"],["/tags/linux/index.html","fe0a23dea6824618f66bf80b6f4981ad"],["/tags/madVR/index.html","bf138b9f399cc96b42ab1f44d463b7e8"],["/tags/markdown/index.html","7a40e4dcc7de96a6e315a53f96d6f4e3"],["/tags/maya/index.html","f4da7533ccce6d7c92ec87775bd9b6a6"],["/tags/mklink/index.html","4d25f5c09070cde4121f2fdb9baf1146"],["/tags/office-e5/index.html","9695c4c2cb7d904665f7503c22927b50"],["/tags/onedrive/index.html","14902a115b73f2b75ab1490c44fd7db8"],["/tags/picGO/index.html","828b5014ed8f665e35d28c588869f68e"],["/tags/pixiv/index.html","9ee0a147cc369d8ced7f23b54886dc0c"],["/tags/potplayer/index.html","25eef222b418a740c0f133fadf8b1afd"],["/tags/proxypool/index.html","79402bbee3030e53bf278c137ddf514f"],["/tags/qbitorrent/index.html","f94d8f22500bac001f5289551fdb3e6b"],["/tags/raidrive/index.html","9000f0362547baf0fb7928a4a9e3f353"],["/tags/screen/index.html","67f5d76655aa91861037c9d7fc7a8313"],["/tags/speedtest/index.html","4c17f355b3f8019866f696b93e8a11c4"],["/tags/tap/index.html","389e54196b3c3bfd07eeee6c0f970c5f"],["/tags/telegram/index.html","262d8a592695ed9b705150d3455a812c"],["/tags/tg/index.html","7848653b43f4e309dd76074619a7553c"],["/tags/top50/index.html","d8525808ff84b06b5c68883eb7023b28"],["/tags/tracker/index.html","515279a1143101a9cddf419e50a37082"],["/tags/translate/index.html","c2cb9a162d0830cc1c79d6441c070c0d"],["/tags/translater/index.html","f329230d4bde559e3f25c22128957b24"],["/tags/tun/index.html","69ac32d10e1c7f6d3cb73e03fcaff2b6"],["/tags/typecho/index.html","8b97cad31ab9b31c76f2e241343d304f"],["/tags/v2ray/index.html","fa7e511448ae0243b07d33762b993b5a"],["/tags/vpn/index.html","4e32b40b4453a24b17784e09717db086"],["/tags/vps/index.html","fd0aed49739ce2f8d1da39839e50aebb"],["/tags/windows/index.html","6cf34151a9615ee9614d8142ff9e5f6b"],["/tags/windows端/index.html","a5f13f71c92c935f90acf2d7eb2362b9"],["/tags/xray/index.html","a8feaa249348f901d473d6ee3e2d6a40"],["/tags/下载/index.html","9ed7d8f6666ee72181458051885aac90"],["/tags/不限速/index.html","89129152533a9a2af6a77f35c3e104a3"],["/tags/个人网盘/index.html","60d15e60583e691e32cffc161de5ac28"],["/tags/主题/index.html","a38d774bb5691f17618e0e539a51808e"],["/tags/云便签/index.html","cb792cddc689a201c7b00e1ace8b3f6c"],["/tags/云盘/index.html","7e4e53a6de2fa460ce94b2a0daf45eff"],["/tags/人人/index.html","d8eca5f7aef7c9c8b37e50e68d4ada8e"],["/tags/代理/index.html","1ee1eb024adc9f6b5635ef641cce5853"],["/tags/代码/index.html","db5b3970d9deaeb3cc27198d44d37737"],["/tags/优选IP/index.html","ce006a2044a04e4a837effb8c49efc1b"],["/tags/便签/index.html","0d0f4354cb9eeb6d3696893d87884d36"],["/tags/保号/index.html","8e2d2923d50f1d7870d608848c5b3400"],["/tags/免费/index.html","4eeb28b57ef6517ef68ded90b4fd81ab"],["/tags/免费节点/index.html","7802a89767af97d91f8eec809b2edfb1"],["/tags/加密/index.html","e9895f9177a229d1954b770e314cf846"],["/tags/动画/index.html","3e246034b37bfe60267eef5ce5d7817f"],["/tags/博客/index.html","68996cf9f541859292e84e524a6a856a"],["/tags/历史记录/index.html","2b47e9ff148e0cfd74560c017545a393"],["/tags/压力/index.html","4b5dbee71448071edd46dc09aeaf19ae"],["/tags/压缩包/index.html","f5d8e10a2da6533912117549a0059c77"],["/tags/反代/index.html","d96a2811a31de8a0073c8c0c1cb106df"],["/tags/可视化/index.html","d0a2e76014db01105b355caa680fe5b0"],["/tags/命令/index.html","9b2d415883403c740e9b18e53dc6edf2"],["/tags/国家/index.html","164e247e1254173e95366e6752a83588"],["/tags/图床/index.html","6aa560671bcb22d64d2a0bfffa9ac8ee"],["/tags/图片/index.html","f46c3781275e114f10b846f34970d0da"],["/tags/域名/index.html","acddf4b88b47fd4a273f32a6b3824bfa"],["/tags/多标签/index.html","674fc41fb4776bf26621007fdced8162"],["/tags/存储/index.html","1fc74768e76977fd9b8b6908774ee27d"],["/tags/学习/index.html","e3d0b75aefad88063500da43174a019e"],["/tags/安全/index.html","8e464f296da015891a030be5fbe3cca2"],["/tags/安卓/index.html","734fa2738ca96dd62507dc22a118ca10"],["/tags/宝塔/index.html","f101e530ce1f058984bde2da9a08498f"],["/tags/广告/index.html","b265b3c2e8a2836c5c0ba585c9f3fde4"],["/tags/建站/index.html","2b2b8f4ee1f21d198af1fa20123d8e96"],["/tags/影视/index.html","58e65d10bd8b89c03ad55d626d043dd4"],["/tags/快速启动/index.html","4ae879efb93fbd3ebef38bdd9446a68e"],["/tags/手机/index.html","38e43a43d6a3265eaa87b2ecd8563a9a"],["/tags/托管/index.html","7a41af50cb2d93b378792e49c423939c"],["/tags/抓包/index.html","885e5d215c85ee6143d1fa2fc025f109"],["/tags/抓取/index.html","f53bfc6338fef16c980d8bcfa0b03afc"],["/tags/投屏/index.html","759c666473640e38ee260e6eb4113008"],["/tags/拓展功能/index.html","8b1bae3dc79757f6c9dbcdd481d297f3"],["/tags/挂载/index.html","f04537597774d42ba72eb0d1fe600075"],["/tags/指纹/index.html","0518c46dc747e0b0085f5b1ee24247d3"],["/tags/接口/index.html","e8672848d125a7961c0c1bbdf6435f27"],["/tags/提取图片/index.html","6fecd99aff1240fb2cbd741298c0efca"],["/tags/插件/index.html","2563a46a643785fc67f38d18c34fb2ac"],["/tags/搜图/index.html","5732b1886c4534d764c264b76403e624"],["/tags/搭建/index.html","141d509b5cd19a615ea6865c174287a3"],["/tags/撤回/index.html","26e84aec7672d1c2d43602c3de01e72c"],["/tags/播放器/index.html","0a2e79193b3abec74d6cc1513a08d4c9"],["/tags/政府网站/index.html","eb6f6b089cb36ad3d23fed9d7574b882"],["/tags/效率/index.html","bcd6ecbb4ab2a396532e797b8e4e8599"],["/tags/日历/index.html","f5a5ba721066fb431c23bc5047b272e8"],["/tags/服务器/index.html","618198b3bbf16dd509dffc39c76410cd"],["/tags/桌面/index.html","f9452cea83e7bd045948b9ed1921fb3c"],["/tags/梯子/index.html","be0d2765bbfabb296e1196db2f7e8a6c"],["/tags/检测工具/index.html","3a763e1cd6f01e80d455077f78b7bffa"],["/tags/汉化/index.html","916ed51eb27bffd4851c0d69550a6b07"],["/tags/测压/index.html","5523f760b5b2cf0e711ff4080486f5ab"],["/tags/测速/index.html","6cde14418e2adb7cae13d59f4cd78274"],["/tags/浏览器/index.html","6bc815930501424a148ef86486f350e4"],["/tags/清理/index.html","3d91ad4f9bc5085cce5c37855db95f55"],["/tags/滚动条/index.html","0b7fca8fc7e491b9b408577e3105bf81"],["/tags/电影/index.html","cca71f9286ad38940342073366b5525b"],["/tags/电视剧/index.html","581c018d0f6d3e3165dd81c51965c72b"],["/tags/白嫖/index.html","38dbd3bf93565307b489f887932b7856"],["/tags/百度/index.html","86392d731bf0ad72577777411ea00624"],["/tags/百度云盘/index.html","0eb658d20e339c08e796a8ba9d973bcf"],["/tags/百科/index.html","c7d0aff16298e880198b8d6e885d2229"],["/tags/短信/index.html","83021477027cec9118298a82c1050018"],["/tags/硬件/index.html","343df2944d753299b9b445e7b1354f30"],["/tags/科学上网/index.html","3a71a1c95ce057d76d2f462cab5e8029"],["/tags/空间/index.html","c6e1ccdf58bb33df6f6f278eccfaab78"],["/tags/笔记/index.html","22cdb258caa3a76d75fffbc84d6bf087"],["/tags/简洁/index.html","c3d266ccbf86549dd906d3dd0f6a43e9"],["/tags/简约/index.html","2d2a4a2e9945b883ad8d074e2659c03b"],["/tags/维基/index.html","258f33fc83a3784b039a34c6437a02df"],["/tags/网易云/index.html","595aa3395bc88859f32823a96c2294e7"],["/tags/网盘/index.html","29442f01ba66717455a876d842e16c00"],["/tags/网站/index.html","b061bb1cd7bb766bba2294e497b4af6b"],["/tags/网络/index.html","c7db4e8dab4102290d0a8f1370e807f9"],["/tags/美化/index.html","03739e4149076b023129fd890dce4c41"],["/tags/翻墙/index.html","1c1e296af12e223e0c6460dfb9cbffb0"],["/tags/翻译/index.html","5a176a5a1538a588ec75230ece07b3d9"],["/tags/翻译器/index.html","86cde03253062009271442136474925a"],["/tags/聊天/index.html","451eff8aceb78d67f418919ed56d3b5a"],["/tags/聊天室/index.html","ca40dff8fc3d0de439960f9fd760808d"],["/tags/联想/index.html","3aabdeacdbc90a5171d61efc9c905f9f"],["/tags/节点/index.html","e6abdf333d4c4c8ea3c3c50e515d9bdf"],["/tags/虚拟手机号/index.html","5f0314360cc28aee46c54109b3f915fd"],["/tags/补丁/index.html","5034659486ad3a3fc80a00f8086c34a0"],["/tags/视频/index.html","97f184141d3b3402e6700ea4aa60c95a"],["/tags/解析/index.html","52b8b0f6228478619bd12a47b86871a9"],["/tags/订阅链接/index.html","f37c995d8e3a6b3bc89b954d411b965c"],["/tags/记录/index.html","7cdb1454cbfd3d67caa3b681d158c5f3"],["/tags/识图/index.html","e2d02693c4fd3f5a4587a4f402fd30c8"],["/tags/语言/index.html","692fbffa9977445e63e8a331f4fd21f5"],["/tags/资源/index.html","2a16d008748a1e7d1902833f28437274"],["/tags/资源管理器/index.html","1878f314142b8d688a29c4f71b19cc7c"],["/tags/转移/index.html","5c9866f48e188b1edb5e23e89de47f53"],["/tags/软件/index.html","68c8a735b58a0e2f684376edf6ec06cf"],["/tags/轰炸/index.html","00736fc21ad28ab95aad26c1cb014b21"],["/tags/迁移/index.html","63800faa0fcb46897055e206263b681c"],["/tags/远程控制/index.html","e6d5c02127ca7d3e351437bf4e28d9ff"],["/tags/连接/index.html","dce469006536698da5d16f811ea917fc"],["/tags/追踪/index.html","b918000bd4c0bad1196d0f0c4f926d19"],["/tags/速度/index.html","8bc4b2ad9b76787ed56664f14ebf8e7c"],["/tags/邮箱/index.html","c7c9a7cafe0872d4815427d75ce325a2"],["/tags/酷炫/index.html","7e8f8b4f3983e7466ebc31031cad19ba"],["/tags/钓鱼/index.html","0859dfb07647b2297ea062f1db25b06e"],["/tags/镜像/index.html","4daf5635d2a5fc2e0231c8079b8096d8"],["/tags/随机/index.html","5dba32136733810958f0bd524095c4bd"],["/tags/隐藏/index.html","5da6f76dde62602a84afac0e08f27815"],["/tags/面板/index.html","c90e0e755da06c66212d5d67d95b4c56"],["/tags/音乐/index.html","047cf8291f795772b2e257861b386f05"],["/tags/高颜值/index.html","113e45f7e2386a70478347f17857c586"],["/tags/魔改/index.html","762547f06bff9482bcef0fe70df945ac"],["/tags/黑名单/index.html","20f1a9b8471493d834b1a1b09b0360e5"],["/urls/index.html","9aea9b9424ce2505f46fed803c0704a5"],["/vps/index.html","e581713a3d9fead4a4a04468f6103a64"],["/支持/index.html","bb2cdeb8097d200a8211437cbdb15348"]];
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
