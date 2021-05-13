// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import contact controller
var carController = require('../controllers/carController');
// Contact routes
router.route('/cars')
    .get(carController.list)
    .post(carController.new);

router.route('/cars/:cars_id')
    .get(carController.view)
    .patch(carController.update)
    .put(carController.update)
    .delete(carController.delete);


// Export API routes
module.exports = router;