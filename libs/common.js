$(document).ready(function(){
  
// Геолокация
              ymaps.ready(function(){
                  var geolocation = ymaps.geolocation;
        if (geolocation.region == 'Краснодарский край' || geolocation.region == 'Республика Адыгея' || geolocation.region == 'Ростовская область' || geolocation.region == 'Ставропольский край') {
          $('.iadres').html('г. Сочи, ул. Пирогова 12/1');
          $('.itelefon').html('+7(862)555-28-79');
          $('.itelefon').attr('href', 'tel:+78625552879')
		  

        } else {
    
        }
        
              });
// end Геолокация


  
  
})