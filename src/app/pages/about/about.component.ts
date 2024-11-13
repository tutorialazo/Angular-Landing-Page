import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  images: string[] = [
    'marca/client-1.png',
    'marca/client-2.png',
    'marca/client-3.png',
    'marca/client-4.png',
    'marca/client-5.png',
    'marca/client-6.png',
    'marca/client-7.png',
    'marca/client-8.png'
  ];

  cards = [
    { title: 'Equipo', image: 'equipo.jpg'},
    { title: 'Almacén', image: 'almacen.jpg'},
    { title: 'Tienda', image: 'tienda.jpg'},
    { title: 'Empresa', image: 'empresa.jpg'}
  ];

  
}
