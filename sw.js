/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","6bf7cc7e60a3828e9b1d30e3c2f1e692"],["/2020/11/29/clash-windows/index.html","848679ad636d7f546f7b252652ea38c3"],["/2020/11/30/websites2/index.html","668dc5ec7e2c32298791d21df1a6af82"],["/2020/12/04/iphone4s/index.html","52303f275509bb0adf7d76e624bc6a0e"],["/2020/12/04/onenote/index.html","6f62be9d2e31028a09cfc57453514317"],["/2020/12/04/wesites1/index.html","85612bfff96111af46fe561d4c046ced"],["/2020/12/06/nokia808/index.html","90b9ab859a84b1d663f4174f4f1a3d11"],["/2020/12/07/ipad1/index.html","aa6d692c1d445ea3230c82c7a33a68ce"],["/2020/12/18/freesubscribes/index.html","f187c82e6d7498789d39397e8984e81b"],["/2020/12/19/musics/index.html","2b703974ecf461ca23476b922dadb5da"],["/2020/12/19/shadowrocket/index.html","da8d4a142e6886e0fa86f9c1e91a73cc"],["/2020/12/19/v2ray-windows/index.html","b87c224135e1657d2555b7a3b0cfe792"],["/2020/12/19/v2rayng/index.html","8a1328b0eba6fc9cea490c3700241c04"],["/2020/12/20/beoplay/index.html","808b00e6a183b94da136eee79ae41664"],["/2020/12/20/订阅链接转换/index.html","78c4408e98c0dd751850cae6ed259b4b"],["/2020/12/21/chrome浏览器下载提速/index.html","be02dd6ae240ba9f5da7cbfee3cdea82"],["/2020/12/21/免费128线程并发下载xdown/index.html","ae72614c73defb973c70f85b881ba53c"],["/2020/12/21/免费32线程下载软件ndm/index.html","db33d242e3c448d0e32a6a1980ce04a0"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","73866fa5ed3b84e178ca583395e306ff"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","8031c910df69320770aaa816a40ec518"],["/2020/12/21/广告怎么知道我在想什么/index.html","6969849dec4a83cef05e4427bcbabb77"],["/2020/12/21/无名·引子（小说试写）/index.html","482be76afe6a0858c5ba3fcc765c9d5c"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","0d457a6f903c16123095825ec5407bee"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","1f4bd5dfcad82289035775dfbead0d5b"],["/2020/12/21/高速轻量下载器aria2/index.html","2d515ecc395980a1a53b6c1be910920c"],["/2020/12/22/2020-cee-roo/index.html","29bedd6b8271740382814b2882e42982"],["/2020/12/22/firefox插件、github、steam富强/index.html","89f85db23b87c166e3a2fd9846c096f7"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","cfe891ab9e3bca0fa5d14cfd27337962"],["/2020/12/26/python-day-1/index.html","805fb37afdf78f1f1fb179184a8a6a6f"],["/2020/12/26/python-day-2/index.html","7cbaa505577c81e9cfede08e87f54b8c"],["/2020/12/26/度盘不限速下载方式一赏/index.html","ed18eefbad1a1041729b4cd05accdc9d"],["/2020/12/26/添加开机自启软件/index.html","bf449e92259479d7e353d274ab0ea8ce"],["/2020/12/26/电脑端截图方式一赏/index.html","d9acffa19c3eea46633ef9ab8588b487"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","b010086a740ee6b7aa6bcb8c7d8f674d"],["/2020/12/27/最安全的浏览器tor/index.html","655f2d97dd16e70a6fb28ad7514d0a72"],["/2020/12/27/网易云刷等级和听歌数量/index.html","4ffdd4cf5e1e72be08de3706362b9522"],["/2020/12/28/freenom申请免费域名/index.html","c2d4ffa136b8c9b69b7eb0300ede772c"],["/2020/12/31/机场/index.html","5c6bdaa2f390f32f431dc791e5b056ec"],["/2021/01/01/M1/index.html","6758272ff17cd963cce4963152f562c5"],["/2021/01/01/compress/index.html","7edc9a19b15a20ccd6bbf6bdc3e1c552"],["/2021/01/01/infinityfree/index.html","af209abb84bc3198e831d1570bcf7b99"],["/2021/01/01/硬核翻墙/index.html","d067223edfab9bc932c81a2f23324076"],["/2021/01/02/qq/index.html","e690c0556cec2467c05f4efacde4779f"],["/2021/01/03/netch/index.html","1f50d62873e51ce48a4906f9e18ff5af"],["/2021/01/03/waifu2x/index.html","6701fd3b3e63bbc7ab738239ab2fd008"],["/2021/01/04/ads/index.html","bc527ab15b4d0eeca6a366293647bc3e"],["/2021/01/04/games/index.html","ce09873eac8204dbb9d1f33fd59bce2d"],["/2021/01/04/heroku/index.html","7ab82340785d06e4fc3041385e2e77d4"],["/2021/01/06/movies/index.html","669d37138e9554de1273c356cbe4ca88"],["/2021/01/07/google2020/index.html","90ad71740a4a43e1e9e075e9716c1597"],["/2021/01/07/lucky/index.html","97421cb9d1b6ab04f84cf598644cad0b"],["/2021/01/07/spotify/index.html","3ba585152e2a7dc01c5c1853ded139ae"],["/2021/01/07/thunder/index.html","ab5c880455bf71e4b6fb7679263e5cd4"],["/2021/01/08/adguardhome/index.html","f391fafe96ecf429ba516e85fce07cb2"],["/2021/01/10/IBM/index.html","4366350d88618a3e50204c4114c3032d"],["/2021/01/10/potplayer/index.html","bb7914f42d5cdde93c4b3e2e79f37a33"],["/2021/01/10/sakuraanime/index.html","9dd513ddf237a4cdfbdd0f8d3ea55314"],["/2021/01/10/美剧星球/index.html","e30784a28f70e73c6f46ece00451a33a"],["/2021/01/12/telegraph/index.html","40a7b10562a49192a32685be84b61667"],["/2021/01/14/comics/index.html","cb66f7bb700298a03bc7329f24ec37ff"],["/2021/01/14/ftp/index.html","1b37e8f3e4b0462e89c2a585fa12b06d"],["/2021/01/14/oraclecloud/index.html","5089396bc2ce0a50c7976723d359e25e"],["/2021/01/14/porkbun/index.html","494b8b0f8dc27c9f74be40d19378563e"],["/2021/01/14/powertoys/index.html","deecaf09959a216713dcca9e43e6de94"],["/2021/01/14/taptap/index.html","abdde68f4e9eb9796557c289ce9d547d"],["/2021/01/14/ubuntuvsftp/index.html","7d564c24fefdc459a998ce94eb0ffa48"],["/2021/01/14/小说/index.html","068b89f46246b240a50f93a4a1cb20a1"],["/2021/01/15/freeproxies/index.html","188ded84e550d4ab8ed29d1afcb07ffb"],["/2021/01/15/incaseformat/index.html","6b3cf90f09e2c99ecaa48f434481702e"],["/2021/01/16/euserv/index.html","87d9c8a6dddae4a7b0a2defec35cfd64"],["/2021/01/16/winxray/index.html","eeb3280cea697b6ed963f4b6212a4fea"],["/2021/01/18/qqreadhistory/index.html","a28562eeb0f8124be1ecfc129a9eb98e"],["/2021/01/18/qqrevoke/index.html","c4acdedfb4fb7fc105e16a4ec8e631a1"],["/2021/01/19/freevpn/index.html","57af32e6d03f49aec10e8e88b0dbf39a"],["/2021/01/20/browsertrack/index.html","e44bef6bb37950b663e1b7c424fe5b6c"],["/2021/01/20/v2ui/index.html","2b1913bb45acf738f404298ddc179224"],["/2021/01/21/failedtoconnect/index.html","209e6944f65f683829eac8cc89646393"],["/2021/01/21/gitcalendar/index.html","37bf65dc3316f27ae4191397a574efa6"],["/2021/01/21/markdownformat/index.html","e0dd9c176c4731ed8f83e1a3cfd12ddd"],["/2021/01/21/markdowntable/index.html","9861cf25f7b04643158c38789821d2fe"],["/2021/01/21/vercel/index.html","107fd934eec1c46ef0974fa3fd1e540b"],["/2021/01/22/hardware/index.html","c5fa2f64be8315491c2a16c65c3a9555"],["/2021/01/22/muviz/index.html","3c2222c4ebeff197f67967aa8162307d"],["/2021/01/22/randomapi/index.html","03e07940021b1c87d8f97166fad04942"],["/2021/01/22/searchimages/index.html","f21672642c6f5d3d2423ee82be9620ae"],["/2021/01/23/RX文件管理器/index.html","df73bdfcbe49460fcd8bee6a1d5aad93"],["/2021/01/23/chromeflag/index.html","61937a4adffb038bf78366886783c877"],["/2021/01/23/qttabbar/index.html","cbe754434c7982c871e0fe43b66fa40c"],["/2021/01/24/githubspeedup/index.html","cf9039ee1a9cd70ed2ddb0563a3ba430"],["/2021/01/24/jsdelivr/index.html","7bc70ef1f14603b48904b10dbe4ef566"],["/2021/01/25/note/index.html","a8a5283d32a67aa95b5213b23e122edf"],["/2021/01/25/soul/index.html","90bda3cf80222903ed9b602ca959033d"],["/2021/01/26/herokuxray/index.html","7a1d494cee2b76707fd8b12b3b0f6e07"],["/2021/01/27/proxypool/index.html","85b87a4c9b1f49dadf58b5e532838419"],["/2021/01/27/tracker/index.html","8dd5a8289d6b41a5264548e3c926f3e8"],["/2021/01/30/pandownphp/index.html","57e3b557813275284686f4e6df77b5c4"],["/2021/01/31/newgroup/index.html","50037950f1a60c27cba7f4b1ee96aea4"],["/2021/02/01/clashlanguage/index.html","d02838429a6bef4dee7dc4335118414a"],["/2021/02/01/encrypt/index.html","cfd19196894c7423d986309ea66b5fc0"],["/2021/02/01/footermotion/index.html","05d42d192e96e14a3579dbce7c80f7be"],["/2021/02/01/gitter/index.html","ba9ff0783c73f6b496535f5f5aeaf2bb"],["/2021/02/01/pixivtop50/index.html","6905ff72dd0b94f10aae1f806856a3b5"],["/2021/02/01/scrollbar/index.html","5b4d5943f3f49e257e1d175d331c283a"],["/2021/02/02/clover/index.html","b46878d1acda9f28300f3a4a1ef58fdd"],["/2021/02/02/maya/index.html","12409ea0fbb015bce06b92cc84802c32"],["/2021/02/02/speedcontroller/index.html","f2f4b1b4dad24149d6cafa705090aa4c"],["/2021/02/02/yesmusicplayer/index.html","eb2d3e976240c01c052625cf0947c4e8"],["/2021/02/03/lenovoonelite/index.html","648810a3cef5ed30f9bcf613f1b11986"],["/2021/02/03/skipads/index.html","dbde97f63f141f04e96eef51e4ce74b9"],["/2021/02/04/picseed/index.html","bb469763ea0459002427496506e69ecf"],["/2021/02/04/renren/index.html","8c48e255a06fa382a2a8197d64a47fc0"],["/2021/02/04/serverstress/index.html","9c949a09a624ba57606c20ba2dc3f0a5"],["/2021/02/04/wikipediazh/index.html","f7e3175bb07e7eaf18eed59e7c9e1287"],["/2021/02/05/googlevoice/index.html","9c9665bad95caa86f2fcee8ea277a5ee"],["/2021/02/06/clashconnection/index.html","80aa0c157b3d3ca82b7c8d7ff4028794"],["/2021/02/06/gvtransfer/index.html","6f6ab996683cc859bbf3cacc179ec560"],["/2021/02/06/todesk/index.html","6f3ed598889a4c3e84bba205aeb6e4eb"],["/2021/02/06/vpnblacklist/index.html","46683be51779bcb2be5afd62c009469c"],["/2021/02/07/mklink/index.html","8a52b2294e0d9435a9db7da58b35d58d"],["/2021/02/07/speedtest/index.html","eed1c6780d156132a11107e5799eac0e"],["/2021/02/07/translate/index.html","f5462f02e2bfe64625762f19c67943fb"],["/2021/02/08/ewomail/index.html","3800470c66a99fe6c63fe1da4b1a49e7"],["/2021/02/10/officee5/index.html","fe0b31f46ef777224f537eb697f36dd1"],["/2021/02/10/raidrive/index.html","9adb7675f43647dc8fd6a4c62406ac64"],["/2021/02/13/e5sub/index.html","780b44f065a885be195a2cc22a02686a"],["/2021/02/14/screen/index.html","7f2af7dad6258b6db0b430ca0f801c48"],["/2021/02/15/clashtun/index.html","d025af7615f69db27291ff00a926af47"],["/2021/02/15/messageboom/index.html","4c93811a9fa3eb8e5f6644f69a637f3b"],["/2021/02/15/oneindex/index.html","76562ad8224c41759760a66dd4e89855"],["/2021/02/16/govsites/index.html","dc4a73b4341b321021cf318e3a753f22"],["/2021/02/17/hexototypecho/index.html","91352b726bc7595f2a440021a10b4c10"],["/404.html","7e071b4305a29cb550aee6c43941b81e"],["/archives/2020/11/index.html","0f61e348daa825c6c13e478919904ea7"],["/archives/2020/12/index.html","bc54a6a7a3376e1157a9ed5699c3e4d2"],["/archives/2020/12/page/2/index.html","e6742a85cb4c04cfa0812873573d118c"],["/archives/2020/12/page/3/index.html","6e5fe773119de3cae77d255dce388dee"],["/archives/2020/index.html","b3b4c94c7cb641062d2b72446c80fc75"],["/archives/2020/page/2/index.html","d30dc99f1837534e3a06d75a8e8637ff"],["/archives/2020/page/3/index.html","0421732f0d9862d93689341077d2f2c3"],["/archives/2021/01/index.html","bac131115b6a338226c6b2f69670be8d"],["/archives/2021/01/page/2/index.html","83100b90517b8a99fbffb51b441c7f97"],["/archives/2021/01/page/3/index.html","59b2d46822eaea62ee2f293afe30ad4c"],["/archives/2021/01/page/4/index.html","a2536fc8128c99dbb63e6a103ff51769"],["/archives/2021/02/index.html","56d48110dfb7fb7cc61877f6b9cd803f"],["/archives/2021/02/page/2/index.html","031b4b7466bcf11996649cc23c7b011d"],["/archives/2021/02/page/3/index.html","537249707a5a76fc50aad2ccb00d19c5"],["/archives/2021/index.html","d2c71a78b925dc6d827a4c34c08aa0e1"],["/archives/2021/page/2/index.html","b7101f832a9bb8d6f9abb8acb7f9a9f6"],["/archives/2021/page/3/index.html","57a8e919812a1ba089a877d23257f557"],["/archives/2021/page/4/index.html","ffbc646f81a5d7e57005a339cea69b23"],["/archives/2021/page/5/index.html","5db888b4f1996176656f8f1658a7952d"],["/archives/2021/page/6/index.html","11c80c676e40b348aca63c75d1f5c851"],["/archives/2021/page/7/index.html","cb785665a1c3747b43c2e423a298f98b"],["/archives/index.html","67d6681fe7c27708a636ddc5d02500b0"],["/archives/page/2/index.html","e431d19fee61e699b8747a730c93116c"],["/archives/page/3/index.html","3cf09df9646e55f946161141da456c6c"],["/archives/page/4/index.html","5f626243829a56228406368fbe02eaf6"],["/archives/page/5/index.html","5ae5c4fa22423c73191495dd949f91bd"],["/archives/page/6/index.html","7d2f1e7c4bfc2f5a77039c2d0ad20a03"],["/archives/page/7/index.html","d5fb3f120dc88010eae9ba306e13a416"],["/archives/page/8/index.html","f8968b777f364bdb615e651623cf4571"],["/archives/page/9/index.html","beba4ddcdc57e6c4344d00e6c31cab13"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","82625840922a6a3dbbc1a7f4e68811b5"],["/categories/index.html","13f12d43c53d52b0c49d89b6aa3c2d75"],["/categories/下载/index.html","673072b98451500d8eb16e1159702ab6"],["/categories/安全/index.html","c8fa2e83cd558e55fce99f48940df461"],["/categories/建站/index.html","ed0b02adcff2a2d8cc9cdd04b3f38221"],["/categories/杂/index.html","9cf8491a80e8c49760f0bdbb49405ce5"],["/categories/杂/page/2/index.html","2127dda4567fa71618e5f9ddfaccac97"],["/categories/测评/index.html","813986c3225d64826317f3e6cc61d78d"],["/categories/科学上网/index.html","e19383d3063e9ae04ce59d30e7bc44db"],["/categories/科学上网/page/2/index.html","04bb56a26b9f6920fa7476a26adcc8af"],["/categories/编程/index.html","7370b73c42e217a64017abf3f24c3627"],["/categories/网站/index.html","783b817585ceee84f2a576ff42dee278"],["/categories/网站/page/2/index.html","74a8cf6703f1752819fd00699aaf0362"],["/categories/软件/index.html","8ab8806b0a042a4ff891d3a6051cc405"],["/categories/软件/page/2/index.html","7c83b4adda4fb75db6825a20c97f38bd"],["/categories/软件/page/3/index.html","357a1b7e076cd11468ae35f0628b9eb8"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","639e93adb86b49c151bae4e03f96f91d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","7ccafc2097c312aee139ff0b89f798b6"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","41f24f6e8b1ca898437eb4a11b5c8355"],["/ios/index.html","28d0681ea456cffa4651dbad423f75f1"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/2/index.html","31454c808088788635aa311a59046190"],["/page/3/index.html","9b0b2adfcc5f7d854c128c179eb86a37"],["/page/4/index.html","5c45dc904ec92ab4e938608ec1e2af2b"],["/page/5/index.html","461561732840d592f85cdbc2f33b31c7"],["/page/6/index.html","d36570ee8441b9e7f1ca666836da3785"],["/page/7/index.html","0086b890b7120f306df24cce949f9f7f"],["/page/8/index.html","49bcebb446a69c9483309a9deb91106a"],["/page/9/index.html","805fd8724bbca8cf87cabf37610195f3"],["/payment/index.html","97d0b092dddfc23dd939a1a84d1624fe"],["/privacy-policy/index.html","0700f579e108dae75240dc022142e481"],["/rss2.xml","e02fbc4121cc466b935e2691de5e8e3f"],["/search.xml","2aa0ce6e6ecf50ec6b81d19daa94162f"],["/sitemap.xml","6fd070cef048a527cf31210e5bc8f257"],["/sw-register.js","fd3c1a6983ea1f9b1b46277687667601"],["/tags/5t/index.html","faf3fc042d1abb2ea35d3c8965e3c431"],["/tags/Clash/index.html","f244a622612fe7c045d388e701a12dee"],["/tags/Clover/index.html","c1cebe75d9a035772435bdf3f3c7374e"],["/tags/E5/index.html","bd3236955ee1f8196898e1b75c7f72fc"],["/tags/FTP/index.html","2c0c83482f5afd255c1715cf1fad6752"],["/tags/GitHub/index.html","e7915e305208db20a3f504635ec29d2e"],["/tags/Heroku/index.html","9fb7eae87788f92cf0bdf2ef5515885b"],["/tags/Hexo/index.html","d7d45424c0af56d8bc262bac54df2431"],["/tags/Lenovo/index.html","6a6d4ea92c65b3a5b2275145165452ac"],["/tags/Oneindex/index.html","f29ba793eaaa9e2124fb0a30599317c0"],["/tags/QQ/index.html","a34a1f9ef0af48940546d72ec0e7418a"],["/tags/QTTabbar/index.html","40e940b6e5b1db4c2f44b17613d5efad"],["/tags/RX文件管理器/index.html","7d96a66b86ce6691c6a8837033a4c8ce"],["/tags/Todesk/index.html","670da98382bc20825db03c2d2c5fe08e"],["/tags/Vercel/index.html","2eb865fa2e3c9b09f8c4075f8831caf5"],["/tags/ads/index.html","405b30a7c2402ba308d23e47cd89c19e"],["/tags/api/index.html","91558bf8d3a9efe71cd9d8854d20a331"],["/tags/app/index.html","3afbaf77ee557b7bfc1c7338eae55b6e"],["/tags/blacklist/index.html","0381d35c9c08dbc736a951c0d59c47c1"],["/tags/butterfly/index.html","abf6fe5945c93a369ea5dc03ac9eba3f"],["/tags/chrome/index.html","9062bcb772ed96f8a26f440ca45dea3a"],["/tags/cloudflare/index.html","18aa2cf54f859d1fac4c3724e690a994"],["/tags/cmd/index.html","06b33443404337e91e7d317d78e6192a"],["/tags/c盘/index.html","fb5153b0db4d583b1188202e5e030b16"],["/tags/email/index.html","bee8756d4e2b1f2669c54ed6ed7d770f"],["/tags/ewomail/index.html","7a4b249b50c33e0c8ff6be343892850b"],["/tags/flags/index.html","3dbd57284e1890c17bcbc5dda3f14946"],["/tags/footer，页脚/index.html","ce3326ef2a8e65a78d4c8e0791b47a49"],["/tags/galgame/index.html","f38437ba86281b1d37f42c4f11dd9624"],["/tags/git/index.html","ad522fc17b0144d5474d4d38c3bec651"],["/tags/gitcalendar/index.html","d1cc4fce421c3d716acdc1ab1b8a97b9"],["/tags/google-voice/index.html","72a243d7b3e43d93b4c0d6eb11681faf"],["/tags/gv/index.html","4435375c35997319f2799988e112abb8"],["/tags/index-1.html","ff82efc23785e74a81b685fa0e09b9e8"],["/tags/index.html","8fd5afdfb9055d726d0f1595b0d45e2a"],["/tags/jsdelivr/index.html","526addc6053000789835c80fc547adfe"],["/tags/linux/index.html","43f68f33407a7e87987c3a119bf197f0"],["/tags/markdown/index.html","f219ebf2b85fc148ea0b3d5798c1fc59"],["/tags/maya/index.html","59577fb09c96f6ec1d142824915f3996"],["/tags/mklink/index.html","33645b65706847cb8c4de0dc6d202dd0"],["/tags/office-e5/index.html","febe068098a60e78c7388a1f8227926e"],["/tags/onedrive/index.html","a3a77e98b2a0fbedda740fb282b33cc9"],["/tags/picGO/index.html","f9a1565880677a604ffa39813844222a"],["/tags/pixiv/index.html","54f8a706dea2eb2f1567dfb0beef6f8a"],["/tags/proxypool/index.html","5386c169bdbd7423b522d0b6e83f4a53"],["/tags/qbitorrent/index.html","8ebb74c359bbab926d86525fb1f4e8d2"],["/tags/raidrive/index.html","88498c949f09b07626b32331f6dd3a2a"],["/tags/screen/index.html","aeb4dfc03ea5a721590abb80b000e42d"],["/tags/speedtest/index.html","f2ad88ddc227bbb3d24dffb5e6f070dc"],["/tags/tap/index.html","bfce8277a9355af3522ca461e2398775"],["/tags/top50/index.html","524f27dc965ba7eb1a2737b8f186cc72"],["/tags/tracker/index.html","51ddea1e1699fd52af4c05bf6143766d"],["/tags/translate/index.html","9cb31fa3772703a510902f7547fb1080"],["/tags/translater/index.html","bf6fe958208db95b41d52b1a387f042e"],["/tags/tun/index.html","ebb35a8e454b872e7095e2bee3eddd63"],["/tags/typecho/index.html","af81240a05866c67a64c71bd7e6dff89"],["/tags/v2ray/index.html","c9c3790615218c6031bd5f4d23c41394"],["/tags/vpn/index.html","4c1903fa3ff07c8c1cff2f1dc247e2c1"],["/tags/vps/index.html","e585bb9dbc167badb5f9c47a841dd4af"],["/tags/windows/index.html","0f6e9bb52268a4f0132f16d8557261e6"],["/tags/windows端/index.html","691da4f4fd839ddeca4b365328e00e76"],["/tags/xray/index.html","ffe9b4e7bcf4b21f80bf0667471b4410"],["/tags/下载/index.html","6a8d67dbd24a0588bf190c1d998b9371"],["/tags/不限速/index.html","0a6efb968b14bc2a3c1bd0351c87ded4"],["/tags/个人网盘/index.html","9046fd7471bd01ff54019e6aa29b4884"],["/tags/主题/index.html","4ac96210921ee8fadfc12ceeab513b68"],["/tags/云便签/index.html","6d6dab5b80135e1cac6eca2be289a250"],["/tags/云盘/index.html","e955e01211b3c54985fe3e0d066e6cf3"],["/tags/人人/index.html","60ebd6ade585deec6a8fd304d03a88d8"],["/tags/代理/index.html","ed2dfdb22eea09c9e43e2e78873fbc3a"],["/tags/代码/index.html","7684929eddb43ddcc49212d9cf144114"],["/tags/优选IP/index.html","aa0615b08bb5266eb7de98c81b22398b"],["/tags/便签/index.html","1a3aaa27bb5e8746e71bad4c703adcc3"],["/tags/保号/index.html","b6996b94e7d0c5c37c2b71759119c1e0"],["/tags/免费/index.html","a79b61274c88e1e5a2adc2a7177e5c28"],["/tags/免费节点/index.html","2a895923171cdf4426b7c3cd8fdb9401"],["/tags/加密/index.html","6e2a6d800645e20a15698c9334309882"],["/tags/动画/index.html","838bb93901bba46ec14f94e62832554a"],["/tags/博客/index.html","cb5941796e1579417a727e17eeaa509f"],["/tags/历史记录/index.html","2b3343b3d52bfaaa3710efe31d62a0bf"],["/tags/压力/index.html","d9b940ac4243bde10d5f380d36b3ced5"],["/tags/压缩包/index.html","9d71bf9366c73c23d525e026792beb9e"],["/tags/反代/index.html","503877a0c6ab981925a7a26664d85e21"],["/tags/可视化/index.html","f3b0fdd19af1574aa023c958cb342115"],["/tags/命令/index.html","7b2f07f5ee50e1362432722d77a44ce1"],["/tags/国家/index.html","7de8c3c41fabbf20d34bd64ecc3c1ccc"],["/tags/图床/index.html","cc11183c486031d5f9b292cbe1420753"],["/tags/图片/index.html","8516fdc6656c8c9c2700d51b82be3321"],["/tags/域名/index.html","2bd8633d600b036ed4c4b830544e48bf"],["/tags/多标签/index.html","d62cf5f97d22a77bcada759290a5a461"],["/tags/存储/index.html","7b32b514b0ddfd666a0b745608411435"],["/tags/安全/index.html","21108401ab4398e5f7cad62ec2300f69"],["/tags/安卓/index.html","a874bc6757816e14b2381fef3b10c876"],["/tags/宝塔/index.html","4760deacbd45bcab6840b66b2b41e89a"],["/tags/广告/index.html","f548f7717e9cf2228cb32e8b451f8b8b"],["/tags/建站/index.html","0e11f83ac3754d7ab381dbd6f4e09c1f"],["/tags/影视/index.html","c8e9dcd2171dbf5a5b167d4dd65a682e"],["/tags/快速启动/index.html","2f6af3a1ee7ccf8788e77f318b9e2255"],["/tags/手机/index.html","1d092c280d80fbb830e0a4aee3cc3bca"],["/tags/托管/index.html","ffffdc091719c7083006b9da815d556c"],["/tags/抓取/index.html","f992e50c72fc5e3999853026e1261c01"],["/tags/投屏/index.html","4ee3e34d641588f1300f3051455669e2"],["/tags/拓展功能/index.html","ed380f6ab1bfd4af0c24eb18736a4138"],["/tags/挂载/index.html","0834fe9dcb8c64727f4dfca3ff3a78d4"],["/tags/指纹/index.html","9e516b32f673c7bb4d00584169533bd8"],["/tags/接口/index.html","707e8a788d89d12ba6394ff3c0b0148a"],["/tags/提取图片/index.html","ee8905e99747820c89b9540194d38281"],["/tags/插件/index.html","14305f93f1de7cdcf6ef5cdfea56d47c"],["/tags/搜图/index.html","05440ee0bb22d724528df57fe808d519"],["/tags/搭建/index.html","a48481a6af1b38006bcbadf39d2d705c"],["/tags/撤回/index.html","05187c3ff671eb65483fc234ad8e4d4c"],["/tags/播放器/index.html","f42bba2a976eb84a64914c95a320afff"],["/tags/政府网站/index.html","e9608c7c22bd40a8f041235f5ba81458"],["/tags/效率/index.html","206f349624e3ce8ae098610765957bc9"],["/tags/日历/index.html","8524b1ba943e13b30e4ab7d539028002"],["/tags/服务器/index.html","3050988febd375827ebc0557786eb0e9"],["/tags/桌面/index.html","7e5db3eb7346eac87f821097f75978e4"],["/tags/梯子/index.html","64ba1ba8cdcfca1df85ea9e33953c88e"],["/tags/检测工具/index.html","08338a77486d81c4651bdf0e3bc9384a"],["/tags/汉化/index.html","0d338e4e642f0f9e833706bcccf6dc62"],["/tags/测压/index.html","ea279fd5dbeacf825defddb36ed65854"],["/tags/测速/index.html","12f94f5ae81219003c0b3d6eeb8e8b73"],["/tags/浏览器/index.html","0c463ad6bfbc5ac4f42ad304d0955308"],["/tags/清理/index.html","eba21848ef6002a273a32a5358096e84"],["/tags/滚动条/index.html","04e9681a939b7b1e41f14641800b9c96"],["/tags/电影/index.html","d2cff0d3901ba46b8c7c6d3791216751"],["/tags/电视剧/index.html","9dd20f9d58272f3d7dff6a955200d8cb"],["/tags/白嫖/index.html","239e6adc30229a78f54e883c9db871b2"],["/tags/百度/index.html","bd5cbfed2bc99afed2d120a5caf71250"],["/tags/百度云盘/index.html","d963d8a925a2663713150f71dfbd0677"],["/tags/百科/index.html","2165ef1777e48c7d201525629cef6054"],["/tags/短信/index.html","0ffb60e1789365ab68483d7470d99eb9"],["/tags/硬件/index.html","b8f3a3b24c32e4eca4986e250202f48c"],["/tags/科学上网/index.html","c71edcb35933ab8a56d1786e146935c0"],["/tags/空间/index.html","13db1a866de38008af3b9fce63d2c568"],["/tags/笔记/index.html","fdb6708e7ab2477b6ef201c2b0473843"],["/tags/简洁/index.html","5fe495e9af381222b3b044ddca54a062"],["/tags/简约/index.html","efff1c5481a6bd4a9222d3bfd40ec204"],["/tags/维基/index.html","c925beab8e722ba4ff59d332cab0af19"],["/tags/网易云/index.html","490d0420fcbeae87a43833bb9a8c7ed9"],["/tags/网盘/index.html","b5f2ccfec66fba545f1c014ac2f7e050"],["/tags/网站/index.html","db4a294654db1ed012923a30b3ff222d"],["/tags/美化/index.html","eee682a682934a209c1dab2e2d7b82af"],["/tags/翻墙/index.html","fdde196d5acc56de377eb93b0db2dcde"],["/tags/翻译/index.html","d11444184d83216dee12f418b5ab3fb2"],["/tags/翻译器/index.html","4c5e3d331af8990893453680b20498d9"],["/tags/聊天室/index.html","9d4f9dea642a50869328697820465ad9"],["/tags/联想/index.html","16db278b69ba32e2780f4e9c12f5be4c"],["/tags/节点/index.html","2729f9e7fc1e49b6b6e3aa93be08f1a9"],["/tags/虚拟手机号/index.html","92cfe93996c988985d6e5c3df8a6bbda"],["/tags/补丁/index.html","b400af8362332add48a916130bb3643d"],["/tags/视频/index.html","8b61ce3e2bfe16c79bd71c0d6dfbc093"],["/tags/解析/index.html","23b2779910c3e29e8f7368e24600ac88"],["/tags/订阅链接/index.html","4efd181a349cd3a35c8b734121b2891e"],["/tags/记录/index.html","98c3078fc1d14f04da78ba966c517a39"],["/tags/识图/index.html","5f9add34036c452fb83075f3e1094808"],["/tags/语言/index.html","04f14a0b658454fd5e01655a4f49e209"],["/tags/资源管理器/index.html","b4361ed292a5a10ed9c43783e2f6ce96"],["/tags/转移/index.html","97c05a8011003d822d3ff6e062b62d2b"],["/tags/软件/index.html","c23c73172d811bb36a8488ca10b3cd8c"],["/tags/轰炸/index.html","fe7d5270e4710bc475aefd2ac6885f0d"],["/tags/迁移/index.html","ad6a4954e17f12f709894db46310e348"],["/tags/远程控制/index.html","ae3992f4c2b8ae367aa43c12693b156e"],["/tags/连接/index.html","92007e8ee621ad39210c3e5ca767d167"],["/tags/追踪/index.html","ec8692d4be5ffa13834aefad445d788d"],["/tags/速度/index.html","5e7f8fbe5cd7cc40b346e5f2f013b8f3"],["/tags/邮箱/index.html","a1c997ebb109cb70d34251f238d58c6a"],["/tags/酷炫/index.html","8fb926562cb2cf7bb98a473a3fc3f5db"],["/tags/钓鱼/index.html","b84f1a7f6f6bdf99fb8ea25f14c5e223"],["/tags/镜像/index.html","3c1f64667af74a8dca6634165a7a9598"],["/tags/随机/index.html","a260b125a2dbf80ee67ee345074d702c"],["/tags/隐藏/index.html","034a016522bafdcf9964e71caf1b5a62"],["/tags/面板/index.html","2750f22ca8eeebb0382ee1bffbcf1a8a"],["/tags/音乐/index.html","4a25853daab41c0ed554f187971c19be"],["/tags/高颜值/index.html","30054c389d324cff0feb985003e07d3a"],["/tags/魔改/index.html","4c74d6bd30a484ed02f9596127b7de9a"],["/tags/黑名单/index.html","135efde552cadf735c06065814adf066"],["/urls/index.html","00b94153e3e2b43a8b828feb201ac14a"],["/vps/index.html","6ac04ece7560c3e4b7ac7b246ba7a5eb"],["/支持/index.html","59ea2bd7ae01c04ce3e8b30c4e1aa9d6"]];
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
