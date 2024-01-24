import { NgModule } from '@angular/core';
import { MainLayout } from './main.layout';
import { MainHeaderComponent } from './components/header/header.component';
import { MainSidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { routes } from './router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

const imports = [CommonModule, RouterModule.forChild(routes), NgbCollapse];

const declarations = [MainLayout, MainHeaderComponent, MainSidebarComponent];

@NgModule({
    imports,
    declarations,
})
export class MainModule {}
