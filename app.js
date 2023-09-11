var minutes =0;
var seconds =0;
var millisec =0;

var a = document.getElementById('min');
var b = document.getElementById('sec');
var c = document.getElementById('msec');
var clock;

function start(){

    clock = setInterval (function(){
        millisec++;
        if (millisec<10){
            c.innerHTML='0'+ millisec;    
        }
        else if (millisec>=10){
            c.innerHTML=millisec;
         }
        
        
         if (millisec==100){
          seconds++;
            if(seconds<10){
                b.innerHTML='0'+ seconds +' :';
            }
            else if(seconds>=10){
                b.innerHTML= seconds +' :';
            }
            
            millisec=0;
        
        }
        
        else if (seconds>=59){
          minutes++;
          if (minutes<10){
            a.innerHTML='0'+minutes +' :';
          }
          if (minutes>10){
            a.innerHTML=minutes +' :';
          }
          
          seconds=0;
        
        }
        document.getElementById('start').disabled=true;
        },10)
        

}

function stop(){
clearInterval(clock);
document.getElementById('start').disabled=false;
}

function end(){
    minutes=0+'0 :';
    seconds=0+'0 :';
    millisec=0+'0';

    a.innerHTML=minutes;
    b.innerHTML=seconds;
    c.innerHTML=millisec;


}