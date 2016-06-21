# mult-tab-component-angular2 @version 0.1 2016

This is a Mult Tab Component for angular 2.
The component use Bootstrap CSS.
It's the code is simple to use just import the the component in the parent component.

Exp:
import {MultTabI} from '../mult-tab/mult-tab.interface.component';
import {MultTabComponent} from '../mult-tab/mult-tab.component';

@Component(
  
    {
    selector : 'adm-user',
    template : `<mult-tab  (gotoTab)="showTabContent=$event" [loadTabs]="multTabs" >
               
                 /*
                 * Put your subcomponents here
                 */
               
               </mult-tab>` ,
               
    /*
    * Set as a directive 
    */           
    directives: [MultTabComponent]
})



export class AdmUser implements OnInit{
    
    
    @ViewChildren(MultTabComponent) children:QueryList<AddNewUserComponent>;
    @Output() multTabs:Array<MultTabI>;
    
    constructor(){}

    ngOnInit(){
       
       /*
       * Confi yours Tabs
       */
        this.multTabs=[
            {title:"Usuários Cadastrados",tabPage:"LsitAllUsers",icon:"fa fa-group",activitieTab:true,componentToBeLoad:ListAllUsersComponent,loadOn:"#speed-tab-content"},
            {title:"Cadastrar",tabPage:"AddNewUser",icon:"fa fa-plus",activitieTab:false,componentToBeLoad:AddNewUserComponent,loadOn:"#speed-tab-content"},
            {title:"Permissões",tabPage:"UserPermission",icon:"fa fa-key",activitieTab:false,componentToBeLoad:ListAllUsersComponent,loadOn:"#speed-tab-content"}
        ];
        
         
    }

}
