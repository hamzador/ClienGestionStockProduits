import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {

  @Input()
  type : string = 'bar';
  @Input()
  title :string='Titre';
  data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: "My  dataset 2",
        data: [80, 59, 12, 81, 56, 55, 10]
      }
    ]

  };

  options = {
    responsive: true,
    maintainAspectRatio: false
  };
  constructor() { }

  ngOnInit() {
    console.log(this.data)
  }

}
