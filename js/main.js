const car=(name,model,owner,year,phone,image)=>({name,model,owner,year,phone,image})
const cars=[
    car('Ford','Focus', 'Denis', '2016', '+79121234567', 'images/focus.jpg'),
    car('Ford','Mondeo', 'Max', '2017', '+79152223337', 'images/mondeo.jpg'),
    car('Ford','Mustang', 'Yuriy', '2019', '+7985166572160', 'images/mustang.jpg'),
    car('Porshe','911', 'Olga', '2018', '+7985133572160', 'images/porshe911.jpg')
]
const log=(text, type, date= new Date()) => ({text, type, date})
new Vue({
    el: '#app',
    data:{
        cars:cars,
        car: cars[0],
        selectedCarIndex:0,
        phoneVisibility:false,
        search:'',
        modalVisibility: false,
        logs:[]
    },
    methods:{
        selectCar: function(index){
            this.car=cars[index];
            this.selectedCarIndex=index;
            this.phoneVisibility=false
        },
        newOrder(){
            this.modalVisibility = false;
            this.logs.push(
                log(`Success order: ${this.car.name}-${this.car.model}`,'ok')
            )
        },
        cancelOrder(){
            this.modalVisibility = false;
            this.logs.push(
                log(`Cancelled order: ${this.car.name}-${this.car.model}`,'cnl')
            )
        }
        },
    computed:{
        phoneBtnText(){
            return this.phoneVisibility ? 'Hide phone':'Show phone'},
            filteredCars(){
//                return this.cars
                return this.cars.filter(car=>{
                    return car.name.indexOf(this.search) > -1 || 
                    car.model.toUpperCase().indexOf(this.search.toUpperCase()) > -1
                })            
            }
    
        },
    filters:{
        date(value){
            return value.toLocaleString()
        }
    }
        
    
})