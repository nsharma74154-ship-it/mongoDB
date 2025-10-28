const express = require ('express');
const mongoose = require ('monogoose');
require ('dotenv').config();

const app = express
app.use(express.json());

mongoose.connect(Process.env.MONGO_URI).then(() => console.log("connected")).catch(err => console.error("mongoDB connected error",err));

app.use('/api/doctor',doctorRoutes);
app.use('/api/patient',patientRoutes);
app.get('/',(req,res) => res.send('hospital patient managemnet API running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('server listening'));
