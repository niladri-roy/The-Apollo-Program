Shery.imageEffect("#back", {
  style : 5,
  config :{
    a : { 
      value : 1.49,
      range : [0 , 30]
    },
    b : {
      value : -1,
      range : [-1 , 1]
    },
    aspect : { value : 1.8822947576656774 },
    gooey : { value : true },
    infiniteGooey : { value : true },
    durationOut : { value : 1 , range : [0.1 , 5] },
    durationIn : { value : 1 , range : [0.1 , 5] },
    displaceAmount : { value : 0.1 },
    masker : { value : true },
    maskVal : { value : 1, range : [1 , 5] },
    scrollType : { value : 0 },
    geoVertex : { range : [1 , 64] , value : 1 },
    noEffectGooey : { value : false },
    onMouse : { value : 1 },
    noise_speed : { value : 0.59, range : [0 , 10] },
    metaball : { value : 0.15 , range : [0 , 2] },
    discard_threshold : { value : 0.5 , range : [0 , 1] },
    antialias : { value : 0 , range : [0 , 0.1] },
    noise_height : { value : 0.47 , range : [0 , 2] },
    noise_scale : { value : 12.15 , range : [0 , 100] },
  },
  gooey : true,
})



var elem = document.querySelectorAll(".elem")

elem.forEach(function (elem) {
  var h1s = elem.querySelectorAll("h1")
  var index = 0;
  var animating = false;

  document.querySelector("#back").addEventListener("click", () => {
      if (!animating){
        animating = true;

        gsap.to(h1s[index], {
          top: '-=100%',
          ease: Expo.easeInOut,
          duration: .9,
          onComplete: function () {
            gsap.set(this._targets[0], {
              top: "100%"
            })
            animating = false;
          }
        })

        index === h1s.length - 1 ? index = 0 : index++;

        gsap.to(h1s[index], {
          top: '-=100%',
          ease: Expo.easeInOut,
          duration: .9,
        })
      };
    })
})

var rightElems = document.querySelectorAll(".right-elems")

rightElems.forEach(function (rightElem) {
  var elem = rightElem.querySelectorAll(".right-elem")
  var index = 0;
  var animating = false;

  document.querySelector("#back").addEventListener("click", () => {
      if (!animating){
        animating = true;

        gsap.to(elem[index], {
          left: '-=100%',
          ease: Expo.easeInOut,
          duration: .9,
          onComplete: function () {
            gsap.set(this._targets[0], {
              left: "100%"
            })
            animating = false;
          }
        })

        index === elem.length - 1 ? index = 0 : index++;

        gsap.to(elem[index], {
          left: '-=100%',
          ease: Expo.easeInOut,
          duration: .9,
        })
      };
    })
})


var elem_sub_title = document.querySelectorAll(".elem-sub-title")

elem_sub_title.forEach(function (elem) {
  var h3s = elem.querySelectorAll("h3")
  var index = 0;
  var animating = false;

  document.querySelector("#back").addEventListener("click", () => {
      if (!animating){
        animating = true;

        gsap.to(h3s[index], {
          right: '-=100%',
          ease: Expo.easeInOut,
          duration: .9,
          onComplete: function () {
            gsap.set(this._targets[0], {
              right: "100%"
            })
            animating = false;
          }
        })

        index === h3s.length - 1 ? index = 0 : index++;

        gsap.to(h3s[index], {
          right: '-=100%',
          ease: Expo.easeInOut,
          duration: .9,
        })
      };
    })
})


document.addEventListener("DOMContentLoaded", function () {
  const reloadTitle = document.getElementById("reload-page");
  reloadTitle.addEventListener("click", function () {
    window.location.reload();
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const reloadTitle = document.getElementById("reload-page-button");
  reloadTitle.addEventListener("click", function () {
    window.location.reload();
  });
});

