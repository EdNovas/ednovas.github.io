/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","06c11b90ba0ccb4c60e0408351910ac6"],["/2020/11/29/clash-windows/index.html","03d6a0044e2aae1c682dd44baf96ac29"],["/2020/11/30/websites2/index.html","1c6eb46a9c895260afa1c7c6f56849c6"],["/2020/12/04/iphone4s/index.html","3c52e4e3d638500b389af67f0eccdb92"],["/2020/12/04/onenote/index.html","dc026a74b9c5e5881b2951e61dabe426"],["/2020/12/04/wesites1/index.html","37697f1c864b2df8b1058069786a3a74"],["/2020/12/06/nokia808/index.html","a24a838d33b6207169635e4c90d79544"],["/2020/12/07/ipad1/index.html","5bd1d868a38529496d3fef56a351ce5b"],["/2020/12/18/freesubscribes/index.html","aaf936bd3cfb3d7e56af71c71f0530a0"],["/2020/12/19/musics/index.html","0319212da270f28decb0395b69c18a47"],["/2020/12/19/shadowrocket/index.html","0ee17d3fb15f684c68f175796db237df"],["/2020/12/19/v2ray-windows/index.html","93621f01b0cf06376f0721eca31f742e"],["/2020/12/19/v2rayng/index.html","5ca96eaf435561dab65d343b84e87b62"],["/2020/12/20/beoplay/index.html","de06e41cea0b55e3b3d51778b407fa7d"],["/2020/12/20/订阅链接转换/index.html","f845140943e4e5fe96c3fd7589718614"],["/2020/12/21/chrome浏览器下载提速/index.html","41a894196d8f9a2c33b9ddec8f4a503f"],["/2020/12/21/免费128线程并发下载xdown/index.html","4dd7a29b9ca17e9f2f2bb09dfb8e2f9f"],["/2020/12/21/免费32线程下载软件ndm/index.html","c1b13744740eaf49c9f57be7df589e47"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","ea5d6c5c557425531163f8debf55a58e"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","771e7019814116db86f30817d765fbcc"],["/2020/12/21/广告怎么知道我在想什么/index.html","75b3238bad7d1b03a65365ee80ac9343"],["/2020/12/21/无名·引子（小说试写）/index.html","68eb2cf34b05a0daac701a4ca25c055a"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","67036d6e34ec5a58bf6e619383802da3"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","544f24602160899384ea7583199c11b7"],["/2020/12/21/高速轻量下载器aria2/index.html","e7e8d8cf6fbe9c00c9bb19c14a716361"],["/2020/12/22/2020-cee-roo/index.html","dcf5a12380508ffe57e526277f97eeda"],["/2020/12/22/firefox插件、github、steam富强/index.html","137cd6bc71e77f94a9a8cfd3bd1209d1"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","d5805a1df34b3ccf67d6570697d1ded3"],["/2020/12/26/python-day-1/index.html","6f6c1ad6157c6b72fc89a28e1087340f"],["/2020/12/26/python-day-2/index.html","c78dc0137c95e6c961f68d61019e535d"],["/2020/12/26/度盘不限速下载方式一赏/index.html","e92c1cfe4a215acb0509582573853f28"],["/2020/12/26/添加开机自启软件/index.html","3126451067911e640fdb62977aa13e4c"],["/2020/12/26/电脑端截图方式一赏/index.html","fb0a92d9497dca1c96ed402db3600f19"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","842c6d73651c67bfe2d2039c47148c06"],["/2020/12/27/最安全的浏览器tor/index.html","6a26aa2da3de0dffe05ce5497b35e1ac"],["/2020/12/27/网易云刷等级和听歌数量/index.html","728294fcafbdf2fd0dbf929c336e1f08"],["/2020/12/28/freenom申请免费域名/index.html","bd18d466c772cc14767bb835c431df3a"],["/2020/12/31/机场/index.html","fdf643f29fdd1f2e6e82f8254bb2cb20"],["/2021/01/01/M1/index.html","9c86f6af7d3fa46f699a44531a702974"],["/2021/01/01/compress/index.html","de06304c515f8783e8a63daca949bdfc"],["/2021/01/01/infinityfree/index.html","16edd911f9fe47bb80a89785409e4d71"],["/2021/01/01/硬核翻墙/index.html","d786080ae7f0f9b9efb3f5abf51b9b4c"],["/2021/01/02/qq/index.html","4d03c3b75ed9bc1147783f3a9b09ff96"],["/2021/01/03/netch/index.html","c781f235f31348221e40624c24083682"],["/2021/01/03/waifu2x/index.html","dd0bd2eb72ddf33953a2108a77a78546"],["/2021/01/04/ads/index.html","7f52cf4a497e7eb7f63ae185069ce949"],["/2021/01/04/games/index.html","8e4918151b76710b1513a60964452f76"],["/2021/01/04/heroku/index.html","e04f8c95a7da7fb0f0190881fec20211"],["/2021/01/06/movies/index.html","dc3867d19c9e8608db2fed9dc3a094d7"],["/2021/01/07/google2020/index.html","4128b0eecae232a149e157c2a2df72e6"],["/2021/01/07/lucky/index.html","40578b8a218f22392ef31fa2dd8b3520"],["/2021/01/07/spotify/index.html","037ff3b5f978db7e156b9dc172d7e374"],["/2021/01/07/thunder/index.html","e9d131b4d40e6a7096ec5f8e179937d6"],["/2021/01/08/adguardhome/index.html","5d985f0fdc19350381e55eef698a45e3"],["/2021/01/10/IBM/index.html","be343c78415cf0a4505e5126f9057fef"],["/2021/01/10/potplayer/index.html","78b74f00164bd75c5738bd3b8428d783"],["/2021/01/10/sakuraanime/index.html","cba795f7db1a332b93c0da97a8165572"],["/2021/01/10/美剧星球/index.html","1868b9f40acd98dff6816fff679d838f"],["/2021/01/12/telegraph/index.html","d31df330c9c7a3caadd7b5d1c274f860"],["/2021/01/14/comics/index.html","4cc7b6b334147781f1f38e2e38c286ad"],["/2021/01/14/ftp/index.html","d0d7f8e988e7b79e6eaa2d0e45e3f879"],["/2021/01/14/oraclecloud/index.html","b301d2725858570ac06169cc579ea4e9"],["/2021/01/14/porkbun/index.html","c5f437dbd91a482d787293536ed122f4"],["/2021/01/14/powertoys/index.html","a065724986b1f89ea244abcbc0356079"],["/2021/01/14/taptap/index.html","8aea62d080319e6e0f6b4d85adce8eea"],["/2021/01/14/ubuntuvsftp/index.html","8d5fef04e3c35e5c4e0134682f0e7a3e"],["/2021/01/14/小说/index.html","895252131c54d3c524fadab3cb4eee91"],["/2021/01/15/freeproxies/index.html","d5da42fb8253f9dcf876d4dbc16333bb"],["/2021/01/15/incaseformat/index.html","05157a7fc89e4a4d46c24cacaaedf866"],["/2021/01/16/euserv/index.html","99528abb3d76a77a3add53531a340ccb"],["/2021/01/16/winxray/index.html","2ec00d47275fea0615307e51b0757c10"],["/2021/01/18/qqreadhistory/index.html","5e7926ef3fb7d2798c57b296274c25e5"],["/2021/01/18/qqrevoke/index.html","89478673ff9002d0f6899d2b6a8932e6"],["/2021/01/19/freevpn/index.html","cb0418f36a2ede5ac61696207621fcc8"],["/2021/01/20/browsertrack/index.html","90ad712f076b51a4070300ba5fbc70a8"],["/2021/01/20/v2ui/index.html","44b8c67af843cfde62aec8cb615191ff"],["/2021/01/21/failedtoconnect/index.html","fddc75736592cc2a0a8b870ab60f2a1e"],["/2021/01/21/gitcalendar/index.html","8914b4438ae3e599ee0651cf629d6ef4"],["/2021/01/21/markdownformat/index.html","aa0285f1126824f91f38477fcd16fc10"],["/2021/01/21/markdowntable/index.html","d08d9cbec8abb84432686cc03660fe78"],["/2021/01/21/vercel/index.html","219b995df148cfd577549cf889dc06cb"],["/2021/01/22/hardware/index.html","79ebfac7c0bf4337c2a3a4c6156e24a3"],["/2021/01/22/muviz/index.html","be618ef6f67d805e353780d8132f9b1c"],["/2021/01/22/randomapi/index.html","ee8cde4c972e99577df9777884714752"],["/2021/01/22/searchimages/index.html","66c2befd91264d48b8957513944e1306"],["/2021/01/23/RX文件管理器/index.html","61ae8cc4efb81e92f27cfbfd7decb425"],["/2021/01/23/chromeflag/index.html","ac28287140769913a7f9d3b7b5c57a2a"],["/2021/01/23/qttabbar/index.html","2c16fa1804e7999d707addf56bebf4c4"],["/2021/01/24/githubspeedup/index.html","ccf73fc9e3af3d4f333a4b1b1fff0da2"],["/2021/01/24/jsdelivr/index.html","168d3da9721ab09835c68614ddc57a97"],["/2021/01/25/note/index.html","0379e1bbdfcb51567431722fd7c71ea6"],["/2021/01/25/soul/index.html","c79788dc95b91c23dade6d2cb85b0880"],["/2021/01/26/herokuxray/index.html","e552039abec1cd878728d257861521a2"],["/2021/01/27/proxypool/index.html","def02cb9f266b1d8b35b9e6fa3c858cd"],["/2021/01/27/tracker/index.html","d6f2b094f399d5974342ec80eaf2b084"],["/2021/01/30/pandownphp/index.html","8de7251df75dc0a27778464c104150eb"],["/2021/01/31/newgroup/index.html","990fe178d200cf9b6f4db1517a25206d"],["/2021/02/01/clashlanguage/index.html","cb3be2ba9106a3a34c2eb4b557a24fce"],["/2021/02/01/encrypt/index.html","996d669299a14fbab209b287758a6722"],["/2021/02/01/footermotion/index.html","31528425a2ae2c9c64abcc0f9053cb0e"],["/2021/02/01/gitter/index.html","4c47fac97231d1c04631c2bda6e697f7"],["/2021/02/01/pixivtop50/index.html","23efa5c711ef077c0f94cf5a3977f1b8"],["/2021/02/01/scrollbar/index.html","5582915c55a327e0703e470e07d45d45"],["/2021/02/02/clover/index.html","f8268d7eb23147581743b39a13c582ed"],["/2021/02/02/maya/index.html","e68f0c3d09d6bd89c101b13eee571acb"],["/2021/02/02/speedcontroller/index.html","83f632e29912e60de2113b0c5ec5c3de"],["/2021/02/02/yesmusicplayer/index.html","65b64ff4104f57c1b50bc4bf4b2aff9b"],["/2021/02/03/lenovoonelite/index.html","9fb767eb8a36856543ec2f0386eaf9e5"],["/2021/02/03/skipads/index.html","87cd982f577474bee64543da3abd811f"],["/2021/02/04/picseed/index.html","1021344f13c526c8bf26edf918df93e0"],["/2021/02/04/renren/index.html","45b3c45eba32407aa9b7cb8bd633530e"],["/2021/02/04/serverstress/index.html","fb69814598b94511565dd7d5d6c024f2"],["/2021/02/04/wikipediazh/index.html","e6c3ea93ed2c0e1bee34e78faa449810"],["/2021/02/05/googlevoice/index.html","9592f0f031c6ac8ab1cf0d3b3f157753"],["/2021/02/06/clashconnection/index.html","dfcd86bc16b91184c3e9dde694e23cb9"],["/2021/02/06/gvtransfer/index.html","9f490cd5b0048339566d5d9f44e6064a"],["/2021/02/06/todesk/index.html","c696c9f0842fc12f622669c1c6e3f010"],["/2021/02/06/vpnblacklist/index.html","66645a5dbf567377e853de09599cdf52"],["/2021/02/07/mklink/index.html","5932c243261917a5a57bfc914f054aea"],["/2021/02/07/speedtest/index.html","5942dfaed44ba94266ac59411cba04de"],["/2021/02/07/translate/index.html","fa35974bc9715c7565cc8dd4ea2b815c"],["/2021/02/08/ewomail/index.html","bbaea09171c4bedf78e96fd19860a1e9"],["/2021/02/10/officee5/index.html","51f850bd47ded0b78e9f86aa4e72ad35"],["/2021/02/10/raidrive/index.html","cc5b933504e53cb16e7c0aa433adf68b"],["/2021/02/13/e5sub/index.html","87e4894fc24a97ab2763f5cd913f3ddd"],["/2021/02/14/screen/index.html","a5eeec3e5afe91e6e5332b3977da6b7a"],["/2021/02/15/clashtun/index.html","8a060c1360028180af491b08d4124364"],["/2021/02/15/messageboom/index.html","02f91abcd6af773ffbe62de0ed7a6af6"],["/2021/02/15/oneindex/index.html","b52809ebd1150bae733b3f50cf145128"],["/2021/02/16/govsites/index.html","1e2ab4645ea094360fd47a38c4109475"],["/2021/02/17/hexototypecho/index.html","9da8c21ff234370ccb2d05293ef67cf7"],["/2021/02/19/fiddler/index.html","eca68aabeef240d4735f4dccdd98ab08"],["/2021/02/22/potplayerset/index.html","b6f757a4db7012214b1a7047531bd71e"],["/2021/02/22/studyresource/index.html","6ce12bbf9d7bd12e675e2e0310fbad70"],["/2021/02/22/telegram/index.html","b66aa8d77d775f8102956cec97bc7d9c"],["/2021/02/22/videos/index.html","707fc92c8f3100211b187e71c07e8a21"],["/2021/02/24/mtproxy/index.html","cda0d7c09f04501435d5a7faa4faa085"],["/2021/03/10/catchcat/index.html","7729fdfd3d22a967fd91cc7de07b87ee"],["/2021/03/10/neteasemusic/index.html","b2371414b6f16c77ec12ae86bc43a3db"],["/2021/03/10/surfboard/index.html","e7ed23e5ed9bf6489c96c7e9d950d8ae"],["/2021/03/11/vpnandjc/index.html","f3656c37a401d129d85b7f69b1951cea"],["/2021/03/12/qrcodes/index.html","a52bf71fcfd37294134c6681d892cd12"],["/2021/03/20/qv2ray/index.html","2b0ecfeb9dd3854701ff4f45d53ac58c"],["/2021/03/22/freevps/index.html","ebc7280657256b0caa57e6c2e58a3cde"],["/2021/03/24/tgstickers/index.html","a1064b32ed1f42fb1767da77e1ae0766"],["/2021/03/25/clashx/index.html","07626a934fa06d355c848052eb78935b"],["/2021/03/26/bingwallpaper/index.html","584029358c86807cfa8a61578c94134a"],["/2021/04/03/soutu/index.html","ecbb0571dcfa4fb3ab025ecdd8577e93"],["/2021/04/03/tiyunti/index.html","841d10f1a5b0d13c2328b5c8c188d208"],["/404.html","da2f367e47e87053f416d860e8b8cc1d"],["/archives/2020/11/index.html","d38060d232129ca286a32dca866b868d"],["/archives/2020/12/index.html","97ea9ae5bda9f6fd01441ec6d1bd766d"],["/archives/2020/12/page/2/index.html","38b23100176854e36c2a84fe19bbe71c"],["/archives/2020/12/page/3/index.html","a1a8fb612883a9ab9378a109f5e4fac4"],["/archives/2020/index.html","827a3fe9aa761e04634abe33ce524dc9"],["/archives/2020/page/2/index.html","20bed1bde7ead19128203070e41a086a"],["/archives/2020/page/3/index.html","c522a8c158193dc44360e62b5e2a4ad9"],["/archives/2021/01/index.html","6ad743c28ea6fa3c24f67e63691a3069"],["/archives/2021/01/page/2/index.html","0b6009f057cd6489dfa347c55b509f9a"],["/archives/2021/01/page/3/index.html","a57ad1bc0714349ace4aa7aae10aac7a"],["/archives/2021/01/page/4/index.html","ae0f48674c6a14f54fa217e85e9ce8a6"],["/archives/2021/02/index.html","231fb8609c109ba4bff9a9be38d569e2"],["/archives/2021/02/page/2/index.html","33c6354bc0bb9f1f9f61a9f81ceace9f"],["/archives/2021/02/page/3/index.html","27be88b7f53e5e0650ab081e68643bfd"],["/archives/2021/03/index.html","7a98f9f944b62d500661db38eab3e495"],["/archives/2021/04/index.html","c64037fdf603ad7b8e4a624b98d0d21e"],["/archives/2021/index.html","4a9dda39d81ed616e5008fb5c39259a8"],["/archives/2021/page/2/index.html","ec96e448d023dcc92346d28a8d33b4fd"],["/archives/2021/page/3/index.html","c693f5f7a46f8387a58a43e5b6fe60e2"],["/archives/2021/page/4/index.html","b8f4f54b60bcae73d7818fa23b7d373f"],["/archives/2021/page/5/index.html","f63484446e0c87ca94029bbaf6463988"],["/archives/2021/page/6/index.html","fa888b1496871f424830eed9711aa0ca"],["/archives/2021/page/7/index.html","5560ffd504fb051d3e437556af954906"],["/archives/2021/page/8/index.html","5805799825dc2067e311ca896052f75f"],["/archives/index.html","28fdb4fce57fae6b22fc8da07666c38a"],["/archives/page/10/index.html","a7027287c08729970905157785e8e258"],["/archives/page/2/index.html","1ad72fdb79b75fa291a23077c7719753"],["/archives/page/3/index.html","34c9e1196b29a58c2ccddefd3585f453"],["/archives/page/4/index.html","0a77849999bc60b659d5a2c29c9bef82"],["/archives/page/5/index.html","1d1805836a90b660c35e4927afcd8acd"],["/archives/page/6/index.html","7f5033771abebb08fef71d3a82dfcd30"],["/archives/page/7/index.html","f93abc96546c5f55d026d257d703b680"],["/archives/page/8/index.html","2b291af9fd2dc75db516910154e8afcc"],["/archives/page/9/index.html","f5be2450acaa221d1b0ba25a35847d89"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","6f48c7594efdff3a7b21d7f5dc8c5e53"],["/categories/index.html","1c13ad416a640037a0fe181111d6e3e3"],["/categories/下载/index.html","f53508c1f999eec88e4b92230897253d"],["/categories/安全/index.html","b376d55b619ef612f660ad494b386142"],["/categories/建站/index.html","f0fe90473355bbee629c9dcfce01d476"],["/categories/机场测评/index.html","6a82b1fed7f4e4da292ffb2ce461e437"],["/categories/杂/index.html","1548699a90ab0fd198d1fc0bbfcb6adc"],["/categories/杂/page/2/index.html","78047aeeb41da5ff4146e79a0d81f6c1"],["/categories/测评/index.html","ba70d30dcbd13310d19ab80d73922ef8"],["/categories/科学上网/index.html","1647ab9bdcc1ea3b334d11fe67d6fa61"],["/categories/科学上网/page/2/index.html","4179f0def4c2784fbf0e60034adfc913"],["/categories/编程/index.html","8e5afe16d475c37f2e872520a495864a"],["/categories/网站/index.html","71251738d7600a83016951a21be74b84"],["/categories/网站/page/2/index.html","6ab9c31b4133083f43d00ddb68d9f3f2"],["/categories/软件/index.html","0a145bb62eec3e94d261f03fcfb55882"],["/categories/软件/page/2/index.html","976a7682e97a51eb29154c231d98a1fd"],["/categories/软件/page/3/index.html","6c67b93bc7459dfc29a0681c8d7832b6"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","c32df463d8523153ca60fef44eada1ef"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","39f8e9d2a035e91a62714e1ddd11fa50"],["/ios/index.html","8c556e039589985035226bc50e64a175"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","c1b205eaa1a7c45df352a400a95b9053"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","83d59b3376727fb86058206678a1392c"],["/page/2/index.html","d51c36f27c7798616278f92bc4b9a272"],["/page/3/index.html","ec4b8369092f6fba6e6d7304040789ff"],["/page/4/index.html","2fb7f5118dc02ba90751d2de24fe87bc"],["/page/5/index.html","f82dceb9c7ed61fda9d4d6aacc7370ea"],["/page/6/index.html","8cd66d951a9858a08bc154a52a65d5e6"],["/page/7/index.html","fed9a3675c06d9f10298c8831e55a064"],["/page/8/index.html","67cab4dd304b38e54147847180120521"],["/page/9/index.html","d5f3d231c595c1f13b9a94a70ef646d6"],["/payment/index.html","5be3976074ce1dd385707ce5dd5e7ef4"],["/privacy-policy/index.html","8a6b294bf01e16c6cdf21c071578e5b6"],["/rss2.xml","ef52106490cb6f5b3c6bb7d712d1842e"],["/search.xml","e1c6af99186d1395e347526eecd5da42"],["/sitemap.xml","549e532e08ce8200268fbf31fe0caee8"],["/sw-register.js","c0796aaee97253b69d72c66be7eb4afa"],["/tags/5t/index.html","1e9bfc7130526f1433762f3f8aa9db1f"],["/tags/Bing/index.html","0d46e544d3f515c0cdf24b35d7e42612"],["/tags/Clash/index.html","b9a87a11bb611ed1d984afe62aaaf31c"],["/tags/Clover/index.html","f9434ac67ee9ba2f087cbea1a3279c33"],["/tags/E5/index.html","908968636616b511ac6bdffa9ce3ad5c"],["/tags/FTP/index.html","90583f3f5d8bb33595e1a689b679f243"],["/tags/GitHub/index.html","da9383b6603818566146dcb49831148f"],["/tags/Heroku/index.html","129babb32373d54218b37cf4127feb8f"],["/tags/Hexo/index.html","5bc81cbe406db45cfc0cdb741ab1e5d2"],["/tags/Lenovo/index.html","fca72f9f8874c3ca90e728bb3a5cba42"],["/tags/Oneindex/index.html","b1e52303fc4f79198a0ab80ea4b27580"],["/tags/QQ/index.html","2a33562a6b38f80b09ad872baab37872"],["/tags/QTTabbar/index.html","b3ad518ed3723fdf9fc600facc084abc"],["/tags/RX文件管理器/index.html","63f852131322dd605962cc2711a5b635"],["/tags/Todesk/index.html","401aae057e78da5836fc6d03eef7dfc9"],["/tags/Vercel/index.html","46d5e91d6f3f5a78f2407004b637315b"],["/tags/ads/index.html","abf9551331eb86fddacf6ad2ade1bcf1"],["/tags/api/index.html","6b5aa9a653f84ba8520c86d2a998f50a"],["/tags/app/index.html","873f4c34d8ff0491fed680a956e47975"],["/tags/blacklist/index.html","d172c7e487ae9cc58d2c6f0538713953"],["/tags/butterfly/index.html","62d9c432a0ea3e3b8a12fcba38c6feaa"],["/tags/chrome/index.html","0cdab4d0f74e88ae913e22780e5736fd"],["/tags/clashx/index.html","4bfe23ed7631b4d3d4baa37d668ed650"],["/tags/cloudflare/index.html","7c36f70438c93875626ca30d26a47bdc"],["/tags/cmd/index.html","3574dd700d5c82548238549bdcfedec9"],["/tags/c盘/index.html","82d74d4c4524980224806ba8d5b7d01e"],["/tags/email/index.html","0d742352f43ee48dd603e8e44c25855a"],["/tags/ewomail/index.html","a1296fcbfeb83a5b0058d8163a935f06"],["/tags/fiddler/index.html","bfcd380f12dc7c14747136f9fc257d68"],["/tags/flags/index.html","4254ad9b3333adff55592c577a2e35e1"],["/tags/footer，页脚/index.html","917ea6976748bbcff51cebcd0514f35a"],["/tags/galgame/index.html","49263765a765a788e9da67c65cfea260"],["/tags/git/index.html","765d767a12d4deae105ce17aeed08be0"],["/tags/gitcalendar/index.html","977bf1d5a12ba692bfe51b984442fc25"],["/tags/google-voice/index.html","50906e65b46364575ea4c7ce0597a9ab"],["/tags/gv/index.html","067d3eb75c5d8ce02e1cb59463bd5e2b"],["/tags/html/index.html","499efcf2c9e88e90bea24ab6eb25e36b"],["/tags/index-1.html","5a40e6658e75b7a26a3fc9b54bf007e7"],["/tags/index.html","9334d2822361bd3f574a84ad5bd68b6a"],["/tags/js/index.html","c495f8d30798e86f38fadf76cef10ea9"],["/tags/jsdelivr/index.html","486aa370366e183b9427e7a45d23edca"],["/tags/linux/index.html","2f604523a0318fbd7a96af4b9c4a0701"],["/tags/macos/index.html","645fb88c81d309ff5b4ef5dde3ac7ab6"],["/tags/madVR/index.html","a4f6f882a1f80b563caaf767b212d5d9"],["/tags/markdown/index.html","333862fa923383926d4f7fd4c95360d7"],["/tags/maya/index.html","51b24dfa61830ed2262c5f8be3b7eda2"],["/tags/mklink/index.html","c1ad1773b6ad3b04b337e5ced42f2de6"],["/tags/office-e5/index.html","70793f100e916868d54baf3fe6631740"],["/tags/onedrive/index.html","8e3c345f1d2cbc7e2f825870676bfedb"],["/tags/picGO/index.html","632c73f668e5a787400ed0c4e88e7565"],["/tags/pixiv/index.html","dfe69430a91ddccf7ddb79eb85fcaafe"],["/tags/potplayer/index.html","a9859bdc19a6a87fe664fd521318001a"],["/tags/proxypool/index.html","715bb0e496088acc0bb68aab5b205a2e"],["/tags/qbitorrent/index.html","3777dbb3abaf94d7f759321e8930c25a"],["/tags/raidrive/index.html","dd51e15473547a1548f7ea2fd724a6df"],["/tags/screen/index.html","ea532f6078b8fac3e613fd08063e05e6"],["/tags/speedtest/index.html","1ddb28ac6f9deac1cc74a12d708b9a5c"],["/tags/ss/index.html","0c653b93a9f78489cd938a9b6d53ee3a"],["/tags/ssr/index.html","aaa51e643f66b071aa4427add1c536b7"],["/tags/stickers/index.html","e12da300217b2814fad60cd7c17ce960"],["/tags/surfboard/index.html","8ca6c63f9b2d15f2d9ed69bf195b2ce2"],["/tags/tap/index.html","6c4df58a62911841ec8ac516f71267d9"],["/tags/telegram/index.html","3e8f2e2da260a974fb09495b8a23efdb"],["/tags/telegram代理/index.html","193de200f6de9bb78beb7a406af1bda0"],["/tags/tg/index.html","bba58f4dc460c49b7a658312a25c8b8b"],["/tags/tg代理/index.html","ca2d825bfd48d7e6a173d3e870465b30"],["/tags/top50/index.html","8e82d1e7643c2f7ee275993b2b961ce5"],["/tags/tracker/index.html","eee56e4dfc4ea7c41a893d46658aac67"],["/tags/translate/index.html","f974afbefd060da77feaee1186b1be69"],["/tags/translater/index.html","2b08ec52c2291c9b2ab46bea3da9c214"],["/tags/tun/index.html","403777b2ff000ed05ba0f2ba8ce49226"],["/tags/typecho/index.html","44e994a5e86060759336d92c481f97fd"],["/tags/v2ray/index.html","2c7fef6bec6803560ca676624260c5f7"],["/tags/vpn/index.html","76ec8a533e93a0dd2e0774400153b577"],["/tags/vps/index.html","1ca9952fe2051303af59d2667ffc6e7c"],["/tags/wallpaper/index.html","e377dbc5ac2d8e978ba0b75d88de2f63"],["/tags/windows/index.html","665989cfa78d43f855c0bcf6d8f4ca54"],["/tags/windows端/index.html","b63542cb8ea0f35947d313356e67e825"],["/tags/xray/index.html","ab08f8b33ef2859c97ed844c7e963bf9"],["/tags/yandex/index.html","680335f9838599d2c7317dd1ed3de202"],["/tags/下载/index.html","ef51d2c345926990a2660f616b2437cc"],["/tags/不限速/index.html","aed83016028b6fdf4007a542a875bdb8"],["/tags/个人网盘/index.html","553a06c316443af278e51cc7f43d3360"],["/tags/主题/index.html","a3512f233f6983cdf87329b0bd6b866f"],["/tags/二维码/index.html","6690ffe67bc672d66c43f010c916a066"],["/tags/云便签/index.html","67aa09011fb01f1261d91ccdd4bcf1b9"],["/tags/云盘/index.html","643a35977e43f21cc86b03a47f4b459b"],["/tags/人人/index.html","ac334f3db1035f6d1070b72b2e722fce"],["/tags/代理/index.html","fac95728f87451b1429d9ebfe4354977"],["/tags/代码/index.html","8cfc63a72198c32d4c214a6c988b3145"],["/tags/优选IP/index.html","55d3fca8b9cf7ac6a93c6e3bff7b9f83"],["/tags/便签/index.html","026ebc387bb70f6dcbfb464593e76cce"],["/tags/保号/index.html","a137e7160e627f309188d0584d57a697"],["/tags/免费/index.html","f4af97a6eeb386658e468e8af9a6a7f6"],["/tags/免费节点/index.html","31677d4faf5ee595df640266d18ed985"],["/tags/冷门节点/index.html","074c19585e928139a571b6877bba466a"],["/tags/加密/index.html","e39ae6223adf51ee9eebd1fe59a01bd0"],["/tags/动画/index.html","7825c23b884c9ef5bd05372c7e234ba7"],["/tags/博客/index.html","f01a4720e19e695ea6ce31e9613af168"],["/tags/历史记录/index.html","f4bb39255ddf14533f5d95b0739a1f4b"],["/tags/压力/index.html","8c615122c88e283f6ca12cf9257819f1"],["/tags/压缩包/index.html","df63dc1977fc90259c6d4ed404975fbb"],["/tags/反代/index.html","a2873a3b471aa746d465eb23d76234ae"],["/tags/可视化/index.html","2c23726fc0f27f1ebbc9212f5d3df95b"],["/tags/命令/index.html","3aad23a787296843cf9f47e068aba590"],["/tags/国家/index.html","22b9b769a0cadb3a0ed03c70802602b2"],["/tags/图床/index.html","f6789a62539f48dcf1d71add291899ab"],["/tags/图片/index.html","9973a35a380301560b738eea37816b55"],["/tags/域名/index.html","59428f5b7d9097c2945b7c9c357af84f"],["/tags/壁纸/index.html","f4eeca51c2937b6dec14fd0587340694"],["/tags/多标签/index.html","3b7d705aff15e5e9d4a1117c11fe2957"],["/tags/奈飞/index.html","f9e6a65e9ca1f6be3279018f532ffc8e"],["/tags/存储/index.html","36b2226c8b4a86dbeab8690ffdff6960"],["/tags/学习/index.html","0ef7724187fb2c98b0ec3ff54d00e510"],["/tags/安全/index.html","51ac271619c85195e07d7d2511ea1119"],["/tags/安卓/index.html","e92f0520e656b559d4d80a9feea21c7c"],["/tags/宝塔/index.html","38163e3dd056ba7686f75b16be4022cd"],["/tags/小游戏/index.html","255e2773bd3cf3a9288b5d41657ae285"],["/tags/广告/index.html","e443193944f65e0734707f0d47360676"],["/tags/建站/index.html","8dedc189969b667986fb3bec560055a1"],["/tags/影视/index.html","06408225e8b2376497e364be15a83164"],["/tags/微信/index.html","6155e3164e4c8f37cc5d976ad2a60d4b"],["/tags/快速启动/index.html","098aadffbbda6d6ac838594fc96daac2"],["/tags/手机/index.html","b0addfe77852a7c630545cb2e66eae36"],["/tags/托管/index.html","5a4151db41db5532cb3e67497b16c6d7"],["/tags/抓包/index.html","a5f8b9847788a98f5535922e32dfd107"],["/tags/抓取/index.html","8bbb253c495506f4a287b926158789b1"],["/tags/投屏/index.html","a9c3cfafac325447148d2dce083f45e3"],["/tags/拓展功能/index.html","a69a8873a277216801bb775695b6e95c"],["/tags/挂载/index.html","711d160875cfc99a71af499591f6a4d6"],["/tags/指纹/index.html","2d6b855175799247015860b08dfde3d2"],["/tags/接口/index.html","e621c5720806b43444991626a4b30452"],["/tags/提取图片/index.html","d359e5d02f2d09befcde38b49b47386a"],["/tags/插件/index.html","8a482ea5c5d5f2a34dcae6698a281a99"],["/tags/搜图/index.html","33d988dee266e842313e92d56304447f"],["/tags/搭建/index.html","ff0bcab10f0fbef013f11dad8d2d0b24"],["/tags/撤回/index.html","c4d5e40daf97012f33eaa2ba65c518cd"],["/tags/播放器/index.html","ab8ec38aa107a2f2c08b880587c6f723"],["/tags/支付宝/index.html","1cfd75a31814b35942edeacbfe81fa5c"],["/tags/政府网站/index.html","3ea3489405d6a508db3c7c557ba859d9"],["/tags/效率/index.html","8f160385adaf15c38aa42c578832708d"],["/tags/日历/index.html","2dbe66a8963a7da1d594b11584ca1f8b"],["/tags/服务器/index.html","d5233b71ee46f942377e18dc98313f42"],["/tags/机场/index.html","2ca916393327f6a08f84253bccf9f027"],["/tags/桌面/index.html","13a88ffe4c91fad80c0ce449ef1c04ef"],["/tags/梯子/index.html","433c9d6434f765dcbd79d27ccf0e37ed"],["/tags/检测工具/index.html","0508462bbfa7c14d1f96a8ab740151e6"],["/tags/汉化/index.html","771f1b854a3d299fa2572c7f25ed357b"],["/tags/测压/index.html","92647262ce2aeb0f7098b4664841ca69"],["/tags/测速/index.html","1e5bde930506b0b7bb698924edb8d548"],["/tags/浏览器/index.html","6697a97e350a4c5dd19bd08b352e1f01"],["/tags/清理/index.html","f8006062646e826f3d71ca76f6d67a39"],["/tags/滚动条/index.html","ad15769f3ad291d96f09357216444715"],["/tags/灰色歌曲/index.html","c588da3fda7faea0e0347f886d7b5f09"],["/tags/电影/index.html","5b1ceb4005d1e24fc0c911d9356adf12"],["/tags/电视剧/index.html","8122b6581f3e7d878bdf4a47e6234b6e"],["/tags/白嫖/index.html","9598da191d7d5d93dfa1fa701d36b297"],["/tags/百度/index.html","1002fd5a949777ef7236f372aff9cb8e"],["/tags/百度云盘/index.html","9fd3617c1a1385218d3cace381a4dc49"],["/tags/百科/index.html","adb59f6c9610d696b2374fbd9dea236d"],["/tags/短信/index.html","a3b2e224c0e74641cd96f26596d55d86"],["/tags/硬件/index.html","4723fe4044e1a1b8158f091dd983d242"],["/tags/科学上网/index.html","ea66960f346496551893295d22640cbd"],["/tags/空间/index.html","02b36e3dbac81a9558e343f7b09d37cc"],["/tags/笔记/index.html","0772999a22672cf17f8bd34d9c170164"],["/tags/简洁/index.html","4c85b0248c17541edcabe13ccb23741e"],["/tags/简约/index.html","04fcf70296f889435be2887ad678cea0"],["/tags/维基/index.html","bb7902a663da7b790fd9930209ca32d8"],["/tags/网易云/index.html","71bd0a5cbbd05bf9368b384532cd47c6"],["/tags/网盘/index.html","6aaf5429530e7efa46ba1f237897aff0"],["/tags/网站/index.html","7e437ff29e866b7a856707aecec5a32e"],["/tags/网络/index.html","b20f75ee8423e23462876af2f059afaa"],["/tags/美化/index.html","7c717bb460726cfac9801da7c4859ab7"],["/tags/翻墙/index.html","c9dfebd74d509cb7f0891a52896fe5eb"],["/tags/翻译/index.html","7a9df06dbdc2fed0501c6f784b3cb93e"],["/tags/翻译器/index.html","a98d0cba9b3293be4cd885b7392025e9"],["/tags/聊天/index.html","fe04f43eda3ff3f0aefde0bda8a4d869"],["/tags/聊天室/index.html","0c397815f05890a5b44cb7ed3c32df44"],["/tags/联想/index.html","a916d82b1d0f8c67ba5cd036bc3735ba"],["/tags/节点/index.html","6dd776edc6431db992149e040faa38f8"],["/tags/虚拟手机号/index.html","554d1e1a31b2bdd2ea73a54f2c51b3d9"],["/tags/补丁/index.html","708a06a9f5833e25f4190f33c589dc65"],["/tags/表情包/index.html","b5b51879612e6969253f5293cb3403bc"],["/tags/视频/index.html","e08419e469efa8fd1ea74ed8e80d4a8e"],["/tags/解析/index.html","04418903f30453604773baf53132839b"],["/tags/订阅链接/index.html","e96fe8f42577374713ef010437fc350d"],["/tags/记录/index.html","2ba7465461f391b439fe0b29a658fd0d"],["/tags/识图/index.html","d9dc7650aa7d63cbb8add06680a4b37d"],["/tags/语言/index.html","e10d2ce1d352c1b82ecd62b4cd3dce4e"],["/tags/资源/index.html","e3c26923bb500e64e5064de80a38c35d"],["/tags/资源管理器/index.html","cde0dbdd93d60a89a89a67e8f28cd9d9"],["/tags/转移/index.html","41a3a05506639b3dc27311c63daaa8b7"],["/tags/软件/index.html","55a70e167a5170bc91fbdb52a59de299"],["/tags/轰炸/index.html","abd610396ae934e5e4b95d4dc89a823a"],["/tags/迁移/index.html","ccc5c1f261834fb4281890dc8c225e91"],["/tags/远程控制/index.html","84cb70e1412268b4acf37be95cb9850e"],["/tags/连接/index.html","dc091bdec8dc7549a9d6008c1ebe2001"],["/tags/追踪/index.html","cfb3c7d3e137e1b924bde827e78178dd"],["/tags/速度/index.html","ab1d5dcbc3eaa006e4d12ede78a93a11"],["/tags/邮箱/index.html","b615000d3d14d635cb012de70b927825"],["/tags/酷炫/index.html","f9bd3fbe4a40ed579051704c7f74efc5"],["/tags/钓鱼/index.html","13c6f5903fad60b3bf8b58c237a704a8"],["/tags/镜像/index.html","9fdbee2b62c547c0bd91bbaf1e9a90dc"],["/tags/随机/index.html","f0fd569f69348bb0bf8a7a9601a8ad4e"],["/tags/隐藏/index.html","58d1a4c44d51bd27718b7f139519acbe"],["/tags/面板/index.html","985aba50d984af34a894e902e570e0d4"],["/tags/音乐/index.html","bc390b9b8c1f5f401ee860244ffc2188"],["/tags/高颜值/index.html","1d4a2dd94dd4417fd196fcb1f22b4edf"],["/tags/魔改/index.html","f9d8981fbc741e95baffbcbd2f6ba263"],["/tags/黑名单/index.html","be8102d620d895c05b30196a250ba69c"],["/urls/index.html","f044aefa68e995a9ca9991f9c413b606"],["/vps/index.html","f186ed80044f3571fc3737a15433003a"],["/支持/index.html","c1eb21604d83ee0a6d45c64fc235665e"]];
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
