const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static initiate(sequelize) { // 테이블 정보
        User.init({
            email : {
                type : Sequelize.STRING(40),
                allowNull: true,
                unique : true,
            },
            nick: {
                type: Sequelize.STRING(15),
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            provider: {
                type: Sequelize.ENUM('local', 'kakao'),
                allowNull: false,
                defaultValue: 'local'
            },
            snsId : {
                type: Sequelize.STRING(30),
                allowNull: true,
            }
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: true, // deleteAt 유저 삭제일
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }

    state_associate(db) {} // 테이블 관계
}

module.exports = User;