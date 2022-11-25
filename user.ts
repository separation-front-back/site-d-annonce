import { Router } from 'express'
import axios from 'axios'

const router = Router()
const secret = process.env.JWT_SECRET || 'secret'

router.post('/api/signup', (req, res) => {
    axios
        .post(
            `http://${process.env.SERVER_LOG_HOST}:${process.env.SERVER_LOG_PORT}/signup`,
            { email: 'a@a.com', password: 'azerty', googleId: '' }
        )
        .then((e) => res.send(e.data))
})
router.post('/api/signin', (req, res) => {
    axios
        .post(
            `http://${process.env.SERVER_LOG_HOST}:${process.env.SERVER_LOG_PORT}/signin`,
            { email: 'a@a.com', password: 'azerty' }
        )
        .then((e) => res.send(e.data))
})

router.get('/api/user/me', (req, res) => {
    //return res.send(req.user);
})

export default router
