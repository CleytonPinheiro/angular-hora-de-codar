import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Moment } from 'src/app/Moment';

import { MessagesService } from 'src/app/services/messages.service';
import { MommentService } from 'src/app/services/momment.service';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.css']
})
export class EditMomentComponent implements OnInit {
  moment!: Moment;
  btnText: string = 'Editar';

  constructor(private momentService: MommentService,
    private route: ActivatedRoute,
    private router: Router,
    private messagService: MessagesService  
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe((item) => {
      this.moment = item.data;
    })
  }

  async editHandler(momentData: Moment) {
   const id = this.moment.id;

   const formData = new FormData();

   formData.append('title', momentData.title);
   formData.append('description', momentData.description);

   if(momentData.image) {
    formData.append('image', momentData.image);
   }

   await this.momentService.updateMoment(id!, formData).subscribe();

   this.messagService.add(`Momento ${id} foi atualizado com sucesso.`);

   this.router.navigate(['/']);
   
  }
}
