import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCopy, faPaste } from '@fortawesome/free-regular-svg-icons';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass','./home.responsive.component.sass']
})
export class HomeComponent implements OnInit{
  /**bgColor */
  updateIconBg:string='';

  /**icons */
  github:IconDefinition=faGithub;
  linkedIn:IconDefinition=faLinkedin;
  instagram:IconDefinition=faInstagram;
  whatsapp:IconDefinition=faWhatsapp;
  copy_temporary:IconDefinition=faCopy;
  copy:IconDefinition=faCopy;
  paste:IconDefinition=faClipboardCheck;

  constructor(
    private renderer:Renderer2
  ){}

  ngOnInit(){
    this.verifyBg();
  }

  copyEmail() {
    this.copy_temporary=this.paste;

    const emailToCopy = "namibo654@gmail.com";

    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = emailToCopy;

    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999);

    document.execCommand('copy');
    document.body.removeChild(tempTextArea);

    setTimeout(() => {
      this.copy_temporary=this.copy;
    }, 3000);
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
