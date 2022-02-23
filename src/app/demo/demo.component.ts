import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  public name = '';
  public password = '';
  constructor(
    private serverHttp: ServerHttpService
  ) { }

  ngOnInit(): void {
  }
  /**
   * onSubmit
   */
  public onSubmit() {
    console.log("name: ", this.name);
    console.log("password: ", this.password);
    this.addPosts();
  }
  public addPosts(): void{
    let newData = {"name": this.name , "password": this.password};
    this.serverHttp.addPosts(newData).subscribe((data) =>{
      console.log('data:', data);
    }, () => {
      console.log("err");
    });
  }
}
