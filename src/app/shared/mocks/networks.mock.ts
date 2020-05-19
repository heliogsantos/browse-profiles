export class NetworksMock {

    constructor(){}

    networks = [
        {linkedin: "/assets/svg/linkedin.svg"},
        {facebook: "/assets/svg/facebook.svg"},
        {twitter: "/assets/svg/twitter.svg"},
        {github: "/assets/svg/github.svg"}
    ]
    
    get getNetworks(): Object {
        return this.networks;
    }
}