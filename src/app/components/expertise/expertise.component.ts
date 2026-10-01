import { Component, OnInit, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, ExpertiseItem } from '../../services/data.service';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.scss'
})
export class ExpertiseComponent implements OnInit {
  private dataService = inject(DataService);
  private elementRef = inject(ElementRef);

  expertiseList: (ExpertiseItem & { animatedValue: number })[] = [];

  ngOnInit(): void {
    const rawExpertise = this.dataService.getExpertise();
    this.expertiseList = rawExpertise.map(item => ({
      ...item,
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
    const duration = 2000;
    const steps = 60;
    const intervalTime = duration / steps;

    this.expertiseList.forEach(item => {
      const stepIncrement = item.value / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        item.animatedValue = Math.min(Math.round(stepIncrement * currentStep), item.value);
        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, intervalTime);
    });
  }
}
