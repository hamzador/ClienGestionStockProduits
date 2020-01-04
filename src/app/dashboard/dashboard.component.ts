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
  productsData = {
    labels: [],
    datasets: []
  };

  usersData = {
    labels: [],
    datasets: []
  };

  constructor(private productService: ProduitService, private userService: UserService) { }

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

    this.productService.getAll().subscribe(list=> list.forEach(product => {
      this.productsData.labels.push(product.ref);
      datasetsQuantite.data.push(product.quantite);
      datasetsPrixUnitaire.data.push(product.prixUnitaire);
    }));

    this.productsData.datasets.push(datasetsQuantite);
    this.productsData.datasets.push(datasetsPrixUnitaire);
    console.log(this.productsData);


    const datasetsUser = {
      label: "Roles",
      data: [],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgb(255, 99, 132)'
    };

    this.usersData.datasets.push(datasetsUser);

    this.usersData.labels.push('ROLE_ADMIN');
    this.usersData.labels.push('ROLE_USER');

    this.userService.getAll().subscribe(list => {
      let adminLength = 0;

      list.forEach(user => user.roles.forEach(role => {
        if(role.name == 'ROLE_ADMIN'){
          adminLength++;
        }
      }));

      datasetsUser.data.push(adminLength);

      let userLength = 0;
      list.forEach(user => user.roles.forEach(role => {
        if(role.name == 'ROLE_USER'){
          userLength++;
        }
      }));

      datasetsUser.data.push(userLength);

    });
  }





}
