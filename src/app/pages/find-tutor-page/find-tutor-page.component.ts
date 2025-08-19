import { Component, signal } from '@angular/core';
import { PageNavBarComponent } from "../../components/nav-bar/page-nav-bar/page-nav-bar.component";
import { FormsModule } from '@angular/forms';
import { LearningMode } from '../../templates/education.enum';

@Component({
  selector: 'app-find-tutor-page',
  imports: [FormsModule, PageNavBarComponent],
  templateUrl: './find-tutor-page.component.html',
  styleUrl: './find-tutor-page.component.css'
})
export class FindTutorPageComponent {
    selectedLevel!: string;
    levels = [
        { value: 'primary', viewValue: 'Primary' },
        { value: 'secondary', viewValue: 'Secondary' },
        { value: 'tertiary', viewValue: 'Tertiary' }
    ];

    selectedLearningMode = signal<LearningMode|null>(null);
    setLearningMode(value: LearningMode) {
        // 0 is the value for the online value of the enum
        // 1 is the value for the inPerson value of the enum
        // this is the same as saying if value === 1; 
        if(value) this.selectedLearningMode.set(LearningMode.inPerson)
        else this.selectedLearningMode.set(LearningMode.online)
    }

    examPreparation = signal(false);
    setExamPreparation(value: 'yes'|'no') {
        if(value === 'no') this.examPreparation.set(false)
        else this.examPreparation.set(true)
    }
}
