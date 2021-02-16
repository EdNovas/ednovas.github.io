/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","43812d006e0f1a0dd1bb52abfcf00133"],["/2020/11/29/clash-windows/index.html","17e79e3f7bee3cdc4f53ec1b1c9c4d1b"],["/2020/11/30/websites2/index.html","0d1d2652bb352720a5a82c97af74d079"],["/2020/12/04/iphone4s/index.html","a7e051f83562a0ad67a093b3272abee2"],["/2020/12/04/onenote/index.html","b1590097e9cc2e27504898c34bf859ed"],["/2020/12/04/wesites1/index.html","43cadb9d9e839154b6e16550379f089c"],["/2020/12/06/nokia808/index.html","20878174ec36c687ad4dafd9dafe4085"],["/2020/12/07/ipad1/index.html","d5e1682e70c17c1208c3af5d0b2627d4"],["/2020/12/18/freesubscribes/index.html","2972a2e2c707ec7c2740e84c62066968"],["/2020/12/19/musics/index.html","41e253860bb48590f543c1f85a8ea1c6"],["/2020/12/19/shadowrocket/index.html","3c941ea35af7963063e075dd6786c745"],["/2020/12/19/v2ray-windows/index.html","0c4689aeefceab0ab1a7228c94b86fcf"],["/2020/12/19/v2rayng/index.html","f17ebc76df17562bb9fc54f218ab730e"],["/2020/12/20/beoplay/index.html","8f5f5dff2671a8f1dac562fd47fdbe2f"],["/2020/12/20/订阅链接转换/index.html","a33a18cd91f57832cc1da0393f013551"],["/2020/12/21/chrome浏览器下载提速/index.html","07ddd786a107d304d0bb790211ec80a6"],["/2020/12/21/免费128线程并发下载xdown/index.html","d0321a59566860913ad73c08c15e818b"],["/2020/12/21/免费32线程下载软件ndm/index.html","d693e8f1811841e29d83498c8c7ed41f"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","5de3c6e39c9134ddd39a7b30925c0c9b"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","8e707163fcd525f7c918ab8108f2316b"],["/2020/12/21/广告怎么知道我在想什么/index.html","d3d0fe8a9a9bb392205b423ee23675e6"],["/2020/12/21/无名·引子（小说试写）/index.html","0a6cbcbe8f3508226655566eddd47c0d"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","add14576e08cdcf52d27ba43f37760d9"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","9b1ec56fc6ce3674b155b77a778e88a4"],["/2020/12/21/高速轻量下载器aria2/index.html","2b78d834f9785b1f67cab7fbd8003865"],["/2020/12/22/2020-cee-roo/index.html","3f2271109d7530d29e92b61e3dd3aef1"],["/2020/12/22/firefox插件、github、steam富强/index.html","b615e7618c632ded003292f4e2ad327a"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","8c2c04f944c671785e4dde9181fd6938"],["/2020/12/26/python-day-1/index.html","87f05521ec0eb91320da1b40b17f1feb"],["/2020/12/26/python-day-2/index.html","f1f36172bbe8774a8488465ae8097d33"],["/2020/12/26/度盘不限速下载方式一赏/index.html","0baa2311f90e66d6a415c6d1519f177b"],["/2020/12/26/添加开机自启软件/index.html","8b72dd29f3405dd8b2113e32dd6bac05"],["/2020/12/26/电脑端截图方式一赏/index.html","b5dfcbe599ef65b261ac1eb8d248f2c6"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","e7455b2ed50680a53124ac7f0a34fd07"],["/2020/12/27/最安全的浏览器tor/index.html","e8501f0bb0d4192f3747a88e63404f8b"],["/2020/12/27/网易云刷等级和听歌数量/index.html","73729002a324c27d1b9e237e95e6b383"],["/2020/12/28/freenom申请免费域名/index.html","9c3c917afd42959e4e9196d5d72e0dd9"],["/2020/12/31/机场/index.html","31705371bb39bf2026d820834e661e09"],["/2021/01/01/M1/index.html","cfd195c5f1aa306bd8f0687226d135cf"],["/2021/01/01/compress/index.html","1f954d1e5a0ecff1031d75f75b7637f9"],["/2021/01/01/infinityfree/index.html","f834be71ed89ad2fd5568dbe85120256"],["/2021/01/01/硬核翻墙/index.html","c311bf81d6be7270d731f5c8e2f4983d"],["/2021/01/02/qq/index.html","78ddf4a0c1aff449919b1837c92d700e"],["/2021/01/03/netch/index.html","8e9b4e3c1db3d624b1da9d1940f240ca"],["/2021/01/03/waifu2x/index.html","7bdc322c56a86410abcf901358a3e018"],["/2021/01/04/ads/index.html","8b57a47d6b42217fce4f456978c0cdda"],["/2021/01/04/games/index.html","daa2479bd26bf293d21ca42ffc4941a4"],["/2021/01/04/heroku/index.html","1459e61316cc4774bff8b3cbc85acf3a"],["/2021/01/06/movies/index.html","b314eaf7aa356f7e5c5e6de3045c9c0c"],["/2021/01/07/google2020/index.html","e1443ff8ef2e262643dada3f6f674113"],["/2021/01/07/lucky/index.html","764e55c2adc628a14d2ea8b74a35ef45"],["/2021/01/07/spotify/index.html","7f73e2d9379bfdc5af53a5b7e8e91889"],["/2021/01/07/thunder/index.html","6cb822be181ad97a0134c4cfb03de1b4"],["/2021/01/08/adguardhome/index.html","53e03a4ae4d8b50bb0209c6acc3ab7bf"],["/2021/01/10/IBM/index.html","05cc42e2bcd5bf3eae8016929c5b5ca2"],["/2021/01/10/potplayer/index.html","b2d0567a9ec8b6e4fb1f357d9ebd2493"],["/2021/01/10/sakuraanime/index.html","ff51f8809de4813cb036b746f0528e20"],["/2021/01/10/美剧星球/index.html","1563bdcefd5fb76be38f161988488d8a"],["/2021/01/12/telegraph/index.html","a7fcc39d008b5f1cfe5c3aa814d31fae"],["/2021/01/14/comics/index.html","27a205db522b3b5846e7f31ed593292c"],["/2021/01/14/ftp/index.html","086e56ff85b17dc269f0b185e985c637"],["/2021/01/14/oraclecloud/index.html","1f2229f7312271084aa22265f29943bd"],["/2021/01/14/porkbun/index.html","276453f5ef215d3cd8b520f2445b88d4"],["/2021/01/14/powertoys/index.html","86f39988379d6b44ed53f6754f45cccc"],["/2021/01/14/taptap/index.html","73a12b76dc5b4fe6dda025055bec7668"],["/2021/01/14/ubuntuvsftp/index.html","376f8626eabeb071745901ba134fec8d"],["/2021/01/14/小说/index.html","ad315a2878be0514b01014beec689ad7"],["/2021/01/15/freeproxies/index.html","e3be7be82a4a5c8875f2f7c4f6a8d625"],["/2021/01/15/incaseformat/index.html","82e96e87de453f26661beb5f975e5d1e"],["/2021/01/16/euserv/index.html","13514fc01325157a511c124fabfadc9d"],["/2021/01/16/winxray/index.html","5bf99192dc09db59b578970b4804f249"],["/2021/01/18/qqreadhistory/index.html","f03d75aef8deab19f0cb7e78eb8ef2fa"],["/2021/01/18/qqrevoke/index.html","6c09ef28829fdd49de7d7a88a647dd4c"],["/2021/01/19/freevpn/index.html","ffc47d128a8ea93e0b8c0848ab5f0e3b"],["/2021/01/20/browsertrack/index.html","01cfb49bfc5adff3657a4d1d21f5f0c5"],["/2021/01/20/v2ui/index.html","19ed83e1017c41de2ded078181af0a1e"],["/2021/01/21/failedtoconnect/index.html","0993d1c6d5a3744a517c1113727e1ae6"],["/2021/01/21/gitcalendar/index.html","5a00f4d4cc018932cac969d121731baf"],["/2021/01/21/markdownformat/index.html","23273ee0cb13d504b45db1618d89bd89"],["/2021/01/21/markdowntable/index.html","3be8e267347cb9394705c2c09288ad4b"],["/2021/01/21/vercel/index.html","3e5fcc6a4f5b8b1beb6d3b730620c791"],["/2021/01/22/hardware/index.html","35daded97f101a0f3290bbf55863ae45"],["/2021/01/22/muviz/index.html","496ee8a9b475a0b134ae4c687a93158a"],["/2021/01/22/randomapi/index.html","9bbfcb8d9a70feac62acb7e52fe393d9"],["/2021/01/22/searchimages/index.html","1160c54789907dbba7abc5ad3787b91b"],["/2021/01/23/RX文件管理器/index.html","10addc1f239107cf53a2722ea75155f4"],["/2021/01/23/chromeflag/index.html","aa8a837362d4d9a5e579f7c905caa041"],["/2021/01/23/qttabbar/index.html","eac0178f77d88ea204da5c7257ec159c"],["/2021/01/24/githubspeedup/index.html","f6e77badf4ca76b2e84decc6080c7518"],["/2021/01/24/jsdelivr/index.html","1862de1eb1594ca6120dc83c41aaaedd"],["/2021/01/25/note/index.html","c846eaecc29bc2acca9c587dcf7275b0"],["/2021/01/25/soul/index.html","b1497c72dada80154166ed15f3ba2349"],["/2021/01/26/herokuxray/index.html","c4dbd551829738384d189976176da329"],["/2021/01/27/proxypool/index.html","ff1181f8bbb411eebe04ca18c1c44a14"],["/2021/01/27/tracker/index.html","2670b93e98726614e1e5963fe4a99298"],["/2021/01/30/pandownphp/index.html","e6de51fac4d246597c6f3c8cc7c1f643"],["/2021/01/31/newgroup/index.html","3089bd54db7172a8a28c367cbbed7eb3"],["/2021/02/01/clashlanguage/index.html","e0a014c8bb8a723a95e14715663827cb"],["/2021/02/01/encrypt/index.html","7788d6172fee1b32c39a86b3f08e697a"],["/2021/02/01/footermotion/index.html","5733fe4b57f01d6622086849d43ebd7a"],["/2021/02/01/gitter/index.html","0a0e378c2b4f2fbfcd944a8ce86a45d2"],["/2021/02/01/pixivtop50/index.html","c359c74bc3bd423ec830a9a2d2070959"],["/2021/02/01/scrollbar/index.html","84321b0432f49adf91f51b33f6fcb65b"],["/2021/02/02/clover/index.html","ee6370467b00abc14eab97c1d96abccc"],["/2021/02/02/maya/index.html","af90885cf7cc7127f7f980a814e8a8b0"],["/2021/02/02/speedcontroller/index.html","da8461cbd17ca42f469d44cfc6722b29"],["/2021/02/02/yesmusicplayer/index.html","e0e10b001f17d7266f27faba33a6e03c"],["/2021/02/03/lenovoonelite/index.html","b1e0438645975356f3f5b399e4171046"],["/2021/02/03/skipads/index.html","f7860ab12fbb3702fc38bae2b3960505"],["/2021/02/04/picseed/index.html","dcab5fcd049ff9bab80761c053d6c69a"],["/2021/02/04/renren/index.html","3e0c9818c1744bf276e2fd2aaf320b37"],["/2021/02/04/serverstress/index.html","2d6bfb211740bebb995aa20a230a1b34"],["/2021/02/04/wikipediazh/index.html","8887549c97065c235682e09a5356314f"],["/2021/02/05/googlevoice/index.html","c36b722fee5f9ce263835e52d91f3894"],["/2021/02/06/clashconnection/index.html","6a4270f846af6d3d4bf3f9e4ca34f209"],["/2021/02/06/gvtransfer/index.html","45ae5753bb92423622bcb04775ee2c92"],["/2021/02/06/todesk/index.html","26ba2cf897e1df8088e5dfab20b45b69"],["/2021/02/06/vpnblacklist/index.html","f986bbfee2f40876ee5403b067d1c5e9"],["/2021/02/07/mklink/index.html","9537d67a91a2390f3b863e6797de47bf"],["/2021/02/07/speedtest/index.html","5fa6372d6ae552e1e4cd3e6647c4fc8a"],["/2021/02/07/translate/index.html","d254b4c3f63e8f176041fcb86dd36922"],["/2021/02/08/ewomail/index.html","47237d54a06f4da3b7bad1b8fa4e8e2f"],["/2021/02/10/officee5/index.html","f80f0a696590ab7ed0ed3472d6305b65"],["/2021/02/10/raidrive/index.html","5ecf7ed8d45234705e00ce9d8ced4eb4"],["/2021/02/13/e5sub/index.html","d123fa65cdc4bb8dda873e90c86b5e9c"],["/2021/02/14/screen/index.html","90e04e180b832be3c4f9ec0161b00294"],["/2021/02/15/clashtun/index.html","2b8b675a5ef1df8f2878da766e356d03"],["/2021/02/15/messageboom/index.html","15e172d09f53a23e71cfb87c9a160504"],["/2021/02/15/oneindex/index.html","18d8ed6fba7380198a59a7e3284f2a7b"],["/404.html","73347f31c3a53caad5b16049fa5162b9"],["/archives/2020/11/index.html","f6ce42749c1636fc056835e7df1539a0"],["/archives/2020/12/index.html","28f202b6ac576c4368a1da2192849806"],["/archives/2020/12/page/2/index.html","8e000d7c666f4269e6c50db9e35c1fcd"],["/archives/2020/12/page/3/index.html","abcbec698904ea5cc23e8815ec001518"],["/archives/2020/index.html","aa647435a990457fef981a6afdc4f215"],["/archives/2020/page/2/index.html","30611874761455bf930c78a0b47971c9"],["/archives/2020/page/3/index.html","f95cd99eacbf76109d8784923b7f7e2c"],["/archives/2021/01/index.html","0ea20fddc903ae6992f04c5bb06cc5c3"],["/archives/2021/01/page/2/index.html","be1cc50441269051992fd3c357fce019"],["/archives/2021/01/page/3/index.html","d7aaa68f7f6f4318bd229a3a05816fc2"],["/archives/2021/01/page/4/index.html","7032cecbeff0ca8e3c44212f903a35ee"],["/archives/2021/02/index.html","7c5ab0e60251b748011acc9e804512af"],["/archives/2021/02/page/2/index.html","751ae71bd8853a3262b71d7de5f7d9b4"],["/archives/2021/02/page/3/index.html","ef971c1e7cbeb86aa73e87f930b33744"],["/archives/2021/index.html","dce9ae0983b274375cff595d02063770"],["/archives/2021/page/2/index.html","679633a32b9547bde00579ebc03f4e4c"],["/archives/2021/page/3/index.html","6fe773add4a3a16249c551488405203e"],["/archives/2021/page/4/index.html","5452c7daa39ba3e40c0f7e88e22344a8"],["/archives/2021/page/5/index.html","a8970de816913dac372c36180e2de09c"],["/archives/2021/page/6/index.html","9fe278d82831b8063fdbbe6ace4bfa08"],["/archives/2021/page/7/index.html","c7386acaa6473d55e5028d8d449fe221"],["/archives/index.html","e1a0b71de192ab812043e3b8d751754f"],["/archives/page/2/index.html","86981044ab599141c4e9d590094e00f2"],["/archives/page/3/index.html","3e1a69ce3d1e5fb45ab97a6cd6449d08"],["/archives/page/4/index.html","8e7cbf2dd7c1063ba1a42852c139c701"],["/archives/page/5/index.html","94eacd151d8ff3e5f7be742059d6684e"],["/archives/page/6/index.html","10befaca0ff2b8c4f508ce2d5f097c4d"],["/archives/page/7/index.html","a9a94343872c014af80c0e3726a435a5"],["/archives/page/8/index.html","72d51b60bbc3e0313ef061b148645941"],["/archives/page/9/index.html","7cdae47cf96a2d5d8ee7c2eaa918c78e"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","96fd6facbc68a613297bccf3d43da1bb"],["/categories/index.html","b7f7b1d74c3543e87d06b6875fbc4b5a"],["/categories/下载/index.html","cd8fccd400f6b9139eeee1f2fe279c50"],["/categories/安全/index.html","c3f7bdc1fcf4d28d639452ff2c44d9d6"],["/categories/建站/index.html","c2839703d5b678ee34905a1ef64bb4d4"],["/categories/杂/index.html","ad6b8cf30b04d7299b9ff82a7d3ecec7"],["/categories/杂/page/2/index.html","307048dec99204205c9565fb95b5a9aa"],["/categories/测评/index.html","ccbffab5b482fd5e7182b370c66800fc"],["/categories/科学上网/index.html","dcfef18a451b86713d4677799e7fd038"],["/categories/科学上网/page/2/index.html","79c9f2fa18ec4893d39d9fb1fccde179"],["/categories/编程/index.html","877ea83bfde6be2f10d2c7bc9426ef91"],["/categories/网站/index.html","300f78b35ac4a1dc66b316efc8999a5f"],["/categories/网站/page/2/index.html","c4b027ad4c12c29857c2438039c65bf9"],["/categories/软件/index.html","9d41034788fcd1c1df53092ec29fca5e"],["/categories/软件/page/2/index.html","5a94d585b4838d6cf2cfe5988d078629"],["/categories/软件/page/3/index.html","b01283c496929bc9c79b503072c9c46f"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","126673ef644daf0a86bdee35bef343bb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","f4d45582eaf95d0c7f19a41190c8ecb8"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","a9f2877249bb030e9d8eb017b413cdaa"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","fe89d2254a42809622cf0606d6af22ef"],["/ios/index.html","77cc607e47472eb3481b4f5b942a86fd"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/2/index.html","b40fa68ead233b859f01835568b921ac"],["/page/3/index.html","c1be732d1396513fe2d7d9f5b86bd629"],["/page/4/index.html","bb387d973f5d9d0280dcdf64fd64499b"],["/page/5/index.html","62549277c3be8c870ecabb5c7e7072bb"],["/page/6/index.html","d88e94d1a03cd2d9524caa72b74e50a0"],["/page/7/index.html","1afa5a4c12a27c60e53d52a224b12a58"],["/page/8/index.html","484aa00abcfb426924967966912e8f73"],["/page/9/index.html","93a07f9a0c30a7f3cc95a4486ab59fee"],["/payment/index.html","35b287ced4cdfe3e32199294a6021764"],["/privacy-policy/index.html","a9153a09fcfaef39d78e4355c98cd861"],["/search.xml","d4d5a3bcfe843432bac37b2838f78da0"],["/sitemap.xml","89895feb44bf17de1563d53ac6f55cc6"],["/sw-register.js","eca242b55bb67f2122f4c8b043b55684"],["/tags/5t/index.html","6540b6367958cbffd4fec852f9fc9ee1"],["/tags/Clash/index.html","5e5aa4de3c980d5461d602657a1e18c1"],["/tags/Clover/index.html","ef572da1aface36b86488b506229f5e3"],["/tags/E5/index.html","060eb40a41935da4858cc734a585c074"],["/tags/FTP/index.html","87f09d34fe2539aee5a72030f2e5d9d5"],["/tags/GitHub/index.html","e998ae67feb1682ae2febc070abd387c"],["/tags/Heroku/index.html","28979e0d8c6846c0c627cd4ec81283b1"],["/tags/Hexo/index.html","3cae228e9becd13318f55b3e0f4aa7e4"],["/tags/Lenovo/index.html","d63ccf67840c76b2e576b0f0ddc5c260"],["/tags/Oneindex/index.html","deb95260cbcceee1354a78fccf5dacd4"],["/tags/QQ/index.html","70b8f63d3348a9c5b03673dd92c61fba"],["/tags/QTTabbar/index.html","82850b0f3bffe985952bb0ed5f8e01d1"],["/tags/RX文件管理器/index.html","e116a621bb975771bd2fb93f67d9d0a0"],["/tags/Todesk/index.html","c29221b23e8bdd1d97b86016741fae7b"],["/tags/Vercel/index.html","5c881d7c4fb8ab6ba36336c5ac9981d2"],["/tags/ads/index.html","ef3c0a914f9b1345f40673254d5d877d"],["/tags/api/index.html","ee0a2f220983c95cd904c2a74547413e"],["/tags/app/index.html","482718e37ae9e8874ba7cffcf4a81123"],["/tags/blacklist/index.html","9ed2c9fed0bd54e480a6d50cf283c4f7"],["/tags/butterfly/index.html","2dda247951920aadec2b9eef97434c29"],["/tags/chrome/index.html","bc34c2692c558cf676f384170be13180"],["/tags/cloudflare/index.html","1f3eb7b6079050e0d27429503cbe9c36"],["/tags/cmd/index.html","739bb63338bd79796dfcd48b440cd151"],["/tags/c盘/index.html","42a4ee0419e3a6496b07dbb895bc19bf"],["/tags/email/index.html","54e68ef6dd5ed99029253a92f8861b09"],["/tags/ewomail/index.html","a7eecf108bb77273411ae672a5cc4125"],["/tags/flags/index.html","adaabbed02e5a1b15c4d5255cd4be56e"],["/tags/footer，页脚/index.html","fca949a45ce32eef6d5be3b149ee89e4"],["/tags/galgame/index.html","d5e8c8622b01be3b30fb7a558b92a7ff"],["/tags/git/index.html","0dfd21169f7d1d43edbfb25978a29e06"],["/tags/gitcalendar/index.html","572f31065542772b7a43aeff77483bea"],["/tags/google-voice/index.html","d2c8e06b8133ca5f2eb736d01d3a1d4f"],["/tags/gv/index.html","457e3fcc97391d6100c8b545bd2df764"],["/tags/index-1.html","3304a4ff48f594bf1915a2751fe1b62d"],["/tags/index.html","2d03f2a6d885a705008273cf0377b76e"],["/tags/jsdelivr/index.html","282f6a092f2c0cbd03db4b4fa8b66d21"],["/tags/linux/index.html","7959248a77ce65fd58574579fb33da89"],["/tags/markdown/index.html","f36a83ebcab42f0b334fa491d733f28d"],["/tags/maya/index.html","74cc04387f826ca5d7afc40839963677"],["/tags/mklink/index.html","f6c66f010c320fd97329637e802c7b8b"],["/tags/office-e5/index.html","5bc45f5848d4229ee8c0f0201576da11"],["/tags/onedrive/index.html","f9101521fbc085d8092a6d633cb3d192"],["/tags/picGO/index.html","8348245bba8e09d618216ab41dae5694"],["/tags/pixiv/index.html","9e554f0b8ed148dc201403c913e86ccb"],["/tags/proxypool/index.html","20707d897a7689f9aa73e25681b9505e"],["/tags/qbitorrent/index.html","8d418a6367f9fae1b796a5be0017fd80"],["/tags/raidrive/index.html","fdc1b131cc86a8c9f29bccef4023929b"],["/tags/screen/index.html","ee8074e7d768460aeb308e7c803f589a"],["/tags/speedtest/index.html","754a681e40b4d8ecca214f29b293eb20"],["/tags/tap/index.html","cf62dcb96c629157e26e30aec091adf2"],["/tags/top50/index.html","c696083328c34f834854eeeb95b27bc2"],["/tags/tracker/index.html","d81f51180dab5236a708f08090e22414"],["/tags/translate/index.html","bd876ac36829722976c70a07f5e646e3"],["/tags/translater/index.html","7b7caa398973b32e49f100a57d0d5b2d"],["/tags/tun/index.html","83d2a84accf23195cc08a384eeaac689"],["/tags/v2ray/index.html","910de346d324f021f9620665aadbff55"],["/tags/vpn/index.html","d3a1f16045118069e183f76389c85488"],["/tags/vps/index.html","b527532b1960e3761aa955bec1abc35e"],["/tags/windows/index.html","7e1988a44bbf18ba2eb3156e83110d6e"],["/tags/windows端/index.html","a60475bbcf747eb263d001dc0ed00f96"],["/tags/xray/index.html","aeccd5ad1a9496e742c1420ec76ee7dc"],["/tags/下载/index.html","ad4fdb150e44f709131b4e14485c9ec0"],["/tags/不限速/index.html","a2995c56259854de9693a38391c4e940"],["/tags/个人网盘/index.html","616232eff89d1c157fb7eed8125ad291"],["/tags/主题/index.html","961f09850294bf9a0064203bc15da4ef"],["/tags/云便签/index.html","3697dd17e81496f7e092f569c93fc1c4"],["/tags/云盘/index.html","dc027b55decc4b810bd818e7f0df3af6"],["/tags/人人/index.html","33d0f5462391a5fa1e534dad269efd6a"],["/tags/代理/index.html","e189ae6dca8883d4c3618ec5a897c28d"],["/tags/代码/index.html","29026bba6208bf9ecc506b58b39b5e2b"],["/tags/优选IP/index.html","9ce0db1c2669ce69182ebab014eb5339"],["/tags/便签/index.html","8fd77126af099e78eb808520e3c5c69d"],["/tags/保号/index.html","21e7375c6ba8e554993aa11397edc97f"],["/tags/免费/index.html","ad9d95f28a8ff37872942591bedc4925"],["/tags/免费节点/index.html","287b94c1f0d67f113eec10e20d6a1095"],["/tags/加密/index.html","fa14fc715417f2b89e868cae27e6d276"],["/tags/动画/index.html","bb5df11da8b94123b866b12c2ee052e2"],["/tags/博客/index.html","75f8f48aad75dc8c21714949f7e3408e"],["/tags/历史记录/index.html","2b359853d42eb9d83ecd61715f5b81f8"],["/tags/压力/index.html","ca47696ba9c998dbb9e86ed70820c0e0"],["/tags/压缩包/index.html","3d79e91e9c21ce95f14482174dc9d910"],["/tags/反代/index.html","4c00b646ee661da7063ea5e968c80eee"],["/tags/可视化/index.html","c9861bde230cc4bbdadfb8da9300ffca"],["/tags/命令/index.html","3038b878bf9168d7215b7e4577856070"],["/tags/图床/index.html","377cd5a6904c0b393dc0b332e4be27c1"],["/tags/图片/index.html","978f62619f13341897672b8622b42b5a"],["/tags/域名/index.html","90286ff203036ea335363c2154da74b5"],["/tags/多标签/index.html","5b67ff74dd5daaf1407bcb8256ea8136"],["/tags/存储/index.html","bf3f31e5a77bf546442eb635813218e5"],["/tags/安全/index.html","4b78802ac16a978609a5d15c264321fa"],["/tags/安卓/index.html","e99d5049423df333d8b68ed5c76e3851"],["/tags/宝塔/index.html","cd312ca8e76360c632497c4754f2fd35"],["/tags/广告/index.html","836ec45a866c326626aeed14e16c6e8c"],["/tags/建站/index.html","0d38cd189cac1879c1426fbf5153da6d"],["/tags/影视/index.html","2859fde67a86486a48b7b445108752a5"],["/tags/快速启动/index.html","721023ab81c3ba32faa78466c8a1c117"],["/tags/手机/index.html","e2799fe150bf445be66232a3c15f7f9a"],["/tags/托管/index.html","7ce949ecebb86757e75a22450167b4b2"],["/tags/抓取/index.html","8c2268a44a1ec9e8c7b1cada38f0e9b7"],["/tags/投屏/index.html","f85cbd1288cb89a9f88edbebf3a64bb0"],["/tags/拓展功能/index.html","ab0c4a273bb304dd977d5a0f9585b626"],["/tags/挂载/index.html","d4743027f4a830b818a387f2b0e349c0"],["/tags/指纹/index.html","23fe0ea780d7b5da0f22d4cc3836c0c7"],["/tags/接口/index.html","5962911d461d80c5f14a7c6600dc71e3"],["/tags/提取图片/index.html","12341592eaa5cc181aa77de8ab9ea884"],["/tags/插件/index.html","b587b9d5aa502bf895692afa52c5b7af"],["/tags/搜图/index.html","620ca05453d07e448b907c70d88adbc1"],["/tags/搭建/index.html","691b61c95ae35a33533980fbd1ff3bcd"],["/tags/撤回/index.html","35176a5ac1fb7e034125663d6145c0cb"],["/tags/播放器/index.html","72287b8da52a24e1aae189d056cf88fb"],["/tags/效率/index.html","b3ab8c2fa16dd95bec17b40304ba1866"],["/tags/日历/index.html","c75b92d84aaf82a42c6d2064cebef994"],["/tags/服务器/index.html","19a348fcde84a2d6f611cf1bc054e9c0"],["/tags/桌面/index.html","9582e02257a40462f11352d594fc6f4c"],["/tags/梯子/index.html","be9f9fedc0a8a18a45462cb00f275301"],["/tags/检测工具/index.html","34be679176b9921068056eddcfe93c17"],["/tags/汉化/index.html","f4837ce9b3921e2ac2f9642151e08f14"],["/tags/测压/index.html","327a429c03416eaf11066529f9a7ec05"],["/tags/测速/index.html","6566c9ac2173f2d2a0b7c792fc0be949"],["/tags/浏览器/index.html","a058fa30f3d83b9df86a9729db1ac35d"],["/tags/清理/index.html","1f35daed117df7919ad08d465cac0c39"],["/tags/滚动条/index.html","5f8027182dd8f58518d04701f940fddb"],["/tags/电影/index.html","b3f31fda3620e694c8d672cf49993bff"],["/tags/电视剧/index.html","50e3072335b0446ac86daf5bd9430633"],["/tags/白嫖/index.html","0f2a7d8bdf785229e3a724a967cf63b4"],["/tags/百度/index.html","94ea8cde56749b816341ef9087c642eb"],["/tags/百度云盘/index.html","60bae6e6e9ec1b165111581f50e1d4b1"],["/tags/百科/index.html","d65eb5c32fa38f4b7ea8061d6c87df65"],["/tags/短信/index.html","240cfb7aa70adf982eae9331295ec2fa"],["/tags/硬件/index.html","196695ffd11cdeb634dd4bf625ed0994"],["/tags/科学上网/index.html","f1d82ce3fb178c08d96ac35f636e5c4e"],["/tags/空间/index.html","757c4af0fa2ce6382196595b60a240c4"],["/tags/笔记/index.html","16baa173106fd31447780728604b76b9"],["/tags/简洁/index.html","1d3eee15c3419b36eaf4aa3916e2083a"],["/tags/简约/index.html","5623de407c024df7a4c66bfdccd857a2"],["/tags/维基/index.html","72c3f26281c8137a699b5f7bce50e32a"],["/tags/网易云/index.html","700031fd18e72e705712f812eadd7b4b"],["/tags/网盘/index.html","960e4a514ca2f08a12312e7f56907dba"],["/tags/网站/index.html","85ca70ad880d75659130eca56f9537c8"],["/tags/美化/index.html","8f7a1aae1da9d9ae8848c95cd7371c51"],["/tags/翻墙/index.html","f65c067a17d9aeadf84f95888c29fe39"],["/tags/翻译/index.html","55e622ca4e900979839426d8c4e78e38"],["/tags/翻译器/index.html","55b3fa0e08b64b6f1698956bcfeade14"],["/tags/聊天室/index.html","cc44dd0a2adc0cc0be313edf0b7e3323"],["/tags/联想/index.html","973fe360be25a78198f958fd12d5b0f3"],["/tags/节点/index.html","381ff03cc09828d7a2bf1a31b63b2f7d"],["/tags/虚拟手机号/index.html","187ef22f33a7a62054d8598aaa20c5dd"],["/tags/补丁/index.html","d2e260f43d2f5e75b6c59554c1099d92"],["/tags/视频/index.html","0d6af150eeacd7c496e4fae82fc8ecba"],["/tags/解析/index.html","6336b51621953009a8990dfb7e9e4ecb"],["/tags/订阅链接/index.html","bdb3af422106ee89d34aad7e04f0fbc2"],["/tags/记录/index.html","b9e860d1cdbe045194fbca2f89ca3c0f"],["/tags/识图/index.html","2be2be308cd3fcc9dd218e60cfd82abb"],["/tags/语言/index.html","d486c3724077a1ac2d490fa46c133761"],["/tags/资源管理器/index.html","d5ae078b7167573c4737bc373a8f2812"],["/tags/转移/index.html","b36e99f4ec3a16a021929f03a3655def"],["/tags/软件/index.html","b56b61f3484cbcd52a03b79f502f470a"],["/tags/轰炸/index.html","6e04661136356d022117b3e0dbff6836"],["/tags/远程控制/index.html","3722aaee5bd4c556a2136699ce376b3a"],["/tags/连接/index.html","f6e23d92d81f7d6cc42feb9374a0a2b7"],["/tags/追踪/index.html","fa0bc8826c98481a01b6e5985dea73a3"],["/tags/速度/index.html","a55545de34d1cecc78bb7d801bd4f710"],["/tags/邮箱/index.html","bac3fa56cf5c22a8cc54c96c2013dfbe"],["/tags/酷炫/index.html","b7dd84d0565e061c2a76d03e9c73f1cc"],["/tags/钓鱼/index.html","e1e09efe9ad33e61fbf8123f0b34c2a4"],["/tags/镜像/index.html","aef151c9c2fbd5de118d16ea67ab6156"],["/tags/随机/index.html","c0e3db39467353f9ec05aae7d80325d5"],["/tags/隐藏/index.html","0796e77234da92cb349e73adb9372cce"],["/tags/面板/index.html","498bf6d88438cd4ec3e09567392ee3f3"],["/tags/音乐/index.html","86ad24f7167f3b58a9ae06e26f311bff"],["/tags/高颜值/index.html","5e43d5f8fce8cbb2627caa4df5318689"],["/tags/魔改/index.html","d3dceadf0da56fd1974b7111a7bea0a7"],["/tags/黑名单/index.html","771d400a3e387ec5bb0fb62eab8b0167"],["/urls/index.html","a4ea1bdba2c41daed09aa5149ffc3522"],["/vps/index.html","a26b66e09c8f62651639aba0fa6206da"],["/支持/index.html","e629afc2173af0177c7fdd6226c6efe2"]];
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
