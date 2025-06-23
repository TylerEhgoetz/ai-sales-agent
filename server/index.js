require('dotenv').config();
const express = require('express');
const cors = require('cors');
const leadRouter = require('./routes/leads');

const app = express();
app.use(cors(), express.json());
app.use('/api/leads', leadRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
