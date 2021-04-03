/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","da646c30e74227baa584c134f39227bc"],["/2020/11/29/clash-windows/index.html","88d64783cf5647b56befb01956244650"],["/2020/11/30/websites2/index.html","3609d735a6705adb55acc77e7a3f0c6a"],["/2020/12/04/iphone4s/index.html","7aba3e9074468073ec7dae4506ebc0ed"],["/2020/12/04/onenote/index.html","a440670ff507f9ebae284023cdafd3e9"],["/2020/12/04/wesites1/index.html","15047f20bf47f1cf6cd3cff1d6319862"],["/2020/12/06/nokia808/index.html","6e08ef7a5bf69be7f94b44e3d9cadf3f"],["/2020/12/07/ipad1/index.html","8580258c55bccefc178fa9ff5594b1e7"],["/2020/12/18/freesubscribes/index.html","d23d5e1e80246c89bbaf301b8588da47"],["/2020/12/19/musics/index.html","7bb7d7e30f2ae19c7387558ee010f408"],["/2020/12/19/shadowrocket/index.html","01d7679fd911451d7fe60b5fd851ccf1"],["/2020/12/19/v2ray-windows/index.html","25401843e0c0a967881acb710567703c"],["/2020/12/19/v2rayng/index.html","0cda76588398445c7bdb473e2894c92f"],["/2020/12/20/beoplay/index.html","0f0275cf71181f17ed8e2d9998804616"],["/2020/12/20/订阅链接转换/index.html","3fafe2977b3cd283da8c409129c00068"],["/2020/12/21/chrome浏览器下载提速/index.html","05b186ef0845abc3e4d3df108e6d52aa"],["/2020/12/21/免费128线程并发下载xdown/index.html","820744637f4aace96a605554d442ff25"],["/2020/12/21/免费32线程下载软件ndm/index.html","50938f6ef4d152bcd31be69bf269238b"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","2c65eda055d2ee9730821218a0ae0965"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","31163892670fffdde75efc043206861e"],["/2020/12/21/广告怎么知道我在想什么/index.html","110f3669f9173fc600a0cf01a2612411"],["/2020/12/21/无名·引子（小说试写）/index.html","d7b1cf91887493d0c1b7396f8977a9ff"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","3d7bbd23fa1ebc489e3e1dc05780f403"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","03b8e5f4ddf79ff4a7279c60d9d261aa"],["/2020/12/21/高速轻量下载器aria2/index.html","bf3956378ac5dd65eeec426483516614"],["/2020/12/22/2020-cee-roo/index.html","dccd0f1e05f1ac32cf4446d64c9e915b"],["/2020/12/22/firefox插件、github、steam富强/index.html","249f47c911891d9c835d163395a0a0d7"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","178deadcceaee77ae5b51b51608dfa73"],["/2020/12/26/python-day-1/index.html","7521e50551632718d4c8c869b35ba6da"],["/2020/12/26/python-day-2/index.html","5c69248c768583f809f56e39361b1e61"],["/2020/12/26/度盘不限速下载方式一赏/index.html","0203ecf42b109075096f788cac6733bd"],["/2020/12/26/添加开机自启软件/index.html","e3ba733c1a7c697b4f07db59a95bf46f"],["/2020/12/26/电脑端截图方式一赏/index.html","9b5e3f8310668ab92161065eed77e5fd"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","89d7b097e5d31ecabcf3162073b70df0"],["/2020/12/27/最安全的浏览器tor/index.html","396cb8a33a159f979eff91d5c614211c"],["/2020/12/27/网易云刷等级和听歌数量/index.html","c4891858cc7a091af703c2ed8b833167"],["/2020/12/28/freenom申请免费域名/index.html","008a5c77d04fda35dd48df04e2dc09f3"],["/2020/12/31/机场/index.html","dd93039dd6216a3a8ee32209cb891523"],["/2021/01/01/M1/index.html","1a46aad44fcdc31800a6916a96a0e8ec"],["/2021/01/01/compress/index.html","b19ef4857602d73720ad89537b324a41"],["/2021/01/01/infinityfree/index.html","5143b3b27b5b66635491de4adf41e994"],["/2021/01/01/硬核翻墙/index.html","61912ae100b100d830c51477c5aa2d93"],["/2021/01/02/qq/index.html","6f975d551a2cc7769bccfbb276cb79ac"],["/2021/01/03/netch/index.html","8fabd492646f3888e1dbc4ad5dc101c1"],["/2021/01/03/waifu2x/index.html","8ca47cfefe887e40394f3a6c11894c92"],["/2021/01/04/ads/index.html","afec4ca29b338ea4e730e8d44e31f1e4"],["/2021/01/04/games/index.html","f66430a81971a724572a4409488bb245"],["/2021/01/04/heroku/index.html","2f807c9a3a27206445553211fc472d82"],["/2021/01/06/movies/index.html","1d26768ec8146f176f426d846116f1ad"],["/2021/01/07/google2020/index.html","e7eefaf58b2c0ad76a85b5029d4136cc"],["/2021/01/07/lucky/index.html","026238107214efa0fe788a1c4717197c"],["/2021/01/07/spotify/index.html","daffa111d171104c4c973e273725c345"],["/2021/01/07/thunder/index.html","fb2b6b4e344c11ec1b422e25aa7ce4ad"],["/2021/01/08/adguardhome/index.html","2a6335f0866bc156c43a10e0baebbdcb"],["/2021/01/10/IBM/index.html","41c3c5f8b7e77f56d1cc492b983f59cb"],["/2021/01/10/potplayer/index.html","c08bbb667cb3cffd85139e6a2df7c5fc"],["/2021/01/10/sakuraanime/index.html","900ba7a0eae734765b974075dfec6b29"],["/2021/01/10/美剧星球/index.html","0259be8d4fbfe4d67f3d32a43382d35a"],["/2021/01/12/telegraph/index.html","16b2380c8ceadec58e2a431678277b0d"],["/2021/01/14/comics/index.html","0d80c043b4c49311e64241234daa7b8a"],["/2021/01/14/ftp/index.html","5de0858b624d708bd59253331e4200fb"],["/2021/01/14/oraclecloud/index.html","3b26bffb392cc9add371d1da65e401ea"],["/2021/01/14/porkbun/index.html","7d48bbaba977db77592ffea59c6c1ac1"],["/2021/01/14/powertoys/index.html","902e858b1d6bf5b6468653ba01bdad8e"],["/2021/01/14/taptap/index.html","90f8189079baf23b9cf7032c83ee7110"],["/2021/01/14/ubuntuvsftp/index.html","80955b0f75934fc38751e64b7ad84c10"],["/2021/01/14/小说/index.html","b7a7c34d379715334a12f64e9ff46ea1"],["/2021/01/15/freeproxies/index.html","b159e9ef2f99b4083a7d09795dd779e0"],["/2021/01/15/incaseformat/index.html","7b33fd0443e4fb0f54a5f869fd0ff6db"],["/2021/01/16/euserv/index.html","0fd76941c2c118d0df9c665db47cc7ff"],["/2021/01/16/winxray/index.html","d8ab28a4c9bcd8b56c79be2eb7540494"],["/2021/01/18/qqreadhistory/index.html","b08abbef85614b7356ac64357747bfde"],["/2021/01/18/qqrevoke/index.html","2a975d7de8c5a140c60304e64c724661"],["/2021/01/19/freevpn/index.html","5b37f17ba3fa8f47d0f56963852e3014"],["/2021/01/20/browsertrack/index.html","bf8abb6de0d4f13480b676825afdd5c4"],["/2021/01/20/v2ui/index.html","63029c0b1466ebc73f5d1e28cc1938ae"],["/2021/01/21/failedtoconnect/index.html","c9c1f8870c92398dfc2779a8efa034e2"],["/2021/01/21/gitcalendar/index.html","917c5a88481a081c704ef69b9453a5f1"],["/2021/01/21/markdownformat/index.html","1f70b6e2d015ab69dac19ae67dd252cf"],["/2021/01/21/markdowntable/index.html","95dfde9c91cdb5750f42cf49a69e181a"],["/2021/01/21/vercel/index.html","d48276be45c684d0020280206db830f4"],["/2021/01/22/hardware/index.html","28a123edb1c1a31141258f2eeb80e4a2"],["/2021/01/22/muviz/index.html","ec4d260734ff72d836a95bf7ac82d5c6"],["/2021/01/22/randomapi/index.html","821818d43841bb718ffb9966cc91797d"],["/2021/01/22/searchimages/index.html","fa1fdbec3ed93a60449fa7f725565bfd"],["/2021/01/23/RX文件管理器/index.html","7e8a69aed566141597409322602b4529"],["/2021/01/23/chromeflag/index.html","afb4702c9c0ae955da4f67aecf242ba1"],["/2021/01/23/qttabbar/index.html","404dab6956084cb68087d25faa6af254"],["/2021/01/24/githubspeedup/index.html","d2b22b6c417f807f46770383342aa7c2"],["/2021/01/24/jsdelivr/index.html","7220584883aaad9b955524d4b0e2902a"],["/2021/01/25/note/index.html","3f20cc625b93703de7e97477f7fd74f4"],["/2021/01/25/soul/index.html","fc37af65080cc641609d5afd3302c4d3"],["/2021/01/26/herokuxray/index.html","fa0a407de6a9384e17ba14bf69d63de7"],["/2021/01/27/proxypool/index.html","097ed411444cc3abefa46b2a95c510eb"],["/2021/01/27/tracker/index.html","b32c8f9d66c9ead7936d1e5312a0cfdd"],["/2021/01/30/pandownphp/index.html","023a6ff9b04381f06e99dea31ccd04e6"],["/2021/01/31/newgroup/index.html","5f4b0e2b27e7741a6d9ce814868ee022"],["/2021/02/01/clashlanguage/index.html","9de4b0c55e34a0442e96abd3ca6c9cff"],["/2021/02/01/encrypt/index.html","81fae46e71db5cda0ed87921c4babb6d"],["/2021/02/01/footermotion/index.html","9655a407efad2df701e1075eec1415c3"],["/2021/02/01/gitter/index.html","95944aabbe2379efebf39e9cbf81d92b"],["/2021/02/01/pixivtop50/index.html","f62f81cbec2840e70779453cf9fa2e80"],["/2021/02/01/scrollbar/index.html","68b2ccf957c862835f78d89c79b5e0c9"],["/2021/02/02/clover/index.html","725ece15f320830cdcd5d3840e5401d0"],["/2021/02/02/maya/index.html","642fefc9db296a131efe13c84b5cae31"],["/2021/02/02/speedcontroller/index.html","d7a50ec3186968e3783c9c6fd2081565"],["/2021/02/02/yesmusicplayer/index.html","991166f7fe248b5298edaa59951c110f"],["/2021/02/03/lenovoonelite/index.html","5693dbc3de18776cfcffd3307e799975"],["/2021/02/03/skipads/index.html","ccbccb8b022375843d06f80b97cad93b"],["/2021/02/04/picseed/index.html","13117a8ddde0a95693b802e1d9c04c7d"],["/2021/02/04/renren/index.html","3b734b957d77d6989e7ea011eece63ae"],["/2021/02/04/serverstress/index.html","06e95b50390ee0bfcf75d78dc9c495f6"],["/2021/02/04/wikipediazh/index.html","886f7c4f66de8081a6e2a1c3162dddd3"],["/2021/02/05/googlevoice/index.html","5776cff44fa9568615e283935136b635"],["/2021/02/06/clashconnection/index.html","f580d06e76415654106020dfe64e1de8"],["/2021/02/06/gvtransfer/index.html","edcacaf257d5c40aadce5154fbf201d1"],["/2021/02/06/todesk/index.html","af1d2d5ed801534e9bc4e8b062462437"],["/2021/02/06/vpnblacklist/index.html","11346cd47921558ccb06076db8fc88f2"],["/2021/02/07/mklink/index.html","35d1501b363b7ec5ca679d4bc59c88de"],["/2021/02/07/speedtest/index.html","edf45be7cd078a6b6a2345157b203809"],["/2021/02/07/translate/index.html","0a0150fc33ef2f399c69cdfc8626c597"],["/2021/02/08/ewomail/index.html","5237cc747307683dc6e6a1882b022c26"],["/2021/02/10/officee5/index.html","82ae1edb2c618c564942d39bee810a85"],["/2021/02/10/raidrive/index.html","7f2e1e047d78200504a1799dccc3a168"],["/2021/02/13/e5sub/index.html","30352e9596360d58bae1ab9bc4182d7e"],["/2021/02/14/screen/index.html","931f6cba3dff9f10024a07b8e5fb0ea5"],["/2021/02/15/clashtun/index.html","384059969c8063eb41c4cdd12eb009ac"],["/2021/02/15/messageboom/index.html","7ac1abb4ef80e85709125b113a1a83e9"],["/2021/02/15/oneindex/index.html","66b4f0449a871b3cea558ac1df7b3b6b"],["/2021/02/16/govsites/index.html","0e56cecfe929f0ad800e36838395de9c"],["/2021/02/17/hexototypecho/index.html","af1199f9d6672159f79b95fd9e2ef14b"],["/2021/02/19/fiddler/index.html","431fd7595e30c355058762f5a6703da4"],["/2021/02/22/potplayerset/index.html","674f2fef200e92cdca767cea1a19cd56"],["/2021/02/22/studyresource/index.html","dec2a9b0245b2460876839c4622233cb"],["/2021/02/22/telegram/index.html","a6499de52f3b793c8861a42a48848ff0"],["/2021/02/22/videos/index.html","8bf5b0c806ebf2d7369ab460108a12d1"],["/2021/02/24/mtproxy/index.html","f8b0c54ef0bc6426e224e3799c8e8c79"],["/2021/03/10/catchcat/index.html","2e5469cefa8a3314c7957e6299305446"],["/2021/03/10/neteasemusic/index.html","196575125679fc1c01f08dea4232e3ed"],["/2021/03/10/surfboard/index.html","c7512e227cd2c3fa304115806e153e97"],["/2021/03/11/vpnandjc/index.html","470d8a3e6411bd7bb8693134325037d1"],["/2021/03/12/qrcodes/index.html","19dfa1744e2423f38e5e1b539b71fdeb"],["/2021/03/20/qv2ray/index.html","8af028e2c60bf0ad361b61420d75fb39"],["/2021/03/22/freevps/index.html","67c845de791e2e14461d9d18e4d60378"],["/2021/03/24/tgstickers/index.html","9160903ac2a3984e1b02bf20bd5a83cf"],["/2021/03/25/clashx/index.html","720cbdbc5f7bbfdaf8bea0328a947c8a"],["/2021/03/26/bingwallpaper/index.html","bbf439b94b69f09cdfaadbe78ae3c5bc"],["/404.html","bf68951cfc1d57e82d501f05dfbc698d"],["/archives/2020/11/index.html","ee86ad2bb1e138ee9556365baf0003f1"],["/archives/2020/12/index.html","d765950d55b8150057c64614158c0040"],["/archives/2020/12/page/2/index.html","2190d26b6c0df27d3b492206e3d77748"],["/archives/2020/12/page/3/index.html","df6531e975afb53dfcee7c92b75c39f6"],["/archives/2020/index.html","d6d5221fd8a183e82d4c80cc356e8575"],["/archives/2020/page/2/index.html","a812f6ff884b8a71f17a37bacf7f6aae"],["/archives/2020/page/3/index.html","4f4bcbf3b9b5f44ce41c1abea176c8de"],["/archives/2021/01/index.html","483e2221d20fcc103c4b5d13fe2613a6"],["/archives/2021/01/page/2/index.html","8d66bb16f448b1ee717111987891c80c"],["/archives/2021/01/page/3/index.html","2dd3938b507d8fa794113f5d2a0776aa"],["/archives/2021/01/page/4/index.html","23429b48a3092ba1c7336cb1dc7aae18"],["/archives/2021/02/index.html","252063b0b0c5e2450c2663e007fbdb96"],["/archives/2021/02/page/2/index.html","2830d9f96c16d6d77100fa6abcd96d83"],["/archives/2021/02/page/3/index.html","e62bbdb03aa4f92e282cb57356e4de27"],["/archives/2021/03/index.html","99a7df220eba017bb0e0649a39c89def"],["/archives/2021/index.html","243774e5a9d2a46b7b541c6e0399a9b8"],["/archives/2021/page/2/index.html","f6c6afe2e400add37ad1bf4867f19eca"],["/archives/2021/page/3/index.html","2a088b1327e7274306bfd88ae45e3df0"],["/archives/2021/page/4/index.html","8fa40ca7c09f88572bbef73b1581f7ce"],["/archives/2021/page/5/index.html","df5d5960b0a6af7484ddc2e979d5bd0b"],["/archives/2021/page/6/index.html","c8921f489b5f9f969bdb47897e6bf9db"],["/archives/2021/page/7/index.html","cc9884e3f2df836a0719d281053da9eb"],["/archives/2021/page/8/index.html","a404d6cae3b7d3d80f48e63300af7627"],["/archives/index.html","7ffc7cd1dc6f5bd3f078b66e2339c207"],["/archives/page/10/index.html","b7bad2c34c0bae086a863f8eba35ba8f"],["/archives/page/2/index.html","32f5f4e7b5c8ff333c35f4133efd9152"],["/archives/page/3/index.html","b9f3a298a65c3d85fad406e3300287b0"],["/archives/page/4/index.html","6104c80fcc8ebe1ebfa45cbfd3d225d9"],["/archives/page/5/index.html","258327b35905ffb14a63ebd38ebc2cf1"],["/archives/page/6/index.html","ce3af05912c89c8a79808dbf22c09d63"],["/archives/page/7/index.html","64259200d21dea33f64d44af0fb1f356"],["/archives/page/8/index.html","fd91c540252036ffe273b0ade5b15b5d"],["/archives/page/9/index.html","a80a439dcc12046e4fc8e0411cfbb253"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","842bdb47814b085c74f26df642ad6f36"],["/categories/index.html","8476df2ff7b554cd63664c3d9943ce27"],["/categories/下载/index.html","38fe37a9a4ec2fd5c9006fe09ee5202b"],["/categories/安全/index.html","50461d054d9cb4f5f22c2d558e04d80a"],["/categories/建站/index.html","44f7893ebae78ca46f4e8375ff33822b"],["/categories/杂/index.html","cef34f30aedc0d471d107193280b3e90"],["/categories/杂/page/2/index.html","34399b7c41ac08546ed2efd33c88071c"],["/categories/测评/index.html","04fc8173e89944d89f9405c6fc009c2b"],["/categories/科学上网/index.html","c129337be9db90ea45777dd1b4ba3ee2"],["/categories/科学上网/page/2/index.html","9f986c8d8ea880515a948d9422650e93"],["/categories/编程/index.html","39805c4bf7573126b06a58f2d1da33b6"],["/categories/网站/index.html","51d05c16a6790a693bd500fe4027bbb3"],["/categories/网站/page/2/index.html","dac0b6ee4aa49528d80836224ff18bca"],["/categories/软件/index.html","f85f2d96ce37d186316ddc6bc3834cc0"],["/categories/软件/page/2/index.html","a3be509413035f7064f2a93d52b7f7a2"],["/categories/软件/page/3/index.html","acc2964bbadb78840f44860e44bebd46"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","e66df4edb0f503bfd719a8e79284a8f9"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","9f163a8fd77e05deb338edcc2738773e"],["/ios/index.html","5d0fd132431d395b6e085811591c1f9c"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","d93427416de516f7d06f6c03112c297a"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","08e52311b4cb07cc4fc87858ff8071d8"],["/page/2/index.html","4813985aa6c21e298c792abf76211eec"],["/page/3/index.html","1fd2308e180784ac337dcc8c4d4c22bd"],["/page/4/index.html","2fc3c53e49a6144605a88535fc25ad37"],["/page/5/index.html","979fe876d5d5e21a683c909b899e0347"],["/page/6/index.html","f434c8a60c2b71c8ab769d35eef7fef3"],["/page/7/index.html","0d7a209b5584e0f2f10f081b25b5e6be"],["/page/8/index.html","5a06a6bd37916942e2f6bbc6d327e204"],["/page/9/index.html","6dd4de1e307b282cf4b465ff26011eaf"],["/payment/index.html","4d1a47f5379579acb5a87764a0c42415"],["/privacy-policy/index.html","a055739059322ea57f2b7847a7b089de"],["/rss2.xml","4de761da6c1f6a6b584be22c42643031"],["/search.xml","609478c792436d4b3f34685c9615b64b"],["/sitemap.xml","fb2c246bc6f1d68f9fc04a5a5cfc1ebe"],["/sw-register.js","4205ec0084e1317f0e9b9c0bfa2ed8a2"],["/tags/5t/index.html","af32fd9996b59d49e9f33a03bd520c9f"],["/tags/Bing/index.html","494a99630db0ece8d54d06505a1ae9ef"],["/tags/Clash/index.html","903a3d00d53960edfbabaf8ad8ff9c65"],["/tags/Clover/index.html","326c38ef789c0eed44dc6e4885366d91"],["/tags/E5/index.html","96cc8a64f652efcbc23ee01e16062ec0"],["/tags/FTP/index.html","0037543c55671cd636073c642a57e213"],["/tags/GitHub/index.html","cb5feb0cfa043114313aee3f4b51ab87"],["/tags/Heroku/index.html","e56187581cd54b9993c0857111748b61"],["/tags/Hexo/index.html","8e19c0486f51e49d108b203ea9270b8c"],["/tags/Lenovo/index.html","9438457bb247183207b2f1dc122c229a"],["/tags/Oneindex/index.html","eb0161925a43638b4e2c177569d73283"],["/tags/QQ/index.html","292c4ab7b1f3317a6f47a2ca758bcaeb"],["/tags/QTTabbar/index.html","d6b1f168c46ede22ec377d019abd3c0e"],["/tags/RX文件管理器/index.html","11c5816970ed1b86fdd286da7692721f"],["/tags/Todesk/index.html","1602ffac98978d29c72f8b2de1385d44"],["/tags/Vercel/index.html","7dc8756d0f29301cebb43a2e773dbb2a"],["/tags/ads/index.html","a0f461aaff342a2a3fedf57854f06160"],["/tags/api/index.html","00b6aa08e0fd52284b2c0b87ee0b956a"],["/tags/app/index.html","ac82fb88066ab7fba45659037d36e851"],["/tags/blacklist/index.html","8e965b823b5a2751f5ede696d7f5c63d"],["/tags/butterfly/index.html","929ac41d38e98becdc885ca57e9f54c3"],["/tags/chrome/index.html","2a6276de4a1d173f30cadf1130b54cf4"],["/tags/clashx/index.html","fd4d5aaa206745982de9d14b8a54635e"],["/tags/cloudflare/index.html","fe8d72bc7111b2f2bc1d5339daa16ada"],["/tags/cmd/index.html","c58a7c00bb26ddf1c67c75e8e5976f37"],["/tags/c盘/index.html","4cb387564e27d017f24c1806a804ffea"],["/tags/email/index.html","de517313b51a371f95062fc760e8ffcc"],["/tags/ewomail/index.html","39bd1bd6583ba0698d4972bafc521d41"],["/tags/fiddler/index.html","76d1ec41663b2dcf28f209c9739eb6bc"],["/tags/flags/index.html","5c4ad3aedda6006cb6875248869fe9b2"],["/tags/footer，页脚/index.html","5e540d5b9d0a68481bde20aef899d86f"],["/tags/galgame/index.html","a53cfcf7124b12af00aea8ff10b1b300"],["/tags/git/index.html","08b65bcf104e047e80d2204323b77848"],["/tags/gitcalendar/index.html","7125147b8bc65ba88e1c6b120ad62d48"],["/tags/google-voice/index.html","c0995a61c28f66ae96786f7452279fd2"],["/tags/gv/index.html","4f04536d7713896f03ebe677f89fc422"],["/tags/html/index.html","2be09afb9d9d065b452a237e913454de"],["/tags/index-1.html","2ca58e604837f21b4fe8cc5d93003bf0"],["/tags/index.html","59fd67ef99d794ef247f7ee2904f3e2d"],["/tags/js/index.html","cd9fe83be991d4723c9cabddd45007bd"],["/tags/jsdelivr/index.html","b6ba638cd2f25b0dd53191d32386e1e2"],["/tags/linux/index.html","5133bfc9e81dc74ff29306254e2802d1"],["/tags/macos/index.html","1c53863ccf2c20f71858fc426c3eceae"],["/tags/madVR/index.html","5ffc726b039895961fe58bdeac9f4e54"],["/tags/markdown/index.html","75f5d7d035d0f3268705001a22104e92"],["/tags/maya/index.html","9791e4ae0d9a0e2895b63b7cef94e83b"],["/tags/mklink/index.html","e931398caf50f1c4efdc0b2b39716d76"],["/tags/office-e5/index.html","1c411a29d4f8299c0b358c88bd57dffc"],["/tags/onedrive/index.html","b64e14dfd425f9b96dcfc959ca86b2ab"],["/tags/picGO/index.html","a1b940024a823e1dba198f3299110fdb"],["/tags/pixiv/index.html","a0312722afb5d0397dee135abd2cf02c"],["/tags/potplayer/index.html","2dc4b1af3fde2a3a9b4b481dcf40058c"],["/tags/proxypool/index.html","c4350884047a929d9ca93609e37092b5"],["/tags/qbitorrent/index.html","65f0d2a0e1c7aa204c61855c49906c50"],["/tags/raidrive/index.html","6c95ff4d87cf44f6084deb6b3fa68651"],["/tags/screen/index.html","ad447ee342e38743ddbea463e2003a73"],["/tags/speedtest/index.html","d57c782d7541e16c5b20d092f181cc29"],["/tags/ss/index.html","c7b7cf85e89eea3f174ce85ae23b49c9"],["/tags/ssr/index.html","ecb75cb66c5ef53d3c3a996eb50d873b"],["/tags/stickers/index.html","7ba9b8d78cdc4063d7e39fcf997edde8"],["/tags/surfboard/index.html","f4801d0712746f0ba8f62bf3b378b367"],["/tags/tap/index.html","dbeb76484baea22bd023818be477a221"],["/tags/telegram/index.html","8d27ee445bb443fd2c7bbf7994396804"],["/tags/telegram代理/index.html","d0e1b5c5b2415e162a0b62d5f485b6fc"],["/tags/tg/index.html","180e73f559c3fc6fac988185a3200b9d"],["/tags/tg代理/index.html","d5bb66214b7882ce94bcbdee754d464e"],["/tags/top50/index.html","537a1495efb3d455f2fbe63ac61cce98"],["/tags/tracker/index.html","76a633fee786a07380dc54b781d5d9e9"],["/tags/translate/index.html","119f2b4fbec978182b18eea1b6f5e884"],["/tags/translater/index.html","edd4ab36810c097be363ee8427b7d4e0"],["/tags/tun/index.html","e37d87070b9514185ff716640883abe9"],["/tags/typecho/index.html","fdf39dd43b9ccec29d8e654afac1e042"],["/tags/v2ray/index.html","87274c35a9f4d6988a431e02051f2660"],["/tags/vpn/index.html","7ccbe3641d1f7f0d6280b04d14cd7732"],["/tags/vps/index.html","43209454b4dd508b33d4abe814a0fe1d"],["/tags/wallpaper/index.html","00c47d3a115b33ca4425ac58a3ce46cb"],["/tags/windows/index.html","e94bfd05febda4a4e9ac5cdb614ea1eb"],["/tags/windows端/index.html","cbe9c333631eb60395c04e2e80f784ba"],["/tags/xray/index.html","4b3e50ddb5ce41e4dbe0e4a3a7ab2738"],["/tags/下载/index.html","b3044e1abf7157e13227a87429215749"],["/tags/不限速/index.html","6419dc01795c36e4394f742c550e4e07"],["/tags/个人网盘/index.html","5223d1a6b6e3c0787a9ffd57f08a4714"],["/tags/主题/index.html","2d78e5e16e38d83daabf1685d5b72e3f"],["/tags/二维码/index.html","9d51619804e5a3b2afb2cc4b8705145c"],["/tags/云便签/index.html","65a2f5c6015291a9a909f4a320a64160"],["/tags/云盘/index.html","eb993b91994ab79a97f524691cb8285d"],["/tags/人人/index.html","66d3221f210f6f477907614ae8cc565a"],["/tags/代理/index.html","a7488d5510f324b9c74e87e985fab2f5"],["/tags/代码/index.html","571ba6431caec6f8d470f5f9c1a00fba"],["/tags/优选IP/index.html","6ab21a3315bccbbd91b9f71aac2523c4"],["/tags/便签/index.html","30e7d79c7c34af24e8188c2feab5e816"],["/tags/保号/index.html","8dd13dec803540ad3bce9a5a65d8c159"],["/tags/免费/index.html","a83d1d22853d536f6faab6e16f4e23e0"],["/tags/免费节点/index.html","9ce2d31c8a5b7de181176f408d06bcea"],["/tags/加密/index.html","bdda6fe59f7e749f46dee6f4f77fcbed"],["/tags/动画/index.html","cc7c42659d6eb70e0d25a054bfc992a6"],["/tags/博客/index.html","e8bdef5989ff062b13721c657fd55d78"],["/tags/历史记录/index.html","cb513dd66cde68a44363392097aea570"],["/tags/压力/index.html","56c7b58885dc8862b8e4c83b256c3831"],["/tags/压缩包/index.html","298cc3fe6f99f5fec6f8de951999fead"],["/tags/反代/index.html","18bdaf36dd1631229d855e8aa22cfd16"],["/tags/可视化/index.html","16200eb4c4de198505130bbd72153c34"],["/tags/命令/index.html","6f019e2b4c72ec3330a6cfadf8ad2214"],["/tags/国家/index.html","2bc0dda6512afdc4f688f865f03985ac"],["/tags/图床/index.html","17e634999bdb3faa8cc4392aaea3f803"],["/tags/图片/index.html","18b959bcc6dc088de7a52574b8be4460"],["/tags/域名/index.html","0a9d6f4f67737f15c11fdd4e0fe02f3e"],["/tags/壁纸/index.html","f5028bda630106e962e747a496205eee"],["/tags/多标签/index.html","be3f22dab31c928a73b48b815c704063"],["/tags/存储/index.html","230da2e9665a05c31342cc28d77eccc4"],["/tags/学习/index.html","cf506734eda381202aa99f625af66476"],["/tags/安全/index.html","591b5ca1c0e560fe1c3e74909e6e969b"],["/tags/安卓/index.html","dc88123c1da258b5927ae5f56c4820e5"],["/tags/宝塔/index.html","9f177cf4cbbd13f466cf96448675d721"],["/tags/小游戏/index.html","31e4ea692ae4832146038de00ec17503"],["/tags/广告/index.html","236cbf03285d12ab79cfeec5b9c82a0e"],["/tags/建站/index.html","027e7dda62ebc8d8746e67b165a2489d"],["/tags/影视/index.html","d4b04c3069c67b1495f9934ceb9bb99d"],["/tags/微信/index.html","2f758d5ef1493e361224e454cbcebc88"],["/tags/快速启动/index.html","274d4494208204c4c8bf300a9396970e"],["/tags/手机/index.html","a3d5e919dc1301a5b7a76bb96ad3ad45"],["/tags/托管/index.html","3caa6ca15737b263b25d4f9fcc3e3282"],["/tags/抓包/index.html","2936e2451d42b2f1f933ac426f97335e"],["/tags/抓取/index.html","f0728fe9e7d24fcb7e89e2ab29d1264d"],["/tags/投屏/index.html","2a08ee27f76a84a104cf2b95e7df0ba8"],["/tags/拓展功能/index.html","cf87a6b46dd4e0bc265ffd10311babf2"],["/tags/挂载/index.html","c574d399fab6aedcab04225c1188032d"],["/tags/指纹/index.html","41b66cb7066b0d2d70c14c3e5ff84d61"],["/tags/接口/index.html","f0112898832b0b4e2faf1f763d7d2c5d"],["/tags/提取图片/index.html","32a20394c659b0779ec4d71a3e35da78"],["/tags/插件/index.html","5626facd026630a92e76c2e9c0e42d47"],["/tags/搜图/index.html","9684fe7e80bf4d8578a9c609848cac7a"],["/tags/搭建/index.html","d48488a90adb53faf5ec8b6fe32933b2"],["/tags/撤回/index.html","b3600a408940a8d1abfda5bbaf725df6"],["/tags/播放器/index.html","e7b72825854f058110c3d67f489076ba"],["/tags/支付宝/index.html","ba5470165b9cfb6c3add13de58397792"],["/tags/政府网站/index.html","d9853a3f78da1f1de91759360c1211aa"],["/tags/效率/index.html","d5f65d84a298b2788fe8b7b91c5147c5"],["/tags/日历/index.html","75786fd8a7df2f38dd9aaefc52ee729f"],["/tags/服务器/index.html","5498d40b7b31d34aaf2e9a7c497b9ce7"],["/tags/机场/index.html","353f8f596368640e2213b188d016030f"],["/tags/桌面/index.html","c6786f44cfc7eda26849a8a9ab30afed"],["/tags/梯子/index.html","3127a777a02f7fca261ad0877fc7fa86"],["/tags/检测工具/index.html","677347fce39fbf66b12746e312e02d0e"],["/tags/汉化/index.html","a732d4dd8c08693b3988523db09d2c5a"],["/tags/测压/index.html","9c777ac6e0fda517c44750c51a0a1b57"],["/tags/测速/index.html","3ea26648ea2ea069f061eb57c3d66fc8"],["/tags/浏览器/index.html","c3e5ab619892a3540eb9caeb5c16d6fd"],["/tags/清理/index.html","3e425b0e4a3a28ee5d82780cd3f30e5b"],["/tags/滚动条/index.html","0ed91df1ab9ce1e2433b1e4a0ca03a0b"],["/tags/灰色歌曲/index.html","2d6edb27692942123fb8c1bab8be31f8"],["/tags/电影/index.html","dffa78289d094dc5240dbb77b4d9c9c8"],["/tags/电视剧/index.html","7b8019c9969dda4c9e8798fe34c08ca1"],["/tags/白嫖/index.html","a683b83286e0d512d35e6103febff970"],["/tags/百度/index.html","785def187eec046fc9ab8b50cd50f82e"],["/tags/百度云盘/index.html","ff250e82fbafe079f89b25900e27cf9d"],["/tags/百科/index.html","854a39ab1de941e7533049e2a3d1c2fd"],["/tags/短信/index.html","c7b958a6323ef9c4e1ee7615704f3756"],["/tags/硬件/index.html","a42a9fb522fa6307e1351d8dd562d029"],["/tags/科学上网/index.html","cc7737f6cca4fd6acc03abe5e7082c00"],["/tags/空间/index.html","fe061ef152d5257ca6eaebebce5a371f"],["/tags/笔记/index.html","1246d20ca24e66b87972472c958592ac"],["/tags/简洁/index.html","f100ebfd759ee331c0bf1613edb407c3"],["/tags/简约/index.html","9b839412b1f7b9b51929826ec2d71b8a"],["/tags/维基/index.html","df1f6b5518a71089c930d8bd90353969"],["/tags/网易云/index.html","73283a3b850ed6508b7a6e53aff74895"],["/tags/网盘/index.html","babba1cb91918afcf6e7ab36c9143f05"],["/tags/网站/index.html","750e9aaafa1f255051880715d49152c1"],["/tags/网络/index.html","8d352f6bb2154bb6724a29e98bb14f7c"],["/tags/美化/index.html","304b07e386707ae2459f5b1238e6dab1"],["/tags/翻墙/index.html","b4806e9902853d89e3f8b9166d63d68c"],["/tags/翻译/index.html","c5c7f511398b04d229152fc6639fe22f"],["/tags/翻译器/index.html","dd0c93775f8b6489f92d4e86c3cb1604"],["/tags/聊天/index.html","5e623a0c76949be9ceb5de4523411f31"],["/tags/聊天室/index.html","453c0217384ee2ca518d64a998c66994"],["/tags/联想/index.html","37584058002f42e3b1a095ab07a8e183"],["/tags/节点/index.html","4dcdc92476beae31691749f6795ced13"],["/tags/虚拟手机号/index.html","7fc5e60020ebe97ab17948ac3fab638d"],["/tags/补丁/index.html","f69478b18fad19b414c4ce5b9dd0f976"],["/tags/表情包/index.html","c64cf394c4b97099cdec336bf17ae95e"],["/tags/视频/index.html","17825ceb5689f0bddc84c419567c661e"],["/tags/解析/index.html","26d5fab3f5ebdcadcc8618b65c3a957a"],["/tags/订阅链接/index.html","cc2a7578e16192ec96908721de78bb19"],["/tags/记录/index.html","4ce1fd6e577dc0d07ead45f75b747603"],["/tags/识图/index.html","696016f4e7de3a22daed4cb20cb20aad"],["/tags/语言/index.html","cebe442c9d4008a6448e28f791cbbf7e"],["/tags/资源/index.html","936580a36a1beaea77e5c27b6acb8351"],["/tags/资源管理器/index.html","aeb68ad9031cdb1fbfb49a0dfc48155f"],["/tags/转移/index.html","9285f82a70d0f2bb30914e1715fba217"],["/tags/软件/index.html","73918aa865bb46c9fcdf7fa2ec9d1701"],["/tags/轰炸/index.html","1f364dff6381da22282cbd3014b6068d"],["/tags/迁移/index.html","5c586aef3ea192b11425e2c94c954a91"],["/tags/远程控制/index.html","6ccd842ad970d1bc0477c024828fe3c2"],["/tags/连接/index.html","1d7ec9dd20feb4f1f21d041659cb1d77"],["/tags/追踪/index.html","69e2535af4e9797fb7a2fccef1a28bc7"],["/tags/速度/index.html","a63ed64c2144fc942525870303893080"],["/tags/邮箱/index.html","9633c329cf8fd7b38c3fdb1bd5d2162c"],["/tags/酷炫/index.html","192abf96d8922f727f854e90bf202094"],["/tags/钓鱼/index.html","392c8b2f9182ca24544d0b52f99462aa"],["/tags/镜像/index.html","9f04525b928a3bd31c9e320bce73f70c"],["/tags/随机/index.html","ec4493491d7bc9839a5275794668171d"],["/tags/隐藏/index.html","1aa94a529d8c6728b8fe0a3fc6e04316"],["/tags/面板/index.html","28d40f7487dcb14d0552e50884ba59d2"],["/tags/音乐/index.html","6a7b841186d57b5008b3cc5ec79fdb4a"],["/tags/高颜值/index.html","e06494bd4c8a445ffb00312465ca68f9"],["/tags/魔改/index.html","53d89a92078b357b7f7f94fd0a1b6807"],["/tags/黑名单/index.html","46ca96cca9b77855ba26e2cf2ca911f5"],["/urls/index.html","b70c6810b4fc96ff06d70710e0116a8d"],["/vps/index.html","b7e47b64352bce70233d737279018d23"],["/支持/index.html","ed8b3fe0b16c5d820007542c57e3f33e"]];
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
