import { Component } from '@angular/core';
import { CurrencySelectorComponent } from "../currency-selector/currency-selector.component";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-money',
  standalone: true,
  imports: [CurrencySelectorComponent, FormsModule],
  templateUrl: './money.component.html',
  styleUrl: './money.component.css'
})
export class MoneyComponent {
  amount: number = 1; // amount input bby the user;
  selectedCurrency: string = "USD" // default currency;
  convertedAmount: number = 0  // amount converted to from child(currency converter)
  selectedToCurrency: string = "EUR";


  onConvertedAmountChange(newAmount: number){
    this.convertedAmount = newAmount;

  }
  onSelectedToCurrencyChange(newCurrency: string){
    this.selectedToCurrency = newCurrency;

  }

}
