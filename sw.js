/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","893dea14362b4a9b0e3568590e79f1b0"],["/2020/11/29/clash-windows/index.html","608e16cc843dc789c9a8c142fe5bca15"],["/2020/11/30/websites2/index.html","912c4987ec459464d7f5e33218554d12"],["/2020/12/04/iphone4s/index.html","007b5f87c5d3fbec64b08720ffe79a72"],["/2020/12/04/onenote/index.html","dd088fb1d51e7393df158b519da2c7ec"],["/2020/12/04/wesites1/index.html","091aff00b929dba01cbbf0c9e653e902"],["/2020/12/06/nokia808/index.html","a02298731b59af3e50ab0d67220457f0"],["/2020/12/07/ipad1/index.html","dc4531f8bdbe6a5ae33728da6c592c61"],["/2020/12/18/freesubscribes/index.html","3c775878216fd8c4e46fde7f09b4ef0d"],["/2020/12/19/musics/index.html","d9ff3d4549d7900bbad6b9b2e3683fa1"],["/2020/12/19/shadowrocket/index.html","59b5260e637714fa94bee8a85de63e4b"],["/2020/12/19/v2ray-windows/index.html","37ff2a2fd9e688cac11d42695e12c468"],["/2020/12/19/v2rayng/index.html","e9479ab5d91b0d91055178aa903d7e9d"],["/2020/12/20/beoplay/index.html","967081d39f5b1a958058c91be456e35c"],["/2020/12/20/订阅链接转换/index.html","75a2eb89b92ca290c6bde84971ba44bd"],["/2020/12/21/chrome浏览器下载提速/index.html","955627490e323ff6e0a522c65b74339f"],["/2020/12/21/免费128线程并发下载xdown/index.html","7074d226829797ff535bc057d53fd851"],["/2020/12/21/免费32线程下载软件ndm/index.html","480c0acd9d832af46a997d0307fb4745"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","28a3bd979951033407822afa9f9fdb64"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","a6277c53525419b3f58a118357b02bd7"],["/2020/12/21/广告怎么知道我在想什么/index.html","926d700facc751f487e7a2ebaffdeba4"],["/2020/12/21/无名·引子（小说试写）/index.html","7ee79288f1cb4715c877b06c71477297"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","39816bac17dd7247d1f516afe0ecdc61"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","16430439ed0b3866282462e64fd072db"],["/2020/12/21/高速轻量下载器aria2/index.html","66865ad2362a22a116e5f8ac4985b0a6"],["/2020/12/22/2020-cee-roo/index.html","f9db5ae26e1fc1cf1ada1f8489cee400"],["/2020/12/22/firefox插件、github、steam富强/index.html","25d1088ab1e2a06adfc455e064003f95"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","ed07263f0a56e0a278f4ab787e0a3404"],["/2020/12/26/python-day-1/index.html","dc074e2ab601282fc3a25ce88dee972c"],["/2020/12/26/python-day-2/index.html","fe0f45681a468810eed69a0c4491091a"],["/2020/12/26/度盘不限速下载方式一赏/index.html","e190fcbb1911c5c41f07a7c7a48450c8"],["/2020/12/26/添加开机自启软件/index.html","6a607fe1fd2379f3d67452c279c79573"],["/2020/12/26/电脑端截图方式一赏/index.html","a85a0cffb3b87e941798180cd5eae70b"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","92d2c073dc0f24b59db377570bb8ed4a"],["/2020/12/27/最安全的浏览器tor/index.html","5a5b385e8d489a7f4cd0485ebc775e19"],["/2020/12/27/网易云刷等级和听歌数量/index.html","2f602daad316e11f77b4e22ce1442a67"],["/2020/12/28/freenom申请免费域名/index.html","ee8a05941bbb4c6030e86bd72bdfe00c"],["/2020/12/31/机场/index.html","5e745d32f47fa21ddbb53ab85d08dea1"],["/2021/01/01/M1/index.html","d33e51fa05e65f341d8eb6b74e4c9ecb"],["/2021/01/01/compress/index.html","d006780accdfa25126d669d8c46efb39"],["/2021/01/01/infinityfree/index.html","996f176b0923114501f78cf3a9801f0d"],["/2021/01/01/硬核翻墙/index.html","1f7f297cc859b8c25e9895b9fa05c5fc"],["/2021/01/02/qq/index.html","cd8245f006d8c4a5c2c8196d3e975fc4"],["/2021/01/03/netch/index.html","90a0023958d9f9638a6fddb51d43ea21"],["/2021/01/03/waifu2x/index.html","d623305eeab149ee7a795fc7905ae5fd"],["/2021/01/04/ads/index.html","2b5cd849257f2885b6021ac402b6612d"],["/2021/01/04/games/index.html","d66f64df158a1d4731c8d61c0f22e34e"],["/2021/01/04/heroku/index.html","156aa5416bd25ccfcc7fc25a0aa9acd1"],["/2021/01/06/movies/index.html","a0d5759cf0d71059e1cb27ed3682d4fd"],["/2021/01/07/google2020/index.html","d9a316e8e96d19151040d3628d8c4f09"],["/2021/01/07/lucky/index.html","0b9b33a71750b6c57aaa7560e24e45d9"],["/2021/01/07/spotify/index.html","dc47afc3696f836697daa2a6dffac7f4"],["/2021/01/07/thunder/index.html","3e4e63dfabb0606ecd8f3f38aaef6195"],["/2021/01/08/adguardhome/index.html","040d12bbb765c273e26c65def3ff97d9"],["/2021/01/10/IBM/index.html","880d669e05ba17e5c1939321241819a6"],["/2021/01/10/potplayer/index.html","c553e1144cb20b0a85d898fa847719c0"],["/2021/01/10/sakuraanime/index.html","3e2bac37c22f1d51203be2926aea684d"],["/2021/01/10/美剧星球/index.html","c326fa24a869ca9d83e3f1845a46d789"],["/2021/01/12/telegraph/index.html","039506d9fd5a23aa993a044b4bc3db64"],["/2021/01/14/comics/index.html","6243ff65918362131cf68b89dae9cf9d"],["/2021/01/14/ftp/index.html","7622593b9fe47c0666f1d1d231eaa940"],["/2021/01/14/oraclecloud/index.html","95528c6abdaadf03fed9cda882da0208"],["/2021/01/14/porkbun/index.html","2af1a3a5aec5ec37c5c030cf69ad5aff"],["/2021/01/14/powertoys/index.html","187305d572b737b42621107aba4de7e0"],["/2021/01/14/taptap/index.html","d635ef5168c8b6ab7a231d5ba0be4333"],["/2021/01/14/ubuntuvsftp/index.html","1bb0fa2e896e2e4ea822ca53b9a9aaf8"],["/2021/01/14/小说/index.html","249b7ccdb9e4ae8eeb8d6df99aa2cde8"],["/2021/01/15/freeproxies/index.html","ee918b54469b797857cae3a762644349"],["/2021/01/15/incaseformat/index.html","0a300f1df504bb546a800a121d9410b2"],["/2021/01/16/euserv/index.html","5095f3795631f9202824595e44ecca1b"],["/2021/01/16/winxray/index.html","3c0587a534842d8420abf442b1290050"],["/2021/01/18/qqreadhistory/index.html","60103d35b92ad1004dfb2d6c65cffe6b"],["/2021/01/18/qqrevoke/index.html","4bf87070319c2413d23045d17c21adc9"],["/2021/01/19/freevpn/index.html","4c1265842cba59d98842f3ebf41e0e87"],["/2021/01/20/browsertrack/index.html","1435a42d80e72eb4f1dd245df7e872c8"],["/2021/01/20/v2ui/index.html","b5f8557372e3fb8578da773c54eaece4"],["/2021/01/21/failedtoconnect/index.html","83b1be7ba85432516a722d6a7a22a988"],["/2021/01/21/gitcalendar/index.html","a5596dd7f7a54c05d429c7b3841c3123"],["/2021/01/21/markdownformat/index.html","45fa1de0710c3f375d7725bbc633bec5"],["/2021/01/21/markdowntable/index.html","f500e31f1ba7bf903382d26260b4f787"],["/2021/01/21/vercel/index.html","24ccf1785075d702b68a1473fcbef917"],["/2021/01/22/hardware/index.html","dd502f8a41b338462a5c6501a7dae30d"],["/2021/01/22/muviz/index.html","84efcf1a443a340d1cfe46e06fa2bbf3"],["/2021/01/22/randomapi/index.html","05d7d8fb68c4cb3a4ae4f59175bf48c8"],["/2021/01/22/searchimages/index.html","79c002f6d31558e381d712e28be7d0dc"],["/2021/01/23/RX文件管理器/index.html","143f2b6b2d6b6b13a7c4fda385525e4f"],["/2021/01/23/chromeflag/index.html","6ce0333af53783124900df4b42dac1d3"],["/2021/01/23/qttabbar/index.html","ce988af81ab93d5814e545d15c0c39c6"],["/2021/01/24/githubspeedup/index.html","fa32553e8b405593512e1bc68c71dbfd"],["/2021/01/24/jsdelivr/index.html","1a8e39fe33c1185cb095832b4b154d0f"],["/2021/01/25/note/index.html","d9006e03c2fd75504ff7f061e1801a62"],["/2021/01/25/soul/index.html","a12fcd1f1534c3dfa49c52c8cc51b38e"],["/2021/01/26/herokuxray/index.html","c91ad6acf1bfeabf50d6961786030c18"],["/2021/01/27/proxypool/index.html","46b2c631f0e448b58fed6d592bb3622d"],["/2021/01/27/tracker/index.html","c7eda2e7e58a89ee5864fe7f5273a0e1"],["/2021/01/30/pandownphp/index.html","3564570b22eeebee2931bb4c769d9b7f"],["/2021/01/31/newgroup/index.html","0a3ad8e66a9c7210c28067297884634c"],["/2021/02/01/clashlanguage/index.html","61a21c19ded0f0e67181e7526beb2f96"],["/2021/02/01/encrypt/index.html","b24c6ae9d3ae104d46d41816b67439bd"],["/2021/02/01/footermotion/index.html","33b7c69efb10c1ba71f1920b53968ff8"],["/2021/02/01/gitter/index.html","4fd5f7ecde741466995353e52816380f"],["/2021/02/01/pixivtop50/index.html","a8b5d54a104d1aa0218963aa4f71c220"],["/2021/02/01/scrollbar/index.html","1771bc9c3bcb8150231994c47e47735b"],["/2021/02/02/clover/index.html","ddf591a3fd002d86feaaf06e8678a1bc"],["/2021/02/02/maya/index.html","e6b4b480427594c3649b768e8b9b60d1"],["/2021/02/02/speedcontroller/index.html","5174d04cfdfd7c266c362f4d6945fa69"],["/2021/02/02/yesmusicplayer/index.html","2f33302282c6da98eda155b90a4d4a65"],["/2021/02/03/lenovoonelite/index.html","36826d25e5e7bc0b265fd24dcbac4723"],["/2021/02/03/skipads/index.html","6c9674d60321a978fa2d0801754c37c4"],["/2021/02/04/picseed/index.html","c7308bf29665d6f2db0812e42986052e"],["/2021/02/04/renren/index.html","9fca31ee5cc94789ac1b1633ed5bc0dd"],["/2021/02/04/serverstress/index.html","23781da6b17b991c94e438b414c24729"],["/2021/02/04/wikipediazh/index.html","d685674d7bf0af2a5d7c628d3ae2c746"],["/2021/02/05/googlevoice/index.html","a08f54c70d66d0804acebcb8d8d70e4f"],["/2021/02/06/clashconnection/index.html","607269695d2e16c3ed822326481d135c"],["/2021/02/06/gvtransfer/index.html","1677a03b17efee0c0e6df296d273ff20"],["/2021/02/06/todesk/index.html","605a7865c4442500515a9bdc4c621268"],["/2021/02/06/vpnblacklist/index.html","12773f6758c6fb6601976459f9ede21a"],["/2021/02/07/mklink/index.html","9546b2a9a38f28acb354573be586f19d"],["/2021/02/07/speedtest/index.html","c8b495a51f0a905c6c708ef6008b6d69"],["/2021/02/07/translate/index.html","2664541f7af4299958f95f4b29050ea5"],["/2021/02/08/ewomail/index.html","b1f5f1793080a66489fec5973cc708c1"],["/2021/02/10/officee5/index.html","8af2028e1f9749cd0779c90866f4ea9c"],["/2021/02/10/raidrive/index.html","3df87982e3644b0f32099dc17ce089a1"],["/2021/02/13/e5sub/index.html","6ac9a17bdbe48c19223cb618cbbbe055"],["/2021/02/14/screen/index.html","35f97bb8483a4a82316e16693e553941"],["/2021/02/15/clashtun/index.html","ce71d0b63a2e877561a5676f85627af4"],["/2021/02/15/messageboom/index.html","91813f04fafb98388bec0f8c788a7914"],["/2021/02/15/oneindex/index.html","6372022a21615e019fe8bdcca55efa0f"],["/2021/02/16/govsites/index.html","4c0b4f40a9eaad790680707615738104"],["/2021/02/17/hexototypecho/index.html","c0c2c19e56aff47bc3c800f9c2eaeab8"],["/2021/02/19/fiddler/index.html","9550a69a5811ac8f952db0df884017be"],["/404.html","67b0afdf047cc7c6093c9ceb266b5172"],["/archives/2020/11/index.html","1caa38009afbae520fab5f43cb196b33"],["/archives/2020/12/index.html","e93529c09565b6fa1f2bc943fd463074"],["/archives/2020/12/page/2/index.html","370261a74200b8d475685c0d14622e80"],["/archives/2020/12/page/3/index.html","e1da865aa68e613b1593f938e45667c3"],["/archives/2020/index.html","cb80b17b9ce579f85425dfade63a26c1"],["/archives/2020/page/2/index.html","f185cf87bbd73b35d9e7ff544b597762"],["/archives/2020/page/3/index.html","adeaf723c451981a9eca8ec2ff16aa52"],["/archives/2021/01/index.html","22c0166bb76f14f2b120e7baf4ea909c"],["/archives/2021/01/page/2/index.html","90c20cf84636fc8116c8e71d87594d40"],["/archives/2021/01/page/3/index.html","c7d861861b550c05f3734934a9ec1595"],["/archives/2021/01/page/4/index.html","e811807be6d1e28c6ff01dab5a86e200"],["/archives/2021/02/index.html","6e08e32ce86f8e9fa03f91c04e721bdc"],["/archives/2021/02/page/2/index.html","ad0dce580118a8c918ff5392c775da03"],["/archives/2021/02/page/3/index.html","2125563f6c8c5462acbe0c383b7b7c2c"],["/archives/2021/index.html","6b86c6b9f118fea8b09ea1176fec2774"],["/archives/2021/page/2/index.html","8c8a0816ac3ddcaa0412f67131e8597f"],["/archives/2021/page/3/index.html","d7ff456e3c2427571046e1f924829845"],["/archives/2021/page/4/index.html","17121feb309b5f51f439f326bd1ff346"],["/archives/2021/page/5/index.html","9678700421a58bfdc5f169ac47028742"],["/archives/2021/page/6/index.html","d401f39639358b40080c384bea752134"],["/archives/2021/page/7/index.html","e839cbe4c39201d5e59db04c81ce0989"],["/archives/index.html","088f2a2b0d3e405f528fe07a3b17bcb4"],["/archives/page/2/index.html","488660eba7c8860ca00f5bb14dc94606"],["/archives/page/3/index.html","331377799159ae4fe7e3b9d0bd7832c3"],["/archives/page/4/index.html","b9050ba7874f46745ae76ba33a338643"],["/archives/page/5/index.html","f34dad89d63e2eedcb668005b018a1f1"],["/archives/page/6/index.html","b7872bed169ebe6eb0f8c764e2725434"],["/archives/page/7/index.html","132f096d264253cd44c2f5dc10913828"],["/archives/page/8/index.html","5332891608508a5b1b586b47236c01ba"],["/archives/page/9/index.html","c13e3a2a0aa773de049fb279d23a0805"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","e16c8b088ff98ed2414d518008b8223d"],["/categories/index.html","c271313b1b882445104467092376c48e"],["/categories/下载/index.html","4e86c13a27a5fddded3f104cc4c1db01"],["/categories/安全/index.html","92e27f531489ca7cf8fbf744da0bdbec"],["/categories/建站/index.html","ca572fa1d0739f0a56c10c5f0ae5162e"],["/categories/杂/index.html","8c96efd18211fe475ba94b254dfaee5b"],["/categories/杂/page/2/index.html","0cd6d7967e5be3e3a139a44278a1d59b"],["/categories/测评/index.html","90674fdb956279f829e24d0548348e2e"],["/categories/科学上网/index.html","6017fcc4ffd0d4e26820db783ce3b681"],["/categories/科学上网/page/2/index.html","d4d393049ba30e96de37381c726cf814"],["/categories/编程/index.html","8d104fdfb856765e05ae4b6f5ad577de"],["/categories/网站/index.html","4f6940a3c11f0d873617e22256d08aa4"],["/categories/网站/page/2/index.html","72ea6369d6ba622932cd21bdacabf2be"],["/categories/软件/index.html","8bfd27e8e624abfaa05503600f934242"],["/categories/软件/page/2/index.html","a24b8e1d0f132b9235c6ca6924282131"],["/categories/软件/page/3/index.html","24023bfc05b5566429fd3c2f1f8d0eef"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","224e3ea1a7b8e534aff016dffc983dfa"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","46cbb5937dbb6cb8361e397cc9153c9c"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","8b948e2583412b264f46050fe5955175"],["/ios/index.html","a57ea333cd96404d21b8dbd1e98f9da7"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/2/index.html","67c1b0357c5b99d36347acd01463aac7"],["/page/3/index.html","caed0d55b609a096d01923fa212bcec1"],["/page/4/index.html","5a95df86c7dfb04caf3088255b6644bc"],["/page/5/index.html","295e379d264653852b04dcd5d5a3c49e"],["/page/6/index.html","6639235def19a3c75396dd734bcd849e"],["/page/7/index.html","e9b94fc8fa7de3af4d782c50912c862c"],["/page/8/index.html","48571b7f1f16c08cafb57e73ac84cec3"],["/page/9/index.html","a43e27d47e0686bc782e83de1bfde623"],["/payment/index.html","3d7d0902d3010e8c0db4e13e8fddd1ee"],["/privacy-policy/index.html","1c3ef19d16b1ef81a3ca193bf0e24365"],["/rss2.xml","867e0aec4cee82619b0d481ba602f433"],["/search.xml","6bc328c78f27c0d957fab8ab7be8a865"],["/sitemap.xml","99636a7330815f0cbd5a35b50815ae12"],["/sw-register.js","00b86c0f6b1e8db63ef2062f1cfa0230"],["/tags/5t/index.html","f5a3c3ae9128be68ca3d7f841f610304"],["/tags/Clash/index.html","54ca914fff44bf98d418b73e3baceb38"],["/tags/Clover/index.html","8191e9b57bec96e966b4c66fd1e36d2b"],["/tags/E5/index.html","bd8dae834b7b8e5822f2ba9441384db5"],["/tags/FTP/index.html","1479f7034985c606d649e238c9063402"],["/tags/GitHub/index.html","547dfb0f48ec48c264035c9411f80eed"],["/tags/Heroku/index.html","4af84cc6df94c46445bd27c1d89b3ec1"],["/tags/Hexo/index.html","783b483cfa364393c8f059629d005c08"],["/tags/Lenovo/index.html","3c5da54abf78c608f01023ccff197c18"],["/tags/Oneindex/index.html","f0bfb2c12d2a5eab2b2bbf8766bb2cb4"],["/tags/QQ/index.html","751d5913b3a693c53be67b7247e10268"],["/tags/QTTabbar/index.html","fe714eb820b4adcfa4d691c336b351fa"],["/tags/RX文件管理器/index.html","7ca320b60f15b84c525c50eb975f1988"],["/tags/Todesk/index.html","67bc78837e0c2b1d492a2ef618f5f756"],["/tags/Vercel/index.html","363d4257650d40b5e1ebf4abe677652d"],["/tags/ads/index.html","9725f85f55f434321beb7b1acd7571bb"],["/tags/api/index.html","a6a1b7968cd273c736a79134072edf62"],["/tags/app/index.html","c395ea848bcd334e34e2006c1a737d21"],["/tags/blacklist/index.html","0aa00ca2da3dc7d4e11102373b4472dc"],["/tags/butterfly/index.html","8c020fb07f157fce019b76ebbb6c0f14"],["/tags/chrome/index.html","024f3e8bde5302a6d43f44c74dbb15d0"],["/tags/cloudflare/index.html","0c584d829fe531b58fdf13bb85d4b9e5"],["/tags/cmd/index.html","95f7d1367ee4d5ab248f77b94f545bae"],["/tags/c盘/index.html","ba441d50171f8a0599543de41c199dcc"],["/tags/email/index.html","c17b4bad31c28fa4ead51b4f8c85c239"],["/tags/ewomail/index.html","82d8942d8c0f1e54c30cd211c740af11"],["/tags/fiddler/index.html","1c1d7ee481c5561b124ea1e0059e9167"],["/tags/flags/index.html","ffcbf2ab21378f4aaea38601931e9e5e"],["/tags/footer，页脚/index.html","fb52be799342c0beab21ce4e415ac1b2"],["/tags/galgame/index.html","b2946a6a3249d5c5cf8c5030a215f07f"],["/tags/git/index.html","5126112d9ab4fffd9c1373e7d6e58d05"],["/tags/gitcalendar/index.html","85ea38775e763b4c9708fcb2f8bce4e7"],["/tags/google-voice/index.html","efd85320bfa9b635f15433bf8dc5c615"],["/tags/gv/index.html","978bd7454d42ac35a35d0ea8a081a6aa"],["/tags/index-1.html","841bb9a694a9c0e8b955bc14497da823"],["/tags/index.html","0f771cee03fc7a38290c494494e34b62"],["/tags/jsdelivr/index.html","d541fe7cabdcd0bf403f9cd8b7c5e758"],["/tags/linux/index.html","cad05393d7bfe0a7817be61b0b2b5ff4"],["/tags/markdown/index.html","c39604a6f273cfb234b8712fe4d2b659"],["/tags/maya/index.html","bc308e3f6fe2bf87c6d55ab2b8432404"],["/tags/mklink/index.html","864ca2b82670eb2a6dece06f608a2e5c"],["/tags/office-e5/index.html","9d2924c3f4f4cb9272fbdd951c303cde"],["/tags/onedrive/index.html","041d7980b24702fc50c20a44f29482df"],["/tags/picGO/index.html","9f915348b1b39ed2aa6b957cb303a92a"],["/tags/pixiv/index.html","efc40f10669f055e1989faec93d432be"],["/tags/proxypool/index.html","624f0a2dba3f4cb93feb8e839faeaa65"],["/tags/qbitorrent/index.html","6501223fbe976e518a9cd76640532415"],["/tags/raidrive/index.html","bfac9d147ad29297398027d0e4fc4f61"],["/tags/screen/index.html","715501ffc10200eb2eb4e77048aa9b49"],["/tags/speedtest/index.html","a46d5743cf3746fa6c84d4e12366b9dc"],["/tags/tap/index.html","aaa7959ee7f71ef1bc8e9365658da907"],["/tags/top50/index.html","e0c68ea84e62db4decc9b43dd9491f2b"],["/tags/tracker/index.html","e94fe20b3d204ef4797c04c1c18d599e"],["/tags/translate/index.html","80dfad30551093321f739968600b673d"],["/tags/translater/index.html","93db1b461d64d4ea99f7fc907c852809"],["/tags/tun/index.html","804f4188c3bb28d9e4dd0f6295768a8e"],["/tags/typecho/index.html","bf71aea9337b8bfea27427569c6a1d87"],["/tags/v2ray/index.html","54a8e3ee583f1a2eab09d87fe127c041"],["/tags/vpn/index.html","d777bdc9ff02268243d44d35e82f1ca8"],["/tags/vps/index.html","8eb080d0f871ae47a48b7ab860b94c23"],["/tags/windows/index.html","cd6ca054916ca7d9038a45b31877b953"],["/tags/windows端/index.html","fd1b67e4d91e63fa64e273b5867a036e"],["/tags/xray/index.html","10be8136e31b54ffea28165df99dbade"],["/tags/下载/index.html","f8888e8dbee755fc11f5206675bdc2b4"],["/tags/不限速/index.html","41eaaa070eaa02b5cce541bbff8d17f4"],["/tags/个人网盘/index.html","948e2ee15ddd9224aa7ef630b20e79ce"],["/tags/主题/index.html","15983fa96fd8901d813c8f6d93b7b658"],["/tags/云便签/index.html","025802fdf4e8601fbb1f63d5d8f97124"],["/tags/云盘/index.html","0a582a0699ac9c2172cec2b5e7367f50"],["/tags/人人/index.html","d599d60f869309907be2dd9e6886c6ca"],["/tags/代理/index.html","f8a93fe4eb70e942125099ac0b2dcd6b"],["/tags/代码/index.html","f7994172d92f0665fc34d833547bd114"],["/tags/优选IP/index.html","d74ba4b6b5baa0f6317a5d94b6310151"],["/tags/便签/index.html","7b0866cc4a2158c1c2478cb781ebc889"],["/tags/保号/index.html","10c844c5b02aeef5dd98f2c1ae39425e"],["/tags/免费/index.html","43e4911b3c496a7a40c154b5447e9119"],["/tags/免费节点/index.html","a99467daf5c54f0427a7af9ab4cab9e4"],["/tags/加密/index.html","55c5175382fcf1683a55b7d63016c88c"],["/tags/动画/index.html","e095d4d14a5bcccb521806058c37539a"],["/tags/博客/index.html","bb8ab3a579c20f591389055342fefae7"],["/tags/历史记录/index.html","b7ed3205460339286a7bd23605bdb182"],["/tags/压力/index.html","86b3a8ccdb49076766bfdab7b05c2060"],["/tags/压缩包/index.html","cac5b84d5122a1526007df0796bdbd82"],["/tags/反代/index.html","ee559982e25d58da17819f6e1b7530ff"],["/tags/可视化/index.html","8e65743f3ac96ebebb00ae1d6320b200"],["/tags/命令/index.html","633eaab4e1fcc5a42eebd1c435f1adc4"],["/tags/国家/index.html","d4e466fe514a519b553bec9ba4ea6330"],["/tags/图床/index.html","bb77380b237486de8c702bdfdd0cb7c1"],["/tags/图片/index.html","6d514c053272730ba571f69ba73c2df2"],["/tags/域名/index.html","372a90a8d7622fce04d9847c4d471238"],["/tags/多标签/index.html","d7e383eed06fa3a5e535b2fe4f44ba7f"],["/tags/存储/index.html","22ce3aa40fbcd0f631b80717b28f9be2"],["/tags/安全/index.html","66d4ca0912d83c10309d0a6e5c3e375f"],["/tags/安卓/index.html","3f6ef7a6c6bedf0ec08de8f35500db72"],["/tags/宝塔/index.html","b4666e75fd4b80f7510cb8b3a7ab48a2"],["/tags/广告/index.html","9974d14dab3b52ef5d4ddce0c96f5289"],["/tags/建站/index.html","2849725bcdb8275891a4adfe1b4f4afb"],["/tags/影视/index.html","1a9d273c2ed0907687cc3fbd70f40866"],["/tags/快速启动/index.html","d2b9975bdf6d778331a1ff7ecb5e66c6"],["/tags/手机/index.html","9b472ce5ba24dc082143710dff86dbb1"],["/tags/托管/index.html","923ab3f28720a0ae17feede145188cea"],["/tags/抓包/index.html","5b7efca6e8493bdcc77855d9b75c62fc"],["/tags/抓取/index.html","e8d85239d2c391cc05d126f9df852b0a"],["/tags/投屏/index.html","6bcbbe8725efdffbd812f547827370c6"],["/tags/拓展功能/index.html","daf65c53e5dfce6431d118a98a11b5c6"],["/tags/挂载/index.html","19c35f3f1c0bb513af08a396a40027b2"],["/tags/指纹/index.html","9f8f0c254cf4c7887f8ccd2724fd56fa"],["/tags/接口/index.html","805754debf223889fe5071cbd03f9ac7"],["/tags/提取图片/index.html","8a1a75119a3f178b817c81d83f89f274"],["/tags/插件/index.html","cfa519a1dbb28d2845ffca38492ccda7"],["/tags/搜图/index.html","cbb932d4d364acda4abb8e9dc4f4c2c7"],["/tags/搭建/index.html","dbe20a25682dba62ed1b4088ea1a5694"],["/tags/撤回/index.html","209afb8954b626458d91f0a4398b1997"],["/tags/播放器/index.html","4038cc9a824a25a77d6bfdd9c131db11"],["/tags/政府网站/index.html","e484ff5ffac128c47f724b9d91c5d0af"],["/tags/效率/index.html","bfaf0911d34ca9fac323957392ff8ffb"],["/tags/日历/index.html","4cb3213600e853440208ae486609f729"],["/tags/服务器/index.html","ec08e4351083e996525547723405e489"],["/tags/桌面/index.html","8e81488394b66f5fa71bc988b5522840"],["/tags/梯子/index.html","c8153be7ded82e72f3eea67d61b66a43"],["/tags/检测工具/index.html","a3e7374e4a58fba2a3112556d487e04e"],["/tags/汉化/index.html","b4fb61ea48958094051d11f7f1a79554"],["/tags/测压/index.html","bdb475c22a7c826b5ec80dfbfc0a1e9e"],["/tags/测速/index.html","6c861b2e5b31f23e805eeb7bd4950bf8"],["/tags/浏览器/index.html","fe86b8326b20c03f520f82d193164d40"],["/tags/清理/index.html","15c53685018e4a950a04edb5bee77aec"],["/tags/滚动条/index.html","472f7ac8f6b939ab9de9a49de3d4954d"],["/tags/电影/index.html","6cddbaac74f2692c3c47541633720563"],["/tags/电视剧/index.html","7449c636103dbc7e57d7eb4e4133b926"],["/tags/白嫖/index.html","05fe3cfbe6bdfb000b1631a65c0ea174"],["/tags/百度/index.html","28ac9669e6149cdda316a818c49f92e4"],["/tags/百度云盘/index.html","d08d045636fe2be0b865b780a1697e0a"],["/tags/百科/index.html","15f97e6b412edf09fa9bd35ba5468438"],["/tags/短信/index.html","54081970a03dd80fb8576ad8e55b30f4"],["/tags/硬件/index.html","bbe001613460ce90c7b856d2f9918bfa"],["/tags/科学上网/index.html","717742b0351487e7ec16f3bdf51fca7d"],["/tags/空间/index.html","1f61f19703f451bc2b2247157a2cd280"],["/tags/笔记/index.html","4d3f211f163881344bfde7e3014fc399"],["/tags/简洁/index.html","a64b02d7e8cede01a7a227109edc7d12"],["/tags/简约/index.html","3ffec0498bb91bc1b0b6c7f6eaf36fa3"],["/tags/维基/index.html","90588e70971e0485a25ec82460555c01"],["/tags/网易云/index.html","2c176147840f1172907e162308c9c7c6"],["/tags/网盘/index.html","555749a9b2d7ecc37dfaccc7a7969b0b"],["/tags/网站/index.html","d628f9ca51a6740b8794bea77c55c625"],["/tags/网络/index.html","a2ba875cdc5a47b09cb15a1bc84aedbd"],["/tags/美化/index.html","39b45caaf5db5a70e317e1b41a61a9a7"],["/tags/翻墙/index.html","54195c5c8dc28ff02319db3b68861037"],["/tags/翻译/index.html","0079618ecbe134fd2dc1a35bcab8f091"],["/tags/翻译器/index.html","31f15bfc1eaf497391e4e5bd6c96e2e7"],["/tags/聊天室/index.html","503c97f01beedf2ac29d5ad4113e8e22"],["/tags/联想/index.html","18450d2114db939a47cf0ef5bb8f83b4"],["/tags/节点/index.html","88b21bef5874408af1ba5ebc563f9357"],["/tags/虚拟手机号/index.html","405759c1f5b31d61f293cb61f960fd61"],["/tags/补丁/index.html","aa67029f35ecd597240c1127db77f534"],["/tags/视频/index.html","01f96b47de9374aa4586d24a52dcaebe"],["/tags/解析/index.html","d093e3e0e568422afcd0a7781e1f4d0d"],["/tags/订阅链接/index.html","95477489488d24fb07e3e695f5ef8da7"],["/tags/记录/index.html","3493fc104c24078813f90309ee4caa5d"],["/tags/识图/index.html","6ecb5e0a0725c342a92710351938958e"],["/tags/语言/index.html","3ae1fe26415a2d1a6dd851372cf91136"],["/tags/资源管理器/index.html","145afdc83238db3bbd302f86e16d227a"],["/tags/转移/index.html","4f39c1603d8779ee743ca137c89bbabb"],["/tags/软件/index.html","13c31bb33bbb0a3cf82b0d711ec315bd"],["/tags/轰炸/index.html","76b564d49f494fd29943f03cd66aa98e"],["/tags/迁移/index.html","78a47d71720655c5cd2c64978738dbe9"],["/tags/远程控制/index.html","66204944daf814ca34b99677239b62d1"],["/tags/连接/index.html","3f6eb13013098fcb2425f3fdca938796"],["/tags/追踪/index.html","0e269c484aadfd1bb0a1de6c40dabdf5"],["/tags/速度/index.html","d84b9f64459947f4c1d0c96d0eba8f93"],["/tags/邮箱/index.html","10bd46fead060673a3c1e7999a394666"],["/tags/酷炫/index.html","b3fe1f79fb24a77e6dde9b7a9c1b9ec8"],["/tags/钓鱼/index.html","126ca834672c1335a78b5f35a9addde5"],["/tags/镜像/index.html","499bcb331b8b7b4f84e13d82bc0c22b9"],["/tags/随机/index.html","e3fcce035843238d3883c0b43ee61c14"],["/tags/隐藏/index.html","9732cf72d33caf905817a3e3f4331ee4"],["/tags/面板/index.html","614ef525daf5f7a5d5cb3ab9ded0735e"],["/tags/音乐/index.html","568efa74c95b08b2c6cf868e468219ae"],["/tags/高颜值/index.html","0c3fcb4d98848feada0f092986f69724"],["/tags/魔改/index.html","56fda727a8bbf89a03a752f5b9cdbb8c"],["/tags/黑名单/index.html","185090167674b80e037f1612d876eb3a"],["/urls/index.html","d7463a9c985a4f1d7c49a41baaa324d5"],["/vps/index.html","6bf070ea6f5ae484cd4e691788776cd7"],["/支持/index.html","255fa7417ee28d931baebb44ee2b2b76"]];
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
