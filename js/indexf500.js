function displaylightbox(url, options)
{
   options.items = { src: url };
   options.type = 'iframe';
   $.magnificPopup.open(options);
}
$(document).ready(function()
{
   $("#wb_p3").tooltip(
   {
      hide: true,
      show: true,
      content: "<span style=\"color:#000000;font-family:'Montserrat';font-weight:600;font-size:15px;\">КОРОБКА ДОМА</span><span style=\"color:#000000;font-family:Montserrat;font-size:13px;\"><br>Возводим наружные и внутренние стены по ГОСТу</span>",
      items: '#wb_p3',
      position: { my: "center bottom", at: "center top", collision: "flipfit" },
      classes: { 'ui-tooltip' : 'indexToolTip3' }
   });
   $('#indexYouTube1').magnificPopup(
   {
      type: 'iframe',
      iframe: { patterns: { youtube: { index: 'youtube.com/', id: null, src: '%id%' } } }
   });
   $("#indexFileUpload1 :file").on('change', function()
   {
      var input = $(this).parents('.input-group').find(':text');
      input.val($(this).val());
   });
   $('#indexYouTube2').magnificPopup(
   {
      type: 'iframe',
      iframe: { patterns: { youtube: { index: 'youtube.com/', id: null, src: '%id%' } } }
   });
   var indexCarousel1Opts =
   {
      delay: 4000,
      duration: 500,
      easing: 'linear',
      mode: 'forward',
      direction: '',
      scalemode: 3,
      pagination: true,
      pagination_img_default: 'images/k1.png',
      pagination_img_active: 'images/k2.png',
      pause: null,
      start: 0
   };
   $("#indexCarousel1").carousel(indexCarousel1Opts);
   $("a[data-rel='k1']").attr('rel', 'k1');
   $("#k1").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   $("#k1").photocollage({ effect: 'none', duration: 0, padding: 4, matrix: '2,0,1,0,0,1,1,1,1' });
   $("#wb_p1").tooltip(
   {
      hide: true,
      show: true,
      content: "<span style=\"color:#000000;font-family:'Montserrat';font-weight:600;font-size:13px;\">ЭЛЕКТРИЧЕСТВО</span><span style=\"color:#000000;font-family:Montserrat;font-size:13px;\"><br>Разрабатываем проект электромнабжения, получаем разрешение и проводим электричество</span>",
      items: '#wb_p1',
      position: { my: "center bottom", at: "center top", collision: "flipfit" },
      classes: { 'ui-tooltip' : 'indexToolTip1' }
   });
   $("#wb_p2").tooltip(
   {
      hide: true,
      show: true,
      content: "<span style=\"color:#000000;font-family:'Montserrat';font-weight:600;font-size:13px;\">КРОВЛЯ</span><span style=\"color:#000000;font-family:Montserrat;font-size:13px;\"><br>Монтируем кровлю, чтобы не было теплопотерь</span>",
      items: '#wb_p2',
      position: { my: "center bottom", at: "center top", collision: "flipfit" },
      classes: { 'ui-tooltip' : 'indexToolTip2' }
   });
   $("#wb_p4").tooltip(
   {
      hide: true,
      show: true,
      content: "<span style=\"color:#000000;font-family:'Montserrat';font-weight:600;font-size:13px;\">ГАЗ</span><span style=\"color:#000000;font-family:Montserrat;font-size:13px;\"><br>Составляем документацию, получаем разрешение на газификацию и проводим газ</span>",
      items: '#wb_p4',
      position: { my: "center bottom", at: "center top", collision: "flipfit" },
      classes: { 'ui-tooltip' : 'indexToolTip4' }
   });
   $("#wb_p5").tooltip(
   {
      hide: true,
      show: true,
      content: "<span style=\"color:#000000;font-family:'Montserrat';font-weight:600;font-size:13px;\">ФУНДАМЕНТ</span><span style=\"color:#000000;font-family:Montserrat;font-size:13px;\"><br>Проводим геологоразведку участка, готовим проект и устанавливаем фундамент</span>",
      items: '#wb_p5',
      position: { my: "center bottom", at: "center top", collision: "flipfit" },
      classes: { 'ui-tooltip' : 'indexToolTip5' }
   });
   $("#wb_p6").tooltip(
   {
      hide: true,
      show: true,
      content: "<span style=\"color:#000000;font-family:'Montserrat';font-weight:600;font-size:13px;\">ВОДА И КАНАЛИЗАЦИЯ</span><span style=\"color:#000000;font-family:Montserrat;font-size:13px;\"><br>Выбираем правильное место для скважины и добываем чистую воду; выводим канализацию</span>",
      items: '#wb_p6',
      position: { my: "center bottom", at: "center top", collision: "flipfit" },
      classes: { 'ui-tooltip' : 'indexToolTip6' }
   });
   $('#indexYouTube8').magnificPopup(
   {
      type: 'iframe',
      iframe: { patterns: { youtube: { index: 'youtube.com/', id: null, src: '%id%' } } }
   });
   $("a[data-rel='indexPhotoGallery2']").attr('rel', 'indexPhotoGallery2');
   $("#indexPhotoGallery2").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   $('#indexYouTube3').magnificPopup(
   {
      type: 'iframe',
      iframe: { patterns: { youtube: { index: 'youtube.com/', id: null, src: '%id%' } } }
   });
   $("a[data-rel='k3']").attr('rel', 'k3');
   $("#k3").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   $("#k3").photocollage({ effect: 'none', duration: 0, padding: 4, lazyload: true, matrix: '2,0,1,0,0,1,1,1,1' });
   $('#indexYouTube4').magnificPopup(
   {
      type: 'iframe',
      iframe: { patterns: { youtube: { index: 'youtube.com/', id: null, src: '%id%' } } }
   });
   $("a[data-rel='k4']").attr('rel', 'k4');
   $("#k4").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   $("#k4").photocollage({ effect: 'none', duration: 0, padding: 4, matrix: '2,0,1,0,0,1,1,1,1' });
   $('#indexYouTube5').magnificPopup(
   {
      type: 'iframe',
      iframe: { patterns: { youtube: { index: 'youtube.com/', id: null, src: '%id%' } } }
   });
   $("a[data-rel='k5']").attr('rel', 'k5');
   $("#k5").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   $("#k5").photocollage({ effect: 'none', duration: 0, padding: 4, matrix: '2,0,1,0,0,1,1,1,1' });
   $('#indexYouTube6').magnificPopup(
   {
      type: 'iframe',
      iframe: { patterns: { youtube: { index: 'youtube.com/', id: null, src: '%id%' } } }
   });
   $("a[data-rel='k6']").attr('rel', 'k6');
   $("#k6").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   $("#k6").photocollage({ effect: 'none', duration: 0, padding: 4, matrix: '2,0,1,0,0,1,1,1,1' });
   $('#indexYouTube9').magnificPopup(
   {
      type: 'iframe',
      iframe: { patterns: { youtube: { index: 'youtube.com/', id: null, src: '%id%' } } }
   });
   $("a[data-rel='k7']").attr('rel', 'k7');
   $("#k7").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   $("#k7").photocollage({ effect: 'none', duration: 0, padding: 4, matrix: '2,0,1,0,0,1,1,1,1' });
   $('#indexYouTube10').magnificPopup(
   {
      type: 'iframe',
      iframe: { patterns: { youtube: { index: 'youtube.com/', id: null, src: '%id%' } } }
   });
   $("a[data-rel='k8']").attr('rel', 'k8');
   $("#k8").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   $("#k8").photocollage({ effect: 'none', duration: 0, padding: 4, matrix: '2,0,1,0,0,1,1,1,1' });
   $('#indexYouTube11').magnificPopup(
   {
      type: 'iframe',
      iframe: { patterns: { youtube: { index: 'youtube.com/', id: null, src: '%id%' } } }
   });
   $("a[data-rel='k2']").attr('rel', 'k2');
   $("#k2").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   $("#k2").photocollage({ effect: 'none', duration: 0, padding: 4, matrix: '2,0,1,0,0,1,1,1,1' });
   $("a[href*='#m1']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_m1').offset().top }, 600, 'linear');
   });
   $("a[href*='#m2']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_m2').offset().top }, 600, 'linear');
   });
   $("a[href*='#m3']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_m3').offset().top }, 600, 'linear');
   });
   $("a[href*='#m4']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_m4').offset().top }, 600, 'linear');
   });
   $("a[href*='#m5']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_m5').offset().top }, 600, 'linear');
   });
   $("a[href*='#m6']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_m6').offset().top }, 600, 'linear');
   });
   $("a[href*='#m7']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_m7').offset().top }, 600, 'linear');
   });
   $('#pop3').on('show.bs.modal', function (e) 
   {
      $('#pop3 .modal-dialog').removeClass('animate-hide');
      $('#pop3 .modal-dialog').addClass('animate-show');
   });
   $('#pop3').on('hide.bs.modal', function (e)
   {
      $('#pop3 .modal-dialog').removeClass('animate-show');
      var element = document.getElementById('pop3');
      var forceReflow = element.offsetWidth;
      $('#pop3 .modal-dialog').addClass('animate-hide');
   });
   $("a[data-rel='indexPhotoGallery3']").attr('rel', 'indexPhotoGallery3');
   $("#indexPhotoGallery3").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   $("a[data-rel='indexPhotoGallery1']").attr('rel', 'indexPhotoGallery1');
   $("#indexPhotoGallery1").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   $('#pop1').on('show.bs.modal', function (e) 
   {
      $('#pop1 .modal-dialog').removeClass('animate-hide');
      $('#pop1 .modal-dialog').addClass('animate-show');
   });
   $('#pop1').on('hide.bs.modal', function (e)
   {
      $('#pop1 .modal-dialog').removeClass('animate-show');
      var element = document.getElementById('pop1');
      var forceReflow = element.offsetWidth;
      $('#pop1 .modal-dialog').addClass('animate-hide');
   });
   $('#pop2').on('show.bs.modal', function (e) 
   {
      $('#pop2 .modal-dialog').removeClass('animate-hide');
      $('#pop2 .modal-dialog').addClass('animate-show');
   });
   $('#pop2').on('hide.bs.modal', function (e)
   {
      $('#pop2 .modal-dialog').removeClass('animate-show');
      var element = document.getElementById('pop2');
      var forceReflow = element.offsetWidth;
      $('#pop2 .modal-dialog').addClass('animate-hide');
   });
   $('#pop4').on('show.bs.modal', function (e) 
   {
      $('#pop4 .modal-dialog').removeClass('animate-hide');
      $('#pop4 .modal-dialog').addClass('animate-show');
   });
   $('#pop4').on('hide.bs.modal', function (e)
   {
      $('#pop4 .modal-dialog').removeClass('animate-show');
      var element = document.getElementById('pop4');
      var forceReflow = element.offsetWidth;
      $('#pop4 .modal-dialog').addClass('animate-hide');
   });
   $("a[href*='#pop4']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#pop4').offset().top }, 600, 'linear');
   });
   $('#indexYouTube7').magnificPopup(
   {
      type: 'iframe',
      iframe: { patterns: { youtube: { index: 'youtube.com/', id: null, src: '%id%' } } }
   });
   $('img[data-src]').lazyload();
});
