import { Component, OnInit } from '@angular/core';
import { ServiceGithubService } from "../../Services/Github/service-github.service"
import Chart, { Chart as ChartJS, TickOptions, LinearScaleOptions } from 'chart.js/auto';
// import { Component, OnInit } from '@angular/core';
import { ProductApiServiceService } from '../../Services/Product/product-api-service.service';

interface ChartOptions {
  scales: {
    y: {
      ticks: TickOptions & { beginAtZero: boolean };
    };
  };
}


@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})



export class AnalyticsComponent implements OnInit {
  chartData: any;
  responseData:any;
  data:any;
  constructor(private productService: ProductApiServiceService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.responseData={products}
      console.log("Response data =>", this.responseData.products.products)
      this.data = this.responseData.products.products
      // console.log("Products => ", products['products'])
      // products.map((p)=>{console.log(p)})
      this.chartData = {
        labels: this.data.map((p: { title: any; }) => p.title),
        ratings: this.data.map((p: { rating: any; }) => p.rating)
      };
      this.renderChart();
    });
  }

  renderChart() {
    const ctx = document.getElementById('productChart') as HTMLCanvasElement;
    const myChart = new ChartJS(ctx, {
      type: 'bar',
      data: {
        labels: this.chartData.labels,
        datasets: [{
          label: 'Product Ratings',
          data: this.chartData.ratings,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}