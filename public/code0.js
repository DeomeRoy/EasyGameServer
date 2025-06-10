gdjs.TitleCode = {};
gdjs.TitleCode.localVariables = [];
gdjs.TitleCode.GDTitle_9595ImageObjects1= [];
gdjs.TitleCode.GDTitle_9595ImageObjects2= [];
gdjs.TitleCode.GDTitle_9595ImageObjects3= [];
gdjs.TitleCode.GDStartObjects1= [];
gdjs.TitleCode.GDStartObjects2= [];
gdjs.TitleCode.GDStartObjects3= [];
gdjs.TitleCode.GDLevelObjects1= [];
gdjs.TitleCode.GDLevelObjects2= [];
gdjs.TitleCode.GDLevelObjects3= [];
gdjs.TitleCode.GDSettingObjects1= [];
gdjs.TitleCode.GDSettingObjects2= [];
gdjs.TitleCode.GDSettingObjects3= [];
gdjs.TitleCode.GDExitObjects1= [];
gdjs.TitleCode.GDExitObjects2= [];
gdjs.TitleCode.GDExitObjects3= [];
gdjs.TitleCode.GDTitle_9595TextObjects1= [];
gdjs.TitleCode.GDTitle_9595TextObjects2= [];
gdjs.TitleCode.GDTitle_9595TextObjects3= [];
gdjs.TitleCode.GDOperateObjects1= [];
gdjs.TitleCode.GDOperateObjects2= [];
gdjs.TitleCode.GDOperateObjects3= [];
gdjs.TitleCode.GDNewSpriteObjects1= [];
gdjs.TitleCode.GDNewSpriteObjects2= [];
gdjs.TitleCode.GDNewSpriteObjects3= [];


gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDStartObjects2Objects = Hashtable.newFrom({"Start": gdjs.TitleCode.GDStartObjects2});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDLevelObjects1Objects = Hashtable.newFrom({"Level": gdjs.TitleCode.GDLevelObjects1});
gdjs.TitleCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.TitleCode.GDStartObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDStartObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level_01", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level"), gdjs.TitleCode.GDLevelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDLevelObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level_Select", false);
}}

}


};gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDNewSpriteObjects2Objects = Hashtable.newFrom({"NewSprite": gdjs.TitleCode.GDNewSpriteObjects2});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDStartObjects2Objects = Hashtable.newFrom({"Start": gdjs.TitleCode.GDStartObjects2});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.TitleCode.GDNewSpriteObjects1});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDLevelObjects1Objects = Hashtable.newFrom({"Level": gdjs.TitleCode.GDLevelObjects1});
gdjs.TitleCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.TitleCode.GDNewSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.TitleCode.GDStartObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDNewSpriteObjects2Objects, gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDStartObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level_01", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level"), gdjs.TitleCode.GDLevelObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.TitleCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDNewSpriteObjects1Objects, gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDLevelObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level_Select", false);
}}

}


};gdjs.TitleCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.TitleCode.GDNewSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDNewSpriteObjects2.length;i<l;++i) {
    if ( gdjs.TitleCode.GDNewSpriteObjects2[i].getY() >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDNewSpriteObjects2[k] = gdjs.TitleCode.GDNewSpriteObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDNewSpriteObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.TitleCode.GDNewSpriteObjects2 */
{for(var i = 0, len = gdjs.TitleCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDNewSpriteObjects2[i].setY(gdjs.TitleCode.GDNewSpriteObjects2[i].getY() - (10));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.TitleCode.GDNewSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDNewSpriteObjects2.length;i<l;++i) {
    if ( gdjs.TitleCode.GDNewSpriteObjects2[i].getY() <= 1080 ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDNewSpriteObjects2[k] = gdjs.TitleCode.GDNewSpriteObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDNewSpriteObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.TitleCode.GDNewSpriteObjects2 */
{for(var i = 0, len = gdjs.TitleCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDNewSpriteObjects2[i].setY(gdjs.TitleCode.GDNewSpriteObjects2[i].getY() + (10));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.TitleCode.GDNewSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDNewSpriteObjects2.length;i<l;++i) {
    if ( gdjs.TitleCode.GDNewSpriteObjects2[i].getX() >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDNewSpriteObjects2[k] = gdjs.TitleCode.GDNewSpriteObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDNewSpriteObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.TitleCode.GDNewSpriteObjects2 */
{for(var i = 0, len = gdjs.TitleCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDNewSpriteObjects2[i].setX(gdjs.TitleCode.GDNewSpriteObjects2[i].getX() - (10));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.TitleCode.GDNewSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleCode.GDNewSpriteObjects2.length;i<l;++i) {
    if ( gdjs.TitleCode.GDNewSpriteObjects2[i].getX() <= 1920 ) {
        isConditionTrue_0 = true;
        gdjs.TitleCode.GDNewSpriteObjects2[k] = gdjs.TitleCode.GDNewSpriteObjects2[i];
        ++k;
    }
}
gdjs.TitleCode.GDNewSpriteObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.TitleCode.GDNewSpriteObjects2 */
{for(var i = 0, len = gdjs.TitleCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDNewSpriteObjects2[i].setX(gdjs.TitleCode.GDNewSpriteObjects2[i].getX() + (10));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.TitleCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.TitleCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.TitleCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.TitleCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDTitle_9595ImageObjects1.length = 0;
gdjs.TitleCode.GDTitle_9595ImageObjects2.length = 0;
gdjs.TitleCode.GDTitle_9595ImageObjects3.length = 0;
gdjs.TitleCode.GDStartObjects1.length = 0;
gdjs.TitleCode.GDStartObjects2.length = 0;
gdjs.TitleCode.GDStartObjects3.length = 0;
gdjs.TitleCode.GDLevelObjects1.length = 0;
gdjs.TitleCode.GDLevelObjects2.length = 0;
gdjs.TitleCode.GDLevelObjects3.length = 0;
gdjs.TitleCode.GDSettingObjects1.length = 0;
gdjs.TitleCode.GDSettingObjects2.length = 0;
gdjs.TitleCode.GDSettingObjects3.length = 0;
gdjs.TitleCode.GDExitObjects1.length = 0;
gdjs.TitleCode.GDExitObjects2.length = 0;
gdjs.TitleCode.GDExitObjects3.length = 0;
gdjs.TitleCode.GDTitle_9595TextObjects1.length = 0;
gdjs.TitleCode.GDTitle_9595TextObjects2.length = 0;
gdjs.TitleCode.GDTitle_9595TextObjects3.length = 0;
gdjs.TitleCode.GDOperateObjects1.length = 0;
gdjs.TitleCode.GDOperateObjects2.length = 0;
gdjs.TitleCode.GDOperateObjects3.length = 0;
gdjs.TitleCode.GDNewSpriteObjects1.length = 0;
gdjs.TitleCode.GDNewSpriteObjects2.length = 0;
gdjs.TitleCode.GDNewSpriteObjects3.length = 0;

gdjs.TitleCode.eventsList3(runtimeScene);
gdjs.TitleCode.GDTitle_9595ImageObjects1.length = 0;
gdjs.TitleCode.GDTitle_9595ImageObjects2.length = 0;
gdjs.TitleCode.GDTitle_9595ImageObjects3.length = 0;
gdjs.TitleCode.GDStartObjects1.length = 0;
gdjs.TitleCode.GDStartObjects2.length = 0;
gdjs.TitleCode.GDStartObjects3.length = 0;
gdjs.TitleCode.GDLevelObjects1.length = 0;
gdjs.TitleCode.GDLevelObjects2.length = 0;
gdjs.TitleCode.GDLevelObjects3.length = 0;
gdjs.TitleCode.GDSettingObjects1.length = 0;
gdjs.TitleCode.GDSettingObjects2.length = 0;
gdjs.TitleCode.GDSettingObjects3.length = 0;
gdjs.TitleCode.GDExitObjects1.length = 0;
gdjs.TitleCode.GDExitObjects2.length = 0;
gdjs.TitleCode.GDExitObjects3.length = 0;
gdjs.TitleCode.GDTitle_9595TextObjects1.length = 0;
gdjs.TitleCode.GDTitle_9595TextObjects2.length = 0;
gdjs.TitleCode.GDTitle_9595TextObjects3.length = 0;
gdjs.TitleCode.GDOperateObjects1.length = 0;
gdjs.TitleCode.GDOperateObjects2.length = 0;
gdjs.TitleCode.GDOperateObjects3.length = 0;
gdjs.TitleCode.GDNewSpriteObjects1.length = 0;
gdjs.TitleCode.GDNewSpriteObjects2.length = 0;
gdjs.TitleCode.GDNewSpriteObjects3.length = 0;


return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
