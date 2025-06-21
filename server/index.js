const express = require('express');
const cors = require('cors');
const leadRoutes = require('./routes/leadRoutes');

const app = express();
app.use(cors(), express.json());
app.use('/api/leads', leadRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
