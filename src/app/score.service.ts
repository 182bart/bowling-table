import { Injectable } from '@angular/core';
import { Player, Round } from './player';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  playersSubject = new BehaviorSubject<Player[]>([]);
  players$ = this.playersSubject.asObservable();
  constructor() {}

  prepareFile(file: File) {
    const reader = new FileReader();
    reader.onload = (x) => {
      const content = x.target?.result as string;
      const players = this.fileConverter(content);
      this.playersSubject.next(players);
    };
    reader.onerror = (error) => {
      console.error('Błąd wczytywania pliku:', error);
    };
    reader.readAsText(file);
  }

  fileConverter(content: string): Player[] {
    const lines = content.split('\n');
    const players: Player[] = [];
    let currentPlayer: Player | null = null;

    lines.forEach((line) => {
      if (line.trim() !== '') {
        if (!currentPlayer) {
          currentPlayer = { name: line.trim(), score: [], total: 0 };
        } else {
          const scores = line
            .split(',')
            .map((score) => parseInt(score.trim(), 10));
          const rounds: Round[] = [];
          for (let i = 0, j = 0; i < scores.length; i += 2, j++) {
            const firstThrow = scores[i];
            const secondThrow = scores[i + 1] ? scores[i + 1] : 0;
            let roundTotal = rounds[j - 1]
              ? firstThrow + secondThrow + rounds[j - 1].roundTotal
              : firstThrow + secondThrow;
            const bons = this.checkStrike(firstThrow, secondThrow);

            if (bons == 'strike' && i < 10) {
              roundTotal += scores[i + 2] + scores[i + 3];
            } else if (bons == 'spare') {
              roundTotal += scores[i + 2];
            }
            rounds.push({ firstThrow, secondThrow, roundTotal });
          }
          currentPlayer.score = rounds;
          currentPlayer.total = rounds[rounds.length - 1].roundTotal;
          players.push(currentPlayer);
          currentPlayer = null;
        }
      }
    });
    return players;
  }
  checkStrike(firstThrow: number, secondThrow: number) {
    let bonus: string | null = null;
    if (firstThrow == 10) {
      bonus = 'strike';
    }
    if (firstThrow + secondThrow == 10) {
      bonus = 'spare';
    }
    return bonus;
  }
}
