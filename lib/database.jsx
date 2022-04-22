import mongoose from 'mongoose';

export default async function Database(req, res) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect('mongodb+srv://PitayaRoot:PitayaPassword@pitayadatabase.57u9h.mongodb.net/PitayaDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
            autoIndex: false
        });
    };
};