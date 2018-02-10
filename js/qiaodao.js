

//以下是签到签退系统
function  dao_tui() {
    var qiandao1 = 0;
    var qiantui = 0;

    function hover(id) {
        var td = document.getElementById(id);
        var p = td.childNodes[0];
        var qiandao_time = new Date(), qiantui_time = new Date(), qiandao_string, qiantui_string;
        if (qiandao1 == 0) {
            var qiandao_botton = document.createElement('input');
            p.style.display = 'none';
            qiandao_botton.className = 'dao_botton';
            qiandao_botton.type = 'button';
            qiandao_botton.value = '签到';
            qiandao_botton.id = 'dao';
            td.appendChild(qiandao_botton);
            qiandao_botton.addEventListener("click", function () {
                qiandao_string = qiandao_time.getHours().toString() + qiandao_time.getMinutes().toString() + qiandao_time.getSeconds().toString();
                qiandao_botton.style.display = 'none';
                p.style.display = 'block';
                qiandao1 = 1;

                function qiandao2() {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        alert("签到成功！");
                    }
                    else if (xmlhttp.status == 404) {
                        alert("你人太丑，签到失败！")
                    }
                }

                let url = "work_attendance.php?work_attendance=" + qiandao1;
                ajax(url, qiandao2);
            });
        }
        // else if (qiandao1 == 1 && qiantui == 0) {
        //     var qiantui_botton = document.createElement('input');
        //     p.style.display = 'none';
        //     qiantui_botton.className = 'tui_botton';
        //     qiantui_botton.type = 'button';
        //     qiantui_botton.value = '签退';
        //     td.appendChild(qiantui_botton);
        //     qiantui_botton.addEventListener("click", function () {
        //         qiantui_string = qiantui_time.getHours().toString() + qiantui_time.getMinutes().toString() + qiantui_time.getSeconds().toString();
        //         qiantui_botton.style.display = 'none';
        //         p.style.display = 'block';
        //         qiantui = -1;
        //
        //         function qiantui1() {
        //             if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        //                 alert("签退成功！");
        //             }
        //             else if (xmlhttp.status == 404) {
        //                 alert("你人太丑，签退失败！")
        //             }
        //         }
        //
        //         let url = "work_attendance.php?work_attendance=" + qiantui;
        //         ajax(url, qiantui1);
        //     });
        // }
    }

    var q = 0;
    var w = 0;

    function leave(id) {

        var td = document.getElementById(id);
        var p = td.childNodes[0];
        var dao_button = document.getElementsByClassName('dao_botton')[q];
        var tui_button = document.getElementsByClassName('tui_botton')[w];
        if (qiandao1 == 0) {
            p.style.display = 'block';
            dao_button.style.display = 'none';
            ++q;
        }
        // else if (qiandao1 == 1 && qiantui == 0) {
        //     p.style.display = 'block';
        //     tui_button.style.display = 'none';
        //     ++w;
        // }

    }

    var date = new Date();
    var td_all = document.getElementsByTagName("td");
    for (var i = 0; i < td_all.length; i++) {
        if (td_all[i].id == date.getDay()) {
            var id = td_all[i].id;
            var count = 0;
            document.getElementById(td_all[i].id).onmouseenter = function () {
                hover(id);
            }
            document.getElementById(td_all[i].id).onmouseleave = function () {
                leave(id);
            }
        }
    }
}


var today =new Date();
var today_time = today.getHours().toString()+today.getMinutes().toString()+today.getSeconds().toString();

if (today_time>=900&&today_time<113100){
    dao_tui();
}

else if (today_time>=143000&&today_time<173100){
    dao_tui();
}

else if (today_time>=193000&&today_time<223100){
    dao_tui();
}





