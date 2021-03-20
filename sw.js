/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","57e582ec6101e2a8e5da04c82d69da58"],["/2020/11/29/clash-windows/index.html","97df4459d56853f6223f63c9d599c792"],["/2020/11/30/websites2/index.html","8ea5799a171c37b0056f8a5bd809c04e"],["/2020/12/04/iphone4s/index.html","d4712c784ad2e337dbc8b2d739acba37"],["/2020/12/04/onenote/index.html","bc2ca01618650a7021733076595c03df"],["/2020/12/04/wesites1/index.html","28f139806a0548c5ed0a162f3c2af2f6"],["/2020/12/06/nokia808/index.html","46932c627eed2de97367b29b7ca00b5a"],["/2020/12/07/ipad1/index.html","b07fdb0baacadc5ba8599225d968f97e"],["/2020/12/18/freesubscribes/index.html","994a072b9f398ca941c1ba94dec0651d"],["/2020/12/19/musics/index.html","e12f106f24fba07b70e8f0ffb118227c"],["/2020/12/19/shadowrocket/index.html","5c457b2fb25494e66e7ba762084594b6"],["/2020/12/19/v2ray-windows/index.html","d603ad0e318dd1fab17c62c19fec1ab0"],["/2020/12/19/v2rayng/index.html","e3c8c21e04e1ed3faf0cd1579cd07744"],["/2020/12/20/beoplay/index.html","fbd5d514c63876669f6043eca2164755"],["/2020/12/20/订阅链接转换/index.html","1973edd255529481fedb77e0ea00a27a"],["/2020/12/21/chrome浏览器下载提速/index.html","028752afa78d3233f1f7b91e7b8a8428"],["/2020/12/21/免费128线程并发下载xdown/index.html","38a072e946a84f950fdfd0f2be2e3764"],["/2020/12/21/免费32线程下载软件ndm/index.html","dd7939fed63658e56edcfed43185fc32"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","278656b9861a0d68fedc160fcfd8243e"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","5bbe4d9f46f54c49bc6943d2adfe39d0"],["/2020/12/21/广告怎么知道我在想什么/index.html","5a7bb40ffd4a56c26c636c16177799de"],["/2020/12/21/无名·引子（小说试写）/index.html","fff937f2f6ddf5150582f3500994e6b2"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","8d9c8da72e6c6302d075d379266e3ed2"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","21ad174d22b87f62e89bd8b28700972c"],["/2020/12/21/高速轻量下载器aria2/index.html","2934a2bc0c83a440f209b258b5b60c5b"],["/2020/12/22/2020-cee-roo/index.html","afdf328897225194d33b94d3386fd291"],["/2020/12/22/firefox插件、github、steam富强/index.html","57134ac63e10c7f929c21a6f0f27e1e5"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","933e572171c628ee640a3e5737382a79"],["/2020/12/26/python-day-1/index.html","4a9ceab3647af9b5e3dbae54bb20256a"],["/2020/12/26/python-day-2/index.html","487afdc4fd116d62a547f56dba5fb3d5"],["/2020/12/26/度盘不限速下载方式一赏/index.html","853b11b2b2133e38a3510ec2e9628b7a"],["/2020/12/26/添加开机自启软件/index.html","0b19e5683f97c60b9228f7eee4cabe9b"],["/2020/12/26/电脑端截图方式一赏/index.html","866aa522d664a7bdfbfc08cff0775223"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","e1a7ed453d5ef9f9d56c6e16b79f979e"],["/2020/12/27/最安全的浏览器tor/index.html","b80d68062895bd1460edef72ede89091"],["/2020/12/27/网易云刷等级和听歌数量/index.html","fe538dc43e3218b56a5cbd016b0d4898"],["/2020/12/28/freenom申请免费域名/index.html","d33fc9507566d1fcf320cca77a034950"],["/2020/12/31/机场/index.html","83851cabfb61af600f8bf59afd008c91"],["/2021/01/01/M1/index.html","5aa60658d948ffb3a24e4168b0c5e959"],["/2021/01/01/compress/index.html","d52274fad54beade9c3c07ca7c4d44a4"],["/2021/01/01/infinityfree/index.html","35b4e301898f37d255ef151116639cb8"],["/2021/01/01/硬核翻墙/index.html","77e14d16a56f59aa2cba7947bbccabe7"],["/2021/01/02/qq/index.html","456d7f64a88945bbeecf1d2ec935b1b4"],["/2021/01/03/netch/index.html","05b85c0b1b9f5dbb152bcb7899fb837c"],["/2021/01/03/waifu2x/index.html","d2c6769424bade9e195af1e55aa71b24"],["/2021/01/04/ads/index.html","1d74b00913fdca1737663840d2d1ce74"],["/2021/01/04/games/index.html","f658c8c4e712e339cf195e4d015daea4"],["/2021/01/04/heroku/index.html","8e99ad7c4de0da7d60ce560e8fd02f11"],["/2021/01/06/movies/index.html","8c28014ed1fb254988bc298d39bdf48d"],["/2021/01/07/google2020/index.html","a99124f64da71fd7a06ad76e661e9509"],["/2021/01/07/lucky/index.html","791775e3b3ac9c9f3ad62f2a8b0e363b"],["/2021/01/07/spotify/index.html","80c188aef9f25dea333c477fb19ac51d"],["/2021/01/07/thunder/index.html","f17a19c121345a9658f5e03db9e3d086"],["/2021/01/08/adguardhome/index.html","1183a8e635b7a20802d4ef3c466c983e"],["/2021/01/10/IBM/index.html","b0da8b60609162189095f590cfff357c"],["/2021/01/10/potplayer/index.html","c5a5b6cdc6897b7d4f991de89a7119d1"],["/2021/01/10/sakuraanime/index.html","3d536dae7b278951f53426a05cae5e47"],["/2021/01/10/美剧星球/index.html","bf4b20180c7392ac90bcdebd4c5b346d"],["/2021/01/12/telegraph/index.html","52321bf1a1bfe00b38373cdfbd31628b"],["/2021/01/14/comics/index.html","0f0e058f605df9744bbd126b89662603"],["/2021/01/14/ftp/index.html","fbf1163ececd343cb7741dcb09feffab"],["/2021/01/14/oraclecloud/index.html","b2801420a067937913174e2c9f56509c"],["/2021/01/14/porkbun/index.html","c5194f248ddf112882f708f9ddafe928"],["/2021/01/14/powertoys/index.html","ea5bea7c1685c9fff22f232c022be3b0"],["/2021/01/14/taptap/index.html","8e421cb651e4debdb9a50872260f87d9"],["/2021/01/14/ubuntuvsftp/index.html","710800aaa5462cbb8e8c12350a9361df"],["/2021/01/14/小说/index.html","50de1a63235f7aa8197735f41b40f0ae"],["/2021/01/15/freeproxies/index.html","b66242dc81eda31b6a19bbdd9a4d325e"],["/2021/01/15/incaseformat/index.html","1e856a63e33380b7d5c43999d0eaae9f"],["/2021/01/16/euserv/index.html","24e5375a59268093df6f4f443f160aa0"],["/2021/01/16/winxray/index.html","a12c5fdef3a5b1b9785b59ae0a9ad48c"],["/2021/01/18/qqreadhistory/index.html","fb8e26cf0068bc7bc14d2f3ef73ad476"],["/2021/01/18/qqrevoke/index.html","7b5374f145109905f38c635b75b966c8"],["/2021/01/19/freevpn/index.html","28c63479af701eb35e82c732017ef238"],["/2021/01/20/browsertrack/index.html","db022e65bd17657f9949f4a7327a3f85"],["/2021/01/20/v2ui/index.html","2fddd0d3cfdef54e1b19090ed137b700"],["/2021/01/21/failedtoconnect/index.html","167d0f0a02e55fd707deefe4e933179e"],["/2021/01/21/gitcalendar/index.html","dae4745d147d485528079bb33e038843"],["/2021/01/21/markdownformat/index.html","131267f7bfcb1541327115238981ceba"],["/2021/01/21/markdowntable/index.html","24b37f58d6d2648aada73f46ac3374ce"],["/2021/01/21/vercel/index.html","8a715f86889ef37c4ec5d091e1f59423"],["/2021/01/22/hardware/index.html","78f663f6c815a114d839d7db196c8458"],["/2021/01/22/muviz/index.html","fc8477a725ba034d026c6e13589e19c7"],["/2021/01/22/randomapi/index.html","d24bf3540c9a8591e4a1cbca0f2d26fb"],["/2021/01/22/searchimages/index.html","d86b7c7b9933ed3133a8869f380e8f41"],["/2021/01/23/RX文件管理器/index.html","f22aed043de907b070a41187d19c37db"],["/2021/01/23/chromeflag/index.html","e1ad51d004801aecfd8acf54991321da"],["/2021/01/23/qttabbar/index.html","851ff6e2036342be1a763bbf683fb9bd"],["/2021/01/24/githubspeedup/index.html","c36bcc971c634083383ec8db583de27e"],["/2021/01/24/jsdelivr/index.html","d6abbbcfa136c4088151d49300e00e63"],["/2021/01/25/note/index.html","72184d607b7bf5c9ddaf88bb36bf177a"],["/2021/01/25/soul/index.html","e9931ed3d67ca12eab08aa15f8fefa76"],["/2021/01/26/herokuxray/index.html","57173913f95541588d8caa5debb52403"],["/2021/01/27/proxypool/index.html","9222ac84a58b5f3684dd6969eac03ef4"],["/2021/01/27/tracker/index.html","6be8b552a232c92d5b951d73e4575ccc"],["/2021/01/30/pandownphp/index.html","b1a49fc6d9c530cd4401be6a85f58b39"],["/2021/01/31/newgroup/index.html","0998e921061476ec6cbe830d6e0db3a7"],["/2021/02/01/clashlanguage/index.html","d793e7ff3cd563da057858f310c54b9f"],["/2021/02/01/encrypt/index.html","9481344e77eff220025de9c0ce1fbce6"],["/2021/02/01/footermotion/index.html","2a0e64bea20b46d0549af4c9b082e459"],["/2021/02/01/gitter/index.html","672d56f2d4b9e466d61ea77a5e196add"],["/2021/02/01/pixivtop50/index.html","712eddd810249cac75bb15d4f6ddc29b"],["/2021/02/01/scrollbar/index.html","4a175ea4b8ceacf065949caa41a3cd6d"],["/2021/02/02/clover/index.html","b7dfd43e61866389bb3577558a958757"],["/2021/02/02/maya/index.html","3a7688f8c5ebfa5b56d6e0a2d9c7ddbf"],["/2021/02/02/speedcontroller/index.html","1928fccf64f1461c8506e52dbf191b97"],["/2021/02/02/yesmusicplayer/index.html","315c8ff72475fc34a9ca257648a43def"],["/2021/02/03/lenovoonelite/index.html","be2ec6c4e1def81bbbc4dc1261a5ad1f"],["/2021/02/03/skipads/index.html","90d21b3b7ec7ad97af5087dbb5a7ede0"],["/2021/02/04/picseed/index.html","a326fbb759f07c0678a8600c88d00766"],["/2021/02/04/renren/index.html","dca97ab7a4154ec1097144f49226abf9"],["/2021/02/04/serverstress/index.html","9cf6ccf96e9d5563b1e5e0daa3b7b215"],["/2021/02/04/wikipediazh/index.html","84a7ab29f49ccced12dee4dd15452ce9"],["/2021/02/05/googlevoice/index.html","ef1b57e7e1990019704ef053f5e36a04"],["/2021/02/06/clashconnection/index.html","7afa4ad19aeb631e84e7c2526ce2dcae"],["/2021/02/06/gvtransfer/index.html","263e9ad4baf78d25690f6342c3fd6dbb"],["/2021/02/06/todesk/index.html","65076475d2112b31452b85d62529e28e"],["/2021/02/06/vpnblacklist/index.html","c7a03c18788d158c3daf5254827f9951"],["/2021/02/07/mklink/index.html","bac612a50ad443c662ef7b954e5e2db9"],["/2021/02/07/speedtest/index.html","db5ff17a565526104b218fb3dbb55ecc"],["/2021/02/07/translate/index.html","03d302d7836571838130e17bef559042"],["/2021/02/08/ewomail/index.html","9e1ff9532bdbaceb2921c11dc989ffed"],["/2021/02/10/officee5/index.html","71c202f9e71a5af191cdd95b819fde8b"],["/2021/02/10/raidrive/index.html","3e33a68aaa5d5efe895dea447b04439d"],["/2021/02/13/e5sub/index.html","58fd0fe4061a2b3395d9b9a5ce7cda4c"],["/2021/02/14/screen/index.html","eea674f6547141aa0a1d2f3055736ed8"],["/2021/02/15/clashtun/index.html","39b99f070725957e66a023b211d1d778"],["/2021/02/15/messageboom/index.html","f02c288bc676c3d55e5a21b28dc96bdf"],["/2021/02/15/oneindex/index.html","ad89ffa8a4203fcf4918b0a7f502f5ac"],["/2021/02/16/govsites/index.html","52ac056323d42cdf158c36e053cdf57b"],["/2021/02/17/hexototypecho/index.html","213a9c0f51138e18d9123c4c9507c915"],["/2021/02/19/fiddler/index.html","acf94eec4eb3f2bf28ad397de4555aa0"],["/2021/02/22/potplayerset/index.html","6a38e02b270519b3b33b8ccd9075b1b8"],["/2021/02/22/studyresource/index.html","fdc515f69c9a0854b833706a6d559f13"],["/2021/02/22/telegram/index.html","7644e1ac9268ec2e578362832e3b8c30"],["/2021/02/22/videos/index.html","9468ae09f88cc20214e1af29f7f9f296"],["/2021/02/24/mtproxy/index.html","13772d897c1b54a11f86d811cb393101"],["/2021/03/10/catchcat/index.html","6e0912c20eb8abf6eb44a17c544cd6ae"],["/2021/03/10/neteasemusic/index.html","a2a4f7bc51b0935d6916076ac1207585"],["/2021/03/10/surfboard/index.html","9c91667db72df8b94825094521a1a5cd"],["/2021/03/11/vpnandjc/index.html","f0d2ebf5e86538d57f7ac5bc409f354c"],["/2021/03/12/qrcodes/index.html","88b1db21c2229a5b292b6a054522e3be"],["/2021/03/20/qv2ray/index.html","8089f60142a40199add2660c5af3e772"],["/404.html","c3ee6577bfb09707c2782b5479017b7d"],["/archives/2020/11/index.html","e12ec2e18d26f01c768509b15c9b8541"],["/archives/2020/12/index.html","55edbdab4c1511887c242e1d80d279fa"],["/archives/2020/12/page/2/index.html","7ccabd77003c25d2f68bcd1081b5e152"],["/archives/2020/12/page/3/index.html","d3a90b608c5d1c958781b6eccf650a70"],["/archives/2020/index.html","fe37715e1dad6fc1948c3dc9308ac69d"],["/archives/2020/page/2/index.html","b1d230e324939cce191db34255e98dea"],["/archives/2020/page/3/index.html","81b074d11b85384d61633af1c444d714"],["/archives/2021/01/index.html","ac2fe756a3690fc2e8c52ece4a2deba7"],["/archives/2021/01/page/2/index.html","f0d5e7e484d6ac3f5eb73ed0dbb09744"],["/archives/2021/01/page/3/index.html","21fd8eeb55fd399486c193cd130d3113"],["/archives/2021/01/page/4/index.html","415490173b7ee115e23c1420df6d5c3e"],["/archives/2021/02/index.html","268ed33f14b6320e9c0f675ddeff6b2a"],["/archives/2021/02/page/2/index.html","9609f52f81f844697092af57f2760384"],["/archives/2021/02/page/3/index.html","6ee27a14cb3e31e78a58272cb2457f24"],["/archives/2021/03/index.html","d27efb62c7db3dc5fda8f4be382c26cc"],["/archives/2021/index.html","b6f54d17cf26ea4edecf071fa7e96443"],["/archives/2021/page/2/index.html","d721558605c86109946930934e0f934e"],["/archives/2021/page/3/index.html","cba4b74d12fc99bb32dd86705bd165de"],["/archives/2021/page/4/index.html","db394e5ac0ea9481be9eb9fd1a03228e"],["/archives/2021/page/5/index.html","c1ba686962d50fec3a1627aabcc09db4"],["/archives/2021/page/6/index.html","16717ea59fe0ef48b47f2985bddb4870"],["/archives/2021/page/7/index.html","d98f7af32ba970a285de099efe1aa6a8"],["/archives/index.html","3178a90e364d324aff96d150f7669721"],["/archives/page/10/index.html","1f731ecd9f853e0260a9bc18ab220a2c"],["/archives/page/2/index.html","af895f65606e846e2f7aa07c5451ece4"],["/archives/page/3/index.html","25ac7cd3b56ea7687cdd9d1caa354668"],["/archives/page/4/index.html","e084822346901aae9ed5e91c607bd582"],["/archives/page/5/index.html","d7fd334f6d2d65e8f5514232cb5dee5f"],["/archives/page/6/index.html","d6e3f8179f49cbb0c0d976f252f9466b"],["/archives/page/7/index.html","da5876f21090f80add191b024c83440a"],["/archives/page/8/index.html","84b91bce3ebbe5463ec85ffacac22b18"],["/archives/page/9/index.html","cb87d333ab879cfc65e6996ae5c11af3"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPN/index.html","96438efd8d280dee0d52aec12c8e7c99"],["/categories/VPS/index.html","15ee2622d219023a76ab8315f9aaa96b"],["/categories/index.html","fe7065b8d2c13d5c7cfb4cdee0bf8439"],["/categories/下载/index.html","0ad604772c247f6df12dd90b78d5ee75"],["/categories/安全/index.html","688b5a57e30b8b4e00ee4e96cc09adb5"],["/categories/建站/index.html","1ba347e0215891e2bde6e22f7fa20b6a"],["/categories/杂/index.html","edb179c6af2fce8f03ca432102b20e4f"],["/categories/杂/page/2/index.html","768c278c26421365fa470612cc0b4568"],["/categories/测评/index.html","ae68f3d1bc76388d2de5c1e0e2d46587"],["/categories/科学上网/index.html","4c50c462eb27494bc08c00c61d5ae752"],["/categories/科学上网/page/2/index.html","318a7e427c2d262e1b459a935fea06a8"],["/categories/编程/index.html","a7f12febb191c31467238c863e9d6dfe"],["/categories/网站/index.html","e0c674d7031e2f2863edaee1184c3386"],["/categories/网站/page/2/index.html","9c08cc05211f9e8e39b7c9346c385831"],["/categories/软件/index.html","28d55fdb954c7057a92d1b94e117dd69"],["/categories/软件/page/2/index.html","d0e59a85e224265b09fb0418e2ee8a62"],["/categories/软件/page/3/index.html","17a1a32197a7b4b856150fb7e3b593d0"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","f5216fd4002641cfecbaeb8a71edcdf4"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","b20cbd3126f0a646ae2a5915f7e8431f"],["/ios/index.html","abe645c466084149c091f80d673e9572"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","e4f680f5fb78d10a686cba6538989378"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","5448cba52c4205d7e5300bcdbda6baf2"],["/page/2/index.html","0e6203e24793b11c51b19f65017ca8d9"],["/page/3/index.html","9f75ac9fa99cb04f52cbe1377c411370"],["/page/4/index.html","53b1ce08ecbe11207ca90786ad1fdac9"],["/page/5/index.html","5df17d7a64f1407f32e815a693f0e747"],["/page/6/index.html","98b764eaac3421716f9f02cd7e6698b4"],["/page/7/index.html","4bf8701ea81fea36f544fb7a56d20fca"],["/page/8/index.html","a010842f7b4b80b5db3e7a8fd133d69b"],["/page/9/index.html","66af662bd306a10dadf2188dae83aa7d"],["/payment/index.html","6ee8e435accaf88469c25e6ee68518dc"],["/privacy-policy/index.html","80cf84e1bae1aafe8ac833d69ee50ea9"],["/rss2.xml","044a199543e7aa890a48b93ea7dc9c47"],["/search.xml","a30379cf18d9298bff03d26d41eef39f"],["/sitemap.xml","cbe6c5ecb3a967402749aed7c881ce5c"],["/sw-register.js","d68f5e33385ca2972ee529f63a50e454"],["/tags/5t/index.html","9ab6f9274cc603353f66101d07036810"],["/tags/Clash/index.html","5c7a4d71b6abd0e549cfba8e81f3a07d"],["/tags/Clover/index.html","21cc02da9c8bfa86834cce05921a5b24"],["/tags/E5/index.html","a70765ce0b38718f3cca31087ba3faec"],["/tags/FTP/index.html","f00522ec1502af029f7264c647f901d0"],["/tags/GitHub/index.html","2daaa762ddea5581f18e5e3bf2fb87b5"],["/tags/Heroku/index.html","5d38672eb1b19118738f9217e3d521cb"],["/tags/Hexo/index.html","da05b9131dae7e6dcf7496cab59aafc0"],["/tags/Lenovo/index.html","34e6dd4cbb9850fef03f0856f74ef803"],["/tags/Oneindex/index.html","41235b321ec33c8956cda73670f34b32"],["/tags/QQ/index.html","5782af300cfdd52ba48946100b85ae78"],["/tags/QTTabbar/index.html","93c58f54bb4d7656aa12f511fa579ed0"],["/tags/RX文件管理器/index.html","98c012efb19245246eabb60b2ed05563"],["/tags/Todesk/index.html","afeec7433499d3e5c95c1e27b093db32"],["/tags/Vercel/index.html","cf5cb981e5a8fb05fcddad06c1a88290"],["/tags/ads/index.html","a08d6a7cc392adb935154b100723e25e"],["/tags/api/index.html","9b2755dd986410bb714fd48b8182e277"],["/tags/app/index.html","9fed4df8bda7e1b3146073dad937df72"],["/tags/blacklist/index.html","6a3fb591bc73a8b0e704fe280522871b"],["/tags/butterfly/index.html","8b4bb5c7088f1c7781afffe96256969a"],["/tags/chrome/index.html","aa64f30af95a8c4e6481e7de16ffa1b5"],["/tags/cloudflare/index.html","85c083793d1270021445ff673fd5b625"],["/tags/cmd/index.html","ef2832733c6cd0fa4e1e52136f3f850a"],["/tags/c盘/index.html","48a0f4bb2ac83c78041de5e3c69ac954"],["/tags/email/index.html","bd9c13de7aa7fdc5807234d46ddbe4c2"],["/tags/ewomail/index.html","b29a647c12ca9bada30cdce9d4727aee"],["/tags/fiddler/index.html","b7df6fa99241f29b1420207c540f04c6"],["/tags/flags/index.html","fb7df5568feb4503e489d6fd9739890b"],["/tags/footer，页脚/index.html","daf67655c9ae7e492908216cd93089f3"],["/tags/galgame/index.html","f80aae961efe577d1022949f1bd41824"],["/tags/git/index.html","e50e3e812f6698c2466135c7eaf7da6f"],["/tags/gitcalendar/index.html","b9e0d44dba9aad6ca9333add85947441"],["/tags/google-voice/index.html","84634bfde4a19cadb519f27a22e8249b"],["/tags/gv/index.html","e3b07b0e7d15cb783239b11330817e07"],["/tags/html/index.html","10efe2c6e865618b4ea5e9aea7c772ce"],["/tags/index-1.html","96d23d2d26969388a15d050b6e809910"],["/tags/index.html","4f243330fe4eed50f970c9d60b5ea68a"],["/tags/js/index.html","a3502e4c6c74dcfcbff316907ce2c954"],["/tags/jsdelivr/index.html","8288020945fe53cd5348e1190e2be414"],["/tags/linux/index.html","9968a42d767e335873f4e2fd78554fe0"],["/tags/madVR/index.html","301957ad662e98620b3d10525205ea75"],["/tags/markdown/index.html","f954a258d5cbc0249e831426a5d1c435"],["/tags/maya/index.html","b6906b99cb6004162eb1157cb651b2fb"],["/tags/mklink/index.html","a6c118d5972e603a6b6df5bf497edc21"],["/tags/office-e5/index.html","4c0276554c731e1ff1aed4f165343fb7"],["/tags/onedrive/index.html","76f280ac1cc8dbf4e978436a2d265b10"],["/tags/picGO/index.html","77fe65d4bcfbe137d6bc713d13a54e89"],["/tags/pixiv/index.html","3ed2711bf9c6bdd62160fe573bacf6f1"],["/tags/potplayer/index.html","d536557c9eb5d18cb27258a04607accc"],["/tags/proxypool/index.html","e9db64732ec1fd63157af169e896e5c0"],["/tags/qbitorrent/index.html","b84b6849467b487112db19ee153782f7"],["/tags/raidrive/index.html","28901e3a0a8569b6189cc01693ab2690"],["/tags/screen/index.html","8a7215527a712745820798a82ec77c2f"],["/tags/speedtest/index.html","c910bd4d71ac84ef2d2f678e46c5c154"],["/tags/ss/index.html","6d7f6b3981e804bead8ba134229d418b"],["/tags/ssr/index.html","ccd99844bcefce54b403733b232d6502"],["/tags/surfboard/index.html","5c9bf85794e60af1d6c8dc8cf90bce07"],["/tags/tap/index.html","74ecbe3637f368e624321360dd0c2789"],["/tags/telegram/index.html","eaaf3d47b79651998e49b930a37521da"],["/tags/telegram代理/index.html","e4e3cafd5f8ba3ee4f672ee6d126cb0b"],["/tags/tg/index.html","a1d314226cd91423e29cf045930226c9"],["/tags/tg代理/index.html","88722456eb960cadea08307600b5d7c7"],["/tags/top50/index.html","9a67f79201638a5c11d9e04493e46735"],["/tags/tracker/index.html","870d53e1f910d84ce7ed96569557324a"],["/tags/translate/index.html","5525c31dc5795eab190942de214a182e"],["/tags/translater/index.html","5ca866d2c93deb2f79be9d8fbb7f567e"],["/tags/tun/index.html","9fba1d55b4f6de93779f7172340699cb"],["/tags/typecho/index.html","84dffa19ed3c2800d5a6073e8ced48cc"],["/tags/v2ray/index.html","da745d735cc7aac07e1eab8ff7ea2bac"],["/tags/vpn/index.html","3cdb5891772d3e88d92021a75e315f3d"],["/tags/vps/index.html","1fc7d914e65a60f994b544f3c8396137"],["/tags/windows/index.html","59e3bade0c092c13b99f98218aa19936"],["/tags/windows端/index.html","02fe8572c2b191f631ee8d7c5892b9f2"],["/tags/xray/index.html","2d475463a757b70bfa014d8bd0dd15c5"],["/tags/下载/index.html","dc092f1c12efa00a88ffed001ccb4078"],["/tags/不限速/index.html","3de45b23551633048f8962a6f156f804"],["/tags/个人网盘/index.html","b4baf13eb5d3ba85a9ff106b65275693"],["/tags/主题/index.html","4746fdbb99a0719377cd6882a6b0eefe"],["/tags/二维码/index.html","5095d123fe833dac43c0e85ee7736dba"],["/tags/云便签/index.html","51cc469ad509d65abf8379f098b68ea9"],["/tags/云盘/index.html","4fda6171d1a47abfacace7688c5d3203"],["/tags/人人/index.html","9de5e9d86b97d2c060261e79c81869ab"],["/tags/代理/index.html","a974429f6ba78ad85c5c4f25edaa0b16"],["/tags/代码/index.html","c68acff1553e398ac59da6e784a81ff6"],["/tags/优选IP/index.html","3ea246b7304dbe829cd3149b3cd13a15"],["/tags/便签/index.html","97166675fb9bd06c1c64a479d0ac29ee"],["/tags/保号/index.html","5318f453c59a686ffb7c7c60c4b07202"],["/tags/免费/index.html","dd1a45b8c6ba156a055ecbc222382751"],["/tags/免费节点/index.html","e066de81a7403ce9a679594f68be746d"],["/tags/加密/index.html","7803f045458469c801f83d0a20724ce0"],["/tags/动画/index.html","d71964b901d804e9ddf532d8e04672dc"],["/tags/博客/index.html","7ae001f06457bfa988f801027be770e8"],["/tags/历史记录/index.html","2e82fdba2fa1d0a0069d20fd677c24b2"],["/tags/压力/index.html","3b8ddd5c73412605ee98dab0c8353c74"],["/tags/压缩包/index.html","88ebba8d894f60a9d3b336e4544bb623"],["/tags/反代/index.html","c9fc2116c5a1568213529bd26570e312"],["/tags/可视化/index.html","1428c59fb851c5b9d2f1458310612f1a"],["/tags/命令/index.html","1605c9933f607100b7d53bc65b992e61"],["/tags/国家/index.html","f97688b76108594d5018ef927063b0f7"],["/tags/图床/index.html","7758d2a02f416c6cd18b046e7712f6a8"],["/tags/图片/index.html","074448ccde167ddd5433058a3f173766"],["/tags/域名/index.html","c69013744f98458e2ce5b6fc69724a7a"],["/tags/多标签/index.html","753da7f379a5548fbf04037684d8128c"],["/tags/存储/index.html","1602dd0013055efdc7c72c5218412476"],["/tags/学习/index.html","1b269e212936228a4da62b0a0e8da48d"],["/tags/安全/index.html","b90896d2b2f16a0d100b803530866cdc"],["/tags/安卓/index.html","8fb9c4f2766187b28b2a40613256f082"],["/tags/宝塔/index.html","8cf5cf80ada391562d744d1ca81f6316"],["/tags/小游戏/index.html","cd739ba65fb25d04af6c3a1dadab8287"],["/tags/广告/index.html","e7e70118453cb36fee862fddf971e27a"],["/tags/建站/index.html","a69f1941997ae5f62ae4cf7237a37aac"],["/tags/影视/index.html","a305fbed1488809b1dd5522efd30fcf1"],["/tags/微信/index.html","ef007d6fd89bd3c002b60ac56b06a241"],["/tags/快速启动/index.html","526b1115586617465f2f4579d9e79183"],["/tags/手机/index.html","3404c2fa342c0297309333e223dc5b04"],["/tags/托管/index.html","68875eb967f5bdc7f57e1dcafb5ec79b"],["/tags/抓包/index.html","1f9cd71dca2ff6612210890d4a6a565c"],["/tags/抓取/index.html","3a990d093a524f6f3441f8fa6f577077"],["/tags/投屏/index.html","e99437b46136a7f3a3599baac54bc693"],["/tags/拓展功能/index.html","a651fefc9fc9904bd8ad539e40480284"],["/tags/挂载/index.html","8143cb8764906d2846829dc75df2dfab"],["/tags/指纹/index.html","e3c1490f6ce146ee5cee0acd0e7c2ff8"],["/tags/接口/index.html","025fc05dac356ef08c44db275a547f55"],["/tags/提取图片/index.html","7c9db2c672314e2fa990d2405c01577d"],["/tags/插件/index.html","49830648b2a8a29d7e15fbfe40a9c758"],["/tags/搜图/index.html","6d17df6b917047a99ee9d448733f5ca4"],["/tags/搭建/index.html","adaf0aa05f7ba8516155cb3abdab6552"],["/tags/撤回/index.html","bb4ec69a38677f3340fdfecbc0441e74"],["/tags/播放器/index.html","0215966436fe8f5e4e17f54cc2bd9ce0"],["/tags/支付宝/index.html","2d74400bc414125e435670b0cfecd63c"],["/tags/政府网站/index.html","9e4be9d212a01c22c73a835fda97dcac"],["/tags/效率/index.html","ba574c2a0a5a6ae6a834374c65cc3988"],["/tags/日历/index.html","1cd9418105e9dc56526a0486dc4184d6"],["/tags/服务器/index.html","b492ae53cf01b582d08df58bc9c2b687"],["/tags/机场/index.html","586131bfcd365b0dc7fc4ab6e487f6f1"],["/tags/桌面/index.html","27d3c2e339556f5aab68d42d7059808b"],["/tags/梯子/index.html","f036d6a9531e7408ceb30f9f64472279"],["/tags/检测工具/index.html","7a85253a6b882260127c41f752ca8129"],["/tags/汉化/index.html","2e7a3a74f950bac36e877b82f22af704"],["/tags/测压/index.html","74098a77089a95e3373110a851c85b30"],["/tags/测速/index.html","0179353a3b507f5431472ddd1b8a35d9"],["/tags/浏览器/index.html","9e9e5bcf7f864571d3bf15e0d8e2ca69"],["/tags/清理/index.html","e43301f69683889380132f582ca320de"],["/tags/滚动条/index.html","375ea9e485483790a78f84077fd14908"],["/tags/灰色歌曲/index.html","c765a4de3c131e347ffd0870c793c167"],["/tags/电影/index.html","16c4d237940312349aa0a041a35cc115"],["/tags/电视剧/index.html","1da9eb1acb8fa116f522a55f8b553fb1"],["/tags/白嫖/index.html","61e5d5775609aaabf5451b5820ab03f1"],["/tags/百度/index.html","e033a5c777a069473ada512de723275c"],["/tags/百度云盘/index.html","911d787c1a21fb9eb76162ef33cda6ee"],["/tags/百科/index.html","d841d82928d0b8a486519dc6eec882d4"],["/tags/短信/index.html","f9bd35f0863ea4ee6a28d99addc68b47"],["/tags/硬件/index.html","77790f954cbb050e589fb24bdd23209c"],["/tags/科学上网/index.html","f87e3241203b9296476adb836806122a"],["/tags/空间/index.html","a352f294d692189433921b2665605ee7"],["/tags/笔记/index.html","4a6e6b2533f04172c8b65354c363947c"],["/tags/简洁/index.html","66a1c003c4ce476c92cca0d9196aca17"],["/tags/简约/index.html","710746c9bbc8655b1dbca7b61b4b28d5"],["/tags/维基/index.html","e9a9acbb9a2ddc2eee4d1ff23b28ea98"],["/tags/网易云/index.html","c7eee2d0c2e478178afdc135b7935a46"],["/tags/网盘/index.html","ebdca64fc9434ff5c51d8d0c84527e59"],["/tags/网站/index.html","8df24acb49b54f9714ab94e6aa733243"],["/tags/网络/index.html","9d678349723e1d854271ed5dff400bed"],["/tags/美化/index.html","bce9dde63649ce78e44ed986405149e2"],["/tags/翻墙/index.html","7b93e05a32e659a23831b89d962be962"],["/tags/翻译/index.html","5e650afa58aac412e20ce467419e2d18"],["/tags/翻译器/index.html","c3901baf4370172aaa7d7e015a00eb57"],["/tags/聊天/index.html","644618f61f6c86fbf5998ffdb38ad4b0"],["/tags/聊天室/index.html","b64cffaa980ab83c907f7bd7265e31c4"],["/tags/联想/index.html","5db8227e91e814b4f3e32bac8e5c8295"],["/tags/节点/index.html","685bbf6c70be7895d39c4c5ccfbbc7a4"],["/tags/虚拟手机号/index.html","59ba519db23b859e0d79883952164d6a"],["/tags/补丁/index.html","043c5d5305dcfe161b5136a441be65c0"],["/tags/视频/index.html","18301da55727dd527aeaacfd99957517"],["/tags/解析/index.html","bd8a475c60b222a6e38774f8803bd7ec"],["/tags/订阅链接/index.html","8ca491fae30b6ac95a5ea369ca42c40c"],["/tags/记录/index.html","eb2aca2b286dbfc655171d8a1072aa30"],["/tags/识图/index.html","ae1404dcdf096152b801e7ab592bd1f2"],["/tags/语言/index.html","5873c0aa0815a3df036787dd0946dcca"],["/tags/资源/index.html","0468182f1e238b4ff2e17575325d4c31"],["/tags/资源管理器/index.html","7ebe6fe46aec17b6dbce341bab27d92d"],["/tags/转移/index.html","507a73ff7752c065c199859c67a7526a"],["/tags/软件/index.html","873d922c53a18b6e574603fc8419900c"],["/tags/轰炸/index.html","cacbba7b90840abb52f7d0f81ba2fc6e"],["/tags/迁移/index.html","9edacf467ad1979bf29052e4a3982673"],["/tags/远程控制/index.html","9b20a66e85b584b83c9b1ecc39343d4b"],["/tags/连接/index.html","472584b62b3848669c08cdc726994c6a"],["/tags/追踪/index.html","a8f81d79099a89ec3fd0e3b13a2bd991"],["/tags/速度/index.html","b4921a97787e94f28831a7c78e0d06dc"],["/tags/邮箱/index.html","8ead07c43e54fdd3686125bce62258a4"],["/tags/酷炫/index.html","44ccadfe9a53dc0ce43ff529ffe1a5fa"],["/tags/钓鱼/index.html","9ed7297e9a0987f26f712b05900af96e"],["/tags/镜像/index.html","123f92be3856f6ed7334087fe6b7adfc"],["/tags/随机/index.html","1a96260e6b922840d3474cbfcb913ba9"],["/tags/隐藏/index.html","2b4dbe3da5bda43b15721aaab4e23134"],["/tags/面板/index.html","06179222ec234b11bd7cb1aa9686a2eb"],["/tags/音乐/index.html","5acbda9145f46770ba6e1f30d5277296"],["/tags/高颜值/index.html","43f538f76ad774117e7e527af48b5723"],["/tags/魔改/index.html","b1813dd8c99ed47f9c712f14b6dddaf5"],["/tags/黑名单/index.html","ce4816c99fbb491e12bcd6406346e396"],["/urls/index.html","33390c63ab779aa1408969523b336fe0"],["/vps/index.html","a3cfc3c6f3fb6872cbe1bb3d97b96298"],["/支持/index.html","491ff63a2ad146827daa6ae66de592d9"]];
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
