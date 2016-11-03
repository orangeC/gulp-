var gulp = require("gulp");
var sass = require("gulp-sass");
var prefix = require("gulp-autoprefixer");//引入autoprefixer


gulp.task("sass",function(){
	gulp.src("src/main.scss")
	.pipe(sass())
	.pipe(prefix())//在sass转化css之后进行厂商前缀的添加
	.pipe(gulp.dest("dist/"));
})

gulp.task("copy-assets",function(){//拷贝Html文件到dist中
	gulp.src("src/*.html")//锁定要拷贝的所有html文件
	.pipe(gulp.dest("dist/"));
})

gulp.task('default', ['sass', 'copy-assets']);//default同时对应这两个