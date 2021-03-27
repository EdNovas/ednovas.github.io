/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","caa9c40ff69234ed7febbb91ec50a960"],["/2020/11/29/clash-windows/index.html","c5677937373af95394e0ba634ab8fc8b"],["/2020/11/30/websites2/index.html","3abd1174e473b99ab57851591ef7b074"],["/2020/12/04/iphone4s/index.html","236d79e3fd853c13d8b1b03d4751790f"],["/2020/12/04/onenote/index.html","c4ae91c0e681370609f1628282c67ab4"],["/2020/12/04/wesites1/index.html","c69fb306aa076a69c0e1314e4cbb8ab5"],["/2020/12/06/nokia808/index.html","2c7511fb48214de337760302ec8e2252"],["/2020/12/07/ipad1/index.html","cddafc24d654edf6cf139d6a195065d5"],["/2020/12/18/freesubscribes/index.html","82259154a525161891b86ec2efa1a3fd"],["/2020/12/19/musics/index.html","fe160b066fd5f35118982970d2182ccc"],["/2020/12/19/shadowrocket/index.html","2fff0d9b922e371dbaa2fb6f15ebd433"],["/2020/12/19/v2ray-windows/index.html","21e731ed422b974492eac7effadbc517"],["/2020/12/19/v2rayng/index.html","d434e378d3870d1e59960fd4d9f9775c"],["/2020/12/20/beoplay/index.html","02ce32dec44e382406c1638db0ae1690"],["/2020/12/20/订阅链接转换/index.html","c5a6a02e1dba2968d3168ed61e899d18"],["/2020/12/21/chrome浏览器下载提速/index.html","4adce11ab768d6ddb51d2251b333a0e5"],["/2020/12/21/免费128线程并发下载xdown/index.html","8531b06fbe0743170a5075aed0b1e672"],["/2020/12/21/免费32线程下载软件ndm/index.html","7c26caf4e135763e0bd9c1acdac9793f"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e5ef6a154ed616a4e5b2ca71be32d46f"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","91d7a90b8de8558de56decf4b01097b5"],["/2020/12/21/广告怎么知道我在想什么/index.html","0e0f14f96e12991263a3391af0de9271"],["/2020/12/21/无名·引子（小说试写）/index.html","cde326a820de939ceb43e7cb8c280230"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","a36cfa0ceb7f96bd768361186b08f7c2"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","733a609fbc22aba68be8dded985dd661"],["/2020/12/21/高速轻量下载器aria2/index.html","eff786bc32d6db15951270e1443f9c53"],["/2020/12/22/2020-cee-roo/index.html","73d39e700ffb7828a5245f75536041c1"],["/2020/12/22/firefox插件、github、steam富强/index.html","00a9b0b4b1a1ab73414d1a8f53614387"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","6ce0b560adf07d755b680f0b50b3194b"],["/2020/12/26/python-day-1/index.html","99be2d93c05f3e5dfc290a37beed544c"],["/2020/12/26/python-day-2/index.html","e5abba35dde7496e4e0857b08ad6f076"],["/2020/12/26/度盘不限速下载方式一赏/index.html","937e0460607796ed16d3be9f143b352c"],["/2020/12/26/添加开机自启软件/index.html","02362e3619fe44415447f74d50757293"],["/2020/12/26/电脑端截图方式一赏/index.html","979869081327724ab4199627483ea8ed"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","96e1ea401339fdac6b9180eeca227f71"],["/2020/12/27/最安全的浏览器tor/index.html","a893c0edd6a0702601e95ba084999147"],["/2020/12/27/网易云刷等级和听歌数量/index.html","95f1fb9b06bf0a05d73cc7d53629613b"],["/2020/12/28/freenom申请免费域名/index.html","7f1fa6d50874fa125584a778b550674f"],["/2020/12/31/机场/index.html","3ac281d55f300a690fdf99a1299dc2da"],["/2021/01/01/M1/index.html","1eb037ea177192d97a24e9a3e5b64554"],["/2021/01/01/compress/index.html","22a76433507a445010761eae8bf74421"],["/2021/01/01/infinityfree/index.html","4b028a4ce892aeb489689f198aa21106"],["/2021/01/01/硬核翻墙/index.html","c5cc32fa42bf6e772ae8484827bf8c10"],["/2021/01/02/qq/index.html","c56b778a189afc51a560eb6bb28c4010"],["/2021/01/03/netch/index.html","4f7ecf169ee75c4bd985dcf26fcd3e7c"],["/2021/01/03/waifu2x/index.html","68b748a11cb52e8e18a411944b8c3caa"],["/2021/01/04/ads/index.html","d5e2a5c1070143fdbc28311c705016cd"],["/2021/01/04/games/index.html","15ef852d0922debd039a7ee0ba904cf1"],["/2021/01/04/heroku/index.html","e3170b58c4b6b47a3ed7bd418a7efb9a"],["/2021/01/06/movies/index.html","cc64a4a45fbd031ee1ee5ed47a4fa835"],["/2021/01/07/google2020/index.html","1809d1c79f85384d68e61b82bde2f862"],["/2021/01/07/lucky/index.html","b6c81007465f87ea72f27b99c0ff5533"],["/2021/01/07/spotify/index.html","f3fcafc08de71a2df6a2c80ef0c43cc2"],["/2021/01/07/thunder/index.html","bd79f1e3281c438e61226e1e5d02931b"],["/2021/01/08/adguardhome/index.html","970f06b1bc6e459bcacad1e15e876ea1"],["/2021/01/10/IBM/index.html","87945bac8049c037a35048732044310d"],["/2021/01/10/potplayer/index.html","1437ded044f3f8753b65a460fb7b98fa"],["/2021/01/10/sakuraanime/index.html","a82c69423be98b55e35303c2254e81f7"],["/2021/01/10/美剧星球/index.html","b25ce2960f79e503ad603790d3b18b11"],["/2021/01/12/telegraph/index.html","40dae92d14e51f5b09c4008a553417a1"],["/2021/01/14/comics/index.html","0c4ad7a74a969b28dc8609bfe7f29ecc"],["/2021/01/14/ftp/index.html","bf698d6e1760832d0de4e57edf2184af"],["/2021/01/14/oraclecloud/index.html","695e4f67f266a2d5a19eb772c0bc6f69"],["/2021/01/14/porkbun/index.html","03e291cbd38b8cabd0c76899bfb2ea86"],["/2021/01/14/powertoys/index.html","23e7a7c8e9cead28f9eef700ac18e1be"],["/2021/01/14/taptap/index.html","dfdbaa47139f406c2cd983b7123af47b"],["/2021/01/14/ubuntuvsftp/index.html","09b9859a28ec40444ea654a802cd024c"],["/2021/01/14/小说/index.html","602e329e5cd5cd308e62757c4b1bc1ab"],["/2021/01/15/freeproxies/index.html","834c5f4bd7236bea65da99db0655e9eb"],["/2021/01/15/incaseformat/index.html","d98b3131db7a8eb451ad3647558fc669"],["/2021/01/16/euserv/index.html","c69be090f5101cead6bd3ca091bf158c"],["/2021/01/16/winxray/index.html","dda9cd198bc1c27a17b0a409cbba65ac"],["/2021/01/18/qqreadhistory/index.html","f6a68b3b5dcefc0b9286c5d04cf525f8"],["/2021/01/18/qqrevoke/index.html","ba207c0516262de9af6cec6e9af3bd03"],["/2021/01/19/freevpn/index.html","9420b7f64fc0490c264154ccfbc1c0b7"],["/2021/01/20/browsertrack/index.html","6386225be155b6e85c1198b1a92d3646"],["/2021/01/20/v2ui/index.html","adcd6e2b5d9ab7c8d4db07b794e51b5f"],["/2021/01/21/failedtoconnect/index.html","32ccb199f8d49457a9ce8cf137fb06d1"],["/2021/01/21/gitcalendar/index.html","0b2c0617e05b464ba0eb212da7c3ec12"],["/2021/01/21/markdownformat/index.html","05495d903499bef645c19eeb3a4ccfac"],["/2021/01/21/markdowntable/index.html","35749a64dec63fef3fbfafc5d1da700e"],["/2021/01/21/vercel/index.html","73068143f00d8e7b0d6a835944757968"],["/2021/01/22/hardware/index.html","12ed199291138bdbb22e43f770e5c366"],["/2021/01/22/muviz/index.html","3d9ad6cbbf8a6cad6a50df821823b51f"],["/2021/01/22/randomapi/index.html","19479fbc5c9fe312e9f8e04168d89c57"],["/2021/01/22/searchimages/index.html","cdbd30b4e98542a6e93c705b106a1757"],["/2021/01/23/RX文件管理器/index.html","46ea2d67a363a55a722d66ce19ff71b5"],["/2021/01/23/chromeflag/index.html","fde530f55628eb4a22ae9d308849836d"],["/2021/01/23/qttabbar/index.html","d13c5d6433a2f351392f5f56db18857b"],["/2021/01/24/githubspeedup/index.html","a5b3bcfd1de7db245ec105c24cb833f6"],["/2021/01/24/jsdelivr/index.html","7a8c768553356d1ff74056bd3e2b9d9d"],["/2021/01/25/note/index.html","78d165174fa39e145f5de0b5a75211b5"],["/2021/01/25/soul/index.html","dbcc83c2ba75a1e6123844605eb75706"],["/2021/01/26/herokuxray/index.html","c751f0503f52930e00bf15e819a3c32f"],["/2021/01/27/proxypool/index.html","c63a671967fc3e378dd476fad872e720"],["/2021/01/27/tracker/index.html","9d5bb1a6e7a5b82091ecb68c7d9e4496"],["/2021/01/30/pandownphp/index.html","4d1e9accc5e1d1114aa2cbd075f144f1"],["/2021/01/31/newgroup/index.html","0a7d44620aa1814b9a3eac9fca8e8e1e"],["/2021/02/01/clashlanguage/index.html","78d445eb3d15d9ad5af215f68710a72f"],["/2021/02/01/encrypt/index.html","c78751cee27c0000126b3a82d4e62047"],["/2021/02/01/footermotion/index.html","5e34d56972dde35341c47974f886bc96"],["/2021/02/01/gitter/index.html","a4c697b905f9d6df50cbaf95803901b1"],["/2021/02/01/pixivtop50/index.html","0657d3867f99641038bdcb1762354e62"],["/2021/02/01/scrollbar/index.html","6b6da789a23c8399af85eb2ae63cca70"],["/2021/02/02/clover/index.html","c821869f180872801a197c25cd5de243"],["/2021/02/02/maya/index.html","d730cfce3a3190d1bb4d6c1f61ba3f3c"],["/2021/02/02/speedcontroller/index.html","015707881ca545aa06ec4eb14d3f9ef9"],["/2021/02/02/yesmusicplayer/index.html","8aed2848ca41b9e1770a3c66490305e6"],["/2021/02/03/lenovoonelite/index.html","f427a46e4b2fc156ea00bf7bee0cbb97"],["/2021/02/03/skipads/index.html","876f29ca484d12bcaeb1410e0716a22f"],["/2021/02/04/picseed/index.html","a38292866013cf6fe98931e998e0c73a"],["/2021/02/04/renren/index.html","f5a25a194c178ffedbde8985b827bae6"],["/2021/02/04/serverstress/index.html","8a4706468f189049c72f4dda328df709"],["/2021/02/04/wikipediazh/index.html","0dac391c685a12b7797dbf372705f29d"],["/2021/02/05/googlevoice/index.html","41d154c0a0a0c28516816b525a5ece99"],["/2021/02/06/clashconnection/index.html","bc1555cf94d96c6df0b4371916af33c5"],["/2021/02/06/gvtransfer/index.html","834bd2c002b3b2bfd4a2c78d425d7653"],["/2021/02/06/todesk/index.html","52e61340d7e79c2563786c0670e7caa2"],["/2021/02/06/vpnblacklist/index.html","ae002f38b246517e98777b5254216ed2"],["/2021/02/07/mklink/index.html","403f79a97466b5afff63303ffbbd9f95"],["/2021/02/07/speedtest/index.html","933d5b0820e525824fb573ecfad49b4f"],["/2021/02/07/translate/index.html","69cbce3d9a2ff75bba957210ab5fbb56"],["/2021/02/08/ewomail/index.html","ca09f6e0ffbe0a82aa326d921bce204b"],["/2021/02/10/officee5/index.html","07733cc071c612a218f5673dd60769db"],["/2021/02/10/raidrive/index.html","32ec310734bbdeb6192450961c237438"],["/2021/02/13/e5sub/index.html","6d07894d87d2ec9834c7b078333dbe9f"],["/2021/02/14/screen/index.html","93beb923cca804ed55bb1d8d3d9d65c1"],["/2021/02/15/clashtun/index.html","d796fe8eccc855408a680660490ae28c"],["/2021/02/15/messageboom/index.html","2b16d4d7369184f0fda4590726f35dcd"],["/2021/02/15/oneindex/index.html","4a6808d7ef15c6f4b517dda30de725e0"],["/2021/02/16/govsites/index.html","b2b127835c73370e8016f05cb2531f93"],["/2021/02/17/hexototypecho/index.html","d08a85d1eded3031a2daa739f53a87b0"],["/2021/02/19/fiddler/index.html","99ddaec9b2f7a0bbd250ed196cd8d6ee"],["/2021/02/22/potplayerset/index.html","87bc734c83dd43bf837b3e990663ec3f"],["/2021/02/22/studyresource/index.html","b72724cba7aee5eac746076bae971fd2"],["/2021/02/22/telegram/index.html","61ff5e7c075312783bfd4ce7cc9c9b31"],["/2021/02/22/videos/index.html","493fce4da5a06fb8b535a0f3836da687"],["/2021/02/24/mtproxy/index.html","8598cad570ec3dd927c4ce244a536890"],["/2021/03/10/catchcat/index.html","f45aa11914b8750f01ff83d2ec000c47"],["/2021/03/10/neteasemusic/index.html","9199e3538ec6c8a4d9a2b03a988ea743"],["/2021/03/10/surfboard/index.html","0eefc936066b2a221795bb5878dba2aa"],["/2021/03/11/vpnandjc/index.html","447c4b085bfc39a54bc20996bb7e3a5f"],["/2021/03/12/qrcodes/index.html","950b6e8b97b6bd8fcfcc47dbf45cfa82"],["/2021/03/20/qv2ray/index.html","99ff5f2241168cbadb0403865fd3f5a9"],["/2021/03/22/freevps/index.html","beb14d222c9db6ab279139f98d2e3486"],["/2021/03/24/tgstickers/index.html","7dda32c52f51b14d463e13b9e2ba6976"],["/2021/03/25/clashx/index.html","28082b969211c7ef5867fdbb5e792736"],["/2021/03/26/bingwallpaper/index.html","41c68a606ca9b03bc3cf4bd88f5b0362"],["/404.html","b3f780022eb9458adc391bfe8ceb65b3"],["/archives/2020/11/index.html","1ad43f6adc5598238c980c6b20542ffd"],["/archives/2020/12/index.html","9499f1eac3eb0dd1ebad9c620efd5fc0"],["/archives/2020/12/page/2/index.html","74f9aef535a7ac451431704f00afa4ae"],["/archives/2020/12/page/3/index.html","408dce8f32129bcc80c0a1baffc60b2a"],["/archives/2020/index.html","321adad9e68a2d7646137c5881a0eecf"],["/archives/2020/page/2/index.html","16ea148af1b31ea1822914dc13058c0a"],["/archives/2020/page/3/index.html","1b9b5b915a6d2d78f3357851c9c8e681"],["/archives/2021/01/index.html","2c7f009b007076b2855caad5dc9f3ada"],["/archives/2021/01/page/2/index.html","aa3ba8c870a36382d0d9295ba3396efb"],["/archives/2021/01/page/3/index.html","6b79b26054627ab2cbcf6242c3fb677c"],["/archives/2021/01/page/4/index.html","cc7b4574623180e7c6204977fe5d2050"],["/archives/2021/02/index.html","24cbe4bb1b7e37b9943dfb8d874ae82c"],["/archives/2021/02/page/2/index.html","0d7632934411881b22cedc2223d80366"],["/archives/2021/02/page/3/index.html","1b82f9ffd08fd4ae03f22de63f4a2c64"],["/archives/2021/03/index.html","afaa48d63edf1484c649c075a4d824fe"],["/archives/2021/index.html","c24c292f6904015a02d52f41d1493efe"],["/archives/2021/page/2/index.html","4c99880856a701bdb4a522dc8ed33d6e"],["/archives/2021/page/3/index.html","b31621dfe73124456a38a2b67ee7a8f2"],["/archives/2021/page/4/index.html","ee8d937ecf3881f86d2bd66711967ba0"],["/archives/2021/page/5/index.html","bc3d813183974d1b743f6b2989771bc3"],["/archives/2021/page/6/index.html","a3de06346fffe5fd5d8b7e2b75f553e0"],["/archives/2021/page/7/index.html","430c806f65ab439ca77139991de15434"],["/archives/2021/page/8/index.html","dd9555e74e4b43fb97ab4774419c168a"],["/archives/index.html","010ebf147fd7af494b8ea378cb9eb797"],["/archives/page/10/index.html","7e00e303c03acef6f158b0ec023a5b5c"],["/archives/page/2/index.html","ab0bf76fe6a1b92d43ccc96e8b771423"],["/archives/page/3/index.html","5e7a803ac1e3d44f06cf6a715caa2f13"],["/archives/page/4/index.html","648d830385123c960b0953fa1ff77c4f"],["/archives/page/5/index.html","8ad22260ee3e9293432974da65c10247"],["/archives/page/6/index.html","a3aaa8555f730a8ef0d65f1f10097e10"],["/archives/page/7/index.html","d5db30a81195bae2cf0eb19d4f85cea5"],["/archives/page/8/index.html","2f864a38c57a0b7c959e78cfbcc34434"],["/archives/page/9/index.html","b6f1de9ef5b6713003f02389046dd3c8"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","da3ccd8221936bafb2c298aaf63417ac"],["/categories/index.html","4b8dd74214a684561542d11d61310490"],["/categories/下载/index.html","38077c87f22b9fe7b52a4d3828512dac"],["/categories/安全/index.html","32f8d99405a2bb390d5e48379103401b"],["/categories/建站/index.html","ccd28b4c86c285de7f01bdc42b6178dd"],["/categories/杂/index.html","8ae6b180fa9570fca15bd69a86dc8f26"],["/categories/杂/page/2/index.html","0e8fbd3fd2a0b1a757bc6b011f298ffe"],["/categories/测评/index.html","7c38df0ab114f57c1c4ab8d2cc82eb79"],["/categories/科学上网/index.html","f04573f6bfb5ead0606824d01e6b338d"],["/categories/科学上网/page/2/index.html","b874911d1a012f1545cbad328bfed46c"],["/categories/编程/index.html","e73513f64c86ed60cc98fc25609e1ade"],["/categories/网站/index.html","fca58643dd13235a6efbf5364eb7f6a1"],["/categories/网站/page/2/index.html","ffb1732a08265a40b13944eb37cb88de"],["/categories/软件/index.html","0dbf7334abe6c359cb8474564abd4dfa"],["/categories/软件/page/2/index.html","ee9d75a20279957c1125c43551312098"],["/categories/软件/page/3/index.html","e5756198494ef9ab2fc1830005054048"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","291dc1e7680fa0550ff7919354eed25c"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","752ddb20f5756bd163f2357768c5571d"],["/ios/index.html","9927d87a1bb34e968c4f970b951379de"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","055e7066fdd76baf166e0073e4ade9d1"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","14dcb61a4bd09bdd38dd3c165408a430"],["/page/2/index.html","525432ce83c4e53d74336ba93086f023"],["/page/3/index.html","97a525788eea36ba6ca37705c7d3e71c"],["/page/4/index.html","500c7185ba99244836b7365698b4f4db"],["/page/5/index.html","bd7e11560e71b0c6c7eba70b238f7157"],["/page/6/index.html","7fb9a30c2f3b71aad9cb1ec17769c664"],["/page/7/index.html","18ba61c6f15ab8991f2c08d019294d3e"],["/page/8/index.html","dcff712a8960154fa33eb1e74aa6a1cc"],["/page/9/index.html","fb5435cf66ed50accbc921f62798928d"],["/payment/index.html","1804c1bb27623e7fd20e1ec6ee2320c8"],["/privacy-policy/index.html","0441bc7582b225d9ad66d2a747e5d325"],["/rss2.xml","0552635f988f597eba992f9ffa664705"],["/search.xml","658c4e242ad51b60279ab19663d95917"],["/sitemap.xml","606744edbcb91f8f5067610c53248962"],["/sw-register.js","9aea2078588b2ebdf2fe59de48e24634"],["/tags/5t/index.html","bf14ceb93cd884d32922e590da1eb862"],["/tags/Bing/index.html","9ad7d46f22804f91e7306c329c7a8407"],["/tags/Clash/index.html","87d55315f62d5c3042727dfac85e2021"],["/tags/Clover/index.html","70d1a128797288536f86f205d3d88861"],["/tags/E5/index.html","64c9685a633bc2dd74332f3550a51145"],["/tags/FTP/index.html","efcc45be88609834743603c01d552993"],["/tags/GitHub/index.html","8bc1d0407ac18ee3a31d7bb62b4527bb"],["/tags/Heroku/index.html","a246dd8b617035c7245c2c5854c7c84c"],["/tags/Hexo/index.html","90a19f1ab750b22a18dadb6f37aa5874"],["/tags/Lenovo/index.html","04172d2f9d3fcec42ab9f78b0f685b64"],["/tags/Oneindex/index.html","34afab38e129a2beaac833773b215cc6"],["/tags/QQ/index.html","809793cf9f2d58e540a55d7ec3ae63e2"],["/tags/QTTabbar/index.html","cab7f6a52cb27da614698f5bfae11db2"],["/tags/RX文件管理器/index.html","d0e7a5eae019d5f03a2021c812ce6b9e"],["/tags/Todesk/index.html","44537bff4063a06b52eba360bde497d0"],["/tags/Vercel/index.html","ae5ed46ad56da1fad9f379f2bd3018f7"],["/tags/ads/index.html","971f313acc20d1b6cdb48e663c01c34f"],["/tags/api/index.html","d89650ae38331b25ff74c577b9f90b05"],["/tags/app/index.html","21f06714a263439cf64a559ab52188d9"],["/tags/blacklist/index.html","5f5c25ada153617c02191a2ee938671c"],["/tags/butterfly/index.html","1b3f52e0104a25b43521780018049bb3"],["/tags/chrome/index.html","8bc7d21a55c8060b3f9f75224d359969"],["/tags/clashx/index.html","1ef950e2758d350aaae74e27e869d70c"],["/tags/cloudflare/index.html","ef3a253dd2095fdd12705ecb05dc1687"],["/tags/cmd/index.html","47f5c99d50f7e15842ee9c1deada0eea"],["/tags/c盘/index.html","3cc370aee6b1d9040f6134af47129fcf"],["/tags/email/index.html","1db587ceb9afb10f2745726cbb28140f"],["/tags/ewomail/index.html","84cb2dd5e4a78ffa345069fdae38f722"],["/tags/fiddler/index.html","34102d0f092a8f91f2d10b724e2bd42d"],["/tags/flags/index.html","fcd827df828b1554a7ddd5514ac12f56"],["/tags/footer，页脚/index.html","d46c18796aff7a76047c075ef046418f"],["/tags/galgame/index.html","b028badd23fb358ab266c0f7dafe579c"],["/tags/git/index.html","5cf8bea43f1bb5766d7cbb647246e667"],["/tags/gitcalendar/index.html","2011660b89f4db9f44eb9b28519dbc5c"],["/tags/google-voice/index.html","886a67e57fb865c89dd0421d04a79507"],["/tags/gv/index.html","3e05f34594c4935069b26fced0307858"],["/tags/html/index.html","de26008c6d41b856fd2a237fbfce1374"],["/tags/index-1.html","08d369f045d4b11022d293ea4798b494"],["/tags/index.html","b331f5b15bc3a065af1629f7e205378c"],["/tags/js/index.html","75824efa80b2acd486d561336a8f0908"],["/tags/jsdelivr/index.html","741b91783a1f4bf4f6a0b4b7102b78d9"],["/tags/linux/index.html","f8d73441c3f89443581fe61b7ea0db8f"],["/tags/macos/index.html","d00164ac70815f884758da8edb5f77e4"],["/tags/madVR/index.html","cea1712cfd2ad65a5f0e93a2bdd91332"],["/tags/markdown/index.html","2a0f8951a7b77f86e489eb9b8dfa2aa6"],["/tags/maya/index.html","16eafc4d86c0b6d6b5dfb776d684c899"],["/tags/mklink/index.html","636279c26b87ee6ec1a1cf295e5c7654"],["/tags/office-e5/index.html","bf3f96049e2f2e28ece04f8b21375e6d"],["/tags/onedrive/index.html","70a3997afab9c7d3acfefdd9b48f957b"],["/tags/picGO/index.html","e7d2b07e1037121b3be06f226634f130"],["/tags/pixiv/index.html","46b95f604d7f34aab0411fe8fa814591"],["/tags/potplayer/index.html","b54f4329ef065bca3fa164d2bd096c59"],["/tags/proxypool/index.html","c507517872fdaf23fcd4a0227eb4638b"],["/tags/qbitorrent/index.html","ef980f810bfc07dd4b97d72544f0da17"],["/tags/raidrive/index.html","1896748fbb05dc3a21edae42f4c5e44b"],["/tags/screen/index.html","3fef60cc518072ec589bb1cea47fb66d"],["/tags/speedtest/index.html","1b0cfa48d1d36c21a221e007f6c9af3f"],["/tags/ss/index.html","f9ffdfb590954147f97a2a7e123a7f65"],["/tags/ssr/index.html","3a7a1aac181645c4637c13808a53428c"],["/tags/stickers/index.html","c7abdb9797f925a4e522da5f40b55d42"],["/tags/surfboard/index.html","6f77b1af40f891a6534dec1bfbe92d31"],["/tags/tap/index.html","0294d48d4e3e800d7e3c71b057dbdb32"],["/tags/telegram/index.html","9fb07ef204b3030e0a780355df023996"],["/tags/telegram代理/index.html","ead6ec1eb63642cf61a6eea8f747b883"],["/tags/tg/index.html","70ceceb062910971c3c5637853f5fae7"],["/tags/tg代理/index.html","61670ff4e3ade432e9169673020f72ae"],["/tags/top50/index.html","e0ebb868dee579e2f9e2dd6361c09c42"],["/tags/tracker/index.html","db3a6b2df28dfbf252b020ff6aa3f92d"],["/tags/translate/index.html","78e0a33582237140a2e74b61e6b90d65"],["/tags/translater/index.html","f49688ab2001a03ca48244f7fa9d57b1"],["/tags/tun/index.html","3eb29747b82fd11198a4f21d867cd2e2"],["/tags/typecho/index.html","10b41d38cd08013f36e548e2475e3dd2"],["/tags/v2ray/index.html","8a9f5cf4cee069bb26763a3e1325cbfa"],["/tags/vpn/index.html","878eca7b151a558843bbbeda3e88bb73"],["/tags/vps/index.html","71ccb347195c2507d49a89c9301a3c08"],["/tags/wallpaper/index.html","cd233f94e37c5515602fb2a4fd9013e0"],["/tags/windows/index.html","ad87e20c603d046cbcc4598b8001caf9"],["/tags/windows端/index.html","c1d6589cdc7e2927769be88e67af9de6"],["/tags/xray/index.html","59a807451e61692c869da4fef98e7a83"],["/tags/下载/index.html","0cd743c683b06002dbb5a35d7ad0a1cc"],["/tags/不限速/index.html","7e69aac11c1d8c15275ec174cffeae08"],["/tags/个人网盘/index.html","085e9bd124129a56378d8e92510d69ef"],["/tags/主题/index.html","8f74ea5ddefde0a1c94d1cbf223fde1f"],["/tags/二维码/index.html","582acbb55b3adac0b4b7717be0236322"],["/tags/云便签/index.html","eecea0716e6f2747ccc47eadebbc89ca"],["/tags/云盘/index.html","81eacee2a42d2930d8884e625de1555a"],["/tags/人人/index.html","ab58ee81b74133267c1a133aab506022"],["/tags/代理/index.html","c4629a8bfe97193241047e751a01a9be"],["/tags/代码/index.html","b9b4c8a7a015e0c76c235c7d0b95cedb"],["/tags/优选IP/index.html","09e977759c4fb3231a6501d352f42364"],["/tags/便签/index.html","99010b593caa8e1441a41d85ccaddd0f"],["/tags/保号/index.html","be02ae63c105fef3aafd2fcbdf16d2c2"],["/tags/免费/index.html","48989a4edd3f9d1d2f622a54be7944b7"],["/tags/免费节点/index.html","654e5ea797638327f93ddc7a5e360f6d"],["/tags/加密/index.html","13cf53e1202d2bcbd062a8b02d5ecb09"],["/tags/动画/index.html","bd99cbc1a8a7970b8682eb7940621296"],["/tags/博客/index.html","54a7a3e135164ab5f4872bec32d2830b"],["/tags/历史记录/index.html","5f749823fd64797f00e2eae0a0249097"],["/tags/压力/index.html","756de81cc3a7cd48827f969639c956cd"],["/tags/压缩包/index.html","c035845085ad15ebefe8e802d800a828"],["/tags/反代/index.html","1da059ad08089a64df02d24ded3bdd28"],["/tags/可视化/index.html","f43b1d06346b9583d3f99d1c8f98556e"],["/tags/命令/index.html","09920d72aa20ded1acd73add19f000ac"],["/tags/国家/index.html","94d22b898083ef5f30a007d4b5b1407d"],["/tags/图床/index.html","e901ae555b128318fafcc5469350fcdf"],["/tags/图片/index.html","030cdfa1900fc60148ba619aa80566eb"],["/tags/域名/index.html","49fe52d1601857ae638236d3d3e74a81"],["/tags/壁纸/index.html","eb904370b58fd6f6be7c92598eeccea2"],["/tags/多标签/index.html","3c2bcf615013e2aca15d64c3739e20b9"],["/tags/存储/index.html","c318b40e1556b7ab86684f0cc2494406"],["/tags/学习/index.html","2a23d374a114438ad8a28e615e24c9dd"],["/tags/安全/index.html","2a03fc97c3f205cb3ecad5148a7c3495"],["/tags/安卓/index.html","0e82d12bcbfe2b4ba3de39e81735a8a4"],["/tags/宝塔/index.html","63805ac2f1ef79ac796a89bde76363c4"],["/tags/小游戏/index.html","0664aff4f003fc8229e06cfd9aa92f41"],["/tags/广告/index.html","2b30fc404a7ddd0521a4409082ddacee"],["/tags/建站/index.html","6a900be9b0439b7186b6f0500d2eaa2a"],["/tags/影视/index.html","d34722efec5fcdfb691a6344468d967b"],["/tags/微信/index.html","91dffbfb1c16d0f91d208eaae6c70ae0"],["/tags/快速启动/index.html","145a7e3098ae7dbac81e439b85f16a51"],["/tags/手机/index.html","fafa8392e7df11b7dd01f055a6909bc1"],["/tags/托管/index.html","d85b23f000709a2e7981843108392c0c"],["/tags/抓包/index.html","43ad67f4c579a6227006a850bb57fbdf"],["/tags/抓取/index.html","e4ff78477ce5fdd6f43d41c417432d98"],["/tags/投屏/index.html","416faac79daca343cce4d84169eb1e7a"],["/tags/拓展功能/index.html","1ddf8e8fede22e376748cc639e440425"],["/tags/挂载/index.html","0a55fb5c745ec802f6aea729551d4a61"],["/tags/指纹/index.html","d1f5ea09632af4ff40912028955dab07"],["/tags/接口/index.html","2f1d1542cd6bf63f0ecee4254caa7682"],["/tags/提取图片/index.html","e6d9c812da8cb3dfe30419d3e23d5637"],["/tags/插件/index.html","4d954aeaba66b845134a2371755773ae"],["/tags/搜图/index.html","c8d7fb22a1a6237459bb2fdc275c63b8"],["/tags/搭建/index.html","71ba703fa31e39c4b3c317f81510ac91"],["/tags/撤回/index.html","a56f2ccfe9dc24a6e39e149b6d7a209a"],["/tags/播放器/index.html","dfd3010e3a912e829b45e3dea308d508"],["/tags/支付宝/index.html","864841f890a77f9c85d33f0db8381072"],["/tags/政府网站/index.html","ee19bcf1c8355b6a6011cc846560e5c7"],["/tags/效率/index.html","48bf9835e9cae30d0a3d78c6829c64c4"],["/tags/日历/index.html","eb68762ff628f222d387cdbc19f28918"],["/tags/服务器/index.html","b0be325f4e4afc088719ebc7437c0f7e"],["/tags/机场/index.html","5dd6c08145ca88913ac5ab99314c57da"],["/tags/桌面/index.html","beb79e2fb68bf0a25058223ace472b07"],["/tags/梯子/index.html","20283cb594616178dca92527f969294d"],["/tags/检测工具/index.html","0c8717c334432f9186678a91bea26cd7"],["/tags/汉化/index.html","da7b16c745016c227eb0f188db222663"],["/tags/测压/index.html","518c4c4595f6db296deb59c3c27d89c2"],["/tags/测速/index.html","dd91fd186fb6e773a7cec1ac0cab8753"],["/tags/浏览器/index.html","e0407f747fc214a0dfdefa7abe0f875b"],["/tags/清理/index.html","c326a0bec51ddf5b6a4a10901381796d"],["/tags/滚动条/index.html","a3170f90265a03dfdc93ba71838b06af"],["/tags/灰色歌曲/index.html","b21a219c915be15025917627bc3f6f2e"],["/tags/电影/index.html","cae46f8f94c4fd0067668688f74975a9"],["/tags/电视剧/index.html","f5ba38d1a3704634972830d9f2f0b675"],["/tags/白嫖/index.html","398cbc552516ee7bea8f0059c7b8eafe"],["/tags/百度/index.html","236e593318c521fbe80bb8128085ed9c"],["/tags/百度云盘/index.html","6107eb05f79954ac56db2f6446b413af"],["/tags/百科/index.html","530b53d2dc29482913b4525c143f44e7"],["/tags/短信/index.html","234e7260943ca09e4a49f6d41375702e"],["/tags/硬件/index.html","ea0a95b5f40fdfed7bd0edf9337fc822"],["/tags/科学上网/index.html","6b72568209d02292114ae85adbe116e2"],["/tags/空间/index.html","b0f4b7aace2183db97d9192e17f0817b"],["/tags/笔记/index.html","cd5957f0597cdcc7d454789ccd29a871"],["/tags/简洁/index.html","220916c69b8b01bab4c6f642a94c397f"],["/tags/简约/index.html","4e678da535b68e76dae3308fbcff8324"],["/tags/维基/index.html","ac039941e1de1d973c77c59363a99f6f"],["/tags/网易云/index.html","bffc8488c7db7c6940b2656b957eed91"],["/tags/网盘/index.html","df09b4e5ad9948270b63795fdc2521ce"],["/tags/网站/index.html","a1748584d6f6600ca5aea33fc8db06bf"],["/tags/网络/index.html","195593385a5c8d48f2ba75724849315c"],["/tags/美化/index.html","dce9752ae22f5cfdd7b6f0335f77b769"],["/tags/翻墙/index.html","69292fad2e7168601bfed51e6c1c96ed"],["/tags/翻译/index.html","2ee0046f7a30f8410885c8cef6b871c3"],["/tags/翻译器/index.html","fc3c51445399c398512d81ffbe0d99a3"],["/tags/聊天/index.html","27e727803e19a67f07620c1afe65ce81"],["/tags/聊天室/index.html","ab19ebce2fc36beaea805a1a4571a6d5"],["/tags/联想/index.html","03b7a61d75fbeeae24c2bd2d9890565b"],["/tags/节点/index.html","fd210c18087281162e3737fa0ff5a8da"],["/tags/虚拟手机号/index.html","2b6ece62cb954500393560c18d2d59de"],["/tags/补丁/index.html","050ea56d8e198c364e841bd46ee75fd6"],["/tags/表情包/index.html","742a9b5a7045e35cabe754baaf8a29b9"],["/tags/视频/index.html","c14f89657dc52aa314db46b499594481"],["/tags/解析/index.html","aa37474f74f7117827147f3a8aa3bd55"],["/tags/订阅链接/index.html","cb6b9da7f65079eeccb2bf6aeb89a895"],["/tags/记录/index.html","9a5033cfd977cc159aaa7e4846531abc"],["/tags/识图/index.html","89dac9bed9247246a50aa3b4007dbef9"],["/tags/语言/index.html","fc5100f6066ccc6204518f57a2308856"],["/tags/资源/index.html","958872d140983a3d7006f040d6bb418f"],["/tags/资源管理器/index.html","1d629f94c3fa24fb936fc915d7273f4f"],["/tags/转移/index.html","db760cf7754029d204bb234dd02d84fa"],["/tags/软件/index.html","eb23f3b6021abe2c5e0ab74d04a3d2e9"],["/tags/轰炸/index.html","c1d472fff30e267a03d7600d88bea735"],["/tags/迁移/index.html","326bf15fdff7cfd57322788a34e5e5f4"],["/tags/远程控制/index.html","6fa835614dd2d302325a13c5f3e8f136"],["/tags/连接/index.html","5fdf1ead36e749006022c93eab162f94"],["/tags/追踪/index.html","f04f736481c4305b213c337724825d2a"],["/tags/速度/index.html","cc1310b010ffd939e40a02988daf9548"],["/tags/邮箱/index.html","8cf22ceff3eba48c14443f816c8c7139"],["/tags/酷炫/index.html","26cbdf09f76f3d14b9cb4fcb138f0fa3"],["/tags/钓鱼/index.html","dfd085c14169a6914415065daeb1ac2d"],["/tags/镜像/index.html","48a43d869cc0c32628782ea855e9f44b"],["/tags/随机/index.html","d09a5f9653bf1839bf3d82f74279e479"],["/tags/隐藏/index.html","a5e9f27cf09109ed61bab378995b1139"],["/tags/面板/index.html","fcb5474897d6989f6d6ea2de835b20df"],["/tags/音乐/index.html","ad1c59eb2abd87d9c80ac47f1bef234a"],["/tags/高颜值/index.html","8da91199ff8bebc64ad28237a4a39821"],["/tags/魔改/index.html","696edad655ece0dead6ecd9cbb9d255d"],["/tags/黑名单/index.html","15f0a9521e3cb32502d947f200588e61"],["/urls/index.html","dceaa85d47742460958e28a9e0536a45"],["/vps/index.html","9c6ca25bf70f2f5d1ade343391aec0e6"],["/支持/index.html","5376af72f660131e70c3c3d4f1fe789f"]];
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
