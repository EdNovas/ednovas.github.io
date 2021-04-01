/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","caa9c40ff69234ed7febbb91ec50a960"],["/2020/11/29/clash-windows/index.html","c5677937373af95394e0ba634ab8fc8b"],["/2020/11/30/websites2/index.html","3abd1174e473b99ab57851591ef7b074"],["/2020/12/04/iphone4s/index.html","236d79e3fd853c13d8b1b03d4751790f"],["/2020/12/04/onenote/index.html","c4ae91c0e681370609f1628282c67ab4"],["/2020/12/04/wesites1/index.html","c69fb306aa076a69c0e1314e4cbb8ab5"],["/2020/12/06/nokia808/index.html","2c7511fb48214de337760302ec8e2252"],["/2020/12/07/ipad1/index.html","cddafc24d654edf6cf139d6a195065d5"],["/2020/12/18/freesubscribes/index.html","6d4b2c8e549a6cfa638427f8bfd5ddbb"],["/2020/12/19/musics/index.html","fe160b066fd5f35118982970d2182ccc"],["/2020/12/19/shadowrocket/index.html","2fff0d9b922e371dbaa2fb6f15ebd433"],["/2020/12/19/v2ray-windows/index.html","21e731ed422b974492eac7effadbc517"],["/2020/12/19/v2rayng/index.html","d434e378d3870d1e59960fd4d9f9775c"],["/2020/12/20/beoplay/index.html","02ce32dec44e382406c1638db0ae1690"],["/2020/12/20/订阅链接转换/index.html","c5a6a02e1dba2968d3168ed61e899d18"],["/2020/12/21/chrome浏览器下载提速/index.html","4adce11ab768d6ddb51d2251b333a0e5"],["/2020/12/21/免费128线程并发下载xdown/index.html","8531b06fbe0743170a5075aed0b1e672"],["/2020/12/21/免费32线程下载软件ndm/index.html","7c26caf4e135763e0bd9c1acdac9793f"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e5ef6a154ed616a4e5b2ca71be32d46f"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","91d7a90b8de8558de56decf4b01097b5"],["/2020/12/21/广告怎么知道我在想什么/index.html","0e0f14f96e12991263a3391af0de9271"],["/2020/12/21/无名·引子（小说试写）/index.html","cde326a820de939ceb43e7cb8c280230"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","a36cfa0ceb7f96bd768361186b08f7c2"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","733a609fbc22aba68be8dded985dd661"],["/2020/12/21/高速轻量下载器aria2/index.html","eff786bc32d6db15951270e1443f9c53"],["/2020/12/22/2020-cee-roo/index.html","73d39e700ffb7828a5245f75536041c1"],["/2020/12/22/firefox插件、github、steam富强/index.html","00a9b0b4b1a1ab73414d1a8f53614387"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","6ce0b560adf07d755b680f0b50b3194b"],["/2020/12/26/python-day-1/index.html","99be2d93c05f3e5dfc290a37beed544c"],["/2020/12/26/python-day-2/index.html","e5abba35dde7496e4e0857b08ad6f076"],["/2020/12/26/度盘不限速下载方式一赏/index.html","937e0460607796ed16d3be9f143b352c"],["/2020/12/26/添加开机自启软件/index.html","02362e3619fe44415447f74d50757293"],["/2020/12/26/电脑端截图方式一赏/index.html","979869081327724ab4199627483ea8ed"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","96e1ea401339fdac6b9180eeca227f71"],["/2020/12/27/最安全的浏览器tor/index.html","a893c0edd6a0702601e95ba084999147"],["/2020/12/27/网易云刷等级和听歌数量/index.html","95f1fb9b06bf0a05d73cc7d53629613b"],["/2020/12/28/freenom申请免费域名/index.html","7f1fa6d50874fa125584a778b550674f"],["/2020/12/31/机场/index.html","3ac281d55f300a690fdf99a1299dc2da"],["/2021/01/01/M1/index.html","1eb037ea177192d97a24e9a3e5b64554"],["/2021/01/01/compress/index.html","22a76433507a445010761eae8bf74421"],["/2021/01/01/infinityfree/index.html","4b028a4ce892aeb489689f198aa21106"],["/2021/01/01/硬核翻墙/index.html","c5cc32fa42bf6e772ae8484827bf8c10"],["/2021/01/02/qq/index.html","c56b778a189afc51a560eb6bb28c4010"],["/2021/01/03/netch/index.html","4f7ecf169ee75c4bd985dcf26fcd3e7c"],["/2021/01/03/waifu2x/index.html","68b748a11cb52e8e18a411944b8c3caa"],["/2021/01/04/ads/index.html","d5e2a5c1070143fdbc28311c705016cd"],["/2021/01/04/games/index.html","15ef852d0922debd039a7ee0ba904cf1"],["/2021/01/04/heroku/index.html","e3170b58c4b6b47a3ed7bd418a7efb9a"],["/2021/01/06/movies/index.html","cc64a4a45fbd031ee1ee5ed47a4fa835"],["/2021/01/07/google2020/index.html","1809d1c79f85384d68e61b82bde2f862"],["/2021/01/07/lucky/index.html","b6c81007465f87ea72f27b99c0ff5533"],["/2021/01/07/spotify/index.html","f3fcafc08de71a2df6a2c80ef0c43cc2"],["/2021/01/07/thunder/index.html","bd79f1e3281c438e61226e1e5d02931b"],["/2021/01/08/adguardhome/index.html","970f06b1bc6e459bcacad1e15e876ea1"],["/2021/01/10/IBM/index.html","87945bac8049c037a35048732044310d"],["/2021/01/10/potplayer/index.html","1437ded044f3f8753b65a460fb7b98fa"],["/2021/01/10/sakuraanime/index.html","a82c69423be98b55e35303c2254e81f7"],["/2021/01/10/美剧星球/index.html","b25ce2960f79e503ad603790d3b18b11"],["/2021/01/12/telegraph/index.html","40dae92d14e51f5b09c4008a553417a1"],["/2021/01/14/comics/index.html","0c4ad7a74a969b28dc8609bfe7f29ecc"],["/2021/01/14/ftp/index.html","bf698d6e1760832d0de4e57edf2184af"],["/2021/01/14/oraclecloud/index.html","695e4f67f266a2d5a19eb772c0bc6f69"],["/2021/01/14/porkbun/index.html","03e291cbd38b8cabd0c76899bfb2ea86"],["/2021/01/14/powertoys/index.html","23e7a7c8e9cead28f9eef700ac18e1be"],["/2021/01/14/taptap/index.html","dfdbaa47139f406c2cd983b7123af47b"],["/2021/01/14/ubuntuvsftp/index.html","09b9859a28ec40444ea654a802cd024c"],["/2021/01/14/小说/index.html","602e329e5cd5cd308e62757c4b1bc1ab"],["/2021/01/15/freeproxies/index.html","834c5f4bd7236bea65da99db0655e9eb"],["/2021/01/15/incaseformat/index.html","d98b3131db7a8eb451ad3647558fc669"],["/2021/01/16/euserv/index.html","c69be090f5101cead6bd3ca091bf158c"],["/2021/01/16/winxray/index.html","dda9cd198bc1c27a17b0a409cbba65ac"],["/2021/01/18/qqreadhistory/index.html","f6a68b3b5dcefc0b9286c5d04cf525f8"],["/2021/01/18/qqrevoke/index.html","ba207c0516262de9af6cec6e9af3bd03"],["/2021/01/19/freevpn/index.html","9420b7f64fc0490c264154ccfbc1c0b7"],["/2021/01/20/browsertrack/index.html","6386225be155b6e85c1198b1a92d3646"],["/2021/01/20/v2ui/index.html","adcd6e2b5d9ab7c8d4db07b794e51b5f"],["/2021/01/21/failedtoconnect/index.html","32ccb199f8d49457a9ce8cf137fb06d1"],["/2021/01/21/gitcalendar/index.html","0b2c0617e05b464ba0eb212da7c3ec12"],["/2021/01/21/markdownformat/index.html","05495d903499bef645c19eeb3a4ccfac"],["/2021/01/21/markdowntable/index.html","35749a64dec63fef3fbfafc5d1da700e"],["/2021/01/21/vercel/index.html","73068143f00d8e7b0d6a835944757968"],["/2021/01/22/hardware/index.html","12ed199291138bdbb22e43f770e5c366"],["/2021/01/22/muviz/index.html","3d9ad6cbbf8a6cad6a50df821823b51f"],["/2021/01/22/randomapi/index.html","19479fbc5c9fe312e9f8e04168d89c57"],["/2021/01/22/searchimages/index.html","cdbd30b4e98542a6e93c705b106a1757"],["/2021/01/23/RX文件管理器/index.html","46ea2d67a363a55a722d66ce19ff71b5"],["/2021/01/23/chromeflag/index.html","fde530f55628eb4a22ae9d308849836d"],["/2021/01/23/qttabbar/index.html","d13c5d6433a2f351392f5f56db18857b"],["/2021/01/24/githubspeedup/index.html","a5b3bcfd1de7db245ec105c24cb833f6"],["/2021/01/24/jsdelivr/index.html","7a8c768553356d1ff74056bd3e2b9d9d"],["/2021/01/25/note/index.html","78d165174fa39e145f5de0b5a75211b5"],["/2021/01/25/soul/index.html","dbcc83c2ba75a1e6123844605eb75706"],["/2021/01/26/herokuxray/index.html","c751f0503f52930e00bf15e819a3c32f"],["/2021/01/27/proxypool/index.html","c63a671967fc3e378dd476fad872e720"],["/2021/01/27/tracker/index.html","9d5bb1a6e7a5b82091ecb68c7d9e4496"],["/2021/01/30/pandownphp/index.html","4d1e9accc5e1d1114aa2cbd075f144f1"],["/2021/01/31/newgroup/index.html","0a7d44620aa1814b9a3eac9fca8e8e1e"],["/2021/02/01/clashlanguage/index.html","78d445eb3d15d9ad5af215f68710a72f"],["/2021/02/01/encrypt/index.html","c78751cee27c0000126b3a82d4e62047"],["/2021/02/01/footermotion/index.html","5e34d56972dde35341c47974f886bc96"],["/2021/02/01/gitter/index.html","a4c697b905f9d6df50cbaf95803901b1"],["/2021/02/01/pixivtop50/index.html","0657d3867f99641038bdcb1762354e62"],["/2021/02/01/scrollbar/index.html","6b6da789a23c8399af85eb2ae63cca70"],["/2021/02/02/clover/index.html","c821869f180872801a197c25cd5de243"],["/2021/02/02/maya/index.html","d730cfce3a3190d1bb4d6c1f61ba3f3c"],["/2021/02/02/speedcontroller/index.html","015707881ca545aa06ec4eb14d3f9ef9"],["/2021/02/02/yesmusicplayer/index.html","8aed2848ca41b9e1770a3c66490305e6"],["/2021/02/03/lenovoonelite/index.html","f427a46e4b2fc156ea00bf7bee0cbb97"],["/2021/02/03/skipads/index.html","876f29ca484d12bcaeb1410e0716a22f"],["/2021/02/04/picseed/index.html","a38292866013cf6fe98931e998e0c73a"],["/2021/02/04/renren/index.html","f5a25a194c178ffedbde8985b827bae6"],["/2021/02/04/serverstress/index.html","8a4706468f189049c72f4dda328df709"],["/2021/02/04/wikipediazh/index.html","0dac391c685a12b7797dbf372705f29d"],["/2021/02/05/googlevoice/index.html","41d154c0a0a0c28516816b525a5ece99"],["/2021/02/06/clashconnection/index.html","bc1555cf94d96c6df0b4371916af33c5"],["/2021/02/06/gvtransfer/index.html","834bd2c002b3b2bfd4a2c78d425d7653"],["/2021/02/06/todesk/index.html","52e61340d7e79c2563786c0670e7caa2"],["/2021/02/06/vpnblacklist/index.html","ae002f38b246517e98777b5254216ed2"],["/2021/02/07/mklink/index.html","403f79a97466b5afff63303ffbbd9f95"],["/2021/02/07/speedtest/index.html","933d5b0820e525824fb573ecfad49b4f"],["/2021/02/07/translate/index.html","69cbce3d9a2ff75bba957210ab5fbb56"],["/2021/02/08/ewomail/index.html","ca09f6e0ffbe0a82aa326d921bce204b"],["/2021/02/10/officee5/index.html","07733cc071c612a218f5673dd60769db"],["/2021/02/10/raidrive/index.html","32ec310734bbdeb6192450961c237438"],["/2021/02/13/e5sub/index.html","6d07894d87d2ec9834c7b078333dbe9f"],["/2021/02/14/screen/index.html","93beb923cca804ed55bb1d8d3d9d65c1"],["/2021/02/15/clashtun/index.html","d796fe8eccc855408a680660490ae28c"],["/2021/02/15/messageboom/index.html","2b16d4d7369184f0fda4590726f35dcd"],["/2021/02/15/oneindex/index.html","4a6808d7ef15c6f4b517dda30de725e0"],["/2021/02/16/govsites/index.html","b2b127835c73370e8016f05cb2531f93"],["/2021/02/17/hexototypecho/index.html","d08a85d1eded3031a2daa739f53a87b0"],["/2021/02/19/fiddler/index.html","99ddaec9b2f7a0bbd250ed196cd8d6ee"],["/2021/02/22/potplayerset/index.html","87bc734c83dd43bf837b3e990663ec3f"],["/2021/02/22/studyresource/index.html","b72724cba7aee5eac746076bae971fd2"],["/2021/02/22/telegram/index.html","61ff5e7c075312783bfd4ce7cc9c9b31"],["/2021/02/22/videos/index.html","493fce4da5a06fb8b535a0f3836da687"],["/2021/02/24/mtproxy/index.html","8598cad570ec3dd927c4ce244a536890"],["/2021/03/10/catchcat/index.html","f45aa11914b8750f01ff83d2ec000c47"],["/2021/03/10/neteasemusic/index.html","9199e3538ec6c8a4d9a2b03a988ea743"],["/2021/03/10/surfboard/index.html","0eefc936066b2a221795bb5878dba2aa"],["/2021/03/11/vpnandjc/index.html","447c4b085bfc39a54bc20996bb7e3a5f"],["/2021/03/12/qrcodes/index.html","950b6e8b97b6bd8fcfcc47dbf45cfa82"],["/2021/03/20/qv2ray/index.html","99ff5f2241168cbadb0403865fd3f5a9"],["/2021/03/22/freevps/index.html","beb14d222c9db6ab279139f98d2e3486"],["/2021/03/24/tgstickers/index.html","7dda32c52f51b14d463e13b9e2ba6976"],["/2021/03/25/clashx/index.html","28082b969211c7ef5867fdbb5e792736"],["/2021/03/26/bingwallpaper/index.html","41c68a606ca9b03bc3cf4bd88f5b0362"],["/404.html","4b4d66765960e18a449b379d137b3d7b"],["/archives/2020/11/index.html","1205ab7816352738276db854816dcad7"],["/archives/2020/12/index.html","97522b487ae30d6c20a6a8a2afef6056"],["/archives/2020/12/page/2/index.html","4d896504859593b8ee5abacbb5ef902c"],["/archives/2020/12/page/3/index.html","2a6829119c5b0ad6589582ea5dd4dd17"],["/archives/2020/index.html","af8cbfd08d248959cfc3267780601a68"],["/archives/2020/page/2/index.html","1e27e8667c48bb1d06bca2dad7881677"],["/archives/2020/page/3/index.html","87ecebc8ba8da5c135a5c27dbc78a4ef"],["/archives/2021/01/index.html","4518f1f953aba7f4d16a6b31d68d3672"],["/archives/2021/01/page/2/index.html","76491dda4c317f901ff263d0627d0b18"],["/archives/2021/01/page/3/index.html","cf58ad58928ef9ebbdd770e4453359ce"],["/archives/2021/01/page/4/index.html","1aa5fecab2b15b392bed40e425740c2b"],["/archives/2021/02/index.html","0c1b4673db6c060123149163e51ac7fb"],["/archives/2021/02/page/2/index.html","5aaef1c15f0d5faaa368127291cb678c"],["/archives/2021/02/page/3/index.html","5139cc10f908d677b6f2c05b5454c9d9"],["/archives/2021/03/index.html","b5b3b5fe017950a95444577eed05dc3c"],["/archives/2021/index.html","1f3df919e0a1a3d09750aff4ae6628b0"],["/archives/2021/page/2/index.html","ac4f3032fd577c5ca39e488e24c951dd"],["/archives/2021/page/3/index.html","365e1131252fd8b850fe17028412c120"],["/archives/2021/page/4/index.html","579ea73a1d083708c7d9ba5ea163684a"],["/archives/2021/page/5/index.html","f7c024456836e8e1a1610f83f5d5190f"],["/archives/2021/page/6/index.html","8adf64f226834e2119d4046b5219f407"],["/archives/2021/page/7/index.html","104b7aa6409579284b4a4eceb1b720da"],["/archives/2021/page/8/index.html","83cdf7bee8e8c835ec42bf134652273c"],["/archives/index.html","9c9005b71ed5fa1340b602c4a4703305"],["/archives/page/10/index.html","ee9667d405b13cb34de3e82a9bf72bef"],["/archives/page/2/index.html","9bdbf21c302f374c576fa307fc95fe53"],["/archives/page/3/index.html","b2c45f10b6c96a18820c492b5121e1f1"],["/archives/page/4/index.html","5187359eb4d9c17f0b0f99617e4b54f5"],["/archives/page/5/index.html","38ab7ebf7068a484214e73bbf46165f2"],["/archives/page/6/index.html","c6b783d2ef242d20070789079bdf68b6"],["/archives/page/7/index.html","e04bbe756bf49abdf528f0715f23ab54"],["/archives/page/8/index.html","55c9ce6f39a74f24b026303eaf5a0e4d"],["/archives/page/9/index.html","d8d186051eec489bd258ef9569e8313d"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","b41761134183c257024d518013455aab"],["/categories/index.html","df22c702d5fec5116b6dcec1694883f2"],["/categories/下载/index.html","5dcb77ad97cc2744e4c2649f19e143d1"],["/categories/安全/index.html","146be76f36b790b5aa9c6b1ddfc3a9ac"],["/categories/建站/index.html","7590bb03be8bf8ce1ea824318151a3ab"],["/categories/杂/index.html","96c4535830f945c218419fca07628e82"],["/categories/杂/page/2/index.html","1921986fe28a471e2e41353bf7386169"],["/categories/测评/index.html","2062758aca2aadc2ad0974a36ee676cd"],["/categories/科学上网/index.html","0a01aad55e19530e844382b5f6efbb1e"],["/categories/科学上网/page/2/index.html","78bce7280ca5f196a904a10eb39960e8"],["/categories/编程/index.html","04b80fab2d7439195b5fdf0aa307f2dd"],["/categories/网站/index.html","659757130eb1023c06a0075c4cd25a56"],["/categories/网站/page/2/index.html","23804ec27f1f9cf304f69d969872f4f8"],["/categories/软件/index.html","6685b04758626bc170eedb633f6adbc7"],["/categories/软件/page/2/index.html","a51f2ee844b204b24820a1e004309e74"],["/categories/软件/page/3/index.html","492716da41d5da76dcbe2fe13cb4b7e6"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","3157a760736fb1c1fc4ef3030e95a7a0"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","c5987175fbaa2d64f2facd08d33faca0"],["/ios/index.html","f15482f2798e8c237fd3320edd48a9af"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","2c453fed1aa96cb3d13074eaa551176e"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","aff21384b331ac8d3fea609d53526cbc"],["/page/2/index.html","fbdb1a2f109414c70c2949f97cf434e0"],["/page/3/index.html","3652bf28800ebc517227eb21ee89fad5"],["/page/4/index.html","6b8e1953bd58259f782669b3da9990da"],["/page/5/index.html","75d9ab4a4234a418c3322fd2a872cae8"],["/page/6/index.html","46102299b55a35edf29f10b15c0a3270"],["/page/7/index.html","72091714a2e491d7f88e8e8b866f1156"],["/page/8/index.html","ac611ba2966eec21700921c679436fa4"],["/page/9/index.html","560722a7460ec225a3f68072d4e1be5b"],["/payment/index.html","d5d1a51a3732f40bd13893941e767439"],["/privacy-policy/index.html","3659a382cc210334eae4ac5a3d91f211"],["/rss2.xml","e4a5e3317c31cbe19e84aaeb7d03a37b"],["/search.xml","ef8bc29f312abaff7a424ca5b080f4c7"],["/sitemap.xml","b8ead57c3a2e3ced5bebbdad1cd0eb44"],["/sw-register.js","c5f880d059d6a0f4e9dad62caff5e131"],["/tags/5t/index.html","724ee842ef45a613310f9cda6e68ab68"],["/tags/Bing/index.html","bda0de249362b4e9dce757dd080cd6c2"],["/tags/Clash/index.html","a245cd74e32343fc82bb95b88e23a846"],["/tags/Clover/index.html","fb504d8c634fd2baf2cfff166ee6f12a"],["/tags/E5/index.html","84e3a14249651c4cef4bd9c4ad39086c"],["/tags/FTP/index.html","cc1813fb00b2788757a86a7123e0808c"],["/tags/GitHub/index.html","076c9262349dcb29c32caeb5432329b0"],["/tags/Heroku/index.html","dde6bfa98456f838cf6d30b0b496b24a"],["/tags/Hexo/index.html","270a3320ba1319f437ac22fe0d04d2f2"],["/tags/Lenovo/index.html","b85a34e884783f454211194fc85d4815"],["/tags/Oneindex/index.html","080d2356a9562ed88e3ff92e56d2a9bd"],["/tags/QQ/index.html","57c1d6160a8fd728d93689e557d8b7be"],["/tags/QTTabbar/index.html","127dd0caccc20a4b967b099e7446510a"],["/tags/RX文件管理器/index.html","69866addcfe425575a7ae92a53234f0c"],["/tags/Todesk/index.html","b7a07e95b3ab3fb3ae7313ad0c682f63"],["/tags/Vercel/index.html","47fd735c72cef4febc49efb3577717ec"],["/tags/ads/index.html","5e2fef1afb7a40528a8c395e8ab2a64d"],["/tags/api/index.html","8ed41f667133cedddbc764b7a3d9f0cc"],["/tags/app/index.html","9b6799104c844203727f655d17504d58"],["/tags/blacklist/index.html","a2cc98c0f162ac8556415cb9ba21b625"],["/tags/butterfly/index.html","b5456a4efad9cd9b2083eaa5309704cb"],["/tags/chrome/index.html","2976b648cca3e2d4580a9b905120859f"],["/tags/clashx/index.html","26abca832ed18409c9353c75989c2698"],["/tags/cloudflare/index.html","3bc0beaea6992f9583b9a386c10d0935"],["/tags/cmd/index.html","d82d603a6581b9a36aa778935918196f"],["/tags/c盘/index.html","abef06c976cbf4c0ccf33bf8d026b9bf"],["/tags/email/index.html","011b91d3114be0c2f48ac8f9aee39bd1"],["/tags/ewomail/index.html","0f74d33786721787328bfb7338b092ed"],["/tags/fiddler/index.html","0a041cb07fee0283f7b6b24e35d40a34"],["/tags/flags/index.html","8426ec097c535e660bccd68e0ae907c8"],["/tags/footer，页脚/index.html","9ddcadcaa236f738208e5ad09965ad09"],["/tags/galgame/index.html","695b28c1eeb7e701ecb880611f2c1900"],["/tags/git/index.html","1bcabf7f581c615b613a069c6605cd9f"],["/tags/gitcalendar/index.html","b4059787b352c83f9d6d8d192fabb85f"],["/tags/google-voice/index.html","16e2148d68583705a20a2104627dda98"],["/tags/gv/index.html","ac23802be23eaaa4cbdda0c75995d349"],["/tags/html/index.html","05988c4c88fe4cb15d933fc20382265e"],["/tags/index-1.html","4b894fde16ca2cbccec786a26e28a2a4"],["/tags/index.html","1be4d9c3408b172e9496a43975354bf4"],["/tags/js/index.html","afffd9a5cbba5d9b288bd7d4b14eb2fd"],["/tags/jsdelivr/index.html","8e120e9af1958937f3dc8408f84313d5"],["/tags/linux/index.html","d77054879f224f99ddbcaa36dfb1da79"],["/tags/macos/index.html","411db34b425165c266c9715126c84492"],["/tags/madVR/index.html","6addf4be049643403874a52d497f27c1"],["/tags/markdown/index.html","624f15ca07709119bf9c4f365b94911f"],["/tags/maya/index.html","4470a1b4030e77c5708d3506553c88e1"],["/tags/mklink/index.html","9b935683c88e2c8717bf5d06124560ed"],["/tags/office-e5/index.html","66b3a314229dab4fb1abda79bd00da5f"],["/tags/onedrive/index.html","0df5d13a2a7d99101c65eb79c0ce329b"],["/tags/picGO/index.html","4c4a933553f30579726f181c481681dc"],["/tags/pixiv/index.html","25d21d7d9bfd755e0dc779065443e7dd"],["/tags/potplayer/index.html","ed05f1cfab9acf5f292027a1f34141de"],["/tags/proxypool/index.html","6e32126c0796f3b013327dc819caf333"],["/tags/qbitorrent/index.html","48c21a0a3a4e606758bacf33cae74052"],["/tags/raidrive/index.html","51e0d0a8de9bdcb0c6489a3c1a22b8a6"],["/tags/screen/index.html","96bb8f0d631364eca5a31613e199227c"],["/tags/speedtest/index.html","a8b7c3a5cbe16cdbd1dfcba7174a8694"],["/tags/ss/index.html","2f65c67d57a4d5412de17a8d2b729759"],["/tags/ssr/index.html","d2e277e2d16e19f18a0df9b301adcef0"],["/tags/stickers/index.html","656cf7ac6bd85c096557c3b6c250bf9e"],["/tags/surfboard/index.html","71d96371e6c3f55aad78e4ad982e1246"],["/tags/tap/index.html","aed6ee15befd3da7fdc15cf9a47a24ab"],["/tags/telegram/index.html","91f6b8152581a2afe78cff5a5b9491ac"],["/tags/telegram代理/index.html","3c7de9ae2728d8362adf3510cd0ab44a"],["/tags/tg/index.html","8436fe22ef8464f77a93867da9b2989f"],["/tags/tg代理/index.html","d2e89ed1f3fc4c9b5849b49e96c557aa"],["/tags/top50/index.html","196923fb67f86686873b342ba5936236"],["/tags/tracker/index.html","f2ec0cfc73e10c3dff3e699b20f0653e"],["/tags/translate/index.html","6cf0a11901a9af9fbd55405300c9c1c0"],["/tags/translater/index.html","74232d2038a7b413f2d9ef06a2e1c89a"],["/tags/tun/index.html","2165f25d09dd06a8cdaca1507ce6fec6"],["/tags/typecho/index.html","c3f37e236fc7ada617e4a715ad79250a"],["/tags/v2ray/index.html","750c3eb4b7b7aecc45ae078b04fc324e"],["/tags/vpn/index.html","76b3285714a8e240351d595bb810cde4"],["/tags/vps/index.html","9909523fb83ead30c3595d2d47e40294"],["/tags/wallpaper/index.html","4bac0f461279911d558b4bed2a0f051f"],["/tags/windows/index.html","3b6957d56482047838a8bddfe7961a3b"],["/tags/windows端/index.html","902746ab5a5f10e61859e9e8c81766e9"],["/tags/xray/index.html","4235bd051a8a2fbb1b18375c7180c173"],["/tags/下载/index.html","c50f9120fb8bc11f57c986cf5c715c73"],["/tags/不限速/index.html","c7ec50d75536b79ff1134486171cb3c6"],["/tags/个人网盘/index.html","d57dcf25e175dc600af9619e50b01afe"],["/tags/主题/index.html","d937957f86eb84e201b30554266bea85"],["/tags/二维码/index.html","106c83ff39b4ad24a52ec5fd23d19d49"],["/tags/云便签/index.html","4d85a21a9ca3339c2fd8b1a349a3b682"],["/tags/云盘/index.html","518d422ad8e2a3ba5cce30ae15bef446"],["/tags/人人/index.html","239974749b02aa0d5d4bf14e4eb06790"],["/tags/代理/index.html","305838112beb47825d6c77fdc8e2abed"],["/tags/代码/index.html","ba733bca7f2fbbba7aff9abc57f61b5c"],["/tags/优选IP/index.html","7223d58bd9569b393053c9e7aa67501a"],["/tags/便签/index.html","df5b9c8b68a9bd1e20fb552cdf51d36e"],["/tags/保号/index.html","45a8ef38521040c4deff6b10162278f0"],["/tags/免费/index.html","c664b5152010186e5df0561a1731cf38"],["/tags/免费节点/index.html","2885a572bfb55a7c8d08230944fa1fda"],["/tags/加密/index.html","28850a0e7db6bf209785bef4675f546d"],["/tags/动画/index.html","f466684122188eaf29501891d8f60072"],["/tags/博客/index.html","28bbae78afd6608c947e9cea4956bd86"],["/tags/历史记录/index.html","2806e8787cb2a5f5dc1cb91baf44ea0a"],["/tags/压力/index.html","7eacf7fdb0859baf629dd15c9b1a1f27"],["/tags/压缩包/index.html","75b200071a5aeb0fbea06dca6b94fc28"],["/tags/反代/index.html","9b9c66efc60156c6ae9adc5374e51493"],["/tags/可视化/index.html","383ca7fe05af5721f1ea7f49c8e7afd5"],["/tags/命令/index.html","7396dba8e8112c7fac47750650049ba4"],["/tags/国家/index.html","7d2e655d032c93dcd0b7be116fcfc6f9"],["/tags/图床/index.html","14ec67422107a2d0461dff9fae4e712e"],["/tags/图片/index.html","facbd387a209949e8c0de799f825b815"],["/tags/域名/index.html","6340cdecb35d546aba6073e0cc5719cc"],["/tags/壁纸/index.html","30a54c5ae8f767ca2926a1c4ff9fb393"],["/tags/多标签/index.html","81d504eecd6d0b97fe800fe9c4f7d517"],["/tags/存储/index.html","d67ea3e315b5605ad18bdf6f40cb4526"],["/tags/学习/index.html","0454fb159002d1cf47649722f12f82f1"],["/tags/安全/index.html","ff6ca9f1e2bcb64b1d680648d3373b70"],["/tags/安卓/index.html","947a289411927873e9591098d90f6542"],["/tags/宝塔/index.html","590fdc05ff8140194469c269564db22a"],["/tags/小游戏/index.html","1439f6ea892222ac86eb03f711277a62"],["/tags/广告/index.html","3ee444acc001d77b5fa210a2d38c2885"],["/tags/建站/index.html","20e654283e3b8421df78fb74126669df"],["/tags/影视/index.html","ba64e03947e3a7f8af6598b9c81d96af"],["/tags/微信/index.html","9e323bbd0835fc882382f3d08e312480"],["/tags/快速启动/index.html","4a99dcd30e6831fc34b1d53d88e06a7b"],["/tags/手机/index.html","3915407966791a44857a0933eabdf865"],["/tags/托管/index.html","d69cbd55e32545af10e83567b38b1eac"],["/tags/抓包/index.html","5b94e5606c3d39fd42b020e860af74fe"],["/tags/抓取/index.html","07e4035057fdf271242983d6d84e9a3e"],["/tags/投屏/index.html","c0c3ffc83ce4e724f9df715b68532fef"],["/tags/拓展功能/index.html","930d8658f35ac377b07a1a184e090c40"],["/tags/挂载/index.html","e660b105678255da77675c0607ef3cdd"],["/tags/指纹/index.html","00f98e5f70323a54ed01429217dee6a8"],["/tags/接口/index.html","ca5de2649d60ac0e9839e5edcd8d6ef5"],["/tags/提取图片/index.html","0ee29cbe8ff886199a58f236e5499a70"],["/tags/插件/index.html","b353b1bb4dfb22c93ebec5d9d2c6aa03"],["/tags/搜图/index.html","51cbbca9d4bb607ca7ecd984839e8913"],["/tags/搭建/index.html","d5ab81904edf7400eb1050f9f3aecddd"],["/tags/撤回/index.html","fa075790882bb170e5d2f231515d4fb3"],["/tags/播放器/index.html","325db31cdf19d2bda082dc9c4e1e6491"],["/tags/支付宝/index.html","108a296b16e2b609e861ed121ec2bae2"],["/tags/政府网站/index.html","b6ec43d814958dbfb13859cb052ebc07"],["/tags/效率/index.html","1ac29db2c7d901772a4b7c5a3482602e"],["/tags/日历/index.html","3bbdb2cbeab406b40d1ccf36cb82a1d2"],["/tags/服务器/index.html","6614835652cab0e2f2e2fa7ac5d90551"],["/tags/机场/index.html","78c768aa3e1cee35ec7dca8adabac2c5"],["/tags/桌面/index.html","3d3b8d94f8023e4b410c523933d6ce8f"],["/tags/梯子/index.html","a44468b2c60c532bbf36e601f0eaf684"],["/tags/检测工具/index.html","881e7ff4a9158c840665bbc2222fd925"],["/tags/汉化/index.html","a68d98117bfe7c1ffe48afb5da751a8e"],["/tags/测压/index.html","1a1167632a0414780eae824461f191cb"],["/tags/测速/index.html","2add63f1a1b55835e2a886db9453b76b"],["/tags/浏览器/index.html","d735c476271d2b521d984604da7b65a6"],["/tags/清理/index.html","b9f1708ae7a75cdd047115d0d4e6ba62"],["/tags/滚动条/index.html","3b6004bc8e752e70d10d996c1aaa7a48"],["/tags/灰色歌曲/index.html","6309da2e3986bb7e8f61fc6a1398c65c"],["/tags/电影/index.html","3d120be2e13989ddceede8d396dc951b"],["/tags/电视剧/index.html","ff32cacb36a69459333b5f50710a49a5"],["/tags/白嫖/index.html","35ae10a97fb5a0b751835e43c16483d6"],["/tags/百度/index.html","6f275c9bd40bf4a589c97b885ec74133"],["/tags/百度云盘/index.html","71999d1cf8f1e67375ccad546b4d10de"],["/tags/百科/index.html","167fc0d417bdcd46aaa0d0550b4dd494"],["/tags/短信/index.html","7ef9a42e1a090522d157f3bf7b1d947a"],["/tags/硬件/index.html","ec27d2b079808dc7e1171bf1b253d846"],["/tags/科学上网/index.html","3d9ba547722030541775cd59a90a1071"],["/tags/空间/index.html","08457e42cacbcfa706a625a1caba7bc3"],["/tags/笔记/index.html","c73aea72cd4fce9ddee69d17d636c3bb"],["/tags/简洁/index.html","39e4f3d16c65e91014a9af99b3f5e722"],["/tags/简约/index.html","a11e3e93feaa32aa5a04adb16e74572e"],["/tags/维基/index.html","6ce990821f8af3ac30706fef4b12912a"],["/tags/网易云/index.html","040f669df8f83214277d8318b52d4851"],["/tags/网盘/index.html","9118f95d86bfeae1ccafc6a5838b5400"],["/tags/网站/index.html","da3064acc046e8a114415f32fa79a7f7"],["/tags/网络/index.html","d4fc5a12a08181abdf1c93c665947664"],["/tags/美化/index.html","975c69ae654db73f582e35e9a2194314"],["/tags/翻墙/index.html","0234a57b18d833b7a7815c2f3b41fd23"],["/tags/翻译/index.html","8d7ff1644e1ab132a6d9cca263935592"],["/tags/翻译器/index.html","e7636ac3af1f8a6af3df35fc057fc4bd"],["/tags/聊天/index.html","2d9074a89a79507c57f09c096396f708"],["/tags/聊天室/index.html","f32d6c5342686ab9cf169972b9246af8"],["/tags/联想/index.html","2bc21c6f05e5e3ecea8fd52a31ddcb97"],["/tags/节点/index.html","f64d83f1bae8b4489a6198a6de90b93a"],["/tags/虚拟手机号/index.html","7c59a69ba6a60165c0e2539cca3f40a9"],["/tags/补丁/index.html","a4ca013e5c02892819765ff185afd470"],["/tags/表情包/index.html","2e44a9c5798d4cdc6568a1c8e6d9e2b3"],["/tags/视频/index.html","0263f4e589abe95ad3599a0accd7ab5d"],["/tags/解析/index.html","a6888ce80bd4a8d1cd93fac62db21d48"],["/tags/订阅链接/index.html","8835c5d582de5cc1bf09de40d85bf032"],["/tags/记录/index.html","ebca3ae79e7db88ab483e4c907582057"],["/tags/识图/index.html","cb67ee4f9f861e72bac39c623522d0ce"],["/tags/语言/index.html","ad73004d473e50e98bec06790ccc81fe"],["/tags/资源/index.html","286a1b869bb10bc1db7a4e359790bccd"],["/tags/资源管理器/index.html","bf1053e8d9b4c406cfdd77a2a8941099"],["/tags/转移/index.html","24e4c72661b9e123d3b2ddf3defdf2cb"],["/tags/软件/index.html","a2185bf06d9d28590950ffa294214d57"],["/tags/轰炸/index.html","5bf06d1bb9792cc7d071032354cb8718"],["/tags/迁移/index.html","68cd9d6bcbabcb4a261ec7db7b6f49f7"],["/tags/远程控制/index.html","57fd7861ae64c0999c6565bc458e8ec1"],["/tags/连接/index.html","0ce8835c3d4c0690cfa8726f6a6b565c"],["/tags/追踪/index.html","c759cbb6821f9b39fea172c1e2c98411"],["/tags/速度/index.html","b272fcb7658b5f84c89e540772dc7b15"],["/tags/邮箱/index.html","4dc0ba74d9fd255f16f4f99a02a8a548"],["/tags/酷炫/index.html","123bc4f63b9f0e1326c65bf9f190d70f"],["/tags/钓鱼/index.html","26f4dd960851afe3eab2dfded3b36dfa"],["/tags/镜像/index.html","5c4133febd330c10088f5d417d8ce846"],["/tags/随机/index.html","e13931c948d794424aa4650ff05c027b"],["/tags/隐藏/index.html","12e8a5890025c3fa2edad7916ef3ed21"],["/tags/面板/index.html","cb65624cbd8893e9242ef00f34b52647"],["/tags/音乐/index.html","1b8b9eda7c9c16cf00ff5cd72aa3270c"],["/tags/高颜值/index.html","8c9ae2801365a9f77aef7ff8a24707d4"],["/tags/魔改/index.html","b8448b9116c5d556fb2a3ea4b200095d"],["/tags/黑名单/index.html","c2aea7f5ef7fdeba0d170b4c9cd57434"],["/urls/index.html","52173a84bf1705d2d02bfe4f9d8a1ee4"],["/vps/index.html","7ca9f158cff034fdda9ed1e9fc6f2c17"],["/支持/index.html","6294b6f3e5889c67618d7ce3ff1567a5"]];
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
