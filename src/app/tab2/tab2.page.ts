import { GeneroService } from './../services/genero.service';
import { SerieService } from './../services/serie.service';
import { DadosService } from './../services/dados.service';
import { AlertController, ToastController } from '@ionic/angular';
import { IListaSeries, ISerieApi } from './../models/ISerieAPI.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  titulo = 'Séries';

  listaSeries: IListaSeries;
  generos: string[] = [];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public serieService: SerieService,
    public generoService: GeneroService,
    public route: Router) {}

    buscarSeries(evento: any){
      const busca = evento.target.value;
      if (busca && busca.trim() !== ''){
        this.serieService.buscarSeries(busca).subscribe(dados=>{
          console.log(dados);
          this.listaSeries = dados;
        });
      }
    }

    exibirSerie(serie: ISerieApi){
      this.dadosService.guardarDados('serie', serie);
      this.route.navigateByUrl('/dados-serie');
    }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar a série?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, favoritar!',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Série adicionada aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  ngOnInit(){
    this.generoService.buscarGenero().subscribe(dados =>{
        console.log('Generos: ', dados.genres);
        dados.genres.forEach(genero => {
          this.generos[genero.id] =genero.name;
    });

    this.dadosService.guardarDados('generos', this.generos);
    });
  }
}
