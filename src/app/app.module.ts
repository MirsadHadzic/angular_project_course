import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
// import { BrowserModule } from @angular/platformBrowser
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './shared/card/card.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { FormsModule } from '@angular/forms';

// group components together
// standalone components can't be added to the declarations, that's why we use it in import array instead of the declarations array
// you can include other modules inside an imports array
// Date pipe is automatically included by the BrowserModule
@NgModule({
    declarations: [AppComponent, TasksComponent, UserComponent, HeaderComponent, NewTaskComponent, CardComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule]
})
export class AppModule {}