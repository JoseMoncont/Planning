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

router.route('/cars/:car_id')
    .get(carController.view)
    .patch(carController.update)
    .put(carController.update)
    .delete(carController.delete);


// View car jobs by plate
router.route('/jobs/:plate')
    .get(carController.view_plate)


// Handle csv file upload
router.route('/upload')
    .post(carController.upload_csv)

// Export API routes
module.exports = router;