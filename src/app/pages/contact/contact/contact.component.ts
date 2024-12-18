import { Component, OnInit, Renderer2 } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

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

  firstName: string = "";
  lastName: string = "";
  assunt: string = "";
  message: string = "";


  constructor(
    private renderer:Renderer2
  ){}

  ngOnInit(){
    this.verifyBg();
  }

  sendMessageForWhatsapp(firstName: string, lastName: string, assunt: string, message: string){
    const phone: string = "75992889592";
    const encodedMessage = encodeURIComponent(`Meu nome é ${firstName} ${lastName}, o assunto tratado a ser tratado é ${assunt}, e a mensagem é: ${message}`); // Codificar a mensagem

    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

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
