import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-nav-bar',
  imports: [RouterModule],
  templateUrl: './page-nav-bar.component.html',
  styleUrl: './page-nav-bar.component.css'
})
export class PageNavBarComponent {
    nav_menus = [
        { path: '', label: 'home', inPageNavigation: false },
        { path: 'about', label: 'about us', inPageNavigation: false },
        { path: 'how-it-works', label: 'how it works', inPageNavigation: true },
    ];
}
