import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreTestService {

  items = [
   { url: 'https://via.placeholder.com/150x150?text=Visit', title: 'Report', text: 'Explore Instagram Video: How to convert, engage. and get more instagra...',
    read: 'Read Report'},
   { url: 'https://via.placeholder.com/150x150?text=Visit', title: 'Blog Post', text: 'How to make social video work for your marketing team',
      read: 'Read Story'},
   { url: 'https://via.placeholder.com/150x150?text=Visit', title: 'Webinar', text: 'The video Forecast: 2019 predictions from industry leaders',
      read: 'Watch Webinar'},
   { url: 'https://via.placeholder.com/150x150?text=Visit', title: 'Report', text: 'Winning strategies for digital video ',
      read: 'Read Report'}
  ];

  database = [
    { url: 'https://via.placeholder.com/320x280?text=Visit', title: 'Blog Post', text: '4 organic ways to improve your website KPIs',
      read: 'Read Story'},
    { url: 'https://via.placeholder.com/320x280?text=Visit', title: 'Blog Post', text: 'How to turn your next event into a video content goldmine',
      read: 'Read Story'},
    { url: 'https://via.placeholder.com/320x280?text=Visit', title: 'Blog Post', text: 'How to quickly turn your podcast into a video script',
      read: 'Read Story'},
    ];

  database1 = [
    { url: 'https://via.placeholder.com/150x130?text=Visit', title: 'Read Story', text: 'Micro-influencers and B2C brand videos: A match in a heaven',
      read: 'Read Story'},
    { url: 'https://via.placeholder.com/150x130?text=Visit', title: 'Watch Webinar', text: 'Webinar improwing marketing through visual storytelling',
      read: 'Watch Webinar'},
    { url: 'https://via.placeholder.com/150x130?text=Visit', title: 'Read Report', text: 'How to reach audiences with social video: From Millennials to Gen Z',
      read: 'Read Report'},
  ];

  database2 = [
    { url: 'https://via.placeholder.com/320x280?text=Visit', title: 'Webinar', text: 'The Basic: Distributing Your Video Across Different Channels',
      read: 'Read Story'},
    { url: 'https://via.placeholder.com/320x280?text=Visit', title: 'Webinar', text: 'The Basic: Distributing Your Video Marketing Strategy',
      read: 'Read Story'},
    { url: 'https://via.placeholder.com/320x280?text=Visit', title: 'Webinar', text: 'The Basic: Distributing Your Video Marketing Strategy',
      read: 'Read Story'},
  ];


  Items() {
    return this.items;
  }


  constructor() { }
}
