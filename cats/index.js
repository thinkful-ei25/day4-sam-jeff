function handleCatThumbnail(){
$('.thumbnails').on('click', 'thumbnail', function(event){
const imageSource = $(this).find('img').attr('src');
const altSource = $(this).find('img').attr('alt');
$('.hero img').attr('src', imageSource);
$('.hero img').attr('alt', altSource);
});
}










$(handleCatThumbnail());