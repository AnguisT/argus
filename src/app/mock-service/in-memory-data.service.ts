import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const grid = [
        {
            id: 1,
            number: '3 D',
            Name_Сompany: 'Celica',
            Type_Certified_Activity: 'Убой КРС, разделка, хранение говядины',
            country: 'Россия',
            region: 'Владимирская область',
            area: 'ASD',
            address: 'Владимир',
            activities: 'Разделка',
            Product_Type: 'Мясо',
            Production: 'Говядина',
            View_Product: 'Телятина охлажденная',
            Product_Group: 'А',
            status: 'Разрешенно',
            date: '12.12.2012',
            Number_Date: 'указание: ФС-ЕН-7/976 от 30.01.2013'
        },
        {
            id: 2,
            number: '86 E',
            Name_Сompany: 'Mondeo',
            Type_Certified_Activity: 'Убой КРС, разделка, хранение говядины',
            country: 'Россия',
            region: 'Владимирская область',
            area: 'ASD',
            address: 'Владимир',
            activities: 'Разделка',
            Product_Type: 'Мясо',
            Production: 'Говядина',
            View_Product: 'Телятина охлажденная',
            Product_Group: 'А',
            status: 'Разрешенно',
            date: '12.12.2012',
            Number_Date: 'указание: ФС-ЕН-7/976 от 30.01.2013'
        },
        {
            id: 3,
            number: 'A 4',
            Name_Сompany: 'Boxter',
            Type_Certified_Activity: 'Убой КРС, разделка, хранение говядины',
            country: 'Россия',
            region: 'Владимирская область',
            area: 'ASD',
            address: 'Владимир',
            activities: 'Разделка',
            Product_Type: 'Мясо',
            Production: 'Говядина',
            View_Product: 'Телятина охлажденная',
            Product_Group: 'А',
            status: 'Разрешенно',
            date: '12.12.2012',
            Number_Date: 'указание: ФС-ЕН-7/976 от 30.01.2013'
        },
        {
            id: 4,
            number: 'B 5',
            Name_Сompany: 'Celica',
            Type_Certified_Activity: 'Убой КРС, разделка, хранение говядины',
            country: 'Россия',
            region: 'Владимирская область',
            area: 'ASD',
            address: 'Владимир',
            activities: 'Разделка',
            Product_Type: 'Мясо',
            Production: 'Говядина',
            View_Product: 'Телятина охлажденная',
            Product_Group: 'А',
            status: 'Разрешенно',
            date: '12.12.2012',
            Number_Date: 'указание: ФС-ЕН-7/976 от 30.01.2013'
        },
        {
            id: 5,
            number: 'C 7',
            Name_Сompany: 'Mondeo',
            Type_Certified_Activity: 'Убой КРС, разделка, хранение говядины',
            country: 'Россия',
            region: 'Владимирская область',
            area: 'ASD',
            address: 'Владимир',
            activities: 'Разделка',
            Product_Type: 'Мясо',
            Production: 'Говядина',
            View_Product: 'Телятина охлажденная',
            Product_Group: 'А',
            status: 'Разрешенно',
            date: '12.12.2012',
            Number_Date: 'указание: ФС-ЕН-7/976 от 30.01.2013'
        },
        {
            id: 6,
            number: '3 D',
            Name_Сompany: 'Celica',
            Type_Certified_Activity: 'Убой КРС, разделка, хранение говядины',
            country: 'Россия',
            region: 'Владимирская область',
            area: 'ASD',
            address: 'Владимир',
            activities: 'Разделка',
            Product_Type: 'Мясо',
            Production: 'Говядина',
            View_Product: 'Телятина охлажденная',
            Product_Group: 'А',
            status: 'Разрешенно',
            date: '12.12.2012',
            Number_Date: 'указание: ФС-ЕН-7/976 от 30.01.2013'
        },
        {
            id: 7,
            number: '86 E',
            Name_Сompany: 'Mondeo',
            Type_Certified_Activity: 'Убой КРС, разделка, хранение говядины',
            country: 'Россия',
            region: 'Владимирская область',
            area: 'ASD',
            address: 'Владимир',
            activities: 'Разделка',
            Product_Type: 'Мясо',
            Production: 'Говядина',
            View_Product: 'Телятина охлажденная',
            Product_Group: 'А',
            status: 'Разрешенно',
            date: '12.12.2012',
            Number_Date: 'указание: ФС-ЕН-7/976 от 30.01.2013'
        },
        {
            id: 8,
            number: 'A 4',
            Name_Сompany: 'Boxter',
            Type_Certified_Activity: 'Убой КРС, разделка, хранение говядины',
            country: 'Россия',
            region: 'Владимирская область',
            area: 'ASD',
            address: 'Владимир',
            activities: 'Разделка',
            Product_Type: 'Мясо',
            Production: 'Говядина',
            View_Product: 'Телятина охлажденная',
            Product_Group: 'А',
            status: 'Разрешенно',
            date: '12.12.2012',
            Number_Date: 'указание: ФС-ЕН-7/976 от 30.01.2013'
        },
        {
            id: 9,
            number: 'B 5',
            Name_Сompany: 'Celica',
            Type_Certified_Activity: 'Убой КРС, разделка, хранение говядины',
            country: 'Россия',
            region: 'Владимирская область',
            area: 'ASD',
            address: 'Владимир',
            activities: 'Разделка',
            Product_Type: 'Мясо',
            Production: 'Говядина',
            View_Product: 'Телятина охлажденная',
            Product_Group: 'А',
            status: 'Разрешенно',
            date: '12.12.2012',
            Number_Date: 'указание: ФС-ЕН-7/976 от 30.01.2013'
        },
        {
            id: 10,
            number: 'C 7',
            Name_Сompany: 'Mondeo',
            Type_Certified_Activity: 'Убой КРС, разделка, хранение говядины',
            country: 'Россия',
            region: 'Владимирская область',
            area: 'ASD',
            address: 'Владимир',
            activities: 'Разделка',
            Product_Type: 'Мясо',
            Production: 'Говядина',
            View_Product: 'Телятина охлажденная',
            Product_Group: 'А',
            status: 'Разрешенно',
            date: '12.12.2012',
            Number_Date: 'указание: ФС-ЕН-7/976 от 30.01.2013'
        },
        {
            id: 11,
            number: 'C 7',
            Name_Сompany: 'Mondeo',
            Type_Certified_Activity: 'Убой КРС, разделка, хранение говядины',
            country: 'Россия',
            region: 'Владимирская область',
            area: 'ASD',
            address: 'Владимир',
            activities: 'Разделка',
            Product_Type: 'Мясо',
            Production: 'Говядина',
            View_Product: 'Телятина охлажденная',
            Product_Group: 'А',
            status: 'Разрешенно',
            date: '12.12.2012',
            Number_Date: 'указание: ФС-ЕН-7/976 от 30.01.2013'
        },
    ];

    const view = {
        ID: {
            TemplateName: '№',
            BindingName: 'id',
            CanUserResize: true,
            CanUserSort: true,
        },
        Number: {
            TemplateName: 'Number',
            BindingName: 'number',
            CanUserResize: true,
            CanUserSort: true,
        },
        Name_Сompany: {
            TemplateName: 'Name company',
            BindingName: 'Name_Сompany',
            CanUserResize: true,
            CanUserSort: true,
        },
        Type_Certified_Activity: {
            TemplateName: 'Type certified activity',
            BindingName: 'Type_Certified_Activity',
            CanUserResize: true,
            CanUserSort: true,
        },
        country: {
            TemplateName: 'Country',
            BindingName: 'country',
            CanUserResize: true,
            CanUserSort: true,
        },
        region: {
            TemplateName: 'Region',
            BindingName: 'region',
            CanUserResize: true,
            CanUserSort: true,
        },
        area: {
            TemplateName: 'Area',
            BindingName: 'area',
            CanUserResize: true,
            CanUserSort: true,
        },
        address: {
            TemplateName: 'Address',
            BindingName: 'address',
            CanUserResize: true,
            CanUserSort: true,
        },
        activities: {
            TemplateName: 'Activities',
            BindingName: 'activities',
            CanUserResize: true,
            CanUserSort: true,
        },
        Product_Type: {
            TemplateName: 'Product type',
            BindingName: 'Product_Type',
            CanUserResize: true,
            CanUserSort: true,
        },
        Production: {
            TemplateName: 'Production',
            BindingName: 'Production',
            CanUserResize: true,
            CanUserSort: true,
        },
        View_Product: {
            TemplateName: 'View product',
            BindingName: 'View_Product',
            CanUserResize: true,
            CanUserSort: true,
        },
        Product_Group: {
            TemplateName: 'Product group',
            BindingName: 'Product_Group',
            CanUserResize: true,
            CanUserSort: true,
        },
        status: {
            TemplateName: 'Status',
            BindingName: 'status',
            CanUserResize: true,
            CanUserSort: true,
        },
        date: {
            TemplateName: 'Date',
            BindingName: 'date',
            CanUserResize: true,
            CanUserSort: true,
        },
        Number_Date: {
            TemplateName: 'Number and date',
            BindingName: 'Number_Date',
            CanUserResize: true,
            CanUserSort: true,
        }
    };

    const userViews = [
        {
            id: 375,
            text: 'Default',
        },
        {
            id: 1175,
            text: 'bc',
        }
    ];

    const userView = [
        {
            id: 375,
            columns: {
                ID: {
                    TemplateName: '№',
                    BindingName: 'id',
                    CanUserResize: true,
                    CanUserSort: true,
                },
                Number: {
                    TemplateName: 'Number',
                    BindingName: 'number',
                    CanUserResize: true,
                    CanUserSort: true,
                },
            },
            viewName: 'Default'
        },
        {
            id: 1175,
            columns: {
                country: {
                    TemplateName: 'Country',
                    BindingName: 'country',
                    CanUserResize: true,
                    CanUserSort: true,
                },
                region: {
                    TemplateName: 'Region',
                    BindingName: 'region',
                    CanUserResize: true,
                    CanUserSort: true,
                },
                area: {
                    TemplateName: 'Area',
                    BindingName: 'area',
                    CanUserResize: true,
                    CanUserSort: true,
                },
                address: {
                    TemplateName: 'Address',
                    BindingName: 'address',
                    CanUserResize: true,
                    CanUserSort: true,
                },
            },
            viewName: 'bc'
        }
    ];

    const data = [
        {
            id: 1,
            text: 'Alex',
        },
        {
            id: 2,
            text: 'Vlad',
        },
        {
            id: 3,
            text: 'Dasha',
        },
        {
            id: 4,
            text: 'Egor'
        }
    ];

    const data1 = [
        {
            id: 1,
            text: 'Alex',
        },
        {
            id: 2,
            text: 'Vlad',
        },
        {
            id: 3,
            text: 'Dasha',
        },
        {
            id: 4,
            text: 'Egor'
        },
        {
            id: 5,
            text: 'Mom'
        },
        {
            id: 6,
            text: 'Alex1',
        },
        {
            id: 7,
            text: 'Vlad1',
        },
        {
            id: 8,
            text: 'Dasha1',
        },
        {
            id: 9,
            text: 'Egor1'
        },
        {
            id: 10,
            text: 'Mom1'
        }
    ];

    const controls = [
        {
            id: 1,
            Name: 'Название предприятия',
            EditorType: 'TextBox',
        },
        {
            id: 2,
            Name: 'Группа стран',
            dbField: 'Group_Country',
            EditorType: 'ComboMulti',
        },
        {
            id: 3,
            Name: 'Страна',
            dbField: 'Country',
            EditorType: 'ComboSingle',
        }
    ];

    const advanced = {
        conditions: {
            ComboMulti: ['=', '!='],
            ComboSingle: ['=', '!='],
            TextBox: ['Содержит', 'Не содержит', '=', '!='],
        },
        Group_Country: [
            {
                ID: 1,
                Name: 'Россия'
            },
            {
                ID: 2,
                Name: 'Абхазия'
            },
            {
                ID: 3,
                Name: 'Беларусь'
            }
        ],
        Country: [
            {
                ID: 1,
                Name: 'Россия'
            },
            {
                ID: 2,
                Name: 'Абхазия'
            },
            {
                ID: 3,
                Name: 'Беларусь'
            }
        ]
    };

    return {grid, data, data1, view, userViews, userView, controls, advanced};
  }
}
