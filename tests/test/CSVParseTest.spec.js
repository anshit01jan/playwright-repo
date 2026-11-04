import { test, expect } from '@playwright/test';
import fs from 'fs';
import {parse} from 'csv-parse/sync';

    const records = parse(fs.readFileSync('test.csv'), {
        columns: true,
        trim: true,
        skip_empty_lines: true
    })
    
records.forEach(record => {
    test(`CSV Parse Test - ${record.Id}`, async ({page}) => {
        await page.goto('https://demoqa.com/automation-practice-form'); 
        await page.fill('#firstName', record.firstName);
        await page.fill('#lastName', record.lastName);
    });
});