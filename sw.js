/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","33caebeb043d01cf161aba4cdd24d5e6"],["/2020/11/29/clash-windows/index.html","9aff28f3897c0dcf2299d3066cdc1b74"],["/2020/11/30/websites2/index.html","9a440b5950a4d9dec4020172de28c734"],["/2020/12/04/iphone4s/index.html","6c810b6e0601e5f3029ddd0076438f9f"],["/2020/12/04/onenote/index.html","16e6388061925db1305f33d253afcaa5"],["/2020/12/04/wesites1/index.html","3f61bad8bc7c8291a013304a98e381d8"],["/2020/12/06/nokia808/index.html","cf2b00d07435d926df96c61423c0f977"],["/2020/12/07/ipad1/index.html","1de1110a964f29dee545035245b8cb0e"],["/2020/12/18/freesubscribes/index.html","3d0feb14b51d6a926820e7138164595f"],["/2020/12/19/musics/index.html","51922dd7c9f4704bd8e9a358c6f86e4e"],["/2020/12/19/shadowrocket/index.html","2576ba43d3c178c59f6075cb61c8a76d"],["/2020/12/19/v2ray-windows/index.html","0c329092171766569e8373d192083760"],["/2020/12/19/v2rayng/index.html","0c93b0f3a366f009544d04e92a213c5d"],["/2020/12/20/beoplay/index.html","f9873329e3b403cc34a5371c78d074d1"],["/2020/12/20/订阅链接转换/index.html","afc9eee578ff78b6dcdcf19a399afcc7"],["/2020/12/21/chrome浏览器下载提速/index.html","02e8694dc3eadfde1afcd039c412c939"],["/2020/12/21/免费128线程并发下载xdown/index.html","0ec65cf38b9ea0ed680c704f65f58500"],["/2020/12/21/免费32线程下载软件ndm/index.html","aafbab04a39376f3169a477bc4698af6"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e5121503a19661236eafd7d20b8ac901"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","385ce2108898d33a1aa86f677bb6b2e8"],["/2020/12/21/广告怎么知道我在想什么/index.html","7bc9fd81d00c84342a264e76e645ad56"],["/2020/12/21/无名·引子（小说试写）/index.html","37c4322ab2c7d3130cb16646a12032ea"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","ad3d356e1883b7da5e53ac7dd3004fd1"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","07e5a2077e9b20192d0f1d5a6d451089"],["/2020/12/21/高速轻量下载器aria2/index.html","deae3f2af97269bb1826fbb4728e407a"],["/2020/12/22/2020-cee-roo/index.html","b1d875b1240f83854a5645586f642033"],["/2020/12/22/firefox插件、github、steam富强/index.html","19b65acca950d03d6f09aae342ad47f3"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","1b2dd81f9092d34a1cfe08d472211648"],["/2020/12/26/python-day-1/index.html","a504115bb6c86fa47727b2204f6713fc"],["/2020/12/26/python-day-2/index.html","bffac0d15260e9b3480f24653a3b1e27"],["/2020/12/26/度盘不限速下载方式一赏/index.html","de08980e540876570c7633ccaa78dbdf"],["/2020/12/26/添加开机自启软件/index.html","2d7d5f8e123b7ae123d63991ab82766f"],["/2020/12/26/电脑端截图方式一赏/index.html","ee7bbb0c308c407857b22088d78d06ea"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","705960f16a6d783467996094a8ef81b6"],["/2020/12/27/最安全的浏览器tor/index.html","a208865da92bb95da7d7a484afceba0e"],["/2020/12/27/网易云刷等级和听歌数量/index.html","92b96b2aeb602d3c0ec5469c23a201bd"],["/2020/12/28/freenom申请免费域名/index.html","a59a91df2148e91ee6e933825928cedc"],["/2020/12/31/机场/index.html","8db6797f1275429f97944eadf0cc5082"],["/2021/01/01/M1/index.html","d72e35736b9c5fc2589c78c4cf55f23e"],["/2021/01/01/compress/index.html","bb1533f3c39b00dde07cbe6f0b3b5d3c"],["/2021/01/01/infinityfree/index.html","e05a07a2c0058d5a5d01d61a70166511"],["/2021/01/01/硬核翻墙/index.html","2a7933ff0364626142ddfe7e330ef69c"],["/2021/01/02/qq/index.html","3a1f06d28607fb9144bc8f3b9a3f8839"],["/2021/01/03/netch/index.html","6b6cfcdc764df7cd83b6156be9c373fe"],["/2021/01/03/waifu2x/index.html","b4d981083ff5f3a475734e3a5fd2153d"],["/2021/01/04/ads/index.html","78d81d7be7163a63ef88fa49ad8eb7b4"],["/2021/01/04/games/index.html","b3eb7095142271e7bd183c709a1ea174"],["/2021/01/04/heroku/index.html","b8d1bc9ba92e9771696c9abee55af39a"],["/2021/01/06/movies/index.html","833d67ed65ef866a4d6b2eecf6a949f5"],["/2021/01/07/google2020/index.html","010307d25c0692d283b976061abce63d"],["/2021/01/07/lucky/index.html","b7ec3dd398c8935704c400db8207a7f3"],["/2021/01/07/spotify/index.html","d0df2d20988598f4a022dcc332659bd2"],["/2021/01/07/thunder/index.html","c13a18af9e59cf93edd7fb6450ba6ed6"],["/2021/01/08/adguardhome/index.html","75cd4c96a7d599d33958b6da7b990d42"],["/2021/01/10/IBM/index.html","995c22ac0422ab924c72fbff0266439a"],["/2021/01/10/potplayer/index.html","a30c24cffcdc265837eaba273e7d82f3"],["/2021/01/10/sakuraanime/index.html","87c5d7c7060790a0adb82ad177f4925b"],["/2021/01/10/美剧星球/index.html","d0396d52a1af625cb04b13dc710cd38e"],["/2021/01/12/telegraph/index.html","62daa3f4673518c5ef76551994d41e9f"],["/2021/01/14/comics/index.html","fcefea9e4a512e1939a1964453ade281"],["/2021/01/14/ftp/index.html","90c891c5f3eb6f4fa6a5637260b27ed8"],["/2021/01/14/oraclecloud/index.html","850f73d5b050a3f7cabba35c43766c40"],["/2021/01/14/porkbun/index.html","3daf70e341b867ce73d5c8798590c57e"],["/2021/01/14/powertoys/index.html","b2bee8bbabb7f7b293a6b6eb9eca8c0d"],["/2021/01/14/taptap/index.html","c36dbc686b96d2afce107840cb961487"],["/2021/01/14/ubuntuvsftp/index.html","a129b85c9fdea23f96795d2a604eba5f"],["/2021/01/14/小说/index.html","098a81f85579b4b1eb09945a591d1651"],["/2021/01/15/freeproxies/index.html","37f1cb610b8228ae57b07d13d009c225"],["/2021/01/15/incaseformat/index.html","5c5c1b14b2ca6598d234caf12ec6badf"],["/2021/01/16/euserv/index.html","0e959d179fc4532de8f06a3cf0a554ef"],["/2021/01/16/winxray/index.html","0fd530db04983861ef54efc2b5a9f885"],["/2021/01/18/qqreadhistory/index.html","d7138dbe3ebe1746fcd54996a597af5c"],["/2021/01/18/qqrevoke/index.html","568eb9001a9e7f4ecab2d95dd4899540"],["/2021/01/19/freevpn/index.html","5ef21954a399ca9cfac622e6f27f2d9e"],["/2021/01/20/browsertrack/index.html","9b31af86e5ca9693d72cdbd282d0b634"],["/2021/01/20/v2ui/index.html","c967c1cf91d2f3f260052733bb2e9911"],["/2021/01/21/failedtoconnect/index.html","7aca2422c4411b095f20d340bc2549d9"],["/2021/01/21/gitcalendar/index.html","b383bb72039aaa726be7070866c126df"],["/2021/01/21/markdownformat/index.html","faa4a7c5eb852f86ec4dd153c7be2a9a"],["/2021/01/21/markdowntable/index.html","c90c3a12c79489b051b1228d647c6c91"],["/2021/01/21/vercel/index.html","3a655b980c09db183354df4462aed9d6"],["/2021/01/22/hardware/index.html","b32b3344d1395398cd1b430c64db43c5"],["/2021/01/22/muviz/index.html","c0dc3a8f0afb3420a15ca4c34e380296"],["/2021/01/22/randomapi/index.html","d27c5bc0f5acb1ed898f54eee5f402e6"],["/2021/01/22/searchimages/index.html","b61b38e8c50550a581f2ffeb8cfcfaec"],["/2021/01/23/RX文件管理器/index.html","03fc72b9fdbb49f1bc2ab2321ee32076"],["/2021/01/23/chromeflag/index.html","f1aa1c313fe99d9b60ff09f5bae1af69"],["/2021/01/23/qttabbar/index.html","bfcbce75cb1f92e3393b681091f66571"],["/2021/01/24/githubspeedup/index.html","53140d1e1d9ff600ef22411712fb36da"],["/2021/01/24/jsdelivr/index.html","42094519852214ff182d5df777f54406"],["/2021/01/25/note/index.html","738a3c63f510b74a50c3e3e9b2dfc1a3"],["/2021/01/25/soul/index.html","bfcce0f3fc32d3fd1f88eb5bb2d8f2f3"],["/2021/01/26/herokuxray/index.html","a0e2e50d3357fa8f1b34e2da3aa8fceb"],["/2021/01/27/proxypool/index.html","bb7e885ab5f474743e69d840692c4c63"],["/2021/01/27/tracker/index.html","b7393bacc64ad4b8e0a897e52b8d53d3"],["/2021/01/30/pandownphp/index.html","10ef35ae68b5c011c26cef20d4640bef"],["/2021/01/31/newgroup/index.html","4747cc80670fe6e00dbc20825673d194"],["/2021/02/01/clashlanguage/index.html","74dbab77e24281d00184dbff522e7706"],["/2021/02/01/encrypt/index.html","a23da73bf36612e01cf714940f2e2de1"],["/2021/02/01/footermotion/index.html","8a579c776d725253e0847923fce25712"],["/2021/02/01/gitter/index.html","a4362df0c6f817f8a121f2b3811a944f"],["/2021/02/01/pixivtop50/index.html","4b24a96e9674dcafe251e3542652b015"],["/2021/02/01/scrollbar/index.html","8ec0ffca156788eef496f07ceabb7df6"],["/2021/02/02/clover/index.html","8ad1aeab7042c96da045aed1a33a092c"],["/2021/02/02/maya/index.html","1cf29060dea1eb81d5e9641078d88f0d"],["/2021/02/02/speedcontroller/index.html","60e35df11584f346853590f76c000dff"],["/2021/02/02/yesmusicplayer/index.html","76e6f8a012f2bfd117555bdf47b52128"],["/2021/02/03/lenovoonelite/index.html","4f318fa752e1b71a4a144dff883f86ea"],["/2021/02/03/skipads/index.html","279a4d01680820169e38e710e87c1042"],["/2021/02/04/picseed/index.html","29101cea7074dd5436e57655e6da7f1c"],["/2021/02/04/renren/index.html","25553f3731f13a712e9c6078c217549f"],["/2021/02/04/serverstress/index.html","6bbe5c599e5d0c05147d94519a2cc0ae"],["/2021/02/04/wikipediazh/index.html","10ed8272317c472eeda74a3e9e91be41"],["/2021/02/05/googlevoice/index.html","66cc486d3a5f313ea8706ab0d08c0536"],["/2021/02/06/clashconnection/index.html","61f7fded79fc9580320e07d31dcb5556"],["/2021/02/06/gvtransfer/index.html","a26e39cfb4c5bc5fa78e65b883838dd2"],["/2021/02/06/todesk/index.html","6a816cb3ceebd11d8657001c7967b826"],["/2021/02/06/vpnblacklist/index.html","e13be5f18681216c1f924c4d9e0109ca"],["/2021/02/07/mklink/index.html","e6f73ef37f5377dd3bb2bfdc64e3c780"],["/2021/02/07/speedtest/index.html","85a2dc6bc6841df8e05c62f2cc52b7fb"],["/2021/02/07/translate/index.html","04a86a3b02322092a8163a1c7033dddf"],["/2021/02/08/ewomail/index.html","6d4db31ee3148675d76dd04bd1109a3e"],["/2021/02/10/officee5/index.html","1937e411566a3ccec11a64bd9884caec"],["/2021/02/10/raidrive/index.html","dccfebc3f8c2287a8d7962d5927b74c8"],["/2021/02/13/e5sub/index.html","ebfa1c55d2f47e0d98b4b3e9e0c83cb3"],["/2021/02/14/screen/index.html","622e418226b8bb05f3800c97c5152e2e"],["/2021/02/15/clashtun/index.html","f947f4f56b9ee90a1210900d5b0690ac"],["/2021/02/15/messageboom/index.html","3f414a16c3fa46c876b703600baf96e2"],["/2021/02/15/oneindex/index.html","0daccdde4d6f34cf23c51bf6474cd634"],["/2021/02/16/govsites/index.html","1d3debeac529c5be21ed89cb9d1a1357"],["/2021/02/17/hexototypecho/index.html","8d7eb9c9407c43c40f66224fae00f62e"],["/2021/02/19/fiddler/index.html","a88308288df61ba0bdbacfa7db91e18a"],["/2021/02/22/potplayerset/index.html","2b071017f84a455a7c1d187260b10dc7"],["/2021/02/22/studyresource/index.html","d1d618a0ceef75eae4b7186ff954639b"],["/2021/02/22/telegram/index.html","f7eafa315ffa424a08c10d3bfa87784a"],["/2021/02/22/videos/index.html","1ee21c78486547a2de0d311744c2263a"],["/2021/02/24/mtproxy/index.html","7e836efd6df3e98229cfe9ac665fe1e5"],["/2021/03/10/catchcat/index.html","5b17e03b24e5fb1160b8a92c6d1f5138"],["/2021/03/10/neteasemusic/index.html","42a735e59eefd890bc40f0fe2e8822a3"],["/2021/03/10/surfboard/index.html","c2df692bb5d124c5d480711d783d7c53"],["/2021/03/11/vpnandjc/index.html","c0fb7c8b88d9646abc0928b95e4f3a24"],["/2021/03/12/qrcodes/index.html","091df77e1321ebedba8826122d02d71e"],["/404.html","43dd426e4d73280d5409e701f8eac306"],["/archives/2020/11/index.html","7bba16c6ebb4a958d9f3f414ea9bba41"],["/archives/2020/12/index.html","22205a4a412570ab63e15ba64f3bc941"],["/archives/2020/12/page/2/index.html","6170881999fc5ee96579f0fbe27bebf4"],["/archives/2020/12/page/3/index.html","be91ddc5de37d7f52d961b941e1201d7"],["/archives/2020/index.html","54671f5922e1e92cf91f0f540caaf0f0"],["/archives/2020/page/2/index.html","c387128155c092250c862643aac75799"],["/archives/2020/page/3/index.html","94a900b8ba922cd8ab96f0a754ce05fe"],["/archives/2021/01/index.html","7db768267b268eac829e44c9116d5298"],["/archives/2021/01/page/2/index.html","651001bf66b2ef79fbfe4cda30d3191a"],["/archives/2021/01/page/3/index.html","54de90332a3fc81f2736bfbc437657e2"],["/archives/2021/01/page/4/index.html","753acb7766d221e9c589ea957150b8bf"],["/archives/2021/02/index.html","571819455b6bb8ffd2f52182defc7fe9"],["/archives/2021/02/page/2/index.html","4340d8da380d6d26b6785d8c3b226f33"],["/archives/2021/02/page/3/index.html","3d31f254b45d9a556947a842cf879cc0"],["/archives/2021/03/index.html","6bfd6b3c57abe3b762c6542b2014c5f5"],["/archives/2021/index.html","b4d60e2b8f9202368bdaa5e87c19603d"],["/archives/2021/page/2/index.html","43b83c8a747021e055602062bf9af30c"],["/archives/2021/page/3/index.html","12ed835e558cd8d919ed4b7891074171"],["/archives/2021/page/4/index.html","71e05e4728de3d1d1443962a45b8806a"],["/archives/2021/page/5/index.html","756da1186501063e1b4dae4da8e438a2"],["/archives/2021/page/6/index.html","c39da80071368d27a6c2db09423cd6d9"],["/archives/2021/page/7/index.html","e724618a187e07fe323c0538a96aa502"],["/archives/index.html","73a8195a51e7a63eca6452e3bfa11f97"],["/archives/page/10/index.html","a69ea28b27a1ceab37c90375e24f19c1"],["/archives/page/2/index.html","4a9e655f17c85ae4b35e6dde4b5509f5"],["/archives/page/3/index.html","5e21460f40449092cfaae5cf341f0db1"],["/archives/page/4/index.html","4d699e5ac3a068bf15a2751dc60fac75"],["/archives/page/5/index.html","c4b56b7eb5b7270793a925845279755d"],["/archives/page/6/index.html","8260165f4f71fe049bdb0b5bf8a30993"],["/archives/page/7/index.html","2110ee0092cf2191a90b43dba182ab0c"],["/archives/page/8/index.html","47c747b8eb45209fac1f9ab472f3d918"],["/archives/page/9/index.html","1a9cf3a2b61f451e3d16fcf34b202b6d"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPN/index.html","4249cba878ff841a7466f037129e86dc"],["/categories/VPS/index.html","efbcb5c875ce540c9f42844423091290"],["/categories/index.html","7990ff3bf217a067053b1fbc9de163b2"],["/categories/下载/index.html","c2e457cca756768fcb7786edf476b31a"],["/categories/安全/index.html","78cc1a27f43ca24703d8ea5ccc429c25"],["/categories/建站/index.html","49cb147c67b8c3a68412cd5f75ce872d"],["/categories/杂/index.html","0ba2085ec006e62197994b71f9ae8fe2"],["/categories/杂/page/2/index.html","3c5269b429291543d453f0dd348f834e"],["/categories/测评/index.html","7c5833e0a087d9865da4c2ca446eca43"],["/categories/科学上网/index.html","975fec707f8abe68df8580f25f6db0ca"],["/categories/科学上网/page/2/index.html","87a2e36cfd174c3145ae74154ce231fc"],["/categories/编程/index.html","445334710bb0bdbf1ae3694ec12d67c3"],["/categories/网站/index.html","cbc4c221987f211f2422d6e98de1de72"],["/categories/网站/page/2/index.html","9d14502c091f6e6ec21ce2cf06336d95"],["/categories/软件/index.html","a2cd625c8b822c5b31e0c56e0c643e8f"],["/categories/软件/page/2/index.html","96ef2d234d7cb156c3aa9f62b03edc6b"],["/categories/软件/page/3/index.html","74fe3e66badfee84e7eeefc35104c88b"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","94ff690e6ad239749f8d31b0efb4336f"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","5badec96b683b03bb5b41522bb6c90ec"],["/ios/index.html","ffaf7d23f8541cea0d1ccb912083f2de"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","6b77b44226a5bb301eca6e2b619a3ba6"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","1c9d994f2f49017bf7d3fdea7d64da2d"],["/page/2/index.html","099163b3548d4bcf0011ec83ae95f7a7"],["/page/3/index.html","af45dd6628bb4e099d3a500962435675"],["/page/4/index.html","15df9a726dc23977c44c686bcd91e940"],["/page/5/index.html","3741859dc3f144d760927211a2fd1e7c"],["/page/6/index.html","5e48c744f12ae6a284ba48a0c7884660"],["/page/7/index.html","9a1952d74eb08578ffd3edb0e87af46e"],["/page/8/index.html","26e4cbd37c9c41e811bf51f8809a1e9f"],["/page/9/index.html","abd0641309140c9033560a14eec0f9d4"],["/payment/index.html","38a93b95d1857b0d9607aa534100b36c"],["/privacy-policy/index.html","e503a02b8ad15c23368c3e1316ca630f"],["/rss2.xml","640531a4dfbca1e149c498b78aa391d3"],["/search.xml","48d6049ee04a99c3110779e54fd19552"],["/sitemap.xml","ed63d709219105fdd7171d64074fd9a5"],["/sw-register.js","cd3c87ab5c09f30341f232c320309d42"],["/tags/5t/index.html","892664c693ccfe372cdc90beabe14ad9"],["/tags/Clash/index.html","5c406d7dfba9f9c2664801c05ec95143"],["/tags/Clover/index.html","d5f3672d8150029c65346f8beb913d1a"],["/tags/E5/index.html","afa2fc8fb18bb371448860e05f334438"],["/tags/FTP/index.html","dc4c174b87d412ed37e6993e1ab224ec"],["/tags/GitHub/index.html","e12298603c5ef652ad2d40b55cb04a81"],["/tags/Heroku/index.html","dbe1a714dcde140ab95ffb5a2e20130d"],["/tags/Hexo/index.html","34d1f7047f92e7d1d373f77a8c5cd5ad"],["/tags/Lenovo/index.html","43560e55069a6a5367ef2a52b68b6ea1"],["/tags/Oneindex/index.html","5edb985fcebcaae3c84a196afe93bad7"],["/tags/QQ/index.html","51d17aba0ba86ece7516c89abf61505f"],["/tags/QTTabbar/index.html","9020f163f389956e51b10522c5dde7d3"],["/tags/RX文件管理器/index.html","1a3ca5275b9f70a22865fc2c92f2884b"],["/tags/Todesk/index.html","9a31a6fe0c3c04491035bed37cb253d3"],["/tags/Vercel/index.html","a4ea748ccda93cf7941118f206bdb751"],["/tags/ads/index.html","54c524293453f5ddf8504aaaf99bb8e9"],["/tags/api/index.html","e5dc3672861aedcf1255e2cd9f7047c7"],["/tags/app/index.html","20ced4312474431f5a076ce1748fbe69"],["/tags/blacklist/index.html","09a9e07893a645ad424535b49c339d1f"],["/tags/butterfly/index.html","c2bfd5ff43ba34cf1fd2c1e5b48335b5"],["/tags/chrome/index.html","8a837e361fa7982c0f530cbead48c443"],["/tags/cloudflare/index.html","39f83a57448518cbd2de13871802506e"],["/tags/cmd/index.html","2eb7cd33cd9038a063e175b82048de67"],["/tags/c盘/index.html","17c6e1e1593e9210c1cc2738bfe07e16"],["/tags/email/index.html","e67e7440f2244f2221571385cef26d9c"],["/tags/ewomail/index.html","3415f3795e1527ba16d939c62743a450"],["/tags/fiddler/index.html","70ed460a7a9c2aae423688eccc0ad3bd"],["/tags/flags/index.html","b1b7da91d2c8bc88ab135cb283357179"],["/tags/footer，页脚/index.html","83609d91c5fad262824f2cd42de939f3"],["/tags/galgame/index.html","8794a507f6f1edae236a1777d93d4c79"],["/tags/git/index.html","3107e46f0698208d2848e283f4190a21"],["/tags/gitcalendar/index.html","62ee7f808f2bcf0c592e17b800b0467d"],["/tags/google-voice/index.html","aa9651f9215ec78b7dbf37957a350330"],["/tags/gv/index.html","c6651cadaa34962c39d02ff82835dec8"],["/tags/html/index.html","4ad1a85563e66dee0b54629067f615f1"],["/tags/index-1.html","134ce6165e413966dbea394e1e6ff04c"],["/tags/index.html","f1ca1deaf09556ae9e7c8dc62e5320af"],["/tags/js/index.html","3e969ee13f21b8885d087e4c79dd983a"],["/tags/jsdelivr/index.html","2b3be29f88bff4540e65bf0fd7ebf7cc"],["/tags/linux/index.html","3fcaf18dfa627778c9c81490e31cfcec"],["/tags/madVR/index.html","4ff1068eba050f7ba7c441292e6213ce"],["/tags/markdown/index.html","ea9d2f7d5d17401ee44292a700f42013"],["/tags/maya/index.html","3a0994193522a0f31193b42ed6f9a517"],["/tags/mklink/index.html","da7dd86ec2e8b8e728b840319fd84003"],["/tags/office-e5/index.html","eb99fc93929ba706a2aa69ff6e19127f"],["/tags/onedrive/index.html","1f695869e668de46eb1e7c46d5d83d43"],["/tags/picGO/index.html","31a682e9a4a2a4b3ea44c65c302f3ab6"],["/tags/pixiv/index.html","eb697563684d9024414a51c4bb478bdd"],["/tags/potplayer/index.html","ec1e2a9924c559655f699ba730e7ecbd"],["/tags/proxypool/index.html","53f976bff221e1ecdca854502f6ce71b"],["/tags/qbitorrent/index.html","3f4c7ab7f4eecc886d88ad37fe213832"],["/tags/raidrive/index.html","668a1e8ab96531635deb9ef5c0979a99"],["/tags/screen/index.html","4e306c40cc9cc876f19d782c4215458d"],["/tags/speedtest/index.html","07af2491bafa5e6dbca4e9fe94f3506d"],["/tags/ss/index.html","50fd9b88314191645c9fa05b49e60c48"],["/tags/ssr/index.html","81df26badd5ed3084e19b2606d897c9e"],["/tags/surfboard/index.html","52cbb7d723a7da07acb59c29399b3edc"],["/tags/tap/index.html","8fdbae603811d2af4c880a420fe17df1"],["/tags/telegram/index.html","9c8cb233e11cb6710ee9ed3caa28d467"],["/tags/telegram代理/index.html","3fe82a4c6760a485fb58ac90b3ce223e"],["/tags/tg/index.html","85a24a9bfe5d4572e486790a80a78332"],["/tags/tg代理/index.html","c47443db76d3d0b5fc60d0a10b5bc050"],["/tags/top50/index.html","14e8423674ccb31c270c487adb847a74"],["/tags/tracker/index.html","803b88cddf54a22a2de80cc163ff0dba"],["/tags/translate/index.html","45661310ee19e3273d75a40ce6e4e4ef"],["/tags/translater/index.html","a811bd9b688dfc1fe5424f825afa3b56"],["/tags/tun/index.html","d6fa187cd15dbda2168498b9bb098fbd"],["/tags/typecho/index.html","64dec0084ca1a00598fd274862466fe6"],["/tags/v2ray/index.html","26b01d14f9f3b8aa27c821cf8daa819c"],["/tags/vpn/index.html","4f82907e86c2c603f632e5c8090100cb"],["/tags/vps/index.html","90ed38f4392c7acafbba0d2a16030bc7"],["/tags/windows/index.html","86b952669ecb26c3e01d127fce06b4f0"],["/tags/windows端/index.html","f469837617b1c8cce6ad19374311b875"],["/tags/xray/index.html","8cb588e3b6496cf4da1db5caa2d982a0"],["/tags/下载/index.html","f7e0f7fb0051ffdbca3194b007ba5296"],["/tags/不限速/index.html","cf7bfd474b408e6fd421dfc28feea8e2"],["/tags/个人网盘/index.html","9a7024e3ed472c2b4992b15531b1ed00"],["/tags/主题/index.html","7f5a71f3d16fd44216b39204569c6487"],["/tags/云便签/index.html","c423526aab7050d52772731e9e2a5aac"],["/tags/云盘/index.html","42cf61f83ab5bb053b8ae9fa85d59ccc"],["/tags/人人/index.html","6ddc129bcf99442036e20f07ac5f3d79"],["/tags/代理/index.html","09a0b6cc1c064fb7ec1faa2e518ecff7"],["/tags/代码/index.html","63a48bd93537bd7354c235ae8af57c09"],["/tags/优选IP/index.html","0ebcff2344014fb87b3443640afc3bc5"],["/tags/便签/index.html","dde877c399c01568e4d84b152095545b"],["/tags/保号/index.html","9f1bbc73b252e5b0ba1c83fa2d81c19a"],["/tags/免费/index.html","c333b4365737d2ea4dea49ee8cfd4e2e"],["/tags/免费节点/index.html","91d99425f96362bf5d36a1e89fb63cb7"],["/tags/加密/index.html","f897f4896152ec063997590078cdb119"],["/tags/动画/index.html","667f024feec6c9a32c11158f6beed807"],["/tags/博客/index.html","3890c0e79c03daebd8de0ae72107caac"],["/tags/历史记录/index.html","1406481af72251b459f6500e30059217"],["/tags/压力/index.html","4676d6bab055b1189aa57eb782b037ae"],["/tags/压缩包/index.html","f889e1c7a62d401f6c76d87b00d74284"],["/tags/反代/index.html","aed90b763df31506da10e0addde666d5"],["/tags/可视化/index.html","53d7fa4c75211c82042f3e19e154a47a"],["/tags/命令/index.html","f5a4adbaa74f41986544df18c023dc70"],["/tags/国家/index.html","6cbd7eb50f5a368846a7308c7a92964e"],["/tags/图床/index.html","b425d287db9c05074e99b44404711aa3"],["/tags/图片/index.html","ffaf787c8eacdf8513f34634144135e9"],["/tags/域名/index.html","538c616b041ef9ac0a56e461ae582781"],["/tags/多标签/index.html","ccc51c5b6e705413e2b195798350b3b6"],["/tags/存储/index.html","49d99e7ccda544e1d92c8ab177a62b78"],["/tags/学习/index.html","3eb4be3db930254cdb9501a9d5f61a2f"],["/tags/安全/index.html","35667574387296ed0ab8676c48f511b2"],["/tags/安卓/index.html","fe9b362c277b0007945267b154c4eec3"],["/tags/宝塔/index.html","2f1b067eb3d41d16406c70aa45edc673"],["/tags/小游戏/index.html","010e0b32c1054feeaac1cd5d2895b522"],["/tags/广告/index.html","953eb097e38100eb8d4eecbb91433f70"],["/tags/建站/index.html","5d046438f69f8ffcfcb88aa415f02ce1"],["/tags/影视/index.html","6bfd74bfbe408b4bd80ec2c0b216c3d2"],["/tags/快速启动/index.html","30bfa9938c771ced32e16a2f60d82afd"],["/tags/手机/index.html","3ac428d7870563f15c665634b079a54c"],["/tags/托管/index.html","f8eed9a4d490704471f6cfc03e0978e8"],["/tags/抓包/index.html","2092d30cd99be818bdfec25f90ce8505"],["/tags/抓取/index.html","e70e3cd53d3d4773be4414a321c8ff34"],["/tags/投屏/index.html","98cc5c244e2189fa28bdcb172e0d95a9"],["/tags/拓展功能/index.html","1cafa5d629ef8c4178a810730ee964cc"],["/tags/挂载/index.html","4e559f11164bf52bbe19f5af613b9a6b"],["/tags/指纹/index.html","afd0185e055ff7db997d5377afa617a4"],["/tags/接口/index.html","41bc2434fdb88bb4f971b30fdd2ee489"],["/tags/提取图片/index.html","39e24147073e0617cd85b5ea03e0f59a"],["/tags/插件/index.html","e645095f83636e5feb645fd388131902"],["/tags/搜图/index.html","5adfe4b5f00a79624736946291870102"],["/tags/搭建/index.html","6bfe5a987508f826592f7284db8d963f"],["/tags/撤回/index.html","acf3b71625218d1644f7090aa54fb6ef"],["/tags/播放器/index.html","9499e6583a4eae4e1df3479eb5177ada"],["/tags/政府网站/index.html","b4b5ecf520b5fea750091167102c7128"],["/tags/效率/index.html","f132febe9c9f01fb4aba08a9139e3733"],["/tags/日历/index.html","bbee4424b4fedf9eb04023c3f987e69a"],["/tags/服务器/index.html","e38c4c2737713cd55b8401b12ae772c4"],["/tags/机场/index.html","e2ae8c31352624599b6857144e644210"],["/tags/桌面/index.html","673547d4c7ddcef87504a05720f31b98"],["/tags/梯子/index.html","3dabf41b7f4610ebcd6ced9b626cb3d6"],["/tags/检测工具/index.html","40707032d3e55948556bebdc5f51493a"],["/tags/汉化/index.html","68d198a37e55865270693dd17cd005f5"],["/tags/测压/index.html","33217b35a196d5bad1c52df3c39fffb6"],["/tags/测速/index.html","ff426c40922c11c7a64f7c48f33f048d"],["/tags/浏览器/index.html","72823f840b40db0fb5de5623bba15aab"],["/tags/清理/index.html","056954191bc6025e42c8012a2465bade"],["/tags/滚动条/index.html","921affefcbe29e52b56a7e283e043bc8"],["/tags/灰色歌曲/index.html","41f30df8cdeaa06d33684636baa8978c"],["/tags/电影/index.html","7dc5e9569fbe86353d81e0974436531b"],["/tags/电视剧/index.html","993056ff61fa730f084bf1f770dba412"],["/tags/白嫖/index.html","92832b34235f5bbae255ff8e9f33745e"],["/tags/百度/index.html","9ec4fa6ef9833fc1aae2cb08373187eb"],["/tags/百度云盘/index.html","8a543032299b256f222ede0752a2e840"],["/tags/百科/index.html","252164403dfeb89e78130c6d466bc59d"],["/tags/短信/index.html","04374402bda88595b7d1df326e6d061b"],["/tags/硬件/index.html","3c9aa8b1cb534b67883e1a547adba7d9"],["/tags/科学上网/index.html","c18e656c93a9bd66ae6f6bf462dac124"],["/tags/空间/index.html","80a75183b9b6b32e2101f6d2cb22f6b4"],["/tags/笔记/index.html","6064d8d2acf879d856ba2c859dd82da1"],["/tags/简洁/index.html","b7599ba4b495ad6613da11b5a3628f64"],["/tags/简约/index.html","ed976f948dec5984e8b29781fc39ba72"],["/tags/维基/index.html","b9d696601b0c361afcb2eb7f65d468d4"],["/tags/网易云/index.html","174189b5fe5cb4b405ad9b6c9db9fccc"],["/tags/网盘/index.html","7d5ed01d515659ca17f363cbee3a653b"],["/tags/网站/index.html","6a787aad73dc16fc915dde1f15ed0f74"],["/tags/网络/index.html","c805f0e0e38c9442bbc2480bfef9ac23"],["/tags/美化/index.html","7fc5bd799e05c8aeb4d541fd77f51d76"],["/tags/翻墙/index.html","dfba311010a35ff3379aaf25395c2dc0"],["/tags/翻译/index.html","ac6e00f14e1638c4800d499948914a34"],["/tags/翻译器/index.html","b24842793eabdfc5048edc9902b39a50"],["/tags/聊天/index.html","6e03bc12b7d86a51b5c87e65a12ebadb"],["/tags/聊天室/index.html","effb97e51d51dc24da5b096762cbe4fa"],["/tags/联想/index.html","1ba3b4120481a5b5a438e2384f6dca20"],["/tags/节点/index.html","7afb4666f63a12a27e64081e7807d5d2"],["/tags/虚拟手机号/index.html","3f679b4f0b040586996ecc3b9e05d654"],["/tags/补丁/index.html","36dc7c8e50d5efa18af1e569b8eb23d9"],["/tags/视频/index.html","20b45c6074694e7f3226a82f269f691c"],["/tags/解析/index.html","a6ffd2e7357fab2c30972c0d9a0a49c5"],["/tags/订阅链接/index.html","b8a12997fb91a3888bc5dca69d663b8f"],["/tags/记录/index.html","cff12b0dcdbe37d420c6694d02d00afa"],["/tags/识图/index.html","9b56983b365fcb81104a3ee7c6118788"],["/tags/语言/index.html","d83bbca4888b0f2ee99485abd4fbba10"],["/tags/资源/index.html","d55960274df21cf015848095bacfd052"],["/tags/资源管理器/index.html","6f3b521c3f0de1f9679ac99b17c82162"],["/tags/转移/index.html","d73b1b854f34d0bb8cf96bd7f6fb1e6a"],["/tags/软件/index.html","bf8f9363f995bbd5aa749abf7a5307c5"],["/tags/轰炸/index.html","338161dd739e03275637c3d4bbaf4a77"],["/tags/迁移/index.html","a9d4977a1253f50b862ccf47898bb1bc"],["/tags/远程控制/index.html","384bbdb7df762604193b74ed5e44f52b"],["/tags/连接/index.html","4174e925176004239868e1058e4582c7"],["/tags/追踪/index.html","9f2a8d038a2035ceb156d2304268ad8b"],["/tags/速度/index.html","c6d2c9acc4eca0dd06a9a7ca13019902"],["/tags/邮箱/index.html","ff0cc20debec64415eb54d6adbe23a86"],["/tags/酷炫/index.html","978f470c4268f57e267caaae43e35949"],["/tags/钓鱼/index.html","fd1c974ee2e9b77bf9b14132fc0422a3"],["/tags/镜像/index.html","7bdf61060715c1e1c62ab0764896515c"],["/tags/随机/index.html","5162cc8902f2ca5717c31a530da7d9cb"],["/tags/隐藏/index.html","f9b2d1150bf1462d450097b453ad00aa"],["/tags/面板/index.html","35ddd4a3844c2adec5744d3c212a976c"],["/tags/音乐/index.html","c04f5be7efd8cd32790c2ef3e80745ea"],["/tags/高颜值/index.html","aaa0902dcf71d3d3b22e1992548284aa"],["/tags/魔改/index.html","2fb8f0eb14f98961df77f3f67a88c902"],["/tags/黑名单/index.html","ffd5cdc9d8229d0f25aa5620f21b116b"],["/urls/index.html","13da4ca0624ddba783bf4eed07b044fd"],["/vps/index.html","373794b51cc451aef024ae73e9b208f6"],["/支持/index.html","b7e46f149ae67a991826e6dcd2d7596c"]];
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
