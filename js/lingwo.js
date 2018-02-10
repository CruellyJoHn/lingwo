var div = document.getElementsByClassName('wo_body')[0].children;

var li = document.getElementsByClassName('wo_ul')[0].children;

var one = document.getElementById('one'),
    two = document.getElementById('two'),
    three = document.getElementById('three'),
    four = document.getElementById('four');

var qiandao = document.getElementsByClassName('qiandao')[0],
    jingfei = document.getElementsByClassName('jingfei')[0],
    blog = document.getElementsByClassName('blog')[0],
    lend_return = document.getElementsByClassName('lend_return')[0];

function color() {
    for (let i = 0, len = li.length; i < len; i++) {
        li[i].className = ' ';
    }
}

function display() {
    for (let i = 0, len = div.length; i < len; i++) {
        div[i].className = 'display_none';
    }
}

function first() {
    one.className = 'color';
    display();
    qiandao.className = 'display_block';
}

one.addEventListener('click', () => {
    one.className = 'color';
    color();
    display();
    qiandao.className = 'display_block';
    one.className = 'color';
});

two.addEventListener('click', () => {
    two.className = 'color';
    color();
    display();
    jingfei.className = 'display_block';
    two.className = 'color';
});

three.addEventListener('click', () => {
    three.className = 'color';
    color();
    display();
    blog.className = 'display_block';
    three.className = 'color';
});

four.addEventListener('click', () => {
    four.className = 'color';
    color();
    display();
    lend_return.className = 'display_block';
    four.className = 'color';
});

first();


//关于blogs的js


var wo_ul1_li = document.getElementsByClassName("wo_ul1")[0].children,
    blog_title = document.getElementsByClassName("blog_title");

function fun(date) {
    let obj = date;

    //显示文章数目
    for (let i = 0, len = wo_ul1_li.length; i < len; i++) {
        if (wo_ul1_li[i].className == obj.name) {
            let span = document.createElement('span');
            let text = document.createTextNode(obj.length);
            span.appendChild(text);
            span.style.fontSize = '13px';
            span.style.marginLeft = '5px';
            wo_ul1_li[i].appendChild(span);

            let ul = document.createElement('ul');
            ul.className = 'blog_title';
            ul.id = obj.name;
            blog.appendChild(ul);
        }

        //blog目录的显示
        wo_ul1_li[i].addEventListener("click", () => {
            for (let x = 0; x < len; x++) {
                blog_title[x].style.display = 'none';
                wo_ul1_li[x].style.backgroundColor = 'white';
                wo_ul1_li[x].style.color = '#4f4f4f';
            }
            wo_ul1_li[i].style.backgroundColor = 'skyblue';
            wo_ul1_li[i].style.color = 'aliceblue';
            document.getElementById(wo_ul1_li[i].className).style.display = 'block';
        });
        // setTimeout(()=>{
        //     wo_ul1_li[i].addEventListener("mouseout",()=>{
        //         blog_title[i].style.display='none';
        //         console.log('aaa');
        //     })
        // },i*3000);
    }
    //每个人的blogs' titles
    let ul_title = document.getElementById(obj.name);
    for (let x in obj.date) {
        let li_title = document.createElement("li");
        let span_title = document.createElement('span');
        let text_title = document.createTextNode(x);
        span_title.addEventListener('click', () => {
            window.open(obj.path + obj.date[x]);
        });
        span_title.addEventListener('mouseover', () => {
            span_title.style.color = 'skyblue';
        });
        span_title.addEventListener('mouseout', () => {
            span_title.style.color = 'black';
        });
        span_title.style.cursor = 'pointer';
        span_title.appendChild(text_title);
        li_title.appendChild(span_title);
        ul_title.appendChild(li_title);
    }
}

function url_blog() {
    let url = "req/blog.php?";

    function blog_ajax() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var a = JSON.parse(xmlhttp.responseText);
            for (let i in a.all) {
                fun(a.all[i]);
            }
        }
        else if (xmlhttp.status == 404) {
            alert("你人太丑，失败！");
        }
    }
    ajax(url,blog_ajax);
}

// var txt = '{"all":[{"name":"ZDS","length":175,"url":"http://blog.csdn.net/Notzuonotdied","path":"http://blog.csdn.net/notzuonotdied/article/details/","date":{"firstname":78933578,"lastname":78984061}},{"name":"CZK","length":175,"url":"http://blog.csdn.net/Notzuonotdied","path":"http://blog.csdn.net/notzuonotdied/article/details/","date":{"firstname1":78938165,"lastname":78910766}}]}';




