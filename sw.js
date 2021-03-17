/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","33caebeb043d01cf161aba4cdd24d5e6"],["/2020/11/29/clash-windows/index.html","9aff28f3897c0dcf2299d3066cdc1b74"],["/2020/11/30/websites2/index.html","9a440b5950a4d9dec4020172de28c734"],["/2020/12/04/iphone4s/index.html","6c810b6e0601e5f3029ddd0076438f9f"],["/2020/12/04/onenote/index.html","16e6388061925db1305f33d253afcaa5"],["/2020/12/04/wesites1/index.html","3f61bad8bc7c8291a013304a98e381d8"],["/2020/12/06/nokia808/index.html","cf2b00d07435d926df96c61423c0f977"],["/2020/12/07/ipad1/index.html","1de1110a964f29dee545035245b8cb0e"],["/2020/12/18/freesubscribes/index.html","3d0feb14b51d6a926820e7138164595f"],["/2020/12/19/musics/index.html","51922dd7c9f4704bd8e9a358c6f86e4e"],["/2020/12/19/shadowrocket/index.html","e90a93d48af6aad85ea1f3f183119286"],["/2020/12/19/v2ray-windows/index.html","0c329092171766569e8373d192083760"],["/2020/12/19/v2rayng/index.html","0c93b0f3a366f009544d04e92a213c5d"],["/2020/12/20/beoplay/index.html","f9873329e3b403cc34a5371c78d074d1"],["/2020/12/20/订阅链接转换/index.html","afc9eee578ff78b6dcdcf19a399afcc7"],["/2020/12/21/chrome浏览器下载提速/index.html","02e8694dc3eadfde1afcd039c412c939"],["/2020/12/21/免费128线程并发下载xdown/index.html","0ec65cf38b9ea0ed680c704f65f58500"],["/2020/12/21/免费32线程下载软件ndm/index.html","aafbab04a39376f3169a477bc4698af6"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e5121503a19661236eafd7d20b8ac901"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","385ce2108898d33a1aa86f677bb6b2e8"],["/2020/12/21/广告怎么知道我在想什么/index.html","7bc9fd81d00c84342a264e76e645ad56"],["/2020/12/21/无名·引子（小说试写）/index.html","37c4322ab2c7d3130cb16646a12032ea"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","ad3d356e1883b7da5e53ac7dd3004fd1"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","07e5a2077e9b20192d0f1d5a6d451089"],["/2020/12/21/高速轻量下载器aria2/index.html","deae3f2af97269bb1826fbb4728e407a"],["/2020/12/22/2020-cee-roo/index.html","b1d875b1240f83854a5645586f642033"],["/2020/12/22/firefox插件、github、steam富强/index.html","19b65acca950d03d6f09aae342ad47f3"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","1b2dd81f9092d34a1cfe08d472211648"],["/2020/12/26/python-day-1/index.html","a504115bb6c86fa47727b2204f6713fc"],["/2020/12/26/python-day-2/index.html","bffac0d15260e9b3480f24653a3b1e27"],["/2020/12/26/度盘不限速下载方式一赏/index.html","de08980e540876570c7633ccaa78dbdf"],["/2020/12/26/添加开机自启软件/index.html","2d7d5f8e123b7ae123d63991ab82766f"],["/2020/12/26/电脑端截图方式一赏/index.html","ee7bbb0c308c407857b22088d78d06ea"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","705960f16a6d783467996094a8ef81b6"],["/2020/12/27/最安全的浏览器tor/index.html","a208865da92bb95da7d7a484afceba0e"],["/2020/12/27/网易云刷等级和听歌数量/index.html","92b96b2aeb602d3c0ec5469c23a201bd"],["/2020/12/28/freenom申请免费域名/index.html","a59a91df2148e91ee6e933825928cedc"],["/2020/12/31/机场/index.html","8db6797f1275429f97944eadf0cc5082"],["/2021/01/01/M1/index.html","d72e35736b9c5fc2589c78c4cf55f23e"],["/2021/01/01/compress/index.html","bb1533f3c39b00dde07cbe6f0b3b5d3c"],["/2021/01/01/infinityfree/index.html","e05a07a2c0058d5a5d01d61a70166511"],["/2021/01/01/硬核翻墙/index.html","2a7933ff0364626142ddfe7e330ef69c"],["/2021/01/02/qq/index.html","3a1f06d28607fb9144bc8f3b9a3f8839"],["/2021/01/03/netch/index.html","6b6cfcdc764df7cd83b6156be9c373fe"],["/2021/01/03/waifu2x/index.html","b4d981083ff5f3a475734e3a5fd2153d"],["/2021/01/04/ads/index.html","78d81d7be7163a63ef88fa49ad8eb7b4"],["/2021/01/04/games/index.html","b3eb7095142271e7bd183c709a1ea174"],["/2021/01/04/heroku/index.html","b8d1bc9ba92e9771696c9abee55af39a"],["/2021/01/06/movies/index.html","833d67ed65ef866a4d6b2eecf6a949f5"],["/2021/01/07/google2020/index.html","010307d25c0692d283b976061abce63d"],["/2021/01/07/lucky/index.html","b7ec3dd398c8935704c400db8207a7f3"],["/2021/01/07/spotify/index.html","d0df2d20988598f4a022dcc332659bd2"],["/2021/01/07/thunder/index.html","c13a18af9e59cf93edd7fb6450ba6ed6"],["/2021/01/08/adguardhome/index.html","75cd4c96a7d599d33958b6da7b990d42"],["/2021/01/10/IBM/index.html","995c22ac0422ab924c72fbff0266439a"],["/2021/01/10/potplayer/index.html","a30c24cffcdc265837eaba273e7d82f3"],["/2021/01/10/sakuraanime/index.html","87c5d7c7060790a0adb82ad177f4925b"],["/2021/01/10/美剧星球/index.html","d0396d52a1af625cb04b13dc710cd38e"],["/2021/01/12/telegraph/index.html","62daa3f4673518c5ef76551994d41e9f"],["/2021/01/14/comics/index.html","fcefea9e4a512e1939a1964453ade281"],["/2021/01/14/ftp/index.html","90c891c5f3eb6f4fa6a5637260b27ed8"],["/2021/01/14/oraclecloud/index.html","850f73d5b050a3f7cabba35c43766c40"],["/2021/01/14/porkbun/index.html","3daf70e341b867ce73d5c8798590c57e"],["/2021/01/14/powertoys/index.html","b2bee8bbabb7f7b293a6b6eb9eca8c0d"],["/2021/01/14/taptap/index.html","c36dbc686b96d2afce107840cb961487"],["/2021/01/14/ubuntuvsftp/index.html","a129b85c9fdea23f96795d2a604eba5f"],["/2021/01/14/小说/index.html","098a81f85579b4b1eb09945a591d1651"],["/2021/01/15/freeproxies/index.html","37f1cb610b8228ae57b07d13d009c225"],["/2021/01/15/incaseformat/index.html","5c5c1b14b2ca6598d234caf12ec6badf"],["/2021/01/16/euserv/index.html","0e959d179fc4532de8f06a3cf0a554ef"],["/2021/01/16/winxray/index.html","0fd530db04983861ef54efc2b5a9f885"],["/2021/01/18/qqreadhistory/index.html","d7138dbe3ebe1746fcd54996a597af5c"],["/2021/01/18/qqrevoke/index.html","568eb9001a9e7f4ecab2d95dd4899540"],["/2021/01/19/freevpn/index.html","5ef21954a399ca9cfac622e6f27f2d9e"],["/2021/01/20/browsertrack/index.html","9b31af86e5ca9693d72cdbd282d0b634"],["/2021/01/20/v2ui/index.html","c967c1cf91d2f3f260052733bb2e9911"],["/2021/01/21/failedtoconnect/index.html","7aca2422c4411b095f20d340bc2549d9"],["/2021/01/21/gitcalendar/index.html","b383bb72039aaa726be7070866c126df"],["/2021/01/21/markdownformat/index.html","faa4a7c5eb852f86ec4dd153c7be2a9a"],["/2021/01/21/markdowntable/index.html","c90c3a12c79489b051b1228d647c6c91"],["/2021/01/21/vercel/index.html","3a655b980c09db183354df4462aed9d6"],["/2021/01/22/hardware/index.html","b32b3344d1395398cd1b430c64db43c5"],["/2021/01/22/muviz/index.html","c0dc3a8f0afb3420a15ca4c34e380296"],["/2021/01/22/randomapi/index.html","d27c5bc0f5acb1ed898f54eee5f402e6"],["/2021/01/22/searchimages/index.html","b61b38e8c50550a581f2ffeb8cfcfaec"],["/2021/01/23/RX文件管理器/index.html","03fc72b9fdbb49f1bc2ab2321ee32076"],["/2021/01/23/chromeflag/index.html","f1aa1c313fe99d9b60ff09f5bae1af69"],["/2021/01/23/qttabbar/index.html","bfcbce75cb1f92e3393b681091f66571"],["/2021/01/24/githubspeedup/index.html","53140d1e1d9ff600ef22411712fb36da"],["/2021/01/24/jsdelivr/index.html","42094519852214ff182d5df777f54406"],["/2021/01/25/note/index.html","738a3c63f510b74a50c3e3e9b2dfc1a3"],["/2021/01/25/soul/index.html","bfcce0f3fc32d3fd1f88eb5bb2d8f2f3"],["/2021/01/26/herokuxray/index.html","a0e2e50d3357fa8f1b34e2da3aa8fceb"],["/2021/01/27/proxypool/index.html","bb7e885ab5f474743e69d840692c4c63"],["/2021/01/27/tracker/index.html","b7393bacc64ad4b8e0a897e52b8d53d3"],["/2021/01/30/pandownphp/index.html","10ef35ae68b5c011c26cef20d4640bef"],["/2021/01/31/newgroup/index.html","4747cc80670fe6e00dbc20825673d194"],["/2021/02/01/clashlanguage/index.html","74dbab77e24281d00184dbff522e7706"],["/2021/02/01/encrypt/index.html","a23da73bf36612e01cf714940f2e2de1"],["/2021/02/01/footermotion/index.html","8a579c776d725253e0847923fce25712"],["/2021/02/01/gitter/index.html","a4362df0c6f817f8a121f2b3811a944f"],["/2021/02/01/pixivtop50/index.html","4b24a96e9674dcafe251e3542652b015"],["/2021/02/01/scrollbar/index.html","8ec0ffca156788eef496f07ceabb7df6"],["/2021/02/02/clover/index.html","8ad1aeab7042c96da045aed1a33a092c"],["/2021/02/02/maya/index.html","1cf29060dea1eb81d5e9641078d88f0d"],["/2021/02/02/speedcontroller/index.html","60e35df11584f346853590f76c000dff"],["/2021/02/02/yesmusicplayer/index.html","76e6f8a012f2bfd117555bdf47b52128"],["/2021/02/03/lenovoonelite/index.html","4f318fa752e1b71a4a144dff883f86ea"],["/2021/02/03/skipads/index.html","279a4d01680820169e38e710e87c1042"],["/2021/02/04/picseed/index.html","29101cea7074dd5436e57655e6da7f1c"],["/2021/02/04/renren/index.html","25553f3731f13a712e9c6078c217549f"],["/2021/02/04/serverstress/index.html","6bbe5c599e5d0c05147d94519a2cc0ae"],["/2021/02/04/wikipediazh/index.html","10ed8272317c472eeda74a3e9e91be41"],["/2021/02/05/googlevoice/index.html","66cc486d3a5f313ea8706ab0d08c0536"],["/2021/02/06/clashconnection/index.html","61f7fded79fc9580320e07d31dcb5556"],["/2021/02/06/gvtransfer/index.html","a26e39cfb4c5bc5fa78e65b883838dd2"],["/2021/02/06/todesk/index.html","6a816cb3ceebd11d8657001c7967b826"],["/2021/02/06/vpnblacklist/index.html","e13be5f18681216c1f924c4d9e0109ca"],["/2021/02/07/mklink/index.html","e6f73ef37f5377dd3bb2bfdc64e3c780"],["/2021/02/07/speedtest/index.html","85a2dc6bc6841df8e05c62f2cc52b7fb"],["/2021/02/07/translate/index.html","04a86a3b02322092a8163a1c7033dddf"],["/2021/02/08/ewomail/index.html","6d4db31ee3148675d76dd04bd1109a3e"],["/2021/02/10/officee5/index.html","1937e411566a3ccec11a64bd9884caec"],["/2021/02/10/raidrive/index.html","dccfebc3f8c2287a8d7962d5927b74c8"],["/2021/02/13/e5sub/index.html","02e6cc8ad96f8515ea43cdebda3a5dbe"],["/2021/02/14/screen/index.html","622e418226b8bb05f3800c97c5152e2e"],["/2021/02/15/clashtun/index.html","f947f4f56b9ee90a1210900d5b0690ac"],["/2021/02/15/messageboom/index.html","3f414a16c3fa46c876b703600baf96e2"],["/2021/02/15/oneindex/index.html","0daccdde4d6f34cf23c51bf6474cd634"],["/2021/02/16/govsites/index.html","1d3debeac529c5be21ed89cb9d1a1357"],["/2021/02/17/hexototypecho/index.html","8d7eb9c9407c43c40f66224fae00f62e"],["/2021/02/19/fiddler/index.html","a88308288df61ba0bdbacfa7db91e18a"],["/2021/02/22/potplayerset/index.html","2b071017f84a455a7c1d187260b10dc7"],["/2021/02/22/studyresource/index.html","d1d618a0ceef75eae4b7186ff954639b"],["/2021/02/22/telegram/index.html","f7eafa315ffa424a08c10d3bfa87784a"],["/2021/02/22/videos/index.html","1ee21c78486547a2de0d311744c2263a"],["/2021/02/24/mtproxy/index.html","7e836efd6df3e98229cfe9ac665fe1e5"],["/2021/03/10/catchcat/index.html","5b17e03b24e5fb1160b8a92c6d1f5138"],["/2021/03/10/neteasemusic/index.html","42a735e59eefd890bc40f0fe2e8822a3"],["/2021/03/10/surfboard/index.html","c2df692bb5d124c5d480711d783d7c53"],["/2021/03/11/vpnandjc/index.html","c0fb7c8b88d9646abc0928b95e4f3a24"],["/2021/03/12/qrcodes/index.html","091df77e1321ebedba8826122d02d71e"],["/404.html","9dbcd217917820d1200842d3f345ee58"],["/archives/2020/11/index.html","04867765bc7c0b97e71b389180e82046"],["/archives/2020/12/index.html","b582872ef99017a9e5181ff395e339ee"],["/archives/2020/12/page/2/index.html","5e5e4d41a7f500e59ad54272807ed52d"],["/archives/2020/12/page/3/index.html","df7b0af9586d6a159a66696adf0f9baa"],["/archives/2020/index.html","374f4695553f45794302ae35b6941a12"],["/archives/2020/page/2/index.html","2d70cd28150965941322ca053237c65b"],["/archives/2020/page/3/index.html","a3373ca7b0069becf061466f61d9f40e"],["/archives/2021/01/index.html","a57763b984ba3f7fd8788374b945a7a0"],["/archives/2021/01/page/2/index.html","fdba1350a997731bfa7fcf9b1185b3d0"],["/archives/2021/01/page/3/index.html","fa65dc644f273308e98fe12f69660810"],["/archives/2021/01/page/4/index.html","9d91a96129137c966b63c710c2fe8042"],["/archives/2021/02/index.html","58eef6fea245467e510a7bc74f5ea3f8"],["/archives/2021/02/page/2/index.html","525605b5bfd764d149c8032993236db6"],["/archives/2021/02/page/3/index.html","384461b7a90fe64c9cc10fcd5b8d915a"],["/archives/2021/03/index.html","ef5e7b09efc2a4f77f0aa6edbe328e2b"],["/archives/2021/index.html","e0e451b68566b3220b99171a216bb36d"],["/archives/2021/page/2/index.html","219dc950636356ad0d775a60c2991c8d"],["/archives/2021/page/3/index.html","ae2f52ef3c466a4cb6a80d32c95b27e4"],["/archives/2021/page/4/index.html","3ce8b0068bfc77329cce552c91f56848"],["/archives/2021/page/5/index.html","9d98a6fd0b2e0ce758ab64ce144c8806"],["/archives/2021/page/6/index.html","242b2744729beba78401e6aa2858baea"],["/archives/2021/page/7/index.html","6efca4bfc17f2f7dd03065beb3a6ff5f"],["/archives/index.html","ad27ec9a39c3a9444153c8373f6c6722"],["/archives/page/10/index.html","11bb39bf9c04e61bdf2e5ed09bcedc14"],["/archives/page/2/index.html","25ec50c4b964f249f73db322f8bf7696"],["/archives/page/3/index.html","f6b7c19eaf1909b01cf364ebbfb18dc5"],["/archives/page/4/index.html","cf9103016f7c0bd1a25a268d1339998f"],["/archives/page/5/index.html","75bec5f59e5871716cc55eb0ebff3397"],["/archives/page/6/index.html","e691efc2b44e5c3f66d7cd4c996cd48c"],["/archives/page/7/index.html","8a8423692d532224905e7303cd4f13b8"],["/archives/page/8/index.html","8a483c05082bc40dd8ac06e38f2299ff"],["/archives/page/9/index.html","2813d463cf006dda41fe867c716baea6"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPN/index.html","b8fcbbd09796edf82b8a745325d272ff"],["/categories/VPS/index.html","aa235b2d3b417e0c876c1e584853a08b"],["/categories/index.html","848a3cd3287dc62d5a2f043e2e632afe"],["/categories/下载/index.html","9cae020a473b52388a848ff3d68d6807"],["/categories/安全/index.html","50e581e921400a1794a3abade2e444e5"],["/categories/建站/index.html","4dee9736853ddf5b329a540d4984f32c"],["/categories/杂/index.html","5a75692d08e001da532e7abf2b4d3556"],["/categories/杂/page/2/index.html","ab28bc616972e5b364ef42165010e05f"],["/categories/测评/index.html","2671f359f7020afe695c9461c610b954"],["/categories/科学上网/index.html","8a85eef85e4d90010862637fe0ca9659"],["/categories/科学上网/page/2/index.html","f89445fe3c9305e5873cbc2d5f2f9c46"],["/categories/编程/index.html","25e51caa020c687798fe84d47b2b0fcf"],["/categories/网站/index.html","d59b8c072c2798dd41d9365f9c4387b9"],["/categories/网站/page/2/index.html","ce1a5ba823f9958db8dfd649a4af496e"],["/categories/软件/index.html","6f224add4ff1961afd9b4340c37deeac"],["/categories/软件/page/2/index.html","89a6cd85ee9ebc6c024c92fae0529263"],["/categories/软件/page/3/index.html","343ddcdcead427f74e373cde721de168"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","ecba4d5a48a8edec0950439e7c7dc5fb"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","da6465e76dc6e78fcae43100f4749d7a"],["/ios/index.html","70ab9874b889bb0323980bb42ceb2d48"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","d635109ac55673ffb8c3d64b38a4af1b"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","6837211e6e039aa06f4e5958bd5ebe00"],["/page/2/index.html","412015e955ffe0deec049a7508e6169a"],["/page/3/index.html","e3ce0b04a6b035b6eda30abf30fb4f73"],["/page/4/index.html","afc1365d07a40d461b87494e01560c3e"],["/page/5/index.html","8de4aeb5e31bf78de3b7f47656d49ca1"],["/page/6/index.html","49514711bd6f031b17e48add12b21d66"],["/page/7/index.html","f7e0d1f10dcdb2c911ad85887f4d4ca4"],["/page/8/index.html","8dbc24e61d27bdfaba95bbcfa3191497"],["/page/9/index.html","0570ec7aa31075fa35b272e53911ec2b"],["/payment/index.html","e6efddb65e9ad55f410b3d6b8cd88482"],["/privacy-policy/index.html","86acad1a2ca37621e3f5ecc415af3749"],["/rss2.xml","11373d517f10e45eeb3f129418cfcaf6"],["/search.xml","c545bb03217f26883373b5c0940ccf61"],["/sitemap.xml","9a4f440bf21096595fa06b9abdd473dc"],["/sw-register.js","081b0e282bbafc367b34cf779c3d04b2"],["/tags/5t/index.html","0455b2d3ef34dc376c4dcc90dc2f716e"],["/tags/Clash/index.html","8d9f871b1b0b10e63a12ce1e4820cb92"],["/tags/Clover/index.html","786d438db84e42ef31ce91bd791af71d"],["/tags/E5/index.html","d250fd9b1b03f6abe53166474c5b0ccf"],["/tags/FTP/index.html","563e486b950ee6b7618a4a2df04bc74a"],["/tags/GitHub/index.html","f726be58f4ad113e944a0dff63f0488a"],["/tags/Heroku/index.html","c4f189d8d36e85bc8b658857ff8e2f88"],["/tags/Hexo/index.html","642c47fa191c1361bb49dd1db00e3e4f"],["/tags/Lenovo/index.html","67937087808093a879b0903524ede450"],["/tags/Oneindex/index.html","ccff760912de1cc4b3a473de129685e5"],["/tags/QQ/index.html","14d191d586404f36b103d1b4317eb8e0"],["/tags/QTTabbar/index.html","d85db0740bc71b8565127923d7913dda"],["/tags/RX文件管理器/index.html","f013f2b7eb483c51c54ce40353ec1f83"],["/tags/Todesk/index.html","bc58b43e15d8b9613e9f2177c77790cb"],["/tags/Vercel/index.html","d2cdf14605ee073e915681a5ae0384a2"],["/tags/ads/index.html","96d24f72a9587a584623be103af53590"],["/tags/api/index.html","cec87ba6d4b2e7a91a9a2bec86972081"],["/tags/app/index.html","7b62a355320dd1caf45c12c49d55f667"],["/tags/blacklist/index.html","a9955ee812773f9b8dc059e1d7f60ac4"],["/tags/butterfly/index.html","6a700e7b81283c329e80653ca58badcc"],["/tags/chrome/index.html","590cfb1ed4dd15a05d1001b035989b62"],["/tags/cloudflare/index.html","dbe69f70220e6fd16db48749d84f9472"],["/tags/cmd/index.html","53e9a59cfd46d7de83bd3ef46c760248"],["/tags/c盘/index.html","327123f7b549a7bd3d0e5df5f317faf5"],["/tags/email/index.html","28d2b149daf91f73d1fba5e7bddb33fb"],["/tags/ewomail/index.html","89faa0d9ccdaf38ee5892ca1eed77d23"],["/tags/fiddler/index.html","c3d04c5e869f4eaa75efea49365822cc"],["/tags/flags/index.html","06b02f2cc3d98a6e253a5ef02c940080"],["/tags/footer，页脚/index.html","52ede0feabc866f4934ca63c88bd80cf"],["/tags/galgame/index.html","2b6a2dfe2ff15938945a3cac977d203e"],["/tags/git/index.html","ee119bf25dbf235fc37bb2b5ddc659bb"],["/tags/gitcalendar/index.html","60895ad92f0eb12108d478d5032188cf"],["/tags/google-voice/index.html","744d7c51d942efe86f276840a0be4ee5"],["/tags/gv/index.html","64d748785f78d03eba27d7ec061128b6"],["/tags/html/index.html","097ea3aa1d939f1869153cf035291e62"],["/tags/index-1.html","15e4ee0122873b0d38849e0eda0ae602"],["/tags/index.html","0c253e73398e2cc0106ab386a6af4b5d"],["/tags/js/index.html","cf5118dab4625f4ba91944f23c57e39e"],["/tags/jsdelivr/index.html","252c796ecdb0c1c0cefa65ff7ed61dab"],["/tags/linux/index.html","7b8d5fb13502702a721a433965bdc222"],["/tags/madVR/index.html","405c7f0e2f2ec6586498653ac1683f0b"],["/tags/markdown/index.html","6c1480ffd8c28b43fcaa897d955ce538"],["/tags/maya/index.html","1b0b10827308d141f8f774c3d5157bab"],["/tags/mklink/index.html","5e324860c7a596056ca92dc626a12bd6"],["/tags/office-e5/index.html","26bcc007d3aca50703eb3f711ca89fd1"],["/tags/onedrive/index.html","4e39e2b494a3b0e05205dcca44ca5cdd"],["/tags/picGO/index.html","950693927e9dc095e7ce613c09d7dfff"],["/tags/pixiv/index.html","fbc3c57b9cf778249ec631e7a24ab50d"],["/tags/potplayer/index.html","c97685754b1d09241df9412089ebda10"],["/tags/proxypool/index.html","a1867fc5509e06ad0863f614bfd01d75"],["/tags/qbitorrent/index.html","f94ea7b35987f83cc10dae2f6b913590"],["/tags/raidrive/index.html","9317961d31c9fd73db62da1c47389eae"],["/tags/screen/index.html","4b8a312d26c0b3bab08fa43f7f113bea"],["/tags/speedtest/index.html","7c46033d7557259f0d4608dc679307ff"],["/tags/ss/index.html","c6d23c0498165002ec65e1197c3ef17d"],["/tags/ssr/index.html","9ec93858562c48b8b026f404937f47f7"],["/tags/surfboard/index.html","2c7efc9116f8650b4faaff69a5858684"],["/tags/tap/index.html","6c527060b56c3cdc34032ea98ff9d5c4"],["/tags/telegram/index.html","7735fb6f030c38ddf90b0aa340734a21"],["/tags/telegram代理/index.html","3a4d5f07dd9f5f4f1a318dd424d02b32"],["/tags/tg/index.html","451a868f2b2ec857df38ce93f765004d"],["/tags/tg代理/index.html","c6007881ad2fc30d3ab932f4793f6a90"],["/tags/top50/index.html","9c7ca87eb523f35ed89426ba2adb996e"],["/tags/tracker/index.html","5c4c1d807bbc70b40fdf383e52cdb56b"],["/tags/translate/index.html","6213596c65e6e159765d794873273fcf"],["/tags/translater/index.html","43bd3555da71137597011d7bb1940a5c"],["/tags/tun/index.html","718916b29fd3a18c7f8815abf2740213"],["/tags/typecho/index.html","d8006cce755c68b2801f35a2ef89f094"],["/tags/v2ray/index.html","5b5f737f0f46181cd97c87536c22759b"],["/tags/vpn/index.html","944bea035a1cc4f9479b67d81e7b585b"],["/tags/vps/index.html","fa4b059365404d044f2cbfa9e0de9eb7"],["/tags/windows/index.html","f5bcfd8b5943a79dc7e0d943bbf30b7a"],["/tags/windows端/index.html","ee8d32229a06e14a4369b4f9e74d50fd"],["/tags/xray/index.html","227672f9815a62509ef6ca532182e35b"],["/tags/下载/index.html","5bb8de715216011ccc188a2f13c83274"],["/tags/不限速/index.html","fb8f8534602049d5a9183c4e85c67b53"],["/tags/个人网盘/index.html","6bc8ca991f72a7eb8ae89c48ede178f1"],["/tags/主题/index.html","5a8dbdbb00caceea76a99c392da34989"],["/tags/云便签/index.html","f5e0704b1cb85585563d7bb3b397195a"],["/tags/云盘/index.html","ba3c37c8f4689832ff17807d4e1c2615"],["/tags/人人/index.html","1147e0f5ede7b5c81a5d364ae9f06a49"],["/tags/代理/index.html","8ff5d9516a289fc4ef5ff59d3e2e8a53"],["/tags/代码/index.html","731651532d12985892b83048d0b76cbb"],["/tags/优选IP/index.html","dff2a2ea3c7b97bd7730fac70a17f729"],["/tags/便签/index.html","19c34aa63075786cbb4aa237be604fd4"],["/tags/保号/index.html","4c9e4373149bd8527a948d7fd31ab034"],["/tags/免费/index.html","5ad7f4d12fcafa5f2c1c775768cb826e"],["/tags/免费节点/index.html","1ab00178c9087f82587b4ee1e5829f81"],["/tags/加密/index.html","62e2e758687c165303244718036cd21e"],["/tags/动画/index.html","5d73af22917df0c0886b4697652e1cce"],["/tags/博客/index.html","c162ce2c4d7c10d424b168dc55c4ca3f"],["/tags/历史记录/index.html","25ee7359abe58603fbf385b0ecae4001"],["/tags/压力/index.html","69c166169d821020ec0305f60a0199b0"],["/tags/压缩包/index.html","9603c39d438c0ef793af14812c0f4e1c"],["/tags/反代/index.html","7494c137adbbf1d2fd61a34ef3d7d76f"],["/tags/可视化/index.html","c9305e5f3949ae2b7447617d046de3ad"],["/tags/命令/index.html","bce37774e4cc64c2de0b2214dc7afb28"],["/tags/国家/index.html","283188e49337c2ae23cd152ec001b9a0"],["/tags/图床/index.html","6301a72f282a0bc96723c3001671eb0d"],["/tags/图片/index.html","c7aef3e8526ed5bedbdf8eb73da87159"],["/tags/域名/index.html","7fb9f0b291122abdf9130729ad38c91d"],["/tags/多标签/index.html","db5a256452bf51d3f55d6b005e6648a2"],["/tags/存储/index.html","48dbb846dd30d71f8d68b30b4e48fe65"],["/tags/学习/index.html","e3a74f24585fc4effbabc50253c216d2"],["/tags/安全/index.html","22be51ba1ed8f97ada37d11ba695654c"],["/tags/安卓/index.html","56a8a350bd58c0d0364ad63061fc8541"],["/tags/宝塔/index.html","c5e1b6a9f635660a5d4a0c07fe52c7f5"],["/tags/小游戏/index.html","013e457c56a9e093c9214e3f1b88dcd1"],["/tags/广告/index.html","496429ffbb6dd2461d684cd839703949"],["/tags/建站/index.html","5b7674d4f1839b8cc55880f4fb796f4b"],["/tags/影视/index.html","f2f5d2a6890388fa185051ecd648b87f"],["/tags/快速启动/index.html","c7a751c21421cc08a1741b8825d11d7b"],["/tags/手机/index.html","86610950876b2b1ff4595c29ad83842d"],["/tags/托管/index.html","fb92e59cfd38bb8361f26682a69f2abf"],["/tags/抓包/index.html","fd910164f0cc148cac335bf60f8c042a"],["/tags/抓取/index.html","7a303f74ba83e19fbf4967dcd789c94d"],["/tags/投屏/index.html","6d93195d7d7deab470d1ad7533e2ee70"],["/tags/拓展功能/index.html","d8481ae24fd7d1fc8ec5e0537061c407"],["/tags/挂载/index.html","f8569ed65e24bb91046224355fcb7bab"],["/tags/指纹/index.html","1e70caafa416696d97dfaeef2d1320e0"],["/tags/接口/index.html","897113439eb641e54ec9ff5aabf06ee2"],["/tags/提取图片/index.html","0101a82d92ffa484cfd69c845508e686"],["/tags/插件/index.html","41b700e1ab15f7093eb2f9df89c7dd9e"],["/tags/搜图/index.html","f7daa1f0986d7319041f0a2740f0031b"],["/tags/搭建/index.html","413f193952288c62d37de23bbcafcf75"],["/tags/撤回/index.html","3ab877eb9070ab8f759e3e0ec792c0b8"],["/tags/播放器/index.html","9aa3138b5599d179e4479bdd4702685f"],["/tags/政府网站/index.html","fb82ccf0fe001c293f8bb433c8ade781"],["/tags/效率/index.html","ce1ace5d0fd10d8b0f8e19d0f547148c"],["/tags/日历/index.html","a71d90ce60f7452f58df080965ccf30a"],["/tags/服务器/index.html","29e189dd31c356205c5057bfb58a35d5"],["/tags/机场/index.html","7db7499683f136a0aa5bfc552a612818"],["/tags/桌面/index.html","a627bb051f352933b7c793d82e06e762"],["/tags/梯子/index.html","c546231975fae28c53713a1a980b90fd"],["/tags/检测工具/index.html","5e788e3345c01a38404a9beea5b2a0ab"],["/tags/汉化/index.html","ce0a41700304b776eb55fd3bd5cda4b2"],["/tags/测压/index.html","8d3bec30fc0042cfffa810148974b028"],["/tags/测速/index.html","7b021b39bf455e333096a9a14b9a5bfa"],["/tags/浏览器/index.html","b8a7833d9bd0f2782b5255b829272dd1"],["/tags/清理/index.html","6db21a1b801638d0b39e4bfe11e2c183"],["/tags/滚动条/index.html","808bfc91e6b171ad8ba440fef206bf0e"],["/tags/灰色歌曲/index.html","433b5894389198e88b77621927a75813"],["/tags/电影/index.html","e60c659eb2d8b974e1d71f1841d43fb9"],["/tags/电视剧/index.html","bd1ba51a503aab7a0620aa846eb598b1"],["/tags/白嫖/index.html","81b89715b79a9c5f119e4dfb297ba2c0"],["/tags/百度/index.html","fe8654cba76b692b2ba1123d1856651c"],["/tags/百度云盘/index.html","30f205beebf398646f67694dba54ce29"],["/tags/百科/index.html","a4b1888f623c44a42253a07827b538e8"],["/tags/短信/index.html","5551ffc6fae12315b1a55e0a00930e07"],["/tags/硬件/index.html","3477fa776a3c2176ab0d0581c1914ff8"],["/tags/科学上网/index.html","e69a7165b97c820d1d7815434f4d0c66"],["/tags/空间/index.html","413284a36e8fdef3b2e95b329b37f771"],["/tags/笔记/index.html","5033d184d22a279935aeb23436f220d2"],["/tags/简洁/index.html","a4cdbaa8e201a5afe53440961c5b5f9f"],["/tags/简约/index.html","6afbcaffa341c85abd5097ac11220e00"],["/tags/维基/index.html","7ec42fa99bc60fe8c03bf0062d01f705"],["/tags/网易云/index.html","f50c790a93fdfb006240317576ebe106"],["/tags/网盘/index.html","8724c5185cb7be8583665853f7ffde38"],["/tags/网站/index.html","c20393b3727b6dbf73693f9f935a6b4b"],["/tags/网络/index.html","a32b91ea03818a55f552dba568bc6178"],["/tags/美化/index.html","553d71f804bc734dfa625349f713eac3"],["/tags/翻墙/index.html","98c177ea90b907cc48b74bc54530785e"],["/tags/翻译/index.html","5e849f50538c1e7b1a14e4501e871980"],["/tags/翻译器/index.html","2d79ee79f73aa6204398c942713016e7"],["/tags/聊天/index.html","47cb8ca51d87bce334aa36e03f572ee4"],["/tags/聊天室/index.html","60bed58c491a7839c0549de9cb4509c3"],["/tags/联想/index.html","d0218d91ea0196c451121fd31d7d8bc4"],["/tags/节点/index.html","addec8fa0b4864757a44f19c58f94cb3"],["/tags/虚拟手机号/index.html","26886804bfa3946fbb68463f32237989"],["/tags/补丁/index.html","950a0346b8556af1beb3457f9ae5d6ef"],["/tags/视频/index.html","cabb3a0bc07dd633832c2eb956d7272e"],["/tags/解析/index.html","0d06c88c9c0bfd6f084eadcbbb91f6f5"],["/tags/订阅链接/index.html","61056fd7bcbdeceb66be7c7764322d35"],["/tags/记录/index.html","043c1a6838372a3683aa3e0b54fa2d47"],["/tags/识图/index.html","8f6c88ec0b6d919659c3f2a86052abbc"],["/tags/语言/index.html","edc7ba81819a834483bf22beb1e901ac"],["/tags/资源/index.html","9c9def4dd0a82fa54205fffbc25549a1"],["/tags/资源管理器/index.html","772777dc9e877c20a556fdc8be1baa75"],["/tags/转移/index.html","39d2477f72e8015dcc4793b61f7b03d5"],["/tags/软件/index.html","671f62abbabc3955bb370a81344b3c99"],["/tags/轰炸/index.html","5546601b325722687df83ff11be3705e"],["/tags/迁移/index.html","319e59e1928317058f3558a27de6c046"],["/tags/远程控制/index.html","66d2b8e44b49e8e7d874a0e46910afc7"],["/tags/连接/index.html","9f7c53d50706af3f122aa7e63b23b6c8"],["/tags/追踪/index.html","e15e9f14090cc4cad5be2fcb3236b3be"],["/tags/速度/index.html","63ba99fcdb79bbde6161935e98870aa0"],["/tags/邮箱/index.html","6a77a022153e98f4258e2e007711e1f9"],["/tags/酷炫/index.html","992446239fb80e6005e466959a3c3e55"],["/tags/钓鱼/index.html","9401a95e85d6783c2e552f75ec7daaf8"],["/tags/镜像/index.html","be6a59f963e3359641e8b0e516cfcc23"],["/tags/随机/index.html","a31194de54e321160973d655a1301371"],["/tags/隐藏/index.html","92cc1c98368eeaa2808583fb214354bc"],["/tags/面板/index.html","e2fc1181bb743222d2ee205df130c70f"],["/tags/音乐/index.html","3aba1bcc9351024708f8925d560cbe8c"],["/tags/高颜值/index.html","882acf56688bc1edb05e440c250bfc25"],["/tags/魔改/index.html","4d5ba57a9ca9b4627d977173412fa552"],["/tags/黑名单/index.html","eb1f6f661e01e48e83dc7cc1097f8994"],["/urls/index.html","3fee44e2a1a0715faacc565ec0dba865"],["/vps/index.html","db34d165b7934ff19e36849eafa89c21"],["/支持/index.html","572ff1edaf4a4e30a90c2248f202116e"]];
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
