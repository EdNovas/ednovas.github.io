/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","16bab136cc545b5ae32be328487dafd9"],["/2020/11/29/clash-windows/index.html","1a65e2472174b6285b8dee7a74f43d28"],["/2020/11/30/websites2/index.html","2e0addbff1c9b9497f3b3d43d1698113"],["/2020/12/04/iphone4s/index.html","ccde94e51cf1bef7d77db99c42459670"],["/2020/12/04/onenote/index.html","1b0dbee730f89a38db2d6cf1b4054891"],["/2020/12/04/wesites1/index.html","cc20572b5fc527bb73e08a3d3f8508eb"],["/2020/12/06/nokia808/index.html","22c2a3bb5757100b1afd9e555feb7afb"],["/2020/12/07/ipad1/index.html","ddc2af001e1ea1ce57d610107e8daa35"],["/2020/12/18/freesubscribes/index.html","a9c01f743d533fc89ce542bd59a1ede8"],["/2020/12/19/musics/index.html","4f2523ec6aab3bdaf955022f04f7a1ba"],["/2020/12/19/shadowrocket/index.html","08fa6be2fecbb64ace17c4d2afe60d17"],["/2020/12/19/v2ray-windows/index.html","41ffa654f13c700bbd6fb2b21e03f5a7"],["/2020/12/19/v2rayng/index.html","0628f12142827b30f370fb0c2e4fb6e8"],["/2020/12/20/beoplay/index.html","740f2e13162edf3f7849d2710c23a631"],["/2020/12/20/订阅链接转换/index.html","68a8f4ac14d79f57dfb54574a0e6488a"],["/2020/12/21/chrome浏览器下载提速/index.html","7792c210d31181f49a925026f4af177e"],["/2020/12/21/免费128线程并发下载xdown/index.html","39db0e57cff58f36658a07772a83042c"],["/2020/12/21/免费32线程下载软件ndm/index.html","9df8062606388080079d6be28804a82b"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","be45523182865b27278c5fb1dee2f4f4"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","7e62225cbc6e605b3ba8f4c98d6f4d01"],["/2020/12/21/广告怎么知道我在想什么/index.html","810be4050415056a61a5e34d712a5a24"],["/2020/12/21/无名·引子（小说试写）/index.html","8d3c26b1492160ab2dbdacbfc65a06e5"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","7f3289e3ab12cd2e8a4ffb9d74d43276"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","6fafdda894d896834f5b3abd6f857441"],["/2020/12/21/高速轻量下载器aria2/index.html","8eb94d20b1f0739d81555950c1dee7bb"],["/2020/12/22/2020-cee-roo/index.html","f64e28aeb1881648e395a7362cfdcfcf"],["/2020/12/22/firefox插件、github、steam富强/index.html","a0f78f1041cd93e6a0e03170e6f17679"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","59287f25d73434bcd5a26d53f968cd01"],["/2020/12/26/python-day-1/index.html","6deb84d97d5cda44b3e1116f50d25165"],["/2020/12/26/python-day-2/index.html","f8cbf41b2b489f96ac00572ba10883bb"],["/2020/12/26/度盘不限速下载方式一赏/index.html","ca1030605ce6328e708a83f522e79652"],["/2020/12/26/添加开机自启软件/index.html","e94b38752ef5fcc1c9fdd79da9b71631"],["/2020/12/26/电脑端截图方式一赏/index.html","fc59040830593eb36007f71250e9f34e"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","304e74530ff4d15545c229e236affd0a"],["/2020/12/27/最安全的浏览器tor/index.html","5a1f560c56c2e86dc8235a52b7c74277"],["/2020/12/27/网易云刷等级和听歌数量/index.html","25b0e9ec711857860b7d50bdd0efecf0"],["/2020/12/28/freenom申请免费域名/index.html","11ad1102400db618cbe5c46e58f4e238"],["/2020/12/31/机场/index.html","83faa497759eecbe3c46980059de7b29"],["/2021/01/01/M1/index.html","f8a7155806e4995a7b801b4e4756dd41"],["/2021/01/01/compress/index.html","f3a7e6b7ac3767839f976a55d4f76c46"],["/2021/01/01/infinityfree/index.html","73232f6807d6574b2ea38cf348534473"],["/2021/01/01/硬核翻墙/index.html","16d49fc2fa43f79f792a609a3e63dbcf"],["/2021/01/02/qq/index.html","a2e666c02510aa5fab89b4a1813b1eb5"],["/2021/01/03/netch/index.html","92710bb5a539a278436a4b2d308dc619"],["/2021/01/03/waifu2x/index.html","48d0e3115b7cc70fb60bd65700c5e78d"],["/2021/01/04/ads/index.html","9769e29258fa3eddb6e42067afe65569"],["/2021/01/04/games/index.html","64e40ab8c5de26f749ec1529fa103754"],["/2021/01/04/heroku/index.html","1def870cdd41c5c3a9c69dd9ece69e27"],["/2021/01/06/movies/index.html","67f96dabd7bc522c94bb184dfb067474"],["/2021/01/07/google2020/index.html","cc5fa20894a67998943c6b5f00baf95c"],["/2021/01/07/lucky/index.html","616549814f96e7382a1ec198718f64cd"],["/2021/01/07/spotify/index.html","9370fa5693677ec5a9c083d9c9f35a79"],["/2021/01/07/thunder/index.html","4c47d3f65cdb244d72c2d6c50094c219"],["/2021/01/08/adguardhome/index.html","3268e4ea46a36d8fe7a2b67f66c444bf"],["/2021/01/10/IBM/index.html","f2aafe00adeb4d4a7f5d6d95e6af5481"],["/2021/01/10/potplayer/index.html","36dc276b5a06286b4d8f6084a8e0b91b"],["/2021/01/10/sakuraanime/index.html","90f7ebfc40c812392430dfbd002fb9e9"],["/2021/01/10/美剧星球/index.html","2d23037be6c0a8b3cf59908b20648565"],["/2021/01/12/telegraph/index.html","92652d64ed88ea2af93c03c2fb3260a1"],["/2021/01/14/comics/index.html","0722b957a02feb35043a9ca1dc30bed2"],["/2021/01/14/ftp/index.html","212385ee0dd51d3fc9962799f1076e57"],["/2021/01/14/oraclecloud/index.html","8bad66a2404eac44cf0f6acb1f4a73af"],["/2021/01/14/porkbun/index.html","a45cec81cf2c76804b31d49de161572d"],["/2021/01/14/powertoys/index.html","9dbed42b1ef2308ef2ed8b1c2786e19d"],["/2021/01/14/taptap/index.html","c4eed4653414c448e5c950173dc72f8a"],["/2021/01/14/ubuntuvsftp/index.html","d168abb1f3546b141c9bc8284f744c85"],["/2021/01/14/小说/index.html","612d6a897aa8817e3678ee930d7d7fdb"],["/2021/01/15/freeproxies/index.html","481a64c21d0a6a9352a112e0fc6aa721"],["/2021/01/15/incaseformat/index.html","fc3a98a3bc91f444ac0dbbb39fa7e327"],["/2021/01/16/euserv/index.html","5b85801c9da182c4c3075fd5b58a3f17"],["/2021/01/16/winxray/index.html","9dc8687ebecea1cad7433d8588bc04a4"],["/2021/01/18/qqreadhistory/index.html","6bd0d9abbc5233f8b48b07b5c873d3fd"],["/2021/01/18/qqrevoke/index.html","c61471a75526a7746adefd78e0d7164e"],["/2021/01/19/freevpn/index.html","57a2da53eaa8429ddae65170a9e3c730"],["/2021/01/20/browsertrack/index.html","d98d234fdfe480c7142a5e11a06719fe"],["/2021/01/20/v2ui/index.html","a6bb0974279861bf60ccdffdea3940ae"],["/2021/01/21/failedtoconnect/index.html","c76269031220bb19f6de9437ddd29290"],["/2021/01/21/gitcalendar/index.html","e5220594be78325592ec30dc4aebc3cf"],["/2021/01/21/markdownformat/index.html","1af6cc975d707a8f87cb574f741f776d"],["/2021/01/21/markdowntable/index.html","e27c36217340838d5e1f991d08b7a1f8"],["/2021/01/21/vercel/index.html","0777ecbab5d34ffce95b47693568a72a"],["/2021/01/22/hardware/index.html","b0ed66928ec0d482a8a3d4b1a1b289bc"],["/2021/01/22/muviz/index.html","fcb73300481d11a10f72d9401bff0a6e"],["/2021/01/22/randomapi/index.html","bc9bb44bea7aa48e0e7d20a2991f4000"],["/2021/01/22/searchimages/index.html","a41e159532568c23b57c6809f4e7b29a"],["/2021/01/23/RX文件管理器/index.html","4dbc10026d9736a898539f3768a4e855"],["/2021/01/23/chromeflag/index.html","cd7d2844f9eb06705c3498762bc96b69"],["/2021/01/23/qttabbar/index.html","a3747ba1747fb3931e0ec6f9a930b084"],["/2021/01/24/githubspeedup/index.html","29cbf66ac71a34dd545022f7adb5744d"],["/2021/01/24/jsdelivr/index.html","dc9fb6cf14594b90db651834be53e8f6"],["/2021/01/25/note/index.html","7d783b747ff222ce59caf075bb15a654"],["/2021/01/25/soul/index.html","7114c6aa238a71949e5bb50a91b7e46d"],["/2021/01/26/herokuxray/index.html","bff1389b6d0dde7b657e1f66ef838c02"],["/2021/01/27/proxypool/index.html","4ee3861fc8314a444cd5b1cdba47d895"],["/2021/01/27/tracker/index.html","702980e17f2ab9174d65f3ed9c72b870"],["/2021/01/30/pandownphp/index.html","38fcaa93155151e3b3fdba877d5d4d3d"],["/2021/01/31/newgroup/index.html","5b4282cf075f4032adc4f1a5a658e160"],["/2021/02/01/clashlanguage/index.html","9b099928b95fcb4c5e47d852a8345f12"],["/2021/02/01/encrypt/index.html","056d6e349ccc1929c8eb328750322c00"],["/2021/02/01/footermotion/index.html","9d0ce48a5303d9892daf85d7c05cfb4f"],["/2021/02/01/gitter/index.html","78812d0127c5017dcd6cf2d5eafcb51d"],["/2021/02/01/pixivtop50/index.html","d824914f9701349389b0db9bce73460e"],["/2021/02/01/scrollbar/index.html","f804d6a8fbe507f2489eecc13de7b1ea"],["/2021/02/02/clover/index.html","296d5c3f900dbb5fbbdaf42378a5cf11"],["/2021/02/02/maya/index.html","2e2479dc8bd46f3eaedf11a9d569b573"],["/2021/02/02/speedcontroller/index.html","58583944d90accc19621557ee8ae7767"],["/2021/02/02/yesmusicplayer/index.html","1ed2ff69bb3c1c8b9e5850e68931d438"],["/2021/02/03/lenovoonelite/index.html","0405a305115aab3d549520af31794810"],["/2021/02/03/skipads/index.html","b859cd5772ec2b4f2c5cda7c32b988b3"],["/2021/02/04/picseed/index.html","26d9408cb4c5c494578623f39671c1d4"],["/2021/02/04/renren/index.html","57fbc2496844c3c771a5bbe4205b28b8"],["/2021/02/04/serverstress/index.html","90bd09cf6290f86b94883e9d837f8874"],["/2021/02/04/wikipediazh/index.html","81a5a9f1e425b05b60f5b0cf6e39a9fd"],["/2021/02/05/googlevoice/index.html","2680db58b53605a217e330c33da4e96d"],["/2021/02/06/clashconnection/index.html","76a235862ac601e90b7ffeeac807562a"],["/2021/02/06/gvtransfer/index.html","59acc6f46ce08e58457843bd7a97f092"],["/2021/02/06/todesk/index.html","4335043dbc57ff0fb9790bc0c7958f0f"],["/2021/02/06/vpnblacklist/index.html","e3fed2200b25231bf82a89aafa0de8bf"],["/2021/02/07/mklink/index.html","995f9bc55b66052b8c88ddcd75d03d25"],["/2021/02/07/speedtest/index.html","6358630656b2fa0c18112fe0d54988ea"],["/2021/02/07/translate/index.html","edd29cf067f53f45d2a98e44869936d8"],["/2021/02/08/ewomail/index.html","3310dc497a006811212727c341406527"],["/2021/02/10/officee5/index.html","e7b506851b0ac523c55d931be5e38251"],["/2021/02/10/raidrive/index.html","cb73e8ffbc8c81fe61235cffdf255ee1"],["/2021/02/13/e5sub/index.html","e709c53e94488304c6740c8137a2f46a"],["/2021/02/14/screen/index.html","61d6349582b0be514a2cd8568d776a13"],["/2021/02/15/clashtun/index.html","8c06845015c1ad70a0332dc311cb6555"],["/2021/02/15/messageboom/index.html","d0b09ac407b9c2b3d593cde5a10c3385"],["/2021/02/15/oneindex/index.html","db163b2c4804866e1acf9446bd0a99c5"],["/2021/02/16/govsites/index.html","8f8816819d484bd7ef2b5bc04be8b450"],["/2021/02/17/hexototypecho/index.html","8688d9691502603b1e83d1523f6497f1"],["/2021/02/19/fiddler/index.html","76590658f49c33d8d68e4443d82a3e63"],["/2021/02/22/potplayerset/index.html","29214c6aedef35b85689a4a01fcb9b73"],["/2021/02/22/studyresource/index.html","1b0eeb48cf2ffd17c204a2800a9587a2"],["/2021/02/22/telegram/index.html","24753ba0157c46cd0793f2e0f299a911"],["/2021/02/22/videos/index.html","4e9c1cf98aedb893843f5fdee030f060"],["/2021/02/24/mtproxy/index.html","a11d803194c89e0f9dfa2fbf0a4b08fb"],["/404.html","2524dc8c82defb558eeed2c1bd7fb01f"],["/archives/2020/11/index.html","540d0db94fc5b73890e63416a880e6ca"],["/archives/2020/12/index.html","cf0dbd27568bd42c041cbf00966fe917"],["/archives/2020/12/page/2/index.html","8646808e88222b313dd2eb0517b1bf56"],["/archives/2020/12/page/3/index.html","d64d69add52af885b7794aa597d42f10"],["/archives/2020/index.html","754058f8c4bd522e7b7f660455a5abc8"],["/archives/2020/page/2/index.html","c8f27f3c7dd6ae9ccb2565988b52954e"],["/archives/2020/page/3/index.html","4e9c9f8f7769a864bb535d0f9906307a"],["/archives/2021/01/index.html","59586ee6721b7c1e7fb117f7322949ff"],["/archives/2021/01/page/2/index.html","38f8568d2ad0741f35a38357801a6e8c"],["/archives/2021/01/page/3/index.html","1722e5d5291610047be704fa1dcba3e2"],["/archives/2021/01/page/4/index.html","eef9b2464229562f0c91a9ddf9de6997"],["/archives/2021/02/index.html","469a83e84b2e6f4411aae4d434750bfb"],["/archives/2021/02/page/2/index.html","0533aaa1bbdf25a131d162cd5f62c58c"],["/archives/2021/02/page/3/index.html","290f1f1e5be5f1642e0fbb92a2f568b5"],["/archives/2021/index.html","616f80da6511b54ba08d0fd3ed1672f4"],["/archives/2021/page/2/index.html","c3685474652bc3a22e496cf6ea34ed41"],["/archives/2021/page/3/index.html","c1a641e65c32be017db064224813e5fe"],["/archives/2021/page/4/index.html","ad1e90bb645725a3dda339530c13b5cb"],["/archives/2021/page/5/index.html","5706649207f20e0ac6dc31ba627c6e6d"],["/archives/2021/page/6/index.html","bd69322a0eff1b2f3a56b060a522da4f"],["/archives/2021/page/7/index.html","43a9cb1fee92c80ad12726889053f279"],["/archives/index.html","093eaf667f326e1aac9ec57824f8bc4b"],["/archives/page/10/index.html","2bf436c68574351c414f1154c57b0974"],["/archives/page/2/index.html","2da044bc3c1acf2f9a2da21dc1007dc4"],["/archives/page/3/index.html","06dfb00c3d2147f90b7dd7243af931d6"],["/archives/page/4/index.html","f76fc248e8659226f5b372b56769040c"],["/archives/page/5/index.html","3d141e07069a4c58ba43182285bba263"],["/archives/page/6/index.html","a8501c3595c46d5b459e80ba384c4fa3"],["/archives/page/7/index.html","44dfc666db97b1fa428db9aefd5e06bd"],["/archives/page/8/index.html","20d8ae1a6065c92a0fb4c89b59bbfac0"],["/archives/page/9/index.html","49d8ddfaaa50124b4205851a2d5b899a"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","7467feee0c8df67bcf1b640544194756"],["/categories/index.html","c65c35272af694ddf0c8d4a7e2cbdd29"],["/categories/下载/index.html","f2c424f03b91c2cef41093715c2e9c0d"],["/categories/安全/index.html","36334c16d93ccad9e56e55ca91c4b008"],["/categories/建站/index.html","b9c10b9be0576eace48aff710def2fd9"],["/categories/杂/index.html","14af635a3efd0c155316ca1a55be76f6"],["/categories/杂/page/2/index.html","d5194e5e1f920a605255f52d228433cc"],["/categories/测评/index.html","59c0617fb54178cd4203849a6adb1c3b"],["/categories/科学上网/index.html","1d9e79f79f5faea3db9049a54ecbbe79"],["/categories/科学上网/page/2/index.html","32c9443c712891c150fab22ced65bc89"],["/categories/编程/index.html","c438c15afb6801471dfbe53f2a68b2e7"],["/categories/网站/index.html","9b576c9ed963f9f68c9f321f091b8c28"],["/categories/网站/page/2/index.html","f2b3490c95ed8de2c75163e64c7be36d"],["/categories/软件/index.html","ce954d89c3b55f59b142c79aad37af2f"],["/categories/软件/page/2/index.html","2d15860e1841510e6c487cbf945d9c93"],["/categories/软件/page/3/index.html","a58b1bbb8e3f7212ecb6142c4fe07f7d"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","c4250b02c40f82c964647014a8f51239"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","2d8155168d768303353b3b5c95c2e413"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","f066b62e8cd18fb7bb1d6b410b681167"],["/ios/index.html","0fefaf32bfbae2e19ba021f5769bf9ab"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","a74f421b180518945d966d1c2efd37a4"],["/page/2/index.html","782bd99456d7d7b43361d996e4d451b2"],["/page/3/index.html","76cf62b85a3f61b1a9f5a38223b39447"],["/page/4/index.html","f7093a21a69b7e2de1c21ece6bbfe6ea"],["/page/5/index.html","86426ae5b8a3c5fe666f8757181bf597"],["/page/6/index.html","7398a988e7b56c9bacdef1e355ae27b8"],["/page/7/index.html","82150a0aa206d2c5eb31469823a21104"],["/page/8/index.html","eeafabbc0860733e9a40050a6e4e8f4c"],["/page/9/index.html","38b9ec58c0a9c26272475f3bc58ab853"],["/payment/index.html","40dd87d0663f30d1374c3207011402ff"],["/privacy-policy/index.html","01c8e62a9c0a915810ac4a38b9f51291"],["/rss2.xml","4ecb7e4d9e36ac77c902746723a61a10"],["/search.xml","2f97926a03799a1e65319bcae14358c4"],["/sitemap.xml","806cf83db80e38125a18cf2b629009b0"],["/sw-register.js","f47923ae753d5215ad0f1651abdd764c"],["/tags/5t/index.html","5a531b9c1903e0a8e9e8950a0658b340"],["/tags/Clash/index.html","3d3367da697ecabaaa87fee24f3b23a0"],["/tags/Clover/index.html","229956298856c090ac2e4d683511d310"],["/tags/E5/index.html","8b311132d4ba8438d629dad65d51065b"],["/tags/FTP/index.html","6e69f6994a12a12cde89bf414e26e512"],["/tags/GitHub/index.html","3f52afebe16577ee3aa3377274af4e7c"],["/tags/Heroku/index.html","eafca049f9cadd75fa2efcdde6781ac6"],["/tags/Hexo/index.html","cbb3c8194fe57dde0d83bf1c4c8fdf14"],["/tags/Lenovo/index.html","3e6c00eff36497ce36ff8b0cc52cbf9c"],["/tags/Oneindex/index.html","ae25dae8071d6ba6f3c4faad3d82c7bf"],["/tags/QQ/index.html","b800fc7b725abb954598ab84a31a33d9"],["/tags/QTTabbar/index.html","8bbe3868461c98361ff798feca882aee"],["/tags/RX文件管理器/index.html","f7dc140bcb2c6d022d4d6afe0c66e320"],["/tags/Todesk/index.html","a930479a0e9eb09fccc966450210cabe"],["/tags/Vercel/index.html","a8aea599fc0e7b13e74c341842deebba"],["/tags/ads/index.html","1f3291811488ad78f777c75a77099c05"],["/tags/api/index.html","23d72bbf62ed58b031dae8002a3d7ae8"],["/tags/app/index.html","a63423e9a77b5cd5714d6149449eb01c"],["/tags/blacklist/index.html","b2f90f33267f6fa0bf26a6298827f95b"],["/tags/butterfly/index.html","0a4a107075c7ac4445055e4b86025f33"],["/tags/chrome/index.html","f41c5a038159ce560d9f0a0df586f897"],["/tags/cloudflare/index.html","9ca5ec199a1145950deebd604be78cd9"],["/tags/cmd/index.html","d999a66c0800a26ca164c07b38629936"],["/tags/c盘/index.html","457a86c7cc8938769b46d7f1a1b8376c"],["/tags/email/index.html","dd590bec3013cdfdc2777bf829423c9a"],["/tags/ewomail/index.html","66bc9b225bdef46aae0b101fd5b53441"],["/tags/fiddler/index.html","79d88d02299e264a27eb3b37d351a056"],["/tags/flags/index.html","8a30390cf6bb47c4d0de94ffc59fc40f"],["/tags/footer，页脚/index.html","295b83437191fc6f5f7d9301f53f6e15"],["/tags/galgame/index.html","7846746ae25e199956c3b70518571e9f"],["/tags/git/index.html","993ae42e707caa53ce1bc58c0107e758"],["/tags/gitcalendar/index.html","07164b8e60fd9e067c3c0c09f37c9cb6"],["/tags/google-voice/index.html","109df1b997f480195829bb0a6b0846f7"],["/tags/gv/index.html","02c45c3fc434eef3c579d6193e4c9fd5"],["/tags/index-1.html","36a8fb81ddad5559af8b71587e57ba3a"],["/tags/index.html","0caa061216426a0a85f8736aa24757a0"],["/tags/jsdelivr/index.html","d48c8b6f0b17183773699ee6c23062e3"],["/tags/linux/index.html","998300a30d85da7a696a4b033723890f"],["/tags/madVR/index.html","81592cb8e2a6bc0df5f06a3927a3c425"],["/tags/markdown/index.html","8f6b80ed5b0c1837f9b2f110d0396ed5"],["/tags/maya/index.html","593890d3b46c91aeda0c64fd3ef79bb1"],["/tags/mklink/index.html","7498f5860a0cfe34d52d42dc89caf65e"],["/tags/office-e5/index.html","332af0837f826094e4f337212c295d5b"],["/tags/onedrive/index.html","756e2a64818a02f93c40101a59d8baba"],["/tags/picGO/index.html","ad6fa68b0e6a60d4262a98ac701f7f2f"],["/tags/pixiv/index.html","725bc999585ef358bbec62ab32f9a616"],["/tags/potplayer/index.html","53b95e10051aabcba1d81fd5de4ed94e"],["/tags/proxypool/index.html","f4f6dd4bfd80df1cf1d2c15e9a6c6325"],["/tags/qbitorrent/index.html","ecc8459a53255b0e1648c11b131a1fe8"],["/tags/raidrive/index.html","45e98d2effaeaf9edcfe3d766fb29433"],["/tags/screen/index.html","27305b93e4781f2107dc627038e4b403"],["/tags/speedtest/index.html","95fb85bd0d2b450f82dca8e659cf1d89"],["/tags/tap/index.html","941b552de5340fd205516de1b4152818"],["/tags/telegram/index.html","93f1d65e5b0509e7e284ae239da92033"],["/tags/telegram代理/index.html","c9f2d5bd368041c4e2f685cd54ce59b4"],["/tags/tg/index.html","ec8d8c2dde56c072ef2d2bf20b07920e"],["/tags/tg代理/index.html","f59e1d8e0ade8cfdff9deb730c7f788c"],["/tags/top50/index.html","f7aae418032506e00a02c607b710264b"],["/tags/tracker/index.html","08547ae894af38e5df983ac01d4007b0"],["/tags/translate/index.html","472f9d5a574173ec5f5be8c81e921e4b"],["/tags/translater/index.html","04c5b4734565fd30c8613067bcecc1b5"],["/tags/tun/index.html","07862e7dfd0b00fe36106269851e4631"],["/tags/typecho/index.html","b41c30116477ffa89d0c8df70817ff27"],["/tags/v2ray/index.html","b5170ba8710e14fa218c6528a4f78f10"],["/tags/vpn/index.html","35b55312a848cd5ae51eb61e7054bb92"],["/tags/vps/index.html","057150374ca436629a235b244a0b55d9"],["/tags/windows/index.html","32655a13891928512df64783bee52604"],["/tags/windows端/index.html","87dcca65a300c37a60dc088bbd2f3c08"],["/tags/xray/index.html","c348325e8272c61ccd4d057d970501ea"],["/tags/下载/index.html","652deb8736569b9fa9ee6d9b9f0d793d"],["/tags/不限速/index.html","41c088ccc1d67c5f530228ef1b0e827e"],["/tags/个人网盘/index.html","524e687c25d76784947a663d31a6e735"],["/tags/主题/index.html","18b1bb708948b1d0ad2bb0a4828d710c"],["/tags/云便签/index.html","efee540b4923c6fbd959da9e3e2178d4"],["/tags/云盘/index.html","5a3638c05abd82642a0ad6b48888e18c"],["/tags/人人/index.html","6dde26ec0f1122579772f014b5d15c3e"],["/tags/代理/index.html","7b40aa46ed584780d092b8a44b1deef0"],["/tags/代码/index.html","3093147c4c1dd886ad721a48dea0d7e9"],["/tags/优选IP/index.html","991fe9f3355b1c4d10b9087f02130225"],["/tags/便签/index.html","011a32c5560e8d9374f3460f29a9fa1f"],["/tags/保号/index.html","b7bfea28e169db313053e500102fc78b"],["/tags/免费/index.html","e5fde0c0c57cf5422538f07e9e3fa5fc"],["/tags/免费节点/index.html","061318cb999e31b4ed3bf50817cc57e8"],["/tags/加密/index.html","2bd205da977eff6bc9ec26b2ef8b592b"],["/tags/动画/index.html","49d99c83bfae9129c02371c701291239"],["/tags/博客/index.html","438b5dc312788b053a5f8d5229dec882"],["/tags/历史记录/index.html","a6bdeeba5f4d018a9978c1610c1857db"],["/tags/压力/index.html","9fe7b95db9e38a5e582ea8c91368c4ef"],["/tags/压缩包/index.html","2936ca837fde2dd1ea53020aa4063d5e"],["/tags/反代/index.html","63af2ef62789ff0337c5925b83714250"],["/tags/可视化/index.html","49828100ad45e511eb4263d1ed7f1174"],["/tags/命令/index.html","301b8062d18c0bf82ec0a5436dfcba98"],["/tags/国家/index.html","1be575e80b547008b4cf5b540134e566"],["/tags/图床/index.html","2ee808733a80e35c2a1e76bed479bc51"],["/tags/图片/index.html","346729fe869809d29dbd1d19591b4eef"],["/tags/域名/index.html","dba5932fb5ea5d3e05f213bda0eec6d0"],["/tags/多标签/index.html","93ba441c365cfbc8dbf1814276f039f4"],["/tags/存储/index.html","879ce723f458a9a88267f9ee14e6f162"],["/tags/学习/index.html","a184a75603461b10f280b4857e092b05"],["/tags/安全/index.html","154f229cfd2ac417420750e5a44d9bfc"],["/tags/安卓/index.html","7009b0f61cf44616a2f6db2d9e7fdeac"],["/tags/宝塔/index.html","0631d7353d5f71271df375794decffed"],["/tags/广告/index.html","3b8514c08347816f7c1f31dc01098022"],["/tags/建站/index.html","1bddfb30a27319679d30bc6a658eb151"],["/tags/影视/index.html","16b8302100b6f42854753d3f13173f18"],["/tags/快速启动/index.html","40b9f67e57d0837d08cdd8ded2c2d43d"],["/tags/手机/index.html","0dc914b732f84cfe30b27e36055125a9"],["/tags/托管/index.html","e539f5381192e571b94fd802cd186921"],["/tags/抓包/index.html","c5a26661f756cca6f49368ae28dcfebf"],["/tags/抓取/index.html","b37974299808ca6899f627b1f9e58056"],["/tags/投屏/index.html","b1997ba8efdd0e6bd2e291ffa4770f48"],["/tags/拓展功能/index.html","9fd23cd8f8b66fbb6ff034ca7aa9c681"],["/tags/挂载/index.html","874a95174669f46e72ec7bd7d36f9342"],["/tags/指纹/index.html","e6fb8eb3b2c77f727b132cba86946437"],["/tags/接口/index.html","3c7983fa81b2cf69f8449900f0b2495b"],["/tags/提取图片/index.html","1e6dbdda807b39fd287c61c153549508"],["/tags/插件/index.html","511059f477618746d6eac75eaadd82fb"],["/tags/搜图/index.html","92162b997be618765cd5e184498ce548"],["/tags/搭建/index.html","690a7c4f9ef4e038656e34199ec451f1"],["/tags/撤回/index.html","05ad6fa3e2415d500d0d297cdc491bd5"],["/tags/播放器/index.html","45b47d7e3cff14ce84408bac9da30936"],["/tags/政府网站/index.html","eb2ed8102d2eaf043e4d38ce4bcb84c3"],["/tags/效率/index.html","ed4687720f79e57dfb7d419cd9abb58c"],["/tags/日历/index.html","65b9c3bf71f324ed525db9680072e0bf"],["/tags/服务器/index.html","00c89ebdf9c299121baf1cb5cb9348f3"],["/tags/桌面/index.html","44ed6027be6065d5d36dc15e40ac4679"],["/tags/梯子/index.html","62adb37fccf666e0da323ba508fb3f96"],["/tags/检测工具/index.html","2ad73da5b43fbd34dc9cd4ed1fab7125"],["/tags/汉化/index.html","d300c36de9066cb6fc56e9e59123662b"],["/tags/测压/index.html","dceec10a3494d37cdb32152600ba9dc2"],["/tags/测速/index.html","3c59d25b47533c5c51412e61e70279a9"],["/tags/浏览器/index.html","2a262e1b1cab73d7ffc63eed1413c209"],["/tags/清理/index.html","93cccab250ec2ff143957656505c2ee7"],["/tags/滚动条/index.html","84d39d01dabeb9527ae965fea7a77fd5"],["/tags/电影/index.html","ec80dd1e6914a0dc9fe528be809eaa5f"],["/tags/电视剧/index.html","a9a57a63db95a696d5c2898d650e344c"],["/tags/白嫖/index.html","7766886eb84d72e510c1c025171ac587"],["/tags/百度/index.html","d299171cabd300be6ae9c0b8cc8a1798"],["/tags/百度云盘/index.html","9401ed888183ebf7efd33e668a15767b"],["/tags/百科/index.html","0dc0dae4b591349088b4a63cd40b9294"],["/tags/短信/index.html","6dea6513478d31647177909e664a7beb"],["/tags/硬件/index.html","ae0ee9f419fef851f1cca4c53ac9498b"],["/tags/科学上网/index.html","872e2e83fbea1715f044dc6bb9848ffc"],["/tags/空间/index.html","6e199ba26b0ae68b54dc1d692a8b0682"],["/tags/笔记/index.html","3dc77b4bae3217b4a86f0c6ecb890331"],["/tags/简洁/index.html","38d9687a92d6929ee814d0a7eaa1aa93"],["/tags/简约/index.html","b5745bf73e966d5c271a4016f9757d5d"],["/tags/维基/index.html","288c307b55f157fdde0d09016d6bf2dd"],["/tags/网易云/index.html","5ddc67bc9f5c97806ef5228d7eeee70f"],["/tags/网盘/index.html","c42177aeacf27e3c731a3830ebc8f5ca"],["/tags/网站/index.html","dcceb2918d68dfbbcf238714a3fe6177"],["/tags/网络/index.html","adda8c2cea6826a078979dbc1b390ec6"],["/tags/美化/index.html","b16dd2bd722495a3aa3b5e30c9c245ef"],["/tags/翻墙/index.html","c6247d7c6a89ad8a01667f7900cf1693"],["/tags/翻译/index.html","d95885332d86cbe7366094af17570054"],["/tags/翻译器/index.html","d70d417d535010e3e2f165f22056d7bb"],["/tags/聊天/index.html","449bce9427d912669a1d2fa16acaae52"],["/tags/聊天室/index.html","3eab64aa344ec00e43afc8ba85fb3e9e"],["/tags/联想/index.html","8db57482c377ee9ff839014ff69ee2b4"],["/tags/节点/index.html","2f94713dba94df594980921acd27c6aa"],["/tags/虚拟手机号/index.html","ab0524e09a0d6709871600d34bb2e609"],["/tags/补丁/index.html","5e3ae14e50dd0063813656cb4ea3d9d3"],["/tags/视频/index.html","4026505e4b4681e501e736a3181142dc"],["/tags/解析/index.html","242b541e5e26238195b699fccd2b428d"],["/tags/订阅链接/index.html","d6d394ab448b04a6a3b1c6fcca30699e"],["/tags/记录/index.html","85fddcb95a2a229f0b6696a02cc1e26b"],["/tags/识图/index.html","1a644693033fee8026fd0c32312913f6"],["/tags/语言/index.html","d90b4c2c5a62eb7579205be44103b02a"],["/tags/资源/index.html","ce078cc4ee51af046099f91565825b09"],["/tags/资源管理器/index.html","93b8435a117a86aadc08e1de743bf874"],["/tags/转移/index.html","65aeef5973804d2a9141f0de8a1cbf48"],["/tags/软件/index.html","7474bcbb763c22993e5befa93a50ab5b"],["/tags/轰炸/index.html","fe987f0162cd53ac29fdd810c17dd25e"],["/tags/迁移/index.html","9331560e9fa7fc50c2051d83d4f79c9a"],["/tags/远程控制/index.html","254c98563cf65ffe208711a43c7f11d3"],["/tags/连接/index.html","1b512ecdd42089aef5a62b47f2fee0f6"],["/tags/追踪/index.html","e6488c3fd88a071cf5cee79cf417b8ba"],["/tags/速度/index.html","b6fa924ed1881a39882ca82bd2830e6a"],["/tags/邮箱/index.html","fb8b99aa3a23fdf878b533e53f360dea"],["/tags/酷炫/index.html","5c1e00b492fffd14d8425480c620f35f"],["/tags/钓鱼/index.html","86b73aca03db278e4fdd13f1b30c82cf"],["/tags/镜像/index.html","a09f3d2a97bb725d1d2a2a50d0f27a15"],["/tags/随机/index.html","82eca728275be3a770d6e8e064ca3faf"],["/tags/隐藏/index.html","8cda30932af313541b72635dc89706ef"],["/tags/面板/index.html","9f57f0d35b56b0bb7327775a46aa4b51"],["/tags/音乐/index.html","c0f3da07b1ac75d7b83a2fdeba31fc7c"],["/tags/高颜值/index.html","932479fc84e2e9fa114a163c9608e44b"],["/tags/魔改/index.html","bfbda336c97093d50ecea9e407015aaa"],["/tags/黑名单/index.html","c0e64b9b05a02b49e5490503a4be08e0"],["/urls/index.html","009164898b288a5f2fd3da046d41a5bd"],["/vps/index.html","544c0b65852d405f47d64431fe1b4174"],["/支持/index.html","abf3bcf70882208a3e642b3bcd9da697"]];
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
