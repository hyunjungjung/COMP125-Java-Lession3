/* Main JavaScript file */
// global scope


//IIFE - Immediately Invoked Functiona Expression
(function(){
    "use strict";
    
    var paragraphOne=document.getElementById("paragraphOne");
    var paragraphTwo=document.getElementById("paragraphTwo");
    var paragraphThree=document.getElementById("paragraphThree");
    
    // define your paragraphs array(most common way)
    var paragraphs = [];
    
    // data for my pages   
    paragraphs[0] = "This is my first paragraph. It is only visible on the first page";
    paragraphs[1] = "This is my second paragraph. It is only visible on the second page";
    paragraphs[2] = "This is my third paragraph. It is only visible on the third page";
    
    // second way to define an array
    //var paragraphs = new Array();
    
    // check to see if paragraph one exists
    if(paragraphOne){
        paragraphOne.textContent=paragraphs[0];
    }
    if(paragraphTwo){
        paragraphTwo.textContent=paragraphs[1];
    }
    if(paragraphThree){
        paragraphThree.textContent=paragraphs[2];
    }
    
    
})();