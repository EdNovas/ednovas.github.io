/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","33caebeb043d01cf161aba4cdd24d5e6"],["/2020/11/29/clash-windows/index.html","9aff28f3897c0dcf2299d3066cdc1b74"],["/2020/11/30/websites2/index.html","9a440b5950a4d9dec4020172de28c734"],["/2020/12/04/iphone4s/index.html","6c810b6e0601e5f3029ddd0076438f9f"],["/2020/12/04/onenote/index.html","16e6388061925db1305f33d253afcaa5"],["/2020/12/04/wesites1/index.html","3f61bad8bc7c8291a013304a98e381d8"],["/2020/12/06/nokia808/index.html","cf2b00d07435d926df96c61423c0f977"],["/2020/12/07/ipad1/index.html","1de1110a964f29dee545035245b8cb0e"],["/2020/12/18/freesubscribes/index.html","3d0feb14b51d6a926820e7138164595f"],["/2020/12/19/musics/index.html","51922dd7c9f4704bd8e9a358c6f86e4e"],["/2020/12/19/shadowrocket/index.html","dd8197af0d254b37c6afb7094c8d73ff"],["/2020/12/19/v2ray-windows/index.html","0c329092171766569e8373d192083760"],["/2020/12/19/v2rayng/index.html","0c93b0f3a366f009544d04e92a213c5d"],["/2020/12/20/beoplay/index.html","f9873329e3b403cc34a5371c78d074d1"],["/2020/12/20/订阅链接转换/index.html","afc9eee578ff78b6dcdcf19a399afcc7"],["/2020/12/21/chrome浏览器下载提速/index.html","02e8694dc3eadfde1afcd039c412c939"],["/2020/12/21/免费128线程并发下载xdown/index.html","0ec65cf38b9ea0ed680c704f65f58500"],["/2020/12/21/免费32线程下载软件ndm/index.html","aafbab04a39376f3169a477bc4698af6"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e5121503a19661236eafd7d20b8ac901"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","385ce2108898d33a1aa86f677bb6b2e8"],["/2020/12/21/广告怎么知道我在想什么/index.html","7bc9fd81d00c84342a264e76e645ad56"],["/2020/12/21/无名·引子（小说试写）/index.html","37c4322ab2c7d3130cb16646a12032ea"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","ad3d356e1883b7da5e53ac7dd3004fd1"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","07e5a2077e9b20192d0f1d5a6d451089"],["/2020/12/21/高速轻量下载器aria2/index.html","deae3f2af97269bb1826fbb4728e407a"],["/2020/12/22/2020-cee-roo/index.html","b1d875b1240f83854a5645586f642033"],["/2020/12/22/firefox插件、github、steam富强/index.html","19b65acca950d03d6f09aae342ad47f3"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","1b2dd81f9092d34a1cfe08d472211648"],["/2020/12/26/python-day-1/index.html","a504115bb6c86fa47727b2204f6713fc"],["/2020/12/26/python-day-2/index.html","bffac0d15260e9b3480f24653a3b1e27"],["/2020/12/26/度盘不限速下载方式一赏/index.html","de08980e540876570c7633ccaa78dbdf"],["/2020/12/26/添加开机自启软件/index.html","2d7d5f8e123b7ae123d63991ab82766f"],["/2020/12/26/电脑端截图方式一赏/index.html","ee7bbb0c308c407857b22088d78d06ea"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","705960f16a6d783467996094a8ef81b6"],["/2020/12/27/最安全的浏览器tor/index.html","a208865da92bb95da7d7a484afceba0e"],["/2020/12/27/网易云刷等级和听歌数量/index.html","92b96b2aeb602d3c0ec5469c23a201bd"],["/2020/12/28/freenom申请免费域名/index.html","a59a91df2148e91ee6e933825928cedc"],["/2020/12/31/机场/index.html","8db6797f1275429f97944eadf0cc5082"],["/2021/01/01/M1/index.html","d72e35736b9c5fc2589c78c4cf55f23e"],["/2021/01/01/compress/index.html","bb1533f3c39b00dde07cbe6f0b3b5d3c"],["/2021/01/01/infinityfree/index.html","e05a07a2c0058d5a5d01d61a70166511"],["/2021/01/01/硬核翻墙/index.html","2a7933ff0364626142ddfe7e330ef69c"],["/2021/01/02/qq/index.html","3a1f06d28607fb9144bc8f3b9a3f8839"],["/2021/01/03/netch/index.html","6b6cfcdc764df7cd83b6156be9c373fe"],["/2021/01/03/waifu2x/index.html","b4d981083ff5f3a475734e3a5fd2153d"],["/2021/01/04/ads/index.html","78d81d7be7163a63ef88fa49ad8eb7b4"],["/2021/01/04/games/index.html","b3eb7095142271e7bd183c709a1ea174"],["/2021/01/04/heroku/index.html","b8d1bc9ba92e9771696c9abee55af39a"],["/2021/01/06/movies/index.html","833d67ed65ef866a4d6b2eecf6a949f5"],["/2021/01/07/google2020/index.html","010307d25c0692d283b976061abce63d"],["/2021/01/07/lucky/index.html","b7ec3dd398c8935704c400db8207a7f3"],["/2021/01/07/spotify/index.html","d0df2d20988598f4a022dcc332659bd2"],["/2021/01/07/thunder/index.html","c13a18af9e59cf93edd7fb6450ba6ed6"],["/2021/01/08/adguardhome/index.html","75cd4c96a7d599d33958b6da7b990d42"],["/2021/01/10/IBM/index.html","995c22ac0422ab924c72fbff0266439a"],["/2021/01/10/potplayer/index.html","a30c24cffcdc265837eaba273e7d82f3"],["/2021/01/10/sakuraanime/index.html","87c5d7c7060790a0adb82ad177f4925b"],["/2021/01/10/美剧星球/index.html","d0396d52a1af625cb04b13dc710cd38e"],["/2021/01/12/telegraph/index.html","62daa3f4673518c5ef76551994d41e9f"],["/2021/01/14/comics/index.html","fcefea9e4a512e1939a1964453ade281"],["/2021/01/14/ftp/index.html","90c891c5f3eb6f4fa6a5637260b27ed8"],["/2021/01/14/oraclecloud/index.html","850f73d5b050a3f7cabba35c43766c40"],["/2021/01/14/porkbun/index.html","3daf70e341b867ce73d5c8798590c57e"],["/2021/01/14/powertoys/index.html","b2bee8bbabb7f7b293a6b6eb9eca8c0d"],["/2021/01/14/taptap/index.html","c36dbc686b96d2afce107840cb961487"],["/2021/01/14/ubuntuvsftp/index.html","a129b85c9fdea23f96795d2a604eba5f"],["/2021/01/14/小说/index.html","098a81f85579b4b1eb09945a591d1651"],["/2021/01/15/freeproxies/index.html","37f1cb610b8228ae57b07d13d009c225"],["/2021/01/15/incaseformat/index.html","5c5c1b14b2ca6598d234caf12ec6badf"],["/2021/01/16/euserv/index.html","0e959d179fc4532de8f06a3cf0a554ef"],["/2021/01/16/winxray/index.html","0fd530db04983861ef54efc2b5a9f885"],["/2021/01/18/qqreadhistory/index.html","d7138dbe3ebe1746fcd54996a597af5c"],["/2021/01/18/qqrevoke/index.html","568eb9001a9e7f4ecab2d95dd4899540"],["/2021/01/19/freevpn/index.html","5ef21954a399ca9cfac622e6f27f2d9e"],["/2021/01/20/browsertrack/index.html","9b31af86e5ca9693d72cdbd282d0b634"],["/2021/01/20/v2ui/index.html","c967c1cf91d2f3f260052733bb2e9911"],["/2021/01/21/failedtoconnect/index.html","7aca2422c4411b095f20d340bc2549d9"],["/2021/01/21/gitcalendar/index.html","b383bb72039aaa726be7070866c126df"],["/2021/01/21/markdownformat/index.html","faa4a7c5eb852f86ec4dd153c7be2a9a"],["/2021/01/21/markdowntable/index.html","c90c3a12c79489b051b1228d647c6c91"],["/2021/01/21/vercel/index.html","3a655b980c09db183354df4462aed9d6"],["/2021/01/22/hardware/index.html","b32b3344d1395398cd1b430c64db43c5"],["/2021/01/22/muviz/index.html","c0dc3a8f0afb3420a15ca4c34e380296"],["/2021/01/22/randomapi/index.html","d27c5bc0f5acb1ed898f54eee5f402e6"],["/2021/01/22/searchimages/index.html","b61b38e8c50550a581f2ffeb8cfcfaec"],["/2021/01/23/RX文件管理器/index.html","03fc72b9fdbb49f1bc2ab2321ee32076"],["/2021/01/23/chromeflag/index.html","f1aa1c313fe99d9b60ff09f5bae1af69"],["/2021/01/23/qttabbar/index.html","bfcbce75cb1f92e3393b681091f66571"],["/2021/01/24/githubspeedup/index.html","53140d1e1d9ff600ef22411712fb36da"],["/2021/01/24/jsdelivr/index.html","42094519852214ff182d5df777f54406"],["/2021/01/25/note/index.html","738a3c63f510b74a50c3e3e9b2dfc1a3"],["/2021/01/25/soul/index.html","bfcce0f3fc32d3fd1f88eb5bb2d8f2f3"],["/2021/01/26/herokuxray/index.html","a0e2e50d3357fa8f1b34e2da3aa8fceb"],["/2021/01/27/proxypool/index.html","bb7e885ab5f474743e69d840692c4c63"],["/2021/01/27/tracker/index.html","b7393bacc64ad4b8e0a897e52b8d53d3"],["/2021/01/30/pandownphp/index.html","10ef35ae68b5c011c26cef20d4640bef"],["/2021/01/31/newgroup/index.html","4747cc80670fe6e00dbc20825673d194"],["/2021/02/01/clashlanguage/index.html","74dbab77e24281d00184dbff522e7706"],["/2021/02/01/encrypt/index.html","a23da73bf36612e01cf714940f2e2de1"],["/2021/02/01/footermotion/index.html","8a579c776d725253e0847923fce25712"],["/2021/02/01/gitter/index.html","a4362df0c6f817f8a121f2b3811a944f"],["/2021/02/01/pixivtop50/index.html","4b24a96e9674dcafe251e3542652b015"],["/2021/02/01/scrollbar/index.html","8ec0ffca156788eef496f07ceabb7df6"],["/2021/02/02/clover/index.html","8ad1aeab7042c96da045aed1a33a092c"],["/2021/02/02/maya/index.html","1cf29060dea1eb81d5e9641078d88f0d"],["/2021/02/02/speedcontroller/index.html","60e35df11584f346853590f76c000dff"],["/2021/02/02/yesmusicplayer/index.html","76e6f8a012f2bfd117555bdf47b52128"],["/2021/02/03/lenovoonelite/index.html","4f318fa752e1b71a4a144dff883f86ea"],["/2021/02/03/skipads/index.html","279a4d01680820169e38e710e87c1042"],["/2021/02/04/picseed/index.html","29101cea7074dd5436e57655e6da7f1c"],["/2021/02/04/renren/index.html","25553f3731f13a712e9c6078c217549f"],["/2021/02/04/serverstress/index.html","6bbe5c599e5d0c05147d94519a2cc0ae"],["/2021/02/04/wikipediazh/index.html","10ed8272317c472eeda74a3e9e91be41"],["/2021/02/05/googlevoice/index.html","66cc486d3a5f313ea8706ab0d08c0536"],["/2021/02/06/clashconnection/index.html","61f7fded79fc9580320e07d31dcb5556"],["/2021/02/06/gvtransfer/index.html","a26e39cfb4c5bc5fa78e65b883838dd2"],["/2021/02/06/todesk/index.html","6a816cb3ceebd11d8657001c7967b826"],["/2021/02/06/vpnblacklist/index.html","e13be5f18681216c1f924c4d9e0109ca"],["/2021/02/07/mklink/index.html","e6f73ef37f5377dd3bb2bfdc64e3c780"],["/2021/02/07/speedtest/index.html","85a2dc6bc6841df8e05c62f2cc52b7fb"],["/2021/02/07/translate/index.html","04a86a3b02322092a8163a1c7033dddf"],["/2021/02/08/ewomail/index.html","6d4db31ee3148675d76dd04bd1109a3e"],["/2021/02/10/officee5/index.html","1937e411566a3ccec11a64bd9884caec"],["/2021/02/10/raidrive/index.html","dccfebc3f8c2287a8d7962d5927b74c8"],["/2021/02/13/e5sub/index.html","ebfa1c55d2f47e0d98b4b3e9e0c83cb3"],["/2021/02/14/screen/index.html","622e418226b8bb05f3800c97c5152e2e"],["/2021/02/15/clashtun/index.html","f947f4f56b9ee90a1210900d5b0690ac"],["/2021/02/15/messageboom/index.html","3f414a16c3fa46c876b703600baf96e2"],["/2021/02/15/oneindex/index.html","0daccdde4d6f34cf23c51bf6474cd634"],["/2021/02/16/govsites/index.html","1d3debeac529c5be21ed89cb9d1a1357"],["/2021/02/17/hexototypecho/index.html","8d7eb9c9407c43c40f66224fae00f62e"],["/2021/02/19/fiddler/index.html","a88308288df61ba0bdbacfa7db91e18a"],["/2021/02/22/potplayerset/index.html","2b071017f84a455a7c1d187260b10dc7"],["/2021/02/22/studyresource/index.html","d1d618a0ceef75eae4b7186ff954639b"],["/2021/02/22/telegram/index.html","f7eafa315ffa424a08c10d3bfa87784a"],["/2021/02/22/videos/index.html","1ee21c78486547a2de0d311744c2263a"],["/2021/02/24/mtproxy/index.html","7e836efd6df3e98229cfe9ac665fe1e5"],["/2021/03/10/catchcat/index.html","5b17e03b24e5fb1160b8a92c6d1f5138"],["/2021/03/10/neteasemusic/index.html","42a735e59eefd890bc40f0fe2e8822a3"],["/2021/03/10/surfboard/index.html","c2df692bb5d124c5d480711d783d7c53"],["/2021/03/11/vpnandjc/index.html","c0fb7c8b88d9646abc0928b95e4f3a24"],["/2021/03/12/qrcodes/index.html","091df77e1321ebedba8826122d02d71e"],["/404.html","b9c458afe610cc97fb3108e58b219de0"],["/archives/2020/11/index.html","84f93ae8d2fdcae83733d9fcaf69837b"],["/archives/2020/12/index.html","43fc144b7fc70bbee21e5d70bd27e719"],["/archives/2020/12/page/2/index.html","da9a7892830b0160db0324be8f393dbf"],["/archives/2020/12/page/3/index.html","a73dc747cb67ca59ae04379de2713b58"],["/archives/2020/index.html","a1f1684e7638063317f59160d163ff29"],["/archives/2020/page/2/index.html","584090c97d68230a5506a33aea05cb65"],["/archives/2020/page/3/index.html","25c910e1ab56b120677033faee54496f"],["/archives/2021/01/index.html","6e5995fc97a9218b88c67eb08cb08f6a"],["/archives/2021/01/page/2/index.html","9296f64979261749c71b27c99c019f96"],["/archives/2021/01/page/3/index.html","e96f2cc6726b32d3442edba472e64350"],["/archives/2021/01/page/4/index.html","14649e324dfe73c4d4387a3ff879e334"],["/archives/2021/02/index.html","65b05f92c24d258e8de9dda73a5b125d"],["/archives/2021/02/page/2/index.html","d715b194ad8eb2255a39091b045b63e3"],["/archives/2021/02/page/3/index.html","bc232c794e92e82d78e9aa4a09e132ad"],["/archives/2021/03/index.html","a335c20eb4a18cf8988d554d8450dbc8"],["/archives/2021/index.html","0428d7510c67c5013a49916c0a2ada2e"],["/archives/2021/page/2/index.html","40f7c96553dcf18bfa08b6db332d77f6"],["/archives/2021/page/3/index.html","556df641ad1dcf7c941a8955a85c734f"],["/archives/2021/page/4/index.html","1a061810827045901b20bb00e0d69fae"],["/archives/2021/page/5/index.html","b24f319f660bf187d0724de44976dde5"],["/archives/2021/page/6/index.html","065bfb0fda8dc4f9b49e4a4ad39586c0"],["/archives/2021/page/7/index.html","04905728c6ee2040ad4d7b744cf74b12"],["/archives/index.html","528d8962c800140119f2a2ed38ce9b73"],["/archives/page/10/index.html","da7f6108363b1e229dc43551c3bd85d7"],["/archives/page/2/index.html","08d8ac70d21f9c87b25df6667e957ccc"],["/archives/page/3/index.html","9a13113b34c9601e485960ac51cc8efa"],["/archives/page/4/index.html","8d7d590dbfc62927ffa9363a3794eff7"],["/archives/page/5/index.html","c242f45ca948d5cd5b715f6149887720"],["/archives/page/6/index.html","af76290fbcb6d1805a2cf71c82d10fc5"],["/archives/page/7/index.html","f3f3ee22bf48db148722b02327423b6d"],["/archives/page/8/index.html","f2e57b56f5d2a4c3d70445bc319130a9"],["/archives/page/9/index.html","48889ae0c44754a71a7500f6390abaa2"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPN/index.html","826f1556b90eaf1cd324c9eb6847b6d1"],["/categories/VPS/index.html","dfc99ef402e3be3807dbac33fc0b0331"],["/categories/index.html","fd140c849bc0fc5fe4b37d07e8c8e6a5"],["/categories/下载/index.html","db3a2ffbf6925ee4547013f3c0c562c3"],["/categories/安全/index.html","2d67eb5ed280de6e8babac2ab916d9fd"],["/categories/建站/index.html","5b62e3f8fd23fb6ff12e7919806355a8"],["/categories/杂/index.html","e77a9ce4ec19ea01aa28bf7dbf64be30"],["/categories/杂/page/2/index.html","5b87bc16034cde8f07149428b080ac3f"],["/categories/测评/index.html","529b825f385ae3d579193c4b8f67515c"],["/categories/科学上网/index.html","33164c127cadc72481bf2d263a4481b3"],["/categories/科学上网/page/2/index.html","99c954bab8ed86d9b837a20ff98f0c39"],["/categories/编程/index.html","2ead4005b9c67c57dfeda802e88ad34e"],["/categories/网站/index.html","557e988e2985ef88a9699a3086ad0407"],["/categories/网站/page/2/index.html","beb58c9678368752135fc076fb78ccdc"],["/categories/软件/index.html","5e21466fe30f036a0bec82a80b9eb6a7"],["/categories/软件/page/2/index.html","486286fcd88527b4ad0c092dbf802565"],["/categories/软件/page/3/index.html","0d80c958b139e44b9482010f18a67811"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","28c8da1c970863ff6af58dd3c05dcd8d"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","d53c836bc1f97bc3ae7eeaa19b85e776"],["/ios/index.html","11b0af0b3a753a416a262a760253c8dc"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","50d90f4eb79615116780089e432d8765"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","08a1014f630c00829c45d0f09bbe1b57"],["/page/2/index.html","e91863459884273ac1940b7bc5c5d43b"],["/page/3/index.html","52fac8ccbc1b6489b88f8d06f0884221"],["/page/4/index.html","db81f9c5391437ec5a0cd4beeeb2326e"],["/page/5/index.html","682ab153bd8fdd1eb8687c458c0d2cb3"],["/page/6/index.html","a360662014f14e2bc494074ed3653d60"],["/page/7/index.html","0fefa1360bd2f850f6736483df0cadc7"],["/page/8/index.html","2f0609e75ee79fab0a053bd4257a944c"],["/page/9/index.html","cc952f422bbf0d423e0f30cc637ac184"],["/payment/index.html","89bc13740df0b9ba385ca6e1b88e0f52"],["/privacy-policy/index.html","6d307e5cc30b48348644b988a264b3c3"],["/rss2.xml","da4c74868b7f7203b681e1bd4c5f22c4"],["/search.xml","7dbff91ad71a2f0db76766cb5d84f80b"],["/sitemap.xml","e6eac55b8af79f41f4a68fcf24db9ffb"],["/sw-register.js","32ffec3c97aea28b9e8459616d5d40a2"],["/tags/5t/index.html","0a27cfd28d4ff25bc6e9b053bacc59e3"],["/tags/Clash/index.html","7acb3aa7b601095f344286457afe14d8"],["/tags/Clover/index.html","18b931ab51ef068cfedcd2c4ee0cb95c"],["/tags/E5/index.html","72586ae084bbde326b20bd0d8cee81ec"],["/tags/FTP/index.html","b11dd7076d9cedb9bfbd4deee4ee44a0"],["/tags/GitHub/index.html","133c0eb531c3e312f412e73995c6b8a3"],["/tags/Heroku/index.html","f25c8ca4c5b809cd5e57be93f1b63768"],["/tags/Hexo/index.html","9ea5cd088065db065df885ed16184e82"],["/tags/Lenovo/index.html","7d615b3a86410442b59cc13bb8c8b0bb"],["/tags/Oneindex/index.html","9c8a07b6455ed54352adfb33ca7828d4"],["/tags/QQ/index.html","48883e66b5e6784d34b01232a134e78e"],["/tags/QTTabbar/index.html","ce1c18ed44e0f8fad09a08697a73f4d2"],["/tags/RX文件管理器/index.html","d1da3836067613619d377ee19820e55e"],["/tags/Todesk/index.html","5801d088643b5698555e6daf859b6542"],["/tags/Vercel/index.html","9fa0855d00a5c902edb36f8e87832c50"],["/tags/ads/index.html","c72bbfdac99ec3f5d1d416b52469dff9"],["/tags/api/index.html","9797dbdaf0d5ba799e221e0dfc84ea12"],["/tags/app/index.html","16b647eac2b4e98ca00a65784969ceca"],["/tags/blacklist/index.html","906c431c1710a0f0b01ea26f1548cd56"],["/tags/butterfly/index.html","55259400a380994f65eb0ca2165c2a94"],["/tags/chrome/index.html","eaabc741b447de2e804224f9ee9a7a39"],["/tags/cloudflare/index.html","a2a6674da2cdd29abd13af6755896634"],["/tags/cmd/index.html","27bc5e46384557b17fb598a7e816fa58"],["/tags/c盘/index.html","79845fbb4a2ffda8942357c99db8f3a1"],["/tags/email/index.html","15602cc8735414dbaa4e7ac748dc4a38"],["/tags/ewomail/index.html","d6624551e6d5eda74869e6c4574ca60f"],["/tags/fiddler/index.html","d8f9f03048a6bd507408a3abe1007fa9"],["/tags/flags/index.html","90cf305dacb3beac15ac4a0f96126a25"],["/tags/footer，页脚/index.html","19c5ac5d239e61749de8e33449acd5e4"],["/tags/galgame/index.html","d39d8a27285f4fcdf0f8d6789d34ae1b"],["/tags/git/index.html","9a11d90accb8583ff9a909b74367ef8d"],["/tags/gitcalendar/index.html","e7fcdce198b87df32f37a3c63bd99a73"],["/tags/google-voice/index.html","948756474b364b5bd9beccb2c5d26948"],["/tags/gv/index.html","40f877adde350c552fad6d54a27a3fe4"],["/tags/html/index.html","645b9492adb8670fa54913c63dddf5e6"],["/tags/index-1.html","4ae2f79390020978c4b6fd396f528a94"],["/tags/index.html","f7da524d82c8f2ff0a434e5e2c9599ba"],["/tags/js/index.html","74627ab3e1d0e330f4ce163c5edf648a"],["/tags/jsdelivr/index.html","2a4da5b32e4cd60e8c35a732e832ccac"],["/tags/linux/index.html","25c9550d5e8503c2614ef64e048bcc7b"],["/tags/madVR/index.html","29c81bc7ae64030f2b4c8186087b6c8f"],["/tags/markdown/index.html","1939398bbb9af2152275e703029bd0bd"],["/tags/maya/index.html","d02d29a6b4539bdf3fe69d8425ae7cbd"],["/tags/mklink/index.html","0fbc3da55ded0817c9e190f714109adf"],["/tags/office-e5/index.html","48b19ba2cddb7b7862a9a78457b0e88e"],["/tags/onedrive/index.html","577ab7237e3a9c39c7623f55ee61a597"],["/tags/picGO/index.html","e6fbed95e5fe711c74e27940e8e2476a"],["/tags/pixiv/index.html","42b928a3a359c05bc4d682175911d736"],["/tags/potplayer/index.html","003af6e44dc29118e4494cace359bba6"],["/tags/proxypool/index.html","35109ffcb28f50b0b39b2591462ab92d"],["/tags/qbitorrent/index.html","7a93560d99b0f28767bb56e784013076"],["/tags/raidrive/index.html","ac221b3bbeb97d61982512dbea2d8bf2"],["/tags/screen/index.html","a68227bc4781eb7e75824f523a3dbf7a"],["/tags/speedtest/index.html","b65b78ff385d9204590365e1991c8b73"],["/tags/ss/index.html","0cde44e805513eea1c9cfe268ca1379a"],["/tags/ssr/index.html","999e0d86d558a6be95f13ff8325260c9"],["/tags/surfboard/index.html","0a55f3cac1c5e7d9c26d6d26545b2e23"],["/tags/tap/index.html","82fbcb0c3ec0c63a1f12c2f3cc72db9a"],["/tags/telegram/index.html","57e568175706f2ffbb7ed717048900b3"],["/tags/telegram代理/index.html","874f9812f71e5ca694fdf8497c2a2f30"],["/tags/tg/index.html","a553ec230b91650d70e7596cea7ae0c4"],["/tags/tg代理/index.html","a5768b827a52e1ba9d94dd8450415fbe"],["/tags/top50/index.html","923c6dcb2bbcbeee50d6ba81cb7c91a8"],["/tags/tracker/index.html","4d627c78023eaa2e3760c145648fe6ca"],["/tags/translate/index.html","9a7ec23d2237b508b6f968ba097ac82b"],["/tags/translater/index.html","f8b258ca72553f3c6175c22a2a72d689"],["/tags/tun/index.html","1f4f26eccd5224b048edbb05c1cb034d"],["/tags/typecho/index.html","a1981ba3bd8c68b41b2dbd1516f97a53"],["/tags/v2ray/index.html","c3b276fc8c639a90800d64ca8bff92e0"],["/tags/vpn/index.html","7cf705233ae65168efe4717e526f4290"],["/tags/vps/index.html","84c3d8029739a6d7aff6b3848d226848"],["/tags/windows/index.html","078e0fa1d8f866f930666eb359cdaac5"],["/tags/windows端/index.html","ca0216f3e582e96b357ed0973e36544f"],["/tags/xray/index.html","19522853c706569a72d062d014370f8b"],["/tags/下载/index.html","047466ad609f4a55b62958d0ff732445"],["/tags/不限速/index.html","ad924b08deb48029d415de419647494d"],["/tags/个人网盘/index.html","b7ddfa26a06ce7b4a92fd80aecf7e8ec"],["/tags/主题/index.html","bafd5f960505fb8949078d5de536bf8b"],["/tags/云便签/index.html","213b5cb17630615fd56065dac6cbf61a"],["/tags/云盘/index.html","93cded49941a05ab9ae748558f683246"],["/tags/人人/index.html","e7053f6fc84139b520fb8a1a59de71f6"],["/tags/代理/index.html","998cb1703be710f476357b321d3f459c"],["/tags/代码/index.html","3514ce8874b8b9cbad8b76b7fa6d4260"],["/tags/优选IP/index.html","207486e0d0bdba4b86f84acf89fe396c"],["/tags/便签/index.html","a2e612ceb3d03ae96c5f7db83e9cc094"],["/tags/保号/index.html","2f76ee5a02ed325f1ea84d9422530d77"],["/tags/免费/index.html","c0bc13a21d77205b6ba85e139ff29080"],["/tags/免费节点/index.html","265a932f2f35eb3ca4542c17fa593c6d"],["/tags/加密/index.html","8c8d2b0d5cf65ddea08cefaa115eb24e"],["/tags/动画/index.html","014217d185e059fd8fa86cef3224a22f"],["/tags/博客/index.html","ba750356b4247f7cc99da554226e0b3e"],["/tags/历史记录/index.html","fe1306cad3fe763608e1ae45863f0962"],["/tags/压力/index.html","8a4bb2107c618dfc852292c8390b1199"],["/tags/压缩包/index.html","789dbd099a04c4dc1f3e672b080043c4"],["/tags/反代/index.html","b501aace44ea41cc5449a6404ac886d7"],["/tags/可视化/index.html","4f7dd08899c63d69ebfc4a0689a8c042"],["/tags/命令/index.html","c2061cc0bf9a4f6f76fce7197041cfbc"],["/tags/国家/index.html","7d8267d948c84a16b4e10d196b33df38"],["/tags/图床/index.html","29eb3345d1c823f5d9873ab02dc981a3"],["/tags/图片/index.html","8659ede5ae43f6d40278887bb2237b31"],["/tags/域名/index.html","9017b053ba516cc657a890f75b06b8ab"],["/tags/多标签/index.html","8abec0626a67ac2f07d63b49d7fee018"],["/tags/存储/index.html","c4eabee7666d19cca8b90ab7c5957847"],["/tags/学习/index.html","8f4debd4935a39c38fc6a31ce9703282"],["/tags/安全/index.html","6e802e93f09be5bcf4dd2cc8a4e19c5f"],["/tags/安卓/index.html","b3c3bf94aa0edff67a874bdac71d42cc"],["/tags/宝塔/index.html","83152c16c1b9da4fef8fe285717992bb"],["/tags/小游戏/index.html","4cdf666e66c1968743b81a26b73438cb"],["/tags/广告/index.html","e061bdb5eb4a744334eda7d38299aa06"],["/tags/建站/index.html","45f49ef0b6908f95f96b07f4424702ea"],["/tags/影视/index.html","cfc6478e1411abbb34dbafd5464aa62f"],["/tags/快速启动/index.html","73f1f8de8d1d366d8c70a0c2c06685bc"],["/tags/手机/index.html","99eb0d4d6ca3bb0cda5f33f2f346902b"],["/tags/托管/index.html","d2188eb76b5a0d63a1403209bc9595a1"],["/tags/抓包/index.html","078806be0d205f2379da98572ed9fd97"],["/tags/抓取/index.html","59b970e6cb8e7f2afca600016d008746"],["/tags/投屏/index.html","191b4959c473cbe4ce9d1e5be2ff7451"],["/tags/拓展功能/index.html","1a8abae99543acafb5e54c3ae7ddcec3"],["/tags/挂载/index.html","87ade7c4de4a8303d3821a5909a4a49c"],["/tags/指纹/index.html","c380fec6504ce1bf26b09509cfa2e55c"],["/tags/接口/index.html","451546e1d4b70df257184562c2804431"],["/tags/提取图片/index.html","20436809645ea4c2da34751409a02bc7"],["/tags/插件/index.html","7ea45e190127f9f735c9f8957db5d8bc"],["/tags/搜图/index.html","87585c8f5c1fdf64299dc08e0eb64504"],["/tags/搭建/index.html","ca63d8bcf0f948ddc2ed07ab516bf10c"],["/tags/撤回/index.html","8f5fc4c92b0407fa8409dfe5f3810796"],["/tags/播放器/index.html","8cee30988c4a57e9f81bab75121a3706"],["/tags/政府网站/index.html","89be44fc2bfd7e4b64079fb581bf132d"],["/tags/效率/index.html","c5014108ec0c8bafca1e63afc14648c6"],["/tags/日历/index.html","b6a513ef83efeecb096feea0e8b680a7"],["/tags/服务器/index.html","04b874f3f40ace0ba32d7c738eda8821"],["/tags/机场/index.html","4b310c3d6b739966e99e5527e89e5c45"],["/tags/桌面/index.html","4caa7f6fb8353bfbd72f70f8b927da49"],["/tags/梯子/index.html","77c0447f36e2298de7e57fe1b6eee19d"],["/tags/检测工具/index.html","bdef1423843393635200972602837011"],["/tags/汉化/index.html","7108c157727e9baf742759f2d06cf765"],["/tags/测压/index.html","f8d94eea041116268379fe52b83ca056"],["/tags/测速/index.html","ac16c1e07740475a1dcfbd8882f95e9d"],["/tags/浏览器/index.html","497be58813b0e44e9b4e996861278f5a"],["/tags/清理/index.html","0dcebf9bc2536ff1326eff1d1141f780"],["/tags/滚动条/index.html","f280a9974d96a2388b43493796399fbe"],["/tags/灰色歌曲/index.html","63956bf97a4aa6b7539c78e6e106fedb"],["/tags/电影/index.html","12cfbb5684b31cca704d63f30ee33be4"],["/tags/电视剧/index.html","c1d1c8f65842b39e42ac03c365b6dda3"],["/tags/白嫖/index.html","60c5b51b9cc0dd2602bebd68a818561b"],["/tags/百度/index.html","1641f83888102a6a33ab827510db6b34"],["/tags/百度云盘/index.html","33656a7b3b9983b0d4efcd911da6de45"],["/tags/百科/index.html","69176bddb204e1de7df5c86f1aaf4ad9"],["/tags/短信/index.html","44485ff6ce846c48a91bb88e50b93cde"],["/tags/硬件/index.html","52995c588d22b58086a28242b88fb128"],["/tags/科学上网/index.html","07acd2b0a8931b2c1db7a9db4e6a9cb3"],["/tags/空间/index.html","59457f797556201554794987b1a7e276"],["/tags/笔记/index.html","c61c6b63819cde23960d80f1e395f115"],["/tags/简洁/index.html","e8d391b64c7d68d7ee580e8701befe78"],["/tags/简约/index.html","128ffcce73277dac49d43ef36f840e74"],["/tags/维基/index.html","3ab15f37bdd34cb03e8224e1e2b5080c"],["/tags/网易云/index.html","b2d1e5179d20e4663bf019c1bcaa1241"],["/tags/网盘/index.html","889c12a1db382cbdd4be90f407233ca8"],["/tags/网站/index.html","3a8836077d698997e8a8450194a6096d"],["/tags/网络/index.html","1f8531fde8aeccaf1aa340c58404a678"],["/tags/美化/index.html","1701836415d6670a2a09c5869e071c89"],["/tags/翻墙/index.html","abbfa2c6dde6a8160439beaa68602275"],["/tags/翻译/index.html","0c31fe7952a79d8a7398bccb4299b8e6"],["/tags/翻译器/index.html","9aa8d04aa0b51849f2e008c084597124"],["/tags/聊天/index.html","c9efadc4601367b1cb55bdc4bf7f8cef"],["/tags/聊天室/index.html","44abe8ddc254c486a66abdd3ee62e8d5"],["/tags/联想/index.html","f593464c0dc174def69bf165fbf37d2b"],["/tags/节点/index.html","e9f87752f3d66cc1b39491df06ee9981"],["/tags/虚拟手机号/index.html","402107c7cdb1ec0f2e57e74b4a71b9d7"],["/tags/补丁/index.html","e067bc5646778378c15c85ea9563db1c"],["/tags/视频/index.html","229b2437c0177787c307fe6e2e0772d6"],["/tags/解析/index.html","d8a52919905df230fe1afd5adb155e58"],["/tags/订阅链接/index.html","6ebc78c9604999bab9c61fa4031e57e7"],["/tags/记录/index.html","503c0750bd6796bc826bc04bbadd106f"],["/tags/识图/index.html","738a0297ff18cd2ffb598912c374371b"],["/tags/语言/index.html","6d53f6f676f37c80b8fd760339723dea"],["/tags/资源/index.html","837d7aa8eb4f002942adb2ce8b72f7ec"],["/tags/资源管理器/index.html","41684f42bc0288a8dc007beb67c85f78"],["/tags/转移/index.html","456aa35b4f192c6387c2af5298f38a50"],["/tags/软件/index.html","69e3b1c3f29ce68777c5c9b675543343"],["/tags/轰炸/index.html","fcad594beb479673ed41625ef7096fd0"],["/tags/迁移/index.html","a83c7b6d33fcb5f0d234f8d4d831754e"],["/tags/远程控制/index.html","d1fde63035df667e6a0e86ffb57ae776"],["/tags/连接/index.html","4f47b852d655da0ee8bcab141bd83311"],["/tags/追踪/index.html","cfcccb6d286d670c16e8d00503e872ef"],["/tags/速度/index.html","353da3489c53512c825820b41c416279"],["/tags/邮箱/index.html","2d45c7cae4210636f8de4890036e3cdc"],["/tags/酷炫/index.html","3259e5c46bf480e9fc352521dbc0d63b"],["/tags/钓鱼/index.html","7352683b539dd9beb9cd6ad191395852"],["/tags/镜像/index.html","31ab5b5930855f4891358f006a923fb2"],["/tags/随机/index.html","8a83cd252fb5f2de0e74f123424bee83"],["/tags/隐藏/index.html","3753f4b618c20f9527749ee39af9655b"],["/tags/面板/index.html","0daba5bae5b48f6c5873c97e43fd23cc"],["/tags/音乐/index.html","66f4ee54b2d002eb9b588a694b76d1ed"],["/tags/高颜值/index.html","5123e96c39569b1f81cf805e76a53dad"],["/tags/魔改/index.html","4c4ce00221fa52b8a3ff9f5bd76d8cf7"],["/tags/黑名单/index.html","d5fbff6b0e4d867c2a0a0e010b05f996"],["/urls/index.html","c362ea55d3816e0bf91245d83affd953"],["/vps/index.html","dd6d0f96da27fbc7fa53a4d621c73610"],["/支持/index.html","31e6719f5e54997017ca7065611b0f7e"]];
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
