 var homeTeam = []



 for(i=0; i<18; i++){
   var homeDiv = document.getElementById("homeDiv")
   var homePlayers = document.createElement("div")
   homePlayers.className = "homePlayers" + [i]
   homeDiv.appendChild(homePlayers)
   homeTeam.push(homePlayers)
 }
console.log(homeTeam)
 $( function() {
    $( "#homeDiv > *" ).draggable();
  } );

 for(i=0; i<18; i++){
   var awayDiv = document.getElementById("awayDiv")
   var awayPlayers = document.createElement("div")
   awayPlayers.className = "awayPlayers" + [i]
   awayDiv.appendChild(awayPlayers)
 }

 $( function() {
    $( "#awayDiv > *" ).draggable();
  } );

 $( function() {
    $( "#ball" ).draggable();
  } );

 function homePlay1() {
    $(".homePlayers0").css({"left": "528px", "top": "-88px"})
    $(".homePlayers1").css({"left": "666px", "top": "8px"})
    $(".homePlayers2").css({"left": "566px", "top": "10px"})
    $(".homePlayers3").css({"left": "412px", "top": "10px"})
    $(".homePlayers4").css({"left": "296px", "top": "8px"})
    $(".homePlayers5").css({"left": "308px", "top": "78px"})
    $(".homePlayers6").css({"left": "374px", "top": "76px"})
    $(".homePlayers7").css({"left": "448px", "top": "74px"})
    $(".homePlayers8").css({"left": "498px", "top": "76px"})
    $(".homePlayers9").css({"left": "330px", "top": "162px"})
    $(".homePlayers10").css({"left": "350px", "top": "166px"})
 }

 function homePlay2() {
    $(".homePlayers0").css({"left": "528px", "top": "-88px"})
    $(".homePlayers1").css({"left": "534px", "top": "50px"})
    $(".homePlayers2").css({"left": "562px", "top": "-8px"})
    $(".homePlayers3").css({"left": "468px", "top": "-14px"})
    $(".homePlayers4").css({"left": "366px", "top": "-6px"})
    $(".homePlayers5").css({"left": "268px", "top": "60px"})
    $(".homePlayers6").css({"left": "382px", "top": "50px"})
    $(".homePlayers7").css({"left": "390px", "top": "100px"})
    $(".homePlayers8").css({"left": "528px", "top": "58px"})
    $(".homePlayers9").css({"left": "330px", "top": "162px"})
    $(".homePlayers10").css({"left": "350px", "top": "166px"})
 }

 function homePlay3() {
    $(".homePlayers0").css({"left": "528px", "top": "-88px"})
    $(".homePlayers1").css({"left": "666px", "top": "8px"})
    $(".homePlayers2").css({"left": "566px", "top": "10px"})
    $(".homePlayers3").css({"left": "412px", "top": "10px"})
    $(".homePlayers4").css({"left": "296px", "top": "8px"})
    $(".homePlayers5").css({"left": "308px", "top": "90px"})
    $(".homePlayers6").css({"left": "364px", "top": "84px"})
    $(".homePlayers7").css({"left": "442px", "top": "82px"})
    $(".homePlayers8").css({"left": "500px", "top": "92px"})
    $(".homePlayers9").css({"left": "354px", "top": "46px"})
    $(".homePlayers10").css({"left": "350px", "top": "166px"})
 }

 function awayPlay1() {
    $(".awayPlayers0").css({"left": "528px", "top": "166px"})
    $(".awayPlayers1").css({"left": "350px", "top": "76px"})
    $(".awayPlayers2").css({"left": "428px", "top": "80px"})
    $(".awayPlayers3").css({"left": "538px", "top": "76px"})
    $(".awayPlayers4").css({"left": "600px", "top": "78px"})
    $(".awayPlayers5").css({"left": "314px", "top": "0px"})
    $(".awayPlayers6").css({"left": "374px", "top": "0px"})
    $(".awayPlayers7").css({"left": "442px", "top": "0px"})
    $(".awayPlayers8").css({"left": "496px", "top": "0px"})
    $(".awayPlayers9").css({"left": "332px", "top": "-82px"})
    $(".awayPlayers10").css({"left": "348px", "top": "-82px"})
 }

 function awayPlay2() {
    $(".awayPlayers0").css({"left": "528px", "top": "166px"})
    $(".awayPlayers1").css({"left": "474px", "top": "30px"})
    $(".awayPlayers2").css({"left": "346px", "top": "82px"})
    $(".awayPlayers3").css({"left": "566px", "top": "82px"})
    $(".awayPlayers4").css({"left": "450px", "top": "92px"})
    $(".awayPlayers5").css({"left": "258px", "top": "-8px"})
    $(".awayPlayers6").css({"left": "442px", "top": "30px"})
    $(".awayPlayers7").css({"left": "388px", "top": "-26px"})
    $(".awayPlayers8").css({"left": "530px", "top": "-18px"})
    $(".awayPlayers9").css({"left": "332px", "top": "-82px"})
    $(".awayPlayers10").css({"left": "348px", "top": "-82px"})
 }

 function awayPlay3() {
   $(".awayPlayers0").css({"left": "528px", "top": "166px"})
    $(".awayPlayers1").css({"left": "350px", "top": "76px"})
    $(".awayPlayers2").css({"left": "428px", "top": "80px"})
    $(".awayPlayers3").css({"left": "538px", "top": "76px"})
    $(".awayPlayers4").css({"left": "600px", "top": "78px"})
    $(".awayPlayers5").css({"left": "308px", "top": "-22px"})
    $(".awayPlayers6").css({"left": "368px", "top": "-10px"})
    $(".awayPlayers7").css({"left": "442px", "top": "-8px"})
    $(".awayPlayers8").css({"left": "496px", "top": "-20px"})
    $(".awayPlayers9").css({"left": "350px", "top": "-80px"})
    $(".awayPlayers10").css({"left": "334px", "top": "46px"})
 }

 function resetField() {
    $(".homePlayers0").css({"left": "0px", "top": "0px"})
    $(".homePlayers1").css({"left": "0px", "top": "0px"})
    $(".homePlayers2").css({"left": "0px", "top": "0px"})
    $(".homePlayers3").css({"left": "0px", "top": "0px"})
    $(".homePlayers4").css({"left": "0px", "top": "0px"})
    $(".homePlayers5").css({"left": "0px", "top": "0px"})
    $(".homePlayers6").css({"left": "0px", "top": "0px"})
    $(".homePlayers7").css({"left": "0px", "top": "0px"})
    $(".homePlayers8").css({"left": "0px", "top": "0px"})
    $(".homePlayers9").css({"left": "0px", "top": "0px"})
    $(".homePlayers10").css({"left": "0px", "top": "0px"})
    $(".homePlayers11").css({"left": "0px", "top": "0px"})
    $(".homePlayers12").css({"left": "0px", "top": "0px"})
    $(".homePlayers13").css({"left": "0px", "top": "0px"})
    $(".homePlayers14").css({"left": "0px", "top": "0px"})
    $(".homePlayers15").css({"left": "0px", "top": "0px"})
    $(".homePlayers16").css({"left": "0px", "top": "0px"})
    $(".homePlayers17").css({"left": "0px", "top": "0px"})
    $(".awayPlayers0").css({"left": "0px", "top": "0px"})
    $(".awayPlayers1").css({"left": "0px", "top": "0px"})
    $(".awayPlayers2").css({"left": "0px", "top": "0px"})
    $(".awayPlayers3").css({"left": "0px", "top": "0px"})
    $(".awayPlayers4").css({"left": "0px", "top": "0px"})
    $(".awayPlayers5").css({"left": "0px", "top": "0px"})
    $(".awayPlayers6").css({"left": "0px", "top": "0px"})
    $(".awayPlayers7").css({"left": "0px", "top": "0px"})
    $(".awayPlayers8").css({"left": "0px", "top": "0px"})
    $(".awayPlayers9").css({"left": "0px", "top": "0px"})
    $(".awayPlayers10").css({"left": "0px", "top": "0px"})
    $(".awayPlayers11").css({"left": "0px", "top": "0px"})
    $(".awayPlayers12").css({"left": "0px", "top": "0px"})
    $(".awayPlayers13").css({"left": "0px", "top": "0px"})
    $(".awayPlayers14").css({"left": "0px", "top": "0px"})
    $(".awayPlayers15").css({"left": "0px", "top": "0px"})
    $(".awayPlayers16").css({"left": "0px", "top": "0px"})
    $(".awayPlayers17").css({"left": "0px", "top": "0px"})
   $("#ball").css({"left": "210px", "top": "296px"})
 }
