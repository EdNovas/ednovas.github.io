/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","a7879355368e6814c4861d093e632972"],["/2020/11/29/clash-windows/index.html","cb6d9750b723b575f585cc7be697cade"],["/2020/11/30/websites2/index.html","d62c518fb1fb8d48e3b4c4e3d545834c"],["/2020/12/04/iphone4s/index.html","90fa76c4a7b6a988863a39a7e1c88eae"],["/2020/12/04/onenote/index.html","de4edf8c6a59cbac7491ea413e4c7936"],["/2020/12/04/wesites1/index.html","15e2e08d9975e65902161b294de8fe3a"],["/2020/12/06/nokia808/index.html","2dec2c5c0fe6ac525f27455cbf1dd7bd"],["/2020/12/07/ipad1/index.html","50984f18eef98b31434cdbb41c2b0273"],["/2020/12/18/freesubscribes/index.html","dc5cc76c92ce857dd56e52b6eba585e6"],["/2020/12/19/musics/index.html","18f0148fe6403899183a79deab97fe94"],["/2020/12/19/shadowrocket/index.html","813cd0a9599c987878a6ed13d1996502"],["/2020/12/19/v2ray-windows/index.html","609f913989af5ff2d61627183e056069"],["/2020/12/19/v2rayng/index.html","89298613a465219104a08f3b8b23fc27"],["/2020/12/20/beoplay/index.html","6b05e89048202422b960e3610b37efad"],["/2020/12/20/订阅链接转换/index.html","21bf7d6f79de9c37a8af73adb56189fa"],["/2020/12/21/chrome浏览器下载提速/index.html","e5814eca810d8e26e6c0fb5c87ea2a15"],["/2020/12/21/免费128线程并发下载xdown/index.html","cdfb12f60065245c02e7dfc119c2f952"],["/2020/12/21/免费32线程下载软件ndm/index.html","a5c035f5e76fe85402de2ec4cd9a2ff1"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","c8b45076ada93542230cecfd19c1559b"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","500229ce53a4d2ec3458d666f281bdd7"],["/2020/12/21/广告怎么知道我在想什么/index.html","cdf831dc1f8f3709c07d2e814cfdfd20"],["/2020/12/21/无名·引子（小说试写）/index.html","9d12645e1d91ab40c90b888104801689"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","b6c6c1dbada5d306f4a871085a27f2b0"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","102f7e2e0e1b39d12c580df6b673ea30"],["/2020/12/21/高速轻量下载器aria2/index.html","936125f0e15a010acc47a7d9c708ab9f"],["/2020/12/22/2020-cee-roo/index.html","48f7be8aac350453974af1ea8c36ad5a"],["/2020/12/22/firefox插件、github、steam富强/index.html","29b74183598c5dbf88f20ed22892f38f"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","c897e0e4af38efdd765ddb1444c2a43b"],["/2020/12/26/python-day-1/index.html","3ae992748a4d79088851590b979a16da"],["/2020/12/26/python-day-2/index.html","4ec45d479dc09f5e7423fd5b67cd0669"],["/2020/12/26/度盘不限速下载方式一赏/index.html","768138a26c78c64cd6bba0ce1128ead5"],["/2020/12/26/添加开机自启软件/index.html","f6e601da562164f3468eeee26f8072ae"],["/2020/12/26/电脑端截图方式一赏/index.html","221e57799e4d72e234f8c7e42e983195"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","12c0bbad114441a582f5e94e37ea932e"],["/2020/12/27/最安全的浏览器tor/index.html","6addd5b6543a133c02c5e9f802b7ec41"],["/2020/12/27/网易云刷等级和听歌数量/index.html","aa56f60cf2ffcdcb36975414b66cdd15"],["/2020/12/28/freenom申请免费域名/index.html","ac31f66748405f08a15879607d484c3f"],["/2020/12/31/机场/index.html","e8fd471a0eaab7cf8cf6393e05b14423"],["/2021/01/01/M1/index.html","5b9baeeed96fbfc58813f7a213c6c8c0"],["/2021/01/01/compress/index.html","81048556a68617395235ace8a3fd4163"],["/2021/01/01/infinityfree/index.html","fae60ea6f9d71055c38e6ae9330e2534"],["/2021/01/01/硬核翻墙/index.html","c563cf0d7f75540dcec1e9f296c34cc5"],["/2021/01/02/qq/index.html","692c5b46bab6439de58ff125a6fb5a39"],["/2021/01/03/netch/index.html","bd0f4c9b35dabdb837c6fc9e3d859c5e"],["/2021/01/03/waifu2x/index.html","af890ca8154b94cfd5840eb51c62dd20"],["/2021/01/04/ads/index.html","9fb4c5e04c3edbe33218233af051ee98"],["/2021/01/04/games/index.html","94d1337213236d238c9d03fcb4400f09"],["/2021/01/04/heroku/index.html","cff731cabdc47701c9d0de4057ac2a7c"],["/2021/01/06/movies/index.html","13fb41ea1a9398b2908ee2bd2c9c49b5"],["/2021/01/07/google2020/index.html","ba41e2ece81426652974ff2cacc2c531"],["/2021/01/07/lucky/index.html","5ce9dd0e75835fd52a07708cb6132d59"],["/2021/01/07/spotify/index.html","0f091425a57688f6bd21ad69750e77df"],["/2021/01/07/thunder/index.html","d674f35c21af11d4efd0bbe435f4fb06"],["/2021/01/08/adguardhome/index.html","e0620bc77c225532c0dc17f237786d39"],["/2021/01/10/IBM/index.html","b443c58dda8ed590ed2bb9740a229b2e"],["/2021/01/10/potplayer/index.html","745fc7196fa1893cdcde1a0bc0e29728"],["/2021/01/10/sakuraanime/index.html","7c81b48f04c31c506482979f66b1528c"],["/2021/01/10/美剧星球/index.html","a186de6afbaaba9fdc6c5101a910acd5"],["/2021/01/12/telegraph/index.html","97cef37e8bfe3899fc3dcadf7029d49f"],["/2021/01/14/comics/index.html","e5e9f7d6d029c7b7148664afc1f35cfc"],["/2021/01/14/ftp/index.html","b916bc119cd0397d60042f644dd4ad54"],["/2021/01/14/oraclecloud/index.html","66209bef957c50054dcd7b9d46be1209"],["/2021/01/14/porkbun/index.html","f8d5423e3de67edc4444985b94dc3bbf"],["/2021/01/14/powertoys/index.html","5a8d8ab80ed5feaaa96657a0e622e528"],["/2021/01/14/taptap/index.html","2e5d60305f9a7fcb2d62f28e6c26d5fd"],["/2021/01/14/ubuntuvsftp/index.html","c6299c57cf33b7b4e26503674dbdc8e2"],["/2021/01/14/小说/index.html","48e2693ac3704de14f5c06cabd58609b"],["/2021/01/15/freeproxies/index.html","5ee857a98639901bfd63c4693a07973c"],["/2021/01/15/incaseformat/index.html","a7a4b5ab52f5e5761b4890bbdde9e556"],["/2021/01/16/euserv/index.html","ae6ac78bfd2b098762c795e8d34c0469"],["/2021/01/16/winxray/index.html","0e303f00ffb56906484522a37674f683"],["/2021/01/18/qqreadhistory/index.html","d2c3e6add12c3f96abaeac2f72d0f863"],["/2021/01/18/qqrevoke/index.html","d8e9947cb927d382d1d55bbb3090ec4f"],["/2021/01/19/freevpn/index.html","8d4381d457e77d36ac52076dcc9d090b"],["/2021/01/20/browsertrack/index.html","bbae6c490b72da7cb4b29939348aff1e"],["/2021/01/20/v2ui/index.html","3fae76096f2edcf75618a7005d2240d1"],["/2021/01/21/failedtoconnect/index.html","7a4e069d0925658716247c11b1054540"],["/2021/01/21/gitcalendar/index.html","d0dbe05956d2dc962d08e569680bd25c"],["/2021/01/21/markdownformat/index.html","b084c648a181452446edb38546bc1323"],["/2021/01/21/markdowntable/index.html","e05ee3db46c0d96634911f1931985e64"],["/2021/01/21/vercel/index.html","1492fdfe01f2971b07688e191bde3e4b"],["/2021/01/22/hardware/index.html","7cbdcaa7a4129d85c727d7131c83861c"],["/2021/01/22/muviz/index.html","28ed8961526f7205f2056ee81170c26b"],["/2021/01/22/randomapi/index.html","6228f81237c78b646ae38c0c4b52e47b"],["/2021/01/22/searchimages/index.html","e0e6299234025158517df6672db04c79"],["/2021/01/23/RX文件管理器/index.html","598337d7ea07eb900a0a830e8f22abf1"],["/2021/01/23/chromeflag/index.html","2915c90b8df5f50976be1eca5ad023b7"],["/2021/01/23/qttabbar/index.html","a0d233d136f39ad4fb5e19987cedeec9"],["/2021/01/24/githubspeedup/index.html","241a00007394ba486d83d63c57b9a09b"],["/2021/01/24/jsdelivr/index.html","cb076c2a012cfa5a4f5830a974aa1daf"],["/2021/01/25/note/index.html","34062b4db565ec14a8f036bce047868c"],["/2021/01/25/soul/index.html","6997d46985f392f50aca9405aaf346f1"],["/2021/01/26/herokuxray/index.html","14a6f4d4380e9779af434fa61b6f96a5"],["/2021/01/27/proxypool/index.html","887ee906fb4f50260debc7b1e9ba1214"],["/2021/01/27/tracker/index.html","68d323515a56ac6b2b64c5f4fdacbb68"],["/2021/01/30/pandownphp/index.html","1dbf139da580ea7cbe5cc54391f34519"],["/2021/01/31/newgroup/index.html","5c74b8f33f94b312cf730c59c8df3345"],["/2021/02/01/clashlanguage/index.html","d71cb48b41f717027310a87d986a429b"],["/2021/02/01/encrypt/index.html","71a980971d020ec8db7f711d8c1cf101"],["/2021/02/01/footermotion/index.html","bffdac80f765774693832215df2dbe1c"],["/2021/02/01/gitter/index.html","3d2eb962d8959b9ca526515ae47131bb"],["/2021/02/01/pixivtop50/index.html","55c80722ca180bbfd51432e167af0522"],["/2021/02/01/scrollbar/index.html","22b93e63dbf8d39ece0bcaa883d0caaf"],["/2021/02/02/clover/index.html","23bb868a1c5e07e9f2ccf17b382a25fe"],["/2021/02/02/maya/index.html","8b3dc238533f00271cf39618b49dbeab"],["/2021/02/02/speedcontroller/index.html","fb19b7a87e0f388ddc83a29006dcd520"],["/2021/02/02/yesmusicplayer/index.html","83e507191c90942b36bf577c7f122ee3"],["/2021/02/03/lenovoonelite/index.html","6ad4b4f2651b19d5a4572a2b19cd0fc4"],["/2021/02/03/skipads/index.html","b52ed49fb568a2954dda4d558a956561"],["/2021/02/04/picseed/index.html","1539cf10ec1e5afa7f0fb341c32bdb58"],["/2021/02/04/renren/index.html","f41ff94d284db0abe8e7e978f7c308bd"],["/2021/02/04/serverstress/index.html","3ba337fd8c18c2f2c3a7c1828931bb68"],["/2021/02/04/wikipediazh/index.html","3b72dc8a05f16dbd0810cf6407d0563c"],["/2021/02/05/googlevoice/index.html","b9d01e5e10ae3b478036afd839332b38"],["/2021/02/06/clashconnection/index.html","7319b7ebcaff1dc02cf06ba77b75144c"],["/2021/02/06/gvtransfer/index.html","a17746588c2d99d4b3c449d96ee12e24"],["/2021/02/06/todesk/index.html","8b452096a9e527fc8bac37a898d23d06"],["/2021/02/06/vpnblacklist/index.html","bf083476e946ef40e8afdfcacf9fa987"],["/2021/02/07/mklink/index.html","7e2da7d120513a7f0265b7bf7b790aab"],["/2021/02/07/speedtest/index.html","85f24e38db3f6ceeefb2723f07a03877"],["/2021/02/07/translate/index.html","cc1dfa637bfc73964d77adf796aa2089"],["/2021/02/08/ewomail/index.html","b66abe735da9637ad2478c11fdca86c3"],["/2021/02/10/officee5/index.html","25867a85cc56117c7bbfa53073f7eea3"],["/2021/02/10/raidrive/index.html","55421fe6ad4aea6a8dbdf4f898c7e173"],["/2021/02/13/e5sub/index.html","2d9f8f666fa2cdec63ab05fc031136af"],["/2021/02/14/screen/index.html","9e316ec8a44de871ba8058e7a7165275"],["/2021/02/15/clashtun/index.html","856ee65318b0a438845c3579798e0875"],["/2021/02/15/messageboom/index.html","97ed651f637dd8750350ce5fc593bcab"],["/2021/02/15/oneindex/index.html","21613425bf03b64bd59f9366e1dc002b"],["/2021/02/16/govsites/index.html","03ec94cd83dc81c90f7bc95339c7a7ef"],["/2021/02/17/hexototypecho/index.html","eab423e00185ce0db5aee4c6719fef26"],["/2021/02/19/fiddler/index.html","df974f29491d1a5d4534ce3394c4d71b"],["/404.html","f87e85608e4bdc06771a7016c82a2166"],["/archives/2020/11/index.html","0408e66a8722a63d60b9bf26bbf494fe"],["/archives/2020/12/index.html","1f60f937e506c67a8174e14aff29ce33"],["/archives/2020/12/page/2/index.html","146542a54efbdc7683eefcbce330220b"],["/archives/2020/12/page/3/index.html","271af33a85f75910669d879b638e498c"],["/archives/2020/index.html","415235113165b64eeb9144a0412e76b4"],["/archives/2020/page/2/index.html","d604b1ba2580dfe3e1384f240af34ba6"],["/archives/2020/page/3/index.html","90a56ea376acba8a2f9afc9ba61a58e4"],["/archives/2021/01/index.html","28c70a960fbb380bef52e25d97a367fc"],["/archives/2021/01/page/2/index.html","8727eefc16712ae0bc9c12ed1170aec8"],["/archives/2021/01/page/3/index.html","a620a9dee8a68a0941cee4fa72f946db"],["/archives/2021/01/page/4/index.html","9b3eb919c6d1ec247a935b2f0010bd0a"],["/archives/2021/02/index.html","21dfa3a765d00db4aa78a77b749ca93c"],["/archives/2021/02/page/2/index.html","fc37fdf2fe53dd6bcb19b4371247b52d"],["/archives/2021/02/page/3/index.html","9b680ee8badc9a89032073ca0e1ca12c"],["/archives/2021/index.html","5fa4fca498122717cced362e5609c0d2"],["/archives/2021/page/2/index.html","24c2fcc0c8b1d6612274062df7ea6c64"],["/archives/2021/page/3/index.html","ce0096fe04e4d33b0ad79d50f60a7350"],["/archives/2021/page/4/index.html","55974c71e815b5fa7fd4ad6f125b7812"],["/archives/2021/page/5/index.html","e5b1b3d53138cf2a9b180ac688076a9e"],["/archives/2021/page/6/index.html","66c9df2f45ac573b1c1e49f8d6df4fd0"],["/archives/2021/page/7/index.html","89a12cd96a14996454a8c33ebd0e6706"],["/archives/index.html","aed433707e61eaa4a115f1bad54d9917"],["/archives/page/2/index.html","5f9f0f7ee54688430f671464fd6a57e6"],["/archives/page/3/index.html","874bb6743f03628975a0ea0cf5945149"],["/archives/page/4/index.html","2933e0ebcae03e4c50be3ac179f8575c"],["/archives/page/5/index.html","1eec1998420bce188e68ce9d59ed9df6"],["/archives/page/6/index.html","0b419bda8d4d15df0ebb94cbbe9ae90a"],["/archives/page/7/index.html","9868c652576ec3bebb33b86e6cfe2cd9"],["/archives/page/8/index.html","30f77636ff66702c8355877a9581e9b9"],["/archives/page/9/index.html","9e6983f7c5344a1e495e34cc6f73a9d1"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","5c891984f80169c4df5ef4e2e622ac0e"],["/categories/index.html","dc59e6bb740a93ebfa3835f8148a9ba6"],["/categories/下载/index.html","a3ae07fc5bb5142663d1740a843bc90b"],["/categories/安全/index.html","31d93ae9a071a4555e801cb987e9c6d8"],["/categories/建站/index.html","c664fa5d215721fb40e312a6d9c14733"],["/categories/杂/index.html","570af187c77a4442d84cd2b7f7ef174e"],["/categories/杂/page/2/index.html","697405d67e61737517f880be7c9f9a04"],["/categories/测评/index.html","4ea158ad8487074e8cab64763e1a5b6d"],["/categories/科学上网/index.html","9a6c6277a7567806cf24d578bc4513c0"],["/categories/科学上网/page/2/index.html","877613e1894d435ff00dc2b4c468a528"],["/categories/编程/index.html","541b6234c5a459f9e23887f0c79a6f0a"],["/categories/网站/index.html","366e4cff651e2523bde2a7a734ec06a7"],["/categories/网站/page/2/index.html","6bf09ccf3df573a0698fe15cbf18d6d3"],["/categories/软件/index.html","c2e93229ba9093b939ae07a3f12c3de9"],["/categories/软件/page/2/index.html","fcfb7f2dbb6ac16b2efae50e08638e3d"],["/categories/软件/page/3/index.html","647829e397afd83b5a79151bcaf90545"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","55804db7cb4db31e6200a091ec0c6126"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","017d2bf8dba8b9657ee72eeaf762e380"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","74bdf7fd3750c09f4e5d3c62c63226c5"],["/ios/index.html","d4c21f2f83393deef3af94c817fd4850"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/2/index.html","179abc606fc1adf9eebd6dcb08f071d4"],["/page/3/index.html","450d41fdfa0fb0bed647d3b529702e3f"],["/page/4/index.html","3d04b355c4c4b200ad974ab7b4e8c0e4"],["/page/5/index.html","59af515e0772e57110e34e9bfd07614e"],["/page/6/index.html","3e3731ab7f4e68d1bd50c1ce6f6475fb"],["/page/7/index.html","bd13f852dce2ec352c1b82f708e257b1"],["/page/8/index.html","e457ac705170c3709a707063234bfc8a"],["/page/9/index.html","115cea2edcbbdabed11b1792ac77dc7c"],["/payment/index.html","e8bbe1b25ec26253c9e2913f29176732"],["/privacy-policy/index.html","f96e0e7f3af3ff6d29bfa7376626bcd9"],["/rss2.xml","1885f9971a742c22fca571cdc1890b7c"],["/search.xml","8832ef150d6599570c555c3fb021417e"],["/sitemap.xml","70d410ac278ed85ab975a6fe752ee6ac"],["/sw-register.js","5d83cd90cf66a5ae5dc127c9dcdbde7b"],["/tags/5t/index.html","e2f9d52b296d6601c3fa5118d7a230ec"],["/tags/Clash/index.html","15fe75135060fcfedf8b88132ba4bee8"],["/tags/Clover/index.html","e1bcaaa6d4ba576949c7d931e78344a8"],["/tags/E5/index.html","267b95678ea1d5a3a6e24a6a8ff11838"],["/tags/FTP/index.html","891e5e1fbdeebf0ff32ee154016fa17a"],["/tags/GitHub/index.html","0d764bc8d2b0e2134cfe83e48c9bb531"],["/tags/Heroku/index.html","fd19da999adca46cdee9585102983063"],["/tags/Hexo/index.html","5a9a6c827132a037bc67d2b8614445e2"],["/tags/Lenovo/index.html","6d31b4614636d54fd559a4f3bf204cff"],["/tags/Oneindex/index.html","00de3971d20f870bb5ab31d38d8bcafe"],["/tags/QQ/index.html","a4dda6eb69023e17819283e956514a1d"],["/tags/QTTabbar/index.html","02c83ae5be6f7f667be620e66069dbb4"],["/tags/RX文件管理器/index.html","6969f91fa32e2ec576bfac2ebd19de91"],["/tags/Todesk/index.html","9b5f2bccef357382e79d4ceaf7d7638d"],["/tags/Vercel/index.html","ac2fc56ad076b3d8b4989b1a242b00c0"],["/tags/ads/index.html","d7d86dfbbd26a1db47ab118ebe8c5153"],["/tags/api/index.html","7da51765b9c46ccedc93310d63579ff6"],["/tags/app/index.html","4d4f4914184ed8514d75d255c4ad58d1"],["/tags/blacklist/index.html","442f47c960b95fa607a43dccc914900b"],["/tags/butterfly/index.html","340d88ef3050d2bc97b031061277c8ba"],["/tags/chrome/index.html","47abc5ddde4ed9c757714401e43e32be"],["/tags/cloudflare/index.html","5807f3f985d1f11e161989ebd7eded91"],["/tags/cmd/index.html","ce7ffa52a1ee017e3e5ad4ffe7034db1"],["/tags/c盘/index.html","4ab546bc412f2061cdc813b5b58696b8"],["/tags/email/index.html","0702de94915937ca901153af8fea9651"],["/tags/ewomail/index.html","1eff3b15060cd3d31299e98a0b3c5a7e"],["/tags/fiddler/index.html","4882f9db2a09564ba71b8260227f77e3"],["/tags/flags/index.html","4036a7d7c29c1a8f63f6085c9397d7da"],["/tags/footer，页脚/index.html","6c4210f557fd0b8c6486fa140d96db65"],["/tags/galgame/index.html","41e21abe6271dd111376f5f716519152"],["/tags/git/index.html","c43c497004e4320dfa845cc48bd69a43"],["/tags/gitcalendar/index.html","d2dc90f4202307ce046bb91433138c87"],["/tags/google-voice/index.html","6536cedcdbceb9e0aa8e02d0644b6730"],["/tags/gv/index.html","3e107035694ffa94aca62b6a41f3a343"],["/tags/index-1.html","25f3942b1d4627fdc75890f6d621e8a7"],["/tags/index.html","6cac11ad9d0c81e6afd2cc9accd70307"],["/tags/jsdelivr/index.html","2bded77ba1de190bb6dad4fac10a6358"],["/tags/linux/index.html","10594612a2cc4f6f2c0850f9a4ff58e3"],["/tags/markdown/index.html","c1ed0494a026eae2cdeb1835c9a3fef2"],["/tags/maya/index.html","beae9a26902c2f05376ae9da0abbd157"],["/tags/mklink/index.html","e9f7ffd45f61ffc76d3272ad847cac33"],["/tags/office-e5/index.html","30583e06e0cebc61ee931a292f94b1d1"],["/tags/onedrive/index.html","3babda738dd1234994cb01ee93953e97"],["/tags/picGO/index.html","679f9f930c1374abcbb9a855a0cbd763"],["/tags/pixiv/index.html","ebb7b3931e70ab13ec8c32ff09ef2702"],["/tags/proxypool/index.html","981640010a6abb39ae06da0524a07cae"],["/tags/qbitorrent/index.html","729d1922442725ee0ef352a887785174"],["/tags/raidrive/index.html","cecbe0607144d9129b995cbe9a7a73b9"],["/tags/screen/index.html","48049ad763c4d57e83723518e093d7f1"],["/tags/speedtest/index.html","0cff5de0e9d54523c957247687c94634"],["/tags/tap/index.html","c9a3849a68fb7eac43af1de4c4d604dd"],["/tags/top50/index.html","605c34df3ccf4f2d286746894982a86f"],["/tags/tracker/index.html","9ae0999b33cb1e4e6bed903aadc56ed3"],["/tags/translate/index.html","09efeb5c3326d459b5d946494d27a921"],["/tags/translater/index.html","88bdf526be5ad3fa1177907b9d101469"],["/tags/tun/index.html","9ca725171be9cdd23b95abdb0cea3e0c"],["/tags/typecho/index.html","f62f2ba484aea9861eeb854de0726114"],["/tags/v2ray/index.html","89d9885c93a7ef4f172d75334aa95938"],["/tags/vpn/index.html","1cda649266acd754ea742246412ca7e4"],["/tags/vps/index.html","03e0942576a596a9a1dc8773eaba1dee"],["/tags/windows/index.html","28c638e086adf9a9e0bde3b0d71b42c6"],["/tags/windows端/index.html","ec8b318187fc86ffc9c7917281f6782a"],["/tags/xray/index.html","647739f81fa84fee1af47d2cc759b91b"],["/tags/下载/index.html","d4aef2b601cdd3acdcc4c7086d2f085e"],["/tags/不限速/index.html","5d0f4a1151c93c82b3cb16fe84887098"],["/tags/个人网盘/index.html","7310baabd6aecd0d0c9668a9d2e67826"],["/tags/主题/index.html","ca3a12d0e77aab071cd7d2717c1cf4a0"],["/tags/云便签/index.html","2a5b815bc9449a8b29542e6ef10c2235"],["/tags/云盘/index.html","944fa9fa37779f97ca05ea9ed36e7743"],["/tags/人人/index.html","6a2b7ebcb567e2f21a9925abc01c3907"],["/tags/代理/index.html","2fd99dbc05eef3eee5b649e7b4edbee8"],["/tags/代码/index.html","f554b6270c9ce8f63330c2ba839b191a"],["/tags/优选IP/index.html","1145573c77d6cdf88723ff9c915ac1b5"],["/tags/便签/index.html","216a9cef16f5c83766c923c31ee86159"],["/tags/保号/index.html","b71fe25d837f5ead3fcdfa1b1bb9da3e"],["/tags/免费/index.html","e6e035edc161b5fe97f1b6cddbfd84d8"],["/tags/免费节点/index.html","2c36442dc6b126521755c14601bb87cb"],["/tags/加密/index.html","8944e0f0a61652e78d73bc9dbc429dd6"],["/tags/动画/index.html","747ebe076fc69087d7fe8a94ea5dfd41"],["/tags/博客/index.html","9d834646532f1662ebd13a79f4f5ff4c"],["/tags/历史记录/index.html","d4e8e5205b86482ef64e5d26c59f1107"],["/tags/压力/index.html","fae66164caa7a6744645048642ce29f9"],["/tags/压缩包/index.html","ddab51931660d472407ed1d9dab5a972"],["/tags/反代/index.html","6e7f33ca1efcef9ab85934297391d2af"],["/tags/可视化/index.html","6d40826f29f9a60cb1147d88b9279d41"],["/tags/命令/index.html","c54083d0ebf1c5b2c03512bca75d457c"],["/tags/国家/index.html","f06119f8172493ee938a197fba97be85"],["/tags/图床/index.html","3fb380db7a5a921bd5c84bbc4443714c"],["/tags/图片/index.html","bdc9a2887e091c1e3a5e67b898b276ae"],["/tags/域名/index.html","6959d208fad82c537391bf8a5b667c1c"],["/tags/多标签/index.html","fd1306df80869757aa46a8dda63845d0"],["/tags/存储/index.html","14326327ccf9e852d34955e287dbfd6a"],["/tags/安全/index.html","3306208775d9db78acae2162b47a3e2d"],["/tags/安卓/index.html","bed00ca53371efaeb3605dc7ceb75b7f"],["/tags/宝塔/index.html","913657a51416719486219d1a7884809d"],["/tags/广告/index.html","9168b4dd58ce9a7e5ab57ef871e80266"],["/tags/建站/index.html","24e758dc80435955c9cf814405bba823"],["/tags/影视/index.html","3b78a21e9470f288b3fec6e0285bd24d"],["/tags/快速启动/index.html","ecfe01369b3103b371960e2a8833d782"],["/tags/手机/index.html","dccfff091922fb88931aac023780f1f8"],["/tags/托管/index.html","c869472fa6adf26b07e9c1c40b0b65c1"],["/tags/抓包/index.html","340a180bfc887cbec34845f8b95c7a73"],["/tags/抓取/index.html","93773cd9a07ed31d636f38b45fea561e"],["/tags/投屏/index.html","c810d6b3a13a9a33ff757b79da3de9ca"],["/tags/拓展功能/index.html","c5f80a9c089da796d3dc9d06faee175c"],["/tags/挂载/index.html","68afecab2b9a1993d5a06058be76ad2a"],["/tags/指纹/index.html","2986f1da7237397f0285b7f86e7753e2"],["/tags/接口/index.html","923232b5422d7b4525fd4a528d0f5d38"],["/tags/提取图片/index.html","01b5b32e221593d431138269851037ae"],["/tags/插件/index.html","89d2342e7fac88f8a63f9cb66eef2204"],["/tags/搜图/index.html","f19cbc993254b2aa484b5a7bdd5e74dd"],["/tags/搭建/index.html","eea373f1a45d95f9d317243785863de2"],["/tags/撤回/index.html","57d921eeedf7dfd7f70a0446bf6905e8"],["/tags/播放器/index.html","61bd9fc8c136a5b27a6cc84fcc6f6176"],["/tags/政府网站/index.html","ccde30cc7833baecd4b6d1dd1d10599a"],["/tags/效率/index.html","156e7d7c99d6ece87ee9ee1df4052b5c"],["/tags/日历/index.html","ce58e781a165804f982d778011d6e2d2"],["/tags/服务器/index.html","0ad8359d4198d4c207b58b038274569e"],["/tags/桌面/index.html","5729c394b64b7c6189778c3daabb68b3"],["/tags/梯子/index.html","e30aa6adfd42bf3d6a1e6b5008e7644a"],["/tags/检测工具/index.html","5747356180821bef27f6fbb291b8c908"],["/tags/汉化/index.html","fae9f87ee53fa80f98c0da008ac1912a"],["/tags/测压/index.html","e0c8439779ebed0165486d8102f7dcb0"],["/tags/测速/index.html","2c305c094c7f0e8e91eacc2ea7a1a4f7"],["/tags/浏览器/index.html","c01ff6d6613cef97da5df08850fafcbf"],["/tags/清理/index.html","25dc916b6912fa8d4af7267a5ffdfbd6"],["/tags/滚动条/index.html","953729492356a15e8375f6409f0eecc0"],["/tags/电影/index.html","abb75455467084959753f45ed36e1445"],["/tags/电视剧/index.html","495cc51fe23cb27c740dc7a8f61b9800"],["/tags/白嫖/index.html","54f52888d2a8f518ea906088059c711c"],["/tags/百度/index.html","8dfd524a55110ecbc1fc1c1e5aea60f4"],["/tags/百度云盘/index.html","dac3190feaf558949526960d81b12e1f"],["/tags/百科/index.html","9b2812afd65543429c5a42395ac67549"],["/tags/短信/index.html","6d4cb1b3527a977991dab45ea57daddf"],["/tags/硬件/index.html","86ea24dff75e7dd9f7956268737a5aea"],["/tags/科学上网/index.html","06cbfe6c25a0cf04418358ef4cd2be64"],["/tags/空间/index.html","9a3182f286720b838e6e404dc29413b6"],["/tags/笔记/index.html","2f1e58f756f4da4c85d23882710bb906"],["/tags/简洁/index.html","3bd5b63c89cb170d1979cdff36d2a2bf"],["/tags/简约/index.html","babe74a9b61bd348747b7df9210cac09"],["/tags/维基/index.html","9f3f08bce5657c9baa596b7f14863458"],["/tags/网易云/index.html","cc6813aa230a4274dfae6b7774cc510e"],["/tags/网盘/index.html","e45ff39976cc60e78f4c971e5be2f40c"],["/tags/网站/index.html","25d4e415ca18ec4fc8019c434151833f"],["/tags/网络/index.html","6e1d3e50c2f674ab2c9bd7b862ede88b"],["/tags/美化/index.html","fb9a5de875eecdbefe805ae8bd0b244c"],["/tags/翻墙/index.html","4f66d66972a9f5641c503a862eddb0c4"],["/tags/翻译/index.html","87f4f92ca851ed8238837b8e5fcf4b61"],["/tags/翻译器/index.html","94874e95ef7728803171bae407727bb6"],["/tags/聊天室/index.html","948ced7ef73189f1a9e3b3035e2079f4"],["/tags/联想/index.html","161f2184b0f63983428bc24ac5689498"],["/tags/节点/index.html","890878dcb5706c64fb8d3c602d43287d"],["/tags/虚拟手机号/index.html","faf722a2d13df3af33819229d92a8092"],["/tags/补丁/index.html","44a9938636ff4d4162716c4d071ef4d3"],["/tags/视频/index.html","6ed04fe283484563f6f8551344d36708"],["/tags/解析/index.html","7d602cfe0f090f593d591714e44e3862"],["/tags/订阅链接/index.html","b13f3d62167445ff63dcf36245b343d5"],["/tags/记录/index.html","0b92dd463c6ab0ac56766d2b52df0c8b"],["/tags/识图/index.html","bd537a95095ac009caf72d525cf9097e"],["/tags/语言/index.html","6205cea88fe824e53fc86a16b090fa1d"],["/tags/资源管理器/index.html","c5e7bfbf6a177173fcbde8dfdc8ea387"],["/tags/转移/index.html","2152909cb6fd172a8a3378e1aa8f0a5c"],["/tags/软件/index.html","6268f69a4caafec80684d11bf2541506"],["/tags/轰炸/index.html","f743821c3b9596a2b00785564c558154"],["/tags/迁移/index.html","c973212de20a9f5f50a18fb4ce0e0e63"],["/tags/远程控制/index.html","ba89cbfdd716b32d49c6b38d765c4151"],["/tags/连接/index.html","da06ceb4a7ea51f6a1cc425f3cbda20b"],["/tags/追踪/index.html","fc1be1507460c30a31508b53120c298b"],["/tags/速度/index.html","53ac040f1ae1781a0a51cca11f5bce25"],["/tags/邮箱/index.html","528efb61ebf37ebb5e2ac31af9878eae"],["/tags/酷炫/index.html","7a604375a87c8c173911ddd821299be2"],["/tags/钓鱼/index.html","445dfa3d4936409028a56bb56d3a34c5"],["/tags/镜像/index.html","f0a439e3b47dff520938905555c93371"],["/tags/随机/index.html","de759bc70b6d1e4fcf4373b3635747e1"],["/tags/隐藏/index.html","ab920c5366f969767c33f72be504311c"],["/tags/面板/index.html","8b5d10b836793dd5fd6c0e098f4b717b"],["/tags/音乐/index.html","3af05c444f2a1252f315dd752e4ad0c8"],["/tags/高颜值/index.html","c83f84d93fd66d8c81c760be0d3a9cbd"],["/tags/魔改/index.html","b2014dab4af628f9d03d096f33ea09a2"],["/tags/黑名单/index.html","128650214396faed4160d9d0a5d4e42b"],["/urls/index.html","e4e87d1a7bcc683b69f4a573166ee6aa"],["/vps/index.html","5c648d5bf0cb2d986cadce0c58681572"],["/支持/index.html","20e03a3c52707b361051a03982fd68a3"]];
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
