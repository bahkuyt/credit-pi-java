import { Component, HostListener, Input, OnInit } from '@angular/core';
import { languages, notifications, userItems } from './header-dummy-data';
import { Router } from '@angular/router';
import { Constants } from '../Helper/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() collapsed = false;
  @Input() screenWidth = 0;
  
  canShowSearchAsOverlay = false;
  selectedLanguage:any;
  languages=languages;
  notifications=notifications;
  userItems=userItems;

  constructor(private router:Router){

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }
  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
    this.selectedLanguage=this.languages[0];
  }

  getHeadClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = "head-trimmed";
    } else {
      styleClass = "head-md-screen";

    }

    return styleClass;
  }

  checkCanShowSearchAsOverlay(innerWidth: number) :void{
    if(innerWidth < 845){
      this.canShowSearchAsOverlay = true
    }else{
      this.canShowSearchAsOverlay=false
    }
    
  }

  public onLogout() {
    localStorage.removeItem(Constants.USER_KEY);
    this.router.navigateByUrl("/login");
    
  }

  onItemClick(action: string) {
    switch (action) {
      case 'onLogout':
        this.onLogout();
        break;
      
      default:
        // Handle the case for unknown actions
        break;
    }
  }
  get isUserLogin(){
    return !!localStorage[Constants.USER_KEY];
  }
  
}
