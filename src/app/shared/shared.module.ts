import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [ReactiveFormsModule, FormsModule],
  exports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
