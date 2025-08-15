import { Component, signal } from '@angular/core';
import { PageNavBarComponent } from "../../components/nav-bar/page-nav-bar/page-nav-bar.component";
import {MatSelectModule} from '@angular/material/select';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-find-tutor-page',
  imports: [FormsModule, PageNavBarComponent, MatSelectModule, MatFormFieldModule, MatRadioModule],
  templateUrl: './find-tutor-page.component.html',
  styleUrl: './find-tutor-page.component.css',
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]
})
export class FindTutorPageComponent {
    selectedLevel!: string;
    levels = [
        { value: 'primary', viewValue: 'Primary' },
        { value: 'secondary', viewValue: 'Secondary' },
        { value: 'tertiary', viewValue: 'Tertiary' }
    ];

    selectedLearningMode!: string;
    learningModes: string[] = ['Online', 'In-person'];

    examPreparation = '';
}
