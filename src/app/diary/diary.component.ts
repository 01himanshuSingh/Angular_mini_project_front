import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {
  entries: any[] = [];

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchEntries();
  }

  fetchEntries(): void {
    this.http.get<any[]>('https://angular-project-mini-backend.vercel.app/api/diaries').subscribe({
      next: (data) => (this.entries = data),
      error: (err) => console.error('❌ Error fetching entries:', err)
    });
  }

  deleteEntry(id: string): void {
    this.http.delete(`https://angular-project-mini-backend.vercel.app/api/diaries/${id}`).subscribe({
      next: () => {
        console.log('🗑️ Deleted successfully');
        this.fetchEntries(); // Refresh the list after deletion
      },
      error: (err) => {
        console.error('❌ Delete failed:', err);
      }
    });
  }

  editEntry(entry: any): void {
    this.router.navigate(['/edit', entry._id]); // ✅ Navigate to edit/:id route
  }
}
