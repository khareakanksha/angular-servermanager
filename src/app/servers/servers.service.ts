import { Injectable } from '@angular/core';

@Injectable()
export class ServersService {

  constructor() { }
 servers = [
    {
      id: 1,
      name: 'maxserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'annaservr',
            status: 'offline'

    },
    {
      id: 3,
      name: 'charisserver',
            status: 'online'

    }

  ];

  getServers(){
return this.servers;
  }

  getServer(id: number){
const server= this.servers.find(
  (s)=>{
    return s.id ===id;
  }
)
  }
  


}