var gulp       	 = require('gulp'), // Подключаем Gulp
	sass         = require('gulp-sass'), //Подключаем Sass пакет,
	browserSync  = require('browser-sync'), // Подключаем Browser Sync
	concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
	uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
	cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
	cleanCSS 	 		= require('gulp-clean-css'), //очистка от мусора
	rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов // not working!!
	del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
	imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
	pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
	cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
	autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов

//custom js compile

//
gulp.task('sass', function() { // Создаем таск Sass
	return gulp.src('stylesheet/*.sass') // Берем источник
		.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(autoprefixer(['last 15 versions', '> 1%'], { cascade: true })) // Создаем префиксы
		.pipe(cleanCSS())// очистка от мусора
		.pipe(gulp.dest('public/assets/css/')) // Выгружаем результата в папку
});

gulp.task('watch', function() {
	gulp.watch('stylesheet/**/*.sass', gulp.parallel('sass')); // Наблюдение за sass файлами
	gulp.watch('stylesheet/**/*.scss', gulp.parallel('sass')); // Наблюдение за scss файлами
});
gulp.task('default', gulp.parallel('sass', 'watch'));
