/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","4bf21e734d2821696217f920be2f368f"],["/2020/11/29/clash-windows/index.html","c6cfb9934fee58075572136ff85a5e32"],["/2020/11/30/websites2/index.html","d13978cf319efeabe7bd1ee9f9695f2f"],["/2020/12/04/iphone4s/index.html","6b76c23761c94c2e21eccd494f5ca379"],["/2020/12/04/onenote/index.html","2f4432ed62c86774b5d5e13f71457fdd"],["/2020/12/04/wesites1/index.html","95f9dee9508585682624950c9e4ebaca"],["/2020/12/06/nokia808/index.html","f9a9390fb99b3b9abe7603c0a636f63b"],["/2020/12/07/ipad1/index.html","c4df8a0565d2895ac63913f48f2edc50"],["/2020/12/18/freesubscribes/index.html","d93b315c8a8541d821d811b793520cb5"],["/2020/12/19/musics/index.html","9f6b06aafd50b112dd0ad20d90a487f9"],["/2020/12/19/shadowrocket/index.html","bd2a04c65053977aeead9f58ffdb9415"],["/2020/12/19/v2ray-windows/index.html","b2c64c0d68d2ce9071f25414c0aaf4d5"],["/2020/12/19/v2rayng/index.html","eb4bb4ff0ef7d07ff98768da8ce9ad4c"],["/2020/12/20/beoplay/index.html","001c2c0cd1528bdcbd1a932f5900b85d"],["/2020/12/20/订阅链接转换/index.html","83d303f13db2c4ab057feb8892f6b73a"],["/2020/12/21/chrome浏览器下载提速/index.html","ecf863db5c766afade8a7c82a20e42d9"],["/2020/12/21/免费128线程并发下载xdown/index.html","71fa0554bda2b998f9fa12adfcfde4c0"],["/2020/12/21/免费32线程下载软件ndm/index.html","dd77f05498d885bea8523410ef97fa0a"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e6f4ae96889d7044a7b9dd3b35279999"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","9a01dc1938b5e66334da3d516e4989b2"],["/2020/12/21/广告怎么知道我在想什么/index.html","f5f0d11fc63edda174a7e8ec5a5fbcaf"],["/2020/12/21/无名·引子（小说试写）/index.html","a17433f748c22e4a0b92f74581069f16"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","956113fc03101aeb409187ea49b86deb"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","a16443c27356fb53af496cf486f667ba"],["/2020/12/21/高速轻量下载器aria2/index.html","a91e130f9cc21b6787fb4e50e658f56f"],["/2020/12/22/2020-cee-roo/index.html","a94fd71e6e687dfa1081a3c33a327b90"],["/2020/12/22/firefox插件、github、steam富强/index.html","0ab029fb2fdac26c149854cef0db2a90"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","2452053403ee740faa11fdf82a1e2575"],["/2020/12/26/python-day-1/index.html","23795548f719828aa6b97aacecc671a5"],["/2020/12/26/python-day-2/index.html","ca42b36cd912b4a238f0b6d1283ad343"],["/2020/12/26/度盘不限速下载方式一赏/index.html","3676a39183f14a0e3e5ffa7c7c0cc855"],["/2020/12/26/添加开机自启软件/index.html","ebd8b187c66c653906ddf9f7a9d1a2a7"],["/2020/12/26/电脑端截图方式一赏/index.html","d3da9e0a6ca85d5efc70b8b4c6f9c287"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","6441fe068cb34a2ebc28c45887de8c20"],["/2020/12/27/最安全的浏览器tor/index.html","ea6db5b468dfb59c79aa7f15f226846b"],["/2020/12/27/网易云刷等级和听歌数量/index.html","ac924330cc50109aca7dadc9d5ceec83"],["/2020/12/28/freenom申请免费域名/index.html","23b18d4f75830e95c83cea1fc6b3a596"],["/2020/12/31/机场/index.html","ebf60d10fd7d35c2a40f1399659c4093"],["/2021/01/01/M1/index.html","10ae9b9037753f2ff649a1526654bf40"],["/2021/01/01/compress/index.html","964c737866fc5e09a16b3e290d81733a"],["/2021/01/01/infinityfree/index.html","8b74902ee7e23c595f4f4ccb47e51439"],["/2021/01/01/硬核翻墙/index.html","57bd143764b8b7b5e6a989fcfcfacac6"],["/2021/01/02/qq/index.html","3e3f631eb79e0cc898cb03a6482eb758"],["/2021/01/03/netch/index.html","01f5dc58cb7723f5a19dabe23a96cecb"],["/2021/01/03/waifu2x/index.html","9d79b8c044bd7e081cb1f4e167d197fa"],["/2021/01/04/ads/index.html","0966c0e7163f425718620d8d7d2b9f3e"],["/2021/01/04/games/index.html","cec63b30bd2977d4af71fe2a122d3d6c"],["/2021/01/04/heroku/index.html","f75021e7ae6f50a558b04569f11ede26"],["/2021/01/06/movies/index.html","b57ee3b7f0094f4e0c7ec0ae8e2fb733"],["/2021/01/07/google2020/index.html","884db903a22042b48803182f7bc757ad"],["/2021/01/07/lucky/index.html","940a59063058bdc0fd23373f954eb6ba"],["/2021/01/07/spotify/index.html","bd176e7c7a8e30132dfc24aede3227d2"],["/2021/01/07/thunder/index.html","447d5381c4586438effae0c0b708168d"],["/2021/01/08/adguardhome/index.html","8dffb4b42acfaa526e6fed7a85c95591"],["/2021/01/10/IBM/index.html","c784a47da1e81408fc2be97166feb1c2"],["/2021/01/10/potplayer/index.html","a4305732bd54928efca801a93d592e68"],["/2021/01/10/sakuraanime/index.html","bc37985c57429c4fef6dfc3118506b31"],["/2021/01/10/美剧星球/index.html","e8b4b05a0a3ba55a3fc40529d44d559b"],["/2021/01/12/telegraph/index.html","5fee25f89ab36acb66c1b7c8a0332da1"],["/2021/01/14/comics/index.html","8682ce92514cadfa4e1dcfe247b00482"],["/2021/01/14/ftp/index.html","22acc1d186a4676c6af7bceda1c6ae43"],["/2021/01/14/oraclecloud/index.html","0990b5b0a58f83c26200c9d969f5b3ea"],["/2021/01/14/porkbun/index.html","882ea55faddc893bdd10ca5e06a6fadf"],["/2021/01/14/powertoys/index.html","9c2042d7645fb070500986a252ee883f"],["/2021/01/14/taptap/index.html","b167f08a81c9c90b654e52b894a9212a"],["/2021/01/14/ubuntuvsftp/index.html","d4e5fbe0c8d0ec4766c41f375cc38db2"],["/2021/01/14/小说/index.html","394729a76b4fdae6746afb40c8cb1c31"],["/2021/01/15/freeproxies/index.html","1a04f68ab6fec037baf0c8ac1c6f4d3e"],["/2021/01/15/incaseformat/index.html","2a4edd06b887618194b143be35e8f458"],["/2021/01/16/euserv/index.html","fec29a956774206435962a350fd8f5d3"],["/2021/01/16/winxray/index.html","5949dc568744f1fc15b79cc1153e10d1"],["/2021/01/18/qqreadhistory/index.html","e769fe2cb11e474d8ba280244a954451"],["/2021/01/18/qqrevoke/index.html","c2fc876fb104ab0c8c202ef580207ed2"],["/2021/01/19/freevpn/index.html","40a6a049416ae0766e963d656347c85d"],["/2021/01/20/browsertrack/index.html","f6173679317f7a0a3414b1053ede0553"],["/2021/01/20/v2ui/index.html","b60ed140745a49aa335b4583dd2ce333"],["/2021/01/21/failedtoconnect/index.html","6845596110e72ea187b8f6b092a2341e"],["/2021/01/21/gitcalendar/index.html","7eb4b850454c0e4e075a9ab40a5fa48b"],["/2021/01/21/markdownformat/index.html","3692f930e7b554a821caac7b72a0b720"],["/2021/01/21/markdowntable/index.html","fb51d88c1f5bedb920293cb5f8bae99f"],["/2021/01/21/vercel/index.html","776819e784519303834c24b61bc98b24"],["/2021/01/22/hardware/index.html","d60f33595690325deee8fe5c80779ac7"],["/2021/01/22/muviz/index.html","f69dfc96f4414f44552294956bad5278"],["/2021/01/22/randomapi/index.html","27f3ef5a7aa5c918adf4d3cc2bc5eb86"],["/2021/01/22/searchimages/index.html","70e53160fbcf526de6d8f02211d87c0e"],["/2021/01/23/RX文件管理器/index.html","7182cc0f300acc118e25e093ec5d4da9"],["/2021/01/23/chromeflag/index.html","751179d0a24e4c38159e1ce28b6755e1"],["/2021/01/23/qttabbar/index.html","d8f6739463bc71dd2211a2e2ab02e6ae"],["/2021/01/24/githubspeedup/index.html","096bcb383befb7f2c842810d1adaaff7"],["/2021/01/24/jsdelivr/index.html","1eb395af9db5499cd184c033bedfd7a7"],["/2021/01/25/note/index.html","98d6b89678f985adbfaa4e8402515de8"],["/2021/01/25/soul/index.html","c813cdb8f0fd4f2746e3658610a5f021"],["/2021/01/26/herokuxray/index.html","974ee8315435d28b9079086cc7ea8140"],["/2021/01/27/proxypool/index.html","fdad2ac22e26c7b6006bb402bd0c00e4"],["/2021/01/27/tracker/index.html","835752e86222ec7e60b5d73d22d3b820"],["/2021/01/30/pandownphp/index.html","7a3cea4c0a94f2a643d61dfe9cddc7bc"],["/2021/01/31/newgroup/index.html","8fed73af7e02ef48b70f56beb96d4ac8"],["/2021/02/01/clashlanguage/index.html","8a2f5f6e46f7cf5b8ecbce12eccb3ba6"],["/2021/02/01/encrypt/index.html","a0caafa079bf35c4b8c73c8e89d46713"],["/2021/02/01/footermotion/index.html","957f6a4dbee2c6b86814f028eadda01b"],["/2021/02/01/gitter/index.html","94eccf95ddce46f86a10db2d0d3eac66"],["/2021/02/01/pixivtop50/index.html","caef64e157a1e4ff5205aeb2a6fd2365"],["/2021/02/01/scrollbar/index.html","788fc44eb0a4c7eb709fc672c213203c"],["/2021/02/02/clover/index.html","16aa360dc2a675e4d8ef3172d91583eb"],["/2021/02/02/maya/index.html","955cb2c5446a27c60523e27b44a1c491"],["/2021/02/02/speedcontroller/index.html","41e29f262ea38e244cd57547ec252444"],["/2021/02/02/yesmusicplayer/index.html","d92269ef8c229ecfe498811bdefd8dac"],["/2021/02/03/lenovoonelite/index.html","40185221f178a5256ffe489272c5afb7"],["/2021/02/03/skipads/index.html","70c232bc4206c7f055ab343b17dede29"],["/2021/02/04/picseed/index.html","7de20017a4dc34a3a4072632a7ad772c"],["/2021/02/04/renren/index.html","1f329c41427514bf88e0bf3c1d326492"],["/2021/02/04/serverstress/index.html","2bc70840069e17ee532ac05c4ddfd256"],["/2021/02/04/wikipediazh/index.html","4d5b9acd12fb9f735739a8d246bbb93d"],["/2021/02/05/googlevoice/index.html","b3594895745244b4d0e2326dc1a868c3"],["/2021/02/06/clashconnection/index.html","0248b4d08c456320758a2829f3b653a1"],["/2021/02/06/gvtransfer/index.html","e7fb284db465371e4c729570beaea817"],["/2021/02/06/todesk/index.html","f14ebbb04943d7b3dc49e8c8113eb740"],["/2021/02/06/vpnblacklist/index.html","b3b6be74e2a150fe8b270b8e21faa319"],["/2021/02/07/mklink/index.html","4ab53e4a62fffa885af9af07dd75d698"],["/2021/02/07/speedtest/index.html","37fcc5d9618b2fc2b656ee48256be837"],["/2021/02/07/translate/index.html","069b7fdafa854113f3f96a204e78fa4c"],["/2021/02/08/ewomail/index.html","801c33b239f37ae2d8f7a393f4cda399"],["/2021/02/10/officee5/index.html","cd4607873890128c55fe651bce582df5"],["/2021/02/10/raidrive/index.html","92a19a1ffb5f4b76fa24d7111bcc7675"],["/2021/02/13/e5sub/index.html","1e3453033db6eef7bb5d93fcbeaac5be"],["/2021/02/14/screen/index.html","23e312256a37d41813b9c2a74fa86550"],["/2021/02/15/clashtun/index.html","e01ce439cce4c341caebecd096010b17"],["/2021/02/15/messageboom/index.html","234752787bfe344ec75ad4daca233511"],["/2021/02/15/oneindex/index.html","1a6f0a62055e388c6d43d0bb9f803659"],["/2021/02/16/govsites/index.html","3222b9615836b8a7488662f0c3608773"],["/2021/02/17/hexototypecho/index.html","fde1a9b00b43862fa60766d38c74765a"],["/2021/02/19/fiddler/index.html","a13453e83094dc89b5f971d6d75d2d85"],["/2021/02/22/potplayerset/index.html","4de6853ffa773bbc9e02f28e1dbe8598"],["/2021/02/22/studyresource/index.html","aa8504e701b1ee7408b54d3bb281d809"],["/2021/02/22/telegram/index.html","cd7f027ba4ff3f81ec0cfb343f839141"],["/2021/02/22/videos/index.html","05f466f53b738f8d302e8ced93ee221c"],["/2021/02/24/mtproxy/index.html","b9a777f07b848a424baeb28b286c8276"],["/2021/03/10/catchcat/index.html","7d3c4bd2134f99f461d1b6d2d976f8ab"],["/2021/03/10/neteasemusic/index.html","9e6ae29c29a2049c8a37a03bc6caeb88"],["/2021/03/10/surfboard/index.html","e5a3a282c94d0a9f2efa19f975788d48"],["/2021/03/11/vpnandjc/index.html","d93d1349695c19847b1b0aca22322f2c"],["/2021/03/12/qrcodes/index.html","bb11e588f1f90f763297abc1a6b01460"],["/404.html","7c996dca7dd6de391f20abdf07aee373"],["/archives/2020/11/index.html","ea245e84c8c25bad5c5334c08d84771f"],["/archives/2020/12/index.html","e36daf4e0ddf08741b55f0d438756501"],["/archives/2020/12/page/2/index.html","a9246eae1f63599843ccdf9906d9c6ed"],["/archives/2020/12/page/3/index.html","72593ca31b37a938d74b763136c3fecc"],["/archives/2020/index.html","45f053f04589ed11a8cd369e7ce58551"],["/archives/2020/page/2/index.html","fee1f72ee7ecc0f8b10bc9dcfdab9215"],["/archives/2020/page/3/index.html","14b7e5d084ccc095dbd7f1093dfbfb3a"],["/archives/2021/01/index.html","3df5d536c4d8f0eb8dd0f1f76f9cd770"],["/archives/2021/01/page/2/index.html","5fb349d80528ef3a2d4dd71549e6ad8d"],["/archives/2021/01/page/3/index.html","86e5912f5bd58ee6e217fd7de3062cba"],["/archives/2021/01/page/4/index.html","1e3fb8f4d03833fba30be419355f4b4e"],["/archives/2021/02/index.html","51dda76462c818233fc1b6e4ff73b64b"],["/archives/2021/02/page/2/index.html","7b7172f3c0ba1e6fb397e8179e355192"],["/archives/2021/02/page/3/index.html","9eda01791b181ea8436149c1a596fd6e"],["/archives/2021/03/index.html","59beaedb8e414aa5ccc06d72ba52bd5b"],["/archives/2021/index.html","298604ff0d900bcf04810fd50904a182"],["/archives/2021/page/2/index.html","9f1930d8c5dfe8766c10825297f089ee"],["/archives/2021/page/3/index.html","bafea3eb65281c29a09981a5c1087a12"],["/archives/2021/page/4/index.html","e05f0ff1812209fbd828007cadcd62ff"],["/archives/2021/page/5/index.html","2930cd86c5d3a6a2ad35530ae6773389"],["/archives/2021/page/6/index.html","d0fe71785cbc039ad8899bc699e992dd"],["/archives/2021/page/7/index.html","bff0bef1f439d6e016f1dcac9808c904"],["/archives/index.html","3b7dc82228b5df8058b05599f1194a5c"],["/archives/page/10/index.html","a9b2834c92cbdf46721d411a18502f64"],["/archives/page/2/index.html","37ce2b6aba6af961981cd627381419a0"],["/archives/page/3/index.html","a938b2a795011700b78150d962f0ed40"],["/archives/page/4/index.html","d3019fe7323b6b6af01b41b7997a47c9"],["/archives/page/5/index.html","25f959d5f007e95cc8da45abc33cb42f"],["/archives/page/6/index.html","a1fabf793208a124f48ea2f98890eb0a"],["/archives/page/7/index.html","5af8c9e10cc20cfd41666e48bb22d627"],["/archives/page/8/index.html","ea1a93299d99ec5eca71e77fc3d1fe03"],["/archives/page/9/index.html","c55c32b1b4ba3d8350b5263dfeb9e03f"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","140dcd77a56c79d9eb0468ec0df6b3cd"],["/catchcathard/index.html","e9291c58bce68730cd21cc4e2b0a474b"],["/catchcatimpossible/index.html","ce8ac7a16e2b7990d9e0aeb78de4c0db"],["/catchcatmid/index.html","dc073d912aef351b621ce171416ebd82"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/categories/VPN/index.html","f03e2da26c9535ae8f50edd04e50add6"],["/categories/VPS/index.html","ab0ed16d680ac8f31e8e18f5b6fd71bc"],["/categories/index.html","ee7af766456ee82423d0e972c9da3e34"],["/categories/下载/index.html","c98723e6efbef1e516149fd51b94c691"],["/categories/安全/index.html","3e07a73efdd3492e5689c8a3e360e933"],["/categories/建站/index.html","b629fde1649bd1977527f6c8b30caa60"],["/categories/杂/index.html","f2810b4577810207a79dd93c3cd5eddd"],["/categories/杂/page/2/index.html","ce364af3c1067cdd7b0d23e0f0279b69"],["/categories/测评/index.html","ca7824f850c8a1518f4715249c343e98"],["/categories/科学上网/index.html","de00a474eaa78a4c966bc92cd16f210c"],["/categories/科学上网/page/2/index.html","afb72c61b34e3162c387b43400701b45"],["/categories/编程/index.html","52dc45a2d7179a7b2201d7e455a8fcc1"],["/categories/网站/index.html","d0ca780a22c3ac1e4a7ec7e6c5a6ee63"],["/categories/网站/page/2/index.html","67f66648400a251f8abfc3e2ba2f0558"],["/categories/软件/index.html","ca5069b52c0ac4f7925d6e49e23d3a8f"],["/categories/软件/page/2/index.html","0722450f21e8e03d4c98204b0576c0d0"],["/categories/软件/page/3/index.html","69f151355302f834eae3787adff4e328"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","3de09abe77ae17eede0386c32255ed3c"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","e75b129af79c7930a5c68220a0ac3944"],["/ios/index.html","e7077999a1fd813f883624a4d34742bd"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","bfcdf1ddbb9bed8f577b4417a39544e8"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","4fd1c96380777fb386a4567b7a95da35"],["/page/2/index.html","a231d190f6b69a4f4958e339bafde311"],["/page/3/index.html","7c50aae574d0684dd0d69f44b0d8f4a8"],["/page/4/index.html","57e15cad1b1134060e0baa77cf2f86ff"],["/page/5/index.html","fad60126382d2175332b3aef2499d1b1"],["/page/6/index.html","84f588f80a572aaea42c3551a2431169"],["/page/7/index.html","24057a11d65404e864947ed7708283b5"],["/page/8/index.html","da0f96d2404704213451eeeae0156e7d"],["/page/9/index.html","158625d75294ae6e237e55fb6e0667fc"],["/payment/index.html","ee6922e54a955cba86458436a16ea560"],["/privacy-policy/index.html","198c659304862030f00e6edc5f9def03"],["/rss2.xml","3aa588e76090d4e17607870bc5c72296"],["/search.xml","97683c4d20cf6f5e60477f94b21e67d0"],["/sitemap.xml","fb320a07f40c89241a468782e4964625"],["/sw-register.js","3b9129dca349fcbf897ab42299a3fd22"],["/tags/5t/index.html","ebf09003f5cd9b9108b6c43a9668971a"],["/tags/Clash/index.html","2b3fcca64222221ed530927b3e308dd0"],["/tags/Clover/index.html","13efd1ad5b4ad0ffeb0cce5c5e793146"],["/tags/E5/index.html","4edb73d375766502a9d5b9800aea9a61"],["/tags/FTP/index.html","45115248e0a8b9263632dd63bb59ff2d"],["/tags/GitHub/index.html","b92b6d27e85326f4cfe7c5669d7b7953"],["/tags/Heroku/index.html","9ce575172bcb3be534f16d8c665cf253"],["/tags/Hexo/index.html","09283cffb1687da6c3d961e7b179d5fb"],["/tags/Lenovo/index.html","51c0b8752cff566daf239f6321474262"],["/tags/Oneindex/index.html","f909c46f1d323fb1b3373aa81094d1a5"],["/tags/QQ/index.html","9cb5efa2a315ea94225b9344a3ec7ecb"],["/tags/QTTabbar/index.html","2cd056d147e1e608d8785b7cb9311792"],["/tags/RX文件管理器/index.html","3445f5cd13c50146fecd0088dd9c7168"],["/tags/Todesk/index.html","e2f60f5741bc155f495f31a84d90498a"],["/tags/Vercel/index.html","247e7abf4af8d42720a989f98d967805"],["/tags/ads/index.html","bdbb3796fa8a31841b6cf73c16ec8e12"],["/tags/api/index.html","1778f107156491e00874f68cbccf81de"],["/tags/app/index.html","5ea8fc5dca282fc48c4319339192dfa8"],["/tags/blacklist/index.html","69ae60517210d8f2f2786f5269ee7d61"],["/tags/butterfly/index.html","0d981fa6d352d6921e5b3db833cc7b58"],["/tags/chrome/index.html","e130b2396d885ecafac4c2c23a85d50a"],["/tags/cloudflare/index.html","763fa017e0b584a5c4d6553b890e3b0a"],["/tags/cmd/index.html","f5c496b2bbf090460b032ffa67e097b3"],["/tags/c盘/index.html","be850fb7eb3f09b19b2038bef5132ec3"],["/tags/email/index.html","45e945c840229a9340a05d5be159caad"],["/tags/ewomail/index.html","4a0c9121f14161373c6773797f688e6a"],["/tags/fiddler/index.html","0a0070a12cac2cbdeb218e467462db3d"],["/tags/flags/index.html","2671d21ccf4109bbb5ba1cffd5539ff3"],["/tags/footer，页脚/index.html","fd159246c6606eb0336b73233b6c5248"],["/tags/galgame/index.html","0481c9a561c6e4061ac3cdea6b10c294"],["/tags/git/index.html","ffb45334cb5bf66129a09f49d5af011f"],["/tags/gitcalendar/index.html","eb66cb50159b54e4a65850f0ea8ab08e"],["/tags/google-voice/index.html","6765806ece82f213902ca2cb2af70edb"],["/tags/gv/index.html","c1c338d2a6c42f76cca68798ba3eb907"],["/tags/html/index.html","e08e614c0e7a918409372e2bd7f38c22"],["/tags/index-1.html","9f3986c7e39de31321f323a5afa9559c"],["/tags/index.html","c7ad184105aa63096d2c34f02ea97074"],["/tags/js/index.html","733fd60898fd6edac10fb52364675db0"],["/tags/jsdelivr/index.html","d9d0515a673ba99b1ad2cd7466148f39"],["/tags/linux/index.html","0c1cd67e2f723e84698f463449bbe5ba"],["/tags/madVR/index.html","5168ca84ba3e76924a663d8e21aef76c"],["/tags/markdown/index.html","264fd8c1ed57ddb6012f99cae93fdaae"],["/tags/maya/index.html","9ff1ffd82e066e453a56552d4c0953bf"],["/tags/mklink/index.html","49ec19d428f9ae46b42d253a5acf8c8e"],["/tags/office-e5/index.html","e99be8ba9f5dec97beef1cd7d909347e"],["/tags/onedrive/index.html","ec436e0afc2e16330cc2061f16dedac4"],["/tags/picGO/index.html","0ce2ea05ba0b7e72fa69ca52c74d24e9"],["/tags/pixiv/index.html","9708961a9272ea1ba89821dcb08baca5"],["/tags/potplayer/index.html","125fea83ad536338e1736acc5b110355"],["/tags/proxypool/index.html","a189b64cd3239d558614fe7f71567bfb"],["/tags/qbitorrent/index.html","48f10dcf8571c4fc9954eed65256389d"],["/tags/raidrive/index.html","26221cd63ad57e842d086bc6d8971fd7"],["/tags/screen/index.html","6974b04e180daa8259a2d968ff5d30a2"],["/tags/speedtest/index.html","811b2e9c04ad5dd9c28229421c5652b2"],["/tags/ss/index.html","bf076421edf499b0702390a9f9b57ed0"],["/tags/ssr/index.html","d476e47f3646b6f0f45bf61269a609c8"],["/tags/surfboard/index.html","3d61566191d6d0a591c15859f663d685"],["/tags/tap/index.html","43a67556fa7ecf4e85d00b7d86e71ba8"],["/tags/telegram/index.html","458375ab9d2f4ad138744ff2a9ffc4db"],["/tags/telegram代理/index.html","c3374d32c0043dcf32b423ce6b758ba0"],["/tags/tg/index.html","5e4102d44f299b6604718ce44173916f"],["/tags/tg代理/index.html","00a76aa5c4841baa666d0124a641cab0"],["/tags/top50/index.html","50789d290895eae35fa96b8827f81dd1"],["/tags/tracker/index.html","bf250c2faff811768a645ad2f4b68fe5"],["/tags/translate/index.html","920a7c2a71cc5e2fde6f2cc075ed847f"],["/tags/translater/index.html","42ed091dd43a4992e0a93e09092e5e21"],["/tags/tun/index.html","42edd550598336761763e9f8f5c1646b"],["/tags/typecho/index.html","774931c0f41b3063a8521efcfbc5760e"],["/tags/v2ray/index.html","ab2473fb75af7e430d481df285b2340a"],["/tags/vpn/index.html","a8e8df00d00fe6d9f4ab2be032c51c67"],["/tags/vps/index.html","4ad7144861887a4f8228e532b3b3e9ed"],["/tags/windows/index.html","5eb15e6e793a77bcf50c22814d65b338"],["/tags/windows端/index.html","e7520f0786cb5475f24c6e847e0dbf1a"],["/tags/xray/index.html","e36d369d5a9b698421bbbfe22ea6c5c6"],["/tags/下载/index.html","b73a9ec42401b4734b81224c0e63959b"],["/tags/不限速/index.html","78a8f978581d3ccbda01e268cb5e2d91"],["/tags/个人网盘/index.html","1ce2e98fe82b34587ab2e7e4a53fa19c"],["/tags/主题/index.html","66726708c28b2b60de14d24e4372937f"],["/tags/云便签/index.html","9cd87214618b978326d772be7cd43e3f"],["/tags/云盘/index.html","9ef74d3d223ebed4660fdaf77b01cac7"],["/tags/人人/index.html","042583207a290c5c8348092bb1d879ef"],["/tags/代理/index.html","56619396285e3d494553c91d234da377"],["/tags/代码/index.html","f5da0ce8bb3a92601c7a08da0994b17e"],["/tags/优选IP/index.html","1a7f2c989ee42958df60cf6fa362ff66"],["/tags/便签/index.html","cfb33572b084938641305d004eb37694"],["/tags/保号/index.html","41aef655ae48005a9eff553acc0292f6"],["/tags/免费/index.html","d21adf97c8c581f47c0a29a3283541d4"],["/tags/免费节点/index.html","5920fc18423d5329c484163768546842"],["/tags/加密/index.html","b26318fdd156141217d45601b574aa2e"],["/tags/动画/index.html","fb27c3ce99dded4f41b38bef7423db9c"],["/tags/博客/index.html","89f3f70dd61173ae378bb909c828eadc"],["/tags/历史记录/index.html","031d0e8c2b1835ad1615c8be32da1181"],["/tags/压力/index.html","202e909fa5da97388c9d2dde71325171"],["/tags/压缩包/index.html","809e00ba8a7d26af10663b2666cd6450"],["/tags/反代/index.html","67689bfb951910f1ae4478cb30ad263a"],["/tags/可视化/index.html","dd73f248662c1414ffb6604c8ec1f876"],["/tags/命令/index.html","74671a6f85598c145d53436e00ff20d7"],["/tags/国家/index.html","8f4181906506e00af97b54f3019f861e"],["/tags/图床/index.html","9db0d7e1b09282731b0f53a56f660e72"],["/tags/图片/index.html","9bff9167b30dafd4cc3eb1b385688490"],["/tags/域名/index.html","2c259012f546736fdfe9c4bcd67b6b5c"],["/tags/多标签/index.html","de1227216f847ae24513e6eb17b54e78"],["/tags/存储/index.html","4dd92dc6c5d6985c997b8abdb136c8d6"],["/tags/学习/index.html","e88a682a41b3e92e4ece4a2bd1b276a2"],["/tags/安全/index.html","ceb7a16ac19922b765832dc0cf9dc953"],["/tags/安卓/index.html","c005e4572ef208747739e2dbc27c601a"],["/tags/宝塔/index.html","ebce6539eac0582a085bda15db6a75a7"],["/tags/小游戏/index.html","4bccb6669553870bacaae1482873dd69"],["/tags/广告/index.html","e79382e44c888ed343fa972b1faf085f"],["/tags/建站/index.html","00bad816c330611bd5b51584cbc02c18"],["/tags/影视/index.html","dbf588941271a6bc60c9ba9fd43eb909"],["/tags/快速启动/index.html","d910c4c6ba4776d27d442defc6d46a80"],["/tags/手机/index.html","ad1a6c7754e9acab364470cc0f2e456b"],["/tags/托管/index.html","f74af1f8148cf2ca15488d57c3d5c9b8"],["/tags/抓包/index.html","4f0f0c365c8d1ced2587764131685bed"],["/tags/抓取/index.html","189fecfc042891c1410bf1ea16607331"],["/tags/投屏/index.html","0b6dee347ce07184c96afbceec5d53a3"],["/tags/拓展功能/index.html","99fb7aa73449d2c8753103f034723ff9"],["/tags/挂载/index.html","dbbd80cad2269bf5d73988fb54c70348"],["/tags/指纹/index.html","c21dbe1874b2bc90feff01db92c95542"],["/tags/接口/index.html","1fd9a8405081523e8ad93a208827f091"],["/tags/提取图片/index.html","4304f1ca33811e0840d16409713809c5"],["/tags/插件/index.html","569c97772e2bf38d631baa5356995a0c"],["/tags/搜图/index.html","51176fc40de11bd686235c27f9a6780d"],["/tags/搭建/index.html","563a0a3f0e5376dcb40fe88d2fcb0770"],["/tags/撤回/index.html","9af42a63b7c4f35b2bd1d22df317de98"],["/tags/播放器/index.html","1ac6e50a2a8bbd096f1236146328a4e3"],["/tags/政府网站/index.html","e1e18dcab68e74bcc2dad7bf5d09ef6f"],["/tags/效率/index.html","88ef6392c12fd7f3b35aa46cbd26b2c1"],["/tags/日历/index.html","8b6c8aaad221635a45973be007d60677"],["/tags/服务器/index.html","749cfac7925b1f2e4c792de87f1f5c39"],["/tags/机场/index.html","7dcd9145144a3a242e862d3554c2a193"],["/tags/桌面/index.html","2dba7193a6b58a22823a88fb4972f4a9"],["/tags/梯子/index.html","f6232a170cdc4074dd58bc82ba296844"],["/tags/检测工具/index.html","3def44a3363eb7757a1d9d111ddd7866"],["/tags/汉化/index.html","b6ff8a936e15e30da73c4d5363793b7c"],["/tags/测压/index.html","e8c94415d17d88b81e763f6e7adb6d3a"],["/tags/测速/index.html","4c39b5eca65196dbecfc659fc6c344e4"],["/tags/浏览器/index.html","24237903d4b01895c5cac218e6fa7c0c"],["/tags/清理/index.html","770320d6a28a896a2fcd92548ccbac5d"],["/tags/滚动条/index.html","19f105d6ef9064287cd83bd85f49699e"],["/tags/灰色歌曲/index.html","0287efa22e686e458693116f5a3d8722"],["/tags/电影/index.html","f9afc4205055100f4664dfffc25d9f4e"],["/tags/电视剧/index.html","8c20e6b47b0d833351537543dd911851"],["/tags/白嫖/index.html","2251ed15a54c4869b7fd79e07d377057"],["/tags/百度/index.html","2438077964358eebabcf604f16249b8b"],["/tags/百度云盘/index.html","94228dea44029f796ae77296340fea79"],["/tags/百科/index.html","03aa4631753953d92b1d8d453110fe06"],["/tags/短信/index.html","2ff1ca54c8f05ffb57042e8e03c3dbc9"],["/tags/硬件/index.html","f164616e4e1d6cca758fef8c0ea88ab4"],["/tags/科学上网/index.html","445af12db7ee1cd8b2476156fc1f6399"],["/tags/空间/index.html","de3517007422dd4b9ff9aa12cadc4a2f"],["/tags/笔记/index.html","edb30a136fd19e729c8184c0f74067d9"],["/tags/简洁/index.html","05cba06b27dbb46d9ec9205c57d81607"],["/tags/简约/index.html","84df8df833e56a744eecd69b63422874"],["/tags/维基/index.html","1e420b51363126727efc6ac25e3c58e6"],["/tags/网易云/index.html","c4b3fadfb134a2d6d4a3d89a00d3ec53"],["/tags/网盘/index.html","0c50e25972f8f7842aa69c7a9063e2e6"],["/tags/网站/index.html","36393e287998635ef0b92b6753d0116c"],["/tags/网络/index.html","dbbcbee6a2a37bb58149f269cb246c6e"],["/tags/美化/index.html","ff80e8fe3a75a3891195ddd0554a78ce"],["/tags/翻墙/index.html","dc0426d5611c7690ee2e1f2ff16ce2a9"],["/tags/翻译/index.html","6a834816b2939468ad67e76396985557"],["/tags/翻译器/index.html","c1a03b61e1fe8fa846e26e44930178a1"],["/tags/聊天/index.html","fce1c9a1a23e56c5e4b56ea36458efea"],["/tags/聊天室/index.html","9e4c2e72ffdc6a06a2b165dec8f99a2f"],["/tags/联想/index.html","c7328e565087814ee97bf7ea666289c2"],["/tags/节点/index.html","53e116f077e8cad4824eb13ad6fbb43c"],["/tags/虚拟手机号/index.html","c168715f4e78262f778ed7f199580598"],["/tags/补丁/index.html","328e9b4a75f970713a195f4fcef1327a"],["/tags/视频/index.html","0e3c8a26d97bb0ce42c434b5b85dffca"],["/tags/解析/index.html","70ecdcd42fd8b27ce3322e7fc64fc04b"],["/tags/订阅链接/index.html","44e1eb1c200d9e73f7ae8660ec30c289"],["/tags/记录/index.html","5653692fdb3c4ddea36277b6d0cd70c2"],["/tags/识图/index.html","e198843417e09c4d31a6b15dd4cc3f91"],["/tags/语言/index.html","c06c3c235db0b14c46b7e454fb5a6d8b"],["/tags/资源/index.html","cc03723b2d0ba78589de0052e4e1df4a"],["/tags/资源管理器/index.html","dc769dca1257bd8079f6cfbafc3fff6c"],["/tags/转移/index.html","0c5c329cda86683e460222a5e82fb967"],["/tags/软件/index.html","e65679c64761a7603a198ad6fb58ef5d"],["/tags/轰炸/index.html","9d9fc27385a3ccc88bc328f307608e5b"],["/tags/迁移/index.html","cd8e2f2106f9c7ee8b4f3f9305b2772d"],["/tags/远程控制/index.html","96a275f0696c0fd1064fa0a99377db84"],["/tags/连接/index.html","38f7802444e4c0021bef7e7353a30656"],["/tags/追踪/index.html","998fb64089550b7dde02d8cfd97ddcee"],["/tags/速度/index.html","4befb07e85cac948c339068914469ec5"],["/tags/邮箱/index.html","7cb92c2cf03779abcbf9924f3eb7724e"],["/tags/酷炫/index.html","786a37abb0442327c3f7bd7586701a52"],["/tags/钓鱼/index.html","d73eb217ea6fa11afe0fb4f21890aa34"],["/tags/镜像/index.html","65332aae2f57022643c17ee44130ca67"],["/tags/随机/index.html","04dbc018762996e52bf0cddbfdec4324"],["/tags/隐藏/index.html","720cea14f5a66fddc37c8e337f595d86"],["/tags/面板/index.html","b0c0ffa772ab58736a0f887f163ed2a4"],["/tags/音乐/index.html","563f128b71a1eaf1927aa2211421056f"],["/tags/高颜值/index.html","afa8b4af8924d421d79210c832fc3595"],["/tags/魔改/index.html","6201526ee370028256d4634742949f88"],["/tags/黑名单/index.html","c48339bc8b189d64ad1ff479f50fdeab"],["/urls/index.html","403598c4b1c2c778b101f6624fd517bc"],["/vps/index.html","f7b3bcc1dbfac2a3a45d60716a5bb135"],["/支持/index.html","519d52976cb6c6bc3879a6a91e8f4898"]];
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
