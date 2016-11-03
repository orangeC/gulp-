var gulp = require("gulp")
var sass = require("gulp-sass")


gulp.task("sass",function(){//各个指令被封装到gulp的task之中
	gulp.src("src/main.scss")//用gulp.src来找到需要处理的文件
	.pipe(sass())//得到数据流之后用管道pipe传给sass来进行处理
	.pipe(gulp.dest("dist/"));//处理之后的结果输出到由dest指定的目标位置
})