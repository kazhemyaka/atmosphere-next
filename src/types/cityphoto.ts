interface CityPhoto {
  results: [
    {
      id: string;
      urls: {
        regular: string;
      };
      user: {
        name: string;
      };
      links: {
        html: string;
      };
    }
  ];
}

export default CityPhoto;
