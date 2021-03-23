/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","12f136c103a473372d3adf36b320334d"],["/2020/11/29/clash-windows/index.html","e40147351365d436197e3f3c73dd929a"],["/2020/11/30/websites2/index.html","b9ec3b04dd5a1517b5d35e2a2b283222"],["/2020/12/04/iphone4s/index.html","c27c438aca55f367d09464080a284aef"],["/2020/12/04/onenote/index.html","750d5068aecd60454cb98d0c71afd6b2"],["/2020/12/04/wesites1/index.html","e673dc32ed84a1b78ca9d23e3dfdd7aa"],["/2020/12/06/nokia808/index.html","d18a16509fef5aeb4bbbb5be1cf45a8a"],["/2020/12/07/ipad1/index.html","2551592df084c5ab034a81debfe137b8"],["/2020/12/18/freesubscribes/index.html","81f48636678df3d84a9620c49a431dc2"],["/2020/12/19/musics/index.html","4256a8e78beb3ce296e6291e82f5acc5"],["/2020/12/19/shadowrocket/index.html","797710caf1cb9da900bb2d6de15dbf95"],["/2020/12/19/v2ray-windows/index.html","1b664798042fe6c44d4bfe52f668aa06"],["/2020/12/19/v2rayng/index.html","4cb3de2951fa2a6fe731069747ba0dfc"],["/2020/12/20/beoplay/index.html","e7421328551e6f14d1214b69f8401d42"],["/2020/12/20/订阅链接转换/index.html","05c1540b591458599af8508eaa95d535"],["/2020/12/21/chrome浏览器下载提速/index.html","afb02f4a540adfa383bc1f4c8981cbe7"],["/2020/12/21/免费128线程并发下载xdown/index.html","185983f7f960ff8d062189ee13870e45"],["/2020/12/21/免费32线程下载软件ndm/index.html","f4d562954d39ec2d17fa084d7a32be65"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","83b00af5a83654120eeeece0112c523b"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","a28791154fe51eb1b567578fc8a37e42"],["/2020/12/21/广告怎么知道我在想什么/index.html","51ecd6b95c9b0b918da3e0f59c2cea18"],["/2020/12/21/无名·引子（小说试写）/index.html","2a9ff0d07a7dd85ed26c1e5e8fe9546c"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","e431362514d38ca5e64e65111221f0dd"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","c168365addb976c677056dff2adf2760"],["/2020/12/21/高速轻量下载器aria2/index.html","e3370c27cefed153a4e5a9050989fd7e"],["/2020/12/22/2020-cee-roo/index.html","f00bb0b79fc1f66ec9aa90835a116444"],["/2020/12/22/firefox插件、github、steam富强/index.html","89b3c33587f5f331bb452bc05fd58ecc"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","eb26e5c44574fb84565a3b7e47a33791"],["/2020/12/26/python-day-1/index.html","f53225d5e6998322b2dc85c085ce322e"],["/2020/12/26/python-day-2/index.html","3a1037e8fee8ba1a0520d83ebe93151f"],["/2020/12/26/度盘不限速下载方式一赏/index.html","22beb369bea9876630c212997c61cc1d"],["/2020/12/26/添加开机自启软件/index.html","7bf98f9cb5d397d3c4ec3225390d28bf"],["/2020/12/26/电脑端截图方式一赏/index.html","2130303ce41f6286baefa01c6cd26c8b"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","2ca13bc35c95a69ee2c2a47736e2a7cd"],["/2020/12/27/最安全的浏览器tor/index.html","660c73d832228923a30ccd473de048ee"],["/2020/12/27/网易云刷等级和听歌数量/index.html","35e19ca2cef1c7aa5ab53d33199683c0"],["/2020/12/28/freenom申请免费域名/index.html","e3bd560e9c3751eafb14fb49f959aba9"],["/2020/12/31/机场/index.html","f2f188509787deb823effec841b17c59"],["/2021/01/01/M1/index.html","713e64baec0a68effd34d406f467ce71"],["/2021/01/01/compress/index.html","16e513499fad415c6b04973167779fd9"],["/2021/01/01/infinityfree/index.html","061c72177873ad038a9681b9eef1246e"],["/2021/01/01/硬核翻墙/index.html","0e0de51fc4c56037d06dd28c93384ef9"],["/2021/01/02/qq/index.html","a8cb84b4a9e2ebaa94be127a11e8b5cb"],["/2021/01/03/netch/index.html","ed479a436e079fcb008d16f23d9d7def"],["/2021/01/03/waifu2x/index.html","2ba3a15d3707f3abf6a7cc2380a174a0"],["/2021/01/04/ads/index.html","70b8a3a881c9b6792ba6f600e0e90874"],["/2021/01/04/games/index.html","37f29b6b7840a7d274c531960748aa3f"],["/2021/01/04/heroku/index.html","4ba7d05e86c3e7d3a692e212662cc846"],["/2021/01/06/movies/index.html","7a6c3233d92406abb49f4ff8d42dffef"],["/2021/01/07/google2020/index.html","b66a6e17731b0be99dddf0eb7c9a08f4"],["/2021/01/07/lucky/index.html","02f236999b281e2febf20c0472fc477d"],["/2021/01/07/spotify/index.html","86be360bdcf955aeb3abd97063ba1aef"],["/2021/01/07/thunder/index.html","9bf2a3f5df7710bb7f5818ca2606437b"],["/2021/01/08/adguardhome/index.html","35c9ef616c8c824aab3b7526be3b2474"],["/2021/01/10/IBM/index.html","d2fb6cde131a7c42704a9859f23df3bc"],["/2021/01/10/potplayer/index.html","6156215b15bc7b598b877d491a0b0ede"],["/2021/01/10/sakuraanime/index.html","18aefc718d5ced08f7ac4e16db69c42a"],["/2021/01/10/美剧星球/index.html","cbd968a6e115527e0b301f800ee00cb8"],["/2021/01/12/telegraph/index.html","c9ed066c69ee400e06a6bcf05b04186a"],["/2021/01/14/comics/index.html","eb2e03fc4ae50715c612bec7ca867113"],["/2021/01/14/ftp/index.html","587cbc75e9914ee862b6633b8a15dc99"],["/2021/01/14/oraclecloud/index.html","8fe7f1390bb63778186dcde95cd7a6f9"],["/2021/01/14/porkbun/index.html","b8b71a3c39dbd4d48d1155bddb1bb789"],["/2021/01/14/powertoys/index.html","ac49ed40d518a288ddc8ff172dccf309"],["/2021/01/14/taptap/index.html","f2980ea50be45f9f4d4d74b16cdc65ae"],["/2021/01/14/ubuntuvsftp/index.html","1e78cd37a41c0a967fd6566c2077ee78"],["/2021/01/14/小说/index.html","f8f31624d760b0d34544afccf15c55fc"],["/2021/01/15/freeproxies/index.html","82ed297095b0f6f8649212b307aae3af"],["/2021/01/15/incaseformat/index.html","1534096aeeeb8f7252a5af8df51d0542"],["/2021/01/16/euserv/index.html","502410e47a3445e6a8fe5a7ed39a8f6f"],["/2021/01/16/winxray/index.html","304fd94949d7af811aa5a76d258177b5"],["/2021/01/18/qqreadhistory/index.html","93441b21b4c20200a5ac967812a8ba93"],["/2021/01/18/qqrevoke/index.html","50751ac4546ac7277bb6bb93676ffceb"],["/2021/01/19/freevpn/index.html","62df6bacc3bb7e831b71b017d0f76e7c"],["/2021/01/20/browsertrack/index.html","8b907291afe0f39d219116bd8e2a0067"],["/2021/01/20/v2ui/index.html","566ab9f9bcdd8f6df5f09793d858cd8d"],["/2021/01/21/failedtoconnect/index.html","75e834275154e1993e65f2b47ce6c125"],["/2021/01/21/gitcalendar/index.html","81fb494b5dc5e466d3a33723e2140fd9"],["/2021/01/21/markdownformat/index.html","d43caedfd3b9382c8ac4671dbcbf491e"],["/2021/01/21/markdowntable/index.html","d5c0c07352cb1c07276de3165464a4d0"],["/2021/01/21/vercel/index.html","e58860b125e8bba3344cd3b09a4a69ca"],["/2021/01/22/hardware/index.html","cb6022823cc4cd8fd4698312d3c12da0"],["/2021/01/22/muviz/index.html","b97b439f174ec353b91a7587e033cdb1"],["/2021/01/22/randomapi/index.html","414872821c903b2802cc5dd761429483"],["/2021/01/22/searchimages/index.html","bef772891db17dd6dc7a1a9cd92ad31e"],["/2021/01/23/RX文件管理器/index.html","393bd45effb1779c5e691c8d87cabb8c"],["/2021/01/23/chromeflag/index.html","7caf28e18cd7d55f920669af0583d412"],["/2021/01/23/qttabbar/index.html","44c6d129139ac4e5cac66801f4f63b87"],["/2021/01/24/githubspeedup/index.html","4fdb3ff0795f59bdb55d96e6b8418b08"],["/2021/01/24/jsdelivr/index.html","ca7d303113a64a98ea0a744f88539bf2"],["/2021/01/25/note/index.html","34465bc1561659ed5b02b7b97eaae8f3"],["/2021/01/25/soul/index.html","2a0d028c9720c665f36b42ced03b8f8b"],["/2021/01/26/herokuxray/index.html","30696ff99368b76dffc42e1b78d319f5"],["/2021/01/27/proxypool/index.html","cf3c79ee802d59841ea83061424e7991"],["/2021/01/27/tracker/index.html","9909267bd056d3f326d292d27e9d00d7"],["/2021/01/30/pandownphp/index.html","27c7f701fd73206ed5219c132e9fb34a"],["/2021/01/31/newgroup/index.html","957e0becf6b4bf715967eee14d7c1ab4"],["/2021/02/01/clashlanguage/index.html","2b3bb2180d5e6360c8c3c7cd8508253d"],["/2021/02/01/encrypt/index.html","0b6f633d1b641fc65a95bf94766a2b17"],["/2021/02/01/footermotion/index.html","1c442bca974f9eb480ae4a5cd5a710f6"],["/2021/02/01/gitter/index.html","679b6b1063e1e441f1218a7ffeff8f87"],["/2021/02/01/pixivtop50/index.html","5fb6b75b6a1308fabc0b8fad14973c4b"],["/2021/02/01/scrollbar/index.html","ff6a02c76b35b4355429c9c856d2809c"],["/2021/02/02/clover/index.html","4d0df53da85de4e7dd76cce4877238cb"],["/2021/02/02/maya/index.html","d0e1ac666c68e4d60b82a8eb048f1197"],["/2021/02/02/speedcontroller/index.html","b83777cbaa0429ca098f748e4f073cc7"],["/2021/02/02/yesmusicplayer/index.html","c9b63193cf4e2116b5ac9c75edbed3cf"],["/2021/02/03/lenovoonelite/index.html","66386e2e3f393f71392fe73a85f209bc"],["/2021/02/03/skipads/index.html","a321e0a9dda46dd3146460121eaac877"],["/2021/02/04/picseed/index.html","ecb2470ecde5c8e4cabad40e904a6147"],["/2021/02/04/renren/index.html","3fbafcdd46d0c0b13218edf789ae561a"],["/2021/02/04/serverstress/index.html","f00fc55e6925be2d10f9f3622fadf47d"],["/2021/02/04/wikipediazh/index.html","e5a06050b11d67a14a68c8d74ae49a70"],["/2021/02/05/googlevoice/index.html","610d07914ee1502e238fe6b68b8f2fb1"],["/2021/02/06/clashconnection/index.html","f55008fb118a031c95987d90c5fc16ad"],["/2021/02/06/gvtransfer/index.html","5f1a66638b8c03c3b292b474c97b8343"],["/2021/02/06/todesk/index.html","c70b0121b55c6a7259c0c3500d7c470b"],["/2021/02/06/vpnblacklist/index.html","9577b18081ce22f0270097958a3088d4"],["/2021/02/07/mklink/index.html","1d4547c903fa5c05c7135914bf7a9665"],["/2021/02/07/speedtest/index.html","334ee2b69d44c936598622cbaa178285"],["/2021/02/07/translate/index.html","88a570a32081c14e73b909479e5463ef"],["/2021/02/08/ewomail/index.html","66eed7cb905a0fb27e0058c7d9ec43f6"],["/2021/02/10/officee5/index.html","8bbcf0d72630623876907a6afca89963"],["/2021/02/10/raidrive/index.html","6665fab486f347d3ec0a9883f4af741e"],["/2021/02/13/e5sub/index.html","082796db70a34dd084e2c8bfe7a3a293"],["/2021/02/14/screen/index.html","9f224dc382b8be527787e429733cf740"],["/2021/02/15/clashtun/index.html","8d0dcaabc53c9cdb0fa80d155edc0c01"],["/2021/02/15/messageboom/index.html","fb7c64daa751f5ac3daf0cda7a62eb12"],["/2021/02/15/oneindex/index.html","fb5ff1d6346fdde776b4cbd32c34899c"],["/2021/02/16/govsites/index.html","ce70ab8f46231b730fa7c27a6b4318e3"],["/2021/02/17/hexototypecho/index.html","7b1bf7ed227633d86236bafb08c6e5aa"],["/2021/02/19/fiddler/index.html","560bf35cde231f698196850bc6f1973e"],["/2021/02/22/potplayerset/index.html","43d7e3bd2e32027e78530e96a24aa36e"],["/2021/02/22/studyresource/index.html","95c6b7c4480ea87e6e86704e3e62519c"],["/2021/02/22/telegram/index.html","f1627cfaffb6fddb09adcde52911b4e6"],["/2021/02/22/videos/index.html","bdfece425d3f254f5d899faf611b9292"],["/2021/02/24/mtproxy/index.html","42a2514feb395e2519ea2e392554a7bc"],["/2021/03/10/catchcat/index.html","37177c6387da1c193dba1e3c11142c06"],["/2021/03/10/neteasemusic/index.html","02c944f7ec51f9cbb00846669bcd8f2d"],["/2021/03/10/surfboard/index.html","03e2807ae0fc00918271aab69324ddad"],["/2021/03/11/vpnandjc/index.html","b3c962da7b1777908bbd4876934f2481"],["/2021/03/12/qrcodes/index.html","76f94151c1be99cf899b6d10078c25d4"],["/2021/03/20/qv2ray/index.html","f99877a776ff58c4d566a688edf08c55"],["/2021/03/22/freevps/index.html","b63b47cbaacdc354658537739b83fe80"],["/2021/03/24/tgstickers/index.html","721244273fcd19838d6474fccc73b880"],["/404.html","db519d03772ed6d0728a3cc7ad29d568"],["/archives/2020/11/index.html","c04cc268c3cc69a48b0a4d57f84420f5"],["/archives/2020/12/index.html","6082fdcb5f383252911983c652fd5520"],["/archives/2020/12/page/2/index.html","cc29abc88a2952e3fdf47ff775b1da6a"],["/archives/2020/12/page/3/index.html","159ccc8e52fa91dc7c9f2b3d44a62bd2"],["/archives/2020/index.html","aa12d021ce857a1294d163bb2a5dd367"],["/archives/2020/page/2/index.html","d2393885fb40c949990999bd46de98d9"],["/archives/2020/page/3/index.html","a145df23f05ede8262cebfbec0b6b8c8"],["/archives/2021/01/index.html","392882b062d14f831122d9d1e5ff8ef5"],["/archives/2021/01/page/2/index.html","e5e71c50ba5d6a3ebec519da10717d5c"],["/archives/2021/01/page/3/index.html","5f922413cab7a6d11992378376897e2d"],["/archives/2021/01/page/4/index.html","d39c7925289ab1c61d5a361a329b5a89"],["/archives/2021/02/index.html","9694ede07dc74362ba9293dfdae08732"],["/archives/2021/02/page/2/index.html","383ca55f571bd1dc5382b073bb50e6da"],["/archives/2021/02/page/3/index.html","9f3991c45f32d97f57ed716149b8a244"],["/archives/2021/03/index.html","3e4d88c22f81bfd9b3ca84fee87e0f5a"],["/archives/2021/index.html","75c5af654d9044c71d9d3c4ec2b1db73"],["/archives/2021/page/2/index.html","6a88237f7d4e3e2faf8cea236555375c"],["/archives/2021/page/3/index.html","9b762f929fe22ab61123fdd150db6aa2"],["/archives/2021/page/4/index.html","af4aeeba825aead7c63b4ce0e77cadc7"],["/archives/2021/page/5/index.html","acc4a9507794178b47419960542c748e"],["/archives/2021/page/6/index.html","d8fa204587060d227bf48bb5eb15320b"],["/archives/2021/page/7/index.html","2eb5923b453c80f690eb1c50b3f24d81"],["/archives/2021/page/8/index.html","8d2f678d3ea53ef5c1ebf56e5cbf5c51"],["/archives/index.html","c24f0be435a7b395f42603a11253b6fd"],["/archives/page/10/index.html","c276549460fb46ef5eebaf6239d0d018"],["/archives/page/2/index.html","1e75dc611926698182c9d4265b19013e"],["/archives/page/3/index.html","bad7e8a35d28acb8c48421ce10401e47"],["/archives/page/4/index.html","3a19fb8eff2d72be3c5f6565f440e3a4"],["/archives/page/5/index.html","c8290da375db24f7d357632b8b2f4b55"],["/archives/page/6/index.html","1da959b98dfffd3280f6aff204c6e214"],["/archives/page/7/index.html","f1eaefb4bb66229fbb0688efb1c5481b"],["/archives/page/8/index.html","11fba7abfa3019cf19303eeef752f4c4"],["/archives/page/9/index.html","7bc8be0d5978507361b524e7584325d9"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPN/index.html","ff0b65d8ba2d67dec547bfaccb7ea87e"],["/categories/VPS/index.html","1f0e5b640877062b6748b1fe9b2dff74"],["/categories/index.html","854a5a15b96e375c662a532271c8fe6e"],["/categories/下载/index.html","e4dfae56e5bed944f47014eb42d84296"],["/categories/安全/index.html","727aee1e2741339f2090a3d61ad49b2f"],["/categories/建站/index.html","0f28ab951ce5e60800b18d572270ed8a"],["/categories/杂/index.html","fd65687b844434c623585b2c56eacb98"],["/categories/杂/page/2/index.html","2a184e478c888422844819b52097bd10"],["/categories/测评/index.html","8c6065d798670397df69799b91a5c8cf"],["/categories/科学上网/index.html","736fb929a65f1ae17846dd0a764b871d"],["/categories/科学上网/page/2/index.html","ed525337885e74b400420a3ab56b4052"],["/categories/编程/index.html","02d2ef8895b9570ca542d3c67b2df4d9"],["/categories/网站/index.html","b749c05af3feb3d6093c32e12aa68572"],["/categories/网站/page/2/index.html","08d2c5074870f20147abe3f60a5fa46d"],["/categories/软件/index.html","5ecd6b48b935f95efe310de8122f3656"],["/categories/软件/page/2/index.html","c3111d8779a37c5b70b619d9013147ed"],["/categories/软件/page/3/index.html","66b0afc05262551b0d537da30fbd6565"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","da9fcb59b4939c4461eadae5baf6e739"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","19d82c6eb6d4d5af40e1f2169c0565fd"],["/ios/index.html","15348eaafffac9ad5c7e6992a23db3e9"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","d4f6d00540d24a74f796643046b27e8e"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","007457caf9b67144a9d5cfa629a5a671"],["/page/2/index.html","2468e866d0d52470d0b3c4dbd440220d"],["/page/3/index.html","2292fd3bbc05ce80f7e46e0546e3d32d"],["/page/4/index.html","49c6af9a1264554a03b575599d639ee5"],["/page/5/index.html","d9cc459519889fbc39de2af357576a10"],["/page/6/index.html","586285154349bd25a2867decb08df818"],["/page/7/index.html","eb5c3f03dc437acd5c6e931e2090096c"],["/page/8/index.html","e0dad74f2233d8f15864a28bb87393ea"],["/page/9/index.html","2f3f0314d9987b34e634e36ff0783bac"],["/payment/index.html","81f6a4bc0d6f5054d2fc9523a425368c"],["/privacy-policy/index.html","93918b578ddd0b44474bf57f689e98eb"],["/rss2.xml","252892b4bc81b6c9472f6940fca2cb25"],["/search.xml","e0280af7d605fa1c08eb115edfe8bea0"],["/sitemap.xml","2c61410008e2e4f1efe6fc33ee37af0c"],["/sw-register.js","d6725e75caaa751d1d5c4409f8bc2075"],["/tags/5t/index.html","260e8fc1c1ec9381b9cdaf8cd0fd68d4"],["/tags/Clash/index.html","07347823e9d4cfd37b8e649a5145759a"],["/tags/Clover/index.html","3a7bb8fb71fe078b40624f865cf1c015"],["/tags/E5/index.html","835eab18431e1ff7e84496331571e266"],["/tags/FTP/index.html","b376b5370e1da5eb2bd270dbc29ecbe9"],["/tags/GitHub/index.html","fc9d18adf7ffb2c116dce3a7e23b92c9"],["/tags/Heroku/index.html","d78789293b52881c6bc7ee4018b9b4dd"],["/tags/Hexo/index.html","8e0f7b08cf8547c751c87c186e7ba219"],["/tags/Lenovo/index.html","3bd6d4fe114552b3fcf0cb0fb2807eb7"],["/tags/Oneindex/index.html","eaeb0bf258cf3e6392810c4d0a6853e4"],["/tags/QQ/index.html","3465b85b3d995118a7da7f4724a05b3f"],["/tags/QTTabbar/index.html","e1f7462bce7fee438416dd562bdc6f23"],["/tags/RX文件管理器/index.html","834a36069332955ee2468de6a629b129"],["/tags/Todesk/index.html","cbdd476c131cb0a66fb18ba9aebac9ec"],["/tags/Vercel/index.html","4083152189b1e0d3259a9991e6ac02de"],["/tags/ads/index.html","45ae554ae99b1f185007712fcf5a86aa"],["/tags/api/index.html","eeebf1481a906147d384877585ffdb39"],["/tags/app/index.html","a59c5a25587337e0cd5d2b85721ddd47"],["/tags/blacklist/index.html","97de1e5a627db382725128cd4783414e"],["/tags/butterfly/index.html","8a955a78c5a605425f738cec5e31713f"],["/tags/chrome/index.html","0e528e07895c2ddc170b46a86857830c"],["/tags/cloudflare/index.html","04f7ddf87b9eb18acaa562d92cef1972"],["/tags/cmd/index.html","3d88a30401752cbcf484a5dcae55478a"],["/tags/c盘/index.html","c628b094f22469452e9f8970d3a0701d"],["/tags/email/index.html","c1c2532ba18ee17026df61c6eb65748f"],["/tags/ewomail/index.html","724361a7c62e0025ff1dc897b53585b9"],["/tags/fiddler/index.html","87a96253dca81429f66b2d618386bbd9"],["/tags/flags/index.html","2a1c437dab6e197025ae588e8dd22c74"],["/tags/footer，页脚/index.html","4d65b86eb6b9c846a9e5f1350c22ae08"],["/tags/galgame/index.html","b0a9b10bcc7f0bde12fcd967a7934be2"],["/tags/git/index.html","39bac2971302f1715e548ab276eb9221"],["/tags/gitcalendar/index.html","94c4b3e5f670ff5924aed72c3d851b9b"],["/tags/google-voice/index.html","b99863b9cd6bd3db89e8cce1292954c5"],["/tags/gv/index.html","1dee9850abeadf2cb327db8b0f34ed0f"],["/tags/html/index.html","2f39e3c1c543ca46136a6285d7db92e2"],["/tags/index-1.html","3e251fdfdacbc3756e26ab1538db9ec0"],["/tags/index.html","fa1bca6811595c319dde3088569611c3"],["/tags/js/index.html","90f23cbb8b2770ac8a7993d3ba5257b4"],["/tags/jsdelivr/index.html","3a3631c755bd512c73f90373d3962649"],["/tags/linux/index.html","8eaf47653bfcb8ad6559570dfb13f286"],["/tags/madVR/index.html","922c1318f6c51a26f1cb0135bacccaf4"],["/tags/markdown/index.html","401048d6f7889f2c2193a37845d608c6"],["/tags/maya/index.html","6cfb6f35d7cd4f9f5e28ed6cc68e6446"],["/tags/mklink/index.html","8aa7075a793a913aa01cc5be5d2815d7"],["/tags/office-e5/index.html","49eb6561f27c62ad38d3c1600a5b282b"],["/tags/onedrive/index.html","bdffaae76f71af7948f524b3c214a2f5"],["/tags/picGO/index.html","52a86c4f34526304a19a9684d7347b96"],["/tags/pixiv/index.html","0be7f9bf22a87d966bd7753afbcb42c2"],["/tags/potplayer/index.html","07c933cedf0539c70feb32326c0e5972"],["/tags/proxypool/index.html","0eab4642cc793d32fb304d9db6b5b7a5"],["/tags/qbitorrent/index.html","22bea44a03564f9a97852be32b8c161c"],["/tags/raidrive/index.html","57aabb6cc798a38492c2e58df7ae3706"],["/tags/screen/index.html","6a87eed11e34663efa369d10f81cd48e"],["/tags/speedtest/index.html","3cfed47bb2eceeec60ece11c5f06efa3"],["/tags/ss/index.html","b6dc02b6c008a08d91b107ace696e52c"],["/tags/ssr/index.html","6b8d20d15ea852dd75ce1128c0fac982"],["/tags/stickers/index.html","e768ac61b43abcc79cc5e955f4df9780"],["/tags/surfboard/index.html","1b0dc40ff0044b6f956eecabc1ba009c"],["/tags/tap/index.html","89e6ca13d8a4297791646fce2fa77a0f"],["/tags/telegram/index.html","26ad3daf2a38e7c15c3fcabfa073243b"],["/tags/telegram代理/index.html","8cb8c29b234e0b28d732eb962aff52fd"],["/tags/tg/index.html","bebf7af0c7254c9753c1ff7e09546639"],["/tags/tg代理/index.html","7866e3ec1b5c0abad6fbe4cb6a6ccb2f"],["/tags/top50/index.html","5ec78ce547c2d04c4f666d122f077a77"],["/tags/tracker/index.html","8d199df13ecae13ee5deca1f8162bc9b"],["/tags/translate/index.html","a25840000a7289ea6b9c5f697bb98c6a"],["/tags/translater/index.html","6cc1f605c1d076c89c8772dcb8473b45"],["/tags/tun/index.html","178db93adab6cfb95b8cf0e7da33011b"],["/tags/typecho/index.html","121c304ebb76aaed78fa0db1ac7cb659"],["/tags/v2ray/index.html","345d75aba06488ff0f64701fbe9d13b7"],["/tags/vpn/index.html","dba069da090bd891fd87cdd4902b6d1c"],["/tags/vps/index.html","444778231dc1242ba77d5b3838909b0a"],["/tags/windows/index.html","1bf1a55ce8a1bc6e539003ee5154ba99"],["/tags/windows端/index.html","06acd4db4319215ddd4bed1ab60d4f22"],["/tags/xray/index.html","06c08f03277ab4dfb6a80c08255839ab"],["/tags/下载/index.html","84fff23151e75ed2f232d32f7afb3e07"],["/tags/不限速/index.html","d1e9c512006e0ce8985374a8e52152e6"],["/tags/个人网盘/index.html","712cc05ba2e21ad56b454d77561f8a34"],["/tags/主题/index.html","141d0a433637712ac1077b362078ae6a"],["/tags/二维码/index.html","159418c92f42f48f4e3eaba4e66f5fe1"],["/tags/云便签/index.html","86da0fae0ad5526f0030581b1436ce75"],["/tags/云盘/index.html","3e8ef55f32ee362f4741ff3b7ff50c16"],["/tags/人人/index.html","215532a114aed4540eb6de6dc4f87c56"],["/tags/代理/index.html","a5e22e4c16b6c95fe6d2946e5fca5b02"],["/tags/代码/index.html","0bf11d98c5a4e6434849b33da7aae966"],["/tags/优选IP/index.html","b802c0d41a403b6c9e94f495d28f4630"],["/tags/便签/index.html","5fa3539abb544b2d0a2abdb05ff14b60"],["/tags/保号/index.html","37ca22010ec7325cc35c4f6e80632ec6"],["/tags/免费/index.html","3b652d1dc7ffb34a7bb4ed7c6fb3b6aa"],["/tags/免费节点/index.html","ce16ac4ebc1649716e396a4f9d667cc2"],["/tags/加密/index.html","a3c4fcbc5825e63fc19ae7ea613924f2"],["/tags/动画/index.html","d1204e7ad1dbb83d0b8da0b59695e776"],["/tags/博客/index.html","e9824592ed019ce931e52be2f0fcec88"],["/tags/历史记录/index.html","65a82847a3417dd23df57b7381150e28"],["/tags/压力/index.html","55289ce46f82d7e5a9b516e41ce0d97d"],["/tags/压缩包/index.html","a7092d3dc4ecd240d4ebc309d4483e8f"],["/tags/反代/index.html","7f02d40996029bc000d2591da3a72738"],["/tags/可视化/index.html","3cb0898e712926193dca67215ee4e5f0"],["/tags/命令/index.html","19f50f53fbebeaaf57173c2e5d06eeee"],["/tags/国家/index.html","f2e6224d71904effa17590272a4f94d5"],["/tags/图床/index.html","424b13ebe0747476a3a3e554b2ca2389"],["/tags/图片/index.html","5f95edb8e2d56f7e57cdf2da06c42c99"],["/tags/域名/index.html","1cf6ec829accad2863a8e5cac83291dd"],["/tags/多标签/index.html","5307a6577cdcceccb3eafd00d2269e06"],["/tags/存储/index.html","735c4922561cdbe926a6848efcb299ae"],["/tags/学习/index.html","2773b69dfbf28763d7c13379682384d4"],["/tags/安全/index.html","f614299f44547936be1f7c33ba00bf6b"],["/tags/安卓/index.html","f8637221022be1a076203f9008d2955f"],["/tags/宝塔/index.html","b15bf91b25ba86683560eb2c1e7e539f"],["/tags/小游戏/index.html","665af581a284a3f5045cef0407719de6"],["/tags/广告/index.html","e014a43197ae2546c4224675a84ae382"],["/tags/建站/index.html","768484d04325f7ffa785cd8f139ee581"],["/tags/影视/index.html","8efe4136154de6f83731657802e3fb8a"],["/tags/微信/index.html","df0d100146c458d347365a2e8b0b3f41"],["/tags/快速启动/index.html","d5a2c755ba76633d525850ee9417a1cd"],["/tags/手机/index.html","e8917a377cd06b4b3bc8f6c7bcf59d76"],["/tags/托管/index.html","ebda4cfa99bc000570dc7bb485460f8d"],["/tags/抓包/index.html","7e50d62daf9fd18ff6ba9d09c756b736"],["/tags/抓取/index.html","b67716c7f0552432f95a8c2d54d33e98"],["/tags/投屏/index.html","b8f8da357f355ae8c244034b31e7b605"],["/tags/拓展功能/index.html","ef017f749856996d9f9b36c4d03dd16e"],["/tags/挂载/index.html","2af54e8a3e2d5ded2686bbad649d812b"],["/tags/指纹/index.html","a69422af3ffc66200b395e5e580eca13"],["/tags/接口/index.html","f15a0894c2dc87fa7f742c3bb974ad3d"],["/tags/提取图片/index.html","4384e0e2667bebe693b499a6bec84f3c"],["/tags/插件/index.html","049eca608ea15eaa7e02a23705ad1fd7"],["/tags/搜图/index.html","f3addd4bd887e34e0338f56e8bb8910f"],["/tags/搭建/index.html","187d3d378667b6358dcbf87775227c1a"],["/tags/撤回/index.html","b5e3250d69237320371112a1192d8f0a"],["/tags/播放器/index.html","2bccfe7a9e2734bd074c19c783833ac1"],["/tags/支付宝/index.html","fc3f4e4fcdbec5ee5a835ec06619ab35"],["/tags/政府网站/index.html","03a6a9ea9df17ee9654ed11c2eff09a6"],["/tags/效率/index.html","220a3d7ad97ee099f0c7fb0a0e4a1156"],["/tags/日历/index.html","b18cb57d22be5609edce306c59c96cf0"],["/tags/服务器/index.html","c24a5bcf2c42fe0b5f76dde39da412b6"],["/tags/机场/index.html","5934f5cdc567c5b0c6477b92033059bb"],["/tags/桌面/index.html","a97ffc87691803158c1399fbb94e48d8"],["/tags/梯子/index.html","220f25a4ea26cc7374a31a81eca8421d"],["/tags/检测工具/index.html","1ac7c7de36f30cc7110130da3599ce65"],["/tags/汉化/index.html","3442265f880e2902d66b56cb098d2185"],["/tags/测压/index.html","f81c4368719b40702a0fa1d75f13da6b"],["/tags/测速/index.html","5bdef4ca122d48fbed90e51ae664545c"],["/tags/浏览器/index.html","68e77af89d06a7b0ba38a5eea5162147"],["/tags/清理/index.html","c4c73099d07fce66a557cfed4ddc8829"],["/tags/滚动条/index.html","f9d0ca1bbed5701e9bef8a5a63735a70"],["/tags/灰色歌曲/index.html","7c6b61f0f71816ee25e80f026a127103"],["/tags/电影/index.html","c1d3319ab137ab7853ecb7d38ad920cf"],["/tags/电视剧/index.html","d4cbd8f80733b4ab93b151be40fb1b7b"],["/tags/白嫖/index.html","fa6743e7467611ec0dfa6d25f0917828"],["/tags/百度/index.html","622b8d519ad822bda48b8e108389d1ac"],["/tags/百度云盘/index.html","b3b3dc58513b83a012cea602c9177e54"],["/tags/百科/index.html","a8195792c1030e03f1819072bfddd2c2"],["/tags/短信/index.html","257056e22d391dc6df1c78376c3bf940"],["/tags/硬件/index.html","a846fb88235293225575b26faa07ebda"],["/tags/科学上网/index.html","fb00aeadd64435e45704219b1022c791"],["/tags/空间/index.html","c907596aae3290ef917172321c5fb1fc"],["/tags/笔记/index.html","8808ff8753a10baf9bc1169323ee69cb"],["/tags/简洁/index.html","600c597bd986b95976f766738932da53"],["/tags/简约/index.html","abb3b79e2f0267a23e073ab6fb44cb18"],["/tags/维基/index.html","e8364df3b487d38fea8538674f4461bb"],["/tags/网易云/index.html","54e50a0c66c8efed7a2155cb64e2d2e1"],["/tags/网盘/index.html","593566fb338794c8a93c826512d09025"],["/tags/网站/index.html","5a29f7030416b9d158566b31b0ceb6a5"],["/tags/网络/index.html","d335dfb964e2aa4edd822dff6aeeb420"],["/tags/美化/index.html","c93e4534f3b7274e3c50160d945da8ac"],["/tags/翻墙/index.html","d0038d65effbe32cfdbd6b53a8820d49"],["/tags/翻译/index.html","ac1e06374de43a24dc9b24d2f7000374"],["/tags/翻译器/index.html","a60ac17ebc4c536bc18d9cbd918f1e8a"],["/tags/聊天/index.html","59fad0183fce4d5f02b3bab1bf1ad4ec"],["/tags/聊天室/index.html","1773fa1015b05d730a4b85d53027692f"],["/tags/联想/index.html","070a358b533d8751fe5312696808fd71"],["/tags/节点/index.html","de9f81b1f5371e62ce52710f13f2d1c6"],["/tags/虚拟手机号/index.html","047b41466f0ed64a28a3244e08ac709b"],["/tags/补丁/index.html","5ef3ad317cbe30e37adbc73d69d0fc78"],["/tags/表情包/index.html","a0c7b7fdb0fd818be279022efaebd14f"],["/tags/视频/index.html","4c1ab45c08c3e9e70b543b833e49b96e"],["/tags/解析/index.html","20533355cdf770d4139bba9b91d2a859"],["/tags/订阅链接/index.html","98c54ac8b9140f2cf66cb25167180e53"],["/tags/记录/index.html","9adfb9838002d32696dbe871c7210076"],["/tags/识图/index.html","723628c000025481be3c07926ffd4f48"],["/tags/语言/index.html","38d609e7cfd9be998a60e1aceeaeaccc"],["/tags/资源/index.html","653bf785b05544eea45255724f4d3f51"],["/tags/资源管理器/index.html","addb8aaede298df1d7466de5ece79076"],["/tags/转移/index.html","0e9cec7f4c40ea1051adba0961379587"],["/tags/软件/index.html","643fffb49c5b65d48cc9177629af3ffa"],["/tags/轰炸/index.html","e10499d25ace593c0545227acdb8191d"],["/tags/迁移/index.html","ab35a34ec1ead85f4734aef5a7a864cf"],["/tags/远程控制/index.html","e80caa6b45caa98255438675c766ab01"],["/tags/连接/index.html","74df01cc2f36bd5e83553f2bf0b45ac7"],["/tags/追踪/index.html","358be8eb1c5a2c8139d85afd82586c6b"],["/tags/速度/index.html","ebafbbc770b1037d7abb90e206423d2d"],["/tags/邮箱/index.html","3c514583a126872c0915fd5868db2854"],["/tags/酷炫/index.html","992f60c3b945f7eca45c0d0102eead8c"],["/tags/钓鱼/index.html","09a7630e917ad42846fb2d3b9dc46dcc"],["/tags/镜像/index.html","7d17f0ad977db463ac5176a234d89f53"],["/tags/随机/index.html","40e715a68266d694e7b77d1f6f7e35a0"],["/tags/隐藏/index.html","869ed0568529076a1baee71711ab89ea"],["/tags/面板/index.html","1afc7ceced497b2344147def293d10df"],["/tags/音乐/index.html","99d157436e26756a7174d50484726ea2"],["/tags/高颜值/index.html","880c67b091042a44ec6134c9551d6f72"],["/tags/魔改/index.html","8e0e8eb1e42a91ffbc6cebc1b73a8400"],["/tags/黑名单/index.html","4649fbd2eddacaa456f7c2ec5f406dce"],["/urls/index.html","26196b973bbbe5a6e86ded12bf558a27"],["/vps/index.html","4deecf46ca720ba6111f5b3f28e3d166"],["/支持/index.html","ea44a85b9d169daa8afa1a528f484343"]];
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
