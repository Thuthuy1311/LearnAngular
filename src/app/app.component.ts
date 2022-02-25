import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstProject';
  @ViewChild('sidenav') sidenav?: MatSidenav;
  public isOpened = false;
  
  constructor (){
    // this.sidenav = 
  }
  /**
   * name
   */
  public openLeftSide(): void {
    this.isOpened = !this.isOpened;
    this.sidenav?.toggle();
  }
  /**
   * closeLeftSide
   */
  public closeLeftSide() {
    this.isOpened = false;
  }
}

