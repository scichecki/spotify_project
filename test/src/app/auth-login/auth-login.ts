import { Component } from '@angular/core';
import { SpotifyAuthService } from '../spotify-auth.service';

@Component({
  selector: 'app-auth-login',
  imports: [],
  templateUrl: './auth-login.html',
  styleUrl: './auth-login.scss',
})
export class AuthLogin {
 constructor(private spotifyAuth: SpotifyAuthService) {}

  login() {
    this.spotifyAuth.login();
}
}
