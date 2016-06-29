$(function() {

    function S4() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };

    function guid() {
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    };

    Backbone.sync = function (method, model, options) {
        console.log(method + "||" + JSON.stringify(model) + "||" + options);
        switch (method) {
            case 'create':
                model.set(model.idAttribute, guid());
        }
        return ;
        //return Backbone.getSyncMethod(model).apply(this, [method, model, options]);
    };
});
