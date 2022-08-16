const router = require('express').Router();
import apiRoutes from 'Develop/routes/api';

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

export default router;