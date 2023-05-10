import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';
import { LibDesignSystemModule } from '@mycne/lib-design-system';

const routes: Routes = [{ path: '', component: RegisterComponent }];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    RouterModule.forChild(routes), 
    CommonModule,
    LibDesignSystemModule
  ]
})
export class RegisterModule { }
