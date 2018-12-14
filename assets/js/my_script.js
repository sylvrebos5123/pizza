
function goTo(page,choice){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "pages/"+page+".html", false);
    xhttp.send();
    document.getElementById("content").innerHTML = xhttp.responseText;

    if(page=="step3_no")
    {
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                myObj = JSON.parse(this.responseText);
                //to display the object in the console
                console.log(myObj);
                var list='';
                for(var x=0;x<myObj.length;x++){
                    list += "<div class=\"btn_ingredient\" onclick=\"goTo('step3_choice','"+myObj[x].label+"')\">";
                    list += myObj[x].label;
                    list += "</div>";
                }
                document.getElementById("list_ingredients").innerHTML = list;
                
            }
        };
        xhttp.open("GET", "./php/list_ingredients.php", true);
        xhttp.send();
    }

    if(page == 'step3_choice'){
        document.getElementById("choice").innerHTML=choice;
    }
}

goTo("welcome");