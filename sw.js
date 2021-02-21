/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","a7879355368e6814c4861d093e632972"],["/2020/11/29/clash-windows/index.html","cb6d9750b723b575f585cc7be697cade"],["/2020/11/30/websites2/index.html","d62c518fb1fb8d48e3b4c4e3d545834c"],["/2020/12/04/iphone4s/index.html","90fa76c4a7b6a988863a39a7e1c88eae"],["/2020/12/04/onenote/index.html","de4edf8c6a59cbac7491ea413e4c7936"],["/2020/12/04/wesites1/index.html","15e2e08d9975e65902161b294de8fe3a"],["/2020/12/06/nokia808/index.html","2dec2c5c0fe6ac525f27455cbf1dd7bd"],["/2020/12/07/ipad1/index.html","50984f18eef98b31434cdbb41c2b0273"],["/2020/12/18/freesubscribes/index.html","153845a920db6a22da3772991bfdd546"],["/2020/12/19/musics/index.html","18f0148fe6403899183a79deab97fe94"],["/2020/12/19/shadowrocket/index.html","813cd0a9599c987878a6ed13d1996502"],["/2020/12/19/v2ray-windows/index.html","609f913989af5ff2d61627183e056069"],["/2020/12/19/v2rayng/index.html","89298613a465219104a08f3b8b23fc27"],["/2020/12/20/beoplay/index.html","6b05e89048202422b960e3610b37efad"],["/2020/12/20/订阅链接转换/index.html","21bf7d6f79de9c37a8af73adb56189fa"],["/2020/12/21/chrome浏览器下载提速/index.html","e5814eca810d8e26e6c0fb5c87ea2a15"],["/2020/12/21/免费128线程并发下载xdown/index.html","cdfb12f60065245c02e7dfc119c2f952"],["/2020/12/21/免费32线程下载软件ndm/index.html","a5c035f5e76fe85402de2ec4cd9a2ff1"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","c8b45076ada93542230cecfd19c1559b"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","500229ce53a4d2ec3458d666f281bdd7"],["/2020/12/21/广告怎么知道我在想什么/index.html","cdf831dc1f8f3709c07d2e814cfdfd20"],["/2020/12/21/无名·引子（小说试写）/index.html","9d12645e1d91ab40c90b888104801689"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","b6c6c1dbada5d306f4a871085a27f2b0"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","102f7e2e0e1b39d12c580df6b673ea30"],["/2020/12/21/高速轻量下载器aria2/index.html","936125f0e15a010acc47a7d9c708ab9f"],["/2020/12/22/2020-cee-roo/index.html","48f7be8aac350453974af1ea8c36ad5a"],["/2020/12/22/firefox插件、github、steam富强/index.html","29b74183598c5dbf88f20ed22892f38f"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","c897e0e4af38efdd765ddb1444c2a43b"],["/2020/12/26/python-day-1/index.html","3ae992748a4d79088851590b979a16da"],["/2020/12/26/python-day-2/index.html","4ec45d479dc09f5e7423fd5b67cd0669"],["/2020/12/26/度盘不限速下载方式一赏/index.html","768138a26c78c64cd6bba0ce1128ead5"],["/2020/12/26/添加开机自启软件/index.html","f6e601da562164f3468eeee26f8072ae"],["/2020/12/26/电脑端截图方式一赏/index.html","221e57799e4d72e234f8c7e42e983195"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","12c0bbad114441a582f5e94e37ea932e"],["/2020/12/27/最安全的浏览器tor/index.html","6addd5b6543a133c02c5e9f802b7ec41"],["/2020/12/27/网易云刷等级和听歌数量/index.html","aa56f60cf2ffcdcb36975414b66cdd15"],["/2020/12/28/freenom申请免费域名/index.html","ac31f66748405f08a15879607d484c3f"],["/2020/12/31/机场/index.html","e8fd471a0eaab7cf8cf6393e05b14423"],["/2021/01/01/M1/index.html","5b9baeeed96fbfc58813f7a213c6c8c0"],["/2021/01/01/compress/index.html","81048556a68617395235ace8a3fd4163"],["/2021/01/01/infinityfree/index.html","fae60ea6f9d71055c38e6ae9330e2534"],["/2021/01/01/硬核翻墙/index.html","c563cf0d7f75540dcec1e9f296c34cc5"],["/2021/01/02/qq/index.html","692c5b46bab6439de58ff125a6fb5a39"],["/2021/01/03/netch/index.html","bd0f4c9b35dabdb837c6fc9e3d859c5e"],["/2021/01/03/waifu2x/index.html","af890ca8154b94cfd5840eb51c62dd20"],["/2021/01/04/ads/index.html","9fb4c5e04c3edbe33218233af051ee98"],["/2021/01/04/games/index.html","94d1337213236d238c9d03fcb4400f09"],["/2021/01/04/heroku/index.html","cff731cabdc47701c9d0de4057ac2a7c"],["/2021/01/06/movies/index.html","13fb41ea1a9398b2908ee2bd2c9c49b5"],["/2021/01/07/google2020/index.html","ba41e2ece81426652974ff2cacc2c531"],["/2021/01/07/lucky/index.html","5ce9dd0e75835fd52a07708cb6132d59"],["/2021/01/07/spotify/index.html","0f091425a57688f6bd21ad69750e77df"],["/2021/01/07/thunder/index.html","d674f35c21af11d4efd0bbe435f4fb06"],["/2021/01/08/adguardhome/index.html","e0620bc77c225532c0dc17f237786d39"],["/2021/01/10/IBM/index.html","b443c58dda8ed590ed2bb9740a229b2e"],["/2021/01/10/potplayer/index.html","745fc7196fa1893cdcde1a0bc0e29728"],["/2021/01/10/sakuraanime/index.html","7c81b48f04c31c506482979f66b1528c"],["/2021/01/10/美剧星球/index.html","a186de6afbaaba9fdc6c5101a910acd5"],["/2021/01/12/telegraph/index.html","97cef37e8bfe3899fc3dcadf7029d49f"],["/2021/01/14/comics/index.html","e5e9f7d6d029c7b7148664afc1f35cfc"],["/2021/01/14/ftp/index.html","b916bc119cd0397d60042f644dd4ad54"],["/2021/01/14/oraclecloud/index.html","66209bef957c50054dcd7b9d46be1209"],["/2021/01/14/porkbun/index.html","f8d5423e3de67edc4444985b94dc3bbf"],["/2021/01/14/powertoys/index.html","5a8d8ab80ed5feaaa96657a0e622e528"],["/2021/01/14/taptap/index.html","2e5d60305f9a7fcb2d62f28e6c26d5fd"],["/2021/01/14/ubuntuvsftp/index.html","c6299c57cf33b7b4e26503674dbdc8e2"],["/2021/01/14/小说/index.html","48e2693ac3704de14f5c06cabd58609b"],["/2021/01/15/freeproxies/index.html","5ee857a98639901bfd63c4693a07973c"],["/2021/01/15/incaseformat/index.html","a7a4b5ab52f5e5761b4890bbdde9e556"],["/2021/01/16/euserv/index.html","ae6ac78bfd2b098762c795e8d34c0469"],["/2021/01/16/winxray/index.html","0e303f00ffb56906484522a37674f683"],["/2021/01/18/qqreadhistory/index.html","d2c3e6add12c3f96abaeac2f72d0f863"],["/2021/01/18/qqrevoke/index.html","d8e9947cb927d382d1d55bbb3090ec4f"],["/2021/01/19/freevpn/index.html","8d4381d457e77d36ac52076dcc9d090b"],["/2021/01/20/browsertrack/index.html","bbae6c490b72da7cb4b29939348aff1e"],["/2021/01/20/v2ui/index.html","3fae76096f2edcf75618a7005d2240d1"],["/2021/01/21/failedtoconnect/index.html","7a4e069d0925658716247c11b1054540"],["/2021/01/21/gitcalendar/index.html","d0dbe05956d2dc962d08e569680bd25c"],["/2021/01/21/markdownformat/index.html","b084c648a181452446edb38546bc1323"],["/2021/01/21/markdowntable/index.html","e05ee3db46c0d96634911f1931985e64"],["/2021/01/21/vercel/index.html","1492fdfe01f2971b07688e191bde3e4b"],["/2021/01/22/hardware/index.html","7cbdcaa7a4129d85c727d7131c83861c"],["/2021/01/22/muviz/index.html","28ed8961526f7205f2056ee81170c26b"],["/2021/01/22/randomapi/index.html","6228f81237c78b646ae38c0c4b52e47b"],["/2021/01/22/searchimages/index.html","e0e6299234025158517df6672db04c79"],["/2021/01/23/RX文件管理器/index.html","598337d7ea07eb900a0a830e8f22abf1"],["/2021/01/23/chromeflag/index.html","2915c90b8df5f50976be1eca5ad023b7"],["/2021/01/23/qttabbar/index.html","a0d233d136f39ad4fb5e19987cedeec9"],["/2021/01/24/githubspeedup/index.html","241a00007394ba486d83d63c57b9a09b"],["/2021/01/24/jsdelivr/index.html","cb076c2a012cfa5a4f5830a974aa1daf"],["/2021/01/25/note/index.html","34062b4db565ec14a8f036bce047868c"],["/2021/01/25/soul/index.html","6997d46985f392f50aca9405aaf346f1"],["/2021/01/26/herokuxray/index.html","14a6f4d4380e9779af434fa61b6f96a5"],["/2021/01/27/proxypool/index.html","887ee906fb4f50260debc7b1e9ba1214"],["/2021/01/27/tracker/index.html","68d323515a56ac6b2b64c5f4fdacbb68"],["/2021/01/30/pandownphp/index.html","1dbf139da580ea7cbe5cc54391f34519"],["/2021/01/31/newgroup/index.html","5c74b8f33f94b312cf730c59c8df3345"],["/2021/02/01/clashlanguage/index.html","d71cb48b41f717027310a87d986a429b"],["/2021/02/01/encrypt/index.html","71a980971d020ec8db7f711d8c1cf101"],["/2021/02/01/footermotion/index.html","bffdac80f765774693832215df2dbe1c"],["/2021/02/01/gitter/index.html","3d2eb962d8959b9ca526515ae47131bb"],["/2021/02/01/pixivtop50/index.html","55c80722ca180bbfd51432e167af0522"],["/2021/02/01/scrollbar/index.html","22b93e63dbf8d39ece0bcaa883d0caaf"],["/2021/02/02/clover/index.html","23bb868a1c5e07e9f2ccf17b382a25fe"],["/2021/02/02/maya/index.html","8b3dc238533f00271cf39618b49dbeab"],["/2021/02/02/speedcontroller/index.html","fb19b7a87e0f388ddc83a29006dcd520"],["/2021/02/02/yesmusicplayer/index.html","83e507191c90942b36bf577c7f122ee3"],["/2021/02/03/lenovoonelite/index.html","6ad4b4f2651b19d5a4572a2b19cd0fc4"],["/2021/02/03/skipads/index.html","b52ed49fb568a2954dda4d558a956561"],["/2021/02/04/picseed/index.html","1539cf10ec1e5afa7f0fb341c32bdb58"],["/2021/02/04/renren/index.html","f41ff94d284db0abe8e7e978f7c308bd"],["/2021/02/04/serverstress/index.html","3ba337fd8c18c2f2c3a7c1828931bb68"],["/2021/02/04/wikipediazh/index.html","3b72dc8a05f16dbd0810cf6407d0563c"],["/2021/02/05/googlevoice/index.html","b9d01e5e10ae3b478036afd839332b38"],["/2021/02/06/clashconnection/index.html","7319b7ebcaff1dc02cf06ba77b75144c"],["/2021/02/06/gvtransfer/index.html","a17746588c2d99d4b3c449d96ee12e24"],["/2021/02/06/todesk/index.html","8b452096a9e527fc8bac37a898d23d06"],["/2021/02/06/vpnblacklist/index.html","bf083476e946ef40e8afdfcacf9fa987"],["/2021/02/07/mklink/index.html","7e2da7d120513a7f0265b7bf7b790aab"],["/2021/02/07/speedtest/index.html","85f24e38db3f6ceeefb2723f07a03877"],["/2021/02/07/translate/index.html","cc1dfa637bfc73964d77adf796aa2089"],["/2021/02/08/ewomail/index.html","b66abe735da9637ad2478c11fdca86c3"],["/2021/02/10/officee5/index.html","25867a85cc56117c7bbfa53073f7eea3"],["/2021/02/10/raidrive/index.html","55421fe6ad4aea6a8dbdf4f898c7e173"],["/2021/02/13/e5sub/index.html","2d9f8f666fa2cdec63ab05fc031136af"],["/2021/02/14/screen/index.html","9e316ec8a44de871ba8058e7a7165275"],["/2021/02/15/clashtun/index.html","856ee65318b0a438845c3579798e0875"],["/2021/02/15/messageboom/index.html","97ed651f637dd8750350ce5fc593bcab"],["/2021/02/15/oneindex/index.html","21613425bf03b64bd59f9366e1dc002b"],["/2021/02/16/govsites/index.html","03ec94cd83dc81c90f7bc95339c7a7ef"],["/2021/02/17/hexototypecho/index.html","eab423e00185ce0db5aee4c6719fef26"],["/2021/02/19/fiddler/index.html","df974f29491d1a5d4534ce3394c4d71b"],["/404.html","5ec839d1f556303ea218e34edf9e6533"],["/archives/2020/11/index.html","b1c410c172c03909e92741035a7b18d0"],["/archives/2020/12/index.html","208d8b13c26fd90dced2f5b31624688c"],["/archives/2020/12/page/2/index.html","10d2616c7236c11070c3b1b3a9feb7a0"],["/archives/2020/12/page/3/index.html","2463bebd6a05ed32d4ece83b884836f3"],["/archives/2020/index.html","63c97721da69bf438d0b1599b0b4b1d0"],["/archives/2020/page/2/index.html","c69ec7866c2a67e9e91503e21b97c935"],["/archives/2020/page/3/index.html","2a724d8140175467094ed5b087e1e628"],["/archives/2021/01/index.html","7f09fb1841695fa3b519e6788eff8313"],["/archives/2021/01/page/2/index.html","a29e50230832ee6557fb5ab130aac3a9"],["/archives/2021/01/page/3/index.html","39d2326dfc750dabf92a163ad23b597d"],["/archives/2021/01/page/4/index.html","0028f15cd4064de991b6a41314759049"],["/archives/2021/02/index.html","fb5937f79924a47ddc8d458f106512aa"],["/archives/2021/02/page/2/index.html","3e740eee689579e87d53c9d9315149a1"],["/archives/2021/02/page/3/index.html","2bd46deeb9a3d7c6cf6d9afde86ae49f"],["/archives/2021/index.html","bf45ef991f1cb7618a6b9588550c3ff7"],["/archives/2021/page/2/index.html","e4c3944e375f67d5b9bf1b9975e1b6fa"],["/archives/2021/page/3/index.html","81dd94014d164fa0ed4512131a94be95"],["/archives/2021/page/4/index.html","b9a81c861ac7b402eba8bc74a43345be"],["/archives/2021/page/5/index.html","8d2d83a0bb3c5920251a4362f71e389a"],["/archives/2021/page/6/index.html","7577c72cd3deb73956c42b45fa19108e"],["/archives/2021/page/7/index.html","a6fda5b099099caf74f1f7f1a24f8017"],["/archives/index.html","b86b9f9b2e59708bfbbd0a2962225539"],["/archives/page/2/index.html","734ffa645f3db35f42d43ed8ef9b99cb"],["/archives/page/3/index.html","9b01eeafcf6e36b777422165d735e2c2"],["/archives/page/4/index.html","66826c90fb3003e76e423e548c13faba"],["/archives/page/5/index.html","80364ccd6b90d696e2be67950e67ccdf"],["/archives/page/6/index.html","b0b42aad4dbc8f6657dea94dc90543ca"],["/archives/page/7/index.html","a5c0ce838dfa91a687eeb9c57a6590d4"],["/archives/page/8/index.html","b20d94d32fbe540e73776cebe7c4a114"],["/archives/page/9/index.html","dd23912893e8837b799667663e304395"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","74e30f23257ef10c84da8948cb1a1594"],["/categories/index.html","e667e003cf59fadaa929255efa9d6ac1"],["/categories/下载/index.html","bbcd3103409389547a06b6ba61b91edb"],["/categories/安全/index.html","4ed0135e90ed86aff3dc29112546694a"],["/categories/建站/index.html","20083a811aa317649b55213ac9b92d88"],["/categories/杂/index.html","e39c5483b439e00b25f1d7ab8de73a9f"],["/categories/杂/page/2/index.html","88f133a28951d7df4d1f276d4f9e9144"],["/categories/测评/index.html","12726bd98c638baf6ce22a5a5e5b4237"],["/categories/科学上网/index.html","738d454165f46011ac8fc2a466ea3297"],["/categories/科学上网/page/2/index.html","33e9d4e1749c382e11431e2a0a7aa08f"],["/categories/编程/index.html","84295cfb66df623183da31b978ec5756"],["/categories/网站/index.html","ad868ad71a87d1cd84ec2e7173f76396"],["/categories/网站/page/2/index.html","24ad9334d4e83c4678a2585ae1ced84c"],["/categories/软件/index.html","14900704ab77ffada43fb65c30267698"],["/categories/软件/page/2/index.html","cfed0e2b1550fb063afdeeda26bb0a27"],["/categories/软件/page/3/index.html","fa85c65e24da41080e751ec48af30f11"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","6183082f5e71df5da575b95d14b1ac98"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","524fb4209b1b316e7a99e50f1cf09abb"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","b18f7a3092f8cccb9aa9dc1d4de7523f"],["/ios/index.html","e625f9aa2617042e8db30f52521e840a"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/2/index.html","f35b67e250b6dcf66e302cfb9d215e1c"],["/page/3/index.html","0e7ae37edd84b79a1661ed362ba7833e"],["/page/4/index.html","22adb1be22e04ab42876c7640e749f9f"],["/page/5/index.html","709b2a3aa2c3bc82fcdfd18091582194"],["/page/6/index.html","dff8c3403cac99b523350d38c4a76201"],["/page/7/index.html","60be818929c21f05015140960e753d3f"],["/page/8/index.html","fad446c2e21e7159d5fa91d9e3969d97"],["/page/9/index.html","f17882628a96fdf15c1ee95e59e92df1"],["/payment/index.html","8961bd9a9d28e89a1dc645dcd3b390c1"],["/privacy-policy/index.html","fc2eedbd8fc884cc5b21e862b24b4d55"],["/rss2.xml","c0a9934adeca29f152e9794ab9cb856a"],["/search.xml","50a88ab3110ab77cbbdc49cbd6cdd464"],["/sitemap.xml","70d410ac278ed85ab975a6fe752ee6ac"],["/sw-register.js","55fd288bee7d1002dc25fcc06835a6b6"],["/tags/5t/index.html","af3ccb59720e35ce4b77b20d07aedbd2"],["/tags/Clash/index.html","a23ca508ce29dd9f0bb9551289cc4fb6"],["/tags/Clover/index.html","28f11e7ee739800a74faa900930005b9"],["/tags/E5/index.html","d7514ab399b5aad308455fb580fe27f7"],["/tags/FTP/index.html","ddd5a9bca3a9c0b3a8ba34c1e730cd7d"],["/tags/GitHub/index.html","d194b89aaef711bc9eb9402e50305e57"],["/tags/Heroku/index.html","cfbaf587840ceca25433397dae665a15"],["/tags/Hexo/index.html","08027496b64f047a69f4c08f69d46008"],["/tags/Lenovo/index.html","29a0fe4893bbe40271e4d70aee3a5bce"],["/tags/Oneindex/index.html","441dc239e8172a0b1b2c1f816c8771ea"],["/tags/QQ/index.html","8111e7b3508553f0c257b9b77b0af5ec"],["/tags/QTTabbar/index.html","2332089ec62a122b223fa43c96fc19bc"],["/tags/RX文件管理器/index.html","cdeabb3a31658ece191e7f5606e4f10a"],["/tags/Todesk/index.html","86df387fbb2460e8f0bda74a03d9cb85"],["/tags/Vercel/index.html","fdef201eb3d5f25a4cd9e228f8b44776"],["/tags/ads/index.html","d77e4156cd852deac287704c175b419a"],["/tags/api/index.html","ded76f85704ea596a0136f23692af887"],["/tags/app/index.html","f2c0945227bfde53ed3c676913c22fae"],["/tags/blacklist/index.html","d8c5ac3e6f811279a8eec9eb1ae20fc8"],["/tags/butterfly/index.html","553b41976b844589a30959722e1ed35c"],["/tags/chrome/index.html","ca011f4ae555009648dadd690798d573"],["/tags/cloudflare/index.html","e49c19a2101e3db791a769f4c706ec8d"],["/tags/cmd/index.html","1abbcd325ee94421e9e5a2fcfb6c2b40"],["/tags/c盘/index.html","b94e6cdfac34735c38f41b915479d920"],["/tags/email/index.html","fd693fdce5672157f57e943400ad6255"],["/tags/ewomail/index.html","fee1c1cdc77590325129ba3da7b66d9d"],["/tags/fiddler/index.html","dcacde50b0cb13b6c08419d6ce745a97"],["/tags/flags/index.html","9eb3075c19bc219e66b14cdcbb621797"],["/tags/footer，页脚/index.html","ff490d1f69a3d8e64a82a307b927cab1"],["/tags/galgame/index.html","e41a4b3a39e0d843c03703480a05362e"],["/tags/git/index.html","c973bb9100bb77553044cb4a37b8cbf4"],["/tags/gitcalendar/index.html","4be9c9c0c763cffa4f70642914a736af"],["/tags/google-voice/index.html","8c827c20ac8a3dec3bda857a16c5427c"],["/tags/gv/index.html","813bf84e654ba5cb93633b57b249ba20"],["/tags/index-1.html","368fff20ffd817d4b5db1821a780215f"],["/tags/index.html","27cb7fe3b20886b80e69f55e6b2da688"],["/tags/jsdelivr/index.html","ddb764a218fb6e3ab71c91fd7a37b59b"],["/tags/linux/index.html","ee12256b78f06d42eda291602bc72b38"],["/tags/markdown/index.html","c8d84157dd51c2270bc61b74f3146c17"],["/tags/maya/index.html","ef441bf952d0b92b8e680bcbb0804f71"],["/tags/mklink/index.html","3a78106eb39ef948efbfcd19a8a5527b"],["/tags/office-e5/index.html","8abb03463c650730bd2bde64147c1589"],["/tags/onedrive/index.html","38c17e46dbc21fa4a08d20af8e4ae36d"],["/tags/picGO/index.html","5c09d9ad762e5b452a21c8999e022bb3"],["/tags/pixiv/index.html","bde14286b54f9f3557c1b9bb906bbb51"],["/tags/proxypool/index.html","62dfae1e650ee99a3f1c0fae12833b71"],["/tags/qbitorrent/index.html","be3250b68b19abac4d38c5c09142859f"],["/tags/raidrive/index.html","e2cd26d4d62dd42550c4f25fd3e5eba8"],["/tags/screen/index.html","3921898f72a9552fbf559d8a522ebf28"],["/tags/speedtest/index.html","146292eeee2cc819aeeaed826f243ac0"],["/tags/tap/index.html","211e08d17030162b3599e6ad1145ab4e"],["/tags/top50/index.html","a377ce549e008ea227c0ae0010412fa5"],["/tags/tracker/index.html","c4daa0172805f09b7cfedfd33718f911"],["/tags/translate/index.html","adfcbdfd5bf23be1b381363a69f2f7c6"],["/tags/translater/index.html","9dae333fee5c9060f9f0f80f371ddaf6"],["/tags/tun/index.html","d4f9f847c5aaa0261208b7cac4e25da0"],["/tags/typecho/index.html","6f0c2e06e4a2816532e50f6f193d0fe3"],["/tags/v2ray/index.html","80e29862a78b894b6c6adbd5db211ed4"],["/tags/vpn/index.html","faa10928f3f4fa1aa4ef372d10580840"],["/tags/vps/index.html","0699ba02227b862e5cf9f027e88966ea"],["/tags/windows/index.html","da19ebc722d7dc5dcca7b6ed2761b39d"],["/tags/windows端/index.html","1bc4bfcaafd036e0ce52f78fa8109d8d"],["/tags/xray/index.html","e38ba94e27c967eaec9adc2868ff5c1f"],["/tags/下载/index.html","9184ec2a070a5b321640a670f915a982"],["/tags/不限速/index.html","09e69bb9bb85f20193c70273d4faa633"],["/tags/个人网盘/index.html","3ea4e9a2f70e637ea2ce858befa94f18"],["/tags/主题/index.html","7bee564759bda3ac9663951e2389308d"],["/tags/云便签/index.html","9f000076186e1e5096ed19b18f844d82"],["/tags/云盘/index.html","7721114ba58bcea27d9128251b5f5154"],["/tags/人人/index.html","72e6f258368c5eaf3623dffefcb66558"],["/tags/代理/index.html","0dfa1752f91875f0c81b60f5b9c7b6a3"],["/tags/代码/index.html","5b78718708bb4ae58716799d3f5cd4e0"],["/tags/优选IP/index.html","eb67dea86de3f572b61b7dafb4fbd16d"],["/tags/便签/index.html","e24581d4ff398d3f12e50e0c39880155"],["/tags/保号/index.html","dcc6f137c1ff42207307e9a3057388e4"],["/tags/免费/index.html","bfd3a81d709d850126cbc628bb0d165d"],["/tags/免费节点/index.html","fe351ae527239caadd9ff6da32526889"],["/tags/加密/index.html","24c0eb13403140bfeddbbcce267f15ba"],["/tags/动画/index.html","d275abb9c6a90215bb22ac2ead28f1a0"],["/tags/博客/index.html","6ac1488a8314d51e3fa4e33003b68e97"],["/tags/历史记录/index.html","35c21735b1737a4851711441c38cfccc"],["/tags/压力/index.html","43cdaea4c4cbdcf1cef7fac7eb5b2932"],["/tags/压缩包/index.html","fca618078e1996a6f0edfbd0ca1883a4"],["/tags/反代/index.html","31e7a91e16d22fb6328ef89c0d6d5aad"],["/tags/可视化/index.html","0de1f319f867ebb526f50a08f37520df"],["/tags/命令/index.html","75f850195a823900d09770089fa21c88"],["/tags/国家/index.html","b36b02d116af7d7936ed500f343d7a36"],["/tags/图床/index.html","f365d3957f7bd1de10dcbad785e3745e"],["/tags/图片/index.html","2d5dad4a2c37756568cb33ada6851fbe"],["/tags/域名/index.html","e7a26636d1790b036233c2d0ca1079b1"],["/tags/多标签/index.html","4d1d82637c459861237ff10b197ab329"],["/tags/存储/index.html","f76437e19acc9368bf59774bb0d18ceb"],["/tags/安全/index.html","44130dbc978bb61570d658753d1bd86c"],["/tags/安卓/index.html","16cb6de41e1702cdbf435e43d1236f43"],["/tags/宝塔/index.html","802ebcb639174ba2735c92627099e6a5"],["/tags/广告/index.html","2d6c92629a3ce44431e8cdc1adf8d9ff"],["/tags/建站/index.html","f71c85e22de1b2f846e4583ca4c5b83b"],["/tags/影视/index.html","afadc98529bb414f1b33a67efae3d543"],["/tags/快速启动/index.html","9de831981c60fd1b842c3c7d9346052c"],["/tags/手机/index.html","8f8e716fa9a93580251cd44df5fd262f"],["/tags/托管/index.html","004884566b0434a0c88e5dfeaa2210ee"],["/tags/抓包/index.html","7af8b82af36b01805efba5288ff46110"],["/tags/抓取/index.html","c1bce8da531c3b7503026f5e6a902a84"],["/tags/投屏/index.html","3becc3c5b5938c56407e4426209cb41b"],["/tags/拓展功能/index.html","d6b87b32f2c3641fb4b47bc8fadcb2d8"],["/tags/挂载/index.html","b311a10dab768119e96452fbd384c57b"],["/tags/指纹/index.html","644b133cbb8be86b095bef64229ac7fb"],["/tags/接口/index.html","b972780c88acf532ef31b61e4031381a"],["/tags/提取图片/index.html","571f7b7c31a67b51da774185ce597756"],["/tags/插件/index.html","310885298a2f7dca1804083465dca0d3"],["/tags/搜图/index.html","d6dd073755ecb3fcfe9a0506840f9ccd"],["/tags/搭建/index.html","e9d0d3ab209f7dfa54120e0e2035e5d7"],["/tags/撤回/index.html","e2997a685e3f59e91a60b745b6470d04"],["/tags/播放器/index.html","60bb0cd90b47e6195942a89dbf2d1813"],["/tags/政府网站/index.html","7b56b40145bb46b347ba5b79ee7b8a89"],["/tags/效率/index.html","973a84b6cbbd393f0503f7b807ed1b70"],["/tags/日历/index.html","cf32ca4ae001e8a91ec867886d7b45da"],["/tags/服务器/index.html","b682ad0ea243674580632aa31e0eb0a3"],["/tags/桌面/index.html","472415f80ad1e61cf00ea0a11af7c802"],["/tags/梯子/index.html","2654f1e7391a09bcbcc0c5a3dab98c54"],["/tags/检测工具/index.html","27e8629c53a57a5602ae32bfe5700024"],["/tags/汉化/index.html","e933e124c37ef24e2970ce2a2e828dc4"],["/tags/测压/index.html","c530c5af092ac70980907b153de25675"],["/tags/测速/index.html","89943fe9f461ed077bba07f7dca9b6a5"],["/tags/浏览器/index.html","87c9b7ed615666ad7c9c8951f343ea79"],["/tags/清理/index.html","f4bea1a381ed981cfe77c646d9bb814f"],["/tags/滚动条/index.html","0cef455dec4cd1af53201110f7852533"],["/tags/电影/index.html","9bd3d3722ef1df5e1d6b8bd838f6a619"],["/tags/电视剧/index.html","c41db6678d742262431dbb4571e0c0eb"],["/tags/白嫖/index.html","9a0009514ba68e9eac92840c2f197484"],["/tags/百度/index.html","b3e1815b886218c61974b017c2f4ecf9"],["/tags/百度云盘/index.html","85e0326474c2b906bb5b05d66e0f8532"],["/tags/百科/index.html","7bc0ba549ab95db358d0de822d202d6e"],["/tags/短信/index.html","d2d29723ef60eaf20b79a43575c52bd9"],["/tags/硬件/index.html","71b5dd2ab628f54610ce3dc34b3397bc"],["/tags/科学上网/index.html","d91133fdae94a113232d07dfee0b549f"],["/tags/空间/index.html","1b41580026f9e876238f34d1eef81abb"],["/tags/笔记/index.html","40b765b43bedad0dea02bd9d9bd0c4c3"],["/tags/简洁/index.html","b5246aa332f7cfb832d4f270f8e1585e"],["/tags/简约/index.html","7f542e0e2a830f883c107c87557cd0a1"],["/tags/维基/index.html","c7b58331eadc316ec950a06efdae5f84"],["/tags/网易云/index.html","41e52612cebf7c6157023cdf93815cc4"],["/tags/网盘/index.html","8c3be9434756bd776d897975cc5e55ce"],["/tags/网站/index.html","e7876c57346ac5d53f12665d8a78a3d7"],["/tags/网络/index.html","7f97206b8267a1db89fa06d53d0d4349"],["/tags/美化/index.html","1835b211917ce0f132d300cb85830ec0"],["/tags/翻墙/index.html","eae48e15f167fe0ee56da7ad1562cc27"],["/tags/翻译/index.html","98babb04edd475a2e4bd8dc16b0adf8c"],["/tags/翻译器/index.html","fadb8afce1d01973cbbee9ffeca89150"],["/tags/聊天室/index.html","5b508b70e764d1d801f31a6ef37ddfe1"],["/tags/联想/index.html","f41c6c00a84b8a52a6880df2aefcb8a4"],["/tags/节点/index.html","7c0afbd19b33ceb41ca8bbe133843c2e"],["/tags/虚拟手机号/index.html","1949bad544f4a46e5a4651baaf515478"],["/tags/补丁/index.html","77647df639c6e94cbf810e17995abeb9"],["/tags/视频/index.html","138d01f2178fadee207c2b6905a8a4b4"],["/tags/解析/index.html","a2bafded868cbf26958d375f1ca79fb3"],["/tags/订阅链接/index.html","82f471139638aa1d661a422e78d7814c"],["/tags/记录/index.html","90199ead0c639f3f6f6c7b448ad019a3"],["/tags/识图/index.html","94bbbc17e0da65f6d928878363cbc195"],["/tags/语言/index.html","fc365555ee99190a909c80315c9b208d"],["/tags/资源管理器/index.html","af971752222341fc185807f2f18c61c8"],["/tags/转移/index.html","1cca8b334c56d042c123f9a1cff26fad"],["/tags/软件/index.html","2e5608c3deb91b63ec9cc745cd4fab99"],["/tags/轰炸/index.html","b8fe1950ba2b32850209ddd8e6df396a"],["/tags/迁移/index.html","9742d00234f8fd2dbc18867f93d2d776"],["/tags/远程控制/index.html","43b05072f99fb2f7d7496f7e455a70fe"],["/tags/连接/index.html","0fdd5b5289565643c23f5f2f02c72b3a"],["/tags/追踪/index.html","604e80bfe2ea298024549f4273eb9b71"],["/tags/速度/index.html","989ebf26768ec614a8453414c9ead273"],["/tags/邮箱/index.html","8c8a9c580ca2a6458ed74b2cbf25523a"],["/tags/酷炫/index.html","f06509514c1f590af32e707e139900bb"],["/tags/钓鱼/index.html","2de7101e0e59f0ee44cb464d8336fdee"],["/tags/镜像/index.html","c4d19c19a0c46691f5df325e66f7d715"],["/tags/随机/index.html","7a2738cb48e2856b92dc533f34d9d46d"],["/tags/隐藏/index.html","3aea6dff0d44570538937cdc607f9819"],["/tags/面板/index.html","66854f793fe4e78ab7e4162227839dc0"],["/tags/音乐/index.html","ed420b53d05058a6761c12b561377e47"],["/tags/高颜值/index.html","3a0180594c2b6c70d3f3c435e634fb59"],["/tags/魔改/index.html","68bc37bcbab7826cee8ceb9d965721b0"],["/tags/黑名单/index.html","8fca0215fae08acd2dba91dca9688430"],["/urls/index.html","3ca836b4e3e819d4ed06eb1fcaeffb5d"],["/vps/index.html","21aacae760b7a90cc50ff372c8e5d602"],["/支持/index.html","c5ea3f9d4bc9c5ee41a5dfc5ee3e6341"]];
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
