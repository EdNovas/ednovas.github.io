/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","24d6317d3a03f027d58485e551b0eb05"],["/2020/11/29/clash-windows/index.html","0c7d85cc62fc5d6357c783024b19e061"],["/2020/11/30/websites2/index.html","0ec47d17bdb6456bc518ff13768eafdf"],["/2020/12/04/iphone4s/index.html","e786bb117485fb8f736b5b57f84fa183"],["/2020/12/04/onenote/index.html","469e5e59f2ccfa9167a742b1967a3b0b"],["/2020/12/04/wesites1/index.html","8779c6552aca0911f153c3dac1b39a43"],["/2020/12/06/nokia808/index.html","7ace5d65ad88092d267b874d448a540e"],["/2020/12/07/ipad1/index.html","4d7c66cb84cff60a6e8334086747b149"],["/2020/12/18/freesubscribes/index.html","cee110c5652adb1276a400f65ef637e2"],["/2020/12/19/musics/index.html","5929b26fb009d019e19ce037326a7427"],["/2020/12/19/shadowrocket/index.html","67eba5dd4b51b45de838e4db7a9a342f"],["/2020/12/19/v2ray-windows/index.html","901ae196b218e05600b199a33e32935a"],["/2020/12/19/v2rayng/index.html","330af251083372b3747574632c53d71c"],["/2020/12/20/beoplay/index.html","f70c3de1274665ee7791f7d47587948d"],["/2020/12/20/订阅链接转换/index.html","691519705dfa1834cc80145329f8ec9a"],["/2020/12/21/chrome浏览器下载提速/index.html","7e5cf5dd0e23f7b96d2af008710d7e96"],["/2020/12/21/免费128线程并发下载xdown/index.html","1e6d6aa66d019de8ec6da1a1d4343257"],["/2020/12/21/免费32线程下载软件ndm/index.html","df832b6cee6d76bcd6d1fb4b7136102a"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","fcbd6ad2e8e63a069a44a36992c5c699"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","234224a16b391b294cdd6fbc5dce9132"],["/2020/12/21/广告怎么知道我在想什么/index.html","cabffaf3ee5cf8ff6c93c45de805e9db"],["/2020/12/21/无名·引子（小说试写）/index.html","6c1a20646783aae08304e0fa1aa78c66"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","8006539c4d3c4c889d9bd6a6a85d80e1"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","c148523e66c9761e8d2a54578663a52f"],["/2020/12/21/高速轻量下载器aria2/index.html","d210875793299742f7d3e57f7a5b7919"],["/2020/12/22/2020-cee-roo/index.html","ec141d318f6c5cf370615e88934a6c96"],["/2020/12/22/firefox插件、github、steam富强/index.html","a1279b13d5f2cd87c9d8a4971473918e"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","1f50c3f236e0d698ecec4edf19324827"],["/2020/12/26/python-day-1/index.html","0660d030c4c1eff7bc1d9ca9e9c0baf3"],["/2020/12/26/python-day-2/index.html","2ad0c505b0566cd934d3bb57e17aceed"],["/2020/12/26/度盘不限速下载方式一赏/index.html","6969895851564a950a0d17876353cef1"],["/2020/12/26/添加开机自启软件/index.html","7f7382a32aad545a1a70b39999ffb4a8"],["/2020/12/26/电脑端截图方式一赏/index.html","8fff353c6a2370aa1b750b4bba5801b7"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","c1d0fae500961f58ca6ce3680edd5482"],["/2020/12/27/最安全的浏览器tor/index.html","0298634498bcc3207b37a4c815dfaf7b"],["/2020/12/27/网易云刷等级和听歌数量/index.html","af25013978898ac5589524a6bf0d34d3"],["/2020/12/28/freenom申请免费域名/index.html","71512c1795466a7ad00026f26d8b5be0"],["/2020/12/31/机场/index.html","0197fb966df47ff1726633de256cf95b"],["/2021/01/01/M1/index.html","b47414ade583f7db4c60aa5e4acbb302"],["/2021/01/01/compress/index.html","b0b22c89aa31806f52426aca50d82f64"],["/2021/01/01/infinityfree/index.html","7e722c0ade25d4b31013ee9f775955fd"],["/2021/01/01/硬核翻墙/index.html","a259d36856765366ff9aace94fe68dd2"],["/2021/01/02/qq/index.html","f3f7907b2645b2dc2cfb1ff3c54f9a45"],["/2021/01/03/netch/index.html","4cc0079162f96133c0959a13f441e62b"],["/2021/01/03/waifu2x/index.html","6676c91cb0a230d333a39cc7220317bb"],["/2021/01/04/ads/index.html","316440f60028fec377d199a9a0637b1f"],["/2021/01/04/games/index.html","6d8daa3bb1ac37d6fc446b690c52a99e"],["/2021/01/04/heroku/index.html","9fc7714d22c873e0ca38acaebc4518d1"],["/2021/01/06/movies/index.html","5a74b12d85b095be8d76a319800fd849"],["/2021/01/07/google2020/index.html","ad6bf91ad4325062abb87b0536ddcde0"],["/2021/01/07/lucky/index.html","fb36d8c6d3cf2d67d7f561ba2f123225"],["/2021/01/07/spotify/index.html","a7c3cd50b98baa066894f77feee4bb82"],["/2021/01/07/thunder/index.html","d8acef818350641b372ac1993d82ebe4"],["/2021/01/08/adguardhome/index.html","cf8a088cdcd9b4e739fcfc99d1125308"],["/2021/01/10/IBM/index.html","33ed713023cd858a5629c20a80971a4f"],["/2021/01/10/potplayer/index.html","1aeb911af228cc2cae699ae19844ed02"],["/2021/01/10/sakuraanime/index.html","7462c0a51435d8c78e437fa99a77fcb4"],["/2021/01/10/美剧星球/index.html","249ef83c44994314445145db7e9653d9"],["/2021/01/12/telegraph/index.html","ab2f96984a389d89ea0804edd76e5186"],["/2021/01/14/comics/index.html","068f36cf0b662508b4e48cd3c7be69fa"],["/2021/01/14/ftp/index.html","f32ba8fb3deb971b5401fdc280ad6c86"],["/2021/01/14/oraclecloud/index.html","0f1ade0f806a16045c83f4cfcbff3e60"],["/2021/01/14/porkbun/index.html","f3f802aceca47522dc0923434a5fda2d"],["/2021/01/14/powertoys/index.html","42c42dc1135ff4641eb93c8f6e4fae87"],["/2021/01/14/taptap/index.html","1b070334b6876da8a8a434fbc6cc116f"],["/2021/01/14/ubuntuvsftp/index.html","e3535ed0582867bbd98dc88b4f217622"],["/2021/01/14/小说/index.html","9f1a91cf820ae349376b8da421544212"],["/2021/01/15/freeproxies/index.html","b9ea4ce616501a59a459dcb58751cb6e"],["/2021/01/15/incaseformat/index.html","34ff7752020cd543a28462cefb3c2ab6"],["/2021/01/16/euserv/index.html","5050bb34eee8091eb3b4a9b4f6285393"],["/2021/01/16/winxray/index.html","073aad2d59bb6a5e2d01f1287e77fa29"],["/2021/01/18/qqreadhistory/index.html","84001f8fac0cc8877a946a5608c42afd"],["/2021/01/18/qqrevoke/index.html","ba36467e78be4efc1461891d331c4f02"],["/2021/01/19/freevpn/index.html","32304840842c12456ce79b6d66a9cb4b"],["/2021/01/20/browsertrack/index.html","09bc911a4671c8d61d8b0451ece9a47d"],["/2021/01/20/v2ui/index.html","fcf536577ae92b3ff1b3cdb243c85d35"],["/2021/01/21/failedtoconnect/index.html","d35d82f6bfc5035b1684fc58e9b2dc01"],["/2021/01/21/gitcalendar/index.html","9d1bedb149f80761e3f682cd5f89f41e"],["/2021/01/21/markdownformat/index.html","29593f18b09f1e86a75fa49bd159da67"],["/2021/01/21/markdowntable/index.html","ae3cd453607f2a79a97aa140b9267b5b"],["/2021/01/21/vercel/index.html","fd2788227ec3079e7b30fef79858ba4d"],["/2021/01/22/hardware/index.html","1fc2f04a4a62cd622d1e0b1ea82de245"],["/2021/01/22/muviz/index.html","56e4add92bcc64e4268ce00acb26e461"],["/2021/01/22/randomapi/index.html","283cf954afceacf93d31e43377677e74"],["/2021/01/22/searchimages/index.html","3face521b0ce4d296a471ec254195edf"],["/2021/01/23/RX文件管理器/index.html","29ac4e633f0e763628bf2f970abd3c9b"],["/2021/01/23/chromeflag/index.html","15711bd4c6b6c79616793a9c2bb86038"],["/2021/01/23/qttabbar/index.html","86cf931e2d618167367be1136683bdda"],["/2021/01/24/githubspeedup/index.html","3b2b8d40814ed8ae9456a6ea03d4aa41"],["/2021/01/24/jsdelivr/index.html","1b3f33c62de22866ad7ab9529255769f"],["/2021/01/25/note/index.html","6d2520fb13af227cfacfa51ca16da79a"],["/2021/01/25/soul/index.html","8556cbd5f89d7d49517a862f957546fa"],["/2021/01/26/herokuxray/index.html","f4cf1d5f3a19631b7f6ca210e7e4976d"],["/2021/01/27/proxypool/index.html","a87749848ab601f164c2bbdcc089d179"],["/2021/01/27/tracker/index.html","f9c63024dcd566644b1e126b0f36fd30"],["/2021/01/30/pandownphp/index.html","44e4ead1fd826e89180db32840286330"],["/2021/01/31/newgroup/index.html","e95d939b94c65146373cb14547fcb079"],["/2021/02/01/clashlanguage/index.html","d8323dcf986ada47df4c28f016188f9f"],["/2021/02/01/encrypt/index.html","aaa9609e1f5361e50b5c804356103fa0"],["/2021/02/01/footermotion/index.html","56debd2a09ab5ae4afdfbf8b4b2373c3"],["/2021/02/01/gitter/index.html","6a7671cc05aa06b1e80f64bd3d4217b5"],["/2021/02/01/pixivtop50/index.html","c8bf06918ebf89d175b2d2f751bc98d5"],["/2021/02/01/scrollbar/index.html","7df7c25d36b466b8ff5ca0b4d7b5183c"],["/2021/02/02/clover/index.html","1b283b573167a3316178eead48b6e7bb"],["/2021/02/02/maya/index.html","1b4e2c718fc27538fcac1457957352ce"],["/2021/02/02/speedcontroller/index.html","9aac57a08e0ec92999e9d848af519faa"],["/2021/02/02/yesmusicplayer/index.html","266ecbebb08a67e713ce57b78d57f041"],["/2021/02/03/lenovoonelite/index.html","f184c9f3f51a19879103af0678432bac"],["/2021/02/03/skipads/index.html","26b807843004c325ebd8e5155a4009fc"],["/2021/02/04/picseed/index.html","9eb5600d0231f8967dba3241d7bde3f3"],["/2021/02/04/renren/index.html","8f425bcff7b687e8f77d548cc987a1a1"],["/2021/02/04/serverstress/index.html","52b3e7ba26ce04d64196e4a6cb67bc18"],["/2021/02/04/wikipediazh/index.html","136288c48ae4b90d725f7a3fc83be3cc"],["/2021/02/05/googlevoice/index.html","b8e79c9e82aba08757d648e2226f38c5"],["/2021/02/06/clashconnection/index.html","7cafdec19e2a2ae9815bc8c4de324740"],["/2021/02/06/gvtransfer/index.html","b311e78353c12c6cbe621df1bacc1cfb"],["/2021/02/06/todesk/index.html","5891f33868344f23996037a68d7ebee6"],["/2021/02/06/vpnblacklist/index.html","c4346062676b345d508b0e35e133a2fe"],["/2021/02/07/mklink/index.html","7e6b2eab26450d7586154e81821662c7"],["/2021/02/07/speedtest/index.html","ecc394f84663e400583073505dcb5f2c"],["/2021/02/07/translate/index.html","b9aa87e157a0ba37aeb75b1ccfec1ad1"],["/2021/02/08/ewomail/index.html","700d6a7786d543bda067f67af1f462e0"],["/2021/02/10/officee5/index.html","667f5b45e42255764d380266e2d85e30"],["/2021/02/10/raidrive/index.html","e2d73f68354d9b21fa54a2a3da1a33bf"],["/2021/02/13/e5sub/index.html","522e816e6a1e45bfb2d4e562333435ad"],["/2021/02/14/screen/index.html","0ca059b6ea39fd8c12c7898df342a191"],["/2021/02/15/clashtun/index.html","06a8d1299496bad71ff3ca0be9164e1c"],["/2021/02/15/messageboom/index.html","d8729ef63e67f994f183137a7b2b5758"],["/2021/02/15/oneindex/index.html","ab7f810ac0faa331d6b1f0b50e987f14"],["/2021/02/16/govsites/index.html","b364047a7a0cb93a3bbfc8d074392a6e"],["/2021/02/17/hexototypecho/index.html","9c795f1786ac24cafa0529b64f6304c6"],["/2021/02/19/fiddler/index.html","3c846a32e81f1d0a14959d954fdd6d20"],["/2021/02/22/potplayerset/index.html","8bb70f54112d42f273d552b21d926678"],["/2021/02/22/studyresource/index.html","5a2f2b8eb4b63629987df10923a54569"],["/2021/02/22/telegram/index.html","e2ad5b52b8df30ff205f036925d1916c"],["/2021/02/22/videos/index.html","66f6d0a2bab01b8ad84bf5bc9ed1851f"],["/404.html","fc8916a8c5b94782031917d01dfb8460"],["/archives/2020/11/index.html","dfb74ce211c3d4f3c8e378873a2aae46"],["/archives/2020/12/index.html","4a4a0cb5321f2ffca6b0883966ef8ec8"],["/archives/2020/12/page/2/index.html","c27ff8cef3b8ba920058a92390d65200"],["/archives/2020/12/page/3/index.html","634ce7b30d635c7e713a4edda07e0bc2"],["/archives/2020/index.html","04f73efc1e844e0affc685dbb28ac00c"],["/archives/2020/page/2/index.html","e49337809fb886960429a7798a5988c8"],["/archives/2020/page/3/index.html","859fe50e379192d2f5383ac7979a72d4"],["/archives/2021/01/index.html","f8c355e48f66428505f8cd72a3757c40"],["/archives/2021/01/page/2/index.html","71f331eb6335861cb35d4e97e6c7e85e"],["/archives/2021/01/page/3/index.html","94e7ee2b3d0225e57891166fb4b6748f"],["/archives/2021/01/page/4/index.html","ae124fc7b08b4ee6a640752f48b1c5b5"],["/archives/2021/02/index.html","cf853e5a3ee81483044ce19c9e39dd39"],["/archives/2021/02/page/2/index.html","18e0b02d9430c192b9bf1e0d823ed20d"],["/archives/2021/02/page/3/index.html","1ffad3f3f26f6daee9d43b860fcc4484"],["/archives/2021/index.html","050c0b3770f98aa8d142c70302d29010"],["/archives/2021/page/2/index.html","0874cdb13176dd5f128e3a78a321e162"],["/archives/2021/page/3/index.html","c1a06c6dde471482bd3b2fe67970da16"],["/archives/2021/page/4/index.html","efa1592be1c7a8f634a6a9b179f2c762"],["/archives/2021/page/5/index.html","a44a2c2eccc155b9c9a2327bea3fdbef"],["/archives/2021/page/6/index.html","4e16cb521a10854a4b65f2f11f920c06"],["/archives/2021/page/7/index.html","ee96b6781ce9abf333b5b4988d4cddaf"],["/archives/index.html","9618237c842cba534f1e56b26f8de819"],["/archives/page/10/index.html","771ac8c78604195d00958f12bedd7b58"],["/archives/page/2/index.html","f67d8492d641db3bf66b825ea81389f0"],["/archives/page/3/index.html","dac94fd56f05f181799f65262c1472cd"],["/archives/page/4/index.html","0002790092117364bb57019e70755212"],["/archives/page/5/index.html","bb391487e6d2c904634b02bbd16c7147"],["/archives/page/6/index.html","c3bc939f5cf5fe5c78bb580158b9cec7"],["/archives/page/7/index.html","d167b562583c3ea72aed3ba9fdec2fb4"],["/archives/page/8/index.html","920869b4e6912c817268da44a4d81acf"],["/archives/page/9/index.html","27ce0c33b85f53c31b5e11014c8212e6"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","ecdfa106aee1741dc186de37bfd16bf8"],["/categories/index.html","c0e55a4e98700619f4ddba31dd248c21"],["/categories/下载/index.html","901228bdfd0bb762859ab282f9a9c1d7"],["/categories/安全/index.html","73f6fa68583170890083182a775770d8"],["/categories/建站/index.html","2d6ad0d2e015f03b1c4015544bf3eaff"],["/categories/杂/index.html","3e1d045ae50b38717e44528cc296a732"],["/categories/杂/page/2/index.html","327e5069cfac573c39e7209bbfa3d7c3"],["/categories/测评/index.html","2ca101413ad119c7fdceb8fa0dda051d"],["/categories/科学上网/index.html","38356a32cc2f5b37bd626f6738248853"],["/categories/科学上网/page/2/index.html","0eea4fe89b4c0ee484eff28a9ffce549"],["/categories/编程/index.html","871f78f24a1e63aaa295a51307638ed4"],["/categories/网站/index.html","c8cc328ee671f67db9e0f4d9fcdbcc67"],["/categories/网站/page/2/index.html","a1355e16fbda00d0f6039667d5ed9326"],["/categories/软件/index.html","6a6790561499f6798d5cd180cf64eb68"],["/categories/软件/page/2/index.html","cfc9d3581153c2d8ac5380e9ff12e7cb"],["/categories/软件/page/3/index.html","8e0f8b2b5f88f21d2e1537c074b00e07"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","c91b5372fa6be6217fa734eb0e591eb5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","929921729d8d413cb26a1537ba00bae0"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","6604b4ffaab1b86bbb86991f28890a02"],["/ios/index.html","036438b06a567d1d59f0ecbd4306e9b9"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","bfcdfb0efa258700340a71cbabab9d99"],["/page/2/index.html","5b378a8aeda2007ec142fa41c73fb43d"],["/page/3/index.html","809ff7c7febd3c136796b5d1c8ef85c1"],["/page/4/index.html","75b832ff4e82d3d4ba97b06e852ffdd4"],["/page/5/index.html","0a5cd21736a14ad25f5ca08172adf7d8"],["/page/6/index.html","d0529efefd4e06813ab8543e520b2a62"],["/page/7/index.html","7057ba512064400a42f3a6511e5eb93c"],["/page/8/index.html","10593f3153d6eea31e1762580b918705"],["/page/9/index.html","1f1cf8a4afd74d2f51b3a14fb4394e4e"],["/payment/index.html","6acccc3973c35ad64b1f7a98dcb2a1e5"],["/privacy-policy/index.html","014ce43b15445bf53b4b0183bd178b94"],["/rss2.xml","499c500f471a81377d590a36f0556f53"],["/search.xml","4682d0b24035fdc50edba5b5be440f55"],["/sitemap.xml","094fd108ac1bbeea21954cd8ce65d80c"],["/sw-register.js","6ceef11ceb1a08a40dad13b3c8a31b10"],["/tags/5t/index.html","ccae98a5291ecdbbb5a7b1e89cc3e573"],["/tags/Clover/index.html","1c82b31a597a1095a8aced155b1d5210"],["/tags/E5/index.html","6bcfd924c3ba459851da54e112d5f958"],["/tags/FTP/index.html","704b76f17a5d5fe11f8a00a9eb843341"],["/tags/GitHub/index.html","2d441b04e2866263504db3ffd630ed8b"],["/tags/Heroku/index.html","1cbf5cf9398516dfc1ade133645a5f6d"],["/tags/Hexo/index.html","373f4f9984983ed7c22db5489211e558"],["/tags/Lenovo/index.html","b12d09c5cebba87a8e400b45c61cd0bb"],["/tags/Oneindex/index.html","a59cb0cf7247366edb3506905cc8e1c4"],["/tags/QQ/index.html","f025e31b4644eaafc6508bcc1929460c"],["/tags/QTTabbar/index.html","530bd68f7c58be57d626971d948ddf9e"],["/tags/RX文件管理器/index.html","2ec2b8960af3361bb2a851afef8e20af"],["/tags/Todesk/index.html","de86808eb925412b601f0e9dfb9d8ebb"],["/tags/Vercel/index.html","e5a237bad3815278e59511b7ff71226a"],["/tags/ads/index.html","3aa4b1bc6e1480858c5b9ebdce927723"],["/tags/api/index.html","b4ad2bf1ce64b8f2252e873d559de262"],["/tags/app/index.html","76eb302d4d0fc96bee5e67afe312c022"],["/tags/blacklist/index.html","12fdf6a050f83366813328563aa19cf1"],["/tags/butterfly/index.html","6d4dc759f183b633e4c32b284ff4d65f"],["/tags/chrome/index.html","97180a20d5954bd20f5c77a8bbf3de9d"],["/tags/clash/index.html","7a7b89414b7f73880214002bc9a8e2ff"],["/tags/cloudflare/index.html","7459135b43bd1b1648fe70be2608fc47"],["/tags/cmd/index.html","ae66acd7a4c4b72ca878aeba43e291fe"],["/tags/c盘/index.html","3f71369e54960be285c7b9cadbb96b96"],["/tags/email/index.html","ffc23818d3f11b1669c128d54efd1e44"],["/tags/ewomail/index.html","635ea68ee15f215a75aa245afe864e6c"],["/tags/fiddler/index.html","e3a2438b4b197b4d7e2fd01a4736514e"],["/tags/flags/index.html","34686501b48baddd4563bbcddcf9d11e"],["/tags/footer，页脚/index.html","56d5a79fc79c781e85498355f9d56332"],["/tags/galgame/index.html","be9d8bc6f16a3104a17dca6d02fb1cee"],["/tags/git/index.html","7b72a670d88ec57547428a6ae4f090a7"],["/tags/gitcalendar/index.html","e84895d7359a5c77b087b57899bdc9d3"],["/tags/google-voice/index.html","597830e05ad1c30bd7ad89e2d7f620ad"],["/tags/gv/index.html","9832d69730f9c3509833202399618491"],["/tags/index-1.html","48b89366c0539a5f563e59d807539b23"],["/tags/index.html","61ba74aa8dd4d05ceb414003d1cd359e"],["/tags/jsdelivr/index.html","8b0e5e5be3f01d82fd27fd23f5c42fec"],["/tags/linux/index.html","b7eb9229e40418fa19a1c9eccd5aff46"],["/tags/madVR/index.html","72a6bb53eb0534afb39d18f779208251"],["/tags/markdown/index.html","30c95f073253a5990e95c91440ea87ef"],["/tags/maya/index.html","f2c2478862600096ff8557fce79d9db7"],["/tags/mklink/index.html","60e6cc8c1fa740409ddaf4da5723ff0b"],["/tags/office-e5/index.html","77d9d29f9a9e89da688e85fed5ba8dd2"],["/tags/onedrive/index.html","c84470cc61d6478fb67370cab72c9c50"],["/tags/picGO/index.html","0b2d1aea4d691089cfe7b52073455d54"],["/tags/pixiv/index.html","b06319ff54693d146473c9dc70636e67"],["/tags/potplayer/index.html","aa4f9838530602161ce60793ce6efe05"],["/tags/proxypool/index.html","da1c0ffe4c6d96425f201bab2d52b38c"],["/tags/qbitorrent/index.html","8b9d1e331853947c235460f4b40e1687"],["/tags/raidrive/index.html","a9a3bcf71ce64b4014266ae29036b43c"],["/tags/screen/index.html","42de631c7bc3cb7e240d24bfbdf53c5b"],["/tags/speedtest/index.html","4d0f17a6d90ffe75ea40853d0bc42927"],["/tags/tap/index.html","5d944b91d7a7e92e8cef9d2facdde3ec"],["/tags/telegram/index.html","f8bcb5a03c23fdd935e78b9326a30002"],["/tags/tg/index.html","be516b5150db8e9de09eb6ea27276017"],["/tags/top50/index.html","16076160345a967b8b5840f030383ebb"],["/tags/tracker/index.html","09463f20440ddadc5d30e21b1fe1d0b8"],["/tags/translate/index.html","02d13132c251c5d24014813eae00c311"],["/tags/translater/index.html","44f44f328bf56a9b83bbaf693b76d3c9"],["/tags/tun/index.html","114460d854c7408fba2822bf0b8cb3aa"],["/tags/typecho/index.html","30b42992463cc235aa92e8b0c6a04775"],["/tags/v2ray/index.html","0e9aaaa083bf1575766d25812e921db9"],["/tags/vpn/index.html","8994a6ebfec0249ed0bc8026159be9b3"],["/tags/vps/index.html","2b7ec66bd05290f5cead8361a5db4a55"],["/tags/windows/index.html","0c3e7da1d507a95f31caa7eeb4a4409a"],["/tags/windows端/index.html","41af5a83be781e61d239d45d41f138e6"],["/tags/xray/index.html","be2b2320dcc8fb4ff7e6778da8a640db"],["/tags/下载/index.html","363cf90ef459cda5db99ee71f79ef858"],["/tags/不限速/index.html","5df08acffffa264dd983001c7ffd011c"],["/tags/个人网盘/index.html","c94047782e2a127239e95df4726a44dd"],["/tags/主题/index.html","d275b06b424ba42b1821f4429861adc7"],["/tags/云便签/index.html","7e246915c09210e23098e87f5926c4b2"],["/tags/云盘/index.html","1e6b8b1ebd3a75e226a6fd24ce423068"],["/tags/人人/index.html","6fb29f9bdda08b9c5013493bbce53ea3"],["/tags/代理/index.html","c0c5f7fb044bb01c173b44b3679ba8f6"],["/tags/代码/index.html","43fe221eebecb4dde26ff60786c8ec65"],["/tags/优选IP/index.html","eb652e6d2f13badcdc7350b26e358a82"],["/tags/便签/index.html","ec38f8587dc9dc2c5dff595148bb0dc9"],["/tags/保号/index.html","6174475c5c1e2f461f52d6d25c8db94a"],["/tags/免费/index.html","c3b059326a09330361b0dd8977eda7eb"],["/tags/免费节点/index.html","e83846db04fc8d4e8725c334708e1cf9"],["/tags/加密/index.html","11f1e1a11a9a72474e60757e94ae44fb"],["/tags/动画/index.html","2c52338f25ad498776c110b0e7e36de4"],["/tags/博客/index.html","a4dc48c4a6c89953f5a913d490a459af"],["/tags/历史记录/index.html","deeb402b3b065dcdabc9259ea2f16e5a"],["/tags/压力/index.html","d00068129f64e9b60e6b65f66cfa22ae"],["/tags/压缩包/index.html","beed4e0f615d2170f9b33603441a8084"],["/tags/反代/index.html","ff877087da535208444c6104f7d36498"],["/tags/可视化/index.html","00de4bb5c5ffdd367f8415c79ef1e667"],["/tags/命令/index.html","71e8386987e52094e5ea5736a73753a0"],["/tags/国家/index.html","3b03955d9a10926f627d36acb848faa1"],["/tags/图床/index.html","2903e273d3d12ab3efaa32b747f0f702"],["/tags/图片/index.html","c8b7ea6b636647c50afe5efed5c90a7c"],["/tags/域名/index.html","edabebf6787f75ff6f8e616f5daaae78"],["/tags/多标签/index.html","a22d8766d40c7043a303a1cc91557285"],["/tags/存储/index.html","464dfbb1fc76de8f6be7639b0b9984d5"],["/tags/学习/index.html","0190bdf31f7be8a909da447d4dce54f8"],["/tags/安全/index.html","aee344381cbb451cdcec5e1c39a1b660"],["/tags/安卓/index.html","8af8df6638cf317e9c1902d8653520c4"],["/tags/宝塔/index.html","ca4ef1c7257abb5d0c06fbf0daf54ee1"],["/tags/广告/index.html","08505ce5e9b5e10cdaab9df3662324bc"],["/tags/建站/index.html","49b13bed97806b8ffb5caa3309acfa2f"],["/tags/影视/index.html","dd8c3e62672a2d500eb4c5c2552481b7"],["/tags/快速启动/index.html","968370bcc0d260112db3a0806693b8dc"],["/tags/手机/index.html","7143245dc57cf02a48731ca203b2195c"],["/tags/托管/index.html","7711095b7426cffcc3ed08eb90c7abf1"],["/tags/抓包/index.html","342cc7b653cf8781d07dbd34d87c7c95"],["/tags/抓取/index.html","7048edb755bec2e303b5c2cc8f28bd6a"],["/tags/投屏/index.html","9f379165a396be330cd163224345280e"],["/tags/拓展功能/index.html","ccc8e7585881dad9a43f2920ac25cb76"],["/tags/挂载/index.html","cb5be36d9b5b53702ada69bd131990b5"],["/tags/指纹/index.html","88d86bef9b2f37169c1aba4c52097682"],["/tags/接口/index.html","2b5205377c40921eb67b90859763a1fc"],["/tags/提取图片/index.html","3094545d44061ac37456574beeb26d6b"],["/tags/插件/index.html","95246897876872fb00d4837a3f606565"],["/tags/搜图/index.html","c3a454101733f4e88f441f53823ca40d"],["/tags/搭建/index.html","4edf7c7a8cbc59e89f621f2f8b468eaa"],["/tags/撤回/index.html","5cda531c3964cd1607c7ba83e57030cc"],["/tags/播放器/index.html","58699a2b356bf6747eed60471d058179"],["/tags/政府网站/index.html","6607e47f6ca2cd0e0dfdcf0297c986df"],["/tags/效率/index.html","12b15abd99fb342352fbe80180bcf650"],["/tags/日历/index.html","71b9f54819aa36541a33bdfb17bc40b9"],["/tags/服务器/index.html","24f3f2ed3939b72d1d9f99e3d0bd2768"],["/tags/桌面/index.html","8b73616e01bda9a9650c9f43a596afc3"],["/tags/梯子/index.html","ea45a35a96d395c045b7fda9966c278e"],["/tags/检测工具/index.html","6385df318b7811af1480b72dab388d21"],["/tags/汉化/index.html","a0085da4a0ea473ffd40be705e81dffe"],["/tags/测压/index.html","951ca0180fafd0e9664727ca448fd7b3"],["/tags/测速/index.html","439ce288e00aa6b9952c204af59e258e"],["/tags/浏览器/index.html","65129e91be8a126964d13e5e19d48ff5"],["/tags/清理/index.html","670cc25f877b0f25d29038b4edb4ff05"],["/tags/滚动条/index.html","8ec739c0fa57e676fe979ed8564a76e6"],["/tags/电影/index.html","3cdca9c6578093b345284fd4018d01a7"],["/tags/电视剧/index.html","f1973bfdb00e7272e9ae9cf5b85964b8"],["/tags/白嫖/index.html","f7309a6d808bd4519d04d1e0916ed293"],["/tags/百度/index.html","ad239ddb4698768c1b7b926e7952ff84"],["/tags/百度云盘/index.html","7cd09ddb06800118bb1cd5c4d3a005f8"],["/tags/百科/index.html","cfc36b4b6989ab5a2757a1687d04c95f"],["/tags/短信/index.html","53dcd5e156c2874000a41fe7221342f2"],["/tags/硬件/index.html","0ca5f80d45eff5a69a3b3ce4bf1685d4"],["/tags/科学上网/index.html","f00c41545dd94fc5427333a7a547f218"],["/tags/空间/index.html","9b0cfeafd2d4cc34c38e207650aa8bc4"],["/tags/笔记/index.html","eeebc1c1a9e4a711c0705985d77541df"],["/tags/简洁/index.html","7e2f8197ec4c902ef8df361d363283d9"],["/tags/简约/index.html","4091327906352246900a0bee662293e3"],["/tags/维基/index.html","0f3bdbd34eb47183344e308513375804"],["/tags/网易云/index.html","c196529835a1ce5f3ffb2ddc75bce909"],["/tags/网盘/index.html","3429fb603d9c8c7f1b8fe340b0a248bc"],["/tags/网站/index.html","26318c9d665ea7df717e54fea40a99d9"],["/tags/网络/index.html","79419b567992b51efd2560812ec2eaf3"],["/tags/美化/index.html","54fb931ff126c3cd8bbbf4d66f7ab353"],["/tags/翻墙/index.html","9aa8c138a5ae5eeddd135c2d41a05cbd"],["/tags/翻译/index.html","060ff9157e65112c4f248bd6f84678e0"],["/tags/翻译器/index.html","b32d04aef958c84a6c4c1ca08551db46"],["/tags/聊天/index.html","9ac3f663725d04866ca72d772c679ef4"],["/tags/聊天室/index.html","3a0ce02564c63b976114abd6aa56e8dc"],["/tags/联想/index.html","6a0083f2ce6f7103190af1b68bcb7b11"],["/tags/节点/index.html","306d3a298b4d27c3de4b537c31da822e"],["/tags/虚拟手机号/index.html","59928409a68d22790817f84a72631182"],["/tags/补丁/index.html","2b0aba9ebe0b1cd09bc37eb743b3495c"],["/tags/视频/index.html","05a95d5d7b146524473a2993d949ba4d"],["/tags/解析/index.html","cc850bf386cc916f95144b95b8f8691e"],["/tags/订阅链接/index.html","c80e8f9e07cdb68cbafb7344131b07e6"],["/tags/记录/index.html","1b36ec481a65f85b27ef120bd306fe15"],["/tags/识图/index.html","4107c62325bec2702fe51a9be72e6e0a"],["/tags/语言/index.html","fa9420bb6a70119ad7e7c5bee3c60716"],["/tags/资源/index.html","8ef2901c5d07a4d63063902bd669104a"],["/tags/资源管理器/index.html","74d258b38e7183d40c68ed61ede4c27c"],["/tags/转移/index.html","48182f77594e56d6e729c14c80e68b64"],["/tags/软件/index.html","556eaa29ad52d815af4e4aaf34dca10b"],["/tags/轰炸/index.html","4d484889fe5cb641367685287d763d2d"],["/tags/迁移/index.html","560e5c96a3ac2555969014484950a69a"],["/tags/远程控制/index.html","ccbd3b2ba515656f0df47249e7341465"],["/tags/连接/index.html","636771b4ac9f4c8e4532f4dd676ff665"],["/tags/追踪/index.html","fe9108de1301d4e7a49bb4e7a625d435"],["/tags/速度/index.html","aa0667eeee933c7a14fff2ffead0cf91"],["/tags/邮箱/index.html","9594bcbb083a093fe147226d1682e488"],["/tags/酷炫/index.html","742454fba76749b3f7c0683cd08d70f5"],["/tags/钓鱼/index.html","1d9a898463690c34a7e28b1774eed245"],["/tags/镜像/index.html","53f050766c1ef4400477ab0d95a2e9f4"],["/tags/随机/index.html","e38491cd01e391deec34029b3c45e31a"],["/tags/隐藏/index.html","70c5ffea422a2cdc8827bd24cd2333ae"],["/tags/面板/index.html","75c20299ff81dbd55d14f9ae9fef041a"],["/tags/音乐/index.html","3a42571e01a3fdc194d38b2db061e494"],["/tags/高颜值/index.html","549e1a7ac91be3f9ce975e046f2788f5"],["/tags/魔改/index.html","996f7f6ba79cc171aa6a04798680028c"],["/tags/黑名单/index.html","792d6b23a18c54936f90364226f99cd9"],["/urls/index.html","b7a958535c68bcb45da338d2378421d3"],["/vps/index.html","91b03c25642f7cc5ab56245ca64ccfff"],["/支持/index.html","e4db8d2150f4397385d7061e3b7c7b45"]];
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
