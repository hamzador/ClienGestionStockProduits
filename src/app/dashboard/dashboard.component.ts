import {Component, Input, OnInit} from '@angular/core';
import {ProduitService} from "../produit/produit.service";
import {UserService} from "../user/user.service";
import {Produit} from "../shared/produit.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usersData ={
    labels: [],
    datashets:[]
};
  produitsData ={
    labels: [],
    datashets:[]
  };
  constructor(private produitService: ProduitService,private userService: UserService) { }

  ngOnInit() {
    const datasetsQuantite = {
      label: "Quantité",
      data: [],
      backgroundColor: 'rgba(255, 200, 85, 0.2)',
      borderColor: 'rgb(255, 99, 132)'
    };

    const datasetsPrixUnitaire = {
      label: "Prix Unitaire",
      data: [],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgb(255, 99, 132)'
    };


    this.produitService.getAll().subscribe(list=> list.forEach(produit => {
      this.produitsData.labels.push(produit.ref);
      //console.log("produits"+produit.ref+"quantity="+produit.quantite);
      datasetsQuantite.data.push(produit.quantite);
    //  console.log("++++"+datasetsQuantite.label+" "+datasetsQuantite.data)
      datasetsPrixUnitaire.data.push(produit.prixUnitaire);

      /*****************************************************************************************************************/

    }));
    this.produitsData.datashets.push(datasetsQuantite);
    console.log("this.produitsData.datashets= "+this.produitsData.datashets.length)
    this.produitsData.datashets.push(datasetsPrixUnitaire);
    console.log(this.produitsData);


    const datasetsUser = {
      label: "Roles",
      data: [],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
       borderColor: 'rgb(255, 99, 132)'
    };

    // this.usersData.datashets.push(datasetsUser);
    //
    // this.usersData.labels.push('ROLE_ADMIN');
    // this.usersData.labels.push('ROLE_USER');
    //
    // this.userService.getAll().subscribe(list => {
    //   let adminLength = 0;
    //
    //   list.forEach(user => user.roles.forEach(role => {
    //     if(role.name == 'ROLE_ADMIN'){
    //       adminLength++;
    //     }
    //   }));
    //
    //   datasetsUser.data.push(adminLength);
    //
    //   let userLength = 0;
    //   list.forEach(user => user.roles.forEach(role => {
    //     if(role.name == 'ROLE_USER'){
    //       userLength++;
    //     }
    //   }));
    //
    //   datasetsUser.data.push(userLength);
    //
    // });

  }

  //   const datasetsQuantite={
  //     label: "Quantité",
  //     data: []
  //   };
  //   const datasetsPrixUnitaire ={
  //     label: "PrixUnitaire",
  //     data: []
  //   };
  //
  //
  //   this.produitService.getAll().subscribe(list=>{
  //     list.forEach(produit=>{
  //       this.dataProduitsParCategorie.labels.push(produit.ref);
  //       datasetsQuantite.data.push(produit.quantite);
  //       datasetsPrixUnitaire.data.push(produit.prixUnitaire)
  //     });
  //   });
  //   this.dataProduitsParCategorie.datashets.push(datasetsQuantite);
  //
  //
  //   this.dataProduitsParCategorie.datashets.push(datasetsPrixUnitaire);
  //
  //
  // }



}
