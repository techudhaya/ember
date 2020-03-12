import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        update(){

            console.log("record added to the database");
            let newtask=this.store.createRecord('testart',{
            
                name:this.model.name,
                mail:this.model.mail,
                phone_number:this.model.phone_number
            });

            newtask.save();

            this.set("model.name","")
            this.set("model.mail","")
            this.set("model.phone_number","")

            alert("contact saved");

        },

        find(){
            let v=this.model.findBy("name",this.search);
            alert(v.name+"\n"+v.mail)
        },

        erase(){
            this.set('name',"");
            this.set('mail',"");
            this.set('ph_number',"");
        }
    }
});
