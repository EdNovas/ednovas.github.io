/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","e5006bcf81f96858365b7acd58449753"],["/2020/11/29/clash-windows/index.html","b75c2b5a5f5889497dbc480198c81eb1"],["/2020/11/30/websites2/index.html","3e7d6001e32a94a155fb69ea3c25b0aa"],["/2020/12/04/iphone4s/index.html","988f603f4e5f15e70fd0e152bafd5df7"],["/2020/12/04/onenote/index.html","b3fa1349bd19956b90c2565bf49fc36d"],["/2020/12/04/wesites1/index.html","a7352c381223733680875a4943a22883"],["/2020/12/06/nokia808/index.html","5bf547734593cdb114bcc8ba8ab0e32e"],["/2020/12/07/ipad1/index.html","5c15779f6048458891c16876c3196f8a"],["/2020/12/18/freesubscribes/index.html","51c2e201a0524d2809cf6fb6dcf6f6e8"],["/2020/12/19/musics/index.html","92f425c5317a784942398565094f31e7"],["/2020/12/19/shadowrocket/index.html","7e6f166fad5e59cfb626d5de5b5be443"],["/2020/12/19/v2ray-windows/index.html","b222711471b9dc752b12803552fcf1f8"],["/2020/12/19/v2rayng/index.html","0eaf5a4c6ddb982976d853e3658810e5"],["/2020/12/20/beoplay/index.html","0cda1a21fb3996070a59907c53b28941"],["/2020/12/20/订阅链接转换/index.html","bce9bd9bba4da57f6c87491a0dceca3d"],["/2020/12/21/chrome浏览器下载提速/index.html","a71dc6ced3191e542f69554a431a3334"],["/2020/12/21/免费128线程并发下载xdown/index.html","469a666aae782a9bae150aac6bbd5e31"],["/2020/12/21/免费32线程下载软件ndm/index.html","5ba4a825960ed7f8728135c3ef4d1b99"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","fdbc0fee96482585ed01bda76a88d5e9"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","374efae25688eb8e370596cbb46e091a"],["/2020/12/21/广告怎么知道我在想什么/index.html","13768162a6183c7e2de0fc92a31f11ad"],["/2020/12/21/无名·引子（小说试写）/index.html","2e0ac198c9f99c14312864583c59639a"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","fda4e59a06cf16aae1ded9f618c6337f"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","f94d9a3b718d52915dbf02b8416a123f"],["/2020/12/21/高速轻量下载器aria2/index.html","d45d24d7c5d2c37c596926907bc61852"],["/2020/12/22/2020-cee-roo/index.html","5a70b96906171bbd8ed28f549bef7c68"],["/2020/12/22/firefox插件、github、steam富强/index.html","22dcad2b2af798d53ace27c7cbb1f20f"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","c21183b2bd7d408830499d2e7e5201ed"],["/2020/12/26/python-day-1/index.html","28e0d9bf6ec27ade1963372239da2829"],["/2020/12/26/python-day-2/index.html","b2f5bf303460f1bfccfb9efc86dce3bf"],["/2020/12/26/度盘不限速下载方式一赏/index.html","0e78fd104f495df9e5e586a63d2b9df3"],["/2020/12/26/添加开机自启软件/index.html","582b5705c5107ddfbc813b64e71723b9"],["/2020/12/26/电脑端截图方式一赏/index.html","a86801e9fc27be822b58c43ef536b32a"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","d24694cf5733b7c07ac4c9bfae842553"],["/2020/12/27/最安全的浏览器tor/index.html","f8fcdf29c776ea7313d748eaf1203be0"],["/2020/12/27/网易云刷等级和听歌数量/index.html","21c9640fa167747c8b1f77cb783af1b1"],["/2020/12/28/freenom申请免费域名/index.html","238af59dae6170c46451042448980352"],["/2020/12/31/机场/index.html","10b06769d56fbc4b8bc07ef3505b7c1a"],["/2021/01/01/M1/index.html","15e7e5b7c64bdf648c643b49e38fdbe4"],["/2021/01/01/compress/index.html","84d13901dab7799cfdf46940c5699efb"],["/2021/01/01/infinityfree/index.html","bbf8c01df83eec7221a669159e42bed1"],["/2021/01/01/硬核翻墙/index.html","63ee2883b3ef51182175b2108de1e724"],["/2021/01/02/qq/index.html","00fd866fadb183ddae3be140d1481eb8"],["/2021/01/03/netch/index.html","7961249487e14b083e49903335c382fe"],["/2021/01/03/waifu2x/index.html","5153b39994aa4802a57e62fb7ccbb104"],["/2021/01/04/ads/index.html","0295a1a155b864e7d07a00de191d3667"],["/2021/01/04/games/index.html","14f20e1e42c26dd61176d73ab6eaef6a"],["/2021/01/04/heroku/index.html","d60e2fdb50348b002940d47d2698fb8e"],["/2021/01/06/movies/index.html","8f15ec413b35ab86c976115f8d2d7035"],["/2021/01/07/google2020/index.html","a42d7a7ffbee328165da0e299b5a8387"],["/2021/01/07/lucky/index.html","4a41f63d421a2bede51e7a4c789cad28"],["/2021/01/07/spotify/index.html","5b368899f167b07b7481780ef7ef4776"],["/2021/01/07/thunder/index.html","d80b81580b0e4abf569401af30d187ec"],["/2021/01/08/adguardhome/index.html","09192358730c2dba77065a1e857a8b46"],["/2021/01/10/IBM/index.html","e41d67f76416855bfcc3681b5d1f2913"],["/2021/01/10/potplayer/index.html","e25851d5efc3fb69f682542c0d2f54a7"],["/2021/01/10/sakuraanime/index.html","00ad7d41b2a1e9b2b1670dc187536c7f"],["/2021/01/10/美剧星球/index.html","e9d62d31dada3385b55e35b71921fe8c"],["/2021/01/12/telegraph/index.html","aec175a8d2f4e64bbbcb496e5b402cba"],["/2021/01/14/comics/index.html","153d8b09138d103ea5397e21485be231"],["/2021/01/14/ftp/index.html","06939df21bdf9ae4da853cf6f527d30c"],["/2021/01/14/oraclecloud/index.html","eedc9a093a3cafbe3b39c0b3db65b155"],["/2021/01/14/porkbun/index.html","182f0acc861a018dd4899c03b0cdd5c5"],["/2021/01/14/powertoys/index.html","fd5a0ad67706ba5b987193d33940ee32"],["/2021/01/14/taptap/index.html","83f0242d64c99a4b53721000e27121c8"],["/2021/01/14/ubuntuvsftp/index.html","44fca683e46cc82c25390f4bcdd5749e"],["/2021/01/14/小说/index.html","4ec07a62de01d66d2b18a2cd5a835536"],["/2021/01/15/freeproxies/index.html","e3c0263f876c64739d3ea68f551ab429"],["/2021/01/15/incaseformat/index.html","0d5a245ec2aace52396a801018f0c550"],["/2021/01/16/euserv/index.html","1c9cf5ffa40ddb4e3a9395f01ca9a355"],["/2021/01/16/winxray/index.html","d723c61eec36519d549f4e48c68a4050"],["/2021/01/18/qqreadhistory/index.html","db1b3023c137d023bacf8e8a23f10fb7"],["/2021/01/18/qqrevoke/index.html","6f9b903fbde1650cae48fdfb4d389d35"],["/2021/01/19/freevpn/index.html","cc22efb0d5ecc327e1256f08733746bf"],["/2021/01/20/browsertrack/index.html","75b6730d3b1c29f617a091ee364c2374"],["/2021/01/20/v2ui/index.html","88387c115823beef2dc60ab4a8e0d6ed"],["/2021/01/21/failedtoconnect/index.html","f8cdfdd694b1bca464209db559e5ebf4"],["/2021/01/21/gitcalendar/index.html","4a5a8beca2ad44b2bb8d45b871ab21e4"],["/2021/01/21/markdownformat/index.html","c4679fb41d2a6f50d0955cd466aa5655"],["/2021/01/21/markdowntable/index.html","d4b874377e780c206902fc17294fba6c"],["/2021/01/21/vercel/index.html","93bd357a82d2abb17ad63535aa5b7659"],["/2021/01/22/hardware/index.html","24d55030ccd0da3b7a52b22e0ed15f80"],["/2021/01/22/muviz/index.html","b864fcfbf9f34810455fa79ab6caafdc"],["/2021/01/22/randomapi/index.html","f56e29e5f74c3bdeaacf0c9144c80698"],["/2021/01/22/searchimages/index.html","fb5b8f623f28eb3544a535ef2f74f87c"],["/2021/01/23/RX文件管理器/index.html","f6784c419f7fd99bce85efba55f103b7"],["/2021/01/23/chromeflag/index.html","32688979cc97bbd23c502f5d3a6f798a"],["/2021/01/23/qttabbar/index.html","fdbb83c632880f56489df01eb2d3d4ba"],["/2021/01/24/githubspeedup/index.html","8c877e76d435a51ebdcb62a59296f888"],["/2021/01/24/jsdelivr/index.html","a55e2450a5c9e0544db8e98f810b1cb2"],["/2021/01/25/note/index.html","fd11f1125fee7b0e034b54c46e47ab8c"],["/2021/01/25/soul/index.html","1704900f1b71c152cb2de245942d6f9a"],["/2021/01/26/herokuxray/index.html","5d237dee3afb3cc13a85b0babf77ef2d"],["/2021/01/27/proxypool/index.html","77d09476fb44694d22521c7fccd26f73"],["/2021/01/27/tracker/index.html","7dd0637a6da12e64c113437fd6c3a7dd"],["/2021/01/30/pandownphp/index.html","d2b413b62bf75f1cfaf0b9547d99ba68"],["/2021/01/31/newgroup/index.html","b281d8bb8311a3af34037a8018f3d4d2"],["/2021/02/01/clashlanguage/index.html","ba76237da104ca77ec3851579511cb29"],["/2021/02/01/encrypt/index.html","a4f9508f403027cf22ddbdb0f062e5d7"],["/2021/02/01/footermotion/index.html","68756abf21f5835be4f5d370a539bd2d"],["/2021/02/01/gitter/index.html","30c8c71c3c35cc8892b09ab8ff984bfb"],["/2021/02/01/pixivtop50/index.html","152a97755455d7033bb6affe424d8d10"],["/2021/02/01/scrollbar/index.html","c57bdaa7351404d4bc7d8dd49b3bbc90"],["/2021/02/02/clover/index.html","9b20dad4cff15603219aceb9c8edcb7d"],["/2021/02/02/maya/index.html","b3aeb039f3b8ecc2373fbeacdff9a5b3"],["/2021/02/02/speedcontroller/index.html","bb37dc8b341dacad1ab33e4765e4845a"],["/2021/02/02/yesmusicplayer/index.html","2d9940968ac52d9e5ef43aad8816d678"],["/2021/02/03/lenovoonelite/index.html","7def106571e068ec7da4f318f996f30b"],["/2021/02/03/skipads/index.html","617c36b512f1b5b509741effd0c8ef5b"],["/2021/02/04/picseed/index.html","51e242571030f99f3d4b7dec836d4564"],["/2021/02/04/renren/index.html","42af7049576ed36d72b14731049430f0"],["/2021/02/04/serverstress/index.html","9422fb1cd72171725ad081daeebc40f4"],["/2021/02/04/wikipediazh/index.html","dc4c3c42a70452a7ead6a35ab691ab45"],["/2021/02/05/googlevoice/index.html","1098e3b2e5c18358c7a6abe3ebba60ee"],["/2021/02/06/clashconnection/index.html","2e21b8b5c178fa73fb4b36556b177ead"],["/2021/02/06/gvtransfer/index.html","0f8e4aa05e3d1b3337dcf5987cf1bec0"],["/2021/02/06/todesk/index.html","7a079de7cee41392dceac04d8f8f482a"],["/2021/02/06/vpnblacklist/index.html","13094046b82009d9c44ef8190a563418"],["/2021/02/07/mklink/index.html","0ef4922771ef01cb1fad2a228e8b816c"],["/2021/02/07/speedtest/index.html","349618478310dcddc42373dbda2634c3"],["/2021/02/07/translate/index.html","389bf7911e5f168394d676950d4d8f4a"],["/2021/02/08/ewomail/index.html","20b9e0a2b8094ad5b62508c07fcddc79"],["/2021/02/10/officee5/index.html","814316bcde19dceb865d566cf3bb8f04"],["/2021/02/10/raidrive/index.html","0f8efea9f0f8d5e68ba7026a8a701cd6"],["/2021/02/13/e5sub/index.html","47c2882cb80ca526d8ab0f65c428dff7"],["/2021/02/14/screen/index.html","16125955cd5f9e206fe3e24afd0cd781"],["/2021/02/15/clashtun/index.html","41a7e580e4936c0dfc71672a9950ef66"],["/2021/02/15/messageboom/index.html","6cbd6278bdf9dcec4f31796456a3aecb"],["/2021/02/15/oneindex/index.html","6e3c8c0ec0216dad18a1289c7b4e0698"],["/2021/02/16/govsites/index.html","a31aca33e89f9e2f7212a2b5bab128c1"],["/2021/02/17/hexototypecho/index.html","936eb282bc98dbef67e5f664de8b2333"],["/2021/02/19/fiddler/index.html","b4cc25e2628d73604dc3d3bca53d7050"],["/2021/02/22/potplayerset/index.html","89a60792ca1d656e528a6564e65c75e7"],["/2021/02/22/studyresource/index.html","0d9231a457247e557c2bff42e61a4a5f"],["/2021/02/22/telegram/index.html","53d10734309f51938c644dadfe83b6f2"],["/2021/02/22/videos/index.html","bffe241a37de79aeed16957b25d1a61a"],["/2021/02/24/mtproxy/index.html","6d18542268eb815651787fac03e07877"],["/2021/03/10/neteasemusic/index.html","60c7cd3372824657aacd1497bc03b16b"],["/2021/03/10/surfboard/index.html","5178769c01b5ffeb1298aebb52107a83"],["/404.html","a437068ea94ee4a05ed9037b08291ca5"],["/archives/2020/11/index.html","3b4ac124e73cb834dc895ba1db18faba"],["/archives/2020/12/index.html","fe6af2e0dce99e826fe85622edf56cec"],["/archives/2020/12/page/2/index.html","a2bb71af4c57472d7f7edff473e8e41c"],["/archives/2020/12/page/3/index.html","9fcd27e0510623965a2c7ad057f8e319"],["/archives/2020/index.html","cb7f722cbd06041c1e82af33db30f3a4"],["/archives/2020/page/2/index.html","85a853ffe0b8dcfbaef12c98129098d7"],["/archives/2020/page/3/index.html","1ae1489df20e7edc3c6a99b832f82801"],["/archives/2021/01/index.html","87bbc4465f76bb6d2d6118c72ef0efcb"],["/archives/2021/01/page/2/index.html","cec5b9f3123220e383552181035e7192"],["/archives/2021/01/page/3/index.html","2123aa122c7b393387ffd1eef029a3ff"],["/archives/2021/01/page/4/index.html","c137690b8cd53a65484d79452c48a8dd"],["/archives/2021/02/index.html","e1a0568cca9d0e0e81de9256fd2b1bdb"],["/archives/2021/02/page/2/index.html","6bb0835edd8b4377ac69407e6686fc77"],["/archives/2021/02/page/3/index.html","2e30436b5edc7db5f85a604c1438d696"],["/archives/2021/03/index.html","5ec5d18c7b3897b07b97621570a51346"],["/archives/2021/index.html","d4fbd6621de7b9a603dee2401ea8d4ef"],["/archives/2021/page/2/index.html","a1aac3c5be0b0f58aa19592bcb237dde"],["/archives/2021/page/3/index.html","59905a9c6569e682979f74a7e7279332"],["/archives/2021/page/4/index.html","5eb02d0c8773ccfa98bb01a2fd5a282c"],["/archives/2021/page/5/index.html","af378d826054d6e613bd2f94f63805fb"],["/archives/2021/page/6/index.html","cab1cc4d1eb8b98db825734a3fe7ef5c"],["/archives/2021/page/7/index.html","5b12ced38757dbfc40e1c5e9de23f694"],["/archives/index.html","55cceeba160150cf881bf233365569a8"],["/archives/page/10/index.html","5c1785de5844fff72d08f50d9b3b0bcf"],["/archives/page/2/index.html","b63785193aa48208d37154cc21848c56"],["/archives/page/3/index.html","f26633286ccb790b9aaa848975f833e0"],["/archives/page/4/index.html","13e8838d5db45dbc6cc1da925cef3919"],["/archives/page/5/index.html","78a32cc004e598ad1cee90b2cd1feab3"],["/archives/page/6/index.html","ff666727dc10abdf05bd0ce0e9d512cc"],["/archives/page/7/index.html","7ee82e463c74328ab9615ae30e0f9641"],["/archives/page/8/index.html","78aab382f2566482c59dba398f12e541"],["/archives/page/9/index.html","ef7a3edf9831b08d35db4532470569b3"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPN/index.html","566ecef885bcd877effbc56b8efd3b79"],["/categories/VPS/index.html","8b0d4c19180241488bd83efcf686b0fe"],["/categories/index.html","cf4e6461388326fde26b6fb46485a109"],["/categories/下载/index.html","0a8be84ae083f9827d19ab1634cf03b7"],["/categories/安全/index.html","ebe1f74cfc365dfaeb034007cdecdec4"],["/categories/建站/index.html","6435dfcee499725abe57ceb2ce1aed17"],["/categories/杂/index.html","7ff345be0a9e5b687f8ec59e2ffd6883"],["/categories/杂/page/2/index.html","adfd3d1e1a2ef4238966e65ee51d3331"],["/categories/测评/index.html","7e1deaa0771d7ef4077ad686245777e8"],["/categories/科学上网/index.html","5483393a8e5ced921102df3f28931bf8"],["/categories/科学上网/page/2/index.html","7dd6f5bdfd2801e9d2655e4c88904336"],["/categories/编程/index.html","7450b991ac563a99b6a1e95022881ab6"],["/categories/网站/index.html","5e7be95531405ba3cce07568fb552736"],["/categories/网站/page/2/index.html","84308b79059338a75946757018ce93fb"],["/categories/软件/index.html","4f85803934c524532586965721f38e01"],["/categories/软件/page/2/index.html","dccb3c7982a0c5812a7730499bb89a94"],["/categories/软件/page/3/index.html","5e16e74876d9fa6f85cc1acff5be7561"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","fa024bf74550207ab36856148457befd"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","6f41849e244767fa2bb36d5485c79344"],["/ios/index.html","9df45401ad4a0b2d27980559c2512879"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","5a63e05792779e684a703ce96836b397"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","d652551544bf1aed6033fc97f8dbe18b"],["/page/2/index.html","6e5e69887e45cb35d3b28c1c9a7a8b48"],["/page/3/index.html","8913047b2e266da9b28976102e08e7f4"],["/page/4/index.html","0760b72e5e4d1e14df1f8f1baaedec60"],["/page/5/index.html","06f7c11ba989a848ad87a196f913469e"],["/page/6/index.html","6c512ab884752d992572b74db7151395"],["/page/7/index.html","db3d0bc77b312c47052e14417e38fd2b"],["/page/8/index.html","6398646f163ad1620bde48ed35dedba6"],["/page/9/index.html","5918440bd040095ae0b7ea0629721db3"],["/payment/index.html","57f29a8c276662d604463a6f5204a416"],["/privacy-policy/index.html","68591d56097310ed6e54e61a228ab93d"],["/rss2.xml","f46d297913859ff0e63d1af28ba61055"],["/search.xml","ebf451ef685a748dd2af51656651c3cc"],["/sitemap.xml","7511816fd0f14b01282f2ff740c24cbc"],["/sw-register.js","2adc29476715d3e4b3deb1c70c927445"],["/tags/5t/index.html","66b587fcd2f331917dfa912c3839aeb5"],["/tags/Clash/index.html","2dc174a9560ae4e0c6abee841a8e90f1"],["/tags/Clover/index.html","6036cd06f783c905ac20fadf985dbcd8"],["/tags/E5/index.html","ee02f668a75d2640f27712e55ba599a0"],["/tags/FTP/index.html","7f52a1fece2507b0cad42166de4e7264"],["/tags/GitHub/index.html","9b0328fad77896dd494fe487abb97d7a"],["/tags/Heroku/index.html","e2da0726a88bb73d550680616236c30f"],["/tags/Hexo/index.html","0dee7c5cd632ce1c7bad01c17bb10494"],["/tags/Lenovo/index.html","04b7757ad04ed58bf0f9491c4cb8de2e"],["/tags/Oneindex/index.html","df087d0dc7d9ae0ace2c226be7bf8fdb"],["/tags/QQ/index.html","b3e65232ea9e3af311e498e47c4af684"],["/tags/QTTabbar/index.html","c19c33efd645953012e5bf676c976722"],["/tags/RX文件管理器/index.html","e790f03388163ab9931c3aeb881ae1d0"],["/tags/Todesk/index.html","fed37abbd678ed03c0ceb03f008a4651"],["/tags/Vercel/index.html","51397b01b587240bbe09c3d1758676ff"],["/tags/ads/index.html","7ce84b7adb79435c98e50a0008a50c73"],["/tags/api/index.html","a9ff1ec29f64baf16e47a93e5f09b5c5"],["/tags/app/index.html","cfe6400c546df441ab32266f00483573"],["/tags/blacklist/index.html","50030c5113778def624b8b15d5668f33"],["/tags/butterfly/index.html","4ceaec505b299a4a3a35c5541f45276f"],["/tags/chrome/index.html","b619fb5216706cb122197f8b0da9dfe9"],["/tags/cloudflare/index.html","d5b7841e9171a4cf68c90db5174afd0c"],["/tags/cmd/index.html","939e425f2ef0e6a4efbc96b82a7502cb"],["/tags/c盘/index.html","93f4ce2fe81f03352fa8e3c4733fffbf"],["/tags/email/index.html","e62438e5919f6a07110f7cb465ec82cf"],["/tags/ewomail/index.html","3a2c808cff59e28f0bb0bbd975a9ed9e"],["/tags/fiddler/index.html","29107bd3161ef99c8bb2f7fe91f5db61"],["/tags/flags/index.html","8866b2f21add6557bcb2e6ab26148664"],["/tags/footer，页脚/index.html","60037bac531cc96d3549e81207db8c8f"],["/tags/galgame/index.html","1985c2c2aa6905c0fe9fd630bf1cd94f"],["/tags/git/index.html","2f3051f7629466146fdae6d81b919326"],["/tags/gitcalendar/index.html","d3d127110437e97a646ee9071cf6d21a"],["/tags/google-voice/index.html","8171f5736881b4a1d450b808276571aa"],["/tags/gv/index.html","ac397a95f8b9d5e9b387a8fc5f1559f0"],["/tags/index-1.html","1f5185a14fedb61f0b3cbffea88a144d"],["/tags/index.html","140a877fc45aa4583791f8436190d9b4"],["/tags/jsdelivr/index.html","15d5706aac788fd4ebd8a3ea23781a1f"],["/tags/linux/index.html","804c0cce0bc1a7088f6a750f0760dc97"],["/tags/madVR/index.html","e0aa5157378391e4cd3d810996b99d60"],["/tags/markdown/index.html","211fd019deca54cb0945333dec4f930d"],["/tags/maya/index.html","e888db87f2845dbe9f15f9814ba5fc3d"],["/tags/mklink/index.html","0af2b0ad292f518bf8e2c86821303977"],["/tags/office-e5/index.html","f59aa18f5f88c3671d2334af5f50a21c"],["/tags/onedrive/index.html","7533a7a9582da63ebaa88162f666fcf6"],["/tags/picGO/index.html","c7c6d3eb8a23be9de685921ecb2dae8d"],["/tags/pixiv/index.html","96abb9c44d936df7666fe2e9d0993690"],["/tags/potplayer/index.html","b8179f0cac2b044e130f8f3a74e1a8bf"],["/tags/proxypool/index.html","d556f2b539236a52ed59b0b9791fac0e"],["/tags/qbitorrent/index.html","780dfc2e2eb9a39ad073d1f73f3d6e9a"],["/tags/raidrive/index.html","4d5441c9c2fc8bb916f5281c86dc8e6f"],["/tags/screen/index.html","05917928915759461625be033ca6c694"],["/tags/speedtest/index.html","40ec7667b5c00af213cd0fdd1692e394"],["/tags/surfboard/index.html","a1e2ee873b18c6cd4894e2cc9a2041b0"],["/tags/tap/index.html","cb419fde484c710bcd59bd03e7584ca3"],["/tags/telegram/index.html","b3141a5666875d88e78d58f7f97c8f16"],["/tags/telegram代理/index.html","be0086fe28f49dc498bec8b17b900d1b"],["/tags/tg/index.html","fd44cd42e2afc0f115cb86f41d3e0114"],["/tags/tg代理/index.html","92098ff34c0bad56289a1faa46622aa5"],["/tags/top50/index.html","a4b25f4a10ad758ce25bfeb58304434b"],["/tags/tracker/index.html","5cc277e7e7a031c5298ada347e167aaa"],["/tags/translate/index.html","2efd726c43dd758e031e5e93f14ae534"],["/tags/translater/index.html","6d32da9473092ad116b31ed9fe262f14"],["/tags/tun/index.html","4b6167815520a2bb7078c4e7f3a52cfd"],["/tags/typecho/index.html","ebc478eb351d2aec92e53c21439c1c76"],["/tags/v2ray/index.html","5b3dbe39de5706f8af9bc392bd84aa4d"],["/tags/vpn/index.html","7c7c77524d4ae18e5e754b56060f6774"],["/tags/vps/index.html","db61b74634ffe23ac0159c4a4cc23401"],["/tags/windows/index.html","24e7169f0ff67141e98ef72ba59ada3d"],["/tags/windows端/index.html","f6c44c15ee3438eb38206d7ed9f2edae"],["/tags/xray/index.html","7850fc7a52f3f3efe9febae26ddc1129"],["/tags/下载/index.html","4cc5720dd3894def732a7357f02cdffb"],["/tags/不限速/index.html","48b0f95413d7df13daf2b945a3b99fab"],["/tags/个人网盘/index.html","593e7025dbfc8b762a7323465a353625"],["/tags/主题/index.html","d764d9301b6d76dd573324570f5e739b"],["/tags/云便签/index.html","14298cfa6b3209b229d3c54f62e3bce5"],["/tags/云盘/index.html","85058f9d89da1b2769472ce25a8e136b"],["/tags/人人/index.html","2b031194d08b82100b1e0aff37ca8616"],["/tags/代理/index.html","c5b8fbe86eab2c5af5fec05e49743014"],["/tags/代码/index.html","e60170f1ff13d39088d8be69e6937ff0"],["/tags/优选IP/index.html","972fb5755b8e8eec34d4b08a92adc1e4"],["/tags/便签/index.html","b97da06c5b13fd1e1250933d3d2a45dd"],["/tags/保号/index.html","1c990e30b427287dd3b5583a45f0f2f1"],["/tags/免费/index.html","7164e9c41dbdf7d5b8b3c488eb03b328"],["/tags/免费节点/index.html","955eeb37ab8f0d5f4e3b36be5f5e08c0"],["/tags/加密/index.html","6b78a0306265631cb450f946fca29db5"],["/tags/动画/index.html","a1b3c900edace1078f8db08d77367170"],["/tags/博客/index.html","0041eeb3386b60aa29b92f3f18dc60d3"],["/tags/历史记录/index.html","e7b291f8556453f1fc343b36e41ea13f"],["/tags/压力/index.html","2815547fd4b5b9f737ee8dc35452961c"],["/tags/压缩包/index.html","d06f0ca1e9b4117079024feaa60e23f6"],["/tags/反代/index.html","840cfbe81427b9b7bd69c93b43380dcc"],["/tags/可视化/index.html","68a230e2a689f7b8731e1c6bbc1298bb"],["/tags/命令/index.html","25f7b140a547f3486cc30717d6fd40ba"],["/tags/国家/index.html","af10ec8fde63b551f09dbca86cabea26"],["/tags/图床/index.html","3969c18b73ae39bfda0c8bd760385367"],["/tags/图片/index.html","a54090e42ac5433a46157895bae40bc7"],["/tags/域名/index.html","0b42c0b1ffe05285ddd6a67fba694906"],["/tags/多标签/index.html","5356802935c6d1c62008e397f61d95ea"],["/tags/存储/index.html","ea07e7b5457723dacf37efaccfd4c7bd"],["/tags/学习/index.html","c42818f282f96c8d4f057d9154447af4"],["/tags/安全/index.html","ee09c5941abf3744689b0569b4cdade4"],["/tags/安卓/index.html","afda3e5c1454a4d4c24c2da7e61f872e"],["/tags/宝塔/index.html","ac7525e0c8a987da227dfb0b768fb151"],["/tags/广告/index.html","7d8f836828eeb8cfa0f9dfb2627f2772"],["/tags/建站/index.html","7f39f6f67d3721f8962c3065e7e3d4e5"],["/tags/影视/index.html","1a9412fd39c998f4b93b6f41cfe6174b"],["/tags/快速启动/index.html","022b773a7c4a364e58f7b1587a15df62"],["/tags/手机/index.html","ebbedc296c6e0b4c8954d7f36a4ff96e"],["/tags/托管/index.html","14d62641524495d4c94668fd8aa514e8"],["/tags/抓包/index.html","c00abbda1518552356739c4ab8f2927c"],["/tags/抓取/index.html","78524cc7467d26a1ba28b88b9f7bde59"],["/tags/投屏/index.html","ae397c59b56e7a9a9052c6f7d758368f"],["/tags/拓展功能/index.html","8b6246d0406cd57e6c8037411d1b88d5"],["/tags/挂载/index.html","9bfec07011d9f144eb02c05635b70f40"],["/tags/指纹/index.html","ea60ed9c19b4501ab87b84756ea06339"],["/tags/接口/index.html","90d81fe75ff3e62421b4fd9a6e036bab"],["/tags/提取图片/index.html","746e1ab20e8c81366489609e98296fd3"],["/tags/插件/index.html","6879617fecef98ec0de3be80014d800a"],["/tags/搜图/index.html","e14ae33e7b389ae5dfc3dba0eea01ad7"],["/tags/搭建/index.html","67bf5b8f65f1c50e647f3ea8da6addbf"],["/tags/撤回/index.html","d135770a224185752528212fb822cf8d"],["/tags/播放器/index.html","139e3fa6487befbe937e324b119d1866"],["/tags/政府网站/index.html","7cdaa1e7d10efd7f6d083867e3cdfaa9"],["/tags/效率/index.html","ca4565690553fdb4cdc0acf340a7709f"],["/tags/日历/index.html","6f26c70ee152d30886e6aa47f543671a"],["/tags/服务器/index.html","3d611e166c7754f6823b3cffbd43ed26"],["/tags/桌面/index.html","5d6296eb0911e3544568929a440dbc45"],["/tags/梯子/index.html","4592eb4f810dc16bd19a293ea67c890f"],["/tags/检测工具/index.html","8da9e4bb1ac17d5cb2e5403cbc4f255d"],["/tags/汉化/index.html","f60aaafbb77fe0d69955bc0c25489396"],["/tags/测压/index.html","99555de674ac9493511fef6203576ce6"],["/tags/测速/index.html","85787fcaa06f1bd0fdda1e3385cda2a3"],["/tags/浏览器/index.html","9f9b9ff859699d225e7e5f376d00ef6a"],["/tags/清理/index.html","53f420d87296df4a41e87d853c017bed"],["/tags/滚动条/index.html","3904ac2239a32933809096491bfa359b"],["/tags/灰色歌曲/index.html","73d57611aff44a2b9f0f74d05228edb6"],["/tags/电影/index.html","9f1c795a179b10289a8e293a1d6f08ba"],["/tags/电视剧/index.html","917794bcacf6ba29caf887f81fab0840"],["/tags/白嫖/index.html","2fa52cf965ee0b9f50022a9165e46c1d"],["/tags/百度/index.html","9f05f48adf25d84f7a3d4ceb7a75e028"],["/tags/百度云盘/index.html","049b1551481608e48f46e4c48431c299"],["/tags/百科/index.html","59a800df474473ece4f99e99d627fc3b"],["/tags/短信/index.html","de27beefc4cc85958915aaa2b38242e9"],["/tags/硬件/index.html","96df6646f4bb65494b6f7e5073544aa5"],["/tags/科学上网/index.html","618559b813d8c4c8c92016b818cbadd9"],["/tags/空间/index.html","de468f328d442c586271eb7ad18e1093"],["/tags/笔记/index.html","e501ffc0545707f5a32397e77d066f09"],["/tags/简洁/index.html","a2d7284fede95b4fc0ab42141a1f7768"],["/tags/简约/index.html","9bd778e0a383a235d1a6e6201a59dbd8"],["/tags/维基/index.html","f3beb917a003d98a0c4a9043435dcecd"],["/tags/网易云/index.html","1faf9b4993fb4d0f4233471fcd9ebc97"],["/tags/网盘/index.html","b92981e8a44f74a72c0986f83edcac23"],["/tags/网站/index.html","f5e3aa69479b75164009f50ba57f39c2"],["/tags/网络/index.html","ed096f1c5ed67cda556ed94b789159fd"],["/tags/美化/index.html","46cb5dfe29fb1139268bf3cac8283277"],["/tags/翻墙/index.html","5dd7c5e01ca25b464a02b8de96d84a30"],["/tags/翻译/index.html","101748da71b04fc72d831aae79bd5543"],["/tags/翻译器/index.html","2aa57a99684bbbebcbb92f9c79903516"],["/tags/聊天/index.html","1a127c216b50b8a2accf826ccc48e59d"],["/tags/聊天室/index.html","9414dfd57d0b892f889e8046865dc258"],["/tags/联想/index.html","289c94532f15ecdb7b1ebc8f436d4adb"],["/tags/节点/index.html","a59987327db491e71945490b40ffd834"],["/tags/虚拟手机号/index.html","5a96a7e7d36a1db9444328796e2ffc29"],["/tags/补丁/index.html","9ddab132ea205b606b4d68244b410030"],["/tags/视频/index.html","b83534945c08ce264cc6c6fdcf41c252"],["/tags/解析/index.html","b887da597b9a0746068079d4ab5121b4"],["/tags/订阅链接/index.html","dbcbb088d2a9e7ab9ad95b42d33d939e"],["/tags/记录/index.html","c2fff35db06853af43c9820afb79fcc0"],["/tags/识图/index.html","2e46981f0b975cb32d10f13e02cfb22e"],["/tags/语言/index.html","ab7d81717d24928878d77f71313eaab5"],["/tags/资源/index.html","cac416f785fef2d9f69a3fc49ba25ea6"],["/tags/资源管理器/index.html","9868a19f98fcc9365ea9aa553da74f29"],["/tags/转移/index.html","a3076e82b39a09222fcb338d6bcbc444"],["/tags/软件/index.html","4aa72e61e12e91ef295967e665196b78"],["/tags/轰炸/index.html","2719c1e348b5a945b4d42c7cff921dcd"],["/tags/迁移/index.html","48e82b95928565b5d9b8d768c465044c"],["/tags/远程控制/index.html","e4e1efaf9a6db8de9b6ad796677b8b9d"],["/tags/连接/index.html","3ef279e3ddd1c31662554c3b355882b2"],["/tags/追踪/index.html","fbdfd8fdb08040e39d74476811c3e3a9"],["/tags/速度/index.html","cf0dac9c0d776132e7f6ff14c751bdfc"],["/tags/邮箱/index.html","51e2b42bf1656dc408506dd816008758"],["/tags/酷炫/index.html","da980edc7623d36b60884efdab9ddda8"],["/tags/钓鱼/index.html","a6bf75248584d6a00c4f8c6713e78ac2"],["/tags/镜像/index.html","e2430ec557c597c5a0657e6698bfa27b"],["/tags/随机/index.html","27e03388a3ad4d1ec0b5136908a9c919"],["/tags/隐藏/index.html","8b90f4b3cddfa30d0874d134839a0d29"],["/tags/面板/index.html","e27c16808fe9e99fcd6733e1014b210d"],["/tags/音乐/index.html","f2cd4103f02575cd9234a0292b813466"],["/tags/高颜值/index.html","39bd475905ec6a5d57fa5f15b092f7a3"],["/tags/魔改/index.html","6255bed6d49ac8af9e9f5710105b9637"],["/tags/黑名单/index.html","ca18fbbfb7e01ca6de75bcb87b5d6052"],["/urls/index.html","b4e96953fe35fbe3d2ca3a90c5d475c9"],["/vps/index.html","8d6c61120ddd53f167abefba187b59de"],["/支持/index.html","ee461c2fdcb04f34881d9bce242af249"]];
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
