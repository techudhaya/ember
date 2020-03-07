import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';


export default Controller.extend({
   
    // model:computed('model',function(){
    //     return this.model.findby("name",);
    // })

    actions:{
        delete(){

            this.store.findRecord('testart', this.model.get('id'), { backgroundReload: true }).then(function(contact) {
                contact.destroyRecord(); // => DELETE to /posts/2
            });

            // this.document.querySelector(".profile").style.color="red";

        }

    
    }

});
