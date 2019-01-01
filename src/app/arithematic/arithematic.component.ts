import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-arithematic',
  templateUrl: './arithematic.component.html',
  styleUrls: ['./arithematic.component.css']
})
export class ArithematicComponent implements OnInit {



  constructor() {

 }


  ngOnInit() {
    /*var keys = document.querySelectorAll('.keys');
    keys[0].click =()=>{
      alert(keys[0]);*/
    }

    math(event){



      var target = event.target || event.srcElement || event.currentTarget;
      var idAttr = target.attributes.id;
      var idea = idAttr.nodeValue;

      var e =  (<HTMLInputElement>document.getElementById(idea)).value;

      if (e==="C"){
        document.getElementById('screen').innerHTML = '';
      }


      else if (e==='='){

        var str = document.getElementById('screen').innerHTML;

        var x = '';
        var y = '';
        var opt = '';
        var flag= 0;

        for (let i=0; i<str.length; i++){

          if ((str[i].charCodeAt(0)>47 && str[i].charCodeAt(0)<58 && flag===0)|| str[i].charCodeAt(0)===46){
            x+=str[i];
          }
          else if(y.length===0 && opt.length===0 ){
            if (str.length-1===i){
              break;
            }
            opt +=str[i];
            flag=1;
          }
          else if((str[i].charCodeAt(0)>47 && str[i].charCodeAt(0)<58 && flag===1)||str[i].charCodeAt(0)===46){
            y+=str[i];
          }
          else {
            var x1 = Number(x);
            var y1 = Number(y);
            if (opt.charCodeAt(0) ===43){
              x1 = x1+y1;
            }
            else if(opt.charCodeAt(0) ===42){
              x1 = x1*y1;
            }
            else if (opt.charCodeAt(0) ===45){
              x1 = x1-y1;
            }
            else if (opt.charCodeAt(0) ===47){
              x1= x1/y1;
            }
            else{
              x1 = Math.pow(x1, y1);
            }

            x = x1.toString();
            y='';
            opt = str[i];
          }
        }
        //at last
        var x1 = Number(x);
        var y1 = Number(y);
        if (opt.charCodeAt(0) ===43){
          x1 = x1+y1;
        }
        else if(opt.charCodeAt(0) ===42){
          x1 = x1*y1;
        }
        else if (opt.charCodeAt(0) ===45){
          x1 = x1-y1;
        }
        else if (opt.charCodeAt(0) ===47){
          x1= x1/y1;
        }
        else if (opt.charCodeAt(0) ===94){
          x1 = Math.pow(x1, y1);
        }

        //result

        document.getElementById('screen').innerHTML = x1.toString();


      }


      else{

        document.getElementById('screen').innerHTML += e
      }

    }
}
