$(function(){

    var typedElement = $("#element span#header");
    
    var default_org = ["Hi^2000", "I'm Victor Niu.", "My friends call me Victor, because that is my name.", "This website is still under construction...", "But please check out my stuff :D"," Just head over to the lower right corner.", "...^1000", "......^5000", "Why are you still here?", "Ok I guess if you want to stay you can.", "I mean there's not much else for me to say.", "And there's going to be nothing at the end of this.", "You'll just be wasting your time.", "...^2000<br>....^2000<br>.....", "Well if you insist,", "I guess I can re-introduce myself."];
    
    var default_ = ["Hi^2000", "You've reached Victor Niu's website", "He is not here right now...", "But I'm here!", "If you're wondering about the normal stuff, ","Github, Resume, LinkedIn, that stuff you know?", "Just check in the bottom right corner where all the nifty icons are!", "Now if you have any questions I'd be happy to take them!", "If you just head down to the bottom, you can type things for me", "For example, you can ask me about Victor's projects", "or what he is currently up to right now", "Go ahead and try it out!", "...^2000<br>....^2000<br>.....", "You're still here?", "If you need help, just type help"]
    
    var help =  ["So you need help huh", "fine"]
    
    $("#input").on("keypress", function(e){
            if(e.keyCode == 13){
            e.preventDefault();
            var command = this.innerHTML;
            this.innerHTML = "";
            runCommand(command); 
                
         }
         
     });
    
//    function runCommand(command){
//        console.log("command - " + command);
//        typedElement.typed({
//            strings: help,
//            typeSpeed: 10,
//            backDelay: 1500,
//    //        loop: true,
//            loopCount: false,
//
//        });    
//        
//        
//    }
    
  
    /*
    To add:
    Who am I?
    Projects
    Politics
    help
    */
    
    typedElement.typed({
        strings: default_org,
        typeSpeed: 10,
        backDelay: 1500,
        loop: true,
        loopCount: false,

    });    

});
