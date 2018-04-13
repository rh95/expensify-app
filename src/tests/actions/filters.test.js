import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../../actions/filters';



test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});


test('object Sort By Date',() => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  }); 
});

test('object Sort By Amount', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});


test('should setup settextfilters with text value', () => {
  const text = 'Rent';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should setup settextfilter default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});