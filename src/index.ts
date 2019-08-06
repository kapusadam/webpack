import axios from 'axios';
import * as _ from 'lodash';
import * as moment from 'moment';
import { extendMoment } from 'moment-range';

extendMoment(moment);

class Test {
    outputX(text: string): string {

        let instance = axios.create();
        console.log(instance);
        const date = moment();
        return `Hello ${text}! ${_.head([1,2])} DATE: ${date}`;
    }
}

console.log(new Test().outputX('Csovi'));