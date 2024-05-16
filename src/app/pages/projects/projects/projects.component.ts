import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass','./projects.responsive.component.sass']
})
export class ProjectsComponent implements OnInit{
  /**bgColor */
  updateIconBg:string='';

  constructor(
    private renderer:Renderer2
  ){}

  ngOnInit(){
    this.verifyBg();
  }

  verifyBg(){
    if(localStorage.getItem('bgColor') === "sun"){
      const home_container=document.getElementById('home');
      this.renderer.removeClass(home_container,"addBgMoon");
      this.renderer.addClass(home_container,'addBgSun');
      this.updateIconBg="moon";

    }else{
      const home_container=document.getElementById('home');
      this.renderer.removeClass(home_container,"addBgSun");
      this.renderer.addClass(home_container,'addBgMoon');
      this.updateIconBg="sun";
    }
  }

  isSunOrMoon(event:string){
    if(event === "sun"){
      const home_container=document.getElementById('home');
      this.renderer.removeClass(home_container,"addBgMoon");
      this.renderer.addClass(home_container,'addBgSun');
      this.updateIconBg="moon";
    }else{
      const home_container=document.getElementById('home');
      this.renderer.removeClass(home_container,"addBgSun");
      this.renderer.addClass(home_container,'addBgMoon');
      this.updateIconBg="sun";
    }
  }
}
