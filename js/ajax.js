//ajax
function ajax(url){
    var xmlhttp;
    if(window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    }
    else{
        xmlhttp=new ActiveXObject();
    }

    xmlhttp.onreadystatechange=function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                alert(xmlhttp.responseText);
            }
            else if (xmlhttp.status == 404) {
                alert("你人太丑，失败！");
            }
    };
    xmlhttp.open("post",url,true);
    xmlhttp.send();
}