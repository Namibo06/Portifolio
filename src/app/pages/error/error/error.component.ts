import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.sass','./error.responsive.component.sass']
})
export class ErrorComponent implements OnInit{
  /**bgColor */
  updateIconBg:string='';

  constructor(
    private renderer:Renderer2
  ){}

  ngOnInit(): void {
    this.verifyBg();
  }

  verifyBg(){
    if(localStorage.getItem('bgColor') === "sun"){
      const home_container=document.getElementById('error-container');
      const title = document.getElementById('title');
      const content = document.getElementById('content');
      const link = document.getElementById('link');

      this.renderer.removeClass(home_container,"addBgMoon");
      this.renderer.removeClass(title,"addColorMoon");
      this.renderer.removeClass(content,"addColorMoon");
      this.renderer.removeClass(link,"addColorMoon");
      this.renderer.addClass(home_container,'addBgSun');
      this.renderer.addClass(title,"addColorSun");
      this.renderer.addClass(content,"addColorSun");
      this.renderer.addClass(link,"addColorSun");
      this.updateIconBg="moon";

    }else{
      const home_container=document.getElementById('error-container');
      const title = document.getElementById('title');
      const content = document.getElementById('content');
      const link = document.getElementById('link');

      this.renderer.removeClass(home_container,"addBgSun");
      this.renderer.removeClass(title,"addColorSun");
      this.renderer.removeClass(content,"addColorSun");
      this.renderer.removeClass(link,"addColorSun");
      this.renderer.addClass(home_container,'addBgMoon');
      this.renderer.addClass(title,'addColorMoon');
      this.renderer.addClass(content,'addColorMoon');
      this.renderer.addClass(link,'addColorMoon');
      this.updateIconBg="sun";
    }
  }

  isSunOrMoon(event:string){
    if(event === "sun"){
      const home_container=document.getElementById('error-container');
      const title = document.getElementById('title');
      const content = document.getElementById('content');
      const link = document.getElementById('link');
      this.renderer.removeClass(home_container,"addBgMoon");
      this.renderer.removeClass(title,"addColorMoon");
      this.renderer.removeClass(content,"addColorMoon");
      this.renderer.removeClass(link,"addColorMoon");
      this.renderer.addClass(home_container,'addBgSun');
      this.renderer.addClass(title,"addColorSun");
      this.renderer.addClass(content,"addColorSun");
      this.renderer.addClass(link,"addColorSun");
      this.updateIconBg="moon";
    }else{
      const home_container=document.getElementById('error-container');
      const title = document.getElementById('title');
      const content = document.getElementById('content');
      const link = document.getElementById('link');

      this.renderer.removeClass(home_container,"addBgSun");
      this.renderer.removeClass(title,"addColorSun");
      this.renderer.removeClass(content,"addColorSun");
      this.renderer.removeClass(link,"addColorSun");
      this.renderer.addClass(home_container,'addBgMoon');
      this.renderer.addClass(title,'addColorMoon');
      this.renderer.addClass(content,'addColorMoon');
      this.renderer.addClass(link,'addColorMoon');
      this.updateIconBg="sun";
    }
  }
}
