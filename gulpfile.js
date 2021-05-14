const gulp = require("gulp");
const workbox = require("workbox-build");

gulp.task('generate-service-worker', () => {
    return workbox.injectManifest({
        swSrc: './sw-template.js',
        swDest: './public/sw.js',
        globDirectory: './public',
        globPatterns: [
            "**/*.{html,css,js,json,woff2,xml}"
            // "**/*.{html,xml}"    
            //精简版使用下面这行
        ],
        modifyURLPrefix: {
            "": "./"
        }
    });
});
gulp.task("default", gulp.series("generate-service-worker"));