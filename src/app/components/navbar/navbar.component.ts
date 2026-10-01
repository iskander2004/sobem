import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);
  activeSection = signal('hero');

  navLinks = [
    { label: 'Accueil', target: 'hero' },
    { label: 'À propos', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Nos projets', target: 'projects' },
    { label: 'Contact', target: 'contact' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
    this.isScrolled.set(scrollPosition > 50);

    // Update active section based on scroll offset
    const sections = ['hero', 'about', 'services', 'projects', 'contact'];
    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          this.activeSection.set(sectionId);
          break;
        }
      }
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  scrollTo(sectionId: string): void {
    this.mobileMenuOpen.set(false);
    this.activeSection.set(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
