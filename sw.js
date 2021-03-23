/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","6bd433edcb9cdb74cde2d12069a9d429"],["/2020/11/29/clash-windows/index.html","c87acbd9298a605f65f1dab19e77a4df"],["/2020/11/30/websites2/index.html","085784652c8efb8fd7beab2a78993639"],["/2020/12/04/iphone4s/index.html","cd5e11cfaec1d55a1f491496f3604931"],["/2020/12/04/onenote/index.html","467156680da89d7f83429896c58cea50"],["/2020/12/04/wesites1/index.html","6b874095a460587cec296aed567af06b"],["/2020/12/06/nokia808/index.html","fa3d2f004428faa7f347e738b36e9089"],["/2020/12/07/ipad1/index.html","dd7f346af594ef6ed32817fe317c4b31"],["/2020/12/18/freesubscribes/index.html","6a0bc4a81061424f024ae8cbdc55d0c9"],["/2020/12/19/musics/index.html","aa8363aaad1c388b9b74f9e18491f384"],["/2020/12/19/shadowrocket/index.html","61d50a80220184a9ca3837d672c55843"],["/2020/12/19/v2ray-windows/index.html","c5a4b603baf575942e436da29e379308"],["/2020/12/19/v2rayng/index.html","bd14e7da843ee9a52e1a582c6789e2cd"],["/2020/12/20/beoplay/index.html","01bacccf4c791404eac1ab512a68a129"],["/2020/12/20/订阅链接转换/index.html","17a6fdf8226a0ba6f4c6cae100857a56"],["/2020/12/21/chrome浏览器下载提速/index.html","488b3ef87d25a4463f82f37badb7548e"],["/2020/12/21/免费128线程并发下载xdown/index.html","445f77715a5d69210bddfd3418d5bb8a"],["/2020/12/21/免费32线程下载软件ndm/index.html","1546bfcab7b3221e600e3eb1c032826c"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","fd83aaa6d13819587fce2055fe050f57"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","9cac6aaec86be1ce9a1cd1dbf07a1851"],["/2020/12/21/广告怎么知道我在想什么/index.html","b0c51aa28b6dfc93a57b59017a000644"],["/2020/12/21/无名·引子（小说试写）/index.html","cfbdbdb4b665f7373e4666ad69001eb9"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","2dd1637ec9a81cf4a4cf55bf7dfa3b67"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","ef9e9c0484abe7171ebdbf235cbf9141"],["/2020/12/21/高速轻量下载器aria2/index.html","1d806b243009ed0b02b2f6fe568ea23a"],["/2020/12/22/2020-cee-roo/index.html","54359c9200e107527a64684ca3f23192"],["/2020/12/22/firefox插件、github、steam富强/index.html","0d94b086755b5681f08d2bd1b2208a13"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","d2bb9ec35565fc701952510df8d9701a"],["/2020/12/26/python-day-1/index.html","69aba2cf3d6386bdc75b6171a5435e07"],["/2020/12/26/python-day-2/index.html","0e1e32bab777ab2e01fb6cf88f9ae9b2"],["/2020/12/26/度盘不限速下载方式一赏/index.html","4aec3f9cb5cd14e33fdd72b5fbf699b7"],["/2020/12/26/添加开机自启软件/index.html","f451283acc278e1046f6bb8fc590180e"],["/2020/12/26/电脑端截图方式一赏/index.html","21298df41957b05403fe76ea0562719e"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","dabe38acf318dea28e51cc8b942aa5ee"],["/2020/12/27/最安全的浏览器tor/index.html","b5b21b634dcab47adc6396a31dde6f98"],["/2020/12/27/网易云刷等级和听歌数量/index.html","94a7c793a0615e96d669fd65aaf944f0"],["/2020/12/28/freenom申请免费域名/index.html","e582e9d11280a362ee196dc69cb07c42"],["/2020/12/31/机场/index.html","4a20bc580912370ef3f1044041c32d5d"],["/2021/01/01/M1/index.html","1aa4b49e41ddf6fcb1a89d27fa2fa707"],["/2021/01/01/compress/index.html","f09cd95c4c1323a5b76e65acde039858"],["/2021/01/01/infinityfree/index.html","2d3280788aec75626520219ba92a1bd2"],["/2021/01/01/硬核翻墙/index.html","5939b5c3354034072e5a6d064b6f959c"],["/2021/01/02/qq/index.html","116f46f30d7b7afd48d7ed0a95304c4a"],["/2021/01/03/netch/index.html","fa1c8eb0f554039fa3effb249af862e4"],["/2021/01/03/waifu2x/index.html","48d24903d242aa57a15d080270074d13"],["/2021/01/04/ads/index.html","370a39c0e699f0b7859fa958f58dcbc6"],["/2021/01/04/games/index.html","dab4c269cedc9acbc95627c2931162d5"],["/2021/01/04/heroku/index.html","35b98293e337192ab9e05e56f055ad0d"],["/2021/01/06/movies/index.html","d22b4f6d04dcfd315055efd4a33c19ff"],["/2021/01/07/google2020/index.html","e02b9fc64d2df881508d8b3e26c478a9"],["/2021/01/07/lucky/index.html","90e072204fb6413ac8dc99f853479f1a"],["/2021/01/07/spotify/index.html","47da86eb32e42fc17088f5833f3435d6"],["/2021/01/07/thunder/index.html","5f908bf13ff47075085e11ccdb675770"],["/2021/01/08/adguardhome/index.html","8858dace6f7d91c00d99326d3dac2e63"],["/2021/01/10/IBM/index.html","89c478302ddc2da79322682c21f1eeb9"],["/2021/01/10/potplayer/index.html","03791592841f974dadf923a50d04d524"],["/2021/01/10/sakuraanime/index.html","8a78ce0c9911ab4c9b64e3b3f90e72e7"],["/2021/01/10/美剧星球/index.html","800f726cd50b8aa07b4292a218707125"],["/2021/01/12/telegraph/index.html","148adf6168e0f76cdb58d21e8a219cdf"],["/2021/01/14/comics/index.html","6423b07b375508f82d6d28153e60a1cd"],["/2021/01/14/ftp/index.html","23750a713dd17a03946359e177222a87"],["/2021/01/14/oraclecloud/index.html","6bd9b0e0a459c15ea3659460846619e1"],["/2021/01/14/porkbun/index.html","2a4db82677702ccfa09cf8e8c21ff740"],["/2021/01/14/powertoys/index.html","bbc9438dbf41d10adc5ea62f610525ac"],["/2021/01/14/taptap/index.html","433fd338842951780524d6a92d384bc6"],["/2021/01/14/ubuntuvsftp/index.html","68eaeda38139e9469735790ad13dce24"],["/2021/01/14/小说/index.html","5b7e1199764e584f8bc18d72c5820e78"],["/2021/01/15/freeproxies/index.html","1f91f88fcb59cab462c6a217c4a82743"],["/2021/01/15/incaseformat/index.html","5a60ad8ad7c55c80f1f2d983448abed2"],["/2021/01/16/euserv/index.html","32498d89d41c0eab0d43635ae7d4c4bf"],["/2021/01/16/winxray/index.html","22a3028f5182495ff179617c54233392"],["/2021/01/18/qqreadhistory/index.html","8343e605daf121c4bbc2be745a8bf729"],["/2021/01/18/qqrevoke/index.html","808d9aabe5b3b0efa49c6188b43d5bd5"],["/2021/01/19/freevpn/index.html","b0a6930ab6ee58a35d67cde4ccf0d9f6"],["/2021/01/20/browsertrack/index.html","3b9a3c79759212d700ddd9d596476905"],["/2021/01/20/v2ui/index.html","d16faeaae6f655e2006e57c684378eab"],["/2021/01/21/failedtoconnect/index.html","7ae665b06464b5ae2b8fe65eedbf48c7"],["/2021/01/21/gitcalendar/index.html","5fde02918b4a24bc6a5d3ed1d97e98b0"],["/2021/01/21/markdownformat/index.html","1010438d5460e738d87848f8ed4cb32f"],["/2021/01/21/markdowntable/index.html","25947a6432660d906f10f8fe994292a8"],["/2021/01/21/vercel/index.html","3d23c0686602f0a2d97077c9b1d6216f"],["/2021/01/22/hardware/index.html","7cd141e85c7ce6ec4b3a707843762a82"],["/2021/01/22/muviz/index.html","d29fe7cc010c9e7fca269e76618e4903"],["/2021/01/22/randomapi/index.html","0b978f8eb38d1e1565e775eec280c6d6"],["/2021/01/22/searchimages/index.html","c05c846ea66f9f50b102a4e1fee66971"],["/2021/01/23/RX文件管理器/index.html","3fc46cb1e923c79993e75b2548996dbe"],["/2021/01/23/chromeflag/index.html","32f8ec365209a08194cdb4cbc44e4bcd"],["/2021/01/23/qttabbar/index.html","1327d5409a0c1661ab32cbf19cce5379"],["/2021/01/24/githubspeedup/index.html","f244a094e49861b43009624ffbb9d864"],["/2021/01/24/jsdelivr/index.html","2711e72eb58d876e0bde332b68dca5ff"],["/2021/01/25/note/index.html","038d3faf3da5150aafd6fc5666264531"],["/2021/01/25/soul/index.html","66f42bd42c8c9cb46ab8e7ee5833934e"],["/2021/01/26/herokuxray/index.html","3ac192cbbac1d753115d86bfa451c4f3"],["/2021/01/27/proxypool/index.html","fd55a49aeb4fa2f85f554aa6536bf1cd"],["/2021/01/27/tracker/index.html","4bf5c0a2abe050e0b0655f0b5d3157f6"],["/2021/01/30/pandownphp/index.html","ebdcaa50498183b7e08ba8ddb5798722"],["/2021/01/31/newgroup/index.html","93fad96338fd3c45c7ebe51be80a7d06"],["/2021/02/01/clashlanguage/index.html","7b091d8ce0f9ff339105f8a53463bc13"],["/2021/02/01/encrypt/index.html","1f4faa78d352675b5627c56761781039"],["/2021/02/01/footermotion/index.html","44740bc4a0b0c6ca1b5f5bd92e8ca21d"],["/2021/02/01/gitter/index.html","78c61dcff9fe4e9e50c90e70c9c827a3"],["/2021/02/01/pixivtop50/index.html","0e85bdc088088a758b4b2826e2ca02ac"],["/2021/02/01/scrollbar/index.html","4b5329d18993666b559891ca1b16522c"],["/2021/02/02/clover/index.html","6cad994424c81df1711c71aa4fd1c049"],["/2021/02/02/maya/index.html","5174a8a348f37af97d4bf06ca516ae96"],["/2021/02/02/speedcontroller/index.html","79d405a10006e4cfda75b63009bd63e5"],["/2021/02/02/yesmusicplayer/index.html","50376bbe7894a89e41ab7ad9a2069e3a"],["/2021/02/03/lenovoonelite/index.html","4bfe5ad07a25dcc3966358e1a85b9511"],["/2021/02/03/skipads/index.html","827f949f7bb5f2b251d53a1b8483bcc5"],["/2021/02/04/picseed/index.html","82ebb619c4ed014c2e9c805b4e55cf54"],["/2021/02/04/renren/index.html","cdb6c214152ce493429b67da855f4827"],["/2021/02/04/serverstress/index.html","e94a158c9fb3e9bf35db79dce65934e3"],["/2021/02/04/wikipediazh/index.html","81f3d510a3b44c1e1e91785d3d285638"],["/2021/02/05/googlevoice/index.html","981068f150579a654104993480d33e4a"],["/2021/02/06/clashconnection/index.html","35ba563f565ef033f6acc7031c21469d"],["/2021/02/06/gvtransfer/index.html","6b238ac380661557eb4a514af46082ed"],["/2021/02/06/todesk/index.html","985fe9cf6cee136d44393396235f46bc"],["/2021/02/06/vpnblacklist/index.html","023ed152145847705fdba0ca81334edd"],["/2021/02/07/mklink/index.html","461dbe36310c3031db0dbf27e5f8e69a"],["/2021/02/07/speedtest/index.html","1035bb9764e872b5d33d550016797a09"],["/2021/02/07/translate/index.html","a55836340141b369e72a36fa058d1247"],["/2021/02/08/ewomail/index.html","d29102d694e36eefd075e3df96d86620"],["/2021/02/10/officee5/index.html","ddc449f90847fecfeaa0cd4fb1fedcdc"],["/2021/02/10/raidrive/index.html","15383c9d5102f6eb6a9176fa2cf0c5f2"],["/2021/02/13/e5sub/index.html","83f5d7470fdb6a08219d0a018ecc13fb"],["/2021/02/14/screen/index.html","df5f72c9e43a40cf4fa0c97abe261829"],["/2021/02/15/clashtun/index.html","29310c4d77a1280c3e18b4845bd4cfce"],["/2021/02/15/messageboom/index.html","51686be43c1860d1507d98faf824bf6c"],["/2021/02/15/oneindex/index.html","44177f532fa7797c241e94734811b2fb"],["/2021/02/16/govsites/index.html","e1be7839342b6216ce2f6870123a667d"],["/2021/02/17/hexototypecho/index.html","986eeb4a60383b1a9c4580cab0ab105e"],["/2021/02/19/fiddler/index.html","bab507bc2f6aa1df5c8d461143d9da3b"],["/2021/02/22/potplayerset/index.html","3a851c7a1420301cef8e155a31bea826"],["/2021/02/22/studyresource/index.html","e077ccf0f55020515bf0110242d11f4c"],["/2021/02/22/telegram/index.html","2914065ab18e73016a9057f5768cffa9"],["/2021/02/22/videos/index.html","ce48c069a886a20d9b7a01d4c11c7cfd"],["/2021/02/24/mtproxy/index.html","8e0839a43f8d17fe4ab5018c7c7fb98e"],["/2021/03/10/catchcat/index.html","19fcef1a27ef5696c3e2e16ce8743de7"],["/2021/03/10/neteasemusic/index.html","c71ff67e18850ecbb0cc08441a8ab49d"],["/2021/03/10/surfboard/index.html","fd20c12c4c0d209ed577a10ac933165d"],["/2021/03/11/vpnandjc/index.html","71cea632ede2b886d3da23c928aba0b9"],["/2021/03/12/qrcodes/index.html","d20df409f01bb7b4e94138455bf8dce7"],["/2021/03/20/qv2ray/index.html","02fd49d01ac935be94e1cc698ac5c8e7"],["/2021/03/22/freevps/index.html","73459d1e3acfabd2c3f7307bea096199"],["/404.html","43d26053335a68ea6c2c55cf4f847885"],["/archives/2020/11/index.html","8f3a85932b76cf518e0faaa1d97001da"],["/archives/2020/12/index.html","267ba54dff8f46506f218c87ce9f8fc3"],["/archives/2020/12/page/2/index.html","ff24c7b67b2838d48fd8cf00576f07e4"],["/archives/2020/12/page/3/index.html","2299ca34d5a91735f241b3e56c87c1bf"],["/archives/2020/index.html","a348f540513d1484f362d2587d017f70"],["/archives/2020/page/2/index.html","88a26cdb0fc475578d60e505766bc114"],["/archives/2020/page/3/index.html","f4be4bb3a1b7c9b938e40a920f1f72aa"],["/archives/2021/01/index.html","b12937b5b1b852f9b575990972619b6f"],["/archives/2021/01/page/2/index.html","3b19e8c4d4e5ab482a586bc58fac12ee"],["/archives/2021/01/page/3/index.html","505ad3e8a20183b765346ef524e10564"],["/archives/2021/01/page/4/index.html","2bbd53e379bebf31eb464d2745a7b750"],["/archives/2021/02/index.html","4d7db10e1c322492999c1ea4557c9fac"],["/archives/2021/02/page/2/index.html","31e2d2f727f820d04af9fe1fd2bf2abc"],["/archives/2021/02/page/3/index.html","bde8135abf8e03e6b2c4502b27055669"],["/archives/2021/03/index.html","1ce8a6681c02fa588a9183fd9d2ce6f6"],["/archives/2021/index.html","98574fd9161f6c6705417d9dafc6e1ff"],["/archives/2021/page/2/index.html","9563e606a2519dda8ca85844460d95f1"],["/archives/2021/page/3/index.html","00c575c83a1f784bcf1a5cf68dd5f07e"],["/archives/2021/page/4/index.html","852f0aa047347a534d17dd61fec55381"],["/archives/2021/page/5/index.html","1e1bd039521e222504836703ff7b0030"],["/archives/2021/page/6/index.html","3441bb7fdf9426871020f51f8de922b4"],["/archives/2021/page/7/index.html","fb7503555cae821110ba033369eadeda"],["/archives/2021/page/8/index.html","375ed81a8a0328aec9b173dd0f7313aa"],["/archives/index.html","b2b2fcb44bc9e97e2dc946b0ef27547f"],["/archives/page/10/index.html","c5b399618dd525f2ad7025443b234387"],["/archives/page/2/index.html","fd6ac53d024e2562eb5deee82a26effe"],["/archives/page/3/index.html","b7b229347a7fc5312612b6a5f133f1ed"],["/archives/page/4/index.html","8464cc40db0545cd7cbf9de9ed7296bb"],["/archives/page/5/index.html","d00f34b969ce2a36566453bdc2ef32b7"],["/archives/page/6/index.html","8c86526fc33e385e6951e29af17ffd43"],["/archives/page/7/index.html","f2f0ec995a0b65112dee281b3364add0"],["/archives/page/8/index.html","cb7ef22dce8f17a5cef903a8ca90f04f"],["/archives/page/9/index.html","30dfb7879ce51959afae10e58779bfeb"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPN/index.html","33178cdcb65513011ea5014fcacc4604"],["/categories/VPS/index.html","4ee8e641091a38a63e9a0bf77fd14600"],["/categories/index.html","73c597dd1fb0ac435bccd29044ac65ab"],["/categories/下载/index.html","4fd13336493fb3a4f3924d5e8635ef3d"],["/categories/安全/index.html","d47cbee904dedc11400d4faa92ce1069"],["/categories/建站/index.html","7e7f9dcf3f301e2c4f8944c4dda43bfb"],["/categories/杂/index.html","7876240a512d98af1aae179048aeab7e"],["/categories/杂/page/2/index.html","8f5d6695b6d8854f20c63801d48e02e0"],["/categories/测评/index.html","4ea60544f86cb839c22b5c9c60acecf5"],["/categories/科学上网/index.html","7dd8a8edf6ff924f66e95cabdf04c43f"],["/categories/科学上网/page/2/index.html","036b0b15b6d97385ddbb35a74a0679fc"],["/categories/编程/index.html","fb440b55f764281d6e1a4113a7e9caeb"],["/categories/网站/index.html","51826d725dc676956fc0fd79e0651caa"],["/categories/网站/page/2/index.html","a3727437b352dfde230560e14430cd22"],["/categories/软件/index.html","22b4e1b51a97f95d6f5c44c94b54ea8d"],["/categories/软件/page/2/index.html","41187ae04abab4432fcc25432ee79c69"],["/categories/软件/page/3/index.html","e78f407e37da06ce5abd21f526cc5a1a"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","885a6d9e39021e78d559641fc839fe71"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","b754f58ace31b8f1f7f33e8481e2695f"],["/ios/index.html","c78a75f7e446abcd75abbd99d6ea8122"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","97a4a8e681ca7c1492775601b4beca9e"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","015568ee3d3b36e83d919114d3e4c6a0"],["/page/2/index.html","b84463bb1f0f975fe38499d00476800b"],["/page/3/index.html","2bd80d718bac6fd5611d56e3ea8ffdf5"],["/page/4/index.html","3f7c09db26f08526762d199c0f5a4d65"],["/page/5/index.html","35f5b471a6f46093ca533744842a278f"],["/page/6/index.html","dfe3ab12b034e8f2bacefeeae9e36d11"],["/page/7/index.html","d9b79693b21f629e60aa53b093e83d67"],["/page/8/index.html","ff4034e43743705ec343ae47b28c8f1d"],["/page/9/index.html","34246003355f6f111f32c3b9aba3ce49"],["/payment/index.html","0c690a6bbeca98e031f16aa95a061961"],["/privacy-policy/index.html","17d301d556eb1e8e68bec7656bf1a019"],["/rss2.xml","fd0becf27be425d34bfe75a3fbcb6231"],["/search.xml","d3aeb32d94830ed1532f70fef1cae8fd"],["/sitemap.xml","1d49cbfbe519383e1d7c4bfef07ce523"],["/sw-register.js","35565211fc56155dcf5c4adf1becb239"],["/tags/5t/index.html","58f1d5a11f4667d9cd31f2313fb1ab47"],["/tags/Clash/index.html","b24e804300fa698e09fa4420157d4404"],["/tags/Clover/index.html","1468ca649420b37ee03910e47776896c"],["/tags/E5/index.html","da0cb6c14933009f0a6c274c94d36c6a"],["/tags/FTP/index.html","060f9ce8722da6813e43bb64ca7e6acc"],["/tags/GitHub/index.html","d53c1f7de27a683fd2ae0c7213168789"],["/tags/Heroku/index.html","dbdbb07519655cfb68c8d96db2967380"],["/tags/Hexo/index.html","9f827dd41ef31284b42e8302ae25d8c9"],["/tags/Lenovo/index.html","0d5b792f22ccc537414619da5c91d55a"],["/tags/Oneindex/index.html","fc89aa23871a6d1dd80eb4c7093fc747"],["/tags/QQ/index.html","bec7d2928dd6d5871b35cf1da7f86d9f"],["/tags/QTTabbar/index.html","8158cf2f1778efb09efc372bc76d5f35"],["/tags/RX文件管理器/index.html","debaec8145852c5565e9125b8ae58793"],["/tags/Todesk/index.html","c44700fc8e1c880183677caaa7d81df6"],["/tags/Vercel/index.html","7ba10d0612170a60996629f549d3cebe"],["/tags/ads/index.html","1d36e99ff224091e231a9ea284854d24"],["/tags/api/index.html","653794ebd92a8ba740a35ffcf874604c"],["/tags/app/index.html","0e8beceeb43961249d9c0a2c19d0b37e"],["/tags/blacklist/index.html","6d19cd2ab5b3cc70cbb8d93ddc054e76"],["/tags/butterfly/index.html","982445e3660ffc58afb482390c923bf7"],["/tags/chrome/index.html","7ca11d6626d88333b46cf0ba97249076"],["/tags/cloudflare/index.html","4c40e7e8f581f19e0bb23ca4f1d196e4"],["/tags/cmd/index.html","97e8851224fa96159c83672f467c7ce1"],["/tags/c盘/index.html","f52f1ea3bc4e496f5902e244cb648118"],["/tags/email/index.html","fe8ed6e98f3e756e46bd20937b637476"],["/tags/ewomail/index.html","11b267e14fd727f5711d52941844593b"],["/tags/fiddler/index.html","a062fd28042316da9392af8f7c5c6090"],["/tags/flags/index.html","aafb75ec5b90548e16c195a68e839d37"],["/tags/footer，页脚/index.html","7f02362a664984b37f16dbb1566e72fc"],["/tags/galgame/index.html","ce90fcb2531590b1fd28b80cecac66c4"],["/tags/git/index.html","1b0d7cdff10dab6dcec578553db49724"],["/tags/gitcalendar/index.html","76df0c1852422f837703b9ad9226c245"],["/tags/google-voice/index.html","585cebc2aa794c08bf46fa25f9cc43ac"],["/tags/gv/index.html","6a83053f16b0570a222c55162f0c02d5"],["/tags/html/index.html","0b795ab86216861e9c0fa2e06bd2f482"],["/tags/index-1.html","5f732b42e207139c11f38c741c970ca8"],["/tags/index.html","8c15f6341d4732768f2b30022997f587"],["/tags/js/index.html","d35ef337a6368c2527a842259e267eba"],["/tags/jsdelivr/index.html","bf8f5b18f27fb3d343c448e5e49eeacc"],["/tags/linux/index.html","dad669d999702f60c3ca774910bae60b"],["/tags/madVR/index.html","7efa45a14d442392695a1b1da7540957"],["/tags/markdown/index.html","a498097c920e9a02b570a5e63130c517"],["/tags/maya/index.html","fb891836880a62b95797b717e50c6431"],["/tags/mklink/index.html","53f7344c42f6810cd4891a61458145ce"],["/tags/office-e5/index.html","72a64e06310f30e3282c0b220ce8b065"],["/tags/onedrive/index.html","5fd934ea7f99f68db263656ef0d58280"],["/tags/picGO/index.html","fb78fa66b36b50800d29d559f224702d"],["/tags/pixiv/index.html","a1e012e2f941bfee06d9850c9826e7e6"],["/tags/potplayer/index.html","c621fb2a4d2a9329a5f8e9aafc8e6e29"],["/tags/proxypool/index.html","8a920b06cd68e64865245db1297eebc2"],["/tags/qbitorrent/index.html","84b0ef5ae197bbbb99cd6fc7683fdc14"],["/tags/raidrive/index.html","8b1e8e607aee251646a37179aa24e7fd"],["/tags/screen/index.html","6d51a327c964569cac8fc0a85eb60a67"],["/tags/speedtest/index.html","28c56e4930bbcc981663b2bd914fe9e8"],["/tags/ss/index.html","e190442f086070cd813195dc69f13a93"],["/tags/ssr/index.html","d67511957eb55234619dff3b8b78eb85"],["/tags/surfboard/index.html","b2e87a27f31140a9f96edeac3cb768b8"],["/tags/tap/index.html","afa89d85f19f2fdbcb16e376e9aafdb9"],["/tags/telegram/index.html","85f01600581fb3a3d95fbc497946023b"],["/tags/telegram代理/index.html","678781275ed1eeb6aa11d53370b3bbc6"],["/tags/tg/index.html","9fd6d43e62abc41760ec0792f9fda1dc"],["/tags/tg代理/index.html","b5e1a1e272d2d1050b83403d3c098224"],["/tags/top50/index.html","acbdfe9a04fff472fcc7564a4e5b1307"],["/tags/tracker/index.html","59f36c41453cdd0cb6c6c7e3e2ca3715"],["/tags/translate/index.html","712ee94690bd0bf79c86b83fed07d6c9"],["/tags/translater/index.html","50c32f601e938416a1650f34c6576bd6"],["/tags/tun/index.html","3af0de702dc3139f3bb4cfec98de3ea0"],["/tags/typecho/index.html","66c6cab8d0acc77fbfb72b8aaf4086cf"],["/tags/v2ray/index.html","1ce8cef01ccd07a5999b528fba97c9b6"],["/tags/vpn/index.html","7c97003eb897ba52873c8b9a1dac0f27"],["/tags/vps/index.html","da58c0c8fb5e876d46a0932581a01d2d"],["/tags/windows/index.html","5b4409f4ce5bf8467356c3ca81e38467"],["/tags/windows端/index.html","2f9dc1465f62589f62fb8b0e9f817c24"],["/tags/xray/index.html","7ecef417b2d501694bf85ec2b029ede6"],["/tags/下载/index.html","fa2b453041d87d48d8aabc3f15eac078"],["/tags/不限速/index.html","18543a1df0a87d41527656c43ffdfe1b"],["/tags/个人网盘/index.html","f0d92de7a55b8e61cced11631a93aad3"],["/tags/主题/index.html","7ca600af68539f8e290df66ac3a5879e"],["/tags/二维码/index.html","90af6c085de0b992a82b0917c5e7e029"],["/tags/云便签/index.html","b3e49ec9f3c874a39f0f22b47e0baa24"],["/tags/云盘/index.html","08a2ae5f72f6acded7a08489ed6a6d1f"],["/tags/人人/index.html","0c0f24b64e17ed87e9500ebc48704d43"],["/tags/代理/index.html","f6769d7e471a380b3d9121067d32c04f"],["/tags/代码/index.html","7a49743ca49fdadeeedda0b7d704e685"],["/tags/优选IP/index.html","524e16d298a9d1682c3e51e55ca99387"],["/tags/便签/index.html","da09d69b96137afdf70332b28ac5b848"],["/tags/保号/index.html","33be0832c400109796b64c04e416c1e0"],["/tags/免费/index.html","fbfccb1d1c9d4ba2d65f282b4f5f9975"],["/tags/免费节点/index.html","6bc793b50ee5b06352686a5ee2a451e7"],["/tags/加密/index.html","83bb984904a84a43dc03c5e22be59783"],["/tags/动画/index.html","eba9e15372c6d909bec0654f4a991b23"],["/tags/博客/index.html","394084e2956adf1c95d50e552bcc82aa"],["/tags/历史记录/index.html","db3bd9cce64dd5f4d4e7002d4c93fc8f"],["/tags/压力/index.html","03ac716259dae2eb9ec9c4c2f94171bc"],["/tags/压缩包/index.html","f4e563dc518dd3268f592680f250e412"],["/tags/反代/index.html","fc8ab8f2e6b883b33cc5dfa34f636285"],["/tags/可视化/index.html","a739222525e97e80b069176214aa0b0e"],["/tags/命令/index.html","c2753ecf5e1f005b62db70a961aecb0e"],["/tags/国家/index.html","b9b8d144640dc7e9ffca499271e75417"],["/tags/图床/index.html","9afeb60d9b2183b063d9559965af24e2"],["/tags/图片/index.html","e588d706002c8ff7754e0ac6b8e99ae9"],["/tags/域名/index.html","5d0f3f8a379de85568285d55210beca5"],["/tags/多标签/index.html","0408282904774e25ccd1693f2cae4000"],["/tags/存储/index.html","3d16e71d28785e61ce9f7cbc22a58e43"],["/tags/学习/index.html","233fff8150cef4d98fde51336765cd9a"],["/tags/安全/index.html","a1c8cd5f5477571634baa724c1e31af6"],["/tags/安卓/index.html","5af2c4c6e66d4b164d026db03673645b"],["/tags/宝塔/index.html","b27ccc633198403b411c2a7a03120192"],["/tags/小游戏/index.html","9a58d68dc50f6aeb579214a3be42aa10"],["/tags/广告/index.html","b2b82c6fde8ac25096db83b71e5ae111"],["/tags/建站/index.html","9c4d69f3759a170a98c9080906e758b9"],["/tags/影视/index.html","1dfc2929375906211ce1d55872188517"],["/tags/微信/index.html","4f86f750f758e3bed40b38e9aead9799"],["/tags/快速启动/index.html","cc392d036cd3c74b77ef271e3246fa71"],["/tags/手机/index.html","1b1deba656a0f823e74e192141fdc9ed"],["/tags/托管/index.html","9dbdffcf89662d5af4b3e680f11976bd"],["/tags/抓包/index.html","7518e7cf657146b9fff6d568a042ec64"],["/tags/抓取/index.html","6cd9eab992b5164825be56a1914a2949"],["/tags/投屏/index.html","b7ec280e675e613e14c3dd3d0b942764"],["/tags/拓展功能/index.html","04270c0a7186631879c4da22d6966754"],["/tags/挂载/index.html","c51f795535d9efe3b93018aa47e2c37a"],["/tags/指纹/index.html","f09ff051729eb08b940424ce1722bf6f"],["/tags/接口/index.html","4300b5c3ae6f8f58fc82587e9afb89e2"],["/tags/提取图片/index.html","5bc638e1179e7515beb8157485498889"],["/tags/插件/index.html","1f122963764a03af992caa66d5ad015a"],["/tags/搜图/index.html","e9a79d6a46fa6c05bba10aab75dcf21d"],["/tags/搭建/index.html","fa616ca4979fa95171a2cde457484f5e"],["/tags/撤回/index.html","f74b599214377f6309357b36d029449c"],["/tags/播放器/index.html","f788850a20f271a3bd50eae029e143f6"],["/tags/支付宝/index.html","ce77769c5f1d2633ed08b9fc68a235fe"],["/tags/政府网站/index.html","244047931f90c4534b0bee0aa98b5d48"],["/tags/效率/index.html","8a59a2a2a35ee4b2e255e36debffc1f4"],["/tags/日历/index.html","9cedd8fbb46b9a258493f9251665cab7"],["/tags/服务器/index.html","41f50ac3addab8d29593c4fda849a959"],["/tags/机场/index.html","3dbdb77affe84a6be4613814b730ab5a"],["/tags/桌面/index.html","f263550f4b2782f064a6a28bebd40891"],["/tags/梯子/index.html","813fa259a4d68b11cecbc59a8da7a0a8"],["/tags/检测工具/index.html","7b2fefe61775bc2415f8f9c2b8490e58"],["/tags/汉化/index.html","33417af1a39ac8d4bace2303d8ce36bd"],["/tags/测压/index.html","b2ad507cefff1e3c44b19763a66ca553"],["/tags/测速/index.html","0e613fd439c0afc026894f0284087aa5"],["/tags/浏览器/index.html","c25b7bf4d952df6c52038f040233223c"],["/tags/清理/index.html","4f916418ebfd5c049e4fd646bd566637"],["/tags/滚动条/index.html","0be6ea2701cb2190f20ee287a357d7cc"],["/tags/灰色歌曲/index.html","dd5fae194d20913657a8698aae9b9b04"],["/tags/电影/index.html","2271bede7567c8c82cfc2fe1bd4a1577"],["/tags/电视剧/index.html","e2512d8ff13226d3df16cfb8afba63ff"],["/tags/白嫖/index.html","dc9270788f5e93e67a0be75e7038976f"],["/tags/百度/index.html","0119437f1d4043220b0651b14c2cd127"],["/tags/百度云盘/index.html","b869461c748c7bbe35fd06ef645e4dae"],["/tags/百科/index.html","e32de613400d8f8759fb7401c7e7b082"],["/tags/短信/index.html","51c8b8179f8f2ec5ce94bcff738ff49e"],["/tags/硬件/index.html","13d71beab0814de9fdd895a6f94ed910"],["/tags/科学上网/index.html","7515a0177eb8495a439c93702c66b4e8"],["/tags/空间/index.html","1c35ac8c92c16b61e52bbf5a45b6b87d"],["/tags/笔记/index.html","eaf0853a57873b002800898c7635e12b"],["/tags/简洁/index.html","99320f2d3cd77ccbd8a0871996357dca"],["/tags/简约/index.html","8591e1ccd3fd5a2e925fe059e22cd403"],["/tags/维基/index.html","3b8f2d25620bedc1cbc03d236de9f832"],["/tags/网易云/index.html","13f9d10183d84f480e9534e7fe1b3f7f"],["/tags/网盘/index.html","5e175124158499ef37446aae04036571"],["/tags/网站/index.html","e1b6ccc32f77c14063386f5f7faed67e"],["/tags/网络/index.html","ac908797625ffa6be8d26a9c13c6f742"],["/tags/美化/index.html","97b2352724e1594d93979add1fea066c"],["/tags/翻墙/index.html","6b7f6cac32b61775e7fd69a3c5b9caec"],["/tags/翻译/index.html","6ab494bad3cf5d23bd2f3f901c74db0c"],["/tags/翻译器/index.html","78a51aced3ee697630091a77710aa7f8"],["/tags/聊天/index.html","fb4578a7edef80c246fc1072ec05c76b"],["/tags/聊天室/index.html","019cf488f7d1aa37e9a7aca19498f8bd"],["/tags/联想/index.html","824ca6f5073750d16541c5ae931f1fc8"],["/tags/节点/index.html","8e71c14ebd7bcfd3a30d80daabb4a97f"],["/tags/虚拟手机号/index.html","b24930df8afbd7eadac7ab293b6d8201"],["/tags/补丁/index.html","99192c02f45dce18c4907cebdfd16a04"],["/tags/视频/index.html","c6c17933e5e5a399be36934f382e68c1"],["/tags/解析/index.html","bd72f9ac0f19cf41834df7e238433557"],["/tags/订阅链接/index.html","a6d746c2eaec0f80fe99e00d663b2889"],["/tags/记录/index.html","40f69a7f9579359fbac6afaaf6f2de28"],["/tags/识图/index.html","f9fd6ec60f300cf98a71c8bc2cb33dae"],["/tags/语言/index.html","d89567e7eafb1e402848eba164b813e2"],["/tags/资源/index.html","3d2ad7c27f92858dcf3f8f62f0dce070"],["/tags/资源管理器/index.html","84ad3b63a4bf80e375759059792a9d16"],["/tags/转移/index.html","46af3bf885533a54d947f3ea0e4bca51"],["/tags/软件/index.html","1e1b62e4721cadac6e1330372dd3fed4"],["/tags/轰炸/index.html","28ecaaa86f85923f1b7b319d39690f0e"],["/tags/迁移/index.html","128dd26eafa87c66a4e0ae564a343be6"],["/tags/远程控制/index.html","64cfdcb983b01e679be5239d93d122cb"],["/tags/连接/index.html","e3a8b5a953fcc2c690e6f5c11682a840"],["/tags/追踪/index.html","f006936c74168ae67aa4c2eec3531041"],["/tags/速度/index.html","3d2fceeca49fe9597612fd90c1ed818d"],["/tags/邮箱/index.html","b544685b377a7fedb7ba8b225098b8ac"],["/tags/酷炫/index.html","0255dbec54c2a572cca143f050ba0ada"],["/tags/钓鱼/index.html","6256022fe5f5fa99e68c67879da6bc2d"],["/tags/镜像/index.html","c5326cc35734780e3cbe38c0a759c7a1"],["/tags/随机/index.html","7cfc264e1d1eed9fa6400876b31caebf"],["/tags/隐藏/index.html","76e2ce3b7d72430ea3885a6514bec7c7"],["/tags/面板/index.html","ec0d5beea6955330864b02abeb223ac2"],["/tags/音乐/index.html","1e13f5c34d01a8d8f4d022ae0a5a0b0f"],["/tags/高颜值/index.html","faf3de6a3670d88a358485e776312900"],["/tags/魔改/index.html","a94ade8b740761bd2bbdf43b5a2b5ba5"],["/tags/黑名单/index.html","883831aad71883c409bb18d622184eed"],["/urls/index.html","66dd7a4dd07efe95e2e4510db557cf84"],["/vps/index.html","b0f9af39c2d1e5368cd00a3520048f28"],["/支持/index.html","3cac4200898f438d45d71c9cbdb9b7c6"]];
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
