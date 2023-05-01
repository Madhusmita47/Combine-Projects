

const addNumber = async (req, res) => {

    try {
        let data = req.body
        let { a, b } = data
        let sum

        if(typeof a == 'number' && typeof b == 'number'){
            sum = a + b
        }else{
            sum = +a + +b
        }

        return res.status(200).send({ status: true, data: sum })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

module.exports = addNumber