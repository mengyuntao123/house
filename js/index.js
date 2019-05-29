


$(".list li").on("tap",function(){
    //获取下标
    var index = $(this).index();
    $('.hide').show();//显示遮罩层
    //删除兄弟active元素
    $(this).siblings().children('h2').children('a').removeClass('active');
    //给当前元素添加active
    $(this).children('h2').children('a').addClass('active');
    $(".someList>li").hide();
    // $(".someList>li").eq(index).show();

    if(index === 0){
        $(".someList>li").eq(index).css('display', 'flex');
    } else {
        $(".someList>li").eq(index).show();
    }
    return false;//阻止冒泡事件 轮到谁就点谁
})


$(".someList>li").on('tap', function() { return false; });

//点击空白处隐藏
$("body").on("tap",function(){
    $('.hide').hide();
    $(".list li").children('h2').children('a').removeClass('active');
    $(".someList>li").hide();
})



