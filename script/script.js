

// Date : 4 Sep 2018
// company Name : Source Bits

// Scrpits js is main load js
// define global value
// Pageloaded() call for onload function
function Pageloaded() {
  /***			
    CheckOnlineStatus("load");

    document.body.addEventListener("offline", function () {

        CheckOnlineStatus("offline")

    }, false);

    document.body.addEventListener("online", function () {

        CheckOnlineStatus("online")


    }, false);
	***/
}
// function call for internet connection check
// if no internet display msg no internet msg
function CheckOnlineStatus(msg) {
  
    var status = document.getElementById("status");
    var condition = navigator.onLine ? "ONLINE" : "OFFLINE";
    if(condition == "OFFLINE"){
       console.log(condition);
       var x = document.getElementById("snackbar");
       x.className = "show";
       setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    }


}

$.fn.ensureVisible = function(callback) {
    var $this = $(this).first();
    var $parent = $this.parent();
    var scrollTop = $parent.scrollTop();
    var scrollBottom = scrollTop + $parent.innerHeight();
    var marginTop = parseInt($this.css('margin-top'));
    var marginBottom = parseInt($this.css('margin-bottom'));
    var top = $this.position().top + scrollTop + marginTop;
    var bottom = top + $this.outerHeight();
    var newPosition = null;

    if (scrollTop > top - marginTop) {
      newPosition = {scrollTop: top - marginTop};
    } else if (scrollBottom < bottom + marginBottom) {
      newPosition = {scrollTop: bottom - $parent.innerHeight() + marginBottom};
    }

    if (newPosition) {
      $parent.animate(newPosition, {
        duration: 200,
        done: callback.bind(this)
      });
    } else {
      setTimeout(callback.bind(this));
    }

    return this;
  };

function showToast(msg){
  var ele = document.getElementById("toast");
  if(ele !== null){
    ele.innerHTML = msg;
    ele.className = "show";
    setTimeout(function(){
      var element = document.getElementById("toast");
      element.remove();
    }, 3000);
  } else{
    var newElem=document.createElement("div");
    document.body.appendChild(newElem);
    newElem.setAttribute("id","toast");
    newElem.innerHTML = msg;
    newElem.className = "show";
    setTimeout(function(){
      var element = document.getElementById("toast");
      element.remove();
    }, 3000);
  }
}
