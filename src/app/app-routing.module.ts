import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'a-quiet-place',
    loadChildren: () => import('./filmes/a-quiet-place/a-quiet-place.module').then( m => m.AQuietPlacePageModule)
  },
  {
    path: 'the-witch',
    loadChildren: () => import('./filmes/the-witch/the-witch.module').then( m => m.TheWitchPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
