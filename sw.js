/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","de36dd10d981853fcda13f8068bc52b9"],["/2020/11/29/clash-windows/index.html","43a26671b3e48453ac822e72d634d897"],["/2020/11/30/websites2/index.html","36437f4b1edf32e25690cacbcfab33a4"],["/2020/12/04/iphone4s/index.html","73d02147f88b6b6a47dd54ed62f21670"],["/2020/12/04/onenote/index.html","368e76dfb202dc6146bd80c63fb418cb"],["/2020/12/04/wesites1/index.html","665e93cdf7c01faf72cfd6ae4c8e9a5d"],["/2020/12/06/nokia808/index.html","b6db4e2fc9f174fdfc2273d3f33a0e6d"],["/2020/12/07/ipad1/index.html","9b2a74b840fdbeb5fb9214b0d279b799"],["/2020/12/18/freesubscribes/index.html","f42c55a417d94b3b21a43ca79894f37d"],["/2020/12/19/musics/index.html","52bca6105be35feeed52e222482c67a1"],["/2020/12/19/shadowrocket/index.html","6cced6ba4b2695d798e8aa0c99bb74c5"],["/2020/12/19/v2ray-windows/index.html","c7ad1189d99710d6a29bf4fc031dd741"],["/2020/12/19/v2rayng/index.html","3c9f7f0b793333c45e07a89db195fbb5"],["/2020/12/20/beoplay/index.html","441f769ff9585c4c16becc8ac569df47"],["/2020/12/20/订阅链接转换/index.html","1ef1e21f6eb0cddffce289454e0a9ad7"],["/2020/12/21/chrome浏览器下载提速/index.html","032a8601be13876134f44b8498b145a3"],["/2020/12/21/免费128线程并发下载xdown/index.html","5ca4e12a6514e23792db2d8eef60f563"],["/2020/12/21/免费32线程下载软件ndm/index.html","768eba15ed944ff4303ea7d0493fa68a"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","2df4e981f944f5546601a14cf5809337"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","432fef27bf8af2e631c51db4aa30de89"],["/2020/12/21/广告怎么知道我在想什么/index.html","16e07a145c8e9cbcea7503fa32ea0dcd"],["/2020/12/21/无名·引子（小说试写）/index.html","a08b0b75929a875cc35281313b15b98c"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","1af5267b4ce1795e80cecfcdd7ce7802"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","6082bc01d683310dacfdfa1c236e25f1"],["/2020/12/21/高速轻量下载器aria2/index.html","445372f426fbe5f0e43540022a6ed7db"],["/2020/12/22/2020-cee-roo/index.html","21db76f881f00634950cdaa468d01637"],["/2020/12/22/firefox插件、github、steam富强/index.html","c793473175916a1f4170c03007d32b5b"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","54e4d0a81dc1faf0dd4c34080f678f90"],["/2020/12/26/python-day-1/index.html","67e2c4a8ce67cb19de26f44ab1194829"],["/2020/12/26/python-day-2/index.html","1d429b81abe2e174cc060feffc94dd04"],["/2020/12/26/度盘不限速下载方式一赏/index.html","58a4b55beddd0379bfcd645cb33a42c6"],["/2020/12/26/添加开机自启软件/index.html","73a8e6da96d635f2620abfb9a4d977ce"],["/2020/12/26/电脑端截图方式一赏/index.html","6ddd5e083db1bd7651bd113c26e86730"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","2e3efe0dcaee0e272a48efc4c7242afe"],["/2020/12/27/最安全的浏览器tor/index.html","03785063cf485800e226e3c28c4ddbf7"],["/2020/12/27/网易云刷等级和听歌数量/index.html","e4bb8dbebd59831f7ac0773a5db14751"],["/2020/12/28/freenom申请免费域名/index.html","0c051fd9b9bcb6bbae47d122a1bbb5dd"],["/2020/12/31/机场/index.html","e5828889c51819ae80359c88ff6ba055"],["/2021/01/01/M1/index.html","6df43b459461ac640b12d07c6e18e0fd"],["/2021/01/01/compress/index.html","3607215a2046205cdbebc8956a757bdf"],["/2021/01/01/infinityfree/index.html","9809800f512a2815f90e4945278ac034"],["/2021/01/01/硬核翻墙/index.html","f74e1341827284e023df7fdbeacc954b"],["/2021/01/02/qq/index.html","6fe8795c00f2134946f924e02646c795"],["/2021/01/03/netch/index.html","a317b191741a017b40495ae3edcea0c6"],["/2021/01/03/waifu2x/index.html","1132c8ef8b0e2d137cb9722af829fe1b"],["/2021/01/04/ads/index.html","e2c4acd4c823a13d0bdfb0feab61fa3e"],["/2021/01/04/games/index.html","67f078470247a9d6ebc1a585dc29acff"],["/2021/01/04/heroku/index.html","4d04f024d446592706c85ff09956d799"],["/2021/01/06/movies/index.html","6b7a8856c5060b331439294d5225228b"],["/2021/01/07/google2020/index.html","c8f56b83c7bc1841e1f20759ec436745"],["/2021/01/07/lucky/index.html","eab8ade0104ea8fb4490046a74eb9648"],["/2021/01/07/spotify/index.html","d7c2d5594523029fa905ff6cfd484adf"],["/2021/01/07/thunder/index.html","55df86f806efabedcff68b9fa538edd3"],["/2021/01/08/adguardhome/index.html","1b7ad3a6a078d8b10c619c9724a35c97"],["/2021/01/10/IBM/index.html","8e2af6db801fe163a5a965bdff36adfe"],["/2021/01/10/potplayer/index.html","8efc3d84db8525a71f4c27a234770e77"],["/2021/01/10/sakuraanime/index.html","aa3bf4a3cd2c6807e25ed8fe5b979441"],["/2021/01/10/美剧星球/index.html","b14fb0c325f78e8e39b7e5240aa8fca9"],["/2021/01/12/telegraph/index.html","6493ecfb4753378191134c43c5da83ac"],["/2021/01/14/comics/index.html","6ca295b95288e3a7e4028294c208037a"],["/2021/01/14/ftp/index.html","3f301fb08a4136cedc4f6f249f85bf5f"],["/2021/01/14/oraclecloud/index.html","f8c47f164d90ba3de0a8a13569084169"],["/2021/01/14/porkbun/index.html","2ac13ec86fd5709b7a3f9d74fc17afa4"],["/2021/01/14/powertoys/index.html","c7c44228c4a238e436fef870264902c9"],["/2021/01/14/taptap/index.html","25657e0d55c61fda1c0c993860525803"],["/2021/01/14/ubuntuvsftp/index.html","92e34837c56f8e47d1b891f0593b789d"],["/2021/01/14/小说/index.html","228305d31f3e8b1d6b3c27e2d025568a"],["/2021/01/15/freeproxies/index.html","eb778f4c4c42a9e94df064df06fcc289"],["/2021/01/15/incaseformat/index.html","0c340193f320c67862808b8965879f9b"],["/2021/01/16/euserv/index.html","0b0be27ea8cfb2940a656f81477ef5ba"],["/2021/01/16/winxray/index.html","07bc6d3eb63b9b15394981b8b47970fe"],["/2021/01/18/qqreadhistory/index.html","9579b4cee0b488a8f936fcd606864a19"],["/2021/01/18/qqrevoke/index.html","ceea545f653b8edcb5ce73b59f999b87"],["/2021/01/19/freevpn/index.html","eda5899664bcee51ca6bac352cbb687e"],["/2021/01/20/browsertrack/index.html","4d0fcbb0de5452e9ecdc4958ec2011ea"],["/2021/01/20/v2ui/index.html","874fa01d7827c32b5b249a773bb2e92d"],["/2021/01/21/failedtoconnect/index.html","64594ec5082938629954b1c302f69ff7"],["/2021/01/21/gitcalendar/index.html","332e35a99983770376c4ed86eb577daf"],["/2021/01/21/markdownformat/index.html","45ce80e29b64bcf83e9a900b83500583"],["/2021/01/21/markdowntable/index.html","ff17e6fa6d07b33491fb93572c0208ae"],["/2021/01/21/vercel/index.html","45e6a03189637f47ffb59253b915da95"],["/2021/01/22/hardware/index.html","f6c235430f0ff9d8b3433e9f0c48e2cf"],["/2021/01/22/muviz/index.html","50b4f557f607088f870aae8ef367180b"],["/2021/01/22/randomapi/index.html","aa88667811780dd432820f6a2add658f"],["/2021/01/22/searchimages/index.html","4d4a2af4cb22e08f4beb2b028a1de186"],["/2021/01/23/RX文件管理器/index.html","17dd338b48ed3cc614a18f34602b4510"],["/2021/01/23/chromeflag/index.html","1bcc4c29b97bf54e6e1d188504be336b"],["/2021/01/23/qttabbar/index.html","6c4eccf91aadcb94d6bd24e7e6841a8e"],["/2021/01/24/githubspeedup/index.html","76e1a9037718851f527b784fcac08bad"],["/2021/01/24/jsdelivr/index.html","7a76d1efb4740ac9c1572a68c98b4227"],["/2021/01/25/note/index.html","83a21914214359dda30824f949d6b08e"],["/2021/01/25/soul/index.html","90853e543a62055477ebeba63ce7c8b6"],["/2021/01/26/herokuxray/index.html","47abf8852071adbccf6c32dafe8e5ac1"],["/2021/01/27/proxypool/index.html","f5c5832ae464231e6685c764926b04da"],["/2021/01/27/tracker/index.html","c05e709f9011fa7adae5c183f84c4c3d"],["/2021/01/30/pandownphp/index.html","8e173bddd27498b206bb5daf8d0a1cb0"],["/2021/01/31/newgroup/index.html","92b607be188c880e9043c6b6c5bce608"],["/2021/02/01/clashlanguage/index.html","c3b6a7950fbb8821edc4176e82fa8420"],["/2021/02/01/encrypt/index.html","753c51eba7cdf5a74553fe8a55f19e93"],["/2021/02/01/footermotion/index.html","771d293e05982a5beb090815c96991bb"],["/2021/02/01/gitter/index.html","ceb664d2d776b966fec5960e8f1cc28a"],["/2021/02/01/pixivtop50/index.html","1e9f28605d72b3657c5f4e437c169e46"],["/2021/02/01/scrollbar/index.html","de07fd5b8be8d21600866e7f990277e0"],["/2021/02/02/clover/index.html","bc926f037fbf5fb64710043acc38092e"],["/2021/02/02/maya/index.html","733556736590fc5b408844231426a2a8"],["/2021/02/02/speedcontroller/index.html","cb79db88f186a25836bfe1761f2978ef"],["/2021/02/02/yesmusicplayer/index.html","438e0b0fc45b90f146871f0d6fd237da"],["/2021/02/03/lenovoonelite/index.html","4f796ef77f21426f655c12bf9221f531"],["/2021/02/03/skipads/index.html","af524cd5e226d1976d131898afec7812"],["/2021/02/04/picseed/index.html","f476fac6b057d17c99ca97e2c606dbf4"],["/2021/02/04/renren/index.html","a9d24bc1ef25dd243ccc488865add172"],["/2021/02/04/serverstress/index.html","8959ed099bf99e96f4b4d090d61672ed"],["/2021/02/04/wikipediazh/index.html","ab19995ba72fd8b87cc9eacbc818cbe7"],["/2021/02/05/googlevoice/index.html","8135a73853f28217cf1fc70b7a43e740"],["/2021/02/06/clashconnection/index.html","8c9f846a18fc791bb5089123ce4f0f39"],["/2021/02/06/gvtransfer/index.html","c7243eaa70994161c9e709fbfe4395aa"],["/2021/02/06/todesk/index.html","a04c9ffa0d7d27a26afe9a428dc35254"],["/2021/02/06/vpnblacklist/index.html","f3ccd9d6626b6f3f32f3c5626f6d34a4"],["/2021/02/07/mklink/index.html","e3e0289037a2bd9ff132a622cc46fc44"],["/2021/02/07/speedtest/index.html","5846a0380ebe430d335a4c44fadf6857"],["/2021/02/07/translate/index.html","f33156e0b89117c743cd6751b32eb063"],["/2021/02/08/ewomail/index.html","4f7de7edf4d84371bbea0cdaf34e7962"],["/2021/02/10/officee5/index.html","024dfaa8acd0a26993957c7611e36a26"],["/2021/02/10/raidrive/index.html","1bfbfc751de477512578a8d4c8982181"],["/2021/02/13/e5sub/index.html","393afa1f7c8abf50c3ee14e8e0a130ab"],["/2021/02/14/screen/index.html","590f50a6e997966870c63f2bbefc8f98"],["/2021/02/15/clashtun/index.html","68b09a0a212d177d97cb53a67b357738"],["/2021/02/15/messageboom/index.html","c5872ea38f2cc2aa8ef045dfabe2e7b9"],["/2021/02/15/oneindex/index.html","9e094077cd4eb6fbb1b833722117eb73"],["/2021/02/16/govsites/index.html","b2c91e0ab89466d7f2dd3253a3725d6d"],["/2021/02/17/hexototypecho/index.html","39c7d565f550741d9b360ef6b45aba91"],["/2021/02/19/fiddler/index.html","338fb15ba528b65ae23adc60bc31b211"],["/404.html","212002f6683856c861b6ba40e678b4c1"],["/archives/2020/11/index.html","60d7d3b03b67f3bc33ba405db2185a13"],["/archives/2020/12/index.html","0102ba50cd7fac37a9f58f8d3b747e70"],["/archives/2020/12/page/2/index.html","c751f60b8a7a13cce9679258453f0b5b"],["/archives/2020/12/page/3/index.html","522a11479834863e9b3c57f1deefcc47"],["/archives/2020/index.html","4662406af79dddfb9a1a645999af374b"],["/archives/2020/page/2/index.html","07c8650b1759bc5c85b0a815b044bdb4"],["/archives/2020/page/3/index.html","0a117e32464e36b558a788a1d236b8f1"],["/archives/2021/01/index.html","3566de8fd6920446908f9c9d092bb958"],["/archives/2021/01/page/2/index.html","050825b0fdafdeac4fe70ce4564a7308"],["/archives/2021/01/page/3/index.html","a727b54e90c61d5722da9a450e2b03c4"],["/archives/2021/01/page/4/index.html","bec2168ca591e8fd4c3f114e757caa98"],["/archives/2021/02/index.html","067250da4ca0e2bc4e5b11d37b52abca"],["/archives/2021/02/page/2/index.html","0df032f7d25dec222eea9a8fb3b37b1c"],["/archives/2021/02/page/3/index.html","84a204b514886428126c5790e3ac73bc"],["/archives/2021/index.html","65b23092628e00470400c62dc7ab8a87"],["/archives/2021/page/2/index.html","eaec97a65d357e381019dc8f01e0d61c"],["/archives/2021/page/3/index.html","9f4b682ec1d3c26470d0ca4a1f622cfe"],["/archives/2021/page/4/index.html","feb2721621100b08af6ccc0b5d7c9f7f"],["/archives/2021/page/5/index.html","787cbf62b7091742fc781f1e4accc5dd"],["/archives/2021/page/6/index.html","99d3e88fb180acb560763b9c80541c31"],["/archives/2021/page/7/index.html","858986f7e3f9f58be5348c44bafcee25"],["/archives/index.html","d7da81132c92680a7acc6ada951ed6ba"],["/archives/page/2/index.html","395f96f9df8f97e489bfd0f10245f0de"],["/archives/page/3/index.html","ddba0850b5e18141362bb184c13264eb"],["/archives/page/4/index.html","e8b0818b8a5292f7d13aaeee00fb7d20"],["/archives/page/5/index.html","b317420aaf184631d321294abd3a18c8"],["/archives/page/6/index.html","69c001249a201a32c862034b207689fa"],["/archives/page/7/index.html","2deaa50d03d9a54ab6651e79ac14d5ab"],["/archives/page/8/index.html","28f79e8df176e31696213fce49d8c6d0"],["/archives/page/9/index.html","6888042130fb155f18dbbd73b8a8f1cd"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","3d86de11c0193e960c94f8a798b68a20"],["/categories/index.html","098da6d693b1f17bff5379867bb6f753"],["/categories/下载/index.html","113f130d031e94ba7b6490af107fec1d"],["/categories/安全/index.html","450694a7e58b1eb99707589d2b91e7bf"],["/categories/建站/index.html","b694dc5323eb6086fdd5444bbf62b1da"],["/categories/杂/index.html","a893968b80b7a53b19a515175d142590"],["/categories/杂/page/2/index.html","3ac34ab759280a731a268b5d329ee661"],["/categories/测评/index.html","6f5c4c91260fce85d1a8cabef0549243"],["/categories/科学上网/index.html","22d8cc94bca9b060ee6b75c2faa93ee5"],["/categories/科学上网/page/2/index.html","c1b0dba49c9de53d34cc957cd4413ee6"],["/categories/编程/index.html","856cbaabbdc62e594ed21d0d8794d564"],["/categories/网站/index.html","115da754a8d60bf27d4536fb3000dbda"],["/categories/网站/page/2/index.html","c411ea3e1c34b0cc30c31e84dad350c1"],["/categories/软件/index.html","03896191e9cda9329eed59f8b50c52d5"],["/categories/软件/page/2/index.html","82cdeeb89ca17323abf998d127978d71"],["/categories/软件/page/3/index.html","c64ccbef8362fd8df5b08a750d928d18"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","31af4dca69168a81a46ccb3de5af6a21"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","20a98512601ad2e9e4f3afe3da1a38c6"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","fe8d3c1065c7b1ab2f3a9dbcee61a2d9"],["/ios/index.html","5940ad598f76eea3ee390f9004c3b3ec"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/2/index.html","dfd9e0e7f8dad53fe99f3558662f14e9"],["/page/3/index.html","d6820dcbbcea00906fbc2184ed8cb829"],["/page/4/index.html","d4c2edd299b4e79519d82f26ede179b2"],["/page/5/index.html","b3991a7a6bf14ee4d26c13d3f373d1e6"],["/page/6/index.html","508f938ff674317817350c529c41893d"],["/page/7/index.html","5fd47632d4e4921ca5a415daac1e7226"],["/page/8/index.html","21ee936efc744ef889d9e41f15186436"],["/page/9/index.html","af2c73d02ec18e7c6bed84cb1ca4730c"],["/payment/index.html","5a5efc9ce977fc1ae042cea1ff1111e7"],["/privacy-policy/index.html","56bd9596a4338365e20169b5b03030e0"],["/rss2.xml","a0a22657b415094b1a274ebf56cfab4a"],["/search.xml","1360acb0f876c50aedf1fd5340ae9938"],["/sitemap.xml","9ccf046145916f5ccd5a7a9894d47df8"],["/sw-register.js","57c3823e5914a9a2bfcdb1b0f620de74"],["/tags/5t/index.html","8f87cb4e26413bd49221522552027cb9"],["/tags/Clover/index.html","af0b1b870e0f094280202d7690a8b21b"],["/tags/E5/index.html","5c1ea43b7345445b9261d077cd2948c0"],["/tags/FTP/index.html","46c0d48f015d065eae0bde76fc47ce8a"],["/tags/GitHub/index.html","2af84635fcad58d89e0438bc59d2fc3a"],["/tags/Heroku/index.html","511004a19ad45e801f2f6837f01a57c0"],["/tags/Hexo/index.html","1e5d0ec6217bbfe93cb66e0164a9c53e"],["/tags/Lenovo/index.html","c97096167bc9b5774df69c24475755e8"],["/tags/Oneindex/index.html","5d1107772ab3d5ef52f221c1e5d82ace"],["/tags/QQ/index.html","fcdf89af581925b98bfbf3d5ffd96ebb"],["/tags/QTTabbar/index.html","11af95d64bc6542e9aaa9ccf3962ded5"],["/tags/RX文件管理器/index.html","379b4f0516e3141a00d168fdbb6d80e9"],["/tags/Todesk/index.html","e69122db44ab21b2933b329ec1aa0e90"],["/tags/Vercel/index.html","daefd583399891ff00dc11221adfacf3"],["/tags/ads/index.html","1b362b98ab4a8a4f2b2f07c798100fe2"],["/tags/api/index.html","d4dbcd5de6279754d1834ec972f361bf"],["/tags/app/index.html","67b09f60ef222ac275f100c5d868f1bf"],["/tags/blacklist/index.html","4f0c9bea4cd43e6c6678eb6bcd413c37"],["/tags/butterfly/index.html","9745827647613ecf76aff921357be058"],["/tags/chrome/index.html","0687cf7adb573455828fabd72f8cca81"],["/tags/clash/index.html","74872a8e79bb32276fc049eec1ced7e4"],["/tags/cloudflare/index.html","659e3d11010b3dd450b47d0bf645f082"],["/tags/cmd/index.html","012d20b7bd0ef922d6ba8d2302e977c6"],["/tags/c盘/index.html","155ff9a1485e2ab2e33f82c0015d7ec9"],["/tags/email/index.html","aa705e3ad48d0a94bbcf4c22e73ce852"],["/tags/ewomail/index.html","d9836406782d71bc9dd9ae0edfc7fb88"],["/tags/fiddler/index.html","ae7a4423774f7a5af985fecbe2229bd2"],["/tags/flags/index.html","802daa4dd3b906fccd146d0a61dcfd04"],["/tags/footer，页脚/index.html","32440e8838b6c63fbfda11f58063d308"],["/tags/galgame/index.html","76bbfe202d896dc55157611a0eb16eba"],["/tags/git/index.html","cf613cbfd01e9dfb1fc478e797679cc8"],["/tags/gitcalendar/index.html","5d53a4ecbd930e82b55341b550763d81"],["/tags/google-voice/index.html","b63da2cb61a8a4b7627c8047a62ff279"],["/tags/gv/index.html","b87f40e7f0b89d830a3ea77786926778"],["/tags/index-1.html","59b0d25257db7bf761f484067a88a2bf"],["/tags/index.html","3975d0945df878ef0a1ef36fe0927026"],["/tags/jsdelivr/index.html","1e759e1d24208a6464f8dbd5b13c0532"],["/tags/linux/index.html","3571a31f96494e4277d042fb44cf061d"],["/tags/markdown/index.html","7c64dcd9929c06bfbd74cdd32b0fa80c"],["/tags/maya/index.html","e2626739c670c1b857039ed2fec44d30"],["/tags/mklink/index.html","a156f4227975ce3e7e3185bdc40e7e73"],["/tags/office-e5/index.html","09385465b79de385d38ce1ca97f3f741"],["/tags/onedrive/index.html","299d5c6e7b66f4f3770ef87be77bc1b5"],["/tags/picGO/index.html","7f78072fe6026d0a80a4f14ef4a21861"],["/tags/pixiv/index.html","84503f03bc60a5b4b6cef4c53771aa38"],["/tags/proxypool/index.html","514ad997347065a271f19dd09f8b30e1"],["/tags/qbitorrent/index.html","2aeca868172ce2d1e9b2cd87a8569f72"],["/tags/raidrive/index.html","02764244f3d49656af81e73f9734bd96"],["/tags/screen/index.html","4f8efd99e343902ad08ed25bf75c1270"],["/tags/speedtest/index.html","fd4c36c0e09d69d707062fbef9d21922"],["/tags/tap/index.html","318ddabb7d6652b9e5e8ff41be11d1bc"],["/tags/top50/index.html","c7001b72ea4bb347fe23ae4c21547c67"],["/tags/tracker/index.html","def92827096ce9d797b0ff66575962d8"],["/tags/translate/index.html","15dfed5a5e70b51d724f633980549fcf"],["/tags/translater/index.html","674e93e1cae54fb464aa3b41aa1ab266"],["/tags/tun/index.html","c7e050ca7cb044d08d38c8db6a2ec3b4"],["/tags/typecho/index.html","6fe5eeca93d1463fc7ed7f29bd0d22b7"],["/tags/v2ray/index.html","4b89842dd2ab1b4cf87fcdf9e2b02dd2"],["/tags/vpn/index.html","68599d9c23dbba412a27b8f81e60f541"],["/tags/vps/index.html","90d369483b66f09134d9e2a9e251768c"],["/tags/windows/index.html","2b9ce71251a5640d5aa468d18bf31173"],["/tags/windows端/index.html","72b3eaf6341465e3f6f2cd37497d1f5a"],["/tags/xray/index.html","547de58b3c9f84a8bebfc46e92ef64bc"],["/tags/下载/index.html","120b7e635496760285ee9387db02c912"],["/tags/不限速/index.html","470df9292c4109eac2a13257794a1e3c"],["/tags/个人网盘/index.html","56261df344c8b1861b91aecaf16b1424"],["/tags/主题/index.html","5f98c5cd9a8cfa04eaa1a0d2e3fb96be"],["/tags/云便签/index.html","43cbcde4ba002d9b76aa327c0be38f01"],["/tags/云盘/index.html","408c36fa7bd667c035ca22d4f248b82a"],["/tags/人人/index.html","83699b361e78e0f57925ece9c8d8cf71"],["/tags/代理/index.html","c9447fcdc74a143bc660c1585494001c"],["/tags/代码/index.html","56ab3cd383ad8d1df3a97f78d3a662e4"],["/tags/优选IP/index.html","5d9c4c7137ff10930c608f8aac5d390b"],["/tags/便签/index.html","ac5365e4357c51548d819d77bed933a6"],["/tags/保号/index.html","899458d02fa4b75b02d084a4f1d97d14"],["/tags/免费/index.html","058e2cb1c07e1970535fe9adc8f65d4b"],["/tags/免费节点/index.html","67f618a830d15459dcf1bc209e946e5f"],["/tags/加密/index.html","78c85e53d089e241b7e8c75ec187bccd"],["/tags/动画/index.html","ac3bc0469a74022fbbd63477fa74adb8"],["/tags/博客/index.html","3b6fa80e99d9c833ae8cb96ca9315aca"],["/tags/历史记录/index.html","fad8adf2b305fae8cdf76b14f63deb42"],["/tags/压力/index.html","60dce76d98cd74245b84642d0bcaa4b7"],["/tags/压缩包/index.html","c2f9b6eb3642ec8e2047357fea03f3dc"],["/tags/反代/index.html","ac96b06aed38c2baaea157fe4a7e1eb8"],["/tags/可视化/index.html","e8bc0ff673bd4048f40d43026cad333d"],["/tags/命令/index.html","a1bd5202516f5e8a413fadc98794ca87"],["/tags/国家/index.html","5579702ce823ccaecace3ed14ec12b29"],["/tags/图床/index.html","863983cc042dd2d9578e9d8b513b00a2"],["/tags/图片/index.html","7d3b17f699bbb18886bc9000939458a2"],["/tags/域名/index.html","a2d62cea5a47409642e80f11d6da7631"],["/tags/多标签/index.html","454d901fd1826f6e5b89fd0529ad8b17"],["/tags/存储/index.html","9b7387951ee491c8e3e93a5fab7fc1e1"],["/tags/安全/index.html","345906f49375d27d81ff64b1159df437"],["/tags/安卓/index.html","3243841e13eee0d3858fdc6662ad9b5f"],["/tags/宝塔/index.html","97380866508112bc11d3aba98b541926"],["/tags/广告/index.html","1c9038fd1e96275df83c3aa3ea9d9604"],["/tags/建站/index.html","eba0e3ae7c08f1fd85dd8bd03fdfb541"],["/tags/影视/index.html","4bd18f30ed90b1c6767ef44e67b1007e"],["/tags/快速启动/index.html","e3bc3d805228487631edba03ed1d83ab"],["/tags/手机/index.html","3ad7561fa742759b7c7c839c6c66cc26"],["/tags/托管/index.html","6b38f13675c273640eb00893b712cf61"],["/tags/抓包/index.html","8d2a0ae31fea361d829434f78c12f13c"],["/tags/抓取/index.html","21b383a7b9a5e917979776596abe1b4d"],["/tags/投屏/index.html","fad10d1e57dde5c31ddfb19ab6c20ecf"],["/tags/拓展功能/index.html","b42c376df6f6dd04c90e9a25f4d25738"],["/tags/挂载/index.html","94638360010d2176aee1d62649bb5b1d"],["/tags/指纹/index.html","1cfa892b905568d2011101909e55dfad"],["/tags/接口/index.html","458f924f96e9722537b02680442f7e3e"],["/tags/提取图片/index.html","250a50bebadab891d10f1ea3b465e69b"],["/tags/插件/index.html","f669e46d60040300d488df02d1ba3a49"],["/tags/搜图/index.html","d36f4efda27d9989eba9fb9d7526b0aa"],["/tags/搭建/index.html","4abba5cbf6534199971403efc3cb9a69"],["/tags/撤回/index.html","3037142505f4d51c038a994e8904b2f8"],["/tags/播放器/index.html","a045f2d03dfd945a46ba70fe1abde554"],["/tags/政府网站/index.html","1d1fd3ddcd7e4392dc3c202f1ebc11eb"],["/tags/效率/index.html","66aed9c9607de51200a758bd71122ffd"],["/tags/日历/index.html","b507cfe1dda54c7f16be425f21327ba3"],["/tags/服务器/index.html","edd98ca5f794bab647f4fe216bf878e2"],["/tags/桌面/index.html","0a1af503dcb9c7d03826363b625bd22a"],["/tags/梯子/index.html","c392b71e56499298515c57f34431fcee"],["/tags/检测工具/index.html","80d23ccb65ae85c0199ef4ba90101699"],["/tags/汉化/index.html","4dd485ec8587ab5b5936aca6b9cf2bff"],["/tags/测压/index.html","1b1cb98e0b32a1ce3cd1046a285c8d2a"],["/tags/测速/index.html","e9873a6083dd7f186944f1acc0d21d80"],["/tags/浏览器/index.html","9909e0dfcc3ad5f5d1a4dcf8b79bda5c"],["/tags/清理/index.html","fa36256161e9f39f197caf79756ac21d"],["/tags/滚动条/index.html","8e010303fff3a18b3ee9f404bfeac044"],["/tags/电影/index.html","87de59c1c3f9b66ea29ac7fb109434fb"],["/tags/电视剧/index.html","424e648d5a5a93285b60ce190a72aaaa"],["/tags/白嫖/index.html","e6a4951539e29b7e7f3937b631a485cc"],["/tags/百度/index.html","58a6e271eb0b60221c08b5fb51243f5a"],["/tags/百度云盘/index.html","77805d6dc5189380961493a9e96f83be"],["/tags/百科/index.html","cf328b52f9836c2e51baa7a49429499a"],["/tags/短信/index.html","eb6438d08010d4e3538a9e98afe54342"],["/tags/硬件/index.html","2c48674abb87594c0dafa495b8d41a2c"],["/tags/科学上网/index.html","2c7e240a86a0d0fbb9c83328bf649d70"],["/tags/空间/index.html","f5b7caad560d69d9fce09aa538ef43a7"],["/tags/笔记/index.html","1f06116bb5bf2d3ea6c8d208baeeafe7"],["/tags/简洁/index.html","5d9578a733b6108995dd00c19ad0b720"],["/tags/简约/index.html","d084c95d292722f1e85f7af4bc59318d"],["/tags/维基/index.html","c505fb4ed54411c0a0c2912daa85c31d"],["/tags/网易云/index.html","1f71bae9cacd06f069b45fd9da96f8a2"],["/tags/网盘/index.html","fbcfd16e9e617160cca04697cb66c9b3"],["/tags/网站/index.html","7b9c1aa6425539482684ce42d8e1d8f0"],["/tags/网络/index.html","81b35247bad1a26d5d8befb122cf1f7b"],["/tags/美化/index.html","60cb40cc83516b39a7f54d136a0124b8"],["/tags/翻墙/index.html","3e14e0f2596ab3b391d8d0ae7d9b33f5"],["/tags/翻译/index.html","266d91074fd96d8612ffd7ee2b1be5c8"],["/tags/翻译器/index.html","b12939199f0891580fc67d4783c05ba9"],["/tags/聊天室/index.html","1668c4a243852126066666e831be1ce1"],["/tags/联想/index.html","8155f019ffad0b594e4e8888a17615ad"],["/tags/节点/index.html","ea7b17091ec7b6b940cc8150e2549805"],["/tags/虚拟手机号/index.html","988aa7ac9bc1b81818d3cac1a6cc221c"],["/tags/补丁/index.html","464e801dc083d4a4559eca50767f120c"],["/tags/视频/index.html","d4a5fdb142849d4f5a44e87ee8b011b8"],["/tags/解析/index.html","2f72c2b3240db2cc9d916d79f1a3b650"],["/tags/订阅链接/index.html","15d06fa4e295ffaff73174bde53a8bd6"],["/tags/记录/index.html","3ff9c906d27dec0dd76343b335147604"],["/tags/识图/index.html","4dfe9bc8f865c26bca8f63fc6b5a2742"],["/tags/语言/index.html","29876fd690f99edac197c70680262ae3"],["/tags/资源管理器/index.html","21442ed8321822cdbbca8fa1b534fafd"],["/tags/转移/index.html","1b516ffbd357fe14519f87ad6a251b19"],["/tags/软件/index.html","11d6fb0f9c9d35e20a5feefeac36d3da"],["/tags/轰炸/index.html","0a7767ae6145fdd96644582e045cbe38"],["/tags/迁移/index.html","85e9d4bc4e3eec8b44a7bf043f2aaa12"],["/tags/远程控制/index.html","f3216202af41a7b7198d1d56d9145140"],["/tags/连接/index.html","c91650a6d477818c1461aa050e13908c"],["/tags/追踪/index.html","4e23495ab135f266e8ac844473424a3d"],["/tags/速度/index.html","df57a4c92eff38feba0aad83b862fb02"],["/tags/邮箱/index.html","0517b272b0070c46f9e8e7f125ef7834"],["/tags/酷炫/index.html","9e4bd0b2db95f3ced16656c810486e2f"],["/tags/钓鱼/index.html","b7d14b5be040382a56ec6a6fbf58171d"],["/tags/镜像/index.html","ad6f36d441f1ffddf634ee8ab93b77ec"],["/tags/随机/index.html","68ca26e3b6730019e0689c8f3050e47e"],["/tags/隐藏/index.html","88cff7cb5978bf13c6fefd8216056512"],["/tags/面板/index.html","71e2c1d7e8fab277a607a5e295de3a0c"],["/tags/音乐/index.html","22558b05fc8e064e11e3673cf388922c"],["/tags/高颜值/index.html","bdb8dd924e462fb376136ee0be9f05fa"],["/tags/魔改/index.html","c0008f15eba7ac7410e5c1f1a8998fc9"],["/tags/黑名单/index.html","c19db2ffa6ce4bbc06dd8198db608589"],["/urls/index.html","5e427c8db0bc8bb04ef413b4bccb7e65"],["/vps/index.html","61e169476e8549e47b94a7d81f596b28"],["/支持/index.html","d4793ff9c7f9757ed359835e6c7f0097"]];
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
