import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-romano',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './romano.component.html',
  styleUrl: './romano.component.scss'
})
export class RomanoComponent {
  inputUser: string = '';
  inputRoman?: string;
  inputDecimal?: string;
  decimal?: number;
  roman?: string;
  errorMessage: string = '';

  mudar: boolean = true;

  mudarConversao() {
    this.mudar = !this.mudar;
  }

  validadorDoInput(value: string): void {
    const romanRegex = /^(?=[MDCLXVI])M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i;
    const decimalRegex = /^[0-9]*$/;
    if (romanRegex.test(value)) {
      this.inputRoman = value;
      this.decimal = this.romanToDecimal(value);


    } else if (decimalRegex.test(value)) {
      this.inputDecimal = value;
      this.roman = this.decimaltoRoman(parseInt(value, 10))
      console.log(this.roman);

    } else {
      alert('Valor Invalido');
    }
  }

  romanToDecimal(value: string): number {
    const valorRoman: { [key: string]: number } = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let decimal = 0;
    let prevValue = 0;

    for (let i = value.length - 1; i >= 0; i--) {
      const currentValue = valorRoman[value[i].toUpperCase()];

      if (currentValue < prevValue) {
        decimal -= currentValue;
      } else {
        decimal += currentValue;
      }

      prevValue = currentValue;

    }

    return decimal;

  }
  decimaltoRoman(value: number): string {
    const valorRoman = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' },
    ];

    let roman = '';
    let decimal = value;

    for (const { value: currentValue, numeral } of valorRoman) {
      while (decimal >= currentValue) {
        roman += numeral;
        decimal -= currentValue;
      }
    }

    return roman;
  }


}
