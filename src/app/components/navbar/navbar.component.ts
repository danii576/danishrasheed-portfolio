
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({
    selector:"app-navbar",
    templateUrl:"./navbar.component.html",
    styleUrls:["./navbar.component.css"],
    imports:[ CommonModule, ButtonModule ]
})
export class NavbarComponent{

}
