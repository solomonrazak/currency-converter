import { Component } from '@angular/core';
import { CurrencySelectorComponent } from "../currency-selector/currency-selector.component";

@Component({
  selector: 'app-money',
  standalone: true,
  imports: [CurrencySelectorComponent],
  templateUrl: './money.component.html',
  styleUrl: './money.component.css'
})
export class MoneyComponent {

}
