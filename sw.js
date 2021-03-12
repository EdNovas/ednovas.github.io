/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","80e29f4baa9f41e57affcd70e6b5e54a"],["/2020/11/29/clash-windows/index.html","770162628676c2820aa7e68eecc7a9f7"],["/2020/11/30/websites2/index.html","2f97cac626b0ddd184e85c6606c7d295"],["/2020/12/04/iphone4s/index.html","0b207536c1b0183b160c26bbbe7eb10e"],["/2020/12/04/onenote/index.html","d557821cbeb0b94ab8dbdb5c6b27d499"],["/2020/12/04/wesites1/index.html","edf0aedd84e1b07b032a6a3d4b2c6648"],["/2020/12/06/nokia808/index.html","e68e6423a06751d4bdf57d1fd14aee2a"],["/2020/12/07/ipad1/index.html","bc30f23217ce9cd4ec3fd1f233a9009d"],["/2020/12/18/freesubscribes/index.html","cd1cf48a06c28fd75eced7fca00d78f2"],["/2020/12/19/musics/index.html","379073cb166c04066cdd1bd1be1f2606"],["/2020/12/19/shadowrocket/index.html","1add9f92ee7e32a9988540bc6c547a79"],["/2020/12/19/v2ray-windows/index.html","faefa5d0ebeeab0ff6da686a118d844d"],["/2020/12/19/v2rayng/index.html","da0c2844ae5348368a5a55228bb17307"],["/2020/12/20/beoplay/index.html","56f9122eb979f63511842af966683047"],["/2020/12/20/订阅链接转换/index.html","05d36594f64893c9de57cc94f4fb6753"],["/2020/12/21/chrome浏览器下载提速/index.html","42d663dc797b017b8abd68844d580ab6"],["/2020/12/21/免费128线程并发下载xdown/index.html","2f9c41b2785744d12118460aa23610b8"],["/2020/12/21/免费32线程下载软件ndm/index.html","207f5bf6519c7c431e73a786c4b5de1c"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","720b241854498d2fefa423b70cd0cedd"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","b5d976559d3559fb133785b0bb1910a8"],["/2020/12/21/广告怎么知道我在想什么/index.html","5afbf0e578b1a2210dd7f76867a30fec"],["/2020/12/21/无名·引子（小说试写）/index.html","312916451177c7ba5dd75c8169af78e8"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","837cbc97b3e92ca4dd4f7e0f738b1751"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","e96888f19832f9584f6c0663d704f4e7"],["/2020/12/21/高速轻量下载器aria2/index.html","c3bc93d0558f445489534c3d087c7f26"],["/2020/12/22/2020-cee-roo/index.html","ca14e29881234113b2320e6f1b6a4844"],["/2020/12/22/firefox插件、github、steam富强/index.html","bc8bf67fc977b2ea989bf9c265a872af"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","afdac2fca7ad64b1537c7032167d520f"],["/2020/12/26/python-day-1/index.html","2c289be964af89a43be8c46b1b7fc174"],["/2020/12/26/python-day-2/index.html","7d3b5f7157cf3368d6fd7a38dc9857c4"],["/2020/12/26/度盘不限速下载方式一赏/index.html","54d4d175316ba08fda129591d1954076"],["/2020/12/26/添加开机自启软件/index.html","35c23353dc184e7924f39a120ac35d62"],["/2020/12/26/电脑端截图方式一赏/index.html","cc1e2292865dd03193188a186274c7b2"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","0a0d9527898529411f8fe0498f747f30"],["/2020/12/27/最安全的浏览器tor/index.html","eae93fd5dd6edbfe54bf4096f464f554"],["/2020/12/27/网易云刷等级和听歌数量/index.html","ba06fc72885f377d85c219fa9407cc45"],["/2020/12/28/freenom申请免费域名/index.html","98b3daeca35f9272eb9a82bdd6da4c02"],["/2020/12/31/机场/index.html","fbdd4c71464b1a5b39e53afc7c6293a2"],["/2021/01/01/M1/index.html","6c643a5726f80a1c68f85ff66dc1ae2f"],["/2021/01/01/compress/index.html","c7367c924e27335e2ff7e8018c72af89"],["/2021/01/01/infinityfree/index.html","3832d864e2e2101db4518bc1ac9d8db1"],["/2021/01/01/硬核翻墙/index.html","aba2dacaab3ff238ebf3cc34e89168ee"],["/2021/01/02/qq/index.html","f431aebef18fe7da3275fa232c36efac"],["/2021/01/03/netch/index.html","0e3fd0cfa5c59b46b8e8f83e2e25ca22"],["/2021/01/03/waifu2x/index.html","69088f111fd0a6993309ec82754ee37b"],["/2021/01/04/ads/index.html","b2caa6071998cf547d41e5d07b985459"],["/2021/01/04/games/index.html","a144c778d266539039ef0f7d858cd6d1"],["/2021/01/04/heroku/index.html","45151bf90abba54998393c0f31f68c37"],["/2021/01/06/movies/index.html","71c714f5a7d2b8f50c7ace897b465f8a"],["/2021/01/07/google2020/index.html","313fbb1aecef7a2c809f67f16488874b"],["/2021/01/07/lucky/index.html","b9e6e0c8bd979adb4c248304c1fa5f19"],["/2021/01/07/spotify/index.html","c8af5bd6bbee39be821d07021ef00f53"],["/2021/01/07/thunder/index.html","25adfcf14e8fbff25696e65f1b94d76d"],["/2021/01/08/adguardhome/index.html","fa2993bffa76c5738777ba7c34f40c73"],["/2021/01/10/IBM/index.html","5a7d13e59e812e2ff1c87cec395c106a"],["/2021/01/10/potplayer/index.html","cfe87c538299203742dea1316b8242e1"],["/2021/01/10/sakuraanime/index.html","62632683b07f8785d0def9a697fc10f1"],["/2021/01/10/美剧星球/index.html","cdb221b489cbffc3a61a853175f997b2"],["/2021/01/12/telegraph/index.html","42f568c5b40eaf2f414b51839a1fe254"],["/2021/01/14/comics/index.html","8b87cfbcac534fbf8896acf5ae49732b"],["/2021/01/14/ftp/index.html","f87b3226c2de5ed0c4a49ed678da2c61"],["/2021/01/14/oraclecloud/index.html","24320b1f7f5e07ddbfd348b88510a6af"],["/2021/01/14/porkbun/index.html","3daa84781a0df264f82204b0be621aea"],["/2021/01/14/powertoys/index.html","5ad57a6f1023967153505e7865e028f9"],["/2021/01/14/taptap/index.html","cf37292d8a9e400e410a87874a636e83"],["/2021/01/14/ubuntuvsftp/index.html","69ae341029befe8334e09ba6807bb4ab"],["/2021/01/14/小说/index.html","16241875d849b7d7f0adc5cc8cc100a2"],["/2021/01/15/freeproxies/index.html","0420712555d049155d4de06dddc5f29d"],["/2021/01/15/incaseformat/index.html","39720ff1f76c8ec2074d3da16dcfe23e"],["/2021/01/16/euserv/index.html","8ae75cff6443cca95e4048204fd5ea10"],["/2021/01/16/winxray/index.html","87c45a509d56d2174c641af6a37ce57d"],["/2021/01/18/qqreadhistory/index.html","9201b98b79157084b428a9a730bfebdd"],["/2021/01/18/qqrevoke/index.html","7de5d49908ad4e2dce6719844d743b8a"],["/2021/01/19/freevpn/index.html","4cce2d4f28dfff1dff0e61baa8e630c6"],["/2021/01/20/browsertrack/index.html","e9cce754e0f9f2ff9e45c24d52b19ac8"],["/2021/01/20/v2ui/index.html","e86988af34246af99fe0d471fa479589"],["/2021/01/21/failedtoconnect/index.html","c28fd42d64f43357d2aa736339062526"],["/2021/01/21/gitcalendar/index.html","4e8ac3bbbc36fab66a5ed4edd8019b03"],["/2021/01/21/markdownformat/index.html","c0f28c373782ede0a0da1f899211954f"],["/2021/01/21/markdowntable/index.html","2f34925c3e92e9c981fdc052729c3ff0"],["/2021/01/21/vercel/index.html","e828af89ab48bcaf99dc4fbbc741a10a"],["/2021/01/22/hardware/index.html","b4f6c33aec62b72aecc27166920c8724"],["/2021/01/22/muviz/index.html","badcfbda2081d6aa6793ed423b5a7da5"],["/2021/01/22/randomapi/index.html","dd073d43e929fffe110d0b8a69a2ebf2"],["/2021/01/22/searchimages/index.html","1c2b2ce07348cb00fa6741cde3c07026"],["/2021/01/23/RX文件管理器/index.html","5c4f3a63bf417911388354893207db9d"],["/2021/01/23/chromeflag/index.html","1d0e6ff89568bfda00f67c0da0ae7179"],["/2021/01/23/qttabbar/index.html","c50abaaf3e12b1c9ba6fb50ac7a90cf9"],["/2021/01/24/githubspeedup/index.html","cadf436a17ffcd50dbbb1082d9cb58fb"],["/2021/01/24/jsdelivr/index.html","f6889bb14b82dcbe5724aec803f4d0f1"],["/2021/01/25/note/index.html","d89a39c10d032bcc57b9f4e22805b376"],["/2021/01/25/soul/index.html","abad5a48c2835d9dc07ea1a8e8e0ad37"],["/2021/01/26/herokuxray/index.html","4975527487ae300efb57fb7b4598b39a"],["/2021/01/27/proxypool/index.html","d3d739fa1bbd8406a8062453d0e82ffc"],["/2021/01/27/tracker/index.html","0835a6a2aaf0fc35c81707eb5b5c92db"],["/2021/01/30/pandownphp/index.html","39a1a405dd70c70ab698e764fa463d08"],["/2021/01/31/newgroup/index.html","ea6d29eb1f4d650bf5a87604285562ca"],["/2021/02/01/clashlanguage/index.html","994d9ae6254433208a5271324144bae0"],["/2021/02/01/encrypt/index.html","1656cae3592ce944a02213365acc9900"],["/2021/02/01/footermotion/index.html","939dc40fa800ff67e51af49e2af2bd0e"],["/2021/02/01/gitter/index.html","ab72f8f822d9c7c06b2353d15279218c"],["/2021/02/01/pixivtop50/index.html","1464df77368ce34ead21901c00cb7d8f"],["/2021/02/01/scrollbar/index.html","4606d3e85ae06de240dc1ca94ec272f3"],["/2021/02/02/clover/index.html","00a4e1d86c9fa343c31937026be82180"],["/2021/02/02/maya/index.html","8695002fb754e785ca1f233780e46114"],["/2021/02/02/speedcontroller/index.html","1d972c7815569bfc6f9c773ef24b57d9"],["/2021/02/02/yesmusicplayer/index.html","ee7128605ce5c48ea4d44721cbdab0fd"],["/2021/02/03/lenovoonelite/index.html","3331c0ae802cb7dfbbc2ca118eb98acf"],["/2021/02/03/skipads/index.html","baca4949a698f63d7749a2c2e9cee21b"],["/2021/02/04/picseed/index.html","c4ec5da56c5c399b0352678719ab0c3f"],["/2021/02/04/renren/index.html","d9766e1efe9dcbf086e51d90442a5c26"],["/2021/02/04/serverstress/index.html","76757f6140879f12fdb0b0bfd0f871c7"],["/2021/02/04/wikipediazh/index.html","ebd87bd2ea001fcc8cad7126efc20f9d"],["/2021/02/05/googlevoice/index.html","734ad2de52c0c501755c840b178bde0f"],["/2021/02/06/clashconnection/index.html","70086c32e65c5cf24b69da381a01edf9"],["/2021/02/06/gvtransfer/index.html","030da37067ed972993485f26ef5d8e55"],["/2021/02/06/todesk/index.html","2531368a7035fef1110c79e8decc32fb"],["/2021/02/06/vpnblacklist/index.html","d873c7d0c1d997eef38c577187aa8c22"],["/2021/02/07/mklink/index.html","c11378988cf6d3afe9c68a4d2bb053f6"],["/2021/02/07/speedtest/index.html","662dc5486d5e45a227eec6baba69e188"],["/2021/02/07/translate/index.html","ad8e7b8933110984ce51f9026e93f36b"],["/2021/02/08/ewomail/index.html","cf23f491a1f6c6a771b7ba033e0a3f4f"],["/2021/02/10/officee5/index.html","c1b9d8cf6b1f0aeead075437392abfa6"],["/2021/02/10/raidrive/index.html","9ed13ee3a1b01ae543333253eb2e87e4"],["/2021/02/13/e5sub/index.html","9ca6f3797980a39b66dc998156669512"],["/2021/02/14/screen/index.html","5f7797bb7397adf566c77ac7a0c29f70"],["/2021/02/15/clashtun/index.html","30d30cb6e81cdff7ed24f4f61af1745a"],["/2021/02/15/messageboom/index.html","6687baa7bd91eb38a915888b845003ab"],["/2021/02/15/oneindex/index.html","3b5c0fa01e2fb422eb8841e276063b65"],["/2021/02/16/govsites/index.html","ac1fd1ce59bc8f9f67973e3cbb993b5d"],["/2021/02/17/hexototypecho/index.html","49e89fa35fc2f9180437aeeef0904718"],["/2021/02/19/fiddler/index.html","5fe20684d951f571cc1fc36b6049ba29"],["/2021/02/22/potplayerset/index.html","5ca9abca8eb56f7bc51cdb23f19bbcfa"],["/2021/02/22/studyresource/index.html","f78b37740d16676d9f1185ef6d79c496"],["/2021/02/22/telegram/index.html","5cc4b632f3437c6f97955c19a4e73a1e"],["/2021/02/22/videos/index.html","c8b0af2b3c0890dc8ead7fce9b8961a9"],["/2021/02/24/mtproxy/index.html","a26b6f5a00fd098c618a35377efc5479"],["/2021/03/10/catchcat/index.html","85ca9b0819688767bc2108aca10e05ff"],["/2021/03/10/neteasemusic/index.html","cbeaf0e3e9ad273858d6284f30124920"],["/2021/03/10/surfboard/index.html","f9d090337ca848d0a978efb78dd2421c"],["/2021/03/11/vpnandjc/index.html","c7c3f549e3262317a2ea8b959bc614b8"],["/2021/03/12/qrcodes/index.html","330d7d591bbb137145d26fe25818912a"],["/404.html","04b0268c6941d1665def58cdde67e57e"],["/archives/2020/11/index.html","5353840d5b64e285a99479db74e695d0"],["/archives/2020/12/index.html","7661a4777871e3b63af84c786f716030"],["/archives/2020/12/page/2/index.html","29cd29680287b2ccd6dbad74819657ef"],["/archives/2020/12/page/3/index.html","0966e85324c52ca4472d92ac0f926ed8"],["/archives/2020/index.html","20d45c7bfeddd1a0e65214878c0340cc"],["/archives/2020/page/2/index.html","64d60af73fbfa2bdc5e2e057fe5d5ccd"],["/archives/2020/page/3/index.html","0f9ab3fc9c186708e0adf49887f5c1f1"],["/archives/2021/01/index.html","fd8a1eebbda2a58f594879c25fca4b25"],["/archives/2021/01/page/2/index.html","e9e368601572d20ab9b249528a651608"],["/archives/2021/01/page/3/index.html","a187fc7d775d8a454285c861c6f7e3ba"],["/archives/2021/01/page/4/index.html","fd4c4d5277e4bc795b800ccff092be03"],["/archives/2021/02/index.html","dc73d5871c56059803e0ba698bd475ae"],["/archives/2021/02/page/2/index.html","b529e02c1962f237007a3127a057ed86"],["/archives/2021/02/page/3/index.html","116702d84f68012eb4ee372ae2682434"],["/archives/2021/03/index.html","4c2fd5f9a67e688e0359f07b7c12f476"],["/archives/2021/index.html","b434f2de6b39c70d3abca196369a1b96"],["/archives/2021/page/2/index.html","5a2605a36fd4dd47c398cce0a4b37124"],["/archives/2021/page/3/index.html","f8e11b06938c4809be6af018a5d2c07b"],["/archives/2021/page/4/index.html","a21728e0893a21bdfa99cab5ed055234"],["/archives/2021/page/5/index.html","aca58baacd906b0ec2964d8bfeb139cb"],["/archives/2021/page/6/index.html","c01676256269ffc1d440b7297cddc2cc"],["/archives/2021/page/7/index.html","08c0ffa9c38d9dba62e3b2bdb6f9f9c0"],["/archives/index.html","881ac164a46bb03fa8cba966fd32d9b3"],["/archives/page/10/index.html","0af7ff620edc9f4d7dde57501f5b18a2"],["/archives/page/2/index.html","5514bdd5463c5d27b40e5094a3d57d62"],["/archives/page/3/index.html","8d23078b1a267ebc5684ac96c8814e66"],["/archives/page/4/index.html","aa1fa8032e880b4d88a70583762145c4"],["/archives/page/5/index.html","b6e38af7a2ecc9b37c80fe0c7d007b2d"],["/archives/page/6/index.html","1b9eb91c9eb3984cb9a846afe590e90b"],["/archives/page/7/index.html","d0cbf08e42e30382789371f13d94aeea"],["/archives/page/8/index.html","365d66629c1fc63830c030a9d90cfc70"],["/archives/page/9/index.html","7a5d54516d08790da9f6593e6686895f"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","140dcd77a56c79d9eb0468ec0df6b3cd"],["/catchcathard/index.html","e9291c58bce68730cd21cc4e2b0a474b"],["/catchcatimpossible/index.html","ce8ac7a16e2b7990d9e0aeb78de4c0db"],["/catchcatmid/index.html","dc073d912aef351b621ce171416ebd82"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/categories/VPN/index.html","ddbb02c31673b68d82cc5bee8927af88"],["/categories/VPS/index.html","29f2b761fbb2b869e7b653b2819f75cb"],["/categories/index.html","25ca65ea438e3bdfe6615830de2a7718"],["/categories/下载/index.html","de4ab96625b4f311e702506e345f5a8b"],["/categories/安全/index.html","230009068a4174f54bd529feada08002"],["/categories/建站/index.html","52257a83674eeb75030ee8e2247ceb15"],["/categories/杂/index.html","32748462d464868b6bb686d8b8fab363"],["/categories/杂/page/2/index.html","8e35007341dd8378aa0cc373b44af17e"],["/categories/测评/index.html","0ff670c3405f99d1b502ddc0dda23a92"],["/categories/科学上网/index.html","df999709d40ca824fb08aa0ae7a6964c"],["/categories/科学上网/page/2/index.html","4bd154f1ef58c66aef9a40d4d97df711"],["/categories/编程/index.html","b7ac72f05a3471a1d98002ddcfaf529b"],["/categories/网站/index.html","c9f557d26d3855d49e96b3ed79f45318"],["/categories/网站/page/2/index.html","bbb7180fe2c543c395a643decf605845"],["/categories/软件/index.html","96f0567a941882cedaeef548537ef260"],["/categories/软件/page/2/index.html","e8bdc6f5cf4a3341d49dd270024ff59a"],["/categories/软件/page/3/index.html","fab9bd5593853503b1bdcf9b70875d01"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","49eb6dfd31cf3a4142860e929fe5788e"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","437fba0ae96e5b6285d17d6c0909a2ef"],["/ios/index.html","d657f519b421e11cd69eec0c0faa24d1"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","42326d62dc74697b946f9467e9560022"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","cca5de70aa3b3f02bc91375a082801a5"],["/page/2/index.html","be8382c42862cf5ff779d0eb35771c21"],["/page/3/index.html","91df2fe4529a5c7d2fbb3ccb1e86b608"],["/page/4/index.html","6d03476c311efc922f97b94157053027"],["/page/5/index.html","a2486dadc465beed45f6d481da9889ac"],["/page/6/index.html","608f68302d2770b8312fdd4fcaa4884c"],["/page/7/index.html","021e86d733a215979bb64ef46c29d0c3"],["/page/8/index.html","fa9d3d3113a55280f96580c27b75e52b"],["/page/9/index.html","1c168b81ac9461c60244dd6c80425b8a"],["/payment/index.html","af653d083fd016656639e1d7b41adc64"],["/privacy-policy/index.html","300bda96f9f121e4e57d4b9fbfe4c2bd"],["/rss2.xml","dfc81c1174c40679777aca51418084cf"],["/search.xml","dc16ffb53ed405c2357bfdd422c813bb"],["/sitemap.xml","61a97c1a66d15ef6d5d8a50fd787eb4d"],["/sw-register.js","b8e69b5090d6ce8728e0501c39bec403"],["/tags/5t/index.html","b239692cf31d0a18f2e8bdc4cb33caaa"],["/tags/Clash/index.html","ae237d9fcac52977be3fcd9b38cf4e9d"],["/tags/Clover/index.html","d0667e4d740e48d6f32b1aa260fc3cf7"],["/tags/E5/index.html","d13a93e95485f054ade55b790400202d"],["/tags/FTP/index.html","b1c0b9bf3047a399649944a5c50490f4"],["/tags/GitHub/index.html","6032b9d34d9940b141ea000d6a7499f6"],["/tags/Heroku/index.html","3175345ddd32f67b440526d427457d07"],["/tags/Hexo/index.html","3e17f99a38e16a231bbddff1c2b4c433"],["/tags/Lenovo/index.html","31e60c2b5968ceb1367be697827e83a0"],["/tags/Oneindex/index.html","20f802ca5c31ed3a4b08a72b8ae0d3a0"],["/tags/QQ/index.html","94f399a8bb27b46df6b23f829333e4c0"],["/tags/QTTabbar/index.html","1b758b689a5476c8b13806ab0272dafc"],["/tags/RX文件管理器/index.html","1c61729b5b6b5d9f099c531e76494222"],["/tags/Todesk/index.html","45beb26915423ab03990ba9cc99a4c23"],["/tags/Vercel/index.html","8aa464e5ccbee060dbb84c70b8934c3b"],["/tags/ads/index.html","0c297e87cf3c77bd5c9992db2ed839bc"],["/tags/api/index.html","2d09ff71645d9f9d1cd2aad1349293b0"],["/tags/app/index.html","8a97606e763a0e03a4081ec15376b8e1"],["/tags/blacklist/index.html","c14aa77659b798c284d1090ab7e452b4"],["/tags/butterfly/index.html","65f4db50767a9a907018ec8731e959f6"],["/tags/chrome/index.html","669e700c263983a84733b2f7e2182f37"],["/tags/cloudflare/index.html","ba8d41acb8c19b7e673db5a722183442"],["/tags/cmd/index.html","1d39a0e3442eb0f52df8679a265063f3"],["/tags/c盘/index.html","f5ab19a033f5fe71388c48b33fd20d5b"],["/tags/email/index.html","99f579bdaf32a3af39cda1907848b839"],["/tags/ewomail/index.html","8591aad767c9c2f88e86b1e24488d1ba"],["/tags/fiddler/index.html","6e46c04281123ba4b4e622649992f4c4"],["/tags/flags/index.html","55bb4d030aa4ec1f8d9f74ad257f8c45"],["/tags/footer，页脚/index.html","5e0b97dd7d37226d954016259eb69fc1"],["/tags/galgame/index.html","fc9d4be4f4507d001dee7fce3358e90f"],["/tags/git/index.html","893aab8e14c680dcc364468e0c996749"],["/tags/gitcalendar/index.html","beccd5ea6469a6743f5b6a0ef03234c1"],["/tags/google-voice/index.html","2327414587847165fa51b9963067d7d9"],["/tags/gv/index.html","0da6942f3189cd27e9d6867ca4cc8714"],["/tags/html/index.html","6fd65cd9e7f3146ad2a9271b90758d9f"],["/tags/index-1.html","c5673edd355fc69e980bd9b245601c1d"],["/tags/index.html","206c8c57ec435e8a45c6bfbf03d55b5e"],["/tags/js/index.html","979e328a7e092184a0cb4ba9490fdff3"],["/tags/jsdelivr/index.html","02b82edc7638a71416774d84deb3dab5"],["/tags/linux/index.html","81254cd419ca77673b3383091515105d"],["/tags/madVR/index.html","29c8121ea03e352eef7e1f9b8cf8f64d"],["/tags/markdown/index.html","a099a9e58bb3fe579bccd865b6eae1b2"],["/tags/maya/index.html","b8a7d7811fbd052f0245a58af002baa5"],["/tags/mklink/index.html","c8cb31a823c1b1e1e33d108b084f162e"],["/tags/office-e5/index.html","3269364d721c24dc1f0d40fdca4cfb80"],["/tags/onedrive/index.html","6648127b281f474268a419ce53504127"],["/tags/picGO/index.html","62022fcc519541d3ee1deda24393eaa2"],["/tags/pixiv/index.html","4dff202266bff5b524b81e2226601701"],["/tags/potplayer/index.html","68884ae85c3ffd8bb30ab15c5390a4ec"],["/tags/proxypool/index.html","606d93c36a7ce64a88e8bd50af8159ad"],["/tags/qbitorrent/index.html","5272329613a71619e11c393be00b05e9"],["/tags/raidrive/index.html","64ca41e890bf452280396aa88a045946"],["/tags/screen/index.html","aad5f8a34c797a35826ec7276685a5be"],["/tags/speedtest/index.html","7ab6dec782355c352904e950d46686d9"],["/tags/ss/index.html","9e3d4b5ef28287e7e2b6133b0c45c9b0"],["/tags/ssr/index.html","b9531c8048a01b4e721f8e04109eff0f"],["/tags/surfboard/index.html","a04d6dd5d01d282d9975e5c8bfba9507"],["/tags/tap/index.html","e1f8193d1fe390494a5df4cc20504d6e"],["/tags/telegram/index.html","093f4f5087a2a443f3ff62704fac06c5"],["/tags/telegram代理/index.html","12d009f71fb2f7c9c5a13e43fdefded7"],["/tags/tg/index.html","26d8db7f3378394ef01ee4b461aec435"],["/tags/tg代理/index.html","83d01a8cc142d496d50f8f85d35783b1"],["/tags/top50/index.html","42e66ebc7b37924ddc7cf245b4c06a47"],["/tags/tracker/index.html","64e853ca9a9dc43b1898e4871fdbb353"],["/tags/translate/index.html","edfac3d8bc3a1c8992514b889d2f5666"],["/tags/translater/index.html","0cfbc3e9ba4911f4c6d839a4d2954269"],["/tags/tun/index.html","a6d8546b552d78d76a428cfc7e764fd8"],["/tags/typecho/index.html","f72af0d92e57f1c99308913f3604445c"],["/tags/v2ray/index.html","1535090bd566af8957ec4b5511872b41"],["/tags/vpn/index.html","937f0a696a3c3c668a12dcee40f88fa6"],["/tags/vps/index.html","d43444cab248674f4040a8f39f6e82d4"],["/tags/windows/index.html","7081b96e265ff562df8f35096177ae1a"],["/tags/windows端/index.html","b72d65ee1b7cbf11c915440b373d64c4"],["/tags/xray/index.html","5d35973fb9568975195ace8bc7f9690f"],["/tags/下载/index.html","051dfc0ca1bd347b1d3a2b39c806c56d"],["/tags/不限速/index.html","f73fc91dd59be20e884669f46c5f655a"],["/tags/个人网盘/index.html","d4e0e6679c17e71b9bb23f13b7e8d56d"],["/tags/主题/index.html","5257c1de51adbb80cee10124b8a0f462"],["/tags/云便签/index.html","eea1173adefd7b81ea34ca813b105f05"],["/tags/云盘/index.html","d0bccf18061d8f71979e9edf8cc45b42"],["/tags/人人/index.html","0bfc44c83dd7bec1906a5d806e8aae60"],["/tags/代理/index.html","d1475fb03467266d6e5622eb39b55334"],["/tags/代码/index.html","96ec4661d0b144c5b4ab8489e55ca41f"],["/tags/优选IP/index.html","39eb31be3d7f2a8bb80533458e72e672"],["/tags/便签/index.html","d460a8dadeb5820c51fff7494ad88131"],["/tags/保号/index.html","76bc657cdd246187eb757b4c30a5b622"],["/tags/免费/index.html","8eeb68e01ea5af55def8d3bf075ba0d3"],["/tags/免费节点/index.html","f3a319e2902d9a1bcd6e149e3d6c9200"],["/tags/加密/index.html","502abb8df360e2aef61279bde140433a"],["/tags/动画/index.html","f16af7d21a3eb8fc3432fc3b6a9b2813"],["/tags/博客/index.html","4cca477fb1e95978fa3907cade74ba44"],["/tags/历史记录/index.html","966cb1ebed8fdd5dbbdfcb56ac4592e1"],["/tags/压力/index.html","4d35bda35fd80fe5d461d2e7ef0b4a84"],["/tags/压缩包/index.html","07d3dc9c67670e0247bae85a022fc47c"],["/tags/反代/index.html","4e6d16c0fa673a4b60080e6ba8ff655c"],["/tags/可视化/index.html","c5f7068dad55b6953b13322fa2a42c42"],["/tags/命令/index.html","bd73b46f52981f148d10b1211687e2de"],["/tags/国家/index.html","8a112e5e9851711853dbd55b106a5f75"],["/tags/图床/index.html","c59fcfb8562ee0dd2056ecaad69eb1ed"],["/tags/图片/index.html","1ccd4ba9c38c7ea3ca73f415c0395b03"],["/tags/域名/index.html","a467f96b4e9df8662505367e80343542"],["/tags/多标签/index.html","949311bdb2e6caca84994e4a2051d078"],["/tags/存储/index.html","0ca017a5983c649b5869dbbe0c1d42d2"],["/tags/学习/index.html","59df3a4ab29c2bcddedafa608ff10ac6"],["/tags/安全/index.html","5908135139a1d18285dd1c018b946b1e"],["/tags/安卓/index.html","dcd6d6e1f78d53fc274f1c9e905c007a"],["/tags/宝塔/index.html","8eadeeb55acb013b482e20402df2e57e"],["/tags/小游戏/index.html","63fd0b38e620de59b43fb71877a08c9f"],["/tags/广告/index.html","a1829c6386d042fe73d42aa745553d2c"],["/tags/建站/index.html","a2a79e378f79398b86514012c2378699"],["/tags/影视/index.html","3ecba59fa9ed6e968368313089a98a4e"],["/tags/快速启动/index.html","7fe6b24471210dc2d5642385fa4efdd9"],["/tags/手机/index.html","67fe452cb1471bae2126faf324a3ad89"],["/tags/托管/index.html","0f1765537165e9d630761342ff55980f"],["/tags/抓包/index.html","8669fbae80c671b653afb6f610bc7a1b"],["/tags/抓取/index.html","e8c5776c6a4115446c1d51a133d44748"],["/tags/投屏/index.html","714bbc8ba7258e3c606f88a9bd31a37b"],["/tags/拓展功能/index.html","fef84a10adcfaba9ab0fded60953c060"],["/tags/挂载/index.html","e6206ef2ca096c5941cc67014ab82715"],["/tags/指纹/index.html","6385c77aea2c2f2e18732b891c1a8f66"],["/tags/接口/index.html","7a011eff10689739726fb6c18a1c72a0"],["/tags/提取图片/index.html","e37695fe6f33af808f43983d17f8d155"],["/tags/插件/index.html","24825c54f92572b2d5a6b7711514630a"],["/tags/搜图/index.html","62133ff2d7b43990efe6f32b38937b5d"],["/tags/搭建/index.html","7db66c5e88713f94538596705199f797"],["/tags/撤回/index.html","52b1f297ff6216109777617591f73266"],["/tags/播放器/index.html","1d5e136e268c2f1a417ea6f2732af90f"],["/tags/政府网站/index.html","119c4e9e39df5aba86872c7ee946fd97"],["/tags/效率/index.html","b3bc7a1c8598643a4dbb188e56a09ad7"],["/tags/日历/index.html","feaa829cc89c057324ccf0c05111fa18"],["/tags/服务器/index.html","467999452220625c3131623e582599a0"],["/tags/机场/index.html","8f71ca7fbe797c322f113ad52ed2f6f5"],["/tags/桌面/index.html","f47bf5b72e4b64c47a9d0cebac1188a0"],["/tags/梯子/index.html","006d4bbee626737bab3e5541d97ca702"],["/tags/检测工具/index.html","e4158dba5fdbc13fde173528e0d5ca56"],["/tags/汉化/index.html","3717f3953cae4e204ea4e7f98bebe9e7"],["/tags/测压/index.html","63fcebd28b2b77435890d9b0b013dd8f"],["/tags/测速/index.html","ef54a32dabe352bb0b2f96b997c37dba"],["/tags/浏览器/index.html","16f4afa1bc63122811106a74ed4e17b8"],["/tags/清理/index.html","8730f27788f3f91e2812740e6f4fed8b"],["/tags/滚动条/index.html","7b1d0607a88ab97cc7d85d92caa1d9ab"],["/tags/灰色歌曲/index.html","5b8dded2af1b15c3c53a41918f83bd77"],["/tags/电影/index.html","2f3941895e2cac869477ca757a588a2c"],["/tags/电视剧/index.html","08d9771211ada4a2b5f48f82ab16d864"],["/tags/白嫖/index.html","42f28b103b5044f2cd9fb98e73c3240c"],["/tags/百度/index.html","642325fdde9833099c4d5848af5c7520"],["/tags/百度云盘/index.html","43211cece8623447773438e8a77e6e70"],["/tags/百科/index.html","7a45ffdef6bbf565e3b3a138c9d410a5"],["/tags/短信/index.html","6307b6aef4119d4abd06ef675ead4d96"],["/tags/硬件/index.html","b333c5ee316fe2f35390315ecaa56f5d"],["/tags/科学上网/index.html","45d08973474bc4a1d8112c0888fc1f28"],["/tags/空间/index.html","134d542d0f39b9de5d4eed7acc18ef2d"],["/tags/笔记/index.html","3de89fdee84cfd80a6626e48c29d451d"],["/tags/简洁/index.html","737314035b14a76fbff9340a71dadcf2"],["/tags/简约/index.html","5b26993ede00aec55ec689839295f71d"],["/tags/维基/index.html","7ddafa3bc6c415b392f26354e4225516"],["/tags/网易云/index.html","32ffc1e067e3f39a5bb262298eb8d4b6"],["/tags/网盘/index.html","3c098aee703e1683ced0826841143032"],["/tags/网站/index.html","b80edb9d3824ceb3d3f03b2e46c0fac7"],["/tags/网络/index.html","a8bbc51184118472e93047b33b1a917e"],["/tags/美化/index.html","7436ff7e967fafb30625c75872d76a2e"],["/tags/翻墙/index.html","8ab9ad8f7f43903c2450a1a6524f4139"],["/tags/翻译/index.html","4b1dcef2e7c394c0398fafabb7dce8cd"],["/tags/翻译器/index.html","5e6add47932c2faea8f1f938eb122525"],["/tags/聊天/index.html","87577a3868bb8663420b8d78523e5645"],["/tags/聊天室/index.html","f19b0039734cf8e6f74173a2cfa3b231"],["/tags/联想/index.html","5ee5563a12350131bd1858757244e3f1"],["/tags/节点/index.html","e11d94f3a40c8f23efc120c4432278c4"],["/tags/虚拟手机号/index.html","c7985eadf0ce94991deb38edc6461ada"],["/tags/补丁/index.html","1d1b57ba356131d0a7602ad6897e746b"],["/tags/视频/index.html","31b2c887ae2d8034bcd9b8849256661c"],["/tags/解析/index.html","1429fd0a8e0266561bf18ceb38fb90d1"],["/tags/订阅链接/index.html","90429f3a78ac61a333e2b43508815bc5"],["/tags/记录/index.html","dfd973b785cc2b52129f8a8f31fa37f2"],["/tags/识图/index.html","3c641efe8f95494a355b815261119434"],["/tags/语言/index.html","3404bf194202ee67adee85c2b6792d7d"],["/tags/资源/index.html","dfec5f369c0fb257702a1590c54eabdc"],["/tags/资源管理器/index.html","c5fa2df65750bd90bc48b2a1444c192b"],["/tags/转移/index.html","6293803a9fcf68c867bcece78ae0d1ed"],["/tags/软件/index.html","d204006f6a9d80c29570e3a8a16768b4"],["/tags/轰炸/index.html","1ef0fb47da85e9b38a1f5368f9832b9f"],["/tags/迁移/index.html","b4e0e5f401c842e00b1ad3e33de5f72a"],["/tags/远程控制/index.html","aff9e4dea7910b7d6c72c2eb0a631ce2"],["/tags/连接/index.html","e07cbb302444be4889345e6bad8b617e"],["/tags/追踪/index.html","ba38416718d6f4e1384e3a81a639d40e"],["/tags/速度/index.html","9008784906b893000577f5576bb6a872"],["/tags/邮箱/index.html","ad026ae1e3faa036cc6720293e6f347c"],["/tags/酷炫/index.html","959c859d93b607264affa4f16bee0492"],["/tags/钓鱼/index.html","dcb3597c1d923ff127dff68ee02bffac"],["/tags/镜像/index.html","1c19344a65ad7315f1e218699c13af63"],["/tags/随机/index.html","3474f584a8c772f5253a9ec200e0d805"],["/tags/隐藏/index.html","ecb529ad4c1ce6e8740f5768d9f23a0d"],["/tags/面板/index.html","44cf1d3f54f3967d118f85ddb25fb76f"],["/tags/音乐/index.html","9e02f045b841eccea97565dca4d72f31"],["/tags/高颜值/index.html","ea4d1f706d7ff8f8c0ecaa554878b58f"],["/tags/魔改/index.html","f08711107c189935ebcf09d405d4ff92"],["/tags/黑名单/index.html","588356d6e896cc8ca1149332dcc85082"],["/urls/index.html","ba39e3701f7e1666e782d15c3507826d"],["/vps/index.html","b5f4cf1e42cef9dccf151775f09b53b8"],["/支持/index.html","c406bb1f91662fb2694acbaa4cb753b3"]];
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
