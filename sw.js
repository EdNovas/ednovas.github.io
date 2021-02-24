/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","74203bc32eec85194e638fa447d3e8ad"],["/2020/11/29/clash-windows/index.html","6fabfb18333cb39a3224e122ccc5b6d8"],["/2020/11/30/websites2/index.html","bdf2d84a000e7795a2dc4e8c72fc41d0"],["/2020/12/04/iphone4s/index.html","852e0ff45099abaab1b71294cfaff018"],["/2020/12/04/onenote/index.html","ae752028ec1f1d01119358411b1c9008"],["/2020/12/04/wesites1/index.html","55fec2cc366e1075c51c878a686b0958"],["/2020/12/06/nokia808/index.html","bf07cf22cdc543086385aaba6e02ad80"],["/2020/12/07/ipad1/index.html","0b2686d6838a43e13cccc2bfded6403e"],["/2020/12/18/freesubscribes/index.html","bf8c632ec681baa9038456f0744c5a03"],["/2020/12/19/musics/index.html","a90cd6c3d4411892ed9b48ed6ed9ed5f"],["/2020/12/19/shadowrocket/index.html","c5346a8aad7a62a212e316c924c64068"],["/2020/12/19/v2ray-windows/index.html","084334a0ae489c1f10fb3564b543a1f8"],["/2020/12/19/v2rayng/index.html","57ad3def3cd5f167d43a69652b1a4caf"],["/2020/12/20/beoplay/index.html","3bc70d3d4afe95efee18d7815a3df13d"],["/2020/12/20/订阅链接转换/index.html","d4bd66c371c971da1141911f19b86cb0"],["/2020/12/21/chrome浏览器下载提速/index.html","14a9d9b889088532d12ee9db1471e416"],["/2020/12/21/免费128线程并发下载xdown/index.html","ae901be96ad9ff99a790b9ac15ce9e27"],["/2020/12/21/免费32线程下载软件ndm/index.html","d3d6a78c6e673d81bf78405f30c270e7"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","46983b424fd2bcd21e181db246fe7b74"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","c33a8a8641462d339dcb99bd36c0fe3f"],["/2020/12/21/广告怎么知道我在想什么/index.html","cae1e5188332ecc6d1bf1dc577074fba"],["/2020/12/21/无名·引子（小说试写）/index.html","d6e97ae6227a32378f4d67af6ab59900"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","41b0b358a4f060e0fb8ff4fe246b3861"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","b1201d297a272d9ca11a8c3975dbc96f"],["/2020/12/21/高速轻量下载器aria2/index.html","c0630c107c10ffc7174fd299adcd15ab"],["/2020/12/22/2020-cee-roo/index.html","5485b7ec2abef8369ce7a707fda3be9f"],["/2020/12/22/firefox插件、github、steam富强/index.html","92900d73e8389f1494f5545312e629a4"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","3094de86d288995430cda6cada725eae"],["/2020/12/26/python-day-1/index.html","f772edfdf7c494491f5731f9521df916"],["/2020/12/26/python-day-2/index.html","9edc24b95a56616ee609417757537872"],["/2020/12/26/度盘不限速下载方式一赏/index.html","6fcff99ab77f54b3d4c6395f995933df"],["/2020/12/26/添加开机自启软件/index.html","880e29606bcbacb0aadc1b39a5e31367"],["/2020/12/26/电脑端截图方式一赏/index.html","61db03e3b39e5fab2040b2f0f01eacf5"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","dab2b712891145c9e0e3b2924c26f3ca"],["/2020/12/27/最安全的浏览器tor/index.html","e8fe841a177e77380fc222c96397ca08"],["/2020/12/27/网易云刷等级和听歌数量/index.html","70b24a24c78f7329d616f4b4e5fa852d"],["/2020/12/28/freenom申请免费域名/index.html","f2decd6e5e7652eaa2220f7d47233e39"],["/2020/12/31/机场/index.html","e0b5591414e7421ed53841d0fa6bff2b"],["/2021/01/01/M1/index.html","5c63166d3f1adcdc7989f88eecee01b5"],["/2021/01/01/compress/index.html","5c45dcf3d2e475abf9a446e9bcc7a64a"],["/2021/01/01/infinityfree/index.html","96b52e9e5812c753a15c1cb7f5a28d86"],["/2021/01/01/硬核翻墙/index.html","e05d666bf500d7cbfddf7974ebf98ffc"],["/2021/01/02/qq/index.html","4069d0763984c5327da4713ac9d3446f"],["/2021/01/03/netch/index.html","0b9311a334c2ae08311aea04876ff781"],["/2021/01/03/waifu2x/index.html","a1df422b805a42b10293c33e24bc206a"],["/2021/01/04/ads/index.html","9c7924a935cd84a4c5685b6ebdf184c4"],["/2021/01/04/games/index.html","7935e3be29837a20dcc3d75dd8574f6b"],["/2021/01/04/heroku/index.html","b3cb886d10866185a47f5dfd6ee7ab19"],["/2021/01/06/movies/index.html","1039b8a922c7a5843ab045928a89864a"],["/2021/01/07/google2020/index.html","cbf5119726692615aba54ef6b9362879"],["/2021/01/07/lucky/index.html","81da096cfdc555b94bec468efdd7b1d2"],["/2021/01/07/spotify/index.html","25886dfba9338f333d55b1fe2c3317c5"],["/2021/01/07/thunder/index.html","2c0a6ea626030ffb2c41c8c0a2b7a8b6"],["/2021/01/08/adguardhome/index.html","c0abae84ee308e7bc01fc8efb37ded9e"],["/2021/01/10/IBM/index.html","bafa375dffc62e1d2a3f0d48b5a8b8fb"],["/2021/01/10/potplayer/index.html","8f1c4e9a59be816b898ec31fe4bce4fd"],["/2021/01/10/sakuraanime/index.html","975451304338dce09c8b95e25af21f85"],["/2021/01/10/美剧星球/index.html","328b47fa1199b5646b36f405e9187fc4"],["/2021/01/12/telegraph/index.html","95b44f6acb94f07bc09146d5e04f08d5"],["/2021/01/14/comics/index.html","5f2d7a81dcb600589a6f3cce377059cc"],["/2021/01/14/ftp/index.html","36b14076c3846db64d85f77f71efc2de"],["/2021/01/14/oraclecloud/index.html","3dbfdd4a2312a08a2b59f4e805ff4ec5"],["/2021/01/14/porkbun/index.html","34617f4643b0a1c6e0de357db0463633"],["/2021/01/14/powertoys/index.html","a9585a418024ee5cc1df60452681699a"],["/2021/01/14/taptap/index.html","4a58aef7810c80667be42d442b2d349c"],["/2021/01/14/ubuntuvsftp/index.html","40f7baf830d04ae98e6120e9f9ec009c"],["/2021/01/14/小说/index.html","771016ca5de9958ec417227e996133dd"],["/2021/01/15/freeproxies/index.html","69a3634bb050519866453ac3fb694201"],["/2021/01/15/incaseformat/index.html","ce9f62d6ba05436d807de116df2baa16"],["/2021/01/16/euserv/index.html","e1970ba046fa59bee9057a9a7d5a48da"],["/2021/01/16/winxray/index.html","ddbfa50e03d923306f6d72fdba4714bf"],["/2021/01/18/qqreadhistory/index.html","11d4b9f34c675c8764e644dc6bddeb32"],["/2021/01/18/qqrevoke/index.html","62e3b946f26d83bd83f23dcf0d06ffeb"],["/2021/01/19/freevpn/index.html","aecbca5b61fd83440d450eff70a995a7"],["/2021/01/20/browsertrack/index.html","c77e49946d2ab39f6235b2e292a506d1"],["/2021/01/20/v2ui/index.html","f7903a7978a5844318d11759ffb6f43a"],["/2021/01/21/failedtoconnect/index.html","3780e44c7bc14e9ff27e95b35ef0f511"],["/2021/01/21/gitcalendar/index.html","ed361660722d90abf6372c055c876fcb"],["/2021/01/21/markdownformat/index.html","092b85b18b54a4de7f9e7a721dcd9fd2"],["/2021/01/21/markdowntable/index.html","89b07df02d200a285cdfeeb2d85010e6"],["/2021/01/21/vercel/index.html","0c155dd13e757a7b690c8ecde5572880"],["/2021/01/22/hardware/index.html","723b9bdde65efcbdbc7ae2db25603be0"],["/2021/01/22/muviz/index.html","3b621b1540c8a6613da6845721362a8d"],["/2021/01/22/randomapi/index.html","ff5fa3fefa392ce8c76d41e3f3ac76e2"],["/2021/01/22/searchimages/index.html","9a6036b3e9e0db055c7a0556d3024ebc"],["/2021/01/23/RX文件管理器/index.html","92cec026c68688f9e8efa3168400f67c"],["/2021/01/23/chromeflag/index.html","ceb26a035c46604542ec182ecd886299"],["/2021/01/23/qttabbar/index.html","d881a47aab647e152f312fae5eeeabc6"],["/2021/01/24/githubspeedup/index.html","e34c00bae0c5c20988e7d216a8ad68fc"],["/2021/01/24/jsdelivr/index.html","650f1e53db19535f5b5b2afc277b4c36"],["/2021/01/25/note/index.html","32fd78d641daf65a0e370530f667a426"],["/2021/01/25/soul/index.html","e3e15b657a646e89e0b8c2caebdd370e"],["/2021/01/26/herokuxray/index.html","a8e0d975640b727638f595c329262c34"],["/2021/01/27/proxypool/index.html","9ff976bed831ab7c443822b8ce7c01b7"],["/2021/01/27/tracker/index.html","b21863d90ce2f908a66bbc03915c3ca6"],["/2021/01/30/pandownphp/index.html","46c7f9a9b6c3d41ab4e751d47aa18581"],["/2021/01/31/newgroup/index.html","812cd5688a056efbfa53043beaadcc99"],["/2021/02/01/clashlanguage/index.html","3acf9c28ecabd4cb1f0b319c271010e3"],["/2021/02/01/encrypt/index.html","87a7a11bb3cce461c27c5e568652cdfc"],["/2021/02/01/footermotion/index.html","b8e7ee47695b2904d41e6dfea40f0b4c"],["/2021/02/01/gitter/index.html","25b0c1931729f87047679a3e1165d9a8"],["/2021/02/01/pixivtop50/index.html","01231a0a140fa3d7a6bf35eb3340064d"],["/2021/02/01/scrollbar/index.html","d5ea53cd14dc95a3ee4967fd0ff2a0ec"],["/2021/02/02/clover/index.html","0a7c4dd79b49068752722adb015d63df"],["/2021/02/02/maya/index.html","e278a1a687c7953e174b372c7b419950"],["/2021/02/02/speedcontroller/index.html","07a7faed0bce17c848c95cf47ef5d722"],["/2021/02/02/yesmusicplayer/index.html","659411c7381339fa251a516dbea19561"],["/2021/02/03/lenovoonelite/index.html","c65b3c3d9976b522d4c3582ba7d21502"],["/2021/02/03/skipads/index.html","d0b64688440211070c9eb995e25133c6"],["/2021/02/04/picseed/index.html","67be3625e862deaafc96a9411bffd591"],["/2021/02/04/renren/index.html","4417420a5ccd88413812d52de9c728ae"],["/2021/02/04/serverstress/index.html","92c9f4e8d8b3bae165e3e7aae50ba40d"],["/2021/02/04/wikipediazh/index.html","1491c34b4f02c17fbfaa336f21f92c92"],["/2021/02/05/googlevoice/index.html","bf0a33f7ff3f1e5c5cf08198a6ade2d7"],["/2021/02/06/clashconnection/index.html","ea18a8f1886a570ea51022a4b01d8edb"],["/2021/02/06/gvtransfer/index.html","5adc1888de5f5fa85911f4bca17087ad"],["/2021/02/06/todesk/index.html","b018e732595b384d6487c4459653f25e"],["/2021/02/06/vpnblacklist/index.html","1d2efe10090db72e991f606db7ea6428"],["/2021/02/07/mklink/index.html","4ce3b930cb187a4023d5ea7ce46b9dff"],["/2021/02/07/speedtest/index.html","dc35b3df4943aa3579231a6d7c633731"],["/2021/02/07/translate/index.html","649dcf4c3f3125970fc28ceedb2e9692"],["/2021/02/08/ewomail/index.html","11d71eaa40c6db781073331c72097226"],["/2021/02/10/officee5/index.html","aaddd91450bd8c5f39ec6dda7c14d54b"],["/2021/02/10/raidrive/index.html","62ea1194d31cbc106cfb68b049a8f7e1"],["/2021/02/13/e5sub/index.html","0e74ab2f1c1d252d60cad808c5eea00f"],["/2021/02/14/screen/index.html","86895a38de50bc3734d5ef0c4028f214"],["/2021/02/15/clashtun/index.html","5041d788b1e1f774b6e7fe4df27d6d0f"],["/2021/02/15/messageboom/index.html","4b32d1731e8ba5feceeb71b81f7788c4"],["/2021/02/15/oneindex/index.html","370a3be71dd79eb0e3cf154c4323f88d"],["/2021/02/16/govsites/index.html","5a9473eb6d60eaa984553688151be9a9"],["/2021/02/17/hexototypecho/index.html","e4c5594d4384e5cf888cc9a62d06821b"],["/2021/02/19/fiddler/index.html","e1b0171f89045a9049ecc396224cfadd"],["/2021/02/22/potplayerset/index.html","0c09f5052a50c8a4a3790c224ed4c172"],["/2021/02/22/studyresource/index.html","8f62400b69602b3cc68849c013f2c413"],["/2021/02/22/telegram/index.html","9bae34d916a123cd686573b4b9bcf190"],["/2021/02/22/videos/index.html","a230e3cdd7df4323b2b7a830c57d4699"],["/404.html","a0774739bf2be591674c90856ed1fbcb"],["/archives/2020/11/index.html","7bced362ef5a3569e577ce0fe871e420"],["/archives/2020/12/index.html","5c9bdfd874a3c2eabb98fa79d0ca1a33"],["/archives/2020/12/page/2/index.html","51770f18c17e0af99b4b9963ec2f6eb0"],["/archives/2020/12/page/3/index.html","4f7aa062a041cf6cf16e8f01a2ef2ef2"],["/archives/2020/index.html","cdb4dd000c6ef95bb84a909e2425b1fd"],["/archives/2020/page/2/index.html","f550a3b6b8a0931e5fae80feb9d52e9a"],["/archives/2020/page/3/index.html","90f13a3b1cca3687a60dbd67fd438efc"],["/archives/2021/01/index.html","cd3d300dc29615675a024e31025df1a3"],["/archives/2021/01/page/2/index.html","28a73b82c507fa9e3813d850811aa35d"],["/archives/2021/01/page/3/index.html","855a1003250d4d6a73b82463bb6848fb"],["/archives/2021/01/page/4/index.html","60539a6965bbdfcfe836f06ebe53d1d8"],["/archives/2021/02/index.html","adc4b09bdc3de8ca9288b5a9ac42b6b3"],["/archives/2021/02/page/2/index.html","87cbac3ce34c77f14b9f5d890ba932cd"],["/archives/2021/02/page/3/index.html","bfbb2666483b09b4477d1f83f2c9bc11"],["/archives/2021/index.html","274e971c14ad2aaa8cd1c541a1fdef29"],["/archives/2021/page/2/index.html","f7fc8de8d4d2a21f6d932fa2ffe6d1ba"],["/archives/2021/page/3/index.html","d8fb7e16c7cbcc9a339b0d2e8d421f36"],["/archives/2021/page/4/index.html","01a1155f8356d6ddde9b6c9218583d49"],["/archives/2021/page/5/index.html","eb81d39a995cd86ee18cb339b27e503b"],["/archives/2021/page/6/index.html","6e51178c06ecf38c8deac374071d0fdb"],["/archives/2021/page/7/index.html","2a564bc9dd01721203a5e8628c09587c"],["/archives/index.html","884049631b9faa76866c527f2acf9151"],["/archives/page/10/index.html","567490220e8d04c514667b8dc21e09be"],["/archives/page/2/index.html","0a219ac27bb31fb2976cafc8dc9e5c8a"],["/archives/page/3/index.html","84de07b02b373bef2b55de0f25cb63c4"],["/archives/page/4/index.html","facfe16ec477ca5692b169c7057b5aa6"],["/archives/page/5/index.html","fab083a63f3be545d9d439d5a9eab540"],["/archives/page/6/index.html","373aad7ae53b378af276cf9b1148e31a"],["/archives/page/7/index.html","760ce8f046fe4965ce7c45ed9dd1a0bd"],["/archives/page/8/index.html","45867b17273d2b978403cd18397fe8db"],["/archives/page/9/index.html","54572aabc41a88c1932b4903cba30c64"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","a052e456207065aaeb3027d3e94d9aea"],["/categories/index.html","95382bd92edff488fccd33ae94045cd6"],["/categories/下载/index.html","19873be38284f210b084e0096be3c0e8"],["/categories/安全/index.html","93ef862abba92f114484a6e20e18aec7"],["/categories/建站/index.html","b6cc78bec45904fdf6c65d4dd06f266c"],["/categories/杂/index.html","92e35cad8c32e45929c354f6d1367da6"],["/categories/杂/page/2/index.html","a584ee2b7f6cae2f3987ef0af1fd9e6e"],["/categories/测评/index.html","6f6d06386c153eb337671f5a91e201dd"],["/categories/科学上网/index.html","5d654e8cc57844b49619a8e1c9658baf"],["/categories/科学上网/page/2/index.html","d8f12dd60fafb587747aa49a8dea839c"],["/categories/编程/index.html","1df368da9010917834a746cd2cedc5d7"],["/categories/网站/index.html","88395631d1fd746376f2cb3211f88dba"],["/categories/网站/page/2/index.html","a4d279dbbfdbfd5687ab9c9f7983af1b"],["/categories/软件/index.html","961bbe3d72bfe6097bd53838589b596f"],["/categories/软件/page/2/index.html","fe2bc771b0ea46aa4e9e54610176f46d"],["/categories/软件/page/3/index.html","b5bdd104011c1f123886f54267a7dfb4"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","098bc4dc4cbdf646d64508607f50e791"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","62e18742c4655f4a1d126abb554ba2f0"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","2edce85b47a192d66cb6cb2ee47cc906"],["/ios/index.html","ac9ea37cc9bb68cbd0f653d642e71680"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","46bdb55729cc3a89f716ce6c7339a645"],["/page/2/index.html","89843ffeb5c10936b218aaba16116358"],["/page/3/index.html","5b58dfe02cbb16a71940f1f02091c47e"],["/page/4/index.html","d2c990d77c9518391c9a247f14e1b4a4"],["/page/5/index.html","0568666204b03f717eac8b60d085c97c"],["/page/6/index.html","a2706c4ffc9bfeca66af770c289e86a4"],["/page/7/index.html","735730f5fbcc3cdc2688389c8ef7aa62"],["/page/8/index.html","51626b5e8334837298f6e65309dcac26"],["/page/9/index.html","b3a3e548d0b7fb2063000cd2627c2919"],["/payment/index.html","5f31c2d657d6ada20cde8d53f04121ed"],["/privacy-policy/index.html","d04f47c36316ef96dea259aadc0261df"],["/rss2.xml","202537f1ecd9c358115ed58b20e3e26a"],["/search.xml","03f1f9f493d91ece42b23780d1dfbe8a"],["/sitemap.xml","cf2c1c53a68ec17afe1d342d3094958d"],["/sw-register.js","675cfb12b4cc715757ffe8ae39c77031"],["/tags/5t/index.html","9bbbbfc2c9df100fbd91a3046c5717ed"],["/tags/Clash/index.html","37f2ca96b06274f4686476ba2b1a2e4e"],["/tags/Clover/index.html","c6cf4f6ac3122d5104b7542d67c5c86a"],["/tags/E5/index.html","f07b266dcc594d318208ca9d2ec15d79"],["/tags/FTP/index.html","5041f013cc3efbfdb2e24d0dab2fb0b4"],["/tags/GitHub/index.html","7a72d3d6e68a063bf44b8cc4fa3c9ea1"],["/tags/Heroku/index.html","989aec3d836f88a336cc663dc79f354f"],["/tags/Hexo/index.html","728b7e3cecd39fad673f11ae59b3eb57"],["/tags/Lenovo/index.html","25dcef253b25bf3eb6a79118e6bd7682"],["/tags/Oneindex/index.html","b60b45cc15cda225b8156c395649b65a"],["/tags/QQ/index.html","7321a8c3c4799a46a364d39572b796a7"],["/tags/QTTabbar/index.html","66207053ccce7451366a35cf02c7d86b"],["/tags/RX文件管理器/index.html","cbed8c11d8efe7ebe8325fa7aee3946d"],["/tags/Todesk/index.html","9cd549087b6efbe7abb894906796bfee"],["/tags/Vercel/index.html","f33391b08b2f4682b91bd7509cf33627"],["/tags/ads/index.html","420537d4a5726c4e2ef86ab70a9dc94c"],["/tags/api/index.html","84da942f2fe585f972c6157552dc7b1c"],["/tags/app/index.html","e6f20c5c4fbd7794d9846e924591e087"],["/tags/blacklist/index.html","87de05e4ae71833b56b42209e29bb653"],["/tags/butterfly/index.html","a0f6f0f73b0e41b8e2d35b3596a29890"],["/tags/chrome/index.html","6ad3f3d8cf57b44a8909dd95c329b62c"],["/tags/cloudflare/index.html","7753892a4f3b7a93eb3036a30ec9412f"],["/tags/cmd/index.html","d5576de610e841557918fb946ad7ae56"],["/tags/c盘/index.html","46f14b6632cfc5e77b47b9efa76adced"],["/tags/email/index.html","5b92ad4b73061c285b3b1401110c1cd8"],["/tags/ewomail/index.html","40f45d78a53d9c38fbdf039f7232b198"],["/tags/fiddler/index.html","6a4649738a8f88ada3ad65f77fd92ded"],["/tags/flags/index.html","43e1b4ab28bd1cf068a7e0a4267fd86f"],["/tags/footer，页脚/index.html","a74c8ebf86043eab1d3d3254991f5c2b"],["/tags/galgame/index.html","8132c3967eb07c35ff53cf0c1d84959e"],["/tags/git/index.html","40cd096fd5352a26101a27b6cea23140"],["/tags/gitcalendar/index.html","fab0a9bb43a599b136a21069d7daee69"],["/tags/google-voice/index.html","a9af364bf29b954eb30ee11e1b9204ef"],["/tags/gv/index.html","2b68911434863a02f4b524b7eadf8519"],["/tags/index-1.html","40b54ce2e2cb37c2e806296d62ed6e97"],["/tags/index.html","4ea4d011c0a2bf79cadf9970a8f3fac3"],["/tags/jsdelivr/index.html","f73427eff69cd7e8d5b4be2258357a3b"],["/tags/linux/index.html","67228a7cc0fc25093ae645e2d6bf710a"],["/tags/madVR/index.html","c222eb1f39457bccfebaa5c2d23d76f0"],["/tags/markdown/index.html","6331306673f929ef2f5337a5bc82b8ab"],["/tags/maya/index.html","cebc325df596b3448e09994d6d35f2d0"],["/tags/mklink/index.html","8739cd896a36a8e5e50db7e704f22651"],["/tags/office-e5/index.html","f7654265b4a179be7a71de556287bc14"],["/tags/onedrive/index.html","8dedf74603ffd04b84b07081f23e172e"],["/tags/picGO/index.html","4d56be7db8d438813b94b354d1235b1b"],["/tags/pixiv/index.html","aa5d5bcd1dff62740ddf9ddb867a18ad"],["/tags/potplayer/index.html","d7cd37d03a689bd4a4aa05082f7f7966"],["/tags/proxypool/index.html","10a363ed0a08781eb38998759286b45b"],["/tags/qbitorrent/index.html","95fd64800eae87c256d3100387fb6275"],["/tags/raidrive/index.html","ebbdcd76c37b0704b7dd0d13e33281fd"],["/tags/screen/index.html","b8eeb9b414a9e77a9bf791d0acb166b6"],["/tags/speedtest/index.html","44955eddd28f4f54130bf15f9b807864"],["/tags/tap/index.html","02f3ff5c5cdefe1cb929d2b2d42298a4"],["/tags/telegram/index.html","f213de29d95947973837bcc60da33195"],["/tags/tg/index.html","df950dddd3ce7ad1fe25bef507e67a68"],["/tags/top50/index.html","3fbde1cd4940d2ac2b14bb7522fea368"],["/tags/tracker/index.html","be3514bc7d794e2f889bb2c1ceb9c22f"],["/tags/translate/index.html","4defbfbf0f54cefa7676f0cf787375fa"],["/tags/translater/index.html","06a3e719b75ab3ab7471e02ba033da44"],["/tags/tun/index.html","ef0b9dc568e32dfa4f4c9c84f264fdb9"],["/tags/typecho/index.html","06a729e5742ff63ad724093f301d781d"],["/tags/v2ray/index.html","de724323b3000c7162c9202099d154fe"],["/tags/vpn/index.html","8f73d363d09afaf64b9c94f9ba5f590c"],["/tags/vps/index.html","a3e260e764f7dbc6882bab82ee2fff18"],["/tags/windows/index.html","b8b6eb5c2fe1b63a9b5194103e6f4af8"],["/tags/windows端/index.html","46d6386547c3f1430be830f8e736ebf6"],["/tags/xray/index.html","271e8d9e9cf1526bc59f1dae784afdd0"],["/tags/下载/index.html","3fab205f6f1a48215524a12b90e0ce25"],["/tags/不限速/index.html","f3a205f125ad3c0806d9cb94e89eaf18"],["/tags/个人网盘/index.html","91d494f88419099fca13f254928396d4"],["/tags/主题/index.html","f803f97cc624e23f7cda2ad14bdfd139"],["/tags/云便签/index.html","9dba5cb85055386b258786e16d5bda10"],["/tags/云盘/index.html","193247cfe0d0e10cec4875f3c3223fe4"],["/tags/人人/index.html","5fdbb79354c3092ec9ae942f2475b7d1"],["/tags/代理/index.html","d8d4a570f8e294d2d5db6ee727865f99"],["/tags/代码/index.html","269c298a3f55367dcb3b1eb8be3cf9e1"],["/tags/优选IP/index.html","115861393e230d58926c34e25dccef13"],["/tags/便签/index.html","f4c5ce0f59d668944c99d6a198055e05"],["/tags/保号/index.html","41e3b09b9142bbe28a5a7bb1a6acdcd3"],["/tags/免费/index.html","94f8b4cce0260a61e99af649d97159c5"],["/tags/免费节点/index.html","831484bbc718b29b97768a784ba25427"],["/tags/加密/index.html","64b4c2d40a57d7296de86b47c43cde62"],["/tags/动画/index.html","ea54368aa1c4ff3513adcecb5499697d"],["/tags/博客/index.html","5ce680b49fef47f39bf84ec90ab7947e"],["/tags/历史记录/index.html","d3c07010155ce93ed68f400b58b5c15f"],["/tags/压力/index.html","c637645a4960351ccd12995567859f95"],["/tags/压缩包/index.html","a7cbd7ebf45ddba219314b2ee21a5cd4"],["/tags/反代/index.html","7b13b7d657503e377604fa2b1bcaa7cf"],["/tags/可视化/index.html","bcd4cfee42bad54db2a1f466ec2a3fd7"],["/tags/命令/index.html","b263d629d441a39fcb5bca2c46ba3ba0"],["/tags/国家/index.html","eae04ed7ef492faca9358f342a98b5d5"],["/tags/图床/index.html","befa2b29da85151610ae179cd29f31ed"],["/tags/图片/index.html","f0927c919839c68732af33da45f102aa"],["/tags/域名/index.html","572da82d6752ea79a44828f448ef3993"],["/tags/多标签/index.html","02f04f6288952a6ed4ed287912709a5d"],["/tags/存储/index.html","a8222d99448471fc5b2c125d7603b888"],["/tags/学习/index.html","5172a97bd62a4fb6233f163499ceb544"],["/tags/安全/index.html","c2d4d917b8db251e30cf9eb08ebd91c3"],["/tags/安卓/index.html","ac29ebf9a406976ace1b48567c8f8257"],["/tags/宝塔/index.html","e8bc3c63f27ee37b47dac8ff01b6676a"],["/tags/广告/index.html","879610be6b62857749e09b5ea4007b93"],["/tags/建站/index.html","a2b8ad468c6d59df04e30421654b027d"],["/tags/影视/index.html","e301a3a6dffd3d268eff2d1fd49139e4"],["/tags/快速启动/index.html","e40fd816b81c2a7f166a1872b5ed42ce"],["/tags/手机/index.html","de5dd43c937b5f78f9921bf4b677afae"],["/tags/托管/index.html","b89ab5db8238914eddd99138e19e1448"],["/tags/抓包/index.html","4165e26e3a0b0e19d22e479373334478"],["/tags/抓取/index.html","b2f75a0e94f41d37eee7b05bc913e728"],["/tags/投屏/index.html","e9d78610566e75f39f330c9a636ae494"],["/tags/拓展功能/index.html","662d554a7e441b2614020254fc7d0f97"],["/tags/挂载/index.html","1e1f10620da79f8bb1582d74daf05b19"],["/tags/指纹/index.html","295c07ff7c2488731f674f7f670ff803"],["/tags/接口/index.html","b5c21551c66b3dcddc030a224e9e0ceb"],["/tags/提取图片/index.html","390ad7fa1b3661cf6f54cdf6e231fabc"],["/tags/插件/index.html","8c4956aa841ef16e15b6f66a864fcfb9"],["/tags/搜图/index.html","de7ba8e74a219ea56a15ecf46a50f871"],["/tags/搭建/index.html","2d9938ec71054ad9a8f9ed4eb95c84f4"],["/tags/撤回/index.html","e3c28d0ab44da8fa807e47e3ec00e6ea"],["/tags/播放器/index.html","733e2fd45f4d5b5515ec100346e6f530"],["/tags/政府网站/index.html","8e81cf58134ec509b1645ba979d14d24"],["/tags/效率/index.html","ca254144490f9ff299023fa64b13231b"],["/tags/日历/index.html","47705bccb11e27a28d4baf97a58d8d7e"],["/tags/服务器/index.html","b0ed5985177d8af3db782456e6b7ac1d"],["/tags/桌面/index.html","c818be9a2413188ce50017b443158abf"],["/tags/梯子/index.html","21ea92f37a3740b8f4b7da3ccfe65fe3"],["/tags/检测工具/index.html","a9fa8cb7a2e6e4bd54f24f78a28c2292"],["/tags/汉化/index.html","3daa98aff060e6cf271918adf7d4b10c"],["/tags/测压/index.html","8fa80f17b3c1d29471cb27c4f873f383"],["/tags/测速/index.html","3a5b306d803ef7fc662a7978f20f1e68"],["/tags/浏览器/index.html","ef48fdef4b165f8a729fe351c5d770d8"],["/tags/清理/index.html","8bd493fb4c5024d7ca03ddad747f6b34"],["/tags/滚动条/index.html","cfd1802a849d6cb91d17cab4a4c4154c"],["/tags/电影/index.html","3eeb8e6b0072e6318bcfa21b69e07210"],["/tags/电视剧/index.html","da8be83abcc7d29b753402d008fabf6d"],["/tags/白嫖/index.html","0e4497b9cfd196da6e0c1fb4835768b7"],["/tags/百度/index.html","6444a4d1ceaf0ea0a1def0fe80135efe"],["/tags/百度云盘/index.html","27f621d44a4240553bee31358a9ad829"],["/tags/百科/index.html","f0b057756ec73be14526a5ba2bf58207"],["/tags/短信/index.html","1465330a702ac401ab04641359d39b8a"],["/tags/硬件/index.html","5d29b00d0ce71c2d4fb8bd60a9c859f7"],["/tags/科学上网/index.html","6f9c39fab9c4fce240fec938ca4df14c"],["/tags/空间/index.html","68a53e0d50472bf16ffc3d4fe5dd5332"],["/tags/笔记/index.html","58b687f4c65af3260ac1341ecf9b2a62"],["/tags/简洁/index.html","0b5deecc2dcc7795261c4a54694de63f"],["/tags/简约/index.html","f5f4d0e94491dff3281a9138a7bcd23e"],["/tags/维基/index.html","4589bd54c59c1dd5b70ad6d0a2b6f657"],["/tags/网易云/index.html","b3efeb9caaa2abc2e79dbdbc8789fbb1"],["/tags/网盘/index.html","e9bd7672b2fcce43433ef8d80fc6fd93"],["/tags/网站/index.html","9447eead62d9f818d45ba8ee61bf95e4"],["/tags/网络/index.html","e545df8a55483ccc634b90e776200053"],["/tags/美化/index.html","0d8233fadf3b57407e8ce3965bd96261"],["/tags/翻墙/index.html","9085a3eebffa6e2f591b3325f270d259"],["/tags/翻译/index.html","ae5c77163ce8dbbf07111444009fcba7"],["/tags/翻译器/index.html","e2c336cc576a638973e1cf95169c1622"],["/tags/聊天/index.html","3c8eca02ef95a868ecdb170e8ceb644d"],["/tags/聊天室/index.html","90247b5a9a5feff78df9538a71963594"],["/tags/联想/index.html","544a744bb0ee1bb9f0a90fe5e43a7c40"],["/tags/节点/index.html","e93e2138292597cdf5a8abd0f2926989"],["/tags/虚拟手机号/index.html","cfb72fa00ed1ea143bd7204da5a592d4"],["/tags/补丁/index.html","da17a1cf7be70f3393e7247c8c300f31"],["/tags/视频/index.html","52ee12f2939e75d1b86db1d6515276bb"],["/tags/解析/index.html","5aa3c21cd1003dccd9ae70b6cdc864da"],["/tags/订阅链接/index.html","d92f3741004fa07aaca3aa39bdc5103d"],["/tags/记录/index.html","d0399396d64470eb72247402a57c8aac"],["/tags/识图/index.html","32475de33dcfe204ca3be89f4b2f1c20"],["/tags/语言/index.html","844e82bd4b2f87bf72d3b573fe573292"],["/tags/资源/index.html","3c84c6bd44b737555cc636ff0cbfc2cf"],["/tags/资源管理器/index.html","7c49cabc10d813bdaa24c90f6d351f72"],["/tags/转移/index.html","1f0684c471c0be01069887d5356d9750"],["/tags/软件/index.html","032a461a39d14224fff0e9a8ea55bef5"],["/tags/轰炸/index.html","be7a917b709beea56393d1c7a2225b27"],["/tags/迁移/index.html","4d037fdadabec34ba797207fc12f9a37"],["/tags/远程控制/index.html","b909b77ee17bfb43a5270c3bdb73dc1a"],["/tags/连接/index.html","8ea98a900f47f46a0070973fc55772d8"],["/tags/追踪/index.html","82701590d2309a1c0a5b3d0956383475"],["/tags/速度/index.html","decfdee8457b3cefd6f0ed1b209a031f"],["/tags/邮箱/index.html","778c73ddafe8467fea92074879eb3f35"],["/tags/酷炫/index.html","76d481f8b3722557fd1af9ae31529aff"],["/tags/钓鱼/index.html","46b1a648810a410a1f0409d7cc77f9c6"],["/tags/镜像/index.html","92a15c907f28b64e09ecb18da0c08ce4"],["/tags/随机/index.html","acfde742a7f389e1ba60f87ae5892876"],["/tags/隐藏/index.html","fd0f58580ceee51f8dbcea13a9ffde67"],["/tags/面板/index.html","de6b9dde6fecaa94744be8a55c613508"],["/tags/音乐/index.html","4c164b7acc84c9fe59e094c2cdfdabcb"],["/tags/高颜值/index.html","f8076018d8f19a5ceff044cc4b915e44"],["/tags/魔改/index.html","35daafa5cd1453afd9ae6fbbfa037953"],["/tags/黑名单/index.html","4012459a902cab22dcc27b997040d537"],["/urls/index.html","adf96c241cb143b1b4c36f00ced1bf2b"],["/vps/index.html","46b26967228899c879bf81d558ef7494"],["/支持/index.html","8307dd1e34b568cb438825bab2e1f85e"]];
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
