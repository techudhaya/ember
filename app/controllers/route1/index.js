import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        add(){
            console.log("record added to the database");
            let newtask=this.store.createRecord('testart',{
            
                name:this.get('name'),
                mail:this.get('mail'),
                phone_number:this.get('ph_number')
            });
            console.log(newtask.id)
            newtask.save();

            this.set('name',"");
            this.set('mail',"");
            this.set('ph_number',"");

        },

        find(){
            let v=this.model.findBy("name",this.search);
            console.log(v.mail)
        },

        erase(){
            this.set('name',"");
            this.set('mail',"");
            this.set('ph_number',"");
        }
    }
});
