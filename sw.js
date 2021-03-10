/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","2e3bfe51c98c3a8ac048565de338b9e3"],["/2020/11/29/clash-windows/index.html","02491b67d214f63f6a6809d0360d9467"],["/2020/11/30/websites2/index.html","5d6d8208ddeb6c8adc43f8a081143416"],["/2020/12/04/iphone4s/index.html","d09f94114878baa6a934c90d4271345c"],["/2020/12/04/onenote/index.html","5b1b0eeeede70950e57dbe88a70785c3"],["/2020/12/04/wesites1/index.html","1992d3fceb8a7e41fe797639ea42021f"],["/2020/12/06/nokia808/index.html","bb36ee952fcb043b872b24ab4f8a4417"],["/2020/12/07/ipad1/index.html","5dda55821caa8381c571fce9b7336d5a"],["/2020/12/18/freesubscribes/index.html","19daaa1aeb5d25561675cc152642ef4c"],["/2020/12/19/musics/index.html","3e316b59b593016d88d223b281e699fa"],["/2020/12/19/shadowrocket/index.html","53bfe89f191dc9deb615a560c3a6803c"],["/2020/12/19/v2ray-windows/index.html","18f7f8fccd5f512db1ea6275421dc4d8"],["/2020/12/19/v2rayng/index.html","4ba4e124f902ec86f98921390b733d9d"],["/2020/12/20/beoplay/index.html","7e1781233d3d40f027526622a8d96e4a"],["/2020/12/20/订阅链接转换/index.html","5b1de2a34ed8fd822549a245ae6da75c"],["/2020/12/21/chrome浏览器下载提速/index.html","f0fd890ccfa1d35f0620bb6513bccb42"],["/2020/12/21/免费128线程并发下载xdown/index.html","5f4e0cc9d820e0d854f2a17cbbbde657"],["/2020/12/21/免费32线程下载软件ndm/index.html","e59edc29402ec62c0c1af2e65b3960e7"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","d99c00fd98d32112bd91e1f88f527e2c"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","4d7c94d458d32ea6100cc4cb5db7cdda"],["/2020/12/21/广告怎么知道我在想什么/index.html","d985e85db73e62269f54339234fa0c8b"],["/2020/12/21/无名·引子（小说试写）/index.html","b13cc73e7a38d22309c283129547db7f"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","0f4c8d0e0e3d251ffc20d27afdb21489"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","ce1f7da6ab902af26d94f78c3e224819"],["/2020/12/21/高速轻量下载器aria2/index.html","e8e4c9066d2b26251b8b8987c318c283"],["/2020/12/22/2020-cee-roo/index.html","2e109994a341c7e1702866bca049e4dd"],["/2020/12/22/firefox插件、github、steam富强/index.html","d7118ca23a97666658689460d60433b3"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","5a99406fe796e8bf4b3d4df7ce034ca5"],["/2020/12/26/python-day-1/index.html","424c9ad3ca77bdfb7db439081617d358"],["/2020/12/26/python-day-2/index.html","ce9bfbfb0f951d50dc93ae5412c07f04"],["/2020/12/26/度盘不限速下载方式一赏/index.html","288da78237b33913287deeb6a9636498"],["/2020/12/26/添加开机自启软件/index.html","cbbc724707cf72b3cfbe8241912beaa4"],["/2020/12/26/电脑端截图方式一赏/index.html","8be4f6bc60532d5f89d59996f04c0a49"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","63752e053cf32fc19b067fb2aba05181"],["/2020/12/27/最安全的浏览器tor/index.html","8332869126f070d0e1392e81b2e77d79"],["/2020/12/27/网易云刷等级和听歌数量/index.html","05650f20a1b6b54eeb4dfa3acd191dd7"],["/2020/12/28/freenom申请免费域名/index.html","386fb5d34c56f92f733b2996b7c8d2e8"],["/2020/12/31/机场/index.html","7a7d52fbd1fe38b42446bd958e3be1f9"],["/2021/01/01/M1/index.html","88870ffea4a14cc88382fb774e0f2a1b"],["/2021/01/01/compress/index.html","57afc6e007f8a9b3a9ff2ef0797c1b72"],["/2021/01/01/infinityfree/index.html","b68106c8b8d36e734fcb9d6512548f47"],["/2021/01/01/硬核翻墙/index.html","ee461b7fd3202f7a1ee9ff7965d84601"],["/2021/01/02/qq/index.html","87611c8ccf28a5c990f7be8d35ed1db1"],["/2021/01/03/netch/index.html","6c59ce882c2209084aaf2965585ff04b"],["/2021/01/03/waifu2x/index.html","cf2b426c9a1ed47df492d71bb8005655"],["/2021/01/04/ads/index.html","cc3102873dc829f47812d90304b001be"],["/2021/01/04/games/index.html","76f1a1801808b812aa01da4bd2bc1710"],["/2021/01/04/heroku/index.html","a3d5de62a6543d44cb5fbd6454b1848f"],["/2021/01/06/movies/index.html","838dbfacb1d5b528c8c498177abf0e39"],["/2021/01/07/google2020/index.html","2df13e74f45e4d363e05b31bd605f3df"],["/2021/01/07/lucky/index.html","a086cced40af0731476d7cb0bbd590ce"],["/2021/01/07/spotify/index.html","c7774f82807bcaba10024fcbae196b8a"],["/2021/01/07/thunder/index.html","fbacf4f1378d19d38fe71550017b972e"],["/2021/01/08/adguardhome/index.html","d83e7356c58ceba6dc2b7dbee6751d0a"],["/2021/01/10/IBM/index.html","9cc79a19325578e7240c72550e09c087"],["/2021/01/10/potplayer/index.html","d60f92e1ece6169343c5c60ae3e28ebb"],["/2021/01/10/sakuraanime/index.html","bbaaaa832bba969affda285bc0f31d90"],["/2021/01/10/美剧星球/index.html","ac28d94f6f5701075303638da11db39c"],["/2021/01/12/telegraph/index.html","723e097a79439829bdfc1ed6bb5211c3"],["/2021/01/14/comics/index.html","135462f0b89904c7ae6c47a9e886b7bf"],["/2021/01/14/ftp/index.html","e7ea1ebc4e01adc75d6bab80cc26ada7"],["/2021/01/14/oraclecloud/index.html","f759ed6c563409734a4c25aeeb5fc4c7"],["/2021/01/14/porkbun/index.html","ac662befe67fbc0d5c40b1194affe233"],["/2021/01/14/powertoys/index.html","1b3ec64c2c96bacddabd3c06285b3978"],["/2021/01/14/taptap/index.html","1410879dd0deb7b5b74bf19782a45a59"],["/2021/01/14/ubuntuvsftp/index.html","68fa7c9fcf062bfebfc56e40362f1784"],["/2021/01/14/小说/index.html","9de34c754726ccdc8fd2647da266252e"],["/2021/01/15/freeproxies/index.html","8b6d09bf4fbd83cbaa9708c994fc2d95"],["/2021/01/15/incaseformat/index.html","1c104101acfb00ac1baa21c13b42beb5"],["/2021/01/16/euserv/index.html","717516aa6a5e192a805e198548bf8d40"],["/2021/01/16/winxray/index.html","0a64a93b9ff4de866f23eba4078d5970"],["/2021/01/18/qqreadhistory/index.html","3b6778fda12209be47f80021d7dbc8e1"],["/2021/01/18/qqrevoke/index.html","716c5847bc528b15a46802b27b2c96a7"],["/2021/01/19/freevpn/index.html","635d6aea9a200a6af3508ed7c0df48ff"],["/2021/01/20/browsertrack/index.html","cb9b67edc7c71ce977657ebbf1429046"],["/2021/01/20/v2ui/index.html","1e5c9ae3b81dbda0474c795f271cfcab"],["/2021/01/21/failedtoconnect/index.html","e833e886f31344d7be16eb43a47b08a5"],["/2021/01/21/gitcalendar/index.html","eaa6088c3ca0d935c800dd19075ac705"],["/2021/01/21/markdownformat/index.html","d0f4286962537576e37b393fa2051758"],["/2021/01/21/markdowntable/index.html","6590bf056295fefa25d0463fc581c70d"],["/2021/01/21/vercel/index.html","b140dc83fc87d01686d2ec1b073234d1"],["/2021/01/22/hardware/index.html","ccf5e90e74fe2ea6e1a46ecee20de65f"],["/2021/01/22/muviz/index.html","b7b91a0744f2a81ca6309baae80b134c"],["/2021/01/22/randomapi/index.html","7ca0419addbc0156d6094b17ac67b0e4"],["/2021/01/22/searchimages/index.html","810e0bf95bd3d7c7950b1b7b14c26a22"],["/2021/01/23/RX文件管理器/index.html","b8710d53280e26c67df504d9f2baa425"],["/2021/01/23/chromeflag/index.html","5984316c521f78b9926d76b023ed6945"],["/2021/01/23/qttabbar/index.html","558749e6de08c53fe12aa968802e5e31"],["/2021/01/24/githubspeedup/index.html","b21e48a0dddd66fea6a076f28c667790"],["/2021/01/24/jsdelivr/index.html","6fe82bea4e0b335bf0fd6d30231c9382"],["/2021/01/25/note/index.html","1928cf4adb571a3eeb23a5ad0931b168"],["/2021/01/25/soul/index.html","14e07f88546058ac7705d3b4ce4cd266"],["/2021/01/26/herokuxray/index.html","c4b7fe123f24cc8c5a6cc5cc51a9495d"],["/2021/01/27/proxypool/index.html","4093986da8150d2e5fb8c214a6a67425"],["/2021/01/27/tracker/index.html","7506d6a7d4b5b8e4955387b8cde31719"],["/2021/01/30/pandownphp/index.html","ad374120b08fd6c5940d6fd0f800229e"],["/2021/01/31/newgroup/index.html","1c6b1a80579f8c826019ab4035b51223"],["/2021/02/01/clashlanguage/index.html","d1c9d6b3c0c64f0a70e81abd09d61dd7"],["/2021/02/01/encrypt/index.html","f2a2e06ecf78db7b5261cac126fade0f"],["/2021/02/01/footermotion/index.html","98fde0f5537d483c2c24dbf87dbe219b"],["/2021/02/01/gitter/index.html","8cdfad8b1f6ef8fa89f3c97ed89adb0f"],["/2021/02/01/pixivtop50/index.html","d181481aa4697697710ecb572043ba73"],["/2021/02/01/scrollbar/index.html","22d384ef031dfd93cdab6ef20352bb3a"],["/2021/02/02/clover/index.html","154c4ab45d570e2670fded6679ae684a"],["/2021/02/02/maya/index.html","1fde5623a4a09ce560515a07db85e057"],["/2021/02/02/speedcontroller/index.html","42ab89ca35b3b8ab756d7c2525faf4be"],["/2021/02/02/yesmusicplayer/index.html","da5962ac13ef98b33496b8ab782fd940"],["/2021/02/03/lenovoonelite/index.html","e0e22dd0e0fd15cc21992585037e10b4"],["/2021/02/03/skipads/index.html","d65fbc0297c5c16eea702fb08481652f"],["/2021/02/04/picseed/index.html","b380b4f622caf927c0d4fbaa8f50c510"],["/2021/02/04/renren/index.html","b001a316328e3f84b57fc3a0ee0feddb"],["/2021/02/04/serverstress/index.html","b7e302665d0caa1d3f1d9181424c8091"],["/2021/02/04/wikipediazh/index.html","c27abde4d487bd15e4fae20a3ce64bf3"],["/2021/02/05/googlevoice/index.html","b16a5275fb1cbcfafab8ebe8ed26cda2"],["/2021/02/06/clashconnection/index.html","4119f77aa920ca28584c97b6d2e8bf07"],["/2021/02/06/gvtransfer/index.html","cb237e5df544d8bd659563b6e1c2dfb0"],["/2021/02/06/todesk/index.html","267547ada033efd0b0699a575b818ab9"],["/2021/02/06/vpnblacklist/index.html","2facb5207b90b9ac810cff42dccf40b9"],["/2021/02/07/mklink/index.html","9c0742c351f7d8e8a16e2a96ee4c6ebf"],["/2021/02/07/speedtest/index.html","3f4dee3d7645afb62389fd6743240b0e"],["/2021/02/07/translate/index.html","609df386e69a346db886cb199602fea4"],["/2021/02/08/ewomail/index.html","d694af361a4db3daa9f5aac0bb6be0b7"],["/2021/02/10/officee5/index.html","c62a38f79412e009d295c24b8a386f4c"],["/2021/02/10/raidrive/index.html","332bee1163f93300b6d5f658ac5d4157"],["/2021/02/13/e5sub/index.html","1039cb0fad264931d137c6c56266deac"],["/2021/02/14/screen/index.html","1224ac932198a32d634b53be5f76f387"],["/2021/02/15/clashtun/index.html","e64520253fa7bcfdfc4d0aae209a61fc"],["/2021/02/15/messageboom/index.html","2a0a813649ced47c77fea305d9873aef"],["/2021/02/15/oneindex/index.html","5aced5fafd449dce74cb266d9529d535"],["/2021/02/16/govsites/index.html","c268edbbe6595ee992160007fac08893"],["/2021/02/17/hexototypecho/index.html","3c9a5deeb824bab80c5fdc3329f2b971"],["/2021/02/19/fiddler/index.html","9b820e84038e4ec008c6ed74ea95ff04"],["/2021/02/22/potplayerset/index.html","5898c52051ee42338264d43263449882"],["/2021/02/22/studyresource/index.html","f389751a413cc4a11d51653e29184521"],["/2021/02/22/telegram/index.html","5aa5350a1a30cd14148b3a7b85809e7e"],["/2021/02/22/videos/index.html","765c5c21befd86a689c5f4cf4b2872ae"],["/2021/02/24/mtproxy/index.html","fedf9b9ba70fe863add7b986026d66ff"],["/2021/03/10/catchcat/index.html","2a0dd158cfef312fb1094dbf1690a779"],["/2021/03/10/neteasemusic/index.html","a23a46c7a3bded51b40828239918558e"],["/2021/03/10/surfboard/index.html","5e043952538a2c387a5ad27dfe3bbf56"],["/2021/03/11/vpnandjc/index.html","650ea29a409025b6dff210114d001351"],["/404.html","aec58c7edc814e17a9671aee31a292a1"],["/archives/2020/11/index.html","4488b670051f90b63d9caee474b7887b"],["/archives/2020/12/index.html","80c8d5604d7ab769aaffd9ac259533ca"],["/archives/2020/12/page/2/index.html","9ee5bed56754fbf740b2e45d5eafb545"],["/archives/2020/12/page/3/index.html","2c3fbde9962d3f105ff5bd4688c6500c"],["/archives/2020/index.html","5d375c795800e741eac9bd85238c691f"],["/archives/2020/page/2/index.html","e3d918c6f149aef173ff3161f2faa407"],["/archives/2020/page/3/index.html","325e5ffcbc6dab5f75cba560aeb2cf29"],["/archives/2021/01/index.html","f158ff55c05939b283a0e46afb8dc2c6"],["/archives/2021/01/page/2/index.html","12bcd215b3da93d73a5809692154f129"],["/archives/2021/01/page/3/index.html","967f90294c7a27b2df59414cbd39a699"],["/archives/2021/01/page/4/index.html","5b6d29059a2d95fa8b72d21e676460f3"],["/archives/2021/02/index.html","bc0412bfabb73e9ef2f1a3f61febbcaa"],["/archives/2021/02/page/2/index.html","e5d23a15f55e7c8bb2c19a47c7481433"],["/archives/2021/02/page/3/index.html","ae694738549573585d7066b5ec650b4f"],["/archives/2021/03/index.html","b0fab399898855c7afd3d748107009a3"],["/archives/2021/index.html","29b35ee3ebde2237cf3cb6b5d84ff6f4"],["/archives/2021/page/2/index.html","3b5a21a250753c61335e88d241828a44"],["/archives/2021/page/3/index.html","5d19f279da93dbee59b0ac19cadab154"],["/archives/2021/page/4/index.html","8f212fce85c09253399d2823db29c2cd"],["/archives/2021/page/5/index.html","071f9adfa6f75d4911f6b1e2726fc1b7"],["/archives/2021/page/6/index.html","811e66d7780b7915b40a1fd2278a6382"],["/archives/2021/page/7/index.html","662ade4cdd43f3a5d7a7046112d0e5f5"],["/archives/index.html","119cffbfe0f24de2ab1d6c027efe0bd8"],["/archives/page/10/index.html","d48b04b0931c42fc0e53d597b1a68b1c"],["/archives/page/2/index.html","88620ad0871cb048bdaee31edd61d1bf"],["/archives/page/3/index.html","1dd887a51ff4764f65004bb88f3ae134"],["/archives/page/4/index.html","b49e86a94a4a5343babeb4e609152135"],["/archives/page/5/index.html","bfbe29de454a851fb3866a78df6f5af6"],["/archives/page/6/index.html","8c18391d218386c69f5622669d907afb"],["/archives/page/7/index.html","7ad90e7bc740199e8b3ccbbaebc3e0c6"],["/archives/page/8/index.html","2fdb9464ba5c3e8fe26c241d3ba65cc1"],["/archives/page/9/index.html","15009ebb1509edb59ae85e1fd697c420"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","140dcd77a56c79d9eb0468ec0df6b3cd"],["/catchcathard/index.html","e9291c58bce68730cd21cc4e2b0a474b"],["/catchcatimpossible/index.html","ce8ac7a16e2b7990d9e0aeb78de4c0db"],["/catchcatmid/index.html","dc073d912aef351b621ce171416ebd82"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/categories/VPN/index.html","d8856e17b0fec50f891c1848c0aeb722"],["/categories/VPS/index.html","0ebbec0c08149ade097466ebab070278"],["/categories/index.html","5286d4e2329ce93262432aaa9ac83aa5"],["/categories/下载/index.html","f006ce6e91ca42bb4b1033f84daf58e1"],["/categories/安全/index.html","7a602519be4db84dc204e844dc9940f0"],["/categories/建站/index.html","286eb1797a5ef82155b03dba5032121d"],["/categories/杂/index.html","888a767126706a688ae1bfe9636b09aa"],["/categories/杂/page/2/index.html","ca442c55a51f9f3c41924bdfecf3cb94"],["/categories/测评/index.html","563e508b3e27ce45fe284ffc2d3f5710"],["/categories/科学上网/index.html","5f276c3a65674cf8ccadf7d49cab804c"],["/categories/科学上网/page/2/index.html","0745bf1cdc98f75a54d9c0a7087ea345"],["/categories/编程/index.html","1298e5d526a612965f213b4352152883"],["/categories/网站/index.html","b25f7bee64908640a922d9b6521aa196"],["/categories/网站/page/2/index.html","4a677e42c75104adf2013c89edf8a6b4"],["/categories/软件/index.html","c6ee11df8cdff4bd3176bb125541bff5"],["/categories/软件/page/2/index.html","16c6ddd7fe5c23a48161030c0c1ef887"],["/categories/软件/page/3/index.html","7781a9162870985993c954a0c3bd5599"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","73ef771007f3d2bf9925d8f1d7b037c6"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","877be523c6d82447561a7c436af5d156"],["/ios/index.html","382825f2d36ea47f0a230f97930115d9"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","e64ddff95c75d454ec0e5232ba829471"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","1d1f22ef1eb0cc6d3981dace78267851"],["/page/2/index.html","ef72f975407236e29a45e9d2cdfd4de0"],["/page/3/index.html","80c110482494a753c5ef4caaf3123d65"],["/page/4/index.html","1b9c44d4497cb08c082adb2817e3adf6"],["/page/5/index.html","3461d3af7f5e1ecd2b80b89007d22686"],["/page/6/index.html","76f1b7b48861bea27d61cd8f4a680dee"],["/page/7/index.html","eb3855294ea14493b45a245a93ff7f2d"],["/page/8/index.html","c578028b483ad591783e7ec234b8a7b5"],["/page/9/index.html","878d9c3ca077cd43ee52381d737a421d"],["/payment/index.html","d22cf29f0531a7fb6b050fda4fab1c33"],["/privacy-policy/index.html","1c43c45eeab072d52dc766508785fde8"],["/rss2.xml","d77e89367bdff460d392186f9c112ae2"],["/search.xml","8f861de005de79247fbc1b71ee9fd294"],["/sitemap.xml","b2a02eb421e9982f2817a0ab39d00b33"],["/sw-register.js","aa88afc9b1e21e9751b6fc9538b8fb0e"],["/tags/5t/index.html","8920b86c94d5c5b886ebd705c972c7f9"],["/tags/Clash/index.html","2ca6b21092493681b933ebc72df44772"],["/tags/Clover/index.html","7b60db90c1cb6daf4884562db3a51557"],["/tags/E5/index.html","5a54c7877e970aa5a8ebd31cd264c37d"],["/tags/FTP/index.html","916fbcb80bf60b1aee9a798be228b30e"],["/tags/GitHub/index.html","26c3548816db45ad40d95605c117a629"],["/tags/Heroku/index.html","8f7bd2755ad5d01cefb645bd54feee0e"],["/tags/Hexo/index.html","b6ba1d1ad9d2049c9de5b81b692f195d"],["/tags/Lenovo/index.html","7659b54cb22abf939853a673cde00391"],["/tags/Oneindex/index.html","374c2b6deba0ac921b7e522f44028f8b"],["/tags/QQ/index.html","26e8a97862950f8ae83917fb90c4ec5b"],["/tags/QTTabbar/index.html","e0356e502b03c1a9ce16da24feeb0d79"],["/tags/RX文件管理器/index.html","11c11c84b2bcd1712b23c930aaba006f"],["/tags/Todesk/index.html","d89ab7cae4a3fc4280c268a3b1fce2e0"],["/tags/Vercel/index.html","04cafd463dbbb8a07cc7486781a770a1"],["/tags/ads/index.html","cd47fffc9630294fdaf7cb9cd7780a75"],["/tags/api/index.html","f725277040872b83802da4168de31858"],["/tags/app/index.html","e4881183bd2b50ccb28f658f7bdde7ec"],["/tags/blacklist/index.html","f5f737a99e89dffda6d49e06ad7ac41a"],["/tags/butterfly/index.html","ada1b3a41754457d9bed91cc47280e19"],["/tags/chrome/index.html","2b0c2232b47cb2af44eb58c8c8ba745e"],["/tags/cloudflare/index.html","8eed82d861a350a8f9e9562bcb949805"],["/tags/cmd/index.html","d9995ea2a101939dbe607fd138f6a404"],["/tags/c盘/index.html","481049fa24fff3d09d644eef42189f1d"],["/tags/email/index.html","44d55e712fa91ed501f4cb15998e9f4a"],["/tags/ewomail/index.html","1c4392b36fc6ba15671e141836b007e5"],["/tags/fiddler/index.html","f2a80fb8384f0e8779641e3cc27bc5bf"],["/tags/flags/index.html","cfa34861940f0f877e4c931787277dc8"],["/tags/footer，页脚/index.html","d52be033fd1f93d4c588510ef7068471"],["/tags/galgame/index.html","837a00278bfbde91b0ad7de7f7b0eebe"],["/tags/git/index.html","189ffbe4f571b59e4b180bf262946152"],["/tags/gitcalendar/index.html","3cf6d166d79352e8a11be9a3d0a303ed"],["/tags/google-voice/index.html","bcd188c7596ed30f2e300fd87ee5262d"],["/tags/gv/index.html","e1607e51bfeef19bc79016263f401010"],["/tags/html/index.html","3a061c7ab2355dd5f5147a3700a89c17"],["/tags/index-1.html","6a0f5c1ce678a4250b70a98d0f40cae3"],["/tags/index.html","d38821e6d3d620d7587a4fb018ff5113"],["/tags/js/index.html","f3660acc74ade6f0c3a6e2b8c499691c"],["/tags/jsdelivr/index.html","ac05b3db75dc45801e41f2bdf04a40b4"],["/tags/linux/index.html","b19db247417ec1f3e9fb37d838843a33"],["/tags/madVR/index.html","18fa85736d826640e7fff5339924c076"],["/tags/markdown/index.html","2d1fbe91b7cee122abfd128ad7f3c6e9"],["/tags/maya/index.html","230bda2f5a56cd6343fde6f4a15a7970"],["/tags/mklink/index.html","ed6e44fef07862b8d23f8abeb37e1e54"],["/tags/office-e5/index.html","eb2190cece22d8e9a6a31fc8e139a475"],["/tags/onedrive/index.html","42d752a194225fdbb75111b106e5b8fb"],["/tags/picGO/index.html","3579e427849fb8ecc46a8a3954f90a29"],["/tags/pixiv/index.html","56676fea6a460cf574a78a89bc32cdcb"],["/tags/potplayer/index.html","22df9a6a23808bf25c458f4486223596"],["/tags/proxypool/index.html","9ae24184358340fa8cbce36782a0d8a2"],["/tags/qbitorrent/index.html","f009bf2cd64d499c16eca7a46855f964"],["/tags/raidrive/index.html","a6eeadea6e26cace5de49599320dd3e7"],["/tags/screen/index.html","bfc782f961c2afd42ddcb775fe57f99a"],["/tags/speedtest/index.html","9ccb077660e03f67270e1092a700993c"],["/tags/ss/index.html","5f4ea84952a33dfe5603c2a5015bb92d"],["/tags/ssr/index.html","390f0ac7e8a1bfb64df02b6aabb4f03b"],["/tags/surfboard/index.html","ba23d68e33c5056d9e64ab1a2d2c7350"],["/tags/tap/index.html","2501d6d19f09cce845d929c1ff0c3742"],["/tags/telegram/index.html","a290b711e24bf076dded2b92b17092c7"],["/tags/telegram代理/index.html","c3fbdb13124ac557cc7393e71edcb4b1"],["/tags/tg/index.html","37dd25758ac660d97feb46ca0c9c9bbd"],["/tags/tg代理/index.html","87b8ecb47c23f13e38c047ee412ad85f"],["/tags/top50/index.html","e595177276cbe2de204ee692090001bf"],["/tags/tracker/index.html","d2eddfa9ba9b3448d805bbf2d5843ef4"],["/tags/translate/index.html","ddc5689b4569f65ba16e10383fc98678"],["/tags/translater/index.html","fcccf2c91fb7e705709ac3f52324ce9a"],["/tags/tun/index.html","e1c8509693682eb108a6b937b3d76859"],["/tags/typecho/index.html","4991bfbc33ea89f48334208b3c917802"],["/tags/v2ray/index.html","f48ce2da78899d4c8d24e117ec92ae6c"],["/tags/vpn/index.html","72c1e6a5905888e9071e674f0a11ae7b"],["/tags/vps/index.html","42aed8bdf3561e572e60ef9c06183281"],["/tags/windows/index.html","97802396ad7078165be23f2817a631af"],["/tags/windows端/index.html","7f83f5611546fe715dfa548d7ed18f8f"],["/tags/xray/index.html","687f5ad2e86f74c15c127a83127a4294"],["/tags/下载/index.html","e5fbed929c4af78f5bc4e82ba872ccae"],["/tags/不限速/index.html","bd5035ac1f94dacc0346597492362e1a"],["/tags/个人网盘/index.html","5c77e58ad7bf130d7088da30a5554ca9"],["/tags/主题/index.html","f7c13d298382bf2e843cabac5833fe06"],["/tags/云便签/index.html","90ea73d555b227a78841d0bcacfbf274"],["/tags/云盘/index.html","d2a2cff9b9c01e7c29b2de73ca3480dc"],["/tags/人人/index.html","bba981a68c951a210172a004393d32ef"],["/tags/代理/index.html","46ef4a0e272b4ff62e27f773c12ba407"],["/tags/代码/index.html","98d9932e28d5ad40a4f7fd77d0cebef8"],["/tags/优选IP/index.html","a241f5d893bd5a303584f25c9a304ade"],["/tags/便签/index.html","155a0239d3e0edbaf1343870fd70805a"],["/tags/保号/index.html","7772ba07baa21e4cbe0d08d540c6296e"],["/tags/免费/index.html","68f89cf4399b4d785910127efb372fc9"],["/tags/免费节点/index.html","1bfb10224ad001d27626357d60c50785"],["/tags/加密/index.html","965a341fba6956abbab0d220065d43e1"],["/tags/动画/index.html","c4089ab0bd2c170bed6017ff4de59a93"],["/tags/博客/index.html","c152a4f6bf19f8912a1e8df07c06d72b"],["/tags/历史记录/index.html","8f7f4278f058d5a8d632ad54abe45ffb"],["/tags/压力/index.html","d90b5d388c570f364e709f335c9e9e44"],["/tags/压缩包/index.html","ad850189455339a08a84666b586793af"],["/tags/反代/index.html","3c4f84ec87b2a8b6219e30d9f9934ce3"],["/tags/可视化/index.html","60ad6da69c542107e21cf310110a2d78"],["/tags/命令/index.html","6cfa203a154d383bf89454b259832bdb"],["/tags/国家/index.html","3ee05dec7f803980ac169961e8916ab0"],["/tags/图床/index.html","7cb78f0819d001367282e86160d01f00"],["/tags/图片/index.html","596e6c1fa127ecee2aa8a26455f6a02b"],["/tags/域名/index.html","8c141c652fa58b7501b525ca6fbee933"],["/tags/多标签/index.html","b3eb440a03b7f3892712b20f913439f8"],["/tags/存储/index.html","237e200f00ecc0085e2a4d678f728e7f"],["/tags/学习/index.html","a9a379447a969bd5036246dee0c8ef74"],["/tags/安全/index.html","0930b8284f98650356bb76379d7d2a77"],["/tags/安卓/index.html","1bb9e71e621ffc390af4b97f2c12eeaa"],["/tags/宝塔/index.html","0fdaecccc806129d7fc709f9be53920c"],["/tags/小游戏/index.html","b35a0c58376feae45d7ee4c28ea4e3bd"],["/tags/广告/index.html","5576b979998c2622ee9b383a754b785f"],["/tags/建站/index.html","7162cb52020df97be5460f4161631440"],["/tags/影视/index.html","e528dc56fe44bb8d33af894687acfe7d"],["/tags/快速启动/index.html","391c54933d512db56b2e2d05960b6a1b"],["/tags/手机/index.html","3bdfb6016d1ebf5c79cb5e2f433a0219"],["/tags/托管/index.html","9d13cb3873d0d1e9f7294c54047ab234"],["/tags/抓包/index.html","8f7f9b6738d10caae1f74013f5602543"],["/tags/抓取/index.html","3bc24524737b4ee5416fc9c13ba83f5c"],["/tags/投屏/index.html","d9609bca90e9c26735094a81f965f469"],["/tags/拓展功能/index.html","7d701650d28dd420dfa9c0acee523d53"],["/tags/挂载/index.html","91df7b1052d082bdee8cae1ba60a1e4d"],["/tags/指纹/index.html","a3fd242053367311300242c9e430db85"],["/tags/接口/index.html","b90e79cdd473677df63b2aa21844ab9f"],["/tags/提取图片/index.html","810f93016809a64483af5d89cdc02d73"],["/tags/插件/index.html","1ed4c7f96c5071e7cc8a091d004f52bb"],["/tags/搜图/index.html","4b5457f3023ba7ace1a7c1b716fcef1e"],["/tags/搭建/index.html","37860252f768315b8e5ae7496534eba3"],["/tags/撤回/index.html","c6fb444a272f8168cb379289930d7f57"],["/tags/播放器/index.html","3b086242629e6b624762f33d0323eeee"],["/tags/政府网站/index.html","3bc7890ef94db6125182bc42904861cb"],["/tags/效率/index.html","e5a818b25dfd8f379159b22a61aa1864"],["/tags/日历/index.html","a7af9a43b780bf301c7e76516f35bd86"],["/tags/服务器/index.html","bb917f36e93eae90ab44445b2b02c139"],["/tags/机场/index.html","1c02ee3a89f0b602a010b09585430330"],["/tags/桌面/index.html","2de31cfe6fb0ac3b281381af38d187da"],["/tags/梯子/index.html","ca9a030aafc00e9d313571bae89b9a7d"],["/tags/检测工具/index.html","420c3486b4a47043133df791ab84e3cc"],["/tags/汉化/index.html","cf958d83ceb4018691dd5a899247eaea"],["/tags/测压/index.html","f2e4c800461e1a6983df75bc257fdd3a"],["/tags/测速/index.html","2c78c96f1e31662cc8940982bfdc9fd7"],["/tags/浏览器/index.html","cd7d9cb42c3b66be49c41003318d02e8"],["/tags/清理/index.html","2da0444986696233303e50bfd8444ab6"],["/tags/滚动条/index.html","a1ba51895db3437557e1be7d61360dee"],["/tags/灰色歌曲/index.html","e54280f953fb10c2130e343b5b4a2c9c"],["/tags/电影/index.html","17503c253b8f74ead8250c8337b954b6"],["/tags/电视剧/index.html","7d382c1664e1eb529eab6b7cbc29edd7"],["/tags/白嫖/index.html","c8142171575aff780f16541ed28088e3"],["/tags/百度/index.html","cf7c337d905f5cf24ef959a8a6765f35"],["/tags/百度云盘/index.html","e36dd247fe50a9d72c198fabda636ba6"],["/tags/百科/index.html","4aaee9bb5c4f2414aa3a01d23a54e30c"],["/tags/短信/index.html","4d5ec62c1f965a2217df0b24c9e9f8a1"],["/tags/硬件/index.html","694b1b7030ac05f3f0b20d5f9652c5bb"],["/tags/科学上网/index.html","32f3830898e82675cb960731e038c94a"],["/tags/空间/index.html","1aeec53b95872a94aa773f805aa362c7"],["/tags/笔记/index.html","ba444f353719afe1a533fadcf7672cae"],["/tags/简洁/index.html","a058279082db84739286a311337ed94b"],["/tags/简约/index.html","da59b13dc53c763dab255c2eb9e392f1"],["/tags/维基/index.html","0d929f47018de0a102cbb2acfaa841e9"],["/tags/网易云/index.html","9d35b7dc0c97732aca108c8b6afb70f5"],["/tags/网盘/index.html","020880dd6e8937ba0049aa29269b8737"],["/tags/网站/index.html","3f58a21654f31861b797c880d9c538d5"],["/tags/网络/index.html","bc7e9c27bc99ee238090077fab5529a0"],["/tags/美化/index.html","576d297296932bce54ae43d40ea8df8e"],["/tags/翻墙/index.html","9e8c576a707569d7ce6080afb773e20c"],["/tags/翻译/index.html","06a121c4c01aacea12166db9218a7707"],["/tags/翻译器/index.html","7e0dbc6f838dc71f7517ffa3e5ab940e"],["/tags/聊天/index.html","ec9e204a3681a809deda56e356af9d7c"],["/tags/聊天室/index.html","296f6dcf885080b4b1cb27a89888667a"],["/tags/联想/index.html","96f2b51c1a38be8094954c3dbec08f9f"],["/tags/节点/index.html","3b4f55244cc14effee0a8e1c6c0db465"],["/tags/虚拟手机号/index.html","a2535bab4ddf6af622b361dfc1c63b28"],["/tags/补丁/index.html","c397d1f7ed199098b93e9a6be5cc8c8b"],["/tags/视频/index.html","e97087a85973ad313a1aa6023e73f503"],["/tags/解析/index.html","6d55a0a37fef2af8241c131db36f1991"],["/tags/订阅链接/index.html","13daf9d46fbf8426c214dbbeb4a5e4c6"],["/tags/记录/index.html","63253c648e19ff2a27158473d41480ed"],["/tags/识图/index.html","e3a27ee7a6cb07d9e1a847d408192a9a"],["/tags/语言/index.html","a8a864626c35d3cfa1bab20c449e08bf"],["/tags/资源/index.html","abb192668165f7ba5373873342494b89"],["/tags/资源管理器/index.html","5b6328ee7643bf9fdbddb7f9f6486dbb"],["/tags/转移/index.html","519d7df874fbda87b91427a992021891"],["/tags/软件/index.html","4ee6c352d2503e4c066f0c74f0dcec1c"],["/tags/轰炸/index.html","74cbc55f66c77ea7e5cb0429050a2c2f"],["/tags/迁移/index.html","e6c44f0c8db43dd4acb3f4a1e613d98a"],["/tags/远程控制/index.html","388f79ff76651649479d9da63fabc156"],["/tags/连接/index.html","d282bcce55076f7513f82c9678fa2177"],["/tags/追踪/index.html","0e900d1a230d95aefc0e791719cea05f"],["/tags/速度/index.html","ef748f7809c164d5e84551ac6b81774a"],["/tags/邮箱/index.html","588014b46dd710a60790c2b0c2d799a0"],["/tags/酷炫/index.html","231d769227354742e023976bde9f3091"],["/tags/钓鱼/index.html","71ef74de212d6663cc958477b25845a0"],["/tags/镜像/index.html","15aeacbdd5d4b7f78a757e63784bc0ea"],["/tags/随机/index.html","ec4f33f638336dcb9ebecd17b76b1205"],["/tags/隐藏/index.html","8e4487f447f72ce7672143d02b8825db"],["/tags/面板/index.html","dc68b9e548ebf219ca86aa2745ca0b10"],["/tags/音乐/index.html","297f136afa1dba08fd0326402fc56251"],["/tags/高颜值/index.html","a60377bffad7778d29a1d5d80ecb212c"],["/tags/魔改/index.html","c43bcffda6ed8dbc6f32beecd53c005e"],["/tags/黑名单/index.html","8594985ab87a49638945a0a1fe0f6a93"],["/urls/index.html","6e85413503dc2ba6693189910a614a02"],["/vps/index.html","a840d88ef96c858139ca52abdc22ec47"],["/支持/index.html","6804e302ac4afd139768ff33e5d719b6"]];
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
