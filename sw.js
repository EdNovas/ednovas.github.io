/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","16bab136cc545b5ae32be328487dafd9"],["/2020/11/29/clash-windows/index.html","1a65e2472174b6285b8dee7a74f43d28"],["/2020/11/30/websites2/index.html","2e0addbff1c9b9497f3b3d43d1698113"],["/2020/12/04/iphone4s/index.html","ccde94e51cf1bef7d77db99c42459670"],["/2020/12/04/onenote/index.html","1b0dbee730f89a38db2d6cf1b4054891"],["/2020/12/04/wesites1/index.html","cc20572b5fc527bb73e08a3d3f8508eb"],["/2020/12/06/nokia808/index.html","22c2a3bb5757100b1afd9e555feb7afb"],["/2020/12/07/ipad1/index.html","ddc2af001e1ea1ce57d610107e8daa35"],["/2020/12/18/freesubscribes/index.html","9158f38645e0e3a75fc238c4e617b49f"],["/2020/12/19/musics/index.html","4f2523ec6aab3bdaf955022f04f7a1ba"],["/2020/12/19/shadowrocket/index.html","08fa6be2fecbb64ace17c4d2afe60d17"],["/2020/12/19/v2ray-windows/index.html","41ffa654f13c700bbd6fb2b21e03f5a7"],["/2020/12/19/v2rayng/index.html","0628f12142827b30f370fb0c2e4fb6e8"],["/2020/12/20/beoplay/index.html","740f2e13162edf3f7849d2710c23a631"],["/2020/12/20/订阅链接转换/index.html","68a8f4ac14d79f57dfb54574a0e6488a"],["/2020/12/21/chrome浏览器下载提速/index.html","7792c210d31181f49a925026f4af177e"],["/2020/12/21/免费128线程并发下载xdown/index.html","39db0e57cff58f36658a07772a83042c"],["/2020/12/21/免费32线程下载软件ndm/index.html","9df8062606388080079d6be28804a82b"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","be45523182865b27278c5fb1dee2f4f4"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","7e62225cbc6e605b3ba8f4c98d6f4d01"],["/2020/12/21/广告怎么知道我在想什么/index.html","810be4050415056a61a5e34d712a5a24"],["/2020/12/21/无名·引子（小说试写）/index.html","8d3c26b1492160ab2dbdacbfc65a06e5"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","7f3289e3ab12cd2e8a4ffb9d74d43276"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","6fafdda894d896834f5b3abd6f857441"],["/2020/12/21/高速轻量下载器aria2/index.html","8eb94d20b1f0739d81555950c1dee7bb"],["/2020/12/22/2020-cee-roo/index.html","f64e28aeb1881648e395a7362cfdcfcf"],["/2020/12/22/firefox插件、github、steam富强/index.html","a0f78f1041cd93e6a0e03170e6f17679"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","59287f25d73434bcd5a26d53f968cd01"],["/2020/12/26/python-day-1/index.html","6deb84d97d5cda44b3e1116f50d25165"],["/2020/12/26/python-day-2/index.html","f8cbf41b2b489f96ac00572ba10883bb"],["/2020/12/26/度盘不限速下载方式一赏/index.html","ca1030605ce6328e708a83f522e79652"],["/2020/12/26/添加开机自启软件/index.html","e94b38752ef5fcc1c9fdd79da9b71631"],["/2020/12/26/电脑端截图方式一赏/index.html","fc59040830593eb36007f71250e9f34e"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","304e74530ff4d15545c229e236affd0a"],["/2020/12/27/最安全的浏览器tor/index.html","5a1f560c56c2e86dc8235a52b7c74277"],["/2020/12/27/网易云刷等级和听歌数量/index.html","25b0e9ec711857860b7d50bdd0efecf0"],["/2020/12/28/freenom申请免费域名/index.html","11ad1102400db618cbe5c46e58f4e238"],["/2020/12/31/机场/index.html","83faa497759eecbe3c46980059de7b29"],["/2021/01/01/M1/index.html","f8a7155806e4995a7b801b4e4756dd41"],["/2021/01/01/compress/index.html","f3a7e6b7ac3767839f976a55d4f76c46"],["/2021/01/01/infinityfree/index.html","73232f6807d6574b2ea38cf348534473"],["/2021/01/01/硬核翻墙/index.html","16d49fc2fa43f79f792a609a3e63dbcf"],["/2021/01/02/qq/index.html","a2e666c02510aa5fab89b4a1813b1eb5"],["/2021/01/03/netch/index.html","92710bb5a539a278436a4b2d308dc619"],["/2021/01/03/waifu2x/index.html","48d0e3115b7cc70fb60bd65700c5e78d"],["/2021/01/04/ads/index.html","9769e29258fa3eddb6e42067afe65569"],["/2021/01/04/games/index.html","64e40ab8c5de26f749ec1529fa103754"],["/2021/01/04/heroku/index.html","1def870cdd41c5c3a9c69dd9ece69e27"],["/2021/01/06/movies/index.html","67f96dabd7bc522c94bb184dfb067474"],["/2021/01/07/google2020/index.html","cc5fa20894a67998943c6b5f00baf95c"],["/2021/01/07/lucky/index.html","616549814f96e7382a1ec198718f64cd"],["/2021/01/07/spotify/index.html","9370fa5693677ec5a9c083d9c9f35a79"],["/2021/01/07/thunder/index.html","4c47d3f65cdb244d72c2d6c50094c219"],["/2021/01/08/adguardhome/index.html","3268e4ea46a36d8fe7a2b67f66c444bf"],["/2021/01/10/IBM/index.html","1e39a390cf8b0862e51a9b2b9159f111"],["/2021/01/10/potplayer/index.html","36dc276b5a06286b4d8f6084a8e0b91b"],["/2021/01/10/sakuraanime/index.html","90f7ebfc40c812392430dfbd002fb9e9"],["/2021/01/10/美剧星球/index.html","2d23037be6c0a8b3cf59908b20648565"],["/2021/01/12/telegraph/index.html","92652d64ed88ea2af93c03c2fb3260a1"],["/2021/01/14/comics/index.html","0722b957a02feb35043a9ca1dc30bed2"],["/2021/01/14/ftp/index.html","212385ee0dd51d3fc9962799f1076e57"],["/2021/01/14/oraclecloud/index.html","8bad66a2404eac44cf0f6acb1f4a73af"],["/2021/01/14/porkbun/index.html","a45cec81cf2c76804b31d49de161572d"],["/2021/01/14/powertoys/index.html","9dbed42b1ef2308ef2ed8b1c2786e19d"],["/2021/01/14/taptap/index.html","c4eed4653414c448e5c950173dc72f8a"],["/2021/01/14/ubuntuvsftp/index.html","d168abb1f3546b141c9bc8284f744c85"],["/2021/01/14/小说/index.html","612d6a897aa8817e3678ee930d7d7fdb"],["/2021/01/15/freeproxies/index.html","481a64c21d0a6a9352a112e0fc6aa721"],["/2021/01/15/incaseformat/index.html","fc3a98a3bc91f444ac0dbbb39fa7e327"],["/2021/01/16/euserv/index.html","5b85801c9da182c4c3075fd5b58a3f17"],["/2021/01/16/winxray/index.html","23ab6b07a3f2c13c8e58a5e86f82c897"],["/2021/01/18/qqreadhistory/index.html","6bd0d9abbc5233f8b48b07b5c873d3fd"],["/2021/01/18/qqrevoke/index.html","c61471a75526a7746adefd78e0d7164e"],["/2021/01/19/freevpn/index.html","ef698c42cad205acadf6acc880025a51"],["/2021/01/20/browsertrack/index.html","d98d234fdfe480c7142a5e11a06719fe"],["/2021/01/20/v2ui/index.html","33fdfc0ae7ad7403561e18e6ee79b7c0"],["/2021/01/21/failedtoconnect/index.html","8ad6b8f9990a03e45345a9c4331a039f"],["/2021/01/21/gitcalendar/index.html","e5220594be78325592ec30dc4aebc3cf"],["/2021/01/21/markdownformat/index.html","1af6cc975d707a8f87cb574f741f776d"],["/2021/01/21/markdowntable/index.html","e27c36217340838d5e1f991d08b7a1f8"],["/2021/01/21/vercel/index.html","0777ecbab5d34ffce95b47693568a72a"],["/2021/01/22/hardware/index.html","b0ed66928ec0d482a8a3d4b1a1b289bc"],["/2021/01/22/muviz/index.html","fcb73300481d11a10f72d9401bff0a6e"],["/2021/01/22/randomapi/index.html","bc9bb44bea7aa48e0e7d20a2991f4000"],["/2021/01/22/searchimages/index.html","a41e159532568c23b57c6809f4e7b29a"],["/2021/01/23/RX文件管理器/index.html","4dbc10026d9736a898539f3768a4e855"],["/2021/01/23/chromeflag/index.html","cd7d2844f9eb06705c3498762bc96b69"],["/2021/01/23/qttabbar/index.html","a3747ba1747fb3931e0ec6f9a930b084"],["/2021/01/24/githubspeedup/index.html","29cbf66ac71a34dd545022f7adb5744d"],["/2021/01/24/jsdelivr/index.html","dc9fb6cf14594b90db651834be53e8f6"],["/2021/01/25/note/index.html","7d783b747ff222ce59caf075bb15a654"],["/2021/01/25/soul/index.html","7114c6aa238a71949e5bb50a91b7e46d"],["/2021/01/26/herokuxray/index.html","2bdf2bc02135feeee4a9c8f15bc96f4a"],["/2021/01/27/proxypool/index.html","4ee3861fc8314a444cd5b1cdba47d895"],["/2021/01/27/tracker/index.html","702980e17f2ab9174d65f3ed9c72b870"],["/2021/01/30/pandownphp/index.html","38fcaa93155151e3b3fdba877d5d4d3d"],["/2021/01/31/newgroup/index.html","5b4282cf075f4032adc4f1a5a658e160"],["/2021/02/01/clashlanguage/index.html","9b099928b95fcb4c5e47d852a8345f12"],["/2021/02/01/encrypt/index.html","056d6e349ccc1929c8eb328750322c00"],["/2021/02/01/footermotion/index.html","9d0ce48a5303d9892daf85d7c05cfb4f"],["/2021/02/01/gitter/index.html","78812d0127c5017dcd6cf2d5eafcb51d"],["/2021/02/01/pixivtop50/index.html","d824914f9701349389b0db9bce73460e"],["/2021/02/01/scrollbar/index.html","f804d6a8fbe507f2489eecc13de7b1ea"],["/2021/02/02/clover/index.html","296d5c3f900dbb5fbbdaf42378a5cf11"],["/2021/02/02/maya/index.html","2e2479dc8bd46f3eaedf11a9d569b573"],["/2021/02/02/speedcontroller/index.html","58583944d90accc19621557ee8ae7767"],["/2021/02/02/yesmusicplayer/index.html","1ed2ff69bb3c1c8b9e5850e68931d438"],["/2021/02/03/lenovoonelite/index.html","0405a305115aab3d549520af31794810"],["/2021/02/03/skipads/index.html","b859cd5772ec2b4f2c5cda7c32b988b3"],["/2021/02/04/picseed/index.html","26d9408cb4c5c494578623f39671c1d4"],["/2021/02/04/renren/index.html","57fbc2496844c3c771a5bbe4205b28b8"],["/2021/02/04/serverstress/index.html","90bd09cf6290f86b94883e9d837f8874"],["/2021/02/04/wikipediazh/index.html","81a5a9f1e425b05b60f5b0cf6e39a9fd"],["/2021/02/05/googlevoice/index.html","2680db58b53605a217e330c33da4e96d"],["/2021/02/06/clashconnection/index.html","76a235862ac601e90b7ffeeac807562a"],["/2021/02/06/gvtransfer/index.html","59acc6f46ce08e58457843bd7a97f092"],["/2021/02/06/todesk/index.html","4335043dbc57ff0fb9790bc0c7958f0f"],["/2021/02/06/vpnblacklist/index.html","88cb50bf4cabf3dc7d8c4080a1053eb6"],["/2021/02/07/mklink/index.html","995f9bc55b66052b8c88ddcd75d03d25"],["/2021/02/07/speedtest/index.html","6358630656b2fa0c18112fe0d54988ea"],["/2021/02/07/translate/index.html","edd29cf067f53f45d2a98e44869936d8"],["/2021/02/08/ewomail/index.html","3310dc497a006811212727c341406527"],["/2021/02/10/officee5/index.html","2f67665b02ad65c3338c6a9745b9176b"],["/2021/02/10/raidrive/index.html","cb73e8ffbc8c81fe61235cffdf255ee1"],["/2021/02/13/e5sub/index.html","e709c53e94488304c6740c8137a2f46a"],["/2021/02/14/screen/index.html","61d6349582b0be514a2cd8568d776a13"],["/2021/02/15/clashtun/index.html","8c06845015c1ad70a0332dc311cb6555"],["/2021/02/15/messageboom/index.html","d0b09ac407b9c2b3d593cde5a10c3385"],["/2021/02/15/oneindex/index.html","db163b2c4804866e1acf9446bd0a99c5"],["/2021/02/16/govsites/index.html","8f8816819d484bd7ef2b5bc04be8b450"],["/2021/02/17/hexototypecho/index.html","8688d9691502603b1e83d1523f6497f1"],["/2021/02/19/fiddler/index.html","76590658f49c33d8d68e4443d82a3e63"],["/2021/02/22/potplayerset/index.html","29214c6aedef35b85689a4a01fcb9b73"],["/2021/02/22/studyresource/index.html","1b0eeb48cf2ffd17c204a2800a9587a2"],["/2021/02/22/telegram/index.html","8ce1e913ecda90815dc6a6aba02f09c1"],["/2021/02/22/videos/index.html","4e9c1cf98aedb893843f5fdee030f060"],["/2021/02/24/mtproxy/index.html","a11d803194c89e0f9dfa2fbf0a4b08fb"],["/404.html","1d042565a6cb0f85b0b9ace3d28f14bf"],["/archives/2020/11/index.html","63e5ade233e47811500672c3ec5baabc"],["/archives/2020/12/index.html","073f01d63d25b38dbe95765d8db6ebdf"],["/archives/2020/12/page/2/index.html","3296cda7ed89f53dc16828b8984b04bd"],["/archives/2020/12/page/3/index.html","33969b878b1e8b45478367fb23e86dc9"],["/archives/2020/index.html","9c3b293e2c8eceb0ad679a10f60d636a"],["/archives/2020/page/2/index.html","a1c90ba9f2eda27c4101a3a94ee2d498"],["/archives/2020/page/3/index.html","5fd93c55a2e0318c82f53386aed39c90"],["/archives/2021/01/index.html","a2f2483d11feedfae9d01b9347bd2ed4"],["/archives/2021/01/page/2/index.html","14246578016b0baa7ceae8a6d519245c"],["/archives/2021/01/page/3/index.html","21efa5685599daca431f17ff88cbd50e"],["/archives/2021/01/page/4/index.html","454de380b356dc598ab2b6de6a5255c4"],["/archives/2021/02/index.html","7cb1546e1a029910bf5a9c77af33656f"],["/archives/2021/02/page/2/index.html","ff2b288e34be946c0eb7e07704eba931"],["/archives/2021/02/page/3/index.html","310497a82c504ce00c0c6b501cf899b6"],["/archives/2021/index.html","20744f751b344021a2edf51fa4d8f3d6"],["/archives/2021/page/2/index.html","a5064c83e96f986883153a3abcc0cd01"],["/archives/2021/page/3/index.html","dd799e374ca210be78f8ed7c6e1ddc49"],["/archives/2021/page/4/index.html","90c5f462efa18b4ecded2f8856c4442d"],["/archives/2021/page/5/index.html","382b773eee4882dd20a865411d8287bd"],["/archives/2021/page/6/index.html","28cd7afcfd7327350a085ba44ac3b138"],["/archives/2021/page/7/index.html","e9b57d064e1bbacb9b6752cacd605542"],["/archives/index.html","35ae94248ff3a3e72b58b6a5295b8381"],["/archives/page/10/index.html","b6f0d7f6fcc01f2edf7eab63b423511d"],["/archives/page/2/index.html","842b87f3d1ca8855222f1081a1526cec"],["/archives/page/3/index.html","50b0c064261ab66c4d8c558d27a3166a"],["/archives/page/4/index.html","8c112c22bf7bf47b7a9a6438422def21"],["/archives/page/5/index.html","c2f01e999b552630eaac9e9ce08d9b38"],["/archives/page/6/index.html","1f266bba8d49707950a80bbe42ee8fbb"],["/archives/page/7/index.html","26ec4d40bf82bae5e7e93d3e02ce1586"],["/archives/page/8/index.html","e5f278e6bbc7ea72b1b0bf6d1c0cd80b"],["/archives/page/9/index.html","1cbf49be7a5cecb4f1c757fdb5363a63"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","5950c4434a78693955a160e49eceaa5b"],["/categories/index.html","468428f5caa10395f7d9281eabdc6140"],["/categories/下载/index.html","35c7e046f4eebdb90118cee569eabb6d"],["/categories/安全/index.html","91cfdef1c61e9ac76dcc5b99fb7fa39f"],["/categories/建站/index.html","a758632f31579d1c47356a041695e8fe"],["/categories/杂/index.html","529e9a20900048eb760e937a93622596"],["/categories/杂/page/2/index.html","d3afa8dac0956a9190db7ad6c9e581c6"],["/categories/测评/index.html","14089c259eac80c65cd9a7250e4b9630"],["/categories/科学上网/index.html","48c03076be453a3f24aae034dad52fda"],["/categories/科学上网/page/2/index.html","6df98eebd4481df0ca2c339c4e12f2e4"],["/categories/编程/index.html","3b57e8e5e1483f47e9ca74676106cc69"],["/categories/网站/index.html","76815b37d3e81493aefc52a09f11b361"],["/categories/网站/page/2/index.html","265cadec339571dba61b8c1f7c5cbaa7"],["/categories/软件/index.html","40c786be582243b92c7a6b5136730493"],["/categories/软件/page/2/index.html","7b80d61efd5fea6db01b09eddcb02c13"],["/categories/软件/page/3/index.html","36594370537d4e9d402f2e21bd0c4fda"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","5b24e2b118063a792d0396ac7ec62a79"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","bb5bc47af2e767a287326859da42608a"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","6b97f058151f0aa420c95e33002bd1ae"],["/ios/index.html","0a8fa870b0d286f72ab3e3abf111aa50"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","f9c9ac566ced800c636f9674a086d559"],["/page/2/index.html","bc6be3c37dec1df539093cd037e08e73"],["/page/3/index.html","5cc7b3e31e99bb62646297fced37658f"],["/page/4/index.html","a24a02d1e96368c2aa4ea04a8c87fc8d"],["/page/5/index.html","6d5ae1cce4cc9d8a762884a1d86795e7"],["/page/6/index.html","079084dd369d5140fcb5bf72c4c80318"],["/page/7/index.html","15866a1b490dacc87c8beb63553c8243"],["/page/8/index.html","0179cd596cbb2df67b40436e2a5b7328"],["/page/9/index.html","14b869bed33aa64fa4c9cf402596808b"],["/payment/index.html","dfb8ecf090d92f131b851cf8f915098c"],["/privacy-policy/index.html","d58fbf49fca9270149329503d010ec1e"],["/rss2.xml","25db217f27c88aaaf240d244752b7512"],["/search.xml","a25114a3b9ce77500d74e31ed2ef7864"],["/sitemap.xml","b294167114c25f06646ff3f8a6108029"],["/sw-register.js","508443c93244d703ba107141f4bd9987"],["/tags/5t/index.html","19a74ae23590aa02dd5959271ff19307"],["/tags/Clash/index.html","54f7259665f531154cf31c173f0e7237"],["/tags/Clover/index.html","0350077320e21c01276ec06780dd27c6"],["/tags/E5/index.html","aac20b257abe6a7f8000211e673f48eb"],["/tags/FTP/index.html","525f125299ad5dfe22a82a84f211995e"],["/tags/GitHub/index.html","092c5ec5496a9477f69e1c55c01f69d5"],["/tags/Heroku/index.html","23a7a4d1617be93458daf69175985911"],["/tags/Hexo/index.html","1881299c2ed68bc9810ab2c78c7fd9d2"],["/tags/Lenovo/index.html","e79f4aa7101122f2afe7d06e9883389e"],["/tags/Oneindex/index.html","89bba102f2e5c60611d943e0ed834d0d"],["/tags/QQ/index.html","b8812074efc60f7fe6d5cb0377fb1a29"],["/tags/QTTabbar/index.html","e57e0563868a490e32ea038dbc576811"],["/tags/RX文件管理器/index.html","306ac8032587a66d34fa0a6c4f68f8b8"],["/tags/Todesk/index.html","50098f268257a8a64aff9b123c00aa01"],["/tags/Vercel/index.html","dbbc5e528d2746f534c5ba56567ff5b0"],["/tags/ads/index.html","bbef482a17dc7452d137243894bae924"],["/tags/api/index.html","ed7a53d7d3b8d4146ba3d0d2ac1755d0"],["/tags/app/index.html","5582285944a76b038a4bc84c7e341ab8"],["/tags/blacklist/index.html","9cef5c38a7fbdcd38118118e316e7ac9"],["/tags/butterfly/index.html","f7d61e1678da0f569b0c0138eda42343"],["/tags/chrome/index.html","b485e5d58e851e1f2dcbf59e77f09ce7"],["/tags/cloudflare/index.html","b645f05a526d7fadb02f99e1f132608a"],["/tags/cmd/index.html","0f89d2b35b3fb0dd43fa6676fcf74ee8"],["/tags/c盘/index.html","991572a04fb9dfd8147a4d78b838dc79"],["/tags/email/index.html","46eaece29f466996e68ced91512decae"],["/tags/ewomail/index.html","2e43ca094191a1d2826ae942fcfee40f"],["/tags/fiddler/index.html","a0c7e0633b080961ff8285efd8c6ef15"],["/tags/flags/index.html","77818a89ebc680ae353a68660b801461"],["/tags/footer，页脚/index.html","0990c33c6263e4f8833ec2ead78beacf"],["/tags/galgame/index.html","5c9c885fbb77b7891abdd8ce570d2c4a"],["/tags/git/index.html","831432d825dd58fccf918bcf31762240"],["/tags/gitcalendar/index.html","bc302b6252fc6344c56a335497f589bf"],["/tags/google-voice/index.html","a8b6a8ea76155b6639a4e55479b6333c"],["/tags/gv/index.html","d9f557185b5c98a22d997028d2248d36"],["/tags/index-1.html","5c66c1c473b8d0e90e38b5994c76cad3"],["/tags/index.html","b411775189216d2c23ce802bc808e484"],["/tags/jsdelivr/index.html","8a2cbc454ff3798c8dd521b2c6f28e3b"],["/tags/linux/index.html","013a3bbc9cd49350eb788d0a7bb698da"],["/tags/madVR/index.html","6174d7af8c3bccad6cefebe8dc2dafea"],["/tags/markdown/index.html","ec2de2fb9c2ee97dd3f4cd692394cdcf"],["/tags/maya/index.html","297aa631c6b199b846f879fe11a13bd2"],["/tags/mklink/index.html","8edde7ba3fc2a9d27de8b39fac03ac0b"],["/tags/office-e5/index.html","75dcde5da3c91f29db25afd67a7405cb"],["/tags/onedrive/index.html","b8b35e698831622ecf57baea2f8371f4"],["/tags/picGO/index.html","e22e0068970041a4e9edfd7b43238200"],["/tags/pixiv/index.html","1d2a5eb16cc75fb1e545c452200fb195"],["/tags/potplayer/index.html","f752de5f67a39bae350384a4ecf6258b"],["/tags/proxypool/index.html","c8b6521f8b987660f13018fcbf553884"],["/tags/qbitorrent/index.html","66a43134c960c27f92507dcd8de2677b"],["/tags/raidrive/index.html","38308b8d6316a8230e127c6ec734fbdc"],["/tags/screen/index.html","a7c0564b8949546f27605f2b9216ca58"],["/tags/speedtest/index.html","ca2244be769e27c226fcd84a78995e3a"],["/tags/tap/index.html","92780c6e88c5a2ba372d7002e9d29ad2"],["/tags/telegram/index.html","41d9934b30f6fb59109cb00ee11059f0"],["/tags/telegram代理/index.html","1734fca07a7249a6936496c87bfbed42"],["/tags/tg/index.html","b682a3bf0fd5979f8e0041aa266fb9ef"],["/tags/tg代理/index.html","e79cfbd66e322d3341baabdfb0a8ed3d"],["/tags/top50/index.html","3dcff5eb88a122b77a7a0947b423c1bf"],["/tags/tracker/index.html","d231b1637d4016716156e7868f745853"],["/tags/translate/index.html","524ca0574f11ca7717d9a3789d74d7a5"],["/tags/translater/index.html","b1f63084ce40fbf14f2b065665663750"],["/tags/tun/index.html","4403c59a3e29e680a5880cfec32bf644"],["/tags/typecho/index.html","daaf92197ad9521e669ae13e7b12b9a0"],["/tags/v2ray/index.html","19f5d34c68e09717fc1ba2c6c77c71c0"],["/tags/vpn/index.html","d6828bbeb1cfec9cb45b53a8523d1ef2"],["/tags/vps/index.html","72539fb83d54dfc7905c31c9f9f1d711"],["/tags/windows/index.html","a5c5ebd930d63edc035287111231dfc8"],["/tags/windows端/index.html","93d2c7921bcad84cfebda4036b5459a3"],["/tags/xray/index.html","a80a357fee3c24d649e95440f456ac50"],["/tags/下载/index.html","6b838aecb804dfcc2d9eecda98153037"],["/tags/不限速/index.html","92547e3ff4cd4017e39efee64e968d9b"],["/tags/个人网盘/index.html","2aa860d29cf4fb093a89560a297d46b1"],["/tags/主题/index.html","f2f54bfbaf9dcd53269a426347a79f19"],["/tags/云便签/index.html","64322aa8313d235535fc9ea6736b8cfc"],["/tags/云盘/index.html","a9f6bee1102dba0436720f176463f469"],["/tags/人人/index.html","d012a2bb6f990e0c686fbbe484ef74f5"],["/tags/代理/index.html","f590ff7695423d2ba6acf4e7c9ab5d2f"],["/tags/代码/index.html","35198a66411780f21803c3a47befe666"],["/tags/优选IP/index.html","97c89a6bac61a34619e0863ab528f3dc"],["/tags/便签/index.html","f525386941f594a04c3af0b78e723e89"],["/tags/保号/index.html","cc242deb4694c91654ba93350287271c"],["/tags/免费/index.html","55c5250fb32bad79bf4ecf7cf2df53c5"],["/tags/免费节点/index.html","a7b6d0ad455e2adbfbfe9ff434a8ac80"],["/tags/加密/index.html","31cc7dd7aa2d0af7e94a7e2aa9254bba"],["/tags/动画/index.html","086c6838a30cc9176acc2d5550cebe5e"],["/tags/博客/index.html","b6a04f7de80472d54c188e9e7e775a56"],["/tags/历史记录/index.html","da5a4230c9e9542444e1890d79783347"],["/tags/压力/index.html","f4a6603bcf3a2fd70d79c3cb60b08c44"],["/tags/压缩包/index.html","463086f073af037c04263a04c6389dd6"],["/tags/反代/index.html","92efb37046f8fe4ff12ba7ea1d0f9eeb"],["/tags/可视化/index.html","1c09b0ba46ae03ce6c939c804f17b4aa"],["/tags/命令/index.html","7181abe668274d20a2a417f13233b664"],["/tags/国家/index.html","1da4d3cc65d65ba4912c8a3fc4034e71"],["/tags/图床/index.html","fd5de4b9c79ad21e52bdb2bbb57b2c4c"],["/tags/图片/index.html","cc5cbadf0756675e00d12d7b2c18b387"],["/tags/域名/index.html","3741c7f5bfdd304e4eebd74282962fea"],["/tags/多标签/index.html","5c8f7517c0997109e0369885f80a86ed"],["/tags/存储/index.html","e542a1f17bdd4c63b6623756ca679047"],["/tags/学习/index.html","9b20db7ca534101654083462b6481268"],["/tags/安全/index.html","d79a76eaa9ec78654ba7655ae91f7122"],["/tags/安卓/index.html","ec877dc1139a2ae2d9173ba9a2cfbad2"],["/tags/宝塔/index.html","0b4d43ce1cc5555ba3081e04dafad384"],["/tags/广告/index.html","8487fdb30e5c9b118c5714ffa5f937a0"],["/tags/建站/index.html","b4981c91e9d50e3234ae5a6c046f6c9e"],["/tags/影视/index.html","cd16255b4e0b4be2f4fa85ccf049cdce"],["/tags/快速启动/index.html","2a9ee4e4da236cbaeb932635e4f98e47"],["/tags/手机/index.html","cbc270165587a702e0dbcd28fb16a874"],["/tags/托管/index.html","89b59c66877d504b065ec40f08aebceb"],["/tags/抓包/index.html","e44ecf7269c574d50d93ad9b2d5ac5e4"],["/tags/抓取/index.html","97a2ceb997b47e60366c6f35fe1590da"],["/tags/投屏/index.html","6e7611c7d54d1363a19427b6cc1a879e"],["/tags/拓展功能/index.html","7fafcfd43afd7c96fdf63dc7ab3e942b"],["/tags/挂载/index.html","3fbe4c8fb5b89d11f799bd64716a4a9d"],["/tags/指纹/index.html","4f539379afe5fd325300913bf79a0d9a"],["/tags/接口/index.html","82c65086a70da4ecabd83221c951ed20"],["/tags/提取图片/index.html","5ac2e471ef7216648f4f4f32c5d9e031"],["/tags/插件/index.html","0f0b0ebdadbcade48beaff36f1a7da92"],["/tags/搜图/index.html","43f736f53571769fb93b6ede602c4175"],["/tags/搭建/index.html","0eb24435ab87053a7ff1d35ea86b375f"],["/tags/撤回/index.html","915390501acad990d3570b4aabbc1a3a"],["/tags/播放器/index.html","69c2a95dd7952fed5d0b5e80e0a8c07e"],["/tags/政府网站/index.html","e48cae4b8ad1926d657bc36c921ff194"],["/tags/效率/index.html","f34f2c22fa8c57505ea8b379b650e232"],["/tags/日历/index.html","1943934d98d6604c338ae9292bc13b23"],["/tags/服务器/index.html","8d9ff710086a2fad8e57aa108cb5aa77"],["/tags/桌面/index.html","b9e770b099b7477e952ae5e107512eb8"],["/tags/梯子/index.html","e521e077124aabebc61227804ed0d40c"],["/tags/检测工具/index.html","7577c030825ec84c63064388b911c262"],["/tags/汉化/index.html","dd98a0f7b34a931df4bebd1bc3f6ed30"],["/tags/测压/index.html","cbdbfc0e60a4e30f36bfda370bb8d1b2"],["/tags/测速/index.html","c79f47d6defd47f94ee0120c51f381f3"],["/tags/浏览器/index.html","df602562e3e07fb136bd5ef4a1f2fafb"],["/tags/清理/index.html","e894319952853e93936f2509d9615101"],["/tags/滚动条/index.html","f367248fa345e205592fb7feb5cf16fe"],["/tags/电影/index.html","9a51f11f823e2ad8445aa4787758d6a8"],["/tags/电视剧/index.html","2d3a5c23095ed26d0cde319f3459d16c"],["/tags/白嫖/index.html","83de452e0d15bd4a10c12dd1023d8b96"],["/tags/百度/index.html","5093dac8370efaa2f10918f226201753"],["/tags/百度云盘/index.html","805d5ff474e4a5003c52f7824ff1eebc"],["/tags/百科/index.html","73ece3205efcf613c5174ab3e13c365b"],["/tags/短信/index.html","511f56dd81d5afd1218e6c2e13b92d94"],["/tags/硬件/index.html","368b897e9a44831b49c064320d4b7de3"],["/tags/科学上网/index.html","b52be5d77495af28560af8e530148c4d"],["/tags/空间/index.html","1b5441cb3e6ae6e392d4152533731942"],["/tags/笔记/index.html","b70d27c1507aa8795c9c7205c2ae89a2"],["/tags/简洁/index.html","92bd0d762ba2d63660604ab0d9ef9a66"],["/tags/简约/index.html","16da06ab2ee44c86f82ddbf651de66a1"],["/tags/维基/index.html","e33e7c16b55171942d036471431e26b9"],["/tags/网易云/index.html","56f4403544a84b224fcbd2950c828947"],["/tags/网盘/index.html","ebc25d1dbbe1099856ec9b9895b5132f"],["/tags/网站/index.html","7c80295c0db30cf370749f0030b39fd0"],["/tags/网络/index.html","bcd85cf49829f6569da766dcec74c478"],["/tags/美化/index.html","1456aad607e33636c5da609faace52f1"],["/tags/翻墙/index.html","cd1d397781b4082ba8870273c45ddc0b"],["/tags/翻译/index.html","49ae28741ec3210454e0c7be86587fab"],["/tags/翻译器/index.html","31dc61a0df414283ff246c0b1bdfd72a"],["/tags/聊天/index.html","b84df8c561839ca258a2583c0decab06"],["/tags/聊天室/index.html","7dc2eb3dc53c140da8f1a9d9174181ca"],["/tags/联想/index.html","9fc8ddc6129062ba56f4cbdf56c78608"],["/tags/节点/index.html","c506ba77497300e8c33faf6bb8ba617e"],["/tags/虚拟手机号/index.html","e361b347fbbe39d547e0848d7a726f3b"],["/tags/补丁/index.html","d6caea7cbb9ab84633b11a1e08f2bcd7"],["/tags/视频/index.html","91bb1f0b0d6cb3456b0f69dfe96c687a"],["/tags/解析/index.html","8c0f1021e4d8caa05dfd1af2bfdc11e0"],["/tags/订阅链接/index.html","9dc6ad8afad462c6c163ef7143a97436"],["/tags/记录/index.html","d3efa32e9c5152500188a0a8c312837b"],["/tags/识图/index.html","f6aa7b26e0f69485253cbc241f85dece"],["/tags/语言/index.html","3c17e88a1e8031783690fb86fabba2cb"],["/tags/资源/index.html","4b9274cc924a658e524242e7b1614d99"],["/tags/资源管理器/index.html","3828475fe1e9c163c23f5fb9b1dcdc1e"],["/tags/转移/index.html","f11b250730892b9028f6e14670e346dd"],["/tags/软件/index.html","77c7328cfbd33c26c035cfb346642cb4"],["/tags/轰炸/index.html","cf973a4df7e06e8f8208a4be498c8cfb"],["/tags/迁移/index.html","6d4c78e1d85435073d51bc570838e489"],["/tags/远程控制/index.html","b1ead7a042d7dbdc6fd5c3fb5ddbd153"],["/tags/连接/index.html","ac826a9ad4fb7dedd039a6b27295c1c8"],["/tags/追踪/index.html","7115db79cffe328d9c5fc4e7899fe173"],["/tags/速度/index.html","254dde4f395645fb3cbce25daf60683e"],["/tags/邮箱/index.html","315c968a010ea6d825c1372d7cc6a0a2"],["/tags/酷炫/index.html","a7a341967750ad6cc2f145c6c9278953"],["/tags/钓鱼/index.html","3a21d747f2732a866e0391a12f70ec65"],["/tags/镜像/index.html","ad007a0b19e000e240db7e644207861e"],["/tags/随机/index.html","073cd49d7acfee85ae9ff362168bb8f4"],["/tags/隐藏/index.html","6b88b8dde0865b355b126f2efee2a73f"],["/tags/面板/index.html","810068c8595a035a9be756abfc2edb32"],["/tags/音乐/index.html","67a317c0018cd7d77763154325dc1f11"],["/tags/高颜值/index.html","8d87aaf311fd88c5632dc9722ca2d3bd"],["/tags/魔改/index.html","3bb96494947623d27397e36b7ace062f"],["/tags/黑名单/index.html","def41f2ca70cc60c063ba4999dcad33b"],["/urls/index.html","2d730a4055f8c6537cece73ec4ea3340"],["/vps/index.html","5f5044e8af4306f13a6b3acf70614132"],["/支持/index.html","51af80829321395fccd93c1873a1695c"]];
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
