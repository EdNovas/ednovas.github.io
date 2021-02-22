/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","7248e72a26ea6a1923fb1155689a6593"],["/2020/11/29/clash-windows/index.html","b5fbde49d3429434664a99402e7db113"],["/2020/11/30/websites2/index.html","c7fb7f12a6b33e258955aa1d9d6d4555"],["/2020/12/04/iphone4s/index.html","291c153e9266011fae6aa0246fd68bc5"],["/2020/12/04/onenote/index.html","307ec1e55332fb751c14fa0920e3fb40"],["/2020/12/04/wesites1/index.html","432f6a0f0929f443d2a1be52139be270"],["/2020/12/06/nokia808/index.html","fb3608a43e9ba22eb0505fa22561276d"],["/2020/12/07/ipad1/index.html","46f5c64a012145be33c119f58d826f71"],["/2020/12/18/freesubscribes/index.html","dadffed629b70bd8ca6a0378a5a1870b"],["/2020/12/19/musics/index.html","00d0d0923caf60ca247dddba27a786c9"],["/2020/12/19/shadowrocket/index.html","40ee61d180ed9287188956d209a45a7e"],["/2020/12/19/v2ray-windows/index.html","01c0686be2490f1b3e38ec378f34a914"],["/2020/12/19/v2rayng/index.html","6e0feec5f23ae478fc6cc0350e12f684"],["/2020/12/20/beoplay/index.html","07051376df768e6e304a34fdfa114b62"],["/2020/12/20/订阅链接转换/index.html","9a89c72ee52119558df038839a8360dd"],["/2020/12/21/chrome浏览器下载提速/index.html","142cf3a63c7260e81e8b46ed79d8bba1"],["/2020/12/21/免费128线程并发下载xdown/index.html","c25b0932f4709913091967da45ee414c"],["/2020/12/21/免费32线程下载软件ndm/index.html","52eaeda9cd3ac1f0c2824eec32ed0d9f"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","891065849a0d8ab904a47d69fdd4c61d"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","fd41003836c3f909a8c63303258a3c42"],["/2020/12/21/广告怎么知道我在想什么/index.html","5e1523de60f1b925056cbc85423947f5"],["/2020/12/21/无名·引子（小说试写）/index.html","38b7fab9d92f692ad3d396a4d197ce49"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","c1260ec9311776f252fb02740c56d65e"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","d03a9cb60e54a74d1834d00dfdcdc098"],["/2020/12/21/高速轻量下载器aria2/index.html","806bccae4c457e30f3347919021d4ed6"],["/2020/12/22/2020-cee-roo/index.html","c1a10bc36a8d843ed6fff5599e92085f"],["/2020/12/22/firefox插件、github、steam富强/index.html","4fa77ca83d636536b3b44f390199e85a"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","9a57bf3403cd7cb9400d95999e7617ae"],["/2020/12/26/python-day-1/index.html","6ff8a262c9f6a677d009ccc5be035430"],["/2020/12/26/python-day-2/index.html","c54ed068d3ef44721539d04ba687b46f"],["/2020/12/26/度盘不限速下载方式一赏/index.html","f9ed8b7ec9402e2ebd917fb74c2611e6"],["/2020/12/26/添加开机自启软件/index.html","c231259ba1fce3012f21fe1407c82bdc"],["/2020/12/26/电脑端截图方式一赏/index.html","83cf1c4ed28a4cde1772627dd49d57c9"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","df8f2ba8aa46b039e12f7d332fc3728e"],["/2020/12/27/最安全的浏览器tor/index.html","e9dd3791685ba5d9f16b4c4db79de184"],["/2020/12/27/网易云刷等级和听歌数量/index.html","6ff92cdd0fb88068c7bb8d2dcca03bd5"],["/2020/12/28/freenom申请免费域名/index.html","ab806cd1ccd3c5a4ac256a9a04d5eea7"],["/2020/12/31/机场/index.html","b327b6fe97235fb671ff21bf9fb1b5fe"],["/2021/01/01/M1/index.html","f543cb6aa31daf40fbf52fa5f0a37679"],["/2021/01/01/compress/index.html","bdecbf6a730fa8fb738687c9cf35da94"],["/2021/01/01/infinityfree/index.html","52f2d747739c3622082a3d1b3d7ac4b4"],["/2021/01/01/硬核翻墙/index.html","94b458cab47140db4de6c0f63fae2c28"],["/2021/01/02/qq/index.html","0ca73dabc1ccbad3c0dd4c719f1629e3"],["/2021/01/03/netch/index.html","c4f4054dd70c2e2f4a9a7b1ba8f26e13"],["/2021/01/03/waifu2x/index.html","bd7cbeaddef3f10a09d7dabc895c2d58"],["/2021/01/04/ads/index.html","b71d1a9a24f77179b49fa68a65209d50"],["/2021/01/04/games/index.html","ff0654c159c07c6f844e9ac9c73fe172"],["/2021/01/04/heroku/index.html","468f125187eaf074a29804d9757333bf"],["/2021/01/06/movies/index.html","32d387390b31a1bc40f340a8ec07a2bf"],["/2021/01/07/google2020/index.html","0039d3bee0584602d7ac57f2ea7ce1f7"],["/2021/01/07/lucky/index.html","a5f5c5390f8a55edd588638f71eef282"],["/2021/01/07/spotify/index.html","cb07d0323ef12ce99fc35f96aa20e85c"],["/2021/01/07/thunder/index.html","c5b2d39c60459c7727785828370f8ff6"],["/2021/01/08/adguardhome/index.html","0b4936b3b684bf6246a0ef93ab9dcef6"],["/2021/01/10/IBM/index.html","f9d31b8afa4f4f3b7ac560b46ce9da76"],["/2021/01/10/potplayer/index.html","672154af9ba5d6a7e29aa491183597fe"],["/2021/01/10/sakuraanime/index.html","93c6b0669387c037f367dd24c6a819f5"],["/2021/01/10/美剧星球/index.html","7add0647736c44fb6645b5932030979b"],["/2021/01/12/telegraph/index.html","bf5e2b4e1f1e0ca1cb00dc0df6375ac7"],["/2021/01/14/comics/index.html","e0a821aaa3587d00c911369520da0faf"],["/2021/01/14/ftp/index.html","67c9756580694f9458947432b262cca8"],["/2021/01/14/oraclecloud/index.html","b948fba75e499355501cc48a23991808"],["/2021/01/14/porkbun/index.html","04c89e8b44bc920a832fd387eed96716"],["/2021/01/14/powertoys/index.html","abf963b6399f2220bbda886a1a8e6fd5"],["/2021/01/14/taptap/index.html","d84977f1bff299d0caae295ceceeaaea"],["/2021/01/14/ubuntuvsftp/index.html","e7a2e8be1ea594b76e16120245c5eea9"],["/2021/01/14/小说/index.html","5b6cf966f3178801448f617b8a95f7a5"],["/2021/01/15/freeproxies/index.html","272e29397a9f066b48f6c1fe81e9d553"],["/2021/01/15/incaseformat/index.html","2b7e95dada1d2d937b8f6f5826b92bed"],["/2021/01/16/euserv/index.html","854c6ab6e5cb69117e7f1f8b6a7339bf"],["/2021/01/16/winxray/index.html","ad9ef29026a9afe20a4fc271d5d7108f"],["/2021/01/18/qqreadhistory/index.html","fcd424afd0005c7cb072b18212815044"],["/2021/01/18/qqrevoke/index.html","87aa9d1ceb72f92a330507979a2ca1be"],["/2021/01/19/freevpn/index.html","ae64666a7c2d6f7d8e2dbfa23edd28e3"],["/2021/01/20/browsertrack/index.html","e8ce4b11c3c20bc512bfa71197d6f313"],["/2021/01/20/v2ui/index.html","a94b5f85b82105541084832d5e4b037e"],["/2021/01/21/failedtoconnect/index.html","7ced17b7d81b7ab4ac5628bb60e505d7"],["/2021/01/21/gitcalendar/index.html","e7f84ea760fa6645e45d22d0f6e728e2"],["/2021/01/21/markdownformat/index.html","3fb83182ca6742ef237dfe577d42b555"],["/2021/01/21/markdowntable/index.html","b89411c2192a5458169d77d2bed2769e"],["/2021/01/21/vercel/index.html","d5af8af8546bfc5cac8a0e8241e0fec2"],["/2021/01/22/hardware/index.html","b09c81474e0af6467c5547f827b045c4"],["/2021/01/22/muviz/index.html","eb902e3997339072307307f895775db6"],["/2021/01/22/randomapi/index.html","d040f4786eaec0f2c55237f75f1bfbf6"],["/2021/01/22/searchimages/index.html","5ef6db4e7ae443321b6192c9bff281d7"],["/2021/01/23/RX文件管理器/index.html","1d7af41b853e13ae7d19cafecc2793c6"],["/2021/01/23/chromeflag/index.html","bbe0d2ee3b5fb8ca71b8df067915b2c8"],["/2021/01/23/qttabbar/index.html","691fbf24945c2e353847602fb6d30848"],["/2021/01/24/githubspeedup/index.html","516d236ac46c384bdf396976a23de4f2"],["/2021/01/24/jsdelivr/index.html","ff638c88b89b5b67e060bdb33cbb545f"],["/2021/01/25/note/index.html","245fcc62ba1af08f40738b9bc871386c"],["/2021/01/25/soul/index.html","e29a79849a100e98fbb07db1681b5499"],["/2021/01/26/herokuxray/index.html","a19263bcbbb747d85348aba698cad703"],["/2021/01/27/proxypool/index.html","e41a69c7e88d1549bd2e44956a7238cf"],["/2021/01/27/tracker/index.html","78c2d7b1696f7d2da2ae22379c9c2676"],["/2021/01/30/pandownphp/index.html","100c9dc0933947fab411f3dd86fc3781"],["/2021/01/31/newgroup/index.html","ff29f3041cc16638e44aad9a1e41ccbf"],["/2021/02/01/clashlanguage/index.html","485cf2c0b1a96794bcf446da39aeeb7e"],["/2021/02/01/encrypt/index.html","78fdc469fc3281a58791d06e0f10cc65"],["/2021/02/01/footermotion/index.html","9629b7528f918916e4e7269a37fd7788"],["/2021/02/01/gitter/index.html","8a8674166a32c0324ab2750947160c92"],["/2021/02/01/pixivtop50/index.html","b748b28bd87fe44e12d65042a5b8f1e0"],["/2021/02/01/scrollbar/index.html","209aaa4210cadd7ed9fbddfe4a9cc924"],["/2021/02/02/clover/index.html","8922ab6fc7228a3982b321c63fd7c66b"],["/2021/02/02/maya/index.html","91a5f21f75c998b7c5c59194ff146a33"],["/2021/02/02/speedcontroller/index.html","8cb62c13d6e4055b7cbf4618f8179df9"],["/2021/02/02/yesmusicplayer/index.html","7e822b73db49762fe31049e21b104616"],["/2021/02/03/lenovoonelite/index.html","0f0e10dccb675cdc02d35296348ce850"],["/2021/02/03/skipads/index.html","5af51abb5e86c9c382895bfa0bbebcc9"],["/2021/02/04/picseed/index.html","379deffda1b231d33c4ff11b197a842f"],["/2021/02/04/renren/index.html","c19ba39ee300b90d8ddd8c445f09170c"],["/2021/02/04/serverstress/index.html","f0471db8ccc11b2c6f3fb9ee3602f753"],["/2021/02/04/wikipediazh/index.html","ec97f744e59887236b608871e313e786"],["/2021/02/05/googlevoice/index.html","0087afe114bf5805edc7c29434e39552"],["/2021/02/06/clashconnection/index.html","88992dabfb3593d5b37dc43aefc09bd2"],["/2021/02/06/gvtransfer/index.html","b1ba87a479cf0f0121ad67fc5df0841e"],["/2021/02/06/todesk/index.html","ec9b4ef6ee7b2aeae83a2ef62281ceda"],["/2021/02/06/vpnblacklist/index.html","887f18ddae376e6af3f499e829154a84"],["/2021/02/07/mklink/index.html","fbd41575db5a28e8bc5cde63622003b7"],["/2021/02/07/speedtest/index.html","cfd1e93f3509f4732c1717c0f57afdde"],["/2021/02/07/translate/index.html","0c5178af796ed78f01040c6b521f93c3"],["/2021/02/08/ewomail/index.html","bdbf24d1b40a0e0d664fbbfd1054d143"],["/2021/02/10/officee5/index.html","eb4c940bb93e12d27341f2a048e4edba"],["/2021/02/10/raidrive/index.html","7f3554928b5e0eb708a0350b66dd25d3"],["/2021/02/13/e5sub/index.html","b58dd6e017faac35f96b3f69f255e502"],["/2021/02/14/screen/index.html","a0e186cdd9c6ae1844dcc1eb4795ebac"],["/2021/02/15/clashtun/index.html","f59895096232dc0f540457b431d913e9"],["/2021/02/15/messageboom/index.html","7533b63fff5d0fe5824de462970c8d1a"],["/2021/02/15/oneindex/index.html","89ad44b20429e3b85fed2e6d890f259b"],["/2021/02/16/govsites/index.html","3f265f7d48a873974dad54a50ed140d4"],["/2021/02/17/hexototypecho/index.html","937bb29eb59f56e25e45c0cd981e32d1"],["/2021/02/19/fiddler/index.html","41ead665020e96f26ee68bcafd56a61a"],["/2021/02/22/potplayerset/index.html","54d5e80311f0cb6573671312057daf51"],["/2021/02/22/studyresource/index.html","ff7090303ebe189239fa0c7e5070c79f"],["/2021/02/22/videos/index.html","15fef46f045cab1c236657c74649628f"],["/404.html","22e314fe265f641bc3ce715dd4fc5038"],["/archives/2020/11/index.html","106d846c0a20c89436c68d52dbd2d0de"],["/archives/2020/12/index.html","14c5e01a1acfe1dab18fc9be36eb49d4"],["/archives/2020/12/page/2/index.html","ea794a21d3432eb3de6da54ed4a43d2a"],["/archives/2020/12/page/3/index.html","b18172e42576d15c68f6f055b7ec9f89"],["/archives/2020/index.html","129446cb11ccb6d7d5ce893eaae8e2c5"],["/archives/2020/page/2/index.html","95770c95cd1b6c7ceff48e05162b9a58"],["/archives/2020/page/3/index.html","f35c55426443bbf90926f50594060f12"],["/archives/2021/01/index.html","e8b1289eee8176459f08215f8613bee7"],["/archives/2021/01/page/2/index.html","ef02eb9b9a16a66e97494f1df541e0d2"],["/archives/2021/01/page/3/index.html","85d700c6e191de406eb5b07448fcc1c3"],["/archives/2021/01/page/4/index.html","54beb7093397b9161671965ae60e6f73"],["/archives/2021/02/index.html","40f88132751204d9c52493546334f963"],["/archives/2021/02/page/2/index.html","bc7a548c2234fbcf7d8a23d3938bd005"],["/archives/2021/02/page/3/index.html","dfbf22a6483383952912309fa03b5807"],["/archives/2021/index.html","3d990425191bd4847cfe3e2cf8e8451f"],["/archives/2021/page/2/index.html","eafb75eb58d0bb1e252a261d6e9d2fe3"],["/archives/2021/page/3/index.html","716a6712abb75e3f00fb137e0a44e769"],["/archives/2021/page/4/index.html","15d406573797a0abaa3068dbc71cb801"],["/archives/2021/page/5/index.html","575359f9168d55d4da9a4cfc4b23a7c9"],["/archives/2021/page/6/index.html","54b43c35bc95c86c38d6577b4d7675dd"],["/archives/2021/page/7/index.html","b998129391b5cd3da09cc28668498206"],["/archives/index.html","4f64e9e059e80683d818bc177bdcba09"],["/archives/page/2/index.html","adf3eac9bfd025e3b6df67714d6639a9"],["/archives/page/3/index.html","7c6716df00833875b07f835f23b7df03"],["/archives/page/4/index.html","4483d56f1bb0ad688a46ed3b7b868b0f"],["/archives/page/5/index.html","f10151972a04eb90814993e6d0c49f73"],["/archives/page/6/index.html","14f462d69ed4a11f08a1531d518f32bc"],["/archives/page/7/index.html","676a9e47eee28fca495e06c760bb3856"],["/archives/page/8/index.html","a5d648c6f8659693ea22f2f4003ca67c"],["/archives/page/9/index.html","1b47727e84ef5d2a8bea082261af85ac"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","1809ab3eec37a826ed5fb2f5ac34bce7"],["/categories/index.html","170e7b682d2f25c1ec86cf7af6b4ed39"],["/categories/下载/index.html","d866a992d1bab9adb050fb5faafdcd76"],["/categories/安全/index.html","eee5214880921e606f58f429d698c6e8"],["/categories/建站/index.html","f2170bcde000d9f2a6b93385bcb113ba"],["/categories/杂/index.html","513739f98342456492fa745da02d99ad"],["/categories/杂/page/2/index.html","7dad7d641e75e0f7d13c87668a6aa261"],["/categories/测评/index.html","f9e7691714be93dfbacbeb6eedfd776a"],["/categories/科学上网/index.html","b5cb2136af12cfbd070d405a4e009c6b"],["/categories/科学上网/page/2/index.html","cd825356117ade1d13d3d09ac33f4621"],["/categories/编程/index.html","b9b0ad8838a085c214808fef8f465215"],["/categories/网站/index.html","d803f5ec74009617a92d991b2fa6d7db"],["/categories/网站/page/2/index.html","50c1e9d41c30fdfede3a755533855556"],["/categories/软件/index.html","d495c41f3ef071b56b74af87ecfd566d"],["/categories/软件/page/2/index.html","a148d74277bbdd24e7d97c5bf0dbf3cc"],["/categories/软件/page/3/index.html","9351937769dd96f3225a0c551da1b5f2"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","da044a7ef328fd695486e6e4ec6760d1"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","7a15041899bddf06cc7ba6331c0fe674"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","1875fd84f9b0c49aac206bb8d997ac38"],["/ios/index.html","c28b98bc49e57de5f7b41b51db55d66b"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/2/index.html","798dc4189ab9ee02181d3932e77a220a"],["/page/3/index.html","6e331dc4bc3fc128a32847fc09076903"],["/page/4/index.html","1bbbff9816cd3b574c873769aa5808ca"],["/page/5/index.html","f1074c81fc953a85c8351c96fdc3547a"],["/page/6/index.html","f6ca936743b16c88f1d6a444e32c1499"],["/page/7/index.html","3305c6cce41c05c8e504e09593007ec9"],["/page/8/index.html","141ae1bba331a44642c1facc0a5ecb11"],["/page/9/index.html","614f5338755938692d042a24c2f23c7c"],["/payment/index.html","0506cdc056b8953803d8f08123fcc03a"],["/privacy-policy/index.html","a0b52e4aac45b56bd1c5e55ec1c8e5c4"],["/rss2.xml","ce677e698a5bf0cef67d03cae9dac8c0"],["/search.xml","05a6f6545a06e8da49fcd199fcd5bef8"],["/sitemap.xml","f40616619e9cfa331878b6cc76cdb178"],["/sw-register.js","5597aede23dc002802ba23f87af9a557"],["/tags/5t/index.html","ba3f931bb1fdb405f6f6ae4c736a94cc"],["/tags/Clover/index.html","c455fa3604c755b164d14548337a73b5"],["/tags/E5/index.html","ed2bc0948b1afa5e3e560e52f5d7c973"],["/tags/FTP/index.html","ad6d5ae389cc9ddfa9e6465d18d0e369"],["/tags/GitHub/index.html","2acdca9cf029f951df012e6b3fc5e162"],["/tags/Heroku/index.html","8673786d2e0d368936c88df6541cd528"],["/tags/Hexo/index.html","09f87a3bdf41c0dba67b66c8dad9e86c"],["/tags/Lenovo/index.html","4f5599a033fd4c11003992265e377452"],["/tags/Oneindex/index.html","fca778d4524b75f87184eac966c16c3c"],["/tags/QQ/index.html","4e3979f552b0c44aff6b6386c8c5a4e5"],["/tags/QTTabbar/index.html","cfdeea30f6232d52e807270ba3b81138"],["/tags/RX文件管理器/index.html","e1c09d1ab2296dbb3e4391c16d3e23d9"],["/tags/Todesk/index.html","bdee50e95c55d683a78bb50bffecba49"],["/tags/Vercel/index.html","12a40c416004ce95dfa1cfaee6980ee4"],["/tags/ads/index.html","2ccd1df5199b3b5f05f0c67d0017def9"],["/tags/api/index.html","7c8beef2896a5178e2559b2fb8ed5a4d"],["/tags/app/index.html","3dcc50e33d370b521a0e211ee1fbef1b"],["/tags/blacklist/index.html","dedffc5eff4432f12ba5a0160fa6fab7"],["/tags/butterfly/index.html","99f9ae6b9a7b17f96e5221e6f0f25094"],["/tags/chrome/index.html","755fd14be43c7e217eb38682e616e7af"],["/tags/clash/index.html","7e34eb978ff782b7f271b87f87351cc3"],["/tags/cloudflare/index.html","da316837f593b47753e720fb60293b4b"],["/tags/cmd/index.html","7f9aefbb2ba94c2f65c863ce06d4eaf1"],["/tags/c盘/index.html","ea4c8ebfcedbad42c05cf74d148e7fc3"],["/tags/email/index.html","02b0da96f737acaa9b55e10bddfeaa6a"],["/tags/ewomail/index.html","5e6148273258a4021e0635672c576477"],["/tags/fiddler/index.html","75d30afac8b4ec8a7225419e3baedc4d"],["/tags/flags/index.html","80743568c3e25d2fe22a5ad5085db4d5"],["/tags/footer，页脚/index.html","b4325ab3bf82d7b4254a478b86b45b87"],["/tags/galgame/index.html","d3cf6c3e8cc1ecc471b87623c8fd10b7"],["/tags/git/index.html","de575c881d5268de62f99654253fe6c9"],["/tags/gitcalendar/index.html","a40463c3514f0836045c827fc79d0de0"],["/tags/google-voice/index.html","1cb6f8d99bc1256ad5be016b620ab5fc"],["/tags/gv/index.html","bce4cce685a0d4b4d62cff2c5a5b1d27"],["/tags/index-1.html","711ff3a1b090412c6aa6723d50bd440b"],["/tags/index.html","2bdf12a36680801f815ce7d02274442e"],["/tags/jsdelivr/index.html","9fa41049da3553bb36dc9f2f2e93ce8b"],["/tags/linux/index.html","2772424997885ae5f67197d5aaf299f0"],["/tags/madVR/index.html","a419bc32e2048c4a7bbcd19fe53ba276"],["/tags/markdown/index.html","316cf09e2c5bacb5f6828844d16b0a38"],["/tags/maya/index.html","7bec24dca40016324fd9f6fb2851ff9f"],["/tags/mklink/index.html","d9cf3ac8354369b4c4ff6a2cd1ff5feb"],["/tags/office-e5/index.html","f71677bb807e0b5bde211b401334bd01"],["/tags/onedrive/index.html","a61571d73079851fff667f4115a0e0b7"],["/tags/picGO/index.html","985ca6504b6e43e4631602ef9412bdba"],["/tags/pixiv/index.html","fc79f0b2cb991c82e50b9f33db0c6f69"],["/tags/potplayer/index.html","06b8c1da0a6f69c8132eed3130b5cf0c"],["/tags/proxypool/index.html","e02d4b5dfbbf406a5e0d76ec67a30cf4"],["/tags/qbitorrent/index.html","1dd8bfa2d952245d4372ca31838385e6"],["/tags/raidrive/index.html","1e16360ed1a507ead30188c85533d66a"],["/tags/screen/index.html","d98dd679590abd2f4a5cc9e652b0d45e"],["/tags/speedtest/index.html","987659a9cb1d54281448c47202679240"],["/tags/tap/index.html","31b7a22f4060e940599baf0f0781c891"],["/tags/top50/index.html","95480fb52e1fb93c2b95857ebb347064"],["/tags/tracker/index.html","b45e3e99f89fb4c2be9a5363ccbcae0a"],["/tags/translate/index.html","57cda79b1cb8a7aee066cbe27712f838"],["/tags/translater/index.html","13f1af6eb7c018ee811fffc6329c3f39"],["/tags/tun/index.html","1324b310d6110fff7c7999551bb91923"],["/tags/typecho/index.html","d2ec6fa40f420b7b285bdd4d103e5980"],["/tags/v2ray/index.html","2055f28e943c1397dfdbab2c842b1eb4"],["/tags/vpn/index.html","397cc7a4351375cecd5dbf1c1313f2cd"],["/tags/vps/index.html","8a8e14044616eb6b2e30535c2da66065"],["/tags/windows/index.html","4212c5ceb5d96bf90001d01fb920db39"],["/tags/windows端/index.html","7006a651b2c6cd26e58414de87d4b186"],["/tags/xray/index.html","48f66ad9fc568a7dea19af4d34f1ffe3"],["/tags/下载/index.html","96bc74ba7dbffce18502922ca7bd59f1"],["/tags/不限速/index.html","bdaa031fb6ea992c6d04e5a4efbdd424"],["/tags/个人网盘/index.html","d2e91d6f9932e99ea5405f131e807d3b"],["/tags/主题/index.html","9eb3f2fc72d19f0a0cdecf89c665af22"],["/tags/云便签/index.html","797fd9b2772dd9bbc6f8287833bf8073"],["/tags/云盘/index.html","0a88ab587d85763a6013152a0d0e1896"],["/tags/人人/index.html","f9d04b8347a760b57e6582514345b6be"],["/tags/代理/index.html","3812651120e6a71c8f80031c593b0201"],["/tags/代码/index.html","fe94614c2113fdd5dc3b1baf015423a7"],["/tags/优选IP/index.html","de611c155a7a0ff89251fe8c895f10cb"],["/tags/便签/index.html","0b8cb23f7e9932a3d19a14e3f6f56612"],["/tags/保号/index.html","d8338b32b945895028466e190f71edc5"],["/tags/免费/index.html","a2de9005d9cc1559caee5559b517aeb0"],["/tags/免费节点/index.html","11e881cb1be36e1d9cb0a62c1f97e661"],["/tags/加密/index.html","e5c2229621dd4275acc04f4e28bb5bf3"],["/tags/动画/index.html","d52baf62abcccb0de2045e83c5f740d8"],["/tags/博客/index.html","87b83cee3dc35eef8aa62a53f4a497a9"],["/tags/历史记录/index.html","0778a87870f4ea9fa005ceffa390ce79"],["/tags/压力/index.html","b3c0bacda0fcf7fefbf8c3e59d8f06c7"],["/tags/压缩包/index.html","4d62c427008c5442011cd349912f4fcc"],["/tags/反代/index.html","bede077c8ddb735e231e71d00736ba64"],["/tags/可视化/index.html","3072c7f23c0a6780157359c91215c764"],["/tags/命令/index.html","096269538b9fa1955adb486bd258aa18"],["/tags/国家/index.html","7e75c940c52c88ae5abf658dcc446230"],["/tags/图床/index.html","94684f4afb3d666a2e70d2b7cacf658f"],["/tags/图片/index.html","fd3822dd4c97f14d7812266aad8e030c"],["/tags/域名/index.html","ba71c7ab130e9ea43e0e7eb59ea17239"],["/tags/多标签/index.html","9a6ff9ae709f9df7faa71a47ff54c9d9"],["/tags/存储/index.html","e425229e45ce9e62ec98e74867cfff94"],["/tags/学习/index.html","ba4dd004046be7d8c232507dd5d75179"],["/tags/安全/index.html","58444e7c51b3ebd236be9b70662f2fd2"],["/tags/安卓/index.html","1c7e6b4ed3f4e3adac356f42acc80156"],["/tags/宝塔/index.html","db6ac68a97236fa50b734574ac7a77a8"],["/tags/广告/index.html","5ea5b57fcaf7fa018c2765f72039854b"],["/tags/建站/index.html","5a020bcd71156dd358b09c72965a022e"],["/tags/影视/index.html","877c35bbe871af3c1e08794295b1c4e3"],["/tags/快速启动/index.html","e5be120ff0ef9f0214aaa9671021d0cf"],["/tags/手机/index.html","fc0af61368591b1f8267116e62e39cf6"],["/tags/托管/index.html","7c4234f551464324fa75c0d3f0587148"],["/tags/抓包/index.html","4a3d77aa8cf49d5b0e2f10b20e14222c"],["/tags/抓取/index.html","c62211dbf5684d6eb40e18ef241b4f77"],["/tags/投屏/index.html","f29d434045c37ca453f3041c5dd04613"],["/tags/拓展功能/index.html","8ebff2a834b21324f81fe53f6e057ffa"],["/tags/挂载/index.html","862e75bb16b6231cd4f94341d90377e5"],["/tags/指纹/index.html","bdedffefb6cf08c018c591d45be9b36f"],["/tags/接口/index.html","b581d39d41008d1e143595732ddca436"],["/tags/提取图片/index.html","ece0b11b7c30acb069bf1ddad8717bdd"],["/tags/插件/index.html","0b0bd9eb9fc86f4c20d5ca138d1e978a"],["/tags/搜图/index.html","9852275d7912a6df5173c73bfb257ef0"],["/tags/搭建/index.html","5c93781d0bf55714d7799c70ccc5f242"],["/tags/撤回/index.html","8b6f6ef13087e79f40e8968079fb4299"],["/tags/播放器/index.html","2dd2ca6ea9edb3c8edc1a67e1835d830"],["/tags/政府网站/index.html","42776e6e8b7345f78538d2b9e1153dd8"],["/tags/效率/index.html","0786b90f025e8c3a2cf46cfaed1e79ed"],["/tags/日历/index.html","6ae8089736bd96595c61db3177e6f524"],["/tags/服务器/index.html","95239fa9cb09b7be2cbb9315388d5635"],["/tags/桌面/index.html","652e78cd96fab08ecca2bc0ee7423de5"],["/tags/梯子/index.html","c44875c1e6964e1fadc0774895265e9e"],["/tags/检测工具/index.html","8bac3371c0aa8be5483b4b036fef880d"],["/tags/汉化/index.html","c20d49bc892b4eb8e02c4f2afb04b39e"],["/tags/测压/index.html","58a0a422f0d674da650cd19ba54844c6"],["/tags/测速/index.html","8be4f8513eb5333ff554a25025b2f13d"],["/tags/浏览器/index.html","a65dbb0009b4130f3407ee63b375aa16"],["/tags/清理/index.html","de19fc3fa90642199e00a959cd2251cc"],["/tags/滚动条/index.html","5ae3433fdaa262a7a991496791db63c5"],["/tags/电影/index.html","cec0d6d925b8992ed7633101a2b1158b"],["/tags/电视剧/index.html","b675a50155ab3ea752a223ed14573fc4"],["/tags/白嫖/index.html","6258ea98946483ca663ddedeca5db94b"],["/tags/百度/index.html","4b0cad9654429f646b801bb37cba2691"],["/tags/百度云盘/index.html","04912e1648147a0160470aa4024b7984"],["/tags/百科/index.html","8770badc808c4d49f2df6371b8c43380"],["/tags/短信/index.html","fb774251e4c63eb9ad7fa43bb7d1fd51"],["/tags/硬件/index.html","1dcee197d9d86d36cad925cae728ceda"],["/tags/科学上网/index.html","a69941f7ce682e726768192a792131c3"],["/tags/空间/index.html","e943339b9ba5233b79b4bb77370e851d"],["/tags/笔记/index.html","337abf1ede88dabe07aceef1b58069c7"],["/tags/简洁/index.html","73877711e2da23890f4b3b951b6768d3"],["/tags/简约/index.html","d437fe387abf4da6eb45a73e48c28dd2"],["/tags/维基/index.html","4734b5c41a19d2eb9d8fc398d62ea733"],["/tags/网易云/index.html","083b9684a6e5fdaa4a3664edae28eb24"],["/tags/网盘/index.html","941744201393aa16eaebd1ab0a78935c"],["/tags/网站/index.html","6cdc1878c5af8331440ed902662c54a8"],["/tags/网络/index.html","73f5f9110be18ca52c38ab47fb389b4e"],["/tags/美化/index.html","e6a99f0884c611326cddf3e4cd24151e"],["/tags/翻墙/index.html","2b0a3768e756b573794edcf91602e816"],["/tags/翻译/index.html","54aaec9bbead930bdf8f810148b7db4d"],["/tags/翻译器/index.html","a3f4fe44577a047e11a0c343431e7693"],["/tags/聊天室/index.html","9cd22d858d3c9020387764c505a49c56"],["/tags/联想/index.html","b1f345a8488766322a92b04ebd833feb"],["/tags/节点/index.html","88b463e3dc6e0e53d5d1e69197bf85a3"],["/tags/虚拟手机号/index.html","9c95e5c678ddbbe01a12089ca6aa25d5"],["/tags/补丁/index.html","1e9aae0be7b88c3a3cb30682289929ba"],["/tags/视频/index.html","1f5a39ca78ef78ab8baf721081698c77"],["/tags/解析/index.html","ad630883040f552863aaa31be0159cbe"],["/tags/订阅链接/index.html","9477843efc6ce2b5e088ec4afbd3ab61"],["/tags/记录/index.html","cc799b414d807bebdc6ddd856fe9917b"],["/tags/识图/index.html","6076d85033ea177db58f1c713246bd3a"],["/tags/语言/index.html","a34f287e704cf649f4fe4c9286c68f5c"],["/tags/资源/index.html","1458b4502c3d9297a3ca17b4080e6e50"],["/tags/资源管理器/index.html","a3566d9a869b14fa23b25a33d582d0e0"],["/tags/转移/index.html","8da862642c393b2608f9bdc31be13861"],["/tags/软件/index.html","c850474b8a667c2851090b45b7559db9"],["/tags/轰炸/index.html","bb7b43c3a201bbc593d7d8107dead203"],["/tags/迁移/index.html","b8645cb9cefb50c23a91c03d5da94b9b"],["/tags/远程控制/index.html","71d59491b5f35bf75c790ab7037579e6"],["/tags/连接/index.html","12d0901adeda9fdf1463a3426dca55d5"],["/tags/追踪/index.html","844df6c80efbb04c883aad214b76fc5d"],["/tags/速度/index.html","13a65b0209d725ba4d6162613185dd81"],["/tags/邮箱/index.html","035853ba23debcc568689eff8752fac5"],["/tags/酷炫/index.html","1161576cd37d76054e9ad90977a090d2"],["/tags/钓鱼/index.html","93bb2120d0978bb2458cfbad1e94854f"],["/tags/镜像/index.html","97b76cc978032f8a2b7626bcad70f02f"],["/tags/随机/index.html","4fdbbc4a9b09619d6c3b1489427abcfb"],["/tags/隐藏/index.html","888a32f27771c010fcaf9223ee6a345d"],["/tags/面板/index.html","08569d898c0def2e365dd3b0bdd211fe"],["/tags/音乐/index.html","12a3110ca6a264091890cab723f3b71c"],["/tags/高颜值/index.html","dcbdd36a5aef83c1e57134427ce2f56c"],["/tags/魔改/index.html","cfcdd6f577f4df233e0e91d196967265"],["/tags/黑名单/index.html","2a26dc86612352a1b1fc6314975f68fb"],["/urls/index.html","d8ffdbbf13a4ce687529d3632cf7df11"],["/vps/index.html","f2dc7ddec7bb1b8e2f1809854d0898d8"],["/支持/index.html","32404f5c143dfaf5e78d6e7248aa11e3"]];
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
