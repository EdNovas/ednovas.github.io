/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","caa9c40ff69234ed7febbb91ec50a960"],["/2020/11/29/clash-windows/index.html","c5677937373af95394e0ba634ab8fc8b"],["/2020/11/30/websites2/index.html","3abd1174e473b99ab57851591ef7b074"],["/2020/12/04/iphone4s/index.html","236d79e3fd853c13d8b1b03d4751790f"],["/2020/12/04/onenote/index.html","c4ae91c0e681370609f1628282c67ab4"],["/2020/12/04/wesites1/index.html","c69fb306aa076a69c0e1314e4cbb8ab5"],["/2020/12/06/nokia808/index.html","2c7511fb48214de337760302ec8e2252"],["/2020/12/07/ipad1/index.html","cddafc24d654edf6cf139d6a195065d5"],["/2020/12/18/freesubscribes/index.html","b7c9e3078318db5534020d0899470cdd"],["/2020/12/19/musics/index.html","fe160b066fd5f35118982970d2182ccc"],["/2020/12/19/shadowrocket/index.html","2fff0d9b922e371dbaa2fb6f15ebd433"],["/2020/12/19/v2ray-windows/index.html","21e731ed422b974492eac7effadbc517"],["/2020/12/19/v2rayng/index.html","d434e378d3870d1e59960fd4d9f9775c"],["/2020/12/20/beoplay/index.html","02ce32dec44e382406c1638db0ae1690"],["/2020/12/20/订阅链接转换/index.html","c5a6a02e1dba2968d3168ed61e899d18"],["/2020/12/21/chrome浏览器下载提速/index.html","4adce11ab768d6ddb51d2251b333a0e5"],["/2020/12/21/免费128线程并发下载xdown/index.html","8531b06fbe0743170a5075aed0b1e672"],["/2020/12/21/免费32线程下载软件ndm/index.html","7c26caf4e135763e0bd9c1acdac9793f"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e5ef6a154ed616a4e5b2ca71be32d46f"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","91d7a90b8de8558de56decf4b01097b5"],["/2020/12/21/广告怎么知道我在想什么/index.html","0e0f14f96e12991263a3391af0de9271"],["/2020/12/21/无名·引子（小说试写）/index.html","cde326a820de939ceb43e7cb8c280230"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","a36cfa0ceb7f96bd768361186b08f7c2"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","733a609fbc22aba68be8dded985dd661"],["/2020/12/21/高速轻量下载器aria2/index.html","eff786bc32d6db15951270e1443f9c53"],["/2020/12/22/2020-cee-roo/index.html","73d39e700ffb7828a5245f75536041c1"],["/2020/12/22/firefox插件、github、steam富强/index.html","00a9b0b4b1a1ab73414d1a8f53614387"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","6ce0b560adf07d755b680f0b50b3194b"],["/2020/12/26/python-day-1/index.html","99be2d93c05f3e5dfc290a37beed544c"],["/2020/12/26/python-day-2/index.html","e5abba35dde7496e4e0857b08ad6f076"],["/2020/12/26/度盘不限速下载方式一赏/index.html","937e0460607796ed16d3be9f143b352c"],["/2020/12/26/添加开机自启软件/index.html","02362e3619fe44415447f74d50757293"],["/2020/12/26/电脑端截图方式一赏/index.html","979869081327724ab4199627483ea8ed"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","96e1ea401339fdac6b9180eeca227f71"],["/2020/12/27/最安全的浏览器tor/index.html","a893c0edd6a0702601e95ba084999147"],["/2020/12/27/网易云刷等级和听歌数量/index.html","95f1fb9b06bf0a05d73cc7d53629613b"],["/2020/12/28/freenom申请免费域名/index.html","7f1fa6d50874fa125584a778b550674f"],["/2020/12/31/机场/index.html","3ac281d55f300a690fdf99a1299dc2da"],["/2021/01/01/M1/index.html","1eb037ea177192d97a24e9a3e5b64554"],["/2021/01/01/compress/index.html","22a76433507a445010761eae8bf74421"],["/2021/01/01/infinityfree/index.html","4b028a4ce892aeb489689f198aa21106"],["/2021/01/01/硬核翻墙/index.html","c5cc32fa42bf6e772ae8484827bf8c10"],["/2021/01/02/qq/index.html","c56b778a189afc51a560eb6bb28c4010"],["/2021/01/03/netch/index.html","4f7ecf169ee75c4bd985dcf26fcd3e7c"],["/2021/01/03/waifu2x/index.html","68b748a11cb52e8e18a411944b8c3caa"],["/2021/01/04/ads/index.html","d5e2a5c1070143fdbc28311c705016cd"],["/2021/01/04/games/index.html","15ef852d0922debd039a7ee0ba904cf1"],["/2021/01/04/heroku/index.html","e3170b58c4b6b47a3ed7bd418a7efb9a"],["/2021/01/06/movies/index.html","cc64a4a45fbd031ee1ee5ed47a4fa835"],["/2021/01/07/google2020/index.html","1809d1c79f85384d68e61b82bde2f862"],["/2021/01/07/lucky/index.html","b6c81007465f87ea72f27b99c0ff5533"],["/2021/01/07/spotify/index.html","f3fcafc08de71a2df6a2c80ef0c43cc2"],["/2021/01/07/thunder/index.html","bd79f1e3281c438e61226e1e5d02931b"],["/2021/01/08/adguardhome/index.html","970f06b1bc6e459bcacad1e15e876ea1"],["/2021/01/10/IBM/index.html","87945bac8049c037a35048732044310d"],["/2021/01/10/potplayer/index.html","1437ded044f3f8753b65a460fb7b98fa"],["/2021/01/10/sakuraanime/index.html","a82c69423be98b55e35303c2254e81f7"],["/2021/01/10/美剧星球/index.html","b25ce2960f79e503ad603790d3b18b11"],["/2021/01/12/telegraph/index.html","40dae92d14e51f5b09c4008a553417a1"],["/2021/01/14/comics/index.html","0c4ad7a74a969b28dc8609bfe7f29ecc"],["/2021/01/14/ftp/index.html","bf698d6e1760832d0de4e57edf2184af"],["/2021/01/14/oraclecloud/index.html","695e4f67f266a2d5a19eb772c0bc6f69"],["/2021/01/14/porkbun/index.html","03e291cbd38b8cabd0c76899bfb2ea86"],["/2021/01/14/powertoys/index.html","23e7a7c8e9cead28f9eef700ac18e1be"],["/2021/01/14/taptap/index.html","dfdbaa47139f406c2cd983b7123af47b"],["/2021/01/14/ubuntuvsftp/index.html","09b9859a28ec40444ea654a802cd024c"],["/2021/01/14/小说/index.html","602e329e5cd5cd308e62757c4b1bc1ab"],["/2021/01/15/freeproxies/index.html","834c5f4bd7236bea65da99db0655e9eb"],["/2021/01/15/incaseformat/index.html","d98b3131db7a8eb451ad3647558fc669"],["/2021/01/16/euserv/index.html","c69be090f5101cead6bd3ca091bf158c"],["/2021/01/16/winxray/index.html","dda9cd198bc1c27a17b0a409cbba65ac"],["/2021/01/18/qqreadhistory/index.html","f6a68b3b5dcefc0b9286c5d04cf525f8"],["/2021/01/18/qqrevoke/index.html","ba207c0516262de9af6cec6e9af3bd03"],["/2021/01/19/freevpn/index.html","9420b7f64fc0490c264154ccfbc1c0b7"],["/2021/01/20/browsertrack/index.html","6386225be155b6e85c1198b1a92d3646"],["/2021/01/20/v2ui/index.html","adcd6e2b5d9ab7c8d4db07b794e51b5f"],["/2021/01/21/failedtoconnect/index.html","32ccb199f8d49457a9ce8cf137fb06d1"],["/2021/01/21/gitcalendar/index.html","0b2c0617e05b464ba0eb212da7c3ec12"],["/2021/01/21/markdownformat/index.html","05495d903499bef645c19eeb3a4ccfac"],["/2021/01/21/markdowntable/index.html","35749a64dec63fef3fbfafc5d1da700e"],["/2021/01/21/vercel/index.html","73068143f00d8e7b0d6a835944757968"],["/2021/01/22/hardware/index.html","12ed199291138bdbb22e43f770e5c366"],["/2021/01/22/muviz/index.html","3d9ad6cbbf8a6cad6a50df821823b51f"],["/2021/01/22/randomapi/index.html","19479fbc5c9fe312e9f8e04168d89c57"],["/2021/01/22/searchimages/index.html","cdbd30b4e98542a6e93c705b106a1757"],["/2021/01/23/RX文件管理器/index.html","46ea2d67a363a55a722d66ce19ff71b5"],["/2021/01/23/chromeflag/index.html","fde530f55628eb4a22ae9d308849836d"],["/2021/01/23/qttabbar/index.html","d13c5d6433a2f351392f5f56db18857b"],["/2021/01/24/githubspeedup/index.html","a5b3bcfd1de7db245ec105c24cb833f6"],["/2021/01/24/jsdelivr/index.html","7a8c768553356d1ff74056bd3e2b9d9d"],["/2021/01/25/note/index.html","78d165174fa39e145f5de0b5a75211b5"],["/2021/01/25/soul/index.html","dbcc83c2ba75a1e6123844605eb75706"],["/2021/01/26/herokuxray/index.html","c751f0503f52930e00bf15e819a3c32f"],["/2021/01/27/proxypool/index.html","c63a671967fc3e378dd476fad872e720"],["/2021/01/27/tracker/index.html","9d5bb1a6e7a5b82091ecb68c7d9e4496"],["/2021/01/30/pandownphp/index.html","4d1e9accc5e1d1114aa2cbd075f144f1"],["/2021/01/31/newgroup/index.html","0a7d44620aa1814b9a3eac9fca8e8e1e"],["/2021/02/01/clashlanguage/index.html","78d445eb3d15d9ad5af215f68710a72f"],["/2021/02/01/encrypt/index.html","c78751cee27c0000126b3a82d4e62047"],["/2021/02/01/footermotion/index.html","5e34d56972dde35341c47974f886bc96"],["/2021/02/01/gitter/index.html","a4c697b905f9d6df50cbaf95803901b1"],["/2021/02/01/pixivtop50/index.html","0657d3867f99641038bdcb1762354e62"],["/2021/02/01/scrollbar/index.html","6b6da789a23c8399af85eb2ae63cca70"],["/2021/02/02/clover/index.html","c821869f180872801a197c25cd5de243"],["/2021/02/02/maya/index.html","d730cfce3a3190d1bb4d6c1f61ba3f3c"],["/2021/02/02/speedcontroller/index.html","015707881ca545aa06ec4eb14d3f9ef9"],["/2021/02/02/yesmusicplayer/index.html","8aed2848ca41b9e1770a3c66490305e6"],["/2021/02/03/lenovoonelite/index.html","f427a46e4b2fc156ea00bf7bee0cbb97"],["/2021/02/03/skipads/index.html","876f29ca484d12bcaeb1410e0716a22f"],["/2021/02/04/picseed/index.html","a38292866013cf6fe98931e998e0c73a"],["/2021/02/04/renren/index.html","f5a25a194c178ffedbde8985b827bae6"],["/2021/02/04/serverstress/index.html","8a4706468f189049c72f4dda328df709"],["/2021/02/04/wikipediazh/index.html","0dac391c685a12b7797dbf372705f29d"],["/2021/02/05/googlevoice/index.html","41d154c0a0a0c28516816b525a5ece99"],["/2021/02/06/clashconnection/index.html","bc1555cf94d96c6df0b4371916af33c5"],["/2021/02/06/gvtransfer/index.html","834bd2c002b3b2bfd4a2c78d425d7653"],["/2021/02/06/todesk/index.html","52e61340d7e79c2563786c0670e7caa2"],["/2021/02/06/vpnblacklist/index.html","ae002f38b246517e98777b5254216ed2"],["/2021/02/07/mklink/index.html","403f79a97466b5afff63303ffbbd9f95"],["/2021/02/07/speedtest/index.html","933d5b0820e525824fb573ecfad49b4f"],["/2021/02/07/translate/index.html","69cbce3d9a2ff75bba957210ab5fbb56"],["/2021/02/08/ewomail/index.html","ca09f6e0ffbe0a82aa326d921bce204b"],["/2021/02/10/officee5/index.html","07733cc071c612a218f5673dd60769db"],["/2021/02/10/raidrive/index.html","32ec310734bbdeb6192450961c237438"],["/2021/02/13/e5sub/index.html","6d07894d87d2ec9834c7b078333dbe9f"],["/2021/02/14/screen/index.html","93beb923cca804ed55bb1d8d3d9d65c1"],["/2021/02/15/clashtun/index.html","d796fe8eccc855408a680660490ae28c"],["/2021/02/15/messageboom/index.html","2b16d4d7369184f0fda4590726f35dcd"],["/2021/02/15/oneindex/index.html","4a6808d7ef15c6f4b517dda30de725e0"],["/2021/02/16/govsites/index.html","b2b127835c73370e8016f05cb2531f93"],["/2021/02/17/hexototypecho/index.html","d08a85d1eded3031a2daa739f53a87b0"],["/2021/02/19/fiddler/index.html","99ddaec9b2f7a0bbd250ed196cd8d6ee"],["/2021/02/22/potplayerset/index.html","87bc734c83dd43bf837b3e990663ec3f"],["/2021/02/22/studyresource/index.html","b72724cba7aee5eac746076bae971fd2"],["/2021/02/22/telegram/index.html","61ff5e7c075312783bfd4ce7cc9c9b31"],["/2021/02/22/videos/index.html","493fce4da5a06fb8b535a0f3836da687"],["/2021/02/24/mtproxy/index.html","8598cad570ec3dd927c4ce244a536890"],["/2021/03/10/catchcat/index.html","f45aa11914b8750f01ff83d2ec000c47"],["/2021/03/10/neteasemusic/index.html","9199e3538ec6c8a4d9a2b03a988ea743"],["/2021/03/10/surfboard/index.html","0eefc936066b2a221795bb5878dba2aa"],["/2021/03/11/vpnandjc/index.html","447c4b085bfc39a54bc20996bb7e3a5f"],["/2021/03/12/qrcodes/index.html","950b6e8b97b6bd8fcfcc47dbf45cfa82"],["/2021/03/20/qv2ray/index.html","99ff5f2241168cbadb0403865fd3f5a9"],["/2021/03/22/freevps/index.html","beb14d222c9db6ab279139f98d2e3486"],["/2021/03/24/tgstickers/index.html","7dda32c52f51b14d463e13b9e2ba6976"],["/2021/03/25/clashx/index.html","28082b969211c7ef5867fdbb5e792736"],["/2021/03/26/bingwallpaper/index.html","41c68a606ca9b03bc3cf4bd88f5b0362"],["/404.html","ef10dd6a3c5352c2350243b46ceb89d9"],["/archives/2020/11/index.html","e70a12894e4f5f210aaa4de919f052ed"],["/archives/2020/12/index.html","dfceb5bd91af5b486334a2e64e0c2b22"],["/archives/2020/12/page/2/index.html","0a23ffa34a8dca83a95ebb3f6f730389"],["/archives/2020/12/page/3/index.html","aeeb77081c2849cadb5461dea0f9fa87"],["/archives/2020/index.html","0afa08b78c635ab73d8e6e015e0050bf"],["/archives/2020/page/2/index.html","80cfd6cc0a5324992bd0751a73a36f40"],["/archives/2020/page/3/index.html","74af9507a854ce62fbe6eb9b0ece5ed4"],["/archives/2021/01/index.html","83acf465e6dea199319ee0222c180668"],["/archives/2021/01/page/2/index.html","ad98b2a18d63f6a71039c7b9922c47c8"],["/archives/2021/01/page/3/index.html","32083d5df51edca5eb3314488ac7236a"],["/archives/2021/01/page/4/index.html","e06beff25255fd1cb975c5ccaedfc278"],["/archives/2021/02/index.html","17f1852c69ac286e3c816342957aa4bc"],["/archives/2021/02/page/2/index.html","9659b034149e7d4e3bbea1d874d2e660"],["/archives/2021/02/page/3/index.html","c9161b82f1ff5e4e81bff940b5c12a0f"],["/archives/2021/03/index.html","7607805d1ebcfcb3a7179945c8b8d836"],["/archives/2021/index.html","ed117a17dca37b32c66c5908b56a7f49"],["/archives/2021/page/2/index.html","141a5de7229674eafbe9ebd20c6c6c6b"],["/archives/2021/page/3/index.html","3c50023809ce423ec12532114e6f08ec"],["/archives/2021/page/4/index.html","de7ddc809804871edb107ff5f47e365e"],["/archives/2021/page/5/index.html","380dd114b940736efd9e61e463be9919"],["/archives/2021/page/6/index.html","a819a3f4032c647ae4b4ce09ebf3ccd6"],["/archives/2021/page/7/index.html","b57aa1d6cf2737d5bdf7066be4456151"],["/archives/2021/page/8/index.html","ef1adb468a4c017e8ab8198a8d4765ca"],["/archives/index.html","7b293c8e82bbdc15d5e133b9c0982255"],["/archives/page/10/index.html","da8fe82f132cf21cb367c6261a18d066"],["/archives/page/2/index.html","7723e5253b31bc5449cb60d9108e40a2"],["/archives/page/3/index.html","492480ad7263d909f890acd97ba54c5a"],["/archives/page/4/index.html","a24dab83abea2446bba145d1660e6c52"],["/archives/page/5/index.html","3674adcb1f4bf9954057df4ba131f576"],["/archives/page/6/index.html","31b74fb23e8174a6e8b9edf39ae98ff6"],["/archives/page/7/index.html","704d236a57c8d4b867e731c94435bece"],["/archives/page/8/index.html","e58ce03bed070c4b9c04994b02a3213c"],["/archives/page/9/index.html","b82517e7fc82c49ca2ac77c1ce1f459d"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","90487c0c9d38729886b47b462fd7661c"],["/categories/index.html","9df01f5fd582b5db27c56ff50a66fbf9"],["/categories/下载/index.html","e36d8fd01fb23f0b44301d6bdf60f147"],["/categories/安全/index.html","67c09a7de36d108bbd8b4ed6311c99f6"],["/categories/建站/index.html","e75d2f9d49e6e6d572d9fbe51139e957"],["/categories/杂/index.html","1bb6521cf22046fc800c9c56e11da74d"],["/categories/杂/page/2/index.html","779dba0581960bb84b0ab2f17b5b02aa"],["/categories/测评/index.html","9dbcb46efe51f96bf13440d3d1e73157"],["/categories/科学上网/index.html","8507220862a20a6a4795026a10afac35"],["/categories/科学上网/page/2/index.html","f76a8282d662f8f61739ae758b6f44c9"],["/categories/编程/index.html","d0aaf6a6bee40fdf082e4d408b45e47e"],["/categories/网站/index.html","1917db555aa549d1cdfab3c0c10a304e"],["/categories/网站/page/2/index.html","4ed05b0b7092ad5bae89fd1b0092bc7d"],["/categories/软件/index.html","39cf90a43f7237ec66dbe53dcca2e42a"],["/categories/软件/page/2/index.html","14ef7ab7cb1bfe49b9123d07de282090"],["/categories/软件/page/3/index.html","eadb560e502f7585827d7a9310c051e6"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","a986d3f9854a45e3684dcc4de9e26dd2"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","bc71bddb9f53d804726ae2f2bf2909e0"],["/ios/index.html","7fa0d465af9abdbc8982a2c5474e56d0"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","191f3912c23a7be410f17f59c55a7950"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","8cc85a4cec30245afbcf47fb897649d1"],["/page/2/index.html","6b5215b6e45c2248edaed8ed27520d14"],["/page/3/index.html","569cb8c4c6cba144b4bf9923762e9e16"],["/page/4/index.html","d8863690384b35f83b1087ee647ff40c"],["/page/5/index.html","5feedf7112cd1b3bbc80145180cb796b"],["/page/6/index.html","2e778bf88e018450dc7bae71b795b4a1"],["/page/7/index.html","972e2a41dc5559301ab961a10171ff12"],["/page/8/index.html","39319e5831988226bd1bf92b3c6d42dc"],["/page/9/index.html","88381875b223dc08afea4ce49030e8b2"],["/payment/index.html","c96297319f0ee701f3cb215f3d7a0da1"],["/privacy-policy/index.html","69fb8d1013a5a020f8f8ac239964973e"],["/rss2.xml","d311a03ba2aa9fefb6942cc5e3455704"],["/search.xml","1b3d955cd02b8154cf42445e218fcedc"],["/sitemap.xml","606744edbcb91f8f5067610c53248962"],["/sw-register.js","92ccbb6948c0b79f6046bbe644da53b1"],["/tags/5t/index.html","325858dc1d6003d6bd169e0daa81f41f"],["/tags/Bing/index.html","dc69078e42920b9880f435520908bb6c"],["/tags/Clash/index.html","d630bd4a1932149b3edd0f625b9a6061"],["/tags/Clover/index.html","4850dbfe005469cb3696a3b8809b8588"],["/tags/E5/index.html","afe55ec06c68dc2b8f16577383d3a285"],["/tags/FTP/index.html","075e8baea1f10391d938c36521039ac8"],["/tags/GitHub/index.html","262c72851b1d855cbedf8bd4607b03a9"],["/tags/Heroku/index.html","0a8add7920acaac6f51b89eb264d238c"],["/tags/Hexo/index.html","be9089bbd21ed350c3bb6451042e6832"],["/tags/Lenovo/index.html","6f8193042e04688a02fb063a900e3172"],["/tags/Oneindex/index.html","7aca61ec890edd4413749721f6ab0062"],["/tags/QQ/index.html","bbd78aebb63d64bcc1dd75dbca0b9034"],["/tags/QTTabbar/index.html","d9be1d00fefe9c5f1ef9fbc30f1d2a65"],["/tags/RX文件管理器/index.html","3ad055281863d75fca5ba34a40733bb2"],["/tags/Todesk/index.html","bf5b4eb4d800fd71029edef3df159b36"],["/tags/Vercel/index.html","814ce9971cc2483923d44982717e09a9"],["/tags/ads/index.html","4fa3a9e4cd90a0a3d5fbbe9c116cc13b"],["/tags/api/index.html","8b5abd2fb5f9272f01b67bf03e5f9871"],["/tags/app/index.html","8a2033ed298c93821461a5feff54bd4e"],["/tags/blacklist/index.html","f4f657bc8dddf215e2fa7594de784b61"],["/tags/butterfly/index.html","a372bc86366d69306ca6671e5b70729b"],["/tags/chrome/index.html","63eee141a0da8364a2ba4491d863ecb3"],["/tags/clashx/index.html","2b3f8ec64847f43e58845ea0da8e4952"],["/tags/cloudflare/index.html","af4378ecd07bfd8a42e3fbb56f325b94"],["/tags/cmd/index.html","65aedcce4147fb95806827aa051812fa"],["/tags/c盘/index.html","9cff181e425b383d746f6ad29216da08"],["/tags/email/index.html","b048bc95ffe459805bdaae91cdce733a"],["/tags/ewomail/index.html","57915d95a4e66c1927fd4fdc7001c8f9"],["/tags/fiddler/index.html","d08b02e9ae018d207b6f134f9c8c9191"],["/tags/flags/index.html","e5e4b17649d7a7de78428eb33c799b2c"],["/tags/footer，页脚/index.html","2bda049047a41753b625a2deb8aebf97"],["/tags/galgame/index.html","cdd19c87f20c379b829e4f04b4a6a7be"],["/tags/git/index.html","383b17d7773f5465e542d75eb3acb605"],["/tags/gitcalendar/index.html","58d2fad38e10ece1edfd62c4ff679845"],["/tags/google-voice/index.html","fa74b43e5693fa5ed1590514ecdf3e03"],["/tags/gv/index.html","290e6b621cf3c8cdb829fb95419f03f0"],["/tags/html/index.html","9b9afc7f2406fe2e090688914e2f1cc1"],["/tags/index-1.html","920e1f022c6960c3644296e6bdccc3c4"],["/tags/index.html","a2b6b23b6324bc490496999867ca2bea"],["/tags/js/index.html","e66489702e4dd7d3ef9cf9c1da519d6e"],["/tags/jsdelivr/index.html","6cb7775270713c9c0ade2f4d8f7db3b7"],["/tags/linux/index.html","52f3c61b9d8cb986cdae2f7eea77cd83"],["/tags/macos/index.html","95007a09b44620302b6231d241087150"],["/tags/madVR/index.html","67b2913fc311ae70cc008e5c32bf15f0"],["/tags/markdown/index.html","e9ea5a2a10c9351c9490bdfe0a8b3d6d"],["/tags/maya/index.html","cb10efc45c62a2410115ca794a4b13f3"],["/tags/mklink/index.html","5716f5a13f992d27969ff15c41aa7c34"],["/tags/office-e5/index.html","1022e2aeacff073becc65cc18205fd0b"],["/tags/onedrive/index.html","0130897a1c4b952678aeb56d301d2925"],["/tags/picGO/index.html","4322960bc783ce4225df4ce58b48655a"],["/tags/pixiv/index.html","1014ab951174347fd3f805e6d77430ba"],["/tags/potplayer/index.html","d9ad1b6a4d2a78accee7f312d2c42f9e"],["/tags/proxypool/index.html","60425b3cda8ba17ee20a1f269f862001"],["/tags/qbitorrent/index.html","4aa9c533cd11dd8870769c98a6cfa948"],["/tags/raidrive/index.html","db97b30c1d953f9afada09124e755c3d"],["/tags/screen/index.html","953759e48827afb5411c61e5f63ed496"],["/tags/speedtest/index.html","10f8ace5bc742df9073e9b0618911b69"],["/tags/ss/index.html","32b4361a9f2a8d4e89a2ecc5afa61f77"],["/tags/ssr/index.html","b728828b60f9c46726614126783c83e7"],["/tags/stickers/index.html","f7e99a8317e1247904ce88701406b808"],["/tags/surfboard/index.html","66f1f9b5f2f12c2ecf8846d46ceba405"],["/tags/tap/index.html","d1e90546d5f643879d7154b8adf2e363"],["/tags/telegram/index.html","8f94ad6d88f17df631d3cc1905e0a550"],["/tags/telegram代理/index.html","a1c88fe2b1afbfb344de8032dce61fcb"],["/tags/tg/index.html","3b9b4faad38235d8d968fccc2376a386"],["/tags/tg代理/index.html","328b604a00bd6dd02adba569aa1f7731"],["/tags/top50/index.html","c11d70696f555b149301cc0fcde1ba8f"],["/tags/tracker/index.html","c5411edd6f6f30a95d08723ffbd14a6c"],["/tags/translate/index.html","53c9a33c3db928a5770d18c8549b945b"],["/tags/translater/index.html","ed220fa70c6772c6207acfaee5a22f9f"],["/tags/tun/index.html","2d19f8369924c2795cc430aded71c8ec"],["/tags/typecho/index.html","92fc011ff3a3ac988843e89ca266d343"],["/tags/v2ray/index.html","e80ac729f6bba1699723304b4d0a369e"],["/tags/vpn/index.html","b29af4cb0b2b099c27ffdd8bcf39882f"],["/tags/vps/index.html","9fe64b7fba1030bcc8cb301bccdf678f"],["/tags/wallpaper/index.html","c1640178e4fd643f8a9bcd32f5769ad2"],["/tags/windows/index.html","813f7fd47b1046cd9120504d8feb93c4"],["/tags/windows端/index.html","8e263c725881ce9de928687f1c881886"],["/tags/xray/index.html","9a29ef91a9e08516067a28dfa6e2b735"],["/tags/下载/index.html","bad8d11bfc55d7bd81862c40d77c5510"],["/tags/不限速/index.html","8cf1d558d3edd23fbf23c8be4033254b"],["/tags/个人网盘/index.html","0d08c9f15cbd83aa8d10e417869cf0ba"],["/tags/主题/index.html","7e9a31a5ba861ed1a40778fb48f87045"],["/tags/二维码/index.html","9c7366246beb8a64bdbfd7504a0492c4"],["/tags/云便签/index.html","ffe0811f8ff1202813b677d8316a1c1f"],["/tags/云盘/index.html","12de5a318c1979e3645e193298fc7cc3"],["/tags/人人/index.html","e27d23282162b6234211253b7e5a5f43"],["/tags/代理/index.html","8138b5e92cfe9aa20060f155410126e9"],["/tags/代码/index.html","0e95191fdfac97aa0af99a5fa6ce0b82"],["/tags/优选IP/index.html","4afb78e4d03c72747c1c7b60a3b5e848"],["/tags/便签/index.html","7d3aee23ca036fce43d28db14b183fc5"],["/tags/保号/index.html","6e5dec0117e3b86b14f6f44d8493e635"],["/tags/免费/index.html","aebeeb854afe41ba2115a85307c551de"],["/tags/免费节点/index.html","f52707a21c9186d66b518c47acf38aa7"],["/tags/加密/index.html","64ed07bb1a66948332c88e8669eaba5c"],["/tags/动画/index.html","e7683d9fd85c6c36068fabe3c6f66194"],["/tags/博客/index.html","023b403e6bd4189b701bd3c3d6ea51a0"],["/tags/历史记录/index.html","b513323007f59b287ac6024e859d71a9"],["/tags/压力/index.html","ce783e779c986c1836d67829a3b4e133"],["/tags/压缩包/index.html","9f1dc4e342a02da1fdd9e2e26a21ef86"],["/tags/反代/index.html","557239f743430324b11d3fdd90078681"],["/tags/可视化/index.html","5ff725e33a3d40a145151ea2c2fc4633"],["/tags/命令/index.html","6553409b928e99267304888ea341f9a0"],["/tags/国家/index.html","c46e6c92ba1c2964cef949c501cddac6"],["/tags/图床/index.html","0d44eecc462cfe5380fd2c58905df819"],["/tags/图片/index.html","8a65be670393d4136c6bc70b131c324f"],["/tags/域名/index.html","d97cf3f40468d118aa040cb09f57ed33"],["/tags/壁纸/index.html","0c9cb103edba69c473dce7a6a12ee91e"],["/tags/多标签/index.html","2750a3e60734e223753424c759313e33"],["/tags/存储/index.html","5eab09c54cba407e865fcd2254150979"],["/tags/学习/index.html","e2572d3d89bf720b7c1523cb65b70397"],["/tags/安全/index.html","97be3dd740fb5e1c93365ce02d618949"],["/tags/安卓/index.html","fd32a4a72b91dedca8db34d3106f722f"],["/tags/宝塔/index.html","4c893717fd749acbd16d767c473a2ad1"],["/tags/小游戏/index.html","430adb3d6dd77fce8867170f3c415ea9"],["/tags/广告/index.html","1055ba017d2f2a9a67b25fa71f2354a8"],["/tags/建站/index.html","cce08c45c9736a57245ca1459259acd8"],["/tags/影视/index.html","56ccb92a1bc0c983e4d74ef2b22d8b8b"],["/tags/微信/index.html","1b27f0999e0d1fdc2bafd32b319c88fd"],["/tags/快速启动/index.html","fde846e58854d2a7377066c2e5976d6a"],["/tags/手机/index.html","80ae6148ea48bd2703a46a11744014a3"],["/tags/托管/index.html","6f339fdcefa2208abf8d0be2757398c2"],["/tags/抓包/index.html","9257dc4ce0202b4fa47f35011b716e04"],["/tags/抓取/index.html","f406e635190001b240f227b2a7819f54"],["/tags/投屏/index.html","1495509fd87fba1b25b501478a9abe10"],["/tags/拓展功能/index.html","162332ec2388d07161d3bd66b4aca989"],["/tags/挂载/index.html","a66c2d62522a25a4d2f9b4123a13ff99"],["/tags/指纹/index.html","da453e53cd769f25d83649730fffffa7"],["/tags/接口/index.html","c58d9a6b173c15a1ce135c9721e7b9b9"],["/tags/提取图片/index.html","3aa63031f41ffdeaae2f356d4ad7c56a"],["/tags/插件/index.html","d293b55d15a9f22277236029dee394e3"],["/tags/搜图/index.html","c3a9fc7b3212cad5e73b91af9aa67be1"],["/tags/搭建/index.html","a2df9b3b5c7e7795e846e1fd513421ac"],["/tags/撤回/index.html","bdc2af9979fe5b829e27698f498572f8"],["/tags/播放器/index.html","92552a114697ad7906fbc2e6a98b772c"],["/tags/支付宝/index.html","4993b2fecbbfdf5bd266381387f912f1"],["/tags/政府网站/index.html","74b8eea824a1c41f555fb376fdeb5adf"],["/tags/效率/index.html","30fe5c8c73a46f3e527ccb35e2194b8a"],["/tags/日历/index.html","bf91e52d500472a80fe618ab3d817b3a"],["/tags/服务器/index.html","710d53a0e78d3dfd10894d4fd0496f75"],["/tags/机场/index.html","a11d1be260148de3d1b13a6a28a3705e"],["/tags/桌面/index.html","a93170d01b0f381ae8c91e76b6153aaa"],["/tags/梯子/index.html","9d4e69c0c186adfb04c825f32f14a51e"],["/tags/检测工具/index.html","a59192d63a41efc72c81dd7592cb6398"],["/tags/汉化/index.html","bca2b4f1e0f97cba8969392fbfa8039f"],["/tags/测压/index.html","2cc8506b6a5364198fb9f9c853e03d8b"],["/tags/测速/index.html","72bac7077051e9755e3161fe83132bfd"],["/tags/浏览器/index.html","75e8f828cc4c0eea3b4253525c629b56"],["/tags/清理/index.html","492a4742ae850d0fb98852658cb3ee1c"],["/tags/滚动条/index.html","014393ab2f83a84ba0c97ec61a6ea3ac"],["/tags/灰色歌曲/index.html","3d88d11ca2c93a30699288c9b1ea72f0"],["/tags/电影/index.html","2722b93ae29f3dda46a6c88a2b9a3dc8"],["/tags/电视剧/index.html","f427520b287337d64625d2ec149840e1"],["/tags/白嫖/index.html","6f1b454cc0fa7a3f1343875776ab7002"],["/tags/百度/index.html","35f1d18389132ebdfc9b8504822020a9"],["/tags/百度云盘/index.html","b0b7dca691a621d4faa19180af86f78e"],["/tags/百科/index.html","d66f5d79bce25e204dd19715e0a1fdc6"],["/tags/短信/index.html","bd71a4529a72cacceed56ae461725b87"],["/tags/硬件/index.html","464b3782bbadf84aabce7914a5b565f2"],["/tags/科学上网/index.html","d072153c2c2704555833c0a10b1208f0"],["/tags/空间/index.html","0866c37e76d26e09cb875073c2b4621b"],["/tags/笔记/index.html","f74c8ed0d143772ade72373079a7148e"],["/tags/简洁/index.html","1c6eb216c6950849f057bd87fc6ba9db"],["/tags/简约/index.html","f58f253693bf1d4bdae18f0bacc58ef9"],["/tags/维基/index.html","311d9973005d0b2d6adb856b60e6845a"],["/tags/网易云/index.html","d1e3f041e738d6053f4adff8b7c65dc6"],["/tags/网盘/index.html","6ff31f4baebfd773f203aa04b28f5723"],["/tags/网站/index.html","bd1e1b91a480ce5ae4ebab72d1a8e8b6"],["/tags/网络/index.html","621aedab19e68a25fe9440aad9a6006f"],["/tags/美化/index.html","36c8f14b460046fa65a5c1faea919e67"],["/tags/翻墙/index.html","d4b5747807994f879e56da7ffb876d63"],["/tags/翻译/index.html","f7e22c61057c3fe303b7df2d83005074"],["/tags/翻译器/index.html","23f04b95e4b15767ac03cb1ce634fe6a"],["/tags/聊天/index.html","c81883acc3b97019279dbeac5542ed01"],["/tags/聊天室/index.html","60ca0853ba37156d27cbfa73c03dc44c"],["/tags/联想/index.html","06ad52f6907c1614a80448cfbbec3031"],["/tags/节点/index.html","e64fc45f2d33b481773d5d48e7acd65c"],["/tags/虚拟手机号/index.html","b2ed74a3d0c471ca34d413bad85584d6"],["/tags/补丁/index.html","3d7a1d696e6cbd426f1a6684a45a41fa"],["/tags/表情包/index.html","f72cfab38a176eef36aa1f5a24701c90"],["/tags/视频/index.html","e76ba5211b48aa5669442e7e30bd716b"],["/tags/解析/index.html","109a0f557819a1866539ef3015c7d42d"],["/tags/订阅链接/index.html","58514b29de83a851239686fd057ec8a3"],["/tags/记录/index.html","881c349a3a93c01b5726d37e91d4992d"],["/tags/识图/index.html","a26b4ba324cf2445e0460d5718114999"],["/tags/语言/index.html","6227344a43484228ad81dc360e41bc99"],["/tags/资源/index.html","b2bf03cdc325bf86de0141541e2bdb94"],["/tags/资源管理器/index.html","be39e197e2895c829b07e3fe620872e4"],["/tags/转移/index.html","58de6999a822bd8a728bea8f2f1f336f"],["/tags/软件/index.html","c3e682f6d1b2a2e9c3c8ffee2e655b3f"],["/tags/轰炸/index.html","0f5f090c31db4d6f983045ae714d8935"],["/tags/迁移/index.html","501c9263d5495cdba4dfc8c1687baa95"],["/tags/远程控制/index.html","b4510bd8505558679773e9e901199648"],["/tags/连接/index.html","5fe835c370f689c5d30124761ebbb42b"],["/tags/追踪/index.html","197009e422990b3dbeda71bf0d6be4e4"],["/tags/速度/index.html","105e33a4e206df7dd70050ec3efc91d3"],["/tags/邮箱/index.html","33cff6ef903ee1a8423ab8a989bf0c08"],["/tags/酷炫/index.html","c1c62cd2c1033331457a9af4d087eb07"],["/tags/钓鱼/index.html","4c08881a34002c2d2e420b7fc9857489"],["/tags/镜像/index.html","21f99ff7ead6a0645c7082c7d7119ee0"],["/tags/随机/index.html","c26ef6015fbd294d44077f2d56a96021"],["/tags/隐藏/index.html","b56f33f17f377be3c8f8ad0e3a3040a4"],["/tags/面板/index.html","f5f4cb081f4fdafb9246d906627ca188"],["/tags/音乐/index.html","951a3a10a8f3958d99a2ddec2610d0fa"],["/tags/高颜值/index.html","d15dedef608bc05c36d3c1070ce0dfc2"],["/tags/魔改/index.html","ee6f9a80916dd761c8891bf9f25075fd"],["/tags/黑名单/index.html","b9265e17f863ebae161fc95192522cb8"],["/urls/index.html","1082a1757f5247d4c77b8dace98bb637"],["/vps/index.html","8379d45731a3161d8585762df4a21d70"],["/支持/index.html","d0069b6e8070c04fd37c68f0b176ce87"]];
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
