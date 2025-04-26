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

  showInput = {
    name: true,
    email: true,
    message: true,
  };

  mailTest = true;

  @ViewChild('emailInput') emailInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('messageInput') messageInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('nameInput') nameInputRef!: ElementRef<HTMLInputElement>;

  isFieldInvalid(control: any): boolean {
    return !control.valid && control.touched;
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
