/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","06c11b90ba0ccb4c60e0408351910ac6"],["/2020/11/29/clash-windows/index.html","03d6a0044e2aae1c682dd44baf96ac29"],["/2020/11/30/websites2/index.html","1c6eb46a9c895260afa1c7c6f56849c6"],["/2020/12/04/iphone4s/index.html","3c52e4e3d638500b389af67f0eccdb92"],["/2020/12/04/onenote/index.html","dc026a74b9c5e5881b2951e61dabe426"],["/2020/12/04/wesites1/index.html","37697f1c864b2df8b1058069786a3a74"],["/2020/12/06/nokia808/index.html","a24a838d33b6207169635e4c90d79544"],["/2020/12/07/ipad1/index.html","5bd1d868a38529496d3fef56a351ce5b"],["/2020/12/18/freesubscribes/index.html","aaf936bd3cfb3d7e56af71c71f0530a0"],["/2020/12/19/musics/index.html","0319212da270f28decb0395b69c18a47"],["/2020/12/19/shadowrocket/index.html","0ee17d3fb15f684c68f175796db237df"],["/2020/12/19/v2ray-windows/index.html","93621f01b0cf06376f0721eca31f742e"],["/2020/12/19/v2rayng/index.html","5ca96eaf435561dab65d343b84e87b62"],["/2020/12/20/beoplay/index.html","de06e41cea0b55e3b3d51778b407fa7d"],["/2020/12/20/订阅链接转换/index.html","f845140943e4e5fe96c3fd7589718614"],["/2020/12/21/chrome浏览器下载提速/index.html","41a894196d8f9a2c33b9ddec8f4a503f"],["/2020/12/21/免费128线程并发下载xdown/index.html","4dd7a29b9ca17e9f2f2bb09dfb8e2f9f"],["/2020/12/21/免费32线程下载软件ndm/index.html","c1b13744740eaf49c9f57be7df589e47"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","ea5d6c5c557425531163f8debf55a58e"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","771e7019814116db86f30817d765fbcc"],["/2020/12/21/广告怎么知道我在想什么/index.html","75b3238bad7d1b03a65365ee80ac9343"],["/2020/12/21/无名·引子（小说试写）/index.html","68eb2cf34b05a0daac701a4ca25c055a"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","67036d6e34ec5a58bf6e619383802da3"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","544f24602160899384ea7583199c11b7"],["/2020/12/21/高速轻量下载器aria2/index.html","e7e8d8cf6fbe9c00c9bb19c14a716361"],["/2020/12/22/2020-cee-roo/index.html","dcf5a12380508ffe57e526277f97eeda"],["/2020/12/22/firefox插件、github、steam富强/index.html","137cd6bc71e77f94a9a8cfd3bd1209d1"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","d5805a1df34b3ccf67d6570697d1ded3"],["/2020/12/26/python-day-1/index.html","6f6c1ad6157c6b72fc89a28e1087340f"],["/2020/12/26/python-day-2/index.html","c78dc0137c95e6c961f68d61019e535d"],["/2020/12/26/度盘不限速下载方式一赏/index.html","e92c1cfe4a215acb0509582573853f28"],["/2020/12/26/添加开机自启软件/index.html","3126451067911e640fdb62977aa13e4c"],["/2020/12/26/电脑端截图方式一赏/index.html","fb0a92d9497dca1c96ed402db3600f19"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","842c6d73651c67bfe2d2039c47148c06"],["/2020/12/27/最安全的浏览器tor/index.html","6a26aa2da3de0dffe05ce5497b35e1ac"],["/2020/12/27/网易云刷等级和听歌数量/index.html","728294fcafbdf2fd0dbf929c336e1f08"],["/2020/12/28/freenom申请免费域名/index.html","bd18d466c772cc14767bb835c431df3a"],["/2020/12/31/机场/index.html","fdf643f29fdd1f2e6e82f8254bb2cb20"],["/2021/01/01/M1/index.html","9c86f6af7d3fa46f699a44531a702974"],["/2021/01/01/compress/index.html","de06304c515f8783e8a63daca949bdfc"],["/2021/01/01/infinityfree/index.html","16edd911f9fe47bb80a89785409e4d71"],["/2021/01/01/硬核翻墙/index.html","d786080ae7f0f9b9efb3f5abf51b9b4c"],["/2021/01/02/qq/index.html","4d03c3b75ed9bc1147783f3a9b09ff96"],["/2021/01/03/netch/index.html","c781f235f31348221e40624c24083682"],["/2021/01/03/waifu2x/index.html","dd0bd2eb72ddf33953a2108a77a78546"],["/2021/01/04/ads/index.html","7f52cf4a497e7eb7f63ae185069ce949"],["/2021/01/04/games/index.html","8e4918151b76710b1513a60964452f76"],["/2021/01/04/heroku/index.html","e04f8c95a7da7fb0f0190881fec20211"],["/2021/01/06/movies/index.html","dc3867d19c9e8608db2fed9dc3a094d7"],["/2021/01/07/google2020/index.html","4128b0eecae232a149e157c2a2df72e6"],["/2021/01/07/lucky/index.html","40578b8a218f22392ef31fa2dd8b3520"],["/2021/01/07/spotify/index.html","037ff3b5f978db7e156b9dc172d7e374"],["/2021/01/07/thunder/index.html","e9d131b4d40e6a7096ec5f8e179937d6"],["/2021/01/08/adguardhome/index.html","5d985f0fdc19350381e55eef698a45e3"],["/2021/01/10/IBM/index.html","be343c78415cf0a4505e5126f9057fef"],["/2021/01/10/potplayer/index.html","78b74f00164bd75c5738bd3b8428d783"],["/2021/01/10/sakuraanime/index.html","cba795f7db1a332b93c0da97a8165572"],["/2021/01/10/美剧星球/index.html","1868b9f40acd98dff6816fff679d838f"],["/2021/01/12/telegraph/index.html","d31df330c9c7a3caadd7b5d1c274f860"],["/2021/01/14/comics/index.html","4cc7b6b334147781f1f38e2e38c286ad"],["/2021/01/14/ftp/index.html","d0d7f8e988e7b79e6eaa2d0e45e3f879"],["/2021/01/14/oraclecloud/index.html","b301d2725858570ac06169cc579ea4e9"],["/2021/01/14/porkbun/index.html","c5f437dbd91a482d787293536ed122f4"],["/2021/01/14/powertoys/index.html","a065724986b1f89ea244abcbc0356079"],["/2021/01/14/taptap/index.html","8aea62d080319e6e0f6b4d85adce8eea"],["/2021/01/14/ubuntuvsftp/index.html","8d5fef04e3c35e5c4e0134682f0e7a3e"],["/2021/01/14/小说/index.html","895252131c54d3c524fadab3cb4eee91"],["/2021/01/15/freeproxies/index.html","d5da42fb8253f9dcf876d4dbc16333bb"],["/2021/01/15/incaseformat/index.html","05157a7fc89e4a4d46c24cacaaedf866"],["/2021/01/16/euserv/index.html","99528abb3d76a77a3add53531a340ccb"],["/2021/01/16/winxray/index.html","2ec00d47275fea0615307e51b0757c10"],["/2021/01/18/qqreadhistory/index.html","5e7926ef3fb7d2798c57b296274c25e5"],["/2021/01/18/qqrevoke/index.html","89478673ff9002d0f6899d2b6a8932e6"],["/2021/01/19/freevpn/index.html","cb0418f36a2ede5ac61696207621fcc8"],["/2021/01/20/browsertrack/index.html","90ad712f076b51a4070300ba5fbc70a8"],["/2021/01/20/v2ui/index.html","44b8c67af843cfde62aec8cb615191ff"],["/2021/01/21/failedtoconnect/index.html","fddc75736592cc2a0a8b870ab60f2a1e"],["/2021/01/21/gitcalendar/index.html","8914b4438ae3e599ee0651cf629d6ef4"],["/2021/01/21/markdownformat/index.html","aa0285f1126824f91f38477fcd16fc10"],["/2021/01/21/markdowntable/index.html","d08d9cbec8abb84432686cc03660fe78"],["/2021/01/21/vercel/index.html","219b995df148cfd577549cf889dc06cb"],["/2021/01/22/hardware/index.html","79ebfac7c0bf4337c2a3a4c6156e24a3"],["/2021/01/22/muviz/index.html","be618ef6f67d805e353780d8132f9b1c"],["/2021/01/22/randomapi/index.html","ee8cde4c972e99577df9777884714752"],["/2021/01/22/searchimages/index.html","66c2befd91264d48b8957513944e1306"],["/2021/01/23/RX文件管理器/index.html","61ae8cc4efb81e92f27cfbfd7decb425"],["/2021/01/23/chromeflag/index.html","ac28287140769913a7f9d3b7b5c57a2a"],["/2021/01/23/qttabbar/index.html","2c16fa1804e7999d707addf56bebf4c4"],["/2021/01/24/githubspeedup/index.html","ccf73fc9e3af3d4f333a4b1b1fff0da2"],["/2021/01/24/jsdelivr/index.html","168d3da9721ab09835c68614ddc57a97"],["/2021/01/25/note/index.html","0379e1bbdfcb51567431722fd7c71ea6"],["/2021/01/25/soul/index.html","c79788dc95b91c23dade6d2cb85b0880"],["/2021/01/26/herokuxray/index.html","e552039abec1cd878728d257861521a2"],["/2021/01/27/proxypool/index.html","def02cb9f266b1d8b35b9e6fa3c858cd"],["/2021/01/27/tracker/index.html","d6f2b094f399d5974342ec80eaf2b084"],["/2021/01/30/pandownphp/index.html","8de7251df75dc0a27778464c104150eb"],["/2021/01/31/newgroup/index.html","990fe178d200cf9b6f4db1517a25206d"],["/2021/02/01/clashlanguage/index.html","cb3be2ba9106a3a34c2eb4b557a24fce"],["/2021/02/01/encrypt/index.html","996d669299a14fbab209b287758a6722"],["/2021/02/01/footermotion/index.html","31528425a2ae2c9c64abcc0f9053cb0e"],["/2021/02/01/gitter/index.html","4c47fac97231d1c04631c2bda6e697f7"],["/2021/02/01/pixivtop50/index.html","23efa5c711ef077c0f94cf5a3977f1b8"],["/2021/02/01/scrollbar/index.html","5582915c55a327e0703e470e07d45d45"],["/2021/02/02/clover/index.html","f8268d7eb23147581743b39a13c582ed"],["/2021/02/02/maya/index.html","e68f0c3d09d6bd89c101b13eee571acb"],["/2021/02/02/speedcontroller/index.html","83f632e29912e60de2113b0c5ec5c3de"],["/2021/02/02/yesmusicplayer/index.html","65b64ff4104f57c1b50bc4bf4b2aff9b"],["/2021/02/03/lenovoonelite/index.html","9fb767eb8a36856543ec2f0386eaf9e5"],["/2021/02/03/skipads/index.html","87cd982f577474bee64543da3abd811f"],["/2021/02/04/picseed/index.html","1021344f13c526c8bf26edf918df93e0"],["/2021/02/04/renren/index.html","45b3c45eba32407aa9b7cb8bd633530e"],["/2021/02/04/serverstress/index.html","fb69814598b94511565dd7d5d6c024f2"],["/2021/02/04/wikipediazh/index.html","e6c3ea93ed2c0e1bee34e78faa449810"],["/2021/02/05/googlevoice/index.html","9592f0f031c6ac8ab1cf0d3b3f157753"],["/2021/02/06/clashconnection/index.html","dfcd86bc16b91184c3e9dde694e23cb9"],["/2021/02/06/gvtransfer/index.html","9f490cd5b0048339566d5d9f44e6064a"],["/2021/02/06/todesk/index.html","c696c9f0842fc12f622669c1c6e3f010"],["/2021/02/06/vpnblacklist/index.html","66645a5dbf567377e853de09599cdf52"],["/2021/02/07/mklink/index.html","5932c243261917a5a57bfc914f054aea"],["/2021/02/07/speedtest/index.html","5942dfaed44ba94266ac59411cba04de"],["/2021/02/07/translate/index.html","fa35974bc9715c7565cc8dd4ea2b815c"],["/2021/02/08/ewomail/index.html","bbaea09171c4bedf78e96fd19860a1e9"],["/2021/02/10/officee5/index.html","51f850bd47ded0b78e9f86aa4e72ad35"],["/2021/02/10/raidrive/index.html","cc5b933504e53cb16e7c0aa433adf68b"],["/2021/02/13/e5sub/index.html","87e4894fc24a97ab2763f5cd913f3ddd"],["/2021/02/14/screen/index.html","a5eeec3e5afe91e6e5332b3977da6b7a"],["/2021/02/15/clashtun/index.html","8a060c1360028180af491b08d4124364"],["/2021/02/15/messageboom/index.html","02f91abcd6af773ffbe62de0ed7a6af6"],["/2021/02/15/oneindex/index.html","b52809ebd1150bae733b3f50cf145128"],["/2021/02/16/govsites/index.html","1e2ab4645ea094360fd47a38c4109475"],["/2021/02/17/hexototypecho/index.html","9da8c21ff234370ccb2d05293ef67cf7"],["/2021/02/19/fiddler/index.html","eca68aabeef240d4735f4dccdd98ab08"],["/2021/02/22/potplayerset/index.html","b6f757a4db7012214b1a7047531bd71e"],["/2021/02/22/studyresource/index.html","6ce12bbf9d7bd12e675e2e0310fbad70"],["/2021/02/22/telegram/index.html","b66aa8d77d775f8102956cec97bc7d9c"],["/2021/02/22/videos/index.html","707fc92c8f3100211b187e71c07e8a21"],["/2021/02/24/mtproxy/index.html","cda0d7c09f04501435d5a7faa4faa085"],["/2021/03/10/catchcat/index.html","7729fdfd3d22a967fd91cc7de07b87ee"],["/2021/03/10/neteasemusic/index.html","b2371414b6f16c77ec12ae86bc43a3db"],["/2021/03/10/surfboard/index.html","e7ed23e5ed9bf6489c96c7e9d950d8ae"],["/2021/03/11/vpnandjc/index.html","f3656c37a401d129d85b7f69b1951cea"],["/2021/03/12/qrcodes/index.html","a52bf71fcfd37294134c6681d892cd12"],["/2021/03/20/qv2ray/index.html","2b0ecfeb9dd3854701ff4f45d53ac58c"],["/2021/03/22/freevps/index.html","ebc7280657256b0caa57e6c2e58a3cde"],["/2021/03/24/tgstickers/index.html","a1064b32ed1f42fb1767da77e1ae0766"],["/2021/03/25/clashx/index.html","07626a934fa06d355c848052eb78935b"],["/2021/03/26/bingwallpaper/index.html","584029358c86807cfa8a61578c94134a"],["/2021/04/03/soutu/index.html","ecbb0571dcfa4fb3ab025ecdd8577e93"],["/2021/04/03/tiyunti/index.html","99f2cffdb6f49f3eba7a4a7fc741f3fb"],["/404.html","d507b8052a44590b8aaa2485fb571305"],["/archives/2020/11/index.html","d0859ab6bb295ce602e75e6ef9075da7"],["/archives/2020/12/index.html","ca5b9f63ae23252fb2ef8a90b882860f"],["/archives/2020/12/page/2/index.html","cd9f5a2cb9c70a6b2dc02f5353b4e1e8"],["/archives/2020/12/page/3/index.html","6ed43e1072d610d491b7823e46080649"],["/archives/2020/index.html","76e7255d5616f517e42f9ba4ec08dc9c"],["/archives/2020/page/2/index.html","dcdd3c4e98fcf42bb1d066ec4b734256"],["/archives/2020/page/3/index.html","4059881806b38c2eddfca111cd98c335"],["/archives/2021/01/index.html","e927227ad5873265da7ccaa10d46cff0"],["/archives/2021/01/page/2/index.html","0e0b617845bbcd4b54a7f0f89a65cd0f"],["/archives/2021/01/page/3/index.html","a4c36df407ced6d4f30f46884d57d9d0"],["/archives/2021/01/page/4/index.html","3d66c9021679f01d171fbaeb8d65873c"],["/archives/2021/02/index.html","1440dfba4852922b6379ea85f921907c"],["/archives/2021/02/page/2/index.html","ec5a1bdae53f0f24a9df9d1f57b9f01c"],["/archives/2021/02/page/3/index.html","b9a5b189dd6476d54548f096bb16c651"],["/archives/2021/03/index.html","5e1e8c5bbb1989634bc00373e4d52d8f"],["/archives/2021/04/index.html","f9a31f17e2a32418ab1834d3d79b2715"],["/archives/2021/index.html","1a95b167a8fa8ec57719c06c99b4e043"],["/archives/2021/page/2/index.html","4d831a5bf5f5ede6c68d0152ab039ac0"],["/archives/2021/page/3/index.html","cadca34f5e44850b177f1a6c8e723812"],["/archives/2021/page/4/index.html","4d6b76b09797eb0c5bedd9aa1c928f37"],["/archives/2021/page/5/index.html","ef6334fcf98c9c28f9b2106041ed36f9"],["/archives/2021/page/6/index.html","0ec73fe2a509fea796871b4a8cd82907"],["/archives/2021/page/7/index.html","4e8405c96cda7b7495d36118de08c9fb"],["/archives/2021/page/8/index.html","66982458810b266eccb58e528cdcbb01"],["/archives/index.html","b7aed13734b43a90dfdc4ce485d18a5a"],["/archives/page/10/index.html","6359fb782b2420a43af04ff3a13e31b9"],["/archives/page/2/index.html","83832f74cf3cec5d582d5a28d3ad5860"],["/archives/page/3/index.html","dd60a9f980642e64280d04604c8469a5"],["/archives/page/4/index.html","a9c6492ea8a8dfeaf4c4587347cce553"],["/archives/page/5/index.html","3a5011d561b5ed928ee1546c1d3fbbb4"],["/archives/page/6/index.html","8f19fcc59bf95353145905e14b17ccd5"],["/archives/page/7/index.html","5b91e97c40dde603daaa8dd7ef1e3cc6"],["/archives/page/8/index.html","5fcf89c5c187f19bfcb706040c2dce58"],["/archives/page/9/index.html","3bd02c6a03916ceb0a72f22e28ed75ba"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","469329ecd8d894bc8b50d4db4163ced4"],["/categories/index.html","6f1c073d92198a4a0f40ec8a273ab802"],["/categories/下载/index.html","da8104feb8bbddf799d5931062ced5ca"],["/categories/安全/index.html","cc6865b279b236b4b52097828fcf3493"],["/categories/建站/index.html","451576436b3d9c9952b278578c5e3d3b"],["/categories/机场测评/index.html","6ca7f8ac1eea30714cbdb80275a1d7dd"],["/categories/杂/index.html","33401b956920bfe232d3f4a13a0c3564"],["/categories/杂/page/2/index.html","2a45f73eb49657d91c5908d7b207f467"],["/categories/测评/index.html","4ff94fc5bc691155d71d36b014dc9193"],["/categories/科学上网/index.html","ed0c5fb72171aa27de0a73abd0fca8a2"],["/categories/科学上网/page/2/index.html","1bfc0a4b6d8d57d3a21e18eca7ccaf13"],["/categories/编程/index.html","33bfb072c0a9334ff4e82714abee18ed"],["/categories/网站/index.html","fc6c3b0588573b17874ecdc1cfaf7d6e"],["/categories/网站/page/2/index.html","2fccafdf79953c41ff76e87d2056ead9"],["/categories/软件/index.html","394b3b0b700c9799051e6217cedea23e"],["/categories/软件/page/2/index.html","45c419d75fc86a91b11dee72d09099eb"],["/categories/软件/page/3/index.html","861fa8b802a4dae9f66a4124f822a3b7"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","0695ae6132e173138444ba6468c60d43"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","1c5e4df59339071f529975abb14a5ca7"],["/ios/index.html","65fa93be4d0f65e72d85824c3048abb9"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","6ef5e600bb3d70dda8c7a5346ba2af09"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","1aae32372f408ed99f890037de2da461"],["/page/2/index.html","99d3ce645b8c571977b796a82f74faca"],["/page/3/index.html","85401047925682d44929eca0b23eeab8"],["/page/4/index.html","5fe1c3b2664876b43a8d0fd96dd48ac6"],["/page/5/index.html","2b898ed9b657bbf72f8dba55f4956361"],["/page/6/index.html","68891f1b366e5ce92719a14a95980f47"],["/page/7/index.html","85672fa81e469740ea7a9a0eb2f37cec"],["/page/8/index.html","4c1a0e6f5ae73cb29fa666b22871f63c"],["/page/9/index.html","bda6c5c16fa42f4a3ce14dcd8869b56b"],["/payment/index.html","32055130c97e0ebc36c701ee403735cc"],["/privacy-policy/index.html","8622f3875465bba14408556d397b9db8"],["/rss2.xml","ef52106490cb6f5b3c6bb7d712d1842e"],["/search.xml","e1c6af99186d1395e347526eecd5da42"],["/sitemap.xml","928dab102f3af3c14b4c073a6c236e4e"],["/sw-register.js","f6ba069f724dbd5bbeb4b959ea7ea08f"],["/tags/5t/index.html","03a93e43c85fa179406e309fbe33f96c"],["/tags/Bing/index.html","a498bd802124f152efff2b4e6c1a2fec"],["/tags/Clash/index.html","7bf6a509a9c655716e622a096aff92c7"],["/tags/Clover/index.html","f981680c96d7e710e5d3ede015f41f08"],["/tags/E5/index.html","2dd60379acf775ee4f9d2196cfd060ea"],["/tags/FTP/index.html","69b04ff1111e6c5edc24de6c562ac600"],["/tags/GitHub/index.html","ccfcddf7a5e6a6b11f97a4e1bb11f2a7"],["/tags/Heroku/index.html","cee65edd9f7eda90ffe5904f4c6c1475"],["/tags/Hexo/index.html","5a753aa5366206f8c8edf42979904cfa"],["/tags/Lenovo/index.html","461f6ec3a4cd5fe53342d89fffeb4af6"],["/tags/Oneindex/index.html","5aeb88a2fa73b8f64536ac6074cd3af8"],["/tags/QQ/index.html","a3b9369a01a5a14c159a35146860e54f"],["/tags/QTTabbar/index.html","9ed298e0f7000f0a222c743892465843"],["/tags/RX文件管理器/index.html","16308b937382ea6cf7c2b8a4eb057bd8"],["/tags/Todesk/index.html","dbc18cc61a974ff2c1929044c5271e11"],["/tags/Vercel/index.html","3964906060fca77f85ff44a7a5e0935e"],["/tags/ads/index.html","d6c9a31187df14c77cad5c2a17a59bae"],["/tags/api/index.html","7d579fd301741a811803fe83386b9d20"],["/tags/app/index.html","f9e7356f050d1ce0cf130fa381e15d0a"],["/tags/blacklist/index.html","10ee82bec3e3e90ada1d1911f890a811"],["/tags/butterfly/index.html","28557bcd6ad9bf905c9020700d56a334"],["/tags/chrome/index.html","e7660a24121cb009582e2c4f0849a912"],["/tags/clashx/index.html","21f53645cb5708c25039ad0c7f07500a"],["/tags/cloudflare/index.html","d1f5de8ab36c9eefcef7fdb69aee026f"],["/tags/cmd/index.html","2c38e14e3ae080539c6569b9c31e0675"],["/tags/c盘/index.html","66511127214735e4df96c72aad54a34c"],["/tags/email/index.html","6dbcf966aa18e57fc86f8f5dc58f2ec5"],["/tags/ewomail/index.html","d4257ac41888d909a98067676e606826"],["/tags/fiddler/index.html","51a844ccb372e5a6ccc53bcb569ebf85"],["/tags/flags/index.html","1783231ba77eb63851c8d2cf2ef9b106"],["/tags/footer，页脚/index.html","f37f76ef62c78c95f132d30d2dbd34f2"],["/tags/galgame/index.html","78d6bba101a4b6b3b2254af3c3f0bbf4"],["/tags/git/index.html","ac4101991a6f25d77953d034a82794f7"],["/tags/gitcalendar/index.html","f8604a0d7b06a97345990865e52a8573"],["/tags/google-voice/index.html","67a872fe82f9a227d9cd09aff6ea1380"],["/tags/gv/index.html","32e3d011f14e5c585507618a05d5c88d"],["/tags/html/index.html","11cfb4fb758edbd35800ef5c8f1b7ca7"],["/tags/index-1.html","ca29fd788e6defa149a0238f94b0d500"],["/tags/index.html","b18ecd03de56b60530cf1095190c1bdc"],["/tags/js/index.html","9d496c26edce5100ea0983c2de17fb3f"],["/tags/jsdelivr/index.html","94fdd17c7db0082ead7037f5dac8ebf2"],["/tags/linux/index.html","b511f56022dd519260124bb4098cf0b4"],["/tags/macos/index.html","991ed398875adfb74b00eb246a0a6d3c"],["/tags/madVR/index.html","c999b35ff417d8f73100f956ae88234c"],["/tags/markdown/index.html","d51fe6c13a431767cdded9fb31d9413c"],["/tags/maya/index.html","71a62b1d05f66c57955e3cd9ab3f81ff"],["/tags/mklink/index.html","21e3e2fd3c495480bf442aefb06a2f5f"],["/tags/office-e5/index.html","ecdf5e36aa11e6d4d86fe21c0d1964da"],["/tags/onedrive/index.html","727711c8738b6c77e494da3bf26f18ba"],["/tags/picGO/index.html","94814761ffb04cf2b6d83097f6843241"],["/tags/pixiv/index.html","b1ae9dfa45371da0b04569bbcc9b3a83"],["/tags/potplayer/index.html","b8145ff9d88661dc7658d12a5d5cfa99"],["/tags/proxypool/index.html","85619acea4573617ca4b98589ff60684"],["/tags/qbitorrent/index.html","709eeb32265e27d40f04506bf58b4047"],["/tags/raidrive/index.html","8ad94c543c9ebb597563c2db0ab1da34"],["/tags/screen/index.html","4ebb9bb0a617c8518e6db058fb43449d"],["/tags/speedtest/index.html","e510f7e6512ae43b3141a090963155d4"],["/tags/ss/index.html","63f249b7c9e8eb686c1e73d831cce6a0"],["/tags/ssr/index.html","bf56050fbd19ebc8ca22dc932dae43ee"],["/tags/stickers/index.html","b5a2380d5cb00f21887f02550deb2b88"],["/tags/surfboard/index.html","4a2521a65fc9bf2c15f30ed22ee24dcf"],["/tags/tap/index.html","a5001ce3bccfb8e3e52dd6f6d328be23"],["/tags/telegram/index.html","beec85b92c1c4359b330f692309b9e28"],["/tags/telegram代理/index.html","8df32f7695164904b2f9f520d7342fe7"],["/tags/tg/index.html","3e87f9d0f97bce79e1b5f76ed936e7a4"],["/tags/tg代理/index.html","bc43c0a54a038b5de26237ce6e29e3e6"],["/tags/top50/index.html","c04cb802ff4c7f962768a0c9d84f4a0d"],["/tags/tracker/index.html","4beb67ecb45b36442ca57d107ff6025d"],["/tags/translate/index.html","b9c616c30ae5cfa343386dbe479730f3"],["/tags/translater/index.html","a55dbd26126ba9b40d6dc5a00f5a7eaf"],["/tags/tun/index.html","dd899c4ee759e6f815fdd9cb12ffc36c"],["/tags/typecho/index.html","84adb1f723dc4329ca739ca5910e73c1"],["/tags/v2ray/index.html","81e16bde296e6e6dc3eb50137b738258"],["/tags/vpn/index.html","68069fd22881a68fb0f6fbe3d82a4670"],["/tags/vps/index.html","f8dbf55ae3c7344343d51fdb20047dfd"],["/tags/wallpaper/index.html","e00b20f548ed759702ee7af7c125f1e5"],["/tags/windows/index.html","a0121698bcbfda71afd834dc4bdc03c6"],["/tags/windows端/index.html","90e4cff15de68321ae049d2a91979060"],["/tags/xray/index.html","889fe070970e1bb697dcd55b9758328c"],["/tags/yandex/index.html","59abe22f988279fc275398a0d42f2645"],["/tags/下载/index.html","f6bff69e338ce8a919c8fe9e82a5f421"],["/tags/不限速/index.html","0c3849833ed11bc15f151ab72e3ab2f3"],["/tags/个人网盘/index.html","b19476c1853df9934a1513237aef2e73"],["/tags/主题/index.html","a303cfc870de96664a626a35ef991ed4"],["/tags/二维码/index.html","823c0dde90f909d556a8dd3fc173cda6"],["/tags/云便签/index.html","492ea4ce0fc8064598ecd32492ade655"],["/tags/云盘/index.html","e67bbf2061033558326989bda4d6185a"],["/tags/人人/index.html","10cdfaca0ffc6e9c8cc8ce1b839d68ed"],["/tags/代理/index.html","d5819c4d817a32565e9df43ac39e05d2"],["/tags/代码/index.html","bb9a30d84a679b470467874c66412372"],["/tags/优选IP/index.html","5a981a074711240260221274fb43332c"],["/tags/便签/index.html","9db848b47e2a6db7cd2158ef525b52c0"],["/tags/保号/index.html","7557f36f785cad2935967f6dd595d485"],["/tags/免费/index.html","fd1a2065e45f65521f805f8a3c85b22a"],["/tags/免费节点/index.html","af85a7688c591724a80a226eb8adaacd"],["/tags/冷门节点/index.html","06b88d17aca9d97b0ab8eae4c0d96a15"],["/tags/加密/index.html","e689008b8e4b52787176bf9ad082a941"],["/tags/动画/index.html","5a64d84a0c68a6af20838b186a845b58"],["/tags/博客/index.html","73e06c9ab5d656989ed3ead889a81917"],["/tags/历史记录/index.html","4c07d406f718d7611360e677011a0b40"],["/tags/压力/index.html","6ab30ecd0ca9ec3d565dd03b03d21ba5"],["/tags/压缩包/index.html","332155f17e6504adc95adbec2c3b1e1e"],["/tags/反代/index.html","b1b4fb924ba216d4bc2632a899e908d1"],["/tags/可视化/index.html","07c3694028c7c7f8383c01b505701e09"],["/tags/命令/index.html","85de2672f72be522f7eefb9d6e010cb6"],["/tags/国家/index.html","4b49299e0bbbc0837233391e6734aaad"],["/tags/图床/index.html","2c7104affaac556f9f0fda85ea1f990f"],["/tags/图片/index.html","2d1a79018b7fbb90c1680b2b15e64062"],["/tags/域名/index.html","fbec126aeeabf33b4e3bfd6fb62027e5"],["/tags/壁纸/index.html","7560ded0af94595ea54fd32215abfd40"],["/tags/多标签/index.html","cd7ba9cf5c4efd4030f9cbad2baedf06"],["/tags/奈飞/index.html","f7e7503bb7e9a9a49f79586c89561268"],["/tags/存储/index.html","e1cb42ca31d5759c86f59fb6ea3f9bb4"],["/tags/学习/index.html","80a583208d74791cb782cf204b719d00"],["/tags/安全/index.html","4cb85f3f6e77d61cf34c0d9a90042bc3"],["/tags/安卓/index.html","82c039aff5a36f5a000c9b50c99d96b8"],["/tags/宝塔/index.html","3bb4f931e0a141fa36d839ef52e92392"],["/tags/小游戏/index.html","fdb4b44cb4daadf7b0863bed9cc8f128"],["/tags/广告/index.html","15c39a5e828ef742c3923af91efb5fd3"],["/tags/建站/index.html","738b5a46058d4753e7976749f97883b6"],["/tags/影视/index.html","08871115ed6ca23dfc0c493f2bd9097a"],["/tags/微信/index.html","bffef9f64245023bf774a9095def0135"],["/tags/快速启动/index.html","57564003c786ec6273a34a45395a8217"],["/tags/手机/index.html","3b8ebdace46993f92b91e460d97870a3"],["/tags/托管/index.html","fd4386c3aceb432ab373282449302d44"],["/tags/抓包/index.html","0bfb178a36428b2dadd4fca2ca85cdc6"],["/tags/抓取/index.html","b1bd5c886c0a0ddd7c6f8bd0a26e2019"],["/tags/投屏/index.html","20c09cfc93ddd4e540cdbf8f4c4d39ad"],["/tags/拓展功能/index.html","809fe7c6dfa7859375dc01d9a50c6828"],["/tags/挂载/index.html","83eb9059c861a546c597b3ba95f91761"],["/tags/指纹/index.html","5f8142d6f804bf0c69e8fa552ee40ed6"],["/tags/接口/index.html","fd049a5235a27be4b3c2189d9b2013e4"],["/tags/提取图片/index.html","42fa6c82260c126c1b4a44939944398c"],["/tags/插件/index.html","064f87b1c72f3a7b32e08a539c62c8a4"],["/tags/搜图/index.html","d1ca76c4def642c82533633c5c431ae0"],["/tags/搭建/index.html","344b4cd9b4a2facda9f50e749b1b9cb7"],["/tags/撤回/index.html","1352374698eccc28f79b1fbadea182f9"],["/tags/播放器/index.html","433cc4272055f42c9ea6bddd5136b499"],["/tags/支付宝/index.html","37ee867d2938c587a8d231549b63fa68"],["/tags/政府网站/index.html","f6b3643162189046e3c98498f8ae1b0c"],["/tags/效率/index.html","9365fbd7cbdf3bfc203fee8b3ad8c8b1"],["/tags/日历/index.html","1168ea3b31ef701fbb310d2d15b7d2d4"],["/tags/服务器/index.html","4a711faa23d8697e6d8f783b3bd09f5f"],["/tags/机场/index.html","fb108e07d5741f9a1d097b273eb6b309"],["/tags/桌面/index.html","78970683886c96ba7c98622dd8133d25"],["/tags/梯子/index.html","aa47b064b851319cf76e07f47dc1ebc2"],["/tags/检测工具/index.html","e25f9896d241d2f4fe912c0179b4b87b"],["/tags/汉化/index.html","8d7d0cab65621b28eb7c38497d3a164d"],["/tags/测压/index.html","537eebc4c495173f48cd1fb21fa904a9"],["/tags/测速/index.html","be44caf3ebbe632e4e4772d1f3c89a1e"],["/tags/浏览器/index.html","4fa51f55c11b02ce052767ef0fc87758"],["/tags/清理/index.html","a4103f970e92c2cac2d06d32517fe7f5"],["/tags/滚动条/index.html","92bde61172345ea704dc3c0b39bc0faf"],["/tags/灰色歌曲/index.html","7c52b97f53b20f641f84658d9c8172c0"],["/tags/电影/index.html","149f89c1cc32ccef5ebceefd4bee9e7e"],["/tags/电视剧/index.html","3a8def8314bd8eaf95749cb4767d372c"],["/tags/白嫖/index.html","01c2520f7abd69f4654784cd1509b96e"],["/tags/百度/index.html","f753004bf2e7f061c9e7129696b88c23"],["/tags/百度云盘/index.html","835b8b8a669b531646bdc7f61fc1a2aa"],["/tags/百科/index.html","0b0f0a748c94018f45086e32f926d562"],["/tags/短信/index.html","eb20227ee1944c54d954d1f01ff3f9c6"],["/tags/硬件/index.html","50148ba2446340d2c71d808da38ecd96"],["/tags/科学上网/index.html","ee1bbc46c37ef4d9ac530c1bb969b28f"],["/tags/空间/index.html","28a05f57e0356427922ffbbd2cdd503b"],["/tags/笔记/index.html","fef285412e7bf60f33fd9ad4994ba815"],["/tags/简洁/index.html","f4edf72c63bdf339cb4bf7e85f7ea635"],["/tags/简约/index.html","3c36825691130b197f67795fc93a0d7c"],["/tags/维基/index.html","072aac46b4df5f7f3c36ae752b453c3f"],["/tags/网易云/index.html","9ad51149542f93480dbe8e34b32a488f"],["/tags/网盘/index.html","be8593856cbfee38038b7ca1f897d85c"],["/tags/网站/index.html","8584b244961754dc540a916bdbfa8fd6"],["/tags/网络/index.html","f8c022aa64e7357e555e67483bb59cc5"],["/tags/美化/index.html","c2f15a15fd9061a703704fe7f6312dcd"],["/tags/翻墙/index.html","3a0717158e5c578177bdd38797dad365"],["/tags/翻译/index.html","a5467bb52ea410c386daed28503fa7be"],["/tags/翻译器/index.html","28eae9a6162d349ae64a7331e9c558af"],["/tags/聊天/index.html","e6e9c3005aeedff5716fc1e04251716d"],["/tags/聊天室/index.html","7238e89763a4fb65a41fa360089eac24"],["/tags/联想/index.html","0cec0d677e3e2ad22252bcaa912bbead"],["/tags/节点/index.html","0cf55a046dde13cd184c3459d8ec73fe"],["/tags/虚拟手机号/index.html","81a89290a71274128dbfcc3a08ec6cda"],["/tags/补丁/index.html","fe9aac91e65a1a01b3bcef793d94a8a9"],["/tags/表情包/index.html","d8f982af553c06ba2a04197eb9fa3d39"],["/tags/视频/index.html","389cbbf3bd3f13a67f063b0445886cd6"],["/tags/解析/index.html","4c24f4611b43753eaced797dd455c7a4"],["/tags/订阅链接/index.html","45d42a2961955ac10b2df2fbc2490f53"],["/tags/记录/index.html","1476461b204ab1232aa2c52770d43194"],["/tags/识图/index.html","55a66ba971dce4b56d6ad94b01f839c0"],["/tags/语言/index.html","08d14a8e729f2ec84d6ff7ce5a45d44a"],["/tags/资源/index.html","19cf719a39b21b5a5a70b7fec4bac252"],["/tags/资源管理器/index.html","5938cd20f69a2674fd488cbabc1323db"],["/tags/转移/index.html","5ac029da9fd8008fa05959d7691d58b8"],["/tags/软件/index.html","0de00843e26fb4017d0974e479896cde"],["/tags/轰炸/index.html","b622b3aed577c6d1eeb38263e0ae398c"],["/tags/迁移/index.html","db092a404eb788c8f80718a4f6a25c80"],["/tags/远程控制/index.html","e4f562abc7cc6ef7466db2ba6091bc07"],["/tags/连接/index.html","85492afbab7b4fc0213fae67ec11c660"],["/tags/追踪/index.html","5bb003e20541488bd235176f7f78f446"],["/tags/速度/index.html","13b3ad20ce5ef1f121d5ef3a148acadd"],["/tags/邮箱/index.html","bda5ee1851168498984505df524103c3"],["/tags/酷炫/index.html","1b32bb371477143b948602b7d54264d5"],["/tags/钓鱼/index.html","3306c60acdf5c6cce22e3d210179baa4"],["/tags/镜像/index.html","a53999b36e2babb24b2f5ea3fa4e3ad3"],["/tags/随机/index.html","41246831423292e34c64f9bdbb51c3b5"],["/tags/隐藏/index.html","7761d6662fc45e838c76b6c07a9e0414"],["/tags/面板/index.html","a4f1b86340ea4977e1f821bbf47cbcf7"],["/tags/音乐/index.html","ce6cc9fb4833c4df8ed95a1256999d46"],["/tags/高颜值/index.html","4cdeefbcd0131564c5f3b249adb3e3ff"],["/tags/魔改/index.html","48f534b11bf7037b5b76fcddb45831fd"],["/tags/黑名单/index.html","3d231d09228114c2b29b9daf84040f19"],["/urls/index.html","bafedd579d097b0991b4b9c55d27dcfb"],["/vps/index.html","6c8e8f59a6865374d1b71c0dc62bd837"],["/支持/index.html","e7a99ebb98ce08a1e04d97edd90a8ab5"]];
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
