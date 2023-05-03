import { OfferType } from './offer-type.enum.js';
import { User } from './user.type.js';
import { Location } from './location.type.js';
import { Feature } from './feature-type.enum.js';
import { City } from './city-type.enum.js';

export type Offer = {
  title: string;
  description: string;
  postdate: Date;
  city: City;
  prefoto: string;
  foto: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  offerType: OfferType;
  roomsCount: number;
  guestsCount: number;
  price: number;
  features: Feature[];
  user: User;
  commentsCount: number;
  address: Location;
}
