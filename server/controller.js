module.exports ={

    registerUser: (req, res) => {
        let {username, password} = req.body
        const db = req.app.get('db')
        db.register_user({username, password})
        .then(user => {
            res.status(200).send(user)
        })
    
    },

    loginUser: (req, res) => {
        let {username, password} = req.body
        const db = req.app.get('db')
        db.login_user({username, password}).then(response => {
            if (response.length){
                req.session.user_id = response[0].user_id
                res.status(200).send(response[0])
            } else {
                res.status(401).send('Wrong Username or Password')
            }
        })
    }

}