import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { SharedModule } from '../../shared/shared.module';
import { IosSwitcherComponent } from './ios-switcher/ios-switcher.component';


@NgModule({
  declarations: [SignupComponent, IosSwitcherComponent],
  imports: [
    SharedModule.forChild(),
    RouterModule.forChild([{
      path: '',
      component: SignupComponent
    }])
  ]
})
export class SignupModule {
}
