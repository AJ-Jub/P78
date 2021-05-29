var reasons =[
    "Danielle Jubinville (Mom)",
    "Marcel Jubinville (Dad)",
    "AJ Jubinville (Me)",
    "Anthony Jubinville (Brother)",
    "Alain Jubinville (Other Brother)"
  ];
   var images =[
     "20210214_145125.jpg",
     "20210417_135721.jpg",
     "20210417_140140.jpg",
     "20210417_140346.jpg",
     "20210417_140405"
   ] ;
  
  var i = 0;
  function nextslide() {
    document.getElementById("Names").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
    document.getElementById("song").play();
  }