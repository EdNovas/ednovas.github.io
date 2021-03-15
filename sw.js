/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","e681c8cea62951d3c0b87fecb3e4a2b3"],["/2020/11/29/clash-windows/index.html","5f4dc4cf6992d090f7392aa8a03f5676"],["/2020/11/30/websites2/index.html","ae9e9d7b2bd6a2e59110d695cfed1cda"],["/2020/12/04/iphone4s/index.html","651a4a680df1fe0037699707911cb4ed"],["/2020/12/04/onenote/index.html","c2792ad69a1d1cddfc542c1d2c27b70c"],["/2020/12/04/wesites1/index.html","cdbdeb19bec93b151ff61cbcaee4a074"],["/2020/12/06/nokia808/index.html","fe2948e761e38dde66fe492f863116d3"],["/2020/12/07/ipad1/index.html","2d057b5907dff8d0060555ade9729e7c"],["/2020/12/18/freesubscribes/index.html","77f3108dcc64ecf41da03e5e2f46a8c1"],["/2020/12/19/musics/index.html","05cd5791408e19f4c33c6d3dcfedc0e0"],["/2020/12/19/shadowrocket/index.html","c9d9493c980b32483044181f2c2d12bd"],["/2020/12/19/v2ray-windows/index.html","cb6ffa862aacb296a05f9431ec8d7b3b"],["/2020/12/19/v2rayng/index.html","716936e4bea70ecaaaf503f692a40c3c"],["/2020/12/20/beoplay/index.html","66aa19819a60d2d8f3ed0b0bb0e16bfd"],["/2020/12/20/订阅链接转换/index.html","cfcf4a958d6c7e58eb7a8abc87d73d16"],["/2020/12/21/chrome浏览器下载提速/index.html","5fc71babcf1e2fc20a5e9db2af5dc573"],["/2020/12/21/免费128线程并发下载xdown/index.html","d2d715cfca9a13fb2570ef5d8d69a37d"],["/2020/12/21/免费32线程下载软件ndm/index.html","7f1b7f127661514aa3bbbfc5b27ad6ef"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","ab4e335f623c41eea6c3514f41f2a9aa"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","83052650db968ae4327b517ebc913896"],["/2020/12/21/广告怎么知道我在想什么/index.html","80e6c71f6fc51cdd229b87b596f54927"],["/2020/12/21/无名·引子（小说试写）/index.html","779d2f7c86b03dd11e3e3bc993a1954c"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","6cacd7b11ee722ffad7f75f87079edbe"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","34bf01255a0248d1be26adcc2e70bb2e"],["/2020/12/21/高速轻量下载器aria2/index.html","4ce0a0255e22435ec1993f123606c15f"],["/2020/12/22/2020-cee-roo/index.html","a92a8f3c013c87cc7c9280328bc5ebd1"],["/2020/12/22/firefox插件、github、steam富强/index.html","3ebe3f12dcc4b90b9b10c8fb250fe058"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","c22b184f42920dc1fcdc0a2cbc910c5a"],["/2020/12/26/python-day-1/index.html","2416390f65183936579d9fa6429f65f2"],["/2020/12/26/python-day-2/index.html","6b4ac5b80ef67314f08b7e51d0a4ad04"],["/2020/12/26/度盘不限速下载方式一赏/index.html","8c1d8fbadeac7c354ba391a39ff0ab4e"],["/2020/12/26/添加开机自启软件/index.html","e4c8ec69ebd3369b3b8569d6c1785b51"],["/2020/12/26/电脑端截图方式一赏/index.html","54dc00cee643ba3b73e5b96c4d618937"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","e25c4e3f352963dd4fd8c61f6ac46137"],["/2020/12/27/最安全的浏览器tor/index.html","fb02fc4f413557dd47389dedb2f45383"],["/2020/12/27/网易云刷等级和听歌数量/index.html","b9917609e1766dcbedb7577ca117e3a4"],["/2020/12/28/freenom申请免费域名/index.html","1e1c7436dcccc242e4b65e462a2d2165"],["/2020/12/31/机场/index.html","d054da25f0339117bc88bc9e2c0c6c07"],["/2021/01/01/M1/index.html","b845f219b2a7f9ed4ac61c6bfbe527df"],["/2021/01/01/compress/index.html","7bbed05488012886e58f7a189db0a0ed"],["/2021/01/01/infinityfree/index.html","28bebb5d6f17a4b1439421f41d97b2e9"],["/2021/01/01/硬核翻墙/index.html","21756f2630fc881c716d158ea776f2f4"],["/2021/01/02/qq/index.html","cf9669e1249ce87c89570ad91c40ee3e"],["/2021/01/03/netch/index.html","bbd5e87f051ad1e67a49b4a5eee15c4c"],["/2021/01/03/waifu2x/index.html","b2a2a8a7f1bfcf4b0006cb902e7e38b8"],["/2021/01/04/ads/index.html","a551d4b5b6023f1c5879c24d4ca0eb16"],["/2021/01/04/games/index.html","b5341ecc5d40c4ec1dbb865035cc072e"],["/2021/01/04/heroku/index.html","eceeacb379530c89ea9064c78223f64a"],["/2021/01/06/movies/index.html","98752c2608ddcfc8d5c16f85d9b7abe4"],["/2021/01/07/google2020/index.html","0de3914f8b387ef937ae301433c86c1a"],["/2021/01/07/lucky/index.html","bbf8da536654b9e40adfbe5bc74a0a80"],["/2021/01/07/spotify/index.html","a1942621db84173cf11562889b487047"],["/2021/01/07/thunder/index.html","804a24c1de3dfb99c41496dc453eeb63"],["/2021/01/08/adguardhome/index.html","5520d8b1cf4563e44b1c7306230633fa"],["/2021/01/10/IBM/index.html","679fd671daa552443881ef7e7399af51"],["/2021/01/10/potplayer/index.html","835b31f1e3db02a056b06e96762cf28f"],["/2021/01/10/sakuraanime/index.html","fe0bf5709176e59b2d67edb1866398d7"],["/2021/01/10/美剧星球/index.html","f9dc1579d1a476a294c72eccaab8414b"],["/2021/01/12/telegraph/index.html","e6b08a48280fd1238191686c1f5731f2"],["/2021/01/14/comics/index.html","4990da4ca2703bcd2d5fc80188c8cafb"],["/2021/01/14/ftp/index.html","dc2b7b6057ec40be2c9d28a90b08bdd5"],["/2021/01/14/oraclecloud/index.html","50bd9222397e5798ab80f6c7f4162a52"],["/2021/01/14/porkbun/index.html","a0e99fa3b53fefa37222be55ec994e52"],["/2021/01/14/powertoys/index.html","5b0480641bcad70c5d3ff041f02d88de"],["/2021/01/14/taptap/index.html","fd0f05805bb6a26cb1333241819d465d"],["/2021/01/14/ubuntuvsftp/index.html","64eb8a18d8b32660b938225b3dbdcf29"],["/2021/01/14/小说/index.html","33e4156a2b8c18f1eb7d47e4ae77b654"],["/2021/01/15/freeproxies/index.html","ee66048cdb619e011a7099f18cc5a316"],["/2021/01/15/incaseformat/index.html","d9996d6cbb995c2ae53d1853ac384eb8"],["/2021/01/16/euserv/index.html","d3986c8ce877afeec87c533f0f80a2b9"],["/2021/01/16/winxray/index.html","f2955c0f187e7559cb0f38eee646bce9"],["/2021/01/18/qqreadhistory/index.html","736b9e75757b2b000a7548387a6bddbc"],["/2021/01/18/qqrevoke/index.html","76fb16ead908a0f65982c85a49ca0ed3"],["/2021/01/19/freevpn/index.html","0fef2cc23bad798baaa7c5edaec27c75"],["/2021/01/20/browsertrack/index.html","573edd4b4883f361934bff777cfdca64"],["/2021/01/20/v2ui/index.html","892c2fefbc4220b5fcacdb7c55f0c5c2"],["/2021/01/21/failedtoconnect/index.html","6839e804eb84071a95f3e06b9d913714"],["/2021/01/21/gitcalendar/index.html","6289f493cf6fc36755aff8b9818ad282"],["/2021/01/21/markdownformat/index.html","fc8e5efdc2cb85a1b170fefbf75a6000"],["/2021/01/21/markdowntable/index.html","4d6229ac219de1457ceeeb15cdd9c982"],["/2021/01/21/vercel/index.html","dcffd1a10d64c9fc1644459e4acef2c3"],["/2021/01/22/hardware/index.html","d6cac794b056478fd0fa3dcd246936c4"],["/2021/01/22/muviz/index.html","1f52d2aa5183d25f46b36122fc3bb723"],["/2021/01/22/randomapi/index.html","6ca17117afda774e803d045247f83230"],["/2021/01/22/searchimages/index.html","d611e26e875cd39ec99e632309566533"],["/2021/01/23/RX文件管理器/index.html","f1f8786d005d9f5109984593fb7f0a99"],["/2021/01/23/chromeflag/index.html","437d10b8612971e8de27b8e94de1d16d"],["/2021/01/23/qttabbar/index.html","9807f5727d5a2726a450e0f23b8188fa"],["/2021/01/24/githubspeedup/index.html","364b966872c53bea2e5426f6bd6737a5"],["/2021/01/24/jsdelivr/index.html","9409070ad686de1b1e066aa3533eced1"],["/2021/01/25/note/index.html","7213804cb1d47192c3303ceab8b14494"],["/2021/01/25/soul/index.html","b5a71251d90f331e44ff2e3089e61d30"],["/2021/01/26/herokuxray/index.html","45d5dca99e120c157fe4ce812c35f527"],["/2021/01/27/proxypool/index.html","91d3abbb00bc0b65e4b2ba6fd10c379c"],["/2021/01/27/tracker/index.html","6bbbbe757e9e1f60ec1907dcb0d32311"],["/2021/01/30/pandownphp/index.html","2dfc925d62528602f7edcd1a81a87ef4"],["/2021/01/31/newgroup/index.html","82b2dba8d11d282ccee38f1874520bae"],["/2021/02/01/clashlanguage/index.html","dd2c0b625e5b1ab8b8f392223a61538a"],["/2021/02/01/encrypt/index.html","0258d8bd49fd16e4bca8c1dd96cfcb00"],["/2021/02/01/footermotion/index.html","db16d7d968a53328d83ead8764e85a64"],["/2021/02/01/gitter/index.html","636597266d29ed0f4351a53956914602"],["/2021/02/01/pixivtop50/index.html","4f42df8122a2d2f71613ad174942447a"],["/2021/02/01/scrollbar/index.html","b06ca0de95e9bb830a48585d1ee254a3"],["/2021/02/02/clover/index.html","55782ae649485d75815c8add2349bb16"],["/2021/02/02/maya/index.html","ce5444fb5a10eca59bbf8f462e9e14ec"],["/2021/02/02/speedcontroller/index.html","0c73d75857b9aabc8819463f550f96d0"],["/2021/02/02/yesmusicplayer/index.html","88476246c4ebf03ec19cfc6adf64c7d2"],["/2021/02/03/lenovoonelite/index.html","309ac035bf4f4a8e07f5cded039997ee"],["/2021/02/03/skipads/index.html","33e770238644d059ab91a95bb7db662d"],["/2021/02/04/picseed/index.html","54cb18c4bd18abb5e2d1feddd1d268ff"],["/2021/02/04/renren/index.html","7a5dd1999f9bd2e8786baae628e5e6c3"],["/2021/02/04/serverstress/index.html","727a733a0a96cf37f17838d39e923094"],["/2021/02/04/wikipediazh/index.html","caa2469f4a025db437ebef1d8e70b152"],["/2021/02/05/googlevoice/index.html","03dd943ecc33bf7a5c80d7194a021acf"],["/2021/02/06/clashconnection/index.html","e5312319a1760f858d37f4d395982213"],["/2021/02/06/gvtransfer/index.html","255f264f17cec2f9dba09fdf0e1e121e"],["/2021/02/06/todesk/index.html","fcff90223e34d0a622b7459adc626410"],["/2021/02/06/vpnblacklist/index.html","887f390b7d3ac0d415207aab629313a1"],["/2021/02/07/mklink/index.html","12168d560dde085353ffa2729a036e92"],["/2021/02/07/speedtest/index.html","4af4e23a98ec6b79629d807bccc02bb0"],["/2021/02/07/translate/index.html","1a58010b63d81d2613f14ccbf5b3bc60"],["/2021/02/08/ewomail/index.html","c0985371e117b68464a90c03f315c5d8"],["/2021/02/10/officee5/index.html","85ee118e424a033804cf5a85a6e85714"],["/2021/02/10/raidrive/index.html","89c671df77399f31dc5a98ae68d3f76b"],["/2021/02/13/e5sub/index.html","b1ef48808c0230a350a98aaaea3e2f13"],["/2021/02/14/screen/index.html","553f2771dbf9c6406291845be15c1a52"],["/2021/02/15/clashtun/index.html","95c453784109658f3245b473b0ee5f13"],["/2021/02/15/messageboom/index.html","79a4c3a97a7638b079fc284c07ff5a46"],["/2021/02/15/oneindex/index.html","8ee02317074c6102692112e93902277e"],["/2021/02/16/govsites/index.html","f53690d019c944f8026d7f20e48b0891"],["/2021/02/17/hexototypecho/index.html","3c3205294242c0c03ee0cef722f221e1"],["/2021/02/19/fiddler/index.html","a034a0157c4bd2a01e65ec2029d4ef4b"],["/2021/02/22/potplayerset/index.html","cfefa011315efd434b4e67901f90e416"],["/2021/02/22/studyresource/index.html","23963721752b0af351165b74dd89852f"],["/2021/02/22/telegram/index.html","7b8ca34069cfde0f8e4a476e8cf5db2b"],["/2021/02/22/videos/index.html","672ba9dea85d451855e1d38d892ceb08"],["/2021/02/24/mtproxy/index.html","14e443c7f85609457c7da20d6768a62a"],["/2021/03/10/catchcat/index.html","3dfe9f3b279987978712bda195b00d21"],["/2021/03/10/neteasemusic/index.html","8470f96f9e2aa9787023f7334e7073aa"],["/2021/03/10/surfboard/index.html","ae211fc32cc7a99e08b8deebd4e82004"],["/2021/03/11/vpnandjc/index.html","444d51731b4900325589577416b4ba9c"],["/2021/03/12/qrcodes/index.html","73760ab046b2ca80b83d0914edb6426e"],["/404.html","884ae370348004d3a2f2465f8d94698b"],["/archives/2020/11/index.html","4575c0c694027e68b14b562e166b20b5"],["/archives/2020/12/index.html","58f5be79869e14c1517f1808e321c889"],["/archives/2020/12/page/2/index.html","2e4d92c9be6d06838df452313eeb566a"],["/archives/2020/12/page/3/index.html","9f7ac0a1b60f6b85c18a6f9fbc62e592"],["/archives/2020/index.html","b81200b3e8cde08bd1e87e0db7adf423"],["/archives/2020/page/2/index.html","66c4a9a46f55f2b735a11b1901a191c6"],["/archives/2020/page/3/index.html","690cea25b45e4ae3d22ec217ee797a4d"],["/archives/2021/01/index.html","f49fa64a7274af92fcda78c19cbb3bb4"],["/archives/2021/01/page/2/index.html","235d458d285cf5269dfb858d8108768d"],["/archives/2021/01/page/3/index.html","75cbbe71def8ba9a77ec092cdd7df569"],["/archives/2021/01/page/4/index.html","e3dc45c0f4c1e0587d4de1d2aa4fb45a"],["/archives/2021/02/index.html","7db6673f0ebb08288e7ed49fd49efa5a"],["/archives/2021/02/page/2/index.html","3c28e0a4df9f1b9ad3f7e5a168f90b6d"],["/archives/2021/02/page/3/index.html","62d9e99a1948e1f5fec525ad82e9123d"],["/archives/2021/03/index.html","79bdd6faea47a7509557a8131c2c4f39"],["/archives/2021/index.html","d0819831d8108a1922284c4659cdf97c"],["/archives/2021/page/2/index.html","bef61fe68d7b0f73002cd7f766a8f643"],["/archives/2021/page/3/index.html","633f7cb315dd716d8c34b1096e4394f7"],["/archives/2021/page/4/index.html","802c461f3aad0cd4481d248116ea4cf1"],["/archives/2021/page/5/index.html","02690cf101fbf85b4fce88935fb23df9"],["/archives/2021/page/6/index.html","1ae743e6aef53e32375c1a60b3490286"],["/archives/2021/page/7/index.html","de24fb4ba1ba17f1223bb1191389afbf"],["/archives/index.html","754a9b9457491a660f47d8a040a34447"],["/archives/page/10/index.html","97e5793e5d3302e7e3d47c77f7e6aa16"],["/archives/page/2/index.html","eb67fe600e6ac156f23ee7aaad564653"],["/archives/page/3/index.html","2edc2240723eb5ce90366eeffe1e424b"],["/archives/page/4/index.html","062e4452c99aba8d03922449a438445f"],["/archives/page/5/index.html","e1e87651d621ead110bc5c4039a3e277"],["/archives/page/6/index.html","6e4c76686571da3550e214c3e4744c19"],["/archives/page/7/index.html","b4d71a6a7b817f49f3118a797ef87d1d"],["/archives/page/8/index.html","4697428900c7617dff986fe04dc71299"],["/archives/page/9/index.html","4250256d23bb46079041570bb1e1c242"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","140dcd77a56c79d9eb0468ec0df6b3cd"],["/catchcathard/index.html","e9291c58bce68730cd21cc4e2b0a474b"],["/catchcatimpossible/index.html","ce8ac7a16e2b7990d9e0aeb78de4c0db"],["/catchcatmid/index.html","dc073d912aef351b621ce171416ebd82"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/categories/VPN/index.html","98058c224a7ff3febc28ee625d2e5f5c"],["/categories/VPS/index.html","26e08b6c202a4fd04f0c983bc59e8a0b"],["/categories/index.html","71bdde740d72cbf66f3a9e5a4cda49ae"],["/categories/下载/index.html","470826df9699ac338dd399fe365d4320"],["/categories/安全/index.html","f3b9b73d201f13b8082dbdb341e30113"],["/categories/建站/index.html","760e352fd7c435afe94f2c24e73ee946"],["/categories/杂/index.html","025cb404c668302a139f8fbf938e828d"],["/categories/杂/page/2/index.html","fb89603add8504dd53ee9799437fe3e7"],["/categories/测评/index.html","97cfc3315ac1dce61b5849be02b2743c"],["/categories/科学上网/index.html","0f4b7a37d7bce65d5270c869f2175c05"],["/categories/科学上网/page/2/index.html","6b436023abcd641a8512371e486f4550"],["/categories/编程/index.html","4c333e15eca05dadbb46e60a780b103f"],["/categories/网站/index.html","0ab96ac9278b853adb8dc6fd5d0751b4"],["/categories/网站/page/2/index.html","65aed00f34d8a4b6959d04a7ec67a4ae"],["/categories/软件/index.html","25165cc1ab3914b64c24662488e4f496"],["/categories/软件/page/2/index.html","9005ffece35d2aaa74b3db7c2c4ea9de"],["/categories/软件/page/3/index.html","82f7e880e35c77119673b90db507086d"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","31950a01412bc446de52abf4c327c663"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","edc4db328fe9131db93018860856cb3c"],["/ios/index.html","96cfeb87d6a8ce64b512891e55b32bc0"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","d9536bee1ea1e4132ecb5dd269d336fe"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","c26a6788ec4d6c7cbd6a11f3472e1d85"],["/page/2/index.html","1d9caa21d5477996e84053ea55c8f9f8"],["/page/3/index.html","16d165387093822fde5ef1863cbf04d3"],["/page/4/index.html","f4ece1a37a6aa2b5aeb6255234927c81"],["/page/5/index.html","ef70caa37b01f9dd190ad80a13b81860"],["/page/6/index.html","9a5a408fb279ced229a76a5a311d9c0d"],["/page/7/index.html","22a93c3a792910477f8d380d894aaf1c"],["/page/8/index.html","9a7db34576efcffcc58bd3f5566add10"],["/page/9/index.html","dacb330c8f5513541832bc015a7434a9"],["/payment/index.html","c057748325e7fb7fd5ba60d1e311918e"],["/privacy-policy/index.html","bd9b6290f487838f5892e6c028b7849b"],["/rss2.xml","9eb7fddddd8bb2f45f2cd502c5e562cf"],["/search.xml","3e29bd10944a0aa3e296237bd3ea5b6a"],["/sitemap.xml","bbdcb751cec94d8f1fc89d223ba49177"],["/sw-register.js","094ea82bb25fb1621c241790eb55ba54"],["/tags/5t/index.html","50036a75fb253d00c8e0200f9eb02224"],["/tags/Clash/index.html","f271ee932cb123174b974b824003abd9"],["/tags/Clover/index.html","a5bea00082c586e8d31289fd7525921c"],["/tags/E5/index.html","54509ee7e4cdf951ac42b4d554518be3"],["/tags/FTP/index.html","1cc60ad5aa03559f4246427327dbb283"],["/tags/GitHub/index.html","7e095a4755c9d0cf971af6d5f99bf8bc"],["/tags/Heroku/index.html","ba9cd5feb17956f623d9eccb675f7407"],["/tags/Hexo/index.html","b6dbe34bcb31773b4359202f8b0bb025"],["/tags/Lenovo/index.html","213467aa943964d54d06de73a81d5864"],["/tags/Oneindex/index.html","209440697775d6efc213b8ba9cd60e05"],["/tags/QQ/index.html","72f94a71515f39dbb0dea81f60e8ea5b"],["/tags/QTTabbar/index.html","712cc7698f90c2ea4bc5cae510c232c1"],["/tags/RX文件管理器/index.html","763143d6b71ad68e93dee47674daed18"],["/tags/Todesk/index.html","5d6e3a55650d709509585a65acee0cd3"],["/tags/Vercel/index.html","1a8c8024c5851b184b78257cc447623c"],["/tags/ads/index.html","2c951677d2d46651b74f1bbe75741189"],["/tags/api/index.html","b57eb5568e40891805f03bd2621e3a7f"],["/tags/app/index.html","93d33097ed2ec394ad9f377d2f339c38"],["/tags/blacklist/index.html","11073184316fd9af8b00b5cecbb6941b"],["/tags/butterfly/index.html","188d812a4c12d0a0afb982c5ae2042ee"],["/tags/chrome/index.html","879e7f26c76d80ae6e5552695bf29c48"],["/tags/cloudflare/index.html","d19936d8bbcdd66e4f6570f733f5198f"],["/tags/cmd/index.html","ef86ee5fbd371bbb2cf987bcc769279c"],["/tags/c盘/index.html","0dc831c3470a861488d655b99906970a"],["/tags/email/index.html","ba5fdee228713951e6e7ca245c4f2b0e"],["/tags/ewomail/index.html","73e3dec4b3b09cdab2d47c4b080b5be0"],["/tags/fiddler/index.html","a1397a090bda2b5de10c64f969d616b6"],["/tags/flags/index.html","1c8ff06211a778ffc0dddc41fa7385f9"],["/tags/footer，页脚/index.html","4f56f1232cb7603270b4045607884f65"],["/tags/galgame/index.html","e04c85c306d0bdbda75b6edae6d1917c"],["/tags/git/index.html","aee71c06e62f1f0f1872d3b90b9258e7"],["/tags/gitcalendar/index.html","26e4f71c3aae7e74546afe2955a1c439"],["/tags/google-voice/index.html","c23945b74907a38c0c7bdf4989ee1eb3"],["/tags/gv/index.html","0a8efbfcf26b0be0d774c2449f316674"],["/tags/html/index.html","6769b2d1aad49d6e80d8310cd8c9cd9d"],["/tags/index-1.html","8ab202bb6c91203549fe058f6a0e5be1"],["/tags/index.html","206fbc3bceef855ae3fd3967cc61628d"],["/tags/js/index.html","b6b3d3c4b1a968e81a1c624c73ec5784"],["/tags/jsdelivr/index.html","6d800d287e6873f21cda7ee6e0611392"],["/tags/linux/index.html","bff2e5e8b735b263b6a2f8aca61bb54e"],["/tags/madVR/index.html","90abfc10700c8ccd5c6b028dfdb989db"],["/tags/markdown/index.html","df9d48cf0c6b450c882bdeb0e3950579"],["/tags/maya/index.html","b80edbb503a82529cb1689c4fc0e3b21"],["/tags/mklink/index.html","a69d1a7d329ad75b7e1a3e4e874a97ce"],["/tags/office-e5/index.html","cbc889366ad51c1844b1966acb0de57b"],["/tags/onedrive/index.html","b6cb4150447fa137b737439ef0799af5"],["/tags/picGO/index.html","1a466014b44af5be726c014a564e49f0"],["/tags/pixiv/index.html","025e7df1fdc248a2d8c9403880c2db17"],["/tags/potplayer/index.html","f97b44f5535b70f91dd3b5ebd5629fe8"],["/tags/proxypool/index.html","526f5ccdcea039d212bc677ecf4f4ada"],["/tags/qbitorrent/index.html","5696fb7284af2715af933c1bea276128"],["/tags/raidrive/index.html","321de262733f70df96f6f6b1d7d3f617"],["/tags/screen/index.html","b6342caccbe2bed375490a63e1fe1ad2"],["/tags/speedtest/index.html","a39b9b6300586a2c03525f48a5eebc2b"],["/tags/ss/index.html","10cc4b875077d4fcc912781388d55c12"],["/tags/ssr/index.html","a3bba5ef1535d718b876bb0ed6bd763a"],["/tags/surfboard/index.html","e267855562459eb8e8382b07864d8ed8"],["/tags/tap/index.html","3a77f78c8a562cb7261a489aaea20110"],["/tags/telegram/index.html","40f52042e0332e24ee68fbd06a26b0ab"],["/tags/telegram代理/index.html","089057633e609797408bd7e179554907"],["/tags/tg/index.html","1a699e0d8e032eb123844ce2214379e4"],["/tags/tg代理/index.html","d543bb0bf3d765dfcfe2901414d9d15e"],["/tags/top50/index.html","ad4a3a49478681b768687b630b8e8846"],["/tags/tracker/index.html","6b1a2d397ca93adf6af83a7371880100"],["/tags/translate/index.html","96408d8354cda2dd4b3b4e8e3f87acb7"],["/tags/translater/index.html","f160b660eebf5f0fe1a5b80e343ea3b4"],["/tags/tun/index.html","4981eca0e0af7968742827e420b8a41d"],["/tags/typecho/index.html","0e5c93a544b12daf1b74507afb61e13e"],["/tags/v2ray/index.html","927a2bc866c1b1cf654a5ff62e922905"],["/tags/vpn/index.html","560b3aa84f582255945b66fc1257c28b"],["/tags/vps/index.html","7c73216b7e49ee4010852220304d23c4"],["/tags/windows/index.html","eaf98480e94b657e76857e457a00675e"],["/tags/windows端/index.html","bb23c53a8b35aee6ab19e12f495ab130"],["/tags/xray/index.html","084c298881a43012a8b58f592d3cf7ed"],["/tags/下载/index.html","13a5a3c002ecf07a71fe9a2df28be1b8"],["/tags/不限速/index.html","b16ba70a22a2a850684983c54e072147"],["/tags/个人网盘/index.html","9f400abace269314e721b42aa5ae3546"],["/tags/主题/index.html","c734534192eb5f67907554e980501cc7"],["/tags/云便签/index.html","a2599bc011d71407e57c10d9107e7bf4"],["/tags/云盘/index.html","38f59b57646dff12e5ae87fa269a862f"],["/tags/人人/index.html","a50d6947b8cb622e78899be0c5364193"],["/tags/代理/index.html","a32b11fce954cb639a095be9a23e1c08"],["/tags/代码/index.html","46ab3149ebf6ad7fdf7dbc676abaeedb"],["/tags/优选IP/index.html","2e47253378a471e7c7a864dbacecdb7e"],["/tags/便签/index.html","fda5b5964240cb510e41c595aca98f44"],["/tags/保号/index.html","75ba8a0402ecc0266eb7f1384b927ba3"],["/tags/免费/index.html","5241cb2f1b562c5b6e78db68b12c1954"],["/tags/免费节点/index.html","d8bd05750948d38bb848ab7f5c894f32"],["/tags/加密/index.html","de4371b8be337fb91fa7af91d105dd95"],["/tags/动画/index.html","9732e839bd79bf86100fb36bb2ec96e3"],["/tags/博客/index.html","6f7bea2302cc6376efba3134d21564f1"],["/tags/历史记录/index.html","47c13ee4b4cf568cda0b2df81aa0d5a6"],["/tags/压力/index.html","26a7732d866c693cf4c22d6a54317fe3"],["/tags/压缩包/index.html","4d9c092d0454c7516140ffa6ddba77c7"],["/tags/反代/index.html","fba6ae0b05f1d1923fd9d45e06023662"],["/tags/可视化/index.html","974fcd1fcd08aa2e47f22e2ac2974711"],["/tags/命令/index.html","9b0918e4ed11be9fe91da59a0772888d"],["/tags/国家/index.html","9e6ec491370dabf75d6b99047bc641f8"],["/tags/图床/index.html","392750a2c17df068cf6f806d9b54b495"],["/tags/图片/index.html","c676b4bed98ab83e077114ce5852b0e6"],["/tags/域名/index.html","ca68760619df267ce6a38a16ff9ece0d"],["/tags/多标签/index.html","0aa1e400c812478e4f4261ded52ce741"],["/tags/存储/index.html","0bca48d64071efcefb83323bfec23a54"],["/tags/学习/index.html","b553777fa79dbc33467138e7417e4732"],["/tags/安全/index.html","0ee460fa28f69db00e0c0f68eaea54ce"],["/tags/安卓/index.html","134556387fafde4dd4d67a216d070289"],["/tags/宝塔/index.html","3d99f0cc48960cc5badfded1e13fb8b5"],["/tags/小游戏/index.html","89b91b7cb7459e070ff65e125bde9800"],["/tags/广告/index.html","c1e562aae3b4c347cc5ca1ecb4ddd692"],["/tags/建站/index.html","1949a56a0e973048d905c8088f99550f"],["/tags/影视/index.html","d2fd90f8645410bbbc055747c3e582d6"],["/tags/快速启动/index.html","283cdaa6197b3a2e08a5e844f6745542"],["/tags/手机/index.html","dc660f7136311da90933dc2c25991a0d"],["/tags/托管/index.html","bb1f97b050595b3c5cb272fdbd492769"],["/tags/抓包/index.html","5e642626e880c4607ac5ffbe8cb21ab3"],["/tags/抓取/index.html","741c3144750aef0a4ee8c4f42d05a7b0"],["/tags/投屏/index.html","08dffbe91ef678307e50f4d046bfdcf3"],["/tags/拓展功能/index.html","1c1b5588c85a07b2e5b2ec0379bcf7d0"],["/tags/挂载/index.html","3450deed582e1d8e2f0a4b118bda1168"],["/tags/指纹/index.html","3f4869e8c6428c674781bfbb423b03c6"],["/tags/接口/index.html","50105a3879409666fc272c86e8c03d22"],["/tags/提取图片/index.html","f1eec35110af461aa1aeb1ca358ad9f0"],["/tags/插件/index.html","fe0f5bc42c05de11674271e1275c8e68"],["/tags/搜图/index.html","eee91840a3665c4d9de9b3764a23e45f"],["/tags/搭建/index.html","cb53203ebca12bbf1cc2ba491b72c72b"],["/tags/撤回/index.html","b616d62762ea2af48008148368d2a04b"],["/tags/播放器/index.html","220ac4982e43b86bff15a61a7153a106"],["/tags/政府网站/index.html","42477b4b2b2555be34277b1ff6d248c8"],["/tags/效率/index.html","7445311ee52ab16bd7f07b016eccc73e"],["/tags/日历/index.html","7123f84f1f10cf656400f56bfb7ceef8"],["/tags/服务器/index.html","20c46e79c82e3a789f28d56b5683a1d4"],["/tags/机场/index.html","084b71e44ee4fa066e5d53ae591a3ae9"],["/tags/桌面/index.html","b96debb13f8e6c8664e2920c40ea37ec"],["/tags/梯子/index.html","f92c2cb8bc290ea49b71f8a14e54b80d"],["/tags/检测工具/index.html","5a7f67e712f0c9e24c89a1fcdd30b896"],["/tags/汉化/index.html","c07068e12d246100331953b54bf78518"],["/tags/测压/index.html","91f32e2563151dd404c78c1b138af248"],["/tags/测速/index.html","2a9c3a924b83d987ee15d4665e9c3475"],["/tags/浏览器/index.html","fc4e302d88920f4b351139aae17fe6d9"],["/tags/清理/index.html","df698ce9123311d9819303638948b9b9"],["/tags/滚动条/index.html","5fe9ce10ac1e2a64486fb0b6b8ca3bc9"],["/tags/灰色歌曲/index.html","7b000f185d0ea5b1dcc5d575a7e62af2"],["/tags/电影/index.html","f3d808967f7d1df29bcf6dab5a1f2552"],["/tags/电视剧/index.html","4c8cab36dc4374fe030551a863a08c20"],["/tags/白嫖/index.html","e239f52799f459d7d9057f8d80ee5bd2"],["/tags/百度/index.html","6ff5e2f7e978bb27406ae5ea6d5e8390"],["/tags/百度云盘/index.html","40f5ee7e74e683ee2beee962b9badda5"],["/tags/百科/index.html","aa20b4d0a8d7ae372b91ef4c5965f2d2"],["/tags/短信/index.html","64d9c199b260af83b42a0cbe42caef53"],["/tags/硬件/index.html","87871df363dcde6e55330969fcbc0906"],["/tags/科学上网/index.html","fba12c1678e8c7ebc773e470327c5f92"],["/tags/空间/index.html","5eb5d5100c59ba5f817fe15d4787d65e"],["/tags/笔记/index.html","faa91fa179cfe18899b05fe6e510907f"],["/tags/简洁/index.html","e317f3502999bcffa1c7ee920039a9b6"],["/tags/简约/index.html","b07ee6e44e931dba71fdef23ea7528ae"],["/tags/维基/index.html","9e067eecaa63da920db8072de471d4df"],["/tags/网易云/index.html","3e8c20ebe18df2e35d03cff77e837d44"],["/tags/网盘/index.html","506873337e1a9a989d36512c3ea1e1b8"],["/tags/网站/index.html","7af73b69a623eb8c39238d0afa7fd383"],["/tags/网络/index.html","aa82d26fb36b4b086b6057c5da8c5888"],["/tags/美化/index.html","17d266cd0f50025410d52d24a7db318d"],["/tags/翻墙/index.html","edb22cef1e61abaf45cd5794ce103069"],["/tags/翻译/index.html","c0a353ccefee37294d52446896674499"],["/tags/翻译器/index.html","c23fb2ca02c02ff5056bcda3a7d77790"],["/tags/聊天/index.html","1187c8a73a36bdd1c137c3816100233d"],["/tags/聊天室/index.html","45cd6b178fad2f514abd8624044a3f22"],["/tags/联想/index.html","7bba7a003cb4d5ba16aa0e767dd32f69"],["/tags/节点/index.html","c0c0a290cfdd48e4c3b14ab87aaa038b"],["/tags/虚拟手机号/index.html","595719a9dfe689a9b30dffd0f29ef849"],["/tags/补丁/index.html","82ad19d9dbd37a30471646e1b5cbc41a"],["/tags/视频/index.html","5971e9d254dd3456376197c310eb7926"],["/tags/解析/index.html","e236ad081ca12a2f96d609f9821a865b"],["/tags/订阅链接/index.html","a56bd6e12fcd196edb3320ebb526840c"],["/tags/记录/index.html","1d216a23d9959616a2cd695231bf53ea"],["/tags/识图/index.html","7d58e530dcfac3d651697daf58776102"],["/tags/语言/index.html","080abaeaf723c7d021d68f99510beea2"],["/tags/资源/index.html","64c2c00e19bd9b3589df8784c51c6f1a"],["/tags/资源管理器/index.html","d614a73c5b78224a8d41af0bb25adeac"],["/tags/转移/index.html","33c05aa1c863cb350b05080cf41c32f5"],["/tags/软件/index.html","e1956b7479f7d4231293772f051eff27"],["/tags/轰炸/index.html","a30292cb37dec699e6ad01d4e39d20ab"],["/tags/迁移/index.html","de4ea3d41f0b02202fc2aea11e255c08"],["/tags/远程控制/index.html","0e9ad5e0b927ba24052b125f3ff13476"],["/tags/连接/index.html","91e43cf65303ec9af34bb8f31a893762"],["/tags/追踪/index.html","7ca088c18a0cf67403f43677b99ef8a5"],["/tags/速度/index.html","941cd76f76f6b8060a16e3937d55fcd5"],["/tags/邮箱/index.html","7906d6fe84c6651c21cd5b831a7c08ce"],["/tags/酷炫/index.html","31d617587acc34b14bad861004d92da6"],["/tags/钓鱼/index.html","7662d06788e4366f1aa99b42384f6ce1"],["/tags/镜像/index.html","988e0f04b9b91d464550b447bd8b22c2"],["/tags/随机/index.html","2e7ae92cb024810185f9e7fc5677a163"],["/tags/隐藏/index.html","d7af242a50391416a0dab32ebd2bd7c8"],["/tags/面板/index.html","4a840c64043a637b69c3e52d0cbac4a2"],["/tags/音乐/index.html","3a4218b5a402b2238f881ea12333172b"],["/tags/高颜值/index.html","0c24ac0491a628b365af24f9240ec7a7"],["/tags/魔改/index.html","13561d29a84b6b0c4b652c5d87f1bf3e"],["/tags/黑名单/index.html","54a6181e9a0e67b903bee638cf4fb466"],["/urls/index.html","9e2e718a61214310d0c0be2ef62384ec"],["/vps/index.html","ea8b609a852ea4c850ec736b961921aa"],["/支持/index.html","062f42886e18d01a00c03da372021c46"]];
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
