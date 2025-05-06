import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';
import { LegalNoticeComponent } from '../../legal-notice/legal-notice.component';
import { CommonModule, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule,
    LegalNoticeComponent,
    NgIf,
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  http = inject(HttpClient);

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
    name: 'Your name goes here',
    email: 'youremail@email.com',
    message: 'Hello Alessandro, I am interested in...',
  };

  mailTest = true;
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
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
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
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log(this.contactData);
      ngForm.resetForm();
      this.resetDefaultForm();
      console.info('it worked?');
    }
  }

  resetDefaultForm() {
    this.placeholders = {
      name: 'Your name goes here',
      email: 'youremail@email.com',
      message: 'Hello Alessandro, I am interested in...',
    };
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
