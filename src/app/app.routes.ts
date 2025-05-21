import { Routes } from '@angular/router';
import { DiaryComponent } from './diary/diary.component';
import { DiaryaddComponent } from './diaryadd/diaryadd.component';
import { EditdiaryComponent } from './editdiary/editdiary.component';

export const routes: Routes = [
  { path: 'diaryEntry', component: DiaryaddComponent },
  { path: 'diary', component: DiaryComponent },
  
  // ✅ no leading slash
  { path: '', redirectTo: '/diary', pathMatch: 'full' }, // ✅ corrected redirect
  { path: 'edit/:id', component: EditdiaryComponent }

];
