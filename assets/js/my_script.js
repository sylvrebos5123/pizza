
function goTo(page,choice){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "pages/"+page+".html", false);
    xhttp.send();
    document.getElementById("content").innerHTML = xhttp.responseText;

    if(page == 'step3_choice'){
        document.getElementById("choice").innerHTML=choice;
    }
}

goTo("welcome");