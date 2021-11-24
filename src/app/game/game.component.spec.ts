import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GameComponent } from './game.component';
import { GameService } from './service/game.service';
import { MockGameService } from '../mock/mock-game.service';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let gameService: GameService;
  let httpClient: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ],
      providers: [{provide:GameService,useClass:MockGameService}, MessageService],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    // gameService = TestBed.inject(GameService);
    // httpClient = TestBed.inject(HttpClient);
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set background',()=>{
    fixture.detectChanges();
    const ele = fixture.debugElement.query(By.css('.bg')).nativeElement;
    console.log(ele.style.backgroundImage);
    expect(ele.style.backgroundImage).toContain('game-background.jpg');
  });
});
