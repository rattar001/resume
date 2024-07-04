import { Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { MilestoneComponent } from './milestone/milestone.component';

export const routes: Routes = [
    {
        path: 'overview',
        component: OverviewComponent
    },
    {
        path: 'showcase',
        component: ShowcaseComponent
    },
    {
        path: 'milestone',
        component: MilestoneComponent
    }
];
