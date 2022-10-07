import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  arrays = [
    {
      image: '/assets/images/v1.png',
      title: 'Clothing & Shoes',
    },
    {
      image: '/assets/images/v2.png',
      title: 'Entertainment',
    },
    {
      image: '/assets/images/v3.png',
      title: 'Music',
    },
    {
      image: '/assets/images/v4.png',
      title: 'Sport & Lifestyle',
    },
    {
      image: '/assets/images/v5.png',
      title: 'Pets',
    },
    {
      image: '/assets/images/v6.png',
      title: 'Kitchen Accessories',
    },
    {
      image: '/assets/images/v7.png',
      title: 'Travel Equipment',
    },
    {
      image: '/assets/images/v8.png',
      title: 'Growing & Garden',
    },
    {
      image: '/assets/images/v9.png',
      title: 'Electrical Tools',
    },
    {
      image: '/assets/images/v10.png',
      title: 'Mother Care',
    },
    {
      image: '/assets/images/v11.png',
      title: 'Toys & Entertainment',
    },
    {
      image: '/assets/images/v12.png',
      title: 'Vintage',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
