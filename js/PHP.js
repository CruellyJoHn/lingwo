//经费
function number(money) {
    let i = 0,ch,length = money.length;
    while (i < length) {
        ch = money.charAt(i);
        if (!(ch >= '0' && ch <= '9')) {
            return false;
        }
        i++;
    }
}

function date(date) {
    let reg = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
    return reg.test(date);
}

function jingfei1() {
    var purpose = document.getElementById("purpose").value,
        fund = document.getElementById("fund").value;
    if (purpose==''){
        alert('用途不能为空！');
        document.getElementById("purpose").focus();
        return false;
    } else if (fund==''){
        alert('申请金额不能为空！');
        document.getElementById("fund").focus();
        return false;
    }  else if (number(fund)==false){
        alert("金额只能为阿拉伯数字！");
        document.getElementById(fund).focus();
        return false;
    }
    else {
        let url = "req/funds.php?purpose=" + purpose + "money=" + fund;
        ajax(url);
    }
}

//博客


//团队资产流动情况之借
function lend1() {
    var lend_thing = document.getElementById("lend_thing").value,
        // lend_day = document.getElementById("lend_day").value,
        remark = document.getElementById("remark").value,
        promise_date_of_return = document.getElementById("promise_date_of_return").value;
    if (lend_thing==''){
        alert('借用物品不能为空！');
        document.getElementById("lend_thing").focus();
    }else if (remark==''){
        alert('借用目的不能为空');
        document.getElementById("lend_day").focus();
     }
        //else if (lend_day==''){
        //     alert('借用日期不能为空！');
        //     document.getElementById("lend_day").focus();
        // }
        else if (promise_date_of_return==''){
        alert('承诺归还日期不能为空！');
        document.getElementById("promise_date_of_return").focus();
    }else if (!date(promise_date_of_return)){
        alert("承诺归还日期格式错误，应为：xxxx-xx-xx");
        document.getElementById("promise_date_of_return").focus();
        return false;
    }
    else {
        let url = "req/lend.php?thing=" + lend_thing + "remark=" + remark + "promise_date_of_return=" + promise_date_of_return;
        ajax(url);
    }
}

//团队资产流动情况之还
function return1() {
    var return_thing = document.getElementById("return_thing").value;
        // date_of_return = document.getElementById("date_of_return").value;
    if (return_thing==''){
        alert('归还物品不能为空！');
        document.getElementById('return_thing').focus();
     }
        // else if (date_of_return==''){
    //     alert('归还日期不能为空！');
    //     document.getElementById("date_of_return").focus();
    // }
    else {
        let url = "req/return.php?thing=" + return_thing ;
        ajax(url);
    }
}




