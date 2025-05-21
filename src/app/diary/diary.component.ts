import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-diary',
  standalone: true,            // if standalone component
  imports: [CommonModule, RouterLink], // must import these for *ngIf, http, etc.
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']      // fixed plural
})
export class DiaryComponent implements OnInit {
  entries: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchEntries();
  }

  fetchEntries() {
    this.http.get<any[]>('http://localhost:3000/api/diaries').subscribe({
      next: (data) => this.entries = data,
      error: (err) => console.error('Error fetching entries:', err)
    });
  }

  deleteEntry(id: string) {
  this.http.delete(`http://localhost:3000/api/diaries/${id}`).subscribe({
    next: () => {
      console.log('Deleted successfully');
      this.fetchEntries(); // refresh list
    },
    error: (err) => {
      console.error('Delete failed:', err);
    }
  });
}


  editEntry(entry: any) {
    alert('🛠️ You can navigate to an edit form and update this entry.\nEntry:\n' + JSON.stringify(entry, null, 2));
    // Later you can route to /edit/:id for editing functionality
  }
}
