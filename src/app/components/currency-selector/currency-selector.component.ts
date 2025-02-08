import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { ConversionRatesService } from '../../services/conversion-rates.service';

@Component({
  selector: 'app-currency-selector',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './currency-selector.component.html',
  styleUrl: './currency-selector.component.css',
})
export class CurrencySelectorComponent implements OnInit {
  @Input() amount: number = 1; // Receive amount from parent
  @Input() selectedCurrency: string = 'USD'; // Receive currency from parent
  @Output() convertedAmountChange = new EventEmitter<number>();
  @Output() selectedToCurrencyChange = new EventEmitter<string>();

  exchangeRates: { [key: string]: number } = {}; // Stores fetched exchange rates
  currencies: string[] = ['USD', 'EUR', 'GBP']; // Available currencies
  convertToCurrencies: string[] = ['EUR', 'USD', 'GBP'];
  selectedToCurrency = 'EUR'; // Default conversion currency


  
  constructor(private conversionService: ConversionRatesService) {}
  ngOnInit() {
    this.fetchExchangeRates();
  }

  // Fetch exchange rates from API
  fetchExchangeRates() {
    this.conversionService.getExchangeRates().subscribe((data) => {
      this.exchangeRates = data.conversion_rates;
      this.convertCurrency();
    });
  }

  // Function to select a currency
  selectCurrency(currency: string): void {
    this.selectedCurrency = currency;
    this.convertCurrency();
  }

  // currency to convert to
  selectCurrencyToConvert(newCurrency: string): void {
    this.selectedToCurrency = newCurrency;
    this.selectedToCurrencyChange.emit(newCurrency);
    this.convertCurrency();
  }

  // Perform conversion
  convertCurrency() {
    if (this.exchangeRates[this.selectedToCurrency]) {
      if (this.exchangeRates[this.selectedToCurrency]) {
        const rate = this.exchangeRates[this.selectedToCurrency];
        const newConvertedAmount = this.amount * rate;
        this.convertedAmountChange.emit(newConvertedAmount);
      }
    }
  }
}
