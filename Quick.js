function AddNoticeBox()
{
    // With AddNoticeBox, shouldn't I just have it run no matter what? That would save so much time instead of having to display onto there? Well I mean I already have it done. This can be called on after
    var mainBox = document.getElementById("main");
    var newNoticeBox = createNewBox();
    var background = document.getElementById("backgroundImage");
    
    newNoticeBox.id = "noticeBox" + (mainBox.childElementCount - 1);
    // GetServer/API should go here for when they choose to add
    
    mainBox.appendChild(newNoticeBox);
    
} // Start all notice boxes at count of 1

function createNewBox(){
    var newNoticeBox = document.createElement("div");
    
    /* Set all of the CSS code for each created box */
    newNoticeBox.class = "noticeBox";
    newNoticeBox.style.display = "flex";
    newNoticeBox.style.height = "40%";
    newNoticeBox.style.width = "20%";
    newNoticeBox.style.border = "1px solid black";
    newNoticeBox.style.flexShrink = "0";
    newNoticeBox.style.marginTop = "2%";
    newNoticeBox.style.marginLeft = "3%";
    newNoticeBox.style.marginBottom = "1%";
    newNoticeBox.style.marginRight = "1%";
    newNoticeBox.style.backgroundColor = "blue";
    newNoticeBox.style.position = "relative";
    // Need to implement images to append here when getting API
    
    return newNoticeBox;
}

function dropDownLogin() {
    var openLoginMenu = document.getElementById("loginDropDown");
    var accSettingsChange = document.getElementById("accSettings");
    
    if(accSettingsChange.style.height == "300%")
    {
        accSettingsChange.style.height = "98%";
        accSettingsChange.style.border = "1px solid black";
        accSettingsChange.style.left = "0px";
    }
    
    else {
        var changeProfileDiv = document.getElementById("profileDiv");
        openLoginMenu.style.display = "inline-flex";
        openLoginMenu.style.height = "50%";

        accSettingsChange.style.height = "300%";
        accSettingsChange.style.border = "1px solid black";
        accSettingsChange.style.left = "0px";
        
//        changeProfileDiv.style.flexDirection = "column";
        changeProfileDiv.style.flexWrap = "wrap";
    }
}

