module.exports ={

    registerUser: (req, res) => {
        let {username, password} = req.body
        const db = req.app.get('db')
        db.register_user([username, password])
        .then(user => {
            res.status(200).send(user)
        })
    }

}