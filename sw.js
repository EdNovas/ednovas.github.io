/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","caa9c40ff69234ed7febbb91ec50a960"],["/2020/11/29/clash-windows/index.html","c5677937373af95394e0ba634ab8fc8b"],["/2020/11/30/websites2/index.html","3abd1174e473b99ab57851591ef7b074"],["/2020/12/04/iphone4s/index.html","236d79e3fd853c13d8b1b03d4751790f"],["/2020/12/04/onenote/index.html","c4ae91c0e681370609f1628282c67ab4"],["/2020/12/04/wesites1/index.html","c69fb306aa076a69c0e1314e4cbb8ab5"],["/2020/12/06/nokia808/index.html","2c7511fb48214de337760302ec8e2252"],["/2020/12/07/ipad1/index.html","cddafc24d654edf6cf139d6a195065d5"],["/2020/12/18/freesubscribes/index.html","d75190904943c88b546ede5cbb9695a5"],["/2020/12/19/musics/index.html","fe160b066fd5f35118982970d2182ccc"],["/2020/12/19/shadowrocket/index.html","2fff0d9b922e371dbaa2fb6f15ebd433"],["/2020/12/19/v2ray-windows/index.html","21e731ed422b974492eac7effadbc517"],["/2020/12/19/v2rayng/index.html","d434e378d3870d1e59960fd4d9f9775c"],["/2020/12/20/beoplay/index.html","02ce32dec44e382406c1638db0ae1690"],["/2020/12/20/订阅链接转换/index.html","c5a6a02e1dba2968d3168ed61e899d18"],["/2020/12/21/chrome浏览器下载提速/index.html","4adce11ab768d6ddb51d2251b333a0e5"],["/2020/12/21/免费128线程并发下载xdown/index.html","8531b06fbe0743170a5075aed0b1e672"],["/2020/12/21/免费32线程下载软件ndm/index.html","7c26caf4e135763e0bd9c1acdac9793f"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e5ef6a154ed616a4e5b2ca71be32d46f"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","91d7a90b8de8558de56decf4b01097b5"],["/2020/12/21/广告怎么知道我在想什么/index.html","0e0f14f96e12991263a3391af0de9271"],["/2020/12/21/无名·引子（小说试写）/index.html","cde326a820de939ceb43e7cb8c280230"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","a36cfa0ceb7f96bd768361186b08f7c2"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","733a609fbc22aba68be8dded985dd661"],["/2020/12/21/高速轻量下载器aria2/index.html","eff786bc32d6db15951270e1443f9c53"],["/2020/12/22/2020-cee-roo/index.html","73d39e700ffb7828a5245f75536041c1"],["/2020/12/22/firefox插件、github、steam富强/index.html","00a9b0b4b1a1ab73414d1a8f53614387"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","6ce0b560adf07d755b680f0b50b3194b"],["/2020/12/26/python-day-1/index.html","99be2d93c05f3e5dfc290a37beed544c"],["/2020/12/26/python-day-2/index.html","e5abba35dde7496e4e0857b08ad6f076"],["/2020/12/26/度盘不限速下载方式一赏/index.html","937e0460607796ed16d3be9f143b352c"],["/2020/12/26/添加开机自启软件/index.html","02362e3619fe44415447f74d50757293"],["/2020/12/26/电脑端截图方式一赏/index.html","979869081327724ab4199627483ea8ed"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","96e1ea401339fdac6b9180eeca227f71"],["/2020/12/27/最安全的浏览器tor/index.html","a893c0edd6a0702601e95ba084999147"],["/2020/12/27/网易云刷等级和听歌数量/index.html","95f1fb9b06bf0a05d73cc7d53629613b"],["/2020/12/28/freenom申请免费域名/index.html","7f1fa6d50874fa125584a778b550674f"],["/2020/12/31/机场/index.html","3ac281d55f300a690fdf99a1299dc2da"],["/2021/01/01/M1/index.html","1eb037ea177192d97a24e9a3e5b64554"],["/2021/01/01/compress/index.html","22a76433507a445010761eae8bf74421"],["/2021/01/01/infinityfree/index.html","4b028a4ce892aeb489689f198aa21106"],["/2021/01/01/硬核翻墙/index.html","c5cc32fa42bf6e772ae8484827bf8c10"],["/2021/01/02/qq/index.html","c56b778a189afc51a560eb6bb28c4010"],["/2021/01/03/netch/index.html","4f7ecf169ee75c4bd985dcf26fcd3e7c"],["/2021/01/03/waifu2x/index.html","68b748a11cb52e8e18a411944b8c3caa"],["/2021/01/04/ads/index.html","d5e2a5c1070143fdbc28311c705016cd"],["/2021/01/04/games/index.html","15ef852d0922debd039a7ee0ba904cf1"],["/2021/01/04/heroku/index.html","e3170b58c4b6b47a3ed7bd418a7efb9a"],["/2021/01/06/movies/index.html","cc64a4a45fbd031ee1ee5ed47a4fa835"],["/2021/01/07/google2020/index.html","1809d1c79f85384d68e61b82bde2f862"],["/2021/01/07/lucky/index.html","b6c81007465f87ea72f27b99c0ff5533"],["/2021/01/07/spotify/index.html","f3fcafc08de71a2df6a2c80ef0c43cc2"],["/2021/01/07/thunder/index.html","bd79f1e3281c438e61226e1e5d02931b"],["/2021/01/08/adguardhome/index.html","970f06b1bc6e459bcacad1e15e876ea1"],["/2021/01/10/IBM/index.html","87945bac8049c037a35048732044310d"],["/2021/01/10/potplayer/index.html","1437ded044f3f8753b65a460fb7b98fa"],["/2021/01/10/sakuraanime/index.html","a82c69423be98b55e35303c2254e81f7"],["/2021/01/10/美剧星球/index.html","b25ce2960f79e503ad603790d3b18b11"],["/2021/01/12/telegraph/index.html","40dae92d14e51f5b09c4008a553417a1"],["/2021/01/14/comics/index.html","0c4ad7a74a969b28dc8609bfe7f29ecc"],["/2021/01/14/ftp/index.html","bf698d6e1760832d0de4e57edf2184af"],["/2021/01/14/oraclecloud/index.html","695e4f67f266a2d5a19eb772c0bc6f69"],["/2021/01/14/porkbun/index.html","03e291cbd38b8cabd0c76899bfb2ea86"],["/2021/01/14/powertoys/index.html","23e7a7c8e9cead28f9eef700ac18e1be"],["/2021/01/14/taptap/index.html","dfdbaa47139f406c2cd983b7123af47b"],["/2021/01/14/ubuntuvsftp/index.html","09b9859a28ec40444ea654a802cd024c"],["/2021/01/14/小说/index.html","602e329e5cd5cd308e62757c4b1bc1ab"],["/2021/01/15/freeproxies/index.html","834c5f4bd7236bea65da99db0655e9eb"],["/2021/01/15/incaseformat/index.html","d98b3131db7a8eb451ad3647558fc669"],["/2021/01/16/euserv/index.html","c69be090f5101cead6bd3ca091bf158c"],["/2021/01/16/winxray/index.html","dda9cd198bc1c27a17b0a409cbba65ac"],["/2021/01/18/qqreadhistory/index.html","f6a68b3b5dcefc0b9286c5d04cf525f8"],["/2021/01/18/qqrevoke/index.html","ba207c0516262de9af6cec6e9af3bd03"],["/2021/01/19/freevpn/index.html","9420b7f64fc0490c264154ccfbc1c0b7"],["/2021/01/20/browsertrack/index.html","6386225be155b6e85c1198b1a92d3646"],["/2021/01/20/v2ui/index.html","adcd6e2b5d9ab7c8d4db07b794e51b5f"],["/2021/01/21/failedtoconnect/index.html","32ccb199f8d49457a9ce8cf137fb06d1"],["/2021/01/21/gitcalendar/index.html","0b2c0617e05b464ba0eb212da7c3ec12"],["/2021/01/21/markdownformat/index.html","05495d903499bef645c19eeb3a4ccfac"],["/2021/01/21/markdowntable/index.html","35749a64dec63fef3fbfafc5d1da700e"],["/2021/01/21/vercel/index.html","73068143f00d8e7b0d6a835944757968"],["/2021/01/22/hardware/index.html","12ed199291138bdbb22e43f770e5c366"],["/2021/01/22/muviz/index.html","3d9ad6cbbf8a6cad6a50df821823b51f"],["/2021/01/22/randomapi/index.html","19479fbc5c9fe312e9f8e04168d89c57"],["/2021/01/22/searchimages/index.html","cdbd30b4e98542a6e93c705b106a1757"],["/2021/01/23/RX文件管理器/index.html","46ea2d67a363a55a722d66ce19ff71b5"],["/2021/01/23/chromeflag/index.html","fde530f55628eb4a22ae9d308849836d"],["/2021/01/23/qttabbar/index.html","d13c5d6433a2f351392f5f56db18857b"],["/2021/01/24/githubspeedup/index.html","a5b3bcfd1de7db245ec105c24cb833f6"],["/2021/01/24/jsdelivr/index.html","7a8c768553356d1ff74056bd3e2b9d9d"],["/2021/01/25/note/index.html","78d165174fa39e145f5de0b5a75211b5"],["/2021/01/25/soul/index.html","dbcc83c2ba75a1e6123844605eb75706"],["/2021/01/26/herokuxray/index.html","c751f0503f52930e00bf15e819a3c32f"],["/2021/01/27/proxypool/index.html","c63a671967fc3e378dd476fad872e720"],["/2021/01/27/tracker/index.html","9d5bb1a6e7a5b82091ecb68c7d9e4496"],["/2021/01/30/pandownphp/index.html","4d1e9accc5e1d1114aa2cbd075f144f1"],["/2021/01/31/newgroup/index.html","0a7d44620aa1814b9a3eac9fca8e8e1e"],["/2021/02/01/clashlanguage/index.html","78d445eb3d15d9ad5af215f68710a72f"],["/2021/02/01/encrypt/index.html","c78751cee27c0000126b3a82d4e62047"],["/2021/02/01/footermotion/index.html","5e34d56972dde35341c47974f886bc96"],["/2021/02/01/gitter/index.html","a4c697b905f9d6df50cbaf95803901b1"],["/2021/02/01/pixivtop50/index.html","0657d3867f99641038bdcb1762354e62"],["/2021/02/01/scrollbar/index.html","6b6da789a23c8399af85eb2ae63cca70"],["/2021/02/02/clover/index.html","c821869f180872801a197c25cd5de243"],["/2021/02/02/maya/index.html","d730cfce3a3190d1bb4d6c1f61ba3f3c"],["/2021/02/02/speedcontroller/index.html","015707881ca545aa06ec4eb14d3f9ef9"],["/2021/02/02/yesmusicplayer/index.html","8aed2848ca41b9e1770a3c66490305e6"],["/2021/02/03/lenovoonelite/index.html","f427a46e4b2fc156ea00bf7bee0cbb97"],["/2021/02/03/skipads/index.html","876f29ca484d12bcaeb1410e0716a22f"],["/2021/02/04/picseed/index.html","a38292866013cf6fe98931e998e0c73a"],["/2021/02/04/renren/index.html","f5a25a194c178ffedbde8985b827bae6"],["/2021/02/04/serverstress/index.html","8a4706468f189049c72f4dda328df709"],["/2021/02/04/wikipediazh/index.html","0dac391c685a12b7797dbf372705f29d"],["/2021/02/05/googlevoice/index.html","41d154c0a0a0c28516816b525a5ece99"],["/2021/02/06/clashconnection/index.html","bc1555cf94d96c6df0b4371916af33c5"],["/2021/02/06/gvtransfer/index.html","834bd2c002b3b2bfd4a2c78d425d7653"],["/2021/02/06/todesk/index.html","52e61340d7e79c2563786c0670e7caa2"],["/2021/02/06/vpnblacklist/index.html","ae002f38b246517e98777b5254216ed2"],["/2021/02/07/mklink/index.html","403f79a97466b5afff63303ffbbd9f95"],["/2021/02/07/speedtest/index.html","933d5b0820e525824fb573ecfad49b4f"],["/2021/02/07/translate/index.html","69cbce3d9a2ff75bba957210ab5fbb56"],["/2021/02/08/ewomail/index.html","ca09f6e0ffbe0a82aa326d921bce204b"],["/2021/02/10/officee5/index.html","07733cc071c612a218f5673dd60769db"],["/2021/02/10/raidrive/index.html","32ec310734bbdeb6192450961c237438"],["/2021/02/13/e5sub/index.html","6d07894d87d2ec9834c7b078333dbe9f"],["/2021/02/14/screen/index.html","93beb923cca804ed55bb1d8d3d9d65c1"],["/2021/02/15/clashtun/index.html","d796fe8eccc855408a680660490ae28c"],["/2021/02/15/messageboom/index.html","2b16d4d7369184f0fda4590726f35dcd"],["/2021/02/15/oneindex/index.html","4a6808d7ef15c6f4b517dda30de725e0"],["/2021/02/16/govsites/index.html","b2b127835c73370e8016f05cb2531f93"],["/2021/02/17/hexototypecho/index.html","d08a85d1eded3031a2daa739f53a87b0"],["/2021/02/19/fiddler/index.html","99ddaec9b2f7a0bbd250ed196cd8d6ee"],["/2021/02/22/potplayerset/index.html","87bc734c83dd43bf837b3e990663ec3f"],["/2021/02/22/studyresource/index.html","b72724cba7aee5eac746076bae971fd2"],["/2021/02/22/telegram/index.html","61ff5e7c075312783bfd4ce7cc9c9b31"],["/2021/02/22/videos/index.html","493fce4da5a06fb8b535a0f3836da687"],["/2021/02/24/mtproxy/index.html","8598cad570ec3dd927c4ce244a536890"],["/2021/03/10/catchcat/index.html","f45aa11914b8750f01ff83d2ec000c47"],["/2021/03/10/neteasemusic/index.html","9199e3538ec6c8a4d9a2b03a988ea743"],["/2021/03/10/surfboard/index.html","0eefc936066b2a221795bb5878dba2aa"],["/2021/03/11/vpnandjc/index.html","447c4b085bfc39a54bc20996bb7e3a5f"],["/2021/03/12/qrcodes/index.html","950b6e8b97b6bd8fcfcc47dbf45cfa82"],["/2021/03/20/qv2ray/index.html","99ff5f2241168cbadb0403865fd3f5a9"],["/2021/03/22/freevps/index.html","beb14d222c9db6ab279139f98d2e3486"],["/2021/03/24/tgstickers/index.html","7dda32c52f51b14d463e13b9e2ba6976"],["/2021/03/25/clashx/index.html","28082b969211c7ef5867fdbb5e792736"],["/2021/03/26/bingwallpaper/index.html","41c68a606ca9b03bc3cf4bd88f5b0362"],["/404.html","7d6f333b4fe2e4b133eb9c21dcff0fd9"],["/archives/2020/11/index.html","5e1c40daf83555e5056f43710d858ff7"],["/archives/2020/12/index.html","6168a13143e460afbf49a3a772e51f30"],["/archives/2020/12/page/2/index.html","f3ca9dc26f8108389c9b80b2dbc4be13"],["/archives/2020/12/page/3/index.html","7cae4e4a03b5d92aef461e9831286048"],["/archives/2020/index.html","8b0971d86622321af91d87bf235f4fa3"],["/archives/2020/page/2/index.html","3678e6128782ec3bd2137731dada2d26"],["/archives/2020/page/3/index.html","2b98368ce42b852afbe95ec04e136835"],["/archives/2021/01/index.html","8d963a51db1fa5ffeb99d02f69207484"],["/archives/2021/01/page/2/index.html","bc60040c2fe47e1e80e606bd5fb7d7d2"],["/archives/2021/01/page/3/index.html","aad25f89f73b300f77b49fd17d40625a"],["/archives/2021/01/page/4/index.html","92c59a44d29864e7ec0d9e4fae8942ae"],["/archives/2021/02/index.html","010d26c6dbd518568de23b859201133d"],["/archives/2021/02/page/2/index.html","eb4450a4ddc4306318282b0e80395588"],["/archives/2021/02/page/3/index.html","a2f6324edb3ad42639ada22cd3ebd191"],["/archives/2021/03/index.html","348a718aa5082689c3386d617fcadb2c"],["/archives/2021/index.html","02c57365d6ea56d09759e9ac6a9ea2a0"],["/archives/2021/page/2/index.html","0b4c142667348c166baec3235d98f1af"],["/archives/2021/page/3/index.html","e2a191a60f2426885a010f304fb5bb78"],["/archives/2021/page/4/index.html","2344664f5b15d0ead5a7df71ce0ee351"],["/archives/2021/page/5/index.html","7191f1cbcbf48ac7e9895eca26a46894"],["/archives/2021/page/6/index.html","3676ea0a2c8e29f36e64b259122ee5c6"],["/archives/2021/page/7/index.html","303d649592bddc25b0072a3dcef373ff"],["/archives/2021/page/8/index.html","d3b9a2baa9f4a3313240b447a3e9f130"],["/archives/index.html","cf33c048ac25a179ef46cd815b90237e"],["/archives/page/10/index.html","734965ea44938a34e202e70876a52855"],["/archives/page/2/index.html","ec92a023a3ae7b1a7e70751588bdaf4e"],["/archives/page/3/index.html","71a52050964955b88a30e7dd18c8375a"],["/archives/page/4/index.html","4f6ffbd439090040b4138edf71935559"],["/archives/page/5/index.html","7ba246b4400c4a05745638fb3f165c26"],["/archives/page/6/index.html","d1afa19555e0ac911e780bb7f1933223"],["/archives/page/7/index.html","f4c9ca58d39c01a1f3c4c2e3b1731b8f"],["/archives/page/8/index.html","954b03b3af035dd1fa510b922cc60086"],["/archives/page/9/index.html","9473e4fb3a1cb5b816be83b1bdbcc551"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","b9480d2175c493dae551f1a4c78d1832"],["/categories/index.html","055264c2256f8db8b4b5f7a07bb931d7"],["/categories/下载/index.html","35308a4a8e496181922c2fa2e4f1bbf1"],["/categories/安全/index.html","3057ba0b788492c60179c873a71a7556"],["/categories/建站/index.html","3d6a2ebac11757ffd185348bb0fe8846"],["/categories/杂/index.html","b9bc34df4fb3537cbd686475a029e866"],["/categories/杂/page/2/index.html","9cba941944eca9b9054016e3078cc239"],["/categories/测评/index.html","1ee671635a7bdf1a816271c47935a1a4"],["/categories/科学上网/index.html","2f4259e424612b7890e67cb30a6fa08e"],["/categories/科学上网/page/2/index.html","bc6905dfbf9a25d7dda5e229a680390b"],["/categories/编程/index.html","12ce33e66be60149f5d95da80cc08e02"],["/categories/网站/index.html","a4a59216e3a41eb314774c7ade834419"],["/categories/网站/page/2/index.html","e811008beddb00ad71272de57d8a94a3"],["/categories/软件/index.html","55f43cdffae7b76c0b4e37c430b1299a"],["/categories/软件/page/2/index.html","cba58752102f324ba56744c8c13ce295"],["/categories/软件/page/3/index.html","3e16b77ab484b5cad5f4f1aba2c98740"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","47f73e69060d9dc8e1c7ca8e91a9f4d8"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","382e7bf15f81f5058543571b7e322413"],["/ios/index.html","134101163c8d78d13a4cd7b32ed5609b"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","4b646784cccc60967b81226793f8c42b"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","019bcef258d80de81c318d1fe9561cad"],["/page/2/index.html","5184ed79acdf3a09f0f8916be0ecb8d8"],["/page/3/index.html","ad7f7f563eb62cbe5732b53e925b04a3"],["/page/4/index.html","3ed972c35673c2fd5c5fc5f7f6a070b8"],["/page/5/index.html","5c1b5090e6af2171dd4bb181e96feea6"],["/page/6/index.html","5f171cc18a496b7d723ba987bc26a8e1"],["/page/7/index.html","00d9c75e5b10f7b567048740e22d40b8"],["/page/8/index.html","48493a9c3262f02b193e127ab53ac717"],["/page/9/index.html","fd3c6c171d6a32c95f1a6b49c9a63cac"],["/payment/index.html","cf24d41d26e674368c8b585712b92315"],["/privacy-policy/index.html","0207059d8ec70929dac93ddec6ede1e9"],["/rss2.xml","b125b321fc32f04d73665cf76fc158bc"],["/search.xml","c3d6af5a8798e7e0232b2fefe175ff45"],["/sitemap.xml","193f2a14946abf7cccd81243bcfb8bfe"],["/sw-register.js","60ad9f65d9034d223dd4c2987ebaf403"],["/tags/5t/index.html","726a877aa186a453c6cd04cb2a3bfd23"],["/tags/Bing/index.html","3da2ee614d10d83483d4935e8f522ac7"],["/tags/Clash/index.html","f97ae6da1684c5b1cb8b7052514c1590"],["/tags/Clover/index.html","ee4f33e71500dbadacbfb9660cd3a4ed"],["/tags/E5/index.html","d688c47056fe544273bfb8f06ae80919"],["/tags/FTP/index.html","fd86d666f76178f4c590484ab7947746"],["/tags/GitHub/index.html","aff93decd6b3a0abe836fc0b2da48605"],["/tags/Heroku/index.html","334806fd5251321eb2a79834f295828d"],["/tags/Hexo/index.html","6c19a48a8fe77056937e444a870c2376"],["/tags/Lenovo/index.html","06936894d111bff29a4c82f72a2b73a9"],["/tags/Oneindex/index.html","ef5933ea46d2f71587c1d08b0cb57e59"],["/tags/QQ/index.html","cde16c489f632ca3ff75f637c9a8ff06"],["/tags/QTTabbar/index.html","11f7c628bf9e9c419cfc716080d16124"],["/tags/RX文件管理器/index.html","bbd597668a93748f4b0d4b997bc96bb2"],["/tags/Todesk/index.html","bdad4ab9bfc26965c9d610463e297ed4"],["/tags/Vercel/index.html","60d4b5d1b233da38b1408bf23d05d04d"],["/tags/ads/index.html","6b99016d02de63417b40f04906c06e1a"],["/tags/api/index.html","1386d7391d70b0049280d93a18ed6811"],["/tags/app/index.html","42b58c5fb6a45b4318557249d45740eb"],["/tags/blacklist/index.html","70be09451e028d2064c58a18cf4ea9a4"],["/tags/butterfly/index.html","eeb6187d7758fb3cc215016ea6db287f"],["/tags/chrome/index.html","ad36d83178c8b6119bdacdd3164d45ec"],["/tags/clashx/index.html","a837846e0ed1212931fda4432ec067b4"],["/tags/cloudflare/index.html","42cb849f816ef7ecabd3a20332a79735"],["/tags/cmd/index.html","463e70e7c36f9584db9064f577d07254"],["/tags/c盘/index.html","6f146acf8406a2ea992c6d445ae1faec"],["/tags/email/index.html","880c7a30839bf33e1880d56586004f43"],["/tags/ewomail/index.html","2c5dd7cc180c6d261856358fab46c005"],["/tags/fiddler/index.html","7544bf8d273435aeda5d95e17bd0a8f0"],["/tags/flags/index.html","a821bfcdb12a127e37ae9eaccab35b37"],["/tags/footer，页脚/index.html","a08156349a84d4393ff9db1463ed52a9"],["/tags/galgame/index.html","1c11cf780a67c1faad80bb364a49894a"],["/tags/git/index.html","41b13e972317f30fbff3e21b7a94cd81"],["/tags/gitcalendar/index.html","11137929022c6e10b38f9bc62b5dc76d"],["/tags/google-voice/index.html","4c046a0368614478d6560998f1ee0af2"],["/tags/gv/index.html","c9e417dfe965690626d8339f958b00a1"],["/tags/html/index.html","f94a62df75f8bd7d272881583784cfab"],["/tags/index-1.html","4019cc3ca732f0f2b2ee65f35dcdba9b"],["/tags/index.html","0c04867a0a2de965c0c3da2e18e76074"],["/tags/js/index.html","28823ac9e85b117d569b1ca7d5b9ae2f"],["/tags/jsdelivr/index.html","263c256ed40972cd1a96d8a1220f03a0"],["/tags/linux/index.html","f4071e37e75cc01e3e032bc98ac806fe"],["/tags/macos/index.html","1c9d87180fef1e195ce09cc82bc45e40"],["/tags/madVR/index.html","c9c161eae40c521836ca2dd592d4d47c"],["/tags/markdown/index.html","423e382e96010845dfe90a91de73d16a"],["/tags/maya/index.html","8fe361eeffcb1073e778a522309fb54c"],["/tags/mklink/index.html","1c7da7301df7d4cbe7a6afbb950354a9"],["/tags/office-e5/index.html","8317268b0d18420583df1a69ea7e59b9"],["/tags/onedrive/index.html","8b4ff6b107dfaaaf319bbe2d91f4602e"],["/tags/picGO/index.html","c82a98b26ea8e93fe002c38b4520405c"],["/tags/pixiv/index.html","ba28222ec687740b23f6e812aae5ac62"],["/tags/potplayer/index.html","5cbc8c71c26a503d63b05c4782d4b447"],["/tags/proxypool/index.html","0917743cf463a0ef821de6f978e08d1a"],["/tags/qbitorrent/index.html","6e1d1549602eb2f8efd1c16ae067686d"],["/tags/raidrive/index.html","176f7c5f0e24f936e34a6f05aa5ac3c3"],["/tags/screen/index.html","a1a510f0c179768317c32f41742666be"],["/tags/speedtest/index.html","0bd9df14f15edd4d8e773523fc933899"],["/tags/ss/index.html","1ad527bc2ad38157d4fa47a112196607"],["/tags/ssr/index.html","224d3c25655758739a6e5ed3e357c2c1"],["/tags/stickers/index.html","13b852e274ded366a7ae468ca5dc71a0"],["/tags/surfboard/index.html","a69bd5fe148c6a507b68ebc4389857c4"],["/tags/tap/index.html","7a44f51e70e1479cd518859924a6486a"],["/tags/telegram/index.html","b822b69b970b25b3c565d2a2e502efb0"],["/tags/telegram代理/index.html","84965a1499a84ca246d2409542cad857"],["/tags/tg/index.html","81a6aba550d139dcd2a6bc9558b137d1"],["/tags/tg代理/index.html","2b43d89f4fb816c85c9b0fc23ecb99d7"],["/tags/top50/index.html","d33dae7945cf6c3e5e00c494f4e77f7f"],["/tags/tracker/index.html","f09fa21a1c74ded807738733a1970d45"],["/tags/translate/index.html","d016e8991ee4b2fcb5cca8e0851342b7"],["/tags/translater/index.html","24a8af7f5648a3b53d4e8c44c323f5aa"],["/tags/tun/index.html","35a7892cce79b8608ae87367118eb334"],["/tags/typecho/index.html","e11f2dea1983d8f6295ed0d278873efa"],["/tags/v2ray/index.html","0d095e8c7ada731ed42ace46b73e46a3"],["/tags/vpn/index.html","f2926c7264e63e0fe03cce55601cc32b"],["/tags/vps/index.html","05fe56e001ba702e686309463657f57a"],["/tags/wallpaper/index.html","58d16e28a9b4710e5477be8212069097"],["/tags/windows/index.html","3855678df7625289eacf784f5380bbd1"],["/tags/windows端/index.html","e888dc351806a270e10d2b6bff9792ff"],["/tags/xray/index.html","a1daf0e131f1b8a348b9836573c1a790"],["/tags/下载/index.html","2b48921dd9a6df166330c516d4690646"],["/tags/不限速/index.html","d2420763526223ae6824aef58c0c568f"],["/tags/个人网盘/index.html","14e45befb18a53e86bfb715d33ade715"],["/tags/主题/index.html","0986a03f923a9ebdf99ed256dd141056"],["/tags/二维码/index.html","f950603352b2ae04794ac0020d88c625"],["/tags/云便签/index.html","f48e5565f8da127cd27d04f73a6116f7"],["/tags/云盘/index.html","023735399621b05ba9eb836845364295"],["/tags/人人/index.html","765776f4a87730b059f9ec2a77472df3"],["/tags/代理/index.html","608d71004657bed877b101f4c20d7c0d"],["/tags/代码/index.html","b2c398c05e1f709f636bdd42e6be215d"],["/tags/优选IP/index.html","275eb783621f81c4fe0dde95df68e9aa"],["/tags/便签/index.html","a673058bbdb5f5c12c694a567be00c0a"],["/tags/保号/index.html","14f3d44ea00cf13ca75e3d3885a95ab9"],["/tags/免费/index.html","4835ca20819c08808c46d01102b5ff98"],["/tags/免费节点/index.html","4e665d02a33bb67f709cbac5933581e7"],["/tags/加密/index.html","0b9fd406e5d6c6beb2a04f1b5e31d55c"],["/tags/动画/index.html","fbab5779b7776d758a20b8977eb0b0c3"],["/tags/博客/index.html","0f894991308f0c3193fa26eff3e8b5b9"],["/tags/历史记录/index.html","bcf52483965e180fb4123c203e433de8"],["/tags/压力/index.html","e1a0492f4d686bc35d5a53a80b54b492"],["/tags/压缩包/index.html","a14ff56e7a07faac3352ea03d22a1c4f"],["/tags/反代/index.html","1d90cc1b480cceda9d2d747b9bfa7c21"],["/tags/可视化/index.html","36fe437cfe91b593cd9c9a2f90558c56"],["/tags/命令/index.html","034b2e06649b6dbef802bbd2a893155b"],["/tags/国家/index.html","aa56f365b1fdd5c58b4de2a1f1439451"],["/tags/图床/index.html","f90919854a50c19a0fec80077966b441"],["/tags/图片/index.html","1f68234d8734771aaff9c9d96e29ddf4"],["/tags/域名/index.html","263907288f7fd5b829a593888a355f08"],["/tags/壁纸/index.html","b95546faf5ca9244d1509961d266b1ef"],["/tags/多标签/index.html","283ba7996ef2fe09870aaf1aea03da40"],["/tags/存储/index.html","8ab1a829938efa94aeb14a5c1242e33a"],["/tags/学习/index.html","d5d145da60c5bb32e68aa31c9a45f610"],["/tags/安全/index.html","55d195f74ca54244fbc7b6c599b8fc30"],["/tags/安卓/index.html","539f880c1754ef2cca9d1c3de46d0bdf"],["/tags/宝塔/index.html","2c518126ac113f0fbe94236eeccc6655"],["/tags/小游戏/index.html","41b7bc6acc359899eac2356f1817ea85"],["/tags/广告/index.html","b9314f01f931f99df18057f62b7c149f"],["/tags/建站/index.html","5dc5afa4d4f9bdd2a0c7448684ef3471"],["/tags/影视/index.html","4d43111f54ec1adc98f880b0187475e7"],["/tags/微信/index.html","d8fbafe9e4fe4728cc95622d8371085f"],["/tags/快速启动/index.html","da96f0c40ba84f85fcabca0135a15bb2"],["/tags/手机/index.html","692f78204133b38f9310729af81d2b9c"],["/tags/托管/index.html","5c29bd711fbabad4302a330a1d1129e3"],["/tags/抓包/index.html","00955fd98ddf21cc186341dff5389031"],["/tags/抓取/index.html","9a920b18a3de2923e89bcca12bab9e79"],["/tags/投屏/index.html","a03c3f245da13dbe194544ff27a44913"],["/tags/拓展功能/index.html","850a31561a15c04592c1f8280c830b26"],["/tags/挂载/index.html","e07843af22f10f7bd61852e77b65c2f5"],["/tags/指纹/index.html","2de55520c0eb9727edb2655af42fcaf1"],["/tags/接口/index.html","2b72cfedac8e7201c950319c5b70b3cb"],["/tags/提取图片/index.html","6e6228d94f938e408c2f746107b93a71"],["/tags/插件/index.html","65d9bb8ad6726b4b660d0c64e73bb7f9"],["/tags/搜图/index.html","f6539550d693b6cc92023b64c0f92861"],["/tags/搭建/index.html","32e9177771d1ae59f97a572c21a23d44"],["/tags/撤回/index.html","2431add83166de012e4acd17149fd344"],["/tags/播放器/index.html","40d61e995bfdd0366de7ca8cdf53e4bc"],["/tags/支付宝/index.html","aad43b620a878ea3e0b4563b1ebf5a0f"],["/tags/政府网站/index.html","79d06980e204deb8211b2752691404ad"],["/tags/效率/index.html","03a7709dba9103a2388050051789cd53"],["/tags/日历/index.html","1d7fe72d14f3fa44bc0b0904199a809b"],["/tags/服务器/index.html","4ad66642630ebdd7859760464fbf4811"],["/tags/机场/index.html","94071ffb8c9b6542830843fc394cf411"],["/tags/桌面/index.html","5fe949bd1663e0425d109feb3260a575"],["/tags/梯子/index.html","520142a424fd1d3fe455e157d200223a"],["/tags/检测工具/index.html","ee815a8ef57b534613da7ea56e20e2c7"],["/tags/汉化/index.html","fd038436528cab9f888394fd50074fc1"],["/tags/测压/index.html","7c01a2b528b42638a20b509dc46cef59"],["/tags/测速/index.html","6d7963993804221cef5a06492c6b5544"],["/tags/浏览器/index.html","543f6c541c5ba489db10afc7dc059719"],["/tags/清理/index.html","f6ba585deb9c47e32de918c9aa19c427"],["/tags/滚动条/index.html","5938c58071b2370d6ad6707b9be9c136"],["/tags/灰色歌曲/index.html","f1276574ebbe3f6aa455c7cacc3828fe"],["/tags/电影/index.html","9e26a3e67327e27dba415e5ee1c5d1bc"],["/tags/电视剧/index.html","076bc8610da1ae9489af0eabf0124e6a"],["/tags/白嫖/index.html","860b68e88ea21d1c8f1b1e8990fbca84"],["/tags/百度/index.html","62019378f10cc4b87937cdc2091fba8b"],["/tags/百度云盘/index.html","57dd4041b49867b6f78150e67a4ed324"],["/tags/百科/index.html","8f72349f9875c306efa6a7584d62cd89"],["/tags/短信/index.html","4322675365fb39b1535638361acf46ac"],["/tags/硬件/index.html","c473a17b3cc90e2188321ceefd16d46d"],["/tags/科学上网/index.html","bf0603271e532d85a9e6d0476e920074"],["/tags/空间/index.html","bf37cd4b9a3ab18a349ea1a1b98e7a4d"],["/tags/笔记/index.html","20576e57a18ea47dc7a81e35d2e50340"],["/tags/简洁/index.html","2c89b0057c53c3195b9e105ca6e46231"],["/tags/简约/index.html","ccb00027b8fccbaf7f6b770221c49c06"],["/tags/维基/index.html","524a9bb32c15b0f97faf6331a7278194"],["/tags/网易云/index.html","1448e32b8a11ab1c03ae68a5f153a23f"],["/tags/网盘/index.html","b54ffd5a4d5ca1673a78b1a91fefb82b"],["/tags/网站/index.html","31e33f323ea667191d4da5222228c0a3"],["/tags/网络/index.html","6f070abdeddb8b521eafc462758daa42"],["/tags/美化/index.html","2fb11e7bec4912d542d238d3e642a43b"],["/tags/翻墙/index.html","62bfb87b9af47c6614a2063691c5df2f"],["/tags/翻译/index.html","7e64d4c435e8e73902bd472decce0b72"],["/tags/翻译器/index.html","9f9f71d04b50bfc2b17203f129382c5b"],["/tags/聊天/index.html","1de55a4b22da05aedd43882dd8e62882"],["/tags/聊天室/index.html","cc1c48095a7557ba6f73bdedc3ae032d"],["/tags/联想/index.html","2afbf9db645d9997a92c835cd026f446"],["/tags/节点/index.html","596e1e405347a6b1e38f77640dfdf667"],["/tags/虚拟手机号/index.html","6a8bd35777bcdaceecbcfd02d0a46853"],["/tags/补丁/index.html","73091e8a158da9f326bf99a1e045c7e3"],["/tags/表情包/index.html","c9f04942048e6ff001a841a615b4c115"],["/tags/视频/index.html","6e9b3cb29a9a2c0ba1db04d5d891a35d"],["/tags/解析/index.html","b86d27f80f91ab4da2a38ae35162daae"],["/tags/订阅链接/index.html","f5311613edff7a965476ef961e4d9c83"],["/tags/记录/index.html","89d9f056deee9b53d15831ae9918c80e"],["/tags/识图/index.html","be8d65121c8c0d8851241db973ba88f1"],["/tags/语言/index.html","969671b0fc52854fee75af820e2e1391"],["/tags/资源/index.html","a1e28ae0f13c22d2966c8597ccca9e1d"],["/tags/资源管理器/index.html","6516807436e135820fdb5b9bf7d2ab69"],["/tags/转移/index.html","2420d2592a7d46b10ecd39960e3b74bd"],["/tags/软件/index.html","b357731ab12eceeda52b4c1ccdd62e06"],["/tags/轰炸/index.html","9182925117a183297db2d429ad651268"],["/tags/迁移/index.html","746fcda2de902038c258cfff59ba96ef"],["/tags/远程控制/index.html","f02b9df885741a7ddea58ea4d379d108"],["/tags/连接/index.html","117e1cd345e443f783ea5489c75500cd"],["/tags/追踪/index.html","970e3e50566888a9a9a979242edd5ff2"],["/tags/速度/index.html","fd2d68cec27692167ad22afcb16c0064"],["/tags/邮箱/index.html","cb71a68b9994bc0faae3cc1499b45321"],["/tags/酷炫/index.html","8ec6d54174be54204f5d86f20020d9ae"],["/tags/钓鱼/index.html","4288a93a38c1739d75ceffbdd9a36314"],["/tags/镜像/index.html","30c35ec8466aeeec85b23173d958bfd3"],["/tags/随机/index.html","5b98fb3ee4b67342d139c35ad8ea81b0"],["/tags/隐藏/index.html","a019477be0b46bfd0bbc27d0f8f11b85"],["/tags/面板/index.html","328506c8932110b7e9490f61cba26272"],["/tags/音乐/index.html","8815245f1243771448d7f57476d187c8"],["/tags/高颜值/index.html","3e36f2b5110a6a09fcd3c35069c61ecf"],["/tags/魔改/index.html","d35c768d024820229796211ddbff6e95"],["/tags/黑名单/index.html","bb9388ef8889f5710748b103c1f77d6b"],["/urls/index.html","473846d3861458c51f1b3c84a9666cf9"],["/vps/index.html","7235a6dd9589063a743ea0b4bc0c38e9"],["/支持/index.html","0a6b4ed231c70a05eb54f9814545339f"]];
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
