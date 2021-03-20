/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","91381346c3ef6ee1150b5b5bd4195941"],["/2020/11/29/clash-windows/index.html","d759c52d44ac215db41125c2543128c4"],["/2020/11/30/websites2/index.html","ff3d86597aa06d8ecc9889026339665a"],["/2020/12/04/iphone4s/index.html","347d26c102e718d6409d1e560db68906"],["/2020/12/04/onenote/index.html","562b290dd555afc257b9ca044a4ddb07"],["/2020/12/04/wesites1/index.html","c9c5769cec0a28da820e9959a30280ba"],["/2020/12/06/nokia808/index.html","01a58eb548ea533909bc456608f52fb8"],["/2020/12/07/ipad1/index.html","21bf012310bbdac3381c7b5ee8c35ddf"],["/2020/12/18/freesubscribes/index.html","8f1a9bf4ddeea5bfe951a250f7cc43bd"],["/2020/12/19/musics/index.html","b9cd3cc2244fb6f4ff2820e789d5d6c7"],["/2020/12/19/shadowrocket/index.html","2576ba43d3c178c59f6075cb61c8a76d"],["/2020/12/19/v2ray-windows/index.html","87433c00e40e293888eff2859e538a52"],["/2020/12/19/v2rayng/index.html","33affa1d2e7a61ba385738d4a657cacf"],["/2020/12/20/beoplay/index.html","f8450471274913421c7f1946ecbce60e"],["/2020/12/20/订阅链接转换/index.html","2881d047d9a6a5a2e1d5b3a823ed2644"],["/2020/12/21/chrome浏览器下载提速/index.html","e4007ba625c75613f827dc3999bccb6a"],["/2020/12/21/免费128线程并发下载xdown/index.html","150c6cac0b478e669a4e2ff3576b6d2c"],["/2020/12/21/免费32线程下载软件ndm/index.html","af626a57b1be603c9832ec93c3a5c499"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","89352cc2fc741f7930ad29b64528f83c"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","1066fd5a74915386996fb2f5e20135f7"],["/2020/12/21/广告怎么知道我在想什么/index.html","c309374d9cc1d2a63f59bb7755833b40"],["/2020/12/21/无名·引子（小说试写）/index.html","da2f6ab503963b48ba564e8a462c02a4"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","cf1fa715b2da195ea0abec9026d8e637"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","f0ceb3dca1aef231dd5762168df77bbf"],["/2020/12/21/高速轻量下载器aria2/index.html","0c8d6cc9e7538704ed88e84fa4fce37f"],["/2020/12/22/2020-cee-roo/index.html","f37eea42443ab40273745516e76412d0"],["/2020/12/22/firefox插件、github、steam富强/index.html","b9d859074f4e8c131a95efa34061103d"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","e267224537b9a8a9c34fb1a3e5a52c6c"],["/2020/12/26/python-day-1/index.html","bbf7aa06e2c50c9751531757472f1673"],["/2020/12/26/python-day-2/index.html","889a0b40e48e4a3a21836c518370b3de"],["/2020/12/26/度盘不限速下载方式一赏/index.html","7b3c3e5017235701faa665de2217c0d4"],["/2020/12/26/添加开机自启软件/index.html","49cf43c308c5c17d5d716850c7324c59"],["/2020/12/26/电脑端截图方式一赏/index.html","c4e95a9da62025e96383b8419812a190"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","5a013a335f819222626bb4284f87d3a9"],["/2020/12/27/最安全的浏览器tor/index.html","085d1e262d925ece45585fcf1366a325"],["/2020/12/27/网易云刷等级和听歌数量/index.html","a7de3c472c8a164dd8ce876c0243f40f"],["/2020/12/28/freenom申请免费域名/index.html","dd0751db0f3c335a2421f75382099d94"],["/2020/12/31/机场/index.html","10a13be145dbf630d7157b5d1dcfbe02"],["/2021/01/01/M1/index.html","a2a4f95f1cdfe237997e8883e1e31c90"],["/2021/01/01/compress/index.html","d791ee6fec34254830f9cb5e2f267b94"],["/2021/01/01/infinityfree/index.html","f1fab70b166265736ec62118cc0acb80"],["/2021/01/01/硬核翻墙/index.html","db511539ab8b1ad720ce7403a4e4553c"],["/2021/01/02/qq/index.html","b5fffbcd7954f0ec2c8c557464643b3b"],["/2021/01/03/netch/index.html","b9f3e74913f2c85f6bdfb07cc5ee48d3"],["/2021/01/03/waifu2x/index.html","f156056d9c5b71d97f266ffaa4d8fe6a"],["/2021/01/04/ads/index.html","63f089555e8343cf6242702c9f74af32"],["/2021/01/04/games/index.html","1c18f975e4ced6271797458bbb0c7187"],["/2021/01/04/heroku/index.html","954afd784d2dbf074a68bc75c6272a70"],["/2021/01/06/movies/index.html","8d45f4c1b232c2282b9c94b212e11d45"],["/2021/01/07/google2020/index.html","e3591237edab8b47515c26bfe407ec4b"],["/2021/01/07/lucky/index.html","62095a497e3ca398770a178960238058"],["/2021/01/07/spotify/index.html","4d80e5fc8ab9ec20c3eac3b87d1cab38"],["/2021/01/07/thunder/index.html","d95580af61f1efaf34ccdb80f8b926d1"],["/2021/01/08/adguardhome/index.html","f7b685eaae17acbfc91df93e3a836d9c"],["/2021/01/10/IBM/index.html","c7a4453c6aac18b5a283a3888cf0399b"],["/2021/01/10/potplayer/index.html","4ceef6a92f06a3e21c0ceba77c128157"],["/2021/01/10/sakuraanime/index.html","795786371c02f06ac6b2a1f1e001a97f"],["/2021/01/10/美剧星球/index.html","da0dfda2f793c7694730dc97d7c7d67f"],["/2021/01/12/telegraph/index.html","e75a73a1e4e09c41d55396031c8e0379"],["/2021/01/14/comics/index.html","ddae6fc0e9101b3bdb0961aab48242dd"],["/2021/01/14/ftp/index.html","cf15d7bc1efa078b73220c78b6787e0c"],["/2021/01/14/oraclecloud/index.html","0a0f421ce890e8cffa6a769a1a5b9c35"],["/2021/01/14/porkbun/index.html","73fc09efe300f797b4cf94f95a70f3f9"],["/2021/01/14/powertoys/index.html","b45cee6203bc5f3d63acf979b4bb1acc"],["/2021/01/14/taptap/index.html","1c8ada6ef797081fdc2d9647c2fa6d2d"],["/2021/01/14/ubuntuvsftp/index.html","6467c61b3bc7cb4fa67f4d63e0f16028"],["/2021/01/14/小说/index.html","e69ac8bd602c86a99391f057f7f8b23c"],["/2021/01/15/freeproxies/index.html","a4413bb5a302846060b8fe7babf4896c"],["/2021/01/15/incaseformat/index.html","ddd746d2c0adfe8f63894c7171e5df85"],["/2021/01/16/euserv/index.html","b1ee8849e105b3965caaa6e4c840808e"],["/2021/01/16/winxray/index.html","d09473e7dbd76b6b32e2c49f84ac2e78"],["/2021/01/18/qqreadhistory/index.html","0ab650fe4f4e5fdf22851b32dab3050a"],["/2021/01/18/qqrevoke/index.html","4bb44851f51af5f46d05234f053c452d"],["/2021/01/19/freevpn/index.html","960794eb1f585d3e072e3e851bcb1827"],["/2021/01/20/browsertrack/index.html","e678fbd152abf0432cf0773a1387d2d8"],["/2021/01/20/v2ui/index.html","03b075b8dec038fc96e72475026aca1e"],["/2021/01/21/failedtoconnect/index.html","7f279dd1b7b0cf6f70aa1f03aee1f629"],["/2021/01/21/gitcalendar/index.html","7ffdb546b87bc5a9fbffba3b7bbd6e6d"],["/2021/01/21/markdownformat/index.html","bcc318648907997b8b9bd52bb8995e82"],["/2021/01/21/markdowntable/index.html","172a69f2d38ee2d8d1c8549d9e6cd198"],["/2021/01/21/vercel/index.html","a252368aad2372c0e474400b8593e415"],["/2021/01/22/hardware/index.html","5cfa5506894375243a0cd2739da8def8"],["/2021/01/22/muviz/index.html","f1634ac57992f70dd1488791b9b18cb3"],["/2021/01/22/randomapi/index.html","b730efab779b6382ff042de8af436915"],["/2021/01/22/searchimages/index.html","e6248f577ef9b06832aa6412d77cfe01"],["/2021/01/23/RX文件管理器/index.html","9935f5491492018e8d2fa1865b997de9"],["/2021/01/23/chromeflag/index.html","e723393872e9a5b57cec49aff9524515"],["/2021/01/23/qttabbar/index.html","7e1dc4f9ca457a4d3a999d63f361e6b6"],["/2021/01/24/githubspeedup/index.html","e3cedd625bb109c71cf8289599a57b0b"],["/2021/01/24/jsdelivr/index.html","138f6438091f385c93f573827af02b15"],["/2021/01/25/note/index.html","3432bd72c8ed54c9f12b303801c12a45"],["/2021/01/25/soul/index.html","66382209e2d5205b9316d39517afbbd7"],["/2021/01/26/herokuxray/index.html","150ee140ec084108c9052c8b2ae77cbc"],["/2021/01/27/proxypool/index.html","757bcabc4860f94d197215818afe698c"],["/2021/01/27/tracker/index.html","98b084ffa839f955edf60274c7130211"],["/2021/01/30/pandownphp/index.html","4b9bc92e891e8cdd10bfdf179bc1db02"],["/2021/01/31/newgroup/index.html","093a9f94e594288dc69b2a1901160341"],["/2021/02/01/clashlanguage/index.html","874858b52b8d6d3180619f1b33847803"],["/2021/02/01/encrypt/index.html","5e760c026ca911e22934f6643b04b750"],["/2021/02/01/footermotion/index.html","8b030528816aacf9e1804b37cc4a8684"],["/2021/02/01/gitter/index.html","211bb65fe8d731eac4b2435f5d6f01c5"],["/2021/02/01/pixivtop50/index.html","279bfde4ecdb8aedd8a177581198587c"],["/2021/02/01/scrollbar/index.html","3e713adbfc01febcfe8b43a99f8a542a"],["/2021/02/02/clover/index.html","b92b7983a856a479dc7cffe7911091b0"],["/2021/02/02/maya/index.html","f233cb795cf6de8a9c1edfc7d3fa5819"],["/2021/02/02/speedcontroller/index.html","c4da064129772a55ed8cfd5a8b14344d"],["/2021/02/02/yesmusicplayer/index.html","ac23c7cfef83391966cb8047e5c5dd81"],["/2021/02/03/lenovoonelite/index.html","05e5919c57accef4d9a948e4d04fc5fe"],["/2021/02/03/skipads/index.html","b401c4f5a1c696faff49d2a7f5dc1fe2"],["/2021/02/04/picseed/index.html","122846842167763d45732e3c3caf09b1"],["/2021/02/04/renren/index.html","cc88a14e5ed98881bf8e2c8e2c0f1e22"],["/2021/02/04/serverstress/index.html","bedb64a4fb50e62e5bc716b5e585c593"],["/2021/02/04/wikipediazh/index.html","5cc4e041a3ef969a6894daeae8d17073"],["/2021/02/05/googlevoice/index.html","645627ffdc345c8921f9e61e39a43496"],["/2021/02/06/clashconnection/index.html","5b32e80ebb69572798dc85191c62062c"],["/2021/02/06/gvtransfer/index.html","af241718b5448ab5f484b70b77e8c979"],["/2021/02/06/todesk/index.html","3ed1cda7f1076dfeff737185ccc613c7"],["/2021/02/06/vpnblacklist/index.html","1d1b3d0e68da8f36c17979a16b072d9b"],["/2021/02/07/mklink/index.html","55f68bc5fe91cbcf82a3d182f20bc182"],["/2021/02/07/speedtest/index.html","8c0b727873367aaef263a78f3ab6504e"],["/2021/02/07/translate/index.html","1135b9e8b85ab544aa9dd78944397355"],["/2021/02/08/ewomail/index.html","086c9270a55c6b7d98d9e08a72105683"],["/2021/02/10/officee5/index.html","4e795dda46a069d7f82b16e769ffa9b4"],["/2021/02/10/raidrive/index.html","d72ab2a20e38f5e1988ce06b90b6bbf0"],["/2021/02/13/e5sub/index.html","02e6cc8ad96f8515ea43cdebda3a5dbe"],["/2021/02/14/screen/index.html","8aa28463da01355df259030349d31b3f"],["/2021/02/15/clashtun/index.html","953c985b7dd57958fbf72c519ed47b73"],["/2021/02/15/messageboom/index.html","dcf56b1c04168813fef582e3a8313465"],["/2021/02/15/oneindex/index.html","66721acb87e4a9a1cb93b8dc9f5cf3b6"],["/2021/02/16/govsites/index.html","a80fd078b903784142dc70d334f64b2b"],["/2021/02/17/hexototypecho/index.html","7014cd1d382ebf5dc5a475b823f384da"],["/2021/02/19/fiddler/index.html","826ca090223b6577571d686f121f368d"],["/2021/02/22/potplayerset/index.html","a5396b6ffe342aad5c76deb6d3bdd919"],["/2021/02/22/studyresource/index.html","16a37aede02b9e4b9750479beb23ea2a"],["/2021/02/22/telegram/index.html","c7f1e0db92237c91315b28a9bb1eb3df"],["/2021/02/22/videos/index.html","5a756c555b39e73c6aa93f0899e92a11"],["/2021/02/24/mtproxy/index.html","b7f19cb3c3f27782a2ecf37d94c3e1c0"],["/2021/03/10/catchcat/index.html","373932bce0ca7572c241e808d290bc7d"],["/2021/03/10/neteasemusic/index.html","1e24716bbdaecbc978259d03515e5ecf"],["/2021/03/10/surfboard/index.html","3c13370aa305aaa42afbdbd37411b0ee"],["/2021/03/11/vpnandjc/index.html","dee80d191e56eb2b1304eebb611ea17e"],["/2021/03/12/qrcodes/index.html","445515479ac0e91463a2289855d16b04"],["/404.html","48132abec4088f96b8ef1ac47c7d6835"],["/archives/2020/11/index.html","086ea87db7f31fd880550a569d4c7c29"],["/archives/2020/12/index.html","286e37fefa1593a86ed8584d5d8a046d"],["/archives/2020/12/page/2/index.html","33ffb75bd69bed7b1c89248a2f131151"],["/archives/2020/12/page/3/index.html","ec17f83f16ec8dd6726c7a0b4b761b44"],["/archives/2020/index.html","ff82728a196e535cccbad1e5e0dceb90"],["/archives/2020/page/2/index.html","7763111aff67ee169ea0f0b6e9e11ed2"],["/archives/2020/page/3/index.html","496fe4ba7875c004c59b06613622810b"],["/archives/2021/01/index.html","9ae9dba9859a275421c94f7c5d25880d"],["/archives/2021/01/page/2/index.html","3ff7087fffccd5ef6100826a02f33c84"],["/archives/2021/01/page/3/index.html","a19b72fd2202b917f485de7a51dee0ca"],["/archives/2021/01/page/4/index.html","ea45aa755a69aa62c215b6a9c196e22c"],["/archives/2021/02/index.html","5ad3c025144e2868efb0a3c7884c37d2"],["/archives/2021/02/page/2/index.html","2c4ab39e2f210f6155ab85ee8c30a8fb"],["/archives/2021/02/page/3/index.html","be97bb48d4141bd86868ff3fa10fc6f6"],["/archives/2021/03/index.html","b95b54bdc9df7a3480efc492617e0497"],["/archives/2021/index.html","f223453f98e7ac30468896b06d2d40c3"],["/archives/2021/page/2/index.html","ad73be1c8460c06329ca421e5905256f"],["/archives/2021/page/3/index.html","18ed38e49c6a4de4b33e6e11d3139f44"],["/archives/2021/page/4/index.html","2cf89c8f45aad5dbd1f90c50835f5688"],["/archives/2021/page/5/index.html","67ce277f8023076156f3e56f7607c429"],["/archives/2021/page/6/index.html","a214d41e70b4691b02f3d9593403ca27"],["/archives/2021/page/7/index.html","d09d03d509756500e6b3ac125332ad7b"],["/archives/index.html","3a33575143d5139521d2191bf0749795"],["/archives/page/10/index.html","1ced015adaca9b93a1602c5569cc360c"],["/archives/page/2/index.html","60af12731a7e7cef6f14e77d2eb13423"],["/archives/page/3/index.html","5a993d1635d2285a2507948da785af56"],["/archives/page/4/index.html","0e13a781e7bd459d21c2a460d3336cb6"],["/archives/page/5/index.html","b899bc9960af3ec684e8ad168288fe8c"],["/archives/page/6/index.html","cf16d369487ae62111758b3b83ea52e9"],["/archives/page/7/index.html","e309e063c2b429c80c768ff6c7caa36e"],["/archives/page/8/index.html","b1e3878875553e0a7b8c5304a37cc987"],["/archives/page/9/index.html","bdafcdb275f40ae9d0bd232c9117a4df"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPN/index.html","11b433a76a980b8bfe5c02b2f738fab4"],["/categories/VPS/index.html","700efc94da783ea156f2477315eaf6d1"],["/categories/index.html","01c8767f7604db93c3084d150207a5dd"],["/categories/下载/index.html","c0a6923f62a99e181ed016a91fb85b95"],["/categories/安全/index.html","b3a81a95f2ca68e3e26636bd61ba8d64"],["/categories/建站/index.html","772ff54db8111bad3f866da692215ac3"],["/categories/杂/index.html","f6b31512ce4cc5b79be957c2a2880eb1"],["/categories/杂/page/2/index.html","69964595a56d8da8cb53f3ae545583da"],["/categories/测评/index.html","18345697de33a64aa41095cc7ab06ebb"],["/categories/科学上网/index.html","f7d8dc45984e2ad752b7825180a62238"],["/categories/科学上网/page/2/index.html","bf7d22c91360b2a0bd85b97f4d446d0a"],["/categories/编程/index.html","22c1bfbcedd877625f586f87f14939ff"],["/categories/网站/index.html","1159f54836f247f1d7e8ff77c80b7142"],["/categories/网站/page/2/index.html","a49c4c04926724c9f2ce91910aaed169"],["/categories/软件/index.html","dfcb9911685e66ecd59bda57ab601312"],["/categories/软件/page/2/index.html","05f2776736adbdd06d576dfcc54e0cc9"],["/categories/软件/page/3/index.html","7ffaf3537935213ce2aec5a3b2901e8d"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","8db0419d74079d209394f0bf40ff0edb"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","a3baa05866691b1763e630c7102d2603"],["/ios/index.html","e73b6a135834594d1d615895b18f0c14"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","f744bcbf60c3825dc18f6df911681f6b"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","ea86e91bd95b466f973680888002b0b3"],["/page/2/index.html","6951568c1c4e14f1354377530fa393c3"],["/page/3/index.html","b50e0f18e370b8905bb91f5e0e23e264"],["/page/4/index.html","00d98c029b523bc03c009edefe6812ba"],["/page/5/index.html","da7b3ff31c5655d2b3ed538864e696f5"],["/page/6/index.html","5c769dc3ccc7a31b15b328068156d60b"],["/page/7/index.html","c7c26840837191bb3852e447c34a3013"],["/page/8/index.html","6bd54b4c43d938b6d50da953880c87ef"],["/page/9/index.html","ef17825f849b45cd712f603535f1d0ee"],["/payment/index.html","1f33d8f95ed578fdd988827bd45ade48"],["/privacy-policy/index.html","084164c7955b2be5433495100cd56bbd"],["/rss2.xml","eba78f75862caf4d11fc7503102e3c68"],["/search.xml","d00fb60f0421faf0d5a4b1e50607c2b0"],["/sitemap.xml","f3386eb62b25497e69dd357f6975cbca"],["/sw-register.js","9c09459603d227aceb06713b0d08c35d"],["/tags/5t/index.html","f0f9102425830a187222f06490a7e5d2"],["/tags/Clash/index.html","ed49bf8590a57638d42ca6a0350a291c"],["/tags/Clover/index.html","f3779a53d0c10e2f7a352bf707a06fa8"],["/tags/E5/index.html","32f9c95549924667c667b6fdc23fe7b8"],["/tags/FTP/index.html","2348b16e38fbddb237b8c5a0f3e49b66"],["/tags/GitHub/index.html","9b659d9d67f4068e49b62228d1113947"],["/tags/Heroku/index.html","3246fc7a37b10489733d738b1a2a5ea7"],["/tags/Hexo/index.html","793c6695fa49a1505d2a8098a8a90a26"],["/tags/Lenovo/index.html","6afe7b0c4a1ce169bed110b419db3453"],["/tags/Oneindex/index.html","fc8f6a30a007bc4b3abcab55c0820451"],["/tags/QQ/index.html","27ca88cc082b199b2b6d149506fbb7e1"],["/tags/QTTabbar/index.html","441224426666762c7d86d7254184d544"],["/tags/RX文件管理器/index.html","82961c77fff92b242b9fa32a11d1fd6b"],["/tags/Todesk/index.html","9ae47a9e3200ba29d3b05ff4be79b0a1"],["/tags/Vercel/index.html","350ee63764a25491bb4c2f48cd2b1025"],["/tags/ads/index.html","445dfa0a313896e452d55fb0a2ad41a1"],["/tags/api/index.html","67db1f7c03ba2236177e6f7e0d2003ea"],["/tags/app/index.html","6c8b48a7a78b6b4b6e45ecf3626923ed"],["/tags/blacklist/index.html","fda13f623bde9978f1dd67bd2f2c895b"],["/tags/butterfly/index.html","5d22ac4840612663652f7e3688b9cee7"],["/tags/chrome/index.html","fea94961a2e0d5c6ee3e25027a7ed7f3"],["/tags/cloudflare/index.html","5ed9d5def87c1dc182ae77d921a42ed1"],["/tags/cmd/index.html","0288ce61caa705ba842044daf44c04c5"],["/tags/c盘/index.html","1db764373c930e57e4fa0b7ef8229b98"],["/tags/email/index.html","0ed5ac59ad412d1be86dbfe20e8ddbba"],["/tags/ewomail/index.html","0657887a6a2c35a1c8bfda9096c89296"],["/tags/fiddler/index.html","0af334fe4ad559ddcff7550c7250130b"],["/tags/flags/index.html","7cca45f5dfd0faf1b7e3f6f60f997c48"],["/tags/footer，页脚/index.html","d5c47fdb82aecfd3f296b53ce84730ae"],["/tags/galgame/index.html","c82dba23a564d975e17477134bfcfddb"],["/tags/git/index.html","e270c22b82ee5eaa519fc2bc8e7fd111"],["/tags/gitcalendar/index.html","60cd0463b56ca787eb2879cf0ee5a2fe"],["/tags/google-voice/index.html","cbf9b495839cd993ed6d21e429dc7dad"],["/tags/gv/index.html","5e26e27ee5b831aff64bdb26699d158b"],["/tags/html/index.html","f6bdd1dbe4a0554698b78534dd2bc4e1"],["/tags/index-1.html","6abbaafe98752437c6c60cb71159642a"],["/tags/index.html","e36ee9be8112673db306cbb8fd7e6f6f"],["/tags/js/index.html","6b6158fa87e8d011f1cadca904c9366e"],["/tags/jsdelivr/index.html","11184690bd83dbb14ced437e46c635a2"],["/tags/linux/index.html","418cee087fa40e85a15918964c80fe2d"],["/tags/madVR/index.html","950be3e19bb79c1c653e63febae3cd16"],["/tags/markdown/index.html","0f41815b56666510baa73f809018e8e4"],["/tags/maya/index.html","6fb1b4351f4fa22acda155cd5c5b48f0"],["/tags/mklink/index.html","4751113d3ad71822b6578740625c6bdf"],["/tags/office-e5/index.html","e90e4f10a32ef2aa659efbec2b51574f"],["/tags/onedrive/index.html","afef833d64aae3dc9d26bcc00e933792"],["/tags/picGO/index.html","b2bd8be08142033c9d450661af33427a"],["/tags/pixiv/index.html","5cc80602adb05af991d6b0c850cb3f6e"],["/tags/potplayer/index.html","5d8929c6a49592e2ad07b0a22297a6ca"],["/tags/proxypool/index.html","8c6ce18a5702537b2fc484685cee6a43"],["/tags/qbitorrent/index.html","8318f2aa2c415db58a35285cf3c781d6"],["/tags/raidrive/index.html","9615242951c2f8b70e4eaabc68f36a73"],["/tags/screen/index.html","0d94d576ec08ba56ef247d1ef0e1ffc0"],["/tags/speedtest/index.html","0d3faf6f6002cb96b55f5730fbede4bb"],["/tags/ss/index.html","30dc24466652a570e6ad5c544459fb53"],["/tags/ssr/index.html","e150cbd558a900506bcbc13a6c9ebea1"],["/tags/surfboard/index.html","323737231e262f013bf5e7248b98a94c"],["/tags/tap/index.html","4c455c1e723460bace87003b0c259643"],["/tags/telegram/index.html","34aff7f12c7fcb67322b132ebd8a1813"],["/tags/telegram代理/index.html","d505be93a5c0ca0b4b9bff5e1696f052"],["/tags/tg/index.html","8ca2a6b535128390ed7ff8af7789d286"],["/tags/tg代理/index.html","04479008de9f2e41a8b66d0a9a9b82ff"],["/tags/top50/index.html","e0d79536a7b2f7d1d4dbbb820dabbca6"],["/tags/tracker/index.html","4de3feb696ede17cb090136ab46226ae"],["/tags/translate/index.html","9ea97d32dd2d6580e3a53d84e944abf9"],["/tags/translater/index.html","b36d744a8a885292eee1121cfb44608f"],["/tags/tun/index.html","085ffdbea6354bd78463c06d4d59c998"],["/tags/typecho/index.html","45cda108e3aafd34fc7542262120645e"],["/tags/v2ray/index.html","0ca6ee70368a8ce46f4c4cba422af19a"],["/tags/vpn/index.html","d86659e3a13a17f15c5684424e9f885d"],["/tags/vps/index.html","e3170f9d0b41e8847b14e0a0fd5b46ef"],["/tags/windows/index.html","fcd963d846f99b0db3165a9cab6fa263"],["/tags/windows端/index.html","d1231d65e73682a12cf3acab4d2841f8"],["/tags/xray/index.html","1de54d3a86b6a5a1532745b2556caf8f"],["/tags/下载/index.html","878141f814402dfded3cd6037c5b285b"],["/tags/不限速/index.html","a7172a9a6adaa6c4d2274d8c061ce7fe"],["/tags/个人网盘/index.html","11bbf713f5c041561136ec095d5fbd72"],["/tags/主题/index.html","a2c31500f765d2259104a9518a7d9523"],["/tags/云便签/index.html","e003e37d8ed1c878ddb7126d6ef366ca"],["/tags/云盘/index.html","9f076cb4314213693e0cd42a8c254442"],["/tags/人人/index.html","67c93452cd81c42582a11bbf73f0d936"],["/tags/代理/index.html","b928cc690942475db9599c79dffa6e8d"],["/tags/代码/index.html","608a106e8e7793076b502c0c45bac910"],["/tags/优选IP/index.html","dcb2e6e919a4b5505bd8270ab494f384"],["/tags/便签/index.html","48fde4d84b7a67dee37de3be869b2a8a"],["/tags/保号/index.html","edc014c780a576e1e92a454108c378d6"],["/tags/免费/index.html","0486601a78d50b231cba0d160552e98e"],["/tags/免费节点/index.html","e7cf940d874e5cf12f6a88a8e2eb0edc"],["/tags/加密/index.html","6e911b7f2f7d2ce4741d53146cd69a00"],["/tags/动画/index.html","f4aeb5bfa121754d1fbb3c37353a66c7"],["/tags/博客/index.html","d402bd98421bccf65f68263309792413"],["/tags/历史记录/index.html","65c5a49f677e2daab23c9bd553ec0747"],["/tags/压力/index.html","fea0b7fe54f1fff777807d1351bdb95d"],["/tags/压缩包/index.html","a155736811c554560d3adc783675e5c0"],["/tags/反代/index.html","aa20d29abb2b5eab8a81859646b133b4"],["/tags/可视化/index.html","367b81c88e3b1019ca2e5695cf4efc35"],["/tags/命令/index.html","4501fbf8d75cf10946f374010f79a23b"],["/tags/国家/index.html","9460c67b3260b01e74d27aa1f9344b21"],["/tags/图床/index.html","d31cd4c0318a994b6dd8e666181f816b"],["/tags/图片/index.html","c8890ac77044f6138a245ed31cc61c70"],["/tags/域名/index.html","8c24c480868d7e03b9030a1c4e12c8e6"],["/tags/多标签/index.html","ca9ff58ce102db6df91a1285addd13e8"],["/tags/存储/index.html","a27756e5ddbd07cb36bb2fe89ebfbc90"],["/tags/学习/index.html","6c53a8cd66d29a67444702c51baf956c"],["/tags/安全/index.html","ac5399b1383bc7bdc48ed210da149c10"],["/tags/安卓/index.html","3efdb53bd2ad5e0a6e3f9e8807455b96"],["/tags/宝塔/index.html","ac6ea7a7e78625cead4fc380dfabf744"],["/tags/小游戏/index.html","556bdc2603a2083e9f495436c8369376"],["/tags/广告/index.html","304b02961b581dcd5fd254cc27a8e29a"],["/tags/建站/index.html","0155af0ea067e3f29437c46ece2dc6c6"],["/tags/影视/index.html","e5d9baba7c8d9a3b20e4095a56374ec6"],["/tags/快速启动/index.html","65f6630ab326824384bd6b54ab272eee"],["/tags/手机/index.html","1413a36703c19eff998d228790d135c0"],["/tags/托管/index.html","c33792c6c296ce57bfb4a0298f1e0b87"],["/tags/抓包/index.html","a24bb14cef87d523fd2f87913266d189"],["/tags/抓取/index.html","609551bf9959016a5c312792b37b3c48"],["/tags/投屏/index.html","d622d5d5a07057a4cbfa8d2ed5dd2734"],["/tags/拓展功能/index.html","ca8a4678918c99e0bddb48a002c2b479"],["/tags/挂载/index.html","a3ea619e745adb9f5898bb0cc193b059"],["/tags/指纹/index.html","ded482a1e1946e754106df6284be2388"],["/tags/接口/index.html","18a13c1e297f4310adc3ce27a85f7821"],["/tags/提取图片/index.html","260e093244339bc8ab802ea74cb2aefd"],["/tags/插件/index.html","3977e5a25ea8ced35ea90fb142f8b32e"],["/tags/搜图/index.html","af615e932dedcf1c4fefc8fdc9cd652c"],["/tags/搭建/index.html","6abd2a869a50432fd27dca2ce75b8064"],["/tags/撤回/index.html","d51717df6f2dc6c130c8a99413f32b7f"],["/tags/播放器/index.html","8f786945d74409a8d57c91011677d996"],["/tags/政府网站/index.html","cecd8b259fa8204ad2cf409ad454f3dc"],["/tags/效率/index.html","2264f3faca33c28bc4ce2b951e47f5f0"],["/tags/日历/index.html","f85fd965941c0d1123051e86a8d8c2b6"],["/tags/服务器/index.html","b02c23c0cb59752efde868e4dfc6e4d2"],["/tags/机场/index.html","be7fcdf88bce2bee3c47ae08374dd598"],["/tags/桌面/index.html","079acc37a45ad89efe424c64d23a3569"],["/tags/梯子/index.html","4771c1890f462ab03002eedc65d7b291"],["/tags/检测工具/index.html","b3f6183bd76c547a41a909db1679cb2e"],["/tags/汉化/index.html","8e532144e547d0e040e5996e6df732e5"],["/tags/测压/index.html","ad12932c0bc8a5329a9a12433bebae56"],["/tags/测速/index.html","68a0550c9986da05be6f85e01ca4dc3a"],["/tags/浏览器/index.html","742c7e45e5fe10fee6d4d5efe897ebb3"],["/tags/清理/index.html","af5588812516cd1da723e7fea7032ec5"],["/tags/滚动条/index.html","af787243a0b1e3c9054ea1e76f3f83bd"],["/tags/灰色歌曲/index.html","de65fb8d945bc054436641e07eee96e3"],["/tags/电影/index.html","a58bf5d6044735b313da3d9b1b45ac01"],["/tags/电视剧/index.html","349faaab13164578da7701e11e8e9b81"],["/tags/白嫖/index.html","8ac6a00529d9d8acd0bf1d8c87d9e93b"],["/tags/百度/index.html","9ab1895c297a068225db40a9938cab61"],["/tags/百度云盘/index.html","c2cde96544b3c91f20d613383ab1f4c8"],["/tags/百科/index.html","812a77c5ef5f91f97d102568d81b6ede"],["/tags/短信/index.html","56295b3ee6a030efabb4ed904ee3e402"],["/tags/硬件/index.html","26b04eed970110cb0de303f0c892fb1a"],["/tags/科学上网/index.html","368135c9cc6c389eb45a522d91059a9e"],["/tags/空间/index.html","db27b4cc976cb8075d1fac2d135887d1"],["/tags/笔记/index.html","ef131bf0f43a249c8b190c4f041a57b7"],["/tags/简洁/index.html","b2763c0bd439158290624093bbafda74"],["/tags/简约/index.html","4032550c4eb33056722a72ec6e0859cc"],["/tags/维基/index.html","dc6f4488801c067d878b5fc4b2e0e239"],["/tags/网易云/index.html","bec675a1b1168712465ec74861be77e7"],["/tags/网盘/index.html","0513fe39a78bbc56b40ecab7bcb96591"],["/tags/网站/index.html","4ff3ee55f7190012a3fd0bcd5a89c916"],["/tags/网络/index.html","6dff7b3519823e403cdaea21c944bb69"],["/tags/美化/index.html","b16c9e0d9e215d65058b34aeff5cfd2e"],["/tags/翻墙/index.html","c9c77691627b406dbe147daeac02b96b"],["/tags/翻译/index.html","b156e9cfcc45ee221eb322aa51418218"],["/tags/翻译器/index.html","08ffca55bc4265118525588aa065b541"],["/tags/聊天/index.html","72286dac92a96e267aad79aec4b3b2e5"],["/tags/聊天室/index.html","e961362b0417ca45ff4af029cb9f68dc"],["/tags/联想/index.html","21566fe16863b5a017bbe21198d2bf23"],["/tags/节点/index.html","1f19737bceeb7b41d97f4f7b1ba57908"],["/tags/虚拟手机号/index.html","a61b45b63643bd6df70a5e2a6889762f"],["/tags/补丁/index.html","b555621e947e99eca7d9aa75373692e8"],["/tags/视频/index.html","e01721144b10be30a9a82c20fc99910d"],["/tags/解析/index.html","f3d7797b7ee557d193bacc8efcef0edf"],["/tags/订阅链接/index.html","962d239a8859616dcdeec9e39fc4abd2"],["/tags/记录/index.html","ac953a86fe6dabec33aef2ec3c4d3f03"],["/tags/识图/index.html","922d57e41245d8d4cd05b41c1bff943a"],["/tags/语言/index.html","01a9e7dfc3c9ecb20f0571b0faaf3802"],["/tags/资源/index.html","a1bebfcd9066ef8be36f288f4364fc20"],["/tags/资源管理器/index.html","ace90b7ccc007204e0236843b4c3cbab"],["/tags/转移/index.html","90c90469e0e1e7598647ddd734bcdeac"],["/tags/软件/index.html","623caebf497ecbe3d0f6017ca54b42e6"],["/tags/轰炸/index.html","7ba2f653af576f8d6f50a50d3f40863f"],["/tags/迁移/index.html","8e77c494e2d059bd63d38eb16b4fb08f"],["/tags/远程控制/index.html","cbbf1746a3c601b24c43f3b217b0aa02"],["/tags/连接/index.html","359d70e63d2e9957276e660afdbb978c"],["/tags/追踪/index.html","e06e004596eca39c181cb5a2aa814997"],["/tags/速度/index.html","932d316ec63375f7d0a80578dd0841a3"],["/tags/邮箱/index.html","2da3324e40ee0a4b33f972c42266af83"],["/tags/酷炫/index.html","abb91593799a2ac356c2a727947134af"],["/tags/钓鱼/index.html","2654a97e54f2714fedd98f93823072c8"],["/tags/镜像/index.html","d6b22064c38471d9bcc7db90287e46a6"],["/tags/随机/index.html","5c818030a0c51267db643f5b525aeb8a"],["/tags/隐藏/index.html","4c38dd5485a20bb158dd0098817b4a88"],["/tags/面板/index.html","f93121d8ce22e7ee458f599d0f62740e"],["/tags/音乐/index.html","452199820e5c7301f3e8d3a427c09926"],["/tags/高颜值/index.html","6e16cecddddaaa6e8fa004945661570b"],["/tags/魔改/index.html","03d56bf01ebe3ab1ba11348591394a1b"],["/tags/黑名单/index.html","b4e8f0415b15fc45a0d97478169b63bb"],["/urls/index.html","7e001d5bc8502ab4a6c1613e738933f9"],["/vps/index.html","f3bb9884bd2a083164dea626fe3ac1c6"],["/支持/index.html","1012c4ad9a0aec1198de7d5b63c4025e"]];
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
