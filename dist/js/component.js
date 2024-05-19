const app = Vue.createApp({

    data() {
        return {
            
            selectedIndex:0,

            info:[


            ],

            uv:[

            ],

            all_weathers:[],

            weather:{}

        }
    },

    mounted:function(){

        this.all_weathers = this.weathers;

        axios({
            method: 'get',
            url: 'https://api.weatherapi.com/v1/current.json?key=f9b96d72518b4ec6beb04339231505&q=San Jose, Costa Rica&aqi=no'

        })
        .then(
            (response) => {

                let items = response.data;
                //console.log(items);

                let ultraviolet = "";
                

                if(items.current.uv === 1 || items.current.uv === 2){

                    this.ultraviolet = "low"
 
                }else if(items.current.uv >= 3 || items.current.uv <= 5){

                    this.ultraviolet = "Moderate"

                }else if(items.current.uv >= 6 || items.current.uv <= 7){

                    this.ultraviolet = "High"

                }else if(items.current.uv >= 8 || items.current.uv <= 10){

                    this.ultraviolet = "Very High"

                }else if(items.current.uv >= 11){

                    this.ultraviolet = "Extreme"

                }    

                this.info == [];

                this.info.push({

                    image: items.current.condition.icon,
                    province: items.location.name,
                    state: items.current.condition.text,
                    degrees: items.current.temp_c,
                    humidity: items.current.humidity,
                    wind: items.current.wind_kph,
                    feels: items.current.feelslike_c,
                    ultraviolet: this.ultraviolet

                });

            }
        )
        .catch(
            error => console.log(error)
        );

        axios({
            method: 'get',
            url: 'https://api.weatherapi.com/v1/current.json?key=f9b96d72518b4ec6beb04339231505&q=Heredia, Costa Rica&aqi=no'

        })
        .then(
            (response) => {

                let items = response.data;
                //console.log(items);

                let ultraviolet = "";
                

                if(items.current.uv === 1 || items.current.uv === 2){

                    this.ultraviolet = "low"

                }else if(items.current.uv >= 3 || items.current.uv <= 5){

                    this.ultraviolet = "Moderate"

                }else if(items.current.uv >= 6 || items.current.uv <= 7){

                    this.ultraviolet = "High"

                }else if(items.current.uv >= 8 || items.current.uv <= 10){

                    this.ultraviolet = "Very High"

                }else if(items.current.uv >= 11){

                    this.ultraviolet = "Extreme"

                } 

                this.info == [];

                this.info.push({

                    image: items.current.condition.icon,
                    province: items.location.name,
                    state: items.current.condition.text,
                    degrees: items.current.temp_c,
                    humidity: items.current.humidity,
                    wind: items.current.wind_kph,
                    feels: items.current.feelslike_c,
                    ultraviolet: this.ultraviolet

                });
                

            }
        )
        .catch(
            error => console.log(error)
        );

        axios({
            method: 'get',
            url: 'https://api.weatherapi.com/v1/current.json?key=f9b96d72518b4ec6beb04339231505&q=Alajuela, Costa Rica&aqi=no'

        })
        .then(
            (response) => {

                let items = response.data;
                //console.log(items);

                let ultraviolet = "";
                

                if(items.current.uv === 1 || items.current.uv === 2){

                    this.ultraviolet = "low"

                }else if(items.current.uv >= 3 || items.current.uv <= 5){

                    this.ultraviolet = "Moderate"

                }else if(items.current.uv >= 6 || items.current.uv <= 7){

                    this.ultraviolet = "High"

                }else if(items.current.uv >= 8 || items.current.uv <= 10){

                    this.ultraviolet = "Very High"

                }else if(items.current.uv >= 11){

                    this.ultraviolet = "Extreme"

                } 

                this.info == [];

                this.info.push({

                    image: items.current.condition.icon,
                    province: items.location.name,
                    state: items.current.condition.text,
                    degrees: items.current.temp_c,
                    humidity: items.current.humidity,
                    wind: items.current.wind_kph,
                    feels: items.current.feelslike_c,
                    ultraviolet: this.ultraviolet

                });
                

            }
        )
        .catch(
            error => console.log(error)
        );

        axios({
            method: 'get',
            url: 'https://api.weatherapi.com/v1/current.json?key=f9b96d72518b4ec6beb04339231505&q=Cartago, Costa Rica&aqi=no'

        })
        .then(
            (response) => {

                let items = response.data;
                //console.log(items);

                let ultraviolet = "";
                

                if(items.current.uv === 1 || items.current.uv === 2){

                    this.ultraviolet = "low"

                }else if(items.current.uv >= 3 || items.current.uv <= 5){

                    this.ultraviolet = "Moderate"

                }else if(items.current.uv >= 6 || items.current.uv <= 7){

                    this.ultraviolet = "High"

                }else if(items.current.uv >= 8 || items.current.uv <= 10){

                    this.ultraviolet = "Very High"

                }else if(items.current.uv >= 11){

                    this.ultraviolet = "Extreme"

                } 

                this.info == [];

                this.info.push({

                    image: items.current.condition.icon,
                    province: items.location.name,
                    state: items.current.condition.text,
                    degrees: items.current.temp_c,
                    humidity: items.current.humidity,
                    wind: items.current.wind_kph,
                    feels: items.current.feelslike_c,
                    ultraviolet: this.ultraviolet

                });
                

            }
        )
        .catch(
            error => console.log(error)
        );

        axios({
            method: 'get',
            url: 'https://api.weatherapi.com/v1/current.json?key=f9b96d72518b4ec6beb04339231505&q=Limon, Costa Rica&aqi=no'

        })
        .then(
            (response) => {

                let items = response.data;
                //console.log(items);

                let ultraviolet = "";
                

                if(items.current.uv === 1 || items.current.uv === 2){

                    this.ultraviolet = "low"

                }else if(items.current.uv >= 3 || items.current.uv <= 5){

                    this.ultraviolet = "Moderate"

                }else if(items.current.uv >= 6 || items.current.uv <= 7){

                    this.ultraviolet = "High"

                }else if(items.current.uv >= 8 || items.current.uv <= 10){

                    this.ultraviolet = "Very High"

                }else if(items.current.uv >= 11){

                    this.ultraviolet = "Extreme"

                } 

                this.info == [];

                this.info.push({

                    image: items.current.condition.icon,
                    province: items.location.name,
                    state: items.current.condition.text,
                    degrees: items.current.temp_c,
                    humidity: items.current.humidity,
                    wind: items.current.wind_kph,
                    feels: items.current.feelslike_c,
                    ultraviolet: this.ultraviolet

                });
                

            }
        )
        .catch(
            error => console.log(error)
        );

        axios({
            method: 'get',
            url: 'https://api.weatherapi.com/v1/current.json?key=f9b96d72518b4ec6beb04339231505&q=Guanacaste, Costa Rica&aqi=no'

        })
        .then(
            (response) => {

                let items = response.data;
                //console.log(items);

                let ultraviolet = "";
                

                if(items.current.uv === 1 || items.current.uv === 2){

                    this.ultraviolet = "low"

                }else if(items.current.uv >= 3 || items.current.uv <= 5){

                    this.ultraviolet = "Moderate"

                }else if(items.current.uv >= 6 || items.current.uv <= 7){

                    this.ultraviolet = "High"

                }else if(items.current.uv >= 8 || items.current.uv <= 10){

                    this.ultraviolet = "Very High"

                }else if(items.current.uv >= 11){

                    this.ultraviolet = "Extreme"

                } 

                this.info == [];

                this.info.push({

                    image: items.current.condition.icon,
                    province: items.location.name,
                    state: items.current.condition.text,
                    degrees: items.current.temp_c,
                    humidity: items.current.humidity,
                    wind: items.current.wind_kph,
                    feels: items.current.feelslike_c,
                    ultraviolet: this.ultraviolet

                });
                

            }
        )
        .catch(
            error => console.log(error)
        );

        axios({
            method: 'get',
            url: 'https://api.weatherapi.com/v1/current.json?key=f9b96d72518b4ec6beb04339231505&q=Puntarenas, Costa Rica&aqi=no'

        })
        .then(
            (response) => {

                let items = response.data;

                console.log(items.current.temp_c)

                let ultraviolet = "";
                

                if(items.current.uv === 1 || items.current.uv === 2){

                    this.ultraviolet = "low"

                }else if(items.current.uv >= 3 || items.current.uv <= 5){

                    this.ultraviolet = "Moderate"

                }else if(items.current.uv >= 6 || items.current.uv <= 7){

                    this.ultraviolet = "High"

                }else if(items.current.uv >= 8 || items.current.uv <= 10){

                    this.ultraviolet = "Very High"

                }else if(items.current.uv >= 11){

                    this.ultraviolet = "Extreme"

                } 

                //console.log(items.current.uv);

                this.info == [];

                this.info.push({

                    image: items.current.condition.icon,
                    province: items.location.name,
                    state: items.current.condition.text,
                    degrees: items.current.temp_c,
                    humidity: items.current.humidity,
                    wind: items.current.wind_kph,
                    feels: items.current.feelslike_c,
                    ultraviolet: this.ultraviolet

                });
                

            }
        )
        .catch(
            error => console.log(error)
        );



    },
    
    

})

const emitter = mitt();
//global property for custom events
app.config.globalProperties.$test = emitter;