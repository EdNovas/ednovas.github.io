/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","a50bd64a58f443b7c13fee846f9905c2"],["/2020/11/29/clash-windows/index.html","09e57e6fe18f009beee3b60b7297de74"],["/2020/11/30/websites2/index.html","a9a9f08a6d45269d955b5cf0f276a520"],["/2020/12/04/iphone4s/index.html","a08588b2b4f40b6f74f82e7273371842"],["/2020/12/04/onenote/index.html","4d0a3fb5e22c36ae1a7419ff08a282bc"],["/2020/12/04/wesites1/index.html","5623544d44cc757da2f19886c3cc74d4"],["/2020/12/06/nokia808/index.html","583c76edf816f7f991055cffeede47b4"],["/2020/12/07/ipad1/index.html","042a3b2669269e8bc0feecb9f4818470"],["/2020/12/18/freesubscribes/index.html","8f77d36e10df4bdc35c0affab142f919"],["/2020/12/19/musics/index.html","85a296a6f1bb2d132d1a28569699a1f2"],["/2020/12/19/shadowrocket/index.html","3d8aab48f931303d5b12c321f64b1aac"],["/2020/12/19/v2ray-windows/index.html","6d06bf4fdcf2e02c08b66f292f390358"],["/2020/12/19/v2rayng/index.html","931ced813fbad931069d613a58f2d8e8"],["/2020/12/20/beoplay/index.html","b6f4b5ca22e00af77b0133c4a7091763"],["/2020/12/20/订阅链接转换/index.html","b5d81589765dee25f13b48ca1bbc1804"],["/2020/12/21/chrome浏览器下载提速/index.html","29de5e7b5a9cb3ff65a6f0bb3030c355"],["/2020/12/21/免费128线程并发下载xdown/index.html","d8b4a82b63335ae7ec1835a7840644a9"],["/2020/12/21/免费32线程下载软件ndm/index.html","b387610aa5cf84edf703406c107b213d"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","0fd819c9b06bde796e30e7835b4f97bd"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","1a2d603b3ca9a40ce2ea9fa4e674111f"],["/2020/12/21/广告怎么知道我在想什么/index.html","b6217cb4008e98982827369ef17ae837"],["/2020/12/21/无名·引子（小说试写）/index.html","2d907b1601988a84f893e09b3605887c"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","5b12bdac6f7a4ddeb3284e1bcc854ea6"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","59fd1f53dee825a4db73a58a95b18585"],["/2020/12/21/高速轻量下载器aria2/index.html","b3c79d1bf4d340c65a24f42ff9079d7b"],["/2020/12/22/2020-cee-roo/index.html","b5fb0539cd49c04cea3515ba83dcc39f"],["/2020/12/22/firefox插件、github、steam富强/index.html","66bec663e1396526490caf305f2ad660"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","58e3bc6bd145ab55dd11f64067cd0e34"],["/2020/12/26/python-day-1/index.html","4d01e307e7d160ef0a952f10c6fbe628"],["/2020/12/26/python-day-2/index.html","1c5a07835ba2f3eefcb6f7fa03a0251a"],["/2020/12/26/度盘不限速下载方式一赏/index.html","e0f84988510ae1e2ba95ad3d322a6d5b"],["/2020/12/26/添加开机自启软件/index.html","b2814ddf2086b29cec9ab590266e73a5"],["/2020/12/26/电脑端截图方式一赏/index.html","e6b1e1e1d2f9c63a72a22fdb65805971"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","e09ed869b501c8cead3452e4772ba79a"],["/2020/12/27/最安全的浏览器tor/index.html","28fa45fe6af931287c268a21e56a805f"],["/2020/12/27/网易云刷等级和听歌数量/index.html","f90f4a30328ccc9fd984f46ecc5b7918"],["/2020/12/28/freenom申请免费域名/index.html","e3b5633e02da7f35de018f265c969f2a"],["/2020/12/31/机场/index.html","09a0c9f52a9388c4d12142a805374cb2"],["/2021/01/01/M1/index.html","7d6ee6d17938a0bf77c5aeb102392461"],["/2021/01/01/compress/index.html","face8be4660164c4a7bd2f04861b4636"],["/2021/01/01/infinityfree/index.html","524fe55dddc0a56bf6def4467863133b"],["/2021/01/01/硬核翻墙/index.html","2173bf0ce0367ba0c19df84d7d25fd43"],["/2021/01/02/qq/index.html","0afaa4a42ab88a6a1ed3d98007e9bbb9"],["/2021/01/03/netch/index.html","168d8e36c35af810ea5687d456ade066"],["/2021/01/03/waifu2x/index.html","c88b0e213e024b8bbc9bca9bc36718a1"],["/2021/01/04/ads/index.html","492135c057eea1374adcf0afb4ec49f0"],["/2021/01/04/games/index.html","518e7f3b27ae5507a0eb1fc08870fab2"],["/2021/01/04/heroku/index.html","a4a01e4ac4ac7c4807f216b549901f8f"],["/2021/01/06/movies/index.html","fbd902517158abd16be859c9c7b1ae3f"],["/2021/01/07/google2020/index.html","8012bb6208dcb757c69a32320169521f"],["/2021/01/07/lucky/index.html","c1c997eedd178abedf729aeaee39af5b"],["/2021/01/07/spotify/index.html","87c3d1802fc3e09c11f0f605475c3a29"],["/2021/01/07/thunder/index.html","a9b2c3d231994f9e02d8cbfd6abef562"],["/2021/01/08/adguardhome/index.html","98de02f8d772aae436aabdc8990f22bc"],["/2021/01/10/IBM/index.html","c9894291b2bb920e4cebfa5cd33d0689"],["/2021/01/10/potplayer/index.html","1e282671138a54d5c7be05a3b4d4b568"],["/2021/01/10/sakuraanime/index.html","994207b0f80f96170545d96b1a09ba2c"],["/2021/01/10/美剧星球/index.html","ef624d00568554c8cbc7a81aed0b4618"],["/2021/01/12/telegraph/index.html","b7eff54315f4326407c3395f308f416d"],["/2021/01/14/comics/index.html","a5a54e88b5e405fef97a6fa0ddfba4a8"],["/2021/01/14/ftp/index.html","a744deb0027e7b97b793a43e44ba84d1"],["/2021/01/14/oraclecloud/index.html","3c3204b23399def5d4d92b67008cff1d"],["/2021/01/14/porkbun/index.html","63cf20308b4d1fdf1d4a1d8ed1be476f"],["/2021/01/14/powertoys/index.html","c065a8e8240b4e75476434f0c194e3b1"],["/2021/01/14/taptap/index.html","c0d1b9544859e258f2288c4cee17fb26"],["/2021/01/14/ubuntuvsftp/index.html","4163eb462805ae5960dc60222855961e"],["/2021/01/14/小说/index.html","e1e815b5b1c99e9038d99a2ab38a9aea"],["/2021/01/15/freeproxies/index.html","bece2b3d670db55a2f3cad85a151ca0a"],["/2021/01/15/incaseformat/index.html","2e66cd2bad933bcbefb9a5ae699b6c0d"],["/2021/01/16/euserv/index.html","7cd317e367a6fa82ff85c0271002ba31"],["/2021/01/16/winxray/index.html","fc1de0ae376d36b9a8a6df7404339f48"],["/2021/01/18/qqreadhistory/index.html","4b76b4ea569ed9db446e9d217179c309"],["/2021/01/18/qqrevoke/index.html","d5cc95bf72003268095eace1ede488d1"],["/2021/01/19/freevpn/index.html","9a3df646d9eda6ef9a02312171332b85"],["/2021/01/20/browsertrack/index.html","5cbc061b67a00b4399ff1cd08c568862"],["/2021/01/20/v2ui/index.html","20f4a671080ed9504443e8f16805030c"],["/2021/01/21/failedtoconnect/index.html","e08968c2042e7e30b6849abfa48ce7fe"],["/2021/01/21/gitcalendar/index.html","0886c7495cf3bdda057d80b5a1effefe"],["/2021/01/21/markdownformat/index.html","cff6cb74796cfd7d10f2371670520c0d"],["/2021/01/21/markdowntable/index.html","90bd737e6cb518ba94669d303912810b"],["/2021/01/21/vercel/index.html","8712e1eb83a6b158db3db765706e4d6c"],["/2021/01/22/hardware/index.html","9b223fb44f0060567e78ed275e2ac372"],["/2021/01/22/muviz/index.html","51bca5e890237366c55878e084fa2dea"],["/2021/01/22/randomapi/index.html","3df35eeb78b151eb8cc32a66b34c56ac"],["/2021/01/22/searchimages/index.html","25e9f6e8c2bc417840bbc7fc2665cc8c"],["/2021/01/23/RX文件管理器/index.html","0cfbd656f99dcba060bdffed9d12ec98"],["/2021/01/23/chromeflag/index.html","691240c03cb654aceca0ca0d967a5786"],["/2021/01/23/qttabbar/index.html","510be535c2d60c3e3b3d913eedfe5cce"],["/2021/01/24/githubspeedup/index.html","0056c32c5a72f17bff39170c0a295897"],["/2021/01/24/jsdelivr/index.html","a7dea92f4b5773185a4961531b7756c5"],["/2021/01/25/note/index.html","192815fa204e28dd1304e3ed2fac39eb"],["/2021/01/25/soul/index.html","b990f176e70b36fbb75929b86d47b4b3"],["/2021/01/26/herokuxray/index.html","bb68e2849968ab963b60038daf62f4f2"],["/2021/01/27/proxypool/index.html","1ea8e560ca45cbc78d2cc6f23c20829d"],["/2021/01/27/tracker/index.html","12b56f58dc489985b2f23599eab27160"],["/2021/01/30/pandownphp/index.html","bddf30234726d41c7523cd54160c85e2"],["/2021/01/31/newgroup/index.html","5c34251ace7315a766ba8d7d63988695"],["/2021/02/01/clashlanguage/index.html","6e31aadd14428a223cb645cc467f53ca"],["/2021/02/01/encrypt/index.html","a86a070c10ad18187ad754b6d92fb6e6"],["/2021/02/01/footermotion/index.html","bfb40f03a2f7cd13418ae118add32637"],["/2021/02/01/gitter/index.html","bb59aa70f343a03d0f87dd921921d0bb"],["/2021/02/01/pixivtop50/index.html","db3dfb0ac9885d591e476d42a003ca9b"],["/2021/02/01/scrollbar/index.html","3e855816d9d50cd6ff9e7920c2471257"],["/2021/02/02/clover/index.html","b2f05c95fc270d188e49e806fa6c5400"],["/2021/02/02/maya/index.html","ce2311a7c9769033fc942c106c5ff66b"],["/2021/02/02/speedcontroller/index.html","d59a14114a7255f6ef70ca51b4c80789"],["/2021/02/02/yesmusicplayer/index.html","6b59407add785bbc008ed9a5b01db979"],["/2021/02/03/lenovoonelite/index.html","b7b6232680d00c8cb650710a24371cca"],["/2021/02/03/skipads/index.html","8fed5238e1f12ef8c0b772b7c7d33708"],["/2021/02/04/picseed/index.html","3684a95a88cc64efa93091c26313a7aa"],["/2021/02/04/renren/index.html","a517f988fbb12d187b5a8625d5e737bc"],["/2021/02/04/serverstress/index.html","08f340d3c0a92d55da08485e7aa2a899"],["/2021/02/04/wikipediazh/index.html","da5cf4a3dfeb71d264b1123bcd5c1d71"],["/2021/02/05/googlevoice/index.html","34b6c1562ee49bd9dfc0d3588856ae5a"],["/2021/02/06/clashconnection/index.html","5948693f64fee40fddd497258af8307e"],["/2021/02/06/gvtransfer/index.html","36cc8e7699b63c4251daed67e1d8c3fd"],["/2021/02/06/todesk/index.html","9995979df60b5daf8e4c3d9ee0c92e40"],["/2021/02/06/vpnblacklist/index.html","f7a8fe83a7c83d36d28425d79fb3ee43"],["/2021/02/07/mklink/index.html","141ba9774328d0e56c1b97525afd2038"],["/2021/02/07/speedtest/index.html","ff48aa57097f7fcb22a85648dbd4f28a"],["/2021/02/07/translate/index.html","df7c37d0ebccf6b1f1bee4f0555d4408"],["/2021/02/08/ewomail/index.html","06d4d853a324eccddbcf799b00ab3bda"],["/2021/02/10/officee5/index.html","4fcd75fbd34bb2ee7ba0564def668f4b"],["/2021/02/10/raidrive/index.html","a4766c15c5549a19a46f3bf50cc1f39f"],["/2021/02/13/e5sub/index.html","7381a32ea46f8dc6dfe0d6f8c7e908cd"],["/2021/02/14/screen/index.html","2d3159ed53870405e364d8169cd6b371"],["/2021/02/15/clashtun/index.html","e5b19e8d07e54cad9790e81844161e09"],["/2021/02/15/messageboom/index.html","64a5ccfea5331d34b45338e2ebb4259b"],["/2021/02/15/oneindex/index.html","8a3ab35daa4c418e191490fa8712596f"],["/2021/02/16/govsites/index.html","117d457d8f324eca04e067f32f43b7ac"],["/2021/02/17/hexototypecho/index.html","d86a60c0a6fde6b90a16f535c57cee40"],["/2021/02/19/fiddler/index.html","e235b3ca494710185925accdd23131f7"],["/2021/02/22/potplayerset/index.html","41f56aa51c6929599dd38e8a734c8891"],["/2021/02/22/studyresource/index.html","6803384b7605fa08b4ce2f42dddd96d9"],["/2021/02/22/telegram/index.html","0a400f229c69a8c3039fe80b91619edb"],["/2021/02/22/videos/index.html","e379cb21878cc4ed275b264998857085"],["/2021/02/24/mtproxy/index.html","c6302e53ccee711c9a8c47e386491016"],["/2021/03/10/catchcat/index.html","95831578522359b783b25dceb523dbec"],["/2021/03/10/neteasemusic/index.html","8ccb7fbd7369d5d7209b241fedd987e1"],["/2021/03/10/surfboard/index.html","0335790e19ea47b6c02fd70016bec8bc"],["/2021/03/11/vpnandjc/index.html","61fba71b41d3b283ce91ed5f3dc0b306"],["/2021/03/12/qrcodes/index.html","62c2c7523d7ad4d3d1f881c3a18dcf9b"],["/2021/03/20/qv2ray/index.html","038bea291d1a24b5e091f15beb61b0a0"],["/2021/03/22/freevps/index.html","fb1ad215490e6957f552ed5f569d08b7"],["/2021/03/24/tgstickers/index.html","80387d68f3d945136dc0133ddca89665"],["/2021/03/25/clashx/index.html","c67c88d1a34a323db257f406c5897095"],["/404.html","460cb7c3591868e02ef51ba3cdd283c8"],["/archives/2020/11/index.html","8c11a58d8ce283b110b84b5f2747f88a"],["/archives/2020/12/index.html","6f04ed3a3f319077f187f125a44ef6b4"],["/archives/2020/12/page/2/index.html","fc893a7f17609b56112c31048d9c70a5"],["/archives/2020/12/page/3/index.html","a3521877b257e2f1eddaf44a766e593b"],["/archives/2020/index.html","7522e5272e23969158d10f1aeeb4b6e3"],["/archives/2020/page/2/index.html","546a7f4e87871f5e64467f075872eb2a"],["/archives/2020/page/3/index.html","db509a19365e4cc710fbb18a967fba3d"],["/archives/2021/01/index.html","3822b56979887358753a1f1c03b0a304"],["/archives/2021/01/page/2/index.html","57cbd866476f1ae5d0b617ee3545e328"],["/archives/2021/01/page/3/index.html","cb2373f21b81066da2468727f4c08edc"],["/archives/2021/01/page/4/index.html","3b1aa5d0ae7632e9d26cd1443bf5eb63"],["/archives/2021/02/index.html","2d139a9e79e9e7f74a92aa8f4bbbc6d1"],["/archives/2021/02/page/2/index.html","8719a57ff614e8ff8c530a6349a22814"],["/archives/2021/02/page/3/index.html","0b5ce1ca2e7f1e0d429d45ff51d673d0"],["/archives/2021/03/index.html","fd8d325c3a85f172af36975a7bb7c779"],["/archives/2021/index.html","9a908594b629bc54de65aa6903fee1ce"],["/archives/2021/page/2/index.html","1a3f9037bfd3545b8561156d20455efa"],["/archives/2021/page/3/index.html","3ea8e6cd113c410f623d8005d1a40f40"],["/archives/2021/page/4/index.html","7b982077db9ac4159e2d5d52579e1a08"],["/archives/2021/page/5/index.html","070831077451670332161a07f7859d5b"],["/archives/2021/page/6/index.html","d5514f14589b9e86f79060b6f9313a3e"],["/archives/2021/page/7/index.html","7f5b94fc0e4a08e81c1a1361e3aab31f"],["/archives/2021/page/8/index.html","cbc6c9a21b8514b2e87db2e30781f7e2"],["/archives/index.html","a236b514e27ca3f259daf6aa85e2dd93"],["/archives/page/10/index.html","e2e4612874dec24ee72651233838d3c0"],["/archives/page/2/index.html","72d5a5fd0029c111d5562ace15fdb09b"],["/archives/page/3/index.html","722b759f9699d46a3774e6a1502f0f79"],["/archives/page/4/index.html","eb724ea9b0ccd3cb8b5e575e8dcb8753"],["/archives/page/5/index.html","16ab7335b099b92b122db6e36209d81d"],["/archives/page/6/index.html","7e624ae6355b480ad33a8c25ccd3cb87"],["/archives/page/7/index.html","41652ad24ff4b95203e85bc29fb7ba84"],["/archives/page/8/index.html","35f289df3c84000b7d27c60fa0e7e30b"],["/archives/page/9/index.html","6636df02787c91110528fd902799aeb6"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","eb58aa32760cc060f9b2e93c4998f8fe"],["/categories/index.html","102402b2dbffb8fcf16a3bed7eccaa65"],["/categories/下载/index.html","be3d4dea09f39c1f5cf0405aa5f207ab"],["/categories/安全/index.html","55bc35a3ef544c492141e56f44535860"],["/categories/建站/index.html","b0317ef7f5586eaabb568e4e9777fb43"],["/categories/杂/index.html","5563212c74ca6aba746563dce0c1311f"],["/categories/杂/page/2/index.html","1c2ae774ea18c9079887726dfa82f33f"],["/categories/测评/index.html","d8d84298cfd88d793e0d0a029fcd05a1"],["/categories/科学上网/index.html","e0c237bc5bddd85befc6230375f63d7d"],["/categories/科学上网/page/2/index.html","4832342443dc86f9ad19719c4b1d1975"],["/categories/编程/index.html","15c86c23de35e44f789ceb06f9499103"],["/categories/网站/index.html","79e48c8af8a11213619335bd8d7f33c7"],["/categories/网站/page/2/index.html","7edf75ed601cc8f181eadea70d5ddaf1"],["/categories/软件/index.html","435bdafd9f557a0b2c0fbf63dada5eb7"],["/categories/软件/page/2/index.html","152d880ae28e91838cd80641a5ee899a"],["/categories/软件/page/3/index.html","31049a3d6ff74c9f2eb7c9ed41f579c3"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","d0f56a5d76a68127af878fdb8d8dca75"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","4db9e000be96eaddf9cb371f6af6ea35"],["/ios/index.html","734f5181e5d9c3c8c138b8660e4e8347"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","59e83eb15822f698de175b459a2321c1"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","c8bf68ee624a1f40b240e2df8750c08b"],["/page/2/index.html","ec40be74d2c20c309de75be09090c806"],["/page/3/index.html","b2012e03016be1e5ab623bad83644076"],["/page/4/index.html","19c353d2a19750c2c3621b59d4aba8db"],["/page/5/index.html","17924c766934e2d0ce398eccf0fca602"],["/page/6/index.html","32d58128369255b277e48a8710517fd8"],["/page/7/index.html","b4242fbf465db83ecd558af0008a8350"],["/page/8/index.html","d7a53b62d690173476c78a29fd8e2b0e"],["/page/9/index.html","6296e3dab88973274b6956cbeeacdc96"],["/payment/index.html","d90fe9f9bb0abd4fdd83feccb6bca10e"],["/privacy-policy/index.html","96e172dcc6b645d9e83cd658a9ad7758"],["/rss2.xml","5e7847efc55e8a8b9f27ba422002bbd2"],["/search.xml","e27235d684859c2a1e90de32aac99903"],["/sitemap.xml","02a49dfbfeb61e211581ca32dbf89801"],["/sw-register.js","ac9279c05a967e90f6fe876192b72c05"],["/tags/5t/index.html","4c2f65e9e4f25dcdb3a29ca45ac2f87c"],["/tags/Clash/index.html","675c23e5c95fe505f752504a57a3645e"],["/tags/Clover/index.html","f8abc4d208e647c7dbed34d303f4c4f6"],["/tags/E5/index.html","ed08491c1830084188c0d3334520c56e"],["/tags/FTP/index.html","6a119cd25cf31322c4cd9df3043b267d"],["/tags/GitHub/index.html","9ca204b0b0618296bb6017a407bdae4f"],["/tags/Heroku/index.html","54f0f7ecf9117ea000ecc9c4b6f7cba8"],["/tags/Hexo/index.html","1c703428660be2d5402da33cddd65d4f"],["/tags/Lenovo/index.html","e2e53a4a26f156c6cd0b99dc1ee73e81"],["/tags/Oneindex/index.html","a2692a45aa0e9047235c841dc470e41b"],["/tags/QQ/index.html","d6a47d059f983d5adda64b8ef8a9bb06"],["/tags/QTTabbar/index.html","6a046675e92a5a1326a95c012004bf35"],["/tags/RX文件管理器/index.html","9af53fe2ab49ad8499b2458d70c2ee8d"],["/tags/Todesk/index.html","ada1d1428646690612e05c4f195d9dbc"],["/tags/Vercel/index.html","742b7ff06d54bbd3077c2a4d0dabeb80"],["/tags/ads/index.html","1f91e876177a7b4d5b714e13d4631fe1"],["/tags/api/index.html","1d352bbd10f2b673785ff17e929b6ed9"],["/tags/app/index.html","889ed648fcf45a833805a324daa1d3cb"],["/tags/blacklist/index.html","4896aeeb613620038c5cfdc57623de0e"],["/tags/butterfly/index.html","17145744a83b74a29455da6f013e3f8c"],["/tags/chrome/index.html","29c30e894c29fcaec8c2da99634869da"],["/tags/clashx/index.html","bfa72c46e22380b9e424c2241a8339e5"],["/tags/cloudflare/index.html","2a1494c530b678fae265cfea28652cd5"],["/tags/cmd/index.html","b4e0339e2ad18af082e6f496ad3d04f7"],["/tags/c盘/index.html","95bf883a636d137764acc259e4df3b01"],["/tags/email/index.html","f638f0e9e946982e3dd65c20072b74db"],["/tags/ewomail/index.html","9be58d4d9416cddf502dc89b98489a7e"],["/tags/fiddler/index.html","00101ba5f70af8578910e8b9c6230f3a"],["/tags/flags/index.html","a395b1c9c6228fde384e14e5b2667f70"],["/tags/footer，页脚/index.html","c12aec0469884244d484dda0f958391e"],["/tags/galgame/index.html","35f687b971beb3c81fbf805142cdb632"],["/tags/git/index.html","70f8019c9cd9cc3bc5e80967fbe92145"],["/tags/gitcalendar/index.html","1adc52a82bfb03393f78bcf8e82be072"],["/tags/google-voice/index.html","784cecbf1a1f3ab1e8ee0c50d2e2a9f3"],["/tags/gv/index.html","725d137d9d89ee8e420274ecdb2c3d29"],["/tags/html/index.html","5bb5698dabb47de5944c8efba256ce7d"],["/tags/index-1.html","41fe11b860c68b492c18c1d6c9e4aedf"],["/tags/index.html","4faad015bd38d09323522806357221a4"],["/tags/js/index.html","c3ef03fb259defcabe5b3ae52953aaea"],["/tags/jsdelivr/index.html","c9303576114bf9d84db3fceda5f804d9"],["/tags/linux/index.html","9fe383c33ab3c53fea07ffdab0690a7c"],["/tags/macos/index.html","e691be260babefa925021246b5022673"],["/tags/madVR/index.html","29f3abc1fde15a99d6936ead88cb8e0c"],["/tags/markdown/index.html","3793091ad0a47dc9b59a17fb431d8637"],["/tags/maya/index.html","6fd02301535243452a3ff555f4de2ad0"],["/tags/mklink/index.html","1b7050afbc6ab43f96ef52bee19b6004"],["/tags/office-e5/index.html","0ee8c6bc336fe3a78d6998fa35b5da58"],["/tags/onedrive/index.html","ffbb671f83748498617d9100864e1f99"],["/tags/picGO/index.html","1736caa629b34ce250a6a9bcc1363878"],["/tags/pixiv/index.html","cade8254cafd5a427fd0fda7154e9b56"],["/tags/potplayer/index.html","db027da036f927afcf2fee1c7cad73f4"],["/tags/proxypool/index.html","73909e809c1eab6aa3e0adac16ceec4a"],["/tags/qbitorrent/index.html","7e585fdca280fb4eb1a09c68472a1ad4"],["/tags/raidrive/index.html","3bdcb82049571b72ab655ff904207837"],["/tags/screen/index.html","322ffa478660ed6307ed824ee56fa918"],["/tags/speedtest/index.html","b71835fec0f5316ebf234edbf5244312"],["/tags/ss/index.html","1472dbef2b6096fd35c26afbb09ac7aa"],["/tags/ssr/index.html","b1f6c97bc39d89f4a2bd8870f628575c"],["/tags/stickers/index.html","3cc4e08bbac15fb61c415fd7161cec5f"],["/tags/surfboard/index.html","8a8c2fce98005e34df837a1025c53efb"],["/tags/tap/index.html","4e0446d73ef5f7a61f7e17ab06ba89eb"],["/tags/telegram/index.html","8d1b1eb04fa86cba38328c04371f7174"],["/tags/telegram代理/index.html","944c21e0dd830398155b001baa5ecac5"],["/tags/tg/index.html","5b6e690583c0f9d35388c804ca633a6f"],["/tags/tg代理/index.html","748b20f7bacfe7e3dedc13950e18bc5a"],["/tags/top50/index.html","222dd3b4db31063b3f7a6d69a18e4b76"],["/tags/tracker/index.html","1e42572fbaf1df5107585a0816d17a8b"],["/tags/translate/index.html","9dff7dd0b5131bd9213750b9ebefc109"],["/tags/translater/index.html","1e5373123a4d5d1c8bf46e10e8202ac4"],["/tags/tun/index.html","e2575d62f1f72ed90f485ad51cc4d6b6"],["/tags/typecho/index.html","d63bd294f946f84024e5fa4ba2acf8d5"],["/tags/v2ray/index.html","c7c31ccba1e69a4180e0985578fa8478"],["/tags/vpn/index.html","abcee76a09e952f4a9de8190cbc1a622"],["/tags/vps/index.html","687c77a33558c96237a8d15c42041a13"],["/tags/windows/index.html","30be07f4b10014edb16774cf1a4f44ac"],["/tags/windows端/index.html","9e837a003184abb3ebc23ecd4b216a00"],["/tags/xray/index.html","b627004f605348ce3514de3ed6cda019"],["/tags/下载/index.html","58c73777cf3d5e6d9bed0322fde2682f"],["/tags/不限速/index.html","3e4ae90b024d458f0ae6064d5a36fe25"],["/tags/个人网盘/index.html","9d0811bb3e68f164ea5cd5bd670f2e18"],["/tags/主题/index.html","216a650017cece102f73c28749801b83"],["/tags/二维码/index.html","91823a479f8edd5cf8d0445ac3e56b9f"],["/tags/云便签/index.html","b283f3de04f82eaaeab349404938ed43"],["/tags/云盘/index.html","3daae167bf7655f1cc86efd1261fc7f7"],["/tags/人人/index.html","2e11a908aada2293b83fdf227d45701f"],["/tags/代理/index.html","790ef0d56a23c00147e00109ba52eed8"],["/tags/代码/index.html","a3dda6207f10343d863e33cd0484fe5b"],["/tags/优选IP/index.html","6b97b7c6261594683b18d6ac7286a729"],["/tags/便签/index.html","09c39a4dc3cfedfb01045e8cfb5cdf04"],["/tags/保号/index.html","ef5190fb7a9ba0c1604be05f75169c41"],["/tags/免费/index.html","a03e39c5a2ff0af5760b1d6e2e058559"],["/tags/免费节点/index.html","fe2afe5f666655abdf42bd06f6149185"],["/tags/加密/index.html","a5020973d53e5b89ec73b0f2baf9bb63"],["/tags/动画/index.html","5be138faf20a233dc948e123d8538be7"],["/tags/博客/index.html","0503e868a0e8f81627afa0d35b8cfe39"],["/tags/历史记录/index.html","24fd055408b926dbe5cb8b34a6c4396f"],["/tags/压力/index.html","0cfb8a7a48c08cbbeb4bb431555ab61d"],["/tags/压缩包/index.html","0ee1ffedf43bf4b1c6042e4dee5b8d5a"],["/tags/反代/index.html","7723a47b7b0117df5cb9ab0bc1ff74b4"],["/tags/可视化/index.html","2db7a92e968e86de50e0e41b6c2c6d96"],["/tags/命令/index.html","b376bcb41dacb3719ea908bb2dc42428"],["/tags/国家/index.html","4695c61155d32ee7269a030c381397d8"],["/tags/图床/index.html","ee1de9853d0e31af3270e2e4ac3435e5"],["/tags/图片/index.html","d02f719491dc3b5062018f8f3b57a407"],["/tags/域名/index.html","b76715fb06b9ab87a7d04255dc653654"],["/tags/多标签/index.html","0939bedfecbc7d07f454a7cb5286e776"],["/tags/存储/index.html","0c4d41e58b740baf533bf49e443c6936"],["/tags/学习/index.html","0939c34b39bd5370e603e20f48a12b11"],["/tags/安全/index.html","2d5616242cef78650963f9e7b095f652"],["/tags/安卓/index.html","6d191abcdcff2db7a5baffb2a745a533"],["/tags/宝塔/index.html","b05a8c8b5418ae6a8b8e95d2250a51f2"],["/tags/小游戏/index.html","e3d5732a5030e6e0a8dbc1dfd6ef03a1"],["/tags/广告/index.html","553bc844573302836f69c1622009f542"],["/tags/建站/index.html","f2639071b40c13451485d75cfcea7dcd"],["/tags/影视/index.html","b430df45859b9e14c3db3da1c0a5b27c"],["/tags/微信/index.html","5f89a5ca6443c774679e6a3fadaca6f8"],["/tags/快速启动/index.html","625761e49b3b3239fdcd3936b0f0542c"],["/tags/手机/index.html","27db7c433a22fb54c0a748d465fcdda9"],["/tags/托管/index.html","68c14aeda1621652135b228e02206d27"],["/tags/抓包/index.html","53bf7536bd85b5754ea2254c28f7f4d3"],["/tags/抓取/index.html","0e8f60c097cc6571797074db65ca6476"],["/tags/投屏/index.html","028360f08ffb898baf78de268f42ab56"],["/tags/拓展功能/index.html","b8531c460dacde89eeedac17e2c77bbf"],["/tags/挂载/index.html","843ff25aec9913815569571b09a640fe"],["/tags/指纹/index.html","79513cb29b4408c87baeb9d478e49143"],["/tags/接口/index.html","3b9a2d400ebe97e36fd84fc187332af7"],["/tags/提取图片/index.html","6155666f91903629f829be584e07788d"],["/tags/插件/index.html","47d890829c43012c3cbae6a2ece8abf8"],["/tags/搜图/index.html","95c9d4dfea6276ca825665222cab6bc8"],["/tags/搭建/index.html","320f2b1683c6362c196de224a8a1317a"],["/tags/撤回/index.html","5e6fc2ecc367223654d5cb2a48c2e217"],["/tags/播放器/index.html","80dd631bba958d2a70e914f37ac72690"],["/tags/支付宝/index.html","e1cc7bc59c6ab90d585b9e7a652f2142"],["/tags/政府网站/index.html","773c9e2ffd7c1fdad891e218c8ff5918"],["/tags/效率/index.html","90909eb642b7fc05a94d73c317542d71"],["/tags/日历/index.html","af587952d4d533f9d498191322e761c9"],["/tags/服务器/index.html","fc5970b4832b9f657d8e6f6e47d8ab73"],["/tags/机场/index.html","4b2b4c0d3ba269b490826a0c59d62bf2"],["/tags/桌面/index.html","558690dbf593cad45d881944ad483214"],["/tags/梯子/index.html","985c7c8c0a9ea7e4f0b878cd3770372c"],["/tags/检测工具/index.html","b66da923f8f971ad6495a2d44c91a307"],["/tags/汉化/index.html","dc20f5c06a31fda0a6268375dbefa82b"],["/tags/测压/index.html","a9891bde3a7d715ac3c4589a57b1d83c"],["/tags/测速/index.html","7899446895627288692989b0ee617eae"],["/tags/浏览器/index.html","d5de33e45a3fb9ac36a73f22eae54381"],["/tags/清理/index.html","9f4c768fe345be101631ec2db0c04b93"],["/tags/滚动条/index.html","87522b1415ffe181c48284a38911cfad"],["/tags/灰色歌曲/index.html","d118a59fc76784b96f0e95396b960d7c"],["/tags/电影/index.html","9568c70cc4716abca5835a3be89dba87"],["/tags/电视剧/index.html","7aa3d4f0feee2a6e9c57c8a0e5c8a0a8"],["/tags/白嫖/index.html","2e1d38796dc75add30810c0fa35c036e"],["/tags/百度/index.html","f148dcd13209463dd6f1c4ac0b3dc3e1"],["/tags/百度云盘/index.html","187fd726e1b9ee9796dea332cb89870f"],["/tags/百科/index.html","0cd43ed8ab71e6c7464fa9b4248fdcb1"],["/tags/短信/index.html","d82dc4a9243cc83f2543f5c1b9d23afc"],["/tags/硬件/index.html","3af35e66c939d5ab4edb33f251db6277"],["/tags/科学上网/index.html","35993d7778a24a64f216707a53d4e928"],["/tags/空间/index.html","4078809d288378338e119e1cb81ea6c1"],["/tags/笔记/index.html","472c6a64711d67370b977cc0f0efc350"],["/tags/简洁/index.html","401f471d2a885d05a25bb8fe1cceebd3"],["/tags/简约/index.html","b60d75a78b2fb74760c5b417324bd23c"],["/tags/维基/index.html","942d135e630f850413e9f19dadff6987"],["/tags/网易云/index.html","a57b7f7736c50765eb4ea508254e2da3"],["/tags/网盘/index.html","bbefc14cff0a0547a23d327f9793b135"],["/tags/网站/index.html","603dc470b44ef07ac16b11a51e4c896a"],["/tags/网络/index.html","0f8073a87a44db90fb88a98e0ab68e5f"],["/tags/美化/index.html","73984e60e959a9364dbbdaac8cab5461"],["/tags/翻墙/index.html","88922afe43e382d8c80342041835fe81"],["/tags/翻译/index.html","e490efbf67b670fce11970017736e2fb"],["/tags/翻译器/index.html","19f25307624c18ef1b058872c5f4966a"],["/tags/聊天/index.html","1e9392eaa61e4ce3b2226e2de4bf987c"],["/tags/聊天室/index.html","16f6881b8989ead4606a1c26270c0bc0"],["/tags/联想/index.html","da1f9959804c5b8ca3d99b3dc3cccfa8"],["/tags/节点/index.html","56309b484c5a87cab747fb37803cf06a"],["/tags/虚拟手机号/index.html","52fa51b717581c81a69163498558a024"],["/tags/补丁/index.html","16b70ccdb7e2368b7e283e60d203b057"],["/tags/表情包/index.html","9f5754fb3876296775d698c751c8120b"],["/tags/视频/index.html","b63e94e484078145c5996370798e9c8a"],["/tags/解析/index.html","2d03e2cd2574533a8a332024004c4113"],["/tags/订阅链接/index.html","1ff0c1bf0d7ede3c09b708bd0d68b4c7"],["/tags/记录/index.html","63a6ebcf7b57952fc9aa3f12e1251d28"],["/tags/识图/index.html","12ebf1d1efe39292d258966bea19bfb9"],["/tags/语言/index.html","b3ef58b7f45fd423924ea66f905b6adb"],["/tags/资源/index.html","3db025e80bd290aa52e99b857a9a01e4"],["/tags/资源管理器/index.html","efdb978a78569b9ea80838da1733c5b0"],["/tags/转移/index.html","430db357996d27a96e5bc1d6453c6ecb"],["/tags/软件/index.html","8dbb24e505710426f7b4155e83169788"],["/tags/轰炸/index.html","7d56c4c0f0e99d51704a03f63eca622d"],["/tags/迁移/index.html","889434258dd698779fb0c9eabadc9fa3"],["/tags/远程控制/index.html","abf8627c59a4dcd36d1d1c560eb46ba6"],["/tags/连接/index.html","d7013eab7d9a124c22124b2a1abdd3c9"],["/tags/追踪/index.html","3a1e9a72093abfa7327b944e21946aae"],["/tags/速度/index.html","a8b106db01ea36e8b02dbfafef16b9ca"],["/tags/邮箱/index.html","31b686d3dacefcef044c4b1727055567"],["/tags/酷炫/index.html","911c0478fb3d0f99a1afa8d699f16d82"],["/tags/钓鱼/index.html","da0f7f6d64bd5c286f03e9690ea1e03a"],["/tags/镜像/index.html","0b6e90ae1ffb3503fc24c3f3fb527a9c"],["/tags/随机/index.html","54148a6bf394aca1dc5e0a4fe6c0f072"],["/tags/隐藏/index.html","fa1a5d33f3eb6ebe5b0edefc4b50e83f"],["/tags/面板/index.html","e7ebbd70a7b350864b5057c42fa03b1d"],["/tags/音乐/index.html","715a6b473f254ce620adda3ee07e1f9e"],["/tags/高颜值/index.html","9fba152e15ea1585d98911c6f4aad318"],["/tags/魔改/index.html","e126c7654ec6ea67eb2ba307aa332db4"],["/tags/黑名单/index.html","de67f08213771949cfc09e96d28c541a"],["/urls/index.html","72d5d8cbc6d8b8ef6c7679fed1d63aa4"],["/vps/index.html","75bdb04940793b7d95a106266899fef5"],["/支持/index.html","1b8cf121e81b8a49a2d15d8c0c166854"]];
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
