import moment from 'moment';
import 'moment/locale/ko';

export const fromNow = (dateString: string) => moment(dateString).fromNow();
