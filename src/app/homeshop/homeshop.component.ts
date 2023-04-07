import {Component, OnInit} from '@angular/core';
import {ProduitModule} from 'app/module/produit.module';
import {ProduitService} from 'app/service/produit/produit.service';
import {CategorieModule} from 'app/module/categorie.module';
import {CategorieService} from 'app/service/categorie/categorie.service';

@Component({
    selector: 'app-homeshop',
    templateUrl: './homeshop.component.html',
    styleUrls: ['./homeshop.component.scss']
})
export class HomeshopComponent implements OnInit {
    produits: ProduitModule[];
    categories: CategorieModule[];
    currentPage = 5;
    pageSize = 1;
    showFullText = false;


    constructor(
        private produitService: ProduitService,
        private categorieService: CategorieService
    ) {
    }

    ngOnInit(): void {
        this.produits = [
            {
                codebar: 5156156156156156156,
                nom: 'Iphone 5',
                qteInPacket: 5,
                article: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i/s, la norme dans l\'industrie du film.Maintenant, vous pouvez monter vos images avec d\'autres séquences pro en 4K à 24i/s ou à 30 i/s, et même modifier l\'effet de profondeur de champ après le tournage. Stabilisateur intégré. Que vous filmiez à bord d\'un véhicule tout-terrain ou en courant aux côtés de votre sujet, il vous suffit d\'utiliser le mode Action pour réaliser des vidéos fluides et parfaitement stables.Réalisez des gros plans et des clichés de groupe aussi nets que colorés, grâce à la nouvelle caméra TrueDepth avec mise au point automatique et ouverture plus grande.Le génie dans l\'appareil avec l\'A16 Bionic, une puce de smartphone ultime.Sa batterie tient jusqu\'à 29h de lecture vidéo.',
                color: 'red',
                description: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i',
                quantiteStockMin: 100,
                quantiteStockmax: 250,
                prixFournisseur: 2500,
                prixventemin: 1500,
                prixvente: 1800,
                stock: 100,
                reductionprix: 25,
                dateexpiration: new Date(),
                image: 'https://mdbootstrap.com/img/Photos/Others/images/43.webp',
            },
            {
                codebar: 5156156156156156156,
                nom: 'Iphone 5',
                qteInPacket: 5,
                article: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i/s, la norme dans l\'industrie du film.Maintenant, vous pouvez monter vos images avec d\'autres séquences pro en 4K à 24i/s ou à 30 i/s, et même modifier l\'effet de profondeur de champ après le tournage. Stabilisateur intégré. Que vous filmiez à bord d\'un véhicule tout-terrain ou en courant aux côtés de votre sujet, il vous suffit d\'utiliser le mode Action pour réaliser des vidéos fluides et parfaitement stables.Réalisez des gros plans et des clichés de groupe aussi nets que colorés, grâce à la nouvelle caméra TrueDepth avec mise au point automatique et ouverture plus grande.Le génie dans l\'appareil avec l\'A16 Bionic, une puce de smartphone ultime.Sa batterie tient jusqu\'à 29h de lecture vidéo.',
                color: 'red',
                description: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i',
                quantiteStockMin: 100,
                quantiteStockmax: 250,
                prixFournisseur: 2500,
                prixventemin: 1500,
                prixvente: 1800,
                stock: 100,
                reductionprix: 25,
                dateexpiration: new Date(),
                image: 'https://mdbootstrap.com/img/Photos/Others/images/43.webp',
            }
            ,
            {
                codebar: 5156156156156156156,
                nom: 'Iphone 5',
                qteInPacket: 5,
                article: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i/s, la norme dans l\'industrie du film.Maintenant, vous pouvez monter vos images avec d\'autres séquences pro en 4K à 24i/s ou à 30 i/s, et même modifier l\'effet de profondeur de champ après le tournage. Stabilisateur intégré. Que vous filmiez à bord d\'un véhicule tout-terrain ou en courant aux côtés de votre sujet, il vous suffit d\'utiliser le mode Action pour réaliser des vidéos fluides et parfaitement stables.Réalisez des gros plans et des clichés de groupe aussi nets que colorés, grâce à la nouvelle caméra TrueDepth avec mise au point automatique et ouverture plus grande.Le génie dans l\'appareil avec l\'A16 Bionic, une puce de smartphone ultime.Sa batterie tient jusqu\'à 29h de lecture vidéo.',
                color: 'red',
                description: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i',
                quantiteStockMin: 100,
                quantiteStockmax: 250,
                prixFournisseur: 2500,
                prixventemin: 1500,
                prixvente: 1800,
                stock: 100,
                reductionprix: 25,
                dateexpiration: new Date(),
                image: 'https://mdbootstrap.com/img/Photos/Others/images/43.webp',
            },
            {
                codebar: 5156156156156156156,
                nom: 'Iphone 5',
                qteInPacket: 5,
                article: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i/s, la norme dans l\'industrie du film.Maintenant, vous pouvez monter vos images avec d\'autres séquences pro en 4K à 24i/s ou à 30 i/s, et même modifier l\'effet de profondeur de champ après le tournage. Stabilisateur intégré. Que vous filmiez à bord d\'un véhicule tout-terrain ou en courant aux côtés de votre sujet, il vous suffit d\'utiliser le mode Action pour réaliser des vidéos fluides et parfaitement stables.Réalisez des gros plans et des clichés de groupe aussi nets que colorés, grâce à la nouvelle caméra TrueDepth avec mise au point automatique et ouverture plus grande.Le génie dans l\'appareil avec l\'A16 Bionic, une puce de smartphone ultime.Sa batterie tient jusqu\'à 29h de lecture vidéo.',
                color: 'red',
                description: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i',
                quantiteStockMin: 100,
                quantiteStockmax: 250,
                prixFournisseur: 2500,
                prixventemin: 1500,
                prixvente: 1800,
                stock: 100,
                reductionprix: 25,
                dateexpiration: new Date(),
                image: 'https://mdbootstrap.com/img/Photos/Others/images/43.webp',
            },
            {
                codebar: 5156156156156156156,
                nom: 'Iphone 5',
                qteInPacket: 5,
                article: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i/s, la norme dans l\'industrie du film.Maintenant, vous pouvez monter vos images avec d\'autres séquences pro en 4K à 24i/s ou à 30 i/s, et même modifier l\'effet de profondeur de champ après le tournage. Stabilisateur intégré. Que vous filmiez à bord d\'un véhicule tout-terrain ou en courant aux côtés de votre sujet, il vous suffit d\'utiliser le mode Action pour réaliser des vidéos fluides et parfaitement stables.Réalisez des gros plans et des clichés de groupe aussi nets que colorés, grâce à la nouvelle caméra TrueDepth avec mise au point automatique et ouverture plus grande.Le génie dans l\'appareil avec l\'A16 Bionic, une puce de smartphone ultime.Sa batterie tient jusqu\'à 29h de lecture vidéo.',
                color: 'red',
                description: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i',
                quantiteStockMin: 100,
                quantiteStockmax: 250,
                prixFournisseur: 2500,
                prixventemin: 1500,
                prixvente: 1800,
                stock: 100,
                reductionprix: 25,
                dateexpiration: new Date(),
                image: 'https://mdbootstrap.com/img/Photos/Others/images/43.webp',
            },
            {
                codebar: 5156156156156156156,
                nom: 'Iphone 5',
                qteInPacket: 5,
                article: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i/s, la norme dans l\'industrie du film.Maintenant, vous pouvez monter vos images avec d\'autres séquences pro en 4K à 24i/s ou à 30 i/s, et même modifier l\'effet de profondeur de champ après le tournage. Stabilisateur intégré. Que vous filmiez à bord d\'un véhicule tout-terrain ou en courant aux côtés de votre sujet, il vous suffit d\'utiliser le mode Action pour réaliser des vidéos fluides et parfaitement stables.Réalisez des gros plans et des clichés de groupe aussi nets que colorés, grâce à la nouvelle caméra TrueDepth avec mise au point automatique et ouverture plus grande.Le génie dans l\'appareil avec l\'A16 Bionic, une puce de smartphone ultime.Sa batterie tient jusqu\'à 29h de lecture vidéo.',
                color: 'red',
                description: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i',
                quantiteStockMin: 100,
                quantiteStockmax: 250,
                prixFournisseur: 2500,
                prixventemin: 1500,
                prixvente: 1800,
                stock: 100,
                reductionprix: 25,
                dateexpiration: new Date(),
                image: 'https://mdbootstrap.com/img/Photos/Others/images/43.webp',
            },
            {
                codebar: 5156156156156156156,
                nom: 'Iphone 5',
                qteInPacket: 5,
                article: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i/s, la norme dans l\'industrie du film.Maintenant, vous pouvez monter vos images avec d\'autres séquences pro en 4K à 24i/s ou à 30 i/s, et même modifier l\'effet de profondeur de champ après le tournage. Stabilisateur intégré. Que vous filmiez à bord d\'un véhicule tout-terrain ou en courant aux côtés de votre sujet, il vous suffit d\'utiliser le mode Action pour réaliser des vidéos fluides et parfaitement stables.Réalisez des gros plans et des clichés de groupe aussi nets que colorés, grâce à la nouvelle caméra TrueDepth avec mise au point automatique et ouverture plus grande.Le génie dans l\'appareil avec l\'A16 Bionic, une puce de smartphone ultime.Sa batterie tient jusqu\'à 29h de lecture vidéo.',
                color: 'red',
                description: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i',
                quantiteStockMin: 100,
                quantiteStockmax: 250,
                prixFournisseur: 2500,
                prixventemin: 1500,
                prixvente: 1800,
                stock: 100,
                reductionprix: 25,
                dateexpiration: new Date(),
                image: 'https://mdbootstrap.com/img/Photos/Others/images/43.webp',
            },
            {
                codebar: 5156156156156156156,
                nom: 'Iphone 5',
                qteInPacket: 5,
                article: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i/s, la norme dans l\'industrie du film.Maintenant, vous pouvez monter vos images avec d\'autres séquences pro en 4K à 24i/s ou à 30 i/s, et même modifier l\'effet de profondeur de champ après le tournage. Stabilisateur intégré. Que vous filmiez à bord d\'un véhicule tout-terrain ou en courant aux côtés de votre sujet, il vous suffit d\'utiliser le mode Action pour réaliser des vidéos fluides et parfaitement stables.Réalisez des gros plans et des clichés de groupe aussi nets que colorés, grâce à la nouvelle caméra TrueDepth avec mise au point automatique et ouverture plus grande.Le génie dans l\'appareil avec l\'A16 Bionic, une puce de smartphone ultime.Sa batterie tient jusqu\'à 29h de lecture vidéo.',
                color: 'red',
                description: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i',
                quantiteStockMin: 100,
                quantiteStockmax: 250,
                prixFournisseur: 2500,
                prixventemin: 1500,
                prixvente: 1800,
                stock: 100,
                reductionprix: 25,
                dateexpiration: new Date(),
                image: 'https://mdbootstrap.com/img/Photos/Others/images/43.webp',
            },
            {
                codebar: 5156156156156156156,
                nom: 'Iphone 5',
                qteInPacket: 5,
                article: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i/s, la norme dans l\'industrie du film.Maintenant, vous pouvez monter vos images avec d\'autres séquences pro en 4K à 24i/s ou à 30 i/s, et même modifier l\'effet de profondeur de champ après le tournage. Stabilisateur intégré. Que vous filmiez à bord d\'un véhicule tout-terrain ou en courant aux côtés de votre sujet, il vous suffit d\'utiliser le mode Action pour réaliser des vidéos fluides et parfaitement stables.Réalisez des gros plans et des clichés de groupe aussi nets que colorés, grâce à la nouvelle caméra TrueDepth avec mise au point automatique et ouverture plus grande.Le génie dans l\'appareil avec l\'A16 Bionic, une puce de smartphone ultime.Sa batterie tient jusqu\'à 29h de lecture vidéo.',
                color: 'red',
                description: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i',
                quantiteStockMin: 100,
                quantiteStockmax: 250,
                prixFournisseur: 2500,
                prixventemin: 1500,
                prixvente: 1800,
                stock: 100,
                reductionprix: 25,
                dateexpiration: new Date(),
                image: 'https://mdbootstrap.com/img/Photos/Others/images/43.webp',
            },
            {
                codebar: 5156156156156156156,
                nom: 'Iphone 5',
                qteInPacket: 5,
                article: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i/s, la norme dans l\'industrie du film.Maintenant, vous pouvez monter vos images avec d\'autres séquences pro en 4K à 24i/s ou à 30 i/s, et même modifier l\'effet de profondeur de champ après le tournage. Stabilisateur intégré. Que vous filmiez à bord d\'un véhicule tout-terrain ou en courant aux côtés de votre sujet, il vous suffit d\'utiliser le mode Action pour réaliser des vidéos fluides et parfaitement stables.Réalisez des gros plans et des clichés de groupe aussi nets que colorés, grâce à la nouvelle caméra TrueDepth avec mise au point automatique et ouverture plus grande.Le génie dans l\'appareil avec l\'A16 Bionic, une puce de smartphone ultime.Sa batterie tient jusqu\'à 29h de lecture vidéo.',
                color: 'red',
                description: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i',
                quantiteStockMin: 100,
                quantiteStockmax: 250,
                prixFournisseur: 2500,
                prixventemin: 1500,
                prixvente: 1800,
                stock: 100,
                reductionprix: 25,
                dateexpiration: new Date(),
                image: 'https://mdbootstrap.com/img/Photos/Others/images/43.webp',
            },
            {
                codebar: 5156156156156156156,
                nom: 'Iphone 5',
                qteInPacket: 5,
                article: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i/s, la norme dans l\'industrie du film.Maintenant, vous pouvez monter vos images avec d\'autres séquences pro en 4K à 24i/s ou à 30 i/s, et même modifier l\'effet de profondeur de champ après le tournage. Stabilisateur intégré. Que vous filmiez à bord d\'un véhicule tout-terrain ou en courant aux côtés de votre sujet, il vous suffit d\'utiliser le mode Action pour réaliser des vidéos fluides et parfaitement stables.Réalisez des gros plans et des clichés de groupe aussi nets que colorés, grâce à la nouvelle caméra TrueDepth avec mise au point automatique et ouverture plus grande.Le génie dans l\'appareil avec l\'A16 Bionic, une puce de smartphone ultime.Sa batterie tient jusqu\'à 29h de lecture vidéo.',
                color: 'red',
                description: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i',
                quantiteStockMin: 100,
                quantiteStockmax: 250,
                prixFournisseur: 2500,
                prixventemin: 1500,
                prixvente: 1800,
                stock: 100,
                reductionprix: 25,
                dateexpiration: new Date(),
                image: 'https://mdbootstrap.com/img/Photos/Others/images/43.webp',
            },
            {
                codebar: 5156156156156156156,
                nom: 'Iphone 5',
                qteInPacket: 5,
                article: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i/s, la norme dans l\'industrie du film.Maintenant, vous pouvez monter vos images avec d\'autres séquences pro en 4K à 24i/s ou à 30 i/s, et même modifier l\'effet de profondeur de champ après le tournage. Stabilisateur intégré. Que vous filmiez à bord d\'un véhicule tout-terrain ou en courant aux côtés de votre sujet, il vous suffit d\'utiliser le mode Action pour réaliser des vidéos fluides et parfaitement stables.Réalisez des gros plans et des clichés de groupe aussi nets que colorés, grâce à la nouvelle caméra TrueDepth avec mise au point automatique et ouverture plus grande.Le génie dans l\'appareil avec l\'A16 Bionic, une puce de smartphone ultime.Sa batterie tient jusqu\'à 29h de lecture vidéo.',
                color: 'red',
                description: 'Une manière inédite et magique d’interagir avec votre iPhone 14 Pro Max . Conçu pour durer avec son design en Ceramic Shield, plus résistant que le verre de n\'importe quel smartphone. Résistant à l\'eau. Acier inoxydable de qualité chirurgicale.Son écran verrouillé est toujours visible, et vous pouvez consulter d\'un simple coup d\'oeil, sans avoir besoin de le toucher.Avec iOS 16, vous pouvez personnaliser votre écran verrouillé de façons inédites. Détourez une partie de votre photo pour la mettre en avant. Suivez l\'évolution de vos anneaux Activité. Et voyez en direct les informations de vos apps préférées.L\'écran jusqu\'à deux fois plus lumineux en plein soleil.L\'iPhone 14 Pro Max est capable de détecter que vous venez d\'avoir un grave accident de voiture. Il appelle automatiquement les secours et prévient vos contacts d\'urgence.Son appareil photo principal de 48 Mpx avec capteur quad-pixel avancé donne jusqu\'à 4* plus de résolution. Son nouveau système pro enrichit sa gamme d\'options de zoom d\'un téléobjectif de qualité optique 2* et vous offre ainsi une liberté de cadrage inédite. Une qualité photo jusqu\'à 3* supérieure par faible luminosité avec l\'ultra grand-angle, 2* supérieure par faible luminosité avec l\'objectif principal et 2* supérieure par faible luminosité avec le téléobjectif. Avec le mode Cinématique, filmez désormais des vidéos en 4K HDR à 24i',
                quantiteStockMin: 100,
                quantiteStockmax: 250,
                prixFournisseur: 2500,
                prixventemin: 1500,
                prixvente: 1800,
                stock: 100,
                reductionprix: 25,
                dateexpiration: new Date(),
                image: 'https://djx5h8pabpett.cloudfront.net/wp-content/uploads/sites/4/2017/01/24180639/Dewars.jpeg',
            }
        ];
        // this.getProduits();
        this.getCategories();
    }

    getProduits(): void {
        this.produitService.getProduits().subscribe(produits => {
            this.produits = produits;
        });
    }

    getCategories(): void {
        this.categorieService.getCategories().subscribe(categories => {
            this.categories = categories;
        });
    }

    getCategorie(id: number): CategorieModule {
        return this.categories.find(categorie => categorie.id == id);
    }

    paginate(event) {
        this.pageSize = event.target.value;
        this.currentPage = 1;
    }

    pageChanged(event) {
        this.currentPage = event;
    }

    showMore() {
        this.showFullText = true;
    }

    collapse() {
        this.showFullText = false;

    }
}

