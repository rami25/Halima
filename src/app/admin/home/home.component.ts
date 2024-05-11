import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Certif } from 'src/app/interfaces/Certif';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService : AuthService) { }
  certifs! : Certif[]
  ngOnInit(): void {
    this.getCertifs()
  }

  getCertifs(){
    this.authService.getCertifs()
      .subscribe(certificates => {
        this.certifs = certificates;
        this.certifs = this.certifs.slice(0, 4);
    });    
  }

  lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Users'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Users admitted',
        data: [10, 2, 3,6,9,17,20,10,5,2,16]
      } as any
    ]
  });


  donutChart= new Chart( {
    chart: {
      type: 'pie',
      plotShadow: false,
    },
  
    credits: {
      enabled: false,
    },
  
    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },
  
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Certificates',
    },
  
    legend: {
      enabled: false,
    },
  
    series: [
      {
        type: 'pie',
        data: [
          { name: 'ID-TRUST', y: 1, color: '#eeeeee' },
  
          { name: 'SAN-SSL', y: 2, color: '#393e46' },
  
          { name: 'Cachet', y: 3, color: '#00adb5' },
          { name: 'VPN', y: 4, color: '#eeeeee' },
          { name: 'SSL-CACHET', y: 5, color: '#506ef9' },
        ],
      },
    ],
  })
}

