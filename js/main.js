$(function(){
    $("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 300,
        labels: {
            next: "Continue",
            previous: "Back",
            finish: 'Submit'
        },
        onStepChanging: function (event, currentIndex, newIndex) { 
            if (newIndex >= 1) {
                $('.steps ul li:first-child a img').attr('src', 'images/step-1.png');
            } else {
                $('.steps ul li:first-child a img').attr('src', 'images/step-1-active.png');
            }

            if (newIndex === 1) {
                $('.steps ul li:nth-child(2) a img').attr('src', 'images/step-2-active.png');
            } else {
                $('.steps ul li:nth-child(2) a img').attr('src', 'images/step-2.png');
            }

            if (newIndex === 2) {
                $('.steps ul li:nth-child(3) a img').attr('src', 'images/step-3-active.png');
            } else {
                $('.steps ul li:nth-child(3) a img').attr('src', 'images/step-3.png');
            }

            if (newIndex === 3) {
                $('.steps ul li:nth-child(4) a img').attr('src', 'images/step-4-active.png');
            } else {
                $('.steps ul li:nth-child(4) a img').attr('src', 'images/step-4.png');
            }

            // New Step 5 Logic
            if (newIndex === 4) {
                $('.steps ul li:nth-child(5) a img').attr('src', 'images/step-4-active.png');
                $('.actions ul').addClass('step-5');
            } else {
                $('.steps ul li:nth-child(5) a img').attr('src', 'images/step-5.png');
                $('.actions ul').removeClass('step-5');
            }

            return true; 
        }
    });

    // Custom Button Jquery Steps
    $('.forward').click(function(){
        $("#wizard").steps('next');
    });
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    });

    // Click to see password 
    $('.password i').click(function(){
        var input = $(this).siblings('input');
        input.attr('type', input.attr('type') === 'password' ? 'text' : 'password');
    });

    // Create Steps Image
    $('.steps ul li:first-child').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/step-1-active.png" alt=""> ').append('<span class="step-order">Step 01</span>');
    $('.steps ul li:nth-child(2)').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/step-2.png" alt="">').append('<span class="step-order">Step 02</span>');
    $('.steps ul li:nth-child(3)').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/step-3.png" alt="">').append('<span class="step-order">Step 03</span>');
    $('.steps ul li:nth-child(4)').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/step-4.png" alt="">').append('<span class="step-order">Step 04</span>');
    
    // Add Step 5 Images
    $('.steps ul li:nth-child(5)').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/step-4.png" alt="">').append('<span class="step-order">Step 05</span>');

    // Count input
    $(".quantity span").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        var newVal = $button.hasClass('plus') ? parseFloat(oldValue) + 1 : Math.max(0, parseFloat(oldValue) - 1);
        $button.parent().find("input").val(newVal);
    });
});
