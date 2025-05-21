import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-diaryadd',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './diaryadd.component.html',
  styleUrls: ['./diaryadd.component.scss'],
})
export class DiaryaddComponent {
  diary = {
    title: '',
    date: '',
    entry: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    console.log('Submitting:', this.diary);

    this.http.post('http://localhost:3000/api/diaries', this.diary).subscribe({
      next: (res) => {
        console.log('✅ Submitted to backend:', res);
        alert('Diary submitted successfully!');
        this.diary = { title: '', date: '', entry: '' }; // Reset form
      },
      error: (err) => {
        console.error('❌ Error submitting diary:', err);
        alert('Failed to submit diary entry');
      }
    });
  }
}
