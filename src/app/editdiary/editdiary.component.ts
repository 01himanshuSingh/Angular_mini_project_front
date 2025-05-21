import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editdiary',
  imports: [FormsModule],
  templateUrl: './editdiary.component.html',
  styleUrl: './editdiary.component.scss'
})
export class EditdiaryComponent  implements OnInit {
  diaryId: string = '';
  diary: any = {
    title: '',
    date: '',
    entry: ''
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.diaryId = this.route.snapshot.paramMap.get('id') || '';
    this.fetchDiaryEntry();
  }

  fetchDiaryEntry(): void {
    this.http.get(`https://angular-project-mini-backend.vercel.app/api/diaries/${this.diaryId}`)
      .subscribe((data: any) => {
        this.diary = data;
      }, error => {
        console.error('Error fetching diary entry', error);
      });
  }

  onUpdate(form: NgForm): void {
    if (form.valid) {
      this.http.put(`https://angular-project-mini-backend.vercel.app/api/diaries/${this.diaryId}`, this.diary)
        .subscribe(() => {
          alert('✅ Diary updated successfully!');
          this.router.navigate(['/']);
        }, error => {
          console.error('Error updating diary entry', error);
        });
    }
  }
}