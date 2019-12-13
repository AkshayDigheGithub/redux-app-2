export const logMiddleware = store => next => action => {
    console.log("Middleware triggered:", action);
    next(action);
}