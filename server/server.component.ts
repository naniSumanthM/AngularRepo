import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    // styleUrls: ['./app.server.css']
    styles: [`
    .online{
        color:white;
    }`]
})
export class ServerComponent {
    allowNewServer = true; //disabled property on button
    serverId: number = 10;
    serverStatus: string = "-";
    serverName: string = "-";
    serverCreated: boolean = false;
    servers = ["TestServer1", "TestServer2"]

    constructor() {
        // setTimeout(() => { this.allowNewServer = false }, 2000);
        this.serverStatus = Math.random() > .5 ? 'online' : 'offline';
    }
    getServerStatus() {
        return this.serverStatus;
    }

    onCreateServer() {
        this.serverCreated = true;
        this.serverStatus = "New Server Created"
        this.servers.push(this.serverName);
    }

    // onUpdateServerName(event: any) {
    //     console.log(event)
    //     this.serverName = (<HTMLInputElement>event.target).value;
    // }
    
    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}