import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NxModule } from '@nrwl/nx';
import { reducers } from '.';

import { StarshipsEffects } from './starships/starships.effects';
import { StarshipsFacade } from './starships/starships.facade';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    EffectsModule.forRoot([StarshipsEffects]),
  ],
  providers: [StarshipsFacade]
})
export class StateModule {}