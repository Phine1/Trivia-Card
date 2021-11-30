$(document).ready(() => {
    $('.hint-box').on('click', ()=> {
      $('.hint').slideToggle(700)
    })
    
    $('.wrong-answer-one').on('click', ()=> {
      $('.wrong-text-one').fadeOut(600)
      $('.frown').show()
    })
    $('.wrong-answer-two').on('click', ()=> {
        $('.wrong-text-two').fadeOut('slow')
        $('.frown').show()
    })
    $('.wrong-answer-three').on('click', ()=> {
      $('.wrong-text-three').fadeOut('fast')
      $('.frown').show()
    })
    
    $('.correct-answer').on('click', ()=> {
      $('.wrong-text-three').fadeOut('fast')
         $('.wrong-text-two').fadeOut('slow')
         $('.wrong-text-one').fadeOut(600)
      $('.frown').hide()
        $('.smiley').show()
    })
    $('button').on('click', ()=> {
      $('.wrong-text-three').show();
      $('.wrong-text-two').show();
      $('.wrong-text-one').show();
      $('.frown').hide();
      $('.smiley').hide();
    })
    });