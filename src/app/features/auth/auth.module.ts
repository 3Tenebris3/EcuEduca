// src/app/features/auth/auth.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRepository } from './data/auth.repository';
import { LoginUseCase, RegisterUseCase  } from './application/auth.use-case';

@NgModule({
  imports: [CommonModule],
  providers: [AuthRepository, LoginUseCase, RegisterUseCase]
})
export class AuthModule {}
