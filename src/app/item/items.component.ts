import { Component, OnInit, OnDestroy } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { path, knownFolders, File } from "tns-core-modules/file-system";
import * as firebase from "nativescript-plugin-firebase/app";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit, OnDestroy {
    items: Array<Item>;
    private path;
    private audioPlayer;
    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
    ngOnDestroy() {
    }

    transactionalUpdate(): void {
        console.log("ENTER!!");
        const sfDocRef = firebase.firestore().collection("cities").doc("SF");
        console.log(sfDocRef);
        firebase.firestore().runTransaction(transaction => {
            const sfDoc = transaction.get(sfDocRef);
            if (sfDoc.exists) {
                console.log("EXISTS");
                const val = {};
                val["population"] = 100;
                transaction.set(sfDocRef, val);
            } else {
                console.log("DOESN'T EXIST");
            }
            return null;
        })
            .then(() => console.log(`Transaction successfully committed`))
            .catch(error => console.log("doTransaction error: " + error));
    }

}
