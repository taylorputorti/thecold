$(document).ready(function(){
  var textblock = $('#events');
  var command = $('#commands');
  var clear = function(){
    textblock.empty();
    command.empty();
  }
  var timer = 1600;
  var fadeLoop = function(){
   $('p').each(function(){
     $(this).hide().fadeIn(timer);
     timer += 1600;
    })}
  var buttonFade = function(){
    $('button').hide().fadeIn(8000);
  }

//text snips
  var windowView = function(){
    textblock.append('<p>you see a mysterious shape moving in the distance</p>');
    command.append('<button class="move btn">check your door is locked</button> <button class="stay btn">remain still and try to get a closer look</button>');
    }
  var windowCloser = function(){
    textblock.append('<p>the shambling figure draws closer, wearing clothing inapropriate for the weather</p><p>you think you may recognize this person</p>');
    command.append('<button class="move btn">fetch your shotgun</button><button class="stay btn">barricade the window</button>');
  }
  var windowReturn = function(){
    textblock.append('<p>you walk back towards the window</p><p>the figure has drawn closer</p><p>you can see it is missing an arm and part of its face</p>');
    command.append('<button class="move btn">take cover upstairs</button><button class="stay btn">barricade the window</button>');
  }
  var fetchGun = function(){
    textblock.append('<p>you move into the kitchen and grab your gun</p><p>in the window over the sink, you see more shadowy figures climbing the hill behind your house</p>');
    command.append('<button class="move btn">barricade your windows</button><button class="stay btn">try to get a closer look</button>');
  }
  var lockDoor = function(){
    textblock.append('<p>you rush to your door</p><p>it was open</p><p>you quickly lock the deadbolt</p>');
    command.append('<button class="move btn">fetch your shotgun</button><button class="stay btn">return to the window</button>');
  }
   var barricadeWindow = function(){
    textblock.append('<p>you prop a table against the window</p><p>it will hold for a little while at least</p>');
    command.append('<button class="move btn">take cover upstairs</button><button class="stay btn">reinforce barricade</button>');
  }
  var hillView = function(){
    textblock.append('<p>the figures shamble closer</p><p>you can barely make out their features in the dim moonlight</p><p>there\'s little ellie epcott who died of a fever a few days ago</p><p>and there\'s paul shoal, the butcher who went missing in early november</p><p>their skin is rotting</p>');
    command.append('<button class="move btn">take cover upstairs</button><button class="stay btn">barricade windows</button>');
  }
  var upStairs = function(){
    textblock.append('<p>you make your way up the creaking staircase</p><p>you can hear glass shattering behind you</p><p>there\'s a baseball bat under your bed</p><p>the attic entrance is a well-hidden trapdoor</p>');
    command.append('<button class="move btn">continue to attic</button><button class="stay btn">hide in your bedroom</button>');
  }
  //command.append('<button class="move btn"></button><button class="stay btn"></button>')

  $('#start').click(function(){
    command.empty();
    textblock.append('<p id="one">it has started snowing</p><p id="two">you can see the flurries outside your living room window</p><p id="three">strange things have been happening since winter started</p><p id="four">people going missing and disturbing noises in the night</p>');
    command.append('<button class="btn move">go to window?</button> <button class="btn stay">stay put</button>');
   fadeLoop();
   buttonFade();

    //TREE A
    $('.move').click(function(){
      clear();
      windowView();
      fadeLoop();
      buttonFade();
      //DECISION 1A
      $('.stay').click(function(){
        clear();
        windowCloser();
        //DECISION 2A
        $('.move').click(function(){
          clear();
          fetchGun();
          //DECISION 3A
           $('.move').click(function(){
             clear();
             barricadeWindow();
           }) // decision 3a
          //DECISION 3B
          $('.stay').click(function(){
            clear();
            hillView();
          }) //decision 3b
        }) // decision 2a
        //DECISION 2B
        $('.stay').click(function(){
          clear();
          windowCloser();
          //DECISION 3A
          $('.move').click(function(){
            clear();
            fetchGun();
          }) // decision 3a
          //DECISION 3B
          $('.stay').click(function(){
            clear();
            barricadeWindow();
          }) // decision 3b
        }) //decision 2b
      }) // decision 1a
      //DECISION 1B
      $('.move').click(function(){
        clear();
        lockDoor();
        //DECISION 2A
        $('.move').click(function(){
          clear();
          fetchGun();
          //DECISION 3A
          $('.move').click(function(){
            clear();
            barricadeWindow();
          }) // decision 3a
          //DECISION 3B
          $('.stay').click(function(){
            clear();
            hillView();
          })
        }) // decision 2a
        //  DECISION 2B
        $('.stay').click(function(){
          clear();
          windowReturn();
          //DECISION 3A
          $('.move').click(function(){
            clear();
            upStairs();
          }) // decision 3a
          //DECISION 3B
          $('.stay').click(function(){
            clear();
            barricadeWindow();
          }) // decision 3b
        }) // decision 2b
      }) //decision 1b
    }) // tree a

    //TREE B
    $('.stay').click(function(){
      clear();
      textblock.append('<p>the wind howls, your house creaks</p><p>actually... there might be another sound outside</p><p>it\'s not a sound you\'ve heard before</p>');
      command.append('<button class="move btn">go to window?</button> <button class="btn stay">stay put</button>');
      //DECISION 1A
      $('.move').click(function(){
        clear();
        windowView();
        //DECISION 2A
        $('.move').click(function(){
          clear();
          lockDoor();
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
          clear();
          textblock.append('<p>a shambling figure approaches</p><p>you can see it is missing an arm and part of its face</p><p>how is it still moving?</p>');
          command.append('<button class="move btn">check your door is locked</button><button class="stay btn">barricade the window</button>');
          //DECISION 3A
          $('.move').click(function(){
            clear();
            textblock.append('<p>you rush to your door</p><p>it was open</p><p>you quickly lock the deadbolt</p>');
            command.append('<button class="move btn">fetch your shotgun</button><button class="stay btn">barricade your window</button>');
          })//decision 3a
          //DECISION 3B
          $('.stay').click(function(){
            clear();
            textblock.append('<p>you push your bookcase in front of the window</p><p>unfortunately, the door was unlocked</p><p>your front door bursts open</p><p>the creature shambles inside</p><p>you recognize it as mr. timmons, the gardener from down the hill who died last week</p><p>you barely have the chance to scream before he starts to devour you</p>');
            command.append('<button class="btn refresh">try again?</button>');
            $('.refresh').click(function(){
              location.reload(); })
          })//decision 3b
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
