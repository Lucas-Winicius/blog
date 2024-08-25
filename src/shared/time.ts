import moment from "moment";
import "moment/locale/pt-br";

export default function time(date: string | number | Date)  {
    return moment(date).format('lll');
}
