/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","e681c8cea62951d3c0b87fecb3e4a2b3"],["/2020/11/29/clash-windows/index.html","5f4dc4cf6992d090f7392aa8a03f5676"],["/2020/11/30/websites2/index.html","ae9e9d7b2bd6a2e59110d695cfed1cda"],["/2020/12/04/iphone4s/index.html","651a4a680df1fe0037699707911cb4ed"],["/2020/12/04/onenote/index.html","c2792ad69a1d1cddfc542c1d2c27b70c"],["/2020/12/04/wesites1/index.html","cdbdeb19bec93b151ff61cbcaee4a074"],["/2020/12/06/nokia808/index.html","fe2948e761e38dde66fe492f863116d3"],["/2020/12/07/ipad1/index.html","2d057b5907dff8d0060555ade9729e7c"],["/2020/12/18/freesubscribes/index.html","77f3108dcc64ecf41da03e5e2f46a8c1"],["/2020/12/19/musics/index.html","05cd5791408e19f4c33c6d3dcfedc0e0"],["/2020/12/19/shadowrocket/index.html","c9d9493c980b32483044181f2c2d12bd"],["/2020/12/19/v2ray-windows/index.html","cb6ffa862aacb296a05f9431ec8d7b3b"],["/2020/12/19/v2rayng/index.html","716936e4bea70ecaaaf503f692a40c3c"],["/2020/12/20/beoplay/index.html","66aa19819a60d2d8f3ed0b0bb0e16bfd"],["/2020/12/20/订阅链接转换/index.html","cfcf4a958d6c7e58eb7a8abc87d73d16"],["/2020/12/21/chrome浏览器下载提速/index.html","5fc71babcf1e2fc20a5e9db2af5dc573"],["/2020/12/21/免费128线程并发下载xdown/index.html","d2d715cfca9a13fb2570ef5d8d69a37d"],["/2020/12/21/免费32线程下载软件ndm/index.html","7f1b7f127661514aa3bbbfc5b27ad6ef"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","ab4e335f623c41eea6c3514f41f2a9aa"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","83052650db968ae4327b517ebc913896"],["/2020/12/21/广告怎么知道我在想什么/index.html","80e6c71f6fc51cdd229b87b596f54927"],["/2020/12/21/无名·引子（小说试写）/index.html","779d2f7c86b03dd11e3e3bc993a1954c"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","6cacd7b11ee722ffad7f75f87079edbe"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","34bf01255a0248d1be26adcc2e70bb2e"],["/2020/12/21/高速轻量下载器aria2/index.html","4ce0a0255e22435ec1993f123606c15f"],["/2020/12/22/2020-cee-roo/index.html","a92a8f3c013c87cc7c9280328bc5ebd1"],["/2020/12/22/firefox插件、github、steam富强/index.html","3ebe3f12dcc4b90b9b10c8fb250fe058"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","c22b184f42920dc1fcdc0a2cbc910c5a"],["/2020/12/26/python-day-1/index.html","2416390f65183936579d9fa6429f65f2"],["/2020/12/26/python-day-2/index.html","6b4ac5b80ef67314f08b7e51d0a4ad04"],["/2020/12/26/度盘不限速下载方式一赏/index.html","8c1d8fbadeac7c354ba391a39ff0ab4e"],["/2020/12/26/添加开机自启软件/index.html","e4c8ec69ebd3369b3b8569d6c1785b51"],["/2020/12/26/电脑端截图方式一赏/index.html","54dc00cee643ba3b73e5b96c4d618937"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","e25c4e3f352963dd4fd8c61f6ac46137"],["/2020/12/27/最安全的浏览器tor/index.html","fb02fc4f413557dd47389dedb2f45383"],["/2020/12/27/网易云刷等级和听歌数量/index.html","b9917609e1766dcbedb7577ca117e3a4"],["/2020/12/28/freenom申请免费域名/index.html","1e1c7436dcccc242e4b65e462a2d2165"],["/2020/12/31/机场/index.html","d054da25f0339117bc88bc9e2c0c6c07"],["/2021/01/01/M1/index.html","b845f219b2a7f9ed4ac61c6bfbe527df"],["/2021/01/01/compress/index.html","7bbed05488012886e58f7a189db0a0ed"],["/2021/01/01/infinityfree/index.html","28bebb5d6f17a4b1439421f41d97b2e9"],["/2021/01/01/硬核翻墙/index.html","21756f2630fc881c716d158ea776f2f4"],["/2021/01/02/qq/index.html","cf9669e1249ce87c89570ad91c40ee3e"],["/2021/01/03/netch/index.html","bbd5e87f051ad1e67a49b4a5eee15c4c"],["/2021/01/03/waifu2x/index.html","b2a2a8a7f1bfcf4b0006cb902e7e38b8"],["/2021/01/04/ads/index.html","a551d4b5b6023f1c5879c24d4ca0eb16"],["/2021/01/04/games/index.html","b5341ecc5d40c4ec1dbb865035cc072e"],["/2021/01/04/heroku/index.html","eceeacb379530c89ea9064c78223f64a"],["/2021/01/06/movies/index.html","98752c2608ddcfc8d5c16f85d9b7abe4"],["/2021/01/07/google2020/index.html","0de3914f8b387ef937ae301433c86c1a"],["/2021/01/07/lucky/index.html","bbf8da536654b9e40adfbe5bc74a0a80"],["/2021/01/07/spotify/index.html","a1942621db84173cf11562889b487047"],["/2021/01/07/thunder/index.html","804a24c1de3dfb99c41496dc453eeb63"],["/2021/01/08/adguardhome/index.html","5520d8b1cf4563e44b1c7306230633fa"],["/2021/01/10/IBM/index.html","679fd671daa552443881ef7e7399af51"],["/2021/01/10/potplayer/index.html","835b31f1e3db02a056b06e96762cf28f"],["/2021/01/10/sakuraanime/index.html","fe0bf5709176e59b2d67edb1866398d7"],["/2021/01/10/美剧星球/index.html","f9dc1579d1a476a294c72eccaab8414b"],["/2021/01/12/telegraph/index.html","e6b08a48280fd1238191686c1f5731f2"],["/2021/01/14/comics/index.html","4990da4ca2703bcd2d5fc80188c8cafb"],["/2021/01/14/ftp/index.html","dc2b7b6057ec40be2c9d28a90b08bdd5"],["/2021/01/14/oraclecloud/index.html","50bd9222397e5798ab80f6c7f4162a52"],["/2021/01/14/porkbun/index.html","a0e99fa3b53fefa37222be55ec994e52"],["/2021/01/14/powertoys/index.html","5b0480641bcad70c5d3ff041f02d88de"],["/2021/01/14/taptap/index.html","fd0f05805bb6a26cb1333241819d465d"],["/2021/01/14/ubuntuvsftp/index.html","64eb8a18d8b32660b938225b3dbdcf29"],["/2021/01/14/小说/index.html","33e4156a2b8c18f1eb7d47e4ae77b654"],["/2021/01/15/freeproxies/index.html","ee66048cdb619e011a7099f18cc5a316"],["/2021/01/15/incaseformat/index.html","d9996d6cbb995c2ae53d1853ac384eb8"],["/2021/01/16/euserv/index.html","d3986c8ce877afeec87c533f0f80a2b9"],["/2021/01/16/winxray/index.html","f2955c0f187e7559cb0f38eee646bce9"],["/2021/01/18/qqreadhistory/index.html","736b9e75757b2b000a7548387a6bddbc"],["/2021/01/18/qqrevoke/index.html","76fb16ead908a0f65982c85a49ca0ed3"],["/2021/01/19/freevpn/index.html","0fef2cc23bad798baaa7c5edaec27c75"],["/2021/01/20/browsertrack/index.html","573edd4b4883f361934bff777cfdca64"],["/2021/01/20/v2ui/index.html","892c2fefbc4220b5fcacdb7c55f0c5c2"],["/2021/01/21/failedtoconnect/index.html","6839e804eb84071a95f3e06b9d913714"],["/2021/01/21/gitcalendar/index.html","6289f493cf6fc36755aff8b9818ad282"],["/2021/01/21/markdownformat/index.html","fc8e5efdc2cb85a1b170fefbf75a6000"],["/2021/01/21/markdowntable/index.html","4d6229ac219de1457ceeeb15cdd9c982"],["/2021/01/21/vercel/index.html","dcffd1a10d64c9fc1644459e4acef2c3"],["/2021/01/22/hardware/index.html","d6cac794b056478fd0fa3dcd246936c4"],["/2021/01/22/muviz/index.html","1f52d2aa5183d25f46b36122fc3bb723"],["/2021/01/22/randomapi/index.html","6ca17117afda774e803d045247f83230"],["/2021/01/22/searchimages/index.html","d611e26e875cd39ec99e632309566533"],["/2021/01/23/RX文件管理器/index.html","f1f8786d005d9f5109984593fb7f0a99"],["/2021/01/23/chromeflag/index.html","437d10b8612971e8de27b8e94de1d16d"],["/2021/01/23/qttabbar/index.html","9807f5727d5a2726a450e0f23b8188fa"],["/2021/01/24/githubspeedup/index.html","364b966872c53bea2e5426f6bd6737a5"],["/2021/01/24/jsdelivr/index.html","9409070ad686de1b1e066aa3533eced1"],["/2021/01/25/note/index.html","7213804cb1d47192c3303ceab8b14494"],["/2021/01/25/soul/index.html","b5a71251d90f331e44ff2e3089e61d30"],["/2021/01/26/herokuxray/index.html","45d5dca99e120c157fe4ce812c35f527"],["/2021/01/27/proxypool/index.html","91d3abbb00bc0b65e4b2ba6fd10c379c"],["/2021/01/27/tracker/index.html","6bbbbe757e9e1f60ec1907dcb0d32311"],["/2021/01/30/pandownphp/index.html","2dfc925d62528602f7edcd1a81a87ef4"],["/2021/01/31/newgroup/index.html","82b2dba8d11d282ccee38f1874520bae"],["/2021/02/01/clashlanguage/index.html","dd2c0b625e5b1ab8b8f392223a61538a"],["/2021/02/01/encrypt/index.html","0258d8bd49fd16e4bca8c1dd96cfcb00"],["/2021/02/01/footermotion/index.html","db16d7d968a53328d83ead8764e85a64"],["/2021/02/01/gitter/index.html","636597266d29ed0f4351a53956914602"],["/2021/02/01/pixivtop50/index.html","4f42df8122a2d2f71613ad174942447a"],["/2021/02/01/scrollbar/index.html","b06ca0de95e9bb830a48585d1ee254a3"],["/2021/02/02/clover/index.html","55782ae649485d75815c8add2349bb16"],["/2021/02/02/maya/index.html","ce5444fb5a10eca59bbf8f462e9e14ec"],["/2021/02/02/speedcontroller/index.html","0c73d75857b9aabc8819463f550f96d0"],["/2021/02/02/yesmusicplayer/index.html","88476246c4ebf03ec19cfc6adf64c7d2"],["/2021/02/03/lenovoonelite/index.html","309ac035bf4f4a8e07f5cded039997ee"],["/2021/02/03/skipads/index.html","33e770238644d059ab91a95bb7db662d"],["/2021/02/04/picseed/index.html","54cb18c4bd18abb5e2d1feddd1d268ff"],["/2021/02/04/renren/index.html","7a5dd1999f9bd2e8786baae628e5e6c3"],["/2021/02/04/serverstress/index.html","727a733a0a96cf37f17838d39e923094"],["/2021/02/04/wikipediazh/index.html","caa2469f4a025db437ebef1d8e70b152"],["/2021/02/05/googlevoice/index.html","03dd943ecc33bf7a5c80d7194a021acf"],["/2021/02/06/clashconnection/index.html","e5312319a1760f858d37f4d395982213"],["/2021/02/06/gvtransfer/index.html","255f264f17cec2f9dba09fdf0e1e121e"],["/2021/02/06/todesk/index.html","fcff90223e34d0a622b7459adc626410"],["/2021/02/06/vpnblacklist/index.html","887f390b7d3ac0d415207aab629313a1"],["/2021/02/07/mklink/index.html","12168d560dde085353ffa2729a036e92"],["/2021/02/07/speedtest/index.html","4af4e23a98ec6b79629d807bccc02bb0"],["/2021/02/07/translate/index.html","1a58010b63d81d2613f14ccbf5b3bc60"],["/2021/02/08/ewomail/index.html","c0985371e117b68464a90c03f315c5d8"],["/2021/02/10/officee5/index.html","85ee118e424a033804cf5a85a6e85714"],["/2021/02/10/raidrive/index.html","89c671df77399f31dc5a98ae68d3f76b"],["/2021/02/13/e5sub/index.html","b1ef48808c0230a350a98aaaea3e2f13"],["/2021/02/14/screen/index.html","553f2771dbf9c6406291845be15c1a52"],["/2021/02/15/clashtun/index.html","95c453784109658f3245b473b0ee5f13"],["/2021/02/15/messageboom/index.html","79a4c3a97a7638b079fc284c07ff5a46"],["/2021/02/15/oneindex/index.html","8ee02317074c6102692112e93902277e"],["/2021/02/16/govsites/index.html","f53690d019c944f8026d7f20e48b0891"],["/2021/02/17/hexototypecho/index.html","3c3205294242c0c03ee0cef722f221e1"],["/2021/02/19/fiddler/index.html","a034a0157c4bd2a01e65ec2029d4ef4b"],["/2021/02/22/potplayerset/index.html","cfefa011315efd434b4e67901f90e416"],["/2021/02/22/studyresource/index.html","23963721752b0af351165b74dd89852f"],["/2021/02/22/telegram/index.html","7b8ca34069cfde0f8e4a476e8cf5db2b"],["/2021/02/22/videos/index.html","672ba9dea85d451855e1d38d892ceb08"],["/2021/02/24/mtproxy/index.html","14e443c7f85609457c7da20d6768a62a"],["/2021/03/10/catchcat/index.html","3dfe9f3b279987978712bda195b00d21"],["/2021/03/10/neteasemusic/index.html","8470f96f9e2aa9787023f7334e7073aa"],["/2021/03/10/surfboard/index.html","ae211fc32cc7a99e08b8deebd4e82004"],["/2021/03/11/vpnandjc/index.html","444d51731b4900325589577416b4ba9c"],["/2021/03/12/qrcodes/index.html","73760ab046b2ca80b83d0914edb6426e"],["/404.html","6f5ab017616bd4d64ffbf4d570c47b14"],["/archives/2020/11/index.html","96683b9715f4834e3636e4297f0ce5df"],["/archives/2020/12/index.html","89b534d1a0e6c6460e02c34c67c3bfa3"],["/archives/2020/12/page/2/index.html","17b21415cdd12ddf56546cb0bf5393b5"],["/archives/2020/12/page/3/index.html","0ae2a02982ec669e6dcfc8d3ef392658"],["/archives/2020/index.html","a73789cb4e1a432df324c338168aa540"],["/archives/2020/page/2/index.html","62d2af707bf237bd0165b50bcb565b53"],["/archives/2020/page/3/index.html","3607fef9ca74387d821edf28148eed75"],["/archives/2021/01/index.html","6a640a7a90a3a05dbda395e89ac87a4f"],["/archives/2021/01/page/2/index.html","523ae6518a2817a8675a20848dce31a4"],["/archives/2021/01/page/3/index.html","49dafae03a86a98cec960355e6d94d0b"],["/archives/2021/01/page/4/index.html","e6a9065b718f50d74ba8edb480dc2d22"],["/archives/2021/02/index.html","b7fdfde023e099b91df763a172ca0a5b"],["/archives/2021/02/page/2/index.html","038faaad2333e4fcfcf870b2ce580263"],["/archives/2021/02/page/3/index.html","f2c3242e86055cc3d1b02d6a0a2f47df"],["/archives/2021/03/index.html","5b4d84a4f07901487a2612e48659b770"],["/archives/2021/index.html","19f1a2d7e7b627587485c60532a4f41a"],["/archives/2021/page/2/index.html","922791104c3a736e74ba451692fbc5b8"],["/archives/2021/page/3/index.html","0a1f20ac1156f7877b38bef64e7b40a9"],["/archives/2021/page/4/index.html","7ef41a0ef2457e3997081036587e4331"],["/archives/2021/page/5/index.html","3c6bf99feab8fea080cf85087d60f0e0"],["/archives/2021/page/6/index.html","f897d43545fdb1c8d7ad1763f4e30242"],["/archives/2021/page/7/index.html","ea9d3670770b12892dcb5c20096a8ee6"],["/archives/index.html","aa97a9c260ebe0b5be48613c57abe573"],["/archives/page/10/index.html","44ec6f1950cdaab612b5ba2f88df6b55"],["/archives/page/2/index.html","d4322e62da91931376d315a9f063843f"],["/archives/page/3/index.html","3ee3fef3b35667ecbe8d628afad69a3c"],["/archives/page/4/index.html","d97ab20037caf84956354b25be12a5f4"],["/archives/page/5/index.html","4819397743b3c79b0207cc08a5cedbea"],["/archives/page/6/index.html","1890edbed76492c86c832bdf4a6611cf"],["/archives/page/7/index.html","8a93b0a844fc6a200651f7349f826cdd"],["/archives/page/8/index.html","9dff4b70622f44ca25629a6eb7c0a92e"],["/archives/page/9/index.html","b3f8c068eaea7a131751f9c103e5c170"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","140dcd77a56c79d9eb0468ec0df6b3cd"],["/catchcathard/index.html","e9291c58bce68730cd21cc4e2b0a474b"],["/catchcatimpossible/index.html","ce8ac7a16e2b7990d9e0aeb78de4c0db"],["/catchcatmid/index.html","dc073d912aef351b621ce171416ebd82"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/categories/VPN/index.html","212a3ac1ce6623c15c9e5fa94a8e1399"],["/categories/VPS/index.html","009da4d07dbbdc7eba974c87c4f37b63"],["/categories/index.html","d396707da3d8bc29ea20aa08bbc013a8"],["/categories/下载/index.html","a7ced0f222c26ba697d5abf0b0afbc6c"],["/categories/安全/index.html","ee5b99540fa077c7fbe6944f68c8a571"],["/categories/建站/index.html","3e81ed441b0953567900540512564c71"],["/categories/杂/index.html","696658486cb507daaf830c8770ad3357"],["/categories/杂/page/2/index.html","781de3fbf4b52b4013c76e89d5336dc9"],["/categories/测评/index.html","d330893219411a62f698c7c145cbc6e3"],["/categories/科学上网/index.html","347b6cbfed2df51797add326aee458ac"],["/categories/科学上网/page/2/index.html","6b94ecf6a2a0d79ca10380158b35e754"],["/categories/编程/index.html","89de42a801fc979e9db33cb4facff949"],["/categories/网站/index.html","50943e435f41559e76fe25612065b775"],["/categories/网站/page/2/index.html","5631ffcfcc70626f531be7961c2adbd4"],["/categories/软件/index.html","9bf33158962fbbfa0fd8ccbe00d271f7"],["/categories/软件/page/2/index.html","2b3ab49ea393eacac21e7d1c9a5e53cc"],["/categories/软件/page/3/index.html","a9415f72c0d074a87f8f19c755cb10ad"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","96d068fd98ddf074312fe19b9823e9ad"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","b1b51e7733ea12897c92c101071bb310"],["/ios/index.html","2e85f5af2c3fa15ff42645917475a2b2"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","3425585a055c6731cad125719c4ddde4"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","a27ca0949320893778228ed7bcc34077"],["/page/2/index.html","f748f16d9be33de11c44d16f54360a51"],["/page/3/index.html","85d801e70bd371d7b284b655d464f8f5"],["/page/4/index.html","9ce73b2daefd870c89dcccda75aa74c3"],["/page/5/index.html","8976815e3a5cd062bd6024f5cc8f702d"],["/page/6/index.html","de9c5fdb9144beb853bc4aa9deec01cf"],["/page/7/index.html","913c1547a2266c39b3d5b9962d61bdda"],["/page/8/index.html","37e314c595a7ae80ba0840395afa714e"],["/page/9/index.html","b513e954525fee918892fbac4de0d3d3"],["/payment/index.html","63861dc4049e876a04a20b2b0a7e6682"],["/privacy-policy/index.html","b152aa4fb6f19512cbfc6bb6b165a59e"],["/rss2.xml","9eb7fddddd8bb2f45f2cd502c5e562cf"],["/search.xml","3e29bd10944a0aa3e296237bd3ea5b6a"],["/sitemap.xml","bbdcb751cec94d8f1fc89d223ba49177"],["/sw-register.js","c66515bae68474e68f039d3f81202246"],["/tags/5t/index.html","da521a7a1c9689c6d12e9cd7282c8527"],["/tags/Clash/index.html","974e1e50ba28589e5bb481e843038739"],["/tags/Clover/index.html","43d8d738e0301d10ae8b12edc7f33fc4"],["/tags/E5/index.html","6116df6251de42c9b765a97f7471a620"],["/tags/FTP/index.html","1a100ddbe9be64f8eff21ad795244048"],["/tags/GitHub/index.html","4c85f9b37ce9ffeeae26c43d494c1bc8"],["/tags/Heroku/index.html","e055dc912586706bc329ef570278e16f"],["/tags/Hexo/index.html","e59599c894e5dbfdcfaf5b7d3670e058"],["/tags/Lenovo/index.html","d00b3868d5e5d12e339cc3783e882350"],["/tags/Oneindex/index.html","2657eab5da572149fa3af372af5b4b19"],["/tags/QQ/index.html","e510e647167350b324406529b8c98376"],["/tags/QTTabbar/index.html","eace24f917432a8c3239ff3cd317e036"],["/tags/RX文件管理器/index.html","1e32d3faa15eb2f4fb1e00da2b0a508d"],["/tags/Todesk/index.html","99e0f40c554ad255dab9f81850546a44"],["/tags/Vercel/index.html","5e20d3ff11324bf1ca39c95cb3a8ce8f"],["/tags/ads/index.html","86ebd8906b2e98843b7aa060cf3ee016"],["/tags/api/index.html","4a205ddead4fc1c4d5432c2e34e6cd09"],["/tags/app/index.html","6e272ebc6ab41965a52ddf91fe131f9f"],["/tags/blacklist/index.html","20aa3b5ee36219194e86d9de3408ff94"],["/tags/butterfly/index.html","497b563cb5a0a0794431d2b4e68d658c"],["/tags/chrome/index.html","9450759fbd1b6216ecc792354d0d5790"],["/tags/cloudflare/index.html","7169303a67a5a09cb315325701497e3a"],["/tags/cmd/index.html","9193b3078e363e3821e534be41066d55"],["/tags/c盘/index.html","7b0f088fc4ae632266fafea375a630b6"],["/tags/email/index.html","cc3db6d76d52fd2f68bd1b2f3c721f86"],["/tags/ewomail/index.html","061026e893a7eb3d18b76a5138b20b53"],["/tags/fiddler/index.html","1d56c8f0a3b78aab09062d51ccfc8e33"],["/tags/flags/index.html","423c4028b29fcb1a0b903f1b21714e38"],["/tags/footer，页脚/index.html","551b40b3509d054aa29fa54123dcbfc9"],["/tags/galgame/index.html","d8e49ee61a118fc8f3d83f7afa3021df"],["/tags/git/index.html","9a578ad0f012d44527d8665719c875d3"],["/tags/gitcalendar/index.html","453eef1f20668f167f3957b4e8802f96"],["/tags/google-voice/index.html","d361ef7f954239c82222b1a017ecec82"],["/tags/gv/index.html","a56c67d82c0326829c5d512e08a88ea8"],["/tags/html/index.html","92c11b19d28285e86f0f799e9eff5acb"],["/tags/index-1.html","0ccd892d6edb6c97882f5cc3ef170619"],["/tags/index.html","f9ca87683127d7e492e199071fbe661a"],["/tags/js/index.html","9198fc8ba15d058108768514349d5876"],["/tags/jsdelivr/index.html","d08a7f6f87e2edc66f5e306f8feb6355"],["/tags/linux/index.html","aeeba6301751f1be5a2ff21b91d67fa4"],["/tags/madVR/index.html","2092189d24a865a9ef6fe6af457956e4"],["/tags/markdown/index.html","5441e6ed8d258be6ddf1d595652cb83c"],["/tags/maya/index.html","b42720e61eda904aa0294fd40e856902"],["/tags/mklink/index.html","e9649fe2a9e162e03d948612a250e099"],["/tags/office-e5/index.html","d3871a455511def3110ba1d0fe5dd4f5"],["/tags/onedrive/index.html","9cff513b0103d2a67f30706c74f7d4b7"],["/tags/picGO/index.html","1d868647bb49e81b5b8909668a334042"],["/tags/pixiv/index.html","57c22210a96d8a68f6b056faaa96bf12"],["/tags/potplayer/index.html","4831ea6722b5ef00c9885400b04a13c8"],["/tags/proxypool/index.html","9c6d28fdad7a829b2ee43d77273ca024"],["/tags/qbitorrent/index.html","214080d8300dab270404dd7b68d5f2c7"],["/tags/raidrive/index.html","33afa6e9740708e39686c42195911774"],["/tags/screen/index.html","96eac073928e7634c6e6ac1cca93816c"],["/tags/speedtest/index.html","25ab0fa2b2b3721633325541cbef40c8"],["/tags/ss/index.html","d763d856417c795801868b74ce6fa05e"],["/tags/ssr/index.html","f4c0e506d697d0a4985fd2f4d0f0748a"],["/tags/surfboard/index.html","dc085018a8d33e4318ae32d8c4af55c4"],["/tags/tap/index.html","de4c05ce8731aa1944e92fee1ad3169e"],["/tags/telegram/index.html","b36188d5e893c2322790de13ec787486"],["/tags/telegram代理/index.html","d2606d8a84acd880b7e759d924cfb3d3"],["/tags/tg/index.html","5ba6e5ace3944704cec6d68b79e0f643"],["/tags/tg代理/index.html","a60f6b4bbcee1441e5b5f7274927066e"],["/tags/top50/index.html","0f7a3479c1bb53bc224e9bda5d931079"],["/tags/tracker/index.html","4973ca83c552c06cccaf814540fd3e23"],["/tags/translate/index.html","704d225b19d7ac2849a1b90206627140"],["/tags/translater/index.html","26bb33ec20f3627de0869f71eb5d5490"],["/tags/tun/index.html","392b2488095175ee203f2f5bf6acedbc"],["/tags/typecho/index.html","cbfe404a6a36da1900e135fca572c3c0"],["/tags/v2ray/index.html","d69ab2fa2db4cd51ea8de7f3ce74caec"],["/tags/vpn/index.html","44a0b4bd0e53f26f54b495bdf1b78ee7"],["/tags/vps/index.html","4ab4f16c460b4048fd64d86465902c90"],["/tags/windows/index.html","7a474e2f3f07fa8e573b1f0f8848c701"],["/tags/windows端/index.html","f0f8cd78598d8c851633957fc99ada39"],["/tags/xray/index.html","3e3cc6fe72a79d0c81fe00b7088d6ba4"],["/tags/下载/index.html","b54669a25ab04abcf55996c7361a5798"],["/tags/不限速/index.html","787c1f64495340761fab876d5f5e41f4"],["/tags/个人网盘/index.html","7190aea26f1db356dfb1b6da9b48e37a"],["/tags/主题/index.html","a5f4830a8d7cb8452ec62cd69087ee3a"],["/tags/云便签/index.html","3814dfb0f83be50a212517cebd045ba6"],["/tags/云盘/index.html","fd291cc4b393def5e8224c36c5507ade"],["/tags/人人/index.html","a5e795590b587f111fae2fc77be06594"],["/tags/代理/index.html","a8884120a3dc685b0132b09d9221a5f8"],["/tags/代码/index.html","5b7b8d85156e2d289870b6ba88730f95"],["/tags/优选IP/index.html","67e476aa9808bbdd47c90130601f1c8f"],["/tags/便签/index.html","dc4d5b240fd1eeaa3a14d2a6534630ff"],["/tags/保号/index.html","43b51f507f9cb546b0dc58c94f05eba7"],["/tags/免费/index.html","d5389e4ed5098b40aef83bc8b310dfb3"],["/tags/免费节点/index.html","da53efb8a9d47ea1b5f5f5ea54efc920"],["/tags/加密/index.html","5ee4b4a3a86f1475991139308c0aed32"],["/tags/动画/index.html","1a0b363d41ce9acee6483e1ad0a692f1"],["/tags/博客/index.html","f459c882e6504677bca1b65681133c62"],["/tags/历史记录/index.html","8b2dc6016000545acf384d6a079f99e4"],["/tags/压力/index.html","f214654acab8e6d51248f42783c6be9e"],["/tags/压缩包/index.html","9e4bdf87d746738dc2089b3cf6967617"],["/tags/反代/index.html","ab2a6f007aae912e02f5ea74ea312814"],["/tags/可视化/index.html","46ddba588217cfc3520717d639abf59d"],["/tags/命令/index.html","2225ecbddae0b5490dc596cd9f9c4d29"],["/tags/国家/index.html","e4787e681be990b6c5922fd3076b4840"],["/tags/图床/index.html","de5093c7c55a52be550352c55e346826"],["/tags/图片/index.html","08509b53924fd67a2c4d68cda426ef94"],["/tags/域名/index.html","01983a1e2fc9b09472df0628498f85b4"],["/tags/多标签/index.html","45f786fa0defd2665de04986a780ab68"],["/tags/存储/index.html","d8a89eb9b1905d1b8e20313eb3aff3c8"],["/tags/学习/index.html","460a004715798e1d23b8efbeae53d26f"],["/tags/安全/index.html","80b7675a167ad0aef7a872d77433320d"],["/tags/安卓/index.html","1d6ab15e601e64f0b8d7d9296d4e68ae"],["/tags/宝塔/index.html","1c4b904b2a3ace19a8f0c5462c5a3dd2"],["/tags/小游戏/index.html","e92b35c165636b5fc9059cf098d6cd23"],["/tags/广告/index.html","a9f1a199d7c823848b2f933209fa7c55"],["/tags/建站/index.html","daf20b8489653494a59f510a63e5533b"],["/tags/影视/index.html","69fc7102a4c938a4464cd130b830e440"],["/tags/快速启动/index.html","31a54cfce66ce20a0a8078cbaaa2fae9"],["/tags/手机/index.html","f2adec57eee369d8847fda55920e96b0"],["/tags/托管/index.html","acfc8ef53e8ede1caa8b5f6ce6926848"],["/tags/抓包/index.html","9c1c503543776fec5e7762437fa347a2"],["/tags/抓取/index.html","81a465ba486ee8c4e95336eec11eb067"],["/tags/投屏/index.html","3e9fcccfdc3b13f7b3c78accdbfa8d70"],["/tags/拓展功能/index.html","4739e4de4adfa6f4cb2f4ed35728f1ac"],["/tags/挂载/index.html","ebf04d88c67ec9d00229b9d8e94b24f4"],["/tags/指纹/index.html","e0be8189a8787abf183666aaa29cbf0a"],["/tags/接口/index.html","dd06de4223d710bf4f7f938870b8b65c"],["/tags/提取图片/index.html","518199220ac35855bd341612878047ce"],["/tags/插件/index.html","92a1fd7c1683e7a9c24333cfcfea76c2"],["/tags/搜图/index.html","6a66f84cd5cd847d1b4569f8b292aa8c"],["/tags/搭建/index.html","7adffc4ea43173094f5ef84c5c0a83cb"],["/tags/撤回/index.html","9d3b6f4826377ada9e5da097908baa37"],["/tags/播放器/index.html","2cf9aadb2d5030e45dd83d822e31f9e4"],["/tags/政府网站/index.html","da2210b7e10716aa789b5b43fc5247c3"],["/tags/效率/index.html","8add18cc82478cf79fb116a1ad78c8ef"],["/tags/日历/index.html","44e91db3ce1a044ec45178ba75520d49"],["/tags/服务器/index.html","b4d7c2e740221e7e2ec8a4ac0de84074"],["/tags/机场/index.html","419e1333ee1ca0669006fe9fc09ba78a"],["/tags/桌面/index.html","5ce670c649ad008034a41fce51071669"],["/tags/梯子/index.html","e4497087f247a4b02a65019603d4246f"],["/tags/检测工具/index.html","81566c2efc03a620cda3e95746ecc94e"],["/tags/汉化/index.html","e5af4a7131344bb62c5fa8db783eb1e6"],["/tags/测压/index.html","43284aa13b5ca30ec442cbfa4cfe2ac0"],["/tags/测速/index.html","19a86b69f51fbf689cc8f142169b9d81"],["/tags/浏览器/index.html","5063ba2ebdf6f96b44d636d61fd1d359"],["/tags/清理/index.html","8ee414f4c17090cc1a3999bfc05e3d53"],["/tags/滚动条/index.html","620bdf974db2c52599efa885e8a054b6"],["/tags/灰色歌曲/index.html","a483eb0cd6c90851e2a16b34d90680e6"],["/tags/电影/index.html","0acb8c343c935857e0aea636714011aa"],["/tags/电视剧/index.html","e57583b7fd61fa472c67ffd5dbba4e23"],["/tags/白嫖/index.html","b842bbbcdb58b02474e538e5314b9b6a"],["/tags/百度/index.html","9fc9daf10fd064b36b8a78caf3819810"],["/tags/百度云盘/index.html","e16f3ecd17c92c677c3152a22e09ca2a"],["/tags/百科/index.html","35282d5d4a8438495fd0014c233e8f1a"],["/tags/短信/index.html","19d271edd4266a2f045599bfb67d373e"],["/tags/硬件/index.html","7ee0c73a4477b3e2f502d81d3c076cc8"],["/tags/科学上网/index.html","0beceaaccfcc631da44e70b711cb7c9f"],["/tags/空间/index.html","0eb4d8c65117002bfc7dbb0a7fa221e2"],["/tags/笔记/index.html","a90532d2dd201d02427c7d10d7bf01e8"],["/tags/简洁/index.html","5f014c984739ce0bcdec3d5045b0ecf6"],["/tags/简约/index.html","42e87793d0eaf26a480cbbad19a041ca"],["/tags/维基/index.html","15a3c43c60129c852df43005e2868f07"],["/tags/网易云/index.html","dc96fb25a80b54390fcda0224d5cd227"],["/tags/网盘/index.html","4b3b896f4aeed2af6a799a25f01f6522"],["/tags/网站/index.html","8c3f8465e925ddb7a62989162ad82d49"],["/tags/网络/index.html","1033b8d41760a8ec3e69186d0e532e9c"],["/tags/美化/index.html","0879aeb93a72c673cb0769f77485aee7"],["/tags/翻墙/index.html","d3067e36eb6fca7a6d4109b6ba64ca29"],["/tags/翻译/index.html","fc5aaa1a6531c4369f386431b258824a"],["/tags/翻译器/index.html","5dc6d96cd11b1f1cbc22690eaab92e0e"],["/tags/聊天/index.html","b685d02fe15101c4939cb2062126c540"],["/tags/聊天室/index.html","866e4bf07b6c0487f0e961033e686bfc"],["/tags/联想/index.html","52271226818436351ca4e1f467824fd5"],["/tags/节点/index.html","1e5ae76ed13445e0d245412038d76f86"],["/tags/虚拟手机号/index.html","cf4572d77da0c26a4171dacb5a3f7211"],["/tags/补丁/index.html","73e4777812bb0ed9db3b97756be997c3"],["/tags/视频/index.html","e3c5831a2d4570a4b271a945fdf230b7"],["/tags/解析/index.html","72463244113aba7dcd21b8d69e39f656"],["/tags/订阅链接/index.html","6e2f8ae1bd9c5b905226fe37609d234a"],["/tags/记录/index.html","97ffa47366f684d984f8b5c675037db8"],["/tags/识图/index.html","7f1f22f550116253b7b40b86331fbb92"],["/tags/语言/index.html","c9985cba87f1439d7f30778310246a59"],["/tags/资源/index.html","6e81eaffd23eeac57b29926aa93bc137"],["/tags/资源管理器/index.html","2ba4896770a3214b6ebf3e31f533797e"],["/tags/转移/index.html","44abc3c4d42a9d2750f1598f500ba8b1"],["/tags/软件/index.html","739d280a425ab104568c697b2925dfd4"],["/tags/轰炸/index.html","1c96ed2033cf54bbd3a19f3c30b5c695"],["/tags/迁移/index.html","1dbceb4a922869e7cbbf887825fc6d4a"],["/tags/远程控制/index.html","18ed5b9d204f6f2ee286a3cd33e2b026"],["/tags/连接/index.html","931b003fb5e3ca270328215d68573e4e"],["/tags/追踪/index.html","98f22c31ee35cb67e5d296074b409b8a"],["/tags/速度/index.html","d56e02e4fee11844278e11ad1d5c4de7"],["/tags/邮箱/index.html","b71d4d74b19558f990432ef131c17a81"],["/tags/酷炫/index.html","48cbbf3190b16d5958091d5d2b1f5761"],["/tags/钓鱼/index.html","5a365ac64feb01d903811908c0de0e96"],["/tags/镜像/index.html","71d401bb2241fd524eeed70597faf761"],["/tags/随机/index.html","476f1524f132f31e7851de7938a88ba7"],["/tags/隐藏/index.html","66d9de631c17005f27aef52f4e2b828c"],["/tags/面板/index.html","2989729c1900c947d3a680e7a5bbcd0b"],["/tags/音乐/index.html","192195d8f42648c29ba0efe8f209d353"],["/tags/高颜值/index.html","e10ab223634e2471d200924da987aad5"],["/tags/魔改/index.html","edf9cf221697bbb62301b8dd7ffe89f6"],["/tags/黑名单/index.html","0066d35ec95b15e2d379d01362db60aa"],["/urls/index.html","e2b7ca7aa79df0a240e85775603e9e67"],["/vps/index.html","c45659fdf8bf42ac8997de22c407eeb9"],["/支持/index.html","a6bebf09110bd974643c5c1470c3cd8a"]];
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
