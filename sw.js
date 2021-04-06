/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","061f640ee0f7ef65779bea7e0cc73e9e"],["/2020/11/29/clash-windows/index.html","107a7a3df0f5eaa85201bbdf64e67393"],["/2020/11/30/websites2/index.html","c98b5033e316f5eeaaad5f4462a52db1"],["/2020/12/04/iphone4s/index.html","014d56e386774b306a5c496f8ff88dc7"],["/2020/12/04/onenote/index.html","3959db1a91bbde7fee53d8dd91f3fc06"],["/2020/12/04/wesites1/index.html","91768dc8beba299df421a3ee90fbdc55"],["/2020/12/06/nokia808/index.html","658c0253a3f6d043032f7d76ef2e0342"],["/2020/12/07/ipad1/index.html","a5f144df161bed25c15d07a291ef2609"],["/2020/12/18/freesubscribes/index.html","9672a82d5b95d2adb96d4fcee200c077"],["/2020/12/19/musics/index.html","d0412c3f9e6a4e2402cd6485dffcf2bd"],["/2020/12/19/shadowrocket/index.html","32d850dc39eae6c538811de6a7ac4d63"],["/2020/12/19/v2ray-windows/index.html","614ad448a8fd39d395e8863696b547b4"],["/2020/12/19/v2rayng/index.html","6d947193de75f0712d8a67b3720b79a9"],["/2020/12/20/beoplay/index.html","f4c9df4b12d63b561daf5ea40418528c"],["/2020/12/20/订阅链接转换/index.html","7340a00f8fe1e73eb0c1d8bc127e32ed"],["/2020/12/21/chrome浏览器下载提速/index.html","764ff2ac16a1b7132f65a830e4998f27"],["/2020/12/21/免费128线程并发下载xdown/index.html","f03ec83f8bc87122d07bfe35391ad10e"],["/2020/12/21/免费32线程下载软件ndm/index.html","1954ca30bd15648a1b7ecb460162ff1b"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","74f5989d3a8b3598c63eef0ece137eb3"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","059a914c962f48b5e78915f76d1cfdd8"],["/2020/12/21/广告怎么知道我在想什么/index.html","2593f6c52a4cdabb220d924630937b56"],["/2020/12/21/无名·引子（小说试写）/index.html","27b16ef4dcde26943c010c22cc144be8"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","5ac1de8dd729d502e32790e926a0eb69"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","6b56c15f2a802be4493b078070be172f"],["/2020/12/21/高速轻量下载器aria2/index.html","cd90a6950603df5e82bad0a1d5dabee6"],["/2020/12/22/2020-cee-roo/index.html","1be5bdcd04fa7a4d4d763e6b2d849635"],["/2020/12/22/firefox插件、github、steam富强/index.html","4c290a060c22af4923e1449a9b5a0eba"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","96879732cefdca5590723bd99a4d19df"],["/2020/12/26/python-day-1/index.html","222ec8ec39b1d2813cc9c27c20499f98"],["/2020/12/26/python-day-2/index.html","1c1c53a599aeb3341663227a6d28c4a3"],["/2020/12/26/度盘不限速下载方式一赏/index.html","227879a732c2b81a548f9bdf6c89864b"],["/2020/12/26/添加开机自启软件/index.html","cf30f8490e161055b25cad3e5ccafe9d"],["/2020/12/26/电脑端截图方式一赏/index.html","13b7dde98aa03f5d33987f070694b699"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","afd08c6ffbe0d4aa1da88badfaae5c4c"],["/2020/12/27/最安全的浏览器tor/index.html","edea842b7935f8f49e96c5620fb9ca82"],["/2020/12/27/网易云刷等级和听歌数量/index.html","9ccfd718537aba7497b7e2eb0a558973"],["/2020/12/28/freenom申请免费域名/index.html","f4e0d6931e0933fb4ebaaa9b03941591"],["/2020/12/31/机场/index.html","1e8d1d1ad0cceaf75ab1b6d0e8fe6a59"],["/2021/01/01/M1/index.html","8069169946373acbac3bfbd558e5a79b"],["/2021/01/01/compress/index.html","78ea58db9e8bf041a79facbebf00f0ca"],["/2021/01/01/infinityfree/index.html","450212f71d7bf421bfe9ab35af4e0b82"],["/2021/01/01/硬核翻墙/index.html","9eeb570600cde483d70f26204428dc34"],["/2021/01/02/qq/index.html","2ffcf2bcc344054309048eb3bda258f0"],["/2021/01/03/netch/index.html","d6aa64a147a8449ddb8157bbd7e52f64"],["/2021/01/03/waifu2x/index.html","b13bff0a7924811c14897ad697f934c1"],["/2021/01/04/ads/index.html","6cbe24e841212a3a759109d7804bf95a"],["/2021/01/04/games/index.html","1f3a044a9465d1d80754f1c40e35c7ef"],["/2021/01/04/heroku/index.html","73672050c48c5d365bd02adb2b4c9137"],["/2021/01/06/movies/index.html","9a74a7a03efa097c55d3e98689252a2f"],["/2021/01/07/google2020/index.html","301171d3116268a57b844420e5c1bb07"],["/2021/01/07/lucky/index.html","a7ada731691e72e404c8b96a3ac1b7eb"],["/2021/01/07/spotify/index.html","4e7b0c9405cc19cc48d4bbe0affc4b59"],["/2021/01/07/thunder/index.html","4808713ecf0e0bf4a7e0fa74a3476784"],["/2021/01/08/adguardhome/index.html","2636cb00ba0f291f19dba6300c7055ec"],["/2021/01/10/IBM/index.html","ac7ad813c89525b2a8b60dcf6679ec8b"],["/2021/01/10/potplayer/index.html","1ede276ad9dcc3cef50c7f336c8ba6b1"],["/2021/01/10/sakuraanime/index.html","0e75c86f06a800b853742f53d51bca13"],["/2021/01/10/美剧星球/index.html","27dd88b3c391e673cfe9c7c06d4cbd58"],["/2021/01/12/telegraph/index.html","f4a8cad1256fd43715eed3b61c19b1f0"],["/2021/01/14/comics/index.html","aed632d8c2808e649aff9153f9f79f21"],["/2021/01/14/ftp/index.html","67678e998fbd2f9e35130fdfa96635fb"],["/2021/01/14/oraclecloud/index.html","9ba51c6be38298023ea9d550eb18f484"],["/2021/01/14/porkbun/index.html","8cbea8324536516ff3c92f41e35651a3"],["/2021/01/14/powertoys/index.html","f6dfc36f0072a9a2830feace1767d4e9"],["/2021/01/14/taptap/index.html","b3d491d89d6cac6dde182e162bf722a2"],["/2021/01/14/ubuntuvsftp/index.html","c7cd1ee999568e378168c9bb7fd3e214"],["/2021/01/14/小说/index.html","62ec9bcbfd1e38a79b7b556811a5097e"],["/2021/01/15/freeproxies/index.html","b0339ae18344d7a82e13ecb69800b2ad"],["/2021/01/15/incaseformat/index.html","e24b54a38a54ebd043552ce7df5c7cb7"],["/2021/01/16/euserv/index.html","268c65ac80cbc76e90e9d4647e3a9d62"],["/2021/01/16/winxray/index.html","30ce329d1262f603f907a68747f64816"],["/2021/01/18/qqreadhistory/index.html","5c671e8d999581c1239f095baa5e8172"],["/2021/01/18/qqrevoke/index.html","623d3ad8eb21951f4582cce8b4944f49"],["/2021/01/19/freevpn/index.html","de32840c3a23d638340b77c2d215d43e"],["/2021/01/20/browsertrack/index.html","f44420ab4852008214080ca130d0cbec"],["/2021/01/20/v2ui/index.html","d292444683bebad60d751137636292b6"],["/2021/01/21/failedtoconnect/index.html","030d3bd4ba7e9b47c5591d9a2fcaef01"],["/2021/01/21/gitcalendar/index.html","7b816dfcfaa2e5330e3d5ef9134bc168"],["/2021/01/21/markdownformat/index.html","b8b0f48fa2c1f63c7f15e3e5e933e9d0"],["/2021/01/21/markdowntable/index.html","5ebf85a56a429aacf7210af207d903d8"],["/2021/01/21/vercel/index.html","e72ed87b6b3d1cad4cf2a223d2b6af35"],["/2021/01/22/hardware/index.html","c6eecba15f0495eb5fc60b461f0b3afb"],["/2021/01/22/muviz/index.html","56fdaf9aa57e32899df23d4ef49640ff"],["/2021/01/22/randomapi/index.html","bedfcf784322a9a3983fa28a62db7558"],["/2021/01/22/searchimages/index.html","b77081f4d085fb531273f29cf4f17288"],["/2021/01/23/RX文件管理器/index.html","f0c79e096e39086cfe951688e5632521"],["/2021/01/23/chromeflag/index.html","002b88c48efdf5f768fd0deecbd21a1b"],["/2021/01/23/qttabbar/index.html","fcff58fd736f06c4b7784d3c58fbde48"],["/2021/01/24/githubspeedup/index.html","ad42752d92325ace3dacb1aa5cc29eea"],["/2021/01/24/jsdelivr/index.html","39a828a522bc65e74d3ce04afaf94ae5"],["/2021/01/25/note/index.html","fab70cba59731cd5180a81218fb65ca5"],["/2021/01/25/soul/index.html","fb988e5ed527d5415deb13aaf75c6209"],["/2021/01/26/herokuxray/index.html","091044d69e1fa0b657b6bc38d95563c0"],["/2021/01/27/proxypool/index.html","8eae14977969b7a7ab8aedafd0616e8b"],["/2021/01/27/tracker/index.html","72d51a90497e0835888797b972897ec5"],["/2021/01/30/pandownphp/index.html","2cab4fc5308b8a39dc592f390201d186"],["/2021/01/31/newgroup/index.html","8b016602707fe5a95f5506faf468bd63"],["/2021/02/01/clashlanguage/index.html","b40e860521cec705970beb85d2252de3"],["/2021/02/01/encrypt/index.html","9b751566fdfe387ef0b039ccb9c4acc7"],["/2021/02/01/footermotion/index.html","30a07c38996c23e9c125f7299be166e0"],["/2021/02/01/gitter/index.html","2ec17359f7f28105dca7a54b625dabb8"],["/2021/02/01/pixivtop50/index.html","e64f225df1b69c271afce560f6155783"],["/2021/02/01/scrollbar/index.html","625d084bcecf77a063f922749fcc015e"],["/2021/02/02/clover/index.html","7a2e3e7b8ed02501eeff78a70e0e12cb"],["/2021/02/02/maya/index.html","233e1b220e1d89f6d518f618b0d05a03"],["/2021/02/02/speedcontroller/index.html","2a8610179a4dcd9b1290d426b326714a"],["/2021/02/02/yesmusicplayer/index.html","520f656888afa252976f9c7ba4d7ec6c"],["/2021/02/03/lenovoonelite/index.html","9041b68bdfecc5e438bab23ed3fe45ce"],["/2021/02/03/skipads/index.html","1ea47f9f97e32c66bae5103a5c11f64a"],["/2021/02/04/picseed/index.html","d13f689641688522214c7bb27c0c3c1c"],["/2021/02/04/renren/index.html","cc148b3902e96b23f5e994d94b66b603"],["/2021/02/04/serverstress/index.html","4f6cc98ad6a0986e83398bbf2b10be5c"],["/2021/02/04/wikipediazh/index.html","93fa92515a46218a0848403d8465d114"],["/2021/02/05/googlevoice/index.html","339931fbf51e9cd7fd7db1dd96300e8b"],["/2021/02/06/clashconnection/index.html","32ee30aadf5e2c375d3bf059c13c9ae8"],["/2021/02/06/gvtransfer/index.html","71f5f69c733ec9da350731afc0393d8c"],["/2021/02/06/todesk/index.html","75d5cdd9173b18d7a5ee1ecdbf9b4cb2"],["/2021/02/06/vpnblacklist/index.html","e3d38c057983ccea5d00e13e964a10f7"],["/2021/02/07/mklink/index.html","60a7728715a23e2b2ae892e8f824adfa"],["/2021/02/07/speedtest/index.html","2c2c8bd7ed72877578ef90e234fe4cf4"],["/2021/02/07/translate/index.html","945ee547afd39c01d1549e77ddf7e4ee"],["/2021/02/08/ewomail/index.html","5d3ff65f36784d04a39167d185b2df89"],["/2021/02/10/officee5/index.html","108edab42af81c087a9e5dba0b07922e"],["/2021/02/10/raidrive/index.html","5a5bfb562493d7c1410cd69f78414930"],["/2021/02/13/e5sub/index.html","364c4071779277ca8363c3371e791be6"],["/2021/02/14/screen/index.html","cc4f5128163037ca088469c55f099a99"],["/2021/02/15/clashtun/index.html","11c00050593ec59ef7847a9e78a5fe29"],["/2021/02/15/messageboom/index.html","84c547e199da186c8285ae4e4d975f28"],["/2021/02/15/oneindex/index.html","0ec8cdbcec85894bf102698159215574"],["/2021/02/16/govsites/index.html","241500cd2f6d0b5ff0d682530cc6ed64"],["/2021/02/17/hexototypecho/index.html","5875e5c733bacdb8385fc693e0e58875"],["/2021/02/19/fiddler/index.html","acec3bf984d2fb39b843b2944f6d0245"],["/2021/02/22/potplayerset/index.html","42e1578b2135fa211c0289d1fd30dc41"],["/2021/02/22/studyresource/index.html","3142626fee41429ef810cf147bb60561"],["/2021/02/22/telegram/index.html","34ef1f3e2e9a8e0ce7fa899e2fba297b"],["/2021/02/22/videos/index.html","2d4d4f6f0f3db0f1d96cecb5b1881e1c"],["/2021/02/24/mtproxy/index.html","2c1ed80082eec39aeba606ef3adbb728"],["/2021/03/10/catchcat/index.html","df1892eb5d2daf262452ecb6ecbb2dab"],["/2021/03/10/neteasemusic/index.html","99940f56b33beecd657ca30ae0bc26b5"],["/2021/03/10/surfboard/index.html","f3666a86e4dbdc8490a834fe97e08b14"],["/2021/03/11/vpnandjc/index.html","ae3af11b43e006f0ad1a4aee86dc41f9"],["/2021/03/12/qrcodes/index.html","deb3e25cf2fa7d3e64103054dd8fb02a"],["/2021/03/20/qv2ray/index.html","3a59fb0b33595bf9dccb47c2cfbcd695"],["/2021/03/22/freevps/index.html","b220d59cc1856cf8f98dc52c50c0fd19"],["/2021/03/24/tgstickers/index.html","51e630b17957e5c55ff99e6ebfccb141"],["/2021/03/25/clashx/index.html","e5ba9c6cea31a9a3d9a74637360f0560"],["/2021/03/26/bingwallpaper/index.html","6dcc2b5bb85e008670c420214cbfd64c"],["/2021/04/03/soutu/index.html","7387f12eefcbb47a5f78ac0db18d9aea"],["/2021/04/03/tiyunti/index.html","93fb743950e43301abdc26cb8c6217f8"],["/2021/04/04/btpanel/index.html","c7b36ab58c6d460ac8c4969872ca5016"],["/2021/04/06/atlasos/index.html","53fcdeaf954ed14dc03651b13f30d35c"],["/2021/04/06/cleaner/index.html","21b94008c043dff4ce35bc1d7728ed59"],["/404.html","ef1dcd19ec7070749332aaa09dc3b155"],["/archives/2020/11/index.html","907e13855031ad90ca4cbc7141818689"],["/archives/2020/12/index.html","7a871a1e761e82c02f831e87bfccde56"],["/archives/2020/12/page/2/index.html","f0f1f5a6764b9f182ffd95022a96c357"],["/archives/2020/12/page/3/index.html","9d15c7f780263789e51f5b1158bcb13a"],["/archives/2020/index.html","b737c78f05fedcb58771598285a9259e"],["/archives/2020/page/2/index.html","e78067f8041bd785b8dd0cbb7b9e7dea"],["/archives/2020/page/3/index.html","98c71b9e39c10895ff2d18cfd5069b10"],["/archives/2021/01/index.html","fe841f21ef60fbf0dd8759c4335d77ea"],["/archives/2021/01/page/2/index.html","32a1be5727c2518084151e0b08e0817d"],["/archives/2021/01/page/3/index.html","27c3c33ebe8e0dd77f6c8044fabbb097"],["/archives/2021/01/page/4/index.html","3788d536f88bc92967bbdf93c5709b16"],["/archives/2021/02/index.html","c05224c4645fdd3b8f6e65c8c22bc841"],["/archives/2021/02/page/2/index.html","628eaab4872dd611aa9aea0a88a6771f"],["/archives/2021/02/page/3/index.html","930d81797f20975926d14ee1511662c0"],["/archives/2021/03/index.html","538dd5b0c1228c2c6a18b35bc63a77ca"],["/archives/2021/04/index.html","79c3e1db204bee10645fbe294d754325"],["/archives/2021/index.html","e8c5b1d0f12569daf69ad940f529dfcd"],["/archives/2021/page/2/index.html","da388e0d291a421dc950dbbeaa3f05db"],["/archives/2021/page/3/index.html","e5ed7e7c4dd627a0eed530c91a1bb4a0"],["/archives/2021/page/4/index.html","314038ce2df764dde5e3ee35b01b2709"],["/archives/2021/page/5/index.html","25366eb6a5e8bb5dc50222b9a65054d5"],["/archives/2021/page/6/index.html","27a458d05301e65d77005eb936b79bb3"],["/archives/2021/page/7/index.html","67324999aba5b36d8c577d5623921b71"],["/archives/2021/page/8/index.html","8c12de64bfe96f9a7b82fe33e0d04568"],["/archives/index.html","233cadf554e96814f0e66aa086b3852a"],["/archives/page/10/index.html","11a22cb62dc407693381f83452b53aa5"],["/archives/page/11/index.html","5980f8d25699ba8e5ce1f56763df221c"],["/archives/page/2/index.html","8d5e88544e24b0bcc2f91e84432c9720"],["/archives/page/3/index.html","7c0a9e9492c6390fee1c5ceb1dc2a151"],["/archives/page/4/index.html","69ac438e5609f2d944754c55be3640f6"],["/archives/page/5/index.html","01b5f1cda126a88b1d33ba013381c0b7"],["/archives/page/6/index.html","d0edd48ac2576495ea75fff78c966ea5"],["/archives/page/7/index.html","c30a8a852fdffe513a109e423a2d0814"],["/archives/page/8/index.html","c1b1718c8bea68b8190a0c8058a96427"],["/archives/page/9/index.html","cc7c51e0dfaee0943683921e567b6423"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","00e95eb05aa0480754eacf777ad2cace"],["/categories/index.html","ee3f303441a5fa0c5165bd6503acc0be"],["/categories/下载/index.html","73ddf74e847d7f3c534963abc6963922"],["/categories/安全/index.html","f89da7d00f1a99074f936e64a9936bc7"],["/categories/建站/index.html","880faeafe943e90ab75c73ee013ec71b"],["/categories/机场测评/index.html","d1ab77c530e50315e83cf441f25927bb"],["/categories/杂/index.html","3ec450776f94a4308e13c832b6ef28e8"],["/categories/杂/page/2/index.html","a242d9d960153e0610a98b2fdf4b8561"],["/categories/测评/index.html","c13675fb037bff0b9cf21ec621aceed8"],["/categories/科学上网/index.html","410b29f4850b77e03d8101e58fb6368a"],["/categories/科学上网/page/2/index.html","a5dd95bd0216fd08e8a49b4a946073f1"],["/categories/编程/index.html","dc1e768bbe4b0ec33e6726df6d688180"],["/categories/网站/index.html","8f4fc7907a3721de2c81fccebe229a82"],["/categories/网站/page/2/index.html","a9a2f00c2488daceb963b3156a038eb5"],["/categories/软件/index.html","9c7072cb542b1e22c4d4344194e1748d"],["/categories/软件/page/2/index.html","38636b5e2d83326b3adb29fe51280e7d"],["/categories/软件/page/3/index.html","995bdabfdffc9e4cc9bfc83ffeb762da"],["/categories/软件/page/4/index.html","b399425e94846411c9af15561abb0ef8"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","be12d7ab3e838db8be3164770d16e41c"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","ed03463d43477c759dedd5b9d0791169"],["/ios/index.html","110d022ee89657164fb1352c967e2233"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","f44a33ef77a65182457c69e10c3ba5da"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","8c65c608f2b7955111aedb0132157a0e"],["/page/11/index.html","743b2de48e3c4cfa7927622bf98c33d3"],["/page/2/index.html","47dc874f325b0e093fb3258fe91833df"],["/page/3/index.html","409c700e3f5f432594541f2d15022fdc"],["/page/4/index.html","1df19d7b4f21e6af19faf32b443329a2"],["/page/5/index.html","bc921d59e2d661c82786aa437a56df16"],["/page/6/index.html","5018f0c8aca29f066f47aadbf25594a8"],["/page/7/index.html","4ccbd6ad76d9560e9810b8e2b406cc5e"],["/page/8/index.html","e574bc3e7a89324697919466c84fd223"],["/page/9/index.html","c2a642ba76a96d1eaa4cb31c72b8518e"],["/payment/index.html","5636c42e9431ded9ea7b07ac222fc787"],["/privacy-policy/index.html","3a90d03bb98b19ffaf4c5d70b775ea43"],["/rss2.xml","64becf79c56bb78f4604d80106068073"],["/search.xml","82a92acfe8555c57e94100c1a1e873e0"],["/sitemap.xml","b9d1d39c9336094359cf33ed97289bc7"],["/sw-register.js","4cebaf34b93d87c596db49d0d1afafcc"],["/tags/5t/index.html","a75abdcff48e2a64a37fafcae325ea70"],["/tags/Bing/index.html","6b1d881cef93cf71b61b32e4d4e260c2"],["/tags/Clash/index.html","0c7db9f956a3409d9c356c56c858388d"],["/tags/Clover/index.html","fbef9c4d989bfecad052ca9ba70bc079"],["/tags/E5/index.html","93fee30086096667b034f456d4559844"],["/tags/FTP/index.html","1c8b1d0d6db41713bad19e2b875823ea"],["/tags/GitHub/index.html","db71dc6d56f02cd9372bd378ecf7ffef"],["/tags/Heroku/index.html","a2915243d14898baacb313c0fe8f93f7"],["/tags/Hexo/index.html","b51c2ec506740d0bab1c0926cd63a6a3"],["/tags/Lenovo/index.html","697d8fcaa79d58feab0cfaa2ffc32285"],["/tags/Oneindex/index.html","a702a98f7af5dc92218de765ba39080c"],["/tags/QQ/index.html","7e586435833f62cb1b5fd18d3c28f74a"],["/tags/QTTabbar/index.html","9201520e0e9c63b97b173e63a0e7b40c"],["/tags/RX文件管理器/index.html","6bb016cf8ced870251a56cd22ae632b7"],["/tags/Todesk/index.html","95fe534e1383641386c948a84f942b38"],["/tags/Vercel/index.html","f8a42811e8558bea8cdc9b13d2db3d7a"],["/tags/ads/index.html","6132510b33432c9bb8c0c31cfef8f95f"],["/tags/api/index.html","96dbbe92e050841fee96ffd74d73526f"],["/tags/app/index.html","74769c09473e1116cf94735e65c363f6"],["/tags/atlas-os/index.html","fda82da95736674d1ef1136d45741cce"],["/tags/blacklist/index.html","7764200f4588aa6f3f107ab6b9aeefed"],["/tags/butterfly/index.html","7fdd6dc47b1a08ff0e440af403b0aae3"],["/tags/chrome/index.html","09639a18923e871eb8559a073b64c430"],["/tags/clashx/index.html","19b5c479e256d08d9d1a03b0c45cbac4"],["/tags/cloudflare/index.html","d77c5ec61b562ba385ed1762e14e5da1"],["/tags/cmd/index.html","fd224b833c58bf299e40bda012f7ca19"],["/tags/c盘/index.html","25cd9bd6a58f145b51d66068df0046f5"],["/tags/email/index.html","2f3b2c3a38ab5ae034593d555e039ad0"],["/tags/ewomail/index.html","89fd42cb65566bd4ba65c7dadca41d88"],["/tags/fiddler/index.html","b356d62574dacb8a000f72c819753a44"],["/tags/flags/index.html","04e57f1496d5a15047ed70d4d193a0ab"],["/tags/footer，页脚/index.html","891f1fbbd1dae1f421377f1650c564b7"],["/tags/galgame/index.html","be8e2911aa46be1b046c0b59c4ef36fd"],["/tags/git/index.html","845ed0b0b133dadd996add1ab4cc1a11"],["/tags/gitcalendar/index.html","0edae17083a3203f7837d7c36a8ac290"],["/tags/google-voice/index.html","e4b29a2a28d09b79138c319705f3f1f5"],["/tags/gv/index.html","9e834ce72c7d31e85bb943157540dc8b"],["/tags/html/index.html","ed55bdf5ded76bbbc4826a43a20f4445"],["/tags/index-1.html","e70c1a7cb248472cfea4f3f6a49e007d"],["/tags/index.html","782f4f09a3ea69f5a772db387e90077d"],["/tags/js/index.html","497deeab917fa2fe732f1b1758be46d1"],["/tags/jsdelivr/index.html","b1d539776754e9b2cb346bffbd101ceb"],["/tags/linux/index.html","0739824a61e269a58e072350c9ce22b4"],["/tags/macos/index.html","27e42bc1fa5d71221bd8248c2a363d73"],["/tags/madVR/index.html","4970d9be17b2f789b353137158cfd6e8"],["/tags/markdown/index.html","a75b227d3213ca9e32ad9879c66bd3be"],["/tags/maya/index.html","2f172b1ed20f8da408a5c9f345cd5368"],["/tags/mklink/index.html","1940ee7096a5d17bebca4667fc4d8259"],["/tags/office-e5/index.html","1a67b151ab1ac84ba1e258b11d94be27"],["/tags/onedrive/index.html","5e9b33e2c3648025aed629080fbeeab4"],["/tags/picGO/index.html","4cfb77b6dcd258f249fe789f306d5e7a"],["/tags/pixiv/index.html","51e0d087fb980714f8bdb05dac6f24fa"],["/tags/potplayer/index.html","f668763749ea5c4e56660a118a40eea4"],["/tags/proxypool/index.html","8aec15078a740c2d9007bab421aeee66"],["/tags/qbitorrent/index.html","a78d44f26349225cfbbf2251b19ba9ad"],["/tags/raidrive/index.html","d682a6b91294fcaa5f3053c573899e33"],["/tags/screen/index.html","04182359a8c6d22127720763ee410b25"],["/tags/speedtest/index.html","455dfb1a23c9e30467687141a69e4647"],["/tags/ss/index.html","87709a43d6de781496b0eed26b36367b"],["/tags/ssr/index.html","911beade4f5740101365ff42a90281d7"],["/tags/stickers/index.html","a35a34548796bd99430e3988f0d3e13d"],["/tags/surfboard/index.html","6fce7344df04b7cda9de8a691c8cf6a6"],["/tags/tap/index.html","498a1e4abbd88cf9845a9d482b06ecb9"],["/tags/telegram/index.html","95876ab4b1c12bc3328b51b7d449bdf4"],["/tags/telegram代理/index.html","9f480dbf8c4bd207bdcfb84dac887e2a"],["/tags/tg/index.html","64634bf93267cb2dafa596391a72d628"],["/tags/tg代理/index.html","a1c4a1215c3a198203305670b0f8e2b7"],["/tags/top50/index.html","4c86d764580e3b56dd72850b6783d5cd"],["/tags/tracker/index.html","036caac846f7c12f1240529c6f107b40"],["/tags/translate/index.html","af6397f6954f368c9c45937429b81cf0"],["/tags/translater/index.html","15023c5df952f8f22d34c71e100799ad"],["/tags/tun/index.html","13efb450867abb6e944e81aea1cf8f43"],["/tags/typecho/index.html","bc69166be33b30b491cf8c2cebf1c0db"],["/tags/v2ray/index.html","1fc247a4f4703d3ceac4b4b90a6c0712"],["/tags/vpn/index.html","306581942a5bc91764f4e26d506f96f4"],["/tags/vps/index.html","6645090ebb5131af043df29ab79f1249"],["/tags/wallpaper/index.html","34e437e857584c825c4c10f0e67d461c"],["/tags/windows/index.html","535042f8d149a562fd1ebe98921b91f8"],["/tags/windows端/index.html","f39900c363f4e9bd0c32f5c131fe883c"],["/tags/xray/index.html","5dd6ec72893611851fdc80e858baae6b"],["/tags/yandex/index.html","44757d769f44ad9c70e3f76777c55b7e"],["/tags/下载/index.html","964f726020757833748de3ba68b7725a"],["/tags/不限速/index.html","ff1bbe7f71c9bea044f1487c32aad21f"],["/tags/个人网盘/index.html","4c70c4b063cc18b5edddf61152d6bbeb"],["/tags/主题/index.html","837833c5395f1ae60ac69589fa76e14a"],["/tags/二维码/index.html","d7989d241e31df58240c28737c0b8f0c"],["/tags/云便签/index.html","56f51d608c2247e3d0c3d15e05a530bd"],["/tags/云盘/index.html","7268d389eeb74a6a8fcf5c9f122c6b0c"],["/tags/人人/index.html","ba753874823f198d7450f8a8215649a6"],["/tags/代理/index.html","2ee35a5eabb29cc7f912662d27afbfaf"],["/tags/代码/index.html","9af1cea21c31537a13113f21d0f176af"],["/tags/优选IP/index.html","d85b2eb307e9d0f8b80118775a6610ba"],["/tags/便签/index.html","4208eab29adf13783845bc9304870ae3"],["/tags/保号/index.html","ec5b73d397630d1b180bebebb8ae67dc"],["/tags/免费/index.html","2b8dfb7ed03cbebc65cd5614e7011f8e"],["/tags/免费节点/index.html","4874ae14124cdcb5e434b8fe9abc9adb"],["/tags/冷门节点/index.html","7ea63e018d9fbdd74c2a7db62af8adb8"],["/tags/删库塔/index.html","9fed5b16413eaf3fcce32880ecb38dfa"],["/tags/加密/index.html","79803dc24b985a7c2a2a7e353ab4076c"],["/tags/动画/index.html","edcdb626fb5ff639db391260fddabb89"],["/tags/博客/index.html","f75f63d71d080b43051199c9ff89d89f"],["/tags/卸载/index.html","629439c26f244a1a590d5d8c3d84a977"],["/tags/历史记录/index.html","16757d84660cc706ae8556f7dd2f5cac"],["/tags/压力/index.html","24f4717331a129dce14560b08df4acb7"],["/tags/压缩包/index.html","65d5043510b9e469030b4f75e28d0c63"],["/tags/反代/index.html","6e1b6bf3360db7bc5832485af55d08eb"],["/tags/可视化/index.html","2496b3152ce134b1e9afb5cc05fe864a"],["/tags/命令/index.html","147a24c17f32edccb7c072375e32a156"],["/tags/国家/index.html","66353296a87315aac08b79ba56899802"],["/tags/图床/index.html","3526d24eff1ce1814700a66633b341db"],["/tags/图片/index.html","0939f435f922e6d93c208a857a0fb685"],["/tags/域名/index.html","74e1594ae1bbff32413cf7c78b276605"],["/tags/壁纸/index.html","91a61bc5bd44a3fb5c9acfc8ebcb8b63"],["/tags/多标签/index.html","9031857093bd8c58735d2d14a8894d27"],["/tags/奈飞/index.html","1625ba9063a005eaadf36a249acf65e3"],["/tags/存储/index.html","bcd4901b4cc33001bac4b1ba8f3d5f23"],["/tags/学习/index.html","b7c2f356ca1fef26bad762a995a652b7"],["/tags/安全/index.html","d90601971aa71195dcc94eb8afe09ddc"],["/tags/安卓/index.html","1327a5f0daa7cba7839f63bd3ad835ef"],["/tags/宝塔/index.html","78394545aba6eecb48b9611e5eb2db80"],["/tags/小游戏/index.html","83d71f8b74ab21ea876a6dc578d08d34"],["/tags/广告/index.html","025a19683d4fc3d0b74aaf2dea4feb0f"],["/tags/建站/index.html","a8bfe5d19f7c1db1a11f9b5b5d49e33b"],["/tags/影视/index.html","ffaa446414010b30004dd14c7444d865"],["/tags/微信/index.html","a77f5d43c745d989bdbdcd7d94835134"],["/tags/快速启动/index.html","73daf013f0f24177525117d34c5d224c"],["/tags/手机/index.html","b887a6dce3aaf32e604e7094e2d27b7a"],["/tags/托管/index.html","4351d9585d283e3ee87fd4f525fc03d0"],["/tags/抓包/index.html","0dff5d916f25ae6e61d12bfe6a0b951c"],["/tags/抓取/index.html","39870694f1cfc5d2f40afc848092aabc"],["/tags/投屏/index.html","ad8804bfd210c97a684b9716ac82fa3f"],["/tags/拓展功能/index.html","14bbde3d07e771a4011aae503af90bb7"],["/tags/挂载/index.html","810835f8b8a31282216b010fb15390be"],["/tags/指纹/index.html","1f8692a88d58f9490fa64abbb17a8538"],["/tags/接口/index.html","3f1f8c8e52a28cde217ceb11fee26f7c"],["/tags/提取图片/index.html","98d2ee8b926a15bf17563335049d262b"],["/tags/插件/index.html","caca9089b033390af98a80c340ad224c"],["/tags/搜图/index.html","d693d23cfb3846c7960ffa1c1dae31ab"],["/tags/搭建/index.html","39422304e7358e081b51ed1c6ad5aaeb"],["/tags/撤回/index.html","66289a9c166e378a3862f16fa0b2bb24"],["/tags/播放器/index.html","6424f65c3442f604a72a254aaaccb8d6"],["/tags/支付宝/index.html","40010bce8637fa01bef7610966a254f9"],["/tags/政府网站/index.html","01195636ea124977d4504123647aec8c"],["/tags/效率/index.html","2f3962100c40eebbe1114a07dbe68142"],["/tags/日历/index.html","5348fb325f674fc1fa0c83f7ea109d65"],["/tags/服务器/index.html","1c53e5f63d6ac25b2940b5b6821c83bc"],["/tags/机场/index.html","954982ad4db609dec0c31d045878bac5"],["/tags/查重/index.html","87aaee12878abb46f53dd008e81849a7"],["/tags/桌面/index.html","11fa824ec94c4d38b0b78cc4977abf22"],["/tags/梯子/index.html","37591e9d97f4a23307ab0e7d95f1499c"],["/tags/检测工具/index.html","7b2b5e499dcf2e4f5c67498f5becb7ce"],["/tags/汉化/index.html","593507accd40a8d49c9fb7fa274790a6"],["/tags/测压/index.html","50d89f40e33cd40cb8bce15d4884c060"],["/tags/测速/index.html","6e7a789b685045b13543204f9c222d37"],["/tags/浏览器/index.html","845c522e9366b9d5ff02ec6afce02cee"],["/tags/清理/index.html","aa3667c0673016c01a511a4ff7c60495"],["/tags/滚动条/index.html","1906a488af4db6141b8d0a2459165b41"],["/tags/灰色歌曲/index.html","08ae4d17af0ebcd5cdbb095969252327"],["/tags/电影/index.html","5f57a52b90f9cd61aff1e0ea30923e0b"],["/tags/电脑/index.html","4022f377cb64bd8305f6c12e4f4e5e00"],["/tags/电视剧/index.html","0e514eba31b06d9fec13847b5fa70fb3"],["/tags/白嫖/index.html","897c9c7c017bac74f3942fd6a1febde5"],["/tags/百度/index.html","27e7678bbef3ce5664a9085361067211"],["/tags/百度云盘/index.html","dfc9b015a5ac7982bfd62a50caa30941"],["/tags/百科/index.html","e652717c0a433f29362753f824cf356e"],["/tags/短信/index.html","9c26767c9c2a356c92cf55462aa845a8"],["/tags/硬件/index.html","d3c6c75af63c554df2cbd4352143dfd1"],["/tags/科学上网/index.html","d7ba81386cd52f68876289afda7071d8"],["/tags/空间/index.html","14614275464d2b4f837d8abf6bc9a457"],["/tags/笔记/index.html","95c9a65d8de167c625e8d1a990877dd9"],["/tags/简洁/index.html","d341a81b4b3d724343590c422255c613"],["/tags/简约/index.html","22ea46b6945e7e3e956b5dd520dcb27d"],["/tags/维基/index.html","3c20acf76dd78253aa574b810b4925ff"],["/tags/网易云/index.html","9a9f33e89d912eafeab1bbc0de047fd7"],["/tags/网盘/index.html","c9511951e6bb4a565c69e7fea63bb15e"],["/tags/网站/index.html","12228aba72a29c45d0dc4c8d6e6039fd"],["/tags/网络/index.html","8946a2bbb9ddd3d06ede80ed30d9f3e6"],["/tags/美化/index.html","b77d960cbbad96bff8904066b4719cf9"],["/tags/翻墙/index.html","bb25b711b95812a61dae08041b6550ec"],["/tags/翻译/index.html","9f824f6afb8479c275d2000a00d9d36b"],["/tags/翻译器/index.html","205aca56056dd26b7ca1569a5c7383a9"],["/tags/聊天/index.html","a6f0cc6bb4962ab84da065fba7e731a8"],["/tags/聊天室/index.html","58d255bf0bdc0fcef94273bde10fefa8"],["/tags/联想/index.html","8c628b9d2e59906d4a00dcf5d22a265f"],["/tags/节点/index.html","c1d6cdb9425e93a5472857e8c7eb23e5"],["/tags/虚拟手机号/index.html","9912137dc4f113c512f8cac3f0dedbcd"],["/tags/补丁/index.html","432ddd3383f3b75f0cfe72a2507b7cd1"],["/tags/表情包/index.html","68eece204b71f97efbf4b145d3bfe295"],["/tags/视频/index.html","09793d2241b1c0183e2d4981f70639da"],["/tags/解析/index.html","24c3660e9b12aa2e5d73b5d5f59b6876"],["/tags/订阅链接/index.html","81040201d7f740752716408016f8f469"],["/tags/记录/index.html","3ad23e1c706c7962ce650e85051916e7"],["/tags/识图/index.html","7710b91519e5f4839e6b7cd932318a90"],["/tags/语言/index.html","dc5e0c38680fcce80dc0a417eb4b8afa"],["/tags/资源/index.html","0150606142c6191f9e75b75a522f5401"],["/tags/资源管理器/index.html","aa4a2d4bc8c6a1aa40f479a2820ac393"],["/tags/转移/index.html","bae1c977b25d964d79dd29b021ca8e6d"],["/tags/软件/index.html","c3dceed9bde026a614b3ebb1b51f9093"],["/tags/轰炸/index.html","61f986b48e5aec98337ec09c64b2a640"],["/tags/迁移/index.html","8ed92e0157d69da35a75a4ab415bb8ec"],["/tags/远程控制/index.html","2d1e08ebe07b6f8b125ee31b4c1ec645"],["/tags/连接/index.html","84d58bff74299778e92fb1884ec24f60"],["/tags/追踪/index.html","450ffaa91ecf2f1da42a91ca64384aeb"],["/tags/速度/index.html","01b42faa4e290ab6cea137aa5aba78c5"],["/tags/邮箱/index.html","81b3cb84cc22ff958db74a84db4402b9"],["/tags/酷炫/index.html","6a59f4088fbe7e66ca25531350f1c3a0"],["/tags/钓鱼/index.html","752924d46c28d1003a92e4a990e8e0c8"],["/tags/镜像/index.html","bf75bb45f3a1c5629978f6067dc1985b"],["/tags/随机/index.html","35fc58f18de653a0f959e3c041a5dec0"],["/tags/隐藏/index.html","d98f3f1fa8bdc56364294ff50f5000d9"],["/tags/面板/index.html","ed949b37dc8b7c6a9b58ee684811857c"],["/tags/音乐/index.html","b86002eb4de3695cc95687fce3bbfdc9"],["/tags/高颜值/index.html","12fb8ffe7ba1f87b4ff67107b8231196"],["/tags/魔改/index.html","e823f4dfe1646b27415986df2ee7ffd0"],["/tags/黑名单/index.html","dde67dd1667bc13b28ff332f811f2bf5"],["/urls/index.html","fcbee374783dbd0894c59672ccb75338"],["/vps/index.html","34d23231ff4ca20c1ec58f3d94c1a0a3"],["/支持/index.html","7c6fcf3e7d50576825dc580082185b37"]];
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
