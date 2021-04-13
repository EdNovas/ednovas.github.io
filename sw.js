/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/11/29/clash-android/index.html","237c5e8d5e95e7c0195eae773eef8c38"],["/2020/11/29/clash-windows/index.html","4e137fff53f18e986e58375061dec3d2"],["/2020/11/30/websites2/index.html","081668a453c9b4f664bea2b77c602711"],["/2020/12/04/iphone4s/index.html","42cb6dc1781cb4049bc760ecdc21cf95"],["/2020/12/04/onenote/index.html","fd794861777de5cfb93e205ad15a9ede"],["/2020/12/04/wesites1/index.html","507c6e96574f12ccf6f5aace8bb381de"],["/2020/12/06/nokia808/index.html","ed782e26a8863aaa858e42af48a0b4e4"],["/2020/12/07/ipad1/index.html","5475ab1c850736b39b2353d3581f9a0a"],["/2020/12/18/freesubscribes/index.html","35b035989e80594d886dcf677b4412a6"],["/2020/12/19/musics/index.html","eaf2e85419a4f852d21984456adf22b1"],["/2020/12/19/shadowrocket/index.html","8f0d0cb6315574f362d7f05e55bcdd9a"],["/2020/12/19/v2ray-windows/index.html","777fd424586126c2bb8e09d4e941c430"],["/2020/12/19/v2rayng/index.html","f0ae62307e6fff8e9bde98077757617e"],["/2020/12/20/beoplay/index.html","9ab0cdec7158d2e3b4465dd48d0ec6c9"],["/2020/12/20/订阅链接转换/index.html","7e263cae4790ae592f4a8ef8de99953c"],["/2020/12/21/chrome浏览器下载提速/index.html","d767ec25e295513ab00c3eedf93539e4"],["/2020/12/21/免费128线程并发下载xdown/index.html","22badf0e0c424191928e31cf2e096889"],["/2020/12/21/免费32线程下载软件ndm/index.html","57b62ee0f8e01f01bcbbc7fcf1aa0b70"],["/2020/12/21/免费简约清爽下载器motrix（吸血雷/index.html","3dc46442b8119706dffe838be3589a55"],["/2020/12/21/多线程下载、视频抓取软件idm/index.html","acdc671a964934a41bde0c97365c87bf"],["/2020/12/21/广告怎么知道我在想什么/index.html","dd68cc1924ddb4dcf3a4aba43f250def"],["/2020/12/21/无名·引子（小说试写）/index.html","d83b758ce6cdb3a79d76bc265c3bccc4"],["/2020/12/21/谷歌无限空间团队盘申请/index.html","7cef85720268f7cf778ce8b8ea201a88"],["/2020/12/21/钓鱼网站是如何盗取你的steam账号/index.html","97f73ae80a60ed3f27f9f715c671b3a4"],["/2020/12/21/高速轻量下载器aria2/index.html","b4d45079152c3aeca3d9329643b371ce"],["/2020/12/22/2020-cee-roo/index.html","288dd726aec61cf5b3b9829ee7983b54"],["/2020/12/22/firefox插件、github、steam富强/index.html","19d4e7152087fbdbef083e5fbb345937"],["/2020/12/26/aria2-vps-drive-离线下载/index.html","5b9f5b46394090b630ed9d4d2e9aeb3f"],["/2020/12/26/python-day-1/index.html","35dfceea1e4f9c1d7e30d5a1b406f3b0"],["/2020/12/26/python-day-2/index.html","59ac3eeb460fc6e001019e5969776144"],["/2020/12/26/度盘不限速下载方式一赏/index.html","a5b84f496f1be62bf1f0ad627f0f4159"],["/2020/12/26/添加开机自启软件/index.html","7813c816234f7f101d5d21797610cb28"],["/2020/12/26/电脑端截图方式一赏/index.html","d9d744f6a3872e3cbb7a465b07f45a59"],["/2020/12/26/解决代理后无法正常连接微软服务/index.html","d43ddfb64ffb68823c124636a522c7ae"],["/2020/12/27/最安全的浏览器tor/index.html","a04c2fa7e936309ec0e13791ff5a5fe3"],["/2020/12/27/网易云刷等级和听歌数量/index.html","0edcff267974489d77d99e3e1203b3e3"],["/2020/12/28/freenom申请免费域名/index.html","ff0e9cd666e01f206f9a1c0a7b8369e4"],["/2020/12/31/机场/index.html","1b8a8ccac2fb1e7d136a8d3544f6c222"],["/2021/01/01/M1/index.html","e7f18e282594783f7f3343faeb9fb4d1"],["/2021/01/01/compress/index.html","4aecbffebca30cf3d3238c3cab0ea613"],["/2021/01/01/infinityfree/index.html","263d915dbece7ce15138ec865ef7fb71"],["/2021/01/01/硬核翻墙/index.html","f00972eb455653bdc4affc4c6ad6dff1"],["/2021/01/02/qq/index.html","9e7b3f11aaeb5a214c2beded61a8b63e"],["/2021/01/03/netch/index.html","c866ce55b69fd440f7c48e3370e84bf3"],["/2021/01/03/waifu2x/index.html","77633f681297da7bb493126695d0e040"],["/2021/01/04/ads/index.html","522fdbea9830938bf8abec6508759593"],["/2021/01/04/games/index.html","f02940f8ccd805eccf04defa27367050"],["/2021/01/04/heroku/index.html","01cee81549ab5bd6643163ed7ae0b754"],["/2021/01/06/movies/index.html","bc7ae94fb7b837fd1450085a74e25a31"],["/2021/01/07/google2020/index.html","0eb8d2371341e6df2ab1185638cbf857"],["/2021/01/07/lucky/index.html","f8438f10fdfdd2dc701f21a74a98bdda"],["/2021/01/07/spotify/index.html","9a9d0b19ae4b0480df453aaefb9f0ce8"],["/2021/01/07/thunder/index.html","4767b0feabc46b5328a645b8f65f975f"],["/2021/01/08/adguardhome/index.html","955f3a59217d5c10a18c24255bb78680"],["/2021/01/10/IBM/index.html","e010c01c52273168972760286ffda2a0"],["/2021/01/10/potplayer/index.html","1c72e135123cdb26a53c815629fa0d06"],["/2021/01/10/sakuraanime/index.html","954e53a2101e3ba24d6e7565895e6d18"],["/2021/01/10/美剧星球/index.html","5e79a2c459bb5294497cc4a6cf50b0c9"],["/2021/01/12/telegraph/index.html","e69f273d2001520a33c90caf4fde049f"],["/2021/01/14/comics/index.html","fd8ba39ae64ba239fea43247acc76535"],["/2021/01/14/ftp/index.html","f897788155fe0877942d400794148580"],["/2021/01/14/oraclecloud/index.html","ee20ea1d1c2346e2b644c258c9b0edfe"],["/2021/01/14/porkbun/index.html","5d287cbf8690bdc7eb525476769a1e77"],["/2021/01/14/powertoys/index.html","da67ea04fbb71fdb1433074f82bd764f"],["/2021/01/14/taptap/index.html","8d58d3385772083968f99f279516470d"],["/2021/01/14/ubuntuvsftp/index.html","836e317d75f27586ee29e9d3d4ad5c9c"],["/2021/01/14/小说/index.html","586a24f19ad212154dbbf9df4d513242"],["/2021/01/15/freeproxies/index.html","ec46a54dd71bb5659541c62bf89c52ee"],["/2021/01/15/incaseformat/index.html","6dacf5bc8442be3e8a2bdbb273e39289"],["/2021/01/16/euserv/index.html","f02a220822c22aeb877f2c60ef2f1421"],["/2021/01/16/winxray/index.html","d688aae43c8328423c25a367ef2a34c9"],["/2021/01/18/qqreadhistory/index.html","cb180fd8df021840317b716458f9dc0d"],["/2021/01/18/qqrevoke/index.html","33dbadaa93573acd1d018cc2c0e660b3"],["/2021/01/19/freevpn/index.html","4c30f5da560a21e58453a294e218103f"],["/2021/01/20/browsertrack/index.html","d719a1274014d850e845996462434b98"],["/2021/01/20/v2ui/index.html","e021bb68549e58e1191522c680f9f1a8"],["/2021/01/21/failedtoconnect/index.html","fd1889d8c52fc634ae60a820d5153155"],["/2021/01/21/gitcalendar/index.html","b3c80322256f2504d832cac2f6fa9fa8"],["/2021/01/21/markdownformat/index.html","07912947678f27a57c6635ddb5834413"],["/2021/01/21/markdowntable/index.html","566b82e16671f4b6a5b8c8239615f179"],["/2021/01/21/vercel/index.html","3e2b5d1f9a936bf0014abdf6ac8a1c82"],["/2021/01/22/hardware/index.html","2b4d1df0b699d7cfc224a8918101db4e"],["/2021/01/22/muviz/index.html","6ed0e1f3336c52f382294ded47b421e0"],["/2021/01/22/randomapi/index.html","940b6d926e9bc98174434ebfae0c588d"],["/2021/01/22/searchimages/index.html","de6e68aecf9276a5124eeadf76e20f62"],["/2021/01/23/RX文件管理器/index.html","bf855ae888ad490121ad10b284de5c27"],["/2021/01/23/chromeflag/index.html","fc47dff90cd5c702440ff3999ca9bfc1"],["/2021/01/23/qttabbar/index.html","fbaecaacd089e724a9831fc10da1a3d1"],["/2021/01/24/githubspeedup/index.html","c6d63a8616e72876cd4249d501531a59"],["/2021/01/24/jsdelivr/index.html","6598ed0fd83f95c8a028d7c5c3fa3dea"],["/2021/01/25/note/index.html","a95273de4efa698641c65bf35b3dd3a1"],["/2021/01/25/soul/index.html","e5fb31916b9065fbeea2df5fd8116e67"],["/2021/01/26/herokuxray/index.html","7b2208cc2916acc38e0325d9f49f12d3"],["/2021/01/27/proxypool/index.html","f8cd2e53c92544f94ed5869f5c1b38fa"],["/2021/01/27/tracker/index.html","1cc0d848e6dec83d72aeeecdd606d9fe"],["/2021/01/30/pandownphp/index.html","02862809ebb190f71e63a2c3878b6811"],["/2021/01/31/newgroup/index.html","4b05c6082d398c4fc2b4c140714af2f1"],["/2021/02/01/clashlanguage/index.html","02bfc44e19ead903e58dd6a594938ad9"],["/2021/02/01/encrypt/index.html","c695c1ca33e8323fc3d7c54473389c24"],["/2021/02/01/footermotion/index.html","9136dc740c9f4c5e1090b48168ded929"],["/2021/02/01/gitter/index.html","97dcd76a05df371aae4d9d6960269bbe"],["/2021/02/01/pixivtop50/index.html","2d7687667989d973cec5db51ce1cccf5"],["/2021/02/01/scrollbar/index.html","478d3ed0624f38642662c2c9f773b8f1"],["/2021/02/02/clover/index.html","2425154ea1c76b5a03ebb6d24736b34e"],["/2021/02/02/maya/index.html","ba9dcf7782585e0eb022e789dce2231e"],["/2021/02/02/speedcontroller/index.html","6367756076151ff2e56f6775e32bffea"],["/2021/02/02/yesmusicplayer/index.html","b6973d19939933aba5a9bac62a5bc906"],["/2021/02/03/lenovoonelite/index.html","ef9bc0240b4efbf83a0209f0543d919c"],["/2021/02/03/skipads/index.html","698f309a6fc51753d7fbbbe312b33c27"],["/2021/02/04/picseed/index.html","344f291ef325701cea7c89397517180e"],["/2021/02/04/renren/index.html","c4aac124e5b67fcd315b93dfa93a790f"],["/2021/02/04/serverstress/index.html","0b2f9ff643384cad4fac985bf435f547"],["/2021/02/04/wikipediazh/index.html","74069215991d9faaf441c64393b1a6c4"],["/2021/02/05/googlevoice/index.html","6b7a86cdaf9b5969f3afaf920ba9c1ae"],["/2021/02/06/clashconnection/index.html","d21f4dc299bcce37e914043f6756ae69"],["/2021/02/06/gvtransfer/index.html","8983814afbfbd4d69f4663797239d6aa"],["/2021/02/06/todesk/index.html","39f79712d723e5216c62613c152c7025"],["/2021/02/06/vpnblacklist/index.html","53ac8e4f4b614eb8f01c1d5a84f625b3"],["/2021/02/07/mklink/index.html","d6bb88b9c72bd9e122ee91ff44d580f4"],["/2021/02/07/speedtest/index.html","1a70287c2852ca22215def0c3bb85b31"],["/2021/02/07/translate/index.html","e2681b99bf78d81d2f2ce5fe57d54c35"],["/2021/02/08/ewomail/index.html","0b987f87da6340a194dbf8c9dedca26d"],["/2021/02/10/officee5/index.html","56b1a0c2bfa068ac0eb4c7a7dee405ec"],["/2021/02/10/raidrive/index.html","03f4bef3dbeb1ebbb790b3d3cbf9072d"],["/2021/02/13/e5sub/index.html","c3ac9f64e3684bbd58b2e278515b0dc4"],["/2021/02/14/screen/index.html","f1d97cc596306ded1d4b37a4f9bf5c3d"],["/2021/02/15/clashtun/index.html","a844e5c7a6ae35c2bd1ca6b8ec01ec55"],["/2021/02/15/messageboom/index.html","e3d2f495416a6a27d0ba76f7f021d16c"],["/2021/02/15/oneindex/index.html","ea62ac37d70d080df0297bb3d3808b9c"],["/2021/02/16/govsites/index.html","0062e171ec5321f1d85f33506a24503e"],["/2021/02/17/hexototypecho/index.html","b1d1eddda612dab80f1e9c076bec5a02"],["/2021/02/19/fiddler/index.html","633d6e5be7aaa811ed7260193e286061"],["/2021/02/22/potplayerset/index.html","bbb89959ad405b85616f1612bd60ddc8"],["/2021/02/22/studyresource/index.html","e1ce02932efb8a6d0e1e3bb0994b8523"],["/2021/02/22/telegram/index.html","dd16b180fe10be7fd5fd9b3c9e260d07"],["/2021/02/22/videos/index.html","73684ab66a1cf97985fad359110c5634"],["/2021/02/24/mtproxy/index.html","41967b741a5df986c0457c576743a5bc"],["/2021/03/10/catchcat/index.html","c800db899b7507b13ad98e35dbb4d64c"],["/2021/03/10/neteasemusic/index.html","5fa7df4af10a065aed75258ca742f182"],["/2021/03/10/surfboard/index.html","0a28f80bb4dfa111e10cf1978b0d8fd0"],["/2021/03/11/vpnandjc/index.html","b3ab90d4773c317efa00c9a6996dcdb3"],["/2021/03/12/qrcodes/index.html","029ac44d9b36cd8f01fd17fc8b606f4f"],["/2021/03/20/qv2ray/index.html","5dd769b750d7030563aa5e163a66d83b"],["/2021/03/22/freevps/index.html","f3d609bf385dcb3939d74bb8af4ca641"],["/2021/03/24/tgstickers/index.html","acdb81e759268123b9073fc07c8c2d5f"],["/2021/03/25/clashx/index.html","4fcaf32d25ca9cfc2148324817f18552"],["/2021/03/26/bingwallpaper/index.html","020edb4c13568462aee288d93ddb4934"],["/2021/04/03/soutu/index.html","f7da4ef86c1b263953a31e3231ee55f4"],["/2021/04/03/tiyunti/index.html","c80e79d49931752140c70de5c1e12826"],["/2021/04/04/btpanel/index.html","db227c1a38d33f0d0a58eb6ed3750b43"],["/2021/04/06/atlasos/index.html","36481a3abb749b70c6c0a6dff2019244"],["/2021/04/06/cleaner/index.html","0ad87de82c0494dbd776ec9157f01e0c"],["/2021/04/14/rss/index.html","f2f6edeac564591e4e6dc4377dca6dfe"],["/404.html","1cc44b2993dc3dadf9e244476aa81f33"],["/archives/2020/11/index.html","c48b863085750902e00e4d4ecd5ef967"],["/archives/2020/12/index.html","1b8395dfec9745eeba10f04d0af3a077"],["/archives/2020/12/page/2/index.html","2778bfa99e08ab39c768746dc61c630e"],["/archives/2020/12/page/3/index.html","39aad5a4ec6a653797c4a20ac6702032"],["/archives/2020/index.html","d694c9a428cbf5b520e07784ba1325fb"],["/archives/2020/page/2/index.html","4d9b2a344becd6c405076ee193c0a5f9"],["/archives/2020/page/3/index.html","760847ab11ed1e0bcb0c57702655e530"],["/archives/2021/01/index.html","318c752b0bb1a664def139e99ec47d64"],["/archives/2021/01/page/2/index.html","4dc838a75798e61f9def3ca5006a72b4"],["/archives/2021/01/page/3/index.html","37b41b63b59df8c508351d41abdcc08b"],["/archives/2021/01/page/4/index.html","fbabee1057e61a4edc10b69a80c56c48"],["/archives/2021/02/index.html","220f719c369d2f8b92b242ec9d648765"],["/archives/2021/02/page/2/index.html","789f8e732a370763b8c8c8089b9b939a"],["/archives/2021/02/page/3/index.html","785833bd997d65b8956ba8cd9476c9a8"],["/archives/2021/03/index.html","134cc832f4b0ffe15e8c235ab87eca8b"],["/archives/2021/04/index.html","06b9d42c798d0e99cae594326989bc58"],["/archives/2021/index.html","ff022dd276a36d6af024c041543a65b5"],["/archives/2021/page/2/index.html","b8d7c7e0062cc65d411e08a5fa11d4f6"],["/archives/2021/page/3/index.html","64f802aa8f23f31effead05018fcc6ba"],["/archives/2021/page/4/index.html","8c43426a9e439a826701888b98cb8312"],["/archives/2021/page/5/index.html","d119a3a8374272b26066c8debc069e60"],["/archives/2021/page/6/index.html","a13370968c8f14ecad6c70f8b04fcca6"],["/archives/2021/page/7/index.html","d7877699ec373b8c901e4109f35c7bf9"],["/archives/2021/page/8/index.html","1550155e870801c0a162349f9e7aee89"],["/archives/index.html","8e7dfeaf8443db0f51c2131273c63fc8"],["/archives/page/10/index.html","6b95616dac138755d2387cd398f71ec4"],["/archives/page/11/index.html","e7506c3517adea2cbb991ebe03eb23d8"],["/archives/page/2/index.html","ae012aaf89c76b370277c8f55780a29a"],["/archives/page/3/index.html","665f69d64c565753eb0b2435b0767c79"],["/archives/page/4/index.html","c174d289435bc68f1b47fa5d1ce19937"],["/archives/page/5/index.html","9e26467bd5ee60689bbb65f573b7d522"],["/archives/page/6/index.html","02cfae2425c45283ffd661507a9fef5a"],["/archives/page/7/index.html","33316290d4e4c61b3104039283434123"],["/archives/page/8/index.html","0251498cf50fd857936329e8cbc53eca"],["/archives/page/9/index.html","f6443b07f3cecec7c550b4dc9324a796"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/atom.xml","3382e1d7e1f74f1cb6966bf90156e29a"],["/catchcateasy/index.html","47bf6adff22ce1973987d063b4796376"],["/catchcathard/index.html","649e8c8847d4fa9f2993b3705cc891d7"],["/catchcathell/index.html","3f21b2fc7901eef9d1ba9448bb392ba9"],["/catchcatimpossible/index.html","ecbecde8e01ca62b31c423b7a8de7318"],["/catchcatmid/index.html","228654fec2a51492f813e97256f6bd4c"],["/catchcatmid/js/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/catchcatmid/js/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/catchcatone/index.html","d3c8e81ca407958c499b307928f0a18b"],["/categories/VPS/index.html","6cbe63f154086bdd09298261a6ea5897"],["/categories/index.html","51e70a0a4870f08cf1b54fe483ef8842"],["/categories/下载/index.html","c4efbd8e6578f74b14c2d80bfa1bce08"],["/categories/安全/index.html","07ea7f0f7129bcc4eba1c9abc99dad32"],["/categories/建站/index.html","7722570b51db386b6581475d8b26a75b"],["/categories/机场测评/index.html","92d724331acb487b55382d5f095e8ea2"],["/categories/杂/index.html","56ec1786bae177f32b3b867fe004eff4"],["/categories/杂/page/2/index.html","5d829b21540caecafed4120f53a19e70"],["/categories/测评/index.html","7bab2abcd94f69bdd8b1ac3fc89f499d"],["/categories/科学上网/index.html","01e71ef57eb5bd092061bd7a1f38446e"],["/categories/科学上网/page/2/index.html","ced6f944054560ae10826a4c6efccb8d"],["/categories/编程/index.html","aeea818ae28b7a8227e2d4d6c45a220d"],["/categories/网站/index.html","0f3025cee62dc9ce458a3482365a2b3e"],["/categories/网站/page/2/index.html","8580dc0a51bf7acda3da5f9b7c7f0a7d"],["/categories/软件/index.html","4adb8e4ea541fb16ea57deb24f8b0149"],["/categories/软件/page/2/index.html","09745da0682777dacb72c32ee74cddd0"],["/categories/软件/page/3/index.html","75a4f240f1bc88d39dd76809d3f7ed75"],["/categories/软件/page/4/index.html","f11a84b87992fab4220835cf21ccc2b1"],["/css/footermotion.css","f087400f2d93c56c17787e073a488e06"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","7105d5f960c377c463bd76fedd7e305f"],["/css/scrollbar.css","8c8d3962ab3d01760f453195caa7cb4b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pics/33063918.gif","8ee3086b647aeca08c64b321d024f81b"],["/img/siteicon/README.html","f4dd8132d30c7ad5c32c050a042335a1"],["/img/siteicon/android-chrome-144x144.png","4d80b1136ad950286a9e5506fa026459"],["/img/siteicon/android-chrome-192x192.png","c6aff552230c3034173a29aecd1102bb"],["/img/siteicon/android-chrome-256x256.png","d96c9f7e274c096559520f5c308fd197"],["/img/siteicon/android-chrome-36x36.png","20b449d4364c0fea07fe6e515e90cf5c"],["/img/siteicon/android-chrome-384x384.png","9d102a14165067f83e7a0fd131a06177"],["/img/siteicon/android-chrome-48x48.png","165da21c1aa3478b734eb6938cf798c5"],["/img/siteicon/android-chrome-512x512.png","cd78d7ce9a7ad997dc3edf26daaf1cbb"],["/img/siteicon/android-chrome-72x72.png","8a30a44fb0fd796b4a2683e863cd1e00"],["/img/siteicon/android-chrome-96x96.png","ac3be9c3a69d4501d97e5bf7f3d1e845"],["/img/siteicon/apple-touch-icon.png","f0f21fdaa5ffd9de7c6cbc04b388bb89"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","ee14c3abbcaa86e388a8b25db0c9ea36"],["/img/siteicon/favicon-32x32.png","06606c284286e7cddd0c2d81713a39b7"],["/img/siteicon/mstile-150x150.png","f786c21e0accc5873b231ee7af28ed0c"],["/img/siteicon/safari-pinned-tab.svg","13d548ca1361b9db41c1c5a32a0a509a"],["/index.html","a515645083c8042f23c162dff1e320c6"],["/ios/index.html","58694faa2de0d8551ef442001797abce"],["/js/chatroom.js","e80fb0ed6c67f56cd057a1e5e79442ec"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/smoothscrolling.js","526285322f007f91bac641a0cd83d921"],["/js/swiper_init.js","cfab3b9f4d8e73f59baaa91989189266"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","1f8ee6a0bd5232eff05b666f1c639277"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","b400ded0b04ec8911dd2bfe449ca2254"],["/live2d-widget/demo/demo.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d-widget/demo/login.html","dc76659abf07c1f923c01a5d677591fa"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","c0b987bdddfa732f8505a8d139bdb69b"],["/page/10/index.html","91dc879d327a34a9e67fb8444169d7ad"],["/page/11/index.html","8d707d3a120f0e832f20383e1fb49b63"],["/page/2/index.html","09369d2575c9572e6154e93a117abee4"],["/page/3/index.html","c3fc5978f81a129204278b7d6a04d1d2"],["/page/4/index.html","283ad6fc271d83784d43874515582bf0"],["/page/5/index.html","572d2d6462ad4f7951ec4d8f95557ae3"],["/page/6/index.html","4b40ac9c309859fff23f41ef8de43b14"],["/page/7/index.html","6a3803c151f52b412e4d00b0a4e8ba80"],["/page/8/index.html","7db97a7acfbbe1bfc1407eb12b62923c"],["/page/9/index.html","1c6f3df713c8d6974be5374160dc4cfa"],["/payment/index.html","7f32f7032531cbfed86ed9533e2d2556"],["/privacy-policy/index.html","f205b280309f6deb5ce3d2a3d5f539ae"],["/search.xml","ddae06ce44adf2748bea2299963aa46f"],["/sitemap.xml","7c28a16ab1d941cf453caab48a47ff2f"],["/sw-register.js","23de95e3b3b626cc848245e9294fe4bb"],["/tags/5t/index.html","936801809a6c631e1ca17528f2419b13"],["/tags/Bing/index.html","f6fc65d736838a6db4f295b02fa5f919"],["/tags/Clash/index.html","d46ce962d4f9bf1bf58ea8f2d9e042d4"],["/tags/Clover/index.html","3f1aded9e737660ff7805892ae54b115"],["/tags/E5/index.html","51b483e53eeeeda81cacd400e3840053"],["/tags/FTP/index.html","30cbb3c642092fa6966b7d599c39300d"],["/tags/GitHub/index.html","054765739f39273a1e08be678bd1288c"],["/tags/Heroku/index.html","c31f3ab9b7ef89728b487716ef1ea776"],["/tags/Hexo/index.html","6e759b0e14156375252f7f132eed4a4f"],["/tags/Lenovo/index.html","620a04430a2199e533c4771c57f681b6"],["/tags/Oneindex/index.html","66fcb206d83ba87537319b60df21d5f5"],["/tags/QQ/index.html","bc1b25b36f7a61096eef7fd13c1daaf6"],["/tags/QTTabbar/index.html","b8b17b68252934441c7ba0dd38a00ee1"],["/tags/RSS/index.html","38787d950226aed7e4db78c94701945f"],["/tags/RX文件管理器/index.html","b7defd2e8aabd045feca16e732b023a7"],["/tags/Todesk/index.html","c406b2a06160cce2c4de309088fc7d99"],["/tags/Vercel/index.html","8d72650b04781bf8b5778772bfbe348c"],["/tags/ads/index.html","5119c9831f8927d2e0d2d79b9a3b1c5e"],["/tags/api/index.html","33d6aa9994cb2a6358eb6c694614c7a4"],["/tags/app/index.html","b2ab5b29bbdd88737cd9523ae8631fb9"],["/tags/atlas-os/index.html","cabf1b9e008492f5536967b270f20ca5"],["/tags/blacklist/index.html","679706542d3f82da0ff1be9e9e3c5082"],["/tags/butterfly/index.html","6eb02a6d1550d47b3850a9447224ef09"],["/tags/chrome/index.html","6040877e5d233850a9990f46944e8a1a"],["/tags/clashx/index.html","d9551334c49cfea9e858e75fbd0be1e7"],["/tags/cloudflare/index.html","384ebc222a91acae55877f50cdb21bdd"],["/tags/cmd/index.html","fed7bfe10d03bd839a0c2cbc42912569"],["/tags/c盘/index.html","d6a1bdc96de1d9e3987fd79df2491ee1"],["/tags/email/index.html","350a0f4514b454530a2d11dd8f0990d4"],["/tags/ewomail/index.html","93f9b884f757a5c6c743a924017dbdda"],["/tags/fiddler/index.html","da06930adf8536ed5466b3c0d325cd6b"],["/tags/flags/index.html","75f7a4b55d63d1e2e665c6b7f08c83d7"],["/tags/footer，页脚/index.html","085bb3d1f18a1ab1652cbe438f7f3834"],["/tags/galgame/index.html","1216493d284f447d2d82bf69bf1b9dcb"],["/tags/git/index.html","2920b210f7a0540d48543bb7cf24d2a0"],["/tags/gitcalendar/index.html","bff1b3167dfa2bb24f3f14a003793dc2"],["/tags/google-voice/index.html","913f45d492beecf5d61cdb06023ea425"],["/tags/gv/index.html","f615e746dbdf61761ce82b5b4bbcce7b"],["/tags/html/index.html","3bf195079876862af17352bbcedf2100"],["/tags/index-1.html","0eb0b18eaec3978be1dd7901b13c95a3"],["/tags/index.html","44dc9cf7c7306689f138ef8f61dd464c"],["/tags/js/index.html","04e53e1bddb987c4f1cebc486a79f217"],["/tags/jsdelivr/index.html","f8cd4983f70284cd3dda85bb543ad8a3"],["/tags/linux/index.html","0e41a1d40327b33a719411763b41d03a"],["/tags/macos/index.html","51c679e4efadf4708d2c35f9b5a4959f"],["/tags/madVR/index.html","ab07ab49b67392cdd05edcefdde7b52e"],["/tags/markdown/index.html","698c7c4dda1edb67808e42cbb02e6f0d"],["/tags/maya/index.html","6086e10ea723c1a060bc81fa8fd11cb0"],["/tags/mklink/index.html","7461176203fe4df70ab4524ffbda346e"],["/tags/office-e5/index.html","2e71a9dc5166f89a3d1155597c491fac"],["/tags/onedrive/index.html","b0fdca346e6f164ec89a5966728f0309"],["/tags/picGO/index.html","30a1e2e636619716e135fc64a1a488a9"],["/tags/pixiv/index.html","e0e304a30a6c3369e44463ebfdb3a981"],["/tags/potplayer/index.html","5d1e235941a6c68b08284413d513aa3a"],["/tags/proxypool/index.html","478d7fc6569fb4920e0580abb571d789"],["/tags/qbitorrent/index.html","18126386934c575a82009d79c9d2f556"],["/tags/raidrive/index.html","e2605584014567d0a9d7561cade7d6e1"],["/tags/screen/index.html","98069ba869671d95e85950888b95f7cf"],["/tags/speedtest/index.html","9b9228ed25a3ef32c5527aad5163466b"],["/tags/ss/index.html","d24e2dcc25775a570357667ebd92fb00"],["/tags/ssr/index.html","a0b3c4c172bfa32bd0d9dd7df7e702fe"],["/tags/stickers/index.html","d6f802da4c0a1adbac617856cb3b40e1"],["/tags/surfboard/index.html","00d3560f56718845da1fb771250464e8"],["/tags/tap/index.html","5f42ed86b672c909176d129f10b4d701"],["/tags/telegram/index.html","01a9c5d972e4389862639a3f60a4f999"],["/tags/telegram代理/index.html","6101e5bacb2aff8a4048f1d37eab505d"],["/tags/tg/index.html","f7f6505f595a3112a4e729ecb7c0dbc8"],["/tags/tg代理/index.html","937505860ff64f6488a5a4cff37d7a2d"],["/tags/top50/index.html","ad7c59ba18fabd6013ce53b268646442"],["/tags/tracker/index.html","2b62321d9e896057a27a13473fd7363a"],["/tags/translate/index.html","b021c0744cf1911bf5c3940661cb7d04"],["/tags/translater/index.html","c5582844b9b3a3aaa1559921d0578305"],["/tags/tun/index.html","a1e7b6d30bb8beab8929dc498ea24ded"],["/tags/typecho/index.html","af8f756ef1c8c0267ff401f1c299ca90"],["/tags/v2ray/index.html","929ff9795480916a36e73e7f851e5dc5"],["/tags/vpn/index.html","8badbdc3a617c4bd40d42eb0d1ea04ea"],["/tags/vps/index.html","51e9a1b3a4cfe302e5a5234270133e03"],["/tags/wallpaper/index.html","3d7f907e49c5649009497424cd252e44"],["/tags/windows/index.html","33f5a818f876cd644ad18ac362bc9726"],["/tags/windows端/index.html","f6706c65e847cdb77e81c1c4f2355b5a"],["/tags/xray/index.html","7e4d41e8abb5426ad9cc789ffe483d42"],["/tags/yandex/index.html","7753331c1937fb8815665add8881e4ff"],["/tags/下载/index.html","291a48645d1ae1314143f4b1dc75f046"],["/tags/不限速/index.html","17a85e994f46e3d494e6c63b203c982c"],["/tags/个人网盘/index.html","2c153aaf7bdd5320a577d17201606d2f"],["/tags/主题/index.html","e0cb0d8f00369276ef56eb9fdbe3ff66"],["/tags/二维码/index.html","a38d45ff52d68e73c113744691ec150b"],["/tags/云便签/index.html","79fe5234d31aff0228af2ed1579a2c77"],["/tags/云盘/index.html","b075383dbe02d6c0d3e587e74491fe2e"],["/tags/人人/index.html","29da9d53343cc611a7740f8aa43a4b7b"],["/tags/代理/index.html","405e18f62240cffcb77722bd7c179745"],["/tags/代码/index.html","b09e5413dce6f00407b7791a1e8760b2"],["/tags/优选IP/index.html","025f260acab9a50543d3a9d58c8b36a4"],["/tags/便签/index.html","3b560c25d8d6be92e9d652ca9d070af2"],["/tags/保号/index.html","8d73213cf6f9cd7f9e6ac9fc1d884314"],["/tags/免费/index.html","4dcfcab3f1d2ac48de38194eb13b3ce5"],["/tags/免费节点/index.html","4b54441b8d2e56c83416be7ef63c58f7"],["/tags/冷门节点/index.html","356f4eb2cc885fb2ade0cf1cd2db6a35"],["/tags/删库塔/index.html","e3e82bfa1681f80e5aa4111c78245487"],["/tags/加密/index.html","82af55ff65894d865bab62dc72114d64"],["/tags/动画/index.html","4c33b6ef34c5e957a2f1f5b2549dd24f"],["/tags/博客/index.html","e33860c913ce2566938a2f25927c5425"],["/tags/卸载/index.html","42937d6ef864314b35eeca6a0e18996b"],["/tags/历史记录/index.html","9388b48690ac998e377170e5297857fd"],["/tags/压力/index.html","a7fcd6f19047eabccc6ec97b7d8cd72d"],["/tags/压缩包/index.html","7d50f4fa47420e89dce52a138211527e"],["/tags/反代/index.html","f05dbbbe9ba29441582724f87374c024"],["/tags/可视化/index.html","a58b1c218dc36a38bdf5dc5fa1fa3ee4"],["/tags/命令/index.html","6e4e71cf0307e048555d5dc5c22298fc"],["/tags/国家/index.html","eea2ed8037154406cd72943a85a0a4f5"],["/tags/图床/index.html","6282e5eeddcef3b63f155292b82b0128"],["/tags/图片/index.html","ac461dd8737f0f728c3a3d419c313568"],["/tags/域名/index.html","7493774584a5ffc64c99328b9f87b59f"],["/tags/壁纸/index.html","0445b3e2bd6a0492612f100d4741204d"],["/tags/多标签/index.html","f2bd295ac40c61461e82ab164879a811"],["/tags/奈飞/index.html","71e73d75ebac85b7c043600be804f564"],["/tags/存储/index.html","904792611fe5a3276f976176f98dea95"],["/tags/学习/index.html","86abf41d3993cb1c6b8bc5c7678ef674"],["/tags/安全/index.html","e4d569d0d7bbdf223b3b3adcf61a79a7"],["/tags/安卓/index.html","cff3c3dced39b6d0e34c9837151c631c"],["/tags/宝塔/index.html","e9e1f1821d9e39b44b07062bc7c793ec"],["/tags/小游戏/index.html","73e383112a4a45b5e7fb7dcbce63a056"],["/tags/广告/index.html","9997dbfef7ee0826cc46528fdc5b7081"],["/tags/建站/index.html","a67fa80d3a752bc34016f95fd9e7faec"],["/tags/影视/index.html","0e635e40cef40c4d55aa35c769c27e1d"],["/tags/微信/index.html","19354c0fb492486ea8d22838503ead03"],["/tags/快速启动/index.html","f88b91692fb855700df395c300762c1e"],["/tags/手机/index.html","406592ab08204979ea75a2d44a3899fc"],["/tags/托管/index.html","4fd65e824a788b5cd7f8a23594486a66"],["/tags/抓包/index.html","bdc260a86b873560fa2554d9a3bfe175"],["/tags/抓取/index.html","baeabbf51827cbbd23abd9b1e5ca5ef7"],["/tags/投屏/index.html","5a8c658eeb5879809248bda2a6dcb667"],["/tags/拓展功能/index.html","8341aa7373fb5621e46d551772013bad"],["/tags/挂载/index.html","cd69c9dcd992a64705473ebbb87da382"],["/tags/指纹/index.html","80a989ea03aec3035b292fe53918e868"],["/tags/接口/index.html","a0dd1954d6cdd718bfb3136009e995ea"],["/tags/提取图片/index.html","94222e341f8a57df38516ceb46d9731e"],["/tags/插件/index.html","997e9a2d225d28c168dbcd6f55ca73ca"],["/tags/搜图/index.html","1ebb545be96dd9b36cdaf0b09eaa06cf"],["/tags/搭建/index.html","d6625d2b389a64ceb674db9f73c433c3"],["/tags/撤回/index.html","fb172fa1709d792ff21df3635d302263"],["/tags/播放器/index.html","10b2e3ba1674777eb54e0aebd949d07c"],["/tags/支付宝/index.html","7a3edb1486c96d171b3b0991c019df1c"],["/tags/政府网站/index.html","bc08080bb9875c26da2e5a67cfc2882a"],["/tags/效率/index.html","c1a8d564619a11ba1312cfb04133b1d3"],["/tags/日历/index.html","072b2ddb9df0336440d7c983373e697f"],["/tags/服务器/index.html","cae2c43f766f15b20a8ce0cf89a626f0"],["/tags/机场/index.html","de144c468da13dc1c63f280a57cce9f6"],["/tags/查重/index.html","e5408fe8b58c03fc0f97cd6fedcaf1f4"],["/tags/桌面/index.html","859352de7b37dbf99acdc210bc3b73aa"],["/tags/梯子/index.html","31d64b0afec26f564fe64b60870b7bc0"],["/tags/检测工具/index.html","5e08c868e7dc947f040542fe11bf3de7"],["/tags/汉化/index.html","62e5034d01708dbae5acd0736141d98a"],["/tags/测压/index.html","030401a3a086d9c1350f5179a2640f2a"],["/tags/测评/index.html","e6d41407effa887cad11cd3c897ea3ef"],["/tags/测速/index.html","7f2649840e00f64478bc54a9141e5b59"],["/tags/浏览器/index.html","069bef4d55a5780cbda650d494854c34"],["/tags/清理/index.html","e5c8a7f1a1b0d3ad5886d1fa3851a1ec"],["/tags/滚动条/index.html","54d00707676a69aa62487efeaf74e9ae"],["/tags/灰色歌曲/index.html","70d41910056f8632ef4e1ad7b0d659ef"],["/tags/电影/index.html","a2bc18779a0206ec441057260d34b5a2"],["/tags/电脑/index.html","24fd6630d659235f3aa8daa20c4fde37"],["/tags/电视剧/index.html","1930e1c3e6ad66ff0d7c8355e706d3e4"],["/tags/白嫖/index.html","4ac8b1d4153002ba3e3fffe1afeedfc0"],["/tags/百度/index.html","c9b9cc28297bf1c9aebfe1589319faad"],["/tags/百度云盘/index.html","37320618062c23ca7f9f2e4c41f6a207"],["/tags/百科/index.html","2617efed6df4b16f1e2e8d027e173d11"],["/tags/短信/index.html","7b2577f42d0332503f837770b09beecc"],["/tags/硬件/index.html","0b8b76716c9433546eed4d40c13ac49b"],["/tags/科学上网/index.html","3385ec4df16b45c3e955b9a5356034e0"],["/tags/空间/index.html","a3f60365529b091879ffb34dfa41ad6e"],["/tags/笔记/index.html","c43d6afa15daca949a5e169970f84696"],["/tags/简洁/index.html","d607cafd4e7ebb702088764c382920c8"],["/tags/简约/index.html","a9901bf2e87dbce5b3177fe17c74364d"],["/tags/维基/index.html","638d4ce208b95504cf11a40c95bd7065"],["/tags/网易云/index.html","d5fb9a319219cac2f6f40dfdc900e0bd"],["/tags/网盘/index.html","7bab60593c2dcba49bf4425a1117ce27"],["/tags/网站/index.html","bc19ab6cc7384446a8192701c91666e1"],["/tags/网络/index.html","c6344374a57155fb51d26c47d6d88058"],["/tags/美化/index.html","c1fe33aaa0f943090b0a1cb11b8134f3"],["/tags/翻墙/index.html","e9c56fa997a354061b4c9e8ae63c35a6"],["/tags/翻译/index.html","8d9464aabc853fc80923d3ee569588e4"],["/tags/翻译器/index.html","063863ea4d9e7580fda0ccf1758ef63c"],["/tags/聊天/index.html","3d8387fd15f10dcd69d42e17e7ff5222"],["/tags/聊天室/index.html","5f75e26993de090f318c9491e82ef604"],["/tags/联想/index.html","fd4ea6e1249f57ac76f2c501e6dc1b6e"],["/tags/节点/index.html","986fc170d9f76ad25c5943152c79603e"],["/tags/虚拟手机号/index.html","599af2bce9dda435483cc225095108d4"],["/tags/补丁/index.html","c4e819aa967d39ef154ff4675e7f71df"],["/tags/表情包/index.html","d204d234d0b717514edbdf74b2e0754e"],["/tags/视频/index.html","f792f99a64ebc0b98b558303c5136a63"],["/tags/解析/index.html","128e5b97175a64830fe89250f671f14b"],["/tags/订阅链接/index.html","0fc09cf17269fd4ee40e03b4421270fe"],["/tags/记录/index.html","e10015a2e55823fee3ced72a661f7a20"],["/tags/识图/index.html","78453264270425609a86e032a73adcd1"],["/tags/语言/index.html","58f354994aa39c3b9b7028b29dc01501"],["/tags/资源/index.html","004f13c90330cbec5878dbe2ccb567cc"],["/tags/资源管理器/index.html","abd24a3157462172f54bcf25be9b8204"],["/tags/转移/index.html","297a25db6722762f5bb9c49f5452b4f6"],["/tags/软件/index.html","21d5c755c1571f3df90ae5f83debbc53"],["/tags/轰炸/index.html","578d848843537a048796dba93ce99a7a"],["/tags/迁移/index.html","b0db08c777afe954a49dd5cd4b952b4c"],["/tags/远程控制/index.html","e7f0130c7790dc57c37d866134c68f16"],["/tags/连接/index.html","eb1083d78e0cc27f48ec5996cb2df83f"],["/tags/追踪/index.html","a2e3b1971d71fe063e9a1e1bfd80754f"],["/tags/速度/index.html","9704987afe5c613599a2f2fc4b03bbe9"],["/tags/邮箱/index.html","185cb468b6bacd9ddb9740805a6e7e4b"],["/tags/酷炫/index.html","a70e22f2cf1ba6e841fab3ab1324b047"],["/tags/钓鱼/index.html","5c53d16a0da4d0f4d9b457cd6d19dd44"],["/tags/镜像/index.html","de77d82a04d1a3ad967fcf2b716b4d03"],["/tags/阅读器/index.html","b67c4c8abe6d172d36f401f892f28aad"],["/tags/随机/index.html","0b6ea68ea81fe53937ede8585364f250"],["/tags/隐藏/index.html","d32b24cfb79c1e6ed6a683b9abb31760"],["/tags/面板/index.html","a89a2a6eba7d169e2669b9c581504e4d"],["/tags/音乐/index.html","d13ed6c3c581db61d68dd0dae5253274"],["/tags/高颜值/index.html","ccfb072e153e7ca910c430528383f84b"],["/tags/魔改/index.html","e13edfd3278e63ca0a15896afec8177a"],["/tags/黑名单/index.html","b5fbf9fe36ed201fd29a25079950c666"],["/urls/index.html","5eb88332103e4480dc87ab06378729f4"],["/vps/index.html","911ed626e79002287f993a0cea3fa4b8"],["/支持/index.html","e1ed403535e76bfac83b595bb5536f3f"]];
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
