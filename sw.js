/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","d70b726d13dd83e61cf8a688c15bd972"],["/2020/11/29/clash-windows/index.html","16c18cf45822777275075fe5f6e47127"],["/2020/11/30/websites2/index.html","28885c1c4ec11b55749de9155e95dec6"],["/2020/12/04/iphone4s/index.html","2e409fede23c12fc90603e773cb38e74"],["/2020/12/04/onenote/index.html","7d12ced9cd10d3a7fbfc535f211bc0e2"],["/2020/12/04/wesites1/index.html","da64b5204ccc091b3d04f3ffaa0478da"],["/2020/12/06/nokia808/index.html","194aa3f905f6e29d7d12e7afd91805db"],["/2020/12/07/ipad1/index.html","6fc718b9cd23f5e30f0a8d6c105a462f"],["/2020/12/18/freesubscribes/index.html","5c85139dd9fcdcf631c8f8b1e2a816a5"],["/2020/12/19/musics/index.html","9470b751ddfb6a7329e76de7e581e30e"],["/2020/12/19/shadowrocket/index.html","e546c89d992728789213299ba66594f1"],["/2020/12/19/v2ray-windows/index.html","5c759290d52d6921f2a3e554900fbd7c"],["/2020/12/19/v2rayng/index.html","113d5aaa8ee1643893b3162cc70b4102"],["/2020/12/20/beoplay/index.html","f5fbbe01e2b67ec46b9371eb858e6528"],["/2020/12/20/订阅链接转换/index.html","6749533c8c16d4e760520157007ed7c5"],["/2020/12/21/chrome浏览器下载提速/index.html","528ece7369a64f090883d6ffac70d25d"],["/2020/12/21/免费128线程并发下载xdown/index.html","eee120137f9bdf07a981fa2bff48e435"],["/2020/12/21/免费32线程下载软件ndm/index.html","8f692d113f065ff8c6b33676c17f03a7"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","1a1a6bcc8088402f04100a96a2ece689"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","33b1a8e0a534baec7301f6bd80afa5a4"],["/2020/12/21/广告怎么知道我在想什么/index.html","a7eb9fe61b4c09401052ea1294743f52"],["/2020/12/21/无名·引子（小说试写）/index.html","b5c239d014630a1458cf2596731349d3"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","4382d8700c9959f0bbae31f47eefb7bf"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","4ad41fac3cab0d42e9ec202720c3b81c"],["/2020/12/21/高速轻量下载器aria2/index.html","2322f5f03291e8485bd26edf81f1d247"],["/2020/12/22/2020-cee-roo/index.html","9d5faeae52fa3a7a3214e737419d9261"],["/2020/12/22/firefox插件、github、steam富强/index.html","8ba862b3bdafa4159971c01fc2580f47"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","1f2e8fab68346fb0963a1c05725dc0f6"],["/2020/12/26/python-day-1/index.html","22960caacddc7924cc9f8d73f453146a"],["/2020/12/26/python-day-2/index.html","26719903b449620a015d4d1e2a71ec5f"],["/2020/12/26/度盘不限速下载方式一赏/index.html","4f980cabf9eb520d1f25551c7cdca410"],["/2020/12/26/添加开机自启软件/index.html","32cce86b5aeb0dda07477c896b22bf58"],["/2020/12/26/电脑端截图方式一赏/index.html","d81f7384594879b9e6d8aff747bbb3a9"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","95821154e2cee84820fd32ae7049811d"],["/2020/12/27/最安全的浏览器tor/index.html","7106472fca3cd6d59bac6d40a6a58071"],["/2020/12/27/网易云刷等级和听歌数量/index.html","c2e187f33c400435422812e74d49a948"],["/2020/12/28/freenom申请免费域名/index.html","0cde17f17f84c6ed2651482d81f5ccc5"],["/2020/12/31/机场/index.html","75b2b304964c54e224f2eb3a3cc8c9ef"],["/2021/01/01/M1/index.html","8fbf1df4545f6f810e6dbd52b2d07a3f"],["/2021/01/01/compress/index.html","eb75d2cc15d3e23ac37137c32c4a4a02"],["/2021/01/01/infinityfree/index.html","94ba1f253584128739f36cadd830cc01"],["/2021/01/01/硬核翻墙/index.html","a4b51c829ead2d4382039779f5e035e0"],["/2021/01/02/qq/index.html","e1ae6299788f1b91804e0c8e41ff0af1"],["/2021/01/03/netch/index.html","920b3246f3a20cf2f059656ccf1b3e8e"],["/2021/01/03/waifu2x/index.html","1d1a64d8d23fc6b98738dd068a5920db"],["/2021/01/04/ads/index.html","ab1a535e0171b8266290c781c3f632e8"],["/2021/01/04/games/index.html","95ffbbe84c02940357ae4dd4899c0ea4"],["/2021/01/04/heroku/index.html","45a2fcebdfe32f521da35918788e35f7"],["/2021/01/06/movies/index.html","1137dd3b9a501b2f7bb0b6813ef2430e"],["/2021/01/07/google2020/index.html","8932212b6b2a5c307243401ead21f3ae"],["/2021/01/07/lucky/index.html","a56bdc84e5734ded2b129c4306112b8c"],["/2021/01/07/spotify/index.html","20ea42edc2b10c56844a97b78d4c4fbc"],["/2021/01/07/thunder/index.html","8e58214c441a32c5c2ef9cafa44d9e03"],["/2021/01/08/adguardhome/index.html","046d56b7a38bb4682903d3cba30915f1"],["/2021/01/10/IBM/index.html","e4a17c28646f9ee1fb4314e93c6a24aa"],["/2021/01/10/potplayer/index.html","3f899c5d4d90335d4a077f46e65bc790"],["/2021/01/10/sakuraanime/index.html","769de4dfe8add3e3c14842c0612750e3"],["/2021/01/10/美剧星球/index.html","ad652a0e4fedf0950932dcaf52b1f520"],["/2021/01/12/telegraph/index.html","a02849bb20e5de30e6d497f767d32c8f"],["/2021/01/14/comics/index.html","02ac7cc01b5669111b53707b842a5274"],["/2021/01/14/ftp/index.html","27e7cd9ab5456f1421562f6803c35a75"],["/2021/01/14/oraclecloud/index.html","da555efe4677c8f0388ca2b2f37beed0"],["/2021/01/14/porkbun/index.html","a51699caa89acf12e32f1ee1c5e46a5d"],["/2021/01/14/powertoys/index.html","29eadfe1e2338c94c5543e3988eca329"],["/2021/01/14/taptap/index.html","a17c5be53a2251bbf1c28c989e6be223"],["/2021/01/14/ubuntuvsftp/index.html","13b1a144b50715af71fc3c05d28bf31c"],["/2021/01/14/小说/index.html","73e2bed37dbca84561b09efcef8f7024"],["/2021/01/15/freeproxies/index.html","f992f060ef10e683cee6e82441dc2dbf"],["/2021/01/15/incaseformat/index.html","e5a0e7a2caa4b2db4c515d7302a744fd"],["/2021/01/16/euserv/index.html","906a8fc064b4e4df5aaefd9088daaead"],["/2021/01/16/winxray/index.html","3b3dbd10d6eebd8e9389c2c9c47b65d7"],["/2021/01/18/qqreadhistory/index.html","5056851d197324630b79652c030b449b"],["/2021/01/18/qqrevoke/index.html","49e3eda1fc7627e1ad9fbe28b11be521"],["/2021/01/19/freevpn/index.html","de3676e96d5ead445d4f3ed91761dae9"],["/2021/01/20/browsertrack/index.html","05dc55854bdd0bba77017996e9ae6b0c"],["/2021/01/20/v2ui/index.html","3dbeab69f4ac617aaeef87bfa407f309"],["/2021/01/21/failedtoconnect/index.html","b435ec77d364fda7c9e8dbe5874da627"],["/2021/01/21/gitcalendar/index.html","01bfadf66fe4584614136e32de35064e"],["/2021/01/21/markdownformat/index.html","ae29bb0a172f7cf4e396e8749f1b8794"],["/2021/01/21/markdowntable/index.html","3e04b902c0b4c29312e081d5d54482ef"],["/2021/01/21/vercel/index.html","0e3156cf7638c6f44b35ffe9e4c43d53"],["/2021/01/22/hardware/index.html","bb5c5d40cc5749bdb21e9ed2d545b6b6"],["/2021/01/22/muviz/index.html","15fd5427c387d7ba7b85ef6af4526b58"],["/2021/01/22/randomapi/index.html","6ca1cc21e45e03508c7f2583be1cee16"],["/2021/01/22/searchimages/index.html","002e7562fdf9d9f15573af598892493e"],["/2021/01/23/RX文件管理器/index.html","66a65decc178196e96a6afd697db878d"],["/2021/01/23/chromeflag/index.html","bfa8b374de9a48c2ab11b850fe24d18d"],["/2021/01/23/qttabbar/index.html","0b1b47a8318c325dac55def8603a9a98"],["/2021/01/24/githubspeedup/index.html","37585a1a66f1612c17a7bff242a610d9"],["/2021/01/24/jsdelivr/index.html","71bd71353bab50b9b0bce0df6c33c458"],["/2021/01/25/note/index.html","5e1017c6aa86a54b5333e8e336838cc7"],["/2021/01/25/soul/index.html","d4240d24385fb0ba04a32eeb26cc95f3"],["/2021/01/26/herokuxray/index.html","2d5acc97975e924b3e312814b525d9ec"],["/2021/01/27/proxypool/index.html","ef360897c96bd106ccf17f070a1facb6"],["/2021/01/27/tracker/index.html","bf5fff6d1a3fd20a771775752b3a5fe8"],["/2021/01/30/pandownphp/index.html","5e4a998ce12c1b4beb24ba2d0a048340"],["/2021/01/31/newgroup/index.html","6faf31b52926c646f00330256bb5f977"],["/2021/02/01/clashlanguage/index.html","44e59d847f0f7d9d5f33662b9b776f88"],["/2021/02/01/encrypt/index.html","8311fd9ac043bf1d2c84f4afa60ec538"],["/2021/02/01/footermotion/index.html","e96e36858977b6f7e3ef0174cd8d6bf5"],["/2021/02/01/gitter/index.html","fbd6d84d44dd3f2d0e8bbf78caff35e5"],["/2021/02/01/pixivtop50/index.html","74aecdfd8f2ad7bcb758f68fa990b6fe"],["/2021/02/01/scrollbar/index.html","5f40c465370a17dd71ed5c55d3210753"],["/2021/02/02/clover/index.html","3a5325d9b710d06a6c3c5f8c28ef0327"],["/2021/02/02/maya/index.html","b97e32a677491d40cb625c3691f7b542"],["/2021/02/02/speedcontroller/index.html","9c7a1c3d6317e9bbf381f00b9942f158"],["/2021/02/02/yesmusicplayer/index.html","6839c57fcc1698737282f6e912c1589e"],["/2021/02/03/lenovoonelite/index.html","a81ba1cdd947126e56b38c075bca90a8"],["/2021/02/03/skipads/index.html","257865f3b98ffb005d4b22764117acb5"],["/2021/02/04/picseed/index.html","84084086aee66afa41a1ef14dfbd823a"],["/2021/02/04/renren/index.html","d54be99c45c54d4efb88023f8b2797b7"],["/2021/02/04/serverstress/index.html","3fdf0fc4a703e8f487b1829760e5f296"],["/2021/02/04/wikipediazh/index.html","3e6b9e7a8eb86389cf185fcf316204eb"],["/2021/02/05/googlevoice/index.html","7fc21fc09425b28b4bf96ae47a68d716"],["/2021/02/06/clashconnection/index.html","4824f1b95dcba5b096507221b48ae59b"],["/2021/02/06/gvtransfer/index.html","6c7808e008be8df0fb89330c8418894c"],["/2021/02/06/todesk/index.html","c94bc3605d91bb5cd41c743ebb50c6db"],["/2021/02/06/vpnblacklist/index.html","f16571201350de4bd96b5e617f60530f"],["/2021/02/07/mklink/index.html","5479899c70ed5a14cbbd28add75b7262"],["/2021/02/07/speedtest/index.html","1505d67b885e05a7a23e3fae890c033d"],["/2021/02/07/translate/index.html","fbb8927869048db765b9e08af2e1ef2b"],["/2021/02/08/ewomail/index.html","ae69b6257addf4a40bc0fab9722703e2"],["/2021/02/10/officee5/index.html","11c8d112b8e108e4e1aa6a571e6a639d"],["/2021/02/10/raidrive/index.html","fdd09ff89d99f9bdb68dfbecfcdd2880"],["/2021/02/13/e5sub/index.html","5eb7ca7819bc10e9f51b1cce3a676b02"],["/2021/02/14/screen/index.html","0897f440506dcd77a53333d8b6fbe08e"],["/2021/02/15/clashtun/index.html","f3705aea3ad3cf2e1b5708197dff0d52"],["/2021/02/15/messageboom/index.html","e6f9c9be6461e4e00b3a7373679e2543"],["/2021/02/15/oneindex/index.html","9cf85dcf1db7667341be50ddf4d164b5"],["/2021/02/16/govsites/index.html","2dc8c2aa10699488f81c53bd63fb2874"],["/2021/02/17/hexototypecho/index.html","ac03a95e758f5538577afcb49d2e71ef"],["/2021/02/19/fiddler/index.html","f905fe94e8e8dd8a286ffd0cf1cd89f7"],["/2021/02/22/potplayerset/index.html","ce8c9eea95b6380e518a7ef1fad09954"],["/2021/02/22/studyresource/index.html","57fa89633b4568790341ebd2f0e980ea"],["/2021/02/22/telegram/index.html","30c7c58603272a2a8d12193837771a81"],["/2021/02/22/videos/index.html","500cde8751d78d4150673fd52bf727ff"],["/2021/02/24/mtproxy/index.html","905c1cd8a4992c27104e45563c41e633"],["/2021/03/10/catchcat/index.html","2c5cc2a0145309be6c9e6d01d9f431da"],["/2021/03/10/neteasemusic/index.html","064190dc3a5ae5ad276516e0f8bc3fa8"],["/2021/03/10/surfboard/index.html","b0aa7ced5e5e4913ea5f9d4459acfb7e"],["/2021/03/11/vpnandjc/index.html","f31fce55ffeab1df53d2ae781f214824"],["/2021/03/12/qrcodes/index.html","96037b55376fa1a1a0c44ed8d1c608ee"],["/2021/03/20/qv2ray/index.html","15483cdb1b3e69b41f4365cd22823d86"],["/2021/03/22/freevps/index.html","db44c0d9cc0b8078b9a269c77efecaf8"],["/2021/03/24/tgstickers/index.html","c6746c34354212bfb9082b34ef2d44bc"],["/2021/03/25/clashx/index.html","9678dde7b027b66032e923b6d2966098"],["/2021/03/26/bingwallpaper/index.html","4c6cd2739f772f70ac01b5e4a5158c70"],["/404.html","b2514527900e03c66a2e955bd2ad4ee1"],["/archives/2020/11/index.html","22b84387c2f0e65899cdb4f8c44034f1"],["/archives/2020/12/index.html","d0c6e9c4c8fa14718d9f6b3c107241ef"],["/archives/2020/12/page/2/index.html","280bf79402cb265dc3d418266125bfb3"],["/archives/2020/12/page/3/index.html","f0a56c9bdb384caddff1ccea94ac5c7f"],["/archives/2020/index.html","ab6fcf45af2c0805b5b2437cca0b74a9"],["/archives/2020/page/2/index.html","a866ad30ce4f9cd1e3371e9243ff7f14"],["/archives/2020/page/3/index.html","ea06b9f138b15e7ffb1260c252307fa2"],["/archives/2021/01/index.html","e84fe4a7af6b67960d2561fce0191658"],["/archives/2021/01/page/2/index.html","2323e5d2e8beb5c50955bcdccf84cd4b"],["/archives/2021/01/page/3/index.html","6c5812092658ca2962883514f384efc5"],["/archives/2021/01/page/4/index.html","3b649bcd9479029032dc218521807e88"],["/archives/2021/02/index.html","829cd88e66b1eddce9353b9ff13310ab"],["/archives/2021/02/page/2/index.html","d57645d03b618f0b7ca350f1d60f06ce"],["/archives/2021/02/page/3/index.html","fa76fd3c7fa1cfca8d6156d9e0dfb07f"],["/archives/2021/03/index.html","52f010bb895287784115c7e270c7b381"],["/archives/2021/index.html","3bbff7340015b222c3819f06f9f96054"],["/archives/2021/page/2/index.html","5b599ddc98a3148bf1db75584765e627"],["/archives/2021/page/3/index.html","0329ed6b1357ee9fb51a20b86bc506a6"],["/archives/2021/page/4/index.html","6da2fd745c5a6b83c7598d39b5d76396"],["/archives/2021/page/5/index.html","af5385c75d96f3fb1a14b481130af6ce"],["/archives/2021/page/6/index.html","dc66f5aa58ee9bba3fb0a1580e540587"],["/archives/2021/page/7/index.html","087980abd13975cf1993e5276556fa47"],["/archives/2021/page/8/index.html","553cff6171f5d8dccef561d0bfd43710"],["/archives/index.html","dff2530fb855be65ea0523be2dba56e6"],["/archives/page/10/index.html","9d59dfa5a4d1cb917b1c4762c24643e4"],["/archives/page/2/index.html","c2a3f2565c85706ba8d53653ff432a2d"],["/archives/page/3/index.html","6d32d657857a0af7fcb1e2080cc9a2ae"],["/archives/page/4/index.html","e37b9c603b40dba1101b095bc8af09aa"],["/archives/page/5/index.html","0e8a5a95f44982bd2aa63e6b91d3507c"],["/archives/page/6/index.html","8a27285ab3588034bafaaa62343671b7"],["/archives/page/7/index.html","e2c38c4b0468b47a503e7301991eb81a"],["/archives/page/8/index.html","e2e614c9d8316c0000c523331367cb74"],["/archives/page/9/index.html","1f1a04f76569f21a4aa38bdf1e8f4b9a"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","d974e141e0d99b78c42b81cdbdf460a9"],["/categories/index.html","d2c2b3f100d57892834eaac44b71da95"],["/categories/下载/index.html","fc874d2d0dc99fa3cc916f6f51c12f8b"],["/categories/安全/index.html","7bc89e0801d894d2039e768e3addfc36"],["/categories/建站/index.html","4f1a8eb9d9e284af88b422ac03bf8b39"],["/categories/杂/index.html","4faf7ac67459042c7ebb4449e0f9c919"],["/categories/杂/page/2/index.html","8ec8744a200a195f25b7ad8d3bc943a2"],["/categories/测评/index.html","e9d1c4a56eda4651c0d425993fd21e3d"],["/categories/科学上网/index.html","f24ec3a493120321f410fff576e8a1ea"],["/categories/科学上网/page/2/index.html","979c8fecb11d415cf3e7ce2aab29b8cb"],["/categories/编程/index.html","b8290c2aa4be7af6251f5a1161b03302"],["/categories/网站/index.html","b05f4ef84a2b7cb750023dd66cee63e8"],["/categories/网站/page/2/index.html","27267b28f070486ed12bb8797eadfac0"],["/categories/软件/index.html","75cde55e5ba8cf29c2fb8f7cd5c0c516"],["/categories/软件/page/2/index.html","1f05bfabc8ce6bcac37e6b98f6ac0f67"],["/categories/软件/page/3/index.html","a2f055362793d040edccf4e1231b55a2"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","d8f220f717b8b74bf2c1351c5cfd7e6e"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","21c5e816fe71a64e39665162f9bbac3f"],["/ios/index.html","21f642b8f5a09237153d40ea75b9d3dc"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","61ed889336960a3779aeac19c12a4c89"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","bf6c13a86354dc2ef015cb716dfd9bef"],["/page/2/index.html","a53a5ca41f6a9093037a984dee3bbd1b"],["/page/3/index.html","bd0059825c62066c08ffc3b3d8d9c3ec"],["/page/4/index.html","2eddab5b79d5e23fdf126d103b111201"],["/page/5/index.html","57af53f5db5b94c62193c51b2bed2897"],["/page/6/index.html","51c72cf509fb665caa6ba808f3022e3f"],["/page/7/index.html","16769231a2160a027199cd8f8cfca7ab"],["/page/8/index.html","88675a06ce152b1b28c362adb723bacb"],["/page/9/index.html","26302bbbd6dee0db7acad795b460b96e"],["/payment/index.html","724882aa3e1b95c2dddc32f3edb79d39"],["/privacy-policy/index.html","5b384b71beef30bf2e3a23f7ad71d883"],["/rss2.xml","4de761da6c1f6a6b584be22c42643031"],["/search.xml","609478c792436d4b3f34685c9615b64b"],["/sitemap.xml","fb2c246bc6f1d68f9fc04a5a5cfc1ebe"],["/sw-register.js","45dcec6d269d7963fc9de77793fdb9b4"],["/tags/5t/index.html","7cb683d0aa09418538abd97163f8a53f"],["/tags/Bing/index.html","e869807df412e709c36656c54c7a6ca3"],["/tags/Clash/index.html","32af184ef2fcf90717f5be113f055199"],["/tags/Clover/index.html","ebbd2542e3b1e6bbab6f33e90d1dda44"],["/tags/E5/index.html","b19a10fbb7259a266244729371759ae8"],["/tags/FTP/index.html","3b199ef288eff261e23be3c8206bbd77"],["/tags/GitHub/index.html","29c8d82a2b914ae2635c35e38136db52"],["/tags/Heroku/index.html","3b3f1b310df35ae9f21eacc4dce83035"],["/tags/Hexo/index.html","eeab62a653548a6568dd989b639e7494"],["/tags/Lenovo/index.html","b266633b905c72c908a5963438e5949a"],["/tags/Oneindex/index.html","6538d195758e066afb0772f9f0fd0ac0"],["/tags/QQ/index.html","5675f27190ed038b81b9367bd5b5134f"],["/tags/QTTabbar/index.html","ced34ee940a54712966faf43abb4435a"],["/tags/RX文件管理器/index.html","e1200b8aa78e423de2961b4f6caa6253"],["/tags/Todesk/index.html","0bfb30f1db4668dc97fe3f90b9790e65"],["/tags/Vercel/index.html","a69b9df7af5024cf7d3ba6f573e75c29"],["/tags/ads/index.html","622b11dc16199fa20df261bad8be0a4b"],["/tags/api/index.html","c592ba98a49622b2f20f95e645387254"],["/tags/app/index.html","2b9164116668c61a55039759e587418e"],["/tags/blacklist/index.html","96e2816ebb3f4a8102e96a1f3d198f62"],["/tags/butterfly/index.html","71d43c0ebc1abc57fba011240260f344"],["/tags/chrome/index.html","8ac9dea0fdd027bccdb2a4af71b1a172"],["/tags/clashx/index.html","ec0cdf293ecde9a247b59d7bc0c19cb3"],["/tags/cloudflare/index.html","956322fb30d95f958ca78106accfdafe"],["/tags/cmd/index.html","030720514cbefb936f576b8fa3e29881"],["/tags/c盘/index.html","bc50c276507a4174b9f61020466b81c7"],["/tags/email/index.html","4232e601bb7b612bc16e39024f920578"],["/tags/ewomail/index.html","4ae6b44d1fc65541a24ae22febc2955a"],["/tags/fiddler/index.html","5b87f9bf808a0a0fe63c786c271fc76d"],["/tags/flags/index.html","79543485abbf96ce11de919995fe849c"],["/tags/footer，页脚/index.html","49ef0238c2b95c4299aad2d7f7746fa2"],["/tags/galgame/index.html","9efa0e750e146518bb6b678f9560f46e"],["/tags/git/index.html","23fc758ea6047f7fb6e2fa3d6e79743d"],["/tags/gitcalendar/index.html","1c275a5daaf0d2ed43badf79426bfce8"],["/tags/google-voice/index.html","a3560b68b3a756dc9cd15e99ef6e983f"],["/tags/gv/index.html","b4949ed5cdc1bd79c3a9364d279703d0"],["/tags/html/index.html","6dbf99cfa37c13c47959146cba05fd02"],["/tags/index-1.html","fe5c540f57e04a10dbae269b215a72b1"],["/tags/index.html","a585d4cb61a52d1828fc3c1df9fad1a7"],["/tags/js/index.html","4492cc8be4cb7d0c1ffed9c3075ff7c8"],["/tags/jsdelivr/index.html","30cb01cb53a6bf72114d53dad96ef6b3"],["/tags/linux/index.html","d24a25b4901cb7acf3ce1edbd6795811"],["/tags/macos/index.html","79719e7a69c2f6cac8bb74efa319da0b"],["/tags/madVR/index.html","1945f03ca7a4ae4ffd606bad315792ea"],["/tags/markdown/index.html","db3c270978e7fa40308946e9e6915aaf"],["/tags/maya/index.html","28dc0a367560cba4a34dbe304c52ae1f"],["/tags/mklink/index.html","b2221caa1e8b2008a12cd5f4de4c5885"],["/tags/office-e5/index.html","edc9617f9db7a9e14d77df65a6c5194f"],["/tags/onedrive/index.html","d2c9e2083c0534047c8da16de5d79fb6"],["/tags/picGO/index.html","69b1e2adee938bc4df2bcaf43fd1dc27"],["/tags/pixiv/index.html","5ef481115dde60b89b35bea5b853f1d4"],["/tags/potplayer/index.html","20b7638178043b554c261a6546438dcf"],["/tags/proxypool/index.html","aadba03d6d526989b203a78bdda4a030"],["/tags/qbitorrent/index.html","2c8cb353d7b7df1276025b91f8c4063b"],["/tags/raidrive/index.html","431ea3b11d23a7618e86cb409991c059"],["/tags/screen/index.html","5e9dd6c96f6198f6adbc3717ee43198e"],["/tags/speedtest/index.html","68baaf57e321bde0dc6541b360e4c6fc"],["/tags/ss/index.html","639fb1e577d30b2e8970547dab879bb4"],["/tags/ssr/index.html","02e478891e8181537fe212cb5ee52166"],["/tags/stickers/index.html","6689f70af9509cf353b4b7fef382d668"],["/tags/surfboard/index.html","2f65276feb09ae374089be2cf4d8874e"],["/tags/tap/index.html","96fb461d0c2e942a78d11a27656b08ab"],["/tags/telegram/index.html","504e7354164cb8dbc99d7496841bd77b"],["/tags/telegram代理/index.html","64e5307b790d989f169ff74b01936300"],["/tags/tg/index.html","fb8a357f00077d1b4ac13e1f32374b1c"],["/tags/tg代理/index.html","3256cd8a9da2b44a42d1c376bc7799ca"],["/tags/top50/index.html","bac4538d370af1ef39967b04c95b17dc"],["/tags/tracker/index.html","9a8be77cb7f2f28de2a65368ab12a289"],["/tags/translate/index.html","f8da789e89d7f6bb035201b2e606c05e"],["/tags/translater/index.html","7a542dcc3d13cb40bc8fff5fc069b63b"],["/tags/tun/index.html","ee64f7da4aed043ef71a42ab32f7ed86"],["/tags/typecho/index.html","e55b4366f9ed1f37faf5968239e57c36"],["/tags/v2ray/index.html","28bcd99b6921578e17e744a50a545b1d"],["/tags/vpn/index.html","0fd7c1cc4a1c3c94c419f8357f58f393"],["/tags/vps/index.html","30ab22835e66f1b9c9cd380f543d5435"],["/tags/wallpaper/index.html","333db6738d5f8fd38b7e11953c4492fd"],["/tags/windows/index.html","818fcbbce3e258a2dd6c539d9c4356c7"],["/tags/windows端/index.html","d4ee8159c778f254f944b148b42d92ae"],["/tags/xray/index.html","b95069bccb2549148e6d66477054cec6"],["/tags/下载/index.html","6077c2a7169bf0d7f28008e5635d0974"],["/tags/不限速/index.html","13dcdfd6b2e3a245b836443819d82acd"],["/tags/个人网盘/index.html","539f9eb5e30e1cb9c2a5e425fca0d430"],["/tags/主题/index.html","2a56b738ce8131931d6bc68ceac9e441"],["/tags/二维码/index.html","24818386277786f03184312f7a0a96d9"],["/tags/云便签/index.html","15a648dcb29bab8a1b25914917a1f777"],["/tags/云盘/index.html","d822e8e7962c22ed170396631447528e"],["/tags/人人/index.html","8bd31d4413775c6284bae89339cf7866"],["/tags/代理/index.html","e6314ade899a48b96d978bf277c71023"],["/tags/代码/index.html","5671780ff1acab26b0c097bfbd79c3d4"],["/tags/优选IP/index.html","0935141a6ccb03615ba58c53b39d681b"],["/tags/便签/index.html","8f60b32e0cf1cf71bdcd320694aee04d"],["/tags/保号/index.html","386a849cd560814b536f902e769aafd1"],["/tags/免费/index.html","a15ea00f119ee90def5d7bedc236351c"],["/tags/免费节点/index.html","8e0e64e3f312ce4a6ab91d76b0ebac72"],["/tags/加密/index.html","c76e17220e8f2e2e24f9d876130016c7"],["/tags/动画/index.html","ce168e3374520b3bcd0a4930304efec6"],["/tags/博客/index.html","85f01a80e093e5d558e57c93682548f4"],["/tags/历史记录/index.html","b7eb28f56c7e1cbb3cb564c472ab3c5a"],["/tags/压力/index.html","aa3fd1acf6c15aeaefefee2bf292f16e"],["/tags/压缩包/index.html","228cc268d9bd20193584ab5656acb0b2"],["/tags/反代/index.html","c7a336b8ccfb7f310ad35e3668c80901"],["/tags/可视化/index.html","261dd61a62b7f92ea0e2636bd1d5fda8"],["/tags/命令/index.html","1c21ea181928ed96db5603a904d640ec"],["/tags/国家/index.html","b1c4ed198d8e40d447d77baf19c7067e"],["/tags/图床/index.html","744287bbbc67a8431117fea001610044"],["/tags/图片/index.html","11fbdb60e37ba13d34f5383544e1f410"],["/tags/域名/index.html","29491a6bec9f5b6117bb3b3d0653df55"],["/tags/壁纸/index.html","2374b6c6b2880ca28259a5f8a5e2b4ae"],["/tags/多标签/index.html","f0d5cef7e946e3b4c32457760a1063af"],["/tags/存储/index.html","1070c36924bc42456a05cf107a247586"],["/tags/学习/index.html","a56b97791f83034a42d2401578e2933b"],["/tags/安全/index.html","721a7618b43c65ce139388ba307fc95d"],["/tags/安卓/index.html","dbfb3d211248eb32b48c49b2cdebd15a"],["/tags/宝塔/index.html","684db978047b4522e96209c4061af2b1"],["/tags/小游戏/index.html","e0ab8e536bc6a8c4d04fdb4e9ad960f6"],["/tags/广告/index.html","fa585187dfb61c8c298cc15b5f2b12c1"],["/tags/建站/index.html","a61dd7ead304aebd3148804b04797dc8"],["/tags/影视/index.html","c19abf1f98e13a0982fa0a1dd2464bd4"],["/tags/微信/index.html","0b3da3533fd745e88456b46af577dbd1"],["/tags/快速启动/index.html","fdfd152f10537f37de8631ffddc2413a"],["/tags/手机/index.html","bdf6a9317ffcb999492290b858767f64"],["/tags/托管/index.html","8eac6dcb9327630d7cfc964488d8f078"],["/tags/抓包/index.html","49a0b9a3e81e1487eacbd35a86dc7b79"],["/tags/抓取/index.html","8c0256b60df5d5db38c7cd9a95bfb8d2"],["/tags/投屏/index.html","a65ad49c0f320ba70125ea4dd41e346f"],["/tags/拓展功能/index.html","7e8f20f200b22a354d060785fecdd45b"],["/tags/挂载/index.html","cbda65ebb05eecf5895e7afa1b8325e5"],["/tags/指纹/index.html","ed8103130287ea80aaf7050108abecf8"],["/tags/接口/index.html","980b890ae4ac69772748c27ec496522d"],["/tags/提取图片/index.html","d4261eccac5681956e447f00b37e37ac"],["/tags/插件/index.html","86d9e20d2e349ea934d432247bd75854"],["/tags/搜图/index.html","df2d947a0aa9c80796b99110d00e353a"],["/tags/搭建/index.html","3edbd671c414cb7f9757d433e9e1d5c7"],["/tags/撤回/index.html","58b8bb198b4cb097d213d401f28036d2"],["/tags/播放器/index.html","efc6fdd500ff8a5b03d17213f85d459f"],["/tags/支付宝/index.html","8fcfc0f3a45da6bc279bedfa953eb2cb"],["/tags/政府网站/index.html","f580d0cc69c31bb2b616a3b75390942a"],["/tags/效率/index.html","a27a68bb73a4479050000f0e35b3af45"],["/tags/日历/index.html","aaecdeeb08200e253ae682c616640a25"],["/tags/服务器/index.html","d6b592c12513e2093c7842e8f479cbc8"],["/tags/机场/index.html","9078f3036d059ae9a797e4548d2abe67"],["/tags/桌面/index.html","6519a8a321ad50eec1033cd7dfff5f90"],["/tags/梯子/index.html","3f42b86622ed02939c06c2cda1c62e7e"],["/tags/检测工具/index.html","af99d3e36985969584c454945b877b37"],["/tags/汉化/index.html","bde95f4c1e0d831552092c2100d16e80"],["/tags/测压/index.html","a0876e8565a063a87748c08b2596cc17"],["/tags/测速/index.html","3fa5094bf859dc1ccba1dcaf938ee0d6"],["/tags/浏览器/index.html","cdcb6e1378eb54bf41941d869dedf29a"],["/tags/清理/index.html","6697cbc4c1796aff1706a59f48767856"],["/tags/滚动条/index.html","83db127c3a399d7c6260c5ebaf3be056"],["/tags/灰色歌曲/index.html","2b1859e87090d3b368f77a72b9e982af"],["/tags/电影/index.html","d4dae66387a153d52dd1a6aa739e9fb3"],["/tags/电视剧/index.html","f064a4acdd665e5090054a773529efa0"],["/tags/白嫖/index.html","161aba2e0827701fed0ad52b04330181"],["/tags/百度/index.html","6c3f757e661f17357f5603ecf283e408"],["/tags/百度云盘/index.html","d2d5d55970ffe7d69f94a873278b796b"],["/tags/百科/index.html","d1b1b55bd72289099391c57a196608f4"],["/tags/短信/index.html","a327cdd5293c042e981b45321fef803b"],["/tags/硬件/index.html","cb36490d704a0db84b651bcbd394662a"],["/tags/科学上网/index.html","b3c37abd4c8ff13c6f8e5c50b62db5c7"],["/tags/空间/index.html","b6ba933fd965785c0a61b96a9ddc7c4c"],["/tags/笔记/index.html","ede33734ba343f4c48b2b91357cbb632"],["/tags/简洁/index.html","28021cea428daa68790e4e00430a4f85"],["/tags/简约/index.html","b8327d7e3fa850137a97f88725bf7474"],["/tags/维基/index.html","21128156c795e23acf11542e06c35bd9"],["/tags/网易云/index.html","8d8718c7baabceb5e68395bae8c3a897"],["/tags/网盘/index.html","304db82dbdb6b45326ba37d2345982bc"],["/tags/网站/index.html","b39c34982b96a7458b3d39670cd5e80d"],["/tags/网络/index.html","0b11db0f72ac0cd81952c474bef41ba4"],["/tags/美化/index.html","1e9016735c092d253a8b2e7953ec18ee"],["/tags/翻墙/index.html","e84e790b38e46b234108b06f29accbb9"],["/tags/翻译/index.html","4f37c0d36107999d7b3de46475c38b90"],["/tags/翻译器/index.html","7e37a94c6ffaafed997d3249a41958c1"],["/tags/聊天/index.html","e16c80cacd2a3aa3c61980b412128e29"],["/tags/聊天室/index.html","588081e338aae0526c4e8fe9dfbdff0b"],["/tags/联想/index.html","25d7009111a7e4dd1ab99830ee82bab4"],["/tags/节点/index.html","f556a6e4c09536bc704314d5ea2da11f"],["/tags/虚拟手机号/index.html","6d3d1d3f694f3a19208dc762789b3faf"],["/tags/补丁/index.html","a5e6e80a56720450bffd05fdd785e66e"],["/tags/表情包/index.html","69c636c37553345d8323b349a92ed15c"],["/tags/视频/index.html","3a93b4277a2674a50a942b19080ceddb"],["/tags/解析/index.html","a02b81660fcb567d06f76dd86b28b006"],["/tags/订阅链接/index.html","c6df181d96e2d63a551aad8186133c84"],["/tags/记录/index.html","9c3c45a9fcd846aa8ecf48f5b3fcbda5"],["/tags/识图/index.html","226222315f99708ef81041430b19b919"],["/tags/语言/index.html","3da01a8eefba613e536da2f390aa3de8"],["/tags/资源/index.html","d65b8c12a4f7ac988e058bf4c09f5e4b"],["/tags/资源管理器/index.html","c80113e35bd9e0413ce3ae3e8719ae33"],["/tags/转移/index.html","912d8a9ec701b78c449364c4260a6775"],["/tags/软件/index.html","f7ef6a96b3ef0278e60323ec8220dc9d"],["/tags/轰炸/index.html","e1950ce1f0bf550f83b69c84ca771e23"],["/tags/迁移/index.html","36083d429b1a0069532ba82d332e692e"],["/tags/远程控制/index.html","0e480f66364464e9e55e0a2c7222ef38"],["/tags/连接/index.html","93368171294e1542c8b412fa16e74c68"],["/tags/追踪/index.html","570d51a029ebe061ccbcb54db0ce522f"],["/tags/速度/index.html","3f4c66eb445c7668e0c8ec474d26718d"],["/tags/邮箱/index.html","125b478d5e6657301a28056408555606"],["/tags/酷炫/index.html","613d0d2bc382f7b0499815adea40a374"],["/tags/钓鱼/index.html","5d3c3df7d4b120bbdc4871a74801bc08"],["/tags/镜像/index.html","cbb3874841c36cad9ec1f8956adfc463"],["/tags/随机/index.html","69978dabbe223bbeeb768ffa2e2799cc"],["/tags/隐藏/index.html","b4915941f69ec2ca833a36857c25b63a"],["/tags/面板/index.html","d0e1a41e049e6891e2d6ae09d6732f40"],["/tags/音乐/index.html","8387d0cf0f2b9c2f29af7b831c314815"],["/tags/高颜值/index.html","f0efe936fa4819bfbd38c7ac872b0c83"],["/tags/魔改/index.html","10fcc40497a23428d82fc719c49d9c9c"],["/tags/黑名单/index.html","7d56e0dbc306d669de715f15095a05c6"],["/urls/index.html","670ac360d64f28029029c8f0e113ca95"],["/vps/index.html","8e19a2c32c9d4c4000b92242b16b626c"],["/支持/index.html","2da181a0ded524dcb0f56b8574b06d83"]];
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
