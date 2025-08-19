import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  
    ngAfterViewInit(): void {
        // gsap.registerPlugin(ScrollTrigger);
    }
}
