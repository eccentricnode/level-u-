import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NxModule } from '@nrwl/nx';
import { reducers } from '.';

import { StarshipsEffects } from './starships/starships.effects';
import { StarshipsFacade } from './starships/starships.facade';

import { RocketsEffects } from './rockets/rockets.effects';
import { RocketsFacade } from './rockets/rockets.facade';

import { Dota2Effects } from './dota2/dota2.effects';
import { Dota2Facade } from './dota2/dota2.facade';

import { AchievementsEffects } from './guild/achievements.effects';
import { AchievementsFacade } from './guild/achievements.facade';

import { CoinsEffects } from './coins/coins.effects';
import { CoinsFacade } from './coins/coins.facade';

import { CitiesEffects } from './cities/cities.effects';
import { CitiesFacade } from './cities/cities.facade';

import { ManufacturersEffects } from './manufacturers/manufacturers.effects';
import { ManufacturersFacade } from './manufacturers/manufacturers.facade';

import { TeamsEffects } from './teams/teams.effects';
import { NflTeamsFacade } from './teams/teams.facade';

import { VideosEffects } from './videos/videos.effects';
import { VideosFacade } from './videos/videos.facade';

import { BooksEffects } from './books/books.effects';
import { BooksFacade } from './books/books.facade';

import { PlanetsEffects } from './planets/planets.effects';
import { PlanetsFacade } from './planets/planets.facade';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    EffectsModule.forRoot([
        StarshipsEffects, 
        RocketsEffects,
        Dota2Effects, 
        AchievementsEffects, 
        CoinsEffects, 
        CitiesEffects,
        ManufacturersEffects,
        TeamsEffects,
        VideosEffects,
        BooksEffects,
        PlanetsEffects,
      ]),
  ],
  providers: [
    StarshipsFacade, 
    RocketsFacade, 
    Dota2Facade, 
    AchievementsFacade, 
    CoinsFacade, 
    CitiesFacade, 
    ManufacturersFacade,
    NflTeamsFacade,
    VideosFacade,
    BooksFacade,
    PlanetsFacade,
  ]
})
export class StateModule {}
