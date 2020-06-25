// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } 
    else {
        navbar.classList.remove("sticky");
    }
} 

(function(){
    var navlinks =$('nav ul li'),
        navH = $('nav').height(),
        section = $('section'),
        documentl = $(document);
    documentl.on('scroll', function(){
        var currentScrollPos = documentl.scrollTop()+50;
        section.each(function(){
            var self = $(this);
            if ( self.offset().top < (currentScrollPos+navH) && (currentScrollPos +navH) < (self.offset().top +self.outerHeight()) ){
                var targetClass ='.' +self.attr('class')+'-marker';
                navlinks.removeClass('active');
                $(targetClass).addClass('active');
            }
        });
    });

})();