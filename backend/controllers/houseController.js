

const getHouse = async (req, res) =>{
    res.status(200).json({message: 'get home'})
}

const setHouse = async (req, res) =>{
    // console.log(req.body)
    // if (!req.body.text) {
    //     res.status(400)
    //     throw new Error('Please add a text field')
    // }
    res.status(200).json({message: 'add home'})
}

const updateHouse = async (req, res) =>{
    res.status(200).json({message: `update home ${req.params.id}`})
}

const deleteHouse = async (req, res) =>{
    res.status(200).json({message: `Delete home ${req.params.id}`})
}


module.exports = {
    getHouse, setHouse, updateHouse, deleteHouse
}