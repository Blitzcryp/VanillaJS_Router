import routes from "../../app/routes/routes";

export class Router {
    constructor() {
        /*
         * TODO : Maybe use collection instead of array to group them up
         */
        this.routes = routes;
    }

    get(uri, callback){
        if(!uri || !callback) throw new Error("Parameters should not be empty");

        if(typeof uri !== "string") throw new TypeError("Uri has to be a string");
        if(typeof callback !== "function") throw new TypeError("Callback must be a function");

        this.routes.forEach(
            route => {
                if(route.uri === uri){
                    throw new Error(`The uri ${route.uri} already exists`);
                }
            }
        )

        this.routes.push({ uri, callback });
    }

    init() {
        this.routes.some(
            route => {
                let regExp = new RegExp(`^${route.uri}$`);
                let path = window.location.pathname;

                if(path.match(regExp)){
                    let req = { path }

                    /*
                     * TODO : Add middleware after this
                     */
                    return route.callback.call(this, req);
                }
            }
        )
    }
}