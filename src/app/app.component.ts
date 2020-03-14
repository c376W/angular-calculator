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
  pad_names3=['+/-','0','.','='];
  display="0";
  entered_num="";
  operators=['+','-','*','/','='];
  res="";

  inputNum(num){
    if(this.display.length===8 && this.operators.indexOf(num)<0) return; 
    
    // When the first input is an operator
    if(this.entered_num.length===0 && this.operators.indexOf(num)>=0){
      this.display="0";
    }else if(this.operators.indexOf(num)>=0
    && this.operators.indexOf(this.display.charAt(this.display.length-1))>=0){}
    else if(this.operators.indexOf(num)>=0){
      this.display=String(num);
      this.entered_num+=String(num);
    }      
    else{
      if(this.operators.indexOf(this.display)>=0 || this.display==="0") this.display="";
      this.entered_num+=String(num);
      this.display+=String(num);
    }
      
  }
  calRes(){
    // Just in case the last entered number is an operator
    if(this.operators.indexOf(this.entered_num.charAt(this.entered_num.length-1))>=0){
      this.entered_num=this.entered_num.substr(0,this.entered_num.length-1);
      this.entered_num="";
    }
    this.res=String(eval(this.entered_num));
    if(this.res.length>8) {
      this.display="ERR";
      this.entered_num="";
      return;
    }
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
  changeSign(){
    if(this.operators.indexOf(this.entered_num[0])<0){
      this.entered_num="-"+this.entered_num;
      this.display=this.entered_num;
    }else{
      this.entered_num=this.entered_num.substr(1);
      this.display=this.entered_num;
    }
  }
}

