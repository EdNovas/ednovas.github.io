/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","33caebeb043d01cf161aba4cdd24d5e6"],["/2020/11/29/clash-windows/index.html","9aff28f3897c0dcf2299d3066cdc1b74"],["/2020/11/30/websites2/index.html","9a440b5950a4d9dec4020172de28c734"],["/2020/12/04/iphone4s/index.html","6c810b6e0601e5f3029ddd0076438f9f"],["/2020/12/04/onenote/index.html","16e6388061925db1305f33d253afcaa5"],["/2020/12/04/wesites1/index.html","3f61bad8bc7c8291a013304a98e381d8"],["/2020/12/06/nokia808/index.html","cf2b00d07435d926df96c61423c0f977"],["/2020/12/07/ipad1/index.html","1de1110a964f29dee545035245b8cb0e"],["/2020/12/18/freesubscribes/index.html","3d0feb14b51d6a926820e7138164595f"],["/2020/12/19/musics/index.html","51922dd7c9f4704bd8e9a358c6f86e4e"],["/2020/12/19/shadowrocket/index.html","e90a93d48af6aad85ea1f3f183119286"],["/2020/12/19/v2ray-windows/index.html","0c329092171766569e8373d192083760"],["/2020/12/19/v2rayng/index.html","0c93b0f3a366f009544d04e92a213c5d"],["/2020/12/20/beoplay/index.html","f9873329e3b403cc34a5371c78d074d1"],["/2020/12/20/订阅链接转换/index.html","afc9eee578ff78b6dcdcf19a399afcc7"],["/2020/12/21/chrome浏览器下载提速/index.html","02e8694dc3eadfde1afcd039c412c939"],["/2020/12/21/免费128线程并发下载xdown/index.html","0ec65cf38b9ea0ed680c704f65f58500"],["/2020/12/21/免费32线程下载软件ndm/index.html","aafbab04a39376f3169a477bc4698af6"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e5121503a19661236eafd7d20b8ac901"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","385ce2108898d33a1aa86f677bb6b2e8"],["/2020/12/21/广告怎么知道我在想什么/index.html","7bc9fd81d00c84342a264e76e645ad56"],["/2020/12/21/无名·引子（小说试写）/index.html","37c4322ab2c7d3130cb16646a12032ea"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","ad3d356e1883b7da5e53ac7dd3004fd1"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","07e5a2077e9b20192d0f1d5a6d451089"],["/2020/12/21/高速轻量下载器aria2/index.html","deae3f2af97269bb1826fbb4728e407a"],["/2020/12/22/2020-cee-roo/index.html","b1d875b1240f83854a5645586f642033"],["/2020/12/22/firefox插件、github、steam富强/index.html","19b65acca950d03d6f09aae342ad47f3"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","1b2dd81f9092d34a1cfe08d472211648"],["/2020/12/26/python-day-1/index.html","a504115bb6c86fa47727b2204f6713fc"],["/2020/12/26/python-day-2/index.html","bffac0d15260e9b3480f24653a3b1e27"],["/2020/12/26/度盘不限速下载方式一赏/index.html","de08980e540876570c7633ccaa78dbdf"],["/2020/12/26/添加开机自启软件/index.html","2d7d5f8e123b7ae123d63991ab82766f"],["/2020/12/26/电脑端截图方式一赏/index.html","ee7bbb0c308c407857b22088d78d06ea"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","705960f16a6d783467996094a8ef81b6"],["/2020/12/27/最安全的浏览器tor/index.html","a208865da92bb95da7d7a484afceba0e"],["/2020/12/27/网易云刷等级和听歌数量/index.html","92b96b2aeb602d3c0ec5469c23a201bd"],["/2020/12/28/freenom申请免费域名/index.html","a59a91df2148e91ee6e933825928cedc"],["/2020/12/31/机场/index.html","8db6797f1275429f97944eadf0cc5082"],["/2021/01/01/M1/index.html","d72e35736b9c5fc2589c78c4cf55f23e"],["/2021/01/01/compress/index.html","bb1533f3c39b00dde07cbe6f0b3b5d3c"],["/2021/01/01/infinityfree/index.html","e05a07a2c0058d5a5d01d61a70166511"],["/2021/01/01/硬核翻墙/index.html","2a7933ff0364626142ddfe7e330ef69c"],["/2021/01/02/qq/index.html","3a1f06d28607fb9144bc8f3b9a3f8839"],["/2021/01/03/netch/index.html","6b6cfcdc764df7cd83b6156be9c373fe"],["/2021/01/03/waifu2x/index.html","b4d981083ff5f3a475734e3a5fd2153d"],["/2021/01/04/ads/index.html","78d81d7be7163a63ef88fa49ad8eb7b4"],["/2021/01/04/games/index.html","b3eb7095142271e7bd183c709a1ea174"],["/2021/01/04/heroku/index.html","b8d1bc9ba92e9771696c9abee55af39a"],["/2021/01/06/movies/index.html","833d67ed65ef866a4d6b2eecf6a949f5"],["/2021/01/07/google2020/index.html","010307d25c0692d283b976061abce63d"],["/2021/01/07/lucky/index.html","b7ec3dd398c8935704c400db8207a7f3"],["/2021/01/07/spotify/index.html","d0df2d20988598f4a022dcc332659bd2"],["/2021/01/07/thunder/index.html","c13a18af9e59cf93edd7fb6450ba6ed6"],["/2021/01/08/adguardhome/index.html","75cd4c96a7d599d33958b6da7b990d42"],["/2021/01/10/IBM/index.html","995c22ac0422ab924c72fbff0266439a"],["/2021/01/10/potplayer/index.html","a30c24cffcdc265837eaba273e7d82f3"],["/2021/01/10/sakuraanime/index.html","87c5d7c7060790a0adb82ad177f4925b"],["/2021/01/10/美剧星球/index.html","d0396d52a1af625cb04b13dc710cd38e"],["/2021/01/12/telegraph/index.html","62daa3f4673518c5ef76551994d41e9f"],["/2021/01/14/comics/index.html","fcefea9e4a512e1939a1964453ade281"],["/2021/01/14/ftp/index.html","90c891c5f3eb6f4fa6a5637260b27ed8"],["/2021/01/14/oraclecloud/index.html","850f73d5b050a3f7cabba35c43766c40"],["/2021/01/14/porkbun/index.html","3daf70e341b867ce73d5c8798590c57e"],["/2021/01/14/powertoys/index.html","b2bee8bbabb7f7b293a6b6eb9eca8c0d"],["/2021/01/14/taptap/index.html","c36dbc686b96d2afce107840cb961487"],["/2021/01/14/ubuntuvsftp/index.html","a129b85c9fdea23f96795d2a604eba5f"],["/2021/01/14/小说/index.html","098a81f85579b4b1eb09945a591d1651"],["/2021/01/15/freeproxies/index.html","37f1cb610b8228ae57b07d13d009c225"],["/2021/01/15/incaseformat/index.html","5c5c1b14b2ca6598d234caf12ec6badf"],["/2021/01/16/euserv/index.html","0e959d179fc4532de8f06a3cf0a554ef"],["/2021/01/16/winxray/index.html","0fd530db04983861ef54efc2b5a9f885"],["/2021/01/18/qqreadhistory/index.html","d7138dbe3ebe1746fcd54996a597af5c"],["/2021/01/18/qqrevoke/index.html","568eb9001a9e7f4ecab2d95dd4899540"],["/2021/01/19/freevpn/index.html","5ef21954a399ca9cfac622e6f27f2d9e"],["/2021/01/20/browsertrack/index.html","9b31af86e5ca9693d72cdbd282d0b634"],["/2021/01/20/v2ui/index.html","c967c1cf91d2f3f260052733bb2e9911"],["/2021/01/21/failedtoconnect/index.html","7aca2422c4411b095f20d340bc2549d9"],["/2021/01/21/gitcalendar/index.html","b383bb72039aaa726be7070866c126df"],["/2021/01/21/markdownformat/index.html","faa4a7c5eb852f86ec4dd153c7be2a9a"],["/2021/01/21/markdowntable/index.html","c90c3a12c79489b051b1228d647c6c91"],["/2021/01/21/vercel/index.html","3a655b980c09db183354df4462aed9d6"],["/2021/01/22/hardware/index.html","b32b3344d1395398cd1b430c64db43c5"],["/2021/01/22/muviz/index.html","c0dc3a8f0afb3420a15ca4c34e380296"],["/2021/01/22/randomapi/index.html","d27c5bc0f5acb1ed898f54eee5f402e6"],["/2021/01/22/searchimages/index.html","b61b38e8c50550a581f2ffeb8cfcfaec"],["/2021/01/23/RX文件管理器/index.html","03fc72b9fdbb49f1bc2ab2321ee32076"],["/2021/01/23/chromeflag/index.html","f1aa1c313fe99d9b60ff09f5bae1af69"],["/2021/01/23/qttabbar/index.html","bfcbce75cb1f92e3393b681091f66571"],["/2021/01/24/githubspeedup/index.html","53140d1e1d9ff600ef22411712fb36da"],["/2021/01/24/jsdelivr/index.html","42094519852214ff182d5df777f54406"],["/2021/01/25/note/index.html","738a3c63f510b74a50c3e3e9b2dfc1a3"],["/2021/01/25/soul/index.html","bfcce0f3fc32d3fd1f88eb5bb2d8f2f3"],["/2021/01/26/herokuxray/index.html","a0e2e50d3357fa8f1b34e2da3aa8fceb"],["/2021/01/27/proxypool/index.html","bb7e885ab5f474743e69d840692c4c63"],["/2021/01/27/tracker/index.html","b7393bacc64ad4b8e0a897e52b8d53d3"],["/2021/01/30/pandownphp/index.html","10ef35ae68b5c011c26cef20d4640bef"],["/2021/01/31/newgroup/index.html","4747cc80670fe6e00dbc20825673d194"],["/2021/02/01/clashlanguage/index.html","74dbab77e24281d00184dbff522e7706"],["/2021/02/01/encrypt/index.html","a23da73bf36612e01cf714940f2e2de1"],["/2021/02/01/footermotion/index.html","8a579c776d725253e0847923fce25712"],["/2021/02/01/gitter/index.html","a4362df0c6f817f8a121f2b3811a944f"],["/2021/02/01/pixivtop50/index.html","4b24a96e9674dcafe251e3542652b015"],["/2021/02/01/scrollbar/index.html","8ec0ffca156788eef496f07ceabb7df6"],["/2021/02/02/clover/index.html","8ad1aeab7042c96da045aed1a33a092c"],["/2021/02/02/maya/index.html","1cf29060dea1eb81d5e9641078d88f0d"],["/2021/02/02/speedcontroller/index.html","60e35df11584f346853590f76c000dff"],["/2021/02/02/yesmusicplayer/index.html","76e6f8a012f2bfd117555bdf47b52128"],["/2021/02/03/lenovoonelite/index.html","4f318fa752e1b71a4a144dff883f86ea"],["/2021/02/03/skipads/index.html","279a4d01680820169e38e710e87c1042"],["/2021/02/04/picseed/index.html","29101cea7074dd5436e57655e6da7f1c"],["/2021/02/04/renren/index.html","25553f3731f13a712e9c6078c217549f"],["/2021/02/04/serverstress/index.html","6bbe5c599e5d0c05147d94519a2cc0ae"],["/2021/02/04/wikipediazh/index.html","10ed8272317c472eeda74a3e9e91be41"],["/2021/02/05/googlevoice/index.html","66cc486d3a5f313ea8706ab0d08c0536"],["/2021/02/06/clashconnection/index.html","61f7fded79fc9580320e07d31dcb5556"],["/2021/02/06/gvtransfer/index.html","a26e39cfb4c5bc5fa78e65b883838dd2"],["/2021/02/06/todesk/index.html","6a816cb3ceebd11d8657001c7967b826"],["/2021/02/06/vpnblacklist/index.html","e13be5f18681216c1f924c4d9e0109ca"],["/2021/02/07/mklink/index.html","e6f73ef37f5377dd3bb2bfdc64e3c780"],["/2021/02/07/speedtest/index.html","85a2dc6bc6841df8e05c62f2cc52b7fb"],["/2021/02/07/translate/index.html","04a86a3b02322092a8163a1c7033dddf"],["/2021/02/08/ewomail/index.html","6d4db31ee3148675d76dd04bd1109a3e"],["/2021/02/10/officee5/index.html","1937e411566a3ccec11a64bd9884caec"],["/2021/02/10/raidrive/index.html","dccfebc3f8c2287a8d7962d5927b74c8"],["/2021/02/13/e5sub/index.html","164058852027836161e050a23bf5e9dd"],["/2021/02/14/screen/index.html","622e418226b8bb05f3800c97c5152e2e"],["/2021/02/15/clashtun/index.html","f947f4f56b9ee90a1210900d5b0690ac"],["/2021/02/15/messageboom/index.html","3f414a16c3fa46c876b703600baf96e2"],["/2021/02/15/oneindex/index.html","0daccdde4d6f34cf23c51bf6474cd634"],["/2021/02/16/govsites/index.html","1d3debeac529c5be21ed89cb9d1a1357"],["/2021/02/17/hexototypecho/index.html","8d7eb9c9407c43c40f66224fae00f62e"],["/2021/02/19/fiddler/index.html","a88308288df61ba0bdbacfa7db91e18a"],["/2021/02/22/potplayerset/index.html","2b071017f84a455a7c1d187260b10dc7"],["/2021/02/22/studyresource/index.html","d1d618a0ceef75eae4b7186ff954639b"],["/2021/02/22/telegram/index.html","f7eafa315ffa424a08c10d3bfa87784a"],["/2021/02/22/videos/index.html","1ee21c78486547a2de0d311744c2263a"],["/2021/02/24/mtproxy/index.html","7e836efd6df3e98229cfe9ac665fe1e5"],["/2021/03/10/catchcat/index.html","5b17e03b24e5fb1160b8a92c6d1f5138"],["/2021/03/10/neteasemusic/index.html","42a735e59eefd890bc40f0fe2e8822a3"],["/2021/03/10/surfboard/index.html","c2df692bb5d124c5d480711d783d7c53"],["/2021/03/11/vpnandjc/index.html","c0fb7c8b88d9646abc0928b95e4f3a24"],["/2021/03/12/qrcodes/index.html","091df77e1321ebedba8826122d02d71e"],["/404.html","2f481e0d3c5c69c348b1616ab7e3656a"],["/archives/2020/11/index.html","22628c771f7b6e34264bff84c33cb1e0"],["/archives/2020/12/index.html","7f36426682f3275b1fb55228200a9ffc"],["/archives/2020/12/page/2/index.html","bc90fe0a4a9bc3d14f9ec6d114996b5b"],["/archives/2020/12/page/3/index.html","4e3ed64c853967a531097199a0715c7b"],["/archives/2020/index.html","9c1cca3fd77db6017d155722ca5235a2"],["/archives/2020/page/2/index.html","0492891e91dcc6ebb230f3a0ad891113"],["/archives/2020/page/3/index.html","328e7bea6c04bbe438f703b48f3e69c1"],["/archives/2021/01/index.html","1fcf42f554bee6ce99f98d4f4522bda3"],["/archives/2021/01/page/2/index.html","d18fde21beb7905402b2fd14fc22b64c"],["/archives/2021/01/page/3/index.html","9de0d01a43b97f8be5ee6190931703ce"],["/archives/2021/01/page/4/index.html","ddc5fd1b5360d6381d94e7c0de37e72a"],["/archives/2021/02/index.html","78ab25611a4a136bc8cef767dbad6b47"],["/archives/2021/02/page/2/index.html","b9ad8c06bc27966dce6a1d5e106d7c34"],["/archives/2021/02/page/3/index.html","8531d2aff47bea6079cabdb395049112"],["/archives/2021/03/index.html","22650082fa2a3854e64b781642b0061b"],["/archives/2021/index.html","5efd9b76bde0a02fa94e760963c8b623"],["/archives/2021/page/2/index.html","8b897a221544cb940dca2e8e0d943702"],["/archives/2021/page/3/index.html","f7797e683ae325e614e917d4b4bad663"],["/archives/2021/page/4/index.html","5dc20a5f6a705045e258e150e9f46b4d"],["/archives/2021/page/5/index.html","c9323d9c2b4119811727356633b3e292"],["/archives/2021/page/6/index.html","4fb8be3312f05baf1766eb93697fc40a"],["/archives/2021/page/7/index.html","9d12dcab2344e45f6cf49b71660a64d8"],["/archives/index.html","21834ad939bd10ddf5f9897147ac2d3a"],["/archives/page/10/index.html","adaaf8b4ef636268531deb9859c341fa"],["/archives/page/2/index.html","47ff87a798ad9d2f7aeafb72bf4a6f1d"],["/archives/page/3/index.html","d1ffe8537c3777d22706925c885d3549"],["/archives/page/4/index.html","c5f291176f64f48229fb67a7d533c0da"],["/archives/page/5/index.html","77cca17fad885056b3dec627ec3d04d3"],["/archives/page/6/index.html","490c6f16f05f8874a302786816110f4a"],["/archives/page/7/index.html","ddfb764f981d32d7e987824510e938f8"],["/archives/page/8/index.html","99144102cb7d817198aef994ea02b1a9"],["/archives/page/9/index.html","85900cf39bfa15321e63d36fb8140a4a"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPN/index.html","17addf4dabbcd091fd85d737c1b04413"],["/categories/VPS/index.html","9e2924e3b74faa41229770186aaf6e37"],["/categories/index.html","11e7f4ede6a6bb315b1d08c052552ce2"],["/categories/下载/index.html","5f965c964fcc20608283ad50057f7805"],["/categories/安全/index.html","9d5bceeef1fba74be9c10029bddbc200"],["/categories/建站/index.html","6413217a510968a8e6b06fa7fe4a335b"],["/categories/杂/index.html","7040378024460e8811f84500021ee437"],["/categories/杂/page/2/index.html","9b728b0f51039d29ea23e3dea3d30ac0"],["/categories/测评/index.html","c75f95fdcad476d6116228d5758c84d2"],["/categories/科学上网/index.html","0ef53ca039c2cfe7c04afca191c9a19a"],["/categories/科学上网/page/2/index.html","09255fa7d0f93920b594c11ef5e75c43"],["/categories/编程/index.html","550d29e70da38726b64351a79c2e2fb6"],["/categories/网站/index.html","e2201ce248eb6a0aef3e87b66b5bfea1"],["/categories/网站/page/2/index.html","6d6bcdca9ba27b57c707090df6bc4f20"],["/categories/软件/index.html","5abad7c058781ac6407221ad7c80780a"],["/categories/软件/page/2/index.html","cf9145b09308b337d54d2577ac02d741"],["/categories/软件/page/3/index.html","6e0806b4fb1ffccc17592eb618ab01b0"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","42ef1bc03a7896a4a83808b51c38a056"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","c2182c9bb8b663b44e4cd0030f897b52"],["/ios/index.html","a456830ac8a80dd832e9e8862ba9e019"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","54eb103f33664f285af731d5c3841c71"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","f0d11871af7c07d9b05f66b63b145392"],["/page/2/index.html","04ae374f977947aeafd9188996b8d3c4"],["/page/3/index.html","1c0567d143918f2d62a8f633c73f6ac4"],["/page/4/index.html","f636219866173d34d6b2dfe48bab923b"],["/page/5/index.html","1ceeb3cbf56adb2b3e0a1346a9fc0662"],["/page/6/index.html","5945774b47fb0bdb1c974001d2608bf8"],["/page/7/index.html","b0640ce7ee39a00ba869445f33851c3a"],["/page/8/index.html","4e072f0898593f96765d2e17411e14d7"],["/page/9/index.html","12f86c7b4400dfa3ed7c82f82caa153c"],["/payment/index.html","b7110a18a6ddfc193af2f34aa3306a75"],["/privacy-policy/index.html","fe74a6e0f8c63e35b80930fd3f36c670"],["/rss2.xml","11373d517f10e45eeb3f129418cfcaf6"],["/search.xml","c545bb03217f26883373b5c0940ccf61"],["/sitemap.xml","61c76141c44f28401f9231437dd5dc02"],["/sw-register.js","f290f01929926761fe802b512d319bc2"],["/tags/5t/index.html","53aaf7b6e4dd5006adc5a419756d99ac"],["/tags/Clash/index.html","463cf1e780c5ec4923b2975b84e226ea"],["/tags/Clover/index.html","ff5142f9dfefd8dfd2ad13769f746e07"],["/tags/E5/index.html","0c20f2d34db4d1f1324f6c25ba9b78ce"],["/tags/FTP/index.html","432a12d1dc557d06051a082214812e4c"],["/tags/GitHub/index.html","a8b36fd703caf71d40ec202cc4c17634"],["/tags/Heroku/index.html","7d8ffd025b1a781af6a06ef8914f7594"],["/tags/Hexo/index.html","9caf34653fbd4eea26f4eb53ba3fc50e"],["/tags/Lenovo/index.html","6edfd97c38fd9be2ca1c1005dea6a7ae"],["/tags/Oneindex/index.html","bdef7f11b2951ac679f2fafb9702be3c"],["/tags/QQ/index.html","88fd0a96ff3aab76ca6d5d1ca5078717"],["/tags/QTTabbar/index.html","d1e441c20746a389100340032dd8cced"],["/tags/RX文件管理器/index.html","c0075313377a3ac468c80fee96d89821"],["/tags/Todesk/index.html","dee349ae2829cc3591c14a33cca790b3"],["/tags/Vercel/index.html","f06266a904a35cee7960bae478149739"],["/tags/ads/index.html","f8d1485ce1a5e6d2f985c612c8af03bb"],["/tags/api/index.html","969207240da9d41173ae131650eb4acf"],["/tags/app/index.html","430a96eed42ce7a7a789e5b10004abee"],["/tags/blacklist/index.html","5e38609759846bc08ea3fa57d96a2b99"],["/tags/butterfly/index.html","88cbf4ce1f450278144d81a42a0667e1"],["/tags/chrome/index.html","3264a3a867bf293497632bf9bbee3592"],["/tags/cloudflare/index.html","6160d84a5db686cf81b4b03ef4688220"],["/tags/cmd/index.html","7020ba79e51bcf0bdd3af08aad734756"],["/tags/c盘/index.html","c5cdaf989bad72c3ca5f21fd857f4eec"],["/tags/email/index.html","47e98988d75882d2ad67df27fc4b139b"],["/tags/ewomail/index.html","4c9a6c4e7eb64656139cc0dc268a84c4"],["/tags/fiddler/index.html","0e265da23d6be86bb1e4dcad431b1923"],["/tags/flags/index.html","147dd1a00b572ae05e1d2eb0cf023a2e"],["/tags/footer，页脚/index.html","b98d5febfab8f51e54ff90c26651f4cd"],["/tags/galgame/index.html","2fa97d50b9f80a97c5b89af28c84bf58"],["/tags/git/index.html","0c7f62e1c6e5f177702a30a4fd2caee2"],["/tags/gitcalendar/index.html","656fbcf1ef4363a8b30ff3bbc9f3c3d9"],["/tags/google-voice/index.html","763831e34b2b1cdb64c89990d8c5e3a3"],["/tags/gv/index.html","87e7269483c878c537f493b2ff97e071"],["/tags/html/index.html","fab1d1ab3973b63244dd8dc7c1963fa9"],["/tags/index-1.html","bf930b3f4df5c17048cf0759a3d56c3a"],["/tags/index.html","81058557725f2e256127b315c7bccef7"],["/tags/js/index.html","8356cd07743cb97e2cadf1c0868725a1"],["/tags/jsdelivr/index.html","ab39147e9384e088d8df1b642ed63681"],["/tags/linux/index.html","e69212b17761dc0471e5e19fba2e8053"],["/tags/madVR/index.html","bdaf16fdac1e79eec80a7f5c900b51b1"],["/tags/markdown/index.html","63b4311b5e825490b22ac2f0b45f7b9f"],["/tags/maya/index.html","a145a3b30bafa1f3134c8a34f50f6ca0"],["/tags/mklink/index.html","4035eeee415a50356e8b66d17a053824"],["/tags/office-e5/index.html","ff97e8553bb163e0c05a2b79fc203b08"],["/tags/onedrive/index.html","a6a7ae027cfd13fbfab4456bfb74e6ac"],["/tags/picGO/index.html","d9fe21e57ebd987db6f51f9edf533658"],["/tags/pixiv/index.html","a01fc434c606e9fb6e225e770756013c"],["/tags/potplayer/index.html","f3ce14eaf814636d547ec1e35b39a658"],["/tags/proxypool/index.html","ca910092c9cbcdeba06a0f9b7955b980"],["/tags/qbitorrent/index.html","b705099b82161100a6fc7bceae266d1e"],["/tags/raidrive/index.html","f256b780f8515b2d3115fadfeb91be79"],["/tags/screen/index.html","c665122a1e34c43ccf0dee7c14115651"],["/tags/speedtest/index.html","3ea297db1a40415a6c039da24ceec91d"],["/tags/ss/index.html","9ca21064186e92efc1187fb0e377ebfb"],["/tags/ssr/index.html","17731fa98b93cc349182f06265ec63d4"],["/tags/surfboard/index.html","8f2ff0e218f93ba0a0e20f5f4b7f38f2"],["/tags/tap/index.html","e7641a9bd59255696af75b5bc7b8a4e6"],["/tags/telegram/index.html","8cd9d85ca0b00e4b0ebdabb29aac0de3"],["/tags/telegram代理/index.html","f76c307ca4fed7b0e12a042405660b11"],["/tags/tg/index.html","0a5877658e20c142f75250811ce43293"],["/tags/tg代理/index.html","062d942f9d4913746d4adad47b0535f7"],["/tags/top50/index.html","9159c40dfbbf66a13d30666713a79059"],["/tags/tracker/index.html","2d5a41ee79b58a36e34778d87fb9f5e2"],["/tags/translate/index.html","8458b33eeba3dfa0b95888316fe0d6cf"],["/tags/translater/index.html","c2b252c857c7a17b3c75967527862fd2"],["/tags/tun/index.html","2e24bd862d0485afd6ce5435196ff879"],["/tags/typecho/index.html","5bc7caaf741d9ca91513758dba4a9fdf"],["/tags/v2ray/index.html","887fa6931137700b297df4de081aa38d"],["/tags/vpn/index.html","ef695eb7330bfbbdae239124f6c813f9"],["/tags/vps/index.html","53b75dfcd96fae3a5254a305eaa8104a"],["/tags/windows/index.html","73235ffb4ad608ebd485f340051db4e2"],["/tags/windows端/index.html","d4286a33b86aca6879589aea6398701d"],["/tags/xray/index.html","ef1f8c664519be5c126c179227d6fd11"],["/tags/下载/index.html","6d3aec0e84cf6498bd287a3c36158006"],["/tags/不限速/index.html","13d5292d9d5cfeb004f3c420342c1176"],["/tags/个人网盘/index.html","881af285bff1f8e85595dce8a802323d"],["/tags/主题/index.html","a6f460bea66e6865344ceeb46753819b"],["/tags/云便签/index.html","ad9181dd47ac7168ba67d5926ec6d241"],["/tags/云盘/index.html","3b7587968bbf6be54aa07fba88259919"],["/tags/人人/index.html","864500adc063567dc6358c2ab0f289c1"],["/tags/代理/index.html","9ca7745f5c719eefec26f35b4f7fc621"],["/tags/代码/index.html","45c4f260c900010bbed44369abba7adb"],["/tags/优选IP/index.html","3909da32dcb278131b056088561bd275"],["/tags/便签/index.html","91f92b212e3519869da2b920eb4ac19f"],["/tags/保号/index.html","39ffa0e50dafa35661dbac4262ed6465"],["/tags/免费/index.html","079441c4d256e89fa0ed7c67f39d01de"],["/tags/免费节点/index.html","64abfa0fd670fc1be2f32a455fb27bc4"],["/tags/加密/index.html","5a93a6d64c7fe6a575ea1ca6435a5acc"],["/tags/动画/index.html","ed5322ac47c080d0fd20d6fd38875ba5"],["/tags/博客/index.html","5b333a2680033598064e260ee6d01c08"],["/tags/历史记录/index.html","3668d143b21f4690aa5103b65a2b9a5c"],["/tags/压力/index.html","fd564e5c8cd71c23e617200c000275df"],["/tags/压缩包/index.html","c01d181f513788c3022cd4ea9b020a2a"],["/tags/反代/index.html","37a24b483751245a9c3060b9a1e1638c"],["/tags/可视化/index.html","97b687912286f0ab328a9e644a571ec9"],["/tags/命令/index.html","1818d98a6add38301e6aba2112d75b86"],["/tags/国家/index.html","fb9651ba7e5858f47a9938fc9a31fabd"],["/tags/图床/index.html","48aa31e91e20940d96f41fabecfb5f7b"],["/tags/图片/index.html","d431b18ac7d630b1cc68a399dc85e9d1"],["/tags/域名/index.html","02a296df8b93932f4e42ea633f8f8301"],["/tags/多标签/index.html","fa1bf5c1532aa8a11cdaad6fbb2a766d"],["/tags/存储/index.html","65ce64b1ad28668330293f23d7eb9731"],["/tags/学习/index.html","2940996eceade40ff1d4999cfee18780"],["/tags/安全/index.html","d01e81249e49a2746a70b61e73a433c8"],["/tags/安卓/index.html","263dc33d4034162ef10ef6eaca99044d"],["/tags/宝塔/index.html","d59e237d47ec28d7bcdfca30982ca2ed"],["/tags/小游戏/index.html","9300ca9f2d48d3bb78101167925076ff"],["/tags/广告/index.html","e6980c52206fbdf8993e32f3d1bd8f12"],["/tags/建站/index.html","012aa5e96990346514c31e168d1ccc0b"],["/tags/影视/index.html","022391812055c92700e7f2c08e1f6f64"],["/tags/快速启动/index.html","d61c8b55a7834a916ee8c74d8a8d2c9a"],["/tags/手机/index.html","d617e86be0d58842bd944ad572acb005"],["/tags/托管/index.html","8dccc41420a329a3e726063c1ff887f1"],["/tags/抓包/index.html","2fcc17db4fc356b91d22bc4e117451dc"],["/tags/抓取/index.html","9579b0d3d99a6ef307cd58e8c5f44388"],["/tags/投屏/index.html","d624411846f6475544cf0b6b15b5123f"],["/tags/拓展功能/index.html","bd1c07417ad3683195e3532bd34b8d55"],["/tags/挂载/index.html","e01809e2aa38196cb7975e55fba75fb7"],["/tags/指纹/index.html","5ed0a514a3488b9cdbfde585b288421c"],["/tags/接口/index.html","dcc699fe5243c82dae98b73eff8d1bb1"],["/tags/提取图片/index.html","8cc4079b12ee67277cbebae439e335bd"],["/tags/插件/index.html","f6b5f29ab4e7b0f9b2a8019d3754c5b5"],["/tags/搜图/index.html","0acd6251aa0f2f0f5125ebb31c310004"],["/tags/搭建/index.html","39feb5d9cf80ea333aca27533ba29847"],["/tags/撤回/index.html","f8d9876a79ae462e9b8b2fa9607aedb3"],["/tags/播放器/index.html","db19263819399bca604bf5fbc4e2c8f5"],["/tags/政府网站/index.html","aa2e05694068eab0dec05616390f7894"],["/tags/效率/index.html","9c506fc07c570e27c1a9553ed77b797b"],["/tags/日历/index.html","c2f5e2c31d6c09e77a336da9d1a62df4"],["/tags/服务器/index.html","62a28caf83d3ad0cd0e968172b20f970"],["/tags/机场/index.html","dd1c20455737f0869bc9ac661a797963"],["/tags/桌面/index.html","f3cb27a5f4e31d8f9d663f3c8d4d8f45"],["/tags/梯子/index.html","bd92e430993ad7e1e55c99ec811b3974"],["/tags/检测工具/index.html","d265f93613f5662fb4536a5edc8c9bce"],["/tags/汉化/index.html","15b088be5210b4cb045bc32b1e2ea0b5"],["/tags/测压/index.html","9c45755361d436bfa27753303d343ca2"],["/tags/测速/index.html","6d31c9f964d737933b9aa6a8fc8bb4a0"],["/tags/浏览器/index.html","1dea6d08e5ab9be02e1cd81e4b284f9d"],["/tags/清理/index.html","a05ad4a275608776f0be19bbf1999eef"],["/tags/滚动条/index.html","d4ff52d5e275703a881b0678ace6c090"],["/tags/灰色歌曲/index.html","a6c547a2c49862bec5a4f5dfc1b9d215"],["/tags/电影/index.html","c39adde44e4d351756dc101b04656c1d"],["/tags/电视剧/index.html","933f34a092b735acfbfa9c86444c578e"],["/tags/白嫖/index.html","5a1ae21cbc7427b79c3a4b65c8aab09b"],["/tags/百度/index.html","6bb5689e6355ade7661724c63e137aca"],["/tags/百度云盘/index.html","a14a5c972c58380cdf1793456f906d8d"],["/tags/百科/index.html","10b450188ff10e795b4f4369e669dd71"],["/tags/短信/index.html","fb4f6a678c4a1ca35c4a9c60313f197f"],["/tags/硬件/index.html","eda2cd31a9da7aaab705f00c881328b2"],["/tags/科学上网/index.html","18e677ef7e44763995a055a9863be05d"],["/tags/空间/index.html","61c08ca856d188b23b597cc1723de389"],["/tags/笔记/index.html","6bccaf0a3182239d435d4b990d4784b7"],["/tags/简洁/index.html","e6eb239858ad0f2622e2b4fa492ba75a"],["/tags/简约/index.html","0c41cf490e26c9a12502425b351f5793"],["/tags/维基/index.html","c4fcdd64dcdcaea6a59b0433b709f72f"],["/tags/网易云/index.html","f361fa7325508f1fee64157145db74ad"],["/tags/网盘/index.html","7a1537c5a57ba0bc9d4195fe46b70a70"],["/tags/网站/index.html","5976ad82ff5671c8dfeaecefafe1c7b5"],["/tags/网络/index.html","ad265ede9b7142939c6a56686b0c2a25"],["/tags/美化/index.html","102011381d6fb642c593a33e4d458cf3"],["/tags/翻墙/index.html","c1918d3a0387db835a3adab6a2ed2c75"],["/tags/翻译/index.html","3abb5502d8c2ff510c86987f2c0ed644"],["/tags/翻译器/index.html","e960a71d61c82601efa71d3a5b606aeb"],["/tags/聊天/index.html","4adcab2a2be99afa42a3939be8ff97af"],["/tags/聊天室/index.html","93fe253ae83a21cbda2d67aa16640322"],["/tags/联想/index.html","cca56705b1ff78214009c697bdb078aa"],["/tags/节点/index.html","2944707916a7df66694510e8a22fb61b"],["/tags/虚拟手机号/index.html","9e044236e228b2f4d5882b4b69180c77"],["/tags/补丁/index.html","6701267f917509dfc2214e125198936a"],["/tags/视频/index.html","5326c00d6e7e0e8c395486e7d203d503"],["/tags/解析/index.html","0eb68480e80fbe3e3d0b5c6b9fc33ddd"],["/tags/订阅链接/index.html","921c7fd034c970bd3150849661d33247"],["/tags/记录/index.html","1f5cd7b4a68a3b109a32b3a9b22e81e2"],["/tags/识图/index.html","039352efb06eb203fa52298e44e8904f"],["/tags/语言/index.html","5872ea1f2027962493e65346ee8d2a7b"],["/tags/资源/index.html","08ea1ef9737f52c2497942ff177ab146"],["/tags/资源管理器/index.html","7d16d244bff7ea813ee90f37e84330ba"],["/tags/转移/index.html","ed8d1d7e14eb543e88aa5763583a8c74"],["/tags/软件/index.html","2569dc97e335d7da0e9f2ce986bfdb56"],["/tags/轰炸/index.html","4d32f58d0fb944d69bbdfb91a5102350"],["/tags/迁移/index.html","eee31f5b4016694f7b4bfc96d82ae490"],["/tags/远程控制/index.html","73d674a3970c117d34413355a6ccc916"],["/tags/连接/index.html","174ba0200f6c92694d2a6077c98cce60"],["/tags/追踪/index.html","ed942d94a089d163433a8a7d829bc1df"],["/tags/速度/index.html","0c3ccc3dd97616df79400d3e751ebbd6"],["/tags/邮箱/index.html","7967428e190ded44eb2b48563f5c0b40"],["/tags/酷炫/index.html","06309de2f8a241e35bd68969de13da4f"],["/tags/钓鱼/index.html","c410e00d45658f596753c1ec6845abba"],["/tags/镜像/index.html","8f760f6c59cd8be2e37af0f16dc5a660"],["/tags/随机/index.html","b788958be60271c34a886b4a91c46d97"],["/tags/隐藏/index.html","38455c05d7321e1c0b07c6372d035f2a"],["/tags/面板/index.html","4e69c4e3b58d45ed821d21fecf335bf0"],["/tags/音乐/index.html","35c396704537547f010dc7bf64f99b83"],["/tags/高颜值/index.html","6a999604c567cb0b0fef8679e57268b3"],["/tags/魔改/index.html","9c579fe6fe0e3800954bcac49a6087a5"],["/tags/黑名单/index.html","4a1180655c8a00246ea7c32e949c30a4"],["/urls/index.html","1a970cebbfc3dbd5c263dbe319d5710a"],["/vps/index.html","693209bed9c754b5f55e6ca9c7fee668"],["/支持/index.html","179d5560bf8b0878d3e383b6c0ab5593"]];
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
