/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","80da530020669d9896410e1470edfef7"],["/2020/11/29/clash-windows/index.html","cb541594da50aab9f052684796207c0b"],["/2020/11/30/websites2/index.html","7c4306c2d635f9a58288f6d1d4dd2283"],["/2020/12/04/iphone4s/index.html","ae80297946ca1d9fc83ddaa192a249e5"],["/2020/12/04/onenote/index.html","006ded0254dea73f4fcc51c7a1fb91ca"],["/2020/12/04/wesites1/index.html","2f4c8e1eb8a1e8a3412b1a87c8452048"],["/2020/12/06/nokia808/index.html","a421708be9c52907a1f5715e2a266574"],["/2020/12/07/ipad1/index.html","bdbe852946e8a9ae9ab178202bf850b0"],["/2020/12/18/freesubscribes/index.html","f12e7e628e49532c8607c2962ce07806"],["/2020/12/19/musics/index.html","68cb015dd972221371173d82a43ada08"],["/2020/12/19/shadowrocket/index.html","ac1a7f3ded1e52a6fabfdfa730f02c1c"],["/2020/12/19/v2ray-windows/index.html","80a7a56a662b4361b49f9f584432f064"],["/2020/12/19/v2rayng/index.html","8808e034c206884db2fcd15e14dfc1f8"],["/2020/12/20/beoplay/index.html","b34c2e3fb4a8738380e8da823b58f9a6"],["/2020/12/20/订阅链接转换/index.html","f44b2e7829272b982aa734628eeae484"],["/2020/12/21/chrome浏览器下载提速/index.html","22c6158a6a49a658b37d0a13f79dd2dd"],["/2020/12/21/免费128线程并发下载xdown/index.html","2e4589a966105eb05da3027801e36875"],["/2020/12/21/免费32线程下载软件ndm/index.html","016e55bd7802255a0fb662fba08178a9"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","43b004d917632b89761d62dd55abea18"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","388d88811ab1ec0eaa4018828467f09c"],["/2020/12/21/广告怎么知道我在想什么/index.html","d086a3165e9e91ce6923c53753e3c06d"],["/2020/12/21/无名·引子（小说试写）/index.html","850c574943d9a2d3d21344348f560998"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","0c46e55f4dcaaf5e24dfa5e513cec0ce"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","eb466b4a1da58669d438e9b5032ea269"],["/2020/12/21/高速轻量下载器aria2/index.html","caae48df55f23064d2cb04eceeaa3d8b"],["/2020/12/22/2020-cee-roo/index.html","93f5d5446b5cca0c7d443a16b3faa17b"],["/2020/12/22/firefox插件、github、steam富强/index.html","e257c90ee1c2bd99e84fcf98e0dd3ab2"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","b426f4aa4f6da43a0d1ccf7915485eea"],["/2020/12/26/python-day-1/index.html","abfeb4413207c5bcca5c1cf0915d3ce9"],["/2020/12/26/python-day-2/index.html","b4a70835f95a1d9c2d708ef3a1945358"],["/2020/12/26/度盘不限速下载方式一赏/index.html","0d87f67233e8e267eb12f50901d5ec5b"],["/2020/12/26/添加开机自启软件/index.html","c6259b0c57448ece4840076960f3bfe2"],["/2020/12/26/电脑端截图方式一赏/index.html","4a4082e4459820b79def6d7fe94572ec"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","2251e7c3799ff0f8f7b168971548f2da"],["/2020/12/27/最安全的浏览器tor/index.html","b3d8ea73a586496e141da762e31d3713"],["/2020/12/27/网易云刷等级和听歌数量/index.html","a82596e0ebb331fc6bb4aca244612ddc"],["/2020/12/28/freenom申请免费域名/index.html","5cff2724603de87c64e94fe7033390a6"],["/2020/12/31/机场/index.html","f6b7c1bd6c5de540fee93439a0134302"],["/2021/01/01/M1/index.html","a1fb9de1ed9dcc011cfac023fbebf130"],["/2021/01/01/compress/index.html","25fdc3bdb1778ae5bbc16da41f141ece"],["/2021/01/01/infinityfree/index.html","44e24bf960924780fe7b7f88b66481c6"],["/2021/01/01/硬核翻墙/index.html","547e0a2e5d08847c0ad1609c0961b14a"],["/2021/01/02/qq/index.html","1c7cefcf928b9540696f68d16c23b35b"],["/2021/01/03/netch/index.html","fcf198eb4aaa8444af8827523b3c76a2"],["/2021/01/03/waifu2x/index.html","21cf4d2d8f7bdd03a1d736ad9d2e3f7b"],["/2021/01/04/ads/index.html","e9bfc99dc7f9768788db13160a3982a9"],["/2021/01/04/games/index.html","3a41bc13901d725f7e4a15dcec32f9b2"],["/2021/01/04/heroku/index.html","620c8f5ee42512eceff9975c92c8f8bc"],["/2021/01/06/movies/index.html","115017ec41e7437c1a637127bafba979"],["/2021/01/07/google2020/index.html","f8685d59eb571783a5ea0dced016820a"],["/2021/01/07/lucky/index.html","89bb2529772254aaa368e22175d0ce3d"],["/2021/01/07/spotify/index.html","0d3dffb4a62333b50472ba84d2827c58"],["/2021/01/07/thunder/index.html","9a5ace0539bb7c8b23a6f58084b92fe8"],["/2021/01/08/adguardhome/index.html","3bc42a5d8357fc2da3f0719d69e1865b"],["/2021/01/10/IBM/index.html","ee30af0d881e673d4da1e53466abe2c4"],["/2021/01/10/potplayer/index.html","0fc8e9c6e27da0840987dee4ca2392a0"],["/2021/01/10/sakuraanime/index.html","bb36afbab9f234934353fa31e5e8e469"],["/2021/01/10/美剧星球/index.html","31fbf9b02d0524b914ff206bb1c8bc73"],["/2021/01/12/telegraph/index.html","5c90991efa15444b4fc159f1b2b546c5"],["/2021/01/14/comics/index.html","72033e2c74e7f54c65364bda0bfe7cc4"],["/2021/01/14/ftp/index.html","7694cb36c16d6e5dd3f4b42b22ba73bb"],["/2021/01/14/oraclecloud/index.html","988cbc270850b6d374a9ddb4ad374d9c"],["/2021/01/14/porkbun/index.html","c3f3bf99e3d282058fd49dfd6b931027"],["/2021/01/14/powertoys/index.html","24687978647d9aa8f7bc5ed43f6d893b"],["/2021/01/14/taptap/index.html","df7d051ca1b84eff1119c21cb0532d1f"],["/2021/01/14/ubuntuvsftp/index.html","5c2a738538146ba6c97679d058a8327b"],["/2021/01/14/小说/index.html","57f6e5e8f471ec7f0bec1698bca0aa15"],["/2021/01/15/freeproxies/index.html","a1239c0233010b54da1ca31b2e71d682"],["/2021/01/15/incaseformat/index.html","b0e228a7dddcd4a7caf9db1b8ab4803c"],["/2021/01/16/euserv/index.html","89d4052885cce702b48fcb593c64ecf7"],["/2021/01/16/winxray/index.html","e9c14af60c3c9dda20ce96f59c22a3e1"],["/2021/01/18/qqreadhistory/index.html","323c6d1a293969bf0d54d15ba4b0d1eb"],["/2021/01/18/qqrevoke/index.html","60359cd9f8ff60f8910c6f5f9fb4cbaf"],["/2021/01/19/freevpn/index.html","6829c443d0dc6fa5ae8d10109f81002f"],["/2021/01/20/browsertrack/index.html","c7a64919b561d31914f7fc9c063b92a9"],["/2021/01/20/v2ui/index.html","b7ad2af1afb3b04caef6547d58b23cf1"],["/2021/01/21/failedtoconnect/index.html","da20015644bbc5a5f173e2ef6f20f806"],["/2021/01/21/gitcalendar/index.html","843e5482933666301f1327d53c2ae914"],["/2021/01/21/markdownformat/index.html","2c8fc435abcc5e26b8a40cc4afc308d3"],["/2021/01/21/markdowntable/index.html","936e662c4430b3527233ff28c6988cc1"],["/2021/01/21/vercel/index.html","5e4ddccfcb41eeb0bd4e12fb60d43c99"],["/2021/01/22/hardware/index.html","c4b8cd3b439c75d45d16f54f69e263de"],["/2021/01/22/muviz/index.html","dd9b3cd26400dcdd37c1df297181467f"],["/2021/01/22/randomapi/index.html","d5be2e523bf0bd85c06084a913603d29"],["/2021/01/22/searchimages/index.html","118531cace4ecfb666bf52e0cd5c4e8d"],["/2021/01/23/RX文件管理器/index.html","e4b08649be11a883625e6b0b619e96bd"],["/2021/01/23/chromeflag/index.html","bac811c16174ca705a6e3b3713af04e7"],["/2021/01/23/qttabbar/index.html","894c0a45d938c1c1cd50464ab27b0446"],["/2021/01/24/githubspeedup/index.html","a0725d99b2bfae8fd597b60a61c038b7"],["/2021/01/24/jsdelivr/index.html","b66a97408e1ac38ec9dfb65552f6d86c"],["/2021/01/25/note/index.html","154a9d16ac22444a8b27ee150b2688f3"],["/2021/01/25/soul/index.html","97eaa15781f4d599676ad34d0002467d"],["/2021/01/26/herokuxray/index.html","ca7e4044f8be90b4f876e46b8c52bd84"],["/2021/01/27/proxypool/index.html","0dbdb63992db47e186e1fd277c3a65bf"],["/2021/01/27/tracker/index.html","9cd9412adda6a020065ef8f65b84ef89"],["/2021/01/30/pandownphp/index.html","e94bd98684f90c1307de64d07e0af5c9"],["/2021/01/31/newgroup/index.html","1416afa0384aaea7071326333e9e4d15"],["/2021/02/01/clashlanguage/index.html","cdf0fa1be18d904921e34195f73ccf9c"],["/2021/02/01/encrypt/index.html","f3d1cf5897f92db0f7029143a8e15284"],["/2021/02/01/footermotion/index.html","c6e16e93aa1c6fb80d672be4f15f2c41"],["/2021/02/01/gitter/index.html","493503c3fe7707f5aa870aa10cbdb8cf"],["/2021/02/01/pixivtop50/index.html","434e80d9a2ef46f3711eeb1e4338ccc8"],["/2021/02/01/scrollbar/index.html","e531401c4c389a94df4945ff446b10cf"],["/2021/02/02/clover/index.html","fe44e4e77bed59bc88852b9cbf716b3c"],["/2021/02/02/maya/index.html","0163533b2d856f891f64e9f8178ea43c"],["/2021/02/02/speedcontroller/index.html","1b2f53e86dc30612c78c220f75fed759"],["/2021/02/02/yesmusicplayer/index.html","e2c4f7edb2aa34a3a4b75ecf4135794e"],["/2021/02/03/lenovoonelite/index.html","f586d1430f19490bb902db805ba50c76"],["/2021/02/03/skipads/index.html","79edf3b131d420df92ebca55e5e43f48"],["/2021/02/04/picseed/index.html","4b7f09929af70da832ffc94a6666cc95"],["/2021/02/04/renren/index.html","ba57510b196815c8ae6c4246756f483a"],["/2021/02/04/serverstress/index.html","68b04ed755b75214327b3aafa7a9464c"],["/2021/02/04/wikipediazh/index.html","db0b8a224df45c0b780c3fb8031b4aeb"],["/2021/02/05/googlevoice/index.html","b1c40ae57cc04c84aaefb8dc1106842b"],["/2021/02/06/clashconnection/index.html","e738be7e11e084cc3b1cad329ccd5407"],["/2021/02/06/gvtransfer/index.html","e862b09c559193565bf0d38623a818e5"],["/2021/02/06/todesk/index.html","5d78851a9f023f51033847b64fd85456"],["/2021/02/06/vpnblacklist/index.html","4e588206c053ed33aacd9a327cb34482"],["/2021/02/07/mklink/index.html","b170d4cec0dfcb7fb97bb5e01ca96229"],["/2021/02/07/speedtest/index.html","0341e0c6735d614dce2fb19df1246b26"],["/2021/02/07/translate/index.html","23c39e2dc0788c5ab8e9239b70cc8218"],["/2021/02/08/ewomail/index.html","d2403554c3c7bb043ecc1fa6b879b656"],["/2021/02/10/officee5/index.html","b42a3bc350649bee75f47a8c67ac31db"],["/2021/02/10/raidrive/index.html","019a0cef7209a1fc065d682fdb0900b9"],["/2021/02/13/e5sub/index.html","cce0a20b450e00b408a3118c11913eca"],["/2021/02/14/screen/index.html","39817e2cf30b66fb28e143b2a1f75350"],["/2021/02/15/clashtun/index.html","5fc811bf2329fd49159ca2fc318afd6a"],["/2021/02/15/messageboom/index.html","d3c86fb782f414c3617254a488ab3e52"],["/2021/02/15/oneindex/index.html","40736f923e0b11bae1f6080addfea401"],["/2021/02/16/govsites/index.html","1935e424a2ce33ec8d6ad8a6f95c747b"],["/2021/02/17/hexototypecho/index.html","696540407c0e52a8b094b1059575bf4d"],["/2021/02/19/fiddler/index.html","592096c370f98e5fd603ab26f1b6e2ef"],["/2021/02/22/potplayerset/index.html","d2216763403ccba2c8355beb69e8651d"],["/2021/02/22/studyresource/index.html","cabbe45a138264d2d05da0b21f454206"],["/2021/02/22/telegram/index.html","e545d892280a11e860247af9a8325edd"],["/2021/02/22/videos/index.html","658dfb639cc7f083e9325dedbb9a38a6"],["/2021/02/24/mtproxy/index.html","1a346d26f4427bb8361b7041fb641373"],["/2021/03/10/catchcat/index.html","850969e10e341d7f187e62b62c126f1a"],["/2021/03/10/neteasemusic/index.html","9d74e00ea0d6bfa12db324bf199540b0"],["/2021/03/10/surfboard/index.html","9fab62fbcb678fa1fd2bf32bae928160"],["/2021/03/11/vpnandjc/index.html","d70d3e35f9a2062d15d4e9380e3d9f5d"],["/2021/03/12/qrcodes/index.html","0491dbeff8b83832d78dd2b16b4a2b3e"],["/2021/03/20/qv2ray/index.html","a8e7958a403352272cd4f52bf0f42e64"],["/2021/03/22/freevps/index.html","9db6a2fbd21bea0a1c2b0a192aac6cba"],["/2021/03/24/tgstickers/index.html","6166a4d3ccc36bda2931b77281585442"],["/404.html","f204764f188d4584883abbef0d150e18"],["/archives/2020/11/index.html","6ac086bd89b1b2058ad464862fde06e0"],["/archives/2020/12/index.html","5bcad4ec783051fba4ddb4a5d75daead"],["/archives/2020/12/page/2/index.html","e68e831fed604f3fe6078067103c94b9"],["/archives/2020/12/page/3/index.html","335f413668efd7de52b68cf20af58561"],["/archives/2020/index.html","8da8f64612d75775b073f3fefffc230b"],["/archives/2020/page/2/index.html","89991545f6be30aa4aaf31db3f686164"],["/archives/2020/page/3/index.html","d3c47cbb96d24a5cdd48bb6c23ed0876"],["/archives/2021/01/index.html","77e97d0a33774d58996d0ca8958335f9"],["/archives/2021/01/page/2/index.html","a2e8abd4a352c0c38abebd24009b12f2"],["/archives/2021/01/page/3/index.html","1176ca97206ac73666d80ed0316d00e2"],["/archives/2021/01/page/4/index.html","4c77ca0ac67114a5984387ba522fdc8b"],["/archives/2021/02/index.html","571f184809a8f82af770853a261af439"],["/archives/2021/02/page/2/index.html","8e84d86e70fae42526595ae2c035d6d5"],["/archives/2021/02/page/3/index.html","3f660bafb61fd7bb373737bf3ddf495a"],["/archives/2021/03/index.html","504d74cf567ae708ef74aac949c41cfd"],["/archives/2021/index.html","138ab2090edd4f54af67e712aa562e0b"],["/archives/2021/page/2/index.html","3202d36de49be0eee013c9a785845524"],["/archives/2021/page/3/index.html","b5e01741c517cb8c5d6d955700273247"],["/archives/2021/page/4/index.html","dba28c75b652e7984af6da3b89630ba0"],["/archives/2021/page/5/index.html","08b5508c4b2d48b491fead755b2e400a"],["/archives/2021/page/6/index.html","654a6898a459f3a3705fc090672a4820"],["/archives/2021/page/7/index.html","f38e9f110748e58a19c3571934d144d9"],["/archives/2021/page/8/index.html","fe10d02bb937d9a3eaf1ebba133c9197"],["/archives/index.html","7d9407ac82d777e1a8a1bd3aa556da29"],["/archives/page/10/index.html","24749b8456e261731b90a189e4ecb969"],["/archives/page/2/index.html","ea2d93327ef59fa33b7303f1e2d6c784"],["/archives/page/3/index.html","1706641332bdd0821c3e36f0a867bdc2"],["/archives/page/4/index.html","3d6cf3d8a4ef1ba0f7a6446c71791854"],["/archives/page/5/index.html","2914fe75f4955f22aa4a53b8bc3ebcbb"],["/archives/page/6/index.html","ecb8238cb72bac0c701e499cceb3675a"],["/archives/page/7/index.html","e52546372ed3774ac23057fde51e979f"],["/archives/page/8/index.html","03e3afb1196a25422a551861978645fe"],["/archives/page/9/index.html","b0dbe269b03ad4b3884cc8aedcd7d431"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPN/index.html","839e489c1f987ce6b02936b380ee2b9a"],["/categories/VPS/index.html","96b8344f53095894d570a65ba0c76326"],["/categories/index.html","19a091af55bdcdbd97cc6fe10a85e912"],["/categories/下载/index.html","c11b38c2cf2df887f330a2edfef5a99a"],["/categories/安全/index.html","0d38510f34dc23d539ddb57c0f78f43b"],["/categories/建站/index.html","8ba740871e3a220e9ceaee972dd91ee6"],["/categories/杂/index.html","003f77439deb04becef7db9ccc44679b"],["/categories/杂/page/2/index.html","f28457512ef0e3713362466882afcaf7"],["/categories/测评/index.html","71015ea768e87942663299f009e4e7de"],["/categories/科学上网/index.html","77a18879cdb88064689e03a6603b4d56"],["/categories/科学上网/page/2/index.html","6a0d36e8079e10a50bc1fc27da7f8728"],["/categories/编程/index.html","b7e59795b109e1589ddc7259a1c7de67"],["/categories/网站/index.html","f049f6bbc01fa87779fa1ff1378147fe"],["/categories/网站/page/2/index.html","387ecdc01bf6d0d1ff7a13fb85b34fae"],["/categories/软件/index.html","f29f8fc538e7c6bd63ab6d99a740b0eb"],["/categories/软件/page/2/index.html","8e6426a7d32693a5ca39fff57a9f9b20"],["/categories/软件/page/3/index.html","acaa755c6c85f00140392ee04b6d3159"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","18cd097a15412f411c283c9d8cc876e2"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","a2368e31468709f69cdad4266ba63bdb"],["/ios/index.html","1c611fce74fb665359c20abba45df096"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","0f70a21f2c7118c7984723558fda694a"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","9d2a07ad8978bf833979f4a5cfea6ffe"],["/page/2/index.html","a1b18e0517a04dde7d8b35befc577a65"],["/page/3/index.html","c1dcf4b391e3a2de4c55d2491f820df0"],["/page/4/index.html","e94c7702b2ac2722df1173e897e8322f"],["/page/5/index.html","b9466c924f311f58a781f02c15b10a9f"],["/page/6/index.html","617f056c54b1c0fe6ee00a43beba03f3"],["/page/7/index.html","9e7287763da70e3aa61c39bab6fe7a1a"],["/page/8/index.html","110dd0ceb11a46987b2933e71217805b"],["/page/9/index.html","4a57b171b1b66ed81afc646cf2eeecd4"],["/payment/index.html","c8080e1f9b5eedca375e792e01cccbd8"],["/privacy-policy/index.html","452fae7dff547b4cd7034aad6aaf1fcf"],["/rss2.xml","252892b4bc81b6c9472f6940fca2cb25"],["/search.xml","e0280af7d605fa1c08eb115edfe8bea0"],["/sitemap.xml","2c61410008e2e4f1efe6fc33ee37af0c"],["/sw-register.js","2333c1a1a63f1baa43722aac2d08821c"],["/tags/5t/index.html","e75c74ba099f202332d3fcc65badf755"],["/tags/Clash/index.html","828e90f605d85f9e9676590a25314424"],["/tags/Clover/index.html","abb7fa4a6da30658307d753b6d7145b8"],["/tags/E5/index.html","bbcff2481c98d0c11479924229c8f88d"],["/tags/FTP/index.html","4ed9e3bcff8768f474e1d35ad1dc2538"],["/tags/GitHub/index.html","1b46dad91f6493cf4005b5210c8d203e"],["/tags/Heroku/index.html","5c52d1abfdc2af13b284cde1f8b3f638"],["/tags/Hexo/index.html","1e54b5e787f64491d6c9a7d186777a66"],["/tags/Lenovo/index.html","324ede831dd594a5f2ffb1c4e367e94b"],["/tags/Oneindex/index.html","ec0ac6b4a905ab64a2ea6e28cf8f08fa"],["/tags/QQ/index.html","34ad413b57d286c34db6bef57d805499"],["/tags/QTTabbar/index.html","00109627f6d3741cc3693ffb5d0c6d95"],["/tags/RX文件管理器/index.html","1d6693c845013b58c1eb68d5cd6ed12a"],["/tags/Todesk/index.html","524b406ede8a35fac9afa5a45842c2c5"],["/tags/Vercel/index.html","c8e85803f653cbf1fcc89778817c6164"],["/tags/ads/index.html","857c5f4ccedcc63c33268f0c45629171"],["/tags/api/index.html","d4a4e2e775b979f0bba732c5b9169abc"],["/tags/app/index.html","c1e0cb1d1448be5e1426cc172b9b600f"],["/tags/blacklist/index.html","55f8f32f0abccc7265e62c1df38b8b77"],["/tags/butterfly/index.html","4f63ccc981efc7a479e26a9602d734ae"],["/tags/chrome/index.html","d6be5fb8a494ca594f6e5dc8bf260442"],["/tags/cloudflare/index.html","d040cb7dfa9ef20edca987d62a423d23"],["/tags/cmd/index.html","710d7549d5aec5fbdbf4ce4c1657e398"],["/tags/c盘/index.html","a46af1bd460e7c81211195b05d013636"],["/tags/email/index.html","283a02f61a63da3729b30f436cc35fd9"],["/tags/ewomail/index.html","d849f7befdf2ef27b5002662c4a673b3"],["/tags/fiddler/index.html","19c2137bdee35a677c5fea2b8c66febe"],["/tags/flags/index.html","bc7739f761425379547139d4019eca9b"],["/tags/footer，页脚/index.html","ebf755b02f10f7e48df05b28be1166af"],["/tags/galgame/index.html","17154380c80a60d64fccdce8deac7900"],["/tags/git/index.html","5c295b6d18bc38a4ed7824a95d33f6fa"],["/tags/gitcalendar/index.html","c73d75fa8fc6e34e3fca3007ff7294ab"],["/tags/google-voice/index.html","6a740644722833b62761d296f9a65e15"],["/tags/gv/index.html","aa7d213ace922dfeb1340ab054d1d684"],["/tags/html/index.html","676bf71c7f288fb407c8d3eb488df1c7"],["/tags/index-1.html","8b2aa4b352c18f041645749b823b50b2"],["/tags/index.html","021c42ac509aaa8aaf876fdba6d995a5"],["/tags/js/index.html","a5283ce6cd9aafef9530b6bc530cd7e6"],["/tags/jsdelivr/index.html","15ef126f3da2d5618da8f7ca5cb582b7"],["/tags/linux/index.html","e2e8f32656f07acc26d95c560af4f313"],["/tags/madVR/index.html","b7c3786fd76aeabe7bd5fac71c55eac5"],["/tags/markdown/index.html","e9d4cd4485bfaa31f3baef2487416327"],["/tags/maya/index.html","7a74a447d1f83de70373e24cceeb4ea0"],["/tags/mklink/index.html","379dc8adf91aece4d22a8d7c872ff42a"],["/tags/office-e5/index.html","522d37ebf7c692e57a1071b651136224"],["/tags/onedrive/index.html","2325623b9d523c13cf8d446ccd9e8e31"],["/tags/picGO/index.html","edcbd7f54d684ac0a3b38f5d538b5a4e"],["/tags/pixiv/index.html","c26025853142d1247bc51bb3cb2fecfe"],["/tags/potplayer/index.html","3e7e1bc8c2c46f2813bdd7cc8ac28de6"],["/tags/proxypool/index.html","97f62066a57d8ee2507c62297a924a4a"],["/tags/qbitorrent/index.html","91c5bed3ffbb88e062ac1b51c6f578ee"],["/tags/raidrive/index.html","3569768b13206a5bba5834aca80f4ab8"],["/tags/screen/index.html","d69b1d834572c0a0a7a7dce1b8eb9293"],["/tags/speedtest/index.html","8392a95fb8d84342aa0229f18b458913"],["/tags/ss/index.html","6ac3216a8fa3cf08be4957104d9210dd"],["/tags/ssr/index.html","81870c066b9865cb035b1c6262838e1d"],["/tags/stickers/index.html","de16d922370580e9e477bb2a9e36865c"],["/tags/surfboard/index.html","e556b19faeaf683338daab2fd09a4f19"],["/tags/tap/index.html","7ad4e6f6c543263d4f668a539e5ba55c"],["/tags/telegram/index.html","13ffc82fe93f69eb4ef48997d9763882"],["/tags/telegram代理/index.html","c34644b3203bd665543a36e6e9fc1061"],["/tags/tg/index.html","c3afe1aba5eba46250bd23e3fd75859b"],["/tags/tg代理/index.html","d519f4bed7abe77dae0c46518f02f0ac"],["/tags/top50/index.html","f47b5847b4c5aebe113966f1ba276483"],["/tags/tracker/index.html","a03a9c3f0fae01b995c318229a087c52"],["/tags/translate/index.html","51c14d534744af7db9663ef3c9a4dc92"],["/tags/translater/index.html","960480d58aa92dfa82710f9e0548fe50"],["/tags/tun/index.html","6d77eab74f7264ab0bbd5889a2b2de01"],["/tags/typecho/index.html","d888ee43ab76379dd39c609b290810fc"],["/tags/v2ray/index.html","34bb4d1f455e05bf58990018f46faa40"],["/tags/vpn/index.html","308fba9f4fc45915ae6ded6a68cb9637"],["/tags/vps/index.html","aaf513d72b87390687e2362ecaa282dd"],["/tags/windows/index.html","137d1960a02126e4bf209be0542bd3bc"],["/tags/windows端/index.html","990fece518b65a3a69f38affe84740dc"],["/tags/xray/index.html","7bd473013c4f66880213d47c8c5ea55d"],["/tags/下载/index.html","6f091facd8a958db4d4f64865a006766"],["/tags/不限速/index.html","121dfaf6463b09548c98071f63523359"],["/tags/个人网盘/index.html","c55bebd359571285cf2f6b76558ec409"],["/tags/主题/index.html","6300cd552bf2b8619729a71307890bfd"],["/tags/二维码/index.html","ad641976c9feee71ac052be80ed374d8"],["/tags/云便签/index.html","dbec45804e3db855ef9fbbe5186e562c"],["/tags/云盘/index.html","07ba852110942d00bdc97e10c445df9b"],["/tags/人人/index.html","f51fc4061a49810bc09156bb8cce94fb"],["/tags/代理/index.html","00f0a0594d94fd70258ef2749690be28"],["/tags/代码/index.html","c09da39bf964ddbcbb584052684974f1"],["/tags/优选IP/index.html","6a06d34627791bd51dda482c4d27493b"],["/tags/便签/index.html","59721353c53025051ff11e661f324580"],["/tags/保号/index.html","ce3cf0978e3a7469acb77189a0d8e53e"],["/tags/免费/index.html","aee1f78f90fab30efda8111fff515b9a"],["/tags/免费节点/index.html","f492fb828ae6bef0f01138047c4c694c"],["/tags/加密/index.html","0fad9504ccc23fa587977ad09d2231e0"],["/tags/动画/index.html","dfff33d75d215f9e802b9976947fce91"],["/tags/博客/index.html","d4357df9bbdc311582a789422edff19c"],["/tags/历史记录/index.html","37d4ca8250a8848c4a09284b62c54156"],["/tags/压力/index.html","7756843bd5a35ffa67227f41a019d46b"],["/tags/压缩包/index.html","66cfd0953fda589a3ea9a9a66610c083"],["/tags/反代/index.html","880a1386574ddaca30d301b2019213dc"],["/tags/可视化/index.html","2baa8a1af2c7e4e0df0b1f5791b2246f"],["/tags/命令/index.html","03d623596da8f69bb709966551f08372"],["/tags/国家/index.html","5d69e544dec37018c18ebe6911ef828d"],["/tags/图床/index.html","58d74d377a63a15d75cb0a6d97bb7d10"],["/tags/图片/index.html","46a47c1281b0c2869aaee29bf2e17424"],["/tags/域名/index.html","727af98c0a80b9e57937d0f347aa3b18"],["/tags/多标签/index.html","737edfd5f2c2990862805b448966fe3a"],["/tags/存储/index.html","2fc1d2bade130452117fa4dd4ab673da"],["/tags/学习/index.html","5d7467bf15c7b04d17de319f88b12f86"],["/tags/安全/index.html","22a9bfaf520e50796d16306caf5467f1"],["/tags/安卓/index.html","564524fb32ff8efbf969c27873cf76f4"],["/tags/宝塔/index.html","e1fa65da1c7e2998476b994543b2bf6e"],["/tags/小游戏/index.html","bd78e43d504e6c4551cc549f33279401"],["/tags/广告/index.html","2531c9557b147877326ba3bb3a65e06c"],["/tags/建站/index.html","cde47d821cdb0189b4ef198075afd5af"],["/tags/影视/index.html","ccd9f34aeb79e676707dae9208946c90"],["/tags/微信/index.html","a3ed94d0c4caa5f5ff894e0a456ac9d4"],["/tags/快速启动/index.html","c8716920d83a6b774a410b70c20deee8"],["/tags/手机/index.html","835e528abde15de1879841b027881f40"],["/tags/托管/index.html","7e631763434e786cbd5ffbf3d55be26e"],["/tags/抓包/index.html","a6eb8ada4f5cee07e97e3739823d7800"],["/tags/抓取/index.html","cc25193e9cd1d41c5b08a54f7ac03680"],["/tags/投屏/index.html","193576517eebdd9773ddae7f30e92e09"],["/tags/拓展功能/index.html","ad915a3dd47c67a57dbe99016637407e"],["/tags/挂载/index.html","5f93bb7e77a9003b51716203c221c050"],["/tags/指纹/index.html","a299f9c4463e3564abfb77e8a5bac18c"],["/tags/接口/index.html","bd303cf4bba4dfb03a9aa38ebc7a56df"],["/tags/提取图片/index.html","9d5286d1aa18a3735b7388bfdcc86335"],["/tags/插件/index.html","d65f0150c7e49a4ad7f0d74e3565cad8"],["/tags/搜图/index.html","f5fa089d4ed28b76567a0f8fac80a8f4"],["/tags/搭建/index.html","d965046148b51ec2cce0e227744ae13c"],["/tags/撤回/index.html","585a9a31bce7ea9afaee9ef0532bf044"],["/tags/播放器/index.html","35483ccc5e4cf649321dbbdd37832e8d"],["/tags/支付宝/index.html","72afaa8ce0a2d186279d24f0e788252f"],["/tags/政府网站/index.html","0508e8628977450c2a08ad000837b6ce"],["/tags/效率/index.html","9f676a96bc8a2db72bf75aa7298b1714"],["/tags/日历/index.html","cdbc94dfa5dbb6be3ee776f2bdebe75f"],["/tags/服务器/index.html","645806f880d0068b1054d7b8cdce7194"],["/tags/机场/index.html","c3454fe2918372016a70b168f8b17327"],["/tags/桌面/index.html","b55a5e8b9079ef5239aa5d4772d35670"],["/tags/梯子/index.html","6a5dd99255e0612af0a55767dc02101e"],["/tags/检测工具/index.html","b9a9d50fcdb5559f2e676b6d38fcbb67"],["/tags/汉化/index.html","416f570c8ce62c36bbcae81a951dd73e"],["/tags/测压/index.html","b3250e048d856e4603a8c1ba70363ac3"],["/tags/测速/index.html","c2c2ace53e45e2cba5f083c49b919ff2"],["/tags/浏览器/index.html","9d4ad5742b91c0dc81419ac95dd79731"],["/tags/清理/index.html","6c0ddec39e9ec073672e6e61db7cd7a4"],["/tags/滚动条/index.html","d6462c5212cd48c0192eb95b527bc53f"],["/tags/灰色歌曲/index.html","9697792702220fa3a47010c460328469"],["/tags/电影/index.html","33d604557f26925ccf898c2dd5a720e0"],["/tags/电视剧/index.html","f9bc9364248dcffb6be0eafd6838c985"],["/tags/白嫖/index.html","79a89b8a31d1728bd5cf5c13a842d503"],["/tags/百度/index.html","ca4dfa26484c39b4b22672dadf99cead"],["/tags/百度云盘/index.html","4aff6b27c9b8cac31dd3292f2319b98f"],["/tags/百科/index.html","3fd244dd0f6c0398ccda702f6295c04f"],["/tags/短信/index.html","106920a3b8489220d26769e5d95ce585"],["/tags/硬件/index.html","042caed33ccb440f001fbc17c37013f8"],["/tags/科学上网/index.html","e9c713cf52c76e9ee08c25941f53ae58"],["/tags/空间/index.html","5dd346e5e0759658575bd7efe99dccd0"],["/tags/笔记/index.html","a6286717ce3ab817309397756774248d"],["/tags/简洁/index.html","58afb22f53ad91716467b8836f39b25a"],["/tags/简约/index.html","970a5fced957aa1f9af1fcb1920e40d0"],["/tags/维基/index.html","b424af5baa4cadb2769697819cd63de3"],["/tags/网易云/index.html","481f0e05ee2a490c2016945a085705db"],["/tags/网盘/index.html","2a4d0dda5368641c767a7a9197ad2f38"],["/tags/网站/index.html","414a117225a8279963f1a2980a9aeebf"],["/tags/网络/index.html","cf3fa4bd0177d9f38b31ae4489803e61"],["/tags/美化/index.html","603292fc8dfa7e445189343ccfb58e8c"],["/tags/翻墙/index.html","afe16ad1ead80d4af101d7b8c03998df"],["/tags/翻译/index.html","8fe989f520a68a907e47d76691a8cc44"],["/tags/翻译器/index.html","45851f575586cdadffd5d0053d8e5a8e"],["/tags/聊天/index.html","d4dc9f4d05488470edd8642570ab5a09"],["/tags/聊天室/index.html","b0eafb5b7b8e0c9cd6d7917ca97cecf8"],["/tags/联想/index.html","9dc6aafaf31609ef352b357e7ba64b13"],["/tags/节点/index.html","a564bc4d2682b3e9c2a8dca21bf4f8ac"],["/tags/虚拟手机号/index.html","93a4d31896dc92bdf3290607100622c1"],["/tags/补丁/index.html","2c0ff6e87d9b0264b5f203c510c396c8"],["/tags/表情包/index.html","d8f66faa6fc20c3110a0ce175357bfa4"],["/tags/视频/index.html","8773f0a01939774c75b4e27aeea9b81b"],["/tags/解析/index.html","725962bcf09050af69f29809da14b69f"],["/tags/订阅链接/index.html","2ca74064e64fd1be1a7ff79cf56fc034"],["/tags/记录/index.html","32638a4838cb32b3dcf698fe644b9750"],["/tags/识图/index.html","a39c853b2a090dd918105ed439f43acb"],["/tags/语言/index.html","cf0e55dc766eaa481f8d5b1bad65dfe0"],["/tags/资源/index.html","3a78fd8a8673ad1bcd2d897ec49598a4"],["/tags/资源管理器/index.html","99c3c0074954dbaa5ecc126bf6cde936"],["/tags/转移/index.html","e25b0cefd71f5731fd12d804dffc9c3f"],["/tags/软件/index.html","37807f0b85b4cc6c55260464cb43c054"],["/tags/轰炸/index.html","011ae742438b18a2a2aef31b2ff7049e"],["/tags/迁移/index.html","7d15db7cf9fa32b18e1b88732153183e"],["/tags/远程控制/index.html","0cee8fa372adc79792c39f2dfc45f106"],["/tags/连接/index.html","200eaaacf2e5c511a375b1833ccb2669"],["/tags/追踪/index.html","4a878aa2fe383a834198b52d81635a26"],["/tags/速度/index.html","2678202008072dcda892aab492983434"],["/tags/邮箱/index.html","9e67ebadc10225cc52540dbec72a5e85"],["/tags/酷炫/index.html","1a0d6774eac00b243fa75eeecf0b8cfc"],["/tags/钓鱼/index.html","480e2f355fb99975f184c624499d9fd2"],["/tags/镜像/index.html","f71e8375cc4c3e34ccb237bca108d8d9"],["/tags/随机/index.html","a758c1e46fe93e0f377848efed564c31"],["/tags/隐藏/index.html","927c762764b971b2f5aea7742b392fae"],["/tags/面板/index.html","9232674272e927f941b04c91173eaa88"],["/tags/音乐/index.html","0631f87e32927dbfc18788dfc6a1e26d"],["/tags/高颜值/index.html","9c139da653d35f91f384c78063c6708e"],["/tags/魔改/index.html","289178faf363968ca01d8797f4488dfa"],["/tags/黑名单/index.html","0043dde4566a44ef5d3d8f90d3deead5"],["/urls/index.html","548624c63687cc0dd1f570308dda5c72"],["/vps/index.html","867c9970c279c8bd729eba348a30bbc6"],["/支持/index.html","634939fb5bf2e9afbb613e85aa024d12"]];
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
