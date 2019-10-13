$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 300,
        dots: false,
        arrows: false,
        fade: true,
    });
    $('.partners').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 5,
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
        }
        else{
            if(totalPrepaid != 0){
                if(totalMonth / 12 == 1){
                    sumOutPrepaid = totalSum - ((parseInt(totalSum) / 100) * parseInt(totalPrepaid));
                    sumTotal = parseInt(sumOutPrepaid) + ((parseInt(sumOutPrepaid) / 100) * parseInt(totalPercent));
    
                    $('#totalSumResult').val(sumTotal + ' сум.');
                    $('#totalSumMain').val(sumOutPrepaid+ ' сум.');
                    $('#totalSumPercent').val((sumTotal - sumOutPrepaid) + ' сум.');
                    $('#totalSumPerMonth').val(parseFloat(sumTotal / totalMonth).toFixed(0) + ' сум.');
    
                }
                else if(totalMonth / 12 == 2){
                    sumOutPrepaid = totalSum - ((parseInt(totalSum) / 100) * parseInt(totalPrepaid));
                    sumTotal = parseInt(sumOutPrepaid) + ((parseInt(sumOutPrepaid) / 100) * (parseInt(totalPercent)*2));
    
                    $('#totalSumResult').val(sumTotal + ' сум.');
                    $('#totalSumMain').val(sumOutPrepaid+ ' сум.');
                    $('#totalSumPercent').val((sumTotal - sumOutPrepaid) + ' сум.');
                    $('#totalSumPerMonth').val(parseFloat(sumTotal / totalMonth).toFixed(0) + ' сум.');
    
                }
                else if(totalMonth / 12 == 3){
                    sumOutPrepaid = totalSum - ((parseInt(totalSum) / 100) * parseInt(totalPrepaid));
                    sumTotal = parseInt(sumOutPrepaid) + ((parseInt(sumOutPrepaid) / 100) * (parseInt(totalPercent)*3));
    
                    $('#totalSumResult').val(sumTotal + ' сум.');
                    $('#totalSumMain').val(sumOutPrepaid+ ' сум.');
                    $('#totalSumPercent').val((sumTotal - sumOutPrepaid) + ' сум.');
                    $('#totalSumPerMonth').val(parseFloat(sumTotal / totalMonth).toFixed(0) + ' сум.');
    
                }
            }else{
                if(totalMonth / 12 == 1){
                    sumTotal = parseInt(totalSum) + ((parseInt(totalSum) / 100) * parseInt(totalPercent));
    
                    $('#totalSumResult').val(sumTotal + ' сум.');
                    $('#totalSumMain').val(totalSum + ' сум.');
                    $('#totalSumPercent').val((sumTotal - totalSum) + ' сум.');
                    $('#totalSumPerMonth').val(parseFloat(sumTotal / totalMonth).toFixed(0) + ' сум.');   
    
                }
                else if(totalMonth / 12 == 2){
                    sumTotal = parseInt(totalSum) + ((parseInt(totalSum) / 100) * (parseInt(totalPercent)*2));
    
                    $('#totalSumResult').val(sumTotal + ' сум.');
                    $('#totalSumMain').val(totalSum + ' сум.');
                    $('#totalSumPercent').val((sumTotal - totalSum) + ' сум.');
                    $('#totalSumPerMonth').val(parseFloat(sumTotal / totalMonth).toFixed(0) + ' сум.');   
    
                }
                else if(totalMonth / 12 == 3){
                    sumTotal = parseInt(totalSum) + ((parseInt(totalSum) / 100) * (parseInt(totalPercent)*3));
    
                    $('#totalSumResult').val(sumTotal + ' сум.');
                    $('#totalSumMain').val(totalSum + ' сум.');
                    $('#totalSumPercent').val((sumTotal - totalSum) + ' сум.');
                    $('#totalSumPerMonth').val(parseFloat(sumTotal / totalMonth).toFixed(0) + ' сум.');   
    
                }
            }
        }
    });
});




