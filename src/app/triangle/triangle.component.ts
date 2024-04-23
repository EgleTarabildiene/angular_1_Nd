import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-triangle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './triangle.component.html',
  styleUrl: './triangle.component.css'
})
export class TriangleComponent {
  public a:number|null=null;
  public b:number|null=null;
  public c:number|null=null;

  // Kintamasis suma yra arba skaičius arba null reikšmė
  public suma:number|null=null;

  public skaiciuok(){
    if (this.a!=null && this.b!=null && this.c!=null){
      const s = (this.a+this.b+this.c) /2;
      this.suma= Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
      this.a=null;
      this.b=null;
      this.c=null;
    }
    
  }
}
