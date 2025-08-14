import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule, RouterLink],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  http = inject(HttpClient);
  translate = inject(TranslateService);

  contactData = {
    name: '',
    email: '',
    message: '',
    checkbox: false,
  };

  showInput = {
    name: true,
    email: true,
    message: true,
  };

  focusedField: '' | 'name' | 'email' | 'message' = '';
  formSubmitted = false;
  successMessage = false;
  showLegalNotice = false;

  @ViewChild('emailInput') emailInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('messageInput') messageInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('nameInput') nameInputRef!: ElementRef<HTMLInputElement>;

  isFieldInvalid(control: any): boolean {
    return !control.valid && (control.touched || this.formSubmitted);
  }

  onInputBlur(control: any, field: 'name' | 'email' | 'message') {
    if (!control.valid && control.touched) {
      this.showInput[field] = false;
    }
  }

  onShowInput(field: 'name' | 'email' | 'message') {
    this.showInput[field] = true;
    setTimeout(() => {
      if (field === 'name') this.nameInputRef?.nativeElement.focus();
      if (field === 'email') this.emailInputRef?.nativeElement.focus();
      if (field === 'message') this.messageInputRef?.nativeElement.focus();
    });
  }

  formIsValid(): boolean {
    return (
      this.contactData.name.trim() !== '' &&
      this.contactData.email.trim() !== '' &&
      this.contactData.message.trim() !== '' &&
      this.contactData.checkbox
    );
  }

  post = {
    endPoint: 'https://alessandro-argenziano.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('Mail sent'),
        });
    }
  }
}
