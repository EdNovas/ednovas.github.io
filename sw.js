/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","e5006bcf81f96858365b7acd58449753"],["/2020/11/29/clash-windows/index.html","b75c2b5a5f5889497dbc480198c81eb1"],["/2020/11/30/websites2/index.html","3e7d6001e32a94a155fb69ea3c25b0aa"],["/2020/12/04/iphone4s/index.html","988f603f4e5f15e70fd0e152bafd5df7"],["/2020/12/04/onenote/index.html","b3fa1349bd19956b90c2565bf49fc36d"],["/2020/12/04/wesites1/index.html","a7352c381223733680875a4943a22883"],["/2020/12/06/nokia808/index.html","5bf547734593cdb114bcc8ba8ab0e32e"],["/2020/12/07/ipad1/index.html","5c15779f6048458891c16876c3196f8a"],["/2020/12/18/freesubscribes/index.html","51c2e201a0524d2809cf6fb6dcf6f6e8"],["/2020/12/19/musics/index.html","92f425c5317a784942398565094f31e7"],["/2020/12/19/shadowrocket/index.html","7e6f166fad5e59cfb626d5de5b5be443"],["/2020/12/19/v2ray-windows/index.html","b222711471b9dc752b12803552fcf1f8"],["/2020/12/19/v2rayng/index.html","0eaf5a4c6ddb982976d853e3658810e5"],["/2020/12/20/beoplay/index.html","0cda1a21fb3996070a59907c53b28941"],["/2020/12/20/订阅链接转换/index.html","bce9bd9bba4da57f6c87491a0dceca3d"],["/2020/12/21/chrome浏览器下载提速/index.html","a71dc6ced3191e542f69554a431a3334"],["/2020/12/21/免费128线程并发下载xdown/index.html","469a666aae782a9bae150aac6bbd5e31"],["/2020/12/21/免费32线程下载软件ndm/index.html","5ba4a825960ed7f8728135c3ef4d1b99"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","fdbc0fee96482585ed01bda76a88d5e9"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","374efae25688eb8e370596cbb46e091a"],["/2020/12/21/广告怎么知道我在想什么/index.html","13768162a6183c7e2de0fc92a31f11ad"],["/2020/12/21/无名·引子（小说试写）/index.html","2e0ac198c9f99c14312864583c59639a"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","fda4e59a06cf16aae1ded9f618c6337f"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","f94d9a3b718d52915dbf02b8416a123f"],["/2020/12/21/高速轻量下载器aria2/index.html","d45d24d7c5d2c37c596926907bc61852"],["/2020/12/22/2020-cee-roo/index.html","5a70b96906171bbd8ed28f549bef7c68"],["/2020/12/22/firefox插件、github、steam富强/index.html","22dcad2b2af798d53ace27c7cbb1f20f"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","c21183b2bd7d408830499d2e7e5201ed"],["/2020/12/26/python-day-1/index.html","28e0d9bf6ec27ade1963372239da2829"],["/2020/12/26/python-day-2/index.html","b2f5bf303460f1bfccfb9efc86dce3bf"],["/2020/12/26/度盘不限速下载方式一赏/index.html","0e78fd104f495df9e5e586a63d2b9df3"],["/2020/12/26/添加开机自启软件/index.html","582b5705c5107ddfbc813b64e71723b9"],["/2020/12/26/电脑端截图方式一赏/index.html","a86801e9fc27be822b58c43ef536b32a"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","d24694cf5733b7c07ac4c9bfae842553"],["/2020/12/27/最安全的浏览器tor/index.html","f8fcdf29c776ea7313d748eaf1203be0"],["/2020/12/27/网易云刷等级和听歌数量/index.html","21c9640fa167747c8b1f77cb783af1b1"],["/2020/12/28/freenom申请免费域名/index.html","238af59dae6170c46451042448980352"],["/2020/12/31/机场/index.html","10b06769d56fbc4b8bc07ef3505b7c1a"],["/2021/01/01/M1/index.html","15e7e5b7c64bdf648c643b49e38fdbe4"],["/2021/01/01/compress/index.html","84d13901dab7799cfdf46940c5699efb"],["/2021/01/01/infinityfree/index.html","bbf8c01df83eec7221a669159e42bed1"],["/2021/01/01/硬核翻墙/index.html","63ee2883b3ef51182175b2108de1e724"],["/2021/01/02/qq/index.html","00fd866fadb183ddae3be140d1481eb8"],["/2021/01/03/netch/index.html","7961249487e14b083e49903335c382fe"],["/2021/01/03/waifu2x/index.html","5153b39994aa4802a57e62fb7ccbb104"],["/2021/01/04/ads/index.html","0295a1a155b864e7d07a00de191d3667"],["/2021/01/04/games/index.html","14f20e1e42c26dd61176d73ab6eaef6a"],["/2021/01/04/heroku/index.html","d60e2fdb50348b002940d47d2698fb8e"],["/2021/01/06/movies/index.html","8f15ec413b35ab86c976115f8d2d7035"],["/2021/01/07/google2020/index.html","a42d7a7ffbee328165da0e299b5a8387"],["/2021/01/07/lucky/index.html","4a41f63d421a2bede51e7a4c789cad28"],["/2021/01/07/spotify/index.html","5b368899f167b07b7481780ef7ef4776"],["/2021/01/07/thunder/index.html","d80b81580b0e4abf569401af30d187ec"],["/2021/01/08/adguardhome/index.html","09192358730c2dba77065a1e857a8b46"],["/2021/01/10/IBM/index.html","e41d67f76416855bfcc3681b5d1f2913"],["/2021/01/10/potplayer/index.html","e25851d5efc3fb69f682542c0d2f54a7"],["/2021/01/10/sakuraanime/index.html","00ad7d41b2a1e9b2b1670dc187536c7f"],["/2021/01/10/美剧星球/index.html","e9d62d31dada3385b55e35b71921fe8c"],["/2021/01/12/telegraph/index.html","aec175a8d2f4e64bbbcb496e5b402cba"],["/2021/01/14/comics/index.html","153d8b09138d103ea5397e21485be231"],["/2021/01/14/ftp/index.html","06939df21bdf9ae4da853cf6f527d30c"],["/2021/01/14/oraclecloud/index.html","eedc9a093a3cafbe3b39c0b3db65b155"],["/2021/01/14/porkbun/index.html","182f0acc861a018dd4899c03b0cdd5c5"],["/2021/01/14/powertoys/index.html","fd5a0ad67706ba5b987193d33940ee32"],["/2021/01/14/taptap/index.html","83f0242d64c99a4b53721000e27121c8"],["/2021/01/14/ubuntuvsftp/index.html","44fca683e46cc82c25390f4bcdd5749e"],["/2021/01/14/小说/index.html","4ec07a62de01d66d2b18a2cd5a835536"],["/2021/01/15/freeproxies/index.html","e3c0263f876c64739d3ea68f551ab429"],["/2021/01/15/incaseformat/index.html","0d5a245ec2aace52396a801018f0c550"],["/2021/01/16/euserv/index.html","1c9cf5ffa40ddb4e3a9395f01ca9a355"],["/2021/01/16/winxray/index.html","d723c61eec36519d549f4e48c68a4050"],["/2021/01/18/qqreadhistory/index.html","db1b3023c137d023bacf8e8a23f10fb7"],["/2021/01/18/qqrevoke/index.html","6f9b903fbde1650cae48fdfb4d389d35"],["/2021/01/19/freevpn/index.html","cc22efb0d5ecc327e1256f08733746bf"],["/2021/01/20/browsertrack/index.html","75b6730d3b1c29f617a091ee364c2374"],["/2021/01/20/v2ui/index.html","88387c115823beef2dc60ab4a8e0d6ed"],["/2021/01/21/failedtoconnect/index.html","f8cdfdd694b1bca464209db559e5ebf4"],["/2021/01/21/gitcalendar/index.html","4a5a8beca2ad44b2bb8d45b871ab21e4"],["/2021/01/21/markdownformat/index.html","c4679fb41d2a6f50d0955cd466aa5655"],["/2021/01/21/markdowntable/index.html","d4b874377e780c206902fc17294fba6c"],["/2021/01/21/vercel/index.html","93bd357a82d2abb17ad63535aa5b7659"],["/2021/01/22/hardware/index.html","24d55030ccd0da3b7a52b22e0ed15f80"],["/2021/01/22/muviz/index.html","b864fcfbf9f34810455fa79ab6caafdc"],["/2021/01/22/randomapi/index.html","f56e29e5f74c3bdeaacf0c9144c80698"],["/2021/01/22/searchimages/index.html","fb5b8f623f28eb3544a535ef2f74f87c"],["/2021/01/23/RX文件管理器/index.html","f6784c419f7fd99bce85efba55f103b7"],["/2021/01/23/chromeflag/index.html","32688979cc97bbd23c502f5d3a6f798a"],["/2021/01/23/qttabbar/index.html","fdbb83c632880f56489df01eb2d3d4ba"],["/2021/01/24/githubspeedup/index.html","8c877e76d435a51ebdcb62a59296f888"],["/2021/01/24/jsdelivr/index.html","a55e2450a5c9e0544db8e98f810b1cb2"],["/2021/01/25/note/index.html","fd11f1125fee7b0e034b54c46e47ab8c"],["/2021/01/25/soul/index.html","1704900f1b71c152cb2de245942d6f9a"],["/2021/01/26/herokuxray/index.html","5d237dee3afb3cc13a85b0babf77ef2d"],["/2021/01/27/proxypool/index.html","77d09476fb44694d22521c7fccd26f73"],["/2021/01/27/tracker/index.html","7dd0637a6da12e64c113437fd6c3a7dd"],["/2021/01/30/pandownphp/index.html","d2b413b62bf75f1cfaf0b9547d99ba68"],["/2021/01/31/newgroup/index.html","b281d8bb8311a3af34037a8018f3d4d2"],["/2021/02/01/clashlanguage/index.html","ba76237da104ca77ec3851579511cb29"],["/2021/02/01/encrypt/index.html","a4f9508f403027cf22ddbdb0f062e5d7"],["/2021/02/01/footermotion/index.html","68756abf21f5835be4f5d370a539bd2d"],["/2021/02/01/gitter/index.html","30c8c71c3c35cc8892b09ab8ff984bfb"],["/2021/02/01/pixivtop50/index.html","152a97755455d7033bb6affe424d8d10"],["/2021/02/01/scrollbar/index.html","c57bdaa7351404d4bc7d8dd49b3bbc90"],["/2021/02/02/clover/index.html","9b20dad4cff15603219aceb9c8edcb7d"],["/2021/02/02/maya/index.html","b3aeb039f3b8ecc2373fbeacdff9a5b3"],["/2021/02/02/speedcontroller/index.html","bb37dc8b341dacad1ab33e4765e4845a"],["/2021/02/02/yesmusicplayer/index.html","2d9940968ac52d9e5ef43aad8816d678"],["/2021/02/03/lenovoonelite/index.html","7def106571e068ec7da4f318f996f30b"],["/2021/02/03/skipads/index.html","617c36b512f1b5b509741effd0c8ef5b"],["/2021/02/04/picseed/index.html","51e242571030f99f3d4b7dec836d4564"],["/2021/02/04/renren/index.html","42af7049576ed36d72b14731049430f0"],["/2021/02/04/serverstress/index.html","9422fb1cd72171725ad081daeebc40f4"],["/2021/02/04/wikipediazh/index.html","dc4c3c42a70452a7ead6a35ab691ab45"],["/2021/02/05/googlevoice/index.html","1098e3b2e5c18358c7a6abe3ebba60ee"],["/2021/02/06/clashconnection/index.html","2e21b8b5c178fa73fb4b36556b177ead"],["/2021/02/06/gvtransfer/index.html","0f8e4aa05e3d1b3337dcf5987cf1bec0"],["/2021/02/06/todesk/index.html","7a079de7cee41392dceac04d8f8f482a"],["/2021/02/06/vpnblacklist/index.html","13094046b82009d9c44ef8190a563418"],["/2021/02/07/mklink/index.html","0ef4922771ef01cb1fad2a228e8b816c"],["/2021/02/07/speedtest/index.html","349618478310dcddc42373dbda2634c3"],["/2021/02/07/translate/index.html","389bf7911e5f168394d676950d4d8f4a"],["/2021/02/08/ewomail/index.html","20b9e0a2b8094ad5b62508c07fcddc79"],["/2021/02/10/officee5/index.html","814316bcde19dceb865d566cf3bb8f04"],["/2021/02/10/raidrive/index.html","0f8efea9f0f8d5e68ba7026a8a701cd6"],["/2021/02/13/e5sub/index.html","47c2882cb80ca526d8ab0f65c428dff7"],["/2021/02/14/screen/index.html","16125955cd5f9e206fe3e24afd0cd781"],["/2021/02/15/clashtun/index.html","41a7e580e4936c0dfc71672a9950ef66"],["/2021/02/15/messageboom/index.html","6cbd6278bdf9dcec4f31796456a3aecb"],["/2021/02/15/oneindex/index.html","6e3c8c0ec0216dad18a1289c7b4e0698"],["/2021/02/16/govsites/index.html","a31aca33e89f9e2f7212a2b5bab128c1"],["/2021/02/17/hexototypecho/index.html","936eb282bc98dbef67e5f664de8b2333"],["/2021/02/19/fiddler/index.html","b4cc25e2628d73604dc3d3bca53d7050"],["/2021/02/22/potplayerset/index.html","89a60792ca1d656e528a6564e65c75e7"],["/2021/02/22/studyresource/index.html","0d9231a457247e557c2bff42e61a4a5f"],["/2021/02/22/telegram/index.html","53d10734309f51938c644dadfe83b6f2"],["/2021/02/22/videos/index.html","bffe241a37de79aeed16957b25d1a61a"],["/2021/02/24/mtproxy/index.html","6d18542268eb815651787fac03e07877"],["/2021/03/10/neteasemusic/index.html","05de1e181e03298a2ad62a57a2c941ca"],["/2021/03/10/surfboard/index.html","5178769c01b5ffeb1298aebb52107a83"],["/404.html","baf421e3566f24adca48f98fe539ff4f"],["/archives/2020/11/index.html","70c3c064c319077b4357237ca4c7a3cb"],["/archives/2020/12/index.html","0f668c3265cd257bb96b99bc50c20963"],["/archives/2020/12/page/2/index.html","c003e7559e7c27edaf5d47764130ec88"],["/archives/2020/12/page/3/index.html","c5dacc791477f68e89c2596107975c0b"],["/archives/2020/index.html","620d5e38b8659078ed1b70a2ba82237f"],["/archives/2020/page/2/index.html","a9938161136a86ed2804d71cb8258e04"],["/archives/2020/page/3/index.html","fd1b3083052b435531549d2a01d1d27e"],["/archives/2021/01/index.html","796adab3ff13c7040bcb925b1758f501"],["/archives/2021/01/page/2/index.html","e07c3416aa8ab14284ac6b1b659b2e2c"],["/archives/2021/01/page/3/index.html","bafa70e1a1977903153c45914b2758a9"],["/archives/2021/01/page/4/index.html","9f35d0167ad01e6e42629450b69c4b9b"],["/archives/2021/02/index.html","d958bd0c8d033bcd41ddf1ecaa42c326"],["/archives/2021/02/page/2/index.html","7da1ea049d8b6130fcaa1a5fef070624"],["/archives/2021/02/page/3/index.html","f6477329e95d87ac81426970be7b7662"],["/archives/2021/03/index.html","49ff6dcd279bcaeb1d616103bc36b116"],["/archives/2021/index.html","1649257f3f0a9b77ae392a0fcc6d5530"],["/archives/2021/page/2/index.html","3cb5e82c25eb0d8f4715d37766ad0e94"],["/archives/2021/page/3/index.html","1b7cd14f5829df263c6d664d3900a67f"],["/archives/2021/page/4/index.html","a0f45078e7c44809253a332b3d7e825c"],["/archives/2021/page/5/index.html","a12f5c37c11517ca70970037441c8e33"],["/archives/2021/page/6/index.html","045ee3d727831954cc2a0d5e2e7e11fd"],["/archives/2021/page/7/index.html","87d972a0baa9cef0760af2f24fd85241"],["/archives/index.html","b943ed4ab2050a589d553cfa812d6379"],["/archives/page/10/index.html","0d6c50215810a8dd22cb4bf50e858307"],["/archives/page/2/index.html","ea9795ad598bb9c3aa9b48b08cb84aac"],["/archives/page/3/index.html","0f4637ade4ed345184b994b63ad51ebd"],["/archives/page/4/index.html","b561fff5d96e9271d0727e5179ffab97"],["/archives/page/5/index.html","5181426de32f8b4920f00e19efd5c2a8"],["/archives/page/6/index.html","2048fd742968660839dbbf770e622b48"],["/archives/page/7/index.html","561abf59d7fa939b999a318e3d8f6290"],["/archives/page/8/index.html","96ea87dd5bb977fd07fc6ec5e4530ec1"],["/archives/page/9/index.html","775152fc21b06adc5b85b8866f8b0711"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPN/index.html","8247a18abb716aa1166a48ad4444786a"],["/categories/VPS/index.html","07ce0b4eb9a5aa124d392f843ae9258a"],["/categories/index.html","2d88a7a3c8b8b57f337e7215c3e228b0"],["/categories/下载/index.html","00655292101fd57afaa1206cd10afefb"],["/categories/安全/index.html","f844d8b999b061e29ad247216725653d"],["/categories/建站/index.html","aa1f6a08467006006683e7458da78db7"],["/categories/杂/index.html","1c40bd6092768f6ed8230463043c6ea2"],["/categories/杂/page/2/index.html","b2336ff8fb122ee9af73234d0498a25c"],["/categories/测评/index.html","c46f5888d9ebed835e92f09f1b713d6b"],["/categories/科学上网/index.html","2208e6eda57bfdba952b3652eb5b058f"],["/categories/科学上网/page/2/index.html","49255f5ee2b28477e909684bf8a94d68"],["/categories/编程/index.html","7d28a047654abd6a7dbc143ffa013a96"],["/categories/网站/index.html","ea1fab3a371bd7d35060328e88d6b8c1"],["/categories/网站/page/2/index.html","3a5bd23ab77bc7abe441ca2b9a3f6694"],["/categories/软件/index.html","a37a6759bdb3d4d30a2f554e14283d57"],["/categories/软件/page/2/index.html","98e87c37eb902a06ae0e39ded05f8eaa"],["/categories/软件/page/3/index.html","e490f2769a4b774851aeb8cd5fb1a689"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","2f45a37748da87d1b422a95ce17d4a84"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","1fecd28d2d5270b7f0c288391b4aae52"],["/ios/index.html","c17eb49b76ba3066d72594defe2b78b9"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","be977ecb8bead5d6dea8c463607e1c91"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","233f93a4cf22dbba95c7a3e726eb9211"],["/page/2/index.html","0c87cc5ded075441ae2c2b14794d650b"],["/page/3/index.html","a882017b60a9fa1870a022fca7be61dc"],["/page/4/index.html","9655a46bc7403598a07d9708cd737056"],["/page/5/index.html","54ffdcf4985f0b3be33d8a30e24911e2"],["/page/6/index.html","a51c0047a38245af9dfd1a621feb53da"],["/page/7/index.html","83acbac160e9c5952b86b5b851229bf9"],["/page/8/index.html","45b2d398aaa3259a0422161e1f03f073"],["/page/9/index.html","2cfc91827b5ca6cf6cc0ef40b33c0113"],["/payment/index.html","104bd95a5f1dd6d99db42ebd136ddd9f"],["/privacy-policy/index.html","591549f7a6585d4fa70eced258e5c042"],["/rss2.xml","4329bef6c74f44afce45531816ad6fed"],["/search.xml","21d3b04b463d9eaba57d1293a33f4f5c"],["/sitemap.xml","e84bfa2dc59265d6e4ad3247c1daf698"],["/sw-register.js","976a0f6710c9b348e6631d80f5561e84"],["/tags/5t/index.html","4610d5a24c71da2c5cc0c8edadcd862a"],["/tags/Clash/index.html","6a1cb72d2c3ddc1ce3560c77003df489"],["/tags/Clover/index.html","cb1984b234b642b6992efd577066d54d"],["/tags/E5/index.html","f912a813c42d55e59c135753fb078431"],["/tags/FTP/index.html","a9d5e549d3c9e26dfcbf4304420963aa"],["/tags/GitHub/index.html","ec74f250e9373531951b89cef1a5a9a7"],["/tags/Heroku/index.html","0c1ad1f368cf40b2cb2dc6e417c87da3"],["/tags/Hexo/index.html","692ed6beaa5faec0fd0c96415b8d5983"],["/tags/Lenovo/index.html","62f0eab7d38349da641a36661ba8d25e"],["/tags/Oneindex/index.html","01678d23f2fccf4a34434fbcfccb1ab3"],["/tags/QQ/index.html","755e585a271e6308d675ea5e14c91c6f"],["/tags/QTTabbar/index.html","edd1d298b69a716fc4f09d41017ad284"],["/tags/RX文件管理器/index.html","18169fbd91be9bd84ca13e0eb3d83d4c"],["/tags/Todesk/index.html","b409688acca246ea9ea1ed6ce6b08b97"],["/tags/Vercel/index.html","446c8c581dcddc02b81431ef9ad689f9"],["/tags/ads/index.html","20da3c60a60962d5375bc02ced188fef"],["/tags/api/index.html","76394c5d87e81bf01ec4da14221b70c0"],["/tags/app/index.html","32c3a00f0fde9ea9142d31f873b3ce18"],["/tags/blacklist/index.html","495cd7fa1be1134a28ef9a3178eed7bc"],["/tags/butterfly/index.html","9642dcebf7364a980291b4b881e35210"],["/tags/chrome/index.html","aa12fb9e51c2db94034b72205161d500"],["/tags/cloudflare/index.html","c8f3a8e6888ecedb4338d9aab8ee8cd5"],["/tags/cmd/index.html","20aac6fb93f21b8b88d1bd33e98fb64c"],["/tags/c盘/index.html","6c7dca9716d1c82f2328d9bc5b40af3d"],["/tags/email/index.html","5a2e841fa67f0a553d640744796600fb"],["/tags/ewomail/index.html","aba71fe2cb2a706795588e2a41566d02"],["/tags/fiddler/index.html","f5a5b90d141a1358e9182f0a390714f4"],["/tags/flags/index.html","7db2ee82baf7d3260f39e8d49b08f915"],["/tags/footer，页脚/index.html","9886e17ac7a09f4fb3e2f6813c17b5a6"],["/tags/galgame/index.html","d748ed958bca7ba415ab2c2fbb68e004"],["/tags/git/index.html","58a090119c4590cb724d719f8bcf2f69"],["/tags/gitcalendar/index.html","145cbf63aa3542a2f0d69bfd785a6bf3"],["/tags/google-voice/index.html","ba922cdd22e743c0b8baa2e8719c9e59"],["/tags/gv/index.html","cd67a0e4c654dcd19fc9e2dd10821aa5"],["/tags/index-1.html","9ebcc2f6d3fd524966efcdacbd29ac8a"],["/tags/index.html","b90a93d4b10d42ff037db1e3119ef65e"],["/tags/jsdelivr/index.html","be319c6061883883f05be6e9dc299f97"],["/tags/linux/index.html","54c4e76aa93a965df8873a1556636e88"],["/tags/madVR/index.html","5d07ffaeb6e665ab27d1fbfc083ec579"],["/tags/markdown/index.html","b557ff83daeae5eeef144d8f26666a0c"],["/tags/maya/index.html","84bf5268649357c27e91303b2e2d053d"],["/tags/mklink/index.html","c60d0085d8289613f961c8019385a1c9"],["/tags/office-e5/index.html","5d6eb0933dcc5a064cacf54f7e2fca24"],["/tags/onedrive/index.html","b714c98df62900a8eeca708473141b89"],["/tags/picGO/index.html","2bbdfd756335356848364f6b60eeb1fe"],["/tags/pixiv/index.html","605b8f9d9621e25b714d67326b514668"],["/tags/potplayer/index.html","b2f81194348705f922cde832c69f2938"],["/tags/proxypool/index.html","b0c34e2bd52c8b3c5a5925087ce8fe2c"],["/tags/qbitorrent/index.html","647f7342f5d3505c677a578034b153f0"],["/tags/raidrive/index.html","78f6511bac5a4dd53d1420bf5db0b2ca"],["/tags/screen/index.html","5d23c9a84beac896995719a16b866a13"],["/tags/speedtest/index.html","4c55e8fcf9e6abb708a3213801049562"],["/tags/surfboard/index.html","6f8d8db061165064bc9703b653159112"],["/tags/tap/index.html","d2e7047d5ccc6e3a43b03f9b8ff579f9"],["/tags/telegram/index.html","1e0c7bcd74c825315dd4859218d93010"],["/tags/telegram代理/index.html","d34149d422a08e5dc610c63f1e07b030"],["/tags/tg/index.html","1c60cc0021fe5097c92f794eb7c49d10"],["/tags/tg代理/index.html","2fde40ddcecbd0f0fcbd9cefb4f236b4"],["/tags/top50/index.html","79f5ef8f6aebf3e74ea182737a6d3664"],["/tags/tracker/index.html","5435a9275152a6f656df57cd6930b663"],["/tags/translate/index.html","37f09fc35ecbac5c705b072885867b6d"],["/tags/translater/index.html","cb5dd69b9b04f6a1c0c09f32c761aa6b"],["/tags/tun/index.html","6eb765a49a7d182bdc557184c10060cc"],["/tags/typecho/index.html","ffabbf8fd3e4d566a883f6c8cf4a22f6"],["/tags/v2ray/index.html","0736f53677160d0ff2d33dd8b011ba7e"],["/tags/vpn/index.html","e0d59e3367e0f9f07463ee96ed7f276e"],["/tags/vps/index.html","f37aabf8c08efb8875d5243c8ae1d59f"],["/tags/windows/index.html","073a753ddbf65b9274ee436b0ccb1417"],["/tags/windows端/index.html","10ef7184b02ef78f9d825bd15274a177"],["/tags/xray/index.html","4b6b842fa86facc0fa1985921af75119"],["/tags/下载/index.html","7c78d8e1650e1a596e6663ac887feb21"],["/tags/不限速/index.html","7ff5c6974181a11a9a2a8837da99ef9b"],["/tags/个人网盘/index.html","3b5abeeaf3b9b76ba6824b881cb5c4b6"],["/tags/主题/index.html","f0379ad1ece6d538633f9a1e6bcb6c62"],["/tags/云便签/index.html","fcabb563fe53d636af27c78c889bac85"],["/tags/云盘/index.html","a4f78a75aa4db3d2c06227494c0a86c0"],["/tags/人人/index.html","9f5a870030b64aa9169edf3a65e43060"],["/tags/代理/index.html","51cd8ee3cafc0830c805cc15a625d6ea"],["/tags/代码/index.html","731b9cca10fae67ee5d2dd652dd414e6"],["/tags/优选IP/index.html","d31a78deb2a3391697d5069a4e8d4158"],["/tags/便签/index.html","3b28b48624734685aa3b45684223ccd6"],["/tags/保号/index.html","6cf6e66b29bf4cb012f290689d239bf2"],["/tags/免费/index.html","498f278e87573989520f06dd43954102"],["/tags/免费节点/index.html","d7a9c37cfb112843e9b482d9f59b0a58"],["/tags/加密/index.html","0f46eeec15db398a1c3a7d7b5c5b7596"],["/tags/动画/index.html","60937718c5e340401769f726418c661f"],["/tags/博客/index.html","4c37378fbe1cf64ac8b9c9fa1b166ede"],["/tags/历史记录/index.html","118e7014d3fbae78fda5f9746f003d89"],["/tags/压力/index.html","186352cbb710573b9e2d1f2ce001665d"],["/tags/压缩包/index.html","4f4dd605e53283d01ea152e8a99c6e7a"],["/tags/反代/index.html","32d65f79cd29e40cd178d883a2ca2f8c"],["/tags/可视化/index.html","65fd0ac562651b5b418e4ca05980e263"],["/tags/命令/index.html","98365f7c3216628a7dab9761c61fd2d8"],["/tags/国家/index.html","60abe12d5382ad1694fb6933e1444874"],["/tags/图床/index.html","67f81b1d7825da9b3f71d808045b6bf1"],["/tags/图片/index.html","ccaebd54cf2bc8c124a1ec58935a2fda"],["/tags/域名/index.html","3888b99637aa4cf1dcdfb5ddbb5d92b3"],["/tags/多标签/index.html","e972919df9ebb47b174e483af934311e"],["/tags/存储/index.html","6f1b5c8702b7dad123dad62450ba1eae"],["/tags/学习/index.html","c3bf10cbd732b415fb9483546304ebd8"],["/tags/安全/index.html","6ddb61437a72208804b5e23500ee7741"],["/tags/安卓/index.html","dbcef455bc5a02cecd5e31a8d1f489b0"],["/tags/宝塔/index.html","26d8919d2a569f00d1cb82e946112853"],["/tags/广告/index.html","a7e47bd434f84459fa8a579c21b12321"],["/tags/建站/index.html","eab3f972c95027f0916cb8bdd6b764a1"],["/tags/影视/index.html","5a86dcaa7cd39b8248981c95d1b7eda7"],["/tags/快速启动/index.html","22aa17e5916b3a1bfc3ea017b29ee80e"],["/tags/手机/index.html","9066f1301c80c5e29bfd1e0a22d8a4f4"],["/tags/托管/index.html","09d687ea0b36205a69e0ace46d1f7478"],["/tags/抓包/index.html","077a78b18474e8dceb0cb7ca99656f13"],["/tags/抓取/index.html","6678d666c61f92aa595b9aa34d4531b0"],["/tags/投屏/index.html","b51a13e9b4309de2402fdce346826459"],["/tags/拓展功能/index.html","45b313ab3bf428b49240bab45040af5f"],["/tags/挂载/index.html","53339417c5ceb7307d241d97de1126f4"],["/tags/指纹/index.html","58236de553c694a0357aa9af2bab5cd4"],["/tags/接口/index.html","f98e2639ab01117a53825e01d54d32d0"],["/tags/提取图片/index.html","865d857ece69e47db478cfd2eee95b1b"],["/tags/插件/index.html","857555dcb44012887e8ebf672158b054"],["/tags/搜图/index.html","c61dde5f5ac9b56d605f0caebadda968"],["/tags/搭建/index.html","cf0b9b596cb37e5928dce06a96d623a5"],["/tags/撤回/index.html","df69253c078b480c1654955cd09b3ec9"],["/tags/播放器/index.html","7ecfa5cfed2a2d9644233accb1c00f82"],["/tags/政府网站/index.html","13a6224e35056b711cc77d2bfb06f703"],["/tags/效率/index.html","d846d5f3c52ccca74efb2f137501e4d1"],["/tags/日历/index.html","b301f586d85002c51636beb88563e0cf"],["/tags/服务器/index.html","c964be1cf3c257524d332240a537ec1b"],["/tags/桌面/index.html","4fa2709e72edd6d15e135d2b52abf370"],["/tags/梯子/index.html","104c750195f737188d364a7568265fd6"],["/tags/检测工具/index.html","a36f921053105bac1c26b73f8c632ffa"],["/tags/汉化/index.html","1cebcd9d76a261cb3ab6e4f71827bded"],["/tags/测压/index.html","f7783b1245b3a1c875d976afa9b44e63"],["/tags/测速/index.html","6a222e4266cb8d56af9e0ed652c88c76"],["/tags/浏览器/index.html","9620f480645e50ea0393e9f3169c1028"],["/tags/清理/index.html","7e90f19fd15629136429d4c9ab70734e"],["/tags/滚动条/index.html","f3fa7e849e92b0c954f5042dd82ccfb1"],["/tags/灰色歌曲/index.html","c3e668ab37f005680f4388fafd83e0db"],["/tags/电影/index.html","0b59a826947eb2bb50902e8880f6b2cf"],["/tags/电视剧/index.html","13580df01e87eb2eb1cd2955c2790f9c"],["/tags/白嫖/index.html","0bda5c408d5e2591951c342368fc6e75"],["/tags/百度/index.html","272c423f5d42850b719989821a686ca0"],["/tags/百度云盘/index.html","193e66d2851de13e6f7bfec107a110f4"],["/tags/百科/index.html","95a77f39d239448ed38303cd9975fe67"],["/tags/短信/index.html","b77c5109e7f9971e2b6b0611eed685f0"],["/tags/硬件/index.html","78f1485f89696753e6c9043f5580db28"],["/tags/科学上网/index.html","b5624c9e7f9d56d9b930f82bec254b46"],["/tags/空间/index.html","ecbcf2898e213eecace05e1f960a1831"],["/tags/笔记/index.html","f0d7e213dcba988afbf6ff84420f8c6b"],["/tags/简洁/index.html","2e6c4e131b9d09ab4fb291f6dcbbc471"],["/tags/简约/index.html","fa0e6893a740e42aca484f414c0b88e3"],["/tags/维基/index.html","8800c55019feea769457732fde5c70a5"],["/tags/网易云/index.html","06f48d053702bbe8436a3619a145781e"],["/tags/网盘/index.html","6baea71914a1241f81400563f8fec3cc"],["/tags/网站/index.html","e93560f842bf96c6260ff4662e52fe60"],["/tags/网络/index.html","b9463d8b860687081aac3da2d3f084d0"],["/tags/美化/index.html","4787dc2d0e05982d7150c05394ce3441"],["/tags/翻墙/index.html","4b8f3cdef56b57ba5c4693774b8b9121"],["/tags/翻译/index.html","6549bfc5017ea39628a3ed39ccb288b4"],["/tags/翻译器/index.html","a82ea16767e1034190f2751037701449"],["/tags/聊天/index.html","a5d93682465fdd9332b8410e6f13e957"],["/tags/聊天室/index.html","9cc336086e648eda9c42208aa0ddce89"],["/tags/联想/index.html","c374c6227809c448b7b181f88d4a2b90"],["/tags/节点/index.html","49269b94af07fa7d7a5e656bfb101d16"],["/tags/虚拟手机号/index.html","55b058b4ebfcd930a271403f0645b596"],["/tags/补丁/index.html","e1337d0311df0e11531a15416b73cec7"],["/tags/视频/index.html","20fc121506b98a7fac6c89eac0ded710"],["/tags/解析/index.html","7af648d1c0c36cd73fc08085373cbbbe"],["/tags/订阅链接/index.html","730e2ebacce96bee7f2c99b1b822342d"],["/tags/记录/index.html","b053cec0d96151956ec5650d77166014"],["/tags/识图/index.html","6b6b65b18d9b5c953dbf7ea7d2aac046"],["/tags/语言/index.html","cd9aa656da53b92528235be36369a949"],["/tags/资源/index.html","0fd35d5587da2ccec608240c0c4c3055"],["/tags/资源管理器/index.html","951a9b3a81d9a25d1f37652ebbd7dde3"],["/tags/转移/index.html","75bab7da2408962d2d7d8b5ff3f6bc92"],["/tags/软件/index.html","eed770937c1922f0fdc0c52c48693d94"],["/tags/轰炸/index.html","fb305691587672643efa96875412e1ae"],["/tags/迁移/index.html","8adc86c75f060e8b4e97d72960bb0ad9"],["/tags/远程控制/index.html","2e3e25d423fa2186cbf0274160d6ffa3"],["/tags/连接/index.html","8f16764d841dc2e1d670aea5aba63b43"],["/tags/追踪/index.html","312629b355a8e6761f9f7821319dc442"],["/tags/速度/index.html","fcf3c1f99b1b8e45a25f4825f0c0bbef"],["/tags/邮箱/index.html","f3b6ffcc7ca62a6b098f88fa3cd49b34"],["/tags/酷炫/index.html","ce820d1fb271a85a1a1bebb9582d01c7"],["/tags/钓鱼/index.html","227eeb42596d51ba8fb6811ad9a82fbe"],["/tags/镜像/index.html","bc74cc05cc8f0ffcf0b959b677622276"],["/tags/随机/index.html","b0e2b9d9af6b4dc312e69ed6099e169a"],["/tags/隐藏/index.html","6794e2013cbfd1145362803e6290216e"],["/tags/面板/index.html","77d76d164c830525059c420cdc76955a"],["/tags/音乐/index.html","7c9a2a0341bcdee541e240f8884710e7"],["/tags/高颜值/index.html","a59c7a5a2ded17fdce20efab21780214"],["/tags/魔改/index.html","053df69ca12f03fac3b0183ac0521274"],["/tags/黑名单/index.html","a533901f19357be88ca07cf1cedcc5df"],["/urls/index.html","f23682ec23ae99ae0776291d6d97ca6a"],["/vps/index.html","d1ec2d5f340a84d70031dd0ba005e915"],["/支持/index.html","b712b7234f0161e4b82b21606bc6cacc"]];
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
