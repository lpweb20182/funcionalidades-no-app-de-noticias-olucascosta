import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/noticias.service';
import { AutoresService } from 'src/app/autores.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-editar-noticia',
  templateUrl: './admin-editar-noticia.component.html',
  styleUrls: ['./admin-editar-noticia.component.css']
})
export class AdminEditarNoticiaComponent implements OnInit {
  categorias_service: any;
  noticia = null;
  categorias = null;
  autores = null;
  noticia_erro = false;
  update_ok = false;
  update_erro = false;

  constructor(private noticias_service: NoticiasService,
    private autores_service: AutoresService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.autores = this.autores_service.todos();
    this.categorias = this.categorias_service.todos();
    const id = this.route.snapshot.paramMap.get('id');
    this.noticias_service.encontrar(Number.parseInt(id))
    .subscribe(noticia => {
      if (!noticia) {
        this.router.navigate(['pagina-nao-encontrada']);
      } else {
        this.noticia = noticia;
      }
    },
    erro => this.noticia_erro = true);
  }

  editar(id: number, titulo: string, resumo: string, conteudo: string, autor: number, data: string, publicada: boolean, destaque: boolean, categoria: number) {
    this.noticias_service.editar(id, titulo, resumo, conteudo, autor, data, publicada, destaque, categoria).subscribe(
      noticia => {
        this.update_ok = true;
      },
      erro => {
        console.log(erro);
        this.update_erro = true;
      }
    )
  }

}
