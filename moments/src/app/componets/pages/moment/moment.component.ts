import { Component, OnInit } from '@angular/core';
import { MommentService } from 'src/app/services/momment.service';
import { Moment } from 'src/app/Moment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {
  moment?: Moment;

  constructor(private momentService: MommentService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe(item => this.moment = item.data);

  }

}
