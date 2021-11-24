import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private apiUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8080/tennis/';
  }

  public getPlayers() {
    return this.http.get<Player[]>(this.apiUrl + 'players', this.httpOptions);
  }

  public savePlayer(player: Player) {
    return this.http.post<Player>(this.apiUrl + 'player', player, this.httpOptions);
  }

  public score(playerId: number, opponent: number) {
    return this.http.post<Player[]>(this.apiUrl + 'player/'+playerId+'/'+opponent, this.httpOptions);
  }

}
