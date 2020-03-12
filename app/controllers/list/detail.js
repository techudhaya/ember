import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';


export default Controller.extend({
 
    actions:{
        delete(){

            let decision=confirm('Do you want to delete');

            if(decision){

                this.store.findRecord('testart', this.model.get('id'), { backgroundReload: true }).then(function(contact) {
                    contact.destroyRecord(); 
                });
            // this.document.querySelector(".profile").style.color="red";

                this.transitionToRoute('list');

            }
          

        }

    
    }

});
