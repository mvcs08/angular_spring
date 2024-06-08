import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../../services/fornecedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from '../../Models/Fornecedor';



@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit {

  fornecedor? : Fornecedor;
  constructor( private fornecedorService: FornecedorService, private route:ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.fornecedorService.GetFornecedor(id).subscribe(data => {
    this.fornecedor = data;
    })
  }
}
