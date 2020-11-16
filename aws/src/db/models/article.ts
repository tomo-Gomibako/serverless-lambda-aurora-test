import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '@/src/db'
import { ArticleAttributes } from '@/src/db/types'

interface ArticleCreationAttributes extends Optional<ArticleAttributes, 'id'> {}

class Article extends Model<ArticleAttributes, ArticleCreationAttributes> {}

Article.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: DataTypes.STRING,
  text: DataTypes.TEXT
}, {
  sequelize,
  modelName: 'articles'
})

export default Article
