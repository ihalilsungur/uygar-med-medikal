 
$(document).ready(function(){

    /**Ufak cihazlarda menü açma buttonu >>>>>>>>>>>>>>>>>>>>>>> */
    $("#HeaderMenuOpenButtonArea").on("click",function(){
        $("#HeaderMenuOpenButtonMenuBorderArea").slideToggle("slow");
        
    /**Ufak cihazlarda menü açma buttonu <<<<<<<<<<<<<<<<<<<<<<<<<<<< */
    });
    
    /**Menu ve Footer alanı için üstten boşluk bırakmayı ayarlama >>>>>>>>>>>>>>>>>>>>> */
     var dokumanGenisligi =  $(window).outerWidth();
    if(!$("#HeaderMesajAlani").length){
        if(dokumanGenisligi >=1200){/**XL */
            var ofsetDegeri = 108;
           }else if((dokumanGenisligi>=992) && (dokumanGenisligi <=1199)){/**L */
               var ofsetDegeri = 98;
           }else if((dokumanGenisligi>=768) && (dokumanGenisligi<=991)){/**M */
               var ofsetDegeri = 88;
           }else if((dokumanGenisligi >=576) && (dokumanGenisligi <=767)){/**S */
               var ofsetDegeri = 78;
           }else if(dokumanGenisligi <=574){
               var ofsetDegeri = 78;
           }
    }else{
        if(dokumanGenisligi >=1200){/**XL */
         var ofsetDegeri = 148;
        }else if((dokumanGenisligi>=992) && (dokumanGenisligi <=1199)){/**L */
            var ofsetDegeri = 138;
        }else if((dokumanGenisligi>=768) && (dokumanGenisligi<=991)){/**M */
            var ofsetDegeri = 118;
        }else if((dokumanGenisligi >=576) && (dokumanGenisligi <=767)){/**S */
            var ofsetDegeri = 108;
        }else if(dokumanGenisligi <=574){
            var ofsetDegeri = 103;
        }
    }
     $("main").css("top",ofsetDegeri);
     $("footer").css("top",ofsetDegeri);
    
     /**Sayfalarin boyutu değiştiğinde otomatik olarak sayfa boyutunu hesaplayıp ona gore yukarıdan boşluk bırakmayı düzenlesin */
     $(window).resize(function(){
        var dokumanGenisligi =  $(window).outerWidth();
        if(!$("#HeaderMesajAlani").length){
            if(dokumanGenisligi >=1200){/**XL */
                var ofsetDegeri = 108;
               }else if((dokumanGenisligi>=992) && (dokumanGenisligi <=1199)){/**L */
                   var ofsetDegeri = 98;
               }else if((dokumanGenisligi>=768) && (dokumanGenisligi<=991)){/**M */
                   var ofsetDegeri = 88;
               }else if((dokumanGenisligi >=576) && (dokumanGenisligi <=767)){/**S */
                   var ofsetDegeri = 78;
               }else if(dokumanGenisligi <=574){
                   var ofsetDegeri = 78;
               }
        }else{
            if(dokumanGenisligi >=1200){/**XL */
             var ofsetDegeri = 148;
            }else if((dokumanGenisligi>=992) && (dokumanGenisligi <=1199)){/**L */
                var ofsetDegeri = 138;
            }else if((dokumanGenisligi>=768) && (dokumanGenisligi<=991)){/**M */
                var ofsetDegeri = 118;
            }else if((dokumanGenisligi >=576) && (dokumanGenisligi <=767)){/**S */
                var ofsetDegeri = 108;
            }else if(dokumanGenisligi <=574){
                var ofsetDegeri = 103;
            }
        }
         $("main").css("top",ofsetDegeri);
         $("footer").css("top",ofsetDegeri);
     });
    
    });
    /**Menu ve Footer alanı için üstten boşluk bırakmayı ayarlama <<<<<<<<<<<<<<<<<<<<<< */
    
    /**Sık Sorulan Sorularda içerik gösterme ve gizleme >>>>>>>>>>>>>>>*/
    
    function SSSIcergiGoster(elementId){
      let x = document.getElementById(elementId);
     x.classList.toggle("SSSContentShow");
    }
    /**Sık Sorulan Sorularda içerik gösterme ve gizleme <<<<<<<<<<<<<<<<*/


    /* Google Maps settings */
    // Regular map
  function regular_map() {
    var var_location = new google.maps.LatLng(40.981667, 29.068887);

    var var_mapoptions = {
      center: var_location,
      zoom: 14
    };

    var var_map = new google.maps.Map(document.getElementById("map-container"),
      var_mapoptions);

    var var_marker = new google.maps.Marker({
      position: var_location,
      map: var_map,
      title: "Istanbul"
    });
  }

 