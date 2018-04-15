$(document).ready(function(){
  var textblock = $('#events');
  var command = $('#commands');

  $('#start').click(function(){
    command.empty();
    textblock.append('<p>it\'s snowing outside</p>');
    command.append('<button id="window" class="btn">move to window?</button> <button class="btn stay">stay put</button>');
    $('#window').click(function(){
      textblock.empty();
      command.empty();
      textblock.append('<p>you see a mysterious shape moving in the distance</p>');
    })
  })
})
