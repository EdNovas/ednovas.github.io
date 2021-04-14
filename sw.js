/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","8b94e9cd33c4fc5b84098653db00c5c2"],["/2020/11/29/clash-windows/index.html","d337ccf83a46bd99dda9b5e343d512d7"],["/2020/11/30/websites2/index.html","5d96258f28bd85c81c40dfd8434d56b8"],["/2020/12/04/iphone4s/index.html","cb55956aea16b78ada919a350764ed0c"],["/2020/12/04/onenote/index.html","c510e67dcc6974c5ceb3096e5d770f80"],["/2020/12/04/wesites1/index.html","887435251dbeea5a2b88bf530d9a26da"],["/2020/12/06/nokia808/index.html","f387ab6004704fa4bca0ca65d9b5e033"],["/2020/12/07/ipad1/index.html","97f813d001b58298397bb4b77c18edf0"],["/2020/12/18/freesubscribes/index.html","74f68ac45d7c702c2737f7136db9a9f1"],["/2020/12/19/musics/index.html","cfabc4a94b970eddcba9dfd4fa9175da"],["/2020/12/19/shadowrocket/index.html","eb8d455c74fdf244ac3a4dd3035341af"],["/2020/12/19/v2ray-windows/index.html","7b9cc3f903224c5e5f401b22a716d547"],["/2020/12/19/v2rayng/index.html","835483117a3098957a9ab5c43230696e"],["/2020/12/20/beoplay/index.html","b0d46dfcae1de06d4bcef8ab63dce1b7"],["/2020/12/20/订阅链接转换/index.html","4334fb7d85420c4dfc1697f931be50fa"],["/2020/12/21/chrome浏览器下载提速/index.html","bad7ca9c8fd21aeebc0012f901a72c1c"],["/2020/12/21/免费128线程并发下载xdown/index.html","dd7225a29c62885f958ef92fc27dd5cf"],["/2020/12/21/免费32线程下载软件ndm/index.html","6942be6e70b04b2500d70603541c7856"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","a05151219b7755449f84bf05458d1647"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","eac0bdd09035b7b2f8bfc140109b70a1"],["/2020/12/21/广告怎么知道我在想什么/index.html","d1e7eeee1b0badd13533679f3b5b99e2"],["/2020/12/21/无名·引子（小说试写）/index.html","3b870431b8be7fe91db0463646412768"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","2176e509923e9e965d97d9b1365323af"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","0938c21921c44198124771c9e498d0d2"],["/2020/12/21/高速轻量下载器aria2/index.html","65426f6ff1bd30f2d501bbbf9f397634"],["/2020/12/22/2020-cee-roo/index.html","164de9a775e3e9a82b7bdce13f6b9f60"],["/2020/12/22/firefox插件、github、steam富强/index.html","6cd572818adb8759b82adbc31c1847e5"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","a63af82cf21ebeb08151587ac0e65290"],["/2020/12/26/python-day-1/index.html","1f831aa3329bd4bd1e043efd4c3bd18a"],["/2020/12/26/python-day-2/index.html","5e9673ed95bad321b98e00b3cd23f6d4"],["/2020/12/26/度盘不限速下载方式一赏/index.html","23ec6a551372d543063d66e0adfbc5c8"],["/2020/12/26/添加开机自启软件/index.html","e22209a9b26aa8281e28a94878ffd655"],["/2020/12/26/电脑端截图方式一赏/index.html","f8cc81dae25686f3ca8d204bc6323b1d"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","b65befebcccdc4794dd4832c387c6551"],["/2020/12/27/最安全的浏览器tor/index.html","2c6735e5ec537d002761f3f25d050fdb"],["/2020/12/27/网易云刷等级和听歌数量/index.html","0b683b64d7c06e2f118cb80d566b1c46"],["/2020/12/28/freenom申请免费域名/index.html","f6f8fe820482bb264867813c14fc8c50"],["/2020/12/31/机场/index.html","33ae75dbc3e47a2111a1e05d5d8e20ac"],["/2021/01/01/M1/index.html","0a2cf55a5c3c18a87768918cb8e8d707"],["/2021/01/01/compress/index.html","a3c1fee68a051054bbfe29a6105fc2e9"],["/2021/01/01/infinityfree/index.html","6eabf97a761793b4b710a25a85c54577"],["/2021/01/01/硬核翻墙/index.html","2e6e49a0a6102ffed41526b068f7d201"],["/2021/01/02/qq/index.html","315c8b1b5d15f496ed85721e3480bb42"],["/2021/01/03/netch/index.html","2901e72ed5f45bd01281548b8e45ce74"],["/2021/01/03/waifu2x/index.html","09edce396909c29fd794f6ea3aa49771"],["/2021/01/04/ads/index.html","100bcd4875174d2ac3880564be2ad1a0"],["/2021/01/04/games/index.html","1b9c10a4a5f22c5d26ec75589eabc050"],["/2021/01/04/heroku/index.html","8a3cfafa586b2fd271cce5e4dcb2be48"],["/2021/01/06/movies/index.html","3506e61a98143cdca338f790b385b5db"],["/2021/01/07/google2020/index.html","bfca2bb7cd2cfe525f24afafd53b8eb8"],["/2021/01/07/lucky/index.html","2e83ba2daf4be09de0d906815ab7b0c0"],["/2021/01/07/spotify/index.html","069f0982ea4fb387df499fd3f2ded9bc"],["/2021/01/07/thunder/index.html","87b8792eaf266ffc1e05aa787af5dc65"],["/2021/01/08/adguardhome/index.html","46d8321783ca53895be65d0b042b7eee"],["/2021/01/10/IBM/index.html","82ddb4c25ebf8f943421d5b24b8657a3"],["/2021/01/10/potplayer/index.html","b67825465c5f86329a3d4c847e6b0d13"],["/2021/01/10/sakuraanime/index.html","175938f3929968c8b14b3e52af3ec516"],["/2021/01/10/美剧星球/index.html","d38502338bbe88e51a33571562fc0e9f"],["/2021/01/12/telegraph/index.html","c41241b9a38025d6bf8ebb519f8c2ec1"],["/2021/01/14/comics/index.html","9370bca1817e365d046ca14c83f0e359"],["/2021/01/14/ftp/index.html","d82fb9e176043848da999a6d654b52b2"],["/2021/01/14/oraclecloud/index.html","e2ed833338c863572384de431df61da9"],["/2021/01/14/porkbun/index.html","f5bd691085f98ac4707e4a690f24081b"],["/2021/01/14/powertoys/index.html","2063a70e4972b241361b7c816022fbc7"],["/2021/01/14/taptap/index.html","b121ae18fc5144d985b35238d593e91a"],["/2021/01/14/ubuntuvsftp/index.html","ffdd878a376565c019cc42443818f3a7"],["/2021/01/14/小说/index.html","ae52018f84961d729d0c0c6afe1e5322"],["/2021/01/15/freeproxies/index.html","7e3c3ee27b7a71fd8f2e9b7c60fe4130"],["/2021/01/15/incaseformat/index.html","2540c2313790434e8814cd5b6f0790f6"],["/2021/01/16/euserv/index.html","5016ee3d6cf35db0326714fdf84e00b6"],["/2021/01/16/winxray/index.html","eff6da60fd5a2773851d1570a7c5d38c"],["/2021/01/18/qqreadhistory/index.html","1e79bdf9b803592bb89169c9fe41c5d8"],["/2021/01/18/qqrevoke/index.html","7c582338048541ff7335ea646014a4fe"],["/2021/01/19/freevpn/index.html","6e793ae3e86735bf6410a34222bc965d"],["/2021/01/20/browsertrack/index.html","8982604880e40804f1059ffa75e6e0aa"],["/2021/01/20/v2ui/index.html","1f0f04912f34226f7551629ea9f14f01"],["/2021/01/21/failedtoconnect/index.html","b5698b40ab25337edea00551764dd9cc"],["/2021/01/21/gitcalendar/index.html","05002e7fd3e8e29c0ffcdc04e2da9c36"],["/2021/01/21/markdownformat/index.html","522e560aa74dc26158ddf460361ad8e3"],["/2021/01/21/markdowntable/index.html","f13b95d6761fb8e5db3921b5bdd335cb"],["/2021/01/21/vercel/index.html","27186ef2f4da28f054b286d1ce2778cf"],["/2021/01/22/hardware/index.html","5915ebcdcc350a295598bba1ff74d2b2"],["/2021/01/22/muviz/index.html","7809f0e6ff60cb26790c53dff47df3b8"],["/2021/01/22/randomapi/index.html","ff215cb4dd2e79cd3a48cb3c5b71d8f6"],["/2021/01/22/searchimages/index.html","b71f4cf652e5e346337bf9862c642b3d"],["/2021/01/23/RX文件管理器/index.html","a697d7a12fa865da3f18b08aa757aba2"],["/2021/01/23/chromeflag/index.html","c6fd94d29db3e91f6916d171bbbb0722"],["/2021/01/23/qttabbar/index.html","144952cd21c62e08966179605003ebf6"],["/2021/01/24/githubspeedup/index.html","d8edaee3880d77dd8915811962a4dd2d"],["/2021/01/24/jsdelivr/index.html","475c6a8c8bf9c2b1f41dcac9b33d0469"],["/2021/01/25/note/index.html","89110c59a137bfec4b1d7a158e4390b6"],["/2021/01/25/soul/index.html","57a63484c4e7fe3b0b65575349c70f5d"],["/2021/01/26/herokuxray/index.html","0764f00b6f3642e4f8d953b653ee02bf"],["/2021/01/27/proxypool/index.html","3870e754d55f8543be0ddf14a7213cad"],["/2021/01/27/tracker/index.html","b3cba900990db0c076b48ca9feff430e"],["/2021/01/30/pandownphp/index.html","b734a52bd2f63ed6e16f1c50c5b8128f"],["/2021/01/31/newgroup/index.html","9332d2ed6a3ae62873a3fcac92859cb4"],["/2021/02/01/clashlanguage/index.html","997b8309b899d9ca80962c0c31c47970"],["/2021/02/01/encrypt/index.html","737caa0921d6f062c3a45e8f2dfe927e"],["/2021/02/01/footermotion/index.html","b2d111c115e9e6f64c507eaf48e7f539"],["/2021/02/01/gitter/index.html","619a07f05a9b7f485ef0bab4509f0e1d"],["/2021/02/01/pixivtop50/index.html","23e698208871c43b25465520dcea9dd9"],["/2021/02/01/scrollbar/index.html","a20620e3bfc78062985f479e400cc8fd"],["/2021/02/02/clover/index.html","7e8e0b2ec41d9e9ee17004c14329f37c"],["/2021/02/02/maya/index.html","86c42ee946913a5f85a129d478e5c922"],["/2021/02/02/speedcontroller/index.html","0eb224431d94b70dc9c3254e4e523d16"],["/2021/02/02/yesmusicplayer/index.html","1e5118c0ce06b13ea2148a0bea85eb00"],["/2021/02/03/lenovoonelite/index.html","da573c6d53d7b5dc001623ce19e3bf5a"],["/2021/02/03/skipads/index.html","5010a16a494156b6c88d8ee45acbdf4f"],["/2021/02/04/picseed/index.html","6938d45017b6d897203718f9985c0804"],["/2021/02/04/renren/index.html","913fcc202a5bfa1910e93a7742e2ed96"],["/2021/02/04/serverstress/index.html","7faf012123d405259d240daebb860fe5"],["/2021/02/04/wikipediazh/index.html","a6e81d7052724a89b7a02b99c29de172"],["/2021/02/05/googlevoice/index.html","e72f131ff92a2a0febdfb72d66378805"],["/2021/02/06/clashconnection/index.html","a9294ea6d4979bed22407ade2d9f7914"],["/2021/02/06/gvtransfer/index.html","d8220f71b2342c563b0417ef4bb66966"],["/2021/02/06/todesk/index.html","138466c9e228e08f70b07e4220eba2ca"],["/2021/02/06/vpnblacklist/index.html","a3103e8ef95bc5eb07c88b8269a8feac"],["/2021/02/07/mklink/index.html","fd8102f959e51e2b4f6b89bd353657da"],["/2021/02/07/speedtest/index.html","ea543ca3b3e52ffa1c2e02b44b082fe0"],["/2021/02/07/translate/index.html","f36a85c1a7e5e8855835c48edb48935a"],["/2021/02/08/ewomail/index.html","fc467c377bd7e87af51d5bd1ce00eb90"],["/2021/02/10/officee5/index.html","697a3cc812662b924083e35cafc07015"],["/2021/02/10/raidrive/index.html","48ed494c087d55b88bd6696be82411ab"],["/2021/02/13/e5sub/index.html","128e0e35d4221aa4eab7b7c7c608bb8d"],["/2021/02/14/screen/index.html","e388ba79543d07006f2f38567af7db90"],["/2021/02/15/clashtun/index.html","0635354becb2f4b2c2e2e1da8a0062a7"],["/2021/02/15/messageboom/index.html","70731c2d63e7c83a6110decad992a0ea"],["/2021/02/15/oneindex/index.html","54d57b5f979897ee30d9fe3055459f01"],["/2021/02/16/govsites/index.html","650bda7493588ae86c05b8dedd118b96"],["/2021/02/17/hexototypecho/index.html","e1b2faf9e69a0bcc671732239db4665b"],["/2021/02/19/fiddler/index.html","720371d9e26469a88b182927dcaffcde"],["/2021/02/22/potplayerset/index.html","4490afb9653fc43c4d27602241bde1d9"],["/2021/02/22/studyresource/index.html","122557e37d52f6d62010393d1f06192d"],["/2021/02/22/telegram/index.html","2f8a7320de8b37dc9afa2795353af70a"],["/2021/02/22/videos/index.html","392a27db8305aede532851671e273013"],["/2021/02/24/mtproxy/index.html","d0b606b651e9691425821bbe94ea668e"],["/2021/03/10/catchcat/index.html","7efc1d5a6215dc6e0ec66c68210189cd"],["/2021/03/10/neteasemusic/index.html","4c26da3d5cd90c9421826942872412b4"],["/2021/03/10/surfboard/index.html","0ad0d82982195864cda76564013a5109"],["/2021/03/11/vpnandjc/index.html","fda100c05fe54ba11c6f67ec11af419a"],["/2021/03/12/qrcodes/index.html","2880c9b8c0146b7b8241d0c3ab4f3a94"],["/2021/03/20/qv2ray/index.html","61feddc1a6798645584bdac8d14bae7e"],["/2021/03/22/freevps/index.html","48670dfd31baa7d8cbc5b6a24e6f993a"],["/2021/03/24/tgstickers/index.html","b71b06d37a604f605d6b2b0fe636963f"],["/2021/03/25/clashx/index.html","3a2790b59055179051701c4ce0118e50"],["/2021/03/26/bingwallpaper/index.html","446868eec47c073f270bb7c2c14cabac"],["/2021/04/03/soutu/index.html","e31e8d9ab7671b8b668db369adc46a27"],["/2021/04/03/tiyunti/index.html","752f76629291673335c866da5397346a"],["/2021/04/04/btpanel/index.html","1f7718e58075d7cf17e55f1e1bbc7069"],["/2021/04/06/atlasos/index.html","99003308eb9ad36ff82e82c5b325c0c4"],["/2021/04/06/cleaner/index.html","b96144a285d6a93854097ded4daa5ad3"],["/2021/04/14/asf/index.html","fdd75a7666fd90ad261d4fb908698aa9"],["/2021/04/14/rss/index.html","dbdb9cfb0468a41683d6098c01cf8046"],["/404.html","c1090c5fcbf8d5f6e1ce81fe203d6f01"],["/archives/2020/11/index.html","5c8fcf24cefd7bd9f7ce0cbca536292f"],["/archives/2020/12/index.html","30e5260aaca6bb540aa975b986fc6032"],["/archives/2020/12/page/2/index.html","3edf102f00113029c147c9b57ff2fdfa"],["/archives/2020/12/page/3/index.html","9927a6f04df16d565705b3a9fb7b22bd"],["/archives/2020/index.html","4136544e2099e53d511392967b3082f4"],["/archives/2020/page/2/index.html","0b8ed501f922683e763c11fe771199b0"],["/archives/2020/page/3/index.html","2c761211f284a3c3228c078e4c0f407a"],["/archives/2021/01/index.html","0e792efb60dda30ecb7bcf3f5d057d0d"],["/archives/2021/01/page/2/index.html","0e5d2d8e376976013d88e2e7a649e647"],["/archives/2021/01/page/3/index.html","1db62326810f792041833bdd7952fcfc"],["/archives/2021/01/page/4/index.html","66de6659437d14b17b6d0e77e90134ff"],["/archives/2021/02/index.html","3c94205d82e2707dd81f0e56c3614ed1"],["/archives/2021/02/page/2/index.html","57185397bc16371bb14e388fabefa94d"],["/archives/2021/02/page/3/index.html","e19629c6eb7ca4d3867d604d3cd705ed"],["/archives/2021/03/index.html","f7221f39a02cf017a37d5dc92164cd1a"],["/archives/2021/04/index.html","b03f8af1be14eb5c0b2946528575934b"],["/archives/2021/index.html","69374232f7d0e4c0347e0a9cdb2cc84e"],["/archives/2021/page/2/index.html","96c5132e2aa8329647bccd38caf5b1c8"],["/archives/2021/page/3/index.html","65a272b57ba143aecb6b1ef9a07223f5"],["/archives/2021/page/4/index.html","c4d59ea2f870b6dc2cfc473b86fc911f"],["/archives/2021/page/5/index.html","ebc06691aa3bfb6ef596dfe720843ac5"],["/archives/2021/page/6/index.html","66ff5db3cbd7e08266e21203f262ebf0"],["/archives/2021/page/7/index.html","fed45a5f608a7f6e8d7e67439cf42028"],["/archives/2021/page/8/index.html","8d201c1d7851b61d73f8b305aaa2b9d5"],["/archives/index.html","87316d26506a8283f1a7c60a5442a493"],["/archives/page/10/index.html","289a00dc8f54bd0afeaae1bcc2ff889c"],["/archives/page/11/index.html","168e9270559a639c14ecd8a11b538ea1"],["/archives/page/2/index.html","28e0afeaac9cb93f02a4742aa646f2a4"],["/archives/page/3/index.html","4e3fca574640483d79fcb35a3d7ca00f"],["/archives/page/4/index.html","f5e2961c30eacdc61e08b63af58eb137"],["/archives/page/5/index.html","36408ed1b2ac2b47cc0db8b6740d5f36"],["/archives/page/6/index.html","84e3b14907fefc4794da0f6833399c60"],["/archives/page/7/index.html","3b4b01f06ac11fdb3215d3b0f0cc1740"],["/archives/page/8/index.html","d625929077040614cd2c8f088e9e39f1"],["/archives/page/9/index.html","cae89f1f310e901698e8f77006a7dfac"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/atom.xml","cf844fa25dfb3480fb7b6771768ee55c"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","a748ca97f0af2de1c48c9f4df2249c6d"],["/categories/index.html","dcf045517e515efd54d303f772ba7c06"],["/categories/下载/index.html","77c4da6fe504dd26eaeedc12c23c9314"],["/categories/安全/index.html","3052efbdd473fae0c282037a41855d5d"],["/categories/建站/index.html","a3d5c3133505546c7761b9eb2ba4f0c2"],["/categories/机场测评/index.html","cc15fd748241e3dd80dc78cf4356eee1"],["/categories/杂/index.html","abad38a5907b39be0fd88112121a8627"],["/categories/杂/page/2/index.html","92301543be737be92b3a534436362cc8"],["/categories/测评/index.html","bd1f0b81394247484a87a14596daecb5"],["/categories/科学上网/index.html","fc6c8db745f43575a1a21173036f9e6d"],["/categories/科学上网/page/2/index.html","53505d17913b669e219a1d8a32d4a374"],["/categories/编程/index.html","3ab98ea8ea82def41c8091c69fd39067"],["/categories/网站/index.html","429205a0e295353fd5dd7255488647e5"],["/categories/网站/page/2/index.html","b31fb34a7126502be8fecc487fcc8f46"],["/categories/软件/index.html","d371fa7d05db5690a993a7421de67173"],["/categories/软件/page/2/index.html","4361c4f03f432d0695749f98837bc534"],["/categories/软件/page/3/index.html","d06e1041414e8bbd14cbdc5a5612accf"],["/categories/软件/page/4/index.html","e20176c856fe5b83495c818cf025ba4e"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","ccdc0ecdc43b636e476d89bcbe6dbff9"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","539dd6834c805f92106e47b13f6c62c8"],["/ios/index.html","d6adeb1f513a75e785e51409753f496b"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","bd7fa3839611def1755d413a57659c17"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","35b8a7ff43c5e1a7d8fe5d594d0e6201"],["/page/11/index.html","21650ce696018a6440f971ab8060dcee"],["/page/2/index.html","f27b0eea04eb631dc0e8dbef729f0d88"],["/page/3/index.html","03a05bf031da3db43075afcd7be6616d"],["/page/4/index.html","e2f9a5283b4eaf96cd00d4dd91db38de"],["/page/5/index.html","04f14e2036af3b851282f75f213b870a"],["/page/6/index.html","d91d17baf687ae47910fdfc3650bad80"],["/page/7/index.html","af4d634d3cee91893d5e18671846c32c"],["/page/8/index.html","cf09e5001b5c68a2dbf067dda8402e23"],["/page/9/index.html","fa510104829939cf65a7b6ca310819a4"],["/payment/index.html","bbe570c0dd48fd2866accbb21e7a4129"],["/privacy-policy/index.html","16a26a0173925d4388e7542e29577ac7"],["/search.xml","440ff62da198d4206ef1ec8794ee5fbe"],["/sitemap.xml","227e339430d278e5081be2ed0d55090f"],["/sw-register.js","cb94dfdf48556f5009b2f9bbc9e7ef21"],["/tags/5t/index.html","031bc6eca21b5e34ac8b1853fffaff17"],["/tags/Bing/index.html","d488c3aba72a6df2a4741c7cb28654c2"],["/tags/Clash/index.html","d5baa15fe1a10ad628211f7e5146dce2"],["/tags/Clover/index.html","80342c30d1fbba25f9cf3ec5b8e163c2"],["/tags/E5/index.html","53180b04dc4827263b7ebfbfe49a859c"],["/tags/FTP/index.html","29afe801ccb5f48cb658c51128e4bff2"],["/tags/GitHub/index.html","18d9bcc00fa28b7766182d93570abbfe"],["/tags/Heroku/index.html","e90101678b2203a17e07562e2983bfc6"],["/tags/Hexo/index.html","62c8bff6e9845e18f8946781a5e710f5"],["/tags/Lenovo/index.html","565ce37fa47d019fbb41dd4c8c4a6ffa"],["/tags/Oneindex/index.html","66990576b3a1c5851889c8a3565526e9"],["/tags/QQ/index.html","1e95fffbc448d9be3a87b7420c99b051"],["/tags/QTTabbar/index.html","f1fbae35342a238a7edad5343c7c90fe"],["/tags/RSS/index.html","936f97e05c1676a40caea49a94ca7368"],["/tags/RX文件管理器/index.html","309e1cc96f1586680440c34eeb717bb9"],["/tags/Todesk/index.html","3c2626e20b3b69171a5b0bc1edd1aa4a"],["/tags/Vercel/index.html","80531879c24089e15ef0932188fab706"],["/tags/ads/index.html","5fa3854993bbab5b86ed551ec0533fe0"],["/tags/api/index.html","41cb0f8743eea292ca0e5da375cd6db6"],["/tags/app/index.html","34a832d9036970a025a0acaafca52cb8"],["/tags/asf/index.html","5c1e71ca02e3a2651ab353c0aae7a783"],["/tags/atlas-os/index.html","0937fe20e1f2d49599e3b22401f5c53b"],["/tags/blacklist/index.html","18e7bfc2065daea64da9396db022204b"],["/tags/butterfly/index.html","80b79525ed189d302096281e87fb0749"],["/tags/chrome/index.html","ace0ffb6902359c6e12f8dd4041938e4"],["/tags/clashx/index.html","e24e9f274b26409fd4999b7950a58eec"],["/tags/cloudflare/index.html","8f498dca6c9984ef74b4fa32cf11076f"],["/tags/cmd/index.html","ab08f45515d9ad6e383fb682eb988865"],["/tags/c盘/index.html","b5ffeb9945ba5f1181d4fd4add2f00c6"],["/tags/email/index.html","d0e017679d4e3d089404e3ddbf219415"],["/tags/ewomail/index.html","da4f4689bc3cf37332cbc061458a4189"],["/tags/fiddler/index.html","b622b75c83c5509e27cf6fd12aec3fdc"],["/tags/flags/index.html","bb962d0a4651f72f176cbe32683436b2"],["/tags/footer，页脚/index.html","c212a3d4e6996edf424b49b919b8e433"],["/tags/galgame/index.html","dde57a751a27c686651e21e5b6b812cb"],["/tags/git/index.html","69d1f260704c253717544ce514efab27"],["/tags/gitcalendar/index.html","70842a9c13edb856403dfce11598d7ed"],["/tags/google-voice/index.html","8a5a42a37a4375947ad8adf38b929651"],["/tags/gv/index.html","2ded1d35145178246f63fdfb22e1bad9"],["/tags/html/index.html","10648780f1cb0916330de9ec29f8107f"],["/tags/index-1.html","0cc57e121ce676de7aadd7cabe070337"],["/tags/index.html","07009633d3d96a7bd89b6ae31ffeb4d3"],["/tags/js/index.html","b649287d9708770d929f51eb5bfda649"],["/tags/jsdelivr/index.html","1b0b9234cde70d01edd36c8b03e97f28"],["/tags/linux/index.html","d2d5451058841681d06f8b1b39ac8d7f"],["/tags/macos/index.html","0fbafe1f39d5b32d90d27eaf3fa7dc96"],["/tags/madVR/index.html","c3215b4888243ffa3e3f6fb919e4a429"],["/tags/markdown/index.html","338e131e9dd9252f60b1cc66bd1005e6"],["/tags/maya/index.html","28b63b994c06cb25f0a7436c9360c554"],["/tags/mklink/index.html","7b53312098c6151fb154db847800aa52"],["/tags/office-e5/index.html","3a01b9dd687606cb9729d7f7ab0bfd94"],["/tags/onedrive/index.html","9051772713ba6da55307278955f2faab"],["/tags/picGO/index.html","6afd18678d85ef95ab41f36a8da8f6ab"],["/tags/pixiv/index.html","79830949149d60030d302d647c49e710"],["/tags/potplayer/index.html","013cc9d58163873792c932301d084c14"],["/tags/proxypool/index.html","eee6353911d0fe04f55546874354dcf5"],["/tags/qbitorrent/index.html","1863d73fa35aa1dace10cca151bb8e21"],["/tags/raidrive/index.html","bbb2bd29836437ba23db0f0704b7aa8b"],["/tags/screen/index.html","7a8cbe764cdb2fbace024efb64d38205"],["/tags/speedtest/index.html","d9ac2bcee833faa9e319731c2ab56075"],["/tags/ss/index.html","4c1de5e040ad11f8db0662537c102491"],["/tags/ssr/index.html","046a4ce807f8b126bab25f67269c85fb"],["/tags/steam/index.html","e9e8d02ff0ec3cc95fd6b62f968505b3"],["/tags/stickers/index.html","a4a1ebf2db758493d66d67250304c296"],["/tags/surfboard/index.html","569ec0d2464b209deb18fb44d7ae805d"],["/tags/tap/index.html","b6bb2bf2adc2dda92174041f32342005"],["/tags/telegram/index.html","267c65c88dc85ad2651bc1a167a74ee3"],["/tags/telegram代理/index.html","eb79480974a2c101cf0f07b4e17063e5"],["/tags/tg/index.html","4648a3f980e694b11df20471d564b604"],["/tags/tg代理/index.html","34340c33cf2e21ff38e341106d6ab598"],["/tags/top50/index.html","79c92ae77a7702028548431f54614e28"],["/tags/tracker/index.html","623c182584913eb7e12b22fb1197db75"],["/tags/translate/index.html","ff1f0b2bacb6673d3a2b81c3382a7ccb"],["/tags/translater/index.html","e219f032349ad8c7fcfe9b60912fbdf0"],["/tags/tun/index.html","15f136f18b12d7c08a234179edf70247"],["/tags/typecho/index.html","0a23e25c33c93241b9211eed2d5b8a52"],["/tags/v2ray/index.html","d8e7789c3e059ccb0c9436241153689f"],["/tags/vpn/index.html","d0a553c224aef5b7f9cab9c210e083eb"],["/tags/vps/index.html","df6bbb52fc38102ff2ea1d0c576ec30b"],["/tags/wallpaper/index.html","57e1ec7cbc47a8aaf7e8a7a37c90d176"],["/tags/windows/index.html","4fbd954c38c94c658f439f0eae67bf71"],["/tags/windows端/index.html","b9648a98a37d62253f88bec1ae4dc765"],["/tags/xray/index.html","e4b8dab65d4edd8980885168f3658bab"],["/tags/yandex/index.html","66169cf139f2d1bd6d4cd892dc2bf8f0"],["/tags/下载/index.html","12d4a5d172a93eec9336add5d4bcc2f3"],["/tags/不限速/index.html","16b5e6af1cb4024665f0344fc0fe1286"],["/tags/个人网盘/index.html","d1bbac238ed996dbd4e5dfdeac6b34df"],["/tags/主题/index.html","b55c68d3986124140c38c85df1518e69"],["/tags/二维码/index.html","d31633b527dc05445ce0a0d91cb4beab"],["/tags/云便签/index.html","0c4bf840c0dca385d5c9779197862e68"],["/tags/云盘/index.html","ac905257ca73db1cdce2b72802dcb712"],["/tags/人人/index.html","d978c36e06eb0438616c37debd1eb9f6"],["/tags/代理/index.html","1b484878fd45be3a60fd845553f3f0e5"],["/tags/代码/index.html","1912d9090d9777d159c1f641898e032a"],["/tags/优选IP/index.html","163ebba28a3bde4ac10de2b4b98c438f"],["/tags/便签/index.html","0a9d12aacb0ae447ba446d0645a1c6f5"],["/tags/保号/index.html","283461f80cf9e68140c037104b0fa2a6"],["/tags/免费/index.html","c84b0ce1150df8286751a933f16e8e2a"],["/tags/免费节点/index.html","f040129478ec4875666f303f38c51480"],["/tags/冷门节点/index.html","4b33afffd2f95f3caa5aa320ac2efd56"],["/tags/删库塔/index.html","f53ce1e673837292ab9548b53a1dd70a"],["/tags/加密/index.html","aa7d6415a94abf46770b8e5881b0043f"],["/tags/动画/index.html","8b0da335ae7b3470f932a4798dfd8d0e"],["/tags/博客/index.html","456bab6148af97222fd3fcdcc4fe7936"],["/tags/卸载/index.html","329696da63a2e166a214d7450556dcdf"],["/tags/历史记录/index.html","a31fd285fad10462320b2c13b8f05814"],["/tags/压力/index.html","223c26befaf96947136bed8f8182ed4a"],["/tags/压缩包/index.html","0bbb5a45c8f970c0563f858e200ce990"],["/tags/反代/index.html","ad7eacb8836ab4c4586640c272fb897e"],["/tags/可视化/index.html","b8f237b3eb9366af9573c1325069e9f5"],["/tags/命令/index.html","cb855f988633c739c1eb678def78962c"],["/tags/国家/index.html","3a4bf5ff84895925899a24dac4e3dbdc"],["/tags/图床/index.html","e5a9f7ced74cd4d98f101788c1a78d26"],["/tags/图片/index.html","a8734287564d9fcd8d645869822d0d12"],["/tags/域名/index.html","4231c35fa8e3eab8bf5b3c140e2b85a0"],["/tags/壁纸/index.html","289858bad26148f5a99db038db5cf7fe"],["/tags/多标签/index.html","f8264329fa85a3baf080eb3f13c40e2f"],["/tags/奈飞/index.html","dc4e738eed81839bb277adaf4a63df3e"],["/tags/存储/index.html","f59c26329dc3a7e64243692acb66e697"],["/tags/学习/index.html","a293eff553b8804589db7e31d70d6e15"],["/tags/安全/index.html","d8ff0f8aac651a80c87009ceb5d5dcac"],["/tags/安卓/index.html","cb8bb0ffefcb88df61596ce685dab673"],["/tags/宝塔/index.html","ea1bb7b1c8573ff3f6eded8176cbb299"],["/tags/小游戏/index.html","02529071042ef332a3b7ebec63abbe76"],["/tags/广告/index.html","d8435589ec9457eed50b3b7d3c397937"],["/tags/建站/index.html","a7a0f6b5c604cc6615f1419dce48cead"],["/tags/影视/index.html","bf0cd8527591cfda507199090b270ed5"],["/tags/微信/index.html","5f594c8afaf785295d18b1f7c3706262"],["/tags/快速启动/index.html","b4fcc61a2a9d5ded900dc98523f65818"],["/tags/手机/index.html","6b9ecb2973befa62664ce9cbd9e03c69"],["/tags/托管/index.html","f6696841b032c013d09d3c64c676360d"],["/tags/抓包/index.html","75c2832e781f2785205e6ee1d596bb10"],["/tags/抓取/index.html","0f733a64cb9aa17bea0270dbb6a2fc4b"],["/tags/投屏/index.html","ffaf0ad9f62125c53e2d69e1d9849b22"],["/tags/拓展功能/index.html","d61d620c4a466d784ec17c46696c5da4"],["/tags/挂卡/index.html","40bf73a6fa4cf47b0eba85b809ab7a49"],["/tags/挂载/index.html","fde66fb24c1a06892df14febf9f3803f"],["/tags/指纹/index.html","eb509a41e62f372f6c27167654370cb4"],["/tags/接口/index.html","3c1d761e37e3ee00bb1362617f600c98"],["/tags/提取图片/index.html","52a53f9be2984293f525d019e38cd364"],["/tags/插件/index.html","f7d9eaa6a5ad4a5ad9b76f941f4ae682"],["/tags/搜图/index.html","4b20a9c328a9b04ac3d74070332c3b70"],["/tags/搭建/index.html","c262b52fc9d7c255e3b0bd9b91a114e8"],["/tags/撤回/index.html","cb9f080870a94101edd8cd5b25dc7988"],["/tags/播放器/index.html","e6614ca08056bd8aa6d5d9b511d5899d"],["/tags/支付宝/index.html","61c0930ffd60e2e0a8c34144790476b1"],["/tags/政府网站/index.html","117baa1214678183c98ebb83e62976c6"],["/tags/效率/index.html","0b9c31b6512f0b3c92085e20e7f2be26"],["/tags/日历/index.html","f0866fdcbaca1b47da8ae36004987f7d"],["/tags/服务器/index.html","ba78fc730a6edc948077c4357bd2fbfe"],["/tags/机场/index.html","7415f937b084d56f4bb8afb468581269"],["/tags/查重/index.html","03f547c6083d8dcbe8638bf40dcedaf7"],["/tags/桌面/index.html","c951885325fdd83bbce1036b47d8faad"],["/tags/梯子/index.html","0a5fd8f02481890b054110612199f801"],["/tags/检测工具/index.html","3cfbc591f9845582cb25da9d52f13d34"],["/tags/汉化/index.html","e58975fc1e31af4b589ba73795b828e3"],["/tags/测压/index.html","cb0d32cde58648549f856dd0ee81f749"],["/tags/测评/index.html","3616649ff0278889972cea15aca90309"],["/tags/测速/index.html","12d8e52a0a92102048952b699ce13aa6"],["/tags/浏览器/index.html","68888fdbcb628672cbee1fe36a180e1a"],["/tags/清理/index.html","8825079fe3cacddb3653161e50c4f3b8"],["/tags/滚动条/index.html","a31685748330d1d2516d32b351f543b0"],["/tags/灰色歌曲/index.html","827e1b334a6a212cbeeed236241f198f"],["/tags/电影/index.html","72886653960ac35bf18394b53735fbdf"],["/tags/电脑/index.html","29c144998c3509ac438d7de4d2ae5fc1"],["/tags/电视剧/index.html","b6095cfeae54eeaddb8368813b630d7f"],["/tags/白嫖/index.html","d68829ffc75f0efe24f356a92dbd57a4"],["/tags/百度/index.html","d30e12079586728e65c367057e6f86ea"],["/tags/百度云盘/index.html","ba3bbd85622942120652d0ddf7e2ef7d"],["/tags/百科/index.html","dd7818900f0d7e36783eba1c52256748"],["/tags/短信/index.html","8813e411f8aec67f421fa7552cc797bb"],["/tags/硬件/index.html","ef3b1682b6299295881c2aa216cca0f5"],["/tags/科学上网/index.html","0ed402b2206bd7f427d2ccd2ee529e42"],["/tags/空间/index.html","5be7ea042309de140258000ef81ab314"],["/tags/笔记/index.html","ba37dbf21872e8406d913c42ed1ab14b"],["/tags/简洁/index.html","98726abbbde3b3333361d3d8b4ce4fe6"],["/tags/简约/index.html","ee24e055d3daf5467b35ead52bd20a96"],["/tags/维基/index.html","534b2f51fd6204620074b6c654de3f1b"],["/tags/网易云/index.html","c1384b8514fc76bd2d74e148aaefc547"],["/tags/网盘/index.html","c28d014040c24d4fc6aaae752e71c1dc"],["/tags/网站/index.html","c701dc568eef121f93e91724d3b51432"],["/tags/网络/index.html","5c909aed4cae7abdf81499cc8a586d75"],["/tags/美化/index.html","6e937a2af7f98c6354de6547c6f85cf4"],["/tags/翻墙/index.html","06a6a4c4a44cc0376aa7224087a2ae89"],["/tags/翻译/index.html","ea0738da01e88f2db58263450431690f"],["/tags/翻译器/index.html","8178d13c516fda6944ea04052f96e869"],["/tags/聊天/index.html","52945ffcd7381d013bfb9ca76a6c2df9"],["/tags/聊天室/index.html","5b60769694006ced2d22388468415be9"],["/tags/联想/index.html","e11669527dca0083345dc83db5050849"],["/tags/节点/index.html","4acf6730ad0da88262efb52ab788c9e3"],["/tags/虚拟手机号/index.html","093ba97cff08516903e5a4a8301a1d8c"],["/tags/补丁/index.html","b28ead65dab7fe0505192c83e285f5bc"],["/tags/表情包/index.html","4fb3023959c7e55424516d2f1aa888e4"],["/tags/视频/index.html","a4134a9072c93acab9aaf07d42d8de25"],["/tags/解析/index.html","fa4585344b60f2b2f027e15babb52128"],["/tags/订阅链接/index.html","95d539b65fbdcad08ad8c21ba12573d8"],["/tags/记录/index.html","ef20022ffd3b97497bdb3f2f78d295eb"],["/tags/识图/index.html","13965c17aac93a4cf054bbab3d04ace2"],["/tags/语言/index.html","24a18b7274480f3db7bab25437e1ba4a"],["/tags/资源/index.html","953c1235990226a5a15840fcfbff4499"],["/tags/资源管理器/index.html","209cd8a93c30acf25bdd6b43d95f46b2"],["/tags/转移/index.html","11c588d0e519b5ccd23f79517729c1c1"],["/tags/软件/index.html","0d522ed26ae10aa012ba356b3ca13322"],["/tags/软件/page/2/index.html","b401833951ff5f97eed3bfe63f790ece"],["/tags/轰炸/index.html","b62a675630a9a5f369349a5d1696b965"],["/tags/迁移/index.html","fefdc3dd4d1d2b09215bb9d66afa3244"],["/tags/远程控制/index.html","ec64253045eba58684e36316638c0c19"],["/tags/连接/index.html","b3007fdd938fff39669799c886aa9dbe"],["/tags/追踪/index.html","72225df2200a7bcda20859d52f909bd3"],["/tags/速度/index.html","91ecf66c87084a568cf774795217a202"],["/tags/邮箱/index.html","1293f4265e3de2973672bcbf828ce700"],["/tags/酷炫/index.html","43e93aaf8e5be5ae45c06e8d8b3b3552"],["/tags/钓鱼/index.html","3b0fd8fbb6c79da0fcf0c2a7f269314e"],["/tags/镜像/index.html","63b3d4fa2158426da6ce8c96bba077f5"],["/tags/阅读器/index.html","cd950a8632cc4f17f8f628b85282741a"],["/tags/随机/index.html","1f1e9156bae260f032677d1e6beb1e49"],["/tags/隐藏/index.html","5fefd692b90fefd78d61bcad6813ffc0"],["/tags/面板/index.html","81c6a9d25180d11ff3e0974bece68160"],["/tags/音乐/index.html","0071a9d52bd1daab9cf4892877e972dd"],["/tags/高颜值/index.html","f2a3ad6530a00561b07c83834f422cb5"],["/tags/魔改/index.html","8940288cc0184fe95f10c6861fa2c4f4"],["/tags/黑名单/index.html","69c28c6c31e9f1e7293fdebe03efd823"],["/urls/index.html","8eb6b93e795023821ccd003d33e204db"],["/vps/index.html","f812b2f2a7ee5964e3644e536478ed8e"],["/支持/index.html","26a092e866210a29d48eba5cbe4c61e1"]];
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
