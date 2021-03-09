/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","d4932900731ccd7a10ee8d2d27ab43fc"],["/2020/11/29/clash-windows/index.html","73af8885727f130f059dfe292de014bc"],["/2020/11/30/websites2/index.html","06952c4ea2df4a448beb25ad2cdc1c15"],["/2020/12/04/iphone4s/index.html","274a827144bbd7c6afd917e90850dca1"],["/2020/12/04/onenote/index.html","387cc8bc60287d0f3082cf5a03985335"],["/2020/12/04/wesites1/index.html","707732c03f986d7ea0722d12277da9ef"],["/2020/12/06/nokia808/index.html","1b219155fa4114aea3e89049ed548bf1"],["/2020/12/07/ipad1/index.html","c19962c93775f6e78365d8913a352b06"],["/2020/12/18/freesubscribes/index.html","312f71f5290564894e8a34de09634a8c"],["/2020/12/19/musics/index.html","ff7c4725e07f972ef44804e09817a569"],["/2020/12/19/shadowrocket/index.html","5512f2f72daa81f450aa701502bb8071"],["/2020/12/19/v2ray-windows/index.html","700384ddcedb9f24078989d71191859e"],["/2020/12/19/v2rayng/index.html","5ee4609e5f7df8054002b359d25105cd"],["/2020/12/20/beoplay/index.html","f4e7be6f76be097ccbd91eb6ee6058e6"],["/2020/12/20/订阅链接转换/index.html","ed165ed2c4e9bbc781132013c59607d0"],["/2020/12/21/chrome浏览器下载提速/index.html","80a2a7e264204efc8fcc4c09b25a7a76"],["/2020/12/21/免费128线程并发下载xdown/index.html","bfe126b589768a957df71be2afa4d058"],["/2020/12/21/免费32线程下载软件ndm/index.html","71a4b197dcc8c7908a2e6c29ec147c74"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","a323960b593a5b630a77339bbcc78039"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","bd2a552bab5009a984fb934db371e30c"],["/2020/12/21/广告怎么知道我在想什么/index.html","10ac270060439f40143f70d5b33055d9"],["/2020/12/21/无名·引子（小说试写）/index.html","7067056174e424192f7f9df64838c8c0"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","af71c36d1f6303abcd78c67e05a9b00d"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","803124913f9b5e16aad928d131026c1d"],["/2020/12/21/高速轻量下载器aria2/index.html","397450b7192cde6ef4c1974c93f8ee43"],["/2020/12/22/2020-cee-roo/index.html","54d64eb773bec4b8ef760b12c43804fa"],["/2020/12/22/firefox插件、github、steam富强/index.html","263cec56441ab45f9098726722f9bf25"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","60dcba06df4685f854572b5c542842b8"],["/2020/12/26/python-day-1/index.html","9b1cb907bafffc1052ef9d7fe76e3e97"],["/2020/12/26/python-day-2/index.html","94a2feabcab17aa509e2a4b1780bce04"],["/2020/12/26/度盘不限速下载方式一赏/index.html","f26fbf4fc0083435e72c5d49c70b2b02"],["/2020/12/26/添加开机自启软件/index.html","bfa4386e128eae41e346ede3b6f7abfa"],["/2020/12/26/电脑端截图方式一赏/index.html","0f01e70ac559f12b2bf5fa3e39c26450"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","a1182088dc00c1add877a9de6fd56f2d"],["/2020/12/27/最安全的浏览器tor/index.html","20d6840c90ed475505f33ccfb8cd61fa"],["/2020/12/27/网易云刷等级和听歌数量/index.html","47b50787fc009ed3d3acf86a60a654d5"],["/2020/12/28/freenom申请免费域名/index.html","84c73e69e9b176b88c4eae90546aa36a"],["/2020/12/31/机场/index.html","07fa49385dcbb219060b0e6f407024b5"],["/2021/01/01/M1/index.html","60408607b990f1f1689b80027b97b143"],["/2021/01/01/compress/index.html","adc968966c2f8b9008dd39343127ac42"],["/2021/01/01/infinityfree/index.html","97f57b38573a663ed42b9121efc19dc3"],["/2021/01/01/硬核翻墙/index.html","9c24c6bbc00c9263c62219a62e69b26f"],["/2021/01/02/qq/index.html","58092309a7bf570f8f7081bae4cf4553"],["/2021/01/03/netch/index.html","957e85c1edbf53d9153dd28772c06866"],["/2021/01/03/waifu2x/index.html","728852ba9afecefcb2216a4801c1123b"],["/2021/01/04/ads/index.html","99552bf19a1197d8d313112d4ded6999"],["/2021/01/04/games/index.html","f91f89b418b92ddeedfce649ce1b6a83"],["/2021/01/04/heroku/index.html","9e0e9da1f5ce8f90b293d7633a28aa9f"],["/2021/01/06/movies/index.html","d77411de16109ca77ed91d2f3cb2830a"],["/2021/01/07/google2020/index.html","f6777a7488e6ccf5d2f5c5f07ff47521"],["/2021/01/07/lucky/index.html","cb3c602b427e283e4f90cd7f46eaad97"],["/2021/01/07/spotify/index.html","cf2f313b9b191d5c07f5e54b82f21558"],["/2021/01/07/thunder/index.html","ab0b13be88f7b1b6858a9999d291c869"],["/2021/01/08/adguardhome/index.html","597163d08add9ccf3f696466d40f3508"],["/2021/01/10/IBM/index.html","61018267f7a7059c9917c4aad96b88dc"],["/2021/01/10/potplayer/index.html","2570d672202448d44a552c4af4bf3eb4"],["/2021/01/10/sakuraanime/index.html","2d4babdc514de8542f0be242a62ad81e"],["/2021/01/10/美剧星球/index.html","5e87f8b830695503c349d9d6f1a39c7c"],["/2021/01/12/telegraph/index.html","c3ba828f8cb6822201a59e70460b20d2"],["/2021/01/14/comics/index.html","f75f2347db8cb21b32fd6b60d806b633"],["/2021/01/14/ftp/index.html","733c890d88564fe6b0b694fa8d45f6b4"],["/2021/01/14/oraclecloud/index.html","308ef5e03ae48187a5334b8a04a8ac46"],["/2021/01/14/porkbun/index.html","1fb34a43ffec041d4a00c302282a3cff"],["/2021/01/14/powertoys/index.html","3bae5bdd3d3ee7f6de4e941194a34411"],["/2021/01/14/taptap/index.html","a771bfb29cced98e80b2ef5880516f68"],["/2021/01/14/ubuntuvsftp/index.html","fd912bfd0ef46cbf8d78b6e963e1bfa5"],["/2021/01/14/小说/index.html","9d3ff2063cf3c6e9bff953c3762e3775"],["/2021/01/15/freeproxies/index.html","b2b711b1d435a8649ed2cd4c79b31f60"],["/2021/01/15/incaseformat/index.html","04aea9685bc7b0edbd3cdbb6cb46377c"],["/2021/01/16/euserv/index.html","ae9150ba471b1c90af6929f64a7c4412"],["/2021/01/16/winxray/index.html","fb2a1be2337d9fdf76e0d225532d542c"],["/2021/01/18/qqreadhistory/index.html","e282ac58a874e1dc68f1c0e411e1c42c"],["/2021/01/18/qqrevoke/index.html","1f606f5a643db526513849a635d2d6fc"],["/2021/01/19/freevpn/index.html","ace69ecf14ea7bb8fd5b3cbe0200c534"],["/2021/01/20/browsertrack/index.html","4c217a8fc7eb7a4288511baec29e77c5"],["/2021/01/20/v2ui/index.html","abdff3a024f738250aa78cf969d980c8"],["/2021/01/21/failedtoconnect/index.html","0d87bdfa6d7c1b82eb23eae73cbbaca7"],["/2021/01/21/gitcalendar/index.html","a79055e9c4ee70bb30c0958fc96abf5e"],["/2021/01/21/markdownformat/index.html","8637ecd8ee61133067dea2b11042c92d"],["/2021/01/21/markdowntable/index.html","e7bee1f686570fc23296422b70837933"],["/2021/01/21/vercel/index.html","a5b49bce6b60049797bfe79e0a81c374"],["/2021/01/22/hardware/index.html","3d64ad1f5150d422223ffdbfd9a32318"],["/2021/01/22/muviz/index.html","231600ba29d9ffaa3c3dc74adaf2e495"],["/2021/01/22/randomapi/index.html","030e192fcf8a3b7a7c17877fc08fb022"],["/2021/01/22/searchimages/index.html","502253db2d3facb0dc2db4f8815d7055"],["/2021/01/23/RX文件管理器/index.html","a8739418f0acaca8db4bc1af263ec316"],["/2021/01/23/chromeflag/index.html","45d4a7e3e742fcfc9b13d321c67a812c"],["/2021/01/23/qttabbar/index.html","b1d9b8f07c50257dfdc15f26acafd21a"],["/2021/01/24/githubspeedup/index.html","25bc25d94b08c86515034febde92bf5a"],["/2021/01/24/jsdelivr/index.html","e96a2ef52fede405357a3558f973f382"],["/2021/01/25/note/index.html","79e36f0bd9ee97b93da6294a5dcc7463"],["/2021/01/25/soul/index.html","618891b58f40383920beb201040ac113"],["/2021/01/26/herokuxray/index.html","977214c1999419686cd8abb7525f0da4"],["/2021/01/27/proxypool/index.html","42bafb523a35160cba9d3c15edc543d1"],["/2021/01/27/tracker/index.html","f50e9beb589bac725e81e22f7d21e3fc"],["/2021/01/30/pandownphp/index.html","d91b28e896463b1e9d05086978218590"],["/2021/01/31/newgroup/index.html","32a91b4230c8c94ebcb7b8d0dd1b9326"],["/2021/02/01/clashlanguage/index.html","bc57df47c0f0d956a179fa1a60945a8f"],["/2021/02/01/encrypt/index.html","50900818d26a2f113a6535e768cb454f"],["/2021/02/01/footermotion/index.html","652f1a7de809a14815bddf919f900dde"],["/2021/02/01/gitter/index.html","64ae07262f22445e01e940435a50fa29"],["/2021/02/01/pixivtop50/index.html","9ed151c35224248943388b922a7304ea"],["/2021/02/01/scrollbar/index.html","7c4d50a769a38df32656ff11a8c62180"],["/2021/02/02/clover/index.html","de2611298fc09817f26f2e845c15dbf2"],["/2021/02/02/maya/index.html","add66bad5cc20cc6931e72527e981497"],["/2021/02/02/speedcontroller/index.html","a58daf3177516aad4f5a4be7aae9b9d1"],["/2021/02/02/yesmusicplayer/index.html","2001f672623bfa1f65b0bc37aa8fa36b"],["/2021/02/03/lenovoonelite/index.html","0bae493e57e26ec1a9cf7bfd2c1646c7"],["/2021/02/03/skipads/index.html","5746f029c01ea4e680a4158da147b331"],["/2021/02/04/picseed/index.html","249f99973538d90d0ab40ba3a6193e86"],["/2021/02/04/renren/index.html","9eedbb8b0a05d0c4f1129ffd20ccec6f"],["/2021/02/04/serverstress/index.html","7c663b3491a28744bf8a09f7563136e5"],["/2021/02/04/wikipediazh/index.html","802097ac746a3e0bfa1d7ac3b0c5c461"],["/2021/02/05/googlevoice/index.html","0c3a9900317f263b912a6fb742bf98ea"],["/2021/02/06/clashconnection/index.html","e0e70df97f4c885e380706e9c4f6f152"],["/2021/02/06/gvtransfer/index.html","2d6880e67393105a13dff85d63baf0a5"],["/2021/02/06/todesk/index.html","3685a9655fb56ccf83b6b69821073e1e"],["/2021/02/06/vpnblacklist/index.html","b4831d5543ddee9f498370a9769913c3"],["/2021/02/07/mklink/index.html","f478348ce9fe1263ebaca0a87fc08f86"],["/2021/02/07/speedtest/index.html","df5c724fdfa5ff33262139059a09f3ff"],["/2021/02/07/translate/index.html","8935fa61d52a8be3fda2c60d1d67db51"],["/2021/02/08/ewomail/index.html","8333b79a733ee3447795560d2bffde91"],["/2021/02/10/officee5/index.html","87e348a34821d8ffc770301fe435ffef"],["/2021/02/10/raidrive/index.html","212b0d72ca1c7a422480d9ad858a5034"],["/2021/02/13/e5sub/index.html","5f8bc816296ef352af91811424fb247f"],["/2021/02/14/screen/index.html","aa13a3af746247815dc57fb542b42e09"],["/2021/02/15/clashtun/index.html","bfe9160a45032dc885181c86949adc9c"],["/2021/02/15/messageboom/index.html","79b3bf3718c39fc09dce4200799b2da7"],["/2021/02/15/oneindex/index.html","98e4fbfb9e56a6ed5b919d1b12472b15"],["/2021/02/16/govsites/index.html","aa44c6e3119c21b71e0e1c72729f3512"],["/2021/02/17/hexototypecho/index.html","869ba95415954e90a35c91642b882664"],["/2021/02/19/fiddler/index.html","e36d9a25272142aae8ccae594e07e1ea"],["/2021/02/22/potplayerset/index.html","8d07bf1c49beb1f5dfb7b4ce566c61a5"],["/2021/02/22/studyresource/index.html","d52b0a260070064d37a2cde0eb823467"],["/2021/02/22/telegram/index.html","0a9377c6f346e54918ba74cbadf483c9"],["/2021/02/22/videos/index.html","535a81a0e27a7b09e9963ea03fb82b40"],["/2021/02/24/mtproxy/index.html","d9e75aec9a809c1e6b69ed3c94665a50"],["/2021/03/10/surfboard/index.html","6861c73f6e174ed9b59512838dc653ee"],["/404.html","178943554142924902ed7c382a860561"],["/archives/2020/11/index.html","118a02c67139bfa96eb7927109f518a9"],["/archives/2020/12/index.html","9a6ce9e2453b23e54bbbfeaa911a2a76"],["/archives/2020/12/page/2/index.html","adaeae419e837cbdadf2e61c7098929d"],["/archives/2020/12/page/3/index.html","4b9270e649427ad05f3f36652bdfefaf"],["/archives/2020/index.html","507bdb35265c087f88394149f862f82f"],["/archives/2020/page/2/index.html","17ce3f100f4400fe59a1d611ecb96453"],["/archives/2020/page/3/index.html","5e130eae7ad0cee8267b5eefc6c72f08"],["/archives/2021/01/index.html","e6a3043c0b1731efab4c4d037f5694b3"],["/archives/2021/01/page/2/index.html","dbcdbaf2bd2d7086da35cd867d0de93f"],["/archives/2021/01/page/3/index.html","d2e1d5133cb9ca48df37abd1aec3eef4"],["/archives/2021/01/page/4/index.html","b11d1a271a68745a92bc7651fe55ba4e"],["/archives/2021/02/index.html","39006213a1a2728dbbbc15a2093b9649"],["/archives/2021/02/page/2/index.html","064509d7a78e9ff4990f6aa9b5b2afaa"],["/archives/2021/02/page/3/index.html","9c94d6e4e8fe6332b84cbe394625c869"],["/archives/2021/03/index.html","9f56b1e8098ab3be121c3efb98eb12c8"],["/archives/2021/index.html","eff695be41588fc9d854a8756e61d3fe"],["/archives/2021/page/2/index.html","cc606b142bbda78fa496eb5a38afed70"],["/archives/2021/page/3/index.html","75dabee476c64c354317fc361404dab1"],["/archives/2021/page/4/index.html","bcd4af8d5d92cd06778d2c5746b48a0e"],["/archives/2021/page/5/index.html","5d0f4552110dfde4fc7db7d68f6b0886"],["/archives/2021/page/6/index.html","12e3329843f5f0a779619886887cf0ee"],["/archives/2021/page/7/index.html","5000160f57ea89466212bb103afb1149"],["/archives/index.html","0748c46b5aafc1dd1cfc826ae01a4a01"],["/archives/page/10/index.html","7a1381a826c71e93b45acd13f12377f8"],["/archives/page/2/index.html","a4c033f5f9cd39c156b15d069876a277"],["/archives/page/3/index.html","281e0260e7fe6bf0f6af7f85c2ee4664"],["/archives/page/4/index.html","d03c565e866299b7b60dc0d6a3d08350"],["/archives/page/5/index.html","3e6b41c13843c7958f57b8a12d73064f"],["/archives/page/6/index.html","c897f7a45e528f331492d6b12eabcb54"],["/archives/page/7/index.html","975bb7475120644bde69ce1102f1e790"],["/archives/page/8/index.html","2ee3588c6c89b0f1da8bf200840c3224"],["/archives/page/9/index.html","53b7ed692ffb820f47e59df1c985bb3d"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPN/index.html","1d1411c3974767203a9993f8ec0c32f5"],["/categories/VPS/index.html","1907d158df3a0127dfcb63cff3850bb1"],["/categories/index.html","3f120a9f2df6bf7f171b2d904910c02c"],["/categories/下载/index.html","7b7f36afa1ba9b3c03c17a9ee7c422bf"],["/categories/安全/index.html","a1995409bdfa6c6f31592010c29c7d59"],["/categories/建站/index.html","8e7daad699c052f1cea7f826cfe3ffa0"],["/categories/杂/index.html","ff01c96b45dd6107c5c6fb3dc7198763"],["/categories/杂/page/2/index.html","b5e9da4bcf99c478c4774d437a0703a1"],["/categories/测评/index.html","11e1debfcdb5d0290f6551cf350afc54"],["/categories/科学上网/index.html","c20e201a2b10d4ae3990d265314c98b1"],["/categories/科学上网/page/2/index.html","5800d92caf56d5385bc50902eaf0e11d"],["/categories/编程/index.html","166ca2f9bfaad64a1ddc4a6f966af315"],["/categories/网站/index.html","135619508310c7ab7229bfdd88d57153"],["/categories/网站/page/2/index.html","254eb1829acdeb1005c81cda7b3a517e"],["/categories/软件/index.html","8443422c624392eb8c8b91f654e5a12e"],["/categories/软件/page/2/index.html","7407689dc5067f1443b99233ac64c39e"],["/categories/软件/page/3/index.html","bdf4a1515e6d9cbd8db7e25dde941f0c"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","d2e0c4addd3cd58015f731fbd667d682"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","0981a2cc495fa35d4eae659b066f60a4"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","3cf1092b71ae6b9f5d4d908831935544"],["/ios/index.html","62cc482df643a0be77c13b2743fc62d9"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","05687605cfd5164453a41a2a148bb2ea"],["/page/2/index.html","554f4812254fa65f3155d7608398022c"],["/page/3/index.html","a7fbabb5748cc86abfcb7bc80817a02a"],["/page/4/index.html","2176be777023d520606a99c16726517d"],["/page/5/index.html","7871522b7e056064b3d79a3b64063fbc"],["/page/6/index.html","1dad6f3bbc00fe45f1907140a56b74b4"],["/page/7/index.html","a4dd01dbbbbd387fb76148aff4aa6b68"],["/page/8/index.html","5bbc224d8de0700030f381ba4dba1f4d"],["/page/9/index.html","c5330a1e828717b9a330a72456d2df57"],["/payment/index.html","2a4438ed8edcc3fec5416e8979bf8cc9"],["/privacy-policy/index.html","914f243d281795a08990dced3a8686e2"],["/rss2.xml","7055760064d72d8c59004d79988914c9"],["/search.xml","02f1440e8578b9d94dffd0f4f5cf209c"],["/sitemap.xml","3ad14866e592f9edb491a980dfb8f2ad"],["/sw-register.js","27efd5ffdf985575e02a1ae3e61f62cf"],["/tags/5t/index.html","9892704db4086226f9f702c163527fe8"],["/tags/Clash/index.html","e5f7d2ec87b3fae1a2a9d98524c75cf9"],["/tags/Clover/index.html","730a7c4a2b045b74f51e222a43ae86b1"],["/tags/E5/index.html","d054a451197de9f7305d0d95b4c6d8be"],["/tags/FTP/index.html","e21bf9e554c179abb0f02ebc45216d9c"],["/tags/GitHub/index.html","66537bbdd984c55dfa36c1c8de1ef428"],["/tags/Heroku/index.html","6ccfb915fbe16b7a07b35b4f36108de7"],["/tags/Hexo/index.html","693b2794a2ab78bdd070c041374acc9c"],["/tags/Lenovo/index.html","ec9aed661dafeda053ee0757277a361a"],["/tags/Oneindex/index.html","70305e895ba85867db4bea8a604f2423"],["/tags/QQ/index.html","a7cd624ec0eb34a1a19bffb641853069"],["/tags/QTTabbar/index.html","69c27433fe68672ad40ea01996b1e0ed"],["/tags/RX文件管理器/index.html","3eb145f0388c0d80136e0a6b16a3712d"],["/tags/Todesk/index.html","767d2f8ed24f308f93c736bc2c6feeb5"],["/tags/Vercel/index.html","f3b54995f9460a21f4330a38abfab69b"],["/tags/ads/index.html","acc66dd99e8a034fb6e42f3cacec5cf8"],["/tags/api/index.html","40bad5aadbb0babae5b952f6d56a0e5b"],["/tags/app/index.html","81dc44eb06c11fca7113712572f0452b"],["/tags/blacklist/index.html","31ab6d41711a090fd7a656bcc6d34ee2"],["/tags/butterfly/index.html","7afdafd9d712a4d8175635a80b618471"],["/tags/chrome/index.html","f2989f020ceffbfa19467232a3545df8"],["/tags/cloudflare/index.html","f304716f4cfcd84f593fcf2fe1937752"],["/tags/cmd/index.html","6b80b2e075284d0d49164bebed5ac47d"],["/tags/c盘/index.html","16390bd458340b5f694591254e0bb718"],["/tags/email/index.html","8a98cb63ecfdbc89f296c724e78b4e3f"],["/tags/ewomail/index.html","757e9e5b5f8f5befe58802697af67b5c"],["/tags/fiddler/index.html","bc937cd53d515db1a3d6396f91c13985"],["/tags/flags/index.html","8f4c48209a0d1df6483b088dc9a13b4b"],["/tags/footer，页脚/index.html","3e47e095140a84118a76a8a462636c69"],["/tags/galgame/index.html","dd32914d88669c03d8ba558535e9c1cc"],["/tags/git/index.html","06529c0d59b30fb8e445b8b121066159"],["/tags/gitcalendar/index.html","dc09b4b25c56ad5e70924e4f6093d323"],["/tags/google-voice/index.html","880b28742ef938b9223a0ca6b2024412"],["/tags/gv/index.html","55c7a3894c971beaf586840d68a033e8"],["/tags/index-1.html","d3bbde8a3a85d82883f4db63b91d33a4"],["/tags/index.html","02ab66898fd09f238dc0ebc827663da2"],["/tags/jsdelivr/index.html","f0ece4681277fc54456bbb7bf5e1c1ab"],["/tags/linux/index.html","82b779e503c96be586c5c9e1fbdb313f"],["/tags/madVR/index.html","3e658fc06e82c75c72178b5f9a4fddbd"],["/tags/markdown/index.html","3c860603aba0c8dec5f423402d15768a"],["/tags/maya/index.html","38915998326224bebc7dd15728a4ec83"],["/tags/mklink/index.html","482b84f5e10dd1ad09e6b8581abf8d29"],["/tags/office-e5/index.html","cf3fda1a9017b1e59cb15f39134d0c69"],["/tags/onedrive/index.html","9d2547f003a287a15f84fb1c34ba31c1"],["/tags/picGO/index.html","da04e98b168a95e1d8f0f3a682a8eabd"],["/tags/pixiv/index.html","953bc3d99e023714ca4b1465e8b624b2"],["/tags/potplayer/index.html","f0eb4c096a983f57b39becc69b462f02"],["/tags/proxypool/index.html","a611171b8915fb476ea3f30ccf2af22b"],["/tags/qbitorrent/index.html","c373fc1f0a32a150b6151e5e8a5988f6"],["/tags/raidrive/index.html","87acd28248e017e01e5a92f86e5880f3"],["/tags/screen/index.html","2a83abd12cf4ccfeec6ea9686102f3da"],["/tags/speedtest/index.html","9a8600dfcef12d1518b1bf674031eac7"],["/tags/surfboard/index.html","aec9d0a0f3ccd3378e073e46e820bf2f"],["/tags/tap/index.html","daf7e87a234c9603f630097df8fd435f"],["/tags/telegram/index.html","ba871872da6fa1d864c486243086c532"],["/tags/telegram代理/index.html","e7c935188bd23a876d68c85c57057206"],["/tags/tg/index.html","3a1e8c73614bfa9b32440f31c1f595f6"],["/tags/tg代理/index.html","51f06a2ad01c8ab258ed25ee32b1b45d"],["/tags/top50/index.html","55e29a9b5f38c0f5d6353dfdd42445ac"],["/tags/tracker/index.html","1088b6dd43e62c712ddf5485e64fdc44"],["/tags/translate/index.html","f5bd49f88b953cef134dc16040c98c43"],["/tags/translater/index.html","187578a0987bbe4859b33fffc71cdd7a"],["/tags/tun/index.html","4e27044f36b7c077b291ea326eddb147"],["/tags/typecho/index.html","96c08803e2fac7397b9b675c757e7948"],["/tags/v2ray/index.html","316beb6e5dbc0143c5e380f27e66c003"],["/tags/vpn/index.html","bacf80d0fe6b60deb04fb635dabc9dfa"],["/tags/vps/index.html","c0bedc5b47677b6ca4d4bf00b4a4e8ee"],["/tags/windows/index.html","93e185f3362b85c6e5575a325e6cb421"],["/tags/windows端/index.html","03dd1319455bdf33edcc108d73a00422"],["/tags/xray/index.html","0f5ae8f4fa8388610f5947b20e9e0eb8"],["/tags/下载/index.html","a2f17572bf98ce46a90bf31ebbe8db93"],["/tags/不限速/index.html","5bf5a50c22476f6caa0385eb46f67334"],["/tags/个人网盘/index.html","1addb8787bb51cfc32f6ca81bd11512a"],["/tags/主题/index.html","840f4edeeede5950b9e255fbbaff8028"],["/tags/云便签/index.html","fa32747a83ff5ae954ba0919b709522c"],["/tags/云盘/index.html","4effb6b7c8e872de7c6755b2e86bdf7d"],["/tags/人人/index.html","5f6c452848e33c1c9632dadf0ec60240"],["/tags/代理/index.html","f4117292186ee2ff1968093f9693b683"],["/tags/代码/index.html","1cb276f0f3adb27f1bfc9befc846c593"],["/tags/优选IP/index.html","5fa92d337483fc273687e5e811919066"],["/tags/便签/index.html","7e5e2e648418d61ae2f3bfad1e28733a"],["/tags/保号/index.html","17ff1f86ac77627fbc3e2ef2587b5462"],["/tags/免费/index.html","965f3274073b2a290adbf02980eb7b48"],["/tags/免费节点/index.html","5b3d51f5d6bbae07c0fd157bf03ad8e8"],["/tags/加密/index.html","59f1bb8d79af5a5e5c643da6f6b5d784"],["/tags/动画/index.html","9c2dfe15f285c40e2c7a02d6ad7fac32"],["/tags/博客/index.html","6d6dad3457aa1c42cdd377801871e5c2"],["/tags/历史记录/index.html","3459c8e89b843961aef20890e8844b6f"],["/tags/压力/index.html","9579e57dcdac638673a9708f94e2f4ce"],["/tags/压缩包/index.html","2e1bfcc43bf27be232b5ea90b2b6608b"],["/tags/反代/index.html","c80166bd70607e09765fc76842db856a"],["/tags/可视化/index.html","966a2930709a102ca63607e9cf0e024c"],["/tags/命令/index.html","36f198626cac52d072dbce1450994a50"],["/tags/国家/index.html","213808ae80b58d9372d34f20ffa5e0cb"],["/tags/图床/index.html","1fe6d70a92804b4f84ba0469c39b3a09"],["/tags/图片/index.html","26dac19cc1e81bcb5d72bcd36bbc51d2"],["/tags/域名/index.html","4ea276e13906f9162231060da3126d19"],["/tags/多标签/index.html","508bd33b278799dc4c8dfe0d2bab293c"],["/tags/存储/index.html","0ae7c2d6a4e23ad52cb0e9c3f076e5a0"],["/tags/学习/index.html","775d76c03d03a354c7c1db88633556f2"],["/tags/安全/index.html","301b21f3c72e09377c8f165b4d0e81eb"],["/tags/安卓/index.html","efe8988e586f401fbf2051586493b617"],["/tags/宝塔/index.html","78f9c27811452efcf80d574f0c0030d0"],["/tags/广告/index.html","5756faaf472043a9576d0e4e1821ff38"],["/tags/建站/index.html","e550573a88105b84d4a1749a130b130f"],["/tags/影视/index.html","dac1b5aeca49cce8c82633cbefa21d05"],["/tags/快速启动/index.html","d9ea28601d00fcffb4884d1ca5e96ca7"],["/tags/手机/index.html","6c1a4549f9db92065c2cd9e8710b9337"],["/tags/托管/index.html","b5ccf367e4574837592ac422b93f4d16"],["/tags/抓包/index.html","ac503eb249e259c9393148bf5fb56e80"],["/tags/抓取/index.html","d673a1062966b777b227f062e9b6ca4e"],["/tags/投屏/index.html","1acca47d8edd0bc379312f08d107e52e"],["/tags/拓展功能/index.html","21b62ec461b87bb4646ebb2fa0bda4a7"],["/tags/挂载/index.html","ddc8df58fa21096244deff30e5c126c5"],["/tags/指纹/index.html","8e21ef03139ae8324a75dcc1033e69a9"],["/tags/接口/index.html","80a02be87672093640ca8dc50a9952ae"],["/tags/提取图片/index.html","9cef93f220f4f66b6ce6bfe7d09fce5c"],["/tags/插件/index.html","a0d3ee64d3a53ee7fe4d29c38435ef0d"],["/tags/搜图/index.html","27bf284fa16d1a8b17bb6cee6cfc6dee"],["/tags/搭建/index.html","721dd6df0b602baac15bbbe6f27f6f96"],["/tags/撤回/index.html","92fda5ec1846296bbc08ecf6614bfdef"],["/tags/播放器/index.html","70763f16c644fe81fa78ffe461e86142"],["/tags/政府网站/index.html","e2579b805331a71c252a9ab23b02a0ce"],["/tags/效率/index.html","c2263ba53107c70204efa891c6d8d748"],["/tags/日历/index.html","cadc83472af4f838ac7569490c216442"],["/tags/服务器/index.html","cdd1d1abdad392862f69990e849954b3"],["/tags/桌面/index.html","ca53e220f4c2271a7f7b1c7b1d3b05f9"],["/tags/梯子/index.html","e1da0a017ae960c1b40736dfc7135c7b"],["/tags/检测工具/index.html","d016bc7b7d0d957e8cdd78d57da62fc8"],["/tags/汉化/index.html","ed71fa6c8a38c04ba2fae9ad76c0ed9d"],["/tags/测压/index.html","487b452b4e987ac46d8fde5bc84911e8"],["/tags/测速/index.html","6b12a4cf174a182e2912c4edb8d32ed6"],["/tags/浏览器/index.html","be5d3699e500ada1d1c0c11f91f83740"],["/tags/清理/index.html","3bb5ed64badaac6727cc483872905e2f"],["/tags/滚动条/index.html","8db0c8cedb99064aab9c7cfc3cf4c1e6"],["/tags/电影/index.html","55b5f54b2c6ce4255b5404d49be6fefc"],["/tags/电视剧/index.html","fd745e689c3e78e1324c08b2c06d0764"],["/tags/白嫖/index.html","851fecbaa7cb1279f03754b5d1e15b18"],["/tags/百度/index.html","c0af603995bdf43a68c9491784d0eccd"],["/tags/百度云盘/index.html","56cf550e3941505acd82b636e701a9ba"],["/tags/百科/index.html","a15a18d2e5720267d6a16fa065b69ded"],["/tags/短信/index.html","85d68c484b7eadeb581e7344e0dbe40d"],["/tags/硬件/index.html","cfec1ba555a387d1c2e5e8019c4b2d9f"],["/tags/科学上网/index.html","618c9d4fdf83c7915c5b0f1786b93396"],["/tags/空间/index.html","40151caa111032a388229e33ac98d5a6"],["/tags/笔记/index.html","1d202dc509ce905275942ccdb02f1c3e"],["/tags/简洁/index.html","43aefcca306fd73f94988fe576db7dbc"],["/tags/简约/index.html","aa8b8453738f34b80de9d891969c11f9"],["/tags/维基/index.html","2edc69efe39a47ee1e936a26bcef5249"],["/tags/网易云/index.html","2f056f099fb2d06b5da9f5eac3d44e16"],["/tags/网盘/index.html","1abec126cdf57531e82645676e27f111"],["/tags/网站/index.html","d340c2982309709e20e6dc4d6a4f75a8"],["/tags/网络/index.html","4a5e401d5e26bfc197348956f29238f4"],["/tags/美化/index.html","0221456bf3c33c513bbc83c9274ab717"],["/tags/翻墙/index.html","7720a4d65d98714e711ff1bfa79ffd86"],["/tags/翻译/index.html","97efbd6795defbc59cc48b8a713a99ca"],["/tags/翻译器/index.html","39554966bbbca7918ac95321d6eaf18a"],["/tags/聊天/index.html","e702ad714aa0938e8fc336404f59b3c1"],["/tags/聊天室/index.html","bfef5d00175821d54a64914730805107"],["/tags/联想/index.html","12c8ae18b168f6afd11a57628d772611"],["/tags/节点/index.html","75921d17c6e2cb1390634b37f8841772"],["/tags/虚拟手机号/index.html","97f15d61820a9654b83890a876633317"],["/tags/补丁/index.html","c9eaee13dd457d69c79c111f87b57a31"],["/tags/视频/index.html","d3f38c6db03c71135ea00ea4d9f85ee9"],["/tags/解析/index.html","ddef158d4852cb9bdcff6d2cd4af52ec"],["/tags/订阅链接/index.html","3a38f38e134f08828cf07b35c765318d"],["/tags/记录/index.html","7bbe6d2bbbc138aeb4e6fb75ef9c9011"],["/tags/识图/index.html","32fd7b931f5fd16a24959340e6cdbca9"],["/tags/语言/index.html","20224f5ba2651c4d83b469c5f411775c"],["/tags/资源/index.html","15d3fa4dd8afededadac1ea323bf064b"],["/tags/资源管理器/index.html","5ebc8dad960b768c5d43bd49a6c61c15"],["/tags/转移/index.html","e0dfcd20eda935fa3e4b1b49f23168b6"],["/tags/软件/index.html","ad882687cbbb6cfc197bfe5dd628a901"],["/tags/轰炸/index.html","a684e702b39c492c6fc5f8e2af053445"],["/tags/迁移/index.html","aad359d9072e7421850c76653decc876"],["/tags/远程控制/index.html","4b817a867cd5fd5120f32398bcd23d6c"],["/tags/连接/index.html","0799045ea51f74c54040f4b26466d939"],["/tags/追踪/index.html","73c4c93b1e370cf2fc196566c9189cfe"],["/tags/速度/index.html","00cc1eba98ce5f4ba0d8c6ca05729ac9"],["/tags/邮箱/index.html","66c7e349c92244409331d3372c121e27"],["/tags/酷炫/index.html","92d9f6ac748989e7946dad80a1005e59"],["/tags/钓鱼/index.html","7ce3fc8bd4919f5373c473dd197e759a"],["/tags/镜像/index.html","1e7a28c64f5eb6a88595b874bc205c11"],["/tags/随机/index.html","674212a691e9bcfcd5c7a751ef95c182"],["/tags/隐藏/index.html","1a6106f5d31beafdbcbcffcbda586c8b"],["/tags/面板/index.html","df174bb23aa27ffa4ce77c06ca26dabc"],["/tags/音乐/index.html","8b876a786273641d60b10fad81b4df6a"],["/tags/高颜值/index.html","6bb377f882462001d7717af73031b63a"],["/tags/魔改/index.html","982e8c8d67f6a9671f1c34b62aa5e8a8"],["/tags/黑名单/index.html","bb00ba7c29b3c4fd3a9747d9972a30df"],["/urls/index.html","d068eb2113442d87505e0d26daef6155"],["/vps/index.html","8d7f9de97b054ac6350b86922709ab83"],["/支持/index.html","960e384cc38fb83e369782822a296394"]];
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
