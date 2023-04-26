"use strict";
// 
function formatValue(value) {
    // Write your code here
    if (typeof value === "string") {
        console.log(value.toLowerCase());
    }
    if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
}
formatValue('Hiya');
formatValue(42);
//
const timesList = ["string", 12];
// TypeScript 將只允許我們調用數字和布爾值共享的方法。
const batteryStatus = false;
batteryStatus.toString(); // No TypeScript error
function changeLight(color) {
    // ...
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdW5pb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLEdBQUc7QUFDSCxTQUFTLFdBQVcsQ0FBQyxLQUFzQjtJQUN6Qyx1QkFBdUI7SUFDdkIsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQTtLQUNsQztJQUNELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQzlCO0FBQ0gsQ0FBQztBQUVELFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwQixXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFaEIsRUFBRTtBQUNGLE1BQU0sU0FBUyxHQUF3QixDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUl0RCxrQ0FBa0M7QUFDbEMsTUFBTSxhQUFhLEdBQXFCLEtBQUssQ0FBQztBQUU5QyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxzQkFBc0I7QUFNaEQsU0FBUyxXQUFXLENBQUMsS0FBWTtJQUMvQixNQUFNO0FBQ1IsQ0FBQyJ9