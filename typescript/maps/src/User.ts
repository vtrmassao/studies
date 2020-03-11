import faker from 'faker';
import { Mappable } from './Mappable';

export default 'red';

export class User implements Mappable {
  name: string;
  color: string = 'yellow';
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
