/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","33caebeb043d01cf161aba4cdd24d5e6"],["/2020/11/29/clash-windows/index.html","9aff28f3897c0dcf2299d3066cdc1b74"],["/2020/11/30/websites2/index.html","9a440b5950a4d9dec4020172de28c734"],["/2020/12/04/iphone4s/index.html","6c810b6e0601e5f3029ddd0076438f9f"],["/2020/12/04/onenote/index.html","16e6388061925db1305f33d253afcaa5"],["/2020/12/04/wesites1/index.html","3f61bad8bc7c8291a013304a98e381d8"],["/2020/12/06/nokia808/index.html","cf2b00d07435d926df96c61423c0f977"],["/2020/12/07/ipad1/index.html","1de1110a964f29dee545035245b8cb0e"],["/2020/12/18/freesubscribes/index.html","3d0feb14b51d6a926820e7138164595f"],["/2020/12/19/musics/index.html","51922dd7c9f4704bd8e9a358c6f86e4e"],["/2020/12/19/shadowrocket/index.html","e90a93d48af6aad85ea1f3f183119286"],["/2020/12/19/v2ray-windows/index.html","0c329092171766569e8373d192083760"],["/2020/12/19/v2rayng/index.html","0c93b0f3a366f009544d04e92a213c5d"],["/2020/12/20/beoplay/index.html","f9873329e3b403cc34a5371c78d074d1"],["/2020/12/20/订阅链接转换/index.html","afc9eee578ff78b6dcdcf19a399afcc7"],["/2020/12/21/chrome浏览器下载提速/index.html","02e8694dc3eadfde1afcd039c412c939"],["/2020/12/21/免费128线程并发下载xdown/index.html","0ec65cf38b9ea0ed680c704f65f58500"],["/2020/12/21/免费32线程下载软件ndm/index.html","aafbab04a39376f3169a477bc4698af6"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e5121503a19661236eafd7d20b8ac901"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","385ce2108898d33a1aa86f677bb6b2e8"],["/2020/12/21/广告怎么知道我在想什么/index.html","7bc9fd81d00c84342a264e76e645ad56"],["/2020/12/21/无名·引子（小说试写）/index.html","37c4322ab2c7d3130cb16646a12032ea"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","ad3d356e1883b7da5e53ac7dd3004fd1"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","07e5a2077e9b20192d0f1d5a6d451089"],["/2020/12/21/高速轻量下载器aria2/index.html","deae3f2af97269bb1826fbb4728e407a"],["/2020/12/22/2020-cee-roo/index.html","b1d875b1240f83854a5645586f642033"],["/2020/12/22/firefox插件、github、steam富强/index.html","19b65acca950d03d6f09aae342ad47f3"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","1b2dd81f9092d34a1cfe08d472211648"],["/2020/12/26/python-day-1/index.html","a504115bb6c86fa47727b2204f6713fc"],["/2020/12/26/python-day-2/index.html","bffac0d15260e9b3480f24653a3b1e27"],["/2020/12/26/度盘不限速下载方式一赏/index.html","de08980e540876570c7633ccaa78dbdf"],["/2020/12/26/添加开机自启软件/index.html","2d7d5f8e123b7ae123d63991ab82766f"],["/2020/12/26/电脑端截图方式一赏/index.html","ee7bbb0c308c407857b22088d78d06ea"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","705960f16a6d783467996094a8ef81b6"],["/2020/12/27/最安全的浏览器tor/index.html","a208865da92bb95da7d7a484afceba0e"],["/2020/12/27/网易云刷等级和听歌数量/index.html","92b96b2aeb602d3c0ec5469c23a201bd"],["/2020/12/28/freenom申请免费域名/index.html","a59a91df2148e91ee6e933825928cedc"],["/2020/12/31/机场/index.html","8db6797f1275429f97944eadf0cc5082"],["/2021/01/01/M1/index.html","d72e35736b9c5fc2589c78c4cf55f23e"],["/2021/01/01/compress/index.html","bb1533f3c39b00dde07cbe6f0b3b5d3c"],["/2021/01/01/infinityfree/index.html","e05a07a2c0058d5a5d01d61a70166511"],["/2021/01/01/硬核翻墙/index.html","2a7933ff0364626142ddfe7e330ef69c"],["/2021/01/02/qq/index.html","3a1f06d28607fb9144bc8f3b9a3f8839"],["/2021/01/03/netch/index.html","6b6cfcdc764df7cd83b6156be9c373fe"],["/2021/01/03/waifu2x/index.html","b4d981083ff5f3a475734e3a5fd2153d"],["/2021/01/04/ads/index.html","78d81d7be7163a63ef88fa49ad8eb7b4"],["/2021/01/04/games/index.html","b3eb7095142271e7bd183c709a1ea174"],["/2021/01/04/heroku/index.html","b8d1bc9ba92e9771696c9abee55af39a"],["/2021/01/06/movies/index.html","833d67ed65ef866a4d6b2eecf6a949f5"],["/2021/01/07/google2020/index.html","010307d25c0692d283b976061abce63d"],["/2021/01/07/lucky/index.html","b7ec3dd398c8935704c400db8207a7f3"],["/2021/01/07/spotify/index.html","d0df2d20988598f4a022dcc332659bd2"],["/2021/01/07/thunder/index.html","c13a18af9e59cf93edd7fb6450ba6ed6"],["/2021/01/08/adguardhome/index.html","75cd4c96a7d599d33958b6da7b990d42"],["/2021/01/10/IBM/index.html","995c22ac0422ab924c72fbff0266439a"],["/2021/01/10/potplayer/index.html","a30c24cffcdc265837eaba273e7d82f3"],["/2021/01/10/sakuraanime/index.html","87c5d7c7060790a0adb82ad177f4925b"],["/2021/01/10/美剧星球/index.html","da0dfda2f793c7694730dc97d7c7d67f"],["/2021/01/12/telegraph/index.html","62daa3f4673518c5ef76551994d41e9f"],["/2021/01/14/comics/index.html","fcefea9e4a512e1939a1964453ade281"],["/2021/01/14/ftp/index.html","90c891c5f3eb6f4fa6a5637260b27ed8"],["/2021/01/14/oraclecloud/index.html","850f73d5b050a3f7cabba35c43766c40"],["/2021/01/14/porkbun/index.html","3daf70e341b867ce73d5c8798590c57e"],["/2021/01/14/powertoys/index.html","b2bee8bbabb7f7b293a6b6eb9eca8c0d"],["/2021/01/14/taptap/index.html","c36dbc686b96d2afce107840cb961487"],["/2021/01/14/ubuntuvsftp/index.html","a129b85c9fdea23f96795d2a604eba5f"],["/2021/01/14/小说/index.html","098a81f85579b4b1eb09945a591d1651"],["/2021/01/15/freeproxies/index.html","37f1cb610b8228ae57b07d13d009c225"],["/2021/01/15/incaseformat/index.html","5c5c1b14b2ca6598d234caf12ec6badf"],["/2021/01/16/euserv/index.html","0e959d179fc4532de8f06a3cf0a554ef"],["/2021/01/16/winxray/index.html","0fd530db04983861ef54efc2b5a9f885"],["/2021/01/18/qqreadhistory/index.html","d7138dbe3ebe1746fcd54996a597af5c"],["/2021/01/18/qqrevoke/index.html","568eb9001a9e7f4ecab2d95dd4899540"],["/2021/01/19/freevpn/index.html","5ef21954a399ca9cfac622e6f27f2d9e"],["/2021/01/20/browsertrack/index.html","9b31af86e5ca9693d72cdbd282d0b634"],["/2021/01/20/v2ui/index.html","c967c1cf91d2f3f260052733bb2e9911"],["/2021/01/21/failedtoconnect/index.html","7aca2422c4411b095f20d340bc2549d9"],["/2021/01/21/gitcalendar/index.html","b383bb72039aaa726be7070866c126df"],["/2021/01/21/markdownformat/index.html","faa4a7c5eb852f86ec4dd153c7be2a9a"],["/2021/01/21/markdowntable/index.html","c90c3a12c79489b051b1228d647c6c91"],["/2021/01/21/vercel/index.html","3a655b980c09db183354df4462aed9d6"],["/2021/01/22/hardware/index.html","b32b3344d1395398cd1b430c64db43c5"],["/2021/01/22/muviz/index.html","c0dc3a8f0afb3420a15ca4c34e380296"],["/2021/01/22/randomapi/index.html","d27c5bc0f5acb1ed898f54eee5f402e6"],["/2021/01/22/searchimages/index.html","b61b38e8c50550a581f2ffeb8cfcfaec"],["/2021/01/23/RX文件管理器/index.html","03fc72b9fdbb49f1bc2ab2321ee32076"],["/2021/01/23/chromeflag/index.html","f1aa1c313fe99d9b60ff09f5bae1af69"],["/2021/01/23/qttabbar/index.html","bfcbce75cb1f92e3393b681091f66571"],["/2021/01/24/githubspeedup/index.html","53140d1e1d9ff600ef22411712fb36da"],["/2021/01/24/jsdelivr/index.html","42094519852214ff182d5df777f54406"],["/2021/01/25/note/index.html","738a3c63f510b74a50c3e3e9b2dfc1a3"],["/2021/01/25/soul/index.html","bfcce0f3fc32d3fd1f88eb5bb2d8f2f3"],["/2021/01/26/herokuxray/index.html","a0e2e50d3357fa8f1b34e2da3aa8fceb"],["/2021/01/27/proxypool/index.html","bb7e885ab5f474743e69d840692c4c63"],["/2021/01/27/tracker/index.html","b7393bacc64ad4b8e0a897e52b8d53d3"],["/2021/01/30/pandownphp/index.html","10ef35ae68b5c011c26cef20d4640bef"],["/2021/01/31/newgroup/index.html","4747cc80670fe6e00dbc20825673d194"],["/2021/02/01/clashlanguage/index.html","74dbab77e24281d00184dbff522e7706"],["/2021/02/01/encrypt/index.html","a23da73bf36612e01cf714940f2e2de1"],["/2021/02/01/footermotion/index.html","8a579c776d725253e0847923fce25712"],["/2021/02/01/gitter/index.html","a4362df0c6f817f8a121f2b3811a944f"],["/2021/02/01/pixivtop50/index.html","4b24a96e9674dcafe251e3542652b015"],["/2021/02/01/scrollbar/index.html","8ec0ffca156788eef496f07ceabb7df6"],["/2021/02/02/clover/index.html","8ad1aeab7042c96da045aed1a33a092c"],["/2021/02/02/maya/index.html","1cf29060dea1eb81d5e9641078d88f0d"],["/2021/02/02/speedcontroller/index.html","60e35df11584f346853590f76c000dff"],["/2021/02/02/yesmusicplayer/index.html","76e6f8a012f2bfd117555bdf47b52128"],["/2021/02/03/lenovoonelite/index.html","4f318fa752e1b71a4a144dff883f86ea"],["/2021/02/03/skipads/index.html","279a4d01680820169e38e710e87c1042"],["/2021/02/04/picseed/index.html","29101cea7074dd5436e57655e6da7f1c"],["/2021/02/04/renren/index.html","25553f3731f13a712e9c6078c217549f"],["/2021/02/04/serverstress/index.html","6bbe5c599e5d0c05147d94519a2cc0ae"],["/2021/02/04/wikipediazh/index.html","10ed8272317c472eeda74a3e9e91be41"],["/2021/02/05/googlevoice/index.html","66cc486d3a5f313ea8706ab0d08c0536"],["/2021/02/06/clashconnection/index.html","61f7fded79fc9580320e07d31dcb5556"],["/2021/02/06/gvtransfer/index.html","a26e39cfb4c5bc5fa78e65b883838dd2"],["/2021/02/06/todesk/index.html","6a816cb3ceebd11d8657001c7967b826"],["/2021/02/06/vpnblacklist/index.html","e13be5f18681216c1f924c4d9e0109ca"],["/2021/02/07/mklink/index.html","e6f73ef37f5377dd3bb2bfdc64e3c780"],["/2021/02/07/speedtest/index.html","85a2dc6bc6841df8e05c62f2cc52b7fb"],["/2021/02/07/translate/index.html","04a86a3b02322092a8163a1c7033dddf"],["/2021/02/08/ewomail/index.html","6d4db31ee3148675d76dd04bd1109a3e"],["/2021/02/10/officee5/index.html","1937e411566a3ccec11a64bd9884caec"],["/2021/02/10/raidrive/index.html","dccfebc3f8c2287a8d7962d5927b74c8"],["/2021/02/13/e5sub/index.html","164058852027836161e050a23bf5e9dd"],["/2021/02/14/screen/index.html","622e418226b8bb05f3800c97c5152e2e"],["/2021/02/15/clashtun/index.html","f947f4f56b9ee90a1210900d5b0690ac"],["/2021/02/15/messageboom/index.html","3f414a16c3fa46c876b703600baf96e2"],["/2021/02/15/oneindex/index.html","0daccdde4d6f34cf23c51bf6474cd634"],["/2021/02/16/govsites/index.html","1d3debeac529c5be21ed89cb9d1a1357"],["/2021/02/17/hexototypecho/index.html","8d7eb9c9407c43c40f66224fae00f62e"],["/2021/02/19/fiddler/index.html","a88308288df61ba0bdbacfa7db91e18a"],["/2021/02/22/potplayerset/index.html","2b071017f84a455a7c1d187260b10dc7"],["/2021/02/22/studyresource/index.html","d1d618a0ceef75eae4b7186ff954639b"],["/2021/02/22/telegram/index.html","f7eafa315ffa424a08c10d3bfa87784a"],["/2021/02/22/videos/index.html","1ee21c78486547a2de0d311744c2263a"],["/2021/02/24/mtproxy/index.html","7e836efd6df3e98229cfe9ac665fe1e5"],["/2021/03/10/catchcat/index.html","5b17e03b24e5fb1160b8a92c6d1f5138"],["/2021/03/10/neteasemusic/index.html","42a735e59eefd890bc40f0fe2e8822a3"],["/2021/03/10/surfboard/index.html","c2df692bb5d124c5d480711d783d7c53"],["/2021/03/11/vpnandjc/index.html","c0fb7c8b88d9646abc0928b95e4f3a24"],["/2021/03/12/qrcodes/index.html","091df77e1321ebedba8826122d02d71e"],["/404.html","59c5eeb81767fca5344ddef5783e23fc"],["/archives/2020/11/index.html","98a179852a5c4d4c3b752d7568698ca9"],["/archives/2020/12/index.html","233619a416d7627e0270819004ae38af"],["/archives/2020/12/page/2/index.html","a7e2a891416fd2407d1e2ac15f3170c6"],["/archives/2020/12/page/3/index.html","5e6f745fd7f68dd2c455af1460b0df8f"],["/archives/2020/index.html","5f0a894b3e572209d04a09b27f790807"],["/archives/2020/page/2/index.html","3ff8d6b3c7fe40941e515ec3fb3ba5bd"],["/archives/2020/page/3/index.html","c89cd486bdac0d3f484b97aaf715a0b4"],["/archives/2021/01/index.html","40f31250ccad39937fbb40fabd511257"],["/archives/2021/01/page/2/index.html","b51f39eebfbce53209f7747fde17274b"],["/archives/2021/01/page/3/index.html","2da08e2d160fdb5c755e8999a2239394"],["/archives/2021/01/page/4/index.html","d1f1a301c3509c612940dd183ceabe6a"],["/archives/2021/02/index.html","cdc3c9f3d485d78c46192f38b521fdf9"],["/archives/2021/02/page/2/index.html","97618add5d327cf903183b15deb6e98c"],["/archives/2021/02/page/3/index.html","6b1f6c79b250a8287e41f93dadee613c"],["/archives/2021/03/index.html","5a0208cdf466eb26b4e550e7500bd9c4"],["/archives/2021/index.html","995728a6dcd31d629861a730a0e535a0"],["/archives/2021/page/2/index.html","757e9cc0cfb4764e7d8e424ad3078808"],["/archives/2021/page/3/index.html","ba0ab2aad0b21b7834f66aa616650199"],["/archives/2021/page/4/index.html","2532c14551db56cfaf1c59eabc1a1788"],["/archives/2021/page/5/index.html","8c0ae5ee1f5bef28ea075070c62707d8"],["/archives/2021/page/6/index.html","315a85fe2521af332e35745092152e6b"],["/archives/2021/page/7/index.html","0bde5fde3633357e57816c2fba9e765d"],["/archives/index.html","2167fc831dbcec50027c61ad736a1c15"],["/archives/page/10/index.html","548cc1b9b70093e8a06c05741fc09cad"],["/archives/page/2/index.html","666310fa160bee64496d4293552522c2"],["/archives/page/3/index.html","d98019fc2f1d256dd75ceffcaebd49f8"],["/archives/page/4/index.html","ff5ecc580a9e7237054c67ab3e2df41d"],["/archives/page/5/index.html","850ea41bde900c305a64d81365898e17"],["/archives/page/6/index.html","dc26fccd13c2b27a85db21b7ff4df4e8"],["/archives/page/7/index.html","9eef9e801e0330b495fe3c9f8a81bb33"],["/archives/page/8/index.html","1a1f10973c51f4fe6f51a130675bbc32"],["/archives/page/9/index.html","a4dfd38f4eaddbd727fc68c17337b028"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPN/index.html","668d57004a1bf404d481eb37284ce8c7"],["/categories/VPS/index.html","0381cc1ffbdc6e6cf958dfc10d59a70f"],["/categories/index.html","db19403e9dece1e607d0ad55fae53fc1"],["/categories/下载/index.html","128eaeddec58435f1d7c3b0fe2eb4398"],["/categories/安全/index.html","ab4fa48660411aafe5f7772d1501f929"],["/categories/建站/index.html","5bbd1b7c94745ab32425d08f18aabd8f"],["/categories/杂/index.html","a5c21d69d44d1a553f4a0aeaa9f03038"],["/categories/杂/page/2/index.html","7bc992c6da9f3de1b814e7cbe6f58ccd"],["/categories/测评/index.html","1b68000cc36ff9cf5798ba04a3062742"],["/categories/科学上网/index.html","e4b308d448596651154f364ffdc6d13d"],["/categories/科学上网/page/2/index.html","c0750e432ab06fa5141563f6b8f5b523"],["/categories/编程/index.html","f723a5075f60736b88e7b6f75a7ee7ca"],["/categories/网站/index.html","caf0ee2b46354996cb09af79f9a5b524"],["/categories/网站/page/2/index.html","7843111db2bf18d0b9761d4996af13b0"],["/categories/软件/index.html","adfdf34f98c71cfceaa2cae7e9961d76"],["/categories/软件/page/2/index.html","6956197d717736e2f19a15a80dbf3e9f"],["/categories/软件/page/3/index.html","a50756fad6a7f7d38473c8e4c8996470"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","45e28365311f6d83e82c14adf2c20952"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","cffc025db4a5f8f2926628c142155aee"],["/ios/index.html","3cc6b5d06c7f626744af66195eff3541"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","3930939bcfc98ad9693fca47fa8745ca"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","a9d132410bc202d870205a2aea5f9454"],["/page/2/index.html","6908b98440528bf5ea0711ea2fc72986"],["/page/3/index.html","1d71a2ca19e5bba8fb3df7267bc4e840"],["/page/4/index.html","fa68b4f4d9478e9e9a03d352a5e281b8"],["/page/5/index.html","ea79f1e04c8d3e2676d0d0d573239c0e"],["/page/6/index.html","42faa35848ec650f81f36203765456aa"],["/page/7/index.html","d99d096632e50f9f60bd8056804a81c1"],["/page/8/index.html","8ac4f1688f015951e94aa90a8e10570a"],["/page/9/index.html","4f6bbfd735c45db70dbbeee1088b26fd"],["/payment/index.html","e16c8102e17b76574a15fe03c9a0f9c0"],["/privacy-policy/index.html","87a3970efd267dd1ef6081425638132a"],["/rss2.xml","6fa39e20ae970db6cc323a60fdee2587"],["/search.xml","c3844365e5ac0c5b0563bdbe0207e2b1"],["/sitemap.xml","f7b1685cb3a3132932bb0cc31f54cab1"],["/sw-register.js","9db4aefb039a2caaaeff3b205aca3168"],["/tags/5t/index.html","f498800762675bb8c730cb0b38a27dd5"],["/tags/Clash/index.html","98f3932ad8b6dc545383dba731a6052c"],["/tags/Clover/index.html","3827310016d1ec05fd8ab96a43309a57"],["/tags/E5/index.html","8cdc16f362b37c06c20b9a5c81f8d41a"],["/tags/FTP/index.html","83f1ce9e4a270e539775c3cd7af94824"],["/tags/GitHub/index.html","f9f3a85c3719aea28a038a61b606a67b"],["/tags/Heroku/index.html","7504646c82d50059ccae0726389c0513"],["/tags/Hexo/index.html","96d5491cb9f0c7c8cabc4943181e6f6c"],["/tags/Lenovo/index.html","eb815d4c49e8941415b436e1e8e17502"],["/tags/Oneindex/index.html","ae50f56decc120aa7c59d9db9f884d62"],["/tags/QQ/index.html","df12882fb528cf06f6e6af4da7a4e46e"],["/tags/QTTabbar/index.html","aee769eca191b976c3e4224a273a8d0e"],["/tags/RX文件管理器/index.html","2c886047ace719b8231dd809c0e02137"],["/tags/Todesk/index.html","b9e4d78ba8daccd69714f244b05f299d"],["/tags/Vercel/index.html","7fabe547d475a851a92248ba26311c6f"],["/tags/ads/index.html","bce7c3255a6f60fe82ac2ba44a18eea3"],["/tags/api/index.html","df6b88b06e70b22acdb7d5ddd2fae8ce"],["/tags/app/index.html","93a9c24352a10274ff0d5a34dda998e9"],["/tags/blacklist/index.html","43069565c60dd11285c91f5f580c5c0a"],["/tags/butterfly/index.html","b956de24506baf360026fc7307c19623"],["/tags/chrome/index.html","31150e4453eb1061daf285b278a694db"],["/tags/cloudflare/index.html","f553abb6d7617562e80fb27f6c6d6c7f"],["/tags/cmd/index.html","81d70c16b025c5429935398d24ec8e30"],["/tags/c盘/index.html","23895650cb422461f74ae651fe3bb4ff"],["/tags/email/index.html","5ec55eb96cb1add80ce62ef3cd65567e"],["/tags/ewomail/index.html","662c849da4a4887ff0524317ff528feb"],["/tags/fiddler/index.html","967a8fd1655457454f1110562d58024d"],["/tags/flags/index.html","4f1ea813a9561acd1c07dd9361931109"],["/tags/footer，页脚/index.html","4df77052805e3079178f24f309d88354"],["/tags/galgame/index.html","3d1c0b2125d7906cd94368e713610ba9"],["/tags/git/index.html","b6e334dca1b5ba438536e6a7646553e4"],["/tags/gitcalendar/index.html","9c515cc8207212ae84b16309f17e479d"],["/tags/google-voice/index.html","8c765875e9613f0d192ff92be9ab8206"],["/tags/gv/index.html","931935575680eafb1c4e86207d106b21"],["/tags/html/index.html","56c9266ddc2ecc07e18c85cb0532e986"],["/tags/index-1.html","96d1c1a003007c540b1ccf09e49d0ea5"],["/tags/index.html","8eadf5860682c3706c19b66aefd8decd"],["/tags/js/index.html","dd121ac11dd39f87b9dbb90ebfe2d7e5"],["/tags/jsdelivr/index.html","af6007b72b0cf9b51bfce9552e097719"],["/tags/linux/index.html","ddbed600f38ce3c83ee6ec764c44b7a9"],["/tags/madVR/index.html","3204a84262bef8ccfef2377f7a5518e6"],["/tags/markdown/index.html","e7287a65394736cffc73ea39e2fa1486"],["/tags/maya/index.html","b18913fb6fd3eabf1ab3e8206b8137b4"],["/tags/mklink/index.html","7ee884fe8258343ea86086198cddcf5a"],["/tags/office-e5/index.html","74ae0d18bc48c1bbe0e2b759fdea12ce"],["/tags/onedrive/index.html","ce6aeb4b1ccb3733a3647c9449032459"],["/tags/picGO/index.html","bd908e1f4e57006bc6920548bd15f1d1"],["/tags/pixiv/index.html","36e4e9f4ffcc0511633955a7ecc31de6"],["/tags/potplayer/index.html","9cf8061e88b5c7128f7012b656b26d59"],["/tags/proxypool/index.html","e3f357c8119bf83346ba619ea4d53661"],["/tags/qbitorrent/index.html","a3b48313123be38f2faa37f8955b66f8"],["/tags/raidrive/index.html","8a67fa25975d5285c3a36879e2867bf5"],["/tags/screen/index.html","50cb3494e5571140f19cbe131dacc835"],["/tags/speedtest/index.html","59c6704cf6181c2d50f74d851d4a5424"],["/tags/ss/index.html","c10388ed7e2234f186ad80971799d658"],["/tags/ssr/index.html","87404492a4663a9b41bbc4469d2cddee"],["/tags/surfboard/index.html","011d41c50939798ce080c7cddf32c500"],["/tags/tap/index.html","346eb55a4328b78ea6218e01b3fafbf8"],["/tags/telegram/index.html","c96d67666bcd85cdbc316c53b6f5b6c5"],["/tags/telegram代理/index.html","aa06fea1edacbc02509c87099ba888d9"],["/tags/tg/index.html","24e623ed9f1bedd53ca0df892597637f"],["/tags/tg代理/index.html","67722abfa9e145b5def7fc26ebc9fa89"],["/tags/top50/index.html","c8e20038f594127a370a4815e14ec624"],["/tags/tracker/index.html","fa350b3b62a190ae9c86d217fa3becd2"],["/tags/translate/index.html","81a5f4aa94b176ba0c4f94925181bea6"],["/tags/translater/index.html","dee13b7069db045821b61f9225a520df"],["/tags/tun/index.html","498dd8ec692b3380a674cd6cc7f2b6a8"],["/tags/typecho/index.html","d48d63e024bf78afc1415de17c33eba3"],["/tags/v2ray/index.html","339c9cf6228a79921104d96c95f897e4"],["/tags/vpn/index.html","dd2d871035bc7fd0fcd8730d29c6f6d6"],["/tags/vps/index.html","e8f7281b7d200c1f36e88f103e0b8c46"],["/tags/windows/index.html","418ab60003bc9a0be4904088418ac3bd"],["/tags/windows端/index.html","f89f8ebb72463e5c6d39d9a8de3a8626"],["/tags/xray/index.html","9dcd1821dd6144de09a174674a202bb7"],["/tags/下载/index.html","05cbcf007b41f6f52a0ebedb3b28b510"],["/tags/不限速/index.html","0f09be6231d4db9d4fde087a946d74d5"],["/tags/个人网盘/index.html","0157fa8dd92262d6eb0d668ab1cc324d"],["/tags/主题/index.html","ac4530ace207a55c6d192f2ba8dff8c4"],["/tags/云便签/index.html","e5e2037869560720ec74f3b3ce35f7d7"],["/tags/云盘/index.html","c5ea0d6a8bb860f89ac54cfaeb26fd4a"],["/tags/人人/index.html","838a34ea9cab28941cf02b3f480606a9"],["/tags/代理/index.html","6f12d7514b2ae38347400fb6d5a1de97"],["/tags/代码/index.html","efcd3b034a9b364743c3df4882e0834e"],["/tags/优选IP/index.html","5b24b1e7a03e2ca873f5ab7b647fbe21"],["/tags/便签/index.html","ce98e96ed6a510775591b9a97edd33da"],["/tags/保号/index.html","670af7946f24dad2121bd98aee3b05b4"],["/tags/免费/index.html","ae1fea42cc4ff0c37ace07638275527c"],["/tags/免费节点/index.html","236714dffa4fa240230c57b0b5312310"],["/tags/加密/index.html","c933e7539697defdc775bcd2bdacb636"],["/tags/动画/index.html","bd49c583f0c007dbbc0625a2992fdf05"],["/tags/博客/index.html","ab106e4c9f857f2105be417d0807d440"],["/tags/历史记录/index.html","a98f14ff6963237a4de724d1a4dfdf51"],["/tags/压力/index.html","1cf55ced6bdb47121b32b60cb1d69190"],["/tags/压缩包/index.html","6f2ee9259011acb6cc6c21eb95aadf06"],["/tags/反代/index.html","aa0acbdbcbff644bea410aa8e364c7da"],["/tags/可视化/index.html","4a0f2b6434f9d356d933f8bd3772b7d1"],["/tags/命令/index.html","45261553c244b679099f1788a28230b9"],["/tags/国家/index.html","c65001b8f2f45a80c560a2245be2dcc6"],["/tags/图床/index.html","711ccfa8b266bab9d727877ca13a0511"],["/tags/图片/index.html","957f174c9078bbecc9b8c76bb6e78df4"],["/tags/域名/index.html","7735855bb56ce59f4b3fdd0198fd5fb5"],["/tags/多标签/index.html","cf8911add91625ee6eef6625951fb1a4"],["/tags/存储/index.html","7a435bc6e83ccaf7207ae4633526a8f0"],["/tags/学习/index.html","39f55c28ed209755b3a00e9dfbadd061"],["/tags/安全/index.html","55fdef6e49f252078438e648c17e19c7"],["/tags/安卓/index.html","6b89d3ba71fff4b271d654815e855108"],["/tags/宝塔/index.html","70fcc7db2cdc59422560d0de4b6fafb4"],["/tags/小游戏/index.html","5f08106ebfd8dc2e1e9284ae347d9297"],["/tags/广告/index.html","a694f09e752c9c42374ff2129143d147"],["/tags/建站/index.html","e39923a8633ec9d9cf9974e94f78278f"],["/tags/影视/index.html","59bc494d7c045460ce54702a0a71c917"],["/tags/快速启动/index.html","098790b43b4f12ffe5051bccf9f913ca"],["/tags/手机/index.html","d60ac2dac71948b4fe5442a09b5ec6c4"],["/tags/托管/index.html","c8d4c07a712c0f77f8afddacd1094642"],["/tags/抓包/index.html","8131f530709f61431e340c1f1a1a55dc"],["/tags/抓取/index.html","1bb54c7dfc9f691a856c1f0d994bdaa4"],["/tags/投屏/index.html","8179deb6088fbc5c781c1db380505576"],["/tags/拓展功能/index.html","c04641284c6ddbaf606fcd4f6849e614"],["/tags/挂载/index.html","b606a559faf215894c3a4d039a716fb9"],["/tags/指纹/index.html","55c635015ead455e6e03567be2a59776"],["/tags/接口/index.html","8e7f7cac16091aedab209a47d544711f"],["/tags/提取图片/index.html","366aa57f4a3363cb7962b26aa0f680c4"],["/tags/插件/index.html","0e8f64f9b2e0ac7282f2f37f3e8aab6d"],["/tags/搜图/index.html","73bfac2f8c8fa03ceef204e896133019"],["/tags/搭建/index.html","b665e8bc97d50b2ba666c5fb65cec3ea"],["/tags/撤回/index.html","5f9d1389bab1777fd91b6ef79282d3d1"],["/tags/播放器/index.html","cb05dea1030f27e8f71ccb44ff7af4d9"],["/tags/政府网站/index.html","9edd5bd6ac55c7be5548f4e748250de2"],["/tags/效率/index.html","ae8bb0b5824122f0a73620463d104c77"],["/tags/日历/index.html","0a530bb4b8dbdb1513e241360666073c"],["/tags/服务器/index.html","0c42bf3ab1f5f550e1d8f572df74702b"],["/tags/机场/index.html","19ab6341c8b515f457cbc6c73614996e"],["/tags/桌面/index.html","b0a4ac701438118fa3033669a0eb5560"],["/tags/梯子/index.html","8a0dc60a97814105c7b017f8f903a174"],["/tags/检测工具/index.html","751746d0a9c61f3e043e5ca3709a2d45"],["/tags/汉化/index.html","fe1a5d526f3744fdfaa789124bc0e69b"],["/tags/测压/index.html","9ebf4d5d5a32caa0be7485332c85cbae"],["/tags/测速/index.html","455a13fc4baf3ad1ab6849987868b7db"],["/tags/浏览器/index.html","c078c62edc52559205f41c8542afd618"],["/tags/清理/index.html","2ee14d8471be903dcc2c5aec14833b89"],["/tags/滚动条/index.html","fd1358fe2bcb90c78b3df0278ff3675a"],["/tags/灰色歌曲/index.html","bef421b4e4c837a4591fddac4f625741"],["/tags/电影/index.html","9411227b25f96555f35ec06e3e96314b"],["/tags/电视剧/index.html","6e38ea9122af362c2d2465e127488279"],["/tags/白嫖/index.html","6f46fb2b4f54a5b4e574d7635fa31ea1"],["/tags/百度/index.html","6c9b81ffe01db9c4ab3909c924c96703"],["/tags/百度云盘/index.html","2564ca2544e638cb4c8974d984762d38"],["/tags/百科/index.html","1ae61629839fd1440e7c6dd84bba8ba2"],["/tags/短信/index.html","3ea352f497f2a5b28d02d883d78e8462"],["/tags/硬件/index.html","6c300c9cb24194c49dad777b0318e40c"],["/tags/科学上网/index.html","ab15350b7a32df2e4af9f03998e42bd1"],["/tags/空间/index.html","36261a2c02f85ef0b9e4254a88ad88bc"],["/tags/笔记/index.html","caeefc59f03a7b3054cd3f53d068cd04"],["/tags/简洁/index.html","f0dd80e64d8e9c49c35e3bc10a4f35ed"],["/tags/简约/index.html","59efd01c7270be41e570a0b872f0b6e3"],["/tags/维基/index.html","17036a3b790e0fbe963b5e52352a3f94"],["/tags/网易云/index.html","e12c1b94269cc7d5118ad70ebd74f7b1"],["/tags/网盘/index.html","da8f5d5a34ecd4ab4d31dc0f0cc446cc"],["/tags/网站/index.html","e0734d128545590ec3960a27f4bb6dd8"],["/tags/网络/index.html","bddb69c3e04f8b4c46ce0920f0bbfec0"],["/tags/美化/index.html","63a339f8b77fd0d50ad9b6a7e17c6e97"],["/tags/翻墙/index.html","354c17648582b5743daf8b3ccba45fc7"],["/tags/翻译/index.html","846bfe2f594143665a7bb92434eeb2fb"],["/tags/翻译器/index.html","3fe3ff48b19749b3653123bfee61365f"],["/tags/聊天/index.html","09648e6b84d8f461d5b356465250deb2"],["/tags/聊天室/index.html","d44b7f519a5eeaf7937ecb3cf68a3483"],["/tags/联想/index.html","f03bf58c9467371f5e1120df667057f1"],["/tags/节点/index.html","f8e7e84f7877e961b5056873e2cb78d1"],["/tags/虚拟手机号/index.html","c299867f74ca74caab28cebc4781b33f"],["/tags/补丁/index.html","77a277cd5ca5e3efb79c24c76d8b587a"],["/tags/视频/index.html","e7546005bdd0cb53d72912cd90f9138f"],["/tags/解析/index.html","5f38c88527236e11a040919ee795a335"],["/tags/订阅链接/index.html","8b1d30e949164c30958386f8bdf6cebc"],["/tags/记录/index.html","ec8c007987ae6b54f82734aa1ddff417"],["/tags/识图/index.html","fa48c6e65f9718885f7cbc4e1eec20b2"],["/tags/语言/index.html","a58dc5c450b7bfd3c397c5d149efb7ad"],["/tags/资源/index.html","46b4b76050c93a62abc53759b82f46f9"],["/tags/资源管理器/index.html","3a32d958cc7402274dd588e172e31350"],["/tags/转移/index.html","b7675d30e36e3fa566150c1d24a8f603"],["/tags/软件/index.html","aee168be829300b91fd39d7f6b624fff"],["/tags/轰炸/index.html","d6be8223308d58c78a7068714d45c888"],["/tags/迁移/index.html","eacc0eb963054ed13c70a31e913a52fd"],["/tags/远程控制/index.html","6fc584543d4309ba44c12ae34469d170"],["/tags/连接/index.html","d49fc2cdf9845b890d7b7106ab603451"],["/tags/追踪/index.html","53d08f8376feaa94c565af24dde38548"],["/tags/速度/index.html","04edd4ac1dbff7cd859873f262fbd00c"],["/tags/邮箱/index.html","3038bcf1cbdd1c783b1684c78889bbd9"],["/tags/酷炫/index.html","10c3029c5bc70364ba958ba7d3667e1d"],["/tags/钓鱼/index.html","4b9fd01e828c9de35703702824b39ec4"],["/tags/镜像/index.html","5350833fb848fe98b578c52692e64f58"],["/tags/随机/index.html","77236715b2ca52d1ee2c8fb0ffbe1291"],["/tags/隐藏/index.html","063acc75e24fa212278aebd21bf2fdae"],["/tags/面板/index.html","bcb0967909e07bfb80f7ae33721e01e0"],["/tags/音乐/index.html","ba05e5dbbb8fcd29b6a9ff7b23ba6504"],["/tags/高颜值/index.html","4242ef59c102b430cf96a647015d90fe"],["/tags/魔改/index.html","e6d5d77663e8a5aa865e9be2ea2c1d57"],["/tags/黑名单/index.html","91b16203c4c381c70ae492ca0c6441d7"],["/urls/index.html","81d04430aaa6df2c8f8e6dcd2eed9b91"],["/vps/index.html","ea78169263ab4fa2cca57d715fb592d3"],["/支持/index.html","9769319b34101478f36cb01dfa72cd8c"]];
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
