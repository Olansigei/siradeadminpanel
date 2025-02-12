import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doctor } from "../../../interfaces/doctors-table.interface";
import {RouterLink, RouterLinkActive} from "@angular/router";

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
  selector: 'app-doctor-table',
  templateUrl: './doctor-table.component.html',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  styleUrls: ['./doctor-table.component.css']
})
export class DoctorsTableComponent implements OnInit {
  isSidebarCollapsed = false;

  public doctors: Doctor[] = [
    {
      id: 1,
      name: "Dra. María González",
      position: "Neumóloga",
      hospital: "Hospital Central",
      coordinator: "Alan de Jesús",
      date: "15 Ene 2024"
    },
    {
      id: 2,
      name: "Dr. Carlos Ruiz",
      position: "Cardiólogo",
      hospital: "Hospital Norte",
      coordinator: "Alan de Jesús",
      date: "12 Ene 2024"
    },
    {
      id: 3,
      name: "Dra. Ana Martínez",
      position: "Pediatra",
      hospital: "Hospital Sur",
      coordinator: "Alan de Jesús",
      date: "10 Ene 2024"
    }
  ];

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
      isSection: true,
      label: 'Sistema'
    },
    {
      id: 10,
      icon: 'fas fa-cog',
      label: 'Configuración'
    },
    {
      id: 11,
      icon: 'fas fa-question-circle',
      label: 'Ayuda'
    }
  ];

  selectedMenuItem: number = 1;

  constructor() { }

  ngOnInit(): void { }

  public getInitials(name: string): string {
    return name.split(" ").map(n => n[0]).join("").toUpperCase();
  }

  public onEdit(doctor: Doctor): void {
    console.log('Editar doctor:', doctor);
  }

  public onDelete(doctor: Doctor): void {
    console.log('Eliminar doctor:', doctor);
  }

  public onMoreOptions(doctor: Doctor): void {
    console.log('Más opciones:', doctor);
  }

  public onAddDoctor(): void {
    console.log('Agregar nuevo doctor');
  }

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


