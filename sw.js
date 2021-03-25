/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","2912650b805d1b2b0fcea24d678252f4"],["/2020/11/29/clash-windows/index.html","afb6a530c733c12fe3007728938036b2"],["/2020/11/30/websites2/index.html","0d81ba5ab2e274beb3dd0fd65f9d57e2"],["/2020/12/04/iphone4s/index.html","5d943c7e07b9b1a32d636d334729bc07"],["/2020/12/04/onenote/index.html","741184aac1acfd7d529052d4fe0d74c8"],["/2020/12/04/wesites1/index.html","69bac3128aa0b0ebcbf2d7d99af826ab"],["/2020/12/06/nokia808/index.html","38f2c83d62ef3af1f923df3900e7a72a"],["/2020/12/07/ipad1/index.html","d06a6dd1387b950476f1d959af9ff7e4"],["/2020/12/18/freesubscribes/index.html","9753da38fa820405cbfbb3dcfe9f6f76"],["/2020/12/19/musics/index.html","92420ac984f1ac7ce14dd59c9f0e3b2d"],["/2020/12/19/shadowrocket/index.html","ba32d6fd9a3e18101908f198455e400d"],["/2020/12/19/v2ray-windows/index.html","27c82c52bdc39499f788acca0a3d22d2"],["/2020/12/19/v2rayng/index.html","6ffaacb01882cf4a067a4d5673f010d2"],["/2020/12/20/beoplay/index.html","0813cef57bb799ae315b8c5de54ce1f9"],["/2020/12/20/订阅链接转换/index.html","abd18fd6ca67bc499c175cda1fa35e6c"],["/2020/12/21/chrome浏览器下载提速/index.html","480657696563395a4aa3a65732d2edd1"],["/2020/12/21/免费128线程并发下载xdown/index.html","b52b14118844acb489a936f0ded319c3"],["/2020/12/21/免费32线程下载软件ndm/index.html","c1386e6b81ae8b549d361749eeafe4c5"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","1a07a3c45f4a9d07f16c986ceae5c7dc"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","70fcb5063f90230644c29f83913c7cf7"],["/2020/12/21/广告怎么知道我在想什么/index.html","e2f90958b0da8ef2356fdd562586f86c"],["/2020/12/21/无名·引子（小说试写）/index.html","9a573efee6f80db98e37c697ba324f8b"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","960488520043f1937d88c2eb5562363e"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","5d88ed696ea431dfe61e3fe4c8b0c7b9"],["/2020/12/21/高速轻量下载器aria2/index.html","ac934238f91d94ab45a3e8c6d73af59b"],["/2020/12/22/2020-cee-roo/index.html","caa7c47797c72baa99e8b5020510ac45"],["/2020/12/22/firefox插件、github、steam富强/index.html","f1ac82a94a42fe80be611a1e024d7948"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","efc31b5c41579af05fd8d4c2c873c7c6"],["/2020/12/26/python-day-1/index.html","d20dde2edf5ed4e0d30c736c4a6c9f7b"],["/2020/12/26/python-day-2/index.html","f1e8960faad2775747d5687fe00b3550"],["/2020/12/26/度盘不限速下载方式一赏/index.html","f66aa0755abed0aa803694aff8a806c7"],["/2020/12/26/添加开机自启软件/index.html","5a0ab37c40baf026fcd63e395e32b7e9"],["/2020/12/26/电脑端截图方式一赏/index.html","353d4fb3be7632d19b206dc3883b2f65"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","6a58985e6ed45ad49c3134f4a407418f"],["/2020/12/27/最安全的浏览器tor/index.html","eb5a7803150d7928a26a43a62ffab7e7"],["/2020/12/27/网易云刷等级和听歌数量/index.html","14ab15c73f646622a0b812123c977483"],["/2020/12/28/freenom申请免费域名/index.html","901d68c5903fd39f1e0b27cf05bd01fb"],["/2020/12/31/机场/index.html","065d227f992ea889f839cd83432315b1"],["/2021/01/01/M1/index.html","c9c99870b4cb45522b6da2c704f373c4"],["/2021/01/01/compress/index.html","3c5a039060fda0490e06748522696d28"],["/2021/01/01/infinityfree/index.html","1cf1195544344f28c992c99db1e015fe"],["/2021/01/01/硬核翻墙/index.html","cf028e306a1c3f858fbbe6416e948a8c"],["/2021/01/02/qq/index.html","55ef634833291d8fe5dc53671d410b4c"],["/2021/01/03/netch/index.html","f996576e50166ff7a23a8b9014f3ded2"],["/2021/01/03/waifu2x/index.html","e299a541a4ccaf3794736ee973e2588f"],["/2021/01/04/ads/index.html","b96687c808c754b8b1354ae05b147922"],["/2021/01/04/games/index.html","cfdc7e99f681626c5b7c7ce352c70b28"],["/2021/01/04/heroku/index.html","e56db028c722f0d8c07e7250731909ad"],["/2021/01/06/movies/index.html","0c912372b0b4334812f3b8663205a887"],["/2021/01/07/google2020/index.html","64b62342d726208434676f984a510eda"],["/2021/01/07/lucky/index.html","320f4a1c252195e52038a11318fb5ec4"],["/2021/01/07/spotify/index.html","fe2a52b86d05bbde6c8e695fbaee8828"],["/2021/01/07/thunder/index.html","34b9dfe87b5652e70124111acf82b1e8"],["/2021/01/08/adguardhome/index.html","a5285b1cdfeb9ec6576323f6a947cb9f"],["/2021/01/10/IBM/index.html","37a1ce23ef92ccc3eeca61e15be33654"],["/2021/01/10/potplayer/index.html","ebe28ea90e8d06f3ac6a0becd3052d63"],["/2021/01/10/sakuraanime/index.html","697fa97419f769b00db221a7406ac4f6"],["/2021/01/10/美剧星球/index.html","1ae665182b61808138077029d6cdbb82"],["/2021/01/12/telegraph/index.html","75143f4b032258342ac17138e75771ab"],["/2021/01/14/comics/index.html","e1cc5265bf9813a4ffc6b98b77b887ef"],["/2021/01/14/ftp/index.html","05e376fa6cdfc75f5f2e39c108874a6c"],["/2021/01/14/oraclecloud/index.html","9390d2b9d82ff2f25cf8c8a55ebadd99"],["/2021/01/14/porkbun/index.html","1ec89fc9b16a5c5ffbefe78410d50169"],["/2021/01/14/powertoys/index.html","6596e1146e9ebb91b24c338d1e311e56"],["/2021/01/14/taptap/index.html","158c20c5fa1a3406187a39ced9347783"],["/2021/01/14/ubuntuvsftp/index.html","97214c48174ade6ed933374f2f69b365"],["/2021/01/14/小说/index.html","cf3363c1ab74a30b865a7cb3bf84439d"],["/2021/01/15/freeproxies/index.html","01ec0128d540c200f356438990eb4b0e"],["/2021/01/15/incaseformat/index.html","d3f741a96ff93e563e2c4e603ea44641"],["/2021/01/16/euserv/index.html","84768548f219ebd4b6aad7e6465bbc6a"],["/2021/01/16/winxray/index.html","0c432c70a335bf3c045bf6f66799ec0a"],["/2021/01/18/qqreadhistory/index.html","9407b4282a080b5481678c44f686d367"],["/2021/01/18/qqrevoke/index.html","9696746c65796416a360eb5d0e72acd1"],["/2021/01/19/freevpn/index.html","2fcaa2caa09f15f481b53f5cadd1e63f"],["/2021/01/20/browsertrack/index.html","19405c01fbead3dabb7416ba3ee6ba25"],["/2021/01/20/v2ui/index.html","0d5523fd7c5027062698403741dfac2a"],["/2021/01/21/failedtoconnect/index.html","fa465a838a81e1cd7d5311713489b79b"],["/2021/01/21/gitcalendar/index.html","6da63fab4b7a9d09a6c874dd6b988a31"],["/2021/01/21/markdownformat/index.html","c6670a9ed994e84a793c3c4277198eab"],["/2021/01/21/markdowntable/index.html","d8824b2167921dca8302f6e66dd23c6c"],["/2021/01/21/vercel/index.html","ba6dcebe59a6bbcb1c09ec81efdf30f2"],["/2021/01/22/hardware/index.html","9953abdb3aa6a441a616cbfb9040675a"],["/2021/01/22/muviz/index.html","73dd61df087c9b4e3299da3bdf2e06e0"],["/2021/01/22/randomapi/index.html","35e58453fcd9cf9c1ad3785798a86e05"],["/2021/01/22/searchimages/index.html","064005da1eecf6036d33dfb3f1a223ef"],["/2021/01/23/RX文件管理器/index.html","d79405343c94ecb8e33f951d94cfa180"],["/2021/01/23/chromeflag/index.html","9ae4a7dcb1d173fd3bbe43d839bc5144"],["/2021/01/23/qttabbar/index.html","7321c91f71aef95560a7d1e58fa1107d"],["/2021/01/24/githubspeedup/index.html","7bffeea3c2ba225d739d8e9facf7a89b"],["/2021/01/24/jsdelivr/index.html","941afbe027c5418fc2e770502f05ec7e"],["/2021/01/25/note/index.html","217e35ebe6170018332750d9b70b9f80"],["/2021/01/25/soul/index.html","4bb6c5fd7d52fc47656d70b3baff5953"],["/2021/01/26/herokuxray/index.html","2210d7e970ae685fdec08b7a9972584e"],["/2021/01/27/proxypool/index.html","8e2f65dae0c9008cd4c754517bb31e64"],["/2021/01/27/tracker/index.html","dda30a853183afb2a59aec0fe6ffd854"],["/2021/01/30/pandownphp/index.html","c616c6036cc70a023f3c0bfb860023d3"],["/2021/01/31/newgroup/index.html","d2561efce22ecb2b53502efd462ec912"],["/2021/02/01/clashlanguage/index.html","e6f27291d55d53980707a117288d1fff"],["/2021/02/01/encrypt/index.html","68674933ec1adbc7fe087443720a7048"],["/2021/02/01/footermotion/index.html","e84ad1ae5128f5aab1703c62f2f3f167"],["/2021/02/01/gitter/index.html","806a20e2766e5abfd6c5aebec811d59a"],["/2021/02/01/pixivtop50/index.html","1313a8c0a221b13d01f8c8a5e2d2b7bf"],["/2021/02/01/scrollbar/index.html","48c186dcee46ff184405752870738d4c"],["/2021/02/02/clover/index.html","1da6f4611878a5c6872cd68b54ed7f23"],["/2021/02/02/maya/index.html","a6598ffa0fec054e46c9457f06b12f66"],["/2021/02/02/speedcontroller/index.html","f9ef50cb47d5485cf390fb25ac0bd3c2"],["/2021/02/02/yesmusicplayer/index.html","ca20c6bcc8481b48e6b3485e81407956"],["/2021/02/03/lenovoonelite/index.html","b7eb6e67403a71abb8780c27c8e7f7e3"],["/2021/02/03/skipads/index.html","7023f85164d4c77e980f2d4a64b01229"],["/2021/02/04/picseed/index.html","a572b2f7783023e8750c0047107dce80"],["/2021/02/04/renren/index.html","40d85af5e129014e4fa09b009c348fbf"],["/2021/02/04/serverstress/index.html","da95080bc47126cd01d4fbbd0dd7c754"],["/2021/02/04/wikipediazh/index.html","70b435b2fff04b9b5713c7245b615a29"],["/2021/02/05/googlevoice/index.html","a3b9f80b1db8248815fd5e6527d739a8"],["/2021/02/06/clashconnection/index.html","2f560b675509155f1f6c4d6b4aa1615a"],["/2021/02/06/gvtransfer/index.html","e6a923cbb98856fa34aa39783ce2773c"],["/2021/02/06/todesk/index.html","05fedf8a0209e544231f3db700216a48"],["/2021/02/06/vpnblacklist/index.html","a76dcaaba0b261c1bad372f2226cdd9d"],["/2021/02/07/mklink/index.html","6910a8ee481be3c688cf6209fdd8a5e4"],["/2021/02/07/speedtest/index.html","6d21b6b5a3103a776066cd9191b58eaa"],["/2021/02/07/translate/index.html","e63e4a14646f8d918bb80a0f1bc44c3c"],["/2021/02/08/ewomail/index.html","2c95f405584bd5a3c22998b6a7326211"],["/2021/02/10/officee5/index.html","847c896f150115aae901194997ade231"],["/2021/02/10/raidrive/index.html","7d104e17b7f6cefe0f46d266efc4516d"],["/2021/02/13/e5sub/index.html","f501f9508f9842f22e3a3d99bc88f7a7"],["/2021/02/14/screen/index.html","8fe689065cd2983bd513a8b268c4e517"],["/2021/02/15/clashtun/index.html","408db90edc2aa405e35c3afa079022a4"],["/2021/02/15/messageboom/index.html","069c6f004cc333acab0202dc693b7d96"],["/2021/02/15/oneindex/index.html","c24afb2e781fb42cd9e7be9c81b555a0"],["/2021/02/16/govsites/index.html","88fa46c02a1939f036013ea201ee9eca"],["/2021/02/17/hexototypecho/index.html","f754aea08887407cb81a11efcb6cdb1e"],["/2021/02/19/fiddler/index.html","f6dc56e991ff89dcec624aba2b5c8a58"],["/2021/02/22/potplayerset/index.html","78415662a97bcd6ce622153ab7b44526"],["/2021/02/22/studyresource/index.html","868c226877f5444599a60332e99aa208"],["/2021/02/22/telegram/index.html","26d04ff0eff4fa3b53ffd19931b31d52"],["/2021/02/22/videos/index.html","159d89878a086eda40d899213da7832c"],["/2021/02/24/mtproxy/index.html","912037fc2853874dff6ce0beee7cda29"],["/2021/03/10/catchcat/index.html","167f6e70a405e06fca50dd3a46341aa7"],["/2021/03/10/neteasemusic/index.html","387f0809108e3c9ab45d018d6db9cb5e"],["/2021/03/10/surfboard/index.html","bce8c47a850b183f8ddf361b9361fd12"],["/2021/03/11/vpnandjc/index.html","019c4c82f541e1606eeddc2e8d3e533a"],["/2021/03/12/qrcodes/index.html","c8f07bc2c5e9149b6acf6e9675fb5077"],["/2021/03/20/qv2ray/index.html","b980b4289c983e31a92c640b00904da2"],["/2021/03/22/freevps/index.html","7a71cf1699964e0207bf1996a5dcd20a"],["/2021/03/24/tgstickers/index.html","65e1dde65e2f0121468bdd0fdf424097"],["/404.html","1a9d89f64c80b618a189429463cb4af4"],["/archives/2020/11/index.html","c4a41e1a9d3e5ca107797526aa618dcb"],["/archives/2020/12/index.html","b65512ba7a3f0b2223637c5b4c52e233"],["/archives/2020/12/page/2/index.html","172d4f921b642cc98a4a47175ca5bd79"],["/archives/2020/12/page/3/index.html","061f261773fb368141aa4aea7fdcf0d6"],["/archives/2020/index.html","a910dc3dfbc8043c721c5ad8ad455fce"],["/archives/2020/page/2/index.html","cf00254e05fe717a7658a0590087e245"],["/archives/2020/page/3/index.html","e6a531007e171ea174a3d8d64de2eb74"],["/archives/2021/01/index.html","1453e99e25bce145dfba8ff4fda73c0c"],["/archives/2021/01/page/2/index.html","49f1fe77e11ab061482a447898366a37"],["/archives/2021/01/page/3/index.html","0e5749b986463dec6582f80c12fa2073"],["/archives/2021/01/page/4/index.html","005cf33d1b8e792782c85e82cbd0f667"],["/archives/2021/02/index.html","8c11362cc2faf3008c04b6a448502b8b"],["/archives/2021/02/page/2/index.html","a15d11ff18f75474b3f9442f15fc24c4"],["/archives/2021/02/page/3/index.html","ba216c03ccc3bed38a72956dc61091b8"],["/archives/2021/03/index.html","c72dabf402656a9bc7d95ecf2fab6149"],["/archives/2021/index.html","4d64c4fe8b15f6548324e6c37e0635e6"],["/archives/2021/page/2/index.html","06a7558f821fd60236bd3399113c3664"],["/archives/2021/page/3/index.html","c6c1b6fbb8fa5f02e6e5582fe73e25e1"],["/archives/2021/page/4/index.html","2c47d54ac523a40f10a0431fed2bdc0b"],["/archives/2021/page/5/index.html","8c0fa85318b98da8ebbab6fca93f0876"],["/archives/2021/page/6/index.html","622dbb32756ae91e0dd1406d60c4dcf6"],["/archives/2021/page/7/index.html","2a966751d49ea62abe2fd701e2d339a3"],["/archives/2021/page/8/index.html","90020a795f0451d44226c99f5f1b3f61"],["/archives/index.html","e79fc491265f757337112e290da1fd65"],["/archives/page/10/index.html","d23ab8da8348440c23ba2f16a35f959e"],["/archives/page/2/index.html","6c48b11303de5a9673b1e6f4ff4e53d9"],["/archives/page/3/index.html","79430372932db0871a9e4e963f445abd"],["/archives/page/4/index.html","2d35ac79ad01a4e168b19bf560a9e997"],["/archives/page/5/index.html","7f0b5417790a6699e5eb62cc5f589d2e"],["/archives/page/6/index.html","4c31b5859a2b2c5fb56a37c01677f98c"],["/archives/page/7/index.html","616efdb4e2dec9976d716beb6f7eb6c1"],["/archives/page/8/index.html","88169c9681aabfce93cdac29de1eec00"],["/archives/page/9/index.html","c1314ec3750281f90e40c512a092dd21"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPN/index.html","07633f1ed6313b1c44054d64b36ca800"],["/categories/VPS/index.html","64c78514b3b945442519833783a0ff00"],["/categories/index.html","73014c8d0ba2d926069b926fad5fb900"],["/categories/下载/index.html","67bc333c46ba64427a884bd43655f75c"],["/categories/安全/index.html","666f6c74cf1574d7c50a159f27466e73"],["/categories/建站/index.html","5194561a2f08fa7444c58d3d0cd6b2fc"],["/categories/杂/index.html","1e6dc33b7be49f0e6ab00784b83c8bf0"],["/categories/杂/page/2/index.html","a04072409838cdb381a4de93f25feb6f"],["/categories/测评/index.html","11342386093ae56d5e32813a27ea99f3"],["/categories/科学上网/index.html","827105a8e94455441f8265a519af0f4e"],["/categories/科学上网/page/2/index.html","51e84ac4a69f2d839468b89d915d98fb"],["/categories/编程/index.html","5853cab523c238dd15458e9c6062e494"],["/categories/网站/index.html","b29007f38dac181916fbdd6b36e5b4b0"],["/categories/网站/page/2/index.html","b28dfefa0e6e606d926e91e9ce17a932"],["/categories/软件/index.html","13b9d4a534a595312174b9bf4e1ae1e5"],["/categories/软件/page/2/index.html","3e8e41cfa96df03ca709e8f4498bcef5"],["/categories/软件/page/3/index.html","faed4315a90980adaf9219d9e427bfaa"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","9e047750af8c42abbff8ce95c555ae49"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","cc2b8101a5dd6983fbaea9991f56dea9"],["/ios/index.html","31352d71d5b9bc7dd2592485784319f8"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","8ede5ac8db33e8da480b2a0733c9ac08"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","ebb3dc05e37cf8b662bf01334fb3d1f4"],["/page/2/index.html","5706a3356de51d2049a696fe52215848"],["/page/3/index.html","a5d2d5d783d5b41dec95e8b23229f976"],["/page/4/index.html","51e8e155d19a027e33d27ff1ca3717bb"],["/page/5/index.html","d80120b961f78152ca8ed8c401535d30"],["/page/6/index.html","3ddeb1c5b27423acd43f69ed92ae8365"],["/page/7/index.html","67896ef0104ef352fc930cd2120f6eaf"],["/page/8/index.html","66843e483b44a55c2754cf91b5ce1b45"],["/page/9/index.html","34856b9ed3c2a0c6379a4cd3344d5db3"],["/payment/index.html","1b67b16e63f3a50065dae8c27e955dec"],["/privacy-policy/index.html","5429a0ca753ce40fdf7de158977f25d0"],["/rss2.xml","252892b4bc81b6c9472f6940fca2cb25"],["/search.xml","e0280af7d605fa1c08eb115edfe8bea0"],["/sitemap.xml","2c61410008e2e4f1efe6fc33ee37af0c"],["/sw-register.js","d777d508db831021db54d720909ce8df"],["/tags/5t/index.html","baa45afafffa8d3cded58a0a7f7d7aca"],["/tags/Clash/index.html","20ea59a6b3a84fc6cff8ae349ad3146a"],["/tags/Clover/index.html","dbd7f7eee2705af85459dc2a1b70d8a5"],["/tags/E5/index.html","cd31c6e8b300c583a2cce5e4a98486a5"],["/tags/FTP/index.html","217fc75589d0490779b1a2aa779b4f65"],["/tags/GitHub/index.html","eee5045b1f1976403f0a6eb2ea9cf592"],["/tags/Heroku/index.html","3a40a2ae3edc29af29aa7164ff08f69a"],["/tags/Hexo/index.html","9941648b6d60d209a1f71894d76839a1"],["/tags/Lenovo/index.html","01711dad04c71e290eae3c112b595012"],["/tags/Oneindex/index.html","a5ba775703887fbcc33bf5a4af1cbedb"],["/tags/QQ/index.html","99133818d7d18bc3f865d1f781080196"],["/tags/QTTabbar/index.html","56738db5a4ff499726f08dc13daffa24"],["/tags/RX文件管理器/index.html","d86b0e289396c19563a47af9bcbf2d6a"],["/tags/Todesk/index.html","dbbbe26a7cc6ea7d0ff2dd11ce5319dc"],["/tags/Vercel/index.html","7141c16c7a36e35b8db9740fb34d46af"],["/tags/ads/index.html","4e0e42cb0d7a90fc7b823dfff2234563"],["/tags/api/index.html","02e4a39a877941515a4c32c7a6f8a04c"],["/tags/app/index.html","17b49f014e33dd5d75c80158e236f47f"],["/tags/blacklist/index.html","810b0084cf885b1e5966730a42c4f8a3"],["/tags/butterfly/index.html","bbbf4729fe0f8b6af1271fc2ec732788"],["/tags/chrome/index.html","873c1b138fe0eccf93005b053512d575"],["/tags/cloudflare/index.html","3313bf230ebd79b9cef5860a8421b6ef"],["/tags/cmd/index.html","35cf60c1ec68132dd99b727d1c9537d9"],["/tags/c盘/index.html","91936e70fc39b84f43ed190aae9cf212"],["/tags/email/index.html","aed684a151798024d9c64241e267c8b6"],["/tags/ewomail/index.html","dc267d73c8e26108e1c836b336997df0"],["/tags/fiddler/index.html","f24022c1731bb55f853be9618c889ef1"],["/tags/flags/index.html","4582709d454bb842d17669ef7977c2bf"],["/tags/footer，页脚/index.html","2ed517724f9470d0b6bd1355814160d7"],["/tags/galgame/index.html","4aec9c3cd6f8713897c3a045d38ad397"],["/tags/git/index.html","38eb9b5fdc1a1b2fe14eb0705db9414d"],["/tags/gitcalendar/index.html","ee776e9ff056df13115fadf6086357a3"],["/tags/google-voice/index.html","48ff8e1b399aed6c94a31a085c724d6a"],["/tags/gv/index.html","4de3a0b8199fe332f030f2e684a2a329"],["/tags/html/index.html","e7790c762f5fa1f4a0038d6d027f6b72"],["/tags/index-1.html","fc3b2752e949f2a5b301e028035184bb"],["/tags/index.html","6a1b4e28385691958cd54312f7d94602"],["/tags/js/index.html","560cda685ac39d81d51629a439860982"],["/tags/jsdelivr/index.html","7c04174c050b75338463b49183558de4"],["/tags/linux/index.html","f74bb26a7d240fa538fb818d9a4d99a9"],["/tags/madVR/index.html","73a1f9ec6bd6ca9596f70021aa620fd1"],["/tags/markdown/index.html","0381f064963b04e55dbe58227fea9950"],["/tags/maya/index.html","abbbad9d8fbe280f9edaf878f31e5f8b"],["/tags/mklink/index.html","fa6f81a5e5750600ba46b0f164f176c3"],["/tags/office-e5/index.html","022aa93c5753b00ade3055d2f22fc626"],["/tags/onedrive/index.html","273de96b717e03d4d979dcb494e39fc5"],["/tags/picGO/index.html","84bf978a082b354e42a584c743a629d3"],["/tags/pixiv/index.html","bccdea0686995d921e9f08811c5f19d0"],["/tags/potplayer/index.html","262144c7f6ab11e4d31f623245a99e64"],["/tags/proxypool/index.html","ee732724dd3afc0a3dd97990309794f9"],["/tags/qbitorrent/index.html","8e6cf34d82c609b3844e115516cf42d7"],["/tags/raidrive/index.html","ca9c1e432c87f92fc1ba7fdbb337d03d"],["/tags/screen/index.html","7cf129b6c306b90ab45dae8b4aa7a171"],["/tags/speedtest/index.html","e75d8f389c4ce58959c13f4e8fc39cd4"],["/tags/ss/index.html","21d68acd6062e255dec19d34b6187f74"],["/tags/ssr/index.html","556d0fa657322ee748801abc248a8172"],["/tags/stickers/index.html","12ff6ebd7f19bf1586302e940a9de97f"],["/tags/surfboard/index.html","e82a0580ef55f1348c551e30ce06dedc"],["/tags/tap/index.html","bc92c7d5c18d4d23b80facbf944e1a87"],["/tags/telegram/index.html","965db40fe23a41f56278ae86bbe5cccb"],["/tags/telegram代理/index.html","7bec0dbfb653568b4052849cadd9dac4"],["/tags/tg/index.html","ad54fbdf73c4f2a81d6d8f0efc85bf73"],["/tags/tg代理/index.html","f48ad6c6edadffd7975a5cca6056cdd3"],["/tags/top50/index.html","abb3145121e98191e5b47c81f6441b69"],["/tags/tracker/index.html","8fc59cd7deaae117afd52aff74104bb6"],["/tags/translate/index.html","a90ed7fc138ea2fcd2906112a297627f"],["/tags/translater/index.html","162a8db0b1d70ac7ce90935dc97e0dc2"],["/tags/tun/index.html","179792ea6cbf1a384859d10eb15b8541"],["/tags/typecho/index.html","15ce63d256d477a0f568210e09f754da"],["/tags/v2ray/index.html","e5da371c7138a7795d7d99d0b06f59b8"],["/tags/vpn/index.html","f20f474f5469febed539b43c90091160"],["/tags/vps/index.html","3d049373d0fc8aed3aab7037054be4d0"],["/tags/windows/index.html","ad48b30d8db0998c66d7273045216332"],["/tags/windows端/index.html","b5211444aec9c9fc2d02ffe3e7ca7c3c"],["/tags/xray/index.html","a2e485cda2952183454313d3ac259ba8"],["/tags/下载/index.html","bea2466419f547a07fbae354081a703f"],["/tags/不限速/index.html","6c0964a64152dee79991d2c20f7e9bcc"],["/tags/个人网盘/index.html","1c48e51a7febbe81f657b745b68ec4b0"],["/tags/主题/index.html","7eadbd9429ebd704cde7062ff9227768"],["/tags/二维码/index.html","819670697afec18f6908b3a2aa21e86b"],["/tags/云便签/index.html","0423e504f1771f6dc399753a9034f0b9"],["/tags/云盘/index.html","046c96c8f9547fa58fe49cd22695eaf3"],["/tags/人人/index.html","122716cfd0e63ae2e4ae3b5b1e9ab0fe"],["/tags/代理/index.html","c3dcb313ac3241a43c96b9fe83571cd2"],["/tags/代码/index.html","489e7b03d5ccb35de4d5fdab094926c8"],["/tags/优选IP/index.html","f52d0a17b6b7fd257f3a0a5b5ad66194"],["/tags/便签/index.html","1edcdc0d79fd2bdcd30ff13213bae279"],["/tags/保号/index.html","4830c782c5447a9cebd5fa6ba4c3abc0"],["/tags/免费/index.html","396c65248ab351a3fc351679cd778972"],["/tags/免费节点/index.html","28711e0dbda94d172d0fee0b99ab4ef4"],["/tags/加密/index.html","3ea34cebf4ec1921c2a50c2d9249fa02"],["/tags/动画/index.html","72c5ff8e0bca7a24fd40e016bbe53d5a"],["/tags/博客/index.html","7a2838dc204e194e836d52f2c3123849"],["/tags/历史记录/index.html","5056936cd433448f81575e0f5faec030"],["/tags/压力/index.html","b977c77a1c4c4db1ffdb1998ba0a175b"],["/tags/压缩包/index.html","b42d981cff3d5c3a0e65849467919024"],["/tags/反代/index.html","825ea66d2f417bca09e2bee572473814"],["/tags/可视化/index.html","1105977522e14e2d48b5d0a5b8d8565b"],["/tags/命令/index.html","1363b40f236a504c44ade0ffb428f698"],["/tags/国家/index.html","e439b2ae7b9fc684ba62abcbd14fa87b"],["/tags/图床/index.html","c52f79c3bb043c3f2cda26284fb36a10"],["/tags/图片/index.html","b77d47ee6bfde45d0041e9ecd6769cdd"],["/tags/域名/index.html","838c8e7bf8f5f2b7ee650f80529a59b6"],["/tags/多标签/index.html","faf16a4abfbad9ea50d694a87fdd3d1a"],["/tags/存储/index.html","19a902125ca504ff1c258b980c584361"],["/tags/学习/index.html","912dd02a7caece18e6166b1ecf29b0ad"],["/tags/安全/index.html","052424911e683efbcff33658cb920611"],["/tags/安卓/index.html","9c62edf25fac667cce25d7d250677cd1"],["/tags/宝塔/index.html","2374039562e80d53a32e514eef0b3706"],["/tags/小游戏/index.html","8c06941d5df94123066d3bff7f862d52"],["/tags/广告/index.html","b711979164604024ce4eea9d47cf87f0"],["/tags/建站/index.html","e80e24e50de11e79c94890a3fdf1cbf1"],["/tags/影视/index.html","a96ebfab1dfca94117102524c0759c12"],["/tags/微信/index.html","48c4e2d57ab186fe8b56ee7f940ac21c"],["/tags/快速启动/index.html","061c7830581fdc999014d63caa96ea56"],["/tags/手机/index.html","0eb21a41a39097cc1e126e63922836e8"],["/tags/托管/index.html","9b913227657b98b3750e3f56aab6dc4a"],["/tags/抓包/index.html","91a91bf1d8c53ee6e4323cc4317ffb0f"],["/tags/抓取/index.html","e21830b8b3107f824a5edaa4c27ca920"],["/tags/投屏/index.html","0e70b4d6ff459ed921cd94e57c66dbb3"],["/tags/拓展功能/index.html","b577e5cf191dba1d239f9cb2fd1a62c7"],["/tags/挂载/index.html","55ae5a7cc19344e8a88094c68259eded"],["/tags/指纹/index.html","e58bbf5609cd261abdb55c93c953ba10"],["/tags/接口/index.html","36f0aed72af6113045788ac04ad775b6"],["/tags/提取图片/index.html","e05a44036ea20a3079c4dffba35a9172"],["/tags/插件/index.html","ab4b25159808afd370c39352611dcce0"],["/tags/搜图/index.html","300d7c5b24bde44b6e5cb9e246fc3204"],["/tags/搭建/index.html","6dceb903c78101b55ff735bcd15a5bd4"],["/tags/撤回/index.html","44ee15e1ae391e4baa4f7a20d3da66f8"],["/tags/播放器/index.html","51ce638f8107aed97d916312ba226b9e"],["/tags/支付宝/index.html","3922f233bcce8305c26772b035832f71"],["/tags/政府网站/index.html","431fc37e8ab9d8f5d7fcbf17c07a0523"],["/tags/效率/index.html","8ac834abe080173be240dc35fcd95eb4"],["/tags/日历/index.html","6f9211d3f019a97f1aad209c694ff431"],["/tags/服务器/index.html","1c23b04889a90b7b8ac8287afe6eb16f"],["/tags/机场/index.html","36f5a1641072632cf8fcdfa86a6076b5"],["/tags/桌面/index.html","546cb62b3a58cfa3d02f645728e5ffdb"],["/tags/梯子/index.html","e5f8c6eef7bd6aa7c6d0de376c655b40"],["/tags/检测工具/index.html","67b0bd2725ef4ca85b7d7224994bbcfe"],["/tags/汉化/index.html","056502b474885e15c800a3c8d64701c5"],["/tags/测压/index.html","f8d1efe425be543aa7a6f73fed157130"],["/tags/测速/index.html","143481f920301011e7a985f0f3f451ec"],["/tags/浏览器/index.html","1020cbeab4ff85a85e7515dad44fdba6"],["/tags/清理/index.html","b39d16e27858a30b71a68ecc63f06302"],["/tags/滚动条/index.html","7a0ee1810a3fc0dc68b669beba7e96f6"],["/tags/灰色歌曲/index.html","6aeedb5eed342a9c09ebe22f3289bb67"],["/tags/电影/index.html","ab81d369d1b0c971f183f4d762769a4f"],["/tags/电视剧/index.html","846922bc85cc1d5cb0a797413c5323a3"],["/tags/白嫖/index.html","8cf8d615e52fdf2b6561df49e59053d3"],["/tags/百度/index.html","fbc9bc2778a3d78e1ca7f57cbbcac572"],["/tags/百度云盘/index.html","14c0399e6d2e0aff0790c2af297bcc62"],["/tags/百科/index.html","cce485726dccebcd92f195e05ea21804"],["/tags/短信/index.html","1e4e382a30dbe8b188fe1cc240b09696"],["/tags/硬件/index.html","c5ba6540265d45263bbe7e9c4c8a6c58"],["/tags/科学上网/index.html","5b8fe35c272b54db6c5186e405b6546e"],["/tags/空间/index.html","a7e6881e740bee58fc36196dddc5f908"],["/tags/笔记/index.html","423c62fd5f268b05d581682c06559f7c"],["/tags/简洁/index.html","7c8c1bb7c9382ab4664cc73ac55e5dd0"],["/tags/简约/index.html","c5e13777744970bf222f557e6e5a913c"],["/tags/维基/index.html","1966f9123004d4c3f8b1b469b76409c3"],["/tags/网易云/index.html","7d78126442414d03c763e1adb353c672"],["/tags/网盘/index.html","bef21d2d2b9ee923d7c828bc7cdba4fe"],["/tags/网站/index.html","5e8b1286278de7311576a6b3453970f7"],["/tags/网络/index.html","956b893a3bbe925bea867ba42d5e32c2"],["/tags/美化/index.html","f300e328209932d6f1ded106e674bc9f"],["/tags/翻墙/index.html","dd75e6d5afc28726cec5c5e298f3abd5"],["/tags/翻译/index.html","45a4c26ece33526c526f21f3dee90c2b"],["/tags/翻译器/index.html","393fd178f450906a6311f5a869294200"],["/tags/聊天/index.html","c5ad7bd0d101bc9122b29445afc25115"],["/tags/聊天室/index.html","7599517e66266f4bc2e99dc96a0611c5"],["/tags/联想/index.html","b587cb840a85e2e2f4c08c2149383312"],["/tags/节点/index.html","5f7f410e4c8de8bd30e3610205992aeb"],["/tags/虚拟手机号/index.html","675da3c9759ad77ce7b82db6629e6b2a"],["/tags/补丁/index.html","0aee136c76efd51feaade3d8a8b9d34a"],["/tags/表情包/index.html","847aa4cc3cc772728bb1178d611f7b87"],["/tags/视频/index.html","4ca3110d9014903e3b5a6c3e56b78677"],["/tags/解析/index.html","6105947ddf15bb725314ee5349fb2eb8"],["/tags/订阅链接/index.html","74107a547f8443dc2f879ae5623c3bda"],["/tags/记录/index.html","6d2cfaecca67834c6f1087d013382db7"],["/tags/识图/index.html","b7d5fdac6b6512f6af2570afeb7850eb"],["/tags/语言/index.html","1d54aa1b934f386881175105fd5351f1"],["/tags/资源/index.html","19a5b92ad77928c575465946ffc1c553"],["/tags/资源管理器/index.html","cb7c1d796cac4d3e7f178d35f5a118f4"],["/tags/转移/index.html","9f5ac16c3c54dfd69e20d59b553075e6"],["/tags/软件/index.html","ba29396af3d7c1c506edcde1f2a1d8b1"],["/tags/轰炸/index.html","615479b715214ab9c8413bdf4e3ccc97"],["/tags/迁移/index.html","1f23116e075e6d4291afd4bdd77f2000"],["/tags/远程控制/index.html","6d805e6847afee69480342fa5042e22d"],["/tags/连接/index.html","eaa2ff9fe84a08bdc3e1b1c30f873d20"],["/tags/追踪/index.html","75be77e8bb3146feaa3afaaf54686700"],["/tags/速度/index.html","e5a3fc83ed244bb5a458a4721ebd76da"],["/tags/邮箱/index.html","db646294cc6299623744495451c11c4b"],["/tags/酷炫/index.html","19c5aefd17bd859c69d0d8f128e48533"],["/tags/钓鱼/index.html","149abe01185ba58935bf00b62b5a06d0"],["/tags/镜像/index.html","ee5c1ee7bc8d88029fd9c9347f57c96f"],["/tags/随机/index.html","25ac5203c5e9e1ddca54ffe188f27652"],["/tags/隐藏/index.html","49eaef21930b1858437866af93199fe0"],["/tags/面板/index.html","929f495a47b5d821d3ce71af9f62d2a9"],["/tags/音乐/index.html","64b9e6ba8dbf01b7ee2d408bd28939a6"],["/tags/高颜值/index.html","9947a9b03083a9f1af1f7291e4eca8cd"],["/tags/魔改/index.html","1a35ce6abba78fca196b51473ed0549d"],["/tags/黑名单/index.html","2a2c625b379e749ab11fda0ada5c5cfb"],["/urls/index.html","3c266a27939d179678db2edec2810ea5"],["/vps/index.html","80be59955aebe9b157710ef8b91bd0f8"],["/支持/index.html","f061b67f5338bb90d711b0e2bdf52894"]];
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
