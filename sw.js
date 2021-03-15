/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","e681c8cea62951d3c0b87fecb3e4a2b3"],["/2020/11/29/clash-windows/index.html","5f4dc4cf6992d090f7392aa8a03f5676"],["/2020/11/30/websites2/index.html","ae9e9d7b2bd6a2e59110d695cfed1cda"],["/2020/12/04/iphone4s/index.html","651a4a680df1fe0037699707911cb4ed"],["/2020/12/04/onenote/index.html","c2792ad69a1d1cddfc542c1d2c27b70c"],["/2020/12/04/wesites1/index.html","cdbdeb19bec93b151ff61cbcaee4a074"],["/2020/12/06/nokia808/index.html","fe2948e761e38dde66fe492f863116d3"],["/2020/12/07/ipad1/index.html","2d057b5907dff8d0060555ade9729e7c"],["/2020/12/18/freesubscribes/index.html","f979f289ab476eec6bf34f872001fdb6"],["/2020/12/19/musics/index.html","05cd5791408e19f4c33c6d3dcfedc0e0"],["/2020/12/19/shadowrocket/index.html","2fa6bddc893511331acfe2d3ec7b3bf6"],["/2020/12/19/v2ray-windows/index.html","cb6ffa862aacb296a05f9431ec8d7b3b"],["/2020/12/19/v2rayng/index.html","716936e4bea70ecaaaf503f692a40c3c"],["/2020/12/20/beoplay/index.html","66aa19819a60d2d8f3ed0b0bb0e16bfd"],["/2020/12/20/订阅链接转换/index.html","cfcf4a958d6c7e58eb7a8abc87d73d16"],["/2020/12/21/chrome浏览器下载提速/index.html","5fc71babcf1e2fc20a5e9db2af5dc573"],["/2020/12/21/免费128线程并发下载xdown/index.html","d2d715cfca9a13fb2570ef5d8d69a37d"],["/2020/12/21/免费32线程下载软件ndm/index.html","7f1b7f127661514aa3bbbfc5b27ad6ef"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","ab4e335f623c41eea6c3514f41f2a9aa"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","83052650db968ae4327b517ebc913896"],["/2020/12/21/广告怎么知道我在想什么/index.html","80e6c71f6fc51cdd229b87b596f54927"],["/2020/12/21/无名·引子（小说试写）/index.html","779d2f7c86b03dd11e3e3bc993a1954c"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","6cacd7b11ee722ffad7f75f87079edbe"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","34bf01255a0248d1be26adcc2e70bb2e"],["/2020/12/21/高速轻量下载器aria2/index.html","4ce0a0255e22435ec1993f123606c15f"],["/2020/12/22/2020-cee-roo/index.html","a92a8f3c013c87cc7c9280328bc5ebd1"],["/2020/12/22/firefox插件、github、steam富强/index.html","3ebe3f12dcc4b90b9b10c8fb250fe058"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","c22b184f42920dc1fcdc0a2cbc910c5a"],["/2020/12/26/python-day-1/index.html","2416390f65183936579d9fa6429f65f2"],["/2020/12/26/python-day-2/index.html","6b4ac5b80ef67314f08b7e51d0a4ad04"],["/2020/12/26/度盘不限速下载方式一赏/index.html","8c1d8fbadeac7c354ba391a39ff0ab4e"],["/2020/12/26/添加开机自启软件/index.html","e4c8ec69ebd3369b3b8569d6c1785b51"],["/2020/12/26/电脑端截图方式一赏/index.html","54dc00cee643ba3b73e5b96c4d618937"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","e25c4e3f352963dd4fd8c61f6ac46137"],["/2020/12/27/最安全的浏览器tor/index.html","fb02fc4f413557dd47389dedb2f45383"],["/2020/12/27/网易云刷等级和听歌数量/index.html","b9917609e1766dcbedb7577ca117e3a4"],["/2020/12/28/freenom申请免费域名/index.html","1e1c7436dcccc242e4b65e462a2d2165"],["/2020/12/31/机场/index.html","d054da25f0339117bc88bc9e2c0c6c07"],["/2021/01/01/M1/index.html","b845f219b2a7f9ed4ac61c6bfbe527df"],["/2021/01/01/compress/index.html","7bbed05488012886e58f7a189db0a0ed"],["/2021/01/01/infinityfree/index.html","28bebb5d6f17a4b1439421f41d97b2e9"],["/2021/01/01/硬核翻墙/index.html","21756f2630fc881c716d158ea776f2f4"],["/2021/01/02/qq/index.html","cf9669e1249ce87c89570ad91c40ee3e"],["/2021/01/03/netch/index.html","bbd5e87f051ad1e67a49b4a5eee15c4c"],["/2021/01/03/waifu2x/index.html","b2a2a8a7f1bfcf4b0006cb902e7e38b8"],["/2021/01/04/ads/index.html","a551d4b5b6023f1c5879c24d4ca0eb16"],["/2021/01/04/games/index.html","b5341ecc5d40c4ec1dbb865035cc072e"],["/2021/01/04/heroku/index.html","eceeacb379530c89ea9064c78223f64a"],["/2021/01/06/movies/index.html","98752c2608ddcfc8d5c16f85d9b7abe4"],["/2021/01/07/google2020/index.html","0de3914f8b387ef937ae301433c86c1a"],["/2021/01/07/lucky/index.html","bbf8da536654b9e40adfbe5bc74a0a80"],["/2021/01/07/spotify/index.html","a1942621db84173cf11562889b487047"],["/2021/01/07/thunder/index.html","804a24c1de3dfb99c41496dc453eeb63"],["/2021/01/08/adguardhome/index.html","5520d8b1cf4563e44b1c7306230633fa"],["/2021/01/10/IBM/index.html","679fd671daa552443881ef7e7399af51"],["/2021/01/10/potplayer/index.html","835b31f1e3db02a056b06e96762cf28f"],["/2021/01/10/sakuraanime/index.html","fe0bf5709176e59b2d67edb1866398d7"],["/2021/01/10/美剧星球/index.html","f9dc1579d1a476a294c72eccaab8414b"],["/2021/01/12/telegraph/index.html","e6b08a48280fd1238191686c1f5731f2"],["/2021/01/14/comics/index.html","4990da4ca2703bcd2d5fc80188c8cafb"],["/2021/01/14/ftp/index.html","dc2b7b6057ec40be2c9d28a90b08bdd5"],["/2021/01/14/oraclecloud/index.html","50bd9222397e5798ab80f6c7f4162a52"],["/2021/01/14/porkbun/index.html","a0e99fa3b53fefa37222be55ec994e52"],["/2021/01/14/powertoys/index.html","5b0480641bcad70c5d3ff041f02d88de"],["/2021/01/14/taptap/index.html","fd0f05805bb6a26cb1333241819d465d"],["/2021/01/14/ubuntuvsftp/index.html","64eb8a18d8b32660b938225b3dbdcf29"],["/2021/01/14/小说/index.html","33e4156a2b8c18f1eb7d47e4ae77b654"],["/2021/01/15/freeproxies/index.html","ee66048cdb619e011a7099f18cc5a316"],["/2021/01/15/incaseformat/index.html","d9996d6cbb995c2ae53d1853ac384eb8"],["/2021/01/16/euserv/index.html","d3986c8ce877afeec87c533f0f80a2b9"],["/2021/01/16/winxray/index.html","f2955c0f187e7559cb0f38eee646bce9"],["/2021/01/18/qqreadhistory/index.html","736b9e75757b2b000a7548387a6bddbc"],["/2021/01/18/qqrevoke/index.html","76fb16ead908a0f65982c85a49ca0ed3"],["/2021/01/19/freevpn/index.html","0fef2cc23bad798baaa7c5edaec27c75"],["/2021/01/20/browsertrack/index.html","573edd4b4883f361934bff777cfdca64"],["/2021/01/20/v2ui/index.html","892c2fefbc4220b5fcacdb7c55f0c5c2"],["/2021/01/21/failedtoconnect/index.html","6839e804eb84071a95f3e06b9d913714"],["/2021/01/21/gitcalendar/index.html","6289f493cf6fc36755aff8b9818ad282"],["/2021/01/21/markdownformat/index.html","fc8e5efdc2cb85a1b170fefbf75a6000"],["/2021/01/21/markdowntable/index.html","4d6229ac219de1457ceeeb15cdd9c982"],["/2021/01/21/vercel/index.html","dcffd1a10d64c9fc1644459e4acef2c3"],["/2021/01/22/hardware/index.html","d6cac794b056478fd0fa3dcd246936c4"],["/2021/01/22/muviz/index.html","1f52d2aa5183d25f46b36122fc3bb723"],["/2021/01/22/randomapi/index.html","6ca17117afda774e803d045247f83230"],["/2021/01/22/searchimages/index.html","d611e26e875cd39ec99e632309566533"],["/2021/01/23/RX文件管理器/index.html","f1f8786d005d9f5109984593fb7f0a99"],["/2021/01/23/chromeflag/index.html","437d10b8612971e8de27b8e94de1d16d"],["/2021/01/23/qttabbar/index.html","9807f5727d5a2726a450e0f23b8188fa"],["/2021/01/24/githubspeedup/index.html","364b966872c53bea2e5426f6bd6737a5"],["/2021/01/24/jsdelivr/index.html","9409070ad686de1b1e066aa3533eced1"],["/2021/01/25/note/index.html","7213804cb1d47192c3303ceab8b14494"],["/2021/01/25/soul/index.html","b5a71251d90f331e44ff2e3089e61d30"],["/2021/01/26/herokuxray/index.html","45d5dca99e120c157fe4ce812c35f527"],["/2021/01/27/proxypool/index.html","91d3abbb00bc0b65e4b2ba6fd10c379c"],["/2021/01/27/tracker/index.html","6bbbbe757e9e1f60ec1907dcb0d32311"],["/2021/01/30/pandownphp/index.html","2dfc925d62528602f7edcd1a81a87ef4"],["/2021/01/31/newgroup/index.html","82b2dba8d11d282ccee38f1874520bae"],["/2021/02/01/clashlanguage/index.html","dd2c0b625e5b1ab8b8f392223a61538a"],["/2021/02/01/encrypt/index.html","0258d8bd49fd16e4bca8c1dd96cfcb00"],["/2021/02/01/footermotion/index.html","db16d7d968a53328d83ead8764e85a64"],["/2021/02/01/gitter/index.html","636597266d29ed0f4351a53956914602"],["/2021/02/01/pixivtop50/index.html","4f42df8122a2d2f71613ad174942447a"],["/2021/02/01/scrollbar/index.html","b06ca0de95e9bb830a48585d1ee254a3"],["/2021/02/02/clover/index.html","55782ae649485d75815c8add2349bb16"],["/2021/02/02/maya/index.html","ce5444fb5a10eca59bbf8f462e9e14ec"],["/2021/02/02/speedcontroller/index.html","0c73d75857b9aabc8819463f550f96d0"],["/2021/02/02/yesmusicplayer/index.html","88476246c4ebf03ec19cfc6adf64c7d2"],["/2021/02/03/lenovoonelite/index.html","309ac035bf4f4a8e07f5cded039997ee"],["/2021/02/03/skipads/index.html","33e770238644d059ab91a95bb7db662d"],["/2021/02/04/picseed/index.html","54cb18c4bd18abb5e2d1feddd1d268ff"],["/2021/02/04/renren/index.html","7a5dd1999f9bd2e8786baae628e5e6c3"],["/2021/02/04/serverstress/index.html","727a733a0a96cf37f17838d39e923094"],["/2021/02/04/wikipediazh/index.html","caa2469f4a025db437ebef1d8e70b152"],["/2021/02/05/googlevoice/index.html","03dd943ecc33bf7a5c80d7194a021acf"],["/2021/02/06/clashconnection/index.html","e5312319a1760f858d37f4d395982213"],["/2021/02/06/gvtransfer/index.html","255f264f17cec2f9dba09fdf0e1e121e"],["/2021/02/06/todesk/index.html","fcff90223e34d0a622b7459adc626410"],["/2021/02/06/vpnblacklist/index.html","887f390b7d3ac0d415207aab629313a1"],["/2021/02/07/mklink/index.html","12168d560dde085353ffa2729a036e92"],["/2021/02/07/speedtest/index.html","4af4e23a98ec6b79629d807bccc02bb0"],["/2021/02/07/translate/index.html","1a58010b63d81d2613f14ccbf5b3bc60"],["/2021/02/08/ewomail/index.html","c0985371e117b68464a90c03f315c5d8"],["/2021/02/10/officee5/index.html","85ee118e424a033804cf5a85a6e85714"],["/2021/02/10/raidrive/index.html","89c671df77399f31dc5a98ae68d3f76b"],["/2021/02/13/e5sub/index.html","b1ef48808c0230a350a98aaaea3e2f13"],["/2021/02/14/screen/index.html","553f2771dbf9c6406291845be15c1a52"],["/2021/02/15/clashtun/index.html","95c453784109658f3245b473b0ee5f13"],["/2021/02/15/messageboom/index.html","79a4c3a97a7638b079fc284c07ff5a46"],["/2021/02/15/oneindex/index.html","8ee02317074c6102692112e93902277e"],["/2021/02/16/govsites/index.html","f53690d019c944f8026d7f20e48b0891"],["/2021/02/17/hexototypecho/index.html","3c3205294242c0c03ee0cef722f221e1"],["/2021/02/19/fiddler/index.html","a034a0157c4bd2a01e65ec2029d4ef4b"],["/2021/02/22/potplayerset/index.html","cfefa011315efd434b4e67901f90e416"],["/2021/02/22/studyresource/index.html","23963721752b0af351165b74dd89852f"],["/2021/02/22/telegram/index.html","7b8ca34069cfde0f8e4a476e8cf5db2b"],["/2021/02/22/videos/index.html","672ba9dea85d451855e1d38d892ceb08"],["/2021/02/24/mtproxy/index.html","14e443c7f85609457c7da20d6768a62a"],["/2021/03/10/catchcat/index.html","3dfe9f3b279987978712bda195b00d21"],["/2021/03/10/neteasemusic/index.html","8470f96f9e2aa9787023f7334e7073aa"],["/2021/03/10/surfboard/index.html","ae211fc32cc7a99e08b8deebd4e82004"],["/2021/03/11/vpnandjc/index.html","444d51731b4900325589577416b4ba9c"],["/2021/03/12/qrcodes/index.html","73760ab046b2ca80b83d0914edb6426e"],["/404.html","22eab3c5ca829728f8b8071f6a5db0c8"],["/archives/2020/11/index.html","aa71001b0e49cbcb26864ae24b5a6047"],["/archives/2020/12/index.html","06249e2cc4974101e40c70e43eeea8ca"],["/archives/2020/12/page/2/index.html","95e4ef4ae622a4815db12060f4ef6d1e"],["/archives/2020/12/page/3/index.html","76dba8e576c2d29f8d1f50ee29ba0f76"],["/archives/2020/index.html","a7cc5519f9cd22874d2dd7904fc1c410"],["/archives/2020/page/2/index.html","89447191e9dfd24cec585e7cc6b24073"],["/archives/2020/page/3/index.html","495854d1c618317ea0996d7e347f9d5a"],["/archives/2021/01/index.html","d1b72f18feddace799c22ba6264a8086"],["/archives/2021/01/page/2/index.html","e13849ce7edfbda2c17e47dcc6f820bd"],["/archives/2021/01/page/3/index.html","abba6538c41024fc39d0276a6f8f419c"],["/archives/2021/01/page/4/index.html","0c1db07e130941e5af0c27ba47cd0ed6"],["/archives/2021/02/index.html","070fbd3f379a1f24777a4fb3535003c3"],["/archives/2021/02/page/2/index.html","727e45028ddca97d0b93181aa82ed7d6"],["/archives/2021/02/page/3/index.html","a49f2b8e96554e9f60df1c991aff30c8"],["/archives/2021/03/index.html","80d0b7d23a06a38c3af6c339a7c8e0ce"],["/archives/2021/index.html","089631f83e8dda74f223ac1188019d94"],["/archives/2021/page/2/index.html","ff855a3db1fbaf4703a40a95b270a987"],["/archives/2021/page/3/index.html","cec720e210becbc367deba88c236e88b"],["/archives/2021/page/4/index.html","bf1f0269d6fda00e3d7cefe3b98f3433"],["/archives/2021/page/5/index.html","e5324a1e8d3a8efd67e11b553168070a"],["/archives/2021/page/6/index.html","c278a2ce44eb7f837ffbd8b66bc617df"],["/archives/2021/page/7/index.html","22c571206fe3aa49b1943cf3eaf8bf0c"],["/archives/index.html","b1a5b916d629ef1488b36f902e8b0269"],["/archives/page/10/index.html","0623d7f7f4a9a54a349d80d069ed1e26"],["/archives/page/2/index.html","53e00325c49a35757670d39d0893633b"],["/archives/page/3/index.html","f338c50abbf351d7a59fa8f848029381"],["/archives/page/4/index.html","2567c14564be4de78b59ec8dfbe9261f"],["/archives/page/5/index.html","09c50ca08391c847c7baf91d81a56e07"],["/archives/page/6/index.html","3f2aced6f68e30012a1db922523478ec"],["/archives/page/7/index.html","47956546c7c766aa0a377593e55ea5ed"],["/archives/page/8/index.html","957ffbb8113f61c7c75e1ac565b6533e"],["/archives/page/9/index.html","00bfb9bf26a1e371f5d40482e550566c"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","140dcd77a56c79d9eb0468ec0df6b3cd"],["/catchcathard/index.html","e9291c58bce68730cd21cc4e2b0a474b"],["/catchcatimpossible/index.html","ce8ac7a16e2b7990d9e0aeb78de4c0db"],["/catchcatmid/index.html","dc073d912aef351b621ce171416ebd82"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/categories/VPN/index.html","5807bdc473d94e1d71e16c097890afe1"],["/categories/VPS/index.html","149e38a4d242240ed14a6f27912ecbba"],["/categories/index.html","ce1c7c19fc528e926fc8b6c553bc7d35"],["/categories/下载/index.html","52698cdef38f02e0e72b1b1df2f38aee"],["/categories/安全/index.html","ee591fae5b249d0871f29cfdc5987559"],["/categories/建站/index.html","64f870e681d03f919fc05185e66f45e1"],["/categories/杂/index.html","42b4e243deead7d1e7f73eca478455b4"],["/categories/杂/page/2/index.html","b78b092a086d0afeefeed80ae38971bd"],["/categories/测评/index.html","8f1b93ae28062f04c758cfb46c20c9ee"],["/categories/科学上网/index.html","5dfc77e7a86d972b8cec4833bf5a47f5"],["/categories/科学上网/page/2/index.html","c22cedc11356c84dd6e54fdb7a061bf2"],["/categories/编程/index.html","65ceb65e0d50aea7345a09de608feb5c"],["/categories/网站/index.html","6bec6b4a8bf22c05de594da81eeeac6f"],["/categories/网站/page/2/index.html","62c1f6442ca67e051ac62ab86c8d0970"],["/categories/软件/index.html","0fd3981812ffe83eb8f7537f448d3d6b"],["/categories/软件/page/2/index.html","a61df0cd1aade4e420c537e23869f478"],["/categories/软件/page/3/index.html","53100ccd46a50d1cc33b5fe8cf67b6b5"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","c81ca297c445ed3e820b91c4db695771"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","b7475ef450f0fb3b7f0ad8c9c2b1dd91"],["/ios/index.html","b0d3bd56c8068def384bf6b182fc914e"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","8dbcfa77d1f773970f80edde5b468672"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","229e35716bc901ebc329761f3053e994"],["/page/2/index.html","534fb13644d1e30126d166005b534b5e"],["/page/3/index.html","db1b74354830e11e27818633a9b92f1d"],["/page/4/index.html","37deb731a986c99be8f862c2b54c1045"],["/page/5/index.html","679ddeaa77793437fb483233f91c82e6"],["/page/6/index.html","d9c98c7010086bfe103cbebe4b061c99"],["/page/7/index.html","1556ba9773ac2caec6f4b752ccf8f7d1"],["/page/8/index.html","7331225f1c302d986b9456cc184b0ef4"],["/page/9/index.html","a09f3b446aafe79776b01f4f2f40f51f"],["/payment/index.html","f3f73a6d439bd92ae7031c4e373490d9"],["/privacy-policy/index.html","3f1cedb3cce043f37f4bd939fa1f4ea8"],["/rss2.xml","a6f4df4b5ec1708285b44487312647a6"],["/search.xml","e1b02cf426966f4dca4fddc1bd21d50a"],["/sitemap.xml","2616b110c7ef0280d9479fe611eee1c0"],["/sw-register.js","d1a38d31175acd04fff77b8b658601db"],["/tags/5t/index.html","64b344bf9eaf9fbbd448473041f4374c"],["/tags/Clash/index.html","7749d807022cf02b03fafa9a80b09dc2"],["/tags/Clover/index.html","8b50249b82f94965968584a3138702a7"],["/tags/E5/index.html","2ce47e058ac57b26913bf01068b98856"],["/tags/FTP/index.html","71f638ce9ce88e6f6bcb7fb22d2bbd5f"],["/tags/GitHub/index.html","7c5725151741de86cd378df6584ea7bf"],["/tags/Heroku/index.html","0d10fc95c5d2dd2f7e8a08bfc13777b8"],["/tags/Hexo/index.html","2644add881fc2e0ebfc2e0485b5ae160"],["/tags/Lenovo/index.html","85fd34f00e5f2385652f4779e1160556"],["/tags/Oneindex/index.html","38d340ed932e5cd48e17ee9950cf30bf"],["/tags/QQ/index.html","6b44b8810a497c9dff80735b9db7a8fa"],["/tags/QTTabbar/index.html","4f72a7887ec9720f8a90274821bdb801"],["/tags/RX文件管理器/index.html","a7e73a67857365f70a2fc762dc8389e6"],["/tags/Todesk/index.html","da60ba24e5c7e1063be97433c57012f9"],["/tags/Vercel/index.html","f33586c598b01dc356d73f5ad1184e3f"],["/tags/ads/index.html","0263f996691abc03e0c63d30012d7ddf"],["/tags/api/index.html","c26185d7f04acd8a92aaff27c0b92b94"],["/tags/app/index.html","8d336336e61244ab52ac7fa58df8812c"],["/tags/blacklist/index.html","1d05d333e35089c3dab08b9d53e164e2"],["/tags/butterfly/index.html","89cbf54387beb258881fcffd81076851"],["/tags/chrome/index.html","44dc5edbe32b82b307311696571730c1"],["/tags/cloudflare/index.html","dd60c01e4e64b5196031898ce9e76f39"],["/tags/cmd/index.html","261b3aec958901c0e1e702a0d26697d3"],["/tags/c盘/index.html","7102a3ab0814c5ab30586a39684a04e9"],["/tags/email/index.html","07c15589024fd5f6456a3928f867348f"],["/tags/ewomail/index.html","3a134e44070edba9742c17b26f63e759"],["/tags/fiddler/index.html","0bc96520a10968773f7975ad98b87dfb"],["/tags/flags/index.html","58217fcc2dad217ebb071346e2185328"],["/tags/footer，页脚/index.html","35e04dc7e951d231d1a7eb5071ea71ab"],["/tags/galgame/index.html","423cd608bde8d6cac58b2a8502cf8b89"],["/tags/git/index.html","cf520d6b56c10cbc835a279391fe0b84"],["/tags/gitcalendar/index.html","1de5ceaf7694aed021c1923fd8628b32"],["/tags/google-voice/index.html","a4d6d868371f179d8d25fec9f0e6db2c"],["/tags/gv/index.html","dbb6e3dc1b40ff09422000194b7b0b9e"],["/tags/html/index.html","1ac763f1a59a227df1c1bbdd370fcea5"],["/tags/index-1.html","823168116100199fb7286038bec854fd"],["/tags/index.html","50b90e6186f5c6346076da42ff81c498"],["/tags/js/index.html","b5abd50b49c65c1932ae0d0156cab49a"],["/tags/jsdelivr/index.html","0a895ba53441cf82fbb675babb3000b4"],["/tags/linux/index.html","e8455009cc705bed48a835508687bec3"],["/tags/madVR/index.html","3fb5c7e7092c4ea5003eda7c1593b341"],["/tags/markdown/index.html","cc86d826cc9c446305e9dd8f4c350d68"],["/tags/maya/index.html","8094a47ede12abf7f2ff376eef0c87e6"],["/tags/mklink/index.html","352e68f8f6f1622e1da52dd285599d73"],["/tags/office-e5/index.html","52c0f5fc4ee21c66e1bfbf9fd85cde2c"],["/tags/onedrive/index.html","ac703154a93cdca26bbfbadcbff8cc97"],["/tags/picGO/index.html","f47d4280659ca3567f0cbd3b4c790d43"],["/tags/pixiv/index.html","0cbe3a7c7b7aac742228b86aaa2ae9ca"],["/tags/potplayer/index.html","20109b37aeb36a38cced86deec6374e6"],["/tags/proxypool/index.html","a8dd7bd12795812e8af0097bf02ebf1b"],["/tags/qbitorrent/index.html","db6a27355d046075e9b9839080aec8e5"],["/tags/raidrive/index.html","6468fda931a19e4146613d6829e3acf8"],["/tags/screen/index.html","3d028bba2992ce525577e6b648c5a112"],["/tags/speedtest/index.html","e8759760bec6b2a1c24782f6f1e946ae"],["/tags/ss/index.html","2b51132d914802565766afedcc17996e"],["/tags/ssr/index.html","37546c20531e84992ec1515729b55f3f"],["/tags/surfboard/index.html","e64446f1fd61e5fb9df10b2eb77d69a4"],["/tags/tap/index.html","2b3037f77ff261822dc5308cc0adfa5c"],["/tags/telegram/index.html","9f2a4c942ffad209caae116e8d429492"],["/tags/telegram代理/index.html","00bb6674216b9b312d27c57b5f688241"],["/tags/tg/index.html","c41b917d04bd58defadc4de20576797d"],["/tags/tg代理/index.html","83be5f83f13cada9ea2c0994bc0da1a9"],["/tags/top50/index.html","8f1ef77b778a4dcd1665e2671a7d7efc"],["/tags/tracker/index.html","c4e6742fa5211da165a38726920153d6"],["/tags/translate/index.html","a658cbd3dc94220a8fb7ecb0610ea890"],["/tags/translater/index.html","57a9fe42f5b9e44c6db27f60e204d320"],["/tags/tun/index.html","83ea8d1f48a79bf8e7e70f4722a7fbc6"],["/tags/typecho/index.html","b932bc669a777dc0eb48e7c37e0a2932"],["/tags/v2ray/index.html","3b2c5fc6e6afb9219fac65bae99e32a5"],["/tags/vpn/index.html","d22557839c893a07fb7113400ba3d56f"],["/tags/vps/index.html","b8cbbddc12e036b35b0e2e67e14e00c4"],["/tags/windows/index.html","6261163702af8d0ba60f9b59909ee9fa"],["/tags/windows端/index.html","1e759a383585ce93916e2d1c8e3040b3"],["/tags/xray/index.html","e552cc854f0fb87dcfc0e574431ab312"],["/tags/下载/index.html","311f9637146c5e6d4064464f7db935dd"],["/tags/不限速/index.html","a7d10708e25c2e053e634174f47255a8"],["/tags/个人网盘/index.html","54a0653314dfc71f4be1b4b5d044b352"],["/tags/主题/index.html","d2619abed8574b2f83db6e8c4dade901"],["/tags/云便签/index.html","e4858b8ae5088c90ba07830c583a4fc9"],["/tags/云盘/index.html","7665ff84939073ab20137c6db2f739f9"],["/tags/人人/index.html","b41f21ddb769251947e8b9861e786b53"],["/tags/代理/index.html","127f5ead36317109f7e468d869d478c6"],["/tags/代码/index.html","489892b0ab9c04e67416978ed4cf723a"],["/tags/优选IP/index.html","839eb3b1f9d9fbf919f234c9cf3866ad"],["/tags/便签/index.html","a305668b063bb8de265fe2701a2023c5"],["/tags/保号/index.html","223ebdbb15e75dadaacf1d3205a87e5e"],["/tags/免费/index.html","db94c76872eb6a80d5a65a89cef46a34"],["/tags/免费节点/index.html","aaea941b531f840d96aeb7441be588a8"],["/tags/加密/index.html","f3a2f79db3a423e5a56e281f4dd19df6"],["/tags/动画/index.html","192fb14f68acf2c101452082efac5ce5"],["/tags/博客/index.html","07ac0ac559f5f639789d0dd429100ae3"],["/tags/历史记录/index.html","92fad514b877e65c44a229133281238b"],["/tags/压力/index.html","dec8036cf404741ec96160b83a03e223"],["/tags/压缩包/index.html","dcedfa36dbed0cdd3a3ba209f19accce"],["/tags/反代/index.html","bb2544c1a4600ec599865d0f795e0644"],["/tags/可视化/index.html","02f9ad4b3fb34ce38cf2cdef1be0c0da"],["/tags/命令/index.html","fa0a09c7a68e6ed6666cd66a601cc9f1"],["/tags/国家/index.html","274c3420254de2aa18168d3e8d745231"],["/tags/图床/index.html","421b42630cdad0355c16fb34afc6a805"],["/tags/图片/index.html","08317a7a7bd4a212e3c66424d6ac615d"],["/tags/域名/index.html","332bc6432ac3cd41ede0c3439d6b6ea6"],["/tags/多标签/index.html","a46bf9cec7e15040bf23f86e46ab3fd9"],["/tags/存储/index.html","ea75626346bd1cea31c8394d0c986628"],["/tags/学习/index.html","315568801ab8094414b4dadd44beb1fc"],["/tags/安全/index.html","a65269690b663173c58dd9abcc0dc791"],["/tags/安卓/index.html","14df8b7a9c839ca7429f34ad0f34ff36"],["/tags/宝塔/index.html","a5d99f4a22a1f6d34cd9f52f6505e8d0"],["/tags/小游戏/index.html","6c18ca343becb2ea6d3374351e3747d6"],["/tags/广告/index.html","8d96bd7061694b64f9c69ba791ffbe32"],["/tags/建站/index.html","5e14c4e2e48d9ba9014c5de19a5a81a3"],["/tags/影视/index.html","16808b61eac65b1a25b49f48691bcd12"],["/tags/快速启动/index.html","13926f78ec31108018799bee5c3d22ba"],["/tags/手机/index.html","b737d4b54d8074ee95abc6d4019d86ec"],["/tags/托管/index.html","297c6e24955f3dbd874eaff08f3ea0fb"],["/tags/抓包/index.html","7f9fe551e8ebafa6e2284667fca5ee60"],["/tags/抓取/index.html","39148b8b3e5c4ae3daece4040423adcf"],["/tags/投屏/index.html","540699388de1fc6d8c25d4f22b56807d"],["/tags/拓展功能/index.html","bcc30c4061ca18bee7dc9827be336ffe"],["/tags/挂载/index.html","5a0bad076d40e9744a46657698eff42a"],["/tags/指纹/index.html","3fefd744f5e651304af6a78cd915dfea"],["/tags/接口/index.html","51b38283113e5328dfa7b03f177d3af0"],["/tags/提取图片/index.html","8c4199d7483fa862b496a88a084c50b9"],["/tags/插件/index.html","b4abf55c037c4052ba0805ae628bd86c"],["/tags/搜图/index.html","be7514f815b4623cace973e81de4f0ae"],["/tags/搭建/index.html","84fdc5144c7b362032a655ee0f384fa3"],["/tags/撤回/index.html","1c412ef0296c3ec5cd190688efa46142"],["/tags/播放器/index.html","cc2f9f531e16fca40b1ffc700fada78c"],["/tags/政府网站/index.html","f2ef77b124911b8c4db626640c310a2b"],["/tags/效率/index.html","5f701720920e3a13f0b5898959db3a28"],["/tags/日历/index.html","05c0e80244bdd8d56afb36921a8b27f8"],["/tags/服务器/index.html","ca3ad77f1a1ef9b54838c26d81a22cc7"],["/tags/机场/index.html","537f9dcb96035228e8a2e5541aab1413"],["/tags/桌面/index.html","2e059dd83fef83fc39410e221d331659"],["/tags/梯子/index.html","4a78faed5e47b1a3c46d2c9a88775266"],["/tags/检测工具/index.html","33a4f67aabca419e898bebfa33850882"],["/tags/汉化/index.html","10895fff77a382a7d9462beebeac9704"],["/tags/测压/index.html","a5cf2f9146b3983c3bc046fd17893b7c"],["/tags/测速/index.html","7deadb935d3f3f043431ebfda1e3d1c2"],["/tags/浏览器/index.html","56ce64be870710e646b8aceda09a961d"],["/tags/清理/index.html","b2fc0d5cfca5d48fa65f933fc3cc4f7e"],["/tags/滚动条/index.html","0be501e14a15d6024059b94691d8e6a5"],["/tags/灰色歌曲/index.html","675990e835f595a5db100c4f4151f313"],["/tags/电影/index.html","74957a3561710a88cc707f5b6ccbcb7d"],["/tags/电视剧/index.html","6410e72a51869ef7b2bd54ddfee786ff"],["/tags/白嫖/index.html","6d00f950f173ac947812a46e6121acdf"],["/tags/百度/index.html","e20b881a66da0fab17d835aecb70d4eb"],["/tags/百度云盘/index.html","0ba93a209bb42558a15c5e1664349534"],["/tags/百科/index.html","ade41750eb1c34203a80fedf4ab04d9f"],["/tags/短信/index.html","445fdba6719b44d6d7f537bead14205b"],["/tags/硬件/index.html","abab07e94bb4f51aa005983bf9797d5d"],["/tags/科学上网/index.html","138c944c941c146bab680300e72faeea"],["/tags/空间/index.html","14fe51e1a66092006f8aae81e2d47261"],["/tags/笔记/index.html","59cd622c6ec5d54fc9694f8bec50365a"],["/tags/简洁/index.html","65ee8d240b32dcb466759c898f83adf7"],["/tags/简约/index.html","48ce7458bbe30c37d507ae01eeb5dcb7"],["/tags/维基/index.html","a10f307b9f1c2dd299bff58578ac0e19"],["/tags/网易云/index.html","5965c1d38a96cfbe750c30ae9117bdce"],["/tags/网盘/index.html","f23f1dfd058f7ee54eb34105197d1ad6"],["/tags/网站/index.html","65be1c451a975fb8053d939319eaa720"],["/tags/网络/index.html","a3652d129d908989cf2b581ec2251d15"],["/tags/美化/index.html","0f0b8c80820e2554fb7f15420e62e73e"],["/tags/翻墙/index.html","ccc04608e1bd0eda204e871a98753869"],["/tags/翻译/index.html","bf4d6dee690b7eda63d9854b08aa769f"],["/tags/翻译器/index.html","6a8906d14a9797eaa97d9925ef865044"],["/tags/聊天/index.html","dc6e9f9b362b1116951fff0ebf75ee06"],["/tags/聊天室/index.html","aa7622a2075a66c834cc3fdc2130a241"],["/tags/联想/index.html","22b0b196261ec634b694da3ee19ff6ba"],["/tags/节点/index.html","284fbc64fffdac91050789a4de6bebd9"],["/tags/虚拟手机号/index.html","97207c4cd3ba184d44f5e93cfedbe727"],["/tags/补丁/index.html","031bb50a06bdaa692d50138910d94870"],["/tags/视频/index.html","152d122434fd055527403acc84367845"],["/tags/解析/index.html","7c62484a8763035161bd5a03926b7ef0"],["/tags/订阅链接/index.html","3c0841993c8f0e6b54dfe29b45a5fe25"],["/tags/记录/index.html","a8962ece5285618a081f949f7694783d"],["/tags/识图/index.html","f775cd26986002bc955f1ff484aa5ca2"],["/tags/语言/index.html","84ee666a8d203257003608094e908ab3"],["/tags/资源/index.html","32eb8258382bae863ea786d75fce51e8"],["/tags/资源管理器/index.html","e891530f0707cdab2d15a084fe4bee44"],["/tags/转移/index.html","dfcbf338513cfd7130297fec81470d54"],["/tags/软件/index.html","f4d7cfdf9dd1a1cbe6e5059368db032e"],["/tags/轰炸/index.html","1f540bace5189a9c25d0f5656e9e9dd2"],["/tags/迁移/index.html","7570f4fd4224f57ce6c0912dd3c53e99"],["/tags/远程控制/index.html","142cfdcc6fce217207681c1232bc94fb"],["/tags/连接/index.html","1f3a3d1fa026bd3bb562b1cbfd01cca7"],["/tags/追踪/index.html","7978fb7d5a0e07e4ee17e618b3a06819"],["/tags/速度/index.html","2127b4861edf4a8801ab3d35c0c040c2"],["/tags/邮箱/index.html","de2f9983f1ffce4c103e63788f526f4c"],["/tags/酷炫/index.html","86e1b5cabd6aa0ce59d0d6c12091a967"],["/tags/钓鱼/index.html","62943c0cda6d4ee0a40f897eebaf1432"],["/tags/镜像/index.html","b6251290ed592255541143feb1d7c3a3"],["/tags/随机/index.html","3b74c98c465a27a4756cc7fb4532bbdb"],["/tags/隐藏/index.html","db31e238187d13602defe32e49fa9e2d"],["/tags/面板/index.html","e1752a97a5efdbc8daf3fccc3c0cb303"],["/tags/音乐/index.html","fa32258113e253b16d2a22ecbe4f56e3"],["/tags/高颜值/index.html","8c81614ec73b86927b94c80a5f3f8881"],["/tags/魔改/index.html","79cdd480679d79f5a1ab44e8858f40e9"],["/tags/黑名单/index.html","0a7ad9614fbb6567bc0a8de16cb224b2"],["/urls/index.html","ca3f799a349de250faa1a80df75126b7"],["/vps/index.html","b256b75b8965260bad14951b8bac1958"],["/支持/index.html","f3a8960184a68c233fd543c6b94645fe"]];
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
