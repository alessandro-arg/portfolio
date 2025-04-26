import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
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

  showInputMessage = true;
  showInputEmail = true;
  showInputName = true;
  mailTest = true;

  @ViewChild('emailInput') emailInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('messageInput') messageInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('nameInput') nameInputRef!: ElementRef<HTMLInputElement>;

  isMessageInvalid(message: any): boolean {
    return !message.valid && message.touched;
  }

  isEmailInvalid(email: any): boolean {
    return !email.valid && email.touched;
  }

  isNameInvalid(name: any): boolean {
    return !name.valid && name.touched;
  }

  onInputBlurMessage(message: any) {
    if (this.isMessageInvalid(message)) {
      this.showInputMessage = false;
    }
  }

  onInputBlurEmail(email: any) {
    if (this.isEmailInvalid(email)) {
      this.showInputEmail = false;
    }
  }

  onInputBlurName(name: any) {
    if (this.isNameInvalid(name)) {
      this.showInputName = false;
    }
  }

  onShowInputMessage() {
    this.showInputMessage = true;
    setTimeout(() => {
      this.messageInputRef?.nativeElement.focus();
    });
  }

  onShowInputEmail() {
    this.showInputEmail = true;
    setTimeout(() => {
      this.emailInputRef?.nativeElement.focus();
    });
  }

  onShowInputName() {
    this.showInputName = true;
    setTimeout(() => {
      this.nameInputRef?.nativeElement.focus();
    });
  }

  post = {
    endPoint: 'https://www.alessandro-argenziano.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log(this.contactData);
      ngForm.resetForm();
      console.info('it worked?');
    }
  }
}
