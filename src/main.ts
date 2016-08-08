import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment, TodoService } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [TodoService]);
