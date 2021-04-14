/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","adc0675610652ca3c7056b026544537c"],["/2020/11/29/clash-windows/index.html","43887ddd9433bbf3f486def8b73ba1c6"],["/2020/11/30/websites2/index.html","c6b509cd6fdeb3d455857f6dfb894eab"],["/2020/12/04/iphone4s/index.html","3cd693fd31d890393ec4f486da5dd89b"],["/2020/12/04/onenote/index.html","deb99e38f80652f18c85bef7ff137db7"],["/2020/12/04/wesites1/index.html","13afc4e03a7a29f826f97b07f5fe9b74"],["/2020/12/06/nokia808/index.html","d40657199e65392e62fb707afb4e42b8"],["/2020/12/07/ipad1/index.html","252cb68707b836b9f7a3c6b38f742f4b"],["/2020/12/18/freesubscribes/index.html","10237198e94f433ccfb17ef74f9c10f3"],["/2020/12/19/musics/index.html","9b3f1ea2d4a2e24765880ea7b8a0a26c"],["/2020/12/19/shadowrocket/index.html","b2cd1f8431fd0044d0e41ee59b12c48c"],["/2020/12/19/v2ray-windows/index.html","47d036451465727a32553ae7f3f51424"],["/2020/12/19/v2rayng/index.html","721e1e7ec42e7376fb70f61dda28364e"],["/2020/12/20/beoplay/index.html","a710ca2c1a47879035d4c24bf0538377"],["/2020/12/20/订阅链接转换/index.html","911588b46dce3e508ec0f3b42410dd30"],["/2020/12/21/chrome浏览器下载提速/index.html","35501f9e9f96775f13af799388e10b9b"],["/2020/12/21/免费128线程并发下载xdown/index.html","3c13eb53e0b9db6c9d21c045b4cb8ab1"],["/2020/12/21/免费32线程下载软件ndm/index.html","44013147036aae08de04a6631ef61fbb"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","466bcf0ee587963cf4c1422196b54824"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","9aeedb1c53ac3d09f7d0a214d403c818"],["/2020/12/21/广告怎么知道我在想什么/index.html","8f822e18d20114274c38b39f03951e45"],["/2020/12/21/无名·引子（小说试写）/index.html","c6182d749de1d0c57285d7e5be3d5cec"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","e3034a9223d3f0723b75158082642969"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","1fbb3ae166fd0261568db1e67378cef2"],["/2020/12/21/高速轻量下载器aria2/index.html","5e32e55b49585c6942ff5c024590df9e"],["/2020/12/22/2020-cee-roo/index.html","55cb2d702c4059ddb2f42675222946fb"],["/2020/12/22/firefox插件、github、steam富强/index.html","5840a5467fa7c8eb0619431864ddcf8d"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","1d0519d8e36c94a5727145092af1e796"],["/2020/12/26/python-day-1/index.html","a17d09ce5064ba0232595863021496fe"],["/2020/12/26/python-day-2/index.html","465558bee2d8fea7a1feb85533729140"],["/2020/12/26/度盘不限速下载方式一赏/index.html","81eaad9e7aba4b3c3e16cbe21e40baa4"],["/2020/12/26/添加开机自启软件/index.html","8985f1ec85f6a405f669e6558b06cdab"],["/2020/12/26/电脑端截图方式一赏/index.html","7f84b63636f96b0d2e2c7b53ee90f7e7"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","bd347e834e26a68ef709d86818e0b4ae"],["/2020/12/27/最安全的浏览器tor/index.html","b61329a8123951e1c669d7da834631dd"],["/2020/12/27/网易云刷等级和听歌数量/index.html","6e188d8a4a658a42a1fab1af6309ead7"],["/2020/12/28/freenom申请免费域名/index.html","94b0967f04000005c8d18cb55b22a657"],["/2020/12/31/机场/index.html","ca7a31428fdf9be863f396ce4a004c41"],["/2021/01/01/M1/index.html","dcb0b525b67659b1a5d6df0d52dd927b"],["/2021/01/01/compress/index.html","cb4d9621dffb2cefc033fc5f52e6dfb8"],["/2021/01/01/infinityfree/index.html","6175605d7cf806161b62829b524fe585"],["/2021/01/01/硬核翻墙/index.html","967e110159d814ce7f92480e5d3b7718"],["/2021/01/02/qq/index.html","a73f6aaa296fe45f8d5b8bd4729a8d66"],["/2021/01/03/netch/index.html","f04ad636c06d8292841338c753dbf635"],["/2021/01/03/waifu2x/index.html","5887bf20cfbf4d1a852d60d1c648dc3c"],["/2021/01/04/ads/index.html","b7f83ce2ca03d0e84375c27fc3c5d3b9"],["/2021/01/04/games/index.html","6b2b1697c4b98fc5f345ad92a59bbfd1"],["/2021/01/04/heroku/index.html","c1b2767ad4aaf2d3b8829777294f4d1c"],["/2021/01/06/movies/index.html","4ce39884dd38d488877e7050b9496631"],["/2021/01/07/google2020/index.html","f9bf4982db9abd9e49e2a80c1ebe602c"],["/2021/01/07/lucky/index.html","60e5c4e6b4dd7de459b963c4c3656581"],["/2021/01/07/spotify/index.html","aafc33b2e1e28a00b3eb4e9f0fce03b9"],["/2021/01/07/thunder/index.html","bb6058f342a4ce705a56cf54c29cb5b7"],["/2021/01/08/adguardhome/index.html","5b38e80814009ea6f3db4213a884cbb9"],["/2021/01/10/IBM/index.html","fae45331051561886a6780a318406a10"],["/2021/01/10/potplayer/index.html","748ff16be005e5c1016e9577ada00e4f"],["/2021/01/10/sakuraanime/index.html","815789a77bb386a29a4748010c8d3682"],["/2021/01/10/美剧星球/index.html","4351968f5652a9536513a4be5855459a"],["/2021/01/12/telegraph/index.html","9690ae3288fea38ae75e4a4f683e6f4c"],["/2021/01/14/comics/index.html","44d8c7ed0860046abb0202a47b967929"],["/2021/01/14/ftp/index.html","f93cde10a16dba2bba21c7190b7dcc49"],["/2021/01/14/oraclecloud/index.html","da11a168b6cc07a0b3d9f18ab8ef5622"],["/2021/01/14/porkbun/index.html","2ccca48a847b7a40a8a6ccb45d90a7e0"],["/2021/01/14/powertoys/index.html","e309989ec802399bbc971d22a5565db9"],["/2021/01/14/taptap/index.html","1a92cea64b25df982ca225243e412eb2"],["/2021/01/14/ubuntuvsftp/index.html","accc67d8517e5f4a5efbc22cb27cafe3"],["/2021/01/14/小说/index.html","25ec5bf85a3680d68bc0b182edc55219"],["/2021/01/15/freeproxies/index.html","519f4416336432424e1cd1ecb6090b63"],["/2021/01/15/incaseformat/index.html","72cd4ac2a9b6acae63313e4a4ea9979a"],["/2021/01/16/euserv/index.html","fecc0145d75e8fa502cf9e3361b86874"],["/2021/01/16/winxray/index.html","afcd2b06744c6683e82147d6f2b72e1a"],["/2021/01/18/qqreadhistory/index.html","fd4136392a24f58b4d30f51a445a87cc"],["/2021/01/18/qqrevoke/index.html","0e5923e3bb6ee8c69fd6a42bf9a49ac6"],["/2021/01/19/freevpn/index.html","b5701193c95c25b87c2df777174e36a0"],["/2021/01/20/browsertrack/index.html","f6b4c33a82a614cf922040a0afe5f78a"],["/2021/01/20/v2ui/index.html","48942523c3995246ef10dca843a626be"],["/2021/01/21/failedtoconnect/index.html","f4ec6c6c110336241840a6ffd476e69e"],["/2021/01/21/gitcalendar/index.html","016b656cc931c3673399d1bcc1d890df"],["/2021/01/21/markdownformat/index.html","d04add82eb77b3496e99ba5ec6d29f6d"],["/2021/01/21/markdowntable/index.html","09858a3d742d6045ed4f1942dd4a7c56"],["/2021/01/21/vercel/index.html","5385abe7da7c71f6a44ce9e73b3d5479"],["/2021/01/22/hardware/index.html","4a7cacd2480bd3a8c754c8832e8a54b0"],["/2021/01/22/muviz/index.html","df7d9d2880d1279f7f30254aef03eeb2"],["/2021/01/22/randomapi/index.html","9f1d513ea18068cf6b604518fefba127"],["/2021/01/22/searchimages/index.html","20a7da4eb6ae3b506dfde129ca61a373"],["/2021/01/23/RX文件管理器/index.html","cc82faffd094a23bb57f605e042347ef"],["/2021/01/23/chromeflag/index.html","1c799bbf951ef40f6113337f0ed6b543"],["/2021/01/23/qttabbar/index.html","428c65d9322c23c1113f7178c7b7db4e"],["/2021/01/24/githubspeedup/index.html","79848cda7a82c1d1d7d463b90629d9b4"],["/2021/01/24/jsdelivr/index.html","3a0e4f5edb72b6cee42cc87417ef453c"],["/2021/01/25/note/index.html","0c1407ef44f25c88e48b9ca2cb565748"],["/2021/01/25/soul/index.html","c4d8a096682560bab707afdc82d97480"],["/2021/01/26/herokuxray/index.html","f811bf762676fa431abf415b4c8e6210"],["/2021/01/27/proxypool/index.html","a68c0d81bae9b3e9f0e388d97ebee8e4"],["/2021/01/27/tracker/index.html","9f9bd88b566e56eb37d3cd9d7ec04e23"],["/2021/01/30/pandownphp/index.html","af9f2f9005c7093cf9c86ddde667236b"],["/2021/01/31/newgroup/index.html","e59d13241573e037065c15d0aa7c0a10"],["/2021/02/01/clashlanguage/index.html","8123ab5534c0b70cea1409163c93abfb"],["/2021/02/01/encrypt/index.html","79638d7cb84686177bdd40f9f7515826"],["/2021/02/01/footermotion/index.html","6bd69c8b5eb8352dff568e20906a2782"],["/2021/02/01/gitter/index.html","12371965d8bf817b1f032da00ce4d80f"],["/2021/02/01/pixivtop50/index.html","6201e9695afb164a34f8231a392a7a99"],["/2021/02/01/scrollbar/index.html","a5fb98b3ea9d2b12c35cf078ebfabd76"],["/2021/02/02/clover/index.html","2c974fe0dafac40f2524b53faf02db93"],["/2021/02/02/maya/index.html","403bc43a2959f736885558d68f2c7606"],["/2021/02/02/speedcontroller/index.html","c0b481c789a570c48d3c22649d97c4c8"],["/2021/02/02/yesmusicplayer/index.html","c1ef6b7391abf2acb8a99e963ca9927b"],["/2021/02/03/lenovoonelite/index.html","d9976cf0181ee6b6e98716c3cab6eb19"],["/2021/02/03/skipads/index.html","6a02f3125366e9fbb889e8895063c6bd"],["/2021/02/04/picseed/index.html","d78e1e8dcfa79d2f6e0c4251720701f4"],["/2021/02/04/renren/index.html","f9c4bd73a08a4d644623b7b5f01a9974"],["/2021/02/04/serverstress/index.html","b063869a861080c72639f8204de8f431"],["/2021/02/04/wikipediazh/index.html","1d996f19492cec04df34e0a74519f472"],["/2021/02/05/googlevoice/index.html","34e81dae20025f84e74dfb85040464cd"],["/2021/02/06/clashconnection/index.html","10ea1bf889e29aea22b9cb920d895cdc"],["/2021/02/06/gvtransfer/index.html","e86b13d4864940f5b4aab6b3a3fd674b"],["/2021/02/06/todesk/index.html","780301c4045b4d08764197f8ae061c9c"],["/2021/02/06/vpnblacklist/index.html","c7fff980492e8a3090afe6f0f9758948"],["/2021/02/07/mklink/index.html","886b51ac813ff754852a4e8e03b9ac29"],["/2021/02/07/speedtest/index.html","206c79f4eb1cdea0a2dc7416fb746c21"],["/2021/02/07/translate/index.html","779a6198798cfbab0c7525fe4a5e96c0"],["/2021/02/08/ewomail/index.html","56a9ab3c17c37d74ca44ae865d19e350"],["/2021/02/10/officee5/index.html","c8998e41936330dff198924bf84629eb"],["/2021/02/10/raidrive/index.html","2026c2e99854bbe88ff7152eccb99594"],["/2021/02/13/e5sub/index.html","9416ceaee1e465fed01feea4a9f805a2"],["/2021/02/14/screen/index.html","dd4ae1869377a4441afb171c9ee4471e"],["/2021/02/15/clashtun/index.html","06957eeb78445d112a5d263c84e2c092"],["/2021/02/15/messageboom/index.html","f2fc13037f840cccfd4b596fd3bc6533"],["/2021/02/15/oneindex/index.html","c12eb9b2b4ba6f8a1b9a913325683127"],["/2021/02/16/govsites/index.html","512e25c8d08ccb44dea68969a55d1a2f"],["/2021/02/17/hexototypecho/index.html","b4cc29bedce5ffa216e1a1c8b4bd81b7"],["/2021/02/19/fiddler/index.html","2aa75ebfc2bcf715fe1c653ab8134d30"],["/2021/02/22/potplayerset/index.html","54635eef1c78104814cd0e9ac13078bc"],["/2021/02/22/studyresource/index.html","00adda8f5498fe492f46385881d3a0d3"],["/2021/02/22/telegram/index.html","83e70551c21c98424ec89be841d5c212"],["/2021/02/22/videos/index.html","eceec2580d54e17941c90032e37a76e8"],["/2021/02/24/mtproxy/index.html","968aedfbc2ecc93426cc0ea37fd87b20"],["/2021/03/10/catchcat/index.html","751a261b498c6fe254ea508457ea4a5c"],["/2021/03/10/neteasemusic/index.html","bfcbdf4b18f6793f337400f5135c000a"],["/2021/03/10/surfboard/index.html","c45fc857eae4d61d4e5b6d285ccd3f79"],["/2021/03/11/vpnandjc/index.html","767b3e6c204f06b84a18ea11f1e666c9"],["/2021/03/12/qrcodes/index.html","3d631f04782624939eaa019667d04cb8"],["/2021/03/20/qv2ray/index.html","0ba9ab5ab74c37891c04f6d6c6f0021f"],["/2021/03/22/freevps/index.html","2ae65556aad3a716c7ff1d0e903c4813"],["/2021/03/24/tgstickers/index.html","e0d8368f9ac2e63ef252d1fe32c88e2c"],["/2021/03/25/clashx/index.html","639fc89c8e33c703d95597ad57140894"],["/2021/03/26/bingwallpaper/index.html","ce7e4a2fa59cd2b975b8d50d76d0ac25"],["/2021/04/03/soutu/index.html","6b34b728ec26435b6c46b0c90fe35d34"],["/2021/04/03/tiyunti/index.html","8e9fd446bc3f90e5d412dcf638b962e8"],["/2021/04/04/btpanel/index.html","07f17a91fe5e17be3bdbede7712e07bb"],["/2021/04/06/atlasos/index.html","c20c9847171fdc08e9191f51bf3f98c0"],["/2021/04/06/cleaner/index.html","90a911fbdc47ed0f7df05b2eaab6d776"],["/2021/04/14/rss/index.html","005a22f79f0e87501267675f9e0cdd03"],["/404.html","8d6368718afa19f6cdc6f7ff571babd5"],["/archives/2020/11/index.html","092c4611696c4b5bd2c8b404f3e04ef3"],["/archives/2020/12/index.html","170c466d1830c9563c60eb207b033d33"],["/archives/2020/12/page/2/index.html","58d731ccee0ac58bce783ce583daaff7"],["/archives/2020/12/page/3/index.html","2d4050c527c4fc0813f1a39de69bf1e2"],["/archives/2020/index.html","b24fb2f2e24ce2e12ac238aba9b201c6"],["/archives/2020/page/2/index.html","394162fe4a3b4879ef328b05eb9e92c4"],["/archives/2020/page/3/index.html","717bfbe319182668cb4d17f925e9befe"],["/archives/2021/01/index.html","2231ff42de69fc0626125d16bd62b63d"],["/archives/2021/01/page/2/index.html","36726046abc996ab2ffd258895fe159b"],["/archives/2021/01/page/3/index.html","d08fd4aa547660ab5185fbdc2cd4e17e"],["/archives/2021/01/page/4/index.html","51df23f91552cff32595f986101b5a0e"],["/archives/2021/02/index.html","9c135cb4d8bc546bb7c524bab0392405"],["/archives/2021/02/page/2/index.html","a797f31211e175be9af21d1786dd3359"],["/archives/2021/02/page/3/index.html","2fad38c46ba3728b8152ae0750763854"],["/archives/2021/03/index.html","70c9e53ac4c09228978ea997098ac1fe"],["/archives/2021/04/index.html","6434d5cfe23e7e495b2a1cfba4bb5364"],["/archives/2021/index.html","7c9d1ded83d4cb8b82aa712f14c80d8f"],["/archives/2021/page/2/index.html","d3404543eb3426acae2c9643c976f98c"],["/archives/2021/page/3/index.html","7c96d7ae1517e1a00610da891bc3b344"],["/archives/2021/page/4/index.html","3038c8eed3b76822c2a7afbf574a772e"],["/archives/2021/page/5/index.html","568547fa73c2cb22167ebff635b2d12b"],["/archives/2021/page/6/index.html","9302e9458db15dc0ade28044e39926b1"],["/archives/2021/page/7/index.html","53eeeb3dae892bac1072ac8f272ce294"],["/archives/2021/page/8/index.html","0c2285dee40ac7ef377bbe9b3980a595"],["/archives/index.html","bd26d91dcaf598142982513cf2d2e6ce"],["/archives/page/10/index.html","d4b815f9db46983741473759de2bc763"],["/archives/page/11/index.html","710241526df21cfde5e981629f6a4dff"],["/archives/page/2/index.html","8796760f6d387277f3459618a79703ba"],["/archives/page/3/index.html","dea10b13d8f069f15d7c2dac9f20f323"],["/archives/page/4/index.html","52bc2f93f4aeef0b91594965209798f9"],["/archives/page/5/index.html","cd89fb4f3d8cc094375152608aad5384"],["/archives/page/6/index.html","cc2623b8acc1de8a8ab797f983acf666"],["/archives/page/7/index.html","000d2e8a6b209bfb3f541f17128cd6f5"],["/archives/page/8/index.html","6e06054d9aee6436c5856c7066585c57"],["/archives/page/9/index.html","2402b4c799f73e4ba69484767c284a39"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/atom.xml","3382e1d7e1f74f1cb6966bf90156e29a"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","a22c7e0a9d6249ae49ae21126528caf6"],["/categories/index.html","b91e769689a7eb252ee423209334390c"],["/categories/下载/index.html","8abbe92b13efad4117e416cd8887f5a8"],["/categories/安全/index.html","57c9b05ed0b0b39f3eed51a4ca1ed2e9"],["/categories/建站/index.html","8f193a70b7e47a233b841e12858cb403"],["/categories/机场测评/index.html","7f100278920a983e59522d7ffc3503f1"],["/categories/杂/index.html","417f964b783cdb7c4dac4ecc30b726a5"],["/categories/杂/page/2/index.html","11182f3c6171ef303774a7e8f4869d7c"],["/categories/测评/index.html","b422eda67822ee041b77f841c6a59008"],["/categories/科学上网/index.html","0d0416f498df8e10b0b4d29850226179"],["/categories/科学上网/page/2/index.html","5bc8999bd76222b97259bc84b25dec4b"],["/categories/编程/index.html","c0b139705fd50a27a84dd4f1ae419e35"],["/categories/网站/index.html","70089e0734928a74f15d3ac75063e66d"],["/categories/网站/page/2/index.html","5555b3d4011706ce4a25760eef2c28af"],["/categories/软件/index.html","3b19a595fe727e8b56685c289dacb588"],["/categories/软件/page/2/index.html","070d1d7d4a4ae1c9c32db1864dc25130"],["/categories/软件/page/3/index.html","858e8fac351abb77c22d52e9e0825f66"],["/categories/软件/page/4/index.html","bb5108b3df3e56da94000a7df86f616a"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","21043fa102e81db58c91b527d844380a"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","e3d65b8ba883738131d6095077444eae"],["/ios/index.html","9a6dd3a8fc02605cfebeaeccac5ea3ef"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","57dcfac923504f6d34294ef49ece8bb7"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","9bfe02c0c9c3bf67c368d77552f45b03"],["/page/11/index.html","00cebd5f94496e51ed91d6a595f4753c"],["/page/2/index.html","7cbe2d6e31e079447154eee75114ede9"],["/page/3/index.html","1338b9e198439b7ffcb9ad0c9f0bf07b"],["/page/4/index.html","ab3c558d1383f753b07c375f7d466542"],["/page/5/index.html","fd079b57523cfc1e7d48c1b8b88c4c19"],["/page/6/index.html","5ae1576717013058e5fccc317854292f"],["/page/7/index.html","06c0b4b7c2da6a795a745a87bb07c17f"],["/page/8/index.html","ffd80bd036ee53a28871c3ed62f67f9a"],["/page/9/index.html","189fa8873a849466567314070e5eb1f5"],["/payment/index.html","60c5bbbed4fff354dec63ff31b2d430e"],["/privacy-policy/index.html","dcd3409c22df6c85d50c8bb8c097648a"],["/search.xml","d05ae516ede345623567cecaa0719fb2"],["/sitemap.xml","48012b6dfa6ed71c0c58e541f4a09f68"],["/sw-register.js","58836e21252d3c512eb088fd57fe3fb7"],["/tags/5t/index.html","815b1d64f8a25d497bafdb06938bbb75"],["/tags/Bing/index.html","a2332016df7ecf62b82f706626686d89"],["/tags/Clash/index.html","b5490fe51d18b002cf526459e7abf970"],["/tags/Clover/index.html","01aad076b4589c8235226c411c84fec1"],["/tags/E5/index.html","be6da6c6b6f23f8c980f33fda5544150"],["/tags/FTP/index.html","d29247d0bbbda195ff8ffdc7637d0851"],["/tags/GitHub/index.html","0ef34e9e5ea09e223e1b3f194ff9a747"],["/tags/Heroku/index.html","9ed47cc4afe0fb7cd2ffcba44b1914ae"],["/tags/Hexo/index.html","6f722861157d291402a8adf23c1ac230"],["/tags/Lenovo/index.html","99fd97b28a292df955b537d84009e2e6"],["/tags/Oneindex/index.html","4d6e0e8bcc180c05083afae87adee378"],["/tags/QQ/index.html","54366a1a0be48f7fbea7bf8c3e500e02"],["/tags/QTTabbar/index.html","d20dd3fdcf0b98acd3a7a64fa212f667"],["/tags/RSS/index.html","4e6e8779ba31b8d4f45a2a85d2bab834"],["/tags/RX文件管理器/index.html","955a5cf63e4d2c25c5db09f7fcafb31a"],["/tags/Todesk/index.html","a06506c0f036bf28fc16c6f7b48620f3"],["/tags/Vercel/index.html","d52955768b8395d6d592936957d1ba35"],["/tags/ads/index.html","5fdce6e1eaed54f5661214d530baf1d3"],["/tags/api/index.html","d8eedd8bb35cf815f4ec6547f09acc1f"],["/tags/app/index.html","155274a2e4fa5662fabdead80cdbf363"],["/tags/atlas-os/index.html","84581ee03a5d855d10c80378046cb26d"],["/tags/blacklist/index.html","b998e10bec164ec4fbe2bc574e6b2ef0"],["/tags/butterfly/index.html","ea6c325735693902627df43ebbd33112"],["/tags/chrome/index.html","60d283210be27e1fb49ecc698b62a75c"],["/tags/clashx/index.html","ddc55a4f752977763c43c62587631da9"],["/tags/cloudflare/index.html","f1f48703c2824713ea1b27f816568b08"],["/tags/cmd/index.html","767cb875d1e0118011bfd203df660f01"],["/tags/c盘/index.html","506ad4c9b6a5ad1548f7abb9bb4c32fb"],["/tags/email/index.html","4e902ce0ff09e7222bce3cafbc0c78e7"],["/tags/ewomail/index.html","90c4668b4c0dea3ecd1e273ee76e8fab"],["/tags/fiddler/index.html","0d82a2b8a58b5d078170211da91ff906"],["/tags/flags/index.html","22e98b1b77dd2a18a217fef3170e4d23"],["/tags/footer，页脚/index.html","4173fedde5e8479b8136f2687e89496c"],["/tags/galgame/index.html","4fd74333502e9270f75a63916da91204"],["/tags/git/index.html","a88ccf25a5a7c2563bb0f3850745353b"],["/tags/gitcalendar/index.html","97f0b4c5f9698bfa2d1410f07428365c"],["/tags/google-voice/index.html","9431d6597ecd40f0320bd243b7cf1de4"],["/tags/gv/index.html","cb0c2185c1373c956ef23a2f950afacb"],["/tags/html/index.html","618a8b34f3ddfa58cd68a847744c9758"],["/tags/index-1.html","fd2285f3398cb224eb6261a678d0eadc"],["/tags/index.html","5d10b64b37798ac85a2dee785e6c37bb"],["/tags/js/index.html","2263e61ba29ea60f9c739853dc2ad4d8"],["/tags/jsdelivr/index.html","02561ee45d166ef0d89fe90e95ea3876"],["/tags/linux/index.html","4ba186c09ef2ed96d3932d82ba0f90f3"],["/tags/macos/index.html","504b014313cd369d4aae74b63c3bbccc"],["/tags/madVR/index.html","8713e82b63bfe9d3cfd0b2ded7da5338"],["/tags/markdown/index.html","173f2f081aaaca0974cbf47c42008639"],["/tags/maya/index.html","c85cc83c057b2ac344f2cb098ede36b9"],["/tags/mklink/index.html","f701370fc0b1298be1944adb35df3a4f"],["/tags/office-e5/index.html","4a65ea0280948efd43c5206c0ca2d3cd"],["/tags/onedrive/index.html","cd2110ee32dfd10954c07a8da9bdad1c"],["/tags/picGO/index.html","bdf0c87e36dade09bd001bb9bcd224c4"],["/tags/pixiv/index.html","b857c3455f148f1ff990092abb75c46a"],["/tags/potplayer/index.html","1981b5adbb694c6a7a6a57781a74285e"],["/tags/proxypool/index.html","b1c30329c005a00e26bc3c12b0a8fe00"],["/tags/qbitorrent/index.html","e08119b6cd77d8bd7195d88b1e2750db"],["/tags/raidrive/index.html","d707f76c97c442e59025f5f1154b9669"],["/tags/screen/index.html","5d38e066ee5e2f6c659dfd1da568a439"],["/tags/speedtest/index.html","d62049b5b7bd281f51aeff0d3e4d0cc1"],["/tags/ss/index.html","b8b0a080e3fcd0e2a2bc89bee071c995"],["/tags/ssr/index.html","47274911cf06273eb6c7debc04be5e74"],["/tags/stickers/index.html","257abd0369e1182166bc996f458f3cd4"],["/tags/surfboard/index.html","4b0797fd00d9e8b8b085a731134862d2"],["/tags/tap/index.html","5a4550d526c32f0e6580c96e3a9ec18e"],["/tags/telegram/index.html","522d4fd36a526bd8eacf6cc767bddf32"],["/tags/telegram代理/index.html","1164ecf0ca984900b503345c0bb40b4d"],["/tags/tg/index.html","1652378e2a9507c0cdf27e664f715fd0"],["/tags/tg代理/index.html","5515968360b3f6adbccb9041a38709de"],["/tags/top50/index.html","16bc6a0af858d72554bc018643c31718"],["/tags/tracker/index.html","b057c2d9325e6f286d63083c22b8d987"],["/tags/translate/index.html","11080c5c039f11ab5fc31b1c34df1d8f"],["/tags/translater/index.html","1d948f1d0a7ae9e046fc91e346b138a1"],["/tags/tun/index.html","9114aa0bbaa11521a066b649e9837182"],["/tags/typecho/index.html","ee32d0b2254bdd5690826990487d9e92"],["/tags/v2ray/index.html","53aacdd562ffaf384ba5b0a2b29d08c0"],["/tags/vpn/index.html","af5b4b7120b85846508a0b3434d9c0d8"],["/tags/vps/index.html","b02d00298318a0012f1f5376d29e874d"],["/tags/wallpaper/index.html","4db24f8f975da3c60587194f2612df6b"],["/tags/windows/index.html","56fe77dbb33e525df605fd4e6a44d721"],["/tags/windows端/index.html","a2dbeeaec7e84a744ec96f45151ba145"],["/tags/xray/index.html","8461d9a0fa426a997c8a33529793f93f"],["/tags/yandex/index.html","5c6ef94233ec323ad528f51aef741d42"],["/tags/下载/index.html","c679d501e455700ee5263d260c6cbcec"],["/tags/不限速/index.html","fda2fed70d89542b8aca713f30abf307"],["/tags/个人网盘/index.html","6220f8ed7a41644b41906d255da61dd0"],["/tags/主题/index.html","f3815cf9486343882e102df65c3ee1fa"],["/tags/二维码/index.html","3291094e54a9baf72dee3fc1f2d19b7b"],["/tags/云便签/index.html","4b75858850b7b191c7cc218bca65ca97"],["/tags/云盘/index.html","262698b6121877ab30f7abc5f4dd7682"],["/tags/人人/index.html","96963c2c96cbddd01618476a61959989"],["/tags/代理/index.html","f4271855ee0bf1514ff33dfffa148036"],["/tags/代码/index.html","aae75122b6f78911a93c5d9af1d13600"],["/tags/优选IP/index.html","a398bf63752aac9de61cb7b34dd84224"],["/tags/便签/index.html","092f13166c7bd3cb849fad4fc6d945ef"],["/tags/保号/index.html","725284d024d67382e26bc53752834633"],["/tags/免费/index.html","8ab855961fc6de6ce6791883c17fd498"],["/tags/免费节点/index.html","3b57f7f3fe06d157de6e5ad0fb09f2c2"],["/tags/冷门节点/index.html","ce679cc16ff7279c8d6208375550739d"],["/tags/删库塔/index.html","c593b72fd2a23d227f27cd145e772db5"],["/tags/加密/index.html","e49ef21165ba63aac318eb40eda2282e"],["/tags/动画/index.html","3541599f5740b1a8a5237b7a7f76224d"],["/tags/博客/index.html","691968fab66102d7877781f3eaf6d9d7"],["/tags/卸载/index.html","0fcfc16844925f5f8c88a465a20e9e4e"],["/tags/历史记录/index.html","27a38a4f558a31e3ecbe8e7d8dd8d36a"],["/tags/压力/index.html","9591e42d4020bb03070454ebc90abeda"],["/tags/压缩包/index.html","d4e6ac4e0bd2fdd4baf2f8f80fd3e44e"],["/tags/反代/index.html","90b6aaf00e9d97ebebe64f3bf5e00307"],["/tags/可视化/index.html","49514c60af45cbe4b66fe51d4a28baf7"],["/tags/命令/index.html","fa63b465b34c96247d4978aacfd213c4"],["/tags/国家/index.html","62ff91806e0425f94d5e984fd0d83330"],["/tags/图床/index.html","5ad2d8bc0c97a92b58cfabc560efeda9"],["/tags/图片/index.html","09258954f61bb19187ee2725904d7fa4"],["/tags/域名/index.html","317c07b2c08c7e7ebc7be394bcf471de"],["/tags/壁纸/index.html","627b9e44edb7ea8ede26dbca788b7708"],["/tags/多标签/index.html","feaf3955fd4d843be43a7f7e4b532010"],["/tags/奈飞/index.html","07d34614493b83d3e33bf62f564e4ef2"],["/tags/存储/index.html","f849ab332bdb8f8f8f80542952e9761e"],["/tags/学习/index.html","1943123909bdd670d50bab6eadf56607"],["/tags/安全/index.html","50d0d5a3e455d114c6abf3686666c439"],["/tags/安卓/index.html","c199e0da6c2f435104d70e1060170be7"],["/tags/宝塔/index.html","597ed10e33d8f88ad02aa940399fbbf3"],["/tags/小游戏/index.html","db89892e811215415830cbc4b38dbeb8"],["/tags/广告/index.html","af518137d7ec2f2963ec12b122834058"],["/tags/建站/index.html","693ac2354636d6534c87af72fdf36718"],["/tags/影视/index.html","7cb96ef1048a4d0aa489929997d4a14d"],["/tags/微信/index.html","2fdd0cda3ec75935901b26a82ef6c229"],["/tags/快速启动/index.html","68a6154b4a0f465878659da7a7d21e6e"],["/tags/手机/index.html","875ce93146af7c985b57c1acce364c4e"],["/tags/托管/index.html","38e35de247617407d9bdde2ba0faaedd"],["/tags/抓包/index.html","5271b38b53dc25289d6f6f8a7e82449a"],["/tags/抓取/index.html","c3a9d2b7fb6891b65475d8ad205a2594"],["/tags/投屏/index.html","d6a6721c560b24e2a03b186963f5ec37"],["/tags/拓展功能/index.html","65e019a80247f0419ea2f2e778d382ba"],["/tags/挂载/index.html","286299376224ba4946614dbcf3b2c221"],["/tags/指纹/index.html","dea031ee8e977cf0280bf9018283a2fa"],["/tags/接口/index.html","f67d074076ade9bac5df5ae0ae6648ae"],["/tags/提取图片/index.html","b30f033b41cc37668259de653c6c01ec"],["/tags/插件/index.html","6e811efdf57f244f59b545cc3f09ca86"],["/tags/搜图/index.html","a0a4a144630ad8f8e655350bbfa25091"],["/tags/搭建/index.html","ae1f4499ae4e5e28962b19a2ac233d45"],["/tags/撤回/index.html","393a94b1b9d5a59270568c4a70a0e3dd"],["/tags/播放器/index.html","654bbd9014e006a60ea6aedb152bfcbe"],["/tags/支付宝/index.html","5fe4ef28d2df44fbe13cc443c43d0217"],["/tags/政府网站/index.html","6930096f4bcc9d8e2294c2a7aac4295a"],["/tags/效率/index.html","75b3e972a474b5edd323bd290ff3f609"],["/tags/日历/index.html","3437bddd103f3d83469ede5cd4fbc8eb"],["/tags/服务器/index.html","91610f5c6bfe7a6f64054af72a62d96b"],["/tags/机场/index.html","ade518588190943e4f028bab0555b608"],["/tags/查重/index.html","f16b6dc785902c5abfc1fe4ba53e3ed5"],["/tags/桌面/index.html","011965ecfcf7067507b96d2bb1ac5716"],["/tags/梯子/index.html","3dc817bece86ebd7f6dd87ddb6bc3d7b"],["/tags/检测工具/index.html","04f1ebe328c47104888e4564d181b5a0"],["/tags/汉化/index.html","2d5ed3ceed677806400d5da09dce999f"],["/tags/测压/index.html","8d6bbdff8e7dc4b0e0fabc63b0f4ec3d"],["/tags/测评/index.html","e6d347a742d2ffa060884d35e22dcfd9"],["/tags/测速/index.html","48282f45ad5b17d500fb348c2f320f45"],["/tags/浏览器/index.html","1aa9efa34e966550e8b82f174f6e8a84"],["/tags/清理/index.html","86a1dc590cd347394fcbb246fec1cef5"],["/tags/滚动条/index.html","7caf95a09d46149f9ba066b3ccb49b97"],["/tags/灰色歌曲/index.html","0ddc78372decd834b0e0c0fd551c32f5"],["/tags/电影/index.html","31e4b1398b22509c759b772f18c29e9b"],["/tags/电脑/index.html","e8a0d6480e2cbb493b2cb56bf8cbd483"],["/tags/电视剧/index.html","3b5696db7f4c0531c56f318f84510814"],["/tags/白嫖/index.html","c7f5e578ee5191254d6305d1c73e8db8"],["/tags/百度/index.html","3b46c568bf9c45e679c2f05be6d5b0be"],["/tags/百度云盘/index.html","54e7cd2c65f02bf6ce6645f868f7a7c8"],["/tags/百科/index.html","eeb677a2856647500534a958322277bd"],["/tags/短信/index.html","49a44b6bbf0af6f6a0a78b4acee34c0b"],["/tags/硬件/index.html","b7eee4182285d3e9d3964e75fc6da421"],["/tags/科学上网/index.html","df846d9f7ec8bac49e4e5a0d443a275c"],["/tags/空间/index.html","7a232b82baa072c8dc3a3f2cd5cab36e"],["/tags/笔记/index.html","c2e698fc22a2ba710294c53857dcf0be"],["/tags/简洁/index.html","ed682ab1abf5d1a8f494a720f21c6efb"],["/tags/简约/index.html","290c7d907f4dc65466a6372cd054278c"],["/tags/维基/index.html","3d5ffe7d15d7647e9e412bb9dcae6547"],["/tags/网易云/index.html","621fb2a55be74109bae58ea21a6c3ca8"],["/tags/网盘/index.html","8ba866ddb306d3df44ce9f4bcb577f0a"],["/tags/网站/index.html","64bdd3bd6212f322be3b9a150d9abd5c"],["/tags/网络/index.html","27cc700368d09f2990b16568880b9d27"],["/tags/美化/index.html","6c3c9a0a3b72eb611740835b0b078703"],["/tags/翻墙/index.html","b474c9dc0230b668286e1ea81abd40d9"],["/tags/翻译/index.html","0baab621c545d9e96ac3efa6ddfe0d65"],["/tags/翻译器/index.html","97b3851e4c18d3629bd4270583c04f65"],["/tags/聊天/index.html","432ec90b62ee52652f76308c8fca194e"],["/tags/聊天室/index.html","bed8caf2d75f1a5753da68992369dee2"],["/tags/联想/index.html","fdad12df6b02782f92594e5e0c71bf17"],["/tags/节点/index.html","ef0781b3f85f49eaf1be1cbc9cc9e918"],["/tags/虚拟手机号/index.html","e977cacd21985b1c8f13c36a59334dd7"],["/tags/补丁/index.html","522ba2455e0f429ff22268dbbfdbbfe2"],["/tags/表情包/index.html","dccb853dbb7003e62afd72b51d727f10"],["/tags/视频/index.html","5d19f06df04f04eec8d40e6e68c640b3"],["/tags/解析/index.html","005f368feb7231183e45799d0a2c03ee"],["/tags/订阅链接/index.html","279fda0305a5b94ebcdef5562d6db482"],["/tags/记录/index.html","32d739da33bfbeef9c47bdcfc03b6710"],["/tags/识图/index.html","bceb06cc1ef768bfea89ba5f6643ad70"],["/tags/语言/index.html","b62e968fdedb619ccb148c13ae56e632"],["/tags/资源/index.html","ad748d08d43d6614177dfa70f2a2f77f"],["/tags/资源管理器/index.html","803aecc1f57d48d0989f9a7b66904d9b"],["/tags/转移/index.html","ea92e03ea60ead7ee6341fe49f9dbd10"],["/tags/软件/index.html","af5aac9e8176a9c5edc5767f8c98c59d"],["/tags/轰炸/index.html","ee465e4515a14eef7540d1bf529a0932"],["/tags/迁移/index.html","4aaad2022e2a323073b2c0b8e13dd93b"],["/tags/远程控制/index.html","9f98fc012c9f758a711f6b0a11c79166"],["/tags/连接/index.html","656157e570b47d6260d2838544bc9300"],["/tags/追踪/index.html","90177fd6bf597bccef7339b8f6801a47"],["/tags/速度/index.html","bc33059d324602ef318dff1e5eddf16d"],["/tags/邮箱/index.html","420e47931e30b5b92f060ca6e1a58908"],["/tags/酷炫/index.html","e445ef1b44d1474cc414dfa55a6206c5"],["/tags/钓鱼/index.html","9a1fa5e97215050af6deaacc3dabb2f3"],["/tags/镜像/index.html","21aec1ca2ac0fcc47132453a048a8a2a"],["/tags/阅读器/index.html","b23f8944bd95c8e6666589b4025df14e"],["/tags/随机/index.html","a5e2500ef41e4289d94ce70aa6c094cd"],["/tags/隐藏/index.html","392bcfa68bc4efb58a30c20e73429900"],["/tags/面板/index.html","52786f46a92213f5d782268f54f15fe0"],["/tags/音乐/index.html","cfb50bb2e4f7cddff4163e6cbc44a8c4"],["/tags/高颜值/index.html","f0fe9e44e4b26941de9c2dfe818bf887"],["/tags/魔改/index.html","34a04659c9f52197c448a937afba34cf"],["/tags/黑名单/index.html","2a95ec0e08583d5c10a7ce1d0355f8d1"],["/urls/index.html","0c98f38e2465ca4e2ed8346a9fb07074"],["/vps/index.html","7d2edf1bf4b6c7dcf87f60ef968655c9"],["/支持/index.html","8fefab97aeff71d062357a33975fd890"]];
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
