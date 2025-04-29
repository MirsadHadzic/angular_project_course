import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
// import { BrowserModule } from @angular/platformBrowser
import { BrowserModule } from '@angular/platform-browser';

// group components together
// standalone components can't be added to the declarations, that's why we use it in import array instead of the declarations array
// you can include other modules inside an imports array
@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent]
})
export class AppModule {}