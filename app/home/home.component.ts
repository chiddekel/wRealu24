import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    htmlString: string = "<span><h1>HtmlView demo in <font color=\"blue\">NativeScript</font> App</h1></span>";


    constructor() {
    }

    ngOnInit(): void {
    }
}
