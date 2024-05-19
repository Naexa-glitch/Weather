app.component('weather-components',{

    props:{

        province:{

            type:String,
            default: "default province"

        },
        state:{
            type:String,
            default: "default state"
        },
        image:{
            type: String
        },
        degrees:{
            type: Number
            
        },
        humidity:{
            type: Number
            
        },
        wind:{
            type: Number
            
        },
        feels:{
            type: Number
            
        },
        ultraviolet:{
            type: String
            
        }


    },

    data() {
        return {
            

        }
    },

    methods: {
        cardColor(){

            //console.log("hi")

            if(this.degrees >= 10 && this.degrees < 16){

                return "card-background-blue";

            }else if(this.degrees >= 16 && this.degrees < 21){

                return "card-background-yellow";

            }else if(this.degrees >= 21 && this.degrees < 27){

                return "card-background-orange";

            }else if(this.degrees >= 27 && this.degrees < 32){

                return "card-background-red";

            } if(this.degrees >= 32 && this.degrees < 38){

                return "card-background-red-obscure";

            }else if(this.degrees >= 38){

                return "card-background-red-dark";

            }

        }
    },

    template:

    /*html*/

    `

        <div class="container-sm mt-5"> 

            <div id="card" class="card" v-bind:class="cardColor()">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <p class="province-name mb-1">{{ province }}</p>
                            <p class="weather-state mb-3">{{ state }}</p>
                        </div>
                        <div class="col">
                          <img class="img-weather" v-bind:src="image" alt="weather image">
                        </div>
                    </div>
                  <div class="d-flex gap-3 mb-0">
                    <p class="weather-degrees mb-0">{{ degrees }}˚C</p>
                    <p class="weather-details mb-0 mt-2"><img class="me-2" src="./imgs/humidity.png" alt="">{{ humidity }}%</p>
                    <p class="weather-details mb-0 mt-2"><img class="me-2" src="./imgs/wind.png" alt="">{{ wind }}kmp</p>
                  </div>   
                  <p href="#" class="weather-info mt-0 mb-1">Feels like: {{ feels }}˚C</p>
                  <p id="1" href="#" class="weather-info">UV Index: {{ ultraviolet }}</p>
                </div>
              </div>

        </div>`


})