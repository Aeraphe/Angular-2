System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MultTabComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let MultTabComponent = class MultTabComponent {
                constructor() {
                    this.gotoTab = new core_1.EventEmitter();
                }
                ;
                ngOnInit() {
                    this.activeTabOnStar();
                }
                activeTabOnStar() {
                    this.loadTabs.forEach((currentItem) => {
                        if (currentItem.activitieTab) {
                            this.activeTabName = currentItem.tabPage;
                            this.gotoTab.emit(currentItem.tabPage);
                        }
                    });
                }
                setActiveTab(page) {
                    this.activeTabName = page;
                }
                navegateTo(page) {
                    //This navegate pass a event for the component use in *ngIf for show the content
                    this.gotoTab.emit(page);
                    /** Active the Tabview */
                    this.setActiveTab(page);
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Array)
            ], MultTabComponent.prototype, "loadTabs", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], MultTabComponent.prototype, "gotoTab", void 0);
            MultTabComponent = __decorate([
                core_1.Component({
                    selector: 'mult-tab',
                    template: `<div class="row" style="padding-top:25px">
                        <div class="col-lg-12">
                            <div class="tabs-container">
                                <ul class="nav nav-tabs">
                                    <li *ngFor="let tab of loadTabs" [class.active]="tab.tabPage==activeTabName">
                                    <a data-toggle="tab" (click)="navegateTo(tab.tabPage)" id="btn-tab1" href="#">
                                    <i class="{{tab.icon}}"></i>
                                    {{tab.title}}
                                    </a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div id="tab-1" class="tab-pane active">
                                        <div class="panel-body">                                      
                                            <speed-tab-content  id="speed-tab-content">
                                            <ng-content ></ng-content>
                                            </speed-tab-content>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
                }), 
                __metadata('design:paramtypes', [])
            ], MultTabComponent);
            exports_1("MultTabComponent", MultTabComponent);
        }
    }
});
//# sourceMappingURL=mult-tab.component.js.map