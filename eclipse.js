(function(){
    // 500,0,500
    // {"x":2955.887451171875,"y":22.427629470825195,"z":2202.44775390625}
    var startEclipsePosition,
        endEclipsePosition,
        entityIDs,
        myEntities,
        target;

    function log(describer, obj) {
        obj = obj || '';
        print('&======');
        print(APP_NAME + ": \n" + describer);
        print(JSON.stringify(obj));
        print('======&');
    }


    function onUpdate() {

    }

    Script.update.connect(onUpdate);
});

function getMyEntities(myEntities){
    entityIDs = Entities.findEntities(MyAvatar.position, 1000);
    for (var i = 0; i < entityIDs.length; i++){
        props = Entities.getEntityProperties(entityIDs[i]);
        if (props.name.indexOf(target) !== -1 ||
            props.name.indexOf(uuidTarget) !== -1) {
                myEntities.push({name:props.name, entityID:entityIDs[i]});
        };
    };
}

function listMyEntities(myEntities){
    print("Listing: " + myEntities.length);
    for (var i = 0; i < myEntities.length; i++) {
        print(myEntities[i].name + " " + myEntities[i].entityID);
    };
}

function deleteMyEntities(myEntities){
    printDebug("Deleting: " + myEntities.length);
    for (var i = 0; i < myEntities.length; i++) {
        printDebug(myEntities[i].name + " " + myEntities[i].entityID);
        Entities.deleteEntity(myEntities[i].entityID);
    };
}

function MyIdentifier(myEntity){
    return myEntity = myEntity+" "+uuidTarget;
}

function newUuidTarget(){
    allUuidTargets.push(uuidTarget);
    uuidTarget = Uuid.generate();
}
