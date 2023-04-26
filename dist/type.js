"use strict";
let obj = [
    { name: "rashid", age: 32 },
    { name: "ken", age: 28 }
];
let list = { name: "rashid", age: 34 };
let list2 = list;
function findMiddleMember(members) {
    return members[Math.floor(members.length / 2)];
}
findMiddleMember([210, 369, 102]);
let aFamily = {
    parents: [
        { name: 'Mom', job: 'software engineer' },
        { name: 'Dad', job: 'coding engineer' }
    ],
    mate: { name: 'Matesky', job: 'engineering coder' },
    children: [{ name: 'Babesky', job: 'none' }]
};
function getFilledArray(value, n) {
    return Array(n).fill(value);
}
let stringArray;
let numberArray;
let personArray;
let coordinateArray;
// Write your code below:
stringArray = getFilledArray('hi', 6);
numberArray = getFilledArray(9, 6);
personArray = getFilledArray({ name: 'J. Dean', age: 24 }, 6);
coordinateArray = getFilledArray([3, 4], 6);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFJLEdBQUcsR0FBb0M7SUFDdkMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7SUFDM0IsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7Q0FDM0IsQ0FBQTtBQWFELElBQUksSUFBSSxHQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUE7QUFFNUMsSUFBSSxLQUFLLEdBQVUsSUFBSSxDQUFBO0FBV3ZCLFNBQVMsZ0JBQWdCLENBQUksT0FBWTtJQUN2QyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBQ0QsZ0JBQWdCLENBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFTekMsSUFBSSxPQUFPLEdBQWtCO0lBQzNCLE9BQU8sRUFBRTtRQUNQLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsbUJBQW1CLEVBQUM7UUFDdkMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxpQkFBaUIsRUFBQztLQUN0QztJQUNELElBQUksRUFBRSxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLG1CQUFtQixFQUFDO0lBQ2pELFFBQVEsRUFBRSxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFDLENBQUM7Q0FDM0MsQ0FBQztBQUVGLFNBQVMsY0FBYyxDQUFJLEtBQVEsRUFBRSxDQUFTO0lBQzVDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRUQsSUFBSSxXQUFxQixDQUFDO0FBQzFCLElBQUksV0FBcUIsQ0FBQztBQUMxQixJQUFJLFdBQTBDLENBQUM7QUFDL0MsSUFBSSxlQUFtQyxDQUFDO0FBRXhDLHlCQUF5QjtBQUV6QixXQUFXLEdBQUcsY0FBYyxDQUFTLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUM3QyxXQUFXLEdBQUcsY0FBYyxDQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUMxQyxXQUFXLEdBQUcsY0FBYyxDQUE0QixFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQ3RGLGVBQWUsR0FBRyxjQUFjLENBQW1CLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBIn0=