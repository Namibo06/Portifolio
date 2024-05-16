import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBars, faBarsProgress, faBarsStaggered, faHome, faHouse, faList, faMoon, faSun, faUserAlt, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass','./header.responsive.component.sass']
})
export class HeaderComponent implements OnInit{
  /**icons */
  home:IconDefinition=faHome;
  person_contact:IconDefinition=faUserAlt;
  list_projects:IconDefinition=faList;
  moon:IconDefinition=faMoon;
  sun:IconDefinition=faSun;
  background_color_theme:IconDefinition=faSun;
  open_menu:IconDefinition=faBarsStaggered;
  close_menu:IconDefinition=faXmark;


  /**menu */
  menu_list:boolean=false;
  open_active:boolean=true;


  @Input() receptBgInput:string='';

  constructor(){}

  @Output() toogleThemeReturn = new EventEmitter<string>();

  ngOnInit(){
    this.alterIconBg();
  }

  open_menu_list(){
    this.menu_list=true;
    this.open_active=false;
  }

  close_menu_list(){
    this.menu_list=false;
    this.open_active=true;
  }

  alterIconBg(){
    if(localStorage.getItem('bgColor') === "sun"){
      this.background_color_theme=this.moon;
    }else{
      this.background_color_theme=this.sun;
    }
  }

  toogleTheme(){
    if(this.background_color_theme === this.sun){
      this.background_color_theme=this.moon;
      localStorage.setItem("bgColor","sun");
      this.toogleThemeReturn.emit("sun");
    }else{
      this.background_color_theme=this.sun;
      localStorage.setItem("bgColor","moon");
      this.toogleThemeReturn.emit('moon');
    }
  }
}
