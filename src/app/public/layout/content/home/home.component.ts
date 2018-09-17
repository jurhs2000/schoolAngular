import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../../services/auth/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private tokenService: TokenService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.tokenService.removeToken()
  }
}
