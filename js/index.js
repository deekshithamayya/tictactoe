$("#reset").hide();
$("#ttt").hide();
$("#msg").html("X or O?");
$("#pc,#you").hide();
$("body").css("background-color","#57bc90");
$(".jumbotron").css("color","#57bc90");
var b=2;
var x,o;
var user='';
var pc='';
var board=[b,b,b,b,b,b,b,b,b];
function choose(par){
   $("#ttt").css("pointer-events","auto");
  $("#x,#o").hide();
  $("#reset").show();
   for(i=0;i<board.length;i++){
    $("#p"+i).css("pointer-events","auto");
  }
   
  $("#ttt").show();
  $("#reset").css("color","#008f95");
   $("body").css("background-color","#008f95");
  $(".jumbotron").css("color","#008f95");
  $("#msg").hide();
  $("#you").fadeIn(300);
  $("#pc").hide();
  $("#you").html("Your turn");
  if(par=='x'){
    user='x';
    pc='o';
   x=3;
    o=5;
  }
  else{
    user='o';
    pc='x';
    o=3;
    x=5;
  }
}
function me(par){
   $("#ttt").css("pointer-events","none");
    for(i=0;i<board.length;i++){
    $("#p"+i).css("pointer-events","none");
  }
   $("#reset").css("color","#eb6e80");
  $("body").css("background-color","#eb6e80");
  $(".jumbotron").css("color","#eb6e80");
  $("#pc").fadeIn(300);
  $("#pc").html("PC's turn");
  $("#you").fadeOut(300);
  board[par]=3;
  fill(par,user);
  var status=checkwin();
  if(status==false){
  
  setTimeout('nextmove()','2000');
    
  }
}
function checkwin(){
    if(((board[0]==3)&&(board[1]==3)&&(board[2]==3))||((board[3]==3)&&(board[4]==3)&&(board[5]==3))||((board[6]==3)&&(board[7]==3)&&(board[8]==3))||((board[0]==3)&&(board[3]==3)&&(board[6]==3))||((board[1]==3)&&(board[4]==3)&&(board[7]==3))||((board[2]==3)&&(board[5]==3)&&(board[8]==3))||((board[0]==3)&&(board[4]==3)&&(board[8]==3))||((board[2]==3)&&(board[4]==3)&&(board[6]==3))){
      yay("youwin");
      return true;
    }
  else{
  for(var i=0;i<board.length;i++){
    if(board[i]==b){
      return false;
    }
  }
   yay("draw");
   return true;
  }
      
}
function fill(loc,sym){
   $("#p"+loc).css("pointer-events","none");
  if (sym==pc)
  $("#p"+loc).css("color","#eb6e80");
  else
     $("#p"+loc).css("color","#008f95");
  sym=sym.toUpperCase();
  $("#p"+loc).html(sym);
  
  
}
function nextmove(){
  $("#ttt").css("pointer-events","auto");
   for(i=0;i<board.length;i++){
     if(board[i]==2)
    $("#p"+i).css("pointer-events","auto");
  }
   $("#reset").css("color","#008f95");
   $("body").css("background-color","#008f95");
  $(".jumbotron").css("color","#008f95");
  $("#you").fadeIn(300);
  $("#you").html("Your turn");
  $("#pc").fadeOut(300);
  var status;
  status=win('0','1','2');
  if (status==true) return;
  status=win('3','4','5');
   if (status==true) return;
  status=win('6','7','8');
   if (status==true) return;
  status=win('0','3','6');
   if (status==true) return;
  status=win('1','4','7');
   if (status==true) return;
  status=win('2','5','8');
   if (status==true) return;
  status=win('0','4','8');
   if (status==true) return;
  status=win('2','4','6');
   if (status==true) return;
  status=block('0','1','2');
   if (status==true) return;
  status=block('3','4','5');
   if (status==true) return;
  status=block('6','7','8');
   if (status==true) return;
  status=block('0','3','6');
   if (status==true) return;
  status=block('1','4','7');
   if (status==true) return;
  status=block('2','5','8');
   if (status==true) return;
  status=block('0','4','8');
   if (status==true) return;
  status=block('2','4','6');
   if (status==true) return;
  determine();
  return;
}
 function win(p,q,r){
   var temp;
   if(board[p]*board[q]*board[r]==50){
     if(board[p]==2) temp=p;
     if(board[q]==2) temp=q;
     if(board[r]==2) temp=r;
     board[temp]=5;
     fill(temp,pc);
     yay("pcwins");
     return true;
     }
 }
function block(p,q,r){
  if(board[p]*board[q]*board[r]==18){
     if(board[p]==2) temp=p;
     if(board[q]==2) temp=q;
     if(board[r]==2) temp=r;
     board[temp]=5;
     fill(temp,pc);
     return true;
     }
 }
function determine(){
  var arr=[];
  if(board[4]==2){
    board[4]=5;
    fill(4,pc);
  }
  else if((board[1]==2)||(board[1]==2)||(board[1]==2)||(board[1]==2)){
  if(board[1]==2) arr.push(1);
  if(board[3]==2) arr.push(3);
  if(board[5]==2) arr.push(5);
  if(board[7]==2) arr.push(7);
  var temp=arr[Math.floor(Math.random()*arr.length)];
    board[temp]=5;
    fill(temp,pc);
  }  
  else if((board[0]==2)||(board[2]==2)||(board[6]==2)||(board[8]==2)){
     if(board[0]==2) arr.push(0);
  if(board[2]==2) arr.push(2);
  if(board[6]==2) arr.push(6);
  if(board[8]==2) arr.push(8);
  var temp=arr[Math.floor(Math.random()*arr.length)];
    board[temp]=5;
    fill(temp,pc);
   }
}
function reset(){
  $("#ttt").css("opacity","1");
  $("#pc").hide();
  $("#you").hide();
  $("#reset").hide();
  $("#msg").show();
  $("body").css("background-color","#57bc90");
  $(".jumbotron").css("color","#57bc90");
  $(".jumbotron").html("Tic Tac Toe");
  $("#x,#o").show();
  board=[b,b,b,b,b,b,b,b,b];
  for(i=0;i<9;i++){
    $("#p"+i).html('');
  }
  $("#ttt").hide();
   $("#msg").html("X or O?")
  
 
   
}
function yay(par){
  $("#ttt").css("opacity","0.5");
  $("#pc").hide();
  $("#you").hide();
  $("#msg").show();
   $("body").css("background-color","#57bc90");
  $(".jumbotron").css("color","#57bc90");
     $("#ttt").css("pointer-events","none");
   $("#reset").hide();
  if (par=="pcwins"){
      $("#msg").html("You lost");
      setTimeout("reset()",4000);
  }
  if (par=="youwin"){
     $("#msg").html("You win!");
      setTimeout("reset()",4000);
  }
  if (par=="draw"){
      $("#msg").html("Draw");
      setTimeout("reset()",4000);
  }
  
}