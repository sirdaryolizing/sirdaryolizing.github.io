// slick-slider
$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        infinite: true,
        speed: 300,
        dots: false,
        arrows: false,
        fade: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    $('.partners').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 5,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
        {
            breakpoint: 990,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: 0,
            slidesToShow: 4
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: 0,
            slidesToShow: 2
            }
        },
        {
            breakpoint: 330,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: 0,
            slidesToShow: 1
            }
        }
        ]
    });
});
// calculator
$(document).ready(function(){
    $('#totalMonth').on('input', function(){
        var totalMonth = $('#totalMonth').val(),
            month = $('#month');

        month.text(totalMonth + 'мес.');
    });
    $('#totalPercent').on('input', function(){
        var totalPercent = $('#totalPercent').val(),
            percent = $('#percent');

        percent.text(totalPercent + '%');
    });
    $('#totalPrepaid').on('input', function(){
        var totalPrepaid = $('#totalPrepaid').val(),
            prepaid = $('#prepaid');

        prepaid.text(totalPrepaid + '%');
    });

    $('.count-btn').click(function(e){
        e.preventDefault();

        var totalSum = $('#totalSum').val(),
            totalMonth = $('#totalMonth').val(),
            totalPercent = $('#totalPercent').val(),
            totalPrepaid = $('#totalPrepaid').val(),
            sumTotal,
            sumOutPrepaid;

        if(!totalSum){
            alert('Заполните поле "Стоимость лизингового объекта"!');
        }else{
            if(totalPrepaid != 0){
                sumOutPrepaid = totalSum - ((parseInt(totalSum) / 100) * parseInt(totalPrepaid));
                if(totalMonth / 12 == 1){
                    sumTotal = parseInt(sumOutPrepaid) + ((parseInt(sumOutPrepaid) / 100) * parseInt(totalPercent));
                    // percentByDate = ((parseInt(sumOutPrepaid) / 100) * parseInt(totalPercent) / 12) * totalMonth;
                    
                    dataUpdatePrepaid(sumTotal, sumOutPrepaid, totalMonth);
                }else if(totalMonth / 12 == 2){
                    sumTotal = parseInt(sumOutPrepaid) + ((((parseInt(sumOutPrepaid) / 100) * (parseInt(totalPercent))) / 12) * totalMonth );
                    
                    dataUpdatePrepaid(sumTotal, sumOutPrepaid, totalMonth);
                }else if(totalMonth / 12 == 3){
                    sumTotal = parseInt(sumOutPrepaid) + ((((parseInt(sumOutPrepaid) / 100) * (parseInt(totalPercent))) / 12) * totalMonth );
                    
                    dataUpdatePrepaid(sumTotal, sumOutPrepaid, totalMonth);
                }
            }else{
                if(totalMonth / 12 == 1){
                    sumTotal = parseInt(totalSum) + ((parseInt(totalSum) / 100) * parseInt(totalPercent));
                    dataUpdateOutPrepaid(sumTotal);
                }else if(totalMonth / 12 == 2){
                    sumTotal = parseInt(totalSum) + ((parseInt(totalSum) / 100) * (parseInt(totalPercent)*2));
                    dataUpdateOutPrepaid(sumTotal);
                }else if(totalMonth / 12 == 3){
                    sumTotal = parseInt(totalSum) + ((parseInt(totalSum) / 100) * (parseInt(totalPercent)*3));
                    dataUpdateOutPrepaid(sumTotal);
                }
            }
        }

        function dataUpdatePrepaid(sumTotal, sumOutPrepaid, totalMonth){
            $('#totalSumResult').val(sumTotal + ' сум.');
            $('#totalSumMain').val(sumOutPrepaid+ ' сум.');
            $('#totalSumPercent').val((sumTotal - sumOutPrepaid) + ' сум.');
            $('#totalSumPerMonth').val(parseFloat(sumTotal / totalMonth).toFixed(0) + ' сум.');
        }
        function dataUpdateOutPrepaid(sumTotal){
            $('#totalSumResult').val(sumTotal + ' сум.');
            $('#totalSumMain').val(totalSum + ' сум.');
            $('#totalSumPercent').val((sumTotal - totalSum) + ' сум.');
            $('#totalSumPerMonth').val(parseFloat(sumTotal / totalMonth).toFixed(0) + ' сум.'); 
        }
    });
});
// scroll
$(document).ready(function(){
    $(window).scroll(function(e){
        var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if(windowScroll != 0){
            $('header').css({
                height: '70px',
                background: 'rgba(0,0,0, 0.9)'});
            $('.head-contacts').hide();
        }else{
           if($('.wrapper').css('width') >= '991px'){
                $('header').css({
                    height: '120px',
                    background: 'rgba(0,0,0, 0.9)'});
                $('.head-contacts').show();
           }
        }
    });
});
// navbar-target
$(document).ready(function(){
	$('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top - 0;
        $('body, html').animate({ scrollTop: bl_top }, 1500);
        $('.navbar').hide().fadeOut('slow');
        $('.header-btn_bars').show();
        $('.header-btn_close').hide();
		return false;
	});
});
// modal-navbar
$(document).ready(function(){
    // modal

    $('.contact-us, .contact-us-button').click(function(){
        showModal();
        $('.modal-callback').css('display', 'block');
    });
    
    $('.modal-callback_close, .modal-service_close').click(function () {
        $('.modal').css('display', '');
        $('.modal').fadeOut();
        $('main').css('filter', 'none');
        $('body').css('overflow', '');
        $('.modal-callback, .modal-service').css('display', 'none');
    });
    
    $(document).mouseup(function (e) {
        var popup = $('.modal-popup');
        
        for(i=0; i<popup.length; i++){
            if (e.target != popup[i] && popup.has(e.target).length === 0) {
                $('.modal').fadeOut();
                $('main').css('filter', 'none');
                $('body').css('overflow', '');
            }
        }
    });

    $('.service-btn').click(function(){
        showModal();
        $('.modal-service').css('display', 'flex');
    });

    function showModal(){
        $('.modal').css('display', 'flex');
        $('.modal').fadeIn();
        $('main').css('filter', 'blur(5px)');
        $('body').css('overflow', 'hidden');
    }

    // navbar
    $('.header-btn_bars').click(function(){
        $('.header-btn_bars').hide();
        $('.header-btn_close').show();
        $('.navbar').show().fadeInDown('slow');

    });
    $('.header-btn_close').click(function(){
        $('.header-btn_bars').show();
        $('.header-btn_close').hide();
        $('.navbar').hide().fadeOut('slow');
    });
});




