import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { PizzasEffects } from './pizzas.effects';
import { PizzasFacade } from './pizzas.facade';

import { pizzasQuery } from './pizzas.selectors';
import { LoadPizzas, PizzasLoaded } from './pizzas.actions';
import {
  PizzasState,
  Entity,
  initialState,
  pizzasReducer
} from './pizzas.reducer';

interface TestSchema {
  pizzas: PizzasState;
}

describe('PizzasFacade', () => {
  let facade: PizzasFacade;
  let store: Store<TestSchema>;
  let createPizzas;

  beforeEach(() => {
    createPizzas = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('pizzas', pizzasReducer, { initialState }),
          EffectsModule.forFeature([PizzasEffects])
        ],
        providers: [PizzasFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(PizzasFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allPizzas$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allPizzas$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `PizzasLoaded` to manually submit list for state management
     */
    it('allPizzas$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allPizzas$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new PizzasLoaded([createPizzas('AAA'), createPizzas('BBB')])
        );

        list = await readFirst(facade.allPizzas$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
