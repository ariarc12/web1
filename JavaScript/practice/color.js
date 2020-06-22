var Body = {
    setColor:function(color){
      document.querySelector('body').style.color=color;  
    },
    setBackgroundColor:function(color){
      document.querySelector('body').style.backgroundColor=color;
    }
  }

  var Link = {
    setColor:function(color){
      var alist = document.querySelectorAll('a')
      var i=0;
      while(i<alist.length){
        alist[i].style.color=color;
        i+=1
      }
    }
  }

  function Button(self){
    if(self.value === 'night'){
    Body.setColor('white');
    Body.setBackgroundColor('black');
    self.value = 'day';

    Link.setColor('powderblue');
  }else{
    Body.setColor('black');
    Body.setBackgroundColor('white');
    self.value = 'night';

    Link.setColor('blue');
  }
  
  }