$(document).ready(function(){

  $('.next').click(pulsanteNext);//funzione per spostare img verso destra(next)
  $('.prev').click(pulsantePrev); //funzione per spostare img a sinistra(prev)

  $('.nav i').click(function(){     //funzione per spostare pallino destra
    $('.nav i.active').removeClass('active');
    $(this).addClass('active');
  });

});
// richiamo funzione per spostare img verso destra(next)
function pulsanteNext(){

  var imgAttiva = $('.images img.active');
  var pallinoAttivo = $('.nav i.active');
// immagini next
  imgAttiva.removeClass('active');
  imgAttiva.next().addClass('active');
// pallini next
  pallinoAttivo.removeClass('active');
  pallinoAttivo.next().addClass('active');
  // immagini e pallini quando devono ricominciare dalla prima/primo
  if(imgAttiva.hasClass('last')){

    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active');
  }
}
//richiamo funzione per spostare img a sinistra(prev)
function pulsantePrev(){

  var imgAttiva = $('.images img.active');
  var pallinoAttivo = $('.nav i.active');
//immagini prev
  imgAttiva.removeClass('active');
  imgAttiva.prev().addClass('active');
//pallini prev
  pallinoAttivo.removeClass('active');
  pallinoAttivo.prev().addClass('active');
// / immagini e pallini quando devono ricominciare dall ultima/ultimo
  if(imgAttiva.hasClass('first')){

    $('.images img.last').addClass('active');
    $('.nav i.last').addClass('active');
  }
}
