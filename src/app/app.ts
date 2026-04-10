import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Invoice {
  invoice_id: string;
  supplier: string;
  amount: number;
  status: 'OK' | 'WARNING' | 'ANOMALY';
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  invoices: Invoice[] = [
    {
      invoice_id: 'I001',
      supplier: 'Supplier A',
      amount: 20000,
      status: 'OK'
    },
    {
      invoice_id: 'I002',
      supplier: 'Supplier B',
      amount: 90000,
      status: 'ANOMALY'
    },
    {
      invoice_id: 'I003',
      supplier: 'Supplier C',
      amount: 60000,
      status: 'WARNING'
    }
  ];

  get totalInvoices(): number {
    return this.invoices.length;
  }

  get totalAnomalies(): number {
    return this.invoices.filter(invoice => invoice.status === 'ANOMALY').length;
  }
}