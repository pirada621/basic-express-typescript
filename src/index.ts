// const app = () => {
//     console.log("Hello via Bun 888!")
// }

// app()

// ทำการ import express มาใช้งาน
import express from 'express'

// ทำการ Import routes มาใช้งาน
import testRoutes from './routes/testRoutes'
import productRoutes from './routes/productRoutes'

// ทำการสร้าง instance ของ express
const app = express()

// ทำให้ express สามารถอ่าน request body จาก client ได้
app.use(express.json())

// ทำการใช้งาน routes ที่ import มา
app.use('/api', testRoutes)
app.use('/api', productRoutes)

// รัน server ด้วย port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

export default app