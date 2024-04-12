import { Component } from '@angular/core';
import HeaderComponent from '../header/header.component';
import ListComponent from '../list/list.component';
import FooterComponent from '../footer/footer.component';

/**
 * The home component
 */
@Component({
    selector: 'home',
    standalone: true,
    templateUrl: './home.component.html',
    imports: [HeaderComponent, ListComponent, FooterComponent],
})
export default class HomeComponent {}
