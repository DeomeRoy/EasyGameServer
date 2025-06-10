gdjs.Level_95SelectCode = {};
gdjs.Level_95SelectCode.localVariables = [];
gdjs.Level_95SelectCode.GDTitle_9595ImageObjects1= [];
gdjs.Level_95SelectCode.GDTitle_9595ImageObjects2= [];
gdjs.Level_95SelectCode.GDTitle_9595ImageObjects3= [];
gdjs.Level_95SelectCode.GDBackObjects1= [];
gdjs.Level_95SelectCode.GDBackObjects2= [];
gdjs.Level_95SelectCode.GDBackObjects3= [];
gdjs.Level_95SelectCode.GDLevel_95951Objects1= [];
gdjs.Level_95SelectCode.GDLevel_95951Objects2= [];
gdjs.Level_95SelectCode.GDLevel_95951Objects3= [];
gdjs.Level_95SelectCode.GDLevel_95952Objects1= [];
gdjs.Level_95SelectCode.GDLevel_95952Objects2= [];
gdjs.Level_95SelectCode.GDLevel_95952Objects3= [];
gdjs.Level_95SelectCode.GDLevel_95953Objects1= [];
gdjs.Level_95SelectCode.GDLevel_95953Objects2= [];
gdjs.Level_95SelectCode.GDLevel_95953Objects3= [];
gdjs.Level_95SelectCode.GDNewSpriteObjects1= [];
gdjs.Level_95SelectCode.GDNewSpriteObjects2= [];
gdjs.Level_95SelectCode.GDNewSpriteObjects3= [];


