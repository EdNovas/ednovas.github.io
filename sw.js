/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","0e8c31da4dde86cd12c41ca44625fb09"],["/2020/11/29/clash-windows/index.html","f5f3897728280868ba5b85661190966b"],["/2020/11/30/websites2/index.html","4fe76ca802754e1857c7923e6feb6f22"],["/2020/12/04/iphone4s/index.html","e27b69fed503f75a2397692f1ddfc38a"],["/2020/12/04/onenote/index.html","3b9017fc61d165bfa32bc86756ea9199"],["/2020/12/04/wesites1/index.html","5a093086b8ef60bf37b378f8985884ca"],["/2020/12/06/nokia808/index.html","19040498c5c28de9ece621401dfd8cb5"],["/2020/12/07/ipad1/index.html","af9efa9fab524dc4f13d50364dc5d482"],["/2020/12/18/freesubscribes/index.html","09b3c64847b624bcc3b8ea7812d1d03e"],["/2020/12/19/musics/index.html","39d98ad5bfd39284ea7582a860b913e4"],["/2020/12/19/shadowrocket/index.html","216ce1fffe0b4aa5f092d2a24b2802fa"],["/2020/12/19/v2ray-windows/index.html","213ce475ec7d5460d907ae705fce617a"],["/2020/12/19/v2rayng/index.html","7e7759680cdbb652b7865b162691b903"],["/2020/12/20/beoplay/index.html","bf4644312128531e2b4f9c0cef7cdd6d"],["/2020/12/20/订阅链接转换/index.html","69ab2167b8e43b071008becfcebbf6b3"],["/2020/12/21/chrome浏览器下载提速/index.html","b7fae265d3588f5fb693e87f49e737a0"],["/2020/12/21/免费128线程并发下载xdown/index.html","683d41d034a9132c0b4d68ebe39aa6f5"],["/2020/12/21/免费32线程下载软件ndm/index.html","959d875db210633b04a788d556ee8502"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","0d899f27c84292ac1daae270a0642cd7"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","0d4d79a4a79e33316022e5132847d4ba"],["/2020/12/21/广告怎么知道我在想什么/index.html","45b9df024b162de85cd5aac18025cdd5"],["/2020/12/21/无名·引子（小说试写）/index.html","13c92da928895b23e67a9ddfc06b9bc1"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","e5525ca601534a98c633d3ed702204de"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","91dacb27e469e12fed7af8ab4024239c"],["/2020/12/21/高速轻量下载器aria2/index.html","00a6190b4487298c7cb1ea9035a523ad"],["/2020/12/22/2020-cee-roo/index.html","c7eb98c9bf8649c0af3f03ebde5aaea8"],["/2020/12/22/firefox插件、github、steam富强/index.html","5cf310d42fc0177e1e3d9ec4bf8d5866"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","ce1939dc6b5d1a5b0de2a54c5410b7e4"],["/2020/12/26/python-day-1/index.html","73c1587a2b94af3683f16678f5e02e38"],["/2020/12/26/python-day-2/index.html","c0ca1673727d4228dfb45cd57eb27b6e"],["/2020/12/26/度盘不限速下载方式一赏/index.html","c18adcb7c74c0a2c438c3563c1bc4bfe"],["/2020/12/26/添加开机自启软件/index.html","2eee37664262c602f940545aa82af396"],["/2020/12/26/电脑端截图方式一赏/index.html","360339699884e0bd8907acdfe5b364c6"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","cb84e332d46f105fa107f7af50b6dfd9"],["/2020/12/27/最安全的浏览器tor/index.html","8e4f5df99c080f70055145182455c38d"],["/2020/12/27/网易云刷等级和听歌数量/index.html","77c58d0600a0af34c0a36bb23fff331a"],["/2020/12/28/freenom申请免费域名/index.html","21eff3fe50533cd94a25290d1ba17ce6"],["/2020/12/31/机场/index.html","d0425d0bc71a26541502c27ea4f4b486"],["/2021/01/01/M1/index.html","501ff76d2e2856a0baf0c375de9997b2"],["/2021/01/01/compress/index.html","48a868ef326d9c8a61049d2ddc886e2f"],["/2021/01/01/infinityfree/index.html","38d77bc91cb8a289b19d633d8ae08c44"],["/2021/01/01/硬核翻墙/index.html","ac128cb3fdbaa8f1aa3a669e8f2fd8e0"],["/2021/01/02/qq/index.html","fe52513898466e68bcdcff0518c39d6e"],["/2021/01/03/netch/index.html","f2c994a4d332e37b2b29e569a6109c22"],["/2021/01/03/waifu2x/index.html","582d0a1da13be3ecc0133eba37f04bd9"],["/2021/01/04/ads/index.html","d13a1fd10bf5a741ba3bcc2e1044b3c2"],["/2021/01/04/games/index.html","0b59834f6ed8d2a5b7e31980b246a7b3"],["/2021/01/04/heroku/index.html","ff690388d2cdb215e0de001f043a7e38"],["/2021/01/06/movies/index.html","288dd9911f4d10a9600940d554f27205"],["/2021/01/07/google2020/index.html","e5c8496719831517dc7679207f0276e0"],["/2021/01/07/lucky/index.html","d4ace4bc99678afaf9c86d8675521c1d"],["/2021/01/07/spotify/index.html","b4400e4e3d4be8fda9e18b8cd4e0ba9b"],["/2021/01/07/thunder/index.html","da525119271e47222dd63f5f6a7c0f93"],["/2021/01/08/adguardhome/index.html","92741dab00e2d0a9318042bf00bbe26a"],["/2021/01/10/IBM/index.html","bd482fc4e79db8ecec09f1f5afcd5158"],["/2021/01/10/potplayer/index.html","eac7e92ad09ac660f0f0f521e7bc7879"],["/2021/01/10/sakuraanime/index.html","9641428b01fb596f8a6eb2847cd3270b"],["/2021/01/10/美剧星球/index.html","c21b74a5a5e1c23e05b8b3c1986420ad"],["/2021/01/12/telegraph/index.html","3cb39ac68f24a819a2814e209670f63c"],["/2021/01/14/comics/index.html","0b071ae5071ef356b9ec39dae069254b"],["/2021/01/14/ftp/index.html","4d9d95dcee5876835ae6a4c16fd22957"],["/2021/01/14/oraclecloud/index.html","4e8f71ee9345a0c14b8dc21875cd8f4e"],["/2021/01/14/porkbun/index.html","de5b26e1c48f08c699b9184587f19878"],["/2021/01/14/powertoys/index.html","c35284921006ce58df3a006a029d7be5"],["/2021/01/14/taptap/index.html","cec07d81c741ff46deed320dfcde0aeb"],["/2021/01/14/ubuntuvsftp/index.html","24e9f23ecdb2686305182de6fe17b9a6"],["/2021/01/14/小说/index.html","627dcb3bb3babe5e75021d9bbba03f6d"],["/2021/01/15/freeproxies/index.html","7f87bf0d9a81fa20b8fa5ab575b9a5ee"],["/2021/01/15/incaseformat/index.html","e7cb506a315c69d877937875cab5d868"],["/2021/01/16/euserv/index.html","fcb9ff5aa6023528e31c2af9899cd11a"],["/2021/01/16/winxray/index.html","1d3f8ae5d93e8cceebfb0f9de66ad2f9"],["/2021/01/18/qqreadhistory/index.html","615e7de8885778ad2c208f985cb35f97"],["/2021/01/18/qqrevoke/index.html","854baa809e38f6f56e7b7f61bb97df81"],["/2021/01/19/freevpn/index.html","073e1d618c5dcc713d3203a6cfff157a"],["/2021/01/20/browsertrack/index.html","599171c0d2610d78622bcf93863c2776"],["/2021/01/20/v2ui/index.html","6e503e34611e92afb07d15784e68fe7a"],["/2021/01/21/failedtoconnect/index.html","c25150fc92df7abe609e31a1374730e4"],["/2021/01/21/gitcalendar/index.html","5680f4a006f8ca8d6ebd964a76526b62"],["/2021/01/21/markdownformat/index.html","4baf08d4e33b18951fed9d10aba264e6"],["/2021/01/21/markdowntable/index.html","cd386fa6ad104023ad0df4b00af8ea98"],["/2021/01/21/vercel/index.html","ea1ad8bf0b696c958b95eaec9f524146"],["/2021/01/22/hardware/index.html","ab1aee20e881fee179d26c759098cd04"],["/2021/01/22/muviz/index.html","adcfdff6d7c1024faef7ced95e66dc5f"],["/2021/01/22/randomapi/index.html","595fdfd127ae1921b21d50e41362c5e3"],["/2021/01/22/searchimages/index.html","f84502184266cc965d67e845e17c17b7"],["/2021/01/23/RX文件管理器/index.html","ee60826de2a514769abc5c033b7a4eed"],["/2021/01/23/chromeflag/index.html","03202412bb8c1bbb1951709e60410b9c"],["/2021/01/23/qttabbar/index.html","b6fc49b02164245cb4a46c1a2eca39fb"],["/2021/01/24/githubspeedup/index.html","42e0b31192977e8c15e9641edbd67d5f"],["/2021/01/24/jsdelivr/index.html","38523ba567184e0e54b5d4f3c0835c99"],["/2021/01/25/note/index.html","6b204a61614eb43a49835ec11a9d39c7"],["/2021/01/25/soul/index.html","95178d41270f3cb1e061aa7cab9d7113"],["/2021/01/26/herokuxray/index.html","edca2ad0920b817a35d89121e582ebf4"],["/2021/01/27/proxypool/index.html","b6c82d5d6b50fbd1cfacdf7b6efd4e3e"],["/2021/01/27/tracker/index.html","516d7175247a863184572c77c5fc5db2"],["/2021/01/30/pandownphp/index.html","028da7600e673b834593bc77817571a0"],["/2021/01/31/newgroup/index.html","93b39ed651998e9897d309aa54f017eb"],["/2021/02/01/clashlanguage/index.html","a20539cdb6e260b115cfe4cee29b4f6f"],["/2021/02/01/encrypt/index.html","ef8c010ff79f400bcae54addc4d1210e"],["/2021/02/01/footermotion/index.html","cda8ac506e536e0a797c200f646fc9a4"],["/2021/02/01/gitter/index.html","f15a91a377c5514222f6027ff29d3324"],["/2021/02/01/pixivtop50/index.html","391de6853bec2dd3cb0089a791f1f980"],["/2021/02/01/scrollbar/index.html","68325482b8c8bc4a97952eb97d971eae"],["/2021/02/02/clover/index.html","b5607e5d1548bcb52647f0b67e14d23b"],["/2021/02/02/maya/index.html","2f49e1b0a9d0bb583b615be8419bffa5"],["/2021/02/02/speedcontroller/index.html","07fad11d8211128a5a3a508d60ecb74f"],["/2021/02/02/yesmusicplayer/index.html","6e1bea3ba0cebe620cfafb353412a84a"],["/2021/02/03/lenovoonelite/index.html","beb0a0181728a4b18794914ad38117ed"],["/2021/02/03/skipads/index.html","de527bbd25d5052ad1310fad541a9152"],["/2021/02/04/picseed/index.html","119431a4be7dc739280bf65c8725b74e"],["/2021/02/04/renren/index.html","91330d68363a2c85d6499abd203e2505"],["/2021/02/04/serverstress/index.html","b5d2871b46207ab213b2c84431ce9119"],["/2021/02/04/wikipediazh/index.html","22f0c112c64fdecbb606c6b1f85cd2dd"],["/2021/02/05/googlevoice/index.html","baba90ea940ca810cca9baabff5fe0ed"],["/2021/02/06/clashconnection/index.html","2a369fa991a17f0428bc00b462b69387"],["/2021/02/06/gvtransfer/index.html","0017840b63c65432e58a21bb87f96dbd"],["/2021/02/06/todesk/index.html","014f33405fca327a0b583ed2152afbcd"],["/2021/02/06/vpnblacklist/index.html","f95f00bc834ea39499b3c38b13cbb426"],["/2021/02/07/mklink/index.html","f161786b5b89fdc7e2e6bed8dc5fe6d2"],["/2021/02/07/speedtest/index.html","af493f8b2c4e8186cc72eb63cb443842"],["/2021/02/07/translate/index.html","e55048a273456244800fd18edd39b2f0"],["/2021/02/08/ewomail/index.html","1e252922d755116678332ea238f6674f"],["/2021/02/10/officee5/index.html","9ab1f4e87b9bcdf915842dc49e3208b6"],["/2021/02/10/raidrive/index.html","02c84b26be3db100db38537ee03278f6"],["/2021/02/13/e5sub/index.html","59f6a8ad0d390b678bfe2e622a7b45de"],["/2021/02/14/screen/index.html","82b4aa4972064a12c1a3e8bf795c44e0"],["/2021/02/15/clashtun/index.html","4b248e96e88ffc988ab6da86fa200d8c"],["/2021/02/15/messageboom/index.html","e3a75ffe3343bbdda053cdf7c4a5b205"],["/2021/02/15/oneindex/index.html","ed408c2cc5c80e8eb525cc2a451107dd"],["/2021/02/16/govsites/index.html","257af66c4ccf5357a819ab6239e2a78c"],["/404.html","b29bc2a5c54fe169bb2fbee9bab9a311"],["/archives/2020/11/index.html","852b6ed47508579a576a0c62018934c7"],["/archives/2020/12/index.html","b6ded0c45b77d23cc66f46e028f9a5aa"],["/archives/2020/12/page/2/index.html","224e321ac852dbdb3256b705c6ebff0c"],["/archives/2020/12/page/3/index.html","9cf805bfe1aadd60736e8f833571f80d"],["/archives/2020/index.html","efdf5ed935e19cce588fdbd8985782e1"],["/archives/2020/page/2/index.html","f7671201a5d81f77459d5bff965f5888"],["/archives/2020/page/3/index.html","e7b4074db84d69a7208360e83c7189fa"],["/archives/2021/01/index.html","167e8440c5637a0e99bda53dd496f3b7"],["/archives/2021/01/page/2/index.html","9c1dac7bb591bd895a6c68adb9d9cc55"],["/archives/2021/01/page/3/index.html","23218d66ab937078a578cd513f502977"],["/archives/2021/01/page/4/index.html","6d0371117235ae5d547b008eb6c22a7e"],["/archives/2021/02/index.html","7cc90aa827feb769600ce6d4421f277f"],["/archives/2021/02/page/2/index.html","691b101c5054f8aeaedcab1b58b2d668"],["/archives/2021/02/page/3/index.html","632b3fe054a7a672e31452426b7cbe58"],["/archives/2021/index.html","e2589292d778a9834f95e01ceab5a149"],["/archives/2021/page/2/index.html","2abf5f4093de58d4526aeac252f2490e"],["/archives/2021/page/3/index.html","c03ed839e28b98bab078de1bc48e0f4b"],["/archives/2021/page/4/index.html","49fc9dc1b86ad45a46ac03932d7276ba"],["/archives/2021/page/5/index.html","5aab2976b359dc3d5e3a38aebe2bc8da"],["/archives/2021/page/6/index.html","b8acd54a002c8fac81ab5c63e29b63a2"],["/archives/2021/page/7/index.html","2f63f5eda0c3e2f9d453d339709be683"],["/archives/index.html","968496c0a740bf651d266c21975d84b9"],["/archives/page/2/index.html","eeb6ffeb1c7c05b431bf56e232d10823"],["/archives/page/3/index.html","1d9520e10f488bd7ad2c651591f3644d"],["/archives/page/4/index.html","2d13f65ef182075c1df61fd90e439ecc"],["/archives/page/5/index.html","298649b521f9d15ee833802da5e57d9c"],["/archives/page/6/index.html","e86bc91b36cef017b35e4a7ab64baeb5"],["/archives/page/7/index.html","95e0da5e7f1a620738d8a70f4d6341f5"],["/archives/page/8/index.html","7a8adb8d57fd3731b3fc6fa82ca95a05"],["/archives/page/9/index.html","ad649ce64439e289c18af996e9a02c2f"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","4e67fd360956d3c3359bda8adb0ecbdc"],["/categories/index.html","26fabb2238c23f8eb60b1014c69393b7"],["/categories/下载/index.html","459ba4ae43ee2993a020bafec3412fc9"],["/categories/安全/index.html","2a2518197ded7560c2495b32a9ae36b9"],["/categories/建站/index.html","f5124f791458e61e7483c7c6a49bf458"],["/categories/杂/index.html","ab3fdb4f0cffbdf71f72459d9df95c91"],["/categories/杂/page/2/index.html","264ad2c1ec104c729fe469249c381cf7"],["/categories/测评/index.html","8cb0ebe9453cfed105a5db6dbfe1f463"],["/categories/科学上网/index.html","c792518e545c1b738b268b021903aacf"],["/categories/科学上网/page/2/index.html","f8334f1a566e98ce5c5cb862d34141f2"],["/categories/编程/index.html","a11b18b05f6299a2bb0cc0266c8a7861"],["/categories/网站/index.html","5da8e9b74f22dbc7c491423c7a7978aa"],["/categories/网站/page/2/index.html","c3c4d0322113b2d986d87458f7537786"],["/categories/软件/index.html","dbc7e121a7be3ff55af08a148c80e161"],["/categories/软件/page/2/index.html","dbde33afe8e0909adea695817873d3f4"],["/categories/软件/page/3/index.html","b37ea3fa9ab3ae010809c53837367a1a"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","126673ef644daf0a86bdee35bef343bb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","3f42afbfa07d59aad8769b90aa84eb08"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","aaf9aae87769318c5363b5cb6a5908b9"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","ad6bf29505480521ffd2a7ff544975f1"],["/ios/index.html","0513c538ea9de4b81df62d08d0c7c0b0"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/2/index.html","0d7f43220aaa53493d299e18c0017901"],["/page/3/index.html","526e995ec5976bb7158408923dc774d3"],["/page/4/index.html","64e39cd48f973b9443d01008c1f87553"],["/page/5/index.html","02739160c27de1887218fdcfea1a1a03"],["/page/6/index.html","534e1eb9e1571c9d9776c8352699146e"],["/page/7/index.html","03d4797a5edd2fbc94caa09b91d77359"],["/page/8/index.html","3dda2a00e1f3d231f73620f8f8b06d81"],["/page/9/index.html","d3438da0c41c123e7d83f090a03c7b2e"],["/payment/index.html","97ac0138f7b721b09c29eb5e76052ce6"],["/privacy-policy/index.html","d6aab035ad1872ab136c543bbd4d11b2"],["/rss2.xml","46e79ad1b052adb30f6013f300d1d6c7"],["/search.xml","42d444d359e3c4c1f297dda2330aa5f1"],["/sitemap.xml","df77768f9de3b38cb0b8c215adfa6e3d"],["/sw-register.js","aa848322c22e1b50eb6a74fbf88a52f9"],["/tags/5t/index.html","c9dd6994616e6c45acabf4b8df4c2a77"],["/tags/Clash/index.html","f3364f6d7c10524f1d2de13073ffe563"],["/tags/Clover/index.html","2e681c96a2340c63b72bb4097c347096"],["/tags/E5/index.html","ec8d11df2b3099f7f3f791db69bf1238"],["/tags/FTP/index.html","8fcd191581cbc36549621740bf4822bf"],["/tags/GitHub/index.html","dd70156ad282705bcf8ab334ada8b3a7"],["/tags/Heroku/index.html","2e1388572b4b860815ad18bc276927f6"],["/tags/Hexo/index.html","99c6abd954281e7e576b079fc6036e85"],["/tags/Lenovo/index.html","45999af8378e8f799fea911b55cf2216"],["/tags/Oneindex/index.html","8c068e0f43c8c8bb48e236486e73d978"],["/tags/QQ/index.html","46084193b1239b2a1f6fd15b9b652122"],["/tags/QTTabbar/index.html","898e13119929469fa77108e51794e3a6"],["/tags/RX文件管理器/index.html","023d96511cf938019295f37416755b99"],["/tags/Todesk/index.html","9b68e090378e4de75b751b7723ee7de3"],["/tags/Vercel/index.html","48bc7e7c898a5bcf541a44d1af61e80a"],["/tags/ads/index.html","bc63b260e19c7e2533d40455cc91dd1b"],["/tags/api/index.html","6dffb5050731b17fb14395e482f6f1f2"],["/tags/app/index.html","6869cd47e4844a9042d6724a22c8e5be"],["/tags/blacklist/index.html","011d79c6e9cd21f54fe2f77c918c94e4"],["/tags/butterfly/index.html","7b852382c5bc786860c5b7f5123f5122"],["/tags/chrome/index.html","f7392ac3c8c96c94730d38d1ebe4241b"],["/tags/cloudflare/index.html","46a1cb7ea370ce4bcd9c3f08632788e7"],["/tags/cmd/index.html","a3dee10d9687a80f6251c8680e2e723f"],["/tags/c盘/index.html","e96fc0d6b697e5fa81adefbebd6155b1"],["/tags/email/index.html","c8222ebda8c7312c5c96bb6ce1dd99c2"],["/tags/ewomail/index.html","4d95def0e1c74fd2ed9d31c14102e1e0"],["/tags/flags/index.html","32cc082e2524772e485b1863cb0d8ab2"],["/tags/footer，页脚/index.html","ffff5ef9571b2fc6ec78e5ef4c3c01a2"],["/tags/galgame/index.html","4971cfbcb7b8c950a5b35021b7c4a1fb"],["/tags/git/index.html","797798e08afc75dc35dd67fce9e95e9c"],["/tags/gitcalendar/index.html","f7b3db5ac522f79db3ef4bdc5ab188c0"],["/tags/google-voice/index.html","8d90a1e0cce0fdf2f0090f8671aea4a6"],["/tags/gv/index.html","040192f88a4ebe418920021044d6629f"],["/tags/index-1.html","c84a4ceeee39da5dafb4ea85e1350c7a"],["/tags/index.html","cbd5120313655e79b60e66cec9f1f3ee"],["/tags/jsdelivr/index.html","ed567d4d3229917e690c6aa036838b4c"],["/tags/linux/index.html","e8429df978ed9d4069e942490f56da57"],["/tags/markdown/index.html","dbc01e924ffe2e1680b4401117c3d218"],["/tags/maya/index.html","8ef5695df1e51e90d2741d5321c7b4bb"],["/tags/mklink/index.html","2080a137b411bf0899a9de28b73f88d8"],["/tags/office-e5/index.html","bc0fce880fe2ae22974f10a2dc0758df"],["/tags/onedrive/index.html","6094fd40bafd579afdb9249b04520eda"],["/tags/picGO/index.html","614e2d92de0cdaf9ffb1ffdf11d5bf7a"],["/tags/pixiv/index.html","f25a2cc854b663e93cb5c1098e5cd2bd"],["/tags/proxypool/index.html","0a069436c0575574b1317abff602f2db"],["/tags/qbitorrent/index.html","291df1796bc963cb417bd00c385c6596"],["/tags/raidrive/index.html","824354b6907b90c00f2c603a66fd36d4"],["/tags/screen/index.html","4d033fbb6415f1b303bbf9b1d2a5dea4"],["/tags/speedtest/index.html","2a6384266c413fd8f281f146dd963433"],["/tags/tap/index.html","8da545ba5e95b55831a650a9e2659192"],["/tags/top50/index.html","6f7ef8cef5aaed9beb3ec7d8077a82af"],["/tags/tracker/index.html","f515e254d4f0f52044f3fe5b0182f01d"],["/tags/translate/index.html","f8ae7018db7996655611b7c1a5d5b045"],["/tags/translater/index.html","1d67e3387526b85cc57248d4b86c71f2"],["/tags/tun/index.html","8e130ac8c9b286cd8832ee9d1dab89a6"],["/tags/v2ray/index.html","e74f67d628e664037759ae6cb3a68f06"],["/tags/vpn/index.html","afc181dbbac724a0dd98497fe439d3d1"],["/tags/vps/index.html","421d61ae9d5997c59688bce9e81ffe42"],["/tags/windows/index.html","aee82e47fb19110999553ccfba411009"],["/tags/windows端/index.html","c9d10e04a2305f48210e5ca6ebd63587"],["/tags/xray/index.html","77454c2649c223210c55c59605595b7b"],["/tags/下载/index.html","fc7b6bda7a7d74f4e800aef4a0493b43"],["/tags/不限速/index.html","c2f20a707df515c8fb52f419b1981e2f"],["/tags/个人网盘/index.html","906d8cb0728c1f0ccbe1c7b7b9a2eeff"],["/tags/主题/index.html","248fe1a43587220df37a0d454c43c8d0"],["/tags/云便签/index.html","eafc63b9cedf2baf761ea530c977ccc2"],["/tags/云盘/index.html","06f1f758296cef574972fe9247fac88e"],["/tags/人人/index.html","36c8691b76b6b92af8fceafbd899302d"],["/tags/代理/index.html","0ac6fe390585f85715e603a8092f5248"],["/tags/代码/index.html","6dcf7421944e3589d1a6d5e6110308d2"],["/tags/优选IP/index.html","48f73f374bb0b1d150486fb0aa7b88b4"],["/tags/便签/index.html","28858bfa2891130d9dda69ece980f288"],["/tags/保号/index.html","fa01748021f75883cab900226005b50f"],["/tags/免费/index.html","10c207cd62d41f581918c7c297b85b89"],["/tags/免费节点/index.html","04c470d01be364a5fd0021ec74e677e4"],["/tags/加密/index.html","6648325a0fcce26fead6f6e8aa3dfb06"],["/tags/动画/index.html","da1552eb877705c92ac3456dc148518f"],["/tags/博客/index.html","ffb920de48f90e18d5ac1f19e6a21322"],["/tags/历史记录/index.html","383f09aa59c5a15b9e246a265270a3ad"],["/tags/压力/index.html","26782f4366fe503dd785754232220a6a"],["/tags/压缩包/index.html","195e0682ccc16d396cec83870b40001d"],["/tags/反代/index.html","645df4a10ea307503543ddc4a9bc7aaa"],["/tags/可视化/index.html","cd2cac40eac38995efe4112b98baf8cb"],["/tags/命令/index.html","d3d0f8c67f672b1d58d910d578b864d0"],["/tags/国家/index.html","848c8a8fa1be8fd353ef3036af91762b"],["/tags/图床/index.html","dfc42645e431f3a7007b97ab49bd83f7"],["/tags/图片/index.html","956241c980b44b3be015c579dde5961b"],["/tags/域名/index.html","1aa74978d1909e29728af31de10a4947"],["/tags/多标签/index.html","bed2112184d31ef300967c8418c807f3"],["/tags/存储/index.html","da87eaf508fc5143278937abfd4d4875"],["/tags/安全/index.html","ab8fc78427fc40ad482d3bb1b7a98914"],["/tags/安卓/index.html","990d0c63aba86d7ee95946bf7d28c08d"],["/tags/宝塔/index.html","10cfee9673fa68e84d3c7558be1c4143"],["/tags/广告/index.html","1e9f729596b617eeff3c7b42cb281ea2"],["/tags/建站/index.html","e5348dd7db75182839e88d1b13a7493c"],["/tags/影视/index.html","4e08d36242890d515b86735e6eae9a59"],["/tags/快速启动/index.html","0bec0e34f3c2e0b452de9538320f4690"],["/tags/手机/index.html","330f6eb4b99ac5df3d7073864aac45fe"],["/tags/托管/index.html","f5dd09cdd26ae2d189fb660753fad52b"],["/tags/抓取/index.html","648bf36f510a8d9a336e5909013e1971"],["/tags/投屏/index.html","bdb4645eab7b3480854493bf9cef4a7a"],["/tags/拓展功能/index.html","b5320b0aef259a1539981363c8319978"],["/tags/挂载/index.html","d04d0a763d58e06bc1cb5b5413c68d31"],["/tags/指纹/index.html","28f6a249149ee5e0b459d27b0fc8883d"],["/tags/接口/index.html","e71ab0b345af12bae59b165ea1549855"],["/tags/提取图片/index.html","b9a74248fb511bb879283589d40a5735"],["/tags/插件/index.html","485873ed87a7a6acf945139b25d85144"],["/tags/搜图/index.html","72789bf896d2ed2990e7a670683eac36"],["/tags/搭建/index.html","fe64dfdbf7e4ba8504bda5c340716f2b"],["/tags/撤回/index.html","80c28f0cbdfc37f944bbe8148ec051be"],["/tags/播放器/index.html","a485a087f19d6c8925e099031bff1758"],["/tags/政府网站/index.html","32be719b629a78725b9d9b58cbc21587"],["/tags/效率/index.html","94b6aa344939cc2b4c9817be66877fb2"],["/tags/日历/index.html","4e96873562b63fbcd6300f32c054f48a"],["/tags/服务器/index.html","4530fc224ad3acb67c7dd011e46f1312"],["/tags/桌面/index.html","4adecd4a9ecd9546c008e1d32558b349"],["/tags/梯子/index.html","e4d98c5c53faa175f15df9517b5d95eb"],["/tags/检测工具/index.html","864389807fcc3c52a79271e6eea239d1"],["/tags/汉化/index.html","9c22aa866b6628e020afdc2dcf71fbf3"],["/tags/测压/index.html","585a4b76d019a1bc321f923521baa79a"],["/tags/测速/index.html","7f0f40f98ac27b4c7ae80cf9e95251ad"],["/tags/浏览器/index.html","4f0e7013af28ecd948051e8288ccd30e"],["/tags/清理/index.html","2a54ee10f2454bb385ec58230f21cb38"],["/tags/滚动条/index.html","a3f8e252b1b47cc3dc1b9bc8faf56a3f"],["/tags/电影/index.html","2e97aea7542f3f800571fcf698a0a7df"],["/tags/电视剧/index.html","468c61a28fe0ce04bd070b7bf7b77596"],["/tags/白嫖/index.html","8555b45e0a72577d64b8ef5bba2ed6f7"],["/tags/百度/index.html","95f4ae8fae643839bb7134b6e64be33b"],["/tags/百度云盘/index.html","7beb891e4cc1b039d2e36d56093f6bff"],["/tags/百科/index.html","e768604b07c8070cf3a09750e7335788"],["/tags/短信/index.html","5b0c615a498500f2b0ea0fcd4b66582f"],["/tags/硬件/index.html","cc8903cc30305b4570b3b104725ed531"],["/tags/科学上网/index.html","d33f27ff7bd485b94c34f78a4e63ca09"],["/tags/空间/index.html","ca706ad70ab8fad8338250e38b8c0449"],["/tags/笔记/index.html","8d0131b2012e97d98980d2e313f43d1b"],["/tags/简洁/index.html","08e159e2d52ecc3aacd0d17fcbd4b55d"],["/tags/简约/index.html","07ddd1d828296bf6789f85aeecc2dec6"],["/tags/维基/index.html","bb7d0155198fc621b9f0e1bd6ce760b8"],["/tags/网易云/index.html","831f248a24cfea74ae5ece68ec2e1b4b"],["/tags/网盘/index.html","aa23994ff84aca6fd02225b2837a0723"],["/tags/网站/index.html","1aeaded2e400f81fbac923448bfd7a95"],["/tags/美化/index.html","8e5e8e3c19ff9957bb3aed3a8ea9f05d"],["/tags/翻墙/index.html","38930482c7b241eb71695362accbfb9b"],["/tags/翻译/index.html","957f0e72aaa3de5bf8dcff37591e7252"],["/tags/翻译器/index.html","a999ecc5403e6f7df517e6d9f000e0da"],["/tags/聊天室/index.html","1255463464e11b707ce10eace19bc787"],["/tags/联想/index.html","9860375027646476fb93537816232f70"],["/tags/节点/index.html","6e0cc7be9475ab81bc38a7ed314dfc66"],["/tags/虚拟手机号/index.html","7400d9fcac282059349e63bf5712c713"],["/tags/补丁/index.html","b1c1b5c81e1bb43139624c3de6c495f6"],["/tags/视频/index.html","57d8b166f0160d927463394f44e4bd12"],["/tags/解析/index.html","0eb3e569264611303b9938a88a7cc139"],["/tags/订阅链接/index.html","01fb81c03c31e94a509a05f4b82783a5"],["/tags/记录/index.html","a20af5578c6ce478b62693276d7d8c6d"],["/tags/识图/index.html","fe0d6c7c25f4e723d269a661e8296619"],["/tags/语言/index.html","138b9fa54b742a8cc2e639a794201d03"],["/tags/资源管理器/index.html","861a336363c1130b36d97b4a224cdbf1"],["/tags/转移/index.html","209e5036b9c1b986382304bd07c7a091"],["/tags/软件/index.html","8fcecc0613f92648e58d2c3953423082"],["/tags/轰炸/index.html","dd7a86016ba1fcad15289816fc4f5a10"],["/tags/远程控制/index.html","c8cbef2473431cb54e29ebedfa2806c2"],["/tags/连接/index.html","760beaf847d8e08f84890729583f2c4d"],["/tags/追踪/index.html","842f1dba28d34a36947d4b72e1269a1e"],["/tags/速度/index.html","1aec2ba96fdadac62c6de157a1e284df"],["/tags/邮箱/index.html","66badb439599ada55143a6016706cc77"],["/tags/酷炫/index.html","6ea6eda21b6fb1758a50ed3fbd973b0b"],["/tags/钓鱼/index.html","36d6d9fe5ef3a7f5d7e271b95092ef6f"],["/tags/镜像/index.html","e2fb145f0e3b1c5b17dfb3f8e56efa65"],["/tags/随机/index.html","870162a1a39dde08c66f334d0d356fbd"],["/tags/隐藏/index.html","d0e8d00c5c7e695cf570de05cd4c6daa"],["/tags/面板/index.html","6ec98cb4ba8e98f0ddef62babf7e396d"],["/tags/音乐/index.html","21407d6f7fa9a8e2a46cbf91edcca4b9"],["/tags/高颜值/index.html","fca5492adaa898d6d8d9a3d15b056752"],["/tags/魔改/index.html","c0be3a0bcae07f2840180e045f11bb3f"],["/tags/黑名单/index.html","96d0954fb57f797808faf6fdcdb60bda"],["/urls/index.html","98a6cccc8b41a09a2fc2606d46a3f092"],["/vps/index.html","0c14349647a51cf18b97b3ffbf997cb5"],["/支持/index.html","b586f41bf7a6324e41a603683eacdb76"]];
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
