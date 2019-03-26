"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var firebase = require("nativescript-plugin-firebase/app");
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    function ItemsComponent(itemService) {
        this.itemService = itemService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
    };
    ItemsComponent.prototype.ngOnDestroy = function () {
    };
    ItemsComponent.prototype.transactionalUpdate = function () {
        console.log("ENTER!!");
        var sfDocRef = firebase.firestore().collection("cities").doc("SF");
        console.log(sfDocRef);
        firebase.firestore().runTransaction(function (transaction) {
            var sfDoc = transaction.get(sfDocRef);
            if (sfDoc.exists) {
                console.log("EXISTS");
                var val = {};
                val["population"] = 100;
                transaction.set(sfDocRef, val);
            }
            else {
                console.log("DOESN'T EXIST");
            }
            return null;
        })
            .then(function () { return console.log("Transaction successfully committed"); })
            .catch(function (error) { return console.log("doTransaction error: " + error); });
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html"
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBRzdELCtDQUE2QztBQUU3QywyREFBNkQ7QUFPN0Q7SUFJSSw2RUFBNkU7SUFDN0UsaUVBQWlFO0lBQ2pFLHVGQUF1RjtJQUN2Riw0QkFBNEI7SUFDNUIsd0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUVqRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFDRCxvQ0FBVyxHQUFYO0lBQ0EsQ0FBQztJQUVELDRDQUFtQixHQUFuQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQUEsV0FBVztZQUMzQyxJQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hDLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixJQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7Z0JBQ2YsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDeEIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDbEM7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNoQztZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQzthQUNHLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxFQUFqRCxDQUFpRCxDQUFDO2FBQzdELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLEVBQTVDLENBQTRDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBbENRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBU21DLDBCQUFXO09BUm5DLGNBQWMsQ0FvQzFCO0lBQUQscUJBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IHBhdGgsIGtub3duRm9sZGVycywgRmlsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBpdGVtczogQXJyYXk8SXRlbT47XG4gICAgcHJpdmF0ZSBwYXRoO1xuICAgIHByaXZhdGUgYXVkaW9QbGF5ZXI7XG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0b1xuICAgIC8vIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSxcbiAgICAvLyBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgfVxuICAgIG5nT25EZXN0cm95KCkge1xuICAgIH1cblxuICAgIHRyYW5zYWN0aW9uYWxVcGRhdGUoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRU5URVIhIVwiKTtcbiAgICAgICAgY29uc3Qgc2ZEb2NSZWYgPSBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKFwiY2l0aWVzXCIpLmRvYyhcIlNGXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhzZkRvY1JlZik7XG4gICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLnJ1blRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNmRG9jID0gdHJhbnNhY3Rpb24uZ2V0KHNmRG9jUmVmKTtcbiAgICAgICAgICAgIGlmIChzZkRvYy5leGlzdHMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVYSVNUU1wiKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSB7fTtcbiAgICAgICAgICAgICAgICB2YWxbXCJwb3B1bGF0aW9uXCJdID0gMTAwO1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLnNldChzZkRvY1JlZiwgdmFsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJET0VTTidUIEVYSVNUXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZyhgVHJhbnNhY3Rpb24gc3VjY2Vzc2Z1bGx5IGNvbW1pdHRlZGApKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiZG9UcmFuc2FjdGlvbiBlcnJvcjogXCIgKyBlcnJvcikpO1xuICAgIH1cblxufVxuIl19