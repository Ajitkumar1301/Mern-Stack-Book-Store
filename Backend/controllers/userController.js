const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  res.json({
    name,
    email,
  });


};


export const register = mongoose.model("registerUser", registerUser);

