import Route from '@ember/routing/route';

export default Route.extend({
    templateName:'edit',
    model(){
        return {
            name:"",
            mail:"",
            phone_number:""
        }
    }



});
