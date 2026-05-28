import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience-component',
  imports: [ReactiveFormsModule],
  templateUrl: './experience-component.html',
  styleUrl: './experience-component.css',
})
export class ExperienceComponent {
  private fb = inject(FormBuilder);

  private createExperienceGroup() {
    return this.fb.group({
      enterprise: ["", Validators.required],
      jobPosition: ["", Validators.required],
      initDate: [null, [Validators.required, Validators.min(1990)]],
      endDate: [null]
    });
  }

  experienceForm = this.fb.group({
    experiences: this.fb.array([this.createExperienceGroup()])
  })

  get experiences(){
    return this.experienceForm.get("experiences") as FormArray;
  }

  addExperience(){
    this.experiences.push(this.createExperienceGroup());
  }

  removeExperience(index: number){
    this.experiences.removeAt(index);
  }

  onSubmit(){
    if(this.experienceForm.valid){
      console.log('Formulário válido', this.experienceForm.value);
      this.experienceForm.reset();

      while(this.experiences.length) this.experiences.removeAt(0);
      this.addExperience();
    }else{
      console.log('Formulário inválido', this.experienceForm.value);
      this.experienceForm.markAllAsTouched();
    }
  }
}
