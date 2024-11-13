import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports:[
    CommonModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  categorias = [
    { id: '2', name: 'PASTILLA Y ZAPATA DE FRENO' },
    { id: '3', name: 'PIÑÓN Y PARTE DE CAJA' },
    { id: '4', name: 'NUEVA CATEGORÍA' }
  ];

  productos = [
    { id: 1, name: 'Disco de Embrague', image: 'https://www.ikomiperu.com/assets/img/producto/valeo/DISCO-DE-EMBRAGUE-768x551.png', category: '2' },
    { id: 2, name: 'Piñón y Corona', image: 'https://www.ikomiperu.com/assets/img/producto/HANSANG/14-HANSANG-PINON-Y-CORONA-768x512.jpg', category: '2' },
    { id: 3, name: 'Plato de Embrague', image: 'https://www.ikomiperu.com/assets/img/producto/valeo/PLATO-DE-EMBRAGUE-768x515.png', category: '2' },
    { id: 4, name: 'Pastilla de Freno', image: 'https://www.ikomiperu.com/assets/img/producto/SANGSIN/pastilla-hiq.1-2-768x469.png', category: '3' },
    { id: 5, name: 'Propulsor y Deslizante', image: 'https://www.ikomiperu.com/assets/img/producto/HANSANG/PROPULSOR-Y-DESLIZANTE-3-768x636.png', category: '3' },
    { id: 6, name: 'Volante de Motor', image: 'https://www.ikomiperu.com/assets/img/producto/valeo/IPEX080internet-768x512.jpg', category: '3' },
    { id: 7, name: 'Pastilla de Freno 2', image: 'https://www.ikomiperu.com/assets/img/producto/SANGSIN/pastilla-severe-duty.1-1-768x523.png', category: '4' },
    { id: 8, name: 'Pastilla de Freno', image: 'https://www.ikomiperu.com/assets/img/producto/SANGSIN/pastilla-hagen.1-3-768x492.png', category: '4' },
    { id: 9, name: 'Tren Fijo', image: 'https://www.ikomiperu.com/assets/img/producto/HANSANG/TRENFIJO2-768x690.jpg', category: '4' }
  ];

  selectedCategory: string = 'all';
  filteredProducts = this.productos;

  filterProducts(category: string): void {
    this.selectedCategory = category;
    this.filteredProducts = category === 'all'
      ? this.productos
      : this.productos.filter(product => product.category === category);
  }
}