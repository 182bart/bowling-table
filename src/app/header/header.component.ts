import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ScoreService } from '../score.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  @ViewChild('fileInput') fileInput!: ElementRef;
  showError: boolean;
  subscription!: Subscription;
  constructor(private scoreService: ScoreService) {
    this.showError = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addFile(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.type == 'text/plain') {
        this.showError = false;
        this.scoreService.prepareFile(file);
        this.clearFileInput();
        this.getPlayers();
      } else {
        this.showError = true;
      }
    }
  }
  clearData() {
    this.clearFileInput();
    this.scoreService.playersSubject.next([]);
    this.showError = false;
  }
  clearFileInput() {
    this.fileInput.nativeElement.value = '';
  }
  getPlayers() {
    this.subscription = this.scoreService.players$.subscribe((players) => {
      if (players.length === 0) {
        this.showError = true;
      } else {
        this.showError = false;
      }
    });
  }
}
