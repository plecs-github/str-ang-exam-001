import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  list: Hero [] = [
    {
      id: 1,
      name: 'Aquaman',
      superPower: 'underwater fight',
      address: 'Atlantis',
    },
    {
      id: 2,
      name: 'Iron Man',
      superPower: 'extra speed flying',
      address: 'New York',
    },
    {
      id: 3,
      name: 'Hellboy',
      superPower: 'indestrtructible right hand',
      address: 'San Diego',
    },
    {
      id: 4,
      name: 'Spiderman',
      superPower: 'ability to cling to walls',
      address: 'Chicago',
    },
    {
      id: 5,
      name: 'Wonder Woman',
      superPower: 'prodigious strength and speed',
      address: 'Jackson Heights',
    },
  ]
  constructor() { }
}
