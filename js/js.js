/**
 * Created by Administrator on 2016/10/14.
 */


$(document).ready(function(){      //文档就绪函数，防止文档未加载完整时提前运行代码
    $("h1").click(function(){    //click 单击触发以下函数
        $(this).hide();         //hide（隐藏）当前元素（h1）
    });

    $("h2").click(function(){     //click
        $("h2").hide();

    });
});