gdjs.Level_95SelectCode.mapOfGDgdjs_9546Level_959595SelectCode_9546GDNewSpriteObjects2Objects = Hashtable.newFrom({"NewSprite": gdjs.Level_95SelectCode.GDNewSpriteObjects2});
gdjs.Level_95SelectCode.mapOfGDgdjs_9546Level_959595SelectCode_9546GDBackObjects2Objects = Hashtable.newFrom({"Back": gdjs.Level_95SelectCode.GDBackObjects2});
gdjs.Level_95SelectCode.mapOfGDgdjs_9546Level_959595SelectCode_9546GDNewSpriteObjects2Objects = Hashtable.newFrom({"NewSprite": gdjs.Level_95SelectCode.GDNewSpriteObjects2});
gdjs.Level_95SelectCode.mapOfGDgdjs_9546Level_959595SelectCode_9546GDLevel_959595951Objects2Objects = Hashtable.newFrom({"Level_1": gdjs.Level_95SelectCode.GDLevel_95951Objects2});
gdjs.Level_95SelectCode.mapOfGDgdjs_9546Level_959595SelectCode_9546GDNewSpriteObjects2Objects = Hashtable.newFrom({"NewSprite": gdjs.Level_95SelectCode.GDNewSpriteObjects2});
gdjs.Level_95SelectCode.mapOfGDgdjs_9546Level_959595SelectCode_9546GDLevel_959595952Objects2Objects = Hashtable.newFrom({"Level_2": gdjs.Level_95SelectCode.GDLevel_95952Objects2});
gdjs.Level_95SelectCode.mapOfGDgdjs_9546Level_959595SelectCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Level_95SelectCode.GDNewSpriteObjects1});
gdjs.Level_95SelectCode.mapOfGDgdjs_9546Level_959595SelectCode_9546GDLevel_959595953Objects1Objects = Hashtable.newFrom({"Level_3": gdjs.Level_95SelectCode.GDLevel_95953Objects1});
gdjs.Level_95SelectCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Level_95SelectCode.GDBackObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Level_95SelectCode.GDNewSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_95SelectCode.mapOfGDgdjs_9546Level_959595SelectCode_9546GDNewSpriteObjects2Objects, gdjs.Level_95SelectCode.mapOfGDgdjs_9546Level_959595SelectCode_9546GDBackObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level_1"), gdjs.Level_95SelectCode.GDLevel_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Level_95SelectCode.GDNewSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_95SelectCode.mapOfGDgdjs_9546Level_959595SelectCode_9546GDNewSpriteObjects2Objects, gdjs.Level_95SelectCode.mapOfGDgdjs_9546Level_959595SelectCode_9546GDLevel_959595951Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level_01", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level_2"), gdjs.Level_95SelectCode.GDLevel_95952Objects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Level_95SelectCode.GDNewSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_95SelectCode.mapOfGDgdjs_9546Level_959595SelectCode_9546GDNewSpriteObjects2Objects, gdjs.Level_95SelectCode.mapOfGDgdjs_9546Level_959595SelectCode_9546GDLevel_959595952Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level_02", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level_3"), gdjs.Level_95SelectCode.GDLevel_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Level_95SelectCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_95SelectCode.mapOfGDgdjs_9546Level_959595SelectCode_9546GDNewSpriteObjects1Objects, gdjs.Level_95SelectCode.mapOfGDgdjs_9546Level_959595SelectCode_9546GDLevel_959595953Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level_03", false);
}}

}


};gdjs.Level_95SelectCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Level_95SelectCode.GDNewSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_95SelectCode.GDNewSpriteObjects2.length;i<l;++i) {
    if ( gdjs.Level_95SelectCode.GDNewSpriteObjects2[i].getY() >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Level_95SelectCode.GDNewSpriteObjects2[k] = gdjs.Level_95SelectCode.GDNewSpriteObjects2[i];
        ++k;
    }
}
gdjs.Level_95SelectCode.GDNewSpriteObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_95SelectCode.GDNewSpriteObjects2 */
{for(var i = 0, len = gdjs.Level_95SelectCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Level_95SelectCode.GDNewSpriteObjects2[i].setY(gdjs.Level_95SelectCode.GDNewSpriteObjects2[i].getY() - (10));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Level_95SelectCode.GDNewSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_95SelectCode.GDNewSpriteObjects2.length;i<l;++i) {
    if ( gdjs.Level_95SelectCode.GDNewSpriteObjects2[i].getY() <= 1080 ) {
        isConditionTrue_0 = true;
        gdjs.Level_95SelectCode.GDNewSpriteObjects2[k] = gdjs.Level_95SelectCode.GDNewSpriteObjects2[i];
        ++k;
    }
}
gdjs.Level_95SelectCode.GDNewSpriteObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_95SelectCode.GDNewSpriteObjects2 */
{for(var i = 0, len = gdjs.Level_95SelectCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Level_95SelectCode.GDNewSpriteObjects2[i].setY(gdjs.Level_95SelectCode.GDNewSpriteObjects2[i].getY() + (10));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Level_95SelectCode.GDNewSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_95SelectCode.GDNewSpriteObjects2.length;i<l;++i) {
    if ( gdjs.Level_95SelectCode.GDNewSpriteObjects2[i].getX() >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Level_95SelectCode.GDNewSpriteObjects2[k] = gdjs.Level_95SelectCode.GDNewSpriteObjects2[i];
        ++k;
    }
}
gdjs.Level_95SelectCode.GDNewSpriteObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_95SelectCode.GDNewSpriteObjects2 */
{for(var i = 0, len = gdjs.Level_95SelectCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Level_95SelectCode.GDNewSpriteObjects2[i].setX(gdjs.Level_95SelectCode.GDNewSpriteObjects2[i].getX() - (10));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Level_95SelectCode.GDNewSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_95SelectCode.GDNewSpriteObjects2.length;i<l;++i) {
    if ( gdjs.Level_95SelectCode.GDNewSpriteObjects2[i].getX() <= 1920 ) {
        isConditionTrue_0 = true;
        gdjs.Level_95SelectCode.GDNewSpriteObjects2[k] = gdjs.Level_95SelectCode.GDNewSpriteObjects2[i];
        ++k;
    }
}
gdjs.Level_95SelectCode.GDNewSpriteObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_95SelectCode.GDNewSpriteObjects2 */
{for(var i = 0, len = gdjs.Level_95SelectCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.Level_95SelectCode.GDNewSpriteObjects2[i].setX(gdjs.Level_95SelectCode.GDNewSpriteObjects2[i].getX() + (10));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level_95SelectCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Level_95SelectCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Level_95SelectCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_95SelectCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.Level_95SelectCode.GDBackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_95SelectCode.GDBackObjects1[k] = gdjs.Level_95SelectCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.Level_95SelectCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level_1"), gdjs.Level_95SelectCode.GDLevel_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_95SelectCode.GDLevel_95951Objects1.length;i<l;++i) {
    if ( gdjs.Level_95SelectCode.GDLevel_95951Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_95SelectCode.GDLevel_95951Objects1[k] = gdjs.Level_95SelectCode.GDLevel_95951Objects1[i];
        ++k;
    }
}
gdjs.Level_95SelectCode.GDLevel_95951Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level_01", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level_2"), gdjs.Level_95SelectCode.GDLevel_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_95SelectCode.GDLevel_95952Objects1.length;i<l;++i) {
    if ( gdjs.Level_95SelectCode.GDLevel_95952Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_95SelectCode.GDLevel_95952Objects1[k] = gdjs.Level_95SelectCode.GDLevel_95952Objects1[i];
        ++k;
    }
}
gdjs.Level_95SelectCode.GDLevel_95952Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level_02", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level_3"), gdjs.Level_95SelectCode.GDLevel_95953Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_95SelectCode.GDLevel_95953Objects1.length;i<l;++i) {
    if ( gdjs.Level_95SelectCode.GDLevel_95953Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_95SelectCode.GDLevel_95953Objects1[k] = gdjs.Level_95SelectCode.GDLevel_95953Objects1[i];
        ++k;
    }
}
gdjs.Level_95SelectCode.GDLevel_95953Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level_01", false);
}}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.Level_95SelectCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Level_95SelectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_95SelectCode.GDTitle_9595ImageObjects1.length = 0;
gdjs.Level_95SelectCode.GDTitle_9595ImageObjects2.length = 0;
gdjs.Level_95SelectCode.GDTitle_9595ImageObjects3.length = 0;
gdjs.Level_95SelectCode.GDBackObjects1.length = 0;
gdjs.Level_95SelectCode.GDBackObjects2.length = 0;
gdjs.Level_95SelectCode.GDBackObjects3.length = 0;
gdjs.Level_95SelectCode.GDLevel_95951Objects1.length = 0;
gdjs.Level_95SelectCode.GDLevel_95951Objects2.length = 0;
gdjs.Level_95SelectCode.GDLevel_95951Objects3.length = 0;
gdjs.Level_95SelectCode.GDLevel_95952Objects1.length = 0;
gdjs.Level_95SelectCode.GDLevel_95952Objects2.length = 0;
gdjs.Level_95SelectCode.GDLevel_95952Objects3.length = 0;
gdjs.Level_95SelectCode.GDLevel_95953Objects1.length = 0;
gdjs.Level_95SelectCode.GDLevel_95953Objects2.length = 0;
gdjs.Level_95SelectCode.GDLevel_95953Objects3.length = 0;
gdjs.Level_95SelectCode.GDNewSpriteObjects1.length = 0;
gdjs.Level_95SelectCode.GDNewSpriteObjects2.length = 0;
gdjs.Level_95SelectCode.GDNewSpriteObjects3.length = 0;

