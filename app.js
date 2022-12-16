const app = new Vue({
    el:'#app',
    data:{
        titulo:'Gestionar Tarea',
        tareas:[],
        nombreTarea:'',
        contactoTarea:'',
        direccionTarea:'',
        descripcionTarea:''
    },
    methods:{
        agregartarea(){
            this.tareas.push({
                nombre:this.nombreTarea,
                contacto:this.contactoTarea,
                direccion:this.direccionTarea,
                descripcion:this.descripcionTarea,
                estado:false
            });
            this.nombreTarea='';
            this.contactoTarea='';
            this.direccionTarea='';
            this.descripcionTarea='';
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        editartarea(index){
            this.tareas[index].estado = true;
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        eliminartarea(index){
            this.tareas.splice(index,1);
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }
    },
    created: function(){
        let datosBD = JSON.parse(localStorage.getItem('gym-vue'));
        if(datosBD === null){
            this.tareas = [];
        }else{
            this.tareas = datosBD;
        }
    }
})