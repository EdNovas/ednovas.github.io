/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","caa9c40ff69234ed7febbb91ec50a960"],["/2020/11/29/clash-windows/index.html","c5677937373af95394e0ba634ab8fc8b"],["/2020/11/30/websites2/index.html","3abd1174e473b99ab57851591ef7b074"],["/2020/12/04/iphone4s/index.html","236d79e3fd853c13d8b1b03d4751790f"],["/2020/12/04/onenote/index.html","c4ae91c0e681370609f1628282c67ab4"],["/2020/12/04/wesites1/index.html","c69fb306aa076a69c0e1314e4cbb8ab5"],["/2020/12/06/nokia808/index.html","2c7511fb48214de337760302ec8e2252"],["/2020/12/07/ipad1/index.html","cddafc24d654edf6cf139d6a195065d5"],["/2020/12/18/freesubscribes/index.html","69393f3c282a3a016cd6d836367263ae"],["/2020/12/19/musics/index.html","fe160b066fd5f35118982970d2182ccc"],["/2020/12/19/shadowrocket/index.html","2fff0d9b922e371dbaa2fb6f15ebd433"],["/2020/12/19/v2ray-windows/index.html","21e731ed422b974492eac7effadbc517"],["/2020/12/19/v2rayng/index.html","d434e378d3870d1e59960fd4d9f9775c"],["/2020/12/20/beoplay/index.html","02ce32dec44e382406c1638db0ae1690"],["/2020/12/20/订阅链接转换/index.html","c5a6a02e1dba2968d3168ed61e899d18"],["/2020/12/21/chrome浏览器下载提速/index.html","4adce11ab768d6ddb51d2251b333a0e5"],["/2020/12/21/免费128线程并发下载xdown/index.html","8531b06fbe0743170a5075aed0b1e672"],["/2020/12/21/免费32线程下载软件ndm/index.html","7c26caf4e135763e0bd9c1acdac9793f"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e5ef6a154ed616a4e5b2ca71be32d46f"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","91d7a90b8de8558de56decf4b01097b5"],["/2020/12/21/广告怎么知道我在想什么/index.html","0e0f14f96e12991263a3391af0de9271"],["/2020/12/21/无名·引子（小说试写）/index.html","cde326a820de939ceb43e7cb8c280230"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","a36cfa0ceb7f96bd768361186b08f7c2"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","733a609fbc22aba68be8dded985dd661"],["/2020/12/21/高速轻量下载器aria2/index.html","eff786bc32d6db15951270e1443f9c53"],["/2020/12/22/2020-cee-roo/index.html","73d39e700ffb7828a5245f75536041c1"],["/2020/12/22/firefox插件、github、steam富强/index.html","00a9b0b4b1a1ab73414d1a8f53614387"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","6ce0b560adf07d755b680f0b50b3194b"],["/2020/12/26/python-day-1/index.html","99be2d93c05f3e5dfc290a37beed544c"],["/2020/12/26/python-day-2/index.html","e5abba35dde7496e4e0857b08ad6f076"],["/2020/12/26/度盘不限速下载方式一赏/index.html","937e0460607796ed16d3be9f143b352c"],["/2020/12/26/添加开机自启软件/index.html","02362e3619fe44415447f74d50757293"],["/2020/12/26/电脑端截图方式一赏/index.html","979869081327724ab4199627483ea8ed"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","96e1ea401339fdac6b9180eeca227f71"],["/2020/12/27/最安全的浏览器tor/index.html","a893c0edd6a0702601e95ba084999147"],["/2020/12/27/网易云刷等级和听歌数量/index.html","95f1fb9b06bf0a05d73cc7d53629613b"],["/2020/12/28/freenom申请免费域名/index.html","7f1fa6d50874fa125584a778b550674f"],["/2020/12/31/机场/index.html","3ac281d55f300a690fdf99a1299dc2da"],["/2021/01/01/M1/index.html","1eb037ea177192d97a24e9a3e5b64554"],["/2021/01/01/compress/index.html","22a76433507a445010761eae8bf74421"],["/2021/01/01/infinityfree/index.html","4b028a4ce892aeb489689f198aa21106"],["/2021/01/01/硬核翻墙/index.html","c5cc32fa42bf6e772ae8484827bf8c10"],["/2021/01/02/qq/index.html","c56b778a189afc51a560eb6bb28c4010"],["/2021/01/03/netch/index.html","4f7ecf169ee75c4bd985dcf26fcd3e7c"],["/2021/01/03/waifu2x/index.html","68b748a11cb52e8e18a411944b8c3caa"],["/2021/01/04/ads/index.html","d5e2a5c1070143fdbc28311c705016cd"],["/2021/01/04/games/index.html","15ef852d0922debd039a7ee0ba904cf1"],["/2021/01/04/heroku/index.html","e3170b58c4b6b47a3ed7bd418a7efb9a"],["/2021/01/06/movies/index.html","cc64a4a45fbd031ee1ee5ed47a4fa835"],["/2021/01/07/google2020/index.html","1809d1c79f85384d68e61b82bde2f862"],["/2021/01/07/lucky/index.html","b6c81007465f87ea72f27b99c0ff5533"],["/2021/01/07/spotify/index.html","f3fcafc08de71a2df6a2c80ef0c43cc2"],["/2021/01/07/thunder/index.html","bd79f1e3281c438e61226e1e5d02931b"],["/2021/01/08/adguardhome/index.html","970f06b1bc6e459bcacad1e15e876ea1"],["/2021/01/10/IBM/index.html","87945bac8049c037a35048732044310d"],["/2021/01/10/potplayer/index.html","1437ded044f3f8753b65a460fb7b98fa"],["/2021/01/10/sakuraanime/index.html","a82c69423be98b55e35303c2254e81f7"],["/2021/01/10/美剧星球/index.html","b25ce2960f79e503ad603790d3b18b11"],["/2021/01/12/telegraph/index.html","40dae92d14e51f5b09c4008a553417a1"],["/2021/01/14/comics/index.html","0c4ad7a74a969b28dc8609bfe7f29ecc"],["/2021/01/14/ftp/index.html","bf698d6e1760832d0de4e57edf2184af"],["/2021/01/14/oraclecloud/index.html","695e4f67f266a2d5a19eb772c0bc6f69"],["/2021/01/14/porkbun/index.html","03e291cbd38b8cabd0c76899bfb2ea86"],["/2021/01/14/powertoys/index.html","23e7a7c8e9cead28f9eef700ac18e1be"],["/2021/01/14/taptap/index.html","dfdbaa47139f406c2cd983b7123af47b"],["/2021/01/14/ubuntuvsftp/index.html","09b9859a28ec40444ea654a802cd024c"],["/2021/01/14/小说/index.html","602e329e5cd5cd308e62757c4b1bc1ab"],["/2021/01/15/freeproxies/index.html","834c5f4bd7236bea65da99db0655e9eb"],["/2021/01/15/incaseformat/index.html","d98b3131db7a8eb451ad3647558fc669"],["/2021/01/16/euserv/index.html","c69be090f5101cead6bd3ca091bf158c"],["/2021/01/16/winxray/index.html","dda9cd198bc1c27a17b0a409cbba65ac"],["/2021/01/18/qqreadhistory/index.html","f6a68b3b5dcefc0b9286c5d04cf525f8"],["/2021/01/18/qqrevoke/index.html","ba207c0516262de9af6cec6e9af3bd03"],["/2021/01/19/freevpn/index.html","9420b7f64fc0490c264154ccfbc1c0b7"],["/2021/01/20/browsertrack/index.html","6386225be155b6e85c1198b1a92d3646"],["/2021/01/20/v2ui/index.html","adcd6e2b5d9ab7c8d4db07b794e51b5f"],["/2021/01/21/failedtoconnect/index.html","32ccb199f8d49457a9ce8cf137fb06d1"],["/2021/01/21/gitcalendar/index.html","0b2c0617e05b464ba0eb212da7c3ec12"],["/2021/01/21/markdownformat/index.html","05495d903499bef645c19eeb3a4ccfac"],["/2021/01/21/markdowntable/index.html","35749a64dec63fef3fbfafc5d1da700e"],["/2021/01/21/vercel/index.html","73068143f00d8e7b0d6a835944757968"],["/2021/01/22/hardware/index.html","12ed199291138bdbb22e43f770e5c366"],["/2021/01/22/muviz/index.html","3d9ad6cbbf8a6cad6a50df821823b51f"],["/2021/01/22/randomapi/index.html","19479fbc5c9fe312e9f8e04168d89c57"],["/2021/01/22/searchimages/index.html","cdbd30b4e98542a6e93c705b106a1757"],["/2021/01/23/RX文件管理器/index.html","46ea2d67a363a55a722d66ce19ff71b5"],["/2021/01/23/chromeflag/index.html","fde530f55628eb4a22ae9d308849836d"],["/2021/01/23/qttabbar/index.html","d13c5d6433a2f351392f5f56db18857b"],["/2021/01/24/githubspeedup/index.html","a5b3bcfd1de7db245ec105c24cb833f6"],["/2021/01/24/jsdelivr/index.html","7a8c768553356d1ff74056bd3e2b9d9d"],["/2021/01/25/note/index.html","78d165174fa39e145f5de0b5a75211b5"],["/2021/01/25/soul/index.html","dbcc83c2ba75a1e6123844605eb75706"],["/2021/01/26/herokuxray/index.html","c751f0503f52930e00bf15e819a3c32f"],["/2021/01/27/proxypool/index.html","c63a671967fc3e378dd476fad872e720"],["/2021/01/27/tracker/index.html","9d5bb1a6e7a5b82091ecb68c7d9e4496"],["/2021/01/30/pandownphp/index.html","4d1e9accc5e1d1114aa2cbd075f144f1"],["/2021/01/31/newgroup/index.html","0a7d44620aa1814b9a3eac9fca8e8e1e"],["/2021/02/01/clashlanguage/index.html","78d445eb3d15d9ad5af215f68710a72f"],["/2021/02/01/encrypt/index.html","c78751cee27c0000126b3a82d4e62047"],["/2021/02/01/footermotion/index.html","5e34d56972dde35341c47974f886bc96"],["/2021/02/01/gitter/index.html","a4c697b905f9d6df50cbaf95803901b1"],["/2021/02/01/pixivtop50/index.html","0657d3867f99641038bdcb1762354e62"],["/2021/02/01/scrollbar/index.html","6b6da789a23c8399af85eb2ae63cca70"],["/2021/02/02/clover/index.html","c821869f180872801a197c25cd5de243"],["/2021/02/02/maya/index.html","d730cfce3a3190d1bb4d6c1f61ba3f3c"],["/2021/02/02/speedcontroller/index.html","015707881ca545aa06ec4eb14d3f9ef9"],["/2021/02/02/yesmusicplayer/index.html","8aed2848ca41b9e1770a3c66490305e6"],["/2021/02/03/lenovoonelite/index.html","f427a46e4b2fc156ea00bf7bee0cbb97"],["/2021/02/03/skipads/index.html","876f29ca484d12bcaeb1410e0716a22f"],["/2021/02/04/picseed/index.html","a38292866013cf6fe98931e998e0c73a"],["/2021/02/04/renren/index.html","f5a25a194c178ffedbde8985b827bae6"],["/2021/02/04/serverstress/index.html","8a4706468f189049c72f4dda328df709"],["/2021/02/04/wikipediazh/index.html","0dac391c685a12b7797dbf372705f29d"],["/2021/02/05/googlevoice/index.html","41d154c0a0a0c28516816b525a5ece99"],["/2021/02/06/clashconnection/index.html","bc1555cf94d96c6df0b4371916af33c5"],["/2021/02/06/gvtransfer/index.html","834bd2c002b3b2bfd4a2c78d425d7653"],["/2021/02/06/todesk/index.html","52e61340d7e79c2563786c0670e7caa2"],["/2021/02/06/vpnblacklist/index.html","ae002f38b246517e98777b5254216ed2"],["/2021/02/07/mklink/index.html","403f79a97466b5afff63303ffbbd9f95"],["/2021/02/07/speedtest/index.html","933d5b0820e525824fb573ecfad49b4f"],["/2021/02/07/translate/index.html","69cbce3d9a2ff75bba957210ab5fbb56"],["/2021/02/08/ewomail/index.html","ca09f6e0ffbe0a82aa326d921bce204b"],["/2021/02/10/officee5/index.html","07733cc071c612a218f5673dd60769db"],["/2021/02/10/raidrive/index.html","32ec310734bbdeb6192450961c237438"],["/2021/02/13/e5sub/index.html","6d07894d87d2ec9834c7b078333dbe9f"],["/2021/02/14/screen/index.html","93beb923cca804ed55bb1d8d3d9d65c1"],["/2021/02/15/clashtun/index.html","d796fe8eccc855408a680660490ae28c"],["/2021/02/15/messageboom/index.html","2b16d4d7369184f0fda4590726f35dcd"],["/2021/02/15/oneindex/index.html","4a6808d7ef15c6f4b517dda30de725e0"],["/2021/02/16/govsites/index.html","b2b127835c73370e8016f05cb2531f93"],["/2021/02/17/hexototypecho/index.html","d08a85d1eded3031a2daa739f53a87b0"],["/2021/02/19/fiddler/index.html","99ddaec9b2f7a0bbd250ed196cd8d6ee"],["/2021/02/22/potplayerset/index.html","87bc734c83dd43bf837b3e990663ec3f"],["/2021/02/22/studyresource/index.html","b72724cba7aee5eac746076bae971fd2"],["/2021/02/22/telegram/index.html","61ff5e7c075312783bfd4ce7cc9c9b31"],["/2021/02/22/videos/index.html","493fce4da5a06fb8b535a0f3836da687"],["/2021/02/24/mtproxy/index.html","8598cad570ec3dd927c4ce244a536890"],["/2021/03/10/catchcat/index.html","f45aa11914b8750f01ff83d2ec000c47"],["/2021/03/10/neteasemusic/index.html","9199e3538ec6c8a4d9a2b03a988ea743"],["/2021/03/10/surfboard/index.html","0eefc936066b2a221795bb5878dba2aa"],["/2021/03/11/vpnandjc/index.html","447c4b085bfc39a54bc20996bb7e3a5f"],["/2021/03/12/qrcodes/index.html","950b6e8b97b6bd8fcfcc47dbf45cfa82"],["/2021/03/20/qv2ray/index.html","99ff5f2241168cbadb0403865fd3f5a9"],["/2021/03/22/freevps/index.html","beb14d222c9db6ab279139f98d2e3486"],["/2021/03/24/tgstickers/index.html","7dda32c52f51b14d463e13b9e2ba6976"],["/2021/03/25/clashx/index.html","28082b969211c7ef5867fdbb5e792736"],["/2021/03/26/bingwallpaper/index.html","41c68a606ca9b03bc3cf4bd88f5b0362"],["/404.html","9b2f5aa1397a13848a68f6ff34876d18"],["/archives/2020/11/index.html","6f0a998ef92395b43b51ee370316085d"],["/archives/2020/12/index.html","30086c86a0881ee8508aab5c45892b5b"],["/archives/2020/12/page/2/index.html","f7738c73d21cba2ec060a56129e702f1"],["/archives/2020/12/page/3/index.html","e774dc10324b507cfb5ada898d1f21b9"],["/archives/2020/index.html","6bcd6017040f96fa770e5e7803349730"],["/archives/2020/page/2/index.html","58b93ff735dc60be0fd9673e0dafd5c2"],["/archives/2020/page/3/index.html","8c25438d15c53f2224a79f813cfb26cf"],["/archives/2021/01/index.html","b36c4d64e1d5df488365c00a4e8e1f3d"],["/archives/2021/01/page/2/index.html","a2c4bec4f4d3154301f831784982e855"],["/archives/2021/01/page/3/index.html","10f6eda4992194117b56b6cd01a61084"],["/archives/2021/01/page/4/index.html","d46bb2f4cce7b4ba4f8adb4ba86358ab"],["/archives/2021/02/index.html","553424594a62d28be78a7da50f20c3f2"],["/archives/2021/02/page/2/index.html","fda3a361ea44e19cf7a6e9f9b27c807b"],["/archives/2021/02/page/3/index.html","3133292a4f27928cf4cdd19f1720d4d3"],["/archives/2021/03/index.html","1ede2d27f788d7cc3e1f0b30b78cfa6d"],["/archives/2021/index.html","a2eace05075f0028fdff7fb0846b6e06"],["/archives/2021/page/2/index.html","332daa3b6ba4ae5ceb88ff74a30c366d"],["/archives/2021/page/3/index.html","55b57785b812daf5036ffc5f0f506c19"],["/archives/2021/page/4/index.html","89eda9d6200ecc0b4f3a47c1b1b9b46a"],["/archives/2021/page/5/index.html","ad291ee579ffc6649713afbc2bc8782d"],["/archives/2021/page/6/index.html","f8c804eceabd8127edb72bb5fb819d5f"],["/archives/2021/page/7/index.html","7f6d43d81446166a785e133799d11bda"],["/archives/2021/page/8/index.html","07dc643e14b07aca860bc8a972dc6454"],["/archives/index.html","c43602ca28256eebd33848ada1a5388c"],["/archives/page/10/index.html","80ceb9eaf4ad56cdad68a37a6b359bdb"],["/archives/page/2/index.html","4feaebb15618931e35e1c73415312cfb"],["/archives/page/3/index.html","eeb7fcd2a7ee8331b30466b81a28a4c1"],["/archives/page/4/index.html","f2db13b138d7e5098659702d97dff0ca"],["/archives/page/5/index.html","5d9321d01b4c45a37b277fc68785e61d"],["/archives/page/6/index.html","bd330235275f91be9dc03c82901f2168"],["/archives/page/7/index.html","127bd7097a550cf5d1f0e4b904a3da58"],["/archives/page/8/index.html","92f8e9819237903eadd057cf7ec99020"],["/archives/page/9/index.html","bf0fd881503c64dda1f33c0617f0349f"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","e26a41d290cb7bbc3ec6c52c11734c8d"],["/categories/index.html","dbcfa54edf98758a8b7d71a9a306a0fe"],["/categories/下载/index.html","3ec5468e049b6e791dc82e843b1a52fe"],["/categories/安全/index.html","1fd89715c8f76737e853ca41aa0c4f09"],["/categories/建站/index.html","0cafa792e6f946b68d664620f658f55a"],["/categories/杂/index.html","6abfea5c17b2a6d79b22d5a5dbfcc022"],["/categories/杂/page/2/index.html","549dbd89d56cde7cabfe7e47adb3b452"],["/categories/测评/index.html","a688aa686582bd1b6e778fc16aa3a0f9"],["/categories/科学上网/index.html","101bb8ed1cade6acb2633b4718236311"],["/categories/科学上网/page/2/index.html","5e1d1b378616ca6db33a663f9c0ba41e"],["/categories/编程/index.html","1a1ba1b23dc963b6a16dffe1894c963d"],["/categories/网站/index.html","1487cf781e1d97220c78ecc83b5dac93"],["/categories/网站/page/2/index.html","954013af14a8825d3e68533d2480cabc"],["/categories/软件/index.html","9937995ce9ebf0014bad925f8f5b1b1a"],["/categories/软件/page/2/index.html","10e16e446162be98b7d92cee26b9f899"],["/categories/软件/page/3/index.html","ecc37aab4c48c35cc53c37621d584660"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","c00d67309c6a9d739f682efe4bfaf15c"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","8cbef641b98350169c764978ba28d69e"],["/ios/index.html","1777a36ec328beec4ad5ba1fc247efcf"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","70d1bbfafb2b318262695b5410fb8132"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","3ac014fc241ada2884e1841468bd0be7"],["/page/2/index.html","7d133fc6540b936cd81d1cd969502168"],["/page/3/index.html","30ecdf235a891ac65cc2f44ee2498550"],["/page/4/index.html","5e8bb73e9e5b66e89a02d34a5573bf64"],["/page/5/index.html","9e155f327159e931ebf5860c95d62287"],["/page/6/index.html","44f693289818a510ad6e892fac2fb086"],["/page/7/index.html","e2d63a4971a7b91acd90ba3c47b7302f"],["/page/8/index.html","28246bbf41e3374e52993a5313a645a2"],["/page/9/index.html","393a1d0f151c271c72f3cf6509759621"],["/payment/index.html","57b7b0fd019bf552655fdc18b3596c23"],["/privacy-policy/index.html","e024749f5645e8cbf9d8087c58e6602d"],["/rss2.xml","e3a204cf46c2de1a69b24115c9ce6c04"],["/search.xml","f0adcd6f9aa44382dcc8d8750b758da6"],["/sitemap.xml","606744edbcb91f8f5067610c53248962"],["/sw-register.js","5802637b3b20a3e0d12574c67b24b0e8"],["/tags/5t/index.html","c505c7e956de1f94802be167b4114be6"],["/tags/Bing/index.html","8c42ddcd62cff7627fe2c6a818173171"],["/tags/Clash/index.html","68636b2aa50208ff59c0953f40d2a196"],["/tags/Clover/index.html","8973de25fa103c4a7bad6c0645987b4a"],["/tags/E5/index.html","02b7c5abb58fbdb0b581e292058b4114"],["/tags/FTP/index.html","d09cd54824ec7c87f731cbb5982d3435"],["/tags/GitHub/index.html","0aae4085cbf69cce7b8cfd0f332469db"],["/tags/Heroku/index.html","7d045ac942a5e46f8f6d98ba425cb265"],["/tags/Hexo/index.html","9a7c903eec0ec77d4c82f638cc225a7f"],["/tags/Lenovo/index.html","50ca44701a48565f9e0a324485cc0806"],["/tags/Oneindex/index.html","a615c6256542608b5acd9e591658008d"],["/tags/QQ/index.html","c4f523419f694e2537235e562d686355"],["/tags/QTTabbar/index.html","7be94e7e671caed433f7bddd71413ec2"],["/tags/RX文件管理器/index.html","09e02bfd1459a1ff577982814659a730"],["/tags/Todesk/index.html","d7c8046c034718bbee0da10a311b377e"],["/tags/Vercel/index.html","e721d557f74e026d6ad773980adf862b"],["/tags/ads/index.html","e1e51876775bd331dc87bb5f04b8cd57"],["/tags/api/index.html","24dbd22417e2a8255961c1349fe15784"],["/tags/app/index.html","2e108985af1b8a5060279d27a9f245c4"],["/tags/blacklist/index.html","8c6dcd39b396219d416a1cbb11829d65"],["/tags/butterfly/index.html","f06f1b928ecf8b1dd146fd4cf651ec19"],["/tags/chrome/index.html","3676728cf0e0b1d3f4e2b54747acf550"],["/tags/clashx/index.html","6b4fec4cdf6f02f9d0537701b56f98c7"],["/tags/cloudflare/index.html","6ff3d662fb8de460d1790b82620ea338"],["/tags/cmd/index.html","87f244096aa66619b4a7bee421df87c0"],["/tags/c盘/index.html","d7e64f7ef2f6d412947ccdb4f123530b"],["/tags/email/index.html","a0edd3001411d7d8c52dd7dea6b34628"],["/tags/ewomail/index.html","394c6a6a339e2ffb09b773378cbb2d7a"],["/tags/fiddler/index.html","372dce71914e03736c6ccccf92e1b3ef"],["/tags/flags/index.html","9cb42262d09386db083833827c5f5719"],["/tags/footer，页脚/index.html","979b5b2b736c2d00e19b84dae5ba8c16"],["/tags/galgame/index.html","ac0b88d38925899d7a2d01042b98936f"],["/tags/git/index.html","8429285bb2c63a9151dfe620d50a86e6"],["/tags/gitcalendar/index.html","c0b7b1430ec620c0c2d7d68ceae41489"],["/tags/google-voice/index.html","0d3075bba48ad85dab36657343de1654"],["/tags/gv/index.html","9b41dbb9e48c0ba0d3f0850456add430"],["/tags/html/index.html","f56a201331e2827580430a9ea349263a"],["/tags/index-1.html","8ed721923efb74584a04d6a467574d16"],["/tags/index.html","b1ad758a2571647273d0cbb8d26f7ae1"],["/tags/js/index.html","f067f2c134afae0e12db66d0b81d2380"],["/tags/jsdelivr/index.html","f1bf353cf3474938f7d8573c1c2391f9"],["/tags/linux/index.html","bc7f2fd9fe53f2807461cf41fddce03e"],["/tags/macos/index.html","5c4b96721701d07aa127466a304d9e23"],["/tags/madVR/index.html","6f853daf9b5ca6847f64fe75d157be43"],["/tags/markdown/index.html","8608f414cab880858c1cfcb2b6d81b83"],["/tags/maya/index.html","96475441e343453c618b7f9cc6680954"],["/tags/mklink/index.html","4d90aef388cb5789c7cd737f2a80688b"],["/tags/office-e5/index.html","093390b97813d59fdaad3c8839c4a883"],["/tags/onedrive/index.html","e059b93462757fa7c8c9ead88c3c3f66"],["/tags/picGO/index.html","2ee16ad92c4c76a9dfa4a4a3df834568"],["/tags/pixiv/index.html","4d6d0d5c1759fd5149598330b349cd98"],["/tags/potplayer/index.html","2e7bf570e457e6dbb9fbb02d90f236be"],["/tags/proxypool/index.html","a63a2dabf0c58bb5101398e23f45b001"],["/tags/qbitorrent/index.html","c8e3fe6948442340e69c7c7b47874bbd"],["/tags/raidrive/index.html","0090251d2cee4de32423bfeae75b76bc"],["/tags/screen/index.html","737ae6461e34138a55d2143be1820d01"],["/tags/speedtest/index.html","a7be67c13b498c6cff7a627633390f4d"],["/tags/ss/index.html","27c368627a9242d6fd986c251b0db0d0"],["/tags/ssr/index.html","d379be66f20468d87f045541189ccd82"],["/tags/stickers/index.html","55502ad3569b6eb85c54fb1159d69f7c"],["/tags/surfboard/index.html","0a1916b88f9bc35f85061331269744a6"],["/tags/tap/index.html","0c5e7451b4a62fdb1edcc13a485dd577"],["/tags/telegram/index.html","ee50471619607768624e0c7001b85622"],["/tags/telegram代理/index.html","a785475bc7ee5478a0a121666d18a957"],["/tags/tg/index.html","86b796c820418142a8004cfb1342f74f"],["/tags/tg代理/index.html","6cd898653549d0ee5b8ba36455978157"],["/tags/top50/index.html","8f2879fda6b54223b732217855d56880"],["/tags/tracker/index.html","8344768c04f4d6bf00786ef404ca21b5"],["/tags/translate/index.html","4de73dd4f0849d33aafc8264cb720134"],["/tags/translater/index.html","aa50711b6832c37bdb80174c1a733d8a"],["/tags/tun/index.html","4cbd5d392235a07c06254c1c9d4f11e4"],["/tags/typecho/index.html","ae4656f2374e4cc550a26a1e72c46185"],["/tags/v2ray/index.html","2466b48fdebb0ac21ada6990facfc382"],["/tags/vpn/index.html","b45d14923f94c735f272cc2a4df631bd"],["/tags/vps/index.html","84ded9aefafd265baf524514329d9d52"],["/tags/wallpaper/index.html","e6d489336c61433e8fa0b3348f2adab2"],["/tags/windows/index.html","279c9f0c1034d0cd16ac7683fd479721"],["/tags/windows端/index.html","53a38e8f26d7f98188c52b58ca2de891"],["/tags/xray/index.html","f6d4de4795e935bec8bacc77dfbdd036"],["/tags/下载/index.html","61ce3287d8d8c9dc7f50aa4f6b7a1642"],["/tags/不限速/index.html","013dde0c84949ac505f713287b758730"],["/tags/个人网盘/index.html","a2be7122740d93bf016c2c95718e5993"],["/tags/主题/index.html","8db90df4edf199f3688df54b7970aebd"],["/tags/二维码/index.html","e0bac78a88906531c6a1f3a524bc7761"],["/tags/云便签/index.html","1e01ffe36a1883d6474adcc79f693e82"],["/tags/云盘/index.html","11bf376862198b99494d6771e615783b"],["/tags/人人/index.html","a2377e724b62b7dfbe29e834d75a6e60"],["/tags/代理/index.html","99ba8058365cc7b4ed457ec1a851a419"],["/tags/代码/index.html","d13358c3f364b9e9ef5329bf867478ce"],["/tags/优选IP/index.html","f930b7157b87e538c5e602443ff77dfa"],["/tags/便签/index.html","716d9e538c9e20305228cb26dd578462"],["/tags/保号/index.html","0cee752e9f4f1119b32cbeaf1aaa19bc"],["/tags/免费/index.html","19648be35ed213ed4e9b0dd8bcd45b67"],["/tags/免费节点/index.html","e8387d69b6be12381bc926c40a8aba0f"],["/tags/加密/index.html","16412c571518f8a59faed226e9f9dbcc"],["/tags/动画/index.html","dd75dfda39f1e4622a84a9a7eafa7edb"],["/tags/博客/index.html","09ded9a67ae8c47698b7fa51c150ef10"],["/tags/历史记录/index.html","f387fb6bc7a2fa21071e5cec425ffc03"],["/tags/压力/index.html","161243a4425ac62e46bf1a25ed13b939"],["/tags/压缩包/index.html","1f62c3bf868be2f318b91f3904d2996c"],["/tags/反代/index.html","fb79f8e5ba50b09b79a41efb313b4f2f"],["/tags/可视化/index.html","16c422147e01d687262f0bbf6a263f81"],["/tags/命令/index.html","b09dadd7359cca066a27efa521ecd636"],["/tags/国家/index.html","4edf96d6231d2ed3d7bec80459185b93"],["/tags/图床/index.html","a1ed009c88fbce8a23e5f65185d2d8cf"],["/tags/图片/index.html","5da51924637eaa5d7ae1d4ec04dc5181"],["/tags/域名/index.html","a35b9c6d765e431b81ebbcd10dfb4e15"],["/tags/壁纸/index.html","670b5f62cfc11cc4340695f1c7dddec6"],["/tags/多标签/index.html","15c62676ca40136b9280fd303ef434e0"],["/tags/存储/index.html","a60dbdd5d88c35992cf73ad9d6a1bc67"],["/tags/学习/index.html","28c8ebe58bf2daf9c41c4e1298282f78"],["/tags/安全/index.html","a10ae77f9cfe26cdcc816d984963e686"],["/tags/安卓/index.html","f159fb06189cfffc9c14242813be2906"],["/tags/宝塔/index.html","1c8f7edeb8c8b9bd30b7735c8631c5bd"],["/tags/小游戏/index.html","ad7bf69dd35773bf95ff3f55044456a6"],["/tags/广告/index.html","8f33c72099ebe541a8c04fbcf66fc41b"],["/tags/建站/index.html","a6bf98cb717e1e2a3403f6954e593a0d"],["/tags/影视/index.html","b6746425056c7ce3f03c009336258586"],["/tags/微信/index.html","657b31ff08ddf79ef5666a0869763ea0"],["/tags/快速启动/index.html","233c0bd8aee3ed2064c45ccc766406a4"],["/tags/手机/index.html","621d2b59a4ee2d067cce1eaa0a1f0018"],["/tags/托管/index.html","f60ff65963d957af4b3d498cb7aa612c"],["/tags/抓包/index.html","21dfe906894a8cf5f4ea85d3c9e736ef"],["/tags/抓取/index.html","37bc552b5896760c0f94285eb0bfb182"],["/tags/投屏/index.html","4a3a2014ac83a6e7e99cd44318f02016"],["/tags/拓展功能/index.html","30211e2bd743791305ecfe022ab8df72"],["/tags/挂载/index.html","2ef6787a54025d0e060c2bd64794007d"],["/tags/指纹/index.html","d11b9b9446ddd1a76885e1412206877d"],["/tags/接口/index.html","aa22a356b7894020b61f3474ac0886c0"],["/tags/提取图片/index.html","3831dc2aff8ab09e58d575b087f1716f"],["/tags/插件/index.html","ad299e0567c7e8a3ed76441c71dfd88e"],["/tags/搜图/index.html","52990962cad64543660276f635dcaf7e"],["/tags/搭建/index.html","efb2c440643fbd2de991f603fc039c72"],["/tags/撤回/index.html","0c13997f904689cc307054ae52efd0a5"],["/tags/播放器/index.html","baa8be940a37e9cc199535d0b388cd37"],["/tags/支付宝/index.html","3bcd9a52b511a67829758e9b43b117a3"],["/tags/政府网站/index.html","bd2d158ce242e45f1605b73cfd905f06"],["/tags/效率/index.html","b19f3a303d3bff1db7f2d2475c2026be"],["/tags/日历/index.html","f1a370b7f39f5e0ad4bc3cdb2d18b1ac"],["/tags/服务器/index.html","ff01629f25b0d7aa73ec3d3ff282c1d9"],["/tags/机场/index.html","7179470649bf8afc58f947279c5b3098"],["/tags/桌面/index.html","fd1ba1a98adac72278c983d992cd1c61"],["/tags/梯子/index.html","c4a62ec978fec2cfc910aa077b390f52"],["/tags/检测工具/index.html","12ab9ab6413d504350a6ee7b130279f7"],["/tags/汉化/index.html","444fdb2bc3f3720ee18bc48c2a024c10"],["/tags/测压/index.html","e9f20bc48c7998256f509d89157968c0"],["/tags/测速/index.html","1d8d7777890ec9046e6cd6ca537843c8"],["/tags/浏览器/index.html","69573e90bb4972a3e95e0c547d307573"],["/tags/清理/index.html","1a5916ffaf5e101e145cfe7ba53167e9"],["/tags/滚动条/index.html","acf35a788a59ccffe122ed1c5ea34f3f"],["/tags/灰色歌曲/index.html","dae892de4bc2bf970c7e967eeb66969b"],["/tags/电影/index.html","ebec94b5dc935f0d207fa92d06fe421f"],["/tags/电视剧/index.html","e70f5d069dc7e028a6cf914540a2afb4"],["/tags/白嫖/index.html","9ba22cf3ef6d47b769cb610f670cb693"],["/tags/百度/index.html","78c606d30ec27e7e37137407dd39747c"],["/tags/百度云盘/index.html","7909edefd2fa9282a8f7c20d5ba1a0f8"],["/tags/百科/index.html","d1dba06c1d4154ba8f00a7150d798dca"],["/tags/短信/index.html","43f9671bd42297b34f81404c191ee335"],["/tags/硬件/index.html","a8c3b4cbad32eab2cee1ae90b41b04a6"],["/tags/科学上网/index.html","1b73afa0926fceee83aeaa555e947643"],["/tags/空间/index.html","9e048ee8cef2a7cea92363e805fbe8fa"],["/tags/笔记/index.html","8bb0f8d46c99305b717b478f1e112755"],["/tags/简洁/index.html","b471ff74a8265625801476179e4549e6"],["/tags/简约/index.html","8c397a67f43acf6086c16c0bb9487ae1"],["/tags/维基/index.html","562bffeed35b82400ce988469f267304"],["/tags/网易云/index.html","e0bf4d31ac7b519eaf5283adab26b92c"],["/tags/网盘/index.html","4baf855d0cf49f7b63021f5cf411249c"],["/tags/网站/index.html","950edd2a660a73b23e1e1b2623a68ded"],["/tags/网络/index.html","5904fd811b95103137492c49fab4ee43"],["/tags/美化/index.html","ffb17265026925c9af78aff28b5f6720"],["/tags/翻墙/index.html","4c5f03b97386b025aec049e6352984d8"],["/tags/翻译/index.html","6393cf35aa0d89b25671a29cedd1a38f"],["/tags/翻译器/index.html","5dd33aebc9c4b0e86e889d283515b8f0"],["/tags/聊天/index.html","3ce375fd08ec1ef16b1da2a62ea05e91"],["/tags/聊天室/index.html","0135e3c62bb279a02ffeb5d8beb582ff"],["/tags/联想/index.html","0779f9fc59a18f3557026e0f35dc0a0d"],["/tags/节点/index.html","ffd9fd27189f2434c28cde5b0071b652"],["/tags/虚拟手机号/index.html","3bae372db774b926f57a55d71c61448c"],["/tags/补丁/index.html","3d58f2520bf2351a6c921ef6d68dd4cf"],["/tags/表情包/index.html","ff84bab91c4fe0521a18a7e718c305cb"],["/tags/视频/index.html","b5637ccc8fdfad804bf22d4d3b21d675"],["/tags/解析/index.html","1a4697f82e82127d6bcdfb099005992c"],["/tags/订阅链接/index.html","573f23d303cc264eca4300449b91d8fd"],["/tags/记录/index.html","dd469cae3339617bcd78b08226201296"],["/tags/识图/index.html","af56c9f1e04d84a66dc7194659f6254b"],["/tags/语言/index.html","aa14df6f981c795644dd20c57ac38f91"],["/tags/资源/index.html","f78a8ef2bddec192f8632fb68cc1b3f6"],["/tags/资源管理器/index.html","ae742d440ecd7bc657f2ae42fcd4a325"],["/tags/转移/index.html","e7c7b9daadb70e7b93ecda24d7f127f8"],["/tags/软件/index.html","ee2f8dd97c820027ae5a88a6dd211c61"],["/tags/轰炸/index.html","cc87dfece0b76398992cd914686a9a88"],["/tags/迁移/index.html","59a6f5775a5501cb1307591e4712ce23"],["/tags/远程控制/index.html","ca7db3277741035a92b58874dba42e87"],["/tags/连接/index.html","414884efea1b7c856d8acb035dfca6ca"],["/tags/追踪/index.html","ee27040ba9426947998a00e31507261a"],["/tags/速度/index.html","1bafd835106eb7436d7307b80a1514fa"],["/tags/邮箱/index.html","6cce450801d3182b43718e8dd737be1b"],["/tags/酷炫/index.html","a87ee1a4dca7096faafd1cd95167f350"],["/tags/钓鱼/index.html","92ca24c6043e6a5bdbbcdab36fb823bc"],["/tags/镜像/index.html","45d44a7eca4f56cac62bd20aa0886f29"],["/tags/随机/index.html","91fd9b8fc75e6aeaa8aa2392e12f79be"],["/tags/隐藏/index.html","d2618e9373a6b75aa271c176b0f532dc"],["/tags/面板/index.html","57cc686d7cb0d54867088be0514caa99"],["/tags/音乐/index.html","e488273075ec90e22e8358e1bcc5db87"],["/tags/高颜值/index.html","d75f6ff89832052fdbd7df5f44ea27e7"],["/tags/魔改/index.html","020ee85a9e4227a9952c68fa158f56d2"],["/tags/黑名单/index.html","cdc8c21df628c38d84fb598980ebf646"],["/urls/index.html","22cbafcfc51513f633f00a638c4ba3ac"],["/vps/index.html","9f83dafec9ead1d7347fc1ed078750f9"],["/支持/index.html","d21d34f89c14e399cccfee4c3a3b1532"]];
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
