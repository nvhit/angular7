import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CmsRoutingModule} from './cms-routing.module';

import {LayoutComponent} from './layout/layout.component';
import {AppRightPanelComponent} from "./layout/app.rightpanel.component";
import {AppMenuComponent, AppSubMenuComponent} from "./layout/app.menu.component";
import {AppMegamenuComponent} from "./layout/app.megamenu.component";
import {AppBreadcrumbComponent} from "./layout/app.breadcrumb.component";
import {AppTopBarComponent} from "./layout/app.topbar.component";
import {AppFooterComponent} from "./layout/app.footer.component";
import {AppProfileComponent} from "./layout/app.profile.component";

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

import {BreadcrumbService} from "./layout/breadcrumb.service";
import {CarService} from "./demo/service/carservice";
import {CountryService} from "./demo/service/countryservice";
import {EventService} from "./demo/service/eventservice";
import {NodeService} from "./demo/service/nodeservice";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        LayoutComponent,
        AppRightPanelComponent,
        AppMenuComponent,
        AppSubMenuComponent,
        AppMegamenuComponent,
        AppBreadcrumbComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppProfileComponent,
        DashboardDemoComponent,
        SampleDemoComponent,
        FormsDemoComponent,
        DataDemoComponent,
        PanelsDemoComponent,
        OverlaysDemoComponent,
        MenusDemoComponent,
        MessagesDemoComponent,
        MessagesDemoComponent,
        MiscDemoComponent,
        ChartsDemoComponent,
        EmptyDemoComponent,
        FileDemoComponent,
        DocumentationComponent
    ],
    imports: [
        CommonModule,
        CmsRoutingModule,
        SharedModule
    ],
    providers: [
        CarService, CountryService, EventService, NodeService, BreadcrumbService
    ]
})
export class CmsModule {
}
