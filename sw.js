/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","33caebeb043d01cf161aba4cdd24d5e6"],["/2020/11/29/clash-windows/index.html","9aff28f3897c0dcf2299d3066cdc1b74"],["/2020/11/30/websites2/index.html","9a440b5950a4d9dec4020172de28c734"],["/2020/12/04/iphone4s/index.html","6c810b6e0601e5f3029ddd0076438f9f"],["/2020/12/04/onenote/index.html","16e6388061925db1305f33d253afcaa5"],["/2020/12/04/wesites1/index.html","3f61bad8bc7c8291a013304a98e381d8"],["/2020/12/06/nokia808/index.html","cf2b00d07435d926df96c61423c0f977"],["/2020/12/07/ipad1/index.html","1de1110a964f29dee545035245b8cb0e"],["/2020/12/18/freesubscribes/index.html","3d0feb14b51d6a926820e7138164595f"],["/2020/12/19/musics/index.html","51922dd7c9f4704bd8e9a358c6f86e4e"],["/2020/12/19/shadowrocket/index.html","e90a93d48af6aad85ea1f3f183119286"],["/2020/12/19/v2ray-windows/index.html","0c329092171766569e8373d192083760"],["/2020/12/19/v2rayng/index.html","0c93b0f3a366f009544d04e92a213c5d"],["/2020/12/20/beoplay/index.html","f9873329e3b403cc34a5371c78d074d1"],["/2020/12/20/订阅链接转换/index.html","afc9eee578ff78b6dcdcf19a399afcc7"],["/2020/12/21/chrome浏览器下载提速/index.html","02e8694dc3eadfde1afcd039c412c939"],["/2020/12/21/免费128线程并发下载xdown/index.html","0ec65cf38b9ea0ed680c704f65f58500"],["/2020/12/21/免费32线程下载软件ndm/index.html","aafbab04a39376f3169a477bc4698af6"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e5121503a19661236eafd7d20b8ac901"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","385ce2108898d33a1aa86f677bb6b2e8"],["/2020/12/21/广告怎么知道我在想什么/index.html","7bc9fd81d00c84342a264e76e645ad56"],["/2020/12/21/无名·引子（小说试写）/index.html","37c4322ab2c7d3130cb16646a12032ea"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","ad3d356e1883b7da5e53ac7dd3004fd1"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","07e5a2077e9b20192d0f1d5a6d451089"],["/2020/12/21/高速轻量下载器aria2/index.html","deae3f2af97269bb1826fbb4728e407a"],["/2020/12/22/2020-cee-roo/index.html","b1d875b1240f83854a5645586f642033"],["/2020/12/22/firefox插件、github、steam富强/index.html","19b65acca950d03d6f09aae342ad47f3"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","1b2dd81f9092d34a1cfe08d472211648"],["/2020/12/26/python-day-1/index.html","a504115bb6c86fa47727b2204f6713fc"],["/2020/12/26/python-day-2/index.html","bffac0d15260e9b3480f24653a3b1e27"],["/2020/12/26/度盘不限速下载方式一赏/index.html","de08980e540876570c7633ccaa78dbdf"],["/2020/12/26/添加开机自启软件/index.html","2d7d5f8e123b7ae123d63991ab82766f"],["/2020/12/26/电脑端截图方式一赏/index.html","ee7bbb0c308c407857b22088d78d06ea"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","705960f16a6d783467996094a8ef81b6"],["/2020/12/27/最安全的浏览器tor/index.html","a208865da92bb95da7d7a484afceba0e"],["/2020/12/27/网易云刷等级和听歌数量/index.html","92b96b2aeb602d3c0ec5469c23a201bd"],["/2020/12/28/freenom申请免费域名/index.html","a59a91df2148e91ee6e933825928cedc"],["/2020/12/31/机场/index.html","8db6797f1275429f97944eadf0cc5082"],["/2021/01/01/M1/index.html","d72e35736b9c5fc2589c78c4cf55f23e"],["/2021/01/01/compress/index.html","bb1533f3c39b00dde07cbe6f0b3b5d3c"],["/2021/01/01/infinityfree/index.html","e05a07a2c0058d5a5d01d61a70166511"],["/2021/01/01/硬核翻墙/index.html","2a7933ff0364626142ddfe7e330ef69c"],["/2021/01/02/qq/index.html","3a1f06d28607fb9144bc8f3b9a3f8839"],["/2021/01/03/netch/index.html","6b6cfcdc764df7cd83b6156be9c373fe"],["/2021/01/03/waifu2x/index.html","b4d981083ff5f3a475734e3a5fd2153d"],["/2021/01/04/ads/index.html","78d81d7be7163a63ef88fa49ad8eb7b4"],["/2021/01/04/games/index.html","b3eb7095142271e7bd183c709a1ea174"],["/2021/01/04/heroku/index.html","b8d1bc9ba92e9771696c9abee55af39a"],["/2021/01/06/movies/index.html","833d67ed65ef866a4d6b2eecf6a949f5"],["/2021/01/07/google2020/index.html","010307d25c0692d283b976061abce63d"],["/2021/01/07/lucky/index.html","b7ec3dd398c8935704c400db8207a7f3"],["/2021/01/07/spotify/index.html","d0df2d20988598f4a022dcc332659bd2"],["/2021/01/07/thunder/index.html","c13a18af9e59cf93edd7fb6450ba6ed6"],["/2021/01/08/adguardhome/index.html","75cd4c96a7d599d33958b6da7b990d42"],["/2021/01/10/IBM/index.html","995c22ac0422ab924c72fbff0266439a"],["/2021/01/10/potplayer/index.html","a30c24cffcdc265837eaba273e7d82f3"],["/2021/01/10/sakuraanime/index.html","87c5d7c7060790a0adb82ad177f4925b"],["/2021/01/10/美剧星球/index.html","d0396d52a1af625cb04b13dc710cd38e"],["/2021/01/12/telegraph/index.html","62daa3f4673518c5ef76551994d41e9f"],["/2021/01/14/comics/index.html","fcefea9e4a512e1939a1964453ade281"],["/2021/01/14/ftp/index.html","90c891c5f3eb6f4fa6a5637260b27ed8"],["/2021/01/14/oraclecloud/index.html","850f73d5b050a3f7cabba35c43766c40"],["/2021/01/14/porkbun/index.html","3daf70e341b867ce73d5c8798590c57e"],["/2021/01/14/powertoys/index.html","b2bee8bbabb7f7b293a6b6eb9eca8c0d"],["/2021/01/14/taptap/index.html","c36dbc686b96d2afce107840cb961487"],["/2021/01/14/ubuntuvsftp/index.html","a129b85c9fdea23f96795d2a604eba5f"],["/2021/01/14/小说/index.html","098a81f85579b4b1eb09945a591d1651"],["/2021/01/15/freeproxies/index.html","37f1cb610b8228ae57b07d13d009c225"],["/2021/01/15/incaseformat/index.html","5c5c1b14b2ca6598d234caf12ec6badf"],["/2021/01/16/euserv/index.html","0e959d179fc4532de8f06a3cf0a554ef"],["/2021/01/16/winxray/index.html","0fd530db04983861ef54efc2b5a9f885"],["/2021/01/18/qqreadhistory/index.html","d7138dbe3ebe1746fcd54996a597af5c"],["/2021/01/18/qqrevoke/index.html","568eb9001a9e7f4ecab2d95dd4899540"],["/2021/01/19/freevpn/index.html","5ef21954a399ca9cfac622e6f27f2d9e"],["/2021/01/20/browsertrack/index.html","9b31af86e5ca9693d72cdbd282d0b634"],["/2021/01/20/v2ui/index.html","c967c1cf91d2f3f260052733bb2e9911"],["/2021/01/21/failedtoconnect/index.html","7aca2422c4411b095f20d340bc2549d9"],["/2021/01/21/gitcalendar/index.html","b383bb72039aaa726be7070866c126df"],["/2021/01/21/markdownformat/index.html","faa4a7c5eb852f86ec4dd153c7be2a9a"],["/2021/01/21/markdowntable/index.html","c90c3a12c79489b051b1228d647c6c91"],["/2021/01/21/vercel/index.html","3a655b980c09db183354df4462aed9d6"],["/2021/01/22/hardware/index.html","b32b3344d1395398cd1b430c64db43c5"],["/2021/01/22/muviz/index.html","c0dc3a8f0afb3420a15ca4c34e380296"],["/2021/01/22/randomapi/index.html","d27c5bc0f5acb1ed898f54eee5f402e6"],["/2021/01/22/searchimages/index.html","b61b38e8c50550a581f2ffeb8cfcfaec"],["/2021/01/23/RX文件管理器/index.html","03fc72b9fdbb49f1bc2ab2321ee32076"],["/2021/01/23/chromeflag/index.html","f1aa1c313fe99d9b60ff09f5bae1af69"],["/2021/01/23/qttabbar/index.html","bfcbce75cb1f92e3393b681091f66571"],["/2021/01/24/githubspeedup/index.html","53140d1e1d9ff600ef22411712fb36da"],["/2021/01/24/jsdelivr/index.html","42094519852214ff182d5df777f54406"],["/2021/01/25/note/index.html","738a3c63f510b74a50c3e3e9b2dfc1a3"],["/2021/01/25/soul/index.html","bfcce0f3fc32d3fd1f88eb5bb2d8f2f3"],["/2021/01/26/herokuxray/index.html","a0e2e50d3357fa8f1b34e2da3aa8fceb"],["/2021/01/27/proxypool/index.html","bb7e885ab5f474743e69d840692c4c63"],["/2021/01/27/tracker/index.html","b7393bacc64ad4b8e0a897e52b8d53d3"],["/2021/01/30/pandownphp/index.html","10ef35ae68b5c011c26cef20d4640bef"],["/2021/01/31/newgroup/index.html","4747cc80670fe6e00dbc20825673d194"],["/2021/02/01/clashlanguage/index.html","74dbab77e24281d00184dbff522e7706"],["/2021/02/01/encrypt/index.html","a23da73bf36612e01cf714940f2e2de1"],["/2021/02/01/footermotion/index.html","8a579c776d725253e0847923fce25712"],["/2021/02/01/gitter/index.html","a4362df0c6f817f8a121f2b3811a944f"],["/2021/02/01/pixivtop50/index.html","4b24a96e9674dcafe251e3542652b015"],["/2021/02/01/scrollbar/index.html","8ec0ffca156788eef496f07ceabb7df6"],["/2021/02/02/clover/index.html","8ad1aeab7042c96da045aed1a33a092c"],["/2021/02/02/maya/index.html","1cf29060dea1eb81d5e9641078d88f0d"],["/2021/02/02/speedcontroller/index.html","60e35df11584f346853590f76c000dff"],["/2021/02/02/yesmusicplayer/index.html","76e6f8a012f2bfd117555bdf47b52128"],["/2021/02/03/lenovoonelite/index.html","4f318fa752e1b71a4a144dff883f86ea"],["/2021/02/03/skipads/index.html","279a4d01680820169e38e710e87c1042"],["/2021/02/04/picseed/index.html","29101cea7074dd5436e57655e6da7f1c"],["/2021/02/04/renren/index.html","25553f3731f13a712e9c6078c217549f"],["/2021/02/04/serverstress/index.html","6bbe5c599e5d0c05147d94519a2cc0ae"],["/2021/02/04/wikipediazh/index.html","10ed8272317c472eeda74a3e9e91be41"],["/2021/02/05/googlevoice/index.html","66cc486d3a5f313ea8706ab0d08c0536"],["/2021/02/06/clashconnection/index.html","61f7fded79fc9580320e07d31dcb5556"],["/2021/02/06/gvtransfer/index.html","a26e39cfb4c5bc5fa78e65b883838dd2"],["/2021/02/06/todesk/index.html","6a816cb3ceebd11d8657001c7967b826"],["/2021/02/06/vpnblacklist/index.html","e13be5f18681216c1f924c4d9e0109ca"],["/2021/02/07/mklink/index.html","e6f73ef37f5377dd3bb2bfdc64e3c780"],["/2021/02/07/speedtest/index.html","85a2dc6bc6841df8e05c62f2cc52b7fb"],["/2021/02/07/translate/index.html","04a86a3b02322092a8163a1c7033dddf"],["/2021/02/08/ewomail/index.html","6d4db31ee3148675d76dd04bd1109a3e"],["/2021/02/10/officee5/index.html","1937e411566a3ccec11a64bd9884caec"],["/2021/02/10/raidrive/index.html","dccfebc3f8c2287a8d7962d5927b74c8"],["/2021/02/13/e5sub/index.html","ebfa1c55d2f47e0d98b4b3e9e0c83cb3"],["/2021/02/14/screen/index.html","622e418226b8bb05f3800c97c5152e2e"],["/2021/02/15/clashtun/index.html","f947f4f56b9ee90a1210900d5b0690ac"],["/2021/02/15/messageboom/index.html","3f414a16c3fa46c876b703600baf96e2"],["/2021/02/15/oneindex/index.html","0daccdde4d6f34cf23c51bf6474cd634"],["/2021/02/16/govsites/index.html","1d3debeac529c5be21ed89cb9d1a1357"],["/2021/02/17/hexototypecho/index.html","8d7eb9c9407c43c40f66224fae00f62e"],["/2021/02/19/fiddler/index.html","a88308288df61ba0bdbacfa7db91e18a"],["/2021/02/22/potplayerset/index.html","2b071017f84a455a7c1d187260b10dc7"],["/2021/02/22/studyresource/index.html","d1d618a0ceef75eae4b7186ff954639b"],["/2021/02/22/telegram/index.html","f7eafa315ffa424a08c10d3bfa87784a"],["/2021/02/22/videos/index.html","1ee21c78486547a2de0d311744c2263a"],["/2021/02/24/mtproxy/index.html","7e836efd6df3e98229cfe9ac665fe1e5"],["/2021/03/10/catchcat/index.html","5b17e03b24e5fb1160b8a92c6d1f5138"],["/2021/03/10/neteasemusic/index.html","42a735e59eefd890bc40f0fe2e8822a3"],["/2021/03/10/surfboard/index.html","c2df692bb5d124c5d480711d783d7c53"],["/2021/03/11/vpnandjc/index.html","c0fb7c8b88d9646abc0928b95e4f3a24"],["/2021/03/12/qrcodes/index.html","091df77e1321ebedba8826122d02d71e"],["/404.html","b17915cbbf1c046fdaf40cd8e1fb3953"],["/archives/2020/11/index.html","e9fa1b13dd3596af1086fe9d3f0b4be3"],["/archives/2020/12/index.html","1c39aa8a95c2b949af95a9c98f31952e"],["/archives/2020/12/page/2/index.html","4f615e103738eba6d6bf365d2794ebf3"],["/archives/2020/12/page/3/index.html","a8dca699beda3ff064d2efa7f8869ced"],["/archives/2020/index.html","eb0d17592ecb9e9c310c942b895e02a8"],["/archives/2020/page/2/index.html","82527e64aa512a64b259ec1ce411cb31"],["/archives/2020/page/3/index.html","149be81310d2bb2e6d2df014276905cb"],["/archives/2021/01/index.html","d875c2c1453645279fe78b4fb99a6510"],["/archives/2021/01/page/2/index.html","301e782a4f7912b583aad8b39032e91b"],["/archives/2021/01/page/3/index.html","7d4e80cb8e42a3d82cc7eb995e3c3257"],["/archives/2021/01/page/4/index.html","e704e74e0e3f92df704dfb25cd01d011"],["/archives/2021/02/index.html","0adb09191fee7cf010d489485bbadd7d"],["/archives/2021/02/page/2/index.html","3e6c7763f8f9ba4440225802b873b929"],["/archives/2021/02/page/3/index.html","536bcf832d0d601178a76b6e3da3918c"],["/archives/2021/03/index.html","9818ba03c88031cfce895c1f25aae4d3"],["/archives/2021/index.html","a3ee436f854944ce31a9046c07cc02d1"],["/archives/2021/page/2/index.html","2f5bca8bc1355fea0f5ccdb2a98c1c0c"],["/archives/2021/page/3/index.html","b10b96306cc832aa8748cbbc9b43df87"],["/archives/2021/page/4/index.html","a5d78769ecb8e123c15c8dd485f2a49f"],["/archives/2021/page/5/index.html","29667b689318cb7eda5bc8ac0305780e"],["/archives/2021/page/6/index.html","42e0a4818b2baa5c548dc2584db2f889"],["/archives/2021/page/7/index.html","a0040c5d7922176b1f2d1b4e4dd28763"],["/archives/index.html","4eff6b568b9819f12f284f0cad0b8df0"],["/archives/page/10/index.html","7ea56740340c9cc087a32fda2a8305f0"],["/archives/page/2/index.html","14b68998838a5a100f9c106f90247db9"],["/archives/page/3/index.html","2d977a66b253ee10f86149a7be2aab9d"],["/archives/page/4/index.html","4a4c1955ea881ffe108dfd9d7e5e8774"],["/archives/page/5/index.html","70afa050d9d2997c6f9f4df6f9d75d6f"],["/archives/page/6/index.html","520dadf89086d674805207d2b97d9946"],["/archives/page/7/index.html","cecc5d8713457fd555ebb044b77d168b"],["/archives/page/8/index.html","74133e904988f49e14028a3200cd86ef"],["/archives/page/9/index.html","615f71236e25d98559e03c1005c22d42"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPN/index.html","d290ea3aae5b8f89e385ab84ba48af61"],["/categories/VPS/index.html","5bb14b27c0f14b0d195ff0f24a9bd757"],["/categories/index.html","c1e2b2fc66e458fb000a5cabb3be98d9"],["/categories/下载/index.html","044bd15925895215f6b23222e6812cc4"],["/categories/安全/index.html","f7e8f0e890d87f658c36aa10df3ed659"],["/categories/建站/index.html","454cc3ad16a74a00676e612e1a22c9f2"],["/categories/杂/index.html","910c5de0e9df444d21516d236c106202"],["/categories/杂/page/2/index.html","d0cc5292f99347ebdcca80bd77c6200e"],["/categories/测评/index.html","ae6eec3144ec3a3b16bc7254038179ab"],["/categories/科学上网/index.html","2d075b4d59efc97205fa5c15eea08456"],["/categories/科学上网/page/2/index.html","1d613fbad7d1be8a30a79d05f2e179a8"],["/categories/编程/index.html","dca04a1d825ae4048de10c52a46e9b3b"],["/categories/网站/index.html","d6aea91f9515d2e5fa4a67ea3202545d"],["/categories/网站/page/2/index.html","9469542cd9894bbe990f7fa09a51325b"],["/categories/软件/index.html","2782b77e47a2abb0106b0153eee6a982"],["/categories/软件/page/2/index.html","582f295f9029b783700a96f4be2ee4f1"],["/categories/软件/page/3/index.html","33ee95c6956d5977d829a1eff1de0035"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","8d5fa544c6fed3647c0b2801820938f2"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","d3148b9de082b42278515c0708a8e12a"],["/ios/index.html","1b7fa5ff81a2e3a40bdf6d5cd5561abe"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","3e6a31b710cfaf3d833eb45549169632"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","78c07ed396210395f4c26950263d1cf1"],["/page/2/index.html","6a3699edd543a91c03749939d465938c"],["/page/3/index.html","3fab785641ebf9495ffef4d92f07f321"],["/page/4/index.html","720224e96a91725b0802b2fa8d4d0289"],["/page/5/index.html","d52f9a3a8a77e9356270eb0969313294"],["/page/6/index.html","9ff40edaaa51c17f209e3fdc05919332"],["/page/7/index.html","ebfcd96f16cc99941cb9b5e9000ae3b1"],["/page/8/index.html","746ec5c203fbd2d1598dbda30230d0fe"],["/page/9/index.html","f808a6db379665e18004b66d15d9b00d"],["/payment/index.html","698d56a92add9a89bce8f624504a231a"],["/privacy-policy/index.html","21ecbe0fd849b9abc63452ba6b5ff2be"],["/rss2.xml","640531a4dfbca1e149c498b78aa391d3"],["/search.xml","48d6049ee04a99c3110779e54fd19552"],["/sitemap.xml","b62dbe046acff9ed69684a30327393ed"],["/sw-register.js","1cc1bd53b10c1367f4a9d4a0ef49a8c1"],["/tags/5t/index.html","f1191573ff49898b6809852377b8b3e0"],["/tags/Clash/index.html","c12940d7d34163fad22927841b330818"],["/tags/Clover/index.html","71938d6720b6a1aea100fab676fb227d"],["/tags/E5/index.html","cce1e662d59a32fd2ec808f46ae47f07"],["/tags/FTP/index.html","bb987b182f01e51389c461e8e37aa05f"],["/tags/GitHub/index.html","19205afba135cbd7f767215feb0c58c3"],["/tags/Heroku/index.html","aad9aa69e6bdc05b5147089ae9cb2bd5"],["/tags/Hexo/index.html","27a1d24e31299552cc04d30682d1bc9d"],["/tags/Lenovo/index.html","0afee784013aaa5012592330101dc27b"],["/tags/Oneindex/index.html","28b46de792355926a553dda3fde6d635"],["/tags/QQ/index.html","4866f6bc3c4949e9fadf4e2c742598bb"],["/tags/QTTabbar/index.html","4540f98b0d90ddf03f8ec9dbb14b79aa"],["/tags/RX文件管理器/index.html","24676c05fdb501eb9493834ce30ed9a0"],["/tags/Todesk/index.html","7cc1f94ef6a43d82cb43fff9741e1cac"],["/tags/Vercel/index.html","4da155404ce2ff8defc463235f1f7a90"],["/tags/ads/index.html","f90893101d8d21e82f0cee71c599fa17"],["/tags/api/index.html","ae7152de99e212e2ebd25adef8cc005b"],["/tags/app/index.html","0de140b427fcdc9dac11354c501602e1"],["/tags/blacklist/index.html","352a530fe2b8eaa40313eb531adc4b0e"],["/tags/butterfly/index.html","cf466b4e06c6680ac17c8f27c4d55607"],["/tags/chrome/index.html","0e959651a4f8bd9d398f20445d3009e7"],["/tags/cloudflare/index.html","0d1cda78ed448888ef3899ff52465f97"],["/tags/cmd/index.html","d92b68d63d7394f6c2e15de37ef4a486"],["/tags/c盘/index.html","f84957293906932d411bc9770471a9c7"],["/tags/email/index.html","ed0cbc3d80c0cd09516e126e0a139d4a"],["/tags/ewomail/index.html","31d59166d8406f2487c96dc5393697bf"],["/tags/fiddler/index.html","b0db4af3e271cd6643c584d677d60a2c"],["/tags/flags/index.html","b3f290cfab2f8fdd51a9b2a29ba4ebba"],["/tags/footer，页脚/index.html","61569c1a57ca69acd66fa2de9cd1a398"],["/tags/galgame/index.html","637fc3b9aa27f1e9faab575961e79568"],["/tags/git/index.html","a4daf76f2387465159f33b86177447e3"],["/tags/gitcalendar/index.html","3233dd9ec5ccf2ccdceccffc1d1c9f19"],["/tags/google-voice/index.html","2724efad1f104f189a6db2d82d7401b7"],["/tags/gv/index.html","8290ff41a70a58354aa28c75f50cfa4c"],["/tags/html/index.html","a0b1671da56fe604ba8ba36f3307217d"],["/tags/index-1.html","6551e2d69f549e80219b1c4220ffeb90"],["/tags/index.html","a392352160390835a618aecb18a606d7"],["/tags/js/index.html","746b21d4ed4ccded3f3a214fef7ff3e4"],["/tags/jsdelivr/index.html","45009a2cd170356efc9dd025c2b9e467"],["/tags/linux/index.html","922256ff8207b33fd2bdadd1fcb402d5"],["/tags/madVR/index.html","ce9992cdc2670900b39a700fba887f82"],["/tags/markdown/index.html","90a79543ea45ec515f95626e100fdaf2"],["/tags/maya/index.html","9c8a633ac05f43a5ffb7de99738b0c82"],["/tags/mklink/index.html","7ed2514fc437e3372cf8a54c91b8b68d"],["/tags/office-e5/index.html","a3066eecb16c97ec3c14f8b091d66b71"],["/tags/onedrive/index.html","0bb6abdd0ad3f611ef9e584bb4a8dac9"],["/tags/picGO/index.html","94e98c90a6e5f18b66ee6d3913d28483"],["/tags/pixiv/index.html","3e292ded900c3930f631e4f4b5a9c1b2"],["/tags/potplayer/index.html","d7dc9ec42562ec00eedaccd037807adc"],["/tags/proxypool/index.html","86edd7172f51f17d23b3055167529c4a"],["/tags/qbitorrent/index.html","32b70256f16a4cba8e42a04ef799c727"],["/tags/raidrive/index.html","30fc9335c63a25c6a97fc688a5e88c17"],["/tags/screen/index.html","eaba5ebd7d95dcde7358300497d8fad1"],["/tags/speedtest/index.html","d6fd8e641bd11ba435180a14406c9729"],["/tags/ss/index.html","3ca37b2fcb3cd831eb060698f7ee22eb"],["/tags/ssr/index.html","b551227e54fccf6e04ef1cb0af4f91cb"],["/tags/surfboard/index.html","7c2bb8ad2dc21e40bdd9cede42131895"],["/tags/tap/index.html","b60d1e3232a5c323c09e26ab8b389857"],["/tags/telegram/index.html","52f5e3ed34c726271a80001d49d3874b"],["/tags/telegram代理/index.html","bcdce7eb4536a51402193927c080c21c"],["/tags/tg/index.html","d9a15fdea0313172ef5e6d9f35a018c8"],["/tags/tg代理/index.html","bb0ebf6edaf8cc8265250a7dd81eef88"],["/tags/top50/index.html","00adbcf03abec6c54cb0b3d59a1d28bb"],["/tags/tracker/index.html","a024529b2c1c7f301afb9cbdbbdc1b4d"],["/tags/translate/index.html","17517af958fe73dca1fc29fe0689865a"],["/tags/translater/index.html","5a020cf17516ecc904f51e58db6ce0f4"],["/tags/tun/index.html","78e416d521ce95321ac11ac9e6358a20"],["/tags/typecho/index.html","36aff4c46f9a7548cc4131b2d30f609c"],["/tags/v2ray/index.html","69fdd562d019bc272dd3f08ae797a67a"],["/tags/vpn/index.html","3d1f1ca05c034299feee3461fb6c9efa"],["/tags/vps/index.html","0a0e5f3b9256fa346051a7d4d9b514c5"],["/tags/windows/index.html","fec7c27dc1adeee91f08ed217509a01c"],["/tags/windows端/index.html","57bad93cfb6657fbb06c001c45f95dbb"],["/tags/xray/index.html","72d989d2a83b5ddacf1d72a3517d3f4b"],["/tags/下载/index.html","285c0d036550afa722733be33ab72868"],["/tags/不限速/index.html","97a67b52de31f64722a59e938198d9e4"],["/tags/个人网盘/index.html","8af80d2efa692479a10cd5a72ab096f7"],["/tags/主题/index.html","f7d62321671cad89ac46c6f237f51b8f"],["/tags/云便签/index.html","9e7020d742d32b46e2b3851fc13492fa"],["/tags/云盘/index.html","35239d40d458ed982f55baef638db308"],["/tags/人人/index.html","7c695ae96b8aa160c38bd8b56137d4f6"],["/tags/代理/index.html","8e016e164659b0df6e45dd53a549807d"],["/tags/代码/index.html","2d926d33fb1989f690c90c645421ff81"],["/tags/优选IP/index.html","8999ceddba0c331d3b093ffe950e62d0"],["/tags/便签/index.html","58381c0c008a0a147137eef9a12787dc"],["/tags/保号/index.html","21e60272989d9a7a6cb980ef08a13dec"],["/tags/免费/index.html","18db9ca107823f80d1c8d92613dbe5ff"],["/tags/免费节点/index.html","4809773cbddf7d06ebc7505eb78bb110"],["/tags/加密/index.html","b76e0b9c07313e782cce9f455aab4ef3"],["/tags/动画/index.html","91621b6376fbd16e73bc71a8b95344ff"],["/tags/博客/index.html","3e681fd6cdeb42cf76bb2dc1aacf0e4f"],["/tags/历史记录/index.html","5d5b5b6477e947afa4dd0a3e95ba51c4"],["/tags/压力/index.html","b47937fb90d46c9106fb5372827dfb68"],["/tags/压缩包/index.html","a400cfb439a60963ae36a96b5f6885a2"],["/tags/反代/index.html","ef501c5db0cbc6f506c9ca80be72e15c"],["/tags/可视化/index.html","057f434ff46d1a8d33673a4c555d2466"],["/tags/命令/index.html","a0ce3191a69a27a897f91059aef73a39"],["/tags/国家/index.html","a5c10ca195615966fd6d03f618922e86"],["/tags/图床/index.html","35a63bacebe2a400f20ffb30de181ffd"],["/tags/图片/index.html","8c7afec8d6aab51280ed6fdbcebe2fe3"],["/tags/域名/index.html","dc231891caa3da78d0c163863fe87f63"],["/tags/多标签/index.html","75899b57bd6b10de7bd0e8864f42f89f"],["/tags/存储/index.html","11682480b160b81bfb91712c0aaeda80"],["/tags/学习/index.html","21ae8e670d2a705f8ed7fd20666fb5e7"],["/tags/安全/index.html","1600178aabeb8562cadd78878c9e859b"],["/tags/安卓/index.html","083e29be3fb40d25d90246b8f2653529"],["/tags/宝塔/index.html","72cd7c18e99067f5262a37dd3c00b7a7"],["/tags/小游戏/index.html","76bf1240bc4a3f4e9b47ec6cd444aae6"],["/tags/广告/index.html","77df868f2c26928bf52b4be48d92e994"],["/tags/建站/index.html","d043d69f9c2b1ce45968d0ccf4405a47"],["/tags/影视/index.html","59c0995d3c1a9410957790df26873083"],["/tags/快速启动/index.html","0087c738ea163b19aadc9388971ca3b6"],["/tags/手机/index.html","3cd03a8a65cd4579ad23855b0b6104bb"],["/tags/托管/index.html","8fdeb4cd19513bd928ac972bf1770c7c"],["/tags/抓包/index.html","297576084dece661df78f0b5a2d36cea"],["/tags/抓取/index.html","495b4b678529e9278bc18087a0b80a84"],["/tags/投屏/index.html","af2c1850397c91634d459a944c52d665"],["/tags/拓展功能/index.html","bfb4e68e2877295a6aa698ecc82ce933"],["/tags/挂载/index.html","905e2006ef47d06d6f427e9bb1d1dd5b"],["/tags/指纹/index.html","0662836c3d3bd60257d20d48687b954f"],["/tags/接口/index.html","5ba4d0459aaa7af86bfad64a7e590ead"],["/tags/提取图片/index.html","521042e754a5352b015aaf999b84ac82"],["/tags/插件/index.html","2e0c1c0014c5aecb40c31d88d418e60c"],["/tags/搜图/index.html","9bbdfe9b80d1ac8f02efe6fe5563326a"],["/tags/搭建/index.html","7d95ef7ab0f7dd0c8b6abc7c07d7a77e"],["/tags/撤回/index.html","4ae568c868b2f0c35290215d37a69658"],["/tags/播放器/index.html","e3a76954ba7fcffb546bb8766e982b9a"],["/tags/政府网站/index.html","503fb87a599444ab1045880c6ad011ee"],["/tags/效率/index.html","c96fc949e43ea691f81d78e624c68f0d"],["/tags/日历/index.html","7bacd23e873b49f4a6406f474bb22c1b"],["/tags/服务器/index.html","fa0ef1e59613e98f5edd1ad741e8c6b2"],["/tags/机场/index.html","0fdf560e250729b5301aa49cac541542"],["/tags/桌面/index.html","2bd6313b8dffdddf4a6c4c8d20e4b421"],["/tags/梯子/index.html","d8a163b7fbdda5b501707de9ef1cc7c5"],["/tags/检测工具/index.html","13ceaebe2afde14edcf6cb3ee3256604"],["/tags/汉化/index.html","d587bb663230f4ffb865895cd689f383"],["/tags/测压/index.html","4634017cb20dc9623cdbb661f641d3f8"],["/tags/测速/index.html","987e39b3ef52e4903ecdf847c3d6d919"],["/tags/浏览器/index.html","517d600aa165826670e5bdb47d50f735"],["/tags/清理/index.html","54073f3c6e2f561d09fb2851958c187c"],["/tags/滚动条/index.html","aafe9335a60ad514f5ac5e8b8d0dd48a"],["/tags/灰色歌曲/index.html","82b8368a5fe50f1d5f0eaf363c61faa6"],["/tags/电影/index.html","db4260e7dfe2cb9d0547aa8be8e18991"],["/tags/电视剧/index.html","d01cfe483f4bb874795dee38b51bef9b"],["/tags/白嫖/index.html","103a440628f29d33101f9771b5c56c4e"],["/tags/百度/index.html","8f1d8bc7f1e325fb833d29e0fd995d43"],["/tags/百度云盘/index.html","d84278741ccba9cd1f9deb5690080149"],["/tags/百科/index.html","78eeac176611f0fc1cd3d58c92be7619"],["/tags/短信/index.html","c5284cc0b8da9b6821f5f307bbe3f1e3"],["/tags/硬件/index.html","a038437430c5cb6078dd2384ffa1fcd9"],["/tags/科学上网/index.html","f1788a90fc22e3057f73d1fea3faa81b"],["/tags/空间/index.html","8be6ef0354a3c0e25291bfe0ba921476"],["/tags/笔记/index.html","51eccb61dcc02bf51abbfd72c8f7cb6f"],["/tags/简洁/index.html","e91cbc861ecc9b41ffb4de72e44ed6a9"],["/tags/简约/index.html","94edd8cbe4916383c576bfe8a15c0460"],["/tags/维基/index.html","85c1b043a946115b9b36386169874b96"],["/tags/网易云/index.html","b9575fa4b09b06c627d9ed013354632d"],["/tags/网盘/index.html","d92e3b2c28bd3978eac8798479158fb4"],["/tags/网站/index.html","75eb4c9edc6d960899127bde2609411a"],["/tags/网络/index.html","69e91fc806678586a77b9c2f56a54756"],["/tags/美化/index.html","7f40bc1641c982d0760e81617447a396"],["/tags/翻墙/index.html","ce3ea8f6dc42d1ecb8ff96a446f6e271"],["/tags/翻译/index.html","d718f7002940e55e4663877937a4b9c0"],["/tags/翻译器/index.html","5d0633e83faa39da64e7906864c394d3"],["/tags/聊天/index.html","4a88412b1c30a4683d069f4fac86f9f7"],["/tags/聊天室/index.html","1c8a9a0f7a69b5f9760a37cd08f7e368"],["/tags/联想/index.html","b62309e94b543a55701e28ef79eee67a"],["/tags/节点/index.html","6bd35d25ba1ba9b912bc953e50a8a667"],["/tags/虚拟手机号/index.html","fd388b5cb1c4d83f81948efa6772afa2"],["/tags/补丁/index.html","bde8be7e76e81d17fe9b3df3a5f25ae2"],["/tags/视频/index.html","120c22e7789d172aa04c710bb16c7652"],["/tags/解析/index.html","a5405e9d625dcd74d114523ab3e13bad"],["/tags/订阅链接/index.html","3717b24df25a2febc805526201e365dd"],["/tags/记录/index.html","31968449cdf218322cf7660b5ecce8c0"],["/tags/识图/index.html","62004494d6878b02ee670e8e44316016"],["/tags/语言/index.html","05597271d66ebb2f357d4b78cb3bf2d9"],["/tags/资源/index.html","298020f66ebc96fc067a80df7b35f934"],["/tags/资源管理器/index.html","3c400684a4ab62af74e2174437190507"],["/tags/转移/index.html","e8d3eaa98394c290bb7d713185e03d16"],["/tags/软件/index.html","f71c2db512a3a05a3354f1fc67dd21c5"],["/tags/轰炸/index.html","86818cd49cbf9b34c1f6f193082815e9"],["/tags/迁移/index.html","ef0806d9c560ea001ccc8ad540974658"],["/tags/远程控制/index.html","e015caa7d63337d550a0a17927179645"],["/tags/连接/index.html","0e12deb549d499e3cbdaa8bf6d78fafc"],["/tags/追踪/index.html","d8ea50dff3a16578bdf5ec337bc8d5f9"],["/tags/速度/index.html","e621ea80f6e9d952c56b62c27c929e9f"],["/tags/邮箱/index.html","5a271de98be0b4ff4118a381e7527c87"],["/tags/酷炫/index.html","18ea48f96a4c1438e88d60df0dde7cf2"],["/tags/钓鱼/index.html","d71c64f61117fd3ffcbe3387befe8f24"],["/tags/镜像/index.html","62fc408aac994aacd96de2da16f1d6cc"],["/tags/随机/index.html","faaf6902e044159d1de8552e3c18e9bf"],["/tags/隐藏/index.html","e7580b6e5ec613b0d3d46c20ddca48ac"],["/tags/面板/index.html","03496ae861377a46aaa69e6c28029104"],["/tags/音乐/index.html","76f7206ba14a35d0d2303c5a2ac2363d"],["/tags/高颜值/index.html","96c074a130aa73c111f67ab8e383eef2"],["/tags/魔改/index.html","e31d180f574de71aaa87301cf7364aed"],["/tags/黑名单/index.html","d2ffed6ca4dd3ec3052ccfa9a04ac6fb"],["/urls/index.html","0fc14f7654fdaf349e696ec1af95e806"],["/vps/index.html","1e63c717bcea77247ca59cbb078e4308"],["/支持/index.html","e67615c462e8e8d06fea7b4f6c309c39"]];
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
