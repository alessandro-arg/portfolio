import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
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

  placeholders = {
    name: '',
    email: '',
    message: '',
  };

  formSubmitted = false;
  successMessage = false;
  showLegalNotice = false;

  @ViewChild('emailInput') emailInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('messageInput') messageInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('nameInput') nameInputRef!: ElementRef<HTMLInputElement>;

  clearPlaceholder(field: 'name' | 'email' | 'message') {
    this.placeholders[field] = '';
  }

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
    endPoint: 'https://www.alessandro-argenziano.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
      },
      responseType: 'text' as const,
    },
  };

  onSubmit(ngForm: NgForm) {
    this.formSubmitted = true;
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(
          this.post.endPoint,
          this.post.body(this.contactData),
          this.post.options
        )
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.resetDefaultForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('Email send.'),
        });
    }
  }

  resetDefaultForm() {
    this.translate
      .get([
        'CONTACT_FORM.PLACEHOLDER_NAME',
        'CONTACT_FORM.PLACEHOLDER_EMAIL',
        'CONTACT_FORM.PLACEHOLDER_MESSAGE',
      ])
      .subscribe((translations) => {
        this.placeholders = {
          name: translations['CONTACT_FORM.PLACEHOLDER_NAME'],
          email: translations['CONTACT_FORM.PLACEHOLDER_EMAIL'],
          message: translations['CONTACT_FORM.PLACEHOLDER_MESSAGE'],
        };
      });

    this.showInput = {
      name: true,
      email: true,
      message: true,
    };

    this.formSubmitted = false;
    this.successMessage = true;

    setTimeout(() => {
      this.successMessage = false;
    }, 2000);
  }

  toggleLegalNotice() {
    this.showLegalNotice = !this.showLegalNotice;
    document.body.style.overflow = this.showLegalNotice ? 'hidden' : 'auto';
  }

  hideLegalNotice() {
    this.showLegalNotice = false;
    document.body.style.overflow = 'auto';
  }
}
