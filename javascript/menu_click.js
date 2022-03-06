var isclicked=false;
            function openNav() {
                isclicked=!isclicked;
                if(isclicked){
                    document.getElementById("mySidenav").style.width = "350px";
                    document.getElementById("mySidenav").style.opacity = "100%";
                }
                else{
                    document.getElementById("mySidenav").style.width = "0px";
                    document.getElementById("mySidenav").style.opacity = "0%";
                }
            
}