mongo db

db.users.remove({}) //remove all users, delete from users;
db.users.remove({name:"ram"})

update
db.users.update({name:"ram"},{$set:{age:24}})
db.user.updateMany({gender:"female"},{$set:{salary:12000,isActive:true}})
db.users.update({gender:"female"},{$set:{salary:13000}},{multi:true})

db.users.save({_id:ObjectId("65d5ff4fb8482bff8ee902a8"),name:"RAM"})

select * from users;
120000
100


db.users.find().limit(2)
db.users.find().skip(2)


db.users.find().sort({name:1})





create collection of employee
db.createCollection("employee")
db.employee.insertMany([
    {
        name:"ram",
        age:23,
        salary:12000,
        gender:"male",
        isActive:true,
        city:"mumbai",
        married:false,
        child:0
    },
    {
        name:"ram",
        age:23,
        salary:12000,
        gender:"male",
        isActive:true,
        city:"mumbai",
        married:true,
        child:1
    }
])














