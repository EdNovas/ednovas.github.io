/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","53a12ea5c00e19cab0223ebd43d6717b"],["/2020/11/29/clash-windows/index.html","eb98330409bb0c16f9083cbe076f7d6c"],["/2020/11/30/websites2/index.html","3f59f1c95c398a0ee9651044e26e7ade"],["/2020/12/04/iphone4s/index.html","3be4c8b9ca26a9734716fa1726b26752"],["/2020/12/04/onenote/index.html","d97f2fe03a323671dfb13ec36359ae8a"],["/2020/12/04/wesites1/index.html","1021c09992513e462a9b9bb751fb1f48"],["/2020/12/06/nokia808/index.html","d747b426da3a31ecd8090e8881c03344"],["/2020/12/07/ipad1/index.html","c2db8dd83c8c79fcc527b9912aa5f519"],["/2020/12/18/freesubscribes/index.html","65f1962d0a2af0d1b663dafb33fee4a8"],["/2020/12/19/musics/index.html","e565b91e9f9d18b53bcb2163b6da54ea"],["/2020/12/19/shadowrocket/index.html","c2bd1f14ea75526bb0a139641b9e68de"],["/2020/12/19/v2ray-windows/index.html","297944d1d40dc8db66fa1d450efff4d4"],["/2020/12/19/v2rayng/index.html","b2e742c4a317eb3c604877dfe6ceae49"],["/2020/12/20/beoplay/index.html","fc88b35f3fd34455bc47a7862ec7139d"],["/2020/12/20/订阅链接转换/index.html","4ca911ef5de14da0413cf65b91ced46c"],["/2020/12/21/chrome浏览器下载提速/index.html","828e27abe7c59a30d26948212c087c9b"],["/2020/12/21/免费128线程并发下载xdown/index.html","ca7945346e915eeb2228fc98087d3c87"],["/2020/12/21/免费32线程下载软件ndm/index.html","e5a381a720e5f5e01b72a5ba3869d60e"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","738c4e880c66c399119249a90a586a01"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","3a4a3ed8f09286e4de28e0a00247e08d"],["/2020/12/21/广告怎么知道我在想什么/index.html","7e90172d2e860903f4145a976f5cacf3"],["/2020/12/21/无名·引子（小说试写）/index.html","68fae0158941b94d7a1dbb052d5be87d"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","b8b703bcc916d04eb714f98be0f3a202"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","727555d6192d309549900c50d24e81ae"],["/2020/12/21/高速轻量下载器aria2/index.html","d5d43dfcd5f3078552b0139f80fcd3dc"],["/2020/12/22/2020-cee-roo/index.html","b2672f9ad7cdeeb836d7b37e2b8e1e3e"],["/2020/12/22/firefox插件、github、steam富强/index.html","63c63334b79beeda8841c58c0002a30e"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","1fee5bbe52a40cef1d634e8ad4725518"],["/2020/12/26/python-day-1/index.html","869d7648a9d3c8344b492e438ea323b3"],["/2020/12/26/python-day-2/index.html","29dde41cf889137bdebb423b51370f97"],["/2020/12/26/度盘不限速下载方式一赏/index.html","79724c134e5a427efd1b95c5280ccfc2"],["/2020/12/26/添加开机自启软件/index.html","ba60e20e350736f226272554d9633af0"],["/2020/12/26/电脑端截图方式一赏/index.html","47021c7634cfc16f06b9f166adca7b1b"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","fc2722ce9aad57099336f4fd61c8d8ee"],["/2020/12/27/最安全的浏览器tor/index.html","0ba999076f3ee9567e4e76a1ce9a19e8"],["/2020/12/27/网易云刷等级和听歌数量/index.html","f9470e1ea39afc8e99be6cbce14b29bb"],["/2020/12/28/freenom申请免费域名/index.html","2c208247ad5c49b7125a1d06e36b28b9"],["/2020/12/31/机场/index.html","8282b49d6cec7daa18348094b674389b"],["/2021/01/01/M1/index.html","a4b10b2ac13495d799fa051e1674ee4b"],["/2021/01/01/compress/index.html","34bcd3df63dacbf8d7575cb493143111"],["/2021/01/01/infinityfree/index.html","6c23efcb5268bf7428b12ec7706184fb"],["/2021/01/01/硬核翻墙/index.html","6352a2a46dec5867f863ddd5bcc8c5a0"],["/2021/01/02/qq/index.html","767eb241ecba19534c394a11bb82375f"],["/2021/01/03/netch/index.html","692177be27d051fc2ce42ca3ce470637"],["/2021/01/03/waifu2x/index.html","501c4ba3fe369dd4a16572b959b1d4e0"],["/2021/01/04/ads/index.html","d81e3d094b060c2ed0cfe3fde1e3c435"],["/2021/01/04/games/index.html","525e86bcba6d05af3cc994e5666e6e52"],["/2021/01/04/heroku/index.html","e1386e58355b2562ebedfc11e1c87d13"],["/2021/01/06/movies/index.html","c4613f6a6479cd458f69882074224277"],["/2021/01/07/google2020/index.html","0440b70db533af66958dd1ed6adf0a05"],["/2021/01/07/lucky/index.html","50b939413e44bb50c6431f671a0ab004"],["/2021/01/07/spotify/index.html","358eeea6fd7b2f5009711267fc1d7ea5"],["/2021/01/07/thunder/index.html","781705def87b97fae921591428375c04"],["/2021/01/08/adguardhome/index.html","4cf21a070a789152af615b1edef5e487"],["/2021/01/10/IBM/index.html","5cd338bb2f813c68b85d186e0a9c7624"],["/2021/01/10/potplayer/index.html","87b1145e7afaac56549d7ce98a2c3b3d"],["/2021/01/10/sakuraanime/index.html","e0ab4fd3f8ea325402d600211f915ccf"],["/2021/01/10/美剧星球/index.html","e4dd48d1a796cd4f9fe0dd0031960474"],["/2021/01/12/telegraph/index.html","6972fae238fab34ff8ccfaa1aa79b9b3"],["/2021/01/14/comics/index.html","bff352d7e732a83a6b3530bd27787575"],["/2021/01/14/ftp/index.html","a6c0263fbe6c26fb1df730da8484f342"],["/2021/01/14/oraclecloud/index.html","f5660fb62470f449a4d69aa528eb9360"],["/2021/01/14/porkbun/index.html","592f3fb0babc75d5548e3fc94c5242b0"],["/2021/01/14/powertoys/index.html","7214e0272b83b286d1ec666cfcfae90c"],["/2021/01/14/taptap/index.html","ab7d97f515c8f1e46c1a537b551d20ca"],["/2021/01/14/ubuntuvsftp/index.html","04fa9ca852f96de21e1baf57354c4e09"],["/2021/01/14/小说/index.html","7380ecc1180dc4abe7f73eba7023324f"],["/2021/01/15/freeproxies/index.html","7aab1ec9b525883dc016c70920c6f107"],["/2021/01/15/incaseformat/index.html","d00a924f9896b3e5ca5093435453af3a"],["/2021/01/16/euserv/index.html","afd6f58aec7bac2f33a66b8e881af0dc"],["/2021/01/16/winxray/index.html","a2c39ff5fab2b8df39616ffbb70aad98"],["/2021/01/18/qqreadhistory/index.html","63400a99c869b46a8e8089dc2a656c01"],["/2021/01/18/qqrevoke/index.html","a511f76b337d6a3467cab35f1be1bdff"],["/2021/01/19/freevpn/index.html","6478cff37858770550a89c9bff637117"],["/2021/01/20/browsertrack/index.html","45ba8599d768cdebd9e16249052a9adf"],["/2021/01/20/v2ui/index.html","6222b18e8741f882efd11ac32f6bc382"],["/2021/01/21/failedtoconnect/index.html","d9fe2064980eefafed74d3dac591d32f"],["/2021/01/21/gitcalendar/index.html","6bd09fdfb3f7151b1ed7d96739f064a8"],["/2021/01/21/markdownformat/index.html","3a8aeed8606d1a2e61dbae2ccac23dfa"],["/2021/01/21/markdowntable/index.html","1d9ae7bed3366e597ee0692bc8c36194"],["/2021/01/21/vercel/index.html","e0acfc9e41cbf6cc962596e177708e91"],["/2021/01/22/hardware/index.html","e02efdd11e90800548208ca13b94c022"],["/2021/01/22/muviz/index.html","e042fda2d87a60c8a790fc50ccce6c5e"],["/2021/01/22/randomapi/index.html","0f035e06b6f44fbb213b0bcec933b05f"],["/2021/01/22/searchimages/index.html","4c596644cee71181fe926e8e4623f051"],["/2021/01/23/RX文件管理器/index.html","0fa59630b79170aa595e65421725fb63"],["/2021/01/23/chromeflag/index.html","ba3e5105975b7cc23c377fb5ba724f98"],["/2021/01/23/qttabbar/index.html","6ee4f4ebd69e7d21d82bb14b41018b02"],["/2021/01/24/githubspeedup/index.html","25a8399ab8b15a081ccc8aa46b44aaaa"],["/2021/01/24/jsdelivr/index.html","dc13d877bf1919c54b6cb89ff4dc900e"],["/2021/01/25/note/index.html","7c912dac1456de332e50d333a8df0951"],["/2021/01/25/soul/index.html","fc254c6874749a539ac47386030805dc"],["/2021/01/26/herokuxray/index.html","0d6d73f7ac4836160ec7d15826484913"],["/2021/01/27/proxypool/index.html","a87a5a8aaacdde1a42e9cd9994913e0b"],["/2021/01/27/tracker/index.html","45df7d21fd6f027fd88a889b4f1a3f03"],["/2021/01/30/pandownphp/index.html","a225f5d7dfba4526099446278e19639b"],["/2021/01/31/newgroup/index.html","2c6582ed374a92c3abea0d54990a7994"],["/2021/02/01/clashlanguage/index.html","644c5c944e05a0580a41a2a833c74c40"],["/2021/02/01/encrypt/index.html","0c25cdb957fb5dcdf39221f0fbbe5444"],["/2021/02/01/footermotion/index.html","07c67095c3a60a1135a584f341a0b123"],["/2021/02/01/gitter/index.html","a3a139f4b487894e98b0114db573be0d"],["/2021/02/01/pixivtop50/index.html","2c4f60e5adecda25ed5b55f392084d7f"],["/2021/02/01/scrollbar/index.html","e32b3dd5913e8147e2c5da8c86908e6f"],["/2021/02/02/clover/index.html","02a7a99bb7b89ccd7faf25d8822a44cd"],["/2021/02/02/maya/index.html","e2783a5cf27034e317e31695fa5ad03b"],["/2021/02/02/speedcontroller/index.html","ccf1ca855986ee05842ba58851cd9df5"],["/2021/02/02/yesmusicplayer/index.html","4dd5b4a57f637b4f1da1b3a57b230c21"],["/2021/02/03/lenovoonelite/index.html","02f5d0272034d21d4fcc7eaa6a50c79f"],["/2021/02/03/skipads/index.html","25d241dfd1aac2c98bde3f3099239fab"],["/2021/02/04/picseed/index.html","df3ebf6b51ee03e34ab7ea7d9da1e7ae"],["/2021/02/04/renren/index.html","f55ac84f50eca6faa08d5322e60dc6a8"],["/2021/02/04/serverstress/index.html","6fb3ef56e7d8a7a06840201b49a540c8"],["/2021/02/04/wikipediazh/index.html","a3749ef65d0cd1210064ed082b2d5fc6"],["/2021/02/05/googlevoice/index.html","32eea80d15fa32c5f3b1e88625106b58"],["/2021/02/06/clashconnection/index.html","10c0480e7fac797dbfc5d5913dbc34a5"],["/2021/02/06/gvtransfer/index.html","2f2a2c9cf3f874ad8cae391cc31b9ce6"],["/2021/02/06/todesk/index.html","b3af9e4964941f87dc2fd473e5141ce9"],["/2021/02/06/vpnblacklist/index.html","a20de9b17f983a50fe8ab9a96db1473a"],["/2021/02/07/mklink/index.html","e30f0c5dbab27370b725d2f68a0157b2"],["/2021/02/07/speedtest/index.html","079cd135f3735d9abedcc2fafff01004"],["/2021/02/07/translate/index.html","4e15f1e4e65f3ac829a50d97e5111be3"],["/2021/02/08/ewomail/index.html","bfb6c98b3b47e79ec92047167b9b9577"],["/2021/02/10/officee5/index.html","1aceafd8289f859b11216001b854d3e5"],["/2021/02/10/raidrive/index.html","575895950d0a691e53dbc15994648117"],["/2021/02/13/e5sub/index.html","bc208830e256217d8761a24f8330ccdd"],["/2021/02/14/screen/index.html","7e0f9b229f4b12b6120d9243deb73d52"],["/2021/02/15/clashtun/index.html","a904fbdaaa778feda4619163e08e7182"],["/2021/02/15/messageboom/index.html","cd95c73e88e7b6fa6e9ed9b9ac055bf4"],["/2021/02/15/oneindex/index.html","9cd651295f344de7590285b0547449c8"],["/2021/02/16/govsites/index.html","87b1ea9b93ac5d780d1bdf43c705d8e2"],["/2021/02/17/hexototypecho/index.html","d79ae76feef68fcfc5b02a9f6fb82f47"],["/2021/02/19/fiddler/index.html","84937e07209ed1441cebd39cde0e5bfc"],["/2021/02/22/potplayerset/index.html","d8081b1c47138764d60a68665ae0228c"],["/2021/02/22/studyresource/index.html","551e7e248ff7b0fc5aa6c351c66a621b"],["/2021/02/22/telegram/index.html","161f76d2995b099008ae0e8176f6c36e"],["/2021/02/22/videos/index.html","77edb82c97a98f1ef9fcf1c86156ad69"],["/2021/02/24/mtproxy/index.html","e20d9247e5db626e77259fcbafbe2ea2"],["/2021/03/10/catchcat/index.html","a266c487bb420985b80249a4570d6a2a"],["/2021/03/10/neteasemusic/index.html","9341a6bf492f89edf7f05d457e1aa549"],["/2021/03/10/surfboard/index.html","38b31b91b939ff440a1ba6bde83598d2"],["/2021/03/11/vpnandjc/index.html","e50f3fd44017672515247ae433fa5a5d"],["/2021/03/12/qrcodes/index.html","a0727673a76b61743c67d0c3335bd5dd"],["/2021/03/20/qv2ray/index.html","48826128a81cc2da012e3b47daf79213"],["/2021/03/22/freevps/index.html","e8b49d4d8a2ba7018b4cfe652bbb1628"],["/2021/03/24/tgstickers/index.html","3f5f20001457259210a920b189120127"],["/2021/03/25/clashx/index.html","4080da85e56de8a9777060f1212ef261"],["/2021/03/26/bingwallpaper/index.html","05d45f727de95fd2a9878881c75cde70"],["/2021/04/03/soutu/index.html","9052f7063b3accec05d3fd433b8fbeed"],["/2021/04/03/tiyunti/index.html","7b7e24ee2ab4875823d3d99329cc9e34"],["/2021/04/04/btpanel/index.html","6cfecbc6e0b4ed8a7a7cbdb7ae8df213"],["/404.html","2808ad763b3f5ab53caa6c7e1e90189f"],["/archives/2020/11/index.html","5d6906d3e6565dcd3d0bb10f1e93e864"],["/archives/2020/12/index.html","7b0bae987bce4d9edaa95860991d1b09"],["/archives/2020/12/page/2/index.html","1e1d7f551ed326061991715b5e38bf62"],["/archives/2020/12/page/3/index.html","e4cb8e6c56eb0b1c18a9b0cc8a84fa54"],["/archives/2020/index.html","1a6a991882fced68aacf769f420c9b60"],["/archives/2020/page/2/index.html","3ebd8c6a0d7a730a6cba1e60ad7c670d"],["/archives/2020/page/3/index.html","5069f2f78b22010a4aa07b4fb63b4fdd"],["/archives/2021/01/index.html","54521481a2d4ce8628f925c13a88d025"],["/archives/2021/01/page/2/index.html","b96c0e04b458e91c9bb9fdb718b221c0"],["/archives/2021/01/page/3/index.html","7ecb31174fbc95464d8e368ecf8b4076"],["/archives/2021/01/page/4/index.html","bbc029fe018a8756c319672c3909a7eb"],["/archives/2021/02/index.html","5aa30cd9a9b5c2d165a9b7d9a7a2f0a7"],["/archives/2021/02/page/2/index.html","ccb53a35d381acf486603a10855d5e74"],["/archives/2021/02/page/3/index.html","9c5c2aa451b7e9019711be3554cf73d7"],["/archives/2021/03/index.html","02f5d5bd98943ff93d2350b4c8fbb9cc"],["/archives/2021/04/index.html","38764b396eedae1876737916ce8e3c80"],["/archives/2021/index.html","0bf015c13b78ae954e96cd77f8120372"],["/archives/2021/page/2/index.html","f10687a9036639269ba6f3e7f0dda6a5"],["/archives/2021/page/3/index.html","b186613ed0ad2fc41ed87c0cb07f2548"],["/archives/2021/page/4/index.html","5312817c249950d1fd80f8b4394dedd3"],["/archives/2021/page/5/index.html","1bac0aae1d54aa2bca29c4baab94cc91"],["/archives/2021/page/6/index.html","942918e65da16bde2dba1e35c1af349d"],["/archives/2021/page/7/index.html","da5f76ec853bc40ccb8adbe3cb5cf2e8"],["/archives/2021/page/8/index.html","dd2791fe23d8b6af24a606604471ec83"],["/archives/index.html","08f4b5904a12deeb2c6eb69c26719b85"],["/archives/page/10/index.html","d072225c9edb3b1bd69da894b3a16eef"],["/archives/page/2/index.html","7746f1f3fc08220bcef6218a2b665547"],["/archives/page/3/index.html","0e0104d033edc286d35cb46d8980e1a5"],["/archives/page/4/index.html","8b76d93f17614196f8ecc652df7bab86"],["/archives/page/5/index.html","812c705540a665dd37a356d5f42fad56"],["/archives/page/6/index.html","a825012e0d31645c9368cb70cc952af5"],["/archives/page/7/index.html","43cf3821627ad8c0732e1f4bb2d59257"],["/archives/page/8/index.html","3dc3e124682454d62ed2d7033682fce6"],["/archives/page/9/index.html","02c961aeda630615ebf90796fcd0b440"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","b74bf320e522b1fd437d7e03efd495fa"],["/categories/index.html","29a552e90b7647c52d9bd6a4470594c3"],["/categories/下载/index.html","bb9850794112937f222ca9c9b06b248d"],["/categories/安全/index.html","6fd1bdd58077ee24aecc1238e655b2a8"],["/categories/建站/index.html","6aef562e081ac8f352d8417347ec8a29"],["/categories/机场测评/index.html","a4a30e2880222757a37ca2eb8b483ec5"],["/categories/杂/index.html","92bc3b5c1ceaf8e20f0ef7e0e08b6197"],["/categories/杂/page/2/index.html","6da05ae27fc806d16c02c0a6cbd97608"],["/categories/测评/index.html","c7ae1c9d06833327c562b1164ff7ee1d"],["/categories/科学上网/index.html","1f52be2e45eb0ad5be27245c457355d2"],["/categories/科学上网/page/2/index.html","d66bf491aeaa786815323817f74505dd"],["/categories/编程/index.html","dfc0ae0a5610d49483148d4e50c9f1e5"],["/categories/网站/index.html","2392b8ca18881347aebf02e378b0392b"],["/categories/网站/page/2/index.html","0ef868ff52b8795f572ff83ebb84fb88"],["/categories/软件/index.html","b1202b4bdae529e71977721655f583f8"],["/categories/软件/page/2/index.html","2e8045cf2eb66e9a44fdffc9ff46964d"],["/categories/软件/page/3/index.html","1b02eb464add57bc0fa593b7858ccafc"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","e775f8c55a7e6637d139fc32e2f08d2b"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","f3c0c90b40df197f663aa3300aa770fb"],["/ios/index.html","d4428e8a157d6718b5288b0fb13833b8"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","c08e561f8647819c7ecf384b37c435a0"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","cb892732b33807e2162ae42696c8d8b5"],["/page/2/index.html","9a4ce912b8179985682ea3cb8089b60b"],["/page/3/index.html","8410bb6874b757e66b3abdb5a791e4df"],["/page/4/index.html","9f783171007be0748222e76b881d757d"],["/page/5/index.html","a229b33f2527c766f5164301273db440"],["/page/6/index.html","5abaefd1571d75b177673a8b07feae5d"],["/page/7/index.html","7e114bd806c103cef3138becbf7c696d"],["/page/8/index.html","56506ea85050032da485d0ec1caaac41"],["/page/9/index.html","368f0bc471044c550bf86caedca7c2dc"],["/payment/index.html","bcafe9b9ffdc505c35ab5e40935184dc"],["/privacy-policy/index.html","13719efade43b4bc4ae57efc25fc53c6"],["/rss2.xml","f189524da8d21610325c43950c7f738d"],["/search.xml","c8356e45c230736daa5725381dcb31d9"],["/sitemap.xml","80d7728c3a65e32210451f65b6c81931"],["/sw-register.js","db5deefa9e5cf5ab1676203160dce9ae"],["/tags/5t/index.html","970f48c8a3b94f41696ab4fb2afd2002"],["/tags/Bing/index.html","af59d5757b6adcb78f6b009f22057287"],["/tags/Clash/index.html","56c3e3a2c16ab16dfc3842af88f9074e"],["/tags/Clover/index.html","a7049430315949c16aaf19f16f887dff"],["/tags/E5/index.html","d4909d2344832c8ccf8094d2bebc6f96"],["/tags/FTP/index.html","59fa3525d83407f6668ae90c32248050"],["/tags/GitHub/index.html","1fa036168083778656f522ce7eeaae3f"],["/tags/Heroku/index.html","0558d9721b63b08277488cbbff23d2b2"],["/tags/Hexo/index.html","a72b7a290d4d7907b731eef5c6873612"],["/tags/Lenovo/index.html","b003c5af5dd000f8bec1d073872b9711"],["/tags/Oneindex/index.html","c9a67981f4dac234ca09bc73285e6ef5"],["/tags/QQ/index.html","38f261f018c22721d8d4e5f63db93461"],["/tags/QTTabbar/index.html","14b6c89413d2fae4eb1e5ecda489e86b"],["/tags/RX文件管理器/index.html","a776ae6c24bdbfdb0b65990cd1442b69"],["/tags/Todesk/index.html","4ea941f86037982b1a3913fa56f68ee5"],["/tags/Vercel/index.html","a21d8b9bdcb71ff5da1ee8ab379ce98a"],["/tags/ads/index.html","e0553d5a19c393bcffaaae2c6cad138d"],["/tags/api/index.html","0fe49f68396de3885521ec4c98d79a1c"],["/tags/app/index.html","d115d9a69887e9b8c987266f42c59b1d"],["/tags/blacklist/index.html","9d879c54afc0d89dbc0618a50614d1e7"],["/tags/butterfly/index.html","9b1ceb95f0f13621cd5d07830fe66a3a"],["/tags/chrome/index.html","604e0c06194836ce1632c6e0a29b64f4"],["/tags/clashx/index.html","854170d386ccd3b1353ca821ffc3eb1b"],["/tags/cloudflare/index.html","8578d584f426edc0fab291a42637bfd2"],["/tags/cmd/index.html","b973652ac2f390066d17c376af1d9044"],["/tags/c盘/index.html","0093977c5439867c42a2ac0db14c7aef"],["/tags/email/index.html","dd4873687071332134be1e2d03bedc97"],["/tags/ewomail/index.html","9bcfc3d3d62abe46a5645008ca231a2c"],["/tags/fiddler/index.html","9c19bad15772a045e0de27b0181f6fea"],["/tags/flags/index.html","466766e8ac0e69a8ab5068f951964c2d"],["/tags/footer，页脚/index.html","83f693fbe576422d3f46dbbd30ab6b87"],["/tags/galgame/index.html","910231809a85968dd65574ad28d52bc6"],["/tags/git/index.html","6a13185a329db6bbae509a654ba6ba42"],["/tags/gitcalendar/index.html","489982e271f9e7c81d65645f9853790e"],["/tags/google-voice/index.html","37190dd4e7eede665a1f4c1142ba9e0b"],["/tags/gv/index.html","cf32b0c49345d333e736e128a0b326da"],["/tags/html/index.html","4303324a8aff7e3ccbe854d69eee61ed"],["/tags/index-1.html","8fbcc0a6db815412d18ca8c19bf59afd"],["/tags/index.html","0390e13091c964fbb076b211f3b44975"],["/tags/js/index.html","49927b03bd895de1aa5d360c8b931a0b"],["/tags/jsdelivr/index.html","072bf0d08246fc2432e8bfda9111406b"],["/tags/linux/index.html","54f393ddf0ce4462fe23ac6610a800cf"],["/tags/macos/index.html","ae037278aadbe67419a8c79119210b0e"],["/tags/madVR/index.html","61ba34ca4069193dd928c5e6695d28f9"],["/tags/markdown/index.html","e427de4ee7e0d8c5b24f1ccd6233bd7f"],["/tags/maya/index.html","c58f713e015876cf76df6c02f2f10c21"],["/tags/mklink/index.html","63857e97ad3081e6587fe05d3474cc79"],["/tags/office-e5/index.html","b6d26191de68934a3bb46784399759de"],["/tags/onedrive/index.html","80852208ed9a5b4f57440b9e3bf7df08"],["/tags/picGO/index.html","9d8117d03ba44543cd01a5db18910045"],["/tags/pixiv/index.html","45716e23d68a9585bffdce57f704db61"],["/tags/potplayer/index.html","acc4aba43c57bfa4f4416e0a7bede806"],["/tags/proxypool/index.html","b09d336aa245f56bafa163eeb8e62b36"],["/tags/qbitorrent/index.html","cba2bb0fedd18fef4b57723e51e4c33a"],["/tags/raidrive/index.html","bd50b807a5b21e0493340a472eaa6f15"],["/tags/screen/index.html","c6230e5f71992a20245ade0540947b0b"],["/tags/speedtest/index.html","12cd3232b1c1335328d6f7044203de13"],["/tags/ss/index.html","4a40a71f0f1e304da9666b7f22dbe621"],["/tags/ssr/index.html","b6a6bacb9217487c2bd1c8583cfbd949"],["/tags/stickers/index.html","f2323540183cab76d5d033718b7396c5"],["/tags/surfboard/index.html","eccdbc9fa8660a50cb6ef741cc67aead"],["/tags/tap/index.html","420470d7e10bf1241a56d5c15419d305"],["/tags/telegram/index.html","08f721774eaf8f36fa4ea6b4f06f8243"],["/tags/telegram代理/index.html","00fada82c19f87b57108205a20cf1919"],["/tags/tg/index.html","ffe461fb234092f3a752965749b0bee3"],["/tags/tg代理/index.html","0f59b4a4343b755e63b3088831e933b9"],["/tags/top50/index.html","596cbe0507dece01ed1e9b5620427164"],["/tags/tracker/index.html","b66ee5dfac0ba72c53662e98b341fd7f"],["/tags/translate/index.html","11995d124a76e0cd4541f9fc11f0741d"],["/tags/translater/index.html","c9df4a4dcec92749e1180d9ebc80a788"],["/tags/tun/index.html","0a1a286e82bada44420b6e2db3134ae3"],["/tags/typecho/index.html","6559e185092f853a48f7aba115fee6fc"],["/tags/v2ray/index.html","edc22694300baf9af2545ac85c66ed4c"],["/tags/vpn/index.html","ef96b519ff1b4cf3d8f9ebe03cc2823f"],["/tags/vps/index.html","cd93e78eb407243a9375da1e4ac40417"],["/tags/wallpaper/index.html","e51363f6730776516084aa00e465563d"],["/tags/windows/index.html","ff6ad52086167f2a085ea53203903fee"],["/tags/windows端/index.html","dab45df492c7cfa01a83c828e6bcfde0"],["/tags/xray/index.html","a7036a5e48096144d65582b81791959f"],["/tags/yandex/index.html","5ff5e1d839e2ac6c59f8ad6f3952b115"],["/tags/下载/index.html","7ceee3c571c8f4f06105ec9991604984"],["/tags/不限速/index.html","a27fc0d445c355c81845719b2f065109"],["/tags/个人网盘/index.html","aab75e946f604c74ecf9e7631b6e7e32"],["/tags/主题/index.html","9dbee94257317e2ae3434e1fdaec8b59"],["/tags/二维码/index.html","90a3c2d609ed08f6cf4ddce7f6b8a934"],["/tags/云便签/index.html","b61141d28ac73e44f9ee18fbbc4d6744"],["/tags/云盘/index.html","67bf71c0e7a04808cca301e81fc5c816"],["/tags/人人/index.html","b52ba5ad46f2c4b860e434da345dce29"],["/tags/代理/index.html","2e01959611de69d1f19f34531f6ea02b"],["/tags/代码/index.html","e6c0ac6067345585c0675d51111c4b34"],["/tags/优选IP/index.html","3160d627c4a414a859778dc82cc09eca"],["/tags/便签/index.html","a696772a7c14dc775fcef4ac3c746acd"],["/tags/保号/index.html","b641d12a7b4aec731e2c5bfb255b26cc"],["/tags/免费/index.html","65bb1833bc7fc004f31bf777a64c8297"],["/tags/免费节点/index.html","6f689d8924fc37408deac6a25afa936e"],["/tags/冷门节点/index.html","0b9845d3ac68f1b0aef15a7566c5d507"],["/tags/删库塔/index.html","059e0f3a24cfcf1fccb0116de7c020c2"],["/tags/加密/index.html","e444e815c9778e0d15c52dd35c10707a"],["/tags/动画/index.html","6cf1d9f99f1702e49674fda381bff7b5"],["/tags/博客/index.html","e0d51a9a1e60e36b765947e951ff53cd"],["/tags/历史记录/index.html","51046a7bb9d1284977239e123090d74a"],["/tags/压力/index.html","772c2c6b569ca109573fc3f3c88d5e18"],["/tags/压缩包/index.html","2868fdb07bf70c6b8d32c591672104d7"],["/tags/反代/index.html","c8e93c4e2a6e6f4d1fc40251f6d30a04"],["/tags/可视化/index.html","80c2653c39c271248be0979ea4dfd7e1"],["/tags/命令/index.html","7fbcce1a2dda1b0a5d9192b1d1b6867d"],["/tags/国家/index.html","151e124dc3796c193f89c1d95d01f767"],["/tags/图床/index.html","92d8d43adef82bcea1c2ac7b2b36a5bc"],["/tags/图片/index.html","eb15230ca964e19ada340765b4c4e4d1"],["/tags/域名/index.html","86e6a6f5fde3831c3590abbeccd41bcd"],["/tags/壁纸/index.html","2057376a66477f4c92ea90a5dc69b2fd"],["/tags/多标签/index.html","b1fda8bf5ffac2e7c1a653da1ed70ce2"],["/tags/奈飞/index.html","8619785bd0c5b817e4b7e0600400fb90"],["/tags/存储/index.html","726fee6c477c5f87bc12bf034e2af990"],["/tags/学习/index.html","427fbf4c07e140757e88acce9f920d9e"],["/tags/安全/index.html","3b07ac488b77e32e51dd16c623ebf519"],["/tags/安卓/index.html","f0ac08a7761609872574a37db68a3557"],["/tags/宝塔/index.html","098a256083a8ec65f60949fdad9ba2fd"],["/tags/小游戏/index.html","8d29c174936ea2e2f89ae9dafc200cd6"],["/tags/广告/index.html","1cba5b81f53075f3e3cd45f776186a5b"],["/tags/建站/index.html","2f5e216466fe23a1d6e4edd093c4b2ad"],["/tags/影视/index.html","273173baa185f480ea0c964b4bd6cc89"],["/tags/微信/index.html","5cbc6a949b23631df8c31130105ec367"],["/tags/快速启动/index.html","4d359952269af7205cbed2b37822fb19"],["/tags/手机/index.html","7c7c327681ed49c784d9c43a0027a498"],["/tags/托管/index.html","fd777672efe601eed7292039b12ff6fa"],["/tags/抓包/index.html","dbfca16e787cf333b10da88674f5e938"],["/tags/抓取/index.html","e31460b5f72bd5ae096b927460dccbed"],["/tags/投屏/index.html","ef3b20365c70ac404f0f72e12ce3b8f0"],["/tags/拓展功能/index.html","888ca03d5bbe71641ac0116545d2d46b"],["/tags/挂载/index.html","8873a7c6ab39dcfcab1dcc0233f30ee1"],["/tags/指纹/index.html","423c3b4a3d9d002e7097283bf96249f8"],["/tags/接口/index.html","ceef2562ed5ce76836324048acb64155"],["/tags/提取图片/index.html","5e7f2bb5c73107f34ed388e23da7cebe"],["/tags/插件/index.html","8d48e8acfaca7703d9cf88d87518c066"],["/tags/搜图/index.html","86a40bf3b5aa11afdbb09ca00fb28f0a"],["/tags/搭建/index.html","5d1781c6556e1c53b242d3600df9436b"],["/tags/撤回/index.html","63c90b38d5f67f723c42d2c1cad52fe0"],["/tags/播放器/index.html","84a1c71e46d2749d2f371c0bb1ab6e34"],["/tags/支付宝/index.html","8e33f494032929139221a2671c224511"],["/tags/政府网站/index.html","92c2ed34afaef319ca31427995860c0e"],["/tags/效率/index.html","0e79c6a592d36eea52c684004cb1bd0a"],["/tags/日历/index.html","0114bd0472937db52ceefc6a9eb90da5"],["/tags/服务器/index.html","283329c71719ffd3fa97fae474f41e08"],["/tags/机场/index.html","dd14232b42fa56098ab7d96ec3163436"],["/tags/桌面/index.html","25e1644910f46303e3f258dc82662503"],["/tags/梯子/index.html","712c3755d6e52beef73b507132566495"],["/tags/检测工具/index.html","d9745c2bfaf4a76449049030405deaf0"],["/tags/汉化/index.html","8f6eb2a20a9336ebf261d14b1c31e7cf"],["/tags/测压/index.html","6dd6b9a0781ff7e73788e3f4eac2ae75"],["/tags/测速/index.html","6c80d781cf2cc65a85fa0cd673368e5c"],["/tags/浏览器/index.html","b58ec2b203692e6ee8e30088a7cc923f"],["/tags/清理/index.html","f9d06d7ce70f936e7fb53094fa3f80fe"],["/tags/滚动条/index.html","9f287ee54477aca295874b8f1a62b35f"],["/tags/灰色歌曲/index.html","9fc6a78b783500b6a34a54b2c325bdb2"],["/tags/电影/index.html","5d087ebb4716bb1cbdeab396f282eb5b"],["/tags/电视剧/index.html","688ce0045a7b12e50a04c754c9285dd7"],["/tags/白嫖/index.html","8be7d219926e7a40b6fbbd5b21060adf"],["/tags/百度/index.html","a67cb325bfbaf727ad88987e210781c5"],["/tags/百度云盘/index.html","fb846cc200e50bc844a4b3eac94ddb88"],["/tags/百科/index.html","02c52d6dae20bf9d456ae2866c9d75c3"],["/tags/短信/index.html","263ea249e820dfee88844b38eea11857"],["/tags/硬件/index.html","835d16f183efb8331a0460d51fa3a286"],["/tags/科学上网/index.html","f72b7034b1f2e1fc6b32c086c4da2532"],["/tags/空间/index.html","5f38a4b9dd39135c8c69f76fc0ebe3c6"],["/tags/笔记/index.html","d7ef472d619fb45231a5a878bb954836"],["/tags/简洁/index.html","f0307306adbf3d8de653715e1bec99f2"],["/tags/简约/index.html","7b84487fa92ad92e23930290b55fbbb9"],["/tags/维基/index.html","c2ee37f8eeb5158803321c50dd77640b"],["/tags/网易云/index.html","2a6a8bb60cc201f60477721f7d878b2a"],["/tags/网盘/index.html","2b7f2c59f5015b050b043d67f81535e5"],["/tags/网站/index.html","fc24d84e83a10b79f284edc02bb228a6"],["/tags/网络/index.html","4c153b90df880583967e3394031d4ad4"],["/tags/美化/index.html","eb61ae1ce6646f95b6ee7af3bc29b0a3"],["/tags/翻墙/index.html","d037052b1e1efb330f418ddd5a2cfbd8"],["/tags/翻译/index.html","f4464019326d06bb1306fc139a9e7320"],["/tags/翻译器/index.html","e812f40c2170ce5a875f3841803890a4"],["/tags/聊天/index.html","9e810d0a14d00561daadac074b67e878"],["/tags/聊天室/index.html","566d0f0b4e9a20fe04dac7fba8258b32"],["/tags/联想/index.html","b2efafc02607466f860a7845fe4e01eb"],["/tags/节点/index.html","0e2093a4d850c0b8e1f81d642e3b98a1"],["/tags/虚拟手机号/index.html","82cbe8483af1b7ab2e4af40777623bb5"],["/tags/补丁/index.html","79c2d98fe6e25f95ca2a357f1326a48f"],["/tags/表情包/index.html","8c5469439141709528dc8cdbcc17853a"],["/tags/视频/index.html","5052159845c6c279a66147b48eb74bb6"],["/tags/解析/index.html","c66d01142a62bbef2755e548798593ae"],["/tags/订阅链接/index.html","57e097a82189be7215d7fc4520791029"],["/tags/记录/index.html","7a9bc70c06e932f24a24dbfc43f67352"],["/tags/识图/index.html","7dbdbeb3bdc28b8697e408041289c879"],["/tags/语言/index.html","3599a8b172d34854858d569c8b6282d2"],["/tags/资源/index.html","9d149c8b3b3e69d3f29700bf1f675339"],["/tags/资源管理器/index.html","17005723502305feef98a8ca167d24c6"],["/tags/转移/index.html","fd15d59327fb17d664c64ca71e752c91"],["/tags/软件/index.html","7fe0a92b9a5c801ce91ac2f87d2cd677"],["/tags/轰炸/index.html","3c5ae4b84206b342925a114e8de11248"],["/tags/迁移/index.html","1e0f880bbe7fcac57cea163cebd588c3"],["/tags/远程控制/index.html","4ae5b41c752cc6c3f1e84160b7fa1814"],["/tags/连接/index.html","7590b328dfd0234ba6c743144cedc698"],["/tags/追踪/index.html","fe993028b078bcb6678718ce98f19a87"],["/tags/速度/index.html","1c3baafa5dddf797b8de1985c23b8e59"],["/tags/邮箱/index.html","bcb23a4f1a1461e0cb2e220d67153422"],["/tags/酷炫/index.html","58680bde7f92f7752d44aec5c2b072da"],["/tags/钓鱼/index.html","1f2e38d2624e25866454ee5aecb93b7d"],["/tags/镜像/index.html","00c676d24348f897ea7a2c9acdc27a18"],["/tags/随机/index.html","61bf1d3444c67e338a10c668d8de7f5e"],["/tags/隐藏/index.html","6ff50d5fcc8edb87110a7103bc78a976"],["/tags/面板/index.html","986b54f7e7fc880c59eb87bd8c3133cd"],["/tags/音乐/index.html","12bbcbe4f0d4006b0ff4846b58b65dc0"],["/tags/高颜值/index.html","2857eb0e0c22686e23e7597f8ba3e8d7"],["/tags/魔改/index.html","6f6339751e52e4f71c6646f250f44237"],["/tags/黑名单/index.html","93c49436126dbb7cb57770cdf14d377f"],["/urls/index.html","ee8f5fdd8d88cee86aa433a08ef1a87e"],["/vps/index.html","ef6ecfa3410e3790a144c338b22b5c38"],["/支持/index.html","cf19001fb1c048ebba6fa3f84fb03130"]];
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
