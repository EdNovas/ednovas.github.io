/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","884f258809a528a41aa8935ea5ef0895"],["/2020/11/29/clash-windows/index.html","390c4e66e2d47ddd813ca2490aa1da19"],["/2020/11/30/websites2/index.html","42c96b260477ef0c1f63bfda297c4e46"],["/2020/12/04/iphone4s/index.html","b68f5965dd23ffd31801e08c9ac88e07"],["/2020/12/04/onenote/index.html","d0ec3eb254026f40e8672c5355b1e475"],["/2020/12/04/wesites1/index.html","3991cdd984ecdd7240fe42f82134fa37"],["/2020/12/06/nokia808/index.html","08d2ff8a9941e67e7c61b846ae7436ab"],["/2020/12/07/ipad1/index.html","3c288327bdd07f34c6563c7d824c1426"],["/2020/12/18/freesubscribes/index.html","49c2a6e380e13d491ba18b5f9796eceb"],["/2020/12/19/musics/index.html","4da90540633741d6a61b651f7d912a93"],["/2020/12/19/shadowrocket/index.html","e1c4df246cd451cc76045201b241a09b"],["/2020/12/19/v2ray-windows/index.html","882c230b136d849b7920e3ae89096042"],["/2020/12/19/v2rayng/index.html","4ca94094849917ebce6b827d05e2d835"],["/2020/12/20/beoplay/index.html","1124bfcc728101b24404696bcdc05fbb"],["/2020/12/20/订阅链接转换/index.html","4d4fa813a13a1342fbe635f275d9e52a"],["/2020/12/21/chrome浏览器下载提速/index.html","a2c7edcc39c557edcfb7e2e679ac15db"],["/2020/12/21/免费128线程并发下载xdown/index.html","00fa55b495cd1f8586e099460ff4095e"],["/2020/12/21/免费32线程下载软件ndm/index.html","707d89035d1095c5143a92ed5b0a3b8e"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","d5145cf77283ce4a023d91769bb96886"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","2ef474c0a9709e031af4a0655f824475"],["/2020/12/21/广告怎么知道我在想什么/index.html","8b17bf84deccbe4ad6401f290e211e00"],["/2020/12/21/无名·引子（小说试写）/index.html","3dd0b943ec56f2902a3b17649518ade4"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","34c1f864b046addd5fd19dfd8ff97700"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","c7a79c2280e86e5c9f2f89a92450805c"],["/2020/12/21/高速轻量下载器aria2/index.html","a047b07932be75cb8bcd3165825bcaf7"],["/2020/12/22/2020-cee-roo/index.html","ea1919fd6c740de041c3f90a7311615e"],["/2020/12/22/firefox插件、github、steam富强/index.html","2412bc4215b819840383a7a333379665"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","02cc42b15fc5caf12de6077c3b9b8c70"],["/2020/12/26/python-day-1/index.html","994938fbc2a9b5ffc7b857869678e394"],["/2020/12/26/python-day-2/index.html","064cad96e58301f343ddf2547bc04439"],["/2020/12/26/度盘不限速下载方式一赏/index.html","b30fa736ef3bda4010c9ef892235741c"],["/2020/12/26/添加开机自启软件/index.html","40e786bca13c0eab9e106f7ed8c42545"],["/2020/12/26/电脑端截图方式一赏/index.html","cd321cc4f49d665ee843af2014bfd866"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","60cc62be1ae9ee9a3318fca9a0ac20cc"],["/2020/12/27/最安全的浏览器tor/index.html","e3791623bd596aab9ffa21249880ac96"],["/2020/12/27/网易云刷等级和听歌数量/index.html","864e9217054f91ef40a99f074bace2ec"],["/2020/12/28/freenom申请免费域名/index.html","54f4aae8ed954e584f3b4f2acd17cba8"],["/2020/12/31/机场/index.html","f711f860cc96e90e69cb213e05dbea49"],["/2021/01/01/M1/index.html","5e3f8db18fd70bfafbf6c93ba07f75f6"],["/2021/01/01/compress/index.html","2744ef971afe9ca4adaa39ab835b23b3"],["/2021/01/01/infinityfree/index.html","5dc59655876f02c7e48e0d51d97d919d"],["/2021/01/01/硬核翻墙/index.html","3d1592cef2aed55ee06e5070fc63ff15"],["/2021/01/02/qq/index.html","e7ebb720e960ebf850011eb9605c5265"],["/2021/01/03/netch/index.html","4323f827c68b9121c5b97ad2ae65141f"],["/2021/01/03/waifu2x/index.html","0b93ed53602b2d65ae968e40501cbdd0"],["/2021/01/04/ads/index.html","59d13b9e9eddd27cfa7c7f0a012c082d"],["/2021/01/04/games/index.html","0cf224e0ac37685e677d83dbd06da142"],["/2021/01/04/heroku/index.html","97322b05f3fba5887500a64a2b013d19"],["/2021/01/06/movies/index.html","1cdcf2b132af925e4ffe4bd1e5d91323"],["/2021/01/07/google2020/index.html","0609ed601aadc8422a8fb1aba19a00fd"],["/2021/01/07/lucky/index.html","a5550b52415d9001422c20f2468dc986"],["/2021/01/07/spotify/index.html","c7e449bd99249f2efbc673d660071fed"],["/2021/01/07/thunder/index.html","91e33ccca843631213c9134d0e3e2a0d"],["/2021/01/08/adguardhome/index.html","8903fbad113e48ffd33f964020bd11a1"],["/2021/01/10/IBM/index.html","93079e48cda52ed80b12960e00c50071"],["/2021/01/10/potplayer/index.html","8f067ade6df6f2a1f14b18f1f6a74907"],["/2021/01/10/sakuraanime/index.html","146fd6c476330067057e1060bef5bc3d"],["/2021/01/10/美剧星球/index.html","9db31c4f928d40b3ad2ad11eb278fb7b"],["/2021/01/12/telegraph/index.html","e3b9fba285f28fbadbebf0feddd6312e"],["/2021/01/14/comics/index.html","0f1040f2f198a32a1f229b729bb2a120"],["/2021/01/14/ftp/index.html","ad34d058fcdc1c8e26dad6bde7a13a93"],["/2021/01/14/oraclecloud/index.html","04d5fbd0111fd718f7a98b86dc6ade18"],["/2021/01/14/porkbun/index.html","80fac6243f1c08cddec44eeeff634b0c"],["/2021/01/14/powertoys/index.html","5a50d7e3d311792ac032497a7d984534"],["/2021/01/14/taptap/index.html","5ebe1b55aaa9a819e1941ab460f430d5"],["/2021/01/14/ubuntuvsftp/index.html","c9c7205757ec10b3ae2b569675d4a02d"],["/2021/01/14/小说/index.html","4ea6c0413a5d89cac083b7a4f221a8ed"],["/2021/01/15/freeproxies/index.html","49c82ea71683d2dbd35182fae2699b17"],["/2021/01/15/incaseformat/index.html","312384e1fd2a4932dea40f42fd0c8a61"],["/2021/01/16/euserv/index.html","69af2220f2fbb8eb982224d1e77b9c76"],["/2021/01/16/winxray/index.html","23c14df3a791d16c497f0adc934e0022"],["/2021/01/18/qqreadhistory/index.html","915b0a6d2452e5e239d1f6a390a8b35c"],["/2021/01/18/qqrevoke/index.html","762530804a8dfda5122f5357e7fd33eb"],["/2021/01/19/freevpn/index.html","1c4951cc0a57cf7e6f292a2e8509f488"],["/2021/01/20/browsertrack/index.html","89e911c1f162dc948cd1645b69412708"],["/2021/01/20/v2ui/index.html","3e7b09856c75825c39f1eb072983dd08"],["/2021/01/21/failedtoconnect/index.html","a4d768ed118b6fa6af9871cf65cb9955"],["/2021/01/21/gitcalendar/index.html","898a69c2784cc6b66c1de9b9bc824b3f"],["/2021/01/21/markdownformat/index.html","d37a0b47428f9c8b6fc080d224a898e5"],["/2021/01/21/markdowntable/index.html","40febb30a2f016ebdf296c1f3d7a3fca"],["/2021/01/21/vercel/index.html","98d78bcf303e9af657a9110c877f9123"],["/2021/01/22/hardware/index.html","2739845c44af3c2be50c97ef69bcc5a4"],["/2021/01/22/muviz/index.html","ce29594017d4c1822f6b45f1b7742370"],["/2021/01/22/randomapi/index.html","fe053abfdcf3487f01ca7c7e08a9385f"],["/2021/01/22/searchimages/index.html","d46fc7c372b13960e47b40fefbde6493"],["/2021/01/23/RX文件管理器/index.html","b7ab067a2239a1a67fed16bc67e32459"],["/2021/01/23/chromeflag/index.html","bf962b6d414fbe27dbd0103b8811bfa4"],["/2021/01/23/qttabbar/index.html","1b97c49ad2375c923cc8ed36be18852e"],["/2021/01/24/githubspeedup/index.html","388aee37748e94cfb41807efaf5e05a5"],["/2021/01/24/jsdelivr/index.html","68635741ca63a43a43883a9a2fc28ad8"],["/2021/01/25/note/index.html","a0c01e81b79606015ee013451881f896"],["/2021/01/25/soul/index.html","0a399ad2df408b3045185f1fbdb88233"],["/2021/01/26/herokuxray/index.html","f57cfb05754aa89e926ebbf5d353c195"],["/2021/01/27/proxypool/index.html","a43c87fc06251bea0dcd12f869837ce3"],["/2021/01/27/tracker/index.html","57f559773113e266c07516abf16d5068"],["/2021/01/30/pandownphp/index.html","4d02e82a59068fd8826114c89a658a71"],["/2021/01/31/newgroup/index.html","bf18a1e05b8b6a99d5a64dbb7f2c3c8d"],["/2021/02/01/clashlanguage/index.html","eab933c57727512a16c157ca65f724ab"],["/2021/02/01/encrypt/index.html","a095ece47c9fb363499a3f21e79350cc"],["/2021/02/01/footermotion/index.html","11518de8cf9e391a87063b2a960dd030"],["/2021/02/01/gitter/index.html","51c15c51cdd1c4017e51bda97e37ee90"],["/2021/02/01/pixivtop50/index.html","160b021d00be312109c168d4a9973e88"],["/2021/02/01/scrollbar/index.html","9a13213d2ac60dabff7c8cb3b5002a40"],["/2021/02/02/clover/index.html","9e36a086d5b84196a7d8dfe46345264c"],["/2021/02/02/maya/index.html","23436c876536fdca643ef259c8a7811d"],["/2021/02/02/speedcontroller/index.html","976e78a1fd60a0bc2808c7c5604984bd"],["/2021/02/02/yesmusicplayer/index.html","b6b597420d93efff1513d0b38bfd9c19"],["/2021/02/03/lenovoonelite/index.html","a78dc30d2df4e1fb23c64ab664a27f7c"],["/2021/02/03/skipads/index.html","5f9f4c0cb1e1d44337314751720a3032"],["/2021/02/04/picseed/index.html","eb7daf96a606e2d107b3ae49d6422052"],["/2021/02/04/renren/index.html","7427544c32148c62f6eae85bf6302090"],["/2021/02/04/serverstress/index.html","c79da90a8b5e4456ae02c2b2e16d54a8"],["/2021/02/04/wikipediazh/index.html","2b11efd86febfe90901347cb7f020622"],["/2021/02/05/googlevoice/index.html","625f7541858935d934981b2eed62f6ac"],["/2021/02/06/clashconnection/index.html","e440ff63e24cffe71c6e1537dcd25975"],["/2021/02/06/gvtransfer/index.html","e77c99ed2ef022675382e412f5343ae9"],["/2021/02/06/todesk/index.html","b1cc16c54cd2168c6630d38d7cab53b2"],["/2021/02/06/vpnblacklist/index.html","6a099d52fe8c3c4db8bac73747c99bd0"],["/2021/02/07/mklink/index.html","df9ef3e502983b47d35a6bd840ba7ee4"],["/2021/02/07/speedtest/index.html","22bbec506205d448a682d84a4268519d"],["/2021/02/07/translate/index.html","4bf06a572bdd51fa8f8d065dfd408057"],["/2021/02/08/ewomail/index.html","42e563970ecefe5b69b9cfd9d64d5dff"],["/2021/02/10/officee5/index.html","619c5d7457800603509b9d401f1ba4fa"],["/2021/02/10/raidrive/index.html","8d65868da63a7312cc893f38dcd89b35"],["/2021/02/13/e5sub/index.html","3b8b373f905b3e74a904f117161bfc38"],["/2021/02/14/screen/index.html","1ea52804b2c6bd0121392a51c4f62295"],["/2021/02/15/clashtun/index.html","1d09e676cbed80d73ba92796f7a7dde9"],["/2021/02/15/messageboom/index.html","e8465a51343a1747c0582583c15c7697"],["/2021/02/15/oneindex/index.html","ce88f99c338d13905539bb26f5ce3653"],["/404.html","7cef3997be087f5906a194fce3ac49e7"],["/archives/2020/11/index.html","cf0f542e11eb71c5484166ba351b753e"],["/archives/2020/12/index.html","7801c0d8d510d9f058303cb140aa0060"],["/archives/2020/12/page/2/index.html","24a13e53829df882f8aeaca335037737"],["/archives/2020/12/page/3/index.html","06ae181289a1c51a3958cb4f8a3012e2"],["/archives/2020/index.html","592e3f740e8aff3ede55cdd80f815119"],["/archives/2020/page/2/index.html","0983547d974abc8fd4935a5f8a615c27"],["/archives/2020/page/3/index.html","812e4ef47598de596de1622709fc6625"],["/archives/2021/01/index.html","08fb7716d68f25da966ff1f5f09156dd"],["/archives/2021/01/page/2/index.html","3181b99e089b78f52c9f9f7b2ff71389"],["/archives/2021/01/page/3/index.html","2ff95ac8fd0b5ca7756dff9d9f658284"],["/archives/2021/01/page/4/index.html","254957ed7545abb052c01840b4655f72"],["/archives/2021/02/index.html","16cc44cddafcd2ea0dd3e83c7e61ace6"],["/archives/2021/02/page/2/index.html","a3c9757d8f8867da8a0398f96cf58291"],["/archives/2021/02/page/3/index.html","397b3e517917d1a77629757dec3f8b3d"],["/archives/2021/index.html","36fe6b8095b1364d6f69bf6c09552adf"],["/archives/2021/page/2/index.html","88455a1a4baf37ad2bfb0ab417d60e27"],["/archives/2021/page/3/index.html","c641f54b066b8aa0788f2508a4b3c0d5"],["/archives/2021/page/4/index.html","e081b30924c178b1df8932aacc839af3"],["/archives/2021/page/5/index.html","430a10978b8f628f5bba0dd11f5c509a"],["/archives/2021/page/6/index.html","af4539f308dcd667b29bfcf9e773d926"],["/archives/2021/page/7/index.html","f989d8f908d03c0b4089a80000369d77"],["/archives/index.html","f60a01eeaa0d47ded2c99fdd27a21f52"],["/archives/page/2/index.html","e9470b125bfb4e45f65311fa37a16409"],["/archives/page/3/index.html","376d2ae96a783efe48f86cab59a94c9a"],["/archives/page/4/index.html","eafd86a71c58ccd216df5a14f1fe24f0"],["/archives/page/5/index.html","85f7e133727c7e337dd2b9e672cab221"],["/archives/page/6/index.html","30ba757b2b8e4d73a16ea14a69943e04"],["/archives/page/7/index.html","7ef06606f543194472a40535ba7900d4"],["/archives/page/8/index.html","88f8afd9e84f0880db1a6503273fc4a4"],["/archives/page/9/index.html","cebc092c417a96a8c5bbac6b4cc5b534"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/VPS/index.html","783a9683ad6a8df7e88c0e059256ea17"],["/categories/index.html","2703a6a193966c63545564fde7d95b34"],["/categories/下载/index.html","dba940c7e3ec3aba50af09370ab59361"],["/categories/安全/index.html","fa9d289b1bd54841c6dabbcfb060f9ae"],["/categories/建站/index.html","0aec8e19c120fb93c7831caa9a441d41"],["/categories/杂/index.html","8d00244108ea43125e491ade8283b3ea"],["/categories/杂/page/2/index.html","d08908c0d2988b5efe72d04d4c04eef2"],["/categories/测评/index.html","47e6fb37f768ea3fc267fe4984086976"],["/categories/科学上网/index.html","1c6d5629cac71ca5fe6409ec90c89476"],["/categories/科学上网/page/2/index.html","ca21c6af8bd88f6370a2e48578162682"],["/categories/编程/index.html","c30b67b9917d2010a5f8f67ee5a62b59"],["/categories/网站/index.html","e788a5477a40ee0ac1021e224faf2cb5"],["/categories/网站/page/2/index.html","7824227ed5501c96444f456cbc9de3e2"],["/categories/软件/index.html","dab265f030185966b198c17712580bc2"],["/categories/软件/page/2/index.html","268df746b30607004f485b97167ccdbb"],["/categories/软件/page/3/index.html","f43b185dc83039f0e50ac5bc08e01252"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","126673ef644daf0a86bdee35bef343bb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/friends/index.html","569c45dc04554eeb50952c57b251841b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","ae8d39b8cefc826524b6da9faedbb11c"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","985b7cde9423501d105aec995993e192"],["/ios/index.html","2c8777090c2251bf73d81fea3a3cd854"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","814084edfca521aea7c069da8e0698ad"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/2/index.html","f92d0f3eea61e9b1c870a7985d324a67"],["/page/3/index.html","b30150528142174c0b5ecfcfcc883d08"],["/page/4/index.html","c3669a019c1b2519675775b4447bafb8"],["/page/5/index.html","4ac4444f406327ff5e5ee8c28dbe0f2d"],["/page/6/index.html","62d219fac93b383739b7356ca5e384c6"],["/page/7/index.html","83368fe413a5263b45bfabc5f6b177dc"],["/page/8/index.html","ac061f48839e49f407eb25883f8be14a"],["/page/9/index.html","9b7f5f9fc65738673a8635d4f2ce4ce3"],["/payment/index.html","aa90add845279a2c9661de0d4f61a5fc"],["/privacy-policy/index.html","ec217df09f26b5c356ba4054855ee4c7"],["/search.xml","d4d5a3bcfe843432bac37b2838f78da0"],["/sitemap.xml","89895feb44bf17de1563d53ac6f55cc6"],["/sw-register.js","7432c94fa15551a5037255ca3a48c243"],["/tags/5t/index.html","6f632fe982fb77e9d9f38545aa0025af"],["/tags/Clash/index.html","a050ec43a8e5bd10915a5e0a9dd43422"],["/tags/Clover/index.html","64dfd658795ac89fa257e9926b8eaae1"],["/tags/E5/index.html","362f721d926cc98dc3ac66f4855800b8"],["/tags/FTP/index.html","650a8eac051f7c80b2eb50458eaf21aa"],["/tags/GitHub/index.html","a596307577fb19d5df75641a53e0dc0c"],["/tags/Heroku/index.html","23351aa60d8832a3bd8264e538cdaf0a"],["/tags/Hexo/index.html","f2effa17d7f22f5cf2772af42339defd"],["/tags/Lenovo/index.html","35a3f9390876120cbe7397d2cbacc402"],["/tags/Oneindex/index.html","ea61b388bbf948dea377ce33c60bc0e8"],["/tags/QQ/index.html","ef3c8bef6393eea4c8a113cf4c52928e"],["/tags/QTTabbar/index.html","84a67a2d98f3e2b2519336587978e609"],["/tags/RX文件管理器/index.html","f0cce5aafc474fb9ca433ee07212b7fa"],["/tags/Todesk/index.html","91c8982780fc5f91768e08467d762d73"],["/tags/Vercel/index.html","e69159d03108791db7042af386981ee7"],["/tags/ads/index.html","2aba9c95d14e4323ba63100e16ee2b8f"],["/tags/api/index.html","5a1304b1026d48b304593590f6868bfb"],["/tags/app/index.html","07587430bfb0f6cfd1da0ac57cfd75f6"],["/tags/blacklist/index.html","b9384f0f369729fb1662016a9f29f5d8"],["/tags/butterfly/index.html","e840569b1328b97e2e303175c76bc271"],["/tags/chrome/index.html","d5547522991843a7b8a50bc9e888c8da"],["/tags/cloudflare/index.html","ff59f506f20d1c3500dcefdc31f9bc8e"],["/tags/cmd/index.html","a4f104ef7dc6c71fb17f238b1060011b"],["/tags/c盘/index.html","59d0ade0f63261ed2582253ea5d922f9"],["/tags/email/index.html","e0b01774c5df0330822d70ad7cad569e"],["/tags/ewomail/index.html","2440823218f68db5e30217cad6af5a0c"],["/tags/flags/index.html","5812963428b2421600a42dc171e6182a"],["/tags/footer，页脚/index.html","7a25443a38febf90e581dc29b66fb36e"],["/tags/galgame/index.html","3635339175ae3707f9e2cc3a752444a4"],["/tags/git/index.html","84df9b1089779532ea3bd2ab4f7081ac"],["/tags/gitcalendar/index.html","a692de5eae0c0a94f8b0110262ff9c81"],["/tags/google-voice/index.html","0dc4b3dd0b7739ab75342a8a47806d01"],["/tags/gv/index.html","6086f34b9f380a027008e8a85d9db8b5"],["/tags/index-1.html","a6e86bf8f0dbb9a07bed8d229e1a1fac"],["/tags/index.html","52b5c7ffdb83e5d363b1c2a3da3bad4f"],["/tags/jsdelivr/index.html","257ce77c20722afff61b689e70bcbdce"],["/tags/linux/index.html","0d9b2f0c6704c13da29b48067e57e91c"],["/tags/markdown/index.html","1340b7911366d20b5df3f14a0349ccb5"],["/tags/maya/index.html","f4e6d87e424de3d8769a581c9b62c93a"],["/tags/mklink/index.html","d3874e114839be19fa17c7be263229f5"],["/tags/office-e5/index.html","2156f940f1cd6eee99e74637b330b31e"],["/tags/onedrive/index.html","6d6bf9551abdca07ab7d54eeb944a135"],["/tags/picGO/index.html","61e1abdda36c53620881836805ecd60c"],["/tags/pixiv/index.html","1210276071cbd7c0014709be27424c0b"],["/tags/proxypool/index.html","bcd31d63fa0d3f16eecbd8404bb8d5b0"],["/tags/qbitorrent/index.html","b8c82e2932f750b4304895fc99066ded"],["/tags/raidrive/index.html","787912c2f78b8520655d6204bd5b8805"],["/tags/screen/index.html","32b7a5354d98faa97319810d3e40d58c"],["/tags/speedtest/index.html","e524bc78d6324cf7a72e6a480b96e04e"],["/tags/tap/index.html","f48fb81b24a18aa36a6af2ad36a726bb"],["/tags/top50/index.html","3dcd76e83af7d79b486b08d4f154ff4c"],["/tags/tracker/index.html","ecab41851ee4d00428f35e77779b17af"],["/tags/translate/index.html","21111eb14e45fa9696d6c79f5f1971c1"],["/tags/translater/index.html","8ad1b1f058d84fb3be2d05be72fe12c2"],["/tags/tun/index.html","c610c8a10f13ae3720a627158ecb2c04"],["/tags/v2ray/index.html","990a97ab97f0c23bf25b75d25228e8fe"],["/tags/vpn/index.html","08e3a08bc3ae36fe467bfbc8ec87ba1a"],["/tags/vps/index.html","f5a94e71607384af720871eac8fd404e"],["/tags/windows/index.html","160dfe9f887548adf595402451fdd01a"],["/tags/windows端/index.html","b768401efa83c0fdb5c4b85978d18f12"],["/tags/xray/index.html","300114faa5d7415ea45d5dd65679ec58"],["/tags/下载/index.html","00054eb1a3b355b17a359f9258c1c544"],["/tags/不限速/index.html","43aa3b7525f0cd704efbc3ccf6f67d92"],["/tags/个人网盘/index.html","3c6f5251cfabef0bedd16c6b31dcfeec"],["/tags/主题/index.html","e3549c9532de74ac1aea484a8131dc40"],["/tags/云便签/index.html","36337422941be734a26c560ba6c8e720"],["/tags/云盘/index.html","ced1763e623c67e060bbddf2fb918757"],["/tags/人人/index.html","525a10f8671c7ecb23841309475b2693"],["/tags/代理/index.html","9e646a39202f265bcb14bef8da83c562"],["/tags/代码/index.html","97c5d4aa56b7a8d443f87e6d61023912"],["/tags/优选IP/index.html","a01b23474e4464066a134bf7a8aa4853"],["/tags/便签/index.html","e2fcb4abf3f93708ed45a9f40c8a180f"],["/tags/保号/index.html","89aec364fb9d1772dc67ef2d75fcaf79"],["/tags/免费/index.html","7b417335f39ae5258292bf598ce65f3f"],["/tags/免费节点/index.html","480baced3e3dc50dfee229912762c4c6"],["/tags/加密/index.html","cca64ef60fdedc31baf6637d2a97cdc9"],["/tags/动画/index.html","f0d73a115e7fcb5a66b72e9125405e2e"],["/tags/博客/index.html","c6a0c8194c75ea115669c0ca69bdc257"],["/tags/历史记录/index.html","5495e0315401b94ec79957e87e9e2130"],["/tags/压力/index.html","f3a4c1c7e9bc6e2ce8272cfb31bce4c1"],["/tags/压缩包/index.html","0633322c355538394798d2d0e49c1a8b"],["/tags/反代/index.html","fd8921c629f2b6a91bb3404ac7e78d5d"],["/tags/可视化/index.html","18f8147c2c9e8b0bbc781621550b9a94"],["/tags/命令/index.html","779c2b27c17008bc4af84a5d6de3cfa4"],["/tags/图床/index.html","161bfb588662818dd33c94a913b485ab"],["/tags/图片/index.html","be194b7711b71e1e4765fd198c57e1be"],["/tags/域名/index.html","b388fd56572a462598253725f2f22ca5"],["/tags/多标签/index.html","92ff15a709595bea439b1d600fef91e1"],["/tags/存储/index.html","6b5bd08965f6ddfd3a5a695cea92cbc8"],["/tags/安全/index.html","1b34e2f635a0bd4efc6e8e2b2dd5e6d8"],["/tags/安卓/index.html","b36b6a6ddd08d3ccaae690837db7232d"],["/tags/宝塔/index.html","1a5b545cb9adf2923a8cdc708a15ea16"],["/tags/广告/index.html","92f37d8fca5fd5d7934980fef37bc9ec"],["/tags/建站/index.html","a23442caed4f82fb248917acc1d7e191"],["/tags/影视/index.html","8980f3bba7d256d27ed172b504efd983"],["/tags/快速启动/index.html","a5ebcdd605199c4a77bc401e1f0cc3b3"],["/tags/手机/index.html","f6ffd3d4594994dd93e5fd3d671810ff"],["/tags/托管/index.html","ee19a0e37bfa0ef729a42d1b66ff2af1"],["/tags/抓取/index.html","cc2298c02c73b4ee50c2fdbe097a0bbf"],["/tags/投屏/index.html","fb863d82d012a0b6fb590de71f6d23d1"],["/tags/拓展功能/index.html","a6f8ff865e60496e44c5f602e1f1eda6"],["/tags/挂载/index.html","dfaef3e5a01ab014ae6d46027ea3a9bf"],["/tags/指纹/index.html","ab07027413e5a38f551433ec942b3662"],["/tags/接口/index.html","fedb4d4a2c691bac92701026bb444f5b"],["/tags/提取图片/index.html","5c584ebddac499bcd8a5d9d2f646e59e"],["/tags/插件/index.html","bae7e0d34e5bcf4018b8cf84df4ff684"],["/tags/搜图/index.html","c0e071a02ec629b82bee3806cedd9d17"],["/tags/搭建/index.html","3e21e1323226a64d0692757faf93d152"],["/tags/撤回/index.html","690b6ec12c5485ce2b22bcde44f242eb"],["/tags/播放器/index.html","7aa8dc801174c7271a5c6dc2453af018"],["/tags/效率/index.html","f21e01669ecd702663078afd7b0343b9"],["/tags/日历/index.html","8eafd7c66c6433513634961499dd699b"],["/tags/服务器/index.html","ce1548d67e9650405bb0f67e9b166bf3"],["/tags/桌面/index.html","cedd1f9070b1c76befe0d406f303c4e2"],["/tags/梯子/index.html","342877364090d383ca94de602fc97e90"],["/tags/检测工具/index.html","ce366dc4b51caf09552f0d6b5dc10ed1"],["/tags/汉化/index.html","9a11e1cdbc6fcae1fa0620d8d96276ad"],["/tags/测压/index.html","ee3d97750a40fef7e476540a54b0e0dc"],["/tags/测速/index.html","a0bdadcaff2eca1b1252c35d1dcc39b3"],["/tags/浏览器/index.html","c59bdce615c0ee207acede44efe06d09"],["/tags/清理/index.html","fa9ff7fa94452eaf252bcb35df5c0e33"],["/tags/滚动条/index.html","5f8f38f0165af0930e44ab0e414a5720"],["/tags/电影/index.html","524a291c0b97caaa380a431b65153784"],["/tags/电视剧/index.html","7d9ba6314891464cdbcfebe8c9599004"],["/tags/白嫖/index.html","198af96189ca5bd07e0b330c2acb86cb"],["/tags/百度/index.html","b3f1f962a08f650291fde0d841c50fc1"],["/tags/百度云盘/index.html","407d50b4d62ecda7ef96c88ff56d306b"],["/tags/百科/index.html","bf9b23e6eaf2594cbde2f127fbafa166"],["/tags/短信/index.html","0e5de6779febcf74685fd152d528ef70"],["/tags/硬件/index.html","2b5d8142c3a0af218959069d9cfabc4e"],["/tags/科学上网/index.html","9f60bbd80782f8e694aacdcc89e1b921"],["/tags/空间/index.html","ec4fef27497fc288e427c8f47639bb90"],["/tags/笔记/index.html","9d29220e7515b89b2c67f4861a135f10"],["/tags/简洁/index.html","58887029ee2626d2aa8f3993f2407f8b"],["/tags/简约/index.html","f21976191288a142a366518e59b4fa03"],["/tags/维基/index.html","5fd1aa39f55e6e0e75a82c56419fdc55"],["/tags/网易云/index.html","034d5523e368f43d8e2ae9a1cb28a7a5"],["/tags/网盘/index.html","6a21517f24bc036607bfa71b23ec9736"],["/tags/网站/index.html","2d6af64b5df02dc3fe72e57ab32efead"],["/tags/美化/index.html","f6e1d4db92d51833da372171c4a4ee9c"],["/tags/翻墙/index.html","f1eccd86bf550aa27f8897307741bc99"],["/tags/翻译/index.html","f807b4aa60ff026d9ce0965912a66d56"],["/tags/翻译器/index.html","a25ae42ec315efe363a00ec41c21da45"],["/tags/聊天室/index.html","c6f9b7857f62faeffb377b4f1c0ad453"],["/tags/联想/index.html","88d81581ed6f548ea88d6bf6d53a07fd"],["/tags/节点/index.html","2ef173b09a3fce8d5faab1b8fdd9cbfc"],["/tags/虚拟手机号/index.html","8e9087b4939de843eae59c8a01b477f2"],["/tags/补丁/index.html","44e4f86a919e03e937a7996a95082b5d"],["/tags/视频/index.html","bc60aa0b7a7181230c6b8f9aaec7a13f"],["/tags/解析/index.html","684567545ab2e4785915e530c2f9eb68"],["/tags/订阅链接/index.html","7edf5de9c01f6830fb147fc9d9056268"],["/tags/记录/index.html","2824c5df2cc5f16ca93def695abba762"],["/tags/识图/index.html","764c9cd87abb6f581cdf363f32277ad3"],["/tags/语言/index.html","a8c5c131a61793d7c81eb00e3440a6ba"],["/tags/资源管理器/index.html","5ce90395cdf21c034b6b9db8266ac9b3"],["/tags/转移/index.html","113e883f7fcb1b806c26b690b94e6158"],["/tags/软件/index.html","4fbe1c4eae2b41cff73206376f67a8bc"],["/tags/轰炸/index.html","cf8e8b9b3a2c64274b98938edb80fd7b"],["/tags/远程控制/index.html","b5f2f55930f2ff42d93f9d43feca2e7a"],["/tags/连接/index.html","2ec4d33023aa98ab52960a568e0fa8e4"],["/tags/追踪/index.html","3c9f6b897b4aa77eb92dc78e4d617208"],["/tags/速度/index.html","110d5719b06c0459754df37c754a28aa"],["/tags/邮箱/index.html","15bd0bff8ef076328690c9421ba3a6dd"],["/tags/酷炫/index.html","192a2d4b1878849473fbeabe528570f7"],["/tags/钓鱼/index.html","5c192ee91a458e3a490fecebf3c4ab69"],["/tags/镜像/index.html","c4db07a9f6eddd7210311ba7901288eb"],["/tags/随机/index.html","3f5b204674e9e71c3c898ef7498f00f7"],["/tags/隐藏/index.html","155b503e2df9fff84b9b26cb0a01be56"],["/tags/面板/index.html","0d4054206ff27453c23109ad6c3a2c2e"],["/tags/音乐/index.html","6cd4fea5a888b58f0d584020d86f305a"],["/tags/高颜值/index.html","5fc848e439769aef28b0cb4640992770"],["/tags/魔改/index.html","cd14545345641118af1e20158ec56b27"],["/tags/黑名单/index.html","d5384a6837bcebedcc16c04c1aee3dd8"],["/urls/index.html","9475d5d1865ccef11fba9582c0e5a4de"],["/vps/index.html","8b009c53e6dd02800d0b6922404397a4"],["/支持/index.html","2a2dc83caad41ff409730afa7168609f"]];
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
