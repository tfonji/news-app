import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class SettingService {
    technology: boolean;
    science: boolean;
    sports: boolean;
    business: boolean;
    entertainment: boolean;
    ngOnInit(): void {
        
        
    }

    setUserSettings(technology: boolean, science: boolean, sports: boolean,
                         business: boolean, entertainment: boolean){
       this.technology = technology;
       this.science = science;
       this.sports = sports;
       this.business = business;
       this.entertainment = entertainment;
    }

    getUserSettings():any[] {
        return [this.technology,
                this.science,
                this.sports,
                this.business,
                this.entertainment
                ];
    }

}