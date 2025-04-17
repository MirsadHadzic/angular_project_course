import { Component } from '@angular/core'; 

@Component({

    selector: 'app-header',
    // template: '<h1>Hello World</h1>' - DO NOT USE AN INLINE ELEMENT
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})

export class HeaderComponent {}