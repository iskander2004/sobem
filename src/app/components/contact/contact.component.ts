import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private dataService = inject(DataService);

  contactInfo = this.dataService.getContactInfo();

  contactForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\s()-]{8,20}$/)]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  isSubmitted = signal(false);
  isSuccess = signal(false);

  onSubmit(): void {
    this.isSubmitted.set(true);

    if (this.contactForm.valid) {
      // Form is valid - prepared for future backend/API integration
      console.log('Form submission payload ready for API integration:', this.contactForm.value);
      this.isSuccess.set(true);
      
      // Auto reset after visual confirmation
      setTimeout(() => {
        this.contactForm.reset();
        this.isSubmitted.set(false);
        this.isSuccess.set(false);
      }, 5000);
    }
  }

  // Helper getters for error messages
  get f() {
    return this.contactForm.controls;
  }
}
