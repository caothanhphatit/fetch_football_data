module.exports = (req, res, next) => {
    res.success = (data, message) => {
        res.json({
            data,
            message
        })
    }

    res.error = (message) => {
        res.status(404).json({
            message
        })

    }

    next()
}