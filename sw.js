/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","be85dcbb5832ec9d5c7da0789c34aa7e"],["/2020/11/29/clash-windows/index.html","43d78d998db4fb57d1497b0bfea2aafc"],["/2020/11/30/websites2/index.html","f8b01269b6bf05ca3f823c50f6d913aa"],["/2020/12/04/iphone4s/index.html","0a8100b5c62a161af073020c1a7997a1"],["/2020/12/04/onenote/index.html","17349a46fbaeb73a8be32ec9e39768eb"],["/2020/12/04/wesites1/index.html","f6604a02aa64befdda3c93503c846f39"],["/2020/12/06/nokia808/index.html","77d951c087f5bb6366cef8d839e6d9b6"],["/2020/12/07/ipad1/index.html","77ffb40e57af1ef983cc920042ed9166"],["/2020/12/18/freesubscribes/index.html","e9e533d0c1f3c4e833f98c35156eb8fb"],["/2020/12/19/musics/index.html","8fcf576130ebe362b3854bcfca26df2e"],["/2020/12/19/shadowrocket/index.html","aa70df1599f9f9b649cd65681d387671"],["/2020/12/19/v2ray-windows/index.html","50331dce0e46c77abe9132b867a17f50"],["/2020/12/19/v2rayng/index.html","77f88c84dc9ce798da7cf60ac525cebd"],["/2020/12/20/beoplay/index.html","c24ffae4d8b8c07aa06346d3bb296f00"],["/2020/12/20/订阅链接转换/index.html","9908c85f06d557a7a7e9de75ad9a3516"],["/2020/12/21/chrome浏览器下载提速/index.html","b5655975e9b9bbbce6cdf2f01b113f8a"],["/2020/12/21/免费128线程并发下载xdown/index.html","e5de6ebfec26b5010c9bc6028cacbd76"],["/2020/12/21/免费32线程下载软件ndm/index.html","02615e3601019bc72b880af8ee804705"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","ac76c69c9225d1ebd4e960b5e0e6fc51"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","4373c2f026e0dfc96e45f486236d5692"],["/2020/12/21/广告怎么知道我在想什么/index.html","56950efa1557c2df04eb4a7151936f3f"],["/2020/12/21/无名·引子（小说试写）/index.html","39553f1ed291575c0daa4d48567d89d1"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","3bc661b1be163b57306a957f448d4263"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","4fc75cb33bc91e29304b961977d8d27c"],["/2020/12/21/高速轻量下载器aria2/index.html","a9aab74697de606edb7b4b5799d454fe"],["/2020/12/22/2020-cee-roo/index.html","1740c65d60dceac964a45dfd7fc67ad2"],["/2020/12/22/firefox插件、github、steam富强/index.html","3ce03598bd458fd4827f0befd16bcfe5"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","3ffef4a1c29c506aee167b31fe029b17"],["/2020/12/26/python-day-1/index.html","18106684dd73107375225c96f005ef86"],["/2020/12/26/python-day-2/index.html","8f37b742454f48f8b863bf120f6e5bd5"],["/2020/12/26/度盘不限速下载方式一赏/index.html","4972255665a7fbea62e1765e7b452e7b"],["/2020/12/26/添加开机自启软件/index.html","3fb7f1cf546253a9cc6785f7faf7930e"],["/2020/12/26/电脑端截图方式一赏/index.html","7caca36111ee6b4dcf6cfc295ead22cc"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","3717b8f19b7be954ccddcad22474c968"],["/2020/12/27/最安全的浏览器tor/index.html","8d64035b0f2c55023df7ae12cba8806a"],["/2020/12/27/网易云刷等级和听歌数量/index.html","acee7b4a10961b8ea788557fcc9f780c"],["/2020/12/28/freenom申请免费域名/index.html","3b98dd3050b552ca03dd699e50e44fe0"],["/2020/12/31/机场/index.html","0ab785c7477e765e46e1e1ffd8fb39e8"],["/2021/01/01/M1/index.html","3dd2ab7b9c99e970659072adcfc8980c"],["/2021/01/01/compress/index.html","c1f0b45c8784dc483c8797fd7d865ff4"],["/2021/01/01/infinityfree/index.html","6cc65b6ca5013b05f53d6cd93f892282"],["/2021/01/01/硬核翻墙/index.html","2867af5656e05e0540cf7ef9a9fd3b42"],["/2021/01/02/qq/index.html","332d087b4d6c71f1b09f5402db7bdc0b"],["/2021/01/03/netch/index.html","1a6c5d3702d332a8b8df9be090289cd8"],["/2021/01/03/waifu2x/index.html","030ad69e7a4ab777979691e32aeba1d6"],["/2021/01/04/ads/index.html","2050d752fe02c8104ff60a16211b13e2"],["/2021/01/04/games/index.html","4b07a0d304c3be8628d5c2108934a643"],["/2021/01/04/heroku/index.html","74abe9b002a45f9cc587297721292d1b"],["/2021/01/06/movies/index.html","1bec8ac7303dc9cc3cbb2e1b20a1322a"],["/2021/01/07/google2020/index.html","f2a13156595f5c0ec68c5911159d2dba"],["/2021/01/07/lucky/index.html","48c3465303dffdfbc66c8f8dae7e4c49"],["/2021/01/07/spotify/index.html","48285d0f406ade7cad878bd196bb0071"],["/2021/01/07/thunder/index.html","4c164cf976862db492aca636a06fa7d0"],["/2021/01/08/adguardhome/index.html","c1e68f1bee1653fe7d2688dc3302c976"],["/2021/01/10/IBM/index.html","951032bee3793342cf8b2ae655ca85d1"],["/2021/01/10/potplayer/index.html","c1331b0426bb82fb5171e7bd3b8ea1ab"],["/2021/01/10/sakuraanime/index.html","9245efabe8d0ebcf3da987b21a6ec6ac"],["/2021/01/10/美剧星球/index.html","498a985ad30b220b6d961513e0f4071a"],["/2021/01/12/telegraph/index.html","5c650ccad175ac98ed2688738c6f8998"],["/2021/01/14/comics/index.html","9f5162980595d1d1e4f782dc326838cf"],["/2021/01/14/ftp/index.html","ce4325d5b03cdb88842e695442fa3952"],["/2021/01/14/oraclecloud/index.html","8fa8ace8477c47452b7bcd2aa27b1753"],["/2021/01/14/porkbun/index.html","f482bc7a523f372a99c84be62e1f38ce"],["/2021/01/14/powertoys/index.html","cd53820f8d5bf0ec7c91b6d97d28c872"],["/2021/01/14/taptap/index.html","507917659513638a49eb87dcfb3104c8"],["/2021/01/14/ubuntuvsftp/index.html","29142419c77c84aee173e2952ae3c34e"],["/2021/01/14/小说/index.html","c8d40cf861de5deff60da8d684b1e83c"],["/2021/01/15/freeproxies/index.html","6fd888925d3dc986790244ada2ac546e"],["/2021/01/15/incaseformat/index.html","7b4c16f4850e6518fff40ebfb81fee56"],["/2021/01/16/euserv/index.html","5f8a0a8a1e7cab09b68eda90a1917b1c"],["/2021/01/16/winxray/index.html","6492c0aa18e3436423ef249659c9a447"],["/2021/01/18/qqreadhistory/index.html","0fb8a496abaf5748cc31857abd0dd271"],["/2021/01/18/qqrevoke/index.html","21a099e1b9f0f60d359876c8d8856189"],["/2021/01/19/freevpn/index.html","5daf31f4c1074cfb545b02525396b490"],["/2021/01/20/browsertrack/index.html","5466bab30a93f795dc77f4fe1b5d5fae"],["/2021/01/20/v2ui/index.html","aa661b6ab06631a00b984ca6d93fd60e"],["/2021/01/21/failedtoconnect/index.html","9d82cd2498964c6ea66c48cadaa2149c"],["/2021/01/21/gitcalendar/index.html","8e3a8431cfd75dcc970a9f7a3b9f2600"],["/2021/01/21/markdownformat/index.html","13d83f430f712275df7d532553307f8d"],["/2021/01/21/markdowntable/index.html","f875e20f36fb6592d6bb3da664889def"],["/2021/01/21/vercel/index.html","f1fe321cd5d2cc8c532568359c3ce1bc"],["/2021/01/22/hardware/index.html","23651b80690cc8e4599dff8134fce023"],["/2021/01/22/muviz/index.html","5f7204561c681c32b1dcb737b502bc6f"],["/2021/01/22/randomapi/index.html","ee88db024be8d3b48cfa75f2fdd829ab"],["/2021/01/22/searchimages/index.html","95c336019ab03c388ddda27a8b666563"],["/2021/01/23/RX文件管理器/index.html","9ac0439938fd5aea97ed4835c7172fa1"],["/2021/01/23/chromeflag/index.html","a3c67dadcdf5e9162c01cbb3ed993379"],["/2021/01/23/qttabbar/index.html","36c58f7b6a37c8534a49241e724439eb"],["/2021/01/24/githubspeedup/index.html","8e76bfdd1daa421f64894c3e41e194b0"],["/2021/01/24/jsdelivr/index.html","27d31242b0d348ad3a3914ee7684003f"],["/2021/01/25/note/index.html","60cb6543a71efac44a61ef39469a1973"],["/2021/01/25/soul/index.html","97f4af9a95555f505e4860f460236f08"],["/2021/01/26/herokuxray/index.html","62bcbe7d766b286fc0220e272a656a28"],["/2021/01/27/proxypool/index.html","5c22735c88f40c31a34e9c400a2adac7"],["/2021/01/27/tracker/index.html","a199f37415ed9f96bc934b50d3115bc7"],["/2021/01/30/pandownphp/index.html","a88a9e6889defd9b39ec27b3bc408e58"],["/2021/01/31/newgroup/index.html","de3ceb71b0624d23521fad450627c011"],["/2021/02/01/clashlanguage/index.html","279867b09d2945bed73eef305fa4346d"],["/2021/02/01/encrypt/index.html","1939869f124ac4baaf73bf7b08b3947c"],["/2021/02/01/footermotion/index.html","336b7d34a38cdb174c31e40d3ccbff9f"],["/2021/02/01/gitter/index.html","3798336fcc09c30053c0629bb0b07e0a"],["/2021/02/01/pixivtop50/index.html","1026dea358f0d3c7eeb81318a611cc3c"],["/2021/02/01/scrollbar/index.html","0a02513decfc0f13f8b728dbc190c724"],["/2021/02/02/clover/index.html","d01acdf5e26b3a711d0d3581ae66dd64"],["/2021/02/02/maya/index.html","de0fb885397a9350e429b9a326636618"],["/2021/02/02/speedcontroller/index.html","50e9c9fa52e29f63a126db9fd28392f1"],["/2021/02/02/yesmusicplayer/index.html","b75aa4bbb5b3219ac971adbbbce203f6"],["/2021/02/03/lenovoonelite/index.html","d5fc65ce525c55a79d5eb42265f9aa79"],["/2021/02/03/skipads/index.html","9fa20feab792d5f5af6fa0624b130ec2"],["/2021/02/04/picseed/index.html","584402987ef3f6c85a2b0045daedc345"],["/2021/02/04/renren/index.html","7c20e109c8900468f846b82ad592841b"],["/2021/02/04/serverstress/index.html","c703c588ef087bdf8b1ac45016364857"],["/2021/02/04/wikipediazh/index.html","ed526acd0f95eecade8aec00f89191a9"],["/2021/02/05/googlevoice/index.html","ac5ab1c2beaa529630b225b3f08a06ff"],["/2021/02/06/clashconnection/index.html","da98c8f8c5b6d87ebc0fabc33c4de311"],["/2021/02/06/gvtransfer/index.html","858566f1a0137ec60f9296e4906695d1"],["/2021/02/06/todesk/index.html","e0b40fd14dbd119c0214db24d8a0025d"],["/2021/02/06/vpnblacklist/index.html","eaf1a830384bb05ddf1c967716d0039f"],["/2021/02/07/mklink/index.html","b4a09823f9336afdb9440b381a8af0d8"],["/2021/02/07/speedtest/index.html","aca59502d504889f338e3989535f8db6"],["/2021/02/07/translate/index.html","85055a9907eb032d5169ad38cdbfd9ce"],["/2021/02/08/ewomail/index.html","a2384c70739f54c6eca53a634b94d2ed"],["/2021/02/10/officee5/index.html","120ca47fe075ab948eab2bfaf829d1b4"],["/2021/02/10/raidrive/index.html","449fbc83318d52a021acc4dd51f09612"],["/2021/02/13/e5sub/index.html","2fd57d2397177e5fe15a961649ddd153"],["/2021/02/14/screen/index.html","a04c9408d30a6223c1dfc15d7e3cf3e3"],["/2021/02/15/clashtun/index.html","6745ff10699814d1c69ada80ca38aa82"],["/2021/02/15/messageboom/index.html","540e1b87e76cee5f0edf73caf0ab1f88"],["/2021/02/15/oneindex/index.html","3eb236de00c47f6be3600fe8045a153a"],["/2021/02/16/govsites/index.html","24bd05ccc90fca9c440e6a7599dfe22c"],["/2021/02/17/hexototypecho/index.html","4972c85b8332f3d8591385705b4c30fa"],["/2021/02/19/fiddler/index.html","27ea67a3ca6e1c36dc73923af27e802b"],["/2021/02/22/potplayerset/index.html","ab17a7a51540c3c1407846ad6acc4506"],["/2021/02/22/studyresource/index.html","865bff2c62fb43fbd31e7fd5d60fc259"],["/2021/02/22/telegram/index.html","96429ec6186a8c602dfa2decc0ff45c9"],["/2021/02/22/videos/index.html","3e7ac43fa9d81ea1008101c09ac0b184"],["/2021/02/24/mtproxy/index.html","1e6c40068e7f450d16e42b0f0152b1b8"],["/2021/03/10/catchcat/index.html","9febe90ece7cc1ae61e6b77934ebbc1c"],["/2021/03/10/neteasemusic/index.html","8182b2c86f54b0fd5a31ac789a29e5a8"],["/2021/03/10/surfboard/index.html","414a8580adaaa5ccc3a37578dea9a7de"],["/2021/03/11/vpnandjc/index.html","930ee2b1aeab48b5223fb30deaf232a4"],["/2021/03/12/qrcodes/index.html","41d5eed5dcb54d61593882e25f343540"],["/2021/03/20/qv2ray/index.html","d9e494891b5d955951ba59d50698f11d"],["/2021/03/22/freevps/index.html","c582959f76acd7f92687ffb3d0e67229"],["/2021/03/24/tgstickers/index.html","5d9cb1ad765f0b12814b05a6fcc182e6"],["/2021/03/25/clashx/index.html","642d4f9781716a059f5dcacaf746884d"],["/2021/03/26/bingwallpaper/index.html","7785400d68f80a6cdcfff16eef9a56e4"],["/2021/04/03/soutu/index.html","099b2fe9a1f44050596748b1bab5aace"],["/2021/04/03/tiyunti/index.html","064aa4de1491b856c809c33758028cf2"],["/2021/04/04/btpanel/index.html","7132562d0f128ba14cbeaac730021a94"],["/404.html","a568bf2ff198438c414395b20b0b1fdf"],["/archives/2020/11/index.html","9a8b3393921adaf0383f267e8f69bad4"],["/archives/2020/12/index.html","cc0884c6e14ee8787704a93e53e0e6f4"],["/archives/2020/12/page/2/index.html","e02588cf68ba4d5601ab42a261616347"],["/archives/2020/12/page/3/index.html","a9cb3d42386c93facb96f03bb11f860d"],["/archives/2020/index.html","684373d4f008006af10a08f21a0aa406"],["/archives/2020/page/2/index.html","4c4c22b83dc95fc89e910dba78644ffc"],["/archives/2020/page/3/index.html","8fcb687c2d7ea01df0a5e412c4a7a7bc"],["/archives/2021/01/index.html","2f31542db2a18b8cad77dbd79630c8a6"],["/archives/2021/01/page/2/index.html","d7a028dedc0a241851a1c912d88f8e5d"],["/archives/2021/01/page/3/index.html","e38d1f70bb96aa79eafdf7af17eaef1c"],["/archives/2021/01/page/4/index.html","7146445b93315331cd6bdb6a89270862"],["/archives/2021/02/index.html","9f84c2587523314a664acb482b973b16"],["/archives/2021/02/page/2/index.html","262b9d9a1e6401a07e327e7fac1fa877"],["/archives/2021/02/page/3/index.html","02445e4ed088044508e90999851a8786"],["/archives/2021/03/index.html","0b47c2b9c294f9f8222a546cc876a596"],["/archives/2021/04/index.html","ab544b0858707747ee224a85ed887919"],["/archives/2021/index.html","d79febe217f4f00cb963514ae543910f"],["/archives/2021/page/2/index.html","899e6e0e58782073296d438ad0b9806e"],["/archives/2021/page/3/index.html","465628e2212f32f6650e2439066077ba"],["/archives/2021/page/4/index.html","58c561c84eaa4f10b14baf68ee2a6538"],["/archives/2021/page/5/index.html","7fc58d37461f427424e4fca46a4ca671"],["/archives/2021/page/6/index.html","b520d40d0c34b7bd2fdb80e7a245c384"],["/archives/2021/page/7/index.html","aea7c078826461e6e367135db2253a0c"],["/archives/2021/page/8/index.html","e6df43826885dac36e49b166681640e0"],["/archives/index.html","7376b8c080b96bf5e30c31deb500c165"],["/archives/page/10/index.html","822c434b35d6a36d406c285ef3cd07cc"],["/archives/page/2/index.html","213d76420fc7bb138b35c46b2b3c9231"],["/archives/page/3/index.html","66e5b72ebf9657ae0f026cc9bd54d958"],["/archives/page/4/index.html","bb6d32325d117bca7b30bf0fc2100f47"],["/archives/page/5/index.html","b0e41fe6b05e24e33ec0718f9924256d"],["/archives/page/6/index.html","016b21dd92d96bb320df4cedb4da44c4"],["/archives/page/7/index.html","a62eceab4bde505809f157d86a4cc55d"],["/archives/page/8/index.html","e6150099604bc792756eac0db0413474"],["/archives/page/9/index.html","836114708b2d1e3ee2315c1ae253f43c"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","6dbc35e4e2aa1bb72c0fe28d769670f7"],["/categories/index.html","fb8f6a4aedf0aebb14e45777b537d5b5"],["/categories/下载/index.html","80e001c0cc74376514b4b65803fdb5a7"],["/categories/安全/index.html","b1bd2066fa8865fd45de13f897c85c1c"],["/categories/建站/index.html","f5f9ae2bd7c537f70825372f733f693c"],["/categories/机场测评/index.html","2fb5eb6e275fceeec789d206da16af29"],["/categories/杂/index.html","85b16a3118ad5f8fa938ec2d30e7e4dd"],["/categories/杂/page/2/index.html","ef49d2c3c0d2b1cafde9d7279a57e7a4"],["/categories/测评/index.html","e106424f325631c451aa4c466109dd64"],["/categories/科学上网/index.html","41d346289e34b2c2687b77997227620c"],["/categories/科学上网/page/2/index.html","661431fe7d0fdf9a626b68b3fb925371"],["/categories/编程/index.html","9aaef54ee42eb81f9cce2c5d5d26d664"],["/categories/网站/index.html","a67c84b865a49a3fa64bd4bd1349d9e7"],["/categories/网站/page/2/index.html","0969714da1ff1c02d143ee3be41c3db3"],["/categories/软件/index.html","3c9ce9304e94fe29d354af7fbc4f9bcb"],["/categories/软件/page/2/index.html","6732af809a80a5b3f48b931b0d895b31"],["/categories/软件/page/3/index.html","37fed10665a9ac94d7d07889aa945584"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","90e77005455ab91022eff5cc743c0b34"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","889fa540507d9de3417e8c6425d8cd8a"],["/ios/index.html","bae832c770c6fa52cbd570711de7d561"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","007572f7f523d0bf9eada5ffc41a09a4"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","0f186981dc0b6673051a20c60a012c0d"],["/page/2/index.html","b951ddd2235dd74b0f6ffaefdb5da2c5"],["/page/3/index.html","faa445f511eb80f9c708c1c18cc45286"],["/page/4/index.html","c9b96077fe3bb59612ecafe8fa1af298"],["/page/5/index.html","77103492987b7ca9fb132c08b382ef0b"],["/page/6/index.html","7819dd2fc4c66730eed9dd25caee06c6"],["/page/7/index.html","f5398697abc93cf8c7be95351dc1d971"],["/page/8/index.html","93f43ed8adb099dca6831a0d71f4c7a5"],["/page/9/index.html","79eec2e42ff84911282bea829664ff2a"],["/payment/index.html","fd1a68d7ae161909b2ccc6a5d9f36b0b"],["/privacy-policy/index.html","dbd282e59361333288883f55297d0f61"],["/rss2.xml","9e25b39587f42083c4d3b49cb5dfe8d3"],["/search.xml","03ea1aa1b830f9debe6ba1c7907d9d5c"],["/sitemap.xml","b025c602679a36f8fbedbec5fa22a03b"],["/sw-register.js","9808a31cccfda56eb65c47d283874977"],["/tags/5t/index.html","eb54cfa8e57c9da8b034ccb035ab8401"],["/tags/Bing/index.html","36477223b9e600eb87a97d963ae63246"],["/tags/Clash/index.html","f0ebe7c45cc05612ac11fe358bf5aed2"],["/tags/Clover/index.html","01bb78cc984a6ffc7b7a432dc10c1678"],["/tags/E5/index.html","3683d5bde4c45897edea2f4cdb242299"],["/tags/FTP/index.html","81b4e241362373dbb68766e74775b7d4"],["/tags/GitHub/index.html","0acc9c8f8c9a92c0faa417d922f4d48e"],["/tags/Heroku/index.html","fb1bc445c4b62e11c0259fe20bcb020a"],["/tags/Hexo/index.html","d4932aa650bca38722de3c52aef60fd3"],["/tags/Lenovo/index.html","a94889029a81e30bda7f95db804ec3a8"],["/tags/Oneindex/index.html","3982031b97358edf5ca2a725d93bf462"],["/tags/QQ/index.html","0bedf586a0722db8008c6a4f1e03be97"],["/tags/QTTabbar/index.html","e74cac73c787c9ca12fac45433929150"],["/tags/RX文件管理器/index.html","7c0db47a96af06d5f7d3f090b656f5ac"],["/tags/Todesk/index.html","f66dd7e24fbb85ea25adc94820eb5ead"],["/tags/Vercel/index.html","00e360679716ed12218e7453e5506a24"],["/tags/ads/index.html","22403edd90b3891b9b9c145e0a58f63f"],["/tags/api/index.html","fbc5d99329820e17707a1020022a65ea"],["/tags/app/index.html","46c6caae961c3afd9c6dd82fb7d1624a"],["/tags/blacklist/index.html","da634b75ef97f866b52aaa362f45c667"],["/tags/butterfly/index.html","94d12c8bc3f3da8e687405b527ccfb6e"],["/tags/chrome/index.html","f58206ea6db2bcc5286dc190a9abd39e"],["/tags/clashx/index.html","65aafdc24ceb7e7225a183fb3a3e4401"],["/tags/cloudflare/index.html","216209c654aba3e88cb2fd8e109973e7"],["/tags/cmd/index.html","9e424c7034a23f51f751937e0c7c77c7"],["/tags/c盘/index.html","d47b11984a16a61449d77c180763903b"],["/tags/email/index.html","e7b44c7fe40d2a7e1255f75a0a01ced0"],["/tags/ewomail/index.html","bb98ea7f5fcdf15a207d6db276bc1aa0"],["/tags/fiddler/index.html","99f334cc5dca295e2c401074314ab3a1"],["/tags/flags/index.html","f22076f7318723aa69886ce18b64e0ec"],["/tags/footer，页脚/index.html","300798e6d2ca5f57980dbb4d8ed13323"],["/tags/galgame/index.html","dc35be93ce2aae49a05bf41d2e22249e"],["/tags/git/index.html","8ef513cd029d6e6479d681ad766f0840"],["/tags/gitcalendar/index.html","7aeed1451ee29e5d4a0c3c0add1942b3"],["/tags/google-voice/index.html","bbee6435e2137c62f63d4e78fce8a52c"],["/tags/gv/index.html","72126f332de7c7f0813ea65305ca79f6"],["/tags/html/index.html","2fe41d90103f4d0693ee83ed3941b48b"],["/tags/index-1.html","732be4990058e07223ab9fc288672df5"],["/tags/index.html","ca4303fad91d9441f8f1bde10012bf21"],["/tags/js/index.html","0ca78f521024aa462a8affaf4a572c1d"],["/tags/jsdelivr/index.html","571d1546ccb651716ce7b990c56ef478"],["/tags/linux/index.html","75ef03a2aa03f1624807b59abbdd5dda"],["/tags/macos/index.html","ee3ca4b45757656c80372e527fc969e7"],["/tags/madVR/index.html","74f88725531f9312de56dff41eeb18fc"],["/tags/markdown/index.html","81df662908e0909be7b93a4618b864ba"],["/tags/maya/index.html","2708429881f3eeb0a351a30676213f88"],["/tags/mklink/index.html","756b9c6d028baa8f3446010b15b7c274"],["/tags/office-e5/index.html","c833e6297fcf8aebbc502d062239c1ec"],["/tags/onedrive/index.html","06484b4c0687cfe911d90165f8cbb94a"],["/tags/picGO/index.html","e307fd3c62bec49029c679db0e18fcae"],["/tags/pixiv/index.html","f150c3f9a78973bb48bb490cee8d6073"],["/tags/potplayer/index.html","dd2ec64b9afa2dfa4b70f100504edd32"],["/tags/proxypool/index.html","fc2058508824b0fd6ee4617b71e88fc4"],["/tags/qbitorrent/index.html","82dc55531ae1a1329f28a10b7cddef78"],["/tags/raidrive/index.html","6589f1c019a66a14ff75dc11c11fefb2"],["/tags/screen/index.html","b01bcee78df1a8f50cda1658364810e1"],["/tags/speedtest/index.html","5e535d67e5584f9608ad62c7de1c14c8"],["/tags/ss/index.html","5faffa2f2a143c80b48c11f38ed224a3"],["/tags/ssr/index.html","84b86f5e2a9fe5cc85f3f67cc9cf7019"],["/tags/stickers/index.html","f990f02bb14480313b4ecb07c1554235"],["/tags/surfboard/index.html","3b68abffccdc475b48919836c18ef1a7"],["/tags/tap/index.html","13121417e76de7fbfa56ca4443592f40"],["/tags/telegram/index.html","5addb2b0a2b00f7831a0865da21351ba"],["/tags/telegram代理/index.html","7c02562080c05ec7c26cef145c3b59b1"],["/tags/tg/index.html","19e3a0aeb353f1cdfe02e51c7e0c6200"],["/tags/tg代理/index.html","8697a138b7e083038764a1a59ea8a55d"],["/tags/top50/index.html","621e3fed20dd51f587b1795984a63073"],["/tags/tracker/index.html","ac1803bdfdd67a52e7f5db04d0f6eb20"],["/tags/translate/index.html","b9be0c7748f211f3b724166af14f3506"],["/tags/translater/index.html","d15ab34f1b8e88f616756eff25d2c2e7"],["/tags/tun/index.html","026458dce4882dd721a3812e51a5ab0a"],["/tags/typecho/index.html","59e716441b00bd7514dc53a1a089d30f"],["/tags/v2ray/index.html","058a06a3d76c2cee1dacab98ac18e04d"],["/tags/vpn/index.html","f3be20be5f76ee5a8d36ffb0e4b738c9"],["/tags/vps/index.html","363e8364f6a0f9115550db7062ffaed1"],["/tags/wallpaper/index.html","38fb003c29f4df121bdedb9d0bb97aff"],["/tags/windows/index.html","d53f4f89ca8c53abcfa66f2d8b72e06e"],["/tags/windows端/index.html","aee4be17cdec71d2e907de57404028db"],["/tags/xray/index.html","8ecd9d9824250295c2541b651c4dc408"],["/tags/yandex/index.html","e29310cc67320fb87e8bc5c1b983c30b"],["/tags/下载/index.html","96b24af599efa7f6b60ded37784761ae"],["/tags/不限速/index.html","5830968d691693e6d77f5a9c9b19a64a"],["/tags/个人网盘/index.html","1f4baf3851c0ad9a1e2e1137d67f3387"],["/tags/主题/index.html","9950851671ce5a4183be9d2d0382ec7b"],["/tags/二维码/index.html","32033e6c08c29337fda53d58093b1179"],["/tags/云便签/index.html","5386a1d748928b26f9aefa103b653164"],["/tags/云盘/index.html","216eeca660b53da17a0c1339d254d751"],["/tags/人人/index.html","a73f1371abb36b35b1a359492e400eab"],["/tags/代理/index.html","3c4502a6f29f339ffcec084ea8568599"],["/tags/代码/index.html","9d3fb52eb364f97682b7e28edba941e3"],["/tags/优选IP/index.html","b327e0862372c308e945f64fe1bff2bb"],["/tags/便签/index.html","e32bba2d711290d6f39697777c9b0a86"],["/tags/保号/index.html","7d1011e32a1ff2427a70c3f70efc6434"],["/tags/免费/index.html","ee5ecce0078066118c71405be1febe48"],["/tags/免费节点/index.html","bcd6cefeb8a78cfa03c184d370029893"],["/tags/冷门节点/index.html","5acd59330b8bc21c987e1f17360d35e1"],["/tags/删库塔/index.html","2b6ece96f8991051f5b03b3df6b3c1ee"],["/tags/加密/index.html","a5d377ae540cf13663cd5436bc13e381"],["/tags/动画/index.html","b9c0565cb5fc71f6b599eecfc595adf3"],["/tags/博客/index.html","f313de4f628e58bf111aea7c96e3de8f"],["/tags/历史记录/index.html","966dcebbe17354878a6ca65a5d568804"],["/tags/压力/index.html","efaaa6fdbf4a1aec43e4902877a171e9"],["/tags/压缩包/index.html","a4b3d587d9813f343470e829f8edb5bd"],["/tags/反代/index.html","5e61c4c9a0714c1f2bd3dc01b243b19d"],["/tags/可视化/index.html","981b11c2e198360adc81b7accff30595"],["/tags/命令/index.html","502b8f847e0799b13d3adf470b9ad5d6"],["/tags/国家/index.html","16db3c522028de0513eb133cf92ecf17"],["/tags/图床/index.html","38dbdfcf843346ed4047c2d5fb766dfc"],["/tags/图片/index.html","24a23b5a74f1ca2a0cd9e5d872548b80"],["/tags/域名/index.html","c1ee043543568d4aeed32b0050e384fb"],["/tags/壁纸/index.html","ce2b6f501e48284bcfa69fbbd31ce434"],["/tags/多标签/index.html","e43d85453b3c5888da9b0e7545547dc5"],["/tags/奈飞/index.html","ef12aaf56dff6c12428a4271fff9c741"],["/tags/存储/index.html","d2afab6b916de4af92990c1497a8eef9"],["/tags/学习/index.html","73525497a8a89e8cf304bddffeeaa8ca"],["/tags/安全/index.html","b69e2067a5a3436d4c5ca44fb8ac59e5"],["/tags/安卓/index.html","11b8623f3969ed61dfa95877ba1df0f0"],["/tags/宝塔/index.html","26cdd82d20733f075e99d11abfd01d53"],["/tags/小游戏/index.html","52afe109f3ea3e88960edc3b891265be"],["/tags/广告/index.html","a60aaf97bdda2391cc1345c042b379dc"],["/tags/建站/index.html","1ccd4553ca24d8fd8cc4a3bbb0705e8f"],["/tags/影视/index.html","d153213f34a12736363b9b743659edbb"],["/tags/微信/index.html","e5cdfed8f74b1a2f31f24170c1420bb1"],["/tags/快速启动/index.html","d3a1cf11170cae5edba1b70b0605ceb9"],["/tags/手机/index.html","fd6957c277ca959057ec9a5143ee9b80"],["/tags/托管/index.html","0394fc7aecca3a9a761fda0aa135ddb8"],["/tags/抓包/index.html","66e3ae0397bee6a1e47930c2534593f7"],["/tags/抓取/index.html","ec5a5c6c72d8009c9530a17d73ff6d55"],["/tags/投屏/index.html","622b0010d6781440a7c814c769a6eb6d"],["/tags/拓展功能/index.html","8f2e37b56a2fd87d1aa14229bfe38fe8"],["/tags/挂载/index.html","c0fc42aaf41bd34cecd1d82e483915bd"],["/tags/指纹/index.html","07af476ac55e1652823987e3154f6ba6"],["/tags/接口/index.html","68d2584d3f55e31bac3d90cfc4675bab"],["/tags/提取图片/index.html","959c5f66d6647d53647399920728c21f"],["/tags/插件/index.html","609dc513708dff1075f11089c71b5c9f"],["/tags/搜图/index.html","118ec725a2cbfed01b3b21e2c060a2f8"],["/tags/搭建/index.html","99fbb4262de4596103065b9e779f11a6"],["/tags/撤回/index.html","36f3cf51c0471caff8723500f1ffbd7e"],["/tags/播放器/index.html","0fec0c096dba27d78a50cf4300c0174f"],["/tags/支付宝/index.html","6f246421971e458224fe811c0c1e328e"],["/tags/政府网站/index.html","7369f8e4bb38d239aa2ea0cc2f692ee3"],["/tags/效率/index.html","886d6ac3beb9d5a706ebad0fc1ac1739"],["/tags/日历/index.html","b3be36df13e30ff83e9a4f1aaaf85898"],["/tags/服务器/index.html","814be3f04f7c95951e27474b13c11f88"],["/tags/机场/index.html","723b200bd65c78b516307194804a70f6"],["/tags/桌面/index.html","7badb4e4b5d822cc270d409e2832fe9d"],["/tags/梯子/index.html","06943e6109b578eac74110007304c963"],["/tags/检测工具/index.html","cf4a7221926b884a049f2ff5f442d19d"],["/tags/汉化/index.html","fa41097a806560f5d0b769cb20fa135d"],["/tags/测压/index.html","09967d527ee607e0a42bb0d6f97d8972"],["/tags/测速/index.html","700bb9573022ee431b35a1f480c3f43d"],["/tags/浏览器/index.html","240f3f557dfd5358e51059b671735b58"],["/tags/清理/index.html","3ce0ab39c6d4129c10ea6356023e1ea7"],["/tags/滚动条/index.html","7073638ac27e813aeee00a25129c7668"],["/tags/灰色歌曲/index.html","13edaff7c4569571fe20ed5a67eeb02c"],["/tags/电影/index.html","ec56bf7ac9d7602ac677d54dca868935"],["/tags/电视剧/index.html","f4d135c1316337e7d8e0c13bf661235a"],["/tags/白嫖/index.html","1ce321e9a6d14f5734f526a29e7b346f"],["/tags/百度/index.html","c70950153f5b47c0a750b0c66248eb53"],["/tags/百度云盘/index.html","4552d8e6927e7bb5026d309b0abaf95c"],["/tags/百科/index.html","63e922a3a5f77f2cae419ea118126364"],["/tags/短信/index.html","b6e048121282c8c6e34f8e8c820f1ec2"],["/tags/硬件/index.html","1651a71c627070580509cb26748b1ccc"],["/tags/科学上网/index.html","2d425acdb9b6421793f12dce984c56d7"],["/tags/空间/index.html","541bde25559ed0ea9cee53c62feea391"],["/tags/笔记/index.html","261a9623c07b9a637fbd229b326f008a"],["/tags/简洁/index.html","a44245d11b43da4dd53f8af4144214ee"],["/tags/简约/index.html","356fc07d679a2c230e87737c0537aa78"],["/tags/维基/index.html","00b4358cc5df4555aeeed400317a88e6"],["/tags/网易云/index.html","273a810f3598394279ba6c773902088e"],["/tags/网盘/index.html","33959def62eba598b733df1eee5471ea"],["/tags/网站/index.html","f748b367dafe9a2a464118e439d3412f"],["/tags/网络/index.html","256aff266914542241a5ca66cae63bf4"],["/tags/美化/index.html","231cfa5c4968de5be505efe03c7134ce"],["/tags/翻墙/index.html","bd396f42a95acf989fc6137f126083f6"],["/tags/翻译/index.html","618f39abc7c165e6d00ca760f9feea5f"],["/tags/翻译器/index.html","ea8c70f2cca478583da9a6f8c186789e"],["/tags/聊天/index.html","8f5bdfb71993b90c563a23460c671b67"],["/tags/聊天室/index.html","81e79e43b59765eea52e0a4924511bcc"],["/tags/联想/index.html","ec49d8e3bf93fe362817990b9813e0ba"],["/tags/节点/index.html","0458b4c3711cb6506225ba553c7c269e"],["/tags/虚拟手机号/index.html","a68d25ae4cc1607869a50aa3031cb961"],["/tags/补丁/index.html","5a4d3f2cb9c5b22a33c7e6fb9bc11cf3"],["/tags/表情包/index.html","7d4d466da5865a7df5ca33bc77b9d4d2"],["/tags/视频/index.html","2567b8bd689568935987e577ae0f849e"],["/tags/解析/index.html","e8d5a653da9dbc095809926772c3d64c"],["/tags/订阅链接/index.html","61d88b26c78e50064015f73c00d6642c"],["/tags/记录/index.html","6e8226a56dcfe2c9426eb3e3f48a5ed7"],["/tags/识图/index.html","69bcc0597e922b27e08e64b431825e3e"],["/tags/语言/index.html","278a639b921a6d3d6621e726fef0b91d"],["/tags/资源/index.html","63035109ca433dee8dc0fa9d849ae27d"],["/tags/资源管理器/index.html","54d8a40b689d557a881a99aba7943855"],["/tags/转移/index.html","563c871773bbb6e2cbb671564208766d"],["/tags/软件/index.html","af3f1131611c27ab3e83c8724020670e"],["/tags/轰炸/index.html","11a41939f9e32f09b2103a551ce1220c"],["/tags/迁移/index.html","3acc8630bf551bf4b96ba1fe38a85660"],["/tags/远程控制/index.html","908be8342f6ac0c43a126ad4427b9fa8"],["/tags/连接/index.html","f43685295b542c0f3a9af3df80c6b6ff"],["/tags/追踪/index.html","7f985ee12521cedaa76e7d2aa7059c8b"],["/tags/速度/index.html","4f4fe65d9277b0604d019e461ca64d15"],["/tags/邮箱/index.html","d56507bc5deba118526d54b54f813357"],["/tags/酷炫/index.html","3e56b1f4c5c3a4eadb9dab52a1aeb625"],["/tags/钓鱼/index.html","f33d45b5a30dce08631308db80df4458"],["/tags/镜像/index.html","f668958e93bbb983370a06bbebe1e437"],["/tags/随机/index.html","a1f605d5bfdf25644e6853c148354150"],["/tags/隐藏/index.html","b22c589ffa18aef665e5a3f182c3c8c1"],["/tags/面板/index.html","1653bf0a5edf114d2bbf7e47b69bf9a7"],["/tags/音乐/index.html","457d0f94f8df35100e889fa69a2f840a"],["/tags/高颜值/index.html","cb737471302174aed5f9725d929c6395"],["/tags/魔改/index.html","0fbed85b1e4dae86c23d52da6dab3677"],["/tags/黑名单/index.html","ad54ddd76b2d38bcaf53fa6aa6976282"],["/urls/index.html","9ce5b5323cdd340f5e17f3a09f132658"],["/vps/index.html","9e9945ed40a649e803aca9451146fc19"],["/支持/index.html","eb181ef455e68b7fba1ee70e0c597a27"]];
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
