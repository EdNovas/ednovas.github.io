/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","e681c8cea62951d3c0b87fecb3e4a2b3"],["/2020/11/29/clash-windows/index.html","5f4dc4cf6992d090f7392aa8a03f5676"],["/2020/11/30/websites2/index.html","ae9e9d7b2bd6a2e59110d695cfed1cda"],["/2020/12/04/iphone4s/index.html","651a4a680df1fe0037699707911cb4ed"],["/2020/12/04/onenote/index.html","c2792ad69a1d1cddfc542c1d2c27b70c"],["/2020/12/04/wesites1/index.html","cdbdeb19bec93b151ff61cbcaee4a074"],["/2020/12/06/nokia808/index.html","fe2948e761e38dde66fe492f863116d3"],["/2020/12/07/ipad1/index.html","2d057b5907dff8d0060555ade9729e7c"],["/2020/12/18/freesubscribes/index.html","c899096e9b7c4cd8aee6830665cc9f06"],["/2020/12/19/musics/index.html","05cd5791408e19f4c33c6d3dcfedc0e0"],["/2020/12/19/shadowrocket/index.html","2fa6bddc893511331acfe2d3ec7b3bf6"],["/2020/12/19/v2ray-windows/index.html","cb6ffa862aacb296a05f9431ec8d7b3b"],["/2020/12/19/v2rayng/index.html","716936e4bea70ecaaaf503f692a40c3c"],["/2020/12/20/beoplay/index.html","66aa19819a60d2d8f3ed0b0bb0e16bfd"],["/2020/12/20/订阅链接转换/index.html","cfcf4a958d6c7e58eb7a8abc87d73d16"],["/2020/12/21/chrome浏览器下载提速/index.html","5fc71babcf1e2fc20a5e9db2af5dc573"],["/2020/12/21/免费128线程并发下载xdown/index.html","d2d715cfca9a13fb2570ef5d8d69a37d"],["/2020/12/21/免费32线程下载软件ndm/index.html","7f1b7f127661514aa3bbbfc5b27ad6ef"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","ab4e335f623c41eea6c3514f41f2a9aa"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","83052650db968ae4327b517ebc913896"],["/2020/12/21/广告怎么知道我在想什么/index.html","80e6c71f6fc51cdd229b87b596f54927"],["/2020/12/21/无名·引子（小说试写）/index.html","779d2f7c86b03dd11e3e3bc993a1954c"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","6cacd7b11ee722ffad7f75f87079edbe"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","34bf01255a0248d1be26adcc2e70bb2e"],["/2020/12/21/高速轻量下载器aria2/index.html","4ce0a0255e22435ec1993f123606c15f"],["/2020/12/22/2020-cee-roo/index.html","a92a8f3c013c87cc7c9280328bc5ebd1"],["/2020/12/22/firefox插件、github、steam富强/index.html","3ebe3f12dcc4b90b9b10c8fb250fe058"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","c22b184f42920dc1fcdc0a2cbc910c5a"],["/2020/12/26/python-day-1/index.html","2416390f65183936579d9fa6429f65f2"],["/2020/12/26/python-day-2/index.html","6b4ac5b80ef67314f08b7e51d0a4ad04"],["/2020/12/26/度盘不限速下载方式一赏/index.html","8c1d8fbadeac7c354ba391a39ff0ab4e"],["/2020/12/26/添加开机自启软件/index.html","e4c8ec69ebd3369b3b8569d6c1785b51"],["/2020/12/26/电脑端截图方式一赏/index.html","54dc00cee643ba3b73e5b96c4d618937"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","e25c4e3f352963dd4fd8c61f6ac46137"],["/2020/12/27/最安全的浏览器tor/index.html","fb02fc4f413557dd47389dedb2f45383"],["/2020/12/27/网易云刷等级和听歌数量/index.html","b9917609e1766dcbedb7577ca117e3a4"],["/2020/12/28/freenom申请免费域名/index.html","1e1c7436dcccc242e4b65e462a2d2165"],["/2020/12/31/机场/index.html","d054da25f0339117bc88bc9e2c0c6c07"],["/2021/01/01/M1/index.html","b845f219b2a7f9ed4ac61c6bfbe527df"],["/2021/01/01/compress/index.html","7bbed05488012886e58f7a189db0a0ed"],["/2021/01/01/infinityfree/index.html","28bebb5d6f17a4b1439421f41d97b2e9"],["/2021/01/01/硬核翻墙/index.html","21756f2630fc881c716d158ea776f2f4"],["/2021/01/02/qq/index.html","cf9669e1249ce87c89570ad91c40ee3e"],["/2021/01/03/netch/index.html","bbd5e87f051ad1e67a49b4a5eee15c4c"],["/2021/01/03/waifu2x/index.html","b2a2a8a7f1bfcf4b0006cb902e7e38b8"],["/2021/01/04/ads/index.html","a551d4b5b6023f1c5879c24d4ca0eb16"],["/2021/01/04/games/index.html","b5341ecc5d40c4ec1dbb865035cc072e"],["/2021/01/04/heroku/index.html","eceeacb379530c89ea9064c78223f64a"],["/2021/01/06/movies/index.html","98752c2608ddcfc8d5c16f85d9b7abe4"],["/2021/01/07/google2020/index.html","0de3914f8b387ef937ae301433c86c1a"],["/2021/01/07/lucky/index.html","bbf8da536654b9e40adfbe5bc74a0a80"],["/2021/01/07/spotify/index.html","a1942621db84173cf11562889b487047"],["/2021/01/07/thunder/index.html","804a24c1de3dfb99c41496dc453eeb63"],["/2021/01/08/adguardhome/index.html","5520d8b1cf4563e44b1c7306230633fa"],["/2021/01/10/IBM/index.html","679fd671daa552443881ef7e7399af51"],["/2021/01/10/potplayer/index.html","835b31f1e3db02a056b06e96762cf28f"],["/2021/01/10/sakuraanime/index.html","fe0bf5709176e59b2d67edb1866398d7"],["/2021/01/10/美剧星球/index.html","f9dc1579d1a476a294c72eccaab8414b"],["/2021/01/12/telegraph/index.html","e6b08a48280fd1238191686c1f5731f2"],["/2021/01/14/comics/index.html","4990da4ca2703bcd2d5fc80188c8cafb"],["/2021/01/14/ftp/index.html","dc2b7b6057ec40be2c9d28a90b08bdd5"],["/2021/01/14/oraclecloud/index.html","50bd9222397e5798ab80f6c7f4162a52"],["/2021/01/14/porkbun/index.html","a0e99fa3b53fefa37222be55ec994e52"],["/2021/01/14/powertoys/index.html","5b0480641bcad70c5d3ff041f02d88de"],["/2021/01/14/taptap/index.html","fd0f05805bb6a26cb1333241819d465d"],["/2021/01/14/ubuntuvsftp/index.html","64eb8a18d8b32660b938225b3dbdcf29"],["/2021/01/14/小说/index.html","33e4156a2b8c18f1eb7d47e4ae77b654"],["/2021/01/15/freeproxies/index.html","ee66048cdb619e011a7099f18cc5a316"],["/2021/01/15/incaseformat/index.html","d9996d6cbb995c2ae53d1853ac384eb8"],["/2021/01/16/euserv/index.html","d3986c8ce877afeec87c533f0f80a2b9"],["/2021/01/16/winxray/index.html","f2955c0f187e7559cb0f38eee646bce9"],["/2021/01/18/qqreadhistory/index.html","736b9e75757b2b000a7548387a6bddbc"],["/2021/01/18/qqrevoke/index.html","76fb16ead908a0f65982c85a49ca0ed3"],["/2021/01/19/freevpn/index.html","0fef2cc23bad798baaa7c5edaec27c75"],["/2021/01/20/browsertrack/index.html","573edd4b4883f361934bff777cfdca64"],["/2021/01/20/v2ui/index.html","892c2fefbc4220b5fcacdb7c55f0c5c2"],["/2021/01/21/failedtoconnect/index.html","6839e804eb84071a95f3e06b9d913714"],["/2021/01/21/gitcalendar/index.html","6289f493cf6fc36755aff8b9818ad282"],["/2021/01/21/markdownformat/index.html","fc8e5efdc2cb85a1b170fefbf75a6000"],["/2021/01/21/markdowntable/index.html","4d6229ac219de1457ceeeb15cdd9c982"],["/2021/01/21/vercel/index.html","dcffd1a10d64c9fc1644459e4acef2c3"],["/2021/01/22/hardware/index.html","d6cac794b056478fd0fa3dcd246936c4"],["/2021/01/22/muviz/index.html","1f52d2aa5183d25f46b36122fc3bb723"],["/2021/01/22/randomapi/index.html","6ca17117afda774e803d045247f83230"],["/2021/01/22/searchimages/index.html","d611e26e875cd39ec99e632309566533"],["/2021/01/23/RX文件管理器/index.html","f1f8786d005d9f5109984593fb7f0a99"],["/2021/01/23/chromeflag/index.html","437d10b8612971e8de27b8e94de1d16d"],["/2021/01/23/qttabbar/index.html","9807f5727d5a2726a450e0f23b8188fa"],["/2021/01/24/githubspeedup/index.html","364b966872c53bea2e5426f6bd6737a5"],["/2021/01/24/jsdelivr/index.html","9409070ad686de1b1e066aa3533eced1"],["/2021/01/25/note/index.html","7213804cb1d47192c3303ceab8b14494"],["/2021/01/25/soul/index.html","b5a71251d90f331e44ff2e3089e61d30"],["/2021/01/26/herokuxray/index.html","45d5dca99e120c157fe4ce812c35f527"],["/2021/01/27/proxypool/index.html","91d3abbb00bc0b65e4b2ba6fd10c379c"],["/2021/01/27/tracker/index.html","6bbbbe757e9e1f60ec1907dcb0d32311"],["/2021/01/30/pandownphp/index.html","2dfc925d62528602f7edcd1a81a87ef4"],["/2021/01/31/newgroup/index.html","82b2dba8d11d282ccee38f1874520bae"],["/2021/02/01/clashlanguage/index.html","dd2c0b625e5b1ab8b8f392223a61538a"],["/2021/02/01/encrypt/index.html","0258d8bd49fd16e4bca8c1dd96cfcb00"],["/2021/02/01/footermotion/index.html","db16d7d968a53328d83ead8764e85a64"],["/2021/02/01/gitter/index.html","636597266d29ed0f4351a53956914602"],["/2021/02/01/pixivtop50/index.html","4f42df8122a2d2f71613ad174942447a"],["/2021/02/01/scrollbar/index.html","b06ca0de95e9bb830a48585d1ee254a3"],["/2021/02/02/clover/index.html","55782ae649485d75815c8add2349bb16"],["/2021/02/02/maya/index.html","ce5444fb5a10eca59bbf8f462e9e14ec"],["/2021/02/02/speedcontroller/index.html","0c73d75857b9aabc8819463f550f96d0"],["/2021/02/02/yesmusicplayer/index.html","88476246c4ebf03ec19cfc6adf64c7d2"],["/2021/02/03/lenovoonelite/index.html","309ac035bf4f4a8e07f5cded039997ee"],["/2021/02/03/skipads/index.html","33e770238644d059ab91a95bb7db662d"],["/2021/02/04/picseed/index.html","54cb18c4bd18abb5e2d1feddd1d268ff"],["/2021/02/04/renren/index.html","7a5dd1999f9bd2e8786baae628e5e6c3"],["/2021/02/04/serverstress/index.html","727a733a0a96cf37f17838d39e923094"],["/2021/02/04/wikipediazh/index.html","caa2469f4a025db437ebef1d8e70b152"],["/2021/02/05/googlevoice/index.html","03dd943ecc33bf7a5c80d7194a021acf"],["/2021/02/06/clashconnection/index.html","e5312319a1760f858d37f4d395982213"],["/2021/02/06/gvtransfer/index.html","255f264f17cec2f9dba09fdf0e1e121e"],["/2021/02/06/todesk/index.html","fcff90223e34d0a622b7459adc626410"],["/2021/02/06/vpnblacklist/index.html","887f390b7d3ac0d415207aab629313a1"],["/2021/02/07/mklink/index.html","12168d560dde085353ffa2729a036e92"],["/2021/02/07/speedtest/index.html","4af4e23a98ec6b79629d807bccc02bb0"],["/2021/02/07/translate/index.html","1a58010b63d81d2613f14ccbf5b3bc60"],["/2021/02/08/ewomail/index.html","c0985371e117b68464a90c03f315c5d8"],["/2021/02/10/officee5/index.html","85ee118e424a033804cf5a85a6e85714"],["/2021/02/10/raidrive/index.html","89c671df77399f31dc5a98ae68d3f76b"],["/2021/02/13/e5sub/index.html","b1ef48808c0230a350a98aaaea3e2f13"],["/2021/02/14/screen/index.html","553f2771dbf9c6406291845be15c1a52"],["/2021/02/15/clashtun/index.html","95c453784109658f3245b473b0ee5f13"],["/2021/02/15/messageboom/index.html","79a4c3a97a7638b079fc284c07ff5a46"],["/2021/02/15/oneindex/index.html","8ee02317074c6102692112e93902277e"],["/2021/02/16/govsites/index.html","f53690d019c944f8026d7f20e48b0891"],["/2021/02/17/hexototypecho/index.html","3c3205294242c0c03ee0cef722f221e1"],["/2021/02/19/fiddler/index.html","a034a0157c4bd2a01e65ec2029d4ef4b"],["/2021/02/22/potplayerset/index.html","cfefa011315efd434b4e67901f90e416"],["/2021/02/22/studyresource/index.html","23963721752b0af351165b74dd89852f"],["/2021/02/22/telegram/index.html","7b8ca34069cfde0f8e4a476e8cf5db2b"],["/2021/02/22/videos/index.html","672ba9dea85d451855e1d38d892ceb08"],["/2021/02/24/mtproxy/index.html","14e443c7f85609457c7da20d6768a62a"],["/2021/03/10/catchcat/index.html","3dfe9f3b279987978712bda195b00d21"],["/2021/03/10/neteasemusic/index.html","8470f96f9e2aa9787023f7334e7073aa"],["/2021/03/10/surfboard/index.html","ae211fc32cc7a99e08b8deebd4e82004"],["/2021/03/11/vpnandjc/index.html","444d51731b4900325589577416b4ba9c"],["/2021/03/12/qrcodes/index.html","73760ab046b2ca80b83d0914edb6426e"],["/404.html","eeea3288a7e66e8e5835373580bdad40"],["/archives/2020/11/index.html","a4f5dac577ecc81c9af8b820d64f5773"],["/archives/2020/12/index.html","dbe2b4c00215923b3d15301c031c954d"],["/archives/2020/12/page/2/index.html","49abdf719fe61a43af5db70bd2a1ea5f"],["/archives/2020/12/page/3/index.html","ff23f3ce40bc2690d90ae4db7d0ec170"],["/archives/2020/index.html","c406dc828e5805168732de6169cc8045"],["/archives/2020/page/2/index.html","ff5f77f3a3138025a49e9ee136caaa00"],["/archives/2020/page/3/index.html","e928a37582c418450d845cd2db665e07"],["/archives/2021/01/index.html","750275bda338a8cfa78518e7889f6d4f"],["/archives/2021/01/page/2/index.html","103fae0cdd1ae7d5bd4e391d2e3f564d"],["/archives/2021/01/page/3/index.html","0d29d8c0573915ec0b75efcb9f6b2d6f"],["/archives/2021/01/page/4/index.html","daa177d5401a39e12df48ebae16f9d6c"],["/archives/2021/02/index.html","f679bafcd15168e4a9e7f2f474dec9f7"],["/archives/2021/02/page/2/index.html","1f297938f683e8c1160b497a3bbcfe2c"],["/archives/2021/02/page/3/index.html","baf2d09d7ead8f1b602782b296ab628d"],["/archives/2021/03/index.html","86fbddb0e3d8c65562fb34a8fe8fe5d9"],["/archives/2021/index.html","56d9a0003e9943018b671cb52aea200a"],["/archives/2021/page/2/index.html","c047a0cb893c725833b5fa06dba52a23"],["/archives/2021/page/3/index.html","6f82df8c0cdefa591e0aa233a614dfe4"],["/archives/2021/page/4/index.html","3811ba252e8cff4d5ef554f48ece6bfd"],["/archives/2021/page/5/index.html","ca10d9572f0db9daa24296c489da8844"],["/archives/2021/page/6/index.html","b2d70c96c0bb8f1d9593d89bf34dbf37"],["/archives/2021/page/7/index.html","e4bc47383f3a21961c386d0d4d3955ac"],["/archives/index.html","e470ac7c581de3ed46d4d9c1353279cd"],["/archives/page/10/index.html","151ef78ae802f94e05eac8c643fdac14"],["/archives/page/2/index.html","4a777b292fea34a316bf49aac3bfc722"],["/archives/page/3/index.html","5f78c442a65a3473ed580022500ae293"],["/archives/page/4/index.html","6a01f5909474e27cf0bfe0a95c34d8d5"],["/archives/page/5/index.html","32091074ad055805568793d457b79fff"],["/archives/page/6/index.html","189b37c3a674ce97cedd63ba11c6f841"],["/archives/page/7/index.html","3a0a3f9be5796d6420cb188c2e14fe6d"],["/archives/page/8/index.html","bc5baa0fc2881df0187038b2a6006a50"],["/archives/page/9/index.html","55ee8c55bcce78d82e27182245cd2d49"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","140dcd77a56c79d9eb0468ec0df6b3cd"],["/catchcathard/index.html","e9291c58bce68730cd21cc4e2b0a474b"],["/catchcatimpossible/index.html","ce8ac7a16e2b7990d9e0aeb78de4c0db"],["/catchcatmid/index.html","dc073d912aef351b621ce171416ebd82"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/categories/VPN/index.html","6cf0444f3ca2610663ebf8dae9f008e2"],["/categories/VPS/index.html","346b7f61f53ee45d07fb4b3e1b435bf0"],["/categories/index.html","dbfa7621e803a0e07836b29c6077dca6"],["/categories/下载/index.html","d49d2a31973172bbe2ab9b1a5ec054d2"],["/categories/安全/index.html","5f519c3b895790410f1a04868e4588a9"],["/categories/建站/index.html","8c75d1bf69a1aacfceffa352e0993e6a"],["/categories/杂/index.html","dcc6670eb687ab4788c4f8296b786e3f"],["/categories/杂/page/2/index.html","41ec6b34c44e1c07f67e1d098614f62e"],["/categories/测评/index.html","e1367cec0e379d2aeaf43d9d5b3048af"],["/categories/科学上网/index.html","40f7abf78af1bf07864b3f2825a2d66f"],["/categories/科学上网/page/2/index.html","968999c7745028da5810b40738a91f0f"],["/categories/编程/index.html","ec4adbf025fe22a736b0c3b91111fa3a"],["/categories/网站/index.html","f9daf1b98b08b0965f7ab6ba992b94c2"],["/categories/网站/page/2/index.html","f5a60e14002bfdcd259d3979e9d9148c"],["/categories/软件/index.html","11ddec06f6ca12012e88b3327f2e698a"],["/categories/软件/page/2/index.html","905bdc6937a1802e102d87e286d4385b"],["/categories/软件/page/3/index.html","e3f68be174e68c22f70aea7f19f62ff8"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","e94da67aa0100cfd7b8aa92526b99be8"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","df3cc1e091ce52413d1c0ad36564a7e8"],["/ios/index.html","5f6a1b45bf4d5b8799c3957d8472f9ef"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","f64d38c8aa24721fb1889982193f0a99"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","a6bb814df50e046fb3fc5f0b5ea52fe7"],["/page/2/index.html","9c5ef16697fd7495a55af9fcbf175495"],["/page/3/index.html","ce71b28364e36a81324517b461bf6382"],["/page/4/index.html","bb6612902cd5bfb6695c372a55e5c551"],["/page/5/index.html","80dd84ef3e70dd1f11c88fc3622afe97"],["/page/6/index.html","f2cd756d2b52800dfcf8ec92824cca40"],["/page/7/index.html","73e088a5cc3e1164e171290d11fbb7ca"],["/page/8/index.html","24290f2df6d5db47202fc767e01d62ae"],["/page/9/index.html","b61d3463aa6d2a492bd04a8cd0ae6eab"],["/payment/index.html","0799aebebcb27c188d87147473249eee"],["/privacy-policy/index.html","8c9f4cff85c59baabf6801940bc69a14"],["/rss2.xml","02ea9d9a1c79be67c5374c441f144bb4"],["/search.xml","a181025eadea6652bcaae531e8c35267"],["/sitemap.xml","2616b110c7ef0280d9479fe611eee1c0"],["/sw-register.js","ee4b58901f199887265b8f0182ca10f1"],["/tags/5t/index.html","25c98a702763eac1aba15758e79cd119"],["/tags/Clash/index.html","61e4a2a1602619280243db9ed5fe39a8"],["/tags/Clover/index.html","122776c0b61de7212651a3a5a2f07888"],["/tags/E5/index.html","5b539fafc8cef41fbf97585473467aca"],["/tags/FTP/index.html","66ba7f6498842c3d9847952088c5ce6d"],["/tags/GitHub/index.html","8723664a8944f9dec096e8eda3ff40c8"],["/tags/Heroku/index.html","442fb84ddf9f571dbb515fdefcafe8bd"],["/tags/Hexo/index.html","b4d2a0632620531aac74e8b623114c04"],["/tags/Lenovo/index.html","78b48bc3621a23f556d846f2153d27a1"],["/tags/Oneindex/index.html","91431af33ebe1794cf206efe22071af7"],["/tags/QQ/index.html","cb2efd57fa49ce5d0fc13913b5c55b67"],["/tags/QTTabbar/index.html","2615429480c48388cb3da28093c927b2"],["/tags/RX文件管理器/index.html","580d00a1ad056ba899feb8a092e44052"],["/tags/Todesk/index.html","a48e0b5adaa96d2446461f2d8ac6cc2f"],["/tags/Vercel/index.html","2c17023a70b26cf97597d40b8c4d6c91"],["/tags/ads/index.html","57fb3b64202aba25feec6deb507cd15b"],["/tags/api/index.html","09743b4c88b10d93ebff2ac67f484066"],["/tags/app/index.html","f6aadf1a434261a3541f0655d14eec66"],["/tags/blacklist/index.html","f2eb150cfd7f74805b4542bb8b6f6305"],["/tags/butterfly/index.html","e97a2eaf2a3973e40b8c5956a93c899b"],["/tags/chrome/index.html","99aa698481309147b7b9b07972788dfb"],["/tags/cloudflare/index.html","6fa210f6637ea9b0f0607cb2bc990461"],["/tags/cmd/index.html","9acfd968497e879e84d3ae3a5da98bfc"],["/tags/c盘/index.html","eabb150327d11c2581b2e2bc45162a2f"],["/tags/email/index.html","1aa28ea633fc5580166ac3762882493d"],["/tags/ewomail/index.html","94e483751dad21be8dc9bd0f9bc8e59b"],["/tags/fiddler/index.html","8146765f8b5883caf4e4a36a80e774b7"],["/tags/flags/index.html","81c4c624162aae3c8dbd3d5f0a1d5a19"],["/tags/footer，页脚/index.html","bff3c301efa60adc4da32c877cd8a3c9"],["/tags/galgame/index.html","5855eed473ef971a970cf6a2c55ab74d"],["/tags/git/index.html","886346fed62edd69deac0b0d4d6c7a2d"],["/tags/gitcalendar/index.html","8530f2b0c3ce02b0725ff6ef2648f18e"],["/tags/google-voice/index.html","6095c01c529dc2abe93373402cf55dd4"],["/tags/gv/index.html","27148ba59497959f56bebd94a941fd0b"],["/tags/html/index.html","390b2d35dbc29462f0046d8e168872b7"],["/tags/index-1.html","e76318afcb72215dfb5ec4e60f1eddda"],["/tags/index.html","ed748e5b52db4c4bcaa682886920b3b8"],["/tags/js/index.html","e81a1005e1b6e25fb75a09d5e43facfd"],["/tags/jsdelivr/index.html","4987a0f3a083a50871d09a367312cd8a"],["/tags/linux/index.html","a6b630bde52f093f66c079cca568963e"],["/tags/madVR/index.html","6e2a288f11ebdbca2a64ca936acb3d9d"],["/tags/markdown/index.html","8083146ef94b92fcd1cca986fb8c2f1d"],["/tags/maya/index.html","0b03c3eedafcaf326365277634de7a7c"],["/tags/mklink/index.html","0ef3618bfcddf51b2657f3363d536458"],["/tags/office-e5/index.html","6fac4eb50c3059e075177ef29e785462"],["/tags/onedrive/index.html","228a2c8204ef4f5e8ac24dc328129431"],["/tags/picGO/index.html","f9642cdb42c2746ece1910b0cae95c46"],["/tags/pixiv/index.html","a2d60349f5d6fc7c350097ab15bc4128"],["/tags/potplayer/index.html","2c09b01a009e4bea3e586278ce380db6"],["/tags/proxypool/index.html","475d2034306217787c278f4405b4fc0e"],["/tags/qbitorrent/index.html","69ea57f49a8e07dbd21300dcf64b71f3"],["/tags/raidrive/index.html","d86c6e07acb2eeff70e671359ff133e3"],["/tags/screen/index.html","df923e5ea1e66e34399abf5160bb42da"],["/tags/speedtest/index.html","b20ec0e916af6f9c9550b2c5d064772c"],["/tags/ss/index.html","0730fad87095f0401069c51fec3b5f2d"],["/tags/ssr/index.html","448dde05128c095c07d0573c44b6a4e2"],["/tags/surfboard/index.html","d6c8424f2e47863360d532965ab0d457"],["/tags/tap/index.html","ae0d9c97051e9e9849da7d1b2d7b6a10"],["/tags/telegram/index.html","725db40ad8d74bd5b889a508416869fa"],["/tags/telegram代理/index.html","29a327fe3f93db124b3bf16eba51a9f0"],["/tags/tg/index.html","0d688fc5b0bb081dd351a9a663432293"],["/tags/tg代理/index.html","ff126df246b02c60ae492109f19af9c5"],["/tags/top50/index.html","844582aedc2cc97fa8be5069369c369c"],["/tags/tracker/index.html","f24ed7005bbb7bb2435f332357148d22"],["/tags/translate/index.html","603115f66c129b3b90b0a156cc59a8b6"],["/tags/translater/index.html","5cb14277b49b83e3496d0241dba33986"],["/tags/tun/index.html","db160e15a4f5f7a8fccb3fde89ef9317"],["/tags/typecho/index.html","ea89089701f41557568a7eccd05904b4"],["/tags/v2ray/index.html","45892cdd6158ebecd0da9f97bbdd5925"],["/tags/vpn/index.html","b07305274c17fc4f210a7a1a5716d593"],["/tags/vps/index.html","30ab1c3e7c53acd42e20f7bb0ab4d12c"],["/tags/windows/index.html","9e97b6aa00ad8f35a00913faa8223c05"],["/tags/windows端/index.html","7eba581410bfeba34c878c917a492b11"],["/tags/xray/index.html","abdc2a10212ecf0b4c1ceb0fd6fed1b0"],["/tags/下载/index.html","6464ce0ad8283b0be8d6e7f8122be538"],["/tags/不限速/index.html","15ecbe1d954875be0b895302327b40e6"],["/tags/个人网盘/index.html","c87ea83939b0288855ec3c05cb54ae68"],["/tags/主题/index.html","f53c662b48b82f4dd255a285491e8473"],["/tags/云便签/index.html","289e12e7feb7426e62a6989cceb55888"],["/tags/云盘/index.html","1223b20e0a50516d066ef271952042dd"],["/tags/人人/index.html","718cf961aaa13c7c2a308930ba8eda9f"],["/tags/代理/index.html","aa73ff66116178ddfa65559566f5b3f5"],["/tags/代码/index.html","4d60e171163c34a42d6651c88b870b8b"],["/tags/优选IP/index.html","4854026ebaa4864a4170321f1f2a044b"],["/tags/便签/index.html","373d57091f9ac8d9a70af2af839088cc"],["/tags/保号/index.html","bd2695b7c3257b3e9fb34b4feac707c4"],["/tags/免费/index.html","72165977fcd22cc79b4570fa482120e6"],["/tags/免费节点/index.html","d416de00e581a0d065aa46dda0193738"],["/tags/加密/index.html","36c1b60d28d38cdeaf1b1176c30a6f82"],["/tags/动画/index.html","e3c6cfc3a0109856f798d3644f04c284"],["/tags/博客/index.html","d6d2ec97f6e90caffac69cc330ab9758"],["/tags/历史记录/index.html","8c16f8a6451747baf8f13d59d2bf90f3"],["/tags/压力/index.html","043ef373012bb561cc1dd33fbd4a4c3e"],["/tags/压缩包/index.html","bdcce8f00ce4a9eb58d1a260cceb444b"],["/tags/反代/index.html","521ab6078b79bd4ce3154a8dbe2a6358"],["/tags/可视化/index.html","57eb8539718b241cd72807a692197381"],["/tags/命令/index.html","03947f1e38acc317fe0ca313d8eb5237"],["/tags/国家/index.html","708592779c6423d340ff58103b4acb03"],["/tags/图床/index.html","fc7c1abe7b1a6aa6e7d9c5a4ab289f3b"],["/tags/图片/index.html","22d1428a905b271dc93f7a5574ed032e"],["/tags/域名/index.html","4e7c8af34f1ed9cc4e7149d1b27ef1c5"],["/tags/多标签/index.html","e65ca16e1f72ec94eeb4a6ca0d3f598b"],["/tags/存储/index.html","3d5deb83db47e21fe828e6019c057dd2"],["/tags/学习/index.html","ebb7a262688ce7dc3411209187389b69"],["/tags/安全/index.html","6a1aee6afc03a9514f7f8e2c9162147e"],["/tags/安卓/index.html","ce9b3d1f23f2aa7014e7adab513ceb87"],["/tags/宝塔/index.html","eb8d34d36ceef8ee352c8032907b14a0"],["/tags/小游戏/index.html","dbc89be7db064576f44307e4f7ab4f68"],["/tags/广告/index.html","e1dec2a6a24c3ca2774eca2952228391"],["/tags/建站/index.html","6d1f042db83a0e82ba95ee359a27e5c5"],["/tags/影视/index.html","57ec8f2f0b5af7540f33b1adb6cd4b11"],["/tags/快速启动/index.html","b0c8ab2211a141cb0e5dd29d0b21053b"],["/tags/手机/index.html","52f4e71f2e95f5037a817a8f66378537"],["/tags/托管/index.html","3ae0802a7ea268cbfd773a5165830639"],["/tags/抓包/index.html","a3be9ed5254323d5c4b6d03677e43383"],["/tags/抓取/index.html","f984eb18e566485b605d1d8d85dc5953"],["/tags/投屏/index.html","c79d7b57bf6a40d144d02c2bdcbd0e8d"],["/tags/拓展功能/index.html","0357a2969005e1c73507de97fb38b5d1"],["/tags/挂载/index.html","a7f9683037288c0b94b2deb3fa8ebfe7"],["/tags/指纹/index.html","7f8ef0ef7091b6e5691df2f06d85232c"],["/tags/接口/index.html","0ee7e96d1982c4d19f95c5738299fa86"],["/tags/提取图片/index.html","20717253105ea41040f6a204765b6722"],["/tags/插件/index.html","e7ade58135c905d092ea1bfe61be6d06"],["/tags/搜图/index.html","2c62907513158e7d293bbfbee8ae66ec"],["/tags/搭建/index.html","75376617d9b039b05736ce2ab8a3671b"],["/tags/撤回/index.html","51d24f95fb5658f7346f30e6b2dabcca"],["/tags/播放器/index.html","82625ee8353a4dcc0fa9ad05b0f5a60f"],["/tags/政府网站/index.html","4273b5b6d3dc09437383b0e7e76ee3db"],["/tags/效率/index.html","8c291f041bbe3d6a0a42fcb2e67fef85"],["/tags/日历/index.html","e676680e8cef542f568e267da8376229"],["/tags/服务器/index.html","30f07e00421a0e85a5c2e51e8699e612"],["/tags/机场/index.html","ce2dbaaf8430e94e587e4743527015d5"],["/tags/桌面/index.html","5d63e3cf854d8bde8450b0b50db12d70"],["/tags/梯子/index.html","c64361eb920e359419cae14321c88901"],["/tags/检测工具/index.html","cfe85771bddd5fd08b34dd02aa00cdc8"],["/tags/汉化/index.html","34417d15c2b11d423ec03b04c7a4d0d7"],["/tags/测压/index.html","99dd19a9cd75fb4224af66aa3daa1e75"],["/tags/测速/index.html","7477f1a920c362eccbef6fab426806ab"],["/tags/浏览器/index.html","6cd358fc6ebeb4ff642c365fab7af94c"],["/tags/清理/index.html","9dcad0210efeda0c1a1f76977a2f9257"],["/tags/滚动条/index.html","3691dfe3b933960f62d29eff43fd4e03"],["/tags/灰色歌曲/index.html","e2603e6e25aa99ae2ae4b14fc792db29"],["/tags/电影/index.html","44e0c35f5a24ba0624a02833e2347c01"],["/tags/电视剧/index.html","b75a3247060e32c2f0a751cfeb88ba16"],["/tags/白嫖/index.html","47c83b165395d7ea7f1bae7861f09bf7"],["/tags/百度/index.html","a666d471450ddf9199e10edc6d33f22a"],["/tags/百度云盘/index.html","856415be0f106d064d7a373d4a0eb039"],["/tags/百科/index.html","989c9d0449800ecbcda9e829e95733de"],["/tags/短信/index.html","bebe2e7a9f2f3190fe80a3ce75d601ec"],["/tags/硬件/index.html","5bcaeb2e09d6f19074545d1c8b0ce9aa"],["/tags/科学上网/index.html","a9bed25e585887a5a0d89ce2f0848925"],["/tags/空间/index.html","4626dc8e42712456ea5aef6d1e2fe309"],["/tags/笔记/index.html","cf403ae9a5e750e0d7d8ecbad1e85a89"],["/tags/简洁/index.html","09fcaacae62bdcd3ace003308fb586e7"],["/tags/简约/index.html","934ed4efd484e6201454141065fdfaaa"],["/tags/维基/index.html","27b98473c04a08f694305650ed8a478a"],["/tags/网易云/index.html","ed974a1bc5cc4a40f86ca5e028ee5b1e"],["/tags/网盘/index.html","2090407bd9a2b58666c329cb5c77e314"],["/tags/网站/index.html","ebb93b7181d97bf7bbe7796785de86d0"],["/tags/网络/index.html","ebb1873c642682cbba298c28fbc21788"],["/tags/美化/index.html","47ee15ce417e255fdb60cec321b4c75e"],["/tags/翻墙/index.html","219a4fa2ef52b3038f7cd906e9b8aa27"],["/tags/翻译/index.html","6b6900e851d07149ce40ab86729af99a"],["/tags/翻译器/index.html","f863eae22eb474f45fcd57b9440b29f8"],["/tags/聊天/index.html","434556242f343ac43bea14241045bb91"],["/tags/聊天室/index.html","08e7e0cf283a9c837aa28b6843b2fc2d"],["/tags/联想/index.html","fef7d0922dc8a37069f396f36fa99e0f"],["/tags/节点/index.html","4921a32a1e32ffdf051165d6229ea0fd"],["/tags/虚拟手机号/index.html","77e8d8df11ad4c098244a0f2c2570c4c"],["/tags/补丁/index.html","baebe7e3a55308b39e652e6e3c22616b"],["/tags/视频/index.html","be8cfda3f16a2992e954fca40d8a7d5d"],["/tags/解析/index.html","6c3a644a6506e2b47f967666ec937435"],["/tags/订阅链接/index.html","b951948c0cd6c7ccd08343c95c95fbc0"],["/tags/记录/index.html","d105c796f2bfa149f7a313a676345853"],["/tags/识图/index.html","1e94ffa8ea3612b8394ee65e6e757638"],["/tags/语言/index.html","8ea3d13aad99aa301efa38cff7b7d45f"],["/tags/资源/index.html","e539c6aa78c8c2d129f27621599a2aba"],["/tags/资源管理器/index.html","dea3631a522a6d4b37f65ab769a67d82"],["/tags/转移/index.html","79f0d59cbba87ce0626fb3f758e34949"],["/tags/软件/index.html","dc62a8074b61b29e709dd101e21be326"],["/tags/轰炸/index.html","63bfcf9f269f29ca0715e0303bbfa569"],["/tags/迁移/index.html","d7036555a10a4ea25532a342f825e1e3"],["/tags/远程控制/index.html","54b0567dcbed694da2a03a70df1a40bd"],["/tags/连接/index.html","5da7a028ace942159cdde5e12ba719d8"],["/tags/追踪/index.html","d77b622eee5f721b475d26ab1a4b373f"],["/tags/速度/index.html","d9d29a817348e9e0510fcd82ffbdbc21"],["/tags/邮箱/index.html","5d5b003fb47cb79fc1486169fb17e441"],["/tags/酷炫/index.html","0d3da8517d7f9682e47c01e1c2a35d78"],["/tags/钓鱼/index.html","2e7250be446f758796a14ef3f9bb1bd9"],["/tags/镜像/index.html","f2381f4bf371558548195ebfcdbd0d48"],["/tags/随机/index.html","f16c60b69c50e7e403dbc2f2791aba21"],["/tags/隐藏/index.html","46905e7f0fa0c3ea62fc15d810451e4b"],["/tags/面板/index.html","b497d8c259802234b50b940d368ad3d3"],["/tags/音乐/index.html","4fcdfd43c8029a18f79085bfd2a959e8"],["/tags/高颜值/index.html","c52d0075ce205abc416784167bc763c2"],["/tags/魔改/index.html","02816c516b45aebca5bee67490bf072f"],["/tags/黑名单/index.html","4d23db356cd7c8b1d1062a59312fe376"],["/urls/index.html","09c4eb9cfa8e8ac64b1a616c38716063"],["/vps/index.html","05992ab956b88c2758da2cbb74bf38db"],["/支持/index.html","96cc58a155af15d3f342c97df37064dd"]];
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
