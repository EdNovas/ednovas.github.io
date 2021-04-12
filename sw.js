/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","ca5727b0e52bdb5abf7231f164c72ce7"],["/2020/11/29/clash-windows/index.html","523eb92fb74e917916067a347c46297d"],["/2020/11/30/websites2/index.html","02d2d14f1a3225ace05da452e10cf268"],["/2020/12/04/iphone4s/index.html","dd6f46349efca5c56f716307f9ae9c7c"],["/2020/12/04/onenote/index.html","e012bb897974ccd4fd21829949fe1fce"],["/2020/12/04/wesites1/index.html","9a79cc48fe916fa9c2e4ec86819d3700"],["/2020/12/06/nokia808/index.html","e362120ee64455d5d1a93ffbfa66e09c"],["/2020/12/07/ipad1/index.html","9f108ccd09785ea1b6e48309cc7f0732"],["/2020/12/18/freesubscribes/index.html","cbc2548d57fdfb2d7d8a1aa788c19786"],["/2020/12/19/musics/index.html","2be8ee99f198537f716d74d8034cad03"],["/2020/12/19/shadowrocket/index.html","4eb6867baefd0064bb04f20269a28509"],["/2020/12/19/v2ray-windows/index.html","fbfa65bde5b11343a28d6c26887a0320"],["/2020/12/19/v2rayng/index.html","546efcba46dd165c2a041e2b90baf7e2"],["/2020/12/20/beoplay/index.html","696b5b233bab5c573e87b5fbe0898cfe"],["/2020/12/20/订阅链接转换/index.html","a52516687e1deb6ad3f6bb337b45452a"],["/2020/12/21/chrome浏览器下载提速/index.html","5c1fedef3578d135a89755da08c5d7ee"],["/2020/12/21/免费128线程并发下载xdown/index.html","fa6350cbae82133bd7cc6ff1eca5a232"],["/2020/12/21/免费32线程下载软件ndm/index.html","feb873d455910e9de505663449260d22"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e2f726d86cf6c5c2848ecc0b237f8f01"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","e465dd9f4d9d2286d418e5013401a5dc"],["/2020/12/21/广告怎么知道我在想什么/index.html","7712d6a10a88bc5de558f77c1b076258"],["/2020/12/21/无名·引子（小说试写）/index.html","16598a2b7bffdb0a5ea252375bf71524"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","b83955978336128af3ae69dc6f9f7c3c"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","3b231b1ffa38a7565266f177626ec020"],["/2020/12/21/高速轻量下载器aria2/index.html","611e66b48664379e90949f278d589c55"],["/2020/12/22/2020-cee-roo/index.html","529279ed30d7c694467b7fffce6c1406"],["/2020/12/22/firefox插件、github、steam富强/index.html","bb082269644e2073b83dd3b70964542e"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","278ecd6d2755717a0f54c686e3637f0b"],["/2020/12/26/python-day-1/index.html","e0e1c3900383fa479b2462e1e5469df7"],["/2020/12/26/python-day-2/index.html","25e9b9c539bc93e52e649150ba26ae7a"],["/2020/12/26/度盘不限速下载方式一赏/index.html","4834a9757978104f74363c5359b019ca"],["/2020/12/26/添加开机自启软件/index.html","f8e633c24ca72643d208fa4fbcd865ff"],["/2020/12/26/电脑端截图方式一赏/index.html","96124819336d8a6a48398f8303d42037"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","ba2be2fe475288691452b7969319d68e"],["/2020/12/27/最安全的浏览器tor/index.html","0075c672fc49c91846d7459e0f882280"],["/2020/12/27/网易云刷等级和听歌数量/index.html","f049feeb6b8193c0c21f6ac3f897f3b0"],["/2020/12/28/freenom申请免费域名/index.html","1c9c44218a350c16d9d4cb24fe005ca5"],["/2020/12/31/机场/index.html","e93e148fbe59226a132b39e61ab246e1"],["/2021/01/01/M1/index.html","c606cdc72bb0023008a7a4e77cd2229b"],["/2021/01/01/compress/index.html","c7df82f24bdfa97646e16c9553f1993c"],["/2021/01/01/infinityfree/index.html","d66852392025b9a35c89987ac3901f28"],["/2021/01/01/硬核翻墙/index.html","7387293499a94988349f057557bc2119"],["/2021/01/02/qq/index.html","ff42ef22ed050dc233306731c115325a"],["/2021/01/03/netch/index.html","67fa44f24abe34ce3f27f653eff5e40c"],["/2021/01/03/waifu2x/index.html","e5385615b43850e59bf296aa910b20a1"],["/2021/01/04/ads/index.html","66d234fa4e5d147d5f06c6089fcc759f"],["/2021/01/04/games/index.html","01fef8341f997fde3c2378645578611c"],["/2021/01/04/heroku/index.html","d0d14df378398ae64e693cb6d90fb032"],["/2021/01/06/movies/index.html","2790045e917be157a6ec5d0fccdcc979"],["/2021/01/07/google2020/index.html","a7b8c4ae15d49652e56867649352137f"],["/2021/01/07/lucky/index.html","7e7b0293fd8fcce8a9d955878a12fc73"],["/2021/01/07/spotify/index.html","70298177d4f69b479d42f7d684605d5d"],["/2021/01/07/thunder/index.html","14060d4bc7ddf5fd2fc7697199d21fd5"],["/2021/01/08/adguardhome/index.html","e5a39dad95369f230dcd02f655be6454"],["/2021/01/10/IBM/index.html","c21f64a8733faba43f9ab4348f776743"],["/2021/01/10/potplayer/index.html","cf867306266116690564478fec04c4cf"],["/2021/01/10/sakuraanime/index.html","d32869064cda1870166b5a18474e5091"],["/2021/01/10/美剧星球/index.html","54e83c5ed2db83781b2f9ef5679a2c44"],["/2021/01/12/telegraph/index.html","2474fa9b1d8f29fee41f50944d878324"],["/2021/01/14/comics/index.html","514fd9c88562c15f5bbdc0d91d1a8c78"],["/2021/01/14/ftp/index.html","d39ecdd921f4741011e22f8fd114d343"],["/2021/01/14/oraclecloud/index.html","97fb6663616a8c868d644f838c2a934f"],["/2021/01/14/porkbun/index.html","a5bc5927546cf010013b27f3d36f0ce7"],["/2021/01/14/powertoys/index.html","c592877901dfd8d2cc2e30c9b1d33692"],["/2021/01/14/taptap/index.html","d7ba346c6c63ec0c0eb92354f975882e"],["/2021/01/14/ubuntuvsftp/index.html","6ddc02b87c94d7260a5b72616652b9ad"],["/2021/01/14/小说/index.html","3189c2b283985ab446f2c565f094440e"],["/2021/01/15/freeproxies/index.html","8263303ce9e95c762e97e034a4bfeb58"],["/2021/01/15/incaseformat/index.html","2b53416fe69a2d30327ede84fadf1fa5"],["/2021/01/16/euserv/index.html","2bd9ea4659d1bfbe288cd6a2136bac3a"],["/2021/01/16/winxray/index.html","82fdabfff8c09e60f0198b019a4eabe9"],["/2021/01/18/qqreadhistory/index.html","1171979e2b61e7ba316f2b801d25729d"],["/2021/01/18/qqrevoke/index.html","2a72f87f64ff8cc6ff497faf1366f8a1"],["/2021/01/19/freevpn/index.html","1f97ed44c112816c21498a1e8a25681f"],["/2021/01/20/browsertrack/index.html","5ec04bddbd4f3bb7f98294df620e73ef"],["/2021/01/20/v2ui/index.html","f43803a7c26cf0b44070e708b88348e5"],["/2021/01/21/failedtoconnect/index.html","bbc4481bc9c8c3ef1a7959d52895fa45"],["/2021/01/21/gitcalendar/index.html","d1b7122e10fc4ae7b6c8281903d9f17e"],["/2021/01/21/markdownformat/index.html","b37e3fc43061680fd3d922800b0f7fe7"],["/2021/01/21/markdowntable/index.html","81a663eb89cf583d114c6b22d6d3df45"],["/2021/01/21/vercel/index.html","3fc5440e6cafd7c1c9e137c6823196ed"],["/2021/01/22/hardware/index.html","16561156b4dbdd76d463ff961f0e6114"],["/2021/01/22/muviz/index.html","2951c8bf0be24b67479d64abf99bf041"],["/2021/01/22/randomapi/index.html","aac174b0a855827ac9935431b4ea0335"],["/2021/01/22/searchimages/index.html","735ff0e651ab2ecba4c72c655af71e91"],["/2021/01/23/RX文件管理器/index.html","85b44ff4d97053746a4972fb8bddb2f0"],["/2021/01/23/chromeflag/index.html","f504a510a4b89900ddbfad92d7444eb9"],["/2021/01/23/qttabbar/index.html","219f1f1297f61e5942df4a6cbca6abcd"],["/2021/01/24/githubspeedup/index.html","1f7c02bc5c65e27cc4e88e261e1bdee2"],["/2021/01/24/jsdelivr/index.html","2011ee4eb24f27a515986569b442f939"],["/2021/01/25/note/index.html","659794cc89abe03bdbe347b2db6e4a50"],["/2021/01/25/soul/index.html","e2078fe3ec6127f8f2e03b15f9bb3a7d"],["/2021/01/26/herokuxray/index.html","c86392cd423c7e789e8e19f43c755b05"],["/2021/01/27/proxypool/index.html","5c4ba159741148d63d588b1d405750bc"],["/2021/01/27/tracker/index.html","9cef7618bcff9da0c0613179bfb71615"],["/2021/01/30/pandownphp/index.html","9e85e16eb191a2677889e4f890d9bcdd"],["/2021/01/31/newgroup/index.html","22fd67bd416629060395d8a68f9d3ded"],["/2021/02/01/clashlanguage/index.html","9afb75676320472142b405b577479924"],["/2021/02/01/encrypt/index.html","9e20526c01e831984fe9f2c60d9c9a4f"],["/2021/02/01/footermotion/index.html","55dd601136b8b65a36d9122bc0a733ad"],["/2021/02/01/gitter/index.html","8aca548f01659fdd339d8c278b325bc2"],["/2021/02/01/pixivtop50/index.html","1741e105dfeda5081510fe940123b0a2"],["/2021/02/01/scrollbar/index.html","d724c80f474874c3fbebbd2803d01797"],["/2021/02/02/clover/index.html","298522f1ba611bfeee03cea9bfda9072"],["/2021/02/02/maya/index.html","92b713f1a6411a05572b184acf6133cc"],["/2021/02/02/speedcontroller/index.html","37d141572c77230da482bdd8a546c159"],["/2021/02/02/yesmusicplayer/index.html","0e2f2bbda9fd88e0628ffdf178732f29"],["/2021/02/03/lenovoonelite/index.html","f20da77b01a20a8dd87ade35f694514c"],["/2021/02/03/skipads/index.html","0a429a2a010c1ae70b745a9546d5a76c"],["/2021/02/04/picseed/index.html","20b570eddb6d85b95af79ac62f5ba7f0"],["/2021/02/04/renren/index.html","5e143291805719be340dc05c592a01a6"],["/2021/02/04/serverstress/index.html","fc022639ce8d8d853209ee04cc465656"],["/2021/02/04/wikipediazh/index.html","74f2396871532a1fee3516beaaa074e0"],["/2021/02/05/googlevoice/index.html","76ba430a70e7fb70cfcda2e03c69e271"],["/2021/02/06/clashconnection/index.html","00152bfc79810bb2df68d8d9033e62ff"],["/2021/02/06/gvtransfer/index.html","8b456b97ea090345ed2eae0ef0406591"],["/2021/02/06/todesk/index.html","a68d4e95f7fd2e49d69af07ed46aae00"],["/2021/02/06/vpnblacklist/index.html","82ff2b054f4621965641bee03123b549"],["/2021/02/07/mklink/index.html","267040899c2c431c35cf1b722d8d4d5b"],["/2021/02/07/speedtest/index.html","efc6337418faeaf1792ed317076ba941"],["/2021/02/07/translate/index.html","ccad57c6c907b23a20a337667f9122d7"],["/2021/02/08/ewomail/index.html","bac49c3cf11254a92251a6d25e4f7d26"],["/2021/02/10/officee5/index.html","16d47a824faf3dad1800606a96614d17"],["/2021/02/10/raidrive/index.html","a925d82c6b4bad04cd602c55d9470a0d"],["/2021/02/13/e5sub/index.html","bc5fbbb1e00db6e79a2ade4e012e529b"],["/2021/02/14/screen/index.html","0173231f0a6e2ff3ada9e096b5a9f515"],["/2021/02/15/clashtun/index.html","4983964e658a96d5c80f40b01824cdff"],["/2021/02/15/messageboom/index.html","0aed554540a92a124aea680948116bcb"],["/2021/02/15/oneindex/index.html","c124fd47c96916909fc766555b7bbeb1"],["/2021/02/16/govsites/index.html","0e8a50c629d77cfc6e02b97cd3024118"],["/2021/02/17/hexototypecho/index.html","54c455dec19462a515fb8dbeb7ec7819"],["/2021/02/19/fiddler/index.html","dbfb87f0a4365456832dfb820e0d25b0"],["/2021/02/22/potplayerset/index.html","5c3db6f90dec208f81408377b3fcd1ad"],["/2021/02/22/studyresource/index.html","3185c19f393073f180ecd1ea64321bce"],["/2021/02/22/telegram/index.html","887a0c7f03bfb63990b6488c946db9a3"],["/2021/02/22/videos/index.html","58db920239fa48e2dbc6f4239624d6ad"],["/2021/02/24/mtproxy/index.html","5653cec6bb6a26bf3642274bb9fa7fc8"],["/2021/03/10/catchcat/index.html","9a33d6ebd2fbff1dd75b819f9f7e555b"],["/2021/03/10/neteasemusic/index.html","e85c77647b062bf30eb7c337ab5407d6"],["/2021/03/10/surfboard/index.html","848e323d49db887741612132c4225630"],["/2021/03/11/vpnandjc/index.html","b6a91e149fd5ecbf474b3d5d437fe38f"],["/2021/03/12/qrcodes/index.html","9f50804f667ec2ac5a709f19e2361b7e"],["/2021/03/20/qv2ray/index.html","d939d95d9223312f6865e096089c01dd"],["/2021/03/22/freevps/index.html","7da82f9bb98c8ba182cd1791f447ae61"],["/2021/03/24/tgstickers/index.html","1daacee7510b036a5ec5f0ed8b730b9e"],["/2021/03/25/clashx/index.html","193562f7dbc06598021b6e890a904efd"],["/2021/03/26/bingwallpaper/index.html","514d4ad8a28ff3073c0886b5d2e435d5"],["/2021/04/03/soutu/index.html","cc3db27e4d263bd6a7099614fe2fb111"],["/2021/04/03/tiyunti/index.html","4ece1a589bdc3beb00a9a42a6d0c564d"],["/2021/04/04/btpanel/index.html","ad354c21c282313c01ef467304fb1504"],["/2021/04/06/atlasos/index.html","43396e102653e9d8485765dd157583bc"],["/2021/04/06/cleaner/index.html","c88522926aa1227ff97264cd0dd1655b"],["/404.html","a5eaba75a6840c04bc6e643922ec3ad5"],["/archives/2020/11/index.html","7d0328c6914d22ba1081382a73ededbe"],["/archives/2020/12/index.html","d43b3476e130659ec08208d9a0e6d6e2"],["/archives/2020/12/page/2/index.html","29650b144818dd06cadf5423219e98ef"],["/archives/2020/12/page/3/index.html","4995f0d07a49420b8a059a4c839782c1"],["/archives/2020/index.html","88280456ac2c624fddd8a1256cbd3d3f"],["/archives/2020/page/2/index.html","519fc8c47e03cff5c8937fab27791480"],["/archives/2020/page/3/index.html","117581394876d9f397ed718d884e5204"],["/archives/2021/01/index.html","05ff168847f0de408ac8e3ce40532ccc"],["/archives/2021/01/page/2/index.html","c491af1111298571e1d093f7f2163d9b"],["/archives/2021/01/page/3/index.html","1be1255d9cc4e509375a364a07b8c96e"],["/archives/2021/01/page/4/index.html","4936f7abc8474326fefcc4936310fd3f"],["/archives/2021/02/index.html","40a3e203d73f8c2b92455e815c767561"],["/archives/2021/02/page/2/index.html","937d522fec93fdfbc9170eeb0ff57730"],["/archives/2021/02/page/3/index.html","6c4f00aae4683c945b40bf5cfd1b85e3"],["/archives/2021/03/index.html","815314b435e20748635ced4bc2ceead2"],["/archives/2021/04/index.html","220830a014d5d5672cef55fe24a382b6"],["/archives/2021/index.html","68b573442c162f262e970d54e91025d2"],["/archives/2021/page/2/index.html","88b001beaf8474ec844fbb4f075dd51c"],["/archives/2021/page/3/index.html","67aec37732822d0f852989764399d781"],["/archives/2021/page/4/index.html","7a333cffc157c2281d1460a47e6ca6af"],["/archives/2021/page/5/index.html","cba7386334a88f440effded092cfac84"],["/archives/2021/page/6/index.html","da32c967ccb6bf44dd02676ee8995851"],["/archives/2021/page/7/index.html","e592d4e0751209f47a541ebffe3545bb"],["/archives/2021/page/8/index.html","3d74fbeb0a26453cf6dba0f694de5dc5"],["/archives/index.html","d29e5a95abe5f59289444b50f4dea492"],["/archives/page/10/index.html","e6983a2c7c0c2ea742a38fb74eb1b2c3"],["/archives/page/11/index.html","e49ad435758bd7a7e74302224c60f0fe"],["/archives/page/2/index.html","48fc9afd9f3fd5f4914368d37136191c"],["/archives/page/3/index.html","ffb77582de370c92d426fa175ba83217"],["/archives/page/4/index.html","b52a7b1c2d276ea9ec4f8f1938aee5c8"],["/archives/page/5/index.html","efc90eb76d6ea3ca393714eec73debcf"],["/archives/page/6/index.html","77f2e62f3f55b9573ed5c9116f3bf893"],["/archives/page/7/index.html","449e228b2658e2e6094dfe1ee7ba03d7"],["/archives/page/8/index.html","e5d6a60008c4a21d6c3baad15cc35969"],["/archives/page/9/index.html","8822f97769db0534880169788fbfceb0"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","96683c35243d364e6bfdd6417d882beb"],["/categories/index.html","7f998b67644b28c99332105d89195aed"],["/categories/下载/index.html","3823880a23a2c133a2393c53c05f05f3"],["/categories/安全/index.html","a227d12a924f6bde5bb0d10d05a211e3"],["/categories/建站/index.html","b3162ec5dd301096edcecac18ba5dcef"],["/categories/机场测评/index.html","d5637ba17bec109c1452097b0f6f86e0"],["/categories/杂/index.html","f50e9f324bb3a02a650ba8a0e632ee58"],["/categories/杂/page/2/index.html","939b2c957b0021b101219437a8633d6d"],["/categories/测评/index.html","7bbdf5724b06d96fb58ee747f0941334"],["/categories/科学上网/index.html","0d820b7f3a1019f708b112fdfbb340ed"],["/categories/科学上网/page/2/index.html","f4d7efd85aaaf6bbf4bef4a9d6ee8270"],["/categories/编程/index.html","01ee953a4c274a709b59f4fe14382330"],["/categories/网站/index.html","62cbfbaae912b9bca2a71731d4e8e6d1"],["/categories/网站/page/2/index.html","fbf741373808f9ebdde0354db8024efa"],["/categories/软件/index.html","bbdd633bd9b1e8396bead717a9687ed9"],["/categories/软件/page/2/index.html","813ecd0da88508a7effe15e59fa7d8ee"],["/categories/软件/page/3/index.html","ba2d499e558cbef1fcf1d7f0c6b7d463"],["/categories/软件/page/4/index.html","ea9657ba62aafeaef045484ad24e2e32"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","3ba7ff188e1b7bbd497c10332c40b3c6"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","d05faca3a53ea2a377c03905e5a8abeb"],["/ios/index.html","2d999b852dfe5d7e6f1eec87c9430eda"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","edddcee146c083fd354caff2b1ece89a"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","d7e23dbb2fa6d01d19f6140aa98bedff"],["/page/11/index.html","8f048746e6bd0e76bbc5987c932f71e1"],["/page/2/index.html","3e46aca7a206831f1dd8fc97d548fc6e"],["/page/3/index.html","20bfadf3a66f3249a3ef0a0df131ed23"],["/page/4/index.html","5ec56be6bf9e167989a426f423abf43d"],["/page/5/index.html","db99c368c4541dd46e6a7562adecdf7b"],["/page/6/index.html","713a4afcf797d985329d45483b863383"],["/page/7/index.html","4e4ea43cf45b807c74b698478706866c"],["/page/8/index.html","838b9b09980dec27bb783d76ea2c9e97"],["/page/9/index.html","dc2ef51d325aa440e9d5a6479f007631"],["/payment/index.html","4286be77479359bda830b493c8398dee"],["/privacy-policy/index.html","82f752e01d4611b9946ec622fd08580e"],["/rss2.xml","9355d48b427cb078dc3d9eec890d24e9"],["/search.xml","220a3eb3fb25c168ed3248f2b131c308"],["/sitemap.xml","cbd2b2ef70921814725cddeee8b497ba"],["/sw-register.js","2dacbbbc8034f9782d8e1a22cf2f443d"],["/tags/5t/index.html","d56f3deec94d70664407a4b214ce7d0a"],["/tags/Bing/index.html","00e2b55ed9fae487846a3f51539278af"],["/tags/Clash/index.html","4c7b421f5455ad128ce5b5e02ff3a9e4"],["/tags/Clover/index.html","de24a5501926d4f3f878a344d6c8bb08"],["/tags/E5/index.html","3fae04a52d0fcc404e3d6ecabab27152"],["/tags/FTP/index.html","d285856ce6d0ae61cce8b90b38433fab"],["/tags/GitHub/index.html","8617562c463e4fd96fab2daad4e672c9"],["/tags/Heroku/index.html","f4da3a346294adc1b4cb7636e429d4b5"],["/tags/Hexo/index.html","d4baab62fb9291ab95675ac83ee9703a"],["/tags/Lenovo/index.html","d6427407363f939733c59367fce4cc52"],["/tags/Oneindex/index.html","cba7e2ce63bd8a15f6da4f43c0f8642a"],["/tags/QQ/index.html","d3856957a79ff0602bcc271fe502341b"],["/tags/QTTabbar/index.html","fe2897f1ac215442dac159448752b656"],["/tags/RX文件管理器/index.html","f527c2c86598fae938471e2004ae38ff"],["/tags/Todesk/index.html","47304a3c308aaee1f0031d75bc94524b"],["/tags/Vercel/index.html","531d09ffcad2c1d6cd5445dea91c8309"],["/tags/ads/index.html","fc3e79bbf270d664de7400a782c5eaa5"],["/tags/api/index.html","55562d57c2f9b1216b6a3355645085a6"],["/tags/app/index.html","68954c9b1e6fa7e8c1c6bfa7ceb2569b"],["/tags/atlas-os/index.html","bf71050ce4c6658ad05c8cdd37c8dc50"],["/tags/blacklist/index.html","20731079c00fad80a76e8d887745c1d3"],["/tags/butterfly/index.html","b8c4fa3018220d22e0ea2e5b46325620"],["/tags/chrome/index.html","bf884c6125d434606463506911432c5b"],["/tags/clashx/index.html","0b3548d0d6db99fa2d960b34150a6e12"],["/tags/cloudflare/index.html","18b83e55b393a83318c7744e007a2c3a"],["/tags/cmd/index.html","6b9bc11ad148d926a7d2475ba87af3f9"],["/tags/c盘/index.html","a61ea6701345ad68f0ea35ad11788c9e"],["/tags/email/index.html","2f0f4d34247a01ad5b81e1931503ca9a"],["/tags/ewomail/index.html","f89c1b90c74e4fedbb9998e2faa97b2a"],["/tags/fiddler/index.html","971e7434e87d6301f8ced5588ddab9ad"],["/tags/flags/index.html","2a64a280717be1403acec07fdbbc336c"],["/tags/footer，页脚/index.html","d1e5066686e902464dd6b0dbf7c9a2e3"],["/tags/galgame/index.html","f246f4f0f23922f9e1ae2fb2f55f27e3"],["/tags/git/index.html","f02893ceb02804552c2b5214aa132be8"],["/tags/gitcalendar/index.html","80132f03338f82c8ba584bfaf3a0b80c"],["/tags/google-voice/index.html","635a16f54a70425c0df62422ce0e8046"],["/tags/gv/index.html","ac201af8fccbe3583d93f08b0390c4e4"],["/tags/html/index.html","60006e83eefe9291359ff72249240a71"],["/tags/index-1.html","43b2561fb0c2ba1f36cc8a30af187de2"],["/tags/index.html","973ad909d76fe01bf1f48af18a2d1e71"],["/tags/js/index.html","d334b299fef46888a96b1e4e50935401"],["/tags/jsdelivr/index.html","618f385d057ef5fa00d727e64524872c"],["/tags/linux/index.html","4848d1a15275314cfa9e0104d4ab46f2"],["/tags/macos/index.html","fa7ea05511a533d0cf5e9f1250bf7eaa"],["/tags/madVR/index.html","b22526d140920de21497281e1d2cd133"],["/tags/markdown/index.html","7e316edb257157d509d021c305ad06e2"],["/tags/maya/index.html","2fb1e3ce6490d7f71eefd030061f7ff9"],["/tags/mklink/index.html","6f379bf1c454c79b44db0903805a630b"],["/tags/office-e5/index.html","ecd199e2a34ffa7eb96e4bb90d64d2ca"],["/tags/onedrive/index.html","e14432e3848a7461ae30bbb663b17c55"],["/tags/picGO/index.html","0226af403722939346c83c19ab201dc1"],["/tags/pixiv/index.html","9f1a4d52b87d7f27046ec05a1481e652"],["/tags/potplayer/index.html","f5621a0a5542503a74d925abf7b7dea7"],["/tags/proxypool/index.html","272c359a64407153cd2db6956eb5d1c5"],["/tags/qbitorrent/index.html","a0b513eeebb123d005324a8a1df7af9e"],["/tags/raidrive/index.html","929a7b6668f08e13327adcd2ec6fdac1"],["/tags/screen/index.html","779703a083ca471f7a2adff61cc2e884"],["/tags/speedtest/index.html","458e4fee6e3e8be19300baa157e60cb4"],["/tags/ss/index.html","c360eefc610f8cad271ca8e1d6dba15f"],["/tags/ssr/index.html","441e9300f45eadedd5e65006b000e68c"],["/tags/stickers/index.html","dbdfc70ade111f4ff7d7cdb8a8c82d29"],["/tags/surfboard/index.html","f3becd36f10c7f57e56686b283c6f2d6"],["/tags/tap/index.html","7ca013291afcc710c7d4098ec6f0df04"],["/tags/telegram/index.html","42ec55d2303d77ce38664327ec093a4a"],["/tags/telegram代理/index.html","9fabbf3b7c7d753ff0aa407f0011005e"],["/tags/tg/index.html","0e15303f0b3d1450f399dcda5115560f"],["/tags/tg代理/index.html","15a2230c0c3eeb9d56cc6efe68145046"],["/tags/top50/index.html","38480e11f6bdb8885de13ab9bd1fe3c8"],["/tags/tracker/index.html","7f13c24325eba5ee7301f568ff89e2db"],["/tags/translate/index.html","11854df0437ef27c16d72f7c12023796"],["/tags/translater/index.html","d0bec2be26ab4d81515ecc0088e48d20"],["/tags/tun/index.html","00bd779b4ad0b1870bb1507ddf00d3ee"],["/tags/typecho/index.html","5ab89f8e9c7cadab3370a939cfc1a2d7"],["/tags/v2ray/index.html","1e77ee51cc52499b25e98e66316f118f"],["/tags/vpn/index.html","4e2ed036736283081790ffc1c2328852"],["/tags/vps/index.html","eac1dad7564ad807b9820d5a040d2810"],["/tags/wallpaper/index.html","150ec1b19bdf9ba4231ee584b74bf3b0"],["/tags/windows/index.html","3dc8cea986d7678e4a3910ff662e3740"],["/tags/windows端/index.html","8c85f39c1bb456fab0777c433c98b56b"],["/tags/xray/index.html","b8e13b5c640df4e405f3372c4e1c67f0"],["/tags/yandex/index.html","309149c19901b03a3cf5d8cefbc6d59f"],["/tags/下载/index.html","e2fd5f205a4316d3f560c9ee8bf77724"],["/tags/不限速/index.html","e9bafac42ddcd01b590098e61b1e2194"],["/tags/个人网盘/index.html","796ee7208be8e9ddd2c64a5637daf48b"],["/tags/主题/index.html","3daab804e27e602c25b9f96f8588235a"],["/tags/二维码/index.html","fe2d8424c47df66bc30822621658b81a"],["/tags/云便签/index.html","1a687150f4336f4be5800b9aff0a3865"],["/tags/云盘/index.html","178777b2cd76f32e6b80e93e45b633cd"],["/tags/人人/index.html","d6f28417cdfde9100f9c66027908f51d"],["/tags/代理/index.html","3fa731fc209590e33f95b7ee2ce71534"],["/tags/代码/index.html","19ee247c26515346f9678024db40a270"],["/tags/优选IP/index.html","1feb6e4c27d51e07af95bf01d8a04a61"],["/tags/便签/index.html","a5d4b5e033cfc0707da13f4ad345e8d0"],["/tags/保号/index.html","4eba8db922e997d278a34bb3768f9dfa"],["/tags/免费/index.html","70097872902e4d1f55ece6f8c39c1ff9"],["/tags/免费节点/index.html","b0d8d86cc642beab74cef97b74b0dd1e"],["/tags/冷门节点/index.html","1ec949bc61d3e676584db5de3db5b00e"],["/tags/删库塔/index.html","1c5eba61160c5e9ca53eafb8e6cbc6c9"],["/tags/加密/index.html","1c3dace313f7d807ad9c163504f24a6d"],["/tags/动画/index.html","d6765816f5fa57269016290ae7c001fa"],["/tags/博客/index.html","0462d73ea2fca74d34fece4838b75e7f"],["/tags/卸载/index.html","9419dfd3e9f17d4b43f64a9704e1b13f"],["/tags/历史记录/index.html","1cf5c151992e2cc17b0f303a78779191"],["/tags/压力/index.html","9f22654386e1ebef2d1b19d7b147408f"],["/tags/压缩包/index.html","7e7b40b6d22e7b4b32b19963c8108899"],["/tags/反代/index.html","f404e995d4a6653b917308bb770e152c"],["/tags/可视化/index.html","6b6eaf2957c2fe4c910c0dcd1975a9fd"],["/tags/命令/index.html","34bca1c79ce4fbef6b36064f20dedb9e"],["/tags/国家/index.html","9985d8b206bfe49ce85882295278b55e"],["/tags/图床/index.html","2de97a802b2c4e9460c1896a091850a4"],["/tags/图片/index.html","bf607d994f5f8bc1ffb550a829b262ec"],["/tags/域名/index.html","051ac3f7d978ff0e23f374dd688ceedc"],["/tags/壁纸/index.html","585360d5bc2625ec67a6bbbffe66481f"],["/tags/多标签/index.html","dbf186e70bdb15e347e183ec810c126e"],["/tags/奈飞/index.html","e3c0ab6084d7192c162870c4c57c2dda"],["/tags/存储/index.html","632f68bc0de73eaca5758380c4bbe22d"],["/tags/学习/index.html","5a765c007bb4445e4ccb6569c7dbb725"],["/tags/安全/index.html","8b6c700bb0a7c70dbd3fd53f0a7ef4b8"],["/tags/安卓/index.html","27eab53c70b6b846086036dbd21fe58f"],["/tags/宝塔/index.html","15741e639b723f57f9e671b30ce9bdb3"],["/tags/小游戏/index.html","f07080ced7ca343502aa86cbb4537a73"],["/tags/广告/index.html","e8906f57e4e939a9762d6af2e2e21b4e"],["/tags/建站/index.html","a423f53ad944130596d5e10cf9f690f1"],["/tags/影视/index.html","a9fa2138732066e734b3464dc628d2bb"],["/tags/微信/index.html","faccfb8a375b4cd4c4b1e9167f467f9b"],["/tags/快速启动/index.html","6a9373aa07d7633bb8676ef60aabfa01"],["/tags/手机/index.html","3acbe44a079885a76c5f29858c07082a"],["/tags/托管/index.html","7c6fa1924e832172567b57b32d10beb4"],["/tags/抓包/index.html","fd0c6ddabf9e12ea4ef5e30ac3e0ad33"],["/tags/抓取/index.html","3e066013adaf5d10ed666cbc8241549f"],["/tags/投屏/index.html","c1686b3b79dbff8ecfeeab66965a5a6e"],["/tags/拓展功能/index.html","50f25b0fdbc34adf6e1bca13b1c04dbc"],["/tags/挂载/index.html","631585927c735a26647aa07f30b0cfa5"],["/tags/指纹/index.html","f977aab838b7b3a707d9f749a87a0463"],["/tags/接口/index.html","21fa0fa2912d34d12d2de21eb3ae5dcd"],["/tags/提取图片/index.html","8a055cadd1d98834514e91205de0e45e"],["/tags/插件/index.html","3e207987aca9d2210ad020d9bfa5d559"],["/tags/搜图/index.html","8690e7c3a05f521b5cc5229e23e090e8"],["/tags/搭建/index.html","5f19e57277c45507a11fa7ff8df15bc7"],["/tags/撤回/index.html","0b6189ea36c1de3cb8b73b5227acf0a2"],["/tags/播放器/index.html","a93ff85f1f6e28f9dcd3ec8c4234bf8a"],["/tags/支付宝/index.html","16ee6ecefe20b6cb6825a5baa0d410f0"],["/tags/政府网站/index.html","9c9eb6b1076d63f44414c2cd2f04c858"],["/tags/效率/index.html","9661b305419187e95fb0ee3ed0323c76"],["/tags/日历/index.html","8192ce3734cf4018fc60cd0321602453"],["/tags/服务器/index.html","9dbbed9b84bed921ffde009fc19e5b37"],["/tags/机场/index.html","9c480fefa93c473754bbcdce3da496d1"],["/tags/查重/index.html","d31b64e3e093378dca9b15bf4769247d"],["/tags/桌面/index.html","ce8e72135a940400e93f9359f354dca2"],["/tags/梯子/index.html","de7c9ae7203504e62b132875c942f6db"],["/tags/检测工具/index.html","d33eae40d0b064a214847ebd9d8ee39d"],["/tags/汉化/index.html","01a00409d15fe3111cfb80bf55126eb7"],["/tags/测压/index.html","d61e6812af5bad977847cb2bec78b2ed"],["/tags/测速/index.html","0e7438ba2bf5947a4396c84b2dfa4b15"],["/tags/浏览器/index.html","1f3c0e99802f011eb70a4f53d637763f"],["/tags/清理/index.html","2602d27bfc36feaa0e7161a80a1f5764"],["/tags/滚动条/index.html","852a21211a96e805720d0f98996ed94c"],["/tags/灰色歌曲/index.html","ad38ad64d3830453538b99a1542d62e4"],["/tags/电影/index.html","6b5c2853953da6c3b973132be58a200f"],["/tags/电脑/index.html","dd8bf786cc6f74478bb446d43d6f5eb8"],["/tags/电视剧/index.html","1556ed57394a918051b47da085e85ab3"],["/tags/白嫖/index.html","033902535ad1996523cdd4acbcb65072"],["/tags/百度/index.html","cadf058f53f2569991d5382e4df08941"],["/tags/百度云盘/index.html","f9a9839eecc98aa7d341017cab82ff93"],["/tags/百科/index.html","15e5511557ccf80e23d0803dc7bd3499"],["/tags/短信/index.html","71b0d26fb4a580e67d268b8ebfec1b02"],["/tags/硬件/index.html","6331e44cb9329ea5ff9b749908f47e56"],["/tags/科学上网/index.html","efd19a9aef818ebf086732e6ef4b1e20"],["/tags/空间/index.html","203555af0622a41de531b4d50d7483ca"],["/tags/笔记/index.html","13369d6e1ee02e6039dc76232b1ffd08"],["/tags/简洁/index.html","5809b4888da77a6726e5ee40a2223b8c"],["/tags/简约/index.html","89554bc8b1ae53c2fcdbc49319dee8fb"],["/tags/维基/index.html","4d786c2e7a36c7e65ccecbc5392febb0"],["/tags/网易云/index.html","20c7517c851ff5ab9cdca7f5b66ff6e5"],["/tags/网盘/index.html","141bcdcc1059502d4254cc6d16fe7c9a"],["/tags/网站/index.html","cef07b6143ec542ff8563d46ed69f721"],["/tags/网络/index.html","0697e4d4928afcce374d7f5adcfb790b"],["/tags/美化/index.html","e6bac2411b404a1c9ac89b87aba34e18"],["/tags/翻墙/index.html","eaa79be636eed8e61b7cac43a4c3893a"],["/tags/翻译/index.html","a7a13cf6e45f151f521adca2c4226b4c"],["/tags/翻译器/index.html","2dd0adb4870c729ff7149df0b8b275be"],["/tags/聊天/index.html","6c8a1b778b98e65d1945f9a7ad8bbdf7"],["/tags/聊天室/index.html","3f9941d5acc03933025171038c2c436f"],["/tags/联想/index.html","6ca9cbe731d05443891063c80c555a4e"],["/tags/节点/index.html","b365c0eea6730b9925f09bb5366baa00"],["/tags/虚拟手机号/index.html","412b73815901b3fc082ab9e1f92f49c6"],["/tags/补丁/index.html","79974e0207bf467fa85e2f9bb2a114b2"],["/tags/表情包/index.html","8a3c7b6173356c7a443641bc1f77244f"],["/tags/视频/index.html","ae621ee1027087168d06f0b7fe973840"],["/tags/解析/index.html","87b3b2d1a798be1aec4ed3df18e88c77"],["/tags/订阅链接/index.html","1f91053ce33590b0ee0d05c00f92dbbb"],["/tags/记录/index.html","795dda8c78b7335e1c72442bd60edf73"],["/tags/识图/index.html","2d1793098b77b13f890b1741a2f5a9ec"],["/tags/语言/index.html","da42d1bf4331c084fb799d4e67e98799"],["/tags/资源/index.html","6af5ce25f469ab9a94faeb64952c771d"],["/tags/资源管理器/index.html","aab4de56e677e10383700fcea2edab07"],["/tags/转移/index.html","6f16802f63a44582e828a16f299656f5"],["/tags/软件/index.html","053647ea603369700baed305a7939e6f"],["/tags/轰炸/index.html","48279deec93a96aba7b502cf94447782"],["/tags/迁移/index.html","16f133a1b20c105f3815b23c992e421c"],["/tags/远程控制/index.html","a7a4d2a908b84137bcc2ccf682c8f5f7"],["/tags/连接/index.html","3383b3613cf9e27a6d7a7a7dbfc8080a"],["/tags/追踪/index.html","657242b2873d31ee06fae42dedcfe004"],["/tags/速度/index.html","838787312eb827f275135a2b0fa9b24e"],["/tags/邮箱/index.html","9073aa9fc5bb5421db81248685302d7b"],["/tags/酷炫/index.html","f206affe552ccdb62fc0c8fe63fb75e9"],["/tags/钓鱼/index.html","4f9d21657e6524899125eb7ac1fdfb7d"],["/tags/镜像/index.html","78317987d45508096f571985112ab51e"],["/tags/随机/index.html","b1f7e2f606f7e62c1a77b7485f993747"],["/tags/隐藏/index.html","f396e159971f1ac3da5d7487e5544d18"],["/tags/面板/index.html","48e18a855922b3befb96c37cc6b810c4"],["/tags/音乐/index.html","639801391df686b519074078a8111372"],["/tags/高颜值/index.html","4b75af82e5ebd9d6e1ce9bc4597541ee"],["/tags/魔改/index.html","22f56de5bd8b0c106f1350a1ff012094"],["/tags/黑名单/index.html","572795e53df58030a8fcc332762b8c0f"],["/urls/index.html","db46ed2af82bd5651bfee5c3604acead"],["/vps/index.html","5d015cc0e36b5b9a74a3f8c407689b9b"],["/支持/index.html","749abfba6f81b7dcfbe73365dc64b11e"]];
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
