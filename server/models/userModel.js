const user = require("./userSchema");

//function to handle user signup
const signupUser = async (req, res) => {
  try {
    const { name, username, email, password } = req.body; //the api server asks the client to give me the email pass etc and cheacks it according to UserSchema, if it gives any error it goes into catch block (error )

    // Check if all required fields are provided
    if (!name || !username || !email || !password) {
      return res.status(400).send({ message: "All fields are required" });
    }

    //creates a collection inside mongodb names users
    const newUser = new user({ name, username, email, password });

    // insert the new user data / save it inside the collection created
    await newUser.save();

    res.status(201).send({ message: "User created successfully" });

    
  } catch (error) {
    // Handle validation errors
    if (error.name === "ValidationError") {
      return res.status(400).send({ message: error.message });
    }

    // Handle duplicate key errors (unique constraints)
    if (error.code === 11000) {
      return res
        .status(400)
        .send({ message: "This username or email already exists" });
    }

    // Handle other errors
    console.error(error);
    res.status(500).send({ message: "Server error" });
  }
};




module.exports = { signupUser };
