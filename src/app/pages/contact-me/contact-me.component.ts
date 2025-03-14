import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact-me',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {
  formspreeEndpoint = "https://formspree.io/f/mkgoknnz";
  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  handleSubmit(form: any) {
    if (form.invalid) return;

    const formData = new FormData();
    formData.append('email', form.value.email);
    formData.append('message', form.value.message);

    this.http.post(this.formspreeEndpoint, formData).subscribe({
      next: (response) => {
        this.successMessage = "Form submitted successfully! We'll be in touch";
        this.errorMessage = '';
        form.resetForm(); // Reset the form
      },
      error: (error) => {
        this.errorMessage = 'There was a problem submitting the form. Try again later.';
        this.successMessage = '';
        console.error('Submission error:', error);
      },
    });
  }
}
