import { Component, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-ios-switcher',
  templateUrl: './ios-switcher.component.html',
  styleUrls: ['./ios-switcher.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: IosSwitcherComponent,
      multi: true
    }
  ]
})
export class IosSwitcherComponent implements ControlValueAccessor {

  public value: boolean;
  public onChange: (checked: boolean) => void;

  @HostListener('click')
  public toggle() {
    this.value = !this.value;
    this.onChange(this.value);
  }

  public writeValue(checked: boolean): void {
    this.value = checked;
  };

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
  }
}
