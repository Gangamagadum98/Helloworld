import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParty]'
})
export class PartyDirective {
  div
  constructor(private element:ElementRef) { 
    
    console.log(element)
   // let div=element.nativeElement
     this.div = element.nativeElement
    //div.outertext="we are learning angular"
 //   div.style.color="Red"
   // div.style.opacity="0.7"
   
  }

  @HostListener('click')
  clicked(){
    this.div.style.color="blue"
    console.log("I have clicked the div")
    
  }

  @HostListener('mouseover')
  hover(){
    this.div.style.cursor="pointer"
    console.log("I am inside hover method")
  }

  @HostListener('mouseleave')
  leave(){
    this.div.style.color="black"
    
  }

}
