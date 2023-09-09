import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CurrencyService } from './currency.service';

@WebSocketGateway({
  cors: {
    origin: ['http://localhost:3000', 'ws://localhost:3000'],
    credentials: true,
  },
  transports: ['websocket', 'polling'],
})
export class LatestCurrencyPriceGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  constructor(
    private readonly currencyService: CurrencyService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  @WebSocketServer()
  server: Server;

  afterInit(server: Server) {
    this.eventEmitter.on('priceUpdate', (newPrice) => {
      console.log('priceUpdate => called');
      this.server.emit('priceUpdate', newPrice);
    });
  }

  handleConnection(client: any) {
    console.log(`Client connected: ${client.id}`);
  }
  handleDisconnect(client: any) {
    console.log(`Client disconnected: ${client.id}`);
  }

  // @SubscribeMessage('getPrices')
  // async handleGetLatestCurrencyPrice(client: Socket, data: any) {
  //   try {
  //     const latestPrice =
  //       await this.currencyPriceService.getLatestCurrencyPrice();

  //     client.emit('latestCurrencyPrice', latestPrice);
  //   } catch (error) {
  //     console.error('Error fetching latest currency price:', error);
  //   }
  // }
}
