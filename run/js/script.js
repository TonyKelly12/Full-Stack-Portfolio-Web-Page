/**
 * Created by toned_000 on 2/20/2017.
 */
$(document).ready(function(){
    // Init Scroll Magic
    var controller = new ScrollMagic.Controller();

    $('.project').each(function(){


    //Scene for services object 1
        var bizScene1 = new ScrollMagic.Scene({
            triggerElement: this
        })
            .setClassToggle(this, 'fade-in')// adds fade-in to the class of work1
            .addIndicators({
                name: 'fade scene',
                colorTrigger: 'red',
            })// Requires plugin
            .addTo(controller);
    });

});