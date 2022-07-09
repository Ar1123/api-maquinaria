export interface ITrace {

  output: string;
  input: string;
  location: {
    lat: number;
    lng: number;
    precisition: number;
  };
  battery: number;
  nameProyect: string;
  idMachine: string;
  idM: string;

}
interface ILocation {
  lat: number;
  lng: number;
  precisition: number;
}