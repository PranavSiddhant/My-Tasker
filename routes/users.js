let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tasks')


//mongoose.connect('mongodb+srv://Pranav99:siddhant@99@mytasker.fyeds.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

let schema = mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        }
    }
)
module.exports = mongoose.model('tasks',schema);