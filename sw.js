/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","cf110d5a23173c03bbb6ca37a941c0b9"],["/2020/11/29/clash-windows/index.html","b5b75e08e60ea119089d978eacb09c34"],["/2020/11/30/websites2/index.html","20ca6b0be9f3b7d24441c315c59cb2d8"],["/2020/12/04/iphone4s/index.html","ed1efa1b5829a31b837f94858180b7a5"],["/2020/12/04/onenote/index.html","77a3b88eac3ecad0939f7134706aa780"],["/2020/12/04/wesites1/index.html","06ebfbfd981668a8eafdff266d81a5ae"],["/2020/12/06/nokia808/index.html","b364842639b87d7a765d264cf4fc7fa6"],["/2020/12/07/ipad1/index.html","67e337dc04475450c6b52a3fe284a25c"],["/2020/12/18/freesubscribes/index.html","d71ace0ed87fb5fdfc247f0285ed4777"],["/2020/12/19/musics/index.html","f7ee3a8d163321f1bb18bae1ad32e0da"],["/2020/12/19/shadowrocket/index.html","d48e0b678d0f971f20a2c763b5599a8f"],["/2020/12/19/v2ray-windows/index.html","c5f186df440a799e694e36d0253a9977"],["/2020/12/19/v2rayng/index.html","b82f9def74dd5d5d749747be04041ee9"],["/2020/12/20/beoplay/index.html","66356cdb9baef8379adaaac7694ac567"],["/2020/12/20/订阅链接转换/index.html","ee2946adc12e8e473536b3466cc98d54"],["/2020/12/21/chrome浏览器下载提速/index.html","515d2fce191f6460c4833eeb8e42f910"],["/2020/12/21/免费128线程并发下载xdown/index.html","f3687a7cd1965a2552755cfc1401a716"],["/2020/12/21/免费32线程下载软件ndm/index.html","9abbef6a9a48cb3b04e15fecb0b1e338"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","7e5c1c0dc34ace04c2e797077b5ba0b9"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","8808f24be32e3df1519489fba05095ae"],["/2020/12/21/广告怎么知道我在想什么/index.html","60efddc4423bac0571a30d07844f6d23"],["/2020/12/21/无名·引子（小说试写）/index.html","9d34e95d5d7332d01bf0e2bb49b362c0"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","252d542e709056fb5c9aed96d52d7c4c"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","07f68b36b2d4d558aed53c5224b88ae8"],["/2020/12/21/高速轻量下载器aria2/index.html","10c914940e32f54bfcef2d7f77f740fe"],["/2020/12/22/2020-cee-roo/index.html","733107a7805140d07dc88b318b6eb2af"],["/2020/12/22/firefox插件、github、steam富强/index.html","82bf28e5fc46e1278a537b238187bb39"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","792f1c401da5e5c8e301288e1549b769"],["/2020/12/26/python-day-1/index.html","f5f166b8fe7a6789c0ab6daf661eb61b"],["/2020/12/26/python-day-2/index.html","ec9aecf577d01109cec05129b7f1e4e6"],["/2020/12/26/度盘不限速下载方式一赏/index.html","3d2a7388787be51f437d73b7794a539b"],["/2020/12/26/添加开机自启软件/index.html","fe92dc4cfe06b7d3cd3d72423ee73464"],["/2020/12/26/电脑端截图方式一赏/index.html","c55e356d3105c868996a5e9b0ed9a7f5"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","c0138861ed990e019acec1af618402f0"],["/2020/12/27/最安全的浏览器tor/index.html","fff88ef06a61f2cde258bd43882eb8c3"],["/2020/12/27/网易云刷等级和听歌数量/index.html","fee73f1c313f862e8f011005864e20a3"],["/2020/12/28/freenom申请免费域名/index.html","f0a8b557829c8899a90cfe938ad365b9"],["/2020/12/31/机场/index.html","71f233ccc18e23d92e34eecd3f1bc319"],["/2021/01/01/M1/index.html","6aa744bb8d7e192028c28945c03bba60"],["/2021/01/01/compress/index.html","fda536196f4ee6778e2726660c2c0f80"],["/2021/01/01/infinityfree/index.html","f3440d17ab3d5a04a23083668c48b53f"],["/2021/01/01/硬核翻墙/index.html","bbff380af3e329fbd90f5626eee4f4c8"],["/2021/01/02/qq/index.html","2402588c9f3b9635593bbb4fee35ccdb"],["/2021/01/03/netch/index.html","5dba4e7989ae0800434edb59754246cb"],["/2021/01/03/waifu2x/index.html","c1211df1069c44d7684dbaee88a7f574"],["/2021/01/04/ads/index.html","9d84fbe9b182164825cb0dc98e678230"],["/2021/01/04/games/index.html","94d1b1249a48d0a171c77533d56b8b89"],["/2021/01/04/heroku/index.html","62b3f089aa090deccb93bac957341b66"],["/2021/01/06/movies/index.html","03b63a57943af017997cb8b76230d903"],["/2021/01/07/google2020/index.html","2b9dd63eca1118201ff5105db4a5d63b"],["/2021/01/07/lucky/index.html","11849433cbb8b2c2da542f453d7683ab"],["/2021/01/07/spotify/index.html","a5f207aedc4cf9e955728f4bf88c4c9c"],["/2021/01/07/thunder/index.html","c6d85d19d2f2dbfc18f7e253531b8e13"],["/2021/01/08/adguardhome/index.html","dccd4e2452b4383e11b80393af6b166c"],["/2021/01/10/IBM/index.html","59f64f751f0702ea4e025701da799a21"],["/2021/01/10/potplayer/index.html","b4db7e1fe89e0ea0ab37161b850a82aa"],["/2021/01/10/sakuraanime/index.html","d1a93597fc44e7f42a1952592f9dd68a"],["/2021/01/10/美剧星球/index.html","9a243cde0cfdd03b18bb2d2890a7f0ed"],["/2021/01/12/telegraph/index.html","b928c11361ba8981660f6a040f943e0a"],["/2021/01/14/comics/index.html","9d6c7f401bf8ce964f9c2bf0e4635704"],["/2021/01/14/ftp/index.html","29de75d9ce70c7f52610db14559ac401"],["/2021/01/14/oraclecloud/index.html","a4dfaccef8cc8d0285e959e8f7c6a64c"],["/2021/01/14/porkbun/index.html","5b082600e06e6e056ca47519132e3a83"],["/2021/01/14/powertoys/index.html","69cf900b3f014c3c959e2295c748cdf2"],["/2021/01/14/taptap/index.html","ae9ed0e6984fe31097fd72c7a96ef11b"],["/2021/01/14/ubuntuvsftp/index.html","94ac82a0678e1922a7dab032df0c8fec"],["/2021/01/14/小说/index.html","80868bf46ee6e6029ede1254e6c4cef4"],["/2021/01/15/freeproxies/index.html","da853529ab825f486eace6b6a83444c0"],["/2021/01/15/incaseformat/index.html","5acd87ee2d46d140e6e834d3d639ef45"],["/2021/01/16/euserv/index.html","fce370a8b4d655cb1173fced9ff37c0d"],["/2021/01/16/winxray/index.html","9d1e5feca6cbfd19439c1ad730d7bd66"],["/2021/01/18/qqreadhistory/index.html","657e8681675c2dda918ff141c9b4737b"],["/2021/01/18/qqrevoke/index.html","7f91176d88f3304380a8fd07784a1a8d"],["/2021/01/19/freevpn/index.html","fdf7d2cc6e847ddff718a6df0df949a5"],["/2021/01/20/browsertrack/index.html","756fa8d11078e876f319d5974c5f2ada"],["/2021/01/20/v2ui/index.html","c2c74b555713d03f211d7925ac69df27"],["/2021/01/21/failedtoconnect/index.html","9577d71fc8ef5d00732eacd85202cef7"],["/2021/01/21/gitcalendar/index.html","a3227f67d4b346ed34d15a6b10e9deab"],["/2021/01/21/markdownformat/index.html","11ee121509296f4298b3c9afc88bcfbe"],["/2021/01/21/markdowntable/index.html","7fef0176cab678877672e88cdb77de6d"],["/2021/01/21/vercel/index.html","06f3fe16ed7a7537d30ec3a6f3d9c8f6"],["/2021/01/22/hardware/index.html","bfe1cbbe2ce07ff7144df0955ed27e5c"],["/2021/01/22/muviz/index.html","e43eb07e4ca93d752a76ac7990dc889e"],["/2021/01/22/randomapi/index.html","e2b108b2b632baae1fdbbeb4ec6190a8"],["/2021/01/22/searchimages/index.html","5f60ddd88d53dde697e9de4125675b72"],["/2021/01/23/RX文件管理器/index.html","3ed099559fde212674241ec2696293b9"],["/2021/01/23/chromeflag/index.html","67a0cdbf0791ef7da377d8eed809306e"],["/2021/01/23/qttabbar/index.html","c8821262a064785977f0fca440738568"],["/2021/01/24/githubspeedup/index.html","726633110b468b6fc1efa0b966e0201e"],["/2021/01/24/jsdelivr/index.html","793192eca368cf1f781e18ee97cdf7ce"],["/2021/01/25/note/index.html","acf5beba477c058bb937be482e6c4a3f"],["/2021/01/25/soul/index.html","618f97b805af51a83a9e73b11a43ca6d"],["/2021/01/26/herokuxray/index.html","6f298416e7b9c5f291be70abc8d8afec"],["/2021/01/27/proxypool/index.html","ca374a1c028f032c7815e5c2adb2b9b9"],["/2021/01/27/tracker/index.html","06cd9b20a41af066bb8d506e2767f458"],["/2021/01/30/pandownphp/index.html","f068aa205e620de8852916fdad8add16"],["/2021/01/31/newgroup/index.html","7c43f4f39eec01697d57e5310ef8ada9"],["/2021/02/01/clashlanguage/index.html","14023ce8839a3d515eeb95a67b5b85fd"],["/2021/02/01/encrypt/index.html","81aa99be6a3d32cb7d029725e34c052c"],["/2021/02/01/footermotion/index.html","b3469ce24fbb2045580f8d9f62a11053"],["/2021/02/01/gitter/index.html","c6ed6d434bae10d15b1cdee19e9d6331"],["/2021/02/01/pixivtop50/index.html","78fcd7abaa63f08610446d6c23006c52"],["/2021/02/01/scrollbar/index.html","0ec9998c8e452551922346b98a6f6292"],["/2021/02/02/clover/index.html","a243bf442599bdc44643bcd267a15aa2"],["/2021/02/02/maya/index.html","929b3fd19972f79a90582ee26d1047a2"],["/2021/02/02/speedcontroller/index.html","a3d2852f38906cfcbae6f57d15e6663e"],["/2021/02/02/yesmusicplayer/index.html","5992580fe8a5b9136302cab172e2711a"],["/2021/02/03/lenovoonelite/index.html","77816ccb87b3c5f3c5fd1068bdd72a10"],["/2021/02/03/skipads/index.html","b8aaef84663a65e7c5123b679dfe5daf"],["/2021/02/04/picseed/index.html","e0d74bf45ec1a333fbc068aacd751a86"],["/2021/02/04/renren/index.html","2f6ddfe3f55f4d7d367a844b2987fd3d"],["/2021/02/04/serverstress/index.html","bab01e50da32cff7d7aa93a7a90db292"],["/2021/02/04/wikipediazh/index.html","c74151e6c4f09bb6a0c9e226d21a137d"],["/2021/02/05/googlevoice/index.html","4ef43992e65c3ce0ba4db3b41e0fe1f1"],["/2021/02/06/clashconnection/index.html","b2f15dc46c59972d86cb7109295786c1"],["/2021/02/06/gvtransfer/index.html","0c32d7058928f5062d7c564dca2be056"],["/2021/02/06/todesk/index.html","a4e6c4914b984cc33884259cb2ded941"],["/2021/02/06/vpnblacklist/index.html","ff3d7ced2d0ae42e7c9d21cfdef15784"],["/2021/02/07/mklink/index.html","e595d9c88ffbca41a31c2b35f6fb53a9"],["/2021/02/07/speedtest/index.html","41ebaa65453886055ee53cb0aa487498"],["/2021/02/07/translate/index.html","83be531cb785cb122b67d6b7bb78738f"],["/2021/02/08/ewomail/index.html","00b585014548c41b7d2539c9c0e7e232"],["/2021/02/10/officee5/index.html","dae08f88a66ebecec5b44d43553d1c7f"],["/2021/02/10/raidrive/index.html","504c810d1e116f9e1219579660deef49"],["/2021/02/13/e5sub/index.html","23949d6fd2ee4c0c7236d9c7cf96e5ee"],["/2021/02/14/screen/index.html","83ffd06bd31641e610d637b5e92da413"],["/2021/02/15/clashtun/index.html","16d41c1167da2fc5f734912b9df1e151"],["/2021/02/15/messageboom/index.html","377cd768f21f147a3f250ec1267bff36"],["/2021/02/15/oneindex/index.html","0b75b485cc871f1cb2e0f81a75c881ba"],["/2021/02/16/govsites/index.html","b3e869951487b26a76c5f9290da7e009"],["/2021/02/17/hexototypecho/index.html","7256f6797a353c1f1954babd8edb8e80"],["/2021/02/19/fiddler/index.html","2a8a0183b91d1e6189b210afb482b8fd"],["/2021/02/22/potplayerset/index.html","38820b1e0f795bf7d0e20046e1259e5e"],["/2021/02/22/studyresource/index.html","7383940dd6d8d27f6f3c5605a81e321d"],["/2021/02/22/telegram/index.html","db138c91e598fb8fc844debf6b5d1a6c"],["/2021/02/22/videos/index.html","188599c590a3c70a1560f1ac51a26282"],["/2021/02/24/mtproxy/index.html","eef37f8180d37772dc3d61cbf3806456"],["/2021/03/10/catchcat/index.html","3f8275eb3a67c75e41048a76bae36052"],["/2021/03/10/neteasemusic/index.html","55f63cffdcf86f9fb19e864e3f564bc0"],["/2021/03/10/surfboard/index.html","5b18726571b6d502c8b8c311e6295276"],["/2021/03/11/vpnandjc/index.html","243a9349b653bd1d925c90d9d63f20d8"],["/2021/03/12/qrcodes/index.html","bb17592357ca3e1f91597d6f119806c4"],["/2021/03/20/qv2ray/index.html","420ef0db06d2247487b6a68310ba0e6d"],["/2021/03/22/freevps/index.html","9754b897023fd6b82f40a5af464f26f5"],["/2021/03/24/tgstickers/index.html","be699da1fd617cfb3bd0056a124100c0"],["/2021/03/25/clashx/index.html","f1ef79d9182c7f9adf6656e9589d3462"],["/2021/03/26/bingwallpaper/index.html","908bba1993c043bd53c4e7e173e4dadf"],["/404.html","0a20bfc5e1d7a2f4e3da82f9fb21ab24"],["/archives/2020/11/index.html","4e74a39b1bb2bc559fbb378d1eb568ca"],["/archives/2020/12/index.html","0cebbaddba5dfdcebd00a65bf3e26a1a"],["/archives/2020/12/page/2/index.html","e02ea699009bd455521a6d33ab03dc0f"],["/archives/2020/12/page/3/index.html","2b23e66ec9d9d8845cb63709b48d1e91"],["/archives/2020/index.html","45ef1c61c4e73c6689aca40cecc67e9f"],["/archives/2020/page/2/index.html","e89c83ca679923eadeb8e0d49e1e27cd"],["/archives/2020/page/3/index.html","7479377228a3102e482c6c0306eb9c35"],["/archives/2021/01/index.html","ca98b1ce155581f94a2c5e61e75d6171"],["/archives/2021/01/page/2/index.html","4be82734f0ab5f71438995bf45d97f90"],["/archives/2021/01/page/3/index.html","3d56069063da44078a65e86b49dbdefa"],["/archives/2021/01/page/4/index.html","720e544f73563453ff4384e2d3fa9ccd"],["/archives/2021/02/index.html","454cd8d2cfad5b6451dfa96bd241310e"],["/archives/2021/02/page/2/index.html","ad2e76a06670a1058589977bfafc6141"],["/archives/2021/02/page/3/index.html","243db917c46fb63483729905caa0feee"],["/archives/2021/03/index.html","b3c47016c8511ddc87462700b1815d8a"],["/archives/2021/index.html","841b486b1109cbe24adfd485bdc5bde7"],["/archives/2021/page/2/index.html","37f327a29a417e1712cfcaada7df8b72"],["/archives/2021/page/3/index.html","96790b874cfc9339b785d39ab61ad6d6"],["/archives/2021/page/4/index.html","5e3c782ca7ecb9c231c3c6a16111a9e2"],["/archives/2021/page/5/index.html","7cd2579f0a017ea1c0fca5570e97d44d"],["/archives/2021/page/6/index.html","5b392fa840cdfbc86ed577df6773238c"],["/archives/2021/page/7/index.html","574790602c0951ade24e03e45e4d7531"],["/archives/2021/page/8/index.html","c64c3eb7b1609a74db21914c407b8fb8"],["/archives/index.html","eb9ecfc7610574eb40f4f040a178b7d7"],["/archives/page/10/index.html","4cca1db62e857be9a0b0912c39aa0b4c"],["/archives/page/2/index.html","1c3e38b1ae846561e77cc36fa8f395cd"],["/archives/page/3/index.html","181913d55c8cf3b2b5cfb2c4c4d166fa"],["/archives/page/4/index.html","91b1d1b46ebf6149cf37889b8ef3332c"],["/archives/page/5/index.html","dc0a61777961483302426f63b796c5b5"],["/archives/page/6/index.html","c5b988245249148e12168a26187fdad6"],["/archives/page/7/index.html","f77ba10dd1c75b217670affc058cf09f"],["/archives/page/8/index.html","42ce84e080c7eea88d448e66d2145395"],["/archives/page/9/index.html","7e17e58d405148955f65e8725cc980d0"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","de1bdf7a602b85a2d87a0b97174aa835"],["/categories/index.html","8487100d6039cc7afca018c1a0e4db78"],["/categories/下载/index.html","87f715e485ad1265553ef5fa45f076bf"],["/categories/安全/index.html","4db3ddb1f04c58abf53984cc25502876"],["/categories/建站/index.html","4358767b32563f8412950f8d7fa097d4"],["/categories/杂/index.html","4c592e71732081036f8a234ba68c2713"],["/categories/杂/page/2/index.html","81bab1dabe333832356b7c320310d76a"],["/categories/测评/index.html","969316d779377d57006541879e5ef46c"],["/categories/科学上网/index.html","ff8fb1ae2a85e32054ad81501974a459"],["/categories/科学上网/page/2/index.html","aad4a64f1de6a447d6147bc28f5bd563"],["/categories/编程/index.html","e5ed1e0e7d396a6f34d5bb1e087f4f51"],["/categories/网站/index.html","d4d2ae58b0827041c7a05e36ed28b3da"],["/categories/网站/page/2/index.html","1ccdf3c4195fc12d6657d8c74933d933"],["/categories/软件/index.html","34968c1f4d97c5a94417a4acd17278fe"],["/categories/软件/page/2/index.html","4b6aa31f2cc4cd2a08995eeba855772c"],["/categories/软件/page/3/index.html","b625ff092f14341d8f898efc3b12b62e"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","d19941e4d57200fa5bccdbd5723264cc"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","48cfcec663b2b9a0fcf55a41ef5a96b9"],["/ios/index.html","1ee8f2d2e4faa24e9a15544f2e692f64"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","a48ea97b5c31d59be21dd20010496f91"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","afa364b0442da9205fe97e4d170b5e56"],["/page/2/index.html","0ecf8822064df46ef42fed14596783a5"],["/page/3/index.html","c779bafeb6dbf0ef4a632f2cce8adbec"],["/page/4/index.html","bd9b64933ea3be839837f230bf677ff0"],["/page/5/index.html","138b2994bc7642b7fa362d726cd38135"],["/page/6/index.html","4077d83aa8ab679f60bcec42a7f35f3f"],["/page/7/index.html","1161cc3b6d65150d90a0dc51792d0ef6"],["/page/8/index.html","dbc1391159e6bfea7af8495481abd3d8"],["/page/9/index.html","2a5ebe24bb984cd7c3a95892982e7b2c"],["/payment/index.html","21a2ad39a604afb5d7060c21f1b74991"],["/privacy-policy/index.html","68b39f0089792a18bc90cacd274c1560"],["/rss2.xml","4de761da6c1f6a6b584be22c42643031"],["/search.xml","609478c792436d4b3f34685c9615b64b"],["/sitemap.xml","fb2c246bc6f1d68f9fc04a5a5cfc1ebe"],["/sw-register.js","b195959afe6ac76e851fedc945be4283"],["/tags/5t/index.html","415ae7421dc694979bee69edcd5a0584"],["/tags/Bing/index.html","ea2b11bb34d44e17ab247e6c74dc8e40"],["/tags/Clash/index.html","a952ef178b839283aa6633bf6a9bfbe2"],["/tags/Clover/index.html","4f5696ca9ed8b679b2676ae38a16b0f3"],["/tags/E5/index.html","1391a4fff315a62e2dca3aa9bce66176"],["/tags/FTP/index.html","76b3f410775828d6594c008acdb0cd0e"],["/tags/GitHub/index.html","0c56d76e5e747309c9de7baa6bb0d44a"],["/tags/Heroku/index.html","52a4526ffc077c1bc83e645a9fc60060"],["/tags/Hexo/index.html","f2e0b7998aaf297c6e14e5c7907749b4"],["/tags/Lenovo/index.html","ad996fd74bf89a707a6e31dce62dbba0"],["/tags/Oneindex/index.html","924ffffa1c0f5ffd1635267d693243b1"],["/tags/QQ/index.html","6b15f711ff00605d524c147623eab02e"],["/tags/QTTabbar/index.html","d931d0a6a70d8e9abc74db45b55c7683"],["/tags/RX文件管理器/index.html","96489e5bc86962516a5d0cb357c96456"],["/tags/Todesk/index.html","bf84d060c13eba458764cd4f16a054aa"],["/tags/Vercel/index.html","71b19d89381c08116f55be257c8704a4"],["/tags/ads/index.html","a6ab1bf345668c20ba609aba0e4b95c5"],["/tags/api/index.html","c6177da934c971cb6cceba23c9d046ee"],["/tags/app/index.html","3c4406c46e367a9c915b8a94824ab0e1"],["/tags/blacklist/index.html","3566d3f25fef35a70203f2da5e64e101"],["/tags/butterfly/index.html","621e9e47bfe6b39c9ee46f3b28617f28"],["/tags/chrome/index.html","27e979e0006a68bc1811f50e4c15a234"],["/tags/clashx/index.html","1dc017897c36e8d8e8c2af415cfa55ac"],["/tags/cloudflare/index.html","f5febedeff5838b82bf47571f7ce6e6b"],["/tags/cmd/index.html","6acf61270dbd3517793c7efe12b82a94"],["/tags/c盘/index.html","d689dfdcc339736c46ebc07ddefa9b31"],["/tags/email/index.html","2d9dc32916a2492e94ba72018afdc91f"],["/tags/ewomail/index.html","95f07218adf6b83add63e9c549bccd56"],["/tags/fiddler/index.html","57e038a481176e9a3a01fee93a72c8a5"],["/tags/flags/index.html","5fc9db4db909eaf736061e5fe122d8ca"],["/tags/footer，页脚/index.html","34ad152cbcabd99d6a1d249730e30c06"],["/tags/galgame/index.html","6245fbd530ca17ef8193a8aae75c1919"],["/tags/git/index.html","545fac50c43023aac879728119abb1ff"],["/tags/gitcalendar/index.html","0ad532eb5f2fcaca565d03f26e5af438"],["/tags/google-voice/index.html","4dbbc326e7e0a6e824e8a0380e6c28a8"],["/tags/gv/index.html","d8f0c3d773581c95d41ab4d0309379c4"],["/tags/html/index.html","4ceebbfef178bd48d676cfd52b628513"],["/tags/index-1.html","d71be1d2596bf324aef3c060548edf9c"],["/tags/index.html","05cfe8598d44b1e5bb27959e7be2fa67"],["/tags/js/index.html","962a256e4af7940670903989595df6d0"],["/tags/jsdelivr/index.html","4ce87dc3e524893f6e6eba660805595a"],["/tags/linux/index.html","6f14c35358656a53ca9ffa3c96310d09"],["/tags/macos/index.html","1f932ddcd7bbeca0bf96092870a4949d"],["/tags/madVR/index.html","5a7062703544ca6f778284437be918bf"],["/tags/markdown/index.html","68bcfe0de65080ae3753a18e0c1d7994"],["/tags/maya/index.html","38f8b70a8721277d2db2c365ad3ccf48"],["/tags/mklink/index.html","543bffc9cb4a727a1f17ba127816f909"],["/tags/office-e5/index.html","e171073504203698ae4abcccc29e413b"],["/tags/onedrive/index.html","9661729b8cb3ccc2a0380af7330ff3a8"],["/tags/picGO/index.html","219655016a4d995bdf93644cf519fac9"],["/tags/pixiv/index.html","6d2bc565f30dd316b3a084da0168966a"],["/tags/potplayer/index.html","53a59de7aab66aabf3f0ccbfc562e824"],["/tags/proxypool/index.html","7f44c57a5f37dd7bb9c4ac3ff50957d5"],["/tags/qbitorrent/index.html","8752340806736c1f7a007cf3a54181bd"],["/tags/raidrive/index.html","b5e4ae4a5810459f5e38fcd2fb824997"],["/tags/screen/index.html","68a9a10b437b7d02ddcbc0057f713e4a"],["/tags/speedtest/index.html","96deba415a1e28bc4df7ce6a13d154f0"],["/tags/ss/index.html","0cdd057826d5a2e06be2d887c0f427c5"],["/tags/ssr/index.html","ba067c030b34afe58cb676c63aa64766"],["/tags/stickers/index.html","46b5b2685b54006976a8e29ed88dcc30"],["/tags/surfboard/index.html","9531c3dd1229c83303c4899a2c35af4c"],["/tags/tap/index.html","2206088acf5f3d47aa2933bdbe710b7f"],["/tags/telegram/index.html","cf11b2f53934003da72e8a5c94af596e"],["/tags/telegram代理/index.html","008b0125873bd53488ca6b1c1f814512"],["/tags/tg/index.html","1187e9738b4965be886cffa43583ee72"],["/tags/tg代理/index.html","6d3b5ff7aa4ea2ff3520454ed120eb54"],["/tags/top50/index.html","cf3df532fe26deacf802332cc559c566"],["/tags/tracker/index.html","4130f7176cf96ffcefaaad0d5801b559"],["/tags/translate/index.html","1dd830c0f49cf6f74faaa584c98a0559"],["/tags/translater/index.html","2a77fdc15dc97c106bfd982b57869f82"],["/tags/tun/index.html","4e7f1ebea54d5cd650ad3f523c4e3037"],["/tags/typecho/index.html","9fe63a8009c9ff1935d7d73e4535b170"],["/tags/v2ray/index.html","6595866a72c536dedf02125cd80ea9e5"],["/tags/vpn/index.html","637242c64c4fe7a4f8a04f1bfa42c396"],["/tags/vps/index.html","ba2555fb2770b6a88c7f5d9fd7f64957"],["/tags/wallpaper/index.html","f7b43342812bd933100c191682e17dfd"],["/tags/windows/index.html","fd04bd6e3fa15715eddbe6b412d648ec"],["/tags/windows端/index.html","6842cac9560aec082413803aedf2536d"],["/tags/xray/index.html","94f0bdd7108ead419fc78f3962bac30a"],["/tags/下载/index.html","c5c7ce65d9efc094d607ec25a853a113"],["/tags/不限速/index.html","ba81fb8029afe29dc53bbdcf3f9dc9c3"],["/tags/个人网盘/index.html","0745fea6d2083f1296cd01da68a3d04e"],["/tags/主题/index.html","2137a445c514d098a9c8cd105186b3bc"],["/tags/二维码/index.html","e5c05d9bd09ca4903d56c822c8b834bb"],["/tags/云便签/index.html","227615f858dcc7eaec659e4a706be137"],["/tags/云盘/index.html","daeba4048db4a3e31faac380607f998d"],["/tags/人人/index.html","0676d0325e4341ad53b2a4c48377a800"],["/tags/代理/index.html","b86e5a655e0b47184783e29fb90d6250"],["/tags/代码/index.html","953753b69ce22975ce2d1e3fa3030028"],["/tags/优选IP/index.html","4a57d9f06de2f0ab846318d95fd6aa8a"],["/tags/便签/index.html","7c66eba297260c5b414d4005f1c54b5c"],["/tags/保号/index.html","bd14a27859e960ae1b07f23b23e8849e"],["/tags/免费/index.html","b7801f42d42563ffc3f733c232259d83"],["/tags/免费节点/index.html","fb17e6f7aeca55d5f63dd37f281ccf42"],["/tags/加密/index.html","b6d89ad0fd04e18202ef5a5d5dc9d024"],["/tags/动画/index.html","94494a324c2b119daaa56e7d7b28bf2e"],["/tags/博客/index.html","bf9fb81796028551d094f15145182bbc"],["/tags/历史记录/index.html","6fd9e6e46c54240aae17982a26da2cf8"],["/tags/压力/index.html","9043f9dcb87deaf74327715227ff7c8e"],["/tags/压缩包/index.html","37a681a33b6f9b4b1f94c1fcab5ad1e7"],["/tags/反代/index.html","59458df9f455659f36f710b7d700195a"],["/tags/可视化/index.html","68908e0446532f78caeb9fd821a5ef00"],["/tags/命令/index.html","e58ee026efb0931c8968a6f427a27792"],["/tags/国家/index.html","7216a44c71f132c3281e06fd84b75903"],["/tags/图床/index.html","99889e507649b8d99090a1ade7686e29"],["/tags/图片/index.html","b618ba6f5d760ef2f324a2a23edfa3d4"],["/tags/域名/index.html","68b5d9b089e27c1f43a26b6778e2f021"],["/tags/壁纸/index.html","00a28f9b950a561b9e6b411076c79665"],["/tags/多标签/index.html","6dfe17d619c9abfaaaaebd140a4d4c5a"],["/tags/存储/index.html","5974aace1382afd623e3deac36465e34"],["/tags/学习/index.html","3d9d9209dbdc7e2d2bfdfb6cfc4c5b96"],["/tags/安全/index.html","d2ffbab856fb21a8c85c0b150e415403"],["/tags/安卓/index.html","7939113e001a4f921820ecab9afeafa9"],["/tags/宝塔/index.html","fee3b7d4360340a2b104dafdc33a6a98"],["/tags/小游戏/index.html","77c435eb2234308e70c394d29d3ace25"],["/tags/广告/index.html","bc9b111d7974e96b10cb5718a8af3878"],["/tags/建站/index.html","12099c5876fd0323e0074eb7e13febed"],["/tags/影视/index.html","349e3ff92862b2e3096c32f160a357f2"],["/tags/微信/index.html","eb840b40ba83412bd71522c4baac28dd"],["/tags/快速启动/index.html","e40bdbee70ce9ed4a168048e0bd89e3a"],["/tags/手机/index.html","4120928a2fa3607ec0c68f0d6dc0be9c"],["/tags/托管/index.html","b0fb034cf1d9120325055afb15e94a6e"],["/tags/抓包/index.html","afb593291f3e98f831e0502eea2f5f5a"],["/tags/抓取/index.html","8b2a3f505451203cc456735fa050b708"],["/tags/投屏/index.html","260edce6a0f5848bcaa9b036c7262ab7"],["/tags/拓展功能/index.html","99fb9e74d9f9ecb78b7079b9bd99582b"],["/tags/挂载/index.html","798e47384e54ec00373bf7b34c616969"],["/tags/指纹/index.html","09bb8ebb745653d68d8f1ac3dfa7b609"],["/tags/接口/index.html","e4060c307195959c1f4360b871359728"],["/tags/提取图片/index.html","19aa2dc49d8c18d573b1883a0f6e01c9"],["/tags/插件/index.html","d91d488de6a990c5bbd9bd5f19cfbd4d"],["/tags/搜图/index.html","8c174c41f4c1a11e1c4b5e0861cf3655"],["/tags/搭建/index.html","7494f4a700bbcac180dc2b318b0c225f"],["/tags/撤回/index.html","a863d0242bf444b556ac9e3b1761bc3c"],["/tags/播放器/index.html","cba00c678a4f08ce1390ef3d64643690"],["/tags/支付宝/index.html","3dc69f12e7953fd2a2f15e1807552741"],["/tags/政府网站/index.html","c5cdb3105537c70f0e1c628ddb88946a"],["/tags/效率/index.html","edca582db3279e71ffedc3f91f1defc3"],["/tags/日历/index.html","3f082d7ab8958698458cb81e8fd964d6"],["/tags/服务器/index.html","9ef07be92c624609472de4eb2d67cdd6"],["/tags/机场/index.html","e422fb022ef4219148aaf024e09b2820"],["/tags/桌面/index.html","0868b530b5d228a266670b856ef2e601"],["/tags/梯子/index.html","84e45d5d8c0d23a1b13f1b0c1713f687"],["/tags/检测工具/index.html","e5f4b53091cd911a5137278b8b861f32"],["/tags/汉化/index.html","d4b71430c4f24002f04acc04c39612d7"],["/tags/测压/index.html","e77475ecd287be1a15d08212ca3bb94c"],["/tags/测速/index.html","8ddc5ce764cf6450fa3ad96ba998972b"],["/tags/浏览器/index.html","5c501d65f0444702a828446c70157bf1"],["/tags/清理/index.html","32d1aafcabcbdec19638430d3b7d6bda"],["/tags/滚动条/index.html","2c87c08ebe7b682f0f054962cab7f7c3"],["/tags/灰色歌曲/index.html","f1a1babc86f1751d0816f334b75ac798"],["/tags/电影/index.html","1d12f1f364f5796106b89249ad82f61d"],["/tags/电视剧/index.html","0b3ee48f985295bde52fa523ab448558"],["/tags/白嫖/index.html","275ae9a5aba8ec9af7092a9ef2ed2ea5"],["/tags/百度/index.html","947d608a4e865de5d74a04d62c69e329"],["/tags/百度云盘/index.html","f1f82c0f256c13373e690ee52e9555c4"],["/tags/百科/index.html","2cfeccd2073fafe9155e62478abbf312"],["/tags/短信/index.html","c19c280f434b6299b5eb1802ad5c2da8"],["/tags/硬件/index.html","498bcecf04e6a8a053c1a6c201a6b4f7"],["/tags/科学上网/index.html","22fd10b41e1092c7902c52200385ebb1"],["/tags/空间/index.html","a57a88381cb15b219238fcf63144f51e"],["/tags/笔记/index.html","3b38f3b8f5d705bfc4390542fc234ce1"],["/tags/简洁/index.html","caf9484224bbf3568b60e5c8f239707e"],["/tags/简约/index.html","b709166cd63fc728cba272894cfcc24f"],["/tags/维基/index.html","c688dbe27710d5f523b60ea8ecc246d6"],["/tags/网易云/index.html","a5e9c2c1c5563a841e0bdee326a111a6"],["/tags/网盘/index.html","e405eca40280879021297c78dad0ad01"],["/tags/网站/index.html","6d4b3a64732ea24e91a3fd6c0966ac40"],["/tags/网络/index.html","70657b2b33403142892c3a651754a3df"],["/tags/美化/index.html","ea5b99687a958df55088a4d2eb3ca0c2"],["/tags/翻墙/index.html","51fef156c07d67a411745e12f1f7885c"],["/tags/翻译/index.html","3c57741a3712eacf7ae5a2b00ba1fe39"],["/tags/翻译器/index.html","4208ee8e719696200bf9ff0dd0894db0"],["/tags/聊天/index.html","60f28d7d689d20cf657e4b3427b375a0"],["/tags/聊天室/index.html","5f3a898b7e25d2995e7c4d1f12c4753d"],["/tags/联想/index.html","9fd7127fda7d4b7b3c1840d526356738"],["/tags/节点/index.html","9251d57d2363b9313e2b9679ea36cb06"],["/tags/虚拟手机号/index.html","a6d7a9397c694bc59e36bb7b6619f5d7"],["/tags/补丁/index.html","2f73144b59a540844e0b4cb6b4ec0719"],["/tags/表情包/index.html","f2e27f4fab16d2177959c57d804cfaa7"],["/tags/视频/index.html","212c418f2d7467c7399df5889da40ffd"],["/tags/解析/index.html","a4ead5793b24f39e096c9495d53c44f0"],["/tags/订阅链接/index.html","ca17cd842845b309f5b291280f2cd557"],["/tags/记录/index.html","a99f5a2345bcd1ad6eb6b4286cde04fe"],["/tags/识图/index.html","bea6c28dc9f940ac04c46f5ac3cd97cb"],["/tags/语言/index.html","43855875ab42f07a66bcbcfdf865b500"],["/tags/资源/index.html","0e46c0fa8fac233a457229a1b4437733"],["/tags/资源管理器/index.html","d98c22d0dcaea9834e2a220424fd90f4"],["/tags/转移/index.html","96f7ce10013af861e8162d01d44eaea4"],["/tags/软件/index.html","81ad406de5662a5cd7f0ccd95f56bdfa"],["/tags/轰炸/index.html","38ad42106de4a938cd1c1554000b55db"],["/tags/迁移/index.html","c206696168ae42df53ae4f8b75174316"],["/tags/远程控制/index.html","2f51c5c7448e544aaae59c4cb4368d4b"],["/tags/连接/index.html","79ec8d1f19039dcf86b97cd9c0298c56"],["/tags/追踪/index.html","6ca3239a817264315e79339d65cdcd45"],["/tags/速度/index.html","7c20e5791a357ce0e11676d4be77af07"],["/tags/邮箱/index.html","659fbffd9740c5922b1e041fef370df4"],["/tags/酷炫/index.html","27177ae8bfdf8696ecb5580db3936e26"],["/tags/钓鱼/index.html","94604f666dc3afd9e4cafb4d9827aa27"],["/tags/镜像/index.html","d4dbcbe518c89e0d41c17d432d86cfff"],["/tags/随机/index.html","7aab7cbe429a93e37ebb8ae85d9fad57"],["/tags/隐藏/index.html","28c322511c4d9d3b985db716a51c58f7"],["/tags/面板/index.html","d1a999b773136128f919d70049ddb5bb"],["/tags/音乐/index.html","bee9c454f3c303f6e2b0db25519c6b6b"],["/tags/高颜值/index.html","9b52f873b1a4609874a27eee0ea30696"],["/tags/魔改/index.html","a45c31fc6a8c4929a80477fea4fc7c26"],["/tags/黑名单/index.html","796d4da555b3f983853f6926119f8163"],["/urls/index.html","adca713d976d7a05c9228aba51094dd4"],["/vps/index.html","4d7627f6027c6e3bea10b436ee4c1b41"],["/支持/index.html","5a589dce6c4321d7553f3f015d27cf69"]];
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
