import { Component, OnInit } from '@angular/core';
import { IplService } from '../ipl.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  teamNames;
  teamName;
  players;
  pieChart:GoogleChartInterface
  constructor(private iplService:IplService) { }

  ngOnInit() {
    this.iplService.teamLabels().subscribe(res=>{
      this.teamNames = res["labels"]
    })
  }
  getPlayers(event){
    this.teamName = event.target.value;
    if(this.teamName.length > 0){
      this.iplService.getPlayersByTeamName(this.teamName).subscribe(res=>{
        this.players = res['players'];
      })

      this.iplService.getTeamRoleStat(this.teamNames).subscribe(res=>)
    }
  }
  showRoleStatChart(data){
    this.pieChart = {
      chartType:"PieChart",
      dataTable:data,
      options:{'Role':'Count'},{}
    }
  }
}