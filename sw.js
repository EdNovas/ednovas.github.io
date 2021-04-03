/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","cd3038f22c88e14cbccf0a2738fdacea"],["/2020/11/29/clash-windows/index.html","9d41b98720b558c013c9cbeffda6245d"],["/2020/11/30/websites2/index.html","a3e14560d54764d1d2ecb24ebf1d7c3a"],["/2020/12/04/iphone4s/index.html","6350521724aec0053c7b8ca8441f7a88"],["/2020/12/04/onenote/index.html","3a5cfae2fb1e87422a21e8d89318b99d"],["/2020/12/04/wesites1/index.html","b5c25de3bd097c093de34b63ff35260c"],["/2020/12/06/nokia808/index.html","6231e9327b0a86ee54913975898e96f0"],["/2020/12/07/ipad1/index.html","e9762b6f487ffb189e0f27f27896ba29"],["/2020/12/18/freesubscribes/index.html","9ccf558aae50394dae814d53ea15d653"],["/2020/12/19/musics/index.html","62abd7c17303a070f60e467f9c41f64f"],["/2020/12/19/shadowrocket/index.html","b6e318b6082d7d84bfbc90498bd3803a"],["/2020/12/19/v2ray-windows/index.html","82e22c8dcd7ba895024d6d7a136ce491"],["/2020/12/19/v2rayng/index.html","f99e20ca22720fd6d33205ee973724ea"],["/2020/12/20/beoplay/index.html","3667b19d2f2a6dc9aa217d7a17d2ddae"],["/2020/12/20/订阅链接转换/index.html","b56c2e1f78bc86994649410e8f25b9fa"],["/2020/12/21/chrome浏览器下载提速/index.html","4d1acd89fb5316432634d7b3df00f3e0"],["/2020/12/21/免费128线程并发下载xdown/index.html","a65a263fd0808317d99aa1acd435d13e"],["/2020/12/21/免费32线程下载软件ndm/index.html","686c1b665d3bbb48945737d886b1a772"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","9aff95960dd51d36652d1b6039811a43"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","acfee9b91a218ee872627b617932a892"],["/2020/12/21/广告怎么知道我在想什么/index.html","d9e5facf2309516d19b3781d3d67c0ef"],["/2020/12/21/无名·引子（小说试写）/index.html","29dc60a2baf2179c1b609df3f7cc4d83"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","ab8293d9f6d4616d67b6d3f7c79882f8"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","ea1e254290b7b0a8e8fda90474f29b1c"],["/2020/12/21/高速轻量下载器aria2/index.html","583cee08b3d4e89aeb9379d6eb76e643"],["/2020/12/22/2020-cee-roo/index.html","7e369f2c96afc3221abc1174eff67950"],["/2020/12/22/firefox插件、github、steam富强/index.html","4848c1c89a13a62790aff450b7564d0a"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","37d2b68ea97357e9d7dec77c74891ba4"],["/2020/12/26/python-day-1/index.html","743835d6746c96fc32eb57822df82d73"],["/2020/12/26/python-day-2/index.html","385e3de7fa27bd6e19941f6ec6456421"],["/2020/12/26/度盘不限速下载方式一赏/index.html","294a65efb850d744abf7cf6ab936a95f"],["/2020/12/26/添加开机自启软件/index.html","89a72de3938ac82452048e04a21f10cf"],["/2020/12/26/电脑端截图方式一赏/index.html","3f0b35963322c44e071537bac260bd55"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","42ba67ea3fa103017eedc4648e64f72a"],["/2020/12/27/最安全的浏览器tor/index.html","a3e7269403c66ee796cf85c47ebcb90f"],["/2020/12/27/网易云刷等级和听歌数量/index.html","3a007f906d02cb6589ea1b6a956184ec"],["/2020/12/28/freenom申请免费域名/index.html","7bb871b4af6d743f3fb3972a24130036"],["/2020/12/31/机场/index.html","d8c681c6e700d57555f070915f908074"],["/2021/01/01/M1/index.html","e7f7c53f7f52d3110d2ad5104748ec99"],["/2021/01/01/compress/index.html","5d81f5a83f746607668f8df371f4be60"],["/2021/01/01/infinityfree/index.html","89d7b4d32b9a197782a57806f3101548"],["/2021/01/01/硬核翻墙/index.html","1cd53b4d2ec2dfe360446da837fbf970"],["/2021/01/02/qq/index.html","30f08cc53e781343099fbee6fe395643"],["/2021/01/03/netch/index.html","4b02e688cc31cf57e7c5c0d560d081e8"],["/2021/01/03/waifu2x/index.html","3a202c67c2d2883985c9fe652f2106a8"],["/2021/01/04/ads/index.html","8ad3dad9d7eab6b564fec050ae749bb9"],["/2021/01/04/games/index.html","7643bdafb3d0c89276c040115e456a23"],["/2021/01/04/heroku/index.html","9110b10113aef34e1dc414b790d028d3"],["/2021/01/06/movies/index.html","8a64a9a63e41f8a22f9b82be578bc792"],["/2021/01/07/google2020/index.html","3ddd30c7818c7ea061ceb0cc42c9b742"],["/2021/01/07/lucky/index.html","be38e98861e082f8d3c2af1a02420885"],["/2021/01/07/spotify/index.html","5e182c4ece4452bf4256c26542d49133"],["/2021/01/07/thunder/index.html","0c7499a1484a3486df2fb75318bb48f6"],["/2021/01/08/adguardhome/index.html","d35f01a6b60bb399f3eab7c6873f9913"],["/2021/01/10/IBM/index.html","5fa72fe4e455d0dcf44946455faf6406"],["/2021/01/10/potplayer/index.html","668cc8545dd04fb96debe886941fa39f"],["/2021/01/10/sakuraanime/index.html","aa650eefec39fae960da1a523eebeb82"],["/2021/01/10/美剧星球/index.html","86b167166183160ab6bb8b10342488a5"],["/2021/01/12/telegraph/index.html","d08ffe75c80a1fe9b935214f9053db44"],["/2021/01/14/comics/index.html","c856176fb0f379cdd1da1c2df2c77199"],["/2021/01/14/ftp/index.html","94add9e9b9353c5f3ff5c605e6585c74"],["/2021/01/14/oraclecloud/index.html","f151d57ac5777113d33980201f0c5444"],["/2021/01/14/porkbun/index.html","f37ed8ccd11ce73f0d56ff0d7f40fcce"],["/2021/01/14/powertoys/index.html","3643666c9c8441b7e3aa9b7c917e760d"],["/2021/01/14/taptap/index.html","5fb2f26068eb5112a14753566dfb0b3f"],["/2021/01/14/ubuntuvsftp/index.html","4b799eb87edc1268ed9ee061d5d8a691"],["/2021/01/14/小说/index.html","25024440100010025b30c6344b90247d"],["/2021/01/15/freeproxies/index.html","dc9358f70a6693fed364cf8cb4d6edee"],["/2021/01/15/incaseformat/index.html","f4eab9a58ac37a2b1d8599ddbdfe4027"],["/2021/01/16/euserv/index.html","6bf44e24f2e4f1232980c89cdf719010"],["/2021/01/16/winxray/index.html","1baecbefe1541e9a5e32ad419b01b846"],["/2021/01/18/qqreadhistory/index.html","e64575f443e3a97ec1c1c0e0b3cacd5c"],["/2021/01/18/qqrevoke/index.html","7cc1a5a2baddc57e20b51bd8721c61cb"],["/2021/01/19/freevpn/index.html","f2b663b0f95ea1de501d2aaa9527822e"],["/2021/01/20/browsertrack/index.html","b31641b7602e10c41878774f670eb7fa"],["/2021/01/20/v2ui/index.html","1c05c2be2ed220526082a2f97dbc07ec"],["/2021/01/21/failedtoconnect/index.html","c2536c3a86081a0c3bf157b1abc46cab"],["/2021/01/21/gitcalendar/index.html","68b97078cb9cead2486b7fded302ecf6"],["/2021/01/21/markdownformat/index.html","af2f5ae61a1f7f865229cf7184e8fda6"],["/2021/01/21/markdowntable/index.html","df5f81000a7208c4a20be32e05c785f0"],["/2021/01/21/vercel/index.html","6f06ee0b28abd1cd2694f81c4cab7fe4"],["/2021/01/22/hardware/index.html","a1cf8c60c06c7b103feb21b2393b9c43"],["/2021/01/22/muviz/index.html","49c8c8d1c78183e7f5d419b2ee94019e"],["/2021/01/22/randomapi/index.html","f92862c66eff86125ed3b900fb7d4d18"],["/2021/01/22/searchimages/index.html","47428ac85ff7d36f8ff0f802aabf2a73"],["/2021/01/23/RX文件管理器/index.html","86051eae6afbc72092f38d110391d34d"],["/2021/01/23/chromeflag/index.html","d3bb00a2d0399d451bfaa90edc583cb2"],["/2021/01/23/qttabbar/index.html","93ae43ccaa6b8ef5406746f54f124fff"],["/2021/01/24/githubspeedup/index.html","44943ff7eaadc03ff4312f6aea5c96a0"],["/2021/01/24/jsdelivr/index.html","44a9935b8a688f0a0d59043792673ae3"],["/2021/01/25/note/index.html","cca05599709a918cf399291007ef4516"],["/2021/01/25/soul/index.html","6edc3b30ec2ee5b2c129a438ffd840f5"],["/2021/01/26/herokuxray/index.html","c5603e69db72f18913cfff6bbd6b7b9d"],["/2021/01/27/proxypool/index.html","dc785c955def2a0c6f1be10b4923970c"],["/2021/01/27/tracker/index.html","32e1f1bc7e904eba68c5c9d9c8ddec89"],["/2021/01/30/pandownphp/index.html","e050b6b434afa0b126c7c5a3542d32e4"],["/2021/01/31/newgroup/index.html","d54d6d8475ddf97aa5b5dd0f9ee97c24"],["/2021/02/01/clashlanguage/index.html","86a74581a2ce9d3505dd8ad7d48939fd"],["/2021/02/01/encrypt/index.html","1f97750769c8962c24951ee0c8afe4ae"],["/2021/02/01/footermotion/index.html","b0c4dbdf90c45442436fa241798d5f93"],["/2021/02/01/gitter/index.html","f34b47611b3ed7fd33c6508595622160"],["/2021/02/01/pixivtop50/index.html","8860ce4c27c8eecb129711b35f097624"],["/2021/02/01/scrollbar/index.html","0d6b513b6544b2aee3eee9411a6d328c"],["/2021/02/02/clover/index.html","7d2cefb6e84d73079bad13d632250336"],["/2021/02/02/maya/index.html","d4dd92c6510a11444d475c0adb4bb805"],["/2021/02/02/speedcontroller/index.html","d41a2e99e510470138dff913fec1b057"],["/2021/02/02/yesmusicplayer/index.html","600262f166da393aedc9bcd587241e66"],["/2021/02/03/lenovoonelite/index.html","16fb18ed9d30e740fd29bf528b55e8b6"],["/2021/02/03/skipads/index.html","8d3124607477be7ca60d6f2e3668028c"],["/2021/02/04/picseed/index.html","6d9a269ef5d0120cd360f709219c2b8e"],["/2021/02/04/renren/index.html","f2695ff7a482d75778eaeb7634eb42f5"],["/2021/02/04/serverstress/index.html","364d8e9fb95e50b94fd176fae3378bab"],["/2021/02/04/wikipediazh/index.html","16148fc75874c27cc755c8a58a89037c"],["/2021/02/05/googlevoice/index.html","1f9a2395d8619f8fe82aab1200425a86"],["/2021/02/06/clashconnection/index.html","208d85a7f9b5d6317b8706d6078e7e54"],["/2021/02/06/gvtransfer/index.html","c032e40b7be9f842093eba5c3a7402a0"],["/2021/02/06/todesk/index.html","c74ee5e94bab29e773438006de8d137e"],["/2021/02/06/vpnblacklist/index.html","bca764990c3ef9f36cd3cdfc167ed1f3"],["/2021/02/07/mklink/index.html","2934ca6345798414e420498fae9aa4a6"],["/2021/02/07/speedtest/index.html","9ee20cac1633df1de49ca8f36b3f0749"],["/2021/02/07/translate/index.html","d11f0dc7150e9730ba4c9c582babc136"],["/2021/02/08/ewomail/index.html","55a4ac77c28725ad389260c10ed678ba"],["/2021/02/10/officee5/index.html","bff429aae6b1b8058109eca6f0112008"],["/2021/02/10/raidrive/index.html","b2669d4bf80a54b3d8dd1049e6ad2c2b"],["/2021/02/13/e5sub/index.html","e9bb176d0112b67e5c5c2ca1b51a14ee"],["/2021/02/14/screen/index.html","a37128a7efed7f265bf5cb65417f39b1"],["/2021/02/15/clashtun/index.html","64922bc389a503359233a88ad1ef0233"],["/2021/02/15/messageboom/index.html","b910d61fbcc7d3f8f9565ae50beabc3a"],["/2021/02/15/oneindex/index.html","4e97ae0212863640f1fbf770eda315ad"],["/2021/02/16/govsites/index.html","6fb22a5726b2d7a18ce1dca44c20b798"],["/2021/02/17/hexototypecho/index.html","a8b94f1628fe7997f58ba8806660c06e"],["/2021/02/19/fiddler/index.html","0b3bc92a2a67722ba468580fcd5838b1"],["/2021/02/22/potplayerset/index.html","917eb0f3429c0b1f426189fcd216721c"],["/2021/02/22/studyresource/index.html","640b430e112f049b64a600888a52cbd3"],["/2021/02/22/telegram/index.html","f9fbf1f94a3c81c9b3ec20a3e7621f06"],["/2021/02/22/videos/index.html","759ae2c803653c40f218f36fa63a2c66"],["/2021/02/24/mtproxy/index.html","7bad4ff96c47d93f10483809d52b3e1c"],["/2021/03/10/catchcat/index.html","98e960a19d07a5bb501b3743e4e4f572"],["/2021/03/10/neteasemusic/index.html","a00a5ecb7c42204abad7fde2c4a172eb"],["/2021/03/10/surfboard/index.html","0c39ce1de616e53b46e7130a298010a0"],["/2021/03/11/vpnandjc/index.html","0261d6816df8f68f395da149e764317f"],["/2021/03/12/qrcodes/index.html","7e1f12b6134cc0bcc7882b8c45e8fb91"],["/2021/03/20/qv2ray/index.html","bc7ac3cc67dd2c4846feba7027c36af5"],["/2021/03/22/freevps/index.html","8bf54e411146432072e5e76b00f9ddbf"],["/2021/03/24/tgstickers/index.html","f9f629ea5f824efeeea003c1e46cf983"],["/2021/03/25/clashx/index.html","72ff0b1209c70257e305031d8dd6c35e"],["/2021/03/26/bingwallpaper/index.html","e8dcbc07bc1e88707a167101d047be6f"],["/404.html","a8146c6df7426c6721e6af0640b201f1"],["/archives/2020/11/index.html","0a8ed43f4a4eea3823d633e7590dd2f6"],["/archives/2020/12/index.html","ec5d0d2e795c24044632832c0db97e5d"],["/archives/2020/12/page/2/index.html","aefe26f093f6d90b2f17a9968d0e257a"],["/archives/2020/12/page/3/index.html","e4be562de8c7431d96287211714cc4bb"],["/archives/2020/index.html","08852c2bd2f44c27e38cce8fed78ae28"],["/archives/2020/page/2/index.html","9eccd70fce11b36aa36b9f64d56f0c26"],["/archives/2020/page/3/index.html","d2c681dff84043ba0fea6389856897c3"],["/archives/2021/01/index.html","5fc9b254150d72ca9c5c820277d72168"],["/archives/2021/01/page/2/index.html","e1230c1cb968203fa71dcd8e1d04c651"],["/archives/2021/01/page/3/index.html","c9ee14ad2eea7434a2a8cc53282d8769"],["/archives/2021/01/page/4/index.html","5f35196bd763b20f11a2f8d4bd522bb5"],["/archives/2021/02/index.html","a718a66fc74f4c595bd055c55317b9d2"],["/archives/2021/02/page/2/index.html","797d3a7b6818ca60957feaa58d23d5d5"],["/archives/2021/02/page/3/index.html","bce54b6ed970fe1710f166fa10776880"],["/archives/2021/03/index.html","dff4eecc89d9776178b84db3073b6426"],["/archives/2021/index.html","79f60cee6c380b29bbe8522d37858ec6"],["/archives/2021/page/2/index.html","27c458712edb6c4519cd4455281220c6"],["/archives/2021/page/3/index.html","7d94727a5d029a96546908ad0074e1d6"],["/archives/2021/page/4/index.html","4a55da4656a13503f850ebfef686e1c3"],["/archives/2021/page/5/index.html","2613fc049a0aae9de39065fa2d054ace"],["/archives/2021/page/6/index.html","a39769e2203ea44e2a548909e6e1c62f"],["/archives/2021/page/7/index.html","f347020163b3c044f3908143bde12c5a"],["/archives/2021/page/8/index.html","600cceb8d94fd505d745721d18a2cbc1"],["/archives/index.html","0d9c909680249ff8d85bb0d3aa4f81d3"],["/archives/page/10/index.html","04026e13601e68d2e43df59b64bef926"],["/archives/page/2/index.html","f1396ac95ea86366b2eac0cf46749913"],["/archives/page/3/index.html","34548745237108d736ce271c6019c4e7"],["/archives/page/4/index.html","f2278b4e6cf1f00453ec97e52967dba9"],["/archives/page/5/index.html","851b53f610faca25768f564e04a2e832"],["/archives/page/6/index.html","8592889b196a9427a9ac788c17e4d8e4"],["/archives/page/7/index.html","021e23dc33fca8618c76c7357fb244c9"],["/archives/page/8/index.html","f504da081e382af06410dbcbcbb8ebd9"],["/archives/page/9/index.html","105f4775df2a2391b3b816090cadd0b2"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","7bb5faaa1a51a43c28bb5f4d3b9b7913"],["/categories/index.html","6949474f670e6d94c4dd80ff6b6c7ee1"],["/categories/下载/index.html","da1cb011fd64db11353ee50a939d7486"],["/categories/安全/index.html","59ac825869031599fa903cf07a3c2a5e"],["/categories/建站/index.html","f7b49c2f4d6d738d358851c99033f262"],["/categories/杂/index.html","d1abb365ca9aa429cab9d04618c71393"],["/categories/杂/page/2/index.html","f4b26c91b212557076907adfc3ad5d57"],["/categories/测评/index.html","a212e2cc3afb899dae1a35e83255af7a"],["/categories/科学上网/index.html","c8ad8391c092d1cce5dc88ddbc462981"],["/categories/科学上网/page/2/index.html","4d993e0d2d861b1845eac9a6c42b1204"],["/categories/编程/index.html","b20b1098b198f4405a2cf5cfbaf76520"],["/categories/网站/index.html","3e6ec8ac79159efe848bebebd377e274"],["/categories/网站/page/2/index.html","07f224462640c8af5243fc0390a9a00d"],["/categories/软件/index.html","18236ddfe5b09a3d2addfb4a355a1816"],["/categories/软件/page/2/index.html","786f9cf239318a94bf3929697f15bb81"],["/categories/软件/page/3/index.html","c2f03f1be3570575c29e9b69e61ef887"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","6182190cf2a8cfe947a5c1fa197089c0"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","7ca7dffdf72c2ba4e332753b3d2b1735"],["/ios/index.html","cca67f856b89a20ac791522ecf9fd801"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","31db8be248bec73232e2c18575d94e29"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","79863231df29d28a185dd2b09ee3628b"],["/page/2/index.html","6ba821d6824cd2113560bb131334c8ef"],["/page/3/index.html","c08e02b1a66c915108f062e86ee3b1e7"],["/page/4/index.html","8a2b8331249b567ac09413b7387757f8"],["/page/5/index.html","c81cf56bab333dd98ccb52485a56ea4a"],["/page/6/index.html","1952fc7b6f75404aa8a5d6016b60125c"],["/page/7/index.html","2b42c69cf926c1854b2c8ccc22dd3191"],["/page/8/index.html","0f67453d4126f8230711b95ac22ca4b6"],["/page/9/index.html","3bcd9c3905c1ae52375796124e427eee"],["/payment/index.html","47d5d25fff6e188a0b13a18c29e0cbcd"],["/privacy-policy/index.html","9dc7bd253043dfef3e34ecaa74b11b13"],["/rss2.xml","4de761da6c1f6a6b584be22c42643031"],["/search.xml","609478c792436d4b3f34685c9615b64b"],["/sitemap.xml","fb2c246bc6f1d68f9fc04a5a5cfc1ebe"],["/sw-register.js","3576f0872f0aaf30a89a45190f9098b8"],["/tags/5t/index.html","8d624270ad0887ab8bd0c0a3f735ae9b"],["/tags/Bing/index.html","697a0e93854bd6ef1662ba7f7bf84789"],["/tags/Clash/index.html","1022f4be21aa7e5c68b88cd60d239d9e"],["/tags/Clover/index.html","c7f1d9ec3bca14b4dad39fade4142c75"],["/tags/E5/index.html","22956836d463ce4840544ac7f10e216d"],["/tags/FTP/index.html","0d00e054c595038aadbc99b9be923281"],["/tags/GitHub/index.html","7b313844eae50aace63a6eb9b8d20c29"],["/tags/Heroku/index.html","7db1195e69d2932d65ac3fefab01fede"],["/tags/Hexo/index.html","14059f1ca9e7693eefdfa38601271a03"],["/tags/Lenovo/index.html","fbc6924731855adc6d795421edb3a93f"],["/tags/Oneindex/index.html","e59083d4cd4d74c14e783114e7afd666"],["/tags/QQ/index.html","fc24515a9b73dd39af1350cb901a5d0f"],["/tags/QTTabbar/index.html","2ddbca44a44f34886c48418bb93edd1d"],["/tags/RX文件管理器/index.html","2d83d13b1cfa7f34e5f405dfbdfb9275"],["/tags/Todesk/index.html","3c90207ff64c48087f2fafa7160376c3"],["/tags/Vercel/index.html","6016909113f97c488d7a1b6b5920ec79"],["/tags/ads/index.html","cf0d5644c7bb2a0a73d1f65fa14dcc1a"],["/tags/api/index.html","55c331e002e895abe92d03553fd63f9f"],["/tags/app/index.html","03a16ff9acfa1a8e07809493e2f009b7"],["/tags/blacklist/index.html","b5bc1ad54cc9f3f547886e938b9797cc"],["/tags/butterfly/index.html","ec48cd33adc511bd9681236d8121306d"],["/tags/chrome/index.html","bb55bd0f3ccc3b49ff9e323f4d0f8545"],["/tags/clashx/index.html","e8fbcbfdea5fd3cffad6253435c61a8c"],["/tags/cloudflare/index.html","ccd5e3e447764b8b9225d4450493f4f5"],["/tags/cmd/index.html","8f76ee77f9ee545a08f26b696d735511"],["/tags/c盘/index.html","c0b61cd34046658878d976cbda25f505"],["/tags/email/index.html","e571351f1a9491147e58f5c6cafc6024"],["/tags/ewomail/index.html","f4b7d2e0c61cae343c1d05126b4d6e64"],["/tags/fiddler/index.html","930714dc4f09ff2a7af946695de521b5"],["/tags/flags/index.html","e18b5d8f31a2aaa7e90e1add43f77041"],["/tags/footer，页脚/index.html","039dcd7454aee128af62b2337f62dbe0"],["/tags/galgame/index.html","e6dbc25a8859287e18e500fc9506abdd"],["/tags/git/index.html","760a7a9795f81aba93fee2d1ef0038de"],["/tags/gitcalendar/index.html","9f24438c54faedbf10d22bbc7f0fbed6"],["/tags/google-voice/index.html","09ea428ca9ad6285775ff4105682e6e3"],["/tags/gv/index.html","3f2736d65d0d30942330da347db4ae8f"],["/tags/html/index.html","c360812ff3e1dc9eabdfae56fc12da22"],["/tags/index-1.html","b64ad591f47e6ac70468b0fb88ee4e76"],["/tags/index.html","8eafd0515571167e292495e18e1923ae"],["/tags/js/index.html","e6e0928094d34687c888d6ae78fbd396"],["/tags/jsdelivr/index.html","af6f4179ecc8769d3580471d44ece61f"],["/tags/linux/index.html","7a7964692c1ef28125aca5fe4ba738a5"],["/tags/macos/index.html","684cd87cbe01077501bf0ae51816aa16"],["/tags/madVR/index.html","b05610426c76c244d61803945e331780"],["/tags/markdown/index.html","80d9046f28f77922ee564b7401631c26"],["/tags/maya/index.html","9334e6f13d108ee6c88278bcac2f3325"],["/tags/mklink/index.html","e66470aad3bedeef40cfbed1db0559b4"],["/tags/office-e5/index.html","4c1ea539caa1a04349a727b2871df767"],["/tags/onedrive/index.html","913788b2e3d29b53f8a5c612d371fad2"],["/tags/picGO/index.html","43e3a1c935b19c17a214a3335f90d34a"],["/tags/pixiv/index.html","cbc56dbb0437191760f816199e2bc7e2"],["/tags/potplayer/index.html","52dfd806518fad2d48d8ff8c624e7b4d"],["/tags/proxypool/index.html","da195873076a8c0d2b102ae289d82c02"],["/tags/qbitorrent/index.html","a22f863d355c2f15c8588fb971d84fca"],["/tags/raidrive/index.html","1f482379398503f1bc7d795252519832"],["/tags/screen/index.html","3771a0fb5a0522938e96768734cddb2d"],["/tags/speedtest/index.html","9cf6d7451a90affea7e4fe50b725dc4d"],["/tags/ss/index.html","1032cf9b77ff16f01a56a04cde69a57c"],["/tags/ssr/index.html","fa0157b4adf726c6744784da29b80ee2"],["/tags/stickers/index.html","749979a17bbb87070a1ab790ff0059e0"],["/tags/surfboard/index.html","f46289e587f88664c0d52aa519222c05"],["/tags/tap/index.html","6ac78bfa840c81bb30ea69caeb60bc8d"],["/tags/telegram/index.html","1ad86a8382cd23c3e31875382a6c4533"],["/tags/telegram代理/index.html","cf4ce8e6a21ff3a1fc6d9aa3f7819c3f"],["/tags/tg/index.html","384632138b2ea69c566e074f5ab60ddf"],["/tags/tg代理/index.html","5dd76d2995fda56112efc28f00384ae6"],["/tags/top50/index.html","fcb67f7c8771f59041f7a8d15799a4ec"],["/tags/tracker/index.html","6be6864ec9d28932ed44fa7c73593220"],["/tags/translate/index.html","f154c8fa1304569e6cc0518bd6322479"],["/tags/translater/index.html","295f99b5733866d6fdc5279f1a2f4a42"],["/tags/tun/index.html","aab1b377be39f824e1cfeb58188bc560"],["/tags/typecho/index.html","3d5f77ec4e08f1e95aadafd3cc50a600"],["/tags/v2ray/index.html","9c267c86867242494513e6a41386f66e"],["/tags/vpn/index.html","ed2b782aaeb19166af22155ee954d0ab"],["/tags/vps/index.html","4b9ad8266474621b433128824fb0ba43"],["/tags/wallpaper/index.html","d6ed35c4e200cc06b02c1223a8ac8c86"],["/tags/windows/index.html","a69119f9a5e2f329043c3456116cc1c5"],["/tags/windows端/index.html","59a38d597ba8e8b36f12a0b09f2d15ba"],["/tags/xray/index.html","9677dd93d981b6d20ec83b673d3100bc"],["/tags/下载/index.html","5a204397a2a2f7546c046efb150d8a74"],["/tags/不限速/index.html","a60876a76b329a0d72ddf182ae165443"],["/tags/个人网盘/index.html","a6cd307677715b46dda370a28baaaa08"],["/tags/主题/index.html","0bbfcfd7eb0c47c3af5eabf01448d0d3"],["/tags/二维码/index.html","98870bc71b5d27664b1b5fd0cfad6071"],["/tags/云便签/index.html","1038eee893cfc6424ea4e8a9aec58c58"],["/tags/云盘/index.html","876f289a9a8339e7875baf210ddc558d"],["/tags/人人/index.html","29d84e9888794e20700e5b2ea475b86b"],["/tags/代理/index.html","b7507b252a0f8fabeccf8f61742fa8d5"],["/tags/代码/index.html","369d251cf213ba5b5f7279bb3949c55e"],["/tags/优选IP/index.html","79640ce033af1fcf74d784f0d026f408"],["/tags/便签/index.html","bd82874f34ecc56ef5e24c84bb585aef"],["/tags/保号/index.html","a4d44ed0f8e8314d071d9200d9f13100"],["/tags/免费/index.html","ada5141dd3e1c4d1aae4d6ba00286573"],["/tags/免费节点/index.html","ce4e62949d8934321ceb42c6ceb0e81e"],["/tags/加密/index.html","a711f22f023ff17ab900a6572770dac1"],["/tags/动画/index.html","cb34dfa47f5acb55b1401626c25cf6cf"],["/tags/博客/index.html","6c5e1c479d39e9cc2540339877f0889d"],["/tags/历史记录/index.html","6b048f10a6157cc584ed797a22384ddc"],["/tags/压力/index.html","e8dc81c4346d773e3f67895698dc9e7c"],["/tags/压缩包/index.html","6dd043594597310fbf2c53b0f37f50e5"],["/tags/反代/index.html","672da74b0602fcb4b617beb69491382d"],["/tags/可视化/index.html","5ac6b7bf892209f720452e7bedc450b4"],["/tags/命令/index.html","8ce6bca3188aa833b184ea88c56abc66"],["/tags/国家/index.html","d4d00881104b6e6f58b22580a82e6728"],["/tags/图床/index.html","08c51bc883c8c08038388384b58f6390"],["/tags/图片/index.html","98e80105dbb1bd3f7ce201657d5b9c2d"],["/tags/域名/index.html","a37049e9f04a0e0b79d47b1db7fa621a"],["/tags/壁纸/index.html","8eaa881b83e59460e9e29b6b7cd10ab6"],["/tags/多标签/index.html","88ffa7f33b9ae978eb02f99cff03db4e"],["/tags/存储/index.html","57248445d27b450116faf0ce512b815e"],["/tags/学习/index.html","8306cbd94449d26532eb560e971d7aac"],["/tags/安全/index.html","9e5e3c0a03fd7c98260e34cacdde512b"],["/tags/安卓/index.html","74c833205e1a5b075d5f24ae3248cc5f"],["/tags/宝塔/index.html","2037c1301cc29ad300d69258cc4e0e9f"],["/tags/小游戏/index.html","649694311dc95ff0388c28dd7d8dcd16"],["/tags/广告/index.html","c3ae0937da99c3a512edb61016facf28"],["/tags/建站/index.html","3bbca598042902d864b30c081346274b"],["/tags/影视/index.html","2f211401a8e865a2dc84754d92550071"],["/tags/微信/index.html","b37305b2523e0bd90c85b042e0897a54"],["/tags/快速启动/index.html","8301aa44e4b7ab2636c66387363d9e79"],["/tags/手机/index.html","3e871803991a41dc0a42a8f7332d0a3a"],["/tags/托管/index.html","61594516fdc177180d50e56ed83c24f5"],["/tags/抓包/index.html","9cb06c5b69ff398afc4dd1b990b5a3a9"],["/tags/抓取/index.html","f504eaa305e10769a0246e9c77c779c1"],["/tags/投屏/index.html","837c6ce33ec0b923113e537b550a052b"],["/tags/拓展功能/index.html","bd600f8a7c214f63425d78d691dcbd65"],["/tags/挂载/index.html","475b8102c26817cffb6a66f55d23ebdb"],["/tags/指纹/index.html","8cc3c7102df56006727129c2a813c276"],["/tags/接口/index.html","782d6c32c4af3b11e80013a7ea20e8c1"],["/tags/提取图片/index.html","0d2944610d5afbd09706a685bdd65388"],["/tags/插件/index.html","89f8e30f92e4a14a86e5d2b512876397"],["/tags/搜图/index.html","216221c48280f5e7647e1a2e40f3cf48"],["/tags/搭建/index.html","eab700f05078fd29bb97fc56247e4221"],["/tags/撤回/index.html","65fa1481f2ca75fe11fbadf17adfc4cb"],["/tags/播放器/index.html","65c9dd9d3d6147c59b002434343b9ae5"],["/tags/支付宝/index.html","6430b4a8ef066478dff4ffabe3128b92"],["/tags/政府网站/index.html","e1c24c3da65512cc2692bddee0f0d7cd"],["/tags/效率/index.html","4da6d2690a97bf359c2196c38f5b31ba"],["/tags/日历/index.html","247ad1dd8c3ee2b141481c39ef754d83"],["/tags/服务器/index.html","2fca2ebc08e6142b5b02e81b32903f58"],["/tags/机场/index.html","c7b778a613ab4c954ac1d91810080064"],["/tags/桌面/index.html","74c89857b55c494a9a27799404e95eab"],["/tags/梯子/index.html","213e257013c021817f8ebf3ee81c1294"],["/tags/检测工具/index.html","5b80f3ec188d1335f4c29446e2c1ed48"],["/tags/汉化/index.html","d394cfef9061107babd3a28336739c2a"],["/tags/测压/index.html","9c6ff40e67ac5cbf2b5a7819fdc22785"],["/tags/测速/index.html","fd8d65e86867ed98f824d061988af01a"],["/tags/浏览器/index.html","697f38bf7804a84f30c724572daa5d0a"],["/tags/清理/index.html","74387962356c8e6cba8673d70cab00f5"],["/tags/滚动条/index.html","e852f0da8de824781886db4ca5d6ac28"],["/tags/灰色歌曲/index.html","5983c6e63698c7161159cf76a4758cee"],["/tags/电影/index.html","afad2a81be75d5374046a4830f57c12b"],["/tags/电视剧/index.html","0a50b98bb8f3ebbd633a9ab0758536b8"],["/tags/白嫖/index.html","0d15acb08088d60f9b2b937182978b1b"],["/tags/百度/index.html","4c8c1e3d38b09e6923929b20c0044457"],["/tags/百度云盘/index.html","6d85b491d9c7a4f424781fdbcea91931"],["/tags/百科/index.html","ce278786abeb84975a3c4d2a5470bc55"],["/tags/短信/index.html","52650e1acd5c88758c9b208ac05e2de8"],["/tags/硬件/index.html","29b0a4367ddcc85a42e5f76654ed2d91"],["/tags/科学上网/index.html","0e81ffa61eff0e7e816da21047b05309"],["/tags/空间/index.html","8f1a374b06f06d21a234fb21b6d4ecf0"],["/tags/笔记/index.html","8570eaa2a0083aa3b3fd8a9214db8b09"],["/tags/简洁/index.html","8a677f3cb1e0c03a6f23f340882e2318"],["/tags/简约/index.html","6791a0aa88ac24e07a671d5fcaa522be"],["/tags/维基/index.html","b003ff02e1db81a14d0cd86076c7d8fa"],["/tags/网易云/index.html","9278a0f35ea7affb097c3d890bcdcfe3"],["/tags/网盘/index.html","8a80da436fc760c2ea8af45810ffa392"],["/tags/网站/index.html","aaf116b47088ab919b26a4da61f067fc"],["/tags/网络/index.html","eb54765c56f3984b0f3b0e09a07595b7"],["/tags/美化/index.html","d88e74af49233317940ba8e9d1cc87de"],["/tags/翻墙/index.html","759a82f9411a933d0583a00ce31e3cb2"],["/tags/翻译/index.html","d09cf5e840ee8c63f5baa2e34804fbda"],["/tags/翻译器/index.html","6e4661fd6e04cbc75aa09ec0cf25b9c2"],["/tags/聊天/index.html","446fddf2a795c38f35f033bc784d3716"],["/tags/聊天室/index.html","42f4cdf45ac1e61aa5dac3c837c220ab"],["/tags/联想/index.html","ede716d68f1a969860c7621eaa458940"],["/tags/节点/index.html","6d439fd623365d7ed009faaf4caf674c"],["/tags/虚拟手机号/index.html","ef13da44a30bc03411ba2a0c4b873ca6"],["/tags/补丁/index.html","3d38ef3b2b48a6e7f873380cf9c4c2d9"],["/tags/表情包/index.html","81bdc077cb4e829dbe8888bb7171f209"],["/tags/视频/index.html","f23cf1658279c10a313ccf3741332ac0"],["/tags/解析/index.html","2357853b965a2625969151094fa64a8c"],["/tags/订阅链接/index.html","4a14a21a19c7f86275d83dd7ad0bd73e"],["/tags/记录/index.html","ff94ad7f31c33e6b935f646deb07d8b0"],["/tags/识图/index.html","721900e3c0de149ba07af125e1e436b7"],["/tags/语言/index.html","28d68f17b912349a615b022261c931c2"],["/tags/资源/index.html","69d2a8465f05896e80a1e33aee527897"],["/tags/资源管理器/index.html","9889d466982bd1d6b3d330f55296d9bc"],["/tags/转移/index.html","ee35b113ee81008d87ea34539859cb74"],["/tags/软件/index.html","14416663e71f4d2edb1c3ff191be0e69"],["/tags/轰炸/index.html","9efa3bd20cdb65a0f6e169561a781ff5"],["/tags/迁移/index.html","c8e46730de7698272ddae2d43db018ee"],["/tags/远程控制/index.html","e783220eab375392c0ee8583e91127a3"],["/tags/连接/index.html","e9b83ad730e82f3d89edc96830c81dd8"],["/tags/追踪/index.html","58e67719fa5b6b36ff14110b593a0d7d"],["/tags/速度/index.html","ed24cab97af3d83e015e08fcd9ff3144"],["/tags/邮箱/index.html","f64ddc07e0f2a6969d41efa0a7816ce2"],["/tags/酷炫/index.html","4841486c4f3d9f31bf7cae45a1469296"],["/tags/钓鱼/index.html","2879f34c654b0bd934d4dfdb9c44bcfc"],["/tags/镜像/index.html","c4c0db9baa3e08d5f68aaeadf5768b7f"],["/tags/随机/index.html","01362697ac83b7ec5a5bdce27bba01c2"],["/tags/隐藏/index.html","0459f1d0bf0d3667919ff4099f801418"],["/tags/面板/index.html","bf9b859899ec2ac2f239e09de5f599ed"],["/tags/音乐/index.html","a79fa563e4bdc0a7984ee04f21513ce2"],["/tags/高颜值/index.html","7cef4a47940f437c1e2875290df0b704"],["/tags/魔改/index.html","56e3df0ae787f647529fa40219cf01be"],["/tags/黑名单/index.html","8be8feb6bb3ca1b6ef64e1a844ca3b2b"],["/urls/index.html","4b3b8982088780320b130fe34e8953b8"],["/vps/index.html","04066b0be45b3b6ed7e3878d550f2c2c"],["/支持/index.html","9b790b767f89e74dbe4ec783deab9daa"]];
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
