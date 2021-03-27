/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","9157c7f6bf6d9a18150ee6b30a22b3b1"],["/2020/11/29/clash-windows/index.html","9126fb311fbb8baf18a57eb65d6e3fd3"],["/2020/11/30/websites2/index.html","26c976da8f1aaadeccf9e83073946a3a"],["/2020/12/04/iphone4s/index.html","c9518bfb80a4c33df57f2285df3d304d"],["/2020/12/04/onenote/index.html","c37c7b801a1e0c19ffd1514b40b0e3f2"],["/2020/12/04/wesites1/index.html","08b010309bb303e8bb1805c99cf24c03"],["/2020/12/06/nokia808/index.html","8126c405999af4afe23bde74b35a0fc5"],["/2020/12/07/ipad1/index.html","2deac17955a85ee235b2238caf669c2c"],["/2020/12/18/freesubscribes/index.html","f9d2dce3787573e71f1e11e48a1de5ef"],["/2020/12/19/musics/index.html","84b3ee0212518280c01549130fcda0bd"],["/2020/12/19/shadowrocket/index.html","7d2bf9b4d89be50a7a09723ec37711c7"],["/2020/12/19/v2ray-windows/index.html","9dfe34139d13495a1dd4a787e43bacc9"],["/2020/12/19/v2rayng/index.html","6168cdc59986aeec7bb24bad9ff342e1"],["/2020/12/20/beoplay/index.html","f9ba5646afa091ae9b18e2da4b001f3b"],["/2020/12/20/订阅链接转换/index.html","7545ea49c3223e98cc555358a51446a6"],["/2020/12/21/chrome浏览器下载提速/index.html","6aeb632bbc4de3a382cdb1ffa92e70e1"],["/2020/12/21/免费128线程并发下载xdown/index.html","ba9a5e0592757d7df9f441f351432e4c"],["/2020/12/21/免费32线程下载软件ndm/index.html","b9713762945b578ad18f2c4a58da3ec2"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","e1336352f8510b18dd9e62cd2a69d5ac"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","19434338b7fd7202eb75495babb03652"],["/2020/12/21/广告怎么知道我在想什么/index.html","fc27de410b972dc4e4a2b2a45ef3c0fc"],["/2020/12/21/无名·引子（小说试写）/index.html","ffec69b79601271de5b94c4eda009e69"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","ea9275cfd427ba859e08a2092951be87"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","68bc3f02035b655727d45a425b349dd3"],["/2020/12/21/高速轻量下载器aria2/index.html","ee927d520db22c193e7666898664c3e1"],["/2020/12/22/2020-cee-roo/index.html","be154f9ad5b34fa14da7d83cf068a5b8"],["/2020/12/22/firefox插件、github、steam富强/index.html","6c5335e35b52869a3289a206165dc748"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","d4e0f82b508da59a3dbb355cd8ae78a0"],["/2020/12/26/python-day-1/index.html","b83d81d5a1b00d108054aca92afc0517"],["/2020/12/26/python-day-2/index.html","d43c8230ca5b1c34458156ad002d91bf"],["/2020/12/26/度盘不限速下载方式一赏/index.html","baa7dba284432d6c579f64d9c8594d62"],["/2020/12/26/添加开机自启软件/index.html","c96af833f0d1d368695d616aae637bab"],["/2020/12/26/电脑端截图方式一赏/index.html","703cb1dfaeb34b30d10f9deed41ef175"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","5dd81a6a327d4386dd337178b66ba420"],["/2020/12/27/最安全的浏览器tor/index.html","20125ae4ce49d4665ecd7edf64fc5412"],["/2020/12/27/网易云刷等级和听歌数量/index.html","856fa6a699516fc3d885f4b312a4126b"],["/2020/12/28/freenom申请免费域名/index.html","9a348d8fd931a94e286e8a8edba94f1e"],["/2020/12/31/机场/index.html","a896399f98c37412f2c2ce0805ab5a1b"],["/2021/01/01/M1/index.html","c7684aa9a3eb454138614398a2ab89d4"],["/2021/01/01/compress/index.html","ccf9dc98859231117f688b77b254c864"],["/2021/01/01/infinityfree/index.html","75fe58c3282301bccb203297ce0bca14"],["/2021/01/01/硬核翻墙/index.html","9d3763c09b9244ad83bcf0e83fc7e81e"],["/2021/01/02/qq/index.html","990ac5acf8983d059e9d8d01611c2abc"],["/2021/01/03/netch/index.html","ba36ee343541c1abc40b9816685a75f1"],["/2021/01/03/waifu2x/index.html","077ea4455e0864dcaa9fc41cf76d300f"],["/2021/01/04/ads/index.html","4e59b7558bd09dca44aae4938235d948"],["/2021/01/04/games/index.html","bc6d20a9f0f637780c5425caab637357"],["/2021/01/04/heroku/index.html","9597e33e95d7bd467d15946f761931fa"],["/2021/01/06/movies/index.html","a02e62110a18df70b08d765ad30a3b6d"],["/2021/01/07/google2020/index.html","5fc6ade6717d0f184f41a84fd77d895b"],["/2021/01/07/lucky/index.html","300b2ef4323c1ba922c3c9c58d2bf429"],["/2021/01/07/spotify/index.html","02c8401eea48069a5f80b9b25b25a13e"],["/2021/01/07/thunder/index.html","fd49d8ce7a4a3fefdc8bd9d8b1362edd"],["/2021/01/08/adguardhome/index.html","d3dcd922f8427f19114d2619f39354b4"],["/2021/01/10/IBM/index.html","bb273c35e9ce053ceae65a6b7349c424"],["/2021/01/10/potplayer/index.html","ef29bb710b15a3fb0b88acb47f074156"],["/2021/01/10/sakuraanime/index.html","3a3c71021a0339845cac9e77f414f251"],["/2021/01/10/美剧星球/index.html","a8e0603c9926f3978ef0987569ed78e6"],["/2021/01/12/telegraph/index.html","34749b03b11eec9940d438b56062d68f"],["/2021/01/14/comics/index.html","79e227001123c44681cf76ec0b156d42"],["/2021/01/14/ftp/index.html","7a1a09286d9b48622f5ff14194cefab6"],["/2021/01/14/oraclecloud/index.html","0960ca9cb0116cdc852c8a57ad9abba6"],["/2021/01/14/porkbun/index.html","9463a22ef11a13557d4fe2215aba5d15"],["/2021/01/14/powertoys/index.html","2bc3c559f452ff4ab1d56a5ab9321625"],["/2021/01/14/taptap/index.html","88244b71cecdfe5fbdaf2eb79093aea1"],["/2021/01/14/ubuntuvsftp/index.html","0b71756d3a2ca5af2146d03d3cca186b"],["/2021/01/14/小说/index.html","13fbbd9130f7689754441887438d4c8d"],["/2021/01/15/freeproxies/index.html","ab1300c9e532fafe87adf7e4312adaec"],["/2021/01/15/incaseformat/index.html","68c22e35e18a86f80a5c56e3b9f626c7"],["/2021/01/16/euserv/index.html","a359a6c7adb34334dcfce74fd1118f00"],["/2021/01/16/winxray/index.html","eccae25c76ba9fbe9407391178afbff8"],["/2021/01/18/qqreadhistory/index.html","c88e6f0b9f0daa538e2fba1e06b12944"],["/2021/01/18/qqrevoke/index.html","eb0b7c5d732e102523dd58980be52ab7"],["/2021/01/19/freevpn/index.html","c7aad2f19d1568f40aedb96d71625785"],["/2021/01/20/browsertrack/index.html","9f939e9c90ce911a568a75d11651c0e7"],["/2021/01/20/v2ui/index.html","e750fd9ea15993f6667209f0d88c4c13"],["/2021/01/21/failedtoconnect/index.html","2be7e2a4a031e6ff2c07d7d5d265f80c"],["/2021/01/21/gitcalendar/index.html","6214fd855b46b122e714260863d422c0"],["/2021/01/21/markdownformat/index.html","7c3b993c694744e7d32f1dc49c21a1f1"],["/2021/01/21/markdowntable/index.html","06a0f5145fa1ef7d331578502ce49a3c"],["/2021/01/21/vercel/index.html","60755958677d37185c49a092d50b7011"],["/2021/01/22/hardware/index.html","4e7020a6145ff79c81107d4dae948cd4"],["/2021/01/22/muviz/index.html","ff23ea954d7352a75c742874fa57b413"],["/2021/01/22/randomapi/index.html","58239eef5f42ede1b2c50c1424ed4a8a"],["/2021/01/22/searchimages/index.html","d06844e91b19e688b72702c8efccddb3"],["/2021/01/23/RX文件管理器/index.html","e288327b09b747d23d0ff15fed87d108"],["/2021/01/23/chromeflag/index.html","4b73fbd71ac3d6b5f58b5b5d05cad3da"],["/2021/01/23/qttabbar/index.html","efea12f4ad7bfae6407b1942b00698f3"],["/2021/01/24/githubspeedup/index.html","49de27d8fa54accd7bb4fde8e828e88c"],["/2021/01/24/jsdelivr/index.html","c5a3988fd21b7fe5527bfaa277e1512e"],["/2021/01/25/note/index.html","3f9efe0763d06552776196b2907c19df"],["/2021/01/25/soul/index.html","9891a5d3bff7b08b653ee39276f06ea0"],["/2021/01/26/herokuxray/index.html","45b10b0f85b733ccec66d7b729263aa3"],["/2021/01/27/proxypool/index.html","6eb4b7e0570661cf4be0ef96a27de50c"],["/2021/01/27/tracker/index.html","2682d426a0df7fdf27af947a7ecb47a3"],["/2021/01/30/pandownphp/index.html","828bb22c916193547a04d4727e3cbf60"],["/2021/01/31/newgroup/index.html","ac1825fc5f789a44ca9f3f7cf45cd2ff"],["/2021/02/01/clashlanguage/index.html","a13c1315fba1c1708ea3b18157d4a483"],["/2021/02/01/encrypt/index.html","e380241f10d0b2df909a988aa72dab5f"],["/2021/02/01/footermotion/index.html","1fb2e2fcab1cb6bc196a86be0b25476e"],["/2021/02/01/gitter/index.html","c214ebf8aa229888e2274185cf703f51"],["/2021/02/01/pixivtop50/index.html","78a8534849e719152275bafdf2ccdfa9"],["/2021/02/01/scrollbar/index.html","44b62c5b96af12bbedc42ce406c67e1a"],["/2021/02/02/clover/index.html","e1630c20059f713c5b4a59cf57b9f0a6"],["/2021/02/02/maya/index.html","838b936d3cffb504e0d7fd181b3e463a"],["/2021/02/02/speedcontroller/index.html","9a7a3af4995acb594f90a786c31966a8"],["/2021/02/02/yesmusicplayer/index.html","2084da2ee3949e462d59bb61a59c3791"],["/2021/02/03/lenovoonelite/index.html","4877b564ad903369d1ecbdb361bd8c7f"],["/2021/02/03/skipads/index.html","090a4ee2bbfa2d0a9a67baa995634774"],["/2021/02/04/picseed/index.html","739a78b06576ce3bec7f0b8c295f7d89"],["/2021/02/04/renren/index.html","2791ee338b93dd1c524da0e5d91fac29"],["/2021/02/04/serverstress/index.html","c713dc34b4cd1d2d64d7c630174d45f9"],["/2021/02/04/wikipediazh/index.html","7da7ebcd4c5b83e9ddb88a47ca4408c3"],["/2021/02/05/googlevoice/index.html","5dbc1eee64ee2ed02270c95696910d5b"],["/2021/02/06/clashconnection/index.html","95ad5779366098a488dd28e4d3a82a1f"],["/2021/02/06/gvtransfer/index.html","d0372cb1bb0b0d3fb62256842a18d063"],["/2021/02/06/todesk/index.html","e4a91d67a62c88850562fbe98a321853"],["/2021/02/06/vpnblacklist/index.html","fe94b280827026cb3e66393c8c2800cf"],["/2021/02/07/mklink/index.html","e900c35152bb99effcbda58806e427f8"],["/2021/02/07/speedtest/index.html","7bfaa9815cba7504cf7ac176a7c6cf76"],["/2021/02/07/translate/index.html","cc4bea653fe6c83dcfc1ff9ed566fc4c"],["/2021/02/08/ewomail/index.html","f9b7aba30185e16b3305256ea949f239"],["/2021/02/10/officee5/index.html","7fa67c1e514ee3a61f4ea047a4a21719"],["/2021/02/10/raidrive/index.html","e27eb4eb083980f4a5eb7583d037233b"],["/2021/02/13/e5sub/index.html","b6ff843b3ba324f2df26d7a62212654c"],["/2021/02/14/screen/index.html","fc0084a4d0ba240d2c5095be79d65fd3"],["/2021/02/15/clashtun/index.html","a58a2a5618ef16b81c670b3883c455da"],["/2021/02/15/messageboom/index.html","b2e2a19115a7e0130e9284e208e88bdf"],["/2021/02/15/oneindex/index.html","213a0c8fc857d679811db8bf478c3cab"],["/2021/02/16/govsites/index.html","84c79d936cbb0a620146e3d0590df43e"],["/2021/02/17/hexototypecho/index.html","e8a4778f35094e5d31624b0333084c7f"],["/2021/02/19/fiddler/index.html","bae5929ad50b84014544fe974847a004"],["/2021/02/22/potplayerset/index.html","d430a67f463e3eda9bb17d06f223cb54"],["/2021/02/22/studyresource/index.html","65abe61acebd48501683070326ade37b"],["/2021/02/22/telegram/index.html","d32e4d66c4ea7272762ad7f901bbb76e"],["/2021/02/22/videos/index.html","626c13a6d5dbb5d6e9d73b9a3f038f50"],["/2021/02/24/mtproxy/index.html","1135d41e83fb0ee39cfd6fa7cefd14af"],["/2021/03/10/catchcat/index.html","e8e95169bdc5daa9268a4eebe5b6bbfc"],["/2021/03/10/neteasemusic/index.html","1b68a9b3c12404b73dea68ead1a5f919"],["/2021/03/10/surfboard/index.html","e8bad38ff4601cabc4e8b2c1e2e7c04b"],["/2021/03/11/vpnandjc/index.html","289d0a95911f4d89b321a3032c605710"],["/2021/03/12/qrcodes/index.html","2af9c997dbe498d0b093e8510286d12f"],["/2021/03/20/qv2ray/index.html","182e1a44d43cbd979806ecad7665fbd0"],["/2021/03/22/freevps/index.html","a4f3ebc384c2c64ecad62a67414a520b"],["/2021/03/24/tgstickers/index.html","db1bdf2df8ad3605931182e62d60b8dc"],["/2021/03/25/clashx/index.html","23bf44241b33ef548900cde7483e5db0"],["/2021/03/26/bingwallpaper/index.html","ca5cf682ecec643350b724a736c3c619"],["/404.html","b6070d08c3156d504d920a8712b333bd"],["/archives/2020/11/index.html","d52a489d8a2b879e5b44cae65e845d94"],["/archives/2020/12/index.html","789b4fbfaf59715429540619e51fe34c"],["/archives/2020/12/page/2/index.html","2ae2917d5c47cbb744f7301dacad0020"],["/archives/2020/12/page/3/index.html","ccca83152226527e53c298ee19543e78"],["/archives/2020/index.html","e2801fe76a18a9d1a0bcdcc193f0df33"],["/archives/2020/page/2/index.html","e8342754c046e7d444cc28904c16b380"],["/archives/2020/page/3/index.html","bbed326257a9142fe4e7b228c0742ba2"],["/archives/2021/01/index.html","767e96d839d132fddd27c92d5c1356f6"],["/archives/2021/01/page/2/index.html","7d37482e89e118b6786b7452c39b149b"],["/archives/2021/01/page/3/index.html","5f714581213a3cd5806a161e5036d751"],["/archives/2021/01/page/4/index.html","d4d5f3bc591bb6b506a401dd3ac19b56"],["/archives/2021/02/index.html","307806e39ca770036b130ff6ddf12fc0"],["/archives/2021/02/page/2/index.html","ffca62fcf1907abf7cf2ab820940460f"],["/archives/2021/02/page/3/index.html","f58b044563672c0973de732a204a696d"],["/archives/2021/03/index.html","fd7b10fb6f378adc946f5703e1385eae"],["/archives/2021/index.html","a88ec973ea0eb5f39bab3d7233f6b861"],["/archives/2021/page/2/index.html","f9d5ce6006382d822615a965cdf3a3e5"],["/archives/2021/page/3/index.html","f9d094251c942953b0e146184c6da4d5"],["/archives/2021/page/4/index.html","a9c3db63fe908e86608a9e93dfd2813e"],["/archives/2021/page/5/index.html","23bdf62b4411b127b3933694c4d2a3e7"],["/archives/2021/page/6/index.html","406a0d46d7167ba3b30e6b59b19c3190"],["/archives/2021/page/7/index.html","cac6fa875b865a0a5dc19c2b1a4fd3c8"],["/archives/2021/page/8/index.html","b3ab1f441dae27cc69bc15beebed0da0"],["/archives/index.html","aec01f9af1a5b0c769819dda28e4fd60"],["/archives/page/10/index.html","ca632bb955fdc849438b45790da99f54"],["/archives/page/2/index.html","5d3dd1d39228c29425fbc302fabc3eb9"],["/archives/page/3/index.html","8f861605613a3229855d24f5af0e0f41"],["/archives/page/4/index.html","f39c1bb5a56ad889e3f30704cdf9be3d"],["/archives/page/5/index.html","400c059859d62167182fd09c6a21af84"],["/archives/page/6/index.html","0047da2e767b59c26f1eaa6f352c9ccc"],["/archives/page/7/index.html","ffcfbfd8e4dc221336e32ff2bb8d14e4"],["/archives/page/8/index.html","b8ea431277b0ff5235a618b8facfec61"],["/archives/page/9/index.html","fa68c45a413045707b6317174b5ac69b"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","16f4acb168ec828efdd07f576981dbb2"],["/categories/index.html","aa7afc856e8ec45d4c80b679c3a905b1"],["/categories/下载/index.html","52bce47b71b60272fb7565341aa1ffc0"],["/categories/安全/index.html","4c78240bbdddca92b13e016a354d71bb"],["/categories/建站/index.html","d3c6a8b8e14b92d07581ee65c9681b9d"],["/categories/杂/index.html","7dd25a6db4f9da1de0ac9e8646875c22"],["/categories/杂/page/2/index.html","a744e418c70f110d10a109ed56fcf52a"],["/categories/测评/index.html","e31d32e839804dca9b9c70979f0ff2b1"],["/categories/科学上网/index.html","6090f8fc718a7a8a7dc08b5ef60f0261"],["/categories/科学上网/page/2/index.html","0a995b4ce0eca07d82e139c9217a6b9b"],["/categories/编程/index.html","59e249ac9946b9d4fba0b8aa97d302d8"],["/categories/网站/index.html","270a3fde7275604fcdf31318cf995a73"],["/categories/网站/page/2/index.html","5006b8eb686ae0ddb900638d735c8468"],["/categories/软件/index.html","b12795f763b1e5e882d448ce982e106f"],["/categories/软件/page/2/index.html","53362f966b22ff69111371ec2301126f"],["/categories/软件/page/3/index.html","67cd7e26d84132d41cbd1b8c0345521e"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","3f264b986986c11d8e5663d42e1a19b6"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","adca6f26bdb474636ed1dfa5b9ae0649"],["/ios/index.html","192defc2c2f77baacbb79b34d677e8e4"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","1fab873ca306f496402dd8efc529646c"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","3e65df85d297cb9e67ed8de8f57a6b75"],["/page/2/index.html","ac17b42a8e3a2016858500659a81d8af"],["/page/3/index.html","ea0ce2c173e56496b47491ce7d2bce40"],["/page/4/index.html","879f933efe093491c69d2738212faf32"],["/page/5/index.html","2aaeac97e047f184354fb4fedcddca6d"],["/page/6/index.html","1cdb0ae7b847a354d00717b705926ce7"],["/page/7/index.html","1b545550ce4747d466f147361445b1c4"],["/page/8/index.html","b496ac2def605b17eda8116d743c212c"],["/page/9/index.html","7ee8a42f1b3f97ac1913380ab51bd9a2"],["/payment/index.html","a2126561b7947b10bef190b8356def66"],["/privacy-policy/index.html","29b499d2159718561cca9b5f803b33d8"],["/rss2.xml","06307daf2e40408fa0e56fa232c65329"],["/search.xml","5468f51ce93829a83d25f2477d9c2cab"],["/sitemap.xml","49e2f6b20150e025896dadcd68e387f7"],["/sw-register.js","ea54cc5a2aa9fc09a022f812a0c5faef"],["/tags/5t/index.html","c50dc9a30a15b71631b5deb91ecfeab4"],["/tags/Bing/index.html","226c86b1342684e754ec0f4e1694e53d"],["/tags/Clash/index.html","88af8eddd7d2aab765a2ab26e9fa5df5"],["/tags/Clover/index.html","571066a6506fdf3316a3eff8ff500b31"],["/tags/E5/index.html","44e8432b6bb8b6fbb6b4e1e2bdeee9ae"],["/tags/FTP/index.html","cd2faafe18835ffcec9e7b70e3eff568"],["/tags/GitHub/index.html","836bdd4419ac3dea2809ed0869cc709f"],["/tags/Heroku/index.html","a6d9d49df44ded965481ff08271962d8"],["/tags/Hexo/index.html","d3372614d2d222902ddc3ea8ff712844"],["/tags/Lenovo/index.html","060b189bdb4e45fae14cd9ac9d392a6a"],["/tags/Oneindex/index.html","0039254f8caa8d795e52ab6af3bc53f5"],["/tags/QQ/index.html","35842d19827d5d7cb1e9cf162eec5a99"],["/tags/QTTabbar/index.html","30386ce6e6f018ed3006675455aada24"],["/tags/RX文件管理器/index.html","4a478467a88f255271e6e2835cbc2719"],["/tags/Todesk/index.html","cf7159cc118417e41bd5a98aa1d564c5"],["/tags/Vercel/index.html","10a94b447de742d87629319d81d49310"],["/tags/ads/index.html","786edeed678f732b8d01639ca33fbf0c"],["/tags/api/index.html","0ce9eb923f91a62b2b262a5b5dc5fc63"],["/tags/app/index.html","ed65d1406859493331c5d5ed5dd1a68e"],["/tags/blacklist/index.html","b523fdc62836715959e2641aeeb52dda"],["/tags/butterfly/index.html","fd5da448f037e2bda7a02f257a7c95f3"],["/tags/chrome/index.html","8ed88635d663acfcf37aaab68b1f6e3f"],["/tags/clashx/index.html","a9471c421831e32a0bcb32ad6dd50090"],["/tags/cloudflare/index.html","bdd7c68c524dfcf9f3bf00cb6c5fb4db"],["/tags/cmd/index.html","91617714031bccb3b10ed8026ac37b22"],["/tags/c盘/index.html","417e6ffdde0f93ce405a5e47ecb942d6"],["/tags/email/index.html","e56f6ffe27af591ffb8f4487d4ea753d"],["/tags/ewomail/index.html","7a1737ade29a977667f410373b06fe83"],["/tags/fiddler/index.html","735150ef65dfe08c774b98de0fa9863b"],["/tags/flags/index.html","edc6f4efbc14cdbc236a39cca0f723c2"],["/tags/footer，页脚/index.html","6524fcbe722ba62ff1774551810aa951"],["/tags/galgame/index.html","1dafe3548357c2403f1a3fbcb7b8194c"],["/tags/git/index.html","8258e5132bb59648dd055148bcc54592"],["/tags/gitcalendar/index.html","66e627029c98308130dc687f5ee2020d"],["/tags/google-voice/index.html","349cc4e11fc079a9a2644d273a5d26eb"],["/tags/gv/index.html","ae4218276e781a6b4b3f1ed6f7144431"],["/tags/html/index.html","4f9b0bf62859048e7dd8c3f33a33ca3e"],["/tags/index-1.html","3558f2ff9782a7475209580a77417276"],["/tags/index.html","4edf99d45651e850c25a9b30db28b80b"],["/tags/js/index.html","bbecb53ff8f02722c0e192312e110910"],["/tags/jsdelivr/index.html","c77e794de98d7ca711cecacc6d836336"],["/tags/linux/index.html","bf9826b4bbbc43076fb3944d53897226"],["/tags/macos/index.html","e234cf894e62c535aa395a57b42ad59c"],["/tags/madVR/index.html","dddfc0eb251ef47dac2a3baf955a7466"],["/tags/markdown/index.html","977b2552c553b9ccf7b87ea0ec1a0042"],["/tags/maya/index.html","ac9d6b3fd9e2d7a8981d104255704962"],["/tags/mklink/index.html","5ff503e2e0a5e466e51c9ed1a61f2566"],["/tags/office-e5/index.html","0fee78a541878247a067ebd16ae6a527"],["/tags/onedrive/index.html","730ff04b8187a24318dc3d6d2b94a64b"],["/tags/picGO/index.html","657570a31d144c84ae1ece89ed1ce898"],["/tags/pixiv/index.html","a779419bf8f652296ee5186eb9becd0d"],["/tags/potplayer/index.html","d80750bd2320ffee5240180e33f1ac03"],["/tags/proxypool/index.html","562c6d7c36a64214bee8024175689be5"],["/tags/qbitorrent/index.html","21b8c0dfe951606c36cf11171c9f5872"],["/tags/raidrive/index.html","d44be615561b93f0d0db64c968360fca"],["/tags/screen/index.html","8cb409566b6bb1acc157b4bca2a369e0"],["/tags/speedtest/index.html","641fe898a4ad9b4b0ce139eac9eb3324"],["/tags/ss/index.html","ffd4c381766ae10f53d433b6a17e1e6b"],["/tags/ssr/index.html","f1134220fcfbf194fdeb5bedecbab486"],["/tags/stickers/index.html","9fe68750d34d75253ef9a2f4e1009f02"],["/tags/surfboard/index.html","f986deb7049218c3fb2b4457f27f51e0"],["/tags/tap/index.html","c8c338c2f22327c27b6444e0d28a5766"],["/tags/telegram/index.html","2ab315889ab137ff09b3df5c281d86a1"],["/tags/telegram代理/index.html","6696c8ac3c2854e9d1d935fc8bcb4a04"],["/tags/tg/index.html","940c546bb148b382d3df58d5f40e20a2"],["/tags/tg代理/index.html","3dafcf191644ce50c3d41846c7eea1cb"],["/tags/top50/index.html","995c8536e7df07f4686ff3253a509377"],["/tags/tracker/index.html","6c1ba31857c1fe250b805c4816a259d7"],["/tags/translate/index.html","029d2ae07c9a551378fe9c7c1acd0517"],["/tags/translater/index.html","9489523bfa7128a21a4cbabd85addac7"],["/tags/tun/index.html","d75902875d883e73e99b357364ad5448"],["/tags/typecho/index.html","fce2aec2e9fccf65abcc9537676adb1e"],["/tags/v2ray/index.html","5adfb4997d0cf21314f96963ca2122ad"],["/tags/vpn/index.html","98b3f947969cff403e47e64523f19794"],["/tags/vps/index.html","b1e42e365912ab104da7faf710d4b662"],["/tags/wallpaper/index.html","1123f3a4eba539034934987a6408955b"],["/tags/windows/index.html","ee90be94ccd0a44aa16b387e621f2d98"],["/tags/windows端/index.html","9358860ea77b1b1376bf293126907663"],["/tags/xray/index.html","4b4572044a535ca98fe858e1609b6e5a"],["/tags/下载/index.html","f623a9f17ddb38289575468f096caebd"],["/tags/不限速/index.html","1c734b715977f73b75c95fff75be18cc"],["/tags/个人网盘/index.html","e4bc4a663dc36a30213fb0fc22e441ef"],["/tags/主题/index.html","0703fa15e126fd2aa353eb51394508b2"],["/tags/二维码/index.html","cd24fb28d8e354c4ae8d21a31413ccf4"],["/tags/云便签/index.html","ca103fd1af5ad866e6eb6416fb9a5072"],["/tags/云盘/index.html","0b92a3d83fbdb5cf1bd2ac7bd8ab1b91"],["/tags/人人/index.html","b436552ab1e20eddf7839389fab775ec"],["/tags/代理/index.html","1abd611eae61f1d958e3c36cb7d07ca5"],["/tags/代码/index.html","967641cfc7d4f3166e104947bdcd6b43"],["/tags/优选IP/index.html","e010785b93a99ce84f954cdd257be82f"],["/tags/便签/index.html","3aa15d4c4463fca50e4d073313efe37f"],["/tags/保号/index.html","6cf3877b132bca81658eb52ac35a6a4e"],["/tags/免费/index.html","780f25b933946ba2c7d21dc863cbb303"],["/tags/免费节点/index.html","99a4409d2e9aee040be3270c1f7ee621"],["/tags/加密/index.html","e2419a44009f8cb139cdfd2bfa84872c"],["/tags/动画/index.html","fb964790d04eb4daa4e64a92e407eddb"],["/tags/博客/index.html","4714278c35912c5f61493ea5898366c9"],["/tags/历史记录/index.html","80ec79cfaa9caa927974b9f3c56ad09f"],["/tags/压力/index.html","f5ff9eed5b8d4bf71672734503bd3146"],["/tags/压缩包/index.html","a60a983bd7672a69d93c08f9924d65c2"],["/tags/反代/index.html","f30e4f4b3f2cca9f8a82675eafe69061"],["/tags/可视化/index.html","a35a9c081dd79c877d4fa08926f7698f"],["/tags/命令/index.html","92a08666c910e18013c0f7dfdecea962"],["/tags/国家/index.html","32a5518d42fd49e4e6af8cbf71704c5f"],["/tags/图床/index.html","5305b9cae4255e105f23437fcfa8e479"],["/tags/图片/index.html","2a586af26bd1d6e70565dfea9d056b7e"],["/tags/域名/index.html","fa9cef6ab85eb545058fa21c454e90c8"],["/tags/壁纸/index.html","fa13e1bf26c958157308e1e29adb58dd"],["/tags/多标签/index.html","7343acf6ad7cc49299445ccd52670ac2"],["/tags/存储/index.html","3bf1e6679f8ca52639abc7359c79b572"],["/tags/学习/index.html","d578ba1204e8855cda2fecd80518491e"],["/tags/安全/index.html","12216d5b093193c8d46ebea7afc1708f"],["/tags/安卓/index.html","d53fc4e474501dd53aac5c2630c57d74"],["/tags/宝塔/index.html","59eb6028d6e3b52b428638cffe51165f"],["/tags/小游戏/index.html","537f4177473b8320b577e274f54caf54"],["/tags/广告/index.html","056af9b916ff1cbadd34ed2fae916a91"],["/tags/建站/index.html","e0bb0f022a90bf13c1b5e57282019fa0"],["/tags/影视/index.html","59700501b83bf074f10b9d66e2c4007b"],["/tags/微信/index.html","8536d62f5d06e21166febd471e414e8c"],["/tags/快速启动/index.html","b5cd87b2823635f9268712fb2d656d97"],["/tags/手机/index.html","88287dec137fd26b7e3bb60e2ed85018"],["/tags/托管/index.html","14c75625eea86e7d61b275968ad78f46"],["/tags/抓包/index.html","ff85d42efce2efe9d3c47f7ab3d943ae"],["/tags/抓取/index.html","1352ce6d9edab66c300f386fe738149e"],["/tags/投屏/index.html","7eefb2c3aeab62e15e0e7d5415a07d1f"],["/tags/拓展功能/index.html","d4be3dc348f946f8215b7387e31dafe2"],["/tags/挂载/index.html","940052f603ebda16618f3c84d55f087b"],["/tags/指纹/index.html","93601e69a4bf416932ecf2b9860e050c"],["/tags/接口/index.html","856d5a138f2438579e22a45a4cf2af55"],["/tags/提取图片/index.html","908ff3d6450c4572e938375da50521ae"],["/tags/插件/index.html","cb795dba4077e44ae89509d17d96b7d6"],["/tags/搜图/index.html","7182ac2d4a3ef982667971645a0c83c6"],["/tags/搭建/index.html","8977b13f75327fe9f0d1c451db48e4d3"],["/tags/撤回/index.html","90750893dbc8635561a82a206f00ad00"],["/tags/播放器/index.html","c836fa7d46b4eed175747e6ebe1514e1"],["/tags/支付宝/index.html","e01965d0bfa862ab36e30bfbcd0f9407"],["/tags/政府网站/index.html","54ca23cdf5f562c68b7a567dc50b0779"],["/tags/效率/index.html","7f37bfcffa2b603000caab4d09f96013"],["/tags/日历/index.html","ce10d3e0ddc806e65fc485557a3702da"],["/tags/服务器/index.html","de3913df2a34625902f2fc8ecec72159"],["/tags/机场/index.html","c8be3af3379d0746e5d913747e347094"],["/tags/桌面/index.html","dd5af28068de32da03dfd64401a3cc9e"],["/tags/梯子/index.html","8e996ff302c61917801d11461d831ddc"],["/tags/检测工具/index.html","c295d947f4d246fa2a2ceabc1d6dcfee"],["/tags/汉化/index.html","d30ca8e73b2161bd35e4f583695f0631"],["/tags/测压/index.html","7af64450f0a6917ffdc1afef78895793"],["/tags/测速/index.html","62f614f4f212762090c77f0bb7162810"],["/tags/浏览器/index.html","d8c7ff1683cb4011c075825853157c5f"],["/tags/清理/index.html","9d3f409fbfa1772f65184e057c459edb"],["/tags/滚动条/index.html","90ee81a5acffc4b367cc8ca40b25cea3"],["/tags/灰色歌曲/index.html","1354dae4727056e11bcdc403f82603ce"],["/tags/电影/index.html","3d54ae980f0b0fbef1181f0a2aff764f"],["/tags/电视剧/index.html","89b86e78e712d9e38d828b65d518cc74"],["/tags/白嫖/index.html","5170dd8de991ea69291df9b07de63aef"],["/tags/百度/index.html","58f32922ccc4c38214b501f2a1c5c9a9"],["/tags/百度云盘/index.html","0b33abd3e56732f25060d44fd1e5fca2"],["/tags/百科/index.html","15345526fd61978994f313fa73cf5f7e"],["/tags/短信/index.html","d9e8b3688a69068dd0c42358a3483922"],["/tags/硬件/index.html","1c08fdc2318dc027b4a525443676aa6a"],["/tags/科学上网/index.html","df9ccb672773b6c475de30ed460ade67"],["/tags/空间/index.html","7aaef7bfbe2c96197f7d2255454ac646"],["/tags/笔记/index.html","58023867d6ebf3ad591856d39cd9c719"],["/tags/简洁/index.html","63e45a9a6b68ee8b70f2a670c64de24e"],["/tags/简约/index.html","fb9899f162780a57c42d8a84acfc30a5"],["/tags/维基/index.html","a404602c6e5862f7aff6e1a8a48876cf"],["/tags/网易云/index.html","58806d9a94a54b0894fe190cc167e8e0"],["/tags/网盘/index.html","e78eb395fc15ac953db72632f68f38e4"],["/tags/网站/index.html","ff93719a01f43c22d33c1c11cd04acb4"],["/tags/网络/index.html","46c0c09d9e30ee219b9d9cd996bb0347"],["/tags/美化/index.html","f6ad0cb0406b3f189dd3ea639c82226f"],["/tags/翻墙/index.html","29250417fae2874e2c64dad63c9fe73f"],["/tags/翻译/index.html","f89692101f2252ddd42d2a66cfee5129"],["/tags/翻译器/index.html","87da5bfcc7346845897f0b93a1e540c9"],["/tags/聊天/index.html","dfa409c551ebb0983edb940b27fd85e0"],["/tags/聊天室/index.html","e61cd6886ab97d175c197dece49780c1"],["/tags/联想/index.html","a1331723a23aa8f45a9e1ca9ad4ae001"],["/tags/节点/index.html","25621cfee03381db5df519ae6c6296b2"],["/tags/虚拟手机号/index.html","40aaad91920141c5d294a67522789abe"],["/tags/补丁/index.html","bbb6bd0738b49111c944330afee51602"],["/tags/表情包/index.html","5fcb0495ccf108a66faf90cc2abd003a"],["/tags/视频/index.html","7ac6c0649230e46b0e5e74210befe1c5"],["/tags/解析/index.html","a8d96d034cb61bfde4da25dd42a573b0"],["/tags/订阅链接/index.html","083512a9fa24ec5be6072069fefc5992"],["/tags/记录/index.html","a590b4c490924ed2e0e79a77332ae7c1"],["/tags/识图/index.html","a392269d294501797735eab0024353cd"],["/tags/语言/index.html","b5d1bed2c5f3ad8c4c65ad56db31f769"],["/tags/资源/index.html","2d8a23fca251133af7a3ddb5be692939"],["/tags/资源管理器/index.html","db7809aad7d5502c0628928cfde3b5e4"],["/tags/转移/index.html","9f8b63ce0efb232d0625da1e3adf7b00"],["/tags/软件/index.html","b743cd0518ad0f9b633d9c72a013cff6"],["/tags/轰炸/index.html","e1980a905e50e6558b0aff803158417d"],["/tags/迁移/index.html","2b47fbd1cd55ed75e1e8526dc2e2b9f9"],["/tags/远程控制/index.html","2bab8f789b4128b9527140d135c573cd"],["/tags/连接/index.html","2c43a1871fa130937c9eb609a08d0b38"],["/tags/追踪/index.html","f5f6d9b1241d84b2a7deb0ee2ea7eba5"],["/tags/速度/index.html","4944dd7def193878dfb1d74beb86e373"],["/tags/邮箱/index.html","b503726e9dd70a4c504cf735c8e18f09"],["/tags/酷炫/index.html","789431d047aee73a24215ac7abc96fd2"],["/tags/钓鱼/index.html","b002f8192420c5d59ec634a72c9a9364"],["/tags/镜像/index.html","bf6f37b5c0884aaf66c4759938337d27"],["/tags/随机/index.html","8567ad944a49c6f441b83c73012efdf6"],["/tags/隐藏/index.html","429eed12d7475baf7f76819cb8c6d270"],["/tags/面板/index.html","8ca2c4333126927c0fe2732c3cf59265"],["/tags/音乐/index.html","34e62f786cc94de65e3d004f54c6a96c"],["/tags/高颜值/index.html","c21da4939578056a81f1da69885d47f9"],["/tags/魔改/index.html","81a69e67cb176df8d280d29f27b9c729"],["/tags/黑名单/index.html","e49d85177395ffaec70b8b20241c432d"],["/urls/index.html","d33aad35cc945e90652c3b604f5f75c2"],["/vps/index.html","01d1ac03631eee6b161d2408b35fe3e9"],["/支持/index.html","ea722df4c9b814dbe88b8c313439cfe0"]];
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
