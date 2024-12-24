import { getBars, getBarFood, getBarHookahs, getBarDrinks } from '../src/services/bars'; 
import { apiInstance } from '../src/services/api'; 

jest.mock('../src/services/api', () => ({
  apiInstance: {
    get: jest.fn(),
  },
}));

describe('Bars API functions', () => {
  afterEach(() => {
    jest.clearAllMocks(); 
  });

  test('getBars should fetch a list of bars', async () => {
    const mockBars = [{ id: '1', name: 'Bar 1' }, { id: '2', name: 'Bar 2' }];
    (apiInstance.get as jest.Mock).mockResolvedValueOnce({ data: mockBars });

    const bars = await getBars();

    expect(apiInstance.get).toHaveBeenCalledWith('/bars');
    expect(bars).toEqual(mockBars);
  });

  test('getBarFood should fetch a list of foods for a bar', async () => {
    const mockFood = [{ id: '1', name: 'Pizza' }, { id: '2', name: 'Burger' }];
    (apiInstance.get as jest.Mock).mockResolvedValueOnce({ data: mockFood });

    const foods = await getBarFood('1');

    expect(apiInstance.get).toHaveBeenCalledWith('/bars/1/foods');
    expect(foods).toEqual(mockFood);
  });

  test('getBarHookahs should fetch a list of hookahs for a bar', async () => {
    const mockHookahs = [{ id: '1', flavor: 'Mint' }, { id: '2', flavor: 'Apple' }];
    (apiInstance.get as jest.Mock).mockResolvedValueOnce({ data: mockHookahs });

    const hookahs = await getBarHookahs('1');

    expect(apiInstance.get).toHaveBeenCalledWith('/bars/1/hookahs');
    expect(hookahs).toEqual(mockHookahs);
  });

  test('getBarDrinks should fetch a list of drinks for a bar', async () => {
    const mockDrinks = [{ id: '1', name: 'Coke' }, { id: '2', name: 'Beer' }];
    (apiInstance.get as jest.Mock).mockResolvedValueOnce({ data: mockDrinks });

    const drinks = await getBarDrinks('1');

    expect(apiInstance.get).toHaveBeenCalledWith('/bars/1/drinks');
    expect(drinks).toEqual(mockDrinks);
  });
});
