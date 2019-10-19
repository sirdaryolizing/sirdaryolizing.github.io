var images = document.images,
    images_total_count = images.length,
    images_loaded_count = 0,
    preloader = document.querySelector('.preloader'),
    perc_display = document.querySelector('.loader-perc');

for(i=0; i<images_total_count; i++){
    image_clone = new Image();
    image_clone.onload = image_loaded;
    image_clone.onerror = image_loaded;
    image_clone.src = images[i].src;
}

function image_loaded(){
    images_loaded_count++;
    perc_display.style.width = (( (100 / images_total_count) * images_loaded_count) << 0) + '%';

    if( images_loaded_count >= images_total_count){
        setTimeout(function(){
            if( !preloader.classList.contains('done') ){
                preloader.classList.add('done');
            }
            setTimeout(function(){
                preloader.remove();
            }, 4000);
        }, 2000);
    }
}