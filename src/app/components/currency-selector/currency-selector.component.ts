import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { ConversionRatesService } from '../../services/conversion-rates.service';


@Component({
  selector: 'app-currency-selector',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './currency-selector.component.html',
  styleUrl: './currency-selector.component.css'
})
export class CurrencySelectorComponent {

  constructor (private convertCurrency: ConversionRatesService){}

  currencies: string[] = ["usd", "eur", "gbp"];
  selectedCurrency = "usd";

  convertToCurrencies: string[] = ["eur", "usd", "gbp"];
    selectedToCurrency = "eur";

  // function to select a currency
  selectCurrency(currency: string): void{
     this.selectedCurrency = currency;
  }


  // currencu to convert to
  selectCurrencyToConvert(newCurrency: string): void{
    this.selectedToCurrency = newCurrency;

  }

  

}
