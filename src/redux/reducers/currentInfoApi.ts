const INITIAL_STATE = {
  planetName: '',
  climate: '',
  population: 0,
  diameter: 0,
};

export default function currentInfoApi(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case 'UPDATE_PLANET_NAME':
      return { ...state, planetName: action.value }
    case 'UPDATE_CLIMATE':
      return { ...state, climate: action.value }
    case 'UPDATE_POPULATION':
      return { ...state, population: action.value }
    case 'UPDATE_DIAMETER':
      return { ...state, diameter: action.value }
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