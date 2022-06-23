//每次调用$.get .post .ajax时，会先调用ajaxPrefilter这个函数
//这个函数可以拿到我们给ajax提供的配置对象
$.ajaxPrefilter(function(options){
    
    options.url='http://ajax.frontend.itheima.net' + options.url
    
    console.log(options.url);
})