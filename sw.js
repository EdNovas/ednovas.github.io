/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","caa9c40ff69234ed7febbb91ec50a960"],["/2020/11/29/clash-windows/index.html","c5677937373af95394e0ba634ab8fc8b"],["/2020/11/30/websites2/index.html","3abd1174e473b99ab57851591ef7b074"],["/2020/12/04/iphone4s/index.html","236d79e3fd853c13d8b1b03d4751790f"],["/2020/12/04/onenote/index.html","c4ae91c0e681370609f1628282c67ab4"],["/2020/12/04/wesites1/index.html","c69fb306aa076a69c0e1314e4cbb8ab5"],["/2020/12/06/nokia808/index.html","2c7511fb48214de337760302ec8e2252"],["/2020/12/07/ipad1/index.html","cddafc24d654edf6cf139d6a195065d5"],["/2020/12/18/freesubscribes/index.html","4de8792fef919f3e48a204e70983bb69"],["/2020/12/19/musics/index.html","fe160b066fd5f35118982970d2182ccc"],["/2020/12/19/shadowrocket/index.html","2fff0d9b922e371dbaa2fb6f15ebd433"],["/2020/12/19/v2ray-windows/index.html","21e731ed422b974492eac7effadbc517"],["/2020/12/19/v2rayng/index.html","d434e378d3870d1e59960fd4d9f9775c"],["/2020/12/20/beoplay/index.html","02ce32dec44e382406c1638db0ae1690"],["/2020/12/20/订阅链接转换/index.html","c5a6a02e1dba2968d3168ed61e899d18"],["/2020/12/21/chrome浏览器下载提速/index.html","4adce11ab768d6ddb51d2251b333a0e5"],["/2020/12/21/免费128线程并发下载xdown/index.html","8531b06fbe0743170a5075aed0b1e672"],["/2020/12/21/免费32线程下载软件ndm/index.html","7c26caf4e135763e0bd9c1acdac9793f"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e5ef6a154ed616a4e5b2ca71be32d46f"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","91d7a90b8de8558de56decf4b01097b5"],["/2020/12/21/广告怎么知道我在想什么/index.html","0e0f14f96e12991263a3391af0de9271"],["/2020/12/21/无名·引子（小说试写）/index.html","cde326a820de939ceb43e7cb8c280230"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","a36cfa0ceb7f96bd768361186b08f7c2"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","733a609fbc22aba68be8dded985dd661"],["/2020/12/21/高速轻量下载器aria2/index.html","eff786bc32d6db15951270e1443f9c53"],["/2020/12/22/2020-cee-roo/index.html","73d39e700ffb7828a5245f75536041c1"],["/2020/12/22/firefox插件、github、steam富强/index.html","00a9b0b4b1a1ab73414d1a8f53614387"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","6ce0b560adf07d755b680f0b50b3194b"],["/2020/12/26/python-day-1/index.html","99be2d93c05f3e5dfc290a37beed544c"],["/2020/12/26/python-day-2/index.html","e5abba35dde7496e4e0857b08ad6f076"],["/2020/12/26/度盘不限速下载方式一赏/index.html","937e0460607796ed16d3be9f143b352c"],["/2020/12/26/添加开机自启软件/index.html","02362e3619fe44415447f74d50757293"],["/2020/12/26/电脑端截图方式一赏/index.html","979869081327724ab4199627483ea8ed"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","96e1ea401339fdac6b9180eeca227f71"],["/2020/12/27/最安全的浏览器tor/index.html","a893c0edd6a0702601e95ba084999147"],["/2020/12/27/网易云刷等级和听歌数量/index.html","95f1fb9b06bf0a05d73cc7d53629613b"],["/2020/12/28/freenom申请免费域名/index.html","7f1fa6d50874fa125584a778b550674f"],["/2020/12/31/机场/index.html","3ac281d55f300a690fdf99a1299dc2da"],["/2021/01/01/M1/index.html","1eb037ea177192d97a24e9a3e5b64554"],["/2021/01/01/compress/index.html","22a76433507a445010761eae8bf74421"],["/2021/01/01/infinityfree/index.html","4b028a4ce892aeb489689f198aa21106"],["/2021/01/01/硬核翻墙/index.html","c5cc32fa42bf6e772ae8484827bf8c10"],["/2021/01/02/qq/index.html","c56b778a189afc51a560eb6bb28c4010"],["/2021/01/03/netch/index.html","4f7ecf169ee75c4bd985dcf26fcd3e7c"],["/2021/01/03/waifu2x/index.html","68b748a11cb52e8e18a411944b8c3caa"],["/2021/01/04/ads/index.html","d5e2a5c1070143fdbc28311c705016cd"],["/2021/01/04/games/index.html","15ef852d0922debd039a7ee0ba904cf1"],["/2021/01/04/heroku/index.html","e3170b58c4b6b47a3ed7bd418a7efb9a"],["/2021/01/06/movies/index.html","cc64a4a45fbd031ee1ee5ed47a4fa835"],["/2021/01/07/google2020/index.html","1809d1c79f85384d68e61b82bde2f862"],["/2021/01/07/lucky/index.html","b6c81007465f87ea72f27b99c0ff5533"],["/2021/01/07/spotify/index.html","f3fcafc08de71a2df6a2c80ef0c43cc2"],["/2021/01/07/thunder/index.html","bd79f1e3281c438e61226e1e5d02931b"],["/2021/01/08/adguardhome/index.html","970f06b1bc6e459bcacad1e15e876ea1"],["/2021/01/10/IBM/index.html","87945bac8049c037a35048732044310d"],["/2021/01/10/potplayer/index.html","1437ded044f3f8753b65a460fb7b98fa"],["/2021/01/10/sakuraanime/index.html","a82c69423be98b55e35303c2254e81f7"],["/2021/01/10/美剧星球/index.html","b25ce2960f79e503ad603790d3b18b11"],["/2021/01/12/telegraph/index.html","40dae92d14e51f5b09c4008a553417a1"],["/2021/01/14/comics/index.html","0c4ad7a74a969b28dc8609bfe7f29ecc"],["/2021/01/14/ftp/index.html","bf698d6e1760832d0de4e57edf2184af"],["/2021/01/14/oraclecloud/index.html","695e4f67f266a2d5a19eb772c0bc6f69"],["/2021/01/14/porkbun/index.html","03e291cbd38b8cabd0c76899bfb2ea86"],["/2021/01/14/powertoys/index.html","23e7a7c8e9cead28f9eef700ac18e1be"],["/2021/01/14/taptap/index.html","dfdbaa47139f406c2cd983b7123af47b"],["/2021/01/14/ubuntuvsftp/index.html","09b9859a28ec40444ea654a802cd024c"],["/2021/01/14/小说/index.html","602e329e5cd5cd308e62757c4b1bc1ab"],["/2021/01/15/freeproxies/index.html","834c5f4bd7236bea65da99db0655e9eb"],["/2021/01/15/incaseformat/index.html","d98b3131db7a8eb451ad3647558fc669"],["/2021/01/16/euserv/index.html","c69be090f5101cead6bd3ca091bf158c"],["/2021/01/16/winxray/index.html","dda9cd198bc1c27a17b0a409cbba65ac"],["/2021/01/18/qqreadhistory/index.html","f6a68b3b5dcefc0b9286c5d04cf525f8"],["/2021/01/18/qqrevoke/index.html","ba207c0516262de9af6cec6e9af3bd03"],["/2021/01/19/freevpn/index.html","9420b7f64fc0490c264154ccfbc1c0b7"],["/2021/01/20/browsertrack/index.html","6386225be155b6e85c1198b1a92d3646"],["/2021/01/20/v2ui/index.html","adcd6e2b5d9ab7c8d4db07b794e51b5f"],["/2021/01/21/failedtoconnect/index.html","32ccb199f8d49457a9ce8cf137fb06d1"],["/2021/01/21/gitcalendar/index.html","0b2c0617e05b464ba0eb212da7c3ec12"],["/2021/01/21/markdownformat/index.html","05495d903499bef645c19eeb3a4ccfac"],["/2021/01/21/markdowntable/index.html","35749a64dec63fef3fbfafc5d1da700e"],["/2021/01/21/vercel/index.html","73068143f00d8e7b0d6a835944757968"],["/2021/01/22/hardware/index.html","12ed199291138bdbb22e43f770e5c366"],["/2021/01/22/muviz/index.html","3d9ad6cbbf8a6cad6a50df821823b51f"],["/2021/01/22/randomapi/index.html","19479fbc5c9fe312e9f8e04168d89c57"],["/2021/01/22/searchimages/index.html","cdbd30b4e98542a6e93c705b106a1757"],["/2021/01/23/RX文件管理器/index.html","46ea2d67a363a55a722d66ce19ff71b5"],["/2021/01/23/chromeflag/index.html","fde530f55628eb4a22ae9d308849836d"],["/2021/01/23/qttabbar/index.html","d13c5d6433a2f351392f5f56db18857b"],["/2021/01/24/githubspeedup/index.html","a5b3bcfd1de7db245ec105c24cb833f6"],["/2021/01/24/jsdelivr/index.html","7a8c768553356d1ff74056bd3e2b9d9d"],["/2021/01/25/note/index.html","78d165174fa39e145f5de0b5a75211b5"],["/2021/01/25/soul/index.html","dbcc83c2ba75a1e6123844605eb75706"],["/2021/01/26/herokuxray/index.html","c751f0503f52930e00bf15e819a3c32f"],["/2021/01/27/proxypool/index.html","c63a671967fc3e378dd476fad872e720"],["/2021/01/27/tracker/index.html","9d5bb1a6e7a5b82091ecb68c7d9e4496"],["/2021/01/30/pandownphp/index.html","4d1e9accc5e1d1114aa2cbd075f144f1"],["/2021/01/31/newgroup/index.html","0a7d44620aa1814b9a3eac9fca8e8e1e"],["/2021/02/01/clashlanguage/index.html","78d445eb3d15d9ad5af215f68710a72f"],["/2021/02/01/encrypt/index.html","c78751cee27c0000126b3a82d4e62047"],["/2021/02/01/footermotion/index.html","5e34d56972dde35341c47974f886bc96"],["/2021/02/01/gitter/index.html","a4c697b905f9d6df50cbaf95803901b1"],["/2021/02/01/pixivtop50/index.html","0657d3867f99641038bdcb1762354e62"],["/2021/02/01/scrollbar/index.html","6b6da789a23c8399af85eb2ae63cca70"],["/2021/02/02/clover/index.html","c821869f180872801a197c25cd5de243"],["/2021/02/02/maya/index.html","d730cfce3a3190d1bb4d6c1f61ba3f3c"],["/2021/02/02/speedcontroller/index.html","015707881ca545aa06ec4eb14d3f9ef9"],["/2021/02/02/yesmusicplayer/index.html","8aed2848ca41b9e1770a3c66490305e6"],["/2021/02/03/lenovoonelite/index.html","f427a46e4b2fc156ea00bf7bee0cbb97"],["/2021/02/03/skipads/index.html","876f29ca484d12bcaeb1410e0716a22f"],["/2021/02/04/picseed/index.html","a38292866013cf6fe98931e998e0c73a"],["/2021/02/04/renren/index.html","f5a25a194c178ffedbde8985b827bae6"],["/2021/02/04/serverstress/index.html","8a4706468f189049c72f4dda328df709"],["/2021/02/04/wikipediazh/index.html","0dac391c685a12b7797dbf372705f29d"],["/2021/02/05/googlevoice/index.html","41d154c0a0a0c28516816b525a5ece99"],["/2021/02/06/clashconnection/index.html","bc1555cf94d96c6df0b4371916af33c5"],["/2021/02/06/gvtransfer/index.html","834bd2c002b3b2bfd4a2c78d425d7653"],["/2021/02/06/todesk/index.html","52e61340d7e79c2563786c0670e7caa2"],["/2021/02/06/vpnblacklist/index.html","ae002f38b246517e98777b5254216ed2"],["/2021/02/07/mklink/index.html","403f79a97466b5afff63303ffbbd9f95"],["/2021/02/07/speedtest/index.html","933d5b0820e525824fb573ecfad49b4f"],["/2021/02/07/translate/index.html","69cbce3d9a2ff75bba957210ab5fbb56"],["/2021/02/08/ewomail/index.html","ca09f6e0ffbe0a82aa326d921bce204b"],["/2021/02/10/officee5/index.html","07733cc071c612a218f5673dd60769db"],["/2021/02/10/raidrive/index.html","32ec310734bbdeb6192450961c237438"],["/2021/02/13/e5sub/index.html","6d07894d87d2ec9834c7b078333dbe9f"],["/2021/02/14/screen/index.html","93beb923cca804ed55bb1d8d3d9d65c1"],["/2021/02/15/clashtun/index.html","d796fe8eccc855408a680660490ae28c"],["/2021/02/15/messageboom/index.html","2b16d4d7369184f0fda4590726f35dcd"],["/2021/02/15/oneindex/index.html","4a6808d7ef15c6f4b517dda30de725e0"],["/2021/02/16/govsites/index.html","b2b127835c73370e8016f05cb2531f93"],["/2021/02/17/hexototypecho/index.html","d08a85d1eded3031a2daa739f53a87b0"],["/2021/02/19/fiddler/index.html","99ddaec9b2f7a0bbd250ed196cd8d6ee"],["/2021/02/22/potplayerset/index.html","87bc734c83dd43bf837b3e990663ec3f"],["/2021/02/22/studyresource/index.html","b72724cba7aee5eac746076bae971fd2"],["/2021/02/22/telegram/index.html","61ff5e7c075312783bfd4ce7cc9c9b31"],["/2021/02/22/videos/index.html","493fce4da5a06fb8b535a0f3836da687"],["/2021/02/24/mtproxy/index.html","8598cad570ec3dd927c4ce244a536890"],["/2021/03/10/catchcat/index.html","f45aa11914b8750f01ff83d2ec000c47"],["/2021/03/10/neteasemusic/index.html","9199e3538ec6c8a4d9a2b03a988ea743"],["/2021/03/10/surfboard/index.html","0eefc936066b2a221795bb5878dba2aa"],["/2021/03/11/vpnandjc/index.html","447c4b085bfc39a54bc20996bb7e3a5f"],["/2021/03/12/qrcodes/index.html","950b6e8b97b6bd8fcfcc47dbf45cfa82"],["/2021/03/20/qv2ray/index.html","99ff5f2241168cbadb0403865fd3f5a9"],["/2021/03/22/freevps/index.html","beb14d222c9db6ab279139f98d2e3486"],["/2021/03/24/tgstickers/index.html","7dda32c52f51b14d463e13b9e2ba6976"],["/2021/03/25/clashx/index.html","28082b969211c7ef5867fdbb5e792736"],["/2021/03/26/bingwallpaper/index.html","41c68a606ca9b03bc3cf4bd88f5b0362"],["/404.html","62a10edddd8591f43fae95dddccf9892"],["/archives/2020/11/index.html","1a3b73efef0ce979c3422324bf91ad9f"],["/archives/2020/12/index.html","0e1de06ac9a940bf281976e64bafa281"],["/archives/2020/12/page/2/index.html","b5bb0e64b9be1d9be952d9c803041187"],["/archives/2020/12/page/3/index.html","bfbff1e331a2024b6fb15b97d07d7753"],["/archives/2020/index.html","6bcbd327b85452a09d5af3d639365704"],["/archives/2020/page/2/index.html","b0ea57b574c9251ae18cab4474ce1695"],["/archives/2020/page/3/index.html","c20fe13e52bffbe7f81a733430498750"],["/archives/2021/01/index.html","a19ec0109800d6f6df47a2c9aef95b5c"],["/archives/2021/01/page/2/index.html","c02a3ad4b21666395a49ebc09e835e7f"],["/archives/2021/01/page/3/index.html","cbc59479563b36489ef61e7223d396ad"],["/archives/2021/01/page/4/index.html","63785e4f3c85e3e7e4249d41733e6b42"],["/archives/2021/02/index.html","7f8770149918c8d67942767671ed7be9"],["/archives/2021/02/page/2/index.html","7d1d50703516f7ee24219e87329d14a0"],["/archives/2021/02/page/3/index.html","7f12f2cfbdc5e979b46e3917f7530021"],["/archives/2021/03/index.html","8c2483dc787d0b3bc106e48f0649f695"],["/archives/2021/index.html","7dcdcbdc345fa0daeaa78d8cadbc6f8b"],["/archives/2021/page/2/index.html","ed94e123f0168ece16ce51a77cc431f7"],["/archives/2021/page/3/index.html","fba9f92417b506afd1c4a672fa5d617d"],["/archives/2021/page/4/index.html","fdab1d2b154833aeeb226556b7d74857"],["/archives/2021/page/5/index.html","5b008019e19b48bd041d1140313b5c40"],["/archives/2021/page/6/index.html","c52a6ee426f8ca180017c4ad4fedc36e"],["/archives/2021/page/7/index.html","7a53904787e14645df8864a192d663e9"],["/archives/2021/page/8/index.html","dde3812cf068f36d1d11af71523f8f7b"],["/archives/index.html","2d165d909db6694ddfb2a639789f2010"],["/archives/page/10/index.html","8583c074d9c0a56bb2183c52faec9cd2"],["/archives/page/2/index.html","87596cd4588e8568e67d1324afc0e806"],["/archives/page/3/index.html","cf05e97f742a8c854a90f5c025d21a7c"],["/archives/page/4/index.html","8c843ee5a10044ad4822ad4e5e1d7484"],["/archives/page/5/index.html","810ac085896c9c34c1693972cef25020"],["/archives/page/6/index.html","b50f8475cbbfc156ce10c85a6cfe2534"],["/archives/page/7/index.html","521d16e4795f7726d7d67b3834112af8"],["/archives/page/8/index.html","c0bd8ba4f32a3eebcc209cb8bf6cf27a"],["/archives/page/9/index.html","cb5cdd58125209ae995d7d4c18ddce91"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","a4ae9db28b749f47ac6820c4d1d4b954"],["/categories/index.html","4bd96f99ec9a2f74454a2e40e94eecce"],["/categories/下载/index.html","5081c178512739b50a3d64b81c339aa0"],["/categories/安全/index.html","6cda702e03d01ae890f7653a4dd3cbee"],["/categories/建站/index.html","1b227fffda6f242101983c8fe12c748b"],["/categories/杂/index.html","63a729e1e6f8f2419712e96905f5e799"],["/categories/杂/page/2/index.html","bcc6c61c29bd9e5a7ab4cf93e5242462"],["/categories/测评/index.html","d17f354a931368dd9231713e5263c204"],["/categories/科学上网/index.html","69d8526cb80ab57e4281961f1d14ca56"],["/categories/科学上网/page/2/index.html","ee3ff1620b98e11ca7f9abcbf6ca485a"],["/categories/编程/index.html","b94fc370c0eb7cc9e08e47cdcae146f7"],["/categories/网站/index.html","d0384c529667ac32e3e2f072cb2d4e6d"],["/categories/网站/page/2/index.html","c7062d74a7ca0fcd8fb25d9d63db5ab5"],["/categories/软件/index.html","e266a69b46432f47d3ee1b1b73d2344d"],["/categories/软件/page/2/index.html","4096a7dcbd024f1842a35a651779cc47"],["/categories/软件/page/3/index.html","f9b66b1c25f0ef0ee6331025ae21aa06"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","1ae91e48c6ed907f8c8f5235013da46e"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","8037a459aacc83230b1e8d5806ea9c4b"],["/ios/index.html","f3234b52a612d7d954c15f4ef6ae2307"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","77d01fb6ba603a9790ae63da1cf4b8da"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","8b732763687cd864ef7073e64f3ba36f"],["/page/2/index.html","c3306a8d29abf26d7a8fdd97fd070286"],["/page/3/index.html","35ce8610e83d9473b212e69eecc68203"],["/page/4/index.html","43a6befd74694aeacc2568cbf00de09e"],["/page/5/index.html","d562f52f89519943dccca5053bc3c05f"],["/page/6/index.html","2924ed2d898322639eb330f92fda318b"],["/page/7/index.html","e6cf3dfc454c875005c60d3b3c80b9b2"],["/page/8/index.html","6fbcac6330610e24339a87c8091eab5b"],["/page/9/index.html","f79c8a7bd63981b7b43d50172e0f2acf"],["/payment/index.html","354a928664953e5df2fefb95672286ef"],["/privacy-policy/index.html","1e1a87c8b808e0bc680765124fc9fafa"],["/rss2.xml","91f7899370a23c50b64a53bb32827f96"],["/search.xml","90e90f06a9dc2fc25165e0223edd1112"],["/sitemap.xml","2223bcbcf35c7dd54b9e234ba1908bc4"],["/sw-register.js","331b39d86c59d7770976bf450e2fdadb"],["/tags/5t/index.html","d9af8000e23a7b87e18985240034de13"],["/tags/Bing/index.html","9f3619304d43fb91b90884ee71e35637"],["/tags/Clash/index.html","6a9323d2522a15055ecc60ce1b156771"],["/tags/Clover/index.html","0856ea2ba4ede69e0fba48071d311e74"],["/tags/E5/index.html","1f6d934a3e3bfc89fabe373cc666a418"],["/tags/FTP/index.html","7805a60489db75a02090c7796d08badc"],["/tags/GitHub/index.html","1263ec86fe58ee709fedc039f3b21f7b"],["/tags/Heroku/index.html","7df039f43e0d2b5ab239ba8c6e0a9bda"],["/tags/Hexo/index.html","6750c04db4cb759c908149e978ee074d"],["/tags/Lenovo/index.html","88e0e5b04c30d35a933858bc35a635fd"],["/tags/Oneindex/index.html","02a8911a3ddfb12009e91091946cb2ec"],["/tags/QQ/index.html","d60f28d620afd3b8f7fd036f1b67194c"],["/tags/QTTabbar/index.html","09dfd350aff087dc7e55c0186ebc9bec"],["/tags/RX文件管理器/index.html","176e34eafba2d83caa20a4244cec495a"],["/tags/Todesk/index.html","d94e6d4f0f385496fed9c5a170189407"],["/tags/Vercel/index.html","9ed9b024823720f7df48a06a4e683db7"],["/tags/ads/index.html","0641ff0eeffff5f634ff9a414215bfd9"],["/tags/api/index.html","4823916889b9326f49deb45e5e592ed1"],["/tags/app/index.html","046ee81d7d3a88f30ba61695408a4ffa"],["/tags/blacklist/index.html","a1648203f84b40f73c17c8b78f860edd"],["/tags/butterfly/index.html","f6ba272b95a49157e85fb655671779f7"],["/tags/chrome/index.html","d0142df9999775e66234591e53decf7a"],["/tags/clashx/index.html","155f91117db5ee39fae0dabace94edb1"],["/tags/cloudflare/index.html","05e5a78d280b6f0d98362f1ce8ecb2ff"],["/tags/cmd/index.html","25558a9a9e9d8fa6305382182d63fc5b"],["/tags/c盘/index.html","20569d19ebc48d73638cba49e82d58df"],["/tags/email/index.html","18b6240e716805fb262ea1a323c0d0bf"],["/tags/ewomail/index.html","aad2cf116a5cbc5d57d292b45ce210d4"],["/tags/fiddler/index.html","5cfefda3513027fede958c996ac04ac6"],["/tags/flags/index.html","d76d66f689fe97128c6c22c363f5d1e3"],["/tags/footer，页脚/index.html","d84c34a4a4f44f708bda3cd2c15f9339"],["/tags/galgame/index.html","66dcc811360c8dac462d23e317a33ba0"],["/tags/git/index.html","b5b2b4376838893a54d20e400dc6e4f9"],["/tags/gitcalendar/index.html","f93c3b760f9891d6ff816cef152d5458"],["/tags/google-voice/index.html","8ac0fcef16d262d2f6de15878190d21f"],["/tags/gv/index.html","5ec587e822decd7519365231cc1f8f81"],["/tags/html/index.html","38f8f6c8dec3bf424d52a0cbc2fc3eb3"],["/tags/index-1.html","23f5075fad3b0e9928264d26224c1a35"],["/tags/index.html","3aa07cebbff648393c22fe773b09a80b"],["/tags/js/index.html","71428c4e2f5c31a7233acd6f5b1475a3"],["/tags/jsdelivr/index.html","d2d80d7c2272adf4be58a2a176084526"],["/tags/linux/index.html","7e63a09af1238543ca1782c2df0264b5"],["/tags/macos/index.html","d6699a61d6016b54730d7cb995280df4"],["/tags/madVR/index.html","6ac724947b8e3037356e866a24ad82d0"],["/tags/markdown/index.html","b228777f96fcc47d188203688a5be4fd"],["/tags/maya/index.html","595584563217e07d7c4e55384920ae05"],["/tags/mklink/index.html","426ba6d90708fff8896738272c54e3de"],["/tags/office-e5/index.html","5a786f1734a867678bd4bf09bf4bbd56"],["/tags/onedrive/index.html","059a9b369aec8cdb3fbe4841be1fcd3c"],["/tags/picGO/index.html","734bac8b76b52a593dead073083fa311"],["/tags/pixiv/index.html","c28abd2c28afa0ea541398e7eba6aad2"],["/tags/potplayer/index.html","5332270013de128fb90d9f95eb2d588e"],["/tags/proxypool/index.html","5cb9e77ec468ade462d96cb4f4210387"],["/tags/qbitorrent/index.html","dd3e109a1e1e06cfc21f3d23c6d17603"],["/tags/raidrive/index.html","a1c75b26fd45b09993410247dc5ad8db"],["/tags/screen/index.html","5184b4740d74ca47b7e48f42e3252faf"],["/tags/speedtest/index.html","840d00cfc8d8c4184bdfeb4cfced26e0"],["/tags/ss/index.html","1b40c9f2728b1306490ab3b473bb401d"],["/tags/ssr/index.html","ae15200c430d73416e4fa751a74b375b"],["/tags/stickers/index.html","bb90314eb28671c1b28aadfdfc8ea6c4"],["/tags/surfboard/index.html","9d0c0aa69fa8b9bca3003275dcce2603"],["/tags/tap/index.html","18d5eb951c0a166a96569c6292a9b6d2"],["/tags/telegram/index.html","1874ca90143a1ab580b09c15449bd14f"],["/tags/telegram代理/index.html","481e024e6d83ccb3f14feb172efe6af5"],["/tags/tg/index.html","65a03b34319084171c28ed5020dfe749"],["/tags/tg代理/index.html","4ca8a13dfb78d7b4c4d97ed0ad0857f4"],["/tags/top50/index.html","93bdfe032c5eef41af8bc369382dc365"],["/tags/tracker/index.html","d7dc9543c58ea130121dd95cae442cb4"],["/tags/translate/index.html","e334a86fc55f5e96096d15aa39bbd824"],["/tags/translater/index.html","a4301ff6b6ef9b89eabdf5f0a0fff475"],["/tags/tun/index.html","fa06b3f89ffbaf07d7ecb72e772fa31f"],["/tags/typecho/index.html","9bbd0fd2d539667b660cb3cb86ff1365"],["/tags/v2ray/index.html","a05ac22873bbda06d60c79fde7d8a9ed"],["/tags/vpn/index.html","ba19e493a30b2db67b7d1df0b0d49d47"],["/tags/vps/index.html","a1d7ec37ed88faecd2d5f1ea7a004a07"],["/tags/wallpaper/index.html","dea6088f76b9a0da22931ed3cc81c6cf"],["/tags/windows/index.html","60a66cae5044e46a09e37bc28c690de7"],["/tags/windows端/index.html","d290cceb6d0e847ba411f29f9da4d6b5"],["/tags/xray/index.html","79c695a2759991dd73d77f8f20d99216"],["/tags/下载/index.html","98f537249a2dd56ed0166ad9f8a46279"],["/tags/不限速/index.html","e74b25d827e32645353ab6742728d56b"],["/tags/个人网盘/index.html","2a1de45527a59266bc96615f7eebd00d"],["/tags/主题/index.html","e920cd78dbb43b3cb5e12008ed8916ef"],["/tags/二维码/index.html","50f1163af6f9069acb980539403db6cc"],["/tags/云便签/index.html","13141b039be7c00a4e5eb307ea10fac1"],["/tags/云盘/index.html","1d617a53f97a578e2b916b770d0e6418"],["/tags/人人/index.html","3412a05e6a53bbd83007ee95ebadfb1b"],["/tags/代理/index.html","8f4d49c23bafe02b1751ee43885f71d8"],["/tags/代码/index.html","5f9a778532b7653ebf132e03a359dc76"],["/tags/优选IP/index.html","372ab3a17ea23c323fec069fd58345b2"],["/tags/便签/index.html","f7f5da41205de12012b2b780d5de8e82"],["/tags/保号/index.html","d78083cdb690110c7c5bc05f73e50d0b"],["/tags/免费/index.html","685bf8c219a1361e888a3fd41dd01019"],["/tags/免费节点/index.html","1386fefbca69e907f14371e8d46faefc"],["/tags/加密/index.html","26148d2d297a691fa4aa63c740564722"],["/tags/动画/index.html","04dee1d012f489915d8c3853be49f729"],["/tags/博客/index.html","7d4528001c6b0a8bbb837838fe49f105"],["/tags/历史记录/index.html","fb538b7044c397a569a5e98bef78b250"],["/tags/压力/index.html","702af80548bbee32d67c81e1bd6b5319"],["/tags/压缩包/index.html","b5a53e14471fcbb830ecc6d7df8bf9dc"],["/tags/反代/index.html","ac832fa279965b9946e08f46c78a0111"],["/tags/可视化/index.html","db378305eb4a9f5650f6052a984d74ac"],["/tags/命令/index.html","b3f6442a969b806e5f5327b63456dcbd"],["/tags/国家/index.html","df090f218955c19775698d7736501303"],["/tags/图床/index.html","e8d5b63a3344171ca824bad62746e90e"],["/tags/图片/index.html","0857a9d1caf1367c23f544feb5faa669"],["/tags/域名/index.html","1dadcd32db4e0934b650d0cf4e379d43"],["/tags/壁纸/index.html","a7937c5573d0e145db21c63f86da5826"],["/tags/多标签/index.html","8808b5983fd76886a2c4e6e32ffd2beb"],["/tags/存储/index.html","af4fac19bf5dda4d00f31b4b29d28380"],["/tags/学习/index.html","a7d695d56becc127835856d3e3bc53b8"],["/tags/安全/index.html","3f025afeab2f7dfb694722298dd0bf7f"],["/tags/安卓/index.html","4a430489c8e0e58f74d4937dca84995c"],["/tags/宝塔/index.html","1d7249bed43388eebe3017e45db418c5"],["/tags/小游戏/index.html","138f33f291908da1ff676a6149620838"],["/tags/广告/index.html","ed8df4d2d778ddf47d33f7b4778cd344"],["/tags/建站/index.html","249fadf3973605ef29aa228c88e0f4ba"],["/tags/影视/index.html","109a198ce3565e0708a06d613ec1cfeb"],["/tags/微信/index.html","d69039eb5533c8c6b3235c2103e25161"],["/tags/快速启动/index.html","bab520ffef5f92e8abd26f2b3af65972"],["/tags/手机/index.html","d0ed28fe4bac809ff0c4ec68f430e5fa"],["/tags/托管/index.html","8ade89f6678446f8016210e89910f089"],["/tags/抓包/index.html","08535d6d7de3d52436c8d8b31ca0d8f0"],["/tags/抓取/index.html","d6b9631c5d9ea5b37128563b4db60385"],["/tags/投屏/index.html","ba35062966ee411b3c4af4033520a943"],["/tags/拓展功能/index.html","dd4dc7eb9dc8303c265fa5147b82bd83"],["/tags/挂载/index.html","b3537a8662c185770da8da11d97d741e"],["/tags/指纹/index.html","d68466e5a917fd4c318a63346c2881cc"],["/tags/接口/index.html","ab62836ea8b82c96ea5ae2a3b6c5dd4a"],["/tags/提取图片/index.html","e6889105622c6d8225df834b98e64253"],["/tags/插件/index.html","c113eff9183d0b5f04b3a686d3cbac49"],["/tags/搜图/index.html","d9abd416fab1e287724c67943fc233bb"],["/tags/搭建/index.html","3a7eb679499a3e3a562a805508c8978a"],["/tags/撤回/index.html","c2fa4897572c38bd26740b3cf5bed233"],["/tags/播放器/index.html","97c713b5c64fadc398315481b2ac449d"],["/tags/支付宝/index.html","8b6737123918b3c7451d4cc58809f17f"],["/tags/政府网站/index.html","07d7fa3865019d7b0e3b4fad1ca186a5"],["/tags/效率/index.html","587ee4eb0330e0e67b23bc8a0a3cdb63"],["/tags/日历/index.html","1a2be0c90c0f8f05392372623f7f8e7b"],["/tags/服务器/index.html","4f833e3de5daecada0a23365f4349bce"],["/tags/机场/index.html","c77b9216aed9cebc805b8f5eec4eca6a"],["/tags/桌面/index.html","14f3766312f10cbf9f5c44d5a6dcedf1"],["/tags/梯子/index.html","6bdb099a20c703c64904f479f5a1f320"],["/tags/检测工具/index.html","3226e4346c58ffe0f8b5bd48b18b6372"],["/tags/汉化/index.html","9eeabc184635fc5a3a764751b48fd142"],["/tags/测压/index.html","3c0ac79cdeac93a8c2b0f505c20fc4f4"],["/tags/测速/index.html","cc7b530b771f7d4bb5251bcd50bcc8f1"],["/tags/浏览器/index.html","be5c06d12e93c8bf554088c460457e71"],["/tags/清理/index.html","00bb59d9a423ed66aee7eb121a8d86fb"],["/tags/滚动条/index.html","1bc194ae6ffbbd97826ec3e2c464a1bc"],["/tags/灰色歌曲/index.html","a0e5a3ea3c6a93a2b59e8a9d66b8d54d"],["/tags/电影/index.html","bc9c97934976d12c6758f495698e3dee"],["/tags/电视剧/index.html","fb74b1e2e798ce6754e3f3f9f4dfa37a"],["/tags/白嫖/index.html","53c2d0a0c7759553a31157d0f546fcd4"],["/tags/百度/index.html","8440125a81789c89ef1efa023949ee48"],["/tags/百度云盘/index.html","14d92aeccdb128a6160684830fa675ee"],["/tags/百科/index.html","f555324f63d20183abddd7938bb8ff9f"],["/tags/短信/index.html","30d9eaf33a90ccf2dbe281c9d53e0afb"],["/tags/硬件/index.html","07c41e58c910475d686af01efdab8f8a"],["/tags/科学上网/index.html","878897b25dac802ca795a338b5b2cc93"],["/tags/空间/index.html","e8a7cd1cd11404be2341517371ea9bc4"],["/tags/笔记/index.html","31cedb91f067475493ee224d3ef1f984"],["/tags/简洁/index.html","0bb3b9185eb6ea0073bc951bf99bc77d"],["/tags/简约/index.html","63a7435d96fae8f758cf50fe9cbb74cf"],["/tags/维基/index.html","6cfd715f97b00a55f41b3c585ca3c839"],["/tags/网易云/index.html","06f2a15d7eda43ce150c903482fbdaae"],["/tags/网盘/index.html","92693e852fa10b405b09b74db493a0ce"],["/tags/网站/index.html","010ef519950c3d8ad0dda08fa5d25dd6"],["/tags/网络/index.html","40b15d25605a34a89fbe15eac75c8786"],["/tags/美化/index.html","1f092d531868e25b3b4de4056f920c64"],["/tags/翻墙/index.html","1c5856f82f34674d18fe90754eefa82e"],["/tags/翻译/index.html","33c1ef02e5141def58719d42441a8db1"],["/tags/翻译器/index.html","9feeb38a94fae8a1802ea9d2986ceded"],["/tags/聊天/index.html","dd55666e07dae13662d589719862e9e4"],["/tags/聊天室/index.html","aed1f28099ea1a00de56bc6c7215f967"],["/tags/联想/index.html","d2a81b90fbba0ef4037179f9bf004dc9"],["/tags/节点/index.html","9cb0aae0e8f5dcb460375ecc47ecdf4e"],["/tags/虚拟手机号/index.html","db843e059d47504e9486d155ab69a546"],["/tags/补丁/index.html","78c3f9aeaa4a09c4f0192b960646f70d"],["/tags/表情包/index.html","f620821df135edba90ae56aa539602d4"],["/tags/视频/index.html","4a767254769c90232774496de54620e2"],["/tags/解析/index.html","c577b95d7c454cc466c5a86f1b669deb"],["/tags/订阅链接/index.html","f34994eb107effb122f11dab1ee492d8"],["/tags/记录/index.html","d91d210ba6a2626fefb51ae7b5d2c9bd"],["/tags/识图/index.html","55ef6328a9e0acad27ffc2ce76a2820d"],["/tags/语言/index.html","956e2108de3a30239f492aa01fa00a5b"],["/tags/资源/index.html","630407949290f6bc92f0fd1abd0cf303"],["/tags/资源管理器/index.html","2419dc2cea889cd78f94f75b3c27fb9e"],["/tags/转移/index.html","e54fc87f30c8819d179f8f2753f026b9"],["/tags/软件/index.html","ebf8c7dbac2ff4ce05673c7291e843bb"],["/tags/轰炸/index.html","a7e0caac60d1bc9f396e1f6677d12e7c"],["/tags/迁移/index.html","0649a5040b2ec94cbb70ddc0c51238b8"],["/tags/远程控制/index.html","b8238de39ae78a2b0260cc30d0d7ad9b"],["/tags/连接/index.html","fed130cac228e68d3996a12740d86b0a"],["/tags/追踪/index.html","099b5939054b972a7e4ecf70c659601e"],["/tags/速度/index.html","23110fe1e9b5604b40efa60cd76e3c04"],["/tags/邮箱/index.html","68fc8625cc6a6f259a499036591d53cf"],["/tags/酷炫/index.html","8e9ef77788e644c8efdc2e41cb188970"],["/tags/钓鱼/index.html","1d6c9dbec50fe5bab0fb4f98919c8afc"],["/tags/镜像/index.html","7cbe5a947ff70bec781ca75046a49f2c"],["/tags/随机/index.html","ab805412b31db9e72056a45cba5971c1"],["/tags/隐藏/index.html","33c74a997183c0eb82ba64fbaf65e938"],["/tags/面板/index.html","ffb821aacc8eaa9b318dc114dc35e0a3"],["/tags/音乐/index.html","d362be47dc44e2a453412953065dc9c1"],["/tags/高颜值/index.html","7f223cacaf8db9871cfb71872ddd6068"],["/tags/魔改/index.html","3f011c043eb4298773b4365cda3808da"],["/tags/黑名单/index.html","6a3195dea39ad9ca82d261d3fd47218b"],["/urls/index.html","23cb69ab7eebf420c15e3ee1ff99e426"],["/vps/index.html","4cbcc282f7252e6a2773d9b75fe0262b"],["/支持/index.html","3296826f44984a6126512ab9070f94dd"]];
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
