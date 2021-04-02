/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","caa9c40ff69234ed7febbb91ec50a960"],["/2020/11/29/clash-windows/index.html","c5677937373af95394e0ba634ab8fc8b"],["/2020/11/30/websites2/index.html","3abd1174e473b99ab57851591ef7b074"],["/2020/12/04/iphone4s/index.html","236d79e3fd853c13d8b1b03d4751790f"],["/2020/12/04/onenote/index.html","c4ae91c0e681370609f1628282c67ab4"],["/2020/12/04/wesites1/index.html","c69fb306aa076a69c0e1314e4cbb8ab5"],["/2020/12/06/nokia808/index.html","2c7511fb48214de337760302ec8e2252"],["/2020/12/07/ipad1/index.html","cddafc24d654edf6cf139d6a195065d5"],["/2020/12/18/freesubscribes/index.html","fd045d4c29e8e4de39b3c9d7a5f264c5"],["/2020/12/19/musics/index.html","fe160b066fd5f35118982970d2182ccc"],["/2020/12/19/shadowrocket/index.html","2fff0d9b922e371dbaa2fb6f15ebd433"],["/2020/12/19/v2ray-windows/index.html","21e731ed422b974492eac7effadbc517"],["/2020/12/19/v2rayng/index.html","d434e378d3870d1e59960fd4d9f9775c"],["/2020/12/20/beoplay/index.html","02ce32dec44e382406c1638db0ae1690"],["/2020/12/20/订阅链接转换/index.html","c5a6a02e1dba2968d3168ed61e899d18"],["/2020/12/21/chrome浏览器下载提速/index.html","4adce11ab768d6ddb51d2251b333a0e5"],["/2020/12/21/免费128线程并发下载xdown/index.html","8531b06fbe0743170a5075aed0b1e672"],["/2020/12/21/免费32线程下载软件ndm/index.html","7c26caf4e135763e0bd9c1acdac9793f"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e5ef6a154ed616a4e5b2ca71be32d46f"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","91d7a90b8de8558de56decf4b01097b5"],["/2020/12/21/广告怎么知道我在想什么/index.html","0e0f14f96e12991263a3391af0de9271"],["/2020/12/21/无名·引子（小说试写）/index.html","cde326a820de939ceb43e7cb8c280230"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","a36cfa0ceb7f96bd768361186b08f7c2"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","733a609fbc22aba68be8dded985dd661"],["/2020/12/21/高速轻量下载器aria2/index.html","eff786bc32d6db15951270e1443f9c53"],["/2020/12/22/2020-cee-roo/index.html","73d39e700ffb7828a5245f75536041c1"],["/2020/12/22/firefox插件、github、steam富强/index.html","00a9b0b4b1a1ab73414d1a8f53614387"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","6ce0b560adf07d755b680f0b50b3194b"],["/2020/12/26/python-day-1/index.html","99be2d93c05f3e5dfc290a37beed544c"],["/2020/12/26/python-day-2/index.html","e5abba35dde7496e4e0857b08ad6f076"],["/2020/12/26/度盘不限速下载方式一赏/index.html","937e0460607796ed16d3be9f143b352c"],["/2020/12/26/添加开机自启软件/index.html","02362e3619fe44415447f74d50757293"],["/2020/12/26/电脑端截图方式一赏/index.html","979869081327724ab4199627483ea8ed"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","96e1ea401339fdac6b9180eeca227f71"],["/2020/12/27/最安全的浏览器tor/index.html","a893c0edd6a0702601e95ba084999147"],["/2020/12/27/网易云刷等级和听歌数量/index.html","95f1fb9b06bf0a05d73cc7d53629613b"],["/2020/12/28/freenom申请免费域名/index.html","7f1fa6d50874fa125584a778b550674f"],["/2020/12/31/机场/index.html","3ac281d55f300a690fdf99a1299dc2da"],["/2021/01/01/M1/index.html","1eb037ea177192d97a24e9a3e5b64554"],["/2021/01/01/compress/index.html","22a76433507a445010761eae8bf74421"],["/2021/01/01/infinityfree/index.html","4b028a4ce892aeb489689f198aa21106"],["/2021/01/01/硬核翻墙/index.html","c5cc32fa42bf6e772ae8484827bf8c10"],["/2021/01/02/qq/index.html","c56b778a189afc51a560eb6bb28c4010"],["/2021/01/03/netch/index.html","4f7ecf169ee75c4bd985dcf26fcd3e7c"],["/2021/01/03/waifu2x/index.html","68b748a11cb52e8e18a411944b8c3caa"],["/2021/01/04/ads/index.html","d5e2a5c1070143fdbc28311c705016cd"],["/2021/01/04/games/index.html","15ef852d0922debd039a7ee0ba904cf1"],["/2021/01/04/heroku/index.html","e3170b58c4b6b47a3ed7bd418a7efb9a"],["/2021/01/06/movies/index.html","cc64a4a45fbd031ee1ee5ed47a4fa835"],["/2021/01/07/google2020/index.html","1809d1c79f85384d68e61b82bde2f862"],["/2021/01/07/lucky/index.html","b6c81007465f87ea72f27b99c0ff5533"],["/2021/01/07/spotify/index.html","f3fcafc08de71a2df6a2c80ef0c43cc2"],["/2021/01/07/thunder/index.html","bd79f1e3281c438e61226e1e5d02931b"],["/2021/01/08/adguardhome/index.html","970f06b1bc6e459bcacad1e15e876ea1"],["/2021/01/10/IBM/index.html","87945bac8049c037a35048732044310d"],["/2021/01/10/potplayer/index.html","1437ded044f3f8753b65a460fb7b98fa"],["/2021/01/10/sakuraanime/index.html","a82c69423be98b55e35303c2254e81f7"],["/2021/01/10/美剧星球/index.html","b25ce2960f79e503ad603790d3b18b11"],["/2021/01/12/telegraph/index.html","40dae92d14e51f5b09c4008a553417a1"],["/2021/01/14/comics/index.html","0c4ad7a74a969b28dc8609bfe7f29ecc"],["/2021/01/14/ftp/index.html","bf698d6e1760832d0de4e57edf2184af"],["/2021/01/14/oraclecloud/index.html","695e4f67f266a2d5a19eb772c0bc6f69"],["/2021/01/14/porkbun/index.html","03e291cbd38b8cabd0c76899bfb2ea86"],["/2021/01/14/powertoys/index.html","23e7a7c8e9cead28f9eef700ac18e1be"],["/2021/01/14/taptap/index.html","dfdbaa47139f406c2cd983b7123af47b"],["/2021/01/14/ubuntuvsftp/index.html","09b9859a28ec40444ea654a802cd024c"],["/2021/01/14/小说/index.html","602e329e5cd5cd308e62757c4b1bc1ab"],["/2021/01/15/freeproxies/index.html","834c5f4bd7236bea65da99db0655e9eb"],["/2021/01/15/incaseformat/index.html","d98b3131db7a8eb451ad3647558fc669"],["/2021/01/16/euserv/index.html","c69be090f5101cead6bd3ca091bf158c"],["/2021/01/16/winxray/index.html","dda9cd198bc1c27a17b0a409cbba65ac"],["/2021/01/18/qqreadhistory/index.html","f6a68b3b5dcefc0b9286c5d04cf525f8"],["/2021/01/18/qqrevoke/index.html","ba207c0516262de9af6cec6e9af3bd03"],["/2021/01/19/freevpn/index.html","9420b7f64fc0490c264154ccfbc1c0b7"],["/2021/01/20/browsertrack/index.html","6386225be155b6e85c1198b1a92d3646"],["/2021/01/20/v2ui/index.html","adcd6e2b5d9ab7c8d4db07b794e51b5f"],["/2021/01/21/failedtoconnect/index.html","32ccb199f8d49457a9ce8cf137fb06d1"],["/2021/01/21/gitcalendar/index.html","0b2c0617e05b464ba0eb212da7c3ec12"],["/2021/01/21/markdownformat/index.html","05495d903499bef645c19eeb3a4ccfac"],["/2021/01/21/markdowntable/index.html","35749a64dec63fef3fbfafc5d1da700e"],["/2021/01/21/vercel/index.html","73068143f00d8e7b0d6a835944757968"],["/2021/01/22/hardware/index.html","12ed199291138bdbb22e43f770e5c366"],["/2021/01/22/muviz/index.html","3d9ad6cbbf8a6cad6a50df821823b51f"],["/2021/01/22/randomapi/index.html","19479fbc5c9fe312e9f8e04168d89c57"],["/2021/01/22/searchimages/index.html","cdbd30b4e98542a6e93c705b106a1757"],["/2021/01/23/RX文件管理器/index.html","46ea2d67a363a55a722d66ce19ff71b5"],["/2021/01/23/chromeflag/index.html","fde530f55628eb4a22ae9d308849836d"],["/2021/01/23/qttabbar/index.html","d13c5d6433a2f351392f5f56db18857b"],["/2021/01/24/githubspeedup/index.html","a5b3bcfd1de7db245ec105c24cb833f6"],["/2021/01/24/jsdelivr/index.html","7a8c768553356d1ff74056bd3e2b9d9d"],["/2021/01/25/note/index.html","78d165174fa39e145f5de0b5a75211b5"],["/2021/01/25/soul/index.html","dbcc83c2ba75a1e6123844605eb75706"],["/2021/01/26/herokuxray/index.html","c751f0503f52930e00bf15e819a3c32f"],["/2021/01/27/proxypool/index.html","c63a671967fc3e378dd476fad872e720"],["/2021/01/27/tracker/index.html","9d5bb1a6e7a5b82091ecb68c7d9e4496"],["/2021/01/30/pandownphp/index.html","4d1e9accc5e1d1114aa2cbd075f144f1"],["/2021/01/31/newgroup/index.html","0a7d44620aa1814b9a3eac9fca8e8e1e"],["/2021/02/01/clashlanguage/index.html","78d445eb3d15d9ad5af215f68710a72f"],["/2021/02/01/encrypt/index.html","c78751cee27c0000126b3a82d4e62047"],["/2021/02/01/footermotion/index.html","5e34d56972dde35341c47974f886bc96"],["/2021/02/01/gitter/index.html","a4c697b905f9d6df50cbaf95803901b1"],["/2021/02/01/pixivtop50/index.html","0657d3867f99641038bdcb1762354e62"],["/2021/02/01/scrollbar/index.html","6b6da789a23c8399af85eb2ae63cca70"],["/2021/02/02/clover/index.html","c821869f180872801a197c25cd5de243"],["/2021/02/02/maya/index.html","d730cfce3a3190d1bb4d6c1f61ba3f3c"],["/2021/02/02/speedcontroller/index.html","015707881ca545aa06ec4eb14d3f9ef9"],["/2021/02/02/yesmusicplayer/index.html","8aed2848ca41b9e1770a3c66490305e6"],["/2021/02/03/lenovoonelite/index.html","f427a46e4b2fc156ea00bf7bee0cbb97"],["/2021/02/03/skipads/index.html","876f29ca484d12bcaeb1410e0716a22f"],["/2021/02/04/picseed/index.html","a38292866013cf6fe98931e998e0c73a"],["/2021/02/04/renren/index.html","f5a25a194c178ffedbde8985b827bae6"],["/2021/02/04/serverstress/index.html","8a4706468f189049c72f4dda328df709"],["/2021/02/04/wikipediazh/index.html","0dac391c685a12b7797dbf372705f29d"],["/2021/02/05/googlevoice/index.html","41d154c0a0a0c28516816b525a5ece99"],["/2021/02/06/clashconnection/index.html","bc1555cf94d96c6df0b4371916af33c5"],["/2021/02/06/gvtransfer/index.html","834bd2c002b3b2bfd4a2c78d425d7653"],["/2021/02/06/todesk/index.html","52e61340d7e79c2563786c0670e7caa2"],["/2021/02/06/vpnblacklist/index.html","ae002f38b246517e98777b5254216ed2"],["/2021/02/07/mklink/index.html","403f79a97466b5afff63303ffbbd9f95"],["/2021/02/07/speedtest/index.html","933d5b0820e525824fb573ecfad49b4f"],["/2021/02/07/translate/index.html","69cbce3d9a2ff75bba957210ab5fbb56"],["/2021/02/08/ewomail/index.html","ca09f6e0ffbe0a82aa326d921bce204b"],["/2021/02/10/officee5/index.html","07733cc071c612a218f5673dd60769db"],["/2021/02/10/raidrive/index.html","32ec310734bbdeb6192450961c237438"],["/2021/02/13/e5sub/index.html","6d07894d87d2ec9834c7b078333dbe9f"],["/2021/02/14/screen/index.html","93beb923cca804ed55bb1d8d3d9d65c1"],["/2021/02/15/clashtun/index.html","d796fe8eccc855408a680660490ae28c"],["/2021/02/15/messageboom/index.html","2b16d4d7369184f0fda4590726f35dcd"],["/2021/02/15/oneindex/index.html","4a6808d7ef15c6f4b517dda30de725e0"],["/2021/02/16/govsites/index.html","b2b127835c73370e8016f05cb2531f93"],["/2021/02/17/hexototypecho/index.html","d08a85d1eded3031a2daa739f53a87b0"],["/2021/02/19/fiddler/index.html","99ddaec9b2f7a0bbd250ed196cd8d6ee"],["/2021/02/22/potplayerset/index.html","87bc734c83dd43bf837b3e990663ec3f"],["/2021/02/22/studyresource/index.html","b72724cba7aee5eac746076bae971fd2"],["/2021/02/22/telegram/index.html","61ff5e7c075312783bfd4ce7cc9c9b31"],["/2021/02/22/videos/index.html","493fce4da5a06fb8b535a0f3836da687"],["/2021/02/24/mtproxy/index.html","8598cad570ec3dd927c4ce244a536890"],["/2021/03/10/catchcat/index.html","f45aa11914b8750f01ff83d2ec000c47"],["/2021/03/10/neteasemusic/index.html","9199e3538ec6c8a4d9a2b03a988ea743"],["/2021/03/10/surfboard/index.html","0eefc936066b2a221795bb5878dba2aa"],["/2021/03/11/vpnandjc/index.html","447c4b085bfc39a54bc20996bb7e3a5f"],["/2021/03/12/qrcodes/index.html","950b6e8b97b6bd8fcfcc47dbf45cfa82"],["/2021/03/20/qv2ray/index.html","99ff5f2241168cbadb0403865fd3f5a9"],["/2021/03/22/freevps/index.html","beb14d222c9db6ab279139f98d2e3486"],["/2021/03/24/tgstickers/index.html","7dda32c52f51b14d463e13b9e2ba6976"],["/2021/03/25/clashx/index.html","28082b969211c7ef5867fdbb5e792736"],["/2021/03/26/bingwallpaper/index.html","41c68a606ca9b03bc3cf4bd88f5b0362"],["/404.html","7b88dd8a7f60ed5dd0378e8fd9dc419c"],["/archives/2020/11/index.html","8d06ee06dd6d97433e7e321f508bc795"],["/archives/2020/12/index.html","5707e15e52af4afaa5b9c248473a754b"],["/archives/2020/12/page/2/index.html","aa0ab20a8de94df4ce688c8a88e11d0d"],["/archives/2020/12/page/3/index.html","afce1d9b93f80db34fcf8bffc81ab986"],["/archives/2020/index.html","33d8ad4b6ca12561d5cd4ea6a5728810"],["/archives/2020/page/2/index.html","f7bd2e30efceb2c6b6e9cb4e262857f7"],["/archives/2020/page/3/index.html","cb37a1eb5ee8971b500f6898a22ae3d0"],["/archives/2021/01/index.html","bd0862eab2a3ba957ec14917f2d6728e"],["/archives/2021/01/page/2/index.html","04e3a4ac73d8826c79017e199a58875c"],["/archives/2021/01/page/3/index.html","90e71d9119c3b28b514c15ea183bd409"],["/archives/2021/01/page/4/index.html","e028e17c117b1335bd1731c058260102"],["/archives/2021/02/index.html","e0ba036e12a10f176b763c6df288da07"],["/archives/2021/02/page/2/index.html","f58529a15b2a98479ba8061a3ac98fa5"],["/archives/2021/02/page/3/index.html","aa8b315ad2118009c68ce05ecf1aac90"],["/archives/2021/03/index.html","a499fb1a4514fb909cc4d1f37d93daa8"],["/archives/2021/index.html","404f7b575cb8b16511857b379b7cd6f0"],["/archives/2021/page/2/index.html","226e8af3195b5acdf4d8db082116fb97"],["/archives/2021/page/3/index.html","ce3169a9fa009022579aad3797c347fa"],["/archives/2021/page/4/index.html","3c91922bc8809ae4019f62293d2dce2b"],["/archives/2021/page/5/index.html","e33f0b635ddc99bddba9cd29eac45b9e"],["/archives/2021/page/6/index.html","f94bff97c7bcb5575d64e01f762b2941"],["/archives/2021/page/7/index.html","fcf6c3c569f5803416aaa79c763b9898"],["/archives/2021/page/8/index.html","e9e2cce4a498819d7016a242720bce72"],["/archives/index.html","b9238f49876cc2c20cf137a71c41090b"],["/archives/page/10/index.html","a98a006b46e4d8aee08d4211cab605d8"],["/archives/page/2/index.html","42618781106f1e5f249e1c5b57ae2dc8"],["/archives/page/3/index.html","71ea62ce3c9c42919016fcc4f8a72db9"],["/archives/page/4/index.html","d77ec752930d8472e1f680cd85eae3fe"],["/archives/page/5/index.html","7fbd9bba7419c1c46e27bf5557c495e1"],["/archives/page/6/index.html","7fede3501cedc44c629ceda7376ef99b"],["/archives/page/7/index.html","d73cc45913fb5b474574046de89272dd"],["/archives/page/8/index.html","b4fe084f2f8138cdd8aee9152f226afe"],["/archives/page/9/index.html","e024eae1f0c4364b1dcf14834deded45"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","6d6d2ae38f59e758b29c63c1725601d3"],["/categories/index.html","ffd8ac62f68a7af318f8cc8d4d561a45"],["/categories/下载/index.html","6acad98362ae8291b629a324df6bb979"],["/categories/安全/index.html","9f8bb5acb7368283b9544b3ac6edc2f0"],["/categories/建站/index.html","137f0dbfb074ff2b1291524aa9677c75"],["/categories/杂/index.html","7e1f59718e70096456db71b046d924b7"],["/categories/杂/page/2/index.html","18ec420c0af01ad1fb3aaa0bfdf4bdbe"],["/categories/测评/index.html","2da264fc6c19a7a80fa2a54e5a738b23"],["/categories/科学上网/index.html","094549c76f68b50271b8a6f83a73f2e1"],["/categories/科学上网/page/2/index.html","98cf6a2244cccd53711382cc4678ea32"],["/categories/编程/index.html","65011a6f33b94caf252979e42aa1619f"],["/categories/网站/index.html","856572afdb833e5c88825adfe6d03a7f"],["/categories/网站/page/2/index.html","6261ea1194d40c6f31369b3a221e3af2"],["/categories/软件/index.html","75560120b54f9ec43209d31903c06959"],["/categories/软件/page/2/index.html","9eec9ef3c2256e8f5954eb4970de7741"],["/categories/软件/page/3/index.html","5fe30f5bfc6b3766c897d78d497172a9"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","40ce2a24e0782a3d3bbbd85125516a6f"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","5c62f5827881c52ffc99bf88be8520ff"],["/ios/index.html","44146b1c20680af4fd47ce026c188dbc"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","cc14c972c81f7a3982a443633b05b7ed"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","e809441986168a13dd303e5fb03b3543"],["/page/2/index.html","0f15257b9236590ff44a790079646e60"],["/page/3/index.html","8e3007be862186d6272fd3d80de88000"],["/page/4/index.html","9a027124df9fc769a1fd532a4ed572f8"],["/page/5/index.html","8b40614da4f3d22924dbef89fa03d6ec"],["/page/6/index.html","94c773176b9841a5d756c1392be76a27"],["/page/7/index.html","57ddb6c5dbeb55f7b46cf64b1836b2d5"],["/page/8/index.html","55768e38d6731a449bf89ffe6bedddd1"],["/page/9/index.html","c67640b719429b0e15cbc46edfb8e7dc"],["/payment/index.html","0c6e19a93df11542cf413a85d2299dab"],["/privacy-policy/index.html","9496a715406051d5bbd9b9dfe479f248"],["/rss2.xml","7a27bf59ded62f1db3e3b67b017e6d56"],["/search.xml","02198b17a51c33ad74f4df3d0eb475ae"],["/sitemap.xml","b8ead57c3a2e3ced5bebbdad1cd0eb44"],["/sw-register.js","77cd48acac7b9869bc7ae656e5dced04"],["/tags/5t/index.html","88794714964be54dcf2ab11699804ae9"],["/tags/Bing/index.html","82852418d62d3678e07b59ba6e8258ac"],["/tags/Clash/index.html","1651414ea8485634212e5ca09bf84be0"],["/tags/Clover/index.html","87d6507e4a02a3f9251c12d6222e351e"],["/tags/E5/index.html","20a3e413dcaaeeae41e9e49928cf512c"],["/tags/FTP/index.html","f95f7755df39b953d5e7d3e263874d22"],["/tags/GitHub/index.html","3e6d654835b8c5ae140cbb411bd80c90"],["/tags/Heroku/index.html","9930142e61611d76197c8c6b9313c021"],["/tags/Hexo/index.html","48d23efaea4a28ae26ff97f05665f0b6"],["/tags/Lenovo/index.html","55aaa7918b6d850cbbd9c6d2252cb4e4"],["/tags/Oneindex/index.html","193182cfa56cfa6390e0a2e1707a1203"],["/tags/QQ/index.html","3c00915b8a8e8034d4279ff626d96c87"],["/tags/QTTabbar/index.html","312f3dd073728b7ca70232c6b84b0c63"],["/tags/RX文件管理器/index.html","ea9ccbc89161ae2bd4e463cb8ae4e2e1"],["/tags/Todesk/index.html","09327cc3107e14e445411e4ea09d4e9b"],["/tags/Vercel/index.html","fd7ee8358b4ef05bfa8447113aadf855"],["/tags/ads/index.html","85bb9dbb008e35bfbab574293cabfdb3"],["/tags/api/index.html","21c0e6bec4dcb70845d8f20c3125a97e"],["/tags/app/index.html","953b8af598acad2c473633377616d33e"],["/tags/blacklist/index.html","c1544c1782dba3f201c542a23d9d30a6"],["/tags/butterfly/index.html","512c9b01e784d4858dbdbe99b51fd860"],["/tags/chrome/index.html","589eb38964e6a2813c5d808ec4884c45"],["/tags/clashx/index.html","1e97f261b1bbbf901df45abdc97ed03b"],["/tags/cloudflare/index.html","b8807c68ebb14d4aeee12865ce7b9e7f"],["/tags/cmd/index.html","2e8b82b085656e830927813290a80577"],["/tags/c盘/index.html","75edcf3ec1d27c6312647f92fc10c054"],["/tags/email/index.html","3df6e7e2e062914e8799553379b32a87"],["/tags/ewomail/index.html","a6469589c916e2946e96cbf49c399224"],["/tags/fiddler/index.html","255a09a266b3715dbe87d1492051dce4"],["/tags/flags/index.html","c7e9232077aaed19b62fe0d4307dd4ab"],["/tags/footer，页脚/index.html","1da7e3a0f895a56b69592238e7f40ed4"],["/tags/galgame/index.html","8328d4bab87f7b7beac7bd6b9746b64a"],["/tags/git/index.html","236df5fa3776685e1cee77c620252bbf"],["/tags/gitcalendar/index.html","11e8cfe3a63521137b850201c4840b93"],["/tags/google-voice/index.html","754adc9211edfbc1e4d89dc7cbe19622"],["/tags/gv/index.html","d1a5f7dc9a9655cc0f8d517aac4fcc6f"],["/tags/html/index.html","4caaa287a5e74046f6bcc48de15b4e96"],["/tags/index-1.html","5f3d069fa13f25cdf02a476e75bc7edb"],["/tags/index.html","14f1e96eaf05995b64bddcde25afa6fd"],["/tags/js/index.html","93e212b31d141c689209db1dee82367f"],["/tags/jsdelivr/index.html","4ca6113986eeacf1f4bd771b9a8ed319"],["/tags/linux/index.html","3087cbd7a0259205333fa8236928bbf0"],["/tags/macos/index.html","f2848901c07f4219d81bfc8dc1e7b519"],["/tags/madVR/index.html","250b15a2692cb686e426994582758806"],["/tags/markdown/index.html","f108f64a82649f40854a8d6e5e97b1dd"],["/tags/maya/index.html","0ede85c9b8a75f6bef5fc7d664c7fd87"],["/tags/mklink/index.html","5656c615a9cd5b67178b2461f4e1d592"],["/tags/office-e5/index.html","4032e6f1d44d3e16f7f9f0e64d8d544e"],["/tags/onedrive/index.html","c6b530ab8a8bc21d19a552528d72adb2"],["/tags/picGO/index.html","b6fdec0a1ed976c9f0da2c964a908fb3"],["/tags/pixiv/index.html","40deb07e29cc675a79236d5ccb1f0a67"],["/tags/potplayer/index.html","fb3fe30713f42191244f6ef27581ffe0"],["/tags/proxypool/index.html","b33c7e6ff46f6d77b9c45208f6a11a62"],["/tags/qbitorrent/index.html","f8c31323eefe2a1230cc3e19ffd5a3f1"],["/tags/raidrive/index.html","9ec7671b604256443b6cb39fdcf3ac37"],["/tags/screen/index.html","ecb4964e302804471b7628d1a80f353d"],["/tags/speedtest/index.html","ca6a438df1d3829c1b07e92c03d040f9"],["/tags/ss/index.html","9a784ec0772dabda3b5e33b3c0617b9e"],["/tags/ssr/index.html","e40ae6ee6943e9f0f7449f4fa4e77320"],["/tags/stickers/index.html","643ac590a84df3d697b0879d39cdc9cc"],["/tags/surfboard/index.html","318ff6cf982863f5d4466c4354ac972c"],["/tags/tap/index.html","3be728411512d5713c2454be704d6251"],["/tags/telegram/index.html","04bd329f6dc4a327ddb4786719151c1f"],["/tags/telegram代理/index.html","7a50d4742ffc83a8c4cfb4dc4c8a2bd4"],["/tags/tg/index.html","c5f1427aefa702d17c65ca20a7b0d1a0"],["/tags/tg代理/index.html","dd1fed02fc8f49eb65b05e5b6e84a6fa"],["/tags/top50/index.html","e68f145c01b42d2e1dcb67da6de602c1"],["/tags/tracker/index.html","f5e752c7c376f2655117c32dcfc1c3a7"],["/tags/translate/index.html","fe5b07231d70ed6e0906f37f0a6d666d"],["/tags/translater/index.html","4aab21e7afca1f0af44e77d3461c7b01"],["/tags/tun/index.html","2f20c843176542dabecb5545c8c9db72"],["/tags/typecho/index.html","3b9bc9e4230cbb2d1acb3fa8f5072aaf"],["/tags/v2ray/index.html","1038410a4cff1f3c97d9c67f23193f95"],["/tags/vpn/index.html","458f9af77d7c23b579bc9b57c058df06"],["/tags/vps/index.html","1f42c41914e528e035439f129920af96"],["/tags/wallpaper/index.html","b2076e54896d0fcea2910a666c40883b"],["/tags/windows/index.html","019d0bc7f2b43776600ba78c3e690180"],["/tags/windows端/index.html","09dfb2ecb7767ac81dddeca02a5639db"],["/tags/xray/index.html","f3ff10e56d30d8940de9c0e5c82fada6"],["/tags/下载/index.html","408420bc001750865a73f193276ccbc2"],["/tags/不限速/index.html","d2cbb0f51601c9b085423bcf8c2c7db9"],["/tags/个人网盘/index.html","e1fdabc4af53b1c65863d96a435ab6f2"],["/tags/主题/index.html","97584c5a4ece1488b19b127d94601f30"],["/tags/二维码/index.html","6c927c14ca50d2499a65f354842f7b6c"],["/tags/云便签/index.html","01373f108930f16abd247812b94bab50"],["/tags/云盘/index.html","27a0489ee0a248d31db0a6dea319ed49"],["/tags/人人/index.html","050813db8bd25fafc2fdd33c6e0ddd2c"],["/tags/代理/index.html","6e3ce6e1202364587989633276114a1d"],["/tags/代码/index.html","ffe15b14828923b1e31631839ac4b9ff"],["/tags/优选IP/index.html","c0f62569f75c83960b5265de40ef52fe"],["/tags/便签/index.html","c828202c05e1e064e1d34fa79fdb2c7c"],["/tags/保号/index.html","a0b10f53680b4b902c7bc9bf1df4dd83"],["/tags/免费/index.html","33be547db2123795c20bc1d166908892"],["/tags/免费节点/index.html","aef1b9c7efe275f6286f565845f0863c"],["/tags/加密/index.html","5ac99cacedbcdbd25160d392e286a57a"],["/tags/动画/index.html","19e2309344fbfa6e30e8355b5a256349"],["/tags/博客/index.html","c37fc6f5c202f63823ff90c37e073836"],["/tags/历史记录/index.html","95229cc53b5eafb80885d9ebfeec01c1"],["/tags/压力/index.html","128da455a335d6581f4b8a6a4970a460"],["/tags/压缩包/index.html","ec0382003a576588aa045666f0287593"],["/tags/反代/index.html","cf1df682c85764dbf50ded217feb72b7"],["/tags/可视化/index.html","77538b7954e28dbc7dfe6e20b3cc22de"],["/tags/命令/index.html","a428b35e50adad26e37ac22259f8f97e"],["/tags/国家/index.html","50a474eb873a5a8ab5f2c5bb01d37b71"],["/tags/图床/index.html","6033883d4dc918d303ff39b91d90e8c0"],["/tags/图片/index.html","992153ccd42bcbca612efbeb1398e489"],["/tags/域名/index.html","f1bd0d7827e99f666ebd5417ad9311a2"],["/tags/壁纸/index.html","4f2586a12d6a05cb44dc897249115da3"],["/tags/多标签/index.html","71d48e93e70e9df0947882bbb2259187"],["/tags/存储/index.html","e921339582e6e48ba4e2f73942c21fc1"],["/tags/学习/index.html","03875d86b62d54506de0ee0d4bbc4773"],["/tags/安全/index.html","5599d4206c2f3ec4e81770f8d43640b2"],["/tags/安卓/index.html","5ee166876fac98bb20764fb627865012"],["/tags/宝塔/index.html","0c9efc3aec9b7fcc5b9c15cfd111c6d8"],["/tags/小游戏/index.html","d1d61038d8682e6f411ca062dd49746a"],["/tags/广告/index.html","aa921f4dd413b0609c36e8b237fef5fd"],["/tags/建站/index.html","b52a2823ebe6b6e5439292c89f9f17e2"],["/tags/影视/index.html","0bca90354922df8e0c105200d0339ebf"],["/tags/微信/index.html","2d587ceda72ea686eb694d67a3b0041c"],["/tags/快速启动/index.html","59e6088aeac542179725725362d7a601"],["/tags/手机/index.html","c35fa1f244b885d3179f7d96cc338580"],["/tags/托管/index.html","847dbf633dfb6250c5131b7f14be8f77"],["/tags/抓包/index.html","3c62ec837b259e10420aaf8a4e8bedc7"],["/tags/抓取/index.html","69bda5c466b61a462e035a77309d9b5d"],["/tags/投屏/index.html","438d45ac0b84ee5b718e36a784474a6c"],["/tags/拓展功能/index.html","8a626e85164fab6dedae3250c0705264"],["/tags/挂载/index.html","af986ea229e0c9f57da38fb5b46d3cc6"],["/tags/指纹/index.html","60dff391442ae25fb944501d1bf2c0a4"],["/tags/接口/index.html","95f4f632a07106fb944d9c4e20f54be0"],["/tags/提取图片/index.html","ac1c085a5fe7c9ecac9cef090b72fe52"],["/tags/插件/index.html","852bfd877cb519c807d1085697ba94af"],["/tags/搜图/index.html","31a30bf48b95b4c717e18fae0eb41fea"],["/tags/搭建/index.html","9116a6ba908ca0e19dedb7b5ab71f6b8"],["/tags/撤回/index.html","bb780f02ceb40a45615adfe3c500dc02"],["/tags/播放器/index.html","6065c330a12700cb01f815c48705bc07"],["/tags/支付宝/index.html","364bb6615ef4ef17839a7bfa75fdb7ba"],["/tags/政府网站/index.html","bec02338b36edf5c9cb4b5ce1884a07e"],["/tags/效率/index.html","052d630786a6917c2a398f7c963488ed"],["/tags/日历/index.html","62e798a2acaa254c1851c6d94eea488f"],["/tags/服务器/index.html","59bddc14429bd000c5ed592342d24df6"],["/tags/机场/index.html","6dd0a17d850e657225084a896702760e"],["/tags/桌面/index.html","2615b08ba3fa5cbc4482d4171afd528f"],["/tags/梯子/index.html","40c11687e6c10eb57f60e259c9da6b74"],["/tags/检测工具/index.html","3e3b32e0c84598a588420104a648a283"],["/tags/汉化/index.html","9c282b6658e3e3311956ef6422ade5b6"],["/tags/测压/index.html","a6d9a5c056c0927d9d0d3ed496f513c2"],["/tags/测速/index.html","55ec15d611ea6cd7b967d1850b6c2345"],["/tags/浏览器/index.html","c3ce38f6e10077b929980643b816c7a1"],["/tags/清理/index.html","36c47340c7eec787fa94a78d5a702bf5"],["/tags/滚动条/index.html","f3b0270255cd5ae1a686e21bf1247b8f"],["/tags/灰色歌曲/index.html","e12d1dc1599a743b53ab29ac32d91d3e"],["/tags/电影/index.html","8590db3012a2ce50ee3f718a140b0007"],["/tags/电视剧/index.html","c6fda6e5734fd5366a3e503d01eb6fe7"],["/tags/白嫖/index.html","1bb854e06b1902aa980af05b658ed4a9"],["/tags/百度/index.html","57aded27a5e1f32cf59a260339262d8f"],["/tags/百度云盘/index.html","9685324d2e263f49dccb16a2dec5229f"],["/tags/百科/index.html","dae8221e270342d526167b3996e3ebb2"],["/tags/短信/index.html","f9e5b6ba540dce84b576a7f6f53fd673"],["/tags/硬件/index.html","900aaa28ee2e7412602fdca8ce460691"],["/tags/科学上网/index.html","74064a8fc3e5f8db654915b688629655"],["/tags/空间/index.html","7c4503c77910919a1eace5710c8acc30"],["/tags/笔记/index.html","5baeaab67793e0b1d0b421d93ee0574a"],["/tags/简洁/index.html","2c228110b6129f66901ad15cc9b6489f"],["/tags/简约/index.html","7e34d0b4a6be9123c991ea9cc2e04b20"],["/tags/维基/index.html","54db683d9a446d7d3f1279181df96edc"],["/tags/网易云/index.html","91692f2329919eacc43993d1ba0ad3ec"],["/tags/网盘/index.html","25330585ff6c670417158f96d45617f1"],["/tags/网站/index.html","b0417097209ed87c82f72b6f2721145a"],["/tags/网络/index.html","1046b43bdbf114dc567da3dbde78524d"],["/tags/美化/index.html","a03e7df9e2e59505a6555d523f75a201"],["/tags/翻墙/index.html","59d14fa29f04540f2fe42eace778188c"],["/tags/翻译/index.html","c5a84b1ec3737ce33c96a14dd224b1ff"],["/tags/翻译器/index.html","d04f9cdc864638b6a0716d4c499122c7"],["/tags/聊天/index.html","13cc6142b73241ccf40a33810af4de69"],["/tags/聊天室/index.html","b98a082d238a776bfe169b401e539443"],["/tags/联想/index.html","8d1df03c7d4ecff88c45483861bbb138"],["/tags/节点/index.html","ef49ce41e7eb38d9cbc241de901cbf06"],["/tags/虚拟手机号/index.html","f52e8ea075a45f79d93bd2f654a6ec64"],["/tags/补丁/index.html","edbf0968c49b63b3847437c7e2b7e3d2"],["/tags/表情包/index.html","28556e3e5d6735ead786ca71b40c23d3"],["/tags/视频/index.html","9e421a7752073b41efd3343ea77dfa37"],["/tags/解析/index.html","7db38fcbc29dc46a73c91972d0a3899d"],["/tags/订阅链接/index.html","c8de1c7178073d7b4dc2f1acff117bf3"],["/tags/记录/index.html","9342a50ed8bb1367d303d6fcc87f29a2"],["/tags/识图/index.html","efab818d6521bf45d020f331cdd172b8"],["/tags/语言/index.html","bfbd85ae16d5903124ee110aecd118f1"],["/tags/资源/index.html","a3695b1686ef74dfa3bdbea7e24b148b"],["/tags/资源管理器/index.html","b42a0eee9461d55b457bc9f5fcd0314d"],["/tags/转移/index.html","96d6954037e51dfe52c11f2af06d681e"],["/tags/软件/index.html","c145c2b8e36dbe99b87e38c010508fa5"],["/tags/轰炸/index.html","584f2cd6805de672f1fd12ea47259265"],["/tags/迁移/index.html","d97968405021022bac0c5be938eab76c"],["/tags/远程控制/index.html","e310cd065ab402bbe0ef9ef320c16ec0"],["/tags/连接/index.html","90c768adde695c001bcfe3ab32c02abc"],["/tags/追踪/index.html","e7ec80dd8880241849112aa64a5da955"],["/tags/速度/index.html","141e47c68bd0143313f8ee1e45532fc1"],["/tags/邮箱/index.html","ecdd8d5856b6fe36f1d75838591d1193"],["/tags/酷炫/index.html","ec8d4181a7b64f6bb2c174f3a8fadb39"],["/tags/钓鱼/index.html","74a71784eb11a594b19dd35c8dd8f350"],["/tags/镜像/index.html","882c404664c82c85a3ebb3c69031002d"],["/tags/随机/index.html","ace8adb422bd1dbb490a640646d0611f"],["/tags/隐藏/index.html","4600aa2f4172aad70aed60c639f4b2fe"],["/tags/面板/index.html","8d15be982f2633afe842ac34887c8856"],["/tags/音乐/index.html","d48928c425ec04a35cd4bbc56e175ec9"],["/tags/高颜值/index.html","3ce5c1c63cddd02460afabb2495cb380"],["/tags/魔改/index.html","4ef142512e1591a9fdb643737a1ee89b"],["/tags/黑名单/index.html","6127afddb088a741ad3f70da995b29ef"],["/urls/index.html","74e734c234892d281a189359dfbae337"],["/vps/index.html","6a66cf171be0aa83b4d1823488ff80f1"],["/支持/index.html","6cb16dcd2ad79b6bf16be195a3dca606"]];
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
