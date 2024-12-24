import { apiInstance } from '../src/services/api';
import { registerUser, loginUser, getUserById } from '../src/services/users';
import { RegisterUserType, LoginUserType, UserType } from '../src/services/users/types';

jest.mock('../src/services/api', () => ({
  apiInstance: {
    post: jest.fn(),
    get: jest.fn(),
  },
}));

describe('Users API functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('registerUser', () => {
    test('should return status 201 when user is successfully registered', async () => {
      (apiInstance.post as jest.Mock).mockResolvedValueOnce({ status: 201 });

      const body: RegisterUserType = {
        id: '1',
        login: 'johndoe',
        firstName: 'John',
        secondName: 'Doe',
        password: 'password123',
      };

      const status = await registerUser(body);

      expect(apiInstance.post).toHaveBeenCalledWith('/users', { ...body });
      expect(status).toBe(201);
    });

    test('should throw an error for status 400', async () => {
      (apiInstance.post as jest.Mock).mockResolvedValueOnce({ status: 400 });

      const body: RegisterUserType = {
        id: '1',
        login: '',
        firstName: '',
        secondName: '',
        password: '',
      };

      await expect(registerUser(body)).rejects.toThrow('Invalid input or missing data');
    });

    test('should throw an error for status 409', async () => {
      (apiInstance.post as jest.Mock).mockResolvedValueOnce({ status: 409 });

      const body: RegisterUserType = {
        id: '1',
        login: 'johndoe',
        firstName: 'John',
        secondName: 'Doe',
        password: 'password123',
      };

      await expect(registerUser(body)).rejects.toThrow('User already exists');
    });
  });

  describe('loginUser', () => {
    test('should return user data for valid login and password', async () => {
      const mockData: LoginUserType = {
        id: '1',
        login: 'johndoe',
        firstName: 'John',
        secondName: 'Doe',
        token: 'abc123',
      };

      (apiInstance.get as jest.Mock).mockResolvedValueOnce({ data: mockData, status: 200 });

      const data = await loginUser('johndoe', 'password123');

      expect(apiInstance.get).toHaveBeenCalledWith('/users/johndoe/password123');
      expect(data).toEqual(mockData);
    });

    test('should throw an error for status 400', async () => {
      (apiInstance.get as jest.Mock).mockResolvedValueOnce({ status: 400 });

      await expect(loginUser('', '')).rejects.toThrow('Invalid input or missing data');
    });

    test('should throw an error for status 404', async () => {
      (apiInstance.get as jest.Mock).mockResolvedValueOnce({ status: 404 });

      await expect(loginUser('johndoe', 'wrongpassword')).rejects.toThrow('User not found');
    });
  });

  describe('getUserById', () => {
    test('should return user data by ID', async () => {
      const mockData: UserType = {
        id: '1',
        login: 'johndoe',
        firstName: 'John',
        secondName: 'Doe',
      };

      (apiInstance.get as jest.Mock).mockResolvedValueOnce({ data: mockData });

      const data = await getUserById('1');

      expect(apiInstance.get).toHaveBeenCalledWith('/users/1');
      expect(data).toEqual(mockData);
    });
  });
});
