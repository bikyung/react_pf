import { combineReducers } from 'redux';

const initMember = {
	members: [
		{
			name: 'EMMA',
			position: 'Director',
			pic: 'department/member1.jpg',
		},
		{
			name: '',
			position: '',
			pic: 'department/member13.png',
		},
		{
			name: 'SOPHIA',
			position: 'Director',
			pic: 'department/member2.jpg',
		},
		{
			name: 'MADISON',
			position: 'Representative Director',
			pic: 'department/member3.jpg',
		},
		{
			name: 'ISABELLA',
			position: 'Representative Director',
			pic: 'department/member4.jpg',
		},
		{
			name: 'OLIVIA',
			position: 'Director Managing Executive Officer',
			pic: 'department/member5.jpg',
		},
		{
			name: '',
			position: '',
			pic: 'department/member13.png',
		},
		{
			name: 'MADELINE',
			position: 'Outside Director',
			pic: 'department/member6.jpg',
		},
		{
			name: 'ADDISON',
			position: 'Outside Director',
			pic: 'department/member7.jpg',
		},
		{
			name: 'asdasdasdasd',
			position: 'asdasdasdsad',
			pic: 'department/member13.png',
		},
		{
			name: '',
			position: '',
			pic: 'department/member13.png',
		},
		{
			name: 'HAILEY',
			position: 'Outside Director',
			pic: 'department/member8.jpg',
		},
		{
			name: 'JACKSON',
			position: 'Supervisory Committee Member',
			pic: 'department/member11.jpg',
		},
		{
			name: 'NADIA',
			position: 'Supervisory Committee Member',
			pic: 'department/member12.jpg',
		},
		{
			name: 'LOGAN',
			position: 'Supervisory Committee Member',
			pic: 'department/member9.jpg',
		},
		{
			name: '',
			position: '',
			pic: 'department/member13.png',
		},
		{
			name: 'LORA',
			position: 'Supervisory Committee Membe',
			pic: 'department/member10.jpg',
		},
	],
};

//초기데이터를 state에 저장했다가
//추후 action객체가 전달되면
//action객체의 타입에 따라 기존 데이터를 변경해서 리턴
const memberReducer = (state = initMember, action) => {
	switch (action.type) {
		case 'SET_MEMBERS':
			return { ...state, members: action.payload };

		default:
			return state;
	}
};

//전달된 각각의 reducer를 하나도 합쳐서 반환
const reducers = combineReducers({
	memberReducer,
});

export default reducers;

/*
if(action.type) {
  if(action.type==='SET_MEMBERS'){
    return {...state, members: action.payload}
  }
  else{
    return state;
  }
}
*/
