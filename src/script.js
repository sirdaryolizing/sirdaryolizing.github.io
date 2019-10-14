$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
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
            breakpoint: 768,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 1
            }
        }
        ]
    });
});

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
                    dataUpdatePrepaid(sumTotal, sumOutPrepaid);
                }else if(totalMonth / 12 == 2){
                    sumTotal = parseInt(sumOutPrepaid) + ((parseInt(sumOutPrepaid) / 100) * (parseInt(totalPercent)*2));
                    dataUpdatePrepaid(sumTotal, sumOutPrepaid);
                }else if(totalMonth / 12 == 3){
                    sumTotal = parseInt(sumOutPrepaid) + ((parseInt(sumOutPrepaid) / 100) * (parseInt(totalPercent)*3));
                    dataUpdatePrepaid(sumTotal, sumOutPrepaid);
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

        function dataUpdatePrepaid(sumTotal, sumOutPrepaid){
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




