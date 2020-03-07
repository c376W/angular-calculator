import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Input() data;
  pad_display="";
  constructor() { }
  
  ngOnInit() {
    this.pad_display=this.data;
    console.log(this.data);
  }

}
