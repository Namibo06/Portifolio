import { Component, OnInit, Renderer2 } from '@angular/core';
import { Icon, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass','./contact.responsive.component.sass']
})
export class ContactComponent implements OnInit{
  /**bgColor */
  updateIconBg:string='';

  /**icons */
  check:IconDefinition=faCheck;
  cancel:IconDefinition=faXmarkCircle;

  /**callback */
  callback_error:boolean=false;
  callback_success:boolean=false;


  constructor(
    private renderer:Renderer2
  ){}

  ngOnInit(){
    this.verifyBg();
  }

  sendEmail(){
    this.callback_success=true;

    setTimeout(() => {
      this.callback_success=false;
    }, 5000);
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
