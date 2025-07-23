 let navDialog = document.querySelector('.nav-dialog');
function showNav(){
   
    if(navDialog.style.display === 'none' || navDialog.style.display === ''){
        navDialog.style.display = "block";
        console.log("block")
    }
    else{
        navDialog.style.display = "none";
        console.log("none");
        
    } 
}