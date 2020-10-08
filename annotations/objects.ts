const profile = {
  theName: 'Mike',
  age: 32,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
}

const { age, theName }: { age: number, theName: string } = profile;

const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile;
