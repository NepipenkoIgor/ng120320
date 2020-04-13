import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [SignupComponent],
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
