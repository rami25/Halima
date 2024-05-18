import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy, OnChanges {
  @Input() targetDate!: string; 
  @Input() targetTime!: string; 

  private subscription!: Subscription;
  public timeRemaining: any = {};
  public isFinished: boolean = false;

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['targetDate'] || changes['targetTime']) {
      this.startCountdown();
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private startCountdown() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = interval(1000).subscribe(() => {
      this.updateCountdown();
    });
  }

  private updateCountdown() {
    const now = new Date().getTime();
    const targetTime = this.realTime(this.targetTime);
    const date = this.combineDateTime(this.targetDate, targetTime)
    const target = new Date(date).getTime();

    if (isNaN(target)) {
      console.error(`Invalid date or time: ${this.targetDate} ${this.targetTime}`);
      this.timeRemaining = {
        days: 'NaN',
        hours: 'NaN',
        minutes: 'NaN',
        seconds: 'NaN'
      };
      return;
    }
    const distance = target - now;
    if (distance <= 0 && this.allComponentsEqualZero()) {
      this.isFinished = true;
      this.subscription.unsubscribe();
      this.timeRemaining = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    } else {
      this.isFinished = false;
      this.timeRemaining = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    }
  }
  allComponentsEqualZero(): boolean {
    const { days, hours, minutes, seconds } = this.timeRemaining;
    return days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0;
  }
  realTime(timeString: string): string {
    const timeMapping: { [key: string]: string } = {
      '9h': '09:00:00',
      '10h': '10:00:00',
      '11h': '11:00:00',
      '15h': '15:00:00',
      '16h': '16:00:00'
    };

    return timeMapping[timeString] || '00:00:00';
  }

  combineDateTime(dateString: string, timeString: string): Date {
    const date = new Date(dateString);
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(seconds);
    return date;
  }
}