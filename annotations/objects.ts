const profile = {
  name: 'Mike',
  age: 32,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
}

const { age, name }: { age: number, name: string } = profile; // squigglies fine here, ignore

const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile;
