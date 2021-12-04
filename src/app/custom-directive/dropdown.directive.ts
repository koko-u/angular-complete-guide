import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({
  selector: '[acgDropdown]'
})
export class DropdownDirective implements OnInit {

  isOpen$ = new BehaviorSubject<boolean>(false)

  @Input()
  dropdownMenuId: string | undefined

  constructor(private el: ElementRef,private renderer: Renderer2) { }

  ngOnInit(): void {
    if (!this.dropdownMenuId) return

    const dropdownMenu = document.getElementById(this.dropdownMenuId)
    if (!dropdownMenu) return

    this.isOpen$.subscribe(isOpen => {
      this.renderer.setStyle(dropdownMenu, 'display', isOpen ? 'block': 'none')
    })
  }

  // @HostListener('click', ['$event'])
  // onClick(event: Event): void {
  //   event.preventDefault()
  //
  //   this.isOpen$.next(!this.isOpen$.value)
  // }

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    event.preventDefault()

    const target = event.target
    const clickHere = this.el.nativeElement.contains(target)
    if (clickHere) {
      this.isOpen$.next(!this.isOpen$.value)
    } else {
      this.isOpen$.next(false)
    }
  }

}
