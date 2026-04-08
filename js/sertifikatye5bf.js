$(document).ready(function()
{
   $("a[data-rel='sertifikatyPhotoGallery1']").attr('rel', 'sertifikatyPhotoGallery1');
   $("#sertifikatyPhotoGallery1").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   $("a[data-rel='indexPhotoGallery3']").attr('rel', 'indexPhotoGallery3');
   $("#indexPhotoGallery3").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   $('img[data-src]').lazyload();
});
