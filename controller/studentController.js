const studentModel = require("../models/studentModel");

exports.createStudent = async (req, res) => {
  try {
    const { fullName, email, gender, stack, age } = req.body;

    const existingEmail = await studentModel.findOne({ email: email.toLowerCase() });
    if (existingEmail) {
      res.status(400).json({
        statusCode: false,
        statusText: "Bad Request",
        message: `User with the email ${email.toLowerCase()} already exist`,
      });
    }
    const newStudent = new studentModel({
      fullName,
      email,
      gender,
      stack,
      age,
    });
    await newStudent.save();
    res.status(201).json({
      statusCode: true,
      statusText: "Created Successfully",
      message: "Student is created successfully",
      data: { student: newStudent },
    });
  } catch (error) {
    res.status(500).json({
      statusCode: false,
      statusText: "Internal Server Error",
      message: "Error creating Student" + error.message,
    });
  }
};
exports.getAll = async (req,res) => {
  try {
    const student = await studentModel.find();
  if(users.length ===0){
    return res.status(200).json({
      statusCode:true,
      statusText:'ok',
      message:'No student found'
    });
  };
  res.status(200).json({
    statusCode:true,
    statusText:'Ok',
    message:'All student below',
    data:student
  })
  } catch (error) {
    res.status(500).json({
      statusCode:false,
      statusText:'Internal server error',
      message:'Error getting student'+error.message
    })
  }
};
exports.getOne = async (req,res) => {
  try {
    const id = req.params.id
    const student = await studentModel.findById(id)
    if(!student){
      return res.status(200).json({
        statusCode:true,
        statusText:'ok',
        message:'No user found'
      });
    };
    res.status(200).json({
      statusCode:true,
      statusText:'Ok',
      message:'Student below',
      data:student
    })
  } catch (error) {
    res.status(500).json({
      statusCode:false,
      statusText:'Internal server error',
      message:'Error getting user'+error.message
    })
  }
}