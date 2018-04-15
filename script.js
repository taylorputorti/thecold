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

    //TREE A
    $('.move').click(function(){
      clear();
      textblock.append('<p>you see a mysterious shape moving in the distance</p>');
      command.append('<button class="move btn">check your door is locked</button> <button class="stay btn">remain still and try to get a closer look</button>');
      //DECISION 1A
      $('.stay').click(function(){
        clear();
        textblock.append('<p>the shambling figure draws closer, wearing clothing unappropriate for the weather</p><p>you think you may recognize them</p>');

      }) // decision 1a
      //DECISION 1B
      $('.move').click(function(){
        clear();
        textblock.append('<p>you rush to your door</p> <p>it was open</p><p>you quickly lock the deadbolt</p>');
        command.append('<button class="move btn">fetch your shotgun</button><button class="stay btn">return to the window</button>');
        //DECISION 2A
        $('.move').click(function(){
          clear();
          textblock.append('<p>you move into the kitchen to grab your gun</p><p>in the window over the sink, you see more shadowy figures climbing the hill behind your house</p>');
        }) // decision 2a
        //  DECISION 2B
        $('.stay').click(function(){

        }) // decision 2b
      }) //decision 1b
    }) // tree a

    //TREE B
    $('.stay').click(function(){
      clear();
      textblock.append('<p>the wind howls, your house creaks</p><p>actually... there might be another sound outside</p><p>it\'s not a sound you\'ve heard before</p>');
      command.append('<button class="move btn">move to window?</button> <button class="btn stay">stay put</button>');
      //DECISION 1A
      $('.move').click(function(){
        clear();
        textblock.append('<p>you see a mysterious shape moving in the distance</p>');
        command.append('<button class="move btn">check your door is locked</button> <button class="stay btn">remain still and try to get a closer look</button>');
        //DECISION 2A
        $('.move').click(function(){

        })// decision 2a
        //DECISION 2B
        $('.stay').click(function(){
          clear();
          textblock.append('<p>the shambling figure draws closer, wearing clothing unappropriate for the weather</p><p>you think you may recognize them</p>');
      }) //decision 2b
    }) //decision 1a
      //DECISION 1B
      $('.stay').click(function(){
        clear();
        textblock.append('<p>what is that awful sound?</p>');
        command.append('<button class="move btn">move to window?</button> <button class="btn stay">stay put</button>');
        //DECISION 2A
        $('.move').click(function(){

        })//decision 2a
        //DECISION 2B
        $('.stay').click(function(){
          clear();
          textblock.append('<p>your front door bursts open</p><p>the creature shambles inside</p><p>you recognize it as mr. timmons, the gardener from down the hill who died last week</p><p>you barely have the chance to scream before he starts to devour you</p>');
          command.append('<button class="btn refresh">try again?</button>');
            $('.refresh').click(function(){
              location.reload(); })
        })//decision 2b
      }) //decision 1b
    }) //tree b
  }) // start
}) // doc ready
