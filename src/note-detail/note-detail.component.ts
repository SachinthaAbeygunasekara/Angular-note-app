import { Component, inject } from '@angular/core';
import { NOTES } from '../notes';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css',
  imports: [RouterModule],
})
export class NoteDetailComponent {
  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  note = NOTES.find((i) => i.id === this.id);
}
