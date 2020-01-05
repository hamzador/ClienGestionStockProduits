import {Action} from "@ngrx/store";

import {Principal} from './principal.model';

export  const  SAVE_PRINCIPAL = 'SAVE_USER';
export class SavePrincipalAction implements  Action{

readonly type = SAVE_PRINCIPAL;
constructor(public  playload: Principal) {

}


}
