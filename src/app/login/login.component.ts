import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() loged: any;
  @Output() isLoged = new EventEmitter();
  constructor(private router: Router) {}
  public login = '';
  public password = '';
  public text = 'Fill in all the fields';
  public err = false;
  ngOnInit(): void {}
  log() {
    if ((this.login.trim() && this.password.trim()) !== '') {
      localStorage.setItem('loggedUser', this.login);
      this.router.navigate(['/']);
      location.href = location.href;
    } else {
      this.err = true;
    }
  }
  goLog() {
    this.isLoged.emit();
  }
}
