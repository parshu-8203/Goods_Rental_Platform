const express = require("express")
const mongoose = require("mongoose")

const Products = require("./models/Products_schema.js")
const Locations = require("./models/Location_Schema.js")
const User_Details = require("./models/UserDetails.js")

const cors = require('cors')
const app = express()
app.use(cors(
    {
        origin: "*"
    }
))


app.use(express.json({ limit: '10mb' }));
mongoose.connect('mongodb+srv://209x1a2861:sting9999@test.yi4ddf7.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true }).then(
    () => console.log("DB connected")).catch(err => console.log(err))
app.get("/products", async (req, res) => {
    try {
        const products_data = await Products.find();
        if (products_data) {
            return res.json(products_data);
        }
    }
    catch (err) {
        console.log(err.message)
    }
})
app.delete("/delproduct", async (req, res) => {

    const { _id } = req.body;
    try {
        const deletedProduct = await Products.findByIdAndRemove(_id);
        console.log(deletedProduct);
        return res.send({ message: "successfully deleted" });
    }
    catch (err) {
        console.log(err.message)
    }
})

app.put("/editproduct", async (req, res) => {

    const { _id, ProductName, Description, Category, Location, Price, Images } = req.body;

    try {
        const Allproducts = await Products.findOne({ _id: _id });
        console.log(Allproducts)
        await Allproducts.overwrite({
            ProductName: ProductName,
            Description: Description,
            Category: Category,
            Location: Location,
            Price: Price,
            Images: Images
        });
        await Allproducts.save()
        return res.send({ message: "updates success" })
    }
    catch (err) {
        console.log(err.message)
    }
})
app.post("/addproduct", async (req, res) => {
    const { id, ProductName, Description, Category, Location, Price, Images } = req.body;
    console.log(req.body)
    try {
        const data = new Products({
            ProductName: ProductName.trim(),
            Description: Description.trim(),
            Category: Category.trim(),
            Location: Location,
            Price: Price,
            Images: Images
        }
        )
        await data.save();
        return res.send({ message: "saved successfully" })
    }
    catch (err) {
        console.log(err.message)
    }


})

app.post("/createuser", async (req, res) => {
    const { name, email, password, mobile, address, cart, orders } = req.body;

    try {
        const is_registered = await User_Details.find({ email: email })
       // console.log(is_registered);
        if (is_registered.length === 0) {
           // console.log("REgistering");
            const create_user = new User_Details({
                name: name,
                email: email,
                password: password,
                mobile: mobile,
                address: address,
                cart: cart,
                orders: orders

            })
            await create_user.save();
            return res.send({ message: "User Created, go to Login" });
        }
        else {
            return res.send({ message: "user already registered,go to Login" });
        }
    }
    catch (err) {
        console.log(err.message)
    }

})

app.post("/login", async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body
    try {
        const user_data = await User_Details.findOne({ email: email })

        if (!user_data) {
            return res.send("User not found")
        }
        if (user_data.password === password) {
            return res.send(user_data)
        }
        else {
            return res.send("password Invalid")
        }
    }
    catch (err) {
        console.log(err.message)
    }
})

app.listen(5000, () => console.log("server running"));