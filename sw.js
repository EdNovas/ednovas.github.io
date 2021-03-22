/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","7760804817020260d42776dc9c554a64"],["/2020/11/29/clash-windows/index.html","18e3f08b6993ab082fc7326c17ca0572"],["/2020/11/30/websites2/index.html","7572e0d988e7dbfe7d3a8a382afb46bd"],["/2020/12/04/iphone4s/index.html","d5203d6c8bdb2ed0f2d6e0ec2c0dbacd"],["/2020/12/04/onenote/index.html","e59d5d78ffb161134f4b0705547462e4"],["/2020/12/04/wesites1/index.html","99e4df71bd9a65273f023dbddb667c0a"],["/2020/12/06/nokia808/index.html","8118981dca7349c6a51fa1a3944f7568"],["/2020/12/07/ipad1/index.html","6d70f9917fb00739c73bed22c3769f8c"],["/2020/12/18/freesubscribes/index.html","f6b6a0db5facc50497078078e87e55b9"],["/2020/12/19/musics/index.html","c97980beb5fa7adf02ef594882f5f0f1"],["/2020/12/19/shadowrocket/index.html","19beb56595ebcd075f572884418522c3"],["/2020/12/19/v2ray-windows/index.html","f93145295bf7a7034e0c3418a3f6fbb8"],["/2020/12/19/v2rayng/index.html","9a5bea3321473da6c82ee6cc9d3e64e0"],["/2020/12/20/beoplay/index.html","87b123fb3d793a8853c7a5e4499889b0"],["/2020/12/20/订阅链接转换/index.html","a4ad8768389fc4e143dcf74ad504dd0c"],["/2020/12/21/chrome浏览器下载提速/index.html","2418767766f9a69de5ba4e6704f274bc"],["/2020/12/21/免费128线程并发下载xdown/index.html","4f69fa2b625cd38722e7f002eb9055ef"],["/2020/12/21/免费32线程下载软件ndm/index.html","98a39d8fed38afe749820f8d982b1457"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","9225272343f6d6d0782729ec61962ab7"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","011f18e97f5770e00595fa9bae97dbda"],["/2020/12/21/广告怎么知道我在想什么/index.html","652d0953f8dd0517884b9cce58f22ea0"],["/2020/12/21/无名·引子（小说试写）/index.html","cf8671209d350cbb791cf43de8fe60ef"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","2a542ce9544a6af2dcb83a9398ca0e7e"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","2488e704583146ab2cae70c824e2cbdc"],["/2020/12/21/高速轻量下载器aria2/index.html","3b8cfa6cf1d0b08473d1d17d75b6aded"],["/2020/12/22/2020-cee-roo/index.html","7c111bbff1266bf4483de6e4cc1da900"],["/2020/12/22/firefox插件、github、steam富强/index.html","8bfaf8e9b8290f37c1c1a706289aafb8"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","d094c6bbfc33b198c81891af304327b8"],["/2020/12/26/python-day-1/index.html","044756a63285eff97f02c26bbd0ddcfb"],["/2020/12/26/python-day-2/index.html","dfa86f43ee72e90a470933bcbd0b555a"],["/2020/12/26/度盘不限速下载方式一赏/index.html","c514e3e3e4d7c7abadd1fc2221bc8b31"],["/2020/12/26/添加开机自启软件/index.html","1f3fd097f33474a6fa2c3f9850d6ff69"],["/2020/12/26/电脑端截图方式一赏/index.html","38c7dbcfec9a2384454736439da9850d"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","9c516632090e96fbb80cdcfb5822cbec"],["/2020/12/27/最安全的浏览器tor/index.html","b4277774f23362e405db79f296890be0"],["/2020/12/27/网易云刷等级和听歌数量/index.html","a87d1efc17c35b7ec3c898d610430df2"],["/2020/12/28/freenom申请免费域名/index.html","4893e86b20cc44302feb037f496de55a"],["/2020/12/31/机场/index.html","95485500a25709a444bcd5cdc825531b"],["/2021/01/01/M1/index.html","ebf0c14742402b2a5737f7a354c2b792"],["/2021/01/01/compress/index.html","0546c9cf3499c6cc08ec4a7c373701ed"],["/2021/01/01/infinityfree/index.html","49a271f402c4eb3df6631e88d6d071c3"],["/2021/01/01/硬核翻墙/index.html","73ddadbe4f7e2ce6ec232eb11879ecaa"],["/2021/01/02/qq/index.html","7a2fe183c473c3be57738eafdd5bb551"],["/2021/01/03/netch/index.html","fbdfc6455963f449c57a1c14a367f462"],["/2021/01/03/waifu2x/index.html","9a686f05a18e0cf15ce16e09282d1c61"],["/2021/01/04/ads/index.html","84ee0705aaf13374077ffb387cffc4f9"],["/2021/01/04/games/index.html","cbc65921358dc22d2e645b2b1d9cb536"],["/2021/01/04/heroku/index.html","27f43d144a6654c631be645bfa9173cc"],["/2021/01/06/movies/index.html","4e1b42db292d15c946df69c6f34ae6eb"],["/2021/01/07/google2020/index.html","b54eb435f946f771e9e6292d9b0559de"],["/2021/01/07/lucky/index.html","3fc453a0d8681cf4cbd2292743b7126b"],["/2021/01/07/spotify/index.html","e8ed516c364f288803df128027746909"],["/2021/01/07/thunder/index.html","ea607c1fd5947a46cb652bde3b989aca"],["/2021/01/08/adguardhome/index.html","b5f0aff27f6d67c8e507b22becb66478"],["/2021/01/10/IBM/index.html","431ac33ae5f9495ee720f6ebecb99c61"],["/2021/01/10/potplayer/index.html","3ce7f3a0bdf172774d39b94e2c9b2bc1"],["/2021/01/10/sakuraanime/index.html","7eda1620d17b42767feff29b6fd190c5"],["/2021/01/10/美剧星球/index.html","9dfb44ca2242a0642339472ce6b8f754"],["/2021/01/12/telegraph/index.html","c764470351cfd3661413ac7397373a10"],["/2021/01/14/comics/index.html","857a2749ca9957dd3e1b4fe25c48c66e"],["/2021/01/14/ftp/index.html","88e6612d6917ac8e1ac764a006189718"],["/2021/01/14/oraclecloud/index.html","bb20f09b855150ac959ed04c8a1647ab"],["/2021/01/14/porkbun/index.html","aece00cebe3a03398bdb639241ce5cc6"],["/2021/01/14/powertoys/index.html","12c63c4e619bd6a293372646b2026b8a"],["/2021/01/14/taptap/index.html","56e6a0c346003e49a4d27c294fb97701"],["/2021/01/14/ubuntuvsftp/index.html","eb1ef670ac1f6fe7f194e1cf6f340a1c"],["/2021/01/14/小说/index.html","628abe4ab2c5c3550d3586cbcea73726"],["/2021/01/15/freeproxies/index.html","f3ee527cf0e9d86c7ba2b3b2d385401c"],["/2021/01/15/incaseformat/index.html","6af597c26fadbf7106a80814593f0d30"],["/2021/01/16/euserv/index.html","dcf7d1fa2b16052b875cfb564866fc3c"],["/2021/01/16/winxray/index.html","f26e0d81d33f91a9c1e18f0acd20c914"],["/2021/01/18/qqreadhistory/index.html","52c6841a43a50b98c6b8b1607dabd67a"],["/2021/01/18/qqrevoke/index.html","03a88261d34ea42d6507aba0a50ca1e7"],["/2021/01/19/freevpn/index.html","91439904726e5a4851d97dc8e6528c4b"],["/2021/01/20/browsertrack/index.html","a4d07dfcdabea52e8209b3952b15d667"],["/2021/01/20/v2ui/index.html","5f11550f20c8068152ddc5eab1868b0a"],["/2021/01/21/failedtoconnect/index.html","c599ccb09989a851fb3ec8dc7b9541d7"],["/2021/01/21/gitcalendar/index.html","fb2d5eeddef01874e4d4b493ad923417"],["/2021/01/21/markdownformat/index.html","db91b9f7f4147cfcf9151f7740738698"],["/2021/01/21/markdowntable/index.html","5d9f8bafdfb7762b8e49d9ca1172ba39"],["/2021/01/21/vercel/index.html","309d4c26b8110d648056326c886a6d1b"],["/2021/01/22/hardware/index.html","e631dbba5e8977a216bec0b3a7bfaad2"],["/2021/01/22/muviz/index.html","104ae409bd9acdf712326aa7c572149d"],["/2021/01/22/randomapi/index.html","9404fe0ae1548a576243642808b31f16"],["/2021/01/22/searchimages/index.html","ccdccf5dfc1cbedddd683fe9984ed205"],["/2021/01/23/RX文件管理器/index.html","fc3d5c60c5cbe3e9b1dee76725859390"],["/2021/01/23/chromeflag/index.html","7905dc252a787ad7fea4ab40e37949a4"],["/2021/01/23/qttabbar/index.html","557c6d8ac0f0ef2be89005c8ad0c9db4"],["/2021/01/24/githubspeedup/index.html","af29936c1e9e31f04fe252e59a11f617"],["/2021/01/24/jsdelivr/index.html","0804bf3cfa264beb31a4f5f703b3e747"],["/2021/01/25/note/index.html","987b972cdab2d54d64b83d871fa565f5"],["/2021/01/25/soul/index.html","0461da86dfa41aec3310fb433ab5acec"],["/2021/01/26/herokuxray/index.html","f01bcc7578bbee4004998734d6f7119b"],["/2021/01/27/proxypool/index.html","8a0ba6a925e9ad01dd7d4cd6503d1b1f"],["/2021/01/27/tracker/index.html","5de9605b11310479510307124930bde4"],["/2021/01/30/pandownphp/index.html","e19d90bb85cf64064c51d9f445f515fd"],["/2021/01/31/newgroup/index.html","988d5915daadd38ecad68c4851dd3478"],["/2021/02/01/clashlanguage/index.html","3dd28b1eb8ea19b932ae5506def90c40"],["/2021/02/01/encrypt/index.html","b8fbedc28d8a579a8d068a00a19df0ac"],["/2021/02/01/footermotion/index.html","96b2a2886aea25edea28be0b7bb209e9"],["/2021/02/01/gitter/index.html","6dde94e97a15640da8ed8c00ea3b7bd5"],["/2021/02/01/pixivtop50/index.html","3a6017895fbda0f2967d27b328f73ff5"],["/2021/02/01/scrollbar/index.html","317761c806f3c08bc320a992d65478a2"],["/2021/02/02/clover/index.html","888db9d8938f26113a97d7d760219b88"],["/2021/02/02/maya/index.html","9af9417b2423dfdde0cd3d8814870494"],["/2021/02/02/speedcontroller/index.html","f2f66222e8d1f3355a5e12773dc9cfdd"],["/2021/02/02/yesmusicplayer/index.html","40f091b30313fdf2135eeea10848c002"],["/2021/02/03/lenovoonelite/index.html","5d523a5a84032401952356a46f08d39f"],["/2021/02/03/skipads/index.html","f0be4e1d31d51c6803870b3e1c18f8bb"],["/2021/02/04/picseed/index.html","fb5a32c8b7d01a786f9515472f871dff"],["/2021/02/04/renren/index.html","460796d83926a237115b6e8681e4954b"],["/2021/02/04/serverstress/index.html","f841be2b3e95e7096c9b85996ea83b93"],["/2021/02/04/wikipediazh/index.html","3802065ec3ebda2cf3d23e033466e776"],["/2021/02/05/googlevoice/index.html","536a67016a4d8bb66dbd5f37397838f8"],["/2021/02/06/clashconnection/index.html","39653773c6c39f24f22e709a3320b535"],["/2021/02/06/gvtransfer/index.html","b722409f7ad743fce485af4d365f1ee6"],["/2021/02/06/todesk/index.html","a6592debe282743a7625faaa6cb2068f"],["/2021/02/06/vpnblacklist/index.html","e7061c0cee26c1cb52941121118576a3"],["/2021/02/07/mklink/index.html","fbefd42551591733672eea17da9ded8b"],["/2021/02/07/speedtest/index.html","42a0af87df90872c441337f5df5a9a92"],["/2021/02/07/translate/index.html","b6a81f3a35d609b49baa9785f8629256"],["/2021/02/08/ewomail/index.html","6b498c86f005c5d494cd0a2748b00136"],["/2021/02/10/officee5/index.html","295856ec992aefc9d32de72a065192ae"],["/2021/02/10/raidrive/index.html","63ea44f18c18f3de8af7a59f636d650f"],["/2021/02/13/e5sub/index.html","ac0052f6d59cdacdc6802098e5120682"],["/2021/02/14/screen/index.html","be613c7c8a8fbb116b8bdd8809733bac"],["/2021/02/15/clashtun/index.html","eed2dabec745cf02781391fa5fc669a6"],["/2021/02/15/messageboom/index.html","e28e122b6bcf2e66a2e90c178a3bf540"],["/2021/02/15/oneindex/index.html","007c76ff6a99a6fdcfbac97de9f77725"],["/2021/02/16/govsites/index.html","12df5bfe2929538d3f97c6d4a0ccc1f9"],["/2021/02/17/hexototypecho/index.html","f4c1a6b1e313f4d5e99f83cfeed78e02"],["/2021/02/19/fiddler/index.html","313de786b9d9c83bf9c955f614fa7948"],["/2021/02/22/potplayerset/index.html","caa66edf7b10c27855f72d03f63b5aee"],["/2021/02/22/studyresource/index.html","6ac91e4887b38b95ec823f3b6e270077"],["/2021/02/22/telegram/index.html","baad5cb5b375ce9ce76d1613374f6ee0"],["/2021/02/22/videos/index.html","134b6c8236f17e68a68de6a5f39f9ce4"],["/2021/02/24/mtproxy/index.html","d38d58db2144896d6794664bdde33769"],["/2021/03/10/catchcat/index.html","c429a86357e3df1a52062efff3e9d6bc"],["/2021/03/10/neteasemusic/index.html","80cb72a213674bbb6a7bd892b64bcc2d"],["/2021/03/10/surfboard/index.html","93879b2153a42f70be769cabf1c23e40"],["/2021/03/11/vpnandjc/index.html","1b2141e4b1da664e85f92a615c32a14c"],["/2021/03/12/qrcodes/index.html","1bdb5d69f8f62a08c35059cb5b495eda"],["/2021/03/20/qv2ray/index.html","02b2d8209286585d2e7b9d23afa8ca1d"],["/2021/03/22/freevps/index.html","f0fe3c5478b9182b762d8a7c1261f064"],["/404.html","fcee64327ae1101b90668fdc163e5dff"],["/archives/2020/11/index.html","0562cc4059ff8ab483abe9677f5f690d"],["/archives/2020/12/index.html","e5edafe8b7eb0a1bbbe6ae5e6d09586d"],["/archives/2020/12/page/2/index.html","ef65c4b8ac726e22db24bd170334753f"],["/archives/2020/12/page/3/index.html","1aea0ddd5ead28f2e131f3d34ef06772"],["/archives/2020/index.html","71dd97bb5495932bf3c4578170507780"],["/archives/2020/page/2/index.html","f7719d406ff9f6730296f08a49d46e0e"],["/archives/2020/page/3/index.html","237b7944bef00bbad9d43c91d96897dd"],["/archives/2021/01/index.html","84b8d1e0bc0e00bf51767b9ad4eade00"],["/archives/2021/01/page/2/index.html","26ca44c5fa53f11da788d2b563a04193"],["/archives/2021/01/page/3/index.html","3b2b576b8122ab0c92faf9e339d22ffd"],["/archives/2021/01/page/4/index.html","7fff2389fddc1729c1048105349dbd2a"],["/archives/2021/02/index.html","ab8a82394736a6c3d45027ecd91c26d6"],["/archives/2021/02/page/2/index.html","04214d383076346b8a5f391c27b4e5b1"],["/archives/2021/02/page/3/index.html","5667a4fce493dc37db247bfd320024b6"],["/archives/2021/03/index.html","19490e7c491ce30d8af9663c2894b699"],["/archives/2021/index.html","9de3da95e6e0dfd71fd4eb0d5bdbbba7"],["/archives/2021/page/2/index.html","fb2094575dd0600886e98340a5e03d3a"],["/archives/2021/page/3/index.html","74f593449c35888197eaad1c3f935a08"],["/archives/2021/page/4/index.html","0769c7db284ff7393fbfd2e7d304056a"],["/archives/2021/page/5/index.html","b3be82a5df01beee780e2210af62695d"],["/archives/2021/page/6/index.html","07c1d2eb6b6240bf271a0d814af5e341"],["/archives/2021/page/7/index.html","b17ab5f24c7450afb14957bfa609a74b"],["/archives/2021/page/8/index.html","3e2c6bfeb0a96eb70da0a0ad173c4c5c"],["/archives/index.html","03355bec646c0b2b501647b12ef62c57"],["/archives/page/10/index.html","344856fc83106c14a038dcbc5880ed35"],["/archives/page/2/index.html","d28bd01f755ef0f3d978ffeec091f22d"],["/archives/page/3/index.html","0027e78336c81bfc85d8a1285279eaf2"],["/archives/page/4/index.html","d345ca8a696b71287a26366f271d7b2a"],["/archives/page/5/index.html","778176505f3fe68cfee7b418792e0547"],["/archives/page/6/index.html","a7eebb66f21f51d6bb87ecdb97938269"],["/archives/page/7/index.html","56b75d7575c30ec47c0f6af93bae6d0f"],["/archives/page/8/index.html","b2d0a6c5a7bfaac532efccd9450c5f52"],["/archives/page/9/index.html","14ce9ad2dbdb371b66c6f5f10541876d"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPN/index.html","151908752c47bd6d17cfcd557918d6dc"],["/categories/VPS/index.html","3bf5c3ad3298a814c523a3ff569d5823"],["/categories/index.html","631efc369c67e0b71a8fbacbc0062745"],["/categories/下载/index.html","9036f40efac03c2adc2d58cede2650eb"],["/categories/安全/index.html","e0ea0d398aa03ba8d27fd47a3c0bef75"],["/categories/建站/index.html","05883ab7f3002e28aeb6e0ed371a0aa7"],["/categories/杂/index.html","b6f6a5c0ea4d0d84240a7f2b3e471e10"],["/categories/杂/page/2/index.html","9c8b5ce4ad68a36b41f4734aa28eb483"],["/categories/测评/index.html","14d7d6bddd43bb0146981a21346bb8a9"],["/categories/科学上网/index.html","85e9b67a4d8ba6aa1b33aed8bc79e69d"],["/categories/科学上网/page/2/index.html","d3f9dd51ef4398b184bca158c9da976f"],["/categories/编程/index.html","afc386541509520c04845b4087143d10"],["/categories/网站/index.html","e102b1b58deffdd69715d02da6ca6cb5"],["/categories/网站/page/2/index.html","824ff3881a753da502e273c710c343dc"],["/categories/软件/index.html","ade91a26e88b0f011f9f8fb4c1c6f970"],["/categories/软件/page/2/index.html","dd89657a05275ed976d091be78bf1aaa"],["/categories/软件/page/3/index.html","94f727d8fd6d9340864c8d52328deaa1"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","9f1d41ebc4ae1f7bbc2317572cf64a14"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","d6af466a8c26bd0307d1118dc9c2d6c8"],["/ios/index.html","297ee51b8686b9348a9f8ca520f58dcc"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","3bc2d123cf62d5e693e6cf5323fb2b8f"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","892daf113b4fb3f0ed6470c96f26a9ec"],["/page/2/index.html","a1d293d03c50e814da09f54b7a436eb6"],["/page/3/index.html","81246288083154924a3a5c8fba120572"],["/page/4/index.html","0424afe8788908aca5891b671c9d0113"],["/page/5/index.html","3128d4592fa2208cbb6234389c4aa6d5"],["/page/6/index.html","a7cd8dcf8725e60faf3653afde393a36"],["/page/7/index.html","3ef9b161ec63e54c3f0a1b08bd65853a"],["/page/8/index.html","92618abedcf70354641eb846671bf12a"],["/page/9/index.html","7a3c5aaac426a5f7036c8fd0eccf278f"],["/payment/index.html","db27c3143964996c8a3756b4cfc6172a"],["/privacy-policy/index.html","90ad2bc15c128f51a81621a9f1100075"],["/rss2.xml","df858b362fcb9313055d6ca627c1385f"],["/search.xml","b814bf62c1da161b36ed959ae0b50fc9"],["/sitemap.xml","0cdf177927ab6b0a47681c5bb8a373eb"],["/sw-register.js","12ea0832d8645fed1266cbdc560ef6bb"],["/tags/5t/index.html","1a1add4205620e5f8bd6d70964f353b1"],["/tags/Clash/index.html","bd9ab2ccc858b2e58bf47ca1f7f4881c"],["/tags/Clover/index.html","ca11b00858758b4ac58732c496ee5f8f"],["/tags/E5/index.html","188b7d7d310be5c317020dd554638f63"],["/tags/FTP/index.html","ccd3ca2d3ec3036b30d13b3812fa0c51"],["/tags/GitHub/index.html","adc2a4caa926085beada9ce9a0998c30"],["/tags/Heroku/index.html","a512068e036b61707350a83cf18e81a6"],["/tags/Hexo/index.html","5851ce91cd1e83f270a1586bee8a60a7"],["/tags/Lenovo/index.html","e50219470d1278f70d3fafe1e09c8d9a"],["/tags/Oneindex/index.html","152ca5c48d1be66eadb59c17f6443e39"],["/tags/QQ/index.html","7a34cf1e923a1de79d27e7aeab2c3ba7"],["/tags/QTTabbar/index.html","4b7b1e4a18b67f631e17afcb02294d58"],["/tags/RX文件管理器/index.html","c149c5326dd8f4634a39805ae44a4e66"],["/tags/Todesk/index.html","5453f1162cf35ec96eda5d00f0701ab4"],["/tags/Vercel/index.html","5231ee4cd2b8269649ef362eea5fcf81"],["/tags/ads/index.html","ff313cafb1e2a6d18fac592c5ed6e145"],["/tags/api/index.html","ee72f50e10b1d9823641ae6a8fda6f07"],["/tags/app/index.html","87d5bc4961a644e193e54cad7f27a9e0"],["/tags/blacklist/index.html","e56e5662f329d4fa3ec7cdcb9907cf29"],["/tags/butterfly/index.html","3f241dca0105991de35c84c8f7a0fee6"],["/tags/chrome/index.html","24b33250e93a872623ac2419facd3daf"],["/tags/cloudflare/index.html","191c7946996ef3655910df3017b1f366"],["/tags/cmd/index.html","51b01c0aa398aa4558990713598894f0"],["/tags/c盘/index.html","112e284a86d570f5778bdb4c41d90672"],["/tags/email/index.html","3f0cec50471e689c169609c8b8416487"],["/tags/ewomail/index.html","3f55bc7347ffc6ead66905c02484452a"],["/tags/fiddler/index.html","a5b9a7fa5f89679d6eb31d094378040a"],["/tags/flags/index.html","a212d5cc6d9c96f6ec3d66716c7845e5"],["/tags/footer，页脚/index.html","0a51f663bfec67e769020715da4d5fa0"],["/tags/galgame/index.html","beda3993a9f200326e02cc8e6cc159b0"],["/tags/git/index.html","2da4f8dee1294a34628d39ef1c2770c5"],["/tags/gitcalendar/index.html","76882fe9cf4da7fc4113a3e5083d5578"],["/tags/google-voice/index.html","a579aa7231ada3b9289e30061c0a592d"],["/tags/gv/index.html","8cb3867722d60761e6b546d9014a220d"],["/tags/html/index.html","14f05d0a332edcede72e96fbe1a3e532"],["/tags/index-1.html","a84073d5863429b7c2ec11bd3c23c930"],["/tags/index.html","16dcb08633085ec5013a64b45590a6c1"],["/tags/js/index.html","98cd78ac5183dfdcec1a82ebe49eb896"],["/tags/jsdelivr/index.html","fe0dda9510ecbd7e75fa3d4e193b0787"],["/tags/linux/index.html","efda384972ee4745df5c06740314fa4d"],["/tags/madVR/index.html","685df16ede3cb12e2a2d40647d5dc309"],["/tags/markdown/index.html","9b803f6cf17366d634381d6f3f8955e9"],["/tags/maya/index.html","7281804e704824c6a56ffa779fb8c580"],["/tags/mklink/index.html","c14567c5dbc32e72624f97d4dce94f6b"],["/tags/office-e5/index.html","53d3d688e261e4ba15d5e0410ff7901a"],["/tags/onedrive/index.html","3ddf03e1533697ae4f4e18161e17639e"],["/tags/picGO/index.html","b7d608837846e95c7d805fe05da3974b"],["/tags/pixiv/index.html","e6390ee87d28f90123f8ffaee6797adf"],["/tags/potplayer/index.html","0499f639788bc647e8d3f072b5eb187b"],["/tags/proxypool/index.html","1d9c788945d5e56697541d92ad259e53"],["/tags/qbitorrent/index.html","fef169d21d3fa20bd080f1bf3cdbf730"],["/tags/raidrive/index.html","cdc8834c6b81c4a8e294e26624e53f9d"],["/tags/screen/index.html","5bd67f19b0e5fe01730958983fc1ddfd"],["/tags/speedtest/index.html","e5b3c52d63f67f79b82bb34bc5107828"],["/tags/ss/index.html","b99bfaa3191fd18b1d3b261594b1bc71"],["/tags/ssr/index.html","3be8686fb0cdb98d9bdc557036b081fa"],["/tags/surfboard/index.html","6547a5f1b39c170f89692bc122d4be96"],["/tags/tap/index.html","6c93396eb0daf39e7937b2063aaf1b04"],["/tags/telegram/index.html","c217a352a7bf5124b688c9858abb47c3"],["/tags/telegram代理/index.html","fd4c6ced9ba1c707bf0591ff8291449d"],["/tags/tg/index.html","be8f590a7e60b162644cbfcf0a11aeab"],["/tags/tg代理/index.html","53faa9a55c5f72dc4bc460998336574b"],["/tags/top50/index.html","fa0c263eb2599dc7c3c95b2164bbaec7"],["/tags/tracker/index.html","65b29fa2957cdff7c55a37d4254fef98"],["/tags/translate/index.html","31ab21f567c0a081743404d931b4c3dd"],["/tags/translater/index.html","2933aa0b279d763e63728c3f35b35f1f"],["/tags/tun/index.html","a61f6cc689a9d3c3c3435684a390a1cd"],["/tags/typecho/index.html","1628a6e86cf3f236147a914dde15d822"],["/tags/v2ray/index.html","3423956ca6700ec38fa1801a884a85cd"],["/tags/vpn/index.html","a978c5db7e18d04df278e9aa9723a878"],["/tags/vps/index.html","bf091bf5c97f8be78fe443d3cfda8d99"],["/tags/windows/index.html","ca05fb8acf50b839c3c2bec8559b2d0f"],["/tags/windows端/index.html","18a165841fe705449210dda0d0b5f1a4"],["/tags/xray/index.html","0ad85e5bcbd7a98a37351f5aae16f36f"],["/tags/下载/index.html","7525a0a5a30ac32963375d1926182cd6"],["/tags/不限速/index.html","af46592b054506a0c1980327b90d7f6f"],["/tags/个人网盘/index.html","71ec54af8649d83e5cdfcec85e3eccf3"],["/tags/主题/index.html","56821e4195d167ec1187c8078a284cd5"],["/tags/二维码/index.html","eb6bc83ad7ba75f1e7b095e749bafe27"],["/tags/云便签/index.html","db0c1db4fa8d21f9cba134d07e6ae846"],["/tags/云盘/index.html","66b5bbb03c8648c49f9e4eacb8091348"],["/tags/人人/index.html","29d7277230d1c6cf0c3aaa86df8f5160"],["/tags/代理/index.html","cedb59589c90a404e7ff9e139255f296"],["/tags/代码/index.html","2eee69801837e65973254fad20a3ca27"],["/tags/优选IP/index.html","12ef3a15279233e98a99dd47bc8e6d45"],["/tags/便签/index.html","756f0811a24b91ebd168cca668167cdc"],["/tags/保号/index.html","12f6aea53c52133571f6bb77ee4a8ef6"],["/tags/免费/index.html","38cab461602acb3269a46905a3aead88"],["/tags/免费节点/index.html","16c7051b380a958cd17fdb8cfc59e01b"],["/tags/加密/index.html","cff007449208041f3fdf5d9eb18756c9"],["/tags/动画/index.html","3ade0aade8f10f2265c7255947f2382e"],["/tags/博客/index.html","d4f411c82f891c7d99765d3fcf92f00a"],["/tags/历史记录/index.html","3ad9c6596f260296bd6f1f56b5121f19"],["/tags/压力/index.html","d30bd5411eb05b35e0cc79f71d676e7c"],["/tags/压缩包/index.html","03edee615e57db2d98519c563d87197e"],["/tags/反代/index.html","b04ed1a534f879dd57b123dc11bdf73c"],["/tags/可视化/index.html","96beba4f633333bdecfbc1747ee5861f"],["/tags/命令/index.html","4d4078636de35ad4506e6a392c8b91ea"],["/tags/国家/index.html","7b75adbea5deb650860269c08268fb13"],["/tags/图床/index.html","6fc2bf8d81120ef98d39e80580f4839b"],["/tags/图片/index.html","66ba07f4e1ff1f271b8ea6960b68ba96"],["/tags/域名/index.html","c3870c06bf6e601f3fbc7e4790a5320d"],["/tags/多标签/index.html","db9a46d6cf6c6822b2ef7cfa1133c71b"],["/tags/存储/index.html","64bf374e737c76488f5c236b7c064bec"],["/tags/学习/index.html","4bac00bb2b5222a1515ca883dbfcfe7b"],["/tags/安全/index.html","d6bc6b628b007bc90696ed3ce2b4e8c2"],["/tags/安卓/index.html","5d7632a921cb742dcf99cdbe146a1bcf"],["/tags/宝塔/index.html","180992d2fd004cd5e46b33f250c68d89"],["/tags/小游戏/index.html","92b5ca75d8c63a2e986837b2bd46fae1"],["/tags/广告/index.html","97fe5f2e6af1199ca791f80ca98c0de6"],["/tags/建站/index.html","ed3b6cff420cf0a5f66e710b6317e20c"],["/tags/影视/index.html","610fab7ddbbb1bca355c2bbd0195ac02"],["/tags/微信/index.html","130e4820e2e5f087640a77d630403c02"],["/tags/快速启动/index.html","bd13f81cf554635c55f9f8b0957d3025"],["/tags/手机/index.html","0a1a167f546a52f77843006da169b59d"],["/tags/托管/index.html","1c5f03425de13e3e3034d14c7e1db6ac"],["/tags/抓包/index.html","88c0af5a91802ba88af396adad7cd22f"],["/tags/抓取/index.html","a7afdcc7e66fb2f823b4f726868e3528"],["/tags/投屏/index.html","8bb7552b1e54e3d65c8b1474083ee9c4"],["/tags/拓展功能/index.html","73e75665a861383e633f7ead15dce913"],["/tags/挂载/index.html","dbd1f175a133ff0631e06a7fe68c44cb"],["/tags/指纹/index.html","3d8c09590debebad97ca2d4ce2b1e763"],["/tags/接口/index.html","ad66ec575e0a748b6c6d59e88a26485c"],["/tags/提取图片/index.html","9b35a8d6bd68ac67cc09177cf5c06d23"],["/tags/插件/index.html","c66afae9d0c876b6a9a4657b1b552c63"],["/tags/搜图/index.html","d1d413061db76850fdebc1348d002b52"],["/tags/搭建/index.html","00ca5ac119210caf60ac1b1871b35998"],["/tags/撤回/index.html","01becabab78eb21188583a3e07aaa244"],["/tags/播放器/index.html","7717e059b49699e510f51a8ea4a2b7df"],["/tags/支付宝/index.html","c1691f851628ed7ad19a142cc1e1aaf8"],["/tags/政府网站/index.html","7fa343ca83a1afd609aa55ebde6046bb"],["/tags/效率/index.html","f6889a9f3a31f51f720becd2466b2246"],["/tags/日历/index.html","abae1b9be6eda18781fb251204e590e6"],["/tags/服务器/index.html","2bb456915a447b771aed076c5a052a02"],["/tags/机场/index.html","0a551a89d01d0b1eecf8bf84f9f4db21"],["/tags/桌面/index.html","7a3c1f62f8eb996c74f2d69c6b7b6db6"],["/tags/梯子/index.html","fc013c9f8acd7294a8a2df37337c96ff"],["/tags/检测工具/index.html","cfbb5fdf5cf014893afabca200f6eabe"],["/tags/汉化/index.html","32f17c9453a4a5420b769e95443c599a"],["/tags/测压/index.html","8b896e124d9c7c87142055cb0002148d"],["/tags/测速/index.html","9361054ac6c70416e280895dca0b996e"],["/tags/浏览器/index.html","b70f89a6665dbba69a5d8aec4cc75de8"],["/tags/清理/index.html","eaa74d821f285d868fb761fdd1306a9e"],["/tags/滚动条/index.html","9260fc5a6830e6fa9ab84c13f582c597"],["/tags/灰色歌曲/index.html","c9c09eeac0639863f477e11e0fb488b0"],["/tags/电影/index.html","c1b5b7b481072e6ad2ea5f544bd6ba0d"],["/tags/电视剧/index.html","9c2c0775f2703ee7bf389624225ab73d"],["/tags/白嫖/index.html","630cb36bc7d165b781a2404888fc23b2"],["/tags/百度/index.html","4061b8da3fa5d1e7b73d08630f46cd7d"],["/tags/百度云盘/index.html","3ab73c745396558cddfde30e3b3f0f59"],["/tags/百科/index.html","cd6fae35d58c7b51f0de0837b6bae94c"],["/tags/短信/index.html","14225d9e788421ec4b5cc2671b621537"],["/tags/硬件/index.html","d0831065b97848cb52ea05ed162e0586"],["/tags/科学上网/index.html","680cd6f038c5d494f6636f6b6a2b148b"],["/tags/空间/index.html","abc6c2941da595503a4ed5d92e3ebcce"],["/tags/笔记/index.html","725ba498e833c5f4c62afc5bbec67fcd"],["/tags/简洁/index.html","6879c3081daaf89725f8b908e09f7936"],["/tags/简约/index.html","758ac3b0218c3e259ad0433572b6b128"],["/tags/维基/index.html","d85108692b58e8ccbbf3e90c6a00bf85"],["/tags/网易云/index.html","449df86ce32aebead9a84615cd0fcbd3"],["/tags/网盘/index.html","6b14bcce90bad839eebc78950c43e541"],["/tags/网站/index.html","a775a8bb44b42018475a9c09faf88483"],["/tags/网络/index.html","1383a12f085ea0f8825627a9e3609f9f"],["/tags/美化/index.html","32da98f99f7ab99a147515cc1886391a"],["/tags/翻墙/index.html","f819d3d2f48e375b5596facb5cd060c1"],["/tags/翻译/index.html","65d622d4c468d77197cf5bdadd6f573d"],["/tags/翻译器/index.html","ad3048bea5d60f4d59ff7d5151f0a35f"],["/tags/聊天/index.html","cf90ef69d36c08360070e3e4ff54cce5"],["/tags/聊天室/index.html","2456463d9f5539550de77b4c9e024fd4"],["/tags/联想/index.html","fb7acc98e82f4e98e8f8e7fec12b587a"],["/tags/节点/index.html","f7ea2b17eb17bc4a179fa3f24e35173f"],["/tags/虚拟手机号/index.html","716ee0ac7a4a16346a040c5b772f955a"],["/tags/补丁/index.html","6a850f4e4f15834d571ad16e2d00463c"],["/tags/视频/index.html","18771e85475a4b6e1bf70afbf58f2051"],["/tags/解析/index.html","7d62d5ca53fe875055b048d44d3a4673"],["/tags/订阅链接/index.html","d5035787541dfc360925cd718de938c5"],["/tags/记录/index.html","e1970620069b76bcd21355ccafc2e354"],["/tags/识图/index.html","7e6b026c743f2f872d4a6175334cd594"],["/tags/语言/index.html","851fcef28df2e24a2d844bb060d539a8"],["/tags/资源/index.html","fbc183e81288e76d00dc0bcb28959d42"],["/tags/资源管理器/index.html","38536e686f425b56ef627716d3cea72f"],["/tags/转移/index.html","ca97d6a0d18bc6641b182833974935ac"],["/tags/软件/index.html","357f70498c7c9207dfcaab21aa8165a9"],["/tags/轰炸/index.html","275afe0f3335adcccb4538c7e40e5c6b"],["/tags/迁移/index.html","2d852bfe65324da341687ea11ecd27c7"],["/tags/远程控制/index.html","913f8619e388fcc93014925f61aa88c7"],["/tags/连接/index.html","e7d14dc69cff38e8cdc6131e578e9d4e"],["/tags/追踪/index.html","61c32b2c2723227673f33d4369830144"],["/tags/速度/index.html","ad0770c1363c8d2d7da6188f04602579"],["/tags/邮箱/index.html","5315d67ad539acc39fe7c7fb16fc0b65"],["/tags/酷炫/index.html","7495a39ecd9b52c5c83f1092cfe9ca8b"],["/tags/钓鱼/index.html","c4329faf59720678c8168d221cb7959b"],["/tags/镜像/index.html","33981cb523444aea8f508638ff83006b"],["/tags/随机/index.html","e36692ad1b574579bf2c78ea593f3726"],["/tags/隐藏/index.html","5752b4c5a05f501c4ceb3a51218543fa"],["/tags/面板/index.html","bceb1ce15c54a5e86fd32a4a0bd1090f"],["/tags/音乐/index.html","981f6ddf7d479b78b5731d964dc66624"],["/tags/高颜值/index.html","32530cbab9296d28f2d53595c97e7428"],["/tags/魔改/index.html","fd25b1c4ae9756559eacb301abecb124"],["/tags/黑名单/index.html","65915bbacc5fc608af5d1ead63e8d0d1"],["/urls/index.html","47fac5c7447d8204d0089c1de52c533a"],["/vps/index.html","21de66c7c19ac344a93e568418ce7ceb"],["/支持/index.html","fb071325438175214c9061a16fc5bf15"]];
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
