/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","8687c2fd7f473f64b5b490106d3efa87"],["/2020/11/29/clash-windows/index.html","48945ab218206b98507409e8bb05bb1e"],["/2020/11/30/websites2/index.html","d344b57a694cddbc242d63438cb0292d"],["/2020/12/04/iphone4s/index.html","ae017b2db4c7d106e651b1b019e92dd1"],["/2020/12/04/onenote/index.html","5b9f8c0ee55c75a55d86abbac776bf5c"],["/2020/12/04/wesites1/index.html","a4346d59927ff96757b9dfee96a0764e"],["/2020/12/06/nokia808/index.html","cbc3e476b3d20ec79430550787086310"],["/2020/12/07/ipad1/index.html","19dd6eaddc13df574c2f5bc5e97d763f"],["/2020/12/18/freesubscribes/index.html","83e855af656cd1697123532e4e55f8f2"],["/2020/12/19/musics/index.html","bf5e7b6c329f7b5d2f0283c31aca76df"],["/2020/12/19/shadowrocket/index.html","41ccafc17adfad88e07b83a664fff721"],["/2020/12/19/v2ray-windows/index.html","787de6b84617c3f19e009bf22a0e59a8"],["/2020/12/19/v2rayng/index.html","c52d2bc91b7b9c2b50772dac9dc23a1f"],["/2020/12/20/beoplay/index.html","d3b54be5782c509a465b3db938065299"],["/2020/12/20/订阅链接转换/index.html","03b6df465cffd07fa75a2f79ed07142c"],["/2020/12/21/chrome浏览器下载提速/index.html","27e5d6e12542bf74faa8920adad77f5d"],["/2020/12/21/免费128线程并发下载xdown/index.html","d40fbb3faec5a00c4118d012836812e5"],["/2020/12/21/免费32线程下载软件ndm/index.html","6a002573fc58d303914506c9e1d25d2c"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","cca5587d709655ff0d715378a1550e8d"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","2a3c569d23ef4abf7368c1b14e7ecb2f"],["/2020/12/21/广告怎么知道我在想什么/index.html","e8ce0c6e133500f6f7ec6d3d3982068a"],["/2020/12/21/无名·引子（小说试写）/index.html","6097c5f5c6b63b072d6b412aa83075a7"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","41ab93194913e47d0293298ace6cf954"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","ef3d02cce87adfb2e4d0957503f85a89"],["/2020/12/21/高速轻量下载器aria2/index.html","5fd1c589fd605bb91545a198ab634192"],["/2020/12/22/2020-cee-roo/index.html","04ae739fc40c402df590b6b4f8f0a28a"],["/2020/12/22/firefox插件、github、steam富强/index.html","a1f48e373e0d943b53e8a0ecb05cc28b"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","ae32053f42a5d0206f4131c0a65a94a8"],["/2020/12/26/python-day-1/index.html","8586ff2565f7dd82af7832f962adbd0b"],["/2020/12/26/python-day-2/index.html","6b96a3ea784a8ed6ac9ab9b081029c1c"],["/2020/12/26/度盘不限速下载方式一赏/index.html","7652f9640e7e7485f297293e4afb3247"],["/2020/12/26/添加开机自启软件/index.html","71226cbfeb5c904bedbff02dd6029016"],["/2020/12/26/电脑端截图方式一赏/index.html","aad75544b065162168580ac1b41d3635"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","86cd624516ed271a824e41acede4f334"],["/2020/12/27/最安全的浏览器tor/index.html","b5289f448b4064335d5d44c008f39bec"],["/2020/12/27/网易云刷等级和听歌数量/index.html","c69b107f625910fdd5983554c0ebcdb6"],["/2020/12/28/freenom申请免费域名/index.html","cb5671e7370844bc93c2c950d0c2f6db"],["/2020/12/31/机场/index.html","4a3685918d0ccaab14283e8b8c31602b"],["/2021/01/01/M1/index.html","9eefe4848396d7fde84a57b2c6ab5559"],["/2021/01/01/compress/index.html","77701bb73eb96625ad990cd17e22ff04"],["/2021/01/01/infinityfree/index.html","6a08aeed8fd7c7b3eedd2c1dbbca1d74"],["/2021/01/01/硬核翻墙/index.html","9f8934ce4fedfd9aa104ee568bb73d06"],["/2021/01/02/qq/index.html","d81735716d504b04bab33db87c60b0dd"],["/2021/01/03/netch/index.html","466e8af8717c9e2ea583cb798583b642"],["/2021/01/03/waifu2x/index.html","66ab6f95e400ea56862b94345cec7c8d"],["/2021/01/04/ads/index.html","e4f79d87855b376f85543bf610ff4917"],["/2021/01/04/games/index.html","0a6d4934592246aa6cdb54b97a728882"],["/2021/01/04/heroku/index.html","3076289a4977b0b373c176e6b3b7231d"],["/2021/01/06/movies/index.html","32ed79ffe12222b675a7de9ca28fd0a1"],["/2021/01/07/google2020/index.html","6eb7f749dd5c698cf38d7223e9647482"],["/2021/01/07/lucky/index.html","49a56fbdf8a800bacd469da457780a99"],["/2021/01/07/spotify/index.html","ba428c35f07c53260f9d9d0df10b8084"],["/2021/01/07/thunder/index.html","790d79052807fe8ce72f4d83a0316a2e"],["/2021/01/08/adguardhome/index.html","7ddde3dd933e3bd725e04a71a17e6372"],["/2021/01/10/IBM/index.html","2279fc81826ec5c74e08fc5552eaef1c"],["/2021/01/10/potplayer/index.html","c201347cffde53f2bffaac88563fde21"],["/2021/01/10/sakuraanime/index.html","0d25a83eda321a1947a00f42b72ec9c4"],["/2021/01/10/美剧星球/index.html","303eca637eb600a7e65b122433f4ca10"],["/2021/01/12/telegraph/index.html","044a1e7e5219499adb0272ffb664a2fb"],["/2021/01/14/comics/index.html","cb578621485d9d5cae349cf2ed208045"],["/2021/01/14/ftp/index.html","2a9faca454579434c0ec29637d261b9e"],["/2021/01/14/oraclecloud/index.html","abbc2c8030b3436b51adb2f456c95cb5"],["/2021/01/14/porkbun/index.html","ec5b5f6cb06b13c38b507b9e881b8a28"],["/2021/01/14/powertoys/index.html","0ba8c242a76b8d487367d53526fb1be1"],["/2021/01/14/taptap/index.html","e06db45e0a12cf729114b6a22c0a1f06"],["/2021/01/14/ubuntuvsftp/index.html","f3245f391173fbc40919e4a6924bfd12"],["/2021/01/14/小说/index.html","b18cb84a298c217dca47ecffb54c96c6"],["/2021/01/15/freeproxies/index.html","fc779ddebe07602c37675dc725dc97b4"],["/2021/01/15/incaseformat/index.html","7acaa708945b6ca9144b15e77824e493"],["/2021/01/16/euserv/index.html","f5af19dc7c6ced679f486c765b01cadf"],["/2021/01/16/winxray/index.html","6ee27b948f672aad4c5df2f81dab5d44"],["/2021/01/18/qqreadhistory/index.html","7378bd328d18514c9e1f6f6c03325163"],["/2021/01/18/qqrevoke/index.html","9b3bd6c46964bf6ab107d64d4f09200a"],["/2021/01/19/freevpn/index.html","772f032164fd38e4ca189451910f7cd9"],["/2021/01/20/browsertrack/index.html","f21b07d887ea697db295d11a52869433"],["/2021/01/20/v2ui/index.html","b8f92018f0220bdc106dce05e04b091d"],["/2021/01/21/failedtoconnect/index.html","bb216f8705e8c838b18103bb8dca7034"],["/2021/01/21/gitcalendar/index.html","52a5ac85896c436ef978e54c5ab43d40"],["/2021/01/21/markdownformat/index.html","e1f3c4d9fe99a0017815dd096dd42399"],["/2021/01/21/markdowntable/index.html","1dfdce366efb220b225846c3df15c80d"],["/2021/01/21/vercel/index.html","a85767119c2aac2420dc669295deeb10"],["/2021/01/22/hardware/index.html","5d67de5ec35b54ec29a4243542f55c17"],["/2021/01/22/muviz/index.html","8f2b25b100c4d06dec06da5b00019863"],["/2021/01/22/randomapi/index.html","136b8435b4dfab221e4a7a4e2763caa9"],["/2021/01/22/searchimages/index.html","826c2475f41db8d7aaa6893e49149260"],["/2021/01/23/RX文件管理器/index.html","f159b6daf48eae614f55c5136d76f0ae"],["/2021/01/23/chromeflag/index.html","54e3c35c043c1db90460e32e7ebf4301"],["/2021/01/23/qttabbar/index.html","c7e73a5613efe4f308afb3228c5963fc"],["/2021/01/24/githubspeedup/index.html","4d88f6d34c39929f053cf7ec339bf868"],["/2021/01/24/jsdelivr/index.html","7de3135bd39497b2923863e0e8f6bd76"],["/2021/01/25/note/index.html","225f654b75f9e8a1901b26abcc368e0b"],["/2021/01/25/soul/index.html","ccc7df3ee1a1ceddc1e78be666a821f3"],["/2021/01/26/herokuxray/index.html","7987c0d9e7f773864132223410173637"],["/2021/01/27/proxypool/index.html","e0b98ebdc94c22bd77f4d2896ed1b3b5"],["/2021/01/27/tracker/index.html","f16d9feca92dc5210b458dbc50dceaef"],["/2021/01/30/pandownphp/index.html","cfb1f7c71b17f906ddc4918daf729916"],["/2021/01/31/newgroup/index.html","246180a591fadf84b15fffd750760282"],["/2021/02/01/clashlanguage/index.html","fb08cdec9329f4d6bc1ccbcc8319c822"],["/2021/02/01/encrypt/index.html","d88c62473010395996d9ee596ab4f147"],["/2021/02/01/footermotion/index.html","1abfe9e1b8a4d303ac7e6acb767b236c"],["/2021/02/01/gitter/index.html","03130affd9697ba462c50d56850baa26"],["/2021/02/01/pixivtop50/index.html","966caaf271321a54143b96000238c19e"],["/2021/02/01/scrollbar/index.html","3dc5b0da977539ddb54ea6becb7872ad"],["/2021/02/02/clover/index.html","ee9021b715a5fde73c24cd6d9ae9bd34"],["/2021/02/02/maya/index.html","f6cbf6af356d73a8ac6bd1cfc850d835"],["/2021/02/02/speedcontroller/index.html","b4457287cf80806807279c25525d0202"],["/2021/02/02/yesmusicplayer/index.html","769618820cfc827d27c02d0f6a16f38d"],["/2021/02/03/lenovoonelite/index.html","dea8ab7f13920c2995c2256f73f726a3"],["/2021/02/03/skipads/index.html","9f2e1c73dd82537a794c3df716420752"],["/2021/02/04/picseed/index.html","76ef52bdfaf37e46e43a08f04b13cfb8"],["/2021/02/04/renren/index.html","7298f0bd149eeaa80bf15b5c632e4fcb"],["/2021/02/04/serverstress/index.html","63a663cb2b25300bdd9bb017ac773b1f"],["/2021/02/04/wikipediazh/index.html","b96f51383cb45434106165f3d56eff4f"],["/2021/02/05/googlevoice/index.html","d62aefe8be2ac76d92644253084a414a"],["/2021/02/06/clashconnection/index.html","024404ce469b5d2a12cb948624015b87"],["/2021/02/06/gvtransfer/index.html","a39fd84c6151785356b071e485b70eca"],["/2021/02/06/todesk/index.html","60309e138d4c8eb11bae292d7e4f325d"],["/2021/02/06/vpnblacklist/index.html","764d56106e41ea755d9dab272552c282"],["/2021/02/07/mklink/index.html","434c224e6198869b020bd9532da6cc3a"],["/2021/02/07/speedtest/index.html","f1cbbd506b52e9a9dffa3a5c0926bc0f"],["/2021/02/07/translate/index.html","3e38b95895f55245a19416cc84530da4"],["/2021/02/08/ewomail/index.html","f2bffd9427c3bd209c3515e3f1f292f6"],["/2021/02/10/officee5/index.html","b0ad25d77b9800bb12a07e62ed102c81"],["/2021/02/10/raidrive/index.html","9405fa4e2639049a8344abae5aa9461a"],["/2021/02/13/e5sub/index.html","6f07fab0494c61f2db8e07092156f6ec"],["/2021/02/14/screen/index.html","7f4779beac705e756d397442654c12a9"],["/2021/02/15/clashtun/index.html","44433c5f071b1655774220cadca0a96f"],["/2021/02/15/messageboom/index.html","dcda60155798fd19ea797812c915a20d"],["/2021/02/15/oneindex/index.html","e3f294ff05ea88ed9b229d5a724edc29"],["/2021/02/16/govsites/index.html","cf52498e56bdffef72cc0f45b1c68a09"],["/2021/02/17/hexototypecho/index.html","5de10c47e455495a4292274bfd1ecd68"],["/2021/02/19/fiddler/index.html","a5aca3f75b7d329f97aa641b1dd174df"],["/2021/02/22/potplayerset/index.html","97357151889288d86e525140284f897c"],["/2021/02/22/studyresource/index.html","11c18a1d8142720b2d22dd0b5fc4b1dd"],["/2021/02/22/telegram/index.html","22b88d422978c4fa3c3cbbf672562712"],["/2021/02/22/videos/index.html","23738b7d35308f8d28b0543852c64d88"],["/2021/02/24/mtproxy/index.html","6e1d999a794f01ad781920fbea61f567"],["/2021/03/10/catchcat/index.html","810a8503d6e3b366ec3317e79df3dbd8"],["/2021/03/10/neteasemusic/index.html","2dfaeacd1e1563a9d6239634e8b9787d"],["/2021/03/10/surfboard/index.html","2f4451a89a0f3cb7da43ffa479ce95a8"],["/2021/03/11/vpnandjc/index.html","15b9eadc6ce6801d38e04c33714e8015"],["/2021/03/12/qrcodes/index.html","3076a2ced56431e8cb25d90197811a37"],["/2021/03/20/qv2ray/index.html","30f94a22a8d25580893dcd902a4f298d"],["/2021/03/22/freevps/index.html","f9f9ee059b92e07d8318f80c63926607"],["/2021/03/24/tgstickers/index.html","534d999978e56b33347d1207c3366ae5"],["/2021/03/25/clashx/index.html","88ff767fd31a39c6e7f7325fb3c7498a"],["/2021/03/26/bingwallpaper/index.html","562d3b7fb56b916b045cce9328358849"],["/2021/04/03/soutu/index.html","75d681bc071bc42f022c164514545566"],["/2021/04/03/tiyunti/index.html","a2a1a3e4f9d411d984b59e875cca9b29"],["/2021/04/04/btpanel/index.html","3351bc004b9b9e8d49a8ccb6394f7679"],["/2021/04/06/atlasos/index.html","ef59009f18193fb8d5a6ccdc66ac6761"],["/2021/04/06/cleaner/index.html","55641d8ffd0100f0a32526566fae39ae"],["/2021/04/14/asf/index.html","5ebb6354973824a39dc964de3b887eb0"],["/2021/04/14/rss/index.html","4cc7da5b02895b577aa618d55bcc09e1"],["/2021/04/15/cpulimit/index.html","49dc004be485a5c58a618f16cc91d159"],["/404.html","f42798cc64048f64e729dd7aac1546f6"],["/archives/2020/11/index.html","76569af5531be7f4ef49aa2df62a9175"],["/archives/2020/12/index.html","bd854731e425884cf6bb8120e1732acf"],["/archives/2020/12/page/2/index.html","5b243230e26252e68d8d1f389371aa5e"],["/archives/2020/12/page/3/index.html","dca395bc2c127feaaa14560aa7af4dea"],["/archives/2020/index.html","f7548250a643f678384f48ada745e656"],["/archives/2020/page/2/index.html","12fa8f38972f05bc523d329c7411adfc"],["/archives/2020/page/3/index.html","519d78ce843db1f08b20b44c7056abb5"],["/archives/2021/01/index.html","d2665d9777867140079920ad500410f3"],["/archives/2021/01/page/2/index.html","ae4e4752686ae5e29ea487aaffb5860e"],["/archives/2021/01/page/3/index.html","56478ee3f8359d1b4eab0f5944c733f1"],["/archives/2021/01/page/4/index.html","34ee664bfb8da08afd70a0d0309b336a"],["/archives/2021/02/index.html","b8c47f5500ce1c5dd541bf3b292a8550"],["/archives/2021/02/page/2/index.html","cdea6d623998fdd7410be10e26b84f60"],["/archives/2021/02/page/3/index.html","cf041a7703ca8534d25e71e46a6b1501"],["/archives/2021/03/index.html","f387dd9c9554561d30427a23dc05d5be"],["/archives/2021/04/index.html","a4e44d4e97ec7fb354b87d88e8a94ac0"],["/archives/2021/index.html","39848c0ee446a001de1412557ca3ee0e"],["/archives/2021/page/2/index.html","dc7834cb6e1018266147c4eb49c72f6d"],["/archives/2021/page/3/index.html","ad7c64822c2ec21f8eb1a7ed45e27764"],["/archives/2021/page/4/index.html","28f4d2cb749ea2f71d474290f22b40ab"],["/archives/2021/page/5/index.html","0e9302aa617a37c74677b18d31c9f63d"],["/archives/2021/page/6/index.html","2948216003dca612ac57896f772eee55"],["/archives/2021/page/7/index.html","f60b425769726994ba295c0f5f054175"],["/archives/2021/page/8/index.html","027545e51a03146ad5d6e187781d0cd0"],["/archives/index.html","2d92aeac81ea4817ae6c9643a133f3b8"],["/archives/page/10/index.html","b7feeb9874666ddaa50653adebcdba4b"],["/archives/page/11/index.html","407ef73af3ca4d55c1cb9162dae93ae7"],["/archives/page/2/index.html","d8b4583fc941b62d9e975aa5133e0ed0"],["/archives/page/3/index.html","2d2020711f0bd59825d3b88a5a7ffdf1"],["/archives/page/4/index.html","279ce58a67a53c7ba3d7f598efb23b70"],["/archives/page/5/index.html","af7844b14d82bb8da57e8311d311dde3"],["/archives/page/6/index.html","933609614987dedeee8d6ae1ce53f472"],["/archives/page/7/index.html","354eccf7e659144004d648b8b1b8ffe6"],["/archives/page/8/index.html","80fa35905f3b09b538fe6ccc76064ad5"],["/archives/page/9/index.html","431fb8d20f7d62745f80488128757b1b"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/atom.xml","6fa1c52ef07a5fe7f3d866636af00657"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","441cf60646b06a44b3ba0011783b80a8"],["/categories/index.html","c40a790ae3c7b3ac347059cfa1ddc54d"],["/categories/下载/index.html","c86e870b289bb314aa0ba6f2ff1a9d03"],["/categories/安全/index.html","7bbb7e04130c0348485151248ef593b3"],["/categories/建站/index.html","a1e5c004e9bc47651a360d3164d9af27"],["/categories/机场测评/index.html","90ce34ae3af963ae01b6fa9332bf0bd1"],["/categories/杂/index.html","235a86e83ade0a9fd23308095aea0b44"],["/categories/杂/page/2/index.html","fa8fdff4782bdbfdfb3c2ff9d9694e89"],["/categories/测评/index.html","729196ef20e40e71afcc666eb2c70ba4"],["/categories/科学上网/index.html","e4944950f778f0a6f90645cabb24ca40"],["/categories/科学上网/page/2/index.html","63fa57d21df6cea0020966d62bf8d42d"],["/categories/编程/index.html","a9e1b30ea4120e88e307a789ef0dec42"],["/categories/网站/index.html","24bdda3bbf5bac9c3572a9ebdab14741"],["/categories/网站/page/2/index.html","1993498cd10e5a96351a2345ef8eef67"],["/categories/软件/index.html","6d7be8e0f3aec486c48dc8974cd8b7c0"],["/categories/软件/page/2/index.html","0f133f385183d402b478b42333436841"],["/categories/软件/page/3/index.html","8829521047110e3585cfe5c7948397c6"],["/categories/软件/page/4/index.html","988d471a0eb9f98a2ef087a8adf54a16"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","a2192da398b1b7fdf555c89d8bcccb75"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","cecde1073f6b54a1797b9a35eaa0401f"],["/ios/index.html","505fcaf700a0a5262fef3958c26c7620"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","af7c8bedc045a3f6ba11785db7d0c6f3"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","aa264ad55d0caef5363faf25c54693ad"],["/page/11/index.html","9d0b1f29c099e69dd2e49f74494fda13"],["/page/2/index.html","97b642d4b910a1c27cb3c990223eb44c"],["/page/3/index.html","b80ddf75e83cd53c78a747005f532896"],["/page/4/index.html","829e2b53f631b84b88df3d2591ec3835"],["/page/5/index.html","adfbda53893027be1cc0134adeec0ae4"],["/page/6/index.html","32efb0fe6bec331d2e45449c3a87db5b"],["/page/7/index.html","92aede05403ddc73c284f9b845044af5"],["/page/8/index.html","3998fd7d7af8fbf71179cf3941f4acf2"],["/page/9/index.html","0317e6a28a56d3b04ef7bfee8894dc91"],["/payment/index.html","c3ff827463c5382dff90f0e25218110e"],["/privacy-policy/index.html","177979dfcf9c77125467982f9a9f91d2"],["/search.xml","40e927687b578f6f26140f7a6dd01507"],["/sitemap.xml","eafe7f7ec64aa9451bcf594b0c8c851f"],["/sw-register.js","763e8af1b9b4e249fdb361adcf0d1747"],["/tags/5t/index.html","ed2845ee0f356a1d47d431e31c4bdf65"],["/tags/Bing/index.html","3fbf897246464b2cc6e4749360627c03"],["/tags/Clash/index.html","65d12eb41d4a053779b450ea38064b8d"],["/tags/Clover/index.html","53f71e7140259970abd347f2f8750b77"],["/tags/E5/index.html","3805cb55695e3cf3bb8cfb4885ef01d1"],["/tags/FTP/index.html","19b6645c57f022e1e05c2b36d01a4f97"],["/tags/GitHub/index.html","16f1ff36847e9e21f135fcdab461c4aa"],["/tags/Heroku/index.html","bf62d7b245f72a0c4d4d2d660359d8c3"],["/tags/Hexo/index.html","d1f8b5b3121680d8870af3db3659c937"],["/tags/Lenovo/index.html","4dccf3c956ab5e93bda2f0cdccea0c57"],["/tags/Oneindex/index.html","5cf2054a8ec20e2cebc6380768fe1fee"],["/tags/QQ/index.html","3c3b68917080214959071520d6bd7fcd"],["/tags/QTTabbar/index.html","9f2fa81e96a952f8dcc8cd2b55b3be92"],["/tags/RSS/index.html","5a37e5b7f61dd2ff85c5b30654b86297"],["/tags/RX文件管理器/index.html","41b08c13a592f3bffcbdca88e73fe774"],["/tags/Todesk/index.html","d43137ed2c8b3b61fcbc0f709f7c69b8"],["/tags/Vercel/index.html","49f60db976465d61fa9666de64d52abd"],["/tags/ads/index.html","4fb8a769bb28918372c0887a781540ea"],["/tags/api/index.html","67500a27c1fe6ca7dc932b893a8be277"],["/tags/app/index.html","579e55c1c758b96ad2f7cc9014de1a9a"],["/tags/asf/index.html","eafedf6e17087cb145a19bd9c27ebd66"],["/tags/atlas-os/index.html","6740bd75fb284d1e49d126757fd7e6a7"],["/tags/bash/index.html","758dcabe5bd45a2fb1e3e4e74ce28a8d"],["/tags/blacklist/index.html","361c77c1182884abe678e2a84f80ae75"],["/tags/butterfly/index.html","5fd9a77a3391fb366d5d272769c8375d"],["/tags/chrome/index.html","b9f75ec86f6410eb94190928ba10cfaf"],["/tags/clashx/index.html","e07dc6c45038c7e80e51869b08ff17a1"],["/tags/cloudflare/index.html","4a3056c15dfbd7af3e520e41e1307808"],["/tags/cmd/index.html","0fd7dea04ea1a9c748901c52ed07926e"],["/tags/cpu/index.html","c1653aee8d86a2b8c5936287bfc31616"],["/tags/cpulimit/index.html","4887b3df469dacb6ea6d7a8714b1d76d"],["/tags/c盘/index.html","0419d32e35d41811552fa7eecd07c781"],["/tags/email/index.html","94561a7c740d71a7837ecd545678d27c"],["/tags/ewomail/index.html","2f26e8c95e04150c82385d28a1a4974a"],["/tags/fiddler/index.html","bcdfdfa988d3198c382538cdeaf4e6a9"],["/tags/flags/index.html","60b43d0972793d8f2198d79d977d73d2"],["/tags/footer，页脚/index.html","a55561441f148773a6a02b6b30532551"],["/tags/galgame/index.html","0575c5ba4e0fdbcdebd7e5560787b104"],["/tags/git/index.html","6d1fd8731605addcc7d0b90798a23da7"],["/tags/gitcalendar/index.html","2d621af2ab4b4c7617e2d5abf404e08d"],["/tags/google-voice/index.html","a559c8435b47a94cdcf9c0983229a8db"],["/tags/gv/index.html","8a7154c3bd25eca1afc4062e45371428"],["/tags/html/index.html","4f3444ed2b3725706611ca74625c79cc"],["/tags/index-1.html","5a62c849cd825b1da4c1289160f04f58"],["/tags/index.html","ecc3a983921a3b66bad667380c1240b6"],["/tags/js/index.html","34211fc2ca5ae69ef89c12b3a9b2c0ab"],["/tags/jsdelivr/index.html","9005cdb1d591c0dc3d151be717ec497d"],["/tags/linux/index.html","f71319369a4bfd75ec3e74f9512a82ba"],["/tags/macos/index.html","55b30ae253dd3af6e0c43fe596116063"],["/tags/madVR/index.html","b76a35d61f4f4fd96a6e7f3431c323c3"],["/tags/markdown/index.html","786570a9ea81d809a6b4da63a39bca35"],["/tags/maya/index.html","e48879ab7943aab28fbff84d60b0d28e"],["/tags/mklink/index.html","b490f702a52e6356fd98b3659a7f4a45"],["/tags/office-e5/index.html","eee22a68d22ad1d79345ff8faac35a49"],["/tags/onedrive/index.html","b33435cdadeab9098fbfcb223cd36698"],["/tags/picGO/index.html","7450c7d04ddb121896e0feb36f79ebd9"],["/tags/pixiv/index.html","dc6c1ec98c3b31b48f2e3f56ea30edbc"],["/tags/potplayer/index.html","27e74578ada097e6da50fd2d85d542b6"],["/tags/proxypool/index.html","1ba093d18cadbf251d9b4fd25be947d8"],["/tags/qbitorrent/index.html","b3c11e3f0a08355d7e324801ad881a68"],["/tags/raidrive/index.html","5412c5434f47bc150a108427927df88c"],["/tags/screen/index.html","a0fe8301b268f73714751e73c036a13a"],["/tags/speedtest/index.html","b34e280a7a3e09bc40584d00a9821208"],["/tags/ss/index.html","954d00bc70bf94ecb2f810b3efdce879"],["/tags/ssr/index.html","d0535b4f5125d5ab21f87aeab3318de4"],["/tags/steam/index.html","d62368670f7cd538ce6dfcf1e1d43d05"],["/tags/stickers/index.html","33f3bde892bc97c166d37ac12a06d9ab"],["/tags/surfboard/index.html","007c4616b4a0b740ba2e192a59e294ad"],["/tags/tap/index.html","cf66402000d2874a343d647c7b0c4b6e"],["/tags/telegram/index.html","890f420e9a80dc56f9142c3039329909"],["/tags/telegram代理/index.html","ae4e164ef8963e410fdc348599307fd0"],["/tags/tg/index.html","628864440815ea776c610bbbb68bdd89"],["/tags/tg代理/index.html","41d830b1a9c1a62355572926fed2372b"],["/tags/top50/index.html","7771ea27beab6d6c629b677663bbc5d0"],["/tags/tracker/index.html","6b5324f26f9b146ce7f7709b9446822a"],["/tags/translate/index.html","ca868f8133e9f81477be6da7eadf1a3e"],["/tags/translater/index.html","d2bed870870bdce68b1210d3eaaec97a"],["/tags/tun/index.html","1b9c42661053b16a101a7eb42d176fb1"],["/tags/typecho/index.html","ff86ba1f3a9848cf087c950fcf6496f5"],["/tags/v2ray/index.html","2dfd10ce4f254e2cb9eb6d3df683e369"],["/tags/vpn/index.html","425a78d2e8281dd19d8cfa0d65a5f91e"],["/tags/vps/index.html","1251fa2a170507b76c13cedbbfda5808"],["/tags/wallpaper/index.html","23cd26240139fe283960db0b3fb516bc"],["/tags/windows/index.html","fc044a8efe40df4c541d80be6d253b99"],["/tags/windows端/index.html","7918b335c9dea9ee15cfae68ceece70c"],["/tags/xray/index.html","9a9ab6e25b1ba60bf955a194587213b2"],["/tags/yandex/index.html","dab20d2661b9584a96ab6577f966d806"],["/tags/下载/index.html","b7fe884f08a3e1b6d1f6f04b16171edd"],["/tags/不限速/index.html","fa4cae1451afee53cf5cbb52ac54c6d1"],["/tags/个人网盘/index.html","e783a5e2760b2bab81757c76582c6255"],["/tags/主题/index.html","9d5643f8b997ec595e50ee126bdbda86"],["/tags/二维码/index.html","10c9af90acf27b13ba585caf9895e141"],["/tags/云便签/index.html","08a090adb451e764c88e06f152a6c74b"],["/tags/云盘/index.html","8ae201337ab0fe5674a38998290f8718"],["/tags/人人/index.html","412da5864725fb8fca3116cb1e52c303"],["/tags/代理/index.html","9b831b2ad1dc72407a32f5fdd279b54a"],["/tags/代码/index.html","64c6fa74901a65526437dff6613fbb28"],["/tags/优选IP/index.html","ba787640a957b994f2f2d858213232d2"],["/tags/便签/index.html","73dde6e5f57c3c8c9c3f32dcd4c6a1d5"],["/tags/保号/index.html","2c98280eca455385e6eaa20ce010493f"],["/tags/免费/index.html","731b65ed81974ac5d21578df26d6fa38"],["/tags/免费节点/index.html","ddadb4b4f08e5a425ec7a4d598195312"],["/tags/冷门节点/index.html","ef2f7e58e4ac3fbdf7ce07d28f1ac920"],["/tags/删库塔/index.html","67a981a7a190430fe75668ebe73a9eac"],["/tags/加密/index.html","b5bbccb152cadc417afbfc95f5eea727"],["/tags/动画/index.html","b6752fca403f29cf67b0209fa7d83821"],["/tags/博客/index.html","f8c0fecf20875c36babfbdb94a101e5f"],["/tags/卸载/index.html","322205bea6a86dc736fa3a1ded24e1ff"],["/tags/历史记录/index.html","dec5e0f78354250d86310f785fb4d1f7"],["/tags/压力/index.html","13b55c8893373c664df970edf7031397"],["/tags/压缩包/index.html","f44742568e05f46e1715a21c034a3312"],["/tags/反代/index.html","3294d721a1b631009598f6e45883dc07"],["/tags/可视化/index.html","579d0806bb98177b85fc641e8f96d3a1"],["/tags/命令/index.html","ebe61aac5148caf64c044cb49ce4dcb8"],["/tags/国家/index.html","b9ebb11e87760ca176a6d2911a8bd573"],["/tags/图床/index.html","cf8f6e229f5cdd1dab2343ad73663d1c"],["/tags/图片/index.html","51b48e6bbae04bd70eedbba4a0d83e26"],["/tags/域名/index.html","2fdcd1f7030f5a27537e28e2a37ade65"],["/tags/壁纸/index.html","909cd03966a12365f1f2c124d5d678ea"],["/tags/多标签/index.html","5e2aa174e5258afe743a6d2187bd87f1"],["/tags/奈飞/index.html","7e6ef7da532cb7a189c5ebdd23b92549"],["/tags/存储/index.html","2a4966f2b65ebd8d47b5d2ddc2da89b7"],["/tags/学习/index.html","5336241456f31d59af46e7a5bdc650e0"],["/tags/安全/index.html","41f55214eaafd87870ba1b077bc3d26f"],["/tags/安卓/index.html","d61bf16c8c469d01ab314f8383d5b827"],["/tags/宝塔/index.html","aade1ab045280c1a849d4b8cc20392b6"],["/tags/小游戏/index.html","9a1d42bf0e0d7561906e5c040194cad2"],["/tags/广告/index.html","45564322c6328b529321c68d4bc0edb2"],["/tags/建站/index.html","536579255a25a0d57a9f82c6164c4ada"],["/tags/影视/index.html","0cb1abc44708c5f261eedb0535f62159"],["/tags/微信/index.html","77e9fb3799dc8d0b0d697bfbf8945b55"],["/tags/快速启动/index.html","9dda212c51db4af67d9cc7dc3d16bf23"],["/tags/手机/index.html","c0a4c1c003bdbc6d746e6dc46658af82"],["/tags/托管/index.html","badd54348e94e2b88398f6e3209795fc"],["/tags/抓包/index.html","c5ebef2f2092ce803a2f0e7005546413"],["/tags/抓取/index.html","72d7e0fc4a30b5508477204213e19434"],["/tags/投屏/index.html","a13a218444ce672b7b81bb8aea8dbad3"],["/tags/拓展功能/index.html","cd2883fd3b0e8336a08284a5481623a9"],["/tags/挂卡/index.html","10111ebcf808c0e2e741243f62127f34"],["/tags/挂载/index.html","963f12064dfba71ed8180b16eabd40e2"],["/tags/指纹/index.html","ddcde858e3a84a95504b68fae8e5c855"],["/tags/接口/index.html","99c817ed962e04e1e205e04e742e3115"],["/tags/提取图片/index.html","c766febab11c72cb48a84bb72fd2e009"],["/tags/插件/index.html","a936cf986f8fd534cf30a4cfbd5394bd"],["/tags/搜图/index.html","995aafb36aed00bf61f76a8554568b26"],["/tags/搭建/index.html","ca2153469709a4be04a2c9dc8ba3f67e"],["/tags/撤回/index.html","e2c289e28b974c5c5b2bc3d9a02a5821"],["/tags/播放器/index.html","3b41e3f2d867b656d380e6a1d9d12651"],["/tags/支付宝/index.html","2cd9c02c86cfef1056aac67f5a7eb0ee"],["/tags/政府网站/index.html","62e37b9477717195b67aa97e05ec179d"],["/tags/效率/index.html","efc87af04cb9184b6a6497759ef12139"],["/tags/日历/index.html","d275801e4dff59ec615969c9c37cd4ff"],["/tags/服务器/index.html","99dc7a1cb0b0d70295231e225cdfc4c5"],["/tags/机场/index.html","d2924863071c3ea2149ff51180da3fc2"],["/tags/查重/index.html","679cd1fb47c22867a8a9c6ae8e5544cb"],["/tags/桌面/index.html","be4a38bf33c04ca08125477ca73e19ed"],["/tags/梯子/index.html","f334cd2b2c3a8e1d2e2932b5705d8c35"],["/tags/检测工具/index.html","23dcdfc5d2b8fc1c076d51769d469660"],["/tags/汉化/index.html","3e1129812f81f9ad8c4e3532c2facccd"],["/tags/测压/index.html","4724df7a4891fd0a1b1279d8ff5ac243"],["/tags/测评/index.html","18cd765e486eaddf87fcd4b674930828"],["/tags/测速/index.html","aae9c901ef22bdc1321c2583c745b83c"],["/tags/浏览器/index.html","3d4899b259f30ffab5830fcb5cbcb14b"],["/tags/清理/index.html","a0504911f6ddda3ab1bd084322bcbbad"],["/tags/滚动条/index.html","1b86a51d2529fb7ee29a8c86a6007a85"],["/tags/灰色歌曲/index.html","12aa1fe0eeeadff731e49fda37dfc2f5"],["/tags/电影/index.html","5bfdafb95acaef10e770e13bf8177c14"],["/tags/电脑/index.html","87cc6a2c2568373e0269bf6c6b0eda4e"],["/tags/电视剧/index.html","5ab71871112469664284e707aebc557c"],["/tags/白嫖/index.html","9bcfd86efc6243ba523841db04446177"],["/tags/百度/index.html","a0da2ad81887c7fa05334c766062a7e0"],["/tags/百度云盘/index.html","bf5031326c2b7cb2cf2389d83b9711fe"],["/tags/百科/index.html","69d668da82b45f2a7a270e6fd978e553"],["/tags/短信/index.html","de5e3f8922471b91c5b75d60559b2ab7"],["/tags/硬件/index.html","dc7cd551f214297c33bf2a9b93002b97"],["/tags/科学上网/index.html","12db631564cf857f9422bbe52c3ba89c"],["/tags/空间/index.html","ad1c9f621ee80d1dac10cbf2bea255ff"],["/tags/笔记/index.html","0c9b17adf8679777f13f6e3a3456da35"],["/tags/简洁/index.html","8f6de359ebcb30c7bd3b1873120e3be1"],["/tags/简约/index.html","418b9648ded95d8c35fefd2eaba5359d"],["/tags/维基/index.html","574ca6952e6c891529ce977ba71f1bf2"],["/tags/网易云/index.html","21dbab000f53dfa0769ab41ac58cde5b"],["/tags/网盘/index.html","455018cbcc3b5639eddd8345d7a41b6c"],["/tags/网站/index.html","b0d3a8b5be5a12c604f958732d0ee48e"],["/tags/网络/index.html","0e0285e5fea63ff432ec51db655d5559"],["/tags/美化/index.html","759dc9109b887d6bff2f22ddf5856198"],["/tags/翻墙/index.html","80b59ab527dd437c7a345bfaebbe20f2"],["/tags/翻译/index.html","9ef33371c99010dc90acbb5f753bb323"],["/tags/翻译器/index.html","ef2dc19215c7da09b4543d626db127ac"],["/tags/聊天/index.html","ec4ac38f04203753e08e36008bd5c140"],["/tags/聊天室/index.html","af928f2c06fdab065a0b843d8e162f66"],["/tags/联想/index.html","43f9952528cc42f54c375e369a7466a8"],["/tags/节点/index.html","7d9f534c5cf87dd2c9824cc3feeb063d"],["/tags/虚拟手机号/index.html","090db2eace40b76556dbe26058adbcaf"],["/tags/补丁/index.html","e37f149067732beb638e54ffd86b6812"],["/tags/表情包/index.html","1ae19a8538ce98d198f5512f740f68c0"],["/tags/视频/index.html","a6edf4e31cce37ca6f4fddf137213c56"],["/tags/解析/index.html","f406d9af0505cf1af1744b6f16572bdc"],["/tags/订阅链接/index.html","303af3d1e573372a78c422659f07ccc2"],["/tags/记录/index.html","991bff2704be088c1ba5012c3003299f"],["/tags/识图/index.html","b5546db7486710fdbb8b2330b5bcd20a"],["/tags/语言/index.html","d2c9a9e734c5ff412a945cefea0217d0"],["/tags/资源/index.html","ada8ffbdd0fb863c0bd8411848f8f583"],["/tags/资源管理器/index.html","9406cc0b8b159c6778731396c401d546"],["/tags/转移/index.html","d15efb691c7c9155aea1ea5fa081fdad"],["/tags/软件/index.html","14ccdedd08bfacda92e8022dd57cb518"],["/tags/软件/page/2/index.html","e9516348ffd4154e5f887ea1166edef9"],["/tags/轰炸/index.html","8a5830ec64b7b89caaf4091ddd7b6c9a"],["/tags/迁移/index.html","dd6eed3fc54adce5250f433e4da41d73"],["/tags/远程控制/index.html","9e9536d01bd1a8114a6e6f17d4ff65ef"],["/tags/连接/index.html","5685432aa10b1363f4ef0629feca4ac8"],["/tags/追踪/index.html","76241a8c8b6f1c5cd0ed50da4cdbad89"],["/tags/速度/index.html","d73d48347b91ea9b9bf711290b239fa9"],["/tags/邮箱/index.html","5625c899c87c0c54a681cc6970158193"],["/tags/酷炫/index.html","7243b7b2883bffbcb25957167b928f0c"],["/tags/钓鱼/index.html","111fd1e6717ee86c312f781ffa651537"],["/tags/镜像/index.html","74d1773abfaa05a6d15339e508114c4e"],["/tags/阅读器/index.html","7487bf2442c54c5760e44b9a9b253a32"],["/tags/随机/index.html","aa451507800c0f962245725e0263ebce"],["/tags/隐藏/index.html","0bfd8ab219128daf7391277e90ebdb87"],["/tags/面板/index.html","9704295cf6b5b174111cdab766c02ae4"],["/tags/音乐/index.html","2b2b77b735bc18f269c8c0b20a9eb9e0"],["/tags/高颜值/index.html","1a17231ee7dacdf8941c47340843f0d3"],["/tags/魔改/index.html","10b9520bc6bafc693737c296120e4c18"],["/tags/黑名单/index.html","dbb10371fdec13284d895021a267e48e"],["/urls/index.html","8671d24ad6c45076519102c3d0219881"],["/vps/index.html","df2d8479ffc67a8bc1c044774c3932e2"],["/支持/index.html","b6f036da935e608da0162ab6b0a4c9f6"]];
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
