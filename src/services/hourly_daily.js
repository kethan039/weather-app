import { formatToLocalTime} from "./weatherService";
const formatForecastWeather = async (lat,lon) => {




     const url1=  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=210ac60a5b2ecf53c3e5c596c0d9d9fa`
     
     const data1= await fetch(url1).then((res) => res.json());
    //  console.log(data1);
    
      
   

    let {list}=data1
    // console.log(list[0]);
     
        
    // var daily=[]
     
    // function isdivided(value){
    //   if(value%8===0)
    //   return value;

    // }

     const hourly= list.slice(1,6).map((d) => {
      return {
          title: d.dt_txt,
          temp: d.main.temp,
          icon: d.weather[0].icon,
        }
        
      });

      const daily= list.filter((ele)=>{
        if((list.indexOf(ele))%8===0)
        return ele;
      }).map((d) =>{
        return {
            title: d.dt_txt,
            temp: d.main.temp,
            icon: d.weather[0].icon,
          }
          
        });
    
      // console.log(hourly)
    
      return {daily,hourly};
}

    export default formatForecastWeather;