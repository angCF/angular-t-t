import { Component } from '@angular/core';
import { TableComponent } from "../../components/table/table.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [TableComponent]
})
export class HomeComponent {

}
