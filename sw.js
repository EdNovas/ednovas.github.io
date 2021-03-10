/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","10d745cf2e1c3c6a53fb2b8aa6ef5aa2"],["/2020/11/29/clash-windows/index.html","2ce2cc45bea456ff731d41a73ca07ce4"],["/2020/11/30/websites2/index.html","30404247ad81af6ce173e57a911cf968"],["/2020/12/04/iphone4s/index.html","62ed352eb2fb140cf3d05f8cc8264bd8"],["/2020/12/04/onenote/index.html","e2f1913fce0703d9b120c1a3b6383883"],["/2020/12/04/wesites1/index.html","6f7f3ebb6d5f0d7a6f807526ce92a2f5"],["/2020/12/06/nokia808/index.html","228c9f711b89aa80ad407d2ed4ad3636"],["/2020/12/07/ipad1/index.html","79bf73c2a637166988ad094dca05463b"],["/2020/12/18/freesubscribes/index.html","bde95e82893f9a66ebd25a5ebd1943f1"],["/2020/12/19/musics/index.html","6700c764082afc4b3ee57859b1225573"],["/2020/12/19/shadowrocket/index.html","875ba0468ca32a932d3f8fb505b6218d"],["/2020/12/19/v2ray-windows/index.html","6b6a1f145ce6d5a24a7b6feec0292da6"],["/2020/12/19/v2rayng/index.html","b65ba848ed05fb49fd36795561df086a"],["/2020/12/20/beoplay/index.html","37d64b4e22abd17ddf1e164ccb87f69d"],["/2020/12/20/订阅链接转换/index.html","7f058d18f8a53b7f0a4a80a1e6124a10"],["/2020/12/21/chrome浏览器下载提速/index.html","0e9ecdf417dbae29509bbed81b326806"],["/2020/12/21/免费128线程并发下载xdown/index.html","1a7c861d465fbf187f1024a1f73e730a"],["/2020/12/21/免费32线程下载软件ndm/index.html","957ebcd469bf783cb996909e07a90aee"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e31484507f51259b563f15c5a62ffa00"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","e0af988285909fdff66b842331a2ef1d"],["/2020/12/21/广告怎么知道我在想什么/index.html","5174f2003cf1ea07bb412887f11db5d0"],["/2020/12/21/无名·引子（小说试写）/index.html","b3ca36e046870ff2615155195d750006"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","490c560b0d4738df5941b763395fcd4f"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","9753158a56977fc4cc3cbfca10fa3c2a"],["/2020/12/21/高速轻量下载器aria2/index.html","af2e8fcdb636297296ce14ead6499732"],["/2020/12/22/2020-cee-roo/index.html","80d3d44d38d64b42dab440b3293ca322"],["/2020/12/22/firefox插件、github、steam富强/index.html","295212cd3b58ba30fc9500088ce02b47"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","4e828656e832f1f70ba0742a310cd549"],["/2020/12/26/python-day-1/index.html","4839a5c6115be4281c4dfddff9a07a52"],["/2020/12/26/python-day-2/index.html","16c040d06d97a8e4ca3bf41c2b6386ca"],["/2020/12/26/度盘不限速下载方式一赏/index.html","723643dce4b55654e50341fa30e6717c"],["/2020/12/26/添加开机自启软件/index.html","7e88fe067d6bb6bd48fffd3fbfad5fcb"],["/2020/12/26/电脑端截图方式一赏/index.html","f00b142edcbfd92f14f9b79222040e95"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","dbc9cd6377aa9a6f9d09cab781d3106a"],["/2020/12/27/最安全的浏览器tor/index.html","65e3d6f47c4465a5d5034daeabcd5bb8"],["/2020/12/27/网易云刷等级和听歌数量/index.html","4c66bd01bb4790a1005a08b7e38c56f5"],["/2020/12/28/freenom申请免费域名/index.html","ee6bdf5a822de82a0e0426573058997b"],["/2020/12/31/机场/index.html","ed146130ddc1425b1546ed0dbfb77639"],["/2021/01/01/M1/index.html","83393299d773109c132aab418c689b06"],["/2021/01/01/compress/index.html","3b39deb14989f17389084a1cb7c11d5d"],["/2021/01/01/infinityfree/index.html","100637cc6bc60b7bab373411179d6d47"],["/2021/01/01/硬核翻墙/index.html","48622e2aff054d6162988ce75a540dd8"],["/2021/01/02/qq/index.html","2d66a3fbf03c4e15377f056004d5772a"],["/2021/01/03/netch/index.html","36821a72993d2278d4ce5318c85df412"],["/2021/01/03/waifu2x/index.html","f281570aef12142f24ca7ac5e27dc47a"],["/2021/01/04/ads/index.html","fb6702172ef59cb962fbd59bc16882cd"],["/2021/01/04/games/index.html","da3f6838e7765a3ee101f13f09dfc96a"],["/2021/01/04/heroku/index.html","febcc544a3fce0389841b170ed0e1f81"],["/2021/01/06/movies/index.html","3c219426742b2f1ad1c2bfd5023e53d1"],["/2021/01/07/google2020/index.html","5022b65fadbf936ae90f6f4617a3620f"],["/2021/01/07/lucky/index.html","604644bdcbe4695d6a80c4a12f1d3ea1"],["/2021/01/07/spotify/index.html","4cae259a80694114e968b983b116cd41"],["/2021/01/07/thunder/index.html","47848722ec9574f4e735bcbf6529e5f1"],["/2021/01/08/adguardhome/index.html","b3198428de35181476d9342a8528b9c5"],["/2021/01/10/IBM/index.html","04d8d86be0798738a1e04c638015690f"],["/2021/01/10/potplayer/index.html","c0ea5502327bd7801695139e583c22fe"],["/2021/01/10/sakuraanime/index.html","ab25cbf15c11492b45146a82d6bd7fbd"],["/2021/01/10/美剧星球/index.html","8249b57f411c2813d7402ff81abc6132"],["/2021/01/12/telegraph/index.html","0bd0035c393d4ebd7b031c5315b3b931"],["/2021/01/14/comics/index.html","db7bf743a1bd15113ce055b69446e3c0"],["/2021/01/14/ftp/index.html","31807ea069ba0da3bb1cd67cc03de5d6"],["/2021/01/14/oraclecloud/index.html","b3eaf03fe97ce8284a431256ea6357d0"],["/2021/01/14/porkbun/index.html","0fff31ece38f9f73855163f62faace61"],["/2021/01/14/powertoys/index.html","6550429223b3ade8745927cc5a952863"],["/2021/01/14/taptap/index.html","312960b2dfca8e4fea87471e0e28e91d"],["/2021/01/14/ubuntuvsftp/index.html","158c82eb613b57fe8322115c8d2c568b"],["/2021/01/14/小说/index.html","c75cfc85474ee66bb415a9353259835a"],["/2021/01/15/freeproxies/index.html","ef6c4a0b436e52d6e723c17a2856da49"],["/2021/01/15/incaseformat/index.html","10302bcc1dc9dcdd6f8ebec465a992c1"],["/2021/01/16/euserv/index.html","f1afa999eb591941d909c0b68de8a940"],["/2021/01/16/winxray/index.html","ad29c2653ed893c8c61691eeab6cb9f3"],["/2021/01/18/qqreadhistory/index.html","168d1c3903d879d3d59c89da608ad0c4"],["/2021/01/18/qqrevoke/index.html","6be11c5c9509cde641f63e8ce8b4e840"],["/2021/01/19/freevpn/index.html","4c247271c41d1fd5f304dea186b80cae"],["/2021/01/20/browsertrack/index.html","9c737ffb96daf64c5149cf10edabaf06"],["/2021/01/20/v2ui/index.html","d2f075d7ef45f40fef3eaa1a271c2d75"],["/2021/01/21/failedtoconnect/index.html","9c4f2e0866654ba3d245c985b7c728bb"],["/2021/01/21/gitcalendar/index.html","db9a915d342e5b0059059c2ff02166e7"],["/2021/01/21/markdownformat/index.html","472e8eefbecbb03c04de12b31b2a5166"],["/2021/01/21/markdowntable/index.html","1c617ed73e141be25ca9685be4ccb4a2"],["/2021/01/21/vercel/index.html","ef8ab446817854926006bdc64ac087b2"],["/2021/01/22/hardware/index.html","f4252903ea06a4862d18cfc1bea4ae3a"],["/2021/01/22/muviz/index.html","3a7c8a8347568428adaae61ebed85192"],["/2021/01/22/randomapi/index.html","e0d42e36fda6b87dad5cae8f2f284d7a"],["/2021/01/22/searchimages/index.html","34f2d89fb30821539ff19ca210c57a30"],["/2021/01/23/RX文件管理器/index.html","2ec36b6abeb02587ddc83427150d2167"],["/2021/01/23/chromeflag/index.html","d809adb0dd438cbed2572ef53036f6f5"],["/2021/01/23/qttabbar/index.html","c7dee1bb8b2908360539222e013bcdee"],["/2021/01/24/githubspeedup/index.html","922c1c446f5a40c7ec4ac808fb287b4d"],["/2021/01/24/jsdelivr/index.html","f08555aca64e2e6e4400357e7c5e3070"],["/2021/01/25/note/index.html","511975a3c00b18734b3e6fb3939941b0"],["/2021/01/25/soul/index.html","5fd6c710e975752730c62c4efe914b6c"],["/2021/01/26/herokuxray/index.html","979ab2281d2f3bb7c47afc3c2a59b6d9"],["/2021/01/27/proxypool/index.html","5a857869d2a9d214a2eaddc37ffc28ba"],["/2021/01/27/tracker/index.html","688dcbfd84936debdd268923f5d64bbd"],["/2021/01/30/pandownphp/index.html","98ec9bcfea02f8f92741071c4d5c02dd"],["/2021/01/31/newgroup/index.html","134d431c4c15115773b072dbbfad626c"],["/2021/02/01/clashlanguage/index.html","db9b37e71d671a3ae020f3b87b50604e"],["/2021/02/01/encrypt/index.html","220eab085ca6ddaa71360109fd7d5ced"],["/2021/02/01/footermotion/index.html","72811b8b8816dec6323586b02b1808b9"],["/2021/02/01/gitter/index.html","b4cc138d465305eb23ee15fa44ac28db"],["/2021/02/01/pixivtop50/index.html","762df9624f3f6199bdfb43aad16a4de7"],["/2021/02/01/scrollbar/index.html","2b7f190f8ac4dfc6fcb3cf527b6fde7c"],["/2021/02/02/clover/index.html","bcb03e9e88c6bed0511b64576adf4d06"],["/2021/02/02/maya/index.html","4b74a36ef36d47aca3aa0b687797a0e1"],["/2021/02/02/speedcontroller/index.html","4463edee8af00928bdfe4e824e9d6751"],["/2021/02/02/yesmusicplayer/index.html","9af7b838cba9d4c1abfd3bdac65fd623"],["/2021/02/03/lenovoonelite/index.html","c8656b80cd6091156b0a30721a0bbcb0"],["/2021/02/03/skipads/index.html","53ee56e3cc5710ca201f323948c3943f"],["/2021/02/04/picseed/index.html","8e14af5164211a91b5c04c8335ff7605"],["/2021/02/04/renren/index.html","c0e69bdc0efbd46b7387d50b32d5cfd1"],["/2021/02/04/serverstress/index.html","73be56992d4f0973acf9f376603b78a4"],["/2021/02/04/wikipediazh/index.html","a9d34931a5cb422f0e811ad56f67dec9"],["/2021/02/05/googlevoice/index.html","9a0451702e42800ac5baaec1159d3aff"],["/2021/02/06/clashconnection/index.html","c3c2c8e8b330772c67799d64d5916fa6"],["/2021/02/06/gvtransfer/index.html","90d8b248c399a1bb5d1de08ec85947c0"],["/2021/02/06/todesk/index.html","aeee122c06817b66f5fbd6a6bdc36a6d"],["/2021/02/06/vpnblacklist/index.html","d43e13c08e09c8dd9d991922b7d10db8"],["/2021/02/07/mklink/index.html","e884260a9ae037383a14594656606720"],["/2021/02/07/speedtest/index.html","735aa38922e700dea697d55bb4197664"],["/2021/02/07/translate/index.html","71e18c17557e65a98ae5789d4fe961d0"],["/2021/02/08/ewomail/index.html","0c65f3fe306768579e8c082150f85c52"],["/2021/02/10/officee5/index.html","94c63765bc4b145f50386108b0466197"],["/2021/02/10/raidrive/index.html","ab0c182248b81841c60379b855adb41a"],["/2021/02/13/e5sub/index.html","1712fe79d08a983292fb411280f877d6"],["/2021/02/14/screen/index.html","61df099770129fdd5530ca06c7643d10"],["/2021/02/15/clashtun/index.html","2bc3448396b7b5671cdf2df1bbc47b8d"],["/2021/02/15/messageboom/index.html","16ee421b2459e61dae5f2f6595e5b69a"],["/2021/02/15/oneindex/index.html","82d0e7223877acfd16bb6fba3438afc0"],["/2021/02/16/govsites/index.html","8aa5df46cf2c34c58ec9633ac4e6b9eb"],["/2021/02/17/hexototypecho/index.html","e301aca69ce53dff5135813168094c5a"],["/2021/02/19/fiddler/index.html","2403539caa37fa3a0a65db0da6c2e531"],["/2021/02/22/potplayerset/index.html","85ca3876db1c05bc7d6223fe35403353"],["/2021/02/22/studyresource/index.html","8e4632f8d4181960d190631ded325d83"],["/2021/02/22/telegram/index.html","713590f68324e7f137de42ed0e3068a4"],["/2021/02/22/videos/index.html","3cb22d5a6b113261cef0e839cc12d6e0"],["/2021/02/24/mtproxy/index.html","cf042c7a81cdf2cfacda0d053b2a7efe"],["/2021/03/10/neteasemusic/index.html","1d4eae49c09a3ed28b39b959781a70c6"],["/2021/03/10/surfboard/index.html","b0f4dfb3c09d451ea51751baca57943f"],["/404.html","f3f659410f2acebe9e64d6f28b9ba137"],["/archives/2020/11/index.html","9f31e434c6abcad2772a7a592ff35443"],["/archives/2020/12/index.html","43af40e5377a51624f4adb08db0ca749"],["/archives/2020/12/page/2/index.html","30d807af9f118e8f127a4511829f0c7e"],["/archives/2020/12/page/3/index.html","e767f51a6aeed3c20721152b801c8281"],["/archives/2020/index.html","7b9abed0bd2dfc06ac0644f315042b9b"],["/archives/2020/page/2/index.html","d7c14c322cb0264b73df8d2b59fd627f"],["/archives/2020/page/3/index.html","47941af97bb4a74985cc0bdfe1006a4e"],["/archives/2021/01/index.html","c4e87121061e3864fc4deb787286f1c1"],["/archives/2021/01/page/2/index.html","46ce8783b19f8d156ceeefa5ffba5f6e"],["/archives/2021/01/page/3/index.html","343c1551607a4bb6c9120fc320c4801a"],["/archives/2021/01/page/4/index.html","86d1eeb176c335d213a93ee2da2be5e5"],["/archives/2021/02/index.html","d3221547c1fd1b6c3a7ab16678c123dd"],["/archives/2021/02/page/2/index.html","998de455de7b3931f3dd2896091ab0fc"],["/archives/2021/02/page/3/index.html","7d64af824041ed5457ca4e838eb49f75"],["/archives/2021/03/index.html","a2133d4ebf7691c6d1df2bf39d7d0ac2"],["/archives/2021/index.html","0c036618ea1831ae00173f6b2a8b1bf7"],["/archives/2021/page/2/index.html","7996333abe439aa6467cf6cdaa5d43ac"],["/archives/2021/page/3/index.html","4187f625663f4e666e9640d32384887b"],["/archives/2021/page/4/index.html","d4df71926f4c7115400c73ef39a2522d"],["/archives/2021/page/5/index.html","d6b80706b0415498790b684eec7d97ef"],["/archives/2021/page/6/index.html","dfc5573d781c096f57caacbec94eb4a5"],["/archives/2021/page/7/index.html","684a3a2d04092dac680b3d2f8de852d8"],["/archives/index.html","bf480aece48d4fa0b09e7305fed30e7f"],["/archives/page/10/index.html","fff82dd805e8e0314bb24540fc701ea1"],["/archives/page/2/index.html","e2ab6510e875005cfc6146cae2811290"],["/archives/page/3/index.html","9af40dc83b36588692fb9436bc89e400"],["/archives/page/4/index.html","8532231d90014a70dab9d67a96d0f615"],["/archives/page/5/index.html","27fe2b03fe44a605e82f7b1e7c448d9e"],["/archives/page/6/index.html","dc4984fe5529be577af414bbc691a602"],["/archives/page/7/index.html","85d16d9091cf5e2b1436c553436a96be"],["/archives/page/8/index.html","352be4b9980c09ea0ee530d4364ec0ff"],["/archives/page/9/index.html","a7cd874b8262dd32a9431c9cf0d38132"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPN/index.html","391a39b42094315b920751e8a9941a7a"],["/categories/VPS/index.html","45438412a04cfd16d4ffd9028bf538df"],["/categories/index.html","641b690ecabd3663e911ef71cc40c037"],["/categories/下载/index.html","c6c47d0ff71063ebd52b0edca2fb6d46"],["/categories/安全/index.html","5afad20bc7b02a9ab7a41254423b0e48"],["/categories/建站/index.html","d066902c8d0364de73b3a49689ee775f"],["/categories/杂/index.html","4d30e03d0e19454c1afbe50d11965509"],["/categories/杂/page/2/index.html","65a25715cd0b1f4bc123282fdac2289c"],["/categories/测评/index.html","ffe0e2e5178d818530a5e22840434438"],["/categories/科学上网/index.html","a6665c1fc47385a0dced42a08d41756f"],["/categories/科学上网/page/2/index.html","3d8437d1b19929790d9303b3818c7cd8"],["/categories/编程/index.html","032b4eb6dfe97057d8d394f82fff2a06"],["/categories/网站/index.html","b95f4397fbe049dbb150b4180d7f4918"],["/categories/网站/page/2/index.html","6e6dd178e9c9e00fba93cabe9bcee7d8"],["/categories/软件/index.html","ca02170de939b2640be0e70e739a144c"],["/categories/软件/page/2/index.html","bdcda9ea6e02f03102ae8885b628ca96"],["/categories/软件/page/3/index.html","bfb08fb273722c50bbde2e442b0ba2ca"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","2fd3e1ef1baa6e0f97f81d2e09af93a8"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","9c53129fb6c7130ba71606f148a1307e"],["/ios/index.html","ff85864f9173460f4d4197f7fe41a690"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","064c3b03510a6aba237d9259b6a8578f"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","4f1ae4baf45c10ed3717575ca7b09dee"],["/page/2/index.html","8bf5b5e2f9ee72b9b261911c16a9cf16"],["/page/3/index.html","a32110d0d4b1e1e41701391fa93bbb98"],["/page/4/index.html","e14f696b04f77743322031401490297e"],["/page/5/index.html","2466ebe9f063198a9d713971794976b8"],["/page/6/index.html","db1115985a39b26f1094da2440d50941"],["/page/7/index.html","0f80d56d5866d25090bfbd0af15a0f5f"],["/page/8/index.html","a93ae6d1e0b91b1ecb769210c31ca580"],["/page/9/index.html","e5ab13430da37f3130c275a7a88d9e92"],["/payment/index.html","ec422a1e3566a7e4e0e79d984924bc61"],["/privacy-policy/index.html","0808d090c800d596285d322cecd50624"],["/rss2.xml","4329bef6c74f44afce45531816ad6fed"],["/search.xml","21d3b04b463d9eaba57d1293a33f4f5c"],["/sitemap.xml","e84bfa2dc59265d6e4ad3247c1daf698"],["/sw-register.js","730d2d8a67d158010d61593e0e189cf1"],["/tags/5t/index.html","2c7190b646c2c4ddcfea691512a83fe8"],["/tags/Clash/index.html","ccdeef32d77dbf551af4f0ce8ca976da"],["/tags/Clover/index.html","dcf30bb35aa21b9fe21d2099e567245d"],["/tags/E5/index.html","859c5e5c2af912c720d0612f79d18a57"],["/tags/FTP/index.html","11b2dac5aad66ef03691a9e2424dbc93"],["/tags/GitHub/index.html","7d97f1579e8b7f597c78ba58d55d6618"],["/tags/Heroku/index.html","b95ed781c3ba99d38e45674f36ee78ee"],["/tags/Hexo/index.html","47c0906f2884dfc597cfd05e95e9f820"],["/tags/Lenovo/index.html","f03e96f213256cea5c5c92a7d44716e7"],["/tags/Oneindex/index.html","3506d3ed772a8fe714c171ba9cfa772c"],["/tags/QQ/index.html","88d37bd19e49e2d0e68f0c4703eee1f0"],["/tags/QTTabbar/index.html","ca3be18d256ff6aad617fb2138dcbfb1"],["/tags/RX文件管理器/index.html","0ca976ad788fdc70cfeb8d76338f6a4e"],["/tags/Todesk/index.html","50c02d7730fd3d2d7a4104550178a7aa"],["/tags/Vercel/index.html","6516e80a4b6d6bc25f6164208bd39096"],["/tags/ads/index.html","c8763decdfe2844186fe0b79034b83c1"],["/tags/api/index.html","cedfa59880f7d47d28c7629789afca81"],["/tags/app/index.html","857efa61383e564d1b1942dc5e39850a"],["/tags/blacklist/index.html","c58d7a9529e2d6e2c72360fa4cf7d621"],["/tags/butterfly/index.html","139688a0f562a9c28d42a9b2e0ac9c71"],["/tags/chrome/index.html","dbfd48c2efc1239dc3fa8c485e28f9d4"],["/tags/cloudflare/index.html","d821355a9681c4db09b57f1b7be2baed"],["/tags/cmd/index.html","7f23b8ed0b2df4ed986c2c1ff19942b1"],["/tags/c盘/index.html","6ae87726cb475a4fb1f9a8098877df93"],["/tags/email/index.html","1d03ec322233a0599c69593b0cf8dbd2"],["/tags/ewomail/index.html","fb997b1d56e5e6e8c33a8bc08da19511"],["/tags/fiddler/index.html","74d801d68a9dd020335d798430a0e451"],["/tags/flags/index.html","4ed434e1c2ca09dc2e9648ccc214d7f7"],["/tags/footer，页脚/index.html","8a908146e21c55278d64b5ee30e8dd94"],["/tags/galgame/index.html","2e65be751b9a222cd3688227e8e3f4d5"],["/tags/git/index.html","8477c23a24b0bfd4e1009c5fbab45714"],["/tags/gitcalendar/index.html","854a8db7cee6fbd21b8c07ed0aa375e7"],["/tags/google-voice/index.html","7c09db9e59cb6e697a25240e6f4d335e"],["/tags/gv/index.html","b15fe3e88d95fb0e2a413ceac380c9dc"],["/tags/index-1.html","662cc7506d516d9d0895693427a5fd2c"],["/tags/index.html","5e09a444b4620937e2e279a93bec5687"],["/tags/jsdelivr/index.html","6d24f5b2d502e7e52e6234179194790c"],["/tags/linux/index.html","c3dbe54bc4d7320d1f5407ac346dcf4c"],["/tags/madVR/index.html","728cdb4baf535c596d29e9d644ad3b4c"],["/tags/markdown/index.html","d57b29b4aba9e7a22ddfcfb38e949cb9"],["/tags/maya/index.html","3cfce661e9c271c51b84c3e756917cd2"],["/tags/mklink/index.html","9d5504d3cf24d2439cf44e7faedf3614"],["/tags/office-e5/index.html","8948fad4e44678739d8bd76ce27bd911"],["/tags/onedrive/index.html","53471603f5fe810eacfab9cb2eda84be"],["/tags/picGO/index.html","3f9bbe436b032302322c43a547b1b2df"],["/tags/pixiv/index.html","d79328b0660520addf7e6dfbb11dc3cc"],["/tags/potplayer/index.html","5bf6e41a6c0e8f567d2133f375c90525"],["/tags/proxypool/index.html","b2d895df2c8c7278df8a54dd28c581b2"],["/tags/qbitorrent/index.html","945e9203c949a6a6ca0f97878b2fbded"],["/tags/raidrive/index.html","4f6c82ab8d428e465c0cea4e9fde7dff"],["/tags/screen/index.html","283ad625fe0d2bf61a28f17fde66f790"],["/tags/speedtest/index.html","2b859e28b68903b66f496e60ba7b19f4"],["/tags/surfboard/index.html","4a9920042ea74b45088c4957cd419d03"],["/tags/tap/index.html","ffe812d7145ded17174c6884062ae388"],["/tags/telegram/index.html","29de9f6ae60f49d298c3b6b2473ec7b2"],["/tags/telegram代理/index.html","9a4f5c3e18905db7482b2e1f4e313431"],["/tags/tg/index.html","6fdd6cd606cad4c20f5b0da033fe6272"],["/tags/tg代理/index.html","6d8062260d21a2d9ef00e61740c72b24"],["/tags/top50/index.html","6cfbd5172bda94b8a557f6631540f1b3"],["/tags/tracker/index.html","ffece6f7be628e265240c44ed3ef2c06"],["/tags/translate/index.html","de6b4ab056ad0865230656c1f29dbf76"],["/tags/translater/index.html","bf532d71c9ef14272eca79e0a2e6552c"],["/tags/tun/index.html","279f705877d21c9a2464f723eaaaa39a"],["/tags/typecho/index.html","0305a117756eda14bdb7d9423e6f53a0"],["/tags/v2ray/index.html","1956aff1168a6a234458389b5ae9e64a"],["/tags/vpn/index.html","e91952d4ace6547b96bf2008b8532be2"],["/tags/vps/index.html","c5e7818f922ed458154229d9b60131dd"],["/tags/windows/index.html","d8656b6c85e88cfd368b4d1436ba486e"],["/tags/windows端/index.html","379fe4230985e0143de4f2cdf39ffede"],["/tags/xray/index.html","6fd6979f546b58bd7dadfbb7082e9d9e"],["/tags/下载/index.html","3e0cf2556f23465f6bf169566fa1f09f"],["/tags/不限速/index.html","63daf66d862de3d0bbeb803f8b335a4e"],["/tags/个人网盘/index.html","a2b5da31ae4d506f0ff2c23b8acdef9e"],["/tags/主题/index.html","c3b05503a33c54b6603cbfe841dd62f1"],["/tags/云便签/index.html","8dc485914ac725497bb9c3e73a3236df"],["/tags/云盘/index.html","58919f7b57af0bd5de2173839ed43884"],["/tags/人人/index.html","5ad50541edab4cb4b658f62f4626071f"],["/tags/代理/index.html","4b835524865c64c679741f3fdd19f6f7"],["/tags/代码/index.html","ca24627ab96c0d67ab2fef6118ef8e1e"],["/tags/优选IP/index.html","3296fbcd9def84f6df15b46d35aa0662"],["/tags/便签/index.html","99502d0224976d0e56a706e3aadd5a6b"],["/tags/保号/index.html","fcd74cec7529e2fd2514cf745f062315"],["/tags/免费/index.html","fcc37b50217594e1a9230517633af1c2"],["/tags/免费节点/index.html","a1c1360dddb6c537b60860abf1107ec1"],["/tags/加密/index.html","f1be267cb07ac358a30cb64d27b56bdb"],["/tags/动画/index.html","8a1b2f3093d2a1b684899fe5ca60a341"],["/tags/博客/index.html","1cec7c61da19316963d41dc1e9213314"],["/tags/历史记录/index.html","6ad03a161a6f21f150f92a24a2c0c0ab"],["/tags/压力/index.html","435298ba500cbec8af0b9e16e7160d12"],["/tags/压缩包/index.html","5018b5e7071505f16137df0966a0cacf"],["/tags/反代/index.html","c6788ab1b0ff78dbb167fbed05312677"],["/tags/可视化/index.html","396bb31771d309872b90d7a2ec5a8228"],["/tags/命令/index.html","cb9c30a863947aab8d9dd9d4b7fe6629"],["/tags/国家/index.html","390b76aeacdcbe4a47103299fe0c24f3"],["/tags/图床/index.html","14614d2b1986f046c7397b897115a31d"],["/tags/图片/index.html","98ea7632975bd06ae688f5b29d1ad7a5"],["/tags/域名/index.html","b47a410879f9bf206ca804e3d9ab1a32"],["/tags/多标签/index.html","5ea295b04db0dbb9a01bb49900091955"],["/tags/存储/index.html","2694695af84ce32af107d6b6c646a1c0"],["/tags/学习/index.html","6130716948296dddcf6928e9a7055740"],["/tags/安全/index.html","d9fc171a3b4ef2098921849e605ea25c"],["/tags/安卓/index.html","798b601aa19199730f0f33bccc4f27d3"],["/tags/宝塔/index.html","d962d01d8ef1e08098d7f38ed6d1a19b"],["/tags/广告/index.html","d0f62a7ca08b860566dd305a14ff2a0d"],["/tags/建站/index.html","5596e419211d41c50d4e152847c1cc31"],["/tags/影视/index.html","afde0b6fb850c55e35fedf13a333add7"],["/tags/快速启动/index.html","4e1c791790b19557102fcc2a205d68bc"],["/tags/手机/index.html","6c0803c8bab2f2996adda3006770aee0"],["/tags/托管/index.html","a9b6f9a0e7355778061b79f3025ce0c5"],["/tags/抓包/index.html","1e246b4ac7dc99c5d436a24e635e2876"],["/tags/抓取/index.html","27757067266477632e17b77b5f035e1e"],["/tags/投屏/index.html","86bf40567002321d533572c11337168c"],["/tags/拓展功能/index.html","7f7d803caaddd29a92a5090921cbe742"],["/tags/挂载/index.html","3eb4f16d52dc524f45c91b01f2889106"],["/tags/指纹/index.html","c3f02f5798bcf45ddbebba38d96c8fe6"],["/tags/接口/index.html","092bab5eab232ab8f16527f5d2b3c4ff"],["/tags/提取图片/index.html","d29fc816a0f5baba06137e1df454ce70"],["/tags/插件/index.html","14bd771b2f01091fa19e93c6a66117ea"],["/tags/搜图/index.html","4b6b651df60c262c43f5f877f57b6d2a"],["/tags/搭建/index.html","8038df4bc58e2f0893e1ad7b72ce1f8d"],["/tags/撤回/index.html","188eceda5878fa90562d15048c298e65"],["/tags/播放器/index.html","af286facb3159968df894557433e7481"],["/tags/政府网站/index.html","e14f7319ce659aad41dae11eb27146c7"],["/tags/效率/index.html","82f3b3b0df87665a84c6516f8a59aaeb"],["/tags/日历/index.html","5a2db1e4d10223b4ede98cc7bcdd65c1"],["/tags/服务器/index.html","0ea92efb45f333cc4bdf13cf18961bfb"],["/tags/桌面/index.html","1f42fe00f1bc75e0b47f415dd897e399"],["/tags/梯子/index.html","819c21814823a891014eb5fd5ee0b1fd"],["/tags/检测工具/index.html","7f665b379a5b5d68f7d1804822ef594a"],["/tags/汉化/index.html","afd512ec590649173024ed489a13af39"],["/tags/测压/index.html","0948941544e7e520ee84f141d8455fb0"],["/tags/测速/index.html","546c15602c5867d5481892151dad2d7e"],["/tags/浏览器/index.html","97bee419870a8fe24443570f4741702e"],["/tags/清理/index.html","8a6c1fa493d7384909d1c7b76674061b"],["/tags/滚动条/index.html","cfe683e3d021f0873c562e58ec7687a7"],["/tags/灰色歌曲/index.html","6829f60fdb281997ba678d49b46347e3"],["/tags/电影/index.html","858c9c50007db5c70419435a5c71556f"],["/tags/电视剧/index.html","41db746ada3974f9f125d94f798d3863"],["/tags/白嫖/index.html","5e364978bf797d7cc84deb6067e311ef"],["/tags/百度/index.html","39bf04a124e37903e85a9a8f427502cb"],["/tags/百度云盘/index.html","c5e7e37982ff403e9216b4f26c0f901f"],["/tags/百科/index.html","4b150914c653c6999a468abdaaa9006c"],["/tags/短信/index.html","47259b9f25007ec1abd44f7b100c06df"],["/tags/硬件/index.html","a5e2f1a93cdea8b37c4c3faad6eeb4a7"],["/tags/科学上网/index.html","9d1a325dd4ed8c03f66288f2c0375f84"],["/tags/空间/index.html","ac747598663e929fc1e50915d5cf9f8e"],["/tags/笔记/index.html","439a6b2501973f7c6862bc09bcc6eed5"],["/tags/简洁/index.html","59c740dce67b2a246833ec1cfbc13266"],["/tags/简约/index.html","986563bc252b4b92410ba7bbb245b655"],["/tags/维基/index.html","430f1862e4013f58c5393b1c712a4bc4"],["/tags/网易云/index.html","3432d2cc437beae9b96fd937ffb38fb0"],["/tags/网盘/index.html","5fb1b4e36cc2606cd0ba5e50d6080c80"],["/tags/网站/index.html","d95d682ff9a2bd50098af25a5c30bae9"],["/tags/网络/index.html","4117ffc4b43ecad73483df9f958195f7"],["/tags/美化/index.html","01b10d9236731ce8b852f663c50ec9fb"],["/tags/翻墙/index.html","83ab69bb0bb0ac11b392052e8684ca48"],["/tags/翻译/index.html","b30997fc0638278c18c65ccc08504d7b"],["/tags/翻译器/index.html","c78c8ea990fcd5ad928b20db10a88ab8"],["/tags/聊天/index.html","a0ae0e67294f68de3771d8db32512661"],["/tags/聊天室/index.html","cb821222e45dd6ce323c4607b2ec4c93"],["/tags/联想/index.html","b4cf4f131fcab41f1f42e9de8df8a98a"],["/tags/节点/index.html","146ca8ac4350be6ec47674c87142735f"],["/tags/虚拟手机号/index.html","ccd7d7e04d6f15a9c061d6682f8a8b87"],["/tags/补丁/index.html","87e82dc02c3c31ab9fe34ba6ca9d76c6"],["/tags/视频/index.html","d75be485dc18aa459eb0da1a155f2d05"],["/tags/解析/index.html","b03d22308d2e502776a817184ded2e3d"],["/tags/订阅链接/index.html","5e699223281cb19d84b28f81f38d6560"],["/tags/记录/index.html","bb1b31f5ac419104a1fad65a560310be"],["/tags/识图/index.html","ff642424eac93e6f1f8089ad6ff25626"],["/tags/语言/index.html","12f86e7d09a0c105ca2b0e9564abeca9"],["/tags/资源/index.html","f8a1be9b777bbfdd83e038083959f71f"],["/tags/资源管理器/index.html","6a11ff3c17e09bb7041f688051a90a70"],["/tags/转移/index.html","e3d496a381e364aa999d905bae8f2bdc"],["/tags/软件/index.html","77cc2acff94765d4053ce82a5890b986"],["/tags/轰炸/index.html","695d1025f3370e7a21379be10e289c0d"],["/tags/迁移/index.html","79ecd80dff8210ef32956c3ae11f677e"],["/tags/远程控制/index.html","68921580abe92ca8b3a9c52c28a2a965"],["/tags/连接/index.html","36984e14dd5ab691debb04f08128dfb6"],["/tags/追踪/index.html","8f093532075695a1a3e7b807a38d2641"],["/tags/速度/index.html","1e25aaa5611ed319ba6079d0490b7fbe"],["/tags/邮箱/index.html","8b9dfc2cb941fdf8c268ed8f9633dba2"],["/tags/酷炫/index.html","9e77ec11f34647a05b34da8d2f46df92"],["/tags/钓鱼/index.html","b731dac77e16dd6661965026f66aa5b3"],["/tags/镜像/index.html","55a5edd7495e5a443f3b7efdb22531ba"],["/tags/随机/index.html","34a409074688c77cbcf64e85dd3de76d"],["/tags/隐藏/index.html","2dc0f7f2e414d9327054108e4ea6a749"],["/tags/面板/index.html","09c03aa0322834b1e1bf6bac1413ccc5"],["/tags/音乐/index.html","b8047b5e2ac5d9588124664bf0c81c6e"],["/tags/高颜值/index.html","684599ded12aa87a2f52116d18523453"],["/tags/魔改/index.html","5256277febd8e96565147392babd32bd"],["/tags/黑名单/index.html","ba19b621a4a9cdc90582eab8c934e883"],["/urls/index.html","eebf8f77875a817a8c59f9068f1b7c29"],["/vps/index.html","1211dd8a03b7df78ba0a511eb205785f"],["/支持/index.html","394227d8012f60aa10186133626d7281"]];
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
