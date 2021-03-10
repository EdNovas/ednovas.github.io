/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","bece5c34b0b873beb60b25e22a8e6e22"],["/2020/11/29/clash-windows/index.html","deecec016920c5db90e27d19d29ea281"],["/2020/11/30/websites2/index.html","afe9c0f010c912d1c9c4b0d8c7169655"],["/2020/12/04/iphone4s/index.html","568bc31a479538630267444cc47550c2"],["/2020/12/04/onenote/index.html","0c21b80372ab0ae6c7d1f8e6346f5345"],["/2020/12/04/wesites1/index.html","19d68a6134751c0d1f96ab2fe845a950"],["/2020/12/06/nokia808/index.html","16b2313d3ebf0122cd41532ef9e64418"],["/2020/12/07/ipad1/index.html","aebb5fe75baca169874369513f016eca"],["/2020/12/18/freesubscribes/index.html","92b26f034a17c83acc06bf1c4e89e08b"],["/2020/12/19/musics/index.html","a6bb44ce322f69020c91c7cec4cf85a5"],["/2020/12/19/shadowrocket/index.html","3a1730234b94421304dde3dc11104a35"],["/2020/12/19/v2ray-windows/index.html","6dd209971e7bdd20d5cda2744914354c"],["/2020/12/19/v2rayng/index.html","93c00583654fbf923a2f3cb37963c9d4"],["/2020/12/20/beoplay/index.html","be7a5b5764a9b946cd114be6b5303bd8"],["/2020/12/20/订阅链接转换/index.html","43978c65bc89452e29e49e8ede7bfe84"],["/2020/12/21/chrome浏览器下载提速/index.html","778caecf263330f0c55215cc722ffdc8"],["/2020/12/21/免费128线程并发下载xdown/index.html","c6b9c221e92bfb6c95014299cdd9eeb4"],["/2020/12/21/免费32线程下载软件ndm/index.html","656b05e0a29e6beba5cc7fae8979bb07"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","59def36be85407c0552eb9d2125a532c"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","1edb6f1cac189684fa37f78300e8bcd5"],["/2020/12/21/广告怎么知道我在想什么/index.html","931dd7c4bc16d68fda0f76e9099bf452"],["/2020/12/21/无名·引子（小说试写）/index.html","ca79eaa9821be42cef0a57c53617b625"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","ee5f677bef67d088f6078813f4099c96"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","723c51260078f2d992e2bf8febad3b4a"],["/2020/12/21/高速轻量下载器aria2/index.html","f05222178194650c37ea8235fce0992c"],["/2020/12/22/2020-cee-roo/index.html","13fcd579eb06719529e6fd3493d8c3d3"],["/2020/12/22/firefox插件、github、steam富强/index.html","32be7ba3c8254474ba5e4beb9dbc6abb"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","07970b7bab579eed76708ca889d50b6f"],["/2020/12/26/python-day-1/index.html","477dedc4039b5da95d48e8cd52adeee9"],["/2020/12/26/python-day-2/index.html","5dd3c7719b7a9915a23bb0fa3186ddeb"],["/2020/12/26/度盘不限速下载方式一赏/index.html","d519c093cc5feb1cfbce85559cbf69af"],["/2020/12/26/添加开机自启软件/index.html","b777a7442cc273df1683270b015f5781"],["/2020/12/26/电脑端截图方式一赏/index.html","ba65c84936e1e159bcb6e627c45297b3"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","4146c10de0f32a571895a2380d578bfd"],["/2020/12/27/最安全的浏览器tor/index.html","341a5fbeb4d88d06cca40e3f34e06665"],["/2020/12/27/网易云刷等级和听歌数量/index.html","d83640b8dd425845bae9b7cfa98e2908"],["/2020/12/28/freenom申请免费域名/index.html","bad635a50d62901c3bf5126d9cc5d7f6"],["/2020/12/31/机场/index.html","74ec64cf6b7c6553f27fc49ad193a92f"],["/2021/01/01/M1/index.html","6f92a0bc013ebce78618fc390bea0d96"],["/2021/01/01/compress/index.html","f35a7503c67ea4f4688c7f9f7216566d"],["/2021/01/01/infinityfree/index.html","ac1e172d8dfc584546bffbd63175762f"],["/2021/01/01/硬核翻墙/index.html","d49e694cac2834208961fa4cda1f96d9"],["/2021/01/02/qq/index.html","b41223f1620574b96350b8a03eed0b41"],["/2021/01/03/netch/index.html","395cea51c15fd779b0c2531224450991"],["/2021/01/03/waifu2x/index.html","1cf3e6510a4e7538196f6f319a957d0d"],["/2021/01/04/ads/index.html","5ebb23d7150062cdbd5387ab86926b15"],["/2021/01/04/games/index.html","8c3d316a779f74876aa6e19a7ce3dd35"],["/2021/01/04/heroku/index.html","f592a29a40c5cc3b1b760545157659af"],["/2021/01/06/movies/index.html","141f51cd19139ef4042487d2991546aa"],["/2021/01/07/google2020/index.html","874ef4845bc8b50d5018dc8a477f8757"],["/2021/01/07/lucky/index.html","6016841e1c60a7f15416f9ed9058a193"],["/2021/01/07/spotify/index.html","e2d202ddd37e827a48068e25264ef876"],["/2021/01/07/thunder/index.html","bf66aa9f5b5c33a50dd33e7e8bf1d448"],["/2021/01/08/adguardhome/index.html","e3e595db7168aa04b9acc7ce5619f5e6"],["/2021/01/10/IBM/index.html","cd93ee19da5e80a34b1c87a78b1fdce2"],["/2021/01/10/potplayer/index.html","e98e520042a4330ab877fdd569a6a9fb"],["/2021/01/10/sakuraanime/index.html","8dca63e4d450db5cd1f3c4a6e954bfc3"],["/2021/01/10/美剧星球/index.html","e22edffcad4978c6d7be76f008c07f16"],["/2021/01/12/telegraph/index.html","c32e45ec404abd8f94f130f7dccd6b98"],["/2021/01/14/comics/index.html","70e9e859b51b00e5ed5a168a59df483b"],["/2021/01/14/ftp/index.html","abec1c6f63dc5c9105308f5a39548115"],["/2021/01/14/oraclecloud/index.html","0b73096a853c3261995547b5daaf9dee"],["/2021/01/14/porkbun/index.html","96206fd64efb823522818b8cc249f17b"],["/2021/01/14/powertoys/index.html","e1da5ff469ab2666be88cf0a24749752"],["/2021/01/14/taptap/index.html","3cdd709da523be778abf4f01ab38625f"],["/2021/01/14/ubuntuvsftp/index.html","b4ecc03e000846040717912fe88b9d62"],["/2021/01/14/小说/index.html","9139b8b52a46c469517f33777a5f815c"],["/2021/01/15/freeproxies/index.html","c53b108e67a1b2e03fad5041ab7facbb"],["/2021/01/15/incaseformat/index.html","0eb34edcbde2ec5cd5450237693861ef"],["/2021/01/16/euserv/index.html","34ba32fbe32e2be7b83e1652f1f7146f"],["/2021/01/16/winxray/index.html","be4dc20bf0b7fb326f192e729e1952c6"],["/2021/01/18/qqreadhistory/index.html","29d47af303e7ff2f634b9cb8005282ef"],["/2021/01/18/qqrevoke/index.html","f9a90db072c3ce5bb008c610ce90407f"],["/2021/01/19/freevpn/index.html","d46c5028cb4ea50e59e7d7b5ceea8346"],["/2021/01/20/browsertrack/index.html","f3a82a6b081b1f31907964b2091ac543"],["/2021/01/20/v2ui/index.html","d005de3fedd450bf36ee9d7a8ba5b23f"],["/2021/01/21/failedtoconnect/index.html","baf556a8a46d9459cccecf1de27d9f78"],["/2021/01/21/gitcalendar/index.html","537ba7fef85dd5e6fc29781dd7d45343"],["/2021/01/21/markdownformat/index.html","4d5f649d3cfb1ec15f1595bf5886cde4"],["/2021/01/21/markdowntable/index.html","298c77323099d2a815ce36b25dba657e"],["/2021/01/21/vercel/index.html","11383f644b8018ad48b1c8d1b6b03b85"],["/2021/01/22/hardware/index.html","56438e10162215713729166f02fbd079"],["/2021/01/22/muviz/index.html","8aa37819df053d158a44509dc59450a4"],["/2021/01/22/randomapi/index.html","06c248883462473874a6a68bb9ff2a5d"],["/2021/01/22/searchimages/index.html","d2b48b15cc37455a15f97c8659f5b371"],["/2021/01/23/RX文件管理器/index.html","d3495836e7f5f089e0c1cdc56eb8a79b"],["/2021/01/23/chromeflag/index.html","1f24e7ea1504ddac618b82fc43c445b1"],["/2021/01/23/qttabbar/index.html","faf3b1894e0ff65d333e745a920208f1"],["/2021/01/24/githubspeedup/index.html","643da7a49bf8c4ff2fcfbdd75851247f"],["/2021/01/24/jsdelivr/index.html","44ce7737f5994b4df2776bcd180f3efa"],["/2021/01/25/note/index.html","f701d041686ba47aea6159eec3d276cc"],["/2021/01/25/soul/index.html","32e876f06b6ffc4ef7d1cc7c03b16002"],["/2021/01/26/herokuxray/index.html","004c0b7efc5868eee17ca6200000426a"],["/2021/01/27/proxypool/index.html","1fae3d9e2c91ee000fb8e32f93e8b95c"],["/2021/01/27/tracker/index.html","4f7c288f190ca9413cce0a8be3aa243f"],["/2021/01/30/pandownphp/index.html","1a1de040ab331620630f45cfaec8235c"],["/2021/01/31/newgroup/index.html","997811ccec9fe92c708945756cd2dbbc"],["/2021/02/01/clashlanguage/index.html","b0d46339e6651da3196de1172c02c859"],["/2021/02/01/encrypt/index.html","cf52eac02a341729c4c8fc0885171e36"],["/2021/02/01/footermotion/index.html","74896e11efbc038a96b1c22b4c054591"],["/2021/02/01/gitter/index.html","997c920cdd30af90a1b5bea6c16d9b93"],["/2021/02/01/pixivtop50/index.html","d4036c37e5c4fd0a89015066ad90d2ef"],["/2021/02/01/scrollbar/index.html","947c848ccffa91dd2c52cd7801af7b3a"],["/2021/02/02/clover/index.html","ea2a4d00dfddb722dd0a3a4f7642d6af"],["/2021/02/02/maya/index.html","e942d8e20d220ec2e30e995fa590b74a"],["/2021/02/02/speedcontroller/index.html","9451744e43752d7572af546e1a0cb664"],["/2021/02/02/yesmusicplayer/index.html","3143e49d78631fac2f344d16273ce5cd"],["/2021/02/03/lenovoonelite/index.html","0becc00a04c7e44a37bb37535bf5f159"],["/2021/02/03/skipads/index.html","f70a5362794d53e90712bda50613eb6f"],["/2021/02/04/picseed/index.html","e2a006556954145fe979b3d2e09d670a"],["/2021/02/04/renren/index.html","9e9fc6913c094cb5a83c37cacb3d5311"],["/2021/02/04/serverstress/index.html","c29c5dc6dc87bb8a34c55c1a63f1a67b"],["/2021/02/04/wikipediazh/index.html","fb977fbc42dfb92039b06b445b9a88c8"],["/2021/02/05/googlevoice/index.html","2206f20fa39bfadaf8404d27495aa2ca"],["/2021/02/06/clashconnection/index.html","326e2d4bc832fe4585cb7226154f6091"],["/2021/02/06/gvtransfer/index.html","e1dd22eeeebab6b76ffce5eebb66b181"],["/2021/02/06/todesk/index.html","c6d4efbaa4d2036135c540034c28a2d3"],["/2021/02/06/vpnblacklist/index.html","586c99e74b6b48515bff216dec8424b0"],["/2021/02/07/mklink/index.html","1ff41dc47a636dd127092e3675ea1bee"],["/2021/02/07/speedtest/index.html","0100159f73541ec393054d0d0a388f63"],["/2021/02/07/translate/index.html","3e52f07e9edc672a3e31478ccb0ba9b8"],["/2021/02/08/ewomail/index.html","cf91ea9001e829f78c57af1a55c3fdec"],["/2021/02/10/officee5/index.html","1d82dd04b572a544bb9c4ebd9804a252"],["/2021/02/10/raidrive/index.html","43ccb325f57b749ffc547f6a4aa55781"],["/2021/02/13/e5sub/index.html","d1745bc750046aa33320e699caac6cb1"],["/2021/02/14/screen/index.html","4a0f5ef39e6f4cc1f22949bd1ea1f5c5"],["/2021/02/15/clashtun/index.html","5e555e54d162f62ad969786ae9d9a2ba"],["/2021/02/15/messageboom/index.html","18fa24d07abd552664447b6de3947753"],["/2021/02/15/oneindex/index.html","61b639cd87ab31193f118f82a570e82c"],["/2021/02/16/govsites/index.html","596ce970dfbbaebeff59825fd7b300db"],["/2021/02/17/hexototypecho/index.html","cfe19ba400eefc6e77875699f160b535"],["/2021/02/19/fiddler/index.html","24a28e01596fc9d7f1ee973341871920"],["/2021/02/22/potplayerset/index.html","0b5cd3eef55388117308cf19834ea7a9"],["/2021/02/22/studyresource/index.html","1ca06a73134be95c6293effb0c562fa7"],["/2021/02/22/telegram/index.html","d67cdd61c86732200a5e75f579adf983"],["/2021/02/22/videos/index.html","9e1564c1be0377c7fafc7ac24255664e"],["/2021/02/24/mtproxy/index.html","362037694866cad4d58452c63fa6586a"],["/2021/03/10/catchcat/index.html","a9aec2cc40336650050dbd8322f2969e"],["/2021/03/10/neteasemusic/index.html","a076f4ce3d84b8dedf19ab88c2a1061e"],["/2021/03/10/surfboard/index.html","8ebec7443ba41f9f080baab5b01f05c2"],["/404.html","f24401f5c58ad39fce6ab970513d74fb"],["/archives/2020/11/index.html","ea524292399c231f5118292960bff36d"],["/archives/2020/12/index.html","a77933543442cc8dc8a3f1ec8bc7f827"],["/archives/2020/12/page/2/index.html","274f9c6b98338f57926db0b26839005d"],["/archives/2020/12/page/3/index.html","2d7038bbe3b8ba928ed3a18603454ff2"],["/archives/2020/index.html","0986bbe5055996e778e19560a06192b8"],["/archives/2020/page/2/index.html","4bcc6e9ab9b0452da3278b6f837aad5f"],["/archives/2020/page/3/index.html","55d71836a0cb3a08dcc1eb3ebc72b17d"],["/archives/2021/01/index.html","6ab8f9e44216dae024ca1d4420bea52c"],["/archives/2021/01/page/2/index.html","ade93b89b7a4ece57477eecc74146d6a"],["/archives/2021/01/page/3/index.html","c0be3a052e3c0c623b6a03cc62f59324"],["/archives/2021/01/page/4/index.html","d571af0056373ec657d90940b810fbcc"],["/archives/2021/02/index.html","06876030adea356c69ecef9a306ef3d3"],["/archives/2021/02/page/2/index.html","57db14e2e5d057cde4f33f8008d18ec9"],["/archives/2021/02/page/3/index.html","f42a66d4d69f6a49195a62a151859606"],["/archives/2021/03/index.html","c77d59c0bf3e0461070748e02d6a1196"],["/archives/2021/index.html","780ceb8ac3d4077c96ed0045fe600724"],["/archives/2021/page/2/index.html","0d6a339c9eec2940a3965b908523e2a4"],["/archives/2021/page/3/index.html","e55f012046c7e56c89c894e463a78d50"],["/archives/2021/page/4/index.html","8cdfa1d912b24bb83003460e9b98d05a"],["/archives/2021/page/5/index.html","10d5a97efebde1c01dd38bbf12c87d05"],["/archives/2021/page/6/index.html","f5063750af1a197b33f2b50d2541309d"],["/archives/2021/page/7/index.html","7bdedd3b971506b93fcf79a13ea4012e"],["/archives/index.html","bac0fe2728739c037cd94325e2685ce3"],["/archives/page/10/index.html","232aca6391d4e9877cfa08f6fe32bcc5"],["/archives/page/2/index.html","7980fa34fe39e55c92eaf35b2ae73416"],["/archives/page/3/index.html","ff66dab7c322c01e09dbc7a34bc3e02f"],["/archives/page/4/index.html","6d346fd9c8a81c3c2d4e9cad3b2afeb6"],["/archives/page/5/index.html","f5eefd39d6c6ddb722452e875aa99741"],["/archives/page/6/index.html","4c228801e1e7bc50bc8392b56c0ca18c"],["/archives/page/7/index.html","9dd8b5c6aa2d508b79d82659bc0003f8"],["/archives/page/8/index.html","5d7eb985920340947e7622dd058a0464"],["/archives/page/9/index.html","f6a4ee6a1fb392156b6e2048d7570976"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","3668a0a8f0fe6c9a71b7b3d3d9b58cf8"],["/catchcathard/index.html","d0c677e5ac098b78fbfbd71b0f399c83"],["/catchcatimpossible/index.html","ae8ccaba89258994d4fbfa9cf78afbad"],["/catchcatmid/index.html","4f33a077941490c9791a05762f8202d5"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/categories/VPN/index.html","d468ff2b13631672824c4e665dd69947"],["/categories/VPS/index.html","59d3c4b1b806c47d08d62760101fce37"],["/categories/index.html","3cb129783840b2d03d09357591040eeb"],["/categories/下载/index.html","5e68d34558e5927908a9b886d4fdd665"],["/categories/安全/index.html","bd1f5779ad25c661af727f5972ae4959"],["/categories/建站/index.html","d369f562cacd27a9701fb1086fe900b0"],["/categories/杂/index.html","61da61ca882640da5af854fd093fb381"],["/categories/杂/page/2/index.html","62fb0e3af65a56c84f96a6a4e591ab65"],["/categories/测评/index.html","152d1f331370dc3dc4c0c43a576bb125"],["/categories/科学上网/index.html","ce6b314887f2d8344538625730067205"],["/categories/科学上网/page/2/index.html","591c0e7685511c7389d0a9a0ba596932"],["/categories/编程/index.html","93209ba027d7153ef7dfce4e1a8c150d"],["/categories/网站/index.html","773a46dd498848e6e3c08c746b418315"],["/categories/网站/page/2/index.html","dcff98b02a26ba0096febe4de5dc49c4"],["/categories/软件/index.html","5bf8dbf6afddaaba43874433771f9592"],["/categories/软件/page/2/index.html","a3858ad52d653befd29c5189ba08419b"],["/categories/软件/page/3/index.html","128c74ba6b30e1257e5542d6af7cce4d"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","2cae7d67d80c1647b72ec3f0d84aac41"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","0b61cec6dd25b84890173049a4efc730"],["/ios/index.html","36c97e63c8ee127de1c011a7db2e6463"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","31a56297d7bfab702b98dd520be74b45"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","3b577be621caf75ae607235919842ef4"],["/page/2/index.html","86ecf5edc4ac174be29e18f4173271b6"],["/page/3/index.html","219195b4ef23b04a58d8931e413766d3"],["/page/4/index.html","20a2b0e48db204eb25261766b48ed0ad"],["/page/5/index.html","7714bc0648078b3c63adebb079a3d530"],["/page/6/index.html","477daedb9f434aa8067125bc743cea75"],["/page/7/index.html","e7dc6cfd99680409f7aa160594b1be40"],["/page/8/index.html","3ae268d9aa7bf1c7bfb03d7cc93e0b0a"],["/page/9/index.html","b8cdc35feff3a8453fd8545f3c72e456"],["/payment/index.html","9e0f04dc512f28aa9517c9ec6896a69c"],["/privacy-policy/index.html","06852659edc1cc4d32d42b3188938f7a"],["/rss2.xml","ebf1b8058805c0d67adc48565293cb2b"],["/search.xml","5c24ac74dcd1a98e43faf15a51d9881c"],["/sitemap.xml","6977d9f16769e58adf7e19a417b8cb51"],["/sw-register.js","09e4773722d3c7e6dbad0e8db4b096a1"],["/tags/5t/index.html","37197be7ecb01fc9a57b2b04a9641409"],["/tags/Clash/index.html","e9215198a0b434e33cefc27aaaec5fc7"],["/tags/Clover/index.html","e19ddf28410644783686868746ad9ba7"],["/tags/E5/index.html","3b66dc073092f8b7b49746fefab6ff82"],["/tags/FTP/index.html","9a2506534d59b872c4db780466250180"],["/tags/GitHub/index.html","8a42be06841238eaa41dd191718a80f1"],["/tags/Heroku/index.html","4e33c778ac236c7e60ed4287b88cc77f"],["/tags/Hexo/index.html","d745b27f2ff00062a46231f52da3a3f3"],["/tags/Lenovo/index.html","9b82efa34306b6f3b1f0e9b1fd021cbe"],["/tags/Oneindex/index.html","a56d950620f701c1f28faab9e5f13b84"],["/tags/QQ/index.html","aa7f9b652af81c6a04d158cc5ee41f50"],["/tags/QTTabbar/index.html","17c19056bae8978b7306be5890044d0b"],["/tags/RX文件管理器/index.html","abddb06f8af20f5fde23dcdeb34b95ce"],["/tags/Todesk/index.html","c9b65ec5fb1529ee0835cb0fe609b289"],["/tags/Vercel/index.html","419b5cb5bda74774762d0ae883aad30a"],["/tags/ads/index.html","0365197f15df028091670eb2af192cd5"],["/tags/api/index.html","82d1f5d9656ed1ee6c5d55b258f06f07"],["/tags/app/index.html","8abb999e56dd72c9a38faf98ca026919"],["/tags/blacklist/index.html","f29193313b5034518e4aa9dee8f3466a"],["/tags/butterfly/index.html","66fd5610bb98f35fa6ea4f9347e29196"],["/tags/chrome/index.html","a823c0d66886ce36266ac16c3f59f9a2"],["/tags/cloudflare/index.html","1434ed6ea1b9b9d469277e31faf523bc"],["/tags/cmd/index.html","b5245501ad5c0807fbeacbb188f7012c"],["/tags/c盘/index.html","40dcfd01073b02211417088a4ca448a0"],["/tags/email/index.html","bbf9f7c2594d1976ef5c17c839b3e638"],["/tags/ewomail/index.html","d3d43087007078af45cc20b088c4434a"],["/tags/fiddler/index.html","80c25a5231aef0193e175fc80da99084"],["/tags/flags/index.html","4cbd337fbfa308073b5469ef49a87e93"],["/tags/footer，页脚/index.html","48dc28d0fdac138f11f72e8b95c32b8d"],["/tags/galgame/index.html","a60fdfb412de491a0b22f80f51c8763a"],["/tags/git/index.html","1fc283fe4988bba7894d3310cd2f2fbc"],["/tags/gitcalendar/index.html","e07b78af7e56f77e5ca72392a1c92018"],["/tags/google-voice/index.html","522fc4a645ca6e7c23d079a8fbd04f37"],["/tags/gv/index.html","c880da02c8a7070c1a3af50f334f2901"],["/tags/html/index.html","68f8661f4881982443ced69bd41023b8"],["/tags/index-1.html","cfd56c665e1a645f3d39e57fe6f07655"],["/tags/index.html","54b3cf2650c8279cbe15bde6a5133a38"],["/tags/js/index.html","4c14d08e418e6ae944e0bb7ae7fbef16"],["/tags/jsdelivr/index.html","96fda88a90d79a7ca8942aec1bcb6630"],["/tags/linux/index.html","3c834a504c4ceaa7d8059e280d100341"],["/tags/madVR/index.html","7b57d76d5e392beab0b93e68fc1bd832"],["/tags/markdown/index.html","736ea4e565298663d9c75bb221c2dbfb"],["/tags/maya/index.html","833489cb2bfb95f206bb8ca497df7062"],["/tags/mklink/index.html","91e033c04d594de8e5129a3c46bafffa"],["/tags/office-e5/index.html","ed03b0baa0d1f3532c1d60bf40284905"],["/tags/onedrive/index.html","59b440ea5d529a8e1f5f8204cbb64948"],["/tags/picGO/index.html","968b573a76573509d9f97a235af99cbe"],["/tags/pixiv/index.html","7c45dba38162247b52e2563823a2a5e8"],["/tags/potplayer/index.html","78d961d679029c2bbc225904af831b1b"],["/tags/proxypool/index.html","e6134547265698d5297e9f7204616ca3"],["/tags/qbitorrent/index.html","da777187da87dbc58fe2f08e6ad1a6f5"],["/tags/raidrive/index.html","1fb5843d57065a38f2baca4894ca3ab0"],["/tags/screen/index.html","0e579c53a7185437d57f3662a1cb5b03"],["/tags/speedtest/index.html","24cd5410d9dd13ee1fed619ec079ccf6"],["/tags/surfboard/index.html","0a66b4c49d49d73af545af840de3a902"],["/tags/tap/index.html","f04164ed38f8434ab46d95c5b90f4716"],["/tags/telegram/index.html","a1c28981df46d47e3aa1b8cce1be0ab8"],["/tags/telegram代理/index.html","f28df382fbd1709b155d17cfd138e0b0"],["/tags/tg/index.html","5720245d1dbd21f97e9d6493803926b9"],["/tags/tg代理/index.html","d1d3cda45933545de0f61b850b42a274"],["/tags/top50/index.html","5a5d8f74be320ca286a92ff5b4a4964f"],["/tags/tracker/index.html","b7fbd7b03d995cd11256b2538386c67b"],["/tags/translate/index.html","3bd20f69ec0042850a475178b4ec76b4"],["/tags/translater/index.html","0bfb70c3d72f0938027ef3601f83f2cd"],["/tags/tun/index.html","f2adcbf2da122d44ad4c6818e16f7ce9"],["/tags/typecho/index.html","7d21dae30e268ff00f1470e6c0d3ef66"],["/tags/v2ray/index.html","144230e3b3e40a7d71ff7f5538a47667"],["/tags/vpn/index.html","f54d74f6d72e4a6f1bfd36eca99b1569"],["/tags/vps/index.html","c2b3597f612b895cb5b4e9353a654e96"],["/tags/windows/index.html","f5b94356896dc998e47fa4e5483b4694"],["/tags/windows端/index.html","9aadd5b0c5aaf18898d1778082f56365"],["/tags/xray/index.html","e55238136f3549c9aeb84b0827b4466a"],["/tags/下载/index.html","2f8d964307adfa8591ffb2616a423f6e"],["/tags/不限速/index.html","2b23fcb7b84198d382f4dd81bf9ce8e9"],["/tags/个人网盘/index.html","d8e44a4cb0fb540f6634cc9d2d764e29"],["/tags/主题/index.html","27ce52427b7419ece884eea39ae6064c"],["/tags/云便签/index.html","67c498396d5d55ed787738128650dcb5"],["/tags/云盘/index.html","a1df3922e1e0f6a3fd0b3fe267c4471c"],["/tags/人人/index.html","f716136be3f3b507d6e27178dca6343f"],["/tags/代理/index.html","64301e6cdf9eba384e307c823c171488"],["/tags/代码/index.html","7c6ecf3bac96657a26fd18a8d665bf1f"],["/tags/优选IP/index.html","9b4c4647a7d58b60bf6b7869a9ec1b4c"],["/tags/便签/index.html","0b9f57284571c8e4574481f502a24eb1"],["/tags/保号/index.html","c04bbdb6689dcee26112099219bb02c9"],["/tags/免费/index.html","38207b8975d58394266abecbaf2c3aa5"],["/tags/免费节点/index.html","c7fda48bdf2bf9484c1f34cab84b9c21"],["/tags/加密/index.html","2438d5dba7168e64d27fc210c52ed820"],["/tags/动画/index.html","591ab58f32530f476f53cf9a831d329d"],["/tags/博客/index.html","018f10705870a30845ce6a02d5410d48"],["/tags/历史记录/index.html","33b675b82f0deb1e9890c906778b0715"],["/tags/压力/index.html","b640f14551d689abc79a2b927bbc3780"],["/tags/压缩包/index.html","27c57e2532ae362aeb90792fc3820402"],["/tags/反代/index.html","c07ed97009b28d5e48fc9287197b7548"],["/tags/可视化/index.html","82a5b84e01ecb39293cb1647592de6e3"],["/tags/命令/index.html","3036fcf9f538e30c31d83c5e5472c9b5"],["/tags/国家/index.html","04350b863c9b068228abcd4115ddda59"],["/tags/图床/index.html","407f8abb826a75746f10b29f3f40ec69"],["/tags/图片/index.html","02101c9a51cdd889060a04265eb3295f"],["/tags/域名/index.html","18bfbb677a52fad83b11c0decc499001"],["/tags/多标签/index.html","47c7542f6cba2aa9f411b37ea8a923a2"],["/tags/存储/index.html","dad1fb7cc98bbcd369cfc247beaf90c1"],["/tags/学习/index.html","ddfa5eb3bcd2af9f0ff8d0252a528916"],["/tags/安全/index.html","d68ece58285e52e6b4f0ed372dbe8c2b"],["/tags/安卓/index.html","37b3fb27bb007f9f215fe415084126f1"],["/tags/宝塔/index.html","23f37ec376d474297de1b9a55f9f7a41"],["/tags/小游戏/index.html","2551b19a5218a2751a4c18a016ad94e8"],["/tags/广告/index.html","343d0a2ff022cbbe26d912fd1e3df92b"],["/tags/建站/index.html","323c4722eede8f9bd4bfbcaf164ff86c"],["/tags/影视/index.html","1076f1f84dea4543977c00c90e144fb0"],["/tags/快速启动/index.html","3830bc87b997f18082eacca93c46f4a8"],["/tags/手机/index.html","806d27755f3ee276448c6dae4b1f593a"],["/tags/托管/index.html","0ff1b62be0a82e7fb51358d89e089e12"],["/tags/抓包/index.html","273ea8a19a52abb4300d8805f99d30d0"],["/tags/抓取/index.html","6f8e0a5af79f32885dc0bc3204cdaf73"],["/tags/投屏/index.html","3618045a4ad1782693f450e684174822"],["/tags/拓展功能/index.html","88b83d47c2486b255190b6375a132532"],["/tags/挂载/index.html","dcbc402e5bf00724634cff090f9a3fd1"],["/tags/指纹/index.html","a5e8ec54caa3d18ad6a4cf51ff698f9e"],["/tags/接口/index.html","cc37f6b3016a2146fba812c87938e7f8"],["/tags/提取图片/index.html","7f33cfafdb2ce2bc6c9420f213e6943e"],["/tags/插件/index.html","868bcad23cae25bef196fe99dc511242"],["/tags/搜图/index.html","a231608c936b0592e21795be92f3bdd6"],["/tags/搭建/index.html","6ef9a3fb58553315f22af6f07621a308"],["/tags/撤回/index.html","44cc6acfa012de1401f3fc785c00b06b"],["/tags/播放器/index.html","36f684c9764c3868a18610a453c062c4"],["/tags/政府网站/index.html","35cc77d2efba0f59cb0193165eb641f1"],["/tags/效率/index.html","27b96ae30893b9565e329eda5555be4a"],["/tags/日历/index.html","dd9646eb72fe580dbe6bf0d6d26849fa"],["/tags/服务器/index.html","a6030755a1821e399523dad0bff44087"],["/tags/桌面/index.html","e6798da2a81dcdd077b98ed53a05f411"],["/tags/梯子/index.html","6339bab42f924652bbabfc7501f63149"],["/tags/检测工具/index.html","14022cc8b31a970bc2bdbb849ecb1bae"],["/tags/汉化/index.html","90686dba8d438f2143d268d945eac017"],["/tags/测压/index.html","ae03a370b38fb6cc685c5ed288b78dcb"],["/tags/测速/index.html","376a59607dea0b57193657ba5d8628f2"],["/tags/浏览器/index.html","31d117bbb392b84362cc256796c7ae92"],["/tags/清理/index.html","da9c0cc78ca471d8d878817c28c7ba00"],["/tags/滚动条/index.html","b25d7bed1a11f1290cda7cd0dc285cbf"],["/tags/灰色歌曲/index.html","853b15cbeeadc5c180208745f4bd91a7"],["/tags/电影/index.html","03344eb4535f1b8141f0f6e90927ec8a"],["/tags/电视剧/index.html","15ef48dfde37e0add7bfdaa31a372abd"],["/tags/白嫖/index.html","71aa3028b5f33ad8bb69565c53217b33"],["/tags/百度/index.html","d5d0ab6551e6c6240417c5191f047f9c"],["/tags/百度云盘/index.html","8968f97121f3927e2538685cfb6a31ce"],["/tags/百科/index.html","78734998de1e6778b1a2bf67369f956a"],["/tags/短信/index.html","feba9b6d146a504e0bf57155f4273561"],["/tags/硬件/index.html","bffb09d699b59179d77277892b0e2bca"],["/tags/科学上网/index.html","fbf9b3667d9c61d034b3c9124532be39"],["/tags/空间/index.html","0888c993d00796c4a827ede8a23ff217"],["/tags/笔记/index.html","a59839bac78f38d0396ee98c73531c0a"],["/tags/简洁/index.html","5b81bb53d4fc17bc72fa98bd051bcfbc"],["/tags/简约/index.html","0f670d7ee191b490bef7966ead3d73da"],["/tags/维基/index.html","5ca241406f13ff8def8001ccd1a90f93"],["/tags/网易云/index.html","bf086bf3177a66927030e0ab60fcafa4"],["/tags/网盘/index.html","447591ee02baafbc968060d55f1b8f8a"],["/tags/网站/index.html","6fae5b95199a1b3372f1ba41fb80e945"],["/tags/网络/index.html","bf92277e1414f6b106cdef609fc1b48a"],["/tags/美化/index.html","453cce0a1d6b2f4ec8433e1e5019c46c"],["/tags/翻墙/index.html","64b13af7d04752e8a76f46d8f8cb4c78"],["/tags/翻译/index.html","35cce5408ea2d0ad1a32afcded2a5f6a"],["/tags/翻译器/index.html","bedda0c15ef355c4719e47cbcac56d87"],["/tags/聊天/index.html","391fd937e7a5ec6534bca50c3cc7c68b"],["/tags/聊天室/index.html","70449e7dfc697243a195e87599d5b273"],["/tags/联想/index.html","78cfadbacbb9ab4592729156e400d8d2"],["/tags/节点/index.html","d045a44cf6d675f49cd599aa86333752"],["/tags/虚拟手机号/index.html","d2e6c59dd6930cc1b48af5bc34afd6da"],["/tags/补丁/index.html","2fbc31c0868dcd8b1fbd76a888e94931"],["/tags/视频/index.html","f09fab47999c91b83eb7db2a9038e75a"],["/tags/解析/index.html","ba91f43bca71ef26cce5d4d4f21f9e42"],["/tags/订阅链接/index.html","b87a7c2b57ba3b4188dac4ddbd04b654"],["/tags/记录/index.html","6e5d85b8bd7e342c6bfc7c956882cdb6"],["/tags/识图/index.html","0e68fef2a470d060881b73cbe92efea4"],["/tags/语言/index.html","f8578051262f45d719f5cebb90390cbb"],["/tags/资源/index.html","b17ab5c7ac375ad2053961ecb460c0ef"],["/tags/资源管理器/index.html","01a896263e0c8e8f0f6f9b9dccbe8df4"],["/tags/转移/index.html","7d2454ba7eab2a4c85c3af92324a501d"],["/tags/软件/index.html","f0ec73ae0abcd98ffdfd3065675c6670"],["/tags/轰炸/index.html","6db1fb43f42029ab718eb80955ffbfd7"],["/tags/迁移/index.html","a50d46725384f31baa6aa8903ba48dd2"],["/tags/远程控制/index.html","e4c110595c58010248dbe62fb221d31c"],["/tags/连接/index.html","397781e99e02abc7f6e4215debbb0d18"],["/tags/追踪/index.html","80a0f2c5a82ffe99240a79ca34bef179"],["/tags/速度/index.html","9894d152efbca1048aeb3ba5ea8bdc50"],["/tags/邮箱/index.html","c34bfaddbcae9c5fa7cb57a489074b2a"],["/tags/酷炫/index.html","5455bda18ac7a6f807ba4cbc86c0ab34"],["/tags/钓鱼/index.html","c0c02d96c0814c6d39d216adb96f0c7e"],["/tags/镜像/index.html","40ea5531f8fb429b7243b8bae7bcc30a"],["/tags/随机/index.html","bf228687075b45b5388592416020a97c"],["/tags/隐藏/index.html","3ae8afa5753d54807755a464461d9318"],["/tags/面板/index.html","cad8f2f80d7fedc48018059e998b7e5d"],["/tags/音乐/index.html","bd1576fb7a12423e5011640c88a154ba"],["/tags/高颜值/index.html","25338f9c29439cd83d001ef8ca1f135f"],["/tags/魔改/index.html","7645779a26dd8c5982c6baf00a580831"],["/tags/黑名单/index.html","f56521642592886fa27e48e11dfff730"],["/urls/index.html","7f394602fd974b80ee7ed07e8d424c1c"],["/vps/index.html","e7e2c0517ec26dae5273eec7dd267328"],["/支持/index.html","23407c2622b7249dab39c7017e2e2278"]];
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
