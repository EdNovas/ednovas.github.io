/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","ca5727b0e52bdb5abf7231f164c72ce7"],["/2020/11/29/clash-windows/index.html","523eb92fb74e917916067a347c46297d"],["/2020/11/30/websites2/index.html","02d2d14f1a3225ace05da452e10cf268"],["/2020/12/04/iphone4s/index.html","dd6f46349efca5c56f716307f9ae9c7c"],["/2020/12/04/onenote/index.html","e012bb897974ccd4fd21829949fe1fce"],["/2020/12/04/wesites1/index.html","9a79cc48fe916fa9c2e4ec86819d3700"],["/2020/12/06/nokia808/index.html","e362120ee64455d5d1a93ffbfa66e09c"],["/2020/12/07/ipad1/index.html","9f108ccd09785ea1b6e48309cc7f0732"],["/2020/12/18/freesubscribes/index.html","d9fd28d94edd6eec44a838b445008d13"],["/2020/12/19/musics/index.html","2be8ee99f198537f716d74d8034cad03"],["/2020/12/19/shadowrocket/index.html","4eb6867baefd0064bb04f20269a28509"],["/2020/12/19/v2ray-windows/index.html","fbfa65bde5b11343a28d6c26887a0320"],["/2020/12/19/v2rayng/index.html","546efcba46dd165c2a041e2b90baf7e2"],["/2020/12/20/beoplay/index.html","696b5b233bab5c573e87b5fbe0898cfe"],["/2020/12/20/订阅链接转换/index.html","a52516687e1deb6ad3f6bb337b45452a"],["/2020/12/21/chrome浏览器下载提速/index.html","5c1fedef3578d135a89755da08c5d7ee"],["/2020/12/21/免费128线程并发下载xdown/index.html","fa6350cbae82133bd7cc6ff1eca5a232"],["/2020/12/21/免费32线程下载软件ndm/index.html","feb873d455910e9de505663449260d22"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e2f726d86cf6c5c2848ecc0b237f8f01"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","e465dd9f4d9d2286d418e5013401a5dc"],["/2020/12/21/广告怎么知道我在想什么/index.html","275c9b18cee6538aaa6ebfcc2afce31b"],["/2020/12/21/无名·引子（小说试写）/index.html","30723f6a3c67b751cf57ec6f87d62442"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","c24420998dcbec5dbd8e7d51ebe038b6"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","44515429ae59ee10e90b18880b78906e"],["/2020/12/21/高速轻量下载器aria2/index.html","611e66b48664379e90949f278d589c55"],["/2020/12/22/2020-cee-roo/index.html","982a71d5d5a407117eeb63584cdd1d31"],["/2020/12/22/firefox插件、github、steam富强/index.html","bb082269644e2073b83dd3b70964542e"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","278ecd6d2755717a0f54c686e3637f0b"],["/2020/12/26/python-day-1/index.html","e0e1c3900383fa479b2462e1e5469df7"],["/2020/12/26/python-day-2/index.html","25e9b9c539bc93e52e649150ba26ae7a"],["/2020/12/26/度盘不限速下载方式一赏/index.html","4834a9757978104f74363c5359b019ca"],["/2020/12/26/添加开机自启软件/index.html","5a69586bac53a2cb8d10717c122b1869"],["/2020/12/26/电脑端截图方式一赏/index.html","96124819336d8a6a48398f8303d42037"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","ba2be2fe475288691452b7969319d68e"],["/2020/12/27/最安全的浏览器tor/index.html","627b15f5a59be92ccb392cafc6f09dc5"],["/2020/12/27/网易云刷等级和听歌数量/index.html","5cf41ba4ceb7d009c2fccb8ed4b61e4e"],["/2020/12/28/freenom申请免费域名/index.html","1c9c44218a350c16d9d4cb24fe005ca5"],["/2020/12/31/机场/index.html","e93e148fbe59226a132b39e61ab246e1"],["/2021/01/01/M1/index.html","c606cdc72bb0023008a7a4e77cd2229b"],["/2021/01/01/compress/index.html","a76ae6fc828245e38706aa3a6004bb70"],["/2021/01/01/infinityfree/index.html","d66852392025b9a35c89987ac3901f28"],["/2021/01/01/硬核翻墙/index.html","7387293499a94988349f057557bc2119"],["/2021/01/02/qq/index.html","682df6b8df5b007b2880718708ba567f"],["/2021/01/03/netch/index.html","67fa44f24abe34ce3f27f653eff5e40c"],["/2021/01/03/waifu2x/index.html","e5385615b43850e59bf296aa910b20a1"],["/2021/01/04/ads/index.html","66d234fa4e5d147d5f06c6089fcc759f"],["/2021/01/04/games/index.html","01fef8341f997fde3c2378645578611c"],["/2021/01/04/heroku/index.html","d0d14df378398ae64e693cb6d90fb032"],["/2021/01/06/movies/index.html","2790045e917be157a6ec5d0fccdcc979"],["/2021/01/07/google2020/index.html","9659428b3df584cba1358752643f8591"],["/2021/01/07/lucky/index.html","7e7b0293fd8fcce8a9d955878a12fc73"],["/2021/01/07/spotify/index.html","70298177d4f69b479d42f7d684605d5d"],["/2021/01/07/thunder/index.html","14060d4bc7ddf5fd2fc7697199d21fd5"],["/2021/01/08/adguardhome/index.html","e5a39dad95369f230dcd02f655be6454"],["/2021/01/10/IBM/index.html","c21f64a8733faba43f9ab4348f776743"],["/2021/01/10/potplayer/index.html","cf867306266116690564478fec04c4cf"],["/2021/01/10/sakuraanime/index.html","d32869064cda1870166b5a18474e5091"],["/2021/01/10/美剧星球/index.html","54e83c5ed2db83781b2f9ef5679a2c44"],["/2021/01/12/telegraph/index.html","2474fa9b1d8f29fee41f50944d878324"],["/2021/01/14/comics/index.html","514fd9c88562c15f5bbdc0d91d1a8c78"],["/2021/01/14/ftp/index.html","d39ecdd921f4741011e22f8fd114d343"],["/2021/01/14/oraclecloud/index.html","97fb6663616a8c868d644f838c2a934f"],["/2021/01/14/porkbun/index.html","bf87dde7c3303cc752952455290c84d6"],["/2021/01/14/powertoys/index.html","c592877901dfd8d2cc2e30c9b1d33692"],["/2021/01/14/taptap/index.html","d7ba346c6c63ec0c0eb92354f975882e"],["/2021/01/14/ubuntuvsftp/index.html","6ddc02b87c94d7260a5b72616652b9ad"],["/2021/01/14/小说/index.html","3189c2b283985ab446f2c565f094440e"],["/2021/01/15/freeproxies/index.html","8263303ce9e95c762e97e034a4bfeb58"],["/2021/01/15/incaseformat/index.html","2b53416fe69a2d30327ede84fadf1fa5"],["/2021/01/16/euserv/index.html","2bd9ea4659d1bfbe288cd6a2136bac3a"],["/2021/01/16/winxray/index.html","82fdabfff8c09e60f0198b019a4eabe9"],["/2021/01/18/qqreadhistory/index.html","1171979e2b61e7ba316f2b801d25729d"],["/2021/01/18/qqrevoke/index.html","601a565d2453fefbab6b9bb6c0148c12"],["/2021/01/19/freevpn/index.html","1f97ed44c112816c21498a1e8a25681f"],["/2021/01/20/browsertrack/index.html","5ec04bddbd4f3bb7f98294df620e73ef"],["/2021/01/20/v2ui/index.html","f43803a7c26cf0b44070e708b88348e5"],["/2021/01/21/failedtoconnect/index.html","bbc4481bc9c8c3ef1a7959d52895fa45"],["/2021/01/21/gitcalendar/index.html","d1b7122e10fc4ae7b6c8281903d9f17e"],["/2021/01/21/markdownformat/index.html","b37e3fc43061680fd3d922800b0f7fe7"],["/2021/01/21/markdowntable/index.html","ba9d0efe8da2f21d001870b55869011c"],["/2021/01/21/vercel/index.html","3fc5440e6cafd7c1c9e137c6823196ed"],["/2021/01/22/hardware/index.html","4596586620944befa194cc1a7b55dda3"],["/2021/01/22/muviz/index.html","068d280eb88d1ecf3140c5024006f824"],["/2021/01/22/randomapi/index.html","aac174b0a855827ac9935431b4ea0335"],["/2021/01/22/searchimages/index.html","adff746a7309009c2b4ae7c2ccacb8fc"],["/2021/01/23/RX文件管理器/index.html","85b44ff4d97053746a4972fb8bddb2f0"],["/2021/01/23/chromeflag/index.html","f504a510a4b89900ddbfad92d7444eb9"],["/2021/01/23/qttabbar/index.html","219f1f1297f61e5942df4a6cbca6abcd"],["/2021/01/24/githubspeedup/index.html","1f7c02bc5c65e27cc4e88e261e1bdee2"],["/2021/01/24/jsdelivr/index.html","2011ee4eb24f27a515986569b442f939"],["/2021/01/25/note/index.html","659794cc89abe03bdbe347b2db6e4a50"],["/2021/01/25/soul/index.html","7a80333ac83ace42ad613e15f7bfba9b"],["/2021/01/26/herokuxray/index.html","c86392cd423c7e789e8e19f43c755b05"],["/2021/01/27/proxypool/index.html","5c4ba159741148d63d588b1d405750bc"],["/2021/01/27/tracker/index.html","9cef7618bcff9da0c0613179bfb71615"],["/2021/01/30/pandownphp/index.html","9e85e16eb191a2677889e4f890d9bcdd"],["/2021/01/31/newgroup/index.html","a15d06c1da53e2711cb2cea4b1f279ff"],["/2021/02/01/clashlanguage/index.html","9afb75676320472142b405b577479924"],["/2021/02/01/encrypt/index.html","9e20526c01e831984fe9f2c60d9c9a4f"],["/2021/02/01/footermotion/index.html","58d3bbdab5428f246eb89f781ae2d700"],["/2021/02/01/gitter/index.html","8aca548f01659fdd339d8c278b325bc2"],["/2021/02/01/pixivtop50/index.html","1741e105dfeda5081510fe940123b0a2"],["/2021/02/01/scrollbar/index.html","05a121f614e5e622f68f78fa7df8bbd4"],["/2021/02/02/clover/index.html","298522f1ba611bfeee03cea9bfda9072"],["/2021/02/02/maya/index.html","92b713f1a6411a05572b184acf6133cc"],["/2021/02/02/speedcontroller/index.html","37d141572c77230da482bdd8a546c159"],["/2021/02/02/yesmusicplayer/index.html","0e2f2bbda9fd88e0628ffdf178732f29"],["/2021/02/03/lenovoonelite/index.html","f20da77b01a20a8dd87ade35f694514c"],["/2021/02/03/skipads/index.html","f1e6d9506ddf7bc51b6a3aabb50f501a"],["/2021/02/04/picseed/index.html","20b570eddb6d85b95af79ac62f5ba7f0"],["/2021/02/04/renren/index.html","52b209846ac9232fbe9aba86ce384617"],["/2021/02/04/serverstress/index.html","1bcad51731a7cbbd17bb0796facb1e5f"],["/2021/02/04/wikipediazh/index.html","74f2396871532a1fee3516beaaa074e0"],["/2021/02/05/googlevoice/index.html","76ba430a70e7fb70cfcda2e03c69e271"],["/2021/02/06/clashconnection/index.html","00152bfc79810bb2df68d8d9033e62ff"],["/2021/02/06/gvtransfer/index.html","8b456b97ea090345ed2eae0ef0406591"],["/2021/02/06/todesk/index.html","a68d4e95f7fd2e49d69af07ed46aae00"],["/2021/02/06/vpnblacklist/index.html","82ff2b054f4621965641bee03123b549"],["/2021/02/07/mklink/index.html","267040899c2c431c35cf1b722d8d4d5b"],["/2021/02/07/speedtest/index.html","efc6337418faeaf1792ed317076ba941"],["/2021/02/07/translate/index.html","ccad57c6c907b23a20a337667f9122d7"],["/2021/02/08/ewomail/index.html","f840b5877aa5f7cb07894b9e64cf1e47"],["/2021/02/10/officee5/index.html","16d47a824faf3dad1800606a96614d17"],["/2021/02/10/raidrive/index.html","a925d82c6b4bad04cd602c55d9470a0d"],["/2021/02/13/e5sub/index.html","bc5fbbb1e00db6e79a2ade4e012e529b"],["/2021/02/14/screen/index.html","22d361ff3865563047a4757628b979a7"],["/2021/02/15/clashtun/index.html","4983964e658a96d5c80f40b01824cdff"],["/2021/02/15/messageboom/index.html","0aed554540a92a124aea680948116bcb"],["/2021/02/15/oneindex/index.html","c124fd47c96916909fc766555b7bbeb1"],["/2021/02/16/govsites/index.html","0e8a50c629d77cfc6e02b97cd3024118"],["/2021/02/17/hexototypecho/index.html","75749052d6bb4698d13ef09bb3b74f9b"],["/2021/02/19/fiddler/index.html","dbfb87f0a4365456832dfb820e0d25b0"],["/2021/02/22/potplayerset/index.html","5c3db6f90dec208f81408377b3fcd1ad"],["/2021/02/22/studyresource/index.html","3185c19f393073f180ecd1ea64321bce"],["/2021/02/22/telegram/index.html","887a0c7f03bfb63990b6488c946db9a3"],["/2021/02/22/videos/index.html","58db920239fa48e2dbc6f4239624d6ad"],["/2021/02/24/mtproxy/index.html","5653cec6bb6a26bf3642274bb9fa7fc8"],["/2021/03/10/catchcat/index.html","9a33d6ebd2fbff1dd75b819f9f7e555b"],["/2021/03/10/neteasemusic/index.html","e85c77647b062bf30eb7c337ab5407d6"],["/2021/03/10/surfboard/index.html","848e323d49db887741612132c4225630"],["/2021/03/11/vpnandjc/index.html","b6a91e149fd5ecbf474b3d5d437fe38f"],["/2021/03/12/qrcodes/index.html","9f50804f667ec2ac5a709f19e2361b7e"],["/2021/03/20/qv2ray/index.html","d939d95d9223312f6865e096089c01dd"],["/2021/03/22/freevps/index.html","7da82f9bb98c8ba182cd1791f447ae61"],["/2021/03/24/tgstickers/index.html","1daacee7510b036a5ec5f0ed8b730b9e"],["/2021/03/25/clashx/index.html","193562f7dbc06598021b6e890a904efd"],["/2021/03/26/bingwallpaper/index.html","c73782793a374cf33bcf8f3e21d4e522"],["/2021/04/03/soutu/index.html","cc3db27e4d263bd6a7099614fe2fb111"],["/2021/04/03/tiyunti/index.html","4ece1a589bdc3beb00a9a42a6d0c564d"],["/2021/04/04/btpanel/index.html","ff30b9c79a08caccf7e76cb03fe88f0c"],["/2021/04/06/atlasos/index.html","43396e102653e9d8485765dd157583bc"],["/2021/04/06/cleaner/index.html","c88522926aa1227ff97264cd0dd1655b"],["/404.html","1aa1b545614b47979f00c80d8f7eabc0"],["/archives/2020/11/index.html","555052d15a3232d0ae94eb925654dffe"],["/archives/2020/12/index.html","f85f6fe2d88b132c4f3de97b02009ece"],["/archives/2020/12/page/2/index.html","0a36c19eef6b0db796e4491a850ba4d9"],["/archives/2020/12/page/3/index.html","932119aedf1cc87403134c30b9d6e23b"],["/archives/2020/index.html","4ccbe6425903f523cdf71d2fab52066e"],["/archives/2020/page/2/index.html","8bcb0012c3da3adfc36dd75808f27798"],["/archives/2020/page/3/index.html","219d768ea2c0d0c0c1e115a946c9d387"],["/archives/2021/01/index.html","75730d572546fd805eb0292458185e32"],["/archives/2021/01/page/2/index.html","464879a8de5af87a9ab9c39a6c07c455"],["/archives/2021/01/page/3/index.html","52c47e57f64cee763983560903f617f7"],["/archives/2021/01/page/4/index.html","1d44bab1f6f6d2834b4a6d662adf997b"],["/archives/2021/02/index.html","3f3b6f4fce8fe5b4e933cafca6486390"],["/archives/2021/02/page/2/index.html","45cbd93f74686630f862ecf90c8c7f2e"],["/archives/2021/02/page/3/index.html","982f28a6c7923ea7e65a02c6b8bde833"],["/archives/2021/03/index.html","963b58daf8369187a01ccc08d99fcdde"],["/archives/2021/04/index.html","aae8fe3360627744ffeeec18a088423b"],["/archives/2021/index.html","66febfc0a286cabceb8739fe860d6bea"],["/archives/2021/page/2/index.html","38f7466f23169bd582ef259415fc4007"],["/archives/2021/page/3/index.html","d99400bf2ab908f124db124e363346f1"],["/archives/2021/page/4/index.html","092c280d6f2ba763407820eb708323a2"],["/archives/2021/page/5/index.html","c7e797874d02cb11400e08df0c7a8ef9"],["/archives/2021/page/6/index.html","0fe37f0fd28fbf6ff6d7f6b609a78572"],["/archives/2021/page/7/index.html","f506fab6638759835d95ad5d2eb77373"],["/archives/2021/page/8/index.html","15b114726d76416ba00e754910ffe633"],["/archives/index.html","0f42de4b07e1497e8aabab7f6a360a91"],["/archives/page/10/index.html","ed0b222b32c60bea8c5de7a6d5107ee0"],["/archives/page/11/index.html","f296be717dc460dd2f4645e9f66e8367"],["/archives/page/2/index.html","a8d44b5f76a0aed63776e4d8e8b2d2e4"],["/archives/page/3/index.html","678bc58da09afbfb6733e58e017b1c4a"],["/archives/page/4/index.html","62b35de175fdf7362a279cd3e8ff35a0"],["/archives/page/5/index.html","70c2dcd71f20110c9641a598538376d9"],["/archives/page/6/index.html","a75cf4ee2a06fae295f84fa7c7af0b63"],["/archives/page/7/index.html","38b8b6dd9aacfcc4b626c94419755316"],["/archives/page/8/index.html","ebde9fe21467a30d26338706a036c068"],["/archives/page/9/index.html","102d7edac8ac4066088bc424e69133a1"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","912166fc444015419d92f689f440c6b9"],["/categories/index.html","8dc15d283f94087c2b95604bab220223"],["/categories/下载/index.html","91107f32a453955c08c2c39234ac773d"],["/categories/安全/index.html","fd0c6c1e72a7b6e6081637ad7fc0fc3b"],["/categories/建站/index.html","1e297fe9993397d20d4f8ba5134513ac"],["/categories/机场测评/index.html","7e1d8e7a36a1ee49e93e984c36af6f3c"],["/categories/杂/index.html","f7fb283ae6890fe5f3ef92c77f3bb3e5"],["/categories/杂/page/2/index.html","a1c8a92bc44255e2e129a0570758ad3b"],["/categories/测评/index.html","51dc4ce55f51c97fda337f23847eebce"],["/categories/科学上网/index.html","30ae686e2eeceeb75633c07d0482daec"],["/categories/科学上网/page/2/index.html","4a1e5480b524a1d07649f29e79518efe"],["/categories/编程/index.html","ce5b3e4eb9e38ff61ff3c8b9718af2fb"],["/categories/网站/index.html","522e6e76544e451fea1fffb3f0c097b8"],["/categories/网站/page/2/index.html","0579bb3019ac34ef2e26e62d728beeea"],["/categories/软件/index.html","7623fc523e98330d6ee4626c0b9d8ec8"],["/categories/软件/page/2/index.html","22c36229ab280e5008da71c7b26ac40b"],["/categories/软件/page/3/index.html","766b5776131d0582135431059b52c3a3"],["/categories/软件/page/4/index.html","64f890a27b6ed21b064faa8305b1f98b"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","58750b9fd1797d8ec63a2d6cb8b5b1bc"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","fdcad4d71b238dd3e70029b559926a9f"],["/ios/index.html","17cf57b35265151e8a9dd562e5a1f010"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","de29de039dabd9c7d48b2ea6b4b22b5a"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","2d090127eefe56255250d8b55fcacd2c"],["/page/11/index.html","0cc892978079afcb911b4d0095504d48"],["/page/2/index.html","f386df8c8c3cf13e313cae4d40f1c667"],["/page/3/index.html","47186fd58d53601fb26668977e447163"],["/page/4/index.html","ebd5287845d501e93678e1e1f5b974b9"],["/page/5/index.html","86d5da733f92e7192f8556bbe33e3c09"],["/page/6/index.html","e23a7ad5e3d800e3918969fed756a36a"],["/page/7/index.html","8ad8154adc27427ada0d3c82041c51cf"],["/page/8/index.html","f632e2d2fe3aa85b88b67dcf33d7d305"],["/page/9/index.html","8f5131ae169bb91064525a2615534769"],["/payment/index.html","69082842667b261c3fcb844baedac2ac"],["/privacy-policy/index.html","ca2f592b2ecbc9ca97dba43b9a7c86e4"],["/rss2.xml","9355d48b427cb078dc3d9eec890d24e9"],["/search.xml","220a3eb3fb25c168ed3248f2b131c308"],["/sitemap.xml","cbd2b2ef70921814725cddeee8b497ba"],["/sw-register.js","6ed01d8bd77b7ddedecca108348346a6"],["/tags/5t/index.html","e3a8dfb592f6a46fa9d2e82807a1e6e7"],["/tags/Bing/index.html","c034316e95cd44b9d912677835f09a8b"],["/tags/Clash/index.html","4a122e01e6d1cbf9e99aa327b0f5b623"],["/tags/Clover/index.html","e353a2c0b3e6520e7eb1fce32936233f"],["/tags/E5/index.html","d8724869ce2df2f653eaf32da46ec57f"],["/tags/FTP/index.html","27ed6f4763f32e409ae089e569d1c14b"],["/tags/GitHub/index.html","c9d9b7668c08002c926184812820a7ad"],["/tags/Heroku/index.html","8396ecf6cc0e241e8cf8fb5623be1501"],["/tags/Hexo/index.html","3d78e1b80bc58163b3a0123f5b0f0c91"],["/tags/Lenovo/index.html","7444954d5108d37718ff5f724228dbcc"],["/tags/Oneindex/index.html","ea23d4b7746d2ef6b088a18badde5d85"],["/tags/QQ/index.html","991dee83e14c7ca459f620c249d7714a"],["/tags/QTTabbar/index.html","9154b39cad722d8413ebfc2579b8875e"],["/tags/RX文件管理器/index.html","735f7375dbc4484bc0f265232f06e827"],["/tags/Todesk/index.html","717165f5013a58f2c2f3b86f59181fd0"],["/tags/Vercel/index.html","075e7dda9204c6e751ac46c4f0efc734"],["/tags/ads/index.html","d5b19272156b935e0fc2f7820999a6c6"],["/tags/api/index.html","456cf4b5fd039acd9c7d75093e54183f"],["/tags/app/index.html","fe06ac7a8ca8350303187d4a30235182"],["/tags/atlas-os/index.html","21cd32e5aec1cb0d623593df74a69206"],["/tags/blacklist/index.html","f9323d4d86f797f3aa7d400dfe04088e"],["/tags/butterfly/index.html","2cf86f5a8009267b4552d0ea50c7baca"],["/tags/chrome/index.html","b82a5a96b4943ea39df48acb21a6a3fd"],["/tags/clashx/index.html","a2b194c317ab4174feaad22ec09ffd5e"],["/tags/cloudflare/index.html","aa502249832614fe6393b06963d06c5d"],["/tags/cmd/index.html","54f7b98e82f69e29d33fe2b8c7fdd1aa"],["/tags/c盘/index.html","8817b0c51041fa6c5a8524d25672a7a7"],["/tags/email/index.html","29006c51ef2d7f44e5333a1a43cec9c4"],["/tags/ewomail/index.html","cbacb7a8ca7838413c867bb71d93eefc"],["/tags/fiddler/index.html","c92afbf9e48ef6dc38d69553d6ce6156"],["/tags/flags/index.html","e398cc2ff8242f9b45552197b68ce94d"],["/tags/footer，页脚/index.html","effa0fac560084139c9d99ba10321799"],["/tags/galgame/index.html","021ff37db45825bdaf11e122b0472b2b"],["/tags/git/index.html","f37ee0e15484a49ba80015f6190dccd2"],["/tags/gitcalendar/index.html","f4c038742ade24f62a5d7807fd1eba36"],["/tags/google-voice/index.html","2c6d0ba1b4b626bba1f1b41eba77d12f"],["/tags/gv/index.html","056b9cfcba65f0e10bc7b1c4b5edfef1"],["/tags/html/index.html","fb53ec32fd825f1c0e45ec1b1e76aa59"],["/tags/index-1.html","6b551fb0c80960d81917f795a5b9f994"],["/tags/index.html","01303908412e95a3f10fe154aa5f8610"],["/tags/js/index.html","e3dc1de92328b0d9909345598e44deb6"],["/tags/jsdelivr/index.html","591ed2db77a70f0cc646dabb5d446769"],["/tags/linux/index.html","edeb10db419647ab53377546e995414a"],["/tags/macos/index.html","99ebdee28eb388ddf1162e65dd1625f6"],["/tags/madVR/index.html","11850052b5560da2eeeddcf2a29f50b6"],["/tags/markdown/index.html","281c3c7fbf1834ae100eecd2afaf8531"],["/tags/maya/index.html","234749bf1d6937a552a65a93c9a92faa"],["/tags/mklink/index.html","e714bbfbb88e4520778805a1cb15fea5"],["/tags/office-e5/index.html","9ea5bcf6abeca604ebb77941126ab4fe"],["/tags/onedrive/index.html","2204b1af72bd0493c5c7dbe0354552a8"],["/tags/picGO/index.html","3ce57520c9f38a151b61a610a75d2861"],["/tags/pixiv/index.html","3cece43a89a75c330f478959f2fef679"],["/tags/potplayer/index.html","a58f085685aa46a7bbbd8a2e15e42915"],["/tags/proxypool/index.html","9afc556891ac8ab411641568daa5a82a"],["/tags/qbitorrent/index.html","26360196ac7ad81b27e3b68e65d6db42"],["/tags/raidrive/index.html","3e1ba9dd2d0018656e6eb754fe2617da"],["/tags/screen/index.html","d3eea6d82fc6d6034b16b66a7a682714"],["/tags/speedtest/index.html","56ab60f2b483dfab660e8e13b499c24e"],["/tags/ss/index.html","58eea5db26dd08db384ae9213e8b4b67"],["/tags/ssr/index.html","0b01b5077c60006d6b0c540f19568e01"],["/tags/stickers/index.html","05c9843cbfd6db6239c157e8856903fc"],["/tags/surfboard/index.html","fb13334e4308744141bff916a38a5d52"],["/tags/tap/index.html","4e6a4084d4e6c0dff5864d69b6ab11d0"],["/tags/telegram/index.html","206435cab4d871b1df5a5ffa17648aa3"],["/tags/telegram代理/index.html","5b6cde633d3c2f27485aa1807f804a81"],["/tags/tg/index.html","e07b64b99894aa0692f7c5c3947a6245"],["/tags/tg代理/index.html","399e71c214a09fc2819a702dfb713df3"],["/tags/top50/index.html","3467721ed3e038041f42f429b1da96d0"],["/tags/tracker/index.html","db26d6b02451dffacbb13022b6abf322"],["/tags/translate/index.html","70917c6484bf937ec0763fb2fbbb3db6"],["/tags/translater/index.html","5e739d124973558277b9b919079be53f"],["/tags/tun/index.html","b46b49a9031fdd03f9cb58a1a5ca6e05"],["/tags/typecho/index.html","6d7272c07facc1abaece90fc6a0c9e2d"],["/tags/v2ray/index.html","ec39d7da9dcc8fdf4328f62325a63403"],["/tags/vpn/index.html","07b110a3868a4af3055f1eb7318480f7"],["/tags/vps/index.html","9ad787cc7f0b3d94282b041198a24711"],["/tags/wallpaper/index.html","94be4c14a2c270423b2673eada12a5ad"],["/tags/windows/index.html","43a3b8ad2b2cf43daa5480f7ff408f22"],["/tags/windows端/index.html","10b9da6fcaa7b32cbd6adb0ccad91d6f"],["/tags/xray/index.html","304baa470826af1a8be70ebfbd03b5f2"],["/tags/yandex/index.html","6b2d752733522b6e0dbd52c23765160c"],["/tags/下载/index.html","e6a7efa4b2c3a44e5d0782ed9e43435b"],["/tags/不限速/index.html","7a761b6aad6bc32785047aaaa6b8a11d"],["/tags/个人网盘/index.html","ea58062ddcf6dac29b74c2fe196ca562"],["/tags/主题/index.html","86a5f57ed850a7d3f728c6d6dfcc7daf"],["/tags/二维码/index.html","e81f912aaeff0d761d31896333227dbd"],["/tags/云便签/index.html","ef2629a23aee72b2853c5ffada5f8e5b"],["/tags/云盘/index.html","d90accb732072906cc84ba5d5715af7d"],["/tags/人人/index.html","84c2997419dbd5f8a978a4145c3e3f29"],["/tags/代理/index.html","8cd6e8214b38951bb36b30371c233ecd"],["/tags/代码/index.html","189f11a1d5bd311e0a61f0ec827849de"],["/tags/优选IP/index.html","87117ea8336fd403eb5ac250e76c4532"],["/tags/便签/index.html","a7daf5dd0e33ac360e77a07ac2fd4daf"],["/tags/保号/index.html","d9dd026a7d28fd0662638b544db2ce3f"],["/tags/免费/index.html","dda405dce4393b023396a3e3ec1025a8"],["/tags/免费节点/index.html","8ff547c3fd40b00f22cfc0de99613ce5"],["/tags/冷门节点/index.html","aad9fd641e5152640e3eb2cc91457f32"],["/tags/删库塔/index.html","ca78c401c4d83ca477d9fafd4923f43b"],["/tags/加密/index.html","f93b9d859faca36ffd2556081385dc26"],["/tags/动画/index.html","c57034c44c1f666c11481c7100e19de4"],["/tags/博客/index.html","e5606b092e30cca311f63b07e4983756"],["/tags/卸载/index.html","bb58c101d39472fe185c949f39adc7c1"],["/tags/历史记录/index.html","b78f71145019f1eed9697065adc49d97"],["/tags/压力/index.html","00df71f83c4fa7b9ca68a1c4a88a80a4"],["/tags/压缩包/index.html","f8e78c090e92fdb49ace33cd498e3661"],["/tags/反代/index.html","e272fb0e32e00424e55e9ab2c2d5b9df"],["/tags/可视化/index.html","09eb3e042419daabdafd1a1473feb91b"],["/tags/命令/index.html","1cf768e4d1f386da7b5401b198b31b60"],["/tags/国家/index.html","4df6ea1137c308aff7e9ded75ab2e49f"],["/tags/图床/index.html","74c6362488dfc772f127dda8541c2c90"],["/tags/图片/index.html","41448e98796cdb276ca1945d8935674c"],["/tags/域名/index.html","ae5dc85d54ac015f01caac7a93ba49b2"],["/tags/壁纸/index.html","cfcb75cf39dafd5108c9c9586e05f8d0"],["/tags/多标签/index.html","49d563a8d267a093b3586d2f2a44b1da"],["/tags/奈飞/index.html","2816e94d3f368934da5a2b8f4327283f"],["/tags/存储/index.html","a6ff8a51394c8d7d587467c051e96c4e"],["/tags/学习/index.html","bd99addb1328b0536c168e56ea6e74ef"],["/tags/安全/index.html","bf9b4639336398b21f0bb0cf0c0fc79a"],["/tags/安卓/index.html","bf35cc3c03973fff69b67ecc69b12c90"],["/tags/宝塔/index.html","47e0ff513b247dcfe11fffed3883b5cd"],["/tags/小游戏/index.html","428c1bfc35f3b711a7120fc3104dc3dd"],["/tags/广告/index.html","9957e0ff4a002585feb0806b1bc0e610"],["/tags/建站/index.html","0032753d9994b281015ba0cffe00ad7e"],["/tags/影视/index.html","1bd2da65354241699db84c66a82cd51e"],["/tags/微信/index.html","90532febc752148c85dec1dd3181f1ac"],["/tags/快速启动/index.html","75f8aece0425824dc2e350b9f0def398"],["/tags/手机/index.html","761a03e0cd8c091e1d10b682e7d2be92"],["/tags/托管/index.html","5b3f7e35710fee13e32e3d8da4b56486"],["/tags/抓包/index.html","c8fb81629c895db47255e42e6e86ed08"],["/tags/抓取/index.html","fc4a5dcceb91a9a53beaf8cadcbc7091"],["/tags/投屏/index.html","1d75dc5ba73e37424588d94dc03451bc"],["/tags/拓展功能/index.html","595200438c668c8a8b9e52633fd9133e"],["/tags/挂载/index.html","e744260e28566e12ba0d1bd6b16b7b22"],["/tags/指纹/index.html","2561c99ca5bc5ed7aa9d180481be1e91"],["/tags/接口/index.html","fad82d07f4459f99ed374c016b574c8e"],["/tags/提取图片/index.html","bdb2446e3d033954ba9dcc878122874e"],["/tags/插件/index.html","00845580d82b3870a257e3e0d0e2db87"],["/tags/搜图/index.html","b7f8b7e323a6339d049234f00823bc30"],["/tags/搭建/index.html","46de69dd825a040d71bcd730e1ca21c1"],["/tags/撤回/index.html","e9d479562a4decccf62ccbd5ac03232e"],["/tags/播放器/index.html","1ac87c1f770cba5f2206afaf7e688920"],["/tags/支付宝/index.html","1cccb502d9bb0baabe729134b56fc0c0"],["/tags/政府网站/index.html","26e31b69e49fe7e3c660987fa6fcdd04"],["/tags/效率/index.html","f3aeb8e0e353947b45742773816fd56b"],["/tags/日历/index.html","1e649101f2e7f23cea3033a9d0a05b52"],["/tags/服务器/index.html","10d16e6f297777daa5caa86a9bad5e79"],["/tags/机场/index.html","b5799dc8f15b9e73b660d1e33b021012"],["/tags/查重/index.html","264121b885a167b754875b89a39f80a6"],["/tags/桌面/index.html","dc46dc440feabc796494f534a13c1db6"],["/tags/梯子/index.html","917aaae0b7f9d0f81283337f6ae48c27"],["/tags/检测工具/index.html","33242f4ae32c91009fd65a3fc287a5c2"],["/tags/汉化/index.html","22c8fd8214fd0789735df3780fe29fea"],["/tags/测压/index.html","c3470560e394cee40d3916fb04c804a4"],["/tags/测速/index.html","2252e744a58e525a2d7a08c42875465d"],["/tags/浏览器/index.html","76a675a1f8250994a99abe6ed0e50bbb"],["/tags/清理/index.html","c7bedfe9371b8524a6c349af5b5006f8"],["/tags/滚动条/index.html","bc3d192a345e503260880a85267f1215"],["/tags/灰色歌曲/index.html","7b2ae80176f657ca5d00fd42ad9a9d39"],["/tags/电影/index.html","c02a90fc541aa9f23f3bb6b5316ad59d"],["/tags/电脑/index.html","3643a3e39e3979b68841932b44353005"],["/tags/电视剧/index.html","8195df1b2db90557449283a7b6d60b2e"],["/tags/白嫖/index.html","cd2aadc1407f8f4a1cc59f012b5ceaf4"],["/tags/百度/index.html","e4c246cb597fe778d6ee2f77d3096f1a"],["/tags/百度云盘/index.html","d829e49efbfda0c021f9a3a920760837"],["/tags/百科/index.html","951f734cc44dff6854e20b357e11b735"],["/tags/短信/index.html","26d0480f9ad543d3f315dbf37b81b7c2"],["/tags/硬件/index.html","984cd69d2bae4c1e46b4bdbe8c57b293"],["/tags/科学上网/index.html","15061342b6aed7317bd36c44038ed30b"],["/tags/空间/index.html","679b9b20190dcd38c52be7bac31555a9"],["/tags/笔记/index.html","711b908f7b247378d8b2df14353fa040"],["/tags/简洁/index.html","21fb14b420fe05766f8d2272f66c1de7"],["/tags/简约/index.html","e28535e6395ed22a6effc0eefcc15b4f"],["/tags/维基/index.html","38080fd0a65ffa366fd0529d018f7096"],["/tags/网易云/index.html","98cbe7c5d5f8199ca36e35d394a92574"],["/tags/网盘/index.html","bff653ab6a879dbb56ba360a4979dc58"],["/tags/网站/index.html","cc82c78257cffbbca658edbc4b85d761"],["/tags/网络/index.html","fdfe148c5245bb290083e05ef514c77f"],["/tags/美化/index.html","03732b9d0845a919380272311f6d0153"],["/tags/翻墙/index.html","c551970596891539d60add81d862c107"],["/tags/翻译/index.html","b21f9a03e2d9dbbaaa75ff67ae078c3b"],["/tags/翻译器/index.html","9d990215cf383220f8a5f55a5d6d7790"],["/tags/聊天/index.html","67b456fabdd49aa13e5dc0e3e88e71b0"],["/tags/聊天室/index.html","81e50ed55ff9fd2ce0d093876b1d041e"],["/tags/联想/index.html","762752b51c31a6d6851b0eda19fc6c20"],["/tags/节点/index.html","f0620a67959930fda72368780d36b4e6"],["/tags/虚拟手机号/index.html","54d56c35e0387704be67973cb49acc51"],["/tags/补丁/index.html","469effeb7062eb28059cd564ccfde989"],["/tags/表情包/index.html","6a8b0926f948f3fb527fe9de59588dbd"],["/tags/视频/index.html","54b0a95c39a26adeb9efda42cc5b6aa4"],["/tags/解析/index.html","5fa28424f7d1fd6ee909190f5e031993"],["/tags/订阅链接/index.html","aa5752fad5b6513284b0863f4493b319"],["/tags/记录/index.html","868f6d3507dc49384437d68855a962e1"],["/tags/识图/index.html","c3c435c02414eac59a8755d9abe1be4e"],["/tags/语言/index.html","44ad9cc656d2b22a3d1b591c4d81819c"],["/tags/资源/index.html","24ebc31c7b924c188c1ce6a544e5eee2"],["/tags/资源管理器/index.html","506c7f03220611ccf030f87cbfac1dcf"],["/tags/转移/index.html","aacd4cfcf37f24585a839ef4dcf22e73"],["/tags/软件/index.html","6f4d41f25e5d3326039e5003a8617551"],["/tags/轰炸/index.html","35e6bcba1a1c76cf019e51dab2a1abce"],["/tags/迁移/index.html","ba4ae742cbd8c002e2013fa83f9a2434"],["/tags/远程控制/index.html","cfce36fc4d9a29c49059ccdb54bd1387"],["/tags/连接/index.html","95bc228148bd85fb700294a9dd64d89c"],["/tags/追踪/index.html","2e8902df6f639dde9e09b4b5b26f07ad"],["/tags/速度/index.html","41d2413a194a0dc4d30a857745fa5664"],["/tags/邮箱/index.html","2777993878cc6578a66267690b8aff40"],["/tags/酷炫/index.html","32f54c99954100e0a04f8437513bc8f3"],["/tags/钓鱼/index.html","b093dd47420dfd17426ff6a51a5a6c10"],["/tags/镜像/index.html","458e2235ed0475f75a2389daaa20318d"],["/tags/随机/index.html","c6778563b993a0422961cc1503c7f92e"],["/tags/隐藏/index.html","24e12f633aeb89e00160a92acba9ea9b"],["/tags/面板/index.html","3fea4d974d9303f738375a265210b01d"],["/tags/音乐/index.html","73557225118932cb6a46a8cb31ac9edf"],["/tags/高颜值/index.html","ac8bf5e1ddbf52bc1c516a75b470ef01"],["/tags/魔改/index.html","ca02131268b907953f5ef063c40518d0"],["/tags/黑名单/index.html","1fd173fe724222c673099a4c5bbc0dce"],["/urls/index.html","c14f18db7d4c75e0f4eef5fbe68e618b"],["/vps/index.html","9c84793791e47b1db90a061bbf8a94aa"],["/支持/index.html","8577f15f1f06798866598735a5df1e2b"]];
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
