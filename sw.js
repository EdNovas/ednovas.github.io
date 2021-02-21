/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","a7879355368e6814c4861d093e632972"],["/2020/11/29/clash-windows/index.html","cb6d9750b723b575f585cc7be697cade"],["/2020/11/30/websites2/index.html","d62c518fb1fb8d48e3b4c4e3d545834c"],["/2020/12/04/iphone4s/index.html","90fa76c4a7b6a988863a39a7e1c88eae"],["/2020/12/04/onenote/index.html","de4edf8c6a59cbac7491ea413e4c7936"],["/2020/12/04/wesites1/index.html","15e2e08d9975e65902161b294de8fe3a"],["/2020/12/06/nokia808/index.html","2dec2c5c0fe6ac525f27455cbf1dd7bd"],["/2020/12/07/ipad1/index.html","50984f18eef98b31434cdbb41c2b0273"],["/2020/12/18/freesubscribes/index.html","75f91874b872501de073daa2e3ad88d6"],["/2020/12/19/musics/index.html","18f0148fe6403899183a79deab97fe94"],["/2020/12/19/shadowrocket/index.html","813cd0a9599c987878a6ed13d1996502"],["/2020/12/19/v2ray-windows/index.html","609f913989af5ff2d61627183e056069"],["/2020/12/19/v2rayng/index.html","89298613a465219104a08f3b8b23fc27"],["/2020/12/20/beoplay/index.html","6b05e89048202422b960e3610b37efad"],["/2020/12/20/订阅链接转换/index.html","21bf7d6f79de9c37a8af73adb56189fa"],["/2020/12/21/chrome浏览器下载提速/index.html","e5814eca810d8e26e6c0fb5c87ea2a15"],["/2020/12/21/免费128线程并发下载xdown/index.html","cdfb12f60065245c02e7dfc119c2f952"],["/2020/12/21/免费32线程下载软件ndm/index.html","a5c035f5e76fe85402de2ec4cd9a2ff1"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","c8b45076ada93542230cecfd19c1559b"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","500229ce53a4d2ec3458d666f281bdd7"],["/2020/12/21/广告怎么知道我在想什么/index.html","cdf831dc1f8f3709c07d2e814cfdfd20"],["/2020/12/21/无名·引子（小说试写）/index.html","9d12645e1d91ab40c90b888104801689"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","b6c6c1dbada5d306f4a871085a27f2b0"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","102f7e2e0e1b39d12c580df6b673ea30"],["/2020/12/21/高速轻量下载器aria2/index.html","936125f0e15a010acc47a7d9c708ab9f"],["/2020/12/22/2020-cee-roo/index.html","48f7be8aac350453974af1ea8c36ad5a"],["/2020/12/22/firefox插件、github、steam富强/index.html","29b74183598c5dbf88f20ed22892f38f"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","c897e0e4af38efdd765ddb1444c2a43b"],["/2020/12/26/python-day-1/index.html","3ae992748a4d79088851590b979a16da"],["/2020/12/26/python-day-2/index.html","4ec45d479dc09f5e7423fd5b67cd0669"],["/2020/12/26/度盘不限速下载方式一赏/index.html","768138a26c78c64cd6bba0ce1128ead5"],["/2020/12/26/添加开机自启软件/index.html","f6e601da562164f3468eeee26f8072ae"],["/2020/12/26/电脑端截图方式一赏/index.html","221e57799e4d72e234f8c7e42e983195"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","12c0bbad114441a582f5e94e37ea932e"],["/2020/12/27/最安全的浏览器tor/index.html","6addd5b6543a133c02c5e9f802b7ec41"],["/2020/12/27/网易云刷等级和听歌数量/index.html","aa56f60cf2ffcdcb36975414b66cdd15"],["/2020/12/28/freenom申请免费域名/index.html","ac31f66748405f08a15879607d484c3f"],["/2020/12/31/机场/index.html","e8fd471a0eaab7cf8cf6393e05b14423"],["/2021/01/01/M1/index.html","5b9baeeed96fbfc58813f7a213c6c8c0"],["/2021/01/01/compress/index.html","81048556a68617395235ace8a3fd4163"],["/2021/01/01/infinityfree/index.html","fae60ea6f9d71055c38e6ae9330e2534"],["/2021/01/01/硬核翻墙/index.html","c563cf0d7f75540dcec1e9f296c34cc5"],["/2021/01/02/qq/index.html","692c5b46bab6439de58ff125a6fb5a39"],["/2021/01/03/netch/index.html","bd0f4c9b35dabdb837c6fc9e3d859c5e"],["/2021/01/03/waifu2x/index.html","af890ca8154b94cfd5840eb51c62dd20"],["/2021/01/04/ads/index.html","9fb4c5e04c3edbe33218233af051ee98"],["/2021/01/04/games/index.html","94d1337213236d238c9d03fcb4400f09"],["/2021/01/04/heroku/index.html","cff731cabdc47701c9d0de4057ac2a7c"],["/2021/01/06/movies/index.html","13fb41ea1a9398b2908ee2bd2c9c49b5"],["/2021/01/07/google2020/index.html","ba41e2ece81426652974ff2cacc2c531"],["/2021/01/07/lucky/index.html","5ce9dd0e75835fd52a07708cb6132d59"],["/2021/01/07/spotify/index.html","0f091425a57688f6bd21ad69750e77df"],["/2021/01/07/thunder/index.html","d674f35c21af11d4efd0bbe435f4fb06"],["/2021/01/08/adguardhome/index.html","e0620bc77c225532c0dc17f237786d39"],["/2021/01/10/IBM/index.html","b443c58dda8ed590ed2bb9740a229b2e"],["/2021/01/10/potplayer/index.html","745fc7196fa1893cdcde1a0bc0e29728"],["/2021/01/10/sakuraanime/index.html","7c81b48f04c31c506482979f66b1528c"],["/2021/01/10/美剧星球/index.html","a186de6afbaaba9fdc6c5101a910acd5"],["/2021/01/12/telegraph/index.html","97cef37e8bfe3899fc3dcadf7029d49f"],["/2021/01/14/comics/index.html","e5e9f7d6d029c7b7148664afc1f35cfc"],["/2021/01/14/ftp/index.html","b916bc119cd0397d60042f644dd4ad54"],["/2021/01/14/oraclecloud/index.html","66209bef957c50054dcd7b9d46be1209"],["/2021/01/14/porkbun/index.html","f8d5423e3de67edc4444985b94dc3bbf"],["/2021/01/14/powertoys/index.html","5a8d8ab80ed5feaaa96657a0e622e528"],["/2021/01/14/taptap/index.html","2e5d60305f9a7fcb2d62f28e6c26d5fd"],["/2021/01/14/ubuntuvsftp/index.html","c6299c57cf33b7b4e26503674dbdc8e2"],["/2021/01/14/小说/index.html","48e2693ac3704de14f5c06cabd58609b"],["/2021/01/15/freeproxies/index.html","5ee857a98639901bfd63c4693a07973c"],["/2021/01/15/incaseformat/index.html","a7a4b5ab52f5e5761b4890bbdde9e556"],["/2021/01/16/euserv/index.html","ae6ac78bfd2b098762c795e8d34c0469"],["/2021/01/16/winxray/index.html","0e303f00ffb56906484522a37674f683"],["/2021/01/18/qqreadhistory/index.html","d2c3e6add12c3f96abaeac2f72d0f863"],["/2021/01/18/qqrevoke/index.html","d8e9947cb927d382d1d55bbb3090ec4f"],["/2021/01/19/freevpn/index.html","8d4381d457e77d36ac52076dcc9d090b"],["/2021/01/20/browsertrack/index.html","bbae6c490b72da7cb4b29939348aff1e"],["/2021/01/20/v2ui/index.html","3fae76096f2edcf75618a7005d2240d1"],["/2021/01/21/failedtoconnect/index.html","7a4e069d0925658716247c11b1054540"],["/2021/01/21/gitcalendar/index.html","d0dbe05956d2dc962d08e569680bd25c"],["/2021/01/21/markdownformat/index.html","b084c648a181452446edb38546bc1323"],["/2021/01/21/markdowntable/index.html","e05ee3db46c0d96634911f1931985e64"],["/2021/01/21/vercel/index.html","1492fdfe01f2971b07688e191bde3e4b"],["/2021/01/22/hardware/index.html","7cbdcaa7a4129d85c727d7131c83861c"],["/2021/01/22/muviz/index.html","28ed8961526f7205f2056ee81170c26b"],["/2021/01/22/randomapi/index.html","6228f81237c78b646ae38c0c4b52e47b"],["/2021/01/22/searchimages/index.html","e0e6299234025158517df6672db04c79"],["/2021/01/23/RX文件管理器/index.html","598337d7ea07eb900a0a830e8f22abf1"],["/2021/01/23/chromeflag/index.html","2915c90b8df5f50976be1eca5ad023b7"],["/2021/01/23/qttabbar/index.html","a0d233d136f39ad4fb5e19987cedeec9"],["/2021/01/24/githubspeedup/index.html","241a00007394ba486d83d63c57b9a09b"],["/2021/01/24/jsdelivr/index.html","cb076c2a012cfa5a4f5830a974aa1daf"],["/2021/01/25/note/index.html","34062b4db565ec14a8f036bce047868c"],["/2021/01/25/soul/index.html","6997d46985f392f50aca9405aaf346f1"],["/2021/01/26/herokuxray/index.html","14a6f4d4380e9779af434fa61b6f96a5"],["/2021/01/27/proxypool/index.html","887ee906fb4f50260debc7b1e9ba1214"],["/2021/01/27/tracker/index.html","68d323515a56ac6b2b64c5f4fdacbb68"],["/2021/01/30/pandownphp/index.html","1dbf139da580ea7cbe5cc54391f34519"],["/2021/01/31/newgroup/index.html","5c74b8f33f94b312cf730c59c8df3345"],["/2021/02/01/clashlanguage/index.html","d71cb48b41f717027310a87d986a429b"],["/2021/02/01/encrypt/index.html","71a980971d020ec8db7f711d8c1cf101"],["/2021/02/01/footermotion/index.html","bffdac80f765774693832215df2dbe1c"],["/2021/02/01/gitter/index.html","3d2eb962d8959b9ca526515ae47131bb"],["/2021/02/01/pixivtop50/index.html","55c80722ca180bbfd51432e167af0522"],["/2021/02/01/scrollbar/index.html","22b93e63dbf8d39ece0bcaa883d0caaf"],["/2021/02/02/clover/index.html","23bb868a1c5e07e9f2ccf17b382a25fe"],["/2021/02/02/maya/index.html","8b3dc238533f00271cf39618b49dbeab"],["/2021/02/02/speedcontroller/index.html","fb19b7a87e0f388ddc83a29006dcd520"],["/2021/02/02/yesmusicplayer/index.html","83e507191c90942b36bf577c7f122ee3"],["/2021/02/03/lenovoonelite/index.html","6ad4b4f2651b19d5a4572a2b19cd0fc4"],["/2021/02/03/skipads/index.html","b52ed49fb568a2954dda4d558a956561"],["/2021/02/04/picseed/index.html","1539cf10ec1e5afa7f0fb341c32bdb58"],["/2021/02/04/renren/index.html","f41ff94d284db0abe8e7e978f7c308bd"],["/2021/02/04/serverstress/index.html","3ba337fd8c18c2f2c3a7c1828931bb68"],["/2021/02/04/wikipediazh/index.html","3b72dc8a05f16dbd0810cf6407d0563c"],["/2021/02/05/googlevoice/index.html","b9d01e5e10ae3b478036afd839332b38"],["/2021/02/06/clashconnection/index.html","7319b7ebcaff1dc02cf06ba77b75144c"],["/2021/02/06/gvtransfer/index.html","a17746588c2d99d4b3c449d96ee12e24"],["/2021/02/06/todesk/index.html","8b452096a9e527fc8bac37a898d23d06"],["/2021/02/06/vpnblacklist/index.html","bf083476e946ef40e8afdfcacf9fa987"],["/2021/02/07/mklink/index.html","7e2da7d120513a7f0265b7bf7b790aab"],["/2021/02/07/speedtest/index.html","85f24e38db3f6ceeefb2723f07a03877"],["/2021/02/07/translate/index.html","cc1dfa637bfc73964d77adf796aa2089"],["/2021/02/08/ewomail/index.html","b66abe735da9637ad2478c11fdca86c3"],["/2021/02/10/officee5/index.html","25867a85cc56117c7bbfa53073f7eea3"],["/2021/02/10/raidrive/index.html","55421fe6ad4aea6a8dbdf4f898c7e173"],["/2021/02/13/e5sub/index.html","2d9f8f666fa2cdec63ab05fc031136af"],["/2021/02/14/screen/index.html","9e316ec8a44de871ba8058e7a7165275"],["/2021/02/15/clashtun/index.html","856ee65318b0a438845c3579798e0875"],["/2021/02/15/messageboom/index.html","97ed651f637dd8750350ce5fc593bcab"],["/2021/02/15/oneindex/index.html","21613425bf03b64bd59f9366e1dc002b"],["/2021/02/16/govsites/index.html","03ec94cd83dc81c90f7bc95339c7a7ef"],["/2021/02/17/hexototypecho/index.html","eab423e00185ce0db5aee4c6719fef26"],["/2021/02/19/fiddler/index.html","df974f29491d1a5d4534ce3394c4d71b"],["/404.html","b7451c221cf97b275cf7161fec24e5b0"],["/archives/2020/11/index.html","75c98eb5585ef306cb9e58d06fd8887c"],["/archives/2020/12/index.html","46dc476aebb21ba509ff1fc3641eb5a9"],["/archives/2020/12/page/2/index.html","b61f9616d5eaeabb5156d6f3ef8727b0"],["/archives/2020/12/page/3/index.html","5fadb2827128d47a5095ee01b165048c"],["/archives/2020/index.html","ecf762ff05577233c247d22887a14ceb"],["/archives/2020/page/2/index.html","97cdc250a0d4343af27f3af4f03879d5"],["/archives/2020/page/3/index.html","b4891374f9ad654b950a07ef3782982a"],["/archives/2021/01/index.html","688ed48a0a1b6ddf243ddcf188b2d10b"],["/archives/2021/01/page/2/index.html","e0f629bb887a9d18556d8b0b66807169"],["/archives/2021/01/page/3/index.html","3fad5196383f06e264636a83c34a26a0"],["/archives/2021/01/page/4/index.html","40e11ad7f696ad74f2c1381a1a6af654"],["/archives/2021/02/index.html","503614f3c1dca7d3001868eaf8f38f53"],["/archives/2021/02/page/2/index.html","40be530df79f4c7a539da6024537ffee"],["/archives/2021/02/page/3/index.html","c3e0189f8dda9f40f262e84c31648d10"],["/archives/2021/index.html","629ad7caf69e30ba802056cb9125d460"],["/archives/2021/page/2/index.html","f3a40a50e17b6787d2d2517feed4b041"],["/archives/2021/page/3/index.html","e365e938d3828787f7b457bb32608f8c"],["/archives/2021/page/4/index.html","72165df0d2c804352ec1a01c06aea9f4"],["/archives/2021/page/5/index.html","a14b10485c32a53440e36aa2ebb8c5f4"],["/archives/2021/page/6/index.html","94c7a5d98493e4024fd69b0d09e25edb"],["/archives/2021/page/7/index.html","327d411c780e982850e35544995445d8"],["/archives/index.html","7e54b0923007ad9e1dbea9c15c9507e8"],["/archives/page/2/index.html","c82c7246e5d11af3271236843e4744bd"],["/archives/page/3/index.html","d9d52fbf195f1167a2edf086c2aa3a14"],["/archives/page/4/index.html","efd039337324a8372a675f8142c444eb"],["/archives/page/5/index.html","1f988a02a7ddaccace2de882e4ccc616"],["/archives/page/6/index.html","b27c3ead7fdf6bed6fcafe77af4053ba"],["/archives/page/7/index.html","dbef4a3c46385e065f791796e0fbb592"],["/archives/page/8/index.html","e593d6cf14aea64c7378516e2da4df65"],["/archives/page/9/index.html","81c5eeb5b132ea1aa7b284758b4a857a"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","f17f7d2d35d9831be9537d564468de64"],["/categories/index.html","9a9cf26bef2047d5cc925727acf2b3c7"],["/categories/下载/index.html","d4dc43e1bab07f60a84429f877392a79"],["/categories/安全/index.html","3e1338206583906045d6f1e04f0f218a"],["/categories/建站/index.html","a94f116babb2cca3cc074116c75afbd8"],["/categories/杂/index.html","1606ae428b016842e199368d6c37122f"],["/categories/杂/page/2/index.html","fd0b5f15f7fa2942dc94e51586078625"],["/categories/测评/index.html","9e751e8cd029687fade37561037dee6c"],["/categories/科学上网/index.html","7b40b03d4592eb684914a1fb1bef355e"],["/categories/科学上网/page/2/index.html","f4457b793d055369fcc0c8060aa42ed9"],["/categories/编程/index.html","6d52d9f800c74cb8d864b09e87e600d5"],["/categories/网站/index.html","8349595cc641a288db08f54ab8187586"],["/categories/网站/page/2/index.html","e5752a647891d18842ee53a082ec3fed"],["/categories/软件/index.html","6cfb67a6333e5b4c8659757471548e77"],["/categories/软件/page/2/index.html","819170688773077e12de6afad1f05b93"],["/categories/软件/page/3/index.html","26ac44e492f15bfcf3de1a741df3f282"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","761cab187cec8987504472690a847b41"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","3bfcfd0b60fb36151036a72ea30f6b21"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","d44b7d0c23ba08ac92d49143bedcb166"],["/ios/index.html","aef44a0d81d6eef307cc1672c3f5e790"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/2/index.html","3ffe17826edf89b7b7e7cce4bf37a886"],["/page/3/index.html","043e20430424cc7a119d57778c7becf3"],["/page/4/index.html","0a01cccb83f23828d4e67b94ceb72fff"],["/page/5/index.html","c48b599b149881afc13d2e9780b2dd29"],["/page/6/index.html","ba7bfa54bc617a109c136ebddd5c6f49"],["/page/7/index.html","59d02050eaea40d510547afcb39e3cac"],["/page/8/index.html","38b07f6a10b17fa2c574df2ea88407bb"],["/page/9/index.html","a6d929a3b059d4043733ce781a92e5e6"],["/payment/index.html","26f1c0ee33239d354ebc30f72a7f01c2"],["/privacy-policy/index.html","9d61d136bec4a4facf7913e6966965a0"],["/rss2.xml","352470a4462b69b6f4f7d98cfca9a854"],["/search.xml","5f282a83c9e5213794b9cc81bbe36d9b"],["/sitemap.xml","70d410ac278ed85ab975a6fe752ee6ac"],["/sw-register.js","b254f2a3628377a790629337b91337c7"],["/tags/5t/index.html","aa031d50a93d5fe06cb6aeaf0ea8a2b1"],["/tags/Clash/index.html","7aac660f3c5fbe0420e1c8ca09e53e00"],["/tags/Clover/index.html","bae693b2860f9bfe483d76e00c623dbd"],["/tags/E5/index.html","9614d5e313d1d1a670d727928978f438"],["/tags/FTP/index.html","974dda918c65b4f4b4c90f2cfee6f6da"],["/tags/GitHub/index.html","59689d00dd3aad07ca4c59326a534da4"],["/tags/Heroku/index.html","bdcbfbb41a488235c882347dbea53f5c"],["/tags/Hexo/index.html","fa28f3287b12ad0a5a513b174258f10a"],["/tags/Lenovo/index.html","1d334bc0ee74116e11d452c55cb2b608"],["/tags/Oneindex/index.html","f72ee26cdbab10c7e3e3c70f54d30242"],["/tags/QQ/index.html","9092c16095be119505cd56cb6cfb0861"],["/tags/QTTabbar/index.html","257221aa4a192dce80b0f01bb483a574"],["/tags/RX文件管理器/index.html","76736a5bd7e5174ed07c54894ce058ee"],["/tags/Todesk/index.html","ad7974514b206ce8ce87c49d10a059fd"],["/tags/Vercel/index.html","a91fcf5f669727658fb109643d3758f9"],["/tags/ads/index.html","79bcbaa88ec95e8f76b8e6061bc9828c"],["/tags/api/index.html","cc21ef902ebb4db188edb84fa586063d"],["/tags/app/index.html","d20241e7df80237b8af5d60f1e0208bb"],["/tags/blacklist/index.html","7f53727a433a99ba4b49dd90f44cee28"],["/tags/butterfly/index.html","464876d87397707394a7e5fe2708a15c"],["/tags/chrome/index.html","0d261294b8d59e6cd53f048022d75dce"],["/tags/cloudflare/index.html","6daa9274659096c889e35ccbbac1340f"],["/tags/cmd/index.html","b34ddb9431e1927b8dc2692b63f1ab65"],["/tags/c盘/index.html","42938cc34041a91da09cd5bc75228cf5"],["/tags/email/index.html","87eee9553c7afdb8e878ecb70b3ac213"],["/tags/ewomail/index.html","2710269d3223268233f7e86ab5e88d8b"],["/tags/fiddler/index.html","57b3315f207b642383be0da5ce49380f"],["/tags/flags/index.html","0c212e9c6317ebd721e38ce6ea61426a"],["/tags/footer，页脚/index.html","ff65a1e71ccb24965b1752662940c3ff"],["/tags/galgame/index.html","25ad8004db3dce11e0573f032e54af5e"],["/tags/git/index.html","9eb0abb958918755a0201120fc55719d"],["/tags/gitcalendar/index.html","88019ee38c94dcc2b56a7c3467d5bd32"],["/tags/google-voice/index.html","967e4f1d127731982d0062683cc85d7f"],["/tags/gv/index.html","6e1687a80531064695842d739e6ef17c"],["/tags/index-1.html","5fb91731d2266f226096f0249877f6ce"],["/tags/index.html","1e65091ce7778ac907db0783d8102830"],["/tags/jsdelivr/index.html","cdaabccfccae94b9d55e5d5d96621e78"],["/tags/linux/index.html","5ee5f3bc244ca179722cf4c086f7230a"],["/tags/markdown/index.html","6bc2f877b3e60525f0c2077ad855ceaa"],["/tags/maya/index.html","4b4bfb3aafc60f9bbe6c40c912fa3092"],["/tags/mklink/index.html","f53450474ef4f6027bab31ce75851c55"],["/tags/office-e5/index.html","7235e3416feab44d3dce85c33d908e62"],["/tags/onedrive/index.html","994b7a7598ee6509be5ea380b4e43518"],["/tags/picGO/index.html","645c920172d77dccb1739c070c7ed9cd"],["/tags/pixiv/index.html","c996ceeb6ba289a00b680cec579162de"],["/tags/proxypool/index.html","85569759cbb9cbb55a5372c3382fcbb6"],["/tags/qbitorrent/index.html","a42a27ee6162da887674332149881cc2"],["/tags/raidrive/index.html","6758fb211d5c0c1e062e343073606512"],["/tags/screen/index.html","54a7f073b4e471dbec517f0daddc83b9"],["/tags/speedtest/index.html","fda87dcf454963308cf06eab5aaefbe3"],["/tags/tap/index.html","9199367859bb848b7d421bfb484f254b"],["/tags/top50/index.html","952929d0023de68f1e385e2a9e1c3163"],["/tags/tracker/index.html","7d58a5bd8a58ae808af54010799ad812"],["/tags/translate/index.html","17b585e89d83d14d9843b0f5da2decbd"],["/tags/translater/index.html","abfce01466f983a1c1a8a0ad25ee39b0"],["/tags/tun/index.html","7dde58afc99a3d89c57ad712f3de7b64"],["/tags/typecho/index.html","519f5e6cd0a317fadc7c80f1a26ad272"],["/tags/v2ray/index.html","94a64e0be6fb784d394cbac6855c7700"],["/tags/vpn/index.html","033cab51fb0a4bb789645f66b8feb232"],["/tags/vps/index.html","35f864e16d65bb191818b618604bd30c"],["/tags/windows/index.html","07fd9f0c8394a7732b9eb724fe7d0b15"],["/tags/windows端/index.html","0f60faf6fb38d81e27411a4cd83018f6"],["/tags/xray/index.html","1c9b88d4a3d2f3ae6251c0cd1288f705"],["/tags/下载/index.html","619b3f88aa8a7fb47aa2e567d49b5394"],["/tags/不限速/index.html","53586271e5b01bbecf7674fdcd4c8b52"],["/tags/个人网盘/index.html","643cf8c2ddf5168bfc54997b65f7be8c"],["/tags/主题/index.html","e0912a33841e1f0980b3e8767aa4536d"],["/tags/云便签/index.html","3a255a9c56ee7057d0fe144c4a70add3"],["/tags/云盘/index.html","beb0b869be9b5d6c843b725af85aea21"],["/tags/人人/index.html","95cd1d8db978c6607b948be45cd10cae"],["/tags/代理/index.html","db37fe7bfe106a1f7215283562be7d4a"],["/tags/代码/index.html","a2fe1dab56793cded90fe3d36bb17f43"],["/tags/优选IP/index.html","e7eb41da2de22ff326ba58ce0f4f58f1"],["/tags/便签/index.html","53cabd652478ae75a454a8f9fad197a3"],["/tags/保号/index.html","a3bc03699d546a75b518f51958cf84ee"],["/tags/免费/index.html","e4466238f8cae5403bf47b8840681651"],["/tags/免费节点/index.html","49f9c5f259720e80babc8eaab498b8b6"],["/tags/加密/index.html","f38025c4d3992e643d17662df980bccc"],["/tags/动画/index.html","d39baa86fdde6da7b141ffcb4db078a5"],["/tags/博客/index.html","49d420c14ce4204611755143dea5cedd"],["/tags/历史记录/index.html","b68f1e0aa5342184f4155be5413163b5"],["/tags/压力/index.html","53d2f29026b26cea07f8466d384c6f71"],["/tags/压缩包/index.html","e5eb483582abf6ad512d4ac6e3129220"],["/tags/反代/index.html","ef3e08889d00de8884ee59a4911ebe25"],["/tags/可视化/index.html","cc6ccf63de0458fe1c7f92bcc0823a8f"],["/tags/命令/index.html","8d4b6d8ae4b1acc3f3e5b0ff296986a4"],["/tags/国家/index.html","21847d7151640773e416114c0d2fffd1"],["/tags/图床/index.html","adf2d6cdc4a16058a081d6ad9b66ca1e"],["/tags/图片/index.html","0288f12ba6368daf3d62ce6731f1d4a8"],["/tags/域名/index.html","94950056a33f35a5f646b7ef33a8d090"],["/tags/多标签/index.html","746f65ff91304eda77e231f244b23a5d"],["/tags/存储/index.html","6a3d9f9877de42a302d427cddd296db2"],["/tags/安全/index.html","d18d6c1d65ff4b4eb9eaeec0eea6a16c"],["/tags/安卓/index.html","540bcacaf459752912f19483b168967b"],["/tags/宝塔/index.html","7f037c8d73eb821869d0fdb2e3c2ae27"],["/tags/广告/index.html","09e44a3f3a7552abced204694d16bc4c"],["/tags/建站/index.html","7dddee035266fc524c06eb3bc2b7aa1c"],["/tags/影视/index.html","b01004514ee5512199f4064bd344a69f"],["/tags/快速启动/index.html","a046230604065f257c8eaa3fe4f66cb3"],["/tags/手机/index.html","12cdd1302fcc48ee8c79d185586b390f"],["/tags/托管/index.html","dc758119f71de688544aebe8986bb8bc"],["/tags/抓包/index.html","eacecacadb1cf0a843e1cd5b86459f4a"],["/tags/抓取/index.html","b791b5f00728b4a5e066b17c8eee586a"],["/tags/投屏/index.html","5c6e48c654e598a9176e65e2c0154bba"],["/tags/拓展功能/index.html","b7d221faf60c3d32559899163bb7c1ea"],["/tags/挂载/index.html","267f9debf0803d56f60a4b1108c3bff1"],["/tags/指纹/index.html","f22e655506a57c004b961ed470620016"],["/tags/接口/index.html","c1e6015fd4cc09110f187695f917623b"],["/tags/提取图片/index.html","f946f3dc894a0a8e8f1794a4e5429f37"],["/tags/插件/index.html","7872d6bc676a450852967b91955f1769"],["/tags/搜图/index.html","53a6b192c5c9d8c44884479128b32747"],["/tags/搭建/index.html","82b05c02681581e33e2188103c78bf3c"],["/tags/撤回/index.html","497767bb7eebe9c215e37733dd13cafd"],["/tags/播放器/index.html","08d3cb617bc93aca81bdb4206ca0ae1d"],["/tags/政府网站/index.html","8ff84a93b093822ac1ae085ccd8bd720"],["/tags/效率/index.html","d32eea8a370c0fdb27cd287173820f76"],["/tags/日历/index.html","fc106ec4f372bf307c6c36285b4abf9a"],["/tags/服务器/index.html","bc8afc1d8bb51dacc92b68a45f39d9b0"],["/tags/桌面/index.html","08d5d3f95f7c147be928611c6619909e"],["/tags/梯子/index.html","74482770c12475bfb49ff096afbb3a58"],["/tags/检测工具/index.html","f1da2a080d6e36f82f034c3670f407b8"],["/tags/汉化/index.html","9af5988527eb19c3d169a3d3cc8a7e4e"],["/tags/测压/index.html","b032559f3aa9271c17451d41f9ca0ae5"],["/tags/测速/index.html","4a773e1fd8344c0faf577cbe5b154ee3"],["/tags/浏览器/index.html","a9f7928ee501c4f28e76f19ca2ace45e"],["/tags/清理/index.html","b5f70f3a0ceb55bf805c54de85575145"],["/tags/滚动条/index.html","3f4f443bdb5f7847acd763aac1e8d95d"],["/tags/电影/index.html","8ee050235e2bddfb276935c959875f13"],["/tags/电视剧/index.html","5e5b211e1cea498adbaa18e7c3afcd47"],["/tags/白嫖/index.html","011e0065f43b0133826e8a9f5e002701"],["/tags/百度/index.html","5fbf1608e1bd5980c72af84999bd0ef2"],["/tags/百度云盘/index.html","31aa729682fa534d07a98d4a4c4500f1"],["/tags/百科/index.html","aabb707be99fddf86510c21fc0dbef36"],["/tags/短信/index.html","49c9c5202380bb52b8664e73ed1925f6"],["/tags/硬件/index.html","74eccd8bb4ee47c59afff903ea2911b9"],["/tags/科学上网/index.html","f279f1787d96b9360973f5d8ea4e0f3c"],["/tags/空间/index.html","442fa19eba9899ae7197b3e524b1a9c9"],["/tags/笔记/index.html","1c2e340c81e4a889e090e9ab75d4241e"],["/tags/简洁/index.html","e24ce7edc492626b8243c3bd4f9b061b"],["/tags/简约/index.html","c1053d51cfd4b14dd6b3ee2e5b6f8639"],["/tags/维基/index.html","4221f8e12660f179fda4d76f065afe28"],["/tags/网易云/index.html","b642f878ca3e8959d927b7689be0d3d3"],["/tags/网盘/index.html","65acc03b49861604ac45dcba20e8f20e"],["/tags/网站/index.html","d5d15331195ecc753f804f4a509b709b"],["/tags/网络/index.html","0b24ab906ddedd7e9a77161d1526f276"],["/tags/美化/index.html","f9f18df5814d2fc03b7ff3b924cfd07c"],["/tags/翻墙/index.html","cf0ba1d5b9d5968f12dd3b26bfdb669e"],["/tags/翻译/index.html","073fdc6295cc0166becea750856d8eb6"],["/tags/翻译器/index.html","73b790dd3426e81114e99ca8adc6df32"],["/tags/聊天室/index.html","279614f67c810db1a91bbc32e24a2462"],["/tags/联想/index.html","7a2eb8a841f394a6cf314104f1ee97b9"],["/tags/节点/index.html","de1a5b57740e0647efe86c912f461529"],["/tags/虚拟手机号/index.html","f62ad3086de2c140bcc6a0f183173c49"],["/tags/补丁/index.html","57a7a2f521b8baa3703ad95095c6e9a1"],["/tags/视频/index.html","d83325b31d49319c51d03c5bfbd0285c"],["/tags/解析/index.html","6e78ccddc5be91f7000d76e6bc8bd9e6"],["/tags/订阅链接/index.html","5cec1b1242a15bec1e7809156e7d1456"],["/tags/记录/index.html","754620d2cd6914c4d2669b5b24c393cb"],["/tags/识图/index.html","569cd6b8283b51f7f1d478e82315f147"],["/tags/语言/index.html","2aed585e47ffbf62111633af614676fb"],["/tags/资源管理器/index.html","1c8ed5e22e0d84bf3b900753797b6126"],["/tags/转移/index.html","f30f19d37247e6686d472ea525bd55a1"],["/tags/软件/index.html","70bef6e3d840570ac9608afe65b22799"],["/tags/轰炸/index.html","774b247334380aaa94263671d0763bea"],["/tags/迁移/index.html","134e54cf32fc03631ffa8edbf9e5162b"],["/tags/远程控制/index.html","847daf61f3c6b7040e9b38e863b93784"],["/tags/连接/index.html","b8538d02981141387eb1074c0827ea7d"],["/tags/追踪/index.html","e006a6e65afb7df57b771daf509f445c"],["/tags/速度/index.html","de3275971df113fbb7cbafa6dca70c96"],["/tags/邮箱/index.html","2ee224577952fe51e0d454dd6815cdf9"],["/tags/酷炫/index.html","7ccc420dd0f4bb1e6fb1b384280ae870"],["/tags/钓鱼/index.html","43930cd08aa63a971f188ecb67169299"],["/tags/镜像/index.html","54ca38d89f963857a419a66346cb194c"],["/tags/随机/index.html","4fe68f07397adc4986765e3c6b7c6655"],["/tags/隐藏/index.html","d0f08054c1aaefc54c1cc6864b888033"],["/tags/面板/index.html","f4f236bcc790950ac4f1b2287ed9d945"],["/tags/音乐/index.html","a0c228dea2849352e1be51379300e4b9"],["/tags/高颜值/index.html","09d22c61ddac35338d4708e5d53bea33"],["/tags/魔改/index.html","fdb7a444a79ae8a9d75d2399922a81e5"],["/tags/黑名单/index.html","8e8f1bee40f120b029035d6bbf42fa13"],["/urls/index.html","18d3761aa217fe23cdeb582a25149ca3"],["/vps/index.html","72d24d33dd5a9ceb39239cc90d6730ca"],["/支持/index.html","3b554a644f77b2f30c42eee44d396131"]];
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
