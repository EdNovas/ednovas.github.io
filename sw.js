/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","33219ff24e31aa05d7bc488ac60086ce"],["/2020/11/29/clash-windows/index.html","72a05bea20fd86cfdc302b8906ff6e36"],["/2020/11/30/websites2/index.html","02a259eab012b8637f9e411d0131bf66"],["/2020/12/04/iphone4s/index.html","1e9d549ba37b3e5376ba1f6be815e700"],["/2020/12/04/onenote/index.html","cd3126e42b0055eae752f456cde0b5f9"],["/2020/12/04/wesites1/index.html","ea611efed8ad25e51dd037ef834e28bf"],["/2020/12/06/nokia808/index.html","87920df7fa97366541566723c70333dc"],["/2020/12/07/ipad1/index.html","638e5a6ec2eee47a0842396bdcde088b"],["/2020/12/18/freesubscribes/index.html","1b6ffcf758c3cbd510011960307f3f05"],["/2020/12/19/musics/index.html","c773be483fe9105ff547be16b07a57da"],["/2020/12/19/shadowrocket/index.html","875abbbcdd0efd66079b96a3664f7b1c"],["/2020/12/19/v2ray-windows/index.html","572ec4d9cc31d81494366b7c2d879016"],["/2020/12/19/v2rayng/index.html","30a5fc86454db81bf4fa80979a09d6b3"],["/2020/12/20/beoplay/index.html","f3477496f11f99cad1790f3b764a2198"],["/2020/12/20/订阅链接转换/index.html","1ecf27ef60f2b8c6b4735ab017990d54"],["/2020/12/21/chrome浏览器下载提速/index.html","72d006dfd2f34027eb36fb6d70816761"],["/2020/12/21/免费128线程并发下载xdown/index.html","b3e0a2d394667e4928137d4000a5653e"],["/2020/12/21/免费32线程下载软件ndm/index.html","d33dbc0ac81289b1ed75ab99026963a7"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","86dc664d699b2dd2a699aafb5dca5188"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","4e64e134fc6013fc8709dd73c9d3d626"],["/2020/12/21/广告怎么知道我在想什么/index.html","2afdcfdc9cbc2932c3ddff494a0d4562"],["/2020/12/21/无名·引子（小说试写）/index.html","9d525d94bd9568a8ac171b0fc8de44b3"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","65e277860676c5fc4b1c9c38dca41a64"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","541d47fa19c5755174e95368c1631cac"],["/2020/12/21/高速轻量下载器aria2/index.html","a5d88555425334b6f0e9737b9a63eebf"],["/2020/12/22/2020-cee-roo/index.html","2b490acce531c4be2b319a9cfc2bad2f"],["/2020/12/22/firefox插件、github、steam富强/index.html","6339fb6f700042617321429fbf9a6e28"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","aa298ca63dee4a3df7c5aa83a4b2c993"],["/2020/12/26/python-day-1/index.html","c3c8f0c008db6fa6792442326a0633fe"],["/2020/12/26/python-day-2/index.html","0f2eb2f1e9b1f745c314df54b915a981"],["/2020/12/26/度盘不限速下载方式一赏/index.html","76f4d25476289b1650787dcc86477369"],["/2020/12/26/添加开机自启软件/index.html","b9f2ca960e321d954c38b5c6d6642533"],["/2020/12/26/电脑端截图方式一赏/index.html","237cfe2875cf663821af08267eb34846"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","028822b0f38f1ae0fe6dcc65fec3097b"],["/2020/12/27/最安全的浏览器tor/index.html","a0618f6b49809ddc2251e8fd83fff479"],["/2020/12/27/网易云刷等级和听歌数量/index.html","5e897c5e889abde97c92022d8d34ea8d"],["/2020/12/28/freenom申请免费域名/index.html","c911564ba28b0569f34cda470ef119d1"],["/2020/12/31/机场/index.html","9a7997f9828a08b670eca6715dafdafd"],["/2021/01/01/M1/index.html","b9ab7e9e77bed067f7d2260d00c42300"],["/2021/01/01/compress/index.html","86111d70faf99b9b2a209aceea28c812"],["/2021/01/01/infinityfree/index.html","6946255044ce9d5219a4c6ec49133f53"],["/2021/01/01/硬核翻墙/index.html","ad55da91c60618a6f92b6a78036b5238"],["/2021/01/02/qq/index.html","ceae0bfdf3deb6ff56ec3382edef7053"],["/2021/01/03/netch/index.html","42dbaf63c6ece493bf232e71e3a073c2"],["/2021/01/03/waifu2x/index.html","10e89e4351c32a3348d99378bf294f4a"],["/2021/01/04/ads/index.html","e762136390ba363d30f62d1c465aeefb"],["/2021/01/04/games/index.html","9b39fde7fa30620e51c5052b62afa275"],["/2021/01/04/heroku/index.html","2555f781d09b816334ac11ddc51a4d4a"],["/2021/01/06/movies/index.html","5f3dbdf52d18ff99aa853f3bce2e8012"],["/2021/01/07/google2020/index.html","f2e1b031f3b5b0a24c2d667789e7d1a6"],["/2021/01/07/lucky/index.html","8657fdb078212f5660e869462488a3d8"],["/2021/01/07/spotify/index.html","6120401c5449ca3e2407895ae8fe9348"],["/2021/01/07/thunder/index.html","59468cbc92dff6575a125ffac2485275"],["/2021/01/08/adguardhome/index.html","ef2635896710b73c76c1bc17ffb362ae"],["/2021/01/10/IBM/index.html","0b2c1c28337a032cf7657c6e6cbfb45a"],["/2021/01/10/potplayer/index.html","d15309d52b56637fd1521ead045b98ea"],["/2021/01/10/sakuraanime/index.html","ecb323e6bbd5411b825a3771ae161bf3"],["/2021/01/10/美剧星球/index.html","9d68ee2d0faa7c57d1d2a21ad7455b9f"],["/2021/01/12/telegraph/index.html","71586bcbf36eb72ade905c09bd38090a"],["/2021/01/14/comics/index.html","cf8ae92343f0e8ae382e888ff9c47a7d"],["/2021/01/14/ftp/index.html","c98027bacd9e354fa1eb439e8de0854a"],["/2021/01/14/oraclecloud/index.html","6fe1c5fbdaad9f5816af066d10a98889"],["/2021/01/14/porkbun/index.html","f27021cd79da1682f409023729dd659d"],["/2021/01/14/powertoys/index.html","0646ebac64c18d406649be9dfc82a934"],["/2021/01/14/taptap/index.html","23a851480a31a475016063d7bef91988"],["/2021/01/14/ubuntuvsftp/index.html","4d38084917f89a3dfca1909c388a5bc2"],["/2021/01/14/小说/index.html","e3112ce63dfd37c132f766a26e9adf62"],["/2021/01/15/freeproxies/index.html","46db5e811506b51f81c41814eadf1870"],["/2021/01/15/incaseformat/index.html","5094830a310499a7989e977ce8e200c1"],["/2021/01/16/euserv/index.html","b4b507d2f664541bec8cefd13d7c4220"],["/2021/01/16/winxray/index.html","26d824e9c2d6f9f504d9239bb3c8d1f2"],["/2021/01/18/qqreadhistory/index.html","b12956167a33907abb76c8582808ce19"],["/2021/01/18/qqrevoke/index.html","a1bf45eef2477d31b5ec7608ac691842"],["/2021/01/19/freevpn/index.html","5bd1542063b6b289cda88f7e59fffbf6"],["/2021/01/20/browsertrack/index.html","12edfcb4c495c0fcf654ec63fb94d278"],["/2021/01/20/v2ui/index.html","e1341f6583a3692e2353e49dce9038fc"],["/2021/01/21/failedtoconnect/index.html","0f47deea2b51cb27d6694b7a59e35eff"],["/2021/01/21/gitcalendar/index.html","67c5b7b3cfd8159b6e9016d72966e1da"],["/2021/01/21/markdownformat/index.html","66a64612f373fd6e5d41f949fc7ee96d"],["/2021/01/21/markdowntable/index.html","7caa33fbeb8eb9d0a505c744fbc35fb8"],["/2021/01/21/vercel/index.html","7fb74d08791c233279a7a0d1d3289b34"],["/2021/01/22/hardware/index.html","11368c2c94e8fc54bd65f9a205e07a47"],["/2021/01/22/muviz/index.html","938d6751f1b9220a23fb4209282b9fe1"],["/2021/01/22/randomapi/index.html","3eb4e528364de4f93a37a4c76d92d26d"],["/2021/01/22/searchimages/index.html","a665998f9ef99971bf2dcf8bb7045334"],["/2021/01/23/RX文件管理器/index.html","e8b60062b13c1d91eb94d6d97fd784e1"],["/2021/01/23/chromeflag/index.html","e4a8448048729b53585f2eabbc0fd52b"],["/2021/01/23/qttabbar/index.html","67549146a32760498b5962fbcd549fae"],["/2021/01/24/githubspeedup/index.html","9c70274170eb04b51a63739e11a47c57"],["/2021/01/24/jsdelivr/index.html","657684dcf5844e1210d6aead6598ecae"],["/2021/01/25/note/index.html","75574d6224af4e50455b1a2f90655244"],["/2021/01/25/soul/index.html","397f0b62d46fb7a6660e9697d242a5ce"],["/2021/01/26/herokuxray/index.html","7c35971ef71d2a5b54a9b39899bc16be"],["/2021/01/27/proxypool/index.html","bd501d6e27f2788ff98574cf9333446a"],["/2021/01/27/tracker/index.html","2fa586faac0cab55b67dee90f5c0ff05"],["/2021/01/30/pandownphp/index.html","86aa399fefd9203b030e4b821ed95b66"],["/2021/01/31/newgroup/index.html","eafaaa49737fab3907f4f6414e3a7f89"],["/2021/02/01/clashlanguage/index.html","e429b00dc1ee2d2b3382d87b5f9493a8"],["/2021/02/01/encrypt/index.html","f46db268e8f84659a682a2ad343a5596"],["/2021/02/01/footermotion/index.html","2dc1431f03821973b2f0676f6c81fdeb"],["/2021/02/01/gitter/index.html","ceb424365e25e418ab637726cc9d100d"],["/2021/02/01/pixivtop50/index.html","f87da5e3833699cc26a62129e03c95fb"],["/2021/02/01/scrollbar/index.html","6ac1d24a267a89d6280418808c1ce59a"],["/2021/02/02/clover/index.html","1bd324a76921e13232b700957be8e4ec"],["/2021/02/02/maya/index.html","9d003702cb6af662fb52e33e2a8f66bb"],["/2021/02/02/speedcontroller/index.html","0ed47c372d35b79a6d60de551667ecc3"],["/2021/02/02/yesmusicplayer/index.html","aa4ee8a13b1cab510f0ee32e3385bab3"],["/2021/02/03/lenovoonelite/index.html","5d6633ae238a00770a68e9bcb208ef5d"],["/2021/02/03/skipads/index.html","e6f6829b934aaa3659e36cacf4867c20"],["/2021/02/04/picseed/index.html","2107003bebf94341fdddaa01770e4c8a"],["/2021/02/04/renren/index.html","f07cbc7dcd4e885f7a7e7bba1e24084f"],["/2021/02/04/serverstress/index.html","e9a118d6f9353fa0953ea0a52c18f98d"],["/2021/02/04/wikipediazh/index.html","3180b51cc2ce2ceedee157071d82bf43"],["/2021/02/05/googlevoice/index.html","4339afff40f3ccd572492d0719131e79"],["/2021/02/06/clashconnection/index.html","8cffb1331e1e00ac3a62f4dfd3265d25"],["/2021/02/06/gvtransfer/index.html","d2a63c9115d54755d4470f7344f9db7a"],["/2021/02/06/todesk/index.html","a833ba5de51d5cbeba0b2760ffac366b"],["/2021/02/06/vpnblacklist/index.html","5cc3015ef4d6aaed8bb9138a3aaafdf1"],["/2021/02/07/mklink/index.html","130401592247ccec105607c2c25a7b1d"],["/2021/02/07/speedtest/index.html","98d77823c081a4d4ff0726a5cfe3f28a"],["/2021/02/07/translate/index.html","4e60b2bf361e35ba5a11773236c08ada"],["/2021/02/08/ewomail/index.html","65843cf0b2005f19e6c8f350f8a58725"],["/2021/02/10/officee5/index.html","d8e932956e0db8f2aecc6067a2efc01c"],["/2021/02/10/raidrive/index.html","87a3e436464ab5b6e5ad7a0fde70fb4e"],["/2021/02/13/e5sub/index.html","522c2a1364d0601b3e5b91532b810d4f"],["/2021/02/14/screen/index.html","de4f48c2e817b86304cdd68ffc2cd81f"],["/2021/02/15/clashtun/index.html","08f35220343fb6ba576cca514f5bdc7a"],["/2021/02/15/messageboom/index.html","9b280bcf1b09f02aff606eedaf418589"],["/2021/02/15/oneindex/index.html","27eeafd1ab2fa023efb8c13ff8e3c86e"],["/2021/02/16/govsites/index.html","65cb4c37ef2e47607150d7e52029230d"],["/2021/02/17/hexototypecho/index.html","e1f1b8bdd9ae419e0b80072b2bc9f3fa"],["/2021/02/19/fiddler/index.html","5e4cc240afaee434397508181e6e89e0"],["/2021/02/22/potplayerset/index.html","3cae1fa9157516af2c980e8e309188dd"],["/2021/02/22/studyresource/index.html","a12444ac04c8d34753ac3c49025df9cd"],["/2021/02/22/telegram/index.html","eb30282d24cc65076d03ed6e63c99119"],["/2021/02/22/videos/index.html","419e83940cb13854ff140105579494fb"],["/2021/02/24/mtproxy/index.html","d892834c0e6139d908174027ebaeac36"],["/2021/03/10/catchcat/index.html","ef93a20bf581c1f204e064c6c57d9235"],["/2021/03/10/neteasemusic/index.html","c0adf53f23a347e406e7260d0bfb1558"],["/2021/03/10/surfboard/index.html","b501c2daf8571d0bdb18f2d32aff3d9f"],["/2021/03/11/vpnandjc/index.html","a778ee33792016a1fd4a5e2475dce0f8"],["/2021/03/12/qrcodes/index.html","7d4b67eff2496be321d43481e3985d9b"],["/2021/03/20/qv2ray/index.html","7478f7133df9639e38e0cac83a3e1c6d"],["/2021/03/22/freevps/index.html","dd39ff5ab5c4315fd9e03eee071e0c1f"],["/2021/03/24/tgstickers/index.html","bb06007e2a919e61cb3af892b65ac34b"],["/2021/03/25/clashx/index.html","5ee2c9a14eca344fa0480f068160d50b"],["/2021/03/26/bingwallpaper/index.html","04b97871e05dfbb73c6f1536ee527026"],["/2021/04/03/soutu/index.html","364399b6f7fe22888c09781191bfc322"],["/2021/04/03/tiyunti/index.html","5678b5f5ffc2255efe19c93656b589ae"],["/2021/04/04/btpanel/index.html","43ac3a74bb3bf42782dc94953a98160f"],["/404.html","b58834e810f7af174e1139b07216cdcb"],["/archives/2020/11/index.html","27815581d73efbb0b608974f722e9221"],["/archives/2020/12/index.html","c1d42838f2985cbc56d7607653e1c96a"],["/archives/2020/12/page/2/index.html","451e30eb62699c5c00872e842bb3292a"],["/archives/2020/12/page/3/index.html","e1d4b61b42476e37f937a14e57cd58ff"],["/archives/2020/index.html","0c8fdf64c1b0947f8d2b80ea2d20a331"],["/archives/2020/page/2/index.html","91193fd529437e6787f228c9ecd7f7ee"],["/archives/2020/page/3/index.html","4aeca013f64258462a8d46ef8f1490f0"],["/archives/2021/01/index.html","3a25f322de339bd7778fbf04ce31169b"],["/archives/2021/01/page/2/index.html","3ff8540d8ba7f8ca03f81f7ab3debb17"],["/archives/2021/01/page/3/index.html","f7291a95480e3b032a829c6fa002aa82"],["/archives/2021/01/page/4/index.html","b2a0c6bf23068af96351ca3c174f7bef"],["/archives/2021/02/index.html","0633d761cea466f9f00d45a6c39554d2"],["/archives/2021/02/page/2/index.html","861f17e2a29576c962c385dab133993f"],["/archives/2021/02/page/3/index.html","c902859c0ef70d84b8928d7dfd70cab6"],["/archives/2021/03/index.html","d989763ea5794226f0fa9867d005675a"],["/archives/2021/04/index.html","6bb0f4a6e4cc4e6690d0797b93515fc4"],["/archives/2021/index.html","4ee680acafbf065c0f3e712defa457c1"],["/archives/2021/page/2/index.html","c01d70ce4dc2a2a2c01394f04dac27b3"],["/archives/2021/page/3/index.html","341ca502b0c81b24b0ef0e2810be7318"],["/archives/2021/page/4/index.html","368dddf8b286385ee6d1e8d76405b1f9"],["/archives/2021/page/5/index.html","5a9b60518d638722dee8c7d881dedf22"],["/archives/2021/page/6/index.html","72e4194b7dc87c51103012f3546b769d"],["/archives/2021/page/7/index.html","17daa3507eef4d0ee41d589d3a24b46b"],["/archives/2021/page/8/index.html","5e7de597f4de270c8db2ac27e2c54d9d"],["/archives/index.html","55483a9e3d5bfc03588d8fecb91748ad"],["/archives/page/10/index.html","2a1fa2fb23a233bafce907da851e0095"],["/archives/page/2/index.html","4fbc453dbd55128215eef2272c391e83"],["/archives/page/3/index.html","6f9a2a3e77ba5e41c856d2ef3ef034f7"],["/archives/page/4/index.html","871f5ae7d9a3f67e2b53b5630b1c2e77"],["/archives/page/5/index.html","6ba0d1e65e8cd8c8d5ca8000995dba51"],["/archives/page/6/index.html","06139179bae16c14f6f729cc496f95d4"],["/archives/page/7/index.html","2d302da2d8c14140abc97555f7bdd5eb"],["/archives/page/8/index.html","5a65f418b138818a648f7e4bc1855494"],["/archives/page/9/index.html","2ed4cd978e899933c9b6476eefde30e5"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","6f20de4f0c7483d1ecc551ab265032ad"],["/categories/index.html","97d4f519c0f6bbb31f3b46788693171b"],["/categories/下载/index.html","46b21486c1a652dd3ac8e54dc137a55d"],["/categories/安全/index.html","b16393bddd4e64fd615979b9a1d34276"],["/categories/建站/index.html","aaf8db4677fe65e209fbfee91186fd8f"],["/categories/机场测评/index.html","cf2b3177fa90ead5be8d7c5963f27b7e"],["/categories/杂/index.html","9f958118d1c392acfad8f22916007470"],["/categories/杂/page/2/index.html","134391344639cf94ebaea920a531c180"],["/categories/测评/index.html","c30276a396975f4938caa865babec821"],["/categories/科学上网/index.html","ba16c4ce50944296af0be5427034faeb"],["/categories/科学上网/page/2/index.html","6c29d79c1c731b6f0c55442ef3f2b99b"],["/categories/编程/index.html","a35c0f522cdbf221e654c2377837f19e"],["/categories/网站/index.html","6d573420444fdb1a13ead43ed98cf4f5"],["/categories/网站/page/2/index.html","06bf3cd365b21cb2bbd88472fcb18f07"],["/categories/软件/index.html","20610be7758a60c80487f1cd00b81036"],["/categories/软件/page/2/index.html","1bfc65c95431df6cfb01ce3b5499e11d"],["/categories/软件/page/3/index.html","d4fb1b1ebfb9a663d0f117b3a6d7a01a"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","d33c9dab55965b4f09c5aaa3e98eb2a9"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","919727cb2fdbb3759430591124f6574b"],["/ios/index.html","90c78beae0ce229173701020ead0d54f"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","4dcdebb3c999e254050338fa13d9e002"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","3c0fdb2e0649b4bf09b05b0c79215f26"],["/page/2/index.html","52cb79579f6c3cd583d4535099a2a51f"],["/page/3/index.html","09ffd7f547ffdec9b5eeabe27fdda2cd"],["/page/4/index.html","be1c7741f2bb0b2f64cbc4f3aab62902"],["/page/5/index.html","4b72c97c61e2b9f8da73e4f6d1c7e62c"],["/page/6/index.html","4fe5e538afcc372cdd820faf85185699"],["/page/7/index.html","a31b39a4287dd36d4e53b4f2cbb81764"],["/page/8/index.html","ef03c6b044f1009d5507c2325c73dfda"],["/page/9/index.html","bd72858eee0a58c22fcbea630a97e72f"],["/payment/index.html","25c0dda0e886be060292c84a95498220"],["/privacy-policy/index.html","1c9b13c61c62fd21cefa250e5f51df72"],["/rss2.xml","f189524da8d21610325c43950c7f738d"],["/search.xml","c8356e45c230736daa5725381dcb31d9"],["/sitemap.xml","9fd240dffa139e071e31d12113419d39"],["/sw-register.js","ed2ef7d2f67e7e1c0ef13041f73d9b15"],["/tags/5t/index.html","6312d894424f5f419c03225b2fe24706"],["/tags/Bing/index.html","7375ae5bb4b092a21b65e5261e23083c"],["/tags/Clash/index.html","2baa8941513197130a9710eb142ec7b4"],["/tags/Clover/index.html","ad58b0c4771a4f4042fb7bb2e2e32690"],["/tags/E5/index.html","1372be88e449e839c478d44d9093a625"],["/tags/FTP/index.html","ae887c49350b6dca52a441344cf8630c"],["/tags/GitHub/index.html","c9e050165e3dfd62661ad8686e68a55c"],["/tags/Heroku/index.html","97913f053b7cc4cbb5f5ad0aeab58a30"],["/tags/Hexo/index.html","e7a875e29ca5fc6579587065bbe807c1"],["/tags/Lenovo/index.html","6a493630db16c6c77259197cbef18655"],["/tags/Oneindex/index.html","2b80243caf399579b6d00c3daae62140"],["/tags/QQ/index.html","0b3a8f87b8c8a8ed5615c0461d037937"],["/tags/QTTabbar/index.html","a1fe4322b16723e44c9119701707089e"],["/tags/RX文件管理器/index.html","b7bee995788226e14234536aebc1fb54"],["/tags/Todesk/index.html","349b6dc5135904397e91e12f680b4805"],["/tags/Vercel/index.html","506e9e0a945063050f974554288b1bec"],["/tags/ads/index.html","b04e4e61f4655721419e18c96f2dda3b"],["/tags/api/index.html","7eea2d7a976f92507f475a16a67c14ff"],["/tags/app/index.html","fc03b9c93348874cf5d4b32138aeb8cd"],["/tags/blacklist/index.html","3b5c40414525f6b7b0291f797a6ec1c9"],["/tags/butterfly/index.html","d446cbca670370f56801a5332f25f032"],["/tags/chrome/index.html","3e2ec1e1134d18213757b627c7cad3e5"],["/tags/clashx/index.html","f361c0f141ab8c9c927bb7a1b1e15f7c"],["/tags/cloudflare/index.html","639b34a745e9a00feb80017615db154a"],["/tags/cmd/index.html","d4e208328e132bf6b526e6ede96d2545"],["/tags/c盘/index.html","b1fb745e0da900363fb864f8064d943e"],["/tags/email/index.html","d024c973ef79f98e0f5a982e9915e21f"],["/tags/ewomail/index.html","509d122db24ff7e4f7cc83b37102b896"],["/tags/fiddler/index.html","da57c5440f7e9fee2dcd6ad88dee18db"],["/tags/flags/index.html","7846c0a6143ac5484019fef7a0bf6b09"],["/tags/footer，页脚/index.html","f2ebc4896b373932117fb3aebcc8e5c8"],["/tags/galgame/index.html","79ad1bb98d203d7f802162bb1532a257"],["/tags/git/index.html","e8d4856133dc841852e61b79563f5849"],["/tags/gitcalendar/index.html","46567ac2891a687886ee11c90f282859"],["/tags/google-voice/index.html","26dfdce63d57241b7896ed53582b9f1f"],["/tags/gv/index.html","885b515879b1353d9f60e6c1a49303ed"],["/tags/html/index.html","ee344e69ea3e8abed13454913d10f58c"],["/tags/index-1.html","04f6ec8c747d90bf3e74a34459680fc8"],["/tags/index.html","5f8227825e0134a4162b48e6f29b979c"],["/tags/js/index.html","9af684a26375589cda0d9256087c9775"],["/tags/jsdelivr/index.html","9db067e9d6cb0db9774bd1027f2b0e27"],["/tags/linux/index.html","28ef0a27e67349c246eff6557b1dc81c"],["/tags/macos/index.html","567028d71c4949c928b9c5a009bcab71"],["/tags/madVR/index.html","1e25f69875e844ffd859779e1306239b"],["/tags/markdown/index.html","43086849ab67f152c04a2c5688b61325"],["/tags/maya/index.html","23c250cf00519447cb08242ba107f8e2"],["/tags/mklink/index.html","aced1801617c4052a3a865c3b2ecd308"],["/tags/office-e5/index.html","52ae5609a69df3c5879c3c733d779104"],["/tags/onedrive/index.html","72861faf195f2d359467adb1ae31170f"],["/tags/picGO/index.html","11527bce6066b25a52e86de743947e10"],["/tags/pixiv/index.html","8e420ec35ff7b52667770c292afa5621"],["/tags/potplayer/index.html","bf1c9a56d18ea506e39970d67424584b"],["/tags/proxypool/index.html","f6b4eb56d403d806e67cec934545927d"],["/tags/qbitorrent/index.html","689c805b13fb104a3518738d6de853b6"],["/tags/raidrive/index.html","b46ce33e0a1184a9c55b611c7c8ad099"],["/tags/screen/index.html","2751a930b36c6165697acebf96127958"],["/tags/speedtest/index.html","5f2a1b186753841d46150bfe9280f793"],["/tags/ss/index.html","403ce63ca1e41fcb85c4314aeb830dc8"],["/tags/ssr/index.html","23c5a59eddd987a19c6f6e07bfbd51fc"],["/tags/stickers/index.html","b31446ad8e3effbcd2b9d87b35101c15"],["/tags/surfboard/index.html","3dbe22f2e8d26becec0c990f47013f59"],["/tags/tap/index.html","b147a8388ce10f15caf68658d8f40895"],["/tags/telegram/index.html","b9228769d124fae87554108726747f2b"],["/tags/telegram代理/index.html","9faafdb39cd890f67055c9d7ce98e92e"],["/tags/tg/index.html","2c2e876e8e2cf2155366f0516afbe85f"],["/tags/tg代理/index.html","e4538b37eb4d2c6a6ed743823d6a88df"],["/tags/top50/index.html","7e8ff821b41cc1e25a1c1fe509895f01"],["/tags/tracker/index.html","5abce68ec0ad29cc481ce440fb49a84b"],["/tags/translate/index.html","8aa1b3754df20e34453493b70a2178cb"],["/tags/translater/index.html","5377d1628aa4fc2bbd6258db81ae13b7"],["/tags/tun/index.html","4f518f5d59bc743c7e07cf34a47426ab"],["/tags/typecho/index.html","84cd04461d6b3bbc71e243463f68822f"],["/tags/v2ray/index.html","7d095202fa30a543d852df0787dd426f"],["/tags/vpn/index.html","352d0806740e69517d2b33bbcea21649"],["/tags/vps/index.html","d2ad63ec4aa33901f32016c965e14d74"],["/tags/wallpaper/index.html","b49f5ad3f750b870fd119ddfc5ef5848"],["/tags/windows/index.html","b43fd72db021f148e95a379ef7eca8aa"],["/tags/windows端/index.html","b012f59e31f969e87fa7bedac6c09566"],["/tags/xray/index.html","e396007e1f2145105092f20462146bb0"],["/tags/yandex/index.html","4bc4523b2e85f102f196a88d62ad3f48"],["/tags/下载/index.html","1bc04f67a3810f32914ef15a913bb208"],["/tags/不限速/index.html","7fb0446b34b0aa8b9fe1b4be05ad5e59"],["/tags/个人网盘/index.html","c9c1c6dcccb5c098150b03b76f7ecb6e"],["/tags/主题/index.html","f9920a9ef2acdb1cd6d224a676fe0226"],["/tags/二维码/index.html","b995f77c9bb847ec03d622b5dce2ca52"],["/tags/云便签/index.html","639d0b62285357152d092897d6fd5c4c"],["/tags/云盘/index.html","7d857d11e4996761d1bcaf64dae36b30"],["/tags/人人/index.html","861b3953ff9c646b17ff8fa872e13ce0"],["/tags/代理/index.html","d3f9630126b91dde406668f0c8c02720"],["/tags/代码/index.html","faf624f3ca81029e78b03abb869d65b7"],["/tags/优选IP/index.html","4c9fd416c9a6c25426a45a0ed8250af0"],["/tags/便签/index.html","10e3a64f4756ac30a052743ea3bfb365"],["/tags/保号/index.html","5f094d29c0a75e19a3dea004fad138ce"],["/tags/免费/index.html","9cb6e40984703791fd3b083e391bbc3e"],["/tags/免费节点/index.html","7d3a5c5e8a758ec533fbba1d90d90e40"],["/tags/冷门节点/index.html","234d8b254354332f5fc5023941edaf29"],["/tags/删库塔/index.html","ada1e8e000101c7ea7e73defce1e1462"],["/tags/加密/index.html","9fbfcf58062855e7266f4bc67b455aaa"],["/tags/动画/index.html","c259ce08dce48cbb3d5aa9c9e0e0b4bf"],["/tags/博客/index.html","1f2d2fc43275874087759bf39ceee6ba"],["/tags/历史记录/index.html","a95b9ea5d7b8cb85442d1d26642a7a9b"],["/tags/压力/index.html","903699c6e02d7aad922e5ced5df598a2"],["/tags/压缩包/index.html","c1c853ef860c8df35b4f71b7fd86f2d7"],["/tags/反代/index.html","0e9ae6f415ecf24454d18b8b88c91868"],["/tags/可视化/index.html","f62386b993516729733ab2bd1194d2a3"],["/tags/命令/index.html","06ea50a6e20e71623963232cb63047e7"],["/tags/国家/index.html","a876f9d8c38d05681788b6d827e021ec"],["/tags/图床/index.html","52819a1f836dc2845c910714ccbb8a0d"],["/tags/图片/index.html","216c042fb752f642f47f207e0d4231a4"],["/tags/域名/index.html","3e73523a5d05221fd5a1dc7aca17b49a"],["/tags/壁纸/index.html","35fc0e3bf938edb5959ad5cd31ff87f8"],["/tags/多标签/index.html","c3ac40c53990013e3530ecf00cd7b053"],["/tags/奈飞/index.html","65409d74c6f270cb0549dfd72692057e"],["/tags/存储/index.html","b9399e41536cba52cba77ba9af67fb19"],["/tags/学习/index.html","6c1a5bd612afad3748d35f7ecf444422"],["/tags/安全/index.html","6c11fe2ffec9350dd630bc97fbb3b765"],["/tags/安卓/index.html","8163503d4d4c72901f5c9379f9df518f"],["/tags/宝塔/index.html","c51c3a7474af24c4c7cc7d51a3c6bfb6"],["/tags/小游戏/index.html","e925cc08c87d8965ca551c114da93605"],["/tags/广告/index.html","140f572c8cea4eedfaee2d31b78e5c59"],["/tags/建站/index.html","55e2a85808819e86af5a964c8400ad81"],["/tags/影视/index.html","92b5efbe014d1efcb0e6158d4fef4eeb"],["/tags/微信/index.html","19ed078191ac863bb2c07d3cd4995f65"],["/tags/快速启动/index.html","39555d835c6e479ac57c98c2a77a9b68"],["/tags/手机/index.html","42a85a02bf72dd0fcb42b1bd8e32c247"],["/tags/托管/index.html","362980b3bdc7f5e36bb7b156a787e02d"],["/tags/抓包/index.html","525d12fec97c9805f482b14f8e7ed7ef"],["/tags/抓取/index.html","6071afc91459ad7e4c767cd36331f763"],["/tags/投屏/index.html","9e8ae92a19f586b50c63443bf9616ac5"],["/tags/拓展功能/index.html","1ae387926e26a2441b4aae22c31a0174"],["/tags/挂载/index.html","f419aec5aa4ed955cac56dea55806878"],["/tags/指纹/index.html","8574eae9f7096134f15e022e1f85f614"],["/tags/接口/index.html","0762bf92b76296f4e7febd3a4dc44e83"],["/tags/提取图片/index.html","7a99922e566dd5b1170eb982b8f4026f"],["/tags/插件/index.html","936a803f4c945d17d2ab7ba30f5b23fa"],["/tags/搜图/index.html","dd10df320538bcc2631b463b0dfd0095"],["/tags/搭建/index.html","b3ff1e0b5446f8ca3522a71575d82161"],["/tags/撤回/index.html","5cb12a40507e9633e2ca14b12ff56d10"],["/tags/播放器/index.html","f14d74691d0250903e47b60eef19af31"],["/tags/支付宝/index.html","2fd40ccde8791206b9adfc147ce834c2"],["/tags/政府网站/index.html","5bea270c87a943c0d812c1380ddfd8d3"],["/tags/效率/index.html","040326dd6c3c82ae107ecb137abbad20"],["/tags/日历/index.html","010fb6f09676c749b4bc9cbcf7d22112"],["/tags/服务器/index.html","789a5e161697baa0c9b8dc4a5fcb352b"],["/tags/机场/index.html","6417345b63994effcc0b1d04d23b9259"],["/tags/桌面/index.html","8050cdf66eb7cbb812aab8deb9681f5f"],["/tags/梯子/index.html","eb4beebeabde937c3098390ad8473904"],["/tags/检测工具/index.html","9c0962d644218bef2572abb1e1681821"],["/tags/汉化/index.html","73caf39483a539b224ef51a0b39ba735"],["/tags/测压/index.html","b779c94e389743444ffd13d62c9a5c9f"],["/tags/测速/index.html","7584a5b5099ef61eaec4475ba025b1b5"],["/tags/浏览器/index.html","c95c92e62066d097f17e3bb2004ce632"],["/tags/清理/index.html","149b8b46553c2de3ce8ecfc6fe3e9656"],["/tags/滚动条/index.html","c310c542bcd1dea0a9de914065a6abd9"],["/tags/灰色歌曲/index.html","dcbbeb1ed925825be5aaf450e94d569f"],["/tags/电影/index.html","bdbbb71b4df803e3667026c967754e4d"],["/tags/电视剧/index.html","c0832f848cf13408e24a476dfcddde59"],["/tags/白嫖/index.html","89efd75f886a7b3e7c990f53966ad969"],["/tags/百度/index.html","8907fb175b85d1b71f20bf451785cd8d"],["/tags/百度云盘/index.html","746275ec4cbc6729d5912ed5d7cfc5b7"],["/tags/百科/index.html","771d21e210933a63412bcc771a6341ab"],["/tags/短信/index.html","7a63f74cd3ce3310dd2d3b1b9d09018a"],["/tags/硬件/index.html","9c92c38bf3ef62e550c08815596e882d"],["/tags/科学上网/index.html","97df8967d4257719ea2f7ee228a76669"],["/tags/空间/index.html","6898555b1b3dcefdf2bf104d35e99d3f"],["/tags/笔记/index.html","396518082efb4cb04f8789760f8d1d2e"],["/tags/简洁/index.html","82090b58379de65dc659dd1eaf351588"],["/tags/简约/index.html","13fe5411495104cae7e3bc5b9bf81a8f"],["/tags/维基/index.html","111f1b7ccf90bee473b17e9ca7472b0a"],["/tags/网易云/index.html","17af782f0867a8f7b16f358d10b78244"],["/tags/网盘/index.html","df7bdc9788506ae2f9a88ed36d1d1455"],["/tags/网站/index.html","dd25c49dcac2ddb8b3a49df37d7d9b7d"],["/tags/网络/index.html","61f6061f8dcdfb3b157b63f143796869"],["/tags/美化/index.html","b257f76a4140afcbc2e462ee9946c811"],["/tags/翻墙/index.html","d7916cade63f24059224ba6c478b3961"],["/tags/翻译/index.html","b1202ee03b383aaea9e6cf517bca4cac"],["/tags/翻译器/index.html","4f20f16e926611f67be889bd8f6ad9b5"],["/tags/聊天/index.html","7ed35bc52d27f480d9f18aeb416457a6"],["/tags/聊天室/index.html","a906892bef7f9ded436414031b24000d"],["/tags/联想/index.html","0c252f2cd2aea7386143e5d4e071a354"],["/tags/节点/index.html","c3d78697f541166302554d7b1f6b4855"],["/tags/虚拟手机号/index.html","25ef49e39a9370021e6346a1b4978f92"],["/tags/补丁/index.html","909e2d336df4da27c13d9c11cef9834e"],["/tags/表情包/index.html","5bdddb4aa8030353af8f9942c8c61645"],["/tags/视频/index.html","de71ff382f8336c6bbfe3dca318fb5ea"],["/tags/解析/index.html","0f50acb0e798a1cfb6d431d304d2f1a8"],["/tags/订阅链接/index.html","63cec1aa4e76bec16d9210d88a0835e9"],["/tags/记录/index.html","1cd094c24e4162e08f9ddfadd550a594"],["/tags/识图/index.html","dca47eb2d3ceb6b306121400a1387d32"],["/tags/语言/index.html","6e7973c452c8c0f8a339e7fab008bf1c"],["/tags/资源/index.html","5e2a2b3f725fb409ebfa2510f86accfe"],["/tags/资源管理器/index.html","d6574823b056b60b1527e21c82164e49"],["/tags/转移/index.html","7adc2dffd7a56cabafee3f6543fe9835"],["/tags/软件/index.html","c3e757b94c5e44ecab337b741467f92a"],["/tags/轰炸/index.html","66c1371c3dc9c70af50525520cf4b04f"],["/tags/迁移/index.html","e95919311c7c5f01297f867db4fe1b00"],["/tags/远程控制/index.html","26182c582ba8945a3baceca367dad045"],["/tags/连接/index.html","f0bb5500c252653962df16f25e3710f2"],["/tags/追踪/index.html","e5edfaa2bcb2554fd8bcbd644e2106f4"],["/tags/速度/index.html","2eba8e7afdaed196dfcd39caa7b1167f"],["/tags/邮箱/index.html","1baf414933da0352e7d938fdf4dc9f34"],["/tags/酷炫/index.html","069d351efb8caad4c6471222e09240d4"],["/tags/钓鱼/index.html","6c0cb917637e23fb8a497ff35d5c845a"],["/tags/镜像/index.html","974384a7d384955ea067798fb011c160"],["/tags/随机/index.html","369b039b2553401c1f9b9d1cd7fec567"],["/tags/隐藏/index.html","73e4de313b449b8a304dd0ea513f0b14"],["/tags/面板/index.html","a492dd903e539c01526524c02a044a14"],["/tags/音乐/index.html","10fb4aba592f0b0886a87e62c163f724"],["/tags/高颜值/index.html","aada27172107468e163e65fda239a87e"],["/tags/魔改/index.html","6f9de72ab53ea63fb567f4e524099802"],["/tags/黑名单/index.html","87e24fa29da6c55af88b1ad4204463c8"],["/urls/index.html","beecf159f2d3ac066edc093b365659f6"],["/vps/index.html","0979319b5fb2953ae88346a554d4d507"],["/支持/index.html","0cb844dba4264526a9cfe0befd8934e6"]];
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
