'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d5ea2abb9d25253bbe35b7d0429371b6",
"version.json": "f124181e58b12572810925130e6735b8",
"index.html": "b7ff255708c94f4983bef87a00af86c2",
"/": "b7ff255708c94f4983bef87a00af86c2",
"main.dart.js": "0c619ce95864efd306962bc6f1bf2e64",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "b331150a096aa6e755f32dad9aa43a85",
"icons/Icon-192.png": "b331150a096aa6e755f32dad9aa43a85",
"icons/Icon-maskable-192.png": "b331150a096aa6e755f32dad9aa43a85",
"icons/Icon-maskable-512.png": "550acbbe4f1f34db1ef6f35dd2f7bd1c",
"icons/Icon-512.png": "550acbbe4f1f34db1ef6f35dd2f7bd1c",
"manifest.json": "249a810143286307a09ecfe523802236",
".git/config": "91e43a7a86e3e82ae02de8e341edd721",
".git/objects/92/b590881fff739da9c96760b7c650ec12b0b885": "831ffbd6884d458a1cddf5f3f7aa3c3d",
".git/objects/0c/905a038ae420ed6d86d171b701c2e1ba7fc736": "8e86d94db90effd76849409559873f29",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/4dde5096b88bc68a4bf8afea4cb8c296b55989": "6d860da88a49a36006a6b288f4a3787f",
".git/objects/04/855412d56be63096182e3c5486261bc5d000e9": "22a0eb8336070952870efca8e2784d59",
".git/objects/93/d0703796296c122e78f0f4caf30a09d733730f": "0aeb6b1c99a950d30f9c6c97b4a3ee75",
".git/objects/93/a604773f993cf901bde0ef78089b64297e3634": "abf86432d6df8761e9275635f09b3a2e",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/0e/e25faec54cfcba0e381f159ca79779f180d980": "6643b3d5c221ca55375e5ac1463fc027",
".git/objects/60/256a8a96075245960c67a73243e68f357de359": "bacc988dcf12bbcc2eba9cc0faead55c",
".git/objects/34/d9b8125ca04322b8f53afaf28e6202bc9fd935": "30fc4570b4cba5b3783432f65cd5c23b",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5f/7f30d4d438ad751c80b1777394fbfa9a226878": "3cd2ca5e1c65cc3683112926749fd5c0",
".git/objects/05/a6537841cd87494363ff4534e3c80b573dc982": "bdb51e2cd5c4581b6d138de85f28e2f0",
".git/objects/9c/6dbe3b40924be27acf8acf3ecb418a35b39342": "c0419f207e42b666949aa13fdaa08eae",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/d0/94c6f7cae8e88821474252ee25c9337d232182": "055832ca55516b35a0b831538e3885c8",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/df/4ffc5ace5561e2e9aaf8381e53e337b1258da3": "00ebfdd67e96c8326e4c0802ec968271",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/b4/faef0df29166740a3dc5ad057fc2bf3c239f96": "5bc12df55d7720e410e5a7eebd9024bb",
".git/objects/d6/30b65341dc4b0450a526e04e11ad4d30df295b": "81c6cc08b86d8acdc833b222929e98ff",
".git/objects/f4/49ae3165ee3b4fc5717ffb4e32e323942a583a": "a7a31eef9698b6e118ca0865b63d15e9",
".git/objects/f4/f06505ca9dec9a7c41549baf6b833ee729b492": "3f77b5ed97d0874ed792178511a6cc89",
".git/objects/c7/159433e8fdd5fcbc92bec998b7aa95dffd0514": "17a78075633d74c4a176bcf10c7846a4",
".git/objects/c0/1bc0535c731ec16f026c6018b92acf19f3db7d": "17c161f6594ece819bef971e7e390862",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c9e97c91d0ca32002d6eba53cf1981031047bb": "05d147ca28fabf58f251c18d62f64056",
".git/objects/f5/f69924285187ab74474c1c0f8e0517bcfb36de": "23685194c19ebb5e314ecf88eabada3e",
".git/objects/e3/ff72b5b144df470ccb8a5d9a386240719c681c": "52cff39e78b2a095c159ab7b6cfe88ac",
".git/objects/e3/1d81c5864303b9e18929ca21a5bc41e64f39b2": "bb23507a304b81176b85df2decb1d6ef",
".git/objects/e3/fd7f3ecfd429ca71c36b84c15114090226df27": "8ed053f95833b9037c04d85d20fe80dc",
".git/objects/c8/52c8b3b6481e8b75986e8b0a5ec24a907134ef": "4c971401e0a7163dfbb93c64c77125f8",
".git/objects/fb/4ccd64cbb6a889249a2ae4309ead4bb7d8ec32": "20d54accfff8bb1508e9b6cc2a517ec6",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/59beb5cb8be6e8a01e6942372eb5b4ea7965e1": "04e1dc34e6615d6db05821a8beffc43b",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/505797d898a7d50533d11279a278d26f47eca2": "fe9462aa9c1655642ad58d57366aa120",
".git/objects/89/8de1505cbfebe69e8d689a1e65e59d9926a317": "0f2d4cde99589a377fdd0991b67244fa",
".git/objects/89/cab142ad4d13704fdf06a743111054a00d6329": "6596ef48a48ba3acb85730e0eaf83cac",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/87/1a4c29fa9e23a90e02b12b252d56ebfec2b1c3": "7bb137adaabcef5b53605f6b4f28bd9a",
".git/objects/87/4c95949d8f564f2e2423042af2fc662ea4a05c": "182a895f27d69994c93847f3cf9fdbde",
".git/objects/17/0e0890776e701980763c561788452e2968b686": "96950a12c02fef3b2d00a0adb59dfc45",
".git/objects/8f/deb14c5f3917f13eba0e1168f60c78c4504469": "caa8435d735f80ce0f4b7b9a58a0601b",
".git/objects/10/10743d84b734c838b5853a38048a1303f3886f": "aba9df73b7921c6bff4f82ad0e62f272",
".git/objects/19/30151f276c62e51f4411a46894a1ffc4b871a6": "8dcc1187a08ca35939a73977526fbdfe",
".git/objects/4c/2313b21962b249aed2939bd403bd7902818a81": "e098ad564b4b30494a34e2b839947f10",
".git/objects/26/c809941dba1333208606b818a85305b3d800c7": "df6b3afd8a29a654362b0ef893e63e93",
".git/objects/81/b00c2e9abea9a012dd7356813735c20bade097": "8839e4f897bd48e900e78d70aa4e3c90",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/43/bb347235bc58155012a83a49d940d20a9753e3": "9b39f79ed98db580ec48082b6ac7c41c",
".git/objects/9f/168779f592896fcb4a0e2b8fecb258e67ee7d6": "7a1dce3b77787cf8ea779db8a570d5f5",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/38/31a8b6cb19d877b5f093e92fbb310bd8395c41": "fe838f361097dd6e92a28987cd0156c3",
".git/objects/3a/e6292aff660b56f3bea2294d47fd9305795bff": "8be29400cfc6799ad5e88fb291a37eec",
".git/objects/53/a2e17b5a47e2186f1990ac1864943998e1526a": "13feef738675fef2eee7bb04b8a064c7",
".git/objects/3f/65f00a4fb5c1c984476d5f9df675112aa8359b": "f6a1e314e0ca22306532762399ba0681",
".git/objects/3f/ada9992b496f623cb28e2043fb6ebd9381f8ba": "fabffd241b7cac2cacdde4dd3c41536b",
".git/objects/37/f314f2914c0bcc02a980b3b2fc130c94e4d916": "63271cd9b8a6f98aa5d489677fd17642",
".git/objects/37/d8713a0d55d57cde5ac4385cd310ac13311ddb": "3febb76a94b31fb4110a93c115dbf938",
".git/objects/6d/183d3c1b7e0d028dc224d452903a1b0727760e": "de2f1a78eb8f9311d11045eccf137e2e",
".git/objects/06/621bfbdadbd5f9772c68d1c1eb34f0310ad921": "21a5c8554a835515d7cd6f35960aaab6",
".git/objects/39/2a26f7e041d9d09c7c1aa54ec4e4ab2dafd347": "ffe7af38dd1dc4914774cbda3f1078d4",
".git/objects/39/9e4e876a6d2982f1179d15b73e551f9b8af624": "86d61cae510afbf29b393c01889e03bc",
".git/objects/55/b79e703bce633fe568437e402e725161a178e7": "d61c1afc8a947c95673e65c372545d56",
".git/objects/97/2a94b7c056ceaf938600547ae76cc6297a63d2": "5fa4f517ee4d7db01a83fda742798319",
".git/objects/63/c943d565d76b387020a8760865ac91974938a7": "ce013ccafbf8b6598fd69bc3c19dfd3c",
".git/objects/0f/6ae96d468d22469c7635d1e4af9583f9545972": "859fa1ac2cb46d711aedc1ca1c8622d1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/f1cd4011dcdf2c152fbffdd7f613fee120a761": "61d848f525affc45f3acda3d7b0e7c35",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b8/61a2daac94ebdbcb22e6dd638ad6806611d7d6": "e364b7427d5f8eb0236a7b18913927b2",
".git/objects/b6/36ad5892aea29fce11535b637266efe0c1996e": "fd98615a65d292ddc92a2b5bc95b814c",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/db/e31348da8edeac0c140a9ea17daac04d958848": "1a9db12a62a511c6eb7ab3ff4fe41ae1",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/b0/a16db408b6f91c96f7b25b8ceedcd0a9d0f830": "cba3e812f4567b5fab3d8e8266cad056",
".git/objects/a6/aadde457f0083738941a0c3f61bf447084d6f8": "ddd60374ac48f7219b378a98b887550c",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/ef/ecf0211a4284f1b484c4094cc710cf369489f5": "a5c6c89b3f2e18241889c219e966dad6",
".git/objects/ea/d1e542455e7ddc6a76645b09feaef4e706b3d4": "e002333135ad8cbd44a29802442d2957",
".git/objects/ea/d4c28f090d0d36431e6ceac25e86ee33e915ad": "f74626488f314f0b1eda6c9119ea4aba",
".git/objects/e1/c5ff2b0c8c8ae898dbb22e05d8c73cbbae8ddf": "18c68dce449a618fd3b5332b7e77ce24",
".git/objects/f0/d09631b2740c74b49d98d86b140ac4f2850725": "741e74b7190f31573c94252f02dd2eb8",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c2/1b5067c3dffc71a8050b980e30d3453a3bc8e2": "66baf826e0a40cecde9143c372c58049",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/cb/0d0486309d88db3456a5ffcdda9aa5268187bb": "ccf17983a4c8c752868a3fcc6e1ff19c",
".git/objects/ce/a9906cd5298876e0f6f3d5a8783299e42ed457": "526268a36d5b3ef6732dda2fd85b32fc",
".git/objects/ce/f71279d31c654794b7f9e02d1b977ee79e066b": "9236d75b0b5d8b2a97e972a8e028a2d1",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/2c/d9d083f563a1add14b2391d7a081fb3702b6a4": "afbde6a21b11ba9cd7e2e52f9a3fc403",
".git/objects/79/07f91c2a15c3826bd8c6047b553d4099b9337a": "96b2e0899483a52f9e111a3258051c02",
".git/objects/79/d0a8d679f25dd6293ec48ffaa68aa216efe235": "b4d68690b03fb8afda00130d5b673418",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/24/62e934cecd5719b0fd0b39c35082e2b0c02e1b": "d383c25948f85bf3504fdd4591245be6",
".git/objects/4f/9b2b42080243750c968de1286bedcd5ca8135c": "4f284ebcbf9f9222f0e960781b24fbad",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/15/406d3ab474671719eeacd55e99f92355b2e426": "8f94c439b7de83bbf096054698f6d16e",
".git/objects/15/6b66d142238b00065f71bff6f462fe1a5bbcc7": "8bc3236d0432feea9e8bd0a77bfe0708",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/5a41179ea76b42b072e0f31b191944a95e65bc": "4aeb50397968558bbfcab323052ab7ce",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/2b/a375aaa5e5c7922add87406b3ac31e3be4b80b": "b9e99be9cd85762941cc4d6fdd244efa",
".git/objects/78/10aa66a9657b1c4612ac2b93d43bc252c2cc2b": "a8f8d25be94c055623b72b2155d23e90",
".git/objects/7f/190640cfa063e91b06dd54b57ef7e6a8e1fa8c": "8a4359e712765676fcc255546aab771c",
".git/objects/7f/2e521a32b2377c313263a702a5a0a554a82945": "890ac754e65d5ca562fa6af601874afd",
".git/objects/14/3569fde6377aeb4f9ce14ad1f5c2e2330578a5": "5a32c1c051d38b6970a0516e73f648d4",
".git/objects/8e/e70bcb94bacefba0fd26e9a65ba521798237d6": "4ef45e607e2e65df72a998d59f8e953a",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f67b811408fc045d947c4115a96981e4",
".git/logs/refs/heads/main": "f67b811408fc045d947c4115a96981e4",
".git/logs/refs/remotes/origin/main": "058dbfbfcc94cdbe18d17afbe91f491c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "442008955104882b85a00f7884843c7a",
".git/refs/remotes/origin/main": "ef634699b1b67966a72b74883e0f7024",
".git/index": "f4b4e9469a953fc57d85d7351c5ef327",
".git/COMMIT_EDITMSG": "20aa0d9b83554d3ca3ea63194faca3d7",
".git/FETCH_HEAD": "85a222d6498c94852598f4f768fba487",
"assets/AssetManifest.json": "2fff0053dad3dbe37d59b0f2657e712b",
"assets/NOTICES": "b54824e16e1dc782098abc4a358b4cd3",
"assets/FontManifest.json": "663783f541c46e7f04c244ce710d1b61",
"assets/AssetManifest.bin.json": "f2511c85f73c9c249106cbb85116c020",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "20eb4d75ad515888115a4173157ffcaf",
"assets/fonts/MaterialIcons-Regular.otf": "e608273ecc1ee06b27797671b8b2ef95",
"assets/assets/imgs/stores.png": "6cd4813e71d24f8e8f6d4b8d7edbc1ac",
"assets/assets/imgs/python.png": "1abf29de78624ede118675e4ff5b0e94",
"assets/assets/imgs/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/imgs/03.png": "a98f449929ef24d1761b03c50bff22ba",
"assets/assets/imgs/02.png": "b98062ecedfd3ddc304c497f0a4a333e",
"assets/assets/imgs/5424482.jpg": "11a43b6c92858f82bcff3c24a784b158",
"assets/assets/imgs/BG01.png": "292fe68441561eae14b077f8f112acf9",
"assets/assets/imgs/User.jpeg": "6e62a3b62b294fbbc265ad72b8b10d9a",
"assets/assets/imgs/1.png": "64a59844b164dc81d9791064445688b3",
"assets/assets/icons/android.svg": "e57e55c11155e0da56d4913db52486c7",
"assets/assets/icons/graphic.svg": "6f05c1c6706df22c79a37a7ca4df3214",
"assets/assets/icons/website.svg": "421f827e65eb765b8ad10e386bf07849",
"assets/assets/icons/apple.svg": "81afc16bd2183fcbdad794cd391e7f0d",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
