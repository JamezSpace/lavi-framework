import { AfterViewInit, Component, ElementRef, inject, Inject, NgZone, PLATFORM_ID, ViewChild } from '@angular/core';
import { PageNavBarComponent } from "../../components/nav-bar/page-nav-bar/page-nav-bar.component";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';


@Component({
    selector: 'app-home-page',
    imports: [PageNavBarComponent],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css'
})
export class HomePageComponent implements AfterViewInit {
    private router = inject(Router);
    
    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        private zone: NgZone
    ) { }

    testimonials = [
        {
            quote: "Lavi's tutors are amazing! They helped me improve my grades and gain confidence in my studies.",
            name: "Jane Doe",
            role: "High School Student"
        },
        {
            quote: "The personalized study plans made a huge difference in my son's performance. Highly recommend!",
            name: "John Smith",
            role: "Parent"
        }
    ];

    @ViewChild('testimonialsSection')
    testimonials_section !: ElementRef<HTMLElement>

    @ViewChild('testimonialsContainer')
    testimonials_container !: ElementRef<HTMLElement>

    ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.zone.onStable.subscribe(() => {
                this.initScrollAnimation();
            });
        }
    }

    initScrollAnimation() {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
 
        const testimonialsEl = this.testimonials_container.nativeElement;
        const totalScrollWidth = testimonialsEl.scrollWidth;
        const viewportWidth = testimonialsEl.offsetWidth;
        const scrollDistance = totalScrollWidth - viewportWidth;

        gsap.to(testimonialsEl, {
            x: -scrollDistance,
            ease: "none",
            scrollTrigger: {
                scrub: 1,
                pin: this.testimonials_section.nativeElement,
                trigger: this.testimonials_section.nativeElement,
                start: "top 20%",
                end: `+=${scrollDistance+400}`
            }
        });
    }

    navigateToPage(page: string) {
        this.router.navigate([page]);
    }
}
