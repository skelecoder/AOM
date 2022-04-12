import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { fr } from 'date-fns/locale';

const convertToDefEventPara = (name, value) => ({
    target: {
        name,
        value,
    },
});

const DatePickerInput = ({ value, id, name, label, changeEvent, isDisabled }) => {
    return (
        <MuiPickersUtilsProvider locale={fr} utils={DateFnsUtils}>
            <DatePicker
                disableToolbar
                variant='dialog'
                inputVariant="outlined"     
                format="dd/MMM/yyyy"
                label={label}
                name={name}
                value={value}
                onChange={(date) => changeEvent(id, convertToDefEventPara(name, date))}
                fullWidth
                disabled={isDisabled}
            />
        </MuiPickersUtilsProvider>
    );
};

export default DatePickerInput;
