import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        update(){
            console.log("record added to the database");
            // let newtask=this.store.createRecord('testart',{
            
            //     name:this.get('name'),
            //     mail:this.get('mail'),
            //     phone_number:this.get('ph_number')
            // });
            // console.log(newtask.id)
            // newtask.save();

            // this.set('name',"");
            // this.set('mail',"");
            // this.set('ph_number',"");

            this.model.save();

        },

        erase(){
            this.set('name',"");
            this.set('mail',"");
            this.set('ph_number',"");
        }
    }
});
