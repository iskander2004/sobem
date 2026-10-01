import { Component, OnInit, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, StatisticItem } from '../../services/data.service';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent implements OnInit {
  private dataService = inject(DataService);
  private elementRef = inject(ElementRef);

  statistics: (StatisticItem & { animatedValue: number })[] = [];

  ngOnInit(): void {
    const rawStats = this.dataService.getHeroStatistics();
    this.statistics = rawStats.map(stat => ({
      ...stat,
      animatedValue: 0
    }));

    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver(): void {
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.startCounters();
            observer.disconnect();
          }
        });
      }, { threshold: 0.2 });

      observer.observe(this.elementRef.nativeElement);
    } else {
      this.startCounters();
    }
  }

  private startCounters(): void {
    const duration = 2000; // ms
    const steps = 50;
    const intervalTime = duration / steps;

    this.statistics.forEach(stat => {
      const stepIncrement = stat.value / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        stat.animatedValue = Math.min(Math.round(stepIncrement * currentStep), stat.value);
        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, intervalTime);
    });
  }
}
