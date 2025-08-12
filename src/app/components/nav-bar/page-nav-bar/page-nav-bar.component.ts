import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-nav-bar',
  imports: [RouterModule],
  templateUrl: './page-nav-bar.component.html',
  styleUrl: './page-nav-bar.component.css'
})
export class PageNavBarComponent {
    private scroller = inject(ViewportScroller)
    
    nav_menus = [
        { path: '', label: 'home', inPageNavigation: false },
        { path: 'about', label: 'about us', inPageNavigation: false },
        { path: 'how-it-works', label: 'how it works', inPageNavigation: true },
        { path: 'contact', label: 'contact', inPageNavigation: false },
    ];

    scrollToSection(section_id: string): void {
        this.scroller.scrollToAnchor(section_id);
    }

    @ViewChild('mobileNavContainer')
    mobile_nav_container !: ElementRef<HTMLElement>;

    toggleMobileNav() {
        this.mobile_nav_container.nativeElement.classList.toggle('open');
    }
}
