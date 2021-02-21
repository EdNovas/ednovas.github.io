/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","a7879355368e6814c4861d093e632972"],["/2020/11/29/clash-windows/index.html","cb6d9750b723b575f585cc7be697cade"],["/2020/11/30/websites2/index.html","d62c518fb1fb8d48e3b4c4e3d545834c"],["/2020/12/04/iphone4s/index.html","90fa76c4a7b6a988863a39a7e1c88eae"],["/2020/12/04/onenote/index.html","de4edf8c6a59cbac7491ea413e4c7936"],["/2020/12/04/wesites1/index.html","15e2e08d9975e65902161b294de8fe3a"],["/2020/12/06/nokia808/index.html","2dec2c5c0fe6ac525f27455cbf1dd7bd"],["/2020/12/07/ipad1/index.html","50984f18eef98b31434cdbb41c2b0273"],["/2020/12/18/freesubscribes/index.html","c42f8c7f1503dda8d3e398170f27f655"],["/2020/12/19/musics/index.html","18f0148fe6403899183a79deab97fe94"],["/2020/12/19/shadowrocket/index.html","813cd0a9599c987878a6ed13d1996502"],["/2020/12/19/v2ray-windows/index.html","609f913989af5ff2d61627183e056069"],["/2020/12/19/v2rayng/index.html","89298613a465219104a08f3b8b23fc27"],["/2020/12/20/beoplay/index.html","6b05e89048202422b960e3610b37efad"],["/2020/12/20/订阅链接转换/index.html","21bf7d6f79de9c37a8af73adb56189fa"],["/2020/12/21/chrome浏览器下载提速/index.html","e5814eca810d8e26e6c0fb5c87ea2a15"],["/2020/12/21/免费128线程并发下载xdown/index.html","cdfb12f60065245c02e7dfc119c2f952"],["/2020/12/21/免费32线程下载软件ndm/index.html","a5c035f5e76fe85402de2ec4cd9a2ff1"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","c8b45076ada93542230cecfd19c1559b"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","500229ce53a4d2ec3458d666f281bdd7"],["/2020/12/21/广告怎么知道我在想什么/index.html","cdf831dc1f8f3709c07d2e814cfdfd20"],["/2020/12/21/无名·引子（小说试写）/index.html","9d12645e1d91ab40c90b888104801689"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","b6c6c1dbada5d306f4a871085a27f2b0"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","102f7e2e0e1b39d12c580df6b673ea30"],["/2020/12/21/高速轻量下载器aria2/index.html","936125f0e15a010acc47a7d9c708ab9f"],["/2020/12/22/2020-cee-roo/index.html","48f7be8aac350453974af1ea8c36ad5a"],["/2020/12/22/firefox插件、github、steam富强/index.html","29b74183598c5dbf88f20ed22892f38f"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","c897e0e4af38efdd765ddb1444c2a43b"],["/2020/12/26/python-day-1/index.html","3ae992748a4d79088851590b979a16da"],["/2020/12/26/python-day-2/index.html","4ec45d479dc09f5e7423fd5b67cd0669"],["/2020/12/26/度盘不限速下载方式一赏/index.html","768138a26c78c64cd6bba0ce1128ead5"],["/2020/12/26/添加开机自启软件/index.html","f6e601da562164f3468eeee26f8072ae"],["/2020/12/26/电脑端截图方式一赏/index.html","221e57799e4d72e234f8c7e42e983195"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","12c0bbad114441a582f5e94e37ea932e"],["/2020/12/27/最安全的浏览器tor/index.html","6addd5b6543a133c02c5e9f802b7ec41"],["/2020/12/27/网易云刷等级和听歌数量/index.html","aa56f60cf2ffcdcb36975414b66cdd15"],["/2020/12/28/freenom申请免费域名/index.html","ac31f66748405f08a15879607d484c3f"],["/2020/12/31/机场/index.html","e8fd471a0eaab7cf8cf6393e05b14423"],["/2021/01/01/M1/index.html","5b9baeeed96fbfc58813f7a213c6c8c0"],["/2021/01/01/compress/index.html","81048556a68617395235ace8a3fd4163"],["/2021/01/01/infinityfree/index.html","fae60ea6f9d71055c38e6ae9330e2534"],["/2021/01/01/硬核翻墙/index.html","c563cf0d7f75540dcec1e9f296c34cc5"],["/2021/01/02/qq/index.html","692c5b46bab6439de58ff125a6fb5a39"],["/2021/01/03/netch/index.html","bd0f4c9b35dabdb837c6fc9e3d859c5e"],["/2021/01/03/waifu2x/index.html","af890ca8154b94cfd5840eb51c62dd20"],["/2021/01/04/ads/index.html","9fb4c5e04c3edbe33218233af051ee98"],["/2021/01/04/games/index.html","94d1337213236d238c9d03fcb4400f09"],["/2021/01/04/heroku/index.html","cff731cabdc47701c9d0de4057ac2a7c"],["/2021/01/06/movies/index.html","13fb41ea1a9398b2908ee2bd2c9c49b5"],["/2021/01/07/google2020/index.html","ba41e2ece81426652974ff2cacc2c531"],["/2021/01/07/lucky/index.html","5ce9dd0e75835fd52a07708cb6132d59"],["/2021/01/07/spotify/index.html","0f091425a57688f6bd21ad69750e77df"],["/2021/01/07/thunder/index.html","d674f35c21af11d4efd0bbe435f4fb06"],["/2021/01/08/adguardhome/index.html","e0620bc77c225532c0dc17f237786d39"],["/2021/01/10/IBM/index.html","b443c58dda8ed590ed2bb9740a229b2e"],["/2021/01/10/potplayer/index.html","745fc7196fa1893cdcde1a0bc0e29728"],["/2021/01/10/sakuraanime/index.html","7c81b48f04c31c506482979f66b1528c"],["/2021/01/10/美剧星球/index.html","a186de6afbaaba9fdc6c5101a910acd5"],["/2021/01/12/telegraph/index.html","97cef37e8bfe3899fc3dcadf7029d49f"],["/2021/01/14/comics/index.html","e5e9f7d6d029c7b7148664afc1f35cfc"],["/2021/01/14/ftp/index.html","b916bc119cd0397d60042f644dd4ad54"],["/2021/01/14/oraclecloud/index.html","66209bef957c50054dcd7b9d46be1209"],["/2021/01/14/porkbun/index.html","f8d5423e3de67edc4444985b94dc3bbf"],["/2021/01/14/powertoys/index.html","5a8d8ab80ed5feaaa96657a0e622e528"],["/2021/01/14/taptap/index.html","2e5d60305f9a7fcb2d62f28e6c26d5fd"],["/2021/01/14/ubuntuvsftp/index.html","c6299c57cf33b7b4e26503674dbdc8e2"],["/2021/01/14/小说/index.html","48e2693ac3704de14f5c06cabd58609b"],["/2021/01/15/freeproxies/index.html","5ee857a98639901bfd63c4693a07973c"],["/2021/01/15/incaseformat/index.html","a7a4b5ab52f5e5761b4890bbdde9e556"],["/2021/01/16/euserv/index.html","ae6ac78bfd2b098762c795e8d34c0469"],["/2021/01/16/winxray/index.html","0e303f00ffb56906484522a37674f683"],["/2021/01/18/qqreadhistory/index.html","d2c3e6add12c3f96abaeac2f72d0f863"],["/2021/01/18/qqrevoke/index.html","d8e9947cb927d382d1d55bbb3090ec4f"],["/2021/01/19/freevpn/index.html","8d4381d457e77d36ac52076dcc9d090b"],["/2021/01/20/browsertrack/index.html","bbae6c490b72da7cb4b29939348aff1e"],["/2021/01/20/v2ui/index.html","3fae76096f2edcf75618a7005d2240d1"],["/2021/01/21/failedtoconnect/index.html","7a4e069d0925658716247c11b1054540"],["/2021/01/21/gitcalendar/index.html","d0dbe05956d2dc962d08e569680bd25c"],["/2021/01/21/markdownformat/index.html","b084c648a181452446edb38546bc1323"],["/2021/01/21/markdowntable/index.html","e05ee3db46c0d96634911f1931985e64"],["/2021/01/21/vercel/index.html","1492fdfe01f2971b07688e191bde3e4b"],["/2021/01/22/hardware/index.html","7cbdcaa7a4129d85c727d7131c83861c"],["/2021/01/22/muviz/index.html","28ed8961526f7205f2056ee81170c26b"],["/2021/01/22/randomapi/index.html","6228f81237c78b646ae38c0c4b52e47b"],["/2021/01/22/searchimages/index.html","e0e6299234025158517df6672db04c79"],["/2021/01/23/RX文件管理器/index.html","598337d7ea07eb900a0a830e8f22abf1"],["/2021/01/23/chromeflag/index.html","2915c90b8df5f50976be1eca5ad023b7"],["/2021/01/23/qttabbar/index.html","a0d233d136f39ad4fb5e19987cedeec9"],["/2021/01/24/githubspeedup/index.html","241a00007394ba486d83d63c57b9a09b"],["/2021/01/24/jsdelivr/index.html","cb076c2a012cfa5a4f5830a974aa1daf"],["/2021/01/25/note/index.html","34062b4db565ec14a8f036bce047868c"],["/2021/01/25/soul/index.html","6997d46985f392f50aca9405aaf346f1"],["/2021/01/26/herokuxray/index.html","14a6f4d4380e9779af434fa61b6f96a5"],["/2021/01/27/proxypool/index.html","887ee906fb4f50260debc7b1e9ba1214"],["/2021/01/27/tracker/index.html","68d323515a56ac6b2b64c5f4fdacbb68"],["/2021/01/30/pandownphp/index.html","1dbf139da580ea7cbe5cc54391f34519"],["/2021/01/31/newgroup/index.html","5c74b8f33f94b312cf730c59c8df3345"],["/2021/02/01/clashlanguage/index.html","d71cb48b41f717027310a87d986a429b"],["/2021/02/01/encrypt/index.html","71a980971d020ec8db7f711d8c1cf101"],["/2021/02/01/footermotion/index.html","bffdac80f765774693832215df2dbe1c"],["/2021/02/01/gitter/index.html","3d2eb962d8959b9ca526515ae47131bb"],["/2021/02/01/pixivtop50/index.html","55c80722ca180bbfd51432e167af0522"],["/2021/02/01/scrollbar/index.html","22b93e63dbf8d39ece0bcaa883d0caaf"],["/2021/02/02/clover/index.html","23bb868a1c5e07e9f2ccf17b382a25fe"],["/2021/02/02/maya/index.html","8b3dc238533f00271cf39618b49dbeab"],["/2021/02/02/speedcontroller/index.html","fb19b7a87e0f388ddc83a29006dcd520"],["/2021/02/02/yesmusicplayer/index.html","83e507191c90942b36bf577c7f122ee3"],["/2021/02/03/lenovoonelite/index.html","6ad4b4f2651b19d5a4572a2b19cd0fc4"],["/2021/02/03/skipads/index.html","b52ed49fb568a2954dda4d558a956561"],["/2021/02/04/picseed/index.html","1539cf10ec1e5afa7f0fb341c32bdb58"],["/2021/02/04/renren/index.html","f41ff94d284db0abe8e7e978f7c308bd"],["/2021/02/04/serverstress/index.html","3ba337fd8c18c2f2c3a7c1828931bb68"],["/2021/02/04/wikipediazh/index.html","3b72dc8a05f16dbd0810cf6407d0563c"],["/2021/02/05/googlevoice/index.html","b9d01e5e10ae3b478036afd839332b38"],["/2021/02/06/clashconnection/index.html","7319b7ebcaff1dc02cf06ba77b75144c"],["/2021/02/06/gvtransfer/index.html","a17746588c2d99d4b3c449d96ee12e24"],["/2021/02/06/todesk/index.html","8b452096a9e527fc8bac37a898d23d06"],["/2021/02/06/vpnblacklist/index.html","bf083476e946ef40e8afdfcacf9fa987"],["/2021/02/07/mklink/index.html","7e2da7d120513a7f0265b7bf7b790aab"],["/2021/02/07/speedtest/index.html","85f24e38db3f6ceeefb2723f07a03877"],["/2021/02/07/translate/index.html","cc1dfa637bfc73964d77adf796aa2089"],["/2021/02/08/ewomail/index.html","b66abe735da9637ad2478c11fdca86c3"],["/2021/02/10/officee5/index.html","25867a85cc56117c7bbfa53073f7eea3"],["/2021/02/10/raidrive/index.html","55421fe6ad4aea6a8dbdf4f898c7e173"],["/2021/02/13/e5sub/index.html","2d9f8f666fa2cdec63ab05fc031136af"],["/2021/02/14/screen/index.html","9e316ec8a44de871ba8058e7a7165275"],["/2021/02/15/clashtun/index.html","856ee65318b0a438845c3579798e0875"],["/2021/02/15/messageboom/index.html","97ed651f637dd8750350ce5fc593bcab"],["/2021/02/15/oneindex/index.html","21613425bf03b64bd59f9366e1dc002b"],["/2021/02/16/govsites/index.html","03ec94cd83dc81c90f7bc95339c7a7ef"],["/2021/02/17/hexototypecho/index.html","eab423e00185ce0db5aee4c6719fef26"],["/2021/02/19/fiddler/index.html","df974f29491d1a5d4534ce3394c4d71b"],["/404.html","276086ea69eb5847e68047aed434a9eb"],["/archives/2020/11/index.html","2d2cf1e62966dae94b7d7092b0d86342"],["/archives/2020/12/index.html","0feaae28b2b3182697197986ac3cb084"],["/archives/2020/12/page/2/index.html","a1cfe380b489aaccf49b3a22788e81b9"],["/archives/2020/12/page/3/index.html","9d63897006adc135a24b428a115fcbf5"],["/archives/2020/index.html","10608f3eeefb68f874571aa00ffc29db"],["/archives/2020/page/2/index.html","342df86ac7e32ec844f6053fda0f03b2"],["/archives/2020/page/3/index.html","5ac2927812849c7966e3bd297c038909"],["/archives/2021/01/index.html","b9b11e614fd71a900a16df64f1658b6d"],["/archives/2021/01/page/2/index.html","cd0b80f0c934ef083e8afcba1abcc6d0"],["/archives/2021/01/page/3/index.html","f77a0a6ad5201e80ae78dfa45dc9f9ea"],["/archives/2021/01/page/4/index.html","47977fa0fe0721da9e59de7c0376fa26"],["/archives/2021/02/index.html","530770f97e1d8cf753f7389eea005b68"],["/archives/2021/02/page/2/index.html","d81c47c168ae9be8d83673bf0c9e3e25"],["/archives/2021/02/page/3/index.html","5da003f31bee2752af53143ef282ad9a"],["/archives/2021/index.html","d03704f583923a5b0a3da64b9c9050fc"],["/archives/2021/page/2/index.html","0ece77f76cc4511bac02d7e10338552c"],["/archives/2021/page/3/index.html","459c872f33a45b768698ddb23fc2207f"],["/archives/2021/page/4/index.html","4ab29410d67930d56ab9316892a72d57"],["/archives/2021/page/5/index.html","23346326009b5ac537b1e66d571053c9"],["/archives/2021/page/6/index.html","626071f830805a5a2b1af163381a2196"],["/archives/2021/page/7/index.html","43b90bc1775b874e5c43d8a1349001a5"],["/archives/index.html","54297e297a8c1df350bbb1239492f8ff"],["/archives/page/2/index.html","461358bf0edd234543b92a7afedc0d90"],["/archives/page/3/index.html","0d4f65b6b3d8332709bed6c372ff3639"],["/archives/page/4/index.html","a2f5ad800f94d9e75a0c8bf5daf3123e"],["/archives/page/5/index.html","f895519252ea8a68aaf317d8f049697d"],["/archives/page/6/index.html","fef860d97df0a67a2531900849d7da88"],["/archives/page/7/index.html","1c3ec0fbf0a616f8abb12b26764fa285"],["/archives/page/8/index.html","3e17e81613dc4ae5c95142a7d2f95aae"],["/archives/page/9/index.html","0f15e7a1bb8b187b2a9735bd0546a2dc"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","d83a8ae9740518dc9badee26a82cf710"],["/categories/index.html","32251599d985962accfb028b786d99e2"],["/categories/下载/index.html","fbdd3b3c32ace2de1b26e5b33455e34f"],["/categories/安全/index.html","3224c3d1bf48d7012175ecde6a9beaff"],["/categories/建站/index.html","0ed749ade35b3bb0d9e4905c8cfca036"],["/categories/杂/index.html","358f706370ac77a49ee55257a804998d"],["/categories/杂/page/2/index.html","7d7e86e834314f195e1fc06558a7eeeb"],["/categories/测评/index.html","d7e31d639c19c5cafee12d883d7c2439"],["/categories/科学上网/index.html","8e58fa2985ab5ad2c7db5493c3b24113"],["/categories/科学上网/page/2/index.html","bbd4054c8a5ac967251a081e9d8b2e6e"],["/categories/编程/index.html","bbc0a8ca2940cd5581e384d7b06d5574"],["/categories/网站/index.html","b33fdb5be71be9b6a0a1b37d6e0a9d85"],["/categories/网站/page/2/index.html","ec57ed27c9b0d568a5a615abbc804f42"],["/categories/软件/index.html","ca9cb7d3e11bc9b8fe46341ef3d14ec9"],["/categories/软件/page/2/index.html","f0f97e0270d70d9bdbdb67db388a3ed3"],["/categories/软件/page/3/index.html","e9030de44e7be52acaf1d92f9ee12576"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","d8caf828f1ae701cab5e02a6999a6636"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","d435002a301f1d5ccc5d0c130b8b87f4"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","54f005083dc0dc91336e3a46bee1906d"],["/ios/index.html","55f3efd47eff48978d2a327d675f7efe"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/2/index.html","77056b73ed59c32cc83709ea7c5517b7"],["/page/3/index.html","d043cb1edcecd6a18d103f160c6097ae"],["/page/4/index.html","9199fbe016036326ed9a0487e46681b5"],["/page/5/index.html","397702f540ca0f6cc2a9d746cdc54b3a"],["/page/6/index.html","525c7401771158cb383d848c3ac1972b"],["/page/7/index.html","d4ecdfba31e8d8293562257cac2d580c"],["/page/8/index.html","21791c59ae2c84b838e2a457609abc17"],["/page/9/index.html","300b1cea33ca121e53ded0527d16ca79"],["/payment/index.html","40427f3fad7c95db824dd1f41be975a9"],["/privacy-policy/index.html","68b25656903cc2733967756f6b57679b"],["/rss2.xml","11b08405cba1c7dd1e48e700ead33e63"],["/search.xml","c874e79ee716cdbf6370670bb2592a5b"],["/sitemap.xml","08ed1fe7c684eb06e87dc71d66eca2ef"],["/sw-register.js","eb76fc6eeb985f93f0fbcf7dfc6a4eda"],["/tags/5t/index.html","5f6e284b4747fbbe554fec0a73dc3d2d"],["/tags/Clash/index.html","244fcec8e96f7aae2ea32c4a394015c2"],["/tags/Clover/index.html","d3b7d8676db6d4572fc660c195bed218"],["/tags/E5/index.html","0dd454951b37422aa20e6072d5a403c2"],["/tags/FTP/index.html","186de4b63a2940b148bcdb2729abdc35"],["/tags/GitHub/index.html","24b7dde8c714cb41ccb6d9fb5aca58a6"],["/tags/Heroku/index.html","b2fb4e1018eb27ca46abb43973365dca"],["/tags/Hexo/index.html","2bc4edc1c6f7e44e25f8153238781adb"],["/tags/Lenovo/index.html","f72bb5b732649c97d24360ac54c9a22c"],["/tags/Oneindex/index.html","7c8c0670a46498af1a136ba94f1ad042"],["/tags/QQ/index.html","dc6411b38035fa8f890e12f97e256310"],["/tags/QTTabbar/index.html","295d7287702a6147b161e97d52eb552c"],["/tags/RX文件管理器/index.html","a1d8a34b9c9fa14ae1b68dd49cf0fe37"],["/tags/Todesk/index.html","5e84b0f357864802c756b9612639da3f"],["/tags/Vercel/index.html","d393636b5328fbf7b31e9c3962aa92fa"],["/tags/ads/index.html","38b5b040107711abf10dada460799ad1"],["/tags/api/index.html","c729061e841b9026669e78c7e005602b"],["/tags/app/index.html","9395604b82339109547df2d3b7cd96a4"],["/tags/blacklist/index.html","de7b9707b09be9349f6fb5d9f9d40d7c"],["/tags/butterfly/index.html","46677e90ee7e6dca27b66c4b40898646"],["/tags/chrome/index.html","4ed14fee42a989441ef6fb8e412b9ad1"],["/tags/cloudflare/index.html","002196b25122ae92d86b46ea4157d116"],["/tags/cmd/index.html","cb61b4741c2220e2847d45627162b6f9"],["/tags/c盘/index.html","b1953631963466c49870ef6e0778c764"],["/tags/email/index.html","45d827e84aa6e834b21aa03f20f2dc29"],["/tags/ewomail/index.html","0112fc9a96f577f84e91fd9332b0adb1"],["/tags/fiddler/index.html","55e65859d378f26a9205ab556f6ca455"],["/tags/flags/index.html","1d04cf7614ac96dc4e8076c393800a5c"],["/tags/footer，页脚/index.html","d57b84b4e5bcfc0da488edd1878f074f"],["/tags/galgame/index.html","e202b00c976fd65fc5ac78ef08a9f44f"],["/tags/git/index.html","737c95722055ab26950241b29decebe4"],["/tags/gitcalendar/index.html","1f506740d4de7a4a9b1f3f94e95c041e"],["/tags/google-voice/index.html","3576613b9b331d29edd77afcbc5383d4"],["/tags/gv/index.html","38e0fd64135b38fc79d4415b4871df3c"],["/tags/index-1.html","fb6bcf06d5b0567232b6b26ff0585d7b"],["/tags/index.html","d51035c51f37866c76bf57afbc8e345c"],["/tags/jsdelivr/index.html","55bb8e430824a175201040eb727c9f36"],["/tags/linux/index.html","ca80a6865ab37533810664748975ed78"],["/tags/markdown/index.html","88f7a01af2b8205f9710e3791a59e491"],["/tags/maya/index.html","e36b5e6d966b4e68797a0d3fec62c185"],["/tags/mklink/index.html","31a7754a4d70ed61d89d00439dfb0c63"],["/tags/office-e5/index.html","3fe4d2bc3b95da24ffd9358867c99fcb"],["/tags/onedrive/index.html","3b6383fad20b11f83326ff127754ca1a"],["/tags/picGO/index.html","0ef5ab63ff6a3d7a7eed91093f13338b"],["/tags/pixiv/index.html","00d933a4851dbeb6e8fb5856498e0ac1"],["/tags/proxypool/index.html","2adbaef4c3e654a1d2fb961776fc9451"],["/tags/qbitorrent/index.html","03248458e03c1137295391cfe8fee1e3"],["/tags/raidrive/index.html","c0338d096754a34705a47c6607b38ea1"],["/tags/screen/index.html","01b5ac81845e669d50e6794bc1ec955d"],["/tags/speedtest/index.html","e94562ebfca633b0d100c1d9b18e89c4"],["/tags/tap/index.html","5415e6fd5363996af7b4288c65cda86c"],["/tags/top50/index.html","b07da40f8e0559275d0692a8b625adc8"],["/tags/tracker/index.html","e5960bbd8c8889fc9b7021e3345405c7"],["/tags/translate/index.html","ec2b04721e65d6141a41c14c05569829"],["/tags/translater/index.html","53318345b891d1dec862a6c703e1d518"],["/tags/tun/index.html","e3ed5c43e59c122ef0a22307c5d6a190"],["/tags/typecho/index.html","8552a44f0ed92a1534d43ee936d39839"],["/tags/v2ray/index.html","774558827f9cceaf4aa6c3c9efc6f6f0"],["/tags/vpn/index.html","f7041722ad3ff57016bc2564c4a94057"],["/tags/vps/index.html","f154e21b7ec0637cf81dbc1246c37dcf"],["/tags/windows/index.html","8b222ac90c0f3e274e7bcf47fa6cf5e4"],["/tags/windows端/index.html","ff9e270b4f0451d56b5b87f48da423bb"],["/tags/xray/index.html","b1635b85ab5d9be18e4b6aabf542982c"],["/tags/下载/index.html","982308ca169b609958aea5b50a3249ad"],["/tags/不限速/index.html","e8eae0ac9cfc17c718f4456a230238f0"],["/tags/个人网盘/index.html","82abf9dd7687be1891c0cdd628195836"],["/tags/主题/index.html","d51beec4161a2beece206c47437613fc"],["/tags/云便签/index.html","518423bd7fa90fee9f80273b8e4b89ac"],["/tags/云盘/index.html","a49be6eca48a481acf67656770833665"],["/tags/人人/index.html","194a178b21a5cf53e04c3e05bb1c017c"],["/tags/代理/index.html","9e86d03222384af0999a25d1c6c0bb83"],["/tags/代码/index.html","206943f2ae66cf6bdf61a6b9625c09e7"],["/tags/优选IP/index.html","93c4ac14144fa6e1a6d7d75087bff6f9"],["/tags/便签/index.html","dc81ee24df80cf173e6a356713ba1f3f"],["/tags/保号/index.html","fa0f8129ee769d4f3cf96749f318eaa9"],["/tags/免费/index.html","c63f884daf9cba31cea31c0f726c2131"],["/tags/免费节点/index.html","a9a0876eb98f3b17dbe0999a79795856"],["/tags/加密/index.html","a3aa926b6ff29784e65ee594410b3066"],["/tags/动画/index.html","abcc8ffd2b91ad99e962dfc9ec545203"],["/tags/博客/index.html","0845ab5202c5358deefb95de9a435235"],["/tags/历史记录/index.html","d7472390253edfa8112e61cb4cd04de6"],["/tags/压力/index.html","0497cf3e51644a398adec05e7c7130ed"],["/tags/压缩包/index.html","4888093fd2d61c1fcf535b5858992757"],["/tags/反代/index.html","6659164748ebfbddda51334869efaac3"],["/tags/可视化/index.html","1818bccaf0bb610dcb86c0e518c621d1"],["/tags/命令/index.html","39256c122ea6a6f2af90381c37b01692"],["/tags/国家/index.html","64bfbdacbad5e7dbea57dcf76680ddb0"],["/tags/图床/index.html","295e3051deb793522096367d0109780b"],["/tags/图片/index.html","a21c73abe12f6a1b0039df21aba97803"],["/tags/域名/index.html","59dfca9576b8f642c8ac8cd272d70dbe"],["/tags/多标签/index.html","d7c8fc368be9aca57c9905abe80708b3"],["/tags/存储/index.html","145c52175c0f064ffdd02d4976c1ccdf"],["/tags/安全/index.html","194dbc7f7d39b8b69e812d3f7fc26919"],["/tags/安卓/index.html","ec555a8c6cf6c54cf531d128860f46fa"],["/tags/宝塔/index.html","2b972a5ec2db88b0cc0485c5052401c5"],["/tags/广告/index.html","7d6989474bad0f337a68b45df69759a4"],["/tags/建站/index.html","e7ef5eff9a699304cd3a9a89aa0104b6"],["/tags/影视/index.html","63c35dae6fc368647f41d65d7cf98f99"],["/tags/快速启动/index.html","1b78f4193716046285ae92b09a241074"],["/tags/手机/index.html","d8a9bdbe619d4f97862e840574624314"],["/tags/托管/index.html","1426946686e7fe6aea5939c555e1d17d"],["/tags/抓包/index.html","685a5f7463c91e75b8c84983e55f1e74"],["/tags/抓取/index.html","8cc9b77f80f3eaf5cfafcde63cc42a18"],["/tags/投屏/index.html","75971dd9b3fe10d26f186a16be0faa18"],["/tags/拓展功能/index.html","2d52eaa817eae22f865d4f5c6d7987ae"],["/tags/挂载/index.html","cb0d8aefdf9ed2366d9344e4d83cbc2b"],["/tags/指纹/index.html","d827ac7fe28117a1ca01ee000415e4a8"],["/tags/接口/index.html","623045eba87ca7d647a70f5ae2b78ec6"],["/tags/提取图片/index.html","2b07ae70ea6c96494720e48bce0881d8"],["/tags/插件/index.html","f8993fb391ca6d0e17f4e09595786a94"],["/tags/搜图/index.html","f3c8e3932de8cdd1afe6922186d73756"],["/tags/搭建/index.html","f5778435e979e19216bb8c741d88abce"],["/tags/撤回/index.html","73cba5b6ce73b632a9df5440c59d6ea3"],["/tags/播放器/index.html","9a2b009fcac0fec9c518a91fc388c32d"],["/tags/政府网站/index.html","48110878b668f2d2c22e04325aa66cd5"],["/tags/效率/index.html","b03c25ed782a03d4c8a3f6c573d780cf"],["/tags/日历/index.html","6ffdc994b54f6c5f64f35e1f10617ac6"],["/tags/服务器/index.html","30a1ae90d8b129b53e74c439ce3d34f5"],["/tags/桌面/index.html","27d3596c928dece1f20b906d28b73330"],["/tags/梯子/index.html","cb9963224ffa585fbfd95db64abf1bb3"],["/tags/检测工具/index.html","2d961672ee421c6a7d29a2ff64368bf0"],["/tags/汉化/index.html","7241443074336c4d9ed391c09f2fb41f"],["/tags/测压/index.html","9ac30a405c1a76766e453a6429b6d85c"],["/tags/测速/index.html","0ca3b8145a0ec4f5977befae53b72956"],["/tags/浏览器/index.html","ece34016cb664012fb7f14ecb06117ae"],["/tags/清理/index.html","bdb400553a83ddec5af6eac37e191cf2"],["/tags/滚动条/index.html","6d3f0846fbba125caa82e893ff0225c5"],["/tags/电影/index.html","3898d729dd303c0d1713a42cddcebbb5"],["/tags/电视剧/index.html","2eacec96fea0e345164000b985a05589"],["/tags/白嫖/index.html","d25771ccf6cb48f01a9f53c6756dbc01"],["/tags/百度/index.html","56035f030cdabd883a62fe55d69cc037"],["/tags/百度云盘/index.html","dbfc9702a923bd5437876ced534b0b83"],["/tags/百科/index.html","4ac7d7e9b704c80a3c3565168143fded"],["/tags/短信/index.html","7e0ad44645e78dfb3cd74c738240876d"],["/tags/硬件/index.html","26c4418e60b334f4634ed664b332608f"],["/tags/科学上网/index.html","1276d6bc26995f557dd619c6cf3f78c2"],["/tags/空间/index.html","6c0500da3970f3e8e96bd88aea75af08"],["/tags/笔记/index.html","a5f96ec90e1a86c02f5bb164fd386ac8"],["/tags/简洁/index.html","7fcf3047c965c90ed03c1783e202ef33"],["/tags/简约/index.html","283c9a31602e0c322459b15c96d26cc4"],["/tags/维基/index.html","66093548c4f6e594340948ddc101003a"],["/tags/网易云/index.html","1c3c6b313e0739fde394d4793d806b34"],["/tags/网盘/index.html","854c1f2460a5687793aabdc03876f759"],["/tags/网站/index.html","582c5e457998bce232030e0b10a81a18"],["/tags/网络/index.html","0884c9de6fb1f39235d7b5b9d3366aa4"],["/tags/美化/index.html","16475184254f39d4b7df5bc4cc624c19"],["/tags/翻墙/index.html","c85580714eee1c8044dcb829ebcd7609"],["/tags/翻译/index.html","389e21215987e323730bca541dbc4cf5"],["/tags/翻译器/index.html","723d8c08db4518d0834b9d35385978a8"],["/tags/聊天室/index.html","de72a8a8b80e4092345e975b43791999"],["/tags/联想/index.html","dba0c633746a74af566eb25a4f5aed4f"],["/tags/节点/index.html","319655b9e44f1da60f45bc159fb6d439"],["/tags/虚拟手机号/index.html","24c8be796544c49d1b7ccce806008479"],["/tags/补丁/index.html","49fdf3287578e17eae37382955c8b624"],["/tags/视频/index.html","23887e90e95378292262a567113364f5"],["/tags/解析/index.html","6ffbe192d22099f6835b0f1ca643e7b6"],["/tags/订阅链接/index.html","8a4a317655140d6fbe22f107c2a1585b"],["/tags/记录/index.html","91b59b7b772f20e79db364ba1b999e08"],["/tags/识图/index.html","f9b6a417342eceb040e99d81c413710a"],["/tags/语言/index.html","31ffb3d6289792b05a8c8279c6943f9c"],["/tags/资源管理器/index.html","c8e95b4a9e98cc526f9d2ddd022d5d92"],["/tags/转移/index.html","d802cb4fee85b6f0c6e2507b57441cbb"],["/tags/软件/index.html","9952a4b9df1ee77092d5766c61c11379"],["/tags/轰炸/index.html","e329fd8f1d812c19aae157691cadcd92"],["/tags/迁移/index.html","6aae75e4808a95ef1c7dd3656e69e417"],["/tags/远程控制/index.html","a290fc7df995fd831b5e459265a6ed67"],["/tags/连接/index.html","0760884fe841639c668968e949b5d681"],["/tags/追踪/index.html","ce4abfd8ae32461afd1fc536512dd92d"],["/tags/速度/index.html","27ee21ad70ef1df6980840b5c344b948"],["/tags/邮箱/index.html","7925210bc5bc0bac1160559495655984"],["/tags/酷炫/index.html","44769c9363269b63654027119569fc7c"],["/tags/钓鱼/index.html","ae0d7813650e68732cef4b9806edcf51"],["/tags/镜像/index.html","bb20e72145fc57eff7c7922f51626cef"],["/tags/随机/index.html","4bf93c5db1e01c78ff3a6350a2275dd7"],["/tags/隐藏/index.html","ae5267263a3f78a701869bc5ee1a39c2"],["/tags/面板/index.html","c64a279d5fe256ab4621141d58a9a9b8"],["/tags/音乐/index.html","5b0408513d454572dfbd920d34d9e8a0"],["/tags/高颜值/index.html","e0fe2b3d2ec3412b3cfa39578d176e9e"],["/tags/魔改/index.html","705f4b5682391487fc3acd0fe3ec9c10"],["/tags/黑名单/index.html","739b1c5b064d428a006eee1a2abc48fd"],["/urls/index.html","278f71d9e5068688fb8c5efb699f434a"],["/vps/index.html","454a5cb80652f43d9363fe5d666973d4"],["/支持/index.html","255bc37fc3186f99357659fedf230855"]];
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
