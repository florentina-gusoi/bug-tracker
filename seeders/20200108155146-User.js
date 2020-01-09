'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users',
            [
                {
                    "firstName": "Minerva",
                    "lastName": "Jordan",
                    "email": "user@user.com",
                    "password": "User1!"
                },
                {
                    "firstName": "Brett",
                    "lastName": "Cleveland",
                    "email": "ipsum.porta.elit@milorem.org",
                    "password": "DIL82BGB1GT"
                },
                {
                    "firstName": "Lewis",
                    "lastName": "Woodward",
                    "email": "velit.Aliquam.nisl@eu.net",
                    "password": "CLY86CSK2RK"
                },
                {
                    "firstName": "Rama",
                    "lastName": "Byers",
                    "email": "Duis.at@estmollisnon.org",
                    "password": "FGF00DJN9DO"
                },
                {
                    "firstName": "Graiden",
                    "lastName": "Holland",
                    "email": "vel.quam@eratvelpede.org",
                    "password": "FXF87BEY9KO"
                },
                {
                    "firstName": "Alexis",
                    "lastName": "Owens",
                    "email": "ultrices.mauris@pellentesquetellussem.co.uk",
                    "password": "XNR12RRI4SZ"
                },
                {
                    "firstName": "Acton",
                    "lastName": "Santos",
                    "email": "egestas.a@elitNulla.net",
                    "password": "RTY66GEY0NY"
                },
                {
                    "firstName": "Quentin",
                    "lastName": "Mccray",
                    "email": "egestas.Aliquam.nec@magnased.ca",
                    "password": "ASH10RMR4ZY"
                },
                {
                    "firstName": "Deborah",
                    "lastName": "Lara",
                    "email": "eu.accumsan@Cum.org",
                    "password": "SKR25FEW0BU"
                },
                {
                    "firstName": "Arthur",
                    "lastName": "Oliver",
                    "email": "ante.ipsum.primis@cursuset.net",
                    "password": "SRX95EGC6JP"
                },
                {
                    "firstName": "Ginger",
                    "lastName": "Campbell",
                    "email": "blandit.mattis@facilisisfacilisismagna.com",
                    "password": "YHQ18IIP1YL"
                },
                {
                    "firstName": "Gareth",
                    "lastName": "Olsen",
                    "email": "tellus@posuerecubiliaCurae.co.uk",
                    "password": "GHY47TPW5LK"
                },
                {
                    "firstName": "Phillip",
                    "lastName": "Keller",
                    "email": "Mauris.eu.turpis@Phasellus.com",
                    "password": "DVE18IDY6TS"
                },
                {
                    "firstName": "Zenaida",
                    "lastName": "Rosales",
                    "email": "ullamcorper@egestasAliquam.edu",
                    "password": "CVD36QMT0DQ"
                },
                {
                    "firstName": "Wylie",
                    "lastName": "Stevenson",
                    "email": "cursus@in.net",
                    "password": "QST53TDZ1YP"
                }
            ])

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
