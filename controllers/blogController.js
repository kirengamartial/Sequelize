import Blog from '../models/blogModel.js'
import { Sequelize } from 'sequelize'

const Op = Sequelize.Op

const getAllBlog = (req, res) => {
 Blog.findAll()
 .then(data => {
    res.status(200).json(data)
    console.log(data)
 })
 .catch(err => {
    res.status(500).json(err)
    console.log(err)
 })
}

const createBlog = (req, res) => {
    const { title, description } = req.body

    Blog.create({
        title,
        description
    })
    .then(response => {
        console.log(response)
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json(err)
        console.log(err)
    }) 

}

const searchBlog = (req, res) => {
 const { term } = req.query
 
 Blog.findAll({ where: {title: { [Op.like]: '%' + term + '%'}}})
 .then(response => {
    res.status(200).json(response)
    console.log(response)
 })
 .catch(err => {
    res.status(500).json(err)
    console.log(err)
 })

}

export {
    getAllBlog,
    createBlog,
    searchBlog
}