/**
 * Created by zongjuan.wang on 2016/6/17.
 */

$(document).ready(function(){
    //用过滤选择器给h2设置背景颜色和字体颜色
     $(".contain :header").css({"background":"#2a65ba","color":"#ffffff"});


    var $newNode1=$("<li>你喜欢哪些冬季运动项目？</li>");  //定义对象
    var $newNode2=$("<li title='last'>北京申办冬奥会是再合适不过了！</li>");
    $("ul").append($newNode1);  //追加到后面
	
	
    $("ul").prepend($newNode2);  //放在前面
	

    var $newNode3=$("<li>北京冬残会筹备工作在京举行</li>");
    var $newNode4=$("<li>北京奥匹克塔奥运五环标志落成！</li>");
    $("ul").after($newNode3);
    $("ul").before($newNode4);

    $(".gameList li:eq(1)").remove();  //remove表示删除
    $(".gameList li:eq(2)").empty();  //empty表示清空



    //li 最后一个 没有边框
    $(".gameList li:last").css("border","none");


});