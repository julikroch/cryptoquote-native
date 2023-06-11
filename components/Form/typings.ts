export interface CryptoCoin {
  CoinInfo: {
    Id: string;
    Name: string;
    FullName: string;
  };
}

export interface FormProps {
  currency: string;
  crypto: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  setCrypto: React.Dispatch<React.SetStateAction<string>>;
  setCheckApi: React.Dispatch<React.SetStateAction<boolean>>;
}
