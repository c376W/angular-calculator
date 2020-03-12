import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pad_names=['7','8','9','*'];
  pad_names1=['4','5','6','-'];
  pad_names2=['1','2','3','+'];
  display="0";
  entered_num="";
  operators=['+','-','*','/'];
  res="";

  inputNum(num){
    if(this.display.length<8){
      // When the first input is an operator
      if(this.display.length===0 && this.operators.indexOf(num)>=0){
        this.display="0";
      }else if(this.operators.indexOf(num)>=0
      && this.operators.indexOf(this.display.charAt(this.display.length-1))>=0){}      
      else{
        this.entered_num+=String(num);
        this.display=this.entered_num;
      }
        
    }
      
  }
  calRes(){
    // Just in case the last entered number is an operator
    if(this.operators.indexOf(this.display.charAt(this.display.length-1))>=0){
      this.display=this.display.substr(0,this.display.length-1);
      this.entered_num="";
    }
    this.res=String(eval(this.display));
    this.display=this.res;
    this.entered_num=this.display;
  }

  clearLast(){
    if(this.entered_num.length===1) this.display="0";
    else{
      this.entered_num=this.entered_num.substr(0,this.entered_num.length-1);
      this.display=this.entered_num;
    }
  }
  clearAll(){
    this.display="0";
    this.entered_num="";

  }
}

// test
// test1
//test2
// test3