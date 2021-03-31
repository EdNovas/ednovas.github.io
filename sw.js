/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","caa9c40ff69234ed7febbb91ec50a960"],["/2020/11/29/clash-windows/index.html","c5677937373af95394e0ba634ab8fc8b"],["/2020/11/30/websites2/index.html","3abd1174e473b99ab57851591ef7b074"],["/2020/12/04/iphone4s/index.html","236d79e3fd853c13d8b1b03d4751790f"],["/2020/12/04/onenote/index.html","c4ae91c0e681370609f1628282c67ab4"],["/2020/12/04/wesites1/index.html","c69fb306aa076a69c0e1314e4cbb8ab5"],["/2020/12/06/nokia808/index.html","2c7511fb48214de337760302ec8e2252"],["/2020/12/07/ipad1/index.html","cddafc24d654edf6cf139d6a195065d5"],["/2020/12/18/freesubscribes/index.html","c5518813daaad66d02447736eb87b03e"],["/2020/12/19/musics/index.html","fe160b066fd5f35118982970d2182ccc"],["/2020/12/19/shadowrocket/index.html","2fff0d9b922e371dbaa2fb6f15ebd433"],["/2020/12/19/v2ray-windows/index.html","21e731ed422b974492eac7effadbc517"],["/2020/12/19/v2rayng/index.html","d434e378d3870d1e59960fd4d9f9775c"],["/2020/12/20/beoplay/index.html","02ce32dec44e382406c1638db0ae1690"],["/2020/12/20/订阅链接转换/index.html","c5a6a02e1dba2968d3168ed61e899d18"],["/2020/12/21/chrome浏览器下载提速/index.html","4adce11ab768d6ddb51d2251b333a0e5"],["/2020/12/21/免费128线程并发下载xdown/index.html","8531b06fbe0743170a5075aed0b1e672"],["/2020/12/21/免费32线程下载软件ndm/index.html","7c26caf4e135763e0bd9c1acdac9793f"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e5ef6a154ed616a4e5b2ca71be32d46f"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","91d7a90b8de8558de56decf4b01097b5"],["/2020/12/21/广告怎么知道我在想什么/index.html","0e0f14f96e12991263a3391af0de9271"],["/2020/12/21/无名·引子（小说试写）/index.html","cde326a820de939ceb43e7cb8c280230"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","a36cfa0ceb7f96bd768361186b08f7c2"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","733a609fbc22aba68be8dded985dd661"],["/2020/12/21/高速轻量下载器aria2/index.html","eff786bc32d6db15951270e1443f9c53"],["/2020/12/22/2020-cee-roo/index.html","73d39e700ffb7828a5245f75536041c1"],["/2020/12/22/firefox插件、github、steam富强/index.html","00a9b0b4b1a1ab73414d1a8f53614387"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","6ce0b560adf07d755b680f0b50b3194b"],["/2020/12/26/python-day-1/index.html","99be2d93c05f3e5dfc290a37beed544c"],["/2020/12/26/python-day-2/index.html","e5abba35dde7496e4e0857b08ad6f076"],["/2020/12/26/度盘不限速下载方式一赏/index.html","937e0460607796ed16d3be9f143b352c"],["/2020/12/26/添加开机自启软件/index.html","02362e3619fe44415447f74d50757293"],["/2020/12/26/电脑端截图方式一赏/index.html","979869081327724ab4199627483ea8ed"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","96e1ea401339fdac6b9180eeca227f71"],["/2020/12/27/最安全的浏览器tor/index.html","a893c0edd6a0702601e95ba084999147"],["/2020/12/27/网易云刷等级和听歌数量/index.html","95f1fb9b06bf0a05d73cc7d53629613b"],["/2020/12/28/freenom申请免费域名/index.html","7f1fa6d50874fa125584a778b550674f"],["/2020/12/31/机场/index.html","3ac281d55f300a690fdf99a1299dc2da"],["/2021/01/01/M1/index.html","1eb037ea177192d97a24e9a3e5b64554"],["/2021/01/01/compress/index.html","22a76433507a445010761eae8bf74421"],["/2021/01/01/infinityfree/index.html","4b028a4ce892aeb489689f198aa21106"],["/2021/01/01/硬核翻墙/index.html","c5cc32fa42bf6e772ae8484827bf8c10"],["/2021/01/02/qq/index.html","c56b778a189afc51a560eb6bb28c4010"],["/2021/01/03/netch/index.html","4f7ecf169ee75c4bd985dcf26fcd3e7c"],["/2021/01/03/waifu2x/index.html","68b748a11cb52e8e18a411944b8c3caa"],["/2021/01/04/ads/index.html","d5e2a5c1070143fdbc28311c705016cd"],["/2021/01/04/games/index.html","15ef852d0922debd039a7ee0ba904cf1"],["/2021/01/04/heroku/index.html","e3170b58c4b6b47a3ed7bd418a7efb9a"],["/2021/01/06/movies/index.html","cc64a4a45fbd031ee1ee5ed47a4fa835"],["/2021/01/07/google2020/index.html","1809d1c79f85384d68e61b82bde2f862"],["/2021/01/07/lucky/index.html","b6c81007465f87ea72f27b99c0ff5533"],["/2021/01/07/spotify/index.html","f3fcafc08de71a2df6a2c80ef0c43cc2"],["/2021/01/07/thunder/index.html","bd79f1e3281c438e61226e1e5d02931b"],["/2021/01/08/adguardhome/index.html","970f06b1bc6e459bcacad1e15e876ea1"],["/2021/01/10/IBM/index.html","87945bac8049c037a35048732044310d"],["/2021/01/10/potplayer/index.html","1437ded044f3f8753b65a460fb7b98fa"],["/2021/01/10/sakuraanime/index.html","a82c69423be98b55e35303c2254e81f7"],["/2021/01/10/美剧星球/index.html","b25ce2960f79e503ad603790d3b18b11"],["/2021/01/12/telegraph/index.html","40dae92d14e51f5b09c4008a553417a1"],["/2021/01/14/comics/index.html","0c4ad7a74a969b28dc8609bfe7f29ecc"],["/2021/01/14/ftp/index.html","bf698d6e1760832d0de4e57edf2184af"],["/2021/01/14/oraclecloud/index.html","695e4f67f266a2d5a19eb772c0bc6f69"],["/2021/01/14/porkbun/index.html","03e291cbd38b8cabd0c76899bfb2ea86"],["/2021/01/14/powertoys/index.html","23e7a7c8e9cead28f9eef700ac18e1be"],["/2021/01/14/taptap/index.html","dfdbaa47139f406c2cd983b7123af47b"],["/2021/01/14/ubuntuvsftp/index.html","09b9859a28ec40444ea654a802cd024c"],["/2021/01/14/小说/index.html","602e329e5cd5cd308e62757c4b1bc1ab"],["/2021/01/15/freeproxies/index.html","834c5f4bd7236bea65da99db0655e9eb"],["/2021/01/15/incaseformat/index.html","d98b3131db7a8eb451ad3647558fc669"],["/2021/01/16/euserv/index.html","c69be090f5101cead6bd3ca091bf158c"],["/2021/01/16/winxray/index.html","dda9cd198bc1c27a17b0a409cbba65ac"],["/2021/01/18/qqreadhistory/index.html","f6a68b3b5dcefc0b9286c5d04cf525f8"],["/2021/01/18/qqrevoke/index.html","ba207c0516262de9af6cec6e9af3bd03"],["/2021/01/19/freevpn/index.html","9420b7f64fc0490c264154ccfbc1c0b7"],["/2021/01/20/browsertrack/index.html","6386225be155b6e85c1198b1a92d3646"],["/2021/01/20/v2ui/index.html","adcd6e2b5d9ab7c8d4db07b794e51b5f"],["/2021/01/21/failedtoconnect/index.html","32ccb199f8d49457a9ce8cf137fb06d1"],["/2021/01/21/gitcalendar/index.html","0b2c0617e05b464ba0eb212da7c3ec12"],["/2021/01/21/markdownformat/index.html","05495d903499bef645c19eeb3a4ccfac"],["/2021/01/21/markdowntable/index.html","35749a64dec63fef3fbfafc5d1da700e"],["/2021/01/21/vercel/index.html","73068143f00d8e7b0d6a835944757968"],["/2021/01/22/hardware/index.html","12ed199291138bdbb22e43f770e5c366"],["/2021/01/22/muviz/index.html","3d9ad6cbbf8a6cad6a50df821823b51f"],["/2021/01/22/randomapi/index.html","19479fbc5c9fe312e9f8e04168d89c57"],["/2021/01/22/searchimages/index.html","cdbd30b4e98542a6e93c705b106a1757"],["/2021/01/23/RX文件管理器/index.html","46ea2d67a363a55a722d66ce19ff71b5"],["/2021/01/23/chromeflag/index.html","fde530f55628eb4a22ae9d308849836d"],["/2021/01/23/qttabbar/index.html","d13c5d6433a2f351392f5f56db18857b"],["/2021/01/24/githubspeedup/index.html","a5b3bcfd1de7db245ec105c24cb833f6"],["/2021/01/24/jsdelivr/index.html","7a8c768553356d1ff74056bd3e2b9d9d"],["/2021/01/25/note/index.html","78d165174fa39e145f5de0b5a75211b5"],["/2021/01/25/soul/index.html","dbcc83c2ba75a1e6123844605eb75706"],["/2021/01/26/herokuxray/index.html","c751f0503f52930e00bf15e819a3c32f"],["/2021/01/27/proxypool/index.html","c63a671967fc3e378dd476fad872e720"],["/2021/01/27/tracker/index.html","9d5bb1a6e7a5b82091ecb68c7d9e4496"],["/2021/01/30/pandownphp/index.html","4d1e9accc5e1d1114aa2cbd075f144f1"],["/2021/01/31/newgroup/index.html","0a7d44620aa1814b9a3eac9fca8e8e1e"],["/2021/02/01/clashlanguage/index.html","78d445eb3d15d9ad5af215f68710a72f"],["/2021/02/01/encrypt/index.html","c78751cee27c0000126b3a82d4e62047"],["/2021/02/01/footermotion/index.html","5e34d56972dde35341c47974f886bc96"],["/2021/02/01/gitter/index.html","a4c697b905f9d6df50cbaf95803901b1"],["/2021/02/01/pixivtop50/index.html","0657d3867f99641038bdcb1762354e62"],["/2021/02/01/scrollbar/index.html","6b6da789a23c8399af85eb2ae63cca70"],["/2021/02/02/clover/index.html","c821869f180872801a197c25cd5de243"],["/2021/02/02/maya/index.html","d730cfce3a3190d1bb4d6c1f61ba3f3c"],["/2021/02/02/speedcontroller/index.html","015707881ca545aa06ec4eb14d3f9ef9"],["/2021/02/02/yesmusicplayer/index.html","8aed2848ca41b9e1770a3c66490305e6"],["/2021/02/03/lenovoonelite/index.html","f427a46e4b2fc156ea00bf7bee0cbb97"],["/2021/02/03/skipads/index.html","876f29ca484d12bcaeb1410e0716a22f"],["/2021/02/04/picseed/index.html","a38292866013cf6fe98931e998e0c73a"],["/2021/02/04/renren/index.html","f5a25a194c178ffedbde8985b827bae6"],["/2021/02/04/serverstress/index.html","8a4706468f189049c72f4dda328df709"],["/2021/02/04/wikipediazh/index.html","0dac391c685a12b7797dbf372705f29d"],["/2021/02/05/googlevoice/index.html","41d154c0a0a0c28516816b525a5ece99"],["/2021/02/06/clashconnection/index.html","bc1555cf94d96c6df0b4371916af33c5"],["/2021/02/06/gvtransfer/index.html","834bd2c002b3b2bfd4a2c78d425d7653"],["/2021/02/06/todesk/index.html","52e61340d7e79c2563786c0670e7caa2"],["/2021/02/06/vpnblacklist/index.html","ae002f38b246517e98777b5254216ed2"],["/2021/02/07/mklink/index.html","403f79a97466b5afff63303ffbbd9f95"],["/2021/02/07/speedtest/index.html","933d5b0820e525824fb573ecfad49b4f"],["/2021/02/07/translate/index.html","69cbce3d9a2ff75bba957210ab5fbb56"],["/2021/02/08/ewomail/index.html","ca09f6e0ffbe0a82aa326d921bce204b"],["/2021/02/10/officee5/index.html","07733cc071c612a218f5673dd60769db"],["/2021/02/10/raidrive/index.html","32ec310734bbdeb6192450961c237438"],["/2021/02/13/e5sub/index.html","6d07894d87d2ec9834c7b078333dbe9f"],["/2021/02/14/screen/index.html","93beb923cca804ed55bb1d8d3d9d65c1"],["/2021/02/15/clashtun/index.html","d796fe8eccc855408a680660490ae28c"],["/2021/02/15/messageboom/index.html","2b16d4d7369184f0fda4590726f35dcd"],["/2021/02/15/oneindex/index.html","4a6808d7ef15c6f4b517dda30de725e0"],["/2021/02/16/govsites/index.html","b2b127835c73370e8016f05cb2531f93"],["/2021/02/17/hexototypecho/index.html","d08a85d1eded3031a2daa739f53a87b0"],["/2021/02/19/fiddler/index.html","99ddaec9b2f7a0bbd250ed196cd8d6ee"],["/2021/02/22/potplayerset/index.html","87bc734c83dd43bf837b3e990663ec3f"],["/2021/02/22/studyresource/index.html","b72724cba7aee5eac746076bae971fd2"],["/2021/02/22/telegram/index.html","61ff5e7c075312783bfd4ce7cc9c9b31"],["/2021/02/22/videos/index.html","493fce4da5a06fb8b535a0f3836da687"],["/2021/02/24/mtproxy/index.html","8598cad570ec3dd927c4ce244a536890"],["/2021/03/10/catchcat/index.html","f45aa11914b8750f01ff83d2ec000c47"],["/2021/03/10/neteasemusic/index.html","9199e3538ec6c8a4d9a2b03a988ea743"],["/2021/03/10/surfboard/index.html","0eefc936066b2a221795bb5878dba2aa"],["/2021/03/11/vpnandjc/index.html","447c4b085bfc39a54bc20996bb7e3a5f"],["/2021/03/12/qrcodes/index.html","950b6e8b97b6bd8fcfcc47dbf45cfa82"],["/2021/03/20/qv2ray/index.html","99ff5f2241168cbadb0403865fd3f5a9"],["/2021/03/22/freevps/index.html","beb14d222c9db6ab279139f98d2e3486"],["/2021/03/24/tgstickers/index.html","7dda32c52f51b14d463e13b9e2ba6976"],["/2021/03/25/clashx/index.html","28082b969211c7ef5867fdbb5e792736"],["/2021/03/26/bingwallpaper/index.html","41c68a606ca9b03bc3cf4bd88f5b0362"],["/404.html","e421eb55ce245436136ccb98db8f8fca"],["/archives/2020/11/index.html","842ffc30fe38bc37d999aa521da8a5c2"],["/archives/2020/12/index.html","74a332fc3c274cad5b7ce1567b7622a3"],["/archives/2020/12/page/2/index.html","8985ed26433d3da83b8164bfdbda6208"],["/archives/2020/12/page/3/index.html","426666414954dc4c010897d7ea696ec6"],["/archives/2020/index.html","271381391cf3c4c4ff90a952271ed1ac"],["/archives/2020/page/2/index.html","cb0f49cf9959e1944de3d4e7d92e5380"],["/archives/2020/page/3/index.html","1c3ddcc3348f7dd9fbb86d2704038cc9"],["/archives/2021/01/index.html","a727d87d911142b8d781b7e7adae75a7"],["/archives/2021/01/page/2/index.html","1f8968aa021b1e48ad824db926c73779"],["/archives/2021/01/page/3/index.html","e7cff35c3e34576f0412d0d202a4613d"],["/archives/2021/01/page/4/index.html","84468480b6bccad429b081a81267f587"],["/archives/2021/02/index.html","b8df774af8dc430e48c18aef2faa6600"],["/archives/2021/02/page/2/index.html","ec9b55e9dabbc7992a02852c1dbcac83"],["/archives/2021/02/page/3/index.html","0945ba797c1a3828c2ad9f95ee76b280"],["/archives/2021/03/index.html","d22b519d0c869ee0c442b9601fc4e56d"],["/archives/2021/index.html","4ff60505cf3d01a3a35edd61465e1c1d"],["/archives/2021/page/2/index.html","61ff7fdd6ad3fc355ee145595114d074"],["/archives/2021/page/3/index.html","7f3506c16890d2445d2d0536541c5099"],["/archives/2021/page/4/index.html","1ea52defcf15b98ae650ba15c8a608d9"],["/archives/2021/page/5/index.html","9dae54dfdc292593ecfc91917215e6f8"],["/archives/2021/page/6/index.html","2dc06716a09a7ae43ed45bebd56599d3"],["/archives/2021/page/7/index.html","c88a0df8eac029cbc1b5ca452309b41c"],["/archives/2021/page/8/index.html","5e41b34510f56b91f1fd8c6269278e69"],["/archives/index.html","3b94eb270b94b0caf34c4f25e689fb17"],["/archives/page/10/index.html","7385d2c3d00bf3eb5d65ec3c84773062"],["/archives/page/2/index.html","407ff0f3e6101cda59d37bd17a49799a"],["/archives/page/3/index.html","240794cdfa206c1328cac0998b2e1206"],["/archives/page/4/index.html","1e2337e4024486507863d595c463d14c"],["/archives/page/5/index.html","68c7d1fdcf1382edd65de92cfe084743"],["/archives/page/6/index.html","429a35c8ff2acf1c8fb5bebd2e077ef6"],["/archives/page/7/index.html","d68ca1ff65ed9079c51c0c80609cd005"],["/archives/page/8/index.html","b71096183d5a5dc75a572b6b51e2c8cf"],["/archives/page/9/index.html","6d29226363bd7eeecd8f8d0310d451f2"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","7bdd1961b394b8414220397144814c92"],["/categories/index.html","779d8c7831e9597afafa33eb1a4ee80c"],["/categories/下载/index.html","30807e7f509aedda68855a44f948835e"],["/categories/安全/index.html","db88469aa95b40ab348c489613806cc4"],["/categories/建站/index.html","3826398d567a2464af0bd02cb9008c12"],["/categories/杂/index.html","1ead14c18341ef4929d3a86f0fda1367"],["/categories/杂/page/2/index.html","e2de864e5d1fb1c2ea9d61dab1548a50"],["/categories/测评/index.html","8a98e9355d39331ed2f2b8615ab1133a"],["/categories/科学上网/index.html","bb9e03c7636a09c4e6b388347e8d3405"],["/categories/科学上网/page/2/index.html","d569a584f8207401fb5d8a74eca2a7c9"],["/categories/编程/index.html","ab2f323204c203ca27486d036527dfed"],["/categories/网站/index.html","5dbd0107e542c530af705e162c838417"],["/categories/网站/page/2/index.html","a3ceeb35d35fe460b7c4cef368d5e8c6"],["/categories/软件/index.html","53cb2b7e8a935dfceb95e1158064120d"],["/categories/软件/page/2/index.html","e5985cd18ac1a79b78eb556a5403ee8e"],["/categories/软件/page/3/index.html","948f9aec357579578574b90adc010335"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","72bc9eea80bef8c6dfaa9cf014271dc3"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","9f5e9cd1d4cd5ba6f6b083e6ceb2c0c5"],["/ios/index.html","1be561299edf5415afbe8d97831679d1"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","bb6b0820e1073b18b9cd5f3850faf2b8"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","06f2bd1736f07d53479a6996ecd04c26"],["/page/2/index.html","f90ac8aab5d206ebe6d4a6b5831f92a3"],["/page/3/index.html","30d8a0814d76c1b1e8dacac3338f7afa"],["/page/4/index.html","a43018118e171d6cf5f50727ccbce275"],["/page/5/index.html","e121b35e331a02042923352b3549325f"],["/page/6/index.html","971edbfa918495e24e398c689a7ab193"],["/page/7/index.html","4159aa6dab2e62582ba122ebc3fdc5ee"],["/page/8/index.html","89ca80d037bfab3c61f26b04f989f29c"],["/page/9/index.html","78cd7ada53725fa3830e735b5e40e574"],["/payment/index.html","daca9ae1a3f01cbca50f97cafc41c72b"],["/privacy-policy/index.html","9b5893d1136cf67fc7e11dd98baec2f6"],["/rss2.xml","a2d3a8510845a535d7340025b92d0800"],["/search.xml","43e2a540c40fe4d6362a8bc96d6d74bb"],["/sitemap.xml","1ec94820f00f15f1bdf6e5060f80703e"],["/sw-register.js","d7e705b09e45d9ec8ad4d338f674de40"],["/tags/5t/index.html","9d9478b22d2138d01ed385e6d37a9ed9"],["/tags/Bing/index.html","be5a05e4f0294e851ba605ae12da3b69"],["/tags/Clash/index.html","343b6bcd2d68180eea3f0d7c83de8ff7"],["/tags/Clover/index.html","362f750e14381f50a50636ade6189ff9"],["/tags/E5/index.html","4fe5b0ede25d3eec9ac3aebc9f2bf007"],["/tags/FTP/index.html","cf4786b29811e4e09c6b9453d740dd1e"],["/tags/GitHub/index.html","76dff3d41d0e16cdb80017fae63c68c3"],["/tags/Heroku/index.html","d9da0c5732c36827eeb6e2945f1b6274"],["/tags/Hexo/index.html","efdfefa0ebca1aea48bdcd80f31b304c"],["/tags/Lenovo/index.html","c7697f74fc30bc7e8d328daae18c2869"],["/tags/Oneindex/index.html","3834d202896fddb76ee1f3e9a74f0d72"],["/tags/QQ/index.html","d41a4137c56f81389a620f0573900002"],["/tags/QTTabbar/index.html","c2ea3f7ea4eb5204bd805c643253c383"],["/tags/RX文件管理器/index.html","69519c6c59922df3719389ed8c95cc71"],["/tags/Todesk/index.html","dcabeac21ef924074dd6ed5edfc5ca22"],["/tags/Vercel/index.html","012bb6c3203d4160006107d2747479eb"],["/tags/ads/index.html","decb2fc8dc5ab69bd5b84889eeb14dae"],["/tags/api/index.html","65f6f3cdb7f75afc9d45e3c4c690dfa5"],["/tags/app/index.html","5a71f171fe38715bf86ac4dfce2c9a45"],["/tags/blacklist/index.html","129f86f27bc8ef207e9108c9ea83e871"],["/tags/butterfly/index.html","a42e0f11eff32af494c0fd4770cca8b9"],["/tags/chrome/index.html","f5431f1776dae9e0d8a29c37e42a6659"],["/tags/clashx/index.html","862967a19cc44c5e82bba05450f78d87"],["/tags/cloudflare/index.html","e1e6be8ca19f6eb81e83c91727f2afe0"],["/tags/cmd/index.html","5389a566d7a450393147d4aaafabaaac"],["/tags/c盘/index.html","187344661c7a9409ed81120943eec7dc"],["/tags/email/index.html","f14f5d0efbb06ef8145a654cf60e712e"],["/tags/ewomail/index.html","7fd3eeb53944f395af96c5cb6f6bb177"],["/tags/fiddler/index.html","c6f02fbca5f233dfb4f5c8670adb0054"],["/tags/flags/index.html","c11ad851666f2efe578912ec34d869e5"],["/tags/footer，页脚/index.html","13cd1d3c12b185abad1d5daada2415b4"],["/tags/galgame/index.html","23b5b9a40f2503cf51a7721371f24fea"],["/tags/git/index.html","2c3b418a1292b01f08b291559dc42a59"],["/tags/gitcalendar/index.html","7203a5ec92f901dcb0968b91b618e5b0"],["/tags/google-voice/index.html","ab10d28a4ca6e2188b06495fe6eb8097"],["/tags/gv/index.html","53309c554de2d6ada9522d2780ddc3a4"],["/tags/html/index.html","2fcfb5a266e564290cf99db13f3837a0"],["/tags/index-1.html","05c482372328a0b8ee4e3d77cf7fcb2d"],["/tags/index.html","99030ea3371e762a25686e5cc33343ec"],["/tags/js/index.html","785918c3b9d984986a8059064b580c90"],["/tags/jsdelivr/index.html","53005c654623917c5b3062a2bda2b70d"],["/tags/linux/index.html","77a3f41e84942385b9329812f6adf424"],["/tags/macos/index.html","c049b7ec6ffdef8d2e5fb7bdd8813e1d"],["/tags/madVR/index.html","e9037470a5a9dde79deb69fceb73bd3b"],["/tags/markdown/index.html","fa66965d38c4b34098f422bbbe1a4546"],["/tags/maya/index.html","52295d258d3b41fb6427f36a70b9ecdd"],["/tags/mklink/index.html","b21b0fd072cc0da2192fae6667b89f86"],["/tags/office-e5/index.html","70aaaa1f219fdeb4e230f193a3af64af"],["/tags/onedrive/index.html","9c318505341abd39be4c0d84f48e04d2"],["/tags/picGO/index.html","61d5e52794b221b28b1b7dee12daaccd"],["/tags/pixiv/index.html","1b9024602e4288d0e71ad9f43329d4a9"],["/tags/potplayer/index.html","43742d739ebb780cb4b505566ed6801a"],["/tags/proxypool/index.html","fe2cefaa9ba339db2329490a3645c540"],["/tags/qbitorrent/index.html","ba3663c39746d7ba0a311c51c48033fc"],["/tags/raidrive/index.html","8336a18238f9ab87ed2f635d0bad61b5"],["/tags/screen/index.html","ad41f54d30f294998e8d38de1ec5dbf6"],["/tags/speedtest/index.html","72c112bd396aaadfc2ce17022ee748e3"],["/tags/ss/index.html","45c28f3df4d50e05cef0baac1a9381b4"],["/tags/ssr/index.html","2c26fab14401c871274743725cb1ace8"],["/tags/stickers/index.html","60b413607766cb11ea9cc7bf8c51cb98"],["/tags/surfboard/index.html","a44b92bfd46fd6fa59c17e4e6281bc5d"],["/tags/tap/index.html","0493b1fa1da171c68f351f5ca3a4f9cc"],["/tags/telegram/index.html","5cf0f5032a6ddeb5418155baf68d2a65"],["/tags/telegram代理/index.html","91d26656796499d3501fbabb4cce4113"],["/tags/tg/index.html","ad7e6d5bf23f6805c5a32263096d294d"],["/tags/tg代理/index.html","95578f68e7e610b89127bb0a6421f89a"],["/tags/top50/index.html","2a00e10c263927e51dbf0eac86bef546"],["/tags/tracker/index.html","7a268a65cd00076e2e49e6c0a606ae14"],["/tags/translate/index.html","8ae3d33c6e12f0f28ec9d8b5b17bf2a5"],["/tags/translater/index.html","e90ad9d31163fb6702ff4e2bece8ca05"],["/tags/tun/index.html","e9771ad734fb28757b23283ed17eeff0"],["/tags/typecho/index.html","f3f519ccfe2c5b6bc794c1c656a888e4"],["/tags/v2ray/index.html","98d1786b96b55c8ecd212c583b7e61f3"],["/tags/vpn/index.html","23cf9afacafc738371412ac83c5c7f93"],["/tags/vps/index.html","47c94f7770266dc44fb330b8880705dc"],["/tags/wallpaper/index.html","6c15a17a4fe33018dc59a814179da425"],["/tags/windows/index.html","e7034ffec33a729f02098de44677dc56"],["/tags/windows端/index.html","c7a9e59b02e46ee65ca657abc14df4f2"],["/tags/xray/index.html","57de60d0f5c532ae33f1f2feaee113a6"],["/tags/下载/index.html","14bd02f75efa73af5bc05a028d3a8cc1"],["/tags/不限速/index.html","a1b67d3c316743ad9db8edf301b47ee4"],["/tags/个人网盘/index.html","cdd12ce9fba8c785c984dc90f36c3466"],["/tags/主题/index.html","3bd7861b3f5d6ed047d868d30d578e54"],["/tags/二维码/index.html","4d9819986297729f4093078cfb0b52f6"],["/tags/云便签/index.html","2c14841f01600ce66c0b4b22f00f551e"],["/tags/云盘/index.html","334c730875a077adefe794e7578d174c"],["/tags/人人/index.html","f3371c1f1779057131dc9f457d7624ec"],["/tags/代理/index.html","2689d66bc78cccbe7c189fe32e1e0fce"],["/tags/代码/index.html","434f1186ecc9ee9a470b01c5b73d7c5e"],["/tags/优选IP/index.html","51fb5a69716813c6899d7aa8c85f272b"],["/tags/便签/index.html","61c55e2c1e4ca2649b6e17b4cf6e088b"],["/tags/保号/index.html","321bb6489d85e425dfa7c94c3737fb74"],["/tags/免费/index.html","c34e56908fba570fe35633a72eec28ec"],["/tags/免费节点/index.html","3a2ecf79ef844d6ec32af9b396b59716"],["/tags/加密/index.html","809dd4ab37d7b31b24310010b30d9538"],["/tags/动画/index.html","0f597a86eef99ca593fb26466e2f81b7"],["/tags/博客/index.html","7aa3be90903c133ed5adad5b4a37ca2d"],["/tags/历史记录/index.html","c133746f85081a0f02b3dec6ec7a0182"],["/tags/压力/index.html","b353655be0e1a8efcb860182c2e1f945"],["/tags/压缩包/index.html","abbc55083acd5951c98d451cae8f8564"],["/tags/反代/index.html","47ce60e967bce08d7a28c754880a67fe"],["/tags/可视化/index.html","0ada2a127000b1e611b0878186ac8c3a"],["/tags/命令/index.html","bf01357092fb74c94318c08b0a0b48f0"],["/tags/国家/index.html","cbb223b1f7be63208a42be53d2622ea0"],["/tags/图床/index.html","70092df299a02020c413f641601b6767"],["/tags/图片/index.html","cda6e7f26d1ff5281eff9a69d1e9b2d4"],["/tags/域名/index.html","4fdd325831aad383728ddedb362dacc4"],["/tags/壁纸/index.html","e34dcfe5bcc09696a6dd2995f157c8ab"],["/tags/多标签/index.html","55c5dfb466758a646d37180677e48c3e"],["/tags/存储/index.html","30d5036d20029301f4ebc829481f9489"],["/tags/学习/index.html","b9792f9b7c952e74b4e7df21d490ba95"],["/tags/安全/index.html","8e66cc649ff9c93b376aab6353f490ba"],["/tags/安卓/index.html","9c40617805d8bb36ba6bd6178ff8fe39"],["/tags/宝塔/index.html","8b4e85be2e95ec32641cfc927d656aed"],["/tags/小游戏/index.html","90e8b2d7abf887ff6f20ada2dbdd9627"],["/tags/广告/index.html","42bfa11c91d5c8d95888d32a1df74346"],["/tags/建站/index.html","dffd22d82bc19d19244c541ecc2aa667"],["/tags/影视/index.html","fa29b69706618b25c419860e8fb317b2"],["/tags/微信/index.html","c6cbdd2cba9d5d98ecae8f00affc54d2"],["/tags/快速启动/index.html","da716005f22add6c3cec6aa1962d59c3"],["/tags/手机/index.html","8994186043d560262ac4646f62253231"],["/tags/托管/index.html","8bc7d7313a7f85c0aea18e0c2c08d7c9"],["/tags/抓包/index.html","aab1064fb1036f6e9a0756f5f8fc2840"],["/tags/抓取/index.html","32bae5a5b0d183400e0c3229addc7144"],["/tags/投屏/index.html","2871cd85b35348c7948d69dcbb6b7e90"],["/tags/拓展功能/index.html","83859860385c2c2b9459f51e601e3a4b"],["/tags/挂载/index.html","8397847ec90aa25c9d3c3f9812069649"],["/tags/指纹/index.html","4ff570c9dac657cd95d8af35d433946f"],["/tags/接口/index.html","536b2621393f3b33a59f97af9a65b434"],["/tags/提取图片/index.html","15b7fc4c648054dbb872724eaec2a314"],["/tags/插件/index.html","d14f0459efec84339b9e5859373f505f"],["/tags/搜图/index.html","bee5cd694d613f281de2a7fdb4584b19"],["/tags/搭建/index.html","1e0358f24049d4515724bee007800739"],["/tags/撤回/index.html","073be0742ef3be5a39c5a8683c1c0d09"],["/tags/播放器/index.html","88d8bc8a1329fba270fd087c55db8bf7"],["/tags/支付宝/index.html","f96ff118d2c52f681f2bac8b36af8103"],["/tags/政府网站/index.html","8ac44082c7d7f1f329eb8dbd6d9097ff"],["/tags/效率/index.html","63212cdb971fa152d5aba0059e65bc49"],["/tags/日历/index.html","b936c3e6c5dc461f2ef2513698c6fe61"],["/tags/服务器/index.html","4681bcce8ea4384227ffef92838efbc4"],["/tags/机场/index.html","b9a8a9c3dd533469d17b806d48772b9f"],["/tags/桌面/index.html","39e492f197f31d7b86bb52a28d7f07c6"],["/tags/梯子/index.html","d57e4ee8cf81918de2469ef99b824106"],["/tags/检测工具/index.html","269f45c5f890e0aba17b0428ad5fb5c0"],["/tags/汉化/index.html","6ce1461f09662929ef0632275c3ebc3e"],["/tags/测压/index.html","fd82c666138c60a2e0e67d0cf8d79012"],["/tags/测速/index.html","010ec3b88871013e78f62453b1ae7523"],["/tags/浏览器/index.html","373a951cb03be1261e3bac223ee80368"],["/tags/清理/index.html","7aeede84ef01bf07f40c0b3c8cc7abdc"],["/tags/滚动条/index.html","61bb1256b4f0705e03a2198267065f43"],["/tags/灰色歌曲/index.html","33f1a60fce9ac67fa8f127ffd418db11"],["/tags/电影/index.html","2d64c4f45d2ab2dff3fdf290bd498ce3"],["/tags/电视剧/index.html","ef091ed136341eb32c3ac62114c21621"],["/tags/白嫖/index.html","71d7373885cb190fe72c722f45f439e4"],["/tags/百度/index.html","23dee9bb51290b32a06ad2a1f61b19e8"],["/tags/百度云盘/index.html","6c86f6623e8a952c9725ac4ccf65f72e"],["/tags/百科/index.html","225f2a91db368f9a0e31a4077c8aeb72"],["/tags/短信/index.html","14c4c2f5600918ec150aa124975abd53"],["/tags/硬件/index.html","a194217e866c7e9ece736302106761e5"],["/tags/科学上网/index.html","95bbe2f6e8c3b29d4af56e5a46c2e1d7"],["/tags/空间/index.html","5fdf905780bfe2ec89d9b0302811c0ee"],["/tags/笔记/index.html","cdd239e1234dec197a0f28aa289d5544"],["/tags/简洁/index.html","3c6607794c4b6a6ec710476b2727ee82"],["/tags/简约/index.html","b70e1fa606efa5210da388500e6dabff"],["/tags/维基/index.html","8fdbc144d911b07afb8fae11f1501550"],["/tags/网易云/index.html","b7548015dd43912f3536930d8824a684"],["/tags/网盘/index.html","165bf5b23512c1fd662cd89958b8d0fc"],["/tags/网站/index.html","81afb2ab8a2c42435bc7898ea4d5c972"],["/tags/网络/index.html","3cafd1c172d70c471801cabbcb35dc47"],["/tags/美化/index.html","d57c393ce545923c9f71ea95697c8981"],["/tags/翻墙/index.html","2c12d16183c3cb0a404a9ebfa06187eb"],["/tags/翻译/index.html","de973ec2cb20441827e02ff70ef96553"],["/tags/翻译器/index.html","a27d374979c187e9a281a60711da9617"],["/tags/聊天/index.html","a3efd9eb6a5353b702be1baeabcfd2bc"],["/tags/聊天室/index.html","08e94898f00cf78ca7a8ed1baf3985c6"],["/tags/联想/index.html","873c9caca8cd461978811024fbd293ca"],["/tags/节点/index.html","4caaea04e94f91db443fe5a1d48727ab"],["/tags/虚拟手机号/index.html","53e148983e9068ba2ae2248461fe0c96"],["/tags/补丁/index.html","c0a88fc8461f1a362cf8208ccdaaa4d3"],["/tags/表情包/index.html","3f9bf9e5073ba7a046f0ccb392dcb293"],["/tags/视频/index.html","c2e689bb5ddf0236f068f7d1d427d687"],["/tags/解析/index.html","14f9903ea3a10a8eed6ee2a508a42977"],["/tags/订阅链接/index.html","78ed0f4426b0db3ca818751ab2bd1fb8"],["/tags/记录/index.html","6233a400444a4e3c4d0265e1b4c85cb9"],["/tags/识图/index.html","0caee5e0686c843eec53b2d56790f267"],["/tags/语言/index.html","92172fa639112d58b14fb71e8dddc906"],["/tags/资源/index.html","acadc77e6d10e65c6c91f4e42de616cd"],["/tags/资源管理器/index.html","45beb2f7b123adeaac8a505164e0e2c9"],["/tags/转移/index.html","e34ee6cb8059c60f82411fb73ff08c2a"],["/tags/软件/index.html","a63a2adf68154c9e5f2b4d643376c212"],["/tags/轰炸/index.html","22d5d9bc9c6de50273675d5a25bb72fb"],["/tags/迁移/index.html","a3ade629b51006c1852dc5d53bbd2479"],["/tags/远程控制/index.html","c55f2910bcfb3bca278aacac483cad2e"],["/tags/连接/index.html","1242617b4c71a1b58c606f029eec90e8"],["/tags/追踪/index.html","d853af78f8ceebc9ea0f369d46e20fa9"],["/tags/速度/index.html","c58107f76c876d29973e174d670b45ce"],["/tags/邮箱/index.html","1306d13fef4141c5d9ca959f9898bcee"],["/tags/酷炫/index.html","3d1ada3febfcb2d653366e201d790310"],["/tags/钓鱼/index.html","a49185c5dd60587cf6e6bd8199f919bd"],["/tags/镜像/index.html","b793cc6a502c6827d4fe1f4a65a52cf7"],["/tags/随机/index.html","51f9902b52bc5e34e040809370f75a45"],["/tags/隐藏/index.html","8466f54b83b50e6ce15a06b3a76502cc"],["/tags/面板/index.html","4608c100648992d401e4e615c3d96682"],["/tags/音乐/index.html","7fb4e9853255674d0b6fc5f216fe442e"],["/tags/高颜值/index.html","85487937043431e5f0c7756932c1cc4b"],["/tags/魔改/index.html","2e0b4e71ec6fc1a0769c4d380e4e645a"],["/tags/黑名单/index.html","820be31742c0f7afd2f28b94a7f6cc0a"],["/urls/index.html","7d8fea58e6f58996aae4c98b81feba40"],["/vps/index.html","4bb2c3823dffed45420216cf0dbd5bac"],["/支持/index.html","0dac361337e967dca366f0bf5f3261a4"]];
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
