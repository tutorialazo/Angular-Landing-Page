import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    {
      icon: 'work',
      title: 'Ventas',
      description: 'Venta de los mejores repuestos de partes de motor, cajas, transmisiones, piñones, coronas y trenes fijos de las marcas de Korea y Japón. A los mejores precios del mercado.'
    },
    {
      icon: 'list_alt',
      title: 'Asesoría',
      description: 'Le brindamos una asesoría personalizada acerca de nuestros productos, a elegir el mejor repuesto para su movilidad.'
    },
    {
      icon: 'local_shipping',
      title: 'Delivery',
      description: 'Compras sin salir de casa, realizamos entregas a domicilio en el menor tiempo posible.'
    },
    {
      icon: 'visibility',
      title: 'Productos',
      description: 'Contamos con las mejores marcas y calidad de productos del mercado.'
    }
  ];
}