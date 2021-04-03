/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","97726db3f97aae5008bbc52bb89a02e1"],["/2020/11/29/clash-windows/index.html","4f5fa22f8b265403cac79471f4331bf3"],["/2020/11/30/websites2/index.html","6b5177ba3f5fa036e95da35b56ab696f"],["/2020/12/04/iphone4s/index.html","8bd629ecc443dd3d97ab4bc1ee70b2d2"],["/2020/12/04/onenote/index.html","fed4ec08af00df162e31343a6941097f"],["/2020/12/04/wesites1/index.html","44180a4ec605e38ef9c8ee6e2f02ed70"],["/2020/12/06/nokia808/index.html","fc565409c4bd754030fa48bfe9a34eda"],["/2020/12/07/ipad1/index.html","0c3805e0f098c69989f8715d79c59be7"],["/2020/12/18/freesubscribes/index.html","d8031f2b585cd01b72fbec4932461992"],["/2020/12/19/musics/index.html","d60cd003bbc006a1c56270fde59e0af9"],["/2020/12/19/shadowrocket/index.html","16f3ef10adafc9700a8b06ebf287d3a2"],["/2020/12/19/v2ray-windows/index.html","4b6f41595ecab838867acd9eeac07360"],["/2020/12/19/v2rayng/index.html","4129fee20c124b32b7909005128913b1"],["/2020/12/20/beoplay/index.html","0f0ba4ac0eb34bf27ae3f8255eff6871"],["/2020/12/20/订阅链接转换/index.html","52680a5e331a8b97d79ac68543ff8dcc"],["/2020/12/21/chrome浏览器下载提速/index.html","5f8f04a6e96f132eca4c3f89a55501e7"],["/2020/12/21/免费128线程并发下载xdown/index.html","ebbf04b9f9d8cb37bdaaa183cb6b76d3"],["/2020/12/21/免费32线程下载软件ndm/index.html","27e95b29286b71517917551c2f85526c"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","13b95446e445a22dcd15eba5b6cbf196"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","f86c4005e1d7049e990af98bce6cbc34"],["/2020/12/21/广告怎么知道我在想什么/index.html","41faa15438be2a91f4fc6c96fa663cdf"],["/2020/12/21/无名·引子（小说试写）/index.html","602f09dd2f0c17647f55bb8064eff073"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","0674280039feb665208c1daab9cac919"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","7773f80c79c3d0436f50ee8b2e96a23e"],["/2020/12/21/高速轻量下载器aria2/index.html","e28e5807f29681e0fedee039a74b9919"],["/2020/12/22/2020-cee-roo/index.html","3a0caa384740e4dc0cdeca4eb14b4d39"],["/2020/12/22/firefox插件、github、steam富强/index.html","62b53385706262452406a44d52901516"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","74ac65711184aeaca28535e01e580ef1"],["/2020/12/26/python-day-1/index.html","2cd379339ac07ea7188f74efbb2025f1"],["/2020/12/26/python-day-2/index.html","4aae867d8c3a552088271e6fbc9750c1"],["/2020/12/26/度盘不限速下载方式一赏/index.html","d00d8f12380b6db6a32f517402b5d83b"],["/2020/12/26/添加开机自启软件/index.html","275f64928659c935210248bb396ea80d"],["/2020/12/26/电脑端截图方式一赏/index.html","7a650ae11b3549e87304453e41b30663"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","5289d8511352a9bf1a3616a74381bb79"],["/2020/12/27/最安全的浏览器tor/index.html","bbbcaadb459100e04b22fe1dbca74437"],["/2020/12/27/网易云刷等级和听歌数量/index.html","86a7be8f62866e9d5f603fad48dec62b"],["/2020/12/28/freenom申请免费域名/index.html","8a72ce98c9ed81a75a805d40f01f65e9"],["/2020/12/31/机场/index.html","338f32bd657549e3ac0161452275276f"],["/2021/01/01/M1/index.html","04d9504fa0da8493d0c5b96127663039"],["/2021/01/01/compress/index.html","aa77a3196cd0c55dc6a08c6c7da742e2"],["/2021/01/01/infinityfree/index.html","bb726d8ec81eeb3013d5150544f6133a"],["/2021/01/01/硬核翻墙/index.html","5358b9e782e01e529c9a946d305ff74c"],["/2021/01/02/qq/index.html","d2b98d443d1ebec65c9c711a43b6e361"],["/2021/01/03/netch/index.html","57c0233311767437eef28fd632b55b5a"],["/2021/01/03/waifu2x/index.html","b0fc12fc29e993a99928751d4a6d34ff"],["/2021/01/04/ads/index.html","d501f16e06e93b9bb840afdf5a022c36"],["/2021/01/04/games/index.html","7ebe84904beb842d9749d1897ad25f7d"],["/2021/01/04/heroku/index.html","2ed0fee2e3315405c8ba6f3f4bef048f"],["/2021/01/06/movies/index.html","9dff41aa699ed07a62a71f76dacb1d71"],["/2021/01/07/google2020/index.html","9586ae5a7d92f145c5c92dbcad2ba659"],["/2021/01/07/lucky/index.html","219ca67cd19552bda2b813a8c4c87c33"],["/2021/01/07/spotify/index.html","6ce23c1b2d448b0ffe4d37aaeafa7424"],["/2021/01/07/thunder/index.html","19c711bf094dd06879a5b383f5f72cac"],["/2021/01/08/adguardhome/index.html","df5e9e290de41b00778451239e0cadc6"],["/2021/01/10/IBM/index.html","e3a8b329d9e433018f7461df86c93c69"],["/2021/01/10/potplayer/index.html","a1491527c60d60a1a59194e155fd1e0c"],["/2021/01/10/sakuraanime/index.html","b3d814b086606b001b7dfbe01bc1eb84"],["/2021/01/10/美剧星球/index.html","3e1be991175646762cf809168746a7ad"],["/2021/01/12/telegraph/index.html","aa092bafa5751b5b50feb8a6c4483e64"],["/2021/01/14/comics/index.html","abd6b98d31de55a308290c64947ed560"],["/2021/01/14/ftp/index.html","e7cce91cd005e4236c0086bd4593c3f8"],["/2021/01/14/oraclecloud/index.html","9791a72be2f99f21b7e6c7b232fb9d6d"],["/2021/01/14/porkbun/index.html","e0c62645f7f1ea3d0de25264162f516e"],["/2021/01/14/powertoys/index.html","3e44b9ceb9bb6134d90e78ee92318695"],["/2021/01/14/taptap/index.html","aa27aaf369f9a85ce69906524a8db8df"],["/2021/01/14/ubuntuvsftp/index.html","0c584fd86addb8ee1dd8758a7e469e7e"],["/2021/01/14/小说/index.html","5b924fc262effd6de44d623afeba7aad"],["/2021/01/15/freeproxies/index.html","ff7d9bfc9d2370794fe55eb04bd01c75"],["/2021/01/15/incaseformat/index.html","0751fb056ab541f2314cd0e2ac89e234"],["/2021/01/16/euserv/index.html","3a9d10e22414375c7aaebb6767a3a91b"],["/2021/01/16/winxray/index.html","221e099a40e7bc9500b85300da08e99d"],["/2021/01/18/qqreadhistory/index.html","91bcc455a9c953bec386c77d93c50ad7"],["/2021/01/18/qqrevoke/index.html","b19c103aed3085a1ff5b9276be475a66"],["/2021/01/19/freevpn/index.html","53c22f337cac02b67af1f2215620a80d"],["/2021/01/20/browsertrack/index.html","ed2b8c480d83cf9399ec7386aa68fe91"],["/2021/01/20/v2ui/index.html","cae752a900c08be9695a0e153ac93719"],["/2021/01/21/failedtoconnect/index.html","eaf3e46535ef31d5402ae6d119e6d3f7"],["/2021/01/21/gitcalendar/index.html","8aa782b6fb6d97efc383dd8ce7a0b3af"],["/2021/01/21/markdownformat/index.html","bf5e2035f5602925fe369618dbb09357"],["/2021/01/21/markdowntable/index.html","3d4185233f9e2d0395f0fdf0d6469b50"],["/2021/01/21/vercel/index.html","e5a5f2663302b642e074124a1f59d26d"],["/2021/01/22/hardware/index.html","7540ba65f35c6a6bc53190137525ce82"],["/2021/01/22/muviz/index.html","61665021369139f88f8a882426d476a3"],["/2021/01/22/randomapi/index.html","5b7ec59295d5a64afb9e0ea5eab93388"],["/2021/01/22/searchimages/index.html","353d8d0d041afbbf69170683cb6bb029"],["/2021/01/23/RX文件管理器/index.html","edf70848317b81f9b9c062c54468b0f9"],["/2021/01/23/chromeflag/index.html","e41f71fe840f5fb8012d95f5d506e475"],["/2021/01/23/qttabbar/index.html","3fd0373fbff312bcd60fe013a1fc52f1"],["/2021/01/24/githubspeedup/index.html","23e0deb6b0d56cdf1aa06b23248440b4"],["/2021/01/24/jsdelivr/index.html","2dd99f39cfcfec12b954b87ce4e5af49"],["/2021/01/25/note/index.html","3079792b6af9af2f74066484cfc79e73"],["/2021/01/25/soul/index.html","c3dbf4d04de205beddf225973792e5ff"],["/2021/01/26/herokuxray/index.html","ea21978e3be8528a1d0dfa57bb92ed6f"],["/2021/01/27/proxypool/index.html","5b943dbbe97d075adaac9cae938c520c"],["/2021/01/27/tracker/index.html","a424cd2408f68c8dbd35b0f40abb0b2b"],["/2021/01/30/pandownphp/index.html","6a1c25952d0fd68a9fa24a396d6483a0"],["/2021/01/31/newgroup/index.html","c2c5a0a6fdb197ea23a5a4517a5b05e4"],["/2021/02/01/clashlanguage/index.html","2a9318f4c5752d8f955eadeb212ac90c"],["/2021/02/01/encrypt/index.html","335c8266c0ba88294819dbd2ca7d1e2c"],["/2021/02/01/footermotion/index.html","856aa1b24c1cdf5bc8ab3e0469369972"],["/2021/02/01/gitter/index.html","06b0753b8ba2148fcef5d831afd40610"],["/2021/02/01/pixivtop50/index.html","145d4cfc8e2335c26da3d791f36f5985"],["/2021/02/01/scrollbar/index.html","56cbdcd4931f1ddaffc96e293d6c56b4"],["/2021/02/02/clover/index.html","32c7c3635dd2c84415f82972efd8937a"],["/2021/02/02/maya/index.html","20510b1016c34aff187c6687392671f4"],["/2021/02/02/speedcontroller/index.html","33ebe2f5e02a2f5d189e22ae38f4a8c7"],["/2021/02/02/yesmusicplayer/index.html","29d6b486383351776b56e67fe711f998"],["/2021/02/03/lenovoonelite/index.html","d83692fa829328db99ba0a1ba8ebb43c"],["/2021/02/03/skipads/index.html","6b3886a14d78171518a1eceda8b7f404"],["/2021/02/04/picseed/index.html","ecccc1c751482423b06936abb1bd1118"],["/2021/02/04/renren/index.html","534cdea7bfd4073fdf43f6d2f725a052"],["/2021/02/04/serverstress/index.html","f1b29a5dd327bf31d6ccc7ac52c344d4"],["/2021/02/04/wikipediazh/index.html","c91753844cab9a742a15a9d8e51bee1e"],["/2021/02/05/googlevoice/index.html","ba0925f776e585d7e4c6cca76a50850e"],["/2021/02/06/clashconnection/index.html","540f6793c1efd3ec58d92e450a2e7a48"],["/2021/02/06/gvtransfer/index.html","52455e5b65a667a6af890ff5beb315ea"],["/2021/02/06/todesk/index.html","fefc904b3074a8a6f408a2f3815cb3e5"],["/2021/02/06/vpnblacklist/index.html","2ca471553befbe39401c2c22ae7d879e"],["/2021/02/07/mklink/index.html","92134af6414f3ada9e9ff8f3a4ded26d"],["/2021/02/07/speedtest/index.html","3c7ebd41ab531b3a77a7bacb11de9120"],["/2021/02/07/translate/index.html","83c1ed8c3c9111fd1375b88329dfc4ef"],["/2021/02/08/ewomail/index.html","3e698c907e4592ae2fe13b587f8b887d"],["/2021/02/10/officee5/index.html","4bbd2a63c776d30069a8cea47dbdbb17"],["/2021/02/10/raidrive/index.html","00944accdb9d77a15e965f5c4707aec9"],["/2021/02/13/e5sub/index.html","0cd4bee35d5ef0e28a5a12c9dc68562e"],["/2021/02/14/screen/index.html","8bd6fae6a3230fb1ae16e6e705d63f1e"],["/2021/02/15/clashtun/index.html","4031074878c1a64b323ba9182a156cd2"],["/2021/02/15/messageboom/index.html","088f199e894c91f4539de275ba46d7fd"],["/2021/02/15/oneindex/index.html","5eeab55ff4b33339afc994b4a98431c8"],["/2021/02/16/govsites/index.html","c5f7416e174bf158c9a1de6254c1efa9"],["/2021/02/17/hexototypecho/index.html","40e36d9b32f2aee786778b279a48a7d7"],["/2021/02/19/fiddler/index.html","ad5c8722df5d00a2579c0e9503745ae7"],["/2021/02/22/potplayerset/index.html","c8cdadfd389acbd43afbfcc20788b46f"],["/2021/02/22/studyresource/index.html","ccaf3b487e394d2215edcb2972c210c1"],["/2021/02/22/telegram/index.html","e5567352425a679ee304eb7506685349"],["/2021/02/22/videos/index.html","df963cce536610ca8a83602bf5c76f2a"],["/2021/02/24/mtproxy/index.html","f4066790841309c76627d51b9fc955ac"],["/2021/03/10/catchcat/index.html","888d9435290d6ce4e73ee655bcd8986a"],["/2021/03/10/neteasemusic/index.html","49c42a45f7126963b13850105277b1e6"],["/2021/03/10/surfboard/index.html","8866f662330ce82936ed9d23b5925333"],["/2021/03/11/vpnandjc/index.html","f8207816d773d8a193931f099719ea7f"],["/2021/03/12/qrcodes/index.html","4c33b4542db8c53f12cdb257e97e4522"],["/2021/03/20/qv2ray/index.html","0e223098149b83e9419fce79b1804d8c"],["/2021/03/22/freevps/index.html","5b1362de9a7a0b3987db7549b6b08c0c"],["/2021/03/24/tgstickers/index.html","d83b7576559e33dd768560f55b901b01"],["/2021/03/25/clashx/index.html","9dd287a2283e7765344ade64111a21e1"],["/2021/03/26/bingwallpaper/index.html","faf311735e85b307acb8119e2f44db2d"],["/2021/04/03/soutu/index.html","9a4ea5111b6384d227fe5a953d5033b7"],["/2021/04/03/tiyunti/index.html","33811fd1dfb118edb383c3349a834b10"],["/404.html","04658a3c28992cb6e575cf850da80f06"],["/archives/2020/11/index.html","d774768dd39b92c8f90db829a12d94b4"],["/archives/2020/12/index.html","62514c4c63079e99b8f2cfdb4400ced7"],["/archives/2020/12/page/2/index.html","f79aae545b00ccb6c820e138e13375bf"],["/archives/2020/12/page/3/index.html","c2883815cf96efa648a00e3d31a596b8"],["/archives/2020/index.html","4b15d305698ba715fdec2b26dc11210d"],["/archives/2020/page/2/index.html","f6893f0a7e7eec54a678c36a8fc90cf6"],["/archives/2020/page/3/index.html","92bcd598b00a88aa0ae26d2df3d46676"],["/archives/2021/01/index.html","adee471dbd2611d911d4f43d2e29d31f"],["/archives/2021/01/page/2/index.html","b34265c84dbfd9d380e57963fffc0e47"],["/archives/2021/01/page/3/index.html","45dd19ef662cf8aecb38a19c5a6283aa"],["/archives/2021/01/page/4/index.html","70e159ec03107f29900ce3648757215e"],["/archives/2021/02/index.html","fe1677a9215bca8d0dda869298e33bd9"],["/archives/2021/02/page/2/index.html","e130685993ae8cd9ae96d3aa541224ba"],["/archives/2021/02/page/3/index.html","6735924c07131e23bbce96054ea9cc0c"],["/archives/2021/03/index.html","35cfc12874faecfbc1bf45a18dc445dc"],["/archives/2021/04/index.html","1a9cd793ef6673e5002df4637ade6b24"],["/archives/2021/index.html","559a1d400b52020814e46b96b439607b"],["/archives/2021/page/2/index.html","8f074d055640223c81613e6ad973cdaa"],["/archives/2021/page/3/index.html","7bcdd08f10d47efba2fd1a22decc89b4"],["/archives/2021/page/4/index.html","a219909f71856d15d2616cba2e682e8c"],["/archives/2021/page/5/index.html","9fb36dd6c04ca775f0c20794dd51d18e"],["/archives/2021/page/6/index.html","1c697010371f08c2fb6b82baa4cf1f73"],["/archives/2021/page/7/index.html","3dbe5dc70748389e0cb1663428e7052d"],["/archives/2021/page/8/index.html","092925f1f7f6b806b54def6810df6acf"],["/archives/index.html","bdc74abd1774861a8dc5fcdea360ae55"],["/archives/page/10/index.html","e5ea96570ed2f233b1d4ef95264630b3"],["/archives/page/2/index.html","82bb0e8d1475f281fdb981f072a89bfd"],["/archives/page/3/index.html","12bb9867f4991282e58bc51e100c694c"],["/archives/page/4/index.html","e3daff5d0fce79392189f8263620fad4"],["/archives/page/5/index.html","ba9fe82b67f59b90777645c1a8bb3a40"],["/archives/page/6/index.html","9516e08acc5fecfdd8335e0725b780e8"],["/archives/page/7/index.html","4ccf56895b6a022f43d66d6261198be4"],["/archives/page/8/index.html","4c89c20d60df4dab4b17ea5724c5218f"],["/archives/page/9/index.html","84b7bc7a2d166537c212488cca587837"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","62a0ab35818e63955db56cea0a46b6b5"],["/categories/index.html","5873f57b87b5599f0c48ce66035afbd8"],["/categories/下载/index.html","c76b3b5f59c1c7d58b0809544764795b"],["/categories/安全/index.html","0187de2a7d42031da17cfbed2389f46b"],["/categories/建站/index.html","37559e77f86d03a38b72961927d7b51d"],["/categories/机场测评/index.html","5c5badf215730a0c7dd5701e7a62f060"],["/categories/杂/index.html","babce836a4efe549a88e1973a0d0ba7b"],["/categories/杂/page/2/index.html","0d2256c0d1a9d418adb476847c28fced"],["/categories/测评/index.html","73c3200d112f26dba33a94cb64ce973e"],["/categories/科学上网/index.html","b12de3e162773ab28bd3d45f6761d286"],["/categories/科学上网/page/2/index.html","6cbac7b92770901ccff8f7f0cf549c3e"],["/categories/编程/index.html","b69dac81660ff424f62187dc2da157a9"],["/categories/网站/index.html","8db64a447ab656cffb229ea8dd1d3a90"],["/categories/网站/page/2/index.html","55a2a9e44cb6e6cc285228fe34c85ba2"],["/categories/软件/index.html","b66d7eeef92ca049f9494d15201483f6"],["/categories/软件/page/2/index.html","b6cbcd6aeb1f2bf3b3bd08b02b5a8a5d"],["/categories/软件/page/3/index.html","8ecbddea9505972c1928e8d2a032b8ea"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","21a01371d558571a4e2e3d19fb611ef1"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","3af698c0f98ac21ef6d4935a3e184d5f"],["/ios/index.html","10a71bdad426fb57b6ba3b3618e57a73"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","d4b8cd88a45c65b3c0c301c973936f96"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","2efaf764b345759cbeb8238da960f3b2"],["/page/2/index.html","151c2545a072b7231a998c77aee4cfd0"],["/page/3/index.html","34340d299c135fdca6c0982581806628"],["/page/4/index.html","52af86f27b30893756ed7fc8676d1ac9"],["/page/5/index.html","abc48cdbab2c2e15e37fc7ad838d609a"],["/page/6/index.html","4bfd03499bdd417e5102543355629db9"],["/page/7/index.html","73e03f41b6484fd81693f595d66db34d"],["/page/8/index.html","16095d20c696f643a7db18533930c65e"],["/page/9/index.html","8202b95995d80318474e4e99bc6ff558"],["/payment/index.html","68f9cff48b566cdaea256ec631813076"],["/privacy-policy/index.html","302d4e16caf644a7c10896d333b56038"],["/rss2.xml","e27bc5268c0314f23954b907f03af83b"],["/search.xml","09a56e31285ba4f797502909e4d3f9e2"],["/sitemap.xml","928dab102f3af3c14b4c073a6c236e4e"],["/sw-register.js","5ff5558ca4fc90a8ad5050903e53daaf"],["/tags/5t/index.html","ce7eff7a6adfc64b228b1441c2cf322d"],["/tags/Bing/index.html","262311d3f84e9b78ceb493d0a007524d"],["/tags/Clash/index.html","6b0023ef54cfa92906d4bc3818c068c8"],["/tags/Clover/index.html","1e90477808a4ffdd79a7b7286f686142"],["/tags/E5/index.html","b21742a50b726b250f36541ad340548c"],["/tags/FTP/index.html","af8e22ec341dabeb52496abd15b2573f"],["/tags/GitHub/index.html","d04921f35a2025159970c179f3d46a0a"],["/tags/Heroku/index.html","11759e225a1db1483381c274f5fbc91b"],["/tags/Hexo/index.html","d3c64f47a101370246642d77af8a35e9"],["/tags/Lenovo/index.html","43d952a2b960e2bd027bb88084405495"],["/tags/Oneindex/index.html","c44026e1507266855aa2faa73675ccc8"],["/tags/QQ/index.html","77398a522d25561fbaa02959a7c69fed"],["/tags/QTTabbar/index.html","582126d218bfb5dd0f5cf894abf997e4"],["/tags/RX文件管理器/index.html","87881383f3e662784c5807e3f6715d9c"],["/tags/Todesk/index.html","0efd743d613e08a2e4356dbfb517fa3c"],["/tags/Vercel/index.html","70d1acda7dd6d93e70544ceee7be1a45"],["/tags/ads/index.html","3b33313e16daa7f16752ca7f355bf2bf"],["/tags/api/index.html","5216e6a2342fe8f6f7863658efb3de49"],["/tags/app/index.html","e7380b0239c064a39ef6ac99a12335c2"],["/tags/blacklist/index.html","7335598ac4e9d3601f53a00402058ac6"],["/tags/butterfly/index.html","05022cae85d5413cee4aeba87e3f6769"],["/tags/chrome/index.html","5614492ddabfd7c14b5acd3b2196ae53"],["/tags/clashx/index.html","a4c34e5d05528da831cf80838bfc8304"],["/tags/cloudflare/index.html","a51e53f5e6ed37065536d7e858de469e"],["/tags/cmd/index.html","a99285497f27534b4d9b5a2d54ea69ed"],["/tags/c盘/index.html","e7d151ac4599931d316323e6f11e0b68"],["/tags/email/index.html","0e9988ecad606053c5dbf0202a1f0d7f"],["/tags/ewomail/index.html","472f027972f50b80fe7b446af71e4947"],["/tags/fiddler/index.html","d5b6234543570e732e1fabc03be893a4"],["/tags/flags/index.html","173633a82b9740ca62ccca7407337abb"],["/tags/footer，页脚/index.html","519bf6d6d1013c8f32928aca52e63d6b"],["/tags/galgame/index.html","95f9c7f8210eb6ba04401a16d62976e8"],["/tags/git/index.html","354237a3a7acaa57e8608fcc5b26a570"],["/tags/gitcalendar/index.html","d4c53534e51892ca2cd007197ca04168"],["/tags/google-voice/index.html","5acfcf75612350b35372fa2b5a000d88"],["/tags/gv/index.html","94d1be1dfa3062440012527e0afec252"],["/tags/html/index.html","1b91b7893f762e952f76668fa9f5d299"],["/tags/index-1.html","a3a27876535c1ac91f86ce7aafbcc9d8"],["/tags/index.html","009c74094c79ce73188bf2e03f804190"],["/tags/js/index.html","82bf2226da7d0a4c346ab84022e4fce9"],["/tags/jsdelivr/index.html","9dba2df4661cecff5584744b39f386e1"],["/tags/linux/index.html","6d32d0112208d3739432b5a1cc2fd1ad"],["/tags/macos/index.html","8943774c12c62bd2a4ee21e37c07bf51"],["/tags/madVR/index.html","86c69280c3861d57a288d91ede775097"],["/tags/markdown/index.html","f4b50d8a137eb74e3c38a36485bf65b1"],["/tags/maya/index.html","c8dce7d7779af98af85bd51b8cb66827"],["/tags/mklink/index.html","5043a41ba2f7428e6491a1eac741bd44"],["/tags/office-e5/index.html","880c6332096150e8be4ef4386f2be6bf"],["/tags/onedrive/index.html","5d8acf9988273fe5f7470a9a22a6b243"],["/tags/picGO/index.html","d86594c674700e35e5046406a1d18313"],["/tags/pixiv/index.html","e27c19b7f855028ec0b01435a087d568"],["/tags/potplayer/index.html","a7cb97398af8ce51b604af8c33c50769"],["/tags/proxypool/index.html","b125f37ec899c5a8283414d7a513e278"],["/tags/qbitorrent/index.html","d4bc238e4e1d97b367ffe94a073d5b1e"],["/tags/raidrive/index.html","e0cc2fcc685962c09f8c147609331676"],["/tags/screen/index.html","7159bbc6d5cd9fa4ef592418bef062bd"],["/tags/speedtest/index.html","7efb5e0cc2c76307e6d56ac63feb1a6c"],["/tags/ss/index.html","3d9bae1b8b2338ccd8de8870d823f958"],["/tags/ssr/index.html","930feae5e35423153b3cd73cb4d9bf5d"],["/tags/stickers/index.html","0587a1ab8283d25c82bab5677d86ed15"],["/tags/surfboard/index.html","d03045596d1ed76d9021b12a4e5efb1f"],["/tags/tap/index.html","b691e8a04c8481324a899d0ad8121d45"],["/tags/telegram/index.html","c8105058999528aba3b1c91a1ade890f"],["/tags/telegram代理/index.html","917ca4f8284834da4afd9a2b7928a695"],["/tags/tg/index.html","b483b9c08860c71a71c1b8f085c0d858"],["/tags/tg代理/index.html","f78f9e341be22b2ccfc74c42e395fa97"],["/tags/top50/index.html","1cbaeaac4ac5e8097da0d4713398eb31"],["/tags/tracker/index.html","74d1c3ed75118b3b9be570328cc40df3"],["/tags/translate/index.html","630a06df4db3f379173d6f0dcf5eb6a0"],["/tags/translater/index.html","b9d1500718dc5576d426f03fdecbfb3f"],["/tags/tun/index.html","be4b52e33889d03c507759dd0ff36876"],["/tags/typecho/index.html","1e7eceffcc20908515da090d6b563638"],["/tags/v2ray/index.html","3a0d954a50b330665600dea0ae8176fb"],["/tags/vpn/index.html","54848d7b9e01cd59881cb237bf375e4c"],["/tags/vps/index.html","81e5f31e98adffbc6d84c7dd0af3872c"],["/tags/wallpaper/index.html","211536bc456f2ad8ffadccfe4d422938"],["/tags/windows/index.html","6b5cc686eb053064f89c8d0334157abd"],["/tags/windows端/index.html","99d932189acd6008468c079eee07ed3b"],["/tags/xray/index.html","a819c94cc85deb9f3410d90f23f639f8"],["/tags/yandex/index.html","a14b8752aea50676d3d3057b0e55e15a"],["/tags/下载/index.html","b511f629edba7957bf1d666a310a86aa"],["/tags/不限速/index.html","e1ca17aa28f14bf0d256a19b03dca5b2"],["/tags/个人网盘/index.html","2089fbafc240e90fec00847c5b87d866"],["/tags/主题/index.html","7c92410a48252456b7d6da331e30c620"],["/tags/二维码/index.html","f3622188f6ce810fbc252806ec1c52a3"],["/tags/云便签/index.html","a6b9cc026b18f23712c5c49d4fb00584"],["/tags/云盘/index.html","b046bb426e4138dfbbb0e96eb37bea03"],["/tags/人人/index.html","85795fe5b37ff92bfa5a0b5f4e784685"],["/tags/代理/index.html","1c4e4064b11445848e20652062d1e840"],["/tags/代码/index.html","96c4fd38d10765abeb5b40941026d5cc"],["/tags/优选IP/index.html","b5200d00533893a771a10f1a412e03fd"],["/tags/便签/index.html","24c1c4af67a444611b5ab3bfbd431517"],["/tags/保号/index.html","920d0e950cfd4ee2eee6360856a1d155"],["/tags/免费/index.html","071509f2daba5b2ae0d5cb0880150e13"],["/tags/免费节点/index.html","ebed0e18a0f929f0c254708562c635df"],["/tags/冷门节点/index.html","03e7a263ad6a52524362fc629e3027d9"],["/tags/加密/index.html","df520328d95455a22afabc24d0814a57"],["/tags/动画/index.html","f21bf3ab80b7a04a563390bc5a6d5c29"],["/tags/博客/index.html","a720fa384a9e42f06439bf288b25227c"],["/tags/历史记录/index.html","74dcf243910a6d76599ab5d7685779ef"],["/tags/压力/index.html","01a1890bdba0e805975c312d82941733"],["/tags/压缩包/index.html","552a84c539c4f8140f5e2470291db05c"],["/tags/反代/index.html","4a74060b857662cd43326d0998963e29"],["/tags/可视化/index.html","111af2f4b9ff8e6a6368ffa90cc5515a"],["/tags/命令/index.html","e2754ca3f3ce16bba0dff8d72414f915"],["/tags/国家/index.html","d54111bd88f1075522cc4b2edac24391"],["/tags/图床/index.html","8badf043fa5b55d25963156762ff6287"],["/tags/图片/index.html","388665f4ab2056d06f0eceeafda51d4f"],["/tags/域名/index.html","a4d02a2da960e96ddd2e304527ad2510"],["/tags/壁纸/index.html","d7a85a2fc6150acd8b5d580a79c78846"],["/tags/多标签/index.html","56c61e3d4b20a8578a70079182a842b2"],["/tags/奈飞/index.html","9cddd8655bc5ea5503681ecbac6096b1"],["/tags/存储/index.html","d77dc7d205d362df9616c4a95fa87cb7"],["/tags/学习/index.html","d2b512e6ba273ec6ad8f97506520393b"],["/tags/安全/index.html","b17fce6c1c426150c7065bc650a4834b"],["/tags/安卓/index.html","79100415209863ae14411563441ba57c"],["/tags/宝塔/index.html","f1d269e7e5ff70533779c91be51e6205"],["/tags/小游戏/index.html","662fe4c39f9b5e82886c90bd9f5af59c"],["/tags/广告/index.html","b5e8e22771905dc77c348273c5804c68"],["/tags/建站/index.html","e5e03dcc9bc7388b9f85ed3d0c3cf381"],["/tags/影视/index.html","3e2fc33640a3813b5f3bd2c2d3fd34d9"],["/tags/微信/index.html","e54fdc0fcb8c99c157b1f2f0650ac5f5"],["/tags/快速启动/index.html","361cfc2740a6650569e6081e3f104c83"],["/tags/手机/index.html","90301a83ea44c67fea2264aa61da470e"],["/tags/托管/index.html","6ab31e3bb29a16fd01275557403aab77"],["/tags/抓包/index.html","f6ed3bbc55b216f22952100fd2464a71"],["/tags/抓取/index.html","19813142361a9abc5013c6b64012183d"],["/tags/投屏/index.html","25cbb912e56cecbeec57e5d1f01cdf02"],["/tags/拓展功能/index.html","68bc6ab7cb92f83d2f805b9993a41984"],["/tags/挂载/index.html","3aa3c7edfc203e2edf796ff32ec7529c"],["/tags/指纹/index.html","ea27acd630ccb3161285c9b83061fff5"],["/tags/接口/index.html","d680a4580b2d1d2b488e6513f1d70bc0"],["/tags/提取图片/index.html","2f13a103c84e4f36a88bd52cb6e4f505"],["/tags/插件/index.html","8cef49f3711a1b72fb691bccf8622f54"],["/tags/搜图/index.html","6f82eaa63a49fbb5ef7aebee400f99e2"],["/tags/搭建/index.html","fbeac3e0b3f77d3b628dd25681da8b73"],["/tags/撤回/index.html","a84e15888589f7a9b6e7a9370d852a29"],["/tags/播放器/index.html","0c9c487e4ad6198b11a0f2a6479058aa"],["/tags/支付宝/index.html","377f334888787bc4d5d54cb7c1253f7c"],["/tags/政府网站/index.html","1bc5ea607f5edddb537b95c3c151a4d0"],["/tags/效率/index.html","dc981d71dfbc6f16441d20c730a57268"],["/tags/日历/index.html","64623b4dba08097c41dba48642f085c2"],["/tags/服务器/index.html","660388a59bae12520a44dc18a4278763"],["/tags/机场/index.html","cec13c937acb41d275105daa2b529a1c"],["/tags/桌面/index.html","3984a0dfac98e74f9d4c082e4beceb95"],["/tags/梯子/index.html","5ab7d846af8c7431a44b876b2f3fad6d"],["/tags/检测工具/index.html","a15c29c9b72d24583d40933ad43a4591"],["/tags/汉化/index.html","2074e0572e3ac52ff28a5fe1522e10f8"],["/tags/测压/index.html","5a592ef6fa65500047ef167308e90e17"],["/tags/测速/index.html","13bf3540353a1ac38d1e283827ffd1ac"],["/tags/浏览器/index.html","0263b18fe6b8d68f6ed74ef90b7df5ed"],["/tags/清理/index.html","e27759a711f73015698aa7d2148f3172"],["/tags/滚动条/index.html","ed19217f64d60a9c49f27832f3561375"],["/tags/灰色歌曲/index.html","4e109fa96474c48067fccc0915408af1"],["/tags/电影/index.html","cdd259c8f0025bc8bb23baeb74698ca1"],["/tags/电视剧/index.html","5e8e1cb11d171b3c9842570637588395"],["/tags/白嫖/index.html","e984158e3bc28607d4c6458b22ee88e6"],["/tags/百度/index.html","3b541427f5be53eaf930ec5f703e6096"],["/tags/百度云盘/index.html","48ce5f2192dc9f1f249ff7a1ed3b3d0d"],["/tags/百科/index.html","e2fb6af9143b55ed1e5467322eaf06f7"],["/tags/短信/index.html","ace358d2b1c2fcac0ea48adaeed0daf5"],["/tags/硬件/index.html","70e7b1757540bd8d4c93eb83ddd440d2"],["/tags/科学上网/index.html","fbe7738a998c285a337572dbeef35946"],["/tags/空间/index.html","45e97264220f002555d0fc98b3c400ac"],["/tags/笔记/index.html","58dd97b4947b6ca4f4379e872474c4f6"],["/tags/简洁/index.html","460eb511dae82ac54bc1b30c60137617"],["/tags/简约/index.html","287bb374a84b7c7406833d12adb6ad1e"],["/tags/维基/index.html","a9d4f589cd992604bad3a0fe3e32fcaa"],["/tags/网易云/index.html","1bdcc87ef7bd6b213cdf41e2d4f01054"],["/tags/网盘/index.html","03d67345475da33b493c8712dad5dcde"],["/tags/网站/index.html","e49abceb2d186be5ff272bbb77e5d989"],["/tags/网络/index.html","6ea4dff0e0a929923dc2a8044678bf97"],["/tags/美化/index.html","9bd7709fa8e75ace719dceeb9b778b3d"],["/tags/翻墙/index.html","49b0644a4bf7815b0fdadcb1a9a50586"],["/tags/翻译/index.html","1da9a0aa2051d7c22d6b012558ae8561"],["/tags/翻译器/index.html","d85b749c357af8bb4925fc34a2395f91"],["/tags/聊天/index.html","da89b15682f3cc9efa95441e41f67d23"],["/tags/聊天室/index.html","a5fef119c8a17397f87630abb8a6b14c"],["/tags/联想/index.html","b2576ac3f8540f151f75d1711148ace0"],["/tags/节点/index.html","8cba286e3552d118b00021d3f66c1123"],["/tags/虚拟手机号/index.html","d30bfbf24c677631df20cb7811992c4c"],["/tags/补丁/index.html","526aede990b01d891b3d508a8c0fe41f"],["/tags/表情包/index.html","4de62d3aff64e8ae0282228091ae7be5"],["/tags/视频/index.html","2f1738e154a8554d73860d08c3b0aeef"],["/tags/解析/index.html","d3f473f3c607e242543aac1fdb082497"],["/tags/订阅链接/index.html","54096299607bf6daff78a106b6abb6c3"],["/tags/记录/index.html","a415ffba03f244ae9ce7c2f3ee09d82c"],["/tags/识图/index.html","efe3e108a68833ba1dacbbdca71f8a4d"],["/tags/语言/index.html","01e110a32b8e272acf4d238b346b0ab4"],["/tags/资源/index.html","81dfe6da7fa7ca6d20ebcf6b823678be"],["/tags/资源管理器/index.html","6a94f6c3804bc75dae6333612e869313"],["/tags/转移/index.html","8ae83ab38c6e7d9ba4337d454dd888a1"],["/tags/软件/index.html","5568c7c84d6f98b1a285d81a300472fe"],["/tags/轰炸/index.html","92c86d0fdfbd2cc81946514f971c720f"],["/tags/迁移/index.html","478c3bb86a5003b6ad01d919c0010b29"],["/tags/远程控制/index.html","9c678e5b09112e596713dc190576151c"],["/tags/连接/index.html","31ed361d0ae95beaf01e3a54137dc8c9"],["/tags/追踪/index.html","7e2b0266d3c982ac4d25e499311a106f"],["/tags/速度/index.html","24ed7b7624f109473c2a0caeb22e8030"],["/tags/邮箱/index.html","5f9108dbacbb11c7fdb0349c0913570d"],["/tags/酷炫/index.html","54d3f61515bb8aa6de150313f3bce2d7"],["/tags/钓鱼/index.html","b8aa66d95ad42b121ec6e93961858fac"],["/tags/镜像/index.html","1b1adb2861d2a0b9ac174de6d49a136a"],["/tags/随机/index.html","5771723ce01df5cb4a0a3c4694f46e0d"],["/tags/隐藏/index.html","ba35bc102d9a5d4f8a335fd9dd12dc23"],["/tags/面板/index.html","0d82a95e55f03ee2c801c29f5ea4ba28"],["/tags/音乐/index.html","4b2d31cd67d8bf55776fe6ff7345224f"],["/tags/高颜值/index.html","223b99a37af7b988f3196cba65958e17"],["/tags/魔改/index.html","21d28495179d2891f8ebf65ae1550b64"],["/tags/黑名单/index.html","da885a2395cbea65d2b6109d7dd104fa"],["/urls/index.html","f28e67306f1a0fbbc1cf66a1af99bd67"],["/vps/index.html","688ac0ddeaceb1315794ccb4dc299a08"],["/支持/index.html","137280d0384e0ec66c8bffcac0ac6b28"]];
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
