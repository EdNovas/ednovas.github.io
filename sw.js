/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","17849c0c4c78860552f44138b1d5cf71"],["/2020/11/29/clash-windows/index.html","18279d9f12b461e6ece9f55614f53ce4"],["/2020/11/30/websites2/index.html","9363a0a22e590725526d38818f51e6d4"],["/2020/12/04/iphone4s/index.html","937aaccab97f663a5d555c9d3e8d1587"],["/2020/12/04/onenote/index.html","620383a629de3d27130d3ef53d2fa25a"],["/2020/12/04/wesites1/index.html","c9bc41c02be4e2047f88b1dc9f547d07"],["/2020/12/06/nokia808/index.html","87f097cd9968c8b191739668e690bdc9"],["/2020/12/07/ipad1/index.html","ab908455a48f4f5cc43ee55ddb751c87"],["/2020/12/18/freesubscribes/index.html","d1339eb28597680cf3a65668da1d2d18"],["/2020/12/19/musics/index.html","967d6ebc1c248b12358aec9cfbfb35ae"],["/2020/12/19/shadowrocket/index.html","422f1ee2a19263ec45c3ede65eede2ce"],["/2020/12/19/v2ray-windows/index.html","144e8f6b12018143fddda597c135544d"],["/2020/12/19/v2rayng/index.html","221cbcbe69e2bde9de0b123d93c88060"],["/2020/12/20/beoplay/index.html","c8e79efb91399e7b047fd2203adbd49c"],["/2020/12/20/订阅链接转换/index.html","d2db22ec8c76a19e8b0f1cd27c7c9a37"],["/2020/12/21/chrome浏览器下载提速/index.html","07303c34bb8c8e79bd70cd024f34538f"],["/2020/12/21/免费128线程并发下载xdown/index.html","1bb35ae0b8a0ef543a2c531d0a00f613"],["/2020/12/21/免费32线程下载软件ndm/index.html","cb4e1a938bcce36079b8b87db9528d70"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","c7d864016a89426d59da4702205a01c0"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","7e442b322b83533d8ea34b351cfb0265"],["/2020/12/21/广告怎么知道我在想什么/index.html","bd8e66da0e96d1d2ffe18c048ad129db"],["/2020/12/21/无名·引子（小说试写）/index.html","777d68798162ff10b8fcf2c15cce03be"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","1c652a249d47e7da60014fb1b4b450c0"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","effddd97745f6936d16147b43445f8fb"],["/2020/12/21/高速轻量下载器aria2/index.html","3f043716b696ae513f5658155e3f3d6f"],["/2020/12/22/2020-cee-roo/index.html","90addc30fae57955d7b15b003835a82b"],["/2020/12/22/firefox插件、github、steam富强/index.html","300636c14e71de74d207e58910241809"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","6b214a4d9ed6834201e0938812be4e76"],["/2020/12/26/python-day-1/index.html","575cb9f426e254c3f3918115a2e80545"],["/2020/12/26/python-day-2/index.html","5dbdee59c198d8907a5333161f99c9b6"],["/2020/12/26/度盘不限速下载方式一赏/index.html","69386876bead97723fb8e9dbc4d44086"],["/2020/12/26/添加开机自启软件/index.html","47880dbf78e53fa6d10f679580d81c32"],["/2020/12/26/电脑端截图方式一赏/index.html","a5e3e6bd58c3a4ec7ae9624829f52630"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","beeada9284591d25198603ccb9573d5b"],["/2020/12/27/最安全的浏览器tor/index.html","866a03557a204ca99929afeb4a074ddb"],["/2020/12/27/网易云刷等级和听歌数量/index.html","5fa8c17b7577ccb570d61e2114bb9468"],["/2020/12/28/freenom申请免费域名/index.html","c226944e9beff6e275f0c92c23b73f6a"],["/2020/12/31/机场/index.html","9faa849fce20927a81f742839dac5c1c"],["/2021/01/01/M1/index.html","a5b800da646bbfc8dab646703ef5d10b"],["/2021/01/01/compress/index.html","c19f7854e14c316a9a05f73ead247095"],["/2021/01/01/infinityfree/index.html","89d8e4af8d9644025d39c95c94712f1b"],["/2021/01/01/硬核翻墙/index.html","f1d3bbb9ad667fbc2f32d168dd874798"],["/2021/01/02/qq/index.html","0bfaa728b178e39298b2317d5ee32584"],["/2021/01/03/netch/index.html","8873259bc33bcd364c46edca7c415e7c"],["/2021/01/03/waifu2x/index.html","187b3a6e5a0f89ce59f3ff3efc0f35d4"],["/2021/01/04/ads/index.html","e6c76e26fe4f59a8e46da456e2826624"],["/2021/01/04/games/index.html","0594147a611ac605d063af1c9907b1df"],["/2021/01/04/heroku/index.html","5eaf26096d234eab9551b1767ceeb0a8"],["/2021/01/06/movies/index.html","b09165baf7de60af9b69daee960f7ab6"],["/2021/01/07/google2020/index.html","ff800d9340e4988fef40eb88a3a806c6"],["/2021/01/07/lucky/index.html","2b0cf561ad7f8cb45955b4138e386fcd"],["/2021/01/07/spotify/index.html","1b1c8cab17d11dc43835a01f9ab3375e"],["/2021/01/07/thunder/index.html","7e53c6710e5a14d598e9e900fe6a2007"],["/2021/01/08/adguardhome/index.html","bdddf7a69ff7f38bf2276c3a8dfabd20"],["/2021/01/10/IBM/index.html","ca22fa9e44d76d100d22f0d1e30598d9"],["/2021/01/10/potplayer/index.html","5da7bc52bbb190c6344cb25e92e4938b"],["/2021/01/10/sakuraanime/index.html","8ad4386e2dc1abf47d4c43e253a4e92c"],["/2021/01/10/美剧星球/index.html","1998711812a038a73a0c906282ae59ca"],["/2021/01/12/telegraph/index.html","8e0965c777502558217852f7dd744736"],["/2021/01/14/comics/index.html","b4e1207131d430352ee7e6f37780c8b6"],["/2021/01/14/ftp/index.html","18c6cec9cee2969db4387eb60287b472"],["/2021/01/14/oraclecloud/index.html","a85c3cf0f487f69765ed1520f1e1b124"],["/2021/01/14/porkbun/index.html","cb90c9dfffae944b5be93734170a4eb9"],["/2021/01/14/powertoys/index.html","ee4d8c90443763545ce3450a2c593e50"],["/2021/01/14/taptap/index.html","5b12fdec41f75169c8831d82bb0778c1"],["/2021/01/14/ubuntuvsftp/index.html","02fbe8beee4b638b8937a0d9656f2417"],["/2021/01/14/小说/index.html","f06348f21ec5ca638db85443e7de4c13"],["/2021/01/15/freeproxies/index.html","3c90e00704ecc1fce92c037be51c4f33"],["/2021/01/15/incaseformat/index.html","4aedd5581de3de34a78262b0a60ec994"],["/2021/01/16/euserv/index.html","d49e133a29351aa4cf656e4d067c27c9"],["/2021/01/16/winxray/index.html","a48d143f1d6852509e501550fcd1d294"],["/2021/01/18/qqreadhistory/index.html","46075830281ee65f72f78efe363d3411"],["/2021/01/18/qqrevoke/index.html","67b877d225aa055678d24bc337fc223b"],["/2021/01/19/freevpn/index.html","ac913fdbcf68a8cfd26a86701bd46ffb"],["/2021/01/20/browsertrack/index.html","44177eac1f67936f6e30fc2f71e26ea1"],["/2021/01/20/v2ui/index.html","e7be861938d81bbbb925efe250d92d52"],["/2021/01/21/failedtoconnect/index.html","f3a831e6a6671528d4f4c67b76cfafd5"],["/2021/01/21/gitcalendar/index.html","7afb5cca3a9984b821a11b5bed364d0c"],["/2021/01/21/markdownformat/index.html","6c66fcecfd9b4a0d734b76159bcdacaf"],["/2021/01/21/markdowntable/index.html","1065916b4ce3ecd69660af79ed628b46"],["/2021/01/21/vercel/index.html","857498000f120acb2a3227221ed3835e"],["/2021/01/22/hardware/index.html","b09bed15ed00d97eb44cfc663557e153"],["/2021/01/22/muviz/index.html","e8a64bbfd978f44821f0bbd30a9fbb50"],["/2021/01/22/randomapi/index.html","70efff03854476aa3f06c64b25ccabb6"],["/2021/01/22/searchimages/index.html","706134793297644d240ed20df14bc0e2"],["/2021/01/23/RX文件管理器/index.html","0c77d205740b87ee034e610f27122ec2"],["/2021/01/23/chromeflag/index.html","6dfd93a210d18c235a6f06b2d6a14205"],["/2021/01/23/qttabbar/index.html","0a616e6c0de275b23cd1c4cde77687cc"],["/2021/01/24/githubspeedup/index.html","55e61ddd61be908247896e2cc5c7bf2b"],["/2021/01/24/jsdelivr/index.html","798217371e61630b8a784185dcfd8f01"],["/2021/01/25/note/index.html","bd6e63f8a2bc29ea24013f10909ba35f"],["/2021/01/25/soul/index.html","8de2ea9a46fabc6debfff55f61ae68b9"],["/2021/01/26/herokuxray/index.html","3a2ebddd8bc11488dcbfa614a690a720"],["/2021/01/27/proxypool/index.html","23435808444c66a926112ab4b2f8679b"],["/2021/01/27/tracker/index.html","6607962a22c4a66b19a68f208a45730b"],["/2021/01/30/pandownphp/index.html","eba71477b67fc1c04926476546a6baf8"],["/2021/01/31/newgroup/index.html","5e4ff4b6d01d201f84da1193f97a18fd"],["/2021/02/01/clashlanguage/index.html","e72bc9c3b6f09d18c9f08f0b06195e5b"],["/2021/02/01/encrypt/index.html","438de27411f2a0196e95ea30b1dcfc29"],["/2021/02/01/footermotion/index.html","6036d201a1d5dddbd67cfa41065dee2c"],["/2021/02/01/gitter/index.html","926907ea3ddd54c0e6646a5f48e4d4a5"],["/2021/02/01/pixivtop50/index.html","931a172d8c14f5f7c3e5b95b5a226e33"],["/2021/02/01/scrollbar/index.html","699ee9d1196c2f62225b52eff2d5d312"],["/2021/02/02/clover/index.html","5c0fc49b1d8b51d7cb727ceeb4ce2d90"],["/2021/02/02/maya/index.html","ceeb58fc6c5f64f123827533e2cc2f01"],["/2021/02/02/speedcontroller/index.html","2ebe0ec34aea427acbcdbe4d3507b45d"],["/2021/02/02/yesmusicplayer/index.html","8391395ed22f3bf10f75d32777b91e3f"],["/2021/02/03/lenovoonelite/index.html","e541e8e75334c72b780e7a17f4237e71"],["/2021/02/03/skipads/index.html","0ae1e49af866558e15079db891e48a3a"],["/2021/02/04/picseed/index.html","49b6a422992cbf4c817c43a6a7e9f39d"],["/2021/02/04/renren/index.html","8c73bf144478e960186727256e8c7b2f"],["/2021/02/04/serverstress/index.html","600271cf278622bfb331696966878338"],["/2021/02/04/wikipediazh/index.html","bf2f4b0b4350144d68e85ec79d6d089f"],["/2021/02/05/googlevoice/index.html","fe562844a254213774b5d54feb3d814c"],["/2021/02/06/clashconnection/index.html","68af0d2dfc1d739d0f62c52e6dac212f"],["/2021/02/06/gvtransfer/index.html","03b699dae1d49f53a61bdda40150b6e2"],["/2021/02/06/todesk/index.html","737d5217488445c91cd2f3f74c7f1c39"],["/2021/02/06/vpnblacklist/index.html","983645d94c962be09a8d6378754e839d"],["/2021/02/07/mklink/index.html","c47cfdacf4288c427c44101cf462762b"],["/2021/02/07/speedtest/index.html","88998aa0beceff4d0ae602b03a208ba6"],["/2021/02/07/translate/index.html","134b54d7db95533aa306e06b9bd934ed"],["/2021/02/08/ewomail/index.html","3e49ef63a422e8ae75c25a1a19672315"],["/2021/02/10/officee5/index.html","5b65ac19bd5483132e8d34520d44ce05"],["/2021/02/10/raidrive/index.html","b09fa2cbee84d6cb1dabb494ad95baa4"],["/2021/02/13/e5sub/index.html","bbfeaeef01aff5946b07a95bd18fc404"],["/2021/02/14/screen/index.html","90ee4412b66d0570d76def53da684313"],["/2021/02/15/clashtun/index.html","845cd80e71257e4e8cb21b98f01a3c2f"],["/2021/02/15/messageboom/index.html","d674ba4521ce5034ec20ab5b5c62b727"],["/2021/02/15/oneindex/index.html","e3d1ce7009ac6b3c36103be1d724e66f"],["/2021/02/16/govsites/index.html","54f33051e85b11eb304afbf82ed476c0"],["/2021/02/17/hexototypecho/index.html","41fdbd391551d12782da1e30dda0c82c"],["/2021/02/19/fiddler/index.html","c96475e074d038f6e240408da5ae04a7"],["/2021/02/22/potplayerset/index.html","4fb6c6e149fdbe5f4d82d5c7b6c4fa8a"],["/2021/02/22/studyresource/index.html","4e83a3ebf5b5123660ce2502e3e3a542"],["/2021/02/22/telegram/index.html","77806f5afa8817de1dc22cdb74cb54f7"],["/2021/02/22/videos/index.html","b512a69aa3275ebda3286645f4b68ce1"],["/2021/02/24/mtproxy/index.html","d8136a5d3cdded6953b3db41e25c3820"],["/2021/03/10/neteasemusic/index.html","05a20046c19cd402290f7143a58353d5"],["/2021/03/10/surfboard/index.html","3e5ac171ea692104873e4e2ee033c0a3"],["/404.html","8bfc81e83495f088c4e685b218454837"],["/archives/2020/11/index.html","e49672633cc943472bb9de71541adfe4"],["/archives/2020/12/index.html","85080f73b7cbeed6ceebfc6e4c536b7c"],["/archives/2020/12/page/2/index.html","4f239b8f22b17aa92eb0bc644cfe48a4"],["/archives/2020/12/page/3/index.html","1e7cb6302bf406b895686a5b9cd2478d"],["/archives/2020/index.html","8f51d1fcb8e18f5569cea395bc8b37a6"],["/archives/2020/page/2/index.html","54c287b2a787c68fd1f7d1d4552ed26f"],["/archives/2020/page/3/index.html","c3ad29c343a7e7b8c08ed4e9d55724c2"],["/archives/2021/01/index.html","6c5eb22b7d8f466fe6a64a826e7a9c18"],["/archives/2021/01/page/2/index.html","f59b218895be085df9dc76ba32ce3953"],["/archives/2021/01/page/3/index.html","08fc25465fe577b42988f4d64115e639"],["/archives/2021/01/page/4/index.html","fd28c83fed92708c09a9c562b94a00ca"],["/archives/2021/02/index.html","ddf145ea94e9eb7f4dd2e4f0d58f8d57"],["/archives/2021/02/page/2/index.html","fe6fa71ff181843d4388147d403262a9"],["/archives/2021/02/page/3/index.html","33061ec5b49910f56d244d828e23423b"],["/archives/2021/03/index.html","c24c32b8cc4c8a756956111b09643fd7"],["/archives/2021/index.html","8209c22b61ab51d03ef0fa75a72742bf"],["/archives/2021/page/2/index.html","2f0ad553ec2ef1367f71e83a3a0ad93c"],["/archives/2021/page/3/index.html","c8fe1f5fe7dec3fc4d537f0cb89fd261"],["/archives/2021/page/4/index.html","48df5024431d12753ca0f845d2320773"],["/archives/2021/page/5/index.html","46d0577fad080ca8ce916e5c01f7759c"],["/archives/2021/page/6/index.html","5c7237e6fb1d1828b2c0d797ebbe7d34"],["/archives/2021/page/7/index.html","156a4e2f5348b3abeee192ab32ab8c17"],["/archives/index.html","8e91800833899332a9538021d9a6fd74"],["/archives/page/10/index.html","d09d27ea4b11ee9a0124053cb3dbe2e8"],["/archives/page/2/index.html","4148d993e271ab7285d5e578c4914153"],["/archives/page/3/index.html","d7c2a216bb463b01319fd8ee52cd4a78"],["/archives/page/4/index.html","af84f6201139f386969ede281461e696"],["/archives/page/5/index.html","97bece9e5e7f221d6230e7e9973b63cb"],["/archives/page/6/index.html","566ec5e19109783507da042697d28be7"],["/archives/page/7/index.html","81d34b008e363c38df46625b176c1d98"],["/archives/page/8/index.html","2bbfb7bd494d715a775f0af67872b840"],["/archives/page/9/index.html","68dc9d767c762054e411ce3f5f1e1a26"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPN/index.html","18f93fa9fdcb3bdc4ea18f8f8d9b4341"],["/categories/VPS/index.html","58a9eb3ba4054d3d87d9653edd05aa87"],["/categories/index.html","9da90af7eb6127027df47b5ebd0ca252"],["/categories/下载/index.html","56c1604c67649de15b6caed3a4364cee"],["/categories/安全/index.html","2300e6f2959bd16cbab85a11add3ecee"],["/categories/建站/index.html","cb0acd2163b0a3dea76ef7d8a1c4cac1"],["/categories/杂/index.html","7dd173b09046ad5ca2fee5e52c057286"],["/categories/杂/page/2/index.html","bbf26e133b5edbcce3a91e7f1b3e20e3"],["/categories/测评/index.html","694ea60ec4471714c6932fa4b3cfca6e"],["/categories/科学上网/index.html","f3761539dd835568d2bc637e21192af6"],["/categories/科学上网/page/2/index.html","aac5bbccc2261a1b2ba32dd7af3ba961"],["/categories/编程/index.html","4bd44d8552403dd3821b165ba0bf8194"],["/categories/网站/index.html","99408d3c7f0d625a29d2523a383a2747"],["/categories/网站/page/2/index.html","8012b460c12a096b77b39512e481f291"],["/categories/软件/index.html","01e739b5bce458121816c4c456bec494"],["/categories/软件/page/2/index.html","419a8eec6678e71aff7bf13020d4d4b6"],["/categories/软件/page/3/index.html","69b5c96de357d31be1dad6df2814c7e1"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","f9acd7c8c0b4e5799c057107972cd757"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","eb90bb602e74ce0219f57d2035b5accc"],["/ios/index.html","cc947731810911873cb2515d058fa422"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","1215f4469a1e85983d5f57fb7b8b368f"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","6e0b29c27f44f5f44b0ab050ff427b58"],["/page/2/index.html","70da9a061f39c051a5f9ad3e89ddc5b1"],["/page/3/index.html","fb99c32c96c189db860735dd530cd652"],["/page/4/index.html","6f5ae03e2271b30a1506610772fa6400"],["/page/5/index.html","22b97b773822d2c89bd9edee69660078"],["/page/6/index.html","9a46bbe62bde483d989887a25259aa47"],["/page/7/index.html","24276ad2b16988429874ed97c74044ed"],["/page/8/index.html","dd03577f3f635b0b09be02c79b347540"],["/page/9/index.html","e4f0940d86db27b977f11962394ca014"],["/payment/index.html","ca8fc99151c3d5d71d7313f9e676cd8b"],["/privacy-policy/index.html","7d3762dff7a310f994a60e68d4508713"],["/rss2.xml","4329bef6c74f44afce45531816ad6fed"],["/search.xml","21d3b04b463d9eaba57d1293a33f4f5c"],["/sitemap.xml","e84bfa2dc59265d6e4ad3247c1daf698"],["/sw-register.js","7d66120a38cc1d085d1882548ded8314"],["/tags/5t/index.html","dcf65fb4492cd7644431b44004a620dc"],["/tags/Clash/index.html","483ed9b695f0f822410a15f4010f7e92"],["/tags/Clover/index.html","29f650c8fba3480c562654983c00945c"],["/tags/E5/index.html","d7e0b8c6c520048c0cfc2b601795166d"],["/tags/FTP/index.html","fcecae6be238cc50950fb7a334cfeeba"],["/tags/GitHub/index.html","c3b10c299d2d78a51410898618459f3c"],["/tags/Heroku/index.html","f989629ffb5e012c88bf5f25fe5cbb9c"],["/tags/Hexo/index.html","98a0a255fbd279141dbe9be9003a081e"],["/tags/Lenovo/index.html","9b68f338315ffb7b41bbb073a288dd66"],["/tags/Oneindex/index.html","845e43f52e091cea1af94aad2e1c5cd4"],["/tags/QQ/index.html","ea30011ca5c536dcd65a28a07299601d"],["/tags/QTTabbar/index.html","e1f7161263142074cb92c85cb6ddd866"],["/tags/RX文件管理器/index.html","879cee901e7cbe032efddce35237685e"],["/tags/Todesk/index.html","8cb34e0fad5931f31dd5597c657ca7e5"],["/tags/Vercel/index.html","8317435fbb310820f84db23ade7e9960"],["/tags/ads/index.html","2ebd8b12bac23cfcc58b72c857891179"],["/tags/api/index.html","8c67e46671432f42394c8abd7ea4fbd9"],["/tags/app/index.html","3d65a6b18cbd37b75301d85cd808fb32"],["/tags/blacklist/index.html","5848ff060b32756482844917a17242f3"],["/tags/butterfly/index.html","a751afc6eab201f480f0905eae4acd1d"],["/tags/chrome/index.html","5bd2da6c08277dd302ed254dcf256bd4"],["/tags/cloudflare/index.html","9f6de515804f017a0a60ec819fc565b3"],["/tags/cmd/index.html","3827f9a4d00f44fb18804bcba09fe045"],["/tags/c盘/index.html","caa5cd21e82ffb91adbe8d91abd2922e"],["/tags/email/index.html","4950a1604e97a82067b78a94e27d892c"],["/tags/ewomail/index.html","482e989bc07ae9783715ae46382b65f3"],["/tags/fiddler/index.html","70e83326af27248ea6030986073e93d9"],["/tags/flags/index.html","de020737895d2c088a839f91c580bb5e"],["/tags/footer，页脚/index.html","879686b437e66fd3fb47179b5dbfa46a"],["/tags/galgame/index.html","77ada08bf41b69168add38c20fc63012"],["/tags/git/index.html","3d5da8db7611d28b547845fefb2e673d"],["/tags/gitcalendar/index.html","351b1c157927b5e2d953b2cf600294fb"],["/tags/google-voice/index.html","8bc09c07e7256ab109b2cd19e10ed602"],["/tags/gv/index.html","0aacacb2d618f9482f4ef7896f582e80"],["/tags/index-1.html","9ebd8287615a53cfd09594acf8c7aa14"],["/tags/index.html","41e8ebe6fe3970affc882f587d6b7af3"],["/tags/jsdelivr/index.html","a980269aad7f459e62c1b2040fdbb39c"],["/tags/linux/index.html","e5917e44b698dfcc130e52d8d4fb4d04"],["/tags/madVR/index.html","2c3f553929cc02b01df3b831ae2a40d9"],["/tags/markdown/index.html","cc203204a17c393ed87a1f79c3bccf72"],["/tags/maya/index.html","9e144da87934d3eece99247cebf636c4"],["/tags/mklink/index.html","83d1e7e02812d78a0efae8ecb13f90ce"],["/tags/office-e5/index.html","044fe6d9508843ff308aee842f380d49"],["/tags/onedrive/index.html","057a527134778224a6f738314894e5e5"],["/tags/picGO/index.html","bb13b063c33c3618b4a752592607ffb2"],["/tags/pixiv/index.html","9814b6da5ab61dce08fcc099f90d9681"],["/tags/potplayer/index.html","f81132aee5d081d105b7936bca91df7d"],["/tags/proxypool/index.html","8c81add923db100eccda7a12c847e4a5"],["/tags/qbitorrent/index.html","44c499cde994fe63c44689493d5a5063"],["/tags/raidrive/index.html","7f8a18c02fb269268b38bd5d6763a97c"],["/tags/screen/index.html","db07fa2eac5aa5e6a9312f6c929e8901"],["/tags/speedtest/index.html","1be735f47556a17ecd8bf25e2f789035"],["/tags/surfboard/index.html","8bf21c88436127ca8bb3c68da30ab06d"],["/tags/tap/index.html","7debbcb038f5c151f2f523184eedf93f"],["/tags/telegram/index.html","fc2df0e415502214ca48ff103ce63abb"],["/tags/telegram代理/index.html","59a4768d95c0fa490eb7faaa409413d4"],["/tags/tg/index.html","5bb7c185a14f41fb49e1ba815a1903d9"],["/tags/tg代理/index.html","171ef03bf96c1ccff8e171faf25ef4a6"],["/tags/top50/index.html","c186b2abebc20b1fced93089d083cbf3"],["/tags/tracker/index.html","d2d0b563f3d697953dc7809d05fb1d71"],["/tags/translate/index.html","238a8dc95098c014438d90fdb1bdf3aa"],["/tags/translater/index.html","0392bbaf0a1391ff9b5203f817f2beff"],["/tags/tun/index.html","ae1a1cd691747d2d74947cb6f6d62b9b"],["/tags/typecho/index.html","4955a789a31d99ff0613c47fdf435876"],["/tags/v2ray/index.html","49ace3f245fdfe6fb39d47317c2a628c"],["/tags/vpn/index.html","5a4b306a1002877a422a4653036716c6"],["/tags/vps/index.html","2e162ce3929960d7cb256a73f387e79d"],["/tags/windows/index.html","bf7d608383533f2bd48adf18ab266646"],["/tags/windows端/index.html","4af850f0e18f7d4d5eb11a61870d026b"],["/tags/xray/index.html","9af9062158c7fb1869e54c53b3520475"],["/tags/下载/index.html","f677ec97df3816d26e3cf9863b76cf01"],["/tags/不限速/index.html","77f740e9980fdf44cb604fa0dab955dc"],["/tags/个人网盘/index.html","a8fd32e01714e196659d98797cb424c1"],["/tags/主题/index.html","403c2819eb43933cbbb1cd307f40001d"],["/tags/云便签/index.html","5397f559ee07d76c9be91dbe3170b807"],["/tags/云盘/index.html","4aa037c7d034463fea89548e71b1b878"],["/tags/人人/index.html","1ee799c2e1512cacca522a97784be062"],["/tags/代理/index.html","c7cf377c221123a15f47b731b3ac7118"],["/tags/代码/index.html","9cb03850416677a2615191bf243ed5ae"],["/tags/优选IP/index.html","f3a961e58583eb7cd279ca75bf0579fb"],["/tags/便签/index.html","39b709a51385438d2635920c2865429e"],["/tags/保号/index.html","42d3a52df93fad099637e0c8850e58ac"],["/tags/免费/index.html","77c1cef466f570c676e19034f6c34d15"],["/tags/免费节点/index.html","2f973d92bde3d6ae5053d7e16e9d5be3"],["/tags/加密/index.html","94090c9822a7e5408df4c52bc276de95"],["/tags/动画/index.html","f72f03eba9e91b1abf18fa6d7ca5d37f"],["/tags/博客/index.html","effe2e1918008086e8d2b6f2c369feb0"],["/tags/历史记录/index.html","ad68352aab77fc314018fd0796f42736"],["/tags/压力/index.html","3d993893c5bf0cbcfe53c9421e42a6ec"],["/tags/压缩包/index.html","2ad5f24bf2da4ec1a5dd891a91a6f573"],["/tags/反代/index.html","cc1b3fbd5f8485a73d46eab8998d63e8"],["/tags/可视化/index.html","66f2e35e0295cdd9d7e3250a55dc1f06"],["/tags/命令/index.html","0ac4c7328b2cc9283577f1d1960babbb"],["/tags/国家/index.html","dbea076fd56040c17a15b4f716d8be28"],["/tags/图床/index.html","d0b2c7dc9dea09793874a807e4cda376"],["/tags/图片/index.html","a5430a9278dde6d791e0c9a93653503a"],["/tags/域名/index.html","0d4c84b140c3da56fb7a3c6cc4b40d39"],["/tags/多标签/index.html","1d575b79e7d40314092d50d36787c30d"],["/tags/存储/index.html","6467d74278ce663fd32e57a604f80756"],["/tags/学习/index.html","da75959b1686dc842b4b46cd8747e74c"],["/tags/安全/index.html","bf9320b9cb54024497a6be7e2fde4c2b"],["/tags/安卓/index.html","ddf27db03d7be40e24bae8d76322719f"],["/tags/宝塔/index.html","558c4c26d6edf25a28e7d41f1e69aa1e"],["/tags/广告/index.html","8bafe925267ecd07789e6e7044df2eed"],["/tags/建站/index.html","352fcf7bcbb1ac8a5193489f8d47aa1e"],["/tags/影视/index.html","dbceab6e7bb549703a349976469c6b5d"],["/tags/快速启动/index.html","c3820667c09656df4d3df2053fb3455a"],["/tags/手机/index.html","0569e85bb759469ecf7e90810cdee6d8"],["/tags/托管/index.html","32ec2dcdefbafd50eb1a7e833d6a7089"],["/tags/抓包/index.html","52e69e556bb0f13eb702ac5159433ddd"],["/tags/抓取/index.html","0d9231228583df4f7dff8164ff962d92"],["/tags/投屏/index.html","4915150946d6be042d89954e3002beff"],["/tags/拓展功能/index.html","079d6b3e783d7177c4121dcdd389bc24"],["/tags/挂载/index.html","8edcf907a698bc3b6dfe2ca4cf7ea0d7"],["/tags/指纹/index.html","b85b2edfa15a1a5bc599e3d74b1057df"],["/tags/接口/index.html","fe4f30abcb093354b97471512f5891c6"],["/tags/提取图片/index.html","18fb7ee1ad989084fece9999f8aa069b"],["/tags/插件/index.html","117a99bd9e089a830eead2bdec08dea3"],["/tags/搜图/index.html","71cfc2a9769a483e4f0aa8e51a6c63df"],["/tags/搭建/index.html","f1cfd05bd0b3b193978cebd9954d6ff5"],["/tags/撤回/index.html","f8e8190b9367ab6595530117a1d1be2b"],["/tags/播放器/index.html","570d7244f22cd0f79404c730e2918d07"],["/tags/政府网站/index.html","417059bd3bb0fafabacb1401baa33064"],["/tags/效率/index.html","6a1d7feb70afa799c49620a8eb9660a3"],["/tags/日历/index.html","0f29c0031a13bb72146330ceb4540520"],["/tags/服务器/index.html","447c7d3116abdde5b0ac86982963e733"],["/tags/桌面/index.html","800f47e0d75a390320a8967840914f07"],["/tags/梯子/index.html","110a9a85a577fb9913d07676ee01918a"],["/tags/检测工具/index.html","ef497ad34ea436381e19446a8d8dedfb"],["/tags/汉化/index.html","59d2e2ded3a44835c25772d145705c00"],["/tags/测压/index.html","b2fcd300b09a56bbe9fac2d12557eb0b"],["/tags/测速/index.html","09a70b755f44f169889de87421cc5e8b"],["/tags/浏览器/index.html","096a09d949d6906732e6d93dcff49a86"],["/tags/清理/index.html","b8de1e8f942205397e6888e21052d856"],["/tags/滚动条/index.html","c9119f55f3a2f205bf6666b86e04f9b6"],["/tags/灰色歌曲/index.html","2a41f867c4bb222269c19dcd4046baff"],["/tags/电影/index.html","7ed630ef5331a3985b1d204cdebba2f1"],["/tags/电视剧/index.html","d43d58c9c494581021e5ca9a2442423d"],["/tags/白嫖/index.html","ced965218628a7a781db198c96467918"],["/tags/百度/index.html","2ae05f1a9057cfeab56e30b26ef52ece"],["/tags/百度云盘/index.html","300175fcfaadcd759b70250b91f9ce38"],["/tags/百科/index.html","35f19d7f911199b646da8aeaa674044f"],["/tags/短信/index.html","f006185b148270d7c4f6c9f21e518de5"],["/tags/硬件/index.html","93a80c7656b21b605dd6a0ce9c013d93"],["/tags/科学上网/index.html","2ad2a6f8cea4d8fd4db34e9a0a7f183a"],["/tags/空间/index.html","e6a69a8c11c36de664363f0b5ac80fa1"],["/tags/笔记/index.html","4a8979d6080eee8ee1ef049d7b7910dd"],["/tags/简洁/index.html","c3ae8caeae18c81108dd62500b6aeab3"],["/tags/简约/index.html","360ade0955094ceeef8b79a29fe57263"],["/tags/维基/index.html","d1a5ec1cdb0dc4bcf369ebec1470af7f"],["/tags/网易云/index.html","e7ad1623140165ae45996faa485ec317"],["/tags/网盘/index.html","036ded47d46f97d6dea5a2179bce047c"],["/tags/网站/index.html","980cb1447b5986d9c981ac0fe43d19fa"],["/tags/网络/index.html","710d30b543c0cc20baefabfcb8425931"],["/tags/美化/index.html","eaf13f1c172c12bca90873533c1163af"],["/tags/翻墙/index.html","d53af90546ae27e0808cbbbe7b1e917b"],["/tags/翻译/index.html","6654933edd62ac2c6865d0f2cd66002d"],["/tags/翻译器/index.html","cbced3a6be99b63f8a83a6e2cdba0f4b"],["/tags/聊天/index.html","83ce57cd8c05a472b117056a7da5e5d7"],["/tags/聊天室/index.html","fb0fd00c4a8f3792b1ac30e9c6aeb370"],["/tags/联想/index.html","cc03cd1196eddf8e19bffd2401094340"],["/tags/节点/index.html","d5bd32178c33468bdd49e029ec6895d2"],["/tags/虚拟手机号/index.html","53a70a5e6338840b09da62d9b995c027"],["/tags/补丁/index.html","a3151c688f1acdad0f3e7695b483b8b7"],["/tags/视频/index.html","6cffa11fee0bdb142caa98bf5ecfe2ca"],["/tags/解析/index.html","9bc0b01dc284e642594d0c05c7335d29"],["/tags/订阅链接/index.html","f55b562b0e53d71ef7c5d1eb4d6aae84"],["/tags/记录/index.html","81df3018ebe65ca67f64fd04dd7ca022"],["/tags/识图/index.html","5e0d0face7f301f48c2fdd2b85e2a892"],["/tags/语言/index.html","c285bc097d94dc452da1de7b333fe4bb"],["/tags/资源/index.html","bcdc3c2242342e196cb8b3110a417728"],["/tags/资源管理器/index.html","b8abe05b1ac152375c09503b94c95c88"],["/tags/转移/index.html","c24a8e15ce6c182638c9452d8294232c"],["/tags/软件/index.html","02296f32f89a970ad021efe44c15be60"],["/tags/轰炸/index.html","46c8a163e7e0b74d8d3dbb95098b07e9"],["/tags/迁移/index.html","b0a85c363f3f5f05cbee83f3bcd583e5"],["/tags/远程控制/index.html","3c998b259e0bde711322852171ed0f1e"],["/tags/连接/index.html","8bef408afd946007a486c6494c35b613"],["/tags/追踪/index.html","172da86cb553f8c28039f3d803861961"],["/tags/速度/index.html","92135e4f3096880f085d5a6a4f5cf9d9"],["/tags/邮箱/index.html","e7e19c1fba3c583aed61bec18ff76f78"],["/tags/酷炫/index.html","d726fcb08c1b4c3adf1df86ab4e35f4a"],["/tags/钓鱼/index.html","d0f202bb15d566ef1a73f28082fd9a98"],["/tags/镜像/index.html","b32cede6001e02af65fb5e343ee2e964"],["/tags/随机/index.html","7776387e8f8b913b09126020b7a744e1"],["/tags/隐藏/index.html","814d6273c7cd0d3b6a27c538ee9bbbbb"],["/tags/面板/index.html","224008178b220adad5099d34334f34a9"],["/tags/音乐/index.html","0949029bb18841dbd3a0e9ae90b22f68"],["/tags/高颜值/index.html","7ff4d226f4c6f3af1f6b429474909351"],["/tags/魔改/index.html","3e39e7f3da45005377df3e14a01b88ba"],["/tags/黑名单/index.html","bcf07b422e0c93b7e98b85bcaac17eed"],["/urls/index.html","84c218e59a0015fde2f25e9f4eb91dc1"],["/vps/index.html","868357dbe5b02a555f6247c02aefd722"],["/支持/index.html","dd05ff0d9b85fb78fa2784d155080323"]];
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
