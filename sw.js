/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","07e7d986f5ab871c654b4702ac8b768d"],["/2020/11/29/clash-windows/index.html","97e5d372acdfb9eb8de7041ace369472"],["/2020/11/30/websites2/index.html","fdeab195e5a082c289bc41acc325500b"],["/2020/12/04/iphone4s/index.html","52622bb3452151e13c56781752ea0920"],["/2020/12/04/onenote/index.html","9286d7fb148653c487d3b77ff051c567"],["/2020/12/04/wesites1/index.html","da59612f91538f83a57923f6482c6a78"],["/2020/12/06/nokia808/index.html","7f306bb6fae24f1bbb1c9f86151d3ec2"],["/2020/12/07/ipad1/index.html","c166dc0ad270c287f8499516d7e498b0"],["/2020/12/18/freesubscribes/index.html","e6ca37f5d4e1d0b9dbeff6e75a911e10"],["/2020/12/19/musics/index.html","feb48fa07210864f41fc1c2157008d9c"],["/2020/12/19/shadowrocket/index.html","eaf26cc1d19e5e712a7554ec7fd51d05"],["/2020/12/19/v2ray-windows/index.html","8b2e85769e7f3e715e2dae41944df029"],["/2020/12/19/v2rayng/index.html","53cf5f2f4b493ddf117dfba7f1ee4278"],["/2020/12/20/beoplay/index.html","1b9353c1038a7faf4b673e8212337d3f"],["/2020/12/20/订阅链接转换/index.html","1a65f9d0eda826a51715624f1449bdc4"],["/2020/12/21/chrome浏览器下载提速/index.html","7186c9ba9d815bd4bfe29d0d1779c98c"],["/2020/12/21/免费128线程并发下载xdown/index.html","99f342a92e574dac13d9db9ded5a7f45"],["/2020/12/21/免费32线程下载软件ndm/index.html","9ecb86047f6712e45216da4f561486e3"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","55573171d561e392a3fa3ee70c871e9e"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","ae7927ce2850ab1ec18d744f054b2084"],["/2020/12/21/广告怎么知道我在想什么/index.html","078d9acc4abed4d45d0954b08a764f45"],["/2020/12/21/无名·引子（小说试写）/index.html","6a9e2e5b4d2bca7feec5445aceabcb2c"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","d85a78e3bc9be26449ed3b14469a6e92"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","22e989644e8b9248a89a51d7afebe353"],["/2020/12/21/高速轻量下载器aria2/index.html","66006af0448b170630c4d79845ce144c"],["/2020/12/22/2020-cee-roo/index.html","6e23502447f7897dd01abe6d60ed117f"],["/2020/12/22/firefox插件、github、steam富强/index.html","dca2fea5fbff5bb33789e27473a979d8"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","c0b9d2b3cd495eb621faba3cc010a2bf"],["/2020/12/26/python-day-1/index.html","1e1d6c5f6e2fe69ce1fdc01add7ce4f9"],["/2020/12/26/python-day-2/index.html","cb82d96152868bcd8818230e856f5fef"],["/2020/12/26/度盘不限速下载方式一赏/index.html","0fb74bc27774045600fcade4a626cbf1"],["/2020/12/26/添加开机自启软件/index.html","0f6032f2727b3133fb4043961ab4d87c"],["/2020/12/26/电脑端截图方式一赏/index.html","4b6eb621db3b929790b771a68dfceb61"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","93f21279a09a00073bc9a775232c5db7"],["/2020/12/27/最安全的浏览器tor/index.html","7f1cd2d9d5364712df1944301950f92f"],["/2020/12/27/网易云刷等级和听歌数量/index.html","c43b8bdc30b78b2a5dd06081569b0447"],["/2020/12/28/freenom申请免费域名/index.html","e16016c9b200e6eaf08c250afd915549"],["/2020/12/31/机场/index.html","a0c02fd3fbb0c8074008386d1d716b47"],["/2021/01/01/M1/index.html","2b65db00ec0fea54d37ba06e4cfe4bbf"],["/2021/01/01/compress/index.html","8ae5673abb6d43370475abdb02a816d5"],["/2021/01/01/infinityfree/index.html","7ba45b7986d0be7094427e912f6a745d"],["/2021/01/01/硬核翻墙/index.html","9a3e6698e6db5d82fec8fc1886fc23f9"],["/2021/01/02/qq/index.html","e661a599c190420a8c6ab26e604d62a6"],["/2021/01/03/netch/index.html","c132fa1e5a96e3e21bbdec5c808fa65a"],["/2021/01/03/waifu2x/index.html","213034325012337ab9fb8f14a44d3eaa"],["/2021/01/04/ads/index.html","df0549847f3c318286b5d7ae3a2f7fe4"],["/2021/01/04/games/index.html","0f4d98400036a2bfd6f113411b3b9e72"],["/2021/01/04/heroku/index.html","bed124d2fc5b0691bf51a0dd0fe40e85"],["/2021/01/06/movies/index.html","b5c6b89de9678ac577e0284dfe4ca799"],["/2021/01/07/google2020/index.html","030e05944b76939b5807ff7fc18c53f2"],["/2021/01/07/lucky/index.html","e00b12581e12411e16b9339c325d5123"],["/2021/01/07/spotify/index.html","fd3522edbf81a8050ddb1e7bbd4d5a2c"],["/2021/01/07/thunder/index.html","483f59e78557124c213a3cd9e0a3d30c"],["/2021/01/08/adguardhome/index.html","503d1a5cd65f06b7989fe401bb3dff23"],["/2021/01/10/IBM/index.html","d2f3c10b3e6abc215deaa7c6b861b9df"],["/2021/01/10/potplayer/index.html","40d9a7bd873e0cbe6d4089589a3f967d"],["/2021/01/10/sakuraanime/index.html","16e252f796f3e2148cee321470d76642"],["/2021/01/10/美剧星球/index.html","e84451950a0f309d42da69586588dc87"],["/2021/01/12/telegraph/index.html","ecada36aafaad6a351747f50938e5f02"],["/2021/01/14/comics/index.html","f578108da02dc82993c28f43143267f1"],["/2021/01/14/ftp/index.html","c4774d687a85cf91cd32bcaa46b95b31"],["/2021/01/14/oraclecloud/index.html","243b51a2bb2dfe8e554e7663efa0a0fa"],["/2021/01/14/porkbun/index.html","88093c818187d451edaef3eb7cd9ef03"],["/2021/01/14/powertoys/index.html","4d3acb85a8179290572b9deb448c219a"],["/2021/01/14/taptap/index.html","ebfd184c66c3b7e00614b495226ab3cc"],["/2021/01/14/ubuntuvsftp/index.html","b094a177fc73b5a769d6d205bd75f92d"],["/2021/01/14/小说/index.html","4e08a83c267261ece09c108fae789ba7"],["/2021/01/15/freeproxies/index.html","182f2dee8657b0935c93775bbb521c69"],["/2021/01/15/incaseformat/index.html","b1b30d77e747369f4e6be48ceb39f121"],["/2021/01/16/euserv/index.html","5fc21b43e21532fda1524709f3899af2"],["/2021/01/16/winxray/index.html","c66c51245337a2ca161a2ae8a0235d9d"],["/2021/01/18/qqreadhistory/index.html","be6d07f3ab34c540bda9d840b57f60c6"],["/2021/01/18/qqrevoke/index.html","72555097f7fab468069ff3a2125e76e7"],["/2021/01/19/freevpn/index.html","688956bb3208a46d769c226baeee2b45"],["/2021/01/20/browsertrack/index.html","aaaba1074d3c07ec6ca72b887677caeb"],["/2021/01/20/v2ui/index.html","96cc87d95d580f50f0d057c6820118a2"],["/2021/01/21/failedtoconnect/index.html","168cf9851f09faf8bd3691d37515cbe3"],["/2021/01/21/gitcalendar/index.html","8e6c1a59e52308b1f912f0c03f0a732e"],["/2021/01/21/markdownformat/index.html","aec446473d7f66b2808110415153cc78"],["/2021/01/21/markdowntable/index.html","f326bf0a28c311dd80f4f79579a3dbb3"],["/2021/01/21/vercel/index.html","20d8a65e42c48f304fde5b2926d04abf"],["/2021/01/22/hardware/index.html","9b799f3735dd8e057dff369adc6e73b8"],["/2021/01/22/muviz/index.html","90fbf940576b3b11ef6b32f11d230568"],["/2021/01/22/randomapi/index.html","b98a40ab3aad2847770363f67df023c9"],["/2021/01/22/searchimages/index.html","955d3dcd57a816d9a40bace5ea365b16"],["/2021/01/23/RX文件管理器/index.html","4e745565fb424a93c6850035bdbb1fd6"],["/2021/01/23/chromeflag/index.html","76b95ddda56d090caae99dfffa8bb3bb"],["/2021/01/23/qttabbar/index.html","8abd85e4fd6dfd46eeddefc84bf1f4c6"],["/2021/01/24/githubspeedup/index.html","96454e299219ca006f8d9a23e2123fb6"],["/2021/01/24/jsdelivr/index.html","65adf47362c3eacc23d77b43f8f9bc6a"],["/2021/01/25/note/index.html","85c0064e74a97196b34db2389ec8b79b"],["/2021/01/25/soul/index.html","c7670f795c427715eb4c7b3d05fb0648"],["/2021/01/26/herokuxray/index.html","63c8489ed7dd238b76fea1fbe72fc61c"],["/2021/01/27/proxypool/index.html","3f02a8a75d1f2315e69fb269f3bedc52"],["/2021/01/27/tracker/index.html","9cdcd0f284cf3f1adbd4f64de913bf8a"],["/2021/01/30/pandownphp/index.html","584fee31d270d76b89c22f71a8ef7741"],["/2021/01/31/newgroup/index.html","e97249ad59e4ff3d303be4edfc70dae9"],["/2021/02/01/clashlanguage/index.html","399aa60e2e8e0b938d247b41cdbd6907"],["/2021/02/01/encrypt/index.html","85896ccba54dfb2632724726bbf2c6c4"],["/2021/02/01/footermotion/index.html","20d3dc7ca5fe774abcf1086fb4fa377d"],["/2021/02/01/gitter/index.html","fed717fdac6a12780e7203bc60e9f4e0"],["/2021/02/01/pixivtop50/index.html","5182ed8ca4260dd73eb2cd6cef37a2f9"],["/2021/02/01/scrollbar/index.html","c50f3881c905d28a47ec16e3b9ef38dc"],["/2021/02/02/clover/index.html","d3c19520d0075dc57de78bc0a562fe0a"],["/2021/02/02/maya/index.html","c93cbb95c0e1f8601cd4b5a1319e02f3"],["/2021/02/02/speedcontroller/index.html","39d8918aec40e2fef98a24e2a21d592a"],["/2021/02/02/yesmusicplayer/index.html","da8b40c7aada76227304e5175a9f3ad7"],["/2021/02/03/lenovoonelite/index.html","37f89cb4c0a9bcd4cdc4c67ef4aeeffd"],["/2021/02/03/skipads/index.html","5bd7d8454c983210a510e2df77d2a632"],["/2021/02/04/picseed/index.html","330cbc537416ecdb62817fa7b5a40fae"],["/2021/02/04/renren/index.html","0755873937eefcb50f691002f63bfc29"],["/2021/02/04/serverstress/index.html","abf133a3a9683a57a25907f83e422afc"],["/2021/02/04/wikipediazh/index.html","7ef99eedf3f2adebe1465e1175183ed3"],["/2021/02/05/googlevoice/index.html","ddcc69233648bb7cde1e91cafd11dea6"],["/2021/02/06/clashconnection/index.html","bc05b9d386a45b912fe0b36f46d79bc2"],["/2021/02/06/gvtransfer/index.html","92dcccdc8ecdf6175500536dd703b5ff"],["/2021/02/06/todesk/index.html","ae4cf3855ee3cfaf4ff9c656d40a8d92"],["/2021/02/06/vpnblacklist/index.html","84b76d5dfade35ed4e13d5f49ad05575"],["/2021/02/07/mklink/index.html","40eeca366f5d53d6ce871b89595ba430"],["/2021/02/07/speedtest/index.html","c20c5c02fc3e906af083f3435b0d45de"],["/2021/02/07/translate/index.html","375a5b29537f000da836ceb2cef96735"],["/2021/02/08/ewomail/index.html","cf4a12bd7feb685bd06fe167c85b54db"],["/2021/02/10/officee5/index.html","5088064a4b3330ed72df9a57d16ee661"],["/2021/02/10/raidrive/index.html","e94fe736fdab301d5236325f05ae4aec"],["/2021/02/13/e5sub/index.html","5f454aca30dde7a35d88679fdd2c9b66"],["/2021/02/14/screen/index.html","c7d5ec6e4af77ae80dd7c8073e3c1920"],["/2021/02/15/clashtun/index.html","db78e5b8aa391bb02fc17b5d4c5e4b23"],["/2021/02/15/messageboom/index.html","33ba2d17dab102f27aa6362f42c33c59"],["/2021/02/15/oneindex/index.html","a0929bd7a7bc1a042e2965324e3785da"],["/2021/02/16/govsites/index.html","2baa63fa778ea1b22bd3d8860b31c201"],["/2021/02/17/hexototypecho/index.html","cdc8f2b528883da302fc6062f7dc21b8"],["/2021/02/19/fiddler/index.html","c4b33d94f929d07c96c96d8ea5525e4b"],["/2021/02/22/potplayerset/index.html","e24a195964e665469a71cf08adf6fd66"],["/2021/02/22/studyresource/index.html","ad2f5eb88b3523fd6f90d694622a68e7"],["/2021/02/22/telegram/index.html","6cd1b91e08beaa6b10b0a31532a6b269"],["/2021/02/22/videos/index.html","86c9514ef7337d7df11c03bf73830eef"],["/2021/02/24/mtproxy/index.html","5ea27f17eec236534660203ad3893be4"],["/2021/03/10/catchcat/index.html","1d6a75abc47a03cc71330111e3862093"],["/2021/03/10/neteasemusic/index.html","cc3cf954dfc86c9064d5b5c9b850e920"],["/2021/03/10/surfboard/index.html","5e716dfceca7bfd5a41c0da7530371fd"],["/2021/03/11/vpnandjc/index.html","51438fc29d64d9c5c6d1141f17b27679"],["/404.html","d42f8b0bdf25064d67e5c9a2d2933962"],["/archives/2020/11/index.html","a58b6ec86cb5e984b8e144efeb8bf938"],["/archives/2020/12/index.html","214625b6e70e6ee1dedd0f38347262b7"],["/archives/2020/12/page/2/index.html","0fd686707ee112a24913c46b0b5c578b"],["/archives/2020/12/page/3/index.html","0befd29b2d35c32d7e33c42a2416a0a6"],["/archives/2020/index.html","03daff2da2461c832a0b8d8f2606b497"],["/archives/2020/page/2/index.html","ec6b5f216eed69530ca546e3fa18987f"],["/archives/2020/page/3/index.html","126b737465156c1d3b0120f738be6c9a"],["/archives/2021/01/index.html","64479d248d47f1b99c8d1ed9203d8a2c"],["/archives/2021/01/page/2/index.html","6b11ccf45f06c4cec513ab724ef80777"],["/archives/2021/01/page/3/index.html","c69f0c7f8cbfa29cde9036a7f50433d6"],["/archives/2021/01/page/4/index.html","f492578cf44b480c6749720361a00b13"],["/archives/2021/02/index.html","04c609cf0eeae9477056aa50c9df98ba"],["/archives/2021/02/page/2/index.html","6308da5d7cafa77571a1bedc5a261e47"],["/archives/2021/02/page/3/index.html","4ff72a74fdf5c8fa09a5ad6091a68ed2"],["/archives/2021/03/index.html","cdf91b65359c3733fa3113e427adbfef"],["/archives/2021/index.html","97da6ed567cf1ed25e36986e9f958821"],["/archives/2021/page/2/index.html","0d1a465616d2d8f3853e70cb144e0292"],["/archives/2021/page/3/index.html","2eb875f74a44ea877a8587a7119c4ab3"],["/archives/2021/page/4/index.html","223294bf733b445ef13a8473aaa97f28"],["/archives/2021/page/5/index.html","d09e97dcccfed6c11d99d5f3dea9100e"],["/archives/2021/page/6/index.html","bdee881887cda1cc479d43aa3204ef2d"],["/archives/2021/page/7/index.html","c23ccc9b6d6a06335e266f231f9a981b"],["/archives/index.html","784e97585dcdc106b2e738c320c6d5b6"],["/archives/page/10/index.html","db5ced685f8e464b3b58b457f5b9836a"],["/archives/page/2/index.html","90c788a7157fd311c114235eddf612ed"],["/archives/page/3/index.html","d185b14be2be92f5bdd811df32c06095"],["/archives/page/4/index.html","c1d7944fb0ae0081c8aa562803622acd"],["/archives/page/5/index.html","d7a68fcaca76308ab5d6edd23534740a"],["/archives/page/6/index.html","e54ecd3bff61a203d854438704d3dbc2"],["/archives/page/7/index.html","2674e2db79c7ec5dd8123bc69f8ee521"],["/archives/page/8/index.html","7a8b202f0dde4800b040d7b922d74afd"],["/archives/page/9/index.html","0aed48e3f7a6bc09b012de687473248b"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","140dcd77a56c79d9eb0468ec0df6b3cd"],["/catchcathard/index.html","e9291c58bce68730cd21cc4e2b0a474b"],["/catchcatimpossible/index.html","ce8ac7a16e2b7990d9e0aeb78de4c0db"],["/catchcatmid/index.html","dc073d912aef351b621ce171416ebd82"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/categories/VPN/index.html","c9b6446a0cc8fe1814828b6ef6c241c5"],["/categories/VPS/index.html","9c8d1cd40d7166d1f689be7cd5222d09"],["/categories/index.html","8909702cd74075992de03aa5a2732422"],["/categories/下载/index.html","6f3bcfa6790f4f9b37f1a6bc774eee4b"],["/categories/安全/index.html","574598dc6c060a9b6a17213701e7c1bf"],["/categories/建站/index.html","9ecfd6964059c4b9331ef4ed00d39b12"],["/categories/杂/index.html","7f6b9359baffeab06f29a1c3caf886db"],["/categories/杂/page/2/index.html","cf53dedbd112e07b63d266b26c15e547"],["/categories/测评/index.html","faf0a24a04053bd0ee9071b6f3ffa88e"],["/categories/科学上网/index.html","a743eadef73421e70e2983f191ddc8a1"],["/categories/科学上网/page/2/index.html","6c7f6b55965253cc8dfcef52498c7c82"],["/categories/编程/index.html","e8b0cc339827ad46bffb4696507c047f"],["/categories/网站/index.html","77a8976d87fd5d0ccb12544a1b53800f"],["/categories/网站/page/2/index.html","e4bea1e96012bb40dd1b5342758888f8"],["/categories/软件/index.html","9b6840be8f0909ff4e1fce9a504de243"],["/categories/软件/page/2/index.html","ee76a41dc2da53cd36869785b90afa01"],["/categories/软件/page/3/index.html","f52bdf3a67b84f284c5e2867e9ca8592"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","6ea8d20034fa1da4091884daf677f193"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","0bacbdc1f7a8c0b9145e166ffaa75558"],["/ios/index.html","8ec6a5fd950144163175161cfe87094d"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","8cf39e8f4b24dd9cafca2567fc83bed0"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","55f1235d428413717f65ce01cbbf2b7f"],["/page/2/index.html","a508c6ea4d1afc651032d38dc3567e46"],["/page/3/index.html","e4e329e5f1970903399d4f9b1f2f4d81"],["/page/4/index.html","29ecae64d9542b9cc06e47b00ba0d2f7"],["/page/5/index.html","db23e4b2d0762fe6f75ae71bba412040"],["/page/6/index.html","c5314a442d4a8be0e1385c1a70b19557"],["/page/7/index.html","270432e4ee5492fb7a327da03a10a6b7"],["/page/8/index.html","86e32037878c7cb33961af74c7977edc"],["/page/9/index.html","f95873c514109cbb0f60c91721401abf"],["/payment/index.html","a5f48b8a46432877022e939fa57a1715"],["/privacy-policy/index.html","8d1421f4afc65c46a2b2b92d91ad7878"],["/rss2.xml","86788118b03836e872fe59926e1f304f"],["/search.xml","22e8830f6e61c1d8a91d522392e0b526"],["/sitemap.xml","f1b6c9e39f1a629f4f28f57e4045b4e4"],["/sw-register.js","988ee757fd248d709cf7a477c640c212"],["/tags/5t/index.html","923f41ebe9bcf4df22f9a6991969ae24"],["/tags/Clash/index.html","4f35da634378b2eb3473d181e8e60e25"],["/tags/Clover/index.html","cd48d44c34137b77d1a8ccac10078ce5"],["/tags/E5/index.html","f55dc2c1dd579b90540aff27b5bcc26e"],["/tags/FTP/index.html","134a2661dc0e9f8b0d77ecec57c3301e"],["/tags/GitHub/index.html","0134b91544637378b80bb3f07d67f184"],["/tags/Heroku/index.html","56c150e09fc3392e69f872158b2da94b"],["/tags/Hexo/index.html","3415c1eb5effeecab0de8973e0de2329"],["/tags/Lenovo/index.html","24cef1b737330de7f17deb159bc06739"],["/tags/Oneindex/index.html","ab1c567a21bb8e922d37c94cb21c738f"],["/tags/QQ/index.html","4771271ec6e90be28ccb1cebc2947713"],["/tags/QTTabbar/index.html","4504e2128de200298eb696ff36ff47e0"],["/tags/RX文件管理器/index.html","94cdfb70a3fff9754b1a70d0d9f4c85c"],["/tags/Todesk/index.html","58662f19921fd7302e6c001bfd3bdec4"],["/tags/Vercel/index.html","eefcf8190f501fafbbb8ea3c3f87e1ab"],["/tags/ads/index.html","2a21f9864dd2158ed36bcc28e5757e19"],["/tags/api/index.html","511f857173bf364e6a485d2014a63f90"],["/tags/app/index.html","425b6bbbe4d8684c64e4109acc68e075"],["/tags/blacklist/index.html","ccb4bd936fdfa6cee860ef3cbe08cad2"],["/tags/butterfly/index.html","e9e1904eb2f27a11cac2626fc7f9a2e7"],["/tags/chrome/index.html","762bda4f55919031deb366b5b5a5f167"],["/tags/cloudflare/index.html","7bc5a80cf6603df45350c0bc327d1689"],["/tags/cmd/index.html","a0f791731d9678f5d3c1a21a070cbd56"],["/tags/c盘/index.html","0555977aad37d4387b4a23fe941a0cad"],["/tags/email/index.html","bc45da78d2636bfca91c3add27994d6f"],["/tags/ewomail/index.html","1406b5d37414321ff435243ddc0b429f"],["/tags/fiddler/index.html","a4dea1fcc24eb03a001b83b9f0635a0b"],["/tags/flags/index.html","8ff0f48cc8fdbb2360f2e3f3845a407a"],["/tags/footer，页脚/index.html","2b211c5df7e441feb0cb978ab600b2d9"],["/tags/galgame/index.html","17dddd062ba6f5848cdb11397a119e33"],["/tags/git/index.html","6058975f6c2c97b05b077d46ef6eb018"],["/tags/gitcalendar/index.html","3a03899fd064770cf388203cdce85f1c"],["/tags/google-voice/index.html","5dd80fb2bf45d0ba214f8121e8fae0ba"],["/tags/gv/index.html","2b3a9643cdd1be4fe7a18c0e0be87cdf"],["/tags/html/index.html","fbc8ed869de93fa1c6d953dc269e0f17"],["/tags/index-1.html","41d453b63ebfe7fd782db7f7704e5533"],["/tags/index.html","e7e0e519ea8107f1f4288452645768f5"],["/tags/js/index.html","3547568cada9fe1e210654a8abcce13e"],["/tags/jsdelivr/index.html","a6af8f0f6730dc8ab9998e69972ae13c"],["/tags/linux/index.html","6b3593ff51f8f0338814938957344bef"],["/tags/madVR/index.html","2a387b7e6a2b1ba74f97efbc0d3227c9"],["/tags/markdown/index.html","e03d974627a9586613d6fb835b58b70a"],["/tags/maya/index.html","3b20ae52fcd3f86e32d124b64bd877d2"],["/tags/mklink/index.html","3b26a4de576c74e0ff291f33cbcdc7f2"],["/tags/office-e5/index.html","222eea5193f4d5ccf10cf090a2f92df9"],["/tags/onedrive/index.html","50ed8a59f781c2a9c9de2b897146af7d"],["/tags/picGO/index.html","e09c92bd74dea06ec1006dba6ffde133"],["/tags/pixiv/index.html","9f7e72d6b498d265e823a71a41824000"],["/tags/potplayer/index.html","e0fc1bf7456f06e67341da7bea0c8081"],["/tags/proxypool/index.html","2ec14e1dedf44920f665ec74539f992b"],["/tags/qbitorrent/index.html","cdc605d30da148366f23faeb2e431a07"],["/tags/raidrive/index.html","e5fed61401ddf8600d8be5544b22ca0c"],["/tags/screen/index.html","897da99c532152bb7e40e7fc18166aad"],["/tags/speedtest/index.html","08b095e3d843312486e92d3645c8a79f"],["/tags/ss/index.html","d26010469e17dcc5c0279058e97540e3"],["/tags/ssr/index.html","42d62c79522cb7a3e34b8da144dd6721"],["/tags/surfboard/index.html","d45c00606adba2badae70fa0a0401733"],["/tags/tap/index.html","7c0c6cc1874804a28cf1347eb9934a18"],["/tags/telegram/index.html","a5626403b49235e5f36bac57491fce07"],["/tags/telegram代理/index.html","fda2a86a0e4a6dedfca03c70a3304e14"],["/tags/tg/index.html","8b0ba2c9a77d9a02791dbdc56d20a070"],["/tags/tg代理/index.html","ac143b8ab4dd507a7a38f70116a95cdc"],["/tags/top50/index.html","ab634b1c76bfce7c78e6917dd4248357"],["/tags/tracker/index.html","8cd0567d74256facff47b344f270fefd"],["/tags/translate/index.html","69efeb0d8ea276f51d8b6fd93f026be0"],["/tags/translater/index.html","f29635f4b906fdb24c9980a0d68dd249"],["/tags/tun/index.html","eea3708270e5be686f3116af85f11ed1"],["/tags/typecho/index.html","ab25253051778e935c43500d21768b42"],["/tags/v2ray/index.html","e5ff800c926897625586f5df1cafc331"],["/tags/vpn/index.html","e5b17a9bd71e863769098caafed94def"],["/tags/vps/index.html","794853ddca72dd19df56b24a14b3306d"],["/tags/windows/index.html","8d986782077dac6b30f02564bcb309ad"],["/tags/windows端/index.html","bde35d8fec27b2b801f7ee77118df9b2"],["/tags/xray/index.html","29ca5f77539c969b723786624b717254"],["/tags/下载/index.html","b18e3ded1b6c73c155f8ce348f1b5155"],["/tags/不限速/index.html","c92c301403c093732c60f89ff64bb760"],["/tags/个人网盘/index.html","59ce84db69393875362f268ef3e6b15c"],["/tags/主题/index.html","cd9931d7147b4c27b6fa204686da780f"],["/tags/云便签/index.html","df64ae78409dce1d21035a8133182484"],["/tags/云盘/index.html","d359a98087e8d41a7b8a371f70af5811"],["/tags/人人/index.html","0de379044f8d42aef2d8a29ffd2085ac"],["/tags/代理/index.html","dc6263adbedeb85e162ec714c7d8345f"],["/tags/代码/index.html","7af62f4de9023f212968cb30f540faf8"],["/tags/优选IP/index.html","61df1b27e800ad137b670328886efc81"],["/tags/便签/index.html","63b6d2ef6907fe31f4f16eb2f39d87fc"],["/tags/保号/index.html","6518268e80a8faca4c46fcc04391e725"],["/tags/免费/index.html","ebe33c740ceece60d53fb183013e8601"],["/tags/免费节点/index.html","6d683221d22f992b502b9911d9951dce"],["/tags/加密/index.html","3851e0c0b355f02ec3ed949d26cadfbb"],["/tags/动画/index.html","f938db2022009975850a783093aba280"],["/tags/博客/index.html","3b7fd556dbf4d16b6389ae13a1624fe0"],["/tags/历史记录/index.html","534a75ff1029482b26ea66b2009e2a04"],["/tags/压力/index.html","17487faed4f7bd1ad5e12ba4490152a7"],["/tags/压缩包/index.html","8f477f99636ed2ddc1158aa1d6387199"],["/tags/反代/index.html","c5ec5fd43c6d637c480ffe171ab160ad"],["/tags/可视化/index.html","2458e00b87db79688feba9128f678cb6"],["/tags/命令/index.html","703ca18139d600e74c2e7dd811fdc61e"],["/tags/国家/index.html","a7d4d3561fd61a2dc88420cfd6d0aa28"],["/tags/图床/index.html","1eb18403c347f7eb74bde5619313e7bb"],["/tags/图片/index.html","a47522a7a352b0cfd77707162c35cb59"],["/tags/域名/index.html","715e59798853a7fa21a4fbe5d5887a34"],["/tags/多标签/index.html","2e1fa5b44876c0a90efcb2ec4082b29c"],["/tags/存储/index.html","fdce9e8a8508b2072d5ef01d4c683a02"],["/tags/学习/index.html","aa81da3ff3399b95cbbc675580ae8d2a"],["/tags/安全/index.html","61a8b60a8cea2e1affeca936d932ec1a"],["/tags/安卓/index.html","6b3fc02eeb9d1e2d37a5504ab74d82b8"],["/tags/宝塔/index.html","139dab44caec0e80c850874b1ccd56bd"],["/tags/小游戏/index.html","1a865627ef9c216587690c02a0698fd7"],["/tags/广告/index.html","6218d505304ca1840e7a27d287e31408"],["/tags/建站/index.html","286bcd0bc3b31bcd87c32f52f1b847d8"],["/tags/影视/index.html","de9d0c6c16e4e212cd4d34c4f480c20a"],["/tags/快速启动/index.html","a32710d6eac761ae5639228e0f9025b7"],["/tags/手机/index.html","b6c204cd90d5cf740d99b54d6ee827a2"],["/tags/托管/index.html","3832f18ccc2b2d95cc617b0714dd4922"],["/tags/抓包/index.html","6f395a7bcab206999a4dffbedfc0d112"],["/tags/抓取/index.html","122c04ab458db98e575109038594d35f"],["/tags/投屏/index.html","9c0ced0b0e5ffb14a7e89a12b36239fe"],["/tags/拓展功能/index.html","7aa1f06736918d421a4c0906c96c0490"],["/tags/挂载/index.html","49978cae1889983dfdd5e38cdc6f9146"],["/tags/指纹/index.html","1a38b2cedc793c273d03e0c659e5e652"],["/tags/接口/index.html","08cf9b2db473a90a93e30849a65f4c83"],["/tags/提取图片/index.html","3efb5bccd97de58684f1e43c4b7f5240"],["/tags/插件/index.html","b1bc3ea644541a104ed28fbf16bf6e40"],["/tags/搜图/index.html","e0d5aca10a19ff849b852f8191973157"],["/tags/搭建/index.html","bb04bd697b366df43e1140c90306bcd2"],["/tags/撤回/index.html","8301df8048d9650bbb27cb42c0085db4"],["/tags/播放器/index.html","d4b09a864b6b6536a82cf4ccfb495d91"],["/tags/政府网站/index.html","865e569f7e00c8c4b3122fec9b78d4d0"],["/tags/效率/index.html","94237c7bafc3f069ffc83e30f618e9d7"],["/tags/日历/index.html","152d3aaf26e25ac8dcf5c92133775ce3"],["/tags/服务器/index.html","889a3bf7966686baf4054f90919bbc37"],["/tags/机场/index.html","7f4c899be5002b863f49db12d4ce9de9"],["/tags/桌面/index.html","22af3ad1b55482bcd34c1478af4c257f"],["/tags/梯子/index.html","c4b9e71a4a58a765f446b94c60f5346e"],["/tags/检测工具/index.html","557d18b91e27e3add3c391218d76aa68"],["/tags/汉化/index.html","800b15679a713cd473d62f3a294c0ffd"],["/tags/测压/index.html","84543f59564bc8ee07bd3defdc716690"],["/tags/测速/index.html","d9d750597723b1920d77bd148ba084cb"],["/tags/浏览器/index.html","88a61f1a62fee1bba55b0c11063f3aac"],["/tags/清理/index.html","bc6d45f6df544f1b3fc0018d727a8986"],["/tags/滚动条/index.html","3a013c5ab42805cf217dd1597fb0cc56"],["/tags/灰色歌曲/index.html","777c1e36ccc781c81c0d47f566156dd9"],["/tags/电影/index.html","005dcc9438e873917f58d7eb7758b9c8"],["/tags/电视剧/index.html","038787303b06f147955a2fcadb34e427"],["/tags/白嫖/index.html","6d62ec192b8fb8102f3a4501a5c09cb5"],["/tags/百度/index.html","1f901fa16ce163788f932ca3ff2d7a4e"],["/tags/百度云盘/index.html","492bd662121e43c93a8b8e1ec1adfffe"],["/tags/百科/index.html","99b0fd9c4ae876a9844fffa159fec663"],["/tags/短信/index.html","2e3ff6637389831fb9f674dbf00def52"],["/tags/硬件/index.html","bd229c5311a70414eec87275c8cc3cee"],["/tags/科学上网/index.html","ac0e97f9a85857e836a008f4025e64e4"],["/tags/空间/index.html","ca3572859eefd581b84e857287b9969c"],["/tags/笔记/index.html","0ee246f2d5c6bf9a9f8506300ea6d20d"],["/tags/简洁/index.html","d91c8ba117e2f1a239ba73dc7acda88e"],["/tags/简约/index.html","c864c61dd57b3b8dd242fa73494ddd5c"],["/tags/维基/index.html","ec0444ed9440e11bac14760979360650"],["/tags/网易云/index.html","238fa17c85a6c0af46ea0f5c9e581422"],["/tags/网盘/index.html","1f3d6d59844d01a9cebd7ea4ce41ea88"],["/tags/网站/index.html","205644dff27a8f454698b7584c93229c"],["/tags/网络/index.html","0aa632a89f3dc09c4c2feaaa39e3e86c"],["/tags/美化/index.html","f2dc01a7b7327342347cfb6e33bc24fb"],["/tags/翻墙/index.html","287b61508cf18c5b1bf00c27ea87c7c3"],["/tags/翻译/index.html","22e7474cd470e457cd42cbd80d8cf5d3"],["/tags/翻译器/index.html","888fdf07b2ad47b0cd8c2c65cf2ea466"],["/tags/聊天/index.html","346ac4dab816afc419235bb5936e8fee"],["/tags/聊天室/index.html","f3ddcab98f79917f50299e2580cad15a"],["/tags/联想/index.html","2a7bffcf66f3dcf88624379cd9619a7e"],["/tags/节点/index.html","172d1e1e1839cd572391c743a8b41aac"],["/tags/虚拟手机号/index.html","2256accac248ecfbaa389408cfb6e264"],["/tags/补丁/index.html","50873110b7b34726ea4c1d3c383fe2da"],["/tags/视频/index.html","2e0741fc6bc4602a2ec3b484613c75b9"],["/tags/解析/index.html","ccb86a7dbd80a298a32c37acd3ffbede"],["/tags/订阅链接/index.html","10e170c5b92fec6634e309b8bea8e52b"],["/tags/记录/index.html","b4a8e11fdf9048862a315be2a623c42a"],["/tags/识图/index.html","80458c9c8b69a91bfc095938494c6b3f"],["/tags/语言/index.html","9330ace1a2493fc3c3a94b264e7908b7"],["/tags/资源/index.html","61c8a07b98522514b7db4dad522ffaff"],["/tags/资源管理器/index.html","9f36abf2388413478060ba7b9123811e"],["/tags/转移/index.html","508f4b36bc5e95ab5cdbaf784eaeeda4"],["/tags/软件/index.html","851b9d5ce63e766b4df595195d58663f"],["/tags/轰炸/index.html","8a4747be52f92140d704e8f23cfdec81"],["/tags/迁移/index.html","3b689ba6cd511c977a3f3fefb0a1ac1f"],["/tags/远程控制/index.html","d2ffd360ecec407e6d6fefe139f6ff3e"],["/tags/连接/index.html","8b567e99dbfadd84712c4e6cb1a06c5a"],["/tags/追踪/index.html","603e487026683d897c083da938e00c50"],["/tags/速度/index.html","a86304874468f191c82361b079eca92b"],["/tags/邮箱/index.html","fb74f9e7545137f2c8916217fc687300"],["/tags/酷炫/index.html","26d2a27e1ee2b92d063682111b279ec1"],["/tags/钓鱼/index.html","f4a0db645c6b41c25560650cda8e6fbe"],["/tags/镜像/index.html","8143df0f71d8c3c7e86cfb4039d84108"],["/tags/随机/index.html","9f75ad3676a5a17fd8a0928be0601b6b"],["/tags/隐藏/index.html","4df3190f2f09f5a96580024ae541b2a8"],["/tags/面板/index.html","dbc81c97b7a8fc8a718ad20167851261"],["/tags/音乐/index.html","7d4c9f7e1de84d551c8b72c2a9358882"],["/tags/高颜值/index.html","0a75a386cfdee80c9e36e21bca1439ba"],["/tags/魔改/index.html","bb1b6e1269b279603b7e54334026d4fd"],["/tags/黑名单/index.html","716187726922f66bbe170749f04fc7c6"],["/urls/index.html","2f50e1d50087d85640b47482ab843024"],["/vps/index.html","569fb4d276478409a463727054ddd4d0"],["/支持/index.html","32149f0bcaf1b337c8bc217fec772d09"]];
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
