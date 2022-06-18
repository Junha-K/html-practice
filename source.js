   function FrameHandler(self){
   if(self.className === 'frame'){
   self.className = 'expanded';
   }else {
   self.className = 'frame';
   }
   }
   function AddorHideLink(self){
   if(self.className === 'expanded'){
   let a = document.createElement('a');
   var linktext = document.createTextNode("hunkim.github.io");
   a.title = "moving to hunkim.github.io";
   a.href = "https://hunkim.github.io/ml/";
   a.appendChild(linktext);
   var element = document.getElementById('collection1');
   element.appendChild(a);
   }else{
   let links = document.getElementById('collection1');
   links.removeChild(links.lastChild)
   }
   }

