/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","a7879355368e6814c4861d093e632972"],["/2020/11/29/clash-windows/index.html","cb6d9750b723b575f585cc7be697cade"],["/2020/11/30/websites2/index.html","d62c518fb1fb8d48e3b4c4e3d545834c"],["/2020/12/04/iphone4s/index.html","90fa76c4a7b6a988863a39a7e1c88eae"],["/2020/12/04/onenote/index.html","de4edf8c6a59cbac7491ea413e4c7936"],["/2020/12/04/wesites1/index.html","15e2e08d9975e65902161b294de8fe3a"],["/2020/12/06/nokia808/index.html","2dec2c5c0fe6ac525f27455cbf1dd7bd"],["/2020/12/07/ipad1/index.html","50984f18eef98b31434cdbb41c2b0273"],["/2020/12/18/freesubscribes/index.html","c42f8c7f1503dda8d3e398170f27f655"],["/2020/12/19/musics/index.html","18f0148fe6403899183a79deab97fe94"],["/2020/12/19/shadowrocket/index.html","813cd0a9599c987878a6ed13d1996502"],["/2020/12/19/v2ray-windows/index.html","609f913989af5ff2d61627183e056069"],["/2020/12/19/v2rayng/index.html","89298613a465219104a08f3b8b23fc27"],["/2020/12/20/beoplay/index.html","6b05e89048202422b960e3610b37efad"],["/2020/12/20/订阅链接转换/index.html","21bf7d6f79de9c37a8af73adb56189fa"],["/2020/12/21/chrome浏览器下载提速/index.html","e5814eca810d8e26e6c0fb5c87ea2a15"],["/2020/12/21/免费128线程并发下载xdown/index.html","cdfb12f60065245c02e7dfc119c2f952"],["/2020/12/21/免费32线程下载软件ndm/index.html","a5c035f5e76fe85402de2ec4cd9a2ff1"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","c8b45076ada93542230cecfd19c1559b"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","500229ce53a4d2ec3458d666f281bdd7"],["/2020/12/21/广告怎么知道我在想什么/index.html","cdf831dc1f8f3709c07d2e814cfdfd20"],["/2020/12/21/无名·引子（小说试写）/index.html","9d12645e1d91ab40c90b888104801689"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","b6c6c1dbada5d306f4a871085a27f2b0"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","102f7e2e0e1b39d12c580df6b673ea30"],["/2020/12/21/高速轻量下载器aria2/index.html","936125f0e15a010acc47a7d9c708ab9f"],["/2020/12/22/2020-cee-roo/index.html","48f7be8aac350453974af1ea8c36ad5a"],["/2020/12/22/firefox插件、github、steam富强/index.html","29b74183598c5dbf88f20ed22892f38f"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","c897e0e4af38efdd765ddb1444c2a43b"],["/2020/12/26/python-day-1/index.html","3ae992748a4d79088851590b979a16da"],["/2020/12/26/python-day-2/index.html","4ec45d479dc09f5e7423fd5b67cd0669"],["/2020/12/26/度盘不限速下载方式一赏/index.html","768138a26c78c64cd6bba0ce1128ead5"],["/2020/12/26/添加开机自启软件/index.html","f6e601da562164f3468eeee26f8072ae"],["/2020/12/26/电脑端截图方式一赏/index.html","221e57799e4d72e234f8c7e42e983195"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","12c0bbad114441a582f5e94e37ea932e"],["/2020/12/27/最安全的浏览器tor/index.html","6addd5b6543a133c02c5e9f802b7ec41"],["/2020/12/27/网易云刷等级和听歌数量/index.html","aa56f60cf2ffcdcb36975414b66cdd15"],["/2020/12/28/freenom申请免费域名/index.html","ac31f66748405f08a15879607d484c3f"],["/2020/12/31/机场/index.html","e8fd471a0eaab7cf8cf6393e05b14423"],["/2021/01/01/M1/index.html","5b9baeeed96fbfc58813f7a213c6c8c0"],["/2021/01/01/compress/index.html","81048556a68617395235ace8a3fd4163"],["/2021/01/01/infinityfree/index.html","fae60ea6f9d71055c38e6ae9330e2534"],["/2021/01/01/硬核翻墙/index.html","c563cf0d7f75540dcec1e9f296c34cc5"],["/2021/01/02/qq/index.html","692c5b46bab6439de58ff125a6fb5a39"],["/2021/01/03/netch/index.html","bd0f4c9b35dabdb837c6fc9e3d859c5e"],["/2021/01/03/waifu2x/index.html","af890ca8154b94cfd5840eb51c62dd20"],["/2021/01/04/ads/index.html","9fb4c5e04c3edbe33218233af051ee98"],["/2021/01/04/games/index.html","94d1337213236d238c9d03fcb4400f09"],["/2021/01/04/heroku/index.html","cff731cabdc47701c9d0de4057ac2a7c"],["/2021/01/06/movies/index.html","13fb41ea1a9398b2908ee2bd2c9c49b5"],["/2021/01/07/google2020/index.html","ba41e2ece81426652974ff2cacc2c531"],["/2021/01/07/lucky/index.html","5ce9dd0e75835fd52a07708cb6132d59"],["/2021/01/07/spotify/index.html","0f091425a57688f6bd21ad69750e77df"],["/2021/01/07/thunder/index.html","d674f35c21af11d4efd0bbe435f4fb06"],["/2021/01/08/adguardhome/index.html","e0620bc77c225532c0dc17f237786d39"],["/2021/01/10/IBM/index.html","b443c58dda8ed590ed2bb9740a229b2e"],["/2021/01/10/potplayer/index.html","745fc7196fa1893cdcde1a0bc0e29728"],["/2021/01/10/sakuraanime/index.html","7c81b48f04c31c506482979f66b1528c"],["/2021/01/10/美剧星球/index.html","a186de6afbaaba9fdc6c5101a910acd5"],["/2021/01/12/telegraph/index.html","97cef37e8bfe3899fc3dcadf7029d49f"],["/2021/01/14/comics/index.html","e5e9f7d6d029c7b7148664afc1f35cfc"],["/2021/01/14/ftp/index.html","b916bc119cd0397d60042f644dd4ad54"],["/2021/01/14/oraclecloud/index.html","66209bef957c50054dcd7b9d46be1209"],["/2021/01/14/porkbun/index.html","f8d5423e3de67edc4444985b94dc3bbf"],["/2021/01/14/powertoys/index.html","5a8d8ab80ed5feaaa96657a0e622e528"],["/2021/01/14/taptap/index.html","2e5d60305f9a7fcb2d62f28e6c26d5fd"],["/2021/01/14/ubuntuvsftp/index.html","c6299c57cf33b7b4e26503674dbdc8e2"],["/2021/01/14/小说/index.html","48e2693ac3704de14f5c06cabd58609b"],["/2021/01/15/freeproxies/index.html","5ee857a98639901bfd63c4693a07973c"],["/2021/01/15/incaseformat/index.html","a7a4b5ab52f5e5761b4890bbdde9e556"],["/2021/01/16/euserv/index.html","ae6ac78bfd2b098762c795e8d34c0469"],["/2021/01/16/winxray/index.html","0e303f00ffb56906484522a37674f683"],["/2021/01/18/qqreadhistory/index.html","d2c3e6add12c3f96abaeac2f72d0f863"],["/2021/01/18/qqrevoke/index.html","d8e9947cb927d382d1d55bbb3090ec4f"],["/2021/01/19/freevpn/index.html","8d4381d457e77d36ac52076dcc9d090b"],["/2021/01/20/browsertrack/index.html","bbae6c490b72da7cb4b29939348aff1e"],["/2021/01/20/v2ui/index.html","3fae76096f2edcf75618a7005d2240d1"],["/2021/01/21/failedtoconnect/index.html","7a4e069d0925658716247c11b1054540"],["/2021/01/21/gitcalendar/index.html","d0dbe05956d2dc962d08e569680bd25c"],["/2021/01/21/markdownformat/index.html","b084c648a181452446edb38546bc1323"],["/2021/01/21/markdowntable/index.html","e05ee3db46c0d96634911f1931985e64"],["/2021/01/21/vercel/index.html","1492fdfe01f2971b07688e191bde3e4b"],["/2021/01/22/hardware/index.html","7cbdcaa7a4129d85c727d7131c83861c"],["/2021/01/22/muviz/index.html","28ed8961526f7205f2056ee81170c26b"],["/2021/01/22/randomapi/index.html","6228f81237c78b646ae38c0c4b52e47b"],["/2021/01/22/searchimages/index.html","e0e6299234025158517df6672db04c79"],["/2021/01/23/RX文件管理器/index.html","598337d7ea07eb900a0a830e8f22abf1"],["/2021/01/23/chromeflag/index.html","2915c90b8df5f50976be1eca5ad023b7"],["/2021/01/23/qttabbar/index.html","a0d233d136f39ad4fb5e19987cedeec9"],["/2021/01/24/githubspeedup/index.html","241a00007394ba486d83d63c57b9a09b"],["/2021/01/24/jsdelivr/index.html","cb076c2a012cfa5a4f5830a974aa1daf"],["/2021/01/25/note/index.html","34062b4db565ec14a8f036bce047868c"],["/2021/01/25/soul/index.html","6997d46985f392f50aca9405aaf346f1"],["/2021/01/26/herokuxray/index.html","14a6f4d4380e9779af434fa61b6f96a5"],["/2021/01/27/proxypool/index.html","887ee906fb4f50260debc7b1e9ba1214"],["/2021/01/27/tracker/index.html","68d323515a56ac6b2b64c5f4fdacbb68"],["/2021/01/30/pandownphp/index.html","1dbf139da580ea7cbe5cc54391f34519"],["/2021/01/31/newgroup/index.html","5c74b8f33f94b312cf730c59c8df3345"],["/2021/02/01/clashlanguage/index.html","d71cb48b41f717027310a87d986a429b"],["/2021/02/01/encrypt/index.html","71a980971d020ec8db7f711d8c1cf101"],["/2021/02/01/footermotion/index.html","bffdac80f765774693832215df2dbe1c"],["/2021/02/01/gitter/index.html","3d2eb962d8959b9ca526515ae47131bb"],["/2021/02/01/pixivtop50/index.html","55c80722ca180bbfd51432e167af0522"],["/2021/02/01/scrollbar/index.html","22b93e63dbf8d39ece0bcaa883d0caaf"],["/2021/02/02/clover/index.html","23bb868a1c5e07e9f2ccf17b382a25fe"],["/2021/02/02/maya/index.html","8b3dc238533f00271cf39618b49dbeab"],["/2021/02/02/speedcontroller/index.html","fb19b7a87e0f388ddc83a29006dcd520"],["/2021/02/02/yesmusicplayer/index.html","83e507191c90942b36bf577c7f122ee3"],["/2021/02/03/lenovoonelite/index.html","6ad4b4f2651b19d5a4572a2b19cd0fc4"],["/2021/02/03/skipads/index.html","b52ed49fb568a2954dda4d558a956561"],["/2021/02/04/picseed/index.html","1539cf10ec1e5afa7f0fb341c32bdb58"],["/2021/02/04/renren/index.html","f41ff94d284db0abe8e7e978f7c308bd"],["/2021/02/04/serverstress/index.html","3ba337fd8c18c2f2c3a7c1828931bb68"],["/2021/02/04/wikipediazh/index.html","3b72dc8a05f16dbd0810cf6407d0563c"],["/2021/02/05/googlevoice/index.html","b9d01e5e10ae3b478036afd839332b38"],["/2021/02/06/clashconnection/index.html","7319b7ebcaff1dc02cf06ba77b75144c"],["/2021/02/06/gvtransfer/index.html","a17746588c2d99d4b3c449d96ee12e24"],["/2021/02/06/todesk/index.html","8b452096a9e527fc8bac37a898d23d06"],["/2021/02/06/vpnblacklist/index.html","bf083476e946ef40e8afdfcacf9fa987"],["/2021/02/07/mklink/index.html","7e2da7d120513a7f0265b7bf7b790aab"],["/2021/02/07/speedtest/index.html","85f24e38db3f6ceeefb2723f07a03877"],["/2021/02/07/translate/index.html","cc1dfa637bfc73964d77adf796aa2089"],["/2021/02/08/ewomail/index.html","b66abe735da9637ad2478c11fdca86c3"],["/2021/02/10/officee5/index.html","25867a85cc56117c7bbfa53073f7eea3"],["/2021/02/10/raidrive/index.html","55421fe6ad4aea6a8dbdf4f898c7e173"],["/2021/02/13/e5sub/index.html","2d9f8f666fa2cdec63ab05fc031136af"],["/2021/02/14/screen/index.html","9e316ec8a44de871ba8058e7a7165275"],["/2021/02/15/clashtun/index.html","ad32d32ad2f22fd5cb1eebf4782d6251"],["/2021/02/15/messageboom/index.html","97ed651f637dd8750350ce5fc593bcab"],["/2021/02/15/oneindex/index.html","21613425bf03b64bd59f9366e1dc002b"],["/2021/02/16/govsites/index.html","03ec94cd83dc81c90f7bc95339c7a7ef"],["/2021/02/17/hexototypecho/index.html","eab423e00185ce0db5aee4c6719fef26"],["/2021/02/19/fiddler/index.html","df974f29491d1a5d4534ce3394c4d71b"],["/404.html","604b163be14d6f91b93b7e74b6d952a3"],["/archives/2020/11/index.html","740c3cc2c4f872a5f4e082a73f02e4a8"],["/archives/2020/12/index.html","3b3f2e469d9ab6d6fff14468a20f98a7"],["/archives/2020/12/page/2/index.html","5409976cd41645fff68a932802062025"],["/archives/2020/12/page/3/index.html","a1ef4902bc3e33c4d8c3440fe0f2148f"],["/archives/2020/index.html","206e871da9aa8255705f15b2496a9bdf"],["/archives/2020/page/2/index.html","fb37ec4a958f4b10f3adc147e233f627"],["/archives/2020/page/3/index.html","61ccdb97957672743ccacc8ce031b620"],["/archives/2021/01/index.html","b46b4e65a09e43a71b542df7e77406b9"],["/archives/2021/01/page/2/index.html","84d03ec49a575818ef7b18324cb655b4"],["/archives/2021/01/page/3/index.html","a9cb0305c6e19272baa740cae9aa11d3"],["/archives/2021/01/page/4/index.html","e2fc4c73066ae94e3c65093b914c8dec"],["/archives/2021/02/index.html","89e79d110efa2daf7bc2e293caed8063"],["/archives/2021/02/page/2/index.html","8ed778acad49104c5db6719a45637cef"],["/archives/2021/02/page/3/index.html","6a1bb52ecda9a190d6fe6f513969addc"],["/archives/2021/index.html","8293c2a65c05465d416a5961ef9f1454"],["/archives/2021/page/2/index.html","9ddfc8ac633e7a4993b1da8194f074a5"],["/archives/2021/page/3/index.html","e0a960224bd5aadd734b8a684fad9606"],["/archives/2021/page/4/index.html","2110642a4b2daf033ced4cf1cba75c70"],["/archives/2021/page/5/index.html","255c5281277082537b91ef467905d4c2"],["/archives/2021/page/6/index.html","debe38f6a4c90594193c22d24b0aa844"],["/archives/2021/page/7/index.html","ffe76ddd1634d019ed763241bebce37f"],["/archives/index.html","3b9dd3d7ba44284e9686a30e223e9d1e"],["/archives/page/2/index.html","fb5c30bfd2a77a48d4750b4369a87b0b"],["/archives/page/3/index.html","a776f1c201842f099ec0d3e5225c5a84"],["/archives/page/4/index.html","be38ef2f64be3b368913a373b833f3b2"],["/archives/page/5/index.html","34fc5713b985876fd174a7ee45fe5359"],["/archives/page/6/index.html","541b5434c146ad67b187d06638ae9c07"],["/archives/page/7/index.html","67f1ac08db2fbe991fc6a5805fd98ee4"],["/archives/page/8/index.html","a4b29b78c362f42db1ee08e256e7ac4d"],["/archives/page/9/index.html","9563440c6983cda66760aa270a18ded5"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","64d1b4cd0c0686090718bdd8f8dacac9"],["/categories/index.html","1eb15258abf5e933ae48230c88b7d35a"],["/categories/下载/index.html","e773042e4f42a8e2602eb78a6caf09ab"],["/categories/安全/index.html","cf7c692946fc471e81d0c64196a6eac8"],["/categories/建站/index.html","e3281547dd100881a504c2df4a82891e"],["/categories/杂/index.html","04e256f5dfd0e34a268963faedb809df"],["/categories/杂/page/2/index.html","ecb83bfb47ba19072d60aee66a9281b7"],["/categories/测评/index.html","f1620c45d65b66f208cd174113794ace"],["/categories/科学上网/index.html","cae2fea447d2e4830f41ec46cc90c486"],["/categories/科学上网/page/2/index.html","09ec6c0b2978ec558a5dfa1aba1dcbd0"],["/categories/编程/index.html","b711cc2232250cd3a89ce14f7600505b"],["/categories/网站/index.html","45cc1493c31f6e1fe5edda62fc79bfdb"],["/categories/网站/page/2/index.html","9e20d9a3504c29b2fd7ab114b904dcc8"],["/categories/软件/index.html","64c85ca37f128b3810ffcaefd7f04e1b"],["/categories/软件/page/2/index.html","4f433b031e7c89f7b1b96f6f4ffe0a49"],["/categories/软件/page/3/index.html","baae42ecc66ad9ebce250b8f9d9bb185"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","302dd9998dedbd0ec28daaccc5019db6"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","7a9358e2025d39b27665557c300195ab"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","d2beaa2bc0dbcc5996d5800147cff090"],["/ios/index.html","c7cf6de30e6292562cdba81d869238de"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/2/index.html","b589a1561cbbd0355846775f218f529b"],["/page/3/index.html","a8df56da04513c9e6f52aa5c8d3907b9"],["/page/4/index.html","6e4eada90ff92a49545cf636ef07dee7"],["/page/5/index.html","24fd4824e710973a8ce052c41a8181bc"],["/page/6/index.html","075aa5fbaed153a8dd51c46863bfba54"],["/page/7/index.html","782c47c4f69af991d6e5806fff15ad92"],["/page/8/index.html","759a80abcadc3340bf5724b58c4e9b43"],["/page/9/index.html","846983264efca3d28c57ef54d5946c38"],["/payment/index.html","7af569ab8dd6dce87d8c54a5f94bdbe2"],["/privacy-policy/index.html","fe4dbf45b44db1ad93e14810a6f4cf20"],["/rss2.xml","11b08405cba1c7dd1e48e700ead33e63"],["/search.xml","c874e79ee716cdbf6370670bb2592a5b"],["/sitemap.xml","633adc808cccdbe95fc72da21baadf9d"],["/sw-register.js","6e0af26a4539f038a1573a85eacd0c0a"],["/tags/5t/index.html","21d1306ff0ff4a59e6d6beb1d975b033"],["/tags/Clash/index.html","e5a89d6fa19b261aa6b4f23aee209ada"],["/tags/Clover/index.html","49a6e28ce6e0ad118530cced27e435a6"],["/tags/E5/index.html","089c7ae11f452a037348970c94e0895d"],["/tags/FTP/index.html","f3a0b5465e6a135c787b6d823836fbcf"],["/tags/GitHub/index.html","5c14dccd46d11497e6eefdd504aefb5e"],["/tags/Heroku/index.html","fe5ae8a36ede2e0c39b8833821c1f869"],["/tags/Hexo/index.html","26b0bcacba39c64fb2aa62696b707a77"],["/tags/Lenovo/index.html","76e86f7c01568cb681a87acaa334e3dc"],["/tags/Oneindex/index.html","84d0b6c9337339fe23de4a3ae2f13906"],["/tags/QQ/index.html","337bd79c1044a7f3d2959428a3100569"],["/tags/QTTabbar/index.html","36aa93ceeb3529c71e684d591a01e6cd"],["/tags/RX文件管理器/index.html","f3d771fbfb2f3bb8013fa6f71d88bf2d"],["/tags/Todesk/index.html","fece4d181d6b46311d7ad5cd63843b0f"],["/tags/Vercel/index.html","fcf0340806973b6d098a10d294c1b881"],["/tags/ads/index.html","6edca344ff6046450a26b0d347f4d0f9"],["/tags/api/index.html","609c68c508c740f1f5e908981c5ead35"],["/tags/app/index.html","87d8b54f824f0817576d66a2c4021754"],["/tags/blacklist/index.html","dfb29c8a876cb54ac263e92621d20d47"],["/tags/butterfly/index.html","4bee24b7ac05a72260695b012feb900a"],["/tags/chrome/index.html","db77f3b3315d93a39470e4281260f73a"],["/tags/cloudflare/index.html","a830c46bdbca3ca67faeade8cdeedca3"],["/tags/cmd/index.html","0e27ebd1214e76c892631d78619769a6"],["/tags/c盘/index.html","042d60cb65e45b14e812ce7614abccd8"],["/tags/email/index.html","f8ff8d34a50afefc3c359cd55a20619b"],["/tags/ewomail/index.html","7580cf5aac5b5a48a869c8db2c09b5ad"],["/tags/fiddler/index.html","9f9ec06290ac222385c916ef52a9b8e8"],["/tags/flags/index.html","7e27bad297d89e7e2afea8fcb72dce04"],["/tags/footer，页脚/index.html","8d4fa008a9a501a057ba8e281eac0acb"],["/tags/galgame/index.html","9247d7787f9705ba3d47134be3d68b2d"],["/tags/git/index.html","ae8dab14b36e8579a57451222713c0ae"],["/tags/gitcalendar/index.html","ca4d166953d416e984b7e95c8aa86635"],["/tags/google-voice/index.html","02905f4c5bfe81fe6f11941fdc8845d7"],["/tags/gv/index.html","3e611221c14bee8bcec3730b8b27cad8"],["/tags/index-1.html","a2c57d108566393fb17749ca1597fad5"],["/tags/index.html","be553aee0ae0c7321dd7aeb034d262ee"],["/tags/jsdelivr/index.html","c0fe223577ebc77223f881276238e28f"],["/tags/linux/index.html","5e1caed49a39ae510e6d409916caf90a"],["/tags/markdown/index.html","7439de0b32c2d0bf0aa8aaefd5be6468"],["/tags/maya/index.html","9c8de789d66411a5ea8f24f828836810"],["/tags/mklink/index.html","86b41216abc3235fa3703ce41f91ccf1"],["/tags/office-e5/index.html","b1d9f50f02bbcdaa4cc7fc57742a2c65"],["/tags/onedrive/index.html","8ca832e4f79042fcad3c3e30172f5e7f"],["/tags/picGO/index.html","32a51791062beb3b9f2188d050230ce6"],["/tags/pixiv/index.html","a2c04dee85e1c887168a7bc67046d294"],["/tags/proxypool/index.html","6daa431f1874a7bfaa4120ff75b43898"],["/tags/qbitorrent/index.html","78f81afa6bedebff6330c7622e7df39b"],["/tags/raidrive/index.html","c712b9cfde51e72a4e5c4d6dd8ccde58"],["/tags/screen/index.html","4c9a3a928950cf7a72db19fe9ae9128a"],["/tags/speedtest/index.html","379b08263742efd2a13362df33003a43"],["/tags/tap/index.html","35eb898b511a9071cba4b59cdb24d021"],["/tags/top50/index.html","542350aec5fb1feba63ee0401b6bb78c"],["/tags/tracker/index.html","d665e6dd5a15025fc9b58b2ef56d4781"],["/tags/translate/index.html","e5b484d301153aaa3b545ace113abf4a"],["/tags/translater/index.html","99b5681db53d9ad977aa179d22c4589a"],["/tags/tun/index.html","7ef14bd814230e8b61ff640ff4924e8b"],["/tags/typecho/index.html","f324de0e7542c101cf582ca3045bad2c"],["/tags/v2ray/index.html","dec21bb855be27f628f2b9955c8d570b"],["/tags/vpn/index.html","567c2db51da1e52cab0787110f249e18"],["/tags/vps/index.html","956e9ca410fe45e17fb0fca1f65f2e4f"],["/tags/windows/index.html","faec3cd1464f4074b0d01d1d4dc4a4b6"],["/tags/windows端/index.html","905042d320a04d9e7de80b4acda6a275"],["/tags/xray/index.html","398cb1c041b1d0e4a6949e9473ddd72b"],["/tags/下载/index.html","f4ba316afcf191354a9d71ac254d2f6d"],["/tags/不限速/index.html","8c06a0707f9af2d76a379f5f54aa4134"],["/tags/个人网盘/index.html","b78345449afd68239ff4d3ea2ff511c6"],["/tags/主题/index.html","dc07ec816fc6a8ea9b9fca4b50ebf114"],["/tags/云便签/index.html","255295f4c971e2df0617f2ec37078d5b"],["/tags/云盘/index.html","50bb8fc776ae368cac95fab417ac9988"],["/tags/人人/index.html","b3a46bb45bc267fec9687738ae166525"],["/tags/代理/index.html","bdcb36c2cf4c16cd65902acf1ca9783f"],["/tags/代码/index.html","138a2f9621f118f4fc7a371f9a9610c3"],["/tags/优选IP/index.html","dc21d8a48ca27de414e6897b860605a1"],["/tags/便签/index.html","8cd62356d761e7de4644fbcbd18fa15c"],["/tags/保号/index.html","cc49562179e44040e1ebfb970d934bb1"],["/tags/免费/index.html","2096a78e6a4286a56247ca1bb538d585"],["/tags/免费节点/index.html","d13c412a5eebb5ffc833f709351bff01"],["/tags/加密/index.html","d96653f77cea7c3f6298a8db174f8633"],["/tags/动画/index.html","c92b420da5ee3caa8333c8c20fd86282"],["/tags/博客/index.html","95ca9226e2da3b35e95b391651a70d2d"],["/tags/历史记录/index.html","e61930f62edb46060c98759485fb593b"],["/tags/压力/index.html","b22c253c65a06c939cc78f78cf76996a"],["/tags/压缩包/index.html","16e1a4e52c2ef34010b59770a647cd8f"],["/tags/反代/index.html","e533060277e94c79ae7f7d29c7e77f6f"],["/tags/可视化/index.html","ea2051ae945d743224a09dd96c724875"],["/tags/命令/index.html","8970535933afe7d18e778cb5bddf8fd4"],["/tags/国家/index.html","0996d4c68f18cc399ef3485fdc5d0867"],["/tags/图床/index.html","bfa32230c091679849cd226eed08d8bf"],["/tags/图片/index.html","162ded8997b5ee15b8f1de7e5115151f"],["/tags/域名/index.html","41b38ccdcf8223ab02f08a9e241a4ae2"],["/tags/多标签/index.html","744441c76f586aa1af33825dc136c5b2"],["/tags/存储/index.html","d88d792e268ae1a71cca9eecd361f36d"],["/tags/安全/index.html","e9cb650a89c41aa3144d0ce008de91ce"],["/tags/安卓/index.html","8c60f96f04ed2506801a1c3716161d21"],["/tags/宝塔/index.html","38dbd6ea699734937f4b3e3e11fdf29c"],["/tags/广告/index.html","623d6ff2d866da2e1c1d8da19cee0789"],["/tags/建站/index.html","628c001f928fa7a3e656f56d86e04332"],["/tags/影视/index.html","d671ff35901f43c5f1ca9e5f43cec370"],["/tags/快速启动/index.html","02cc72f2b73176f62b6860b2cdfc6bb5"],["/tags/手机/index.html","0a0076a623ce0e1abb4ab0b7c2e74f6e"],["/tags/托管/index.html","23b7d0f302921f05fc9334e3daae67bb"],["/tags/抓包/index.html","3498ea5f57fc8a505f44fa2087a38924"],["/tags/抓取/index.html","d9bd9a19c34c2d70363c208b37b5dcfe"],["/tags/投屏/index.html","6d71c2bd6569e5e45164de98790d46fd"],["/tags/拓展功能/index.html","6b2bcf48e5c5755ea59a720a64020ee5"],["/tags/挂载/index.html","77e927ec8d65580e1efce68a34503453"],["/tags/指纹/index.html","bf604db70c3a27045a9a839859b26249"],["/tags/接口/index.html","b6620e908db304d75e8a0f9ec3698bbc"],["/tags/提取图片/index.html","bd6bc4af4177f91a352b5b73bfff81d1"],["/tags/插件/index.html","91138630cdf261b75c30c04cfe8eb013"],["/tags/搜图/index.html","255a9ac7bc7a5dca9788f81bed0a37fa"],["/tags/搭建/index.html","b858f3c36f2c5540e2c016a0f5bd3e97"],["/tags/撤回/index.html","03d22eb816b8bfaa3c5044a75d225093"],["/tags/播放器/index.html","f120af793e5c6bf1578a8d9567320ef4"],["/tags/政府网站/index.html","d48adc97bebe0776124f397cb7bc8796"],["/tags/效率/index.html","2b84d758e9be0da77314d25ae8cbdecd"],["/tags/日历/index.html","484068cb442e6bc2560041789a2c8f98"],["/tags/服务器/index.html","8532fdf8158d980fe34df45f940698bc"],["/tags/桌面/index.html","461665ff0831f92b4e24567b83e5e147"],["/tags/梯子/index.html","4fa718837b5fdb5c27105094b1172892"],["/tags/检测工具/index.html","e6d97d052ebb8711600f40cd1284e251"],["/tags/汉化/index.html","02484b88ef02370f125dfbb7c71e1690"],["/tags/测压/index.html","6e3f424442bf9d5fe5e774a9c6fe1e76"],["/tags/测速/index.html","e82d657fbc308e69fd269e91e9b5027f"],["/tags/浏览器/index.html","73d98fa1d0948a42770a0037c2ce1c2a"],["/tags/清理/index.html","680483544fddfdfa11e2d56cd1b4b55a"],["/tags/滚动条/index.html","ecd5fbaa22f53496f79510f3086ab593"],["/tags/电影/index.html","758eba8558a44fe901d11fe5215c4d6f"],["/tags/电视剧/index.html","41fc80f13e0697eafebf76e9806a0c87"],["/tags/白嫖/index.html","88d99a28f5b15f58da2d702091a60edd"],["/tags/百度/index.html","6d23fa0b2e3efbc6fe4eeb3a1fc97bef"],["/tags/百度云盘/index.html","000598ca17a0071f8f67d8efa4dcbf4c"],["/tags/百科/index.html","1838f7ba232bce1c8ad85f2e036a2892"],["/tags/短信/index.html","905890e4c39285ad7864a37a127c5e69"],["/tags/硬件/index.html","2bc2f3b8fab7879dd985b6a4d597d71c"],["/tags/科学上网/index.html","4c9a8dc0ae402820ce2211878ef3f4f0"],["/tags/空间/index.html","3ddd5dc940767c1874f9522c0ab52a9a"],["/tags/笔记/index.html","8d97647981276bda3aca0d2ede2c3415"],["/tags/简洁/index.html","3b27d0c5f7a83003f8c441312b35c644"],["/tags/简约/index.html","8bf0045b26a9d31097e169129b059b6c"],["/tags/维基/index.html","aacc2a2e1c90abb78e251080c5b84806"],["/tags/网易云/index.html","3a6f07a22aec859312b321b9384d8808"],["/tags/网盘/index.html","86dca018f60d52e29666707059f22484"],["/tags/网站/index.html","ee453c7d669948d574503cd203fc3ecb"],["/tags/网络/index.html","3cb133915bb705a5c5ce2ee448b6cc6e"],["/tags/美化/index.html","ac2109da2026b05687914dad51682315"],["/tags/翻墙/index.html","10abdf1a533edfdddc15f402210ad0a5"],["/tags/翻译/index.html","0e0731833a3c2f57fc21ee9cbb5e7dbe"],["/tags/翻译器/index.html","6f0d5f816278f99c4d4efde1614b413b"],["/tags/聊天室/index.html","dcc797a6e4349983c143b1d995996d1c"],["/tags/联想/index.html","69a3ca813cdc718d68aadbd906d68cea"],["/tags/节点/index.html","081f94147ec7e74c422112f5a94f1788"],["/tags/虚拟手机号/index.html","ede75c82e8650013b15489eeb69c86e7"],["/tags/补丁/index.html","fe7e4cf7e74ce43199c5a4aff28f75a1"],["/tags/视频/index.html","31866520651dccf0f496ba6fc0256b44"],["/tags/解析/index.html","a3b247785f2ac24431c7c723ba0cb84e"],["/tags/订阅链接/index.html","df0b0ae3cfec7446d3e7f78c0a4c2362"],["/tags/记录/index.html","01032ba7bd16e0a57914278d1b22350e"],["/tags/识图/index.html","d5befaf3b8a3c55c111788d86463a7a8"],["/tags/语言/index.html","f6da4ca54b60d49f47fb6103093f95cb"],["/tags/资源管理器/index.html","0d6b6029b9770017f243c3ddcae38989"],["/tags/转移/index.html","b5d3b4e6536452858f0368f4573ba230"],["/tags/软件/index.html","46a454b2b07eb0348267b120948de4c0"],["/tags/轰炸/index.html","dea0edece6c47b016c8c531d1b9e509a"],["/tags/迁移/index.html","c4df811f8d79301e32e5aead20507984"],["/tags/远程控制/index.html","846f09390f60249eef482a864158341e"],["/tags/连接/index.html","6ff9c3f5af3d34889a5d5866515bd104"],["/tags/追踪/index.html","b0b4391e719aa71f6b0e89b105a1ea46"],["/tags/速度/index.html","d3c0e9bd26b9180adb5461da94139d19"],["/tags/邮箱/index.html","74d113f3bd0054b9d8462b74277ce45d"],["/tags/酷炫/index.html","0fd9c43572cd0171ce5c5e1ea9e33056"],["/tags/钓鱼/index.html","889f607fcc243cf55471c0ae92ca8f74"],["/tags/镜像/index.html","8db48bd1f296eb99f364d10dfc1b6653"],["/tags/随机/index.html","90b3074855362e27b45e539781a1d2ba"],["/tags/隐藏/index.html","38206911158984f7fe7149f6388b20dc"],["/tags/面板/index.html","cad501e1d10532e68d9713059f3b79db"],["/tags/音乐/index.html","7081e0ba7d919673da6d7d290119be81"],["/tags/高颜值/index.html","91466d0d20b07647473b80209999efb8"],["/tags/魔改/index.html","91996dba3838601daf3ddcccbd32c8a8"],["/tags/黑名单/index.html","5232df6168e2e5bcb9a703ccd584009e"],["/urls/index.html","c3bcbac5bc01e5be302b214ea1644f85"],["/vps/index.html","7a9371892da316ee9fa45e317ecadfc7"],["/支持/index.html","f9d2dd8b584d4cfb1cc4dc7cb9578ccb"]];
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
