import { PrismaClient } from '@prisma/client'
import express from 'express'
const app = express()

const prisma = new PrismaClient

app.use(express.json())

app.get('/', async (_req, res) => {
    const getUsers = await prisma.user.findMany()
    res.status(200).json({getUsers})
})

app.post('/users', async (req, res) => {
    const { email, password } = req.body
    const users = await prisma.user.create({
        data: {
            email,
            password,
        }
    })
    res.status(201).json({users})
})

const port = 4000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})