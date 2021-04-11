/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","ca5727b0e52bdb5abf7231f164c72ce7"],["/2020/11/29/clash-windows/index.html","523eb92fb74e917916067a347c46297d"],["/2020/11/30/websites2/index.html","02d2d14f1a3225ace05da452e10cf268"],["/2020/12/04/iphone4s/index.html","dd6f46349efca5c56f716307f9ae9c7c"],["/2020/12/04/onenote/index.html","e012bb897974ccd4fd21829949fe1fce"],["/2020/12/04/wesites1/index.html","9a79cc48fe916fa9c2e4ec86819d3700"],["/2020/12/06/nokia808/index.html","e362120ee64455d5d1a93ffbfa66e09c"],["/2020/12/07/ipad1/index.html","9f108ccd09785ea1b6e48309cc7f0732"],["/2020/12/18/freesubscribes/index.html","8d78e0a79af2f3a7d94a997f0467162c"],["/2020/12/19/musics/index.html","2be8ee99f198537f716d74d8034cad03"],["/2020/12/19/shadowrocket/index.html","a81f1583d89f30cb018d5cd47f88cfda"],["/2020/12/19/v2ray-windows/index.html","649a2596874d01682218ad673b9197c4"],["/2020/12/19/v2rayng/index.html","546efcba46dd165c2a041e2b90baf7e2"],["/2020/12/20/beoplay/index.html","696b5b233bab5c573e87b5fbe0898cfe"],["/2020/12/20/订阅链接转换/index.html","a52516687e1deb6ad3f6bb337b45452a"],["/2020/12/21/chrome浏览器下载提速/index.html","5c1fedef3578d135a89755da08c5d7ee"],["/2020/12/21/免费128线程并发下载xdown/index.html","fa6350cbae82133bd7cc6ff1eca5a232"],["/2020/12/21/免费32线程下载软件ndm/index.html","feb873d455910e9de505663449260d22"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e2f726d86cf6c5c2848ecc0b237f8f01"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","e465dd9f4d9d2286d418e5013401a5dc"],["/2020/12/21/广告怎么知道我在想什么/index.html","275c9b18cee6538aaa6ebfcc2afce31b"],["/2020/12/21/无名·引子（小说试写）/index.html","30723f6a3c67b751cf57ec6f87d62442"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","c24420998dcbec5dbd8e7d51ebe038b6"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","44515429ae59ee10e90b18880b78906e"],["/2020/12/21/高速轻量下载器aria2/index.html","611e66b48664379e90949f278d589c55"],["/2020/12/22/2020-cee-roo/index.html","982a71d5d5a407117eeb63584cdd1d31"],["/2020/12/22/firefox插件、github、steam富强/index.html","bb082269644e2073b83dd3b70964542e"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","278ecd6d2755717a0f54c686e3637f0b"],["/2020/12/26/python-day-1/index.html","e0e1c3900383fa479b2462e1e5469df7"],["/2020/12/26/python-day-2/index.html","25e9b9c539bc93e52e649150ba26ae7a"],["/2020/12/26/度盘不限速下载方式一赏/index.html","4834a9757978104f74363c5359b019ca"],["/2020/12/26/添加开机自启软件/index.html","5a69586bac53a2cb8d10717c122b1869"],["/2020/12/26/电脑端截图方式一赏/index.html","96124819336d8a6a48398f8303d42037"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","ba2be2fe475288691452b7969319d68e"],["/2020/12/27/最安全的浏览器tor/index.html","627b15f5a59be92ccb392cafc6f09dc5"],["/2020/12/27/网易云刷等级和听歌数量/index.html","5cf41ba4ceb7d009c2fccb8ed4b61e4e"],["/2020/12/28/freenom申请免费域名/index.html","1c9c44218a350c16d9d4cb24fe005ca5"],["/2020/12/31/机场/index.html","e93e148fbe59226a132b39e61ab246e1"],["/2021/01/01/M1/index.html","c606cdc72bb0023008a7a4e77cd2229b"],["/2021/01/01/compress/index.html","a76ae6fc828245e38706aa3a6004bb70"],["/2021/01/01/infinityfree/index.html","d66852392025b9a35c89987ac3901f28"],["/2021/01/01/硬核翻墙/index.html","7387293499a94988349f057557bc2119"],["/2021/01/02/qq/index.html","682df6b8df5b007b2880718708ba567f"],["/2021/01/03/netch/index.html","67fa44f24abe34ce3f27f653eff5e40c"],["/2021/01/03/waifu2x/index.html","e5385615b43850e59bf296aa910b20a1"],["/2021/01/04/ads/index.html","66d234fa4e5d147d5f06c6089fcc759f"],["/2021/01/04/games/index.html","01fef8341f997fde3c2378645578611c"],["/2021/01/04/heroku/index.html","d0d14df378398ae64e693cb6d90fb032"],["/2021/01/06/movies/index.html","2790045e917be157a6ec5d0fccdcc979"],["/2021/01/07/google2020/index.html","9659428b3df584cba1358752643f8591"],["/2021/01/07/lucky/index.html","7e7b0293fd8fcce8a9d955878a12fc73"],["/2021/01/07/spotify/index.html","70298177d4f69b479d42f7d684605d5d"],["/2021/01/07/thunder/index.html","14060d4bc7ddf5fd2fc7697199d21fd5"],["/2021/01/08/adguardhome/index.html","e5a39dad95369f230dcd02f655be6454"],["/2021/01/10/IBM/index.html","c21f64a8733faba43f9ab4348f776743"],["/2021/01/10/potplayer/index.html","cf867306266116690564478fec04c4cf"],["/2021/01/10/sakuraanime/index.html","d32869064cda1870166b5a18474e5091"],["/2021/01/10/美剧星球/index.html","54e83c5ed2db83781b2f9ef5679a2c44"],["/2021/01/12/telegraph/index.html","2474fa9b1d8f29fee41f50944d878324"],["/2021/01/14/comics/index.html","514fd9c88562c15f5bbdc0d91d1a8c78"],["/2021/01/14/ftp/index.html","d39ecdd921f4741011e22f8fd114d343"],["/2021/01/14/oraclecloud/index.html","97fb6663616a8c868d644f838c2a934f"],["/2021/01/14/porkbun/index.html","bf87dde7c3303cc752952455290c84d6"],["/2021/01/14/powertoys/index.html","c592877901dfd8d2cc2e30c9b1d33692"],["/2021/01/14/taptap/index.html","d7ba346c6c63ec0c0eb92354f975882e"],["/2021/01/14/ubuntuvsftp/index.html","6ddc02b87c94d7260a5b72616652b9ad"],["/2021/01/14/小说/index.html","3189c2b283985ab446f2c565f094440e"],["/2021/01/15/freeproxies/index.html","8263303ce9e95c762e97e034a4bfeb58"],["/2021/01/15/incaseformat/index.html","2b53416fe69a2d30327ede84fadf1fa5"],["/2021/01/16/euserv/index.html","2bd9ea4659d1bfbe288cd6a2136bac3a"],["/2021/01/16/winxray/index.html","82fdabfff8c09e60f0198b019a4eabe9"],["/2021/01/18/qqreadhistory/index.html","1171979e2b61e7ba316f2b801d25729d"],["/2021/01/18/qqrevoke/index.html","601a565d2453fefbab6b9bb6c0148c12"],["/2021/01/19/freevpn/index.html","1f97ed44c112816c21498a1e8a25681f"],["/2021/01/20/browsertrack/index.html","5ec04bddbd4f3bb7f98294df620e73ef"],["/2021/01/20/v2ui/index.html","f43803a7c26cf0b44070e708b88348e5"],["/2021/01/21/failedtoconnect/index.html","bbc4481bc9c8c3ef1a7959d52895fa45"],["/2021/01/21/gitcalendar/index.html","d1b7122e10fc4ae7b6c8281903d9f17e"],["/2021/01/21/markdownformat/index.html","b37e3fc43061680fd3d922800b0f7fe7"],["/2021/01/21/markdowntable/index.html","ba9d0efe8da2f21d001870b55869011c"],["/2021/01/21/vercel/index.html","3fc5440e6cafd7c1c9e137c6823196ed"],["/2021/01/22/hardware/index.html","4596586620944befa194cc1a7b55dda3"],["/2021/01/22/muviz/index.html","068d280eb88d1ecf3140c5024006f824"],["/2021/01/22/randomapi/index.html","aac174b0a855827ac9935431b4ea0335"],["/2021/01/22/searchimages/index.html","adff746a7309009c2b4ae7c2ccacb8fc"],["/2021/01/23/RX文件管理器/index.html","85b44ff4d97053746a4972fb8bddb2f0"],["/2021/01/23/chromeflag/index.html","f504a510a4b89900ddbfad92d7444eb9"],["/2021/01/23/qttabbar/index.html","219f1f1297f61e5942df4a6cbca6abcd"],["/2021/01/24/githubspeedup/index.html","1f7c02bc5c65e27cc4e88e261e1bdee2"],["/2021/01/24/jsdelivr/index.html","2011ee4eb24f27a515986569b442f939"],["/2021/01/25/note/index.html","659794cc89abe03bdbe347b2db6e4a50"],["/2021/01/25/soul/index.html","7a80333ac83ace42ad613e15f7bfba9b"],["/2021/01/26/herokuxray/index.html","c86392cd423c7e789e8e19f43c755b05"],["/2021/01/27/proxypool/index.html","5c4ba159741148d63d588b1d405750bc"],["/2021/01/27/tracker/index.html","9cef7618bcff9da0c0613179bfb71615"],["/2021/01/30/pandownphp/index.html","9e85e16eb191a2677889e4f890d9bcdd"],["/2021/01/31/newgroup/index.html","a15d06c1da53e2711cb2cea4b1f279ff"],["/2021/02/01/clashlanguage/index.html","9afb75676320472142b405b577479924"],["/2021/02/01/encrypt/index.html","9e20526c01e831984fe9f2c60d9c9a4f"],["/2021/02/01/footermotion/index.html","58d3bbdab5428f246eb89f781ae2d700"],["/2021/02/01/gitter/index.html","8aca548f01659fdd339d8c278b325bc2"],["/2021/02/01/pixivtop50/index.html","1741e105dfeda5081510fe940123b0a2"],["/2021/02/01/scrollbar/index.html","05a121f614e5e622f68f78fa7df8bbd4"],["/2021/02/02/clover/index.html","298522f1ba611bfeee03cea9bfda9072"],["/2021/02/02/maya/index.html","92b713f1a6411a05572b184acf6133cc"],["/2021/02/02/speedcontroller/index.html","37d141572c77230da482bdd8a546c159"],["/2021/02/02/yesmusicplayer/index.html","0e2f2bbda9fd88e0628ffdf178732f29"],["/2021/02/03/lenovoonelite/index.html","f20da77b01a20a8dd87ade35f694514c"],["/2021/02/03/skipads/index.html","f1e6d9506ddf7bc51b6a3aabb50f501a"],["/2021/02/04/picseed/index.html","20b570eddb6d85b95af79ac62f5ba7f0"],["/2021/02/04/renren/index.html","52b209846ac9232fbe9aba86ce384617"],["/2021/02/04/serverstress/index.html","1bcad51731a7cbbd17bb0796facb1e5f"],["/2021/02/04/wikipediazh/index.html","74f2396871532a1fee3516beaaa074e0"],["/2021/02/05/googlevoice/index.html","76ba430a70e7fb70cfcda2e03c69e271"],["/2021/02/06/clashconnection/index.html","00152bfc79810bb2df68d8d9033e62ff"],["/2021/02/06/gvtransfer/index.html","8b456b97ea090345ed2eae0ef0406591"],["/2021/02/06/todesk/index.html","a68d4e95f7fd2e49d69af07ed46aae00"],["/2021/02/06/vpnblacklist/index.html","82ff2b054f4621965641bee03123b549"],["/2021/02/07/mklink/index.html","267040899c2c431c35cf1b722d8d4d5b"],["/2021/02/07/speedtest/index.html","efc6337418faeaf1792ed317076ba941"],["/2021/02/07/translate/index.html","ccad57c6c907b23a20a337667f9122d7"],["/2021/02/08/ewomail/index.html","f840b5877aa5f7cb07894b9e64cf1e47"],["/2021/02/10/officee5/index.html","16d47a824faf3dad1800606a96614d17"],["/2021/02/10/raidrive/index.html","a925d82c6b4bad04cd602c55d9470a0d"],["/2021/02/13/e5sub/index.html","bc5fbbb1e00db6e79a2ade4e012e529b"],["/2021/02/14/screen/index.html","22d361ff3865563047a4757628b979a7"],["/2021/02/15/clashtun/index.html","4983964e658a96d5c80f40b01824cdff"],["/2021/02/15/messageboom/index.html","0aed554540a92a124aea680948116bcb"],["/2021/02/15/oneindex/index.html","c124fd47c96916909fc766555b7bbeb1"],["/2021/02/16/govsites/index.html","0e8a50c629d77cfc6e02b97cd3024118"],["/2021/02/17/hexototypecho/index.html","75749052d6bb4698d13ef09bb3b74f9b"],["/2021/02/19/fiddler/index.html","dbfb87f0a4365456832dfb820e0d25b0"],["/2021/02/22/potplayerset/index.html","5c3db6f90dec208f81408377b3fcd1ad"],["/2021/02/22/studyresource/index.html","3185c19f393073f180ecd1ea64321bce"],["/2021/02/22/telegram/index.html","887a0c7f03bfb63990b6488c946db9a3"],["/2021/02/22/videos/index.html","58db920239fa48e2dbc6f4239624d6ad"],["/2021/02/24/mtproxy/index.html","5653cec6bb6a26bf3642274bb9fa7fc8"],["/2021/03/10/catchcat/index.html","9a33d6ebd2fbff1dd75b819f9f7e555b"],["/2021/03/10/neteasemusic/index.html","e85c77647b062bf30eb7c337ab5407d6"],["/2021/03/10/surfboard/index.html","848e323d49db887741612132c4225630"],["/2021/03/11/vpnandjc/index.html","b6a91e149fd5ecbf474b3d5d437fe38f"],["/2021/03/12/qrcodes/index.html","9f50804f667ec2ac5a709f19e2361b7e"],["/2021/03/20/qv2ray/index.html","d939d95d9223312f6865e096089c01dd"],["/2021/03/22/freevps/index.html","7da82f9bb98c8ba182cd1791f447ae61"],["/2021/03/24/tgstickers/index.html","1daacee7510b036a5ec5f0ed8b730b9e"],["/2021/03/25/clashx/index.html","193562f7dbc06598021b6e890a904efd"],["/2021/03/26/bingwallpaper/index.html","c73782793a374cf33bcf8f3e21d4e522"],["/2021/04/03/soutu/index.html","cc3db27e4d263bd6a7099614fe2fb111"],["/2021/04/03/tiyunti/index.html","4ece1a589bdc3beb00a9a42a6d0c564d"],["/2021/04/04/btpanel/index.html","ff30b9c79a08caccf7e76cb03fe88f0c"],["/2021/04/06/atlasos/index.html","43396e102653e9d8485765dd157583bc"],["/2021/04/06/cleaner/index.html","c88522926aa1227ff97264cd0dd1655b"],["/404.html","50558a92ac41afec4f9e892b51ebaba5"],["/archives/2020/11/index.html","f5d4f6288eb6f7e1328547361a42f1bb"],["/archives/2020/12/index.html","1994a64180745d47b9a1631b3d9605ae"],["/archives/2020/12/page/2/index.html","13eef6e3934675dbd04e78627c2c11aa"],["/archives/2020/12/page/3/index.html","2ac1abb6133038130f9ad00be3daa45a"],["/archives/2020/index.html","d281484170f2563b3f0ae46d91f32799"],["/archives/2020/page/2/index.html","a831d0a1c494421bd8f11e5db8a3928f"],["/archives/2020/page/3/index.html","869b1e812832f1ea8fb21f1967ef4879"],["/archives/2021/01/index.html","3e522754e506990bd84796a83bc539b7"],["/archives/2021/01/page/2/index.html","0d48f250c3a5120effc170b7b72bd6ad"],["/archives/2021/01/page/3/index.html","f7d9977bc204dcc308ff7c49fda7a473"],["/archives/2021/01/page/4/index.html","7497816e855aa5874de48a15de62b1ad"],["/archives/2021/02/index.html","e96c73d2453af0105db3a831c42a0067"],["/archives/2021/02/page/2/index.html","86c51e77ab3ed877168b064f3b0d1dba"],["/archives/2021/02/page/3/index.html","a620809e984667814da52ab480f0d093"],["/archives/2021/03/index.html","5fb470f803326646b3cd0e9262e1463d"],["/archives/2021/04/index.html","781911b5acf6be2eb7c007bccc7ec479"],["/archives/2021/index.html","fd99323267db88494af3ca8383246ff1"],["/archives/2021/page/2/index.html","a03fd06c5d5fe9faac2c478a8032c4af"],["/archives/2021/page/3/index.html","eff6734e3a0dacc7c8dd34aa24783f75"],["/archives/2021/page/4/index.html","d65cfcdfd59414bae9ae2fba3b9d694f"],["/archives/2021/page/5/index.html","081950587909e365c368540de6b875a3"],["/archives/2021/page/6/index.html","31f9d011495a0bd88ae51f0fcb2547d7"],["/archives/2021/page/7/index.html","5e363d45ec52cfb1cd4dd93dd884fa39"],["/archives/2021/page/8/index.html","122cd88b7d38537b8899c888028dcd27"],["/archives/index.html","a0c0dff6383b785abcf30cf15aab4f01"],["/archives/page/10/index.html","bd6146db973a72d9396e21dcfd88ff24"],["/archives/page/11/index.html","5aea29d96c407403318e3b296172afd3"],["/archives/page/2/index.html","95021c2bead2dee13901188826f3b619"],["/archives/page/3/index.html","bba220322053dbbc158878c0df8c0d69"],["/archives/page/4/index.html","1102a7236ba5a708b36b4eadcbc6e168"],["/archives/page/5/index.html","976e450b4ef2610c8fad08c9b9e90a87"],["/archives/page/6/index.html","cdcceb85ab57ab5170a02645a90e68e8"],["/archives/page/7/index.html","bd3a2fb90220261914a90abae011904c"],["/archives/page/8/index.html","0819de19d8e48d8ea54bdf0c1ce9ef2a"],["/archives/page/9/index.html","ff2496faa010897f79a4eb9bc62503f8"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","d13c669a6c0d9dbf6110d03bc2889b29"],["/categories/index.html","313ab2e5b50fbcd96f55c978698f6c92"],["/categories/下载/index.html","8daa7f34724edefa3649a54cbea7cefd"],["/categories/安全/index.html","7531f97c65f579024e3f1e57bd6db4fd"],["/categories/建站/index.html","f19cc76e09a3f883b5f489b5e0246821"],["/categories/机场测评/index.html","474096256f710e37671185f227006e32"],["/categories/杂/index.html","9e62183870605f2cef52b39cdab92101"],["/categories/杂/page/2/index.html","e077c03afa65043f1b6fdcbd2fe8127d"],["/categories/测评/index.html","1254c61cf251244a5f3d7a98ddf1b761"],["/categories/科学上网/index.html","db064548ca9eb5da9917a4fedde1a392"],["/categories/科学上网/page/2/index.html","ec321322045b6370384ee4a6d54ab598"],["/categories/编程/index.html","2e3ae834d8a9d19560c6582e92c6be7c"],["/categories/网站/index.html","39a33a0340c67c4d01629ccc299b04f2"],["/categories/网站/page/2/index.html","6a8651c7767f90c73e6bf39540ee9d77"],["/categories/软件/index.html","1c87ce6c92030fd94d116ccf9f37b32f"],["/categories/软件/page/2/index.html","6ffe6962b649ecb0be5d3cce79d27397"],["/categories/软件/page/3/index.html","e9f2f221c9330961b9fed20a8297f86b"],["/categories/软件/page/4/index.html","7aa63c972a077d06bf3bde038f4ffabc"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","076c531e312f74afa77549f680f9d9f4"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","3770e0582b1aed369d40bd88ed63a263"],["/ios/index.html","138d2d7decc87467325e22837e31699d"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","910c69b33dc239b5e7b4d1743e39da1f"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","1142d8726673380c592611048f9425c8"],["/page/11/index.html","d14eea9645523677496ed9204c44bb46"],["/page/2/index.html","9563029518fc024f3135e7106eb2320e"],["/page/3/index.html","aaf3fc5659171dd054c58bdb9226d403"],["/page/4/index.html","307722b4131cbf475edbe755739ca630"],["/page/5/index.html","91460ad693dcac8fe453932ef9fea89e"],["/page/6/index.html","8fab1c1e27076261e9d6989e7efdc6be"],["/page/7/index.html","8f5b207deb60b59add4f97064f09dcf5"],["/page/8/index.html","b0d4c77017b49a4710c165a4e1300da5"],["/page/9/index.html","35fbea2ef3c0376dbf9b3a6b3a067355"],["/payment/index.html","da85992ba264a7dd02f5f2ddfeae74fe"],["/privacy-policy/index.html","7db23f28757379a299ba93a0dbe41e90"],["/rss2.xml","9a40393a403557f8030e2b3d8490c4e5"],["/search.xml","2410a40b409c90d7ea0438d5dafb8290"],["/sitemap.xml","cea0f1fe6876d3aa159a36319972caf1"],["/sw-register.js","607fa2f7ae4f24df574e6bbbcb1c8dcd"],["/tags/5t/index.html","0318856c68a6a59d1875be393be919db"],["/tags/Bing/index.html","cbc610a99343aab9867bb422c2c4f2e5"],["/tags/Clash/index.html","732338d3fe8b538286a45d1a113418b5"],["/tags/Clover/index.html","a07529d98b694e76eaf1ce1d7e5af5e0"],["/tags/E5/index.html","59daf67f0a74fc8ecbb9e4265cabfffc"],["/tags/FTP/index.html","ac63ea2b0d2178ed6ba1192a50839cfc"],["/tags/GitHub/index.html","e1376875960ba0b59265f4593b7cd48a"],["/tags/Heroku/index.html","0cea6f9da43766e2ed19cc82017a56be"],["/tags/Hexo/index.html","88ed33c46d504ecda7773530bfcdc54b"],["/tags/Lenovo/index.html","b7af39294b74b2443e33062b4f5a5b2d"],["/tags/Oneindex/index.html","fa66e094594174d92719f0d0b931a709"],["/tags/QQ/index.html","8e770c948a7d2ffd0a622bf225c59b47"],["/tags/QTTabbar/index.html","42ae2d99c4300f7232e989915c89900a"],["/tags/RX文件管理器/index.html","34abae5f8c217e653ec41e4e615423aa"],["/tags/Todesk/index.html","1ca6fe56a5ea649d6305b0267ccb61a8"],["/tags/Vercel/index.html","fd06325b183c4392952a821d602fbe9b"],["/tags/ads/index.html","79195a7547c898b46872670b9fe8268e"],["/tags/api/index.html","1fcfc1e0ceaa22425f1c8a40bdf1cbac"],["/tags/app/index.html","28d487697251f9ed014c10a3948207c2"],["/tags/atlas-os/index.html","59853be952cb94f8cc593cef8934fdda"],["/tags/blacklist/index.html","a22837c7b185f2dc00294bfe738b666a"],["/tags/butterfly/index.html","78207a5078112488e186556cc6d2fade"],["/tags/chrome/index.html","e8d7c9fa271cdad672e716166c0556b3"],["/tags/clashx/index.html","0bbbdbd01cc160f9e496935a6766da6e"],["/tags/cloudflare/index.html","408da7e46d1154a860280d2c02610b42"],["/tags/cmd/index.html","cf936a0b0c44f4b50a17d9e22236f2ce"],["/tags/c盘/index.html","bad96ce6bde9ae12d513a24140896865"],["/tags/email/index.html","9fe138758bf7942cb5e7b8dd279ea26e"],["/tags/ewomail/index.html","907708fd957a08492b3714e75d9f6746"],["/tags/fiddler/index.html","076cf3e92fd5be62dee8a5eee64f87fe"],["/tags/flags/index.html","12811a87af194aa8e54108585b918aa3"],["/tags/footer，页脚/index.html","775c8665e2563433501d617523eb7770"],["/tags/galgame/index.html","4914cb838000570b56c89e135cc8370f"],["/tags/git/index.html","9e269aebe1c7d53d0dd325b70d7b8386"],["/tags/gitcalendar/index.html","8321a93d4037214eb1a59109b2e78904"],["/tags/google-voice/index.html","8772705ab504c44e55de7ce67801fd10"],["/tags/gv/index.html","40d58ec655fbccd643ca2fb5f5405158"],["/tags/html/index.html","87de76440143ffd87cf5d187754a46eb"],["/tags/index-1.html","7240e811a537449d9efe23369adb7416"],["/tags/index.html","0af558128ad4d361d33b46e18bed133c"],["/tags/js/index.html","ec47ace54d65a64de2ec91db8f60590d"],["/tags/jsdelivr/index.html","a6c82130a9c2245cbf31311e9010faf9"],["/tags/linux/index.html","b8002766fddb51d3758fdbb18e491f61"],["/tags/macos/index.html","a70c62718988a73586b489be611a2f5c"],["/tags/madVR/index.html","20130aa6e0ba67ca2e0538431f6f86bc"],["/tags/markdown/index.html","0e6cad7c7bfc036cf2ecf5ae305d0aca"],["/tags/maya/index.html","317c1b1680558b9240178fb50b02c4e2"],["/tags/mklink/index.html","d9d02ea20aa6b1750d5b31ba6a086cb8"],["/tags/office-e5/index.html","37220c80807eda28695fecb952cf6694"],["/tags/onedrive/index.html","734943172e9dd22292a14b0f3d3c75b5"],["/tags/picGO/index.html","ab433a3bd2257f19957629b627adff43"],["/tags/pixiv/index.html","231df8257899bac9c7b9d70ec5b18a06"],["/tags/potplayer/index.html","7e6f4cf4da82f79e128570ee6e63c379"],["/tags/proxypool/index.html","53d916397a2ae9d2aeafbe44c8def3c0"],["/tags/qbitorrent/index.html","a715c71ecbc33c8f9bc8038c439647d3"],["/tags/raidrive/index.html","b9f7b99f346dcff66ac7913449abb2e7"],["/tags/screen/index.html","cc1a7131f5782233eeb68a0ea16078df"],["/tags/speedtest/index.html","36f4c496a48dbb106436acc6146932d7"],["/tags/ss/index.html","56e6b2b0870a4a9284fb78225aa900af"],["/tags/ssr/index.html","2f58c8b6c8757cef1a6bf56780dd482b"],["/tags/stickers/index.html","95fb3a55a6b8c9a1126e431d6cb68414"],["/tags/surfboard/index.html","542c00978c963228cca57e65e7a6a9f3"],["/tags/tap/index.html","456e6729c70bcd4eba9533c963cfaf81"],["/tags/telegram/index.html","9f71a3ff35b16ee4e98f2fbbbbc299bc"],["/tags/telegram代理/index.html","cbd9f5e3616e07b05f23347401074801"],["/tags/tg/index.html","56bfe113d735e71ddd73b35d2fac8d0c"],["/tags/tg代理/index.html","7ed1e1b0260c30d6b87508655d9e2e24"],["/tags/top50/index.html","6b182b758d1acf55cc282a573b484202"],["/tags/tracker/index.html","81e911384f2961c634892e1681de6696"],["/tags/translate/index.html","c00fe4b9eeea7fb2bed2483ba3dc08c9"],["/tags/translater/index.html","ad46a0d15b74e904ac646ea20834f660"],["/tags/tun/index.html","058ac5ddb4dd8bfd013eba611dcd1d6e"],["/tags/typecho/index.html","ec14be23e6d3ec6d20c0ea1d15cab273"],["/tags/v2ray/index.html","895ee594136baeb8679593712a472e7e"],["/tags/vpn/index.html","5947bf2217c5acf65be11d1cf6b25a03"],["/tags/vps/index.html","6f27260c8530e8930ea8f0576e252f0a"],["/tags/wallpaper/index.html","10d38dbd81b13dcfb2a446ef70d1444a"],["/tags/windows/index.html","00fb31f9d944027ef74532a259bde743"],["/tags/windows端/index.html","2a308837705ef89cfc3851c4439e013d"],["/tags/xray/index.html","3a4295816e25b6f654f05a262d5da81a"],["/tags/yandex/index.html","20665a6a55bef723f34a4f192515ca03"],["/tags/下载/index.html","4cb5b7079b5a2a17f59282455ccb9c5a"],["/tags/不限速/index.html","906f22478e1c1712fc369ee9e3c4a105"],["/tags/个人网盘/index.html","ed8ebf9a195301e6bce290ab93f6d7d6"],["/tags/主题/index.html","12f01f56de3290922426da6bd5c5e650"],["/tags/二维码/index.html","87cddb8fad1a0ba16de422408fdcffde"],["/tags/云便签/index.html","9504e31a402cbb52fa4ec71816efd219"],["/tags/云盘/index.html","f1fcd5dc6780b59f562f005ebbd6d770"],["/tags/人人/index.html","6372d49b5676a3b7229b2781a43f9e35"],["/tags/代理/index.html","9e930f8444290206c9965a7649a8205d"],["/tags/代码/index.html","304f309281dda1802cd0ac9fb3dea92f"],["/tags/优选IP/index.html","60263092332cb74b53abe8907c9ab72c"],["/tags/便签/index.html","c437a420f9e37cb77322ed50a3699885"],["/tags/保号/index.html","101deda8c9f1ade43bff322eb5374936"],["/tags/免费/index.html","8c1e1f67b65fc23f91eb264ad5bb7741"],["/tags/免费节点/index.html","c8b0e5f6e0a4b32cad137ab3faf420a1"],["/tags/冷门节点/index.html","d880626c7313953cd80d6650eb7c8e83"],["/tags/删库塔/index.html","0d1486036f8ce64b96af4a15259a0679"],["/tags/加密/index.html","e1d1bee945e17a3cc3e1bace81e90cb5"],["/tags/动画/index.html","a9e6a431265452ed3528a6c0586cb864"],["/tags/博客/index.html","4df8ef3b72afa0c6095d30e7dd5cf06f"],["/tags/卸载/index.html","7dd3fdee0d462b6e424f62f9ec2ce748"],["/tags/历史记录/index.html","c1bf1d56e3788db695b73dbba3476291"],["/tags/压力/index.html","a7148e213ea46c22db551210a52def9a"],["/tags/压缩包/index.html","9c1e78da6a4eb11d045259ba321dc28a"],["/tags/反代/index.html","46b92c02bc2840d74ca42fc0cfce4201"],["/tags/可视化/index.html","b6d52a1e1389070f72a43460eaba69b8"],["/tags/命令/index.html","42c3ea9c4d87a0a36cb2b3a39b902e86"],["/tags/国家/index.html","b43a13d16602b964b3606e080dfd014b"],["/tags/图床/index.html","3be775cf362029dc24c1582042f5d8c0"],["/tags/图片/index.html","09cc2bd29ed23750032945cc897df0cb"],["/tags/域名/index.html","813dcf3fa7ef41c0aa45a0ffa9314452"],["/tags/壁纸/index.html","4c90ce6ee212552e091d3f15511660bb"],["/tags/多标签/index.html","634195d4a03943ea09c8780dca8769bd"],["/tags/奈飞/index.html","b923a7416710da8ce042100955d970af"],["/tags/存储/index.html","4d37ed49eda85c21941f43d27a63afb3"],["/tags/学习/index.html","9b9b42bc33e4cd548d42d860f904664c"],["/tags/安全/index.html","f029a3a6f766c4fc156bc1acd4dac5f7"],["/tags/安卓/index.html","be1f3720ab7ecc28842dc80f546864bf"],["/tags/宝塔/index.html","7c25c3f4d9b5d4a024d45d3d55702dc3"],["/tags/小游戏/index.html","6d047a20eb3b57f0bc2a298574e3d4e5"],["/tags/广告/index.html","b9550e2597108b4454248435418ac92d"],["/tags/建站/index.html","dd25a254a387e5e9037e5844f13e9a96"],["/tags/影视/index.html","27e91d5f1be3b1f720644157ddd33d2c"],["/tags/微信/index.html","551e58f3e51e147a0213c753b30ffd09"],["/tags/快速启动/index.html","d9a6994bd8c434ff1a17658e49be85da"],["/tags/手机/index.html","481ce46a5a10c3a41439a3ecdb027d4d"],["/tags/托管/index.html","b179140929d534ca64cdc5ef67ab2444"],["/tags/抓包/index.html","9cf162df03bbf0c06a56c201cbf574e6"],["/tags/抓取/index.html","e80bb8dd5534c97c566d2599d456737c"],["/tags/投屏/index.html","aa8399a6d4b9a4738ea7efd900253d4a"],["/tags/拓展功能/index.html","052b9653a4e0d5b637f4bc30ad22a880"],["/tags/挂载/index.html","363955e9af9e163e1252a043c1c3541c"],["/tags/指纹/index.html","dbda32216bb624d8d0e334538d8f6490"],["/tags/接口/index.html","d09403ba90bee75bba570ba8baae6329"],["/tags/提取图片/index.html","df99cd32be982c8dd1a21e6bca835102"],["/tags/插件/index.html","da46b2744fa127c246b03b7fe478b16a"],["/tags/搜图/index.html","4609999a869248d76ab06eded03ac978"],["/tags/搭建/index.html","8c87bd969418f40f6000bfeb5a3f58c3"],["/tags/撤回/index.html","af1d275e432fef6e91420b522151f2fe"],["/tags/播放器/index.html","83249256c6cb88b787ef5a154d58efd8"],["/tags/支付宝/index.html","31836400872c9f09f71f82575e4d65b6"],["/tags/政府网站/index.html","3df14797a2272b1032934b2d5b068d80"],["/tags/效率/index.html","2da140f5a637a89563669e41430511a8"],["/tags/日历/index.html","d29bdc761ae10463fe81a6cc4a2f3946"],["/tags/服务器/index.html","f1ecfc65d73a2aad76a6360d635f99a8"],["/tags/机场/index.html","6dfec48751d5b7900d0d69ade28296df"],["/tags/查重/index.html","92923a7d263b0fe3623d90de8c3a0745"],["/tags/桌面/index.html","fb8f4f14793bdb118ddedf158d8d1a14"],["/tags/梯子/index.html","426cd6eccff810f277f19061ffdea978"],["/tags/检测工具/index.html","2bcab795e8cf852698e5fce246a42def"],["/tags/汉化/index.html","9c8418c444e0d0df35c77bc2d6afdfe8"],["/tags/测压/index.html","b24a6690a143a131190dfa1b1a0e4467"],["/tags/测速/index.html","f12d90187734e3e6d922bb05a5e1633a"],["/tags/浏览器/index.html","f7ad980adec48bdc5a5b5e007a66eb87"],["/tags/清理/index.html","3319bc6f5ac5edbea2a2cf66b8b7bc12"],["/tags/滚动条/index.html","0b3539a288318e1eec7ed76caf392930"],["/tags/灰色歌曲/index.html","acf27d9249ea2a60d15552cda9b2767e"],["/tags/电影/index.html","60b1a45f198c2d9bea20bf9f48e9dade"],["/tags/电脑/index.html","01212effb0d505d78fa3d2a67f9966af"],["/tags/电视剧/index.html","052f7c2c7092e4821a6cfbd67e174f37"],["/tags/白嫖/index.html","ed591a624c75ab6252daa9ec346115e2"],["/tags/百度/index.html","d4e23c32523c4ef8c926447b95e2438f"],["/tags/百度云盘/index.html","1a97b4aa41dae7960ccaa8d78898ef81"],["/tags/百科/index.html","c7a67e108d88fcac7b8bb004890a3fa1"],["/tags/短信/index.html","2c3d062e23c1cdccab0987d04490f16d"],["/tags/硬件/index.html","3e1069a8a95e05eea4314b84df897420"],["/tags/科学上网/index.html","8f240aab83927cd61d591d17a461249b"],["/tags/空间/index.html","ad253a0d8f4458d06457a2dd056da4d1"],["/tags/笔记/index.html","fbe387643bf15ba7c32170086820e4c8"],["/tags/简洁/index.html","ac099cc4d643c52e246b2ad03110c349"],["/tags/简约/index.html","98b006e05d2688f7cdc5d5d342c9ad58"],["/tags/维基/index.html","96371f2a0efa2602e5be1c259dfbe9b0"],["/tags/网易云/index.html","efa7ce899e875dac492a86d7a9b36ba6"],["/tags/网盘/index.html","cbd89e4708ab1e22d93887b10d35ee81"],["/tags/网站/index.html","2fb37b079265068266fcceddee8f12b6"],["/tags/网络/index.html","846d098f4eb142c9fa5ed5453c66dc23"],["/tags/美化/index.html","3bc8f1ba64273d8581eae116344f9a64"],["/tags/翻墙/index.html","69c8705b8abee96be88d93071d11475a"],["/tags/翻译/index.html","e7d7dde1c469c38869dac97c832702e8"],["/tags/翻译器/index.html","188ebb0379b0e93d0797704cc87a8d3e"],["/tags/聊天/index.html","8c54efa46d68de171051ffceeaa5bcfd"],["/tags/聊天室/index.html","0eecc7fa036c7452060343a3de74ed02"],["/tags/联想/index.html","5ea4698aa2468820fb711197af1155d4"],["/tags/节点/index.html","2b25589464f9c5581bc8ebf98ef2681e"],["/tags/虚拟手机号/index.html","8ded62f035bc07b9cd6942061cba4909"],["/tags/补丁/index.html","0b33c54f942b0a87b113939898bcabc9"],["/tags/表情包/index.html","1fe0c5660624b3e54f40410893aed6d6"],["/tags/视频/index.html","13d5ff3c95e1056fe5b1e627c04fb716"],["/tags/解析/index.html","7da7d5e3dd4179323211e73154cb87f8"],["/tags/订阅链接/index.html","148f3de435b7c31201ca7710368dea01"],["/tags/记录/index.html","e3b98568b12b18469e0c01773b633419"],["/tags/识图/index.html","bbe54474a044209c95d36a17e80a304b"],["/tags/语言/index.html","700ca9cedb986921aab04285864a2d22"],["/tags/资源/index.html","5c1d10cb82de845e222432f40676d122"],["/tags/资源管理器/index.html","938ae34e95fc9e0dc1c22017cb8b062f"],["/tags/转移/index.html","6aec66493bc7c24d53d6825c01324e88"],["/tags/软件/index.html","9916ff162c097867d0c5c7cae13ca861"],["/tags/轰炸/index.html","64460af009d33ee7054b940eec5bef52"],["/tags/迁移/index.html","af53bef09e5cfbbc53bbdec35d5fd7c8"],["/tags/远程控制/index.html","a4e0db3be476c8515ec4ce550b9ddc7d"],["/tags/连接/index.html","1e230cffd3bf29f2ef3f060a763c5a07"],["/tags/追踪/index.html","6c6a6172a52db52bf1ffcb1f8a7ee184"],["/tags/速度/index.html","5d4aeedfed281b169254be58096f9ac0"],["/tags/邮箱/index.html","ea7178ea5d88afc0b5d7d63a9390eae6"],["/tags/酷炫/index.html","70a7fae8611b606099eb4d15428ce335"],["/tags/钓鱼/index.html","9981aed304312c03ef617de5a54900e9"],["/tags/镜像/index.html","1ffe6f1549baf8bdcb948fc8309a5ebc"],["/tags/随机/index.html","ae315b74f9ef2e223f4cd628e9417442"],["/tags/隐藏/index.html","3394e8e7ecedab67df540c36dab9c43c"],["/tags/面板/index.html","0f0ad4d16b3fbebe63b2dcecd9ce1a0d"],["/tags/音乐/index.html","1ed06530aa7e4ad15d4198678df92242"],["/tags/高颜值/index.html","a3042901a6c402b638ad4200a6e3dcd6"],["/tags/魔改/index.html","9d2601264459ddd532cc885ef7cd71b5"],["/tags/黑名单/index.html","6a017f3e4dd63f5125f55af7477690e7"],["/urls/index.html","7e304d9e1b8092a5bbe02c94b86da610"],["/vps/index.html","14a16c75faf654c4c983cb32cc7e3c30"],["/支持/index.html","9012c3daaf9f10fecf29248c9b04ef8e"]];
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
