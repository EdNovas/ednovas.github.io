/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","3263af4b2f33469353217f07409768d5"],["/2020/11/29/clash-windows/index.html","6415714ae768153d24675591a5468336"],["/2020/11/30/websites2/index.html","ed3d4ec18ef266aef73d78bf18def855"],["/2020/12/04/iphone4s/index.html","c4700796760af0d60373b2a705bae5f6"],["/2020/12/04/onenote/index.html","60e96aeb053123a3f39eb8b61e6245f1"],["/2020/12/04/wesites1/index.html","0d0a9678d9ce244ad8eac15ba40c547b"],["/2020/12/06/nokia808/index.html","0becd2d15efb2cf6842fded8f013e311"],["/2020/12/07/ipad1/index.html","f480830db1f43bfd402c7ee78c9b5861"],["/2020/12/18/freesubscribes/index.html","5523a00e66326671dc2cd9bc90ce7a95"],["/2020/12/19/musics/index.html","d2d883f4f4fdc0fc1940a929e5e48ef7"],["/2020/12/19/shadowrocket/index.html","3fc2dff123dd7a0a0f4a28c4e5a1450c"],["/2020/12/19/v2ray-windows/index.html","c5ccd7ed9a7b5a10ec762195ef64ccdd"],["/2020/12/19/v2rayng/index.html","6ed10a209d632c33c5479f8152b623ed"],["/2020/12/20/beoplay/index.html","dd19493336178a4d756bbccbc0d295ce"],["/2020/12/20/订阅链接转换/index.html","7ebcd9596bd96170280602065c711ee6"],["/2020/12/21/chrome浏览器下载提速/index.html","4d4f07b20d7a880dda36e61af088f3e7"],["/2020/12/21/免费128线程并发下载xdown/index.html","256dbbf7a15cd629e0e8feaa8185fd3e"],["/2020/12/21/免费32线程下载软件ndm/index.html","0e9074265c1e00af3a5a8398ded0e202"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","3fec041a8cbe26e23703116dd7d5d7a4"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","cd0764bff284198a4d84771e4dfb12e7"],["/2020/12/21/广告怎么知道我在想什么/index.html","46e730f8281cf5c84caed9e42ec89c86"],["/2020/12/21/无名·引子（小说试写）/index.html","49f983fdaf08b45f8d8b496a3a805612"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","40317a867e446be41e1799f7b2f24545"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","a597a4c964cb5008878e19cbf006731a"],["/2020/12/21/高速轻量下载器aria2/index.html","d665265561bdb51472d710530f33c6fa"],["/2020/12/22/2020-cee-roo/index.html","f956a51020d9c1e5766be038fe458fb9"],["/2020/12/22/firefox插件、github、steam富强/index.html","3ce5489446bce5f6e3192a2263dd8847"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","a90e85a8fc3928c086c92f0d87f75183"],["/2020/12/26/python-day-1/index.html","26d8d8830b7e3b3cf1265c77d41c5efa"],["/2020/12/26/python-day-2/index.html","e010d73b1a817e1e14533f14a87c1707"],["/2020/12/26/度盘不限速下载方式一赏/index.html","424e9a260db98d1aaf93ff8c56cdbad2"],["/2020/12/26/添加开机自启软件/index.html","ede7ae2b7eb0bcf22c6a1542ffdfb277"],["/2020/12/26/电脑端截图方式一赏/index.html","f184a50f593dbfecd2b2eac012c3282f"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","5bdda0ff731f10d40943e47afac2ae3e"],["/2020/12/27/最安全的浏览器tor/index.html","f046daa97fe16f1555d69ddbf5bf090d"],["/2020/12/27/网易云刷等级和听歌数量/index.html","37ab994b860997f53809f2b8a3eb2f5f"],["/2020/12/28/freenom申请免费域名/index.html","16a3854b0c3c9288db741b9fdc06ca98"],["/2020/12/31/机场/index.html","e5122f0df62431f4ba542c1df8382450"],["/2021/01/01/M1/index.html","4994dcb3f52f5fb86489763fefdac833"],["/2021/01/01/compress/index.html","2044dbfb86152bce12061965999bdc23"],["/2021/01/01/infinityfree/index.html","594bf16965b399fb25ac74e2a9deca85"],["/2021/01/01/硬核翻墙/index.html","a61c31d52ad235d7abdc03f40d8c9703"],["/2021/01/02/qq/index.html","1f061677bc4fbf8be8a5f2026fdfc384"],["/2021/01/03/netch/index.html","1887f1b798d36fbe19dd11e8ca4f6684"],["/2021/01/03/waifu2x/index.html","c4f8b150df17723d5a06d7e376df1ce2"],["/2021/01/04/ads/index.html","844bf0726faa1138825e0081c99071b0"],["/2021/01/04/games/index.html","e8be02991335b40f4347e0fdb7774315"],["/2021/01/04/heroku/index.html","3cbf2f6bb92e04f9796324abcf4d5699"],["/2021/01/06/movies/index.html","cc6a9208ea5ad6f372d40b6570471d46"],["/2021/01/07/google2020/index.html","5c135160a053fbf772f4158a7854432b"],["/2021/01/07/lucky/index.html","1352d96257cbaae6f4777c944c2f52d2"],["/2021/01/07/spotify/index.html","2df45f62a2c5c90976f28ac5de9076c9"],["/2021/01/07/thunder/index.html","f8fcfdaef485871aaa635846d61fb301"],["/2021/01/08/adguardhome/index.html","a6406482c095a964763238c2c36033cd"],["/2021/01/10/IBM/index.html","7f2b724bca92170804c37e40172f4238"],["/2021/01/10/potplayer/index.html","06f8dc5d8f3b5860e08888cbcc6bf7c0"],["/2021/01/10/sakuraanime/index.html","7094a60d791fabb0a8ab0a6e1c2111b9"],["/2021/01/10/美剧星球/index.html","a0074026b17e29c9c4045810e4b0b114"],["/2021/01/12/telegraph/index.html","29ff0a1f036c3ba908850fcd2d43712d"],["/2021/01/14/comics/index.html","cd8ebe4503546c06eb90b52ea3d841e9"],["/2021/01/14/ftp/index.html","efe843d5f3db863763dddad5ba3aaa5d"],["/2021/01/14/oraclecloud/index.html","0c8e7e4ab7f24a0d1d3abfe9845a971d"],["/2021/01/14/porkbun/index.html","ce8df79f3dd5613b27eda5cf523c3368"],["/2021/01/14/powertoys/index.html","29778318c1579f1964be8640e57d6088"],["/2021/01/14/taptap/index.html","f5b1defde3a0164bba7ffd1a299b22f7"],["/2021/01/14/ubuntuvsftp/index.html","4aba7af5f8845455de7886cb8f90fc25"],["/2021/01/14/小说/index.html","044b0bf492a53ee09d8a610c78284c20"],["/2021/01/15/freeproxies/index.html","30635c64c630cbc2f676dce7a0e100e9"],["/2021/01/15/incaseformat/index.html","9475672d6603b8e78538eb2df65eaaa8"],["/2021/01/16/euserv/index.html","12420c8fbc53884d8b047d40568badba"],["/2021/01/16/winxray/index.html","e0196ef5c7780f54b1aea32b3a88b478"],["/2021/01/18/qqreadhistory/index.html","79a4de8ec04368ca641cf88a0b9d4a1a"],["/2021/01/18/qqrevoke/index.html","e411e299507bac24056176640493f1c0"],["/2021/01/19/freevpn/index.html","9addbc335e988a2dcf97821ba3ab2725"],["/2021/01/20/browsertrack/index.html","fe654308af23a911ac36dbd9831bad02"],["/2021/01/20/v2ui/index.html","69cb7a97523eccafbe990a374c85f756"],["/2021/01/21/failedtoconnect/index.html","a7c79889b214517626c74fcb6bf237c9"],["/2021/01/21/gitcalendar/index.html","b4b13cae9add0eb89ecdeb42686cd324"],["/2021/01/21/markdownformat/index.html","0083ae46a9c15ac3eb1aa5ddfd9ad067"],["/2021/01/21/markdowntable/index.html","cafb5ce2c98db1d16f28994766732093"],["/2021/01/21/vercel/index.html","8f29a7abc0681f3744c9e7c59f3daae4"],["/2021/01/22/hardware/index.html","c8267b91983990a757276ecc8e91f844"],["/2021/01/22/muviz/index.html","e9133a4dcbe550fb55a079849e2a7a03"],["/2021/01/22/randomapi/index.html","eb3a59260e22a66bc4e8693eee34a208"],["/2021/01/22/searchimages/index.html","15bfb778e538b08d0e4664a96b87947e"],["/2021/01/23/RX文件管理器/index.html","d97ef728b1061676181aa311855cb094"],["/2021/01/23/chromeflag/index.html","49e7ebb5ee8158e635943a24deebdf88"],["/2021/01/23/qttabbar/index.html","e146bf23f057101e3d5f050675df587e"],["/2021/01/24/githubspeedup/index.html","6b8fbea58bd4135591038c351993793c"],["/2021/01/24/jsdelivr/index.html","b21f0e86f5a7102a055c72591b3127ba"],["/2021/01/25/note/index.html","fa5d688252698258088f39202e0aedaf"],["/2021/01/25/soul/index.html","d7230de76f71d4f77ed89b305f784a84"],["/2021/01/26/herokuxray/index.html","846f5c5a9bd65ca017882925b2af9fde"],["/2021/01/27/proxypool/index.html","f5c35d7b7370ff734d703fc16ac1a9fc"],["/2021/01/27/tracker/index.html","9e8dd936ffa2589fd55995b189d69c96"],["/2021/01/30/pandownphp/index.html","ba77cd516cd2448ce98c3f1cace90e29"],["/2021/01/31/newgroup/index.html","3169d8a8dc461584db15f9877f44dc34"],["/2021/02/01/clashlanguage/index.html","349af13f9bf8303d3637b23804412bc1"],["/2021/02/01/encrypt/index.html","5679547967ddd937da81643c5c2f2693"],["/2021/02/01/footermotion/index.html","3becfc4b67b3c1cf6c146e0fb1a6818a"],["/2021/02/01/gitter/index.html","a4a8e8a145c8cf5511ce24e26832892d"],["/2021/02/01/pixivtop50/index.html","506e2f89bb8b7ee40d1e0c10b4a77212"],["/2021/02/01/scrollbar/index.html","74645dd56993eab6aec4ad09c285959f"],["/2021/02/02/clover/index.html","81d077e45a649c9f0324c2e11bb053c0"],["/2021/02/02/maya/index.html","6256d5b3785eb680e81e9f56bcfd8bc7"],["/2021/02/02/speedcontroller/index.html","d1713fc94af1e3264b6cfe9c657b8d5e"],["/2021/02/02/yesmusicplayer/index.html","ee1bb9eacb147df96f6c130fe339a052"],["/2021/02/03/lenovoonelite/index.html","4d53461f60104d881de29d2f77d5d4e8"],["/2021/02/03/skipads/index.html","adb56d1193d59d1b963b2b4acee4aa21"],["/2021/02/04/picseed/index.html","3b3ddbc014f99e32cc2ddf3d39434bd2"],["/2021/02/04/renren/index.html","a88ce606f2ecbc26dea63909633c2bd5"],["/2021/02/04/serverstress/index.html","c174a5279404940e15223f11c8e65667"],["/2021/02/04/wikipediazh/index.html","069246636ac532b8789a4ed0d836a985"],["/2021/02/05/googlevoice/index.html","9826c3bb2bb60e9d97d9dc48315563e9"],["/2021/02/06/clashconnection/index.html","ca54849585e4d9488d66e34967ee2ccf"],["/2021/02/06/gvtransfer/index.html","7f31d6cdc0aea97a5cddc9b7ef372021"],["/2021/02/06/todesk/index.html","70d27d9a2abbae6efae71a872e1bce1c"],["/2021/02/06/vpnblacklist/index.html","365382a9894d21cb6aa6a096cb0ebf93"],["/2021/02/07/mklink/index.html","f890536683e8eece41ec52c38f3c3379"],["/2021/02/07/speedtest/index.html","e62a59867af5a3c58a603dd473ad6da1"],["/2021/02/07/translate/index.html","0b5f7aa6ecd62f131b43c73bb27c3986"],["/2021/02/08/ewomail/index.html","5ee15725cebdafc17fda2623965f9baf"],["/2021/02/10/officee5/index.html","4175e15bace278b3dc29e2caa82fbd2c"],["/2021/02/10/raidrive/index.html","ea75fb32188308ab304211f7babf6427"],["/2021/02/13/e5sub/index.html","59fc4693eb4c2119336a19b6e6106d85"],["/2021/02/14/screen/index.html","672a23532aab52bc316c09e6b0b44640"],["/2021/02/15/clashtun/index.html","92b27d58464baa82ec90ed260a600659"],["/2021/02/15/messageboom/index.html","dd3588f587958cb42697aa47a31c2879"],["/2021/02/15/oneindex/index.html","dff12ae63ee0e1070fa1deb7aaf95269"],["/2021/02/16/govsites/index.html","b136bab1dc03f07245f1bcbcd7346f1e"],["/2021/02/17/hexototypecho/index.html","b4fe511329e3132a2b3f2758b404cd22"],["/2021/02/19/fiddler/index.html","555630787ecc63ad814bd7cd54c23636"],["/2021/02/22/potplayerset/index.html","e24949f24db0c6d6b59a28642d212545"],["/2021/02/22/studyresource/index.html","8f5bbd8469a2deca0d95b50dcdf3f9b0"],["/2021/02/22/telegram/index.html","08a8f482b6eae58ff90673ea0f18dfaa"],["/2021/02/22/videos/index.html","5f93a38b05e2ceaf24e1e2df726776f2"],["/2021/02/24/mtproxy/index.html","c241c03893df9885f2d054d12a752ef5"],["/2021/03/10/catchcat/index.html","48a1ab50872d20478044ad12c9ca5e4e"],["/2021/03/10/neteasemusic/index.html","1f3f3b571a8b5dc0bb983869edb0f79c"],["/2021/03/10/surfboard/index.html","53129381283432c5269d066a64dfc00a"],["/2021/03/11/vpnandjc/index.html","76125bd3be142e264a8128355f9debeb"],["/2021/03/12/qrcodes/index.html","d9ed68f7b231727283248054e9563314"],["/2021/03/20/qv2ray/index.html","b6370f6dbf51ec2e62ababa925895f67"],["/2021/03/22/freevps/index.html","848a1a83bbcd4111b4adb1d0e7ebd351"],["/2021/03/24/tgstickers/index.html","7d5cebce74836619ae5f4269f914dd06"],["/2021/03/25/clashx/index.html","cbc811ea6900077df27a21cd514b4091"],["/404.html","fcd08cf4223d77926cde6a1ecb7ab564"],["/archives/2020/11/index.html","9792b0a9c4181d5bf32a32c11b818863"],["/archives/2020/12/index.html","631c14fcf5be572adaa8c2633f076ace"],["/archives/2020/12/page/2/index.html","6c55e9c4e93a1634b2c00a8356857ea5"],["/archives/2020/12/page/3/index.html","3cbbb2b3fa45471ee699bc058280e7f7"],["/archives/2020/index.html","9fdf27b806f4a8cc43c8e9a85225a6c6"],["/archives/2020/page/2/index.html","0e2c074b687847ae6252d628e836ffbd"],["/archives/2020/page/3/index.html","e6f3ea635415a2a0e2f3fc47f2d985d3"],["/archives/2021/01/index.html","6612c1d26b06ebdd73b2e7d9cca52104"],["/archives/2021/01/page/2/index.html","e0c5ea0518d3f615ee6b029791ac6958"],["/archives/2021/01/page/3/index.html","60afa6ae209c4494aca3097c0bcd1815"],["/archives/2021/01/page/4/index.html","778420e9f1895472a74ea7d8ef82b8b4"],["/archives/2021/02/index.html","69ccf2f6d44f7d2b0586fcc68498765c"],["/archives/2021/02/page/2/index.html","e22b981856b25ba1b7921c6fabdc2183"],["/archives/2021/02/page/3/index.html","acdee09b0ce46ac676c5f175daaba0b1"],["/archives/2021/03/index.html","a96bb76604c633ffde2fefc5cef9adce"],["/archives/2021/index.html","6a6181c79846b3494d2e610d777e876d"],["/archives/2021/page/2/index.html","22cc7017f3c3a7013bf6eadb29fd254e"],["/archives/2021/page/3/index.html","ae25aaf16511e7945347c269b0a2c126"],["/archives/2021/page/4/index.html","c313c1f67c44023e63eaa577dbd76f94"],["/archives/2021/page/5/index.html","5d04a3c3ac1bc33533756a296c954af6"],["/archives/2021/page/6/index.html","8d11e1cb17bf24523c3f542d9e4bd0a0"],["/archives/2021/page/7/index.html","b88796eef67ca31b0b5bce84a0b48d4d"],["/archives/2021/page/8/index.html","85f926bd1654078fba4d8fa6b3b2bea8"],["/archives/index.html","29a79da79e23f61ed7a67d19ca993e17"],["/archives/page/10/index.html","9e0239e9c5a01766422cf3ce0f02d0a1"],["/archives/page/2/index.html","f17e4b374902fad0461df18187e7c78b"],["/archives/page/3/index.html","9f75f9383d5b40027161c398769fcbae"],["/archives/page/4/index.html","545021ec309b426616d31da44e394a29"],["/archives/page/5/index.html","dedce5bd5848400ed9e33359b5e032d3"],["/archives/page/6/index.html","95078640415bfa75aed4aaf69999bd2a"],["/archives/page/7/index.html","04176290e891b6fdf6021c39ce5255f5"],["/archives/page/8/index.html","ebc6934914efa1a2a5de8d68430205b6"],["/archives/page/9/index.html","05bc3c0c08f2bee289dd9fdbff50c7a2"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","bc06e859a6a4db755c13d27a99c906cf"],["/categories/index.html","800806afe3683621ba63ed4137cacfc1"],["/categories/下载/index.html","327f1c3e239b57fcd839b325630fb188"],["/categories/安全/index.html","7393f2efdf429c37c6b8d6af5dc6af0b"],["/categories/建站/index.html","ac36304efeb1047dc63b68a7eb529a48"],["/categories/杂/index.html","f21530147240eade4c88af0888261b75"],["/categories/杂/page/2/index.html","045a5f30c82bb60c4b7cc39a2301008f"],["/categories/测评/index.html","b83445c0ca8b3efda0c25c870b4f8fe4"],["/categories/科学上网/index.html","6cd0fc5656d97f4a748cda528e602a16"],["/categories/科学上网/page/2/index.html","47c7af0e3680d9a5401b460339509351"],["/categories/编程/index.html","c6f7e12cc01d2c9a9fe8029e4da463b4"],["/categories/网站/index.html","f69160f5193ecca7b4ba8f9b8da1f460"],["/categories/网站/page/2/index.html","209a071e9b67f38dede3ef509a02558c"],["/categories/软件/index.html","5a473ef39a41d70c02d9317f617688a8"],["/categories/软件/page/2/index.html","21af0a9300f7d77cc35292388f90fd46"],["/categories/软件/page/3/index.html","a827a1472df4fddc97b6c3b855574ace"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","de1dcfc645503affe1e48eca68c18711"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","bd8a29da94a5b138948a700fe1a3543d"],["/ios/index.html","f00ef1ed9edc5a08268d47d9320aafc1"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","3ac9b4a54ff6f5b2a3b663b3b1dd9a3e"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","4cbad6bbcae89d8316e9f4a90c06e539"],["/page/2/index.html","929433c2e7c3f65ac647c003189c5824"],["/page/3/index.html","e8a3ded9068859c7d4bfbd3571e21218"],["/page/4/index.html","9d434e51b0ba795645c022d29ee52f35"],["/page/5/index.html","55185755a74405ecdbb8713dffc4125f"],["/page/6/index.html","77956104947a3b5570c8cdd5bb210258"],["/page/7/index.html","28d5582cbfd09b16497b0b9689d26501"],["/page/8/index.html","b101e2f310d840f5ec2b046fb7dd41e0"],["/page/9/index.html","b30479f28c43e78e10b52ca2b841fdef"],["/payment/index.html","fb6bf34ccacf835bfc812b8d914a8d2c"],["/privacy-policy/index.html","e6032c2f66628e0b8e46b0b18495b31d"],["/rss2.xml","c163603cacc12b3a0c9c9e73fb84dd2e"],["/search.xml","8fc2a87298403cfa31921d6c730fe999"],["/sitemap.xml","5f20eb28c6b21b7436dd782c0fd5e85b"],["/sw-register.js","6baa8c345c738fe93036986964b2ea1f"],["/tags/5t/index.html","fb1d00a377f1bb5b41839802ac9e9b7a"],["/tags/Clash/index.html","8acc0f5929cb2e95187637a0bb57e5bb"],["/tags/Clover/index.html","50fcf027a939036d0f24fbcfbdc7097b"],["/tags/E5/index.html","28c9f0759267fac5dde6b321c1251fe3"],["/tags/FTP/index.html","560b46074b8fa4de599e02103a1eaeac"],["/tags/GitHub/index.html","79652d1033071704337b22ad35d06591"],["/tags/Heroku/index.html","d08148ebee145d7c280e1013f52f34e8"],["/tags/Hexo/index.html","eeb46f56d7604065af375b003f0f262a"],["/tags/Lenovo/index.html","955611f57f6e403b4ed14c5112903d77"],["/tags/Oneindex/index.html","dbbd7c4dec3566d3eabba3f130810507"],["/tags/QQ/index.html","6e77cdfc9573ecf18c949c6f666315bf"],["/tags/QTTabbar/index.html","46a61cce6b03cab19dc4798d63db768c"],["/tags/RX文件管理器/index.html","5ea2d15785c66cf9554f59aa09a622c6"],["/tags/Todesk/index.html","64bf4d3ac6144e19782305ac789b7ca4"],["/tags/Vercel/index.html","fa302f06ac24bb5ba3eb52ed10fdc5a5"],["/tags/ads/index.html","e090b9a3493d0f59817d5869251f4e2f"],["/tags/api/index.html","81b0b2b204fb72c0234b953f5e824ae3"],["/tags/app/index.html","29621f51682d5b1cee72fe9526852353"],["/tags/blacklist/index.html","5defa9ca11d188019fdd4d16627ffee7"],["/tags/butterfly/index.html","63f3d054fa3d25fc385d43dffa0dcff6"],["/tags/chrome/index.html","03c8cfd51568da82f0d4318e0e59698b"],["/tags/clashx/index.html","31779f9c4af28985323976f0f080a83e"],["/tags/cloudflare/index.html","6e521566a527b08065a2c0a1a0f60416"],["/tags/cmd/index.html","a2c1eb5793f6d29d84a46fe72145c97a"],["/tags/c盘/index.html","23847e8b7f7fd2c186fc642e03b37c11"],["/tags/email/index.html","331f52967a6849fa9361bb3eeda5b257"],["/tags/ewomail/index.html","a5184483bb15ca46aafcd166b248eb88"],["/tags/fiddler/index.html","a1260b189cba86d8145c19750157e47a"],["/tags/flags/index.html","361bb59e998ab590abae4402c3f8d037"],["/tags/footer，页脚/index.html","23aa3394b17d4fe3b688e3bd177451dc"],["/tags/galgame/index.html","8832f36af7a94a936f02705399287735"],["/tags/git/index.html","ac9dcf68acdb7550deac735a69756049"],["/tags/gitcalendar/index.html","6c63a440181b63a9bc4124b68a6f0332"],["/tags/google-voice/index.html","704deeed1e17bcf565188f79c8370215"],["/tags/gv/index.html","083b8b6e5aa447d4aef09a3bed0ac448"],["/tags/html/index.html","67b6b69668f7dd94c784ccb45d167979"],["/tags/index-1.html","ad403cd04dcd2525549fc58550ff6e4e"],["/tags/index.html","112731517ec57f7ed4e78231ee91679b"],["/tags/js/index.html","55e4108d2f42f69f7319bb6d4c71c4f5"],["/tags/jsdelivr/index.html","6fd075178262c0792abce5441098cef8"],["/tags/linux/index.html","457df1cb99b10717f0cb6a8d07eadd6f"],["/tags/macos/index.html","ba8d8576e610ce9324023cb1cd8acc7f"],["/tags/madVR/index.html","25456b471cbcd868d0b31e194dd36668"],["/tags/markdown/index.html","44c1fc40ae59a8fbfcbf095a438ac9f9"],["/tags/maya/index.html","1c933a5561d5aee1dac34eb02c4d23fc"],["/tags/mklink/index.html","90743b3998715f8804b3478d4b14b063"],["/tags/office-e5/index.html","0521e32c64983874d99dd228a9499cf2"],["/tags/onedrive/index.html","9069000025a809e4c2dc04db9a37b2ee"],["/tags/picGO/index.html","603bf16e4fa0e097a0ab120f7dee8d1a"],["/tags/pixiv/index.html","ce8ad29702fa7f223aa2a7425203f4fd"],["/tags/potplayer/index.html","c39f66d532f6f42d3a89b8ade80cf089"],["/tags/proxypool/index.html","97f639bb03a82f461aed552c700bd56e"],["/tags/qbitorrent/index.html","b2856e739a8bcc8dc24e8ac177342b6c"],["/tags/raidrive/index.html","9afa3cbab9ea0a5d489e61c9e34034e6"],["/tags/screen/index.html","cc3692ce3935fd11bf9e98af57cc948d"],["/tags/speedtest/index.html","0bb89b5ff9c341823cd910dfd5d11f19"],["/tags/ss/index.html","c30c47f23aa54fd7bc1f638f9b60b4ca"],["/tags/ssr/index.html","e8a919d1174d6830de039aa8bb53b09e"],["/tags/stickers/index.html","df82b9dd954f2ad04a4aba89b43a2da2"],["/tags/surfboard/index.html","99291efde1f295f4e468b1416684fffc"],["/tags/tap/index.html","649190bade713f5817ae6f0d189ddcc2"],["/tags/telegram/index.html","63f06a7a0f661b3fe0a2eaf2b10ea145"],["/tags/telegram代理/index.html","56ce6e1482f962d0c5dab8b496c4ecad"],["/tags/tg/index.html","e085f7fc436bef8fc6e4b0fc0bba0eff"],["/tags/tg代理/index.html","f48e1aab4d3627456f43983437daa5d4"],["/tags/top50/index.html","97bd70f8b57527fb7196ba11c78cf487"],["/tags/tracker/index.html","a60c4cc758bebd80927424175fc96b13"],["/tags/translate/index.html","32fbda0eb16d12cda16af4625e49106b"],["/tags/translater/index.html","ee4e32eae7ab6d1fbb528b15c7b7a8f5"],["/tags/tun/index.html","04dc90ce5ca2e60a7050c38eebcc3ecf"],["/tags/typecho/index.html","57636567bc758c8cb121cf9f469104a9"],["/tags/v2ray/index.html","4f29cfdfa17c098e5ebdd37843feb99a"],["/tags/vpn/index.html","4e9b77485b8d9f4a421cf5b698a71b7d"],["/tags/vps/index.html","882788803de24c80dd43928a1eafe306"],["/tags/windows/index.html","2cb15ee40eea6516c3e5e6464625e49f"],["/tags/windows端/index.html","9fd8e4f2e0ad57af83263fe51711a811"],["/tags/xray/index.html","379667f28cf12235e4a008cf6b9d2089"],["/tags/下载/index.html","cd4d8ee465f723d06c3e241dfc45e520"],["/tags/不限速/index.html","53e0a1a6aab202ba6bbdb6c3e218610e"],["/tags/个人网盘/index.html","edcbf5e8a1d720ab333a34e487753a99"],["/tags/主题/index.html","02928abf656e8f3cbd69fe1a15a40283"],["/tags/二维码/index.html","4f0c4f4d40ef0fec1b0356456cbe5ac8"],["/tags/云便签/index.html","b8e7f6b3bd44b6233d19b6c2b2ddcd40"],["/tags/云盘/index.html","cb1d6928c99296b62aa14c78f436954e"],["/tags/人人/index.html","0d0bddbcbd8e40dee4a4e6af88174d66"],["/tags/代理/index.html","c1aa461356f988c4af71d829f5894f10"],["/tags/代码/index.html","d67b1367ec2798025656c5326ac06308"],["/tags/优选IP/index.html","0e59e0cd18ad8b84770b881e1986efb2"],["/tags/便签/index.html","2b3f8076d5ef5a976964fda2013cb212"],["/tags/保号/index.html","cb238c822f2ccfdb374925eb6ac1e330"],["/tags/免费/index.html","df89adee9a8f939b7094195ccec1ab7b"],["/tags/免费节点/index.html","54391d36f9dc62f04b41d8396b183685"],["/tags/加密/index.html","3f99b289f824ff8f2acbc2f458dccceb"],["/tags/动画/index.html","d6471828f6736af9ffa72c11584f311a"],["/tags/博客/index.html","a523a3a8b99b740dd35b07e7a3ee0148"],["/tags/历史记录/index.html","f15f2426438c2692ee75aa641a45acfd"],["/tags/压力/index.html","6544d1b60b1e42369dc2fac5482f26f7"],["/tags/压缩包/index.html","081a875a26b6487287f429a8150d4d5b"],["/tags/反代/index.html","ee7cccc7b82731917ac82ef35a81c4eb"],["/tags/可视化/index.html","230d289ed7f3fb71e00c13055ec30af3"],["/tags/命令/index.html","58426da86e1c0714ead1a159405485f0"],["/tags/国家/index.html","d61ae7f54ea1228f67d71c6c93dc904e"],["/tags/图床/index.html","3da4820aec1069e6b39ec8391250dd62"],["/tags/图片/index.html","148dafe74d58ede9042670fa2ad95ada"],["/tags/域名/index.html","ee31eb5f550e05dc5a4ec1c42d3e58ba"],["/tags/多标签/index.html","ae1b8f505bd155ac639abab8abc32409"],["/tags/存储/index.html","e41f7333b6e2b126d8a395bc28821ad1"],["/tags/学习/index.html","84d7ae9d89566b0ddb404b5f22e82124"],["/tags/安全/index.html","f1a9ce2757821a5f29e7483c9d1fb6ac"],["/tags/安卓/index.html","760d211ae4943bb4f544900bb70e4607"],["/tags/宝塔/index.html","c223612ba7b528d0ac2dd395532c7af4"],["/tags/小游戏/index.html","028ae04bf0c0ce6706769a332034a858"],["/tags/广告/index.html","539ea27855a7aa8a252b5ce29d7d36f1"],["/tags/建站/index.html","e23e8a66ec80343ca3ce549932910b7e"],["/tags/影视/index.html","f779308e8dd84c9cbe84df78b4887e2c"],["/tags/微信/index.html","f08c083385b3f573d0e7541f345905dc"],["/tags/快速启动/index.html","8d2fd642bdeddb2e560f339fb3bf5896"],["/tags/手机/index.html","7d3f038ed69c1ef8129a2939a9f58c83"],["/tags/托管/index.html","e95f178efa8954dc3f956f67d2fd6e9f"],["/tags/抓包/index.html","ae725077431d5db1fdde6a30423dabd2"],["/tags/抓取/index.html","69ee0d4bd2624323e4578da793aa0ae8"],["/tags/投屏/index.html","b11aa4ad98e7f07f3280f8b71fa7f969"],["/tags/拓展功能/index.html","4d765744eaf27d37f699335c39bb5e2b"],["/tags/挂载/index.html","577484430a47613b81cfe6b606cff85a"],["/tags/指纹/index.html","3a8b9922545c0d22c7674d2e1d72433a"],["/tags/接口/index.html","3bf7f0114364bfc3d899e393d93cc536"],["/tags/提取图片/index.html","5b19e1a867db2ad5cf1df0ba31344a56"],["/tags/插件/index.html","100faf179f7c2b0e6e1423065d1f1816"],["/tags/搜图/index.html","c938b4d6f4b10a24166fe4d4343337b0"],["/tags/搭建/index.html","f69a634ae70eb275f34bdd82a0d32eef"],["/tags/撤回/index.html","3a1405af8ab4f0968d1e06c2ef7f7225"],["/tags/播放器/index.html","67fb3fc0dab163d13ef6b3985d138618"],["/tags/支付宝/index.html","d318d509c17681cca6b90836493959df"],["/tags/政府网站/index.html","82defd2bd6d581a493a70ae8e3ce7236"],["/tags/效率/index.html","aaf3f613bdb968d2f06484e5f31a649a"],["/tags/日历/index.html","352c25402fe8c129de3a4177b616faba"],["/tags/服务器/index.html","9121ccf71cc4742d61ddde8663c69caf"],["/tags/机场/index.html","2057206059f11cb6049f449040ea72d0"],["/tags/桌面/index.html","84dbff5ed3cab3196e156fc3820c8776"],["/tags/梯子/index.html","1d667a535c23fe273ce2047fe9f58606"],["/tags/检测工具/index.html","72152e5a6ed18147c0883fc2b12a251c"],["/tags/汉化/index.html","f05cc093fcc2dc24b64ea943b07835f6"],["/tags/测压/index.html","35b580d644f5215469010236fe28dca7"],["/tags/测速/index.html","5f35027bc6558ea84bce956166482f9f"],["/tags/浏览器/index.html","11aab15f074ea7263b9d0e2d26ec7ce4"],["/tags/清理/index.html","97e460a79b375f944e7b3f24db2c662c"],["/tags/滚动条/index.html","d1642d59ff98e72fa29e032ff86d3335"],["/tags/灰色歌曲/index.html","26775fbce1c1cabfe65d43f83bc48a87"],["/tags/电影/index.html","a4dec2a983abd703bf731250fb7069a2"],["/tags/电视剧/index.html","29a2eb0c2f9ce01d4a10f26397d8dbac"],["/tags/白嫖/index.html","c408f8fc743806bb26cf4a9eff44c513"],["/tags/百度/index.html","43560421510b92510e8cf56f3710cebf"],["/tags/百度云盘/index.html","861bc377e694f3f07e1a6858a69f0124"],["/tags/百科/index.html","78329201e68be6321e8ad926f58eb849"],["/tags/短信/index.html","480e577781a12fb3f507482c05f41887"],["/tags/硬件/index.html","04a0a35691b2a68237cd66be7aeaf785"],["/tags/科学上网/index.html","1f8ef9e775bf7f3aef815c28dedaf49c"],["/tags/空间/index.html","a13ada59a64211f8f91c07700b0b4c0a"],["/tags/笔记/index.html","27c4f55cf468f17f589a9a0455f8eb2e"],["/tags/简洁/index.html","4f5c2220e804d05a54ab534f849595fb"],["/tags/简约/index.html","804b5eb5fd9e19f64089e32792633ada"],["/tags/维基/index.html","92d87adadc92ede9985768a0fbcc9a06"],["/tags/网易云/index.html","02e197f7cc11112e954edbfb05bc8a02"],["/tags/网盘/index.html","466a0bacac0084810b9b2eab9a1d779f"],["/tags/网站/index.html","bb54a7037e9ab60abdf500760320e777"],["/tags/网络/index.html","24b271bb0c80cfc670235c02b075b535"],["/tags/美化/index.html","531b86a173fa60f57d236a2af7a81259"],["/tags/翻墙/index.html","65405e1f16ceb4aa69d8fde0c4fda147"],["/tags/翻译/index.html","b3c2dcb87a9d9317ce1a004813e8c1f4"],["/tags/翻译器/index.html","fea42eb6754520d3cd984103096387b9"],["/tags/聊天/index.html","a4ddd20c5ca9ed013219ea3af0014060"],["/tags/聊天室/index.html","2e73becba2650cafbe3ed59a203fad43"],["/tags/联想/index.html","8938a4913276960b5b826738265b38a1"],["/tags/节点/index.html","d34f371d2bdebe86bcb197dc685b7b33"],["/tags/虚拟手机号/index.html","f37f44bab813006fb8e8cddff3789696"],["/tags/补丁/index.html","1c96939850a22c4d82a48bd2333ddbdc"],["/tags/表情包/index.html","21dff49921d9d35c7fab02ab707b1412"],["/tags/视频/index.html","10b3f65ab567cb8138ce446ddb866fbb"],["/tags/解析/index.html","37111315fe454a0742882e1c3ff54cc6"],["/tags/订阅链接/index.html","c43f384b5868625faa18b61eb80a59fe"],["/tags/记录/index.html","9f675b5ddace14788edbafeb272e70e2"],["/tags/识图/index.html","9b61a95b51d7be79339b0d24d0b9cbe6"],["/tags/语言/index.html","eda9d17c2f6a4e74e04ac5f934bdba19"],["/tags/资源/index.html","21732ea837ed49c8dbd7ded852b38f8f"],["/tags/资源管理器/index.html","71064cee7df6d83e27b9ce92b483ca4b"],["/tags/转移/index.html","7ea8daf8b41bb9ffcc56be405dc67571"],["/tags/软件/index.html","8ddd9c86e0b082f1f5179350791e05a4"],["/tags/轰炸/index.html","47517fcaf113742c2ecf3487989fefe2"],["/tags/迁移/index.html","23c71bfb68f4e02e04469d60dbd05e36"],["/tags/远程控制/index.html","7d1a6a68a16ff6cc877eda9dc20cd0aa"],["/tags/连接/index.html","ea25c785568854acc6fe11f33b244257"],["/tags/追踪/index.html","5501e00ab58a8a4adb980cdc34ecd7a8"],["/tags/速度/index.html","4fccc0db7b14c127b68abd6d1e6595b5"],["/tags/邮箱/index.html","a353de3220f2e651f96e953db495b6e1"],["/tags/酷炫/index.html","382e03f2cfa178d98c585fdb4bd6e9f6"],["/tags/钓鱼/index.html","231edfad73f2dc158e3245be0ce51ba1"],["/tags/镜像/index.html","39325852d5a3e7cbd0a65ad078671342"],["/tags/随机/index.html","f7a352b8891016dca0852fb6cfbd8282"],["/tags/隐藏/index.html","676193185a3e7330051a4970ea351730"],["/tags/面板/index.html","48b6c80d4ab31667541b911fe31e797c"],["/tags/音乐/index.html","3a677140600cdbe5ae9acfe28012cd24"],["/tags/高颜值/index.html","055e430d8dee1ad55c8036004220ca34"],["/tags/魔改/index.html","80253fc106f3c483828c03833325c961"],["/tags/黑名单/index.html","665ca8e64cc001c515c0fcfb03598c42"],["/urls/index.html","7c7b4f0dbf5ecabaf7f39eabc3be548b"],["/vps/index.html","b251fe587cf89044f7e43e6cd6ab5c00"],["/支持/index.html","6c21a08b6afb0f0c2806ac08d899c51a"]];
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
