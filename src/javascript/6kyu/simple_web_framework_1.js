// https://www.codewars.com/kata/588a00ad70720f2cd9000005

var Router = function () {

    let routes = {}

    this.bind = function (route, method, fn) {
        if (routes[route]) {
            routes[route][method] = fn;
        } else {
            routes[route] = {}
            routes[route][method] = fn
        }
    }

    this.runRequest = function (route, method) {
        if (routes[route]) {
            return routes[route][method]()
        } else {
            return "Error 404: Not Found"
        }
    }

}