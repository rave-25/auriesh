$(document).ready(function(){

 $nav =$(`.nav`);
 $toggleCollapse = $(`.toggle-collapse`);

 /**Click Event on toggle Menu**/
    $toggleCollapse.click(function (){
        $nav.toggleClass(`collapse`);
    })

});
