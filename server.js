let   express     = require('express'),
      port        = 8080 || process.env.PORT,
      cors        = require('cors'),
      bodyParser  = require('body-parser');

let app = express();


// Serving the directory
app.use(express.static(__dirname + "/public"));


app.get('/' , (req , res) => res.send("Woocommerce Integration!"))

app.listen(port , (req , res) => (console.log('Express Server Running on. . . ' + port)))