gdjs.Level_95SelectCode.eventsList2(runtimeScene);
gdjs.Level_95SelectCode.GDTitle_9595ImageObjects1.length = 0;
gdjs.Level_95SelectCode.GDTitle_9595ImageObjects2.length = 0;
gdjs.Level_95SelectCode.GDTitle_9595ImageObjects3.length = 0;
gdjs.Level_95SelectCode.GDBackObjects1.length = 0;
gdjs.Level_95SelectCode.GDBackObjects2.length = 0;
gdjs.Level_95SelectCode.GDBackObjects3.length = 0;
gdjs.Level_95SelectCode.GDLevel_95951Objects1.length = 0;
gdjs.Level_95SelectCode.GDLevel_95951Objects2.length = 0;
gdjs.Level_95SelectCode.GDLevel_95951Objects3.length = 0;
gdjs.Level_95SelectCode.GDLevel_95952Objects1.length = 0;
gdjs.Level_95SelectCode.GDLevel_95952Objects2.length = 0;
gdjs.Level_95SelectCode.GDLevel_95952Objects3.length = 0;
gdjs.Level_95SelectCode.GDLevel_95953Objects1.length = 0;
gdjs.Level_95SelectCode.GDLevel_95953Objects2.length = 0;
gdjs.Level_95SelectCode.GDLevel_95953Objects3.length = 0;
gdjs.Level_95SelectCode.GDNewSpriteObjects1.length = 0;
gdjs.Level_95SelectCode.GDNewSpriteObjects2.length = 0;
gdjs.Level_95SelectCode.GDNewSpriteObjects3.length = 0;


return;

}

gdjs['Level_95SelectCode'] = gdjs.Level_95SelectCode;
