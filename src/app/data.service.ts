import { Phone } from './phone'
import { Injectable, Optional } from '@angular/core'
import { LogService } from './log.service'

@Injectable()
export class DataService {
  private data: Phone[] = [
    { name: 'Apple iPhone 7', price: 56000 },
    { name: 'HP Elite x3', price: 56000 },
    { name: 'Alcatel Idol S4', price: 25000 },
  ]
  constructor(@Optional() private logService: LogService){}

  getData(): Phone[]{
    this.logService.write('операция получения данных')
    return this.data
  }
  addData(name: string, price: number) {
    this.data.push(new Phone(name, price))
    this.logService.write('операция добавления данных')
  }
}
