/*
*Name: Maiara Almeida
*Student id: 301145511
*/

(function(){
    function Start(){
        console.log("Our express App Started...");
        let deleteButtons = document.querySelectorAll('.btn-danger');
        for(button of deleteButtons ){
            button.addEventListener('click',(event)=>{
                if(!confirm("Do you want to continue?")){
                    event.preventDefault();
                    window.location.assign('/information-list');
                }
            })
        }
    }
    window.addEventListener("load",Start);
})();