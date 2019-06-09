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

  math(event) {

    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var idea = idAttr.nodeValue;

    var e = (<HTMLInputElement>document.getElementById(idea)).value;

    if (e === "C") {
      document.getElementById('screen').value = '';
    }


    else if (e === '=') {

      var str = document.getElementById('screen').value;
      document.getElementById('screen').value = eval(str);


    }


    else {
      document.getElementById('screen').value += e
    }

  }
}
