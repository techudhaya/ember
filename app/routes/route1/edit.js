import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        // return (this.store.findAll('testart')).then((p)=>{
        //     return p.findBy("id",+params.id);
        // });

        return this.store.findRecord('testart', params.id).then(function(p) {
            return p;
          });
    }
});
