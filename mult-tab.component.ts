import {Component,OnInit,EventEmitter,Input,Output} from 'angular2/core';
import {MultTabI} from './mult-tab.interface.component';
declare var appPath:string;

@Component({
    selector: 'mult-tab',
    template: 
                    `<div class="row" style="padding-top:25px">
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
 
})


/**
 * This class create a the mult tab component 
 * Pass (gotoTab)="showTabContent=$event" and use whith *ngIf for load Nested Components from the component that import this
 * Component
 * Ex:
 *  <add-new-user *ngIf="showTabContent=='AddNewUser'"></add-new-user>
 * 
 * @version 14/06/2016
 * @Author Alberto Eduardo
 */
export class MultTabComponent implements OnInit{
    
    /** Tab data revice from the componen that import this Tab Component */
    @Input() loadTabs:Array<MultTabI>;
    @Output() gotoTab = new EventEmitter<string>();;

    public activeTabName:string;
    
    
    constructor(){

       
    }

    ngOnInit(){
    
        this.activeTabOnStar();
   
    }


    activeTabOnStar():void{
        this.loadTabs.forEach((currentItem:MultTabI)=>{
            if(currentItem.activitieTab){
                this.activeTabName=currentItem.tabPage;
                this.gotoTab.emit(currentItem.tabPage);
            }
        })
        

    }

    setActiveTab(page:string):void{
        this.activeTabName=page;   
 }

    navegateTo(page:string){
        //This navegate pass a event for the component use in *ngIf for show the content
        this.gotoTab.emit(page);
        /** Active the Tabview */
        this.setActiveTab(page); 

    }

        

}

