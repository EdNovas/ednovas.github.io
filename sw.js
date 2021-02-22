/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","24d6317d3a03f027d58485e551b0eb05"],["/2020/11/29/clash-windows/index.html","0c7d85cc62fc5d6357c783024b19e061"],["/2020/11/30/websites2/index.html","0ec47d17bdb6456bc518ff13768eafdf"],["/2020/12/04/iphone4s/index.html","e786bb117485fb8f736b5b57f84fa183"],["/2020/12/04/onenote/index.html","469e5e59f2ccfa9167a742b1967a3b0b"],["/2020/12/04/wesites1/index.html","8779c6552aca0911f153c3dac1b39a43"],["/2020/12/06/nokia808/index.html","7ace5d65ad88092d267b874d448a540e"],["/2020/12/07/ipad1/index.html","4d7c66cb84cff60a6e8334086747b149"],["/2020/12/18/freesubscribes/index.html","cee110c5652adb1276a400f65ef637e2"],["/2020/12/19/musics/index.html","5929b26fb009d019e19ce037326a7427"],["/2020/12/19/shadowrocket/index.html","67eba5dd4b51b45de838e4db7a9a342f"],["/2020/12/19/v2ray-windows/index.html","901ae196b218e05600b199a33e32935a"],["/2020/12/19/v2rayng/index.html","330af251083372b3747574632c53d71c"],["/2020/12/20/beoplay/index.html","f70c3de1274665ee7791f7d47587948d"],["/2020/12/20/订阅链接转换/index.html","691519705dfa1834cc80145329f8ec9a"],["/2020/12/21/chrome浏览器下载提速/index.html","7e5cf5dd0e23f7b96d2af008710d7e96"],["/2020/12/21/免费128线程并发下载xdown/index.html","1e6d6aa66d019de8ec6da1a1d4343257"],["/2020/12/21/免费32线程下载软件ndm/index.html","df832b6cee6d76bcd6d1fb4b7136102a"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","fcbd6ad2e8e63a069a44a36992c5c699"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","234224a16b391b294cdd6fbc5dce9132"],["/2020/12/21/广告怎么知道我在想什么/index.html","cabffaf3ee5cf8ff6c93c45de805e9db"],["/2020/12/21/无名·引子（小说试写）/index.html","6c1a20646783aae08304e0fa1aa78c66"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","8006539c4d3c4c889d9bd6a6a85d80e1"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","c148523e66c9761e8d2a54578663a52f"],["/2020/12/21/高速轻量下载器aria2/index.html","d210875793299742f7d3e57f7a5b7919"],["/2020/12/22/2020-cee-roo/index.html","ec141d318f6c5cf370615e88934a6c96"],["/2020/12/22/firefox插件、github、steam富强/index.html","a1279b13d5f2cd87c9d8a4971473918e"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","1f50c3f236e0d698ecec4edf19324827"],["/2020/12/26/python-day-1/index.html","0660d030c4c1eff7bc1d9ca9e9c0baf3"],["/2020/12/26/python-day-2/index.html","2ad0c505b0566cd934d3bb57e17aceed"],["/2020/12/26/度盘不限速下载方式一赏/index.html","6969895851564a950a0d17876353cef1"],["/2020/12/26/添加开机自启软件/index.html","7f7382a32aad545a1a70b39999ffb4a8"],["/2020/12/26/电脑端截图方式一赏/index.html","8fff353c6a2370aa1b750b4bba5801b7"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","c1d0fae500961f58ca6ce3680edd5482"],["/2020/12/27/最安全的浏览器tor/index.html","0298634498bcc3207b37a4c815dfaf7b"],["/2020/12/27/网易云刷等级和听歌数量/index.html","af25013978898ac5589524a6bf0d34d3"],["/2020/12/28/freenom申请免费域名/index.html","71512c1795466a7ad00026f26d8b5be0"],["/2020/12/31/机场/index.html","0197fb966df47ff1726633de256cf95b"],["/2021/01/01/M1/index.html","b47414ade583f7db4c60aa5e4acbb302"],["/2021/01/01/compress/index.html","b0b22c89aa31806f52426aca50d82f64"],["/2021/01/01/infinityfree/index.html","7e722c0ade25d4b31013ee9f775955fd"],["/2021/01/01/硬核翻墙/index.html","a259d36856765366ff9aace94fe68dd2"],["/2021/01/02/qq/index.html","f3f7907b2645b2dc2cfb1ff3c54f9a45"],["/2021/01/03/netch/index.html","4cc0079162f96133c0959a13f441e62b"],["/2021/01/03/waifu2x/index.html","6676c91cb0a230d333a39cc7220317bb"],["/2021/01/04/ads/index.html","316440f60028fec377d199a9a0637b1f"],["/2021/01/04/games/index.html","6d8daa3bb1ac37d6fc446b690c52a99e"],["/2021/01/04/heroku/index.html","9fc7714d22c873e0ca38acaebc4518d1"],["/2021/01/06/movies/index.html","5a74b12d85b095be8d76a319800fd849"],["/2021/01/07/google2020/index.html","ad6bf91ad4325062abb87b0536ddcde0"],["/2021/01/07/lucky/index.html","fb36d8c6d3cf2d67d7f561ba2f123225"],["/2021/01/07/spotify/index.html","a7c3cd50b98baa066894f77feee4bb82"],["/2021/01/07/thunder/index.html","d8acef818350641b372ac1993d82ebe4"],["/2021/01/08/adguardhome/index.html","cf8a088cdcd9b4e739fcfc99d1125308"],["/2021/01/10/IBM/index.html","33ed713023cd858a5629c20a80971a4f"],["/2021/01/10/potplayer/index.html","1aeb911af228cc2cae699ae19844ed02"],["/2021/01/10/sakuraanime/index.html","7462c0a51435d8c78e437fa99a77fcb4"],["/2021/01/10/美剧星球/index.html","249ef83c44994314445145db7e9653d9"],["/2021/01/12/telegraph/index.html","ab2f96984a389d89ea0804edd76e5186"],["/2021/01/14/comics/index.html","068f36cf0b662508b4e48cd3c7be69fa"],["/2021/01/14/ftp/index.html","f32ba8fb3deb971b5401fdc280ad6c86"],["/2021/01/14/oraclecloud/index.html","0f1ade0f806a16045c83f4cfcbff3e60"],["/2021/01/14/porkbun/index.html","f3f802aceca47522dc0923434a5fda2d"],["/2021/01/14/powertoys/index.html","42c42dc1135ff4641eb93c8f6e4fae87"],["/2021/01/14/taptap/index.html","1b070334b6876da8a8a434fbc6cc116f"],["/2021/01/14/ubuntuvsftp/index.html","e3535ed0582867bbd98dc88b4f217622"],["/2021/01/14/小说/index.html","9f1a91cf820ae349376b8da421544212"],["/2021/01/15/freeproxies/index.html","b9ea4ce616501a59a459dcb58751cb6e"],["/2021/01/15/incaseformat/index.html","34ff7752020cd543a28462cefb3c2ab6"],["/2021/01/16/euserv/index.html","5050bb34eee8091eb3b4a9b4f6285393"],["/2021/01/16/winxray/index.html","073aad2d59bb6a5e2d01f1287e77fa29"],["/2021/01/18/qqreadhistory/index.html","84001f8fac0cc8877a946a5608c42afd"],["/2021/01/18/qqrevoke/index.html","ba36467e78be4efc1461891d331c4f02"],["/2021/01/19/freevpn/index.html","32304840842c12456ce79b6d66a9cb4b"],["/2021/01/20/browsertrack/index.html","09bc911a4671c8d61d8b0451ece9a47d"],["/2021/01/20/v2ui/index.html","fcf536577ae92b3ff1b3cdb243c85d35"],["/2021/01/21/failedtoconnect/index.html","d35d82f6bfc5035b1684fc58e9b2dc01"],["/2021/01/21/gitcalendar/index.html","9d1bedb149f80761e3f682cd5f89f41e"],["/2021/01/21/markdownformat/index.html","29593f18b09f1e86a75fa49bd159da67"],["/2021/01/21/markdowntable/index.html","ae3cd453607f2a79a97aa140b9267b5b"],["/2021/01/21/vercel/index.html","fd2788227ec3079e7b30fef79858ba4d"],["/2021/01/22/hardware/index.html","1fc2f04a4a62cd622d1e0b1ea82de245"],["/2021/01/22/muviz/index.html","56e4add92bcc64e4268ce00acb26e461"],["/2021/01/22/randomapi/index.html","283cf954afceacf93d31e43377677e74"],["/2021/01/22/searchimages/index.html","3face521b0ce4d296a471ec254195edf"],["/2021/01/23/RX文件管理器/index.html","29ac4e633f0e763628bf2f970abd3c9b"],["/2021/01/23/chromeflag/index.html","15711bd4c6b6c79616793a9c2bb86038"],["/2021/01/23/qttabbar/index.html","86cf931e2d618167367be1136683bdda"],["/2021/01/24/githubspeedup/index.html","3b2b8d40814ed8ae9456a6ea03d4aa41"],["/2021/01/24/jsdelivr/index.html","1b3f33c62de22866ad7ab9529255769f"],["/2021/01/25/note/index.html","6d2520fb13af227cfacfa51ca16da79a"],["/2021/01/25/soul/index.html","8556cbd5f89d7d49517a862f957546fa"],["/2021/01/26/herokuxray/index.html","f4cf1d5f3a19631b7f6ca210e7e4976d"],["/2021/01/27/proxypool/index.html","a87749848ab601f164c2bbdcc089d179"],["/2021/01/27/tracker/index.html","f9c63024dcd566644b1e126b0f36fd30"],["/2021/01/30/pandownphp/index.html","44e4ead1fd826e89180db32840286330"],["/2021/01/31/newgroup/index.html","e95d939b94c65146373cb14547fcb079"],["/2021/02/01/clashlanguage/index.html","d8323dcf986ada47df4c28f016188f9f"],["/2021/02/01/encrypt/index.html","aaa9609e1f5361e50b5c804356103fa0"],["/2021/02/01/footermotion/index.html","56debd2a09ab5ae4afdfbf8b4b2373c3"],["/2021/02/01/gitter/index.html","6a7671cc05aa06b1e80f64bd3d4217b5"],["/2021/02/01/pixivtop50/index.html","c8bf06918ebf89d175b2d2f751bc98d5"],["/2021/02/01/scrollbar/index.html","7df7c25d36b466b8ff5ca0b4d7b5183c"],["/2021/02/02/clover/index.html","1b283b573167a3316178eead48b6e7bb"],["/2021/02/02/maya/index.html","1b4e2c718fc27538fcac1457957352ce"],["/2021/02/02/speedcontroller/index.html","9aac57a08e0ec92999e9d848af519faa"],["/2021/02/02/yesmusicplayer/index.html","266ecbebb08a67e713ce57b78d57f041"],["/2021/02/03/lenovoonelite/index.html","f184c9f3f51a19879103af0678432bac"],["/2021/02/03/skipads/index.html","26b807843004c325ebd8e5155a4009fc"],["/2021/02/04/picseed/index.html","9eb5600d0231f8967dba3241d7bde3f3"],["/2021/02/04/renren/index.html","8f425bcff7b687e8f77d548cc987a1a1"],["/2021/02/04/serverstress/index.html","52b3e7ba26ce04d64196e4a6cb67bc18"],["/2021/02/04/wikipediazh/index.html","136288c48ae4b90d725f7a3fc83be3cc"],["/2021/02/05/googlevoice/index.html","b8e79c9e82aba08757d648e2226f38c5"],["/2021/02/06/clashconnection/index.html","7cafdec19e2a2ae9815bc8c4de324740"],["/2021/02/06/gvtransfer/index.html","b311e78353c12c6cbe621df1bacc1cfb"],["/2021/02/06/todesk/index.html","5891f33868344f23996037a68d7ebee6"],["/2021/02/06/vpnblacklist/index.html","c4346062676b345d508b0e35e133a2fe"],["/2021/02/07/mklink/index.html","7e6b2eab26450d7586154e81821662c7"],["/2021/02/07/speedtest/index.html","ecc394f84663e400583073505dcb5f2c"],["/2021/02/07/translate/index.html","b9aa87e157a0ba37aeb75b1ccfec1ad1"],["/2021/02/08/ewomail/index.html","700d6a7786d543bda067f67af1f462e0"],["/2021/02/10/officee5/index.html","667f5b45e42255764d380266e2d85e30"],["/2021/02/10/raidrive/index.html","e2d73f68354d9b21fa54a2a3da1a33bf"],["/2021/02/13/e5sub/index.html","522e816e6a1e45bfb2d4e562333435ad"],["/2021/02/14/screen/index.html","0ca059b6ea39fd8c12c7898df342a191"],["/2021/02/15/clashtun/index.html","06a8d1299496bad71ff3ca0be9164e1c"],["/2021/02/15/messageboom/index.html","d8729ef63e67f994f183137a7b2b5758"],["/2021/02/15/oneindex/index.html","ab7f810ac0faa331d6b1f0b50e987f14"],["/2021/02/16/govsites/index.html","b364047a7a0cb93a3bbfc8d074392a6e"],["/2021/02/17/hexototypecho/index.html","9c795f1786ac24cafa0529b64f6304c6"],["/2021/02/19/fiddler/index.html","3c846a32e81f1d0a14959d954fdd6d20"],["/2021/02/22/potplayerset/index.html","8bb70f54112d42f273d552b21d926678"],["/2021/02/22/studyresource/index.html","f0242d64c2a6bce03733ea5281e2f37c"],["/2021/02/22/telegram/index.html","e100bf1bbbb9b71a74c54ed3c8e20c2e"],["/2021/02/22/videos/index.html","09d1c098eafd0fbf1d34ac563b2378a0"],["/404.html","72b9dab164d4175a2e8ce4662912c0f5"],["/archives/2020/11/index.html","eaace14524096d9497ab17d698f01bdc"],["/archives/2020/12/index.html","779d52a02991e3d8cea1dcaf985d8242"],["/archives/2020/12/page/2/index.html","53a2f68c6bc6cc659f1a9aa3df2a42c9"],["/archives/2020/12/page/3/index.html","3f8ca697886aea99b1cd9528ebabba3d"],["/archives/2020/index.html","cdc6461304f3c80aace01fc6bb46c56a"],["/archives/2020/page/2/index.html","f8c5dc6b3409bdde5278d5af5cf7ece8"],["/archives/2020/page/3/index.html","e89339a0a9c906ae208f2b71cc881efb"],["/archives/2021/01/index.html","93b449226e7775695089b69371cdeffe"],["/archives/2021/01/page/2/index.html","0877df7e64dbdff50f2606ca4fe067ac"],["/archives/2021/01/page/3/index.html","012cb9f6020763a6eb94869ecd7c118c"],["/archives/2021/01/page/4/index.html","29b6131a06b3ad30caa78087461d09da"],["/archives/2021/02/index.html","959f05c7b697241417d9080453520964"],["/archives/2021/02/page/2/index.html","201662a7a7c66b406d2859bb287f65c1"],["/archives/2021/02/page/3/index.html","f7bef562a2c8530c689582429ee5121c"],["/archives/2021/index.html","8bce872ca58e790deb8c227a800d0abf"],["/archives/2021/page/2/index.html","3a9b1738751f11a13fb38e7a73f29b90"],["/archives/2021/page/3/index.html","a73c05ccab281b1a60bb2b9d831a2d05"],["/archives/2021/page/4/index.html","c982ac56cb4a3950fbdd4cd7866875d3"],["/archives/2021/page/5/index.html","70613524ebb8c338c778eafaa40129b5"],["/archives/2021/page/6/index.html","162f805f30d87503729d6698fd47cb70"],["/archives/2021/page/7/index.html","91c77faecbcf6c9ad768ecbc21843520"],["/archives/index.html","bd80918f572866cb75545c458546e31d"],["/archives/page/10/index.html","d2d58fba10e85b18457e2df8b01fd3db"],["/archives/page/2/index.html","aabcd997cba1658c65555e5e7071fc80"],["/archives/page/3/index.html","80489a3bf767fca1c6e16a7444029cd9"],["/archives/page/4/index.html","3df09c4953c1bf4655db8d1657ad56ae"],["/archives/page/5/index.html","c723037b7020f74bb01ef041e5b4b5b2"],["/archives/page/6/index.html","170a7a87359188c50e326ef9671d80b6"],["/archives/page/7/index.html","79d9897dcd0973a50cd1db211d53ce88"],["/archives/page/8/index.html","7fd9d4167370b91e8e6501b009ba419a"],["/archives/page/9/index.html","62fecb7118d84ca520e2dbb3479673d6"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","9bda9d6f4f9e02a60280d1c7a96092ba"],["/categories/index.html","140c7f460a7962f4b197b785bff23d78"],["/categories/下载/index.html","a38c0a22473cd1fa7c5b8c13ccb4c9b1"],["/categories/安全/index.html","0ad2702eb2c8719bcdb8655a9e3c71c4"],["/categories/建站/index.html","2b0e5405c230b300e6a5ebb395e3de41"],["/categories/杂/index.html","512076b6206a1d7dd78a4c0d680f050e"],["/categories/杂/page/2/index.html","85b0ef2f396d58dab580408cefc0e3bb"],["/categories/测评/index.html","0e01d92b38bd91711be09ce2fbf6a4aa"],["/categories/科学上网/index.html","9e7e7c869c23f99335261c2c0cf6439b"],["/categories/科学上网/page/2/index.html","1020885c1296f1a651b0c219b50da4c1"],["/categories/编程/index.html","c001906ef1be9dec7df866f0fc375ef2"],["/categories/网站/index.html","27829eb6ecb35d36df950b06dd85f8e4"],["/categories/网站/page/2/index.html","61c7dd24a5457feca2dfd31c1c1b1c06"],["/categories/软件/index.html","eb1fa7e6535f68b2ed2ad7b12bc967d3"],["/categories/软件/page/2/index.html","3830ef0782b409f21af8b3e556a7e2d6"],["/categories/软件/page/3/index.html","7eccdb9a9966230287feaac83f9a273a"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","f76710dcea4986024f7e6661ea39a781"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","60e7b10db2af1218294c21fa4e67c227"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","c8f0371357f53f5c637451ecabe8fbe8"],["/ios/index.html","7a8ce2efd93c6422039da20c013585f1"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","2f796fbf2599979282cdff27088b0a49"],["/page/2/index.html","eb9d725db38208515058085b17466e8b"],["/page/3/index.html","5e3801fe13d52f12be4f7dba26ad8ada"],["/page/4/index.html","6a4abc23758cefe1f6a755195548f4e0"],["/page/5/index.html","d4b78ca201c4ab7f3a8a9335bba46ac0"],["/page/6/index.html","eeaff3d421c06d261a00ba79e646cc0b"],["/page/7/index.html","657b72c72afe997be0771a0ea7f6602e"],["/page/8/index.html","aa80ef0c46067deac3a36dd0d08c25a9"],["/page/9/index.html","42b0637370ba240239ab528eac4b5df4"],["/payment/index.html","9c48fc87905de3c87d1ff9e7afb301e2"],["/privacy-policy/index.html","87afa3a266b98ee0326dc4b5cbc4274c"],["/rss2.xml","5b776b0e6440452c38b9608e4e1319c2"],["/search.xml","473a8722d2812a1ea0cab50a866facdc"],["/sitemap.xml","094fd108ac1bbeea21954cd8ce65d80c"],["/sw-register.js","9af0659cbffd8ae9e6ab976e3ab65a7d"],["/tags/5t/index.html","93c87b118b0526139139e1530102014a"],["/tags/Clover/index.html","f8cfcca61a083b3829d5c7ba4b58bf86"],["/tags/E5/index.html","a8142422dbf8b1d96c46179bc3518945"],["/tags/FTP/index.html","d3d2545f2770f1f59d70015977c78e93"],["/tags/GitHub/index.html","d9db3c1a26cddb0073c7de18d144a921"],["/tags/Heroku/index.html","fb3e6a07c464a7bc17252fce3b46672a"],["/tags/Hexo/index.html","3c31a2e1ff4158b30c65a2b98112302d"],["/tags/Lenovo/index.html","639ce32f5f0797acbe27a4fbc898bec2"],["/tags/Oneindex/index.html","3bd66491f83c76e999ac55ba895432e1"],["/tags/QQ/index.html","7d949c7bf800efa0d97f9898d5c93b9c"],["/tags/QTTabbar/index.html","47baf43e0476cbd99c04da50cb78b116"],["/tags/RX文件管理器/index.html","acc13b0009102e99318e5ed5788f132e"],["/tags/Todesk/index.html","4c44f885bc824810bd3196ef57da1c31"],["/tags/Vercel/index.html","375b8e00aaf721feb2cb49239b90fb42"],["/tags/ads/index.html","3e801ba78ffe91ea27a7ce52c8c1900b"],["/tags/api/index.html","1ea4b9938f88136e3181c133fe1abd9b"],["/tags/app/index.html","18de7b3961947b19b5e16ef6b93ebb81"],["/tags/blacklist/index.html","5960ac78f5777588a89e3e333410e9ed"],["/tags/butterfly/index.html","e72fa1796b179c1509c85b3690ec9071"],["/tags/chrome/index.html","1a30e32ad357e043e876fe00219ed6f2"],["/tags/clash/index.html","d1ce8f05e619f274cc6bcb39360aadbd"],["/tags/cloudflare/index.html","62cf9741baba42de08705a3ae80424c8"],["/tags/cmd/index.html","c7fcef3f24f21f7206a88bb1163cf63e"],["/tags/c盘/index.html","543fdea883db8c7f38c09bd8fe0fcae9"],["/tags/email/index.html","ff4ff644ed5b6ae12dc8de97ea0e815e"],["/tags/ewomail/index.html","c8236286f13d14b58eb3585ceef37297"],["/tags/fiddler/index.html","e02942afaecdeba86da2fdcd64faf7ec"],["/tags/flags/index.html","3600d4b18757d4515705f364aef535e8"],["/tags/footer，页脚/index.html","a10d85430d484215b721c74b055c9335"],["/tags/galgame/index.html","72182c86e91952c1c3641f5f1597d7bb"],["/tags/git/index.html","365e701de2a400277565661c98b52e0a"],["/tags/gitcalendar/index.html","b50e0b5fea98d66ab558ea55f522fd98"],["/tags/google-voice/index.html","99d0982e586f1433170da024a46ea111"],["/tags/gv/index.html","ac54889d0a89d1ac4c6cce0d354db7bb"],["/tags/index-1.html","c6f8001d182047f3aa4701fadd4a954a"],["/tags/index.html","788f798f661d07fca5b9c1e60ea2db68"],["/tags/jsdelivr/index.html","7c42f9f7a04c680f1e7b5085c8de5b3f"],["/tags/linux/index.html","e0ee9042c838f9132f555f645fbaf581"],["/tags/madVR/index.html","960f65e336ce41e33760ec78a261e894"],["/tags/markdown/index.html","aba8a97218eec2528e76123fd3a3e9f0"],["/tags/maya/index.html","7595b59f4750dd01eb67e0c1c6ffcc75"],["/tags/mklink/index.html","318cef0a88b23a26ce88762bba2b6132"],["/tags/office-e5/index.html","965988be0f1433d1f94759707d701d20"],["/tags/onedrive/index.html","90044472376f6370b28924a214542ace"],["/tags/picGO/index.html","30a43611274661f4c2c4fcd278025428"],["/tags/pixiv/index.html","f1ad28fa72ef960dee967925d652048a"],["/tags/potplayer/index.html","db7be7b1ed57ca5dd222d25cb5d47b2f"],["/tags/proxypool/index.html","61c2b5b3d18dd34ecd8c66442f17e816"],["/tags/qbitorrent/index.html","f037bfaafef5d6c7948e6a83ad079809"],["/tags/raidrive/index.html","26c7acce03fd78afae5f1517ec9f20f0"],["/tags/screen/index.html","22d0fc04889ecb0556eaf7f714450bc7"],["/tags/speedtest/index.html","5b5344d433161bc5b6b7de55a7a027bb"],["/tags/tap/index.html","53ea55787e40c8713cb7fd901a277418"],["/tags/telegram/index.html","a7a96e4f220791d8a49b1b93a50c74ed"],["/tags/tg/index.html","06c61a63e4b3a47394526443a123e6be"],["/tags/top50/index.html","d6d37e5a6a15461fe60cab8429a08010"],["/tags/tracker/index.html","39cf2e84bf0016cccf8714b2d77e8485"],["/tags/translate/index.html","f93f5c36c2a70406f8ab166100e7dd36"],["/tags/translater/index.html","caef747ba3a1de2f3ce6ab888c9ed3fb"],["/tags/tun/index.html","da182f70e96423bc3abb3c2b8b8c067e"],["/tags/typecho/index.html","6a10c7be4be9bcc8efa54286bb450138"],["/tags/v2ray/index.html","2b31b6b17c80f84525a3b99c196467ab"],["/tags/vpn/index.html","a2fe0a089a53d156225c1bd39975005b"],["/tags/vps/index.html","629f0bba58c8d66d346936cd999182b9"],["/tags/windows/index.html","27a1c888f24fb2e68a422894e936191c"],["/tags/windows端/index.html","4f6a0b615f00be1104694109399e0a31"],["/tags/xray/index.html","c8ab97a6f72e21259a6e0bc03dc2c7fd"],["/tags/下载/index.html","bb85341d63117d386eecd3bc391df450"],["/tags/不限速/index.html","193aa0187dbd1450877ffcb06244dacf"],["/tags/个人网盘/index.html","76fcdf12ec08534c91570a20d0b9743e"],["/tags/主题/index.html","c669207cffe7d4865aff3c8162825e6e"],["/tags/云便签/index.html","ad1a9c38c4a7cf9b6c0fd6e47094a11c"],["/tags/云盘/index.html","779f489bf764bad45f23ad960275acdd"],["/tags/人人/index.html","5e152f787dd2b69c61df8b0df0d97d41"],["/tags/代理/index.html","8786cd9223baf354c1a56aa2d335d68c"],["/tags/代码/index.html","4e8c377cc27e2970dfa4df22479a96fc"],["/tags/优选IP/index.html","2e4888333321faae10b05d8a0a85228e"],["/tags/便签/index.html","b8168981e44d0d10cf781b2d711ab431"],["/tags/保号/index.html","3e1fb17e9339eb901606f889969b0431"],["/tags/免费/index.html","3df298d9a02fa3d8f79201a15161d295"],["/tags/免费节点/index.html","cef45365daee95f19ab2bb66a6974a0d"],["/tags/加密/index.html","0d5442c2cce917fe1f8de2ead0b895de"],["/tags/动画/index.html","72ac5067771cfa89a17eaef874a6f7ff"],["/tags/博客/index.html","4fa83f59db37bb5e8b13e429e9611ff1"],["/tags/历史记录/index.html","3c1bb75f85ed20fd6d9a096547bcbb4f"],["/tags/压力/index.html","70043f4aded057d75feca05a0eb5ef51"],["/tags/压缩包/index.html","9a86b49281e9f93a78a54affce7dd751"],["/tags/反代/index.html","ff78d1b1a22b711f69b5ecb242e37a99"],["/tags/可视化/index.html","c34b026a9d4f57c4dbe43d7951cbadfc"],["/tags/命令/index.html","25d5b48139ba9be69733a1fbf2e3695d"],["/tags/国家/index.html","08d89a2f44f3889e446ac40856e8e30c"],["/tags/图床/index.html","9bae1dfec1462c1ff4863d1b48a05f9a"],["/tags/图片/index.html","58122decc878db4f0d0aa743e68e4ec5"],["/tags/域名/index.html","a6248fd1e7bb55d09e1ef4d9f51674dc"],["/tags/多标签/index.html","35544262c7d23016664ac5b8a920c8a0"],["/tags/存储/index.html","205f5f9edae639258ebf4f65fdd19b73"],["/tags/学习/index.html","73c6534cfe71b13012985cbc3d2f535f"],["/tags/安全/index.html","ca1b84b9efdfdf5459d5ca6ed6ae9de7"],["/tags/安卓/index.html","ef4fec54d795a005110c7bc061e4c6e2"],["/tags/宝塔/index.html","ef72acd8e397098b12c491e6665a940c"],["/tags/广告/index.html","b8c2ef68121b69949787af11289db0bd"],["/tags/建站/index.html","653eea6e6cd54786e69bc9c9c55990e7"],["/tags/影视/index.html","c77379163b982b1566ce1308371726f0"],["/tags/快速启动/index.html","584111fc790ed038ae495e02bfbf8ab4"],["/tags/手机/index.html","cf0d079707403ad69e225b2de31dad41"],["/tags/托管/index.html","114c32825a6df2eea057078824497e2b"],["/tags/抓包/index.html","375162f0dfeaf61110f980e0aba65bad"],["/tags/抓取/index.html","a62c81f749e08c03d113cbdf24174f0b"],["/tags/投屏/index.html","f7807ee2ebcff1308cd6403914863f3e"],["/tags/拓展功能/index.html","f484e52be51d9e3755e1bd42e82595c1"],["/tags/挂载/index.html","ad9c1f3def799eb1abf8818e1055d4c4"],["/tags/指纹/index.html","a5c52cfd7b80765faff1d8d10e692b30"],["/tags/接口/index.html","c1bcdbdc3cb8e65ec7e089eea1efd495"],["/tags/提取图片/index.html","bd8d9594678afaf63350eb1c916ca35d"],["/tags/插件/index.html","c0f9671360575a594a6d120fde65e2de"],["/tags/搜图/index.html","1d1fedeaa1690e2fcdd329c071b8a288"],["/tags/搭建/index.html","253d7d86c8414ed27fe6ea61fe59cc99"],["/tags/撤回/index.html","029b8d0924fa28ec631f124d290d9e19"],["/tags/播放器/index.html","e0fa2a26db8f5e576a0d558ae34a0353"],["/tags/政府网站/index.html","30e56f1f87b80d1741d868d7c9867bdc"],["/tags/效率/index.html","a3f8d9c2dd4279fae243005accde5343"],["/tags/日历/index.html","527a73ff9473559eaeac15aadb555693"],["/tags/服务器/index.html","5bc6f5fe2cf6d23bc23123b65ed99d05"],["/tags/桌面/index.html","5645c9ba707a6ba79513e92ff6de97bc"],["/tags/梯子/index.html","8df1f31c8daeb8ccf66387384e312d85"],["/tags/检测工具/index.html","a42b269402e10550cab56b1f562b3bb3"],["/tags/汉化/index.html","b8445c6bfe3c080836d61bc67e3065c6"],["/tags/测压/index.html","938cb6fd02f8bebda9b44e6dbc8aa1d1"],["/tags/测速/index.html","80935d906062ef22edb266c4c26510f2"],["/tags/浏览器/index.html","3b4a6f54984b4c0b64fbe8f35cdb0dd8"],["/tags/清理/index.html","9b9e049a110b5b41249464488018375f"],["/tags/滚动条/index.html","1826cae731163ac0b483d3754c9c00f2"],["/tags/电影/index.html","cef6304fd6645a462ff3060769d2a878"],["/tags/电视剧/index.html","2f264a8e81b6ba4ced72e553fea41aef"],["/tags/白嫖/index.html","7d6d90b00daa2d051b5aad242fd6c12a"],["/tags/百度/index.html","b7ab7e05e7c1e68ce6bd59adfaed6fad"],["/tags/百度云盘/index.html","7551f470ca9dbfa00e4bd72436d8b3cd"],["/tags/百科/index.html","c1935a932a5cf6e28682f041e6a4fd1e"],["/tags/短信/index.html","abd026a0c4c4460d5dfed85845443598"],["/tags/硬件/index.html","57ec5dd722509fc2c230c624f27ba9da"],["/tags/科学上网/index.html","f27137e5539181d5bd80a91be59efa2d"],["/tags/空间/index.html","845d8ae2f809349727a4265673d0a7c9"],["/tags/笔记/index.html","d35e22072981260c0b101dd3b3a167b5"],["/tags/简洁/index.html","94f4ebe012d7eaabc8e6c96a7083494d"],["/tags/简约/index.html","1202ad61a0016c38b5c0f2842976c0ad"],["/tags/维基/index.html","37653f1fd6b727f28cdbdc986b18bc93"],["/tags/网易云/index.html","859b2fb4e9d9672762d614565148f65d"],["/tags/网盘/index.html","3fb54cdf128fa15bf1aa033cf005bcd2"],["/tags/网站/index.html","2cd9999c54690187a5a23c53deddaaa4"],["/tags/网络/index.html","d09a513ee3f541777baefba532e58041"],["/tags/美化/index.html","4b133bfe7949c71954bfbdb20d58bb6c"],["/tags/翻墙/index.html","17ac8c202414eb75768d7970918b6304"],["/tags/翻译/index.html","16e399c16e0cc456e265ec9305a6bdb2"],["/tags/翻译器/index.html","2d96baa025d3720981a675a32fcfa84b"],["/tags/聊天/index.html","3178369756b7b0b6f5af8f4686b2c20b"],["/tags/聊天室/index.html","d75521756769b471ee647f4691017ede"],["/tags/联想/index.html","b1567fe182c753a9c0ab6466eadacb38"],["/tags/节点/index.html","3e40f49d05c273fa9222bfa68c98d17e"],["/tags/虚拟手机号/index.html","0997312a99b6235d00e2560996525220"],["/tags/补丁/index.html","a691363ead97536e859dc8531a7e4b20"],["/tags/视频/index.html","b21f2a1bcc7b333dd39f6d25eb1cd6b5"],["/tags/解析/index.html","7a47994c2d82be81d5ce1bb22885fb83"],["/tags/订阅链接/index.html","3511c788a35b3bb9e6a4e1702aefcff2"],["/tags/记录/index.html","4ea215d33c73491aeea9cee3ebc9ed1e"],["/tags/识图/index.html","19879bf395d83ed3cd0b1747dd810430"],["/tags/语言/index.html","67a24cd261c446d006b214c39aaa7551"],["/tags/资源/index.html","8b369bfb87507e5d3fc478177b051c5b"],["/tags/资源管理器/index.html","d65bfb488ab644299f7333863805ffa9"],["/tags/转移/index.html","2bfe707f7f0e303f63ea2b167871d314"],["/tags/软件/index.html","2b0ba9e3d1f19085a1c82cab2e5812c9"],["/tags/轰炸/index.html","ef5810fdb0f6f7708402b93e7cfde85e"],["/tags/迁移/index.html","2cb2bbd5f54511a3dc607f06b02dbead"],["/tags/远程控制/index.html","01a15dd10c318df5a728f342a1e3f1b7"],["/tags/连接/index.html","09f6bfd24d3af863fdf602798971bee7"],["/tags/追踪/index.html","d6f159e1c21bb7cdfc44b777a0b2e541"],["/tags/速度/index.html","3e67754aed70f94ba18c3fdeaf377091"],["/tags/邮箱/index.html","999792f8abac8eaed41f4f3cee6070b3"],["/tags/酷炫/index.html","316274b725bbf2b8780bffc480786025"],["/tags/钓鱼/index.html","242e3d29741609f516d256f14771e4ee"],["/tags/镜像/index.html","c81f70ba95220ec7af185b332e3a759a"],["/tags/随机/index.html","4164a6c283d04d508ac0eabf3da98153"],["/tags/隐藏/index.html","ee2fd7ab077302b3e56023ae4b6567b8"],["/tags/面板/index.html","9c134d8568e6be2f086d8dbddf5f314f"],["/tags/音乐/index.html","c49eb3c0a760b4739e00de3ca55ba253"],["/tags/高颜值/index.html","11ae506bbe4d2376df627f2eb2140576"],["/tags/魔改/index.html","cd944a4a711093797a5bc01648a479c5"],["/tags/黑名单/index.html","9635d40a22a9e9743f34d050c9d13916"],["/urls/index.html","77d20f9de86b693701a3437ed6c3fb97"],["/vps/index.html","29acd8c93ba6950db7a5ce3aa8cce07b"],["/支持/index.html","963494dd7b3aaf2e077b0d8efe0ddc7a"]];
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
