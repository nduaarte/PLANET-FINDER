export interface RootState {
  currentInfoApiReducer: any;
  planetName: string;
  inputCurrentPlanet: string;
  planetListArr: Array<object>;
}

const INITIAL_STATE = {
  planetName: 'Desconhecido',
  inputCurrentPlanet: '',
  planetListArr: []
};

export default function currentInfoApiReducer(state = INITIAL_STATE, action: { type: any; value: any; }) {
  switch (action.type) {
    case 'UPDATE_PLANET_NAME':
      return { ...state, planetName: action.value };
    case 'UPDATE_INPUT_CURRENT_PLANET':
      return { ...state, inputCurrentPlanet: action.value };
    case 'ADD_IN_PLANET_LIST_ARR':
      return { ...state, planetListArr: [...state.planetListArr, action.value] };
    default:
      return state;
  }
}

export function actionUpdatePlanetName(value: string) {
  return { type: 'UPDATE_PLANET_NAME', value };
};

export function actionUpdateInputCurrentPlanet(value: string) {
  return { type: 'UPDATE_INPUT_CURRENT_PLANET', value };
};

export function actionUpdatePlanetListArr(value: Array<object>) {
  return { type: 'ADD_IN_PLANET_LIST_ARR', value };
};

