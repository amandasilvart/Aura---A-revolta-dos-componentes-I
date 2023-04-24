({
showToast : function(component, event, helper) {
    var toastEvent = $A.get("e.force:showToast");
    toastEvent.setParams({
        "title": "Success!",
        "message": "Lead cadastrado com sucesso.",
        "type": "Success"
    });
    toastEvent.fire();
    $A.get('e.force:refreshView').fire();
},
    handleReset: function(cmp, event, helper) {
        cmp.find('field').forEach(function(f) {
            f.reset();
        });
    }


})
