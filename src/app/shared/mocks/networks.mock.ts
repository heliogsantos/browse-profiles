export class NetworksMock {
    networks = [
        {name: "linkedin", svg: "/assets/svg/linkedin.svg"},
        {name: "facebook", svg: "/assets/svg/facebook.svg"},
        {name: "twitter", svg: "/assets/svg/twitter.svg"},
        {name: "github", svg: "/assets/svg/github.svg"}
    ]
    
    get getNetworks(): Object {
        return this.networks;
    }
}
