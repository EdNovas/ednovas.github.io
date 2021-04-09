/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","ca5727b0e52bdb5abf7231f164c72ce7"],["/2020/11/29/clash-windows/index.html","523eb92fb74e917916067a347c46297d"],["/2020/11/30/websites2/index.html","02d2d14f1a3225ace05da452e10cf268"],["/2020/12/04/iphone4s/index.html","dd6f46349efca5c56f716307f9ae9c7c"],["/2020/12/04/onenote/index.html","e012bb897974ccd4fd21829949fe1fce"],["/2020/12/04/wesites1/index.html","9a79cc48fe916fa9c2e4ec86819d3700"],["/2020/12/06/nokia808/index.html","e362120ee64455d5d1a93ffbfa66e09c"],["/2020/12/07/ipad1/index.html","9f108ccd09785ea1b6e48309cc7f0732"],["/2020/12/18/freesubscribes/index.html","88641d8a0b3613ba88714d3541f07b12"],["/2020/12/19/musics/index.html","2be8ee99f198537f716d74d8034cad03"],["/2020/12/19/shadowrocket/index.html","64cfff5c8e82753559a1db01bf8a3918"],["/2020/12/19/v2ray-windows/index.html","b72abc3a05ad8222fa61b57c11a9a279"],["/2020/12/19/v2rayng/index.html","546efcba46dd165c2a041e2b90baf7e2"],["/2020/12/20/beoplay/index.html","696b5b233bab5c573e87b5fbe0898cfe"],["/2020/12/20/订阅链接转换/index.html","a52516687e1deb6ad3f6bb337b45452a"],["/2020/12/21/chrome浏览器下载提速/index.html","5c1fedef3578d135a89755da08c5d7ee"],["/2020/12/21/免费128线程并发下载xdown/index.html","fa6350cbae82133bd7cc6ff1eca5a232"],["/2020/12/21/免费32线程下载软件ndm/index.html","feb873d455910e9de505663449260d22"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e2f726d86cf6c5c2848ecc0b237f8f01"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","e465dd9f4d9d2286d418e5013401a5dc"],["/2020/12/21/广告怎么知道我在想什么/index.html","275c9b18cee6538aaa6ebfcc2afce31b"],["/2020/12/21/无名·引子（小说试写）/index.html","30723f6a3c67b751cf57ec6f87d62442"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","c24420998dcbec5dbd8e7d51ebe038b6"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","44515429ae59ee10e90b18880b78906e"],["/2020/12/21/高速轻量下载器aria2/index.html","611e66b48664379e90949f278d589c55"],["/2020/12/22/2020-cee-roo/index.html","982a71d5d5a407117eeb63584cdd1d31"],["/2020/12/22/firefox插件、github、steam富强/index.html","bb082269644e2073b83dd3b70964542e"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","278ecd6d2755717a0f54c686e3637f0b"],["/2020/12/26/python-day-1/index.html","e0e1c3900383fa479b2462e1e5469df7"],["/2020/12/26/python-day-2/index.html","25e9b9c539bc93e52e649150ba26ae7a"],["/2020/12/26/度盘不限速下载方式一赏/index.html","4834a9757978104f74363c5359b019ca"],["/2020/12/26/添加开机自启软件/index.html","5a69586bac53a2cb8d10717c122b1869"],["/2020/12/26/电脑端截图方式一赏/index.html","96124819336d8a6a48398f8303d42037"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","ba2be2fe475288691452b7969319d68e"],["/2020/12/27/最安全的浏览器tor/index.html","627b15f5a59be92ccb392cafc6f09dc5"],["/2020/12/27/网易云刷等级和听歌数量/index.html","5cf41ba4ceb7d009c2fccb8ed4b61e4e"],["/2020/12/28/freenom申请免费域名/index.html","1c9c44218a350c16d9d4cb24fe005ca5"],["/2020/12/31/机场/index.html","e93e148fbe59226a132b39e61ab246e1"],["/2021/01/01/M1/index.html","c606cdc72bb0023008a7a4e77cd2229b"],["/2021/01/01/compress/index.html","a76ae6fc828245e38706aa3a6004bb70"],["/2021/01/01/infinityfree/index.html","d66852392025b9a35c89987ac3901f28"],["/2021/01/01/硬核翻墙/index.html","7387293499a94988349f057557bc2119"],["/2021/01/02/qq/index.html","682df6b8df5b007b2880718708ba567f"],["/2021/01/03/netch/index.html","67fa44f24abe34ce3f27f653eff5e40c"],["/2021/01/03/waifu2x/index.html","e5385615b43850e59bf296aa910b20a1"],["/2021/01/04/ads/index.html","66d234fa4e5d147d5f06c6089fcc759f"],["/2021/01/04/games/index.html","01fef8341f997fde3c2378645578611c"],["/2021/01/04/heroku/index.html","d0d14df378398ae64e693cb6d90fb032"],["/2021/01/06/movies/index.html","2790045e917be157a6ec5d0fccdcc979"],["/2021/01/07/google2020/index.html","9659428b3df584cba1358752643f8591"],["/2021/01/07/lucky/index.html","7e7b0293fd8fcce8a9d955878a12fc73"],["/2021/01/07/spotify/index.html","70298177d4f69b479d42f7d684605d5d"],["/2021/01/07/thunder/index.html","14060d4bc7ddf5fd2fc7697199d21fd5"],["/2021/01/08/adguardhome/index.html","e5a39dad95369f230dcd02f655be6454"],["/2021/01/10/IBM/index.html","c21f64a8733faba43f9ab4348f776743"],["/2021/01/10/potplayer/index.html","cf867306266116690564478fec04c4cf"],["/2021/01/10/sakuraanime/index.html","d32869064cda1870166b5a18474e5091"],["/2021/01/10/美剧星球/index.html","54e83c5ed2db83781b2f9ef5679a2c44"],["/2021/01/12/telegraph/index.html","2474fa9b1d8f29fee41f50944d878324"],["/2021/01/14/comics/index.html","514fd9c88562c15f5bbdc0d91d1a8c78"],["/2021/01/14/ftp/index.html","d39ecdd921f4741011e22f8fd114d343"],["/2021/01/14/oraclecloud/index.html","97fb6663616a8c868d644f838c2a934f"],["/2021/01/14/porkbun/index.html","bf87dde7c3303cc752952455290c84d6"],["/2021/01/14/powertoys/index.html","c592877901dfd8d2cc2e30c9b1d33692"],["/2021/01/14/taptap/index.html","d7ba346c6c63ec0c0eb92354f975882e"],["/2021/01/14/ubuntuvsftp/index.html","6ddc02b87c94d7260a5b72616652b9ad"],["/2021/01/14/小说/index.html","3189c2b283985ab446f2c565f094440e"],["/2021/01/15/freeproxies/index.html","8263303ce9e95c762e97e034a4bfeb58"],["/2021/01/15/incaseformat/index.html","2b53416fe69a2d30327ede84fadf1fa5"],["/2021/01/16/euserv/index.html","2bd9ea4659d1bfbe288cd6a2136bac3a"],["/2021/01/16/winxray/index.html","82fdabfff8c09e60f0198b019a4eabe9"],["/2021/01/18/qqreadhistory/index.html","1171979e2b61e7ba316f2b801d25729d"],["/2021/01/18/qqrevoke/index.html","601a565d2453fefbab6b9bb6c0148c12"],["/2021/01/19/freevpn/index.html","1f97ed44c112816c21498a1e8a25681f"],["/2021/01/20/browsertrack/index.html","5ec04bddbd4f3bb7f98294df620e73ef"],["/2021/01/20/v2ui/index.html","f43803a7c26cf0b44070e708b88348e5"],["/2021/01/21/failedtoconnect/index.html","bbc4481bc9c8c3ef1a7959d52895fa45"],["/2021/01/21/gitcalendar/index.html","d1b7122e10fc4ae7b6c8281903d9f17e"],["/2021/01/21/markdownformat/index.html","b37e3fc43061680fd3d922800b0f7fe7"],["/2021/01/21/markdowntable/index.html","ba9d0efe8da2f21d001870b55869011c"],["/2021/01/21/vercel/index.html","3fc5440e6cafd7c1c9e137c6823196ed"],["/2021/01/22/hardware/index.html","4596586620944befa194cc1a7b55dda3"],["/2021/01/22/muviz/index.html","068d280eb88d1ecf3140c5024006f824"],["/2021/01/22/randomapi/index.html","aac174b0a855827ac9935431b4ea0335"],["/2021/01/22/searchimages/index.html","adff746a7309009c2b4ae7c2ccacb8fc"],["/2021/01/23/RX文件管理器/index.html","85b44ff4d97053746a4972fb8bddb2f0"],["/2021/01/23/chromeflag/index.html","f504a510a4b89900ddbfad92d7444eb9"],["/2021/01/23/qttabbar/index.html","219f1f1297f61e5942df4a6cbca6abcd"],["/2021/01/24/githubspeedup/index.html","1f7c02bc5c65e27cc4e88e261e1bdee2"],["/2021/01/24/jsdelivr/index.html","2011ee4eb24f27a515986569b442f939"],["/2021/01/25/note/index.html","659794cc89abe03bdbe347b2db6e4a50"],["/2021/01/25/soul/index.html","7a80333ac83ace42ad613e15f7bfba9b"],["/2021/01/26/herokuxray/index.html","c86392cd423c7e789e8e19f43c755b05"],["/2021/01/27/proxypool/index.html","5c4ba159741148d63d588b1d405750bc"],["/2021/01/27/tracker/index.html","9cef7618bcff9da0c0613179bfb71615"],["/2021/01/30/pandownphp/index.html","9e85e16eb191a2677889e4f890d9bcdd"],["/2021/01/31/newgroup/index.html","a15d06c1da53e2711cb2cea4b1f279ff"],["/2021/02/01/clashlanguage/index.html","9afb75676320472142b405b577479924"],["/2021/02/01/encrypt/index.html","9e20526c01e831984fe9f2c60d9c9a4f"],["/2021/02/01/footermotion/index.html","58d3bbdab5428f246eb89f781ae2d700"],["/2021/02/01/gitter/index.html","8aca548f01659fdd339d8c278b325bc2"],["/2021/02/01/pixivtop50/index.html","1741e105dfeda5081510fe940123b0a2"],["/2021/02/01/scrollbar/index.html","05a121f614e5e622f68f78fa7df8bbd4"],["/2021/02/02/clover/index.html","298522f1ba611bfeee03cea9bfda9072"],["/2021/02/02/maya/index.html","92b713f1a6411a05572b184acf6133cc"],["/2021/02/02/speedcontroller/index.html","37d141572c77230da482bdd8a546c159"],["/2021/02/02/yesmusicplayer/index.html","0e2f2bbda9fd88e0628ffdf178732f29"],["/2021/02/03/lenovoonelite/index.html","f20da77b01a20a8dd87ade35f694514c"],["/2021/02/03/skipads/index.html","f1e6d9506ddf7bc51b6a3aabb50f501a"],["/2021/02/04/picseed/index.html","20b570eddb6d85b95af79ac62f5ba7f0"],["/2021/02/04/renren/index.html","52b209846ac9232fbe9aba86ce384617"],["/2021/02/04/serverstress/index.html","1bcad51731a7cbbd17bb0796facb1e5f"],["/2021/02/04/wikipediazh/index.html","74f2396871532a1fee3516beaaa074e0"],["/2021/02/05/googlevoice/index.html","76ba430a70e7fb70cfcda2e03c69e271"],["/2021/02/06/clashconnection/index.html","00152bfc79810bb2df68d8d9033e62ff"],["/2021/02/06/gvtransfer/index.html","8b456b97ea090345ed2eae0ef0406591"],["/2021/02/06/todesk/index.html","a68d4e95f7fd2e49d69af07ed46aae00"],["/2021/02/06/vpnblacklist/index.html","82ff2b054f4621965641bee03123b549"],["/2021/02/07/mklink/index.html","267040899c2c431c35cf1b722d8d4d5b"],["/2021/02/07/speedtest/index.html","efc6337418faeaf1792ed317076ba941"],["/2021/02/07/translate/index.html","ccad57c6c907b23a20a337667f9122d7"],["/2021/02/08/ewomail/index.html","f840b5877aa5f7cb07894b9e64cf1e47"],["/2021/02/10/officee5/index.html","16d47a824faf3dad1800606a96614d17"],["/2021/02/10/raidrive/index.html","a925d82c6b4bad04cd602c55d9470a0d"],["/2021/02/13/e5sub/index.html","bc5fbbb1e00db6e79a2ade4e012e529b"],["/2021/02/14/screen/index.html","22d361ff3865563047a4757628b979a7"],["/2021/02/15/clashtun/index.html","4983964e658a96d5c80f40b01824cdff"],["/2021/02/15/messageboom/index.html","0aed554540a92a124aea680948116bcb"],["/2021/02/15/oneindex/index.html","c124fd47c96916909fc766555b7bbeb1"],["/2021/02/16/govsites/index.html","0e8a50c629d77cfc6e02b97cd3024118"],["/2021/02/17/hexototypecho/index.html","75749052d6bb4698d13ef09bb3b74f9b"],["/2021/02/19/fiddler/index.html","dbfb87f0a4365456832dfb820e0d25b0"],["/2021/02/22/potplayerset/index.html","5c3db6f90dec208f81408377b3fcd1ad"],["/2021/02/22/studyresource/index.html","3185c19f393073f180ecd1ea64321bce"],["/2021/02/22/telegram/index.html","887a0c7f03bfb63990b6488c946db9a3"],["/2021/02/22/videos/index.html","58db920239fa48e2dbc6f4239624d6ad"],["/2021/02/24/mtproxy/index.html","5653cec6bb6a26bf3642274bb9fa7fc8"],["/2021/03/10/catchcat/index.html","9a33d6ebd2fbff1dd75b819f9f7e555b"],["/2021/03/10/neteasemusic/index.html","e85c77647b062bf30eb7c337ab5407d6"],["/2021/03/10/surfboard/index.html","848e323d49db887741612132c4225630"],["/2021/03/11/vpnandjc/index.html","b6a91e149fd5ecbf474b3d5d437fe38f"],["/2021/03/12/qrcodes/index.html","9f50804f667ec2ac5a709f19e2361b7e"],["/2021/03/20/qv2ray/index.html","d939d95d9223312f6865e096089c01dd"],["/2021/03/22/freevps/index.html","7da82f9bb98c8ba182cd1791f447ae61"],["/2021/03/24/tgstickers/index.html","1daacee7510b036a5ec5f0ed8b730b9e"],["/2021/03/25/clashx/index.html","193562f7dbc06598021b6e890a904efd"],["/2021/03/26/bingwallpaper/index.html","c73782793a374cf33bcf8f3e21d4e522"],["/2021/04/03/soutu/index.html","cc3db27e4d263bd6a7099614fe2fb111"],["/2021/04/03/tiyunti/index.html","80ae6247b9d9a539670b487330dfa8a2"],["/2021/04/04/btpanel/index.html","ff30b9c79a08caccf7e76cb03fe88f0c"],["/2021/04/06/atlasos/index.html","43396e102653e9d8485765dd157583bc"],["/2021/04/06/cleaner/index.html","c88522926aa1227ff97264cd0dd1655b"],["/404.html","496b616c608b9cd09b6af44fc5bc8518"],["/archives/2020/11/index.html","1d55c9adc21262ac3476124abff31813"],["/archives/2020/12/index.html","0081193a8136d88a2a9a372cb4e265a1"],["/archives/2020/12/page/2/index.html","16a84d044b21bf6f6f5eaadbe3ad91a0"],["/archives/2020/12/page/3/index.html","fbcfb7e6bb26aab8bb5f38bf74f438f9"],["/archives/2020/index.html","41d5b1e4f5d12c81766f1b1cb8f9737a"],["/archives/2020/page/2/index.html","20ac875a83e37579bc8d37a07c93296f"],["/archives/2020/page/3/index.html","0dd06b56d33ce2b1869ab55446757306"],["/archives/2021/01/index.html","fc074741652962e1d8f0d65bf18b4651"],["/archives/2021/01/page/2/index.html","08e018dd49628c8587c867cb4024b470"],["/archives/2021/01/page/3/index.html","e8004d7a67c6521f53fce9dae6ab492c"],["/archives/2021/01/page/4/index.html","caf0b82d243326668372759030c273a1"],["/archives/2021/02/index.html","6a29f2f9716336bd7df93a862d042d15"],["/archives/2021/02/page/2/index.html","89013e8ff4231d5bc18720cb4b996ce1"],["/archives/2021/02/page/3/index.html","0d24912d1b7a82862e06b264a539f935"],["/archives/2021/03/index.html","e597e9929ee39aa0373f3bdf042d9cee"],["/archives/2021/04/index.html","d175b4c3b01759212001bc596ad95293"],["/archives/2021/index.html","a69d41b8e25f8707e465aeafc9425271"],["/archives/2021/page/2/index.html","58e642df42e4395effcac79cc8340b15"],["/archives/2021/page/3/index.html","2eb4031808f8840a73f0f92375335bb9"],["/archives/2021/page/4/index.html","b6a7e98752da9332972bd0cc1ba9d961"],["/archives/2021/page/5/index.html","f339f9f72c2e2d6e340662f66598fd24"],["/archives/2021/page/6/index.html","cb024deacf535d4948af80480b8490a4"],["/archives/2021/page/7/index.html","2d1d274b07760aa081b90cb6c0aac80d"],["/archives/2021/page/8/index.html","c699089e6848f77e67b915ecf6ee88a9"],["/archives/index.html","367f6af403da847f42a3f0871be62bed"],["/archives/page/10/index.html","5f84714a8c5841d1cebdbee2d8ab5f95"],["/archives/page/11/index.html","89cbd775ae2d485fc3a870c8970313a6"],["/archives/page/2/index.html","d94a2475cfa390c8663d707f1ee98f04"],["/archives/page/3/index.html","8c047bec99978be791acaf4a50ec9c12"],["/archives/page/4/index.html","5875427cd6cc7a79edc703afd8fa91eb"],["/archives/page/5/index.html","0903d5740f2aad6a261cb7f888716831"],["/archives/page/6/index.html","65e487ea510e735e7a55488db031896c"],["/archives/page/7/index.html","9e9517ffaa95ca852e1c26cdd6e6b01c"],["/archives/page/8/index.html","edd8440deeb81345396dec6a9594e939"],["/archives/page/9/index.html","ac3a2fc070af58e78982940bdec9e0d6"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","1bc56e77e9da853737ab6dfc48739f39"],["/categories/index.html","4f07ac91104f4fb015c61b40f7d1868a"],["/categories/下载/index.html","f49b08748d9c1318717b9622e6b9a584"],["/categories/安全/index.html","2ebab2878ab992027b9d3f29b7660b5c"],["/categories/建站/index.html","2f02f8c2f5a0513d36ce8351cc39b091"],["/categories/机场测评/index.html","5a8f60bd30e88e6ee09668db4edc723e"],["/categories/杂/index.html","aae8160f546b04c19c7807e87292aa06"],["/categories/杂/page/2/index.html","3499980f0ac3a4b1073a29bd9ccceb16"],["/categories/测评/index.html","3145519c8fa211bdc16b027ff1665b50"],["/categories/科学上网/index.html","65df325b702f5878d56aecbd1dc7a0f2"],["/categories/科学上网/page/2/index.html","a9158ca23028fee44cf86d6fd05277d4"],["/categories/编程/index.html","c613dd5edb436b746d84529239c37302"],["/categories/网站/index.html","0f5db397e48bac3e8737123939396161"],["/categories/网站/page/2/index.html","ac2e941c6276a8e52e830c11ef96b402"],["/categories/软件/index.html","b7c377aa2e28ed151defc1027546a301"],["/categories/软件/page/2/index.html","e95bf6b488137536c16bc11d5267b81b"],["/categories/软件/page/3/index.html","a4248a1013eb1e80016eb9fee533c4e4"],["/categories/软件/page/4/index.html","47ee1b686f7474cbc0fc7a080c89d408"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","7b53a496674962edb64a26ab83333924"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","0baf4990d5cf49eb541308920f391d4f"],["/ios/index.html","fa24091171575fa44966a4f7cafeb86d"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","8565efaf779f261573553258396cea83"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","a05e9baa0782bfbe01f8a1742429297e"],["/page/11/index.html","b696c5d4aed748ca2556ba8d5fbe0094"],["/page/2/index.html","a832fa9ede9efc08e08149f833abf15d"],["/page/3/index.html","ba48117d76aaead3c3273123bda6aabe"],["/page/4/index.html","48c6f4e603b140e96e98b9e2e27f0730"],["/page/5/index.html","0006a759ef1bd14f592209d2f71f9fa3"],["/page/6/index.html","c8d314fb18e2dfd431862a5a191e9c5e"],["/page/7/index.html","a525755e79e7a28812353a537f64093c"],["/page/8/index.html","76f3f243d2dd7349c5803ea996c1193a"],["/page/9/index.html","74e05fc8dcd3f6f4581ad7f9f3ed5205"],["/payment/index.html","6357c4fcb87d6d9e0cc3df3e126a7f69"],["/privacy-policy/index.html","604b451e619a101a21cc506c36a0072f"],["/rss2.xml","64becf79c56bb78f4604d80106068073"],["/search.xml","82a92acfe8555c57e94100c1a1e873e0"],["/sitemap.xml","fd14eaf9e80ad8d4c74a09b271b915e5"],["/sw-register.js","650d0622ce052230069d22dd2f74b772"],["/tags/5t/index.html","b3268c90c5d1d6ee738ebdc7fc04604a"],["/tags/Bing/index.html","e852711296d9a39247dca17db9b21d93"],["/tags/Clash/index.html","9b7e9a2897acb4756c074455cd151d07"],["/tags/Clover/index.html","136f7a41ed17ae93751325fad48a5a4d"],["/tags/E5/index.html","2fb0a3ad14a9dd2bf90221b26a5ccf7b"],["/tags/FTP/index.html","185adc23a3d6697cdc77fb2bdf530e7b"],["/tags/GitHub/index.html","887c4cf5979b26b84059a7a5ba21d0c1"],["/tags/Heroku/index.html","3da989fc271966d20b01876dfad9ffd6"],["/tags/Hexo/index.html","c4acf34e1a7d96dc2ad17916cfaad8ba"],["/tags/Lenovo/index.html","c21ac25e113eece2fb6f2c92effc031e"],["/tags/Oneindex/index.html","39e56e2eb1914b7f4dcc720660e760ca"],["/tags/QQ/index.html","fab366dae6e10781b3ba8a2a8685e749"],["/tags/QTTabbar/index.html","b97cb13a8fabfb211a4a4480e201d596"],["/tags/RX文件管理器/index.html","8ec8d3c2069b0d0b2c4f197fcbe80dc6"],["/tags/Todesk/index.html","ba927ee89a4fb85d938e1cd78885f37e"],["/tags/Vercel/index.html","288ea1d56246b09bcc3a42bde0fc5419"],["/tags/ads/index.html","4d1cadcfba56d5b41f072e66242a0d5a"],["/tags/api/index.html","9f2145db5c5755e1cf6ba163fb231a16"],["/tags/app/index.html","fe3f1ee6122ac5c2515b787dfcbf266c"],["/tags/atlas-os/index.html","666c9b61c3771d68b3002fd3c50a81ec"],["/tags/blacklist/index.html","44f06353ac442722a97fb2bc72e7fa85"],["/tags/butterfly/index.html","08c0cbd5b6600de8803ea3940df6712f"],["/tags/chrome/index.html","43e954202603925b7d3c2b0252ecfb21"],["/tags/clashx/index.html","b866807a2ec011a881e7537c37b15bc7"],["/tags/cloudflare/index.html","a17ca6f6ac2dd1e2fbcce62d0afdd9f5"],["/tags/cmd/index.html","5759c6a6e80a5dfa41c0e83565d62e2c"],["/tags/c盘/index.html","e354ad05574bdf3b6256bb9e13628606"],["/tags/email/index.html","2507d852e1bff5f33f258573fb96ad3a"],["/tags/ewomail/index.html","5caac6b42bfe18fa0d4f7c23f1b55421"],["/tags/fiddler/index.html","5fd13b566106f2350f5f5b640e098af2"],["/tags/flags/index.html","d7321e05801f81e6dd74364b3c0b3890"],["/tags/footer，页脚/index.html","591ca23c9523e026c126d3588a2bc753"],["/tags/galgame/index.html","89233fc65526857cb9044e7c87c6d83e"],["/tags/git/index.html","6942a16fe4846d7f34ef1c6c41fc25e5"],["/tags/gitcalendar/index.html","07e39e0fa9c9118cb17ec6d781d4df33"],["/tags/google-voice/index.html","45cd25794af433ae16457020e3fa1634"],["/tags/gv/index.html","9927c6e39b4f8fe5bf0fb9c535fd665c"],["/tags/html/index.html","07294a8785ab4ade5aff4a063e832167"],["/tags/index-1.html","053a7430342eaaba2c6e9720fa227996"],["/tags/index.html","2bb900cebfd809e919507081c24d3c15"],["/tags/js/index.html","8e2bfa8a08155cac80d85003cbca0c8b"],["/tags/jsdelivr/index.html","d10bc995dcf0d025c3d3d9cfa6d2244a"],["/tags/linux/index.html","72288babbcb23d493ff6d5e873f64988"],["/tags/macos/index.html","20f8c211e22a63a5ef1eef9b36512dda"],["/tags/madVR/index.html","715b8c2a7ccb23bcd9955fc71607d2ca"],["/tags/markdown/index.html","11f4be0f12126990c2cdfba1d00d9e13"],["/tags/maya/index.html","8c3254f76286b3ff2d797234f64c0383"],["/tags/mklink/index.html","3ad7ded9de76f366ca8af4f7a7b02422"],["/tags/office-e5/index.html","379ca6a7e769f9bdc5bd09cdc54a11a3"],["/tags/onedrive/index.html","9529b83f5e660f9356e6176d489cf69c"],["/tags/picGO/index.html","b471872cb3f56f27ef1317fea12a5bb8"],["/tags/pixiv/index.html","417270fc0b77d083513c612dd2a6d91a"],["/tags/potplayer/index.html","abb1b706830bfabaffd698f9bcc7f3bc"],["/tags/proxypool/index.html","e67c0b35b54608a79a1cdf3281906dcd"],["/tags/qbitorrent/index.html","f031dfc0f1be0d643018a4cf927ddf3f"],["/tags/raidrive/index.html","7e408a1d5c84d2a2a0d534fd89d3f10d"],["/tags/screen/index.html","70530c72ba30296386d4f5f07737aa71"],["/tags/speedtest/index.html","6891697536b2212762b757d7b719f090"],["/tags/ss/index.html","9dfd00fd9056092fe6f5f25db0217246"],["/tags/ssr/index.html","446cebc9b98ebef20aab7c34af02ffd3"],["/tags/stickers/index.html","68a3e55bcb05fa0343978800d4e3e135"],["/tags/surfboard/index.html","55a3b326906bcf4dcadcd101467f80cb"],["/tags/tap/index.html","27469605f95207d14ea806a80367cdbe"],["/tags/telegram/index.html","a02a402976aec0519792391adbd6047b"],["/tags/telegram代理/index.html","cdad74e87418f4ebd9d06c5698cee3d5"],["/tags/tg/index.html","86bf6598e69e73d1d8570c2ce46696bc"],["/tags/tg代理/index.html","64243cf6927016302b6ec6bfb26289e8"],["/tags/top50/index.html","ae45ac9d7bdc11d92374e766077c9e83"],["/tags/tracker/index.html","53e7a918d994c75d84bbd618753acaf2"],["/tags/translate/index.html","87c2aae3bd1d720a8c0b2fb693b2859f"],["/tags/translater/index.html","54f14c6204c951f4b2114d3a29e11e48"],["/tags/tun/index.html","e7559a8df722f3b6903773e4f290dce4"],["/tags/typecho/index.html","696d9b25d0b65d4a7b7d6790b475777a"],["/tags/v2ray/index.html","e80404830e37fa79a8f08a1b6462548b"],["/tags/vpn/index.html","64e1f79d8d576f60aff6f359ac55a97f"],["/tags/vps/index.html","b97691a837927424eca85e15e829b5b1"],["/tags/wallpaper/index.html","2d6ea94d24449f9938d7c1b016a1209c"],["/tags/windows/index.html","f066b908d96c4dbe4e02fa38a6bf52eb"],["/tags/windows端/index.html","9404e76f3d2bfe31aa33ab13933968fa"],["/tags/xray/index.html","057745c1b9df31268571ebd945b4b737"],["/tags/yandex/index.html","5dd393d4379bc7d43702f708abc1ca52"],["/tags/下载/index.html","d02af1012d897166f994f40aa8d70a1e"],["/tags/不限速/index.html","09b6b935e3d37f35fa733a7a9136e0f1"],["/tags/个人网盘/index.html","fa354e9c8531a6259cd41ecfc68aa310"],["/tags/主题/index.html","89a71f13542398eaa2958c1622fea39c"],["/tags/二维码/index.html","7b8567795023a928f80bd49f6d12dcf7"],["/tags/云便签/index.html","a60b19fe5888adaa4fbf0eb7e6649979"],["/tags/云盘/index.html","fe429052909cfe8a6e402f17142cbf24"],["/tags/人人/index.html","8290de42f18a96e2faca8fb443194a16"],["/tags/代理/index.html","19afd3038819d6a0efc9c76c54eba79c"],["/tags/代码/index.html","45ffbd7f8b71bf70ddf55be03bbda2e1"],["/tags/优选IP/index.html","58e696256a5f74e92cb6baa691ac085b"],["/tags/便签/index.html","fdbdebfa3b6da47ac040096d5a1ab3f8"],["/tags/保号/index.html","964ee578b2da8693db6b7a16c51ffc04"],["/tags/免费/index.html","4911aa3629a361806561ccb8dbed6d32"],["/tags/免费节点/index.html","8b1a0e0a3ade7212245cde2b855c891d"],["/tags/冷门节点/index.html","b5a216e2cf227c0e84cccb70303a9e79"],["/tags/删库塔/index.html","cfc30a2b7739d5c5e62fa062eee997af"],["/tags/加密/index.html","0bab0732d1e45c9bb9b860667b4a393d"],["/tags/动画/index.html","bd4dd46e0b444b7a061e3d57a74f126d"],["/tags/博客/index.html","45ec1e2f266f285ff7e3fe2b1bfe2c22"],["/tags/卸载/index.html","9fec158a04278a7113ac6629eacfe953"],["/tags/历史记录/index.html","07ad0449a9bfa69c8d03a2869dc556df"],["/tags/压力/index.html","e360575100f1268413860aa48c0bdcff"],["/tags/压缩包/index.html","b52475ffb74f069d97c0dc8b60671a6e"],["/tags/反代/index.html","2d11bb24a07fc4a1dd5c232e6a264d50"],["/tags/可视化/index.html","95b6b3244a495a26d8bd4871b16930f9"],["/tags/命令/index.html","2038a8d5ddf227cadabba9ef500a1896"],["/tags/国家/index.html","5de4f29967740f69e159dc24407f3d4c"],["/tags/图床/index.html","e66521ea644a2987eca8a07714d9d112"],["/tags/图片/index.html","ab0329d705b55c9cb8b731c6e30f0c0f"],["/tags/域名/index.html","0ccd2a74b0c32f63dac7f0ba12c8da0e"],["/tags/壁纸/index.html","7fdd1f06edfc6a0d2184e88f7133a8e0"],["/tags/多标签/index.html","0916fd5802c02c41d47c773bf508b61f"],["/tags/奈飞/index.html","234d7b8b406d1eb2f89abc43498cf8a6"],["/tags/存储/index.html","6085034f01f42a8e84c3fdd307bbef52"],["/tags/学习/index.html","952bcdece35dc9cec9be59b8e807d581"],["/tags/安全/index.html","403b2dc3ffadf9bfbf155551c280a51f"],["/tags/安卓/index.html","01d4bebffee0831f8f754fbd8be6d269"],["/tags/宝塔/index.html","b463f60e43e6e88fd17e2f1102aa6730"],["/tags/小游戏/index.html","5019648c95943ff3faae862bb2e0c900"],["/tags/广告/index.html","db084753c4469daf81f8d8f89920bf14"],["/tags/建站/index.html","14d4ab96d227705a53fcfad8ee7c7f85"],["/tags/影视/index.html","7015f9f5e32f47076faf815c4fad4634"],["/tags/微信/index.html","34c7cb8354360aced66c056fcf9689bd"],["/tags/快速启动/index.html","aa9bc1c11f70d878c6ed074d9ee3b408"],["/tags/手机/index.html","0e1d273730aac25e0ec8562d1a88ac00"],["/tags/托管/index.html","32e2dc9e27044e3fba7fc09b73fdd6c8"],["/tags/抓包/index.html","47fcc61551a112d307726891fa80b60c"],["/tags/抓取/index.html","b8c5916ce9d1c66b2a5a06b16b5a7310"],["/tags/投屏/index.html","b66dad8be8d9536cb212c1d3d89fa1e8"],["/tags/拓展功能/index.html","4eb0161e6d6d21ff47d2b925f1a1006d"],["/tags/挂载/index.html","361d3efca7a6f0c8641f92fd12671fc3"],["/tags/指纹/index.html","5fc94e3fb4c73c8f37c270932f2d2a03"],["/tags/接口/index.html","2c4c288febd10841ff98b3190c8365a4"],["/tags/提取图片/index.html","a0d4d56d0d0417a3847c44bf892d1751"],["/tags/插件/index.html","d849d3e30c090bd5389ad992b7b35705"],["/tags/搜图/index.html","2c89a4d4d8fbc315ff217c7bd70ed818"],["/tags/搭建/index.html","e6f7d333807abef7ae698dd57536194e"],["/tags/撤回/index.html","6fdac73f7e9ae41640a16c309bbc0de5"],["/tags/播放器/index.html","9ec6938f3684b34b61f1dcfe76586cbc"],["/tags/支付宝/index.html","87b3f916394550e94c52b7a8b6776a34"],["/tags/政府网站/index.html","b2feb0ee6baedb9233416fa74ebb8d66"],["/tags/效率/index.html","17b732de0231df0ca2779dff72260c9f"],["/tags/日历/index.html","634a41f5f2d5d35ae3ad7c5ed5acf8a1"],["/tags/服务器/index.html","3b582768078ec6eb1053e701200b26c7"],["/tags/机场/index.html","7ea2307f5c3de312803547e0a5f77661"],["/tags/查重/index.html","ca5cc15b867543cca0931a69a64ec6ab"],["/tags/桌面/index.html","b02942640594fc7badd201f464c90f8e"],["/tags/梯子/index.html","73700fbb5f7b7d6aaaba14412ac66e8d"],["/tags/检测工具/index.html","9ceca111a10d4f7ad81beb50189dc768"],["/tags/汉化/index.html","0ad3e2763554556e6167b29fcfb4ef51"],["/tags/测压/index.html","d9ff09a57ccd73ad7207f80f16b2606b"],["/tags/测速/index.html","14330b201bc7ec0f6a8fb9bd6afca9a4"],["/tags/浏览器/index.html","f912e95b9e72f82933836ece3bbc7bf6"],["/tags/清理/index.html","9651308bbe228fe266d5b13abc196c6f"],["/tags/滚动条/index.html","6f833e80581234c55b12bd80d11c6c26"],["/tags/灰色歌曲/index.html","62c17c2cbf3a01e51c76b69e0258126f"],["/tags/电影/index.html","85bbc92c55df213e60465cfd1be92035"],["/tags/电脑/index.html","06b7a0baf4ea81907b010ee943bd97cc"],["/tags/电视剧/index.html","9f6f25c4340934702450c1ddba17bd10"],["/tags/白嫖/index.html","b7a63bf935d2e4618b82a519f999c127"],["/tags/百度/index.html","8491173852a749cb71f7f3d2521d1370"],["/tags/百度云盘/index.html","ca367645db16c8bbd9fd55c5d3022be6"],["/tags/百科/index.html","495a41933997bc513d0cdd9cf328a6ef"],["/tags/短信/index.html","0e26169ddd58ae647f44176110bbc589"],["/tags/硬件/index.html","101e5c16cbfdef184e979f25023155b4"],["/tags/科学上网/index.html","c2d6fe9598ce214c449030c5798fa2c4"],["/tags/空间/index.html","16188364855b1a1dd61fbae08580ca99"],["/tags/笔记/index.html","99c5ecf5ca98770ba245bbfb43bbfd16"],["/tags/简洁/index.html","31f2000127d1c003adc166c5270cf48e"],["/tags/简约/index.html","e1dfcb7d1f6adda027c9b786b4b9cd8b"],["/tags/维基/index.html","cde7c2137a71cef3861c45ce765a4490"],["/tags/网易云/index.html","1f7a8bc1cf3ac76c33c7b59921aa02ba"],["/tags/网盘/index.html","103e127efddaadbf0432c74f715e539a"],["/tags/网站/index.html","b73ed2ba55682ff71f0a2047bf2b0189"],["/tags/网络/index.html","669552be856204f534e6e6a63aefd255"],["/tags/美化/index.html","2c8cd3748cd7d3591e512db1649ff02c"],["/tags/翻墙/index.html","160fc72cc7815eea55c43beb767545a0"],["/tags/翻译/index.html","7f01d3fd3173d7bc63841c67a59e3233"],["/tags/翻译器/index.html","4042fc39d6847193e84fb53f387c810f"],["/tags/聊天/index.html","f92f199f247d28f981c745ad5a730196"],["/tags/聊天室/index.html","5089413cc461fbd877c80f7cde5720ec"],["/tags/联想/index.html","3bafba3b4fbc4eb11009ebd033c7c6c4"],["/tags/节点/index.html","a4efcc81a07dba03ed7af12fdcbe3e44"],["/tags/虚拟手机号/index.html","03aee2849e41d9847332a5b31d716eac"],["/tags/补丁/index.html","67f98e0e161abd43683dc7351e2b9d94"],["/tags/表情包/index.html","89310c69ffe8b7f478aff7782ba220cc"],["/tags/视频/index.html","54bee0e8919f2aeec59c04f1f30b5d3b"],["/tags/解析/index.html","f31692e758014e3528b725ba14d4fc9a"],["/tags/订阅链接/index.html","2dcd6a236f2f5c2e2181e60970d1e37f"],["/tags/记录/index.html","b4f0bb4b8d96016c563aca6d3a3990d4"],["/tags/识图/index.html","b59f10d55ac49caea41e33b322157547"],["/tags/语言/index.html","4d94edcc948c016da58eaea2b0add5de"],["/tags/资源/index.html","c0934d6c93680beba5115d56d58e3644"],["/tags/资源管理器/index.html","84346c0a81da5243c85afa8f57e81ddb"],["/tags/转移/index.html","4fcd5be4fd63fe33e6088849a1aae4da"],["/tags/软件/index.html","68bad50c5312381382acd1bf2f0e571e"],["/tags/轰炸/index.html","db5b22e5e1eb540883e274bc524d45e5"],["/tags/迁移/index.html","c3f0c930fd093efd601d6364bef3dcf7"],["/tags/远程控制/index.html","ebd71ba8de9c42bf909cefc81c823f25"],["/tags/连接/index.html","feae8141634c53e3c491ea340a4e4bb9"],["/tags/追踪/index.html","a444ce9221525bbcc4ca5d3afac70e88"],["/tags/速度/index.html","d7f316e85f543824ea86c52b1b9a325c"],["/tags/邮箱/index.html","ce484d96bc62570f67c14e434ef965fd"],["/tags/酷炫/index.html","9e68105810f2c3439bbf173ca331dceb"],["/tags/钓鱼/index.html","0e2099d1d89a33c947283af63614b125"],["/tags/镜像/index.html","14f601856b0076cbd36bb5b49d09e7d5"],["/tags/随机/index.html","b08ba9542a03230a7cde35936d3ad7f9"],["/tags/隐藏/index.html","01a8c0cb03da9637d41679a47e58b68c"],["/tags/面板/index.html","56ab9dd047b8d0584fef01e712660344"],["/tags/音乐/index.html","5055bc1e49afb9f7f03bfafae163b790"],["/tags/高颜值/index.html","67fd6cd4559c571439133f6ecf0a78d0"],["/tags/魔改/index.html","0908c7ee70aa0466e4402505e729f437"],["/tags/黑名单/index.html","f896bf9db9991b07a1748edc0048db48"],["/urls/index.html","0b08273d4905b059816ca0077894e1f3"],["/vps/index.html","c41a16821edb53c4613ed0e2b23afabb"],["/支持/index.html","44648797742de9f2ac8e110409dcefce"]];
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
