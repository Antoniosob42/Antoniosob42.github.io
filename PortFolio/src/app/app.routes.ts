import { Routes } from '@angular/router';
import { SobreMiComponent } from './pages/sobre-mi-component/sobre-mi-component';
import { PortfolioComponent } from './pages/portfolio-component/portfolio-component';
import { HabilidadesComponent } from './pages/habilidades-component/habilidades-component';
export const routes: Routes = [
{path:'', redirectTo: 'portfolio', pathMatch: 'full'},
{path:'portfolio',component: PortfolioComponent},
{path:'habilidades',component: HabilidadesComponent},
{path:'sobremi',component: SobreMiComponent},
{path:'**', redirectTo: ''}

];
