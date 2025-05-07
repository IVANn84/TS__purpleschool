import axios from 'axios';

interface Hair {
  color: string;
  type: string;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
}

interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}

interface Company {
  department: string;
  name: string;
  title: string;
  address: Address;
}

enum Roles {
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  USER = 'user',
}

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: Gender;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: Roles;
}

async function getData(): Promise<User[]> {
  try {
    const response = await axios.get('https://dummyjson.com/users');
    return response.data.users;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    throw new Error('Непредвиденная ошибка!');
  }
}

const res = getData().then((response) =>
  console.log(JSON.stringify(response, null, 2))
);
