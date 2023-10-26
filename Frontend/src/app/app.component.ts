import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { BlockUiTemplateComponent } from './sharedModule/block-ui-template/block-ui-template.component';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @BlockUI('main-loader') blockUIList: NgBlockUI;
  public blockTemplate=BlockUiTemplateComponent;
  title = 'AdminDashboard';
  

  isSideNavCollapsed = false;
  screenWidth = 0;
  session:boolean;
  constructor(private authService:AuthService){
    this.session=this.authService.isAuthenticated();
  }
  ngOnInit(): void {
    this.session=this.authService.isAuthenticated();
  }
  
  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

}
