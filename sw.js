/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","caa9c40ff69234ed7febbb91ec50a960"],["/2020/11/29/clash-windows/index.html","c5677937373af95394e0ba634ab8fc8b"],["/2020/11/30/websites2/index.html","3abd1174e473b99ab57851591ef7b074"],["/2020/12/04/iphone4s/index.html","236d79e3fd853c13d8b1b03d4751790f"],["/2020/12/04/onenote/index.html","c4ae91c0e681370609f1628282c67ab4"],["/2020/12/04/wesites1/index.html","c69fb306aa076a69c0e1314e4cbb8ab5"],["/2020/12/06/nokia808/index.html","2c7511fb48214de337760302ec8e2252"],["/2020/12/07/ipad1/index.html","cddafc24d654edf6cf139d6a195065d5"],["/2020/12/18/freesubscribes/index.html","db22e0673d1c05c691726b672527fbd2"],["/2020/12/19/musics/index.html","fe160b066fd5f35118982970d2182ccc"],["/2020/12/19/shadowrocket/index.html","2fff0d9b922e371dbaa2fb6f15ebd433"],["/2020/12/19/v2ray-windows/index.html","21e731ed422b974492eac7effadbc517"],["/2020/12/19/v2rayng/index.html","d434e378d3870d1e59960fd4d9f9775c"],["/2020/12/20/beoplay/index.html","02ce32dec44e382406c1638db0ae1690"],["/2020/12/20/订阅链接转换/index.html","c5a6a02e1dba2968d3168ed61e899d18"],["/2020/12/21/chrome浏览器下载提速/index.html","4adce11ab768d6ddb51d2251b333a0e5"],["/2020/12/21/免费128线程并发下载xdown/index.html","8531b06fbe0743170a5075aed0b1e672"],["/2020/12/21/免费32线程下载软件ndm/index.html","7c26caf4e135763e0bd9c1acdac9793f"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e5ef6a154ed616a4e5b2ca71be32d46f"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","91d7a90b8de8558de56decf4b01097b5"],["/2020/12/21/广告怎么知道我在想什么/index.html","0e0f14f96e12991263a3391af0de9271"],["/2020/12/21/无名·引子（小说试写）/index.html","cde326a820de939ceb43e7cb8c280230"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","a36cfa0ceb7f96bd768361186b08f7c2"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","733a609fbc22aba68be8dded985dd661"],["/2020/12/21/高速轻量下载器aria2/index.html","eff786bc32d6db15951270e1443f9c53"],["/2020/12/22/2020-cee-roo/index.html","73d39e700ffb7828a5245f75536041c1"],["/2020/12/22/firefox插件、github、steam富强/index.html","00a9b0b4b1a1ab73414d1a8f53614387"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","6ce0b560adf07d755b680f0b50b3194b"],["/2020/12/26/python-day-1/index.html","99be2d93c05f3e5dfc290a37beed544c"],["/2020/12/26/python-day-2/index.html","e5abba35dde7496e4e0857b08ad6f076"],["/2020/12/26/度盘不限速下载方式一赏/index.html","937e0460607796ed16d3be9f143b352c"],["/2020/12/26/添加开机自启软件/index.html","02362e3619fe44415447f74d50757293"],["/2020/12/26/电脑端截图方式一赏/index.html","979869081327724ab4199627483ea8ed"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","96e1ea401339fdac6b9180eeca227f71"],["/2020/12/27/最安全的浏览器tor/index.html","a893c0edd6a0702601e95ba084999147"],["/2020/12/27/网易云刷等级和听歌数量/index.html","95f1fb9b06bf0a05d73cc7d53629613b"],["/2020/12/28/freenom申请免费域名/index.html","7f1fa6d50874fa125584a778b550674f"],["/2020/12/31/机场/index.html","3ac281d55f300a690fdf99a1299dc2da"],["/2021/01/01/M1/index.html","1eb037ea177192d97a24e9a3e5b64554"],["/2021/01/01/compress/index.html","22a76433507a445010761eae8bf74421"],["/2021/01/01/infinityfree/index.html","4b028a4ce892aeb489689f198aa21106"],["/2021/01/01/硬核翻墙/index.html","c5cc32fa42bf6e772ae8484827bf8c10"],["/2021/01/02/qq/index.html","c56b778a189afc51a560eb6bb28c4010"],["/2021/01/03/netch/index.html","4f7ecf169ee75c4bd985dcf26fcd3e7c"],["/2021/01/03/waifu2x/index.html","68b748a11cb52e8e18a411944b8c3caa"],["/2021/01/04/ads/index.html","d5e2a5c1070143fdbc28311c705016cd"],["/2021/01/04/games/index.html","15ef852d0922debd039a7ee0ba904cf1"],["/2021/01/04/heroku/index.html","e3170b58c4b6b47a3ed7bd418a7efb9a"],["/2021/01/06/movies/index.html","cc64a4a45fbd031ee1ee5ed47a4fa835"],["/2021/01/07/google2020/index.html","1809d1c79f85384d68e61b82bde2f862"],["/2021/01/07/lucky/index.html","b6c81007465f87ea72f27b99c0ff5533"],["/2021/01/07/spotify/index.html","f3fcafc08de71a2df6a2c80ef0c43cc2"],["/2021/01/07/thunder/index.html","bd79f1e3281c438e61226e1e5d02931b"],["/2021/01/08/adguardhome/index.html","970f06b1bc6e459bcacad1e15e876ea1"],["/2021/01/10/IBM/index.html","87945bac8049c037a35048732044310d"],["/2021/01/10/potplayer/index.html","1437ded044f3f8753b65a460fb7b98fa"],["/2021/01/10/sakuraanime/index.html","a82c69423be98b55e35303c2254e81f7"],["/2021/01/10/美剧星球/index.html","b25ce2960f79e503ad603790d3b18b11"],["/2021/01/12/telegraph/index.html","40dae92d14e51f5b09c4008a553417a1"],["/2021/01/14/comics/index.html","0c4ad7a74a969b28dc8609bfe7f29ecc"],["/2021/01/14/ftp/index.html","bf698d6e1760832d0de4e57edf2184af"],["/2021/01/14/oraclecloud/index.html","695e4f67f266a2d5a19eb772c0bc6f69"],["/2021/01/14/porkbun/index.html","03e291cbd38b8cabd0c76899bfb2ea86"],["/2021/01/14/powertoys/index.html","23e7a7c8e9cead28f9eef700ac18e1be"],["/2021/01/14/taptap/index.html","dfdbaa47139f406c2cd983b7123af47b"],["/2021/01/14/ubuntuvsftp/index.html","09b9859a28ec40444ea654a802cd024c"],["/2021/01/14/小说/index.html","602e329e5cd5cd308e62757c4b1bc1ab"],["/2021/01/15/freeproxies/index.html","834c5f4bd7236bea65da99db0655e9eb"],["/2021/01/15/incaseformat/index.html","d98b3131db7a8eb451ad3647558fc669"],["/2021/01/16/euserv/index.html","c69be090f5101cead6bd3ca091bf158c"],["/2021/01/16/winxray/index.html","dda9cd198bc1c27a17b0a409cbba65ac"],["/2021/01/18/qqreadhistory/index.html","f6a68b3b5dcefc0b9286c5d04cf525f8"],["/2021/01/18/qqrevoke/index.html","ba207c0516262de9af6cec6e9af3bd03"],["/2021/01/19/freevpn/index.html","9420b7f64fc0490c264154ccfbc1c0b7"],["/2021/01/20/browsertrack/index.html","6386225be155b6e85c1198b1a92d3646"],["/2021/01/20/v2ui/index.html","adcd6e2b5d9ab7c8d4db07b794e51b5f"],["/2021/01/21/failedtoconnect/index.html","32ccb199f8d49457a9ce8cf137fb06d1"],["/2021/01/21/gitcalendar/index.html","0b2c0617e05b464ba0eb212da7c3ec12"],["/2021/01/21/markdownformat/index.html","05495d903499bef645c19eeb3a4ccfac"],["/2021/01/21/markdowntable/index.html","35749a64dec63fef3fbfafc5d1da700e"],["/2021/01/21/vercel/index.html","73068143f00d8e7b0d6a835944757968"],["/2021/01/22/hardware/index.html","12ed199291138bdbb22e43f770e5c366"],["/2021/01/22/muviz/index.html","3d9ad6cbbf8a6cad6a50df821823b51f"],["/2021/01/22/randomapi/index.html","19479fbc5c9fe312e9f8e04168d89c57"],["/2021/01/22/searchimages/index.html","cdbd30b4e98542a6e93c705b106a1757"],["/2021/01/23/RX文件管理器/index.html","46ea2d67a363a55a722d66ce19ff71b5"],["/2021/01/23/chromeflag/index.html","fde530f55628eb4a22ae9d308849836d"],["/2021/01/23/qttabbar/index.html","d13c5d6433a2f351392f5f56db18857b"],["/2021/01/24/githubspeedup/index.html","a5b3bcfd1de7db245ec105c24cb833f6"],["/2021/01/24/jsdelivr/index.html","7a8c768553356d1ff74056bd3e2b9d9d"],["/2021/01/25/note/index.html","78d165174fa39e145f5de0b5a75211b5"],["/2021/01/25/soul/index.html","dbcc83c2ba75a1e6123844605eb75706"],["/2021/01/26/herokuxray/index.html","c751f0503f52930e00bf15e819a3c32f"],["/2021/01/27/proxypool/index.html","c63a671967fc3e378dd476fad872e720"],["/2021/01/27/tracker/index.html","9d5bb1a6e7a5b82091ecb68c7d9e4496"],["/2021/01/30/pandownphp/index.html","4d1e9accc5e1d1114aa2cbd075f144f1"],["/2021/01/31/newgroup/index.html","0a7d44620aa1814b9a3eac9fca8e8e1e"],["/2021/02/01/clashlanguage/index.html","78d445eb3d15d9ad5af215f68710a72f"],["/2021/02/01/encrypt/index.html","c78751cee27c0000126b3a82d4e62047"],["/2021/02/01/footermotion/index.html","5e34d56972dde35341c47974f886bc96"],["/2021/02/01/gitter/index.html","a4c697b905f9d6df50cbaf95803901b1"],["/2021/02/01/pixivtop50/index.html","0657d3867f99641038bdcb1762354e62"],["/2021/02/01/scrollbar/index.html","6b6da789a23c8399af85eb2ae63cca70"],["/2021/02/02/clover/index.html","c821869f180872801a197c25cd5de243"],["/2021/02/02/maya/index.html","d730cfce3a3190d1bb4d6c1f61ba3f3c"],["/2021/02/02/speedcontroller/index.html","015707881ca545aa06ec4eb14d3f9ef9"],["/2021/02/02/yesmusicplayer/index.html","8aed2848ca41b9e1770a3c66490305e6"],["/2021/02/03/lenovoonelite/index.html","f427a46e4b2fc156ea00bf7bee0cbb97"],["/2021/02/03/skipads/index.html","876f29ca484d12bcaeb1410e0716a22f"],["/2021/02/04/picseed/index.html","a38292866013cf6fe98931e998e0c73a"],["/2021/02/04/renren/index.html","f5a25a194c178ffedbde8985b827bae6"],["/2021/02/04/serverstress/index.html","8a4706468f189049c72f4dda328df709"],["/2021/02/04/wikipediazh/index.html","0dac391c685a12b7797dbf372705f29d"],["/2021/02/05/googlevoice/index.html","41d154c0a0a0c28516816b525a5ece99"],["/2021/02/06/clashconnection/index.html","bc1555cf94d96c6df0b4371916af33c5"],["/2021/02/06/gvtransfer/index.html","834bd2c002b3b2bfd4a2c78d425d7653"],["/2021/02/06/todesk/index.html","52e61340d7e79c2563786c0670e7caa2"],["/2021/02/06/vpnblacklist/index.html","ae002f38b246517e98777b5254216ed2"],["/2021/02/07/mklink/index.html","403f79a97466b5afff63303ffbbd9f95"],["/2021/02/07/speedtest/index.html","933d5b0820e525824fb573ecfad49b4f"],["/2021/02/07/translate/index.html","69cbce3d9a2ff75bba957210ab5fbb56"],["/2021/02/08/ewomail/index.html","ca09f6e0ffbe0a82aa326d921bce204b"],["/2021/02/10/officee5/index.html","07733cc071c612a218f5673dd60769db"],["/2021/02/10/raidrive/index.html","32ec310734bbdeb6192450961c237438"],["/2021/02/13/e5sub/index.html","6d07894d87d2ec9834c7b078333dbe9f"],["/2021/02/14/screen/index.html","93beb923cca804ed55bb1d8d3d9d65c1"],["/2021/02/15/clashtun/index.html","d796fe8eccc855408a680660490ae28c"],["/2021/02/15/messageboom/index.html","2b16d4d7369184f0fda4590726f35dcd"],["/2021/02/15/oneindex/index.html","4a6808d7ef15c6f4b517dda30de725e0"],["/2021/02/16/govsites/index.html","b2b127835c73370e8016f05cb2531f93"],["/2021/02/17/hexototypecho/index.html","d08a85d1eded3031a2daa739f53a87b0"],["/2021/02/19/fiddler/index.html","99ddaec9b2f7a0bbd250ed196cd8d6ee"],["/2021/02/22/potplayerset/index.html","87bc734c83dd43bf837b3e990663ec3f"],["/2021/02/22/studyresource/index.html","b72724cba7aee5eac746076bae971fd2"],["/2021/02/22/telegram/index.html","61ff5e7c075312783bfd4ce7cc9c9b31"],["/2021/02/22/videos/index.html","493fce4da5a06fb8b535a0f3836da687"],["/2021/02/24/mtproxy/index.html","8598cad570ec3dd927c4ce244a536890"],["/2021/03/10/catchcat/index.html","f45aa11914b8750f01ff83d2ec000c47"],["/2021/03/10/neteasemusic/index.html","9199e3538ec6c8a4d9a2b03a988ea743"],["/2021/03/10/surfboard/index.html","0eefc936066b2a221795bb5878dba2aa"],["/2021/03/11/vpnandjc/index.html","447c4b085bfc39a54bc20996bb7e3a5f"],["/2021/03/12/qrcodes/index.html","950b6e8b97b6bd8fcfcc47dbf45cfa82"],["/2021/03/20/qv2ray/index.html","99ff5f2241168cbadb0403865fd3f5a9"],["/2021/03/22/freevps/index.html","beb14d222c9db6ab279139f98d2e3486"],["/2021/03/24/tgstickers/index.html","7dda32c52f51b14d463e13b9e2ba6976"],["/2021/03/25/clashx/index.html","28082b969211c7ef5867fdbb5e792736"],["/2021/03/26/bingwallpaper/index.html","41c68a606ca9b03bc3cf4bd88f5b0362"],["/404.html","b34e3716973ae5508c0499ee2121fbfb"],["/archives/2020/11/index.html","d1dff0b1c00ec5097321daea1f54b6bf"],["/archives/2020/12/index.html","cfa0b5265929346408a6c1f75d4c3719"],["/archives/2020/12/page/2/index.html","d2dcce0ecd46e5ff6006edda93ebad6a"],["/archives/2020/12/page/3/index.html","a8e640f3c20bd864ee55e887711bb478"],["/archives/2020/index.html","c3956798e8d870ec84ae91b04647984b"],["/archives/2020/page/2/index.html","eaf7b9bbdb3e8849912ab2e193b31b8f"],["/archives/2020/page/3/index.html","58ee09158d8a38937a408427e1c95783"],["/archives/2021/01/index.html","4786d87e070a0f3c703d07a8d2d8cbda"],["/archives/2021/01/page/2/index.html","3cff0784fa31aa318dabfb658e0ecc42"],["/archives/2021/01/page/3/index.html","fa94982128fc3bd83151f2d68997c503"],["/archives/2021/01/page/4/index.html","792d7769a530b40e33663975b6aaff81"],["/archives/2021/02/index.html","b02b71a527f8287bd8136c04c9c3c00b"],["/archives/2021/02/page/2/index.html","c5dcf82d1b445b2d6ff9e63d44542383"],["/archives/2021/02/page/3/index.html","e1c74d5c71416b7ab97f580ea386891b"],["/archives/2021/03/index.html","05b0be2a4c29a0201cdf8e6f30555d3f"],["/archives/2021/index.html","1bf9c0fde6cf6b86f27e3daa3ee1c472"],["/archives/2021/page/2/index.html","2761b59390edfa4e2e2030148f76b4df"],["/archives/2021/page/3/index.html","f3c9efb1c90bb86368a9ceba988e8535"],["/archives/2021/page/4/index.html","219d158f176f13b3002402469ef1622a"],["/archives/2021/page/5/index.html","65815f3d2c48c81f5356a2c0085e6ab5"],["/archives/2021/page/6/index.html","02f60eb95ba19885172e75cab4000dd6"],["/archives/2021/page/7/index.html","3b9a002ce3be95f2bb559bbaaf9e3379"],["/archives/2021/page/8/index.html","092a634748b3f5887c2645039bb2d7ce"],["/archives/index.html","bffcf217413bcca3084e28d6a517d6b2"],["/archives/page/10/index.html","6bcffb2a06001cc0ec8f4c99dc696531"],["/archives/page/2/index.html","017e7991dae41b05edc0035856576fd3"],["/archives/page/3/index.html","606dfb6a015455b4d3c3a6c1f2af636c"],["/archives/page/4/index.html","f49998324f04992d427ed0b2bcf8c68e"],["/archives/page/5/index.html","770a1bbe5e90f21cb429076fee26ca08"],["/archives/page/6/index.html","6bd98e78fed983e5aff3b7e44a7c88a1"],["/archives/page/7/index.html","61ac90898e049f439b8bbe871b412c0a"],["/archives/page/8/index.html","ca53984b83acddb8eb74ed331980d980"],["/archives/page/9/index.html","3ea5161cdf24ea947f92fb3c4ab998f5"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","a325a2c155a7bd18ee438e4610e1109e"],["/categories/index.html","22042aae61672f2971fc173623752169"],["/categories/下载/index.html","e1f3da9d505afccf8fcf0aa0592e6504"],["/categories/安全/index.html","92f7e2ec5f29660b4ae8d0dbff88cf33"],["/categories/建站/index.html","320a3409dd618c9f9c99a433279b5b6d"],["/categories/杂/index.html","c05136bf4bf2e4c8cb0f264a759c625e"],["/categories/杂/page/2/index.html","e588354d19f299c89882e638cd1744e0"],["/categories/测评/index.html","9b8a225165615f73456a5a0bbc7fd831"],["/categories/科学上网/index.html","d7eeca2c04c2bb6ce256bdf2e01d82c9"],["/categories/科学上网/page/2/index.html","ebbcee797ff3727917b93d51ca6e9782"],["/categories/编程/index.html","f00f9d25162c0fccb2a1a5e46eb5102a"],["/categories/网站/index.html","0d83864f118be49e240a1fea07606075"],["/categories/网站/page/2/index.html","e66dd990b2081148e722a647b20296a6"],["/categories/软件/index.html","e72f232bc933318a39dcb3b059330ce1"],["/categories/软件/page/2/index.html","4461b171fdcfdee94fad353a9b287223"],["/categories/软件/page/3/index.html","2919354a2d41f42945720ec545031eb5"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","14b96d1a28c511315aed7e8bbf6ec76e"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","0547a6fa3bf5788b4c619e2343094627"],["/ios/index.html","c5c29d5ab921bb703c7358c5931d2f7e"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","9563ade4dc505eb09fcc424f334acfb4"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","d3c32655e0a059ae7c621693698f5198"],["/page/2/index.html","37505a60de98c6498b602fa932ded2b3"],["/page/3/index.html","cfd8440896b400ed65deb78186071669"],["/page/4/index.html","8c9d522af847a31f08fd67b24d7995fc"],["/page/5/index.html","b6f0b8d3ce332ee4d17f3f8924ea339c"],["/page/6/index.html","8b6ee9223cdb725e0cc224fcafb77599"],["/page/7/index.html","8ee4bb4e103a7b5d5d30c5c7660a8fcd"],["/page/8/index.html","e46732662780b08f613eba91629bc7a6"],["/page/9/index.html","9678da29c6c36580bb032ede26275399"],["/payment/index.html","9d71cc6f99040fb069c762eda6343d14"],["/privacy-policy/index.html","95900e222c670010bae65c2f9b507983"],["/rss2.xml","91f7899370a23c50b64a53bb32827f96"],["/search.xml","90e90f06a9dc2fc25165e0223edd1112"],["/sitemap.xml","0ba83ba52fa80aee7d91553ccac75b3e"],["/sw-register.js","6cf8a05654bc3b9c6605feadea2f3227"],["/tags/5t/index.html","c93d6e4d21553c70c35ef729badaca66"],["/tags/Bing/index.html","d32958dda3e999fda76a0c071236c22a"],["/tags/Clash/index.html","973de7e9d8339aef957a36c34b6ef773"],["/tags/Clover/index.html","9c9418f7de13d2d2288e2c4880e9e67e"],["/tags/E5/index.html","dda0ae4146bbad9453cf332e3f6ef7b2"],["/tags/FTP/index.html","1825c3f57e3df95e9af9da3036de3a4b"],["/tags/GitHub/index.html","7524fe0d87961ac1594b0dbf1a532a7b"],["/tags/Heroku/index.html","42ff084306a166ecf71d0d57a06ccd96"],["/tags/Hexo/index.html","9444e86d694ea42b1812363c65e3bfb7"],["/tags/Lenovo/index.html","a7f50b2b05b0dcef3bba5c4dc4086a03"],["/tags/Oneindex/index.html","8c3affc466fd788b40145e2dc5ffab07"],["/tags/QQ/index.html","12e75598fdaeba2845d043c4ebf71431"],["/tags/QTTabbar/index.html","f2bf7fcdb14377f9f66547f33bd2b93e"],["/tags/RX文件管理器/index.html","1b0b09908ef53834a3f92c709ef58638"],["/tags/Todesk/index.html","895d041539a8638407af2d3a1c10c17d"],["/tags/Vercel/index.html","e6f5f4ddc3a24e51a52d94e1b453b955"],["/tags/ads/index.html","78d91afe99b55955042b1ae94fce8ab0"],["/tags/api/index.html","b2b4d734ecdbbd2b5b355094004b19bf"],["/tags/app/index.html","d32fafd994f86af54a2fe05d8653bbb0"],["/tags/blacklist/index.html","04bda6628b563a981aedc0ac98836534"],["/tags/butterfly/index.html","87038e79887df4dcb8158e4c01fe38fd"],["/tags/chrome/index.html","6ba08b8ccabb210bb320f5f74563fef8"],["/tags/clashx/index.html","b05a618318f086c51517219db87b9f03"],["/tags/cloudflare/index.html","9debd50d51db6e2fa5d634b6ae49db90"],["/tags/cmd/index.html","9f1bebcb90186d0170cbadd44212ab93"],["/tags/c盘/index.html","14b43884413ca5a376d60a858f9c1567"],["/tags/email/index.html","6fb26e89067c4e2b83fa54de23eab01f"],["/tags/ewomail/index.html","a727bbcadee5ba0f2a55acecc0de523b"],["/tags/fiddler/index.html","c57ec21b483d8be54159b6f7c36c11a6"],["/tags/flags/index.html","975faac5142c48791fa43f120087991d"],["/tags/footer，页脚/index.html","9d636ce07137f86efc788eec1dbfbf17"],["/tags/galgame/index.html","c5ec7361c51c983aac1d0ab64ab75a55"],["/tags/git/index.html","ed980028ca47a92882cf0b59615baa94"],["/tags/gitcalendar/index.html","3429b9f5dc162e907a1ad3fecfdafe7e"],["/tags/google-voice/index.html","dc3e6f626e0d048ef0528e5c3663aab6"],["/tags/gv/index.html","b51e08d682a7526c28540d461523be88"],["/tags/html/index.html","88f9fb43fd13e02c6cf61754a3491557"],["/tags/index-1.html","91b585aa1da1ade170e06d0e95b47327"],["/tags/index.html","bcf83dfaa783c7c4ed466ced8177d51e"],["/tags/js/index.html","99769e323643387292d3c2a4d2a11006"],["/tags/jsdelivr/index.html","dd1d36e687ab18cbb05945c235fb995c"],["/tags/linux/index.html","88a0f806b29ebd69a4a736ed58b0251b"],["/tags/macos/index.html","7fec548864cef22be381fa3e3e6e591e"],["/tags/madVR/index.html","574d470cd21c5bc71d6be45590a8667e"],["/tags/markdown/index.html","2fcac3dca2888232d75892c239b8111b"],["/tags/maya/index.html","80b0eabfb8beb0e787f10dcca3c92378"],["/tags/mklink/index.html","871971a443bb5f5ca29b8ee51374ff54"],["/tags/office-e5/index.html","7319c7e43a9b8de7274b550935c0958f"],["/tags/onedrive/index.html","6a991f709ae9a89df903124c75584120"],["/tags/picGO/index.html","a7d4daac905a3f15206436e1594ee4d7"],["/tags/pixiv/index.html","19fb6e24997c64bcbb7635c7fce32ee5"],["/tags/potplayer/index.html","a508d2eb991a02bf3ce9da056f18925a"],["/tags/proxypool/index.html","39d8495ca29c43792e2482b86bf78d32"],["/tags/qbitorrent/index.html","c0a438ef4692304ef5bb377a8768be21"],["/tags/raidrive/index.html","f4a99dbc8d486f47fdb0e4bfaea38b76"],["/tags/screen/index.html","6f053543af815e7725108a4a1fb26b70"],["/tags/speedtest/index.html","b35573d9511172a2fd8544ba35a5b742"],["/tags/ss/index.html","c9290701115ca9d8780ed342e2bc3c47"],["/tags/ssr/index.html","ae2d054aeb10927f18936c3319d40299"],["/tags/stickers/index.html","4eefe848f94f7e71574ccd4b8eddb859"],["/tags/surfboard/index.html","04065335d0f4a464990a7dc864a9ded0"],["/tags/tap/index.html","5dc09e3dc48dd7e0601079a17aca4fc6"],["/tags/telegram/index.html","8ef6b2bf5eaf5d3601dd15c03f1bd61e"],["/tags/telegram代理/index.html","457fcc64207aec4888bb5b6fe81273e8"],["/tags/tg/index.html","145e9f566614873c2714e7aadeb2a369"],["/tags/tg代理/index.html","31a7977b3e9266a5b970b45bd7eec8fb"],["/tags/top50/index.html","0fe2075b27fd544124646adbfc4ea756"],["/tags/tracker/index.html","80ae8325764b34c5eb40e9fc5fc696b0"],["/tags/translate/index.html","b0a7d56a09547201e19ca0ba93c507eb"],["/tags/translater/index.html","5808352cd762ae6076972f849921bce4"],["/tags/tun/index.html","4e2345a3e5ffabcfb86ae78da61080a8"],["/tags/typecho/index.html","def20a1e4393c5a514e28b82a0aee141"],["/tags/v2ray/index.html","926a471b5d1c9e782e6d49eb7d7f8a9b"],["/tags/vpn/index.html","fa3c8ab7845e89695e2f77ddefe0f961"],["/tags/vps/index.html","e7a70bda318b33a5cbffb201f09ebd54"],["/tags/wallpaper/index.html","47cdf6c3e39b0c879f3a8d1b43748093"],["/tags/windows/index.html","3d2090f81e6308f8dc9628fb3a752780"],["/tags/windows端/index.html","7c12e7c1e2c039df3aa70197aec92f8c"],["/tags/xray/index.html","1e2ef1f4fd65cc81b443fa5bc8f249f5"],["/tags/下载/index.html","8d7ea1d8d5e0731439e59b4d0af6e688"],["/tags/不限速/index.html","45307b99d81eb21ae1d15236ddd8e5f5"],["/tags/个人网盘/index.html","c417126b8e9143d571a898d60fd7fce4"],["/tags/主题/index.html","c7485d02dee9ccdfa2fa76e71ad889e2"],["/tags/二维码/index.html","36012c57f6304f86089af29898b988e9"],["/tags/云便签/index.html","2ec95f7026d01b4d10c851026fac9e1c"],["/tags/云盘/index.html","66f07f039dd1e08c312a3b6d9b833adb"],["/tags/人人/index.html","931a98f4afd818a8363ce7515e7808d3"],["/tags/代理/index.html","2c702fb9813c291b0ec2acc6d322b1ed"],["/tags/代码/index.html","6eda6fd97aa2ab2a6b4fb17864866467"],["/tags/优选IP/index.html","825f9453cfc68293832a96d8901783cc"],["/tags/便签/index.html","abe454139a863e8438208c8d0b3a54b8"],["/tags/保号/index.html","3235c1feb03e4691d03696d61d62d991"],["/tags/免费/index.html","69ca8497e7324e6d8d9bf85c4104e131"],["/tags/免费节点/index.html","39f07b2aacc4bf3f9fc4ba7e5d5f0112"],["/tags/加密/index.html","bdfb985702c7203994a515833802130e"],["/tags/动画/index.html","99874b2667a5d1ee8b9afe21b9d0ca69"],["/tags/博客/index.html","cdd19cfebcecf21266d693ec2ccd13b1"],["/tags/历史记录/index.html","164ee1ba9fe54e5dd3958f462d976427"],["/tags/压力/index.html","c60e118d8c3e7b8b170308c723adf13e"],["/tags/压缩包/index.html","e66d7a03105d56aeaefc7e09ef5e4ccf"],["/tags/反代/index.html","35ac768313e8b8adfa0184754908c494"],["/tags/可视化/index.html","9bb6ecc881f871bba7b6fa1867b36456"],["/tags/命令/index.html","40c9bf235b8626f24c71fac76e792e32"],["/tags/国家/index.html","ddb64b208c04ef3c97f22a31e51233c3"],["/tags/图床/index.html","72918bca14d4fdc2944a2afa797e82ec"],["/tags/图片/index.html","38f79028234a29fab2dff529ffb3a295"],["/tags/域名/index.html","97a5ae41d1a2aeaec2f4d16ebf7d0c20"],["/tags/壁纸/index.html","d6ce03a1df18b547497e08f656d71e66"],["/tags/多标签/index.html","0dada7313d727061158bd3b745103d51"],["/tags/存储/index.html","f3500e893030445fcfafcc71cb4f9479"],["/tags/学习/index.html","c2d638bcc523a9bebcc4229b887d2694"],["/tags/安全/index.html","47d016e3b1e9d1d70822f2c7d5f154c2"],["/tags/安卓/index.html","a028758f277224d5e69a81b2d7471820"],["/tags/宝塔/index.html","935c127d2dbc838b3634d56d946bfbfa"],["/tags/小游戏/index.html","0478688ce2fba5dfe55d86e00b5ece3c"],["/tags/广告/index.html","d6139957cc4143d03dd1dfed170484ae"],["/tags/建站/index.html","1cb4285f9b76632f9457fd4662c64ead"],["/tags/影视/index.html","8d8bd42d529e3fe2a8690367b3477c69"],["/tags/微信/index.html","b5d5a10d637470e91eb3855336fac9c1"],["/tags/快速启动/index.html","43f49aba239c3527c3c8b313c8028da9"],["/tags/手机/index.html","09b0df6285979c865516a632099467ed"],["/tags/托管/index.html","b7f312435a96fa1ee70762aac8a9fbfc"],["/tags/抓包/index.html","69413426e32cafa36e7f1b48e903e3fe"],["/tags/抓取/index.html","b2ce38a11f4599e28ed013ec06d3b315"],["/tags/投屏/index.html","29aa373219e3ed7866a35a210f5c8326"],["/tags/拓展功能/index.html","1af041ead7cb5afe4606c632c013c69e"],["/tags/挂载/index.html","f34023edea7f4aa4a3f64b8b2711ccb6"],["/tags/指纹/index.html","ed0d2d55b621fe54b12d71a309ea8f3c"],["/tags/接口/index.html","4e124586c23579983064616c3aacdcf0"],["/tags/提取图片/index.html","69d2021beb38d3e9043fcf72c630ff9e"],["/tags/插件/index.html","3dda80788ff8bd3b6a963e638cb5a9b5"],["/tags/搜图/index.html","ca3a3a3bfa986d5f22af15abee110c02"],["/tags/搭建/index.html","483271a9d8e6a2072d0b6535910d5447"],["/tags/撤回/index.html","66f88b75592d0866a0bc454a754d8ddc"],["/tags/播放器/index.html","5ed6c795f3f6a6288041fddafc4dc2f9"],["/tags/支付宝/index.html","9aefd641cd6e6ddd24d94e32064e7bc0"],["/tags/政府网站/index.html","36b338eea6671c2bb8a8ff651b54f820"],["/tags/效率/index.html","a30940b0d6bb82cd9c7499dba5be3cf1"],["/tags/日历/index.html","818504c3cf5b90bca6b2a800f0b6fa28"],["/tags/服务器/index.html","4e9ca8d014bd735bf892a647fc077ac2"],["/tags/机场/index.html","d97936ce1bf7c7e6a6f5f8eec67b6e36"],["/tags/桌面/index.html","e9f9e547c96aefad3e6c228e5c50c0cb"],["/tags/梯子/index.html","80eb4af375047110ca70a979a8b9b85d"],["/tags/检测工具/index.html","21a399f86b1dde23ec186cbd9ecaeea9"],["/tags/汉化/index.html","eda3ec21c8be8d3c0da3b11d044ffd3d"],["/tags/测压/index.html","165a4f0896ade49bd81bd5b401a29851"],["/tags/测速/index.html","e397d90436b6048f5552fd1e4bc31721"],["/tags/浏览器/index.html","f60c26ed8bfaab47cc55b826e7150ef8"],["/tags/清理/index.html","27cef601059936186346bf4fd2666797"],["/tags/滚动条/index.html","2377299106bd7d35c040300f7c5fc609"],["/tags/灰色歌曲/index.html","9c9f1f4502ff0d3ef493d39d62307b82"],["/tags/电影/index.html","735c8352ab3484ec1219533c8d3b948d"],["/tags/电视剧/index.html","4dcabfa5251d0d29e41130d6d1bce3ac"],["/tags/白嫖/index.html","cf333986b26675a961ade5eab551521e"],["/tags/百度/index.html","fecfdd8cabb977a019b703c8f32fc19b"],["/tags/百度云盘/index.html","235cfa9be877de76fcb12ba79e7a9d92"],["/tags/百科/index.html","cab4425b4788219674a65e1a60a7ba5d"],["/tags/短信/index.html","7d726eb28f8a13165b3645b74255a5e3"],["/tags/硬件/index.html","7217288e80c01ec6c9e83d77667b6ff2"],["/tags/科学上网/index.html","1a4a2a58962c3a6a8e96958e9e233667"],["/tags/空间/index.html","c96298ca42f57ba6330e0ecc51a9a1aa"],["/tags/笔记/index.html","237ff6955d828c26e2939662e9fde8f5"],["/tags/简洁/index.html","0d4110b14a7e4b9ce36c23935524a5a9"],["/tags/简约/index.html","a08a71cb18d9682580ac018e8c7b012a"],["/tags/维基/index.html","2d3b40a4327db0c5311d2457edc344f2"],["/tags/网易云/index.html","2c75dfbad3380bea77a1bfef95f3dccd"],["/tags/网盘/index.html","f4b43aa52dda9f13d8b4ef4bf06c2407"],["/tags/网站/index.html","0498942f38648d98f41bfb037d3a3e2d"],["/tags/网络/index.html","33fc89308c59028a1adf1b7958690079"],["/tags/美化/index.html","6078b4a56e62e9b76ba973c7c481b732"],["/tags/翻墙/index.html","3eee5954c5110d7a81d3dbd9976a5eaf"],["/tags/翻译/index.html","1f3dc4a52ebc9e2b13a3047f270dc007"],["/tags/翻译器/index.html","bc8f337cdb71ecd631c8e35be796d591"],["/tags/聊天/index.html","84b58bdf0ad20beca8020e60874943dd"],["/tags/聊天室/index.html","3a7dd96db32190f6ca339bfbdc5769f5"],["/tags/联想/index.html","d68c177c259b7dcdb93f6ab20f8030bb"],["/tags/节点/index.html","abee4df914673cafec6bf909b350a846"],["/tags/虚拟手机号/index.html","76a9ebea52a98eddf8a6430d429b6d17"],["/tags/补丁/index.html","6f9c9b0a5ceb33ded11e8f3aeaa21b6b"],["/tags/表情包/index.html","3c84a2db1f944cedae5772da1ef7a932"],["/tags/视频/index.html","b06d9f742b73f84d766700509a330116"],["/tags/解析/index.html","5231f8e413f5645c84ef6ab31d0c1fc4"],["/tags/订阅链接/index.html","734c41d6755fbd40c1051d9018a5127a"],["/tags/记录/index.html","2656df13c63386c5da2cbcde63249bab"],["/tags/识图/index.html","54420cbe5ce5f27fdeb14addab15e8ec"],["/tags/语言/index.html","e2bde222c54e181ddc248d1757dc1d5c"],["/tags/资源/index.html","3a6ce6343592b328de0d2386d456f9d8"],["/tags/资源管理器/index.html","6c2935b8f8a72b8c3a1bb402ff830c60"],["/tags/转移/index.html","a03980709291d0ae4bae191ec652a26c"],["/tags/软件/index.html","9e593a84dcf2ea1f8f3850069588ad0e"],["/tags/轰炸/index.html","1b1ac5ae5d408af5f3d93963e98e3a07"],["/tags/迁移/index.html","0f87b52800a0f50c5b91fda8a6efd0b2"],["/tags/远程控制/index.html","db74c2d6a46dfe9ea496c23bbe0aa340"],["/tags/连接/index.html","3be5d05004e2acc44021546cfa7a4b2c"],["/tags/追踪/index.html","e61e33ef15387404550b531530f44871"],["/tags/速度/index.html","dab1346ce7fe03338137affbfa8a32cf"],["/tags/邮箱/index.html","7739b7de2c12634451072edf3c4c6a48"],["/tags/酷炫/index.html","ee89ea87b65136bcd15c7f5e0998d401"],["/tags/钓鱼/index.html","eeab95f3cc791ad091282ff8dc8536b4"],["/tags/镜像/index.html","76532eb79cf7dff5666561a51fe05369"],["/tags/随机/index.html","cb7d4c43a3057fd481dcefa0d1869651"],["/tags/隐藏/index.html","b1cd4234eacbbae5de43766c7dcd8198"],["/tags/面板/index.html","0b4653900d15a7901476ba133c7c8f23"],["/tags/音乐/index.html","8ae09639cd7b27758381743abab43797"],["/tags/高颜值/index.html","99d011cc2e2fe40a90e774af5882676f"],["/tags/魔改/index.html","ad014c62ea29aa418ba008b787274ca4"],["/tags/黑名单/index.html","4e81e27328aaeb28701cf59cc12817a7"],["/urls/index.html","65bb231ef616bf978194dd6bc9083fa8"],["/vps/index.html","cef9c26e56535ac5bc8d67e6ccac3715"],["/支持/index.html","319f037f5cfc6a4ddbf19557260a875a"]];
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
