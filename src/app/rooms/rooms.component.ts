import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName = 'Hilton';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  roomList: RoomList[] = [{
    roomNumber: 1,
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner',
    price: 500,
    photos: 'images.com/123123',
    checkinTime: new Date('29-Sep-2023'),
    checkoutTime: new Date('30-Sep-2023'),
    rating : 4.5
  },
  {
    roomNumber: 2,
    roomType: 'Normal Room',
    amenities: 'TV',
    price: 200,
    photos: 'images.com/321321',
    checkinTime: new Date('29-Sep-2023'),
    checkoutTime: new Date('30-Sep-2023'),
    rating: 3.5
  },
  {
    roomNumber: 3,
    roomType: 'Private Suite',
    amenities: 'Everything special',
    price: 1000,
    photos: 'images.com/123123123',
    checkinTime: new Date('29-Sep-2023'),
    checkoutTime: new Date('30-Sep-2023'),
    rating: 5
  },
]

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
