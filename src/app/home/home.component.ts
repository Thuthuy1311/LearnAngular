import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Thu Thủy';
  public age = 17;
  public vihicles = ['Toyato', 'Yamaha', 'Honda'];
  constructor() { }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  public tangtuoi(){
    this.age++;
}
  

}
