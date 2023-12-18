import { Component, OnDestroy } from '@angular/core';
import { Player } from '../player';
import { ScoreService } from '../score.service';
import { Observable, Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'bg-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnDestroy {
  players$: Observable<Player[]>;
  subscription: Subscription;
  tableSource = new MatTableDataSource<Player>();
  columns: string[] = ['name'];
  rounds: string[] = [];
  constructor(private scoreService: ScoreService) {
    this.players$ = this.scoreService.players$;
    for (let i = 1; i <= 10; i++) {
      this.columns.push(i.toString());
      this.rounds.push(i.toString());
    }
    this.columns.push('bonus', 'total');
    this.subscription = this.players$.subscribe((players) => {
      this.tableSource = new MatTableDataSource(players);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
