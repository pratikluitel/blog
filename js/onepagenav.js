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