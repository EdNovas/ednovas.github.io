/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","54a9f4095e549858dd5b25bddc04d7d3"],["/2020/11/29/clash-windows/index.html","a47a366aaaabe92e22de5a621f24b89e"],["/2020/11/30/websites2/index.html","7b92b3ede40177a7ecb1dbaa57448d6d"],["/2020/12/04/iphone4s/index.html","04710266926190f230514268c4beda95"],["/2020/12/04/onenote/index.html","2b0972d59c078e0636d5efab0fdd6e82"],["/2020/12/04/wesites1/index.html","236b56b68f3813b789bb8d2ba1a9dbb6"],["/2020/12/06/nokia808/index.html","35d4659fe33bbe6602de2cec595592b7"],["/2020/12/07/ipad1/index.html","0e27058ad844405ea31bc25b84438aae"],["/2020/12/18/freesubscribes/index.html","3befe51756cc68a86e678a7ce1d01953"],["/2020/12/19/musics/index.html","bbf7cbd3e5cf541da401104a26738fc0"],["/2020/12/19/shadowrocket/index.html","f22fc555ff69c46bbd2cb021229426d4"],["/2020/12/19/v2ray-windows/index.html","f2943a82530991393f6841eb48e188b6"],["/2020/12/19/v2rayng/index.html","4338f7d785e3ade7b918c608f5c81903"],["/2020/12/20/beoplay/index.html","73aa2d3b9d0e0aa009bbf9c006f7db62"],["/2020/12/20/订阅链接转换/index.html","3afef7653fa3b2021fb2798913c883af"],["/2020/12/21/chrome浏览器下载提速/index.html","97bf9fcb733ba6acbfd2577d8e02d5b5"],["/2020/12/21/免费128线程并发下载xdown/index.html","abc3789ffe45784e9575fcec053766b6"],["/2020/12/21/免费32线程下载软件ndm/index.html","c67300ff998abd7492fc5bbabc30c795"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","4731963375faa0d0e60134e5ee55e3d5"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","8c025ab68e1221e89d811bfa6746cfb5"],["/2020/12/21/广告怎么知道我在想什么/index.html","802a5c62c5f78b4f8459a647436f870b"],["/2020/12/21/无名·引子（小说试写）/index.html","098d2207e72b1b46e8719c26d474b729"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","542f32e8dc153b898c69b907d69364b8"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","3cfaaa0739213e86cbaf3f46ac863767"],["/2020/12/21/高速轻量下载器aria2/index.html","145a7dcf8498d1c09ddd9b0aac0c9275"],["/2020/12/22/2020-cee-roo/index.html","30e0ee5f004406463fb4034c34476207"],["/2020/12/22/firefox插件、github、steam富强/index.html","3ba3ead2f5e0de962d93c3d510b498e3"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","31e1cdf10bdc8311fdcd988fe2cb0673"],["/2020/12/26/python-day-1/index.html","0bee4572da1ee8ef82f60140786b49ad"],["/2020/12/26/python-day-2/index.html","e6ab984ed28617e01b2875af7d9dd7ad"],["/2020/12/26/度盘不限速下载方式一赏/index.html","5826e08685af1200da9ae646684684b0"],["/2020/12/26/添加开机自启软件/index.html","6f77f60ff44e63c16c28d6b99cadffe3"],["/2020/12/26/电脑端截图方式一赏/index.html","da25dd94f68214805b166868bcbd0864"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","d5d8595a7a0ba0f515e41c76414d9ecf"],["/2020/12/27/最安全的浏览器tor/index.html","58fb13516b5c33f964e29e84d56678d7"],["/2020/12/27/网易云刷等级和听歌数量/index.html","62f8a259b39cdf1a8a9e14102050407c"],["/2020/12/28/freenom申请免费域名/index.html","0befeecb3acc25d7ca2b9327714f3a12"],["/2020/12/31/机场/index.html","2e9c044c74b8616a3869f2366d25e870"],["/2021/01/01/M1/index.html","a172e3ddddcec9ed8c4603f88275fbb0"],["/2021/01/01/compress/index.html","64737fb3581681cec5dcae8538e340d9"],["/2021/01/01/infinityfree/index.html","91b3fb8f9d8796a123bb18dbd0cefa8d"],["/2021/01/01/硬核翻墙/index.html","1d7fbc284daf680f49e9a904eec440ed"],["/2021/01/02/qq/index.html","a4791558b70265ced30afb29bda16d6d"],["/2021/01/03/netch/index.html","6688ee7d3f4d77f1468d28f897c3d17c"],["/2021/01/03/waifu2x/index.html","ec758578ed3dc17382ba53bbe0c62987"],["/2021/01/04/ads/index.html","55fc739bc88b36fff3c2d0fcfd13e931"],["/2021/01/04/games/index.html","c7f38068ec60a2dc90d3a7fd89be52af"],["/2021/01/04/heroku/index.html","278f3e8262e1f97e590503a23f180c20"],["/2021/01/06/movies/index.html","f353778841f1b992ba60b07847c63ff7"],["/2021/01/07/google2020/index.html","1f6f457698bed59600f932112ac7df44"],["/2021/01/07/lucky/index.html","eafc1cc91888cd079a33fdfcf7d7c29f"],["/2021/01/07/spotify/index.html","5b56452c67907f07aa4d65b195b88ba8"],["/2021/01/07/thunder/index.html","913d5cdb09d4a5e8be4b65efb9dcab5f"],["/2021/01/08/adguardhome/index.html","efe334df4d07aa6041b6e53dd70e5d91"],["/2021/01/10/IBM/index.html","eef97aaec548a3de139484d013f6d2ea"],["/2021/01/10/potplayer/index.html","014066ca719531f98d03a1724af26b68"],["/2021/01/10/sakuraanime/index.html","ad48b97ae7ce7054b720bc53f05f0892"],["/2021/01/10/美剧星球/index.html","495f57451a2bdba7021b95754e55a213"],["/2021/01/12/telegraph/index.html","61ab71d0859cecf416c05628966f67d5"],["/2021/01/14/comics/index.html","33b8680d631af98247e86d20f559f949"],["/2021/01/14/ftp/index.html","52e4030c6c4407eba678b69bdf8f4a8a"],["/2021/01/14/oraclecloud/index.html","9618c0be80385b52c5ee808722760cd2"],["/2021/01/14/porkbun/index.html","d61706e931eac71646d1919e76541823"],["/2021/01/14/powertoys/index.html","018be1ad7199c394d537f4038ed9eca9"],["/2021/01/14/taptap/index.html","f4a43734b6252042aee6d7d5947839d2"],["/2021/01/14/ubuntuvsftp/index.html","172fddbdb44b9f7b2035dc855586080f"],["/2021/01/14/小说/index.html","85248d3ce73260034974ec238bebc79e"],["/2021/01/15/freeproxies/index.html","54f240274553b735b3184d0fea3522a9"],["/2021/01/15/incaseformat/index.html","e9c48b0a8fc0120277c85cc83a66058e"],["/2021/01/16/euserv/index.html","a3f4978ff344034007bec93c516bb9ec"],["/2021/01/16/winxray/index.html","f94c188d4a94a782a58a9a64fa44ccb4"],["/2021/01/18/qqreadhistory/index.html","3a1c48bfb36bea447345637f76b2dafc"],["/2021/01/18/qqrevoke/index.html","9d0e8f617cd5bf1d5ca32409db8edf0c"],["/2021/01/19/freevpn/index.html","ce01ff5b401bea3abd5a213c759add6e"],["/2021/01/20/browsertrack/index.html","9af03edfffb3e9dc09e14b9471230928"],["/2021/01/20/v2ui/index.html","c1b0742f123bce556c4b897157691460"],["/2021/01/21/failedtoconnect/index.html","384802c21ee34185797c30cb3c3f0245"],["/2021/01/21/gitcalendar/index.html","4e70cba4601379988339c2f424acb4db"],["/2021/01/21/markdownformat/index.html","4cfd18fd7d852e186183cabb26d39cdd"],["/2021/01/21/markdowntable/index.html","ebdebb4dc6dffaa85632061c4e90678f"],["/2021/01/21/vercel/index.html","36c4627d10b52dbbf4059512d3095e75"],["/2021/01/22/hardware/index.html","94582334cf85193ac849cf7fe3771414"],["/2021/01/22/muviz/index.html","d5a7b222e75dfe5cb882e73473d156be"],["/2021/01/22/randomapi/index.html","33956541c21521d560c5104c83041e6b"],["/2021/01/22/searchimages/index.html","b1e76458be89cf34ff4a78dbda69cd0f"],["/2021/01/23/RX文件管理器/index.html","314cbd494f69190a40b2adbdfe3c1b43"],["/2021/01/23/chromeflag/index.html","42581b314fe54163eebee8a9e29a117d"],["/2021/01/23/qttabbar/index.html","a4a4025aa7cd1ca7a86b407367009c2f"],["/2021/01/24/githubspeedup/index.html","e68aab9510c95228ab13c3e6224c1c23"],["/2021/01/24/jsdelivr/index.html","93d329f0264b77dbf2f6adaae559c9ea"],["/2021/01/25/note/index.html","817a4eb0fee1dac0ab3e8f4c60121276"],["/2021/01/25/soul/index.html","f0c41bd3e137d377437730641320ddaa"],["/2021/01/26/herokuxray/index.html","6f74ab4f6ba115f6e60c1e799a5da99d"],["/2021/01/27/proxypool/index.html","83ef1254b48a9efd9a3b0df275ea6de4"],["/2021/01/27/tracker/index.html","746485edb6dfad7b0af33a7dab605a52"],["/2021/01/30/pandownphp/index.html","7bbe78859356ee78e8c48d522c106128"],["/2021/01/31/newgroup/index.html","1e09660547cdc16d9ecc3531af4968b5"],["/2021/02/01/clashlanguage/index.html","f6c6e63b585c06eb0874588e6e737215"],["/2021/02/01/encrypt/index.html","2e56fecadfcd04b49845e47149678372"],["/2021/02/01/footermotion/index.html","606efa3c10bd2d4ecde5e9b333adb4bf"],["/2021/02/01/gitter/index.html","f9f056b358d0d52919fd061d12e93ea7"],["/2021/02/01/pixivtop50/index.html","279c0dbb70b954bfb30932ec1b4a6a81"],["/2021/02/01/scrollbar/index.html","f1196abcc60513355174c2756007e847"],["/2021/02/02/clover/index.html","134f1367e88481706b5eef4ed84d77c8"],["/2021/02/02/maya/index.html","ce8d05cadec79ea8c1b26b4eb6c73160"],["/2021/02/02/speedcontroller/index.html","63d8f370b23d612e610cdc83615bd9f5"],["/2021/02/02/yesmusicplayer/index.html","7a93ff45e5879a89dc4a038530e06eb4"],["/2021/02/03/lenovoonelite/index.html","1ec8cfcdedaaea245466af3b1f18b14d"],["/2021/02/03/skipads/index.html","45d7777b0425a4c7a0cda959dd5380b3"],["/2021/02/04/picseed/index.html","12fab8999fe76354a84782cc13f5a3dc"],["/2021/02/04/renren/index.html","3b0aa3a524730216fb0398bb369e2b13"],["/2021/02/04/serverstress/index.html","21305cc7fce6f1b9891d94a90061f5bb"],["/2021/02/04/wikipediazh/index.html","fde3b498177ccb77d3de869f325392c3"],["/2021/02/05/googlevoice/index.html","88fbf768163f56c0672bd016f2283ed6"],["/2021/02/06/clashconnection/index.html","e31d86beb3dbbce6264aa2e8f7b96a6e"],["/2021/02/06/gvtransfer/index.html","56c47c2acc88dda546dbf33a4aafa002"],["/2021/02/06/todesk/index.html","6509b34b703ade9e00b38cd6a208400c"],["/2021/02/06/vpnblacklist/index.html","1c3a5d998701b49e5a103c89631abac4"],["/2021/02/07/mklink/index.html","9eb9b152b7a37c9e43ef58b4bc5487c2"],["/2021/02/07/speedtest/index.html","dc89b180feaa4d80bc99132302a2f845"],["/2021/02/07/translate/index.html","4f1827d184ff67032600041b22dd5b8a"],["/2021/02/08/ewomail/index.html","4290afb4c0551bef8c5f80cea8f73502"],["/2021/02/10/officee5/index.html","618a4ff28410f5069b0b56f83f09d0cf"],["/2021/02/10/raidrive/index.html","667d8f56ff611ffa52b9fe424c2af80f"],["/2021/02/13/e5sub/index.html","cd5d8d14e6b8c4b3442bb36da7bcc13d"],["/2021/02/14/screen/index.html","0bd60a8593771088236e7f7e4f407681"],["/2021/02/15/clashtun/index.html","00d81fce2bed3b965f2d80dba21fde3f"],["/2021/02/15/messageboom/index.html","46e1962c8d24e5267831dba60a3027b9"],["/2021/02/15/oneindex/index.html","609e7d08964bf6b757912a69ce1c0014"],["/2021/02/16/govsites/index.html","5bdafc899106a91c53d80aa3b7e3f3f5"],["/2021/02/17/hexototypecho/index.html","2538951465325d9158fee81898db6a47"],["/2021/02/19/fiddler/index.html","bd7ed2ad2fb1edc6a087e5b4b57f6d0b"],["/2021/02/22/potplayerset/index.html","3d96dd189d24d1962a7d469265c36fd5"],["/2021/02/22/studyresource/index.html","2834165f8326fa54fcaa87c0747751dd"],["/2021/02/22/telegram/index.html","047450d677a8f526fadb994ea56eb4c3"],["/2021/02/22/videos/index.html","c498b2373ec6c19964370bd7288de270"],["/2021/02/24/mtproxy/index.html","916dc407df9f8aebaeee673bb228e11b"],["/2021/03/10/catchcat/index.html","3878b3013b1db175a654e3ddca58f12b"],["/2021/03/10/neteasemusic/index.html","80d6da43581b0c7b6f05ce9b9e8d867b"],["/2021/03/10/surfboard/index.html","0b006af8e54d3b52b22edc1acb5d6363"],["/2021/03/11/vpnandjc/index.html","e9a3461685605ec65b157401eee34798"],["/2021/03/12/qrcodes/index.html","5c1a5df4b63ca9dce7de370ca4eec960"],["/2021/03/20/qv2ray/index.html","8ad8ff42e207070a29cbd7a65b865f7c"],["/2021/03/22/freevps/index.html","b95d946848930f6fa9258f545ae2c33b"],["/2021/03/24/tgstickers/index.html","3708888734ce8a3969dccf5ceb3cd93a"],["/2021/03/25/clashx/index.html","ed1872d47601674a0bbcbe9f797f29f7"],["/2021/03/26/bingwallpaper/index.html","1083af36392d2f3c8ff36144280995ec"],["/2021/04/03/soutu/index.html","7a3c418de8aa69ebeeb193cb9eb08467"],["/2021/04/03/tiyunti/index.html","c01e23d866eb8b6fe10c161a085c2080"],["/2021/04/04/btpanel/index.html","d429c08c10d3fa63dc2fd20d776e7d33"],["/2021/04/06/atlasos/index.html","c5c13122229b375ac9615b3160eda50c"],["/2021/04/06/cleaner/index.html","d8cf24e501505897a59cb05534525e34"],["/404.html","034e806a26cad9bca8d4c29cc6871f4f"],["/archives/2020/11/index.html","4595f8b72ee5fd7ae75723b796886b2c"],["/archives/2020/12/index.html","ae29b153a7aa32d14b4772f70d8db664"],["/archives/2020/12/page/2/index.html","2dd889ecb3a0a8fc194fd0c0863e3ad6"],["/archives/2020/12/page/3/index.html","3f31cf9898229c38487bde37ff50d3c4"],["/archives/2020/index.html","7f9dd2c55f4cb91fd9bd62fdbfcf2f49"],["/archives/2020/page/2/index.html","25b74c2ef59d85ffe938f332a219551d"],["/archives/2020/page/3/index.html","b030882e8cfa8474eb7e69f197b3fc6e"],["/archives/2021/01/index.html","c611eac614ee19f5e2a500cc13535705"],["/archives/2021/01/page/2/index.html","2932b09037fee268c3913fd910553beb"],["/archives/2021/01/page/3/index.html","a8ad9212162237f608fc79d6cb9a28c6"],["/archives/2021/01/page/4/index.html","db897c7d53b41375349f6e5e9c781972"],["/archives/2021/02/index.html","1ce9048aab29949a77e045acdf32e48d"],["/archives/2021/02/page/2/index.html","a4fa1fd6596ac426f762a6452d0500a2"],["/archives/2021/02/page/3/index.html","0f5938068843867cf9b7ad08ea30de2b"],["/archives/2021/03/index.html","5ecd2d7caa79b31ea07c0d266961fc19"],["/archives/2021/04/index.html","c7e5731245f506466cd4b3ca77d1f28d"],["/archives/2021/index.html","dcfec91645c64dca9327705acafea9ac"],["/archives/2021/page/2/index.html","df4277a58551d22b6e9455fe8caaf4c2"],["/archives/2021/page/3/index.html","f1b096bb4427a781dde664d0e9656c3d"],["/archives/2021/page/4/index.html","7ac852fd73dbb321afc06e22d139e272"],["/archives/2021/page/5/index.html","dd71c6a3f531735964c65156415a2cde"],["/archives/2021/page/6/index.html","94bfbdf0bb76a25073bf6df4739dce3c"],["/archives/2021/page/7/index.html","685d7be98b6c7183548a9dce23cd3d38"],["/archives/2021/page/8/index.html","87e7574701d1b36568babef7ce4674f8"],["/archives/index.html","6697182cf8e16deefe48dc6d4db3cc08"],["/archives/page/10/index.html","a5d6fdb0f89d6b71b7ef1c726da5f0d1"],["/archives/page/11/index.html","5d94ec738d3a82237530921c1065a07c"],["/archives/page/2/index.html","14b656c88615eae0248fb41d1b23bd27"],["/archives/page/3/index.html","12145bfff5fc963ea41fec2525871682"],["/archives/page/4/index.html","b14e138f2f50203e39a2fc5ef5f14b1f"],["/archives/page/5/index.html","6563db5cb9ba31c4ecee034cad0a0c99"],["/archives/page/6/index.html","638c0da4b94a7f5904164ff9e2cd9bd8"],["/archives/page/7/index.html","ab7d84f4d72897a5e491e5d38a28c937"],["/archives/page/8/index.html","1e92fce3467811339a46162330e6a727"],["/archives/page/9/index.html","e1231dd116b4ea7afad1155e9618c639"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/atom.xml","5c5cbad54f7bbdd206a83c87e9c5f190"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","a04b8b4dfd46fc0586a09cc157a88041"],["/categories/index.html","9ab1f6e0dd0f65dc8aa1e2a0b88a43fa"],["/categories/下载/index.html","862672e340fdc8cc08c66eff80148a19"],["/categories/安全/index.html","f5b284063e16ec37672159107acaf3ee"],["/categories/建站/index.html","6c9557ae507a207093396ef3d3975aa0"],["/categories/机场测评/index.html","6106ca7de33a1ae8e0251ba1243fe48b"],["/categories/杂/index.html","d46a8622055ad7699bc6b141ada124d1"],["/categories/杂/page/2/index.html","6f030d34a540c9735b7b7e8d0d7d8b6d"],["/categories/测评/index.html","f71060d1d1065d390d78d6881f70f915"],["/categories/科学上网/index.html","2ce61012f39eebdb43cdf83c47fab659"],["/categories/科学上网/page/2/index.html","d6ad27fad2972b66db8ac8cad4bebe3d"],["/categories/编程/index.html","8612a1b1a4e1bd79a711c978b919d0b5"],["/categories/网站/index.html","a87e269fa22c029081461a1a04e71210"],["/categories/网站/page/2/index.html","3cd1d54354c3038d45f47016e5e5004f"],["/categories/软件/index.html","c417b506a3a0a5294365d4c656b2ef96"],["/categories/软件/page/2/index.html","b64167a01ed21caf93f106264454b2a2"],["/categories/软件/page/3/index.html","4cf144bfb72c5598373931f0925bf6c3"],["/categories/软件/page/4/index.html","9b79f5e617d41a8ba65efc705f8df386"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","2dd3632255e00fc94245760582cedcd9"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","d2372b6751b16653528e58edd0e448ab"],["/ios/index.html","b5230528bb8c0836f50f35d2d051fac4"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","133bfefc6716e5206c47917b3389d855"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","19137fa13132037c209aa504e6bb50b5"],["/page/11/index.html","de91cd4a5b20d26008d349dc364f63c5"],["/page/2/index.html","d67a38a50de18fc556d5dd6844c25521"],["/page/3/index.html","9e10d8671599b294a55b319179614a45"],["/page/4/index.html","4d61a7a8cc12fc8ca34327f41474e6cf"],["/page/5/index.html","009d5eb6a5008a448f2a85ebd633a76f"],["/page/6/index.html","0fca52c775a27aea39491ba9f682655f"],["/page/7/index.html","362bf0d7689c5b905a8eebd4d4689589"],["/page/8/index.html","49d8a52895bc73037b98fe83eb3c9a26"],["/page/9/index.html","98ac98493866bc1520656da5d8c37b7d"],["/payment/index.html","583ac319ebc7ff2d034d2b88eaf0c144"],["/privacy-policy/index.html","ff37c9868364e0c02b2af84c5648a0c3"],["/search.xml","962eb6da8e58a7a87f36f2cbf76df580"],["/sitemap.xml","febe56da47ff074c84caafae93fd10a8"],["/sw-register.js","f2266964c18befb8bfd307c50b8f574d"],["/tags/5t/index.html","180ce715759d4b3e731dd9fa93e3e443"],["/tags/Bing/index.html","b60bd01255d86b8117e189b5d77caa60"],["/tags/Clash/index.html","81bc7aa3e97a1f31a9484b250488184c"],["/tags/Clover/index.html","3450900481a1b29e3534d6f3282aa036"],["/tags/E5/index.html","b01e32bce76ae163c90de68f378589ff"],["/tags/FTP/index.html","680c9f8359304ed269c00beb9e408316"],["/tags/GitHub/index.html","8732cc5966ff4adc6c6c486c59c37d8e"],["/tags/Heroku/index.html","aaf707afe0ce026dfe9934364f8022d7"],["/tags/Hexo/index.html","f738e8e718ffcca78b1555ea7ce35945"],["/tags/Lenovo/index.html","9e2c7c74261ac312c0da75a59ab6b0e0"],["/tags/Oneindex/index.html","dde6bec248d2dbec0907ea286a364381"],["/tags/QQ/index.html","0645f8d5fa5baaa263bef696cde0997e"],["/tags/QTTabbar/index.html","35de6ed44d55f2978730e0bd7c3d9838"],["/tags/RX文件管理器/index.html","cb2251e7912cb7f661659b9f63e00b23"],["/tags/Todesk/index.html","e7989a5811e93ff70dd1ae6bfcdbc9df"],["/tags/Vercel/index.html","c00b77c0ee6a74ffbc039b282f9e8a8f"],["/tags/ads/index.html","ae70e9a07b7183df81f23affa4199dc8"],["/tags/api/index.html","2db0153e43c48eb4879465dcac8be2c8"],["/tags/app/index.html","5f756d1f7921a563647df9a115e9c4de"],["/tags/atlas-os/index.html","8006ce95d239884a4ed7ab7f28dfb898"],["/tags/blacklist/index.html","b79436e3fb1af4a0f08b0ecf867631ef"],["/tags/butterfly/index.html","4bd2ee808db2af71834350a7737b9f4e"],["/tags/chrome/index.html","2d53eb56c225a36115bb5ad371ecad00"],["/tags/clashx/index.html","8de25d27c3f3df39bf911c16d143c3c4"],["/tags/cloudflare/index.html","43e72e2ccbf25a9d43ced04d916c782b"],["/tags/cmd/index.html","64fbc58d67ede8e0a83c8c15af9d7f27"],["/tags/c盘/index.html","0a278625281ab16948300ba26309ab37"],["/tags/email/index.html","329089efbda4904c390acb53bc6240b3"],["/tags/ewomail/index.html","56e559b628ea5e4d747fe78563184323"],["/tags/fiddler/index.html","5b194657d83a0d6462d70b582ede7ce3"],["/tags/flags/index.html","d7e1ecd998b31425056e9d1b9c1e0407"],["/tags/footer，页脚/index.html","ed1dd2f454a24ebf62400c718ffc91e1"],["/tags/galgame/index.html","c4000ef787f13cecd1475bf494f5ba7b"],["/tags/git/index.html","9873ae46ef09d97586c577da03092308"],["/tags/gitcalendar/index.html","c73b9dc2f1c68cdeab27f5d6f9d14e55"],["/tags/google-voice/index.html","6a9c7fb7db155740b99b5dbb3184df8b"],["/tags/gv/index.html","1e5b59592cd9952a8b21f27af44bd632"],["/tags/html/index.html","66383af489fd21fa31966f88db6dc7a0"],["/tags/index-1.html","2c3019d1f17650ad87586f8f44411c67"],["/tags/index.html","a67786ac7f93e8c05405743babd2b812"],["/tags/js/index.html","e5bb1a2399d214863bafd9fdd9ebe563"],["/tags/jsdelivr/index.html","289a396c76edb91a789d4e23a2fa23c1"],["/tags/linux/index.html","4909b61f28c6035a6a71b52d6145f9d5"],["/tags/macos/index.html","47295561e2cf1ac1357d01d4a3f0fbe2"],["/tags/madVR/index.html","98d182319b6513e50cb588c0f7ea2cd6"],["/tags/markdown/index.html","96105704408e9c8543a3aeb4beb9da33"],["/tags/maya/index.html","5084dff8983a9daf0c1946a945f07070"],["/tags/mklink/index.html","0048f2270e73bd877af51d3c28edd564"],["/tags/office-e5/index.html","55b3edfded110fc3e258adbb9f1b19f6"],["/tags/onedrive/index.html","7bfdf16acd4116dddcd2934543621751"],["/tags/picGO/index.html","7ce5a490a4ce17dedc059ea1efc6a844"],["/tags/pixiv/index.html","52a1a6d1023859d35b7d2a978b6f4640"],["/tags/potplayer/index.html","347f3d7b9e8307cb66671793cfc095a4"],["/tags/proxypool/index.html","c62aa43e84185a4940a65234a78e8e13"],["/tags/qbitorrent/index.html","2e11f2ca8a8759dcda864fb4629546a4"],["/tags/raidrive/index.html","30629cee7ea390235d644429a64c330d"],["/tags/screen/index.html","f9f5b20e0fcf41c475c7559463843ae9"],["/tags/speedtest/index.html","b52fd3828f34e8d866b9e012e7496af4"],["/tags/ss/index.html","901e2d29b1670690d8b509af6ea415c7"],["/tags/ssr/index.html","f608f5aa866eccc6b50c44ef97145247"],["/tags/stickers/index.html","de5d2ead6ad49dc27b9863d3a1dc6441"],["/tags/surfboard/index.html","be1ec2f925d9f43ff0b8ec12a4858005"],["/tags/tap/index.html","0f1706262706bb4228f97c6926e6276d"],["/tags/telegram/index.html","e079ed293fe95cf18eeb4d3f303daf25"],["/tags/telegram代理/index.html","7bf31d0b2d33d9e5f4951fe5bd16a248"],["/tags/tg/index.html","623fef934356a34ac8867c1ffbc24d15"],["/tags/tg代理/index.html","6c2f3560111fa54115c917ef80ca1a2b"],["/tags/top50/index.html","ca95164f2a1e33b5577252737005bb03"],["/tags/tracker/index.html","9eb5e1eb75ea9d81c178df4eb910461f"],["/tags/translate/index.html","f120c4d1cd0282cfede23db1e2c6230c"],["/tags/translater/index.html","4e0b56fa910c6a050e432fdac1f9807c"],["/tags/tun/index.html","5601277c6f56f7b9b2c4037029c062ee"],["/tags/typecho/index.html","8d690628bcd800e9d3cc14b2cdd0522d"],["/tags/v2ray/index.html","518f0f4c649ed8d9c4b470649c14ce87"],["/tags/vpn/index.html","3dc4cd593096f0a421e56e79e5845164"],["/tags/vps/index.html","76aa8182dd6e218b62b4fcaaf30e7e92"],["/tags/wallpaper/index.html","125e773a759660dd04e23cb6dfd42ba0"],["/tags/windows/index.html","90f6e8cc2979972ec9d3a1cdd7c9abdd"],["/tags/windows端/index.html","42f10ab0dfe382c356550fdc5d46eef1"],["/tags/xray/index.html","bbbb50ef8706276a163f0156f5cd71a5"],["/tags/yandex/index.html","b715b34014e9a9d27aa56c3e2b1ae13e"],["/tags/下载/index.html","db83b2f1d4f32f994773af2a2489765d"],["/tags/不限速/index.html","c9bad2f5884c635748088576be63cb65"],["/tags/个人网盘/index.html","ab1cb7200084ea68c47ebb53e53ee9cd"],["/tags/主题/index.html","edeeb0b10961e0513b16dd0ae6569aef"],["/tags/二维码/index.html","4278d72357ffc22ef79ab5d68ace8efb"],["/tags/云便签/index.html","2074553606543acc807ebbd7e34977a9"],["/tags/云盘/index.html","5fde5d8df83b719dfe9d505af2006b10"],["/tags/人人/index.html","7a76a7cf1fdc59af24ea506bf0387ae4"],["/tags/代理/index.html","7fd85c443ed45d946b9a3f04ee21ff79"],["/tags/代码/index.html","0acea070664052be6b3c2ac02c78cc78"],["/tags/优选IP/index.html","994bb32f61f1a5807c4b2d10480fadc4"],["/tags/便签/index.html","800e2784e754aea773881b28979193ea"],["/tags/保号/index.html","1c27abb1c5524b8ab79660fd62611222"],["/tags/免费/index.html","401d1942db9cc4e1a3e00e8c68482d78"],["/tags/免费节点/index.html","57cd1e6e14263e19d3a91e20b1c2715a"],["/tags/冷门节点/index.html","8e0a8111441241a4840fbc446a978792"],["/tags/删库塔/index.html","84af7ddc1212bf39a44a86ec0a0e8df1"],["/tags/加密/index.html","5be48d46036274f68dcb615c7d79e8a2"],["/tags/动画/index.html","8beea9ba27e5614fd9da826c5f99354b"],["/tags/博客/index.html","2af675aa0adcdc5f53b4385554e998a2"],["/tags/卸载/index.html","05cb659f05038e8671d06d1bf5b67941"],["/tags/历史记录/index.html","e9d0428a4026176932da525754caba80"],["/tags/压力/index.html","41a6abaed00e03164e4b96a3e073f776"],["/tags/压缩包/index.html","bd6f8e467923786378bedb36b8b80724"],["/tags/反代/index.html","f6530cbc70cf7e9ea66798ab827df663"],["/tags/可视化/index.html","5d4d5aea33604b140ddb6708cdd7a44b"],["/tags/命令/index.html","c366f85a32bb77e63dd9ac98f7fa26ab"],["/tags/国家/index.html","4b5d207069755cfe368bd6c9327c6ad4"],["/tags/图床/index.html","b29dc10a0fe1f4c93e1efdedcab7ada7"],["/tags/图片/index.html","f43256414dea8c6294dd08920ba4aff8"],["/tags/域名/index.html","9658127a9aa381fd3b556642cf1d7993"],["/tags/壁纸/index.html","5521886c2fb5409094d411cd1b397e93"],["/tags/多标签/index.html","34b46c89b4129dd6cd948571ae2deffc"],["/tags/奈飞/index.html","6ebaf826411130c8fb1a811b5e08d00f"],["/tags/存储/index.html","7b46905d6791870a05526767def2e6b3"],["/tags/学习/index.html","2b85d2491b200bc16fa56c71120b22bb"],["/tags/安全/index.html","b31b2361c80eeeaa9e38229460e6796f"],["/tags/安卓/index.html","f9fb48906f79fdd187ef5239eb442dbb"],["/tags/宝塔/index.html","5f4c14b2137e11562d1ae1175be78bf1"],["/tags/小游戏/index.html","d8e588b431a1b3c4b1f00929478c6096"],["/tags/广告/index.html","171179a981c00517a8993d706c33357b"],["/tags/建站/index.html","3cc8e9e0c886f4bd701890c50de2483d"],["/tags/影视/index.html","4ac082d60864d3123664030cca83f3f1"],["/tags/微信/index.html","ea76e821969012d2a459c3db900fdeed"],["/tags/快速启动/index.html","e3636caff3898cf637f18024347f080d"],["/tags/手机/index.html","60f95545bd3c08e86acb2ffb3d6b3e99"],["/tags/托管/index.html","de25da5741af9c2f2c6987e85a18acb4"],["/tags/抓包/index.html","d5adc4439f231c640e7998f5b9523ed3"],["/tags/抓取/index.html","846d79fc6a84029064ed0536db87f0c9"],["/tags/投屏/index.html","1157bd367ae555ba3df035cac65c589c"],["/tags/拓展功能/index.html","e372567784f46cea4e9c6c31f05ecec8"],["/tags/挂载/index.html","b22e38c07b038cd88e27916f5ad25bef"],["/tags/指纹/index.html","ceb3efc5d7f777f3503e002af0074d19"],["/tags/接口/index.html","98198e32a3a4f40dd2e8e974f1faee46"],["/tags/提取图片/index.html","43d230d1a1fcd0298562823de11c6ff4"],["/tags/插件/index.html","5cefdd53725e65864a54e53271520414"],["/tags/搜图/index.html","fbe8653851a8d7b966e41c4a94f95a4e"],["/tags/搭建/index.html","bf8e8a1acf293b477cfdf0b7f99899ff"],["/tags/撤回/index.html","664cc682449d40425c5c7ee1aeb32f69"],["/tags/播放器/index.html","23372665d2eb2373e2b80aa96544c984"],["/tags/支付宝/index.html","e3e7d797b9fc7771c3348437d6dbf78c"],["/tags/政府网站/index.html","e97decd2af65f58b1652f02f67ac0d68"],["/tags/效率/index.html","93580a7425715eb054af19b131a4812a"],["/tags/日历/index.html","aed6141634a83bcd45db526aa97ab8a3"],["/tags/服务器/index.html","c89dec645845423a0450f0a4e87494a0"],["/tags/机场/index.html","81d025b3fb18ed5ae9ea3a4f8e3d8a51"],["/tags/查重/index.html","81cd22ca1772674592206b04938f38ac"],["/tags/桌面/index.html","f1955e68b2c7ef8ed7e7b725f96fd73a"],["/tags/梯子/index.html","3ec1ea080960a46f88870de3d0f7d9f4"],["/tags/检测工具/index.html","ecf6e919a146fb58f16529affc5729ce"],["/tags/汉化/index.html","0518d184c917a024fc728335cbb4bd0c"],["/tags/测压/index.html","36f4472580371529e15014fc878c3350"],["/tags/测速/index.html","7d0292f549ed7c73f7372c61fae03816"],["/tags/浏览器/index.html","c5eeb4af5f18798538b44bbd1c075dec"],["/tags/清理/index.html","c5b9dba61b3bb84bd0ef7d1598fa5acc"],["/tags/滚动条/index.html","360ccce6699f0afa26bd9605728b7987"],["/tags/灰色歌曲/index.html","803f5bf2e69c3efa408f1d75644600c1"],["/tags/电影/index.html","6729f53ec02f0d48d479ea0f1b7d4e24"],["/tags/电脑/index.html","f8f1614dbf245283f3765b2795c762e4"],["/tags/电视剧/index.html","05e886dc3c9fe1a4b1d2fa1a4de53a42"],["/tags/白嫖/index.html","fc8868b0fbd24d7372103a91986856c4"],["/tags/百度/index.html","5a9410e7289ef93d05bbe62d3da9fef5"],["/tags/百度云盘/index.html","ffd3978cadeeaad5e1b9a17ce276cc97"],["/tags/百科/index.html","addb35c59b6e323e41a0052e93830914"],["/tags/短信/index.html","369e98edd27834ccac5eeb6bbadb8387"],["/tags/硬件/index.html","cebb9906e0cad3c563de9cda6fe956e8"],["/tags/科学上网/index.html","a8f7dcbca6c71153bf527eda220059ff"],["/tags/空间/index.html","dd96df66a9ec105e5da446cccb610bf4"],["/tags/笔记/index.html","39f043d7de4f2c23c3b568216a95e433"],["/tags/简洁/index.html","363796403857e904406b43d20783c1dd"],["/tags/简约/index.html","fc7c8143f5a0056ac5d8eda59346cdae"],["/tags/维基/index.html","0f7ca04dc3d3fa689320ce1bb28a3922"],["/tags/网易云/index.html","84fef0dfc833e4ae85ef67d55898a4fe"],["/tags/网盘/index.html","60f4ace4decf2047452deb2b49b2eee2"],["/tags/网站/index.html","77d562b2f291d289e050e58d5cf57de7"],["/tags/网络/index.html","a6dccd6139f43aa8cc7ea1b3d835a935"],["/tags/美化/index.html","55021a80f788ca461ba88264b70e6135"],["/tags/翻墙/index.html","c6c62577123f10a10b3ff24de914fc4d"],["/tags/翻译/index.html","43b38b9cd012745b6c9cd4f3b0f0817f"],["/tags/翻译器/index.html","4f216129cf9201d77ca7d8856ea43f0a"],["/tags/聊天/index.html","2855ea2986bcc3ac312102bd7d098c1b"],["/tags/聊天室/index.html","f018fc76569aaaf92b1fa641cdce5362"],["/tags/联想/index.html","82487c0d7c14b16522622a81d74a3764"],["/tags/节点/index.html","7c8916b6bcdb62c9a209a2f3c0f619dd"],["/tags/虚拟手机号/index.html","0f96d8e2141ff5b4df88961c3f93efd5"],["/tags/补丁/index.html","b46cd6e0cf5d1c4206467117cf7d1e73"],["/tags/表情包/index.html","9d6171bf06534aa624cdbdcd9f36d754"],["/tags/视频/index.html","7adbaf7033032266c3148ebda5a1664c"],["/tags/解析/index.html","d2a78d7cbb1c56979999ce9b9a9190af"],["/tags/订阅链接/index.html","fd2e02ffaae6107ff0ea58af4d440f37"],["/tags/记录/index.html","9357db8de99d22623a07205a8c9f0960"],["/tags/识图/index.html","447e3b2ff523d88443ff7eeb37e43c17"],["/tags/语言/index.html","b9a8b7c127aa94cc52ff25dc96643bde"],["/tags/资源/index.html","ed8c721c6ba36488bbd9ba02c41b81ba"],["/tags/资源管理器/index.html","bcfd55856d602ec56845db175ad2ad00"],["/tags/转移/index.html","6569b3561072f6600a4c4bfc40f80bf7"],["/tags/软件/index.html","70f2898b0228be83ae8d96e5316f6f43"],["/tags/轰炸/index.html","4cf14f2822cb5386b7cc3fbc7b0113ea"],["/tags/迁移/index.html","865ddd221328efb2de27fc140016a38c"],["/tags/远程控制/index.html","4e0b7d940769274593449ec2855037fe"],["/tags/连接/index.html","490bd1c7c9d86496efdb0cd0f41d31cd"],["/tags/追踪/index.html","4b029bd2bb1bdab9f1a813014e7ffff6"],["/tags/速度/index.html","c0853b93864cad3d8716a37c1dcb379b"],["/tags/邮箱/index.html","660fad41103d016702b89f0fcf2993a6"],["/tags/酷炫/index.html","c44389a60b7884226c12819f3dbdb7cb"],["/tags/钓鱼/index.html","a04ec2e70f3ad5d110399fdcfa18d894"],["/tags/镜像/index.html","d65f97d9264cf0e68bbcb8c84e03082c"],["/tags/随机/index.html","912b1c9f5841b82491cf8ed80533fda6"],["/tags/隐藏/index.html","3607cd28e17576f9131e2b256786360c"],["/tags/面板/index.html","3f98eb47186c226971cafb0f892c971f"],["/tags/音乐/index.html","731c430d41f0dea06f5254f818f670fc"],["/tags/高颜值/index.html","3071bd3431513f6b526fe7835d759799"],["/tags/魔改/index.html","c11744fadab263b8cd055f0f2f136f21"],["/tags/黑名单/index.html","9e9f2fdfea53f3ab117e226b8fe42a6d"],["/urls/index.html","8ff1c5540d9fc193ef26cddd38574eb2"],["/vps/index.html","29de6fb147ffaef298ca78eb7bee2544"],["/支持/index.html","0a0916342f6995be5cc47455830a16c2"]];
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
