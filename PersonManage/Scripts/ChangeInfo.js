var Events = {
    //切换搜索关键字
    ChangeName:function(){
        var SelectName = $('input[name="selectName"]:checked').val();
        if(SelectName==1){
            $(".selectName01").show();$(".selectName02").hide();$(".selectName03").hide();
        }
        else if(SelectName==2){
            $(".selectName01").hide();$(".selectName02").show();$(".selectName03").hide();
        }
        else if(SelectName==3){
            $(".selectName01").hide();$(".selectName02").hide();$(".selectName03").show();
        }

    },
}