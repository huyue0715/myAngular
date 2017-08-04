var gulp = require('gulp');

//压缩图片
var imagemin=require("gulp-imagemin");
gulp.task("imgmin",function(){
	gulp.src("./images/*.jpg")
		.pipe(imagemin())
		.pipe(gulp.dest("./images/"))
})

//压缩js文件
var uglify=require("gulp-uglify");
gulp.task("jsmin",function(){
	gulp.src("./js/*.js")
		.pipe(uglify())
		.pipe(gulp.dest("./js/"))
})

//压缩html
var htmlmin=require("gulp-htmlmin");
gulp.task("htmlmin",function(){
	var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
	}
	gulp.src("./html/*.html")	//*.html代表所有html文件
		.pipe(htmlmin(options))
		.pipe(gulp.dest("./html/"))
})

//压缩CSS
var cleancss=require("gulp-clean-css");
gulp.task("cssmin",function(){
	gulp.src("./css/*.css")
		.pipe(cleancss())
		.pipe(gulp.dest("./css/"))
})
gulp.task("default",["imgmin","jsmin","htmlmin","cssmin"])


