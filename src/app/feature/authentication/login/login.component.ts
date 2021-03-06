import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TokenService} from 'src/app/core/services/token/token.service';
import {AuthenticationService} from 'src/app/shared/services/authentication/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(private router: Router, private authenticationService: AuthenticationService, private tokenService: TokenService) {

    this.form = new FormGroup({});
  }

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public sendData(): void {
    if (this.form.valid) {
      const {email, password} = this.form.value;
      this.authenticationService.login({email, password})
        .then((respuesta: { token: string }) => {
          this.tokenService.createToken(respuesta);
          this.router.navigate(['/']);
        });
    }
  }

}
