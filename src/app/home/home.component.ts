import { Component, OnInit } from '@angular/core';
import { ITask } from '../model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  tasks: ITask[] = [
    {
      image: '/assets/images/Image1.png',
      title: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
      price: '$49.50',
    },
    {
      image: '/assets/images/Image2.png',
      title: 'Lee Pucker design. Leather botinki for handsome designers. Free shipping.',
      price: '$13.95',
    },
    {
      image: '/assets/images/Image3.png',
      title: 'Timesaving kitten to save months on development. Playful, cute, cheap!',
      price: '$128.99',
    },
    {
      image: '/assets/images/Image4.png',
      title: 'Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!',
      price: '$12.48',
    },
    {
      image: '/assets/images/Image5.png',
      title: 'Creativity stimulating lotion. Drink every morning to generate better ideas!',
      price: '$12',
    },
    {
      image: '/assets/images/Image6.png',
      title: 'Prototyping items to create a lot if useless things...',
      price: '$11',
    },
    {
      image: '/assets/images/Image7.png',
      title: 'John Von Ebalkin SPRING ',
      price: '$10',
    },
    {
      image: '/assets/images/Image8.png',
      title: 'Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY',
      price: '$12',
    }
  ]
  categories = [
    'All Categories',
    'Electronics',
    'Business & Industrial',
    'Computers',
    'Consumer Electroinics',
    'Home & Garden',
    'Collectibles',
  ];

  constructor() {}

  ngOnInit(): void {}
}
