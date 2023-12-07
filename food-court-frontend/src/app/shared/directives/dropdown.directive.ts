import { Directive, HostListener, HostBinding, ElementRef } from "@angular/core";

@Directive({
    selector:"[appDropdown]"
})
export class DropdownDirective{
    @HostBinding('class.open') isOpen: boolean;

    @HostListener('document:click',['$event']) toggleOpen(event: Event){
        this.isOpen =  (this.elementRef.nativeElement.contains(event.target))?!this.isOpen:false;
    }

    constructor(private elementRef: ElementRef){}
}