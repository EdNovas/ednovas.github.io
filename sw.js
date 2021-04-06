/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","d02348205def4d43506544d6fb53470b"],["/2020/11/29/clash-windows/index.html","504d74950c02df1425dbedbef3c7bb3f"],["/2020/11/30/websites2/index.html","3e01cb6ff2d38bbebf9c7376234a4bfb"],["/2020/12/04/iphone4s/index.html","a49658f9fa4e77f99bbf8d0ea39cdb21"],["/2020/12/04/onenote/index.html","d77d270b876104872e8bf2f7dc8d1add"],["/2020/12/04/wesites1/index.html","dda8a86948f90eb641b3bcc58ef6efe2"],["/2020/12/06/nokia808/index.html","ab2e27a6a5a1efc86c73a1cd781584b6"],["/2020/12/07/ipad1/index.html","cfe5d4785b8342efc3447837e4d07d72"],["/2020/12/18/freesubscribes/index.html","f63ca05a0f294a2af5c0f10d14523c22"],["/2020/12/19/musics/index.html","c7fb97393c6167d3283bb637a22205d6"],["/2020/12/19/shadowrocket/index.html","4a20165efdc6089b2b90ee6ba811cb7f"],["/2020/12/19/v2ray-windows/index.html","d18e82040fb2857eb6b0a634a2a8477f"],["/2020/12/19/v2rayng/index.html","058cc5dced084d656856049976e1a735"],["/2020/12/20/beoplay/index.html","437ab366ac8b6d8fb6f7abb6842a818a"],["/2020/12/20/订阅链接转换/index.html","f5ea21a085ee10476ebb4aaa3a914cfc"],["/2020/12/21/chrome浏览器下载提速/index.html","1496440637189bbd2a5911bc21a170d1"],["/2020/12/21/免费128线程并发下载xdown/index.html","33079526a080fd7da5a03601b374c869"],["/2020/12/21/免费32线程下载软件ndm/index.html","4d2b7f5f9c3add47b7efc559f0225fcc"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","86d6ce877a386423241560fdc156a408"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","7b46b75caf52a08cb252ed0dfd6fc9ac"],["/2020/12/21/广告怎么知道我在想什么/index.html","2d3d37b63e9b8f837072a39a8eff7a85"],["/2020/12/21/无名·引子（小说试写）/index.html","2a618bd1e4a2df3fc1246420bb3c367a"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","be2befb7a7a87c533c804531fc71665f"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","eac272b7b514cefba00500ba681c8e65"],["/2020/12/21/高速轻量下载器aria2/index.html","1f24113c80e6c2fa004d45ab27751dc3"],["/2020/12/22/2020-cee-roo/index.html","ff21fd74fdee033c81bb02527729f2e9"],["/2020/12/22/firefox插件、github、steam富强/index.html","e3058771d25687165c34d11247c205f5"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","beb11d62bc5b5b59e76f8e68b6eba080"],["/2020/12/26/python-day-1/index.html","0f58ca3d24cc7b40455be8fd2a43962f"],["/2020/12/26/python-day-2/index.html","2b9b5355eab5d67c4ecc23ddaecd394e"],["/2020/12/26/度盘不限速下载方式一赏/index.html","e03381733dfa4af2cb1664f3d5d9917a"],["/2020/12/26/添加开机自启软件/index.html","23e52c71a44bc718e51de40cc74eb058"],["/2020/12/26/电脑端截图方式一赏/index.html","b04554cfe0d9f8a723a7738b46fdacba"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","284129f59225726de5b2b24c46aef892"],["/2020/12/27/最安全的浏览器tor/index.html","36980e854b90f317856b6e48a6402390"],["/2020/12/27/网易云刷等级和听歌数量/index.html","04cc499496501e0cabd661e53a860f4e"],["/2020/12/28/freenom申请免费域名/index.html","a2eff396896c579e2bbc4151287bf0f7"],["/2020/12/31/机场/index.html","49402a1afcc58ef96f0e795dc77dde17"],["/2021/01/01/M1/index.html","4a5f46f89e35657184143bbd94950133"],["/2021/01/01/compress/index.html","ee0072d8dee922bf235ad3fd7c94f2a0"],["/2021/01/01/infinityfree/index.html","4a630b5db71adb16a54a6362738b3645"],["/2021/01/01/硬核翻墙/index.html","256131378bbaaa077551472fb14ba1a1"],["/2021/01/02/qq/index.html","d4581df7e55ae97dffd34c9fe044cde6"],["/2021/01/03/netch/index.html","954b243907ddd1548830840baf8caabd"],["/2021/01/03/waifu2x/index.html","28132301a1ab29e62a94cd445dcd4dcd"],["/2021/01/04/ads/index.html","1a9f78a0d2d0eef83c4283333c9f1180"],["/2021/01/04/games/index.html","e93a335cd99d79e2dd8f84ba52840867"],["/2021/01/04/heroku/index.html","67a18645c9c7f0eba48dbb23d29e3343"],["/2021/01/06/movies/index.html","a168ab131da5de5b571a5b49758b2145"],["/2021/01/07/google2020/index.html","39a8d05e09cfa76dc8886f2260d4100a"],["/2021/01/07/lucky/index.html","f9c797a1e260e637af7f7f4e06e8e547"],["/2021/01/07/spotify/index.html","4b3b8d8c1956e296e2ddfe870b5382a5"],["/2021/01/07/thunder/index.html","d2dff6257a00bbd6b4239f4c9af7d07c"],["/2021/01/08/adguardhome/index.html","63b36beec9d100fa13f811f88efaab61"],["/2021/01/10/IBM/index.html","08b08004fad1bef855bb8281219fcfa9"],["/2021/01/10/potplayer/index.html","0590ca0b8877f440c873600c9034d69f"],["/2021/01/10/sakuraanime/index.html","d844468c749b2468dc867f11a525df90"],["/2021/01/10/美剧星球/index.html","fc422476d5d1ef5e4d65f017db864072"],["/2021/01/12/telegraph/index.html","39d262e56d97c045a54923210d8ce7b1"],["/2021/01/14/comics/index.html","8a11c1fc62fd80b60983c939c5ec84ac"],["/2021/01/14/ftp/index.html","83a0b48b331f44f113e2473c5cdeafd9"],["/2021/01/14/oraclecloud/index.html","313fd0a00df318e09744db1ded01d081"],["/2021/01/14/porkbun/index.html","83e12d7311ffda5e5aeefd1f9700fef7"],["/2021/01/14/powertoys/index.html","c38088967ae3b1efd1ddd429ade6f7d2"],["/2021/01/14/taptap/index.html","d65ad3d6f0f3dabc75545898ab78f9d8"],["/2021/01/14/ubuntuvsftp/index.html","d171753f5a2f4c1ba6ad1108593ee853"],["/2021/01/14/小说/index.html","71fca7f634ce4bad38f38ca33e056be7"],["/2021/01/15/freeproxies/index.html","30695786d728bff55db8a5ed26dee33b"],["/2021/01/15/incaseformat/index.html","d333b55a45b5c35b27949106582a7735"],["/2021/01/16/euserv/index.html","9602f62532124589ddc051a7a359be85"],["/2021/01/16/winxray/index.html","d5baaccf5a8304b447701c8bc79b095a"],["/2021/01/18/qqreadhistory/index.html","db0d623b093ce9105398a56d80bc55e5"],["/2021/01/18/qqrevoke/index.html","553388a58b0859ccc42bba22c547bcf4"],["/2021/01/19/freevpn/index.html","0ff6813b8ad982af0fee72fb04845046"],["/2021/01/20/browsertrack/index.html","400dd7ab268c185f3a1e3024c6be9504"],["/2021/01/20/v2ui/index.html","fe98e4132e6eade747ad3280861b6e07"],["/2021/01/21/failedtoconnect/index.html","6ca7cc8543de8c5a7f60ee86632b0358"],["/2021/01/21/gitcalendar/index.html","4285ea5bde45360e5579ebc241841c27"],["/2021/01/21/markdownformat/index.html","d2a0c88cfa92c389443930589dc88b24"],["/2021/01/21/markdowntable/index.html","c4b16a7e04cad140435df8e046354e97"],["/2021/01/21/vercel/index.html","ab4845adf4d202c99a1b98ed9f20e164"],["/2021/01/22/hardware/index.html","41a003a5db7c6d58d6921d8b23bd5c0e"],["/2021/01/22/muviz/index.html","263d0c0b8d4283992ef604111883e50d"],["/2021/01/22/randomapi/index.html","52a5aa6073fd89cf10404a541a856a63"],["/2021/01/22/searchimages/index.html","5108aca2303223b04a6834159d848580"],["/2021/01/23/RX文件管理器/index.html","a994d82a15e85c715e9ab670477adc2f"],["/2021/01/23/chromeflag/index.html","f0f208edef7f3021a18560391d707600"],["/2021/01/23/qttabbar/index.html","7a70d448bd601cbd7d9fcca281e901d7"],["/2021/01/24/githubspeedup/index.html","d6d0fc10d1e44c706a6624d4a6355008"],["/2021/01/24/jsdelivr/index.html","ecada17f66935c8008fe9dd886dfd9a0"],["/2021/01/25/note/index.html","f58dfc424ee767fbe4e829780d233ed7"],["/2021/01/25/soul/index.html","56cee42f16befc107614e6f574858d59"],["/2021/01/26/herokuxray/index.html","401988e07e970c89e1c330ab2da55df5"],["/2021/01/27/proxypool/index.html","32d94e4e58f1fefbd97bf3be508752b6"],["/2021/01/27/tracker/index.html","5dd948854ec5b7c3570f208415ee441d"],["/2021/01/30/pandownphp/index.html","6f043b3a4487e3a6552c316ef3a81bc1"],["/2021/01/31/newgroup/index.html","06f52e5be9a0992b1ecb2ccb70e1dd77"],["/2021/02/01/clashlanguage/index.html","62482ee4604a79d51711acc543afd252"],["/2021/02/01/encrypt/index.html","e28e2b8dc7e2aeab274a55baf92f87d8"],["/2021/02/01/footermotion/index.html","377f81effc52935b097e958f7107f916"],["/2021/02/01/gitter/index.html","f0c26dfe6859b71f273a3fc4783d9b2c"],["/2021/02/01/pixivtop50/index.html","c9bd0ac1b296c3bae870896273feece6"],["/2021/02/01/scrollbar/index.html","4ef1d6c30fe68aa615f307752a885b91"],["/2021/02/02/clover/index.html","aad722b68a37f2aa836186e5df236172"],["/2021/02/02/maya/index.html","ac21a3f001823b52c28573a2f915337a"],["/2021/02/02/speedcontroller/index.html","a773fcef9a7dec204369052d535a8ca1"],["/2021/02/02/yesmusicplayer/index.html","cfa180837e55499316b95dc274d1653e"],["/2021/02/03/lenovoonelite/index.html","5bfbc79dd691909408bbd837583b8a4c"],["/2021/02/03/skipads/index.html","5ee7e4d3dc1f2faaba481cf9db5fa6ef"],["/2021/02/04/picseed/index.html","13fa7644d3603b017c87a927aef5f3a2"],["/2021/02/04/renren/index.html","4299426ad0b5e7f889713813f30cebe3"],["/2021/02/04/serverstress/index.html","56b4b17af660aaa4f62c64bd2c60159b"],["/2021/02/04/wikipediazh/index.html","69f14ffbe0f9a8ddb67b255c4550ac2d"],["/2021/02/05/googlevoice/index.html","b190b6ab6f9efead1f2bd8932418fa22"],["/2021/02/06/clashconnection/index.html","ea5efe789f2fa0a0990e2359aeb3657b"],["/2021/02/06/gvtransfer/index.html","6f1cb0d1f4e6b31ba8f817bd6ca03b62"],["/2021/02/06/todesk/index.html","98b016c193b88ce9dac3055d962d23bc"],["/2021/02/06/vpnblacklist/index.html","33458debce4649eed5859575e0516ea3"],["/2021/02/07/mklink/index.html","5108a8bf37b803730499cddb6221c850"],["/2021/02/07/speedtest/index.html","15a5665841dc7785d745899371160f0e"],["/2021/02/07/translate/index.html","9781acce29664e599e46961ddc3b22b9"],["/2021/02/08/ewomail/index.html","88efa4bf08db8e0394441adbd416c07f"],["/2021/02/10/officee5/index.html","3bafda61210ad8d7fa2e616ce55ac69c"],["/2021/02/10/raidrive/index.html","4c28ca785bea21583342daa4e0774051"],["/2021/02/13/e5sub/index.html","17a0b4aeee6091d08c0ba60ba41947a7"],["/2021/02/14/screen/index.html","54b56f77da6032bb65aea2e82c17dc34"],["/2021/02/15/clashtun/index.html","f762aac236180df4f1ed5a03e962e38e"],["/2021/02/15/messageboom/index.html","56387365ce6fe091c693c067372caa02"],["/2021/02/15/oneindex/index.html","fcc950140e9ce3368e46c3b8521504dc"],["/2021/02/16/govsites/index.html","742bd062f4dbf9995183530ab2bea0ac"],["/2021/02/17/hexototypecho/index.html","aae83eb261a1f123f27df971ec2223a1"],["/2021/02/19/fiddler/index.html","88abee0fbc6bae784b52e0ac7b90e3cb"],["/2021/02/22/potplayerset/index.html","f00bb5a54d27bbe67972bfe1379dd980"],["/2021/02/22/studyresource/index.html","017c52b22d4d5140f2a832c0a6255159"],["/2021/02/22/telegram/index.html","78c5e36a6bf78ad4bd383ba499c94570"],["/2021/02/22/videos/index.html","05b69f87d3bc193949cc095c9c91bd90"],["/2021/02/24/mtproxy/index.html","c289bbb388433a14875514d005aeff97"],["/2021/03/10/catchcat/index.html","a8122b683024474ec04e4f8fbf8805cf"],["/2021/03/10/neteasemusic/index.html","237407feb4c755ce4f1e6b152a9664ba"],["/2021/03/10/surfboard/index.html","c4c2d0db529e6e46b74dd9637a17e476"],["/2021/03/11/vpnandjc/index.html","6275442efd94f4477a0739109645804e"],["/2021/03/12/qrcodes/index.html","9b4ab1b2fcbc0443f9dd7095975445e6"],["/2021/03/20/qv2ray/index.html","224fc12134da34540a6352027cd9c138"],["/2021/03/22/freevps/index.html","0324503c9325d56d3a368f1ad06ee637"],["/2021/03/24/tgstickers/index.html","463ff340d1dcc50fe52ac69ea6f2794c"],["/2021/03/25/clashx/index.html","eb6952e84729d60830dc43010dffadea"],["/2021/03/26/bingwallpaper/index.html","1d942d0123e96e7253226f63ee89edda"],["/2021/04/03/soutu/index.html","3ace7b7e4ce259d29ecc0b90e5000918"],["/2021/04/03/tiyunti/index.html","de7f668e4f5e00fa430f63c76b6f12bb"],["/2021/04/04/btpanel/index.html","b9cc6ba917354d001a858d32cb2dfa6d"],["/2021/04/06/atlasos/index.html","9616862d80ca9a7ba515e0799437a736"],["/2021/04/06/cleaner/index.html","f62cccf5bf5383cdc8a8b5d139af04a5"],["/404.html","76f111a3290de841da0a07222b79963e"],["/archives/2020/11/index.html","3e59b1ec4ff068cdeeb36402c5092ea5"],["/archives/2020/12/index.html","dc1e69c18155ca3e79214594f377f868"],["/archives/2020/12/page/2/index.html","175b7de0ceb80ec005584e7e817f68da"],["/archives/2020/12/page/3/index.html","a8dacc075b4f7adfc0e4ae6c21083bda"],["/archives/2020/index.html","c6f1d7df20332596a951420ffef52135"],["/archives/2020/page/2/index.html","528a0422c926c928fec0d68f13c33f47"],["/archives/2020/page/3/index.html","0dbfde52e463700855d9aaf11a2ebbda"],["/archives/2021/01/index.html","8baa1a853f966cb2c82f56357ee2e739"],["/archives/2021/01/page/2/index.html","86443a0341188ab2899455929788050e"],["/archives/2021/01/page/3/index.html","fd26d77f4e51e0c5bdb31b870551d3f2"],["/archives/2021/01/page/4/index.html","fa06cc9c7bb6bbc5ad8e2ab80e6247ec"],["/archives/2021/02/index.html","a5e5605727639cedd671f5f83a639389"],["/archives/2021/02/page/2/index.html","c7b34b9478c994ee63a56e69801fc410"],["/archives/2021/02/page/3/index.html","d4a885771f892420e2667d4d77bc5daa"],["/archives/2021/03/index.html","45c15ad4bf5aa8d0ea065b0ea9a519de"],["/archives/2021/04/index.html","4490d9b6a4a0eb36799bad527f3fda1d"],["/archives/2021/index.html","36788674f3f1353e5272086b0ca0eff7"],["/archives/2021/page/2/index.html","28c1010102310f8a751eaacb55b852e3"],["/archives/2021/page/3/index.html","6e8e167c1caf08e2a6b47739bf1117ea"],["/archives/2021/page/4/index.html","1d54655de0b548ab5e7b14fd5f8ebd19"],["/archives/2021/page/5/index.html","17eeb17dc13aeeccca8e8852a00a37ea"],["/archives/2021/page/6/index.html","8fbbefc6efcded1082dd69c393bce2c2"],["/archives/2021/page/7/index.html","d8255097efd55466a781fcdd45481be2"],["/archives/2021/page/8/index.html","61c6dbb639f2d9844eeab046781df1f1"],["/archives/index.html","b065f7e4b7a1370c4eb3bd67b04ac311"],["/archives/page/10/index.html","ebfe8b1836c95da5c2f4e62d919426aa"],["/archives/page/11/index.html","af6b9670fa3eadcc87f5bea58e969fda"],["/archives/page/2/index.html","f58bde36ae48e80957a2593519ebc2ea"],["/archives/page/3/index.html","039b48e2d855c6db43e362cf87c33a05"],["/archives/page/4/index.html","80418cb816141ba2996b6c19f152ea13"],["/archives/page/5/index.html","609a2b0717d8bbbdebeb6cf088e915d4"],["/archives/page/6/index.html","5670b4b64b56145601eed0d5a3986b10"],["/archives/page/7/index.html","9f606f43c2393672defa71d0c508bba4"],["/archives/page/8/index.html","61f4cd0addf7f7434872d7ee6fdec354"],["/archives/page/9/index.html","0743d820816f7ad6fabc12cf584d25f1"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","694abe94bc20d7f67784e831a11a5139"],["/categories/index.html","dc23ff65dd7fec6abfe1623f8222db40"],["/categories/下载/index.html","05f1cd3b11386df2d6fe884013aaa8f1"],["/categories/安全/index.html","46d007703150273e6878f82776a5d695"],["/categories/建站/index.html","85f3fe016c3a1f22efa6d9cb03675fde"],["/categories/机场测评/index.html","b28863b6cbf4f6f68af093f0a38a2b81"],["/categories/杂/index.html","dd405fc26f1d394fb313c9c353a2a7cc"],["/categories/杂/page/2/index.html","6a398fb01e766c81640bbc71dfc50371"],["/categories/测评/index.html","e0ce6a6ffc8187846a2d89d7cb806a52"],["/categories/科学上网/index.html","9e09f03fa7d909c40130fc7610d25c7e"],["/categories/科学上网/page/2/index.html","28c6b30edb8da3d1a4d1b1bceed717d1"],["/categories/编程/index.html","f84544c6ab3e5310621f67c265feeb1d"],["/categories/网站/index.html","aec4c89a75f51c1a49a2dc36f9a663f2"],["/categories/网站/page/2/index.html","028608ff4004b6674cf407708a05f0e0"],["/categories/软件/index.html","e68cef77d7c85cce98ab37a2ef1fe391"],["/categories/软件/page/2/index.html","1e7330e0188a16e54dd20708c26fd11b"],["/categories/软件/page/3/index.html","10b957588af8d7b06349d7825edc0fe0"],["/categories/软件/page/4/index.html","03f381b8c669861056006d63ebf94a69"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","c88cfbc615224e8b82c9703f28566e3c"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","ce5e1edf657909eae0386f30c766f843"],["/ios/index.html","3b76bc5db963a9c7090a99b040d25339"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","68fd31f81e38a1c7906d2ca58e329a51"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","e6dd62061d7544fd4e9c2505fe7e5ff6"],["/page/11/index.html","5d0436912e48a88abf11e9a675d63924"],["/page/2/index.html","c7073ee4452791e85a4fbe55223c0616"],["/page/3/index.html","c461cc95e0dd30f7c9bb1764169a7ed4"],["/page/4/index.html","e08ed8209318592c4282eab852a67cd2"],["/page/5/index.html","61aee18eb450a7b2e58fe33aa4099806"],["/page/6/index.html","f5695c135c91cde7f7f41891e3d9f5a5"],["/page/7/index.html","070b7a81b7c8d6b918c1fa34cfa6e2ad"],["/page/8/index.html","b5ad0491afd05d905f9fe188d3876773"],["/page/9/index.html","3f772a2eb5cfdbeaf118baee38c95252"],["/payment/index.html","a2bdf5f83356f8aa3f1a3928d463f6f7"],["/privacy-policy/index.html","a2c82a435f7914e52f9590bcbb762875"],["/rss2.xml","9bc630f28e588412dd3f229e97cb2973"],["/search.xml","b737bf7c58dea6521c93d1091ed77d48"],["/sitemap.xml","b9d1d39c9336094359cf33ed97289bc7"],["/sw-register.js","dca26efed918ea0236a528c56b0880be"],["/tags/5t/index.html","c88953729d6e74977d1d064b4ec57c05"],["/tags/Bing/index.html","3d590372e93f84b15d433b2e3e48a1ff"],["/tags/Clash/index.html","3ab10219741a2f31a1947bab040abb1d"],["/tags/Clover/index.html","b2c5475c2eec1e20a95f05b9639a3375"],["/tags/E5/index.html","42fd2f59b3f382aa51213393ffc13497"],["/tags/FTP/index.html","b853c0e8b3f160d41abecede782e1916"],["/tags/GitHub/index.html","4151549542147bc5cdd74a6ee0aa7bac"],["/tags/Heroku/index.html","b1263e96740a49f1911f3fef32ca1c01"],["/tags/Hexo/index.html","a7d9f1957c46bbb3ee505f3f122eef67"],["/tags/Lenovo/index.html","a06d6387206372e987f9d701dfacf7e9"],["/tags/Oneindex/index.html","20e48cc038828c9ec6abe018f02d90f2"],["/tags/QQ/index.html","bb68a69d60ce07e3b50481028f80162d"],["/tags/QTTabbar/index.html","b028adb99b612498216d6e4d264f1509"],["/tags/RX文件管理器/index.html","f73a17aabeaa0d852b3c8e35d3e9ddd6"],["/tags/Todesk/index.html","9283a4ebe7372357edaeb08a096afd78"],["/tags/Vercel/index.html","a8ad3eb959c62992c75a41ec5e0e4afc"],["/tags/ads/index.html","1531f8a96d337f2910e7f13482b612c0"],["/tags/api/index.html","0e95c5067d5058021675003c17ab62ea"],["/tags/app/index.html","7ec94fe359a390afb8dc6ed07bbc7e22"],["/tags/atlas-os/index.html","046449e6d68bd5108f72cd99db17c423"],["/tags/blacklist/index.html","6f257fa9a567d8cf02514373eaa5d96d"],["/tags/butterfly/index.html","93c05a8508c311bcd6c0612184055c0c"],["/tags/chrome/index.html","de9a3726bdb15171207b71772aa210ce"],["/tags/clashx/index.html","7fa8380a5454fb2b3a8de68982a87b02"],["/tags/cloudflare/index.html","c847f63efa0a272c644fa885dcc2883f"],["/tags/cmd/index.html","5f4f67e3138b0a862b1a5b8320ee5e15"],["/tags/c盘/index.html","dd81d76bd11214aa0334126c7358ad24"],["/tags/email/index.html","af39a0b9c2b0020cf4ea94bbd6e6efba"],["/tags/ewomail/index.html","4a82298ea4b1ec4f7888fe9f84f4cd31"],["/tags/fiddler/index.html","4033b8f6100e0a55a711dc58fa0151b3"],["/tags/flags/index.html","f75b9f9c089afc109ab2f2fe7630c8e9"],["/tags/footer，页脚/index.html","7f8465bd268c0a5f3bf1e29903a56302"],["/tags/galgame/index.html","98088c5f64109b162de7cce71272d434"],["/tags/git/index.html","9bf48648d79416892026b53e8fca3257"],["/tags/gitcalendar/index.html","089cfea771add2432e08464c27736227"],["/tags/google-voice/index.html","f1069ba4dd304b65c5c1ee7848d6660e"],["/tags/gv/index.html","4172dbd8273b754bb4b4a95f8db07e32"],["/tags/html/index.html","b1111f78df5c0830d3e9a184185ce963"],["/tags/index-1.html","749681980bbb3224ba6c68bfbce1c677"],["/tags/index.html","062f3c57316ecf8a4839ee9e3dc1ba8e"],["/tags/js/index.html","28338183963a76a03f96933fd0faf14f"],["/tags/jsdelivr/index.html","8e32fa431a31c84d3afa2142082dbcc6"],["/tags/linux/index.html","8b54e0a9e7d77f99fdd688e57b404755"],["/tags/macos/index.html","0829058316f62eee224a361fc68c5340"],["/tags/madVR/index.html","9acfaf22d90d1da0db73aac1e233b0d1"],["/tags/markdown/index.html","0f0d340ba230dc6bb12da167d01868da"],["/tags/maya/index.html","caf173838d4bf780a407c0bff8d2df86"],["/tags/mklink/index.html","b732c20483f12a173a89f6b5662d4647"],["/tags/office-e5/index.html","17915021b8cfab7b942db471a01c2ddc"],["/tags/onedrive/index.html","a6402d046b3799b0e9ae02120fc2f8c1"],["/tags/picGO/index.html","84bf5289569057d1f3f54e6d7a75b93e"],["/tags/pixiv/index.html","79abbd8df5218c93f27fd8e19a8763a9"],["/tags/potplayer/index.html","4fa3d397ea039ee9a1c2389f64de50ce"],["/tags/proxypool/index.html","f0e76b583b59bb00fd37912a0dbb0d2f"],["/tags/qbitorrent/index.html","1fdef84036d97a41a9f5bc9a1949e082"],["/tags/raidrive/index.html","acd32add7f2817bfc739d05b9e255fdf"],["/tags/screen/index.html","67eaedb0c8cf48da7e412dcf0c8f6348"],["/tags/speedtest/index.html","a81a75c984a23b8e3430d4eb7d1d6f9e"],["/tags/ss/index.html","b4a4a50fb8d0d8f5f37ea04d538c5074"],["/tags/ssr/index.html","5dd5be3efd7db92006c9ba9eb41064a1"],["/tags/stickers/index.html","7736a0e6082fcace94a6ecb8e182cca8"],["/tags/surfboard/index.html","66a5d60827c2fc28276cd4c3c4f0cbc3"],["/tags/tap/index.html","160533f321ae60e7dc9d195012e68513"],["/tags/telegram/index.html","337ef531c86d5a370d258b45b82addd9"],["/tags/telegram代理/index.html","0d746b1ddb6263eca562440b6be2d89c"],["/tags/tg/index.html","7cd692b0bb769ceb4ce79c9773fe453c"],["/tags/tg代理/index.html","1eca3cf10686e6f03db03c22a63aea9d"],["/tags/top50/index.html","beec41d263308b42d6ecf25747945c10"],["/tags/tracker/index.html","d68e8fa44d85a1a3dd65bb5ce2a0d238"],["/tags/translate/index.html","33bdcf85a0e44e2f98ac09697ceeda69"],["/tags/translater/index.html","8a4962a80521e5aa7c67aaa172a50579"],["/tags/tun/index.html","feb81eb92af4c0ad015b9c53efc7bdcd"],["/tags/typecho/index.html","4239f21f20e33b959d6bbc7dac8733fc"],["/tags/v2ray/index.html","8367285452159a2d1cff668ce022ab73"],["/tags/vpn/index.html","27bc61f39cdbd939d97d4d5551dc76ba"],["/tags/vps/index.html","c8ea917b8bdeac8056a95e340c0061e2"],["/tags/wallpaper/index.html","3baba20b93c9db61649b95cde38ae345"],["/tags/windows/index.html","dbc808caec898d526e85108125b629d3"],["/tags/windows端/index.html","3183da9ba7b81082d97b7f97d9cfe3ee"],["/tags/xray/index.html","a88664aa6e84795565d4d9a79bec1b3a"],["/tags/yandex/index.html","c91f52199d960207764e5cdc7361cc3f"],["/tags/下载/index.html","81461b9520a27b302c73fe0cd296ee35"],["/tags/不限速/index.html","2d62aa9c591af931d0eec203136b8312"],["/tags/个人网盘/index.html","37c64cd90fec0d3190fdc511fdc99fa4"],["/tags/主题/index.html","8fb9cfc1745f5447c0161cf18117f85f"],["/tags/二维码/index.html","cec1b9dc54613319aafa64a5c6752d69"],["/tags/云便签/index.html","5b70fccf8355c29718689f2acb6ed9e1"],["/tags/云盘/index.html","f017f58106091bd060183521ce1de8e7"],["/tags/人人/index.html","120f019166b3afc75c6b20ff0028d046"],["/tags/代理/index.html","33bb69b1ada07873eb5bafa00ef5fc4d"],["/tags/代码/index.html","b2dfde3c70e1d0d65f34424f9277eb4f"],["/tags/优选IP/index.html","a0b87680a1eb79fd2eae25b0f31d69ed"],["/tags/便签/index.html","c5266d2f911a1f8a40f28eb41d2fa0cf"],["/tags/保号/index.html","16cd3cba9fafef1710ec4b88554492e6"],["/tags/免费/index.html","052e71b6f14099373a1ee61912a092d5"],["/tags/免费节点/index.html","bdf79628e89a7a5cf888e0fef1ef65f5"],["/tags/冷门节点/index.html","47876f39de443209add8629b367a1f06"],["/tags/删库塔/index.html","0ffa27e8b9d4b374f15f4f0ffb915b44"],["/tags/加密/index.html","67190c890910544d2a5fe6a958d8280c"],["/tags/动画/index.html","3961cfcb05f673be598c35e99bff3c7d"],["/tags/博客/index.html","9f06bb147124654a02430b356f3527a3"],["/tags/卸载/index.html","775e6fdf70d190a3decb79d5870db85d"],["/tags/历史记录/index.html","83a108aa04ff5850ffa5bf8cd9a8fe05"],["/tags/压力/index.html","099748a94617469a58734ffc9b519f43"],["/tags/压缩包/index.html","4e4032f312d466ad1bca80876811f922"],["/tags/反代/index.html","00ac6caef72a1a8f12d308952f63bc4f"],["/tags/可视化/index.html","481ffe9d8e40af7242360d717345aea2"],["/tags/命令/index.html","1b2a06515b421070a5bb75d6ee71e68b"],["/tags/国家/index.html","5005a46be5085f0312c5049664282368"],["/tags/图床/index.html","baabb13d1a37ebd11a824b1af1c8105d"],["/tags/图片/index.html","0f6b6c8f161ec4bac6ab4a897eea5418"],["/tags/域名/index.html","eac5ade4c7d0fbe8fd3d79f59dcc1a4e"],["/tags/壁纸/index.html","6c25cbaed0499b35382e6782c6d2c355"],["/tags/多标签/index.html","34c731eefcd330e8516f9c008f90cd7f"],["/tags/奈飞/index.html","f8178f253f721bbf70348a0488c3545b"],["/tags/存储/index.html","c22ced744c2179e8313e7a3832963096"],["/tags/学习/index.html","ee0be854256503581def034685c5ea2d"],["/tags/安全/index.html","4731884d593fbf30e7e2f5b7cb616ff4"],["/tags/安卓/index.html","855f7b4a177a646d98deb6ea86d3012c"],["/tags/宝塔/index.html","1206d04032382f117dff01924d05324f"],["/tags/小游戏/index.html","00eeada4252c557ada32afc7bfca7930"],["/tags/广告/index.html","db9f75d306f6314ccc7fef056d4cfcf0"],["/tags/建站/index.html","c628020eca89b727a6e55dc1ed14516c"],["/tags/影视/index.html","db2f9850e621ab4ddbb94395fda2d95a"],["/tags/微信/index.html","17ae33604b7a8a39773acb2bf539d8dd"],["/tags/快速启动/index.html","35442d15fb154fc55bedde1a176f8f4a"],["/tags/手机/index.html","2780a5b3c2c40451a35ddea3884553f2"],["/tags/托管/index.html","ebf8517b44e343a9dba080bf3fd0dc39"],["/tags/抓包/index.html","17e3d6338d15689a82d363ae54161378"],["/tags/抓取/index.html","db3deae818cef2339c5c529fb6b60c92"],["/tags/投屏/index.html","0489f718da898d9dd96516ea8cd994b1"],["/tags/拓展功能/index.html","32da2d275689c75b9f9b1b9264a5f748"],["/tags/挂载/index.html","cdbee6506ed12c8e8b87ce1ad398f110"],["/tags/指纹/index.html","ceb5c4981b16957572eedeb4d36a096c"],["/tags/接口/index.html","77aee3866e7fbae466c48b35cf9ca712"],["/tags/提取图片/index.html","16669828072b32604c4351ccac6410cf"],["/tags/插件/index.html","5c0bf2e1ce07aebdada4b40b58810fb6"],["/tags/搜图/index.html","46d2f1af58d0cbace924b74fef9d57f6"],["/tags/搭建/index.html","8d4bd9f92e289f18c98e3c33d31feab8"],["/tags/撤回/index.html","93c716b61e7919591af950584be281f3"],["/tags/播放器/index.html","3b4a15a68bc8eb5e0c93af776b29b5dd"],["/tags/支付宝/index.html","99ef2c1fee3d0c1ae6a0befe7a8408b2"],["/tags/政府网站/index.html","7f9b050dfe3c174eeef27c7b4b190cd6"],["/tags/效率/index.html","317a1335863bd3b3e88734f87bb51890"],["/tags/日历/index.html","4d227d928ceb0e6cd7c5572e9f6da0d5"],["/tags/服务器/index.html","25aa348e46d18b9fb8611ab52d052b7a"],["/tags/机场/index.html","d919e66307928aff3d45d4d321dabdf2"],["/tags/查重/index.html","ed211d6c2bcdea8cffc4e8d09e2f9808"],["/tags/桌面/index.html","8eb8759944baae51db6cd07956412f9c"],["/tags/梯子/index.html","303bd7ffe9a859e60735bd61e1484b7f"],["/tags/检测工具/index.html","4d4c1522527683782aed45b47312bb1a"],["/tags/汉化/index.html","99f4a771327a287aafa96680c24be37c"],["/tags/测压/index.html","21cd0fd4fc90e2f7cc6cbaeb4a78798a"],["/tags/测速/index.html","30b3c033b75b7abb867b7f98d2d4bac0"],["/tags/浏览器/index.html","fde56ffac20ecf1eb71e00b2160de01d"],["/tags/清理/index.html","03d7bfc7484f0d7f4ba42ccb2992df1d"],["/tags/滚动条/index.html","f75fbf18c437ff0944e5708905c67c65"],["/tags/灰色歌曲/index.html","72846e9e429339f7271e76fbbb06eb37"],["/tags/电影/index.html","c36f7cb24536f81e3581d783ed970bbe"],["/tags/电脑/index.html","b6460cf5ae22008df4f8cea12d54303b"],["/tags/电视剧/index.html","81a9aec5b0345b65fc1dfd9be65d33e6"],["/tags/白嫖/index.html","a7700578ac9ade2023d053dd12ad2754"],["/tags/百度/index.html","d687256997dad0f0f62ccecf4f5888a0"],["/tags/百度云盘/index.html","c8558b4886cbe8aa0656a92923bf2558"],["/tags/百科/index.html","387a3cb3bd73848cfd7faa6ebfba1906"],["/tags/短信/index.html","6cbe16bb97f8c322ab0191f2ac9d63e2"],["/tags/硬件/index.html","ef2fc4bf2ba230038b86255209abd042"],["/tags/科学上网/index.html","e57a18341e191e3ee347a1f01b8c5bb1"],["/tags/空间/index.html","5bd53fa8d702c1c11fd5c21aeb87de5a"],["/tags/笔记/index.html","fb382829135625443009c26659a8cb94"],["/tags/简洁/index.html","066caacf47d84add1e36063f2150c03d"],["/tags/简约/index.html","326baaa0f4f4e50fd295fefe1f8473e6"],["/tags/维基/index.html","bc00260b83e84f58463799044b38fb5d"],["/tags/网易云/index.html","c7c31b4e1d110d0ec76a3695ac0e10ba"],["/tags/网盘/index.html","90d1f237bd2cbbde34dbe6c4fec60b46"],["/tags/网站/index.html","8e8bd6d496663a8c34353277b0f281ff"],["/tags/网络/index.html","75daba4a5a420476edada3677c5d3ef4"],["/tags/美化/index.html","edb70879efd5eb4d3b830487c4579866"],["/tags/翻墙/index.html","461a4258a861c96334654f6345805e8f"],["/tags/翻译/index.html","aac26f66a2119903551032e3c764b0eb"],["/tags/翻译器/index.html","dbf24768e37a6e2ed4ed01c2b042c312"],["/tags/聊天/index.html","810a32879456e71fbd329a84c43587a1"],["/tags/聊天室/index.html","d46298952472ebe38239957d6f257730"],["/tags/联想/index.html","74d66524d2e0849ce52eef32bccc9e23"],["/tags/节点/index.html","2c42c2f0f61744441d6a42dc144fa944"],["/tags/虚拟手机号/index.html","c1202509df4f43d4ad866998bb56210e"],["/tags/补丁/index.html","af98aab6a157ae325d02c5e9b6e905ac"],["/tags/表情包/index.html","8149fae0dcaf8b8d0f1e83a8be18f4a6"],["/tags/视频/index.html","481a3d8481a573346fd9f9450f8000e9"],["/tags/解析/index.html","8dc1e0c7a2ca5d6abd18d66712846e22"],["/tags/订阅链接/index.html","25853b1a93d8a408584241cbd24b33f2"],["/tags/记录/index.html","efd3a57b52c1ad38e8d407f6997a5b6f"],["/tags/识图/index.html","48064bbfc7ec309b081de6ef45e5d323"],["/tags/语言/index.html","650245389c477c99155e1952c5af9a96"],["/tags/资源/index.html","ce6eae089e3a1f256bac1733ebdfeee6"],["/tags/资源管理器/index.html","775d0ddac8fcb57ec67459427aea4f74"],["/tags/转移/index.html","a24f9cb6e06f1bfbd01383105d269bcc"],["/tags/软件/index.html","10bd3bc7acc95fef6cd45ea1d925a5c7"],["/tags/轰炸/index.html","695d97df9f252b4196c1272537581fed"],["/tags/迁移/index.html","b23a1457e0aaf55db32ade840d283940"],["/tags/远程控制/index.html","62d8c5fbb2349acd7e6faad58e2cc6cd"],["/tags/连接/index.html","d354c6f3c77e8c66c10c122ed3f0f128"],["/tags/追踪/index.html","78a42f8906b2d7a5095f9dafe5d68790"],["/tags/速度/index.html","894e01c8384c60966be7001e290d3b7d"],["/tags/邮箱/index.html","e9809f0e8610baee9e6eb93df4c1707f"],["/tags/酷炫/index.html","3633568f8ee4f7b303c74be8deb2096d"],["/tags/钓鱼/index.html","ee94e545fe230ac01c3a52de9bf20a25"],["/tags/镜像/index.html","35cce778608ee1bbc4af62ea0fabd152"],["/tags/随机/index.html","817d2e42dd10559104f3fd9e2061bc02"],["/tags/隐藏/index.html","81e7f3ba55d82ae8c3b373775eb201ff"],["/tags/面板/index.html","f8d9fa0733f4358d26d0bd972d105588"],["/tags/音乐/index.html","8e232706f069d57d26aac8399454acb7"],["/tags/高颜值/index.html","3961c79775da681190df3d7d75c1e058"],["/tags/魔改/index.html","3b7cd228825879ee5e3c59aa7e78be6c"],["/tags/黑名单/index.html","d8bdf091282dadb359bcd5799d6cfd15"],["/urls/index.html","6e3f9f69bfb2f6109070dace1131659d"],["/vps/index.html","2d4fa4f7b6412af8e8bfecc47d1ce237"],["/支持/index.html","89e186fc1f0ab31db8a92be29364fee7"]];
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
