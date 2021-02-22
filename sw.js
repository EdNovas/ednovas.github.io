/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","e0fdb0f5c64ce7ac370e719f82b7f3be"],["/2020/11/29/clash-windows/index.html","05dd37cb9b91e22fd99cc09ec2959b1e"],["/2020/11/30/websites2/index.html","53b30feb210a56fa7e44f51cb5450a96"],["/2020/12/04/iphone4s/index.html","96f8427529b064272ca2bcac2f181c79"],["/2020/12/04/onenote/index.html","06666ba313cc81642e1abb1eaedcf49d"],["/2020/12/04/wesites1/index.html","054fa0241921f64d6ce2cba75a0f31e9"],["/2020/12/06/nokia808/index.html","9839a8d17d7310c8b7d6c2fccbada97c"],["/2020/12/07/ipad1/index.html","9551ccaa34d033ce927044f7c51e24e9"],["/2020/12/18/freesubscribes/index.html","bd2cb91a54f7162c618450c4a41b2bea"],["/2020/12/19/musics/index.html","19ee97b0fafacb024e32447cd3e54dc2"],["/2020/12/19/shadowrocket/index.html","20f8a1b7b86e40cdf84c31d0e61c3b9e"],["/2020/12/19/v2ray-windows/index.html","56b02fe8af40fcca103d3da680e6ef4e"],["/2020/12/19/v2rayng/index.html","9b3b28f4fdc84ef3ea37b735ed583ee0"],["/2020/12/20/beoplay/index.html","76b4067857298dd5132834d7d2b32300"],["/2020/12/20/订阅链接转换/index.html","099324ca45fcbadc32c50719f5c2cbd9"],["/2020/12/21/chrome浏览器下载提速/index.html","5e432e45de46c347ab98c14f76bb9a83"],["/2020/12/21/免费128线程并发下载xdown/index.html","fb8829db44dacaad261e44f35dbc124b"],["/2020/12/21/免费32线程下载软件ndm/index.html","209e7f0dec95a257d23f0af9bfd8c9c4"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","038d715400ac13be57758cab9ef90d2d"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","69ffd6e0a006fde4850954ef23a8a2ae"],["/2020/12/21/广告怎么知道我在想什么/index.html","b86730b8da4187c10d4b45d1647ef290"],["/2020/12/21/无名·引子（小说试写）/index.html","c0413179f09520e88a52dd0e585a7d86"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","0f0d4d5eb8b342e1cd4e5d94b0dfa606"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","fc00984489c5893103f5c26b08e791f3"],["/2020/12/21/高速轻量下载器aria2/index.html","5f568f66408f6f712b190bdabb186a40"],["/2020/12/22/2020-cee-roo/index.html","bb0484706ccd4fb2287713d6eedba171"],["/2020/12/22/firefox插件、github、steam富强/index.html","1b4dfe4d69b9bce64a96a250546f83d3"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","252f4969ba2a214127f3be9494cd2042"],["/2020/12/26/python-day-1/index.html","a9485384ae0ec241f6fd6451c7411625"],["/2020/12/26/python-day-2/index.html","0939658a3f33ff8929623b7bc8f05809"],["/2020/12/26/度盘不限速下载方式一赏/index.html","aae28fea42f8a3f6c477e2ca6df64f76"],["/2020/12/26/添加开机自启软件/index.html","2aa0e46940d89310e2b125fce1889910"],["/2020/12/26/电脑端截图方式一赏/index.html","e8e237b9186aa014dce6ac70e190fd3c"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","ce9df216f88e9f0635bde4e30d75b766"],["/2020/12/27/最安全的浏览器tor/index.html","07d40d8db41af6d99381ec6ee4c997d6"],["/2020/12/27/网易云刷等级和听歌数量/index.html","7c132edcb5c37f7acd4f118b512b0ae2"],["/2020/12/28/freenom申请免费域名/index.html","04a2b92b623f20ca850535c51b233246"],["/2020/12/31/机场/index.html","0de068fe32b64858330845044c678290"],["/2021/01/01/M1/index.html","3bdd9031c8053e65d3853f288c341851"],["/2021/01/01/compress/index.html","3c68d25fc439c157f6901b5a173f88da"],["/2021/01/01/infinityfree/index.html","8bd78e5e61c3eb2869357f791c4ec2ec"],["/2021/01/01/硬核翻墙/index.html","a67c20544a023180fb4aa8a63a7c6a40"],["/2021/01/02/qq/index.html","0882036fbb49caa1b66da00444215c9b"],["/2021/01/03/netch/index.html","afc063d7db76b88b6a5f070b0980dc6e"],["/2021/01/03/waifu2x/index.html","95aecdc9687c2d59408736478a90d02a"],["/2021/01/04/ads/index.html","9a02fb84ce9ef2edad3c36de41cbd95a"],["/2021/01/04/games/index.html","d569415b496e4a653d130b9683018b00"],["/2021/01/04/heroku/index.html","326e83b006324269ee5b6c568a6ae3d8"],["/2021/01/06/movies/index.html","d4eb63f82fe2b06a29c9cc2588d6428f"],["/2021/01/07/google2020/index.html","1025dddb6631cc9122d1ad8855f2be91"],["/2021/01/07/lucky/index.html","99d8c358cc07a56794e741661425ed62"],["/2021/01/07/spotify/index.html","7a098853ff5b931a880befb7564c09cf"],["/2021/01/07/thunder/index.html","ce443eb654ca2b0aa79d76ae65588823"],["/2021/01/08/adguardhome/index.html","62daaa85741acc186b5c00185fee6e70"],["/2021/01/10/IBM/index.html","9724de2335400cedf69fe89733c5c3e3"],["/2021/01/10/potplayer/index.html","36006470d0d4c5a6c654429f6ccb375e"],["/2021/01/10/sakuraanime/index.html","8ba297ca7faadcd82d53f122d90a6c2b"],["/2021/01/10/美剧星球/index.html","7142a24ee1e7d8e68aac06a1f2008a24"],["/2021/01/12/telegraph/index.html","b9ec8c1a780278386a1c97e782502124"],["/2021/01/14/comics/index.html","ff41d8702230ad95c7c0a048ca64fe8d"],["/2021/01/14/ftp/index.html","8064603c2a9602caf56dedf919b6a203"],["/2021/01/14/oraclecloud/index.html","46b3fec2ec5664bccc08774cca9e8535"],["/2021/01/14/porkbun/index.html","35404474fe737217fe6ca72667a71192"],["/2021/01/14/powertoys/index.html","f014787808c0d3b68740ddaf5eb2ac47"],["/2021/01/14/taptap/index.html","7766ffb4a857603382fa8d910c9be0ca"],["/2021/01/14/ubuntuvsftp/index.html","e431364677008c3ae8e4c16046c9d429"],["/2021/01/14/小说/index.html","971cca4195493abe18610d967e1db9f6"],["/2021/01/15/freeproxies/index.html","e5a9f3f9305d5f6835f3499cd90972a3"],["/2021/01/15/incaseformat/index.html","ed2fb6b3b1668f66bded82e79b9e4ba0"],["/2021/01/16/euserv/index.html","47943a50597bd33957e605b728f47bb9"],["/2021/01/16/winxray/index.html","7bfcb40f26d3541fc76f19422fca2f5f"],["/2021/01/18/qqreadhistory/index.html","58d2f8600220a78b57a02cd9a3d62d14"],["/2021/01/18/qqrevoke/index.html","ac2a9075e5aefa962033079a9eb9e0a7"],["/2021/01/19/freevpn/index.html","f50bf8a523c98b1cbf6b5b5996f10b40"],["/2021/01/20/browsertrack/index.html","ce0054752f1a045c7c08784fc3756be4"],["/2021/01/20/v2ui/index.html","ebf039e05adb357d510880ebfbc865c9"],["/2021/01/21/failedtoconnect/index.html","3d21ac4941de220c04c774206f6071d9"],["/2021/01/21/gitcalendar/index.html","2a761483601313de842debea3fac4a99"],["/2021/01/21/markdownformat/index.html","08aa59d7f055a84a9c60dbc86914766a"],["/2021/01/21/markdowntable/index.html","123151dbdd35da854951ee41872f78e7"],["/2021/01/21/vercel/index.html","1e05a8afcd04ecae2da8b6d92458f994"],["/2021/01/22/hardware/index.html","32262427cf79d789fcc91de0ac2762d4"],["/2021/01/22/muviz/index.html","637523a352162dbb0158c61e5dad9038"],["/2021/01/22/randomapi/index.html","f88e3df5a543cfb5634033539e007532"],["/2021/01/22/searchimages/index.html","c1201126ec5fd4ee59cfd54b026aea2a"],["/2021/01/23/RX文件管理器/index.html","710fb32fa7f0ffb4c5f066406d08cdaf"],["/2021/01/23/chromeflag/index.html","5fe7f1761bf81a958c22717df666b85d"],["/2021/01/23/qttabbar/index.html","6e6b4850f13291870b146ac4451ab4cd"],["/2021/01/24/githubspeedup/index.html","001f7dd687c88f22c5c257b8da99b936"],["/2021/01/24/jsdelivr/index.html","e1a5397c5f6641e3ffe3fdc87413a231"],["/2021/01/25/note/index.html","8711fc47f796c6c15dacc0c87a2f8145"],["/2021/01/25/soul/index.html","13f2f41d9ab0f1303a688dcbcc6a3df3"],["/2021/01/26/herokuxray/index.html","5979e5e73b269cbdabe40ace189c3eb8"],["/2021/01/27/proxypool/index.html","d8a9679577526215a8db6a78f84ab21c"],["/2021/01/27/tracker/index.html","e4236f5dc95c1a145b64d77211342928"],["/2021/01/30/pandownphp/index.html","e51977df02d356cc18e283cfd93574d2"],["/2021/01/31/newgroup/index.html","94df86fc9d28999281b4c73e4b5cd369"],["/2021/02/01/clashlanguage/index.html","95fc01963abaeceaf8f593388f4c6159"],["/2021/02/01/encrypt/index.html","1259156f4cd25734ad4d5fe6fa0dc572"],["/2021/02/01/footermotion/index.html","0e85aac5e00ac786a33ff539d24672e3"],["/2021/02/01/gitter/index.html","670493acd09afe1c5fdb7e1064f646a7"],["/2021/02/01/pixivtop50/index.html","b17ed6dbbf89cd2b72607401ef798734"],["/2021/02/01/scrollbar/index.html","2342c1d523005740b4f56e12a8b29bc3"],["/2021/02/02/clover/index.html","fe6830b81a4732977d9bb1b42b14825c"],["/2021/02/02/maya/index.html","7e6d8d38329ca03449035d58a6647630"],["/2021/02/02/speedcontroller/index.html","08afeac0c0b5ca47f609d393312b9b88"],["/2021/02/02/yesmusicplayer/index.html","f234ebb3e6afb2391bfa33e12edcf59e"],["/2021/02/03/lenovoonelite/index.html","93e56075139e8dbc65563e5715cdeda5"],["/2021/02/03/skipads/index.html","be9a92268816fe6429544aeb466b7396"],["/2021/02/04/picseed/index.html","1ce2a090c26b04d15b5811ddb3e4f252"],["/2021/02/04/renren/index.html","82973fd99725029a4acb2dc650fcb45b"],["/2021/02/04/serverstress/index.html","6535d74ff04b902885c7275f4f99e5a7"],["/2021/02/04/wikipediazh/index.html","dca92d8a42fc25a94ac6e6d718fbe2dc"],["/2021/02/05/googlevoice/index.html","cc84a2cea7d8413ed54e910ab60b25a3"],["/2021/02/06/clashconnection/index.html","ceed3bb91b8cdd0ae7452635dcd86d51"],["/2021/02/06/gvtransfer/index.html","4822a16b8ad24c4751eb1469283c2395"],["/2021/02/06/todesk/index.html","4972def88eb028d0c850acd3c0ad5595"],["/2021/02/06/vpnblacklist/index.html","fdc42d1470cc52f83789be72d881ea21"],["/2021/02/07/mklink/index.html","d4c9d067471c597e51369a768f09f3e8"],["/2021/02/07/speedtest/index.html","1f0242124ca6c3b6ae58bd26c2f4afb4"],["/2021/02/07/translate/index.html","b63737ad2da58dff680c245cc28b86fc"],["/2021/02/08/ewomail/index.html","4892de80c0425198be77ddefd1c5fec9"],["/2021/02/10/officee5/index.html","5401eddf29fbe4ae2ffac081d61ed4f6"],["/2021/02/10/raidrive/index.html","ec729f88f82dfe70e2de288d1d4f5fe1"],["/2021/02/13/e5sub/index.html","e5ac1172bd4f0d27b7f983497642b5a8"],["/2021/02/14/screen/index.html","b250b7d2430fdbdf271854c0c3b7131c"],["/2021/02/15/clashtun/index.html","3ed73ee7dec6ac873bdbdb04a62cc132"],["/2021/02/15/messageboom/index.html","6c227156d2aea078e43cacc36cdedf69"],["/2021/02/15/oneindex/index.html","ab5e4d434166ec2e7acb9849ff63601f"],["/2021/02/16/govsites/index.html","a0dd3019db8d3c06ddf0da86e5c67de3"],["/2021/02/17/hexototypecho/index.html","8a9911a09b1cf9f6e43ad0da7b07f30c"],["/2021/02/19/fiddler/index.html","ecceb7857bf325e5c99d2c2d77b170a2"],["/2021/02/22/potplayerset/index.html","3aca900b12d7a2fb5e8a57306aaa2b40"],["/404.html","3a7ed16887c6acd07b461a9ba954a021"],["/archives/2020/11/index.html","54a18b4854ec5f70dad463ec3ce967be"],["/archives/2020/12/index.html","8e11a4a261142e3047b44699eb7daf48"],["/archives/2020/12/page/2/index.html","3d3cb956ac51f78bcf48839a571a299e"],["/archives/2020/12/page/3/index.html","a65adfab3b389d16af07222722c09d6a"],["/archives/2020/index.html","2101758ad940f4805f96da4fab625160"],["/archives/2020/page/2/index.html","e3615526fc6dbb4caad6f452e03fe9fc"],["/archives/2020/page/3/index.html","c5f38e132600bbc7bf606be93395a50e"],["/archives/2021/01/index.html","554a0f20197c53c60f6f4dd61009a4c3"],["/archives/2021/01/page/2/index.html","0b5e237eb5185d94b39b0aa9e19afc90"],["/archives/2021/01/page/3/index.html","b97c23fec3369bc312f18a0415623fd1"],["/archives/2021/01/page/4/index.html","41b3d8c5563b39d4c475a36dc0934ad3"],["/archives/2021/02/index.html","a7853dcda41a0f7e56ff409ecdc8dc5d"],["/archives/2021/02/page/2/index.html","97787ff41dbf793c4a5f513433cc87fa"],["/archives/2021/02/page/3/index.html","4e2cb32ced645bcdc0a3f1e26c648b1c"],["/archives/2021/index.html","b9caac79afba01b8712cfcbfca788e3d"],["/archives/2021/page/2/index.html","4250758f16a37794bcb968de638b58f5"],["/archives/2021/page/3/index.html","d4c22861025717435490c35835e47cf3"],["/archives/2021/page/4/index.html","fd59764b58020a3965522e5b6ddf5b10"],["/archives/2021/page/5/index.html","79813c818debfdfcf2823d010f086979"],["/archives/2021/page/6/index.html","696c10ebac6240c45d2afd3443c46606"],["/archives/2021/page/7/index.html","b3070117ccdca99ea9535901d8ae5016"],["/archives/index.html","6b4f970b0c71cb04f7576fbcb5d7f704"],["/archives/page/2/index.html","4526a7a4d7d00d21d9b0981fd556a0de"],["/archives/page/3/index.html","09c9e69814493b37dcf567a0521ff91e"],["/archives/page/4/index.html","e9f631fa2715fcf69bc98d70a11f0cac"],["/archives/page/5/index.html","96a8d8cf88dd82e57ebe6fdd9aa34dab"],["/archives/page/6/index.html","a66bf328db057082197dd254a73be6a1"],["/archives/page/7/index.html","b4210199d72fd7a7ab07e88b597fd25b"],["/archives/page/8/index.html","c9f03c9e1cb908df58148afab9d01376"],["/archives/page/9/index.html","ac93cf67315be1e6cbaebc214f179f24"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","b6895c8e90f30491e3e9c2a6150e0bac"],["/categories/index.html","fc8246af48cc20448dd8f2b229f691eb"],["/categories/下载/index.html","8b6cc51c422143e65174db011887946d"],["/categories/安全/index.html","1327e618b3969ead8cc1894535555795"],["/categories/建站/index.html","ba8b029528214f1e5a4c45be9cc57ea5"],["/categories/杂/index.html","6ac5aef5c011aff3f4dd02a21484da9c"],["/categories/杂/page/2/index.html","9a8ca7c05eb86ae91fd3f25f56c880b4"],["/categories/测评/index.html","f53070d6c137d997ccd046272e1e4a28"],["/categories/科学上网/index.html","45f5a165a94fbb3501338aa84d498028"],["/categories/科学上网/page/2/index.html","646a7761ae4025d6cf74647e02f56455"],["/categories/编程/index.html","2b9347c3e57dd151b229b68f8e04193f"],["/categories/网站/index.html","b06757a428c5733ae1d91535467a0fc8"],["/categories/网站/page/2/index.html","e50553f08937aa74bcc0900c84343c63"],["/categories/软件/index.html","1102636b484fefc5de8c4b7467c8308e"],["/categories/软件/page/2/index.html","7e013925d11ce77a3ab76dace8017dd1"],["/categories/软件/page/3/index.html","0bd7cab3b975b9c4178824fd904d52af"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","3912028a71d6c309916d25f44b815307"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","00096bfb86a9218d0e7bc1e6de04aa85"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","820634d0e351a1295cfefdfce4b71892"],["/ios/index.html","637f8cfb3a3c12112471e9ae55047ffa"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/2/index.html","bb72f7eb7766313bf2350cf402a14b08"],["/page/3/index.html","6af515ceebd525096774d19cf6283878"],["/page/4/index.html","af538e795ef23af6292d644336eec94e"],["/page/5/index.html","29087b30c29fe36a5f5f54e59fe38c3c"],["/page/6/index.html","024a1a69bdf46f15fd5504e3c952521b"],["/page/7/index.html","f9787ba2229815bfe0fe0247f006b25e"],["/page/8/index.html","9854f1adc773cf8ef076c70f24b13b1c"],["/page/9/index.html","0b5a11641dbdc0bd33f826b030d680ff"],["/payment/index.html","4ef7c1a93c956ae5d8516636a35833b2"],["/privacy-policy/index.html","969ff533f05e09d8e029a7023b3f55ef"],["/rss2.xml","6449ac554f505be37ba21a3a3c1d6491"],["/search.xml","f287439767196e033a2369f6d90c9f3a"],["/sitemap.xml","888c686b42cd225245a1b0cac16fdaa8"],["/sw-register.js","62b6686441b27ece783c2caa44748a5e"],["/tags/5t/index.html","80c5718fb91206cc6af1a68a7bbdb9f4"],["/tags/Clover/index.html","333a320e612c4efff2b2e8c387e9b381"],["/tags/E5/index.html","d86e6d985116ebddcd647b814bab12e3"],["/tags/FTP/index.html","b9ea284966be55db1e28e77ad9a186d2"],["/tags/GitHub/index.html","39aa1de946389483e8426ba9614d8997"],["/tags/Heroku/index.html","1471e19d7df712ae56847abf6baf1ac2"],["/tags/Hexo/index.html","e3ce77eb9d536b10ff5dbe8e9f5d66d0"],["/tags/Lenovo/index.html","de8bea252db3e14083ddc1a6a6d291f6"],["/tags/Oneindex/index.html","0a870b4cbc9cdb1025a69b3fea2b207c"],["/tags/QQ/index.html","0b83622a0052670814f6c09177aa36a3"],["/tags/QTTabbar/index.html","5ee681b041ec84d2b95f4849f640a667"],["/tags/RX文件管理器/index.html","5d9290a1f72869c4044b424b12774a3f"],["/tags/Todesk/index.html","3778f927bac3886cf6dfbb8adccdbc12"],["/tags/Vercel/index.html","a10993b0e8b55fd3e40d6c9aca592a57"],["/tags/ads/index.html","e22400c446ff0d9476c29aad944c1111"],["/tags/api/index.html","2f9554e5aa00f262728d3909dfe60751"],["/tags/app/index.html","7ed5a38ea732584d334a4fcf34798eba"],["/tags/blacklist/index.html","1909aa58c109204d3aaa6e9664f75f92"],["/tags/butterfly/index.html","146de98d39c6ad37309b399cb96b861d"],["/tags/chrome/index.html","84db16ac519f0127f26550f5584fe972"],["/tags/clash/index.html","18c6727ae3ffb0cde73f2558d63f4a13"],["/tags/cloudflare/index.html","e2df1786be1f078c54ea08fb362e7a0a"],["/tags/cmd/index.html","69a0342c159e094d4b55d2d574dda9ca"],["/tags/c盘/index.html","260fdc7d24e1fda02c9cb0ba55e0cba1"],["/tags/email/index.html","10cd4951cc6d07ee99af346b39c215e5"],["/tags/ewomail/index.html","49d346afceb040842692cce3f6641768"],["/tags/fiddler/index.html","95005441dbd53ea95d1ab3eb87adf25c"],["/tags/flags/index.html","9e689af6f2cfa4e4ee410807f985add9"],["/tags/footer，页脚/index.html","693baee06f2679c1baf2fbebc8218028"],["/tags/galgame/index.html","91137b78ae70f13e252aaec3804fc889"],["/tags/git/index.html","6ac95bb500ce1bf52eabf4b8562d4148"],["/tags/gitcalendar/index.html","b168a3f5bcf2e01d69a3a68bea1420b5"],["/tags/google-voice/index.html","85fd58cd6c9382da577d066c5f5a0c4d"],["/tags/gv/index.html","ddd1203efbcd97b3667f950d9f7b47cb"],["/tags/index-1.html","3394994dbceb0a6b570db004bd8ba176"],["/tags/index.html","e24681fcd089f582bfe383534016bc9f"],["/tags/jsdelivr/index.html","56b32c7252918f6967aa5f952e1d2788"],["/tags/linux/index.html","99f2ec1958e32ae73e2ac171e2fac9af"],["/tags/madVR/index.html","999bd63cf115544818f1958415cf6ccc"],["/tags/markdown/index.html","1c36ae4d6deffbc77b5a90d1d12d1db2"],["/tags/maya/index.html","fefde6b1a4e19d11b10f4b3b06343396"],["/tags/mklink/index.html","e817ab3e7c5e25624414ad97ee667fbc"],["/tags/office-e5/index.html","010df4db59e20a5a213890239dfb9ec5"],["/tags/onedrive/index.html","840579cb9dd4dffde7aa833eb4555c0b"],["/tags/picGO/index.html","57e5f3f3132e4bb8896605b0234e22b3"],["/tags/pixiv/index.html","15aacd1357149d78c347ad60a5045df9"],["/tags/potplayer/index.html","672179751ce1600da5f1c25bd105fdc9"],["/tags/proxypool/index.html","2226f7d91a5eeb111328fa49be385fb3"],["/tags/qbitorrent/index.html","5bcfd13bbed3e5b0dd615f908eb2bcb5"],["/tags/raidrive/index.html","d3a7482a1bebfb2fc247fe7abd7a85ad"],["/tags/screen/index.html","bce7f2d3cd1d63db45baaa1032dd7d28"],["/tags/speedtest/index.html","556ad41fc21603caa18c5dc528098901"],["/tags/tap/index.html","cdf0f1d84c3f3571688b4d6b80d227ca"],["/tags/top50/index.html","e3a66b942e9c4e72c377276f90fe2cb8"],["/tags/tracker/index.html","c5dea75d7de6e6d0207c844cdc7a780d"],["/tags/translate/index.html","168c6774c789c5c6cd19c8088df718bf"],["/tags/translater/index.html","e6eaef08486418d4b6c4f7ca2e1049b6"],["/tags/tun/index.html","1820aa0a5bda1dfc1c755a8762ffa7dc"],["/tags/typecho/index.html","a462d085a557accedac86e14981f36d3"],["/tags/v2ray/index.html","adff6e2ce21f39ea873cfef5d35dafec"],["/tags/vpn/index.html","f4e7cd80eeac397e4179a89c78313b55"],["/tags/vps/index.html","7d6c44ed9fec6f51d45b8cccb5c21f10"],["/tags/windows/index.html","28f6ec4ef16e1db55ddc62818763b0ee"],["/tags/windows端/index.html","0f8e2c0332a06e59cc8d2d981516e994"],["/tags/xray/index.html","dae0b90b3268be56c06b619eb2c7d4b0"],["/tags/下载/index.html","40ea58844bab51ff09dd4345fa91d1ce"],["/tags/不限速/index.html","ed5e6e1159e639240b3713a19f1cf936"],["/tags/个人网盘/index.html","e2ef65f5a5bfb252db0f77fd6c99b15b"],["/tags/主题/index.html","3127aa084c289f253e1e61ddf034df88"],["/tags/云便签/index.html","55ccb1cc765b95b7736ee70ce2f29074"],["/tags/云盘/index.html","b0c172f50700b717e543fbcc9b6edefb"],["/tags/人人/index.html","7cfeea2a6fc171991fad2604d712666b"],["/tags/代理/index.html","50a7d37f3b3fc67c1011f0c470e90a45"],["/tags/代码/index.html","a6f4c70ad8dc932cf5f3313f6b25022f"],["/tags/优选IP/index.html","f7bc5da4a553ab162822bf679dcfc2c2"],["/tags/便签/index.html","f644e3b00d03fcc63431c6151e67acac"],["/tags/保号/index.html","68c6c87585b6e7e51005f9daddd15e52"],["/tags/免费/index.html","8be53b8fb8c95b2f15aa63dd5c4daf5f"],["/tags/免费节点/index.html","bb48fbee7b75ac36d38c5ddbeea005a1"],["/tags/加密/index.html","3e9ffcf3b96487a5e028e41be2a3bbc0"],["/tags/动画/index.html","41eb5b406f3a88c65b054a6ede71f88a"],["/tags/博客/index.html","95cd3ab1ac25b22a43048da129554338"],["/tags/历史记录/index.html","1d47471949168285179fe1d352de7fa9"],["/tags/压力/index.html","78ae0e49986516f63e63e26694196c33"],["/tags/压缩包/index.html","92d1ec83ec22e7a0d683115f9fe2f5e1"],["/tags/反代/index.html","9e8299c28fe90b332cc8ef8dc0a2cae9"],["/tags/可视化/index.html","de7b994b39d81923c75e36707e7a8bfa"],["/tags/命令/index.html","afd5de24f607a0fc9c8087e735520b1a"],["/tags/国家/index.html","05c88850f70bda2110e8ab0eb8b58164"],["/tags/图床/index.html","d38b6f99b78d55526f0da8cd1edba423"],["/tags/图片/index.html","151cadfa328b5fc1e8f2abe3b8f7f1bd"],["/tags/域名/index.html","42257312ac228a0d2d7a1359102d167c"],["/tags/多标签/index.html","1c7931e3e06322040b496b5967a1da8c"],["/tags/存储/index.html","be02b0e33f20b1552fb85cdf2825f67a"],["/tags/安全/index.html","3ac50938cd4a64db32640016b7136ba7"],["/tags/安卓/index.html","2632ab4bb133e346a5be4a1a7e6b377d"],["/tags/宝塔/index.html","59529ce15a0c682d5ed495fafbca88f4"],["/tags/广告/index.html","95830d676466ca9277f33b299f3833f8"],["/tags/建站/index.html","347e43717036109949ce4c5130bce56d"],["/tags/影视/index.html","c3d013f4466d93eba04dd341daf9d71c"],["/tags/快速启动/index.html","a6faefaf76f3bf888eb285077fddcb8a"],["/tags/手机/index.html","55cf22f0e7c82b3d1b2799bea7ed54fe"],["/tags/托管/index.html","e86daca560755eaaf8c0a77d6061807d"],["/tags/抓包/index.html","db7885f9638fa2d0c5ba63618de9102b"],["/tags/抓取/index.html","46a6ca36ab2050915355130e7df7e857"],["/tags/投屏/index.html","02f639dffe9b507e10d6c443bde6c357"],["/tags/拓展功能/index.html","c735926c7354acdf3dac35f9ee80ad3e"],["/tags/挂载/index.html","91337212e9051841e8201e0775290fe0"],["/tags/指纹/index.html","45fb7a6c166a1aa576f025ea8181f133"],["/tags/接口/index.html","9223c03eb1fd2dcafb0d7aa52cd8edf0"],["/tags/提取图片/index.html","5631aa865570d86cbb964cd657b03a24"],["/tags/插件/index.html","bf1d63ba2e5de27f69249313dbe46f6a"],["/tags/搜图/index.html","a47ae94138eb4f827bea47c693dd1d0f"],["/tags/搭建/index.html","656f2cb66025935d278be0c34fcd9214"],["/tags/撤回/index.html","b58974335af2a130f676563c91562982"],["/tags/播放器/index.html","76b27abc4bf43e96b812928bf541d7c2"],["/tags/政府网站/index.html","c82d34f61d8d7eb1bd5fa0f179b8c187"],["/tags/效率/index.html","fff24858b334f4b17613a76b58ff13c9"],["/tags/日历/index.html","bd668b42d8d0e83b9216fb566bbb9fde"],["/tags/服务器/index.html","c1fa9bb2e515dc88e936ac30f8d596d2"],["/tags/桌面/index.html","e3df03c5a0b3fe2ff65167c3c57d3980"],["/tags/梯子/index.html","b816cd5e6a468540c353e98c27ae04df"],["/tags/检测工具/index.html","d2e515c95125fa46387b5bf23f266e2c"],["/tags/汉化/index.html","4b87bcbc7b18f3804fb80e423acd9678"],["/tags/测压/index.html","029ced1b88443b3060a98e3ac017ba63"],["/tags/测速/index.html","8d626008395f4f2554412fcda001568b"],["/tags/浏览器/index.html","85d665bf50324bd5c6db4277246aa75a"],["/tags/清理/index.html","1fbbd5527577d9d75e3b6fa6fe1767e5"],["/tags/滚动条/index.html","f1d29caff9d3cd28234799e8dee7e3de"],["/tags/电影/index.html","683ac30a77801fcf978277e5f81afeca"],["/tags/电视剧/index.html","adb3607c5d4270dbf0fd82f70ace8832"],["/tags/白嫖/index.html","172b21366165699ebfd55682a026d229"],["/tags/百度/index.html","c2cf1403159490ad177fe4b0cc7a57f5"],["/tags/百度云盘/index.html","4e663a7496b278923cd46330a679fce4"],["/tags/百科/index.html","f41ea1055f5bb40ce3795f1d3151aec3"],["/tags/短信/index.html","417ab5882ae49072b5bc09d259c42268"],["/tags/硬件/index.html","d212eb1527b5dc5532ecb69e1431d88d"],["/tags/科学上网/index.html","d44aa523c0f0ece1a3bb305d7f1df5bb"],["/tags/空间/index.html","ada2a92e7bef27cbef938e8d17796d4d"],["/tags/笔记/index.html","624aa5a0e31e4a3e84b9dcd7cf4872ae"],["/tags/简洁/index.html","c5109ef83cff873937598380ee61511a"],["/tags/简约/index.html","7df7e8224698b513fa6d90135bbe4cf2"],["/tags/维基/index.html","bcee7b15b3fda7a0d66318344ef74172"],["/tags/网易云/index.html","ba739e0bcd807a37b17db6fc00a3c47a"],["/tags/网盘/index.html","8f6ec6f53a6a175264b16290e42bdf80"],["/tags/网站/index.html","8b1e9b755f8f389db488de32dd6d1a29"],["/tags/网络/index.html","3fcdd260829dba1973c196326c9eae30"],["/tags/美化/index.html","67f944b7228bc2459ca115d7fca89813"],["/tags/翻墙/index.html","6e32747d429de4610de9e916f7f5cd2f"],["/tags/翻译/index.html","bea2423f91fcad3a7d6b549336d89c89"],["/tags/翻译器/index.html","aa8fbae069ed3b84e2dfcc8c461c0e84"],["/tags/聊天室/index.html","1753a1a355d5e70093e6ea4b006c4e76"],["/tags/联想/index.html","554efd442cd2a32b5909d9489fe0bc06"],["/tags/节点/index.html","42902b753de1a115d8060a712f3b3ef1"],["/tags/虚拟手机号/index.html","e65c23d2aa58f8053dd45063afc7bce3"],["/tags/补丁/index.html","61781304f012a24576233a905b32bb21"],["/tags/视频/index.html","5c0b7eee4e870bb2c462e430fc4cd74b"],["/tags/解析/index.html","8fb837417fb1e983eb34618f399b23f3"],["/tags/订阅链接/index.html","854d2bf7b0e8d8d2d9280ffc46ae1a78"],["/tags/记录/index.html","28790c892b24c3ff4e2a15b9242aea7c"],["/tags/识图/index.html","8454f8593eb9a671cf8f6b658789dfe3"],["/tags/语言/index.html","0100a0d6f2171aa45621d36fcc0c37db"],["/tags/资源管理器/index.html","2637ddd408b59ca5c94a28abd0469b8e"],["/tags/转移/index.html","640f3fd262d085cfb5285f319716f94c"],["/tags/软件/index.html","d121ec6f5259e9b0ecdd016cd5b46f1b"],["/tags/轰炸/index.html","ba190966ca7c06d9c092243e10d7e7fd"],["/tags/迁移/index.html","5c6200e07b9fc3c2668d5b234e6d52ed"],["/tags/远程控制/index.html","456be1d123c7e5ffe1ed8a814475264a"],["/tags/连接/index.html","c77e9a9ba0be23ddf9db0112d2d1d8aa"],["/tags/追踪/index.html","57274ca8a2c343c9db77adde17562a42"],["/tags/速度/index.html","7dee20deaaeeb40613b5da3fa92ec75a"],["/tags/邮箱/index.html","0cc20d50270c1eb380b9696bcc21b29b"],["/tags/酷炫/index.html","4e5df2c52ec6cc56a386331ee4d44188"],["/tags/钓鱼/index.html","2fdd60c40f1824d3adcd009e817ac1eb"],["/tags/镜像/index.html","fc03b573168f4c416fb1fe323fde8eb0"],["/tags/随机/index.html","54dffbc35eec8db7bcaf6791791e84e1"],["/tags/隐藏/index.html","037f87e0595c3ffb8e5f84965cdbedd6"],["/tags/面板/index.html","27cb2dd01dde7e0f4edc753ef96b2d37"],["/tags/音乐/index.html","329d985275b4b2aca12fcf6cb5126429"],["/tags/高颜值/index.html","ee0795e21102a81e20056e01650d0696"],["/tags/魔改/index.html","bd0cdb1bb652208e6134c04e736d7afd"],["/tags/黑名单/index.html","15b165a799f8e4db7b1bbf77bfde39d0"],["/urls/index.html","3f0e59d6a74f175d14fa531ce8d8fc84"],["/vps/index.html","c8227c5b0202227b6be67189adcc1d2b"],["/支持/index.html","780f0ac3015cc10a56cf7507ecb68e85"]];
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
