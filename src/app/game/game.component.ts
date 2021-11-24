import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Player } from './model/player';
import {Set} from "./model/set";
import { GameService } from './service/game.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  players: Player[] = [];

  // @ts-ignore
  playerOneForm: FormGroup;
  // @ts-ignore
  playerTwoForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private gameService: GameService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.gameService.getPlayers().subscribe(res => this.players = res);

    this.playerOneForm = this.formBuilder.group({
      firstname1: '',
      lastname1: '',
    });

    this.playerTwoForm = this.formBuilder.group({
      firstname2: '',
      lastname2: '',
    });
  }

  score(id:number){
    let opponent = this.players.find(p => p.id !== id);
    // @ts-ignore
    this.gameService.score(id, opponent.id).subscribe(res =>{
          let indexPlayerWhoScore = this.players.findIndex(p => p.id === id) ;
          let indexOpponent = this.players.findIndex(p => p.id !== id) ;
          this.players[indexPlayerWhoScore] = res[0];
          this.players[indexOpponent] = res[1];
      },
      (error)=>{
          this.messageService.add({severity:'error', summary:'Error Message', detail:error});
      }
    );
  }

  onSubmitFormPlayerOne() {
    // @ts-ignore
    const formValue = this.playerOneForm.value;
    const playerOne = new Player();

    playerOne.firstName = formValue['firstname1'];
    playerOne.name = formValue['lastname1'];

    if(!!this.players.length ){
      playerOne.id = this.players[0].id;
    }


    this.gameService.savePlayer(playerOne).subscribe(res=>{
      this.players[0]= res;
    });

  }

  onSubmitFormPlayerTwo() {
    // @ts-ignore
    const formValue = this.playerTwoForm.value;
    const newUser = new Player();
    newUser.firstName = formValue['firstname2'];
    newUser.name = formValue['lastname2'];
    if(this.players.length>1 && this.players[1].id)
      newUser.id = this.players[1].id;

    this.gameService.savePlayer(newUser).subscribe(res=>{
      this.players[1]= res;
    });
  }


}
