import { NgModule } from "@angular/core";
import { MainLayout } from "./main.layout";
import { MainHeaderComponent } from "./components/header/header.component";
import { MainSidebarComponent } from "./components/sidebar/sidebar.component";
import { RouterModule } from "@angular/router";
import { routes } from './router';

const imports = [
    RouterModule.forChild(routes)
];

const declarations = [
    MainLayout,
    MainHeaderComponent,
    MainSidebarComponent
];

@NgModule({
    imports,
    declarations
})
export class MainModule { }