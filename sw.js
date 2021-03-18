/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","33caebeb043d01cf161aba4cdd24d5e6"],["/2020/11/29/clash-windows/index.html","9aff28f3897c0dcf2299d3066cdc1b74"],["/2020/11/30/websites2/index.html","9a440b5950a4d9dec4020172de28c734"],["/2020/12/04/iphone4s/index.html","6c810b6e0601e5f3029ddd0076438f9f"],["/2020/12/04/onenote/index.html","16e6388061925db1305f33d253afcaa5"],["/2020/12/04/wesites1/index.html","3f61bad8bc7c8291a013304a98e381d8"],["/2020/12/06/nokia808/index.html","cf2b00d07435d926df96c61423c0f977"],["/2020/12/07/ipad1/index.html","1de1110a964f29dee545035245b8cb0e"],["/2020/12/18/freesubscribes/index.html","3d0feb14b51d6a926820e7138164595f"],["/2020/12/19/musics/index.html","51922dd7c9f4704bd8e9a358c6f86e4e"],["/2020/12/19/shadowrocket/index.html","e90a93d48af6aad85ea1f3f183119286"],["/2020/12/19/v2ray-windows/index.html","0c329092171766569e8373d192083760"],["/2020/12/19/v2rayng/index.html","0c93b0f3a366f009544d04e92a213c5d"],["/2020/12/20/beoplay/index.html","f9873329e3b403cc34a5371c78d074d1"],["/2020/12/20/订阅链接转换/index.html","afc9eee578ff78b6dcdcf19a399afcc7"],["/2020/12/21/chrome浏览器下载提速/index.html","02e8694dc3eadfde1afcd039c412c939"],["/2020/12/21/免费128线程并发下载xdown/index.html","0ec65cf38b9ea0ed680c704f65f58500"],["/2020/12/21/免费32线程下载软件ndm/index.html","aafbab04a39376f3169a477bc4698af6"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e5121503a19661236eafd7d20b8ac901"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","385ce2108898d33a1aa86f677bb6b2e8"],["/2020/12/21/广告怎么知道我在想什么/index.html","7bc9fd81d00c84342a264e76e645ad56"],["/2020/12/21/无名·引子（小说试写）/index.html","37c4322ab2c7d3130cb16646a12032ea"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","ad3d356e1883b7da5e53ac7dd3004fd1"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","07e5a2077e9b20192d0f1d5a6d451089"],["/2020/12/21/高速轻量下载器aria2/index.html","deae3f2af97269bb1826fbb4728e407a"],["/2020/12/22/2020-cee-roo/index.html","b1d875b1240f83854a5645586f642033"],["/2020/12/22/firefox插件、github、steam富强/index.html","19b65acca950d03d6f09aae342ad47f3"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","1b2dd81f9092d34a1cfe08d472211648"],["/2020/12/26/python-day-1/index.html","a504115bb6c86fa47727b2204f6713fc"],["/2020/12/26/python-day-2/index.html","bffac0d15260e9b3480f24653a3b1e27"],["/2020/12/26/度盘不限速下载方式一赏/index.html","de08980e540876570c7633ccaa78dbdf"],["/2020/12/26/添加开机自启软件/index.html","2d7d5f8e123b7ae123d63991ab82766f"],["/2020/12/26/电脑端截图方式一赏/index.html","ee7bbb0c308c407857b22088d78d06ea"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","705960f16a6d783467996094a8ef81b6"],["/2020/12/27/最安全的浏览器tor/index.html","a208865da92bb95da7d7a484afceba0e"],["/2020/12/27/网易云刷等级和听歌数量/index.html","92b96b2aeb602d3c0ec5469c23a201bd"],["/2020/12/28/freenom申请免费域名/index.html","a59a91df2148e91ee6e933825928cedc"],["/2020/12/31/机场/index.html","8db6797f1275429f97944eadf0cc5082"],["/2021/01/01/M1/index.html","d72e35736b9c5fc2589c78c4cf55f23e"],["/2021/01/01/compress/index.html","bb1533f3c39b00dde07cbe6f0b3b5d3c"],["/2021/01/01/infinityfree/index.html","e05a07a2c0058d5a5d01d61a70166511"],["/2021/01/01/硬核翻墙/index.html","2a7933ff0364626142ddfe7e330ef69c"],["/2021/01/02/qq/index.html","3a1f06d28607fb9144bc8f3b9a3f8839"],["/2021/01/03/netch/index.html","6b6cfcdc764df7cd83b6156be9c373fe"],["/2021/01/03/waifu2x/index.html","b4d981083ff5f3a475734e3a5fd2153d"],["/2021/01/04/ads/index.html","78d81d7be7163a63ef88fa49ad8eb7b4"],["/2021/01/04/games/index.html","b3eb7095142271e7bd183c709a1ea174"],["/2021/01/04/heroku/index.html","b8d1bc9ba92e9771696c9abee55af39a"],["/2021/01/06/movies/index.html","833d67ed65ef866a4d6b2eecf6a949f5"],["/2021/01/07/google2020/index.html","010307d25c0692d283b976061abce63d"],["/2021/01/07/lucky/index.html","b7ec3dd398c8935704c400db8207a7f3"],["/2021/01/07/spotify/index.html","d0df2d20988598f4a022dcc332659bd2"],["/2021/01/07/thunder/index.html","c13a18af9e59cf93edd7fb6450ba6ed6"],["/2021/01/08/adguardhome/index.html","75cd4c96a7d599d33958b6da7b990d42"],["/2021/01/10/IBM/index.html","995c22ac0422ab924c72fbff0266439a"],["/2021/01/10/potplayer/index.html","a30c24cffcdc265837eaba273e7d82f3"],["/2021/01/10/sakuraanime/index.html","87c5d7c7060790a0adb82ad177f4925b"],["/2021/01/10/美剧星球/index.html","f12253878ad2aecba793376bd4155c75"],["/2021/01/12/telegraph/index.html","62daa3f4673518c5ef76551994d41e9f"],["/2021/01/14/comics/index.html","fcefea9e4a512e1939a1964453ade281"],["/2021/01/14/ftp/index.html","90c891c5f3eb6f4fa6a5637260b27ed8"],["/2021/01/14/oraclecloud/index.html","850f73d5b050a3f7cabba35c43766c40"],["/2021/01/14/porkbun/index.html","3daf70e341b867ce73d5c8798590c57e"],["/2021/01/14/powertoys/index.html","b2bee8bbabb7f7b293a6b6eb9eca8c0d"],["/2021/01/14/taptap/index.html","c36dbc686b96d2afce107840cb961487"],["/2021/01/14/ubuntuvsftp/index.html","a129b85c9fdea23f96795d2a604eba5f"],["/2021/01/14/小说/index.html","098a81f85579b4b1eb09945a591d1651"],["/2021/01/15/freeproxies/index.html","37f1cb610b8228ae57b07d13d009c225"],["/2021/01/15/incaseformat/index.html","5c5c1b14b2ca6598d234caf12ec6badf"],["/2021/01/16/euserv/index.html","0e959d179fc4532de8f06a3cf0a554ef"],["/2021/01/16/winxray/index.html","0fd530db04983861ef54efc2b5a9f885"],["/2021/01/18/qqreadhistory/index.html","d7138dbe3ebe1746fcd54996a597af5c"],["/2021/01/18/qqrevoke/index.html","568eb9001a9e7f4ecab2d95dd4899540"],["/2021/01/19/freevpn/index.html","5ef21954a399ca9cfac622e6f27f2d9e"],["/2021/01/20/browsertrack/index.html","9b31af86e5ca9693d72cdbd282d0b634"],["/2021/01/20/v2ui/index.html","c967c1cf91d2f3f260052733bb2e9911"],["/2021/01/21/failedtoconnect/index.html","7aca2422c4411b095f20d340bc2549d9"],["/2021/01/21/gitcalendar/index.html","b383bb72039aaa726be7070866c126df"],["/2021/01/21/markdownformat/index.html","faa4a7c5eb852f86ec4dd153c7be2a9a"],["/2021/01/21/markdowntable/index.html","c90c3a12c79489b051b1228d647c6c91"],["/2021/01/21/vercel/index.html","3a655b980c09db183354df4462aed9d6"],["/2021/01/22/hardware/index.html","b32b3344d1395398cd1b430c64db43c5"],["/2021/01/22/muviz/index.html","c0dc3a8f0afb3420a15ca4c34e380296"],["/2021/01/22/randomapi/index.html","d27c5bc0f5acb1ed898f54eee5f402e6"],["/2021/01/22/searchimages/index.html","b61b38e8c50550a581f2ffeb8cfcfaec"],["/2021/01/23/RX文件管理器/index.html","03fc72b9fdbb49f1bc2ab2321ee32076"],["/2021/01/23/chromeflag/index.html","f1aa1c313fe99d9b60ff09f5bae1af69"],["/2021/01/23/qttabbar/index.html","bfcbce75cb1f92e3393b681091f66571"],["/2021/01/24/githubspeedup/index.html","53140d1e1d9ff600ef22411712fb36da"],["/2021/01/24/jsdelivr/index.html","42094519852214ff182d5df777f54406"],["/2021/01/25/note/index.html","738a3c63f510b74a50c3e3e9b2dfc1a3"],["/2021/01/25/soul/index.html","bfcce0f3fc32d3fd1f88eb5bb2d8f2f3"],["/2021/01/26/herokuxray/index.html","a0e2e50d3357fa8f1b34e2da3aa8fceb"],["/2021/01/27/proxypool/index.html","bb7e885ab5f474743e69d840692c4c63"],["/2021/01/27/tracker/index.html","b7393bacc64ad4b8e0a897e52b8d53d3"],["/2021/01/30/pandownphp/index.html","10ef35ae68b5c011c26cef20d4640bef"],["/2021/01/31/newgroup/index.html","4747cc80670fe6e00dbc20825673d194"],["/2021/02/01/clashlanguage/index.html","74dbab77e24281d00184dbff522e7706"],["/2021/02/01/encrypt/index.html","a23da73bf36612e01cf714940f2e2de1"],["/2021/02/01/footermotion/index.html","8a579c776d725253e0847923fce25712"],["/2021/02/01/gitter/index.html","a4362df0c6f817f8a121f2b3811a944f"],["/2021/02/01/pixivtop50/index.html","4b24a96e9674dcafe251e3542652b015"],["/2021/02/01/scrollbar/index.html","8ec0ffca156788eef496f07ceabb7df6"],["/2021/02/02/clover/index.html","8ad1aeab7042c96da045aed1a33a092c"],["/2021/02/02/maya/index.html","1cf29060dea1eb81d5e9641078d88f0d"],["/2021/02/02/speedcontroller/index.html","60e35df11584f346853590f76c000dff"],["/2021/02/02/yesmusicplayer/index.html","76e6f8a012f2bfd117555bdf47b52128"],["/2021/02/03/lenovoonelite/index.html","4f318fa752e1b71a4a144dff883f86ea"],["/2021/02/03/skipads/index.html","279a4d01680820169e38e710e87c1042"],["/2021/02/04/picseed/index.html","29101cea7074dd5436e57655e6da7f1c"],["/2021/02/04/renren/index.html","25553f3731f13a712e9c6078c217549f"],["/2021/02/04/serverstress/index.html","6bbe5c599e5d0c05147d94519a2cc0ae"],["/2021/02/04/wikipediazh/index.html","10ed8272317c472eeda74a3e9e91be41"],["/2021/02/05/googlevoice/index.html","66cc486d3a5f313ea8706ab0d08c0536"],["/2021/02/06/clashconnection/index.html","61f7fded79fc9580320e07d31dcb5556"],["/2021/02/06/gvtransfer/index.html","a26e39cfb4c5bc5fa78e65b883838dd2"],["/2021/02/06/todesk/index.html","6a816cb3ceebd11d8657001c7967b826"],["/2021/02/06/vpnblacklist/index.html","e13be5f18681216c1f924c4d9e0109ca"],["/2021/02/07/mklink/index.html","e6f73ef37f5377dd3bb2bfdc64e3c780"],["/2021/02/07/speedtest/index.html","85a2dc6bc6841df8e05c62f2cc52b7fb"],["/2021/02/07/translate/index.html","04a86a3b02322092a8163a1c7033dddf"],["/2021/02/08/ewomail/index.html","6d4db31ee3148675d76dd04bd1109a3e"],["/2021/02/10/officee5/index.html","1937e411566a3ccec11a64bd9884caec"],["/2021/02/10/raidrive/index.html","dccfebc3f8c2287a8d7962d5927b74c8"],["/2021/02/13/e5sub/index.html","164058852027836161e050a23bf5e9dd"],["/2021/02/14/screen/index.html","622e418226b8bb05f3800c97c5152e2e"],["/2021/02/15/clashtun/index.html","f947f4f56b9ee90a1210900d5b0690ac"],["/2021/02/15/messageboom/index.html","3f414a16c3fa46c876b703600baf96e2"],["/2021/02/15/oneindex/index.html","0daccdde4d6f34cf23c51bf6474cd634"],["/2021/02/16/govsites/index.html","1d3debeac529c5be21ed89cb9d1a1357"],["/2021/02/17/hexototypecho/index.html","8d7eb9c9407c43c40f66224fae00f62e"],["/2021/02/19/fiddler/index.html","a88308288df61ba0bdbacfa7db91e18a"],["/2021/02/22/potplayerset/index.html","2b071017f84a455a7c1d187260b10dc7"],["/2021/02/22/studyresource/index.html","d1d618a0ceef75eae4b7186ff954639b"],["/2021/02/22/telegram/index.html","f7eafa315ffa424a08c10d3bfa87784a"],["/2021/02/22/videos/index.html","1ee21c78486547a2de0d311744c2263a"],["/2021/02/24/mtproxy/index.html","7e836efd6df3e98229cfe9ac665fe1e5"],["/2021/03/10/catchcat/index.html","5b17e03b24e5fb1160b8a92c6d1f5138"],["/2021/03/10/neteasemusic/index.html","42a735e59eefd890bc40f0fe2e8822a3"],["/2021/03/10/surfboard/index.html","c2df692bb5d124c5d480711d783d7c53"],["/2021/03/11/vpnandjc/index.html","c0fb7c8b88d9646abc0928b95e4f3a24"],["/2021/03/12/qrcodes/index.html","091df77e1321ebedba8826122d02d71e"],["/404.html","7774093a180d71f4f02c36191f0c2e8f"],["/archives/2020/11/index.html","615b125a1f43ef95ae9aaf3601356f4a"],["/archives/2020/12/index.html","75cfd20abb1424beb2a3da5258465300"],["/archives/2020/12/page/2/index.html","6fe3f984d07ca485f585fed16dcd34f6"],["/archives/2020/12/page/3/index.html","582bae0f9c214bf2269a5c63c81af02f"],["/archives/2020/index.html","5351ae8614e155ad7dc7825358059035"],["/archives/2020/page/2/index.html","b21b29c93e0d3fee78bcfcea30931d82"],["/archives/2020/page/3/index.html","b0a135e6db17dd6d850e69be362333e1"],["/archives/2021/01/index.html","808a81bc09d364935e9aa1ed99669715"],["/archives/2021/01/page/2/index.html","20c2510d7f35b1c08239df0d04b47b25"],["/archives/2021/01/page/3/index.html","9a74acd0ef125d2df37af22fb41a46ed"],["/archives/2021/01/page/4/index.html","d091cf2a2f1a777dd38a2e25eeba1dd5"],["/archives/2021/02/index.html","24f3a613d92c5c11c601c1bf1bad09aa"],["/archives/2021/02/page/2/index.html","c45530f36b987a76b2283159aa0ccee1"],["/archives/2021/02/page/3/index.html","135730c7e610021c81cd8085f433be84"],["/archives/2021/03/index.html","ee310b67409480cc5d87eab21c7ea728"],["/archives/2021/index.html","d9cd616e88445fe421ab239a4e2a9519"],["/archives/2021/page/2/index.html","75b10612c4e3dbb12f385e1581311f2b"],["/archives/2021/page/3/index.html","a2b9664966ed5b100e9424f15ac516ae"],["/archives/2021/page/4/index.html","c0bd997992d381293869f98ca86d1947"],["/archives/2021/page/5/index.html","cce23c15f4696ba81c9af2a2b2a34267"],["/archives/2021/page/6/index.html","13becde4a6a424f5d129a3eddae26430"],["/archives/2021/page/7/index.html","f28b13c577c776f31543fb1bd32d1958"],["/archives/index.html","0d1592747366c479ce5082a9e84dc05f"],["/archives/page/10/index.html","3480496f467453d220a0ca9791a5f043"],["/archives/page/2/index.html","3bab3e3a36916d5b050e643d32b27231"],["/archives/page/3/index.html","701656e76145643b919df7915b59242f"],["/archives/page/4/index.html","0cecc181291209335b203feb23a82042"],["/archives/page/5/index.html","d9b42ac54707009c22a916f4a1a21c33"],["/archives/page/6/index.html","e935e31bacb93070b428a29e86ebe0cb"],["/archives/page/7/index.html","cb4a43a3fd69620c9542943d638692c6"],["/archives/page/8/index.html","2275c86846be76a010f0d96a9195e4a9"],["/archives/page/9/index.html","045e8d8cead04ac65157061c343282a8"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPN/index.html","0afafde548af069e694c323ff1a50d9a"],["/categories/VPS/index.html","b78d8818fb5dc564857a4da28c7cf491"],["/categories/index.html","4610e74a33bce7e360fbbfe1249c8ad4"],["/categories/下载/index.html","224392d3ad2cb36b7de3ed4acf71fd6c"],["/categories/安全/index.html","8f1bce7503e88178718836389f6cbe8d"],["/categories/建站/index.html","da0ff10f1b255de0815ddf9b6b9ee890"],["/categories/杂/index.html","beea6e94892df06777e174fb72ebcd82"],["/categories/杂/page/2/index.html","6b272df0cae09292238530a59efe98ba"],["/categories/测评/index.html","8e5cbca1475ba4b17a33d2b1e41ce766"],["/categories/科学上网/index.html","c6a0d723625d14f936e3daa0edab5f2e"],["/categories/科学上网/page/2/index.html","16c07223b2a672d0cc12fdde397a27ec"],["/categories/编程/index.html","81caf85d62fd8d22b5cc67e19513b9ea"],["/categories/网站/index.html","871dba54a2e9acba2308c61ea688ff9d"],["/categories/网站/page/2/index.html","01485c7372d7e06610c550c2b1361b8e"],["/categories/软件/index.html","604f9938802d4d9b5b5ba2f56f85e24e"],["/categories/软件/page/2/index.html","b2dce68f6d6c02e9ed1914dc44594e0c"],["/categories/软件/page/3/index.html","938d1bf19ad5a60165f07d66af84aace"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","cbd93e2fab025272b9215742c10d28ac"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","32c7e36d7249f33bd44b6284cfc14504"],["/ios/index.html","dbcc3c3f056b4506b4afc94ac13a704a"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","1c8c9daf9bd1e76583f1de3a511abb48"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","1a00372cadd3619cfa278898243c3c6c"],["/page/2/index.html","853b6a22cba315f8218ed289dae3476e"],["/page/3/index.html","b73019658da3e95ab13d0d4bd6a93d43"],["/page/4/index.html","4d91f6f4f96eda5ccba6f94e7a38e61b"],["/page/5/index.html","9edf536c5678a2889c546b34a5ba98c9"],["/page/6/index.html","493a87de8ebbe9f63b7868f03661d690"],["/page/7/index.html","d7b4234327975fa8165959e9a5bc9843"],["/page/8/index.html","23a866091e585b8e48238a1cd9920326"],["/page/9/index.html","f25f0e59f99ea3d70c10b49434463e36"],["/payment/index.html","8b3d0ccb77203bb92fc0767578975c4f"],["/privacy-policy/index.html","3bd33b65571172c54513da8fed29328a"],["/rss2.xml","6fa39e20ae970db6cc323a60fdee2587"],["/search.xml","c3844365e5ac0c5b0563bdbe0207e2b1"],["/sitemap.xml","a8217d0e675dec647efc2511b469e152"],["/sw-register.js","9c04ddb510592f3846192820d1999d3f"],["/tags/5t/index.html","a8c6fcb061598b54c9d52c0cc2896e26"],["/tags/Clash/index.html","fb356139f9cb049f0a0cc027693eb73e"],["/tags/Clover/index.html","ccb76fce9a2e1b60fc52909116ff5872"],["/tags/E5/index.html","c061733a44363201a63e51e43058008d"],["/tags/FTP/index.html","07845f053a7b28475176b97ec1ff5d31"],["/tags/GitHub/index.html","c020652f54596b5fd58f69b6b0261e6f"],["/tags/Heroku/index.html","fc111024e66fbfb327e4b96056da6332"],["/tags/Hexo/index.html","8f77bf270f803f34b8b629aee1f70a83"],["/tags/Lenovo/index.html","f3c88a919217484b8de83874ddf3021f"],["/tags/Oneindex/index.html","1901380491110d809e8fc5ce3deea9e7"],["/tags/QQ/index.html","e4a9c2cc4c9b34fb964f345e2e833f2d"],["/tags/QTTabbar/index.html","6c864a56c7f319b249f0cbd29511afc4"],["/tags/RX文件管理器/index.html","372939dca67069de95cfc421cb2b8d3f"],["/tags/Todesk/index.html","fc363a37d44a9bba40ddf2e59fe07ca1"],["/tags/Vercel/index.html","26181e1880a986dee8ca3824a039c00c"],["/tags/ads/index.html","f603d5fdb75ff4b10f8d6dbf5709f0c3"],["/tags/api/index.html","c4cdd257a7bf257384a94200cb7c1e0f"],["/tags/app/index.html","9ce67337aa91c0c944d8564e6b6330a1"],["/tags/blacklist/index.html","69e36faa03ca823819ce66684961fdcd"],["/tags/butterfly/index.html","bd3e585c2589fcaf7b5edba349a086e9"],["/tags/chrome/index.html","e5dcd1faa4f3754fa44572c7e1873606"],["/tags/cloudflare/index.html","1ca43e69a45716b6d667b4a72d28b529"],["/tags/cmd/index.html","41af45c54b3b0caa877adcd7d925d031"],["/tags/c盘/index.html","bf827fe2c0c8ca58ab66979e4f3a7f97"],["/tags/email/index.html","a35c3e7a06cf06d4333bdb350e60895a"],["/tags/ewomail/index.html","cf76823aa031120830e037f89a07e767"],["/tags/fiddler/index.html","56d06136034aabb0f0fc007241eae526"],["/tags/flags/index.html","cd4ccedd6fa405c09242909d7d8831af"],["/tags/footer，页脚/index.html","d1f38962fc14aac2be6e3b214a52375a"],["/tags/galgame/index.html","a0754b88f0d261883128af3b0f6412d0"],["/tags/git/index.html","f00f11f1c0abbfe5a5f065f60f0517da"],["/tags/gitcalendar/index.html","b9f80485997abccbd26e348ea4868f4a"],["/tags/google-voice/index.html","60859561397b0e56b0a0d7d1fc6a050b"],["/tags/gv/index.html","0c24b441b2a9648ad6599dafe9af0aca"],["/tags/html/index.html","cdbf1a4f15162a55bb22d6a2518e6c1f"],["/tags/index-1.html","bb7b1b463290231f68c5b533c72adf54"],["/tags/index.html","2779448b1e3b6a0b58e307a7fa764a44"],["/tags/js/index.html","c49deafd07cce5130e8b900e09604c2c"],["/tags/jsdelivr/index.html","35b8167d850c203088f66d4d9631b65f"],["/tags/linux/index.html","2ad01694f6427d54ec22697bd6fb1dc2"],["/tags/madVR/index.html","cb11d6fcbe4fe709e6b4c08c4250a5e2"],["/tags/markdown/index.html","e06dc4824add780c1a5074b8603b663e"],["/tags/maya/index.html","b739e627ca7413e34043ec9ce8871a2f"],["/tags/mklink/index.html","25aad4150d299897600ef7b40f0b859a"],["/tags/office-e5/index.html","3215aa239b516be07f40b2db722d914b"],["/tags/onedrive/index.html","58e460391b4775e717126504ecea9c08"],["/tags/picGO/index.html","3a1b371a27f29233f326f657861c1e6d"],["/tags/pixiv/index.html","6b13633f3110e8441caa39b4ec1728a8"],["/tags/potplayer/index.html","b854825b0f14831cb48b7c535aaf4465"],["/tags/proxypool/index.html","32c892ba54360f29f0966d11407ac605"],["/tags/qbitorrent/index.html","376825d2dd07ab13a3205b7f31fc2ab9"],["/tags/raidrive/index.html","e9c9f1d34ace0015e929ec33d4d7ac40"],["/tags/screen/index.html","2178280c8b8fe825ab9f2c9ca16bad26"],["/tags/speedtest/index.html","b218013dd58bc14e64eaac059994f75a"],["/tags/ss/index.html","23a9b291f4a52c67da716c166398fb0e"],["/tags/ssr/index.html","e26139bdbbd14078b296cea1dce56e9e"],["/tags/surfboard/index.html","9cc4111a8c6694c7dbf9345fa1ba49fa"],["/tags/tap/index.html","0a99d93f1438d0b9489e3a352949085a"],["/tags/telegram/index.html","898b3278b5c42ba3881f7c9edda2b63f"],["/tags/telegram代理/index.html","ab4b2e469c76246ae033b9d2dc02edde"],["/tags/tg/index.html","5603378a7c3105ad696abbe367941f29"],["/tags/tg代理/index.html","c49ba6dfc18a63e68505f275788adfd6"],["/tags/top50/index.html","59f985b299c17893b0cb85159ed13ba9"],["/tags/tracker/index.html","c1afbdd57277b28726e610757848a92e"],["/tags/translate/index.html","ec43999b3c34b0dc5ccf2e3226ec3ec4"],["/tags/translater/index.html","05fcce9bbc39ca2cab0421134fe2709a"],["/tags/tun/index.html","c97ff18e0dfa29a3f53a0afc54d6b144"],["/tags/typecho/index.html","c7fef76032639a34779d3b9dc6902cea"],["/tags/v2ray/index.html","e0b284d4f4f26a35f632ca8b4665483f"],["/tags/vpn/index.html","6103ffa75b84a6c103a9121c2cdef1cc"],["/tags/vps/index.html","50cf55cf803208f642af3fac2f6e5fea"],["/tags/windows/index.html","e5df345046ae1cc9dac42d4440bbaf2b"],["/tags/windows端/index.html","d7026964169cfeec99d47db46350ecb5"],["/tags/xray/index.html","74bb53d5a12aeb824480563653d0939c"],["/tags/下载/index.html","7c3d1bb7d48ea82a4035c546df51a5e1"],["/tags/不限速/index.html","f12ac2f7d3ba3dcbd66cd980a0219d7f"],["/tags/个人网盘/index.html","bf90ba0a82602d7996e7d575fd368179"],["/tags/主题/index.html","532a7918da37d74b9e44eb489b5354a1"],["/tags/云便签/index.html","3e2c9f8d927cc187503372f5778a8772"],["/tags/云盘/index.html","0a25f288bdfa3a66f269d7bf6357ebcf"],["/tags/人人/index.html","c87936d6bf6d90fcd06c7b41cdad968e"],["/tags/代理/index.html","36428ad07ebb658f3f01196e9bbcafb7"],["/tags/代码/index.html","2209b960e603a664c771c09d5e35dc58"],["/tags/优选IP/index.html","07038685db45cd8483457d621766aaea"],["/tags/便签/index.html","97dea7628882cd92c8984a3f7f995d8f"],["/tags/保号/index.html","25486e607381df39597596c85f2101a0"],["/tags/免费/index.html","805275bc83c0b876e6cc42a083ca1e4c"],["/tags/免费节点/index.html","302920a657f642b64dd27afc1f5e51cc"],["/tags/加密/index.html","9e82341ef70f251f7c150777e47fa042"],["/tags/动画/index.html","92143ed0123a6dc16fcca176d417b976"],["/tags/博客/index.html","9e589314dc20d31f5a1abf33d22abc9e"],["/tags/历史记录/index.html","1ee7aa1972d8903c684d36ad373f5050"],["/tags/压力/index.html","b5a752be21ee7dae71dfcce7129d8bf2"],["/tags/压缩包/index.html","49fe29fe60ab976f90919738f3d4f8e1"],["/tags/反代/index.html","531e5a14adc52edfdac5967934ee8ea2"],["/tags/可视化/index.html","db54d8760068b67b490227f89657919c"],["/tags/命令/index.html","857882f1ab04cd8f6f82438f3b0809be"],["/tags/国家/index.html","a04128170bb98031f526a29564387a40"],["/tags/图床/index.html","29d3d58840d3a832f0101d60d8990aef"],["/tags/图片/index.html","bfa0f275f14f2a1aef13c82bb5973967"],["/tags/域名/index.html","0bfff9f26e1ccf50f03542edda8b96ab"],["/tags/多标签/index.html","78385e6a2398561b800e2ecee19472e7"],["/tags/存储/index.html","8165419721ffe2c1b3fa3ca5a89998fa"],["/tags/学习/index.html","82cc3cb2a3889bfcfa436d8548bf156e"],["/tags/安全/index.html","c94d9fb0af5862c2cb95e32756c0e606"],["/tags/安卓/index.html","ac496d145df72570d2e70cfdb15e7ab6"],["/tags/宝塔/index.html","98b0b9110e407d6258d35de0b9358989"],["/tags/小游戏/index.html","585085f15a83e1f25e6b71c76973cced"],["/tags/广告/index.html","9e48dd35e46a95d2ad85b4fa5cbf1827"],["/tags/建站/index.html","fb583e0e47f9dfaa594547719f707912"],["/tags/影视/index.html","2d6e422068bab5ca88d70d2bec08392e"],["/tags/快速启动/index.html","ed110fd753cb337d44c6492b5bfc1eef"],["/tags/手机/index.html","7b1b313922f36a8a2420374647e5bbe5"],["/tags/托管/index.html","b76bc06b40d500dc9bd580ae8e291d3a"],["/tags/抓包/index.html","b28bb34c992902b83644cfcacb978862"],["/tags/抓取/index.html","e88aa1b48d1f020ab960ec4cfaebae8f"],["/tags/投屏/index.html","e59bcc71abc6aa5ed1a9bf7ba9166fdf"],["/tags/拓展功能/index.html","71e10eced993d3b52d93533672a3f478"],["/tags/挂载/index.html","ffa8efb4a04b489545f04057db82a4b5"],["/tags/指纹/index.html","91c41d8c864aea4ecac13b8629d64e0a"],["/tags/接口/index.html","bfd110004ab5d295faa6aa0d7febdef5"],["/tags/提取图片/index.html","aca8732a2d03afcbe7a9dd9779088fa7"],["/tags/插件/index.html","f613ae2dd2237b2d15137f5520fe0eb3"],["/tags/搜图/index.html","1333019ad9b4d69a485113b5b7a90985"],["/tags/搭建/index.html","1b7ca6ba4a0cb2bc8dce41f8743ca19b"],["/tags/撤回/index.html","8d166237bd47d6d0ebbdf243503a8bd3"],["/tags/播放器/index.html","76b90aad94e0c65540974f40f9d75e56"],["/tags/政府网站/index.html","a5dfc85f414a04f71fa1162897615144"],["/tags/效率/index.html","8e52ff1f7fbc403660e66cf426c93892"],["/tags/日历/index.html","972f3b8199c5c306581b07516078768d"],["/tags/服务器/index.html","aa30e727ef6df353404b1933a3e9d52f"],["/tags/机场/index.html","f7fcb146853889feaf7508c28d0ec991"],["/tags/桌面/index.html","af63f357f43cce14d3a64e9397e18249"],["/tags/梯子/index.html","fa4206a03c8baa57f24af8159c66d363"],["/tags/检测工具/index.html","3bf602fcb2e819da7380811b7d4546a5"],["/tags/汉化/index.html","87839f84b86538c1e0d0ebd03c7418f2"],["/tags/测压/index.html","a5e18e3bcb853ff221692a38a6d62576"],["/tags/测速/index.html","cb5fc66a16e2a9cc668adebe3ac16d76"],["/tags/浏览器/index.html","5e6b05665ab143854ed291e7b8ebcf55"],["/tags/清理/index.html","8ab65851328658d1e4170555aff3d33a"],["/tags/滚动条/index.html","5b28c1102ab45d74eeb298954b3a183a"],["/tags/灰色歌曲/index.html","d6a2efcbec39081c405fa7e62901a902"],["/tags/电影/index.html","86069086c815828b98693389dc15c4fe"],["/tags/电视剧/index.html","1eec362216ae07174f9e820adc7f9079"],["/tags/白嫖/index.html","a1d60382b61bd0b184976253659ee4cc"],["/tags/百度/index.html","45432ef66fbf3dd7678c24fb6c2c07fb"],["/tags/百度云盘/index.html","03b36e785ae06e79e1af51e9f92a8639"],["/tags/百科/index.html","a46162329b99edb7db8a61e4a8cec912"],["/tags/短信/index.html","30e72520fe73e2b705a7b2ddf1b27ea5"],["/tags/硬件/index.html","6547e34bb3420188f2a551634ad61f76"],["/tags/科学上网/index.html","52125a094b8f94d3849349b02835c114"],["/tags/空间/index.html","b6425446fab9d98f82ea017421845844"],["/tags/笔记/index.html","27466178068aad84acfa8c448353c2c3"],["/tags/简洁/index.html","c50ba6efa84f977babd49146b9bde48b"],["/tags/简约/index.html","a843d4b5b552c4092635010aadbac737"],["/tags/维基/index.html","dd81061976d89ee30e6e14e0e7dabcc8"],["/tags/网易云/index.html","c4edc83524514c98d998c4729c0123fb"],["/tags/网盘/index.html","d0658fe7c23351c6f510879b5a61d936"],["/tags/网站/index.html","865bfe27eba38250995b27d08deaa863"],["/tags/网络/index.html","47029f97fa128157ba2465d71250c57e"],["/tags/美化/index.html","dd6ee6ad056fb0d936d6699b7a9df02f"],["/tags/翻墙/index.html","f55ecea65e2d1b3756dd2e6a5909a61b"],["/tags/翻译/index.html","1548e666a1864dcf1aecea48507ad944"],["/tags/翻译器/index.html","26ec1c636dbc12a03c4be5d7fcbd3af2"],["/tags/聊天/index.html","49a6b9fa24f51f9830bc1b30def8c621"],["/tags/聊天室/index.html","f8715e4eab25c9373b1c2c750ad55de8"],["/tags/联想/index.html","72532d65148b9ca6094f83808ad04cb9"],["/tags/节点/index.html","d56d9b9b86b2f3e5de8e8588a4269b44"],["/tags/虚拟手机号/index.html","ec38a8afa22991699686137ec4fe53c7"],["/tags/补丁/index.html","b466796650af5b2c373f67b1319c8f83"],["/tags/视频/index.html","395719a952842da6501a7fada1f8639f"],["/tags/解析/index.html","37e64fdb4c24addad5fd082edf46cd16"],["/tags/订阅链接/index.html","29e28f1c13ae4a52fcbd74687f730354"],["/tags/记录/index.html","2474668648b2961e046c353d9613c74a"],["/tags/识图/index.html","97564721d94b12c8a35bc29046e7aab6"],["/tags/语言/index.html","a14c5c7018c824cc1e9df9f2e91f8679"],["/tags/资源/index.html","93e2d23c9c744770bb0f86d65087c262"],["/tags/资源管理器/index.html","a33aca0c4d68364a5c80f6dc3b2c8590"],["/tags/转移/index.html","15fe661d4a20147a2d9229cf27ddc5bf"],["/tags/软件/index.html","57335b81dd48af93070ce5a8fdbdc63e"],["/tags/轰炸/index.html","2dd95753a3b64527473fe4e39122d324"],["/tags/迁移/index.html","06dab51c8ef96e923953796695dbb02d"],["/tags/远程控制/index.html","3a99001b24d3f15895d661b959fd4a74"],["/tags/连接/index.html","eef3d3d97747585ac0db21643acc0067"],["/tags/追踪/index.html","801f023bdbfd7e00faf38087d340c8bb"],["/tags/速度/index.html","1aee5c28cff36dc2ec133cd15db746df"],["/tags/邮箱/index.html","00c48389edf1ba176be38a0ff8aa4ef1"],["/tags/酷炫/index.html","d7e2216f3211e861ecee04c4b0cc2290"],["/tags/钓鱼/index.html","e0e340a02101298fd2c982c5521be618"],["/tags/镜像/index.html","66791db981896b0dbfc7ebe625cae94c"],["/tags/随机/index.html","d04115f3519b0c3e4560fea9a9989fb0"],["/tags/隐藏/index.html","019636b7ecc909dd836e2942bb56f537"],["/tags/面板/index.html","733ac4e1324375b5a8c034faccb639d6"],["/tags/音乐/index.html","a0502002b564f34268375bd984415db6"],["/tags/高颜值/index.html","9e4e125c7b949fdac522efebe5427321"],["/tags/魔改/index.html","256fed3821deef57bcd5bb36b053ff03"],["/tags/黑名单/index.html","d0cd23c2b00e5d26324ad70d92d39e73"],["/urls/index.html","589c622c9bda50c249f611122255783c"],["/vps/index.html","93f89f4c5ae4c1f5277f0498cd216b79"],["/支持/index.html","0ce57dd26d7a5ec4766f7b6d9ef694d4"]];
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
