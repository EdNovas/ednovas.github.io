/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","1433e25961be0d0c34e07d4736f126d9"],["/2020/11/29/clash-windows/index.html","2e31e1107cc4e0b7c50a7604f8f336f0"],["/2020/11/30/websites2/index.html","4bb7ab4cccb09e122f8428f6802a8fce"],["/2020/12/04/iphone4s/index.html","62d5f175b14970c9bf3e01c7392e139e"],["/2020/12/04/onenote/index.html","16c42a0e88453ab9f6d324b9c25d4dee"],["/2020/12/04/wesites1/index.html","b9fed93ab705c39a90bbe96663b7176f"],["/2020/12/06/nokia808/index.html","bb2561a68aa61af003f7cb6fc94814ee"],["/2020/12/07/ipad1/index.html","1a48e1a2795ca12390f46a98a8c0aa19"],["/2020/12/18/freesubscribes/index.html","9b980e98729ce15cefb916259027195f"],["/2020/12/19/musics/index.html","3933b744b05a564619e5557ea984a34c"],["/2020/12/19/shadowrocket/index.html","c7a1d853df01849cb9c45724c62d1976"],["/2020/12/19/v2ray-windows/index.html","28a13b940883cfa5ffed570c93f1480e"],["/2020/12/19/v2rayng/index.html","7530d871b56e3ef98c5ac1504d1641bd"],["/2020/12/20/beoplay/index.html","cb845c3a885b8b5953773616f088ba8f"],["/2020/12/20/订阅链接转换/index.html","b09934ff5223fecefd0513896ffc6157"],["/2020/12/21/chrome浏览器下载提速/index.html","c0cafba978607130dc5e10c4faece10d"],["/2020/12/21/免费128线程并发下载xdown/index.html","c92efa51782404f3605115fd999fcc0d"],["/2020/12/21/免费32线程下载软件ndm/index.html","72c347b1889782bacaa6b61afe11ff87"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","a2c62c3fdc8da756f671ff74ede9a680"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","89a54031fbdf4003fc82e9f15cf979df"],["/2020/12/21/广告怎么知道我在想什么/index.html","080615b75c45a6f49073f4c2b1390e13"],["/2020/12/21/无名·引子（小说试写）/index.html","216e6749dd33029da14947165bed32a1"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","002d78f98933031945fad8f6043a7499"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","1030d742162c705e6836c9d242198f1e"],["/2020/12/21/高速轻量下载器aria2/index.html","6a8f1446cf39d32a8ef9655528764ed1"],["/2020/12/22/2020-cee-roo/index.html","77a1cbfabc4ba254cf1c398478b01a67"],["/2020/12/22/firefox插件、github、steam富强/index.html","1fa047a49c789d683fd9f0fdbeb65aba"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","109bcf769d817d9d75186b9409b99d8f"],["/2020/12/26/python-day-1/index.html","8e8c010dddd47647ed05da3ee36b6560"],["/2020/12/26/python-day-2/index.html","026e01c1e487c16af7bea1314664de6f"],["/2020/12/26/度盘不限速下载方式一赏/index.html","38fb291e064b0552a60ff94e0f3c967b"],["/2020/12/26/添加开机自启软件/index.html","5dd5a7f4ea809dac55eac39b752831b6"],["/2020/12/26/电脑端截图方式一赏/index.html","0f4fb77d08c5f0e43d70a948fe564249"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","e8b4ed47fb258ea5654cc352ac02117a"],["/2020/12/27/最安全的浏览器tor/index.html","5be03766210c4b357b789e78f20eb6ca"],["/2020/12/27/网易云刷等级和听歌数量/index.html","9832645098b8d4d9155837b7887639eb"],["/2020/12/28/freenom申请免费域名/index.html","5c18767996a72648f607419fa17a8af8"],["/2020/12/31/机场/index.html","6913f5d6e82988bca2541e43f2142498"],["/2021/01/01/M1/index.html","03eb0ccf4900253beed5d1768543de19"],["/2021/01/01/compress/index.html","107a8f97461983ad6d233384d64d24c3"],["/2021/01/01/infinityfree/index.html","801151c91ecbe8b49bb0fc92d21c3505"],["/2021/01/01/硬核翻墙/index.html","bce96f582b2b1bf04786b9e7b0fe2d36"],["/2021/01/02/qq/index.html","e28d1f31a317765220fcc1090f17dbe8"],["/2021/01/03/netch/index.html","3ec1309516a75f0e527d62a505684a72"],["/2021/01/03/waifu2x/index.html","e66e1edf9dd0dda25328a917ca84b317"],["/2021/01/04/ads/index.html","387c35a45557434ccc26c7fac8d5a425"],["/2021/01/04/games/index.html","bf7f81dd43727a96b2103b4039777dde"],["/2021/01/04/heroku/index.html","754a4483ede7823bb3547938952591bb"],["/2021/01/06/movies/index.html","4535bf78feab3bd2ddb4a9d07aee561c"],["/2021/01/07/google2020/index.html","ee6455991955eeb0d1ae8d0cb8964b72"],["/2021/01/07/lucky/index.html","7596ce59573b4a1f8b3aaa68e6f3ee78"],["/2021/01/07/spotify/index.html","40afe2b0093eba100556b7c7cfc671ed"],["/2021/01/07/thunder/index.html","7047d3c1921e9c4436fddfac4b5f57d8"],["/2021/01/08/adguardhome/index.html","0e11a25be5fd79af8d4f89a7461f5d6e"],["/2021/01/10/IBM/index.html","ddc7f6acc29b15fd3311fa2153665099"],["/2021/01/10/potplayer/index.html","6e3aa9e739276f7a25ca3bd12bc91a0a"],["/2021/01/10/sakuraanime/index.html","7d25f0e8cec775b4ad52e805836d1caf"],["/2021/01/10/美剧星球/index.html","43c512816738274c96bd813fa89c6c41"],["/2021/01/12/telegraph/index.html","25f6d7e63aa69532221a5a9eaa0e88c9"],["/2021/01/14/comics/index.html","2c9ddb0d63ea43ee27784ddf53eac383"],["/2021/01/14/ftp/index.html","0f2a31ed8621732fb7f2bb2471af2db6"],["/2021/01/14/oraclecloud/index.html","23ee6d27d8dd1b70fb64c76c163ec01c"],["/2021/01/14/porkbun/index.html","130af00c3c812c610c45ae398f277068"],["/2021/01/14/powertoys/index.html","4285b0dd36275569e52a37c6ce5ef1a0"],["/2021/01/14/taptap/index.html","7baad45bafb77dec50626198ddfc7cfc"],["/2021/01/14/ubuntuvsftp/index.html","ee828a9a96cad506f25bc00bbac24d87"],["/2021/01/14/小说/index.html","5b47eafaed8f445df3df41686787aec3"],["/2021/01/15/freeproxies/index.html","d30ee314681779788c58a3c0382ee52f"],["/2021/01/15/incaseformat/index.html","5e95107a948f1ba0490a8341e9b89983"],["/2021/01/16/euserv/index.html","9cfc39daf614e3cece1b4cfccc76f4b2"],["/2021/01/16/winxray/index.html","833f64ec6ef6412b9a0f22844ee1f453"],["/2021/01/18/qqreadhistory/index.html","4b918c0425de1de75e2234eeccf091ae"],["/2021/01/18/qqrevoke/index.html","51006f4751c77182e1ea85b352f72478"],["/2021/01/19/freevpn/index.html","0af7921cddf4a3dc3efad4a9f8a43b28"],["/2021/01/20/browsertrack/index.html","1d8781ab29f7c8366880ebd8d11e93eb"],["/2021/01/20/v2ui/index.html","1072083b98475a9add6227db0ec44402"],["/2021/01/21/failedtoconnect/index.html","762fca61785d11405214db29fff85017"],["/2021/01/21/gitcalendar/index.html","88538ac15f8b4d1bd88e0773787c71f0"],["/2021/01/21/markdownformat/index.html","c335b0c6dd089adc3ee2710169eaad53"],["/2021/01/21/markdowntable/index.html","874fd6a349eddf651d125269222b993e"],["/2021/01/21/vercel/index.html","19fca77d9f8d83a3fb94669171a82544"],["/2021/01/22/hardware/index.html","b1c1a4a02b1841848107466e6c145b75"],["/2021/01/22/muviz/index.html","1be3664fcf2bc7376447ba67628e2f94"],["/2021/01/22/randomapi/index.html","f34363a57c472b4f2fff1350b404c6f6"],["/2021/01/22/searchimages/index.html","1c0f183ee7ff76f352bbc82fbb299d0c"],["/2021/01/23/RX文件管理器/index.html","da6d5950faeabf5b09ade70b7d473590"],["/2021/01/23/chromeflag/index.html","31544fec06b706a2750dcffe7713927c"],["/2021/01/23/qttabbar/index.html","0b1c0de44ef73313f1c3a4c556d78c0c"],["/2021/01/24/githubspeedup/index.html","a93fbab6a3e262786479d30385355f9d"],["/2021/01/24/jsdelivr/index.html","6d3c5d5d30315a17f281250410253a65"],["/2021/01/25/note/index.html","b8b6f8f0df8b91361fd376bda41f99f9"],["/2021/01/25/soul/index.html","8f6ce66f9962ca90b3fee918dc2389c9"],["/2021/01/26/herokuxray/index.html","b7597da8f7f2896ae151160a42ef172c"],["/2021/01/27/proxypool/index.html","97876296637a929d6f93078c91d38efb"],["/2021/01/27/tracker/index.html","fa35f6d4841dd72df57292ca583bccfb"],["/2021/01/30/pandownphp/index.html","bd73ca354517c06cb9e2e01f583f68fa"],["/2021/01/31/newgroup/index.html","2255df98fd3f9825bf2c090429d93425"],["/2021/02/01/clashlanguage/index.html","3bece0c237d939f6ef6073b8985a1176"],["/2021/02/01/encrypt/index.html","adbae7b37ad5657aeb3e13453d6d4414"],["/2021/02/01/footermotion/index.html","1aa4424be56cadb5aa955f72eedbb0df"],["/2021/02/01/gitter/index.html","5cffab0eb6ea1a482150d693aefa15b2"],["/2021/02/01/pixivtop50/index.html","beb40b5c807ffb86aa279fb357e1a1d9"],["/2021/02/01/scrollbar/index.html","5111ceda6c79c018b3052f4a44af6672"],["/2021/02/02/clover/index.html","497629901d930f2526be18f49971cdd3"],["/2021/02/02/maya/index.html","1b294cf3221022db5b71b263be88d5d4"],["/2021/02/02/speedcontroller/index.html","708053f936376311c345c63619ac45cb"],["/2021/02/02/yesmusicplayer/index.html","357a67b95691aad508e40259867c2248"],["/2021/02/03/lenovoonelite/index.html","2d084be1ab4c63b1e51a9afefd920d83"],["/2021/02/03/skipads/index.html","35f34ab3b31136d41477533cf95ab336"],["/2021/02/04/picseed/index.html","dec97b103f8f05d04182b6f2740002ad"],["/2021/02/04/renren/index.html","dbe98cea9d622e864135802e650d1fa8"],["/2021/02/04/serverstress/index.html","14083609d1f123998cfbad37021e9735"],["/2021/02/04/wikipediazh/index.html","55cf169804c4a07bc1877d53f0e78306"],["/2021/02/05/googlevoice/index.html","57964770e069659b9c200d98bf802b23"],["/2021/02/06/clashconnection/index.html","75554db1e0d8549dec8f8924b3a88838"],["/2021/02/06/gvtransfer/index.html","f104dbc7161da86b384a79e07f23dbe3"],["/2021/02/06/todesk/index.html","893489a327d8a18f0ed9fa5ec378ee88"],["/2021/02/06/vpnblacklist/index.html","205f7c4e3d770ece81bd8536a44dc4cb"],["/2021/02/07/mklink/index.html","e6d7e6edbfa1797061b22e0f6ddd6b2e"],["/2021/02/07/speedtest/index.html","6550e489281dce292db71c6e32a1f5d3"],["/2021/02/07/translate/index.html","f45cd49817a2d6b0d8bec53a496a6e7b"],["/2021/02/08/ewomail/index.html","7470ada5ee69ea052642864a6de91e7f"],["/2021/02/10/officee5/index.html","92c3f35bfd91cb88f09c0a176f9fb6a5"],["/2021/02/10/raidrive/index.html","f17ec5aaa30629e742a9f6405781212a"],["/2021/02/13/e5sub/index.html","bd6463a9c50972b3a4ade907c682ab62"],["/2021/02/14/screen/index.html","904ebced12ee4d24e545e47b9762bcda"],["/2021/02/15/clashtun/index.html","b417ad888c87368f80e19b2e07d533b4"],["/2021/02/15/messageboom/index.html","ed6e9b02aaa625525aa3edd4a5adb5f4"],["/2021/02/15/oneindex/index.html","e6d11d35f8b5051c7072bbec4ce42c33"],["/2021/02/16/govsites/index.html","15679e26839a58db2b52b70d7c0aa68a"],["/2021/02/17/hexototypecho/index.html","95016b07edc09da7ec8a9b57a94ef547"],["/2021/02/19/fiddler/index.html","fd1d9f35ce32d1dddb2e888d47bc0ab7"],["/2021/02/22/potplayerset/index.html","bf1fe269b886b81a72316adaac9f806d"],["/2021/02/22/studyresource/index.html","2453c18df1a2d6cd105241bc9b0a23c1"],["/2021/02/22/telegram/index.html","0146c15ff4732916d594682c2fe6a448"],["/2021/02/22/videos/index.html","f4dedbc9f9fff9d566205c0fdd3f7988"],["/2021/02/24/mtproxy/index.html","838140fe9fb64e1584b8f82762e6f3b6"],["/2021/03/10/catchcat/index.html","697b1df6563ba2c87e348f1d4977cb96"],["/2021/03/10/neteasemusic/index.html","c4371ddc95cd599ad4e22752e20f916c"],["/2021/03/10/surfboard/index.html","d39d86c7d6abd82bf8d27408d56aadf0"],["/2021/03/11/vpnandjc/index.html","c224a26119866a28195c96f73fd0b3e3"],["/2021/03/12/qrcodes/index.html","4770e76dc5530654184a70570f16dfd3"],["/404.html","302488f3169ff184e4f0af1902c14767"],["/archives/2020/11/index.html","32da72bdf8d3e8b11145661491e95894"],["/archives/2020/12/index.html","d30c4af39e6674ddabd6174a0ebf7666"],["/archives/2020/12/page/2/index.html","1a4dc3862cf0e8ff1427be88c49f323e"],["/archives/2020/12/page/3/index.html","90af899e832eedbf7a91a6fbf17969fe"],["/archives/2020/index.html","0da4243da4f37fe6a4453c9e9081c48a"],["/archives/2020/page/2/index.html","64606acac58b52ec997ad59a3844b0f0"],["/archives/2020/page/3/index.html","343acec2992024383a39a9db831bfd8c"],["/archives/2021/01/index.html","14e06dae97c43ada7ca9931d6ff4ebae"],["/archives/2021/01/page/2/index.html","99c7aecf70a4e0989e2dace0ae010aa6"],["/archives/2021/01/page/3/index.html","54042485ac0dc84a98fd3adf5394840a"],["/archives/2021/01/page/4/index.html","4de791ddda40f315a623b889eb0c3250"],["/archives/2021/02/index.html","4e8fa987183200f55d8cd6f97d0ad3f9"],["/archives/2021/02/page/2/index.html","741f72a422d8bc6e8ccac799a82c582a"],["/archives/2021/02/page/3/index.html","1ca32050362aa08ebd9eb513dd7751dd"],["/archives/2021/03/index.html","9671578366e605db429fdbd39e26b9df"],["/archives/2021/index.html","f95b9756e5e19d2945a783a1ce98ab55"],["/archives/2021/page/2/index.html","5a8e44aece10bb0bcf092e29dd8cf85b"],["/archives/2021/page/3/index.html","a2129c87da2eabb3533ef6281590ba7e"],["/archives/2021/page/4/index.html","0f31bfd1b366fd0478280fd01c10d456"],["/archives/2021/page/5/index.html","1bcecee79ce38032a948bc2fe960c336"],["/archives/2021/page/6/index.html","8a5a84d136a401c08b00594fd9ad196e"],["/archives/2021/page/7/index.html","6d1cc43b39117ca6708d116e927cb7ec"],["/archives/index.html","b7a12c70571b8320044adf1bb5f8251e"],["/archives/page/10/index.html","0645f9dbed2c18bed276f100e5a3da69"],["/archives/page/2/index.html","c23a9806ada63697b84b082db69fdbda"],["/archives/page/3/index.html","a22a8b67a2dee5d61600403084e1aba6"],["/archives/page/4/index.html","dfc43b452374820621926b167382a23a"],["/archives/page/5/index.html","3688644a3c7b3c6a2f0b8a3de075a7bf"],["/archives/page/6/index.html","4c351589240c5750572f920163f1124b"],["/archives/page/7/index.html","0f2466c8195f207e4395a01615f96111"],["/archives/page/8/index.html","7375460c1093876a03661723226e4e74"],["/archives/page/9/index.html","f35d183bf7d37511e6ad7ae2383066df"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","140dcd77a56c79d9eb0468ec0df6b3cd"],["/catchcathard/index.html","e9291c58bce68730cd21cc4e2b0a474b"],["/catchcatimpossible/index.html","ce8ac7a16e2b7990d9e0aeb78de4c0db"],["/catchcatmid/index.html","dc073d912aef351b621ce171416ebd82"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/categories/VPN/index.html","4d5f715c6e7172f8ed33514acb076f4f"],["/categories/VPS/index.html","a4397c78bd8e742d2e82eccb6ac284fd"],["/categories/index.html","68b7c153b8c067a7910897c6eb4036f9"],["/categories/下载/index.html","bbf88fb9e0dba9fedd9e76de37cbf998"],["/categories/安全/index.html","4b3ba6daf8c789807f5d03e0a70bcad3"],["/categories/建站/index.html","e9a722d13cc7e212accffe09a1233786"],["/categories/杂/index.html","7448330e218aabe1353fe203b2aaa38c"],["/categories/杂/page/2/index.html","1f78f3eb9bb23634a309458e2a0b9b69"],["/categories/测评/index.html","7dc43e4c4122c0dbb4cc81d5a8eadfd7"],["/categories/科学上网/index.html","2698c4d9454c29585961ff07e06857e2"],["/categories/科学上网/page/2/index.html","99e323586548fe1753ed23b8d3d871d1"],["/categories/编程/index.html","999121555ac5d87224cbf5c8510a4b08"],["/categories/网站/index.html","6b0f81d5928922dff1302d0f6fdeb5c4"],["/categories/网站/page/2/index.html","5b2dbecdafaa94331f49287ce41d8d6a"],["/categories/软件/index.html","87fe849c89594dac1f5729a56b8a75a0"],["/categories/软件/page/2/index.html","919020c5f5c0358c473c4659aab32072"],["/categories/软件/page/3/index.html","60b154dcf5aa31cf4d73eeecdae2d9c0"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","13f8f7e3e048b48bf8565c8dd004de4b"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","d6d170ff3bdb30ebd478a83b7d2651a5"],["/ios/index.html","ae42df1ac257fb0d71ed7a155ffd16a1"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","bb49c47d5bb165d73a5c704b6bfa304c"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","3b64f24d966a419ed1f02ed4083c78d3"],["/page/2/index.html","27ec63ca5640bf81d54ca75701e23e20"],["/page/3/index.html","66a8f8b5c6e03f10494cae9d38cf593b"],["/page/4/index.html","f0d0a9cb216f634b41d2e0b15a969090"],["/page/5/index.html","0d226528794e8bed506fee34efd6614e"],["/page/6/index.html","ad0abdbba340bdf8a359c4cc987cbdcb"],["/page/7/index.html","1b3967091c843ea896f702a35a30bf0b"],["/page/8/index.html","cb9fb8226e43f89127cda2869df32ac0"],["/page/9/index.html","e7189199d275f8c4c52e83e318ed54a1"],["/payment/index.html","067dace4a2689ab26d9944e1f761fad0"],["/privacy-policy/index.html","be422a4ab0acff29d99612f5bccaead0"],["/rss2.xml","dfc81c1174c40679777aca51418084cf"],["/search.xml","dc16ffb53ed405c2357bfdd422c813bb"],["/sitemap.xml","61a97c1a66d15ef6d5d8a50fd787eb4d"],["/sw-register.js","dbdbe9ef16c4d0e30ef3dcf0b6197af0"],["/tags/5t/index.html","3c1bbda1a06db067b55a7733807f84c2"],["/tags/Clash/index.html","ca261f442e255a0680b4f686bb07997c"],["/tags/Clover/index.html","5e5b11b5ae8800b8fde592069fc6f29d"],["/tags/E5/index.html","037ef33fb7ded462ea0caf1a02595f4e"],["/tags/FTP/index.html","c74b1b5313fdd360deb3401d6f006c5d"],["/tags/GitHub/index.html","51573f29b4570bd734a5e0385bea15a8"],["/tags/Heroku/index.html","ce6be925f6fc5616dacbb637596b5262"],["/tags/Hexo/index.html","0ef16488fea999277e7c96c6f4ddbaf6"],["/tags/Lenovo/index.html","c0eebc3f073c6bdd9b7166d6e629a8ab"],["/tags/Oneindex/index.html","63acf2f441acd35196f2061f532d3e06"],["/tags/QQ/index.html","035f330cf2a4dd39fbc4399fb4a7160a"],["/tags/QTTabbar/index.html","62063bc8b5c91fba5c54597bcca2b308"],["/tags/RX文件管理器/index.html","8d4aab0dbe123b8b2d1f2471c2aeaebc"],["/tags/Todesk/index.html","17061ab266be30a0c45b1d70fd2929dd"],["/tags/Vercel/index.html","2fca2304f70ad1fa01c42f4795eb47b6"],["/tags/ads/index.html","2c8950b4e9ea4cbe44557d0190902fbe"],["/tags/api/index.html","c57404ff837639e7accce65b78e35e06"],["/tags/app/index.html","bf8f20b4f98bccfc62fa0f147bcf5340"],["/tags/blacklist/index.html","8e388a7349cf79b880d2f2345bc24a05"],["/tags/butterfly/index.html","ab6474ee062b0e1efc34909517aa7a1f"],["/tags/chrome/index.html","0f2afcdfc0c4e587ee9833796ba2b435"],["/tags/cloudflare/index.html","f8cd4701e2f52e8abe39e3d424099595"],["/tags/cmd/index.html","c1e0411e8273aa43d7af95c42f70e205"],["/tags/c盘/index.html","f0eb6d362f98903c96825dd778d861d4"],["/tags/email/index.html","faca10730cf8f2382d0cf3af9fc555ab"],["/tags/ewomail/index.html","59005b2311fe5f456dcd731c36cdfedc"],["/tags/fiddler/index.html","3c5d4b04aff7ff1b16285d37c8713234"],["/tags/flags/index.html","26f5018e4b9ddd7aff50e4f67f6e2f45"],["/tags/footer，页脚/index.html","8063bae5759e997c6215091e046f948f"],["/tags/galgame/index.html","2fba6504cb27ba8df90256fb609a7452"],["/tags/git/index.html","c46a2c28c0599f39cfa08d842d5bc762"],["/tags/gitcalendar/index.html","ea91a15e312b5ca8e97d1c7a99fd29fa"],["/tags/google-voice/index.html","e5e634ccd4c92850b8b0f0084ecda8c1"],["/tags/gv/index.html","ef0d28477fed346ee86a3e7be7eac016"],["/tags/html/index.html","95496003bfa54d2a78e5cc5f5c2f91f6"],["/tags/index-1.html","165183b6621f633ea2ac4566f8d42be8"],["/tags/index.html","8b771f021725d7cd55eeb97209445744"],["/tags/js/index.html","67bc62225828da1a0515177034efaa64"],["/tags/jsdelivr/index.html","07e6a93ef6c86dc9552cdd492c935d7b"],["/tags/linux/index.html","aad6293b3e8e2cf22104a6f93b3a0684"],["/tags/madVR/index.html","815ce1b55ed35562bb9ba356f2bea8e7"],["/tags/markdown/index.html","abd787a16654571d8a0f88538e21a039"],["/tags/maya/index.html","944d6b21b158e9235fe22c56a9a59de9"],["/tags/mklink/index.html","9d661cd1d5fcd5e471facc0beabf41d1"],["/tags/office-e5/index.html","657ea949310cb9a15c3d5320493db4ca"],["/tags/onedrive/index.html","483d7e11226b8c87b21ca4c1d77d8c1d"],["/tags/picGO/index.html","759195d0391cec9e226d23e9826598d5"],["/tags/pixiv/index.html","02852859e36d557d5e6a5878f630a822"],["/tags/potplayer/index.html","be58fc199c1a265d92e40d75ac37fd65"],["/tags/proxypool/index.html","06a95338b111605fa83137a9bad0c527"],["/tags/qbitorrent/index.html","49688bcad4d6285b5c7a8c77570e2ebb"],["/tags/raidrive/index.html","7ed81b699ac23d50d0f62b25880ef2e5"],["/tags/screen/index.html","bdebff04d8384d935dd7fae064576dd4"],["/tags/speedtest/index.html","66c9619f9cad1eea8580b2b570928edc"],["/tags/ss/index.html","20147bff1bab9579678226f158e23c3d"],["/tags/ssr/index.html","b4a2cf0a87640b372cc2c69e0a1abb6d"],["/tags/surfboard/index.html","0f017db847ba282b0076ce0a3b78666a"],["/tags/tap/index.html","cb8421d2817f7c9a29af80329f14d9d1"],["/tags/telegram/index.html","d87ebfd12b010af5ad82926fe99eddaa"],["/tags/telegram代理/index.html","7bcea777286987708caaae69f7e00fc3"],["/tags/tg/index.html","47d133dfe209b746f60cb6e22029b745"],["/tags/tg代理/index.html","eb29322baf9e6d07cc2f5ab5675b000a"],["/tags/top50/index.html","6552b4071b50085608f3607d3d3ddb80"],["/tags/tracker/index.html","4aa7e758e9cab97a01b67f71544288bb"],["/tags/translate/index.html","005904f9a0254d68e9c558ac068ccf75"],["/tags/translater/index.html","b05086ab6132ee1a5ed8362a19e527c3"],["/tags/tun/index.html","e4cccfc51a35ffb813570330f327b5ef"],["/tags/typecho/index.html","7a032f139781ed31f88bf091ff1c1c29"],["/tags/v2ray/index.html","161cd63e141ba7b4f3ac97b30d1c787c"],["/tags/vpn/index.html","b729b4dde6447bc07d455c1727ab191d"],["/tags/vps/index.html","4bdca5218742fb2c0a9e1691141413eb"],["/tags/windows/index.html","e93e4d553c79e4da57657f81f4aa8edc"],["/tags/windows端/index.html","655730a2d3903f26f1e6220a47cd9b47"],["/tags/xray/index.html","7b029f49685cc03525312a3ac0c3b5ab"],["/tags/下载/index.html","8331226624c9e69410c85bd4f9fda5e9"],["/tags/不限速/index.html","72584df2cecee12c7f73fc190ccaf935"],["/tags/个人网盘/index.html","9536409dda9659e757040f5aa521be36"],["/tags/主题/index.html","b33219012e3d869d5d0078adbd66d955"],["/tags/云便签/index.html","f4b2263375884b047ab641496c97e0c7"],["/tags/云盘/index.html","67f4867994d50428aa1b9743c7036f5f"],["/tags/人人/index.html","5f69fd74cf2015b7ea3a78f9cf56a8ba"],["/tags/代理/index.html","45f6e6862ab22d316b8a57e86328187a"],["/tags/代码/index.html","35e034d5eeaf0eec736159f0a7c77f45"],["/tags/优选IP/index.html","b3453c7fc680ae7de8af73a8cb414421"],["/tags/便签/index.html","cc611eab993238a63d373a8a1570ebaf"],["/tags/保号/index.html","670b146f91923570fe0cbc5120e9af8e"],["/tags/免费/index.html","444754be636b8a191bd5bfead978f0b5"],["/tags/免费节点/index.html","8c94b7ba983406c6ddcaa3af1c0ebc32"],["/tags/加密/index.html","83535f9b679883bdc7106fe904b2f114"],["/tags/动画/index.html","0925081f16e6dc2422b064c35374e0fc"],["/tags/博客/index.html","64192394e6c22f86f545fce0bbefe485"],["/tags/历史记录/index.html","aff8246dce92ed2aba4faba02eac788e"],["/tags/压力/index.html","32ab614e35a956d0757b5e0df664c6c2"],["/tags/压缩包/index.html","43ed06e22dfffb3e6c5a7a2022eb711f"],["/tags/反代/index.html","2e63716314f4e7fde802da5dc0df24cd"],["/tags/可视化/index.html","47cc09bcf3bbfbbe840508556301cf0b"],["/tags/命令/index.html","cb15c0fc30edbc8d51067a3654e0235e"],["/tags/国家/index.html","0c4dde9b9dd8eede558a3fbad15d3789"],["/tags/图床/index.html","dccb711d2b2c95509026b0b20ce2a34a"],["/tags/图片/index.html","5c63c385f8ee0985094191de9cc33b8b"],["/tags/域名/index.html","8f000f5a32ab2097ecdbb9ebfc796b7d"],["/tags/多标签/index.html","995555b8eeb86634427e47378ddc8495"],["/tags/存储/index.html","7901eeeb0c72252865843c55cc78cf9a"],["/tags/学习/index.html","faf32fd0e303c78760b02dd8406bf8c2"],["/tags/安全/index.html","1a8e4350032fda994fc7bf5af830cc0f"],["/tags/安卓/index.html","503b9ffa2dd7831834805b6fcd8949b1"],["/tags/宝塔/index.html","5be5abb8ee414657c78bca6d0a322a1d"],["/tags/小游戏/index.html","e7c3b3cfa57edbb6fd10bad0c3181941"],["/tags/广告/index.html","814786b0ba584e41d894af39a910d4dc"],["/tags/建站/index.html","ed7e99f32eccbfa9a6f7a5311475c753"],["/tags/影视/index.html","0bfdd87705e4fbb2af9966049d2693fe"],["/tags/快速启动/index.html","e7a8b1760f1bce2a68a68de863ae1585"],["/tags/手机/index.html","cddaeb35b7ece67ce8e222fa78662d73"],["/tags/托管/index.html","136399eda094d11f1fb08fa687a43083"],["/tags/抓包/index.html","2a663bf97ceb91214e38717fa809db58"],["/tags/抓取/index.html","e6f77568a8242d5f829452f73021c1e3"],["/tags/投屏/index.html","5a0c4872fdeadeedd3e411e67f45beb9"],["/tags/拓展功能/index.html","201bc726f7620084603523af81037cb1"],["/tags/挂载/index.html","f5431ca48b40a6637ebcc550166dfb64"],["/tags/指纹/index.html","6432ec5a4a900cb6436954c57c294899"],["/tags/接口/index.html","ffd50de109f10d9d6555246fcefb4bf3"],["/tags/提取图片/index.html","be54af468378dc8ac55528be9617bc1a"],["/tags/插件/index.html","a5cdfb0132f5d934cb44d553ebe4d2bb"],["/tags/搜图/index.html","f34d9699175a5959d3aa378207f11b2b"],["/tags/搭建/index.html","8d3ee29c8e5b4072f8cb518da46dc097"],["/tags/撤回/index.html","272c83efafb65cab4286bf2a41fdaea9"],["/tags/播放器/index.html","0fe80dad2cbb211d4eadc20d666894ce"],["/tags/政府网站/index.html","0462e0bef22dc73a407ec6c2cebc4af7"],["/tags/效率/index.html","09cc4d5389d5e67bf6bab7373b8a9ab0"],["/tags/日历/index.html","89d6fe85cf1ebfa93f30265a83c3ea98"],["/tags/服务器/index.html","a0ca8d1f1ac95eab1d8c7429e9f9fd94"],["/tags/机场/index.html","9c2ce1df2af34416690deb3b5385f6d8"],["/tags/桌面/index.html","e7909ec5a6ac240768e61d912e8d3961"],["/tags/梯子/index.html","7c14e8d664668117826ecf9a06ec6793"],["/tags/检测工具/index.html","9a260b386ffdbd51897d6d495c72eda6"],["/tags/汉化/index.html","d9fae13a96018643f26f4a2f1cd3796a"],["/tags/测压/index.html","6fef9f636b92d92bf70ab06940f1228f"],["/tags/测速/index.html","5b2f8ac51ff4b0806686f2cb203e011f"],["/tags/浏览器/index.html","293b7775315ee97a96f9d06eeb8a27e6"],["/tags/清理/index.html","3dc929896b3a4da159530d4aeef01e29"],["/tags/滚动条/index.html","778be1c05322a6b471a64a0ea4c53902"],["/tags/灰色歌曲/index.html","61fd35bcdaae6a02fe7d9c8b074c9954"],["/tags/电影/index.html","62854f7594dfef054a5e7401bbc95715"],["/tags/电视剧/index.html","0862998990550f46a84674cc530c9a6b"],["/tags/白嫖/index.html","ba98c7152ebafcb2238fbbea3a326470"],["/tags/百度/index.html","1a401ef72b85a38fbb5629d5dca59de8"],["/tags/百度云盘/index.html","481f3a5987b662e760d745f60921ceae"],["/tags/百科/index.html","b3711c55bea720b3be8f2224d63bd755"],["/tags/短信/index.html","02cfbf83479c8e51fbe8e364eb6742a2"],["/tags/硬件/index.html","f7a74cf1895c12233c53306873e9e9ab"],["/tags/科学上网/index.html","fe32e65e0c213f6263695135133d21f2"],["/tags/空间/index.html","490d985d684d09ead7d5fb5759e1f7f7"],["/tags/笔记/index.html","8488977ece03cc88ea4a9c935ce3912c"],["/tags/简洁/index.html","ece6d0a7f9469430e497b758beaf949a"],["/tags/简约/index.html","474e17ba9178019e8e9d1ed3595f0bfe"],["/tags/维基/index.html","a6d0b8c31fcee50e9c6c7450e5ed47d7"],["/tags/网易云/index.html","fd766a5e93c28b94e7df4b3d3015edca"],["/tags/网盘/index.html","0b3c15be8571db50132d49172c5ef2ba"],["/tags/网站/index.html","1465505b5f7e19b4d2e8d39da9c679de"],["/tags/网络/index.html","e5593f55fe82e83e12ef62eb6d82395c"],["/tags/美化/index.html","bffab6cfa3fcaf3d239066931c50ed4a"],["/tags/翻墙/index.html","3a68ddd884f91e83b490e1726a205a37"],["/tags/翻译/index.html","5a79e918528560712d0293cb770dcb94"],["/tags/翻译器/index.html","b8917e2e13a9caf5f7383c3d41bc0da6"],["/tags/聊天/index.html","9aa0296c25d07cd090a6ceff68417f23"],["/tags/聊天室/index.html","83a40ec04917f5c9133a05a16d1c8d2e"],["/tags/联想/index.html","6c47dff74e046e8e529f75a4208f2a11"],["/tags/节点/index.html","c14f7b9c18c46ddb6dcf9c1889b665ba"],["/tags/虚拟手机号/index.html","bc57d1d3c46733eb7151300f27594ecc"],["/tags/补丁/index.html","9e14b16085b76680eff32ff6a703767a"],["/tags/视频/index.html","d266291d5f9ac679949563967cbef1e2"],["/tags/解析/index.html","44ff6da6d3f857017628fddf30f774b4"],["/tags/订阅链接/index.html","bf72d309787f681a0fa70dd6fda6ba8f"],["/tags/记录/index.html","0f1452d4f976c74367c7f8226712f287"],["/tags/识图/index.html","76bb1fba7326141ec81b94fabd68c795"],["/tags/语言/index.html","4d90a28bc3a9268eb90560ee99a7176c"],["/tags/资源/index.html","411aed1ac0dfa3bd4021b74613b8df6a"],["/tags/资源管理器/index.html","a5a70cf0cb24cfe24734904547348855"],["/tags/转移/index.html","5ab14beeff67721d1bcccd708009c964"],["/tags/软件/index.html","a7434a6d0f2019313e3b005db21f2671"],["/tags/轰炸/index.html","f4d0f6ea600ebdb429f5cac4948e8052"],["/tags/迁移/index.html","8193ee5997064f9d822bbcf7cbae530e"],["/tags/远程控制/index.html","88cb85deea9ff6fd6a14f530863d241f"],["/tags/连接/index.html","e0bb43ed5e13ac30b9a7f57fcda09893"],["/tags/追踪/index.html","9d0663b72de7e8c6c9cc54d5d5f27f14"],["/tags/速度/index.html","120baf74dbb4182e9d49956fc6078841"],["/tags/邮箱/index.html","872ab4d1fd91992cff9a38d6d51e6869"],["/tags/酷炫/index.html","f243c077335eb54f0856269db725cce6"],["/tags/钓鱼/index.html","0bad60eb589c2fc8da69ec8eb270f317"],["/tags/镜像/index.html","7cfc2e1a67eab2185956a0a3059744b0"],["/tags/随机/index.html","366b19ab25b09899206b3f242d3cab0f"],["/tags/隐藏/index.html","88b83cfe40936042b97d5e4b78f91b63"],["/tags/面板/index.html","661e6cd023ee5d905e4b64deb34f1ad9"],["/tags/音乐/index.html","fb107f3de4ca6a3b25529417de5e7d62"],["/tags/高颜值/index.html","1c50567472b30e36b6232f3a16c062fb"],["/tags/魔改/index.html","aae8a2823340c0d5a9108ffe17d62b01"],["/tags/黑名单/index.html","4c02ce6246357c0d0ecbf86065903872"],["/urls/index.html","fd057b442ed08530fd3526ef9faaeddf"],["/vps/index.html","cb0c2dd27493231f86ca78af4cb2b64d"],["/支持/index.html","6352d04172aafe5a8f0fdb66a595325d"]];
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
