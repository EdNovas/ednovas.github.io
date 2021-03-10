/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","f5d36dfe7d06c7c852e976b59f0e553f"],["/2020/11/29/clash-windows/index.html","87f9186b8ff2db69ccc978feba1796b2"],["/2020/11/30/websites2/index.html","1c37d2c16bd92636f00989969a4d5723"],["/2020/12/04/iphone4s/index.html","f116e25485a339a4147017d8f8b7b4c5"],["/2020/12/04/onenote/index.html","3da7c7cc3239fcf242546fc3f9a44096"],["/2020/12/04/wesites1/index.html","980b90a5298b006318be1387a3e5c388"],["/2020/12/06/nokia808/index.html","b29ae50550f692d43a28944265a123da"],["/2020/12/07/ipad1/index.html","d8ba856502c6a47a45245bb174be8e00"],["/2020/12/18/freesubscribes/index.html","5d6e2e33f8782abcc7635def633b907b"],["/2020/12/19/musics/index.html","ab143d79cfcaf072d1301aae35b588c4"],["/2020/12/19/shadowrocket/index.html","e58e319790d7f34772b14db738dc45f2"],["/2020/12/19/v2ray-windows/index.html","6bc3ed883e1580872f7c3fae92b66859"],["/2020/12/19/v2rayng/index.html","03486c05fe46d5abe4c7e903076b45ec"],["/2020/12/20/beoplay/index.html","1d1354e6c9b8caf4f6b8a3f51f16367c"],["/2020/12/20/订阅链接转换/index.html","203d4f90e6d206c84c4d29a2be1a15c8"],["/2020/12/21/chrome浏览器下载提速/index.html","1534293ab821022552276e1a25342fbe"],["/2020/12/21/免费128线程并发下载xdown/index.html","24d5ce4d4f1038ac92e40c70b767dcdd"],["/2020/12/21/免费32线程下载软件ndm/index.html","77d75b437eac5cafce5e789716dda254"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","28de6fcada66a6c0e94e914ca5c58c3c"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","e2c65766d012598500fdb3e0da6457dc"],["/2020/12/21/广告怎么知道我在想什么/index.html","4bddcdbb60bcc95fda78c3924b535fe3"],["/2020/12/21/无名·引子（小说试写）/index.html","03a39e577f208f5f058997fe0645cccf"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","74dda54c318a3b06bb10bbf3f77a0344"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","21f10c9876f562d172eb27a30bd1da22"],["/2020/12/21/高速轻量下载器aria2/index.html","e9dfaa1a80c34e24c89a786edb0f042d"],["/2020/12/22/2020-cee-roo/index.html","a819cb4eb5fc73e0a68832dcafc25f2b"],["/2020/12/22/firefox插件、github、steam富强/index.html","30dde48163d008848a058479556902e1"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","98450d9f5e15896167c616ad4a9520c2"],["/2020/12/26/python-day-1/index.html","2951ffcb32fcefce11420ec419f8f52f"],["/2020/12/26/python-day-2/index.html","df781fff60102375ff4ef41550bf08bc"],["/2020/12/26/度盘不限速下载方式一赏/index.html","8b08f5e3ab98704f3f642362ccd5578c"],["/2020/12/26/添加开机自启软件/index.html","c43fc335c0ac41a404c008da69c9bb06"],["/2020/12/26/电脑端截图方式一赏/index.html","742daa8a46079af22192e8f7eecf87ff"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","5f1a8b72d0f4e253439e7e70664ecd01"],["/2020/12/27/最安全的浏览器tor/index.html","3b510a4c14370829f5d240201a24dfbb"],["/2020/12/27/网易云刷等级和听歌数量/index.html","dd5b4af108ed30a4ebc8a61e620e4751"],["/2020/12/28/freenom申请免费域名/index.html","8ced7b5263574e10bfe74e45d8838c7f"],["/2020/12/31/机场/index.html","885a170ef92df8406ed1514d85d26c94"],["/2021/01/01/M1/index.html","c6b9bba9e8601a8e90539cee48c44311"],["/2021/01/01/compress/index.html","861d5cfca7e4c98ee8cffce6151a8af2"],["/2021/01/01/infinityfree/index.html","a6addbeca27d1fbdb1c4298b4bf80d3b"],["/2021/01/01/硬核翻墙/index.html","956b4d25f40c872344d0931465761d95"],["/2021/01/02/qq/index.html","0a0263cc941e140153b42e6c68a98d58"],["/2021/01/03/netch/index.html","7bb60991ecfda232224e6dff69e9f26d"],["/2021/01/03/waifu2x/index.html","56f85514f44f7337d1907c466a29ec08"],["/2021/01/04/ads/index.html","52147776cc5a2d258bc09080495a4181"],["/2021/01/04/games/index.html","f5e78aa89350411cd86000dcafdbb031"],["/2021/01/04/heroku/index.html","19dbc9c19d01c5af5c5004633d0cb58a"],["/2021/01/06/movies/index.html","404380937d9d7032c1ce9c4ab62e731f"],["/2021/01/07/google2020/index.html","3b72bd2e8b24c89e1c5c66cac08dac38"],["/2021/01/07/lucky/index.html","5b1605c386b87d8d9cc00dafd151bd13"],["/2021/01/07/spotify/index.html","2938b09a3fe4ffaf1b0983a43a8401f3"],["/2021/01/07/thunder/index.html","f672ce5e91c6408626e2581cb4f38e14"],["/2021/01/08/adguardhome/index.html","d44d398b92d53189ffe9ffb9e824d72a"],["/2021/01/10/IBM/index.html","ef7548c064c897c3ec752cb9c11cb0dd"],["/2021/01/10/potplayer/index.html","ee68df933632e2357318f31885d3ad56"],["/2021/01/10/sakuraanime/index.html","2977a657ed681a1db30fd0403fb92c50"],["/2021/01/10/美剧星球/index.html","eb9c8863ada53f1af1b92ba6dfeec891"],["/2021/01/12/telegraph/index.html","b44e75fe0ad565b36dc9a02c58469164"],["/2021/01/14/comics/index.html","47839c7320f27f7a2c007e47bb0c52bf"],["/2021/01/14/ftp/index.html","63c935c4ee86936ff9f98157d6e4a252"],["/2021/01/14/oraclecloud/index.html","757d1846bf0f93ec0e95e5de10deb0c2"],["/2021/01/14/porkbun/index.html","3aaf071e873e20ae8e5a8f628d73740e"],["/2021/01/14/powertoys/index.html","38760b23683d8c647c2c9fb443960151"],["/2021/01/14/taptap/index.html","d4c6ae834ec0cb7510105cbb91ccf636"],["/2021/01/14/ubuntuvsftp/index.html","a8a24faec2c66c1def1b7e79cd900df8"],["/2021/01/14/小说/index.html","4a172f77a0f12827ff76bd0f36889962"],["/2021/01/15/freeproxies/index.html","da979cf0494a7356d2b2f3a9e42e5918"],["/2021/01/15/incaseformat/index.html","0dd4a14493309b52f5c74c3c5b92de84"],["/2021/01/16/euserv/index.html","f7596d4dd78514c5919c511fb31f86c5"],["/2021/01/16/winxray/index.html","21d556c5d07e498ef687a1f733d6dbec"],["/2021/01/18/qqreadhistory/index.html","0504cd50cef29e195c876d24b659e25c"],["/2021/01/18/qqrevoke/index.html","569bce710a06f17db1f0a367332ae881"],["/2021/01/19/freevpn/index.html","b4a97df3c8083a6dc7baffc93d84faa6"],["/2021/01/20/browsertrack/index.html","925f05ecec413ecd5acd9e4a56db4989"],["/2021/01/20/v2ui/index.html","bc9c94a73da6c36ed7bd3f11507a2587"],["/2021/01/21/failedtoconnect/index.html","fed4338fe233ab11c3e5553f629af968"],["/2021/01/21/gitcalendar/index.html","87d946a0d2544022f3a5c50b76e5d124"],["/2021/01/21/markdownformat/index.html","ff6995d2cfad246ab372e2e7a287ab57"],["/2021/01/21/markdowntable/index.html","b11eea5afb1e54dd8b5ed7d8223e3f1d"],["/2021/01/21/vercel/index.html","f28d3a75ce846f3eb932369f643af7ce"],["/2021/01/22/hardware/index.html","ed6c407338c52b40cf375770d737de82"],["/2021/01/22/muviz/index.html","4e81bf610bf9ff7f22352f9abd720676"],["/2021/01/22/randomapi/index.html","7a3ffa171b1694c8d5382d7b268ee584"],["/2021/01/22/searchimages/index.html","f4a975c0cdf475800947c0bbadf00f2a"],["/2021/01/23/RX文件管理器/index.html","db8021e0536857c7d7bcf3411ff7d4a9"],["/2021/01/23/chromeflag/index.html","a0fa79b5a6ffbaf1f4f10ad3432388a7"],["/2021/01/23/qttabbar/index.html","704d55f7898c1b19a6583d516c00cb27"],["/2021/01/24/githubspeedup/index.html","8fe9ec8433d16968de6817181492df61"],["/2021/01/24/jsdelivr/index.html","3732554cd60325ba9948bea172f013e2"],["/2021/01/25/note/index.html","9d189187044b93b66267f88fcdc9a380"],["/2021/01/25/soul/index.html","38e7be36f39c1faefb63daa8df8e8b2b"],["/2021/01/26/herokuxray/index.html","12d504a4133ffee6708949b9185ff2de"],["/2021/01/27/proxypool/index.html","b3536f3a254b7d7a046dd6155bf976a5"],["/2021/01/27/tracker/index.html","9627792f0684e5e07e1b894381c171f2"],["/2021/01/30/pandownphp/index.html","99d06128d53ae90610de279c725f6743"],["/2021/01/31/newgroup/index.html","fe4bb7d518759441c3376e32af3413b8"],["/2021/02/01/clashlanguage/index.html","86588ea886d16ac2c52b8f059632519a"],["/2021/02/01/encrypt/index.html","6c763e7b5a5435360f4b405b5d894bb3"],["/2021/02/01/footermotion/index.html","c7f7a22998df2863b5b01df385bf3e7a"],["/2021/02/01/gitter/index.html","a03283554309c2f6a5b32323356a9145"],["/2021/02/01/pixivtop50/index.html","50bb87148caa9d13aac2aa72d0b27632"],["/2021/02/01/scrollbar/index.html","971fa64f268a51fc1682e94627fe8514"],["/2021/02/02/clover/index.html","b6952489b0bfae22af572ff9383545f9"],["/2021/02/02/maya/index.html","f9f0949696195a8a3ce3640f0e63621a"],["/2021/02/02/speedcontroller/index.html","37d419b3704ed61dd6357956ec8e1ac1"],["/2021/02/02/yesmusicplayer/index.html","f16a7fa103f35e024aa5a6acc737be8c"],["/2021/02/03/lenovoonelite/index.html","6252c0ab0b9ff4a7f5aeef32cd21c0fc"],["/2021/02/03/skipads/index.html","2a0c6874c657b2fdf28c49d60862220b"],["/2021/02/04/picseed/index.html","e74399cec131006c59bb3f798cd9f4d5"],["/2021/02/04/renren/index.html","f0c5d0988b35b0d130eaf8d83e0047f3"],["/2021/02/04/serverstress/index.html","5b78b95ed692c35d5d297365737f511b"],["/2021/02/04/wikipediazh/index.html","145341dfdb0318dd4d1876c1b216e69f"],["/2021/02/05/googlevoice/index.html","2f9d4affbbc69023ec517506ef1bac0e"],["/2021/02/06/clashconnection/index.html","105022c5f4df4391b14bbbc545a374e8"],["/2021/02/06/gvtransfer/index.html","59cc34965f7b9f2266da2791acb2ffc9"],["/2021/02/06/todesk/index.html","7edbe614648d51b978515782e72fa084"],["/2021/02/06/vpnblacklist/index.html","d8904ea81b63f370832672fe1b3fc702"],["/2021/02/07/mklink/index.html","3ebfc5f9bee74c90365004d0cb4cad9f"],["/2021/02/07/speedtest/index.html","45195f17094fcf79e2684c2c87a7b7c9"],["/2021/02/07/translate/index.html","22a24b709e47b166976d004086fdb328"],["/2021/02/08/ewomail/index.html","ae51088323aeeda5bfec0515564c5207"],["/2021/02/10/officee5/index.html","f62adaeb4e430c2f9cedc26db0274e5a"],["/2021/02/10/raidrive/index.html","c665adac3bc0ba611c3c073eb02dea13"],["/2021/02/13/e5sub/index.html","bcff580b774d117efb7e54055789336f"],["/2021/02/14/screen/index.html","407d06e849959f9abc3b0a8d0ed68ba2"],["/2021/02/15/clashtun/index.html","417de9b38a7f5c597f4930de6bf8b782"],["/2021/02/15/messageboom/index.html","ce1bc228c5bcdef9558f6861b5d13c9d"],["/2021/02/15/oneindex/index.html","5894dcd4cb0aba3ecdd3da7554c63e16"],["/2021/02/16/govsites/index.html","cc3bd501b1e041a59fe6fd697fe442ab"],["/2021/02/17/hexototypecho/index.html","fbe111f05efd41717573d013b8bdbeab"],["/2021/02/19/fiddler/index.html","9d412b75d9010500a5277b3549cc8976"],["/2021/02/22/potplayerset/index.html","4b0777cf998042eff59284b5d0968eb0"],["/2021/02/22/studyresource/index.html","9b89738c1847f9ff9cc4fba63f81b803"],["/2021/02/22/telegram/index.html","07d01ae0fd125a30db5860182a508510"],["/2021/02/22/videos/index.html","caf5af8964621350b01e20b205783feb"],["/2021/02/24/mtproxy/index.html","4d59e88d5ee0a6b4c6bf980155163b72"],["/2021/03/10/neteasemusic/index.html","8af2c630aaf96235016ae3bc786778e3"],["/2021/03/10/surfboard/index.html","ebd43b60f116a4fe0f0710c039a811a5"],["/404.html","3f7cf2279af0912cbd101fa35acf38b3"],["/archives/2020/11/index.html","ed9cd2375352c066ff62d8aa290cb0d4"],["/archives/2020/12/index.html","06e8298d7a29a0e4786819d736275e31"],["/archives/2020/12/page/2/index.html","ce87555e320303f67490fec6b96bf977"],["/archives/2020/12/page/3/index.html","1bae3cdeea251d1bd19a540b740f886a"],["/archives/2020/index.html","55984378534c1b0f4e33dd32a1be9b33"],["/archives/2020/page/2/index.html","296636d3b0d92a0dd47fcc6ac84ebc1a"],["/archives/2020/page/3/index.html","aaf19a9107c4e4797f6dc41fca6fd939"],["/archives/2021/01/index.html","e333819e96db7055770533c28f761cbb"],["/archives/2021/01/page/2/index.html","87b2cc4c2c84e867833f124454770141"],["/archives/2021/01/page/3/index.html","114812222cf7f8b338ccf626e6cd54f5"],["/archives/2021/01/page/4/index.html","3026268c056675b90ccd18a8c89ff048"],["/archives/2021/02/index.html","e69de314976c2afa49ab56ff0f349b9f"],["/archives/2021/02/page/2/index.html","92ce886a99966525a38370a77d5fc241"],["/archives/2021/02/page/3/index.html","3f4b680fe03a5b93307efa6f1378482f"],["/archives/2021/03/index.html","9ff99df639878128311e151a2249d8a0"],["/archives/2021/index.html","819d9ba9ee95df3268ee90dbe4c7d10a"],["/archives/2021/page/2/index.html","b2024e70bd79766f2499f5b39ea8128d"],["/archives/2021/page/3/index.html","ef2c4897977748f345934364c8fd9360"],["/archives/2021/page/4/index.html","8cbe35a2cdf5d50656c4182d7f2ece2a"],["/archives/2021/page/5/index.html","7d3a95e3f9948d237074db5c07e34b5d"],["/archives/2021/page/6/index.html","51be7196748ad1cae03f0c258df6fda4"],["/archives/2021/page/7/index.html","4cfa38ecd206f463189c84ed96bfd706"],["/archives/index.html","abf60939e8e84695b7f4ae9cb9732842"],["/archives/page/10/index.html","5b83ebcfc3c73983a767690975bb8725"],["/archives/page/2/index.html","bb849ac014f0a8d0e7c3f6a6c0c3a2d2"],["/archives/page/3/index.html","9a827843a39a69659e9b7b9bb9699b20"],["/archives/page/4/index.html","3cb636e2ee6de6fbb7624abc16da3e64"],["/archives/page/5/index.html","bc178adc030ef55fa987304342f975eb"],["/archives/page/6/index.html","ac933c24e0738a2722c57d0b80b25d32"],["/archives/page/7/index.html","9ae51a7ba692c6f4004b86c0167d0150"],["/archives/page/8/index.html","f6c9359e9a743eec66d99492199ed777"],["/archives/page/9/index.html","d9b3945f99db725f89b87b3117b11741"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPN/index.html","6b7aaa7323f056fa73a776c5ad4e7963"],["/categories/VPS/index.html","d6cf421f84634292f35814d013121e16"],["/categories/index.html","d3b426e38fbbac2b415c7b3348735621"],["/categories/下载/index.html","95713a3f1b0049e695f55d98d142cbad"],["/categories/安全/index.html","e5693ba1d7c876f60c0c744fb909d68b"],["/categories/建站/index.html","ca547e0ec9ded7897e9e5f0042fbe7ab"],["/categories/杂/index.html","8f5e90f4f95328a3743d3c97aa89efc3"],["/categories/杂/page/2/index.html","3ea411aaf395f89da4afc7a89eb56ebe"],["/categories/测评/index.html","ca3a0f35a3ddfbc278937f020488ac20"],["/categories/科学上网/index.html","d5552639fde2dbf3a2d62d6862150bb8"],["/categories/科学上网/page/2/index.html","9c06220eb6589c686f02426b0db783ce"],["/categories/编程/index.html","34f10e4719148562597aa349cbd7d9dd"],["/categories/网站/index.html","3630ab7635b7fb7f5cbf67a33a023a1c"],["/categories/网站/page/2/index.html","86d00c69a3264816c1ceb32c34a17f54"],["/categories/软件/index.html","c2cd051b110eb33fad5fd7a8917c5aaf"],["/categories/软件/page/2/index.html","b53e94940a1785de9a45a52d38cd4cae"],["/categories/软件/page/3/index.html","62cabe9213c4598d895d37af901c3e3b"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","b60740dc83011e893a6efb4765fd850b"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","5572aa7ff607844addb2c40c863a5a3e"],["/ios/index.html","a6997bb2d13408ddf61d74f74eb9ca2e"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","96eaa632681621130f5d72905e915820"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","6dc6429c6900bdf8d80962da0b1d338f"],["/page/2/index.html","66b9adb5f03d0bf37d95421fe0773719"],["/page/3/index.html","0bfd2dee228d8ee3751829673b231421"],["/page/4/index.html","ec71c060b2ca248f06a75b800bfe61b9"],["/page/5/index.html","a28f6d89344ce95422778b958c8b14f9"],["/page/6/index.html","674f5884fd4ef4d943ebc4fec33d7a4c"],["/page/7/index.html","8108216e92bd545f0e6e2431c7362cb6"],["/page/8/index.html","9e4bacf7d628d9815e7de588f0a4edd8"],["/page/9/index.html","9686e408d1f8cf94b23f27c9bb181755"],["/payment/index.html","cca3f11a72e7a522de64345344cfc69f"],["/privacy-policy/index.html","19b8b1fa00222e1042ed3c679d0e9599"],["/rss2.xml","4329bef6c74f44afce45531816ad6fed"],["/search.xml","21d3b04b463d9eaba57d1293a33f4f5c"],["/sitemap.xml","e84bfa2dc59265d6e4ad3247c1daf698"],["/sw-register.js","44023a5e1e6732806f22e9c9b71f29e3"],["/tags/5t/index.html","dd98761986317d8e423d9f8b96412ade"],["/tags/Clash/index.html","665abeacf202e7fc569033644a9f3618"],["/tags/Clover/index.html","7b42bd464ba4d8988ea38db3b4d39876"],["/tags/E5/index.html","da136e36a39efa3d914b529de82f8ae5"],["/tags/FTP/index.html","74685a96ebc6514e3ed888249d030f3e"],["/tags/GitHub/index.html","e05f936eda377976741199ad8390293c"],["/tags/Heroku/index.html","3da537272204ef9cfb9b93cfd19c3728"],["/tags/Hexo/index.html","817d63dd2cdeb8e4dba49e333cf335f0"],["/tags/Lenovo/index.html","c541549ed77834aae336dc4ee1782267"],["/tags/Oneindex/index.html","edfb6c5ef4fa82086b7fda9a0bcd73f4"],["/tags/QQ/index.html","d1c8f70efaf209d752f2d54d10fe29de"],["/tags/QTTabbar/index.html","877ffbeacd22b98ee232a37e05a01ad0"],["/tags/RX文件管理器/index.html","d06ef4a26e9db4f99113abbb9d4384e2"],["/tags/Todesk/index.html","b734155a427c86df37ad1c1130e022ad"],["/tags/Vercel/index.html","b32fe746da42c0b6901ee42297464d52"],["/tags/ads/index.html","f61620c06e97b5803fc4003b3fa24f54"],["/tags/api/index.html","28274ca6143b21c62a8831b457654b88"],["/tags/app/index.html","594755af06093ba08b6228ed7020e804"],["/tags/blacklist/index.html","9468aeda5fd5408f25e3c5536ceeb31c"],["/tags/butterfly/index.html","e4bdfe1151231836448e765ad15ba36a"],["/tags/chrome/index.html","5ee4e3957eeb1971bad401338c091593"],["/tags/cloudflare/index.html","9c84087eadb05e9fc22a37f79366ceb0"],["/tags/cmd/index.html","fbed010fe39a1d3e7d7fc4bd57381100"],["/tags/c盘/index.html","5f86764163f64a5cc0bacd2bdbd73c50"],["/tags/email/index.html","20961a8d9f06868c090f75e9bede711b"],["/tags/ewomail/index.html","a7bbcf8a05999f40557af9e03c4e6ad1"],["/tags/fiddler/index.html","9653e0f155f899c039bb95f244592d91"],["/tags/flags/index.html","fbc3c73777f7ff294b103d9f63b151ff"],["/tags/footer，页脚/index.html","3e4b415af19be6ee73b9afef3dbedc0c"],["/tags/galgame/index.html","fdab36f3a7e64170da7fd5e80b31cd28"],["/tags/git/index.html","24616e30375583b83c6cf1a57c79de74"],["/tags/gitcalendar/index.html","526830b0852cd8d4209733f1ac1dc10e"],["/tags/google-voice/index.html","3744cffc87e4d7fc5209dcb8bc35219b"],["/tags/gv/index.html","d6ba715c5ccc226d26418cc60e5e830a"],["/tags/index-1.html","71f2fe13e3429cfd6210acc929dec77e"],["/tags/index.html","4acf37001f537d436f2deaeb7476582b"],["/tags/jsdelivr/index.html","be518bde39d3d0b6ad2539f943d43dda"],["/tags/linux/index.html","e4a282b7a1f4d97e96cede8a537a04be"],["/tags/madVR/index.html","3779a007a0628a7b099cef59efd182a6"],["/tags/markdown/index.html","d9c71089c120b64543ae07b2a60a444b"],["/tags/maya/index.html","ce07bdd231abbccb248d2ddee1c14d4a"],["/tags/mklink/index.html","479822f1a3ee048cd950c3b4d7108eff"],["/tags/office-e5/index.html","1f8e368e753b7c8f7f9bb41387c8a20f"],["/tags/onedrive/index.html","1009bdcee44565458ca6d79b2f35c835"],["/tags/picGO/index.html","b3be15bd7140100e736c3634a08da0c0"],["/tags/pixiv/index.html","f89a0d50d4b331cb4aafffe23352b6e0"],["/tags/potplayer/index.html","808a83d1dafd1594b0c5662a096c6585"],["/tags/proxypool/index.html","3d5ab26133aec23b6f91bafea227ef66"],["/tags/qbitorrent/index.html","b3c2b24da47454c05625703466882967"],["/tags/raidrive/index.html","f5ad30192b776b4bab98a59be6c2aab7"],["/tags/screen/index.html","e61058030698fd9166fda74e56e944d3"],["/tags/speedtest/index.html","715c6773158cdaac710badd8dbd51a41"],["/tags/surfboard/index.html","980f78ad7530adb1b0d12e4d56b9536b"],["/tags/tap/index.html","baa55ec18986d0b794618323794874fd"],["/tags/telegram/index.html","b1b53e80637dcdb778ebdd3ae59d522a"],["/tags/telegram代理/index.html","db1c95884422fe58fe24d53a74929be5"],["/tags/tg/index.html","5ce7bd84d747f3c4b775dacd399be9e2"],["/tags/tg代理/index.html","6dc3725c068186ce40e4f8b5cf05bb8c"],["/tags/top50/index.html","e9daa1fe572e84a1bb58b1e699ab70e8"],["/tags/tracker/index.html","c5cbcb205b78b99cd436883ccf36a559"],["/tags/translate/index.html","2a562ad2dfdd006eb6d6e8083c666653"],["/tags/translater/index.html","c08b55df9af0098b1196ed108a266ae6"],["/tags/tun/index.html","69c6f244aa63c0b0be634ab4f8b947af"],["/tags/typecho/index.html","7bc9f5e88f96ebe201bba4f489450c1a"],["/tags/v2ray/index.html","9719eda705581cff744cac5cee31f929"],["/tags/vpn/index.html","cc1410c23497e4bbe785a6a4b590f202"],["/tags/vps/index.html","e7fa2018dd4f01e90bef0448f4b0c09a"],["/tags/windows/index.html","ec9e9d329dfca516912b8bb88bf45355"],["/tags/windows端/index.html","8b2982e9db453e03cfd1e6954d90ec2e"],["/tags/xray/index.html","4561e2a207eb8f159d512b2ab26366fe"],["/tags/下载/index.html","abb6f8a189176dc4eae53bee11c82161"],["/tags/不限速/index.html","22cfe7a0c75128d824dbaa6691f63632"],["/tags/个人网盘/index.html","e5c5494bddf03be34bda8b62326be9a5"],["/tags/主题/index.html","0ff3ec9576bef059822da36e44b252a5"],["/tags/云便签/index.html","3c6192651dd8b24eb9fdcb16409334e6"],["/tags/云盘/index.html","232ecac0bb40b9d838274a926c53dbf6"],["/tags/人人/index.html","f9e7aa9f65dfa46d48aa3a1f8b0d4273"],["/tags/代理/index.html","a8536d0fc39a3a2f088eb2cf0e903333"],["/tags/代码/index.html","2bf860b51efdd7537407e717ad82d07f"],["/tags/优选IP/index.html","f37847b2f01b0d1a4ce5792bfc954a9b"],["/tags/便签/index.html","2fe29fd65711e944d2f2081d689221b4"],["/tags/保号/index.html","6c54add570c141ca62e2d58be313d4c0"],["/tags/免费/index.html","11bc300ff8b6abe7954c8093abd77c0e"],["/tags/免费节点/index.html","7c98af2957f7a403eb2b23a6bb72167f"],["/tags/加密/index.html","b26afb4d7b50c3407644f938ca9943ac"],["/tags/动画/index.html","93618288295c7f96d2412e87ff2be9f4"],["/tags/博客/index.html","385ee8b85bb667b00aae12a9a722a809"],["/tags/历史记录/index.html","ca9ffeeaaaa4556e1ff043d3e5b6dd1e"],["/tags/压力/index.html","30fa2a7ce169219d3b2edc81fbb8bdf7"],["/tags/压缩包/index.html","0fc35bf65dd2a588a674d82d91727a2d"],["/tags/反代/index.html","566e5ed6a246a4aba969dbe4a3673474"],["/tags/可视化/index.html","e0fa0a278ec4ecd50c593cd5a30e10b2"],["/tags/命令/index.html","0c392478af896dbee2e46a475dfe1dcb"],["/tags/国家/index.html","4f3cf2a6bd476cf8b9189fdeaceef174"],["/tags/图床/index.html","a561cf92f0f491bbd5fd125c460279f8"],["/tags/图片/index.html","586c0e048653374da72ec389e82d577a"],["/tags/域名/index.html","69c2746ca557272cb6a36a8a76d08b9f"],["/tags/多标签/index.html","401553a231cbc9061a3a94498b14913a"],["/tags/存储/index.html","7a93e0e8b6295abb35a1e5f0c2387f6a"],["/tags/学习/index.html","b6e194838c8e43495f5b3e1919943f26"],["/tags/安全/index.html","324ba7bd3eaf7c6d28f3798f7f91ea01"],["/tags/安卓/index.html","a505a2546fff6da08e8f7c89d4846471"],["/tags/宝塔/index.html","4eb28fa8674abe9fcbe54e526f9ea63e"],["/tags/广告/index.html","4cc1c2f93188b11ce6a0dde625685cf4"],["/tags/建站/index.html","7fea2890f54f3d23e4d715c68376f61b"],["/tags/影视/index.html","f6da949e696fe5011e59d3d8e16a5780"],["/tags/快速启动/index.html","03068f26c1cc9583dc8329defeab5a26"],["/tags/手机/index.html","44319015a90331e19aabee5b55cd146a"],["/tags/托管/index.html","c8e08f90c211213f35c9b5a8947abd1e"],["/tags/抓包/index.html","56c0b5a9aa32749d79bb20444da1d92d"],["/tags/抓取/index.html","bfb8a93f3e336cc21ca645997e24d9b9"],["/tags/投屏/index.html","fb9a981b16bf398e96c1354a47a237a7"],["/tags/拓展功能/index.html","aac13178de930a8c07d5cfb344600e27"],["/tags/挂载/index.html","9f4eb7a4dc00dbacde0ed361b2505b25"],["/tags/指纹/index.html","df29a98ec5b3285126f9b57516e86835"],["/tags/接口/index.html","1080f4f97ee556cee174944a1df7f1c1"],["/tags/提取图片/index.html","68505fd707fc15abe7b4226c5b31d433"],["/tags/插件/index.html","b7415064b35d92f78cd2be8f1d4157f3"],["/tags/搜图/index.html","0fb1dcca0b54918a6a1fe9e7cf22ff4e"],["/tags/搭建/index.html","d6ab905ace51aade77b29b78bb1afea1"],["/tags/撤回/index.html","f69dd2a0a0654fc9ab5e23e784870af2"],["/tags/播放器/index.html","48c285c18f4a083507324259264a5df4"],["/tags/政府网站/index.html","8d44d682343d30ad8538c48db0bfbdba"],["/tags/效率/index.html","debd4208ebc6652a5556dcc52817b73c"],["/tags/日历/index.html","906c47ad0043fd6b9c098f6191913e7c"],["/tags/服务器/index.html","75673270d1d1bbd7be9783f0f153773c"],["/tags/桌面/index.html","9edccf09bcebca817d514c8704c01de6"],["/tags/梯子/index.html","6ddb9255ff273b4162c65b010cec24ec"],["/tags/检测工具/index.html","5a6249ccf065bf65c437c8e40e75873c"],["/tags/汉化/index.html","2f3122c3257312c9f5c2c4880dd035e3"],["/tags/测压/index.html","8ecb4509009588aa6ef9b738dcef4277"],["/tags/测速/index.html","f1134ba480f7e6139dbf347292bcdcb6"],["/tags/浏览器/index.html","9475c6a077ed1e2e26faa6f28a458e71"],["/tags/清理/index.html","cb7a4b182132238975e0d9cb703b872b"],["/tags/滚动条/index.html","af685cdac88230c9ecf0e9b591bcdcf3"],["/tags/灰色歌曲/index.html","50888ccffa21da189cc1a56ac500ecf9"],["/tags/电影/index.html","3e70b656e5512098835efae55a3e27ad"],["/tags/电视剧/index.html","9f791abefefabbc1481cf965f70865d2"],["/tags/白嫖/index.html","24fda834eaae54e424dd1b2d09f1c285"],["/tags/百度/index.html","a18e79841d1d02219f1f31f2aa0e7f35"],["/tags/百度云盘/index.html","4e3af5347ad8132bd9898d8bc8abf561"],["/tags/百科/index.html","ef9eddddcf53553e1fc34a0cd55ff4b2"],["/tags/短信/index.html","731ac6e111891970700d441a34cb49c7"],["/tags/硬件/index.html","5780f7605673c24d360a42b24481e2e2"],["/tags/科学上网/index.html","e17696a8a8f3ef5502a5a28ca28cb7be"],["/tags/空间/index.html","13bde75e755f17b35e608b1bf33eb895"],["/tags/笔记/index.html","332ab5de92b2844913d0152c6d4c79f4"],["/tags/简洁/index.html","fe9bbf1aafc197d8cf708f294afad905"],["/tags/简约/index.html","696b5445b2c1f006c08ecff284a706da"],["/tags/维基/index.html","446ba23e82bec1c8bf92a03ceb322551"],["/tags/网易云/index.html","17827daccecb51752dc9a20f4c856eaf"],["/tags/网盘/index.html","a72d0be56b0d5b34e0609af3de7ef169"],["/tags/网站/index.html","b0820559537a9c8cbceaa1261a4c9ff8"],["/tags/网络/index.html","0239836aa951138c02b56ce5d56c8d7c"],["/tags/美化/index.html","a707bccfbe9131295e090032b6918553"],["/tags/翻墙/index.html","6497514fa7a89ca4df0d5436cbdc631e"],["/tags/翻译/index.html","db7ba3460d04f50230fd40b512436a68"],["/tags/翻译器/index.html","3468ab06772f7f3130031963b87b751d"],["/tags/聊天/index.html","a5d2c1ec4aa4a7b14901b8d10276e117"],["/tags/聊天室/index.html","796bbf3a712e9e1c7ac19cdb913ec230"],["/tags/联想/index.html","3bef634297b8d70dc5e74b188198c800"],["/tags/节点/index.html","13ad0a4e873c67ff260426f6e3662e94"],["/tags/虚拟手机号/index.html","0abd9df856f14ec8ab89cb5fb42b3b0f"],["/tags/补丁/index.html","5c8da05b1ba80fa10b97d7080cf0f865"],["/tags/视频/index.html","3f1caf9abf3139929a5194e2a40cfbea"],["/tags/解析/index.html","f4df71340279d9d1ebfb83d074b9957e"],["/tags/订阅链接/index.html","50aef52b1176cf7cb02ff2be8dc841e2"],["/tags/记录/index.html","b834dc0372e5eb141d9b4892890b72b0"],["/tags/识图/index.html","b9111f62310169cad884e8207491812c"],["/tags/语言/index.html","266d893d837eac3847f8deb45005f3da"],["/tags/资源/index.html","544f69032599fd1cdc1a2b32342219d3"],["/tags/资源管理器/index.html","ac40b8320de6b16bedb5c391b304d2c5"],["/tags/转移/index.html","972d84fcf02b87ac48159702b8195024"],["/tags/软件/index.html","0ff8ce77319974227faefe8fd7b7f8cc"],["/tags/轰炸/index.html","e1643cd8614d4cc266eb75e4ac3e4cdf"],["/tags/迁移/index.html","4462dd10ee9539894a214b4e50ed0348"],["/tags/远程控制/index.html","e3a8866137be8df9aab343a2311e73f2"],["/tags/连接/index.html","d1045c0aeb13301d25a7c214d323d64e"],["/tags/追踪/index.html","f0d134a8fac7f6f08d26c4613674442c"],["/tags/速度/index.html","ec1fc8770b8553e9df9388b1400e485b"],["/tags/邮箱/index.html","553fc651660278cc31155ec05cbd1cef"],["/tags/酷炫/index.html","99c8b9156c702870badda26b24e89c59"],["/tags/钓鱼/index.html","cba64c0bf781ba268bf61e36687afd0b"],["/tags/镜像/index.html","c040fa0d80517106678ecc1db22d3eba"],["/tags/随机/index.html","6881936013e9e5d1c33d4ba92f48743f"],["/tags/隐藏/index.html","98d6f490a6c08d76f36ccb1351a3217c"],["/tags/面板/index.html","08f1730abea67a79bf20ee0d0fa6ff74"],["/tags/音乐/index.html","e3e7b16f251118109581f554d2830155"],["/tags/高颜值/index.html","8540979f92921248f4cb3c123e7fb7a2"],["/tags/魔改/index.html","198a3f4c13da0a718fbfe502c8cdca01"],["/tags/黑名单/index.html","435609fa62916ee508ff81ca9211dea0"],["/urls/index.html","d6edeffbe09437ac593b975cd5e29c99"],["/vps/index.html","decf656ca6dcdd46f3071fe6967e8ef5"],["/支持/index.html","bcd0e8fa2705e46ca40d9b0c79830456"]];
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
