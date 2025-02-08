import { Component } from '@angular/core';
import { CurrencySelectorComponent } from "../currency-selector/currency-selector.component";
import { FormsModule } from '@angular/forms';
import { SpinnerLoaderComponent } from "../spinner-loader/spinner-loader.component";
import { NgIf } from '@angular/common';
import { LoadingService } from '../../services/loading.service';


@Component({
  selector: 'app-money',
  standalone: true,
  imports: [CurrencySelectorComponent, FormsModule, SpinnerLoaderComponent, NgIf],
  templateUrl: './money.component.html',
  styleUrl: './money.component.css'
})
export class MoneyComponent {
  loading$: Observable<boolean> = this.loadingService.loading$;
  amount: number = 1; // amount input bby the user;
  selectedCurrency: string = "USD" // default currency;
  convertedAmount: number = 0  // amount converted to from child(currency converter)
  selectedToCurrency: string = "EUR";
  

  
  constructor(private loadingService: LoadingService) {}
 

  onConvertedAmountChange(newAmount: number){
    this.convertedAmount = newAmount;

  }
  onSelectedToCurrencyChange(newCurrency: string){
    this.selectedToCurrency = newCurrency;

  }

}
