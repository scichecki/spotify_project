import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthService {

  private clientId = '5476aea81d214d078cc9a8e2b8c70f4c';      
  private redirectUri = 'http://127.0.0.1:8000/callback';

  private scope = 'user-read-private user-read-email';

  private generateRandomString(length: number): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  login() {
    const state = this.generateRandomString(16);

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: this.clientId,
      scope: this.scope,
      redirect_uri: this.redirectUri,
      state: state
    });

    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
  }
}
