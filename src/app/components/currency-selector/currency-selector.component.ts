import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';


@Component({
  selector: 'app-currency-selector',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './currency-selector.component.html',
  styleUrl: './currency-selector.component.css'
})
export class CurrencySelectorComponent {

  currencies: string[] = ["eur", "usd", "gbp"];
  selectedCurrency = "eur";

  // function to select a currency
  selectCurrency(currency: string): void{
     this.selectedCurrency = currency;
  }

}
