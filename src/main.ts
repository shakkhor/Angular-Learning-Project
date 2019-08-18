import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { LikeComponent } from './app/like.componet'
import { from } from 'rxjs';

let componet = new LikeComponent(10, true);

componet.onClick();

console.log('likesCount: ' + componet.likesCount)

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
