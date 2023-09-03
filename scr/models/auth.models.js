const mongoose  = require('mongoose')
const validator = require('validator')
const bcryptjs = require("bcryptjs")



const userSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true
        
    },
    
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        validate(value){
            if (!validator.isEmail(value)) {
                    throw new Error("email not valid")
                }
            
        }
    },

    password:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            let strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])")
            if(!strongPassword.test(value)){
                throw new Error ("password must include Upper/lower case , '!@/.',num ")
            }
        }
    },

    age:{
        type:Number,
        trim:true,
        default:18,
        validate(value){
            if (!value <=0 ){
                throw new Error("not valid age")
            }
        }
    },


})

////////////////////////////////////////////////////////////

// hide el data 

userSchema.methods.toJSON = function (){
    const user = this
    
    const dataTOobject= user.toObject()
    
    delete dataTOobject.password
    
    return dataTOobject ;


}
//////////////////////////////////////////////////////////

// hash password


userSchema.pre('save',async function() {
    
    const user = this
    if(user.isModified("password")){
        user.password = bcryptjs.hash( user.password ,8 )
    }
    
})











const User = mongoose.model('User',userSchema)

module.exports = User ;