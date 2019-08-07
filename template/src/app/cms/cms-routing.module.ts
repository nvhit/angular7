import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FormsDemoComponent} from "./demo/view/formsdemo.component";
import {MessagesDemoComponent} from "./demo/view/messagesdemo.component";
import {DocumentationComponent} from "./demo/view/documentation.component";
import {DataDemoComponent} from "./demo/view/datademo.component";
import {SampleDemoComponent} from "./demo/view/sampledemo.component";
import {OverlaysDemoComponent} from "./demo/view/overlaysdemo.component";
import {FileDemoComponent} from "./demo/view/filedemo.component";
import {MiscDemoComponent} from "./demo/view/miscdemo.component";
import {PanelsDemoComponent} from "./demo/view/panelsdemo.component";
import {DashboardDemoComponent} from "./demo/view/dashboarddemo.component";
import {EmptyDemoComponent} from "./demo/view/emptydemo.component";
import {ChartsDemoComponent} from "./demo/view/chartsdemo.component";
import {MenusDemoComponent} from "./demo/view/menusdemo.component";
import {LayoutComponent} from "./layout/layout.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: '', component: DashboardDemoComponent},
            {path: 'sample', component: SampleDemoComponent},
            {path: 'forms', component: FormsDemoComponent},
            {path: 'data', component: DataDemoComponent},
            {path: 'panels', component: PanelsDemoComponent},
            {path: 'overlays', component: OverlaysDemoComponent},
            {path: 'menus', component: MenusDemoComponent},
            {path: 'messages', component: MessagesDemoComponent},
            {path: 'misc', component: MiscDemoComponent},
            {path: 'empty', component: EmptyDemoComponent},
            {path: 'charts', component: ChartsDemoComponent},
            {path: 'file', component: FileDemoComponent},
            {path: 'documentation', component: DocumentationComponent}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CmsRoutingModule {
}
