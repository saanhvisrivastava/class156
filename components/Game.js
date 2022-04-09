AFRAME.registerComponent("game-play", {
  schema: {
    elementId: { type: "string", default: "#ring1" },
  },

  init:function(){
    var duration=120;
    var timerE1=document.querySelector('#timer');
    this.starttimer(duration,timerE1)

    
  },

  starttimer:function(duration,timerE1){
  setInterval(
    ()=>{
    if(duration>=0){
      var minute=parseInt(duration/60)
      var second=parseInt(duration%60)

      if(minute<10){
        minute='0'+minute
      }
      if(second<10){
        second='0'+second
      }

      timerE1.setAttribute('text',{
        value:minute+':'+second
      })
      duration-=1
    }


    },1000
  )
  },



  

  update: function () {
    this.isCollided(this.data.elementId);
  },

  isCollided: function (elementId) {
    const element = document.querySelector(elementId);
    element.addEventListener("collide", (e) => {
      if (elementId.includes("#ring")) {
        console.log(elementId + " collision");
      } else if (elementId.includes("#hurdle")) {
        console.log("bird collision");
      }
    });
  },
});
