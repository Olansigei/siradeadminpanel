// dashboard.component.ts
import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";

interface MenuItem {
  id: number;
  icon?: string;
  label: string;
  badge?: string;
  submenu?: MenuItem[];
  isExpanded?: boolean;
  isSection?: boolean;  // Añadida esta propiedad
  routerLink?: string;  // ← Agregado
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgForOf,
    RouterLinkActive
  ],
  animations: [
    trigger('slideInOut', [
      state('collapsed', style({
        height: '0',
        opacity: '0',
        overflow: 'hidden'
      })),
      state('expanded', style({
        height: '*',
        opacity: '1'
      })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class DashboardComponent {
  isSidebarCollapsed = false;
  menuItems: MenuItem[] = [
    {
      id: 1,
      icon: 'fas fa-home',
      label: 'Dashboard'
    },
    {
      id: 2,
      isSection: true,
      label: 'Gestión'
    },
    {
      id: 3,
      icon: 'fas fa-plus-circle',
      label: 'Agregar',
      submenu: [
        { id: 31, icon: 'fas fa-user-plus', label: 'Usuario' },
        { id: 32, icon: 'fas fa-hospital', label: 'Hospital' }
      ]
    },
    {
      id: 4,
      icon: 'fas fa-stethoscope',
      label: 'Diagnósticos',
      badge: 'Nuevo'
    },
    {
      id: 5,
      icon: 'fas fa-search',
      label: 'Consultar',
      submenu: [
        { id: 51, icon: 'fas fa-user', label: 'Usuarios' },
        { id: 52, icon: 'fas fa-hospital-alt', label: 'Hospitales' },
        { id: 53, icon: 'fas fa-file-medical', label: 'Diagnósticos' }
      ]
    },
    {
      id: 6,
      isSection: true,
      label: 'Análisis'
    },
    {
      id: 7,
      icon: 'fas fa-chart-line',
      label: 'Estadísticas'
    },
    {
      id: 8,
      icon: 'fas fa-file-alt',
      label: 'Reportes'
    },
    { 
      id: 9,
      icon: 'fas fa-chart-bar',
      label: 'Análisis',
      routerLink: '/analisis'
    },    
    {
      id: 10,
      isSection: true,
      label: 'Sistema'
    },
    {
      id: 11,
      icon: 'fas fa-cog',
      label: 'Configuración'
    },
    {
      id: 12,
      icon: 'fas fa-question-circle',
      label: 'Ayuda'
    }
  ];

  selectedMenuItem: number = 1;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  toggleSubmenu(item: MenuItem) {
    item.isExpanded = !item.isExpanded;
  }

  selectMenuItem(itemId: number) {
    this.selectedMenuItem = itemId;
  }
}
