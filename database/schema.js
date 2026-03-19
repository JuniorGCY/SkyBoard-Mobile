import { appSchema, tableSchema} from "@nozbe/watermelondb";

export const mySchema = appSchema({
    version: 1,
    tables: [
        tableSchema({
            name: 'satellites',
            columns: [
                {name: 'norad_id', type: 'number', isIndexed: true},
                {name: 'name', type: 'string'},
                {name: 'tle_line_1', type: 'string'},
                {name: 'tle_line_2', type: 'string'},
                {name: 'updated_at', type: 'number'}
            ]
        })
    ]
})