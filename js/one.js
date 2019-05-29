


$.ajax({
    url:"./data.json",
    type:"get",
    dataType:"json",
    success:function(a){
      // console.log(a);
      var arrText = doT.template($("#interpolationtmpl").text());
      $(".pp").html(arrText(a));
    }
})

$(".aa").on("tap",function(){
  $(this).toggleClass("on").siblings().removeClass("on");
  $(".bottom").show();
  $(".bottom1").hide();
})
$(".bb").on("tap",function(){
  $(this).toggleClass("on").siblings().removeClass("on");
  $(".bottom").hide();
  $(".bottom1").show();
})
