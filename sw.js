/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","ca5727b0e52bdb5abf7231f164c72ce7"],["/2020/11/29/clash-windows/index.html","523eb92fb74e917916067a347c46297d"],["/2020/11/30/websites2/index.html","02d2d14f1a3225ace05da452e10cf268"],["/2020/12/04/iphone4s/index.html","dd6f46349efca5c56f716307f9ae9c7c"],["/2020/12/04/onenote/index.html","e012bb897974ccd4fd21829949fe1fce"],["/2020/12/04/wesites1/index.html","9a79cc48fe916fa9c2e4ec86819d3700"],["/2020/12/06/nokia808/index.html","e362120ee64455d5d1a93ffbfa66e09c"],["/2020/12/07/ipad1/index.html","9f108ccd09785ea1b6e48309cc7f0732"],["/2020/12/18/freesubscribes/index.html","c7398e8bd45a0fbb19b2b7ae06b90435"],["/2020/12/19/musics/index.html","2be8ee99f198537f716d74d8034cad03"],["/2020/12/19/shadowrocket/index.html","64cfff5c8e82753559a1db01bf8a3918"],["/2020/12/19/v2ray-windows/index.html","b72abc3a05ad8222fa61b57c11a9a279"],["/2020/12/19/v2rayng/index.html","546efcba46dd165c2a041e2b90baf7e2"],["/2020/12/20/beoplay/index.html","696b5b233bab5c573e87b5fbe0898cfe"],["/2020/12/20/订阅链接转换/index.html","a52516687e1deb6ad3f6bb337b45452a"],["/2020/12/21/chrome浏览器下载提速/index.html","5c1fedef3578d135a89755da08c5d7ee"],["/2020/12/21/免费128线程并发下载xdown/index.html","fa6350cbae82133bd7cc6ff1eca5a232"],["/2020/12/21/免费32线程下载软件ndm/index.html","feb873d455910e9de505663449260d22"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e2f726d86cf6c5c2848ecc0b237f8f01"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","e465dd9f4d9d2286d418e5013401a5dc"],["/2020/12/21/广告怎么知道我在想什么/index.html","275c9b18cee6538aaa6ebfcc2afce31b"],["/2020/12/21/无名·引子（小说试写）/index.html","30723f6a3c67b751cf57ec6f87d62442"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","c24420998dcbec5dbd8e7d51ebe038b6"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","44515429ae59ee10e90b18880b78906e"],["/2020/12/21/高速轻量下载器aria2/index.html","611e66b48664379e90949f278d589c55"],["/2020/12/22/2020-cee-roo/index.html","982a71d5d5a407117eeb63584cdd1d31"],["/2020/12/22/firefox插件、github、steam富强/index.html","bb082269644e2073b83dd3b70964542e"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","278ecd6d2755717a0f54c686e3637f0b"],["/2020/12/26/python-day-1/index.html","e0e1c3900383fa479b2462e1e5469df7"],["/2020/12/26/python-day-2/index.html","25e9b9c539bc93e52e649150ba26ae7a"],["/2020/12/26/度盘不限速下载方式一赏/index.html","4834a9757978104f74363c5359b019ca"],["/2020/12/26/添加开机自启软件/index.html","5a69586bac53a2cb8d10717c122b1869"],["/2020/12/26/电脑端截图方式一赏/index.html","96124819336d8a6a48398f8303d42037"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","ba2be2fe475288691452b7969319d68e"],["/2020/12/27/最安全的浏览器tor/index.html","627b15f5a59be92ccb392cafc6f09dc5"],["/2020/12/27/网易云刷等级和听歌数量/index.html","5cf41ba4ceb7d009c2fccb8ed4b61e4e"],["/2020/12/28/freenom申请免费域名/index.html","1c9c44218a350c16d9d4cb24fe005ca5"],["/2020/12/31/机场/index.html","e93e148fbe59226a132b39e61ab246e1"],["/2021/01/01/M1/index.html","c606cdc72bb0023008a7a4e77cd2229b"],["/2021/01/01/compress/index.html","a76ae6fc828245e38706aa3a6004bb70"],["/2021/01/01/infinityfree/index.html","d66852392025b9a35c89987ac3901f28"],["/2021/01/01/硬核翻墙/index.html","7387293499a94988349f057557bc2119"],["/2021/01/02/qq/index.html","682df6b8df5b007b2880718708ba567f"],["/2021/01/03/netch/index.html","67fa44f24abe34ce3f27f653eff5e40c"],["/2021/01/03/waifu2x/index.html","e5385615b43850e59bf296aa910b20a1"],["/2021/01/04/ads/index.html","66d234fa4e5d147d5f06c6089fcc759f"],["/2021/01/04/games/index.html","01fef8341f997fde3c2378645578611c"],["/2021/01/04/heroku/index.html","d0d14df378398ae64e693cb6d90fb032"],["/2021/01/06/movies/index.html","2790045e917be157a6ec5d0fccdcc979"],["/2021/01/07/google2020/index.html","9659428b3df584cba1358752643f8591"],["/2021/01/07/lucky/index.html","7e7b0293fd8fcce8a9d955878a12fc73"],["/2021/01/07/spotify/index.html","70298177d4f69b479d42f7d684605d5d"],["/2021/01/07/thunder/index.html","14060d4bc7ddf5fd2fc7697199d21fd5"],["/2021/01/08/adguardhome/index.html","e5a39dad95369f230dcd02f655be6454"],["/2021/01/10/IBM/index.html","c21f64a8733faba43f9ab4348f776743"],["/2021/01/10/potplayer/index.html","cf867306266116690564478fec04c4cf"],["/2021/01/10/sakuraanime/index.html","d32869064cda1870166b5a18474e5091"],["/2021/01/10/美剧星球/index.html","54e83c5ed2db83781b2f9ef5679a2c44"],["/2021/01/12/telegraph/index.html","2474fa9b1d8f29fee41f50944d878324"],["/2021/01/14/comics/index.html","514fd9c88562c15f5bbdc0d91d1a8c78"],["/2021/01/14/ftp/index.html","d39ecdd921f4741011e22f8fd114d343"],["/2021/01/14/oraclecloud/index.html","97fb6663616a8c868d644f838c2a934f"],["/2021/01/14/porkbun/index.html","bf87dde7c3303cc752952455290c84d6"],["/2021/01/14/powertoys/index.html","c592877901dfd8d2cc2e30c9b1d33692"],["/2021/01/14/taptap/index.html","d7ba346c6c63ec0c0eb92354f975882e"],["/2021/01/14/ubuntuvsftp/index.html","6ddc02b87c94d7260a5b72616652b9ad"],["/2021/01/14/小说/index.html","3189c2b283985ab446f2c565f094440e"],["/2021/01/15/freeproxies/index.html","8263303ce9e95c762e97e034a4bfeb58"],["/2021/01/15/incaseformat/index.html","2b53416fe69a2d30327ede84fadf1fa5"],["/2021/01/16/euserv/index.html","2bd9ea4659d1bfbe288cd6a2136bac3a"],["/2021/01/16/winxray/index.html","82fdabfff8c09e60f0198b019a4eabe9"],["/2021/01/18/qqreadhistory/index.html","1171979e2b61e7ba316f2b801d25729d"],["/2021/01/18/qqrevoke/index.html","601a565d2453fefbab6b9bb6c0148c12"],["/2021/01/19/freevpn/index.html","1f97ed44c112816c21498a1e8a25681f"],["/2021/01/20/browsertrack/index.html","5ec04bddbd4f3bb7f98294df620e73ef"],["/2021/01/20/v2ui/index.html","f43803a7c26cf0b44070e708b88348e5"],["/2021/01/21/failedtoconnect/index.html","bbc4481bc9c8c3ef1a7959d52895fa45"],["/2021/01/21/gitcalendar/index.html","d1b7122e10fc4ae7b6c8281903d9f17e"],["/2021/01/21/markdownformat/index.html","b37e3fc43061680fd3d922800b0f7fe7"],["/2021/01/21/markdowntable/index.html","ba9d0efe8da2f21d001870b55869011c"],["/2021/01/21/vercel/index.html","3fc5440e6cafd7c1c9e137c6823196ed"],["/2021/01/22/hardware/index.html","4596586620944befa194cc1a7b55dda3"],["/2021/01/22/muviz/index.html","068d280eb88d1ecf3140c5024006f824"],["/2021/01/22/randomapi/index.html","aac174b0a855827ac9935431b4ea0335"],["/2021/01/22/searchimages/index.html","adff746a7309009c2b4ae7c2ccacb8fc"],["/2021/01/23/RX文件管理器/index.html","85b44ff4d97053746a4972fb8bddb2f0"],["/2021/01/23/chromeflag/index.html","f504a510a4b89900ddbfad92d7444eb9"],["/2021/01/23/qttabbar/index.html","219f1f1297f61e5942df4a6cbca6abcd"],["/2021/01/24/githubspeedup/index.html","1f7c02bc5c65e27cc4e88e261e1bdee2"],["/2021/01/24/jsdelivr/index.html","2011ee4eb24f27a515986569b442f939"],["/2021/01/25/note/index.html","659794cc89abe03bdbe347b2db6e4a50"],["/2021/01/25/soul/index.html","7a80333ac83ace42ad613e15f7bfba9b"],["/2021/01/26/herokuxray/index.html","c86392cd423c7e789e8e19f43c755b05"],["/2021/01/27/proxypool/index.html","5c4ba159741148d63d588b1d405750bc"],["/2021/01/27/tracker/index.html","9cef7618bcff9da0c0613179bfb71615"],["/2021/01/30/pandownphp/index.html","9e85e16eb191a2677889e4f890d9bcdd"],["/2021/01/31/newgroup/index.html","a15d06c1da53e2711cb2cea4b1f279ff"],["/2021/02/01/clashlanguage/index.html","9afb75676320472142b405b577479924"],["/2021/02/01/encrypt/index.html","9e20526c01e831984fe9f2c60d9c9a4f"],["/2021/02/01/footermotion/index.html","58d3bbdab5428f246eb89f781ae2d700"],["/2021/02/01/gitter/index.html","8aca548f01659fdd339d8c278b325bc2"],["/2021/02/01/pixivtop50/index.html","1741e105dfeda5081510fe940123b0a2"],["/2021/02/01/scrollbar/index.html","05a121f614e5e622f68f78fa7df8bbd4"],["/2021/02/02/clover/index.html","298522f1ba611bfeee03cea9bfda9072"],["/2021/02/02/maya/index.html","92b713f1a6411a05572b184acf6133cc"],["/2021/02/02/speedcontroller/index.html","37d141572c77230da482bdd8a546c159"],["/2021/02/02/yesmusicplayer/index.html","0e2f2bbda9fd88e0628ffdf178732f29"],["/2021/02/03/lenovoonelite/index.html","f20da77b01a20a8dd87ade35f694514c"],["/2021/02/03/skipads/index.html","f1e6d9506ddf7bc51b6a3aabb50f501a"],["/2021/02/04/picseed/index.html","20b570eddb6d85b95af79ac62f5ba7f0"],["/2021/02/04/renren/index.html","52b209846ac9232fbe9aba86ce384617"],["/2021/02/04/serverstress/index.html","1bcad51731a7cbbd17bb0796facb1e5f"],["/2021/02/04/wikipediazh/index.html","74f2396871532a1fee3516beaaa074e0"],["/2021/02/05/googlevoice/index.html","76ba430a70e7fb70cfcda2e03c69e271"],["/2021/02/06/clashconnection/index.html","00152bfc79810bb2df68d8d9033e62ff"],["/2021/02/06/gvtransfer/index.html","8b456b97ea090345ed2eae0ef0406591"],["/2021/02/06/todesk/index.html","a68d4e95f7fd2e49d69af07ed46aae00"],["/2021/02/06/vpnblacklist/index.html","82ff2b054f4621965641bee03123b549"],["/2021/02/07/mklink/index.html","267040899c2c431c35cf1b722d8d4d5b"],["/2021/02/07/speedtest/index.html","efc6337418faeaf1792ed317076ba941"],["/2021/02/07/translate/index.html","ccad57c6c907b23a20a337667f9122d7"],["/2021/02/08/ewomail/index.html","f840b5877aa5f7cb07894b9e64cf1e47"],["/2021/02/10/officee5/index.html","16d47a824faf3dad1800606a96614d17"],["/2021/02/10/raidrive/index.html","a925d82c6b4bad04cd602c55d9470a0d"],["/2021/02/13/e5sub/index.html","bc5fbbb1e00db6e79a2ade4e012e529b"],["/2021/02/14/screen/index.html","22d361ff3865563047a4757628b979a7"],["/2021/02/15/clashtun/index.html","4983964e658a96d5c80f40b01824cdff"],["/2021/02/15/messageboom/index.html","0aed554540a92a124aea680948116bcb"],["/2021/02/15/oneindex/index.html","c124fd47c96916909fc766555b7bbeb1"],["/2021/02/16/govsites/index.html","0e8a50c629d77cfc6e02b97cd3024118"],["/2021/02/17/hexototypecho/index.html","75749052d6bb4698d13ef09bb3b74f9b"],["/2021/02/19/fiddler/index.html","dbfb87f0a4365456832dfb820e0d25b0"],["/2021/02/22/potplayerset/index.html","5c3db6f90dec208f81408377b3fcd1ad"],["/2021/02/22/studyresource/index.html","3185c19f393073f180ecd1ea64321bce"],["/2021/02/22/telegram/index.html","887a0c7f03bfb63990b6488c946db9a3"],["/2021/02/22/videos/index.html","58db920239fa48e2dbc6f4239624d6ad"],["/2021/02/24/mtproxy/index.html","5653cec6bb6a26bf3642274bb9fa7fc8"],["/2021/03/10/catchcat/index.html","9a33d6ebd2fbff1dd75b819f9f7e555b"],["/2021/03/10/neteasemusic/index.html","e85c77647b062bf30eb7c337ab5407d6"],["/2021/03/10/surfboard/index.html","848e323d49db887741612132c4225630"],["/2021/03/11/vpnandjc/index.html","b6a91e149fd5ecbf474b3d5d437fe38f"],["/2021/03/12/qrcodes/index.html","9f50804f667ec2ac5a709f19e2361b7e"],["/2021/03/20/qv2ray/index.html","d939d95d9223312f6865e096089c01dd"],["/2021/03/22/freevps/index.html","7da82f9bb98c8ba182cd1791f447ae61"],["/2021/03/24/tgstickers/index.html","1daacee7510b036a5ec5f0ed8b730b9e"],["/2021/03/25/clashx/index.html","193562f7dbc06598021b6e890a904efd"],["/2021/03/26/bingwallpaper/index.html","c73782793a374cf33bcf8f3e21d4e522"],["/2021/04/03/soutu/index.html","cc3db27e4d263bd6a7099614fe2fb111"],["/2021/04/03/tiyunti/index.html","4ece1a589bdc3beb00a9a42a6d0c564d"],["/2021/04/04/btpanel/index.html","ff30b9c79a08caccf7e76cb03fe88f0c"],["/2021/04/06/atlasos/index.html","43396e102653e9d8485765dd157583bc"],["/2021/04/06/cleaner/index.html","c88522926aa1227ff97264cd0dd1655b"],["/404.html","b5faa5245d8dbc7fb7b8f801f78057cc"],["/archives/2020/11/index.html","34e39dde937c3e8442435cc71bb3ce2d"],["/archives/2020/12/index.html","11746d795e7b5e65a7500b6f726486c5"],["/archives/2020/12/page/2/index.html","e7da6c938fb78003be0906ad3bd86c9b"],["/archives/2020/12/page/3/index.html","56ffb33353f2ed90c2412781d0c7bd53"],["/archives/2020/index.html","c781328d8beba8d644850a1d85382174"],["/archives/2020/page/2/index.html","72d3e561551cb361185e8c06c1b004fd"],["/archives/2020/page/3/index.html","616a6259d4d8ff206bd0bf73bed1776c"],["/archives/2021/01/index.html","2a7203599352e54b9fd2da08c5dd9d5d"],["/archives/2021/01/page/2/index.html","abcce7536bb24db05799fb80514bc254"],["/archives/2021/01/page/3/index.html","6a56218f54783b128c4ca5da3c0a1e1a"],["/archives/2021/01/page/4/index.html","3c8051ce52866b407fffb31339b5f4fe"],["/archives/2021/02/index.html","9efff7bc64e7aa805bf6932a2863e7c3"],["/archives/2021/02/page/2/index.html","20b8016dbad2cbebe231104a56115ea0"],["/archives/2021/02/page/3/index.html","d17942dc356c60289eccf6fe1a815ff3"],["/archives/2021/03/index.html","5b44afc53afd25299e7a322764c2f07c"],["/archives/2021/04/index.html","a7903195e3722ea121c5f6ce4045035b"],["/archives/2021/index.html","411ce502ac3966e33c6eee3cf16d5f3c"],["/archives/2021/page/2/index.html","2918fdceb08ad3dcfe4b022423a9e731"],["/archives/2021/page/3/index.html","c0d9f2927f4107c1891592d8f2ed9937"],["/archives/2021/page/4/index.html","4a398d183ad83768f2d4e8897856d4d4"],["/archives/2021/page/5/index.html","ca6f42896b958dde10a2e961a4dd6305"],["/archives/2021/page/6/index.html","289e431981d9bcaf6665ab77c3f1418f"],["/archives/2021/page/7/index.html","3197ecaa9bb4472d88ef10b1babd4597"],["/archives/2021/page/8/index.html","839617a83bf9eeda1b68d0e7ccc1927d"],["/archives/index.html","22e2ff1a2a9a5471c2b85469ff19f220"],["/archives/page/10/index.html","7dc49ecbebe790a8bc1a1606e975f9d7"],["/archives/page/11/index.html","a40df561a2381a9f8e8b0eb9a70689a6"],["/archives/page/2/index.html","7c43a7578420a7a33ef21905c36af83e"],["/archives/page/3/index.html","16dfb820f7831632ab40d57d4cd48f52"],["/archives/page/4/index.html","580917f93f97380a1096c23ef0aaf406"],["/archives/page/5/index.html","1eed5d521f04f0958ab6d5773cd39fbf"],["/archives/page/6/index.html","97a498c6649209e635e250361dbcc0e0"],["/archives/page/7/index.html","5eabab670874310bb912ba0439b1fc9f"],["/archives/page/8/index.html","d891837b3fb9c531237cd2ef9661fd8b"],["/archives/page/9/index.html","da163264fcdf804254773330ad6e5026"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","f7a8c5d9c0c5aa51b952ec0214c565c3"],["/categories/index.html","e03abde8d0aca7ebfb4f18b09646f445"],["/categories/下载/index.html","7f37c9a06ffe77685fa48a8797bf2e53"],["/categories/安全/index.html","8d3d80fa914187497cdefaa9308a7cf0"],["/categories/建站/index.html","01f0d65615e56ecbb7e45d1bb02d38e9"],["/categories/机场测评/index.html","9e38cc2551d300f699aa0c814b1406ee"],["/categories/杂/index.html","a902710c29532202aa789b1b063c3d23"],["/categories/杂/page/2/index.html","f21a3f546bfd939c528f9e8e50613b76"],["/categories/测评/index.html","5c9cd5d5a8bc53ff8f09baecd85ecb23"],["/categories/科学上网/index.html","30c9722bc4a7f403e2af248b661b7cf5"],["/categories/科学上网/page/2/index.html","8e1bb9905a14579abfb17007e231fd9c"],["/categories/编程/index.html","30cb60773281f6a0e3bcc3231ba2d539"],["/categories/网站/index.html","35bb790616a3f80e84a1a5369123f387"],["/categories/网站/page/2/index.html","0506cc15cfbcd4e7d46dbed2232c1411"],["/categories/软件/index.html","705ec0c32c6eebbe656cea3ebb8151ed"],["/categories/软件/page/2/index.html","75a3ec112c1f6ad214e62b19cb808e26"],["/categories/软件/page/3/index.html","159daa509bceed5a125294b4bd959c4b"],["/categories/软件/page/4/index.html","77c8baf5e28c382f9779933adb0fce18"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","a4ddcb5ca20f80330a5631383ea000a2"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","fba23c51e245897cefaf4f77eb30d65d"],["/ios/index.html","559f877e8017e49a1cb924e672901b1f"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","aa4d085fbf56d3109bad40d036dd09d4"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","e2d39ca61718b78beb89d64869832931"],["/page/11/index.html","6bb0af18f27ec90abb7263c115cb7f0c"],["/page/2/index.html","c28ac5347862a7404f79916485f328d7"],["/page/3/index.html","82c367f4c3b71cdd94a66f667df5feb5"],["/page/4/index.html","62e1fe08b5b390bc020aa05182faed12"],["/page/5/index.html","855ca10f3a36b5c7a520f9d4084ef546"],["/page/6/index.html","d6e26fa51aa14cf96590066c375f56df"],["/page/7/index.html","2a5a92858aa05879dc7d29a0ddca14bf"],["/page/8/index.html","b202bbefc9721f812deaea0321fd51ee"],["/page/9/index.html","f84e647d35c0e61d9a1d5080fe0de842"],["/payment/index.html","b3ac263ec8d70c1082775f25d0e9a94a"],["/privacy-policy/index.html","0b83bb870619f07477f56bba585e9ab3"],["/rss2.xml","8806ce5a44d65d5bb82b9cb158a10c52"],["/search.xml","59bca1d742eebbf0cbe52863f604af01"],["/sitemap.xml","ebb06641d995d49fadacfbf38f074ba9"],["/sw-register.js","bcd7b9200c663a9f7ab1a0c8f5a9f544"],["/tags/5t/index.html","e2a6c0ab74f3028b9e51a721f6697e0c"],["/tags/Bing/index.html","8dd153e0fc41c86409fd172cdac37b5a"],["/tags/Clash/index.html","c3347fcc2f08e13764bcca9fceb793b3"],["/tags/Clover/index.html","afef7b615ed35cbe22c94f32a00b9a1c"],["/tags/E5/index.html","417155686ed25b0f36255f979ff2dbb8"],["/tags/FTP/index.html","f312095fd9f3621f062ce0db05b7b26f"],["/tags/GitHub/index.html","f1e9fce363558f9d5c19bc0235d85d6b"],["/tags/Heroku/index.html","e814ba6b0a1352ba8c868d51bd10ef56"],["/tags/Hexo/index.html","27d89a4413f04dd7d23c3f0c3bb6d54a"],["/tags/Lenovo/index.html","f979f29cd03e5122d0198a6c0e39a7ea"],["/tags/Oneindex/index.html","d045d64d8e5a3b5752f0be18199b5c5e"],["/tags/QQ/index.html","b9c32442c298bbc1e2fabefc9d9ae7c3"],["/tags/QTTabbar/index.html","f015dcc425ad7d2be054e72ba0a8ea87"],["/tags/RX文件管理器/index.html","d7aeed95dce999d8779379ad0066f06c"],["/tags/Todesk/index.html","59a8817617c7bb436df5eac7332ba918"],["/tags/Vercel/index.html","8b8da62139eb157f16b0b8e3a2c4833d"],["/tags/ads/index.html","37066dbab2db3a686ac0e04b630b9fa3"],["/tags/api/index.html","133e8ead47fd3530a430ce99a2a09def"],["/tags/app/index.html","b46f837c65294421576745f8764ce1b5"],["/tags/atlas-os/index.html","723f48438fe26b2f2f621b91474f6769"],["/tags/blacklist/index.html","7e8d0a36942198ff9e9ca7ef9a2fd5c9"],["/tags/butterfly/index.html","9da472fc77d77dd969f97af81b5e7594"],["/tags/chrome/index.html","3ea6fef23dc8110cea0136a3542f83d7"],["/tags/clashx/index.html","4fb05678ec9ffb880cd68ae32ff8a5b8"],["/tags/cloudflare/index.html","2757c9d6839c6d949b21d624cf8e96b9"],["/tags/cmd/index.html","c53619db80a9794e1947a8a3db3b6249"],["/tags/c盘/index.html","2422e0ae3d76acc97dcd78fbaaf9f645"],["/tags/email/index.html","6a019bd8354f5bad4bd3cec3e94a655d"],["/tags/ewomail/index.html","12402ca58db6fa891bede1851c0a10ae"],["/tags/fiddler/index.html","a60b20992a2ff311602b78a73cee80f2"],["/tags/flags/index.html","b1d58c2531d5436bbf8ae8de4de27586"],["/tags/footer，页脚/index.html","2c81a15ad13364a99aecf56751a1059f"],["/tags/galgame/index.html","3e3f2ba4e8c79824f7d0bb3aecbc1f59"],["/tags/git/index.html","a57a30e566b60b3eef5be592a8de7288"],["/tags/gitcalendar/index.html","cfa3daf6fdef37719f5b5df817a2ff9f"],["/tags/google-voice/index.html","39c888352951a1883f725b761b429d8e"],["/tags/gv/index.html","58485660b7b9ea6fd948a186572a65ab"],["/tags/html/index.html","7c24cdbef052c68f9851209b1c72fa10"],["/tags/index-1.html","3ce33a9553b547a6335a3f25f63d72fc"],["/tags/index.html","464829249b13129d667362cb9ab4af80"],["/tags/js/index.html","6561392c32832f5511d5dfb9580c5c39"],["/tags/jsdelivr/index.html","c7d8e255a770e1fde58767340c7c9991"],["/tags/linux/index.html","8e650540fc6c22d3d1e91e9b9204e8d5"],["/tags/macos/index.html","88b1479da3453ec374f7f1741ba630ac"],["/tags/madVR/index.html","e627c20b5205ed2f921153cfdd8e2224"],["/tags/markdown/index.html","ad8605540b5748a1d468b49dbc28b5f5"],["/tags/maya/index.html","da9f448a518c18ef570626d1830ed320"],["/tags/mklink/index.html","e949e9597486721b4ec026bd4ed13e5f"],["/tags/office-e5/index.html","d59e80269d76f93961bebf51c43cd8d8"],["/tags/onedrive/index.html","2a62ebe3494369bf2fed104cb8b0660d"],["/tags/picGO/index.html","6c0e1389e2756a4f5795b21aedfcff12"],["/tags/pixiv/index.html","deed9b35a3dddfebbaa15ba7ff39ffdc"],["/tags/potplayer/index.html","7ab5d8d8bc04e7a399e3513a8b432415"],["/tags/proxypool/index.html","10bd750dfe1b90743af3bbe88ffda4fb"],["/tags/qbitorrent/index.html","aa95cf347f01d9b4f39a76dc0fca633c"],["/tags/raidrive/index.html","636f8cedff742b1f4dfcc9a62d104a3f"],["/tags/screen/index.html","4292edd45513d98666b275792bf9c8a6"],["/tags/speedtest/index.html","36401df2e6c4151a43c61c12d70e83a3"],["/tags/ss/index.html","10787a515897fde65aa390c43144945f"],["/tags/ssr/index.html","ffd419a90efb254f40426d859d0ce66a"],["/tags/stickers/index.html","a87cd1f2ad0c2b5a6749ab58b9fa8805"],["/tags/surfboard/index.html","63abd327c3e0ad4475e34bf11ed1526f"],["/tags/tap/index.html","b6bf85177a24ea125a8a76e3ca09ba63"],["/tags/telegram/index.html","e627f21b133a42618ba4f58acb1ae8a1"],["/tags/telegram代理/index.html","365fb24fca057722858134563495b3fe"],["/tags/tg/index.html","68debbb363c00b602e484537313b375a"],["/tags/tg代理/index.html","b00de379cfd66fe40e1ef5844cebac39"],["/tags/top50/index.html","aadd8d1b4056b18a1bdcd466c1f15c62"],["/tags/tracker/index.html","a2d23e55906c2bf6143e903aa1d8cb97"],["/tags/translate/index.html","e82a7d9dd96fb18570630ab266de719f"],["/tags/translater/index.html","04b388675ca0c986c25aea6e230c6d29"],["/tags/tun/index.html","7df1a707533a3666c9b63b2429b6f878"],["/tags/typecho/index.html","b71933e2b374aa022c8a8c14ba78ada7"],["/tags/v2ray/index.html","2da231aef4541d957253c8eafabf6c9a"],["/tags/vpn/index.html","8824b7c31d98fe3c2d6a3e18364dd007"],["/tags/vps/index.html","7fa4d0a19fc3e3da79558b8f172ab316"],["/tags/wallpaper/index.html","2a1b87a7dbbc18d7e68ebf031f2ae2a4"],["/tags/windows/index.html","4b5d390de0b5850ac666e2140a112aae"],["/tags/windows端/index.html","2c5c70699c6b8c94749c8b179641bef4"],["/tags/xray/index.html","e35c26c44eb3402aab2e2da1b8d6f663"],["/tags/yandex/index.html","708827cf74d59f65090164239a88d47e"],["/tags/下载/index.html","9b75d2e678eca6487892f8456f50906a"],["/tags/不限速/index.html","ca8bbdf44a55a0be96fcf03b78e38a2b"],["/tags/个人网盘/index.html","bd614055f4c0343bf6a7cf2de95bdfd2"],["/tags/主题/index.html","c5d3af2e1baadb7c5b8dc761e2cdafb6"],["/tags/二维码/index.html","30f296468c614789f7bf11e6628707c4"],["/tags/云便签/index.html","91656c371836e495bb5dc5aa827af176"],["/tags/云盘/index.html","40d1d6b225b52712e58c85b410aebf45"],["/tags/人人/index.html","f6de2613fc675a02a27aca59fc9be60d"],["/tags/代理/index.html","6505b54a4206bfe0340d59f2158675c2"],["/tags/代码/index.html","503c8b99083ad682d97cabe4d644c3b1"],["/tags/优选IP/index.html","9dd7b980c5affeac56fcb2be7c75c225"],["/tags/便签/index.html","2b0644d000ea8eba1c20348ac8774475"],["/tags/保号/index.html","ee62f9f54ec6a0760760e01e66d4c533"],["/tags/免费/index.html","dc9cf039d9ee70029f3bb0f174521270"],["/tags/免费节点/index.html","f364a766f7143518fd16eb2d82cc5477"],["/tags/冷门节点/index.html","01f28ab4e3337a630a1d2e6cacd75863"],["/tags/删库塔/index.html","a7abf9a2057b0eba3a6d7d0d22138cd6"],["/tags/加密/index.html","e40694cfce77e97488e866b5b2c4ba70"],["/tags/动画/index.html","1648f6a0b256a8dff104ffe1275e9e28"],["/tags/博客/index.html","fe5994c055f78db827acb8743b8b0439"],["/tags/卸载/index.html","dc21c0da12db69cb82253ec1bac03420"],["/tags/历史记录/index.html","0b64ab44cc163a057d9d88b8e04fb36d"],["/tags/压力/index.html","e2d13d3f90cb37b47a35f82694f3e871"],["/tags/压缩包/index.html","8c80d96b82bfedcf43586bc8bbf3fb1b"],["/tags/反代/index.html","b6f247edd50e051acc6610a288811fa1"],["/tags/可视化/index.html","e342602a5a937ddf8ff3e354228b0c42"],["/tags/命令/index.html","24d27e1f42d6b120a2a235aff8276a27"],["/tags/国家/index.html","3a0653fbf7c7cadd79a8f2e1108650d0"],["/tags/图床/index.html","c9fe6c6800f841fbf5d0432191ab21f7"],["/tags/图片/index.html","b1d5ea0b37fb9e7698582f8f262f0d20"],["/tags/域名/index.html","7f9577d113ce2a39b6bd7dec430a2c70"],["/tags/壁纸/index.html","4c695ab0cc21069ec65c0dbae147d745"],["/tags/多标签/index.html","d9df1033ef09419f4f2eee1220259444"],["/tags/奈飞/index.html","451d12e55bf64dc78827aadfa86d9f8b"],["/tags/存储/index.html","f3a35068fd11c6543387a7629d2fb005"],["/tags/学习/index.html","938d2c4d348bb8c26cbcc2d9a62c5596"],["/tags/安全/index.html","875d1be1a2b4237b42de591e10c3fab7"],["/tags/安卓/index.html","4bcb8b18bc17cc40d722b99b7fc2fac6"],["/tags/宝塔/index.html","f7107e538e7caf9d2e865262d88cffdf"],["/tags/小游戏/index.html","1fa0e89d2dea4eb71c3a0601215276f7"],["/tags/广告/index.html","4e6a0808c2df5dce9b1eb263a2bd4759"],["/tags/建站/index.html","633b6b2fd7d286c9d175ffc981b94c5f"],["/tags/影视/index.html","d856ddd78d14b1e3bdc6964463944274"],["/tags/微信/index.html","0065805dbb2d592a86bce71e588c583a"],["/tags/快速启动/index.html","854fc70c366d97e5099b112eab81dea2"],["/tags/手机/index.html","c5f767945d5822a1c0f98874d762544c"],["/tags/托管/index.html","60db0cabc6ae9512e4b96a394e8c5b65"],["/tags/抓包/index.html","17385ab80fe50397bb6c3437fcbfa89c"],["/tags/抓取/index.html","834a29a3270e46be1941486f79b7d016"],["/tags/投屏/index.html","e14e82fa5a56b2b93497d3c4618dc6dd"],["/tags/拓展功能/index.html","ecb458491e61c5fec011548baf116a73"],["/tags/挂载/index.html","060fc1fea995168182dec7c87f3ed447"],["/tags/指纹/index.html","a2f32e8df3258f3934d770e8c5cc42de"],["/tags/接口/index.html","36104f4c24bf2e01e7fa50ec93d9195c"],["/tags/提取图片/index.html","c19687eb76fbca6a62a31efd42e962d2"],["/tags/插件/index.html","5ea2f775b783a5479385638dbb621b6d"],["/tags/搜图/index.html","be505ce79e25355b236f423e4cc68d96"],["/tags/搭建/index.html","634376a3a1c2586e7ecba5fa04ec238e"],["/tags/撤回/index.html","93cbe405f228fc9170c8abb25683ecd9"],["/tags/播放器/index.html","456c385ae530f7f740c2783611e890f3"],["/tags/支付宝/index.html","7713f8e60201acf698136306cb842385"],["/tags/政府网站/index.html","47770262694fa39d7199932838df8ba9"],["/tags/效率/index.html","c0f001e03807677f216f58ca1e551d78"],["/tags/日历/index.html","f1c303cbe9e3f75d4c0269c723f08905"],["/tags/服务器/index.html","591f3124c3a215a9f0743406a8b09336"],["/tags/机场/index.html","f9c39d1892d9f5a88ad82e7a96d884eb"],["/tags/查重/index.html","7858fac9336986e34070f63536df5baa"],["/tags/桌面/index.html","7b06329faed13b01983efd93b2c5928e"],["/tags/梯子/index.html","bd9c183f4ec1df539de5db482dec2fd6"],["/tags/检测工具/index.html","5cbf68d68e8771bdf90965fedd67cd5f"],["/tags/汉化/index.html","e4e7ca1e95c1fa060a642dfcdd98396d"],["/tags/测压/index.html","82a61d86adf0193d5a6937357de92bc5"],["/tags/测速/index.html","9a9116b58532b41cbfb70d09e852f298"],["/tags/浏览器/index.html","fdcec80b42a9631a3d085614001ea834"],["/tags/清理/index.html","3460b242ec1d76f805680af13baf8848"],["/tags/滚动条/index.html","50c212e232ceabe141d6d729aad3407b"],["/tags/灰色歌曲/index.html","5585d21fe6809c0ac01fe1bc41f906d3"],["/tags/电影/index.html","afab69daf92f4c735348ff8eca727d05"],["/tags/电脑/index.html","aff795f5c30a5011489379c616898e5f"],["/tags/电视剧/index.html","a7cb0c8aa7d30b2d40684382aa9100ec"],["/tags/白嫖/index.html","7408eaae2cb2d1a2d65f1ba56cbf5eac"],["/tags/百度/index.html","24b596ff25401b9069ba54cddcc29ab4"],["/tags/百度云盘/index.html","c5c030409b618054d88b89fde43e91b1"],["/tags/百科/index.html","e64487bc195a4eabcaf641b9d2800483"],["/tags/短信/index.html","ab92eb54411d2e4bc2b72f10852915be"],["/tags/硬件/index.html","1e9702fa3f420b3d6e56cdd046aabc3f"],["/tags/科学上网/index.html","4aa037c57c7138a42261880bd6dc542c"],["/tags/空间/index.html","6f33a279ed7ba1b15cc741585fa25d03"],["/tags/笔记/index.html","da6d4d5f11d63735245bbfb8b2023adf"],["/tags/简洁/index.html","cb01e45ec3c7f0100ffab1fbaa43cff8"],["/tags/简约/index.html","593797c6116fa96bcc8a3e1a29ba0fdf"],["/tags/维基/index.html","e0a1e70e3c0b7889618fda39b8c3ef1b"],["/tags/网易云/index.html","768a6c18409401df35a556fa6d29947b"],["/tags/网盘/index.html","cc8087beae0fb19849955a50ccd28be0"],["/tags/网站/index.html","309367243ea805d506632ad760feafe8"],["/tags/网络/index.html","551b35dd04851b1ad59c83b97e266a01"],["/tags/美化/index.html","cfae2354a55d59e577132dfedf6656e8"],["/tags/翻墙/index.html","7b94764a37deebad8c21475dff6f8da2"],["/tags/翻译/index.html","b1a17478c691eafd4d3aa9a8126fc447"],["/tags/翻译器/index.html","825daeccdcb70736a84f8c3258e28403"],["/tags/聊天/index.html","a5696db02e4ca2e30e6f99678d2601ca"],["/tags/聊天室/index.html","64403ba2a28bb40f6b964a7c7c12381c"],["/tags/联想/index.html","9c5969b72a438a68921766ad53c9f549"],["/tags/节点/index.html","7ead77f906a507d01209c4fb3cd6936e"],["/tags/虚拟手机号/index.html","d18daa1866cca767ecd1bb6eea61e90b"],["/tags/补丁/index.html","df49b53218f6c54c1ac7afd59bdd25cd"],["/tags/表情包/index.html","1d7552940eddece60775c2e5594f9f43"],["/tags/视频/index.html","98ee580a2e487b022c2bb53953a01386"],["/tags/解析/index.html","1e72f2dc383eaf4fae2801521033c873"],["/tags/订阅链接/index.html","0813b94b078b5583d5bbc1db4c3d8123"],["/tags/记录/index.html","ef08f368638959beabfa8d39d3487f63"],["/tags/识图/index.html","5e2af418830a4aa60fed90bf1cbcce1f"],["/tags/语言/index.html","f1ccedc74175909b0360158856c5adde"],["/tags/资源/index.html","286fbb1d418de4371c6331b5a95cce2b"],["/tags/资源管理器/index.html","06234b234f554bfa3aaef5f405b32c5b"],["/tags/转移/index.html","ffa57a3e49c39e9f533d3aa651b50dc9"],["/tags/软件/index.html","bf461aa2e0d0d2552410fa3ad2aaab44"],["/tags/轰炸/index.html","d9a0378cb064ad58d6bfd62916bb3d4b"],["/tags/迁移/index.html","8c83a719a2d97e1ca4e532b4b1a876ea"],["/tags/远程控制/index.html","dfbf2013668d9058791b814999940599"],["/tags/连接/index.html","b1b02ac60b559a05d4c819ec62e96899"],["/tags/追踪/index.html","2848b64586297d8a670e215cf8036aa1"],["/tags/速度/index.html","3decd9dbb12ef0696570cd8f5ab55471"],["/tags/邮箱/index.html","ac04172ea0f902e4619cc651898730d4"],["/tags/酷炫/index.html","35cc08f64a2ef7333cfd27bbd6a0f672"],["/tags/钓鱼/index.html","f94984457435d3e88e6bb9eff65fd16b"],["/tags/镜像/index.html","1251746117c2f4c9e70bd8355e30b91d"],["/tags/随机/index.html","ece62f98735f8130ebdd79daafe2704d"],["/tags/隐藏/index.html","50bf663400827d1d70b75e4cd59b7789"],["/tags/面板/index.html","f034090f049d8390e4c25d455d105f19"],["/tags/音乐/index.html","9dace6aa8cba273e492ff356daf21f0b"],["/tags/高颜值/index.html","c322f371e475abb81ec6f435a5a33e62"],["/tags/魔改/index.html","491075b4166f523f96d4462c271309f3"],["/tags/黑名单/index.html","3f0503152c2c86516775e57bb15fac92"],["/urls/index.html","36c7aed4027cde0ec519e4a035ee500a"],["/vps/index.html","b83dd9b7831a0580892ee620ddccec02"],["/支持/index.html","79ee90543dba8ec65fe35c94049aa84b"]];
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
