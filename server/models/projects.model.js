const mongoose=require("mongoose");

const projectSchema=mongoose.Schema({
    Projectname : String,
    Startdate : Date,
    EndDate : Date,
    Reason:String,
    Type:String,
    Category:String,
    Priority:String,
    Department:String,
    Location:String,
    Status:String
});

const projectModel=mongoose.model("projects",projectSchema);

module.exports={
    projectModel
}