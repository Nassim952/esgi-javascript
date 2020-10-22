function typeCheckV1(input, type) {
    switch (typeof input) {
        case "string":
            if(typeof type === "string"){
                return true;
            }
        case "symbol":
            if(typeof type === "symbol"){
                return true;
            }
        case "number":
            if(typeof type === "number"){
                return true;
            }
        case "undefined":
            if(typeof type === "undefined"){
                return true;
            }
        case "boolean":
            if(typeof type === "boolean"){
                return true;
            }
        case "object":
            switch (type) {
                case 'null':
                    return input === null;
                case 'array':
                    return Array.isArray(input);
                default:
                    return input !== null && !Array.isArray(input);
            }
    }
}

console.log(typeCheckV1(2, "number"));