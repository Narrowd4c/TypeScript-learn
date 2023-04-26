"use strict";
var Status;
(function (Status) {
    Status[Status["Start"] = 1] = "Start";
    Status[Status["Close"] = 2] = "Close";
    Status[Status["Run"] = 20] = "Run";
    Status[Status["Stop"] = 21] = "Stop";
})(Status || (Status = {}));
const status = Status.Start;
const statusNum = 2; // 限定已擁有的數字
var StatusStr;
(function (StatusStr) {
    StatusStr["Start"] = "START";
    StatusStr["Close"] = "CLOSE";
    StatusStr["Run"] = "RUN";
    StatusStr["Stop"] = "STOP";
})(StatusStr || (StatusStr = {}));
// const statusStr: StatusStr = 'START'; error
const statusStr = StatusStr.Start;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9lbnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFLLE1BS0o7QUFMRCxXQUFLLE1BQU07SUFDUCxxQ0FBUyxDQUFBO0lBQ1QscUNBQUssQ0FBQTtJQUNMLGtDQUFRLENBQUE7SUFDUixvQ0FBSSxDQUFBO0FBQ1IsQ0FBQyxFQUxJLE1BQU0sS0FBTixNQUFNLFFBS1Y7QUFFRCxNQUFNLE1BQU0sR0FBVyxNQUFNLENBQUMsS0FBSyxDQUFBO0FBRW5DLE1BQU0sU0FBUyxHQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVc7QUFFeEMsSUFBSyxTQUtKO0FBTEQsV0FBSyxTQUFTO0lBQ1YsNEJBQWUsQ0FBQTtJQUNmLDRCQUFlLENBQUE7SUFDZix3QkFBVyxDQUFBO0lBQ1gsMEJBQWEsQ0FBQTtBQUNqQixDQUFDLEVBTEksU0FBUyxLQUFULFNBQVMsUUFLYjtBQUVELDhDQUE4QztBQUM5QyxNQUFNLFNBQVMsR0FBYyxTQUFTLENBQUMsS0FBSyxDQUFBIn0=