import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css']
})
export class UpcomingMoviesComponent {

    movieName: String | undefined;
    selectedDate: Date | undefined;
    selectedTime: String | undefined;
  
  
    bookTicket(){
      console.log('Movie Name', this.movieName);
      console.log('Movie Date', this.selectedDate);
      console.log('Movie Time', this.selectedTime);
      alert("Ticket Booked");
    }

}
