export interface RootState {
  currentInfoApiReducer: any;
  planetName: string,
  climate: string,
  population: number,
  diameter: number,
  planetListArr: Array<object>;
}

const INITIAL_STATE = {
  planetName: 'Desconhecido',
  climate: 'Desconhecido',
  population: 0,
  diameter: 0,
  planetListArr: []
};

export default function currentInfoApiReducer(state = INITIAL_STATE, action: { type: any; value: any; }) {
  switch (action.type) {
    case 'UPDATE_PLANET_NAME':
      return { ...state, planetName: action.value };
    case 'UPDATE_CLIMATE':
      return { ...state, climate: action.value };
    case 'UPDATE_POPULATION':
      return { ...state, population: action.value };
    case 'UPDATE_DIAMETER':
      return { ...state, diameter: action.value };
    case 'UPDATE_PLANET_LIST_ARR':
      return { ...state, planetListArr: [...state.planetListArr, action.value] };
    default:
      return state;
  }
}

export function actionUpdatePlanetName(value: string) {
  return { type: 'UPDATE_PLANET_NAME', value };
};

export function actionUpdateClimate(value: string) {
  return { type: 'UPDATE_CLIMATE', value };
};

export function actionUpdatePopulation(value: number) {
  return { type: 'UPDATE_POPULATION', value };
};

export function actionUpdateDiameter(value: number) {
  return { type: 'UPDATE_DIAMETER', value };
};

export function actionUpdatePlanetListArr(value: Array<object>) {
  return { type: 'UPDATE_PLANET_LIST_ARR', value };
};