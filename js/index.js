//ajax
var xmlhttp;
function ajax(url,fun){
    if(window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    }
    else{
        xmlhttp=new ActiveXObject();
    }

    xmlhttp.onreadystatechange=fun;
    xmlhttp.open("post",url,true);
    xmlhttp.send();
}




//动画
function cambiar_login() {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
    document.querySelector('.cont_form_login').style.display = "block";
    document.querySelector('.cont_form_sign_up').style.opacity = "0";

    setTimeout(function () {
        document.querySelector('.cont_form_login').style.opacity = "1";
    }, 400);

    setTimeout(function () {
        document.querySelector('.cont_form_sign_up').style.display = "none";
    }, 200);
}

function cambiar_sign_up(at) {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
    document.querySelector('.cont_form_sign_up').style.display = "block";
    document.querySelector('.cont_form_login').style.opacity = "0";

    setTimeout(function () {
        document.querySelector('.cont_form_sign_up').style.opacity = "1";
    }, 100);

    setTimeout(function () {
        document.querySelector('.cont_form_login').style.display = "none";
    }, 400);


}


function ocultar_login_sign_up() {

    document.querySelector('.cont_forms').className = "cont_forms";
    document.querySelector('.cont_form_sign_up').style.opacity = "0";
    document.querySelector('.cont_form_login').style.opacity = "0";

    setTimeout(function () {
        document.querySelector('.cont_form_sign_up').style.display = "none";
        document.querySelector('.cont_form_login').style.display = "none";
    }, 500);
}

//提交

function IsEmail(str) {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
    return reg.test(str);
}


function login() {
    let username = document.getElementById("username").value,
        password = document.getElementById("password").value;
    if (username == "") {
        alert("用户名不能为空!");
        document.getElementById("email").focus();
        return false;
    }
    if (password == "") {
        alert("密码不能为空");
        document.getElementById("password").focus();
        return false;
    }
    else {
        let url = "req/login.php?username=" + username + "password=" + password;
        function login1() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                alert(xmlhttp.responseText);
                window.location.href='../inside/lingwo.html';
            }
            else if (xmlhttp.status == 404) {
                alert("你人太丑，失败！");
            }
        };
        ajax(url,login1);
    }
}

function sign_up() {
    let re_email = document.getElementById("re_email").value,
        re_username = document.getElementById("re_username").value,
        re_password = document.getElementById("re_password").value,
        re_password_again = document.getElementById("re_password_again").value,
        length, i, ch;

    //邮箱确认
    if (re_email == "") {
        alert("邮箱不能为空");
        document.getElementById("re_email").focus();
        return false;
    }
    if (!IsEmail(re_email)) {
        alert("邮箱地址格式错误");
        document.getElementById("re_email").focus();
        return false;
    }

    //用户名确认
    if (re_username == "") {
        alert("用户名不能为空!");
        document.getElementById("re_username").focus();
        return false;
    }
    //判断是否3-16位组成
    length = re_username.length;
    if (length < 2 || length > 16) {
        alert("用户名只能由3-16位字符组成!");
        document.getElementById("re_username").focus();
        return false;
    }
    //用户名只能６－１６位字母,数字,下划线组成
    i = 0;
    while (i < length) {
        ch = re_username.charAt(i);
        if (!(ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z' || ch >= '0' && ch <= '9' || ch == '_')) {
            alert("用户名只能由字母,数字,下划线组成");
            document.getElementById("re_username").focus();
            return false;
        }
        i++;
    }

    //密码确认
    if (re_password == "") {
        alert("密码不能为空");
        document.getElementById("re_password").focus();
        return false;
    }
    //确认密码与密码必须一致
    if (re_password != re_password_again) {
        alert("确认密码与密码不一致");
        document.getElementById("password1").focus();
        return false;
    }

    else {
        let url = "req/register.php?re_email=" + re_email + "password=" + re_password + "username=" + re_username;
        function sign() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                alert(xmlhttp.responseText);
                window.location.reload();
            }
            else if (xmlhttp.status == 404) {
                alert("你人太丑，失败！");
            }
        };
        ajax(url,sign);
    }
}