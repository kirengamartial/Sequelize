import db from '../config/db.js';
import { Sequelize } from 'sequelize';

const Blog = db.define('blogs', {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  }
});

export default Blog;