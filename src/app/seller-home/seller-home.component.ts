import { Component, OnInit } from '@angular/core';
import { product } from '../data-types';
import { ProductService } from '../services/product.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit {
  productList:undefined|product[];
  productDeleteMessage:undefined|string;
  trashIcon=faTrash;
  editIcon=faEdit;

  constructor(private product:ProductService) {}

  ngOnInit(): void {
    this.updateProductList();
  }

  deleteProduct(id:number) {
    console.warn("test id", id);

    this.product.deleteProduct(id).subscribe((result)=>{
      if(result) {
        this.productDeleteMessage="Product is successfully deleted!";
        this.updateProductList();
      }
    })
    setTimeout(()=>{this.productDeleteMessage=undefined},3000);
  }

  updateProductList() {
    this.product.productList().subscribe((result)=>{
      console.warn(result);
      if(result) {
        this.productList=result;
      }
    })
  }


}
