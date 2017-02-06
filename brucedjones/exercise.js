var exercise = {};

exercise.goalCheck = function(x, y) {
    // log coordinates to the console
    console.log('x=' + x + ', y=' + y);

    // your task:
    // complete if statement used to detect
    // whether center of ball is inside goal area 1
    if( x==139 && y==109) return false;
    if(x==350 && y==250) return false;
    if(x==640 && y==390) return false;
    return true;

    //return false;
};

module.exports = exercise;