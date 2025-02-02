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
  exchangeRates: { [key: string]: number } = {}; // Stores fetched exchange rates
  currencies: string[] = ["USD", "EUR", "GBP"]; // Available currencies
  selectedCurrency = "USD"; // Default selected currency
  convertToCurrencies: string[] = ["EUR", "USD", "GBP"];
  selectedToCurrency = "EUR"; // Default conversion currency
  amount: number = 1; // User input amount
  convertedAmount: number = 0; // Holds the converted value

  constructor (private conversionService: ConversionRatesService){}
  ngOnInit() {
    this.fetchExchangeRates();
  }

  // currencies: string[] = ["usd", "eur", "gbp"];
  // selectedCurrency = "usd";

  // convertToCurrencies: string[] = ["eur", "usd", "gbp"];
  //   selectedToCurrency = "eur";
  
   // Fetch exchange rates from API
   fetchExchangeRates() {
    this.conversionService.getExchangeRates().subscribe((data) => {
      this.exchangeRates = data.conversion_rates;
    });
  }
  // function to select a currency
  selectCurrency(currency: string): void{
     this.selectedCurrency = currency;
  }


  // currency to convert to
  selectCurrencyToConvert(newCurrency: string): void{
    this.selectedToCurrency = newCurrency;

  }
  // Perform conversion
  convertCurrency() {
    if (this.exchangeRates[this.selectedToCurrency]) {
      const rate = this.exchangeRates[this.selectedToCurrency];
      this.convertedAmount = this.amount * rate;
    }
  }

  

}
