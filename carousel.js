var scheight = screen.height;
console.log(scheight);
if(scheight > 1000){

}
else{
    console.log("here");
  var cards = document.getElementsByClassName('figure-caption');
  console.log(cards);
  for (var i = 0; i < cards.length; i++) { 
      console.log("there");
        cards[i].style.fontSize = '10px';
    }
}


var myModule = angular.module('myApp', []);
myModule.controller("TextController", function($scope, $interval, $document, $timeout) {

  $scope.videoVisible = false;
  var video = $('#video1')[0];

  $scope.hideVideo = function() {
    $scope.videoVisible = false;
  }
  //function to call
  $scope.pause = function() {
    video.pause();
    video.currentTime = 0;
    console.log("user active");
    document.getElementById("tas").style.display = "block";
    $scope.videoVisible = false;


  };

  $scope.play = function() {
    document.getElementById("tas").style.display = "none";

    $scope.videoVisible = true;
    video.currentTime = 0;
    video.load();
    video.play();
    console.log("user inActive");
  }

  //main function
  //functionName - specify the function that needs to be repeated for the intervalTime
  //intervalTime - the value is in milliseconds, the functionName is continuously repeated for this time.
  //timeoutValue - the value is in milliseconds, when this value is exceeded the function given in functionName is stopped

  monitorTimeout($scope.pause, 1000, 300000);

  function monitorTimeout(functionName, intervalTime, timeoutValue) {
    //initialization parameters
    timeoutValue = timeoutValue || 300000;
    intervalTime = intervalTime || 1000;
    // Start a timeout
    var TimeOut_Thread = $timeout(function() {
      TimerExpired()
    }, timeoutValue);
    var bodyElement = angular.element($document);

    /// Keyboard Events
    bodyElement.bind('keydown', function(e) {
      TimeOut_Resetter(e)
    });
    bodyElement.bind('keyup', function(e) {
      TimeOut_Resetter(e)
    });

    /// Mouse Events    
    bodyElement.bind('click', function(e) {
      TimeOut_Resetter(e)
    });
    bodyElement.bind('mousemove', function(e) {
      TimeOut_Resetter(e)
    });
    bodyElement.bind('DOMMouseScroll', function(e) {
      TimeOut_Resetter(e)
    });
    bodyElement.bind('mousewheel', function(e) {
      TimeOut_Resetter(e)
    });
    bodyElement.bind('mousedown', function(e) {
      TimeOut_Resetter(e)
    });

    /// Touch Events
    bodyElement.bind('touchstart', function(e) {
      TimeOut_Resetter(e)
    });
    bodyElement.bind('touchmove', function(e) {
      TimeOut_Resetter(e)
    });

    /// Common Events
    bodyElement.bind('scroll', function(e) {
      TimeOut_Resetter(e)
    });
    bodyElement.bind('focus', function(e) {
      TimeOut_Resetter(e)
    });

    function TimerExpired() {
      if (theInterval) {
        $scope.play();
        $interval.cancel(theInterval);
        theInterval = undefined;
      }
    }

    function TimeOut_Resetter(e) {
      if (!theInterval) {
        theInterval = $interval(function() {
          functionName();
        }.bind(this), intervalTime);
      }

      /// Stop the pending timeout
      $timeout.cancel(TimeOut_Thread);

      /// Reset the timeout
      TimeOut_Thread = $timeout(function() {
        TimerExpired()
      }, timeoutValue);
    }

    var theInterval = $interval(function() {
      functionName();
    }.bind(this), intervalTime);
  }
});