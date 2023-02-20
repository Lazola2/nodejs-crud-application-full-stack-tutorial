export function message(req, res, next) {
    console.log('This message is coming from the middleware');
    next();
}
/** tip
 * MVC
 *  M- MODEL
 *  V- VIEW
 *  C- CONTROLLER
 */