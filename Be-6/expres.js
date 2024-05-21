import cors from 'cors'
import express from 'express'
import  mongoose from 'mongoose'
const app = express()
app.use(express.json())
app.use(cors())
const port = 3000
const courseSchema = new mongoose.Schema({
  name: String, // String is shorthand for {type: String}
  CourseImg:String,
  TeacherImg:String,
  Des:String,
  price:Number,
  positions:String,
  TeacherName:String,
});
const  CourseModel = mongoose.model('Course',  courseSchema);

app.get('/course', async (req, res) => {
  const course =await CourseModel.find()
    res.send( course)
})
app.get('/course/:id', async (req, res) => {
  const {id}=req.params
  const course =await CourseModel.findById(id)
    res.send( course)
})

app.delete('/course/:id', async (req, res) => {
  const {id}=req.params
  const course =await CourseModel.findByIdAndDelete(id)
    res.send( course)
})

app.put('/course/:id', async (req, res) => {
  const body=req.body
  const {id}=req.params
  const course =await CourseModel.findByIdAndDelete(id,body)
    res.send( course)
})

app.post('/course', async (req, res) => {
  const body = req.body
  const course =new CourseModel(body)
  await course.save()
    res.send( course)
})
mongoose.connect('mongodb+srv://NiyazovAsad:Niyazovesed2004@ourdb.n1ga79r.mongodb.net/')
.then(()=>console.log("connected"))
.catch(()=>console.log("Not Connected"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})