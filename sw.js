/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","ca5727b0e52bdb5abf7231f164c72ce7"],["/2020/11/29/clash-windows/index.html","523eb92fb74e917916067a347c46297d"],["/2020/11/30/websites2/index.html","02d2d14f1a3225ace05da452e10cf268"],["/2020/12/04/iphone4s/index.html","dd6f46349efca5c56f716307f9ae9c7c"],["/2020/12/04/onenote/index.html","e012bb897974ccd4fd21829949fe1fce"],["/2020/12/04/wesites1/index.html","9a79cc48fe916fa9c2e4ec86819d3700"],["/2020/12/06/nokia808/index.html","e362120ee64455d5d1a93ffbfa66e09c"],["/2020/12/07/ipad1/index.html","9f108ccd09785ea1b6e48309cc7f0732"],["/2020/12/18/freesubscribes/index.html","88641d8a0b3613ba88714d3541f07b12"],["/2020/12/19/musics/index.html","2be8ee99f198537f716d74d8034cad03"],["/2020/12/19/shadowrocket/index.html","64cfff5c8e82753559a1db01bf8a3918"],["/2020/12/19/v2ray-windows/index.html","b72abc3a05ad8222fa61b57c11a9a279"],["/2020/12/19/v2rayng/index.html","546efcba46dd165c2a041e2b90baf7e2"],["/2020/12/20/beoplay/index.html","696b5b233bab5c573e87b5fbe0898cfe"],["/2020/12/20/订阅链接转换/index.html","a52516687e1deb6ad3f6bb337b45452a"],["/2020/12/21/chrome浏览器下载提速/index.html","5c1fedef3578d135a89755da08c5d7ee"],["/2020/12/21/免费128线程并发下载xdown/index.html","fa6350cbae82133bd7cc6ff1eca5a232"],["/2020/12/21/免费32线程下载软件ndm/index.html","feb873d455910e9de505663449260d22"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e2f726d86cf6c5c2848ecc0b237f8f01"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","e465dd9f4d9d2286d418e5013401a5dc"],["/2020/12/21/广告怎么知道我在想什么/index.html","275c9b18cee6538aaa6ebfcc2afce31b"],["/2020/12/21/无名·引子（小说试写）/index.html","30723f6a3c67b751cf57ec6f87d62442"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","c24420998dcbec5dbd8e7d51ebe038b6"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","44515429ae59ee10e90b18880b78906e"],["/2020/12/21/高速轻量下载器aria2/index.html","611e66b48664379e90949f278d589c55"],["/2020/12/22/2020-cee-roo/index.html","982a71d5d5a407117eeb63584cdd1d31"],["/2020/12/22/firefox插件、github、steam富强/index.html","bb082269644e2073b83dd3b70964542e"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","278ecd6d2755717a0f54c686e3637f0b"],["/2020/12/26/python-day-1/index.html","e0e1c3900383fa479b2462e1e5469df7"],["/2020/12/26/python-day-2/index.html","25e9b9c539bc93e52e649150ba26ae7a"],["/2020/12/26/度盘不限速下载方式一赏/index.html","4834a9757978104f74363c5359b019ca"],["/2020/12/26/添加开机自启软件/index.html","5a69586bac53a2cb8d10717c122b1869"],["/2020/12/26/电脑端截图方式一赏/index.html","96124819336d8a6a48398f8303d42037"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","ba2be2fe475288691452b7969319d68e"],["/2020/12/27/最安全的浏览器tor/index.html","627b15f5a59be92ccb392cafc6f09dc5"],["/2020/12/27/网易云刷等级和听歌数量/index.html","5cf41ba4ceb7d009c2fccb8ed4b61e4e"],["/2020/12/28/freenom申请免费域名/index.html","1c9c44218a350c16d9d4cb24fe005ca5"],["/2020/12/31/机场/index.html","e93e148fbe59226a132b39e61ab246e1"],["/2021/01/01/M1/index.html","c606cdc72bb0023008a7a4e77cd2229b"],["/2021/01/01/compress/index.html","a76ae6fc828245e38706aa3a6004bb70"],["/2021/01/01/infinityfree/index.html","d66852392025b9a35c89987ac3901f28"],["/2021/01/01/硬核翻墙/index.html","7387293499a94988349f057557bc2119"],["/2021/01/02/qq/index.html","682df6b8df5b007b2880718708ba567f"],["/2021/01/03/netch/index.html","67fa44f24abe34ce3f27f653eff5e40c"],["/2021/01/03/waifu2x/index.html","e5385615b43850e59bf296aa910b20a1"],["/2021/01/04/ads/index.html","66d234fa4e5d147d5f06c6089fcc759f"],["/2021/01/04/games/index.html","01fef8341f997fde3c2378645578611c"],["/2021/01/04/heroku/index.html","d0d14df378398ae64e693cb6d90fb032"],["/2021/01/06/movies/index.html","2790045e917be157a6ec5d0fccdcc979"],["/2021/01/07/google2020/index.html","9659428b3df584cba1358752643f8591"],["/2021/01/07/lucky/index.html","7e7b0293fd8fcce8a9d955878a12fc73"],["/2021/01/07/spotify/index.html","70298177d4f69b479d42f7d684605d5d"],["/2021/01/07/thunder/index.html","14060d4bc7ddf5fd2fc7697199d21fd5"],["/2021/01/08/adguardhome/index.html","e5a39dad95369f230dcd02f655be6454"],["/2021/01/10/IBM/index.html","c21f64a8733faba43f9ab4348f776743"],["/2021/01/10/potplayer/index.html","cf867306266116690564478fec04c4cf"],["/2021/01/10/sakuraanime/index.html","d32869064cda1870166b5a18474e5091"],["/2021/01/10/美剧星球/index.html","54e83c5ed2db83781b2f9ef5679a2c44"],["/2021/01/12/telegraph/index.html","2474fa9b1d8f29fee41f50944d878324"],["/2021/01/14/comics/index.html","514fd9c88562c15f5bbdc0d91d1a8c78"],["/2021/01/14/ftp/index.html","d39ecdd921f4741011e22f8fd114d343"],["/2021/01/14/oraclecloud/index.html","97fb6663616a8c868d644f838c2a934f"],["/2021/01/14/porkbun/index.html","bf87dde7c3303cc752952455290c84d6"],["/2021/01/14/powertoys/index.html","c592877901dfd8d2cc2e30c9b1d33692"],["/2021/01/14/taptap/index.html","d7ba346c6c63ec0c0eb92354f975882e"],["/2021/01/14/ubuntuvsftp/index.html","6ddc02b87c94d7260a5b72616652b9ad"],["/2021/01/14/小说/index.html","3189c2b283985ab446f2c565f094440e"],["/2021/01/15/freeproxies/index.html","8263303ce9e95c762e97e034a4bfeb58"],["/2021/01/15/incaseformat/index.html","2b53416fe69a2d30327ede84fadf1fa5"],["/2021/01/16/euserv/index.html","2bd9ea4659d1bfbe288cd6a2136bac3a"],["/2021/01/16/winxray/index.html","82fdabfff8c09e60f0198b019a4eabe9"],["/2021/01/18/qqreadhistory/index.html","1171979e2b61e7ba316f2b801d25729d"],["/2021/01/18/qqrevoke/index.html","601a565d2453fefbab6b9bb6c0148c12"],["/2021/01/19/freevpn/index.html","1f97ed44c112816c21498a1e8a25681f"],["/2021/01/20/browsertrack/index.html","5ec04bddbd4f3bb7f98294df620e73ef"],["/2021/01/20/v2ui/index.html","f43803a7c26cf0b44070e708b88348e5"],["/2021/01/21/failedtoconnect/index.html","bbc4481bc9c8c3ef1a7959d52895fa45"],["/2021/01/21/gitcalendar/index.html","d1b7122e10fc4ae7b6c8281903d9f17e"],["/2021/01/21/markdownformat/index.html","b37e3fc43061680fd3d922800b0f7fe7"],["/2021/01/21/markdowntable/index.html","ba9d0efe8da2f21d001870b55869011c"],["/2021/01/21/vercel/index.html","3fc5440e6cafd7c1c9e137c6823196ed"],["/2021/01/22/hardware/index.html","4596586620944befa194cc1a7b55dda3"],["/2021/01/22/muviz/index.html","068d280eb88d1ecf3140c5024006f824"],["/2021/01/22/randomapi/index.html","aac174b0a855827ac9935431b4ea0335"],["/2021/01/22/searchimages/index.html","adff746a7309009c2b4ae7c2ccacb8fc"],["/2021/01/23/RX文件管理器/index.html","85b44ff4d97053746a4972fb8bddb2f0"],["/2021/01/23/chromeflag/index.html","f504a510a4b89900ddbfad92d7444eb9"],["/2021/01/23/qttabbar/index.html","219f1f1297f61e5942df4a6cbca6abcd"],["/2021/01/24/githubspeedup/index.html","1f7c02bc5c65e27cc4e88e261e1bdee2"],["/2021/01/24/jsdelivr/index.html","2011ee4eb24f27a515986569b442f939"],["/2021/01/25/note/index.html","659794cc89abe03bdbe347b2db6e4a50"],["/2021/01/25/soul/index.html","7a80333ac83ace42ad613e15f7bfba9b"],["/2021/01/26/herokuxray/index.html","c86392cd423c7e789e8e19f43c755b05"],["/2021/01/27/proxypool/index.html","5c4ba159741148d63d588b1d405750bc"],["/2021/01/27/tracker/index.html","9cef7618bcff9da0c0613179bfb71615"],["/2021/01/30/pandownphp/index.html","9e85e16eb191a2677889e4f890d9bcdd"],["/2021/01/31/newgroup/index.html","a15d06c1da53e2711cb2cea4b1f279ff"],["/2021/02/01/clashlanguage/index.html","9afb75676320472142b405b577479924"],["/2021/02/01/encrypt/index.html","9e20526c01e831984fe9f2c60d9c9a4f"],["/2021/02/01/footermotion/index.html","58d3bbdab5428f246eb89f781ae2d700"],["/2021/02/01/gitter/index.html","8aca548f01659fdd339d8c278b325bc2"],["/2021/02/01/pixivtop50/index.html","1741e105dfeda5081510fe940123b0a2"],["/2021/02/01/scrollbar/index.html","05a121f614e5e622f68f78fa7df8bbd4"],["/2021/02/02/clover/index.html","298522f1ba611bfeee03cea9bfda9072"],["/2021/02/02/maya/index.html","92b713f1a6411a05572b184acf6133cc"],["/2021/02/02/speedcontroller/index.html","37d141572c77230da482bdd8a546c159"],["/2021/02/02/yesmusicplayer/index.html","0e2f2bbda9fd88e0628ffdf178732f29"],["/2021/02/03/lenovoonelite/index.html","f20da77b01a20a8dd87ade35f694514c"],["/2021/02/03/skipads/index.html","f1e6d9506ddf7bc51b6a3aabb50f501a"],["/2021/02/04/picseed/index.html","20b570eddb6d85b95af79ac62f5ba7f0"],["/2021/02/04/renren/index.html","52b209846ac9232fbe9aba86ce384617"],["/2021/02/04/serverstress/index.html","1bcad51731a7cbbd17bb0796facb1e5f"],["/2021/02/04/wikipediazh/index.html","74f2396871532a1fee3516beaaa074e0"],["/2021/02/05/googlevoice/index.html","76ba430a70e7fb70cfcda2e03c69e271"],["/2021/02/06/clashconnection/index.html","00152bfc79810bb2df68d8d9033e62ff"],["/2021/02/06/gvtransfer/index.html","8b456b97ea090345ed2eae0ef0406591"],["/2021/02/06/todesk/index.html","a68d4e95f7fd2e49d69af07ed46aae00"],["/2021/02/06/vpnblacklist/index.html","82ff2b054f4621965641bee03123b549"],["/2021/02/07/mklink/index.html","267040899c2c431c35cf1b722d8d4d5b"],["/2021/02/07/speedtest/index.html","efc6337418faeaf1792ed317076ba941"],["/2021/02/07/translate/index.html","ccad57c6c907b23a20a337667f9122d7"],["/2021/02/08/ewomail/index.html","f840b5877aa5f7cb07894b9e64cf1e47"],["/2021/02/10/officee5/index.html","16d47a824faf3dad1800606a96614d17"],["/2021/02/10/raidrive/index.html","a925d82c6b4bad04cd602c55d9470a0d"],["/2021/02/13/e5sub/index.html","bc5fbbb1e00db6e79a2ade4e012e529b"],["/2021/02/14/screen/index.html","22d361ff3865563047a4757628b979a7"],["/2021/02/15/clashtun/index.html","4983964e658a96d5c80f40b01824cdff"],["/2021/02/15/messageboom/index.html","0aed554540a92a124aea680948116bcb"],["/2021/02/15/oneindex/index.html","c124fd47c96916909fc766555b7bbeb1"],["/2021/02/16/govsites/index.html","0e8a50c629d77cfc6e02b97cd3024118"],["/2021/02/17/hexototypecho/index.html","75749052d6bb4698d13ef09bb3b74f9b"],["/2021/02/19/fiddler/index.html","dbfb87f0a4365456832dfb820e0d25b0"],["/2021/02/22/potplayerset/index.html","5c3db6f90dec208f81408377b3fcd1ad"],["/2021/02/22/studyresource/index.html","3185c19f393073f180ecd1ea64321bce"],["/2021/02/22/telegram/index.html","887a0c7f03bfb63990b6488c946db9a3"],["/2021/02/22/videos/index.html","58db920239fa48e2dbc6f4239624d6ad"],["/2021/02/24/mtproxy/index.html","5653cec6bb6a26bf3642274bb9fa7fc8"],["/2021/03/10/catchcat/index.html","9a33d6ebd2fbff1dd75b819f9f7e555b"],["/2021/03/10/neteasemusic/index.html","e85c77647b062bf30eb7c337ab5407d6"],["/2021/03/10/surfboard/index.html","848e323d49db887741612132c4225630"],["/2021/03/11/vpnandjc/index.html","b6a91e149fd5ecbf474b3d5d437fe38f"],["/2021/03/12/qrcodes/index.html","9f50804f667ec2ac5a709f19e2361b7e"],["/2021/03/20/qv2ray/index.html","d939d95d9223312f6865e096089c01dd"],["/2021/03/22/freevps/index.html","7da82f9bb98c8ba182cd1791f447ae61"],["/2021/03/24/tgstickers/index.html","1daacee7510b036a5ec5f0ed8b730b9e"],["/2021/03/25/clashx/index.html","193562f7dbc06598021b6e890a904efd"],["/2021/03/26/bingwallpaper/index.html","c73782793a374cf33bcf8f3e21d4e522"],["/2021/04/03/soutu/index.html","cc3db27e4d263bd6a7099614fe2fb111"],["/2021/04/03/tiyunti/index.html","80ae6247b9d9a539670b487330dfa8a2"],["/2021/04/04/btpanel/index.html","ff30b9c79a08caccf7e76cb03fe88f0c"],["/2021/04/06/atlasos/index.html","43396e102653e9d8485765dd157583bc"],["/2021/04/06/cleaner/index.html","c88522926aa1227ff97264cd0dd1655b"],["/404.html","bbe8412768204230ffbcf8423dbbc1d7"],["/archives/2020/11/index.html","5f8ffe6cb6c2524deee37df0c0254829"],["/archives/2020/12/index.html","5d54659223d24f02bea15c989a660cbb"],["/archives/2020/12/page/2/index.html","cafa338d7c0bedac64fc6fe7bf66d186"],["/archives/2020/12/page/3/index.html","975544dcc70a4fc4b58b8975601c7d7e"],["/archives/2020/index.html","85671fdbdb4711f096e83856e7ce992f"],["/archives/2020/page/2/index.html","fc69b938d0a825cd7c8652d9446db46a"],["/archives/2020/page/3/index.html","bd498d25f6a575dc0679f3bf4a501f86"],["/archives/2021/01/index.html","3aa430bc8b7e30592ecea2e5cc02c513"],["/archives/2021/01/page/2/index.html","750354baba3a65824d04ae25ddf85490"],["/archives/2021/01/page/3/index.html","f8bad2a6629765b4e85506febb3311a7"],["/archives/2021/01/page/4/index.html","0728cd42683ea08190f06e4d1a58fa1c"],["/archives/2021/02/index.html","c0ad2e1b240b9c8fca8b02acc1306472"],["/archives/2021/02/page/2/index.html","5c71130cbbc4cc2a002a0b9cf70f0967"],["/archives/2021/02/page/3/index.html","db0a1249267e505288544f2d025cb39c"],["/archives/2021/03/index.html","06a3926b28b32c4996e6af330e438a70"],["/archives/2021/04/index.html","d21f4ded425b58c2bcfae5f2066413bb"],["/archives/2021/index.html","39924ab7448f11bde71f1e6cd846d3fe"],["/archives/2021/page/2/index.html","b88f26af575fe46deafc471bad0f9740"],["/archives/2021/page/3/index.html","0b179089749c40b42906737e7b789b2e"],["/archives/2021/page/4/index.html","13d7778d272fc63509aca1df1f220d68"],["/archives/2021/page/5/index.html","6d61c37b752fd2fb40cf1cb1a450c8c2"],["/archives/2021/page/6/index.html","926c1c7e3cc48a6dd715d2b9dca1bb96"],["/archives/2021/page/7/index.html","bb94b0cd8b086250ce521f342f818afb"],["/archives/2021/page/8/index.html","bdd7fe87efb9ebb4b88ab17df1fedc62"],["/archives/index.html","ca4bdbfff6992528857955c316e43db4"],["/archives/page/10/index.html","2ea477b29892670ae6d17c0c8e18a468"],["/archives/page/11/index.html","3527d845a97ae3efd2e5cd48a7949ab4"],["/archives/page/2/index.html","e1af62dba196a1d58b14b8c3d8ffe297"],["/archives/page/3/index.html","e70b8b2fc9dd0ee8396d69d2a67eb93b"],["/archives/page/4/index.html","e029f28737c3142add5be0bf42808e34"],["/archives/page/5/index.html","fd54506a70501dbe71a13fb7d9fda969"],["/archives/page/6/index.html","3a910fa96c161d4730f3644af01dc402"],["/archives/page/7/index.html","930191260f343344aa5c5ad04ba30254"],["/archives/page/8/index.html","b2147542f51422f6aca0b2b7749c36be"],["/archives/page/9/index.html","7a81226822435179d15f6723f7212052"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","43bdf62f24712d8859c70a69970932a4"],["/categories/index.html","384e5413b160715e2a19fa631351eb6d"],["/categories/下载/index.html","0e20dc746c25b487962e7cd6c61174de"],["/categories/安全/index.html","e2fddd677e72919884bc76e94ccc6e7c"],["/categories/建站/index.html","fd904d4f7c0d6e5c36137b34c0be143c"],["/categories/机场测评/index.html","e7d25e1e134e10a577b56c5945a79c51"],["/categories/杂/index.html","34bf3c588aeab4df9346845e4e20331c"],["/categories/杂/page/2/index.html","ab61d150f23f177e794dadf1d3ea8f75"],["/categories/测评/index.html","63f6d01fec57d26dc2aab022199dae89"],["/categories/科学上网/index.html","078bafdaf7a1d91b72e0da6ab85361ba"],["/categories/科学上网/page/2/index.html","f789fa1a500f887535e6e984c74785ed"],["/categories/编程/index.html","41f9d584b6af0cecdc45301b38161543"],["/categories/网站/index.html","3c769f714c98d2a81571d977f109c003"],["/categories/网站/page/2/index.html","4ae52d97f2453f4c9f9ab8249800e0e1"],["/categories/软件/index.html","3abb93c041c7da75a9483a7a87a79275"],["/categories/软件/page/2/index.html","1acc80a83dd36f39023e7408e831c8ef"],["/categories/软件/page/3/index.html","cedba1f5f205fde1ed46030142f08fc1"],["/categories/软件/page/4/index.html","eb34f4ea0c1b59bf83bb89b7fac8b138"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","d68158e8cf36e8fa1c7e32dd11bf8215"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","871a65ae77dca022ee2f734c61a3b9dc"],["/ios/index.html","4f70169aa59a17915a4f3089a0175b72"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","644dec071b736f224921980e3d2c0591"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","5e3fca60c8db54b4cf10cc05d2f7520d"],["/page/11/index.html","75cf9ca3a758cd34f9ea9abfc6bc2f66"],["/page/2/index.html","6fb77bf5eda4b3e0fb6f7ce0836f442f"],["/page/3/index.html","1d453a828751950401b4943abfe205ae"],["/page/4/index.html","560bb696a131f85179c2ee3ad0a449ba"],["/page/5/index.html","b6fbd4a0a9df738ff24160dc0adbd894"],["/page/6/index.html","022921c8e29c9a72e3ddac5dca80ce39"],["/page/7/index.html","5791c2fce21e61ccbc5a0112644f84e0"],["/page/8/index.html","447aa6077fc2d6c10d35059ba1942c60"],["/page/9/index.html","b77b4ce90179e2d87b9091832bc431a2"],["/payment/index.html","95749ff0dd341de6b6a6c9b51c8e5249"],["/privacy-policy/index.html","35f514baf83025912a090c84665f8e49"],["/rss2.xml","64becf79c56bb78f4604d80106068073"],["/search.xml","82a92acfe8555c57e94100c1a1e873e0"],["/sitemap.xml","a582336befe096d98d420d6e3f2bcc00"],["/sw-register.js","86492e956143e392bf0a99fec77a6b1f"],["/tags/5t/index.html","0cc4880a7d1f4e6357ab76cadd561cdf"],["/tags/Bing/index.html","b7b16145ecbf2b7b70c599b8ea1f54ab"],["/tags/Clash/index.html","fcf64769b70b78ef90242e7f8e0c3175"],["/tags/Clover/index.html","d906402f3f4b14ad43792e11705d4ed3"],["/tags/E5/index.html","2c196c7c209fa296319391f1723a5d8a"],["/tags/FTP/index.html","8660d6cc3f0a933cb851f48f0b840a70"],["/tags/GitHub/index.html","0833e60e7c3db6b800f1c4a5813ec85c"],["/tags/Heroku/index.html","c466b4f343fb2f34df03eaf458431f4f"],["/tags/Hexo/index.html","8078c82a3b5967393392defab1a1c0dd"],["/tags/Lenovo/index.html","36ed55b2bda927033a2df8008726ae45"],["/tags/Oneindex/index.html","f912eb473df49393c32bd2cd485ca01c"],["/tags/QQ/index.html","f0693eead83a209420f8a4e457f03f39"],["/tags/QTTabbar/index.html","e24fc995e3dca753cb50431e79a44d21"],["/tags/RX文件管理器/index.html","b0eb45eef2882d71eabf4a36b4caf153"],["/tags/Todesk/index.html","a71958b6f503a46a9b9bdac3d1847c91"],["/tags/Vercel/index.html","30e682362090020bdca90dbe02bf5c97"],["/tags/ads/index.html","d7b6fb816e040a36840b03f5e2a74eaa"],["/tags/api/index.html","b707ccb60318f857ee7673ce50f2e6af"],["/tags/app/index.html","232fa3b8ac9600d94e155840b0aee3f7"],["/tags/atlas-os/index.html","ee8c2608aeccd3accf440f6871cdbe6a"],["/tags/blacklist/index.html","ea7cb6ae966da7f43a7a39889ae6b968"],["/tags/butterfly/index.html","de56385a228e327891ffba1f8217dd1c"],["/tags/chrome/index.html","2321e2eb0ec3ff72cfc4d9a4ef3e9370"],["/tags/clashx/index.html","4682b3f13e2cba099af62c9b943570d4"],["/tags/cloudflare/index.html","22c841ae0f725df4d4ae8062cb6ac81e"],["/tags/cmd/index.html","52b3c9d9b32aac1536d5543560dc497e"],["/tags/c盘/index.html","63f97e311516b07533f1d68fc47a9524"],["/tags/email/index.html","3fb0730ec59146248ba2d0cb82a002e0"],["/tags/ewomail/index.html","25894e260e2a237d95d3aa19cdf69781"],["/tags/fiddler/index.html","92438f2e8784e3cfa5088d749f25b2db"],["/tags/flags/index.html","37faf5e326b08fb7eb99493f84ec42ad"],["/tags/footer，页脚/index.html","08a046d3edbc6ba86d9bd1052c7ac11b"],["/tags/galgame/index.html","e57db0b75a6b8b1c33e3aabcb7f5150a"],["/tags/git/index.html","df8e65125e8bbe409507b8da9289129b"],["/tags/gitcalendar/index.html","873312a7aa954878b70f92b2acac93a2"],["/tags/google-voice/index.html","91f8b546eece83573ee723c6eacf5b1f"],["/tags/gv/index.html","38e5a806244ad17dd62f810036a0fee2"],["/tags/html/index.html","d401ac8b218ddb7b2104227045b34dc4"],["/tags/index-1.html","b9cda8974d2af9dda873e88ab10e6453"],["/tags/index.html","586cc0ee20507e1c29c8b4612179e87c"],["/tags/js/index.html","28d1c57cc5aca357ecebc78b8e259464"],["/tags/jsdelivr/index.html","47b20830530041becc86bc8b49e25b0b"],["/tags/linux/index.html","7f830fb23d54c82d41bad74f5e6ac93a"],["/tags/macos/index.html","e1fc8ca9b955a2996f73c3354cca6a74"],["/tags/madVR/index.html","57bd3a4fba498ab53dee57d262b15f8f"],["/tags/markdown/index.html","d8c923a3e65fa09f2b74fbf1e43c4aa7"],["/tags/maya/index.html","5c782849bdbe50bb8a53577f2e611447"],["/tags/mklink/index.html","2e9df21bd207eee8003e14e8e881a0fd"],["/tags/office-e5/index.html","cd46b29ea5c28e76adfeb148352a4ecf"],["/tags/onedrive/index.html","7edbb3e2b9312d97d9230fcc38427f98"],["/tags/picGO/index.html","f6ace5c6643a89296f8f5a801538d649"],["/tags/pixiv/index.html","dd482176ca8c84ff495b2a29fa3483a8"],["/tags/potplayer/index.html","f2e1b66eba3561e4588d1f37cecabdab"],["/tags/proxypool/index.html","53254b72e55bd610e986f73322ad44ae"],["/tags/qbitorrent/index.html","0072faa195f6d30005e38c605b87f056"],["/tags/raidrive/index.html","0849318cafa79f9d7726a43153c5bb64"],["/tags/screen/index.html","2d9930ae53803428ce0794be0975544a"],["/tags/speedtest/index.html","36d917b22fb6c4330f504a4360fb79ac"],["/tags/ss/index.html","af554692c3ae59cf03fcc1ef273b2cc6"],["/tags/ssr/index.html","e86c3fabbf47b4ee9b0a8fef60f819d5"],["/tags/stickers/index.html","bf2ba78748f9a4b96cdfca16ebd45926"],["/tags/surfboard/index.html","92c778a2e388768a82dc620e5cf8e127"],["/tags/tap/index.html","94e59660dfd4e4aa6603d79dc2281286"],["/tags/telegram/index.html","bdb19f1ded2c9570af996d9fa424021b"],["/tags/telegram代理/index.html","f53e5ac22f274d2cd6dc64076c206927"],["/tags/tg/index.html","6fe89172d4d9edec13dbcbdb32e24d96"],["/tags/tg代理/index.html","8a0e6637604aee9da29246e5a5112b46"],["/tags/top50/index.html","278e990f327fce516cb08af080d067a2"],["/tags/tracker/index.html","3ac483062986559bc0d48f925bd92438"],["/tags/translate/index.html","4c64361f2d0bc2aedc29fff7cad675bb"],["/tags/translater/index.html","9454be29b94c9b8c509c9f9e4a1fbe39"],["/tags/tun/index.html","b3808dbbb85392ea65903a8647eb63d3"],["/tags/typecho/index.html","9f2c2d04975d0157258c7323e9209307"],["/tags/v2ray/index.html","3f0c6a9bceb4719887b03ec85fdfab19"],["/tags/vpn/index.html","b7b649cb5a0dab4623a78f6c6488f79e"],["/tags/vps/index.html","f69dba7f2b5e1f4a338373715b7d53fc"],["/tags/wallpaper/index.html","7116581e143aacfb8f0a8ba6a54f406f"],["/tags/windows/index.html","a775a78d2590b5dc39c9aab02aedb13a"],["/tags/windows端/index.html","0cea14bdebc7821d9d9fa22a6af24ff6"],["/tags/xray/index.html","bb1673d5b7598f44018ad5c2ae0dd98d"],["/tags/yandex/index.html","6fdfc77e68b613c248f9fb1f668c41d6"],["/tags/下载/index.html","dd8e8cfff558fec6ba9c347ca49c4fd4"],["/tags/不限速/index.html","dd135ddae892e3778efd5778a1df4689"],["/tags/个人网盘/index.html","9e3d5fbfe0c0892f10f3a35317d083fe"],["/tags/主题/index.html","575ce51a343ef02b4687a7886f1b854a"],["/tags/二维码/index.html","93da407a9bd8676bcc88a65bbfec6866"],["/tags/云便签/index.html","b3652b34f54ef7290d669fa402f55487"],["/tags/云盘/index.html","831405c6259adc10b316cb5044ebc60d"],["/tags/人人/index.html","01ab508cc746d13e995db36a5a053b18"],["/tags/代理/index.html","8d6bc46d8f343e5a215b04cd4fd10c1e"],["/tags/代码/index.html","5ac8700ff360e8e9615b436987bc32f1"],["/tags/优选IP/index.html","b70239fd2367f6cff9f7e48803d9ffb9"],["/tags/便签/index.html","5a538fdee7cc4853543cc667d096b72b"],["/tags/保号/index.html","0a5eed4614a199d15b9b0bd58929deee"],["/tags/免费/index.html","c224303100415f098ea84f77a54aac0e"],["/tags/免费节点/index.html","33e2fcf42d05ede3ab652a77d9be460f"],["/tags/冷门节点/index.html","2b5ee1036f204052cf7f86642bd4f383"],["/tags/删库塔/index.html","489d95117c3d0bb319e659f0dd96a19e"],["/tags/加密/index.html","46dfa80325a29f2ab708c960820408f6"],["/tags/动画/index.html","9d574194b83b470c1b6f18ec224825ca"],["/tags/博客/index.html","d979d0affbc15cc403b75119eb1c952b"],["/tags/卸载/index.html","391b950ae754e5c75def511d229b5dde"],["/tags/历史记录/index.html","f4ffad5c17f5be24175d9767a14d8582"],["/tags/压力/index.html","5e56aec50840dc9bb69d185a9f67cd63"],["/tags/压缩包/index.html","e6ebaa1aa1d262c7330f0d8942cbaddc"],["/tags/反代/index.html","0985ee4ad656d6aa3cf56a7da4aa2da0"],["/tags/可视化/index.html","16fde0f994380a49ae1cc4e3ff24fee0"],["/tags/命令/index.html","dee1d06481eb03174559eb437949f829"],["/tags/国家/index.html","36fca64462621c653663c1f4eb82266f"],["/tags/图床/index.html","4e3d2c2daded191ddee1bac9c04f4e45"],["/tags/图片/index.html","9f4b88ea0d2fa6db0bd845853f52db15"],["/tags/域名/index.html","03fa8652e824106842a7f2b99957700e"],["/tags/壁纸/index.html","0349522fe1daffab0d74789f19c7c40d"],["/tags/多标签/index.html","c1cdd46db3a705cbae6aab1a3b4d2a0b"],["/tags/奈飞/index.html","ac39d18e45ee7f631e19afa0ace6c917"],["/tags/存储/index.html","177ed355e30529e27b6cd87a65bd8430"],["/tags/学习/index.html","ec1ebf9d3438fb12ee87d1ce3295a22a"],["/tags/安全/index.html","487b0547ae585e9506925d7fd9352c27"],["/tags/安卓/index.html","8c936d61d3fa65a43ac629cd18678e85"],["/tags/宝塔/index.html","6b222ce7392b5dc8098c7f1d8f65cced"],["/tags/小游戏/index.html","3b81dd5c1193ca683356d15d85a7201f"],["/tags/广告/index.html","38188330d0f96010ae5ed940101f585b"],["/tags/建站/index.html","f81c272ff27c7cbd5d6b804e2434681a"],["/tags/影视/index.html","ec67fae38009c033cb3a7acee8a0ee07"],["/tags/微信/index.html","709240924b6415df8f3b24c97acf8cfc"],["/tags/快速启动/index.html","0606a29063ac1d8e98f68280a63243bf"],["/tags/手机/index.html","4d576132c5b978f611964da5fae6b4ee"],["/tags/托管/index.html","c63a5c6524935599fe07a7df5589eae2"],["/tags/抓包/index.html","dff6d42792afa7171ac5e3c602d90f14"],["/tags/抓取/index.html","bb3255440b026c289978c4cbc2fb6ad0"],["/tags/投屏/index.html","c09a5c442f1272007ace3679fe499611"],["/tags/拓展功能/index.html","60e5271bccbe18a5c1acbbbd12753d8d"],["/tags/挂载/index.html","39835bca954aad4734fb60e28be12cd1"],["/tags/指纹/index.html","626eb1a5cf3dc1f5af1e0d462d8071b4"],["/tags/接口/index.html","e3fb7d69887a68257a55acb21e20d276"],["/tags/提取图片/index.html","928d6d37ec7926cf5600a15f312c41b9"],["/tags/插件/index.html","92674506b18f293018f4c1cee18de2b5"],["/tags/搜图/index.html","febed526c8c61257b795afa8d70af50a"],["/tags/搭建/index.html","d4b27141d4bca2069ae51d48c3fea200"],["/tags/撤回/index.html","08ecb272ccdef22e48f2a7b6f1f03f1e"],["/tags/播放器/index.html","9d44375f2973ddf1857c0aaaca98f38c"],["/tags/支付宝/index.html","244cff681283afcb99e21bc8af35bef8"],["/tags/政府网站/index.html","3051bcf9630277ef8c659decf9a65ecc"],["/tags/效率/index.html","d27a2d1b17836a8766d15de220381abf"],["/tags/日历/index.html","0eec7da06dd6f350351fcf59a5d66304"],["/tags/服务器/index.html","417ae827e87f6ba075bb02b78224fb80"],["/tags/机场/index.html","b749cd18e95b59a572e993fedd915b6c"],["/tags/查重/index.html","9a98bb32a4ca13ac8bdb9e29d0192560"],["/tags/桌面/index.html","aa789534f95b295e507d6514e3366354"],["/tags/梯子/index.html","043dc7be5cc852c1f7fd9b75180f33e5"],["/tags/检测工具/index.html","9ae513e99f832da23047965f9f6e82e7"],["/tags/汉化/index.html","d2293eab20c6ea8b617bcc2b9ed285c6"],["/tags/测压/index.html","d51e399d32542ee4eb784468fd961835"],["/tags/测速/index.html","17b6c0071d862382181236a65e4305b3"],["/tags/浏览器/index.html","ede0d6d1806704103d4e4a67d342df9d"],["/tags/清理/index.html","55179a529d0ef7b2a396a9925575234a"],["/tags/滚动条/index.html","e5bbd9ed5e0019625a04dd13bd5510cb"],["/tags/灰色歌曲/index.html","a65288aaf3f4c9f578800f7a5597d85f"],["/tags/电影/index.html","81364d48ed6200132ece8cce37c2d5d9"],["/tags/电脑/index.html","e2a96ec14749736d8f2b224690019ad1"],["/tags/电视剧/index.html","f9cf44e2d577e03456ad847f9fdaf807"],["/tags/白嫖/index.html","707384254a899f711f8205058fe01320"],["/tags/百度/index.html","eafd768f413c5710ae48ea825e3b48da"],["/tags/百度云盘/index.html","bdd15002e60212df32fa65b594239fc0"],["/tags/百科/index.html","263f1cc7051ff661905d88ac2346b24d"],["/tags/短信/index.html","41a5027602296ec8c17e54577eb63f5c"],["/tags/硬件/index.html","ba6719c9bb1c95bd258d33846b40990b"],["/tags/科学上网/index.html","708fbc5ce73e82e2ba21a3a0fb5651f3"],["/tags/空间/index.html","f56a8dcd0507986b1fb4cf248186829c"],["/tags/笔记/index.html","e1615c064c02feadef8554d08f4116a8"],["/tags/简洁/index.html","ad54bfd587bb1dc55db76d2c519c560c"],["/tags/简约/index.html","d9f614d3a9578ac1c6a6057ef826d8a1"],["/tags/维基/index.html","194796b93050577496ea40bbbc24f3ca"],["/tags/网易云/index.html","4f5f7527cdd6cd51db8420f233d32066"],["/tags/网盘/index.html","73493eb339436facb1ec03556bb6d4a7"],["/tags/网站/index.html","6c4e167f7ed03790673d16e343606f49"],["/tags/网络/index.html","47040265e40d6d67f35797806af89137"],["/tags/美化/index.html","8d3d7c229a8a623cc07445f6d4e11c2c"],["/tags/翻墙/index.html","f6f5aa3a3f57582a5e3d5e4f45f46a28"],["/tags/翻译/index.html","abe5f488c0080e0c9afedf8d23d5b741"],["/tags/翻译器/index.html","bc36ddc6a89d49fdd29e2a32031d2f08"],["/tags/聊天/index.html","63d8908951615001ecf32d725b1a9b4e"],["/tags/聊天室/index.html","03aadf690bf07c071efc1d96543f6d8b"],["/tags/联想/index.html","b20650ed79b92a5faf02e7b25fe8d2a9"],["/tags/节点/index.html","a90bc520d66db375b5d41be50d47892a"],["/tags/虚拟手机号/index.html","0dd2525052492bbe56e364c8259263fa"],["/tags/补丁/index.html","9f1556ee3e969c405f4a1dab3d531a6f"],["/tags/表情包/index.html","e349635e48cd25bfe3743cb307f58a7b"],["/tags/视频/index.html","a8ed26e6cb2499d53352d10aa54343b3"],["/tags/解析/index.html","0c78831d4e64a0defeac6fa15f47ef1a"],["/tags/订阅链接/index.html","5658ac873aea432b10608d9e629cd8ac"],["/tags/记录/index.html","9352d9a0ca2d2f7d09a14115f28cf050"],["/tags/识图/index.html","509ca6a243a06849122ba38283dac140"],["/tags/语言/index.html","9eab4113931a5d568c97f8ff6d592681"],["/tags/资源/index.html","816ec349b7a6030785b9062f3d08ca91"],["/tags/资源管理器/index.html","2080e63b92290c58c3763ee2aaa00386"],["/tags/转移/index.html","46026a385fbcccf06df4a7cc2d11ce11"],["/tags/软件/index.html","216b34f08a1cf4fe427a67cccd19929b"],["/tags/轰炸/index.html","11d0549a2b28e4223971147b40180989"],["/tags/迁移/index.html","7dfa5bc2dc06407efd17a662c95ab451"],["/tags/远程控制/index.html","0a493971d6d24c4dac7d0325980aa886"],["/tags/连接/index.html","6002905206ba7164ea972b39a7f029de"],["/tags/追踪/index.html","e979db52d5d93c679db214e9f318e674"],["/tags/速度/index.html","f802bd0a6a8b2cdf274057fe3eccbc2e"],["/tags/邮箱/index.html","5d91443bb0c3d4eeb9e154b8b678cd83"],["/tags/酷炫/index.html","bdb410e3ea38079da5323248ccf5561a"],["/tags/钓鱼/index.html","121c3661523d73a7b20be83169cc6e77"],["/tags/镜像/index.html","9a62c25de0ddcec6dde38b1b506f4a1f"],["/tags/随机/index.html","f95a125b2d10da2af84b5a8b4926284e"],["/tags/隐藏/index.html","27cb56f0d5a7f16d2ae11bcd38793f11"],["/tags/面板/index.html","14226d4d8b350b6eca23bf1d61b15318"],["/tags/音乐/index.html","e5302e2ca2fa44190156cf94e85ece23"],["/tags/高颜值/index.html","04cdf1849f435e1f97ebd94b50dfe088"],["/tags/魔改/index.html","7f24c0d927b68b7576cb59816c533a0d"],["/tags/黑名单/index.html","9f610dd75707dc068f3fdc1580018c0c"],["/urls/index.html","6e290f5f393c3716e4fdedbfe87ef2df"],["/vps/index.html","24089523ab45672dabf0f6f9ed26138a"],["/支持/index.html","c5624ee1203e9c410822e34613604c84"]];
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
