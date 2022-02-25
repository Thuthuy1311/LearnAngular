import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Thu Thủy';
  public age = 18;
  public vihicles = ['Toyato', 'Yamaha', 'Honda'];
  constructor(private common: CommonService) { 
    this.age = common.age;
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  
  public tangtuoi(){
    this.common.age++;
    this.age = this.common.age;
  }
  

}
