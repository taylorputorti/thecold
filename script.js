$(document).ready(function(){
  var textblock = $('#events');
  var command = $('#commands');
  var clear = function(){
    textblock.empty();
    command.empty();
  }

  $('#start').click(function(){
    command.empty();
    textblock.append('<p>it\'s snowing outside</p>');
    command.append('<button class="btn move">move to window?</button> <button class="btn stay">stay put</button>');

    $('.move').click(function(){
      clear();
      textblock.append('<p>you see a mysterious shape moving in the distance</p>');

    })

    $('.stay').click(function(){
      clear();
      textblock.append('<p>the wind howls, your house creaks</p>');
      command.append('<button class="move btn">move to window?</button> <button class="btn stay">stay put</button>');
      $('.move').click(function(){
        clear();
        textblock.append('<p>you see a mysterious shape moving in the distance</p>');
      })
    })
  })
})