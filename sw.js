/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","aceb83ddc05d22dbac424a60edf4afe1"],["/2020/11/29/clash-windows/index.html","f9b68a6c7df94d3c0e3a73c9545ba7fe"],["/2020/11/30/websites2/index.html","0342633735804c4346a5f00ff98ab7fd"],["/2020/12/04/iphone4s/index.html","169c8ca29c28bdc14c1f9445cd1859f0"],["/2020/12/04/onenote/index.html","51400e7f9b9fc507079259ad6f2d4ccb"],["/2020/12/04/wesites1/index.html","9bcddeefa84e250534e3c4fb24072979"],["/2020/12/06/nokia808/index.html","0604d6d291f8a05012c28c8cfed3f309"],["/2020/12/07/ipad1/index.html","bc220820b6d6aaa8ee73122e183e266d"],["/2020/12/18/freesubscribes/index.html","44a1bf709ec935f1fec45353ba048e35"],["/2020/12/19/musics/index.html","a3ad162abb3ffb9088e7de0e85d854be"],["/2020/12/19/shadowrocket/index.html","560ad90178e13898c704f467b413d3a0"],["/2020/12/19/v2ray-windows/index.html","fb095ae446b08ef91c2895e74e81e961"],["/2020/12/19/v2rayng/index.html","1246ca1076041e68acd15286810266f7"],["/2020/12/20/beoplay/index.html","6c98eb54f00f2e0ab081ad3b21759f07"],["/2020/12/20/订阅链接转换/index.html","467e9415487c3752ff1d388dc14841af"],["/2020/12/21/chrome浏览器下载提速/index.html","81293adfe5d51f617075523540f84a9c"],["/2020/12/21/免费128线程并发下载xdown/index.html","6970e5a71e8949bf23d1b1ba957f5b64"],["/2020/12/21/免费32线程下载软件ndm/index.html","0c7013459558951cc4b841501c5dd512"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","99f13b0457e518188188de692835f77c"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","bfb11285c118ebab0b66dc6f6301ba59"],["/2020/12/21/广告怎么知道我在想什么/index.html","78778d3cf99356cdbc2d4c19256ff998"],["/2020/12/21/无名·引子（小说试写）/index.html","feca0a4b422bcb7cdea0223addf72c4e"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","da59d53374d92c91ca99d0b1a7abae62"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","9237579c7ae5ca0311ba42f1ceb22ed8"],["/2020/12/21/高速轻量下载器aria2/index.html","4c0a9686af4150e5a91fac5b015e3600"],["/2020/12/22/2020-cee-roo/index.html","a1a9f3925ba49c5caca70a97fb9ae2bd"],["/2020/12/22/firefox插件、github、steam富强/index.html","17eba9122a4855afd26460f91f049c91"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","9d880716f9f098585c09dd5cbc39b196"],["/2020/12/26/python-day-1/index.html","13d46ecb0be1cf8f46d2eb1641922987"],["/2020/12/26/python-day-2/index.html","c68bd4db23e053671f815cf49faf5b98"],["/2020/12/26/度盘不限速下载方式一赏/index.html","ed0a0084fef5e869dac098cc13b5dfe3"],["/2020/12/26/添加开机自启软件/index.html","8bbb09e71015986ac9f138e144cae583"],["/2020/12/26/电脑端截图方式一赏/index.html","45b70294e5320e918ad09c13b82f5c21"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","465841945f90f9eb749045c6538e5ca1"],["/2020/12/27/最安全的浏览器tor/index.html","5f93d90f2998b8b83c71a1b95fee6f9c"],["/2020/12/27/网易云刷等级和听歌数量/index.html","3c3a365b08c609f034657b5a5166c0c2"],["/2020/12/28/freenom申请免费域名/index.html","aa99b406b2a8d7badfce37078b3fd794"],["/2020/12/31/机场/index.html","6083d0d5249f2ae94fb561f952f495a2"],["/2021/01/01/M1/index.html","145190312d952501f2af7c8d5e8cdc55"],["/2021/01/01/compress/index.html","7493f3c7617ddef641670cc4db5853d2"],["/2021/01/01/infinityfree/index.html","7084aca28b5d61670ec98bdca6323dbd"],["/2021/01/01/硬核翻墙/index.html","c9c6425f6002cd7eebb894945bf63e61"],["/2021/01/02/qq/index.html","ede05efd560469dded2dc975e294d0ee"],["/2021/01/03/netch/index.html","1b7f3d2d8af5c9004c321e1e07ba7040"],["/2021/01/03/waifu2x/index.html","3e58a04f5218c153823504f3f05a42ae"],["/2021/01/04/ads/index.html","88fab544c00a9a6f1676a53e0eea5772"],["/2021/01/04/games/index.html","3cc6384d6a77d36603eeecacb14e53c8"],["/2021/01/04/heroku/index.html","a167886c0f454d6f10971006a660c1b3"],["/2021/01/06/movies/index.html","e64a4cb298df3a7c7d7554d576f7585b"],["/2021/01/07/google2020/index.html","2498b5f30c13e47bb5ae453e1f227827"],["/2021/01/07/lucky/index.html","5075e9dd4d4719ebcc4d8e5769e406c4"],["/2021/01/07/spotify/index.html","f4be263ea69800351ce3420f9c5c29f1"],["/2021/01/07/thunder/index.html","9c8dce62e097ee7196371c1e1837de8e"],["/2021/01/08/adguardhome/index.html","603f64e2a0ddc8028daee504618e8b51"],["/2021/01/10/IBM/index.html","5df8918d92a8719771c910bb5d1cb930"],["/2021/01/10/potplayer/index.html","76965b1ca35e5ca0c4f5220420a44cfb"],["/2021/01/10/sakuraanime/index.html","af1742d3ed3c6f0e2c61ef9b6a6e426c"],["/2021/01/10/美剧星球/index.html","455ee3ccc82e7ca1a4617a7ff30b46ac"],["/2021/01/12/telegraph/index.html","a4884d7cd2a82d430e84e13e06df1d08"],["/2021/01/14/comics/index.html","845873518478687b9a0398e909007b7f"],["/2021/01/14/ftp/index.html","840ed3baa5f53af81a51d5514f019fab"],["/2021/01/14/oraclecloud/index.html","34fe62446c47736bb82435f207bb0587"],["/2021/01/14/porkbun/index.html","15d554dbbbfe13f75d9e6f72700cf815"],["/2021/01/14/powertoys/index.html","3a0516d428efdb20d151e7dcd33261af"],["/2021/01/14/taptap/index.html","73518552b15124417bd68d96904012d8"],["/2021/01/14/ubuntuvsftp/index.html","c423bbd3572c6567d67051f0a9c69e76"],["/2021/01/14/小说/index.html","bf38d3e691d5c5547419d56c7104c8da"],["/2021/01/15/freeproxies/index.html","7d28a5f4d00371cccf1a435a254fda89"],["/2021/01/15/incaseformat/index.html","a246d3479fdfe9a97a32c79a69a6cc14"],["/2021/01/16/euserv/index.html","2d578681837a11e8afead58c679c5f39"],["/2021/01/16/winxray/index.html","28cd32ec23abbd578f46f82a1b2432d6"],["/2021/01/18/qqreadhistory/index.html","67333919c2d54cd9b904501f20ad32c8"],["/2021/01/18/qqrevoke/index.html","afcd09c53339ccce6976e41ef914a9b7"],["/2021/01/19/freevpn/index.html","f7534035cca6a363fb65109067db6285"],["/2021/01/20/browsertrack/index.html","7eb6b8b5cae190388d556b3254721d8e"],["/2021/01/20/v2ui/index.html","3fba6dabbb3621e09d3575a206e0a20e"],["/2021/01/21/failedtoconnect/index.html","4237f5b3e99d4e8685b30c43a1897c29"],["/2021/01/21/gitcalendar/index.html","01a14260f735703da3111108ce11e99a"],["/2021/01/21/markdownformat/index.html","39f4eb7c15a8265221c99f7b62df6902"],["/2021/01/21/markdowntable/index.html","a1c9af0ddd339b630b7b2315e7f65b63"],["/2021/01/21/vercel/index.html","6bcd7aca7d8bc4450610a371b9bde525"],["/2021/01/22/hardware/index.html","cb57e1a55ecd6c1c653a1701407c1566"],["/2021/01/22/muviz/index.html","63ef479b3fc41c87b6257c13ec191a6a"],["/2021/01/22/randomapi/index.html","845751a49f6a07ef1d68f69a5d151861"],["/2021/01/22/searchimages/index.html","a1cfbb17668e5ac072464c7381d119b2"],["/2021/01/23/RX文件管理器/index.html","4a9ac6a5cd6c64dafd5dca9ec1aaae71"],["/2021/01/23/chromeflag/index.html","109ce6997fb0a8a4f87bee35f72a34d4"],["/2021/01/23/qttabbar/index.html","1a4c77407d3328bcae893bb2bfdf2fbb"],["/2021/01/24/githubspeedup/index.html","0ecf15729bcc5b233376c00022564f2a"],["/2021/01/24/jsdelivr/index.html","0ddadd296d1ac5ac839bb8faf8ca9c45"],["/2021/01/25/note/index.html","0f791e79bc5f0bcaaabaa1fcc216c705"],["/2021/01/25/soul/index.html","0d9a36aa614981f45586f17b887f524e"],["/2021/01/26/herokuxray/index.html","2a9b2fa4167228dacf00ff40eacc84b7"],["/2021/01/27/proxypool/index.html","ff424d9df4033be9387def41d218c9df"],["/2021/01/27/tracker/index.html","e71560801be534b7d3fdb9108913ebfc"],["/2021/01/30/pandownphp/index.html","ec9897913cdec285d66f6e94a2bf3c10"],["/2021/01/31/newgroup/index.html","65ed0120203db9c4377398a4c6cfcdcb"],["/2021/02/01/clashlanguage/index.html","476a70418f9218d43ce1792f11867c77"],["/2021/02/01/encrypt/index.html","8abcf13bad2e7fe21a887dada994530d"],["/2021/02/01/footermotion/index.html","5fb0070a3d696305a781ae73b3d2f1ea"],["/2021/02/01/gitter/index.html","88de4895cf9264472946b97446199b59"],["/2021/02/01/pixivtop50/index.html","511b7c30e960ede1a40e59962edf065b"],["/2021/02/01/scrollbar/index.html","790d9ca0df7f2f36cf4abeb6b60f6115"],["/2021/02/02/clover/index.html","88796f2a34ecfdc8c55b5d46ebf0be2c"],["/2021/02/02/maya/index.html","ed085d20823f86dec50c80ce65806ad1"],["/2021/02/02/speedcontroller/index.html","3113cb64487844c6dce6dad6e1a40bc2"],["/2021/02/02/yesmusicplayer/index.html","f544c53bdbb82f557728f4195743cd45"],["/2021/02/03/lenovoonelite/index.html","04fbbb8b40c3570838a8cb9149b214ea"],["/2021/02/03/skipads/index.html","a8d128defdff9df753e773844f8d7637"],["/2021/02/04/picseed/index.html","067c64f1aa5e92be834e8fa96f4a4b81"],["/2021/02/04/renren/index.html","7d4e4d0af0ef5044d2e3c2ed8d3cf305"],["/2021/02/04/serverstress/index.html","ddae5f74f20ffe10425e5b903d57e6be"],["/2021/02/04/wikipediazh/index.html","42402cda260d2d1ec91d579f66206de3"],["/2021/02/05/googlevoice/index.html","13e73d3adadb816e569b3c469be90bca"],["/2021/02/06/clashconnection/index.html","db1cb97434625502017e8cf94a3b4780"],["/2021/02/06/gvtransfer/index.html","a3b3999b20ac9dc0bdb2b2dfaaf8cd73"],["/2021/02/06/todesk/index.html","c64b6d0442d54d8d4f6e2d0114ed8987"],["/2021/02/06/vpnblacklist/index.html","0f6c01f0242f8b10e14903de66aa3438"],["/2021/02/07/mklink/index.html","5e2587b5f81acb4adc4fd033416758f4"],["/2021/02/07/speedtest/index.html","fafda6b9c65de9d2aee845405b2b0be5"],["/2021/02/07/translate/index.html","14adef05aaff4a4ee19aa8aff6874d72"],["/2021/02/08/ewomail/index.html","90b19fb4eab436716d35fe7268aab3e8"],["/2021/02/10/officee5/index.html","3da20ca348e9d63082875106993a2c73"],["/2021/02/10/raidrive/index.html","67023048e8a2f99b729b590052e4bfa5"],["/2021/02/13/e5sub/index.html","746b00ce7f3ef75b0f014c081bbbc7ae"],["/2021/02/14/screen/index.html","f873d2c9d6367d19c97e38457305c17d"],["/2021/02/15/clashtun/index.html","b716036cd5799ef7a01c580e799ebe61"],["/2021/02/15/messageboom/index.html","680b3d2dcf48d32347257c3a65555ade"],["/2021/02/15/oneindex/index.html","a0ab82ac2a3b2e03428cd77fc82c91fc"],["/2021/02/16/govsites/index.html","7faab4984a56fdfaaa725eccf9f98588"],["/2021/02/17/hexototypecho/index.html","4984c7864e3e1e13d86afed230aee88d"],["/2021/02/19/fiddler/index.html","b31d8f7d93b0707c835c13d137cef312"],["/2021/02/22/potplayerset/index.html","5bbd2202c27e67da274ef13585873e64"],["/2021/02/22/studyresource/index.html","8f7e25fbbf812ddc54006f22e9c31aa6"],["/2021/02/22/telegram/index.html","6b691b664cf1747566ebda36ae893c48"],["/2021/02/22/videos/index.html","3af838b3a9f2f4c66edc0a4c27974006"],["/2021/02/24/mtproxy/index.html","c737c93f6238369b850fa7ad7385dbe3"],["/2021/03/10/catchcat/index.html","2679cd42a7cc4899c719fbbf62a8d308"],["/2021/03/10/neteasemusic/index.html","7ea54582c5c8ea9130df4f0d660d72d2"],["/2021/03/10/surfboard/index.html","72c3f2b9a5ef388404b5583c3861e270"],["/2021/03/11/vpnandjc/index.html","ee4be000d6719ecc236e8673f5eda7ce"],["/2021/03/12/qrcodes/index.html","4b514549f2da71490ab4a7d0473231aa"],["/2021/03/20/qv2ray/index.html","c6741870b9e79b056e132c2a9dd206dd"],["/2021/03/22/freevps/index.html","673641fd0d34630a51579c047de8fd3b"],["/2021/03/24/tgstickers/index.html","0971a5ea51885db8e0eb3852afeb4f12"],["/2021/03/25/clashx/index.html","f8123c9d1b02d029cdea0fdda98ebd07"],["/2021/03/26/bingwallpaper/index.html","f9764940ecf700d7c345b6fd5c7c8df7"],["/2021/04/03/soutu/index.html","022f64cec6f4965e7cdf8efcc47bde24"],["/2021/04/03/tiyunti/index.html","4f4bd83145c13c72d9a98462ca936afd"],["/2021/04/04/btpanel/index.html","b48e34a5f6c740ad38d3603653ae7a37"],["/404.html","04964c227fb19bb8246114e57d5e16ff"],["/archives/2020/11/index.html","8c2414a15eb833943e1a8b2351e52580"],["/archives/2020/12/index.html","4c76ca386924ce8c05fce16deecb576b"],["/archives/2020/12/page/2/index.html","8b243126ea32792737ef5317a7749d6f"],["/archives/2020/12/page/3/index.html","b72b8f7d765be6c1ac5f9fea8c183238"],["/archives/2020/index.html","83ebabbf11ffda04fbb2d43de3c59f3a"],["/archives/2020/page/2/index.html","dc2861b607abe6dd25249c18994f6f4e"],["/archives/2020/page/3/index.html","84c8f5ea3bb2e6d298562004c3f0378a"],["/archives/2021/01/index.html","1cb63ac054a8c42add19a92487a26cc3"],["/archives/2021/01/page/2/index.html","6401334ec4b8039138404a49271ff851"],["/archives/2021/01/page/3/index.html","7e9dacc9d13cc6ddf76d6c9732b653c9"],["/archives/2021/01/page/4/index.html","329f46c86163d4bafc272d234b0c7987"],["/archives/2021/02/index.html","b1fd9a731ec4144ce1b11290e0d9b106"],["/archives/2021/02/page/2/index.html","5dd921bf0d3ac89e1acbccc584c6125f"],["/archives/2021/02/page/3/index.html","9f3e33fa04884a390116c61bb360ba4d"],["/archives/2021/03/index.html","bf9f76ac257f26102c48d12e21f1adf6"],["/archives/2021/04/index.html","443a09aa8f9fc6c6e017e9e13eaca2be"],["/archives/2021/index.html","7e08ee90ab3c11352b259007e01a68e1"],["/archives/2021/page/2/index.html","ab5c9473a3869fba47f9777a8d58e34e"],["/archives/2021/page/3/index.html","376d0618f01db102981259586f0a2591"],["/archives/2021/page/4/index.html","ff2d5f017a4ef06076a33fb1b97e1867"],["/archives/2021/page/5/index.html","2a8dd6763355df4a4f2660a95d7506b1"],["/archives/2021/page/6/index.html","a1f52b3773460e555fe6668ebf9ef712"],["/archives/2021/page/7/index.html","ba8f9abdc31873e6e74d4cdf2271c9fc"],["/archives/2021/page/8/index.html","cdd44d7a5d468d939716efa9a466ba83"],["/archives/index.html","f2654633c7e61b922034b1c297595a0b"],["/archives/page/10/index.html","dba788d88cb882ca5f92ff9d92d60fe9"],["/archives/page/2/index.html","feb8a7981ee4e44879b933e0bb53af1d"],["/archives/page/3/index.html","a43aa546d0521d6970f8240164f7da80"],["/archives/page/4/index.html","6edd50864cef7f74046dcb236e9002ae"],["/archives/page/5/index.html","c8a053bc147d064a02fdd0839ef746b7"],["/archives/page/6/index.html","8bc570a00ef3cc4d45823c29087451fc"],["/archives/page/7/index.html","858ecd54354fa3f3a8b3aa6a3d09fe22"],["/archives/page/8/index.html","7ad54e604f97261bc699b42004271ed2"],["/archives/page/9/index.html","0e38afc97e05dd44d336e8445d49cf6b"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","f7a27d63c97dbe7edb44436bde4e5d4e"],["/categories/index.html","f54e59da39ad5735cfefe1a1f1573266"],["/categories/下载/index.html","c64d3fddcec93fe109d3360d48bb4496"],["/categories/安全/index.html","a8754cf2786cfb0aa3d531922ea92103"],["/categories/建站/index.html","52841a7021a75a95d3d706fb2c777940"],["/categories/机场测评/index.html","7e6378e74047019e9135eb0973283ae4"],["/categories/杂/index.html","c663f7cc67f1449ff24eaa6d59e146db"],["/categories/杂/page/2/index.html","3c8880fe93f72c4dbb01a21844b425c1"],["/categories/测评/index.html","77d153adb6a3b273984478f57185f658"],["/categories/科学上网/index.html","4b3fd6e71362d0a4fc58e5ceea3f3302"],["/categories/科学上网/page/2/index.html","9d7635518fa48f65917b82ef008d597f"],["/categories/编程/index.html","542995427b0a9b6351fe6b3ff0295acd"],["/categories/网站/index.html","fce7f1ddc6f860aea625c7e0c564359e"],["/categories/网站/page/2/index.html","be5352f71cb916b88edacdb04ad4d9a7"],["/categories/软件/index.html","730b769355497529a622d5adb249c808"],["/categories/软件/page/2/index.html","fee918ab0561f23ee0309ed4323b4d1a"],["/categories/软件/page/3/index.html","96540134ebe770e181799f75f8abb74f"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","726a34a5203fb58af98aba918d18a22b"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","3ee55132459465e58c4969ae85688f39"],["/ios/index.html","50385fc8807ebf0048e362ab90510277"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","1e6f28a34a98dc91383862541430075a"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","61f0b1dfc1ca4dad9a9b7265fc4ce8b8"],["/page/2/index.html","7302848f6b5c401d3b114b8a1b7d5844"],["/page/3/index.html","d6c5eec2768de172fc595415b5e4c36e"],["/page/4/index.html","2c5e72e7cd23621b988bba2d89337271"],["/page/5/index.html","e755b3bdfd23bc93227337777aa4dff4"],["/page/6/index.html","a2556187e42e2c24d697706d43ab06fb"],["/page/7/index.html","734b7b9408e69dd5192f16679aa143ba"],["/page/8/index.html","f2915f1065fc29d83dc6aebfc7d08eae"],["/page/9/index.html","7ad2871f99954326e48c430fe7057873"],["/payment/index.html","661204bbd998b8ce73cc2c6fff551487"],["/privacy-policy/index.html","5a4bce6ca339ba1c5aaf1b2b5d4a780c"],["/rss2.xml","9b9ab3eb4efa521cd0687b388bfeba55"],["/search.xml","14ec53c137faf396be260d8360b26590"],["/sitemap.xml","b1a71c000defc8b52acbf106f83bdd84"],["/sw-register.js","7b9b91bb4cb43c4e2cbee436c5052765"],["/tags/5t/index.html","1647da718bb76c076749bb4dcb13559a"],["/tags/Bing/index.html","526e4eecc115e04217c994163beeb4a1"],["/tags/Clash/index.html","4bdcd60f5b027e15bdbf8e6bb1183390"],["/tags/Clover/index.html","71e5065d1c683465eb522844f2a97dce"],["/tags/E5/index.html","b663c9702cebacd3b5a2ef7395bece44"],["/tags/FTP/index.html","70c158e8a6d1cc8827827b3e320ba807"],["/tags/GitHub/index.html","fd06bdcd63e131aa2d6247051130ef71"],["/tags/Heroku/index.html","21168fe26c07b78afd8062566f2dfd18"],["/tags/Hexo/index.html","2f71f09babde639997cded09219378ad"],["/tags/Lenovo/index.html","b1d1e7f4063ede9d66540f2714b18677"],["/tags/Oneindex/index.html","da5ce9293057127bc4676013fb3543eb"],["/tags/QQ/index.html","6de699e7813b27532aad761ac8944f8f"],["/tags/QTTabbar/index.html","32963b5abfafe7b83bbf342a9c22398a"],["/tags/RX文件管理器/index.html","986b1dfd16febc3bcbdcc1b4bf27b130"],["/tags/Todesk/index.html","19d3539b9f0f8463ec0c42d8c5be547c"],["/tags/Vercel/index.html","43879db6a7c463b9d78e064f1ac23c13"],["/tags/ads/index.html","9e9afa755e308b1ae5ffcabb0328599f"],["/tags/api/index.html","30b4f99a6ba3e039a69b181a1b440fd3"],["/tags/app/index.html","38147d59fef2926ed694d016ae1c79b7"],["/tags/blacklist/index.html","0fc58f8ca3352f753b75b16a13d57a78"],["/tags/butterfly/index.html","be927afb64de10e53f68e3b9ee397bc6"],["/tags/chrome/index.html","abe2714482e9caf92e39b9a9b0be1445"],["/tags/clashx/index.html","cf764267ec414747ffd2f41fbf0f78e9"],["/tags/cloudflare/index.html","8ddad1ae4133e7dfff19fdaa3a740fd1"],["/tags/cmd/index.html","92306075ebb59b71e5af9f058c464b18"],["/tags/c盘/index.html","b0836e7e29246a257e61c2a2ff29a84e"],["/tags/email/index.html","57b71b89133380447679fa8a7390d85d"],["/tags/ewomail/index.html","fbdd9bd52c71dc4a9154e9e21977a299"],["/tags/fiddler/index.html","c9d7d4fc7401c1f9f8d0fbc96e8cb756"],["/tags/flags/index.html","31e45d8e6f694a9bbced3369f2fa4c4a"],["/tags/footer，页脚/index.html","01bff88db343737fe49de54825538e5f"],["/tags/galgame/index.html","f96c1f49dac682ea4102e3a89e174814"],["/tags/git/index.html","5c02b7f637e389fcaacf2c2c5c3bc920"],["/tags/gitcalendar/index.html","e215adc8e0c398777f94a7c321e08084"],["/tags/google-voice/index.html","ede385883042e28c68b4ec74233135c8"],["/tags/gv/index.html","8a092e8cc92126c527c2a4155a904e09"],["/tags/html/index.html","d9293546eb56bc4885af0cc5d42b4361"],["/tags/index-1.html","131c267a4445cc32ee4059a756326b80"],["/tags/index.html","a97fe0aa3c9d2bc5631a355e1e380a2c"],["/tags/js/index.html","fec64847907adeac62cc965d5c518360"],["/tags/jsdelivr/index.html","30d06bb4d2d1709e41b3de9eda045e30"],["/tags/linux/index.html","1ca26b5c00063c48f42dce04f7863c08"],["/tags/macos/index.html","9d2d78c970a447267c2edf460b49a62e"],["/tags/madVR/index.html","58ae48718c128b8f01a3652c2d428dd1"],["/tags/markdown/index.html","690a590debaccda15ffecf5b1fb77a6b"],["/tags/maya/index.html","7f02194a37ceb16257198a1384923941"],["/tags/mklink/index.html","8648124d5c44448a9bd2625577b93b0c"],["/tags/office-e5/index.html","ca938913a4b19fd213694d62b6aa7a8f"],["/tags/onedrive/index.html","919be0c619c5b91fe16ad8311d16e80d"],["/tags/picGO/index.html","fef5a1a9121ba8c51b7bfc05eaa4afe0"],["/tags/pixiv/index.html","668c134eb0bbacf7ffa05ad9511db92d"],["/tags/potplayer/index.html","8987c12f5c2cfa8556eb345738614512"],["/tags/proxypool/index.html","34ab37af411ce6fc2c246fe4d8271c05"],["/tags/qbitorrent/index.html","6b1ae3aa07f5fcc412e8a0076f80af54"],["/tags/raidrive/index.html","60bfd7ae39259005ce3f6ae467057ad8"],["/tags/screen/index.html","500a7825bbe9e795347ae7695eda7d1c"],["/tags/speedtest/index.html","cea107b45fd4cb45bd2aa32a9a2d049a"],["/tags/ss/index.html","ba0179eaedad8f2ce8f8e163bcb3ef0d"],["/tags/ssr/index.html","6b9afc1e69d4281ea1640e8fb751974c"],["/tags/stickers/index.html","a416af1b16a1fcc61b3fa29e41230802"],["/tags/surfboard/index.html","704994c1cd06f647b9c0155533392079"],["/tags/tap/index.html","7f599329439cba5e906f80d97074f2e9"],["/tags/telegram/index.html","96e5d1d834a62041b7f7cb28a2407ecb"],["/tags/telegram代理/index.html","16189657714c657b743c0247a7833fe9"],["/tags/tg/index.html","5b6f8553507f5e2960aae98a18fa7cde"],["/tags/tg代理/index.html","2e8c8d19f2c1d8f4114302bc441882b9"],["/tags/top50/index.html","b65f47e82cfcbbb25cc624abfc354acb"],["/tags/tracker/index.html","9011b7ecc8fee72d3d7d296e5dbedf6e"],["/tags/translate/index.html","ef0495b1815ca3bdc148520510eb15dd"],["/tags/translater/index.html","ebcb7f41d720626359935990ab5f31ca"],["/tags/tun/index.html","6848359d7c7004a6878fa112717ad528"],["/tags/typecho/index.html","701a1de839981a68e09a122a029c00da"],["/tags/v2ray/index.html","8ff60ac421adf868046487989f7c0261"],["/tags/vpn/index.html","e4ad4ae459f5b10af81c9233fe17582f"],["/tags/vps/index.html","0dc004d6d8a08afcaac04703aa6315a9"],["/tags/wallpaper/index.html","861b18b5462d5cfd0d83638b633fd34b"],["/tags/windows/index.html","abd7b97695c07b23f2bbaaadd3da300c"],["/tags/windows端/index.html","45f144be3c08fb51e105f68252c00b1f"],["/tags/xray/index.html","74795ceac494e5a5e078649e1a460a3f"],["/tags/yandex/index.html","8eb7629f36296f8317ac0d2755591bbe"],["/tags/下载/index.html","ff1b30d2c65f7b4cdc41fe0010cc4192"],["/tags/不限速/index.html","c6340c53e94cbf6b4ca5a56c898d791e"],["/tags/个人网盘/index.html","bae9d45e78b82421ee4b005ef0b509f2"],["/tags/主题/index.html","0079041309118b73e7308777745273f6"],["/tags/二维码/index.html","e42f5c720a899f5bb0a3d58b85b9319d"],["/tags/云便签/index.html","f1f03e9350ebc4ab4bbca39fd9fb2827"],["/tags/云盘/index.html","de939fedc2d44441ee6d8fdf57ec0c0a"],["/tags/人人/index.html","4a4b2b8063721711834e931ee3c21195"],["/tags/代理/index.html","181dfb8d3f6b8d28bea99a14f58261dd"],["/tags/代码/index.html","2adcee3d3ae8d643313fa07f7341a43c"],["/tags/优选IP/index.html","7e57f13d179c86c05e95edf779a7336c"],["/tags/便签/index.html","b7e7d29ba990afe819c10c84c086df0b"],["/tags/保号/index.html","5bca968da2ff241bbfa57789f8b17ceb"],["/tags/免费/index.html","2fe90cf12379e9863ac99f835a580b89"],["/tags/免费节点/index.html","838efe780a2e108bb63547d631eab7c4"],["/tags/冷门节点/index.html","b836a54b060366c027ad24c0ee52b6b0"],["/tags/删库塔/index.html","78050287aef648f8fa10e8f4c44ab1ee"],["/tags/加密/index.html","14d1086693797b785e3345485749fbbe"],["/tags/动画/index.html","b1de84ec5c1fdffaa3f4dd86ba7c7b7b"],["/tags/博客/index.html","46ebd5f88016a696595e29b0144dfcb8"],["/tags/历史记录/index.html","370d261bb04be9e52b4807a32263ca37"],["/tags/压力/index.html","97f553f45c6d28cb9c206400466971f2"],["/tags/压缩包/index.html","4bd7b2dad52c786ba442340e14a20876"],["/tags/反代/index.html","105a95de013c1b6e51fa46c05d3f1859"],["/tags/可视化/index.html","7400c9d981cdc2fb15fe770ed7fd34cd"],["/tags/命令/index.html","21be16fec216e47eb3885dd51a271ca3"],["/tags/国家/index.html","952cae438c9c2e7a8273c1a83dee95d6"],["/tags/图床/index.html","6cc91f87e5fb03d0b0f04b975d3a18ce"],["/tags/图片/index.html","a19a7b01ae0054af910ba7a86e8e1097"],["/tags/域名/index.html","3842fe8cbc4301a7bc442ddac36453aa"],["/tags/壁纸/index.html","b21e0dc2d549c6e04621452956bc5fc9"],["/tags/多标签/index.html","cf451ccf31adfdb8a9b08b7acb56cb9d"],["/tags/奈飞/index.html","e8e12e6895d3995b075e7ada426f0bb7"],["/tags/存储/index.html","cce163511290ba7c2b4c0ed91d15e60d"],["/tags/学习/index.html","92521f3925809f305b9d127af73b7fc7"],["/tags/安全/index.html","d6ca3691150731847cc133d645de6c6b"],["/tags/安卓/index.html","dfaa4e8c6b06f5568abbdffcbab4fd6d"],["/tags/宝塔/index.html","f6c890c1cc1a9d1d822ebac8a309fb98"],["/tags/小游戏/index.html","e1ee473d94aae13919694885f4b5474c"],["/tags/广告/index.html","21f22e23ebba83a7eea732e67973402a"],["/tags/建站/index.html","388a1a6e7617608bbc37472eab0dc163"],["/tags/影视/index.html","617181660e7d4b56bbcbe635ce55d864"],["/tags/微信/index.html","56094f31a5f4588c4b3f65a55ec43e9f"],["/tags/快速启动/index.html","290d236a057f9d3085c772ccb891016b"],["/tags/手机/index.html","bb245e2ffe44ba6e84cb172baa96f142"],["/tags/托管/index.html","153286dbf1af0ac486577907b8fe9b4d"],["/tags/抓包/index.html","13abc5ae30f9bf79fcf8fe9beda179da"],["/tags/抓取/index.html","46dd7667279fe26169b3ca573d028331"],["/tags/投屏/index.html","49ea7bf9a66786f61c5cb342d8a3dc66"],["/tags/拓展功能/index.html","7832725b5e8b342c86467837964837b2"],["/tags/挂载/index.html","30878c80b904ce5757f060fa59d603b7"],["/tags/指纹/index.html","bca52e857723bc3ec2013517af975bf2"],["/tags/接口/index.html","2eaf13cc93598b172c556cc9432276d6"],["/tags/提取图片/index.html","bbf39175783135ac65c71fca70b57b31"],["/tags/插件/index.html","86c141b09e46a44e60b9f4abc1520970"],["/tags/搜图/index.html","5509fa3b41ebb3a35388da6e0c4295e4"],["/tags/搭建/index.html","22bd33865121cce432e4f5990bbc2ee6"],["/tags/撤回/index.html","e091bb9df8149278a9efeb602dafa24b"],["/tags/播放器/index.html","451a78039438839b816eb88ddecffd39"],["/tags/支付宝/index.html","2223c429fbe9eec3cc7a06ce0de76847"],["/tags/政府网站/index.html","38d50ab72f36ff4c375d4e29cd152703"],["/tags/效率/index.html","06eb2af15dd7681a2251947ba3463df5"],["/tags/日历/index.html","d5217bd24806afe4ce0c36f50e1632e1"],["/tags/服务器/index.html","cf1b7639d39c44a173c71ee53caf56aa"],["/tags/机场/index.html","637e0f7470975c52689f041ed94ec61b"],["/tags/桌面/index.html","eee02ba2161b5d42bd28b8b8c876b670"],["/tags/梯子/index.html","a0404bff81227335dc02ee5bba24a249"],["/tags/检测工具/index.html","c6c17ab9dbe1c3c2a1c3f49f028581b0"],["/tags/汉化/index.html","9c75d130931e29301dc9c545e8bc96f0"],["/tags/测压/index.html","e9e163014ef82c2b32ebb4ba66343d4a"],["/tags/测速/index.html","8b79fe6b58aece507a3e97ddec854ce0"],["/tags/浏览器/index.html","963998d69490a9c417a8723ba987fc53"],["/tags/清理/index.html","11ccc2e461860dd0db83bf334c7c4c02"],["/tags/滚动条/index.html","19c8b57c79ca60d626bf798f862acc20"],["/tags/灰色歌曲/index.html","9469461c4c423f7f8c28d399d9276097"],["/tags/电影/index.html","0fb738222e3715245b1c75f71909097f"],["/tags/电视剧/index.html","e5d5c32f30afd369ded27b08c151a30d"],["/tags/白嫖/index.html","ff0d5eb4844ef59cff774d51c816f5cb"],["/tags/百度/index.html","6e5534aa0399f76d51101b4c2c133a53"],["/tags/百度云盘/index.html","15647c1ca30dfc9d8f46d3a16fce23ef"],["/tags/百科/index.html","4b5b34c4b0c39fc57c82d6f7a2d1b234"],["/tags/短信/index.html","320e40dfdf968813eeaeea8fb910243d"],["/tags/硬件/index.html","ad4f226df7c7549eaf71df296604ba8e"],["/tags/科学上网/index.html","c7edaba4b04365ac7cbe456f6fb72d2c"],["/tags/空间/index.html","971099c20a122c5b52b7b5e6cd50a3f4"],["/tags/笔记/index.html","8163395516af6b31141ff23b89f863eb"],["/tags/简洁/index.html","f4b3138d5f5955436be5c8968d63c02f"],["/tags/简约/index.html","9188c99f179cab87d363b671b07b3566"],["/tags/维基/index.html","a0b9f9919ccc9f36a4240afa55fdff38"],["/tags/网易云/index.html","229a150f29414fbf40227b5183aded9d"],["/tags/网盘/index.html","ef28e49c59b5acaf16517d53763193da"],["/tags/网站/index.html","19c815c433ee954fe4ba4be00055f7cf"],["/tags/网络/index.html","6ac3749e102d32ab9248022b469a6095"],["/tags/美化/index.html","d08e79a6d6467519804d644f8d0899a0"],["/tags/翻墙/index.html","60bf7c197fe8bdf01817a869ec386eff"],["/tags/翻译/index.html","7032948e62d54abb11f504492c2ae282"],["/tags/翻译器/index.html","59613d90bde15fa08aa071e5aa2b7af6"],["/tags/聊天/index.html","82e040e2c43be2d0cd2aac065893b364"],["/tags/聊天室/index.html","f0764fbf65353eb018c24cb85ae6d831"],["/tags/联想/index.html","d899cb18d4d7363c65b05bd64196fea4"],["/tags/节点/index.html","faf0e8dce7157a960846ede274c152c9"],["/tags/虚拟手机号/index.html","4a8830f10f0c19c54bfd6f034f9bdbbe"],["/tags/补丁/index.html","0a698a3862ae71e7679410ee74f378dd"],["/tags/表情包/index.html","acf57054f44bd0b87f7dccf4de86f4a3"],["/tags/视频/index.html","781f1451d10f55690782caa7a6a09912"],["/tags/解析/index.html","7a6451990c07f6b9641aeea93c3d92ae"],["/tags/订阅链接/index.html","19316b0c06529179d935c4523261aa9d"],["/tags/记录/index.html","a223b75e650060cba119ff6851cfbe8e"],["/tags/识图/index.html","131a07079be5d6deb32549555cc9082d"],["/tags/语言/index.html","aed4c76a3eeeb9e04e1f7a1ed0836231"],["/tags/资源/index.html","9fde111ed8a6bab6dca24440d997193a"],["/tags/资源管理器/index.html","bc5037dd398b5871dbbf7c802b8f242f"],["/tags/转移/index.html","87eecf125c0f559f0313600ed52c4405"],["/tags/软件/index.html","e83e5f59bc32d783dc2b8b286288679f"],["/tags/轰炸/index.html","7a5cdeef9f7f045b2ac60f8995aa1796"],["/tags/迁移/index.html","d3d09eb9f98922c44c05312881784856"],["/tags/远程控制/index.html","502e62ce9fae7f50b01af4903345f888"],["/tags/连接/index.html","61f17b925922eace09c12333b7c03f31"],["/tags/追踪/index.html","9813d2ce36011dc41282ccd74e2c97e6"],["/tags/速度/index.html","f975cbb0f2950556017c3c48cf000004"],["/tags/邮箱/index.html","8f1bc04bab46cd2340cc9ae8776a30aa"],["/tags/酷炫/index.html","020ad61615fb7702748394ff0733f14f"],["/tags/钓鱼/index.html","e0a6715e07b18834cf948ac7a15abf2a"],["/tags/镜像/index.html","96026d63250ae441fe76793017acc682"],["/tags/随机/index.html","cfc323f1794d36f6e3800feab83808ea"],["/tags/隐藏/index.html","4873dfb9b64a945ab5328da5e3416b59"],["/tags/面板/index.html","d51fe4ea1fdcdfd366014618c34b5ebd"],["/tags/音乐/index.html","4f8d468309f6b6de76b47014cf930b62"],["/tags/高颜值/index.html","1482f7f69dff55a42421df5a5d5cd2d6"],["/tags/魔改/index.html","50537adc727d69b55d7fd09243ddf0ea"],["/tags/黑名单/index.html","fbf489f63ff4bd8baa4776bd16ade384"],["/urls/index.html","b5897bccf18a96f6d3207542de8ccba7"],["/vps/index.html","ae0378a52098e36f06dc015243f62bf2"],["/支持/index.html","59474ce6a05c41824625f3b95426eadf"]];
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
