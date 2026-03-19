import { Model } from "@nozbe/watermelondb";
import { field, date, readonly } from '@nozbe/watermelondb/decorators'

export default class Satellite extends Model {
    static table = 'satellites'

    @field('norad_id') noraId
    @field('name') name
    @field('tle_line_1') tleLine1
    @field('tle_line_2') tleLine2

    @readonly @date('updated_at') updatedAt
}
