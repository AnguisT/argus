import { HttpModule } from '@angular/http';
import { async, TestBed, inject } from '@angular/core/testing';
import { Location, APP_BASE_HREF } from '@angular/common';
import { HttpService } from '../../../modules/service/http.service/http.service';
import { ArgusDetailService } from '../service/argus.detail.service';

describe('(unit) Service: ArgusDetailService', () => {

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
            Number_Date: 'указание: ФС-ЕН-7/976 от 30.01.2013',
            custom: 'asdasdasdasdasdasd'
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

    const gridById = {
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
        Number_Date: 'указание: ФС-ЕН-7/976 от 30.01.2013',
        custom: 'asdasdasdasdasdasd'
    };

    beforeEach( async(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                HttpService,
                ArgusDetailService,
                { provide: APP_BASE_HREF, useValue: 'app/'}
            ]
        });
    }));

    it('(unit) 1.1 Should get data grid with name column',
    async(inject([ArgusDetailService], (argusDetailService: ArgusDetailService) => {
        argusDetailService.getDataGrid().subscribe((result: any) => {
            expect(result).toEqual(grid);
        });
    })));

    it('(unit) 1.2 Should get data grid by id with name column',
    async(inject([ArgusDetailService], (argusDetailService: ArgusDetailService) => {
        argusDetailService.getDataGridById(1).subscribe((result: any) => {
            expect(result).toEqual(gridById);
        });
    })));

    it('(unit) 1.3 Should get view grid',
    async(inject([ArgusDetailService], (argusDetailService: ArgusDetailService) => {
        argusDetailService.getViewGrid().subscribe((result: any) => {
            expect(result).toEqual(view);
        });
    })));
});
