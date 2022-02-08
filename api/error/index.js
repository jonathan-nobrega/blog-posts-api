
class tagError extends Error {
    constructor() {
        super("Tags parameter is required")
    }
}

class sortByError extends Error {
    constructor() {
        super("sortBy parameter is invalid")
    }
}

class directionError extends Error {
    constructor() {
        super("direction parameter is invalid")
    }
}


module.exports = {
    tagError: tagError,
    sortByError: sortByError,
    directionError: directionError
}