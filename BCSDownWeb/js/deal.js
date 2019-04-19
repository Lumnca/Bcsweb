

function changeicon(i){
    var icon1 = document.getElementsByClassName("fb")[i];
    var icon2 = document.getElementsByClassName("ob")[i];

    var classValue = icon1.getAttribute("class");
    var classValue2 = icon2.getAttribute("class");

    var fflag = icon1.getAttribute("flag");


    if(icon1.getAttribute("flag")=="false"){
   
        classValue = classValue.replace("fa-caret-right","fa-caret-down");
        icon1.setAttribute("class",classValue);
        classValue2 = classValue2.replace("fa-folder","fa-folder-open");
        icon2.setAttribute("class",classValue2)

        fflag = fflag.replace("false","true");
        icon1.setAttribute("flag",fflag);
    }
    else{
        classValue = classValue.replace("fa-caret-down","fa-caret-right");
        icon1.setAttribute("class",classValue);
        classValue2 = classValue2.replace("fa-folder-open","fa-folder");
        icon2.setAttribute("class",classValue2)

        fflag = fflag.replace("true","false");
        icon1.setAttribute("flag",fflag);
    }
}


function changeicons(i){
    var icon1 = document.getElementsByClassName("fx")[i];
    var icon2 = document.getElementsByClassName("op")[i];

    var classValue = icon1.getAttribute("class");
    var classValue2 = icon2.getAttribute("class");

    var fflag = icon1.getAttribute("flag");


    if(icon1.getAttribute("flag")=="false"){
   
        classValue = classValue.replace("fa-caret-right","fa-caret-down");
        icon1.setAttribute("class",classValue);
        classValue2 = classValue2.replace("fa-folder","fa-folder-open");
        icon2.setAttribute("class",classValue2)

        fflag = fflag.replace("false","true");
        icon1.setAttribute("flag",fflag);
    }
    else{
        classValue = classValue.replace("fa-caret-down","fa-caret-right");
        icon1.setAttribute("class",classValue);
        classValue2 = classValue2.replace("fa-folder-open","fa-folder");
        icon2.setAttribute("class",classValue2)

        fflag = fflag.replace("true","false");
        icon1.setAttribute("flag",fflag);
    }
}
