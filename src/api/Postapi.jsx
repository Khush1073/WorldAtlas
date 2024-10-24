import axios from "axios";
const api = axios.create({
    baseURL:"https://restcountries.com/v3.1",
});

export const getCounrtyData = () =>{
    return api.get("/all?fields=name,population,region,capital,flags");
}

//http formindivsual data

export const  getCountryindData = (name)=>{
    return api.get(`/name/${name}?fullText=true&filed=name,population,region,
        subregion,capital,tid,currencies,language,borders,flags`);
};