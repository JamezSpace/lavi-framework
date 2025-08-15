import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PageNavBarComponent } from "../../components/nav-bar/page-nav-bar/page-nav-bar.component";
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-contact-us-page',
  imports: [PageNavBarComponent, MatExpansionModule],
  templateUrl: './contact-us-page.component.html',
  styleUrl: './contact-us-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactUsPageComponent {
    readonly panelOpenState = signal(false);
}
