/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","ca5727b0e52bdb5abf7231f164c72ce7"],["/2020/11/29/clash-windows/index.html","523eb92fb74e917916067a347c46297d"],["/2020/11/30/websites2/index.html","02d2d14f1a3225ace05da452e10cf268"],["/2020/12/04/iphone4s/index.html","dd6f46349efca5c56f716307f9ae9c7c"],["/2020/12/04/onenote/index.html","e012bb897974ccd4fd21829949fe1fce"],["/2020/12/04/wesites1/index.html","9a79cc48fe916fa9c2e4ec86819d3700"],["/2020/12/06/nokia808/index.html","e362120ee64455d5d1a93ffbfa66e09c"],["/2020/12/07/ipad1/index.html","9f108ccd09785ea1b6e48309cc7f0732"],["/2020/12/18/freesubscribes/index.html","1f6a71e91ebb80647bfc8cff8e5f3b2c"],["/2020/12/19/musics/index.html","2be8ee99f198537f716d74d8034cad03"],["/2020/12/19/shadowrocket/index.html","64cfff5c8e82753559a1db01bf8a3918"],["/2020/12/19/v2ray-windows/index.html","b72abc3a05ad8222fa61b57c11a9a279"],["/2020/12/19/v2rayng/index.html","546efcba46dd165c2a041e2b90baf7e2"],["/2020/12/20/beoplay/index.html","696b5b233bab5c573e87b5fbe0898cfe"],["/2020/12/20/订阅链接转换/index.html","a52516687e1deb6ad3f6bb337b45452a"],["/2020/12/21/chrome浏览器下载提速/index.html","5c1fedef3578d135a89755da08c5d7ee"],["/2020/12/21/免费128线程并发下载xdown/index.html","fa6350cbae82133bd7cc6ff1eca5a232"],["/2020/12/21/免费32线程下载软件ndm/index.html","feb873d455910e9de505663449260d22"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e2f726d86cf6c5c2848ecc0b237f8f01"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","e465dd9f4d9d2286d418e5013401a5dc"],["/2020/12/21/广告怎么知道我在想什么/index.html","275c9b18cee6538aaa6ebfcc2afce31b"],["/2020/12/21/无名·引子（小说试写）/index.html","30723f6a3c67b751cf57ec6f87d62442"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","c24420998dcbec5dbd8e7d51ebe038b6"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","44515429ae59ee10e90b18880b78906e"],["/2020/12/21/高速轻量下载器aria2/index.html","611e66b48664379e90949f278d589c55"],["/2020/12/22/2020-cee-roo/index.html","982a71d5d5a407117eeb63584cdd1d31"],["/2020/12/22/firefox插件、github、steam富强/index.html","bb082269644e2073b83dd3b70964542e"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","278ecd6d2755717a0f54c686e3637f0b"],["/2020/12/26/python-day-1/index.html","e0e1c3900383fa479b2462e1e5469df7"],["/2020/12/26/python-day-2/index.html","25e9b9c539bc93e52e649150ba26ae7a"],["/2020/12/26/度盘不限速下载方式一赏/index.html","4834a9757978104f74363c5359b019ca"],["/2020/12/26/添加开机自启软件/index.html","5a69586bac53a2cb8d10717c122b1869"],["/2020/12/26/电脑端截图方式一赏/index.html","96124819336d8a6a48398f8303d42037"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","ba2be2fe475288691452b7969319d68e"],["/2020/12/27/最安全的浏览器tor/index.html","627b15f5a59be92ccb392cafc6f09dc5"],["/2020/12/27/网易云刷等级和听歌数量/index.html","5cf41ba4ceb7d009c2fccb8ed4b61e4e"],["/2020/12/28/freenom申请免费域名/index.html","1c9c44218a350c16d9d4cb24fe005ca5"],["/2020/12/31/机场/index.html","e93e148fbe59226a132b39e61ab246e1"],["/2021/01/01/M1/index.html","c606cdc72bb0023008a7a4e77cd2229b"],["/2021/01/01/compress/index.html","a76ae6fc828245e38706aa3a6004bb70"],["/2021/01/01/infinityfree/index.html","d66852392025b9a35c89987ac3901f28"],["/2021/01/01/硬核翻墙/index.html","7387293499a94988349f057557bc2119"],["/2021/01/02/qq/index.html","682df6b8df5b007b2880718708ba567f"],["/2021/01/03/netch/index.html","67fa44f24abe34ce3f27f653eff5e40c"],["/2021/01/03/waifu2x/index.html","e5385615b43850e59bf296aa910b20a1"],["/2021/01/04/ads/index.html","66d234fa4e5d147d5f06c6089fcc759f"],["/2021/01/04/games/index.html","01fef8341f997fde3c2378645578611c"],["/2021/01/04/heroku/index.html","d0d14df378398ae64e693cb6d90fb032"],["/2021/01/06/movies/index.html","2790045e917be157a6ec5d0fccdcc979"],["/2021/01/07/google2020/index.html","9659428b3df584cba1358752643f8591"],["/2021/01/07/lucky/index.html","7e7b0293fd8fcce8a9d955878a12fc73"],["/2021/01/07/spotify/index.html","70298177d4f69b479d42f7d684605d5d"],["/2021/01/07/thunder/index.html","14060d4bc7ddf5fd2fc7697199d21fd5"],["/2021/01/08/adguardhome/index.html","e5a39dad95369f230dcd02f655be6454"],["/2021/01/10/IBM/index.html","c21f64a8733faba43f9ab4348f776743"],["/2021/01/10/potplayer/index.html","cf867306266116690564478fec04c4cf"],["/2021/01/10/sakuraanime/index.html","d32869064cda1870166b5a18474e5091"],["/2021/01/10/美剧星球/index.html","54e83c5ed2db83781b2f9ef5679a2c44"],["/2021/01/12/telegraph/index.html","2474fa9b1d8f29fee41f50944d878324"],["/2021/01/14/comics/index.html","514fd9c88562c15f5bbdc0d91d1a8c78"],["/2021/01/14/ftp/index.html","d39ecdd921f4741011e22f8fd114d343"],["/2021/01/14/oraclecloud/index.html","97fb6663616a8c868d644f838c2a934f"],["/2021/01/14/porkbun/index.html","bf87dde7c3303cc752952455290c84d6"],["/2021/01/14/powertoys/index.html","c592877901dfd8d2cc2e30c9b1d33692"],["/2021/01/14/taptap/index.html","d7ba346c6c63ec0c0eb92354f975882e"],["/2021/01/14/ubuntuvsftp/index.html","6ddc02b87c94d7260a5b72616652b9ad"],["/2021/01/14/小说/index.html","3189c2b283985ab446f2c565f094440e"],["/2021/01/15/freeproxies/index.html","8263303ce9e95c762e97e034a4bfeb58"],["/2021/01/15/incaseformat/index.html","2b53416fe69a2d30327ede84fadf1fa5"],["/2021/01/16/euserv/index.html","2bd9ea4659d1bfbe288cd6a2136bac3a"],["/2021/01/16/winxray/index.html","82fdabfff8c09e60f0198b019a4eabe9"],["/2021/01/18/qqreadhistory/index.html","1171979e2b61e7ba316f2b801d25729d"],["/2021/01/18/qqrevoke/index.html","601a565d2453fefbab6b9bb6c0148c12"],["/2021/01/19/freevpn/index.html","1f97ed44c112816c21498a1e8a25681f"],["/2021/01/20/browsertrack/index.html","5ec04bddbd4f3bb7f98294df620e73ef"],["/2021/01/20/v2ui/index.html","f43803a7c26cf0b44070e708b88348e5"],["/2021/01/21/failedtoconnect/index.html","bbc4481bc9c8c3ef1a7959d52895fa45"],["/2021/01/21/gitcalendar/index.html","d1b7122e10fc4ae7b6c8281903d9f17e"],["/2021/01/21/markdownformat/index.html","b37e3fc43061680fd3d922800b0f7fe7"],["/2021/01/21/markdowntable/index.html","ba9d0efe8da2f21d001870b55869011c"],["/2021/01/21/vercel/index.html","3fc5440e6cafd7c1c9e137c6823196ed"],["/2021/01/22/hardware/index.html","4596586620944befa194cc1a7b55dda3"],["/2021/01/22/muviz/index.html","068d280eb88d1ecf3140c5024006f824"],["/2021/01/22/randomapi/index.html","aac174b0a855827ac9935431b4ea0335"],["/2021/01/22/searchimages/index.html","adff746a7309009c2b4ae7c2ccacb8fc"],["/2021/01/23/RX文件管理器/index.html","85b44ff4d97053746a4972fb8bddb2f0"],["/2021/01/23/chromeflag/index.html","f504a510a4b89900ddbfad92d7444eb9"],["/2021/01/23/qttabbar/index.html","219f1f1297f61e5942df4a6cbca6abcd"],["/2021/01/24/githubspeedup/index.html","1f7c02bc5c65e27cc4e88e261e1bdee2"],["/2021/01/24/jsdelivr/index.html","2011ee4eb24f27a515986569b442f939"],["/2021/01/25/note/index.html","659794cc89abe03bdbe347b2db6e4a50"],["/2021/01/25/soul/index.html","7a80333ac83ace42ad613e15f7bfba9b"],["/2021/01/26/herokuxray/index.html","c86392cd423c7e789e8e19f43c755b05"],["/2021/01/27/proxypool/index.html","5c4ba159741148d63d588b1d405750bc"],["/2021/01/27/tracker/index.html","9cef7618bcff9da0c0613179bfb71615"],["/2021/01/30/pandownphp/index.html","9e85e16eb191a2677889e4f890d9bcdd"],["/2021/01/31/newgroup/index.html","a15d06c1da53e2711cb2cea4b1f279ff"],["/2021/02/01/clashlanguage/index.html","9afb75676320472142b405b577479924"],["/2021/02/01/encrypt/index.html","9e20526c01e831984fe9f2c60d9c9a4f"],["/2021/02/01/footermotion/index.html","58d3bbdab5428f246eb89f781ae2d700"],["/2021/02/01/gitter/index.html","8aca548f01659fdd339d8c278b325bc2"],["/2021/02/01/pixivtop50/index.html","1741e105dfeda5081510fe940123b0a2"],["/2021/02/01/scrollbar/index.html","05a121f614e5e622f68f78fa7df8bbd4"],["/2021/02/02/clover/index.html","298522f1ba611bfeee03cea9bfda9072"],["/2021/02/02/maya/index.html","92b713f1a6411a05572b184acf6133cc"],["/2021/02/02/speedcontroller/index.html","37d141572c77230da482bdd8a546c159"],["/2021/02/02/yesmusicplayer/index.html","0e2f2bbda9fd88e0628ffdf178732f29"],["/2021/02/03/lenovoonelite/index.html","f20da77b01a20a8dd87ade35f694514c"],["/2021/02/03/skipads/index.html","f1e6d9506ddf7bc51b6a3aabb50f501a"],["/2021/02/04/picseed/index.html","20b570eddb6d85b95af79ac62f5ba7f0"],["/2021/02/04/renren/index.html","52b209846ac9232fbe9aba86ce384617"],["/2021/02/04/serverstress/index.html","1bcad51731a7cbbd17bb0796facb1e5f"],["/2021/02/04/wikipediazh/index.html","74f2396871532a1fee3516beaaa074e0"],["/2021/02/05/googlevoice/index.html","76ba430a70e7fb70cfcda2e03c69e271"],["/2021/02/06/clashconnection/index.html","00152bfc79810bb2df68d8d9033e62ff"],["/2021/02/06/gvtransfer/index.html","8b456b97ea090345ed2eae0ef0406591"],["/2021/02/06/todesk/index.html","a68d4e95f7fd2e49d69af07ed46aae00"],["/2021/02/06/vpnblacklist/index.html","82ff2b054f4621965641bee03123b549"],["/2021/02/07/mklink/index.html","267040899c2c431c35cf1b722d8d4d5b"],["/2021/02/07/speedtest/index.html","efc6337418faeaf1792ed317076ba941"],["/2021/02/07/translate/index.html","ccad57c6c907b23a20a337667f9122d7"],["/2021/02/08/ewomail/index.html","f840b5877aa5f7cb07894b9e64cf1e47"],["/2021/02/10/officee5/index.html","16d47a824faf3dad1800606a96614d17"],["/2021/02/10/raidrive/index.html","a925d82c6b4bad04cd602c55d9470a0d"],["/2021/02/13/e5sub/index.html","bc5fbbb1e00db6e79a2ade4e012e529b"],["/2021/02/14/screen/index.html","22d361ff3865563047a4757628b979a7"],["/2021/02/15/clashtun/index.html","4983964e658a96d5c80f40b01824cdff"],["/2021/02/15/messageboom/index.html","0aed554540a92a124aea680948116bcb"],["/2021/02/15/oneindex/index.html","c124fd47c96916909fc766555b7bbeb1"],["/2021/02/16/govsites/index.html","0e8a50c629d77cfc6e02b97cd3024118"],["/2021/02/17/hexototypecho/index.html","75749052d6bb4698d13ef09bb3b74f9b"],["/2021/02/19/fiddler/index.html","dbfb87f0a4365456832dfb820e0d25b0"],["/2021/02/22/potplayerset/index.html","5c3db6f90dec208f81408377b3fcd1ad"],["/2021/02/22/studyresource/index.html","3185c19f393073f180ecd1ea64321bce"],["/2021/02/22/telegram/index.html","887a0c7f03bfb63990b6488c946db9a3"],["/2021/02/22/videos/index.html","58db920239fa48e2dbc6f4239624d6ad"],["/2021/02/24/mtproxy/index.html","5653cec6bb6a26bf3642274bb9fa7fc8"],["/2021/03/10/catchcat/index.html","9a33d6ebd2fbff1dd75b819f9f7e555b"],["/2021/03/10/neteasemusic/index.html","e85c77647b062bf30eb7c337ab5407d6"],["/2021/03/10/surfboard/index.html","848e323d49db887741612132c4225630"],["/2021/03/11/vpnandjc/index.html","b6a91e149fd5ecbf474b3d5d437fe38f"],["/2021/03/12/qrcodes/index.html","9f50804f667ec2ac5a709f19e2361b7e"],["/2021/03/20/qv2ray/index.html","d939d95d9223312f6865e096089c01dd"],["/2021/03/22/freevps/index.html","7da82f9bb98c8ba182cd1791f447ae61"],["/2021/03/24/tgstickers/index.html","1daacee7510b036a5ec5f0ed8b730b9e"],["/2021/03/25/clashx/index.html","193562f7dbc06598021b6e890a904efd"],["/2021/03/26/bingwallpaper/index.html","c73782793a374cf33bcf8f3e21d4e522"],["/2021/04/03/soutu/index.html","cc3db27e4d263bd6a7099614fe2fb111"],["/2021/04/03/tiyunti/index.html","59d3a8be5640383d9a1f18fc8d6e1314"],["/2021/04/04/btpanel/index.html","ff30b9c79a08caccf7e76cb03fe88f0c"],["/2021/04/06/atlasos/index.html","43396e102653e9d8485765dd157583bc"],["/2021/04/06/cleaner/index.html","c88522926aa1227ff97264cd0dd1655b"],["/404.html","9ab6a560e74e112183f8e14f5fcf4a51"],["/archives/2020/11/index.html","bdfdf6d5322fcfc4bf952d3aba94d871"],["/archives/2020/12/index.html","3fb3ec67df1e670265826537e0dbb89c"],["/archives/2020/12/page/2/index.html","6cf986c2251cfbd76bcf154c7409191a"],["/archives/2020/12/page/3/index.html","02e1aac518f86475d2e817470cfa4499"],["/archives/2020/index.html","f6f33a29d449fd71cf9c5ca3583de2d8"],["/archives/2020/page/2/index.html","58a30fde9d7b47da614975df2ca7a9d8"],["/archives/2020/page/3/index.html","1310d3674e6122b95fdd35454c7448bf"],["/archives/2021/01/index.html","9b49fd63d73fcf37673a3d37db0febea"],["/archives/2021/01/page/2/index.html","4d71c6dc9f67980b915167c8cc29ee88"],["/archives/2021/01/page/3/index.html","8a905161913e488154d414fc207176ed"],["/archives/2021/01/page/4/index.html","a419073b4740150185d9d3876cf966f2"],["/archives/2021/02/index.html","d0d50272252ca3f94a49fedfc2350dab"],["/archives/2021/02/page/2/index.html","3bd6c7b9c2b1ab41e6a3209090858071"],["/archives/2021/02/page/3/index.html","5dc83845a4900a22a39cc2fbfb385def"],["/archives/2021/03/index.html","345994fbd5538bd47206275dfc62c02a"],["/archives/2021/04/index.html","17c7a817d90de1f5200b26e334c0d495"],["/archives/2021/index.html","91f50cf5a31c60d21d42f5fbe475d2ea"],["/archives/2021/page/2/index.html","694167c4c2f6212a6b0846e6ff05b9e3"],["/archives/2021/page/3/index.html","d220511d173a7a16518c578c76d19556"],["/archives/2021/page/4/index.html","2381af6d0fc80cba1e38f4e2db5e4e8c"],["/archives/2021/page/5/index.html","d21cf76c19fcc29e887914fd031287ac"],["/archives/2021/page/6/index.html","9daa993d653e34a34854b1b5c033bdf1"],["/archives/2021/page/7/index.html","3d8468f2584de4359faab1bc144677b2"],["/archives/2021/page/8/index.html","57c3c56c879d2b784cacf5bcc333dac2"],["/archives/index.html","955522b70a96a76bd1ee2e83b306862d"],["/archives/page/10/index.html","f50d5ea96d359a14bea663f458157e27"],["/archives/page/11/index.html","030d655702b991329848602855f193a5"],["/archives/page/2/index.html","0efc5cc04e52234adc3e27dfd02e72e3"],["/archives/page/3/index.html","9e7bbbab3a64bdba6f0e36028a110ef1"],["/archives/page/4/index.html","2f2a11a316221d62d81e477e6802272d"],["/archives/page/5/index.html","c21249e01650da76ca56673195e8768a"],["/archives/page/6/index.html","bce065528cf0f9fa9713df4ea5ff0c5a"],["/archives/page/7/index.html","249564b8733c562f9b8a2b0fada4d33e"],["/archives/page/8/index.html","7147eff6ab9282ed05310005009d7cd2"],["/archives/page/9/index.html","13ada1179fe2597fc5a856cd5cedf445"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","e4b82fce766981180f255ea5d577a027"],["/categories/index.html","cd65225f9c55cb231366acd16783d113"],["/categories/下载/index.html","d92b6b2188a7e50969bff2f0291f3fea"],["/categories/安全/index.html","be0eac73392c2e673e2d667d35009efc"],["/categories/建站/index.html","d54477923ffa088bf459dce83ebda34a"],["/categories/机场测评/index.html","0ecc92676c84641ae33ba0086d951423"],["/categories/杂/index.html","494c852f8c22931f3ec26cc48a3b6f3f"],["/categories/杂/page/2/index.html","671d9b29005828baf46d4baea7b000ec"],["/categories/测评/index.html","fea683f27b8135e46c32f664b1a744a5"],["/categories/科学上网/index.html","e00cf0415750f46cae25109714f07875"],["/categories/科学上网/page/2/index.html","99cb4cbbed8221f952ceea0763895d50"],["/categories/编程/index.html","1c3b59de0dd235a2eb747fd307ca5983"],["/categories/网站/index.html","2801c0c844a3a26ebebf4cf708cca633"],["/categories/网站/page/2/index.html","f37f778ad8855ef4c513a0a78371223b"],["/categories/软件/index.html","f97e077a4f36bd5bdae2496476908f61"],["/categories/软件/page/2/index.html","6ff460f901223d9fa73fac828b2720d2"],["/categories/软件/page/3/index.html","ec92a4ad4459f23e093cbfbd46613720"],["/categories/软件/page/4/index.html","2525b6952a271ae74246e10039181494"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","40160552a148607daa68754f2b02369a"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","1cf207cfbffddbbc3359f6e03c73dd35"],["/ios/index.html","73da9d8fc5d1125359097b3beed05e6e"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","e8e08cb57ac57853e64ba38095b4cec8"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","69ef343ff0d8c1301f8cd4c4802c3613"],["/page/11/index.html","dca975bcdd5f2d4d6b8920ab2851109c"],["/page/2/index.html","e86c8ed0878014c8778b5eacd2f68ffc"],["/page/3/index.html","c4c0acf17f93826f968de73f14e3f624"],["/page/4/index.html","323851622c03a770b0e9a28ad0561058"],["/page/5/index.html","5b706c6e5fbc07623f81e863af6e936c"],["/page/6/index.html","8ca5c21b17fcee5f0025e1e36e35a7fc"],["/page/7/index.html","9a8fd42dd7737d8432702e38ac2ca889"],["/page/8/index.html","4945e1fbbfd1de8bff569befe618f99e"],["/page/9/index.html","68693ff46fed3705798864d3bf183086"],["/payment/index.html","47cbf70975425bb761e7518af0d5a1be"],["/privacy-policy/index.html","92a31535c0d0e5d6ed37c5ef5e2f4960"],["/rss2.xml","b79e0175f4e3bcbe419951a00f0c093e"],["/search.xml","bee1d168c4a30ec7fd51f1b9782f8754"],["/sitemap.xml","4ea244579580e81f5bee974edaf09950"],["/sw-register.js","2b54a29f495c7394c7511a1d115ac506"],["/tags/5t/index.html","629d821d618b2f7b6d6fef26056737b0"],["/tags/Bing/index.html","d45d3670755da7d5bb890f14e1cc1223"],["/tags/Clash/index.html","7c957fee92014cd3210a2a85b02e28d5"],["/tags/Clover/index.html","03969afe9f061dc8d8da0adbd46192b2"],["/tags/E5/index.html","f4268bbe8f5fc47e9b9f3443d53a0912"],["/tags/FTP/index.html","5673fad28dfc8cb835fddc0ba0326eb9"],["/tags/GitHub/index.html","1667331b2515503a4144bcaa2df80670"],["/tags/Heroku/index.html","ebd7c9595dd4c664986ae9ca1aa17a4c"],["/tags/Hexo/index.html","5ae659bba0ba3b88fec094489573b9eb"],["/tags/Lenovo/index.html","1ab2f132a93b564cd80ed8958b0732ff"],["/tags/Oneindex/index.html","07c3db4df337dbe256767557a630cab0"],["/tags/QQ/index.html","cae5427edf4dafd53c15bbfca4bb844c"],["/tags/QTTabbar/index.html","cf3b4ad7098a6a1606d2ba255a5218ad"],["/tags/RX文件管理器/index.html","bf51b9e3449928072d1f4e2a8727ff24"],["/tags/Todesk/index.html","45208a8abb859bfc1967a15e638a9300"],["/tags/Vercel/index.html","60719cb2ac5670a4632ad43128dd482f"],["/tags/ads/index.html","093290189a4a0113fe27854bdb65cbe8"],["/tags/api/index.html","04c195ad398cf4a9ebad639a0cb1aa52"],["/tags/app/index.html","9edb4eef1f736a5537ae323bfe83af05"],["/tags/atlas-os/index.html","bead7427ebf028a677e258365c4048b5"],["/tags/blacklist/index.html","cbac343cc71b79bea786feeb877e2f39"],["/tags/butterfly/index.html","2ea4c07bc08004085c3cf8185d564639"],["/tags/chrome/index.html","45d0d9a4ec219fba49de7a35247d9649"],["/tags/clashx/index.html","10da216016ef16401e56d5eb755b501a"],["/tags/cloudflare/index.html","0a489715f739f3746aa6963a94e071af"],["/tags/cmd/index.html","747487d3b4d0721530773728cf83aa5d"],["/tags/c盘/index.html","8f47773c72970d6e53dd615d5969fcdd"],["/tags/email/index.html","670358e27f8151a26fd247dcfd0e3d24"],["/tags/ewomail/index.html","d2149a1f7a72654f022825a0f20c3345"],["/tags/fiddler/index.html","594bd681f1d4d0718a37dd55fb430a11"],["/tags/flags/index.html","9d04a931dd3b34c7b2648a6ce4cff15c"],["/tags/footer，页脚/index.html","106f41392d12313a35a715f704f98aa5"],["/tags/galgame/index.html","fae83e58afce4dbbb55e54be358876f9"],["/tags/git/index.html","fbe05fc6adefe79368d96e5b984fb886"],["/tags/gitcalendar/index.html","6b47ee7dfd5294e6d08d95ff4e838655"],["/tags/google-voice/index.html","8c9870831441385dd0a03ba280e67df4"],["/tags/gv/index.html","e34998e383e18664443a4be717975e29"],["/tags/html/index.html","b6cda279d9193c3a146eea1f558de2c9"],["/tags/index-1.html","eeefe467c3ea8e92ba4f780dcafe5a29"],["/tags/index.html","e1a1756869180bfeab2442cd552aacfa"],["/tags/js/index.html","d90e028cb08801ba18f3a59b24afd4c4"],["/tags/jsdelivr/index.html","263e42f6d9aff8e0073a158ea1edb3f0"],["/tags/linux/index.html","51a68a2f0b255ebe2039a3886b04559b"],["/tags/macos/index.html","f4a5b8c471316df0e707b6d95f3372e9"],["/tags/madVR/index.html","f7fa0fd33392c15cc31fd87d1b3c3b2d"],["/tags/markdown/index.html","ae6ed1cfa4aeac5777ebb7348d76c8ab"],["/tags/maya/index.html","2ede93e0cdfa2f22656a935f237cf01d"],["/tags/mklink/index.html","8929df16ac9f3b760a25a083a750b03b"],["/tags/office-e5/index.html","6ee9c867ee224cb2f70c4d1226e940d9"],["/tags/onedrive/index.html","73b180d633fd39966d69dff365b00259"],["/tags/picGO/index.html","c720225f415da3c8ed58c714249507bc"],["/tags/pixiv/index.html","783b7d300a2c02afdf183452221e25bb"],["/tags/potplayer/index.html","cef4ef283de6e318dcc62f46bc3c2630"],["/tags/proxypool/index.html","14ad8a32a3e2306f0b3b91fb9b14989a"],["/tags/qbitorrent/index.html","4b526627b694d391f783cea726220804"],["/tags/raidrive/index.html","b515d4db21ee83566389fc1c2d1fed70"],["/tags/screen/index.html","2a54b641c24150bc0fe594d94a5d5f43"],["/tags/speedtest/index.html","9f58eee981492eaf6c91b49217756429"],["/tags/ss/index.html","007d4aecf613102b646e78dc0a571944"],["/tags/ssr/index.html","851fa0726c3c6fbe4125a83736ae5f8d"],["/tags/stickers/index.html","4b93ae75886c84bf5e001d70429d04bc"],["/tags/surfboard/index.html","38e8cfcff02a97c3a275c2a0f96321ef"],["/tags/tap/index.html","36fd1cb7a3c3ef56f53de3a8440ccce6"],["/tags/telegram/index.html","a1c61b0fe2ad5c008dcaa2467548e27d"],["/tags/telegram代理/index.html","5e408ec23870d2acaf9ff4eae2605b6e"],["/tags/tg/index.html","9c3dede6e78fea60d0f05f3884981335"],["/tags/tg代理/index.html","ba263db1f5d9f85393d8ee45a8695f64"],["/tags/top50/index.html","39a3330adac7597ed62d849f3ede5b8b"],["/tags/tracker/index.html","f813aa8a1c13f4b3a3b82d9ddcd04bc3"],["/tags/translate/index.html","3ffffa68c41875b448b74772bd32f322"],["/tags/translater/index.html","21c89b41f3c2dc45e765041efeb52c02"],["/tags/tun/index.html","a1e35948a6d927bc22bb8801ef583742"],["/tags/typecho/index.html","a33d77895efd288955b6a4643f676835"],["/tags/v2ray/index.html","531f548b3583c995bcf644a4ff62cc28"],["/tags/vpn/index.html","c5bdd0bd5d8e895c9536fd77802291f5"],["/tags/vps/index.html","48308e973be5a92aad42dc4cb095fe22"],["/tags/wallpaper/index.html","36cf1521487d81b3f4338722937ac921"],["/tags/windows/index.html","13f9b0695d84a5c7720bd21863e32131"],["/tags/windows端/index.html","1e8174965492618af2831adf4a4e09d5"],["/tags/xray/index.html","c7bb27dbb484fa10ccfbfcc9a3952509"],["/tags/yandex/index.html","d998bdcd34d9f4f4ff87620ab494ee4f"],["/tags/下载/index.html","173711e0c2347db3d8a16812ccef1077"],["/tags/不限速/index.html","9b860b89bc90b4b3c96c10bb9dc74c18"],["/tags/个人网盘/index.html","df6d3d5337b180c990fac1dbffda0faf"],["/tags/主题/index.html","e3100b2a3adcbccb1968f52c8a8871d1"],["/tags/二维码/index.html","6c844639151977a10e50d2f4dfb31663"],["/tags/云便签/index.html","882595cb8ed509b56accc5869459d511"],["/tags/云盘/index.html","fd4c8de4db7bbe43aa4b114e86e3d0a0"],["/tags/人人/index.html","0ee8e7d0825977c2307491c51901ed49"],["/tags/代理/index.html","0997b79bcf8297fca7f645f5ed7de46e"],["/tags/代码/index.html","dbe4f94d4258c61d3f0f3ef4aeddfaff"],["/tags/优选IP/index.html","d0c04e07ac9cdd061c7017fdc07fab8a"],["/tags/便签/index.html","76a0491497fd658393ad9c35d2d51a12"],["/tags/保号/index.html","cda0c8e2eaf1733ac248c51e88ad7784"],["/tags/免费/index.html","7b0624d7c9607e09a143dd6ea17bab1e"],["/tags/免费节点/index.html","4ae55083bc75259908bd785af5db37ba"],["/tags/冷门节点/index.html","9e37f44a32c70d269a2bf656f7e0dc44"],["/tags/删库塔/index.html","d7dfbbc3210611cb0f4efd1b2a6a75a4"],["/tags/加密/index.html","4079bf7b1c9cf9efe051c5096b741df1"],["/tags/动画/index.html","38c14ce1967291d2318d4357a5f68abd"],["/tags/博客/index.html","1bcf166bc178717e70c5cbe0a84375b7"],["/tags/卸载/index.html","f635aa113bacd8e758bae96c75520aed"],["/tags/历史记录/index.html","1fd5f948c475a0c8eb85f7aa4ea8b5ed"],["/tags/压力/index.html","189aff82eddb35ac7dcc85319ded4220"],["/tags/压缩包/index.html","a512d9d6efdfe3a24594cefab4f9fc1b"],["/tags/反代/index.html","fbe3e222c6c534f24a8d19d526f41f14"],["/tags/可视化/index.html","74c9dbcc38aaf6e9974fdb9ab016b2a3"],["/tags/命令/index.html","4438a233e186ae02f49eb654aeed468a"],["/tags/国家/index.html","86d2e796519a8ee70a6a2173c7185a14"],["/tags/图床/index.html","22e84a709cdbfc5e1b9ab239b72b60b5"],["/tags/图片/index.html","f787dc73e10ef987ad4ed04d35208ac3"],["/tags/域名/index.html","085ce300026c25738df56225a641f22d"],["/tags/壁纸/index.html","dc74c72df8d369f0ffd18db128b72348"],["/tags/多标签/index.html","26a011e696adda5ba85ab43c2d1d223a"],["/tags/奈飞/index.html","a7803884344b2bb336213e3943ecf40d"],["/tags/存储/index.html","ae22d528cf468e63ea1557f7f89b5503"],["/tags/学习/index.html","c448c496916efbb7878f2cb4c468c4cc"],["/tags/安全/index.html","fbeea6a0e2e469cbbdaee1a8d6bcec54"],["/tags/安卓/index.html","2e22371743fb118e08dc00754846ba86"],["/tags/宝塔/index.html","fb86de1e47adf3724f6d00156eabbe6b"],["/tags/小游戏/index.html","2ee0b514fadf3df24657e4950861fc7d"],["/tags/广告/index.html","cf532816d789179366ca2c10fb45a500"],["/tags/建站/index.html","574f2358b02bf2dc85d4a7f02bba0a85"],["/tags/影视/index.html","57a59fa5e79cd91a0f03eddd47d1d1f3"],["/tags/微信/index.html","69293071699553c07632187c42027986"],["/tags/快速启动/index.html","03438871fae17c36504bb383f432eee8"],["/tags/手机/index.html","1cb7d9a25898c25d946469e044fd76a4"],["/tags/托管/index.html","47d4986327d4434cac3d240aec736399"],["/tags/抓包/index.html","8180dfb68095012c7736331fbc2c0a48"],["/tags/抓取/index.html","03e3b51076ab1bf3893f34a818e82f7a"],["/tags/投屏/index.html","a03284fb522d43734742c4f2bc45049d"],["/tags/拓展功能/index.html","6ac35b90bf88b0ce2891b6401f5f73b6"],["/tags/挂载/index.html","df050cbb561ee2c0ceb97524e505b8b9"],["/tags/指纹/index.html","e93551e6f9bf76b964d051a5639e92ed"],["/tags/接口/index.html","214b53f8ca955e8db104634fa012adc9"],["/tags/提取图片/index.html","2759ed86e433068223c1215cadb7f41d"],["/tags/插件/index.html","4e137ee40f003895d8d00c13c848dedb"],["/tags/搜图/index.html","f0085312b5396dfb185030a9a136f9b5"],["/tags/搭建/index.html","4267e95cdb95c04b6ad5ae662f31fc35"],["/tags/撤回/index.html","2f44955bafbbf461634031a27f6deffb"],["/tags/播放器/index.html","cc8a3fa5a06281674f3fbc82d9abcf06"],["/tags/支付宝/index.html","502a17de348ccf440a0b095ac0df2cd7"],["/tags/政府网站/index.html","fa920279aa8c7114055ef87584ad0691"],["/tags/效率/index.html","88a1afc74ec313108f8660c2c7abf1f8"],["/tags/日历/index.html","ec5ab3e0de5ea26844ec810ced2de92f"],["/tags/服务器/index.html","5e24a11fe997b65ed5fd3ef13515431c"],["/tags/机场/index.html","a147a362a096f3a6a5788f0c95e421e2"],["/tags/查重/index.html","5f8421e05b285e94c84f482d1d899d62"],["/tags/桌面/index.html","38b7fe115a9a5ce872149203107bd1f8"],["/tags/梯子/index.html","52e4d659d3094f2f43dd0d987e1091d7"],["/tags/检测工具/index.html","aa347b02b9f0a169d7374ddb1c3e00aa"],["/tags/汉化/index.html","7c926b3099535abf9007d848ff89fb6a"],["/tags/测压/index.html","a76d3b962edca66b4d28589e7792796d"],["/tags/测速/index.html","950d76f1c4d3c606ee1cd378ed1c957a"],["/tags/浏览器/index.html","b0261ac986e53ff897c66607f074718e"],["/tags/清理/index.html","e29f03d5df520ee9242858756099ba65"],["/tags/滚动条/index.html","8c29f43e11b1c3ab7f8d9bfe4dadc605"],["/tags/灰色歌曲/index.html","02797a7ac3065ab85298b57009a566f9"],["/tags/电影/index.html","b3d930063b9b4c681971e75b5ce86572"],["/tags/电脑/index.html","e954ba63c6fd4024f37d5033224c12aa"],["/tags/电视剧/index.html","49d774622886e9ef41c7f95446bad7e4"],["/tags/白嫖/index.html","b9b6dc8973415b4133bed63c4cbe298e"],["/tags/百度/index.html","dfd38cb4dbf3b11e6e0c0d673261f901"],["/tags/百度云盘/index.html","b26a2f336014d40a9c9e7e7ad7781e6d"],["/tags/百科/index.html","585b1e8d0c7187801a8bfc6315c9364e"],["/tags/短信/index.html","eda634eb43c265c9a8813c9641bf204e"],["/tags/硬件/index.html","eb0a9f6e560ee478170271943edba06f"],["/tags/科学上网/index.html","d59d9dcf48e8f7e96a682787a772ee2d"],["/tags/空间/index.html","a30bc4d1a5aed7573baa27509a8ea167"],["/tags/笔记/index.html","1d9f2740504d5e612d3d988bdb58ded0"],["/tags/简洁/index.html","79df4d2fc9e32942b7a26beb5027bba1"],["/tags/简约/index.html","2612239ad55ddcb6a502dc9dc0f3a9e5"],["/tags/维基/index.html","fc4bbd21584d531aaf0e415f382517a4"],["/tags/网易云/index.html","da46a38370d3ea3b505d9c459b39b99e"],["/tags/网盘/index.html","8ec6dbee02c052a8f7f2732660a50cac"],["/tags/网站/index.html","0b633ec15d836e7cb05917d6313436bf"],["/tags/网络/index.html","9aa15fc8d61eb9049178a5b6a5626f68"],["/tags/美化/index.html","d0734a7b9b06fdb3fe9a9582f9aaa957"],["/tags/翻墙/index.html","2a9b3ed0c28da7cbdb7efa650ffa3ddc"],["/tags/翻译/index.html","ad5e3d3d49a5e34e927ae3610a13fb6b"],["/tags/翻译器/index.html","0d6b2d6bebe56705cfda40d514333e58"],["/tags/聊天/index.html","285fcd39a274b6216b2a22a61a6c445d"],["/tags/聊天室/index.html","e3a45591fe943ac991d397832091ea1d"],["/tags/联想/index.html","f7373b4fdbec33d1b4c401d46205d255"],["/tags/节点/index.html","fc0781a5d75612756ee46f8509f71513"],["/tags/虚拟手机号/index.html","25067c9274a4559fd3c9850ca169364d"],["/tags/补丁/index.html","5d1f3c054c7f0e9887c27f3e22505d1e"],["/tags/表情包/index.html","f1be1282c691d0549bac0fe0eb951ded"],["/tags/视频/index.html","d2de25367bcfe51bd79c8ec3347d4222"],["/tags/解析/index.html","8c597738baa5ec2f2cc104a73c1f2347"],["/tags/订阅链接/index.html","bb5a77192b20a4233b120ba5be61992d"],["/tags/记录/index.html","59d9650e00f9b78ab3da9087eee5d3d4"],["/tags/识图/index.html","7ce9cfa328e97262ce70c77d734f8dc1"],["/tags/语言/index.html","aaaf538f4e0fa6de81dde75ad9fc094c"],["/tags/资源/index.html","14a20f1e25b5a1c5ffbbe60b257a17e5"],["/tags/资源管理器/index.html","03d4bf7f436d839b5349829b8b7506e1"],["/tags/转移/index.html","61fb5b88144c0af6f8640624e7865e2d"],["/tags/软件/index.html","ad142dff4b83173dd2c04ced922dcde4"],["/tags/轰炸/index.html","8f64af7e1ca8eaa9809536a472f980ef"],["/tags/迁移/index.html","31a1eabefc4e002a32ddd67141a9d12e"],["/tags/远程控制/index.html","1e12986bdf4e5e875a544f7f751458eb"],["/tags/连接/index.html","fd065f2be1ceb42af85873256a3cc0a2"],["/tags/追踪/index.html","799f8beb827c2843054eea86e9bc5927"],["/tags/速度/index.html","c274258329db244257effec06bff9d4d"],["/tags/邮箱/index.html","9fa95c80a8e80830cc9823b4e4685929"],["/tags/酷炫/index.html","33dc09aaf49eb6c3840fe49ecea7a7b5"],["/tags/钓鱼/index.html","72b84d9acf11f3304711fa2eb4ff19f9"],["/tags/镜像/index.html","696b3972a3e5fea2f4a5713e53eac2cd"],["/tags/随机/index.html","c143d7cc9583d6e6390edbece07f7a48"],["/tags/隐藏/index.html","767feba6a12d41c837ef1ad2535887ea"],["/tags/面板/index.html","e0058fafdcedcb6974072c140653b4a5"],["/tags/音乐/index.html","0a5a145c7fc03820773af023717a6ada"],["/tags/高颜值/index.html","6eadffbe9fe792fbe1bfec4b47de1b45"],["/tags/魔改/index.html","e4257d13c6a7c6887ca1af99ea382f0f"],["/tags/黑名单/index.html","266f3bf421a9d2516b9c410d494680af"],["/urls/index.html","c71145bb8c26c77431e15674014d210d"],["/vps/index.html","a1e92c09c24396793dd07d86714fdbfd"],["/支持/index.html","bb42f663a8d44b29e72af075d8c6405c"]];
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
