/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","e5006bcf81f96858365b7acd58449753"],["/2020/11/29/clash-windows/index.html","b75c2b5a5f5889497dbc480198c81eb1"],["/2020/11/30/websites2/index.html","3e7d6001e32a94a155fb69ea3c25b0aa"],["/2020/12/04/iphone4s/index.html","988f603f4e5f15e70fd0e152bafd5df7"],["/2020/12/04/onenote/index.html","b3fa1349bd19956b90c2565bf49fc36d"],["/2020/12/04/wesites1/index.html","a7352c381223733680875a4943a22883"],["/2020/12/06/nokia808/index.html","5bf547734593cdb114bcc8ba8ab0e32e"],["/2020/12/07/ipad1/index.html","5c15779f6048458891c16876c3196f8a"],["/2020/12/18/freesubscribes/index.html","51c2e201a0524d2809cf6fb6dcf6f6e8"],["/2020/12/19/musics/index.html","92f425c5317a784942398565094f31e7"],["/2020/12/19/shadowrocket/index.html","7e6f166fad5e59cfb626d5de5b5be443"],["/2020/12/19/v2ray-windows/index.html","b222711471b9dc752b12803552fcf1f8"],["/2020/12/19/v2rayng/index.html","0eaf5a4c6ddb982976d853e3658810e5"],["/2020/12/20/beoplay/index.html","0cda1a21fb3996070a59907c53b28941"],["/2020/12/20/订阅链接转换/index.html","bce9bd9bba4da57f6c87491a0dceca3d"],["/2020/12/21/chrome浏览器下载提速/index.html","a71dc6ced3191e542f69554a431a3334"],["/2020/12/21/免费128线程并发下载xdown/index.html","469a666aae782a9bae150aac6bbd5e31"],["/2020/12/21/免费32线程下载软件ndm/index.html","5ba4a825960ed7f8728135c3ef4d1b99"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","fdbc0fee96482585ed01bda76a88d5e9"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","374efae25688eb8e370596cbb46e091a"],["/2020/12/21/广告怎么知道我在想什么/index.html","13768162a6183c7e2de0fc92a31f11ad"],["/2020/12/21/无名·引子（小说试写）/index.html","2e0ac198c9f99c14312864583c59639a"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","fda4e59a06cf16aae1ded9f618c6337f"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","f94d9a3b718d52915dbf02b8416a123f"],["/2020/12/21/高速轻量下载器aria2/index.html","d45d24d7c5d2c37c596926907bc61852"],["/2020/12/22/2020-cee-roo/index.html","5a70b96906171bbd8ed28f549bef7c68"],["/2020/12/22/firefox插件、github、steam富强/index.html","22dcad2b2af798d53ace27c7cbb1f20f"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","c21183b2bd7d408830499d2e7e5201ed"],["/2020/12/26/python-day-1/index.html","28e0d9bf6ec27ade1963372239da2829"],["/2020/12/26/python-day-2/index.html","b2f5bf303460f1bfccfb9efc86dce3bf"],["/2020/12/26/度盘不限速下载方式一赏/index.html","0e78fd104f495df9e5e586a63d2b9df3"],["/2020/12/26/添加开机自启软件/index.html","582b5705c5107ddfbc813b64e71723b9"],["/2020/12/26/电脑端截图方式一赏/index.html","a86801e9fc27be822b58c43ef536b32a"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","d24694cf5733b7c07ac4c9bfae842553"],["/2020/12/27/最安全的浏览器tor/index.html","f8fcdf29c776ea7313d748eaf1203be0"],["/2020/12/27/网易云刷等级和听歌数量/index.html","21c9640fa167747c8b1f77cb783af1b1"],["/2020/12/28/freenom申请免费域名/index.html","238af59dae6170c46451042448980352"],["/2020/12/31/机场/index.html","10b06769d56fbc4b8bc07ef3505b7c1a"],["/2021/01/01/M1/index.html","15e7e5b7c64bdf648c643b49e38fdbe4"],["/2021/01/01/compress/index.html","84d13901dab7799cfdf46940c5699efb"],["/2021/01/01/infinityfree/index.html","bbf8c01df83eec7221a669159e42bed1"],["/2021/01/01/硬核翻墙/index.html","63ee2883b3ef51182175b2108de1e724"],["/2021/01/02/qq/index.html","00fd866fadb183ddae3be140d1481eb8"],["/2021/01/03/netch/index.html","7961249487e14b083e49903335c382fe"],["/2021/01/03/waifu2x/index.html","5153b39994aa4802a57e62fb7ccbb104"],["/2021/01/04/ads/index.html","0295a1a155b864e7d07a00de191d3667"],["/2021/01/04/games/index.html","14f20e1e42c26dd61176d73ab6eaef6a"],["/2021/01/04/heroku/index.html","d60e2fdb50348b002940d47d2698fb8e"],["/2021/01/06/movies/index.html","8f15ec413b35ab86c976115f8d2d7035"],["/2021/01/07/google2020/index.html","a42d7a7ffbee328165da0e299b5a8387"],["/2021/01/07/lucky/index.html","4a41f63d421a2bede51e7a4c789cad28"],["/2021/01/07/spotify/index.html","5b368899f167b07b7481780ef7ef4776"],["/2021/01/07/thunder/index.html","d80b81580b0e4abf569401af30d187ec"],["/2021/01/08/adguardhome/index.html","09192358730c2dba77065a1e857a8b46"],["/2021/01/10/IBM/index.html","e41d67f76416855bfcc3681b5d1f2913"],["/2021/01/10/potplayer/index.html","e25851d5efc3fb69f682542c0d2f54a7"],["/2021/01/10/sakuraanime/index.html","00ad7d41b2a1e9b2b1670dc187536c7f"],["/2021/01/10/美剧星球/index.html","e9d62d31dada3385b55e35b71921fe8c"],["/2021/01/12/telegraph/index.html","aec175a8d2f4e64bbbcb496e5b402cba"],["/2021/01/14/comics/index.html","153d8b09138d103ea5397e21485be231"],["/2021/01/14/ftp/index.html","06939df21bdf9ae4da853cf6f527d30c"],["/2021/01/14/oraclecloud/index.html","eedc9a093a3cafbe3b39c0b3db65b155"],["/2021/01/14/porkbun/index.html","182f0acc861a018dd4899c03b0cdd5c5"],["/2021/01/14/powertoys/index.html","fd5a0ad67706ba5b987193d33940ee32"],["/2021/01/14/taptap/index.html","83f0242d64c99a4b53721000e27121c8"],["/2021/01/14/ubuntuvsftp/index.html","44fca683e46cc82c25390f4bcdd5749e"],["/2021/01/14/小说/index.html","4ec07a62de01d66d2b18a2cd5a835536"],["/2021/01/15/freeproxies/index.html","e3c0263f876c64739d3ea68f551ab429"],["/2021/01/15/incaseformat/index.html","0d5a245ec2aace52396a801018f0c550"],["/2021/01/16/euserv/index.html","1c9cf5ffa40ddb4e3a9395f01ca9a355"],["/2021/01/16/winxray/index.html","d723c61eec36519d549f4e48c68a4050"],["/2021/01/18/qqreadhistory/index.html","db1b3023c137d023bacf8e8a23f10fb7"],["/2021/01/18/qqrevoke/index.html","6f9b903fbde1650cae48fdfb4d389d35"],["/2021/01/19/freevpn/index.html","cc22efb0d5ecc327e1256f08733746bf"],["/2021/01/20/browsertrack/index.html","75b6730d3b1c29f617a091ee364c2374"],["/2021/01/20/v2ui/index.html","88387c115823beef2dc60ab4a8e0d6ed"],["/2021/01/21/failedtoconnect/index.html","f8cdfdd694b1bca464209db559e5ebf4"],["/2021/01/21/gitcalendar/index.html","4a5a8beca2ad44b2bb8d45b871ab21e4"],["/2021/01/21/markdownformat/index.html","c4679fb41d2a6f50d0955cd466aa5655"],["/2021/01/21/markdowntable/index.html","d4b874377e780c206902fc17294fba6c"],["/2021/01/21/vercel/index.html","93bd357a82d2abb17ad63535aa5b7659"],["/2021/01/22/hardware/index.html","902d04e781d52abe9036d15969c11657"],["/2021/01/22/muviz/index.html","45289d3b61554cd17f2c19a1fb6f1c47"],["/2021/01/22/randomapi/index.html","f56e29e5f74c3bdeaacf0c9144c80698"],["/2021/01/22/searchimages/index.html","fb5b8f623f28eb3544a535ef2f74f87c"],["/2021/01/23/RX文件管理器/index.html","f6784c419f7fd99bce85efba55f103b7"],["/2021/01/23/chromeflag/index.html","32688979cc97bbd23c502f5d3a6f798a"],["/2021/01/23/qttabbar/index.html","fdbb83c632880f56489df01eb2d3d4ba"],["/2021/01/24/githubspeedup/index.html","8c877e76d435a51ebdcb62a59296f888"],["/2021/01/24/jsdelivr/index.html","a55e2450a5c9e0544db8e98f810b1cb2"],["/2021/01/25/note/index.html","fd11f1125fee7b0e034b54c46e47ab8c"],["/2021/01/25/soul/index.html","1704900f1b71c152cb2de245942d6f9a"],["/2021/01/26/herokuxray/index.html","9be387e83847a91ba0efc1a6a764bb9f"],["/2021/01/27/proxypool/index.html","77d09476fb44694d22521c7fccd26f73"],["/2021/01/27/tracker/index.html","7dd0637a6da12e64c113437fd6c3a7dd"],["/2021/01/30/pandownphp/index.html","d2b413b62bf75f1cfaf0b9547d99ba68"],["/2021/01/31/newgroup/index.html","b281d8bb8311a3af34037a8018f3d4d2"],["/2021/02/01/clashlanguage/index.html","ba76237da104ca77ec3851579511cb29"],["/2021/02/01/encrypt/index.html","a4f9508f403027cf22ddbdb0f062e5d7"],["/2021/02/01/footermotion/index.html","68756abf21f5835be4f5d370a539bd2d"],["/2021/02/01/gitter/index.html","30c8c71c3c35cc8892b09ab8ff984bfb"],["/2021/02/01/pixivtop50/index.html","152a97755455d7033bb6affe424d8d10"],["/2021/02/01/scrollbar/index.html","c57bdaa7351404d4bc7d8dd49b3bbc90"],["/2021/02/02/clover/index.html","9b20dad4cff15603219aceb9c8edcb7d"],["/2021/02/02/maya/index.html","b3aeb039f3b8ecc2373fbeacdff9a5b3"],["/2021/02/02/speedcontroller/index.html","bb37dc8b341dacad1ab33e4765e4845a"],["/2021/02/02/yesmusicplayer/index.html","f52b0b1931e6ec44a1375a26afd8ddac"],["/2021/02/03/lenovoonelite/index.html","7def106571e068ec7da4f318f996f30b"],["/2021/02/03/skipads/index.html","617c36b512f1b5b509741effd0c8ef5b"],["/2021/02/04/picseed/index.html","51e242571030f99f3d4b7dec836d4564"],["/2021/02/04/renren/index.html","42af7049576ed36d72b14731049430f0"],["/2021/02/04/serverstress/index.html","9422fb1cd72171725ad081daeebc40f4"],["/2021/02/04/wikipediazh/index.html","dc4c3c42a70452a7ead6a35ab691ab45"],["/2021/02/05/googlevoice/index.html","1098e3b2e5c18358c7a6abe3ebba60ee"],["/2021/02/06/clashconnection/index.html","2e21b8b5c178fa73fb4b36556b177ead"],["/2021/02/06/gvtransfer/index.html","0f8e4aa05e3d1b3337dcf5987cf1bec0"],["/2021/02/06/todesk/index.html","7a079de7cee41392dceac04d8f8f482a"],["/2021/02/06/vpnblacklist/index.html","57fd591f99efb61143ae60a15bbe9e70"],["/2021/02/07/mklink/index.html","0ef4922771ef01cb1fad2a228e8b816c"],["/2021/02/07/speedtest/index.html","349618478310dcddc42373dbda2634c3"],["/2021/02/07/translate/index.html","389bf7911e5f168394d676950d4d8f4a"],["/2021/02/08/ewomail/index.html","20b9e0a2b8094ad5b62508c07fcddc79"],["/2021/02/10/officee5/index.html","f3e39c0a460efc7dd096950027c9a26b"],["/2021/02/10/raidrive/index.html","0f8efea9f0f8d5e68ba7026a8a701cd6"],["/2021/02/13/e5sub/index.html","47c2882cb80ca526d8ab0f65c428dff7"],["/2021/02/14/screen/index.html","16125955cd5f9e206fe3e24afd0cd781"],["/2021/02/15/clashtun/index.html","41a7e580e4936c0dfc71672a9950ef66"],["/2021/02/15/messageboom/index.html","6cbd6278bdf9dcec4f31796456a3aecb"],["/2021/02/15/oneindex/index.html","6e3c8c0ec0216dad18a1289c7b4e0698"],["/2021/02/16/govsites/index.html","a31aca33e89f9e2f7212a2b5bab128c1"],["/2021/02/17/hexototypecho/index.html","936eb282bc98dbef67e5f664de8b2333"],["/2021/02/19/fiddler/index.html","587785beecda5a6c1d1d28bcccb7d1bb"],["/2021/02/22/potplayerset/index.html","89a60792ca1d656e528a6564e65c75e7"],["/2021/02/22/studyresource/index.html","0d9231a457247e557c2bff42e61a4a5f"],["/2021/02/22/telegram/index.html","edd7311733ee33bac03c0fc75adc53a4"],["/2021/02/22/videos/index.html","bffe241a37de79aeed16957b25d1a61a"],["/2021/02/24/mtproxy/index.html","6d18542268eb815651787fac03e07877"],["/2021/03/10/neteasemusic/index.html","e53457f35b752b5bf990e78698fb036b"],["/2021/03/10/surfboard/index.html","5178769c01b5ffeb1298aebb52107a83"],["/404.html","1aafad7db9ff18f029bce9afcf1a5c2f"],["/archives/2020/11/index.html","fc6ee1bbcfcdcd4ecf51bd982f639b34"],["/archives/2020/12/index.html","1c60d14475ab3f009dd04547ab56874a"],["/archives/2020/12/page/2/index.html","b606a37fceba794bb325683e16dd5360"],["/archives/2020/12/page/3/index.html","26269ed9f61b55ea8ef941090b40cc52"],["/archives/2020/index.html","84f6985aa84aee3b449ebf3ee6d540aa"],["/archives/2020/page/2/index.html","ba7fee644a56cf088732b58267dd7080"],["/archives/2020/page/3/index.html","3919b43b298c165ebed339d08b89bbda"],["/archives/2021/01/index.html","8a206b39a89f7498fc3f7223929fb6ae"],["/archives/2021/01/page/2/index.html","e067a7a58fedbe51c45294f4db3f9e7e"],["/archives/2021/01/page/3/index.html","f5d890d63b699a5b3fae64be857dc7fb"],["/archives/2021/01/page/4/index.html","5cdc57841f5e66fb1b2bcf961cdc0177"],["/archives/2021/02/index.html","7b0104c275adb43a60edce79a7e1568f"],["/archives/2021/02/page/2/index.html","63791a63685b7e09a6458ffbfa6c3c14"],["/archives/2021/02/page/3/index.html","2a1738be87abf41c33d2676670e8330b"],["/archives/2021/03/index.html","6cababcab2b35b6c412c13c95cb1ebfb"],["/archives/2021/index.html","25a26ef2f48cf8ca369e44207dd99a28"],["/archives/2021/page/2/index.html","8d6c7635555cd4ba1a6b5895b1dc8674"],["/archives/2021/page/3/index.html","b1942b9b514e02b7f330a343d7b104df"],["/archives/2021/page/4/index.html","f5ffdecfdadc70b153650390345a3ea1"],["/archives/2021/page/5/index.html","f28bd8f0e928ccfa08607f355313b115"],["/archives/2021/page/6/index.html","d76c28e955bed633cca31c39fdbc085f"],["/archives/2021/page/7/index.html","857572372f007221cf154353f6396454"],["/archives/index.html","d5573cf10934f7f8867c833add2607b7"],["/archives/page/10/index.html","27b8aef4617b1d634bf82f0360432a49"],["/archives/page/2/index.html","3f11589321e9c8020c3e2642f2b09ab3"],["/archives/page/3/index.html","4efb91e0a6401b797185888340ca0a03"],["/archives/page/4/index.html","3c920cc8231ef06e5839f1048d320ac2"],["/archives/page/5/index.html","a6780137f7303305b54c57871f23b628"],["/archives/page/6/index.html","7bdb1ed4a460079cbc0aaa8c839d428c"],["/archives/page/7/index.html","3952ea748802600d304f728bba096b60"],["/archives/page/8/index.html","10de268e9bd03a4f69dc88443a57d1cf"],["/archives/page/9/index.html","2c0f3a81764a617a5f78b23f37477584"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","3668a0a8f0fe6c9a71b7b3d3d9b58cf8"],["/catchcathard/index.html","d0c677e5ac098b78fbfbd71b0f399c83"],["/catchcatimpossible/index.html","ae8ccaba89258994d4fbfa9cf78afbad"],["/catchcatmid/index.html","4f33a077941490c9791a05762f8202d5"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/categories/VPN/index.html","431a22c9e2717773c8977c5741c6afec"],["/categories/VPS/index.html","5b4fb5b92a8242a738903ceb66577a2c"],["/categories/index.html","461acac87ab27369d6bb8e3d1617519c"],["/categories/下载/index.html","671513980ae708143fb6a8742a9fdcb2"],["/categories/安全/index.html","6f131b1e89e60e7175776357e6653338"],["/categories/建站/index.html","1899d092ddad2ec4463266f926f5cc5f"],["/categories/杂/index.html","c7c0f751511f8faf7241ffd478ee86bc"],["/categories/杂/page/2/index.html","2a79c0665bf49b70483d2da5093580b5"],["/categories/测评/index.html","3913a9bd1905272c6af2505cd118b029"],["/categories/科学上网/index.html","aa2cd1a19bf414fe73429a8ce9b2b2f2"],["/categories/科学上网/page/2/index.html","0c1c4cf8c9aa7f4258fd7b07a3c80ab1"],["/categories/编程/index.html","1179e13600d97656caddf50c75c807d5"],["/categories/网站/index.html","609fcbf605a31e74faea1a44ed27d5c7"],["/categories/网站/page/2/index.html","016b500a37e34845aff152eb1fb02fd1"],["/categories/软件/index.html","074eb237aeb4de80806baf9b603f3096"],["/categories/软件/page/2/index.html","2c3e67ea37e5264f25ccdb3a9efcae7b"],["/categories/软件/page/3/index.html","da697471591e4090a0cdcff6da2c16f4"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","ef7be47e0c29326853b3b6ff639c2a17"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","d59f5214764c382d17ed776421187fd4"],["/ios/index.html","31ea772782012bff56d4d508d9a5e363"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","f1683492b80a2f00ad595a16ece3b0c2"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","3ec7cdb365957fdaaa69135678d3a7aa"],["/page/2/index.html","f1dcef14d543bfa5e0690969b18c1fbf"],["/page/3/index.html","f018cdb146d171f5f523d515baef0f2a"],["/page/4/index.html","7e0118e06ddfed41c2d69131afd853a6"],["/page/5/index.html","febc31626d67f71f0693ab4f415aff5e"],["/page/6/index.html","c2f2987007f1e69abb56f6774c733783"],["/page/7/index.html","aaa093819ab94fe2ef2bf0ff9a580cfd"],["/page/8/index.html","da531e774081f0a5648dbd74d1c45917"],["/page/9/index.html","1316537efc4003e34d6e7f152f771ad3"],["/payment/index.html","2dda0df577606052d18a292b08aff36b"],["/privacy-policy/index.html","ea0a9c0c1cd85cdef15356ab708fdc3b"],["/rss2.xml","344dbeb8e292d1c86d73bcd8bf47dcfc"],["/search.xml","88e0e8641829677e087edc3e0b98f25d"],["/sitemap.xml","6f659961365f58c56bb3fb486968721a"],["/sw-register.js","399eeaab576494e0138f85c9149d3dc8"],["/tags/5t/index.html","7a48258490f9cec56752f5dcaa779352"],["/tags/Clash/index.html","b7af7bd25cf336c64222dd5b77e4931e"],["/tags/Clover/index.html","0b1e61093691be38a3cb1ab4895129d9"],["/tags/E5/index.html","11c728ac5c4580de015b475d858ad7ec"],["/tags/FTP/index.html","7e772f255e5998bb624b28d067d1a67b"],["/tags/GitHub/index.html","fb3abb2f4a0884e7d906f0d66f1d5f2f"],["/tags/Heroku/index.html","dadfa93ec55c8735e53ac90edcf0c6bd"],["/tags/Hexo/index.html","cb4a9e47ed884f9f80a960b152ca5abe"],["/tags/Lenovo/index.html","740ca10c4790ef207f945b7b55dfb509"],["/tags/Oneindex/index.html","9f53c7ccc759986dfe51f94f92dc077a"],["/tags/QQ/index.html","2200f05cdb5357f1ff0098543eb4f941"],["/tags/QTTabbar/index.html","4bccc73e1980cc23c65bfd6f212f3770"],["/tags/RX文件管理器/index.html","102486ca161580b06be6125960aa48d4"],["/tags/Todesk/index.html","61bc8db5bfb9871b7838dcab4e1eade8"],["/tags/Vercel/index.html","08d1750603161c8852addd67a96ff983"],["/tags/ads/index.html","871dcfe2a5cc6cf80954477108f3b988"],["/tags/api/index.html","e3fd5e7768dca27a9dcf1586165815e8"],["/tags/app/index.html","9f2b0df3ebf7509109ba298bf4e3bfd8"],["/tags/blacklist/index.html","e23eeeb23669a747a27265b6caa426c4"],["/tags/butterfly/index.html","4e9f25ad80942d418aa6de62de2d45dc"],["/tags/chrome/index.html","843ca09ea80207ca034d56c3a75d4086"],["/tags/cloudflare/index.html","3ed4887980c0771daf8883f7eea8e660"],["/tags/cmd/index.html","3a7e21a9580d09576cc29fa1d7eeb0a2"],["/tags/c盘/index.html","55cf958e857eebba5bacd1bff62f7980"],["/tags/email/index.html","9c09b899c2e3c9184ce52a83f5d4140c"],["/tags/ewomail/index.html","dd193a0f19380b431a112e7c97598ac6"],["/tags/fiddler/index.html","2f815e027acec44d57ce393732204dd7"],["/tags/flags/index.html","5aed3e906bec0bc71d886caee1d0cb69"],["/tags/footer，页脚/index.html","8a934693ad98305ad312a02a3dd8d05b"],["/tags/galgame/index.html","50a75861b74f0cb67f6626d9717f1242"],["/tags/git/index.html","fc62ae3f432510c0e7a6bc3e6e47267e"],["/tags/gitcalendar/index.html","78defc43dc012502412d4187d8804ef4"],["/tags/google-voice/index.html","86902bda008030d8779a6d9f029a2262"],["/tags/gv/index.html","7f56f9445028a0d7972aeeef691aae04"],["/tags/index-1.html","f31172b79e1da8e87775e152172f348a"],["/tags/index.html","86d306c9c895e7dcae8c868ca1fbb3b4"],["/tags/jsdelivr/index.html","885d4fa6ac093a2c2f050d4d6269a1db"],["/tags/linux/index.html","4bb9d4808b7db7eaf2f7b191bb4322de"],["/tags/madVR/index.html","ad53bdb4f53fb9783376da2ec5fec49f"],["/tags/markdown/index.html","45fcbe26f342883d91077f02fefddeb1"],["/tags/maya/index.html","ed44a9c8cf84bad253565fd80f2e5ba9"],["/tags/mklink/index.html","d29874dfcb795398a62b231b6c0a1af1"],["/tags/office-e5/index.html","2ab10ea5703cfc28f5ed47a32572f9e6"],["/tags/onedrive/index.html","78dae8f6ba512d254fc59c5bf0f401f8"],["/tags/picGO/index.html","4f74eb3a8f5c53216600de10f0a08da8"],["/tags/pixiv/index.html","23cea46efa29637beeccb1f6b116f605"],["/tags/potplayer/index.html","668f5323b45df3f6a6cae3c8cbfb8a4d"],["/tags/proxypool/index.html","b5e783b04fecc996efa74a4f4261ee9a"],["/tags/qbitorrent/index.html","c958a337d6b9c89ef13a8fb687fa91f4"],["/tags/raidrive/index.html","dee0e72298c9f3ab51bd6e151ee11528"],["/tags/screen/index.html","9d0d69a5ebfac20bd51ece9ea26af4d8"],["/tags/speedtest/index.html","91a343edd04805b6631b885299376e86"],["/tags/surfboard/index.html","761cea299135bb4da17d90d49d002e59"],["/tags/tap/index.html","eb5a02f2b1ac45f512941e0c3ee6e8b0"],["/tags/telegram/index.html","031595fd3ea9b3a71ed34ab59c3ceb44"],["/tags/telegram代理/index.html","64042a1bef822cc2c0c139548b6d12d1"],["/tags/tg/index.html","47d799f356622a36997a61ca4049db7a"],["/tags/tg代理/index.html","d34e6a47c0a45699bf24d3ea0a451af2"],["/tags/top50/index.html","0e2d26f9ccccf95b10087e56c2f01dac"],["/tags/tracker/index.html","5a856cacc403c6d04074e8d9cf5dca7f"],["/tags/translate/index.html","0ac8d8e4bcc25814f82c5c519042e2c4"],["/tags/translater/index.html","c7fa5d2b38a17cf4e403ca206cb635e8"],["/tags/tun/index.html","d984f1cdcc0cc140476de5906bdc2aa4"],["/tags/typecho/index.html","a9c21ce52fc7e4a6412a2fa47c8c78fa"],["/tags/v2ray/index.html","c38d17325940935254718ec9ab4ad2dc"],["/tags/vpn/index.html","1d220a8cd7d04a5953f5821ea5427f6b"],["/tags/vps/index.html","28bd848e93f52610f2f1e673d950fe4c"],["/tags/windows/index.html","fd23b497b9dd2170b6bc9347f8dbeb9e"],["/tags/windows端/index.html","e4a98306aefecc041928341320b1abb7"],["/tags/xray/index.html","fdb93b640a1f3cab31fa956d609047d1"],["/tags/下载/index.html","f11fc23368e4ecb6f8390e6615af947f"],["/tags/不限速/index.html","2f11048841d0a5ab021998b3cdf7277c"],["/tags/个人网盘/index.html","ef016dd73226f61b669a5d96baf6050e"],["/tags/主题/index.html","0f774f177efa0db7ef052d69b11a5559"],["/tags/云便签/index.html","0f638516163171f63020734e50c3b706"],["/tags/云盘/index.html","edb4904b8ed2d07211eb2f5459da4a14"],["/tags/人人/index.html","1902426660be8fd8908babcbd35098d6"],["/tags/代理/index.html","8bea9eebb8e0644ebca00b8333c2b152"],["/tags/代码/index.html","6b4b0ca8a890d8c6e527db95f7f30280"],["/tags/优选IP/index.html","52248e09371c063d6ca5dab04364718f"],["/tags/便签/index.html","e5e384ac8eb2e9fcb9183bcb5026fa54"],["/tags/保号/index.html","d05290d15f26fbf054949c14e9aa117f"],["/tags/免费/index.html","330bf2f1393e7bdba4703cb50803b1b0"],["/tags/免费节点/index.html","2998bf89708e619cf4e1d72ba1778a48"],["/tags/加密/index.html","38f4a4444d57326621c46d1bbe2f4b48"],["/tags/动画/index.html","d001a50c81e9a75a6067feda284d77cc"],["/tags/博客/index.html","ebb2af4dc10c01492eef58ac8824fb30"],["/tags/历史记录/index.html","e2768cc5a08a4ed18db1c7564cdf218e"],["/tags/压力/index.html","0c9f64b525f0077ae9a4d7b5fd0c3494"],["/tags/压缩包/index.html","f7b8a5760e2aff616e5af7aded61c352"],["/tags/反代/index.html","daf6af01039f9c16b85e4043e013cbf2"],["/tags/可视化/index.html","67099606977df3c074bcaa2b67dc43c5"],["/tags/命令/index.html","e4634e5c761fe0b2da10495059536c7d"],["/tags/国家/index.html","f46338dc8c3fa71d842884f79d146d74"],["/tags/图床/index.html","1ba8dd5865b5b2e9681134f7565e7b32"],["/tags/图片/index.html","f9caa09dec50fb63f59fb6d97014bb10"],["/tags/域名/index.html","11598c1dc21ae35d0707f1bc927c34c5"],["/tags/多标签/index.html","131d6e6a6dad6be8bdb79ee8e24220df"],["/tags/存储/index.html","31659d9cd993cd3bafeea56e2c3f8935"],["/tags/学习/index.html","165f3ca807913abeeeaee0c094b389b6"],["/tags/安全/index.html","5e2360ab2cd51691baad0c8622c24e20"],["/tags/安卓/index.html","85f245d4f6d817508aed8d076c90acea"],["/tags/宝塔/index.html","18e0a625807b6280de88fa3fe1e8f494"],["/tags/广告/index.html","2df67f0254db23311d7d43feaa0dcfdd"],["/tags/建站/index.html","d8d98ad988420fe2eaea354e244c3d55"],["/tags/影视/index.html","bee6be5d75588831e7d65a1e50f5b7ae"],["/tags/快速启动/index.html","ac505bb948bf9c2fb9e413836b8ab2d6"],["/tags/手机/index.html","f4810692d5832ce0b09304c61a3a9681"],["/tags/托管/index.html","967d9b30f6a5e2b4dfea39f53edc142e"],["/tags/抓包/index.html","2f35b2692a04ab08dd0588811a159055"],["/tags/抓取/index.html","7f6afb3c63d1a0b7e67daebbc5f26151"],["/tags/投屏/index.html","ab93b04900cbb6402be5b258724c6f01"],["/tags/拓展功能/index.html","b429cf14a0bfbdc28fa77db3cf591e1b"],["/tags/挂载/index.html","d6cd25ee895898ac88f8f596ab1563cc"],["/tags/指纹/index.html","7dfba4c84fe5e87d5cd406db6aac13b2"],["/tags/接口/index.html","324a4cd2c82d022a6b75b8900dfab2f9"],["/tags/提取图片/index.html","cc6df0805b249131c2ac94591e586a31"],["/tags/插件/index.html","2995bf9ff4d1e83bba422d0dd4d85dc6"],["/tags/搜图/index.html","7949bd70018db4c31dad966b10d7d782"],["/tags/搭建/index.html","b3fad7bdb314cae726a3720e5ef278c5"],["/tags/撤回/index.html","e6ec1426f6f0c0887e371123f8d68129"],["/tags/播放器/index.html","3896ac83a53fe95e38454dd311672eb8"],["/tags/政府网站/index.html","b6260a7c353937f4e0b3e5d332cd1b64"],["/tags/效率/index.html","17adddc052e7ba27ef6fd2e89dbe987a"],["/tags/日历/index.html","13419bf97c23b57120475a21a2adc02c"],["/tags/服务器/index.html","e26665b5e2906b093df287ca66d18872"],["/tags/桌面/index.html","0b6f8a5c463bc5123932bcedecb05eb2"],["/tags/梯子/index.html","e9a2468013f5f1d90e8e907a7424d843"],["/tags/检测工具/index.html","1e0f54e18fe5d55ffe7188c0097a607a"],["/tags/汉化/index.html","6a610ba632a592ce62785473bfc29d02"],["/tags/测压/index.html","d690a2e5c9e8b3ddd080e2946579af64"],["/tags/测速/index.html","aa82035bdd3079c65bccc5eef3ea8f3a"],["/tags/浏览器/index.html","927afbe9af4a78bba523b5212d8e494d"],["/tags/清理/index.html","2734a266694e90d8ee3f7203708f6b66"],["/tags/滚动条/index.html","35e6e7c1f7137e43d4912074a68e8005"],["/tags/灰色歌曲/index.html","37704df4a9d085839a9cb0326fcffea2"],["/tags/电影/index.html","89fb7529b43bc77f0b304a32a77e559c"],["/tags/电视剧/index.html","c499c0424139af62730b7fa537ddb2bd"],["/tags/白嫖/index.html","3c32ef863c345755a0cb4a4a7edcc21b"],["/tags/百度/index.html","744fa1381bcf9f44debc942fa4bede76"],["/tags/百度云盘/index.html","ad75b3bc1267a5e7fcb71645ae9456f0"],["/tags/百科/index.html","09594fe1ee63f8fe58af9bc2808e9c54"],["/tags/短信/index.html","377ce16367b21cde779b4ac3fe5014d0"],["/tags/硬件/index.html","f8e3a8e54433226c791b7f1e7070bfbb"],["/tags/科学上网/index.html","2efbb8744a8a1d451daa65620ecea271"],["/tags/空间/index.html","3b0917ad383e79234259e929c389550c"],["/tags/笔记/index.html","63b430f83f002d42f48998e7609f0768"],["/tags/简洁/index.html","b246f8c8c94d6b5901a87afd4167b0e3"],["/tags/简约/index.html","29889df7edb9f2297f8bd6bfba6ded9d"],["/tags/维基/index.html","012d484540bc04bb7c8fa5002cbb03f6"],["/tags/网易云/index.html","7e74c80924314b689287a2a989f3c1dd"],["/tags/网盘/index.html","341c21f73ec13a1e6e11f3732f6af45f"],["/tags/网站/index.html","d2dbc74375b66b2d328d80c9fa3f8a81"],["/tags/网络/index.html","2ecd2e60c970defeb83bb375e123437f"],["/tags/美化/index.html","3fbd9371600aa8c8b7f1bb188e506ef7"],["/tags/翻墙/index.html","de71a9f536535b1d94cf6db0a02d2cea"],["/tags/翻译/index.html","4e0d815e90e4230d94e3937bfdda3595"],["/tags/翻译器/index.html","e113d28516abccd2bb2f31595ffc1ffd"],["/tags/聊天/index.html","823384e4c0a4ec98581f9d1c828aa918"],["/tags/聊天室/index.html","5ba1c44033d7506b4ed7e1ddbe41f60e"],["/tags/联想/index.html","f9439c47e313796048c2ef2b21d79f59"],["/tags/节点/index.html","3a86c95c371b179a08b84f11bac8e952"],["/tags/虚拟手机号/index.html","6f7ed97dccf6792cab388986e5861591"],["/tags/补丁/index.html","3b51b61331eab60de469315ef03f3e2c"],["/tags/视频/index.html","5ba5d9e25e14f77b5bbc1f7b8a2cf05e"],["/tags/解析/index.html","b9aa426399101d4dc42ddfb833a22c55"],["/tags/订阅链接/index.html","c7df99d1063f46bc2a88a0ad5c6a0b98"],["/tags/记录/index.html","3947949628e5d1386bcda0acf13100d9"],["/tags/识图/index.html","1ad5f2ea9416ab1cf695bb7eae6852f5"],["/tags/语言/index.html","89dafdec6303c0f3a4f36cfb573d83c9"],["/tags/资源/index.html","2f3344b9dba68b68b7d5e352ad014fd6"],["/tags/资源管理器/index.html","fd10436ce459edb849b25ec1102e5a9e"],["/tags/转移/index.html","032cfa11460bdce508cab5d1c12d6216"],["/tags/软件/index.html","62d22299524ac8eb7e118213a56b062b"],["/tags/轰炸/index.html","2abc9da478e274137a6d4bd2070ffd03"],["/tags/迁移/index.html","1b255d0158b6db170f69ef248f55acdd"],["/tags/远程控制/index.html","a56a4cd9d68caf69cea29c1f32d3d16b"],["/tags/连接/index.html","98051735393b28fa3bea542a3018caa3"],["/tags/追踪/index.html","6251dad3b6c5f262e3091b859b01b4f2"],["/tags/速度/index.html","9f3de29f3cbe5dbcfc60b33a42d40e23"],["/tags/邮箱/index.html","4e433c4221e4adf44cc2531aa1b5cadb"],["/tags/酷炫/index.html","5ce9fafedbc50471d3fa1271c5192636"],["/tags/钓鱼/index.html","728f2487dc3764c12771107ce83fa571"],["/tags/镜像/index.html","0ebad749e4b639d3b2b5fbafc9baee4a"],["/tags/随机/index.html","5bdcab26cc0a6f093eaef6a00e15fb9b"],["/tags/隐藏/index.html","b5319632cb06194b38d028df32c7d67d"],["/tags/面板/index.html","2b644f86da316c1c6723067b6ebaadaa"],["/tags/音乐/index.html","14935e1828d87f095dceac9af97a3544"],["/tags/高颜值/index.html","f2e54528676dc6fbf5695f97689c687a"],["/tags/魔改/index.html","185a70d1f4fdea0540f211e12627385a"],["/tags/黑名单/index.html","d1f61edb79d3731e4e14a45d85c0c5c2"],["/urls/index.html","72d59077ab44429e86a5c9b6e7c6586a"],["/vps/index.html","3482c980f5725b2a6e560deed6c3184f"],["/支持/index.html","7c5725fecbe083da97ddc083e065b655"]];
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
