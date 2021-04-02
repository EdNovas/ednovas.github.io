/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","f968fc7b916f5ce9bb3e072a00e889c5"],["/2020/11/29/clash-windows/index.html","e2ee42adb5df7c558c3af82c1c7fbc78"],["/2020/11/30/websites2/index.html","b3775b240c97fdfda04182971ad0e5d4"],["/2020/12/04/iphone4s/index.html","3b10b50c79fa160a109cc800c6226033"],["/2020/12/04/onenote/index.html","3ae7fb79b215ed1cdcb07546c34a9368"],["/2020/12/04/wesites1/index.html","2998e523a798134563a76ee82f402708"],["/2020/12/06/nokia808/index.html","602de825e5481eff21f529bb1074b3e3"],["/2020/12/07/ipad1/index.html","d116b90a4648b58895266aa61bc2cf03"],["/2020/12/18/freesubscribes/index.html","99825e5a865f2ba06b1b5f58506b7dfb"],["/2020/12/19/musics/index.html","98d98d0780308ac3c36ccd6c533c7a59"],["/2020/12/19/shadowrocket/index.html","160e3959bd706ea016249e5296d30628"],["/2020/12/19/v2ray-windows/index.html","bf430c208cef95ee3afff4b541f1310a"],["/2020/12/19/v2rayng/index.html","7a3ac3d7f74f0cd0fd992c343aa0154e"],["/2020/12/20/beoplay/index.html","41dba8377e59add7529eb817a8720eaa"],["/2020/12/20/订阅链接转换/index.html","e650e072f13162544ed1e3e4cf3524de"],["/2020/12/21/chrome浏览器下载提速/index.html","477b1011fab2c76e1398e9abcb36868f"],["/2020/12/21/免费128线程并发下载xdown/index.html","643e3c87606450e72fd1a647557aecc4"],["/2020/12/21/免费32线程下载软件ndm/index.html","ae9e7119a8879e5fcc50879a60459f3e"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","71ba05bed4ba682e24618e0aa4271eec"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","c6c90ac03ee51f46aea35747885aa130"],["/2020/12/21/广告怎么知道我在想什么/index.html","c548a18b2d0599f8905b52f63bd70cc7"],["/2020/12/21/无名·引子（小说试写）/index.html","b635275c6fd718a8ee1b9cee43ea5cdf"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","f9c1d969996d1c8a8634e463306c2ac5"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","6285ebc38cdef1fb8f70cb972d2ad876"],["/2020/12/21/高速轻量下载器aria2/index.html","ddee9482ba4de668a827d5de7f4070fe"],["/2020/12/22/2020-cee-roo/index.html","a97c5c50e8810a04b2e35c57b4486e3e"],["/2020/12/22/firefox插件、github、steam富强/index.html","e71c9dc236a5bef0f1181e47f88ba4e3"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","94989e7219ec8260d22b7dcedd0534d9"],["/2020/12/26/python-day-1/index.html","d913b63ffacc98e94ae2b0d9ce7b90d2"],["/2020/12/26/python-day-2/index.html","55d906a3e37e42fd7082954e042d6b40"],["/2020/12/26/度盘不限速下载方式一赏/index.html","0cb89494f9252d3324800c0dd21c6f62"],["/2020/12/26/添加开机自启软件/index.html","c3661fe2cf4df7139430e95f2a158694"],["/2020/12/26/电脑端截图方式一赏/index.html","ac2c0dba2233826c90a0ea2fa139f311"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","d0b0e85760f5e3746678ce74563ca7aa"],["/2020/12/27/最安全的浏览器tor/index.html","618776710bf678d0628144c86db100c1"],["/2020/12/27/网易云刷等级和听歌数量/index.html","34dce209c4492c300c67435edf2d4ca4"],["/2020/12/28/freenom申请免费域名/index.html","2d0cd70948345412881914d9cd509560"],["/2020/12/31/机场/index.html","2ac5c9e4c46dd02beb154ffe4dd79ad9"],["/2021/01/01/M1/index.html","d9d5bf222d3bd08feb325f07bae6f77e"],["/2021/01/01/compress/index.html","503a1e190601ee5865636d20a981da3e"],["/2021/01/01/infinityfree/index.html","81ccd4a20224d2b680356ff1874ce5b2"],["/2021/01/01/硬核翻墙/index.html","07020c2272bdd3ed18f0b5a89337c2ad"],["/2021/01/02/qq/index.html","d177705cba73195dccb5b0bdeff66f7d"],["/2021/01/03/netch/index.html","2d702e69b86882a903d10d9707cfa624"],["/2021/01/03/waifu2x/index.html","a9d74af22aee5ccf1cbdaccacc6d2aff"],["/2021/01/04/ads/index.html","5327e9d280d770f27b7d54af9f609f05"],["/2021/01/04/games/index.html","b32782fdce5327f2a8cbde0647c85b13"],["/2021/01/04/heroku/index.html","b2e481cb01333c265b4dca9b972aa1f4"],["/2021/01/06/movies/index.html","d741f9632fd055293d4dad756eec6331"],["/2021/01/07/google2020/index.html","72a367ae0f3ceff7d1f755da3fe69bdb"],["/2021/01/07/lucky/index.html","f6b24056f497916ba98084100ed0903c"],["/2021/01/07/spotify/index.html","f5da8a904a3c114781fc7917e35d0ea7"],["/2021/01/07/thunder/index.html","babeab57ea495cfdde2b7eeafffed988"],["/2021/01/08/adguardhome/index.html","761a024275ec0a255005290fa4cd4969"],["/2021/01/10/IBM/index.html","c47fd2ed10233fd326095b3256a6c938"],["/2021/01/10/potplayer/index.html","1f97f632045d09ea574643d989d0e015"],["/2021/01/10/sakuraanime/index.html","080049ad7b3c337169819c113f97c69b"],["/2021/01/10/美剧星球/index.html","48b470bfb8a8222523860ea219ba721d"],["/2021/01/12/telegraph/index.html","b8a10453dec515cacfab521063e70476"],["/2021/01/14/comics/index.html","ba1c15d6a5acbd59f77c3e68026fab38"],["/2021/01/14/ftp/index.html","0e286e61a5fee1bad9ef0cbc2aa4bdf7"],["/2021/01/14/oraclecloud/index.html","43fa241f155b9484158749c9554a1217"],["/2021/01/14/porkbun/index.html","221b63de127eff8d099e81e783e876a8"],["/2021/01/14/powertoys/index.html","85cdddf9ff5efac86034c95a7576a651"],["/2021/01/14/taptap/index.html","ecf61a037b786b2c26c47f61bb1215e0"],["/2021/01/14/ubuntuvsftp/index.html","7a80d3f5c0cc499d6cfedc7b8a80eb01"],["/2021/01/14/小说/index.html","cc9d067a80d16d0cd06753f1c244c516"],["/2021/01/15/freeproxies/index.html","b03697c1d47d6a8f8879ec2060ddcb2f"],["/2021/01/15/incaseformat/index.html","50b61380ff3df1ed0f9ef23f7b1798d4"],["/2021/01/16/euserv/index.html","7978281901626c0ef9c6e06a27f678cd"],["/2021/01/16/winxray/index.html","2c044228aa5573e20b55059592abb4a7"],["/2021/01/18/qqreadhistory/index.html","fb2e0518bbce034798ba9b67bce0418f"],["/2021/01/18/qqrevoke/index.html","a0b7b1e32dfc6bf3cfbcee049b842dd3"],["/2021/01/19/freevpn/index.html","55aa56298b3baed688377cd44b9a22f7"],["/2021/01/20/browsertrack/index.html","69b2cac86cfc0ccc1f8bbf615b28dfd1"],["/2021/01/20/v2ui/index.html","aecbcac85bb65123e8fda375010a89ce"],["/2021/01/21/failedtoconnect/index.html","9f88023540cbf6df4d636635afe58359"],["/2021/01/21/gitcalendar/index.html","759b6098346c6ef5acb849b388898507"],["/2021/01/21/markdownformat/index.html","fe391dc27f82b25878dfc0b875becbc9"],["/2021/01/21/markdowntable/index.html","ab0723178b78c888374e032d3991422d"],["/2021/01/21/vercel/index.html","a92ea8008ba0eb5e1c91435eb6c34cbe"],["/2021/01/22/hardware/index.html","15533fcad89c06454c5f2276d6641869"],["/2021/01/22/muviz/index.html","df52515ab269b7273edf0c879da0f3f8"],["/2021/01/22/randomapi/index.html","a57cdf1f9b61db78c12f0cb2b8be5b22"],["/2021/01/22/searchimages/index.html","1e47e7691b9641a46fe8bc22f6260014"],["/2021/01/23/RX文件管理器/index.html","f9d0ba96ad7e9ef89ec6e22f87c2b81c"],["/2021/01/23/chromeflag/index.html","2e4914ef4da8502291fb99237366a0c9"],["/2021/01/23/qttabbar/index.html","ba847a1de19c26bb5c76faca3a84c5fe"],["/2021/01/24/githubspeedup/index.html","5db02e4f395b25a3778ab7ec7ce3a7ff"],["/2021/01/24/jsdelivr/index.html","f70b437894188afc6d0470ff09c19a1e"],["/2021/01/25/note/index.html","829e35c0c01aaa640b154cc8a2b0ea68"],["/2021/01/25/soul/index.html","9042d92836d654866e1db8a9f505ced1"],["/2021/01/26/herokuxray/index.html","7f3c07bb4ca28763b284b381741fe5ad"],["/2021/01/27/proxypool/index.html","18660f83feb72f24c7890b698b2ea76d"],["/2021/01/27/tracker/index.html","c6de06d8b0e20e47e16c31921da9c31c"],["/2021/01/30/pandownphp/index.html","04ac3f3b58ae037731f9151d7369e87c"],["/2021/01/31/newgroup/index.html","03ff48c3b1a7dfb04e36ed6ad9013196"],["/2021/02/01/clashlanguage/index.html","8d5c1f73129cfc2b2b2bcc6a24f2c42f"],["/2021/02/01/encrypt/index.html","45b0192d0298098c21bcca105aef6f22"],["/2021/02/01/footermotion/index.html","26ec5d75fabca1dea6f881fe88f28ee5"],["/2021/02/01/gitter/index.html","547038bd97a9c5a0466d8224cbb0db9c"],["/2021/02/01/pixivtop50/index.html","32c2679976d4d0150e6005ecd2e44cf8"],["/2021/02/01/scrollbar/index.html","fddd26fb3de42b2c31fd377088952477"],["/2021/02/02/clover/index.html","b4a221b614b815a23a1ddacc63b6d655"],["/2021/02/02/maya/index.html","1fe7e65386630f62d9b35932db92c099"],["/2021/02/02/speedcontroller/index.html","bedb3601baa32b63954ca49743867e34"],["/2021/02/02/yesmusicplayer/index.html","18e1f3b2fd9e0746249b39e09f42530f"],["/2021/02/03/lenovoonelite/index.html","88f57295eea778651dcfa62ce0263c37"],["/2021/02/03/skipads/index.html","3b6acbf097e05acd0d49e9bbfcb4b966"],["/2021/02/04/picseed/index.html","bc4fe3b53a5cff8560cbb867395fa1f2"],["/2021/02/04/renren/index.html","f18b34fb055b6c65a4f831c2e9735fcf"],["/2021/02/04/serverstress/index.html","465bd19acdd56329789b8b2a3fccf324"],["/2021/02/04/wikipediazh/index.html","9116c1bda5495d5b497c83c584d2306f"],["/2021/02/05/googlevoice/index.html","9786770bd306f726637fb617ec755bf8"],["/2021/02/06/clashconnection/index.html","77edcd2c9ae292feab4353404e923dc2"],["/2021/02/06/gvtransfer/index.html","ab0f7dcacec0e41c80e18a1a2f273f60"],["/2021/02/06/todesk/index.html","103fbcc6c8c8cf9c409fbf85aec26f16"],["/2021/02/06/vpnblacklist/index.html","dfcc91591f7738c9d22b13fdea3648f0"],["/2021/02/07/mklink/index.html","5a2f7d01f1ef57a3fd24ab774f06e30b"],["/2021/02/07/speedtest/index.html","fcf81b19fde9c35535f2cde9085f4acd"],["/2021/02/07/translate/index.html","7625408d4b8158df74bcf749d97a6f4d"],["/2021/02/08/ewomail/index.html","d5f4ac8302444f93377212e8c416c138"],["/2021/02/10/officee5/index.html","a8146d4e0dd0ff0d245761e722216e56"],["/2021/02/10/raidrive/index.html","68694390377ef65acfc67647bdcb27fc"],["/2021/02/13/e5sub/index.html","2d3105c3263e4e0daf1229afa5276547"],["/2021/02/14/screen/index.html","aa0ba77508315cbbd65a3d90ebcab495"],["/2021/02/15/clashtun/index.html","b682200957f7c77beaef08519cbe697f"],["/2021/02/15/messageboom/index.html","d7719d1359f444487c3c6c3b0164c658"],["/2021/02/15/oneindex/index.html","f05faaa1e3564bcdf4e125716b42b9da"],["/2021/02/16/govsites/index.html","c26153820d0fc211a7399e0646f026a8"],["/2021/02/17/hexototypecho/index.html","703dedb253b2dbd98248f320f18c1528"],["/2021/02/19/fiddler/index.html","19c192207810c2fe1b8169926e70671d"],["/2021/02/22/potplayerset/index.html","4288f2a99d4336beac617d1ef470deb3"],["/2021/02/22/studyresource/index.html","c3792e3bce105f5bd966b5eaf4c7cec1"],["/2021/02/22/telegram/index.html","53a914beda85e6eee96bfe685e51ba57"],["/2021/02/22/videos/index.html","977ae515e774bbfacab720f22d911870"],["/2021/02/24/mtproxy/index.html","e99b8ea2bebdee70554e358e637d0263"],["/2021/03/10/catchcat/index.html","1d12417dfd4c1851154d8212d344aab5"],["/2021/03/10/neteasemusic/index.html","86d5a321352dd55e4980222f19453141"],["/2021/03/10/surfboard/index.html","f34d05703ac79cc87b2add7c3ba4a452"],["/2021/03/11/vpnandjc/index.html","33425784cfd1811a9bf2d4f10839c0ef"],["/2021/03/12/qrcodes/index.html","69cc9f8dc007d6a60a1e1dff7e2840d1"],["/2021/03/20/qv2ray/index.html","5522503cd49d7dbd28d6309fdb473f1f"],["/2021/03/22/freevps/index.html","e13bca98b136dc0b1d20c89fd4555623"],["/2021/03/24/tgstickers/index.html","1842b210d13b6e3fb9467281ec2b6c99"],["/2021/03/25/clashx/index.html","92f5e68e4c91d088eea0857bb7eacd52"],["/2021/03/26/bingwallpaper/index.html","8a62ce0032ddfc23745f2d94b92bb94e"],["/404.html","8df7e88ecacea1cb04cb8fa3af240f4e"],["/archives/2020/11/index.html","25fe0ad0d87142e81dcb3c85763a51b2"],["/archives/2020/12/index.html","7773f636a1c659b5991894ecbba9ffeb"],["/archives/2020/12/page/2/index.html","5d60197a7288d511e461f7340725fac5"],["/archives/2020/12/page/3/index.html","f30df625a674a5f83daa206c83bfafdd"],["/archives/2020/index.html","e5ab4b38021a54ba4207c1f8ce253321"],["/archives/2020/page/2/index.html","dabeba50080a5b7b278ae3d3cfd03c0c"],["/archives/2020/page/3/index.html","c8e5cac217276963c84b6bda5690027b"],["/archives/2021/01/index.html","a7e52233e9bcc2f2d76fd736c516bfe6"],["/archives/2021/01/page/2/index.html","a67b71b681cd88e8e2d875dcc9d16e6a"],["/archives/2021/01/page/3/index.html","91582e4df9d32e50a524da6cd890b3c7"],["/archives/2021/01/page/4/index.html","dc70a1df37541d35d1543057546c6ac6"],["/archives/2021/02/index.html","8318968078531d8502db6d8580af76ad"],["/archives/2021/02/page/2/index.html","1b5dbd36c1664c3c8d0a1e2bc9835e3d"],["/archives/2021/02/page/3/index.html","f5eaae7adbd5b7313eac3d334d22435f"],["/archives/2021/03/index.html","dd6a3372baf57c093efefb6cf1a193b1"],["/archives/2021/index.html","561f9b95942230c1af20a854e51f12e8"],["/archives/2021/page/2/index.html","c558a6bdee0e840c76b5172d0182d0ce"],["/archives/2021/page/3/index.html","623fc36c0088dc77c4290c5a8239f517"],["/archives/2021/page/4/index.html","d67e47ed687560eb8f1f6198b48868f4"],["/archives/2021/page/5/index.html","8aefdb28890b447bdfce5430c00002d5"],["/archives/2021/page/6/index.html","2f0d3078cbc5c1d909dafbd93c756745"],["/archives/2021/page/7/index.html","9f9aacf76d7a7a3fd194759c5b7331d6"],["/archives/2021/page/8/index.html","574364de5df194926e14b8d932b265a4"],["/archives/index.html","a0b96741d4f5ec95b671a345d812e5c6"],["/archives/page/10/index.html","3152242953d5106bba242f3eff722d08"],["/archives/page/2/index.html","528e19c5f854aa4f948f0d8cf8637dcd"],["/archives/page/3/index.html","415721dae93e61efbd26344c9b07e921"],["/archives/page/4/index.html","09e07c8323044790b87d2a57429614ff"],["/archives/page/5/index.html","b86710ba674a9407ff6600bf52db11db"],["/archives/page/6/index.html","461fef161454ae83a3a80f8652511401"],["/archives/page/7/index.html","686e3f58019700efaf2c2ee17e81f4ff"],["/archives/page/8/index.html","9c0f1d2fd6e200f516385922593ee23d"],["/archives/page/9/index.html","f78ef405e1cf237bdf8d1da990f0127d"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","92dc73e6d3c5f8b6ac083e20d897c65e"],["/categories/index.html","85e5e53637b3b1ebf66f3cfb81c9cdea"],["/categories/下载/index.html","d3a99911adda848c11d2c1c8705ae71a"],["/categories/安全/index.html","7d9ce5c429f2e924daffe8689a3b269c"],["/categories/建站/index.html","146d860755d27c10696b22a62560af71"],["/categories/杂/index.html","ecf1ab53e656bd548bb32154a13771a7"],["/categories/杂/page/2/index.html","e42c35942e0d6b318680c88243d46d3c"],["/categories/测评/index.html","442248340a1e0ded74e8217ff53ec082"],["/categories/科学上网/index.html","9d41682d522648c7e5ea6ce142f5657e"],["/categories/科学上网/page/2/index.html","c12a1ec9323e164d543813c3680da81a"],["/categories/编程/index.html","0fe0e48b59fd58725c2450f6bf6993c5"],["/categories/网站/index.html","73ad3b5ce33e19efbb09bc5665549da0"],["/categories/网站/page/2/index.html","fdd4cc0fa313b21a4cb3c265c7b550e0"],["/categories/软件/index.html","4d934651337e5f2d4ef74ba3bc60c2d4"],["/categories/软件/page/2/index.html","c812b8892ef733523c21bdc8a2cb7553"],["/categories/软件/page/3/index.html","13198d97842b9ed845b056f87ec9deb5"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","847b6f61381a54a29995acb86e0f3296"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","a1f066b5ccf60b0e60a081a4a9b7c7af"],["/ios/index.html","0ee4994121c9c25dd7e5ca31f0086001"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","badc2eb4cc34d5929d32b2ae01b7d877"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","d268cc90d64d71360f2a3f500ae89e76"],["/page/2/index.html","6f28886ba7347463cbe9ec9c443b2eed"],["/page/3/index.html","c8a2f2365dccd27565376c5301e6e230"],["/page/4/index.html","a369855ed266d3ef90f21d8a1d178ae4"],["/page/5/index.html","9682f08ce337609717078ebd12d2d2a2"],["/page/6/index.html","d29c5e929b9a873ec37615fd3cfbbaa6"],["/page/7/index.html","b1111237ed208379fdaaa80b86790b58"],["/page/8/index.html","80dff7aedb60a4bbe25216bbe760bace"],["/page/9/index.html","80ece3b9cbd8be796caf7ebfef2ad5dc"],["/payment/index.html","9a994e323f3867c5f345bdbcc38f9a23"],["/privacy-policy/index.html","1056d7edd48846b6d00a5d1e4ecca68e"],["/rss2.xml","7a27bf59ded62f1db3e3b67b017e6d56"],["/search.xml","02198b17a51c33ad74f4df3d0eb475ae"],["/sitemap.xml","699342b7ef300d3e50a5cb11db7c3f6d"],["/sw-register.js","3f8605fff23869399b4e2dfe91bd596e"],["/tags/5t/index.html","9882a86e1fa43308810504fb39cb1227"],["/tags/Bing/index.html","273ee0837f2e9d153a2823f3c77da888"],["/tags/Clash/index.html","41356f5ba0acdd271732d7f46c635695"],["/tags/Clover/index.html","991bf6c9bebd8c2866507da977654e12"],["/tags/E5/index.html","574cef24c9d7f6ea258721f46605cb64"],["/tags/FTP/index.html","c8a47f99c88a3554fbd073b007772070"],["/tags/GitHub/index.html","a7367bcad87bb1ddd6132bad17b790ee"],["/tags/Heroku/index.html","bc0c7ba23b09d7d366cdf6a0bd70624a"],["/tags/Hexo/index.html","88e6f1f5bfcc7a3d0acba634051059ec"],["/tags/Lenovo/index.html","67ae2ea807e9f8218d89f598a8229a45"],["/tags/Oneindex/index.html","872080b6bcc506226110bb71fa32edbe"],["/tags/QQ/index.html","075f3830f7a13ac74da757de131eebe9"],["/tags/QTTabbar/index.html","2aea992bb1ace9cbb67aaf8e5fc5b90f"],["/tags/RX文件管理器/index.html","baaede6d466e2f66ccbd22a7f354e6bc"],["/tags/Todesk/index.html","f4b0cd33aa100dd6ba07f54bed6bdaf2"],["/tags/Vercel/index.html","2f84aa7218371d1992735c4ebff34a4a"],["/tags/ads/index.html","ecfbbcc1188a3e694873049c58c450cf"],["/tags/api/index.html","29cfe44afbb2dcb4eb162be37baf0f5b"],["/tags/app/index.html","a2f2473be6ae42e6ad8b734379c8d88d"],["/tags/blacklist/index.html","8f3dd9a4ee571e6e52b5872bf5f07d21"],["/tags/butterfly/index.html","dd5da96451e747b535511b71e2a40e65"],["/tags/chrome/index.html","4b7bbef9294ed7e1d4ef92219b0ebcaa"],["/tags/clashx/index.html","74ede645713a0e2cfffc59810b467d38"],["/tags/cloudflare/index.html","bf1e2ad284b8f490ab3f305fa166a7ec"],["/tags/cmd/index.html","93544f25a7cbaae5162453731f95220b"],["/tags/c盘/index.html","15cb4b63173681223c8b7a26f5be4e21"],["/tags/email/index.html","75814f43c9b9fe3b6b875673e91e7321"],["/tags/ewomail/index.html","ec36184963b538a3692b1412d7671443"],["/tags/fiddler/index.html","e6c8382e7efabda2d14b3a4cab17034c"],["/tags/flags/index.html","c9e0979818ffa8f158bb3ff36c5fc154"],["/tags/footer，页脚/index.html","fa55e882b58a8d91c51739a799051c38"],["/tags/galgame/index.html","37ffa59eb5b62bf7f16aff38cce67b77"],["/tags/git/index.html","ab270cd2c9aca6df414267bb36ddd122"],["/tags/gitcalendar/index.html","263d13e8f7e9ac09be9f77d3ff030242"],["/tags/google-voice/index.html","31ef5df7c5bd983a423db7f076f0d089"],["/tags/gv/index.html","4c7778a9b1817367f046e6ff080be5fc"],["/tags/html/index.html","5d82ba0869ceedfc99be6243128c29e2"],["/tags/index-1.html","7abcebb11b6a30a538d0699b167de297"],["/tags/index.html","7e16f0e9b55f08f2c790ac4073fdd212"],["/tags/js/index.html","3ffa77619885d452b765a12029a43760"],["/tags/jsdelivr/index.html","3590e31288cd0c58cdaf767c07b2c8c7"],["/tags/linux/index.html","75271b324f8ed85a56e3579b9d91bd05"],["/tags/macos/index.html","cb3f9d509327ba06c9657c2a7d09520f"],["/tags/madVR/index.html","a2b7446ce1606fa30637538468a45503"],["/tags/markdown/index.html","576b0f0ad6a39dde19a2d0d0bfdd26c7"],["/tags/maya/index.html","14efefa92704cbf785eb95dc9415aa63"],["/tags/mklink/index.html","ce23530e657135cd8f1fbf4a60de5385"],["/tags/office-e5/index.html","2ccdac98a5c6ae7345fced5049716fac"],["/tags/onedrive/index.html","622ea997200deac4438ca31d02fe8247"],["/tags/picGO/index.html","0337672c7c37ebdc9e8bce0ca3c96056"],["/tags/pixiv/index.html","432791c83f3a980e7b84c26a2ae6591b"],["/tags/potplayer/index.html","9dccfdb256b33e12980cda57ebb85c4e"],["/tags/proxypool/index.html","20c2e574f1d34b11b2599330ece6ab8f"],["/tags/qbitorrent/index.html","4830d39621ee69d310c87da304da5b7e"],["/tags/raidrive/index.html","0f1c2a53b7959481dab5402f517d5ec1"],["/tags/screen/index.html","33485368d6aaddf240e75dc150921715"],["/tags/speedtest/index.html","a9eef41660089f8da4badbc53bbb027f"],["/tags/ss/index.html","bdff96f7c1faf77cef5059844361f768"],["/tags/ssr/index.html","e051471ddd27a865523df971d55e5f12"],["/tags/stickers/index.html","6b96fcd27969ee56dd2b53cd23e32a2a"],["/tags/surfboard/index.html","17b28dc9f4143d5e48ce6189a158595c"],["/tags/tap/index.html","9b5c7003e44c1e810bf7e4c693753b6b"],["/tags/telegram/index.html","ae022e9914ecadf31585b348a3d9278e"],["/tags/telegram代理/index.html","db9d932605e77669ab6fd6df47e87011"],["/tags/tg/index.html","9e8fc135a0ff04e8d03f137db59dc9b6"],["/tags/tg代理/index.html","3d1db66c92ca8307732ea1352f9bb83a"],["/tags/top50/index.html","1b91a24ed32bc3b944af96fb12993a35"],["/tags/tracker/index.html","c50a364e8883fb86e00625efffe18869"],["/tags/translate/index.html","863420e473758963a0400d9ecbca9a47"],["/tags/translater/index.html","bba9c425b700c2d1782376b6a089650f"],["/tags/tun/index.html","514a2ec094d9a9129a950bae34661675"],["/tags/typecho/index.html","e7f91a44b499eb0bffef30647248df60"],["/tags/v2ray/index.html","b08f51d7df5b2e7deb1b8618fc24a35b"],["/tags/vpn/index.html","f88e5c9c336e0820db59f35e58dc9589"],["/tags/vps/index.html","f2491f1752a6376c3618ca617ef61874"],["/tags/wallpaper/index.html","3ed89f7288f5f8b74b3a686879e9c7c5"],["/tags/windows/index.html","dd64e8f710df7cebbc3e8231d7e1b8ae"],["/tags/windows端/index.html","8bcdf2bf26d64b810d25605899d2be09"],["/tags/xray/index.html","a4e15bb993abb312d45a493d976435d3"],["/tags/下载/index.html","79596757724a8f79063a0e3930138517"],["/tags/不限速/index.html","4514b7d8a92b07e3e700f7a0f27d2841"],["/tags/个人网盘/index.html","5aa708b9d5952d7f94e87fd0b59d7c29"],["/tags/主题/index.html","7a7af68a7c79ff9ea86ab90a4247a7c4"],["/tags/二维码/index.html","0dca05e13fc8efc243344c500c79557f"],["/tags/云便签/index.html","40f3aafd168df332720a869e235e6b4d"],["/tags/云盘/index.html","c4d5bd6369d9b2aaaffa05197575a8f7"],["/tags/人人/index.html","acb4cf90ec968778fa3871d39bdea618"],["/tags/代理/index.html","b307ec794d6084d9409161f128c77628"],["/tags/代码/index.html","3794b42e5de8ecd7fd17e1fdd5e3495c"],["/tags/优选IP/index.html","f1ea5236a569fe53abff27f0eedb49ed"],["/tags/便签/index.html","4802a0cc243014d7847be7fbce1c3638"],["/tags/保号/index.html","1c2b118af615057a1832675a4d106966"],["/tags/免费/index.html","f1a0220238e81d3aa2f580f1984fc900"],["/tags/免费节点/index.html","7247a6170c19229b456cb8d8c686bba2"],["/tags/加密/index.html","9707c981eb7826f3e60d327290a42506"],["/tags/动画/index.html","2f9a5c2af087ccdfaa7536eb92372619"],["/tags/博客/index.html","7017deb40c57fda60ee5986631c4b73e"],["/tags/历史记录/index.html","eb7a73e72383f2ade29ea2e5e62b8a59"],["/tags/压力/index.html","686f03da57b13c6873705b847f864e8d"],["/tags/压缩包/index.html","5699fb7081c4fe95fed720e6c1d9b952"],["/tags/反代/index.html","5f75e7334b946f1475528804751bd5eb"],["/tags/可视化/index.html","6fdbc61e958051865ccfb726754404df"],["/tags/命令/index.html","bac7d7b390bd60663c1543e177d39567"],["/tags/国家/index.html","64304b7b09b47dc20e74e55001387a42"],["/tags/图床/index.html","8857459a10e1eca0b7ee6962fa7330a9"],["/tags/图片/index.html","45da6c62ce2da08a316d53a6c41e44c1"],["/tags/域名/index.html","bd50994271ee4bd7679bd55e951322b7"],["/tags/壁纸/index.html","e4889efd8b1e1cc1e70edce0c4982a00"],["/tags/多标签/index.html","8d570d362a3a5c5df5614feb92b97135"],["/tags/存储/index.html","e89a91342fd485fbb424a5bfee0af575"],["/tags/学习/index.html","51673ff1966a545b1ef5b625e8a1766c"],["/tags/安全/index.html","288ece2b91680a64ab6b0495a3307895"],["/tags/安卓/index.html","ffc1057a8c4c9111a05e2677fafab500"],["/tags/宝塔/index.html","3d08414f55774843d113572908f934a2"],["/tags/小游戏/index.html","0265d6985963d45c92d8333da9e2d500"],["/tags/广告/index.html","95c1503cd2732a7818e311c3df75fbf2"],["/tags/建站/index.html","a3dc0c1533f76f04c260501ec52bfa5b"],["/tags/影视/index.html","08c5d42db1980c9b345f0e46265a8547"],["/tags/微信/index.html","ba449fb54e5be9e1a69bde6f2945c70a"],["/tags/快速启动/index.html","e92a1ec811741f076541f131be8185b6"],["/tags/手机/index.html","ea2210e217b9d60f0b09b3300c54eb7c"],["/tags/托管/index.html","056cb3bab91b87db389ffbe76d9349bd"],["/tags/抓包/index.html","d316e83e992239aa93484c954b19c980"],["/tags/抓取/index.html","fdb697f5352a6d03b23d2b931a81c6c8"],["/tags/投屏/index.html","2e0830dbc5732adfe1a5af3380c61f4a"],["/tags/拓展功能/index.html","ed9afee1478421a4be68c7e7bf13ae80"],["/tags/挂载/index.html","ae3624f5cb4269aa5a22e8313adcf7c3"],["/tags/指纹/index.html","0f917dcf18496e5eea79b7ff403bbf88"],["/tags/接口/index.html","e8594f2cde584f4821d4d2e64f93a0e0"],["/tags/提取图片/index.html","9c9da16e0c5864c9edee707880b094d0"],["/tags/插件/index.html","02b355a1b000eb4b9fb2c91395dbac3f"],["/tags/搜图/index.html","356bcc762525a97ab4886324f2ece644"],["/tags/搭建/index.html","c5400e0cc660412c5891836166d4a4c5"],["/tags/撤回/index.html","d0310a2894200bcb0d37002438a1b58e"],["/tags/播放器/index.html","bdb836a09d3491e442884af6ad214667"],["/tags/支付宝/index.html","8ffa2cc7248fe2de8ca0f9427c819ae3"],["/tags/政府网站/index.html","212b30ac9764bb781394cf1380ce3529"],["/tags/效率/index.html","2a05225d1ffb12f48e135ff9376dea5a"],["/tags/日历/index.html","7ba69472f2c3b00103c83646cd6807b3"],["/tags/服务器/index.html","80af3c8eb57e3c3ed9ab10d9e934128f"],["/tags/机场/index.html","f1be54a2912b9a37f210c929c9a11437"],["/tags/桌面/index.html","c0f3e8dadfe10eb830d29b5672b0bbdc"],["/tags/梯子/index.html","69bfa7fc98622e456cadf79963be51aa"],["/tags/检测工具/index.html","8451b71ec2883d83d371af5013701051"],["/tags/汉化/index.html","b9e2b79943eca7447566f268c69686ca"],["/tags/测压/index.html","55cdc79a822df62a48e33aac9fd42453"],["/tags/测速/index.html","841f910e2d3bcbf56bbda0050c921c41"],["/tags/浏览器/index.html","11c4e68f1750026d514607aeb23c04b5"],["/tags/清理/index.html","b6e8ddbbf7bbf57ccef62a02693b10be"],["/tags/滚动条/index.html","0f763ee6c7f993195d51d3343c4c5510"],["/tags/灰色歌曲/index.html","8923b34dfd5daa43af899aeb5114c11f"],["/tags/电影/index.html","2c2b44e4aef92c5db8cc93ed7f4fd75f"],["/tags/电视剧/index.html","a567ba24ea45c2b90515abd6082ba1e1"],["/tags/白嫖/index.html","fa5231e72176d0b8a68a69eed5bd4cdb"],["/tags/百度/index.html","d5f2197a4e324d545a88ae91c0d9c4f8"],["/tags/百度云盘/index.html","f7e4d9906f285ced76ab782d92fe68f6"],["/tags/百科/index.html","83bc2cf3717a7d9806f48457e7d2908e"],["/tags/短信/index.html","1f6022886050c1e3496879efdefbe35d"],["/tags/硬件/index.html","63389abffcaed234a558db039934784c"],["/tags/科学上网/index.html","5ba0fb514419c4ca93022ea7b30a53ac"],["/tags/空间/index.html","49e1f66704f37527e8ea093e0cf575ae"],["/tags/笔记/index.html","5b579b990a6b88ea00285052c920722b"],["/tags/简洁/index.html","10603203b5d60b26b22125742a7157d3"],["/tags/简约/index.html","49b46f5d75f53cc91172bb57e21d1301"],["/tags/维基/index.html","b9d2d81f7dc3a92b16f80c0155cecc58"],["/tags/网易云/index.html","67f9002bdc1af7539f34aed23579a67f"],["/tags/网盘/index.html","45e38fd78380a176e83f5460e84c9008"],["/tags/网站/index.html","ed66999e20a516fe28ad924654afa567"],["/tags/网络/index.html","9f6421e836d92ef274278cbfe26fd8d9"],["/tags/美化/index.html","c6ba4e9be0be4615f392d0ac050abcba"],["/tags/翻墙/index.html","f6a610f1d13a05a674fa56f9ec405af0"],["/tags/翻译/index.html","4d3641e5c7f0ed353b7920385329e3dc"],["/tags/翻译器/index.html","d6c1caccc98009b6affd708e651b5f3e"],["/tags/聊天/index.html","5d6a4a38b0af08eff72714d9e8143ff6"],["/tags/聊天室/index.html","8bbc170b904946727eb864d699244139"],["/tags/联想/index.html","3d6e11753f11ca9ce5bf653f3c2c668c"],["/tags/节点/index.html","a0c33c4bc6364506947ad5f8997431ef"],["/tags/虚拟手机号/index.html","7b8a608e0b80da96e0da5523bf52f2e2"],["/tags/补丁/index.html","d6613696264f1c652992e3bee9c16e6b"],["/tags/表情包/index.html","8b946c2aec2aaa1e57a42d7984ee7469"],["/tags/视频/index.html","9985870dccda53187f7b081f249d3de0"],["/tags/解析/index.html","9262428629b859efd51a59a7ab3a5db9"],["/tags/订阅链接/index.html","b31aca16e1ab804f3b9615887874674f"],["/tags/记录/index.html","1c84e969348993e7adcdf33f36f4fd20"],["/tags/识图/index.html","7bf52e55bb0f5794c91e13d6ec8cc231"],["/tags/语言/index.html","a573a391eaf953ec1d9a6d4339f9b0c3"],["/tags/资源/index.html","fa24f66f4cf02385717fdef7a017abcc"],["/tags/资源管理器/index.html","2965abe4989a9e59f85a83dd1f3d3380"],["/tags/转移/index.html","a0d270068aa827a31a46d88dd08b6f6d"],["/tags/软件/index.html","70e6a98e85c1b4090a0c5ac27521035d"],["/tags/轰炸/index.html","351c39c0c6f9458789ae2176e2367b44"],["/tags/迁移/index.html","8e37d16a9ab037a6a835598488be9b20"],["/tags/远程控制/index.html","1d2aab551aff529f28f09ce605005ff1"],["/tags/连接/index.html","37f7e55ac29bd53143d484143e39fd51"],["/tags/追踪/index.html","1f57d3a44686717543893ca689541fa4"],["/tags/速度/index.html","fcc449d9ad1848fed0c935fe93aba3b7"],["/tags/邮箱/index.html","282fe1ee1508bc1f3397c91c2f751da2"],["/tags/酷炫/index.html","ee4a58549ff6965998a68fd0ee289d8d"],["/tags/钓鱼/index.html","e8b3341a29e30a3a32cb4b697eeaec50"],["/tags/镜像/index.html","485999f9d625fb7a426219d731f245b9"],["/tags/随机/index.html","365f52462c60d2c016946198c6f439e1"],["/tags/隐藏/index.html","e698c328a9aa588b6f1e51f702d8a314"],["/tags/面板/index.html","729831235852f97175a5874b2d8c350a"],["/tags/音乐/index.html","663d2d40521d70964adca2db1041f4f8"],["/tags/高颜值/index.html","f84f0aef28462143186158b1232d112b"],["/tags/魔改/index.html","bc5a470c2f9e448fb451f42a9df5b880"],["/tags/黑名单/index.html","5a8b428a2ed90e9a06e10b131094e467"],["/urls/index.html","04b87c9fb1b2ec6d950f9f0295f61d2f"],["/vps/index.html","62a1621095984a27a3c8361c951b8494"],["/支持/index.html","3295fa4649b2e74c436384262406c48d"]];
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
