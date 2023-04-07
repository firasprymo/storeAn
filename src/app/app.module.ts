import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@core/core.module';
import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule, CoreThemeCustomizerModule } from '@core/components';

import { coreConfig } from 'app/app-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { NgxPaginationModule } from 'ngx-pagination'; 

import { JwtInterceptor, ErrorInterceptor } from 'app/auth/helpers';

import { CaisseComponent } from './components/caisse/caisse/caisse.component';
import { AjoutercategorieComponent } from './components/categorie/ajoutercategorie/ajoutercategorie.component';
import { ListercategorieComponent } from './components/categorie/listercategorie/listercategorie.component';
import { AffichercategorieComponent } from './components/categorie/affichercategorie/affichercategorie.component';
import { AjouterfournisseurComponent } from './components/fournisseur/ajouterfournisseur/ajouterfournisseur.component';
import { ListerfournisseurComponent } from './components/fournisseur/listerfournisseur/listerfournisseur.component';
import { AfficherfournisseurComponent } from './components/fournisseur/afficherfournisseur/afficherfournisseur.component';
import { AjouteremployeComponent } from './components/employe/ajouteremploye/ajouteremploye.component';
import { ListeremployeComponent } from './components/employe/listeremploye/listeremploye.component';
import { AfficheremployeComponent } from './components/employe/afficheremploye/afficheremploye.component';
import { ListerfactureComponent } from './components/facture/listerfacture/listerfacture.component';
import { AfficherfactureComponent } from './components/facture/afficherfacture/afficherfacture.component';
import { PayercreditComponent } from './components/credit/payercredit/payercredit.component';
import { AjouterclientComponent } from './components/client/ajouterclient/ajouterclient.component';
import { ListerclientComponent } from './components/client/listerclient/listerclient.component';
import { AfficherclientComponent } from './components/client/afficherclient/afficherclient.component';
import { AjouterfermetureCaisseComponent } from './components/fermetureCaisse/ajouterfermeture-caisse/ajouterfermeture-caisse.component';
import { ListerfermetureCaisseComponent } from './components/fermetureCaisse/listerfermeture-caisse/listerfermeture-caisse.component';
import { AfficherfermetureCaisseComponent } from './components/fermetureCaisse/afficherfermeture-caisse/afficherfermeture-caisse.component';
import { AjouterproduitComponent } from './components/produit/ajouterproduit/ajouterproduit.component';
import { ListerproduitComponent } from './components/produit/listerproduit/listerproduit.component';
import { AfficherproduitComponent } from './components/produit/afficherproduit/afficherproduit.component';
import { ModifierclientComponent } from './components/client/modifierclient/modifierclient.component';
import { ModifiercategorieComponent } from './components/categorie/modifiercategorie/modifiercategorie.component';
import { ModifierproduitComponent } from './components/produit/modifierproduit/modifierproduit.component';
import { UserProfileComponent } from './components/profile/user-profile/user-profile.component';
import { ChangePasswordComponent } from './components/profile/change-password/change-password.component';

import { HomeshopComponent } from './homeshop/homeshop.component';
import { PannierComponent } from './pannier/pannier.component';
import {CoreCardModule} from '../@core/components/core-card/core-card.module';

const appRoutes: Routes = [


  {
    path:'modifier-password',component:ChangePasswordComponent
  },
  {
    path:'user-profile',component:UserProfileComponent
  },
{
    path:'caisse',component:CaisseComponent
  },

  {
    path:'facture/lister',component:ListerfactureComponent
  },
  {
    path:'afficherfactureclient/:id',component:AfficherfactureComponent
  },


  {
    path:'credit/payer',component:PayercreditComponent
  },
  {
    path:'client/ajouter',component:AjouterclientComponent
  },
  {
    path: 'afficherclient/:id',component: AfficherclientComponent
  },
  {
    path: 'modifierclient/:id',component: ModifierclientComponent
  },

  {
    path:'client/lister',component:ListerclientComponent
  },
  {
    path:'fermeturecaisse/ajouter',component:AjouterfermetureCaisseComponent
  },
  {
    path:'fermeturecaisse/lister',component:ListerfermetureCaisseComponent
  },
  {
    path:'produit/ajouter',component:AjouterproduitComponent
  },
  {
    path:'produit/lister',component:ListerproduitComponent
  },
  {
    path: 'afficherproduit/:id',component: AfficherproduitComponent
  },
  {
    path: 'modifierproduit/:id',component: ModifierproduitComponent
  },

  {
    path:'categorie/ajouter',component:AjoutercategorieComponent
  },
  {
    path:'categorie/lister',component:ListercategorieComponent
  },
  {
    path:'fournisseur/ajouter',component:AjouterfournisseurComponent
  },
  {
    path:'fournisseur/lister',component:ListerfournisseurComponent
  },
  {
    path: 'affichercategorie/:id',component: AffichercategorieComponent
  },
  {
    path: 'modifiercategorie/:id',component: ModifiercategorieComponent
  },
  {
    path:'homeshop',component:HomeshopComponent
  },
  {
    path:'pannier',component:PannierComponent
  },


  

  {
    path:'employe/ajouter',component:AjouteremployeComponent
  },
  {
    path:'employe/lister',component:ListeremployeComponent
  },
  {
    path:'employe/afficher',component:AfficheremployeComponent
  },

 
  


  {
    path: 'pages',
    loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/pages/miscellaneous/error' //Error 404 - Page not found
  }
];

@NgModule({
  declarations: [AppComponent,
  CaisseComponent,
        AjoutercategorieComponent,
        ListercategorieComponent,
        AffichercategorieComponent,
        AjouterfournisseurComponent,
        ListerfournisseurComponent,
        AfficherfournisseurComponent,
        AjouteremployeComponent,
        ListeremployeComponent,
        AfficheremployeComponent,
        ListerfactureComponent,
        AfficherfactureComponent,
        PayercreditComponent,
        AjouterclientComponent,
        ListerclientComponent,
        AfficherclientComponent,
        AjouterfermetureCaisseComponent,
        ListerfermetureCaisseComponent,
        AfficherfermetureCaisseComponent,
        AjouterproduitComponent,
        ListerproduitComponent,
        AfficherproduitComponent,
        ModifierclientComponent,
        ModifiercategorieComponent,
        ModifierproduitComponent,
        UserProfileComponent,
        ChangePasswordComponent,
        PannierComponent,
        HomeshopComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgxPaginationModule,

        RouterModule.forRoot(appRoutes, {
            scrollPositionRestoration: 'enabled', // Add options right here
            relativeLinkResolution: 'legacy'
        }),
        TranslateModule.forRoot(),

        //NgBootstrap
        NgbModule,

        // Core modules
        CoreModule.forRoot(coreConfig),
        CoreCommonModule,
        CoreSidebarModule,
        CoreThemeCustomizerModule,

        // App modules
        LayoutModule,
        SampleModule,
        CoreCardModule
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
],
  bootstrap: [AppComponent]
})
export class AppModule {}
