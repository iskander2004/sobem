import { Injectable } from '@angular/core';
import { Service } from '../models/service.model';
import { Project } from '../models/project.model';

export interface StatisticItem {
  id: number;
  value: number;
  suffix: string;
  label: string;
  icon?: string;
}

export interface ExpertiseItem {
  id: number;
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Statistics between Hero & About (3 big circles)
  getHeroStatistics(): StatisticItem[] {
    return [
      {
        id: 1,
        value: 25,
        suffix: '+',
        label: 'Projets réalisés',
        icon: 'fa-solid fa-diagram-project'
      },
      {
        id: 2,
        value: 10,
        suffix: '+',
        label: "Années d'expérience",
        icon: 'fa-solid fa-award'
      },
      {
        id: 3,
        value: 50,
        suffix: '+',
        label: 'Clients',
        icon: 'fa-solid fa-users'
      }
    ];
  }

  // About key pillars
  getAboutPillars() {
    return [
      {
        title: 'Qualité',
        description: 'Des standards rigoureux respectant l\'ensemble des normes électriques en vigueur.',
        icon: 'fa-solid fa-shield-halved'
      },
      {
        title: 'Fiabilité',
        description: 'Des équipements pérennes et des installations conçues pour durer en toute sécurité.',
        icon: 'fa-solid fa-bolt'
      },
      {
        title: 'Professionnalisme',
        description: 'Une équipe qualifiée, réactive et à l\'écoute de chaque exigence projet.',
        icon: 'fa-solid fa-user-gear'
      }
    ];
  }

  // Services list
  getServices(): Service[] {
    return [
      {
        id: 1,
        title: 'Installation électrique',
        description: 'Solutions d’installation électrique adaptées aux différents besoins.',
        icon: 'fa-solid fa-plug-circle-bolt',
        features: ['Bâtiments neufs & rénovations', 'Mise en conformité NFC 15-100', 'Éclairage haute performance']
      },
      {
        id: 2,
        title: 'Maintenance électrique',
        description: 'Maintenance et intervention sur les installations électriques.',
        icon: 'fa-solid fa-wrench',
        features: ['Diagnostics préventifs & curatifs', 'Dépannage rapide 24/7', 'Contrôle thermique & sécurité']
      },
      {
        id: 3,
        title: 'Tableaux électriques',
        description: 'Installation et intégration de tableaux électriques.',
        icon: 'fa-solid fa-sliders',
        features: ['Câblage armoires industrielles', 'Automatismes & protection TGBT', 'Équilibrage des charges']
      },
      {
        id: 4,
        title: 'Électricité industrielle',
        description: 'Solutions électriques pour les environnements industriels.',
        icon: 'fa-solid fa-industry',
        features: ['Distribution de puissance HV/LV', 'Réseaux informatiques & moteurs', 'Variateurs & variateurs de vitesse']
      },
      {
        id: 5,
        title: 'Câblage et raccordement',
        description: 'Travaux de câblage et raccordement des équipements.',
        icon: 'fa-solid fa-network-wired',
        features: ['Câblage haut & bas débit', 'Raccordements haute densité', 'Tirage et repérage câble']
      },
      {
        id: 6,
        title: 'Solutions sur mesure',
        description: 'Solutions adaptées aux besoins spécifiques de chaque projet.',
        icon: 'fa-solid fa-microchip',
        features: ['Étude technique & dimensionnement', 'Intégration domotique & smart building', 'Efficacité énergétique']
      }
    ];
  }

  // Projects list
  getProjects(): Project[] {
    return [
      {
        id: 1,
        title: 'Armoire TGBT et Distribution Industrielle',
        category: 'Industriel',
        description: 'Conception et câblage complet d\'un tableau général basse tension pour une unité d\'emballage.',
        image: 'assets/projects/project1.jpg',
        location: 'Zone Industrielle',
        year: '2025'
      },
      {
        id: 2,
        title: 'Éclairage & Électricité Complexe Résidentiel',
        category: 'Résidentiel',
        description: 'Installation des réseaux électriques, éclairage LED architectural et gestion de puissance.',
        image: 'assets/projects/project2.jpg',
        location: 'Résidence Les Olives',
        year: '2025'
      },
      {
        id: 3,
        title: 'Infrastructure Électrique Centre Commercial',
        category: 'Commercial',
        description: 'Poste de transformation, distribution des réseaux magasins et sécurité incendie.',
        image: 'assets/projects/project3.jpg',
        location: 'Centre Business',
        year: '2024'
      },
      {
        id: 4,
        title: 'Supervision & Automatisme d\'Usine',
        category: 'Industriel',
        description: 'Mise en place de variateurs de vitesse, variateurs de puissance et intégration d\'armoires.',
        image: 'assets/projects/project4.jpg',
        location: 'Site de Production',
        year: '2024'
      },
      {
        id: 5,
        title: 'Rénovation Électrique Immeuble de Bureaux',
        category: 'Commercial',
        description: 'Modernisation intégrale des tableaux de distribution, sous-compteurs et câblage réseau.',
        image: 'assets/projects/project5.jpg',
        location: 'Tour d\'Affaires',
        year: '2023'
      },
      {
        id: 6,
        title: 'Centrale Solaire & Onduleurs Hybrides',
        category: 'Autres',
        description: 'Raccordement Haute Sécurité de générateurs photovoltäiques et onduleurs industriels.',
        image: 'assets/projects/project6.jpg',
        location: 'Parc Solaire Externe',
        year: '2024'
      }
    ];
  }

  // Expertise Cards
  getExpertise(): ExpertiseItem[] {
    return [
      {
        id: 1,
        value: 250,
        suffix: '+',
        label: 'Projets réalisés',
        description: 'Chantiers livrés avec succès dans le secteur privé et public.',
        icon: 'fa-solid fa-list-check'
      },
      {
        id: 2,
        value: 120,
        suffix: '+',
        label: 'Clients satisfaits',
        description: 'Particuliers, promoteurs et industriels de renom.',
        icon: 'fa-solid fa-face-smile'
      },
      {
        id: 3,
        value: 12,
        suffix: '+',
        label: 'Années d’expérience',
        description: 'Savoir-faire éprouvé dans les technologies électriques avancées.',
        icon: 'fa-solid fa-award'
      },
      {
        id: 4,
        value: 500,
        suffix: '+',
        label: 'Interventions',
        description: 'Maintien en condition opérationnelle et audits de conformité.',
        icon: 'fa-solid fa-bolt-lightning'
      }
    ];
  }

  // Contact Info Placeholder
  getContactInfo() {
    return {
      companyName: 'SOBEM – Société Ben Abdellatif d’Électricité Moderne',
      address: 'Avenue de la Technologie, Zone Industrielle, Tunisie',
      phone: '+216 71 000 000 / +216 98 000 000',
      email: 'contact@sobem-electricite.com',
      hours: 'Lundi - Vendredi : 08:00 - 17:30 | Samedi : 08:00 - 13:00'
    };
  }
}
