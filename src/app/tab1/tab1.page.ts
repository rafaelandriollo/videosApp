import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Vídeos App';
  listaVideos: IFilme[] = [
    {
      nome: 'Um Lugar Silencioso (2018)',
      lancamento: '05/04/2018 (BR)',
      duracao: '1h 30min',
      classificacao: 76,
      cartaz: 'https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      generos: ['Drama', 'Horror', 'Sci-Fi'],
      pagina: '/a-quiet-place'
    },
    {
      nome: 'A Bruxa (2015)',
      lancamento: '03/03/2016 (BR)',
      duracao: '1h 32min',
      classificacao: 69,
      cartaz: 'https://m.media-amazon.com/images/M/MV5BMTUyNzkwMzAxOF5BMl5BanBnXkFtZTgwMzc1OTk1NjE@._V1_UX182_CR0,0,182,268_AL_.jpg',
      generos: ['Drama', 'Horror', 'Mistery'],
      pagina: '/the-witch'
    },
    {
      nome: 'A Mulher na Janela (2021)',
      lancamento: '14 May 2021 (Brazil)',
      duracao: '1h 40min',
      classificacao: 57,
      cartaz: 'http://conteudo.imguol.com.br/c/splash/55/2021/05/14/poster-do-filme-a-mulher-na-janela-da-netflix-1621021532233_v2_3x4.jpg',
      generos: ['Crime', 'Drama', 'Mystery'],
      pagina: '/the-woman-in-the-window'
    },
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '20 May 2021 (Brazil)',
      duracao: '1h 50min',
      classificacao: 62,
      cartaz: 'https://br.web.img3.acsta.net/pictures/21/03/31/18/22/5366148.png',
      generos: ['Action', 'Adventure', 'Fantasy'],
      pagina: '/mortal-kombat'
    },
    {
      nome: 'Oxigênio (2021)',
      lancamento: '12 May 2021 (Brazil)',
      duracao: '1h 40min',
      classificacao: 65,
      cartaz: 'https://deadline.com/wp-content/uploads/2021/05/OXYGEN_Vertical_RGB_FR.jpg',
      generos: ['Drama', 'Horror', 'Mistery'],
      pagina: '/oxigene'
    }
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) {}

    exibirFilme(filme: IFilme){
      this.dadosService.guardarDados('filme', filme);
      this.route.navigateByUrl('/dados-filme');
    }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
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
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
